# uni-open-bridge

`uni-open-bridge` 是统一接管微信等三方平台认证凭据（包括但不限于`access_token`、`session_key`、`encrypt_key`、`ticket`）的开源库。
`uni-open-bridge` is an open source library that uniformly takes over the authentication credentials of WeChat and other third-party platforms (including but not limited to `access_token`, `session_key`, `encrypt_key`, `ticket`).

## 背景
## background

调用微信等三方开放平台时，涉及众多凭据。有的是固定凭据，没有有效期。有的是临时凭据，会在一定时间或一定操作后失效。
When calling a third-party open platform such as WeChat, many credentials are involved. Some are fixed credentials with no validity period. Some are temporary credentials, which will expire after a certain period of time or after a certain operation.

尤其是临时凭据，比如微信的`access_token`、`session_key`、`encrypt_key`、`ticket`， 开发者需要动态从微信服务器获取，统一保存。
Especially temporary credentials, such as WeChat's `access_token`, `session_key`, `encrypt_key`, `ticket`, developers need to dynamically obtain from the WeChat server and save them uniformly.

但实际上这里面的坑很多：
But in fact, there are many pits in it:

1. 微信官方建议公众号开发者使用中控服务器统一获取和刷新 `access_token`，其他业务逻辑服务器所使用的 `access_token` 均来自于该中控服务器，不应该各自去刷新，否则容易造成冲突，导致 `access_token` 覆盖而影响业务；
1. Wechat officially recommends that developers of official accounts use the central control server to obtain and refresh the `access_token` in a unified manner. The `access_token` used by other business logic servers all come from the central control server, and should not be refreshed separately, otherwise it is easy to cause conflicts. Cause `access_token` to be overwritten and affect the business;
2. 有的凭据有效期较短，比如`ticket` 的有效期为7200秒，需要定时请求，避免过期。并且由于获取 `ticket` 的 api 调用次数非常有限，频繁刷新 `ticket` 会导致 api 调用受限，影响自身业务，开发者必须在自己的服务全局缓存 `ticket `
2. Some credentials have a short validity period. For example, the validity period of `ticket` is 7200 seconds. You need to request regularly to avoid expiration. And because the number of api calls to obtain `ticket` is very limited, frequent refresh of `ticket` will limit api calls and affect their own business. Developers must cache `ticket ` globally in their own services
3. 在客户端任意地方调用 `wx.login()` 后，会让上一个 `session_key` 立即过期
3. After calling `wx.login()` anywhere on the client, the previous `session_key` will expire immediately

当多个业务都需要这些临时凭据时，无法让每个业务各自请求微信服务器，会非常混乱和容易冲突。
When multiple businesses need these temporary credentials, it is impossible to make each business request the WeChat server, which will be very confusing and prone to conflict.

所以需要在一个中央系统，在定时任务里统一请求微信服务器，保存到数据库。
Therefore, it is necessary to request the WeChat server uniformly in a scheduled task in a central system and save it to the database.

然后各个业务需要这些凭据时，从这个中央系统的接口中获取，而不是自己向微信服务器请求。
Then, when each business needs these credentials, it is obtained from the interface of this central system instead of requesting it from the WeChat server.

这个中央系统就是`uni-open-bridge`。
This central system is `uni-open-bridge`.

## 流程介绍
## Process introduction

`uni-open-bridge` 包括：
`uni-open-bridge` includes:
1. 一个云对象 `uni-open-bridge` 
1. A cloud object `uni-open-bridge`
2. 一个公共模块 `uni-open-bridge-common` 
2. A common module `uni-open-bridge-common`
3. 配套的数据库，表名为 `opendb-open-data`。在redis中的key格式为 `uni-id:[dcloudAppid]:[platform]:[openid]:[access-token|user-access-token|session-key|encrypt-key-version|ticket]`
3. The supporting database, the table name is `opendb-open-data`. The key format in redis is `uni-id:[dcloudAppid]:[platform]:[openid]:[access-token|user-access-token|session-key|encrypt-key-version|ticket]`

`uni-open-bridge`系统中，有一个同名云对象`uni-open-bridge`，它默认就是定时运行的，在package.json中配置了每小时定时运行一次（部署线上系统生效）。
In the `uni-open-bridge` system, there is a cloud object `uni-open-bridge` with the same name, which runs regularly by default, and is configured to run every hour in package.json (the online system is deployed to take effect).

该云对象根据在 `uni-config-center` 中[配置](#uni-id-config)固定凭据，从而有权定时向微信服务器发请求，将获取到的 `access_token`或`ticket` 保存到数据库 `opendb-open-data` 表中。
The cloud object has the right to periodically send requests to the WeChat server according to the [configuration](#uni-id-config) fixed credentials in `uni-config-center`, and save the obtained `access_token` or `ticket` to Database `opendb-open-data` table.

当所在服务空间开通redis时，还会缓存在redis的key。这会让系统性能更好。
When redis is activated in the service space where it is located, the key of redis will also be cached. This will make the system perform better.

上述获取到微信的各种临时凭据后，当各个业务代码需要这些凭据时，通过如下方式获取。
After the various temporary credentials of WeChat are obtained above, when these credentials are required by each business code, they are obtained in the following ways.

- 云函数/云对象获取这些临时凭据，可引用公共模块 `uni-open-bridge-common` ，通过该模块的API获取，比如getAccessToken。[见下](#uni-open-bridge-common)
- To obtain these temporary credentials from cloud functions/cloud objects, you can refer to the public module `uni-open-bridge-common` and obtain them through the module's API, such as getAccessToken. [see below](#uni-open-bridge-common)
- 非uniCloud系统，比如传统云，获取这些凭据，需要将云对象`uni-open-bridge`进行URL化，通过Http方式请求凭据。[见下](#http)
- For non-uniCloud systems, such as traditional cloud, to obtain these credentials, you need to URLize the cloud object `uni-open-bridge` and request credentials through Http. [see below](#http)

流程图如下：
The flow chart is as follows:

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/b80cec3b-e106-489d-9075-90b5ecb02963.png)

## 凭据托管状态
## Credential escrow status

|凭据																		|微信小程序	|微信公众号(H5)	|
| Credentials | WeChat Mini Program | WeChat Official Account (H5) |
|:-:																		|:-:				|:-:						|
|[access_token](#access_token)					|定时刷新		|定时刷新				|
|[access_token](#access_token) |Regular refresh |Regular refresh |
|[user_access_token](#user_access_token)|						|开发者操作			|
|[user_access_token](#user_access_token)| |Developer Actions |
|[session_key](#session_key)						|开发者操作	|								|
|[session_key](#session_key) |Developer operation | |
|[encrypt_key](#encrypt_key)						|开发者操作	|								|
|[encrypt_key](#encrypt_key) |Developer action | |
|[ticket](#ticket)											|						|定时刷新				|
|[ticket](#ticket) | |Regular refresh |


还有一些不常用的凭据暂不列出，例如：微信App access_token
There are also some less commonly used credentials that are not listed, for example: WeChat App access_token


## 使用
## use
1. **下载插件[uni-open-bridge](https://ext.dcloud.net.cn/plugin?id=9002)到项目中。
1. **Download the plugin [uni-open-bridge](https://ext.dcloud.net.cn/plugin?id=9002) into the project.

2. 在`uni-config-center`的 `uni-id` 下配置固定凭据，详情见下面的示例代码
2. Configure fixed credentials under `uni-id` in `uni-config-center`, see the sample code below for details

首先向微信的[公众平台](https://mp.weixin.qq.com/)申请 `appid` 和 `secret` 固定凭据
First apply for `appid` and `secret` fixed credentials from WeChat's [public platform](https://mp.weixin.qq.com/)
然后在项目的 uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json 文件中配置
Then configure in the project's uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json file

**示例代码**
**Sample code**

### uni-id-config

```json
// uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json
{
  "dcloudAppid": "__UNI__xxxxxx", // 在项目的 manifest.json 中
  "mp-weixin": {
    "tokenExpiresIn": 259200,
    "oauth": {
      "weixin": {
        "appid": "", // 微信公众平台申请的小程序 appid
        "appsecret": "" // 微信公众平台申请的小程序 secret
      }
    }
  },
  "web": {
    "oauth": {
      "weixin-h5": {
        "appid": "", // 微信公众平台申请的网页授权 appid
        "appsecret": "" // 微信公众平台申请的网页授权 secret
      }
    }
  }
}
```

注意：拷贝此文件内容时需要移除 `注释`
Note: you need to remove the `comment` when copying the contents of this file

3. 在`uni-config-center`目录下新建子目录`uni-open-bridge`, 新增 `config.json`，配置 dcloudAppid ，详情见下面的示例代码
3. Create a new subdirectory `uni-open-bridge` in the `uni-config-center` directory, add `config.json`, configure dcloudAppid , see the following sample code for details

### uni-open-bridge-config@uniopenbridgeconfig

**示例代码**
**Sample code**

```json
// uniCloud/cloudfunctions/common/uni-config-center/uni-open-bridge/config.json
{
  "schedule": {
    "__UNI__xxxxxx": { // dcloudAppid, 需要和 `uni-config-center` uni-id中的配置一致
      "enable": true, // 任务全局开关，优先级最高
      "weixin-mp": { // 平台，目前仅支持 微信小程序、微信 H5，详情参见 https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge#platform
        "enable": true, // 当前平台任务开关
        "tasks": ["accessToken"] // 要执行的任务，微信小程序支持 accessToken
      },
      "weixin-h5": {
        "enable": false,
        "tasks": ["ticket"] // 支持微信 H5 ticket，因 ticker 依赖微信 H5 accessToken，内部自动先获取 accessToken。此处的 accessToken 和微信小程序的 accessToken 不是一个值
      }
    }
  },
  "ipWhiteList": ["0.0.0.0"] // 用于 http 调用的服务器IP白名单
}
```

注意：拷贝此文件内容时需要移除 `注释`
Note: you need to remove the `comment` when copying the contents of this file

4. 将插件上传到服务空间。最好开通redis，会有更好的性能
4. Upload the plugin to the service space. It is best to open redis, there will be better performance
然后在数据库和redis的`uni-id`分组中会看到数据。
Then you will see the data in the `uni-id` grouping of the database and redis.

如果异常，请在 [uniCloud Web控制台](https://unicloud.dcloud.net.cn/)，找到云函数/云对象 `uni-open-bridge` 检查运行日志。很可能是第一步或第二步的配置出错了。
If abnormal, please find the cloud function/cloud object `uni-open-bridge` in the [uniCloud Web Console](https://unicloud.dcloud.net.cn/) to check the running log. It is very likely that the configuration of the first or second step is wrong.

## 业务系统获取相关凭据的方法
## How the business system obtains the relevant credentials

在`uni-open-bridge`云对象获取到相关凭据后，当业务系统需要使用这些凭据时，通过以下方式获取。
After the `uni-open-bridge` cloud object obtains the relevant credentials, when the business system needs to use these credentials, it is obtained in the following ways.

### 云函数公共模块方式@uni-open-bridge-common
### Cloud function public module method @uni-open-bridge-common

当你的业务在uniCloud上时，在你的业务云函数/云对象中引用公共模块`uni-open-bridge-common`，然后调用下面的API。
When your business is on uniCloud, reference the common module `uni-open-bridge-common` in your business cloud function/cloud object, then call the API below.

> `云函数公共模块`是不同云函数共享代码的一种方式。如果你不了解什么是`云函数公共模块`，请另读文档[公共模块](https://uniapp.dcloud.io/uniCloud/cf-common)
> `Cloud function common module` is a way for different cloud functions to share code. If you don't know what `cloud function common module` is, please read the document [public module](https://uniapp.dcloud.io/uniCloud/cf-common)

`uni-open-bridge-common` 提供了 `access_token`、`user_access_token`、`session_key`、`encrypt_key`、`ticket` 的读取、写入、删除操作。
`uni-open-bridge-common` provides `access_token`, `user_access_token`, `session_key`, `encrypt_key`, `ticket` read, write, delete operations.

`uni-open-bridge-common` 支持多层 读取 / 写入 机制，`redis -> database -> fallback`，优先级如下:
`uni-open-bridge-common` supports multi-layer read/write mechanism, `redis -> database -> fallback`, the priority is as follows:

如果用户没有开通 `redis` 或者操作失败，透传到 `database`，`database` 失败后，如果用户配置了 `fallback`，继续调用 `fallback` 方法，否则抛出 `Error`，`database` 对应的表为: `opendb-open-data`
If the user does not activate `redis` or the operation fails, it will be transparently transmitted to `database`. After `database` fails, if the user configures `fallback`, continue to call the `fallback` method, otherwise throw `Error`, `database` corresponds to The table is: `opendb-open-data`

在常见的情况下，在你的云函数/云对象中调用`uni-open-bridge-common`的几个get方法即可。
In common cases, it is enough to call several get methods of `uni-open-bridge-common` in your cloud function/cloud object.

```js
let uobc = require('uni-open-bridge-common')

// 应用级凭据
// application level credentials
const key = {
  dcloudAppid: '__UNI__xxx', // DCloud Appid
  platform: 'weixin-mp' // 平台，解释见下
}
uobc.getAccessToken(key)
uobc.getTicket(key)


// 用户级凭据，需要同时传入 openid 才能获得
// User-level credentials, you need to pass in openid at the same time to get
const userKey = {
  dcloudAppid: '__UNI__xxx', // DCloud Appid
  platform: 'weixin-mp', // 平台，解释见下
  openid: '' // 用户唯一标识，解释见下
}
uobc.getUserAccessToken(userKey)
uobc.getSessionKey(userKey)
uobc.getEncryptKey(userKey)

```

#### Platform@platform

存储数据key对应平台的值
Stores the value of the data key corresponding to the platform

|值					|描述				|
|value |description |
|:-:				|:-:				|
|weixin-mp	|微信小程序	|
|weixin-mp |WeChat Mini Program |
|weixin-h5	|微信公众号	|
|weixin-h5 |WeChat Official Account |
|weixin-web	|微信pc网页	|
|weixin-web |WeChat pc web page |
|weixin-app	|微信 App		|
|weixin-app |WeChat App |
|qq-mp			|QQ 小程序	|
|qq-app			|QQ App			|

提示：自动刷新固定应用级凭据目前仅支持 `weixin-mp`、`weixin-h5` 后续补充其他平台
Tip: Automatic refresh of fixed application-level credentials currently only supports `weixin-mp`, `weixin-h5`, and other platforms will be added later

#### getAccessToken(key: Object, fallback: Function)

读取 access_token
read access_token

#### setAccessToken(key: Object, value: Object, expiresIn: Number)

写入 access_token。开发者一般只需使用get类方法，用不到set、remove类方法。下同
Write access_token. Developers generally only need to use the get class method, and do not use the set and remove class methods. Same below

#### removeAccessToken(key: Object)

删除 access_token。开发者一般只需使用get类方法，用不到set、remove类方法。下同
Remove access_token. Developers generally only need to use the get class method, and do not use the set and remove class methods. Same below


**key 属性**
**key attribute**

|参数				|类型			|必填	|描述																															|
|Parameters |Type |Required |Description |
|:-:				|:-:			|:-:	|:-:																															|
|dcloudAppid|String		|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|dcloudAppid|String |Yes |DCloud application appid. [Details](https://ask.dcloud.net.cn/article/35907) |
|platform		|String		|是		|[详情](#platform)																								|
|platform |String |Yes |[Details](#platform) |

**value 属性**
**value attribute**

|参数					|类型		|描述					|
|parameter |type |description |
|:-:					|:-:		|:-:					|
|access_token	|String	|							|

**expiresIn**

有效时间(秒)
Effective time (seconds)


**示例代码**
**Sample code**

```js
'use strict';

const {
  getAccessToken,
  setAccessToken,
  removeAccessToken
} = require('uni-open-bridge-common')

exports.main = async (event, context) => {
  const key = {
    dcloudAppid: '__UNI__xxx',
    platform: 'weixin-mp'
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

#### getUserAccessToken(key: Object, fallback: Function)

读取 `user_access_token`
read `user_access_token`

#### setUserAccessToken(key: Object, value: Object, expiresIn: Number)

写入 `user_access_token`
write `user_access_token`

#### removeUserAccessToken(key: Object)

删除 `user_access_token`
remove `user_access_token`


对应微信公众平台网页用户授权 `access_token`，详情见下文说明
Corresponding to WeChat official platform webpage user authorization `access_token`, see the description below for details


**key 属性**
**key attribute**

|参数				|类型		|必填	|描述																															|
|Parameters |Type |Required |Description |
|:-:				|:-:		|:-:	|:-:																															|
|dcloudAppid|String	|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|dcloudAppid|String |Yes |DCloud application appid. [Details](https://ask.dcloud.net.cn/article/35907) |
|platform		|String	|是		|[详情](#platform)																								|
|platform |String |Yes |[Details](#platform) |
|openid			|String	|是		|[详情](#openid)																									|
|openid |String |Yes |[Details](#openid) |

**value 属性**
**value attribute**

|参数					|类型		|描述											|
|parameter |type |description |
|:-:					|:-:		|:-:											|
|access_token	|String	|微信公众平台用户会话密钥	|
|access_token |String |WeChat Official Platform User Session Key |

**expiresIn**

有效时间(秒)
Effective time (seconds)

**示例代码**
**Sample code**

```js
'use strict';

const {
  getUserAccessToken,
  setUserAccessToken,
  removeUserAccessToken
} = require('uni-open-bridge-common')

exports.main = async (event, context) => {
  const key = {
    dcloudAppid: '__UNI__xxx',
    platform: 'weixin-h5',
    openid: ''
  }
  const value = {
    'access_token': ''
  }
  const expiresIn = 7200

  // 写入 (redis / 数据库)
  // write (redis / database)
  await setUserAccessToken(key, value, expiresIn)

  // 读取 (redis / 数据库)
  // read (redis / database)
  let result1 = await getUserAccessToken(key)

  // 删除
  // delete
  await removeUserAccessToken(key)


  // 删除后读取, 返回 null
  // read after deletion, return null
  let result2 = await getUserAccessToken(key)
  console.log(result2) // null

  return null
};
```


#### getSessionKey(key: Object, fallback: Function)

读取 session_key
read session_key

#### setSessionKey(key: Object, value: Object, expiresIn: Number)

写入 session_key
write session_key

#### removeSessionKey(key: Object)

删除 session_key
delete session_key


**key 属性**
**key attribute**

|参数				|类型		|必填	|描述																															|
|Parameters |Type |Required |Description |
|:-:				|:-:		|:-:	|:-:																															|
|dcloudAppid|String	|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|dcloudAppid|String |Yes |DCloud application appid. [Details](https://ask.dcloud.net.cn/article/35907) |
|platform		|String	|是		|[详情](#platform)																								|
|platform |String |Yes |[Details](#platform) |
|openid			|String	|是		|[详情](#openid)																									|
|openid |String |Yes |[Details](#openid) |

**value 属性**
**value attribute**

|参数				|类型		|描述								|
|parameter |type |description |
|:-:				|:-:		|:-:								|
|session_key|String	|微信小程序会话密钥	|
|session_key|String |WeChat applet session key |

**expiresIn**

有效时间(秒)
Effective time (seconds)


**示例代码**
**Sample code**

```js
'use strict';

const {
  getSessionKey,
  setSessionKey,
  removeSessionKey
} = require('uni-open-bridge-common')

exports.main = async (event, context) => {
  const key = {
    dcloudAppid: '__UNI__xxx',
    platform: 'weixin-mp',
    openid: ''
  }
  const value = {
    'session_key': ''
  }
  const expiresIn = 7200

  // 写入 (redis / 数据库)
  // write (redis / database)
  await setSessionKey(key, value, expiresIn)

  // 读取 (redis / 数据库)
  // read (redis / database)
  let result1 = await getSessionKey(key)

  // 删除
  // delete
  await removeSessionKey(key)


  // 删除后读取, 返回 null
  // read after deletion, return null
  let result2 = await getSessionKey(key)
  console.log(result2) // null

  return null
};
```


#### getEncryptKey(key: Object, fallback: Function)

读取 encrypt_key
read encrypt_key

#### setEncryptKey(key: Object, value: Object, expiresIn: Number)

写入 encrypt_key
write encrypt_key

#### removeEncryptKey(key: Object)

删除 encrypt_key
delete encrypt_key


**key 属性**
**key attribute**

|参数				|类型		|必填	|描述																															|
|Parameters |Type |Required |Description |
|:-:				|:-:		|:-:	|:-:																															|
|dcloudAppid|String	|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|dcloudAppid|String |Yes |DCloud application appid. [Details](https://ask.dcloud.net.cn/article/35907) |
|platform		|String	|是		|[详情](#platform)																								|
|platform |String |Yes |[Details](#platform) |
|openid			|String	|是		|[详情](#openid)																									|
|openid |String |Yes |[Details](#openid) |
|version		|Number	|是		|版本																															|
|version |Number |Yes |Version|


**value 属性**
**value attribute**

|参数				|类型		|描述			|
|parameter |type |description |
|:-:				|:-:		|:-:			|
|encrypt_key|String	|加密 key	|
|encrypt_key|String |Encryption key |
|iv					|String	|加密 iv	  |
|iv |String |encrypted iv |

**expiresIn**

有效时间(秒)
Effective time (seconds)


**示例代码**
**Sample code**

```js
'use strict';

const {
  getEncryptKey,
  setEncryptKey,
  removeEncryptKey
} = require('uni-open-bridge-common')

exports.main = async (event, context) => {
  const key = {
    dcloudAppid: '__UNI__xxx',
    platform: 'weixin-mp',
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


#### getTicket(key: Object, fallback: Function)

读取 ticket
read ticket

#### setTicket(key: Object, value: Object, expiresIn: Number)

写入 ticket
write ticket

#### removeTicket(key: Object)

删除 ticket
delete ticket


**key 属性**
**key attribute**

|参数				|类型			|必填	|描述																															|
|Parameters |Type |Required |Description |
|:-:				|:-:			|:-:	|:-:																															|
|dcloudAppid|String		|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|dcloudAppid|String |Yes |DCloud application appid. [Details](https://ask.dcloud.net.cn/article/35907) |
|platform		|String		|是		|[详情](#platform)																								|
|platform |String |Yes |[Details](#platform) |

**value 属性**
**value attribute**

|参数				|类型		|描述			|
|parameter |type |description |
|:-:				|:-:		|:-:			|
|ticket			|String	|					|

**expiresIn**

有效时间(秒)
Effective time (seconds)


**示例代码**
**Sample code**

```js
'use strict';

const {
  getTicket,
  setTicket,
  removeTicket
} = require('uni-open-bridge-common')

exports.main = async (event, context) => {
  const key = {
    dcloudAppid: '__UNI__xxx',
    platform: 'weixin-h5'
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



#### fallback

可选 `async function fallback()`，当 `reids -> database` 都找不到对应 `key` 时，调用此方法，需要返回数据格式如下
Optional `async function fallback()`, when `reids -> database` cannot find the corresponding `key`, this method is called, and the returned data format is as follows

```json
{
  value: null,
  duration: 1
}
```

为了简化调用 `getAccessToken()`、`getTicket()` 已内置 `fallback` 到微信的服务器，需要在 `config-center` 中配置 `appid` `appsecret`，[详情](#uni-id-config)
In order to simplify calling `getAccessToken()`, `getTicket()` to the WeChat server with built-in `fallback`, you need to configure `appid` `appsecret` in `config-center`, [Details](#uni-id-config )

#### 注意事项
#### Precautions

- 所有方法类型为 `async`，需要使用 `await`
- All methods are of type `async` and need to use `await`
- 所有方法校验 `key` 属性是否有效，无效则 `throw new Error()`，对 `value` 仅校验是否为 `Object`
- All methods check whether the `key` property is valid, if invalid, `throw new Error()`, for `value` only check whether it is `Object`


### 云对象URL化方式@cloudurl
### Cloud object URLization method @cloudurl

云对象 `uni-open-bridge` URL化后，让非uniCloud系统可通过 http 方式访问凭据。
The cloud object `uni-open-bridge` is URLized to allow non-uniCloud systems to access credentials via http.

[URL化](http.md)，是一种让云函数或云对象暴露为Http接口的方式，[详见](http.md)。可以在 [uniCloud Web控制台](https://unicloud.dcloud.net.cn/) 操作。
[URLization](http.md) is a way to expose cloud functions or cloud objects as Http interfaces, [see details](http.md). It can be operated in [uniCloud Web Console](https://unicloud.dcloud.net.cn/).

请求类型 `POST`, 可以配置IP白名单字段 `ipWhiteList`，参见 `config.json`
Request type `POST`, IP whitelist field `ipWhiteList` can be configured, see `config.json`

配置URL化后，其他系统可以通过下面的http接口，读写删各种开放平台凭据。
After configuring URLization, other systems can read, write and delete various open platform credentials through the following http interface.

#### getAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/getAccessToken
```

参数
parameter

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-mp"
}
```

其中参数platform值域[详见](#platform)。下同，不再复述。
The parameter platform value range [see details](#platform). The same below, and will not be repeated.

#### setAccessToken

如果各种开放平台凭据由`uni-open-bridge`托管，那么只需要调用各种get方法，是用不到set等方法的。但在某些情况下，相关凭据没有由`uni-open-bridge`从微信服务器获取，就需要这些set方法了。[详见](#nouseuniopenbridge)
If various open platform credentials are hosted by `uni-open-bridge`, you only need to call various get methods instead of set and other methods. But in some cases, the relevant credentials are not obtained from the WeChat server by `uni-open-bridge`, and these set methods are needed. [See details](#nouseuniopenbridge)

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setAccessToken
```

参数
parameter

由外部系统从微信获取到相关凭据，然后写入。[详见](#nouseuniopenbridge)
The relevant credentials are obtained from WeChat by the external system, and then written. [See details](#nouseuniopenbridge)

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-mp",
  "value": {
    "access_token": ""
  },
  "expiresIn": 7200
}
```


#### removeAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/removeAccessToken
```

参数
parameter

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-mp"
}
```


#### getUserAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/getUserAccessToken
```

参数
parameter

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-h5",
  "openid": ""
}
```

其中参数openid值域[详见](#openid)。下同，不再复述。
The parameter openid value range [see details](#openid). The same below, and will not be repeated.

#### setUserAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setUserAccessToken
```

参数
parameter

由外部系统从微信获取到相关凭据，然后写入。[详见](#nouseuniopenbridge)
The relevant credentials are obtained from WeChat by the external system, and then written. [See details](#nouseuniopenbridge)

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-h5",
  "openid": "",
  "value": {
    "access_token": ""
  },
  "expiresIn": 7200
}
```

#### removeUserAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/removeUserAccessToken
```

参数
parameter

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-h5",
  "openid": ""
}
```

#### getSessionKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/getSessionKey
```

参数
parameter

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-mp",
  "openid": ""
}
```

#### setSessionKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setSessionKey
```

参数
parameter

由外部系统从微信获取到相关凭据，然后写入。[详见](#nouseuniopenbridge)
The relevant credentials are obtained from WeChat by the external system, and then written. [See details](#nouseuniopenbridge)

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-mp",
  "openid": "",
  "value": {
    "session_key": ""
  },
  "expiresIn": 7200
}
```

#### removeSessionKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/removeSessionKey
```

参数
parameter

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-mp",
  "openid": ""
}
```

#### getEncryptKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/getEncryptKey
```

参数
parameter

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-mp",
  "openid": "",
  "version": 1 // 此版本号应根据客户端传递的版本号
}
```

#### setEncryptKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setEncryptKey
```

参数
parameter

由外部系统从微信获取到相关凭据，然后写入。[详见](#nouseuniopenbridge)
The relevant credentials are obtained from WeChat by the external system, and then written. [See details](#nouseuniopenbridge)

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-mp",
  "openid": "",
  "version": 1,
  "value": {
    "encrypt_key": "",
    "iv": ""
  }
}
```

#### removeEncryptKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/removeEncryptKey
```

参数
parameter

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-mp",
  "openid": "",
  "version": 1
}
```


#### getTicket

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/getTicket
```

参数
parameter

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-h5"
}
```

#### setTicket

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setTicket
```

参数
parameter

由外部系统从微信获取到相关凭据，然后写入。[详见](#nouseuniopenbridge)
The relevant credentials are obtained from WeChat by the external system, and then written. [See details](#nouseuniopenbridge)

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-h5",
  "value": {
    "ticket": ""
  }
}
```

#### removeTicket

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/removeTicket
```

参数
parameter

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-h5"
}
```


## 微信凭据介绍
## WeChat Credentials Introduction

### access_token(应用级)@access_token
### access_token (application level) @access_token

- 微信小程序 `access_token` 是微信小程序全局唯一后台接口调用凭据，调用绝大多数后台接口时都需使用。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/backend-api.html#access_token)
- Wechat applet `access_token` is the globally unique backend interface calling credential of the Wechat applet, which is required when calling most of the backend interfaces. [Details](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/backend-api.html#access_token)

- 微信H5 `access_token` 是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用 `access_token`。开发者需要进行妥善保存。`access_token` 的存储至少要保留512个字符空间。`access_token` 的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的 `access_token` 失效。
- Wechat H5 `access_token` is the globally unique API call credential of the official account. The official account needs to use the `access_token` when calling each API. Developers need to keep it properly. The storage of `access_token` must reserve at least 512 characters of space. The `access_token` is currently valid for 2 hours and needs to be refreshed regularly. Repeated acquisition will cause the last acquired `access_token` to be invalid.

公众平台的 API 调用所需的 `access_token` 的使用及生成方式说明：
Instructions on the use and generation of `access_token` required for API calls on the public platform:

1、建议公众号开发者使用中控服务器统一获取和刷新 `access_token`，其他业务逻辑服务器所使用的 `access_token` 均来自于该中控服务器，不应该各自去刷新，否则容易造成冲突，导致 `access_token` 覆盖而影响业务；
1、 It is recommended that developers of official accounts use the central control server to obtain and refresh the `access_token` in a unified manner. The `access_token` used by other business logic servers all come from the central control server and should not be refreshed separately, otherwise it will easily cause conflicts and lead to ` access_token` overrides and affects the business;

2、目前`access_token` 的有效期通过返回的expires_in来传达，目前是7200秒之内的值。中控服务器需要根据这个有效时间提前去刷新新 `access_token`。在刷新过程中，中控服务器可对外继续输出的老 `access_token`，此时公众平台后台会保证在5分钟内，新老 `access_token` 都可用，这保证了第三方业务的平滑过渡；
2、 The current validity period of `access_token` is conveyed by the returned expires_in, which is currently the value within 7200 seconds. The central control server needs to refresh the new `access_token` in advance according to this valid time. During the refresh process, the central control server can continue to output the old `access_token`. At this time, the backend of the public platform will ensure that both the new and old `access_token` are available within 5 minutes, which ensures a smooth transition of third-party services;

3、`access_token` 的有效时间可能会在未来有调整，所以中控服务器不仅需要内部定时主动刷新，还需要提供被动刷新 `access_token` 的接口，这样便于业务服务器在 API 调用获知 `access_token` 已超时的情况下，可以触发 `access_token` 的刷新流程。
3、 The valid time of `access_token` may be adjusted in the future, so the central control server not only needs to actively refresh the `access_token` internally, but also needs to provide an interface for passively refreshing the `access_token`, which is convenient for the business server to know that the `access_token` has timed out in the API call In the case of `access_token`, the refresh process of `access_token` can be triggered.

4、对于可能存在风险的调用，在开发者进行获取 `access_token` 调用时进入风险调用确认流程，需要用户管理员确认后才可以成功获取。具体流程为：
4、 For calls that may have risks, when the developer makes a call to obtain `access_token`, the risk call confirmation process is entered, and the user administrator can confirm it before it can be successfully obtained. The specific process is:

开发者通过某 IP 发起调用->平台返回错误码[89503]并同时下发模板消息给公众号管理员->公众号管理员确认该 IP 可以调用->开发者使用该 IP 再次发起调用->调用成功。
The developer initiates a call through an IP -> the platform returns an error code [89503] and sends a template message to the official account administrator at the same time -> the official account administrator confirms that the IP can be called -> the developer uses the IP to initiate a call again -> The call succeeded.

如公众号管理员第一次拒绝该 IP 调用，用户在1个小时内将无法使用该 IP 再次发起调用，如公众号管理员多次拒绝该 IP 调用，该 IP 将可能长期无法发起调用。平台建议开发者在发起调用前主动与管理员沟通确认调用需求，或请求管理员开启 IP 白名单功能并将该 IP 加入 IP 白名单列表。
If the official account administrator rejects the IP call for the first time, the user will not be able to use the IP to call again within 1 hour. If the official account administrator rejects the IP call for many times, the IP may not be able to initiate the call for a long time. The platform recommends that developers actively communicate with the administrator to confirm the invocation requirements before initiating the call, or request the administrator to enable the IP whitelist function and add the IP to the IP whitelist.

### user_access_token(用户级)@user_access_token
### user_access_token (user level) @user_access_token

平台对应的值
The value corresponding to the platform

|平台							|值						|描述																																																													|
|Platform |Value |Description |
|:-:							|:-:					|:-:																																																													|
|微信内置浏览器H5	|access_token	|微信内置浏览器H5用户会话密钥。[详情](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)	|
|WeChat built-in browser H5 |access_token |WeChat built-in browser H5 user session key. [Details](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html) |

对应微信公众平台网页用户授权 `access_token`
Corresponding to WeChat official platform webpage user authorization `access_token`

微信公众平台网页授权有两个相同名字 `access_token`，分别用于
WeChat official platform webpage authorization has two same name `access_token`, which are used for

1、公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用 `access_token`。
1、 The globally unique API call credentials of the official account. The official account needs to use `access_token` when calling each API.
2、网页授权接口调用凭证，用户授权的作用域 `access_token`。
2、 The web page authorization interface calls the credentials, and the scope of user authorization is `access_token`.

在微信内置浏览器H5无法区分两个相同名称值不同的 `access_token`，所以以更直观的名称 `user_access_token` 对应用户授权 `access_token`
In WeChat's built-in browser H5, two `access_token` with the same name and different values cannot be distinguished, so the more intuitive name `user_access_token` corresponds to the user authorization `access_token`


### code(临时凭据)@code
### code(temporary credentials)@code

微信小程序用户登录凭证校验
WeChat applet user login credential verification

在客户端通过调用 `uni.login()` 获得临时登录凭证 `code` 后传到开发者服务器在请求微信服务器获得 `session_key`、`openid`、`unionid`
The client obtains the temporary login credential `code` by calling `uni.login()` and then transmits it to the developer server to obtain the `session_key`, `openid`, `unionid` by requesting the WeChat server

`code` 仅可在服务器使用一次，客户端调用频率限制每个用户每分钟100次
`code` can only be used once on the server, and the client-side call frequency is limited to 100 times per minute per user

### openid(用户级)@openid
### openid (user level) @openid

微信小程序用户唯一标识
WeChat Mini Program User Unique ID

需要在开发者服务器请求微信服务器获得，依赖参数 code，[详情](#code)
It needs to be obtained by requesting the WeChat server on the developer server, depending on the parameter code, [details](#code)

可通过 `uni-id-co` 获取，[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#save-user-token)
Available through `uni-id-co`, [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#save-user-token)

### session_key(用户级)@session_key
### session_key (user level) @session_key

平台对应的值
The value corresponding to the platform

|平台				|值					|描述																																																								|
|Platform |Value |Description |
|:-:				|:-:				|:-:																																																								|
|微信小程序	|session_key|微信小程序会话密钥。[详情](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html)	|
|WeChat applet |session_key|WeChat applet session key. [Details](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html) |

会话密钥 `session_key` 有效性
Session key `session_key` validity

开发者如果遇到因为 `session_key` 不正确而校验签名失败或解密失败，请关注下面几个与 `session_key` 有关的注意事项。
If the developer encounters the failure to verify the signature or the decryption because the `session_key` is incorrect, please pay attention to the following notes related to the `session_key`.

`uni.login` 调用时，用户的 `session_key` 可能会被更新而致使旧 `session_key` 失效（刷新机制存在最短周期，如果同一个用户短时间内多次调用 `uni.login`，并非每次调用都导致 `session_key` 刷新）。
When `uni.login` is called, the user's `session_key` may be updated, causing the old `session_key` to become invalid (the refresh mechanism has a shortest period, if the same user calls `uni.login` multiple times in a short period of time, not every time calls result in a `session_key` refresh).

开发者应该在明确需要重新登录时才调用 `uni.login`，及时通过 `code2Session` 接口更新服务器存储的 `session_key`。
Developers should only call `uni.login` when they clearly need to log in again, and update the `session_key` stored by the server through the `code2Session` interface in time.

微信不会把 `session_key` 的有效期告知开发者。我们会根据用户使用小程序的行为对 `session_key` 进行续期。用户越频繁使用小程序，`session_key` 有效期越长。
WeChat will not inform developers about the validity period of `session_key`. We will renew the `session_key` based on the user's behavior of using the applet. The more frequently the user uses the applet, the longer the `session_key` is valid.

开发者在 `session_key` 失效时，可以通过重新执行登录流程获取有效的 `session_key`。使用接口 `uni.checkSession` 可以校验 `session_key` 是否有效，从而避免小程序反复执行登录流程。
When the `session_key` is invalid, the developer can obtain a valid `session_key` by re-executing the login process. Use the interface `uni.checkSession` to check whether the `session_key` is valid, so as to avoid the applet from repeatedly performing the login process.

当开发者在实现自定义登录态时，可以考虑以 `session_key` 有效期作为自身登录态有效期，也可以实现自定义的时效性策略。
When developers implement a custom login state, they can consider using the `session_key` validity period as their own login state validity period, or implement a custom timeliness strategy.

### encrypt_key(用户级)@encrypt_key
### encrypt_key (user level) @encrypt_key

为了避免小程序与开发者后台通信时数据被截取和篡改，微信侧维护了一个用户维度的可靠key，用于小程序和后台通信时进行加密和签名。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/user-encryptkey.html)
In order to avoid data interception and tampering when the applet communicates with the developer in the background, the WeChat side maintains a user-dimensional reliable key, which is used for encryption and signature when the applet communicates with the background. [Details](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/user-encryptkey.html)

开发者可以分别通过小程序前端和微信后台提供的接口，获取用户的加密 key。
Developers can obtain the user's encryption key through the interfaces provided by the front-end of the applet and the back-end of WeChat respectively.

### ticket(用户级)@encrypt_key
### ticket (user level) @encrypt_key

`ticket` 是公众号用于调用微信 JS 接口的临时票据。正常情况下，`ticket` 的有效期为7200秒，通过 `access_token` 来获取。
`ticket` is a temporary ticket used by the official account to call the WeChat JS interface. Under normal circumstances, the validity period of `ticket` is 7200 seconds, which is obtained through `access_token`.

由于获取 `ticket` 的 api 调用次数非常有限，频繁刷新 `ticket` 会导致 api 调用受限，影响自身业务，开发者必须在自己的服务全局缓存 `ticket `。[详情](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62)
Since the number of api calls to obtain `ticket` is very limited, frequent refresh of `ticket` will limit api calls and affect their own business. Developers must cache `ticket` globally in their own services. [Details](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62)


## 不使用 `uni-open-bridge` 托管的情况@nouseuniopenbridge
## Hosting without `uni-open-bridge` @nouseuniopenbridge

如开发者的老业务里已经获取了微信的access_token等凭据，难以迁移到由`uni-open-bridge`来托管微信相关凭据。
For example, the developer's old business has already obtained credentials such as WeChat's access_token, and it is difficult to migrate to `uni-open-bridge` to host WeChat-related credentials.

那么`uni-open-bridge`也暴露了允许三方系统给`uni-open-bridge`写入微信相关凭据的接口。
Then `uni-open-bridge` also exposes an interface that allows third-party systems to write WeChat-related credentials to `uni-open-bridge`.

因为其他插件会依赖`uni-open-bridge`，比如：
Because other plugins will depend on `uni-open-bridge`, for example:
1. `uni-ad`微信小程序激励视频广告服务器回调
1. `uni-ad` WeChat applet rewarded video ad server callback
2. uni云端一体安全网络
2. uni cloud integrated security network

如果`uni-open-bridge`里没有相关凭据，上述插件或功能就无法使用。
If there are no relevant credentials in `uni-open-bridge`, the above plugins or functions will not work.

因此，开发者即不想改成由`uni-open-bridge`托管微信凭据，又需要使用上述依赖`uni-open-bridge`的功能或插件，就只能将老系统获取到的相关凭据写入到`uni-open-bridge`中。
Therefore, developers do not want to change to `uni-open-bridge` to host WeChat credentials, but also need to use the above functions or plug-ins that rely on `uni-open-bridge`, they can only write the relevant credentials obtained by the old system into writing into `uni-open-bridge`.

此时，开发者需通过以下方式处理：
At this point, the developer needs to deal with it in the following ways:

1. 取消`uni-open-bridge`云对象的定时任务，不再定时向微信服务器请求凭据
1. Cancel the scheduled task of the `uni-open-bridge` cloud object, and no longer request credentials from the WeChat server regularly

在`uni-open-bridge`云对象的package.json中找到定时器节点`triggers`，删除该节点。本地修改package.json后需重新上传到服务空间方生效。
Find the timer node `triggers` in the package.json of the `uni-open-bridge` cloud object and delete this node. After modifying the package.json locally, it needs to be re-uploaded to the service space for it to take effect.

参考[定时任务配置](cf-functions.md#packagejson))。
Refer to [Scheduled Task Configuration](cf-functions.md#packagejson)).

2. 老系统从微信服务器获取到相关凭据后调用`uni-open-bridge`的set方法写入凭据
2. After the old system obtains the relevant credentials from the WeChat server, it calls the set method of `uni-open-bridge` to write the credentials

先将云对象`uni-open-bridge`进行URL化，暴露出http接口。然后老系统调用setAccessToken、setUserAccessToken、setSessionKey、setEncryptKey、setTicket等接口。[参考](#cloudurl)
First URLize the cloud object `uni-open-bridge` to expose the http interface. Then the old system calls interfaces such as setAccessToken, setUserAccessToken, setSessionKey, setEncryptKey, and setTicket. [Reference](#cloudurl)
