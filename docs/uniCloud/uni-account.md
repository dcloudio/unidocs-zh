## 简介
## Introduction

`uni-account`是一个适用于微信小程序和支付宝小程序的平台账户登录的云函数模板。`uni-account`内部对不同平台的 api 进行了拉齐，有助于开发者更方便的调用相关功能。
`uni-account` is a cloud function template for platform account login of WeChat applet and Alipay applet. `uni-account` internally integrates the APIs of different platforms, which helps developers to call related functions more conveniently.

**uni-account功能已整合到uni-id内，推荐使用uni-id**
**uni-account function has been integrated into uni-id, it is recommended to use uni-id**

## 引入 uni-account
## Introduce uni-account

开发者可以自行选择是从插件市场导入还是从 npm 安装，引入方式略有不同，请看下面示例
Developers can choose whether to import from the plugin market or install from npm. The import method is slightly different. Please see the example below

```js
// 插件市场导入
// plugin market import
const uniAccount = require('uni-account')

// npm安装
// npm install
const uniAccount = require('@dcloudio/uni-account')
```

**注意**
**Notice**

- 插件市场导入的用法请参考[云函数公用模块](https://uniapp.dcloud.net.cn/uniCloud/cf-common)
- Please refer to [Cloud Function Common Module](https://uniapp.dcloud.net.cn/uniCloud/cf-common) for the usage of plugin market import

## 初始化
## Initialize

进行初始化操作返回 uni-account 实例
Perform an initialization operation to return a uni-account instance

### 微信小程序
### WeChat Mini Program

**入参说明**
**Introduction to parameters**

| 参数名  |  类型  | 默认值 | 必填 |           说明           |
| Parameter Name | Type | Default Value | Required | Description |
| :-----: | :----: | :----: | :--: | :----------------------: |
|  appId  | String |   -    |  是  |        小程序 ID         |
| appId | String | - | Yes | Mini Program ID |
| secret  | String |   -    |  -   |        小程序密钥        |
| secret | String | - | - | Mini Program Key |
| timeout | Number |  5000  |  否  | 请求超时时间，单位：毫秒 |
| timeout | Number | 5000 | No | Request timeout, unit: milliseconds |

```js
const uniAccountIns = uniAccount.initWeixin({
  appId,
  secret,
})
```

### 支付宝小程序
### Alipay applet

**入参说明**
**Introduction to parameters**

|   参数名   |  类型  | 默认值 | 必填 |           说明           |
| Parameter Name | Type | Default Value | Required | Description |
| :--------: | :----: | :----: | :--: | :----------------------: |
|   appId    | String |   -    |  是  |        小程序 ID         |
| appId | String | - | Yes | Mini Program ID |
| privateKey | String |   -    |  是  |      小程序应用私钥      |
| privateKey | String | - | Yes | Mini Program Application Private Key |
|  timeout   | Number |  5000  |  否  | 请求超时时间，单位：毫秒 |
| timeout | Number | 5000 | No | Request timeout, unit: milliseconds |

```js
const uniAccountIns = uniAccount.initAlipay({
  appId,
  privateKey,
})
```

## Api 列表
## Api list

### 获取 openid
### Get openid

`uniAccountIns.code2Session`。传入客户端上调用[uni.login](https://uniapp.dcloud.net.cn/api/plugins/login?id=login)返回的`code`来获取用户`openid`等信息
`uniAccountIns.code2Session`. Pass in the `code` returned by calling [uni.login](https://uniapp.dcloud.net.cn/api/plugins/login?id=login) on the client to obtain user `openid` and other information


**入参说明**
**Introduction to parameters**

| 参数名 |  类型  | 默认值 | 必填 |           说明            |
| Parameter Name | Type | Default Value | Required | Description |
| :----: | :----: | :----: | :--: | :-----------------------: |
|  code  | String |   -    |  是  | uni.login 获取的用户 code |
| code | String | - | Yes | User code obtained by uni.login |

**返回值说明**
**Return value description**

|    属性    |  类型  |      说明      |         支持平台         |
| Properties | Type | Description | Supported Platforms |
| :--------: | :----: | :------------: | :----------------------: |
|   openid   | String |  用户唯一标识  | 支付宝小程序、微信小程序 |
| openid | String | User unique identifier | Alipay applet, WeChat applet |
| sessionKey | String |    会话密钥    |        微信小程序        |
| sessionKey | String | Session Key | WeChat Mini Program |
|  unionid   | String | 用户唯一标识符 |        微信小程序        |
| unionid | String | User Unique Identifier | WeChat Mini Program |

**注意**
**Notice**

- UnionID 为用户在微信开放平台的唯一标识符，在满足 UnionID 下发条件的情况下会返回，详见 [UnionID 机制说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html)。
- UnionID is the user's unique identifier on the WeChat open platform, and will be returned when the conditions for issuing UnionID are met. For details, see [UnionID Mechanism Description](https://developers.weixin.qq.com/miniprogram/dev/framework /open-ability/union-id.html).

**示例代码**
**Sample code**

```js
const { openid } = await uniAccountIns.code2Session(code)
```

### 更多 Api 正在补充
### More APIs are being added
