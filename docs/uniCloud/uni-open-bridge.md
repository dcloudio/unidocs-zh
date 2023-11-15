# uni-open-bridge

开发者对接微信等三方开放平台时，这些开放平台有众多的凭据需要管理，比如`access_token`、`session_key`、`encrypt_key`、`ticket`等。
When developers connect to third-party open platforms such as WeChat, these open platforms have many credentials to manage, such as `access_token`, `session_key`, `encrypt_key`, `ticket`, etc.

`uni-open-bridge` 是一个统一管理微信等三方平台认证凭据的开源工具。
`uni-open-bridge` is an open source tool for unified management of authentication credentials for third-party platforms such as WeChat.

## 背景
## background

调用微信等三方开放平台时，涉及众多凭据。
When calling a third-party open platform such as WeChat, many credentials are involved.

- 微信公众号h5、小程序、app、web各自都有若干凭据
- WeChat official account h5, applet, app, and web each have certain credentials
- 有的是应用级凭据、有的是用户级凭据、有的是一次性凭据
- Some are application-level credentials, some are user-level credentials, some are one-time credentials
- 有的从微信后台web界面复制，有的向微信服务器请求获得，有的需要先在客户端发起然后服务器再请求
- Some are copied from the WeChat backend web interface, some are obtained by request from the WeChat server, and some need to be initiated on the client side and then requested by the server
- 有的凭据没有有效期，有的是临时凭据，会在一定时间或一定操作后失效，不同凭据的失效时间还不一样
- Some credentials have no validity period, and some are temporary credentials, which will expire after a certain period of time or after a certain operation. The expiration time of different credentials is different.
- 有的凭据不能一直向微信服务器请求，有次数限制，需要自己缓存下来
- Some credentials cannot be requested to the WeChat server all the time, there are limited times, and you need to cache them yourself

这里面容易搞混和出错的地方非常多。假使在不同的业务逻辑中都向微信服务器请求凭据，必然会冲突。
There is a lot of confusion and error here. If credentials are requested from the WeChat server in different business logics, there will inevitably be conflicts.

比如，
for example,
1. `ticket` 的有效期为7200秒，需要定时请求，避免过期。并且由于获取 `ticket` 的 api 调用次数非常有限，频繁刷新 `ticket` 会导致 api 调用受限，影响自身业务，开发者必须在自己的服务全局缓存 `ticket `
1. The validity period of `ticket` is 7200 seconds, and it needs to be requested regularly to avoid expiration. And because the number of api calls to obtain `ticket` is very limited, frequent refresh of `ticket` will limit api calls and affect their own business. Developers must cache `ticket ` globally in their own services
2. 在客户端任意地方调用 `wx.login()` 后，会让上一个 `session_key` 立即过期
2. After calling `wx.login()` anywhere on the client, the previous `session_key` will expire immediately
3. 关于`access_token`，微信官方文档直接建议公众号开发者使用中控服务器统一获取和刷新 `access_token`，其他业务逻辑服务器所使用的 `access_token` 均来自于该中控服务器，不应该各自去微信服务器刷新，否则容易造成冲突。
3. Regarding `access_token`, the official WeChat document directly recommends that developers of official accounts use the central control server to uniformly obtain and refresh `access_token`. The WeChat server is refreshed, otherwise it is easy to cause conflicts.

所以需要在一个中央系统来统一管理这些凭据，需要定时请求的凭据则由中央系统定时统一请求微信服务器，保存到数据库。
Therefore, these credentials need to be managed uniformly in a central system. Credentials that need to be regularly requested are regularly requested by the central system to the WeChat server and saved to the database.

然后各个业务需要这些凭据时，从这个中央系统的接口中获取，而不是自己向微信服务器请求。
Then, when each business needs these credentials, it is obtained from the interface of this central system instead of requesting it from the WeChat server.

这个中央系统就是`uni-open-bridge`。
This central system is `uni-open-bridge`.

## 系统组成
## System composition

`uni-open-bridge` 包括：
`uni-open-bridge` includes:
1. 一个同名云对象 `uni-open-bridge`，插件下载地址：[https://ext.dcloud.net.cn/plugin?id=9002](https://ext.dcloud.net.cn/plugin?id=9002)。（其依赖了下面的公共模块，但不是一个插件）
1. A cloud object with the same name `uni-open-bridge`, the plugin download address: [https://ext.dcloud.net.cn/plugin?id=9002](https://ext.dcloud.net.cn/ plugin?id=9002). (which depends on the public module below, but is not a plugin)
2. 一个公共模块 `uni-open-bridge-common` ，插件下载地址：[https://ext.dcloud.net.cn/plugin?id=9177](https://ext.dcloud.net.cn/plugin?id=9177)。它独立为单独插件，是为了方便其他业务模块引用。事实上uni-id就引用了这个common插件。
2. A public module `uni-open-bridge-common`, plugin download address: [https://ext.dcloud.net.cn/plugin?id=9177](https://ext.dcloud.net.cn /plugin?id=9177). It is an independent plug-in for the convenience of reference by other business modules. In fact, uni-id refers to this common plugin.
3. 配套的数据库，保存这些凭据，表名为 [opendb-open-data](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-open-data/collection.json)。在redis中的key格式为 `uni-id:[dcloudAppid]:[platform]:[openid]:[access-token|user-access-token|session-key|encrypt-key-version|ticket]`
3. The supporting database, save these credentials, the table name is [opendb-open-data](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-open-data/collection.json). The key format in redis is `uni-id:[dcloudAppid]:[platform]:[openid]:[access-token|user-access-token|session-key|encrypt-key-version|ticket]`

云对象`uni-open-bridge`默认是定时运行的，在package.json中配置了每小时定时运行一次（部署到线上服务空间后生效）。
The cloud object `uni-open-bridge` runs regularly by default, and is configured to run every hour in package.json (it will take effect after it is deployed to the online service space).

该云对象根据在 `uni-config-center` 中[配置](#uni-id-config)固定凭据，从而有权定时向微信服务器发请求，将获取到的 `access_token`或`ticket` 保存到数据库 `opendb-open-data` 表中。
The cloud object has the right to periodically send requests to the WeChat server according to the [configuration](#uni-id-config) fixed credentials in `uni-config-center`, and save the obtained `access_token` or `ticket` to Database `opendb-open-data` table.

当所在服务空间开通redis时，还会缓存在redis的key。这会让系统性能更好。
When redis is activated in the service space where it is located, the key of redis will also be cached. This will make the system perform better.

云对象`uni-open-bridge`还提供了URL化能力，以方便外部系统读写这些凭据。
The cloud object `uni-open-bridge` also provides URLization capabilities to facilitate reading and writing of these credentials by external systems.

[uni-open-bridge-common](#uni-open-bridge-common) 提供了操作微信等三方平台凭据的底层接口，包括访问微信服务器和多层读写Redis、数据库的能力。
[uni-open-bridge-common](#uni-open-bridge-common) provides the underlying interface for operating WeChat and other third-party platform credentials, including the ability to access WeChat servers and multi-layer read and write Redis and databases.

云对象`uni-open-bridge`访问微信服务器和读写凭据时其实也是依赖 [uni-open-bridge-common](#uni-open-bridge-common)公共模块。安装 `uni-open-bridge` 云对象插件时会自动安装依赖插件 [uni-open-bridge-common](#uni-open-bridge-common)
The cloud object `uni-open-bridge` actually relies on the [uni-open-bridge-common](#uni-open-bridge-common) public module when accessing the WeChat server and reading and writing credentials. Dependency plugins are automatically installed when installing the `uni-open-bridge` cloud object plugin [uni-open-bridge-common](#uni-open-bridge-common)

从微信获取到各种凭据后，当各个业务代码需要这些凭据时，通过如下方式获取。
After obtaining various credentials from WeChat, when each business code needs these credentials, obtain them in the following way.

- 云函数/云对象获取这些临时凭据，可引用公共模块 `uni-open-bridge-common` ，通过该模块的API获取，比如getAccessToken。[见下](#uni-open-bridge-common)
- To obtain these temporary credentials from cloud functions/cloud objects, you can refer to the public module `uni-open-bridge-common` and obtain them through the module's API, such as getAccessToken. [see below](#uni-open-bridge-common)
- 非uniCloud系统，比如传统云，获取这些凭据，需要将云对象`uni-open-bridge`进行URL化，通过Http方式请求凭据。[见下](#http)
- For non-uniCloud systems, such as traditional cloud, to obtain these credentials, you need to URLize the cloud object `uni-open-bridge` and request credentials through Http. [see below](#http)


流程图如下：
The flow chart is as follows:

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-open-bridge.png)

## 凭据介绍
## Credential introduction

### 凭据汇总
### Credentials Summary

微信有公众号h5、小程序、App、web等4种平台，每个平台都有若干凭据。
WeChat has 4 platforms including official account h5, mini program, app, and web, and each platform has several credentials.

微信提供了2个体系，公众平台和开放平台。
WeChat provides two systems, the public platform and the open platform.
- 公众平台，[https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)，负责微信内的能力开放，即微信公众号H5和小程序，这2个都运行在微信内部。
- The public platform, [https://mp.weixin.qq.com/](https://mp.weixin.qq.com/), is responsible for the capability opening in WeChat, namely WeChat official account H5 and mini programs, which Both run inside WeChat.
- 开放平台，[https://open.weixin.qq.com/](https://open.weixin.qq.com/)，负责微信外的系统来使用微信能力，即外部App和外部web站，这些外部应用来调用微信登录、微信支付等能力。
- Open platform, [https://open.weixin.qq.com/](https://open.weixin.qq.com/), responsible for the use of WeChat capabilities by systems other than WeChat, namely external apps and external web sites , these external applications call WeChat login, WeChat payment and other capabilities.

|凭据									|微信小程序				|微信公众号H5	|微信外的web站	|非微信的App|
|Credentials |WeChat Mini Programs |WeChat Official Account H5 |Websites outside WeChat |Non-WeChat Apps|
|:-:									|:-:					|:-:			|:-:			|:-:		|
|[access_token](#access_token)			|定时刷新				|定时刷新		|开发者操作		|开发者操作	|
|[access_token](#access_token) |Regular refresh |Regular refresh |Developer operation |Developer operation |
|[user_access_token](#user_access_token)|-					|开发者操作		|-				|-			|
|[user_access_token](#user_access_token)|- |Developer action |- |- |
|[session_key](#session_key)			|uni-id维护或开发者操作	|-				|-				|-			|
|[session_key](#session_key) |uni-id maintenance or developer operation |- |- |- |
|[encrypt_key](#encrypt_key)			|[uni云端一体安全网络](secret-net)或开发者操作				|-				|-				|-			|
|[encrypt_key](#encrypt_key) |[uni Cloud Integrated Security Network](secret-net) or developer operation |- |- |- |
|[ticket](#ticket)						|-						|定时刷新		|-				|-			|
|[ticket](#ticket) |- |Regular refresh |- |- |

- `定时刷新`：指由云对象 `uni-open-bridge` 的定时任务触发，自动从微信服务器获取凭据，通过调用 `uni-open-bridge-common` 写入到Redis或数据库
- `Timed refresh`: refers to the timed task triggered by the cloud object `uni-open-bridge`, automatically obtains credentials from the WeChat server, and writes to Redis or database by calling `uni-open-bridge-common`
- `开发者操作`：指由开发者引入公共模块 `uni-open-bridge-common`，调用相关读写[方法](#uni-open-bridge-common)
- `Developer operation`: refers to the introduction of the public module `uni-open-bridge-common` by the developer, calling the relevant read and write [methods](#uni-open-bridge-common)

- `session_key`： 如果使用了uni-id，则uni-id用户登陆时会自动读写该凭据。一般无需开发者维护。
- `session_key`: If a uni-id is used, the uni-id user will automatically read and write the credentials when they log in. Usually no developer maintenance is required.
- `encrypt_key` 依赖 `access_token`、`session_key`，如果依赖的值已存在，可直接读取 `encrypt_key`，如果不存在自动向微信服务器获取、开发者应该仅读取该值，如果使用了[uni云端一体安全网络](secret-net)由其维护，如果有不使用 `uni-open-bridge` 托管的[情况](#nouseuniopenbridge)，则有外部系统操作
- `encrypt_key` depends on `access_token`, `session_key`, if the dependent value already exists, you can directly read `encrypt_key`, if it does not exist, it will be automatically obtained from the WeChat server, the developer should only read the value, if using [ uni cloud integrated security network](secret-net) is maintained by it, if there is a [case](#nouseuniopenbridge) that does not use `uni-open-bridge` hosting, there are external system operations
- `ticket` 依赖 `access_token`，直接获取 `ticket` 会检查 `access_token`，如果不存在默认先请求微信服务器获取并保存，继续请求 `ticket`
- `ticket` depends on `access_token`, directly obtaining `ticket` will check `access_token`, if it does not exist by default, first request the WeChat server to obtain and save it, and continue to request `ticket`

还有一些不常用的凭据暂不列出，例如：非微信的App平台的 access_token。
There are also some less commonly used credentials that are not listed, for example: access_token for non-WeChat App platforms.

### 平台标记Platform@platform
### Platform tag Platform@platform

`uni-open-bridge`中将不同平台命名如下表，在API和存储数据时都使用下表标记。注意不同于前端条件编译使用的uniPlatform。
In `uni-open-bridge`, the different platforms are named in the following table, and the following table is used to mark the API and store data. Note that it is different from the uniPlatform used by the front-end conditional compilation.

|值					|描述				|
|value |description |
|:-:				|:-:				|
|weixin-mp	|微信小程序	|
|weixin-mp |WeChat Mini Program |
|weixin-h5	|微信公众号H5	|
|weixin-h5 |WeChat Official Account H5 |
|weixin-web	|微信外的Web站	|
|weixin-web |Web site outside WeChat |
|weixin-app	|非微信的App		|
|weixin-app |Non-WeChat App |
|qq-mp			|QQ小程序	|
|qq-mp |QQ applet |
|qq-app			|QQ外的App			|
|qq-app |Apps outside QQ |

提示：自动刷新固定应用级凭据目前仅支持 `weixin-mp`、`weixin-h5`。 后续补充其他平台
Tip: Auto refresh of fixed app-level credentials currently only supports `weixin-mp`, `weixin-h5`. Additional platforms will be added later

### 常见凭据用途
### Common Credential Uses

- 微信小程序
- WeChat applet

1. 客户端登陆需要保存 [session_key](#session_key)
1. Client login needs to save [session_key](#session_key)
2. 解密用户敏感数据需要 [access_token](#access_token)、[session_key](#session_key)，例如：获取用户授权的手机号、用户敏感资料
2. [access_token](#access_token), [session_key](#session_key) are required to decrypt user sensitive data, for example: obtain user authorized mobile phone number, user sensitive information
3. 解密[uni云端一体安全网络](secret-net)通道使用的加密数据需要 [access_token](#access_token)、[session_key](#session_key) 、[encrypt_key](#encrypt_key)
3. [access_token](#access_token), [session_key](#session_key), [encrypt_key](#encrypt_key) are required to decrypt the encrypted data used by the [uni cloud integrated security network](secret-net) channel

- 微信公众号
- WeChat public account

1. 微信内公众号H5页面用户登陆需要用到 [user_access_token](#user_access_token)、[ticket](#ticket)
1. [user_access_token](#user_access_token), [ticket](#ticket) are required for user login on H5 page of WeChat Official Account

微信凭据分应用级、用户级、一次性等凭据，如果你之前未接触过微信这些凭据，请务必阅读下面的**每个凭据的详细介绍**
WeChat credentials are divided into application-level, user-level, one-time and other credentials. If you have not contacted WeChat credentials before, please be sure to read the following **detailed introduction of each credential**

### access_token(应用级)@access_token
### access_token (application level) @access_token

- 微信小程序 `access_token` 是微信小程序全局唯一后台接口调用凭据，调用绝大多数后台接口时都需使用。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/backend-api.html#access_token)
- Wechat applet `access_token` is the globally unique backend interface calling credential of the Wechat applet, and it needs to be used when calling most backend interfaces. [Details](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/backend-api.html#access_token)

- 微信公众号H5 `access_token` 是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用 `access_token`。开发者需要进行妥善保存。`access_token` 的存储至少要保留512个字符空间。`access_token` 的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的 `access_token` 失效。
- WeChat Official Account H5 `access_token` is the globally unique API call credential of the Official Account. The Official Account must use `access_token` when calling each API. Developers need to keep it properly. The storage of `access_token` must reserve at least 512 characters of space. The `access_token` is currently valid for 2 hours and needs to be refreshed regularly. Repeated acquisition will cause the last acquired `access_token` to be invalid.

**注意：微信公众号H5`access_token`的获取需要固定IP，需将IP白名单填入到微信公众平台。uniCloud中默认没有固定IP，获取固定IP需另见文档[固定IP](cf-functions.md#eip)**
**Note: The acquisition of the WeChat official account H5 `access_token` requires a fixed IP, and the IP whitelist needs to be filled in the WeChat public platform. There is no fixed IP by default in uniCloud. To obtain a fixed IP, please refer to the document [Fixed IP](cf-functions.md#eip)**

公众平台的 API 调用所需的 `access_token` 的使用及生成方式说明：
Instructions on the use and generation of `access_token` required for API calls on the public platform:

1、建议公众号开发者使用中控服务器统一获取和刷新 `access_token`，其他业务逻辑服务器所使用的 `access_token` 均来自于该中控服务器，不应该各自去微信服务器刷新，否则容易造成冲突，导致 `access_token` 覆盖而影响业务；
1、 It is recommended that developers of official accounts use the central control server to obtain and refresh the `access_token` uniformly. The `access_token` used by other business logic servers all come from the central control server. They should not go to the WeChat server to refresh each other, otherwise it is easy to cause conflicts. Cause `access_token` to be overwritten and affect the business;

2、目前`access_token` 的有效期通过返回的expires_in来传达，目前是7200秒之内的值。中控服务器需要根据这个有效时间提前去刷新新 `access_token`。在刷新过程中，中控服务器可对外继续输出的老 `access_token`，此时公众平台后台会保证在5分钟内，新老 `access_token` 都可用，这保证了第三方业务的平滑过渡；
2、 The current validity period of `access_token` is conveyed by the returned expires_in, which is currently the value within 7200 seconds. The central control server needs to refresh the new `access_token` in advance according to this valid time. During the refresh process, the central control server can continue to output the old `access_token`. At this time, the backend of the public platform will ensure that both the new and old `access_token` are available within 5 minutes, which ensures a smooth transition of third-party services;

3、`access_token` 的有效时间可能会在未来有调整，所以中控服务器不仅需要内部定时主动刷新，还需要提供被动刷新 `access_token` 的接口，这样便于业务服务器在 API 调用获知 `access_token` 已超时的情况下，可以触发 `access_token` 的刷新流程。
3、 The valid time of `access_token` may be adjusted in the future, so the central control server not only needs to actively refresh the `access_token` internally, but also needs to provide an interface for passively refreshing the `access_token`, which is convenient for the business server to know that the `access_token` has timed out in the API call In the case of `access_token`, the refresh process of `access_token` can be triggered.

4、对于可能存在风险的调用，在开发者进行获取 `access_token` 调用时进入风险调用确认流程，需要用户管理员确认后才可以成功获取。具体流程为：
4、 For calls that may have risks, when the developer makes a call to obtain `access_token`, it enters the risk call confirmation process, and the user administrator can confirm it before it can be successfully obtained. The specific process is:

开发者通过某 IP 发起调用->平台返回错误码[89503]并同时下发模板消息给公众号管理员->公众号管理员确认该 IP 可以调用->开发者使用该 IP 再次发起调用->调用成功。
The developer initiates a call through an IP -> the platform returns an error code [89503] and at the same time sends a template message to the official account administrator -> the official account administrator confirms that the IP can be called -> the developer uses the IP to initiate a call again -> The call succeeded.

如公众号管理员第一次拒绝该 IP 调用，用户在1个小时内将无法使用该 IP 再次发起调用，如公众号管理员多次拒绝该 IP 调用，该 IP 将可能长期无法发起调用。平台建议开发者在发起调用前主动与管理员沟通确认调用需求，或请求管理员开启 IP 白名单功能并将该 IP 加入 IP 白名单列表。
If the official account administrator rejects the IP call for the first time, the user will not be able to use the IP to call again within 1 hour. If the official account administrator rejects the IP call for many times, the IP may not be able to initiate the call for a long time. The platform recommends that developers actively communicate with the administrator to confirm the invocation requirements before initiating the call, or request the administrator to enable the IP whitelist function and add the IP to the IP whitelist.

### user_access_token(用户级)@user_access_token
### user_access_token (user level) @user_access_token

微信公众号H5平台有两个相同名字 `access_token`，分别用于
The WeChat official account H5 platform has two `access_token` with the same name, which are used for

1、应用级：公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用 `access_token`。
1、 Application level: The globally unique interface calling credentials of the official account, and the `access_token` is required when the official account calls each interface.
2、用户级：网页授权接口调用凭证，用户授权的作用域 `access_token`。
2、 User level: The web page authorization interface calls the credentials, and the scope of user authorization is `access_token`.

众多凭据命名都叫`access_token`，无法有效区分。对于用户级的`access_token`，**在 uni-open-bridge 中改名为** `user_access_token` 。它对应微信公众平台网页用户授权 `access_token`
Many credentials are named `access_token`, which cannot be effectively distinguished. For user-level `access_token`, **renamed** `user_access_token` in uni-open-bridge. It corresponds to the user authorization `access_token` of the WeChat public platform webpage

|平台							|值						|描述																																																													|
|Platform |Value |Description |
|:-:							|:-:					|:-:																																																													|
|微信公众号H5	|access_token	|微信公众号H5用户会话密钥。[详情](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)	|
|WeChat Official Account H5 |access_token |WeChat Official Account H5 User Session Key. [Details](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html) |


### code(临时凭据)@code
### code(temporary credentials)@code

微信小程序用户登录凭证校验
WeChat applet user login credential verification

在客户端通过调用 `uni.login()` 获得临时登录凭证 `code` 后传到开发者服务器在请求微信服务器获得 `session_key`、`openid`、`unionid`
The client obtains the temporary login credential `code` by calling `uni.login()` and then transmits it to the developer server to request the WeChat server to obtain the `session_key`, `openid`, `unionid`

`code` 仅可在服务器使用一次，客户端调用频率限制每个用户每分钟100次。
`code` can only be used once on the server, and the client-side call frequency is limited to 100 per minute per user.

所以`uni-open-bridge`中并没有持续化存储code。
So there is no persistent storage code in `uni-open-bridge`.

### openid(用户级)@openid
### openid (user level) @openid

微信小程序用户唯一标识
WeChat Mini Program User Unique ID

需要在开发者服务器请求微信服务器获得，依赖参数 code，[详情](#code)
It needs to be obtained by requesting the WeChat server on the developer server, depending on the parameter code, [details](#code)

`uni-open-bridge`中并没有持续化存储openid，相关读写和保存是交由另一个插件`uni-id`来负责的。
There is no persistent storage of openid in `uni-open-bridge`, and the related read, write and save are handled by another plugin `uni-id`.

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
If the developer encounters that the signature verification fails or the decryption fails because the `session_key` is incorrect, please pay attention to the following notes related to `session_key`.

`uni.login` 调用时，用户的 `session_key` 可能会被更新而致使旧 `session_key` 失效（刷新机制存在最短周期，如果同一个用户短时间内多次调用 `uni.login`，并非每次调用都导致 `session_key` 刷新）。
When `uni.login` is called, the user's `session_key` may be updated, causing the old `session_key` to become invalid (the refresh mechanism has a shortest period, if the same user calls `uni.login` multiple times in a short period of time, not every time calls result in a `session_key` refresh).

开发者应该在明确需要重新登录时才调用 `uni.login`，及时通过 `code2Session` 接口更新服务器存储的 `session_key`。
Developers should only call `uni.login` when they clearly need to log in again, and update the `session_key` stored by the server through the `code2Session` interface in time.

微信不会把 `session_key` 的有效期告知开发者，会根据用户使用小程序的行为对 `session_key` 进行续期。用户越频繁使用小程序，`session_key` 有效期越长。
WeChat will not inform the developer of the validity period of the `session_key`, and will renew the `session_key` according to the user's behavior of using the applet. The more frequently the user uses the applet, the longer the `session_key` is valid.

开发者在 `session_key` 失效时，可以通过重新执行登录流程获取有效的 `session_key`。使用接口 [uni.checkSession](https://uniapp.dcloud.net.cn/api/plugins/login.html#uni-checksession) 可以校验 `session_key` 是否有效，从而避免小程序反复执行登录流程。
When the `session_key` is invalid, the developer can obtain a valid `session_key` by re-executing the login process. Use the interface [uni.checkSession](https://uniapp.dcloud.net.cn/api/plugins/login.html#uni-checksession) to check whether the `session_key` is valid, so as to avoid the applet from repeatedly performing the login process.

当开发者在实现自定义登录态时，可以考虑以 `session_key` 有效期作为自身登录态有效期，也可以实现自定义的时效性策略。
When developers implement a custom login state, they can consider using the `session_key` validity period as the validity period of their own login state, or they can implement a custom timeliness strategy.

### encrypt_key(用户级)@encrypt_key
### encrypt_key (user level) @encrypt_key

为了避免微信小程序与开发者后台通信时数据被截取和篡改，微信侧维护了一个用户维度的可靠key，用于小程序和后台通信时进行加密和签名。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/user-encryptkey.html)
In order to avoid data interception and tampering when the WeChat applet communicates with the developer in the background, the WeChat side maintains a user-dimensional reliable key, which is used for encryption and signature when the applet communicates with the background. [Details](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/user-encryptkey.html)

开发者可以分别通过小程序前端和微信后台提供的接口，获取用户的加密 key。
Developers can obtain the user's encryption key through the interfaces provided by the front-end of the applet and the back-end of WeChat respectively.

### ticket(用户级)@ticket
### ticket (user level) @ticket

`ticket` 是微信公众号用于调用微信 JS 接口的临时票据。正常情况下，`ticket` 的有效期为7200秒，通过 `access_token` 来获取。
`ticket` is a temporary ticket used by WeChat official account to call WeChat JS interface. Under normal circumstances, the validity period of `ticket` is 7200 seconds, which is obtained through `access_token`.

由于获取 `ticket` 的 api 调用次数非常有限，频繁刷新 `ticket` 会导致 api 调用受限，影响自身业务，开发者必须在自己的服务全局缓存 `ticket `。[详情](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62)
Since the number of api calls to obtain `ticket` is very limited, frequent refresh of `ticket` will limit api calls and affect their own business. Developers must cache `ticket` globally in their own services. [Details](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62)

而在`uni-open-bridge`已经缓存了该凭据。
While in `uni-open-bridge` the credentials are already cached.

## uni-open-bridge的使用流程
## The usage process of uni-open-bridge

### 1. **下载插件[uni-open-bridge](https://ext.dcloud.net.cn/plugin?id=9002)到项目中。
### 1. **Download the plugin [uni-open-bridge](https://ext.dcloud.net.cn/plugin?id=9002) into the project.

### 2. `uni-config-center`的 `uni-id` 下配置固定凭据
### 2. Configure fixed credentials under `uni-id` of `uni-config-center`

如果你没有`appid` 和 `secret` ，需要先向微信申请
If you do not have `appid` and `secret`, you need to apply to WeChat first
- 微信小程序或微信公众号，向微信的[公众平台](https://mp.weixin.qq.com/)申请 `appid` 和 `secret` 固定凭据。
- WeChat Mini Program or WeChat Official Account, apply for `appid` and `secret` fixed credentials from WeChat's [public platform](https://mp.weixin.qq.com/).
- 微信App或PC网页，向微信的[开放平台](https://open.weixin.qq.com/)申请 `appid` 和 `secret` 固定凭据。
- WeChat App or PC webpage, apply for `appid` and `secret` fixed credentials from WeChat's [Open Platform](https://open.weixin.qq.com/).

然后在项目的 uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json 文件中配置
Then configure in the project's uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json file

如果不需要定时刷新 `access_token`、`ticket`、也不需要通过外部系统访问凭据时可单独引入 [uni-open-bridge-common](#uni-open-bridge-common)，然后在云函数或云对象中直接调用相关方法
If you do not need to refresh `access_token`, `ticket` regularly, or access credentials through an external system, you can introduce [uni-open-bridge-common](#uni-open-bridge-common) separately, and then use the cloud function or Directly call related methods in cloud objects

**uni-id-config中uni-id示例代码**
**Uni-id example code in uni-id-config**

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
- On the `weixin-mp` and `weixin-h5` platforms, the [access_token]( #access_token), [encrypt_key](#encrypt_key), [ticket](#ticket) need to use `appid`, `appsecret` in the configuration file
- 暂时不需要配置 `weixin-web`、`weixin-app`、`qq-mp`、`qq-app`，后续支持这些平台时需要再次补充配置，但仍然可通过调用 [uni-open-bridge-common](#uni-open-bridge-common) 的方法传入设置值
- `weixin-web`, `weixin-app`, `qq-mp`, `qq-app` do not need to be configured for the time being. When these platforms are supported in the future, the configuration needs to be supplemented again, but it can still be configured by calling [uni-open-bridge -common](#uni-open-bridge-common) method to pass in the setting value


注意：拷贝此文件内容时需要移除 `注释`。标准json不支持注释。在HBuilderX中可用多选//来批量移除注释。
Note: The `comments` need to be removed when copying the contents of this file. Standard json does not support annotations. In HBuilderX, you can use multiple selection // to remove comments in batches.

### 3. `uni-config-center`下配置`uni-open-bridge`@uniopenbridgeconfig
### 3. Configure `uni-open-bridge` under `uni-config-center` @uniopenbridgeconfig

在`uni-config-center`目录下新建子目录`uni-open-bridge`, 新增 `config.json`，配置 dcloudAppid ，详情见下面的示例代码
Create a new subdirectory `uni-open-bridge` under the `uni-config-center` directory, add `config.json`, configure dcloudAppid , see the sample code below for details

**uni-id-config中uni-open-bridge示例代码**
**Uni-open-bridge example code in uni-id-config**

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
Note: The `comments` need to be removed when copying the contents of this file. Standard json does not support annotations. In HBuilderX, you can use multiple selection // to remove comments in batches.

### 4. 将插件上传到服务空间
### 4. Upload the plugin to the service space

云对象`uni-open-bridge`上传到服务空间后，会每隔一个小时自动运行一次，从微信服务器获取相关凭据并保存到数据库。
After the cloud object `uni-open-bridge` is uploaded to the service space, it will automatically run every hour to obtain the relevant credentials from the WeChat server and save it to the database.

在数据库`opendb-open-data`中会看到数据。如开通redis则在redis的`uni-id`分组中查看（推荐开通redis以获取更好的性能）。
The data will be seen in the database `opendb-open-data`. If redis is activated, check it in the `uni-id` group of redis (it is recommended to activate redis for better performance).

如果异常，请在 [uniCloud Web控制台](https://unicloud.dcloud.net.cn/)，找到云函数/云对象 `uni-open-bridge` 检查运行日志。很可能是第一步或第二步的配置出错了。
If abnormal, please find the cloud function/cloud object `uni-open-bridge` in the [uniCloud Web Console](https://unicloud.dcloud.net.cn/) to check the running log. It is very likely that the configuration of the first or second step is wrong.

当然如果不需要定时任务，可以修改云对象package.json里的定时任务配置并重新上传。或在uniCloud web控制台修改定时任务。一般不推荐修改定时任务设置。
Of course, if you do not need scheduled tasks, you can modify the scheduled task configuration in the cloud object package.json and upload it again. Or modify the scheduled task in the uniCloud web console. It is generally not recommended to modify the scheduled task settings.

**注意**
**Notice**

如需获取微信公众号H5平台的`access_token`，需要处理服务空间的固定出口IP问题。因为需将IP白名单填入到微信公众平台，然后才能在从微信服务器拿到该凭据。uniCloud中默认没有固定IP，获取固定IP需另见文档[固定IP](cf-functions.md#eip)
If you want to obtain the `access_token` of the WeChat official account H5 platform, you need to deal with the fixed export IP of the service space. Because the IP whitelist needs to be filled in the WeChat public platform, and then the credentials can be obtained from the WeChat server. There is no fixed IP by default in uniCloud. To obtain a fixed IP, please refer to the document [Fixed IP](cf-functions.md#eip)

## 业务系统获取相关凭据的方法
## How the business system obtains the relevant credentials

在`uni-open-bridge`云对象获取到相关凭据后，当业务系统（比如登录支付或其他业务）需要使用这些凭据时，通过以下方式获取。
After the `uni-open-bridge` cloud object obtains the relevant credentials, when the business system (such as login payment or other business) needs to use these credentials, it is obtained in the following ways.

### 云函数公共模块方式@uni-open-bridge-common
### Cloud function public module method @uni-open-bridge-common

当你的业务在uniCloud上时，在你的业务云函数/云对象中引用公共模块`uni-open-bridge-common`，然后调用下面的API。
When your business is on uniCloud, reference the common module `uni-open-bridge-common` in your business cloud function/cloud object, then call the API below.

> `云函数公共模块`是不同云函数共享代码的一种方式。如果你不了解什么是`云函数公共模块`，请另读文档[公共模块](https://uniapp.dcloud.io/uniCloud/cf-common)
> `Cloud function common module` is a way for different cloud functions to share code. If you don't know what `cloud function common module` is, please read the document [public module](https://uniapp.dcloud.io/uniCloud/cf-common)

`uni-open-bridge-common` 公共模块，提供了 [access_token](#access_token)、[user_access_token](#user_access_token)、[session_key](#session_key)、[encrypt_key](#encrypt_key)、[ticket](#ticket) 的读取、写入、删除操作。
`uni-open-bridge-common` public module, provides [access_token](#access_token), [user_access_token](#user_access_token), [session_key](#session_key), [encrypt_key](#encrypt_key), [ticket]( #ticket) read, write, delete operations.

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
  platform: 'weixin-mp' // 指定凭据所属平台，解释见上
}
uobc.getAccessToken(key)
uobc.getTicket(key)


// 用户级凭据，需要同时传入 openid 才能获得
// User-level credentials, you need to pass in openid at the same time to get
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
In addition to the common methods above, the get, set, and remove methods for all credentials are listed below.

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

|参数					|类型		|描述									|
|parameter |type |description |
|:-:					|:-:		|:-:									|
|access_token	|String	|[详情](#access_token)|
|access_token |String |[Details](#access_token)|

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

|参数					|类型		|描述																									|
|parameter |type |description |
|:-:					|:-:		|:-:																									|
|access_token	|String	|微信公众平台用户会话密钥，[详情](#user_access_token)	|
|access_token |String |WeChat public platform user session key, [Details](#user_access_token) |

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

|参数				|类型		|描述																			|
|parameter |type |description |
|:-:				|:-:		|:-:																			|
|session_key|String	|微信小程序会话密钥，[详情](#session_key)	|
|session_key|String |WeChat applet session key, [details](#session_key) |

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

|参数				|类型		|描述														|
|parameter |type |description |
|:-:				|:-:		|:-:														|
|encrypt_key|String	|加密 key，[详情](#encrypt_key)	|
|encrypt_key|String |Encryption key, [details](#encrypt_key) |
|iv					|String	|加密 iv												|
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
|ticket			|String	|[详情](#ticket)					|
|ticket |String |[Details](#ticket) |

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

云对象 `uni-open-bridge` URL化后，非uniCloud系统可通过 http 方式访问凭据。
After the cloud object `uni-open-bridge` is URLized, non-uniCloud systems can access the credentials through http.

[URL化](http.md)，是一种让云函数或云对象暴露为Http接口的方式，[详见](http.md)。可以在 [uniCloud Web控制台](https://unicloud.dcloud.net.cn/) 操作。
[URLization](http.md) is a way to expose cloud functions or cloud objects as Http interfaces, [see details](http.md). It can be operated in [uniCloud Web Console](https://unicloud.dcloud.net.cn/).

通过以下2种方式验证外部服务器与uniCloud安全通讯

1. [uni-cloud-s2s](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-s2s.html)模块
2. 配置外部服务器IP白名单字段 `ipWhiteList`，参见 `config.json`

配置URL化后，其他系统可以通过下面的http接口，读写删各种开放平台凭据。
After configuring URLization, other systems can read, write and delete various open platform credentials through the following http interface.

请求类型 `POST`

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
  "expiresIn": 172800
}
```

由于微信的设计并没有告知开发者最短有效期，且只能通过客户的 `uni.checkSession()` 检查是否过期，过期后通知服务器同步到 uni-open-bridge

所以默认值 `"expiresIn": 172800` 为 2 天，尽可能让时间更长


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


提示：上面 Url 中的 `uni-open-bridge` 指云函数 uni-open-bridge 开启 Url 化时配置的 path 名称


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
