# uni-open-bridge

`uni-open-bridge` 是统一接管微信等三方平台认证的开源库

`uni-open-bridge` 由云对象 `uni-open-bridge` 和公共模块 `uni-open-bridge-common` 两部分组成

## 简介

调用微信绝大多数后台接口时都需使用 `access_token`、`session_key`、`ticket` 开发者需要进行统一保存，部分参数需要定时刷新。为了解决这个问题，使用公共模块 `uni-open-bridge-common` 统一调用，详情见下文说明


## 云对象 uni-open-bridge

云对象 `uni-open-bridge` 提供以下功能

1. 定时从三方平台服务器获取数据，通过公共模块 `uni-open-bridge-commmon` 保存到 `Redis` 或 `database`
2. 通过 http 方式操作开放平台数据的读取、写入、删除

uniCloud 用户应通过引入公共模块 `uni-open-bridge-commmon` 操作数据，非 uniCloud 用户通过 http 的方式

<img src="/uniCloud/svg/uni-open-bridge.svg"></img>

### uni-open-bridge 配置

配置文件需要依赖 `uni-config-center`，在 `uni-config-center` 根目录添加文件夹 `uni-open-bridge`, 新增 `config.json`, 内容如下

```json
{
  "schedule": {
    "__UNI__xxxxxx": { // dcloudAppid,需要在 `uni-config-center` uni-id 中配置
      "enable": true, // 任务全局开关，优先级最高
      "mp-weixin": { // 平台，目前仅支持 微信小程序、微信 H5，详情参见 https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge#platform
        "enable": true, // 当前平台任务开关
        "tasks": ["accessToken"] // 要执行的任务，微信小程序支持 accessToken
      },
      "h5-weixin": {
        "enable": false,
        "tasks": ["ticket"] // 支持微信 H5 ticket，因 ticker 依赖微信 H5 accessToken，内部自动先获取 accessToken。此处的 accessToken 和微信小程序的 accessToken 不是一个值
      }
    }
  },
  "ipWhiteList": ["0.0.0.0"] // 用于 http 调用的服务器IP白名单，支持配置多个，阿里云暂不支持独立IP，可以先使用腾讯云，如果需要使用阿里云，可以通过http的方式将值保存
}
```

注意：拷贝此文件内容到 `config.json` 时需要移除`注释`


### http 调用

请求类型 `POST`, 需要配置IP白名单字段 `ipWhiteList`，参见 `config.json`

同时需要开启 [URL化](https://uniapp.dcloud.net.cn/uniCloud/http.html)，详见 [uniCloud Web](https://unicloud.dcloud.net.cn/) 控制台

### getAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/getAccessToken
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin"
}
```

### setAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setAccessToken
```

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin",
  "value": {
    "access_token": ""
  },
  "expiresIn": 7200
}
```

### removeAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/removeAccessToken
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin"
}
```

### getUserKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/getUserKey
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin",
  "openid": ""
}
```

### setUserKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setUserKey
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin",
  "openid": "",
  "value": {
    "session_key": ""
  },
  "expiresIn": 7200
}
```

### removeUserKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/removeUserKey
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin",
  "openid": ""
}
```

### getTicket

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/getTicket
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin"
}
```


### setTicket

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setTicket
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin",
  "value": {
    "ticket": ""
  },
  "expiresIn": 7200
}
```

### removeTicket

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/removeTicket
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin"
}
```


### 注意事项

- 部署后将自动开启定时任务，间隔1小时执行
- 仅支持 callFunction、url 化调用


## 公共模块 uni-open-bridge-common

`uni-open-bridge-common` 是 `uni-id` 体系中用于 `开放平台数据` 管理的公共模块。

> `云函数公共模块`是不同云函数共享代码的一种方式。如果你不了解什么是`云函数公共模块`，请另读文档[公共模块](https://uniapp.dcloud.io/uniCloud/cf-common)

`uni-open-bridge-common` 提供了 `access_token`、`session_key`、`encrypt_key`、`ticket` 的读取、写入、删除操作。

`uni-open-bridge-common` 支持多层 读取 / 写入 机制，`redis -> database -> fallback`，优先级如下:

如果用户没有开通 `redis` 或者操作失败，透传到 `database`，`database` 失败后，如果用户配置了 `fallback`，继续调用 `fallback` 方法，否则抛出 `Error`

`database` 对应的表为: `opendb-open-data`


### access_token

#### 简介

- 微信小程序 `access_token` 是微信小程序全局唯一后台接口调用凭据，调用绝大多数后台接口时都需使用。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/backend-api.html#access_token)

- 微信H5 `access_token` 是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用 `access_token`。开发者需要进行妥善保存。`access_token` 的存储至少要保留512个字符空间。`access_token` 的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的 `access_token` 失效。

公众平台的 API 调用所需的 `access_token` 的使用及生成方式说明：

1、建议公众号开发者使用中控服务器统一获取和刷新 `access_token`，其他业务逻辑服务器所使用的 `access_token` 均来自于该中控服务器，不应该各自去刷新，否则容易造成冲突，导致 `access_token` 覆盖而影响业务；

2、目前`access_token` 的有效期通过返回的expires_in来传达，目前是7200秒之内的值。中控服务器需要根据这个有效时间提前去刷新新 `access_token`。在刷新过程中，中控服务器可对外继续输出的老 `access_token`，此时公众平台后台会保证在5分钟内，新老 `access_token` 都可用，这保证了第三方业务的平滑过渡；

3、`access_token` 的有效时间可能会在未来有调整，所以中控服务器不仅需要内部定时主动刷新，还需要提供被动刷新 `access_token` 的接口，这样便于业务服务器在 API 调用获知 `access_token` 已超时的情况下，可以触发 `access_token` 的刷新流程。

4、对于可能存在风险的调用，在开发者进行获取 `access_token` 调用时进入风险调用确认流程，需要用户管理员确认后才可以成功获取。具体流程为：

开发者通过某 IP 发起调用->平台返回错误码[89503]并同时下发模板消息给公众号管理员->公众号管理员确认该 IP 可以调用->开发者使用该 IP 再次发起调用->调用成功。

如公众号管理员第一次拒绝该 IP 调用，用户在1个小时内将无法使用该 IP 再次发起调用，如公众号管理员多次拒绝该 IP 调用，该 IP 将可能长期无法发起调用。平台建议开发者在发起调用前主动与管理员沟通确认调用需求，或请求管理员开启 IP 白名单功能并将该 IP 加入 IP 白名单列表。


#### getAccessToken(key: Object, fallback: Function)

读取 access_token


#### setAccessToken(key: Object, value: Object, expiresIn: Number)

写入 access_token


#### removeAccessToken(key: Object)

删除 access_token


#### key 属性

|参数				|类型			|必填	|描述																															|
|:-:				|:-:			|:-:	|:-:																															|
|dcloudAppid|String		|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|platform		|String		|是		|[详情](#platform)																								|

#### value 属性

|参数					|类型		|描述					|
|:-:					|:-:		|:-:					|
|access_token	|String	|							|

#### expiresIn

有效时间(秒)


#### 示例代码

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
  await setAccessToken(key, value, expiresIn)

  // 读取 (redis / 数据库)
  let result1 = await getAccessToken(key)

  // 删除
  await removeAccessToken(key)


  // 删除后读取, 返回 null
  let result2 = await getAccessToken(key)
  console.log(result2) // null

  return null
};
```


### user_key

平台对应的值

|平台				|值					|描述																																																								|
|:-:				|:-:				|:-:																																																								|
|微信小程序	|session_key|微信小程序会话密钥。[详情](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html)	|

会话密钥 `session_key` 有效性

开发者如果遇到因为 `session_key` 不正确而校验签名失败或解密失败，请关注下面几个与 `session_key` 有关的注意事项。

`uni.login` 调用时，用户的 `session_key` 可能会被更新而致使旧 `session_key` 失效（刷新机制存在最短周期，如果同一个用户短时间内多次调用 uni.login，并非每次调用都导致 `session_key` 刷新）。
开发者应该在明确需要重新登录时才调用 `uni.login`，及时通过 `code2Session` 接口更新服务器存储的 `session_key`。
微信不会把 `session_key` 的有效期告知开发者。我们会根据用户使用小程序的行为对 `session_key` 进行续期。用户越频繁使用小程序，`session_key` 有效期越长。
开发者在 `session_key` 失效时，可以通过重新执行登录流程获取有效的 `session_key`。使用接口 `uni.checkSession` 可以校验 `session_key` 是否有效，从而避免小程序反复执行登录流程。
当开发者在实现自定义登录态时，可以考虑以 `session_key` 有效期作为自身登录态有效期，也可以实现自定义的时效性策略。


#### getUserKey(key: Object, fallback: Function)

读取 user_key


#### setUserKey(key: Object, value: Object, expiresIn: Number)

写入 user_key


#### removeUserKey(key: Object)

删除 user_key


#### key 属性

|参数				|类型			|必填	|描述																															|
|:-:				|:-:			|:-:	|:-:																															|
|dcloudAppid|String		|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|platform		|String		|是		|[详情](#platform)																								|
|openid			|String		|是		|																																	|

#### value 属性

|参数				|类型		|描述								|
|:-:				|:-:		|:-:								|
|session_key|String	|微信小程序会话密钥	|

#### expiresIn

有效时间(秒)


#### 示例代码

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
  await setUserKey(key, value, expiresIn)

  // 读取 (redis / 数据库)
  let result1 = await getUserKey(key)

  // 删除
  await removeUserKey(key)


  // 删除后读取, 返回 null
  let result2 = await getUserKey(key)
  console.log(result2) // null

  return null
};
```


### encrypt_key

为了避免小程序与开发者后台通信时数据被截取和篡改，微信侧维护了一个用户维度的可靠key，用于小程序和后台通信时进行加密和签名。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/user-encryptkey.html)

开发者可以分别通过小程序前端和微信后台提供的接口，获取用户的加密 key。


#### getEncryptKey(key: Object, fallback: Function)

读取 encrypt_key


#### setEncryptKey(key: Object, value: Object, expiresIn: Number)

写入 encrypt_key


#### removeEncryptKey(key: Object)

删除 encrypt_key


#### key 属性

|参数				|类型			|必填	|描述																															|
|:-:				|:-:			|:-:	|:-:																															|
|dcloudAppid|String		|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|platform		|String		|是		|[详情](#platform)																								|
|openid			|String		|是		|																																	|
|version		|Number		|是		|版本																															|


#### value 属性

|参数				|类型		|描述			|
|:-:				|:-:		|:-:			|
|encrypt_key|String	|加密 key	|
|iv					|String	|加密 iv	  |

#### expiresIn

有效时间(秒)


#### 示例代码

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
  await setEncryptKey(key, value, expiresIn)

  // 读取 (redis / 数据库)
  let result1 = await getEncryptKey(key)

  // 删除
  await removeEncryptKey(key)

  // 删除后读取, 返回 null
  let result2 = await getEncryptKey(key)
  console.log(result2) // null

  return null
};
```


### ticket

`ticket` 是公众号用于调用微信 JS 接口的临时票据。正常情况下，`ticket` 的有效期为7200秒，通过 `access_token` 来获取。由于获取 `ticket` 的 api 调用次数非常有限，频繁刷新 `ticket` 会导致 api 调用受限，影响自身业务，开发者必须在自己的服务全局缓存 `ticket `。[详情](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62)


#### getTicket(key: Object, fallback: Function)

读取 ticket


#### setTicket(key: Object, value: Object, expiresIn: Number)

写入 ticket


#### removeTicket(key: Object)

删除 ticket


#### key 属性

|参数				|类型			|必填	|描述																															|
|:-:				|:-:			|:-:	|:-:																															|
|dcloudAppid|String		|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|platform		|String		|是		|[详情](#platform)																								|

#### value 属性

|参数				|类型		|描述			|
|:-:				|:-:		|:-:			|
|ticket			|String	|					|

#### expiresIn

有效时间(秒)


#### 示例代码

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
  await setTicket(key, value, expiresIn)

  // 读取 (redis / 数据库)
  let result1 = await getTicket(key)

  // 删除
  await removeTicket(key)


  // 删除后读取, 返回 null
  let result2 = await getTicket(key)
  console.log(result2) // null

  return null
};
```


#### Platform@platform

平台对应的值

|值					|描述				|
|:-:				|:-:				|
|mp-weixin	|微信小程序	|
|app-weixin	|微信 App	  |
|h5-weixin	|微信公众号	|
|web-weixin	|微信pc网页	|
|mp-qq			|QQ 小程序		|
|app-qq			|QQ App			|


#### fallback@fallback

可选 `async function fallback()`，当 `reids -> database` 都找不到对应 `key` 时，调用此方法，需要返回数据格式如下

```json
{
  value: null,
  duration: 1
}
```

为了简化调用 `getAccessToken()`、`getTicket()` 已内置 `fallback` 到微信的服务器，需要在 `config-center` 中配置 `appid` `appsecret`

### 注意事项

- 所有方法类型为 `async`，需要使用 `await`
- 所有方法校验 `key` 属性是否有效，无效则 `throw new Error()`，对 `value` 仅校验是否为 `undefined`
