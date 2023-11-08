> 新增于HBuilderX 3.5.2，需先开通[redis](uniCloud/redis-introduction.md)
> Added in HBuilderX 3.5.2, need to activate [redis](uniCloud/redis-introduction.md)

## JQL Cache Redis

uniCloud 提供了 MongoDB 和 Redis 2种数据库。并且提供了联动机制，可以方便的将 MongoDB 中的数据缓存到 Redis 中。
uniCloud provides two kinds of databases: MongoDB and Redis. And provides a linkage mechanism, which can easily cache the data in MongoDB into Redis.

适用场景：
Applicable scene:

需要频繁访问，但不会频繁修改的数据。比如更新不频繁的首页列表、banner、热搜、top排行等公共数据。
Data that needs to be accessed frequently, but not frequently modified. For example, public data such as infrequently updated homepage lists, banners, hot searches, and top rankings.

这些查询请求频次高，如果每次都去MongoDB读取，又慢又贵，还可能超时或超并发。
The frequency of these query requests is high. If you go to MongoDB to read each time, it is slow and expensive, and it may timeout or exceed concurrency.

使用`JQL Cache Redis`，就可以方便的将这些查询结果缓存在 Redis 中。即提升了访问速度，又提升了并发性能，还减少了云函数运行时长和数据库读取次数。
Using `JQL Cache Redis`, you can easily cache these query results in Redis. It not only improves the access speed, but also improves the concurrent performance, and also reduces the running time of cloud functions and the number of database reads.

- 不管 clientDB 的组件还是API，或者云函数/云对象JQL，都可以使用`JQL Cache Redis`
- `JQL Cache Redis` can be used regardless of clientDB components or API, or cloud function/cloud object JQL
- 但 JQL管理器不支持，此调试工具只能直接查询 MongoDB
- But JQL manager does not support, this debugging tool can only query MongoDB directly
- 云函数/云对象中使用`JQL Cache Redis`需加载 Redis 和 JQL 扩展库，并依赖`uni-config-center`公共模块
- To use `JQL Cache Redis` in cloud functions/cloud objects, you need to load Redis and JQL extension libraries and rely on the `uni-config-center` public module
- 本地运行也支持
- Local operation is also supported

## 原理
## Principle
1. 开发者在`uni-config-center`中配置指定 JQL 查询指令
1. The developer configures the specified JQL query command in `uni-config-center`
2. 客户端或云函数进行 JQL 查询时会判断当前指令是否被提前配置
2. When the client or cloud function performs a JQL query, it will determine whether the current command is configured in advance
	- 2.1 如未配置，继续进行普通查询连接 MongoDB
	- 2.1 If not configured, continue to connect to MongoDB with normal query
	- 2.2 如已配置，则去 Redis 中获取查询结果
	- 2.2 If configured, go to Redis to get query results
		* 2.2.1 如在 Redis 中查到结果，返回查询结果
		* 2.2.1 If the result is found in Redis, return the query result
		* 2.2.2 如发现 Redis 中无缓存结果或缓存过期，则再次连接 MongoDB 查询，返回查询结果的同时自动将该结果同步给 Redis。下次再访问就可以走 Redis 了。
		* 2.2.2 If it is found that there is no cached result in Redis or the cache has expired, connect the MongoDB query again, and automatically synchronize the result to Redis while returning the query result. You can go to Redis next time you visit.
3. 如果开发者更新了MongoDB里的数据，需调用 API让 Redis 中指定的缓存失效 [见下](#del-cache)
3. If the developer updates the data in MongoDB, the API needs to be called to invalidate the specified cache in Redis [see below](#del-cache)

## 配置方法@config

在`uniCloud/cloudfunctions/common/uni-config-center`下创建`uni-jql-cache-redis.json`文件（注意此文件是标准json格式，不支持注释）

如未安装`uni-config-center`，请在插件市场导入，插件地址：[uni-config-center](https://ext.dcloud.net.cn/plugin?id=4425)
If `uni-config-center` is not installed, please import it in the plugin market, the plugin address: [uni-config-center](https://ext.dcloud.net.cn/plugin?id=4425)

`uni-jql-cache-redis.json`文件是一个数组，其中每一项是一个缓存配置。示例内容如下
The `uni-jql-cache-redis.json` file is an array where each item is a cache configuration. The example content is as follows

```js
[{
	"id": "test-get", // 缓存id，不可重复，必填
	"jql": "db.collection('test').limit(10).get()", // 要缓存的数据库指令，必填
	"expiresIn": 3600 // 缓存有效期，单位秒，非必填
}]
```

`expiresIn`是缓存有效期，单位秒，有效期的开始时间为第一次cache到redis的时间（其实就是redis自带的有效期）。如果不填，就意味着不会根据时间失效。
`expiresIn` is the cache validity period, in seconds. The start time of the validity period is the time from the first cache to redis (in fact, the validity period that comes with redis). If not filled, it means that it will not expire according to time.

配置成功后，客户端或云端JQL查询`db.collection('test').limit(10).get()`时，就会优先去redis中找，如果没找到，会从MongoDB中找然后自动cache到redis中。
After the configuration is successful, when the client or cloud JQL queries `db.collection('test').limit(10).get()`, it will first go to redis to find it. If it is not found, it will find it from MongoDB and then automatically cache into redis.

命中缓存时，clientDB或使用了jql扩展的云函数/云对象会输出以下日志
When the cache is hit, clientDB or cloud functions/cloud objects using the jql extension will output the following logs

```js
"当前请求需使用Redis缓存" 
"返回Redis内缓存的结果" 
```

未命中缓存时，clientDB或使用了jql扩展的云函数/云对象会输出以下日志
When the cache is missed, clientDB or cloud functions/cloud objects using the jql extension will output the following logs

```js
"当前请求需使用Redis缓存" 
"未命中Redis缓存，设置Redis缓存" 
```

`JQL Cache Redis`会将缓存配置对应的查询结果缓存到key为`unicloud:jql-cache:${id}:string`的redis缓存内。可以在uniCloud web控制台的redis视图中找到。
`JQL Cache Redis` will cache the query results corresponding to the cache configuration in the redis cache whose key is `unicloud:jql-cache:${id}:string`. It can be found in the redis view of the uniCloud web console.

配置`"jql": "db.collection('test').limit(10).get()"`时需注意，普通的JQL语句放在json的value中需要对引号转义，见下。
When configuring `"jql": "db.collection('test').limit(10).get()"`, please note that the quotation marks need to be escaped when placing ordinary JQL statements in the value of json, see below.

### 关于引号转义@escape-quote
### About quote escaping @escape-quote

由于需要将查询语句放在json文件内，而json内字符串又需要引号包围，所以对于查询语句内使用双引号的场景需转义后再放到配置内。
Since the query statement needs to be placed in the json file, and the strings in the json need to be surrounded by quotation marks, the scenarios that use double quotation marks in the query statement need to be escaped and then placed in the configuration.

例如：
E.g:

```js
// jql
db.collection('book').where('author=="caoxueqin"').get()

// 转义后
// after escaping
"db.collection('book').where('author==\"caoxueqin\"').get()"
```

如果你的查询语句比较复杂，自己一个个加转义符比较麻烦。可以通过如下方式获取转义后的字符串
If your query statement is more complex, it is more troublesome to add escape characters one by one. The escaped string can be obtained as follows

1. 创建一个云函数内容如下
1. Create a cloud function as follows

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
2. Create a `test.jql` file in the cloud function root directory, the content is the jql query statement to be escaped

```js
db.collection('book').where('author=="caoxueqin"').get()
```

3. 本地运行云函数，查看HBuilderX控制台的云函数日志输出
3. Run the cloud function locally and view the cloud function log output in the HBuilderX console

```text
21:56:44.135 [本地运行]"db.collection('book').where('author==\"caoxueqin\"').get()" uniCloud-aliyun/cloudfunctions/test/index.js:5:10
```

### 注意事项
### Precautions

- 仅可缓存查询的JQL指令，增删改JQL指令无效
- Only JQL commands that can be queried can be cached, adding, deleting or modifying JQL commands is invalid
- 不可缓存使用了`db.getCloudEnv()`或`$cloudEnv_`开头的云端环境变量的查询
- Uncacheable queries using cloud environment variables starting with `db.getCloudEnv()` or `$cloudEnv_`
- 不可缓存使用了action的查询
- Do not cache queries that use actions
- 启用JQL扩展库的云函数/云对象同时也要启用Redis扩展库才可以正常使用缓存功能，否则依然从数据库查询
- Cloud functions/cloud objects that enable the JQL extension library must also enable the Redis extension library to use the cache function normally, otherwise they will still be queried from the database
- 配置后或设置缓存失效后，开发者可自己请求一次JQL查询，让cache生效。避免用户第一次访问时仍然访问MongoDB
- After configuration or setting cache invalidation, developers can request a JQL query by themselves to make the cache take effect. Avoid users still accessing MongoDB the first time they access
- 在查询语句内如果有字符串使用引号，请务必保证**单双引号和配置的缓存一致**，例如：缓存配置为双引号写法：`.where('name=="caoxueqin"')`，调用时使用了转义单引号写法，`.where('name==\'caoxueqin\'')`，那么这个调用查询就不会走redis缓存。此问题后续优化
- If there are strings using quotation marks in the query statement, please ensure that **single and double quotation marks are consistent with the configured cache**, for example: the cache configuration is written in double quotation marks: `.where('name=="caoxueqin"') `, the escaped single quote is used when calling, `.where('name==\'caoxueqin\'')`, then this call query will not go to the redis cache. Subsequent optimization of this problem

## multiSend使用缓存@multi-send
##multiSend uses cache @multi-send

使用multiSend同时发送多条指令时，不支持将整个multiSend进行缓存。需要单独缓存每条指令。
When using multiSend to send multiple instructions at the same time, caching the entire multiSend is not supported. Each instruction needs to be cached separately.

例：
example:

```js
const book = db.collection('book').limit(10).getTemp()
const author = db.collection('author').limit(10).getTemp()
db.multiSend(book,author)
```

对上述数据库指令不能直接将缓存配置中的jql配置为`const book = db.collection('book').limit(10).getTemp();const author = db.collection('author').limit(10).getTemp();db.multiSend(book,author)`
For the above database directives, you cannot directly configure jql in the cache configuration as `const book = db.collection('book').limit(10).getTemp();const author = db.collection('author').limit( 10).getTemp();db.multiSend(book,author)`

需要单独配置book表的查询语句和author表的查询语句，注意getTemp方法也需要改为get方法
You need to configure the query statement of the book table and the query statement of the author table separately. Note that the getTemp method also needs to be changed to the get method.

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
## Joint table query @lookup

联表时配置的缓存语句也和jql语法一致
The cache statement configured when joining the table is also consistent with the jql syntax

例：
example:

```js
const book = db.collection('book').limit(10).getTemp()
const author = db.collection('author').getTemp()
db.collection(book, author).get()
```

`uni-jql-cache-redis.json`缓存配置如下
`uni-jql-cache-redis.json` cache configuration is as follows

```json
[{
	"id": "book-author-lookup",
	"jql": "const book = db.collection('book').limit(10).getTemp();const author = db.collection('author').getTemp();db.collection(book, author).get()",
	"expiresIn": 3600
}]
```

## 删除redis缓存@del-cache
## delete redis cache @del-cache

当MongoDB中的数据变更时，应该主动删除Redis中的缓存。
When the data in MongoDB changes, the cache in Redis should be actively deleted.

比如把banner轮播图的数据缓存在Redis中后，在admin中修改banner，应该同时在云函数中操作redis，将banner的缓存设为失效
For example, after caching the data of the banner carousel in Redis, and modifying the banner in the admin, you should operate redis in the cloud function at the same time, and set the banner cache to invalid

使用redis删除命令传入缓存对应的key即可删除缓存。
Use the redis delete command to pass in the key corresponding to the cache to delete the cache.

例：
example:

```js
const redis = uniCloud.redis()
const id = 'banner' // 这个id就是`uni-jql-cache-redis.json`中配置的id
const cacheKey = `unicloud:jql-cache:${id}:string`
await redis.del(cacheKey)
```


