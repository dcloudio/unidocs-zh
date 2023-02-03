## 基础概念@base
## Basic Concept @base

`uniCloud`提供了一个 JSON 格式的文档型数据库。顾名思义，数据库中的每条记录都是一个 JSON 格式的文档。
`uniCloud` provides a document database in JSON format. As the name suggests, each record in the database is a JSON-formatted document.

它是 nosql 非关系型数据库，如果您之前熟悉 sql 关系型数据库，那么两者概念对应关系如下表：
It is a nosql non-relational database. If you are familiar with sql relational database before, the corresponding relationship between the two concepts is as follows:

|关系型			|JSON 文档型												|
|Relational |JSON Document |
|:-				|:-															|
|数据库 database|数据库 database											|
|database database|database database|
|表 table		|集合 collection。但行业里也经常称之为“表”。无需特意区分	|
|table table |collection collection. But it is also often referred to as a "table" in the industry. No need to distinguish |
|行 row			|记录 record / doc											|
|row row |record record / doc |
|字段 column / field	|字段 field													|
|Field column / field |Field field |
|使用sql语法操作|使用MongoDB语法或jql语法操作									|
|Use sql syntax |Use MongoDB syntax or jql syntax |

- 一个`uniCloud`服务空间，有且只有一个数据库；
- an `uniCloud` service space with one and only one database;
- 一个数据库可以有多个表；
- A database can have multiple tables;
- 一个表可以有多个记录；
- A table can have multiple records;
- 一个记录可以有多个字段。
- A record can have multiple fields.

例如，数据库中有一个表，名为user，存放用户信息。表user的数据内容如下：
For example, there is a table in the database, named user, which stores user information. The data content of table user is as follows:

```json
{"name":"张三","tel":"13900000000"}
{"name":"李四","tel":"13911111111"}
```

上述数据中，每行数据表示一个用户的信息，被称之为“记录(record/doc)”。name和tel称之为“字段(field)”。而“13900000000”则是第一条记录的字段tel的值。
In the above data, each row of data represents information of one user, which is called "record/doc". name and tel are called "fields". And "13900000000" is the value of the field tel of the first record.

每行记录，都是一个完整的json文档，获取到记录后可以使用常规json方式操作。但表并非json文档，表是多个json文档的汇总，获取表需要使用专门的API。
Each row of records is a complete json document. After getting the records, you can use the normal json method to operate. However, a table is not a json document. A table is a summary of multiple json documents. To obtain a table, a dedicated API is required.

与关系型数据库的二维表格式不同，json文档数据库支持不同记录拥有不同的字段、支持多层嵌套数据。
Different from the two-dimensional table format of the relational database, the json document database supports different records with different fields and supports multiple layers of nested data.

仍然以user表举例，要在数据库中存储每个人的每次登录时间和登录ip，则变成如下：
Still taking the user table as an example, to store each login time and login ip of each person in the database, it becomes as follows:

```json
{
	"name":"张三","tel":"13900000000",
	"login_log":[
		{"login_date":1604186605445,"login_ip":"192.168.1.1"},
		{"login_date":1604186694137,"login_ip":"192.168.1.2"}
	]
}
{"name":"李四","tel":"13911111111"}
```

上述数据表示张三登录了2次，login_date里的值是时间戳(timestamp)格式，在数据库内timestamp就是一个数字类型的数据。而李四没有登录过。
The above data indicates that Zhang San has logged in twice, the value in login_date is in timestamp format, and timestamp is a numeric data in the database. And Li Si has never logged in.

可以看出json文档数据库相对于关系型数据库的灵活，李四可以没有login_log字段，也可以有这个字段但登录次数记录与张三不同。
It can be seen that the json document database is more flexible than the relational database. Li Si may not have the login_log field, or it may have this field, but the number of login records is different from that of Zhang San.

_此处仅为举例，实际业务中，登录日志单独存放在另一个表更合适_
_This is just an example. In actual business, it is more appropriate to store the login log in another table separately_

对于初学者，如果不了解数据库设计，可以参考[opendb](opendb.md)，已经预置了大量常见的数据库设计。
For beginners, if you do not understand database design, you can refer to [opendb](opendb.md), which has preset a large number of common database designs.

对于不熟悉传统数据库，但掌握json的js工程师而言，uniCloud的云数据库更亲切，没有传统数据库高昂的学习成本。
For js engineers who are not familiar with traditional databases but master json, the cloud database of uniCloud is more friendly and does not have the high learning cost of traditional databases.

在uniCloud web控制台新建表时，在下面的模板中也可以选择各种`opendb`表模板，直接创建。
When creating a new table in the uniCloud web console, you can also select various `opendb` table templates from the templates below and create them directly.

uniCloud同时支持阿里云和腾讯云，它们的数据库大体相同，有细微差异。阿里云的数据库是mongoDB4.0，腾讯云则使用自研的文档型数据库（兼容mongoDB 4.0版本）。uniCloud基本抹平了不同云厂商的差异，有差异的部分会在文档中单独标注。
uniCloud supports both Alibaba Cloud and Tencent Cloud, and their databases are roughly the same, with minor differences. Alibaba Cloud's database is mongoDB4.0, while Tencent Cloud uses a self-developed document database (compatible with mongoDB 4.0 version). uniCloud basically smoothes out the differences between different cloud vendors, and the differences will be marked separately in the document.

## 创建第一个表@create-collection
## Create the first table @create-collection

1. 打开 uniCloud web控制台 [https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/)
1. Open the uniCloud web console [https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/)

2. 创建或进入一个已存在的服务空间，选择 云数据库->云数据库，创建一个新表
2. Create or enter an existing service space, select Cloud Database -> Cloud Database, and create a new table

比如我们创建一个简历表，名为 `resume`。点击上方右侧的 创建 按钮即可。
For example, let's create a resume table called `resume`. Click the Create button on the right above.

![](https://web-assets.dcloud.net.cn/unidoc/zh/createtablebywebconsole2.jpg)

新建表时，支持选择现成的 [opendb](opendb.md) 表模板，选择一个或多个模板表，可以点击右下方按钮创建。
When creating a new table, you can select the ready-made [opendb](opendb.md) table template, select one or more template tables, and click the button at the bottom right to create.

创建表一共有3种方式：
There are 3 ways to create a table:
1. 在web控制台创建
1. Create in the web console
2. 在HBuilderX中，项目根目录/uniCloud/database点右键新建schema，上传时创建
2. In HBuilderX, right-click on the project root directory /uniCloud/database to create a new schema, which is created when uploading
3. 在代码中也可以创建表，但不推荐使用，[见下](?id=createCollection)
3. It is also possible to create tables in code, but it is not recommended, [see below](?id=createCollection)

## 数据表的3个组成部分
## 3 components of the data table

每个数据表，包含3个部分：
Each data sheet contains 3 sections:
- data：数据内容
- data: data content
- index：索引
- index: index
- schema：数据表格式定义
- schema: data table format definition

在uniCloud的web控制台可以看到一个数据表的3部分内容。
Three parts of a data table can be seen in the uniCloud web console.

### 数据内容@dbdata
### Data content @dbdata

data，就是存放的数据记录(record)。里面是一条一条的json文档。
data is the stored data record (record). Inside is a json document one by one.

record可以增删改查、排序统计。后续有API介绍。
Records can be added, deleted, modified, searched, sorted and counted. The API will be introduced later.

可以先在 web控制台 为之前的 `resume` 表创建一条记录。
You can first create a record for the previous `resume` table in the web console.

输入一个json
enter a json
```json
{
    "name": "张三",
    "birth_year": 2000,
    "tel": "13900000000",
    "email": "zhangsan@zhangsan.com",
    "intro": "擅于学习，做事严谨"
}
```

![](https://web-assets.dcloud.net.cn/unidoc/zh/newrecordebywebconsole.jpg)

创建一条新记录，是不管在web控制台创建，还是通过API创建，每条记录都会自带一个`_id`字段用以作为该记录的唯一标志。
Create a new record, whether it is created in the web console or through the API, each record will have a `_id` field that is used as the unique identifier of the record.

`_id`字段是每个数据表默认自带且不可删除的字段。同时，它也是数据表的索引。
The `_id` field is a default and non-deletable field in each data table. At the same time, it is also the index of the data table.

![](https://web-assets.dcloud.net.cn/unidoc/zh/recordcontent.jpg)

阿里云使用的是标准的mongoDB，`_id`是自增的，后创建的记录的`_id`总是大于先生成的`_id`。传统数据库的自然数自增字段在多物理机的大型数据库下很难保持同步，大型数据库均使用`_id`这种长度较长、不会重复且仍然保持自增规律的方式。
Alibaba Cloud uses standard mongoDB, `_id` is self-incrementing, and the `_id` of the record created later is always greater than the `_id` generated earlier. The natural number auto-increment fields of traditional databases are difficult to keep synchronized in large databases with multiple physical machines. Large databases use `_id`, which is a long, non-repetitive method that still maintains the auto-increment rule.

**腾讯云使用的是兼容mongoDB的自研数据库，`_id`并非自增**
**Tencent Cloud uses a self-developed database compatible with mongoDB, and `_id` is not self-incrementing**

插入/导入数据时也可以自行指定`_id`而不使用自动生成的`_id`，这样可以很方便的将其他数据库的数据迁移到uniCloud云数据库。
When inserting/importing data, you can also specify `_id` by yourself instead of using the automatically generated `_id`, so that data from other databases can be easily migrated to the uniCloud cloud database.

### 数据库索引@dbindex
### Database index @dbindex

所谓索引，是指在数据表的众多字段中挑选一个或多个字段，让数据库引擎优先处理这些字段。
The so-called index refers to selecting one or more fields among the many fields of the data table, and letting the database engine process these fields first.

设置为索引的字段，在通过该字段查询(where)或排序(orderBy)时可以获得更快的查询速度。
A field set as an index can obtain faster query speed when querying (where) or sorting (orderBy) by this field.

但设置过多索引也不合适，会造成数据新增和删除变慢。
However, it is not appropriate to set too many indexes, which will slow down data addition and deletion.

新建的表，默认只有一个索引`_id`。
The newly created table has only one index `_id` by default.

一个数据表可以有多个字段被设为索引。
A data table can have multiple fields set as indexes.

索引分唯一型和非唯一型。
There are unique and non-unique indexes.

唯一型索引要求整个数据表多个记录的该字段的值不能重复。比如`_id`就是唯一型索引。
Unique index requires that the value of this field in multiple records of the entire data table cannot be repeated. For example `_id` is a unique index.

假使有2个人都叫“张三”，那么他们在user数据表里的区分就是依靠不同的`_id`来区分。
If there are two people named "Zhang San", then they are distinguished in the user data table by different `_id`.

如果我们要根据name字段来查询，为了提升查询速度，此时可以把name字段设为非唯一索引。
If we want to query based on the name field, in order to improve the query speed, the name field can be set as a non-unique index at this time.

索引内容较多，还有“组合索引”、“稀疏索引”、“地理位置索引”、“TTL索引”等概念。有单独的文档详细讲述索引，另见：[数据库索引](uniCloud/db-index.md)
There are many index contents, and there are concepts such as "combined index", "sparse index", "geolocation index", and "TTL index". There is a separate document detailing indexes, see also: [Database Index](uniCloud/db-index.md)


**在web控制台添加上述索引**
**Add the above index in the web console**

![](https://web-assets.dcloud.net.cn/unidoc/zh/composed-index.jpg)

**注意**
**Notice**
- 如果记录中已经存在多个记录某字段相同的情况，那么将该字段设为唯一型索引会失败。
- If there are multiple records with the same field in the record, setting the field as a unique index will fail.
- 如果已经设置某字段为唯一索引，在新增和修改记录时如果该字段的值之前在其他记录已存在，会失败。
- If a field has been set as a unique index, when adding and modifying records, if the value of the field already exists in other records, it will fail.
- 假如记录中不存在某个字段，则对索引字段来说其值默认为 null，如果该索引字段设为唯一型索引，则不允许存在两个或以上的该字段为null或不存在该字段的记录。此时需要设置稀疏索引来解决多个null重复的问题
- If a field does not exist in the record, the value of the index field is null by default. If the index field is set as a unique index, it is not allowed to have two or more fields that are null or do not exist. record of. At this point, you need to set a sparse index to solve the problem of multiple null repetitions


### 数据表格式定义@dbschema
### Data table format definition @dbschema

`DB Schema`是表结构描述。描述数据表有哪些字段、值域类型是什么、是否必填、数据操作权限等很多内容。
`DB Schema` is a table structure description. Describe what fields the data table has, what the value field type is, whether it is required, data operation permissions, and many more.

因为 MongoDB 的灵活性，理论上`DB Schema`不是必须的，使用传统 MongoDB API 操作数据库不需要`DB Schema`。
Because of the flexibility of MongoDB, `DB Schema` is theoretically not necessary, and `DB Schema` is not required to operate the database using the traditional MongoDB API.

但如果使用 JQL，那`DB Schema`就是必须的。
But if you use JQL, then `DB Schema` is a must.

`DB Schema`涉及内容较多，另见文档：[https://uniapp.dcloud.io/uniCloud/schema](uniCloud/schema)
`DB Schema` involves more content, see also the document: [https://uniapp.dcloud.io/uniCloud/schema](uniCloud/schema)


## API操作数据库的方式@db-operation-type
## How the API operates the database @db-operation-type

uniCloud 的云数据库有多种操作方式。
The cloud database of uniCloud has various operation modes.
- 支持在云函数操作，也支持在客户端操作。
- Supports cloud function operations and client operations.
- 支持使用传统MongoDB语法操作，也支持JQL语法操作。
- Supports operations using traditional MongoDB syntax, as well as JQL syntax operations.

uniCloud 默认推荐使用 JQL 语法操作数据库，它是一种更简单易用、对js开发者更友好的、开发效率更高的数据库操作语法。[详见](jql.md)
uniCloud recommends using the JQL syntax to operate the database by default, which is a database operation syntax that is easier to use, more friendly to js developers, and more efficient in development. [See details](jql.md)

不管在云函数中还是在uni-app客户端中，均支持JQL。
JQL is supported both in cloud functions and in the uni-app client.

同时 uniCloud 保留了在云函数中使用传统 MongoDB 的 nodejs API 操作云数据库。
At the same time, uniCloud retains the use of traditional MongoDB's nodejs API to operate cloud databases in cloud functions.

|					|运行在云端	|运行在客户端	|支持 DB Schema	|
| |Runs on the cloud |Runs on the client |Supports DB Schema |
|--					|--			|--				|--				|
|JQL云函数			|√			|√				|√				|
|JQL Cloud Function |√ |√ |√ |
|传统MongoDB客户端	|√			|X				|X				|
|Traditional MongoDB Client |√ |X |X |

关于几种操作数据库方式的选择：
There are several options for operating the database:
1. 优先使用客户端操作数据库（称为[clientDB](uniCloud/clientdb.md)）
1. Use the client-side operation database first (called [clientDB](uniCloud/clientdb.md))
	
	传统开发中，其实大多数服务器接口开发，就是检验下前端数据和身份的合法性，然后写个SQL操作下数据库，返回JSON给前端。其实很无聊。
	In traditional development, in fact, most server interface development is to verify the legitimacy of front-end data and identity, and then write SQL to operate the database and return JSON to the front-end. It's actually quite boring.
	
	clientDB最大的好处就是不用写服务端代码，客户端直接操作数据库。因为uniCloud提供了[DB Schema](schema.md)和[uni-id](uni-id-summary.md)，可以直接控制数据库的内容和权限校验。
	The biggest advantage of clientDB is that the client directly operates the database without writing server-side code. Because uniCloud provides [DB Schema](schema.md) and [uni-id](uni-id-summary.md), you can directly control the content of the database and check permissions.
	
	clientDB同时支持`action云函数`作为补充，当发起一个客户端操作云数据库的请求时，可以同时触发一个`action云函数`，在云端对数据库操作进行前置或后置处理。
	clientDB also supports `action cloud function` as a supplement. When a client request to operate the cloud database is initiated, an `action cloud function` can be triggered at the same time to pre- or post-process the database operation in the cloud.
	
	如下场景不适用clientDB：
	The following scenarios are not applicable to clientDB:
	- 相关数据库操作逻辑不适合暴露在前端，比如抽奖
	- Relevant database operation logic is not suitable to be exposed on the front end, such as lottery
	- 注册、修改密码等操作password类型数据（password类型不会传给前端）的情况。一般情况下开发者不涉及相关问题。因为注册、修改密码等账户管理相关，官方已提供了[uni-id-pages](uni-id-pages.md)，里面有uni-id-co云对象。所以开发者无需自己编写相关逻辑，直接用这个插件就好了。
	- Operation of password type data (password type will not be passed to the front end) such as registration, password modification, etc. Under normal circumstances, developers do not involve related issues. Due to account management related to registration and password modification, the official has provided [uni-id-pages](uni-id-pages.md), which contains uni-id-co cloud objects. Therefore, developers do not need to write the relevant logic themselves, just use this plug-in directly.
	- 三方服务器回调。在登录、支付等涉及隐私的地方较常见。比如从微信服务器获取用户手机号，只支持云端获取，获取后要入库保存
	- 3rd party server callback. It is more common in places involving privacy such as login and payment. For example, the user's mobile phone number is obtained from the WeChat server, only the cloud is supported, and after the acquisition, it must be stored in the warehouse
	
2. 其次使用云函数的JQL扩展库来操作数据库
2. Second, use the JQL extension library of cloud functions to operate the database
	
	对于clientDB不适应的场景，推荐在云函数或云对象中使用JQL。
	For scenarios where clientDB is not suitable, it is recommended to use JQL in cloud functions or cloud objects.
	
	目前云函数中JQL不适用的场景：使用 set 操作符动态修改字段名称（不是字段值）。这个场景常规业务不涉及，未来JQL可能会完善并支持这个场景。
	Scenarios where JQL is currently not applicable in cloud functions: use the set operator to dynamically modify field names (not field values). This scenario does not involve regular business, and JQL may improve and support this scenario in the future.
	
3. 除非开发者原本就对 nodejs 操作 MongoDB 非常熟悉，且需要使用 set 操作符动态修改字段名等，否则不推荐使用传统MongoDB写法。
3. Unless the developer is very familiar with nodejs operating MongoDB, and needs to use the set operator to dynamically modify field names, etc., the traditional MongoDB writing method is not recommended.

	MongoDB API操作数据库，不能在客户端操作、不支持 DB Schema，不支持HBuilderX的jql查询器，不能在客户端的代码提示中提示数据库的表名、字段。
	The MongoDB API operates the database, cannot operate on the client, does not support DB Schema, does not support the jql query of HBuilderX, and cannot prompt the database table name and fields in the client code prompt.

不管使用哪种方法，都有很多公共的概念或功能。本文档将讲述这些公共的内容。
Regardless of which method is used, there are many common concepts or functions. This document will describe these common content.

同时左侧导航有三种方法的专项链接，描述它们各自特有的功能。
At the same time, there are special links for the three methods in the left navigation, describing their unique functions.
- [客户端操作数据库clientDB](clientdb.md)
- [Client operation database clientDB](clientdb.md)
- [云函数内使用JQL语法操作数据库](jql-cloud.md)
- [Use JQL syntax to operate database in cloud function](jql-cloud.md)
- [云函数使用传统MongoDB语法操作数据库](cf-database.md)
- [Cloud functions use traditional MongoDB syntax to operate the database](cf-database.md)

## 获取数据库对象的API@database
## Get API@database of database objects

想要通过代码操作数据库，第一步要获取服务空间里的数据库对象。
To operate the database through code, the first step is to obtain the database object in the service space.

```js
const db = uniCloud.database(); //代码块为cdb
```

js中敲下代码块`cdb`，即可快速输入上述代码。
Type the code block `cdb` in js to quickly enter the above code.

其中，云函数内使用JQL扩展库时，还需要做一个工作，就是指定操作用户身份。[详见](jql-cloud.md?id=use-in-object)
Among them, when using the JQL extension library in the cloud function, there is still another job to be done, which is to specify the operation user identity. [See details](jql-cloud.md?id=use-in-object)

```js
// 云函数中JQL使用示例
// JQL usage example in cloud function
'use strict';
exports.main = async (event, context) => {
	const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云函数的event和context，必传
		event,
		context 
	})
	return {
		dbJQL.collection('book').get() // 直接执行数据库操作
	}
};
```

### 获取其他服务空间数据库实例@init-db
### Get other service space database instance @init-db

如果当前应用仅使用一个服务空间，在HBuilderX中做好服务空间关联即可。获取当前空间的数据库实例时无需传递配置，直接调用database方法默认就是操作关联服务空间的数据库。
If the current application only uses one service space, you can do the service space association in HBuilderX. There is no need to pass the configuration when obtaining the database instance of the current space. By default, calling the database method directly operates the database of the associated service space.

如果应用有连接其他服务空间数据库的需求，可以在获取database实例时传递对应服务空间的配置
If the application needs to connect to other service space databases, it can pass the configuration of the corresponding service space when obtaining the database instance.

> HBuilderX 3.2.11及更高版本支持客户端初始化其他服务空间database实例，此前仅腾讯云云函数环境支持。阿里云云函数环境不支持此用法。
> HBuilderX 3.2.11 and later versions support the client to initialize other service space database instances. Previously, it was only supported by the Tencent Cloud function environment. Alibaba Cloud function environment does not support this usage.

调用`uniCloud.database()`时可以传入对应的服务空间信息（参数同uniCloud.init，参考:[uniCloud.init](uniCloud/init.md?id=init-unicloud)）来获取指定服务空间的database实例。
When calling `uniCloud.database()`, you can pass in the corresponding service space information (parameters are the same as uniCloud.init, refer to: [uniCloud.init](uniCloud/init.md?id=init-unicloud)) to obtain the specified service space database instance.

**注意**
**Notice**

- 云函数环境（仅腾讯云支持）仅能通过init返回同账号下其他的腾讯云服务空间的数据库实例。
- The cloud function environment (only supported by Tencent Cloud) can only return database instances of other Tencent Cloud service spaces under the same account through init.
- 客户端环境（腾讯云阿里云均支持）可以通过init返回本账号下任意云厂商服务空间的数据库实例
- The client environment (supported by Tencent Cloud and Alibaba Cloud) can return the database instance of any cloud vendor's service space under the account through init

**示例**
**Example**

```js
const db = uniCloud.database({
  provider: 'tencent',
  spaceId: 'xxx'
})

db.collection('uni-id-users').get()
```

**参数说明**
**Parameter Description**

|参数名			|类型	|必填	|默认值						|说明																					|
|Parameter Name |Type |Required |Default Value |Description |
|:-:			|:-:	|:-:	|:-:						|:-:																					|
|provider		|String	|是		|-							|aliyun、tencent																		|
|provider		|String	|Yes		|-							|aliyun、tencent																		|
|spaceId		|String	|是		|-							|服务空间ID，**注意是服务空间ID，不是服务空间名称**										|
|spaceId |String |Yes |- |Service space ID, **Note that it is the service space ID, not the service space name** |
|clientSecret	|String	|是		|-							|仅阿里云支持，可以在[uniCloud控制台](https://unicloud.dcloud.net.cn)服务空间列表中查看	|
| clientSecret | String |Yes |- |Only supported by Alibaba Cloud, you can view it in the [uniCloud console](https://unicloud.dcloud.net.cn) service space list |
|endpoint		|String	|否		|`https://api.bspapp.com`	|服务空间地址，仅阿里云支持。阿里云正式版需将此值设为`https://api.next.bspapp.com`															|
| endpoint | String |No |`https://api.bspapp.com` |Service space address, only supported by Alibaba Cloud. The official version of Alibaba Cloud needs to set this value to `https://api.next.bspapp.com` |
 
## 创建集合/表的API@createCollection
## Create collection/table API@createCollection

- 阿里云
- Ali Cloud

调用add方法，给某数据表新增数据记录时，如果该数据表不存在，会自动创建该数据表。如下代码给table1数据表新增了一条数据，如果table1不存在，会自动创建。
When calling the add method to add a data record to a data table, if the data table does not exist, the data table will be created automatically. The following code adds a new piece of data to the table1 data table. If table1 does not exist, it will be created automatically.

```js
const db = uniCloud.database();
db.collection("table1").add({name: 'Ben'})
```

- 腾讯云
- Tencent Cloud

腾讯云提供了专门的创建数据表的API，此API仅支持云函数内运行，不支持clientDB调用。
Tencent Cloud provides a dedicated API for creating data tables. This API only supports running in cloud functions and does not support clientDB calls.

```js
const db = uniCloud.database();
db.createCollection("table1")
```

**注意**
**Notice**

- 如果数据表已存在，腾讯云调用createCollection方法会报错
- If the data table already exists, Tencent Cloud will report an error when calling the createCollection method
- 腾讯云调用collection的add方法不会自动创建数据表，不存在的数据表会报错
- Tencent Cloud will not automatically create a data table when calling the add method of the collection, and an error will be reported if the data table does not exist
- 阿里云没有createCollection方法
- Alibaba Cloud does not have a createCollection method
- **使用代码方式创建的表没有索引、schema，性能和功能都受影响，不建议使用这种方式**
- **The table created by code has no index, schema, performance and function are affected, this method is not recommended**

## 获取集合/数据表对象@collection
## Get collection/datatable object @collection

创建好数据表后，可以通过API获取数据表对象。
After the data table is created, the data table object can be obtained through the API.

```js
const db = uniCloud.database();
// 获取名为 `table1` 数据表的引用
// Get a reference to the data table named `table1`
const resume = db.collection('resume');
```

**集合/数据表 Collection 的方法**
**Methods of Collection/DataTable Collection**

通过 `db.collection(name)` 可以获取指定数据表的引用，在数据表上可以进行以下操作
Through `db.collection(name)`, you can get a reference to the specified data table, and the following operations can be performed on the data table

| 类型		| 接口		| 说明																														|
| Type | Interface | Description |
| --------	| -------	| ----------------------------------------------------------------------------------										|
| 写		| add		| 新增记录（触发请求）																										|
| write | add | add record (trigger request) |
| 计数		| count		| 获取符合条件的记录条数																									|
| Count | count | Get the number of records that meet the conditions |
| 读		| get		| 获取数据表中的记录，如果有使用 where 语句定义查询条件，则会返回匹配结果集 (触发请求)										|
| Read | get | Get the records in the data table, if the query condition is defined using the where statement, the matching result set will be returned (triggering the request) |
| 引用		| doc		| 获取对该数据表中指定 id 的记录的引用																						|
| citations | doc | Get a reference to the record with the specified id in this data table |
| 查询条件	| where		| 通过指定条件筛选出匹配的记录，可搭配查询指令（eq, gt, in, ...）使用														|
| Query conditions | where | Filter out matching records by specifying conditions, which can be used with query commands (eq, gt, in, ...) |
|			| skip		| 跳过指定数量的文档，常用于分页，传入 offset。clientDB组件有封装好的更易用的分页，[另见](uniCloud/uni-clientdb-component)	|
| | skip | Skip the specified number of documents, often used for pagination, pass in offset. The clientDB component has encapsulated easier-to-use pagination, [see also](uniCloud/uni-clientdb-component) |
|			| orderBy	| 排序方式																													|
| | orderBy | Sort By |
|			| limit		| 返回的结果集(文档数量)的限制，有默认值和上限值																			|
| | limit | The limit of the returned result set (number of documents), with default and upper limit values |
|			| field		| 指定需要返回的字段																										|
| | field | Specify the field to be returned |

collection对象的方法可以增和查数据，删和改不能直接操作，需要collection对象通过doc或get得到指定的记录后再调用remove或update方法进行删改。
The methods of the collection object can add and check data, but deletion and modification cannot be directly operated. The collection object needs to obtain the specified record through doc or get, and then call the remove or update method to delete and modify it.

数据操作的API较多，请单独参考文档：
There are many APIs for data manipulation, please refer to the documentation separately:
- [JQL语法操作数据库](jql.md)
- [JQL syntax operation database](jql.md)
- [MongoDB语法操作数据库](cf-database.md)
- [MongoDB syntax operation database](cf-database.md)

**示例**
**Example**

这里我们使用clientDB，实现一个简单的在前端获取刚才输入 resume 表的记录的功能。
Here we use clientDB to implement a simple function of getting the records just entered into the resume table on the front end.
1. 创建一个uni-app项目，开通uniCloud环境，并在uniCloud初始化向导中关联 resume表所在的服务空间；或者使用老项目对uniCloud目录点右键关联服务空间。
1. Create a uni-app project, activate the uniCloud environment, and associate the service space where the resume table is located in the uniCloud initialization wizard; or use the old project to right-click the uniCloud directory to associate the service space.
2. 对项目下的 uniCloud/database 点右键，下载所有DB Schema。
2. Right-click uniCloud/database under the project to download all DB Schemas.
3. 打开新下载的 resume.schema.json ，将其中的 "permission" 节点下的 "read" 从 false 改为 true。即设置该表允许任意用户读 （后续可以深入学习 DB Schema）
3. Open the newly downloaded resume.schema.json and change the "read" under the "permission" node from false to true. That is, set the table to allow any user to read (you can learn DB Schema in depth later)
4. 在客户端 pages/index/index.vue 编写代码
4. Write code on the client side pages/index/index.vue
```html
<template>
	<view class="content">
		<button @click="testclientdb()">请求数据库</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {
			testclientdb() {
				const db = uniCloud.database();
				db.collection("resume").get().then((res) => {
					// res 为数据库查询结果
					// res is the database query result
					console.log(res)
				}).catch((e) => {
					console.log(e)
				});
			}
		}
	}
</script>
```
5. 运行项目，点击按钮，即打印出查询到的数据库内容
5. Run the project and click the button to print out the queried database content
	`res.result.data`下即为数据表 resume 中的数据。
	`res.result.data` is the data in the data table resume.

## 数据类型@data-type
## data type @data-type

数据库内数据类型有以下几种：
The data types in the database are as follows:

* string：字符串
*string: string
	+ password：[DB Schema]中扩展的特殊string。用于保存密码。这类字段不会通过clientDB传递给前端，所有用户都不能通过clientDB读写，即使是admin管理员
	+ password: Special string extended in [DB Schema]. Used to save passwords. Such fields will not be passed to the front end through clientDB, and all users cannot read and write through clientDB, even admin administrators
* number：数字
* number: number
	+ 在[DB Schema]中细化为int和double
	+ Refine to int and double in [DB Schema]
* bool：布尔值
* bool: boolean value
* date：时间
* date: time
* timestamp 时间戳
* timestamp timestamp
* object：对象
* object: object
	+ file：[DB Schema]中扩展的特殊 object，用于云存储文件的信息体。不直接存储文件，而是一个json object，包括云存储文件的名称、路径、文件体积等信息。（HBuilderX 3.1.0+ ）
	+ file: A special object extended in [DB Schema], which is used for the information body of cloud storage files. It does not store the file directly, but a json object, including the name, path, file size and other information of the cloud storage file. (HBuilderX 3.1.0+)
* array：数组
* array: array
* null：相当于一个占位符，表示一个字段存在但是值为空。
* null: Equivalent to a placeholder, indicating that a field exists but the value is empty.
* GeoPoint：地理位置点
* GeoPoint: geographic location point
* GeoLineStringLine: 地理路径
* GeoLineStringLine: geographic path
* GeoPolygon: 地理多边形
* GeoPolygon: geographic polygon
* GeoMultiPoint: 多个地理位置点
* GeoMultiPoint: multiple geographic points
* GeoMultiLineString: 多个地理路径
* GeoMultiLineString: multiple geographic paths
* GeoMultiPolygon: 多个地理多边形
* GeoMultiPolygon: multiple geographic polygons

DB Schema的数据类型有专门文档，[详见](schema.md?id=bsontype)
There are special documents for the data type of DB Schema, [see details](schema.md?id=bsontype)

### Date类型
### Date type

Date 类型用于表示时间，精确到毫秒，可以用 JavaScript 内置 Date 对象创建。需要特别注意的是，连接本地云函数时，用此方法创建的时间是客户端当前时间，不是服务端当前时间，只有连接云端云函数才是服务端当前时间。
The Date type is used to represent time, accurate to milliseconds, and can be created with JavaScript's built-in Date object. It is important to note that when connecting to a local cloud function, the time created by this method is the current time of the client, not the current time of the server. Only the connection to the cloud function is the current time of the server.

另外，我们还单独提供了一个 API 来创建服务端当前时间，使用 serverDate 对象来创建一个服务端当前时间的标记，**该对象暂时只支持腾讯云空间**，当使用了 serverDate 对象的请求抵达服务端处理时，该字段会被转换成服务端当前的时间，更棒的是，我们在构造 serverDate 对象时还可通过传入一个有 offset 字段的对象来标记一个与当前服务端时间偏移 offset 毫秒的时间，这样我们就可以达到比如如下效果：指定一个字段为服务端时间往后一个小时。
In addition, we also provide a separate API to create the current time of the server, and use the serverDate object to create a mark of the current time of the server. **This object only supports Tencent Cloud Space for the time being**, when the request using the serverDate object arrives When the server processes, this field will be converted into the current time of the server. Even better, when constructing the serverDate object, we can also mark an offset from the current server time by passing in an object with an offset field. The time in milliseconds, so that we can achieve the following effect: specify a field as one hour after the server time.

```js
// 服务端当前时间
// server current time
new db.serverDate()
// 在云函数内使用new Date()和new db.serverDate()效果一样
// Using new Date() in the cloud function has the same effect as new db.serverDate()
```

```js
//服务端当前时间加1S
//Add 1S to the current time of the server
new db.serverDate({
  offset: 1000
})
// 在云函数内使用new Date(Date.now() + 1000)和上面的用法效果一样
// Using new Date(Date.now() + 1000) in the cloud function has the same effect as the above
```

### 地理位置类型@geo-data-type
### Geo type @geo-data-type

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


## 与传统开发区别@difference
## Difference from traditional development @difference

不同于传统开发，连接数据库有单次操作时长限制，目前单次操作时间限制如下。超出此时间会报超时错误。一般情况下在设置了合适的索引时不会遇到超时错误，如何优化查询速度请参考：[数据库性能优化](uniCloud/db-performance.md)
Different from traditional development, there is a time limit for a single operation to connect to the database. Currently, the time limit for a single operation is as follows. If this time is exceeded, a timeout error will be reported. Under normal circumstances, you will not encounter a timeout error when a suitable index is set. How to optimize the query speed, please refer to: [Database Performance Optimization](uniCloud/db-performance.md)

|腾讯云	|阿里云	|
|Tencent Cloud |Alibaba Cloud |
|--	|--	|
|5秒	|5秒	|
|5 seconds |5 seconds |

如果是大数据批处理，可以参考云函数递归调用，连续执行多个云函数处理一个任务[详情查看](uniCloud/cf-functions.md?id=recurrence)
If it is a batch of big data, you can refer to the recursive call of cloud functions to continuously execute multiple cloud functions to process a task [Details](uniCloud/cf-functions.md?id=recurrence)


## 数据导入导出和备份@dbmigration
## Data import, export and backup @dbmigration

uniCloud数据库提供了多种数据导入导出和备份方案。
The uniCloud database provides a variety of data import, export and backup solutions.

- db\_init.json：常用于插件市场的插件做环境初始化。完整支持数据、索引、schema三部分。不适合处理大量数据，操作可能超时
- db\_init.json: plugins commonly used in the plugin market for environment initialization. Complete support for data, index, schema three parts. Not suitable for processing large amounts of data, operations may time out
- 数据库回档备份和恢复。仅腾讯云支持。支持数据和索引，不支持schema
- Database rollback backup and restore. Only supported by Tencent Cloud. Supports data and indexes, not schema
- 数据库导入导出。仅阿里云支持，适用于大数据量操作。仅支持数据，不支持索引和schema
- Database import and export. Only supported by Alibaba Cloud, it is suitable for large data volume operations. Only data is supported, indexes and schemas are not supported

除上述三种方法外，开发者还可以编程处理数据的导入导出。如进行大量数据操作，建议在HBuilderX的本地运行云函数环境中操作，这样可以避免触发云端的云函数超时限制。
In addition to the above three methods, developers can also programmatically handle the import and export of data. If a large amount of data operations are performed, it is recommended to operate in the local cloud function environment of HBuilderX, which can avoid triggering the cloud function timeout limit in the cloud.

下面对三种方法的使用方式进行详细说明：
The following describes the use of the three methods in detail:

### `db_init.json`初始化数据库@db-init
### `db_init.json` initializes the database @db-init

`db_init.json`定义了一个json格式，里面包含了表名、表数据、表索引等表的相关数据。
`db_init.json` defines a json format, which contains table name, table data, table index and other table related data.

在HBuilderX中，项目的cloudfunctions目录（HBuilderX 2.5.11 - 2.9.11版本） 或 uniCloud/database 目录（HBuilderX 3.0+版本），可以放置`db_init.json`文件，对该文件点右键，可以按`db_init.json`的描述，在云服务空间创建相应的表、初始化表中的数据、索引和schema。
In HBuilderX, you can place the `db_init.json` file in the cloudfunctions directory of the project (HBuilderX 2.5.11 - 2.9.11 versions) or uniCloud/database directory (HBuilderX 3.0+ versions), right-click on the file, and press `db_init .json` description, create the corresponding table in the cloud service space, initialize the data, index and schema in the table.

这个功能尤其适合插件作者，可以快速初始化插件所需的数据库环境。
This feature is especially suitable for plugin authors to quickly initialize the database environment required by the plugin.

**`db_init.json`的数据格式**
**Data format of `db_init.json`**

`db_init.json`包含三部分：数据内容(data)、数据表索引(index)、数据表结构(schema)，形式如下
`db_init.json` contains three parts: data content (data), data table index (index), data table structure (schema), the form is as follows

**注意：HBuilderX 3.0.0以上版本schema不再放在db_init.json内，而是独立放在uniCloud/database/目录下。**
**Note: The schema of HBuilderX 3.0.0 and above is no longer placed in db_init.json, but is placed in the uniCloud/database/ directory independently. **

详细调整如下：
The detailed adjustments are as follows:

- db_init.json位置由`cloudfunctions/db_init.json`移至`uniCloud/database/db_init.json`
- db_init.json location moved from `cloudfunctions/db_init.json` to `uniCloud/database/db_init.json`
- schema不再放在db_init.json内，每个表都有一个单独的schema文件，比如news表对应的schema为`uniCloud/database/news.schema.json`
- The schema is no longer placed in db_init.json, and each table has a separate schema file. For example, the schema corresponding to the news table is `uniCloud/database/news.schema.json`
- schema可以在`uniCloud/database`目录上右键创建
- Schema can be created by right-clicking on the `uniCloud/database` directory
- `db_init.json`文件右键初始化云数据库时依然会带上schema进行数据库的初始化，除schema外HBuilderX3.0.0以上版本使用db_init.json初始化数据库还会带上扩展校验函数，扩展校验函数位于`uniCloud/database/validateFunction`目录下，扩展校验函数文档详见：[validateFunction](https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)
- When you right-click on the `db_init.json` file to initialize the cloud database, it will still bring the schema to initialize the database. In addition to the schema, HBuilderX3.0.0 or later uses db_init.json to initialize the database and will also bring the extended verification function. The extended verification function is located in Under the `uniCloud/database/validateFunction` directory, see the extended validation function documentation: [validateFunction](https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)

**HBuilderX 3.0.0版本之前的db_init.json示例**
** db_init.json example prior to HBuilderX version 3.0.0**

```json
{
  "collection_test": { // 集合（表名）
    "data": [ // 数据
      {
        "_id": "da51bd8c5e37ac14099ea43a2505a1a5", // 一般不带_id字段，防止导入时数据冲突。
        "name": "tom"
      }
    ],
    "index": [{ // 索引
      "IndexName": "index_a", // 索引名称
      "MgoKeySchema": { // 索引规则
        "MgoIndexKeys": [{
          "Name": "index", // 索引字段
          "Direction": "1" // 索引方向，1：ASC-升序，-1：DESC-降序，2dsphere：地理位置
        }],
        "MgoIsUnique": false, // 索引是否唯一
        "MgoIsSparse": false // 是否为稀疏索引，请参考 https://uniapp.dcloud.net.cn/uniCloud/db-index.md?id=sparse
      }
    }],
    "schema": { // HBuilderX 3.0.0以上版本schema不在此处，而是放在database目录下单独的`表名.schema.json`文件内
      "bsonType": "object",
      "permission": {
        ".read": true,
        ".create": false,
        ".update": false,
        ".delete": false
      },
      "required": [
        "image_url"
      ],
      "properties": {
        "_id": {
          "description": "ID，系统自动生成"
        },
        "image_url": {
          "bsonType": "string",
          "description": "可以是在线地址，也支持本地地址",
          "label": "图片url"
        }
      }
    }
  }
}

```

在HBuilderX中对上述`db_init.json`点右键，可初始化数据库到云服务空间，创建`collection_test`表，并按上述json配置设置该表的index索引和schema，以及插入data下的数据。
Right-click on the above `db_init.json` in HBuilderX, you can initialize the database to the cloud service space, create a `collection_test` table, and set the index index and schema of the table according to the above json configuration, and insert the data under data.

[opendb](opendb.md)的表，在`db_init.json`中初始化时，不建议自定义index和schema。系统会自动从opendb规范中读取最新的index和schema。
[opendb](opendb.md) table, when initialized in `db_init.json`, it is not recommended to customize index and schema. The system will automatically read the latest index and schema from the opendb specification.

**使用`db_init.json`导入数据库**
**Use `db_init.json` to import the database**

在HBuilderX中，对项目下的cloudfunctions目录下的`db_init.json`点右键，即可选择`初始化云数据库`。将`db_init.json`里的内容导入云端。
In HBuilderX, right-click `db_init.json` in the cloudfunctions directory under the project, and then select `Initialize cloud database`. Import the contents of `db_init.json` into the cloud.

注意事项：
Precautions:
- 目前`db_init.json`为同步导入形式，无法导入大量数据。导入大量数据请使用web控制台的数据库的导入功能。
- Currently `db_init.json` is in the form of synchronous import and cannot import a large amount of data. To import large amounts of data, please use the database import function of the web console.
- 如果`db_init.json`中的表名与opendb中任意表名相同，且`db_init.json`中该表名内没有编写schema和index，则在初始化时会自动拉取最新的opendb规范内对应表的schema和index。
- If the table name in `db_init.json` is the same as any table name in opendb, and there is no schema and index written in the table name in `db_init.json`, the corresponding table in the latest opendb specification will be automatically pulled during initialization The schema and index of the table.
- 如果`db_init.json`中的数据表在服务空间已存在，且`db_init.json`中该表含有schema和index，则在初始化时schema会被替换，新增索引会被添加，已存在索引不受影响。
- If the data table in `db_init.json` already exists in the service space, and the table in `db_init.json` contains schema and index, the schema will be replaced during initialization, the new index will be added, and the existing index will be added Not affected.

**生成`db_init.json`的方式**
**The way `db_init.json` is generated**

在uniCloud web控制台的数据库界面，左侧导航点击 生成`db_init.json`，会将选择的表的内容、索引、表结构导出为`db_init.json`文件。
On the database interface of the uniCloud web console, click Generate `db_init.json` in the left navigation, and the content, index, and table structure of the selected table will be exported to the `db_init.json` file.

注意事项：
Precautions:
- 如果表名与opendb中任意表名相同，web控制台导出时将不会带上schema和index。
- If the table name is the same as any table name in opendb, the schema and index will not be included when exporting from the web console.
- web控制台导出时默认不包括`_id`字段，在导入时，数据库插入新记录时会自动补`_id`字段。如果需要指定`_id`，需要手工补足数据。
- The `_id` field is not included by default when exporting from the web console. When importing, the database will automatically fill in the `_id` field when inserting new records. If you need to specify `_id`, you need to manually supplement the data.

在db_init.json内可以使用以下形式定义Date类型的数据：
Data of type Date can be defined in db_init.json in the following form:

```js
{
  "dateObj": { // dateObj字段就是日期类型的数据
    "$date": "2020-12-12T00:00:00.000Z" // ISO标准日期字符串
  }
}
```

### 数据库回档备份和恢复@backup
### Database backup and restore @backup

uniCloud会在每天凌晨自动备份一次数据库，最多保留7天。这让开发者不再担心数据丢失。
uniCloud will automatically back up the database once every morning and keep it for up to 7 days. This frees developers from worrying about data loss.

**操作说明**
**Instructions**

1. 登录[uniCloud后台](https://unicloud-dev.dcloud.net.cn/)
1. Log in to [uniCloud background](https://unicloud-dev.dcloud.net.cn/)
2. 点击左侧菜单`云数据库 --> 数据库回档`，点击`新建回档`
2. Click `Cloud Database --> Database Rollback` on the left menu, and click `New Rollback`
3. 选择可回档时间
3. Select the rollback time
4. 选择需要回档的表（注意：回档后表不能与现有表重名，如需对表重命名可以在表列表处操作）
4. Select the table that needs to be backed up (note: the table cannot have the same name as the existing table after being backed up, if you need to rename the table, you can do it in the table list)

![数据库回档](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-db-backup.jpg)
![Database Backup](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-db-backup.jpg)


### 数据导出为文件@export
### Data export to file @export

此功能主要用于导出整个表的数据
This function is mainly used to export the data of the entire table

**用法**
**usage**

1. 进入[uniCloud web控制台](https://unicloud.dcloud.net.cn/home)，选择服务空间，或者直接在HBuilderX云函数目录`cloudfunctions`上右键打开uniCloud web控制台
1. Enter the [uniCloud web console](https://unicloud.dcloud.net.cn/home), select the service space, or directly right-click on the HBuilderX cloud function directory `cloudfunctions` to open the uniCloud web console
2. 进入云数据库选择希望导入数据的表
2. Enter the cloud database and select the table to which you want to import data
3. 点击导出按钮
3. Click the Export button
4. 选择导出格式，如果选择csv格式还需要选择导出字段
4. Select the export format, if you select the csv format, you also need to select the export field
5. 点击确定按钮等待下载开始即可
5. Click the OK button and wait for the download to start

**注意**
**Notice**

- 导出的json文件并非一般情况下的json，而是每行一条json数据的文本文件
- The exported json file is not json in general, but a text file with one json data per line
- 导出为csv格式时必须填写字段选项。字段之间使用英文逗号隔开。例如：`_id, name, age, gender`
- Field options must be filled when exporting to csv format. Separate fields with commas. For example: `_id, name, age, gender`
- 导出为csv格式会丢失数据类型，如需迁移数据库请导出为json格式
- Exporting to csv format will lose data types, if you need to migrate the database, please export to json format
- 数据量较大时可能需要等待一段时间才可以开始下载
- When the amount of data is large, it may take a while for the download to start

### 从文件导入数据@import
### Import data from file @import

uniCloud提供的`db_init.json`主要是为了对数据库进行初始化，并不适合导入大量数据。与`db_init.json`不同，数据导入功能可以导入大量数据，目前支持导入 CSV、JSON 格式（关于json格式看下面注意事项）的文件数据。
The `db_init.json` provided by uniCloud is mainly for initializing the database and is not suitable for importing large amounts of data. Different from `db_init.json`, the data import function can import a large amount of data. Currently, it supports importing file data in CSV and JSON format (see the notes below for json format).

**用法**
**usage**

1. 进入[uniCloud web控制台](https://unicloud.dcloud.net.cn/home)，选择服务空间，或者直接在HBuilderX云函数目录`cloudfunctions`上右键打开uniCloud web控制台
1. Enter the [uniCloud web console](https://unicloud.dcloud.net.cn/home), select the service space, or directly right-click on the HBuilderX cloud functions directory `cloudfunctions` to open the uniCloud web console
2. 进入云数据库选择希望导入数据的表
2. Enter the cloud database and select the table to which you want to import data
3. 点击导入，选择json文件或csv文件
3. Click Import, select json file or csv file
4. 选择处理冲突模式（关于处理冲突模式请看下方注意事项）
4. Select the conflict handling mode (please see the notes below for handling conflict mode)
5. 点击确定按钮等待导入完成即可
5. Click the OK button and wait for the import to complete.

**注意**
**Notice**

- 目前导入文件最大限制为50MB
- Currently the maximum import file limit is 50MB
- 导入导出文件无法保留索引和schema
- Import and export files cannot preserve indexes and schemas
- 导入导出csv时数据类型会丢失，即所有字段均会作为字符串导入
- Data types are lost when importing and exporting csv, i.e. all fields are imported as strings
- 冲突处理模式为设定记录_id冲突时的处理方式，`insert`表示冲突时依旧导入记录但是是新插入一条，`upsert`表示冲突时更新已存在的记录
- Conflict handling mode is to set the handling method when record _id conflicts, `insert` means that the record is still imported but a new one is inserted when there is a conflict, `upsert` means that the existing record is updated when there is a conflict
- 这里说的json文件并不是标准的json格式，而是形如下面这样每行一个json格式的数据库记录的文件
- The json file mentioned here is not a standard json format, but a file with one json format database record per line as follows
  ```json
  {"a":1}
  {"a":2}
  ```

> 如果是自己拼接的json格式数据请注意：如果存在表A关联表B的字段的场景需要保证关联字段在A、B内是一致的（特别需要注意的是各种与_id关联的字段）
> If it is json format data that is spliced by yourself, please note: if there is a scenario where table A is associated with fields in table B, you need to ensure that the associated fields are consistent in A and B (special attention should be paid to various fields associated with _id)

例：
example:

**正确示例**
**correct example**

```js
// 这里为了方便看数据进行了格式化，实际导入所需的json文件是每行一条记录
// The data is formatted here for the convenience of viewing the data. The json file required for the actual import is one record per line
// article表
// article table
{
  "user_id": {
    $oid: "601cf1dbf194b200018ed8ec"
  }
}
// user表
// user table
{
  "_id": {
    $oid: "601cf1dbf194b200018ed8ec"
  }
}
```

**错误示例**
**Error example**

```js
// 这里为了方便看数据进行了格式化，实际导入所需的json文件是每行一条记录
// The data is formatted here for the convenience of viewing the data. The json file required for the actual import is one record per line
// article表
// article table
{
  "user_id": "601cf1dbf194b200018ed8ec"
}
// user表
// user table
{
  "_id": {
    $oid: "601cf1dbf194b200018ed8ec"
  }
}
```

### 云厂商之间的迁移@cross-provider
### Migration between cloud providers @cross-provider

文档移至：[在云厂商之间迁移数据库](uniCloud/price.md?id=cross-provider-db)
Documentation moved to: [Migrating databases between cloud providers](uniCloud/price.md?id=cross-provider-db)
