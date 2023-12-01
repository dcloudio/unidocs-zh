# uni-open-bridge

开发者对接微信等三方开放平台时，这些开放平台有众多的凭据需要管理，比如`access_token`、`session_key`、`encrypt_key`、`ticket`等。

`uni-open-bridge` 是一个统一管理微信等三方平台认证凭据的开源工具。

## 背景

调用微信等三方开放平台时，涉及众多凭据。

- 微信公众号h5、小程序、app、web各自都有若干凭据
- 有的是应用级凭据、有的是用户级凭据、有的是一次性凭据
- 有的从微信后台web界面复制，有的向微信服务器请求获得，有的需要先在客户端发起然后服务器再请求
- 有的凭据没有有效期，有的是临时凭据，会在一定时间或一定操作后失效，不同凭据的失效时间还不一样
- 有的凭据不能一直向微信服务器请求，有次数限制，需要自己缓存下来

这里面容易搞混和出错的地方非常多。假使在不同的业务逻辑中都向微信服务器请求凭据，必然会冲突。

比如，
1. `ticket` 的有效期为7200秒，需要定时请求，避免过期。并且由于获取 `ticket` 的 api 调用次数非常有限，频繁刷新 `ticket` 会导致 api 调用受限，影响自身业务，开发者必须在自己的服务全局缓存 `ticket `
2. 在客户端任意地方调用 `wx.login()` 后，会让上一个 `session_key` 立即过期
3. 关于`access_token`，微信官方文档直接建议公众号开发者使用中控服务器统一获取和刷新 `access_token`，其他业务逻辑服务器所使用的 `access_token` 均来自于该中控服务器，不应该各自去微信服务器刷新，否则容易造成冲突。

所以需要在一个中央系统来统一管理这些凭据，需要定时请求的凭据则由中央系统定时统一请求微信服务器，保存到数据库。

然后各个业务需要这些凭据时，从这个中央系统的接口中获取，而不是自己向微信服务器请求。

这个中央系统就是`uni-open-bridge`。

## 系统组成

`uni-open-bridge` 包括：
1. 一个同名云对象 `uni-open-bridge`，插件下载地址：[https://ext.dcloud.net.cn/plugin?id=9002](https://ext.dcloud.net.cn/plugin?id=9002)。（其依赖了下面的公共模块，但不是一个插件）
2. 一个公共模块 `uni-open-bridge-common` ，插件下载地址：[https://ext.dcloud.net.cn/plugin?id=9177](https://ext.dcloud.net.cn/plugin?id=9177)。它独立为单独插件，是为了方便其他业务模块引用。事实上uni-id就引用了这个common插件。
3. 配套的数据库，保存这些凭据，表名为 [opendb-open-data](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-open-data/collection.json)。在redis中的key格式为 `uni-id:[dcloudAppid]:[platform]:[openid]:[access-token|user-access-token|session-key|encrypt-key-version|ticket]`

云对象`uni-open-bridge`默认是定时运行的，在package.json中配置了每小时定时运行一次（部署到线上服务空间后生效）。

该云对象根据在 `uni-config-center` 中[配置](#uni-id-config)固定凭据，从而有权定时向微信服务器发请求，将获取到的 `access_token`或`ticket` 保存到数据库 `opendb-open-data` 表中。

当所在服务空间开通redis时，还会缓存在redis的key。这会让系统性能更好。

云对象`uni-open-bridge`还提供了URL化能力，以方便外部系统读写这些凭据。

[uni-open-bridge-common](#uni-open-bridge-common) 提供了操作微信等三方平台凭据的底层接口，包括访问微信服务器和多层读写Redis、数据库的能力。

云对象`uni-open-bridge`访问微信服务器和读写凭据时其实也是依赖 [uni-open-bridge-common](#uni-open-bridge-common)公共模块。安装 `uni-open-bridge` 云对象插件时会自动安装依赖插件 [uni-open-bridge-common](#uni-open-bridge-common)

从微信获取到各种凭据后，当各个业务代码需要这些凭据时，通过如下方式获取。

- 云函数/云对象获取这些临时凭据，可引用公共模块 `uni-open-bridge-common` ，通过该模块的API获取，比如getAccessToken。[见下](#uni-open-bridge-common)
- 非uniCloud系统，比如传统云，获取这些凭据，需要将云对象`uni-open-bridge`进行URL化，通过Http方式请求凭据。[见下](#http)


流程图如下：

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-open-bridge.png)

## 凭据介绍

### 凭据汇总

微信有公众号h5、小程序、App、web等4种平台，每个平台都有若干凭据。

微信提供了2个体系，公众平台和开放平台。
- 公众平台，[https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)，负责微信内的能力开放，即微信公众号H5和小程序，这2个都运行在微信内部。
- 开放平台，[https://open.weixin.qq.com/](https://open.weixin.qq.com/)，负责微信外的系统来使用微信能力，即外部App和外部web站，这些外部应用来调用微信登录、微信支付等能力。

|凭据									|微信小程序				|微信公众号H5	|微信外的web站	|非微信的App|
|:-:									|:-:					|:-:			|:-:			|:-:		|
|[access_token](#access_token)			|定时刷新				|定时刷新		|开发者操作		|开发者操作	|
|[user_access_token](#user_access_token)|-					|开发者操作		|-				|-			|
|[session_key](#session_key)			|uni-id维护或开发者操作	|-				|-				|-			|
|[encrypt_key](#encrypt_key)			|[uni云端一体安全网络](secret-net)或开发者操作				|-				|-				|-			|
|[ticket](#ticket)						|-						|定时刷新		|-				|-			|

- `定时刷新`：指由云对象 `uni-open-bridge` 的定时任务触发，自动从微信服务器获取凭据，通过调用 `uni-open-bridge-common` 写入到Redis或数据库
- `开发者操作`：指由开发者引入公共模块 `uni-open-bridge-common`，调用相关读写[方法](#uni-open-bridge-common)

- `session_key`： 如果使用了uni-id，则uni-id用户登陆时会自动读写该凭据。一般无需开发者维护。
- `encrypt_key` 依赖 `access_token`、`session_key`，如果依赖的值已存在，可直接读取 `encrypt_key`，如果不存在自动向微信服务器获取、开发者应该仅读取该值，如果使用了[uni云端一体安全网络](secret-net)由其维护，如果有不使用 `uni-open-bridge` 托管的[情况](#nouseuniopenbridge)，则有外部系统操作
- `ticket` 依赖 `access_token`，直接获取 `ticket` 会检查 `access_token`，如果不存在默认先请求微信服务器获取并保存，继续请求 `ticket`

还有一些不常用的凭据暂不列出，例如：非微信的App平台的 access_token。

### 平台标记Platform@platform

`uni-open-bridge`中将不同平台命名如下表，在API和存储数据时都使用下表标记。注意不同于前端条件编译使用的uniPlatform。

|值					|描述				|
|:-:				|:-:				|
|weixin-mp	|微信小程序	|
|weixin-h5	|微信公众号H5	|
|weixin-web	|微信外的Web站	|
|weixin-app	|非微信的App		|
|qq-mp			|QQ小程序	|
|qq-app			|QQ外的App			|

提示：自动刷新固定应用级凭据目前仅支持 `weixin-mp`、`weixin-h5`。 后续补充其他平台

### 常见凭据用途

- 微信小程序

1. 客户端登陆需要保存 [session_key](#session_key)
2. 解密用户敏感数据需要 [access_token](#access_token)、[session_key](#session_key)，例如：获取用户授权的手机号、用户敏感资料
3. 解密[uni云端一体安全网络](secret-net)通道使用的加密数据需要 [access_token](#access_token)、[session_key](#session_key) 、[encrypt_key](#encrypt_key)

- 微信公众号

1. 微信内公众号H5页面用户登陆需要用到 [user_access_token](#user_access_token)、[ticket](#ticket)

微信凭据分应用级、用户级、一次性等凭据，如果你之前未接触过微信这些凭据，请务必阅读下面的**每个凭据的详细介绍**

### access_token(应用级)@access_token

- 微信小程序 `access_token` 是微信小程序全局唯一后台接口调用凭据，调用绝大多数后台接口时都需使用。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/backend-api.html#access_token)

- 微信公众号H5 `access_token` 是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用 `access_token`。开发者需要进行妥善保存。`access_token` 的存储至少要保留512个字符空间。`access_token` 的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的 `access_token` 失效。

**注意：微信公众号H5`access_token`的获取需要固定IP，需将IP白名单填入到微信公众平台。uniCloud中默认没有固定IP，获取固定IP需另见文档[固定IP](cf-functions.md#eip)**

公众平台的 API 调用所需的 `access_token` 的使用及生成方式说明：

1、建议公众号开发者使用中控服务器统一获取和刷新 `access_token`，其他业务逻辑服务器所使用的 `access_token` 均来自于该中控服务器，不应该各自去微信服务器刷新，否则容易造成冲突，导致 `access_token` 覆盖而影响业务；

2、目前`access_token` 的有效期通过返回的expires_in来传达，目前是7200秒之内的值。中控服务器需要根据这个有效时间提前去刷新新 `access_token`。在刷新过程中，中控服务器可对外继续输出的老 `access_token`，此时公众平台后台会保证在5分钟内，新老 `access_token` 都可用，这保证了第三方业务的平滑过渡；

3、`access_token` 的有效时间可能会在未来有调整，所以中控服务器不仅需要内部定时主动刷新，还需要提供被动刷新 `access_token` 的接口，这样便于业务服务器在 API 调用获知 `access_token` 已超时的情况下，可以触发 `access_token` 的刷新流程。

4、对于可能存在风险的调用，在开发者进行获取 `access_token` 调用时进入风险调用确认流程，需要用户管理员确认后才可以成功获取。具体流程为：

开发者通过某 IP 发起调用->平台返回错误码[89503]并同时下发模板消息给公众号管理员->公众号管理员确认该 IP 可以调用->开发者使用该 IP 再次发起调用->调用成功。

如公众号管理员第一次拒绝该 IP 调用，用户在1个小时内将无法使用该 IP 再次发起调用，如公众号管理员多次拒绝该 IP 调用，该 IP 将可能长期无法发起调用。平台建议开发者在发起调用前主动与管理员沟通确认调用需求，或请求管理员开启 IP 白名单功能并将该 IP 加入 IP 白名单列表。

### user_access_token(用户级)@user_access_token

微信公众号H5平台有两个相同名字 `access_token`，分别用于

1、应用级：公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用 `access_token`。
2、用户级：网页授权接口调用凭证，用户授权的作用域 `access_token`。

众多凭据命名都叫`access_token`，无法有效区分。对于用户级的`access_token`，**在 uni-open-bridge 中改名为** `user_access_token` 。它对应微信公众平台网页用户授权 `access_token`

|平台							|值						|描述																																																													|
|:-:							|:-:					|:-:																																																													|
|微信公众号H5	|access_token	|微信公众号H5用户会话密钥。[详情](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)	|


### code(临时凭据)@code

微信小程序用户登录凭证校验

在客户端通过调用 `uni.login()` 获得临时登录凭证 `code` 后传到开发者服务器在请求微信服务器获得 `session_key`、`openid`、`unionid`

`code` 仅可在服务器使用一次，客户端调用频率限制每个用户每分钟100次。

所以`uni-open-bridge`中并没有持续化存储code。

### openid(用户级)@openid

微信小程序用户唯一标识

需要在开发者服务器请求微信服务器获得，依赖参数 code，[详情](#code)

`uni-open-bridge`中并没有持续化存储openid，相关读写和保存是交由另一个插件`uni-id`来负责的。

可通过 `uni-id-co` 获取，[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#save-user-token)

### session_key(用户级)@session_key

平台对应的值

|平台				|值					|描述																																																								|
|:-:				|:-:				|:-:																																																								|
|微信小程序	|session_key|微信小程序会话密钥。[详情](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html)	|

会话密钥 `session_key` 有效性

开发者如果遇到因为 `session_key` 不正确而校验签名失败或解密失败，请关注下面几个与 `session_key` 有关的注意事项。

`uni.login` 调用时，用户的 `session_key` 可能会被更新而致使旧 `session_key` 失效（刷新机制存在最短周期，如果同一个用户短时间内多次调用 `uni.login`，并非每次调用都导致 `session_key` 刷新）。

开发者应该在明确需要重新登录时才调用 `uni.login`，及时通过 `code2Session` 接口更新服务器存储的 `session_key`。

微信不会把 `session_key` 的有效期告知开发者，会根据用户使用小程序的行为对 `session_key` 进行续期。用户越频繁使用小程序，`session_key` 有效期越长。

开发者在 `session_key` 失效时，可以通过重新执行登录流程获取有效的 `session_key`。使用接口 [uni.checkSession](https://uniapp.dcloud.net.cn/api/plugins/login.html#uni-checksession) 可以校验 `session_key` 是否有效，从而避免小程序反复执行登录流程。

当开发者在实现自定义登录态时，可以考虑以 `session_key` 有效期作为自身登录态有效期，也可以实现自定义的时效性策略。

### encrypt_key(用户级)@encrypt_key

为了避免微信小程序与开发者后台通信时数据被截取和篡改，微信侧维护了一个用户维度的可靠key，用于小程序和后台通信时进行加密和签名。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/user-encryptkey.html)

开发者可以分别通过小程序前端和微信后台提供的接口，获取用户的加密 key。

### ticket(用户级)@ticket

`ticket` 是微信公众号用于调用微信 JS 接口的临时票据。正常情况下，`ticket` 的有效期为7200秒，通过 `access_token` 来获取。

由于获取 `ticket` 的 api 调用次数非常有限，频繁刷新 `ticket` 会导致 api 调用受限，影响自身业务，开发者必须在自己的服务全局缓存 `ticket `。[详情](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62)

而在`uni-open-bridge`已经缓存了该凭据。

## uni-open-bridge的使用流程

### 1. **下载插件[uni-open-bridge](https://ext.dcloud.net.cn/plugin?id=9002)到项目中。

### 2. `uni-config-center`的 `uni-id` 下配置固定凭据

如果你没有`appid` 和 `secret` ，需要先向微信申请
- 微信小程序或微信公众号，向微信的[公众平台](https://mp.weixin.qq.com/)申请 `appid` 和 `secret` 固定凭据。
- 微信App或PC网页，向微信的[开放平台](https://open.weixin.qq.com/)申请 `appid` 和 `secret` 固定凭据。

然后在项目的 uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json 文件中配置

如果不需要定时刷新 `access_token`、`ticket`、也不需要通过外部系统访问凭据时可单独引入 [uni-open-bridge-common](#uni-open-bridge-common)，然后在云函数或云对象中直接调用相关方法

**uni-id-config中uni-id示例代码**

```json
// uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json
{
  "dcloudAppid": "__UNI__xxxxxx", // 在项目的 manifest.json 中
  "mp-weixin": { // 微信小程序
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
      "weixin-h5": { //微信公众号h5
        "appid": "", // 微信公众平台申请的网页授权 appid
        "appsecret": "" // 微信公众平台申请的网页授权 secret
      }
    }
  }
}
```

- 在 `weixin-mp`、`weixin-h5` 平台，通过调用 [uni-open-bridge-common](#uni-open-bridge-common) 的get相关方法可自动从微信服务器获取 [access_token](#access_token)、[encrypt_key](#encrypt_key)、[ticket](#ticket) 时需要用到配置文件中的 `appid`、`appsecret`
- 暂时不需要配置 `weixin-web`、`weixin-app`、`qq-mp`、`qq-app`，后续支持这些平台时需要再次补充配置，但仍然可通过调用 [uni-open-bridge-common](#uni-open-bridge-common) 的方法传入设置值


注意：拷贝此文件内容时需要移除 `注释`。标准json不支持注释。在HBuilderX中可用多选//来批量移除注释。

### 3. `uni-config-center`下配置`uni-open-bridge`@uniopenbridgeconfig

在`uni-config-center`目录下新建子目录`uni-open-bridge`, 新增 `config.json`，配置 dcloudAppid ，详情见下面的示例代码

**uni-id-config中uni-open-bridge示例代码**

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
  "ipWhiteList": ["0.0.0.0"] // 用于 URL化后 http 调用的服务器IP白名单，即指定ip的服务器才可以访问URL化后的`uni-open-bridge云对象
}
```

注意：拷贝此文件内容时需要移除 `注释`。标准json不支持注释。在HBuilderX中可用多选//来批量移除注释。

### 4. 将插件上传到服务空间

云对象`uni-open-bridge`上传到服务空间后，会每隔一个小时自动运行一次，从微信服务器获取相关凭据并保存到数据库。

在数据库`opendb-open-data`中会看到数据。如开通redis则在redis的`uni-id`分组中查看（推荐开通redis以获取更好的性能）。

如果异常，请在 [uniCloud Web控制台](https://unicloud.dcloud.net.cn/)，找到云函数/云对象 `uni-open-bridge` 检查运行日志。很可能是第一步或第二步的配置出错了。

当然如果不需要定时任务，可以修改云对象package.json里的定时任务配置并重新上传。或在uniCloud web控制台修改定时任务。一般不推荐修改定时任务设置。

**注意**

如需获取微信公众号H5平台的`access_token`，需要处理服务空间的固定出口IP问题。因为需将IP白名单填入到微信公众平台，然后才能在从微信服务器拿到该凭据。uniCloud中默认没有固定IP，获取固定IP需另见文档[固定IP](cf-functions.md#eip)

## 业务系统获取相关凭据的方法

在`uni-open-bridge`云对象获取到相关凭据后，当业务系统（比如登录支付或其他业务）需要使用这些凭据时，通过以下方式获取。

### 云函数公共模块方式@uni-open-bridge-common

当你的业务在uniCloud上时，在你的业务云函数/云对象中引用公共模块`uni-open-bridge-common`，然后调用下面的API。

> `云函数公共模块`是不同云函数共享代码的一种方式。如果你不了解什么是`云函数公共模块`，请另读文档[公共模块](https://uniapp.dcloud.io/uniCloud/cf-common)

`uni-open-bridge-common` 公共模块，提供了 [access_token](#access_token)、[user_access_token](#user_access_token)、[session_key](#session_key)、[encrypt_key](#encrypt_key)、[ticket](#ticket) 的读取、写入、删除操作。

`uni-open-bridge-common` 支持多层 读取 / 写入 机制，`redis -> database -> fallback`，优先级如下:

如果用户没有开通 `redis` 或者操作失败，透传到 `database`，`database` 失败后，如果用户配置了 `fallback`，继续调用 `fallback` 方法，否则抛出 `Error`，`database` 对应的表为: `opendb-open-data`

在常见的情况下，在你的云函数/云对象中调用`uni-open-bridge-common`的几个get方法即可。

```js
let uobc = require('uni-open-bridge-common')

// 应用级凭据
const key = {
  dcloudAppid: '__UNI__xxx', // DCloud Appid
  platform: 'weixin-mp' // 指定凭据所属平台，解释见上
}
uobc.getAccessToken(key)
uobc.getTicket(key)


// 用户级凭据，需要同时传入 openid 才能获得
const userKey = {
  dcloudAppid: '__UNI__xxx', // DCloud Appid
  platform: 'weixin-mp', // 指定凭据所属平台，解释见上
  openid: '' // 用户唯一标识，解释见上
}
uobc.getUserAccessToken(userKey)
uobc.getSessionKey(userKey)
uobc.getEncryptKey(userKey)

```

除了上述常见方法，下文列出了所有凭据的get、set、remove方法。

#### getAccessToken(key: Object, fallback: Function)

读取 access_token

#### setAccessToken(key: Object, value: Object, expiresIn: Number)

写入 access_token。开发者一般只需使用get类方法，用不到set、remove类方法。下同

#### removeAccessToken(key: Object)

删除 access_token。开发者一般只需使用get类方法，用不到set、remove类方法。下同


**key 属性**

|参数				|类型			|必填	|描述																															|
|:-:				|:-:			|:-:	|:-:																															|
|dcloudAppid|String		|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|platform		|String		|是		|[详情](#platform)																								|

**value 属性**

|参数					|类型		|描述									|
|:-:					|:-:		|:-:									|
|access_token	|String	|[详情](#access_token)|

**expiresIn**

有效时间(秒)


**示例代码**

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

#### getUserAccessToken(key: Object, fallback: Function)

读取 `user_access_token`

#### setUserAccessToken(key: Object, value: Object, expiresIn: Number)

写入 `user_access_token`

#### removeUserAccessToken(key: Object)

删除 `user_access_token`


对应微信公众平台网页用户授权 `access_token`，详情见下文说明


**key 属性**

|参数				|类型		|必填	|描述																															|
|:-:				|:-:		|:-:	|:-:																															|
|dcloudAppid|String	|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|platform		|String	|是		|[详情](#platform)																								|
|openid			|String	|是		|[详情](#openid)																									|

**value 属性**

|参数					|类型		|描述																									|
|:-:					|:-:		|:-:																									|
|access_token	|String	|微信公众平台用户会话密钥，[详情](#user_access_token)	|

**expiresIn**

有效时间(秒)

**示例代码**

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
  await setUserAccessToken(key, value, expiresIn)

  // 读取 (redis / 数据库)
  let result1 = await getUserAccessToken(key)

  // 删除
  await removeUserAccessToken(key)


  // 删除后读取, 返回 null
  let result2 = await getUserAccessToken(key)
  console.log(result2) // null

  return null
};
```


#### getSessionKey(key: Object, fallback: Function)

读取 session_key

#### setSessionKey(key: Object, value: Object, expiresIn: Number)

写入 session_key

#### removeSessionKey(key: Object)

删除 session_key


**key 属性**

|参数				|类型		|必填	|描述																															|
|:-:				|:-:		|:-:	|:-:																															|
|dcloudAppid|String	|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|platform		|String	|是		|[详情](#platform)																								|
|openid			|String	|是		|[详情](#openid)																									|

**value 属性**

|参数				|类型		|描述																			|
|:-:				|:-:		|:-:																			|
|session_key|String	|微信小程序会话密钥，[详情](#session_key)	|

**expiresIn**

有效时间(秒)


**示例代码**

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
  await setSessionKey(key, value, expiresIn)

  // 读取 (redis / 数据库)
  let result1 = await getSessionKey(key)

  // 删除
  await removeSessionKey(key)


  // 删除后读取, 返回 null
  let result2 = await getSessionKey(key)
  console.log(result2) // null

  return null
};
```


#### getEncryptKey(key: Object, fallback: Function)

读取 encrypt_key

#### setEncryptKey(key: Object, value: Object, expiresIn: Number)

写入 encrypt_key

#### removeEncryptKey(key: Object)

删除 encrypt_key


**key 属性**

|参数				|类型		|必填	|描述																															|
|:-:				|:-:		|:-:	|:-:																															|
|dcloudAppid|String	|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|platform		|String	|是		|[详情](#platform)																								|
|openid			|String	|是		|[详情](#openid)																									|
|version		|Number	|是		|版本																															|


**value 属性**

|参数				|类型		|描述														|
|:-:				|:-:		|:-:														|
|encrypt_key|String	|加密 key，[详情](#encrypt_key)	|
|iv					|String	|加密 iv												|

**expiresIn**

有效时间(秒)


**示例代码**

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


#### getTicket(key: Object, fallback: Function)

读取 ticket

#### setTicket(key: Object, value: Object, expiresIn: Number)

写入 ticket

#### removeTicket(key: Object)

删除 ticket


**key 属性**

|参数				|类型			|必填	|描述																															|
|:-:				|:-:			|:-:	|:-:																															|
|dcloudAppid|String		|是		|DCloud应用appid。[详情](https://ask.dcloud.net.cn/article/35907)	|
|platform		|String		|是		|[详情](#platform)																								|

**value 属性**

|参数				|类型		|描述			|
|:-:				|:-:		|:-:			|
|ticket			|String	|[详情](#ticket)					|

**expiresIn**

有效时间(秒)


**示例代码**

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



#### fallback

可选 `async function fallback()`，当 `reids -> database` 都找不到对应 `key` 时，调用此方法，需要返回数据格式如下

```json
{
  value: null,
  duration: 1
}
```

为了简化调用 `getAccessToken()`、`getTicket()` 已内置 `fallback` 到微信的服务器，需要在 `config-center` 中配置 `appid` `appsecret`，[详情](#uni-id-config)

#### 注意事项

- 所有方法类型为 `async`，需要使用 `await`
- 所有方法校验 `key` 属性是否有效，无效则 `throw new Error()`，对 `value` 仅校验是否为 `Object`


### 云对象URL化方式@cloudurl

云对象 `uni-open-bridge` URL化后，非uniCloud系统可通过 http 方式访问凭据。

[URL化](http.md)，是一种让云函数或云对象暴露为Http接口的方式，[详见](http.md)。可以在 [uniCloud Web控制台](https://unicloud.dcloud.net.cn/) 操作。

通过以下2种方式验证外部服务器与uniCloud安全通讯

1. [uni-cloud-s2s](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-s2s.html)模块
2. 配置外部服务器IP白名单字段 `ipWhiteList`，参见 `config.json`

配置URL化后，其他系统可以通过下面的http接口，读写删各种开放平台凭据。

请求类型 `POST`

#### getAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/getAccessToken
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-mp"
}
```

其中参数platform值域[详见](#platform)。下同，不再复述。

#### setAccessToken

如果各种开放平台凭据由`uni-open-bridge`托管，那么只需要调用各种get方法，是用不到set等方法的。但在某些情况下，相关凭据没有由`uni-open-bridge`从微信服务器获取，就需要这些set方法了。[详见](#nouseuniopenbridge)

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setAccessToken
```

参数

由外部系统从微信获取到相关凭据，然后写入。[详见](#nouseuniopenbridge)

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

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-h5",
  "openid": ""
}
```

其中参数openid值域[详见](#openid)。下同，不再复述。

#### setUserAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setUserAccessToken
```

参数

由外部系统从微信获取到相关凭据，然后写入。[详见](#nouseuniopenbridge)

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

由外部系统从微信获取到相关凭据，然后写入。[详见](#nouseuniopenbridge)

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-mp",
  "openid": "",
  "value": {
    "session_key": ""
  },
  "expiresIn": -1
}
```

默认值 `"expiresIn": -1` 为永不过期

由于微信的设计并没有告知开发者最短有效期，且只能通过客户的 `uni.checkSession()` 检查是否过期，过期后通知服务器同步到 uni-open-bridge


#### removeSessionKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/removeSessionKey
```

参数

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

由外部系统从微信获取到相关凭据，然后写入。[详见](#nouseuniopenbridge)

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

由外部系统从微信获取到相关凭据，然后写入。[详见](#nouseuniopenbridge)

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

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "weixin-h5"
}
```


提示：上面 Url 中的 `uni-open-bridge` 指云函数 uni-open-bridge 开启 Url 化时配置的 path 名称


## 不使用 `uni-open-bridge` 托管的情况@nouseuniopenbridge

如开发者的老业务里已经获取了微信的access_token等凭据，难以迁移到由`uni-open-bridge`来托管微信相关凭据。

那么`uni-open-bridge`也暴露了允许三方系统给`uni-open-bridge`写入微信相关凭据的接口。

因为其他插件会依赖`uni-open-bridge`，比如：
1. `uni-ad`微信小程序激励视频广告服务器回调
2. uni云端一体安全网络

如果`uni-open-bridge`里没有相关凭据，上述插件或功能就无法使用。

因此，开发者即不想改成由`uni-open-bridge`托管微信凭据，又需要使用上述依赖`uni-open-bridge`的功能或插件，就只能将老系统获取到的相关凭据写入到`uni-open-bridge`中。

此时，开发者需通过以下方式处理：

1. 取消`uni-open-bridge`云对象的定时任务，不再定时向微信服务器请求凭据

在`uni-open-bridge`云对象的package.json中找到定时器节点`triggers`，删除该节点。本地修改package.json后需重新上传到服务空间方生效。

参考[定时任务配置](cf-functions.md#packagejson))。

2. 老系统从微信服务器获取到相关凭据后调用`uni-open-bridge`的set方法写入凭据

先将云对象`uni-open-bridge`进行URL化，暴露出http接口。然后老系统调用setAccessToken、setUserAccessToken、setSessionKey、setEncryptKey、setTicket等接口。[参考](#cloudurl)
