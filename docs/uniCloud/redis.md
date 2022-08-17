# 扩展库Redis
# Extension library Redis

> 2021年11月18日，腾讯云和阿里云均支持
> On November 18, 2021, both Tencent Cloud and Alibaba Cloud support

> 使用腾讯云node12和redis，务必仔细阅读此文档：[keepRunningAfterReturn](uniCloud/cf-functions.md?id=keep-running)
> Use Tencent Cloud node12 and redis, be sure to read this document carefully: [keepRunningAfterReturn](uniCloud/cf-functions.md?id=keep-running)

Redis是一个基于key/value的内存数据库。在项目中通常作为MongoDB等磁盘数据库的补充来搭配使用。
Redis is a key/value based in-memory database. It is usually used in projects as a supplement to disk databases such as MongoDB.
相对于磁盘数据库，Redis的核心优势是快。因为操作内存要比磁盘快的多，并且Redis只支持key/value数据，读写都很快。但Redis没有磁盘数据库丰富的查询等功能。
The core advantage of Redis over disk databases is that it is fast. Because operating memory is much faster than disk, and Redis only supports key/value data, reading and writing are fast. But Redis does not have the rich query and other functions of the disk database.

Redis一般需要与MongoDB搭配使用，MongoDB做主存储，Redis缓存部分数据应对高性能需求场景。
Redis generally needs to be used in conjunction with MongoDB, MongoDB is the main storage, and Redis caches some data to meet high-performance demand scenarios.

在uniCloud中，Redis还有一个特点，是它按容量和使用时长计费，访问它不耗费云数据库的读写次数。
In uniCloud, Redis also has a feature that it is billed according to the capacity and usage time, and accessing it does not consume the number of reads and writes of the cloud database.

Redis常见使用场景：
Common usage scenarios of Redis:
- 缓存高频数据，比如首页列表、banner列表、热门排行。MongoDB数据更新后同步给Redis，这些频繁的请求就不再查询MongoDB数据库
- Cache high-frequency data, such as homepage list, banner list, popular ranking. After the MongoDB data is updated, it is synchronized to Redis, and these frequent requests will no longer query the MongoDB database
- 秒杀、抢购。短时间大量并发可能发生超卖，此时必须使用Redis解决
- Lightning strikes and snap purchases. A large number of concurrency in a short period of time may be oversold. At this time, Redis must be used to solve the problem.
- ip黑名单屏蔽。希望较快封杀某些ip请求，缓解MongoDB数据库压力。
- ip blacklist blocking. It is hoped that some IP requests will be blocked sooner to relieve the pressure on the MongoDB database.
- 其他数据库操作速度不满足需求的场景
- Scenarios where the speed of other database operations does not meet the requirements

## 开通Redis扩展库@buy
## Open Redis extension library @buy

参考[开通redis](uniCloud/redis-buy.md)
Refer to [Open redis](uniCloud/redis-buy.md)

## 为云函数启用redis扩展库@use-in-function
## Enable redis extension library for cloud functions @use-in-function

Redis的sdk体积不小，没有内置在云函数中。在需要Redis的云函数里，开发者需手动配置Redis扩展库。（Redis没有免费试用，需购买才可以使用）
Redis's sdk is not small in size and is not built into cloud functions. In cloud functions that require Redis, developers need to manually configure the Redis extension library. (Redis does not have a free trial, you need to purchase it before you can use it)

- HBuilderX 3.4起提供了可视化界面，新建云函数/云对象时可选择Redis扩展库，或者在已有的云函数目录点右键选择“管理公共模块或扩展库依赖”
- HBuilderX 3.4 provides a visual interface. When creating a new cloud function/cloud object, you can choose the Redis extension library, or right-click on the existing cloud function directory and select "Manage Common Modules or Extension Library Dependencies"

- HBuilderX 3.4以前，没有可视化界面，需要开发者手动在云函数/云对象的package.json内添加云函数的扩展库（如果云函数目录下没有package.json，可以通过在云函数目录下执行`npm init -y`来生成）
- Before HBuilderX 3.4, there is no visual interface, and developers need to manually add the cloud function extension library in the cloud function/cloud object package.json (if there is no package.json in the cloud function directory, you can execute ` npm init -y` to generate)

下面是一个开启了redis扩展库的云函数的package.json示例，**注意不可有注释，以下文件内容中的注释仅为说明，如果拷贝此文件，切记去除注释**
The following is an example of package.json for a cloud function with redis extension library enabled. **Note that there should be no comments. The comments in the following file content are for illustration only. If you copy this file, remember to remove the comments**

```js
{
	"name": "redis-test",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"extensions": {
		"uni-cloud-redis": {} // 配置为此云函数开启redis扩展库，值为空对象留作后续追加参数，暂无内容
	},
	"author": ""
}
```

## 云函数中调用Redis
## Calling Redis in cloud functions

```js
// 云函数中调用Redis示例
// Example of calling Redis in cloud function
'use strict';
const redis = uniCloud.redis()
exports.main = async (event, context) => {
	const getResult = await redis.get('my-key')
	const setResult = await redis.set('my-key', 'value-test')
	return {
    getResult,
    setResult
  }
};

```

**注意**
**Notice**
- redis中，以冒号分割key，在redis的uniCloud web控制台的可视化界面中，将以tree的方式显示。折叠所有使用同一前缀的key。
- In redis, the key is separated by a colon, and it will be displayed as a tree in the visual interface of the uniCloud web console of redis. Collapse all keys with the same prefix.
比如2个key，`uni:aa`和`uni:bb`，将显示为根节点为uni的tree，展开后有aa和bb。
For example, two keys, `uni:aa` and `uni:bb`, will be displayed as a tree whose root node is uni, with aa and bb after expansion.
- 以`uni:`、`dcloud:`、`unicloud:`为前缀的redis的key，为**官方前缀**。开发者自己的业务所需的key应避免使用这些前缀。
- Redis keys prefixed with `uni:`, `dcloud:`, `unicloud:` are **official prefixes**. Keys required by the developer's own business should avoid using these prefixes.
- 调用`uniCloud.redis()`时返回的redis实例对应着一个连接，多次调用时如果存在未断开连接的redis实例则返回此实例。如果不存在redis实例或之前的redis实例已断开连接则返回新的redis实例。
- The redis instance returned when `uniCloud.redis()` is called corresponds to a connection. If there is an undisconnected redis instance when called multiple times, this instance is returned. Returns a new redis instance if there is no redis instance or the previous redis instance has been disconnected.
- redis实例创建时并未建立与redis的连接，而是在第一次调用redis方法时才会与redis建立连接。在实际业务中的表现就是一个云函数实例第一次调用redis方法会慢上几毫秒
- When a redis instance is created, a connection to redis is not established, but a connection to redis is established when the redis method is called for the first time. The performance in actual business is that the first time a cloud function instance calls the redis method, it will be a few milliseconds slower
- 为云函数开启redis扩展会影响云函数固定ip功能，详情参考：[云函数固定出口IP](uniCloud/cf-functions.md?id=eip)
- Enabling the redis extension for cloud functions will affect the fixed ip function of cloud functions. For details, please refer to: [cloud function fixed export IP](uniCloud/cf-functions.md?id=eip)

## Redis本地运行@local-function
## Redis run locally @local-function

> HBuilderX 3.4.10 起支持
> Supported since HBuilderX 3.4.10

因为Redis在云函数的内网中，所以只能在云端云函数中访问，而不能在本地云函数中访问。每次调试Redis相关功能需要不断的上传云函数，严重影响开发效率。自HBuilderX 3.4.10起，本地云函数可以通过云端内置代理访问云端Redis。如果在本地调用云端Redis的话会在云函数日志内看到`HBuilderX运行调试Redis的代理请求`字样。
Because Redis is in the intranet of the cloud function, it can only be accessed in the cloud cloud function, but not in the local cloud function. Every time you debug Redis-related functions, you need to upload cloud functions continuously, which seriously affects the development efficiency. Since HBuilderX 3.4.10, local cloud functions can access cloud Redis through the cloud built-in proxy. If you call Redis on the cloud locally, you will see the words `HBuilderX runs and debugs the proxy request of Redis` in the cloud function log.

## 数据类型@data-type
## data type @data-type

Redis中数据被存储为key-value形式，key均为字符串，value有以下几种类型
The data in Redis is stored in the form of key-value, the key is a string, and the value has the following types

### 字符串String
### String String

字符串类型，这是最简单Redis类型。需要注意的是Redis并没有number类型，如果存入number类型的数据最终也会转为string类型。
String type, which is the simplest Redis type. It should be noted that Redis does not have a number type. If the data stored in the number type will eventually be converted to the string type.

```js
await redis.set('string-key', 1) // 设置string-key的值为字符串"1"
await redis.get('string-key') // 获取string-key的值，"1"
```

### 列表List
### List List

列表类型，类似JavaScript中的数组，但是有区别。严格来说List是基于链表实现的，和js中数组相比一个显著的差异就是头部插入的效率。如果你测试过往一个长度百万的数组最前面插入一位的话，你会发现这个操作会耗时很久。但是List并没有这个问题，对于List来说在前后插入数据耗时是一样的。
List types, similar to arrays in JavaScript, but with differences. Strictly speaking, List is implemented based on linked lists, and a significant difference compared to arrays in js is the efficiency of header insertion. If you test inserting one bit at the top of an array with a length of one million in the past, you will find that this operation will take a long time. But List does not have this problem. For List, it takes the same time to insert data before and after.

**注意**
**Notice**

- list为空时对应的键会被删除，即redis内不存在空List
- When the list is empty, the corresponding key will be deleted, that is, there is no empty List in redis

```js
await redis.lpush('list-key', 1) // 往list-key左侧添加一个元素，不存在则创建
```

### 散列Hash
### Hash Hash

Hash类型类似js里面的Object。
Hash type is similar to Object in js.

```js
await redis.hmset('hash-key', 'key1', 'value1', 'key2', 'value2') // 批量为hash-key添加键值，不存在则创建
await redis.hset('hash-key', 'key1', 'value1') // 为hash-key添加键值，不存在则创建
```

### 集合Set
### Collection Set

集合是String的**无序排列**，集合内的元素不可重复
The collection is a **unordered arrangement** of String, and the elements in the collection cannot be repeated

```js
await redis.sadd('set-key', 'value1', 'value2') // 往集合内添加数据，不存在则创建
```

### 有序集合Sorted Sets
### Sorted Sets Sorted Sets

有序集合和集合一样也是string类型元素的集合，且不允许重复的成员。不同的是每个元素将有一个double类型的分数（分数不一定是连续的），用于对元素进行排序
Sorted sets, like sets, are also sets of elements of type string, and do not allow duplicate members. The difference is that each element will have a score of type double (the scores do not have to be consecutive), which is used to sort the elements

```js
await redis.zadd('sorted-set-key', 1, 'value1') // 往有序集合内添加数据并指定分数，不存在则创建
await redis.zadd('sorted-set-key', 2, 'value2')
```

## API@api

> 此处仅列举常见命令，完整命令支持请查看[redis官方文档](https://redis.io/commands)
> Only common commands are listed here. For complete command support, please refer to [redis official documentation](https://redis.io/commands)

### get

用于获取字符串类型的数据
Used to get data of type string

**接口形式**
**Interface form**

```js
await redis.get(key: string)
```

**入参说明**
**Introduction to parameters**

|参数	|说明	|必填	|说明	|
|Parameters |Description |Required |Description |
|--		|--		|--		|--		|
|key	|键		|是		|			|
|key |key |Yes | |

**返回值**
**return value**

此接口返回获取到的数据（字符串类型），返回null表示无此键
This interface returns the obtained data (string type), and returns null to indicate that there is no such key

**示例**
**Example**

```js
await redis.get('string-key') // '1'
```

### set

用于设置字符串类型数据，新增、修改均可
It is used to set string type data, which can be added or modified.

**接口形式**
**Interface form**

该接口有多种形式
The interface comes in many forms

```js
await redis.set(key: string, value: string, flag: string)
await redis.set(key: string, value: string, mode: string, duration: number)
await redis.set(key: string, value: string, mode: string, duration: number, flag: string)
```

**入参说明**
**Introduction to parameters**

|参数		|说明						|必填						|说明									|
|Parameters |Description |Required |Description |
|--			|--							|--							|--										|
|key		|键							|是							|										|
|key |key |Yes | |
|value		|值							|是							|										|
|value |value |Yes | |
|duration	|过期时间，到期后自动删除	|否							|										|
|duration |Expire time, automatically delete after expiration |No | |
|mode		|标识duration的单位			|否（duration不为空时必填）	|EX：单位秒，PX：单位毫秒				|
|mode |Identifies the unit of the duration |No (required when duration is not empty) |EX: in seconds, PX: in milliseconds |
|flag		|区分状态进行SET			|否							|NX：不存在时才设置，XX：存在时才设置	|
|flag |Set the status according to the status |No |NX: set only when it does not exist, XX: set it only when it exists |

**返回值**
**return value**

此接口返回字符串类型'OK'表示操作成功，返回null表示未更新
This interface returns the string type 'OK' to indicate that the operation is successful, and returns null to indicate that it has not been updated

**示例**
**Example**

```js
await redis.set('string-key', 1)  // redis内存储为字符串"1"
await redis.set('string-key', '1', 'NX')  // string-key不存在时设置为1
await redis.set('string-key', '1', 'EX', 100)  // string-key 100秒后过期
await redis.set('string-key', '1', 'EX', 100, 'NX')  // string-key不存在时设置为1，过期时间设置为100秒
```

### setex

键存在时，设置为指定字符串并指定过期时间
When the key exists, set to the specified string and specify the expiration time

**接口形式**
**Interface form**

```js
await redis.setex(key: string, seconds: number, value: string)
```

**入参说明**
**Introduction to parameters**

|参数		|说明			|必填	|说明			|
|Parameters |Description |Required |Description |
|--			|--				|--		|--				|
|key		|键				|是		|					|
|key |key |Yes | |
|seconds|过期时间	|是		|单位：秒	|
|seconds|Expire Time |Yes |Unit: Seconds |
|value	|值				|是		|					|
|value |value |Yes | |

**返回值**
**return value**

此接口返回字符串类型'OK'表示操作成功，返回null表示未更新
This interface returns the string type 'OK' to indicate that the operation is successful, and returns null to indicate that it has not been updated

**示例**
**Example**

```js
await redis.setex('string-key', 10, 'value')  // 值设置为value，过期时间10秒
```

### setnx

键不存在时，设置为指定字符串
When the key does not exist, set to the specified string

**接口形式**
**Interface form**

```js
await redis.setnx(key: string, value: string)
```

**入参说明**
**Introduction to parameters**

|参数    |说明      |必填  |说明      |
|Parameters |Description |Required |Description |
|--      |--        |--    |--        |
|key    |键        |是    |          |
|key |key |Yes | |
|value  |值        |是    |          |
|value |value |Yes | |

**返回值**
**return value**

此接口返回字符串类型'OK'表示操作成功，返回null表示未更新
This interface returns the string type 'OK' to indicate that the operation is successful, and returns null to indicate that it has not been updated

**示例**
**Example**

```js
await redis.setnx('string-key', 'value')  // 键string-key不存在时将值设置为'value'
```

### mget

批量获取指定键的值
Get the value of the specified key in batches

**接口形式**
**Interface form**

```js
await redis.mget(key1: string, key2: string, ...)
```

**入参说明**
**Introduction to parameters**

接收一个键的列表
receive a list of keys

**返回值**
**return value**

此接口按传入顺序返回获取到的数据组成的数组，存在的键返回字符串类型，不存在的键返回null
This interface returns an array of the acquired data in the incoming order, the existing key returns a string type, and the non-existing key returns null

**示例**
**Example**

```js
await redis.mget('key1', 'key2') // '1'
```

### mset

批量设置键值
Set key-values in bulk

**接口形式**
**Interface form**

```js
await redis.mset(key1: string, value1: string, key2: string, value2: string, ...)
```

**入参说明**
**Introduction to parameters**

接收一个键、值的列表
Receives a list of keys and values

**返回值**
**return value**

此接口只会返回OK
This interface will only return OK

**示例**
**Example**

```js
await redis.mset('key1', '1', 'key2', '2') // 'OK'
```

### del

用于删除执行的键
key to delete execution

**接口形式**
**Interface form**

```js
await redis.del(key: string)
```

**入参说明**
**Introduction to parameters**

|参数  |说明  |必填  |说明  |
|Parameters |Description |Required |Description |
|--    |--    |--    |--    |
|key  |键    |是    |      |
|key |key |Yes | |

**返回值**
**return value**

接口返回数字1表示删除成功，数字0表示键不存在删除失败
The interface returns the number 1 to indicate that the deletion is successful, and the number 0 to indicate that the key does not exist and the deletion fails.

**示例**
**Example**

```js
await redis.del('string-key') // '1'
```

### incr

对指定的键执行加1操作
Add 1 to the specified key

**接口形式**
**Interface form**

```js
await redis.incr(key: string)
```

**入参说明**
**Introduction to parameters**

|参数	|说明	|必填	|说明	|
|Parameters |Description |Required |Description |
|--		|--		|--		|--		|
|key	|键		|是		|			|
|key |key |Yes | |

**返回值**
**return value**

接口返回执行加一操作后的值（number类型）
The interface returns the value after adding one operation (number type)

**注意**
**Notice**

操作的值并非整数形式（例：字符串"1"是整数形式，字符串"a"非整数形式）时会直接抛出错误
When the value of the operation is not in integer form (for example: the string "1" is in integer form, the string "a" is not in integer form), an error will be thrown directly

**示例**
**Example**

```js
await redis.set('string-key', '1')
await redis.incr('string-key') // 2
```

### incrby

在指定的键上加一个整数
Adds an integer to the specified key

**接口形式**
**Interface form**

```js
await redis.incrby(key: string, increment: number)
```

**入参说明**
**Introduction to parameters**

|参数			|说明			|必填	|说明	|
|Parameters |Description |Required |Description |
|--				|--				|--		|--		|
|key			|键				|是		|			|
|key |key |Yes | |
|increment|增加的值	|是		|			|
|increment|Increased value |Yes | |

**返回值**
**return value**

接口返回执行加操作后的值（number类型）
The interface returns the value after the addition operation (number type)

**注意**
**Notice**

操作的值并非整数形式（例：字符串"1"是整数形式，字符串"a"非整数形式）时会直接抛出错误
When the value of the operation is not in integer form (for example: the string "1" is in integer form, the string "a" is not in integer form), an error will be thrown directly

**示例**
**Example**

```js
await redis.set('string-key', '1')
await redis.incrby('string-key', 2) // 3
```

### incrbyfloat

在指定的键上加一个浮点数
Adds a float to the specified key

**接口形式**
**Interface form**

```js
await redis.incrbyfloat(key: string, increment: number)
```

**入参说明**
**Introduction to parameters**

|参数			|说明																|必填	|说明	|
|Parameters |Description |Required |Description |
|--				|--																	|--		|--		|
|key			|键																	|是		|			|
|key |key |Yes | |
|increment|增加的值，允许为负值来实现相减功能	|是		|			|
|increment| Increment value, negative values are allowed for subtraction |yes | |

**返回值**
**return value**

接口返回执行加操作后的值（number类型）
The interface returns the value after the addition operation (number type)

**注意**
**Notice**

- 操作的值并非整数形式（例：字符串"1"是整数形式，字符串"a"非整数形式）时会直接抛出错误
- When the value of the operation is not in integer form (for example: the string "1" is in integer form, the string "a" is not in integer form), an error will be thrown directly
- 浮点数相加和js内表现一致，可能与预期结果不一致，见下方示例
- The addition of floating-point numbers is consistent with the performance in js, which may be inconsistent with the expected results, see the example below

**示例**
**Example**

```js
await redis.set('string-key', '1.1')
await redis.incrbyfloat('string-key', 2.2) // 3.30000000000000027
// js内执行 0.1 + 0.2 会得到类似的值 3.3000000000000003
// Doing 0.1 + 0.2 in js will get something like 3.3000000000000003
```

### decr

对指定的键执行减1操作
Decrements the specified key by 1

**接口形式**
**Interface form**

```js
await redis.decr(key: string)
```

**入参说明**
**Introduction to parameters**

|参数  |说明  |必填  |说明  |
|Parameters |Description |Required |Description |
|--    |--    |--    |--    |
|key  |键    |是    |      |
|key |key |Yes | |

**返回值**
**return value**

接口返回执行减1操作后的值（number类型）
The interface returns the value after subtracting 1 (number type)

**注意**
**Notice**

操作的值并非整数形式（例：字符串"1"是整数形式，字符串"a"非整数形式）时会直接抛出错误
When the value of the operation is not in integer form (for example: the string "1" is in integer form, the string "a" is not in integer form), an error will be thrown directly

**示例**
**Example**

```js
await redis.set('string-key', '1')
await redis.decr('string-key') // 0
```

### decrby

在指定的键上减一个整数
Subtract an integer from the specified key

**接口形式**
**Interface form**

```js
await redis.decrby(key: string, decrement: number)
```

**入参说明**
**Introduction to parameters**

|参数			|说明			|必填	|说明	|
|Parameters |Description |Required |Description |
|--				|--				|--		|--		|
|key			|键				|是		|			|
|key |key |Yes | |
|decrement|减少的值	|是		|			|
|decrement|decrement value |yes | |

**返回值**
**return value**

接口返回执行加一操作后的值（number类型）
The interface returns the value after adding one operation (number type)

**注意**
**Notice**

操作的值并非整数形式（例：字符串"1"是整数形式，字符串"a"非整数形式）时会直接抛出错误
When the value of the operation is not in integer form (for example: the string "1" is in integer form, the string "a" is not in integer form), an error will be thrown directly

**示例**
**Example**

```js
await redis.set('string-key', '1')
await redis.decrby('string-key', 2) // -1
```

### rpush

在List类型数据结尾追加数据
Append data at the end of List type data

**接口形式**
**Interface form**

```js
await redis.rpush(key: string, value: string)
```

**入参说明**
**Introduction to parameters**

|参数	|说明			|必填	|说明	|
|Parameters |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
|key |key |Yes | |
|value|追加的值	|是		|			|
|value|Append value |Yes | |

**返回值**
**return value**

接口返回执行追加操作后List的长度
The interface returns the length of the List after the append operation is performed

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown
- 如果指定的key不存在，则创建一个新的List并将value追加进去
- If the specified key does not exist, create a new List and append the value to it


### rpushx

用法同`rpush`，仅在list存在时才在List结尾追加数据
The usage is the same as `rpush`, only append data at the end of the list when the list exists

### rpop

从List类型数据结尾删除一条数据，并返回删除的值
Delete a piece of data from the end of List type data and return the deleted value

**注意：redis内List长度为0时会被自动删除**
**Note: When the length of List in redis is 0, it will be automatically deleted**

**接口形式**
**Interface form**

```js
await redis.rpop(key: string)
```

**入参说明**
**Introduction to parameters**

|参数	|说明			|必填	|说明	|
|Parameters |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
|key |key |Yes | |

**返回值**
**return value**

接口返回此次操作删除的值，如果key不存在则返回null
The interface returns the value deleted by this operation, or null if the key does not exist

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown

### lpush

在List类型数据开头追加数据
Append data at the beginning of List type data

**接口形式**
**Interface form**

```js
await redis.lpush(key: string, value: string)
```

**入参说明**
**Introduction to parameters**

|参数	|说明			|必填	|说明	|
|Parameters |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
|key |key |Yes | |
|value|追加的值	|是		|			|
|value|Append value |Yes | |

**返回值**
**return value**

接口返回执行追加操作后List的长度
The interface returns the length of the List after the append operation is performed

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown
- 如果指定的key不存在，则创建一个新的List并将value追加进去
- If the specified key does not exist, create a new List and append the value to it

### lpushx

用法同`lpush`，仅在list存在时才在List开头追加数据
The usage is the same as `lpush`, only append data at the beginning of the list when the list exists

### lpop

从List类型数据开头删除一条数据，并返回删除的值
Delete a piece of data from the beginning of the List type data and return the deleted value

**注意：redis内List长度为0时会被自动删除**
**Note: When the length of List in redis is 0, it will be automatically deleted**

**接口形式**
**Interface form**

```js
await redis.rpop(key: string)
```

**入参说明**
**Introduction to parameters**

|参数	|说明			|必填	|说明	|
|Parameters |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
|key |key |Yes | |

**返回值**
**return value**

接口返回此次操作删除的值，如果key不存在则返回null
The interface returns the value deleted by this operation, or null if the key does not exist

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown

### linsert

在List内指定元素位置前或后插入元素，未匹配到指定元素时不插入
Insert an element before or after the specified element position in the List, and not insert when the specified element is not matched

**接口形式**
**Interface form**

```js
await redis.linsert(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string)
```

**入参说明**
**Introduction to parameters**

|参数	|说明								|必填	|说明	|
|Parameters |Description |Required |Description |
|--		|--									|--		|--		|
|key	|键									|是		|			|
|key |key |Yes | |
|dir	|指定在前还是后插入	|是		|			|
|dir |specifies whether to insert before or after |yes | |
|pivot|指定要查找的元素		|是		|			|
|pivot|Specifies the element to find |Yes | |
|value|指定要插入的值			|是		|			|
|value|Specifies the value to insert |Yes | |

**返回值**
**return value**

接口返回插入后的list长度，未匹配到要查找的值时返回-1，key不存在时此接口返回0
The interface returns the length of the list after insertion. If the value to be searched is not matched, it returns -1. If the key does not exist, the interface returns 0.

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown

### lindex

获取List内指定下标的元素
Get the element at the specified subscript in the List

**接口形式**
**Interface form**

```js
await redis.lindex(key: string, index: number)
```

**入参说明**
**Introduction to parameters**

|参数	|说明			|必填	|说明	|
|Parameters |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
|key |key |Yes | |
|index|指定下标	|是		|			|
|index| specifies the subscript |yes | |

**返回值**
**return value**

接口返回指定下标在list内对应的值，如果key不存在则返回null
The interface returns the value corresponding to the specified subscript in the list, or null if the key does not exist

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown

### llen

返回List的长度
Returns the length of the List

**接口形式**
**Interface form**

```js
await redis.llen(key: string)
```

**入参说明**
**Introduction to parameters**

|参数	|说明			|必填	|说明	|
|Parameters |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
|key |key |Yes | |

**返回值**
**return value**

接口返回list的长度，如果key不存在则返回0
The interface returns the length of the list, or 0 if the key does not exist

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown

### exists

判断一个键是否存在
Check if a key exists

**接口形式**
**Interface form**

```js
await redis.exists(key: string)
```

**入参说明**
**Introduction to parameters**

|参数  |说明  |必填  |说明  |
|Parameters |Description |Required |Description |
|--    |--    |--    |--    |
|key  |键    |是    |      |
|key |key |Yes | |

**返回值**
**return value**

如果key存在返回数字1，如果key不存在返回数字0
Returns the number 1 if the key exists, and returns the number 0 if the key does not exist

**示例**
**Example**

```js
await redis.exists('string-key') // 0 | 1
```

### expire

为指定的key设置过期时间
Set the expiration time for the specified key

**接口形式**
**Interface form**

```js
await redis.expire(key: string, seconds: number)
```

**入参说明**
**Introduction to parameters**

|参数		|说明			|必填	|说明			|
|Parameters |Description |Required |Description |
|--			|--				|--		|--				|
|key		|键				|是		|					|
|key |key |Yes | |
|seconds|过期时间	|是		|单位：秒	|
|seconds|Expire Time |Yes |Unit: Seconds |

**返回值**
**return value**

如果成功设置过期时间返回数字1，如果未成功存在返回数字0
If the expiration time is successfully set, the number 1 is returned, and the number 0 is returned if it does not exist.

**示例**
**Example**

```js
await redis.expire('key', 600) // 设置key为600秒后过期
```

### ttl

获取过期时间剩余多少秒
Get the number of seconds remaining in the expiration time

**接口形式**
**Interface form**

```js
await redis.ttl(key: string)
```

**入参说明**
**Introduction to parameters**

|参数	|说明	|必填	|说明	|
|Parameters |Description |Required |Description |
|--		|--		|--		|--		|
|key	|键		|是		|			|
|key |key |Yes | |

**返回值**
**return value**

如果没有设置过期时间（永久有效）返回数字-1，如果不存在或者已过期返回数字-2，否则返回剩余秒数
If the expiration time is not set (permanently valid), return the number -1, if it does not exist or has expired, return the number -2, otherwise return the remaining seconds

**示例**
**Example**

```js
await redis.ttl('key')
```

### multi

将多条指令作为一个原子执行。
Execute multiple instructions as one atom.

**示例**
**Example**

```js
const multi = redis.multi()
multi.set('key1', 'value1')
multi.set('key2', 'value2')
multi.set('key3', 'value3')
multi.set('key4', 'value4')
const res = await multi.exec()

// 如果执行成功
// if the execution was successful
res = ['OK','OK','OK','OK']

// 某个操作出现错误
// An error occurred in an operation
res = ['OK','OK', error, 'OK'] // error为 Error对象的实例

```

### 执行lua脚本@eval
### Execute lua script @eval

**接口形式**
**Interface form**

```js
await redis.eval(String script, Number argsCount, String key1, String key2 , ... , String arg1, String arg2, ...)
```

**参数说明**
**Parameter Description**

|参数			|类型	|必填	|说明																																										|
|Parameter |Type |Required |Description |
|--				|--		|--		|--																																											|
|script			|String	|是		|lua脚本内容																																								|
|script |String |Yes |lua script content |
|argsCount		|Number	|是		|参数个数，没有参数则传0																																					|
|argsCount |Number |Yes |Number of parameters, if there is no parameter, pass 0 |
|key1、key2...	|String	|否		|从eval的第三个参数开始算起，表示在脚本中所用到的那些 Redis 键(key)，这些键名参数可以在 Lua 中通过全局变量 KEYS 数组，用 1 为基址的形式访问( KEYS[1] ， KEYS[2] ，以此类推)	|
|key1, key2... |String |No |Starting from the third parameter of eval, it represents those Redis keys (keys) used in the script. These key name parameters can be passed through the global variable KEYS array in Lua , with 1-based access ( KEYS[1] , KEYS[2] , and so on) |
|arg1、agr2...	|Number	|是		|附加参数，在 Lua 中通过全局变量 ARGV 数组访问，访问的形式和 KEYS 变量类似( ARGV[1] 、 ARGV[2] ，诸如此类)																	|
|arg1, agr2... |Number |yes |Additional parameters, accessed in Lua through the global variable ARGV array, in a similar way to the KEYS variable ( ARGV[1] , ARGV[2] , etc.) |

某些情况下需要使用复杂的原子操作以避免高并发下数据修改混乱的问题，这种需求一般可通过执行lua脚本实现。如以下示例，判断redis中不存在key-test时，将其值设置为1；存在且小于10时进行加一操作；大于等于10时不进行操作直接返回。
In some cases, complex atomic operations need to be used to avoid the problem of chaotic data modification under high concurrency. This requirement can generally be achieved by executing lua scripts. As shown in the following example, when it is judged that key-test does not exist in redis, set its value to 1; if it exists and less than 10, add one operation; if it is greater than or equal to 10, no operation is performed and returned directly.

`{0, 1}`是lua内的table类型，返回到云函数时会转为数组对应的值为`[0, 1]`
`{0, 1}` is the table type in lua. When returning to the cloud function, it will be converted to an array with the corresponding value of `[0, 1]`

```js
const [operationType, currentValue] = await redis.eval(`local val = redis.call('get','key-test')
    local valNum = tonumber(val)
    if (val == nil) then
        redis.call('set', 'key-test', 1)
        return {0, 1}
    end
    if (valNum < 10) then
        redis.call('incrby', 'key-test', 1)
        return {1, valNum + 1}
    else
        return {2, valNum}
    end
    `, 0)
```

### quit@quit

断开redis连接，会等待redis请求执行完成后才断开连接
Disconnecting the redis connection will wait for the redis request to complete before disconnecting

**接口形式**
**Interface form**

```js
await redis.quit()
```

**入参说明**
**Introduction to parameters**

无
none

**返回值**
**return value**

调用成功后返回`OK`字符串
Returns `OK` string after successful call

**注意**
**Notice**

- 断开连接后使用uniCloud.redis()返回的redis实例的连接将不再可用，再下次用到redis方法时需要重新调用`uniCloud.redis()`方法建立连接
- After disconnecting, the connection to the redis instance returned by uniCloud.redis() will no longer be available, and the next time you use the redis method, you need to call the `uniCloud.redis()` method to establish a connection

## FAQ@faq

- 云函数与redis的连接
- connection between cloud functions and redis

  和传统开发不同，云函数实例之间是不互通的，也就是说每个使用redis的函数实例都会和redis建立一个连接，在云函数实例复用时此连接也会复用。
  Different from traditional development, cloud function instances are not interoperable, that is to say, each function instance using redis will establish a connection with redis, and this connection will also be reused when the cloud function instance is reused.

  
## 最佳实践
## Best Practices

### 高并发下抢购/秒杀/防超卖示例@snap-over-sell
### Example of snapping/seckill/anti-oversell under high concurrency @snap-over-sell

可以利用redis的原子操作保证在高并发下不会超卖，以下为一个简单示例
The atomic operation of redis can be used to ensure that it will not be oversold under high concurrency. The following is a simple example

在抢购活动开始前可以将商品库存同步到redis内，实际业务中可以通过提前访问一次抢购页面加载所有商品来实现。下面通过一个简单的演示代码来实现
You can synchronize the product inventory to redis before the snap-buying event starts. In actual business, you can load all the products by visiting the snap-buying page once in advance. The following is achieved through a simple demo code

```js
const redis = uniCloud.redis()

const goodsList = [{ // 商品库存信息
  id: 'g1',
  stock: 100
}, {
  id: 'g2',
  stock: 200
}, {
  id: 'g3',
  stock: 400
}]

const stockKeyPrefix = 'stock_'

async function init() { // 抢购活动开始前在redis初始化库存
  for (let i = 0; i < goodsList.length; i++) {
    const {
      id,
      stock
    } = goodsList[i];
    await redis.set(`${stockKeyPrefix}${id}`, stock)
  }
}

init()
```

抢购的逻辑见以下代码
See the following code for the logic of snapping

```js
exports.main = async function (event, context) {
	// 一些判断抢购活动是否开始/结束的逻辑，未开始直接返回
	// Some logic for judging whether the snap-purchase activity starts/finishes, and returns directly if it does not start
	const cart = [{ // 购物车信息，此处演示购物车抢购的例子，如果抢购每次下单只能购买一件商品，可以适当调整代码
		id: 'g1', // 商品id
		amount: parseInt(Math.random() * 5 + 5) // 购买数量
	}, {
		id: 'g2',
		amount: parseInt(Math.random() * 5 + 5)
	}]

	/**
	* 使用redis的eval方法执行lua脚本判断各个商品库存能否满足购物车购买的数量
	* 如果不满足，返回库存不足的商品id
	* 如果满足，返回一个空数组
	* 
	* eval为原子操作可以在高并发下保证不出错
	**/ 
	let checkAndSetStock = `
	local cart = {${cart.map(item => `{id='${item.id}',amount=${item.amount}}`).join(',')}}
	local amountList = redis.call('mget',${cart.map(item => `'${stockKeyPrefix}${item.id}'`).join(',')})
	local invalidGoods = {}
	for i,cartItem in ipairs(cart) do
		if (cartItem['amount'] > tonumber(amountList[i])) then
		  table.insert(invalidGoods, cartItem['id'])
		  break
		end
	end
	if(#invalidGoods > 0) then
		return invalidGoods
	end
	for i,cartItem in ipairs(cart) do
		redis.call('decrby', '${stockKeyPrefix}'..cartItem['id'], cartItem['amount'])
	end
	return invalidGoods
	`
	const invalidGoods = await redis.eval(checkAndSetStock, 0)
	if (invalidGoods.length > 0) {
		return {
		  code: -1,
		  message: `以下商品库存不足：${invalidGoods.join(',')}`, // 此处为简化演示代码直接返回商品id给客户端
		  invalidGoods // 返回库存不足的商品列表
		}
	}
	// redis库存已扣除，将库存同步到数据库。为用户创建订单
	// redis inventory has been deducted, synchronize inventory to database. Create an order for a user
	// 此处代码省略...
	// code omitted here...
	return {
		code: 0,
		message: '下单成功，跳转订单页面'
	}
}
```