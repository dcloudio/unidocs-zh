## 简介

新增于 HBuilderX 3.6.10，JQL触发器用于在执行一段数据库指令的同时触发相应的操作。可以使用触发器方便的实现如下功能：

1. 读取文章详情后阅读量加1
2. 发布一篇文章后自动给文章作者列表文章数量加1
3. 更新文章时自动将更新时间修改为当前时间

## 触发器配置@config

在项目的`uniCloud/database`目录下创建`${表名}.schema.js`，内容如下。

```js
module.exports = {
  trigger: {
    beforeRead: async function ({
      collection,
      operation,
      where,
      field
    } = {}) {

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

如上配置会在使用jql读取此表内容时触发`beforeRead`和`afterRead`。除这两个时机外还有`beforeCount`、`afterCount`、`beforeCreate`、`afterCreate`、`beforeUpdate`、`afterUpdate`、`beforeDelete`、`afterDelete`这些触发时机，后续章节会详细说明

## 触发器入参@trigger-param

所有触发器均在数据校验、权限校验之后执行，beforeXxx会在实际执行数据库指令之前执行，afterXxx会在实际执行数据库指令之后执行。

触发器的入参有以下几个，不同时机的触发器参数略有不同

|参数名			|类型								|默认值	|是否必备		|说明																												|
|--					|--									|--			|--					|--																													|
|collection	|string							|-			|是					|当前表名																										|
|operation	|string							|-			|是					|当前操作类型：`create`、`update`、`delete`、`read`、`count`|
|where			|object							|-			|否					|当前请求使用的查询条件（见下方说明）												|
|field			|array&lt;string&gt;|-			|read必备		|当前请求访问的字段列表（见下方说明）												|
|addDataList|array&lt;object&gt;|-			|create必备	|新增操作传入的数据列表（见下方说明）												|
|updateData	|object							|-			|update必备	|更新操作传入的数据（见下方说明）														|

### where

> read、count、delete、update操作可能有此参数

触发器收到的where参数为转化后的查询条件，可以直接作为参数传给db.collection()和dbJql.collection()的where方法。jql语句使用doc方法时也会转成where，形如：{_id: 'xxx'}

### field

> 仅read操作有此参数

field为所有被访问的字段的组成的数组，嵌套的字段会被摊平。

### addDataList

> 仅create操作有此参数

数据库指令add方法的参数和schema内defaultValue、forceDefaultValue合并后的列表。注意为统一数据结构，add方法内只传递一个对象时此参数也是一个仅有一项的数组

### updateData

> 仅update操作有此参数

数据库指令update方法的参数

## 触发时机@trigger-timing

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

## 示例@demo

以下article表为例。

为了不增加示例的复杂度，所有权限均设置为true，实际项目中切勿随意设置权限

```js
// article.schema.js
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

### 读取后触发实现阅读量加1

```js
// article.schema.js
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

### 删除前备份

```js
// article.schema.js
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

### 修改文章更新时间

```js
// article.schema.js
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

### 新增文章时自动添加摘要

```js
// article.schema.js
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

## 注意事项

- 非getTemp联表查询（不推荐的用法）在触发器内获取的where为null、field为当前表的所有字段。
- 联表查询时只会触发主表触发器，不会触发副表触发器
- getTemp联表时主表所在的getTemp内的where和field会传递给触发器，虚拟联表的where和field不会传给触发器
- getCount不会触发count触发器，只会触发read触发器
- 通过jql的redis缓存读取的内容不会触发读触发器
- jql数据管理不会触发任何触发器

### 和action的关系

数据库触发器能实现很多常见的action功能，并且无需修改schema和数据库指令。

触发器的before会在所有action的before执行之前再执行，after会在所有action的after执行之后再执行。action无法捕获触发器抛出的错误。