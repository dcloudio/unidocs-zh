## uni云端一体安全网络

> HBuilderX 3.6.8+ 支持

## 简介

网络安全的问题很多：

1. 客户端受信。由于http的无状态，客户端的真实性很难保证。模拟客户端、重签apk，防不胜防。
2. 网络受信。即便是https的请求也会被抓包，路由器、地方运营商都可能获取你的数据、劫持和改写你的请求。

当攻击者了解了你的服务器接收什么样的数据时，就可以冒名客户端，提交假数据来攻击你的服务器。

尤其当你的业务中涉及促销、返佣、激励视频等场景，非常容易被刷。薅羊毛已经是一个非常成熟的灰产，哪里有漏洞，哪里就有他们赚钱的机会。

DCloud面向开发者同时提供了端引擎`uni-app` 和 云引擎`uniCloud`，如今进一步升级，提供云端一体的安全网络的能力。

`uni-app` 连接 `uniCloud` 时，可以选择是否启动安全网络。它通过高安全的保护机制，解决了客户端受信和网络受信的问题，防止客户端伪造和通信内容抓包。

uni云端一体安全网络，提供了如下2个实用功能：

|功能名称		|功能描述															|是否需要编码							|具体文档				|
|--				|--																	|--										|--						|
|客户端校验		|指定合法的客户端，包括包名、证书、appid。不授信的客户端将无法请求服务器	|只需配置，无需编码						|[文档](#verify-client)	|
|网络传输数据加密	|对网络传输的数据进行端到端加密，防止中间节点截获和篡改					|需要在联网请求的代码里设定是否加密的参数	|[文档](#encrypt-data)	|


**平台差异说明**

|App	|微信小程序	|Web|其他小程序	|
|:-:	|:-:		|:-:|:-:		|
|3.6.8+	|3.6.8+		|x	|x			|

注意：安全网络只支持微信小程序和App。并且App的安全级别更高。安全网络仅在uni-app客户端连unicloud云函数/云对象生效，云函数url化场景下不生效。

## 如何开通

不管使用安全网络的哪个功能，首先要开通安全网络。App和微信小程序略有区别，但大体都要经过如下流程：
1. 前端应用配置：在[https://dev.dcloud.net.cn/](https://dev.dcloud.net.cn/)的应用管理中指定要开通的应用，在“各平台信息”中配置app的包名、签名摘要或者微信小程序的appid。
2. 云端配置：在[uniCloud控制台](https://unicloud.dcloud.net.cn/)选定一个服务空间，在“安全网络”页面，关联在dev配好的某个应用。

App和微信两个平台细化说明如下：

### App平台开通安全网络@prepare-app

1. 在[开发者中心](https://dev.dcloud.net.cn/)`应用详情 --> 证书管理`内填写安卓应用的包名、签名和iOS应用的bundleId。一个应用只能有一个发行证书配置，但是可以有多个开发证书配置

  ![证书管理](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/secure-network-dev-cert.jpg)

2. 在[uniCloud控制台](https://unicloud.dcloud.net.cn/)关联允许发送安全网络请求的应用

  ![关联应用到服务空间安全网络](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/secure-network-unicloud-relate.jpg)
  
  本质上安全网络绑定的是应用的appid、包名、证书等信息。只不过这些信息统一配置在dev中，在uniCloud的web控制台来选择。所以务必注意dev配置的正式版、测试版的包名、签名是否正确。

3. 在项目根目录manifest.json文件内为app平台开启安全网络模块

  ![App云端一体安全网络模块](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/secure-network-app-manifest.jpg)

  **注意：**打包后生效。测试时需打包[自定义基座](../tutorial/run/run-app.md#customplayground)。

4. 在服务空间创建数据表[opendb-app-client-key](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-app-client-key)用于保存发放给客户端的密钥对。

  - 如果在[uniCloud控制台](https://unicloud.dcloud.net.cn/)，新建表界面在opendb表的其他分类中
  - 如果在HBuilderX的database目录点右键新建，可直接搜索`opendb-app-client-key`。新建后记得上传到uniCloud服务空间。
  
  参考文档：[创建一个表](https://uniapp.dcloud.net.cn/uniCloud/hellodb.html#create-collection)

  - 切勿删除或修改此集合内容，否则会导致部分客户端不能发送安全网络请求（重新安装客户端或清除客户端数据后才能正常使用）
  - 如果服务空间开通了redis，会自动在redis内存储一份客户端密钥对，以加速安全网络请求的处理。所使用的键为`unicloud:secure:app-client-key:{appId}:{deviceId}:string`
  - **强烈强烈建议开启redis功能、且在云函数package.json中关联redis扩展，**会大幅加快访问速度并减少数据库请求次数。因安全网络的加密行为已经导致比普通网络多耗时，所以商用项目请务必开通redis以保障速度。在[uniCloud控制台](https://unicloud.dcloud.net.cn/)点redis即可开通。

5. 上传任意schema文件到服务空间以触发一次clientDB云端模块的更新

**遗留**

- 安全网络暂未支持离线打包，后续会提供离线打包的方案

### 微信小程序开通安全网络@mp-weixin

安全网络在微信小程序上的实现，依赖了微信提供的一些用户级的凭据。所以需要下载 [uni-id-pages](https://ext.dcloud.net.cn/plugin?id=8577) 和 [uni-open-bridge](uni-open-bridge.md)，并在app.vue里初始化。

**无论是处理加密请求还是需要进行验证客户端的云函数在处理微信小程序发起的请求时都必须依赖`uni-id-common`和`uni-open-bridge-common`**

1. 在[开发者中心](https://dev.dcloud.net.cn/)`应用详情 --> 【名称待定】`内填写微信小程序的appId。一个应用只能有一个发行配置，但是可以有多个开发配置

  ![微信小程序AppId绑定](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/secure-network-dev-wx-appid.jpg)
  
2. 在uniCloud控制台关联允许发送安全网络请求的应用

  ![关联应用到服务空间安全网络](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/secure-network-unicloud-relate.jpg)

3. 工程中导入uni-id-pages

- `uni-id` [文档](uni-id-summary.md#save-user-token)
- `uni-id-pages` [插件下载地址](https://ext.dcloud.net.cn/plugin?id=8577)，需要`uni-id-pages 1.0.27`及以上版本

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

配置 `uni-open-bridge` 定时任务，定时从微信服务器获取 [access_token](uni-open-bridge.md#access_token) 并保存到Redis或数据库

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

**注意**：拷贝此文件内容时需要移除 `注释`。标准json不支持注释。在HBuilderX中可用多选`//`来批量移除注释。

如果项目之前已经使用过uni-id-pages和uni-open-bridge，则上述步骤可省略。

6. 在应用的生命周期 `onLaunch`（能保证在调用安全网络请求前调用完成的时机均可） 调用 `uniCloud.initSecureNetworkByWeixin()`，进行安全网络请求前的握手操作，关于此接口详细描述见：[uniCloud.initSecureNetworkByWeixin](client-sdk.md#init-secure-network-by-weixin)

对于使用uni-id-pages的项目App.vue页面需要补充如下代码，不使用uni-id-pages的开发者需要按照此文档进行操作：[不使用uni-id-pages时如何使用微信小程序安全网络](#mp-weixin-without-uni-id-pages)

```js
<script>
  export default {
    onLaunch: async function() {
      // #ifdef MP-WEIXIN
      const userInfo = uniCloud.getCurrentUserInfo()
      const callLoginByWeixin = userInfo.tokenExpired < Date.now() // 用户为未登录状态时调用一次微信登录
      await uniCloud.initSecureNetworkByWeixin({
        callLoginByWeixin: callLoginByWeixin
      })
      // #endif
    }
  }
</script>
```

注意：此方法内部会调用一次微信小程序的login，然后使用返回的code调用`uni-id-co`的`secureNetworkHandshakeByWeixin`方法（新增于uni-id-pages 1.0.27）
  
7. 在项目根目录manifest.json文件内为微信小程序平台开启`云端一体安全网络模块`
  
  ![微信小程序云端一体安全网络模块](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/secure-network-wx-manifest.jpg)

#### 不使用uni-id-pages时如何使用微信小程序安全网络@mp-weixin-without-uni-id-pages

> 新增于HBuilderX 3.7.7

对于部分已有用户体系，不希望引入uni-id-pages的开发者，可使用如下方案来使用微信小程序安全网络。

客户端需调整为在调用安全网络请求前使用`uniCloud.initSecureNetworkByWeixin`方法传入用户openid

```js
// app.js
<script>
  export default {
    onLaunch: async function() {
      // #ifdef MP-WEIXIN
      // 调用自有服务、云函数进行微信登录或以其他方式获取openid
      const openid = 'xxx'
      await uniCloud.initSecureNetworkByWeixin({
        openid: openid
      })
      // #endif
    }
  }
</script>
```

云函数内需要调用[uni-open-bridge-common](uni-open-bridge.md#uni-open-bridge-common)将微信应用级access_token及登录用户的session_key同步到uniCloud数据库，以便安全网络云端能从微信获取解密用参数。

::: warning uni-open-bridge-common使用注意事项
uni-open-bridge-common仍依赖uni-id的配置获取微信小程序appid，如何配置请参考：[uni-id config](uni-id-pages.md#config)
:::

如果从自有服务器同步access_token和session_key到uniCloud数据库内可以使用uni-open-bridge提供的url化调用方式，请参考：[uni-open-bridge url化调用](uni-open-bridge.md#cloudurl)

如果从云函数内同步access_token和session_key给安全网络按如下文档进行

**云函数存储微信小程序应用级access_token**

开发者应在自己云函数获取access_token，传递给uni-open-bridge-common进行存储，以供安全网络使用。或使用uni-open-bridge云函数的定时任务自动获取access_token，参考：[应用级access_token](uni-open-bridge.md#access_token)

微信access_token有一些特性，处理不好容易出现bug，请务必详读微信公众平台关于access_token的说明（微信小程序、公众号逻辑一样）：[微信公众平台access_token](https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html)

```js
await require('uni-open-bridge-common').setAccessToken({
  dcloudAppid: '__UNI__xxx',
  platform: 'weixin-mp'
}, {
  access_token: accessToken
}, 7200) // 新获取的accessToken有效期是2小时
```

**云函数存储微信用户session_key**

开发者应在用户调用微信登录使将openid、session_key传递给uni-open-bridge-common进行存储，以供安全网络使用

```js
await require('uni-open-bridge-common').setSessionKey({
  dcloudAppid: '__UNI__xxx',
  openid,
  platform: 'weixin-mp'
}, {
  session_key: sessionKey
}, 30 * 24 * 60 * 60) // session_key并没有固定有效期，暂以30天进行存储
```

## 客户端强制验证@verify-client

> 新增于 HBuilderX 3.6.8

客户端验证用于确保发起请求的客户端的真实性，只有指定的客户端才能访问云函数。

客户端验证功能全流程由uniCloud进行控制，开启此功能后将直接拒绝无权访问的客户端调用云函数。

开发者首先在[uniCloud控制台](https://unicloud.dcloud.net.cn/)的安全网络页面选择哪些客户端应用可以与uniCloud建立安全网络，然后在页面上单独开启客户端强制校验。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/secure-network-verify-client-config.jpg)

**切记**
1. 由于uni安全网络不支持web，一旦开启客户端强制校验后，web端将无法连接云函数。
2. 由于uni安全网络必须绑定自己的应用，所以不支持标准基座的真机运行，只能使用自定义基座。
3. 如果存在旧客户端，但是想在新版本使用安全网络，建议不开启客户端校验，使用请求加密来实现安全通讯。通过判断版本号，旧版本不强制要求使用加密。在旧版本量很小的时候去除这个逻辑。

开启客户端验证功能后，默认对**所有云函数**启用安全验证，仅在安全网络应用列表内配置的应用允许访问云函数。但有时，会有排除某个云函数的需求。比如指定的云函数校验或不校验客户端身份，这个云函数可能要url供外部访问。

所以uni安全网络提供了自定义客户端校验规则。

### 自定义客户端校验规则

在 uniCloud web控制台 的 安全网络页面，可打开自定义规则开关。开启自定义规则后，将不再执行全体云函数统一的客户端校验。改为，未被规则匹配到的云函数不进行客户端验证。

如下示例为一个简单的自定义规则配置：

```json
{
  "verify-client": [{ // 可访问云函数verify-client的应用列表
    "appId": "__UNI_xxxx",  // 客户端的DCloud AppId
    "platform": "android",  // 客户端平台，有三个可选值：android（安卓）、ios（iOS）、mp-weixin（微信小程序）。注意是小写
    "version": "production" // 客户端版本，有两个可选值：production（正式版）、development（测试版）。注意是小写
  }]
}
```

上述规则意味着，这个名为`verify-client`的云函数，只有应用的appid为`__UNI_xxxx`、platform即客户端平台为android、且为正式版，才能访问这个云函数；其他客户端无法访问这个云函数；且除了`verify-client`外，其他云函数可以被任何客户端随意访问。

如果想增加更多规则，在json中添加更多数组，每个数组是一条规则。比如想配置ios平台，就追加一个数组。

注意：自定义规则是一个标准的json，不支持编写注释，如需拷贝示例代码请务必去除注释。

云函数名为json的key，但可以写多个云函数。包括以下几种写法：

1. 单个云函数`verify-client`
2. 多个云函数`verify-client1,verify-client2`，注意逗号为英文逗号
3. 通配符`*`，代表所有云函数

当匹配一个云函数的自定义规则配置时，优先使用单个云函数名的配置，其次是多个云函数名的配置，最后是通配符的配置。如果都未匹配到则不对此云函数执行验证客户端的逻辑。

**注意**

- 如果修改客户端验证配置需要重新打包做出修改的客户端，如果是正在运行期间修改了配置需要重新运行客户端才会生效。这部分配置会同步到客户端，比如你添加了某个函数作为必须验证才使用的函数，这时候客户端需要新的配置才会在请求新函数是带上客户端验证参数，因此需要重新打包。
- 如需对clientDB请求进行客户端校验，使用`uni-clientDB`作为云函数名

## 数据加密传输@encrypt-data

除了校验客户端身份外，uni安全网络还提供了网络上下行传输数据的加密。

此时需要在客户端和服务器都要编写代码，倒不需要写具体的加密解密算法，而是需要在客户端指定哪些请求、哪些数据要加密，而在云端要校验客户端是否指定了正确的条件。

加密解密使用的是国际通行的高位AES算法。

具体写法如下：

### 客户端请求云函数

客户端通过callFunction调用云函数时，加入secretType参数。
```js
uniCloud.callFunction({
  name: 'collection',
  data: {
    name: 'user'
  },
  secretType: 'both' //both指上下行数据都加密，具体见下面的secretType章节
}).then(res => {
  const {
    errCode,
    errMsg
  } = res.result
  if(errCode) {
    uni.showModal({
      content: errMsg,
      showCancel: false
    })
  }
})
```

也就是每个callFunction请求，都可以指定是否加密，以及是对上行数据还是下行数据加密。

**注意**

- 安全网络相关接口不支持本地调试。即使在HBuilderX里面勾选连接本地云函数，客户端在请求时也会自动连接云端云函数。
- 由于云厂商会处理云函数抛出的错误，为保证客户端取到正确的错误码，云函数在返回安全网络错误时会在success回调内`res.result`内包含具体错误
- 与服务空间安全网络模块的握手行为和云函数请求不同，如果遇到错误会直接抛出。App端表现为请求云端下发公钥失败是，进入callFunction的fail回调

### 客户端请求云对象

客户端通过importObject调用云对象时，通过secretMethods参数来配置每个方法调用时是否加密。

```js
const obj = uniCloud.importObject('object-name', {
  secretMethods: {'login':'both'} // 对login方法设置为上下行的数据均要加密。也支持配置所有方法设置加密，参见下面的 secretMethods 说明
})
obj.test().then(()=>{}).catch(err => {
  uni.showModal({
    content: err.errMsg || err.message,
    showCancel: false
  })
})
```

也就是云对象导入时配置某个方法的请求是否要加密，以及是对上行数据还是下行数据加密。那么在客户端调用云对象的相应方法时会自动按这个配置执行。

### clientDB

clientDB暂不支持网络数据加密传输。但仍可以使用客户端身份校验。

### 参数说明

**secretType 属性说明**

|值			|描述												|
|:-:		|:-:												|
|none		|上下行都不加密，默认值										|
|request	|只加密客户端请求时的上行数据，服务器下发数据不加密	|
|response	|客户端请求时不加密数据，只加密服务器下发的数据		|
|both		|客户端和服务器上行下行数据都加密数据				|

- 之所以提供如此精细的加密配置，是因为加解密都是消耗资源的，增加了等待时间。一般只对真正需要防止网络窃取的保密数据才加密。

**secretMethods 属性说明**

`secretMethods` 是云对象中指定需要加密的方法名。

- 对所有方法设置加密，例如 `secretMethods: {'*':'both'}`
- 对每个方法配置加密，例如 `secretMethods: {'login':'both'}`，指定 `login` 方法的 `secretType` 为 both

方法级配置优先级最高，例如 `secretMethods: {'*':'response', 'login':'both'}`，login 的 both 覆盖了 `'*':'response'`

**注意**

- 微信小程序安全网络依赖于登录逻辑，因此在客户端检测到发送安全网络请求时，若用户未登录则会自动调用uni-id-co的loginByWeixin接口

### 服务器端

uni云端一体安全网络，已经在底层封装好了复杂的安全相关的算法。开发者只需关心对哪些请求、哪些数据进行加密。

**不管是客户端接收云端数据、还是云端接受客户端数据，开发者的代码拿到的数据永远都是解密后的数据。**

但云端有一个注意事项：为了避免客户端伪造`secretType`获取服务器敏感数据，应以服务器端为准，如果客户端携带的 `secretType` 不符合要求应拒绝响应数据。

示例代码如下：

#### 云函数中验证secretType

在云函数的context中有secretType。如果这个云函数的返回数据必须加密，那么应该使用如下方式校验客户端的请求是否合法。

```js
exports.main = async (event, context) => {
  const secretType = context.secretType
  // secretType 是客户端调用 uniCloud.callFunction 传递的参数 secretType

  if (secretType !== 'both' || secretType !== 'response') {
    throw new Error('secretType invalid') // 拒绝返回有效数据
  }
}
```

#### 云对象中验证secretType

在云对象的this中有secretType。如果这个云对象的reward方法的返回数据必须加密，那么应该使用如下方式校验客户端的请求是否合法。

```js
module.exports = {
  async _before() {
    const methodName = this.getMethodName()
    const clientInfo = this.getClientInfo()
    const secretType = clientInfo.secretType
    // methodName 是客户端调用的方法名
    // secretType 是客户端调用 uniCloud.importObject 传递的参数 secretMethods

    if (methodName === 'reward' && (secretType !== 'both' || secretType !== 'response')) {
      throw new Error('secretType invalid') // 拒绝返回有效数据
    }
  }
}
```

## 错误码@err-code

自HBuilderX 3.6.9起安全网络使用以下错误规范，此前错误码未统一不建议使用。安全网络使用的错误规范参考：[错误规范](../tutorial/err-spec.md)

### 客户端错误

|错误码	|错误详情																																									|
|---		|---																																											|
|10001	|App平台不支持小程序sdk和标准基座																													|
|10003	|App平台appKey为空，请尝试重新打包																												|
|10009	|App平台加密失败																																					|
|10010	|App平台解密失败																																					|
|20101	|客户端信息不在允许访问的客户端信息列表内，如果云端调整配置需要重新打包/运行客户端才会生效|
|20102	|微信小程序平台获取加密key失败																														|

### 云端错误

|错误码	|错误详情																												|
|---		|---																														|
|50000	|系统错误																												|
|60101	|客户端AppId缺失																								|
|60102	|客户端DeviceId缺失																							|
|60103	|客户端OsName缺失																								|
|60200	|服务空间未开通安全网络																					|
|60201	|当前应用AppId尚未关联到uniCloud安全网络												|
|60202	|当前应用AppId已关联到uniCloud安全网络，但是当前客户端平台未关联|
|70001	|客户端时间错误																									|
|70002	|客户端AppId未通过校验																					|
|70003	|客户端DeviceId未通过校验																				|
|70004	|客户端信息未通过校验																						|
|70005	|用户账号不存在																									|
|70006	|未找到用户openid																								|
|70007	|获取加密key失败																								|
|70008	|客户端验证所需的签名缺失，详见下方详细说明																				|
|70009	|未找到加密key																									|
|70010	|模拟器或root设备禁止访问																				|

微信小程序加解密时还会使用uni-id-common的checkToken方法，相关错误码参考：[uni-id错误码](uni-id-summary.md#errcode)

#### 70008错误的详细说明@err-70008

如出现预期外的70008错误请按照以下步骤排查

1. 项目manifest.json里面查看是否开启了安全网络模块
2. 修改云端客户端校验配置后需要重新编译运行。例如：此前未配置某个云函数需要校验客户端，在将此云函数配置为需要校验客户端后需要重新编译客户端

## 小贴士

1. 安全是相对的，没有绝对的安全。uni云端一体安全网络只是帮助普通开发者达到了业内一流的安全水准。
2. 安全涉及的范围很广，除了安全网络包含的范围外，还有账户密码、云端各种key和secret，都要保护好。很多安全事故是程序员误把关键key提交到github等代码托管平台。
3. 安全是有代价的，加密的数据越庞大，加密和解密的耗时越长。
4. 开启安全网络后，如果觉的联网速度变慢，一方面要开启redis，并在云函数中挂载redis扩展库；另一方面控制加密的数据量，没必要加密的数据就别加密。
