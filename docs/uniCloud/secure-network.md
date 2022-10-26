## 云端一体安全网络

> HBuilderX 3.6.7+ 支持

## 简介

网络安全的问题很多：

1. 客户端受信。由于http的无状态，客户端的真实性很难保证。模拟客户端、重签apk，防不胜防。
2. 网络受信。即便是https的请求也会被抓包，路由器、地方运营商都可能获取你的数据、劫持和改写你的请求。

当攻击者了解了你的服务器接收什么样的数据时，就可以冒名客户端，提交假数据来攻击你的服务器。

尤其当你的业务中涉及促销、返佣、激励视频等场景，非常容易被刷。薅羊毛已经是一个非常成熟的灰产，哪里有漏洞，哪里就有他们赚钱的机会。

DCloud面向开发者同时提供了端引擎`uni-app` 和 云引擎`uniCloud`，如今进一步升级，提供云端一体的安全网络的能力。

`uni-app` 连接 `uniCloud` 时，可以选择是否启动安全网络。它通过高安全的保护机制，解决了客户端受信和网络受信的问题，防止客户端伪造和通信内容抓包。

安全网络有两个主要功能，**客户端验证**和**网络请求加密**，这两个功能对应里面会详细讲解，参考：[客户端验证](#verify-client)、[网络请求加密](#encrypt-data)

注意：安全网络不支持web平台，只支持微信小程序和App。并且App的安全级别更高。安全网络在客户端callFunction时生效，云函数url化等场景下不生效。

**平台差异说明**

|App|微信小程序|
|:-:|:-:|
|3.6.7+|3.6.7+|

## 如何开通

App和微信小程序略有区别，但大体都要经过如下流程：
1. 在dev.dcloud.net.cn的应用管理中指定要开通的应用，在“各平台信息”中配置app的包名、签名摘要或者微信小程序的appid。
2. 在uniCloud web控制台选定一个服务空间，选择安全网络，关联某个app。

两个平台细化说明如下。

### App平台开通安全网络@app

1. 在[开发者中心](https://dev.dcloud.net.cn/)`应用详情 --> 证书管理`内填写安卓应用的包名、签名和iOS应用的bundleId。一个应用只能有一个发行证书配置，但是可以有多个开发证书配置

  ![证书管理](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/b4e76aed-6659-47e6-a18e-e41bdf804643.jpg)

2. 在[uniCloud控制台](https://unicloud.dcloud.net.cn/)关联允许发送安全网络请求的应用

  ![关联应用到服务空间安全网络](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/61e912c0-8287-441b-917d-7dd184bae729.jpg)
  
  本质上安全网络绑定的是应用的appid、包名、证书等信息。只不过这些信息统一配置在dev中，在uniCloud的web控制台来选择。所以务必注意dev配置的正式版、测试版的包名、签名是否正确。

3. 在项目根目录manifest.json文件内为app平台开启安全网络模块

  ![App云端一体安全网络模块](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/fe4620a4-2e16-4306-b9ae-38f1ded13a43.jpg)

  **注意：**打包后生效。测试时需打包[自定义基座](../tutorial/run/run-app.md#customplayground)。

4. 在服务空间创建数据表[opendb-app-client-key](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-app-client-key)用于保存发放给客户端的密钥对，参考文档：[创建一个表](https://uniapp.dcloud.net.cn/uniCloud/hellodb.html#create-collection)

  - 切勿删除或修改此集合内容，否则会导致部分客户端不能发送安全网络请求（重新安装客户端或清除客户端数据后才能正常使用）
  - 如果服务空间开通了redis会在redis内存储一份客户端密钥对以加速安全网络请求的处理，所使用的键为`unicloud:secure:app-client-key:{appId}:{deviceId}:string`
  - **强烈建议开启redis功能并在云函数关联redis扩展，**会大幅加快访问速度并减少数据库请求次数

5. 上传任意schema文件到服务空间以触发一次clientDB云端模块的更新

**注意**

- 安全网络暂未支持离线打包，后续会提供离线打包的方案

### 微信小程序开通安全网络@mp-weixin

安全网络在微信小程序上的实现，依赖了微信提供的一些用户级的凭据。所以需要下载`uni-id-pages`和`uni-open-bridge`，并在app.vue里初始化。

**无论是处理加密请求还是需要进行验证客户端的云函数在处理微信小程序发起的请求时都必须依赖`uni-id-common`和`uni-open-bridge-common`**

1. 在[开发者中心](https://dev.dcloud.net.cn/)`应用详情 --> 【名称待定】`内填写微信小程序的appId。一个应用只能有一个发行配置，但是可以有多个开发配置

  ![微信小程序AppId绑定](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/8a1c5106-23ba-46a6-ab3b-3f2ca7c6883a.jpg)
  
2. 在uniCloud控制台关联允许发送安全网络请求的应用

  ![关联应用到服务空间安全网络](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/61e912c0-8287-441b-917d-7dd184bae729.jpg)

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
  
7. 在项目根目录manifest.json文件内为微信小程序平台开启`云端一体安全网络模块`
  
  ![微信小程序云端一体安全网络模块](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/ab96f1f7-af14-4f08-8b1c-699ecfce3381.jpg)

**注意**

- 发送安全网络请求前如果检测到客户端storage内不存在`uni_id_token`（即用户未登录），则会自动调用一次`uni-id-co`的`loginByWeixin`方法进行一次登录

## 客户端验证@verify-client

> 新增于 HBuilderX 3.6.8

客户端验证用于确保发起请求的客户端的真实性。客户端验证功能全流程由uniCloud进行控制，开启此功能后将直接拒绝无权访问的客户端调用云函数。

开发者需在[uniCloud控制台](https://unicloud.dcloud.net.cn/)的安全网络菜单内添加客户端校验相关配置。

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/bd8f8939-67d5-415b-85eb-f63d4d1dc2dc.jpg)

开启客户端验证功能后，默认对所有云函数启用安全验证，仅在安全网络应用列表内配置的应用允许访问云函数。

如有自定义安全规则的需求，需打开自定义规则开关手动配置。开启自定义规则后，未被规则匹配到的云函数不进行客户端验证。

### 自定义规则语法

自定义规则是一个标准的json，不支持编写注释，如需拷贝示例代码请务必去除注释。

如下示例为一个简单的自定义规则配置

```json
{
  "verify-client": [{ // 可访问云函数verify-client的应用列表
    "appId": "__UNI_xxxx",  // 客户端的DCloud AppId
    "platform": "android",  // 客户端平台，有三个可选值：android（安卓）、ios（iOS）、mp-weixin（微信小程序）
    "version": "production" // 客户端版本，有两个可选值：production（正式版）、development（测试版）
  }]
}
```

云函数名有以下几种写法

1. 单个云函数`verify-client`
2. 多个云函数`verify-client1,verify-client2`，注意逗号为英文逗号
3. 通配符`*`

当匹配一个云函数的自定义规则配置时，优先使用单个云函数名的配置，其次是多个云函数名的配置，最后是通配符的配置。如果都未匹配到则不对此云函数执行验证客户端的逻辑。

**注意**

- 如果修改客户端验证配置需要重新打包做出修改的客户端。

## 数据加密传输@encrypt-data

如需加密传输的数据，则在客户端和服务器都要编写代码，倒不需要写具体的加密解密算法，而是需要在客户端指定哪些请求、哪些数据要加密，而在云端要校验客户端是否指定了正确的条件。

具体写法如下：

### 客户端请求云函数

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

也就是每个callFunction请求，都可以指定是否加密，以及是对上行数据还是下行数据加密。

**注意**

- 安全网络相关接口不支持本地调试。即使在HBuilderX里面勾选连接本地云函数，客户端在请求时也会自动连接云端云函数。

### 客户端请求云对象

客户端通过importObject调用云对象时，通过secretMethods参数来配置每个方法调用时是否加密。

```js
uniCloud.importObject('object-name', {
  secretMethods: {'login':'both'} // 对login方法设置为上下行的数据均要加密。也支持配置所有方法设置加密，参见下面的 secretMethods 说明
})
```

也就是云对象导入时配置某个方法的请求是否要加密，以及是对上行数据还是下行数据加密。那么在客户端调用云对象的相应方法时会自动按这个配置执行。

### clientDB

暂不支持

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

## 错误码

|错误码									|说明											|平台				|
|---										|---											|---				|
|ACCOUNT_NOT_EXISTS			|用户账号不存在						|微信小程序	|
|OPENID_NOT_FOUND				|用户表记录内openid未找到	|微信小程序	|
|GET_ENCRYPT_KEY_FAILED	|获取加密key失败					|微信小程序	|

微信小程序加解密时还会使用uni-id-common的checkToken方法，相关错误码参考：[uni-id错误码](uni-id-summary.md#errcode)

## 小贴士

1. 安全是相对的，没有绝对的安全。uni云端一体安全网络只是帮助普通开发者达到了业内一流的安全水准。
2. 安全涉及的范围很广，除了安全网络包含的范围外，还有账户密码、云端各种key和secret，都要保护好。很多安全事故是程序员误把关键key提交到github等代码托管平台。
3. 安全是有代价的，加密的数据越庞大，加密和解密的耗时越长。
4. 开启安全网络后，如果觉的联网速度变慢，一方面要开启redis，并在云函数中挂载redis扩展库；另一方面控制加密的数据量，没必要加密的数据就别加密。
