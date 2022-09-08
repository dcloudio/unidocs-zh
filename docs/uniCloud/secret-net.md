云端一体安全网络
Cloud-integrated security network

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

当DCloud同时提供了`uni-app` 和 `uniCloud`时，事实上具备了提供云端一体的安全网络的能力。
When DCloud provides both `uni-app` and `uniCloud`, it actually has the ability to provide a cloud-integrated secure network.

在HBuilderX 3.5.5+ ，当开发者同时使用 `uni-app` 和 `uniCloud` 时，可以在网络请求时选择是否通过安全网络运行，它通过高安全的保护机制，防止客户端伪造和通信内容抓包。
In HBuilderX 3.5.5+, when developers use `uni-app` and `uniCloud` at the same time, they can choose whether to run through a secure network when requesting a network. It uses a high-security protection mechanism to prevent clients from forging and communicating content Capture packets.

注意：安全网络不支持web平台，只支持微信小程序和App。并且App的安全级别更高。
Note: Safe Network does not support web platform, only WeChat applet and App. And the security level of the App is higher.

**平台差异说明**
**Platform Difference Description**

|App|微信小程序|
|App|WeChat Mini Program|
|:-:|:-:|
|后续支持|3.5.5+|
|Follow-up support|3.5.5+|

## 开通流程
## Opening process

### App平台
### App Platform

后续支持
Follow-up support

### 微信小程序
### WeChat Mini Program

1. 下载uni-id插件
1. Download the uni-id plugin

- `uni-id-co` [详情](/uniCloud/uni-id-summary.html#save-user-token)
- `uni-id-co` [details](/uniCloud/uni-id-summary.html#save-user-token)

2. 下载uni-open-bridge插件
2. Download the uni-open-bridge plugin

在微信小程序上依赖 `access_token`、`session_key`, `encrypt_key`。这些凭据需要`uni-open-bridge`统一接管。
Depends on `access_token`, `session_key`, `encrypt_key` on WeChat applet. These credentials need to be taken over by `uni-open-bridge`.

- `uni-open-bridge` [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)
- `uni-open-bridge` [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)

3. 在应用的生命周期 `onLaunch` 中检查微信登陆状态，如果过期需要登陆
3. Check the WeChat login status in the application life cycle `onLaunch`, if it expires, you need to log in

注意: [uni.checkSession](https://uniapp.dcloud.net.cn/api/plugins/login.html#uni-checksession) 有调用次数限制警告，一个 `pv` 可调用 `2` 次
Note: [uni.checkSession](https://uniapp.dcloud.net.cn/api/plugins/login.html#uni-checksession) has a warning about the number of calls, a `pv` can be called `2` times

```js
// App.vue
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


## 调用方式
## calling method

开通配置后，在uni-app客户端调用uniCloud服务器时，可以通过加入secret参数来声明这次请求走安全网络，对传输数据加密。
After the configuration is activated, when the uni-app client calls the uniCloud server, it can add the secret parameter to declare that the request goes through the secure network and encrypt the transmitted data.

- callFunction

客户端通过callFunction调用云函数时，加入secret参数。
When the client calls the cloud function through callFunction, add the secret parameter.
```js
uniCloud.callFunction({
  name: 'collection',
  data: {
    name: 'user'
  },
  secretType: 'both'
})
```


- 云对象
- cloud objects

客户端通过importObject调用云对象时，加入secret和secretMethods参数。
When the client calls the cloud object through importObject, add the secret and secretMethods parameters.

```js
uniCloud.importObject('object-name', {
  customUI: false,
  secretMethods: {'login':'both'}
})
```


**secret 属性说明**
**secret attribute description**

|值				|描述																						|
|value |description |
|:-:			|:-:																						|
|none			|不加密，默认值																	|
|none |No encryption, default |
|request	|只加密客户端请求时的上行数据，服务器下发数据不加密	|
|request |Only the uplink data requested by the client is encrypted, and the data sent by the server is not encrypted |
|response	|客户端请求时不加密数据，只加密服务器下发的数据			|
|response |The data is not encrypted when the client requests, only the data sent by the server is encrypted |
|both			|客户端和服务器上行下行数据都加密数据							|
|both |Client and server upstream and downstream data are encrypted data |

**secretMethods 属性说明**
**secretMethods property description**

`secretMethods` 是云对象中指定需要加密的方法名。因为云对象导入后，调用方法时没有额外指定的方式，所以集中在这里配置。如果不配置，则云对象的所有方法请求时都会加密。
`secretMethods` is the name of the method specified in the cloud object that needs to be encrypted. Because after the cloud object is imported, there is no additional way to specify the method when calling the method, so the configuration is concentrated here. If not configured, all methods of the cloud object will be encrypted when requested.


## 小贴士
## Tips

1. 安全是相对的，没有绝对的安全。
1. Security is relative, there is no absolute security.
2. 安全是有代价的，加密的数据越庞大，加密和解密的耗时越长。
2. Security comes at a price. The larger the encrypted data, the longer it takes to encrypt and decrypt.