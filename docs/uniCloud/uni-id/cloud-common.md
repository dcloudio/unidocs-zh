## 概述
## Overview

> HBuilderX 3.5.0+ 支持
> HBuilderX 3.5.0+ support

`云函数公共模块`是不同云函数共享代码的一种方式。如果你不了解什么是`云函数公共模块`，请另读文档[公共模块](../cf-common.md)

`uni-id-common`是`uni-id`体系中用于token管理的公共模块。
`uni-id-common` is a common module for token management in the `uni-id` system.

[旧版本uni-id公共模块](old.md)是一个大而全的公共模块，不适用被众多云函数引用。

新版的`uni-id-common`仅包含token校验、生成及刷新功能。而用户注册、登录、忘记密码等实现都挪到了[uni-id-co](cloud-object.md)云对象中。

这样不仅减小了公共模块的体积，也简化了学习成本。
This not only reduces the size of the common module, but also simplifies the learning cost.

从HBuilderX 3.5起，新建uniCloud项目时，会自动加载 `uni-id-common` 依赖。也就是 `uni-id-common` 默认内置在每个项目中。
Starting from HBuilderX 3.5, the `uni-id-common` dependency is automatically loaded when creating a new uniCloud project. That is, `uni-id-common` is built into every project by default.

一般开发者无需了解`uni-id-common`公共模块的API，直接使用[uni-id-pages](redirect.md)云端一体页面模板即可。

如果想了解`uni-id-common`公共模块内部实现，可以阅读本章节。
If you want to understand the internal implementation of the `uni-id-common` common module, you can read this chapter.

## API列表@api
## API list @api

### 创建uni-id实例@create-instance
### Create uni-id instance @create-instance

**注意：不同于旧版本uni-id公共模块，uni-id-common必须调用此接口创建实例后才可以调用checkToken等接口**
**Note: Unlike the old version of uni-id common module, uni-id-common must call this interface to create an instance before calling interfaces such as checkToken**

用法：`uniID.createInstance(Object CreateInstanceOptions);`

CreateInstanceOptions内可以传入云函数context，也可以传入clientInfo参数，作用和context类似。方便在云对象内获取clientInfo后直接传入，[什么是云对象？](../cloud-obj.md)。

```js
// 云函数代码，传入context
// Cloud function code, pass in context
const uniID = require('uni-id-common')
exports.main = async function(event,context) {
  context.APPID = '__UNI__xxxxxxx' // 替换为当前客户端的APPID，通过客户端callFunction请求的场景可以使用context.APPID获取
  context.PLATFORM = 'web' // 替换为当前客户端的平台类型，通过客户端callFunction请求的场景可以使用context.PLATFORM获取
  context.LOCALE = 'zh-Hans' // 替换为当前客户端的语言代码，通过客户端callFunction请求的场景可以使用context.LOCALE获取
  const uniIDIns = uniID.createInstance({ // 创建uni-id实例
    context: context,
    // config: {} // 完整uni-id配置信息，使用config.json进行配置时无需传此参数
    // config: {} // Complete uni-id configuration information, no need to pass this parameter when using config.json for configuration
  })
  payload = await uniIDIns.checkToken(event.uniIdToken) // 后续使用uniIDIns调用相关接口
  if (payload.code) {
  	return payload
  }
}

// 云对象代码传入clientInfo
// Cloud object code passes in clientInfo
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
**Why do you need to create a uni-id instance yourself**

默认情况下`uni-id-common`某些接口会自动从全局context内获取客户端的PLATFORM（平台，如：app、h5、mp-weixin）等信息。
By default, some interfaces of `uni-id-common` will automatically obtain the client's PLATFORM (platform, such as app, h5, mp-weixin) and other information from the global context.

在云函数[单实例多并发](../cf-functions.md?id=concurrency)的场景下可能无法正确获取（全局对象会被后面的请求覆盖，可能会导致前面一次请求使用了后面一次请求的PLATFORM信息）。因此推荐在开启云函数单实例多并发后，自行为uni-id传入context。

此外云函数url化时无法获取客户端信息，也需要使用这种方式将客户端信息传入uni-id。
In addition, when the cloud function is urlized, the client information cannot be obtained, and it is also necessary to pass the client information into the uni-id in this way.

### token校验@checktoken
### token verification @checktoken

一个校验客户端发起请求（uniCloud.callFunction）自带的uniIdToken，获得用户的uid、token、token的过期时间、角色、权限的API。
An API that verifies the uniIdToken that comes with the request initiated by the client (uniCloud.callFunction), and obtains the user's uid, token, token expiration time, role, and permissions.

这是非常高频且重要的API通常用于换取操作当前云函数的用户Id。
This is a very high frequency and important API that is usually used in exchange for the user ID of the current cloud function.

**思考**
**think**

如果你并没有服务端开发经验，可能会想：为什么需要通过token去换取用户Id，而不是让客户端直接传递用户Id更方便？
If you have no experience in server-side development, you may think: Why do you need to exchange the user ID with a token, instead of letting the client pass the user ID directly?
这里就涉及到安全问题，有一句话叫做：“前端传递的参数都是不可信任的”。比如：你去银行取款，柜台会要求出示你的身份证来证明你是谁，而不是你直接告诉银行柜台你是谁就管用。否则这是一个极大的安全漏洞。
This involves security issues. There is a saying: "The parameters passed by the front end cannot be trusted." For example, if you go to the bank to withdraw money, the counter will ask to show your ID card to prove who you are, instead of telling the bank counter directly who you are. Otherwise this is a huge security hole.
综上所述：所有服务端操作涉及账户信息相关内容，都需要使用token来获得，而不是使用前端传递的参数。
To sum up: All server-side operations involving account information related content need to be obtained by using tokens instead of parameters passed by the front-end.

用法：`uniIDIns.checkToken(String token, Object checkTokenOptions)`
Usage: `uniIDIns.checkToken(String token, Object checkTokenOptions)`

**参数说明**
**Parameter Description**

| 字段							| 类型		| 必填	| 说明								|
| Fields | Type | Required | Description |
| ---							| ---		| ---	| ---								|
| token							| String	| 是	|客户端callFunction带上的token		|
| token | String | Yes | The token brought by the client callFunction |
| options						| object	| 否	|checkToken方法的选项				|
| options | object | no | options for checkToken method |
| &nbsp;&#124;-&nbsp;autoRefresh| boolean	| 否	|是否需要自动判断刷新token，默认true	|
| &nbsp;&#124;-&nbsp;autoRefresh| boolean | No |Whether it is necessary to automatically determine the refresh token, the default is true |

**说明**
**illustrate**

- 角色内包含admin时返回的permission是一个空数组，因此判断一个用户是否有权限时应注意admin角色额外进行判断
- The permission returned when the role contains admin is an empty array, so when judging whether a user has permission, you should pay attention to the admin role for additional judgment

**响应参数**
**Response parameters**

| 字段			| 类型				| 说明																								|
| Field | Type | Description |
| ---			| ---				| ---																								|
| errCode		| Number&#124;String|错误码，0表示成功																					|
| errCode | Number&#124;String|Error code, 0 means success |
| message		| String			|详细信息																							|
| message | String | Details |
| uid			| String			|用户Id，校验成功之后会返回																			|
| uid | String | User ID, it will be returned after successful verification |
| token			| String			|用户token快要过期时，新生成的token，只有在config内配置了`tokenExpiresThreshold`的值时才会有此行为	|
| token | String | When the user token is about to expire, the newly generated token will only have this behavior when the value of `tokenExpiresThreshold` is configured in config |
| tokenExpired	| TimeStamp			|新token的过期时间，单位毫秒																		|
| role			| Array				|-																									|
| permission	| Array				|用户权限列表。																						|
|permission|Array|A list of user permissions. |

uni-id使用jwt生成token，jwt所生成的token包含三部分，其中存储的信息为明文信息，uni-id只根据tokenSecret来校验客户端token是否合法。
uni-id uses jwt to generate a token. The token generated by jwt consists of three parts, and the stored information is plaintext information. uni-id only verifies whether the client token is legal based on the tokenSecret.


角色权限将被缓存在token中，此举能减少或消除checkToken的查库次数（有效节省费用、减少响应时间）
Role permissions will be cached in the token, which can reduce or eliminate the number of checkToken checks (effectively saving costs and reducing response time)

**注意：**
**Notice:**

- 客户端会自动查找storage内的token在callFunction时插入
- The client will automatically find the token in the storage and insert it during callFunction
- HBuilderX 2.9.5+ 客户端允许开发者自行在callFunction时传入uniIdToken，此时不再从storage获取token
- HBuilderX 2.9.5+ client allows developers to pass in uniIdToken when calling Function, and no longer get token from storage
- HBuilderX 2.8.0版本起token存储在storage内推荐使用使用蛇形`uni_id_token`，会在一段时间内兼容驼峰形式`uniIdToken`
- Since HBuilderX version 2.8.0, it is recommended to use the snake-shaped `uni_id_token` when the token is stored in the storage, which will be compatible with the camel-case `uniIdToken` for a period of time

### 主动刷新token@refresh-token
### Active refresh token@refresh-token

> 新增于uni-id 3.3.14
> Added in uni-id 3.3.14

用法：`uniIDIns.refreshToken(Object RefreshTokenOptions);`

**参数说明**
**Parameter Description**

| 字段| 类型	| 必填| 说明	|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---		|
| token	| String| 是	|用户token|
| token | String| Yes |user token|

**示例**
**Example**

```js
const {
  token,
  tokenExpired
} = await uniIDIns.refreshToken({
  token: 'xxx'
})
```

**注意**
**Notice**

- 刷新token时会自动更新token内uid对应的角色权限
- The role permissions corresponding to the uid in the token will be automatically updated when the token is refreshed

### 生成token@createtoken
### Generate token@createtoken

用法：`uniIDIns.createToken(Object CreateTokenOptions)`

**参数说明**
**Parameter Description**

| 字段		| 类型	| 必填	| 说明					|
| Fields | Type | Required | Description |
| ---		| ---	| ---	| ---					|
| uid		| String| 是	|用户Id					|
|uid|String|Yes |UserId|
| role		| Array	| 否	|指定缓存在token内的角色|
| role | Array | no | Specifies the role cached in the token |
| permission| Array	| 否	|指定缓存在角色内的权限	|
|permission|Array|No |Specifies the permissions cached in the role|

**响应参数**
**Response parameters**

| 字段				| 类型	| 必填| 说明										|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---											|
| token				| String| 是	|生成的token							|
| token | String| Yes | Generated token |
| tokenExpired| Number| 是	|token过期时间对应的时间戳|
|tokenExpired|Number| Yes |Timestamp corresponding to token expiration time|

**说明**
**illustrate**

- 创建token时如果未传角色权限会自动获取uid对应的角色权限
- If the role permission is not passed when creating the token, the role permission corresponding to the uid will be automatically obtained
