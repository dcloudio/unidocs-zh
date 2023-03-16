# DB Schema扩展js
# DB Schema extension js

DB Schema 的json文件无法编程，可编程扩展的js将大大增强schema的控制能力。
The json file of DB Schema cannot be programmed, and the programmable extended js will greatly enhance the control ability of the schema.

过去clientDB里使用action来处理schema.json不足的地方。但action云函数有个安全缺陷，无法禁止客户端发起指定action的调用。
In the past, action was used in clientDB to deal with the shortcomings of schema.json. However, the action cloud function has a security defect, which cannot prevent the client from invoking the specified action.

从 HBuilderX 3.6.11+，uniCloud提供了可编程schema，每个`${表名}.schema.json`旁边都可以配置一个`${表名}.schema.ext.js`。
From HBuilderX 3.6.11+, uniCloud provides a programmable schema, and each `${table name}.schema.json` can be configured with a `${table name}.schema.ext.js`.

- 在HBuilderX项目下，在目录 uniCloud/database/ 下可以创建`${表名}.schema.ext.js`。
- Under the HBuilderX project, `${table name}.schema.ext.js` can be created under the directory uniCloud/database/.
- 在uniCloud web控制台的数据库表管理界面，在schema.json旁边也有`${表名}.schema.ext.js`的在线管理。
- In the database table management interface of the uniCloud web console, there is also an online management of `${table name}.schema.ext.js` next to schema.json.

schema扩展js在规划中可以实现很多事情，目前仅上线数据库触发器功能。
Schema extension js can achieve many things in planning, and currently only the database trigger function is online.

推荐开发者使用JQL数据库触发器来替代action云函数。
It is recommended that developers use JQL database triggers instead of action cloud functions.

## 数据库触发器@trigger
## Database trigger @trigger

JQL的数据库触发器，用于在执行一段JQL数据库指令（增删改查等）的同时触发相应的操作。
A JQL database trigger is used to trigger corresponding operations while executing a JQL database command (addition, deletion, modification, etc.).

仅限使用JQL来操作数据库，客户端和云端均可以执行JQL。但使用传统MongoDB写法不支持数据库触发器。
Only use JQL to operate the database, and both the client and the cloud can execute JQL. However, using the traditional MongoDB writing method does not support database triggers.

可以使用触发器方便的实现很多功能，例如：
Triggers can be used to implement many functions conveniently, such as:

1. 更新数据时自动将更新时间修改为当前时间
1. Automatically modify the update time to the current time when updating data
2. 读取文章详情后阅读量加1
2. After reading the details of the article, the reading volume will increase by 1
3. 发布一篇文章后自动给文章作者列表文章数量加1
3. After publishing an article, the number of articles in the article author list will be automatically increased by 1

由于数据库触发器是在云端执行的，所以clientDB操作数据库时很多不宜写在前端的代码，就可以挪到数据库触发器中实现。
Since the database trigger is executed in the cloud, many codes that should not be written in the front end when clientDB operates the database can be implemented in the database trigger.

如果把数据库的schema定义好，包括json和ext.js，那么各个业务模块就可以随便安心的调用数据库了，数据一致性逻辑和安全保障将被统一管理，不担心不良业务代码的破坏、不担心哪次调用会漏掉更新时间字段。
If the schema of the database is defined, including json and ext.js, then each business module can call the database at will, and the data consistency logic and security guarantee will be managed in a unified manner, without worrying about the destruction of bad business codes or Which call will miss the update time field.

### 触发器配置@config
### Trigger configuration @config

在项目的`uniCloud/database`目录下创建`${表名}.schema.ext.js`，内容如下。
Create `${table name}.schema.ext.js` under the `uniCloud/database` directory of the project, the content is as follows.

```js
module.exports = {
  trigger: {
	// 注册数据表的read前事件
	// Register the pre-read event of the data table
    beforeRead: async function (
	// 确定要监听的什么样的JQL指令
	// Determine what kind of JQL command to listen to
	{
      collection,
      operation,
      where,
      field
    } = {}) {
		// 当上述jql指令被触发时，将执行这里的代码。这里就是普通的uniCloud代码，可以调用uniCloud的各种api。
		// When the above jql directive is triggered, the code here will be executed. Here is the normal uniCloud code, which can call various APIs of uniCloud.
		console.log("这个触发器被触发了")
    },
    afterRead: async function ({
      collection,
      operation,
      where,
      field
    } = {}) {

    }
  }
}
```

如上配置会在使用jql读取此表内容时触发`beforeRead`和`afterRead`。
The above configuration will trigger `beforeRead` and `afterRead` when using jql to read the content of this table.
除这两个时机外还有`beforeCount`、`afterCount`、`beforeCreate`、`afterCreate`、`beforeUpdate`、`afterUpdate`、`beforeDelete`、`afterDelete`这些触发时机，后续章节会详细说明
In addition to these two timings, there are trigger timings such as `beforeCount`, `afterCount`, `beforeCreate`, `afterCreate`, `beforeUpdate`, `afterUpdate`, `beforeDelete`, `afterDelete`, which will be described in detail in subsequent chapters

ext.js里引入公共模块的机制：
The mechanism of introducing public modules in ext.js:
- 在通过clientDB访问时触发器内可以使用包含在clientDB内的公共模块，如何将公共模块引入clientDB请参考：[jql依赖公共模块](jql.md#common-for-jql)
- Common modules included in clientDB can be used in triggers when accessing through clientDB. For how to import public modules into clientDB, please refer to: [jql depends on public modules](jql.md#common-for-jql)
- 在通过云函数/云对象使用jql访问时，触发器可以使用云函数/云对象依赖的公共模块。
- When using jql access through cloud functions/cloud objects, triggers can use public modules that cloud functions/cloud objects depend on.

### 触发器入参@trigger-param
### Trigger input parameter @trigger-param

所有触发器均在数据校验、权限校验之后执行，beforeXxx会在实际执行数据库指令之前执行，afterXxx会在实际执行数据库指令之后执行。
All triggers are executed after data verification and permission verification, beforeXxx will be executed before the actual execution of the database command, and afterXxx will be executed after the actual execution of the database command.

触发器的入参有以下几个，不同时机的触发器参数略有不同
The input parameters of the trigger are as follows, and the trigger parameters at different times are slightly different

|参数名							|类型								|默认值	|是否必备															|说明																																												|
|--									|--									|--			|--																		|--																																													|
|collection					|string							|-			|是																		|当前表名																																										|
|operation					|string							|-			|是																		|当前操作类型：`create`、`update`、`delete`、`read`、`count`																|
|where							|object							|-			|否																		|当前请求使用的查询条件（见下方说明）																												|
|field							|array&lt;string&gt;|-			|read必备															|当前请求访问的字段列表（见下方说明）																												|
|addDataList				|array&lt;object&gt;|-			|create必备														|新增操作传入的数据列表（见下方说明）																												|
|updateData					|object							|-			|update必备														|更新操作传入的数据（见下方说明）																														|
|clientInfo					|object							|-			|是																		|客户端信息，包括设备信息、用户token等，详见：[clientInfo](cf-functions.md#get-client-infos)|
|userInfo						|object							|-			|是																		|用户信息																																										|
|result							|object							|-			|afterXxx内必备												|本次请求结果																																								|
|isEqualToJql				|function						|-			|是																		|用于判断当前执行的jql语句和执行语句是否相等																								|
|triggerContext			|object							|-			|是																		|用于在before和after内共享数据，新增于`3.6.16`																							|
|~~subCollection~~	|array							|-			|否																		|请使用secondaryCollection替代此参数，此参数仍可访问只是会给出警告													|
|secondaryCollection|array							|-			|否																		|获取联表查询的副表列表，新增于`3.7.1`																											|
|rawWhere						|object&#124;string	|-			|否																		|未经转化的原始查询条件，新增于`3.7.0`																											|
|rawGeoNear					|object							|-			|否																		|未经转化的原始geoNear参数，新增于`3.7.0`																										|
|skip								|number							|-			|否																		|跳过记录条数，新增于`3.7.0`																																|
|limit							|number							|-			|否																		|返回的结果集(文档数量)的限制，新增于`3.7.0`																								|
|sample							|object							|-			|否																		|sample（随机选取）方法的参数，新增于`3.7.0`																								|
|docId							|string							|-			|否																		|doc方法的参数，数据库记录的_id，新增于`3.7.0`																							|
|isGetTempLookup		|boolean						|-			|联表触发时必备，仅主表触发器有此参数	|联表查询时用于标识，本次查询是否使用了getTemp，新增于`3.7.1`																|

#### secondaryCollection@secondary-collection

> 仅read操作联表有此参数，新增于 3.7.1

联表查询副表组成的列表
Join table to query a list of sub-tables

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeRead: async function({
      secondaryCollection
    } = {}) {
      if(secondaryCollection && secondaryCollection.length > 1) {
        throw new Error('仅允许关联一个副表')
      }
    }
  }
}
```

#### where@where

> read、count、delete、update操作可能有此参数
> read, count, delete, update operations may have this parameter

触发器收到的where参数为转化后的查询条件，可以直接作为参数传给db.collection()和dbJql.collection()的where方法。jql语句使用doc方法时也会转成where，形如：{_id: 'xxx'}
The where parameter received by the trigger is the converted query condition, which can be directly passed as a parameter to the where method of db.collection() and dbJql.collection(). When the jql statement uses the doc method, it will also be converted into where, such as: {_id: 'xxx'}

#### docId@doc-id

> read、delete、update操作可能有此参数，新增于 3.7.0
> read, delete, update operations may have this parameter, new in 3.7.0

触发器收到的doc方法内传递的文档_id
The document_id passed in the doc method received by the trigger

**示例**
**example**

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeDelete: async function({
      docId
    } = {}) {
      if(!docId) {
        throw new Error('仅能指定文档id删除')
      }
    }
  }
}
```

#### rawWhere@raw-where

> read、delete、update操作可能有此参数，新增于 3.7.0
> read, delete, update operations may have this parameter, new in 3.7.0

where或match方法的原始参数，未经jql转化。如果是字符串或使用了数据库方法，则仅能传递给databaseForJQL返回的数据库实例使用，不能传递给database方法返回的数据库实例使用。
The original parameters of the where or match method, without jql conversion. If it is a string or a database method is used, it can only be passed to the database instance returned by databaseForJQL, and cannot be passed to the database instance returned by the database method.

**示例**
**example**

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeDelete: async function({
      rawWhere
    } = {}) {
      if(rawWhere && typeof rawWhere !== string) {
        throw new Error('仅能使用字符串作为查询条件')
      }
    }
  }
}
```

#### rawGeoNear@raw-geo-near

> 仅read操作有此参数，新增于 3.7.0
> Only the read operation has this parameter, which was added in 3.7.0

geoNear方法的原始参数，未经jql转化。如果其中query是字符串或使用了数据库方法，则仅能传递给databaseForJQL返回的数据库实例使用，不能传递给database方法返回的数据库实例使用。
The original parameters of the geoNear method have not been converted by jql. If the query is a string or a database method is used, it can only be passed to the database instance returned by databaseForJQL, and cannot be passed to the database instance returned by the database method.

#### skip@skip

> 仅read操作有此参数，新增于 3.7.0
> Only the read operation has this parameter, which was added in 3.7.0

跳过的文档数量
Number of documents skipped

**示例**
**example**

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeRead: async function({
      skip
    } = {}) {
      if(skip && skip > 10000) {
        throw new Error('无法访问10000条以后的数据')
      }
    }
  }
}
```

#### limit@limit

> 仅read操作有此参数，新增于 3.7.0
> Only the read operation has this parameter, which was added in 3.7.0

返回的结果集(文档数量)的限制
The limit on the returned result set (number of documents)

**示例**
**example**

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeRead: async function({
      limit
    } = {}) {
      if(limit && limit > 100) {
        throw new Error('每次最多访问100条数据')
      }
    }
  }
}
```

#### sample@sample

> 仅read操作有此参数，新增于 3.7.0
> Only the read operation has this parameter, which was added in 3.7.0

随机筛选方法的参数
Parameters for the Random Screening Method

**示例**
**example**

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeRead: async function({
      sample
    } = {}) {
      if(sample && sample.size > 100) {
        throw new Error('每次最多随机筛选100条数据')
      }
    }
  }
}
```

#### field@field

> 仅read操作有此参数
> Only the read operation has this parameter

field为所有被访问的字段的组成的数组，嵌套的字段会被摊平。未传递field时会返回所有字段
field is an array of all accessed fields, and nested fields will be flattened. When no field is passed, all fields will be returned

#### addDataList@add-data-list

> 仅create操作有此参数
> Only the create operation has this parameter

数据库指令add方法的参数和schema内defaultValue、forceDefaultValue合并后的列表。注意为统一数据结构，add方法内只传递一个对象时此参数也是一个仅有一项的数组。
The list of the parameters of the database command add method and the defaultValue and forceDefaultValue in the schema combined. Note that for a unified data structure, when only one object is passed in the add method, this parameter is also an array with only one item.

如果在给数据库插入数据前拦截并修改了addDataList的数据，那么插入数据库的就会是新修改的数据。
If the data of addDataList is intercepted and modified before inserting data into the database, then the newly modified data will be inserted into the database.

#### updateData@update-data

> 仅update操作有此参数
> Only the update operation has this parameter

数据库指令update方法的参数。
Parameter for the update method of the database directive.

如果在给数据库修改数据前拦截并修改了updateData的数据，那么更新进数据库的就会是新修改的数据。
If the updateData data is intercepted and modified before the data is modified in the database, the newly modified data will be updated into the database.

#### userInfo@user-info

> 新增于 HBuilderX 3.6.14
> Added in HBuilderX 3.6.14

用户信息包含以下字段
User information contains the following fields

|字段名			|类型							|说明															|
|Field Name |Type |Description |
|--					|--								|--																|
|uid				|string&#124;null	|用户id，未能获取用户信息时为null	|
| uid | string&#124;null | user id, null when user information cannot be obtained |
|role				|array						|角色列表，默认为空数组						|
| role | array | role list, default is an empty array |
|permission	|array						|权限列表，默认为空数组						|
| permission | array | permission list, default is an empty array |

#### result@result

> 新增于 HBuilderX 3.6.14
> Added in HBuilderX 3.6.14

本次数据库操作的结果，不同操作返回不同的结构。对result对象的修改会应用到最终返回的结果内
As a result of this database operation, different operations return different structures. Modifications to the result object will be applied to the final returned result

**查询**
**Inquire**

```js
{
	data: [] // 获取到的数据列表
}
```

**查询带count**
**Query with count**

```js
{
	data: [], // 获取到的数据列表
  count: 0 // 符合条件的数据条数
}
```

**计数**
**count**

```js
{
  total: 0 // 符合条件的数据条数
}
```

**新增单条**
** Add a single item **

```js
{
	id: '' // 新增数据的id
}
```

**新增多条**
**Add more items**

```js
{
	ids: [], // 新增数据的id列表
	inserted: 3 // 新增成功的条数
}
```

**更新数据**
**update data**

```js
{
	updated: 1 // 更新的条数，数据更新前后无变化则更新条数为0
}
```

#### isEqualToJql@is-equal-to-jql

> 新增于 HBuilderX 3.6.14
> Added in HBuilderX 3.6.14

用于判断触发器当前执行的jql语句和方法传入的语句是否等价的方法。
A method for judging whether the jql statement currently executed by the trigger is equivalent to the statement passed in by the method.

开发者除了使用field、where等分解后的对象，也可以使用isEqualToJql来判断当前执行的JQL语句是什么。
In addition to using decomposed objects such as field and where, developers can also use isEqualToJql to determine what the currently executing JQL statement is.

如果单纯使用字符串比较，开发者会遇到单双引号、换行等原因造成比较失败。所以提供了isEqualToJql方法。
If you simply use string comparison, developers will encounter reasons such as single and double quotes, newlines, etc., which cause the comparison to fail. So the isEqualToJql method is provided.

**用法**
**usage**

```js
isEqualToJql(string JQLString)
```

**返回值**
**return value**

此方法返回一个bool值，true表示当前执行的jql语句和传入的语句相等，否则为不等
This method returns a bool value, true means that the currently executed jql statement is equal to the incoming statement, otherwise it is not equal

**示例**
**example**

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeCount: async function({
      isEqualToJql
    } = {}) {
      if(isEqualToJql('db.collection("article").count()')) {
        console.log('成功匹配了JQL命令：对article表进行count计数且未带条件')
      } else {
        throw new Error('禁止执行带条件的count')
      }
    }
  }
}
```

#### triggerContext@trigger-context

> 新增于 HBuilderX 3.6.16
> Added in HBuilderX 3.6.16

此参数为一个空对象，仅用于在before内挂载数据并在after内获取使用
This parameter is an empty object, which is only used to mount data in before and get it in after

**示例**
**example**

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeUpdate: async function({
      triggerContext
    } = {}) {
      triggerContext.shareVar = 1
    },
    afterUpdate: async function(){
      if (triggerContext.shareVar === 1) {
        console.log('获取到的triggerContext.shareVar为1')
      }
    }
  }
}
```

### 触发时机@trigger-timing
### Trigger timing @trigger-timing

|触发时机												|说明																												|
|---														|---																												|
|beforeRead											|读取前触发																									|
|afterRead											|读取后触发																									|
|beforeCount										|计数前触发																									|
|afterCount											|计数后触发																									|
|beforeCreate										|新增前触发																									|
|afterCreate										|新增后触发																									|
|beforeUpdate										|更新前触发																									|
|afterUpdate										|更新后触发																									|
|beforeDelete										|删除前触发																									|
|afterDelete										|删除后触发																									|
|beforeReadAsSecondaryCollection|集合作为副表被读取前触发，仅使用了getTemp的联表查询才会触发|
|afterReadAsSecondaryCollection	|集合作为副表被读取后触发，仅使用了getTemp的联表查询才会触发|

**注意**
**Notice**

- count有两种触发情况一种是在数据库指令使用了count方法，另一种是在get方法内传getCount参数。HBuilderX 3.6.16版本之前，get方法内传getCount参数不会触发count触发器，HBuilderX 3.6.16及后续版本已修复此问题。

### 示例@demo
### Example @demo

以下article表为例。
The following article table is taken as an example.

为了不增加示例的复杂度，所有权限均设置为true，实际项目中切勿模仿。
In order not to increase the complexity of the example, all permissions are set to true, do not imitate in actual projects.

```js
// article.schema.ext.js
{
  "bsonType": "object",
  "required": ["title", "content"],
  "permission": {
    "read": true,
    "create": true,
    "update": true,
    "delete": true
  },
  "properties": {
    "_id": {
      "bsonType": "string"
    },
    "title": {
      "bsonType": "string"
    },
    "summary": {
      "bsonType": "string"
    },
    "content": {
      "bsonType": "string"
    },
    "author": {
      "bsonType": "string"
    },
    "view_count": {
      "bsonType": "int"
    },
    "create_date": {
      "bsonType": "timestamp"
    },
    "update_date": {
      "bsonType": "timestamp"
    }
  }
}
```

#### 修改文章更新时间
#### Modify the article update time

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeUpdate: async function({
      collection,
      operation,
      where,
      updateData,
      clientInfo
    } = {}) {
      const id = where && where._id
      if(typeof id === 'string' && (updateData.title || updateData.content)) { //如果字段较多，也可以不列举字段，删掉后半个判断
        if(updateData.content) {
          // updateData.summary = 'xxxx' // 根据content生成summary
          // updateData.summary = 'xxxx' // generate summary based on content
        }
        updateData.update_date = Date.now() // 更新数据的update_date字段赋值为当前服务器时间
      }
    }
  }
}
```

#### 读取后触发实现阅读量加1
#### Trigger after reading to increase the reading amount by 1

```js
// article.schema.ext.js
module.exports {
  trigger: {
    afterRead: async function({
      collection,
      operation,
      where,
      field,
      clientInfo
    } = {}) {
      const db = uniCloud.database()
      const id = where && where._id
      // clientInfo.uniIdToken可以解出客户端用户信息，再进行判断是否应该加1。为了让示例简单清晰，此处省略相关逻辑
      // clientInfo.uniIdToken can solve the client user information, and then judge whether it should add 1. In order to keep the example simple and clear, relevant logic is omitted here
      if(typeof id === 'string' && field.includes('content')) {
        // 读取了content字段后view_count加1
        // Add 1 to view_count after reading the content field
        await db.collection('article').where(where).update({
          view_count: db.command.inc(1)
        })
      }
    }
  }
}
```

#### 删除前备份
#### backup before deletion

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeDelete: async function({
      collection,
      operation,
      where,
      clientInfo
    } = {}) {
      const db = uniCloud.database()
      const id = where && where._id
      if(typeof id !== 'string') { // 此处也可以加入管理员可以批量删除的逻辑
        throw new Error('禁止批量删除')
      }
      const res = await db.collection('article').where(where).get()
      const record = res.data[0]
      if(record) {
        await db.collection('article-archived').add(record)
      }
    }
  }
}
```


#### 新增文章时自动添加摘要
#### Automatically add a summary when adding a new article

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeCreate: async function({
      collection,
      operation,
      addDataList,
      clientInfo
    } = {}) {
      for(let i = 0; i < addDataList.length; i++) {
        const addDataItem = addDataList[i]
        if(!addDataItem.content) {
          throw new Error('缺少文章内容')
        }
        addDataItem.summary = addDataItem.content.slice(0, 100)
      }
    }
  }
}
```


### 在触发器内使用jql语法@using-jql-in-schema
### Use the jql syntax @using-jql-in-schema in the trigger

jql触发器内可以使用jql语法操作数据库。
The jql syntax can be used in the jql trigger to operate the database.

注意：在触发器内再使用jql语法操作数据库还会执行触发器，很容易引发死循环！
Note: Using jql syntax to operate the database in the trigger will also execute the trigger, which can easily lead to an infinite loop!

为此，uniCloud.databaseForJQL方法增加了参数`skipTrigger`，用于指定本次数据库操作跳过触发器的执行。
For this reason, the uniCloud.databaseForJQL method adds a parameter `skipTrigger`, which is used to specify that this database operation skips the execution of the trigger.

skipTrigger是一个bool值，true跳过执行触发器，false则继续执行触发器。默认为false。
skipTrigger is a bool value, true skips the execution of the trigger, false continues to execute the trigger. The default is false.

该参数客户端不生效，仅云端生效。
This parameter does not take effect on the client side, but only on the cloud.

示例如下：
Examples are as follows:

```js
uniCloud.databaseForJQL({
  clientInfo,
  skipTrigger: true // true跳过执行触发器，false则继续执行触发器。默认为false
})
```

我们现在增加一个阅读记录表，schema如下
We now add a reading record table, the schema is as follows

为了不增加示例的复杂度，所有权限均设置为true，实际项目中切勿模仿。
In order not to increase the complexity of the example, all permissions are set to true, do not imitate in actual projects.

```js
// article.schema.ext.js
{
  "bsonType": "object",
  "required": ["title", "content"],
  "permission": {
    "read": true,
    "create": true,
    "update": true,
    "delete": true
  },
  "properties": {
    "_id": {
      "bsonType": "string"
    },
    "article_id": {
      "bsonType": "string",
      "foreignKey": "article._id"
    },
    "reader_id": {
      "bsonType": "string",
      "foreignKey": "uni-id-users._id",
      "forceDefaultValue": {
        "$env": "uid"
      }
    }
  }
}
```

使用jql语法可以自动验证客户端身份，仍以上述article表为例，在afterRead触发器内插入阅读记录。此时会将读者id插入到reader_id字段
Using the jql syntax can automatically verify the identity of the client. Still taking the above article table as an example, insert the reading record in the afterRead trigger. At this point, the reader id will be inserted into the reader_id field

```js
module.exports = {
  trigger: {
    afterRead: async function ({
      where,
      field,
      clientInfo
    } = {}) {
      const id = where && where._id
      if(typeof id !== 'string' || !field.includes('content')) {
        return
      }
      const dbJQL = uniCloud.databaseForJQL({
        clientInfo,
        skipTrigger: true
      })
      await dbJQL.collection('article-view-log')
        .add({
          article_id: id,
          reader_id: dbJQL.getCloudEnv('$cloudEnv_uid')
        })
    }
}
```

### 在触发器内使用扩展库和公共模块@module-and-extension
### Use extension libraries and common modules inside triggers @module-and-extension

schema扩展依赖的公共模块和扩展库同样可以被action、validateFunction使用。
The public modules and extension libraries that schema extension depends on can also be used by action and validateFunction.

内置依赖：目前schema扩展依赖了`uni-id`或[uni-id-common](uni-id-common.md)，uni-id 3.0.7及以上版本又依赖了[uni-config-center](uni-config-center.md)，这两个公共模块是可以在触发器内直接使用的。如果所在服务空间开通了redis，schema扩展内可直接使用redis扩展。
Built-in dependencies: Currently, the schema extension relies on `uni-id` or [uni-id-common](uni-id-common.md), and uni-id 3.0.7 and above also relies on [uni-config-center](uni-config-center.md), these two public modules can be used directly in the trigger. If redis is enabled in the service space, the redis extension can be directly used in the schema extension.

自`HBuilderX 3.7.0`起，可以在项目的`uniCloud/database`目录上右键管理schema扩展依赖的公共模块和扩展库。同样在此目录右键选择`上传schema扩展Js的配置`将配置的依赖同步到云端。
From `HBuilderX 3.7.0`, you can right-click on the `uniCloud/database` directory of the project to manage the public modules and extension libraries that the schema extension depends on. Also right-click on this directory and select `Upload schema extension Js configuration` to synchronize the configuration dependencies to the cloud.

![](https://web-assets.dcloud.net.cn/unidoc/zh/deps-of-jql.jpg)

`HBuilderX 3.2.7`到`HBuilderX 3.7.0`之间的版本，可通过在要使用的公共模块的package.json内配置`"includeInClientDB":true`，可以将公共模块和schema扩展关联，`HBuilderX 3.7.0`及之后的版本不推荐使用此用法
For versions between `HBuilderX 3.2.7` and `HBuilderX 3.7.0`, you can associate public modules with schema extensions by configuring `"includeInClientDB":true` in the package.json of the public modules to be used,` This usage is not recommended for HBuilderX 3.7.0` and later versions

一个在JQL内使用的公共模块的package.json示例如下。
An example package.json of a common module used within JQL is below.

```js
{
  "name": "test-common",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "includeInClientDB": true
}
```

通过上述步骤建立起关联关系后，可正常在数据库触发器或action云函数中使用公共模块。
After the association relationship is established through the above steps, the public module can be used normally in the database trigger or action cloud function.

**注意**
**Notice**

- 尽量不要依赖体积过大的公共模块，会延长冷启动时间
- 仅能依赖公共模块，不能添加npm包依赖


### 注意事项
### Precautions

- 非getTemp联表查询（不推荐的用法）在触发器内获取的where为null、field为当前表的所有字段。
- Non-getTemp joint table query (not recommended usage) where obtained in the trigger is null, and field is all fields of the current table.
- 联表查询时只会触发主表触发器，不会触发副表触发器
- Only the trigger of the main table will be triggered when querying the joint table, and the trigger of the sub-table will not be triggered
- getTemp联表时主表所在的getTemp内的where和field会传递给触发器，虚拟联表的where和field不会传给触发器
- When getTemp joins the table, the where and field in the getTemp where the main table is located will be passed to the trigger, and the where and field of the virtual join table will not be passed to the trigger
- 通过jql的redis缓存读取的内容不会触发读触发器
- Content read through jql's redis cache will not trigger a read trigger
- HBuilderX内使用jql数据管理功能执行jql语句时不会触发任何触发器
- When using the jql data management function in HBuilderX to execute the jql statement, no trigger will be triggered

#### 和action云函数的关系
#### Relationship with action cloud functions

- 数据库触发器比action云函数更安全，不会被前端错误指定。
- Database triggers are safer than action cloud functions and will not be misspecified by the front end.
- 数据库触发器支持JQL语法。action云函数只支持使用传统MongoDB方式。
- Database triggers support JQL syntax. The action cloud function only supports the traditional MongoDB method.
- 数据库触发器能实现很多常见的action云函数功能，并且无需修改schema和数据库指令。
- Database triggers can implement many common action cloud function functions without modifying schema and database instructions.
- 如果同时使用数据库触发器和action云函数，注意触发器的before会在所有action的before执行之前再执行，after会在所有action的after执行之后再执行。action无法捕获触发器抛出的错误。
- If you use database triggers and action cloud functions at the same time, note that the before of the trigger will be executed before the before of all actions are executed, and the after will be executed after the after of all actions are executed. Actions cannot catch errors thrown by triggers.
