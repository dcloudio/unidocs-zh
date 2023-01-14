## JQL数据库操作
## JQL database operations

`JQL`，全称 javascript query language，是一种js方式操作数据库的规范。
`JQL`, the full name of javascript query language, is a specification for operating databases in js mode.

- `JQL`大幅降低了js工程师操作数据库的难度，比SQL和传统MongoDB API更清晰、易掌握。
- `JQL` greatly reduces the difficulty for js engineers to operate the database, and is clearer and easier to master than SQL and traditional MongoDB API.
- `JQL`支持强大的[DB Schema](schema.md)，内置数据规则和权限。DB Schema 支持[uni-id](uni-id-summary.md)，可直接使用其角色和权限。无需再开发各种数据合法性校验和鉴权代码。
- `JQL` supports powerful [DB Schema](schema.md), built-in data rules and permissions. DB Schema supports [uni-id](uni-id-summary.md), and its roles and permissions can be used directly. There is no need to develop various data validity check and authentication codes.
- `JQL`利用json数据库的嵌套特点，极大的简化了联表查询和树查询的复杂度，并支持更加灵活的虚拟表。
- `JQL` utilizes the nested feature of json database, which greatly simplifies the complexity of join table query and tree query, and supports more flexible virtual tables.

#### jql的诞生背景
#### jql's birth background

传统的数据库查询，有sql和nosql两种查询语法。
For traditional database queries, there are two query syntaxes, sql and nosql.

- sql是一种字符串表达式，写法形如：
- sql is a string expression, written as:

```
select * from table1 where field1="value1"
```

- nosql是js方法+json方式的参数，写法形如：
- nosql is a parameter of js method + json method, written as:

```js
const db = uniCloud.database()
let res = await db.collection('table').where({
  field1: 'value1'
}).get()
```

sql写法，对js工程师而言有学习成本，而且无法处理非关系型的MongoDB数据库，以及sql的联表查询inner join、left join也并不易于学习。
The sql writing method has a learning cost for js engineers, and it cannot handle the non-relational MongoDB database, and the sql join table query inner join and left join are not easy to learn.

而nosql的写法，实在过于复杂。比如如下3个例子：
The writing of nosql is too complicated. For example, the following three examples:

1. 运算符需要转码，`>`需要使用`gt`方法、`==`需要使用`eq`方法
1. The operator needs to be transcoded, `>` needs to use the `gt` method, `==` needs to use the `eq` method

  比如一个简单的查询，取field1>0，则需要如下复杂写法
  For example, a simple query, taking field1>0, requires the following complex writing

  ```js
  const db = uniCloud.database()
  const dbCmd = db.command
  let res = await db.collection('table1').where({
    field1: dbCmd.gt(0)
  }).get()
  ```

  如果要表达`或`关系，需要用`or`方法，写法更复杂
  If you want to express the `or` relationship, you need to use the `or` method, which is more complicated to write

  ```js
  field1:dbCmd.gt(0).or(dbCmd.lt(-5))
  ```

2. nosql的联表查询写法，比sql还复杂
2. Nosql's join table query writing method is more complicated than sql

  sql的inner join、left join已经够乱了，而nosql的代码无论写法还是可读性，都更“令人发指”。比如这个联表查询：
  SQL's inner join and left join are messy enough, and nosql's code is more "heinous" in both writing and readability. For example, this join table query:

  ```js
  const db = uniCloud.database()
  const dbCmd = db.command
  const $ = dbCmd.aggregate
  let res = await db.collection('orders').aggregate()
  .lookup({
    from: 'books',
    let: {
      order_book: '$book',
      order_quantity: '$quantity'
    },
    pipeline: $.pipeline()
      .match(dbCmd.expr($.and([
        $.eq(['$title', '$$order_book']),
        $.gte(['$stock', '$$order_quantity'])
      ])))
      .project({
        _id: 0,
        title: 1,
        author: 1,
        stock: 1
      })
      .done(),
    as: 'bookList',
  })
  .end()
  ```

这些问题竖起一堵墙，让后端开发难度加大，成为一个“专业领域”。但其实这堵墙是完全可以推倒的。
These problems put up a wall, making back-end development more difficult and becoming a "professional field". But in fact, this wall can be completely torn down.

`jql`将解决这些问题，让js工程师没有难操作的数据库。

具体看以下示例
See the following example for details

  ```js
  const db = uniCloud.database()

  // 使用`jql`查询list表内`name`字段值为`hello-uni-app`的记录
  // Use `jql` to query the records whose `name` field value is `hello-uni-app` in the list table
  db.collection('list')
    .where('name == "hello-uni-app"')
    .get()
    .then((res)=>{
      // res 为数据库查询结果
      // res is the database query result
    }).catch((err)=>{
      // err.message 错误信息
      // err.message error message
      // err.code 错误码
      // err.code error code
    })
  ```

## JQL包含的模块@module
## JQL included modules @module

这里选择以使用了JQL完整功能clientDB为例，JQL操作数据库的流程如下。不同使用场景的区别请参考： [JQL的使用场景](uniCloud/jql.md?id=scene)
Here we choose to use clientDB with the full function of JQL as an example. The process of operating the database with JQL is as follows. For the difference between different usage scenarios, please refer to: [JQL usage scenarios](uniCloud/jql.md?id=scene)

![](https://web-assets.dcloud.net.cn/unidoc/zh/clientdb.jpg)

## JQL的使用场景@scene
## JQL usage scenarios @scene

你可以在以下几种场景使用JQL
You can use JQL in the following scenarios

- 客户端clientDB，包括js内以及unicloud-db组件内，参考：[clientDB](uniCloud/clientdb.md)
- Client clientDB, including js and unicloud-db components, refer to: [clientDB](uniCloud/clientdb.md)
- HBuilderX JQL数据库管理器，参考：[JQL数据库管理器](uniCloud/jql-runner.md)
- HBuilderX JQL database manager, reference: [JQL database manager](uniCloud/jql-runner.md)
- 启用了jql扩展的云函数，参考：[云函数内使用JQL](uniCloud/jql-cloud.md)
- Cloud functions with the jql extension enabled, refer to: [Using JQL in cloud functions](uniCloud/jql-cloud.md)

### 不同场景的区别
### Differences in different scenarios

上述场景在新增、修改数据时都会执行数据校验，但是关于权限校验及action部分稍有不同
The above scenarios will perform data verification when adding or modifying data, but the permission verification and action parts are slightly different

**JQL数据库管理器：**
**JQL database manager:**

- 不会校验任何权限，相当于以数据库管理员的身份执行
- Does not verify any permissions, equivalent to executing as a database administrator
- 即使是admin不能读写的password类型数据也可以读写
- 不会触发数据库触发器
- 不可以执行action云函数

**客户端clientDB：**
**Client clientDB:**

- 完整的权限校验，执行操作的用户不可以操作自己权限之外的数据
- Complete permission verification, the user who performs the operation cannot operate data other than his own permission
- admin用户不可操作password类型的数据
- The admin user cannot operate password type data

**云函数JQL：**
**Cloud Function JQL:**

- 同clientDB，但是password类型的数据可以配置权限，默认权限是false，可以被admin用户操作。
- 可以通过setUser指定当前执行数据库操作的用户身份。

## JQL的限制@limit
## JQL limit @limit

- 会对数据库操作进行序列化，除Date类型、RegExp之外的所有不可JSON序列化的参数类型均不支持（例如：undefined）
- Serialize database operations, all non-JSON serializable parameter types except Date type and RegExp are not supported (for example: undefined)
- 为了严格控制权限，禁止使用set方法
- In order to strictly control permissions, the use of set methods is prohibited
- 为了数据校验能严格限制，更新数据库时不可使用更新操作符`db.command.inc`等
- In order to strictly limit the data verification, the update operator `db.command.inc`, etc. cannot be used when updating the database
- 更新数据时键值不可使用`{'a.b.c': 1}`的形式，需要写成`{a:{b:{c:1}}}`形式
- When updating data, the key value cannot be in the form of `{'a.b.c': 1}`, it needs to be written in the form of `{a:{b:{c:1}}}`

## JQL方法使用限制

### 单表查询

下面这些方法必须严格按照下面的顺序进行调用，其他方法需要在这些方法之后调用（不限制顺序）

```
collection
aggregate
geoNear // 新增于 HBuilderX 3.6.10
doc
where
field
groupBy
groupField
```

### 联表查询

临时表可以使用以下方法（需按照下面的顺序调用）

```
collection
geoNear // 新增于 HBuilderX 3.6.10
where
field
orderBy
skip
limit
getTemp
```

虚拟联表可以使用以下方法（需按照下面的顺序调用）

```
collection
foreignKey
where
field
groupBy
groupField
distinct
orderBy
skip
limit
get
```

### 新增

仅允许`collection().add()`这样的形式

### 修改

仅允许以下两种形式

```js
db.collection('xx').doc('xxx').update({})
db.collection('xx').where('xxxx').update({})
```

### 删除

仅允许以下两种形式

```js
db.collection('xx').doc('xxx').remove()
db.collection('xx').where('xxxx').remove()
```

## jql语句内云端环境变量@variable
## Cloud environment variable @variable in jql statement

|参数名							|说明								|
|Parameter name |Description |
|:-:								|:-:								|
|$cloudEnv_uid			|用户uid，依赖uni-id|
|$cloudEnv_uid |User uid, depends on uni-id|
|$cloudEnv_now			|服务器时间戳				|
|$cloudEnv_now |Server Timestamp |
|$cloudEnv_clientIP	|当前客户端IP				|
|$cloudEnv_clientIP |Current client IP |

在字符串内使用
use within a string

```js
db.collection('user').where('_id==$cloudEnv_uid').get()
```

在对象内使用
use within an object

```js
db.collection('user').where({
	_id: db.getCloudEnv('$cloudEnv_uid')	
}).get()
```

**注意**
**Notice**

- 这些变量使用时并非直接获取对应的值，而是生成一个标记，在云端执行数据库操作时再将这个标记替换为实际的值
- When these variables are used, they do not directly obtain the corresponding value, but generate a tag, and then replace the tag with the actual value when performing database operations in the cloud

## 返回值说明@returnvalue
## Return value description @returnvalue

### 正常请求返回结果
### Normal request returns result

不同数据库操作返回的结果结构不一样
Different database operations return different result structures

**查询数据**
**Query data**

```js
{
	code: 0,
	message: '',
	data: []
}
```

**批量发送数据库查询请求**
**Send database query requests in batches**

只能批量发送查询请求
Only batch query requests can be sent

```js
{
	code: 0,
	message: '',
	dataList: [] // dataList内每一项都是一个查询数据的响应结果 {code: 0, message: '', data: []}
}
```

**新增数据**
**New data**

新增单条
Add a single

```js
{
	code: 0,
	message: '',
	id: '' // 新增数据的id
}
```

新增多条
Add multiple

```js
{
	code: 0,
	message: '',
	ids: [], // 新增数据的id列表
	inserted: 3 // 新增成功的条数
}
```

**删除数据**
**delete data**

```js
{
	code: 0,
	message: '',
	deleted: 1 // 删除的条数
}
```

**更新数据**
**update data**

```js
{
	code: 0,
	message: '',
	updated: 1 // 更新的条数，数据更新前后无变化则更新条数为0
}
```

### 请求报错返回err格式
### Request error and return err format

```js
{
  code: "", // 错误码
  message: "", // 错误信息
}
```

**err.code错误码列表**
**err.code error code list**

|错误码													|描述																		|
|error code |description |
|:-:														|:-:																		|
|TOKEN_INVALID_INVALID_CLIENTID	|token校验未通过（设备特征校验未通过）	|
|TOKEN_INVALID_INVALID_CLIENTID |token verification failed (device feature verification failed) |
|TOKEN_INVALID									|token校验未通过（云端已不包含此token）	|
|TOKEN_INVALID |token verification failed (the cloud does not contain this token) |
|TOKEN_INVALID_TOKEN_EXPIRED		|token校验未通过（token已过期）					|
|TOKEN_INVALID_TOKEN_EXPIRED |token verification failed (token has expired) |
|TOKEN_INVALID_WRONG_TOKEN			|token校验未通过（token校验未通过）			|
|TOKEN_INVALID_WRONG_TOKEN |token verification failed (token verification failed) |
|TOKEN_INVALID_ANONYMOUS_USER   |token校验未通过（当前用户为匿名用户）		|
|TOKEN_INVALID_ANONYMOUS_USER |token verification failed (the current user is an anonymous user) |
|SYNTAX_ERROR										|语法错误																|
|SYNTAX_ERROR |Syntax error |
|PERMISSION_ERROR								|权限校验未通过													|
|PERMISSION_ERROR |Permission verification failed |
|VALIDATION_ERROR								|数据格式未通过													|
|VALIDATION_ERROR |Data format failed |
|DUPLICATE_KEY									|索引冲突																|
|DUPLICATE_KEY |Index conflict |
|SYSTEM_ERROR										|系统错误																|
|SYSTEM_ERROR |System error |

如需自定义返回的err对象，可以在clientDB中挂一个[action云函数](#action)，在action云函数的`after`内用js修改返回结果，传入`after`内的result不带code和message。
If you need to customize the returned err object, you can hang an [action cloud function](#action) in clientDB, modify the returned result with js in the `after` of the action cloud function, and pass the result in `after` without code and message.

## 查询数据@query
## Query data @query

### 查询数组字段@querywitharr
### Query array field @querywitharr

如果数据库存在以下记录
If the following records exist in the database

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

使用jql查询语法时，可以直接使用`students=='wang'`作为查询条件来查询students内包含wang的记录。
When using jql query syntax, you can directly use `students=='wang'` as the query condition to query the records containing wang in students.

### 使用正则查询@regexp
### Use regular query @regexp

以搜索用户输入值为例
Take searching for user input value as an example

```js
const res = await db.collection('goods').where(`${new RegExp(searchVal, 'i')}.test(name)`).get()
```

如果使用[unicloud-db组件](uniCloud/unicloud-db.md)写法如下
If you use [unicloud-db component](uniCloud/unicloud-db.md), it is written as follows

```html
<template>
	<view class="content">
		<input @input="onKeyInput" placeholder="请输入搜索值" />
		<unicloud-db v-slot:default="{data, loading, error, options}" collection="goods" :where="where">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				
			</view>
		</unicloud-db>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        searchVal: ''
      }
		},
		computed: {
			where() {
				return `${new RegExp(searchVal, 'i')}.test(name)` // 使用计算属性得到完整where
			}
		},
		methods: {
      onKeyInput(e) {
        // 实际开发中这里应该还有防抖或者节流操作，这里不做演示
        // In actual development, there should be anti-shake or throttling operations here, no demonstration here
        this.searchVal = e.target.value
      }
		}
	}
</script>

<style>
</style>

```

上面的示例中使用了正则修饰符`i`，用于表示忽略大小写
The regex modifier `i` is used in the above example to indicate case ignoring

### 联表查询@lookup
### Joint table query @lookup

为方便文档描述定义以下两个概念：
The following two concepts are defined for the convenience of document description:

- 临时表：getTemp方法返回的结果，例：`const article = db.collection('article').getTemp() `，此处 article 就是一个临时表
- Temporary table: the result returned by the getTemp method, for example: `const article = db.collection('article').getTemp() `, where article is a temporary table
- 虚拟联表：主表与副表联表产生的表，例：`db.collection(article, 'comment').get()`
- Virtual join table: the table generated by joining the main table and the secondary table, for example: `db.collection(article, 'comment').get()`

> JQL于2021年4月28日优化了联表查询策略，详情参考：[联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
> JQL optimized the join table query strategy on April 28, 2021. For details, please refer to: [join table query strategy adjustment](https://ask.dcloud.net.cn/article/38966)

`JQL`提供了更简单的联表查询方案。不需要学习join、lookup等复杂方法。
`JQL` provides a simpler join table query scheme. There is no need to learn complex methods such as join and lookup.

只需在db schema中，将两个表的关联字段建立映射关系，就可以把2个表当做一个虚拟联表来直接查询。
Just create a mapping relationship between the associated fields of the two tables in the db schema, and you can directly query the two tables as a virtual joint table.

JQL联表查询有以下两种写法：
JQL join table query has the following two ways of writing:

```js
// 直接关联多个表为虚拟联表再进行查询，旧写法，目前更推荐使用getTemp进行联表查询
// Directly associate multiple tables as virtual join tables and then query, the old way of writing, it is currently more recommended to use getTemp for join table queries
const res = await db.collection('order,book').where('_id=="1"').get() // 直接关联order和book之后再过滤

// 使用getTemp先过滤处理获取临时表再联表查询，推荐用法
// Use getTemp to filter and process the temporary table first and then join the table query. Recommended usage
const order = db.collection('order').where('_id=="1"').getTemp() // 注意结尾的方法是getTemp，对order表过滤得到临时表
const res = await db.collection(order, 'book').get() // 将获取的order表的临时表和book表进行联表查询
```

上面两种写法最终结果一致，但是第二种写法性能更好。第一种写法会先将所有数据进行关联，如果数据量很大这一步会消耗很多时间。详细示例见下方说明
The final result of the above two writing methods is the same, but the second writing method has better performance. The first way of writing will first associate all the data. If the amount of data is large, this step will consume a lot of time. See the description below for a detailed example

**关联查询后的返回结果数据结构如下：**
**The data structure of the returned result after the associated query is as follows:**

> 通过HBuilderX提供的[JQL数据库管理](uniCloud/jql-runner.md)功能方便的查看联表查询时返回数据的结构
> Through the [JQL database management](uniCloud/jql-runner.md) function provided by HBuilderX, it is convenient to view the structure of the returned data when querying the joint table

主表某字段foreignKey指向副表时
When the foreignKey of a field in the main table points to the sub-table

```js
{
  "主表字段名1": "xxx",
  "主表字段名2": "xxx",
  "主表内foreignKey指向副表的字段名": [{
    "副表字段名1": "xxx",
    "副表字段名2": "xxx",
  }]
}
```

副表某字段foreignKey指向主表时
When the foreignKey of a field in the secondary table points to the main table

```js
{
  "主表字段名1": "xxx",
  "主表字段名2": "xxx",
  "主表内被副表foreignKey指向的字段名": { 
    "副表1表名": [{ // 一个主表字段可能对应多个副表字段的foreignKey
      "副表1字段名1": "xxx",
      "副表1字段名2": "xxx",
    }],
    "副表2表名": [{ // 一个主表字段可能对应多个副表字段的foreignKey
      "副表2字段名1": "xxx",
      "副表2字段名2": "xxx",
    }],
    "_value": "主表字段原始值" // 使用副表foreignKey查询时会在关联的主表字段内以_value存储该字段的原始值，新增于HBuilderX 3.1.16
  }
}
```

比如有以下两个表，book表，存放书籍商品；order表存放书籍销售订单记录。
For example, there are the following two tables, the book table, which stores book products; the order table, which stores book sales order records.

book表内有以下数据，title为书名、author为作者：
The book table contains the following data, title is the title of the book and author is the author:

```js
{
  "_id": "1",
  "title": "西游记",
  "author": "吴承恩"
}
{
  "_id": "2",
  "title": "水浒传",
  "author": "施耐庵"
}
{
  "_id": "3",
  "title": "三国演义",
  "author": "罗贯中"
}
{
  "_id": "4",
  "title": "红楼梦",
  "author": "曹雪芹"
}
```

order表内有以下数据，book_id字段为book表的书籍_id，quantity为该订单销售了多少本书：
The order table contains the following data, the book_id field is the book_id of the book table, and the quantity is the number of books sold by the order:

```js
{
  "book_id": "1",
  "quantity": 111
}
{
  "book_id": "2",
  "quantity": 222
}
{
  "book_id": "3",
  "quantity": 333
}
{
  "book_id": "4",
  "quantity": 444
}
{
  "book_id": "3",
  "quantity": 555
}
```

如果我们要对这2个表联表查询，在订单记录中同时显示书籍名称和作者，那么首先要建立两个表中关联字段`book`的映射关系。
If we want to query these two tables together and display the book name and author in the order record at the same time, then we must first establish the mapping relationship of the associated field `book` in the two tables.

即，在order表的db schema中，配置字段 book_id 的`foreignKey`，指向 book 表的 _id 字段，如下
That is, in the db schema of the order table, configure the `foreignKey` of the field book_id to point to the _id field of the book table, as follows

```json
// order表schema
// order table schema
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": true
  },
  "properties": {
    "book_id": {
      "bsonType": "string",
      "foreignKey": "book._id" // 使用foreignKey表示，此字段关联book表的_id。
    },
    "quantity": {
      "bsonType": "int"
    }
  }
}
```

book表的DB Schema也要保持正确
The DB Schema of the book table should also be kept correct
```json
// book表schema
// book table schema
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": true
  },
  "properties": {
    "title": {
      "bsonType": "string"
    },
    "author": {
      "bsonType": "string"
    }
  }
}
```

schema保存后，即使用JQL查询。查询表设为order和book这2个表名后，即可自动按照一个合并虚拟联表来查询，field、where等设置均按合并虚拟联表来设置。
After the schema is saved, it is queried using JQL. After the query table is set to the two table names of order and book, it can be automatically queried according to a merged virtual joint table, and the field, where and other settings are set according to the merged virtual joint table.

```js
// 客户端联表查询
// Client join table query
const db = uniCloud.database()
const order = db.collection('order').field('book_id,quantity').getTemp() // 临时表field方法内需要包含关联字段，否则无法建立关联关系
const book = db.collection('book').field('_id,title,author').getTemp() // 临时表field方法内需要包含关联字段，否则无法建立关联关系
db.collection(order, book) // 注意collection方法内需要传入所有用到的表名，用逗号分隔，主表需要放在第一位
  .where('book_id.title == "三国演义"') // 查询order表内书名为“三国演义”的订单
  .get()
  .then(res => {
    console.log(res);
  }).catch(err => {
    console.error(err)
  })
```

上面的写法是jql语法，如果不使用jql的话，使用传统MongoDB写法，需要写很长并且不太容易看懂的代码，大致如下
The above is written in jql syntax. If jql is not used, the traditional MongoDB writing method needs to write long and difficult to understand code, which is roughly as follows

```js
// 注意JQL内联表查询需要用拼接子查询的方式（let+pipeline）
// Note that JQL inline table queries need to use splicing sub-queries (let+pipeline)
const db = uniCloud.database()
const dbCmd = db.command
const $ = dbCmd.aggregate
db.collection('order')
  .aggregate()
  .lookup({
    from: 'book',
    let: {
      book_id: '$book_id'
    },
    pipeline: $.pipeline()
      .match(dbCmd.expr(
        $.eq(['$_id', '$$book_id'])
      ))
      .project({
        title: true,
        author: true
      })
      .done()
    as: 'book_id'
  })
  .match({
    book_id: {
      title: '三国演义'
    }
  })
  .project({
    book_id: true,
    quantity: true
  })
  .end()

// 如果在云函数内还可以使用以下写法
// If you can also use the following writing in the cloud function
const db = uniCloud.database()
const dbCmd = db.command
const $ = dbCmd.aggregate
db.collection('order')
  .aggregate()
  .lookup({
    from: 'book',
    localField: 'book_id',
    foreignField: '_id',
    as: 'book_id'
  })
  .match({
    book_id: {
      title: '三国演义'
    }
  })
  .project({
    'book_id.title': true,
    'book_id.author': true,
    quantity: true
  })
  .end()
```

上述查询会返回如下结果，可以看到书籍信息被嵌入到order表的book_id字段下，成为子节点。同时根据where条件设置，只返回书名为三国演义的订单记录。
The above query will return the following results. You can see that the book information is embedded in the book_id field of the order table and becomes a child node. At the same time, according to the where condition setting, only order records with the title of Romance of the Three Kingdoms are returned.

```js
{
	"code": "",
	"message": "",
	"data": [{
		"_id": "b8df3bd65f8f0d06018fdc250a5688bb",
		"book_id": [{
			"_id": "3",
			"author": "罗贯中",
			"title": "三国演义"
		}],
		"quantity": 555
	}, {
		"_id": "b8df3bd65f8f0d06018fdc2315af05ec",
		"book_id": [{
			"_id": "3",
			"author": "罗贯中",
			"title": "三国演义"
		}],
		"quantity": 333
	}]
}

```

二维关系型数据库做不到这种设计。`jql`充分利用了json文档型数据库的特点，动态嵌套数据，实现了这个简化的联表查询方案。
A two-dimensional relational database cannot do this design. `jql` makes full use of the characteristics of json document database and dynamically nests data to realize this simplified joint table query scheme.

不止是2个表，3个、4个表也可以通过这种方式查询，多表场景下只能使用副表与主表之间的关联关系（foreignKey），不可使用副表与副表之间的关联关系。
Not only 2 tables, but 3 and 4 tables can also be queried in this way. In the multi-table scenario, only the association relationship (foreignKey) between the secondary table and the primary table can be used, and the relationship between the secondary table and the secondary table cannot be used. association relationship.

不止js，`<unicloud-db>`组件也支持所有`jql`功能，包括联表查询。
Not only js, the `<unicloud-db>` component also supports all `jql` functions, including join table query.

在前端页面调试JQL联表查询且不过滤字段时会受权限影响，导致调试比较困难。可以通过HBuilderX提供的[JQL数据库管理](uniCloud/jql-runner.md)功能方便的查看联表查询时的虚拟联表结构。
When debugging a JQL linked table query on the front-end page without filtering fields, it will be affected by permissions, which makes debugging difficult. You can easily view the virtual joint table structure during joint table query through the [JQL database management](uniCloud/jql-runner.md) function provided by HBuilderX.

如上述查询可以直接在`JQL文件`中执行以下代码查看完整的返回字段
For the above query, you can directly execute the following code in the `JQL file` to view the complete returned fields

```js
db.collection('order,book').get()
```

**注意**
**Notice**

- 生成联表查询虚拟联表后关联字段会被替换成被关联表的内容，因此不可在生成虚拟联表后的where内使用关联字段作为条件。举个例子，在上面的示例中，`where({book_id:"1"})`是无法筛选出正确结果的，但是可以使用`where({'book_id._id':"1"})`
- After generating a linked table and querying a virtual linked table, the associated field will be replaced with the content of the associated table. Therefore, the associated field cannot be used as a condition in the where after the virtual linked table is generated. For example, in the above example, `where({book_id:"1"})` cannot filter out the correct results, but you can use `where({'book_id._id':"1"})`
- 上述示例中如果order表的`book_id`字段是数组形式存放多个book_id，也跟上述写法一致，JQL会自动根据字段类型进行联表查询
- In the above example, if the `book_id` field of the order table stores multiple book_ids in the form of an array, which is also consistent with the above writing, JQL will automatically perform a joint table query according to the field type
- 各个表的_id字段会默认带上，即使没有指定返回
- The _id field of each table will be included by default, even if it is not specified to return

#### 临时表联表查询@lookup-with-temp
#### Temporary table join table query @lookup-with-temp

> 新增于`HBuilderX 3.2.6`
> Added in `HBuilderX 3.2.6`

在此之前JQL联表查询只能直接使用虚拟联表，而不能先对主表、副表过滤再生成虚拟联表。由于生成虚拟联表时需要整个主表和副表进行联表，在数据量大的情况下性能会很差。
Prior to this, JQL join table queries could only use virtual join tables directly, instead of filtering the main table and secondary table before generating virtual join tables. Since the entire primary table and the secondary table need to be joined when generating a virtual join table, the performance will be poor in the case of a large amount of data.

使用临时表进行联表查询，可以先对主表或者副表进行过滤，然后在处理后的临时表的基础上生成虚拟联表。
When using a temporary table for join table query, you can filter the main table or the auxiliary table first, and then generate a virtual join table based on the processed temporary table.

仍以上面article、comment两个表为例
Still take the above two tables of article and comment as an example

获取article_id为'1'的文章及其评论的数据库操作，在直接联表查询和使用临时表联表查询时写法分别如下
The database operations for obtaining articles whose article_id is '1' and their comments are written as follows in direct join table query and when using temporary table join table query

```js
// 直接使用虚拟联表查询
// Directly use virtual join table query
const res = await db.collection('article,comment')
.where('article_id._value=="1"')
.get()

// 先过滤article表，再获取虚拟联表联表获取评论
// Filter the article table first, then get the virtual joint table to get the comments
const article = db.collection('article').where('article_id=="1"').getTemp() // 注意是getTemp不是get
const res = await db.collection(article, 'comment').get()
```

直接使用虚拟联表联表查询，在第一步生成虚拟联表时会以主表所有数据和副表进行联表查询，如果主表数据量很大，这一步会浪费相当多的时间。先过滤主表则没有这个问题，过滤之后仅有一条数据和副表进行联表查询。
Directly use the virtual joint table to query the joint table. When the virtual joint table is generated in the first step, the joint table query will be performed with all the data of the main table and the auxiliary table. If the amount of data in the main table is large, this step will waste a lot of time. Filtering the main table first does not have this problem. After filtering, there is only one piece of data and the auxiliary table for joint table query.

**临时表内可以使用如下方法**
**The following methods can be used in the temporary table**

> 方法调用必须严格按照顺序，比如field不能放在where之前
> Method calls must be in strict order, such as field cannot be placed before where

```js
where
field // 关于field的使用限制见下方说明
orderBy
skip
limit
```

  ```js
  const article = db.collection('article').where('article_id=="1"').field('title').getTemp() // 此处过滤article表，仅保留title字段。会导致下一步查询时找不到关联关系而查询失败
  const res = await db.collection(article, 'comment').get()
  ```

**组合出来的虚拟联表查询时可以使用的方法**
**Methods that can be used when querying the combined virtual table**

> 方法调用必须严格按照顺序，比如foreignKey不能放在where之后
> Method calls must be in strict order, such as foreignKey cannot be placed after where

```js
foreignKey // foreignKey自 HBuilderX 3.3.7版本支持
where
field // 关于field的使用限制见下方说明
groupBy // HBuilderX 3.4.0起支持
groupField // HBuilderX 3.4.0起支持
distinct // HBuilderX 3.4.0起支持
orderBy
skip
limit
```

一般情况下不需要再对虚拟联表额外处理，因为数据在临时表内已经进行了过滤排序等操作。以下代码仅供演示，并无实际意义
Under normal circumstances, no additional processing is required for the virtual join table, because the data has been filtered and sorted in the temporary table. The following code is for demonstration only and has no practical significance

```js
const article = db.collection('article').getTemp()
const comment = db.collection('comment').getTemp()
const res = await db.collection(article, comment).orderBy('title desc').get() // 按照title倒序排列
```

**field使用限制**
**field usage restrictions**

- `HBuilderX 3.3.7`之前 field 内仅可以进行字段过滤，不可对字段重命名、进行运算，`field('name as value')`、`field('add(score1, score2) as totalScore')`都是不支持的用法
- Before `HBuilderX 3.3.7`, only field filtering can be performed in fields, and fields cannot be renamed or operated on, `field('name as value')`, `field('add(score1, score2) as totalScore') ` are all unsupported usages
- `HBuilderX 3.3.7`及以上版本支持对字段重命名或运算
- `HBuilderX 3.3.7` and above supports renaming or operations on fields
- 进行联表查询时仅能使用临时表内已经过滤的字段间的关联关系，例如上面article、comment的查询，如果换成以下写法就无法联表查询
- Only the association relationship between the filtered fields in the temporary table can be used for join table query, such as the query of article and comment above.
- 不建议在虚拟联表内再对副表字段重命名或者运算，如果有此类需求应在临时表内进行，会出现预期之外的结果，**为兼容旧版此用法仅输出警告不会抛出错误**
- It is not recommended to rename or operate the sub-table fields in the virtual join table. If there is such a requirement, it should be performed in the temporary table, and unexpected results will occur. **For compatibility with the old version, this usage only outputs a warning and does not throws an error**

**权限校验**
**Permission verification**

要求组成虚拟联表的各个临时表都要满足权限限制，即权限校验不会计算组合成虚拟联表之后使用的where、field
It is required that each temporary table that forms a virtual join table must meet the permission restrictions, that is, the permission check will not calculate the where and field used after combining into a virtual join table.

以下为一个订单表（order）和书籍表（book）的schema示例
The following is an example schema of an order table (order) and a book table (book)

```js
// order schema
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": "doc.uid==auth.uid",
    "create": false,
    "update": false,
    "delete": false
  },
  "properties": {
    "id": { // 订单id
      "bsonType": "string"
    },
    "book_id": { // 书籍id
      "bsonType": "string"
    },
    "uid": { // 用户id
      "bsonType": "string"
    }
  }
}

// book schema
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": true,
    "create": false,
    "update": false,
    "delete": false
  },
  "properties": {
    "id": { // 书籍id
      "bsonType": "string"
    },
    "name": { // 书籍名称
      "bsonType": "string"
    }
  }
}
```

如果先对主表进行过滤`where('uid==$cloudEnv_uid')`，则能满足权限限制（`order表的"doc.uid==auth.uid"`）
If the main table is first filtered `where('uid==$cloudEnv_uid')`, the permission restrictions can be satisfied ("doc.uid==auth.uid"` of the `order table')

```js
const order = db.collection('order')
.where('uid==$cloudEnv_uid') // 先过滤order表内满足条件的部分
.getTemp()

const res = await db.collection(order, 'book').get() // 可以通过权限校验
```

如果不对主表过滤，而是对虚拟联表（联表结果）进行过滤，则无法满足权限限制（`order表的"doc.uid==auth.uid"`）
If you do not filter the main table, but filter the virtual join table (join table result), the permission restriction cannot be satisfied ("doc.uid==auth.uid"` of the order table)

```js
const order = db.collection('order').getTemp()

const res = await db.collection(order, 'book').where('uid==$cloudEnv_uid').get() // 对虚拟联表过滤，无法通过权限校验
```

#### 设置字段别名@lookup-field-alias
#### Set field alias @lookup-field-alias

联表查询时也可以在field内对字段进行重命名，写法和简单查询时别名写法类似，`原字段名 as 新字段名`即可。[简单查询时的字段别名](uniCloud/jql.md?id=alias)
You can also rename the field in the field when querying the linked table. The writing method is similar to the alias writing method for simple query, `original field name as new field name`. [Field alias for simple query](uniCloud/jql.md?id=alias)

仍以上述order、book两个表为例，以下查询将联表查询时order表的quantity字段重命名为order_quantity，将book表的title重命名为book_title、author重命名为book_author
Still taking the above two tables, order and book as an example, the following query renames the quantity field of the order table to order_quantity, renames the title of the book table to book_title, and renames the author to book_author when querying with tables

```js
// 客户端联表查询
// Client join table query
const db = uniCloud.database()

const order = db.collection('order').field('book_id,quantity').getTemp()
const book = db.collection('book').field('_id,title as book_title,author as book_author').getTemp()
db.collection(order, book)
  .where('book_id.book_title == "三国演义"') // 如果field内对副表字段title进行了重命名，where方法内则需要使用重命名之后的字段名
  .get()
  .then(res => {
    console.log(res);
  }).catch(err => {
    console.error(err)
  })
```

查询结果如下
The query results are as follows

```js
{
	"code": "",
	"message": "",
	"data": [{
		"_id": "b8df3bd65f8f0d06018fdc250a5688bb",
		"book_id": [{
			"book_author": "罗贯中",
			"book_title": "三国演义"
		}],
		"order_quantity": 555
	}, {
		"_id": "b8df3bd65f8f0d06018fdc2315af05ec",
		"book_id": [{
			"book_author": "罗贯中",
			"book_title": "三国演义"
		}],
		"order_quantity": 333
	}]
}
```

#### 手动指定使用的foreignKey@lookup-foreign-key
#### Manually specify the used foreignKey@lookup-foreign-key

如果存在多个foreignKey且只希望部分生效，可以使用foreignKey来指定要使用的foreignKey
If there are multiple foreignKeys and you only want some of them to take effect, you can use foreignKey to specify the foreignKey to use

> 2021年4月28日10点前此方法仅用于兼容JQL联表查询策略调整前后的写法，在此日期后更新的clientDB（上传schema、uni-id均会触发更新）才会有指定foreignKey的功能，关于此次调整请参考：[联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
> Before 10:00 on April 28, 2021, this method is only used to be compatible with the writing method before and after the adjustment of the JQL join table query strategy. The clientDB updated after this date (uploading schema and uni-id will trigger the update) will have the specified foreignKey For this adjustment, please refer to: [Adjustment of Linked Table Query Policy](https://ask.dcloud.net.cn/article/38966)


例：
example:

数据库内schema及数据如下：
The schema and data in the database are as follows:

```js
// comment - 评论表
// comment - the comment table

// schema
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": true,
    "create": false,
    "update": false,
    "delete": false
  },
  "properties": {
    "comment_id": {
      "bsonType": "string"
    },
    "content": {
      "bsonType": "string"
    },
    "article": {
      "bsonType": "string",
      "foreignKey": "article.article_id"
    },
    "sender": {
      "bsonType": "string",
      "foreignKey": "user.uid"
    },
    "receiver": {
      "bsonType": "string",
      "foreignKey": "user.uid"
    }
  }
}

// data
{
  "comment_id": "1-1",
  "content": "comment1-1",
  "article": "1",
  "sender": "1",
  "receiver": "2"
}
{
  "comment_id": "1-2",
  "content": "comment1-2",
  "article": "1",
  "sender": "2",
  "receiver": "1"
}
{
  "comment_id": "2-1",
  "content": "comment2-1",
  "article": "2",
  "sender": "1",
  "receiver": "2"
}
{
  "comment_id": "2-2",
  "content": "comment2-2",
  "article": "2",
  "sender": "2",
  "receiver": "1"
}
```

```js
// article - 文章表
// article - article table

// schema
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": true,
    "create": false,
    "update": false,
    "delete": false
  },
  "properties": {
    "article_id": {
      "bsonType": "string"
    },
    "title": {
      "bsonType": "string"
    },
    "content": {
      "bsonType": "string"
    },
    "author": {
      "bsonType": "string",
      "foreignKey": "user.uid"
    }
  }
}

// data
{
  "article_id": "1",
  "title": "title1",
  "content": "content1",
  "author": "1"
}
{
  "article_id": "2",
  "title": "title2",
  "content": "content2",
  "author": "1"
}
{
  "article_id": "3",
  "title": "title3",
  "content": "content3",
  "author": "2"
}
```

```js
const comment = db.collection('comment').where('comment_id == "1-1"').getTemp()
const user = db.collection('user').field('uid,name').getTemp()
db.collection(comment, user)
.foreignKey('comment.receiver') // 仅使用comment表内receiver字段下的foreignKey进行主表和副表之间的关联
.get()
```

**注意**
**Notice**

- `HBuilderX 3.3.7`及以上版本支持使用getTemp的虚拟联表内使用foreignKey方法
- `HBuilderX 3.3.7` and above supports the use of foreignKey method in the virtual join table using getTemp

#### 副表foreignKey联查@st-foreign-key
#### Sub-table foreignKey joint query @st-foreign-key

`2021年4月28日`之前的JQL只支持主表的foreignKey，把副表内容嵌入主表的foreignKey字段下面。不支持处理副本的foreignKey。
JQL before `April 28, 2021` only supports the foreignKey of the main table, and the content of the sub-table is embedded under the foreignKey field of the main table. Handling duplicate foreignKeys is not supported.

`2021年4月28日`调整后，新版支持副表foreignKey联查。副表的数据以数组的方式嵌入到主表中作为一个虚拟联表使用。
After the adjustment of `April 28, 2021`, the new version supports the foreignKey joint search of the secondary table. The data of the sub-table is embedded in the main table in the form of an array and used as a virtual joint table.

**关联查询后的数据结构如下：**
**The data structure after the associated query is as follows:**

> 通过HBuilderX提供的[JQL数据库管理](uniCloud/jql-runner.md)功能方便的查看联表查询时返回数据的结构
> Through the [JQL database management](uniCloud/jql-runner.md) function provided by HBuilderX, it is convenient to view the structure of the returned data when querying the joint table

主表某字段foreignKey指向副表时
When the foreignKey of a field in the main table points to the sub-table

```js
{
  "主表字段名1": "xxx",
  "主表字段名2": "xxx",
  "主表内foreignKey指向副表的字段名": [{
    "副表字段名1": "xxx",
    "副表字段名2": "xxx",
  }]
}
```

副表某字段foreignKey指向主表时
When the foreignKey of a field in the secondary table points to the main table

```js
{
  "主表字段名1": "xxx",
  "主表字段名2": "xxx",
  "副表foreignKey指向的主表字段名": { 
    "副表1表名": [{ // 一个主表字段可能对应多个副表字段的foreignKey
      "副表1字段名1": "xxx",
      "副表1字段名2": "xxx",
    }],
    "副表2表名": [{ // 一个主表字段可能对应多个副表字段的foreignKey
      "副表2字段名1": "xxx",
      "副表2字段名2": "xxx",
    }],
    "_value": "主表字段原始值" // 使用副表foreignKey查询时会在关联的主表字段内以_value存储该字段的原始值，新增于HBuilderX 3.1.16
  }
}
```

以下查询使用comment表的article字段对应的foreignKey进行关联查询
The following query uses the foreignKey corresponding to the article field of the comment table to perform an associated query

```js
const article = db.collection('article').where('article_id == "1"').getTemp()
const comment = db.collection('comment').getTemp()
db.collection(article,comment)
.field('content,article_id')
.get()
```

查询结果如下：
The query results are as follows:

```js
[{
  "content": "content1",
  "article_id": {
    "comment": [{ // 使用副表foreignKey查询时此处会自动插入一层副表表名
      "comment_id": "1-1",
      "content": "comment1-1",
      "article": "1",
      "sender": "1",
      "receiver": "2"
    },
    {
      "comment_id": "1-2",
      "content": "comment1-2",
      "article": "1",
      "sender": "2",
      "receiver": "1"
    }],
    "_value": "1"
  }
}]
```

如需对上述查询的副表字段进行过滤，需要注意多插入的一层副表表名
If you want to filter the sub-table fields of the above query, you need to pay attention to the name of the additional sub-table table inserted.

```js
// 过滤副表字段
// filter side table fields
const article = db.collection('article').where('article_id == "1"').getTemp()
const comment = db.collection('comment').field('article,content').getTemp() // 如果有field方法，field内需包含关联字段以建立关联关系
db.collection('article,comment').get()

// 查询结果如下
// The query result is as follows
[{
  "content": "content1",
  "article_id": {
    "comment": [{ // 使用副表foreignKey联查时此处会自动插入一层副表表名
	  "article": "1",
      "content": "comment1-1"
    },
    {
	  "article": "1",
      "content": "comment1-2"
    }],
    "_value": "1"
  }
}]

```

副表内的字段也可以使用`as`进行重命名，例如上述查询中如果希望将副表的content重命名为value可以使用如下写法
The fields in the sub-table can also be renamed using `as`. For example, in the above query, if you want to rename the content of the sub-table to value, you can use the following writing method

> HBuilderX 3.3.7及以上版本支持getTemp内使用as
> HBuilderX 3.3.7 and above supports the use of as inside getTemp

```js
// 重命名副表字段
// rename side table fields
const article = db.collection('article').where('article_id == "1"').getTemp()
const comment = db.collection('comment').field('article,content as value').getTemp() // 如果有field方法，field内需包含关联字段以建立关联关系
db.collection(article,comment).get()

// 查询结果如下
// The query result is as follows
[{
  "content": "content1",
  "article_id": {
    "comment": [{ // 使用副本foreignKey联查时此处会自动插入一层副表表名
	  "article": "1",
      "value": "comment1-1"
    },
    {
	  "article": "1",
      "value": "comment1-2"
    }]
  }
}]
```

### 查询记录过滤where条件@where
### Query record filter where condition @where

> 代码块`dbget`
> code block `dbget`

jql对查询条件进行了简化，开发者可以使用`where('a==1||b==2')`来表示字段`a等于1或字段b等于2`。如果不使用jql语法，上述条件需要写成下面这种形式
jql simplifies query conditions, and developers can use `where('a==1||b==2')` to indicate that field `a is equal to 1 or field b is equal to 2`. If you do not use jql syntax, the above conditions need to be written in the following form

```js
const db = uniCloud.database()
const dbCmd = db.command
const res = await db.collection('test')
  .where(
    dbCmd.or({
      a:1
    },{
      b:2
    })
  )
  .get()
```

两种用法性能上并没有太大差距，可以视场景选择合适的写法。
There is not much difference in the performance of the two usages, and you can choose the appropriate writing method according to the scene.

jql支持两种类型的查询条件，以下内容有助于理解两种的区别，实际书写的时候无需过于关心是简单查询条件还是复杂查询条件，**JQL会自动进行选择**
jql supports two types of query conditions. The following content is helpful to understand the difference between the two. When writing, you don't need to care too much about simple query conditions or complex query conditions. **JQL will automatically select**

where内还支持使用云端环境变量，详情参考：[云端环境变量](uniCloud/jql.md?id=variable)
where also supports the use of cloud environment variables. For details, please refer to: [Cloud environment variables](uniCloud/jql.md?id=variable)

在 unicloud-db 组件中使用where查询 [参考](uniCloud/unicloud-db.md?id=where)

#### 简单查询条件@simple-where
#### Simple query condition @simple-where

简单查询条件包括以下几种，对应着db.command下的各种[操作符](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=dbcmd)以及不使用操作符的查询如`where({a:1})`。
Simple query conditions include the following, corresponding to various [operators] under db.command (https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=dbcmd) and those that do not use operators Queries such as `where({a:1})`.

|运算符			|说明			|示例								|示例解释(集合查询)																		|
|:-:			|:-:			|:-:								|:-:																					|
|==				|等于			|name == 'abc'						|查询name属性为abc的记录，左侧为数据库字段												|
|!=				|不等于			|name != 'abc'						|查询name属性不为abc的记录，左侧为数据库字段											|
|>				|大于			|age>10								|查询条件的 age 属性大于 10，左侧为数据库字段											|
|>=				|大于等于		|age>=10							|查询条件的 age 属性大于等于 10，左侧为数据库字段										|
|<				|小于			|age<10								|查询条件的 age 属性小于 10，左侧为数据库字段											|
|<=				|小于等于		|age<=10							|查询条件的 age 属性小于等于 10，左侧为数据库字段										|
|in				|存在在数组中	|status in ['a','b']	|查询条件的 status 是['a','b']中的一个，左侧为数据库字段								|
|!(xx in [])				|在数组中不存在				|!(status in ['a','b'])				|查询条件的 status 不是['a','b']中的任何一个											|
|&&				|与				|uid == auth.uid && age > 10		|查询记录uid属性 为 当前用户uid 并且查询条件的 age 属性大于 10							|
|&#124;&#124;	|或				|uid == auth.uid&#124;&#124;age>10	|查询记录uid属性 为 当前用户uid 或者查询条件的 age 属性大于 10							|
|test			|正则校验		|/abc/.test(content)				|查询 content字段内包含 abc 的记录。可用于替代sql中的like。还可以写更多正则实现更复杂的功能	|

这里的test方法比较强大，格式为：`正则规则.test(fieldname)`。

具体到这个正则 `/abc/.test(content)`，类似于sql中的`content like '%abc%'`，即查询所有字段content包含abc的数据记录。

**注意**

- 不支持非操作
- 编写查询条件时，除test外，均为运算符左侧为数据库字段，右侧为常量


简单查询条件内要求二元运算符两侧不可均为数据库内的字段
Simple query conditions require that both sides of the binary operator must not be fields in the database

上述写法的查询语句可以在权限校验阶段与schema内配置的permission进行一次对比校验，如果校验通过则不会再查库进行权限校验。
The query statement written above can be compared and verified with the permission configured in the schema in the permission verification stage. If the verification is passed, the database will not be checked for permission verification.

#### 复杂查询条件@complex-where
#### Complex query conditions @complex-where

> HBuilderX 3.1.0起支持
> Supported since HBuilderX 3.1.0

复杂查询内可以使用[数据库运算方法](uniCloud/jql-operator-example.md)。需要注意的是，与云函数内使用数据库运算方法不同jql内对数据库运算方法的用法进行了简化。

例：数据表test内有以下数据
Example: The data table test has the following data

```js
{
  "_id": "1",
  "name": "n1",
  "chinese": 60, // 语文
  "math": 60 // 数学
}
{
  "_id": "2",
  "name": "n2",
  "chinese": 60,
  "math": 70
}
{
  "_id": "3",
  "name": "n3",
  "chinese": 100,
  "math": 90
}
```

使用如下写法可以筛选语文数学总分大于150的数据
Use the following writing method to filter data with a total score of Chinese and mathematics greater than 150

```js
const db = uniCloud.database()
const res = await db.collection('test')
.where('add(chinese,math) > 150')
.get()

// 返回结果如下
// The return result is as follows
res = {
  result: {
    data: [{
      "_id": "3",
      "name": "n3",
      "chinese": 100,
      "math": 90
    }]
  }
}
```

另外与简单查询条件相比，复杂查询条件可以比较数据库内的两个字段，简单查询条件则要求二元运算符两侧不可均为数据库内的字段，**JQL会自动判断要使用简单查询还是复杂查询条件**。
In addition, compared with simple query conditions, complex query conditions can compare two fields in the database, while simple query conditions require that both sides of the binary operator cannot be both fields in the database. **JQL will automatically determine whether to use simple query or Complex query conditions**.

例：仍以上面的数据为例，以下查询语句可以查询数学得分比语文高的记录
Example: Still taking the above data as an example, the following query statement can query records with higher scores in mathematics than in Chinese

```js
const db = uniCloud.database()
const res = await db.collection('test')
.where('math > chinese')
.get()

// 返回结果如下
// The return result is as follows
res = {
  result: {
    data: [{
      "_id": "2",
      "name": "n2",
      "chinese": 60,
      "math": 70
    }]
  }
}
```

在查询条件时也可以使用`new Date()`来获取一个日期对象。
You can also use `new Date()` to get a date object when querying conditions.

例：数据表test内有以下数据
Example: The data table test has the following data

```js
{
  "_id": "1",
  "title": "t1",
  "deadline": 1611998723948
}
{
  "_id": "2",
  "title": "t2",
  "deadline": 1512312311231
}
```

使用下面的写法可以查询deadline小于当前时间（云函数内的时间）的字段
Use the following notation to query fields whose deadline is less than the current time (time in the cloud function)

```js
const db = uniCloud.database()
const res = await db.collection('test')
.where('deadline < new Date().getTime()') // 暂不支持使用Date.now()，后续会支持
.get()
```

**注意**
**Notice**

- 使用了复杂查询条件时不可以使用正则查询
- Regular query cannot be used when complex query conditions are used

### 查询列表分页@pagination
### Query list pagination @pagination

可以通过skip+limit来进行分页查询
Paging query can be done by skip+limit

```js
const db = uniCloud.database()
db.collection('book')
  .where('status == "onsale"')
  .skip(20) // 跳过前20条
  .limit(20) // 获取20条
  .get()
  
// 上述用法对应的分页条件为：每页20条取第2页
// The paging condition corresponding to the above usage is: take the second page of 20 entries per page
```

**注意**
**Notice**

- limit不设置的情况下默认返回100条数据；设置limit有最大值，腾讯云限制为最大1000条，阿里云限制为最大500条。
- If the limit is not set, 100 pieces of data are returned by default; if the limit is set, there is a maximum value, which is limited to a maximum of 1,000 for Tencent Cloud and a maximum of 500 for Alibaba Cloud.

`<unicloud-db>`组件提供了更简单的分页方法，包括两种模式：
The `<unicloud-db>` component provides an easier way to paginate, including two modes:

1. 滚动到底加载下一页（append模式）
1. Scroll to the end to load the next page (append mode)
2. 点击页码按钮切换不同页（replace模式）
2. Click the page number button to switch between different pages (replace mode)

详见：[https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=page](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=page)
For details, see: [https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=page](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=page)


### 字段过滤field@field
### Field filtering field@field

查询时可以使用field方法指定返回字段。不使用field方法时会返回所有字段
When querying, you can use the field method to specify the return field. All fields are returned when the field method is not used

field可以指定字符串，也可以指定一个对象。
field can specify a string or an object.

field中可以使用所有[数据库运算方法](uniCloud/jql-operator-example.md)

- 字符串写法：列出字段名称，多个字段以半角逗号做分隔符。比如`db.collection('book').field("title,author")`，查询结果会返回`_id`、`title`、`author`3个字段的数据。字符串写法，`_id`是一定会返回的
- String writing: List field names, and multiple fields are separated by commas. For example, `db.collection('book').field("title,author")`, the query result will return the data of `_id`, `title`, `author` fields. String writing, `_id` will definitely return

**复杂嵌套json数据过滤**
** Complex nested json data filtering**

如果数据库里的数据结构是嵌套json，比如book表有个价格字段，包括普通价格和vip用户价格，数据如下：
If the data structure in the database is nested json, for example, the book table has a price field, including ordinary price and VIP user price, the data is as follows:

```json
{
  "_id": "1",
  "title": "西游记",
  "author": "吴承恩",
  "price":{
	  "normal":10,
	  "vip":8
  }
}
```

那么使用`db.collection('book').field("price.vip").get()`，就可以只返回vip价格，而不返回普通价格。查询结果如下：
Then use `db.collection('book').field("price.vip").get()`, you can only return the vip price, not the normal price. The query results are as follows:

```json
{
  "_id": "1",
  "price":{
	  "vip":8
  }
}
```

对于联表查询，副表的数据嵌入到了主表的关联字段下面，此时在filed里通过{}来定义副表字段。比如之前联表查询章节举过的例子，book表和order表联表查询：
For joint table query, the data of the sub-table is embedded under the associated fields of the main table. At this time, the sub-table fields are defined by {} in the filed. For example, in the example given in the previous section on joint table query, the book table and the order table joint table query:
```js
// 联表查询
// join table query
db.collection('order,book') // 注意collection方法内需要传入所有用到的表名，用逗号分隔，主表需要放在第一位
  .field('book_id{title,author},quantity') // 这里联表查询book表返回book表内的title、book表内的author、order表内的quantity
  .get()
```

**不使用`{}`过滤副表字段**
**Do not use `{}` to filter secondary table fields**

> 此写法于2021年4月28日起支持
> This notation is supported from April 28, 2021

field方法内可以不使用`{}`进行副表字段过滤，以上面示例为例可以写为
In the field method, `{}` can not be used for sub-table field filtering. Taking the above example as an example, it can be written as

```js
const db = uniCloud.database()
db.collection('order,book')
  .where('book_id.title == "三国演义"')
  .field('book_id.title,book_id.author,quantity as order_quantity') // book_id.title、book_id.author为副表字段，使用别名时效果和上一个示例不同，请见下方说明
  .orderBy('order_quantity desc') // 按照order_quantity降序排列
  .get()
  .then(res => {
    console.log(res);
  }).catch(err => {
    console.error(err)
  })
```

### 字段别名as@alias
### Field aliases as@alias

自`2020-11-20`起JQL支持字段别名，主要用于在前端需要的字段名和数据库字段名称不一致的情况下对字段进行重命名。
Since `2020-11-20`, JQL supports field aliases, which are mainly used to rename fields when the field names required by the front end are inconsistent with the database field names.

用法形如：`author as book_author`，意思是将数据库的author字段重命名为book_author。
The usage is like: `author as book_author`, which means to rename the author field of the database to book_author.

仍以上面的order表和book表为例
Still take the above order table and book table as an example

```js
// 客户端联表查询
// Client join table query
const db = uniCloud.database()
db.collection('book')
  .where('title == "三国演义"')
  .field('title as book_title,author as book_author')
  .get()
  .then(res => {
    console.log(res);
  }).catch(err => {
    console.error(err)
  })
```

上述查询返回结果如下
The above query returns the following results

```js
{
	"code": "",
	"message": "",
	"data": [{
      "_id": "3",
			"book_author": "罗贯中",
			"book_title": "三国演义"
		}]
}
```

> _id是比较特殊的字段，如果对_id设置别名会同时返回_id和设置的别名字段
> _id is a special field. If an alias is set to _id, both _id and the set alias field will be returned

例：
example:

```js
// 客户端联表查询
// Client join table query
const db = uniCloud.database()
db.collection('book')
  .where('title == "三国演义"')
  .field('_id as book_id,title as book_title,author as book_author')
  .get()
  .then(res => {
    console.log(res);
  }).catch(err => {
    console.error(err)
  })
```

上述查询返回结果如下
The above query returns the following results

```js
{
	"code": "",
	"message": "",
	"data": [{
      "_id": "3",
      "book_id": "3",
			"book_author": "罗贯中",
			"book_title": "三国演义"
		}]
}
```

#### 联表查询时字段别名
#### Field aliases when querying with tables

联表查询时字段别名写法和简单查询类似
The field alias is written in a similar way to a simple query in a joint table query

```js
// 客户端联表查询
// Client join table query
const db = uniCloud.database()
db.collection('order,book')
  .where('book_id.title == "三国演义"')
  .field('book_id{title as book_title,author as book_author},quantity as order_quantity') // 这里联表查询book表返回book表内的title、book表内的author、order表内的quantity，并将title重命名为book_title，author重命名为book_author，quantity重命名为order_quantity
  .orderBy('order_quantity desc') // 按照order_quantity降序排列
  .get()
  .then(res => {
    console.log(res);
  }).catch(err => {
    console.error(err)
  })
```

上述请求返回的res如下
The res returned by the above request is as follows

```js
{
	"code": "",
	"message": "",
	"data": [{
		"_id": "b8df3bd65f8f0d06018fdc250a5688bb",
		"book_id": [{
			"book_author": "罗贯中",
			"book_title": "三国演义"
		}],
		"order_quantity": 555
	}, {
		"_id": "b8df3bd65f8f0d06018fdc2315af05ec",
		"book_id": [{
			"book_author": "罗贯中",
			"book_title": "三国演义"
		}],
		"order_quantity": 333
	}]
}
```

副表字段使用别名需要注意，如果写成`.field('book_id.title as book_id.book_title,book_id.author,quantity as order_quantity')` book_title将会是由book_id下每一项的title组成的数组，这点和mongoDB内数组表现一致
It should be noted that the alias of the sub-table field is used. If it is written as `.field('book_id.title as book_id.book_title,book_id.author,quantity as order_quantity')` book_title will be an array composed of the title of each item under book_id. Points behave the same as arrays in mongoDB

```js
const db = uniCloud.database()
db.collection('order,book')
  .where('book_id.title == "三国演义"')
  .field('book_id.title as book_title,book_id.author as book_author,quantity as order_quantity') // book_id.title、book_id.author为副表字段，使用别名时效果和上一个示例不同，请见下方说明
  .orderBy('order_quantity desc') // 按照order_quantity降序排列
  .get()
  .then(res => {
    console.log(res);
  }).catch(err => {
    console.error(err)
  })
```

返回结果如下
The return result is as follows

```js
{
	"code": "",
	"message": "",
	"data": [{
		"_id": "b8df3bd65f8f0d06018fdc250a5688bb",
    book_title: ["三国演义"],
    book_author: ["罗贯中"],
		"order_quantity": 555
	}, {
		"_id": "b8df3bd65f8f0d06018fdc2315af05ec",
    book_title: ["三国演义"],
    book_author: ["罗贯中"],
		"order_quantity": 333
	}]
}
```

**注意**
**Notice**

- as后面的别名，不可以和表schema中已经存在的字段重名
- The alias after as cannot have the same name as the field that already exists in the table schema
- mongoDB查询指令中，上一阶段处理完毕将结果输出到下一阶段。在上面的例子中表现为where中使用的是原名，orderBy中使用的是别名
- In the mongoDB query command, after the previous stage is processed, the result is output to the next stage. In the above example, the original name is used in where, and the alias is used in orderBy
- 目前不支持对联表查询的关联字段使用别名，即上述示例中的book_id不可设置别名
- Currently, it is not supported to use aliases for the associated fields of the linked table query, that is, the book_id in the above example cannot be aliased

### 各种字段运算方法@db-operator
### Various field operation methods @db-operator

自`HBuilderX 3.1.0`起，JQL支持在云端数据库对字段进行一定的操作运算之后再返回，详细可用的方法列表请参考：[数据库运算方法](uniCloud/jql.md?id=aggregate-operator)
Since `HBuilderX 3.1.0`, JQL supports certain operations on fields in the cloud database and then returns. For a detailed list of available methods, please refer to: [Database operation methods](uniCloud/jql.md?id=aggregate-operator )

> 需要注意的是，为方便书写，JQL内将数据库运算方法的用法进行了简化（相对于云函数内使用数据库运算方法而言）。用法请参考上述链接
> It should be noted that, for the convenience of writing, the usage of database operation methods in JQL is simplified (compared to the use of database operation methods in cloud functions). Please refer to the above link for usage

例：数据表class内有以下数据
Example: The data table class has the following data

```js
{
  "_id": "1",
  "grade": 6,
  "class": "A"
}
{
  "_id": "1",
  "grade": 2,
  "class": "A"
}
```

如下写法可以由grade计算得到一个isTopGrade来表示是否为最高年级
The following writing method can be calculated by grade to get an isTopGrade to indicate whether it is the highest grade

```js
const res = await db.collection('class')
.field('class,eq(grade,6) as isTopGrade')
.get()
```

返回结果如下
The return result is as follows

```js
{
  "_id": "1",
  "class": "A",
  "isTopGrade": true
}
{
  "_id": "1",
  "class": "A",
  "isTopGrade": false
}
```

**注意**
**Notice**

- 如果要访问数组的某一项请使用arrayElemAt操作符，形如：`arrayElemAt(arr,1)`
- If you want to access an item of the array, please use the arrayElemAt operator, such as: `arrayElemAt(arr,1)`
- 在进行权限校验时，会以field内访问的所有字段计算权限。上面的例子中会使用表的read权限和grade、class字段的权限，来进行权限校验。
- During permission verification, the permissions will be calculated based on all fields accessed in the field. In the above example, the read permission of the table and the permission of the grade and class fields are used for permission verification.

### 排序orderBy@order-by
### Sort orderBy@order-by

传统的MongoDB的排序参数是json格式，jql支持类sql的字符串格式，书写更为简单。
The traditional sorting parameter of MongoDB is in json format, and jql supports sql-like string format, which is easier to write.

sort方法和orderBy方法内可以传入一个字符串来指定排序规则。
A string can be passed in the sort method and orderBy method to specify the collation.

orderBy允许进行多个字段排序，以逗号分隔。每个字段可以指定 asc(升序)、desc(降序)。默认是升序。
orderBy allows ordering by multiple fields, separated by commas. Each field can specify asc (ascending order), desc (descending order). The default is ascending order.

写在前面的排序字段优先级高于后面。
Sort fields written at the front have higher priority than those at the back.

示例如下：
An example is as follows:

```js
orderBy('quantity asc, create_date desc') //按照quantity字段升序排序，quantity相同时按照create_date降序排序
// asc可以省略，上述代码和以下写法效果一致
// asc can be omitted, the above code has the same effect as the following
orderBy('quantity, create_date desc')

// 注意不要写错成全角逗号
// Be careful not to write a full-width comma by mistake
```

以上面的order表数据为例：
Take the above order table data as an example:

```js
const db = uniCloud.database()
  db.collection('order')
    .orderBy('quantity asc, create_date desc') // 按照quantity字段升序排序，quantity相同时按照create_date降序排序
    .get()
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err)
    })
    
// 上述写法等价于
// The above writing is equivalent to
const db = uniCloud.database()
  db.collection('order')
    .orderBy('quantity','asc')
    .orderBy('create_date','desc')
    .get()
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err)
    })
```

### 限制查询记录的条数limit@limit
### Limit the number of query records limit@limit

使用limit方法，可以查询有限条数的数据记录。
Using the limit method, a limited number of data records can be queried.

比如查询销量top10的书籍，或者查价格最高的一本书。
For example, query the top 10 best-selling books, or find the book with the highest price.

```js
// 这以上面的book表数据为例，查价格最高的一本书
// This takes the above book table data as an example to find the book with the highest price
  db.collection('book')
    .orderBy('price desc')
    .limit(1)
    .get()
```

limit默认值是100，即不设置的情况下，默认返回100条数据。
The default value of limit is 100, that is, if it is not set, 100 pieces of data are returned by default.

limit有最大值，腾讯云限制为最大1000条，阿里云限制为最大500条。
The limit has a maximum value, Tencent Cloud is limited to a maximum of 1000, and Alibaba Cloud is limited to a maximum of 500.

一般情况下不应该给前端一次性返回过多数据，数据库查询也慢、网络返回也慢。可以通过分页的方式分批返回数据。
In general, too much data should not be returned to the front end at one time, the database query is also slow, and the network return is also slow. Data can be returned in batches by paging.

在查询的result里，有一个`affectedDocs`。但affectedDocs和limit略有区别。affectedDocs小于等于limit。
In the result of the query, there is an `affectedDocs`. But affectedDocs and limit are slightly different. affectedDocs is less than or equal to limit.

比如book表里只有2本书，limit虽然设了10，但查询结果只能返回2条记录，affectedDocs为2。
For example, there are only 2 books in the book table. Although the limit is set to 10, the query result can only return 2 records, and affectedDocs is 2.


### 只查一条记录getone@getone
### Check only one record getone@getone

使用`JQL`的API方式时，可以在get方法内传入参数`getOne:true`来返回一条数据。
When using the API method of `JQL`, you can pass the parameter `getOne:true` in the get method to return a piece of data.

getOne其实等价于上一节的limit(1)。
getOne is actually equivalent to limit(1) in the previous section.

一般getOne和orderBy搭配。
Generally, getOne and orderBy are matched.

```js
// 这以上面的book表数据为例
// This takes the above book table data as an example
const db = uniCloud.database()
  db.collection('book')
    .where({
      title: '西游记'
    })
    .get({
      getOne:true
    })
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err)
    })
```

返回结果为
The return result is

```js
{
	"code": "",
	"message": "",
	"data": {
    "_id": "1",
    "title": "西游记",
    "author": "吴承恩"
  }
}
```

如果使用uniCloud-db组件，则在组件的属性上增加一个 getone。[详见](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
If using the uniCloud-db component, add a getone to the component's property. [See details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)

### 统计数量getcount@getcount
### Statistics getcount@getcount

统计符合查询条件的记录数，是数据库层面的概念。
Counting the number of records that meet the query conditions is a concept at the database level.

在查询的result里，有一个`affectedDocs`。但affectedDocs和count计数不是一回事。
In the result of the query, there is an `affectedDocs`. But affectedDocs and count are not the same thing.

- affectedDocs表示从服务器返回给前端的数据条数。默认100条，可通过limit方法调整。
- affectedDocs indicates the number of data pieces returned from the server to the front end. The default is 100, which can be adjusted by the limit method.
- count则是指符合查询条件的记录总数，至于这些记录是否返回给前端，和count无关。
- count refers to the total number of records that meet the query conditions. Whether these records are returned to the front end has nothing to do with count.

例如book表里有110本书，不写任何where、limit等条件，但写了count方法或getCount参数，那么result会变成如下：
For example, there are 110 books in the book table, without writing any where, limit and other conditions, but writing the count method or getCount parameter, then the result will become as follows:

```json
result:{
	affectedDocs: 100,
	code: "",
	count: 110,
	data:[...]
}
```

也就是数据库查到了110条记录，通过count返回；而网络侧只给前端返回了100条数据，通过affectedDocs表示。
That is, the database has found 110 records, which are returned by count; while the network side only returns 100 records to the front end, which is represented by affectedDocs.

count计数又有2种场景：
There are two scenarios for count count:
- 单纯统计数量，不查询数据。使用count()方法
- Simply count the number, do not query the data. Use count() method
- 查询记录返回详情，同时返回符合查询条件的数量、使用getCount参数
- Query records return details, and return the number that meets the query conditions, use the getCount parameter

#### 单纯统计数量，不返回数据明细
#### Simple statistics, no data details are returned

使用count()方法，如`db.collection('order').count()`
Use the count() method like `db.collection('order').count()`

可以继续加where等条件进行数据记录过滤。
You can continue to add where and other conditions to filter data records.

#### 查询记录的同时返回计数
#### Query records while returning count

使用`JQL`的API方式时，可以在get方法内传入参数`getCount:true`来同时返回总数
When using the API method of `JQL`, you can pass the parameter `getCount:true` in the get method to return the total number at the same time

```js
// 这以上面的order表数据为例
// This takes the above order table data as an example
const db = uniCloud.database()
  db.collection('order')
    .get({
      getCount:true
    })
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err)
    })
```

返回结果为
The return result is

```js
{
	"code": "",
	"message": "",
	"data": [{
		"_id": "b8df3bd65f8f0d06018fdc250a5688bb",
		"book": "3",
		"quantity": 555
	}],
	"count": 5
}
```

如果使用uniCloud-db组件，则在组件的属性上增加一个 getcount。[详见](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
If using the uniCloud-db component, add a getcount to the component's property. [See details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)


### 查询树形数据gettree@gettree
### Query tree data gettree@gettree

HBuilderX 3.0.3+起，JQL支持在get方法内传入getTree参数查询树状结构数据。（HBuilderX 3.0.5+ unicloud-db组件开始支持，之前版本只能通过js方式使用）
From HBuilderX 3.0.3+, JQL supports query tree structure data by passing the getTree parameter in the get method. (HBuilderX 3.0.5+ unicloud-db component starts to support, the previous version can only be used by js)

树形数据，在数据库里一般不会按照tree的层次来存储，因为按tree结构通过json对象的方式存储不同层级的数据，不利于对tree上的某个节点单独做增删改查。
Tree data is generally not stored at the tree level in the database, because storing data at different levels in the form of json objects according to the tree structure is not conducive to adding, deleting, modifying and checking a node on the tree alone.

一般存储树形数据，tree上的每个节点都是一条单独的数据表记录，然后通过类似parent_id来表达父子关系。
Generally, tree data is stored, each node on the tree is a separate data table record, and then the parent-child relationship is expressed by similar parent_id.

如部门的数据表，里面有2条数据，一条数据记录是“总部”，`parent_id`为空；另一条数据记录“一级部门A”，`parent_id`为总部的`_id`
For example, the data table of the department contains 2 pieces of data, one data record is "headquarters", `parent_id` is empty; the other data record is "first-level department A", `parent_id` is the `_id` of the headquarters
```json
{
    "_id": "5fe77207974b6900018c6c9c",
    "name": "总部",
    "parent_id": "",
    "status": 0
}
```
```json
{
    "_id": "5fe77232974b6900018c6cb1",
    "name": "一级部门A",
    "parent_id": "5fe77207974b6900018c6c9c",
    "status": 0
}
```

虽然存储格式是分条记录的，但查询反馈到前端的数据仍然需要是树形的。这种转换在过去比较复杂。
Although the storage format is record-by-entry, the data fed back to the front end by the query still needs to be in the form of a tree. This conversion has been more complicated in the past.

JQL提供了一种简单、优雅的方案，在DB Schema里配置parentKey来表达父子关系，然后查询时声明使用Tree查询，就可以直接查出树形数据。
JQL provides a simple and elegant solution. Configure the parentKey in the DB Schema to express the parent-child relationship, and then declare the use of Tree query when querying, and you can directly check the tree data.

department部门表的schema中，将字段`parent_id`的"parentKey"设为"_id"，即指定了数据之间的父子关系，如下：
In the schema of the department table, set the "parentKey" of the field `parent_id` to "_id", which specifies the parent-child relationship between the data, as follows:

```json
{
  "bsonType": "object",
  "required": ["name"],
  "properties": {
    "_id": {
      "description": "ID，系统自动生成"
    },
      "name": {
      "bsonType": "string",
      "description": "名称"
    },
    "parent_id": {
      "bsonType": "string",
      "description": "父id",
      "parentKey": "_id", // 指定父子关系为：如果数据库记录A的_id和数据库记录B的parent_id相等，则A是B的父级。
    },
    "status": {
      "bsonType": "int",
      "description": "部门状态，0-正常、1-禁用"
    }
  }
}
```

parentKey字段将数据表不同记录的父子关系描述了出来。查询就可以直接写了。
The parentKey field describes the parent-child relationship of different records in the data table. The query can be written directly.

注意：一个表的一次查询中只能有一个父子关系。如果一个表的schema里多个字段均设为了parentKey，那么需要在JQL中通过parentKey()方法指定某个要使用的parentKey字段。
Note: There can only be one parent-child relationship in one query of a table. If multiple fields in the schema of a table are set to parentKey, then you need to specify a parentKey field to be used through the parentKey() method in JQL.

schema里描述好后，查询就变的特别简单。
Once described in the schema, the query becomes very simple.

查询树形数据，分为 查询所有子节点 和 查询父级路径 这2种需求。
Querying tree data is divided into two requirements: querying all child nodes and querying the parent path.

#### 查询所有子节点
#### Query all child nodes

指定符合条件的记录，然后查询它的所有子节点，并且可以指定层级，返回的结果是以符合条件的记录为一级节点的所有子节点数据，并以树形方式嵌套呈现。
Specify a record that meets the conditions, and then query all its child nodes, and you can specify the level. The returned result is the data of all child nodes with the record that meets the conditions as the first-level node, and is nested in a tree-like manner.

只需要在JQL的get方法中增加`getTree`参数，如下
Just add the `getTree` parameter to the JQL get method, as follows
```js
// get方法示例
// get method example
get({
  getTree: {
    limitLevel: 10, // 最大查询层级（不包含当前层级），可以省略默认10级，最大15，最小1
    startWith: "parent_code=='' || parent_code==null"  // 第一层级条件，此初始条件可以省略，不传startWith时默认从最顶级开始查询
  }
})

// 使用getTree时上述参数可以简写为以下写法
// When using getTree, the above parameters can be abbreviated as the following
get({
  getTree: true
})
```

完整的代码如下：
The complete code is as follows:
```js
db.collection("department").get({
		getTree: {}
	})
	.then((res) => {
		const resdata = res.result.data
		console.log("resdata", resdata);
	}).catch((err) => {
		uni.showModal({
			content: err.message || '请求服务失败',
			showCancel: false
		})
	}).finally(() => {
		
	})
```

查询的结果如下：
The result of the query is as follows:
```json
"data": [{
	"_id": "5fe77207974b6900018c6c9c",
	"name": "总部",
	"parent_id": "",
	"status": 0,
	"children": [{
		"_id": "5fe77232974b6900018c6cb1",
		"name": "一级部门A",
		"parent_id": "5fe77207974b6900018c6c9c",
		"status": 0,
		"children": []
	}]
}]
```

可以看出，每个子节点，被嵌套在父节点的"children"下，这个"children"是一个固定的格式。
It can be seen that each child node is nested under the "children" of the parent node, and this "children" is a fixed format.

如果不指定getTree的参数，会把department表的所有数据都查出来，从总部开始到10级部门，以树形结构提供给客户端。
If you do not specify the parameters of getTree, all the data in the department table will be found out, from the headquarters to the 10th-level department, and provided to the client in a tree structure.

如果有多个总部，即多行记录的`parent_id`为空，则多个总部会分别作为一级节点，把它们下面的所有children一级一级拉出来。如下：
If there are multiple headquarters, that is, the `parent_id' of the multi-line record is empty, the multiple headquarters will be used as first-level nodes, and all the children below them will be pulled out level by level. as follows:

```json
"data": [
	{
		"_id": "5fe77207974b6900018c6c9c",
		"name": "总部",
		"parent_id": "",
    "status": 0,
		"children": [{
				"_id": "5fe77232974b6900018c6cb1",
				"name": "一级部门A",
				"parent_id": "5fe77207974b6900018c6c9c",
				"status": 0,
				"children": []
		}]
	},
	{
		"_id": "5fe778a10431ca0001c1e2f8",
		"name": "总部2",
		"parent_id": "",
		"children": [{
				"_id": "5fe778e064635100013efbc2",
				"name": "总部2的一级部门B",
				"parent_id": "5fe778a10431ca0001c1e2f8",
				"children": []
		}]
	}
]
```


如果觉得返回的`parent_id`字段多余，也可以指定`.field("_id,name")`，过滤掉该字段。
If you feel that the returned `parent_id` field is redundant, you can also specify `.field("_id,name")` to filter out this field.

**getTree的参数limitLevel的说明**
**Description of parameter limitLevel of getTree**

limitLevel表示查询返回的树的最大层级。超过设定层级的节点不会返回。
limitLevel represents the maximum level of the tree returned by the query. Nodes beyond the set level will not be returned.

- limitLevel的默认值为10。
- The default value of limitLevel is 10.
- limitLevel的合法值域为1-15之间（包含1、15）。如果数据实际层级超过15层，请分层懒加载查询。
- The legal value range of limitLevel is between 1 and 15 (including 1 and 15). If the actual level of data exceeds 15 levels, please lazily load the query.
- limitLevel为1，表示向下查一级子节点。假如数据库中有2级、3级部门，如果设limitLevel为1，且查询的是“总部”，那么返回数据包含“总部”和其下的一级部门。
- limitLevel is 1, which means to check down one level of child nodes. If there are 2-level and 3-level departments in the database, if limitLevel is set to 1, and the query is "Headquarters", the returned data includes "Headquarters" and the first-level departments under it.

**getTree的参数startWith的说明**
**Description of parameter startWith of getTree**

如果只需要查“总部”的子部门，不需要“总部2”，可以在startWith里指定（`getTree: {"startWith":"name=='总部'"}`）。
If you only need to check the sub-departments of "Headquarters", you don't need "Headquarters 2", you can specify it in startWith (`getTree: {"startWith":"name=='Headquarters'"}`).

使用中请注意startWith和where的区别。where用于描述对所有层级的生效的条件（包括第一层级）。而startWith用于描述从哪个或哪些节点开始查询树。
Please pay attention to the difference between startWith and where in use. where is used to describe the conditions that apply to all levels (including the first level). And startWith is used to describe which node or nodes to start querying the tree from.

startWith不填时，默认的条件是 `'parent_id==null||parent_id==""'`，即schema配置parentKey的字段为null（即不存在）或值为空字符串时，这样的节点被默认视为根节点。
When startWith is not filled in, the default condition is `'parent_id==null||parent_id==""'`, that is, when the field of the schema configuration parentKey is null (that is, does not exist) or the value is an empty string, such a node is Treated as root node by default.

假设上述部门表内有以下数据
Suppose the above department table has the following data

```js
{
    "_id": "1",
    "name": "总部",
    "parent_id": "",
    "status": 0
}
{
    "_id": "11",
    "name": "一级部门A",
    "parent_id": "1",
    "status": 0
}
{
    "_id": "12",
    "name": "一级部门B",
    "parent_id": "1",
    "status": 1
}
```

以下查询语句指定startWith为`_id=="1"`、where条件为`status==0`，查询总部下所有status为0的子节点。
The following query statement specifies that startWith is `_id=="1"` and the where condition is `status==0`, to query all child nodes whose status is 0 under the headquarters.

```js
db.collection("department")
  .where('status==0')
  .get({
    getTree: {
      startWith: '_id=="1"'
    }
	})
	.then((res) => {
		const resdata = res.result.data
		console.log("resdata", resdata);
	}).catch((err) => {
		uni.showModal({
			content: err.message || '请求服务失败',
			showCancel: false
		})
	}).finally(() => {
		
	})
```

查询的结果如下：
The result of the query is as follows:
```json
{
  "data": [{
    "_id": "1",
    "name": "总部",
    "parent_id": "",
    "status": 0,
    "children": [{
      "_id": "11",
      "name": "一级部门A",
      "parent_id": "1",
      "status": 0,
      "children": []
    }]
  }]
}
```

**需要注意的是where内的条件也会对第一级数据生效**，例如将上面的查询改成如下写法
**It should be noted that the conditions in where will also take effect on the first-level data**, for example, change the above query to the following writing

```js
db.collection("department")
  .where('status==1')
  .get({
    getTree: {
      startWith: '_id=="1"'
    }
	})
	.then((res) => {
		const resdata = res.result.data
		console.log("resdata", resdata);
	}).catch((err) => {
		uni.showModal({
			content: err.message || '请求服务失败',
			showCancel: false
		})
	}).finally(() => {
		
	})
```

此时将无法查询到数据，返回结果如下
At this time, the data cannot be queried, and the returned results are as follows

```js
{
  "data": []
}
```


**通过parentKey方法指定某个parentKey**
**Specify a parentKey through the parentKey method**

如果表的schema中有多个字段都配置了parentKey，但查询时其实只能有一个字段的parentKey关系可以生效，那么此时就需要通过parentKey()方法来指定这次查询需要的哪个parentKey关系生效。
If multiple fields in the schema of the table are configured with parentKey, but the parentKey relationship of only one field can take effect during the query, then you need to use the parentKey() method to specify which parentKey relationship is required for this query to take effect. .

parentKey()方法的参数是字段名。
The parameter of the parentKey() method is the field name.

```js
db.collection('department')
.parentKey('parent_id') // 如果表schema只有一个字段设了parentKey，其实不需要指定。有多个字段被设parentKey才需要用这个方法指定
.get({
    getTree: true
	})
```


**示例**
**Example**

插件市场有一个 家谱 的示例，可以参阅：[https://ext.dcloud.net.cn/plugin?id=3798](https://ext.dcloud.net.cn/plugin?id=3798)
There is an example of family tree in the plugin market, you can refer to: [https://ext.dcloud.net.cn/plugin?id=3798](https://ext.dcloud.net.cn/plugin?id=3798)


**大数据量的树形数据查询**
**Tree data query with large amount of data**

如果tree的数据量较大，则不建议一次性把所有的树形数据返回给客户端。建议分层查询，即懒加载。
If the amount of tree data is large, it is not recommended to return all tree data to the client at one time. Hierarchical queries are recommended, i.e. lazy loading.

比如地区选择的场景，全国的省市区数据量很大，一次性查询所有数据返回给客户端非常耗时和耗流量。可以先查省，然后根据选择的省再查市，以此类推。
For example, in the scenario of regional selection, there is a large amount of data in provinces and cities across the country. It is very time-consuming and traffic-consuming to query all the data at one time and return it to the client. You can check the province first, then check the city according to the selected province, and so on.

**注意**
**Notice**

- 暂不支持使用getTree的同时使用联表查询
- Do not support using getTree at the same time using join table query
- 如果使用了where条件会对所有查询的节点生效
- If the where condition is used, it will take effect for all queried nodes
- 如果使用了limit设置最大返回数量仅对根节点生效
- If limit is used to set the maximum number of returns, it will only take effect on the root node

#### 查询树形结构父节点路径@gettreepath
#### Query tree structure parent node path @gettreepath

getTree是查询子节点，而getTreePath，则是查询父节点。
getTree queries child nodes, and getTreePath queries parent nodes.

get方法内传入getTreePath参数对包含父子关系的表查询返回树状结构数据某节点路径。
The getTreePath parameter is passed in the get method to query the table containing the parent-child relationship and return the path of a node of tree structure data.

```js
// get方法示例
// get method example
get({
  getTreePath: {
    limitLevel: 10, // 最大查询层级（不包含当前层级），可以省略默认10级，最大15，最小1
    startWith: 'name=="一级部门A"'  // 末级节点的条件，此初始条件不可以省略
  }
})
```

查询返回的结果为，从“一级部门A”起向上找10级，找到最终节点后，以该节点为根，向下嵌套children，一直到达“一级部门A”。
The result returned by the query is to search up 10 levels from "first-level department A", and after finding the final node, take this node as the root, and nest children downward until reaching "first-level department A".

返回结果只包括“一级部门A”的直系父，其父节点的兄弟节点不会返回。所以每一层数据均只有一个节点。
The returned result only includes the immediate parent of "first-level department A", and the sibling nodes of its parent node will not be returned. Therefore, each layer of data has only one node.

仍以上面department的表结构和数据为例
Still take the table structure and data of the department above as an example

```js
db.collection("department").get({
		getTreePath: {
			"startWith": "_id=='5fe77232974b6900018c6cb1'"
		}
	})
	.then((res) => {
		const treepath = res.result.data
		console.log("treepath", treepath);
	}).catch((err) => {
		uni.showModal({
			content: err.message || '请求服务失败',
			showCancel: false
		})
	}).finally(() => {
		uni.hideLoading()
		// console.log("finally")
	})
```

查询返回结果
query return result

从根节点“总部”开始，返回到“一级部门A”。“总部2”等节点不会返回。
Start from the root node "headquarters" and return to "first-level department A". Nodes such as "HQ2" will not return.

```json
{
  "data": [{
		"_id": "5fe77207974b6900018c6c9c",
		"name": "总部",
		"parent_id": "",
		"children": [{
			"_id": "5fe77232974b6900018c6cb1",
			"name": "一级部门A",
			"parent_id": "5fe77207974b6900018c6c9c"
		}]
	}]
}
```

如果startWith指定的节点没有父节点，则返回自身。
Returns itself if the node specified by startWith has no parent.

如果startWith匹配的节点不止一个，则以数组的方式，返回每个节点的treepath。
If startWith matches more than one node, return the treepath of each node as an array.

例如“总部”和“总部2”下面都有一个部门的名称叫“销售部”，且`	"startWith": "name=='销售部'"`，则会返回“总部”和“总部2”两条treepath，如下
For example, "Headquarters" and "Headquarters 2" both have a department name called "Sales", and ` "startWith": "name=='Sales Department'"`, it will return "Headquarters" and "Headquarters 2" Two treepaths, as follows

```json
{
	"data": [{
		"_id": "5fe77207974b6900018c6c9c",
		"name": "总部",
		"parent_id": "",
		"children": [{
			"_id": "5fe77232974b6900018c6cb1",
			"name": "销售部",
			"parent_id": "5fe77207974b6900018c6c9c"
		}]
		}, {
		"_id": "5fe778a10431ca0001c1e2f8",
		"name": "总部2",
		"parent_id": "",
		"children": [{
			"_id": "5fe79fea23976b0001508a46",
			"name": "销售部",
			"parent_id": "5fe778a10431ca0001c1e2f8"
		}]
	}]
}
```


**注意**
**Notice**

- 暂不支持使用getTreePath的同时使用其他联表查询语法
- It is not supported to use other join table query syntax while using getTreePath
- 如果使用了where条件会对所有查询的节点生效
- If the where condition is used, it will take effect for all queried nodes

### 分组统计groupby@groupby
### Group statistics groupby@groupby

> 本地调试支持：`HBuilderX 3.1.0`+；云端支持：2021-1-26日后更新一次云端 DB Schema 生效
> Local debugging support: `HBuilderX 3.1.0`+; cloud support: update the cloud DB Schema after 2021-1-26 to take effect

数据分组统计，即根据某个字段进行分组（groupBy），然后对其他字段分组后的值进行求和、求数量、求均值。
Data grouping statistics, that is, grouping according to a field (groupBy), and then summing, calculating the number, and calculating the average of the grouped values of other fields.

比如统计每日新增用户数，就是按时间进行分组，对每日的用户记录进行count运算。
For example, to count the number of new users per day is to group by time and perform count operation on the daily user records.

分组统计有groupBy和groupField。和传统sql略有不同，传统sql没有单独的groupField。
Group statistics have groupBy and groupField. Slightly different from traditional sql, traditional sql does not have a separate groupField.

JQL的groupField里不能直接写field字段，只能使用[分组运算方法](uniCloud/jql.md?id=accumulator)来处理字段，常见的累积器计算符包括：count(*)、sum(字段名称)、avg(字段名称)。更多分组运算方法[详见](uniCloud/clientdb.md?id=accumulator)
The field field cannot be written directly in the groupField of JQL. Only the [grouping operation method](uniCloud/jql.md?id=accumulator) can be used to process the field. Common accumulators include: count(*), sum(field name ), avg(field name). More grouping operation methods [see details](uniCloud/clientdb.md?id=accumulator)

其中count(*)是固定写法。
Where count(*) is a fixed spelling.

分组统计的写法如下：
Group statistics are written as follows:

```js
const res = await db.collection('table1').groupBy('field1,field2').groupField('sum(field3) as field4').get()
```

如果额外还在groupBy之前使用了field方法，那么此field的含义并不是最终返回的字段，而是用于对字段预处理，然后将预处理的字段传给groupBy和groupField使用。
If the field method is additionally used before groupBy, the meaning of this field is not the final returned field, but is used to preprocess the field, and then pass the preprocessed field to groupBy and groupField for use.

与field不同，使用groupField时返回结果不会默认包含`_id`字段。同时开发者也不应该在groupBy和groupField里使用`_id`字段，`_id`是唯一的，没有统一意义。
Unlike field, when using groupField, the returned result does not contain the `_id` field by default. At the same time, developers should not use the `_id` field in groupBy and groupField. `_id` is unique and has no unified meaning.

举例：
Example:
如果数据库`score`表为某次比赛统计的分数数据，每条记录为一个学生的分数。学生有所在的年级（grade）、班级（class）、姓名（name）、分数（score）等字段属性。
If the database `score` table is the score data of a certain competition, each record is a student's score. Students have field attributes such as grade, class, name, and score.

```js
{
  _id: "1",
  grade: "1",
  class: "A",
  name: "zhao",
  score: 5
}
{
  _id: "2",
  grade: "1",
  class: "A",
  name: "qian",
  score: 15
}
{
  _id: "3",
  grade: "1",
  class: "B",
  name: "li",
  score: 15
}
{
  _id: "4",
  grade: "1",
  class: "B",
  name: "zhou",
  score: 25
}
{
  _id: "5",
  grade: "2",
  class: "A",
  name: "wu",
  score: 25
}
{
  _id: "6",
  grade: "2",
  class: "A",
  name: "zheng",
  score: 35
}
```

接下来我们对这批数据进行分组统计，分别演示如何使用求和、求均值和计数。
Next, we will group statistics on this batch of data and demonstrate how to use sum, average and count respectively.

#### 求和、求均值示例
#### Sum, Average Example

groupBy内也可以使用数据库运算方法对数据进行处理，为方便书写，clientDB内将数据库运算方法的用法进行了简化（相对于云函数内使用数据库运算方法而言）。用法请参考：[数据库运算方法](uniCloud/jql.md?id=aggregate-operator)
The database operation method can also be used to process the data in groupBy. For the convenience of writing, the usage of the database operation method in clientDB has been simplified (compared to the database operation method used in the cloud function). For usage, please refer to: [Database operation method](uniCloud/jql.md?id=aggregate-operator)

groupField内可以使用分组运算方法对分组结果进行统计，所有可用的累计方法请参考[分组运算方法](uniCloud/jql.md?id=accumulator)，下面以sum（求和）和avg（求均值）为例介绍如何使用
The grouping operation method can be used in groupField to count the grouping results. For all available accumulation methods, please refer to [Grouping operation method](uniCloud/jql.md?id=accumulator). The following uses sum (summation) and avg (average) An example of how to use

使用sum方法可以对数据进行求和统计。以上述数据为例，如下写法对不同班级进行分数统计
Use the sum method to sum the data. Taking the above data as an example, the following methods are used to calculate the scores of different classes

```js
const res = await db.collection('score')
.groupBy('grade,class')
.groupField('sum(score) as totalScore')
.get()
```

返回结果如下
The return result is as follows

```js
{
  data: [{
    grade: "1",
    class: "A",
    totalScore: 20
  },{
    grade: "1",
    class: "B",
    totalScore: 40
  },{
    grade: "2",
    class: "A",
    totalScore: 60
  }]
}
```

1年级A班、1年级B班、2年级A班，3个班级的总分分别是20、40、60。
The total scores of the three classes are 20, 40, and 60, respectively.

求均值方法与求和类似，将上面sum方法换成avg方法即可
The averaging method is similar to the summation method, and the above sum method can be replaced by the avg method.

```js
const res = await db.collection('score')
.groupBy('grade,class')
.groupField('avg(score) as avgScore')
.get()
```

返回结果如下
The return result is as follows

```js
{
  data: [{
    grade: "1",
    class: "A",
    avgScore: 10
  },{
    grade: "1",
    class: "B",
    avgScore: 20
  },{
    grade: "2",
    class: "A",
    avgScore: 30
  }]
}
```


如果额外还在groupBy之前使用了field方法，此field用于决定将哪些数据传给groupBy和groupField使用
If the field method is used before groupBy, this field is used to decide which data to pass to groupBy and groupField.

例：如果上述数据中score是一个数组
Example: If the score in the above data is an array

```js
{
  _id: "1",
  grade: "1",
  class: "A",
  name: "zhao",
  score: [1,1,1,1,1]
}
{
  _id: "2",
  grade: "1",
  class: "A",
  name: "qian",
  score: [3,3,3,3,3]
}
{
  _id: "3",
  grade: "1",
  class: "B",
  name: "li",
  score: [3,3,3,3,3]
}
{
  _id: "4",
  grade: "1",
  class: "B",
  name: "zhou",
  score: [5,5,5,5,5]
}
{
  _id: "5",
  grade: "2",
  class: "A",
  name: "wu",
  score: [5,5,5,5,5]
}
{
  _id: "6",
  grade: "2",
  class: "A",
  name: "zheng",
  score: [7,7,7,7,7]
}
```

如下field写法将上面的score数组求和之后传递给groupBy和groupField使用。在field内没出现的字段（比如name），在后面的方法里面不能使用
The following field writing method sums the above score array and passes it to groupBy and groupField for use. Fields (such as name) that do not appear in field cannot be used in subsequent methods

```js
const res = await db.collection('score')
.field('grade,class,sum(score) as userTotalScore')
.groupBy('grade,class')
.groupField('avg(userTotalScore) as avgScore')
.get()
```

返回结果如下
The return result is as follows

```js
{
  data: [{
    grade: "1",
    class: "A",
    avgScore: 10
  },{
    grade: "1",
    class: "B",
    avgScore: 20
  },{
    grade: "2",
    class: "A",
    avgScore: 30
  }]
}
```


#### 统计数量示例
#### Statistics example

使用count方法可以对记录数量进行统计。以上述数据为例，如下写法对不同班级统计参赛人数
Use the count method to count the number of records. Taking the above data as an example, the following writing method counts the number of participants for different classes

```js
const res = await db.collection('score')
.groupBy('grade,class')
.groupField('count(*) as totalStudents')
.get()
```

返回结果如下
The return result is as follows

```js
{
  data: [{
    grade: "1",
    class: "A",
    totalStudents: 2
  },{
    grade: "1",
    class: "B",
    totalStudents: 2
  },{
    grade: "2",
    class: "A",
    totalStudents: 2
  }]
}
```

**注意**
**Notice**

- `count(*)`为固定写法，括号里的*可以省略
- `count(*)` is a fixed way of writing, the * in parentheses can be omitted

#### 按日分组统计示例
#### Example of grouping statistics by day

按时间段统计是常见的需求，而时间段统计会用到日期运算符。
Statistics by time period is a common requirement, and time period statistics use date operators.

假设要统计[uni-id-users](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json)表的每日新增注册用户数量。表内有以下数据：
Suppose you want to count the daily number of newly registered users in the [uni-id-users](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json) table. The table contains the following data:

```json
{
  "_id": "1",
  "username": "name1",
  "register_date": 1611367810000 // 2021-01-23 10:10:10
}
{
  "_id": "2",
  "username": "name2",
  "register_date": 1611367810000 // 2021-01-23 10:10:10
}
{
  "_id": "3",
  "username": "name3",
  "register_date": 1611367810000 // 2021-01-23 10:10:10
}
{
  "_id": "4",
  "username": "name4",
  "register_date": 1611281410000 // 2021-01-22 10:10:10
}
{
  "_id": "5",
  "username": "name5",
  "register_date": 1611281410000 // 2021-01-22 10:10:10
}
{
  "_id": "6",
  "username": "name6",
  "register_date": 1611195010000 // 2021-01-21 10:10:10
}
```

由于`register_date`字段是时间戳格式，含有时分秒信息。但统计每日新增注册用户时是需要忽略时分秒的。
Since the `register_date` field is in timestamp format, it contains time, minute and second information. However, it is necessary to ignore the hours, minutes, and seconds when counting new registered users every day.

1. 首先使用add操作符将`register_date`从时间戳转化为日期类型。
1. First use the add operator to convert `register_date` from timestamp to date type.

add操作符的用法为`add(值1,值2)`。`add(new Date(0),register_date)`表示给字段register_date + 0，这个运算没有改变具体的时间，但把`register_date`的格式从时间戳转为了日期类型。
The usage of the add operator is `add(value1, value2)`. `add(new Date(0),register_date)` represents the field register_date + 0. This operation does not change the specific time, but changes the format of `register_date` from timestamp to date type.

2. 然后使用dateToString将add得到的日期格式化为形如`2021-01-21`的字符串，去掉时分秒。
2. Then use dateToString to format the date obtained by add into a string of the form `2021-01-21`, removing the hours, minutes and seconds.

dateToString操作符的用法为`dateToString(日期对象,格式化字符串,时区)`。具体如下：`dateToString(add(new Date(0),register_date),"%Y-%m-%d","+0800")`
The usage of the dateToString operator is `dateToString(date object, format string, time zone)`. The details are as follows: `dateToString(add(new Date(0),register_date),"%Y-%m-%d","+0800")`

3. 然后根据此字符串进行分组统计，得到每天注册用户量。代码如下：
3. Then group statistics based on this string to get the number of registered users per day. code show as below:

```js
const res = await db.collection('uni-id-users')
.groupBy('dateToString(add(new Date(0),register_date),"%Y-%m-%d","+0800") as date')
.groupField('count(*) as newusercount')
.get()
```

查询返回结果如下：
The query returns the following results:
```js
res = {
  result: {
    data: [{
      date: '2021-01-23',
      newusercount: 3
    },{
      date: '2021-01-22',
      newusercount: 2
    },{
      date: '2021-01-21',
      newusercount: 1
    }]
  }
}
```

完整数据库运算方法列表请参考：[JQL内可使用的数据库运算方法](uniCloud/jql.md?id=aggregate-operator)
For a complete list of database operation methods, please refer to: [Database operation methods available in JQL](uniCloud/jql.md?id=aggregate-operator)

#### count权限控制
#### count permission control

在使用普通的累积器操作符，如sum、avg时，权限控制与常规的权限控制并无不同。
When using common accumulator operators, such as sum, avg, permission control is no different from regular permission control.

但使用count时，可以单独配置表级的count权限。
However, when using count, the table-level count permission can be configured separately.

请不要轻率的把[uni-id-users](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json)表的count权限设为true，即任何人都可以count。这意味着游客将可以获取到你的用户总数量。
Please do not rashly set the count permission of the [uni-id-users](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json) table to true, that is Anyone can count. This means that visitors will have access to your total number of users.

count权限的控制逻辑如下：
The control logic of count permission is as follows:

- 在不使用field，仅使用groupBy和groupField的情况下，会以groupBy和groupField内访问的所有字段的权限来校验访问是否合法。
- In the case of not using field and only using groupBy and groupField, the permissions of all fields accessed in groupBy and groupField will be used to verify whether the access is legal.
- 在额外使用field方法的情况下，会计算field内访问的所有字段计算权限。上面的例子中会使用表的read权限和grade、class、score三个字段的权限，来进行权限校验。
- In the case of additional use of the field method, all field calculation permissions accessed within the field will be calculated. In the above example, the read permission of the table and the permissions of the three fields of grade, class, and score are used for permission verification.
- 在HBuilderX 3.1.0之前，count操作都会使用表级的read权限进行验证。HBuilderX 3.1.0及之后的版本，如果配置了count权限则会使用表级的read+count权限进行校验，两条均满足才可以通过校验
- Before HBuilderX 3.1.0, the count operation will be verified using the table-level read permission. In HBuilderX 3.1.0 and later versions, if the count permission is configured, the table-level read+count permission will be used for verification, and the verification will pass if both of them are satisfied.
- 如果schema内没有count权限，则只会使用read权限进行校验
- If there is no count permission in the schema, only the read permission will be used for verification
- 所有会统计数量的操作均会触发count权限校验
- All operations that will count the number will trigger the count permission check

### 数据去重distinct@distinct
### Data deduplication distinct@distinct

通过.distinct()方法，对数据查询结果中重复的记录进行去重。
Use the .distinct() method to remove duplicate records in the data query result.

distinct方法将按照field方法指定的字段进行去重（如果field内未指定`_id`，不会按照`_id`去重）
The distinct method will deduplicate according to the field specified by the field method (if `_id` is not specified in the field, it will not be deduplicated according to `_id`)

> 本地调试支持：`HBuilderX 3.1.0`+；云端支持：2021-1-26日后更新一次云端 DB Schema生效
> Local debugging support: `HBuilderX 3.1.0`+; Cloud support: Update the cloud DB Schema after 2021-1-26 to take effect

```js
const res = await db.collection('table1')
.field('field1')
.distinct() // 注意distinct方法没有参数
.get()
```

例：如果数据库`score`表为某次比赛统计的分数数据，每条记录为一个学生的分数
Example: If the database `score` table is the score data of a certain competition, each record is the score of a student

`score`表的数据：
Data for the `score` table:

```js
{
  _id: "1",
  grade: "1",
  class: "A",
  name: "zhao",
  score: 5
}
{
  _id: "2",
  grade: "1",
  class: "A",
  name: "qian",
  score: 15
}
{
  _id: "3",
  grade: "1",
  class: "B",
  name: "li",
  score: 15
}
{
  _id: "4",
  grade: "1",
  class: "B",
  name: "zhou",
  score: 25
}
{
  _id: "5",
  grade: "2",
  class: "A",
  name: "wu",
  score: 25
}
{
  _id: "6",
  grade: "2",
  class: "A",
  name: "zheng",
  score: 35
}
```

以下代码可以按照grade、class两字段去重，获取所有参赛班级
The following code can be deduplicated according to the two fields of grade and class to get all participating classes

```js
const res = await db.collection('score')
.field('grade,class')
.distinct() // 注意distinct方法没有参数
.get()
```

查询返回结果如下
The query returns the result as follows

```js
{
  data: [{
    grade:"1",
    class: "A"
  },{
    grade:"1",
    class: "B"
  },{
    grade:"2",
    class: "A"
  }]
}
```

**注意**
**Notice**

- distinct指对返回结果中完全相同的记录进行去重，重复的记录只保留一条。因为`_id`字段是必然不同的，所以使用distinct时必须同时指定field，且field中不可存在`_id`字段
- distinct refers to deduplication of identical records in the returned result, and only one duplicate record is retained. Because the `_id` field is necessarily different, the field must be specified at the same time when using distinct, and the `_id` field cannot exist in the field

### 地理位置查询geoNear@geo-near

> 新增于 HBuilderX 3.6.10

geoNear可用于查询位置在给定点一定距离内的数据库记录。此方法必须紧跟在collection方法或aggregate方法后。

**参数**

|属性								|类型								|默认值	|必填	|说明																																														|
| ----            	| ------				    | ----	|----	|----	|
|near								|GeoPoint						|				|是		|GeoJSON Point，用于判断距离的点																																|
|spherical					|true								|				|是		|必填，值为 true																																								|
|maxDistance				|number							|				|否		|距离最大值																																											|
|minDistance				|number							|				|否		|距离最小值																																											|
|query							|object&#124;string	|				|否		|要求记录必须同时满足该条件（语法同 where）																											|
|distanceMultiplier	|number							|				|否		|返回时在距离上乘以该数字																																				|
|distanceField			|string							|				|是		|存放距离的输出字段名，可以用点表示法表示一个嵌套字段																						|
|includeLocs				|string							|				|否		|列出要用于距离计算的字段，如果记录中有多个字段都是地理位置时有用																|
|key								|string							|				|否		|选择要用的地理位置索引。如果集合由多个地理位置索引，则必须指定一个，指定的方式是指定对应的字段	|

**示例**

```js
const res = await db.collection('geo-near').aggregate().geoNear({
    distanceField: 'distance',
    spherical: true,
    near: new db.Geo.Point(116.397689, 39.904626), // 人民英雄纪念碑
    maxDistance: 500,
    query: 'name == "readable"'
  }).end()
```

**注意事项**

- 存在geoNear时其query参数将取代where/doc作为权限校验依据，即query匹配到的结果需要满足权限才可以查询

## 新增数据记录@add
## Add data record @add

> 代码块`dbadd`
> code block `dbadd`

获取到db的表对象后，通过`add`方法新增数据记录。
After obtaining the table object of db, use the `add` method to add data records.

方法：collection.add(data)
Method: collection.add(data)

**参数说明**
**Parameter Description**

| 参数	| 类型					| 必填	|
| Parameters | Type | Required |
| ----	| ------				| ----	|
| data	| object &#124; array	| 是	|
| data | object &#124; array | yes |

data支持一条记录，也支持多条记录一并新增到集合中。
data supports one record, and also supports adding multiple records to the collection at the same time.

data中不需要包括`_id`字段，数据库会自动维护该字段。
There is no need to include the `_id` field in data, the database will automatically maintain this field.

**返回值**
**return value**

单条插入时
When inserting a single

| 参数	| 类型	|  说明										|
| Parameters | Type | Description |
| ----	| ------|  ----------------------------------------	|
|id		| String|插入记录的`_id`								|
|id | String | The `_id` of the inserted record |

批量插入时
When bulk inserting

| 参数		| 类型	|  说明										|
| Parameters | Type | Description |
| ----		| ------|  ----------------------------------------	|
| inserted	| Number| 插入成功条数								|
| inserted | Number| Number of successful inserts |
|ids		| Array	|批量插入所有记录的`_id`						|
|ids | Array | Bulk insert `_id` of all records |

**示例：**
**Example:**

比如在user表里新增一个叫王五的记录：
For example, add a new record named Wang Wu in the user table:

```js
const db = uniCloud.database();
db.collection('user').add({name:"王五"})
```

也可以批量插入数据并获取返回值
You can also insert data in batches and get the return value

```js
const db = uniCloud.database();
const collection = db.collection('user');
let res = await collection.add([{
  name: '张三'
},{
  name: '李四'
},{
  name: '王五'
}])
```

如果上述代码执行成功，则res的值将包括inserted:3，代表插入3条数据，同时在ids里返回3条记录的`_id`。
If the above code is executed successfully, the value of res will include inserted:3, which means inserting 3 pieces of data, and returns the `_id` of 3 records in ids.

如果新增记录失败，会抛出异常，以下代码示例为捕获异常：
If the new record fails, an exception will be thrown. The following code example catches the exception:

```js
// 插入1条数据，同时判断成功失败状态
// Insert 1 piece of data, and judge the success and failure status at the same time
const db = uniCloud.database();
db.collection("user")
	.add({name: '张三'})
	.then((res) => {
		uni.showToast({
			title: '新增成功'
		})
	})
	.catch((err) => {
		uni.showModal({
			content: err.message || '新增失败',
			showCancel: false
		})
	})
	.finally(() => {
		
	})
```

**Tips**

- 如果是非admin账户新增数据，需要在数据库中待操作表的`db schema`中要配置permission权限，赋予create允许用户操作的权限。
- If the data is added to a non-admin account, you need to configure the permission in the `db schema` of the table to be operated in the database, and give create permission to allow users to operate.
- 云服务商选择阿里云时，若集合表不存在，调用add方法会自动创建集合表，并且不会报错。
- When the cloud service provider selects Alibaba Cloud, if the collection table does not exist, calling the add method will automatically create the collection table and no error will be reported.


## 删除数据记录@remove
## delete data record @remove

> 代码块`dbremove`
> Code block `dbremove`

获取到db的表对象，然后指定要删除的记录，通过remove方法删除。
Get the table object of the db, and then specify the record to be deleted, and delete it through the remove method.

注意：如果是非admin账户删除数据，需要在数据库中待操作表的`db schema`中要配置permission权限，赋予delete允许用户操作的权限。
Note: If the non-admin account deletes data, you need to configure the permission in the `db schema` of the table to be operated in the database, and give delete the permission to allow the user to operate.

指定要删除的记录有2种方式：
There are 2 ways to specify records to delete:

### 通过指定文档ID删除
### Delete by specifying document ID

collection.doc(_id).remove()


```js
const db = uniCloud.database();
await db.collection("table1").doc("5f79fdb337d16d0001899566").remove()
```

### 条件查找文档后删除
### Condition to find the document and delete it

collection.where().remove()

```js
// 删除字段a的值大于2的文档
// delete documents with field a value greater than 2
try {
	await db.collection("table1").where("a>2").remove()
} catch (e) {
	uni.showModal({
		title: '提示',
		content: e.message
	})
}
```

删除该表所有数据
delete all data in this table

注意：数据量很多的情况下这种方式删除会超时，但是数据仍会全部删除掉
Note: In the case of a large amount of data, deletion in this way will time out, but all data will still be deleted.

```js
const dbCmd = db.command
const db = uniCloud.database();
await db.collection("table1").where({
  _id: dbCmd.neq(null)
}).remove()
```

**响应结果**
**response results**

| 字段		| 类型		| 必填	| 说明						|
| Fields | Type | Required | Description |
| ---------	| -------	| ----	| ------------------------	|
| deleted	| Number	| 否	| 删除的记录数量			|
| deleted | Number | No | Number of records deleted |

示例：判断删除成功或失败，打印删除的记录数量
Example: Determine the success or failure of deletion, and print the number of deleted records

```js
const db = uniCloud.database();
db.collection("table1")
  .where({
    _id: "5f79fdb337d16d0001899566"
  })
  .remove()
	.then((res) => {
		uni.showToast({
			title: '删除成功'
		})
		console.log("删除条数: ",res.deleted);
	}).catch((err) => {
		uni.showModal({
			content: err.message || '删除失败',
			showCancel: false
		})
	}).finally(() => {
		
	})
```

## 更新数据记录@update
## Update data record @update

> 代码块`dbupdate`
> code block `dbupdate`

获取到db的表对象，然后指定要更新的记录，通过update方法更新。
Get the table object of the db, then specify the record to be updated, and update it through the update method.

注意：如果是非admin账户修改数据，需要在数据库中待操作表的`db schema`中要配置permission权限，赋予update为true。
Note: If a non-admin account modifies data, you need to configure permission in the `db schema` of the table to be operated in the database, and assign update to true.

collection.doc().update(Object data)

**参数说明**
**Parameter Description**

| 参数 | 类型   | 必填 | 说明                                     |
| Parameters | Type | Required | Description |
| ---- | ------ | ---- | ---------------------------------------- |
| data | object | 是   | 更新字段的Object，{'name': 'Ben'} _id 非必填|
| data | object | Yes | Object to update the field, {'name': 'Ben'} _id not required|

**回调的res响应参数**
**The res response parameter of the callback**

| 参数	| 类型	|  说明																			|
| Parameters | Type | Description |
| ----	| ------|  ----------------------------------------	|
|updated| Number| 更新成功条数，数据更新前后没变化时会返回0。用法与删除数据的响应参数示例相同	|
|updated| Number| The number of successful updates. It will return 0 if the data has not changed before and after the update. The usage is the same as the response parameter example for delete data |


```js
const db = uniCloud.database();
let collection = db.collection("table1")
let res = await collection.where({_id:'doc-id'})
  .update({
    name: "Hey",
    count: {
      fav: 1
    }
  });
```

```json
// 更新前的数据
// data before update
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后的数据
// updated data
{
  "_id": "doc-id",
  "name": "Hey",
  "count": {
    "fav": 1,
    "follow": 0
  }
}
```

更新数组时，以数组下标作为key即可，比如以下示例将数组arr内下标为1的值修改为 uniCloud
When updating the array, use the subscript of the array as the key. For example, the following example changes the value of subscript 1 in the array arr to uniCloud

```js
const db = uniCloud.database();
let collection = db.collection("table1")
let res = await collection.where({_id:'doc-id'})
  .update({
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

### 批量更新文档
### Batch update documents

```js
const db = uniCloud.database();
let collection = db.collection("table1")
let res = await collection.where("name=='hey'").update({
  age: 18,
})
```

### 更新数组内指定下标的元素
### Update the element at the specified index in the array

JQL暂不支持此用法
JQL does not currently support this usage

### 更新数组内匹配条件的元素
### Update the elements in the array that match the condition

JQL暂不支持此用法
JQL does not currently support this usage


## 同时发送多条数据库请求@multi-send
## Send multiple database requests at the same time @multi-send

> HBuilderX 3.1.22及以上版本支持
> Supported by HBuilderX 3.1.22 and above

在实际业务中通常会遇到一个页面需要查询多次的情况，比如应用首页需要查询轮播图列表、公告列表、首页商品列表等。如果分开请求需要发送很多次网络请求，这样会影响性能。使用multiSend可以将多个数据库请求合并成一个发送。
In actual business, it is usually encountered that a page needs to be queried multiple times. For example, the application homepage needs to query the carousel map list, the announcement list, the homepage product list, etc. If splitting requests requires sending many network requests, this can affect performance. Multiple database requests can be combined into one send using multiSend.

**用法**
**usage**

```js
const bannerQuery = db.collection('banner').field('url,image').getTemp() // 这里使用getTemp不直接发送get请求，等到multiSend时再发送
const noticeQuery = db.collection('notice').field('text,url,level').getTemp()
const res = await db.multiSend(bannerQuery,noticeQuery)
```

**返回值**
**return value**

```js
// 上述请求返回以下结构
// The above request returns the following structure
res = {
  code: 0, // 请求整体执行错误码，注意如果多条查询执行失败，这里的code依然是0，只有出现网络错误等问题时这里才会出现错误
  message: '', // 错误信息
  dataList: [{
    code: 0, // bannerQuery 对应的错误码
    message: '', // bannerQuery 对应的错误信息
    data: [] // bannerQuery 查询到的数据
  }, {
    code: 0, // noticeQuery 对应的错误码
    message: '', // noticeQuery 对应的错误信息
    data: [] // noticeQuery 查询到的数据
  }]
}
```

unicloud-db组件也支持使用getTemp方法，结合multiSend可以与其他数据库请求一起发送
The unicloud-db component also supports the use of the getTemp method, which can be sent together with other database requests in combination with multiSend

用法示例：
Usage example:

```html
<template>
  <view>
    <!-- 设置unicloud-db 组件为手动加载 loadtime="manual" -->
    <!-- Set the unicloud-db component to load manually loadtime="manual" -->
    <unicloud-db collection="banner" loadtime="manual" ref="udb" v-slot:default="{data, error}">
      <view v-if="error">{{error.message}}</view>
      <view v-else>
        <view v-for="(item,index) in data" :key="index">
          <image :src="item.url"></image>
        </view>
      </view>
    </unicloud-db>
    <button type="default" @click="test">test</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {

    },
    methods: {
      test() {
        const db = uniCloud.database()
        const bannerQuery = this.$refs.udb.getTemp() // 调用模板内unicloud-db组件实例的getTemp方法
        const noticeQuery = db.collection('notice').getTemp()
        db.multiSend(bannerQuery, noticeQuery)
          .then(res => {
            console.log('banner', res.result.dataList[0]); // 使用unicloud-db组件的getTemp请求无需额外处理，查询结果会直接被设置到unicloud-db组件内
            console.log('notice', res.result.dataList[1]); // 不使用unicloud-db组件的getTemp请求需要自行处理返回值
          })
          .catch(err => {
            console.error(err)
          })
        // uniCloud.database().collection('test').get()
      }
    }
  }
</script>

<style>
</style>

```

## MongoDB聚合操作@aggregate
## MongoDB aggregation operation @aggregate

JQL API支持使用聚合操作读取数据，关于聚合操作请参考[聚合操作](uniCloud/cf-database-aggregate.md)
The JQL API supports the use of aggregation operations to read data. For the aggregation operations, please refer to [Aggregate Operations](uniCloud/cf-database-aggregate.md)

例：取status等于1的随机20条数据
Example: Take 20 random pieces of data with status equal to 1

```js
const db = uniCloud.database()
const res = await db.collection('test').aggregate()
.match({
  status: 1
})
.sample({
  size: 20
})
.end()
```

## 更新操作符(重命名或删除字段)@update-command
## Update operator (rename or delete field) @update-command

> 新增于 HBuilderX 3.5.1，JQL数据库管理支持使用更新操作符
> Added in HBuilderX 3.5.1, JQL database management supports the use of update operators

更新操作符可以在执行更新时使用。比如对字段重命名（rename）、删除字段（remove）等。适用于表结构变更后，使用 HBuilderX 的 JQL管理器进行数据变更。
The update operator can be used when performing an update. For example, rename the field (rename), delete the field (remove), etc. After the table structure is changed, use the JQL manager of HBuilderX to perform data changes.

`db.command.rename`重命名字段：
`db.command.rename` renames fields:

```js
db.collection('test').update({
	field_to_rename: db.command.rename('final_field_name') // 将field_to_rename重命名为final_field_name
})
```

`db.command.remove`删除字段：
`db.command.remove` removes fields:

```js
db.collection('test').update({
	field_to_remove: db.command.remove() // 删除field_to_remove字段
})
```

**注意**
**Notice**

- 仅 HBuilderX 3.5.1+ 中的 JQL数据库管理器中可用
- Only available in JQL database manager in HBuilderX 3.5.1+
- 支持批量传入重命名或删除指令
- Support batch incoming rename or delete commands
- 使用更新操作符后，将完全跳过所有数据校验操作，即无论schema中如何配置数据的值域规则，都将无法生效。所以更新操作符不宜与普通的数据增删改混在一起执行。
- After using the update operator, all data validation operations will be completely skipped, that is, no matter how the data range rules are configured in the schema, they will not take effect. Therefore, the update operator should not be mixed with ordinary data addition, deletion and modification.

## DBSchema@schema

`DB Schema`是基于 JSON 格式定义的数据结构的规范。
`DB Schema` is a specification for data structures defined based on the JSON format.

它有很多重要的作用：
It has many important functions:

- 描述现有的数据格式。可以一目了然的阅读每个表、每个字段的用途。
- Describe existing data formats. You can read the purpose of each table and field at a glance.
- 设定数据操作权限(permission)。什么样的角色可以读/写哪些数据，都在这里配置。
- Set data operation permissions (permission). What kind of roles can read/write what data is configured here.
- 设定字段值域能接受的格式(validator)，比如不能为空、需符合指定的正则格式。
- Set the acceptable format (validator) of the field value field. For example, it cannot be empty and must conform to the specified regular format.
- 设置数据的默认值(defaultValue/forceDefaultValue)，比如服务器当前时间、当前用户id等。
- Set the default value of the data (defaultValue/forceDefaultValue), such as the current server time, current user id, etc.
- 设定多个表的字段间映射关系(foreignKey)，将多个表按一个虚拟联表直接查询，大幅简化联表查询。
- Set the mapping relationship (foreignKey) between the fields of multiple tables, and directly query multiple tables as a virtual joint table, which greatly simplifies the joint table query.
- 根据schema自动生成表单维护界面，比如新建页面和编辑页面，自动处理校验规则。
- Automatically generate form maintenance interfaces based on schemas, such as creating new pages and editing pages, and automatically process validation rules.

这些工具大幅减少了开发者的开发工作量和重复劳动。
These tools greatly reduce the developer's development workload and duplication of effort.

**`DB Schema`是`JQL`紧密相关的配套，掌握JQL离不开详读[DB Schema文档](uniCloud/schema)。**
**`DB Schema` is closely related to `JQL`. Mastering JQL is inseparable from reading [DB Schema document](uniCloud/schema). **

**下面示例中使用了注释，实际使用时schema是一个标准的json文件不可使用注释。**完整属性参考[schema字段](https://uniapp.dcloud.net.cn/uniCloud/schema?id=segment)
**Comments are used in the example below. In actual use, the schema is a standard json file and cannot use comments. **Full attribute reference [schema field](https://uniapp.dcloud.net.cn/uniCloud/schema?id=segment)

```js
{
  "bsonType": "object", // 表级的类型，固定为object
  "required": ['book', 'quantity'], // 新增数据时必填字段
  "permission": { // 表级权限
    "read": true, // 读
    "create": false, // 新增
    "update": false, // 更新
    "delete": false, // 删除
  },
  "properties": { // 字段列表，注意这里是对象
    "book": { // 字段名book
      "bsonType": "string", // 字段类型
      "permission": { // 字段权限
        "read": true, // 字段读权限
        "write": false, // 字段写权限
      },
      "foreignKey": "book._id" // 其他表的关联字段
    },
    "quantity": {
      "bsonType": "int"
    }
  }
}
```

### permission@permission

`DB Schema`中的数据权限配置功能非常强大，请详读[DB Schema的数据权限控制](uniCloud/schema?id=permission)
The data permission configuration function in `DB Schema` is very powerful, please read [Data Permission Control of DB Schema](uniCloud/schema?id=permission)

在配置好`DB Schema`的权限后，JQL的查询写法，尤其是非`JQL`的聚合查询写法有些限制，具体如下：
After configuring the permissions of `DB Schema`, the query writing method of JQL, especially the aggregation query writing method of non-`JQL`, has some restrictions, as follows:
- 不使用聚合时collection方法之后需紧跟一个where方法，这个where方法内传入的条件必须满足权限控制规则
- When aggregation is not used, the collection method needs to be followed by a where method. The conditions passed in the where method must meet the permission control rules
- 使用聚合时aggregate方法之后需紧跟一个match方法，这个match方法内的条件需满足权限控制规则
- When using aggregation, the aggregate method needs to be followed by a match method, and the conditions in this match method must meet the permission control rules
- 使用lookup时只可以使用拼接子查询的写法（let+pipeline模式），做这个限制主要是因为需要确保访问需要lookup的表时也会传入查询条件，即pipeline参数里面`db.command.pipeline()`之后的match方法也需要像上一条里面的match一样限制
- When using lookup, you can only use spliced sub-query (let+pipeline mode). This restriction is mainly because it is necessary to ensure that the query conditions are also passed in when accessing the table that requires lookup, that is, `db.command.pipeline in the pipeline parameter The match method after ()` also needs to be restricted like the match in the previous one
- 上面用于校验权限的match和where后的project和field是用来确定本次查询需要访问什么字段的（如果没有将会认为是在访问所有字段），访问的字段列表会用来确认使用那些字段权限校验。这个位置的project和field只能使用白名单模式
- The project and field after the match and where used to verify the permissions above are used to determine which fields need to be accessed in this query (if not, it will be considered to be accessing all fields), and the accessed field list will be used to confirm the use of Those field permission checks. The project and field in this position can only use the whitelist mode
- 上面用于校验权限的match和where内如果有使用`db.command.expr`，那么在进行权限校验时expr方法内部的条件会被忽略，整个expr方法转化成一个不与任何条件产生交集的特别表达式，具体表现请看下面示例
- If `db.command.expr` is used in the match and where used to verify permissions above, then the conditions inside the expr method will be ignored during permission verification, and the entire expr method will be converted into a method that does not generate any conditions. A special expression for intersection, see the example below for specific performance

**schema内permission配置示例**
**schema permission configuration example**

```js
// order表schema
// order table schema
{
  "bsonType": "object", // 表级的类型，固定为object
  "required": ['book', 'quantity'], // 新增数据时必填字段
  "permission": { // 表级权限
    "read": "doc.uid == auth.uid", // 每个用户只能读取用户自己的数据。前提是要操作的数据doc，里面有一个字段存放了uid，即uni-id的用户id。（不配置时等同于false）
    "create": false, // 禁止新增数据记录（不配置时等同于false）
    "update": false, // 禁止更新数据（不配置时等同于false）
    "delete": false, // 禁止删除数据（不配置时等同于false）
	"count": false, // 禁止对本表进行count计数
  },
  "properties": { // 字段列表，注意这里是对象
    "secret_field": { // 字段名
      "bsonType": "string", // 字段类型
      "permission": { // 字段权限
        "read": false, // 禁止读取secret_field字段的数据
        "write": false // 禁止写入（包括更新和新增）secret_field字段的数据，父级节点存在false时这里可以不配
      }
    },
    "uid":{
      "bsonType": "string", // 字段类型
      "foreignKey": "uni-id-users._id"
    },
    "book_id": {
      "bsonType": "string", // 字段类型
      "foreignKey": "book._id"
    }
  }
}
```

```js
// book表schema
// book table schema
{
  "bsonType": "object",
  "required": ['book', 'quantity'], // 新增数据时必填字段
  "permission": { // 表级权限
    "read": "doc.status == 'OnSell'" // 允许所有人读取状态是OnSell的数据
  },
  "properties": { // 字段列表，注意这里是对象
    "title": {
      "bsonType": "string"
    },
    "author": {
      "bsonType": "string"
    },
    "secret_field": { // 字段名
      "bsonType": "string", // 字段类型
      "permission": { // 字段权限
        "read": false, // 禁止读取secret_field字段的数据
        "write": false // 禁止写入（包括更新和新增）secret_field字段的数据
      }
    }
  }
}
```

**请求示例**
**Request example**

```js
const db = uniCloud.database()
const dbCmd = db.command
const $ = dbCmd.aggregate
db.collection('order')
  .where('uid == $env.uid && book_id.status == "OnSell"')
  .field('uid,book_id{title,author}')
  .get()
```

在进行数据库操作之前，JQL会使用permission内配置的规则对客户端操作进行一次校验，如果本次校验不通过还会通过数据库查询再进行一次校验
Before performing the database operation, JQL will use the rules configured in the permission to verify the client operation once. If the verification fails this time, it will perform another verification through the database query.

例1：
Example 1:

```js
// 数据库内news表有以下数据
// The news table in the database has the following data
{
  _id: "1",
  user_id: "uid_1",
  title: "abc"
}
```

```js
// news表对应的schema内做如下配置
// Do the following configuration in the schema corresponding to the news table
{
  "bsonType": "object",
  "permission": { // 表级权限
    "read": true,
    "update": "doc.user_id == auth.uid" // 只允许修改自己的数据
  },
  "properties": {
    "user_id": {
      "bsonType": "string"
    },
    "title": {
      "bsonType": "string"
    }
  }
}
```

```js
// 用户ID为uid_1的用户在客户端使用如下操作
// The user whose user ID is uid_1 uses the following operations on the client side
db.collection('news').doc('1').update({
  title: 'def'
})
```

此时客户端条件里面只有`doc._id == 1`，schema内又限制的`doc.user_id == auth.uid`，所以第一次预校验无法通过，会进行一次查库校验判断是否有权限进行操作。发现auth.uid确实和doc.user_id一致，上面的数据库操作允许执行。
At this time, there is only `doc._id == 1` in the client condition, and `doc.user_id == auth.uid` is limited in the schema, so the first pre-verification cannot pass, and a database check will be performed. Whether you have permission to operate. It is found that auth.uid is indeed consistent with doc.user_id, and the above database operations are allowed to be performed.

例2：
Example 2:

```js
// 数据库内goods表有以下数据
// The goods table in the database has the following data
{
  _id: "1",
  name: "n1",
  status: 1
}
{
  _id: "2",
  name: "n2",
  status: 2
}
{
  _id: "3",
  name: "n3",
  status: 3
}
```

```js
// news表对应的schema内做如下配置
// Do the following configuration in the schema corresponding to the news table
{
  "bsonType": "object",
  "permission": { // 表级权限
    "read": "doc.status > 1",
  },
  "properties": {
    "name": {
      "bsonType": "string"
    },
    "status": {
      "bsonType": "int"
    }
  }
}
```

```js
// 用户在客户端使用如下操作，可以通过第一次校验，不会触发查库校验
// The user can use the following operations on the client side to pass the first verification without triggering the database check
db.collection('goods').where('status > 1').get()

// 用户在客户端使用如下操作，无法通过第一次校验，会触发一次查库校验（原理大致是使用name == "n3" && status <= 1作为条件进行一次查询，如果有结果就认为没有权限访问，了解即可，无需深入）
// If the user uses the following operations on the client side and fails to pass the first verification, a database check will be triggered (the principle is roughly to use name == "n3" && status <= 1 as a condition to perform a query, if there is a result It is considered that there is no permission to access, just understand, no need to go deep)
db.collection('goods').where('name == "n3"').get()

// 用户在客户端使用如下操作，无法通过第一次校验，会触发一次查库校验，查库校验也会无法通过
// If the user uses the following operations on the client side and fails to pass the first verification, a database check will be triggered, and the database check will also fail.
db.collection('goods').where('name == "n1"').get()
```


## action@action

**注意：**

> 从HBuilderX 3.6.11开始，推荐使用[数据库触发器](jql-schema-ext.md)替代action云函数。以下内容仅为向下兼容保留

action的作用是在执行前端发起的数据库操作时，额外触发一段云函数逻辑。它是一个可选模块。action是运行于云函数内的，可以使用云函数内的所有接口。
The role of action is to trigger an additional piece of cloud function logic when executing a database operation initiated by the front end. It is an optional module. Actions run in cloud functions and can use all interfaces in cloud functions.

当一个前端操作数据库的方式不能完全满足需求，仍然同时需要在云端再执行一些云函数时，就在前端发起数据库操作时，通过`db.action("someactionname")`方式要求云端同时执行这个叫someactionname的action。还可以在权限规则内指定某些操作必须使用指定的action，比如`"action in ['action-a','action-b']"`，来达到更灵活的权限控制。
When a front-end way of operating the database cannot fully meet the requirements, and still needs to execute some cloud functions in the cloud, when the front-end initiates database operations, the cloud is required to execute this call at the same time through the `db.action("someactionname")` method. The action of someactionname. You can also specify that certain actions must use the specified action in the permission rule, such as `"action in ['action-a','action-b']"`, to achieve more flexible permission control.

**注意action方法是db对象的方法，只能跟在db后面，不能跟在collection()后面**
**Note that the action method is a method of the db object, which can only follow db, not collection()**
- 正确：`db.action("someactionname").collection('table1')`
- Correct: `db.action("someactionname").collection('table1')`
- 错误：`db.collection('table1').action("someactionname")`
- Error: `db.collection('table1').action("someactionname")`

**尽量不要在action中使用全局变量，如果一定要用请务必确保自己已经阅读并理解了[云函数的启动模式](uniCloud/cf-functions.md?id=launchtype)**
**Try not to use global variables in actions. If you must use them, make sure you have read and understood the [Launch Mode of Cloud Functions](uniCloud/cf-functions.md?id=launchtype)**

如果使用`<unicloud-db>组件`，该组件也有action属性，设置action="someactionname"即可。
If you use the `<unicloud-db> component`, this component also has an action attribute, and you can set action="someactionname".
```html
<unicloud-db ref="udb" collection="table1" action="someactionname" v-slot:default="{data,pagination,loading,error}">
```

action支持一次使用多个，比如使用`db.action("action-a,action-b")`，其执行流程为`action-a.before->action-b.before->执行数据库操作->action-b.after->action-a.after`。在任一before环节抛出错误直接进入after流程，在after流程内抛出的错误会被传到下一个after流程。
Action supports multiple use at a time, such as using `db.action("action-a, action-b")`, and its execution flow is `action-a.before->action-b.before->execute database operation-> action-b.after->action-a.after`. Throwing an error in any before link directly enters the after process, and the error thrown in the after process will be passed to the next after process.

action是一种特殊的云函数，它不占用服务空间的云函数数量。
Action is a special cloud function that does not occupy the number of cloud functions in the service space.

**新建action**
**New action**

![新建action](https://web-assets.dcloud.net.cn/unidoc/zh/create-client-actions.jpg)

每个action在uni-clientDB-actions目录下存放一个以action名称命名的js文件。
Each action stores a js file named after the action in the uni-clientDB-actions directory.

在这个js文件的代码里，包括before和after两部分，分别代表JQL具体操作数据库前和后。
In the code of this js file, there are two parts, before and after, which respectively represent before and after the specific operation of the database by JQL.

- before在数据库操作执行前触发，before里的代码执行完毕后再开始操作数据库。before的常用用途：
- before is triggered before the database operation is executed, and the code in before is executed before starting to operate the database. Common uses of before:
	* 对前端传入的数据进行二次处理
	* Secondary processing of the incoming data from the front end
	* 在此处开启数据库事务，万一操作数据库失败，可以在after里回滚
	* Open the database transaction here, in case the operation of the database fails, you can roll it back in after
	* 使用throw阻止运行
	* Use throw to prevent running
	* 如果权限或字段值域校验不想配在schema和validateFunction里，也可以在这里做校验
	* If the permission or field value range verification does not want to be configured in the schema and validateFunction, you can also do the verification here
	
- after在数据库操作执行后触发，JQL操作数据库后触发after里的代码。after的常用用途：
- after is triggered after the database operation is executed, and the code in after is triggered after JQL operates the database. Common uses of after:
	* 对将要返回给前端的数据进行二次处理
	* Secondary processing of the data to be returned to the front end
	* 也可以在此处处理错误，回滚数据库事务
	* Can also handle errors here, rollback database transactions
	* 对数据库进行二次操作，比如前端查询一篇文章详情后，在此处对文章的阅读数+1。因为permission里定义，一般是要禁止前端操作文章的阅读数字段的，此时就应该通过action，在云函数里对阅读数+1
	* Perform secondary operations on the database. For example, after the front-end queries the details of an article, the number of articles read here is +1. Because of the definition in the permission, it is generally necessary to prohibit the front-end operation of the reading number field of the article. At this time, you should pass the action and add 1 to the reading number in the cloud function.

示例：
Example:

```js
// 客户端发起请求，给todo表新增一行数据，同时指定action为add-todo
// The client initiates a request, adds a row of data to the todo table, and specifies the action as add-todo
const db = uniCloud.database()
db.action('add-todo') //注意action方法是db的方法，只能跟在db后面，不能跟在collection()后面
  .collection('todo')
  .add({
    title: 'todo title'
  })
  .then(res => {
    console.log(res)
  }).catch(err => {
    console.error(err)
  })
```

```js
// 一个action文件示例 uni-clientDB-actions/add-todo.js
// An example action file uni-clientDB-actions/add-todo.js
module.exports = {
  // 在数据库操作之前执行
  // execute before database operation
  before: async(state,event)=>{
    // state为当前数据库操作状态其格式见下方说明
    // state is the current database operation state and its format is described below
    // event为传入云函数的event对象
    // event is the event object passed into the cloud function
    
    // before内可以操作state上的newData对象对数据进行修改，比如：
    // Before, you can manipulate the newData object on the state to modify the data, for example:
    state.newData.create_time = Date.now()
    // 指定插入或修改的数据内的create_time为Date.now()
    // Specify the create_time in the inserted or modified data as Date.now()
    // 执行了此操作之后实际插入的数据会变成 {title: 'todo title', create_time: xxxx}
    // After doing this, the actual inserted data will become {title: 'todo title', create_time: xxxx}
    // 实际上，这个场景，有更简单的实现方案：在db schema内配置defaultValue或者forceDefaultValue，即可自动处理新增记录使用当前服务器时间
    // In fact, there is a simpler implementation scheme for this scenario: configure defaultValue or forceDefaultValue in the db schema to automatically process new records and use the current server time
  },
  // 在数据库操作之后执行
  // Execute after database operation
  after:async (state,event,error,result)=>{
    // state为当前数据库操作状态其格式见下方说明
    // state is the current database operation state and its format is described below
    // event为传入云函数的event对象
    // event is the event object passed into the cloud function
    // error为执行操作的错误对象，如果没有错误error的值为null
    // error is the error object to perform the operation, if there is no error, the value of error is null
    // result为执行command返回的结果
    // result is the result returned by executing command
    
    if(error) {
      throw error
    }
    
    // after内可以对result进行额外处理并返回
    // After can perform additional processing on result and return
    result.msg = 'hello'
    return result
  }
}
```

**state**参数说明
**state** parameter description

```js
// state参数格式如下
// The format of the state parameter is as follows
{
  command: {
    // getMethod('where') 获取所有的where方法，返回结果为[{$method:'where',$param: [{a:1}]}]
    // getMethod('where') Get all where methods, the return result is [{$method:'where',$param: [{a:1}]}]
    getMethod,
    // getParam({name:'where',index: 0}) 获取第1个where方法的参数，结果为数组形式，例：[{a:1}]
    // getParam({name:'where',index: 0}) Get the parameter of the first where method, the result is in the form of an array, for example: [{a:1}]
    getParam,
    // setParam({name:'where',index: 0, param: [{a:1}]}) 设置第1个where方法的参数，调用之后where方法实际形式为：where({a:1})
    // setParam({name:'where',index: 0, param: [{a:1}]}) Set the parameters of the first where method. After calling, the actual form of the where method is: where({a:1} )
    setParam
  },
  auth: {
    uid, // 用户ID，如果未获取或者获取失败uid值为null
    role, // 通过uni-id获取的用户角色，需要使用1.1.9以上版本的uni-id，如果未获取或者获取失败role值为[]
    permission // 通过uni-id获取的用户权限，需要使用1.1.9以上版本的uni-id，如果未获取或者获取失败permission值为[]，注意登录时传入needPermission才可以获取permission，请参考 https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=rbac
  },
  // 事务对象，如果需要用到事务可以在action的before内使用state.transaction = await db.startTransaction()传入
  // Transaction object, if you need a transaction, you can use state.transaction = await db.startTransaction() in the before action of the action
  transaction,
  // 更新或新增的数据
  // updated or new data
  newData,
  // 访问的集合
  // Accessed collection
  collection,
  // 操作类型，可能的值'read'、'create'、'update'、'delete'
  // Operation type, possible values 'read', 'create', 'update', 'delete'
  type
}
```

**注意**

- 如需在before和after内传参，建议直接在state上挂载。但是切勿覆盖上述属性
- action上传后可能需要一段时间才会在云端生效，通常是3分钟左右

## JQL依赖公共模块和扩展库@deps-of-jql

相关文档移至：[schema扩展依赖公共模块和扩展库](jql-schema-ext.md#module-and-extension)