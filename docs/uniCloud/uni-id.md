# 概述

99%的应用，都要开发用户注册、登录、发送短信验证码、修改密码、密码加密保存、密码防探测、token管理、注册用户统计等众多功能，从前端到后端都需要。

为什么不能有一个开源的通用项目，避免大家的重复开发呢？

`uni-id`应需而生。

`uni-id`为`uniCloud`开发者提供了开源、易用、安全、丰富、可扩展的用户管理框架。

[clientDB](uniCloud/clientDB)、[DB Schema](uniCloud/schema)、[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)、[uniCloud admin](uniCloud/admin)，这些产品都基于`uni-id`的账户体系。可以说`uni-id`是uniCloud不可或缺的基础能力。

## 组成部分

`uni-id`是一个产品体系，前后台都有，包括：

1. 云数据库

十几张用户相关的[opendb数据表](uniCloud/opendb)，如[uni-id-users](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json)、[uni-id-roles](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-roles/collection.json)、[uni-id-permissions](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-permissions/collection.json)。

主表为 `uni-id-users` 表，保存用户的基本信息。扩展字段有很多，如实名认证数据、工作履历数据。由于MongoDB的特性，开发者可以自由扩展字段。

所有`uni-id`的数据表，不管在HBuilderX中新建DB Schema还是在uniCloud web控制台新建表的界面上，都可以选择模板直接建好。

2. 云端核心[公共模块](https://uniapp.dcloud.io/uniCloud/cf-common.html) [uni-id](https://ext.dcloud.net.cn/plugin?id=2116)

uni-id公共模块包含了账户体系服务端的核心代码，内置在每个uniCloud服务空间里。uniCloud众多功能（如DB Schema的权限）都依赖uni-id公共模块。

包括注册、登录、修改密码、设置头像等各种操作，开发者无需直接操作uni-id-user表，调用公共模块的api接口即可。

3. 云端一体页面模板 [uni-id-pages]()

基于uni-id公共模块，DCloud还提供了一组完整的前端页面和后端[云对象](https://uniapp.dcloud.io/uniCloud/cloud-obj.html) `uni-id-co`，功能包括用户注册（含用户协议、隐私协议）、退出、修改密码、忘记密码等各种功能，同时适配PC宽屏和各种手机平台（App、H5、小程序）。

在云对象发布之前（HBuilderX 3.4以前），基于云函数方式，提供了uni-id-cf，功能类似。但在云对象上线后，推荐使用基于云对象的uni-id-pages，代码更简单清晰。

此外，DCloud的其他产品也为uni-id提供了众多支持：
- [uni-admin后台管理框架](https://uniapp.dcloud.io/uniCloud/admin.html)，为uni-id提供了现成的用户、角色、权限的后台管理功能，以及注册用户统计报表。
- uni-app框架内置的uniCloud客户端SDK，自动处理了uni-id的token的网络传输（uni-app 2.7.13+版本）、续期（uni-app 3. **待确认** +版本），也就是说开发者无需自己管理token了。

以上部分全部是开源的。

## uni-id 对开发者的价值

1. 节省了大量重复劳动
2. 降低门槛，前端开发者无需研究数据库如何设计、账户安全如何保障
3. 多系统打通用户和上下游协同

关于第三点，着重强调下。

一个应用，往往需要集成多个功能模块。比如一个电商应用，需要一个基本电商模板，还需要客服聊天模板。

在插件市场，每类模板插件都能找到，但他们如果不是基于同一套用户体系设计，就很难整合。

所有uniCloud的标准应用，都基于`uni-id`来做。`uni-id`公共模块自动内置在每个服务空间里的。

有了统一的账户规范，并且围绕这套账户规范，有各种各样插件，那么开发者可以随意整合这些插件，让数据连同。

规范，还可以让上下游充分协同。插件市场会出现各种数据迁移插件，比如把从discuz里把用户迁移到`uni-id`中的插件，相信围绕这套规范的产业链会非常活跃。

事实上，[clientDB](uniCloud/clientDB)、[DB Schema](uniCloud/schema)、[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)、[uniCloud admin](uniCloud/admin)等重要uniCloud产品，以及插件市场上各种优秀的轮子，都是基于`uni-id`的。

## 现状和未来

`uni-id`已完成的功能：

- 注册、登录、发送短信验证码、密码加密保存、修改密码、重置密码、头像管理、token管理、rbac权限角色体系、用户邀请裂变、用户签到、日志记录、账户防刷

关于登录方式，目前已实现

- 账户密码登录
- 手机号+短信验证码登录
- App手机号一键认证，免验证码
- 三方登录：App中的微信登录和Apple ID登录、微信小程序中的微信登录、支付宝小程序中的支付宝账户登录 

关于还缺少的部分，哪些DCloud在完善，哪些希望开发者给共同完善开源项目，计划与边界公布如下：

1. 无计划做的

百度、QQ、快手、快应用等小程序的登录，以及微博、QQ等App端的登录。

2. 有计划做但不是近期计划

web的微信扫码登录、字节小程序登录、facebook等海外主流社交账户登录、邮箱验证集成、活体检测。

上述功能均欢迎其他开发者在开源项目上提交pr，或在插件市场发布插件，共同完善`uni-id`。

其他方面，各种常见开源项目如discuz、wordPress、ecshop的用户导入插件，不属于`uni-id`主工程，欢迎开发者单独提交插件到插件市场。

`uni-id`的git仓库：[https://gitee.com/dcloud/uni-id.git](https://gitee.com/dcloud/uni-id.git)


# 快速上手@start

uni-id公共模块的插件市场地址为：[uni-id公共模块](https://ext.dcloud.net.cn/plugin?id=2116)。但一般不需要单独下载这个插件，但更新uni-id公共模块时需要从这里下载更新。

一般推荐直接使用uni-starter项目模板来开始开发，或者在新项目里导入uni-id-pages页面模板来使用。

uni-id云端的配置是依赖[uni-config-center](/uniCloud/uni-config-center)公用模块的，在工程目录uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json。（如未安装uni-config-center需安装，如缺少目录需手动创建）

uni-id云端同时依赖了公共模块[uni-captcha](https://ext.dcloud.net.cn/plugin?id=4048)，这个功能模块负责生成和校验验证码，进行人机验证。

体验uni-id需保证uniCloud服务空间至少有数据表`uni-id-users`、`opendb-verify-codes`（验证码表）

注意：如果HBuilderX版本低于3.1.8，批量上传云函数及公共模块后需要单独再上传一次uni-id

使用uni-id，首先需要确定2件事：

1. 确定注册登录方式
你的应用采用什么方式注册登录？比如用户名密码、手机号+短信验证码、或者微信登录。

很多登录方式涉及三方服务，需要开通[短信验证码服务](uniCloud/send-sms)、开通[App一键登录](https://uniapp.dcloud.net.cn/univerify.html)、或者向微信等申请登录的appid和appsecret信息。

申请开通相关服务后，需要把配置信息填写在云端配置文件config.json中。

2. 配置各项Secret

账户如果涉及密码，那么需要配置`passwordSecret`，账户的密码会根据`passwordSecret`使用sha1摘要加密算法以不可逆的方式存储在数据库中。

配置`tokenSecret`是为了防止token被第三方解密，模拟用户身份。

千万不要使用默认的passwordSecret和tokenSecret，会造成系统安全隐患。

云端的config.json还有各种配置，详见下个章节。前端的配置请参考uni-id-pages的文档。

# 云端配置config.json的说明@config

uni-id的云端配置文件在uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json中。

注意：

- **config.json是一个标准json文件，不支持注释**
- 如果不希望使用config.json初始化而是想自行传入参数（一般不推荐这么做），可以使用`createInstance`方法[uniID.createInstance](uniCloud/uni-id.md?id=create-instance)

> 在云函数URL化的场景无法获取客户端平台信息，可以在调用uni-id相关接口之前（推荐在云函数入口）通过修改context.PLATFORM手动传入客户端平台信息

例：

```js
exports.main = async (event, context) => {
	context.PLATFORM = 'app-plus'
}
```

配置项：

+ `passwordSecret`为用于加密密码入库的密钥
+ `tokenSecret`为生成token需要的密钥
+ `tokenExpiresIn`token有效期，以秒为单位
+ `passwordErrorLimit`密码错误重试次数，分ip记录密码错误次数，达到重试次数之后等待`passwordErrorRetryTime`时间之后才可以重试
+ `passwordErrorRetryTime`单位为秒
+ 如果使用`sendSmsCode`接口发送短信需要前往[https://dev.dcloud.net.cn/uniSms](https://dev.dcloud.net.cn/uniSms)充值短信额度，配置`config.json`的`service`字段，字段说明见下方示例
+ 如果使用其他方式发送短信可以参考`sendSmsCode`接口的实现[uni-id sendSmsCode](https://gitee.com/dcloud/uni-id/blob/master/src/lib/verify/send-sms-code.js)
+ 另外可以按照客户端平台进行不同的配置，参考下面示例

**下面的配置文件中所有时间的单位都是秒**

> ！！！重要！！！ passwordSecret与tokenSecret十分重要，切记妥善保存（不要直接使用下面示例中的passwordSecret与tokenSecret）。修改passwordSecret会导致老用户使用密码无法登录，修改tokenSecret会导致所有已经下发的token失效。如果重新导入uni-id切勿直接覆盖config.json相关配置

```json
// 如果拷贝此内容切记去除注释
{
  "passwordSecret": "passwordSecret-demo", // 数据库中password字段是加密存储的，这里的passwordSecret即为加密密码所用的密钥，注意修改为自己的密钥，使用一个较长的字符串即可
  "tokenSecret": "tokenSecret-demo", // 生成token所用的密钥，注意修改为自己的，使用一个较长的字符串即可
  "tokenExpiresIn": 7200, // 全平台token过期时间，未指定过期时间的平台会使用此值
  "tokenExpiresThreshold": 600, // 新增于uni-id 1.1.7版本，checkToken时如果token有效期小于此值且在有效期内则自动获取新token，请注意将新token返回给前端保存，如果不配置此参数则不开启自动获取新token功能
  "bindTokenToDevice": false, // 是否将token和设备绑定，设置为true会进行ua校验，uni-id 3.0.12前默认为true，3.0.12及以后版本默认调整为false
  "passwordErrorLimit": 6, // 密码错误最大重试次数
  "passwordErrorRetryTime": 3600, // 密码错误重试次数超限之后的冻结时间
  "autoSetInviteCode": false, // 是否在用户注册时自动设置邀请码，默认不自动设置
  "forceInviteCode": false, // 是否强制用户注册时必填邀请码，默认为false（需要注意的是目前只有短信验证码注册才可以填写邀请码）,设置为true时需要在loginBySms时指定type为register来使用注册，登录时也要传入type为login
  "removePermissionAndRoleFromToken": false, // 新增于uni-id 3.0.0版本，如果配置为false则自动缓存用户的角色、权限到token中，默认值为false。详细说明见https://uniapp.dcloud.io/uniCloud/uni-id?id=cache-permission-in-token
  "preferedAppPlatform": "app", // 新增于uni-id 3.3.12，指定app端对应的PLATFORM名称，用于处理app-plus和app的兼容问题，详细说明见：https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=prefered-app-platform
  "app": { // 此处需和preferedAppPlatform保持一致
    "tokenExpiresIn": 2592000,
    "oauth": {
      // App微信登录所用到的appid、appsecret需要在微信开放平台获取，注意：不是公众平台而是开放平台
      "weixin": {
        "appid": "weixin appid",
        "appsecret": "weixin appsecret"
      },
      // App QQ登录所用到的appid、appsecret需要在腾讯开放平台获取，注意：不是公众平台而是开放平台
      "qq": {
        "appid": "qq appid",
        "appsecret": "qq appsecret"
      },
      "apple": { // 使用苹果登录时需要
        "bundleId": "your bundleId"
      }
    }
  },
  "mp-weixin": {
    "tokenExpiresIn": 259200,
    "oauth": {
      // 微信小程序登录所用的appid、appsecret需要在对应的小程序管理控制台获取
      "weixin": {
        "appid": "weixin appid",
        "appsecret": "weixin appsecret"
      }
    }
  },
  "mp-qq": {
    "tokenExpiresIn": 259200,
    "oauth": {
      // QQ小程序登录所用的appid、appsecret需要在对应的小程序管理控制台获取
      "qq": {
        "appid": "qq appid",
        "appsecret": "qq appsecret"
      }
    }
  },
  "mp-alipay": {
    "tokenExpiresIn": 259200,
    "oauth": {
      // 支付宝小程序登录用到的appid、privateKey请参考支付宝小程序的文档进行设置或者获取，https://opendocs.alipay.com/open/291/105971#LDsXr
      "alipay": {
        "appid": "alipay appid",
        "privateKey": "alipay privateKey", // 私钥
        "keyType": "PKCS8" // 私钥类型，如果私钥类型不是PKCS8，需要填写此字段，否则会出现“error:0D0680A8:asn1 encoding routines:ASN1_CHECK_TLEN:wrong tag”错误
      }
    }
  },
  "service": {
    "sms": {
      "name": "your app name", // 应用名称，对应短信模版的name
      "codeExpiresIn": 180, // 验证码过期时间，单位为秒，注意一定要是60的整数倍
      "smsKey": "your sms key", // 短信密钥key，开通短信服务处可以看到
      "smsSecret": "your sms secret" // 短信密钥secret，开通短信服务处可以看到
    },
    "univerify": {
      "appid": "your appid", // 当前应用的appid，使用云函数URL化，此项必须配置
      "apiKey": "your apiKey", // apiKey 和 apiSecret 在开发者中心获取，开发者中心：https://dev.dcloud.net.cn/uniLogin/index?type=0，文档：https://ask.dcloud.net.cn/article/37965
      "apiSecret": "your apiSecret"
    }
  }
}
```

**关于token自动刷新**

tokenExpiresThreshold用于指定token还有多长时间过期时自动刷新token。

例：指定`tokenExpiresThreshold:600,tokenExpiresIn:7200`，token过期时间为2小时，在token有效期不足10分钟时自动刷新token

在token还有5分钟过期时调用checkToken接口会返回新的token和新的token的过期时间（新token有效时间也是2小时），需要前端主动保存此新token。

## Token@token

用户注册/登录成功之后均会返回token及其过期时间，token是一个[json web token](https://jwt.io/)字符串。开发者应在用户登录/注册成功后持久化保存token及其过期时间。同样的在用户登出之后应删除保存的token及其过期时间。

参考：

- [保存token及其过期时间](uniCloud/uni-id?id=save-token)
- [删除token及其过期时间](uniCloud/uni-id?id=remove-token)

用户token为明文存储，可以在token内查看用户相关信息。uniCloud也提供了一个接口用于直接获取token内的用户信息，参考：[uniCloud.getCurrentUserInfo](uniCloud/client-sdk.md?id=client-getcurrentuserinfo)

uniCloud.getCurrentUserInfo接口大致逻辑如下，需要注意的是某些小程序平台不支持atob，getCurrentUserInfo接口内已包含atob的polyfill

```js
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWE1OTNiYTkxYTc1MDAwMDE2NmY3OGQiLCJyb2xlIjpbImFkbWluIl0sInBlcm1pc3Npb24iOltdLCJpYXQiOjE2MzgyNDMzNjUsImV4cCI6MTYzODI1MDU2NX0.MRHEvNYhj9yXjPK04rhZOdnitaxRdF2Ek9BbZjPJyDE'
const userSegment = token.split('.')[1]
const userInfo = atob(userSegment) // '{"uid":"61a593ba91a750000166f78d","role":["admin"],"permission":[],"iat":1638243365,"exp":1638250565}'
```

## preferedAppPlatform@prefered-app-platform

> 新增于uni-id 3.3.12

**前提介绍：** 

uni-app vue2版本app端对应的platform为`app-plus`（HBuilderX 3.4.9起 vue2版本app端对应的platform值也调整为`app`），uni-app vue3版本app端对应的platform为`app`。此改动引发了一些问题，比如在uni-id内使微信登录会无法匹配对应的平台导致登录报错。

由于uni-id将客户端平台存储在了数据库内（例如：app端微信登录的openid被存储为`wx_openid['app-plus']`），此问题无法平滑升级，因此对于新老项目建议分别处理。

### 旧项目的处理

旧项目建议将所有platform为app的场景统一为app-plus，即建议使用如下配置

```js
// 以下仅列出相关配置
{
	"preferedAppPlatform": "app-plus", // uni-id内部会将收到的app平台全部转化为app-plus平台
	"app-plus": { // 配置内的平台名称和preferedAppPlatform保持一致
		"oauth": {}
	}
}
```

### 新项目的处理

新项目建议将platform统一为app，即建议使用如下配置

```js
// 以下仅列出相关配置
{
	"preferedAppPlatform": "app", // uni-id内部会将收到的app-plus平台全部转化为app平台
	"app": { // 配置内的平台名称和preferedAppPlatform保持一致
		"oauth": {}
	}
}
```

# token令牌

首先解释下token的概念。token是服务器颁发给客户端的一个令牌。

用户在客户端登录时，云端通过登录接口对用户的用户名+密码，或者手机号+验证码进行校验，校验通过后服务器会给客户端下发一个token（就是根据tokenSecret生成的一串加密字符串），并同时给出有效期。

客户端把这个token保存在storage中，然后每次联网请求服务器时，都带上这个token。服务器解密这个token，通过这个token认定客户端的身份。

这样就避免了客户端每次请求服务器，都需要再传输一次用户名和密码。

这是业内通行的设计。

在传统开发下，客户端和服务器各自需要为了token做很多事情。在uni云端一体下，开发者无需操心，只需要在uni-id云端config.json中配置好token的secret和有效期即可。剩余的工作都被自动处理了。

uni-id云端会在login方法成功后自动返回token，uni-app前端框架会自动识别并保存这个token在storage中（uni-id-token），在前端每次连接uniCloud（不管是clientDB、callfunction、云对象调用），都会自动带上这个token。

云函数和云对象都提供了获取和校验token的方法，在uni-id相关业务中，校验token的代码都已经写好。

包括token快到期时的自动续期，开发者只需在config.json中配置好临近多久自动续期，续期的代码也无法开发者编写，框架已经内置。

注：不同平台的token有效期一般不一样，app有效期较长，web有效期较短。每个平台的有效期都可以单独在config.json里配置。

# 用户角色权限@rbac

为什么需要角色权限管理？
- 企业管理系统，比如[uniCloud admin](/uniCloud/admin)，除了超级管理员，不同账号通常需根据职位、责任设定不同的系统权限。比如部门管理员、Hr。
- [clientDB](/uniCloud/database)允许前端直接操作数据库，但部分字段应该是系统计算或管理员设置的，比如文章的阅读数、收藏数及是否加精置顶，这些字段不允许普通用户在前端通过clientDB直接修改，此时也需要通过权限控制来保证系统的安全稳定。 

`uni-id`基于经典的RBAC模型实现了角色权限系统。

## RBAC模型简介

RBAC：Role-Based Access Control，基于角色的访问控制。

其基本思想：对系统操作的各种权限不是直接授予具体的用户，而是在用户集合与权限集合之间建立一个角色集合。每一种角色对应一组相应的权限。一旦用户被分配了适当的角色后，该用户就拥有此角色的所有权限。

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/431878b0-0ca0-11eb-8a36-ebb87efcf8c0.png)

这样做的好处是，增强系统管理的扩展性，对于批量用户的权限变更，仅需变更该批用户角色对应权限即可，而无需对该批每个用户变更权限。

这个模型有三个关键名词：用户、角色、权限：
- 用户：使用系统的人，一个用户可以同时有多个角色，比如内容审核员、比如部门管理员
- 角色：权限的集合，一个角色可以有多个权限。比如内容审核员这个角色，有隐藏帖子权限、有帖子加精权限；而部门管理员这个角色，有给本部门新增员工权限、有删除本部门员工的权限。
- 权限：数据权限或业务权限，例如：删除用户、帖子加精等

用户、角色、权限都存在数据库了，都可以动态创建和修改。当权限对应的代码实现完成后，用户的新入、退出、角色升迁都无需再修改代码，在uni-admin后台的web界面可以由运维人员可视化的给每个用户调整角色、给每个角色调整权限。

## 用户

用户信息存储在`uni-id-users`表中，然后通过`role`字段保存该用户所拥有的所有角色ID，角色ID即角色表（`uni-id-roles`表）中的`role_id`字段，注意不是`_id`字段。

``` json
// uni-id-users 表
{
  {
    "_id":"5f8428181c229600010389f6",
    "username":"张三",
    "email":"zhangsan@dcloud.io",
    "role":[
      "USER_ADMIN",
      "NOTICE_ADMIN"
    ],
    "created_date":1602495783272
  }  
}
```

>Tips：将用户角色设计为用户表的字段，而没有新建`用户角色关联表`的原因：避免mongodb在跨表查询时的性能开销

## 角色

角色信息存储在`uni-id-roles`表中

| 字段				| 类型			| 必填| 描述																	|
| ----------	| ---------	| ----| --------------------------------------|
| \_id				| Object ID	| 是	| 系统自动生成的Id											|
| role_id			| String		| 是	| 角色唯一标识													|
| role_name		| String		| 否	| 角色名，展示用												|
| permission	| Array			| 是	| 角色拥有的权限列表										|
| comment			| String		| 否	| 备注																	|
| created_date| Timestamp	| 是	| 角色创建时间													|

其中：
- `role_id`为角色标志，全局唯一，可用于clientDB中的权限控制，建议按照语义化命名，例如：`USER_ADMIN`表示人事管理、`NOTICE_ADMIN`表示公告管理
- `permission`为数组类型，存储该角色拥有的所有权限ID，权限ID即权限表（`uni-id-permissions`表）中的`permission_id`字段，注意不是`_id`字段

如下为示例：

```js
{
  {
    "_id":"5f8428181c229600010389f6",
    "role_id":"USER_ADMIN",
    "role_name":"人事管理",
    "permission":[
      "USER_ADD",
      "USER_EDIT",
      "USER_DEL"
    ],
    "created_date":1602495783272
  },
  {
    "_id":"5f842836d8daea0001906785",
    "role_id":"NOTICE_ADMIN",
    "role_name":"公告管理",
    "permission":[
      "NOTICE_ADD",
      "NOTICE_EDIT",
      "NOTICE_DEL"
    ],
    "created_date":1602495784372
  }  
}
```

如下是角色在clientDB中的配置示例：

```js
// uni-id-users.schema.json
{
  "permission": {
    "update":"doc._id == auth.uid || 'USER_ADMIN' in auth.role" //用户自己或人事管理员可执行用户表的.update操作
  } 
}
```

>Tips1：uni-id中`admin`为超级管理员角色，uni-clientDB也基于同样的策略；如果用户角色包含`admin`，则该用户就拥有所有数据表的全部权限。

>Tips2：出厂时可内置常用角色，也可上线后由运营人员动态创建角色。

## 权限

权限信息在`uni-id-permissions`表中，表结构定义如下：

| 字段						| 类型			| 必填| 描述																	|
| ----------			| ---------	| ----| --------------------------------------|
| \_id						| Object ID	| 是	| 系统自动生成的Id											|
| permission_id		| String		| 是	| 权限唯一标识													|
| permission_name	| String		| 否	| 权限名，展示用												|
| comment					| String		| 否	| 备注																	|
| created_date		| Timestamp	| 是	| 权限创建时间													|

其中，`permission_id`为权限标志，全局唯一，可用于clientDB中的权限配置，建议按照语义化命名，例如：`USER_DEL`、`BRANCH_ADD`。**权限总数量不得超过500**

如下为示例内容：

```js
{
  {
    "_id":"5f8428181c229600010389f6",
    "permission_id":"USER_EDIT",
    "permission_name":"修改用户",
    "created_date":1602495783272
  },
  {
    "_id":"5f842836d8daea0001906785",
    "permission_id":"USER_DEL",
    "permission_name":"删除用户",
    "created_date":1602495784372
  }  
}
```

如下是权限在clientDB中的配置示例：

```js
// uni-id-users.schema.json
{
  "permission": {
    "update":"doc._id == auth.uid || 'USER_EDIT' in auth.permission" //用户自己或有`USER_EDIT`权限的用户，可执行用户表的.update操作
  }
}
```

>Tips1：建议代码交付时内置所有权限，方便clientDB中的权限配置和调整。

## 其他说明

uni-id针对角色权限模块封装了丰富的API，比如：获取用户角色、获取某角色下的所有权限等，详情参考：[角色权限API](uniCloud/uni-id.md?id=rbac-api)。

> 自`uni-id 3.0.0`起，支持在token内缓存用户的角色权限，默认开启此功能，各登录接口的needPermission参数不再生效。如需关闭请在config内配置`"removePermissionAndRoleFromToken": true`。详情参考：[缓存角色权限](uniCloud/uni-id?id=cache-permission-in-token)。

如果不在token内缓存角色权限，可以使用以下方式，在checkToken时返回数据库内对应用户的角色权限信息。

uni-id登录注册接口可接收`needPermission`参数，若`needPermission`配置为true时，后续会在`checkToken`接口返回用户权限列表（permission）。如下是通过token判断权限的简单示例：

```js
// 简单的权限校验示例
function hasPermission(token, permission) {
  const checkTokenRes = await uniID.checkToken(token)
  return checkTokenRes.permission.includes(permission)
}
```

注意：**在uniCloud admin中，封装了可视化的用户、权限、角色的管理，新增删除修改均支持。**无需自己维护。[详见](https://uniapp.dcloud.net.cn/uniCloud/admin?id=mutiladmin)

# 数据库结构@db-schema

`uni-id`的所有数据表，都在[opendb](https://gitee.com/dcloud/opendb/)规范中。

在unicloud [web控制台](https://unicloud.dcloud.net.cn/) 新建数据表时，可以从`uni-id`的模板分类里找到下面的表，并一键创建这些表。

## 用户表@user-table

表名：`uni-id-users`

| 字段				| 类型		| 必填	| 描述														|
| ----------------	| ---------	| ----	| -------------------------------------------				|
| \_id				| Object ID	| 是	| 存储文档 ID（用户 ID），系统自动生成						|
| username			| String	| 否	| 用户名，不允许重复										|
| password			| String	| 否	| 密码。加密存储											|
| nickname			| String	| 否	| 用户昵称													|
| gender			| Integer	| 否	| 用户性别：0 未知 1 男性 2 女性							|
| role				| Array		| 否	| 用户角色列表，由role_id组成的数组							|
| status			| Integer	| 是	| 用户状态：0 正常，1 禁用，2 审核中，3 审核拒绝，4 已注销	|
| dcloud_appid		| Array		| 否	| 允许登录的客户端的appid列表，不同应用同时复用一个user表时适用，比如	司机端和乘客端是2个appid，在登陆时可以隔离，[详见](uniCloud/uni-id?id=isolate-user)|
| mobile			| String	| 否	| 手机号码													|
| mobile_confirmed	| Integer	| 否	| 手机号验证状态：0 未验证 1 已验证，未验证用户不可登录		|
| email				| String	| 否	| 邮箱地址													|
| email_confirmed	| Integer	| 否	| 邮箱验证状态：0 未验证 1 已验证，未验证用户不可登录		|
| avatar			| String	| 否	| 头像地址													|
| wx_unionid		| String	| 否	| 微信unionid												|
| wx_openid			| Object	| 否	| 微信各个平台openid										|
| ali_openid		| String	| 否	| 支付宝平台openid											|
| apple_openid		| String	| 否	| 苹果登录openid
| comment			| String	| 否	| 备注														|
| realname_auth		| Object	| 否	| 实名认证信息												|
| register_date		| Timestamp	| 否	| 注册时间													|
| register_ip		| String	| 否	| 注册时 IP 地址，`uni-id 3.3.14`起移至register_env内		|
| last_login_date	| Timestamp	| 否	| 最后登录时间												|
| last_login_ip		| String	| 否	| 最后登录时 IP 地址										|
| login_ip_limit	| Array		| 否	| 登录 IP 限制												|
| inviter_uid		| Array		| 否	| 邀请人uid，按层级从下往上排列的uid数组，即第一个是直接上级|
| my_invite_code	| String	| 否	| 用户自己的邀请码											|
| register_env		| Object	| 否	| 用户注册时的环境信息，新增于`uni-id 3.3.14`				|

**注意**

- 最后登录时间、IP，并非只有登录操作会修改，token刷新时也会修改最后登录时间、ip。应用启动时若token有效则不会触发登录行为，也不会更新本值。

**wx_openid字段定义**

| 字段		| 类型	| 必填	| 描述					|
| -------	| ------| ----	| --------				|
| app-plus	| String| 否	| app平台微信openid		|
| mp-weixin	| String| 否	| 微信小程序平台openid	|
| h5-web	| String| 否	| 微信网页应用openid	|
| h5-weixin	| String| 否	| 微信公众号应用openid	|

**realNameAuth 扩展字段定义**
该字段存储实名认证信息，子节点说明如下。

| 字段            | 类型      | 必填 | 描述                                                |
| --------------- | --------- | ---- | --------------------------------------------------- |
| type            | Integer   | 是   | 用户类型：0 个人用户 1 企业用户                     |
| auth_status     | Integer   | 是   | 认证状态：0 未认证 1 等待认证 2 认证通过 3 认证失败 |
| auth_date       | Timestamp | 否   | 认证通过时间                                        |
| real_name       | String    | 否   | 真实姓名/企业名称                                   |
| identity        | String    | 否   | 身份证号码/营业执照号码                             |
| id_card_front   | String    | 否   | 身份证正面照 URL                                    |
| id_card_back    | String    | 否   | 身份证反面照 URL                                    |
| id_card_in_hand | String    | 否   | 手持身份证照片 URL                                  |
| license         | String    | 否   | 营业执照 URL                                        |
| contact_person  | String    | 否   | 联系人姓名                                          |
| contact_mobile  | String    | 否   | 联系人手机号码                                      |
| contact_email   | String    | 否   | 联系人邮箱                                          |

**job 扩展字段定义**

| 字段    | 类型   | 必填 | 描述     |
| ------- | ------ | ---- | -------- |
| company | String | 否   | 公司名称 |
| title   | String | 否   | 职位     |

**register_env字段定义**

**注意：调用addUser添加的用户无此字段**

| 字段			| 类型	| 必填	| 描述												|
|--				|--		|--		|--													|
|appid			|String|否		|注册时的客户端appId								|
|uni_platform	|String	|否		|注册时的客户端平台，如h5、app、mp-weixin等			|
|os_name		|String	|否		|注册时的客户端系统名，ios、android、windows、mac、linux	|
|app_name		|String	|否		|注册时的客户端名称									|
|app_version		|String	|否		|注册时的客户版本									|
|app_version_code	|String	|否		|注册时的客户版本号									|
|channel		|String	|否		|注册时的客户端启动场景（小程序）或应用渠道（app）	|
|client_ip		|String	|否		|注册时的客户端IP									|


用户集合示例：

```
{
  "_id": "f2a60d815ee1da3900823d45541bb162",
  "username": "姓名"
  "password": "503005d4dd16dd7771b2d0a47aaef927e9dba89e",
  "status":0,//用户状态：0正常 1禁用 2审核中 3审核拒绝
  "mobile":"",
  "mobile_confirmed":0, //手机号是否验证，0为未验证，1为已验证
  "email":"amdin@domain.com",
  "email_confirmed":0, //邮箱是否验证，0为未验证，1为已验证
  "avatar":"https://cdn.domain.com/avatar.png"
  "register_ip": "123.120.11.128", //注册IP
  "last_login_ip": "123.120.11.128", //最后登录IP

}
```

**如果需要管理多系统的用户，建议使用type在uni-id-users表内进行区分，不要分多个表**

### 用户表索引使用注意@uni-id-users-indexes

目前opendb内提供的uni-id-users表包含完整的索引，数据库在索引量多且频繁更新的情况下可能会出现写入缓慢的情况，因此推荐开发者在使用uni-id-users表时可以删除没有用到的索引。

例：项目内只使用了微信登录，不使用其他登录方式，可以只保留`wx_unionid、wx_openid.mp-weixin、wx_openid.app-plus`这些账号相关的索引，删除其他登录方式的索引（比如username、mobile）

不了解索引请参考：[索引](/uniCloud/db-index.html)

## 验证码表

表名：`opendb-verify-codes` 

**uni-id 2.0.0版本以前，使用的表名为uni-verify，2.0.0+起改为新表名**

该表的前缀不是uni-id，意味着该表的设计用途是通用的，不管是uni-id的手机号验证码，或者支付等关键业务需要验证码，都使用此表。

每条验证信息，都记录在本表中。uni-id不会自动删除本表的历史数据，数据保留有效期需要开发者自行管理，可以在云函数中设置一个定时运行来清理过期数据。

| 字段       | 类型      | 必填 | 描述                                   |
| ---------- | --------- | ---- | -------------------------------------- |
| \_id       | Object ID | 是   | 存储文档 ID（验证码 ID），系统自动生成 |
| mobile     | String    | 是   | 手机号，和邮箱二选一                 |
| email      | String    | 是   | 邮箱，和手机号二选一                  |
| code       | String    | 是   | 验证码                                 |
| type       | String   | 是   | 验证类型：login, bind, unbind, pay     |
| state      | Integer   | 是   | 验证状态：0 未验证 1 已验证 2 已作废    |
| ip         | String    | 是   | 请求时 IP 地址                         |
| created_at | Timestamp | 是   | 创建时间                               |
| expired_at | Timestamp | 是   | 验证码过期时间                         |

## 角色表

表名：`uni-id-roles`

| 字段				| 类型			| 必填| 描述																	|
| ----------	| ---------	| ----| --------------------------------------|
| \_id				| Object ID	| 是	| 系统自动生成的Id											|
| role_id			| String		| 是	| 角色唯一标识													|
| role_name		| String		| 否	| 角色名，展示用												|
| permission	| Array			| 是	| 角色拥有的权限列表										|
| comment			| String		| 否	| 备注																	|
| created_date| Timestamp	| 是	| 角色创建时间													|

## 权限表

表名：`uni-id-permissions`

| 字段						| 类型			| 必填| 描述																	|
| ----------			| ---------	| ----| --------------------------------------|
| \_id						| Object ID	| 是	| 系统自动生成的Id											|
| permission_id		| String		| 是	| 权限唯一标识													|
| permission_name	| String		| 否	| 权限名，展示用												|
| comment					| String		| 否	| 备注																	|
| created_date		| Timestamp	| 是	| 权限创建时间													|

## 更多表

还有更多uni-id的配套数据表，可以在uniCloud [web控制台](https://unicloud.dcloud.net.cn/)新建表时选择相应模板。此处不再详述，仅罗列清单：

- 积分表：uni-id-scores
- 地址信息表：uni-id-address
- 订单表：uni-id-base-order
- 设备表：uni-id-device
- 关注粉丝表：uni-id-followers
- 日志表：uni-id-log
- 任务表：uni-id-task
- 任务日志表：uni-id-task-log


# uni-id公共模块的API列表@api

`uni-id`公共模块提供了各种API，供云函数/云对象调用。

一般开发者无需了解uni-id公共模块的API，直接使用[uni-id-pages]()即可（**需要补充链接**）。

如果想了解uni-id公共模块内部实现，可以阅读本章节。

## 基础功能@base

### 创建uni-id实例@create-instance

> uni-id 3.0.7及以上版本

用法：`uniID.createInstance(Object CreateInstanceParams);`

CreateInstanceParams内可以传入云函数context，自`uni-id 3.3.13`起，也可以传入clientInfo参数，作用和context类似。方便在云对象内获取clientInfo后直接传入，[什么是云对象？](uniCloud/cloud-obj.md)。

```js
// 云函数代码，传入context
const uniID = require('uni-id')
exports.main = async function(event,context) {
  context.APPID = '__UNI__xxxxxxx' // 替换为当前客户端的APPID，通过客户端callFunction请求的场景可以使用context.APPID获取
  context.PLATFORM = 'h5' // 替换为当前客户端的平台类型，通过客户端callFunction请求的场景可以使用context.PLATFORM获取
  context.LOCALE = 'zh-Hans' // 替换为当前客户端的语言代码，通过客户端callFunction请求的场景可以使用context.LOCALE获取
  const uniIDIns = uniID.createInstance({ // 创建uni-id实例，其上方法同uniID
    context: context,
    // config: {} // 完整uni-id配置信息，使用config.json进行配置时无需传此参数
  })
  payload = await uniIDIns.checkToken(event.uniIdToken) // 后续使用uniIDIns调用相关接口
  if (payload.code) {
  	return payload
  }
  const res = await uniIDIns.updateUser({
    uid: payload.uid,
    nickname: 'user nickname'
  })
  return res
}

// 云对象代码传入clientInfo
const uniID = require('uni-id')
module.exports = {
	_before() {
		const clientInfo = this.getClientInfo()
		this.uniID = uniID.createInstance({ // 创建uni-id实例，其上方法同uniID
			clientInfo
		})
	},
	login() {
		// ...
		// this.uniID.login()
	}
}
```

**为什么需要自行创建uni-id实例**

默认情况下uni-id某些接口会自动从全局context内获取客户端的PLATFORM（平台，如：app-plus、h5、mp-weixin）信息。

在单实例多并发的场景下可能无法正确获取（全局对象会被后面的请求覆盖，可能会导致前面一次请求使用了后面一次请求的PLATFORM信息）。因此推荐在开启云函数单实例多并发后，自行为uni-id传入context。

此外云函数url化时无法获取客户端信息，也需要使用这种方式将客户端信息传入uni-id。

### 用户注册 @register
用户注册就是将客户端用户输入的用户名和密码，经服务端：
1. 校验用户名是否与已经注册的用户名重复，如果重复就返回错误
2. 加密密码
3. 生成token
最后将`用户名` `密码` `token`存储到数据库并返回token、uid等响应参数（详见下文“响应参数”表）的过程。

如上操作uni-id的注册api内部会自动完成
用法`uniID.register(Object RegisterParams)`

**注意**

- 注册成功之后会返回token、tokenExpired，在获取token之后应进行持久化存储，详情参考：[保存token及其有效期](uniCloud/uni-id.md?id=save-token)

**参数说明**

| 字段					| 类型		| 必填| 说明																																					|
| ---						| ---			| ---	| ---																																						|
| username			| String	| 是	|用户名，唯一																																		|
| password			| String	| 是	|密码																																						|
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission）。`uni-id 3.0.0`起，如果配置`"removePermissionAndRoleFromToken": false`此选项不再生效	|
| myInviteCode	| String	| 否	|自行设置用户的邀请码																														|
| role	| Array	| 否	|设定用户角色												|

RegisterParams不仅支持如上列举字段，可以根据需要自定义更多字段。比如：直接传入mobile即可设置手机号码，**注意：切勿直接传入客户端传来的参数，否则这是一个极大的安全问题**

username可以是字符串、可以是email、可以是手机号，本插件不约束，开发者可以自己定。如果使用登录接口时希望可以同时使用username、email、手机号登录，那么切记username不可以和手机号、email拥有相同格式，否则可能出现某一串字符串是一个用户的username同时又是另一个用户的email或者手机号的情况。

比如要求username为手机号，则自行在前端界面上做好提示，在后台对格式进行校验。

password入库时会自动进行一次sha1加密，不明文存储密码。这是一种单向不可逆加密方式，强度高于md5，密钥是开发者在config.json里自行配置的passwordSecret。

即用户注册时输入的密码，通过密钥passwordSecret使用sha1算法加密，然后再入库。

由于是不可逆加密，理论上数据库泄露或passwordSecret泄露都不会造成用户的真实密码被泄露。

但任何加密算法，在撞库等暴力手段面前被攻破只是时间和算力问题。使用自己特定的而不是默认的passwordSecret，并保护好passwordSecret可以数倍提升破解的算力代价。

uni-id公共模块没有限制密码的强度，如长度限制、是否包含大小写或数据等限制，这类限制需要开发者自行在云函数中处理。

**响应参数**

| 字段				| 类型	| 必填| 说明															|
| ---					| ---		| ---	| ---																|
| code				| Number| 是	|错误码，0表示成功									|
| message			| String| 是	|详细信息														|
| uid					| String| -		|用户id															|
| token				| String| -		|注册完成自动登录之后返回的token信息|
| tokenExpired| String| -		|token过期时间											|

**示例代码**

```js
// 云函数register的代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		username,
		password
	} = event
  //自己额外增加的校验密码规范的逻辑（可选）
  //强弱密码校验,密码至少包含大写字母，小写字母，数字，且不少于6位
  if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/.test(password)){
    return {
      code: 401,
      msg: '密码至少包含大写字母，小写字母，数字，且不少于6位'
    }
  }
	// 自动验证用户名是否与已经注册的用户名重复，如果重复会直接返回错误。否则会自动生成token并加密password存储username、password、token到数据表uni-id-users，并返回如上响应参数
	const res = await uniID.register({ //支持传入任何值，比如可以直接传入mobile即可设置手机号码，切勿直接传入event否则这是一个极大的安全问题
	    username,
	    password
	})
	return res
}
```

```js
// 客户端代码
uniCloud.callFunction({
	name: 'register',
	data: {
		username: 'username',
		password: 'user password'
	},
	success(res){
		if(res.result.code === 0) {
			// 2.8.0版本起调整为蛇形uni_id_token（调整后在一段时间内兼容驼峰uniIdToken）
			uni.setStorageSync('uni_id_token',res.result.token)
			uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired)
			// 其他业务代码，如跳转到首页等
			uni.showToast({
				title: '注册成功',
				icon: 'none'
			})
		} else {
			uni.showModal({
				content: res.result.message,
				showCancel: false
			})
		}
	},
	fail(){
		uni.showModal({
			content: '注册失败，请稍后再试',
			showCancel: false
		})
	}
})
```


### 用户登录 @login

登录就是通过查询数据库验证，客户端传递的“用户名”和“密码”是否匹配并返回token、uid等响应参数（详见下文“响应参数”表）的过程。
如果你允许用户同时使用多种方式登录，需要注意：必须限制用户注册用户名不为邮箱格式且不为手机号格式，uni-id内部并未做出此类限制。否则用户可以使用他人的手机号码作为用户名注册账号，这就成了一个漏洞。具体做法可以参考[云端一体应用快速开发模版"uniStarter"](https://ext.dcloud.net.cn/plugin?id=5057)

用法：`uniID.login(Object LoginParams)`

**注意**

- 登录成功之后会返回token、tokenExpired，在获取token之后应进行持久化存储，详情参考：[保存token及其有效期](uniCloud/uni-id.md?id=save-token)
- 登录时请注意自行验证数据有效性

**参数说明**

| 字段		| 类型	| 必填	| 说明	|
| ---		| ---	| ---	| ---	|
| username	| String| 是	|用户名	|
| password	| String| 是	|密码	|
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission）。`uni-id 3.0.0`起，如果配置`"removePermissionAndRoleFromToken": false`此选项不再生效	|
| queryField	| Array| 否	|指定从哪些字段中比对username（传入参数均为username），不填默认与数据库内的username字段对比, 可取值'username'、'email'、'mobile'|

**注意**

- 使用邮箱时需要用户对应的记录里`email_confirmed`为1才可以登录，手机号同样需要`mobile_confirmed`为1才可以登录

**响应参数**

| 字段				| 类型	| 必填| 说明											|
| ---					| ---		| ---	| ---												|
| uid					| String| 是	|用户Id											|
| userInfo		| Object| 是	|用户全部信息								|
| code				| Number| 是	|错误码，0表示成功					|
| message					| String| 是	|详细信息										|
| token				| String| -		|登录成功之后返回的token信息|
| tokenExpired| String| -		|token过期时间							|

**示例代码**

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		username,
		password
	} = event
	// 自动完成username、password验证是否合法的逻辑
	const res = await uniID.login({
		username,
		password,
    queryField: ['username', 'email', 'mobile']
	})
	return res
}
```

### token校验@checktoken
一个校验客户端发起请求（uniCloud.callFunction）自带的uniIdToken，获得用户的uid、token、token的过期时间、角色、权限、用户信息(uni-id-users全部字段)的API。

这是非常高频且重要的API通常用于换取操作当前云函数的用户Id。

#### 思考
如果你并没有服务端开发经验，可能会想：为什么需要通过token去换取用户Id，而不是让客户端直接传递用户Id更方便？
这里就涉及到安全问题，有一句话叫做：“前端传递的参数都是不可信任的”。比如：你去银行取款，柜台会要求出示你的身份证来证明你是谁，而不是你直接告诉银行柜台你是谁就管用。否则这是一个极大的安全漏洞。
综上所述：所有服务端操作涉及账户信息相关内容，都需要使用token来获得，而不是使用前端传递的参数。

用法：`uniID.checkToken(String token, Object checkTokenOptions)`

**参数说明**

| 字段							| 类型	| 必填| 说明												|
| ---								| ---		| ---	| ---													|
| token							| String| 是	|客户端callFunction带上的token|
| checkTokenOptions	| Object| 是	|checkToken选项`uni-id 3.0.0`版起支持								|

**checkTokenOptions说明**

| 字段					| 类型		| 必填| 默认值|说明													|
| ---						| ---			| ---	|---		| ---													|
| needPermission| Boolean	| 否	|false		|是否需要返回角色权限，请阅读下方说明|
| needUserInfo | Boolean	| 否	|true			|是否需要返回用户信息。|

**说明**

- `needPermission`参数仅对token内未缓存角色权限且token内不包含needPermission的场景生效。
- 如果在token内缓存角色权限，建议将此`needUserInfo`参数配置为`false`
- 角色内包含admin时返回的permission是一个空数组，因此判断一个用户是否有权限时应注意admin角色额外进行判断

请务必阅读一下此文档：[关于缓存角色权限的说明](uniCloud/uni-id.md?id=cache-permission-in-token)

**响应参数**

| 字段				| 类型			| 说明																																																										|
| ---					| ---				| ---																																																											|
| code				| Number		|错误码，0表示成功																																																				|
| message			| String		|详细信息																																																									|
| uid					| String		|用户Id，校验成功之后会返回																																																|
| token				| String		|新增于uni-id 1.1.7版本，用户token快要过期时，新生成的token，只有在config内配置了`tokenExpiresThreshold`的值时才会有此行为|
| tokenExpired| TimeStamp	|新增于uni-id 1.1.7版本，新token的过期时间																																								|
| role				| Array			|新增于uni-id 1.1.9版本，用户角色列表。`uni-id 3.0.0`以上版本传入`needPermission:true`时返回此字段																																											|
| permission	| Array			|新增于uni-id 1.1.9版本，用户权限列表，只有登录操作时传入needPermission才会返回，否则为空数组。`uni-id 3.0.0`以上版本传入`needPermission:true`时返回此字段															|
| userInfo		| Object		|用户信息，uid对应的uni-id-users全部字段。		|


uni-id使用jwt生成token，jwt所生成的token包含三部分，其中存储的信息为明文信息，uni-id只根据tokenSecret来校验客户端token是否合法。

`uni-id 3.0.0`之前的版本，checkToken必然会查询数据库进行token合法性校验。

`uni-id 3.0.0`起，默认情况下不再查库校验token，角色权限将被缓存在token中，此举能减少或消除checkToken的查库次数（有效节省费用、减少响应时间）。
如需关闭此行为需在config内配置`removePermissionAndRoleFromToken:true`。

更多关于`removePermissionAndRoleFromToken`的说明见：[缓存角色权限](https://uniapp.dcloud.io/uniCloud/uni-id?id=cachepermissionintoken)

**注意：**

- 客户端会自动查找storage内的token在callFunction时插入
- HBuilderX 2.9.5+ 客户端允许开发者自行传入uniIdToken，此时不再从storage获取token
- HBuilderX 2.8.0版本起token存储在storage内推荐使用使用蛇形`uni_id_token`，会在一段时间内兼容驼峰形式`uniIdToken`

**示例代码**

```js
// 云函数list-news代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const payload = await uniID.checkToken(event.uniIdToken)
  const {
    code,
    token,
    tokenExpired
  } = payload
  if(code) { // code不为0代表token校验未通过
    return payload
  }
  // 其他业务代码
  return {
    token,
    tokenExpired
  }
}

// 下面仅为简单示例，可以参考uniCloud admin里面的request进行封装 https://ext.dcloud.net.cn/plugin?id=3268
// 客户端代码
uniCloud.callFunction({
  name: 'list-news',
  data : {}
}).then(res => {
  const {
    token,
    tokenExpired
  } = res.result
  if(token) {
    uni.setStorageSync('uni_id_token', token)
    uni.setStorageSync('uni_id_token_expired', tokenExpired)
  }
  // 其他逻辑...
})

```

### 主动刷新token@refresh-token

> 新增于uni-id 3.3.14

用法：`uniID.refreshToken(Object RefreshTokenParams);`

**参数说明**

| 字段| 类型	| 必填| 说明	|
| ---	| ---		| ---	| ---		|
| token	| String| 是	|用户token|

**示例**

```js
const {
  token,
  tokenExpired
} = await uniID.refreshToken({
  token: 'xxx'
})
```

**注意**

- 刷新token后会在再次触发查库校验token时使token失效

### 登出@logout

登出就是一个验证客户端uniCloud.callFunction自带的uniIdToken通过token校验并获取uid，将对应uid的用户的token清除的过程（uniID登出api内部会自动完成，你传入uniIdToken即可）。

用法：`uniID.logout(String token);`

**注意**

- 登出成功之后应删除持久化存储的token，参考：[客户端删除token及其有效期](uniCloud/uni-id?id=remove-token)

**参数说明**

| 字段| 类型	| 必填| 说明	|
| ---	| ---		| ---	| ---		|
| token	| String| 是	|用户token|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

**示例代码**

```js
// 云函数logout代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.logout(event.uniIdToken)
	return res
}

```

### 生成token@createtoken

注意createToken接口不会将生成的token存库，只是生成token而已

用法：`uniID.createToken(Object CreateTokenParams)`

**参数说明**

| 字段					| 类型		| 必填| 说明																		|
| ---						| ---			| ---	| ---																			|
| uid						| String	| 是	|用户Id																		|
| needPermission| Boolean	| 否	|标识是否需要在checkToken时返回permission	|
| role					| Array		| 否	|指定缓存在token内的角色									|
| permission		| Array		| 否	|指定缓存在角色内的权限										|

**响应参数**

| 字段				| 类型	| 必填| 说明										|
| ---					| ---		| ---	| ---											|
| token				| String| 是	|生成的token							|
| tokenExpired| Number| 是	|token过期时间对应的时间戳|

**说明**

- uni-id 3.0.0起默认缓存角色权限到token内，此功能生效时`needPermission`参数不在需要。如需调用createToken接口请自行传入role、permission


### 修改密码 @update-password

用法：`uniID.updatePwd(Object UpdatePwdParams)`

**参数说明**

| 字段								| 类型	| 必填| 说明													|
| ---									| ---		| ---	| ---														|
| uid									| String| 是	|用户Id，可以通过checkToken返回	|
| oldPassword					| String| 是	|旧密码													|
| newPassword					| String| 是	|新密码													|

**响应参数**

| 字段	| 类型	| 必填	| 说明						|
| ---	| ---	| ---	| ---						|
| code	| Number| 是	|错误码，0表示成功			|
| message	| String| 是	|详细信息					|

**注意：修改密码会导致所有token失效**

**示例代码**

```js
// 云函数update-pwd代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		oldPassword,
		newPassword,
		passwordConfirmation
	} = event
	// 校验新密码与确认新密码是否一致
  
  const payload = await uniID.checkToken(event.uniIdToken)
  if(payload.code) {
    return payload
  }
  
	const res = await uniID.updatePwd({
    uid: payload.uid,
		oldPassword,
		newPassword
	})
	return res
}
```

### 重置密码 @reset-password

用法：`uniID.resetPwd(Object ResetPwdParams)`

**参数说明**

| 字段								| 类型	| 必填| 说明													|
| ---									| ---		| ---	| ---														|
| uid									| String| 是	|用户Id，可以通过checkToken返回	|
| password					| String| 是	|重置后的密码													|

**响应参数**

| 字段	| 类型	| 必填	| 说明						|
| ---	| ---	| ---	| ---						|
| code	| Number| 是	|错误码，0表示成功			|
| message	| String| 是	|详细信息					|

**注意：重置密码会导致所有token失效**

**示例代码**

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
  const payload = await uniID.checkToken(event.uniIdToken)
  if(payload.code) {
    return payload
  }
  
	const res = await uniID.resetPwd({
    uid: payload.uid,
		password: '12345678'
	})
	return res
}
```

### 使用短信验证码重置密码@reset-pwd-by-sms

> 新增于 uni-id 3.3.14

用法：`uniID.resetPwdBySms(Object ResetPwdBySmsParams)`

**参数说明**

| 字段		| 类型	| 必填	| 说明			|
| ---		| ---	| ---	| ---			|
| mobile	| String| 是	|手机号码		|
| code		| String| 是	|验证码			|
| password	| String| 是	|重置后的密码	|

**响应参数**

无

**注意**

- 对应发送短信验证码接口`type`为`reset-pwd`

### 加密密码 @encrypt-password

用法：`uniID.encryptPwd(String password)`

**参数说明**

| 字段		| 类型	| 必填	| 说明			|
| ---		| ---	| ---	| ---			|
| password	| String| 是	|要加密的字符串	|

**响应参数**

| 字段	| 类型	| 必填	| 说明						|
| ---	| ---	| ---	| ---						|
| passwordHash	| String| 是	|加密后的字符串		|

**重要**

`2.0.0`版本起`encryptPwd`接口调整为返回对象。结构如下

```js
{
  passwordHash: 'asdajdoaiojfj', // 存储到数据库的密码
  version: 1 // 密钥版本，关于此字段请参考https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=modifysecret
}
```

**示例代码**

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const encResult = await uniID.encryptPwd('123456')
	return {
    encResult
  }
}
```

### 设置头像

用法：`uniID.setAvatar(Object SetAvatarParams)`

**参数说明**

| 字段	| 类型	| 必填| 说明													|
| ---		| ---		| ---	| ---														|
| uid		| String| 是	|用户Id，可以通过checkToken返回	|
| avatar| String| 是	|用户头像URL										|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

**示例代码**

```js
// 云函数set-avatar代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		avatar
	} = event
  const payload = await uniID.checkToken(event.uniIdToken)
  if(payload.code) {
    return payload
  }
	const res = await uniID.setAvatar({
    uid: payload.uid,
		avatar
	})
	return res
}

```


### 更新用户信息

用法：`uniID.updateUser(Object UpdateUserParams);`

此接口用于在其他接口不满足需求时使用

**参数说明**

| 字段| 类型	| 必填| 说明													|
| ---	| ---		| ---	| ---														|
| uid	| String| 是	|用户Id，可以通过checkToken返回	|
| 其余参数	| Any| 是	|要设置的用户信息	|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
  payload = await uniID.checkToken(event.uniIdToken)
  if (payload.code) {
  	return payload
  }
	const res = await uniID.updateUser({
    uid: payload.uid,
    nickname: 'user nickname'
  })
	return res
}
```

### 获取用户信息

用法：`uniID.getUserInfo(Object GetUserInfoParams);`

此接口用于在其他接口不满足需求时使用

**参数说明**

| 字段	| 类型	| 必填| 说明													|
| ---		| ---		| ---	| ---														|
| uid		| String| 是	|用户Id，可以通过checkToken返回	|
| field	| Array	| 否	|指定返回的字段，不传则返回所有	|

**响应参数**

| 字段		| 类型	| 必填| 说明						|
| ---			| ---		| ---	| ---							|
| code		| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|
| userInfo| Object| 是	|获取的用户信息		|

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
  payload = await uniID.checkToken(event.uniIdToken)
  if (payload.code) {
  	return payload
  }
	const res = await uniID.getUserInfo({
    uid: payload.uid,
    field: ['mobile']
  })
	return res
}
```


### 根据token获取用户信息

自`uni-id 3.0.0`起支持

用法：`uniID.getUserInfoByToken(String token);`

**参数说明**

| 字段	| 类型	| 必填| 说明													|
| ---		| ---		| ---	| ---														|
| token	| String| 是	|用户的token	|

**响应参数**

| 字段			| 类型	| 必填| 说明															|
| ---				| ---		| ---	| ---																|
| code			| Number| 是	|错误码，0表示成功									|
| message		| String| 是	|详细信息														|
| uid				| String| 是	|用户id															|
| role			| Array	| 是	|用户角色列表，需要开启缓存角色权限	|
| permission| Array	| 是	|用户权限列表，需要开启缓存角色权限	|

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.getUserInfoByToken(event.uniIdToken)
	return res
  // res = {
  //   uid: 'xxx',
  //   role: [],
  //   permission: []
  // }
}
```

**注意**

- 此接口仅校验token是否合法，从token中获取用户信息。不查库校验token，也不会查库获取用户信息。适用于不想使用checkToken获取用户信息的场景（checkToken内包含其他逻辑，比如自动刷新token等）

### 添加用户（非注册）@add-user

> 新增于 uni-id 3.3.14

用法：`uniID.addUser(Object AddUserParams);`

**BanAccountParams参数说明**

| 字段			| 类型	| 必填								| 说明								|
| ---			| ---	| ---								| ---								|
| username		| String| username、email、mobile至少有一个	|用户名								|
| mobile		| String| username、email、mobile至少有一个	|手机号								|
| email			| String| username、email、mobile至少有一个	|邮箱								|
| password		| String| 否								|密码								|
| role			| Array	| 否								|角色列表							|
| authorizedApp	| Array	| 否								|此用户能登录的app对应的appId列表	|


**响应参数**

| 字段	| 类型	| 必备	| 说明					|
| ---	| ---	| ---	| ---					|
| uid	| String| 是	|添加用户返回的用户id	|

**注意**

- authorizedApp不传时创建的用户无法登录任一端，后续可以调用授权登录接口再次授权登录
- 传入email、mobile时，自动会将对用的email_confirmed、mobile_confirmed设置为1


### 封禁账户@ban-account

- 由于客户端存在token缓存，执行封禁操作并不会实时生效。用户下次获取token（包括刷新token）时才会出现错误信息

自`uni-id 3.3.8`起支持

用法：`uniID.banAccount(Object BanAccountParams);`

**BanAccountParams参数说明**

| 字段| 类型	| 必填| 说明		|
| ---	| ---		| ---	| ---			|
| uid	| String| 是	|用户的id	|

**响应参数**

| 字段		| 类型					| 必填	| 说明				|
| ---		| ---					| ---	| ---				|
| errCode	| Number &#124; String	| 是	|错误码，0表示成功	|

### 解禁账户@unban-account

自`uni-id 3.3.8`起支持

用法：`uniID.unbanAccount(Object UnbanAccountParams);`

**UnbanAccountParams参数说明**

| 字段| 类型	| 必填| 说明		|
| ---	| ---		| ---	| ---			|
| uid	| String| 是	|用户的id	|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|

### 注销账户@close-account

**注意**

- uni-id不会真的删除用户记录，但是会将用户标记为已注销（用户记录内status为4），同时此用户不可使用同样的用户标识（手机号、邮箱、微信账号等）进行注册或登录。由于用户信息与业务有关联，如需真注销用户逻辑应由开发者自行实现。
- 由于客户端存在token缓存，执行注销操作后应清理用户客户端token。如未清理在用户下次获取token（包括刷新token）时才会出现错误信息

自`uni-id 3.3.8`起支持

用法：`uniID.closeAccount(Object CloseAccountParams);`

**CloseAccountParams参数说明**

| 字段| 类型	| 必填| 说明		|
| ---	| ---		| ---	| ---			|
| uid	| String| 是	|用户的id	|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|

### 取消注销账户@open-account

自`uni-id 3.3.8`起支持

用法：`uniID.openAccount(Object OpenAccountParams);`

**OpenAccountParams参数说明**

| 字段| 类型	| 必填| 说明		|
| ---	| ---		| ---	| ---			|
| uid	| String| 是	|用户的id	|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|


### 自行初始化uni-id@init

> 此接口已废弃，如需自行传入配置请使用uniID.createInstance接口创建uniID实例来使用

用法：`uniID.init(Object InitParams);`

此接口仅适用于不希望使用config.json初始化而是希望通过js的方式传入配置的情况，多数情况下不推荐使用。**如果你要使用clientDB，且必须要用这种方式初始化uni-id，必须在uni-id的config.json内也写上同样的配置。**

**参数说明**

InitParams格式与[config.json](https://uniapp.dcloud.io/uniCloud/uni-id?id=configjson%e7%9a%84%e8%af%b4%e6%98%8e)完全相同

**响应参数**

无

```js
// 云函数代码
const uniID = require('uni-id')
uniID.init({ // 如果在此处传入配置信息则不会再使用config.json作为配置
	"passwordSecret": "passwordSecret-demo", // 用于加密用户密码
	"tokenSecret": "tokenSecret-demo", // 用于生成token
	"tokenExpiresIn": 7200, // token过期时间
	"passwordErrorLimit": 6, // 同一个ip密码错误最大重试次数
	"passwordErrorRetryTime": 3600, // 超过密码重试次数之后的等待时间
	"service": {
		"sms": {
			"name": "your app name", // 应用名称对应uniCloud.sendSms的data参数内的name
			"codeExpiresIn": 180, // 验证码过期时间，单位：秒，只可取60的整数倍，不填此参数时会取默认值180秒
			"smsKey": "your sms key", // 短信密钥key
			"smsSecret": "your sms secret" // 短信密钥secret
		}
	}
})
exports.main = async function(event,context) {
  payload = await uniID.checkToken(event.uniIdToken)
  if (payload.code) {
  	return payload
  }
	const res = await uniID.updateUser({
    uid: payload.uid,
    nickname: 'user nickname'
  })
	return res
}
```

### 客户端保存token及其有效期@save-token

在用户登录/注册成功后应在storage内保存用户的token及其过期时间，示例代码如下：

```js
uni.setStorageSync('uni_id_token', token)
uni.setStorageSync('uni_id_token_expired', tokenExpired)
```

### 客户端删除token及其有效期@remove-token

在用户登出成功之后应删除持久化存储的token及其过期时间，示例代码如下：

```js
uni.removeStorageSync('uni_id_token')
uni.removeStorageSync('uni_id_token_expired')
```

## 手机号码@mobile

### 发送短信验证码@sendsmscode

用法：`uniID.sendSmsCode(Object SendSmsCodeParams)`

**参数说明**

| 字段		| 类型	| 必填	| 说明																											|
| ---		| ---	| ---	| ---																											|
| mobile	| String| 是	|用户手机号																										|
| templateId| String| 是	|`uni-id 1.1.8+`用户自定义模板Id，请使用类似下面模板示例的参数申请模板											|
| code		| String| 否	|验证码字符串																									|
| type		| String| 是	|类型，用于防止不同功能的验证码混用，目前支持的类型`login`登录、`register`注册、`bind`绑定手机、`unbind`解绑手机|

```
// 短信模板示例，请在https://dev.dcloud.net.cn/uniSms申请签名（短信开头中括号内部分）及模板
验证码：${code}，${expMinute}分钟内有效，请勿泄露并尽快验证。
```

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

**示例代码**

```js
// 云函数bind-mobile代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		mobile
	} = event
  // 生成验证码可以按自己的需求来，这里以生成6位数字为例
  const randomStr = '00000' + Math.floor(Math.random() * 1000000)
  const code = randomStr.substring(randomStr.length - 6)
	const res = await uniID.sendSmsCode({
		mobile,
    code,
    type: 'login'
	})
	return res
}

```

### 设置验证码@setVerifyCode
如果使用`uni-id`的sendSmsCode发送短信的话会自动设置验证码（在数据表：`opendb-verify-codes`添加一条记录)，否则你需要使用此接口自行在库中设置验证码。

用法：`uniID.setVerifyCode(Object SetVerifyCodeParams)`

**参数说明**

| 字段			| 类型	| 必填| 说明																																													|
| ---				| ---		| ---	| ---																																														|
| mobile		| String| 是	|用户手机号，和邮箱二选一																																										|
| email		| String| 是	|用户邮箱，和手机号二选一																																										|
| code			| String| 是	|验证码字符串																																										|
| expiresIn	| Number| 是	|验证码过期时间，单位秒																																					|
| type			| String| 是	|类型，用于防止不同功能的验证码混用，目前支持的类型`login`登录、`register`注册、`bind`绑定手机、`unbind`解绑手机|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

**示例代码**

```js
// 云函数bind-mobile代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		mobile
	} = event
  // 生成验证码可以按自己的需求来，这里以生成6位数字为例
  const randomStr = '00000' + Math.floor(Math.random() * 1000000)
  const code = randomStr.substring(randomStr.length - 6)
	const res = await uniID.setVerifyCode({
		mobile,
    code,
    expiresIn: 180,
    type: 'login'
	})
	return res
}

```

### 校验验证码@verifyCode
一个查库校验：由`uni-id`的sendSmsCode发送短信自动设置或调用uniID.setVerifyCode手动设置的验证码的API

uni-id内置方法`loginBySms`、`bindMobile`、`unbindMobile`均已内置校验验证码方法，如果使用以上方法不需要再调用此接口，如需扩展类型请确保type和发送验证码/设置验证码时对应

用法：`uniID.verifyCode(Object VerifyCodeParams)`

**参数说明**

| 字段	| 类型	| 必填| 说明																																													|
| ---		| ---		| ---	| ---																																														|
| mobile| String| 是	|用户手机号，和邮箱二选一																																				|
| email	| String| 是	|用户邮箱，和手机号二选一																																				|
| code	| String| 是	|验证码字符串																																										|
| type	| String| 是	|类型，用于防止不同功能的验证码混用，目前支持的类型`login`登录、`register`注册、`bind`绑定手机、`unbind`解绑手机|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

**示例代码**

```js
// 云函数bind-mobile代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		mobile,
    code
	} = event
	const res = await uniID.verifyCode({
		mobile,
    code,
    type: 'login'
	})
	return res
}

```

### 手机号验证码直接登录

用法：`uniID.loginBySms(Object LoginBySmsParams)`

**参数说明**

| 字段					| 类型		| 必填| 说明																																																	|
| ---						| ---			| ---	| ---																																																		|
| mobile				| String	| 是	|用户手机号																																															|
| code					| String	| 是	|验证码																																																	|
| type					| String	| 否	|指定操作类型，可选值为`login`、`register`，不传此参数时表现为手机号已注册则登录，手机号未注册则进行注册|
| password			|String		| 否	|密码，type为`register`时生效																																						|
| inviteCode		|String		| 否	|邀请人的邀请码，type为`register`时生效																																	|
| myInviteCode	|String		| 否	|设置当前注册用户自己的邀请码，type为`register`时生效																										|
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用													|
| role					| Array		| 否	|设定用户角色，当前用户为新注册时生效																																		|

**响应参数**

| 字段				| 类型	| 必填| 说明																		|
| ---					| ---		| ---	| ---																			|
| code				| Number| 是	|错误码，0表示成功												|
| message			| String| 是	|详细信息																	|
| uid					| String| 是	|用户uid																	|
| type				| String| 是	|操作类型，`login`为登录、`register`为注册|
| userInfo		| Object| 是	|用户全部信息															|
| token				| String| -		|登录成功之后返回的token信息							|
| tokenExpired| String| -		|token过期时间														|

**示例代码**

```js
// 云函数bind-mobile代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		mobile,
    code
	} = event
	const res = await uniID.loginBySms({
		mobile,
    code
	})
	return res
}

```

### 手机一键登录@univerify

用法：`uniID.loginByUniverify(Object loginByUniverifyParams)`

> 需在[开发者控制台](https://dev.dcloud.net.cn/uniLogin)开通一键登录并在config.json内配置univerify相关信息

**参数说明**

| 字段					| 类型		| 必填| 说明																																																	|
| ---						| ---			| ---	| ---																																																		|
| access_token	| String	| 是	|uni.login登录成功后，返回的`access_token`参数																													|
| openid				| String	| 是	|uni.login登录成功后，返回的`openid`参数																																|
| type					| String	| 否	|指定操作类型，可选值为`login`、`register`，不传此参数时表现为手机号已注册则登录，手机号未注册则进行注册|
| password			|String		| 否	|密码，type为`register`时生效																																						|
| inviteCode		|String		| 否	|邀请人的邀请码，type为`register`时生效																																	|
| myInviteCode	|String		| 否	|设置当前注册用户自己的邀请码，type为`register`时生效																										|
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用													|
| role					| Array		| 否	|设定用户角色  ，当前用户为新注册时生效																																	|

**响应参数**

| 字段				| 类型	| 说明																		|
| ---					| ---		| ---																			|
| code				| Number| 错误码，0表示成功												|
| message			| String|详细信息																	|
| uid					| String|用户`uid`																|
| type				| String|操作类型，`login`为登录、`register`为注册|
| mobile			| String|登录者手机号															|
| userInfo		| Object|用户全部信息															|
| token				| String|登录成功之后返回的`token`信息						|
| tokenExpired| String|`token`过期时间													|

**示例代码**

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		access_token,
    openid
	} = event
	const res = await uniID.loginByUniverify({
		access_token,
    openid
	})
	return res
}
```

### 绑定手机号@bind-mobile

用法：`uniID.bindMobile(Object BindMobileParams)`

**参数说明**

| 字段				| 类型	| 必填| 说明																																			|
| ---					| ---		| ---	| ---																																				|
| uid					| String| 是	|用户Id，可以通过checkToken返回																							|
| mobile			| String| 否	|用户手机号																																	|
| code				| String| 否	|验证码，为兼容旧版逻辑此参数不填写时不会进行验证码校验，而是直接绑定手机号	|
| access_token| String| 否	|uni.login登录成功后，返回的`access_token`参数															|
| openid			| String| 否	|uni.login登录成功后，返回的`openid`参数																		|
| type				| String| 否	|通过何种方式绑定手机号，sms（手机号验证码）、univerify（一键登录），默认sms|

type为sms时mobile、code必传，type为univerify时access_token、openid必传

**响应参数**

| 字段		| 类型	| 必填| 说明						|
| ---			| ---		| ---	| ---							|
| code		| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

**示例代码**

```js
// 云函数bind-mobile代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		mobile,
    code
	} = event
  const payload = await uniID.checkToken(event.uniIdToken)
  if(payload.code) {
    return payload
  }
	const res = await uniID.bindMobile({
    uid: payload.uid,
		mobile,
    code
	})
	return res
}

```

### 解绑手机

用法：`uniID.unbindMobile(Object UnbindMobileParams)`

**参数说明**

| 字段	| 类型	| 必填| 说明																																			|
| ---		| ---		| ---	| ---																																				|
| uid		| String| 是	|用户Id，可以通过checkToken返回																							|
| mobile| String| 是	|用户手机号																																	|
| code	| String| 否	|验证码，此参数不填写时不会进行验证码校验，而是直接绑定手机号	|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

**示例代码**

```js
// 云函数bind-mobile代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		mobile,
    code
	} = event
  const payload = await uniID.checkToken(event.uniIdToken)
  if(payload.code) {
    return payload
  }
	const res = await uniID.unbindMobile({
    uid: payload.uid,
		mobile,
    code
	})
	return res
}

```

## 邮箱@email

### 邮箱验证码直接登录

用法：`uniID.loginByEmail(Object LoginByEmailParams)`

**参数说明**

| 字段					| 类型	| 必填| 说明																																					|
| ---						| ---		| ---	| ---																																						|
| email					| String| 是	|用户邮箱																																				|
| code					| String| 是	|验证码																																					|
| type					| String| 否	|指定操作类型，覆盖存在则登录不存在则注册的默认行为，可选值为`login`、`register`|
| password			|String	| 否	|密码，type为`register`时生效																										|
| myInviteCode	|String	| 否	|设置当前注册用户自己的邀请码，type为`register`时生效														|
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用	|
| role	| Array	| 否	|设定用户角色	，当前用户为新注册时生效											|

**响应参数**

| 字段				| 类型	| 必填| 说明											|
| ---					| ---		| ---	| ---												|
| code				| Number| 是	|错误码，0表示成功					|
| message					| String| 是	|详细信息										|
| uid					| String| 是	|用户uid																	|
| userInfo		| Object| 是	|用户全部信息								|
| type				| String| 是	|操作类型，`login`为登录、`register`为注册|
| token				| String| -		|登录成功之后返回的token信息|
| tokenExpired| String| -		|token过期时间							|

**示例代码**

```js
// 云函数bind-mobile代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		email,
    code
	} = event
	const res = await uniID.loginByEmail({
		email,
    code
	})
	return res
}

```

### 设置验证码

见[设置验证码](uniCloud/uni-id.md?id=setVerifyCode)

### 校验验证码

见[校验验证码](uniCloud/uni-id.md?id=verifyCode)

### 绑定邮箱

用法：`uniID.bindEmail(Object BindEmailParams)`

**参数说明**

| 字段	| 类型	| 必填| 说明																									|
| ---		| ---		| ---	| ---																										|
| uid		| String| 是	|用户Id，可以通过checkToken返回													|
| email	| String| 是	|用户邮箱																								|
| code	| String| 否	|用户邮箱验证码，不填此字段或留空时直接绑定不校验验证码	|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

**示例代码**

```js
// 云函数bind-email代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		email,
    code
	} = event
  const payload = await uniID.checkToken(event.uniIdToken)
  if(payload.code) {
    return payload
  }
	const res = await uniID.bindEmail({
    uid: payload.uid,
		email,
    code
	})
	return res
}


```

### 解绑邮箱

用法：`uniID.unbindEmail(Object UnbindEmailParams)`

**参数说明**

| 字段	| 类型	| 必填| 说明																									|
| ---		| ---		| ---	| ---																										|
| uid		| String| 是	|用户Id，可以通过checkToken返回													|
| email	| String| 是	|用户邮箱																								|
| code	| String| 否	|用户邮箱验证码，不填此字段或留空时直接绑定不校验验证码	|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

**示例代码**

```js
// 云函数bind-email代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		email,
    code
	} = event
  const payload = await uniID.checkToken(event.uniIdToken)
  if(payload.code) {
    return payload
  }
	const res = await uniID.unbindEmail({
    uid: payload.uid,
		email,
    code
	})
	return res
}
```

## 微信@weixin

### 微信登录

用法：`uniID.loginByWeixin(Object LoginByWexinParams);`

**注意**

- 需要在config.json内使用微信登录的平台下配置appid和appsecret
- uniId会自动判断客户端平台
- 登录成功之后会返回token、tokenExpired，在获取token之后应进行持久化存储，详情参考：[保存token及其有效期](uniCloud/uni-id.md?id=save-token)
- App端获取code不可直接调用`uni.login`，详细用法可以看下面示例

**APP微信登录详细配置流程**

1. 在manifest.json内配置微信登录用appid
2. **打包**并**使用**自定义基座（注意一定要在manifest.json填写微信appid后再制作自定义基座），[自定义基座使用说明](https://ask.dcloud.net.cn/article/35115)
3. 在uni-id的config.json内app-plus对应的微信登录信息内配置appid和appsecret

**LoginByWexinParams参数说明**

| 字段					| 类型		| 必填| 说明																																												|
| ---						| ---			| ---	| ---																																													|
| code					| String	| 是	|微信登录返回的code																																						|
| type					| String	| 否	| 指定操作类型，可选值为`login`、`register`，不传此参数时表现为已注册则登录，未注册则进行注册，新增于uni-id 3.3.4	|
| myInviteCode	|String		| 否	|设置当前注册用户自己的邀请码，type为`register`时生效																					|
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用								|
| role					| Array		| 否	|设定用户角色，当前用户为新注册时生效																													|

**响应参数**

| 字段						| 类型		| 必填| 说明																																								|
| ---							| ---			| ---	| ---																																									|
| code						| Number	| 是	|错误码，0表示成功																																		|
| message					| String	| 是	|详细信息																																							|
| uid							| String	| 是	|用户uid																																							|
| type						| String	| 是	|操作类型，`login`为登录、`register`为注册																						|
| openid					| String	| 是	|用户openid																																						|
| unionid					| String	| 否	|用户unionid，能取到此参数时会返回																										|
| token						| String	| 是	|登录成功之后返回的token信息																													|
| userInfo				| Object	| 否	|用户全部信息，`type`为`login`时返回																									|
| tokenExpired		| String	| 是	|token过期时间																																				|
| mobileConfirmed	| Boolean	| 是	|是否已验证手机号																																			|
| emailConfirmed	| Boolean	| 是	|是否已验证邮箱																																				|
| sessionKey			| String	| -		|客户端为微信小程序时返回																															|
| accessToken			| String	| -		|客户端为APP时返回，微信接口调用凭证，新增于`uni-id 3.1.1`														|
| refreshToken		| String	| -		|客户端为APP时返回，用于刷新accessToken，新增于`uni-id 3.1.1`													|
| expired					| Number	| -		|客户端为APP时返回，accessToken 接口调用凭证超时时间对应的时间戳，新增于`uni-id 3.1.1`|

**示例代码**

```js
// 云函数login-by-weixin代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
  // 如下旧写法依然支持
	// const res = await uniID.loginByWeixin(event.code)
	const res = await uniID.loginByWeixin({
    code: event.code
  })
	return res
}

// 客户端代码
// 代码较长建议直接参考插件市场示例项目：https://ext.dcloud.net.cn/plugin?id=2116
let weixinAuthService
export default {
  data() {
    return {
      hasWeixinAuth: false
    }
  },
  onLoad() {
    // #ifdef APP-PLUS
    plus.oauth.getServices((services) => {
      weixinAuthService = services.find((service) => {
        return service.id === 'weixin'
      })
      if (weixinAuthService) {
        this.hasWeixinAuth = true
      }
    });
    // #endif
  },
  methods: {
    getWeixinCode() {
      return new Promise((resolve, reject) => {
        // #ifdef MP-WEIXIN
        uni.login({
          provider: 'weixin',
          success(res) {
            resolve(res.code)
          },
          fail(err) {
            reject(new Error('微信登录失败'))
          }
        })
        // #endif
        // #ifdef APP-PLUS
        weixinAuthService.authorize(function(res) {
          resolve(res.code)
        }, function(err) {
          console.log(err)
          reject(new Error('微信登录失败'))
        });
        // #endif
      })
    },
    loginByWeixin() {
      this.getWeixinCode().then((code) => {
        return uniCloud.callFunction({
          name: 'login-by-weixin',
          data: {
            code
          }
        })
      }).then((res) => {
        uni.showModal({
          showCancel: false,
          content: JSON.stringify(res.result)
        })
        if (res.result.code === 0) {
          uni.setStorageSync('uni_id_token', res.result.token)
          uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired)
        }
      }).catch(() => {
        uni.showModal({
          showCancel: false,
          content: '微信登录失败，请稍后再试'
        })
      })
    }
  }
}

```

### 获取微信openid

用法：`uniID.code2SessionWeixin(Object Code2SessionWeixinParams);`

**参数说明**

| 字段		| 类型	| 必填| 说明																																																														|
| ---			| ---		| ---	| ---																																																															|
| code		| String| 是	|微信登录返回的code																																																								|

**响应参数**

| 字段				| 类型	| 必填| 说明																													|
| ---					| ---		| ---	| ---																														|
| code				| Number| 是	|错误码，0表示成功																							|
| message			| String| 是	|详细信息																												|
| openid			| String| -		|用户openid																											|
| unionid			| String| -		|用户unionid，可以取到此值时返回																|
| sessionKey	| String| -		|客户端为微信小程序时返回																				|
| accessToken	| String| -		|客户端为APP时返回																							|
| refreshToken| String| -		|客户端为APP时返回，用于刷新accessToken													|
| expired			| Number| -		|客户端为APP时返回，accessToken 接口调用凭证超时时间对应的时间戳，新增于`uni-id 3.1.1`|
| expiresIn		| Number| -		|客户端为APP时返回，accessToken 接口调用凭证过期时间，单位（秒）|

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.code2SessionWeixin({
    code: event.code
  })
	return res
}
```

### 绑定微信

用法：`uniID.bindWeixin(Object BindWeixinParams);`

**参数说明**

| 字段		| 类型	| 必填| 说明																																																														|
| ---			| ---		| ---	| ---																																																															|
| uid			| String| 是	|用户Id，可以通过checkToken返回																																																		|
| code		| String| 是	|微信登录返回的code																																																								|

**响应参数**

| 字段				| 类型	| 必填| 说明																																								|
| ---					| ---		| ---	| ---																																									|
| code				| Number| 是	|错误码，0表示成功																																		|
| message			| String| 是	|详细信息																																							|
| openid			| String| 是	|用户openid																																						|
| unionid			| String| 否	|用户unionid，能取到此参数时会返回																										|
| sessionKey	| String| -		|客户端为微信小程序时返回，新增于`uni-id 3.1.1`																				|
| accessToken	| String| -		|客户端为APP时返回，微信接口调用凭证，新增于`uni-id 3.1.1`														|
| refreshToken| String| -		|客户端为APP时返回，用于刷新accessToken，新增于`uni-id 3.1.1`													|
| expired			| Number| -		|客户端为APP时返回，accessToken 接口调用凭证超时时间对应的时间戳，新增于`uni-id 3.1.1`|

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
  payload = await uniID.checkToken(event.uniIdToken)
  if (payload.code) {
  	return payload
  }
	const res = await uniID.bindWeixin({
    uid: payload.uid,
    code: event.code
  })
	return res
}
```

### 解绑微信

用法：`uniID.unbindWeixin(String uid);`

**参数说明**

| 字段| 类型	| 必填| 说明													|
| ---	| ---		| ---	| ---														|
| uid	| String| 是	|用户Id，可以通过checkToken返回	|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
  payload = await uniID.checkToken(event.uniIdToken)
  if (payload.code) {
  	return payload
  }
	const res = await uniID.unbindWeixin(payload.uid)
	return res
}
```

### 微信数据解密

用法：`uniID.wxBizDataCrypt(Object WxBizDataCryptParams);`

**参数说明**

| 字段| 类型	| 必填| 说明													|
| ---	| ---		| ---	| ---														|
| encryptedData	| String| 是	|包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。解密后得到的数据结构见后文	|
| iv	| String| 是	|加密算法的初始向量	|
| code	| String| `sessionKey`二选一	|微信登录返回的code	|
| sessionKey	| String| `code`二选一	|用户的会话密钥，可通过uniID.code2SessionWeixin(code)获取	|

**注意**

- `code`参数和`sessionKey`参数必须选填一个。如果有`sessionKey`则使用此值进行解密，否则尝试使用`code`去获取`sessionKey`，若两个都没有则报错。

**响应参数**

| 字段| 类型	| 说明						|
| ---	| ---			| ---							|
| code| Number	|错误码，0表示成功|
| message	| String	|详细信息					|
| 解密数据	| String	|具体数据由微信接口解密为准					|

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	return uniID.wxBizDataCrypt(event)
}
```

### 获取App平台微信登录用户信息@get-weixin-user-info

> 新增于 uni-id 3.3.14

用法：`uniID.getWeixinUserInfo(Object GetWeixinUserInfoParams);`

**参数说明**

| 字段			| 类型	| 必填	| 说明						|
| ---			| ---	| ---	| ---						|
| accessToken	| String| 是	|用户登录时返回的accessToken|
| openid		| String| 是	|用户登录时返回的openid		|

**响应参数**

| 字段		| 类型	| 说明		|
| ---		| ---	| ---		|
| nickname	| String|用户昵称	|
| avatar	| String|用户头像	|


## QQ@qq

> 新增于3.3.0版本

### QQ登录

**目前仅支持app和小程序的qq登录**

用法：`uniID.loginByQQ(Object LoginByQQParams);`

**注意**

- 需要在config.json内使用QQ登录的平台下配置appid和appsecret
- uniId会自动判断客户端平台
- 登录成功之后会返回token、tokenExpired，在获取token之后应进行持久化存储，详情参考：[保存token及其有效期](uniCloud/uni-id.md?id=save-token)

**APP QQ登录详细配置流程**

1. 在manifest.json内配置QQ登录用appid
2. **打包**并**使用**自定义基座（注意一定要在manifest.json填写QQ appid后再制作自定义基座），[自定义基座使用说明](https://ask.dcloud.net.cn/article/35115)
3. 在uni-id的config.json内app-plus对应的QQ登录信息内配置appid和appsecret

**参数说明**

| 字段					| 类型		| 必填					| 说明																																												|
| ---						| ---			| ---						| ---																																													|
| code					| String	| 小程序登录必填|QQ小程序登录返回的code																																				|
| accessToken		| String	| APP登录必填		|QQ APP登录返回的access_token																																	|
| type					| String	| 否						| 指定操作类型，可选值为`login`、`register`，不传此参数时表现为已注册则登录，未注册则进行注册，新增于uni-id 3.3.4	|
| myInviteCode	| String	| 否						|设置当前注册用户自己的邀请码，type为`register`时生效																					|
| needPermission| Boolean	| 否						|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用								|
| role					| Array		| 否						|设定用户角色，当前用户为新注册时生效																													|

**响应参数**

| 字段						| 类型		| 必填| 说明																			|
| ---							| ---			| ---	| ---																				|
| code						| Number	| 是	|错误码，0表示成功													|
| message					| String	| 是	|详细信息																		|
| uid							| String	| 是	|用户uid																		|
| type						| String	| 是	|操作类型，`login`为登录、`register`为注册	|
| openid					| String	| 是	|用户openid																	|
| unionid					| String	| 否	|用户unionid，能取到此参数时会返回					|
| token						| String	| 是	|登录成功之后返回的token信息								|
| userInfo				| Object	| 否	|用户全部信息，`type`为`login`时返回				|
| tokenExpired		| String	| 是	|token过期时间															|
| mobileConfirmed	| Boolean	| 是	|是否已验证手机号														|
| emailConfirmed	| Boolean	| 是	|是否已验证邮箱															|
| sessionKey			| String	| -		|客户端为QQ小程序时返回											|
| accessToken			| String	| -		|客户端为APP时返回，值等于传入的accessToken	|

**示例代码**

```js
// 云函数login-by-qq代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.loginByQQ({
    code: event.code,
    accessToken: event.accessToken
  })
	return res
}

// 客户端代码
// 代码较长建议直接参考插件市场示例项目：https://ext.dcloud.net.cn/plugin?id=2116
export default {
  data() {
    return {
      hasQQAuth: false
    }
  },
  onLoad() {
    uni.getProvider({
      service: 'oauth',
      success: (res) => {
        if (res.provider.indexOf('qq') > -1) {
          this.hasQQAuth = true
        }
      }
    })
  },
  methods: {
    getQQCode() {
      return new Promise((resolve, reject) => {
        uni.login({
          provider: 'qq',
          success(res) {
            // #ifdef APP-PLUS
            resolve({
              accessToken: res.authResult.access_token,
            })
            // #endif
            // #ifdef MP-QQ
            resolve({
              code: res.code,
            })
            // #endif
          },
          fail(err) {
            reject(new Error('QQ登录失败'))
          }
        })
      })
    },
    loginByQQ() {
      this.getQQCode().then(({
        code,
        accessToken
      } = {}) => {
        return uniCloud.callFunction({
          name: 'login-by-qq',
          data: {
            code,
            accessToken
          }
        })
      }).then((res) => {
        uni.showModal({
          showCancel: false,
          content: JSON.stringify(res.result)
        })
        if (res.result.code === 0) {
          uni.setStorageSync('uni_id_token', res.result.token)
          uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired)
        }
      }).catch((e) => {
        console.error(e)
        uni.showModal({
          showCancel: false,
          content: 'QQ登录失败，请稍后再试'
        })
      })
    },
  }
}
```

### 绑定QQ

用法：`uniID.bindQQ(Object BindQQParams);`

**参数说明**

| 字段				| 类型	| 必填				| 说明													|
| ---					| ---		| ---					| ---														|
| uid					| String| 是					|用户Id，可以通过checkToken返回	|
| code				| String| QQ小程序必填|QQ登录返回的code								|
| accessToken	| String| APP必填			|QQ登录返回的access_token				|

**响应参数**

| 字段				| 类型	| 必填| 说明																		|
| ---					| ---		| ---	| ---																			|
| code				| Number| 是	|错误码，0表示成功												|
| message			| String| 是	|详细信息																	|
| openid			| String| 是	|用户openid																|
| unionid			| String| 否	|用户unionid，能取到此参数时会返回				|
| sessionKey	| String| -		|客户端为QQ小程序时返回										|
| accessToken	| String| -		|客户端为APP时返回，值为传入的accessToken	|

### 解绑QQ

用法：`uniID.unbindQQ(String uid);`

**参数说明**

| 字段| 类型	| 必填| 说明													|
| ---	| ---		| ---	| ---														|
| uid	| String| 是	|用户Id，可以通过checkToken返回	|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

## 支付宝@alipay

### 支付宝登录

用法：`uniID.loginByAlipay(Object LoginByAlipayParams);`

**注意**

- 需要在config.json内支付宝平台下配置appid和privateKey（应用私钥）
- 登录成功之后会返回token、tokenExpired，在获取token之后应进行持久化存储，详情参考：[保存token及其有效期](uniCloud/uni-id.md?id=save-token)
- uni.login仅支持使用支付宝小程序登录，不支持app使用支付宝登录，`uniID.loginByAlipay`也只支持小程序登录

**LoginByAlipayParams参数说明**

| 字段					| 类型		| 必填| 说明																																												|
| ---						| ---			| ---	| ---																																													|
| code					| String	| 是	|支付宝登录返回的code																																					|
| type					| String	| 否	| 指定操作类型，可选值为`login`、`register`，不传此参数时表现为已注册则登录，未注册则进行注册，新增于uni-id 3.3.4	|
| myInviteCode	| String	| 否	|设置当前注册用户自己的邀请码，type为`register`时生效																					|
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用								|
| role					| Array		| 否	|设定用户角色，当前用户为新注册时生效																													|

**响应参数**

| 字段						| 类型		| 必填| 说明																		|
| ---							| ---			| ---	| ---																			|
| code						| Number	| 是	|错误码，0表示成功												|
| message					| String	| 是	|详细信息																	|
| uid							| String	| 是	|用户uid																	|
| type						| String	| 是	|操作类型，`login`为登录、`register`为注册|
| openid					| String	| 是	|用户openid																|
| token						| String	| 是	|登录成功之后返回的token信息							|
| userInfo		| Object| 是	|用户全部信息，`type`为`login`时返回								|
| tokenExpired		| String	| 是	|token过期时间														|
| mobileConfirmed	| Boolean	| 是	|是否已验证手机号													|
| emailConfirmed	| Boolean	| 是	|是否已验证邮箱														|

**示例代码**

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
  // 如下旧写法依然支持
	// const res = await uniID.loginByAlipay(event.code)
	const res = await uniID.loginByAlipay({
    code: event.code
  })
	return res
}
```


### 获取支付宝用户ID

用法：`uniID.code2SessionAlipay(Object Code2SessionAlipayParams);`

**参数说明**

| 字段		| 类型	| 必填| 说明																																																														|
| ---			| ---		| ---	| ---																																																															|
| code		| String| 是	|支付宝登录返回的code																																																								|

**响应参数**

| 字段				| 类型	| 必填| 说明																													|
| ---					| ---		| ---	| ---																														|
| code				| Number| 是	|错误码，0表示成功																							|
| message					| String| 是	|详细信息																												|
| openid			| String| -		|用户openid																											|
| accessToken	| String| -		|客户端为APP时返回																							|
| expiresIn		| String| -		|客户端为APP时返回，accessToken 接口调用凭证超时时间，单位（秒）|
| refreshToken| String| -		|客户端为APP时返回，用于刷新accessToken													|
| reExpiresIn	| String| -		|refreshToken超时时间，单位（秒）																|

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.code2SessionAlipay({
    code: event.code
  })
	return res
}
```

### 绑定支付宝

用法：`uniID.bindAlipay(Object BindAlipayParams);`

**参数说明**

| 字段| 类型	| 必填| 说明													|
| ---	| ---		| ---	| ---														|
| uid	| String| 是	|用户Id，可以通过checkToken返回	|
| code| String| 是	|支付宝登录返回的code							|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
  payload = await uniID.checkToken(event.uniIdToken)
  if (payload.code) {
  	return payload
  }
	const res = await uniID.bindAlipay({
    uid: payload.uid,
    code: event.code
  })
	return res
}
```

### 解绑支付宝

用法：`uniID.unbindAlipay(String uid);`

**参数说明**

| 字段| 类型	| 必填| 说明													|
| ---	| ---		| ---	| ---														|
| uid	| String| 是	|用户Id，可以通过checkToken返回	|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
  payload = await uniID.checkToken(event.uniIdToken)
  if (payload.code) {
  	return payload
  }
	const res = await uniID.unbindAlipay(payload.uid)
	return res
}
```

## Apple（苹果）@apple

### Apple登录@loginbyapple

用法：`uniID.loginByApple(Object LoginByAppleParams);`

**注意**

- 需要在config.json内的 app-plus > oauth > apple 下配置 bundleId
- 登录成功之后会返回token、tokenExpired，在获取token之后应进行持久化存储，详情参考：[保存token及其有效期](uniCloud/uni-id.md?id=save-token)

**LoginByAppleParams参数说明**

| 字段				| 类型	| 必填| 说明																																						   						|
| ---					| ---		| ---	| ---																																     	     			|
| identityToken  |String	| 是	|uni.login使用apple登录后，uni.getUserInfo返回的identityToken								  					|
| nickName  |String	| 否	| 若无nickName，则读取fullName，若fullName也无效，则使用email												     			|
| fullName  |Object	| 否	| uni.login使用apple登录后，uni.getUserInfo返回的fullName												     			|
| type				| String| 否	| 指定操作类型，可选值为`login`、`register`，不传此参数时表现为已注册则登录，未注册则进行注册|
| myInviteCode| String| 否	| 设置当前注册用户自己的邀请码，type为`register`时生效					          							|
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用	|
| role	| Array	| 否	|设定用户角色	，当前用户为新注册时生效											|

**响应参数**

| 字段						| 类型		| 说明																		|
| ---							| ---			| ---																			|
| code						| Number	|错误码，0表示成功												|
| message							| String	|详细信息																	|
| uid							| String	|用户uid																	|
| type						| String	|操作类型，`login`为登录、`register`为注册|
| openid					| String	|用户openid																|
| token						| String	|登录成功之后返回的token信息							|
| userInfo		| Object|用户全部信息								|
| tokenExpired		| String	|token过期时间														|

**示例代码**

```js
// 云函数login-by-apple代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.loginByApple(event)
	return res
}

// 客户端代码
// 代码较长建议直接参考插件市场示例项目：https://ext.dcloud.net.cn/plugin?id=2116
let AuthService
const Provider = 'apple'
export default {
  data() {
    return {
      haAuth: false
    }
  },
  onLoad() {
    uni.getProvider({
      service: 'oauth',
      success: (result) => {
        if(result.provider.indexOf(Provider) !== -1){
          this.haAuth = true
        }
      },
      fail: (error) => {
        console.log('获取登录通道失败', error);
      }
    });
  },
  methods: {
    async loginByApple() {
      if(!this.haAuth) return;
      const [loginErr, loginData] = await uni.login({
        provider: Provider
      });
      if (loginErr) {
        uni.showModal({
          showCancel: false,
          content: '苹果登录失败，请稍后再试'
        })
        return;
      }
      // 获取用户信息
      const [getUserInfoErr, result] = await uni.getUserInfo({
        provider: Provider
      });
      console.log("getUserInfo result: ",result);
      if (getUserInfoErr) {
        let content = getUserInfoErr.errMsg;
        if (~content.indexOf('uni.login')) {
          content = '请先完成登录操作';
        }
        uni.showModal({
          title: '获取用户信息失败',
          content: '错误原因' + content,
          showCancel: false
        });
        return;
      }
      // uni-id 苹果登录
      uniCloud.callFunction({
        name: 'login-by-apple',
        data: result.userInfo,
        success: (res) => {
          console.log('uniid login success', res);
          uni.showModal({
            showCancel: false,
            content: JSON.stringify(res.result)
          })
        },
        fail: (e) => {
          uni.showModal({
            content: `苹果登录失败: ${JSON.stringify(e)}`,
            showCancel: false
          })
        }
      })
    }
  }
}

```

### Apple登录校验identityToken

用法：`uniID.verifyAppleIdentityToken(Object Code2SessionAppleParams);`

**参数说明**

| 字段		| 类型	| 必填| 说明																																																										|
| ---			| ---		| ---	| ---																																																											|
| identityToken  |String	| 否	|uni.login使用apple登录后，uni.getUserInfo返回的identityToken								  					|

**响应参数**

| 字段				| 类型	| 说明																													|
| ---					| ---		| ---																														|
| code				| Number|错误码，0表示成功																							|
| message					| String|详细信息																												|
| iss			| String|发行人注册的索赔标识了发行身份令牌的委托人。由于Apple生成令牌，因此值为。https://appleid.apple.com																											|
| sub	| String|主题注册的权利要求标识作为身份令牌主题的主体。由于此令牌用于您的应用程序，因此该值是用户的唯一标识符。																							|
| aud		| String|观众注册的声明标识了身份令牌所针对的收件人。由于令牌是针对您的应用程序的，因此该值是您开发者帐户中的。client_id |
| iat| String|在注册时发出的声明中，以自Epoch以来的秒数（单位为UTC）来指示Apple发行身份令牌的时间。													|
| exp	| String|注册的到期时间以UTC中的自Epoch以来的秒数来标识身份令牌将在其上或之后到期的时间。验证令牌时，该值必须大于当前日期/时间。																|
| email	| String|一个字符串值，代表用户的电子邮件地址。电子邮件地址将是用户的真实电子邮件地址或代理地址，具体取决于他们的状态私人电子邮件中继服务。					|
| email_verified	| String|字符串或布尔值，指示服务是否已验证电子邮件。此声明的值始终为true，因为服务器仅返回经过验证的电子邮件地址。该值可以是字符串（”true”）或布尔值（true）。|
| is_private_email	| String|字符串或布尔值，指示用户共享的电子邮件是否是代理地址。该值可以是字符串（”true”或“false”）或布尔值（true或false）。|
| real_user_status	| String|一个整数值，指示用户是否看起来是真实的人。使用此索赔的价值来减轻欺诈。可能的值为：（0或Unsupported）。1 （或Unknown），2 （或）。有关更多信息，请参见。仅在iOS 14和更高版本，macOS 11和更高版本，watchOS 7和更高版本，tvOS 14和更高版本上才存在此声明；基于Web的应用程序不存在或不支持该声明。|

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.verifyAppleIdentityToken({
    identityToken: event.identityToken
  })
	return res
}
```

## 角色权限@rbac-api

### 获取用户角色

根据uid获取用户角色

用法：`uniID.getRoleByUid(Object GetRoleByUidParams)`

**参数说明**

| 字段	| 类型	| 必填| 说明													|
| ---		| ---		| ---	| ---														|
| uid		| String| 是	|用户Id，可以通过checkToken返回	|

**响应参数**

| 字段| 类型	| 必填| 说明						|
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
| message	| String| 是	|详细信息					|
| role	| Array	| 是	|用户拥有的角色列表|

### 获取角色的权限

根据roleID获取角色权限

用法：`uniID.getPermissionByRole(Object GetPermissionByRoleParams)`

**参数说明**

| 字段	| 类型	| 必填| 说明	|
| ---		| ---		| ---	| ---		|
| roleID| String| 是	|角色Id	|

**响应参数**

| 字段			| 类型	| 必填| 说明							|
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| message				| String| 是	|详细信息						|
| permission| Array	| 是	|角色拥有的权限列表	|

### 获取用户的权限

根据uid获取用户权限

用法：`uniID.getPermissionByUid(Object GetPermissionByUidParams)`

**参数说明**

| 字段| 类型	| 必填| 说明	|
| ---	| ---		| ---	| ---		|
| uid	| String| 是	|用户Id	|

**响应参数**

| 字段			| 类型	| 必填| 说明							|
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| message				| String| 是	|详细信息						|
| permission| Array	| 是	|用户拥有的权限列表	|

### 为用户绑定角色

用法：`uniID.bindRole(Object BindRoleParams)`

**参数说明**

| 字段		| 类型		| 必填| 说明																																										|
| ---			| ---			| ---	| ---																																											|
| uid			| String	| 是	|用户Id																																										|
| roleList| Array		| 是	|角色Id（role_id）列表																																		|
| reset		| Boolean	| 否	|是否直接覆盖用户角色，true：直接将roleList设置为用户角色，false：在用户已有角色后追加角色|

**响应参数**

| 字段			| 类型	| 必填| 说明							|
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| message				| String| 是	|详细信息						|

### 为角色绑定权限

用法：`uniID.bindPermission(Object BindPermissionParams)`

**参数说明**

| 字段					| 类型		| 必填| 说明																																													|
| ---						| ---			| ---	| ---																																														|
| roleID				| String	| 是	|用户Id																																													|
| permissionList| Array		| 是	|权限Id（permission_id）列表																																													|
| reset					| Boolean	| 否	|是否直接覆盖角色权限，true：直接将permissionList设置为角色权限，false：在角色已有权限后追加权限|

**响应参数**

| 字段			| 类型	| 必填| 说明							|
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| message				| String| 是	|详细信息						|

### 为用户解绑角色

用法：`uniID.unbindRole(Object UnbindRoleParams)`

**参数说明**

| 字段		| 类型		| 必填| 说明																																										|
| ---			| ---			| ---	| ---																																											|
| uid			| String	| 是	|用户Id																																										|
| roleList| Array		| 是	|角色Id（role_id）列表																																		|

**响应参数**

| 字段			| 类型	| 必填| 说明							|
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| message				| String| 是	|详细信息						|

### 为角色解绑权限

用法：`uniID.unbindPermission(Object UnbindPermissionParams)`

**参数说明**

| 字段					| 类型	| 必填| 说明											|
| ---						| ---		| ---	| ---												|
| roleID				| String| 是	|角色Id											|
| permissionList| Array	| 是	|权限Id（permission_id）列表|

**响应参数**

| 字段			| 类型	| 必填| 说明							|
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| message				| String| 是	|详细信息						|

### 新增角色

用法：`uniID.addRole(Object AddRoleParams)`

**参数说明**

| 字段			| 类型	| 必填| 说明											|
| ---				| ---		| ---	| ---												|
| roleID		| String| 是	|角色Id，唯一标识											|
| roleName	| String| 否	|角色名称，展示用						|
| comment		| String| 否	|备注												|
| permission| Array	| 否	|权限Id（permission_id）列表|

**响应参数**

| 字段			| 类型	| 必填| 说明							|
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| message				| String| 是	|详细信息						|

### 获取角色列表

用法：`uniID.getRoleList(Object GetRoleListParams)`

**参数说明**

| 字段			| 类型		| 必填| 说明						|
| ---				| ---			| ---	| ---							|
| limit			| Number	| 是	|限制返回数量			|
| offset		| Number	| 是	|偏移量						|
| needTotal	| Boolean	| 否	|是否需要返回总数	|

**响应参数**

| 字段		| 类型	|  说明																			|
| ---			| ---		|  ---																			|
| code		| Number| 错误码，0表示成功													|
| message			| String| 详细信息																	|
| roleList| Array	|roles表记录数组（包含role_name、comment等）|
| total		| Number|总数量																			|

### 获取角色信息

用法：`uniID.getRoleInfo(String roleID)`

**参数说明**

| 字段	| 类型	| 必填| 说明	|
| ---		| ---		| ---	| ---		|
| roleID| String| 是	|角色ID	|

**响应参数**

| 字段				| 类型			|  说明							|
| ---					| ---				|  ---							|
| code				| Number		| 错误码，0表示成功	|
| message			| String		| 详细信息					|
| role_name		| String		| 角色名，展示用		|
| permission	| Array			| 角色拥有的权限列表|
| comment			| String		| 备注							|
| created_date| Timestamp	| 角色创建时间			|

### 更新角色信息

**注意不可修改role_id**

用法：`uniID.updateRole(Object UpdateRoleParams)`

**参数说明**

| 字段			| 类型	| 必填| 说明											|
| ---				| ---		| ---	| ---												|
| roleID		| String| 是	|角色Id，唯一标识						|
| roleName	| String| 否	|角色名称，展示用						|
| comment		| String| 否	|备注												|
| permission| Array	| 否	|权限Id（permission_id）列表|

**响应参数**

| 字段			| 类型	| 必填| 说明							|
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| message				| String| 是	|详细信息						|

### 删除角色

用法：`uniID.deleteRole(Object DeleteRoleParams)`

**参数说明**

| 字段	| 类型	| 必填| 说明						|
| ---		| ---		| ---	| ---							|
| roleID| String| 是	|角色Id，唯一标识	|

**响应参数**

| 字段			| 类型	| 必填| 说明							|
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| message				| String| 是	|详细信息						|

### 新增权限

用法：`uniID.addPermission(Object AddPermissionParams)`

**参数说明**

| 字段					| 类型	| 必填| 说明						|
| ---						| ---		| ---	| ---							|
| permissionID	| String| 是	|权限Id，唯一标识	|
| permissionName| String| 否	|权限名称，展示用	|
| comment				| String| 否	|备注							|

**响应参数**

| 字段			| 类型	| 必填| 说明							|
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| message				| String| 是	|详细信息						|

### 获取权限列表

用法：`uniID.getPermissionList(Object GetPermissionListParams)`

**参数说明**

| 字段			| 类型		| 必填| 说明						|
| ---				| ---			| ---	| ---							|
| limit			| Number	| 是	|限制返回数量			|
| offset		| Number	| 是	|偏移量						|
| needTotal	| Boolean	| 否	|是否需要返回总数	|

**响应参数**

| 字段					| 类型	|  说明																									|
| ---						| ---		|  ---																									|
| code					| Number| 错误码，0表示成功																			|
| message						| String| 详细信息																							|
| permissionList| Array	|permissions表记录数组（包含permission_name、comment等）|
| total					| Number|总数量																									|

### 获取权限信息

用法：`uniID.getPermissionInfo(String permissionID)`

**参数说明**

| 字段				| 类型	| 必填| 说明	|
| ---					| ---		| ---	| ---		|
| permissionID| String| 是	|权限ID	|

**响应参数**

| 字段						| 类型			|  说明							|
| ---							| ---				|  ---							|
| code						| Number		| 错误码，0表示成功	|
| message					| String		| 详细信息					|
| permission_name	| String		| 权限名，展示用		|
| comment					| String		| 备注							|
| created_date		| Timestamp	| 权限创建时间			|

### 修改权限

**注意：不可修改permissionID**

用法：`uniID.updatePermission(Object UpdatePermissionParams)`

**参数说明**

| 字段					| 类型	| 必填| 说明						|
| ---						| ---		| ---	| ---							|
| permissionID	| String| 是	|权限Id，唯一标识	|
| permissionName| String| 否	|权限名称，展示用	|
| comment				| String| 否	|备注							|

**响应参数**

| 字段			| 类型	| 必填| 说明							|
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| message				| String| 是	|详细信息						|

### 删除权限

用法：`uniID.deletePermission(Object DeletePermissionParams)`

**参数说明**

| 字段					| 类型	| 必填| 说明						|
| ---						| ---		| ---	| ---							|
| permissionID	| String| 是	|权限Id，唯一标识	|

**响应参数**

| 字段			| 类型	| 必填| 说明							|
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| message				| String| 是	|详细信息						|

## 裂变@fission-api

### 设置用户邀请码

针对未生成邀请码的用户使用此方法生成邀请码

用法：`uniID.setUserInviteCode(Object SetUserInviteCodeParams);`

此接口用于在其他接口不满足需求时使用

**参数说明**

| 字段				| 类型	| 必填| 说明																																								|
| ---					| ---		| ---	| ---																																									|
| uid					| String| 是	|用户Id																																								|
| myInviteCode| String| 否	|自行指定邀请码（不可与其他账号邀请码重复），如果不传此字段则自动生成不重复的6位邀请码|

**响应参数**

| 字段				  | 类型	  | 必填 | 说明						|
| ---					| ---		| ---	| ---							|
| code				| Number| 是	  |错误码，0表示成功|
| message					| String| 是	  |详细信息					|
| myInviteCode| String| 是	  |最终设置的邀请码	|

### 用户接受邀请

此接口用于在注册之后再填写邀请码的场景，多数情况下不会用到此接口而是在注册时填写邀请码

用法：`uniID.acceptInvite(Object AcceptInviteParams);`

**参数说明**

| 字段			| 类型	| 必填| 说明					|
| ---				| ---		| ---	| ---						|
| uid				| String| 是	|用户Id					|
| inviteCode| String| 是	|邀请人的邀请码	|

**响应参数**

| 字段				  | 类型	  | 必填 | 说明						|
| ---					| ---		| ---	| ---							|
| code				| Number| 是	  |错误码，0表示成功|
| message					| String| 是	  |详细信息					|

### 获取接受邀请的用户清单

用法：`uniID.getInvitedUser(Object GetInvitedUserParams);`

此接口用于在其他接口不满足需求时使用

**参数说明**

| 字段			| 类型		| 必填| 说明												|
| ---				| ---			| ---	| ---													|
| uid				| String	| 是	|用户Id												|
| level			| Number	| 否	|指定获取第几级邀请用户，默认1|
| limit			| Number	| 否	|指定返回列表长度，默认20			|
| offset		| Number	| 否	|指定列表偏移量，默认0				|
| needTotal	| Boolean	| 否	|是否需要返回总数，默认false	|

**响应参数**

| 字段				| 类型	| 必填| 说明						|
| ---					| ---		| ---	| ---							|
| code				| Number| 是	|错误码，0表示成功|
| message					| String| 是	|详细信息					|
| invitedUser	| Array	| 是	|邀请的用户列表		|

**invitedUser每项结构**

| 字段				| 类型	| 必填| 说明															|
| ---					| ---		| ---	| ---																|
| username		|String	|-		|被邀请者用户名											|
| mobile			|String	|-		|被邀请者手机号											|
| invite_time	|String	|-		|被邀请者注册时间，以时间戳形式返回	|

```js
// 云函数代码
const uniID = require('uni-id')
exports.main = async function(event,context) {
  const payload = await uniID.checkToken(event.uniIdToken)
  if (payload.code) {
    return payload
  }
  const res = await uniID.getInvitedUser({
    uid: payload.uid,
    limit: 10,
    offset: 0,
    needTotal: true
  })
  return res
}
```

## 授权、禁止用户在特定客户端登录@authorize-app

> 新增于3.3.0版本

用户授权或者取消授权用户登录某客户端。

需要注意的是客户端APPID信息是由客户端上传上来的，并非完全可信，尽量在入口处进行校验。例：

```js
exports.main = async function(event, context){
  if(context.APPID !== '__UNI__xxx1') {
    throw new Error('非法访问')
  }
}
```

### 设置允许登录的客户端

用法：`uniID.setAuthorizedAppLogin(Object SetAuthorizedAppLoginParams);`

覆盖原有dcloud_appid字段，设置指定用户允许登录的客户端

**参数说明**

| 字段						| 类型	| 必填| 说明																	|
| ---							| ---		| ---	| ---																		|
| uid							| String| 是	|用户Id																	|
| dcloudAppidList	| Array	| 是	|指定允许登录的客户端的DCloud Appid列表	|

```js
const res = await uniID.setAuthorizedAppLogin({
  uid: 'xxxx',
  dcloudAppidList: ['__UNI__xxx1', '__UNI__xxx2'] // 允许登录的DCloud Appid列表
})
```

### 新增允许登录的客户端

用法：`uniID.authorizeAppLogin(Object AuthorizeAppLoginParams);`

在已有允许登录的客户端列表中插入新的客户端的DCloud Appid

**参数说明**

| 字段				| 类型	| 必填| 说明															|
| ---					| ---		| ---	| ---																|
| uid					| String| 是	|用户Id															|
| dcloudAppid	| String| 是	|指定允许登录的客户端的DCloud Appid	|

```js
const res = await uniID.authorizeAppLogin({
  uid: 'xxxx',
  dcloudAppid: '__UNI__xxx1' // 允许登录的客户端的DCloud Appid
})
```

### 移除允许登录的客户端

用法：`uniID.forbidAppLogin(Object ForbidAppLoginParams);`

从已有允许登录的客户端列表中移除一个客户端的DCloud Appid，禁止后用户不可在特定客户端登录

**参数说明**

| 字段				| 类型	| 必填| 说明															|
| ---					| ---		| ---	| ---																|
| uid					| String| 是	|用户Id															|
| dcloudAppid	| String| 是	|指定禁止登录的客户端的DCloud Appid	|

```js
const res = await uniID.forbidAppLogin({
  uid: 'xxxx',
  dcloudAppid: '__UNI__xxx1' // 禁止登录的客户端的DCloud Appid
})
```

## 调试功能

> 此类目下接口仅可用于开发调试，不要在生产环境使用

### 获取当前uni-id实例使用的配置内容

> 新增于3.3.0版本

由于uni-id提供了多种传入配置的方式`config.json、uniID.createInstance、uniID.init（已不推荐使用）`，开发者在使用插件作者或者其他人开发的功能时容易搞错到底在哪进行配置。可以使用此接口查看实际使用的配置文件内容，方便开发调试

用法：`uniID.dev.getConfig()`

此接口会返回uni-id实例使用的配置内容。


# 错误码@errcode

**自`uni-id 3.1.1`版本起使用此错误码规范**

自`3.1.1`版本起uni-id使用errCode作为错误码，errMsg作为错误信息，符合[uniCloud响应体规范](/uniCloud/cf-functions.html#clientcallfunction)。为兼容旧版本，code、message字段仍保留。

errCode和errMsg对照表如下：

|错误码（errCode）												|详细信息（errMsg）				|说明																																|
|---																			|---											|---																																|
|0																				|成功											|操作成功																														|
|uni-id-account-banned										|账号已禁用								|账号已禁用																													|
|uni-id-user-not-exist										|用户不存在								|用户不存在																													|
|uni-id-multi-user-matched								|匹配到多个账号						|匹配到多个账号																											|
|uni-id-user-info-error										|用户信息不正确						|用户信息不正确																											|
|uni-id-user-account-conflict							|用户账号冲突							|用户账号冲突（例如同时授权拥有同一个手机号的司机与乘客登录管理端）	|
|uni-id-password-error										|密码错误									|密码错误																														|
|uni-id-password-error-exceed-limit				|密码错误次数过多					|密码错误次数过多																										|
|uni-id-account-already-registed					|此{type}已注册						|此账号已注册、包括手机号、微信等																		|
|uni-id-account-not-registed							|此{type}尚未注册					|此账号尚未注册、包括手机号、微信等																	|
|uni-id-invalid-invite-code								|邀请码无效								|邀请码无效																													|
|uni-id-get-third-party-account-failed		|获取{account}失败				|获取三方平台账号失败																								|
|uni-id-param-required										|{param}不可为空					|字段不可为空																												|
|uni-id-check-device-feature-failed				|设备特征校验未通过				|设备特征校验未通过																									|
|uni-id-token-not-exist										|云端已不包含此token			|云端已不包含此token																								|
|uni-id-token-expired											|token已过期							|token已过期																												|
|uni-id-check-token-failed								|token校验未通过					|token校验未通过																										|
|uni-id-invalid-old-password							|旧密码错误								|旧密码错误																													|
|uni-id-param-error												|{param}参数错误，{reason}|参数错误																														|
|uni-id-invalid-verify-code								|验证码错误或已失效				|验证码错误或已失效																									|
|uni-id-send-sms-code-failed							|验证码发送失败						|验证码发送失败																											|
|uni-id-account-already-bound							|此{type}已绑定						|此账号已绑定，包括手机号、微信等																		|
|uni-id-unbind-failed											|解绑失败									|解绑失败																														|
|uni-id-set-invite-code-failed						|邀请码设置失败						|邀请码设置失败																											|
|uni-id-modify-invite-code-is-not-allowed	|邀请码不可修改						|邀请码不可修改																											|
|uni-id-database-operation-failed					|数据库读写异常						|数据库读写异常																											|
|uni-id-role-not-exist										|角色不存在								|角色不存在																													|
|uni-id-permission-not-exist							|权限不存在								|权限不存在																													|

** 历史版本 即`1.1.0`只`3.1.1`之间的版本使用下表错误码规范**

|模块											|模块码	|错误代码	|错误信息																									|
|:-:											|:-:		|:-:			|:-:																											|
|`登录通用模块`							|100		|01				|（10001）账号已禁用																								|
|账号、邮箱、手机+密码登录|101		|01				|（10101）用户不存在																								|
|													|				|02				|（10102）密码错误																									|
|													|				|03				|（10103）密码错误次数过多																					|
|手机号验证码登录/注册		|102		|01				|（10201）手机号已存在（传入type='register'且手机号已注册时触发）	|
|													|102		|02				|（10202）此手机号尚未注册（传入type='login'且手机号未注册时触发）	|
|													|102		|03				|（10203）邀请码无效（邀请码存在且唯一时才算有效）									|
|邮箱验证码登录/注册			|103		|01				|（10301）此邮箱已注册（传入type='register'且邮箱已注册时触发）		|
|													|103		|02				|（10302）此邮箱尚未注册（传入type='login'且邮箱未注册时触发）			|
|微信登录/注册						|104		|01				|（10401）获取openid失败																						|
|支付宝登录/注册					|105		|01				|（10501）获取openid失败																						|
|一键登录/注册					|106		|01				|（10601）手机号已存在（传入type='register'且手机号已注册时触发）								|
|					    |106		|02				|（10602）此手机号尚未注册（传入type='login'且手机号未注册时触发）																						|
|Apple登录/注册					|107		|01				|（10701）获取用户唯一标识符失败																						|
|					    |107		|02				|（10702）bundleId校验失败，请确认配置后重试																						|
|					    |107		|03				|（10703）此账户已注册																						|
|					    |107		|04				|（10704）此账户尚未注册																						|
|					    |107		|05				|（10705）identityToken校验失败																						|
|					    |107		|06				|（10706）签发机构检验失败																						|
|`注册通用模块`							|200		|-				|-																												|
|账号、邮箱、手机+密码注册|201		|01				|（20101）用户名、邮箱、手机号必填一项															|
|													|				|02				|（20102）用户名、邮箱、手机号冲突																	|
|`Token类`									|300		|-				|-																												|
|生成Token								|301		|-				|-																												|
|验证Token								|302		|01				|（30201）设备特征校验未通过																				|
|													|				|02				|（30202）云端已不包含此token																			|
|													|				|03				|（30203）token已过期																							|
|													|				|04				|（30204）token校验未通过																					|
|`账号安全类`								|400		|-				|-																												|
|登出											|401		|-				|-																												|
|修改密码									|402		|01				|（40201）用户不存在																								|
|													|				|02				|（40202）旧密码错误																								|
|重置密码									|403		|-				|-																												|
|`验证类`										|500		|-				|-																												|
|设置验证码								|501		|01				|（50101）参数错误																									|
|校验验证码								|502		|01				|（50201）参数错误																									|
|													|				|02				|（50202）验证码错误或已失效																				|
|发送短信验证码						|503		|01				|（50301）验证码发送失败，一般message内有描述											|
|`绑定账号`									|600		|-				|-																												|
|绑定手机号								|601		|01				|（60101）此手机号已被绑定																					|
|绑定邮箱									|602		|01				|（60201）此邮箱已被绑定																						|
|绑定微信									|603		|01				|（60301）获取openid失败																						|
|													|				|02				|（60302）此账号已被绑定																						|
|绑定支付宝								|604		|01				|（60401）获取openid失败																						|
|													|				|02				|（60402）此账号已被绑定																						|
|`解绑账号`									|700		|-				|-																												|
|解绑手机号								|701		|01				|（70101）解绑失败，可能已经解绑或者账号不匹配											|
|解绑邮箱									|702		|01				|（70201）解绑失败，可能已经解绑或者账号不匹配											|
|解绑微信									|703		|01				|（70301）解绑失败，可能已经解绑																		|
|解绑支付宝								|704		|01				|（70401）解绑失败，可能已经解绑																		|
|`基础功能`									|800		|-				|-																												|
|更新用户信息							|801		|01				|（80101）参数错误																									|
|设置头像									|802		|-				|-																												|
|获取用户信息							|803		|01				|（80301）未查询到用户信息																					|
|传入token获取用户信息			|808		|01				|（80801）未查询到用户信息																					|
|设置用户自己的邀请码			|804		|01				|（80401）邀请码设置失败，验证码重复或自动设置重试多次依然重复			|
|													|				|02				|（80402）邀请码重试多次依然重复																		|
|填写邀请人邀请码					|805		|01				|（80501）邀请码无效（邀请码存在且唯一时才算有效）									|
|													|				|02				|（80502）uid错误，用户不存在																			|
|													|				|03				|（80503）邀请码不可修改																						|
|获取微信openid						|806		|01				|（80601）未能获取openid																						|
|													|				|02				|（80602）调用获取openid接口失败																		|
|获取支付宝openid					|807		|01				|（80701）未能获取openid																						|
|													|				|02				|（80702）调用获取openid接口失败																		|
|解密微信encryptedData		|808		|01				|（80801）sessionKey获取失败																						|
|													|				|02				|（80802）解密失败																		|
|													|				|03				|（80803）appid不匹配（[watermark](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95)敏感数据归属appid与config.json中appid不匹配）|
|													|				|04				|（80804）code或sessionKey必须有其中一个																		|
|													|				|05				|（80805）encryptedData不可为空																		|
|													|				|06				|（80806）iv不可为空																		        |
|`公用码`										|900		|01				|（90001）数据库读写异常																						|

**另外还有一些字符串类型的扩展错误码在各自接口的文档中展示，请不要直接使用`code>0`这种方式来判断是否有错误，建议使用`if(code){}`来判断是否有错误**


# 多个应用复用相同uni-id-user表

有些系统由多个子应用组成，且没有各自独立服务空间，而是需要共享一个服务空间。此时就涉及一个问题，多个应用注册的账户都在uni-id-user表中，如何有效隔离。

比如一个打车软件，有乘客端、司机端、管理端，都要注册账户。它们也都有自己的DCloud appID（manifest.json里第一个配置）

uni-id-user表中有一个数组型字段`dcloud_appid`，可以存贮这个用户有权登陆哪个应用。

比如乘客端的appid是`__uni_111111`，司机端appid是`__uni_222222`，那么2个appid都存入`dcloud_appid`，即表示这个用户有权登录这2个应用。

## 隔离不同应用的用户@isolate-user

uni-id 3.3.0版本起用户注册时会自动在用户表的记录内标记为注册应用对应的用户，如果没有单独授权登录其他应用的话则只能登录这个应用。即在乘客端应用注册的，默认只能在乘客端应用登录。

如何授权登录其他应用请参考：[授权、禁止用户在特定客户端应用登录](uniCloud/uni-id?id=authorize-app)

需要注意的是客户端APPID信息是由端上传上来的，并非完全可信，尽量在入口处进行校验。例：

```js
exports.main = async function(event, context){
  if(context.APPID !== '__UNI__xxx1') {
    throw new Error('应用ID非法')
  }
}
```

**DCloud Appid是一个很重要的配置，如无必要请勿随意更换。**

> 不同端用户数据通过用户表的dcloud_appid字段隔离，同一个手机号、微信号也可以同时注册管理端和用户端，绑定账号同理。

**注意**

- uni-id会自动在用户表每条用户记录插入`dcloud_appid`字段（此字段是一个数组，标识此用户可以在哪些端登录）。
- 为兼容旧版本，针对没有dcloud_appid字段的用户，允许登录任意端。
- 如果用户数据库记录中`dcloud_appid`字段是一个空数组，表示当前用户不能在任何客户端登录
- 已有dcloud_appid的用户，如果使用相同的用户标识（用户名、邮箱、手机、微信等）+ 不同的DCloud Appid登录会被判定为不同的用户，如果此时数据库没有对应的记录，会报用户不存在的错误

## 隔离不同应用的配置@isolate-config

> `uni-id 3.3.0`及以上版本

uni-id的config.json支持配置为数组，每项都是一个完整的配置，对不同的配置使用`dcloudAppid`字段进行区分（**此字段与项目内的manifest.json里面的DCloud AppId一致**），uni-id会自动根据客户端的appid来判断该使用哪套配置。如果使用云函数url化请参考：[云函数Url化时使用](uniCloud/uni-id?id=url)

需要注意的是客户端APPID信息是由端上传上来的，并非完全可信，尽量在入口处进行校验。例：

```js
exports.main = async function(event, context){
  if(context.APPID !== '__UNI__xxx1') {
    throw new Error('应用ID非法')
  }
}
```

**示例**

> 数组每一项都是一个完整的配置文件，全部选项请参考：[uni-id 配置](uniCloud/uni-id?id=config)

**注意：如果允许同一账号在不同端使用相同的账号+密码登录需要将不同端的passwordSecret设置成一样的**

```js
[{
  "dcloudAppid": "__UNI__xxxx1", // 务必替换为对应项目manifest.json内的DCloud Appid
  "isDefaultConfig": true, // 默认配置标记，未匹配到dcloudAppid的情况下使用默认配置
  "passwordSecret": "passwordSecret-demo",
	"tokenSecret": "tokenSecret-demo",
	"tokenExpiresIn": 7200,
	"tokenExpiresThreshold": 600,
  "app-plus": {
  	"tokenExpiresIn": 2592000,
  	"oauth": {
  		"weixin": {
  			"appid": "weixin appid",
  			"appsecret": "weixin appsecret"
  		}
  	}
  }
}, {
  "dcloudAppid": "__UNI__xxxx2", // 务必替换为对应项目manifest.json内的DCloud Appid
  "passwordSecret": "passwordSecret-demo",
	"tokenSecret": "tokenSecret-demo",
	"tokenExpiresIn": 7200,
	"tokenExpiresThreshold": 600,
  "app-plus": {
  	"tokenExpiresIn": 2592000,
  	"oauth": {
  		"weixin": {
  			"appid": "weixin appid",
  			"appsecret": "weixin appsecret"
  		}
  	}
  }
}]
```


# 其他功能


## 裂变@fission

自`1.1.2`版本起uni-id支持裂变功能，目前仅适用手机号+验证码方式注册可以填写邀请码（inviteCode）接受邀请。裂变相关API请参考[裂变API](uniCloud/uni-id.md?id=fission-api)

在`config.json`内配置了`autoSetInviteCode: true`则在用户注册时会自动给设置不重复的6位邀请码，如果不希望使用自动设置的邀请码可以自行传入`myInviteCode`参数来设置邀请码，需要注意的是要保证邀请码唯一。

在`config.json`内配置了`forceInviteCode: true`则只有使用邀请码才可以注册（仅手机号+验证码注册方式支持）。

针对之前使用了旧版本（不支持裂变）的uni-id，现在想增加裂变功能，可以调用`setUserInviteCode`接口给已注册用户设置邀请码，在设置之前可以使用`my_invite_code不存在`作为条件查询所有需要设置的用户。

如果希望用户注册完成之后再填写邀请人的邀请码，可以调用`acceptInvite`接口来使用户接受邀请。

`getInvitedUser`接口可以用于获取接受邀请的用户列表，其中level参数可以用来设置要获取哪一级的邀请用户，不填写level参数则默认获取第一级。

如果想详细的体验一下裂变流程，可以在插件市场导入[前后一体登录模板](https://ext.dcloud.net.cn/plugin?id=13)，此项目内已有邀请用户注册示例，流程如下

**分享邀请码/邀请链接**

<img width="375" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/1b181d40-e377-11ea-b680-7980c8a877b8.jpeg" />


**受邀者注册**

<img width="375" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/1b12c610-e377-11ea-b997-9918a5dda011.jpeg" />


## 修改passwordSecret@modifysecret

> `注意：通常情况下设定好passwordSecret之后不需要再进行修改，使用此功能时请务必小心谨慎`

**说明**

在config.json内修改passwordSecret会导致历史用户无法通过密码登录。但是某些情况下有些应用有修改passwordSecret的需求，例如刚开始使用uni-id时没有自定义passwordSecret，后续需要修改，此时可以使用uni-id 2.0.1版本新增的修改passwordSecret功能。（注意：2.0.1版本验证码表名调整为了`opendb-verify-codes`）

**如何使用**

下面以将passwordSecret从`passwordSecret-demo`修改为`qwertyasdfgh`为例介绍如何使用

```json
// 旧config.json
{
  "passwordSecret": "passwordSecret-demo"
}

// 新config.json
{
  "passwordSecret": [{
    "version": 1,
    "value": "passwordSecret-demo"
  },{
    "version": 2,
    "value": "qwertyasdfgh"
  }]
}

```

如果在上面基础上再修改passwordSecret为`1q2w3e4r5t`,config.json调整如下

> !!!注意只有在数据库内完全没有使用某个版本（`password_secret_version`字段表示了用户密钥版本）密钥的用户才可以将此密钥从config.json内去除。没有`password_secret_version`的用户使用的是最旧版本的passwordSecret，如果存在这样的用户对应的passwordSecret也不可去除。

```json
// 新config.json，
{
  "passwordSecret": [{
    "version": 1,
    "value": "passwordSecret-demo"
  },{
    "version": 2,
    "value": "qwertyasdfgh"
  },{
    "version": 3,
    "value": "1q2w3e4r5t"
  }]
}
```

**原理**

uni-id-users表内存储的password字段为使用hmac-sha1生成的hash值，此值不可逆向推出用户真实密码。所以直接修改passwordSecret会导致老用户无法使用密码登录。

上述修改通过密钥版本号区分新旧密钥，用户登录时如果密钥版本小于当前最新版本，会为用户更新数据库内存储的password字段，并记录当前使用的密钥版本。

用户对应的数据库记录内没有密钥版本的话会使用最低版本密钥进行密码校验，校验通过后为用户更新为最新版密钥对应的password并记录版本号。

由于是不可逆加密，理论上passwordSecret泄露不会造成用户的真实密码被泄露，自定义passwordSecret只是进一步加强安全性。

## 缓存角色权限@cache-permission-in-token

自`uni-id 3.0.0`起，支持在token内缓存用户的角色权限，默认开启此功能，各登录接口的needPermission参数不再生效。如需关闭请在config内配置`"removePermissionAndRoleFromToken": true`。

为什么要缓存角色权限？要知道云数据库是按照读写次数来收取费用的，并且读写数据库会拖慢接口响应速度。未配置`"removePermissionAndRoleFromToken": true`的情况下，可以在调用checkToken接口时不查询数据库获取用户角色权限。

详细checkToken流程如下：

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/ed45d350-5a4d-11eb-b997-9918a5dda011.jpg)

可以看出，旧版token（removePermissionAndRoleFromToken为true时生成的）在checkToken时如需返回权限需要进行两次数据库查询。新版token不需要查库即可返回权限信息。

**注意**

- 由于角色权限缓存在token内，可能会存在权限已经更新但是用户token未过期之前依然是旧版角色权限的情况。可以调短一些token过期时间来减少这种情况的影响。
- admin角色token内不包含permission，如需自行判断用户是否有某个权限，要注意admin角色需要额外判断一下，写法如下
  ```js
  const {
    role,
    permission
  } = await uniID.checkToken(event.uniIdToken)
  if(role.includes('admin') || permission.includes('your permission id')) {
    // 当前角色拥有'your permission id'对应的权限
  }
  ```

## 自定义token内容@custom-token

> uni-id 3.0.7及以上版本，且需要使用[uni-config-center](https://ext.dcloud.net.cn/plugin?id=4425)

自`uni-id 3.0.0`起，支持在token内缓存用户的角色权限。但是某些情况下开发者可能还希望缓存一些别的东西，以便在客户端能方便的访问（**注意：不可缓存机密信息到token内**）。

**用法**

在`uni-config-center`模块内的uni-id插件内创建`custom-token.js`内容如下：

```js
module.exports = async (tokenObj) => { 
  // tokenObj为原始token信息结构如下
  // {
  //   uid: 'abc', // 用户id
  //   role: [], // 用户角色列表
  //   permission: [] // 用户权限列表，admin角色的用户权限列表为空数组
  // }
  
  tokenObj.customField = 'hello custom token' // 自定义token字段
  return tokenObj // 注意务必返回修改后的token对象
}
```

uni-id会自动加载custom-token.js进行处理，在所有生成token的操作（包括：登录、注册、token过期自动刷新、开发者自行调用createToken）执行时自动获取新token信息，并生成token。

**注意**

- 使用custom-token时自行调用createToken接口会变为异步操作，需使用`await uniID.createToken(...)`
- 不要删除原始token内的字段

## 自定义国际化语言@custom-i8n

> 新增于uni-id 3.3.10，此功能依赖于[uni-config-center]

完整词句列表参考：[uni-id中文语言包](https://gitee.com/dcloud/uni-id/blob/master/src/lang/zh-Hans.js)

**用法**

在`cloudfunctions/common/uni-config-center/uni-id/lang/`目录下创建`index.js`，内容示例如下：

```js
module.exports = {
	'zh-hant': { // 语言代码
		'alipay': '支付寶'
	}
}
```

uni-id会自动进行语言匹配，无需额外配置


## 云函数Url化时使用@url

云函数url化时uni-id无法自行获取客户端相关信息，需要开发者自行创建uniID实例并传入相关信息，以下为一个简单示例

**注意：实际业务中务必验证一下前端传来的数据的合法性，APPID、PLATFORM等均来自前端**

```js
// 客户端代码示例
uni.request({
  url: 'https://xxx.xxx/xxx?appid=your_appid&platform=your_platform&deviceId=your_deviceId'
})

// 云函数代码示例
const uniID = require('uni-id')
exports.main = async function(event, context) {
  const {
    appid,
    platform
  } = event.queryStringParameters // 不同类型的请求获取参数的方式略有差异，具体如何取参数请参考：https://uniapp.dcloud.net.cn/uniCloud/http
  context.APPID = appid
  context.PLATFORM = platform
  const uniIDIns = uniID.createInstance({
    context
  })
  // uniIDIns.login() 使用uniIDIns来调用uni-id相关接口
}
```


# 迁移指南@migration

## 自1.x.x版本升级到2.x.x@m1to2

自2.0.0版本起uni-id调整了验证码表名（这个调整导致了与旧版不兼容），如果要使用2.0.0以上版本需要在数据库中创建opendb-verify-code表（建议直接选择opendb内uni-id下的opendb-verify-code表，会自动创建索引以及表结构）

## 自2.x.x版本升级到3.x.x@m2to3

3.0.0版本起uni-id默认将缓存用户角色权限到token内，关于缓存角色权限的说明请参考：[缓存角色权限](uniCloud/uni-id?id=cache-permission-in-token)。从2.x.x版本升级到3.x.x版本需要根据自己需求分别处理。

- 如果不希望缓存角色权限到token内，需要在config.json内配置`"removePermissionAndRoleFromToken": true`。
- 如果希望升级为缓存角色权限到token内的方案，可以按照以下步骤迁移
  + 各登录接口的needPermission参数不再生效，checkToken校验新token时总是返回角色权限
  + 所有注册用户行为均支持传入角色（role）字段，指定创建用户的角色（需要使用3.0.2及以上版本，此前只有uniID.register接口支持）。由于需要初始生成的token内带有角色权限，所以推荐在注册时就给用户设置好角色。

#### uniCloud admin升级uni-id@m2to3-uni-admin

uniCloud admin可以平滑升级到uni-id 3.0.0。如果要缓存角色权限到token内（uni-id 3.0.0的默认行为），那还有几点可以优化。详细调整如下

1. `uniCloud-aliyun\cloudfunctions\uni-admin\middleware\auth.js`

  auth中间件内可以调整为checkToken时不再获取用户信息，这样auth中间件就无需进行数据库查询，可以加速接口响应

2. `uniCloud-aliyun\cloudfunctions\uni-admin\controller\app.js`

  受第一步影响app/init内无法获取用户信息，可以额外调用uniID的getUserInfo获取

可以参考此次提交进行调整：[uniCloud admin](https://github.com/dcloudio/uniCloud-admin/commit/8359d699aacb8f7d074fce9aa82a36474cb6e7df)

#### 使用uni-config-center@uni-config-center

> uni-id 3.0.7及以上版本

从插件市场导入支持uni_modules的uni-id，会自动安装依赖的uni-config-center到uni_modules内。如果此前并没有使用uni-config-center可以直接将uni-id的config.json移至`uni-config-center/uni-id/config.json`即可（可以参照插件市场的uni-id示例项目）

- uni-id会优先使用uni-config-center内添加的配置
- 如果批量上传后报“请在公用模块uni-id的config.json或init方法中内添加配置项”，请重新上传一次`uni-id`

**uni-id配置优先级**

1. `uniID.init`、`uniID.createInstance`传入的配置（此配置不会对clientDB依赖的uni-id生效，不推荐使用）
2. uni-config-center内配置的`uni-id/config.json`（推荐使用的配置方式）
3. uni-id插件下配置的config.json（已不推荐使用的配置方式）

以上三个配置不会进行合并，优先级高的先生效

#### 忽略用户名邮箱大小写@case-sensitive

> uni-id 3.1.0及以上版本

uni-id 3.1.0版本主要有以下两个调整

1. 自此版本起会对所有接口中的用户名、邮箱、密码进行前后去空格。

2. 此版本之前uni-id并未忽略用户名及邮箱的大小写。这样导致了一些问题，比如用户在手机上登录不小心就会使用首字母大写的用户名或邮箱，这样就会登录失败，影响用户体验。很多应用/网站的登录都是忽略大小写的，为此uni-id在3.1.0版本起调整为默认忽略用户名、邮箱的大小写。实现方式为将用户名、邮箱均存储为小写，用户输入用户名邮箱时也转化为小写进行匹配

**注意**

- 此调整兼容旧版本，以登录接口为例，优先匹配用户输入用户名对应的账号，如果不存在则匹配全小写用户名对应的账号（uni-id内部进行处理实际不会增加数据库读写次数）
- 新注册用户会将用户名/邮箱存储为全小写格式，老用户可能还存在包含大写字母的邮箱及用户名

#### 补齐用户dcloud_appid字段@makeup-dcloud-appid

此调整详情见：[隔离不同端用户](uniCloud/uni-id.md?id=isolate-user)

> uni-id3.3.0以下版本升级到3.3.0及以上版本时，需要参照本章节补齐用户数据

uni-id在3.3.0提供了根据客户端appid（项目manifest.json内配置的DCloud Appid）隔离不同用户的功能，旧版本的uni-id在注册用户时并未将当前客户端的appid存储在用户的记录内，更新到新版后这些没有dcloud_appid字段的用户和之前一样可以登录所有端。开发者使用云函数本地运行可以自行对用户数据进行修补，为用户创建dcloud_appid字段

**更新后用户将只允许登录与自己数据库记录内匹配的端**

云函数示例代码如下：

**注意：如果要更新的记录很多可能会超时失败，此时无需重试等待数据库自行完成更新即可**

**如果仅有一端，将所有用户的数据更新为同一个dcloud_appid即可，例：**

```js
exports.main = async function() {
  const db = uniCloud.database()
  const userCollection = db.collection('uni-id-users')
  const res = await userCollection.where({
    dcloud_appid: db.command.exists(false) // 更新所有不存在dcloud_appid字段的用户
  }).update({
    dcloud_appid: ['你项目内manifest.json里面的DCloud Appid，__UNI_xxxx形式'] // 注意这里是个数组，务必正确填写
  })
  return res
}
```

**如果之前就有区分不同端的用户，可以将自己区分用户的条件加上再进行更新，例：**

```js
// 更新教师端用户的云函数
exports.main = async function() {
  const db = uniCloud.database()
  const userCollection = db.collection('uni-id-users')
  const res = await userCollection.where({
    user_type: 'teacher', // 教师端用户
    dcloud_appid: db.command.exists(false)
  }).update({
    dcloud_appid: ['教师端项目内manifest.json里面的DCloud Appid，__UNI_xxxx形式'] // 注意这里是个数组，务必正确填写
  })
  return res
}

// 更新学生端用户的云函数
exports.main = async function() {
  const db = uniCloud.database()
  const userCollection = db.collection('uni-id-users')
  const res = await userCollection.where({
    user_type: 'student', // 学生端用户
    dcloud_appid: db.command.exists(false)
  }).update({
    dcloud_appid: ['学生端项目内manifest.json里面的DCloud Appid，__UNI_xxxx形式'] // 注意这里是个数组，务必正确填写
  })
  return res
}
```

**如果允许用户在多个端登录需要将多端的DCloud Appid都传进来，例：**

```js
exports.main = async function() {
  const db = uniCloud.database()
  const userCollection = db.collection('uni-id-users')
  const res = await userCollection.where({
    dcloud_appid: db.command.exists(false) // 更新所有不存在dcloud_appid字段的用户
  }).update({
    dcloud_appid: ['DCloud Appid1','DCloud Appid1'] // 注意这里是个数组，务必正确填写
  })
  return res
}
```

# FAQ

- token数组为什么越来越长
  + 每次登录成功/刷新token都会新增一个token，并且检查所有token的有效期删除过期token。正常情况下客户端应该判断持久化存储的token是否还在有效期内，如果还有效就直接进入应用，不再执行登录。这样相当于用户的每个设备上都存在一个有效期内的token，云端会保留所有仍在有效期内的token（部分过期token需要等待用户重新获取token之后才会删除）。

- 复制token到其他环境校验不通过
  + uni-id内会校验客户端ua，如果是在本地调试可以在云函数内修改`context.CLIENTUA`为生成token的设备ua，切记上线删除此逻辑。如果不需要设备和token绑定，可以在config内配置`bindTokenToDevice: false`来关闭绑定，`uni-id 3.0.12`及以上版本bindTokenToDevice默认值调整为了false

- username、email、mobile三个字段
  + 三个字段均可能为空，但是建议限制一下插入数据库三个字段的格式，比如username不应是邮箱格式或手机号格式，因为登录时可以选择使用username或mobile或email+密码的方式

- 关于邀请码
  + 目前仅手机号+验证码的注册方式支持填写邀请码
