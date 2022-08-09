# uniCloud 加密网络通道

简介

为了避免 `uniCloud` 客户端与服务器通信时数据被截取和篡改，


**平台差异说明**

|App|微信小程序|
|:-:|:-:|
|后续支持|3.5.5+|


语法

```js
uniCloud.callFunction({
  name: 'collection',
  data: {
    name: 'user'
  },
  secret: true
  // ...
})
```

`secret: true` 表示使用加密网络通道，默认为 `false`


## App平台

后续支持


## 微信小程序

### 简介

微信侧维护了一个用户维度的可靠key，用于小程序和后台通信时进行加密和签名。

开发者可以分别通过小程序前端和微信后台提供的接口，获取用户的加密 key。

### 微信的流程如下

客户端

1. 在开发者客户端使用 `UserCryptoManager.getLatestUserKey` 获取用户最新的加密密钥信息。
2. 通过 `AES` 和加密密钥加密数据，然后发送到服务器

服务器

在开发者服务端，请求微信服务器后台接口 `getUserEncryptKey` 获取用户最近三次的key。在获取 key 的同时，接口会携带 version 信息，开发者可以比较 version 版本来选择使用对应的 key 对数据进行加解密。

获取 `getUserEncryptKey` 时需要参数 `openid`、`access_token`、`session_key`

1. `access_token` 需要服务器定时刷新并全局缓存

2. `session_key`
在微信客户端通过调用 `wx.login()` 获取 `code` 传递到服务器，在服务器请求微信的服务器换取 `session_key`，且在客户端任意地方调用 `wx.login()` 后 `session_key` 将失效，
在微信的多个业务中都需要用到 `session_key`，需要开发者来维护这些值

这些复杂的流程可以通过 `uni-open-bridge`、`uni-open-bridge-common` 解决，也无需人工维护，[详情](/uniCloud/uni-open-bridge)

### uniCloud流程如下

1. 使用 `uni-open-bridge`、`uni-open-bridge-common` 接管三方开放平台数据，[详情](/uniCloud/uni-open-bridge)

2. 在应用的生命周期 `onLaunch` 中检查微信登陆状态，如果过期需要登陆

注意 `wx.checkSession` 有调用次数限制警告，一个 `pv` 可调用 `2` 次

```js
// App.vue
<script>
  function checkUserSession() {
    wx.checkSession({
      fail: (err) => {
        wx.login({
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

3. 调用 `uniCloud.callFunction()`, 且传递参数 `secret: true`

```js
uniCloud.callFunction({
  name: 'collection',
  data: {
    name: 'user'
  },
  secret: true,
  success: (res) => {
    console.log(res.result);
  },
  fail: (err) => {
    console.log(err);
  }
})
```

客户端 `uniCloud.callFunction({ secret: true })` 内部逻辑如下:

1. 调用 `uniCloud.getCurrentUserInfo()` 检查本地用户登陆状态，登陆无效则调用 `wx.login()`，继续使用 `uni-id-co` 调用 `loginByWeixin({ code })`，此过程将同步更新 `uni-open-bridge-common` 保存的数据 `session_key`
2. 调用 `wx.getUserCryptoManager()` 获取加密密钥并通过 `AES` 加密数据，然后发送 `uniCloud` 服务器
3. 等待服务器响应加密数据到达客户端后解密，回调给开发者

注意：传递参数 `secret: true` 的 `callFunction` 拦截器不会生效，因为需要在内部解密服务器端下发的加密数据
