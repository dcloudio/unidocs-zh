> 新增于HBuilderX 3.5.2，需先开通[redis](uniCloud/redis-introduction.md)

业务中经常遇到不常改动或不需要及时更新的数据，此时如果每次都去数据库读取会浪费数据库读写次数，并且会增加云函数运行时间导致云函数整体能处理的请求数量变低。为了应对这种情况，jql支持了将配置的查询指令的结果缓存在redis内的功能。

详细用法如下

1. 在插件市场导入`uni-config-center`插件，插件地址：[uni-config-center](https://ext.dcloud.net.cn/plugin?id=4425)
2. 在`uniCloud/cloudfunction/common/uni-config-center`下创建`uni-jql-cache-redis.json`文件（注意此文件是标准json格式，不支持注释）

	整个`uni-jql-cache-redis.json`文件是一个数组，其中每一项是一个缓存配置。示例内容如下

	```js
	[{
		"id": "test-get", // 缓存id
		"jql": "db.collection('test').limit(10).get()", // 要缓存的数据库指令
		"expiresIn": 3600 // 缓存有效期
	}]
	```

3. 配置成功后与配置匹配的clientDB请求及使用jql扩展库的数据库查询会优先使用redis缓存（第一次调用匹配的查询语句时会先设置一次缓存）

未命中缓存时，clientDB或使用了jql扩展的云函数云函数会输出以下日志

```js
"当前请求需使用Redis缓存" 
"返回Redis内缓存的结果" 
```

命中缓存时，clientDB或使用了jql扩展的云函数云函数会输出以下日志

```js
"当前请求需使用Redis缓存" 
"未命中Redis缓存，设置Redis缓存" 
```

**缓存生效场景**

- 所有clientDB查询请求
- 启用redis扩展和jql扩展的云函数内的jql数据库查询请求
- unicloud-db组件的查询请求

jql会将缓存配置对应的查询结果缓存到key为`unicloud:jql-cache:${id}:string`redis缓存内

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

```js
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

缓存配置如下

```js
[{
	"id": "book-author-lookup",
	"jql": "const book = db.collection('book').limit(10).getTemp();const author = db.collection('author').getTemp();db.collection(book, author).get()",
	"expiresIn": 3600
}]
```

## 删除redis缓存@del-cache

使用redis删除命令传入缓存对应的key即可删除缓存

例：

```js
const redis = uniCloud.redis()
const id = 'book-author-lookup'
const cacheKey = `unicloud:jql-cache:${id}:string`
await redis.del(cacheKey)
```

## 注意事项

- 仅可缓存查询指令
- 注意id为缓存唯一id，不可与其他项重复
- 不可缓存使用了`db.getCloudEnv()`或`$cloudEnv_`开头的云端环境变量的查询
- 不可缓存使用了action的查询
- 不配置`expiresIn`时数据将会持久保存在redis内
- 启用jql扩展库的云函数同时也要启用redis扩展库才可以正常使用缓存功能，否则依然从数据库查询