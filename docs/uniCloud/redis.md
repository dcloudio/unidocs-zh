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

## 开通Redis服务@buy

参考[开通redis](uniCloud/redis-buy.md)
Refer to [Open redis](uniCloud/redis-buy.md)

## 为云函数启用redis扩展库@use-in-function
## Enable redis extension library for cloud functions @use-in-function

Redis的sdk体积不小，没有内置在云函数中。在需要Redis的云函数里，开发者需手动配置Redis扩展库。（Redis没有免费试用，需购买才可以使用）。如何启用扩展库请参考：[使用扩展库](cf-functions.md#extension)

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

### 字符串 String
### String String

字符串类型，这是最简单Redis类型。需要注意的是Redis并没有number类型，如果存入number类型的数据最终也会转为string类型。
String type, which is the simplest Redis type. It should be noted that Redis does not have a number type. If the data stored in the number type will eventually be converted to the string type.

```js
await redis.set('string-key', 1) // 设置string-key的值为字符串"1"
await redis.get('string-key') // 获取string-key的值，"1"
```

### 列表 List
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

### 哈希表 Hash
### Hash Table Hash

Hash类型类似js里面的Object。
Hash type is similar to Object in js.

```js
await redis.hmset('hash-key', 'key1', 'value1', 'key2', 'value2') // 批量为hash-key添加键值，不存在则创建
await redis.hset('hash-key', 'key1', 'value1') // 为hash-key添加键值，不存在则创建
```

### 集合 Set
### Collection Set

集合是String的**无序排列**，集合内的元素不可重复
The collection is a **unordered arrangement** of String, and the elements in the collection cannot be repeated

```js
await redis.sadd('set-key', 'value1', 'value2') // 往集合内添加数据，不存在则创建
```

### 有序集合 SortedSet
### Ordered collection SortedSet

有序集合和集合一样也是string类型元素的集合，且不允许重复的成员。不同的是每个元素将有一个double类型的分数（分数不一定是连续的），用于对元素进行排序
Sorted sets, like sets, are also sets of elements of type string, and do not allow duplicate members. The difference is that each element will have a score of type double (the scores do not have to be consecutive), which is used to sort the elements

```js
await redis.zadd('sorted-set-key', 1, 'value1') // 往有序集合内添加数据并指定分数，不存在则创建
await redis.zadd('sorted-set-key', 2, 'value2')
```

### 基数统计 HyperLogLog
### Cardinality Statistics HyperLogLog

一个集合（指的是 Object 的聚合，可以包含重复元素）中不重复元素的个数。例如集合 {1,3,5,1,3}，它有5个元素，但它的基数为3。
The number of unique elements in a collection (refers to the aggregation of Object, which can contain repeated elements). For example the set {1,3,5,1,3} has 5 elements but its cardinality is 3.

```js
await redis.pfadd('key', 'element1', 'element2')
```

### 事务 Transaction
### Transaction Transaction

Redis 事务可以一次执行多个命令
Redis transactions can execute multiple commands at once

```js
await redis.multi() // 开启事务
redis.set('key', 'value')
await redis.exec() // 执行事务块内的命令
```

### 位图 bitMap
### Bitmap bitMap

是一串连续的二进制数组（0和1），可以通过偏移量（offset）定位元素。BitMap通过最小的单位bit来进行0|1的设置，表示某个元素的值或者状态，时间复杂度为O(1)。
It is a string of continuous binary arrays (0 and 1), and elements can be positioned by offset (offset). BitMap uses the smallest unit bit to set 0|1 to represent the value or state of an element, and the time complexity is O(1).

```js
await redis.setbit('key', 'offset', 'value') // 设置指定位的值
```

## API@api

> 此处仅列举常见命令，完整命令支持请查看[redis官方文档](https://redis.io/commands)
> Only common commands are listed here. For complete command support, please refer to [redis official documentation](https://redis.io/commands)

### 字符串 String
### String String

#### get

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

#### set

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

#### getrange

返回 key 中字符串值的子字符串
Returns the substring of the string value at key

```js
await redis.getrange(key: string, start: number, end: number)
```

**入参说明**
**Entry Instructions**

|参数		|说明						|必填						|说明									|
|Parameter |Description |Required |Description |
|--			|--							|--							|--										|
|key		|键							|是							|										|
| key | key | Yes | |
|start		|起始位置							|是							|	(0代表第一个字符,-1代表最后1个字符,-2代表最后第2个字符)|
| start |Starting position |Yes | (0 represents the first character, -1 represents the last character, -2 represents the last 2 characters)|
|end	|结束位置	|是							|	(0代表第一个字符,-1代表最后1个字符,-2代表最后第2个字符)	|
| end |End position |Yes | (0 represents the first character, -1 represents the last character, -2 represents the last 2 characters) |

**返回值**
**return value**

此接口返回截取得到的子字符串表示操作成功，返回空字符串表示未匹配
This interface returns the intercepted substring to indicate the operation is successful, returns an empty string to indicate no match

**示例**
**example**
```javascript
await redis.getrange('string-key', 0, 10)
```

#### setex

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

#### setnx

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

#### mget

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

#### mset

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

#### strlen

返回 key 所储存的字符串值的长度。
Returns the length of the string value stored by key.

**接口形式**
**Interface form**

```json
await redis.strlen(key: string)
```
**入参说明**
**Entry Instructions**

|参数    |说明      |必填  |说明      |
|Parameter |Description |Required |Description |
|--      |--        |--    |--        |
|key    |键        |是    |          |
| key | key | Yes | |

**返回值**
**return value**

此接口返回字符串长度，不存在的key会返回0
This interface returns the length of the string, and the key that does not exist will return 0

**示例**
**example**

```js
await redis.strlen('key')
```

#### msetnx

批量设置键值，当且仅当所有给定 key 都不存在。
Batch set key values if and only if all given keys do not exist.

**接口形式**
**Interface form**

```json
await redis.msetnx(key1: string, value1: string, key2: string, value2: string);
```

**入参说明**
**Introduction to parameters**

|参数    |说明      |必填  |说明      |
|Parameter |Description |Required |Description |
|--      |--        |--    |--        |
|key    |键        |是    |          |
| key | key | Yes | |

**返回值**
**return value**

此接口返回1表示执行成功
This interface returns 1 to indicate successful execution

**示例**
**Example**

```js
await redis.msetnx('key1'， 'value1', 'key2', 'value2')
```

#### psetex

设置key对应字符串value，并且设置key在给定的milliseconds（毫秒）时间之后超时过期
Set the key to correspond to the string value, and set the key to expire after the given milliseconds (milliseconds) time

**接口形式**
**Interface form**

```json
await redis.psetex(key: string, milliseconds: number, value: string);
```

**入参说明**
**Entry Instructions**

|参数    |说明      |必填  |说明      |
|Parameter |Description |Required |Description |
|--      |--        |--    |--        |
|key    |键        |是    |          |
| key | key | Yes | |
|milliseconds    |毫秒        |是    |          |
| milliseconds | milliseconds | yes | |
|value    |值        |是    |          |
| value | value | Yes | |

**返回值**
**return value**

此接口返回OK表示执行成功
This interface returns OK to indicate successful execution

**示例**
**example**

```js
await redis.psetex('key'， 1666582638076, 'value')
```

#### incr

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

#### incrby

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

#### incrbyfloat

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

#### decr

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

#### decrby

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

#### append

如果 key 已经存在并且是一个字符串， APPEND 命令将指定的 value 追加到该 key 原来值（value）的末尾。
If the key already exists and is a string, the APPEND command will append the specified value to the end of the key's original value (value).

**接口形式**
**Interface form**

```json
await redis.decrby(key: string, value: string);
```

**入参说明**
**Introduction to parameters**

|参数    |说明      |必填  |说明      |
|Parameter |Description |Required |Description |
|--      |--        |--    |--        |
|key    |键        |是    |          |
| key | key | Yes | |
|value    |需要追加的值        |是    |          |
| value | The value to be appended | Yes | |

**返回值**
**return value**

此接口返回执行成功返回值的长度
This interface returns the length of the successful return value

**示例**
**example**

```js
await redis.decrby('key', 10);
```

### 键 Key
### Key Key

#### del

用于删除执行的键
key for delete execution

**接口形式**
**Interface form**

```js
await redis.del(key: string)
```

**入参说明**
**Introduction to parameters**

|参数  |说明  |必填  |说明  |
|Parameter |Description |Required |Description |
|--    |--    |--    |--    |
|key  |键    |是    |      |
| key | key | Yes | |

**返回值**
**return value**

接口返回数字1表示删除成功，数字0表示键不存在删除失败
The interface returns the number 1 to indicate the deletion is successful, and the number 0 indicates that the key does not exist and the deletion fails

**示例**
**example**

```js
await redis.del('string-key') // '1'
```

#### dump

用于序列化给定 key ，并返回被序列化的值。
Used to serialize the given key and return the serialized value.

**接口形式**
**Interface form**

```js
await redis.dump(key: string)
```

**入参说明**
**Introduction to parameters**

|参数  |说明  |必填  |说明  |
|Parameter |Description |Required |Description |
|--    |--    |--    |--    |
|key  |键    |是    |      |
| key | key | Yes | |

**返回值**
**return value**

key不存在返回null，存在返回序列化后的值
Returns null if the key does not exist, and returns the serialized value if it exists

**示例**
**example**

```js
await redis.set('key', 'hello')
await redis.dump('key') // '\u0000\u0005hello\t\u0000����1�C�'
```

#### exists

判断一个键是否存在
Check if a key exists

**接口形式**
**Interface form**

```js
await redis.exists(key: string)
```

**入参说明**
**Entry Instructions**

|参数  |说明  |必填  |说明  |
|Parameter |Description |Required |Description |
|--    |--    |--    |--    |
|key  |键    |是    |      |
| key | key | Yes | |

**返回值**
**return value**

如果key存在返回数字1，如果key不存在返回数字0
If the key exists, return the number 1, if the key does not exist, return the number 0

**示例**
**example**

```js
await redis.exists('string-key') // 0 | 1
```

#### expire

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
|Parameter |Description |Required |Description |
|--			|--				|--		|--				|
|key		|键				|是		|					|
| key | key | Yes | |
|seconds|过期时间	|是		|单位：秒	|
| seconds|expiration time |yes |unit: second|

**返回值**
**return value**

如果成功设置过期时间返回数字1，如果未成功存在返回数字0
If the expiration time is successfully set, the number 1 is returned, and the number 0 is returned if it fails to exist

**示例**
**example**

```js
await redis.expire('key', 600) // 设置key为600秒后过期
```

#### expireat

EXPIREAT 的作用和 EXPIRE 类似，都用于为 key 设置过期时间。 不同在于 EXPIREAT 命令接受的时间参数是 UNIX 时间戳(unix timestamp)。
The function of EXPIREAT is similar to that of EXPIRE, both are used to set the expiration time for the key. The difference is that the time parameter accepted by the EXPIREAT command is a UNIX timestamp (unix timestamp).

**接口形式**
**Interface form**

```js
await redis.expireat(key: string, timestamp: number)
```

**入参说明**
**Introduction to parameters**

|参数		|说明			|必填	|说明			|
|Parameter |Description |Required |Description |
|--			|--				|--		|--				|
|key		|键				|是		|					|
| key | key | Yes | |
|seconds|UNIX 时间戳	|是		|单位：秒	|
| seconds| UNIX timestamp | yes | unit: seconds |

**返回值**
**return value**

如果成功设置过期时间返回数字1，如果未成功存在返回数字0
If the expiration time is successfully set, the number 1 is returned, and the number 0 is returned if it fails to exist

**示例**
**example**

```js
await redis.expireat('key', 1666584328) // 设置key将在2022-10-24 12:05过期
```

#### pexpire

这个命令和 expire 命令的作用类似，但是它以毫秒为单位设置 key 的生存时间，而不像 expire 命令那样，以秒为单位。
This command is similar to the expire command, but it sets the lifetime of the key in milliseconds instead of seconds like the expire command.

**接口形式**
**Interface form**

```js
await redis.pexpire(key: string, milliseconds: number)
```

**入参说明**
**Introduction to parameters**

|参数		|说明			|必填	|说明			|
|Parameter |Description |Required |Description |
|--			|--				|--		|--				|
|key		|键				|是		|					|
| key | key | Yes | |
|milliseconds|毫秒时间戳	|是		|	|
| milliseconds | milliseconds timestamp | yes | |

**返回值**
**return value**

如果成功设置过期时间返回数字1，如果未成功存在返回数字0
If the expiration time is successfully set, the number 1 is returned, and the number 0 is returned if it fails to exist

**示例**
**example**

```js
await redis.pexpire('key', 1500) // 设置key为1500毫秒后过期
```

#### pexpireat

设置 key 过期时间的时间戳(unix timestamp) 以毫秒计
Set the timestamp (unix timestamp) of the key expiration time in milliseconds

**接口形式**
**Interface form**

```js
await redis.pexpireat(key: string, timeatamp: number)
```

**入参说明**
**Introduction to parameters**

|参数		|说明			|必填	|说明			|
|Parameter |Description |Required |Description |
|--			|--				|--		|--				|
|key		|键				|是		|					|
| key | key | Yes | |
|timeatamp|毫秒时间戳	|是		|	|
|timeatamp|timestamp in milliseconds | yes | |

**返回值**
**return value**

如果成功设置过期时间返回数字1，如果未成功存在返回数字0
If the expiration time is successfully set, the number 1 is returned, and the number 0 is returned if it fails to exist

**示例**
**example**

```js
await redis.pexpireat('key', 1666584328000) // 设置key将在2022-10-24 12:05过期
```

#### keys

查找所有符合给定模式 pattern 的 key 。
Find all keys that match the given pattern.

**接口形式**
**Interface form**

```js
await redis.keys(patten: string)
```

**入参说明**
**Introduction to parameters**

|参数		|说明			|必填	|说明			|
|Parameter |Description |Required |Description |
|--			|--				|--		|--				|
|patten|表达式	|是		|	|
| patten | expression | Yes | |

**返回值**
**return value**

符合给定模式的 key 列表 (类型为Array)。
List of keys (of type Array) matching the given pattern.

**示例**
**Example**

```js
await redis.mset('one', 1, 'two', 2, 'three', 3, 'four', 4)
await redis.keys('*o*') // ['one', 'two', 'four']
await redis.keys('*') // ['one', 'two', 'three', 'four']
```

#### persist

移除 key 的过期时间，key 将持久保持。
Remove the expiration time of the key, and the key will persist.

**接口形式**
**Interface form**

```js
await redis.persist(key: string)
```

**入参说明**
**Introduction to parameters**

|参数		|说明			|必填	|说明			|
|Parameters |Description |Required |Description |
|--			|--				|--		|--				|
|key|键	|是		|	|
| key | key | Yes | |

**返回值**
**return value**

移除过期时间成功返回1， key不存在或者key没有设置过期时间返回0
Returns 1 if the expiration time is removed successfully, returns 0 if the key does not exist or the key does not have an expiration time

**示例**
**Example**

```js
await redis.set('key', 'ok')
await redis.expire('key', 10) // 10秒后过期
await redis.persist('key') // 移除 key 过期时间
```

#### pttl

获取过期时间剩余多少毫秒
Get the number of milliseconds left in the expiration time

**接口形式**
**Interface form**

```js
await redis.pttl(key: string)
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
await redis.pttl('key')
```

#### ttl

获取过期时间剩余多少秒
Get the number of seconds left in the expiration time

**接口形式**
**Interface form**

```js
await redis.ttl(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明	|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--		|--		|--		|
|key	|键		|是		|			|
| key | key | Yes | |

**返回值**
**return value**

如果没有设置过期时间（永久有效）返回数字-1，如果不存在或者已过期返回数字-2，否则返回剩余秒数
If no expiration time is set (permanently valid), the number -1 is returned, and the number -2 is returned if it does not exist or has expired, otherwise the remaining seconds are returned

**示例**
**example**

```js
await redis.ttl('key')
```

#### randonkey

从当前数据库中随机返回一个 key 。
Return a random key from the current database.

**接口形式**
**Interface form**

```js
await redis.randonkey()
```

**入参说明**
**Entry Instructions**

无
none

**返回值**
**return value**

数据库不为空时返回一个 key， 数据库为空时返回 null
Returns a key when the database is not empty, returns null when the database is empty

**示例**
**example**

```js
await redis.randonkey()
```

#### rename

将 key 改名为 newkey。
Rename key to newkey.

当 key 和 newkey 相同，或者 key 不存在时，返回一个错误。
Returns an error when key is the same as newkey, or key does not exist.

当 newkey 已经存在时， rename 命令将覆盖旧值。
When newkey already exists, the rename command will overwrite the old value.

**接口形式**
**Interface form**

```js
await redis.rename(key: string, newKey: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明	|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--		|--		|--		|
|key	|键		|是		|			|
| key | key | Yes | |
|newKey	|新的键名		|是		|			|
| newKey | new key name | yes | |

**返回值**
**return value**

修改成功返回 OK，key 不存在时返回一个错误
Return OK if the modification is successful, and return an error if the key does not exist

**示例**
**example**

```js
await redis.rename('key', 'newKey')
```

#### renamenx

仅当 newkey 不存在时，将 key 改名为 newkey 。
Rename key to newkey only if newkey does not exist.

当 key 不存在时，返回一个错误。
Returns an error when key does not exist.

**接口形式**
**Interface form**

```js
await redis.renamenx(key: string, newKey: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明	|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--		|--		|--		|
|key	|键		|是		|			|
| key | key | Yes | |
|newKey	|新的键名		|是		|			|
| newKey | new key name | yes | |

**返回值**
**return value**

修改成功返回 1, newKey 存在返回 0
If the modification is successful, return 1, if newKey exists, return 0

**示例**
**example**

```js
await redis.renamenx('key', 'newKey')
```

#### scan

迭代当前数据库中的数据库键。
Iterate over the database keys in the current database.

**接口形式**
**Interface form**

```js
await redis.scan(cursor: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明	|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--		|--		|--		|
|cursor	|游标		|是		|			|
| cursor | cursor | yes | |

**返回值**
**return value**

返回包含两个元素的数据 [下次迭代的新游标，0代表已结束, [所有被迭代的数据]]
Return data containing two elements [new cursor for next iteration, 0 means it is over, [all iterated data]]


**示例**
**example**

```js
await redis.mset('key1', 1, 'key2', '2', 'key3', 3, 'key4', 4, 'key5', 5)
await redis.scan(0) // 返回 [6, ['key1', 'key2', 'key3', 'key4', 'key5']]
```

#### type

返回 key 所储存的值的类型。
Returns the type of value stored by key.

**接口形式**
**Interface form**

```js
await redis.type(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明	|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--		|--		|--		|
|key	|键		|是		|			|
| key | key | Yes | |

**返回值**
**return value**

- none (key不存在)
- none (key does not exist)
- string (字符串)
- string (string)
- list (列表)
- list (list)
- set (集合)
- set (collection)
- zset (有序集)
- zset (ordered set)
- hash (哈希表)
- hash (hash table)

**示例**
**example**

```js
await redis.set('key1', 1)
await redis.type('key1') // 返回 string
```

### 列表 List
### List List

#### rpush

在List类型数据结尾追加数据
Append data at the end of List type data

**接口形式**
**Interface form**

```js
await redis.rpush(key: string, value: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|value|追加的值	|是		|			|
| value| value to append | Yes | |

**返回值**
**return value**

接口返回执行追加操作后List的长度
The interface returns the length of the List after performing the append operation

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown
- 如果指定的key不存在，则创建一个新的List并将value追加进去
- If the specified key does not exist, create a new List and append the value to it


#### rpushx

用法同`rpush`，仅在list存在时才在List结尾追加数据
The usage is the same as `rpush`, appending data at the end of the List only when the list exists

#### rpoplpush

移除列表的最后一个元素，并将该元素添加到另一个列表并返回。
Removes the last element of a list and adds that element to another list and returns.

**接口形式**
**Interface form**

```js
await redis.rpoplpush(source: string, destination: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|source	|键				|是		|			|
| source | key | Yes | |
|destination	|另一个键				|是		|			|
| destination | another key | Yes | |

**返回值**
**return value**

source存在返回被移除的元素，source 不存在返回 null
If the source exists, return the removed element; if the source does not exist, return null

**示例**
**example**

```js
await redis.lrange('source', 0, -1) // 返回 ['a', 'b', 'c']
await redis.lrange('destination', 0, -1) // 返回 []

await redis.rpoplpush('source', 'destination') // 返回 c
await redis.lrange('source', 0, -1) // 返回 ['a', 'b']
await redis.lrange('destination', 0, -1) // 返回 ['c']
```

#### rpop

从List类型数据结尾删除一条数据，并返回删除的值
Delete a piece of data from the end of List type data and return the deleted value

**注意：redis内List长度为0时会被自动删除**
**Note: When the length of the List in redis is 0, it will be automatically deleted**

**接口形式**
**Interface form**

```js
await redis.rpop(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |

**返回值**
**return value**

接口返回此次操作删除的值，如果key不存在则返回null
The interface returns the value deleted by this operation, or null if the key does not exist

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown

#### lpush

在List类型数据开头追加数据
Append data at the beginning of List type data

**接口形式**
**Interface form**

```js
await redis.lpush(key: string, value: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|value|追加的值	|是		|			|
| value| value to append | Yes | |

**返回值**
**return value**

接口返回执行追加操作后List的长度
The interface returns the length of the List after performing the append operation

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown
- 如果指定的key不存在，则创建一个新的List并将value追加进去
- If the specified key does not exist, create a new List and append the value to it

#### lpushx

用法同`lpush`，仅在list存在时才在List开头追加数据
The usage is the same as `lpush`, only append data at the beginning of the List when the list exists

#### lpop

从List类型数据开头删除一条数据，并返回删除的值
Delete a piece of data from the beginning of the List type data and return the deleted value

**注意：redis内List长度为0时会被自动删除**
**Note: When the length of the List in redis is 0, it will be automatically deleted**

**接口形式**
**Interface form**

```js
await redis.rpop(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |

**返回值**
**return value**

接口返回此次操作删除的值，如果key不存在则返回null
The interface returns the value deleted by this operation, or null if the key does not exist

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown

#### linsert

在List内指定元素位置前或后插入元素，未匹配到指定元素时不插入
Insert an element before or after the specified element position in the List, and do not insert if the specified element is not matched

**接口形式**
**Interface form**

```js
await redis.linsert(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明								|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--									|--		|--		|
|key	|键									|是		|			|
| key | key | Yes | |
|dir	|指定在前还是后插入	|是		|			|
| dir | specifies whether to insert before or after | yes | |
|pivot|指定要查找的元素		|是		|			|
| pivot | specifies the element to look for | Yes | |
|value|指定要插入的值			|是		|			|
| value| specifies the value to insert | Yes | |

**返回值**
**return value**

接口返回插入后的list长度，未匹配到要查找的值时返回-1，key不存在时此接口返回0
The interface returns the length of the inserted list, and -1 is returned when the value to be searched is not matched, and 0 is returned when the key does not exist.

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown

#### lindex

获取List内指定下标的元素
Get the element with the specified subscript in the List

**接口形式**
**Interface form**

```js
await redis.lindex(key: string, index: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|index|指定下标	|是		|			|
| index|specified subscript |yes | |

**返回值**
**return value**

接口返回指定下标在list内对应的值，如果key不存在则返回null
The interface returns the value corresponding to the specified subscript in the list, or null if the key does not exist

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown

#### llen

返回List的长度
Returns the length of the List

**接口形式**
**Interface form**

```js
await redis.llen(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |

**返回值**
**return value**

接口返回list的长度，如果key不存在则返回0
The interface returns the length of the list, or 0 if the key does not exist

**注意**
**Notice**

- 如果操作的数据类型不为List，则会抛出错误
- If the data type of the operation is not List, an error will be thrown

#### lrange

返回列表 key 中指定区间内的元素，区间以偏移量 start 和 stop 指定。
Returns the elements in the list key within the specified range specified by offsets start and stop.

**接口形式**
**Interface form**

```js
await redis.lrange(key: string, strar: number, end: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|start	|起始下标				|是		|			|
| start |start subscript |yes | |
|end	|结束下标				|是		|			|
| end | end subscript | yes | |

**返回值**
**return value**

返回指定确定的元素，类型为Array
Returns the specified element, the type is Array

**示例**
**example**

```js
await redis.rpush('key', 'a')
await redis.rpush('key', 'b')
await redis.rpush('key', 'c')

await redis.lrange('key', 0, 1) // 返回 ['a', 'b']
```

#### lrem

根据参数 count 的值，移除列表中与参数 value 相等的元素。
According to the value of the parameter count, remove the elements in the list that are equal to the parameter value.

**接口形式**
**Interface form**

```js
await redis.lrem(key: string, count: number, value: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|count	|移除的数量				|是		|			|
| count |Number of removals |Yes | |
|value	|值				|是		|			|
| value | value | Yes | |

**count说明**
**count Description**

count 的值可以是以下几种：
The value of count can be one of the following:

- count > 0 : 从表头开始向表尾搜索，移除与 value 相等的元素，数量为 count 。
- count > 0 : Search from the head to the end of the table, remove elements equal to value, the number is count .
- count < 0 : 从表尾开始向表头搜索，移除与 value 相等的元素，数量为 count 的绝对值。
- count < 0 : Search from the end of the table to the head of the table, remove elements equal to value, the number is the absolute value of count.
- count = 0 : 移除表中所有与 value 相等的值。
- count = 0 : remove all values equal to value from the table.

**返回值**
**return value**

key 存在时返回被移除的元素的数量，key 不存在时返回 0
Returns the number of removed elements if the key exists, or 0 if the key does not exist

**示例**
**example**

```js
await redis.rpush('key', 'a')
await redis.lrem('key', 0, 'a') // 返回 1
```

#### lset

将列表 key 下标为 index 的元素的值设置为 value 。
Sets the value of the element at index index of the list to value .

**接口形式**
**Interface form**

```js
await redis.lset(key: string, index: number, value: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|index	|列表值的下标				|是		|			|
| index | the subscript of the list value | Yes | |
|value	|值				|是		|			|
| value | value | Yes | |

**返回值**
**return value**

key 存在时成功返回 OK，key 不存在时返回错误
Returns OK if the key exists, returns an error if the key does not exist

**示例**
**example**

```js
await redis.rpush('key', 'a')
await redis.lset('key', 0, 'b') // 返回 OK
```

#### ltrim

修剪(trim)一个已存在的 list，这样 list 就会只包含指定范围的指定元素
Trim (trim) an existing list, so that the list will only contain the specified elements in the specified range

**接口形式**
**Interface form**

```js
await redis.ltrim(key: string, start: number, end: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|start	|起始位置				|是		|			|
| start | starting position | yes | |
|end	|结束位置				|是		|			|
| end | end position | Yes | |

**注意**
**Notice**
超出范围的下标
subscript out of range

超出范围的下标值不会引起错误。
Out-of-range subscript values do not cause an error.

如果 start 下标比列表的最大下标 end ( llen list 减去 1 )还要大，或者 start > stop ， ltrim 返回一个空列表(因为 ltrim 已经将整个列表清空)。
If the start subscript is greater than the list's largest subscript end ( llen list minus 1 ), or if start > stop , ltrim returns an empty list (because ltrim has already emptied the entire list).

如果 stop 下标比 end 下标还要大，Redis将 stop 的值设置为 end 。
If the stop subscript is greater than the end subscript, Redis sets the value of stop to end .

**返回值**
**return value**

执行成功返回 OK
Execute successfully and return OK

**示例**
**example**

```js
await redis.ltrim('key', 0, -1) // 返回 OK
```

#### blpop

移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
Move out and get the first element of the list. If there is no element in the list, the list will be blocked until the wait times out or a pop-up element is found.

如果列表为空，返回一个 nil 。 否则，返回一个含有两个元素的列表，第一个元素是被弹出元素所属的 key ，第二个元素是被弹出元素的值。
Returns a nil if the list is empty. Otherwise, returns a list with two elements, the first element is the key to which the popped element belongs, and the second element is the value of the popped element.

**接口形式**
**Interface form**

```js
await redis.blpop(key: string, timeout: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|timeout	|等待超时时间；单位秒				|是		|			|
| timeout |waiting timeout; unit second |yes | |

**返回值**
**return value**

列表为空返回 null，否则返回含有两个元素的数组[键名, 值]
Returns null if the list is empty, otherwise returns an array [key, value] with two elements

**示例**
**example**

```js
await redis.rpush('key', 'a')
await redis.blpop('key', 10) // 返回 ['key', 'a']
```

#### brpop

移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
Move out and get the last element of the list. If there is no element in the list, the list will be blocked until the wait times out or a pop-up element is found.

假如在指定时间内没有任何元素被弹出，则返回一个 nil 和等待时长。 反之，返回一个含有两个元素的列表，第一个元素是被弹出元素所属的 key ，第二个元素是被弹出元素的值。
If no elements are popped within the specified time, return a nil and wait time. Otherwise, return a list with two elements, the first element is the key to which the popped element belongs, and the second element is the value of the popped element.

**接口形式**
**Interface form**

```js
await redis.brpop(key: string, timeout: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|timeout	|等待超时时间；单位秒				|是		|			|
| timeout |waiting timeout; unit second |yes | |

**返回值**
**return value**

在指定时间内没有任何元素被弹出，则返回 null 和等待时长，否则返回含有两个元素的数组[键名, 值]
If no element is popped within the specified time, return null and the waiting time, otherwise return an array [key name, value] containing two elements

**示例**
**example**

```js
await redis.rpush('key', 'a')
await redis.brpop('key', 10) // 返回 ['key', 'a']
```


#### brpoplpush

从 source 中取出最后一个元素，并插入到 destination 头部；如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
Take the last element from source and insert it into the head of destination; if there is no element in the list, the list will be blocked until the wait times out or a pop-up element is found.

**接口形式**
**Interface form**

```js
await redis.brpoplpush(source: string, destination: string, timeout: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|source	|键				|是		|			|
| source | key | Yes | |
|destination	|另一个键				|是		|			|
| destination | another key | Yes | |
|timeout	|等待超时时间				|是		|			|
| timeout | wait timeout | yes | |

**返回值**
**return value**

在指定时间内没有任何元素被弹出，则返回 null 和等待时长，否则返回含有两个元素的数组[键名, 值]
If no element is popped within the specified time, return null and the waiting time, otherwise return an array [key name, value] containing two elements

**示例**
**example**

```js
await redis.brpoplpush('source', 'destination', 10)
```

### 哈希表 Hash
### Hash Table Hash

#### hset

设置 key 中指定 field 的值。
Set the value of the specified field in key.

**接口形式**
**Interface form**

```js
await redis.hset(key: string, field: string, value: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|field	|字段名				|是		|			|
| field | field name | Yes | |
|value	|值				|是		|			|
| value | value | Yes | |

**注意**
**Notice**

如果 key 不存在，将会创建一个新的哈希表并进行 hset 操作。
If the key does not exist, a new hash table will be created and hseted.

如果 field 已经存在于哈希表中，旧值将被覆盖。
If the field already exists in the hashtable, the old value will be overwritten.

**返回值**
**return value**

新创建的 field 返回 1， 覆盖旧值返回 0
A newly created field returns 1, and an overwritten field returns 0

**示例**
**example**

```js
await redis.hset('key', 'field', 'value')
```

#### hget

返回 key 中指定 field 的值。
Returns the value of the specified field at key.

**接口形式**
**Interface form**

```js
await redis.hget(key: string, field: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|field	|字段名				|是		|			|
| field | field name | Yes | |

**返回值**
**return value**

field 不存在时返回 null， 存在返回 field 值
Returns null when the field does not exist, and returns the field value if it exists

**示例**
**example**

```js
await redis.hset('key', 'field', 'value')
await redis.hget('key', 'field') // 返回 value
```

#### hmset

同时在一个 key 中设置多个 field-value
Set multiple field-values in a key at the same time

**接口形式**
**Interface form**

```js
await redis.hmset(key: string, field1: string, value1: string, field2: string, value2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|field1	|字段名				|是		|			|
| field1 | field name | Yes | |
|value1	|值				|是		|			|
| value1 | value | Yes | |

**返回值**
**return value**

key 不是hash类型时返回错误，执行成功返回 OK
An error is returned when the key is not a hash type, and OK is returned if the execution is successful

**示例**
**example**

```js
await redis.hmset('key', 'field1', 'value1', 'field2', 'value2')
```

#### hmget

返回一个 key 中的多个 field
Return multiple fields in a key

**接口形式**
**Interface form**

```js
await redis.hmget(key: string, field1: string, field2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|field1	|字段名				|是		|			|
| field1 | field name | Yes | |

**返回值**
**return value**

返回 获取的字段列表，类型Array
Returns the obtained field list, type Array

**示例**
**example**

```js
await redis.hmget('key', 'field1', 'field2')
```

#### hgetall

返回 key 的所有 field 与 value
Return all fields and values of key

**接口形式**
**Interface form**

```js
await redis.hgetall(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |

**返回值**
**return value**

返回 field与value，类型Array
Return field and value, type Array

**示例**
**example**

```js
await redis.hset('key', 'field1', 'value1')
await redis.hset('key', 'field2', 'value2')

await redis.hgetall('key') // 返回 ['field1', 'value1', 'field2', 'value2']
```

#### hdel

删除 key 中指定的一个或多个 field
Delete one or more fields specified in key

**接口形式**
**Interface form**

```js
await redis.hdel(key: string, field1: string)
await redis.hdel(key: string, field1: string, field2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|field1	|字段				|是		|			|
| field1 | field | Yes | |

**返回值**
**return value**

返回被删除字段的数量
Returns the number of deleted fields

**示例**
**example**

```js
await redis.hdel('key') // 返回 0
```

#### hexists

查看 key 中 field 是否存在
Check if field exists in key

**接口形式**
**Interface form**

```js
await redis.hexists(key: string, field: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|field	|字段				|是		|			|
| field | field | Yes | |

**返回值**
**return value**

字段存在返回 1， key 不存在或者字段不存在返回 0
Returns 1 if the field exists, returns 0 if the key does not exist or the field does not exist

**示例**
**example**

```js
await redis.hexists('key'， 'field') // 返回 0
```

#### hincrby

为 key 中指定的 field 的值加上整数增量 increment
Adds an integer increment to the value of the field specified in key

**接口形式**
**Interface form**

```js
await redis.hincrby(key: string, field: string, increment: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|field	|字段				|是		|			|
| field | field | Yes | |
|increment	|增量整数；>0 增加，<0 减少				|是		|			|
| increment | Increment integer; >0 increases, <0 decreases | Yes | |

**返回值**
**return value**

返回 增量增加后的值
Returns the incremented value

**示例**
**example**

```js
await redis.hincrby('key', 'field', 10) // 返回 10
```
#### hincrbyfloat

为 key 中指定的 field 的值加上浮点数增量 increment
Add the floating point increment increment to the value of the field specified in key

**接口形式**
**Interface form**

```js
await redis.hincrbyfloat(key: string, field: string, increment: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|field	|字段				|是		|			|
| field | field | Yes | |
|increment	|增量浮点数；>0 增加，<0 减少				|是		|			|
| increment | Incremental float; >0 increases, <0 decreases | Yes | |

**返回值**
**return value**

返回 增量增加后的值
Returns the incremented value

**示例**
**example**

```js
await redis.hincrbyfloat('key', 'field', 2.5) // 返回 2.5
```

#### hkeys

返回 key 中所有 field
Return all fields in key

**接口形式**
**Interface form**

```js
await redis.hkeys(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |

**返回值**
**return value**

返回所有 field；类型Array，key 不存在时返回 空数组
Return all fields; type Array, return an empty array if the key does not exist

**示例**
**example**

```js
await redis.hkeys('key') // 返回 []
```

#### hlen

返回 key 中 field 数量
Returns the number of fields in the key

**接口形式**
**Interface form**

```js
await redis.hlen(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |

**返回值**
**return value**

返回 field 数量，key 不存在时返回 0
Returns the number of fields, and returns 0 if the key does not exist

**示例**
**example**

```js
await redis.hlen('key') // 返回 0
```

#### hsetnx

当 key 中 field 不存在时设置 value，当 field 已存在，该操作无效。
Set the value when the field in the key does not exist, and the operation is invalid when the field already exists.

**接口形式**
**Interface form**

```js
await redis.hsetnx(key: string, field: string, value: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|field	|字段				|是		|			|
| field | field | Yes | |
|value	|值				|是		|			|
| value | value | Yes | |

**返回值**
**return value**

设置成功返回 1， field 已存在返回 0
Returns 1 if the setting is successful, returns 0 if the field already exists

**示例**
**example**

```js
await redis.hsetnx('key', 'field', 'value') // 返回 1
```

#### hvals

返回 key 中所有 field 的 value
Return the value of all fields in key

**接口形式**
**Interface form**

```js
await redis.hvals(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |

**返回值**
**return value**

返回所有 field 的 value，类型Array，key 不存在时返回空数组
Return the value of all fields, the type is Array, and return an empty array when the key does not exist

**示例**
**example**

```js
await redis.hvals('key') // 返回 []
```

#### hscan

迭代哈希键中的键值对
Iterate over the key-value pairs in the hash key

**接口形式**
**Interface form**

```js
await redis.hscan(key: string, cursor: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|cursor	|游标				|是		|			|
| cursor | cursor | yes | |

**返回值**
**return value**

返回包含两个元素的数据 [下次迭代的新游标，0代表已结束, [所有被迭代的数据]]
Return data containing two elements [new cursor for next iteration, 0 means it is over, [all iterated data]]

**示例**
**example**

```js
await redis.hscan('key', 0) // 返回 []
```

### 集合 Set
### Collection Set

#### sadd

将一个或多个 member 加入到集合 key 中，已经在集合中的 member 元素将忽略。
Add one or more members to the collection key, the member elements already in the collection will be ignored.

**接口形式**
**Interface form**

```js
await redis.sadd(key: string, member: string)
await redis.sadd(key: string, member1: string, member2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |
|member	|成员				|是		|			|
| member | member | Yes | |

**返回值**
**return value**

返回被添加到集合中的新元素的数量，不包括被忽略的元素。
Returns the number of new elements added to the collection, excluding ignored elements.

**示例**
**example**

```js
await redis.sadd('key', 'm1', 'm2') // 返回 2
```

#### scard

返回集合存储的key的基数(集合中元素的数量)
Returns the cardinality of the key stored in the collection (the number of elements in the collection)

**接口形式**
**Interface form**

```js
await redis.scard(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|键				|是		|			|
| key | key | Yes | |

**返回值**
**return value**

返回集合存储的key的基数，key 不存在时返回 0
Returns the cardinality of the key stored in the set, or returns 0 if the key does not exist

**示例**
**example**

```js
await redis.sadd('key', 'a', 'b')
await redis.scard('key') // 返回 2
```

#### sdiff

返回一个集合的全部成员，该集合是所有给定集合之间的差集。
Returns all members of a set that is the difference between all given sets.

不存在的 key 被视为空集。
A key that does not exist is considered an empty set.

**接口形式**
**Interface form**

```js
await redis.sdiff(key1: string, key2: string)
await redis.sdiff(key1: string, key2: string, key3: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key1	|集合的键				|是		|			|
| key1 | the key of the collection | Yes | |
|key2	|集合的键				|是		|			|
| key2 | the key of the set | Yes | |

**返回值**
**return value**

返回差集成员的列表。类型Array
Returns a list of subtraction members. Type Array

**示例**
**example**

```js
await redis.sadd('key1', 'a', 'b', 'c')
await redis.sadd('key2', 'c', 'd', 'f')
await redis.sdiff('key1', 'key2') // 返回 ['b', 'a']
```

#### sdiffstore

这个命令的作用和 sdiff 类似，但它将结果保存到 destination 集合，而不是简单地返回结果集。
This command works like sdiff, but it saves the results to the destination collection instead of simply returning the result set.

如果 destination 集合已经存在，则将其覆盖。
If the destination collection already exists, it is overwritten.

destination 可以是 key 本身。
destination can be the key itself.

**接口形式**
**Interface form**

```js
await redis.sdiffstore(destination: string, key1: string, key2: string)
await redis.sdiffstore(destination: string, key1: string, key2: string, key3: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|destination	|需要存储的键名				|是		|			|
| destination |The key name that needs to be stored |Yes | |
|key1	|集合的键				|是		|			|
| key1 | the key of the collection | Yes | |
|key2	|集合的键				|是		|			|
| key2 | the key of the set | Yes | |

**返回值**
**return value**

返回结果集中的元素数量
Returns the number of elements in the result set

**示例**
**example**

```js
await redis.sadd('key1', 'a', 'b', 'c')
await redis.sadd('key2', 'c', 'd', 'f')
await redis.sdiff('destination', 'key1', 'key2') // 返回 2
```

#### sinter

返回一个集合的全部成员，该集合是所有给定集合的交集。
Returns all members of a set that is the intersection of all given sets.

不存在的 key 被视为空集。
A key that does not exist is considered an empty set.

当给定集合当中有一个空集时，结果也为空集(根据集合运算定律)。
When there is an empty set among the given sets, the result is also an empty set (by the laws of set operations).

**接口形式**
**Interface form**

```js
await redis.sinter(key1: string, key2: string)
await redis.sinter(key1: string, key2: string, key3: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key1	|集合的键				|是		|			|
| key1 | the key of the collection | Yes | |
|key2	|集合的键				|是		|			|
| key2 | the key of the set | Yes | |

**返回值**
**return value**

返回交集成员的列表，类型为Array
Returns a list of intersection members, of type Array

**示例**
**example**

```js
await redis.sadd('key1', 'a', 'b', 'c')
await redis.sadd('key2', 'c', 'd', 'f')
await redis.sinter('key1', 'key2') // 返回 ['c']
```

#### sinterstore

这个命令类似于 sinter 命令，但它将结果保存到 destination 集合，而不是简单地返回结果集。
This command is similar to the sinter command, but it saves the results to the destination collection instead of simply returning a result set.

如果 destination 集合已经存在，则将其覆盖。
If the destination collection already exists, it is overwritten.

destination 可以是 key 本身。
destination can be the key itself.

**接口形式**
**Interface form**

```js
await redis.sinterstore(destination: string, key1: string, key2: string)
await redis.sinterstore(destination: string, key1: string, key2: string, key3: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|destination	|需要存储的键名				|是		|			|
| destination |The key name that needs to be stored |Yes | |
|key1	|集合的键				|是		|			|
| key1 | the key of the collection | Yes | |
|key2	|集合的键				|是		|			|
| key2 | the key of the set | Yes | |

**返回值**
**return value**

返回结果集中的成员数量。
Returns the number of members in the result set.

**示例**
**example**

```js
await redis.sadd('key1', 'a', 'b', 'c')
await redis.sadd('key2', 'c', 'd', 'f')
await redis.sinterstore('destination', 'key1', 'key2') // 返回 1
```

#### sismember

判断 member 元素是否是集合 key 成员。
Determine whether the member element is a member of the set key.

**接口形式**
**Interface form**

```js
await redis.sismember(key: string, member: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合的键				|是		|			|
| key | the key of the collection | Yes | |
|member	|成员				|是		|			|
| member | member | Yes | |

**返回值**
**return value**

member 元素是集合的成员返回 1，不是集合成员返回或者 key 不存在返回 0
Return 1 if the member element is a member of the set, return 0 if it is not a member of the set or the key does not exist

**示例**
**example**

```js
await redis.sadd('key', 'a', 'b', 'c')
await redis.sismember('key', 'a') // 返回 1
```

#### smembers

返回集合 key 中的所有成员。
Returns all members in the set key.

**接口形式**
**Interface form**

```js
await redis.smembers(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合的键				|是		|			|
| key | the key of the collection | Yes | |

**返回值**
**return value**

返回集合中的所有成员，类型Array
Returns all members in the collection, type Array
**示例**
**example**

```js
await redis.sadd('key', 'a', 'b', 'c')
await redis.smembers('key', 'a') // 返回 ['a', 'b', 'c']
```

#### smove

将 member 元素从 source 集合移动到 destination 集合。
Moves the member element from the source collection to the destination collection.

**接口形式**
**Interface form**

```js
await redis.smove(source: string, destination: string, member: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|source	|集合的键				|是		|			|
| source | the key of the collection | Yes | |
|destination	|集合的键				|是		|			|
| destination | the key of the collection | Yes | |
|member	|要移动的成员				|是		|			|
| member | The member to move | Yes | |

**返回值**
**return value**

member 移除成功返回 1，member 不是 source 集合成员，并且没有任何操作对 destination 集合执行，那么返回 0 。
If the member is removed successfully, return 1, if the member is not a member of the source collection, and there is no operation performed on the destination collection, then return 0.

**示例**
**example**

```js
await redis.sadd('source', 'a', 'b', 'c')
await redis.smove('source', 'destination', 'a') // 返回 1
```

#### spop

移除并返回集合中的一个随机元素。
Removes and returns a random element from the collection.

**接口形式**
**Interface form**

```js
await redis.spop(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合的键				|是		|			|
| key | the key of the collection | Yes | |

**返回值**
**return value**

返回被移除的随机元素。key 不存在或 key 是空集时，返回 null 。
Returns the random element that was removed. Returns null when key does not exist or key is an empty set.

**示例**
**example**

```js
await redis.spop('key')
```

#### srandmember

在集合 key 中随机获取一个或者 count 个元素
Randomly get one or count elements in the collection key

**接口形式**
**Interface form**

```js
await redis.srandmember(key: string)
await redis.srandmember(key: string, count: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合的键				|是		|			|
| key | the key of the collection | Yes | |
|count	|返回几个元素				|否		|			|
| count | how many elements to return | no | |

**count说明**
**count Description**
- 如果 count 为正数，且小于集合基数，那么命令返回一个包含 count 个元素的数组，数组中的元素各不相同。如果 count 大于等于集合基数，那么返回整个集合。
- If count is positive and less than the cardinality of the collection, the command returns an array of count elements, each of which is unique. If count is greater than or equal to the cardinality of the collection, then the entire collection is returned.
- 如果 count 为负数，那么命令返回一个数组，数组中的元素可能会重复出现多次，而数组的长度为 count 的绝对值。
- If count is negative, the command returns an array, the elements in the array may appear multiple times, and the length of the array is the absolute value of count.

**返回值**
**return value**

只提供 key 参数时，返回一个元素；如果集合为空，返回 nil 。
Returns an element when only the key parameter is provided, or nil if the collection is empty.

如果提供了 count 参数，那么返回一个数组；如果集合为空，返回空数组。
Returns an array if the count parameter is provided, or an empty array if the collection is empty.

**示例**
**example**

```js
await redis.srandmember('key')
```

#### srem

移除集合 key 中的一个或多个 member 元素，不存在的 member 元素会被忽略。
Remove one or more member elements in the collection key, and the non-existing member elements will be ignored.

**接口形式**
**Interface form**

```js
await redis.srem(key: string, member: string)
await redis.srem(key: string, member1: string, member2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合的键				|是		|			|
| key | the key of the collection | Yes | |
|member	|成员				|是		|			|
| member | member | Yes | |

**返回值**
**return value**

返回被成功移除的元素的数量，不包括被忽略的元素。
Returns the number of elements that were successfully removed, excluding ignored elements.

**示例**
**example**

```js
await redis.srem('key', 'member')
```

#### sunion

返回一个集合的全部成员，该集合是所有给定集合的并集。
Returns all members of a set that is the union of all given sets.

**接口形式**
**Interface form**

```js
await redis.sunion(key: string)
await redis.sunion(key1: string, key2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合的键				|是		|			|
| key | the key of the collection | Yes | |
|member	|成员				|是		|			|
| member | member | Yes | |

**返回值**
**return value**

返回并集成员的列表。
Returns a list of union members.

**示例**
**example**

```js
await redis.sunion('key1', 'key2')
```

#### sunionstore

这个命令类似于 sunion 命令，但它将结果保存到 destination 集合，而不是简单地返回结果集。
This command is similar to the sunion command, but it saves the results to the destination collection instead of simply returning a result set.

如果 destination 已经存在，则将其覆盖。
If destination already exists, it is overwritten.

destination 可以是 key 本身。
destination can be the key itself.

**接口形式**
**Interface form**

```js
await redis.sunionstore(destination: string, key: string)
await redis.sunionstore(destination: string, key1: string, key2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|destination	|集合的键				|是		|			|
| destination | the key of the collection | Yes | |
|key	|集合的键				|是		|			|
| key | the key of the collection | Yes | |

**返回值**
**return value**

返回结果集中的元素数量。
Returns the number of elements in the result set.

**示例**
**example**

```js
await redis.sunionstore('destination', 'key')
```

#### sscan

迭代集合键中的元素。
Iterate over the elements in the collection key.

**接口形式**
**Interface form**

```js
await redis.sscan(key: string, cursor: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合的键				|是		|			|
| key | the key of the collection | Yes | |
|cursor	|游标				|是		|			|
| cursor | cursor | yes | |

**返回值**
**return value**

返回包含两个元素的数据 [下次迭代的新游标，0代表已结束, [所有被迭代的数据]]
Return data containing two elements [new cursor for next iteration, 0 means it is over, [all iterated data]]

**示例**
**example**

```js
await redis.sscan('key', 0)
```

### 有序集合 SortedSet
### Ordered collection SortedSet

#### zadd

将一个或多个 member 元素及其 score 值加入到有序集 key 当中。
Add one or more member elements and their score values to the sorted set key.

如果某个 member 已经是有序集的成员，那么更新这个 member 的 score 值，并通过重新插入这个 member 元素，来保证该 member 在正确的位置上。
If a member is already a member of the ordered set, update the score value of the member and reinsert the member element to ensure that the member is in the correct position.

**接口形式**
**Interface form**

```js
await redis.zadd(key: string, score: string, member: string)
await redis.zadd(key: string, score1: string, member1: string, score2: string, member2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合的键				|是		|			|
| key | the key of the collection | Yes | |
|score	|分数; 可以是整数值或双精度浮点数				|是		|			|
| score | score; can be an integer value or a double precision floating point number | Yes | |
|member	|元素				|是		|			|
| member | element | Yes | |

**返回值**
**return value**

返回被成功添加的新成员的数量，不包括那些被更新的、已经存在的成员。
Returns the number of new members that were successfully added, excluding existing members that were updated.

**示例**
**example**

```js
await redis.zadd('key', '0', 'a')
```

#### zcard

返回有序集 key 的基数。
Returns the cardinality of the sorted set key.

**接口形式**
**Interface form**

```js
await redis.zcard(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合的键				|是		|			|
| key | the key of the collection | Yes | |

**返回值**
**return value**

当 key 存在且是有序集类型时，返回有序集的基数。
Returns the cardinality of the sorted set when key exists and is of sorted set type.
当 key 不存在时，返回 0 。
Returns 0 when the key does not exist.

**示例**
**example**

```js
await redis.zcard('key')
```

#### zcount

返回有序集 key 中， score 值在 min 和 max 之间(默认包括 score 值等于 min 或 max )的成员的数量。
Returns the number of members whose score value is between min and max (default includes score equal to min or max ) in the sorted set key.

**接口形式**
**Interface form**

```js
await redis.zcount(key: string, min: number, max: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合的键				|是		|			|
| key | the key of the collection | Yes | |
|min	|最小分数				|是		|			|
| min | minimum score | yes | |
|max	|最大分数				|是		|			|
| max | maximum score | yes | |

**返回值**
**return value**

返回 score 值在 min 和 max 之间的成员的数量。
Returns the number of members with score values between min and max.

**示例**
**example**

```js
await redis.zcount('key', 0, -1)
```

#### zincrby

为有序集 key 的成员 member 的 score 值加上增量 increment 。
Adds increment to the score value of member member of sorted set key.

**接口形式**
**Interface form**

```js
await redis.zincrby(key: string, increment: number, member: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合的键				|是		|			|
| key | the key of the collection | Yes | |
|increment	|增量分值				|是		|			|
| increment |incremental score |yes | |
|member	|成员				|是		|			|
| member | member | Yes | |

**返回值**
**return value**

返回 member 成员的新 score 值，以字符串形式表示。
Returns the new score value for the member member, represented as a string.

**示例**
**example**

```js
await redis.zincrby('key', 10, 'member')
```

#### zinterstore

计算给定的一个或多个有序集的交集，其中给定 key 的数量必须以 numkeys 参数指定，并将该交集(结果集)储存到 destination 。
Computes the intersection of the given one or more sorted sets, where the number of given keys must be specified with the numkeys parameter, and stores the intersection (result set) in destination .

**接口形式**
**Interface form**

```js
await redis.zinterstore(destination: string, numkeys: number, key: string)
await redis.zinterstore(destination: string, numkeys: number, key1: string, key2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|destination	|集合的键				|是		|			|
| destination | the key of the collection | Yes | |
|numkeys	|集合数量				|是		|			|
| numkeys | number of sets | yes | |
|key	|集合键名					|是		|			|
| key |Collection key name |Yes | |

**返回值**
**return value**

返回保存到 destination 的结果集的基数。
Returns the cardinality of the result set saved to destination.

**示例**
**example**

```js
await redis.zinterstore('destination', 1, 'key')
```

#### zrange

返回有序集 key 中，指定区间内的成员。
Returns the members in the specified range in the ordered set key.

**接口形式**
**Interface form**

```js
await redis.zrange(key: string, start: number, stop: number)
await redis.zrange(key: string, start: number, stop: number, 'WITHSCORES')
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合键名					|是		|			|
| key |Collection key name |Yes | |
|start	|起始位置				|是		|			|
| start | starting position | yes | |
|stop	|结束位置				|是		|			|
| stop | end position | yes | |

**返回值**
**return value**

返回指定区间内，带有 score 值(可选)的有序集成员的列表，类型Array
Returns a list of ordered set members with score value (optional) within the specified range, type Array

**示例**
**example**

```js
await redis.zrange('key', 0, -1)
```

#### zrank

返回有序集 key 中成员 member 的排名。其中有序集成员按 score 值递增(从小到大)顺序排列。
Returns the rank of member member in the sorted set key. Among them, the members of the ordered set are arranged in the order of increasing score value (from small to large).

**接口形式**
**Interface form**

```js
await redis.zrank(key: string, member: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合键名					|是		|			|
| key |Collection key name |Yes | |
|member	|成员				|是		|			|
| member | member | Yes | |

**返回值**
**return value**

如果 member 是有序集 key 的成员，返回 member 的排名。
If member is a member of the sorted set key, returns the rank of member.

如果 member 不是有序集 key 的成员，返回 null 。
Returns null if member is not a member of the sorted set key.

**示例**
**example**

```js
await redis.zrank('key', 'member')
```

#### zrem

移除有序集 key 中的一个或多个成员，不存在的成员将被忽略。
Remove one or more members from the sorted set key, non-existing members will be ignored.

**接口形式**
**Interface form**

```js
await redis.zrem(key: string, member: string)
await redis.zrem(key: string, member1: string, member2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合键名					|是		|			|
| key |Collection key name |Yes | |
|member	|成员				|是		|			|
| member | member | Yes | |

**返回值**
**return value**

返回被成功移除的成员的数量，不包括被忽略的成员。
Returns the number of members successfully removed, excluding ignored members.

**示例**
**example**

```js
await redis.zrem('key', 'member')
```

#### zrevrange

返回有序集 key 中，指定区间内的成员，其中成员的位置按 score 值递减(从大到小)来排列。
Returns the members in the specified interval in the ordered set key, where the positions of the members are arranged in descending order of score value (from large to small).

**接口形式**
**Interface form**

```js
await redis.zrevrange(key: string, start: number, stop: number)
await redis.zrevrange(key: string, start: number, stop: number, 'WITHSCORES')
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合键名					|是		|			|
| key |Collection key name |Yes | |
|start	|起始位置				|是		|			|
| start | starting position | yes | |
|stop	|结束位置				|是		|			|
| stop | end position | yes | |

**返回值**
**return value**

返回指定区间内，带有 score 值(可选)的有序集成员的列表，类型Array。
Returns a list of ordered set members with score value (optional) within the specified range, type Array.

**示例**
**example**

```js
await redis.zrevrange('key', 0，-1)
```

#### zrevrangebyscore

通过字典区间返回有序集合的成员（具有分页功能）（集合按照分值从小到大排序）
Return the members of the ordered set (with paging function) through the dictionary interval (the set is sorted from small to large by score)

**接口形式**
**Interface form**

```js
await redis.zrevrangebyscore(key: string, min: number, max: number)
await redis.zrevrangebyscore(key: string, min: number, max: number, withscores: string, limit: string, offset: number, count: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合键名					|是		|			|
| key |Collection key name |Yes | |
|min	|字典中排序位置较小的成员,必须以”[“开头,或者以”(“开头,可使用”-“代替				|是		|			|
| min | Members with smaller sorting positions in the dictionary must start with "[", or start with "(", you can use "-" instead |Yes | |
|max	|字典中排序位置较大的成员,必须以”[“开头,或者以”(“开头,可使用”+”代替					|是		|			|
| max | The member with a larger sorting position in the dictionary must start with "[" or "(", and "+" can be used instead |Yes | |
|withscores	|WITHSCORES				|否		|			|
| withscores | WITHSCORES | no | |
|limit	|返回结果是否分页,指令中包含LIMIT后offset、count必须输入				|否		|			|
| limit |Whether the returned result should be paginated, offset and count must be entered after LIMIT is included in the command |No | |
|offset	|返回结果起始位置				|否		|			|
| offset | Return the starting position of the result | No | |
|count	|返回结果数量				|否		|			|
| count | Return the number of results | No | |

**返回值**
**return value**

返回指定区间内，带有 score 值(可选)的有序集成员的列表。
Returns a list of sorted set members with score values (optional) in the specified range.

**示例**
**example**

```js
await redis.zrevrangebyscore('key', 1000，200)
```

#### zrevrank

返回有序集key中成员member的排名，其中有序集成员按score值从高到低排列。
Returns the rank of the member member in the sorted set key, where the sorted set members are arranged from high to low according to the score value.

排名从0开始，也就是说，score值最大的成员排名为0。
The ranking starts from 0, that is, the member with the highest score is ranked 0.

**接口形式**
**Interface form**

```js
await redis.zrevrank(key: string, member: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合键名					|是		|			|
| key |Collection key name |Yes | |
|member	|成员				|是		|			|
| member | member | Yes | |

**返回值**
**return value**

如果 member 是有序集 key 的成员，返回 member 的排名。
If member is a member of the sorted set key, returns the rank of member.
如果 member 不是有序集 key 的成员，返回 null 。
Returns null if member is not a member of the sorted set key.

**示例**
**example**

```js
await redis.zrevrank('key', 'member')
```

#### zscore

获取有序集 key 中，成员 member 的 score 值。
Get the score value of the member member in the ordered set key.

**接口形式**
**Interface form**

```js
await redis.zscore(key: string, member: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合键名					|是		|			|
| key |Collection key name |Yes | |
|member	|成员				|是		|			|
| member | member | Yes | |

**返回值**
**return value**

返回member 成员的 score 值，以字符串形式表示，key 不存在或者 member 不是 key 的成员，返回 null 。
Return the score value of the member member, expressed in string form, if the key does not exist or the member is not a member of the key, return null .

**示例**
**example**

```js
await redis.zscore('key', 'member')
```

#### zunionstore

计算给定的一个或多个有序集的并集，其中给定 key 的数量必须以 numkeys 参数指定，并将该并集(结果集)储存到 destination 。
Computes the union of the given one or more sorted sets, where the number of given keys must be specified with the numkeys parameter, and stores the union (result set) in destination .

**接口形式**
**Interface form**

```js
await redis.zunionstore(destination: string, numkeys: string, key: string)
await redis.zunionstore(destination: string, numkeys: string, key1: string, key2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|destination	|集合键名					|是		|			|
| destination | collection key name | yes | |
|numkeys	|集合数量						|是		|			|
| numkeys | number of sets | yes | |
|key	|集合键名					|是		|			|
| key |Collection key name |Yes | |

**返回值**
**return value**

返回保存到 destination 的结果集的基数。
Returns the cardinality of the result set saved to destination.

**示例**
**example**

```js
await redis.zunionstore('destination', 1, 'key')
```

#### zscan

迭代有序集合中的元素（包括元素成员和元素分值）
Iterate over the elements in an ordered collection (including element members and element scores)

**接口形式**
**Interface form**

```js
await redis.zscan(key: string, cursor: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--		|
|key	|集合键名					|是		|			|
| key |Collection key name |Yes | |
|cursor	|游标						|是		|			|
| cursor | cursor | yes | |

**返回值**
**return value**

返回包含两个元素的数据 [下次迭代的新游标，0代表已结束, [所有被迭代的数据]]
Return data containing two elements [new cursor for next iteration, 0 means it is over, [all iterated data]]

**示例**
**example**

```js
await redis.zscan('key', 0)
```


### 基数统计 HyperLogLog
### Cardinality Statistics HyperLogLog


#### pfadd

添加指定元素到 HyperLogLog 中。
Add the specified element to HyperLogLog.

**接口形式**
**Interface form**

```js
await redis.pfadd(key: string, element1: string, element2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--|
|key	|键名					|是		|	|
| key | key name | Yes | |
|element1	|元素1							|是		| |
| element1 | element 1 | Yes | |
|element2	|元素2						|是		| |
| element2 | element 2 | Yes | |

**返回值**
**return value**

如果至少有个元素被添加返回 1， 否则返回 0。
Returns 1 if at least one element was added, 0 otherwise.

**示例**
**example**

```js
await redis.pfadd('key', 'element1', 'element2')
```

#### pfcount

返回给定 HyperLogLog 的基数估算值。
Returns the cardinality estimate for the given HyperLogLog.

**接口形式**
**Interface form**

```js
await redis.pfcount(key: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--|
|key	|键名					|是		|	|
| key | key name | Yes | |


**返回值**
**return value**

返回给定 HyperLogLog 的基数值，如果多个 HyperLogLog 则返回基数估值之和。
Returns the base value for a given HyperLogLog, or the sum of base estimates if multiple HyperLogLogs.

**示例**
**example**

```js
await redis.pfadd('key', 'a', 'b', 'c', 'b', 'c')
await redis.pfcount('key') // 返回 3
```

#### pfmerge

将多个 HyperLogLog 合并为一个 HyperLogLog
Merge multiple HyperLogLogs into one HyperLogLog

**接口形式**
**Interface form**

```js
await redis.pfmerge(destkey: string, sourcekey: string)
await redis.pfmerge(destkey: string, sourcekey1: string, sourceKey2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--|
|destKey	|目标键名					|是		|	|
| destKey | destination key name | yes | |
|sourceKey	|键名					|是		|	|
| sourceKey | key name | yes | |


**返回值**
**return value**

成功返回 OK
Returns OK on success

**示例**
**example**

```js
await redis.pfadd('dest', 'a', 'b', 'c', 'b', 'c')
await redis.pfadd('source', 'a', 'b', 'c', 'b', 'c')

await redis.pfmerge('key', 'dest'， 'source')

await redis.pfcount('key') // 返回 3
```


### 事务 Transaction
### Transaction Transaction

#### multi

将多条指令作为一个原子执行。
Execute multiple instructions as a single atom.

**示例**
**example**

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

#### exec

执行所有事务块内的命令。
Executes the commands inside all transaction blocks.

**接口形式**
**Interface form**
```js
await redis.exec()
```

#### discard

取消事务，放弃执行事务块内的所有命令。
Cancel the transaction, abandoning the execution of all commands within the transaction block.

**接口形式**
**Interface form**
```js
await redis.discard()
```

### 位图 BitMap
### Bitmap BitMap

#### setbit

针对key存储的字符串值，设置或清除指定偏移量offset上的位(bit)
For the string value stored by the key, set or clear the bit at the specified offset offset

位的设置或清除取决于value值，即1或0
The bit is set or cleared depending on the value value, i.e. 1 or 0

**接口形式**
**Interface form**
```js
await redis.setbit(key: string, offset: number, value: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--|
|key	|键名					|是		|	|
| key | key name | Yes | |
|offset	|位					|是		|	|
| offset | bits | yes | |
|value	|位的值；0或1					|是		|	|
| value | the value of the bit; 0 or 1 | Yes | |


**返回值**
**return value**

返回偏移量offset位置的原始值
Returns the original value at offset offset

**示例**
**example**
```js
await redis.setbit('key', 0, 1)
```

#### getbit

返回key对应的字符串，offset 位置的位（bit）
Return the string corresponding to the key, the bit at the offset position (bit)

**接口形式**
**Interface form**
```js
await redis.getbit(key: string, offset: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--|
|key	|键名					|是		|	|
| key | key name | Yes | |
|offset	|位					|是		|	|
| offset | bits | yes | |


**返回值**
**return value**

返回偏移量offset位置的bit值， key 不存在时或当offset大于值的长度时返回 0
Returns the bit value at the offset offset, and returns 0 when the key does not exist or when the offset is greater than the length of the value

**示例**
**example**
```js
await redis.setbit('key', 1, 1)
await redis.getbit('key', 1) // 返回 1
```

#### bitcount

统计给定字符串中，bit为1的数量
Count the number of bits with 1 in the given string

**接口形式**
**Interface form**
```js
await redis.bitcount(key: string, start: number， end: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|说明	|
|Parameter |Description |Required |Description |
|--		|--				|--		|--|
|key	|键名					|是		|	|
| key | key name | Yes | |
|start	|开始位					|是		|	|
| start | start bit | yes | |
|end	|结束位				|是		|	|
| end | end bit | yes | |


**返回值**
**return value**

返回bit值为1的数量，如果key不存在，返回0
Returns the number with a bit value of 1, if the key does not exist, returns 0

**示例**
**example**
```js
await redis.setbit('key', 1, 1)
await redis.bitcount('key', 0， -1) // 返回 1
```

#### bitop

对一个或多个保存二进制位的字符串key进行位元操作，并将结果保存到destkey上。
Perform bit operations on one or more string keys that hold binary bits, and store the result on destkey.

- operation可以是AND、OR、NOT、XOR这四种操作中的任意一种。
- operation can be any of the four operations of AND, OR, NOT, and XOR.
- bitop AND destkey key [key ...] ，对一个或多个key求逻辑并，并将结果保存到destkey
- bitop AND destkey key [key ...], perform logical union of one or more keys, and save the result to destkey
- bitop OR destkey key [key ...] ，对一个或多个key求逻辑或，并将结果保存到destkey
- bitop OR destkey key [key ...], perform logical OR on one or more keys, and save the result to destkey
- bitop XOR destkey key [key ...] ，对一个或多个key求逻辑异或，并将结果保存到destkey
- bitop XOR destkey key [key ...], perform logical XOR on one or more keys, and save the result to destkey
- bitop NOT destkey key ，对给定key求逻辑非，并将结果保存到destkey
- bitop NOT destkey key, find the logical negation of the given key, and save the result to destkey
- 除了NOT操作外，其他操作都可以接受一个或多个key作为输入
- Except for the NOT operation, other operations can accept one or more keys as input
- 当bitop处理不同长度的字符串时，较短的那个字符串所缺少的部分会被看做0
- When bitop processes strings of different lengths, the missing part of the shorter string will be treated as 0
- 空的key也被看作是包含0的字符串序列
- Empty keys are also treated as string sequences containing 0

**接口形式**
**Interface form**
```js
await redis.bitop(operation: string, destkey: string， key: string)
await redis.bitop(operation: string, destkey: string， key1: string, key2: string)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|
|Parameter |Description |Required |
|--		|--				|--		|
|operation	|操作;	AND、OR、NOT、XOR 其中一个				|是		|
| operation | operation; one of AND, OR, NOT, XOR |Yes |
|destkey	|键名					|是		|
| destkey | key name | yes |
|key	|键名				|是		|
| key | key name | Yes |

**返回值**
**return value**

返回保存到 destkey 的字符串的长度（和参数给定的key中最长的字符串长度相等）
Returns the length of the string saved to destkey (equal to the length of the longest string in the key given by the parameter)

**示例**
**example**
```js
await redis.bitop('AND', 'andkey', 'key1', 'key2')
```

#### bitpos

返回字符串中，从左到右，第一个比特值为bit（0或1）的偏移量
Returns the offset of the first bit value of bit (0 or 1) from left to right in the string

**接口形式**
**Interface form**
```js
await redis.bitpos(key: string, value: string， start: number, end: number)
```

**入参说明**
**Entry Instructions**

|参数	|说明			|必填	|
|Parameter |Description |Required |
|--		|--				|--		|
|key	|键名				|是		|
| key | key name | Yes |
|value	|值；0或1				|是		|
| value | value; 0 or 1 | yes |
|start	|开始字节，注意1字节=8位						|是		|
| start | start byte, note that 1 byte = 8 bits | yes |
|end	|结束字节，注意1字节=8位					|是		|
| end | end byte, note that 1 byte = 8 bits | yes |

**返回值**
**return value**

返回第一个比特值为指定bit（0或1）的偏移量
Returns the offset where the first bit value is the specified bit (0 or 1)

**示例**
**example**
```js
await redis.set('key', 'a')
await redis.bitpos('key', 1) // 返回 1
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
	        // The redis inventory has been deducted, and the inventory is synchronized to the database. Create an order for a user
	        // 此处代码省略...
	        // Code omitted here...
	        return {
	            code: 0,
	            message: '下单成功，跳转订单页面'
	            }
	            }
	            ```
