云函数中支持对云数据库的全部功能的操作。本章节主要讲解如何在云函数内通过传统api操作数据库，如需在云函数内使用JQL语法操作数据库，请参考：[云函数内使用JQL语法](uniCloud/jql-cloud.md)
Cloud functions support operations on all functions of the cloud database. This chapter mainly explains how to operate the database through the traditional api in the cloud function. If you need to use the JQL syntax to operate the database in the cloud function, please refer to: [Use JQL syntax in the cloud function](uniCloud/jql-cloud.md)

## 获取集合的引用@get-collection
## Get a reference to the collection @get-collection

```js
const db = uniCloud.database();
// 获取 `user` 集合的引用
// Get a reference to the `user` collection
const collection = db.collection('user');
```

### 集合 Collection@collection
### collection Collection@collection

通过 `db.collection(name)` 可以获取指定集合的引用，在集合上可以进行以下操作
Through `db.collection(name)`, you can get a reference to the specified collection, and you can perform the following operations on the collection

| 类型     | 接口    | 说明                                                                               |
| Type | Interface | Description |
| -------- | ------- | ---------------------------------------------------------------------------------- |
| 写       | add     | 新增记录（触发请求）                                                               |
| write | add | add record (trigger request) |
| 计数     | count   | 获取符合条件的记录条数                                                             |
| Count | count | Get the number of records that meet the conditions |
| 读       | get     | 获取集合中的记录，如果有使用 where 语句定义查询条件，则会返回匹配结果集 (触发请求) |
| Read | get | Get the records in the collection, if the query condition is defined using the where statement, it will return the matching result set (triggering the request) |
| 引用     | doc     | 获取对该集合中指定 id 的记录的引用                                                 |
| citations | doc | Get a citation for the record with the specified id in this collection |
| 查询条件 | where   | 通过指定条件筛选出匹配的记录，可搭配查询指令（eq, gt, in, ...）使用                |
| Query conditions | where | Filter out matching records by specifying conditions, which can be used with query commands (eq, gt, in, ...) |
|          | skip    | 跳过指定数量的文档，常用于分页，传入 offset                                        |
| | skip | Skip the specified number of documents, often used for paging, pass in offset |
|          | orderBy | 排序方式                                                                           |
| | orderBy | Sort By |
|          | limit   | 返回的结果集(文档数量)的限制，有默认值和上限值                                     |
| | limit | The limit of the returned result set (number of documents), with default and upper limit values |
|          | field   | 指定需要返回的字段                                                                 |
| | field | Specify the field to be returned |


查询及更新指令用于在 `where` 中指定字段需满足的条件，指令可通过 `db.command` 对象取得。
The query and update commands are used to specify the conditions that the field needs to meet in `where`, and the commands can be obtained through the `db.command` object.


### 记录 Record / Document@doc
### Record Record / Document@doc

通过 `db.collection(collectionName).doc(docId)` 可以获取指定集合上指定 _id 的记录的引用，在记录上可以进行以下操作
Through `db.collection(collectionName).doc(docId)`, you can get the reference of the record with the specified _id on the specified collection, and the following operations can be performed on the record

| 接口| 说明||
| Interface | Description ||
| ----| ------|----|
| 写	| update        | 局部更新记录(触发请求)只更新传入的字段。如果被更新的记录不存在，会直接返回更新失败|
| write | update | Partially update a record (triggering a request) to update only the fields passed in. If the updated record does not exist, it will directly return update failure|
|       | set		| 覆写记录;会删除操作的记录中的所有字段，创建传入的字段。如果操作的记录不存在，会自动创建新的记录|
| | set | Overwrite the record; will delete all fields in the record of the operation, creating the fields passed in. If the record for the operation does not exist, a new record is automatically created|
|			| remove| 删除记录(触发请求)|
| | remove| Delete record (triggering request)|
| 读	| get		| 获取记录(触发请求)|
| read | get | get record (trigger request) |

doc(docId)方法的参数只能是字符串，即数据库默认的_id字段。
The parameter of the doc(docId) method can only be a string, which is the default _id field of the database.

如需要匹配多个`_id`的记录，应使用where方法。可以在where方法里用in指令匹配一个包含`_id`的数组。
If you need to match multiple records with `_id`, you should use the where method. You can use the in directive in the where method to match an array containing `_id`.

新增文档时数据库会自动生成_id字段，也可以自行将_id设置为其他值
When adding a document, the database will automatically generate the _id field, or you can set the _id to other values.

### 查询筛选指令 Query Command@query-command
### Query filter command Query Command@query-command

以下指令挂载在 `db.command` 下
The following commands are mounted under `db.command`

| 类型     | 接口 | 说明                               |
| Type | Interface | Description |
| -------- | ---- | ---------------------------------- |
| 比较运算 | eq   | 字段等于 ==                            |
| comparison operations | eq | field equals == |
|          | neq  | 字段不等于 !=                            |
| | neq | field is not equal to != |
|          | gt   | 字段大于 >                             |
| | gt | Field is greater than > |
|          | gte  | 字段大于等于 >=                            |
| | gte | Field greater than or equal to >= |
|          | lt   | 字段小于 <                             |
| | lt | Field less than < |
|          | lte  | 字段小于等于 <=                            |
| | lte | Field less than or equal to <= |
|          | in   | 字段值在数组里                     |
| | in | field value in array |
|          | nin  | 字段值不在数组里                   |
| | nin | Field value not in array |
| 逻辑运算 | and  | 表示需同时满足指定的所有条件       |
| Logical operation | and | means that all the specified conditions must be met at the same time |
|          | or   | 表示需同时满足指定条件中的至少一个 |
| | or | means that at least one of the specified conditions must be met at the same time |

如果你熟悉SQL，可查询[mongodb与sql语句对照表](https://blog.csdn.net/xinghebuluo/article/details/7012788/)进行学习。
If you are familiar with SQL, you can query the [mongodb and sql statement comparison table](https://blog.csdn.net/xinghebuluo/article/details/7012788/) to learn.

### 字段更新指令 Update Command@update-command
### Field update command Update Command@update-command

以下指令挂载在 `db.command` 下
The following commands are mounted under `db.command`

| 类型 | 接口    | 说明                             |
| Type | Interface | Description |
| ---- | ------- | -------------------------------- |
| 字段 | set     | 设置字段值                       |
| field | set | set field value |
|      | remove  | 删除字段                         |
| | remove | Remove fields |
|      | inc     | 加一个数值，原子自增             |
| | inc | Add a value, atomically increment |
|      | mul     | 乘一个数值，原子自乘             |
| | mul | Multiply a number, atomically multiply |
|      | push    | 数组类型字段追加尾元素，支持数组 |
| | push | Array type field append tail element, support array |
|      | pop     | 数组类型字段删除尾元素，支持数组 |
| | pop | Array type field delete tail element, support array |
|      | shift   | 数组类型字段删除头元素，支持数组 |
| | shift | Array type fields delete header elements, support arrays |
|      | unshift | 数组类型字段追加头元素，支持数组 |
| | unshift | Array type field appends header element, supports array |

## 新增文档@add
## Add document @add

方法1： collection.add(data)
Method 1: collection.add(data)

参数说明
Parameter Description

| 参数 | 类型   | 必填 | 说明                                     |
| Parameters | Type | Required | Description |
| ---- | ------ | ---- | ---------------------------------------- |
| data | object &#124; array | 是   | {_id: '10001', 'name': 'Ben'} _id 非必填|
| data | object &#124; array | yes | {_id: '10001', 'name': 'Ben'} _id not required|

响应参数
response parameter

单条插入时
When inserting a single


| 参数| 类型	|  说明																			|
| Parameters | Type | Description |
| ----| ------|  ----------------------------------------	|
|id		| String|插入记录的id																|
|id | String| The id of the inserted record |

批量插入时
When bulk inserting

| 参数		| 类型	|  说明																			|
| Parameters | Type | Description |
| ----		| ------|  ----------------------------------------	|
|ids			| Array	|批量插入所有记录的id												|
|ids | Array | Bulk insert ids of all records |

示例：
Example:

```js
// 单条插入数据
// single insert data
let res = await collection.add({
  name: 'Ben'
})
// 批量插入数据
// batch insert data
let res = await collection.add([{
  name: 'Alex'
},{
  name: 'Ben'
},{
  name: 'John'
}])
```

**Tips**

- 云服务商为阿里云时，若集合不存在，调用add方法会自动创建集合。注意此方式创建的集合不带索引、表结构，尽量不要依赖此方式创建集合。
- When the cloud service provider is Alibaba Cloud, if the collection does not exist, calling the add method will automatically create the collection. Note that collections created in this way do not have indexes and table structures. Try not to rely on this method to create collections.

方法2： collection.doc().set(data)
Method 2: collection.doc().set(data)

也可通过 `set` 方法新增一个文档，需先取得文档引用再调用 `set` 方法。
You can also add a new document through the `set` method, you need to get the document reference before calling the `set` method.
如果文档不存在，`set` 方法会创建一个新文档。
If the document does not exist, the `set` method creates a new document.


**参数说明**
**Parameter Description**

| 参数 | 类型   | 必填 | 说明                                     |
| Parameters | Type | Required | Description |
| ---- | ------ | ---- | ---------------------------------------- |
| data | object | 是   | 更新字段的Object，{'name': 'Ben'}|
| data | object | Yes | Object to update field, {'name': 'Ben'}|

**响应参数**
**Response parameters**

| 参数			| 类型	|  说明																				|
| Parameters | Type | Description |
| ----			| ------|  ----------------------------------------		|
|updated		| Number| 更新成功条数，数据更新前后没变化时也会返回1	|
|updated | Number| The number of successful updates, it will also return 1 if the data has not changed before and after the update |
|upsertedId	| String| 创建的文档id																|
|upsertedId | String| ID of the created document |


```js
let res = await collection.doc('doc-id').set({
  name: "Hey"
});
```

**注意**
**Notice**

- 阿里云自动生成的_id是递增的，后创建的记录的_id总是大于先生成的_id。腾讯云自动生成的_id并非递增。
- The _id automatically generated by Alibaba Cloud is incremented, and the _id of the record created later is always greater than the _id generated earlier. The _id automatically generated by Tencent Cloud is not incremented.

## 查询文档@query
## Query document @query

支持 `where()`、`limit()`、`skip()`、`orderBy()`、`get()`、`field()`、`count()` 等操作。
Supports `where()`, `limit()`, `skip()`, `orderBy()`, `get()`, `field()`, `count()` and other operations.

只有当调用`get()`时才会真正发送查询请求。
The query request is only actually sent when `get()` is called.

limit，即返回记录的最大数量，默认值为100，也就是不设置limit的情况下默认返回100条数据。
limit, that is, the maximum number of records returned, the default value is 100, that is, 100 records are returned by default if the limit is not set.

设置limit有最大值，腾讯云限制为最大1000条，阿里云限制为最大500条。
The limit is set to a maximum value. Tencent Cloud is limited to a maximum of 1,000 records, and Alibaba Cloud is limited to a maximum of 500 records.

如需查询更多数据，需要分页多次查询。
To query more data, you need to paginate and query multiple times.

如果使用JQL语法传入getTree参数以返回树形数据也受上面的规则限制，不过此时limit方法仅对根节点生效（大量数据建议使用分层加载，不要使用getTree一次返回所有数据）
If JQL syntax is used to pass in the getTree parameter to return tree data, it is also limited by the above rules, but at this time the limit method only takes effect on the root node (a large amount of data is recommended to use hierarchical loading, do not use getTree to return all data at once)

**get响应参数**
**get response parameters**

| 参数| 类型	|  说明																			|
| Parameters | Type | Description |
| ----| ------|  ----------------------------------------	|
|data	| Array	| 查询结果数组															|
|data | Array | Query result array |

### 添加查询条件@where
### Add query condition @where

collection.where()

**在聚合操作中请使用match**
**Please use match in aggregation operations**

设置过滤条件，where 可接收对象作为参数，表示筛选出拥有和传入对象相同的 key-value 的文档。比如筛选出所有类型为计算机的、内存为 8g 的商品：
Set the filter conditions, where can receive an object as a parameter, which means to filter out documents with the same key-value as the incoming object. For example, to filter out all types of products with a computer and a memory of 8g:

```js
let res = await db.collection('goods').where({
  category: 'computer',
  type: {
    memory: 8,
  }
}).get()
```

如果要表达更复杂的查询，可使用高级查询指令，比如筛选出所有内存大于 8g 的计算机商品：
If you want to express more complex queries, you can use advanced query commands, such as filtering out all computer products with memory greater than 8g:
```js
const dbCmd = db.command // 取指令
db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.gt(8), // 表示大于 8
  }
})
```

在SQL里使用字符串表达式操作。但在NOSQL中使用json操作。这使得 等于 的表达，从 `=` 变成了 `:`；而大于的表达，从 `>` 变成了 `dbCmd.gt()`
Use string expressions in SQL. But use json operations in NOSQL. This changes the expression for equals from `=` to `:`; and the expression for greater than from `>` to `dbCmd.gt()`

所有的比较符，详见[表格](https://uniapp.dcloud.io/uniCloud/cf-database-dbcmd?id=%e6%9f%a5%e8%af%a2%e7%ad%9b%e9%80%89%e6%8c%87%e4%bb%a4-query-command)
For all comparators, see [table](https://uniapp.dcloud.io/uniCloud/cf-database-dbcmd?id=%e6%9f%a5%e8%af%a2%e7%ad%9b% e9%80%89%e6%8c%87%e4%bb%a4-query-command)


`where` 还可以使用正则表达式来查询文档，比如一下示例查询所有`name`字段以ABC开头的用户
`where` can also use regular expressions to query documents, such as the following example to query all users whose `name` field starts with ABC
```js
db.collection('user').where({
  name: new RegExp('^ABC')
})
```

**按照数组内的值查询**
**Query according to the value in the array**

mongoDB内按照数组内的值查询可以使用多种写法，以下面的数据为例
In mongoDB, you can use a variety of writing methods to query according to the values in the array. Take the following data as an example

```js
{
  arr:[{
    name: 'item-1',
  },{
    name: 'item-2',
  }]
}

{
  arr:[{
    name: 'item-3',
  },{
    name: 'item-4',
  }]
}
```

如果想查询arr内第一个元素的name为item-1的记录可以使用如下写法
If you want to query the record whose name is item-1 of the first element in arr, you can use the following writing method

```js
const res = await db.collection('test').where({
  'arr.0.name': 'item-1'
})

res = {
  data:[{
    arr:[{
      name: 'item-1',
    },{
      name: 'item-2',
    }]
  }]
}
```

如果想查询arr内某个元素的name为item-1的记录（可以是数组内的任意一条name为item-1）可以使用如下写法
If you want to query the record whose name is item-1 of an element in arr (it can be any item in the array whose name is item-1), you can use the following writing method

```js
const res = await db.collection('test').where({
  'arr.name': 'item-1'
})

res = {
  data:[{
    arr:[{
      name: 'item-1',
    },{
      name: 'item-2',
    }]
  }]
}
```

### 获取查询数量@count
### Get the number of queries @count

collection.count()

```js
let res = await db.collection('goods').where({
  category: 'computer',
  type: {
    memory: 8,
  }
}).count()
```

响应参数
response parameter

| 字段      | 类型    | 必填 | 说明                     |
| Fields | Type | Required | Description |
| --------- | ------- | ---- | ------------------------ |
| total     | Number | 否   | 计数结果                 |
| total | Number | No | Count result |

**注意：**
**Notice:**

- 数据量很大的情况下，带条件运算count全表的性能会很差，尽量使用其他方式替代，比如新增一个字段专门用来存放总数。不加条件时count全表不存在性能问题。
- In the case of a large amount of data, the performance of the whole table with the conditional operation count will be very poor. Try to use other methods instead, such as adding a field to store the total number. When no conditions are added, there is no performance problem in the full count table.

### 设置记录数量@limit
### Set the number of records @limit

collection.limit()

参数说明
Parameter Description

| 参数  | 类型    | 必填 | 说明           |
| Parameters | Type | Required | Description |
| ----- | ------- | ---- | -------------- |
| value | Number | 是   | 返回的数据条数 |
| value | Number | Yes | Number of returned data |

使用示例
Example of use

```js
let res = await collection.limit(1).get() // 只返回第一条记录
```

**注意**
**Notice**

- limit不设置的情况下默认返回100条数据；设置limit有最大值，腾讯云限制为最大1000条，阿里云限制为最大500条。
- If the limit is not set, 100 pieces of data are returned by default; if the limit is set, there is a maximum value, which is limited to a maximum of 1,000 for Tencent Cloud and a maximum of 500 for Alibaba Cloud.

### 设置起始位置@skip
### Set start position @skip

collection.skip(value)

参数说明
Parameter Description

| 参数  | 类型    | 必填 | 说明           |
| Parameters | Type | Required | Description |
| ----- | ------- | ---- | -------------- |
| value | Number | 是   | 跳过指定的位置，从位置之后返回数据 |
| value | Number | Yes | Skip the specified position and return data after the position |

使用示例
Example of use

```js
let res = await collection.skip(4).get()
```

**注意：数据量很大的情况下，skip性能会很差，尽量使用其他方式替代，参考：[skip性能优化](uniCloud/db-performance.md?id=skip)**
**Note: In the case of a large amount of data, the skip performance will be very poor, try to use other methods instead, refer to: [skip performance optimization](uniCloud/db-performance.md?id=skip)**

### 对结果排序@order-by
### Sort results @order-by

collection.orderBy(field, orderType)

参数说明
Parameter Description

| 参数      | 类型   | 必填 | 说明                                |
| Parameters | Type | Required | Description |
| --------- | ------ | ---- | ----------------------------------- |
| field     | string | 是   | 排序的字段                          |
| field | string | yes | sort field |
| orderType | string | 是   | 排序的顺序，升序(asc) 或 降序(desc) |
| orderType | string | yes | sort order, ascending (asc) or descending (desc) |

如果需要对嵌套字段排序，需要用 "点表示法" 连接嵌套字段，比如 style.color 表示字段 style 里的嵌套字段 color。
If you need to sort nested fields, you need to use "dot notation" to connect nested fields, such as style.color to represent the nested field color in the field style.

同时也支持按多个字段排序，多次调用 orderBy 即可，多字段排序时的顺序会按照 orderBy 调用顺序先后对多个字段排序
At the same time, it also supports sorting by multiple fields. You can call orderBy multiple times. When sorting by multiple fields, the order of multiple fields will be sorted according to the calling order of orderBy.


使用示例
Example of use

```js
let res = await collection.orderBy("name", "asc").get()
```

**注意**
**Notice**

- 排序字段存在多个重复的值时排序后的分页结果，可能会出现某条记录在上一页出现又在下一页出现的情况。这时候可以通过指定额外的排序条件比如`.orderBy("name", "asc").orderBy("_id", "asc")`来规避这种情况。
- When there are multiple duplicate values in the sort field, the sorted pagination result may have a record appearing on the previous page and then appearing on the next page. At this time, you can avoid this situation by specifying additional sorting conditions such as `.orderBy("name", "asc").orderBy("_id", "asc")`.

### 指定返回字段@field
### Specify the return field @field

collection.field()

从查询结果中，过滤掉不需要的字段，或者指定要返回的字段。
From the query results, filter out unwanted fields, or specify which fields to return.

参数说明
Parameter Description

| 参数 | 类型   | 必填 | 说明                                    |
| Parameters | Type | Required | Description |
| ---- | ------ | ---- | --------------------------------------- |
| -    | object | 是   | 过滤字段对象，包含字段名和策略，不返回传false，返回传true |
| - | object | Yes | Filter field object, including field name and strategy, not return false, return true |

使用示例
Example of use

```js
collection.field({ 'age': true }) //只返回age字段、_id字段，其他字段不返回
```

**注意**
**Notice**

- field内指定是否返回某字段时，不可混用true/false。即{'a': true, 'b': false}是一种错误的参数格式
- When specifying whether to return a field in field, true/false cannot be mixed. i.e. {'a': true, 'b': false} is a wrong parameter format
- 只有使用{ '_id': false }明确指定不要返回_id时才会不返回_id字段，否则_id字段一定会返回。
- Only use { '_id': false } to explicitly specify not to return _id, the _id field will not be returned, otherwise the _id field will be returned.

### 查询指令@dbcmd
### Query command @dbcmd

查询指令以dbCmd.开头，包括等于、不等于、大于、大于等于、小于、小于等于、in、nin、and、or。
The query command begins with dbCmd., including equal, not equal, greater than, greater than or equal to, less than, less than or equal to, in, nin, and, or.


下面的查询指令以以下数据集为例：
The query command below uses the following dataset as an example:

```json
// goods表
// goods table

[{
  "type": {
    "brand": "A",
    "name": "A-01",
    "memory": 16,
    "cpu": 3.2
  },
  "category": "computer",
  "quarter": "2020 Q2",
  "price": 2500
},{
  "type": {
    "brand": "X",
    "name": "X-01",
    "memory": 8,
    "cpu": 4.0
  },
  "category": "computer",
  "quarter": "2020 Q3",
  "price": 6500
},{
  "type": {
    "brand": "S",
    "name": "S-01",
    "author": "S-01-A"
  },
  "category": "book",
  "quarter": "2020 Q3",
  "price": 20
}]

```

#### eq 等于@dbcmd-eq
#### eq equals @dbcmd-eq

表示字段等于某个值。`eq` 指令接受一个字面量 (literal)，可以是 `number`, `boolean`, `string`, `object`, `array`。
Indicates that the field is equal to some value. The `eq` directive accepts a literal, which can be `number`, `boolean`, `string`, `object`, `array`.

事实上在uniCloud的数据库中，`等于`有两种写法。
In fact, in the uniCloud database, `equals` has two ways of writing.

比如筛选出所有2020 Q2季度的商品，
For example, to filter out all the products in the 2020 Q2 quarter,

写法1：使用`:`来比较
Writing 1: Use `:` to compare

```js
const myOpenID = "xxx"
let res = await db.collection('articles').where({
  quarter: '2020 Q2'
}).get()

// 查询返回值
// query return value
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  }]
}
```

写法2：使用指令`dbcmd.eq()`
Writing method 2: Use the command `dbcmd.eq()`

```js
const dbCmd = db.command
const myOpenID = "xxx"
let res = await db.collection('articles').where({
  quarter: dbCmd.eq('2020 Q2')
}).get()

// 查询返回值
// query return value
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  }]
}
```

注意 `eq` 指令有更大的灵活性，可以用于表示字段等于某个对象的情况，比如：
Note that the `eq` directive has more flexibility and can be used to indicate that a field is equal to an object, for example:

```js
// 这种写法表示匹配 type.brand == 'S' 且 type.name == 'S-01'
// This notation means match type.brand == 'S' and type.name == 'S-01'
let res = await db.collection('articles').where({
  type: {
    brand: 'S',
    name: 'S-01'
  }
}).get()

// 查询返回值
// query return value
{
  "data":[{
    "type": {
      "brand": "S",
      "name": "S-01",
      "author": "S-01-A"
    },
    "category": "book",
    "quarter": "2020 Q3",
    "price": 20
  }]
}

// 这种写法表示 stat 对象等于 { brand: 'S', name: 'S-01' }
// This notation means that the stat object is equal to { brand: 'S', name: 'S-01' }
// 对象中还有其他字段时无法匹配，例如：{ brand: 'S', name: 'S-01', author: 'S-01-A' }
// Cannot match when there are other fields in the object, for example: { brand: 'S', name: 'S-01', author: 'S-01-A' }
// 对象中字段顺序不一致也不能匹配，例如：{ name: 'S-01', brand: 'S' }
// The order of fields in the object is inconsistent and cannot be matched, for example: { name: 'S-01', brand: 'S' }
const dbCmd = db.command
let res = await db.collection('articles').where({
  stat: dbCmd.eq({
    brand: 'S',
    name: 'S-01'
  })
}).get()

// 查询返回值
// query return value
{
  "data":[]
}
```

#### neq 不等于@dbcmd-neq
#### neq is not equal to @dbcmd-neq

字段不等于。`neq` 指令接受一个字面量 (literal)，可以是 `number`, `boolean`, `string`, `object`, `array`。
Field does not equal. The `neq` directive accepts a literal, which can be `number`, `boolean`, `string`, `object`, `array`.

如筛选出品牌不为 X 的计算机：
To filter out computers with brands other than X:

```js
const dbCmd = db.command
let res = await db.collection('goods').where({
  category: 'computer',
  type: {
    brand: dbCmd.neq('X')
  },
}).get()

// 查询返回值
// query return value
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  }]
}
```

#### gt 大于@dbcmd-gt
#### gt is greater than @dbcmd-gt

字段大于指定值。
Field is greater than the specified value.

如筛选出价格大于 3000 的计算机：
For example, to filter out computers with a price greater than 3000:

```js
const dbCmd = db.command
let res = await db.collection('goods').where({
  category: 'computer',
  price: dbCmd.gt(3000)
}).get()

// 查询返回值
// query return value
{
  "data":[{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

#### gte 大于等于@dbcmd-gte
#### gte greater than or equal to @dbcmd-gte

字段大于或等于指定值。
Field is greater than or equal to the specified value.

#### lt 小于@dbcmd-lt
#### lt is less than @dbcmd-lt

字段小于指定值。
Field is less than the specified value.

#### lte 小于等于@dbcmd-lte
#### lte less than or equal to @dbcmd-lte

字段小于或等于指定值。
Field is less than or equal to the specified value.

#### in 在数组中@dbcmd-in
#### in in array @dbcmd-in

字段值在给定的数组中。
Field values are in the given array.

筛选出内存为 8g 或 16g 的计算机商品：
Filter out computer products with 8g or 16g of memory:

```js
const dbCmd = db.command
let res = await db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.in([8, 16])
  }
}).get()

// 查询返回值
// query return value
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  },{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

#### nin 不在数组中@dbcmd-nin
#### nin is not in the array @dbcmd-nin

字段值不在给定的数组中。
Field value is not in the given array.

筛选出内存不是 8g 或 16g 的计算机商品：
Filter out computer products that do not have 8g or 16g of memory:

```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.nin([8, 16])
  }
})

// 查询返回值
// query return value
{
  "data":[]
}
```

#### and 且@dbcmd-and
#### and and @dbcmd-and

表示需同时满足指定的两个或以上的条件。
Indicates that two or more of the specified conditions must be met at the same time.

如筛选出内存大于 4g 小于 32g 的计算机商品：
For example, to filter out computer products with memory greater than 4g and less than 32g:

流式写法：
Streaming writing:
```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.gt(4).and(dbCmd.lt(32))
  }
})


// 查询返回值
// query return value
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  },{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

前置写法：
Prefix:
```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.and(dbCmd.gt(4), dbCmd.lt(32))
  }
})
```

#### or 或@dbcmd-or
#### or@dbcmd-or

表示需满足所有指定条件中的至少一个。如筛选出价格小于 4000 或在 6000-8000 之间的计算机：
Indicates that at least one of all specified conditions needs to be met. To filter out computers whose price is less than 4000 or between 6000-8000:

流式写法：
Streaming writing:
```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    price:dbCmd.lt(4000).or(dbCmd.gt(6000).and(dbCmd.lt(8000)))
  }
})


// 查询返回值
// query return value
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  },{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

前置写法：
Prefix:
```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    price: dbCmd.or(dbCmd.lt(4000), dbCmd.and(dbCmd.gt(6000), dbCmd.lt(8000)))
  }
})
```

如果要跨字段 “或” 操作：(如筛选出内存 8g 或 cpu 3.2 ghz 的计算机)
If you want to "OR" across fields: (such as filtering out computers with 8g of memory or 3.2 ghz of cpu)

```js
const dbCmd = db.command
db.collection('goods').where(dbCmd.or(
  {
    type: {
      memory: dbCmd.gt(8)
    }
  },
  {
    type: {
      cpu: 3.2
    }
  }
))

// 查询返回值
// query return value
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  },{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

### 正则表达式查询@regexp
### Regular expression query @regexp

#### db.RegExp

根据正则表达式进行筛选
Filter by regular expression

例如下面可以筛选出 `version` 字段开头是 "数字+s" 的记录，并且忽略大小写：
For example, the following can filter out records whose `version` field begins with "number+s", ignoring case:
```js
// 可以直接使用正则表达式
// You can use regular expressions directly
db.collection('articles').where({
  version: /^\ds/i
})

// 也可以使用new RegExp
// can also use new RegExp
db.collection('user').where({
  name: new RegExp('^\\ds', 'i')
})

// 或者使用new db.RegExp，这种方式阿里云不支持
// Or use new db.RegExp, which is not supported by Alibaba Cloud
db.collection('articles').where({
  version: new db.RegExp({
    regex: '^\\ds',   // 正则表达式为 /^\ds/，转义后变成 '^\\ds'
    options: 'i'    // i表示忽略大小写
  }) 
})
```

### 查询数组字段@querywitharr
### Query array field @querywitharr

假设数据表class内有以下数据，可以使用下面两种方式查询数组内包含指定值
Assuming that the data table class has the following data, you can use the following two methods to query the array containing the specified value

```js
{
  "_id": "1",
  "students": ["li","wang"]
}
{
  "_id": "2",
  "students": ["wang","li"]
}
{
  "_id": "3",
  "students": ["zhao","qian"]
}
```

#### 指定下标查询
#### Specify subscript query

```js
const index = 1
const res = await db.collection('class').where({
  ['students.' + index]: 'wang'
})
.get()
```

```js
// 查询结果如下
// The query result is as follows
{
  data: [{
    "_id": "1",
    "students": ["li","wang"]
  }]
}
```

#### 不指定下标查询
#### Do not specify subscript query

```js
const res = await db.collection('class').where({
  students: 'wang'
})
.get()
```

查询结果如下
The query results are as follows

```js
{
  data: [{
    "_id": "1",
    "students": ["li","wang"]
  },{
    "_id": "1",
    "students": ["wang","li"]
  }]
}
```

#### 数组内是对象
#### Arrays are objects

如果将上面class内的数据改为如下形式
If the data in the above class is changed to the following form

```js
{
  "_id": "1",
  "students": [{
    name: "li"
  },{
    name: "wang"
  }]
}
{
  "_id": "2",
  "students": [{
    name: "wang"
  },{
    name: "li"
  }]
}
{
  "_id": "3",
  "students": [{
    name: "zhao"
  },{
    name: "qian"
  }]
}
```

不指定下标查询的写法可以修改为
The writing method of the query without specifying a subscript can be modified as

```js
const res = await db.collection('class').where({
  'students.name': 'wang'
})
.get()
```

查询结果如下
The query results are as follows

```js
{
  data: [{
    "_id": "1",
    "students": [{
      name: "li"
    },{
      name: "wang"
    }]
  },
  {
    "_id": "2",
    "students": [{
      name: "wang"
    },{
      name: "li"
    }]
  }]
}
```

## 删除文档@remove
## remove document @remove

**方式1 通过指定文档ID删除**
**Method 1 Delete by specifying the document ID**

collection.doc(_id).remove()

```js
// 清理全部数据
// clean up all data
let res = await collection.get()
res.data.map(async(document) => {
  return await collection.doc(document.id).remove();
});
```

**方式2 条件查找文档然后直接批量删除**
**Method 2 Find documents by condition and delete them in batches directly**

collection.where().remove()

```js
// 删除字段a的值大于2的文档
// delete documents with field a value greater than 2
const dbCmd = db.command
let res = await collection.where({
  a: dbCmd.gt(2)
}).remove()

// 清理全部数据
// clean up all data
const dbCmd = db.command
let res = await collection.where({
  _id: dbCmd.exists(true)
}).remove()
```

响应参数
response parameter

| 字段      | 类型    | 必填 | 说明                     |
| Fields | Type | Required | Description |
| --------- | ------- | ---- | ------------------------ |
| deleted   | Number | 否   | 删除的记录数量              |
| deleted | Number | No | Number of records deleted |

示例：判断删除成功或失败，打印删除的记录数量
Example: Determine the success or failure of deletion, and print the number of deleted records

```js
const db = uniCloud.database();
db.collection("table1").doc("5f79fdb337d16d0001899566").remove()
	.then((res) => {
		console.log("删除成功，删除条数为: ",res.deleted);
	})
	.catch((err) => {
		console.log( err.message )
	})
	.finally(() => {
		
	})
```

## 更新文档@update
## Update documentation @update

### 更新指定文档@doc-update
### Update the specified document @doc-update

**使用腾讯云时更新方法必须搭配doc、where方法使用，`db.collection('test').update()`会报如下错误：`param should have required property 'query'`**
**When using Tencent Cloud, the update method must be used with the doc and where methods. `db.collection('test').update()` will report the following error: `param should have required property 'query'`**

collection.doc().update(Object data)

> 未使用set、remove更新操作符的情况下，此方法不会删除字段，仅将更新数据和已有数据合并。
> If the set and remove update operators are not used, this method will not delete the field, but only merge the updated data with the existing data.

**参数说明**
**Parameter Description**

| 参数 | 类型   | 必填 | 说明                                     |
| Parameters | Type | Required | Description |
| ---- | ------ | ---- | ---------------------------------------- |
| data | object | 是   | 更新字段的Object，{'name': 'Ben'} _id 非必填|
| data | object | Yes | Object to update the field, {'name': 'Ben'} _id not required|

**响应参数**
**Response parameters**

| 参数	| 类型	|  说明																			|
| Parameters | Type | Description |
| ----	| ------|  ----------------------------------------	|
|updated| Number| 更新成功条数，数据更新前后没变化时会返回0	|
|updated| Number| The number of successful updates, it will return 0 if the data has not changed before and after the update |


```js
let res = await collection.doc('doc-id').update({
  name: "Hey",
  count: {
    fav: 1
  }
});
```

```json
// 更新前
// before update
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后
// Updated
{
  "_id": "doc-id",
  "name": "Hey",
  "count": {
    "fav": 1,
    "follow": 0
  }
}
```

更新数组时，已数组下标作为key即可，比如以下示例将数组arr内下标为1的值修改为 uniCloud
When updating the array, the subscript of the array can be used as the key. For example, the following example changes the value of subscript 1 in the array arr to uniCloud

```js
let res = await collection.doc('doc-id').update({
  arr: {
    1: "uniCloud"
  }
})
```

```json
// 更新前
// before update
{
  "_id": "doc-id",
  "arr": ["hello", "world"]
}
// 更新后
// Updated
{
  "_id": "doc-id",
  "arr": ["hello", "uniCloud"]
}
```

### 更新文档，如果不存在则创建@doc-set
### Update documentation, create @doc-set if it doesn't exist

collection.doc().set()

**注意：**
**Notice:**

> 此方法会覆写已有字段，需注意与`update`表现不同，比如以下示例执行`set`之后`follow`字段会被删除
> This method will overwrite the existing field. It should be noted that the performance is different from `update`. For example, the `follow` field will be deleted after executing `set` in the following example

```js
let res = await collection.doc('doc-id').set({
  name: "Hey",
  count: {
    fav: 1
  }
})
```

```json
// 更新前
// before update
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后
// Updated
{
  "_id": "doc-id",
  "name": "Hey",
  "count": {
    "fav": 1
  }
}
```

### 批量更新文档@where-update
### Batch update documents @where-update

`collection.update()`

```js
const dbCmd = db.command
let res = await collection.where({name: dbCmd.eq('hey')}).update({
  age: 18,
})
```

### 更新并返回更新后的数据@update-and-return
### Update and return the updated data @update-and-return

> 新增于HBuilderX 3.2.0
> Added in HBuilderX 3.2.0

此接口仅会操作一条数据，有多条数据匹配的情况下会只更新匹配的第一条并返回
This interface will only operate on one piece of data. If multiple pieces of data match, only the first matching piece will be updated and returned

**示例**
**Example**

```js
const db = uniCloud.database()
await db.collection('test').where({
  uid: '1'
}).updateAndReturn({
  score: db.command.inc(2)
})

// 更新前
// before update
{
  _id: 'xx',
  uid: '1',
  score: 0
}
// 更新后
// Updated
{
  _id: 'xx',
  uid: '1',
  score: 2
}

// 接口返回值
// interface return value
{
  updated: 1,
  doc: {
    _id: 'xx',
    uid: '1',
    score: 2
  }
}
```

**注意**
**Notice**

- 使用updateAndReturn时，不可使用field方法
- When using updateAndReturn, the field method cannot be used
- 可以在事务中使用，可以使用`transaction.where().updateAndReturn()`以及`transaction.doc().updateAndReturn()`
- Can be used in transactions, you can use `transaction.where().updateAndReturn()` and `transaction.doc().updateAndReturn()`
- 不同于update接口，此接口返回的updated不表示数据真的进行了更新
- Unlike the update interface, the updated returned by this interface does not indicate that the data has actually been updated
- 腾讯云暂不支持`doc().updateAndReturn()`的写法可以使用`where().updateAndReturn()`替代
- Tencent Cloud does not currently support the writing of `doc().updateAndReturn()`, you can use `where().updateAndReturn()` instead

### 更新数组内指定下标的元素@update-arr-with-index
### Update the element at the specified index in the array @update-arr-with-index

```js
const res = await db.collection('query').doc('1').update({
  // 更新students[1]
  // update students[1]
  ['students.' + 1]: {
    name: 'wang'
  }
})
```

```js
// 更新前
// before update
{
  "_id": "1",
  "students": [
    {
      "name": "zhang"
    },
    {
      "name": "li"
    }
  ]
}

// 更新后
// Updated
{
  "_id": "1",
  "students": [
    {
      "name": "zhang"
    },
    {
      "name": "wang"
    }
  ]
}
```

### 更新数组内匹配条件的元素@update-arr-matched
### Update elements in the array that match the condition @update-arr-matched

**注意：只可确定数组内只会被匹配到一个的时候使用**
**Note: Only use it when you can only determine that only one match is in the array**

```js
const res = await db.collection('query').where({
	'students.id': '001'
}).update({
  // 将students内id为001的name改为li，$代表where内匹配到的数组项的序号
  // Change the name with id 001 in students to li, and $ represents the serial number of the matched array item in where
	'students.$.name': 'li'
})
```


```js
// 更新前
// before update
{
  "_id": "1",
  "students": [
    {
      "id": "001",
      "name": "zhang"
    },
    {
      "id": "002",
      "name": "wang"
    }
  ]
}

// 更新后
// Updated
{
  "_id": "1",
  "students": [
    {
      "id": "001",
      "name": "li"
    },
    {
      "id": "002",
      "name": "wang"
    }
  ]
}
```

### 更新操作符@update-operator
### Update operator @update-operator

更多数据库操作符请查看[数据库操作符](#dbcmd)
For more database operators, please see [Database Operators](#dbcmd)

#### set@operator-set

更新指令。用于设定字段等于指定值。这种方法相比传入纯 JS 对象的好处是能够指定字段等于一个对象：
Update instructions. Used to set the field equal to the specified value. The advantage of this approach over passing in plain JS objects is the ability to specify fields equal to an object:

```js
const dbCmd = db.command
let res = await db.collection('photo').doc('doc-id').update({
  count: dbCmd.set({
    fav: 1,
    follow: 1
  })
})
```

```json
// 更新前
// before update
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后
// Updated
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 1,
    "follow": 1
  }
}
```

#### inc@operator-inc

更新指令。用于指示字段自增某个值，这是个原子操作，使用这个操作指令而不是先读数据、再加、再写回的好处是：
Update instruction. It is used to indicate that the field increments a certain value. This is an atomic operation. The advantages of using this operation command instead of reading data first, adding it, and writing it back are:

1. 原子性：多个用户同时写，对数据库来说都是将字段加一，不会有后来者覆写前者的情况
1. Atomicity: When multiple users write at the same time, the field is incremented by one for the database, and there will be no situation where the latter will overwrite the former.
2. 减少一次请求：不需先读再写
2. One less request: no need to read and then write

之后的 mul 指令同理。
The same is true for subsequent mul instructions.

在文章阅读数+1、收藏+1等很多场景会用到它。如给收藏的商品数量加一：
It will be used in many scenarios such as article reading +1, collection +1, etc. For example, add one to the number of items in the collection:

```js
const dbCmd = db.command

let res = await db.collection('user').where({
  _id: 'my-doc-id'
}).update({
  count: {
    fav: dbCmd.inc(1)
  }
})
```

```json
// 更新前
// before update
{
  "_id": "my-doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后
// Updated
{
  "_id": "my-doc-id",
  "name": "Hello",
  "count": {
    "fav": 1,
    "follow": 0
  }
}
```

请注意并没有直接提供减法操作符，如果要实现减法，仍通过inc实现。比如上述字段减1，
Please note that the subtraction operator is not provided directly, if you want to implement subtraction, it is still implemented by inc. For example, subtract 1 from the above field,

```js
const dbCmd = db.command

let res = await db.collection('user').where({
  _id: 'my-doc-id'
}).update({
  count: {
    fav: dbCmd.inc(-1)
  }
})
```

#### mul@operator-mul

更新指令。用于指示字段自乘某个值。
Update instruction. Used to indicate that the field is multiplied by a value.

以下示例将count内的fav字段乘10
The following example multiplies the fav field within count by 10

```js
const dbCmd = db.command

let res = await db.collection('user').where({
  _id: 'my-doc-id'
}).update({
  count: {
    fav: dbCmd.mul(10)
  }
})
```

```json
// 更新前
// before update
{
  "_id": "my-doc-id",
  "name": "Hello",
  "count": {
    "fav": 2,
    "follow": 0
  }
}

// 更新后
// Updated
{
  "_id": "my-doc-id",
  "name": "Hello",
  "count": {
    "fav": 20,
    "follow": 0
  }
}
```

请注意没有直接提供除法操作符，如果要实现除法，仍通过mul实现。比如上述字段除以10，
Note that the division operator is not provided directly, if you want to implement division, it is still implemented by mul. For example, dividing the above field by 10,

```js
const dbCmd = db.command

let res = await db.collection('user').where({
  _id: 'my-doc-id'
}).update({
  count: {
    fav: dbCmd.mul(0.1)
  }
})
```

#### remove@operator-remove

更新指令。用于表示删除某个字段。如某人删除了自己一条商品评价中的评分：
Update instruction. Used to indicate the deletion of a field. If someone deletes a rating from one of their product reviews:

```js
const dbCmd = db.command
let res = await db.collection('comments').doc('comment-id').update({
  rating: dbCmd.remove()
})
```

```json
// 更新前
// before update
{
  "_id": "comment-id",
  "rating": 5,
  "comment": "xxx"
}

// 更新后
// Updated
{
  "_id": "comment-id",
  "comment": "xxx"
}
```

#### push@operator-push
向数组尾部追加元素，支持传入单个元素或数组
Append elements to the end of the array, support passing a single element or an array

```js
const dbCmd = db.command

let res = await db.collection('comments').doc('comment-id').update({
  // users: dbCmd.push('aaa')
  users: dbCmd.push(['c', 'd'])
})
```

```json
// 更新前
// before update
{
  "_id": "comment-id",
  "users": ["a","b"]
}

// 更新后
// Updated
{
  "_id": "comment-id",
  "users": ["a","b","c","d"]
}
```

#### pop@operator-pop
删除数组尾部元素
delete the last element of the array

```js
const dbCmd = db.command

let res = await db.collection('comments').doc('comment-id').update({
  users: dbCmd.pop()
})
```

```json
// 更新前
// before update
{
  "_id": "comment-id",
  "users": ["a","b"]
}

// 更新后
// Updated
{
  "_id": "comment-id",
  "users": ["a"]
}
```

#### unshift@operator-unshift

向数组头部添加元素，支持传入单个元素或数组。使用同push
Adds an element to the head of an array, supports passing a single element or an array. Use the same push

```js
const dbCmd = db.command

let res = await db.collection('comments').doc('comment-id').update({
  // users: dbCmd.push('aaa')
  users: dbCmd.unshift(['c', 'd'])
})
```

```json
// 更新前
// before update
{
  "_id": "comment-id",
  "users": ["a","b"]
}

// 更新后
// Updated
{
  "_id": "comment-id",
  "users": ["c","d","a","b"]
}
```

#### shift@operator-shift

删除数组头部元素。使用同pop
Remove the element at the head of the array. Use the same pop

```js
const dbCmd = db.command

let res = await db.collection('comments').doc('comment-id').update({
  users: dbCmd.shift()
})
```

```json
// 更新前
// before update
{
  "_id": "comment-id",
  "users": ["a","b"]
}

// 更新后
// Updated
{
  "_id": "comment-id",
  "users": ["b"]
}
```

## GEO地理位置@geo
## GEO geolocation @geo

注意：**如果需要对类型为地理位置的字段进行搜索，一定要建立地理位置索引**。
Note: **If you need to search for fields whose type is geographic location, you must create a geographic location index**.

### GEO数据类型@geo-data-type
### GEO data type @geo-data-type

#### Point@geo-point

用于表示地理位置点，用经纬度唯一标记一个点，这是一个特殊的数据存储类型。
Used to represent geographic points, uniquely mark a point with latitude and longitude, which is a special type of data storage.

签名：`Point(longitude: number, latitude: number)`
Signature: `Point(longitude: number, latitude: number)`

示例：
Example:
```js
new db.Geo.Point(longitude, latitude)
```

#### LineString@geo-line-string

用于表示地理路径，是由两个或者更多的 `Point` 组成的线段。
Used to represent a geographic path, a line segment consisting of two or more `Point` s.

签名：`LineString(points: Point[])`
Signature: `LineString(points: Point[])`

示例：
Example:

```js
new db.Geo.LineString([
  new db.Geo.Point(lngA, latA),
  new db.Geo.Point(lngB, latB),
  // ...
])
```

#### Polygon@geo-polygon

用于表示地理上的一个多边形（有洞或无洞均可），它是由一个或多个**闭环** `LineString` 组成的几何图形。
Used to represent a geographic polygon (with or without holes), which is a geometric figure composed of one or more **closed-loop** `LineString`.

由一个环组成的 `Polygon` 是没有洞的多边形，由多个环组成的是有洞的多边形。对由多个环（`LineString`）组成的多边形（`Polygon`），第一个环是外环，所有其他环是内环（洞）。
A `Polygon` composed of a ring is a polygon without holes, and a polygon composed of multiple rings is a polygon with holes. For a polygon (`Polygon`) consisting of multiple rings (`LineString`), the first ring is the outer ring and all other rings are the inner rings (holes).

签名：`Polygon(lines: LineString[])`
Signature: `Polygon(lines: LineString[])`

示例：
Example:

```js
new db.Geo.Polygon([
  new db.Geo.LineString(...),
  new db.Geo.LineString(...),
  // ...
])
```

#### MultiPoint@geo-multi-point

用于表示多个点 `Point` 的集合。
Used to represent a collection of multiple points `Point`.

签名：`MultiPoint(points: Point[])`
Signature: `MultiPoint(points: Point[])`

示例：
Example:

```js
new db.Geo.MultiPoint([
  new db.Geo.Point(lngA, latA),
  new db.Geo.Point(lngB, latB),
  // ...
])
```

#### MultiLineString@geo-multi-line-string

用于表示多个地理路径 `LineString` 的集合。
A collection of `LineString` used to represent multiple geographic paths.

签名：`MultiLineString(lines: LineString[])`
Sign：`MultiLineString(lines: LineString[])`

示例：
Example:

```js
new db.Geo.MultiLineString([
  new db.Geo.LineString(...),
  new db.Geo.LineString(...),
  // ...
])
```


#### MultiPolygon@geo-multi-polygon

用于表示多个地理多边形 `Polygon` 的集合。
A collection of `Polygon`s used to represent multiple geographic polygons.

签名：`MultiPolygon(polygons: Polygon[])`
Signature: `MultiPolygon(polygons: Polygon[])`

示例：
Example:

```js
new db.Geo.MultiPolygon([
  new db.Geo.Polygon(...),
  new db.Geo.Polygon(...),
  // ...
])
```

### GEO操作符@geo-operator
### GEO operator @geo-operator

#### geoNear@operator-geo-near

按从近到远的顺序，找出字段值在给定点的附近的记录。
Find records with field values near a given point in order from nearest to farthest.

签名：
sign:
```js
db.command.geoNear(options: IOptions)

interface IOptions {
  geometry: Point // 点的地理位置
  maxDistance?: number // 选填，最大距离，米为单位
  minDistance?: number // 选填，最小距离，米为单位
}
```


示例：
Example:

```js
let res = await db.collection('user').where({
  location: db.command.geoNear({
    geometry: new db.Geo.Point(lngA, latA),
    maxDistance: 1000,
    minDistance: 0
  })
}).get()
```

#### geoWithin@operator-geo-within

找出字段值在指定 Polygon / MultiPolygon 内的记录，无排序
Finds records whose field value is within the specified Polygon / MultiPolygon, without sorting

签名：
sign:

```js
db.command.geoWithin(IOptions)

interface IOptions {
  geometry: Polygon | MultiPolygon // 地理位置
}
```

示例：
Example:

```js
// 一个闭合的区域
// a closed area
const area = new Polygon([
  new LineString([
    new Point(lngA, latA),
    new Point(lngB, latB),
    new Point(lngC, latC),
    new Point(lngA, latA)
  ]),
])

// 搜索 location 字段在这个区域中的 user
// Search for users whose location field is in this area
let res = await db.collection('user').where({
  location: db.command.geoWithin({
    geometry: area
  })
}).get()
```

#### geoIntersects@operator-geo-intersects

找出字段值和给定的地理位置图形相交的记录
Find records whose field value intersects a given geographic location graph

签名：
sign:

```js
db.command.geoIntersects(IOptions)

interface IOptions {
  geometry: Point | LineString | MultiPoint | MultiLineString | Polygon | MultiPolygon // 地理位置
}
```

示例：
Example:

```js
// 一条路径
// a path
const line = new LineString([
  new Point(lngA, latA),
  new Point(lngB, latB)
])

// 搜索 location 与这条路径相交的 user
// Search for users whose location intersects this path
let res = await db.collection('user').where({
  location: db.command.geoIntersects({
    geometry: line
  })
}).get()
```

## 事务@transaction
## Transaction @transaction

事务通常用来在某个数据库操作失败之后进行回滚。
Transactions are typically used to roll back after a database operation fails.

> 事务因为要锁行，是有时间限制的。从事务开始到事务提交/回滚，时间不可超过10秒。另外注意：如果多条事务同时处理同一行数据，可能存在写冲突，进而导致失败。
> Transactions are time-limited because they need to lock rows. The time from the start of the transaction to the commit/rollback of the transaction cannot exceed 10 seconds. Also note: If multiple transactions process the same row of data at the same time, there may be write conflicts, which may lead to failure.

### runTransaction@run-transaction

**阿里云不支持此用法，请换成startTransaction以使用事务**
**Alibaba Cloud does not support this usage, please replace it with startTransaction to use transaction**

发起事务。与`startTransaction`作用类似，接收参数类型不同
Initiate a transaction. Similar to `startTransaction`, the received parameter types are different

**`runTransaction` 的形式如下：**
**`runTransaction` has the following form:**

```javascript
db.runTransaction(callback: function, times: number)
```

**参数**
**parameter**

|参数			|类型			|说明																																										|
|parameter |type |description |
|---			|---			|---																																										|
|callback	|Function	|事务执行函数，需为 async 异步函数或返回 Promise 的函数																	|
|callback |Function |The transaction execution function, which must be an async asynchronous function or a function that returns a Promise |
|times		|Number		|事务执行最多次数，默认 3 次，成功后不重复执行，只有事务冲突时会重试，其他异常时不会重试|
|times |Number |The maximum number of times the transaction is executed, the default is 3 times, and it will not be repeated after success. It will only be retried when the transaction conflicts, and it will not be retried when other exceptions occur|

**返回值**
**return value**

`runTransaction`返回一个`Promise`，此`Promise.resolve`的结果为`callback`事务执行函数的返回值，`reject` 的结果为事务执行过程中抛出的异常或者是 `transaction.rollback` 传入的值
`runTransaction` returns a `Promise`, the result of this `Promise.resolve` is the return value of the `callback` transaction execution function, the result of `reject` is the exception thrown during the transaction execution process or the `transaction.rollback` pass entered value

**callback 事务执行函数的说明**
**callback transaction execution function description**

事务执行函数由开发者传入，函数接收一个参数 transaction，其上提供 collection 方法和 rollback 方法。collection 方法用于取数据库集合记录引用进行操作，rollback 方法用于在不想继续执行事务时终止并回滚事务。
The transaction execution function is passed in by the developer. The function receives a parameter transaction, which provides the collection method and the rollback method. The collection method is used to fetch the database collection record reference for operation, and the rollback method is used to terminate and roll back the transaction when you do not want to continue executing the transaction.

事务执行函数必须为 `async` 异步函数或返回 `Promise` 的函数，当事务执行函数返回时，uniCloud 会认为用户逻辑已完成，自动提交（`commit`）事务，因此务必确保用户事务逻辑完成后才在 `async` 异步函数中返回或 `resolve Promise`。
The transaction execution function must be an `async` asynchronous function or a function that returns a `Promise`. When the transaction execution function returns, uniCloud will consider that the user logic has been completed and automatically commit (`commit`) the transaction, so be sure to ensure that the user transaction logic is completed after Only return or `resolve Promise` in `async` asynchronous functions.

事务执行函数可能会被执行多次，在内部发现事务冲突时会自动重复执行，如果超过设定的执行次数上限，会报错退出。
The transaction execution function may be executed multiple times. When a transaction conflict is found internally, it will be automatically executed repeatedly. If the upper limit of the set execution times is exceeded, it will report an error and exit.

在事务执行函数中发生的错误，都会认为事务执行失败而抛错。
Errors that occur in the transaction execution function will be considered as transaction execution failure and throw an error.

事务执行函数返回的值会作为 `runTransaction` 返回的 `Promise resolve` 的值，在函数中抛出的异常会作为 `runTransaction` 返回的 `Promise reject` 的值，如果事务执行函数中调用了 `transaction.rollback`，则传入 `rollback` 函数的值会作为 `runTransaction` 返回的 `Promise reject` 的值。
The value returned by the transaction execution function will be used as the value of `Promise resolve` returned by `runTransaction`, and the exception thrown in the function will be used as the value of `Promise reject` returned by `runTransaction`. If `transaction` is called in the transaction execution function .rollback`, the value passed to the `rollback` function will be used as the value of the `Promise reject` returned by `runTransaction`.

**限制**
**limit**

事务操作时为保障效率和并发性，只允许进行单记录操作，不允许进行批量操作，但可以在一个事务进行多次数据库操作。
In order to ensure efficiency and concurrency during transaction operations, only single-record operations are allowed, and batch operations are not allowed, but multiple database operations can be performed in one transaction.

- 对于修改和删除仅支持使用doc方法，不支持使用where方法。
- For modification and deletion, only the doc method is supported, and the where method is not supported.
- 新增时使用add方法一次只可以新增单条，不可新增多条，即不支持在add方法内传入数组
- When adding, using the add method can only add a single item at a time, and cannot add multiple items, that is, it is not supported to pass an array in the add method
- 腾讯云没有限制where的使用，但是使用where修改或删除多条会导致无法回滚
- Tencent Cloud does not limit the use of where, but using where to modify or delete multiple entries will result in failure to roll back

**注意事项**
**Precautions**

- 开发者提供的事务执行函数正常返回时，uniCloud 会自动提交（`commit`）事务，请勿在事务执行函数内调用 `transaction.commit` 方法，该方法仅在通过 `db.startTransaction` 进行事务操作时使用
- When the transaction execution function provided by the developer returns normally, uniCloud will automatically commit (`commit`) the transaction. Do not call the `transaction.commit` method in the transaction execution function. This method only executes the transaction through `db.startTransaction` use during operation
- 请注意transaction.doc().get()返回的data不是数组形式
- Please note that the data returned by transaction.doc().get() is not an array

**示例代码**
**Sample code**

两个账户之间进行转账的简易示例
Simple example of transferring money between two accounts

```javascript
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event) => {
  try {
    const result = await db.runTransaction(async transaction => {
      const aaaRes = await transaction.collection('account').doc('aaa').get()
      const bbbRes = await transaction.collection('account').doc('bbb').get()
      if(aaaRes.data && bbbRes.data) {
        try {
          const updateAAARes = await transaction.collection('account').doc('aaa').update({
            amount: dbCmd.inc(-10)
          })

          const updateBBBRes = await transaction.collection('account').doc('bbb').update({
            amount: dbCmd.inc(10)
          })
          const aaaEndRes = await transaction.collection('account').doc('aaa').get()
          if (aaaEndRes.data.amount < 0) { // 请注意transaction.doc().get()返回的data不是数组形式
            await transaction.rollback(-100)
          }
          // 会作为 runTransaction resolve 的结果返回
          // will be returned as the result of runTransaction resolve
          return {
            aaaAccount: aaaEndRes.data.amount,
          }
        } catch(e) {
          // 会作为 runTransaction reject 的结果出去
          // will go out as the result of runTransaction reject
          await transaction.rollback(-100)
        }
      } else {
        await transaction.rollback(-100)
      }
    })

    return {
      success: true,
      aaaAccount: result.aaaAccount,
    }
  } catch (e) {
    console.error(`transaction error`, e)

    return {
      success: false,
      error: e
    }
  }
}
```

### startTransaction@start-transaction

发起事务。与`runTransaction`作用类似，接收参数类型不同
Initiate a transaction. Similar to `runTransaction`, the received parameter types are different

**`startTransaction` 形式如下**
**`startTransaction` has the following form**

```javascript
// 与runTransaction不同，startTransaction不接收参数
// Unlike runTransaction, startTransaction does not accept parameters
db.startTransaction()
```

**返回值**
**return value**

返回一个`Promise`，此`Promise resolve`的结果为事务操作对象（**注意这里与runTransaction的区别**），其上可通过 `collection API` 操作数据库，通过 `commit`（**使用`startTransaction`需要主动`commit`**） 或 `rollback` 来结束或终止事务。
Returns a `Promise`, the result of this `Promise resolve` is a transaction operation object (**note the difference between this and runTransaction**), on which the database can be operated through the `collection API`, through `commit` (**Use ` startTransaction` requires an active `commit`**) or `rollback` to end or terminate the transaction.

**限制**
**limit**

事务操作时为保障效率和并发性，只允许进行单记录操作，不允许进行批量操作，但可以在一个事务进行多次数据库操作。
In order to ensure efficiency and concurrency during transaction operations, only single-record operations are allowed, and batch operations are not allowed, but multiple database operations can be performed in one transaction.

- 对于修改和删除仅支持使用doc方法，不支持使用where方法，updateAndReturn除外。
- For modification and deletion, only the doc method is supported, and the where method is not supported, except for updateAndReturn.
- 新增时使用add方法一次只可以新增单条，不可新增多条，即不支持在add方法内传入数组
- When adding, using the add method can only add a single item at a time, and cannot add multiple items, that is, it is not supported to pass an array in the add method
- 腾讯云没有限制where的使用，但是使用where修改或删除多条会导致无法回滚
- Tencent Cloud does not limit the use of where, but using where to modify or delete multiple entries will result in failure to roll back

**注意**
**Notice**

- 请注意transaction.doc().get()返回的data不是数组形式
- Please note that the data returned by transaction.doc().get() is not an array

**示例代码**
**Sample code**

两个账户之间进行转账的简易示例
Simple example of transferring money between two accounts

```javascript
const db = uniCloud.database()
const dbCmd = db.command

exports.main = async (event) => {
  const transaction = await db.startTransaction()
  try {

    const aaaRes = await transaction.collection('account').doc('aaa').get()
    const bbbRes = await transaction.collection('account').doc('bbb').get()

    if (aaaRes.data && bbbRes.data) {
      const updateAAARes = await transaction.collection('account').doc('aaa').update({
        amount: dbCmd.inc(-10)
      })

      const updateBBBRes = await transaction.collection('account').doc('bbb').update({
        amount: dbCmd.inc(10)
      })
      
      const aaaEndRes = await transaction.collection('account').doc('aaa').get()
      if (aaaEndRes.data.amount < 0) { // 请注意transaction.doc().get()返回的data不是数组形式
        await transaction.rollback(-100)
        return {
          success: false,
          error: `rollback`,
          rollbackCode: -100,
        }
      } else {
        await transaction.commit()
        console.log(`transaction succeeded`)

        return {
          success: true,
          aaaAccount: aaaRes.data.amount - 10,
        }
      }

    } else {

      return {
        success: false,
        error: `rollback`,
        rollbackCode: -100,
      }
    }
  } catch (e) {
    await transaction.rollback()
    console.error(`transaction error`, e)

    return {
      success: false,
      error: e
    }
  }
}
```


<!-- ## 数据库实时推送
<!-- ## Database push in real time

监听指定集合中符合查询条件的文档，通过onchange回调获得文档的变化详情
Listen to the documents in the specified collection that meet the query conditions, and get the details of the changes of the documents through the onchange callback
(where参数为查询条件 参考 [查询文档](#查询文档))
(where parameter is the query condition, please refer to [query document](#%E6%9F%A5%E8%AF%A2%E6%96%87%E6%A1%A3))

```js
  const uniCloud =  uniCloud.init({
      spaceId: 'YourSpaceId
  });
  const db = uniCloud.database();
  const dbCmd = db.command
  const collection = db.collection('collName') // collName 需填当前服务空间下集合名称

  let ref = collection.where({ test: dbCmd.gt(0) }).watch({
    onChange: snapshot => {
        console.log("收到snapshot**********", snapshot)
    },
    onError: error => {
      console.log("收到error**********", error)
    }
  })
```

单个doc的监听，也可以采用doc('docId').watch()形式
The monitoring of a single doc can also be in the form of doc('docId').watch()
```js
  let ref = collection.doc('one docId').watch({
    onChange: snapshot => {
        console.log("收到snapshot**********", snapshot)
    },
    onError: error => {
      console.log("收到error**********", error)
    }
  })
```

手动关闭监听，当前监听将不再收到推送
Manually close the monitor, the current monitor will no longer receive pushes
```js
  ref.close()
```
 -->


