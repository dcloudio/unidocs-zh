JQL语法相关文档已移至：[JQL语法](jql.md)

## clientDB简介

> 自`HBuilderX 2.9.5`起支持在客户端直接使用`uniCloud.database()`方式获取数据库引用，即在前端直接操作数据库，这个功能被称为`clientDB`

> `HBuilderX 2.9.5`以前的用户如使用过`clientDB`，在升级后请将`clientDB`的前端库和云函数删除，新版已经在前端和云端内置了`clientDB`

大白话：传统的数据库操作只能在服务端实现，因为他在前端使用有安全问题。而uniCloud的云数据库有表结构(DB Schema)他通过简单的js表达式，配置了：各种角色权限的账号是否可以读取和写入某种规范的数据等，解决了在前端操作的安全问题；因此uniCloud的云数据库可以直接在前端调用。

使用`clientDB`的好处：**不用写服务器代码了！**

1个应用开发的一半的工作量，就此直接省去。

当然使用`clientDB`需要扭转传统后台开发观念，不再编写服务端代码，直接在前端操作数据库。但是为了数据安全，需要在数据库上配置`DB Schema`。

在`DB Schema`中，配置数据操作的权限和字段值域校验规则，阻止前端不恰当的数据读写。详见：[DB Schema](https://uniapp.dcloud.net.cn/uniCloud/schema)

如果需要数据库操作之前或之后，云端执行关联逻辑（比如获取文章详情后，文章阅读量+1），`clientDB`提供了[数据库触发器](jql-schema-ext.md)（从HBuilderX 3.6.11开始）。
在不支持数据库触发器的低版本，使用[action云函数](jql.md#action)

**注意**

- `clientDB`依赖uni-id（`1.1.10+版本`）提供用户身份和权限校验，存在uni-id-common时clientDB会优先依赖uni-id-common，如果你不了解uni-id，请参考：[uni-id文档](uniCloud/uni-id.md)，[uni-id-common文档](uniCloud/uni-id-common.md)
- `clientDB`依赖的uni-id需要在uni-id的config.json内添加uni-id相关配置，通过uni-id的init方法传递的参数不会对clientDB生效，参考：[uni-id 配置](uniCloud/uni-id.md?id=config)，[uni-id新版配置(uni-id-co + uni-id-common)](uniCloud/uni-id-summary.md?id=config)
- 通常在管理控制台使用`clientDB`，需要获取不同角色用户拥有的权限（在权限规则内使用auth.permission），请先查阅：[uni-id 角色权限](uniCloud/uni-id.md?id=rbac)，[uni-id新版角色权限(uni-id-co + uni-id-common)](uniCloud/uni-id-summary.md?id=rbac)



## 对比：传统与clientDB云端协同的开发效率
> 演示：在线通讯录项目，渲染云端数据到视图

### 传统开发方式:
1. 传统开发你需要先写服务端代码（这里用php+mysql作为演示）用sql语法查询数据库中的数据并输出，然后再开放API。

需写27行代码，如图：

<div align=center>
  <img style="max-width:750px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E4%BC%A0%E7%BB%9Fphp%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E7%9A%84%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%BB%A3%E7%A0%812.png"/>
</div>

2. 前端用ajax携带必要参数请求API，然后将请求结果赋值给data中的变量。最终把变量在视图中渲染出来。

需写37行代码，如图：

<div align=center>
  <img style="max-width:750px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E4%BC%A0%E7%BB%9F%E5%BC%80%E5%8F%91%E6%96%B9%E5%BC%8F%E5%89%8D%E7%AB%AF%E4%BB%A3%E7%A0%81.png"/>
</div>


> 传统云端分离的开发方式，共计：64行代码。


### clientDB的开发方式:
- 云端协同的开发方式，unicloud-db组件渲染列表。

仅：5行代码如图：

<div align=center>
  <img style="max-width:750px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/clientDB%E7%9A%84%E6%96%B9%E5%BC%8F.jpg"/>
</div>


**总结：基于uniCloud云端协同的开发方式，不需要写js代码，不需要写服务端的代码。直接在视图模板中写6行代码，即可完成传统开发方式需要64行代码才能完成的效果。且不仅仅是代码量的问题。整个开发过程的体验，提高了完全不止10倍的开发效率。**


## clientDB图解
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/clientdb.jpg)

`clientDB`的前端，有两种用法，可以用js API操作云数据库，也可以使用`<unicloud-db>`组件。

js API可以执行所有数据库操作。`<unicloud-db>`组件是js API的再封装，进一步简化查询等常用数据库操作的代码量。

- 在HBuilderX 3.0+，`<unicloud-db>`组件已经内置，可以直接使用。文档另见：[`<unicloud-db>`组件](/uniCloud/unicloud-db)

以下文章重点介绍`clientDB`的js API。至于组件的用法，另见[文档](uniCloud/unicloud-db.md)。

## clientDB前端API@jssdk

`clientDB`的客户端部分主要负责提供API，允许前端编写数据库操作指令，以及处理一些客户端不太方便表示的字段，比如用户ID（详情看下面语法扩展部分）

`clientDB`支持传统的nosql查询语法，并新增了`jql`查询语法。`jql`是一种更易用的查询语法。

**传统nosql查询语法示例**

这段示例代码，在一个前端页面，直接查询了云数据库的`list`表，并且指定了`name`字段值为`hello-uni-app`的查询条件，then里的res即为返回的查询结果。

```js
// 获取db引用
const db = uniCloud.database() //代码块为cdb
db.collection('list')
  .where({
    name: "hello-uni-app" //传统MongoDB写法，不是jql写法。实际开发中推荐使用jql写法
  }).get()
  .then((res)=>{
    // res 为数据库查询结果
  }).catch((err)=>{
    console.log(err.code); // 打印错误码
		console.log(err.message); // 打印错误内容
  })
```

**jql查询语法示例**

```js
// 获取db引用
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

前端操作数据库的语法与云函数一致，但有以下限制（使用jql语法时也一样）：

- 上传时会对query进行序列化，除Date类型、RegExp之外的所有不可序列化的参数类型均不支持（例如：undefined）
- 为方便控制权限，禁止前端使用set方法，一般情况下也不需要前端使用set
- 更新数据库时不可使用更新操作符`db.command.inc`等
- 更新数据时键值不可使用`{'a.b.c': 1}`的形式，需要写成`{a:{b:{c:1}}}`形式

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

### 刷新token@refreshtoken

透传uni-id自动刷新的token给客户端

> HBuilderX 3.2.11及以上版本，clientDB会自动将刷新的token及过期时间保存在storage内。

**用法**

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
db.on('refreshToken', refreshToken)
// 解绑刷新token事件
db.off('refreshToken', refreshToken)
```

### 错误处理@error

全局clientDB错误事件，HBuilderX 3.0.0起支持。

**用法**

```js
const db = uniCloud.database()

function onDBError({
  code, // 错误码详见https://uniapp.dcloud.net.cn/uniCloud/jql.html#returnvalue
  message
}) {
  // 处理错误
}
// 绑定clientDB错误事件
db.on('error', onDBError)
// 解绑clientDB错误事件
db.off('error', onDBError)
```

## JQL语法@jql

clientDB使用JQL在客户端编写查询语句，关于JQL语法请参考：[JQL语法](uniCloud/jql.md)
