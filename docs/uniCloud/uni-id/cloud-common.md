## 概述

> HBuilderX 3.5.0+ 支持

`云函数公共模块`是不同云函数共享代码的一种方式。如果你不了解什么是`云函数公共模块`，请另读文档[公共模块](../cf-common.md)

`uni-id-common`是`uni-id`体系中用于token管理的公共模块。

[旧版本uni-id公共模块](old.md)是一个大而全的公共模块，不适用被众多云函数引用。

新版的`uni-id-common`仅包含token校验、生成及刷新功能。而用户注册、登录、忘记密码等实现都挪到了[uni-id-co](cloud-object.md)云对象中。

这样不仅减小了公共模块的体积，也简化了学习成本。

从HBuilderX 3.5起，新建uniCloud项目时，会自动加载 `uni-id-common` 依赖。也就是 `uni-id-common` 默认内置在每个项目中。

一般开发者无需了解`uni-id-common`公共模块的API，直接使用[uni-id-pages](redirect.md)云端一体页面模板即可。

如果想了解`uni-id-common`公共模块内部实现，可以阅读本章节。

## API列表@api

### 创建uni-id实例@create-instance

**注意：不同于旧版本uni-id公共模块，uni-id-common必须调用此接口创建实例后才可以调用checkToken等接口**

用法：`uniID.createInstance(Object CreateInstanceOptions);`

CreateInstanceOptions内可以传入云函数context，也可以传入clientInfo参数，作用和context类似。方便在云对象内获取clientInfo后直接传入，[什么是云对象？](../cloud-obj.md)。

```js
// 云函数代码，传入context
const uniID = require('uni-id-common')
exports.main = async function(event,context) {
  context.APPID = '__UNI__xxxxxxx' // 替换为当前客户端的APPID，通过客户端callFunction请求的场景可以使用context.APPID获取
  context.PLATFORM = 'web' // 替换为当前客户端的平台类型，通过客户端callFunction请求的场景可以使用context.PLATFORM获取
  context.LOCALE = 'zh-Hans' // 替换为当前客户端的语言代码，通过客户端callFunction请求的场景可以使用context.LOCALE获取
  const uniIDIns = uniID.createInstance({ // 创建uni-id实例
    context: context,
    // config: {} // 完整uni-id配置信息，使用config.json进行配置时无需传此参数
  })
  payload = await uniIDIns.checkToken(event.uniIdToken) // 后续使用uniIDIns调用相关接口
  if (payload.code) {
  	return payload
  }
}

// 云对象代码传入clientInfo
const uniID = require('uni-id-common')
module.exports = {
	_before() {
		const clientInfo = this.getClientInfo()
		this.uniID = uniID.createInstance({ // 创建uni-id实例，其上方法同uniID
			clientInfo
		})
	},
	refreshToken() {
		// ...
    // this.uniID.refreshToken()
	}
}
```

**为什么需要自行创建uni-id实例**

默认情况下`uni-id-common`某些接口会自动从全局context内获取客户端的PLATFORM（平台，如：app、h5、mp-weixin）等信息。

在云函数[单实例多并发](../cf-functions.md?id=concurrency)的场景下可能无法正确获取（全局对象会被后面的请求覆盖，可能会导致前面一次请求使用了后面一次请求的PLATFORM信息）。因此推荐在开启云函数单实例多并发后，自行为uni-id传入context。

此外云函数url化时无法获取客户端信息，也需要使用这种方式将客户端信息传入uni-id。

### token校验@checktoken

一个校验客户端发起请求（uniCloud.callFunction）自带的uniIdToken，获得用户的uid、token、token的过期时间、角色、权限的API。

这是非常高频且重要的API通常用于换取操作当前云函数的用户Id。

**思考**

如果你并没有服务端开发经验，可能会想：为什么需要通过token去换取用户Id，而不是让客户端直接传递用户Id更方便？
这里就涉及到安全问题，有一句话叫做：“前端传递的参数都是不可信任的”。比如：你去银行取款，柜台会要求出示你的身份证来证明你是谁，而不是你直接告诉银行柜台你是谁就管用。否则这是一个极大的安全漏洞。
综上所述：所有服务端操作涉及账户信息相关内容，都需要使用token来获得，而不是使用前端传递的参数。

用法：`uniIDIns.checkToken(String token, Object checkTokenOptions)`

**参数说明**

| 字段							| 类型		| 必填	| 说明								|
| ---							| ---		| ---	| ---								|
| token							| String	| 是	|客户端callFunction带上的token		|
| options						| object	| 否	|checkToken方法的选项				|
| &nbsp;&#124;-&nbsp;autoRefresh| boolean	| 否	|是否需要自动判断刷新token，默认true	|

**说明**

- 角色内包含admin时返回的permission是一个空数组，因此判断一个用户是否有权限时应注意admin角色额外进行判断

**响应参数**

| 字段			| 类型				| 说明																								|
| ---			| ---				| ---																								|
| errCode		| Number&#124;String|错误码，0表示成功																					|
| message		| String			|详细信息																							|
| uid			| String			|用户Id，校验成功之后会返回																			|
| token			| String			|用户token快要过期时，新生成的token，只有在config内配置了`tokenExpiresThreshold`的值时才会有此行为	|
| tokenExpired	| TimeStamp			|新token的过期时间，单位毫秒																		|
| role			| Array				|-																									|
| permission	| Array				|用户权限列表。																						|

uni-id使用jwt生成token，jwt所生成的token包含三部分，其中存储的信息为明文信息，uni-id只根据tokenSecret来校验客户端token是否合法。


角色权限将被缓存在token中，此举能减少或消除checkToken的查库次数（有效节省费用、减少响应时间）

**注意：**

- 客户端会自动查找storage内的token在callFunction时插入
- HBuilderX 2.9.5+ 客户端允许开发者自行在callFunction时传入uniIdToken，此时不再从storage获取token
- HBuilderX 2.8.0版本起token存储在storage内推荐使用使用蛇形`uni_id_token`，会在一段时间内兼容驼峰形式`uniIdToken`

### 主动刷新token@refresh-token

> 新增于uni-id 3.3.14

用法：`uniIDIns.refreshToken(Object RefreshTokenOptions);`

**参数说明**

| 字段| 类型	| 必填| 说明	|
| ---	| ---		| ---	| ---		|
| token	| String| 是	|用户token|

**示例**

```js
const {
  token,
  tokenExpired
} = await uniIDIns.refreshToken({
  token: 'xxx'
})
```

**注意**

- 刷新token时会自动更新token内uid对应的角色权限

### 生成token@createtoken

用法：`uniIDIns.createToken(Object CreateTokenOptions)`

**参数说明**

| 字段		| 类型	| 必填	| 说明					|
| ---		| ---	| ---	| ---					|
| uid		| String| 是	|用户Id					|
| role		| Array	| 否	|指定缓存在token内的角色|
| permission| Array	| 否	|指定缓存在角色内的权限	|

**响应参数**

| 字段				| 类型	| 必填| 说明										|
| ---					| ---		| ---	| ---											|
| token				| String| 是	|生成的token							|
| tokenExpired| Number| 是	|token过期时间对应的时间戳|

**说明**

- 创建token时如果未传角色权限会自动获取uid对应的角色权限
