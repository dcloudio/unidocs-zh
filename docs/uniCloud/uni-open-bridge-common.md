# uni-open-bridge-common

`uni-open-bridge-common` 是 `uni-id` 体系中用于 `开放平台数据` 管理的公共模块。
`uni-open-bridge-common` is a common module in the `uni-id` system for `open platform data` management.

> `云函数公共模块`是不同云函数共享代码的一种方式。如果你不了解什么是`云函数公共模块`，请另读文档[公共模块](https://uniapp.dcloud.io/uniCloud/cf-common)
> `Cloud function common module` is a way for different cloud functions to share code. If you don't know what `cloud function common module` is, please read the document [public module](https://uniapp.dcloud.io/uniCloud/cf-common)

调用微信绝大多数后台接口时都需使用 `access_token`、`session_key`、`ticket`，开发者需要进行妥善保存。为了解决这个问题，使用公共模块 `uni-open-bridge-common` 统一调用
`access_token`, `session_key`, `ticket` are required when calling most of WeChat's backend interfaces, and developers need to keep them properly. To solve this problem, use the common module `uni-open-bridge-common` to call uniform

`uni-open-bridge-common` 有配套的云对象 `uni-open-bridge`, 可免维护 `access_token`、`ticket` 调用，[详情](/uni-open-bridge)
`uni-open-bridge-common` has a matching cloud object `uni-open-bridge`, maintenance-free `access_token`, `ticket` calls, [details](/uni-open-bridge)

`uni-open-bridge-common` 提供了 `access_token`、`session_key`、`encrypt_key`、`ticket` 的读取、写入、删除操作。
`uni-open-bridge-common` provides read, write, delete operations for `access_token`, `session_key`, `encrypt_key`, `ticket`.

`uni-open-bridge-common` 支持多层 读取 / 写入 机制，`redis -> database -> fallback`，优先级如下:
`uni-open-bridge-common` supports multi-layer read/write mechanism, `redis -> database -> fallback`, the priority is as follows:

如果用户没有开通 `redis` 或者操作失败，透传到 `database`，`database` 失败后，如果用户配置了 `fallback`，继续调用 `fallback` 方法，否则抛出 `Error`
If the user does not activate `redis` or the operation fails, it will be transparently transmitted to `database`. After `database` fails, if the user has configured `fallback`, continue to call the `fallback` method, otherwise throw `Error`

`database` 对应的表为: `opendb-open-data`
The corresponding table of `database` is: `opendb-open-data`


## access_token

`access_token` 是微信小程序全局唯一后台接口调用凭据，调用绝大多数后台接口时都需使用。开发者可以通过 getAccessToken 接口获取并进行妥善保存。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/backend-api.html#access_token)
`access_token` is the globally unique background interface calling credential of WeChat Mini Program, which is required when calling most of the background interfaces. Developers can obtain and store them properly through the getAccessToken interface. [Details](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/backend-api.html#access_token)


### getAccessToken(key: Object, fallback: Function)

读取 access_token
read access_token


### setAccessToken(key: Object, value: Object, expiresIn: Number)

写入 access_token
write access_token


### removeAccessToken(key: Object)

删除 access_token
delete access_token


### key 属性
### key property

|参数				|类型			|必填	|描述																															|
|Parameters |Type |Required |Description |
|:-:				|:-:			|:-:	|:-:																															|
|dcloudAppid|String		|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|dcloudAppid|String |Yes |DCloud application appid. [Details](https://ask.dcloud.net.cn/article/35907) |
|platform		|String		|是		|[详情](#platform)																								|
|platform |String |Yes |[Details](#platform) |

### value 属性
### value property

|参数					|类型		|描述					|
|parameter |type |description |
|:-:					|:-:		|:-:					|
|access_token	|String	|							|

### expiresIn

有效时间(秒)
Effective time (seconds)


### 示例代码
### Sample code

```js
'use strict';

const {
  getAccessToken,
  setAccessToken,
  removeAccessToken
} = require('uni-open-bridge-common')

exports.main = async (event, context) => {
  const key = {
    dcloudAppid: '',
    platform: ''
  }
  const value = {
    access_token: ''
  }
  const expiresIn = 7200

  // 写入 (redis / 数据库)
  // write (redis / database)
  await setAccessToken(key, value, expiresIn)

  // 读取 (redis / 数据库)
  // read (redis / database)
  let result1 = await getAccessToken(key)

  // 删除
  // delete
  await removeAccessToken(key)


  // 删除后读取, 返回 null
  // read after deletion, return null
  let result2 = await getAccessToken(key)
  console.log(result2) // null

  return null
};
```


## user_key

平台对应的值
The value corresponding to the platform

|平台				|值					|描述																																																								|
|Platform |Value |Description |
|:-:				|:-:				|:-:																																																								|
|微信小程序	|session_key|微信小程序会话密钥。[详情](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html)	|
|WeChat applet |session_key|WeChat applet session key. [Details](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html) |


### getUserKey(key: Object, fallback: Function)

读取 user_key
read user_key


### setUserKey(key: Object, value: Object, expiresIn: Number)

写入 user_key
write user_key


### removeUserKey(key: Object)

删除 user_key
delete user_key


### key 属性
### key property

|参数				|类型			|必填	|描述																															|
|Parameters |Type |Required |Description |
|:-:				|:-:			|:-:	|:-:																															|
|dcloudAppid|String		|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|dcloudAppid|String |Yes |DCloud application appid. [Details](https://ask.dcloud.net.cn/article/35907) |
|platform		|String		|是		|[详情](#platform)																								|
|platform |String |Yes |[Details](#platform) |
|openid			|String		|是		|																																	|
|openid |String |Yes | |
|fallback		|Function	|否		|[详情](#fallback)																								|
|fallback |Function |No |[Details](#fallback) |

### value 属性
### value property

|参数				|类型		|描述								|
|parameter |type |description |
|:-:				|:-:		|:-:								|
|session_key|String	|微信小程序会话密钥	|
|session_key|String |WeChat applet session key |

### expiresIn

有效时间(秒)
Effective time (seconds)


### 示例代码
### Sample code

```js
'use strict';

const {
  getUserKey,
  setUserKey,
  removeUserKey,
} = require('uni-open-bridge-common')

exports.main = async (event, context) => {
  const key = {
    dcloudAppid: '',
    platform: '',
    openid: ''
  }
  const value = {
    'session_key': ''
  }
  const expiresIn = 7200

  // 写入 (redis / 数据库)
  // write (redis / database)
  await setUserKey(key, value, expiresIn)

  // 读取 (redis / 数据库)
  // read (redis / database)
  let result1 = await getUserKey(key)

  // 删除
  // delete
  await removeUserKey(key)


  // 删除后读取, 返回 null
  // read after deletion, return null
  let result2 = await getUserKey(key)
  console.log(result2) // null

  return null
};
```


## encrypt_key

为了避免小程序与开发者后台通信时数据被截取和篡改，微信侧维护了一个用户维度的可靠key，用于小程序和后台通信时进行加密和签名。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/user-encryptkey.html)
In order to avoid data interception and tampering when the applet communicates with the developer in the background, the WeChat side maintains a user-dimensional reliable key, which is used for encryption and signature when the applet communicates with the background. [Details](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/user-encryptkey.html)

开发者可以分别通过小程序前端和微信后台提供的接口，获取用户的加密 key。
Developers can obtain the user's encryption key through the interfaces provided by the front-end of the applet and the back-end of WeChat respectively.


### getEncryptKey(key: Object, fallback: Function)

读取 encrypt_key
read encrypt_key


### setEncryptKey(key: Object, value: Object, expiresIn: Number)

写入 encrypt_key
write encrypt_key


### removeEncryptKey(key: Object)

删除 encrypt_key
delete encrypt_key


### key 属性
### key property

|参数				|类型			|必填	|描述																															|
|Parameters |Type |Required |Description |
|:-:				|:-:			|:-:	|:-:																															|
|dcloudAppid|String		|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|dcloudAppid|String |Yes |DCloud application appid. [Details](https://ask.dcloud.net.cn/article/35907) |
|platform		|String		|是		|[详情](#platform)																								|
|platform |String |Yes |[Details](#platform) |
|openid			|String		|是		|																																	|
|openid |String |Yes | |
|version		|Number		|是		|版本																															|
|version |Number |Yes |Version|
|fallback		|Function	|否		|[详情](#fallback)																								|
|fallback |Function |No |[Details](#fallback) |


### value 属性
### value property

|参数				|类型		|描述			|
|parameter |type |description |
|:-:				|:-:		|:-:			|
|encrypt_key|String	|加密 key	|
|encrypt_key|String |Encryption key |
|iv					|String	|加密 iv	  |
|iv |String |encrypted iv |

### expiresIn

有效时间(秒)
Effective time (seconds)


### 示例代码
### Sample code

```js
'use strict';

const {
  getEncryptKey,
  setEncryptKey,
  removeEncryptKey
} = require('uni-open-bridge-common')

exports.main = async (event, context) => {
  const key = {
    dcloudAppid: '',
    platform: '',
    openid: '',
    version: 1
  }
  const value = {
    encrypt_key: '',
    iv: ''
  }
  const expiresIn = 7200

  // 写入 (redis / 数据库)
  // write (redis / database)
  await setEncryptKey(key, value, expiresIn)

  // 读取 (redis / 数据库)
  // read (redis / database)
  let result1 = await getEncryptKey(key)

  // 删除
  // delete
  await removeEncryptKey(key)

  // 删除后读取, 返回 null
  // read after deletion, return null
  let result2 = await getEncryptKey(key)
  console.log(result2) // null

  return null
};
```


## ticket

`ticket` 是公众号用于调用微信 JS 接口的临时票据。[详情](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62)
`ticket` is a temporary ticket used by the official account to call the WeChat JS interface. [Details](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62)


### getTicket(key: Object, fallback: Function)

读取 ticket
read ticket


### setTicket(key: Object, value: Object, expiresIn: Number)

写入 ticket
write ticket


### removeTicket(key: Object)

删除 ticket
delete ticket


### key 属性
### key property

|参数				|类型			|必填	|描述																															|
|Parameters |Type |Required |Description |
|:-:				|:-:			|:-:	|:-:																															|
|dcloudAppid|String		|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|dcloudAppid|String |Yes |DCloud application appid. [Details](https://ask.dcloud.net.cn/article/35907) |
|platform		|String		|是		|[详情](#platform)																								|
|platform |String |Yes |[Details](#platform) |
|fallback		|Function	|否		|[详情](#fallback)																								|
|fallback |Function |No |[Details](#fallback) |

### value 属性
### value property

|参数				|类型		|描述			|
|parameter |type |description |
|:-:				|:-:		|:-:			|
|ticket			|String	|					|

### expiresIn

有效时间(秒)
Effective time (seconds)


### 示例代码
### Sample code

```js
'use strict';

const {
  getTicket,
  setTicket,
  removeTicket
} = require('uni-open-bridge-common')

exports.main = async (event, context) => {
  const key = {
    dcloudAppid: '',
    platform: ''
  }
  const value = {
    ticket: ''
  }
  const expiresIn = 7200

  // 写入 (redis / 数据库)
  // write (redis / database)
  await setTicket(key, value, expiresIn)

  // 读取 (redis / 数据库)
  // read (redis / database)
  let result1 = await getTicket(key)

  // 删除
  // delete
  await removeTicket(key)


  // 删除后读取, 返回 null
  // read after deletion, return null
  let result2 = await getTicket(key)
  console.log(result2) // null

  return null
};
```


## Platform@platform

平台对应的值
The value corresponding to the platform

|值					|描述				|
|value |description |
|:-:				|:-:				|
|mp-weixin	|微信小程序	|
|mp-weixin |WeChat Mini Program |
|app-weixin	|微信 App	  |
|app-weixin |WeChat App |
|h5-weixin	|微信公众号	|
|h5-weixin |WeChat Official Account |
|web-weixin	|微信pc网页	|
|web-weixin |WeChat pc webpage |
|mp-qq			|QQ 小程序		|
|app-qq			|QQ App			|


## fallback@fallback

可选 `async function fallback()`，当 `reids -> database` 都找不到对应 `key` 时，调用此方法，需要返回数据格式如下
Optional `async function fallback()`, when `reids -> database` cannot find the corresponding `key`, this method is called, and the returned data format is as follows

```json
{
  value: null,
  duration: 1
}
```

为了简化调用 `getAccessToken()`、`getTicket()` 已内置 `fallback` 到微信的服务器，需要在 `config-center` 中配置 `appid` `appsecret`
In order to simplify calling `getAccessToken()`, `getTicket()` has built-in `fallback` to WeChat server, you need to configure `appid` `appsecret` in `config-center`


注意事项
Precautions
- 所有方法类型为 `async`，需要使用 `await`
- All methods are of type `async` and need to use `await`
- 所有方法校验 `key` 属性是否有效，无效则 `throw new Error()`，对 `value` 仅校验是否为 `undefined`
- All methods check whether the `key` property is valid, if invalid, `throw new Error()`, for `value` only check whether it is `undefined`
