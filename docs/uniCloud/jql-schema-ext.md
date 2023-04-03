# DB Schema扩展js

DB Schema 的json文件无法编程，可编程扩展的js将大大增强schema的控制能力。

过去clientDB里使用action来处理schema.json不足的地方。但action云函数有个安全缺陷，无法禁止客户端发起指定action的调用。

从 HBuilderX 3.6.11+，uniCloud提供了可编程schema，每个`${表名}.schema.json`旁边都可以配置一个`${表名}.schema.ext.js`。

- 在HBuilderX项目下，在目录 uniCloud/database/ 下可以创建`${表名}.schema.ext.js`。
- 在uniCloud web控制台的数据库表管理界面，在schema.json旁边也有`${表名}.schema.ext.js`的在线管理。

schema扩展js在规划中可以实现很多事情，目前仅上线数据库触发器功能。

推荐开发者使用JQL数据库触发器来替代action云函数。

## 数据库触发器@trigger

JQL的数据库触发器，用于在执行一段JQL数据库指令（增删改查等）的同时触发相应的操作。

仅限使用JQL来操作数据库，客户端和云端均可以执行JQL。但使用传统MongoDB写法不支持数据库触发器。

可以使用触发器方便的实现很多功能，例如：

1. 更新数据时自动将更新时间修改为当前时间
2. 读取文章详情后阅读量加1
3. 发布一篇文章后自动给文章作者列表文章数量加1

由于数据库触发器是在云端执行的，所以clientDB操作数据库时很多不宜写在前端的代码，就可以挪到数据库触发器中实现。

如果把数据库的schema定义好，包括json和ext.js，那么各个业务模块就可以随便安心的调用数据库了，数据一致性逻辑和安全保障将被统一管理，不担心不良业务代码的破坏、不担心哪次调用会漏掉更新时间字段。

### 触发器配置@config

在项目的`uniCloud/database`目录下创建`${表名}.schema.ext.js`，内容如下。

```js
module.exports = {
  trigger: {
	// 注册数据表的read前事件
    beforeRead: async function (
	// 确定要监听的什么样的JQL指令
	{
      collection,
      operation,
      where,
      field
    } = {}) {
		// 当上述jql指令被触发时，将执行这里的代码。这里就是普通的uniCloud代码，可以调用uniCloud的各种api。
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
除这两个时机外还有`beforeCount`、`afterCount`、`beforeCreate`、`afterCreate`、`beforeUpdate`、`afterUpdate`、`beforeDelete`、`afterDelete`这些触发时机，后续章节会详细说明

ext.js里引入公共模块的机制：
- 在通过clientDB访问时触发器内可以使用包含在clientDB内的公共模块，如何将公共模块引入clientDB请参考：[jql依赖公共模块](jql.md#common-for-jql)
- 在通过云函数/云对象使用jql访问时，触发器可以使用云函数/云对象依赖的公共模块。

### 触发器入参@trigger-param

所有触发器均在数据校验、权限校验之后执行，beforeXxx会在实际执行数据库指令之前执行，afterXxx会在实际执行数据库指令之后执行。

触发器的入参有以下几个，不同时机的触发器参数略有不同

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
|isGetTempLookup		|boolean						|-			|联表触发时必备                        |联表查询时用于标识，本次查询是否使用了getTemp，新增于`3.7.1`																|

#### secondaryCollection@secondary-collection

> 仅read操作联表有此参数，新增于 3.7.1

联表查询副表组成的列表

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

触发器收到的where参数为转化后的查询条件，可以直接作为参数传给db.collection()和dbJql.collection()的where方法。jql语句使用doc方法时也会转成where，形如：{_id: 'xxx'}

#### docId@doc-id

> read、delete、update操作可能有此参数，新增于 3.7.0

触发器收到的doc方法内传递的文档_id

**示例**

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

where或match方法的原始参数，未经jql转化。如果是字符串或使用了数据库方法，则仅能传递给databaseForJQL返回的数据库实例使用，不能传递给database方法返回的数据库实例使用。

**示例**

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

geoNear方法的原始参数，未经jql转化。如果其中query是字符串或使用了数据库方法，则仅能传递给databaseForJQL返回的数据库实例使用，不能传递给database方法返回的数据库实例使用。

#### skip@skip

> 仅read操作有此参数，新增于 3.7.0

跳过的文档数量

**示例**

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

返回的结果集(文档数量)的限制

**示例**

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

随机筛选方法的参数

**示例**

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

field为所有被访问的字段的组成的数组，嵌套的字段会被摊平。未传递field时会返回所有字段

#### addDataList@add-data-list

> 仅create操作有此参数

数据库指令add方法的参数和schema内defaultValue、forceDefaultValue合并后的列表。注意为统一数据结构，add方法内只传递一个对象时此参数也是一个仅有一项的数组。

如果在给数据库插入数据前拦截并修改了addDataList的数据，那么插入数据库的就会是新修改的数据。

#### updateData@update-data

> 仅update操作有此参数

数据库指令update方法的参数。

如果在给数据库修改数据前拦截并修改了updateData的数据，那么更新进数据库的就会是新修改的数据。

#### userInfo@user-info

> 新增于 HBuilderX 3.6.14

用户信息包含以下字段

|字段名			|类型							|说明															|
|--					|--								|--																|
|uid				|string&#124;null	|用户id，未能获取用户信息时为null	|
|role				|array						|角色列表，默认为空数组						|
|permission	|array						|权限列表，默认为空数组						|

#### result@result

> 新增于 HBuilderX 3.6.14

本次数据库操作的结果，不同操作返回不同的结构。对result对象的修改会应用到最终返回的结果内

**查询**

```js
{
	data: [] // 获取到的数据列表
}
```

**查询带count**

```js
{
	data: [], // 获取到的数据列表
  count: 0 // 符合条件的数据条数
}
```

**计数**

```js
{
  total: 0 // 符合条件的数据条数
}
```

**新增单条**

```js
{
	id: '' // 新增数据的id
}
```

**新增多条**

```js
{
	ids: [], // 新增数据的id列表
	inserted: 3 // 新增成功的条数
}
```

**更新数据**

```js
{
	updated: 1 // 更新的条数，数据更新前后无变化则更新条数为0
}
```

#### isEqualToJql@is-equal-to-jql

> 新增于 HBuilderX 3.6.14

用于判断触发器当前执行的jql语句和方法传入的语句是否等价的方法。

开发者除了使用field、where等分解后的对象，也可以使用isEqualToJql来判断当前执行的JQL语句是什么。

如果单纯使用字符串比较，开发者会遇到单双引号、换行等原因造成比较失败。所以提供了isEqualToJql方法。

**用法**

```js
isEqualToJql(string JQLString)
```

**返回值**

此方法返回一个bool值，true表示当前执行的jql语句和传入的语句相等，否则为不等

**示例**

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

此参数为一个空对象，仅用于在before内挂载数据并在after内获取使用

**示例**

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

- count有两种触发情况一种是在数据库指令使用了count方法，另一种是在get方法内传getCount参数。HBuilderX 3.6.16版本之前，get方法内传getCount参数不会触发count触发器，HBuilderX 3.6.16及后续版本已修复此问题。

### 示例@demo

以下article表为例。

为了不增加示例的复杂度，所有权限均设置为true，实际项目中切勿模仿。

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

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeUpdate: async function({
      collection,
      operation,
      docId,
      updateData,
      clientInfo
    } = {}) {
      if(typeof docId === 'string' && (updateData.title || updateData.content)) { //如果字段较多，也可以不列举字段，删掉后半个判断
        if(updateData.content) {
          // updateData.summary = 'xxxx' // 根据content生成summary
        }
        updateData.update_date = Date.now() // 更新数据的update_date字段赋值为当前服务器时间
      }
    }
  }
}
```

#### 读取后触发实现阅读量加1

```js
// article.schema.ext.js
module.exports {
  trigger: {
    afterRead: async function({
      collection,
      operation,
      docId,
      field,
      clientInfo
    } = {}) {
      const db = uniCloud.database()
      // clientInfo.uniIdToken可以解出客户端用户信息，再进行判断是否应该加1。为了让示例简单清晰，此处省略相关逻辑
      if(typeof docId === 'string' && field.includes('content')) {
        // 读取了content字段后view_count加1
        await db.collection('article').doc(docId).update({
          view_count: db.command.inc(1)
        })
      }
    }
  }
}
```

#### 删除前备份

```js
// article.schema.ext.js
module.exports {
  trigger: {
    beforeDelete: async function({
      collection,
      operation,
      docId,
      clientInfo
    } = {}) {
      const db = uniCloud.database()
      if(typeof docId !== 'string') { // 此处也可以加入管理员可以批量删除的逻辑
        throw new Error('禁止批量删除')
      }
      const res = await db.collection('article').doc(docId).get()
      const record = res.data[0]
      if(record) {
        await db.collection('article-archived').add(record)
      }
    }
  }
}
```


#### 新增文章时自动添加摘要

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

jql触发器内可以使用jql语法操作数据库。

注意：在触发器内再使用jql语法操作数据库还会执行触发器，很容易引发死循环！

为此，uniCloud.databaseForJQL方法增加了参数`skipTrigger`，用于指定本次数据库操作跳过触发器的执行。

skipTrigger是一个bool值，true跳过执行触发器，false则继续执行触发器。默认为false。

该参数客户端不生效，仅云端生效。

示例如下：

```js
uniCloud.databaseForJQL({
  clientInfo,
  skipTrigger: true // true跳过执行触发器，false则继续执行触发器。默认为false
})
```

我们现在增加一个阅读记录表，schema如下

为了不增加示例的复杂度，所有权限均设置为true，实际项目中切勿模仿。

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

```js
module.exports = {
  trigger: {
    afterRead: async function ({
      docId,
      field,
      clientInfo
    } = {}) {
      if(typeof docId !== 'string' || !field.includes('content')) {
        return
      }
      const dbJQL = uniCloud.databaseForJQL({
        clientInfo,
        skipTrigger: true
      })
      await dbJQL.collection('article-view-log')
        .add({
          article_id: docId,
          reader_id: dbJQL.getCloudEnv('$cloudEnv_uid')
        })
    }
}
```

### 在触发器内使用扩展库和公共模块@module-and-extension

schema扩展依赖的公共模块和扩展库同样可以被action、validateFunction使用。

内置依赖：目前schema扩展依赖了`uni-id`或[uni-id-common](uni-id-common.md)，uni-id 3.0.7及以上版本又依赖了[uni-config-center](uni-config-center.md)，这两个公共模块是可以在触发器内直接使用的。如果所在服务空间开通了redis，schema扩展内可直接使用redis扩展。

自`HBuilderX 3.7.0`起，可以在项目的`uniCloud/database`目录上右键管理schema扩展依赖的公共模块和扩展库。同样在此目录右键选择`上传schema扩展Js的配置`将配置的依赖同步到云端。

![](https://web-assets.dcloud.net.cn/unidoc/zh/deps-of-jql.jpg)

`HBuilderX 3.2.7`到`HBuilderX 3.7.0`之间的版本，可通过在要使用的公共模块的package.json内配置`"includeInClientDB":true`，可以将公共模块和schema扩展关联，`HBuilderX 3.7.0`及之后的版本不推荐使用此用法

一个在JQL内使用的公共模块的package.json示例如下。

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

**注意**

- 尽量不要依赖体积过大的公共模块，会延长冷启动时间
- 仅能依赖公共模块，不能添加npm包依赖


### 注意事项

- 非getTemp联表查询（不推荐的用法）在触发器内获取的where为null、field为当前表的所有字段。
- 联表查询时只会触发主表触发器，不会触发副表触发器
- getTemp联表时主表所在的getTemp内的where和field会传递给触发器，虚拟联表的where和field不会传给触发器
- 通过jql的redis缓存读取的内容不会触发读触发器
- HBuilderX内使用jql数据管理功能执行jql语句时不会触发任何触发器

#### 和action云函数的关系

- 数据库触发器比action云函数更安全，不会被前端错误指定。
- 数据库触发器支持JQL语法。action云函数只支持使用传统MongoDB方式。
- 数据库触发器能实现很多常见的action云函数功能，并且无需修改schema和数据库指令。
- 如果同时使用数据库触发器和action云函数，注意触发器的before会在所有action的before执行之前再执行，after会在所有action的after执行之后再执行。action无法捕获触发器抛出的错误。
