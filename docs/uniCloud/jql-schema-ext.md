# DB Schema扩展js

DB Schema 的json文件无法编程，可编程扩展的js将大大增强schema的控制能力。

过去clientDB里使用action来处理schema.json不足的地方。但action云函数有个安全缺陷，无法禁止客户端发起指定action的调用。

从 HBuilderX 3.6.10+，uniCloud提供了可编程schema，每个`${表名}.schema.json`旁边都可以配置一个`${表名}.schema.ext.js`。

- 在HBuilderX项目下，在目录 uniCloud/database/ 下可以创建`${表名}.schema.ext.js`。
- 在uniCloud web控制台的数据库表管理界面，在schema.json旁边也有`${表名}.schema.ext.js`的在线管理。

schema扩展js在规划中可以实现很多事情，目前仅上线数据库触发器功能，推荐开发者使用JQL数据库触发器来替代action云函数。

## 数据库触发器@trigger

JQL的数据库触发器，用于在执行一段JQL数据库指令（增删改查等）的同时触发相应的操作。

仅限使用JQL来操作数据库，客户端和云端均可以执行JQL。但使用传统MongoDB写法不支持数据库触发器。

可以使用触发器方便的实现很多功能，例如：

1. 读取文章详情后阅读量加1
2. 发布一篇文章后自动给文章作者列表文章数量加1
3. 更新文章时自动将更新时间修改为当前时间

由于数据库触发器是在云端执行的，所以clientDB操作数据库时很多不宜写在前端的代码，就可以挪到数据库触发器中实现。

如果把数据库的schema定义好，包括json和ext.js，那么各个业务模块就可以随便安心的调用数据库了，数据一致性逻辑和安全保障将被统一管理，不担心不良业务代码的破坏。

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

|参数名		|类型				|默认值	|是否必备	|说明														|
|--			|--					|--		|--			|--															|
|collection	|string				|-		|是			|当前表名													|
|operation	|string				|-		|是			|当前操作类型：`create`、`update`、`delete`、`read`、`count`|
|where		|object				|-		|否			|当前请求使用的查询条件（见下方说明）						|
|field		|array&lt;string&gt;|-		|read必备	|当前请求访问的字段列表（见下方说明）						|
|addDataList|array&lt;object&gt;|-		|create必备	|新增操作传入的数据列表（见下方说明）						|
|updateData	|object				|-		|update必备	|更新操作传入的数据（见下方说明）							|

#### where

> read、count、delete、update操作可能有此参数

触发器收到的where参数为转化后的查询条件，可以直接作为参数传给db.collection()和dbJql.collection()的where方法。jql语句使用doc方法时也会转成where，形如：{_id: 'xxx'}

#### field

> 仅read操作有此参数

field为所有被访问的字段的组成的数组，嵌套的字段会被摊平。

#### addDataList

> 仅create操作有此参数

数据库指令add方法的参数和schema内defaultValue、forceDefaultValue合并后的列表。注意为统一数据结构，add方法内只传递一个对象时此参数也是一个仅有一项的数组。

如果在给数据库插入数据前拦截并修改了addDataList的数据，那么插入数据库的就会是新修改的数据。

#### updateData

> 仅update操作有此参数

数据库指令update方法的参数。

如果在给数据库修改数据前拦截并修改了updateData的数据，那么更新进数据库的就会是新修改的数据。

### 触发时机@trigger-timing

|触发时机			|说明				|
|---					|---				|
|beforeRead		|读取前触发	|
|afterRead		|读取后触发	|
|beforeCount	|计数前触发	|
|afterCount		|计数后触发	|
|beforeCreate	|新增前触发	|
|afterCreate	|新增后触发	|
|beforeUpdate	|更新前触发	|
|afterUpdate	|更新后触发	|
|beforeDelete	|删除前触发	|
|afterDelete	|删除后触发	|

### 示例@demo

以下article表为例。

为了不增加示例的复杂度，所有权限均设置为true，实际项目中切勿随意模仿。

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

#### 读取后触发实现阅读量加1

```js
// article.schema.ext.js
module.exports {
  trigger: {
    afterRead: async function({
      where,
      field,
      clientInfo
    } = {}) {
      const db = uniCloud.database()
      const id = where && where._id
      // clientInfo.uniIdToken可以解出客户端用户信息，再进行判断是否应该加1。为了让示例简单清晰，此处省略相关逻辑
      if(typeof id === 'string' && field.includes('content')) {
        // 读取了content字段后view_count加1
        await db.collection('article').doc(id).update({
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
      where,
      clientInfo
    } = {}) {
      const db = uniCloud.database()
      const id = where && where._id
      if(typeof id !== 'string') { // 此处也可以加入管理员可以批量删除的逻辑
        throw new Error('禁止批量删除')
      }
      const res = await db.collection('article').doc(id).get()
      const record = res.data[0]
      if(record) {
        await db.collection('article-archived').add(record)
      }
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
      where,
      updateData,
      clientInfo
    } = {}) {
      const id = where && where._id
      if(typeof id === 'string' && (updateData.title || updateData.content)) {
        if(updateData.content) {
          // updateData.summary = 'xxxx' // 根据content生成summary
        }
        updateData.update_date = Date.now()
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
      addDataList,
      clientInfo
    } = {}) {
      for(let i = 0; i < addDataList.length; i++) {
        addDataList[i].summary = addDataList[i].content && addDataList[i].content.slice(0, 100)
      }
    }
  }
}
```

### 注意事项

- 非getTemp联表查询（不推荐的用法）在触发器内获取的where为null、field为当前表的所有字段。
- 联表查询时只会触发主表触发器，不会触发副表触发器
- getTemp联表时主表所在的getTemp内的where和field会传递给触发器，虚拟联表的where和field不会传给触发器
- getCount不会触发count触发器，只会触发read触发器
- 通过jql的redis缓存读取的内容不会触发读触发器
- jql数据管理不会触发任何触发器

#### 和action的关系

数据库触发器能实现很多常见的action功能，并且无需修改schema和数据库指令。

触发器的before会在所有action的before执行之前再执行，after会在所有action的after执行之后再执行。action无法捕获触发器抛出的错误。