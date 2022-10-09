**云端一体安全网络**

> HBuilderX 3.6.2+ 支持

## 简介

网络安全的问题很多：

1. 客户端受信。因为过去采用无状态网络通过接口交换数据，客户端的真实性很难保证。
2. 网络抓包，即便是https的请求也会被抓包。

当攻击者了解了你的服务器接收什么样的数据时，就可以冒名客户端，提交假数据来攻击你的服务器。

尤其当你的业务中涉及促销、返佣、激励视频等场景，非常容易被刷。褥羊毛已经是一个非常成熟的灰产。

DCloud面向开发者同时提供了端引擎`uni-app` 和 云引擎`uniCloud`，其实可以提供云端一体的安全网络的能力。

`uni-app` 连接 `uniCloud` 时，可以选择是否启动安全网络。它通过高安全的保护机制，防止客户端伪造和通信内容抓包。

注意：安全网络不支持web平台，只支持微信小程序和App。并且App的安全级别更高。

**平台差异说明**

|App|微信小程序|
|:-:|:-:|
|3.6.6+|3.6.6+|

## 准备工作

### 微信小程序@mp-weixin

安全网络在微信小程序上的实现，依赖了微信提供的一些用户级的凭据。所以需要下载`uni-id-pages`和`uni-open-bridge`，并在app.vue里初始化。

1. 在[开发者中心](https://dev.dcloud.net.cn/)`应用详情 --> 【名称待定】`内填写微信小程序的appId。一个应用只能有一个发行配置，但是可以有多个开发配置

  【图片待补充】
  
2. 在uniCloud控制台关联允许发送安全网络请求的应用

  【图片待补充】

3. 工程中导入uni-id-pages

- `uni-id` [文档](uni-id-summary.md#save-user-token)
- `uni-id-co` [插件下载地址](https://ext.dcloud.net.cn/plugin?id=8577)

`uni-id-pages`这个插件是云端一体的登录插件，其实安全网络只需要其中的`uni-id-co`云对象。插件中前端登录页面是否使用由开发者自己根据业务决定。

4. 工程中导入uni-open-bridge插件

安全网络在微信小程序上依赖了微信的 `access_token`、`session_key`、`encrypt_key`等凭据。这些凭据需要`uni-open-bridge`统一接管。

- `uni-open-bridge` [文档](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)
- `uni-open-bridge` [插件下载地址](https://ext.dcloud.net.cn/plugin?id=9002)

5. 配置uni-id和uni-open-bridge

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

如果项目之前已经使用过uni-id-pages和uni-open-bridge，则上述步骤可省略。

6. 在应用的生命周期 `onLaunch` 中检查微信登陆状态，如果过期需要登陆

注意: [uni.checkSession](https://uniapp.dcloud.net.cn/api/plugins/login.html#uni-checksession) 有调用次数限制警告，一个 `pv` 可调用 `2` 次

App.vue页面需要补充如下代码：
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
  
7. 在项目根目录manifest.json文件内为微信小程序平台开启安全网络模块
  
  【图片待补充】

### App@app

App平台安全网络需使用[自定义基座](../tutorial/run/run-app.md#customplayground)，App端安全网络不依赖于登录逻辑。

1. 在[开发者中心](https://dev.dcloud.net.cn/)`应用详情 --> 证书管理`内填写安卓应用的包名、签名和iOS应用的bundleId。一个应用只能有一个发行证书配置，但是可以有多个开发证书配置

  【图片待补充】

2. 在uniCloud控制台关联允许发送安全网络请求的应用

  【图片待补充】
  
3. 在项目根目录manifest.json文件内为app平台开启安全网络模块

  【图片待补充】
  
## 调用方式

准备工作完成后，在uni-app客户端调用uniCloud服务器时，可以通过参数来声明这次请求走安全网络，对传输数据加密。

### 云函数

客户端通过callFunction调用云函数时，加入secretType参数。
```js
uniCloud.callFunction({
  name: 'collection',
  data: {
    name: 'user'
  },
  secretType: 'both' //both指上下行数据都加密，具体见下
})
```

### 云对象

客户端通过importObject调用云对象时，通过secretMethods参数来配置每个方法调用时是否加密。

```js
uniCloud.importObject('object-name', {
  secretMethods: {'login':'both'} // 支持配置所有方法设置加密参见下面的 secretMethods 说明
})
```

### clientDB

暂不支持

**secretType 属性说明**

|值			|描述												|
|:-:		|:-:												|
|none		|不加密，默认值										|
|request	|只加密客户端请求时的上行数据，服务器下发数据不加密	|
|response	|客户端请求时不加密数据，只加密服务器下发的数据		|
|both		|客户端和服务器上行下行数据都加密数据				|

**secretMethods 属性说明**

`secretMethods` 是云对象中指定需要加密的方法名。

- 对所有方法设置加密，例如 `secretMethods: {'*':'both'}`
- 对每个方法配置加密，例如 `secretMethods: {'login':'both'}`，指定 `login` 方法的 `secretType` 为 both

方法级配置优先级最高，例如 `secretMethods: {'*':'response', 'login':'both'}`，login 的 both 覆盖了 `'*':'response'`

**注意**

- 微信小程序安全网络依赖于登录逻辑，因此在客户端检测到发送安全网络请求时用户未登录时会自动调用uni-id-co的loginByWeixin接口

## 服务器端

虽然uni-app客户端和uniCloud云端通信是加密的，但对于开发者而言过程是透明的。

**不管是客户端接收云端数据、还是云端接受客户端数据，开发者的代码拿到的数据都是解密后的数据。**

但云端有一个注意事项：为了避免客户端伪造`secretType`获取服务器敏感数据，应以服务器端为准，如果客户端携带的 `secretType` 不符合要求应拒绝响应数据。示例代码如下

### 云函数中验证secretType

在云函数的context中有secretType。

```js
exports.main = async (event, context) => {
  const secretType = context.secretType
  // secretType 是客户端调用 uniCloud.callFunction 传递的参数 secretType

  if (secretType !== 'both' || secretType !== 'response') {
    return null
  }
}
```

### 云对象中验证secretType

在云对象的this中有secretType。

```js
module.exports = {
  async _before() {
    const methodName = this.getMethodName()
    const clientInfo = this.getClientInfo()
    const secretType = clientInfo.secretType
    // methodName 是客户端调用的方法名
    // secretType 是客户端调用 uniCloud.importObject 传递的参数 secretMethods

    if (methodName === 'reward' && (secretType !== 'both' || secretType !== 'response')) {
      throw new Error('secretType invalid')
    }
  }
}
```

## 错误码

|错误码									|说明											|平台				|
|---										|---											|---				|
|ACCOUNT_NOT_EXISTS			|用户账号不存在						|微信小程序	|
|OPENID_NOT_FOUND				|用户表记录内openid未找到	|微信小程序	|
|GET_ENCRYPT_KEY_FAILED	|获取加密key失败					|微信小程序	|

微信小程序加解密时还会使用uni-id-common的checkToken方法，相关错误码参考：[uni-id错误码](uni-id-summary.md#errcode)

## 小贴士

1. 安全是相对的，没有绝对的安全。
2. 安全是有代价的，加密的数据越庞大，加密和解密的耗时越长。
