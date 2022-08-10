# uniCloud 加密网络通道

简介

为了避免 `uni-app` 和 `uniCloud` 通信时数据被截取和篡改


**平台差异说明**

|App|微信小程序|
|:-:|:-:|
|后续支持|3.5.5+|


## callFunction

```js
uniCloud.callFunction({
  name: 'collection',
  data: {
    name: 'user'
  },
  secret: 'both'
})
```


## 云对象

```js
uniCloud.importObject('object-name', {
  customUI: false,
  secret: 'both',
  secretMethods: ['login']
})
```


`secret` 属性说明

|值				|描述																					|
|:-:			|:-:																					|
|none			|不加密，默认值																|
|request	|客户端请求时加密数据，服务器下发数据时不加密	    |
|response	|客户端请求时不加密数据，服务器下发数据时加密	    |
|both			|客户端和服务器同时加密数据										  |

`secretMethods` 需要加密的方法名


## 依赖uniCloud模块

- `uni-id-co` [详情]()
- `uni-open-bridge` [详情]()


## App平台

后续支持


## 微信小程序

在微信小程序上依赖 `access_token`、`session_key`, `encrypt_key`


### 流程如下

1. 使用 `uni-open-bridge`、`uni-open-bridge-common` 接管三方开放平台数据，[详情](/uniCloud/uni-open-bridge)

2. 在应用的生命周期 `onLaunch` 中检查微信登陆状态，如果过期需要登陆

注意 `uni.checkSession` 有调用次数限制警告，一个 `pv` 可调用 `2` 次

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

3. 调用 `uniCloud.callFunction()` 或 `uniCloud.importObject`

客户端内部逻辑如下:

1. 调用 `uniCloud.getCurrentUserInfo()` 检查本地 `uni-id` 用户登陆状态，登陆无效则调用 `uni.login()`，继续使用 `uni-id-co` 调用 `loginByWeixin({ code })`，此过程将同步更新 `uni-open-bridge-common` 保存的数据 `session_key`
2. 调用 `uni.getUserCryptoManager()` 获取加密密钥并通过 `AES` 加密数据，然后发送到 `uniCloud` 服务器
3. 等待服务器响应加密数据到达客户端后解密，回调给开发者


## 小贴士

安全总是相对的

安全网络是为了防止在设备上安装了受信任证书后 `https` 请求被抓包问题
