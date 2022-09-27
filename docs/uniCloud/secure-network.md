**云端一体安全网络**
**Cloud integrated security network**

> HBuilderX 3.6.2+ 支持
> HBuilderX 3.6.2+ support

## 简介
## Introduction

网络安全的问题很多：
There are many problems with network security:

1. 客户端受信。因为过去采用无状态网络通过接口交换数据，客户端的真实性很难保证。
1. The client is trusted. Because in the past, stateless networks were used to exchange data through interfaces, the authenticity of the client was difficult to guarantee.
2. 网络抓包，即便是https的请求也会被抓包。
2. Network packet capture, even https requests will be captured.

当攻击者了解了你的服务器接收什么样的数据时，就可以冒名客户端，提交假数据来攻击你的服务器。
When an attacker knows what kind of data your server receives, they can impersonate the client and submit fake data to attack your server.

尤其当你的业务中涉及促销、返佣、激励视频等场景，非常容易被刷。褥羊毛已经是一个非常成熟的灰产。
Especially when your business involves promotions, rebates, incentive videos and other scenarios, it is very easy to be brushed. Bedding wool is already a very mature grey product.

DCloud面向开发者同时提供了端引擎`uni-app` 和 云引擎`uniCloud`，其实可以提供云端一体的安全网络的能力。
DCloud provides both the end engine `uni-app` and the cloud engine `uniCloud` for developers, which can actually provide the ability of a cloud-integrated secure network.

`uni-app` 连接 `uniCloud` 时，可以选择是否启动安全网络。它通过高安全的保护机制，防止客户端伪造和通信内容抓包。
When `uni-app` connects to `uniCloud`, you can choose whether to enable secure network. It uses a high-security protection mechanism to prevent client forgery and communication content capture.

注意：安全网络不支持web平台，只支持微信小程序和App。并且App的安全级别更高。
Note: Safe Network does not support web platform, only WeChat applet and App. And the security level of the App is higher.

**平台差异说明**
**Platform Difference Description**

|App|微信小程序|
|App|WeChat Mini Program|
|:-:|:-:|
|后续支持|3.6.2+|
|Follow-up support|3.6.2+|

## 准备工作
## Preparation

### 微信小程序@mp-weixin

安全网络在微信小程序上的实现，依赖了微信提供的一些用户级的凭据。所以需要下载`uni-id`和`uni-open-bridge`，并在app.vue里初始化。
The implementation of the secure network on the WeChat MiniApp relies on some user-level credentials provided by WeChat. So you need to download `uni-id` and `uni-open-bridge` and initialize them in app.vue.

1. 工程中导入uni-id
1. Import uni-id into the project

- `uni-id` [文档](uni-id-summary.md#save-user-token)
- `uni-id` [documentation](uni-id-summary.md#save-user-token)
- `uni-id-co` [插件下载地址](https://ext.dcloud.net.cn/plugin?id=8577)
- `uni-id-co` [plugin download address](https://ext.dcloud.net.cn/plugin?id=8577)

`uni-id-pages`这个插件是云端一体的登录插件，其实安全网络只需要其中的`uni-id-co`云对象。插件中前端登录页面是否使用由开发者自己根据业务决定。
The `uni-id-pages` plugin is a cloud-integrated login plugin. In fact, the security network only needs the `uni-id-co` cloud object. Whether to use the front-end login page in the plug-in is decided by the developer according to the business.

2. 工程中导入uni-open-bridge插件
2. Import the uni-open-bridge plugin into the project

安全网络在微信小程序上依赖了微信的 `access_token`、`session_key`、`encrypt_key`等凭据。这些凭据需要`uni-open-bridge`统一接管。
Security Network relies on WeChat's `access_token`, `session_key`, `encrypt_key` and other credentials on the WeChat MiniApp. These credentials need to be taken over by `uni-open-bridge`.

- `uni-open-bridge` [文档](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)
- `uni-open-bridge` [documentation](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)
- `uni-open-bridge` [插件下载地址](https://ext.dcloud.net.cn/plugin?id=9002)
- `uni-open-bridge` [plugin download address](https://ext.dcloud.net.cn/plugin?id=9002)

3. 配置uni-id和uni-open-bridge
3. Configure uni-id and uni-open-bridge

登陆微信公众平台[https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)，获取微信小程序的固定凭据 `appid` 和 `secret`，配置到 uni-id-config

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
  }
}
```

配置 `uni-open-bridge` 定时任务，定时从微信服务器获取 [access_token](/uniCloud/uni-open-bridge.html#access_token) 并保存到Redis或数据库

```json
// uniCloud/cloudfunctions/common/uni-config-center/uni-open-bridge/config.json
{
  "schedule": {
    "__UNI__xxxxxx": { // dcloudAppid, 需要和 `uni-config-center` uni-id中的配置一致
      "enable": true, // 任务全局开关，优先级最高
      "weixin-mp": { // 平台，目前仅支持 微信小程序、微信 H5，详情参见 https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge#platform
        "enable": true, // 当前平台任务开关
        "tasks": ["accessToken"] // 要执行的任务，微信小程序支持 accessToken
      }
    }
  },
  "ipWhiteList": ["0.0.0.0"] // 用于 URL化后 http 调用的服务器IP白名单，即指定ip的服务器才可以访问URL化后的`uni-open-bridge云对象
}
```

注意：拷贝此文件内容时需要移除 `注释`。标准json不支持注释。在HBuilderX中可用多选`//`来批量移除注释。

如果项目之前已经使用过uni-id和uni-open-bridge，则上述步骤可省略。
If the project has used uni-id and uni-open-bridge before, the above steps can be omitted.

4. 在应用的生命周期 `onLaunch` 中检查微信登陆状态，如果过期需要登陆
4. Check the WeChat login status in the application's life cycle `onLaunch`, if it expires, you need to log in

注意: [uni.checkSession](https://uniapp.dcloud.net.cn/api/plugins/login.html#uni-checksession) 有调用次数限制警告，一个 `pv` 可调用 `2` 次
Note: [uni.checkSession](https://uniapp.dcloud.net.cn/api/plugins/login.html#uni-checksession) has a warning about the number of calls, a `pv` can be called `2` times

App.vue页面需要补充如下代码：
The App.vue page needs to add the following code:
```js
<script>
  function checkUserSession() {
    uni.checkSession({
      fail: (err) => {
        uni.login({
          success: async ({ code }) => {
            const uniIdCo = uniCloud.importObject('uni-id-co') // uniCloud云对象 uni-id-co
            await uniIdCo.loginByWeixin({ code })
          }
        })
      }
    })
  }

  export default {
    onLaunch: function() {
      console.log('App Launch')
      // #ifdef MP-WEIXIN
      checkUserSession();
      // #endif
    }
  }
</script>
```

5. 在manifest中勾选加密模块
5. Check the encryption module in the manifest
**缺内容？**
**Missing content? **

## 调用方式
## calling method

准备工作完成后，在uni-app客户端调用uniCloud服务器时，可以通过加入secret参数来声明这次请求走安全网络，对传输数据加密。
After the preparations are completed, when the uni-app client calls the uniCloud server, it can declare that the request goes through the secure network by adding the secret parameter to encrypt the transmitted data.

- callFunction

客户端通过callFunction调用云函数时，加入secretType参数。
When the client calls the cloud function through callFunction, add the secretType parameter.
```js
uniCloud.callFunction({
  name: 'collection',
  data: {
    name: 'user'
  },
  secretType: 'both' //both指上下行数据都加密，具体见下
})
```

- 云对象
- cloud objects

客户端通过importObject调用云对象时，通过secretMethods参数来配置每个方法调用时是否加密。
When the client calls cloud objects through importObject, configure whether to encrypt each method through the secretMethods parameter.

```js
uniCloud.importObject('object-name', {
  secretMethods: {'login':'both'} // 支持配置所有方法设置加密参见下面的 secretMethods 说明
})
```

- clientDB

暂不支持

**secretType 属性说明**
**secretType attribute description**

|值			|描述												|
|value |description |
|:-:		|:-:												|
|none		|不加密，默认值										|
|none |No encryption, default |
|request	|只加密客户端请求时的上行数据，服务器下发数据不加密	|
|request |Only the uplink data requested by the client is encrypted, and the data sent by the server is not encrypted |
|response	|客户端请求时不加密数据，只加密服务器下发的数据		|
|response |The data is not encrypted when the client requests, only the data sent by the server is encrypted |
|both		|客户端和服务器上行下行数据都加密数据				|
|both |Client and server upstream and downstream data are encrypted data |

**secretMethods 属性说明**
**secretMethods property description**

`secretMethods` 是云对象中指定需要加密的方法名。

- 对所有方法设置加密，例如 `secretMethods: {'*':'both'}`
- 对每个方法配置加密，例如 `secretMethods: {'login':'both'}`，指定 `login` 方法的 `secretType` 为 both

方法级配置优先级最高，例如 `secretMethods: {'*':'response', 'login':'both'}`，login 的 both 覆盖了 `'*':'response'`

## 服务器端
## Service-Terminal

虽然uni-app客户端和uniCloud云端通信是加密的，但对于开发者而言过程是透明的。
Although the communication between the uni-app client and the uniCloud cloud is encrypted, the process is transparent to the developer.

**不管是客户端接收云端数据、还是云端接受客户端数据，开发者的代码拿到的数据都是加密后的数据。**

但云端有一个注意事项：为了避免客户端伪造`secretType`获取服务器敏感数据，应以服务器端为准，如果客户端携带的 `secretType` 不符合要求应拒绝响应数据。示例代码如下
However, there is a caveat in the cloud: in order to prevent the client from forging `secretType` to obtain sensitive server data, the server side should prevail. If the `secretType` carried by the client does not meet the requirements, the response data should be rejected. The sample code is as follows

- 云函数中验证secretType
- Verify secretType in cloud function

在云函数的context中有secretType。
There is secretType in the context of the cloud function.

```js
exports.main = async (event, context) => {
  const secretType = context.secretType
  // secretType 是客户端调用 uniCloud.callFunction 传递的参数 secretType
  // secretType is the parameter secretType passed by the client to call uniCloud.callFunction

  if (secretType !== 'both' || secretType !== 'response') {
    return null
  }
}
```

- 云对象中验证secretType
- Validate secretType in cloud object

在云对象的this中有secretType。
There is secretType in this of the cloud object.

```js
module.exports = {
  async _before() {
    const methodName = this.getMethodName()
    const clientInfo = this.getClientInfo()
    const secretType = clientInfo.secretType
    // methodName 是客户端调用的方法名
    // methodName is the method name called by the client
    // secretType 是客户端调用 uniCloud.importObject 传递的参数 secretMethods
    // secretType is the parameter secretMethods passed by the client when calling uniCloud.importObject

    if (methodName === 'login' && (secretType !== 'both' || secretType !== 'response')) {
      throw new Error('secretType invalid')
    }
  }
}
```

## 错误码
## error code

**缺内容，客户端错误，服务器解密错误，都应该把错误码列出来？**
**Lack of content, client error, server decryption error, should the error code be listed? **

## 小贴士
## Tips

1. 安全是相对的，没有绝对的安全。
1. Security is relative, there is no absolute security.
2. 安全是有代价的，加密的数据越庞大，加密和解密的耗时越长。
2. Security comes at a price. The larger the encrypted data, the longer it takes to encrypt and decrypt.
