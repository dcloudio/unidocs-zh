> 新增于HBuilderX 3.5.2，需先开通[redis](uniCloud/redis-introduction.md)

## JQL Cache Redis

uniCloud 提供了 MongoDB 和 Redis 2种数据库。并且提供了联动机制，可以方便的将 MongoDB 中的数据缓存到 Redis 中。

适用场景：

需要频繁访问，但不会频繁修改的数据。比如更新不频繁的首页列表、banner、热搜、top排行等公共数据。

这些查询请求频次高，如果每次都去MongoDB读取，又慢又贵，还可能超时或超并发。

使用`JQL Cache Redis`，就可以方便的将这些查询结果缓存在 Redis 中。即提升了访问速度，又提升了并发性能，还减少了云函数运行时长和数据库读取次数。

- 不管 clientDB 的组件还是API，或者云函数/云对象JQL，都可以使用`JQL Cache Redis`
- 但 JQL管理器不支持，此调试工具只能直接查询 MongoDB
- 云函数/云对象中使用`JQL Cache Redis`需加载 Redis 和 JQL 扩展库，并依赖`uni-config-center`公共模块
- 本地运行也支持

## 原理
1. 开发者在`uni-config-center`中配置指定 JQL 查询指令
2. 客户端或云函数进行 JQL 查询时会判断当前指令是否被提前配置
	- 2.1 如未配置，继续进行普通查询连接 MongoDB
	- 2.2 如已配置，则去 Redis 中获取查询结果
		* 2.2.1 如在 Redis 中查到结果，返回查询结果
		* 2.2.2 如发现 Redis 中无缓存结果或缓存过期，则再次连接 MongoDB 查询，返回查询结果的同时自动将该结果同步给 Redis。下次再访问就可以走 Redis 了。
3. 如果开发者更新了MongoDB里的数据，需调用 API让 Redis 中指定的缓存失效 [见下](#del-cache)

## 配置方法@config

在`uniCloud/cloudfunctions/common/uni-config-center`下创建`uni-jql-cache-redis.json`文件（注意此文件是标准json格式，不支持注释）

如未安装`uni-config-center`，请在插件市场导入，插件地址：[uni-config-center](https://ext.dcloud.net.cn/plugin?id=4425)

`uni-jql-cache-redis.json`文件是一个数组，其中每一项是一个缓存配置。示例内容如下

```js
[{
	"id": "test-get", // 缓存id，不可重复，必填
	"jql": "db.collection('test').limit(10).get()", // 要缓存的数据库指令，必填
	"expiresIn": 3600 // 缓存有效期，单位秒，非必填
}]
```

`expiresIn`是缓存有效期，单位秒，有效期的开始时间为第一次cache到redis的时间（其实就是redis自带的有效期）。如果不填，就意味着不会根据时间失效。

配置成功后，客户端或云端JQL查询`db.collection('test').limit(10).get()`时，就会优先去redis中找，如果没找到，会从MongoDB中找然后自动cache到redis中。

命中缓存时，clientDB或使用了jql扩展的云函数/云对象会输出以下日志

```js
"当前请求需使用Redis缓存" 
"返回Redis内缓存的结果" 
```

未命中缓存时，clientDB或使用了jql扩展的云函数/云对象会输出以下日志

```js
"当前请求需使用Redis缓存" 
"未命中Redis缓存，设置Redis缓存" 
```

`JQL Cache Redis`会将缓存配置对应的查询结果缓存到key为`unicloud:jql-cache:${id}:string`的redis缓存内。可以在uniCloud web控制台的redis视图中找到。

配置`"jql": "db.collection('test').limit(10).get()"`时需注意，普通的JQL语句放在json的value中需要对引号转义，见下。

### 关于引号转义@escape-quote

由于需要将查询语句放在json文件内，而json内字符串又需要引号包围，所以对于查询语句内使用双引号的场景需转义后再放到配置内。

例如：

```js
// jql
db.collection('book').where('author=="caoxueqin"').get()

// 转义后
"db.collection('book').where('author==\"caoxueqin\"').get()"
```

如果你的查询语句比较复杂，自己一个个加转义符比较麻烦。可以通过如下方式获取转义后的字符串

1. 创建一个云函数内容如下

```js
'use strict';
const fs = require('fs')
const path = require('path')
exports.main = async (event, context) => {
  console.log(
	fs.readFileSync(
	  path.resolve(__dirname, 'test.jql')
	).toString()
  )
};
```

2. 在云函数根目录创建一个`test.jql`文件，内容为要转义的jql查询语句

```js
db.collection('book').where('author=="caoxueqin"').get()
```

3. 本地运行云函数，查看HBuilderX控制台的云函数日志输出

```text
21:56:44.135 [本地运行]"db.collection('book').where('author==\"caoxueqin\"').get()" uniCloud-aliyun/cloudfunctions/test/index.js:5:10
```

### 注意事项

- 仅可缓存查询的JQL指令，增删改JQL指令无效
- 不可缓存使用了`db.getCloudEnv()`或`$cloudEnv_`开头的云端环境变量的查询
- 不可缓存使用了action的查询
- 启用JQL扩展库的云函数/云对象同时也要启用Redis扩展库才可以正常使用缓存功能，否则依然从数据库查询
- 配置后或设置缓存失效后，开发者可自己请求一次JQL查询，让cache生效。避免用户第一次访问时仍然访问MongoDB
- 在查询语句内如果有字符串使用引号，请务必保证**单双引号和配置的缓存一致**，例如：缓存配置为双引号写法：`.where('name=="caoxueqin"')`，调用时使用了转义单引号写法，`.where('name==\'caoxueqin\'')`，那么这个调用查询就不会走redis缓存。此问题后续优化

## multiSend使用缓存@multi-send

使用multiSend同时发送多条指令时，不支持将整个multiSend进行缓存。需要单独缓存每条指令。

例：

```js
const book = db.collection('book').limit(10).getTemp()
const author = db.collection('author').limit(10).getTemp()
db.multiSend(book,author)
```

对上述数据库指令不能直接将缓存配置中的jql配置为`const book = db.collection('book').limit(10).getTemp();const author = db.collection('author').limit(10).getTemp();db.multiSend(book,author)`

需要单独配置book表的查询语句和author表的查询语句，注意getTemp方法也需要改为get方法

```json
[{
	"id": "book-get",
	"jql": "db.collection('book').limit(10).get()",
	"expiresIn": 3600
}, {
	"id": "author-get",
	"jql": "db.collection('author').limit(10).get()",
	"expiresIn": 3600
}]
```

## 联表查询@lookup

联表时配置的缓存语句也和jql语法一致

例：

```js
const book = db.collection('book').limit(10).getTemp()
const author = db.collection('author').getTemp()
db.collection(book, author).get()
```

`uni-jql-cache-redis.json`缓存配置如下

```json
[{
	"id": "book-author-lookup",
	"jql": "const book = db.collection('book').limit(10).getTemp();const author = db.collection('author').getTemp();db.collection(book, author).get()",
	"expiresIn": 3600
}]
```

## 删除redis缓存@del-cache

当MongoDB中的数据变更时，应该主动删除Redis中的缓存。

比如把banner轮播图的数据缓存在Redis中后，在admin中修改banner，应该同时在云函数中操作redis，将banner的缓存设为失效

使用redis删除命令传入缓存对应的key即可删除缓存。

例：

```js
const redis = uniCloud.redis()
const id = 'banner' // 这个id就是`uni-jql-cache-redis.json`中配置的id
const cacheKey = `unicloud:jql-cache:${id}:string`
await redis.del(cacheKey)
```


