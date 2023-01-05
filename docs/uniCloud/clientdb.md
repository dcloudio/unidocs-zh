JQL语法相关文档已移至：[JQL语法](jql.md)

## clientDB简介
## clientDB introduction

> 自`HBuilderX 2.9.5`起支持在客户端直接使用`uniCloud.database()`方式获取数据库引用，即在前端直接操作数据库，这个功能被称为`clientDB`
> Since `HBuilderX 2.9.5`, it is supported to directly use `uniCloud.database()` method to obtain database references on the client side, that is, to operate the database directly on the front end, this function is called `clientDB`

> `HBuilderX 2.9.5`以前的用户如使用过`clientDB`，在升级后请将`clientDB`的前端库和云函数删除，新版已经在前端和云端内置了`clientDB`
> If users before `HBuilderX 2.9.5` have used `clientDB`, please delete the front-end library and cloud functions of `clientDB` after the upgrade. The new version has built-in `clientDB` in the front-end and cloud.

大白话：传统的数据库操作只能在服务端实现，因为他在前端使用有安全问题。而uniCloud的云数据库有表结构(DB Schema)他通过简单的js表达式，配置了：各种角色权限的账号是否可以读取和写入某种规范的数据等，解决了在前端操作的安全问题；因此uniCloud的云数据库可以直接在前端调用。
Big vernacular: traditional database operations can only be implemented on the server side, because he has security problems in the front-end use. The cloud database of uniCloud has a table structure (DB Schema). Through simple js expressions, it configures: whether accounts with various role permissions can read and write certain standardized data, etc., which solves the security of front-end operations. problem; so the cloud database of uniCloud can be called directly on the front end.

使用`clientDB`的好处：**不用写服务器代码了！**
Advantages of using `clientDB`: **No need to write server code! **

1个应用开发的一半的工作量，就此直接省去。
Half of the workload of 1 application development is directly saved.

当然使用`clientDB`需要扭转传统后台开发观念，不再编写服务端代码，直接在前端操作数据库。但是为了数据安全，需要在数据库上配置`DB Schema`。
Of course, using `clientDB` requires reversing the traditional concept of back-end development, no longer writing server-side code, and operating the database directly on the front-end. But for data security, `DB Schema` needs to be configured on the database.

在`DB Schema`中，配置数据操作的权限和字段值域校验规则，阻止前端不恰当的数据读写。详见：[DB Schema](https://uniapp.dcloud.net.cn/uniCloud/schema)
In `DB Schema`, configure the permissions of data operations and field value domain validation rules to prevent inappropriate data reading and writing at the front end. See: [DB Schema](https://uniapp.dcloud.net.cn/uniCloud/schema)

如果需要数据库操作之前或之后，云端执行关联逻辑（比如获取文章详情后，文章阅读量+1），`clientDB`提供了[数据库触发器](jql-schema-ext.md)（从HBuilderX 3.6.11开始）。
在不支持数据库触发器的低版本，使用[action云函数](jql.md#action)

**注意**
**Notice**

- `clientDB`依赖uni-id（`1.1.10+版本`）提供用户身份和权限校验，存在uni-id-common时clientDB会优先依赖uni-id-common，如果你不了解uni-id，请参考：[uni-id文档](uniCloud/uni-id.md)，[uni-id-common文档](uniCloud/uni-id-common.md)
- `clientDB` relies on uni-id (`1.1.10+ version`) to provide user identity and permission verification. When uni-id-common exists, clientDB will rely on uni-id-common first. If you do not know uni-id, Please refer to: [uni-id documentation](uniCloud/uni-id.md), [uni-id-common documentation](uniCloud/uni-id-common.md)
- `clientDB`依赖的uni-id需要在uni-id的config.json内添加uni-id相关配置，通过uni-id的init方法传递的参数不会对clientDB生效，参考：[uni-id 配置](uniCloud/uni-id.md?id=config)，[uni-id新版配置(uni-id-co + uni-id-common)](uniCloud/uni-id-summary.md?id=config)
- The uni-id that `clientDB` depends on needs to add uni-id related configuration in uni-id's config.json. The parameters passed through uni-id's init method will not take effect on clientDB. Refer to: [uni-id configuration](uniCloud/uni-id.md?id=config), [uni-id new config (uni-id-co + uni-id-common)](uniCloud/uni-id-summary.md?id=config)
- 通常在管理控制台使用`clientDB`，需要获取不同角色用户拥有的权限（在权限规则内使用auth.permission），请先查阅：[uni-id 角色权限](uniCloud/uni-id.md?id=rbac)，[uni-id新版角色权限(uni-id-co + uni-id-common)](uniCloud/uni-id-summary.md?id=rbac)
- Usually use `clientDB` in the management console, you need to obtain the permissions of users with different roles (use auth.permission in the permission rules), please refer to: [uni-id role permissions](uniCloud/uni-id.md? id=rbac), [uni-id new role permissions (uni-id-co + uni-id-common)](uniCloud/uni-id-summary.md?id=rbac)



## 对比：传统与clientDB云端协同的开发效率
## Comparison: Development efficiency of traditional and clientDB cloud collaboration
> 演示：在线通讯录项目，渲染云端数据到视图
> Demo: online address book project, rendering cloud data to view

### 传统开发方式:
### Traditional development methods:
1. 传统开发你需要先写服务端代码（这里用php+mysql作为演示）用sql语法查询数据库中的数据并输出，然后再开放API。
1. In traditional development, you need to write server-side code (php+mysql is used here as a demonstration) to query the data in the database with sql syntax and output, and then open the API.

需写27行代码，如图：
27 lines of code need to be written, as shown in the figure:

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/%E4%BC%A0%E7%BB%9Fphp%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E7%9A%84%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%BB%A3%E7%A0%812.png"/>
</div>

2. 前端用ajax携带必要参数请求API，然后将请求结果赋值给data中的变量。最终把变量在视图中渲染出来。
2. The front end uses ajax to carry the necessary parameters to request the API, and then assigns the request result to the variable in the data. Finally, the variable is rendered in the view.

需写37行代码，如图：
37 lines of code need to be written, as shown in the figure:

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/%E4%BC%A0%E7%BB%9F%E5%BC%80%E5%8F%91%E6%96%B9%E5%BC%8F%E5%89%8D%E7%AB%AF%E4%BB%A3%E7%A0%81.png"/>
</div>


> 传统云端分离的开发方式，共计：64行代码。
> Traditional cloud-separated development methods, total: 64 lines of code.


### clientDB的开发方式:
### How clientDB is developed:
- 云端协同的开发方式，unicloud-db组件渲染列表。
- The development method of cloud collaboration, unicloud-db component rendering list.

仅：5行代码如图：
Only: 5 lines of code as shown:

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/clientDB%E7%9A%84%E6%96%B9%E5%BC%8F.jpg"/>
</div>


**总结：基于uniCloud云端协同的开发方式，不需要写js代码，不需要写服务端的代码。直接在视图模板中写6行代码，即可完成传统开发方式需要64行代码才能完成的效果。且不仅仅是代码量的问题。整个开发过程的体验，提高了完全不止10倍的开发效率。**
**Summary: Based on the uniCloud cloud collaborative development method, there is no need to write js code or server-side code. Write 6 lines of code directly in the view template to complete the effect that traditional development methods require 64 lines of code to complete. And it's not just a matter of code size. The experience of the entire development process has improved the development efficiency by more than 10 times. **


## clientDB图解
![](https://web-assets.dcloud.net.cn/unidoc/zh/clientdb.jpg)

`clientDB`的前端，有两种用法，可以用js API操作云数据库，也可以使用`<unicloud-db>`组件。
The front end of `clientDB` can be used in two ways. You can use the js API to operate cloud database, or you can use the `<unicloud-db>` component.

js API可以执行所有数据库操作。`<unicloud-db>`组件是js API的再封装，进一步简化查询等常用数据库操作的代码量。
js API can perform all database operations. The `<unicloud-db>` component is a repackage of the js API, which further simplifies the amount of code for common database operations such as queries.

- 在HBuilderX 3.0+，`<unicloud-db>`组件已经内置，可以直接使用。文档另见：[`<unicloud-db>`组件](/uniCloud/unicloud-db)
- In HBuilderX 3.0+, the `<unicloud-db>` component has been built in and can be used directly. Documentation see also: [`<unicloud-db>` component](/uniCloud/unicloud-db)

以下文章重点介绍`clientDB`的js API。至于组件的用法，另见[文档](uniCloud/unicloud-db.md)。
The following article focuses on the js API of `clientDB`. As for the usage of components, see also [documentation](uniCloud/unicloud-db.md).

## clientDB前端API@jssdk
## clientDB frontend API@jssdk

`clientDB`的客户端部分主要负责提供API，允许前端编写数据库操作指令，以及处理一些客户端不太方便表示的字段，比如用户ID（详情看下面语法扩展部分）
The client part of `clientDB` is mainly responsible for providing API, allowing the front-end to write database operation instructions, and processing some fields that are not convenient for the client to represent, such as user ID (see the syntax extension section below for details)

`clientDB`支持传统的nosql查询语法，并新增了`jql`查询语法。`jql`是一种更易用的查询语法。
`clientDB` supports traditional nosql query syntax and adds `jql` query syntax. `jql` is an easier to use query syntax.

**传统nosql查询语法示例**
**Traditional nosql query syntax example**

这段示例代码，在一个前端页面，直接查询了云数据库的`list`表，并且指定了`name`字段值为`hello-uni-app`的查询条件，then里的res即为返回的查询结果。
This sample code directly queries the `list` table of ApsaraDB for a front-end page, and specifies the query condition that the `name` field value is `hello-uni-app`, and the res in then is the returned query result.

```js
// 获取db引用
// get db reference
const db = uniCloud.database() //代码块为cdb
db.collection('list')
  .where({
    name: "hello-uni-app" //传统MongoDB写法，不是jql写法。实际开发中推荐使用jql写法
  }).get()
  .then((res)=>{
    // res 为数据库查询结果
    // res is the database query result
  }).catch((err)=>{
    console.log(err.code); // 打印错误码
		console.log(err.message); // 打印错误内容
  })
```

**jql查询语法示例**
**jql query syntax example**

```js
// 获取db引用
// get db reference
const db = uniCloud.database() //代码块为cdb
db.collection('list')
	.where('name=="hello-uni-app"')
	.get()
	.then((res)=>{
    // res 为数据库查询结果
	}).catch((err)=>{
		console.log(err.code); // 打印错误码
		console.log(err.message); // 打印错误内容
  })
```

**使用说明**
**Instructions for use**

前端操作数据库的语法与云函数一致，但有以下限制（使用jql语法时也一样）：
The syntax of the front-end operation database is the same as that of cloud functions, but has the following limitations (the same is true when using jql syntax):

- 上传时会对query进行序列化，除Date类型、RegExp之外的所有不可序列化的参数类型均不支持（例如：undefined）
- The query will be serialized when uploading. All non-serializable parameter types except Date type and RegExp are not supported (for example: undefined)
- 为方便控制权限，禁止前端使用set方法，一般情况下也不需要前端使用set
- For the convenience of controlling permissions, it is forbidden to use the set method on the front end, and in general, it is not necessary to use the set method on the front end
- 更新数据库时不可使用更新操作符`db.command.inc`等
- The update operator `db.command.inc`, etc. cannot be used when updating the database
- 更新数据时键值不可使用`{'a.b.c': 1}`的形式，需要写成`{a:{b:{c:1}}}`形式
- When updating data, the key value cannot be in the form of `{'a.b.c': 1}`, it needs to be written in the form of `{a:{b:{c:1}}}`

clientDB有两种方式获取数据库引用`uniCloud.database()`和`uniCloud.databaseForJQL()`（新增于HBuilderX 3.6.7）。推荐在支持`databaseForJQL`接口的版本使用`databaseForJQL`接口，和云端jql扩展库返回结构一致，方便代码复用

database接口和databaseForJQL有以下不同点

1. database接口返回的数据结构多了一层result

  在上面的示例中res的结构如下
  ```js
  {
    result: {
      data: [{
        xx: xx
      }]
    }
  }
  ```
  如果使用databaseForJQL接口，res结构如下
  ```js
  {
    data: [{
      xx: xx
    }]
  }
  ```
  
2. 使用拦截器相关接口拦截或取消拦截 databaseForJQL 接口时需使用，`databaseForJQL`作为接口名，关于拦截器的更多信息，请参考：[uniCloud 拦截器](client-sdk.md#add-interceptor)


## 客户端事件@event
## Client event @event

### 刷新token@refreshtoken
### Refresh token@refreshtoken

透传uni-id自动刷新的token给客户端
Transparently transmit the uni-id automatically refreshed token to the client

> HBuilderX 3.2.11及以上版本，clientDB会自动将刷新的token及过期时间保存在storage内。
> HBuilderX 3.2.11 and above, clientDB will automatically save the refreshed token and expiration time in storage.

**用法**
**usage**

```js
const db = uniCloud.database()

function refreshToken({
  token,
  tokenExpired
}) {
  uni.setStorageSync('uni_id_token', token)
  uni.setStorageSync('uni_id_token_expired', tokenExpired)
}
// 绑定刷新token事件
// Bind refresh token event
db.on('refreshToken', refreshToken)
// 解绑刷新token事件
// Unbind refresh token event
db.off('refreshToken', refreshToken)
```

### 错误处理@error
### Error handling @error

全局clientDB错误事件，HBuilderX 3.0.0起支持。
Global clientDB error event, supported since HBuilderX 3.0.0.

**用法**
**usage**

```js
const db = uniCloud.database()

function onDBError({
  code, // 错误码详见https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue
  message
}) {
  // 处理错误
  // handle errors
}
// 绑定clientDB错误事件
// Bind clientDB error event
db.on('error', onDBError)
// 解绑clientDB错误事件
// Unbind clientDB error events
db.off('error', onDBError)
```

## JQL语法@jql
## JQL syntax @jql

clientDB使用JQL在客户端编写查询语句，关于JQL语法请参考：[JQL语法](uniCloud/jql.md)
clientDB uses JQL to write query statements on the client side. For the JQL syntax, please refer to: [JQL syntax](uniCloud/jql.md)
