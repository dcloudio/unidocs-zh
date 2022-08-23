> 本文档为uni-id 3.x 版本文档。适用于老用户。
> This document is the uni-id 3.x version document. For old users.
> HBuilderX 3.5以上版本用户，请另行查阅 [uni-id 4+ 版本文档](uniCloud/uni-id-summary.md)。如何从旧版本升级到uni-id-pages请查看：[升级到uni-id-pages](uniCloud/uni-id-pages.md#m-to-co) -->
> Users of HBuilderX 3.5 and above, please refer to [uni-id 4+ version documentation](uniCloud/uni-id-summary.md). How to upgrade to uni-id-pages from an older version, please check: [Upgrade to uni-id-pages](uniCloud/uni-id-pages.md#m-to-co) -->

# 需求背景
# Requirement background

99%的应用，都要开发用户注册、登录、发送短信验证码、密码加密保存、修改密码、token管理等功能，从前端到后端都需要。
99% of applications need to develop functions such as user registration, login, sending SMS verification codes, password encryption and storage, password modification, token management, etc., which are required from the front end to the back end.

为什么不能有一个开源的通用项目，避免大家的重复开发呢？
Why can't there be an open source general project to avoid repeated development by everyone?

`uni-id`应需而生。
`uni-id` is on demand.

`uni-id`为`uniCloud`开发者提供了简单、统一、可扩展的用户管理能力封装。
`uni-id` provides `uniCloud` developers with a simple, unified, and extensible package of user management capabilities.

[clientDB](uniCloud/clientDB)、[DB Schema](uniCloud/schema)、[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)、[uniCloud admin](uniCloud/admin)，这些产品都基于`uni-id`的账户体系。可以说`uni-id`是uniCloud不可或缺的基础能力。
[clientDB](uniCloud/clientDB), [DB Schema](uniCloud/schema), [uni-starter](https://ext.dcloud.net.cn/plugin?id=5057), [uniCloud admin](uniCloud /admin), these products are based on the `uni-id` account system. It can be said that `uni-id` is an indispensable basic capability of uniCloud.

# 组成部分
# component

`uni-id`包括如下组成部分：
`uni-id` consists of the following components:

1. 云数据库
1. Cloud database

主表为 `uni-id-users` 表，保存用户的基本信息。扩展字段有很多，如实名认证数据、工作履历数据，开发者可以自由扩展。
The main table is the `uni-id-users` table, which stores the basic information of users. There are many extension fields, such as real-name authentication data and work history data, which developers can freely expand.

还有 uni-id- 开头的十几个附表，比如权限表`uni-id-permissions`、角色表`uni-id-roles`、积分表`uni-id-scores`、设备表`uni-id-device`...
There are also more than a dozen additional tables starting with uni-id-, such as permission table `uni-id-permissions`, role table `uni-id-roles`, points table `uni-id-scores`, device table `uni- id-device`...

所有`uni-id`的数据表，在uniCloud web控制台新建表的界面上，都可以选择这些数据表模板，直接建好。
For all `uni-id` data tables, you can select these data table templates and build them directly on the interface of creating a new table in the uniCloud web console.

2. 云函数
2. Cloud functions

提供一个名为`uni-id`的公共模块，该模块封装了一系列API，包括注册、登录、修改密码、设置头像等。
Provides a public module named `uni-id`, which encapsulates a series of APIs, including registration, login, password modification, avatar setting, etc.

示例工程中还提供了一个`user-center`的云函数，演示在云函数中如何调用`uni-id`公共模块。推荐使用[云端一体登录插件](https://ext.dcloud.net.cn/plugin?id=13)
The example project also provides a `user-center` cloud function to demonstrate how to call the `uni-id` public module in the cloud function. It is recommended to use [Cloud Integrated Login Plugin](https://ext.dcloud.net.cn/plugin?id=13)

3. 前端调用
3. Front-end call

前端示例通过callfunction调用云函数`user-center`，在注册和登录时保存token。在这个[云端一体登录插件](https://ext.dcloud.net.cn/plugin?id=13)里，有完整的登录、注册、修改密码等前后端代码示例。[详见](https://ext.dcloud.net.cn/plugin?id=13)
The front-end example calls the cloud function `user-center` through callfunction, and saves the token during registration and login. In this [Cloud Integrated Login Plugin](https://ext.dcloud.net.cn/plugin?id=13), there are complete front-end and back-end code examples such as login, registration, and password modification. [See details](https://ext.dcloud.net.cn/plugin?id=13)

uniCloud框架底层，会自动在callfunction时传递`uni-id`的token（uni-app 2.7.13+版本）。在云函数的event中可直接拿到`uni-id`的token。也就是说开发者无需自己管理token了。
The bottom layer of the uniCloud framework will automatically pass the `uni-id` token (uni-app 2.7.13+ version) when calling the function. You can directly get the `uni-id` token in the event of the cloud function. That is to say, developers do not need to manage tokens themselves.

# uni-id 对开发者的价值
# uni-id value to developers

1. 节省了大量重复劳动
1. Save a lot of repetitive work
2. 降低门槛，前端开发者无需纠结怎样设计数据库设计才更合理
2. Lowering the threshold, front-end developers do not need to worry about how to design the database design to be more reasonable
3. 多系统打通用户和上下游协同
3. Multiple systems connect users and upstream and downstream collaboration

关于第三点，着重强调下。
Regarding the third point, I would like to emphasize it.

一个应用，往往需要集成多个功能模块。比如一个电商应用，需要一个基本电商模板，还需要客服聊天模板，甚至还需要用户交流社区。
An application often needs to integrate multiple functional modules. For example, an e-commerce application requires a basic e-commerce template, a customer service chat template, and even a user communication community.

在插件市场，每类模板插件都能找到，但他们如果不是基于同一套用户体系设计，就很难整合。
In the plugin market, every type of template plugin can be found, but if they are not designed based on the same user system, it is difficult to integrate.

所有uniCloud的应用，几乎都基于`uni-id`来做。
Almost all uniCloud applications are based on `uni-id`.

有了统一的账户规范，并且围绕这套账户规范，有各种各样插件，那么开发者可以随意整合这些插件，让数据连同。
With a unified account specification, and around this set of account specifications, there are various plug-ins, so developers can integrate these plug-ins at will, and let the data go together.

规范，还可以让上下游充分协同。插件市场会出现各种数据迁移插件，比如把从discuz里把用户迁移到`uni-id`中的插件，相信围绕这套规范的产业链会非常活跃。
Specifications can also allow the upstream and downstream to fully cooperate. There will be various data migration plug-ins in the plug-in market, such as plug-ins that migrate users from discuz to `uni-id`. I believe that the industry chain around this specification will be very active.

事实上，[clientDB](uniCloud/clientDB)、[DB Schema](uniCloud/schema)、[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)、[uniCloud admin](uniCloud/admin)等重要uniCloud产品，以及插件市场上各种优秀的轮子，都是基于`uni-id`的。
In fact, [clientDB](uniCloud/clientDB), [DB Schema](uniCloud/schema), [uni-starter](https://ext.dcloud.net.cn/plugin?id=5057), [uniCloud admin ](uniCloud/admin) and other important uniCloud products, as well as various excellent wheels on the plugin market, are based on `uni-id`.

# 现状和未来
# Current status and future

`uni-id`已完成的内容：
What `uni-id` has done:

- 注册、登录、发送短信验证码、密码加密保存、修改密码、token管理（短信验证码功能需要HBuilderX 2.8.3+）
- Register, log in, send SMS verification code, encrypt and save password, change password, token management (SMS verification code function requires HBuilderX 2.8.3+)
- App手机号一键认证，免验证码
- App mobile phone number one-click authentication, no verification code
- 三方登录：App中的微信登录和Apple ID、微信小程序中的微信登录、支付宝小程序中的支付宝账户登录 
- Three-way login: WeChat login and Apple ID in App, WeChat login in WeChat applet, Alipay account login in Alipay applet
- rbac权限角色体系
- rbac permission role system

关于还缺少的部分，哪些DCloud在完善，哪些希望开发者给共同完善开源项目，计划与边界公布如下：
Regarding the missing parts, which DCloud is improving, and which developers hope to jointly improve the open source project, the plans and boundaries are announced as follows:

1. 部分社交账户登录
1. Login to some social accounts

DCloud暂无计划开发百度、头条、QQ等小程序的登录，以及微博、QQ等App端的登录。欢迎其他开发者在开源项目上提交pr，共同完善`uni-id`。
DCloud has no plans to develop logins for small programs such as Baidu, Toutiao, and QQ, as well as logins for apps such as Weibo and QQ. Welcome other developers to submit pr on open source projects to jointly improve `uni-id`.

2. 邮箱验证集成
2. Email verification integration

发送邮件验证邮箱真实性，DCloud暂无计划开发，有需求的开发者欢迎提供pr。
Send an email to verify the authenticity of the email address. DCloud has no plans to develop it yet. Developers in need are welcome to provide pr.

3. 活体检测
3. Liveness detection

目前插件市场里已经有不少相关插件，未来DCloud会整合到`uni-id`中。
At present, there are many related plug-ins in the plug-in market, and DCloud will be integrated into `uni-id` in the future.

其他方面，各种常见开源项目如discuz、wordPress、ecshop的用户导入插件，不属于`uni-id`主工程，欢迎开发者单独提交插件到插件市场。
In other respects, the user-imported plugins of various common open source projects such as discuz, WordPress, and ecshop do not belong to the main project of `uni-id`. Developers are welcome to submit plugins to the plugin market separately.

`uni-id`的git仓库：[https://gitee.com/dcloud/uni-id.git](https://gitee.com/dcloud/uni-id.git)
git repository for `uni-id`: [https://gitee.com/dcloud/uni-id.git](https://gitee.com/dcloud/uni-id.git)


# 快速上手@start
# Quick start @start

使用uni-id需要按照以下步骤操作
To use uni-id you need to follow the steps below

**uni_modules版**
**uni_modules version**

1. HBuilderX 3.1.0+
2. 插件市场导入`uni-id`公用模块uni_modules版本，HBuilderX会自动导入依赖的`uni-config-center`，[插件市场 uni-id](https://ext.dcloud.net.cn/plugin?id=2116)
2. The plugin market imports the uni_modules version of the `uni-id` public module, and HBuilderX will automatically import the dependent `uni-config-center`, [plugin market uni-id](https://ext.dcloud.net.cn/plugin ?id=2116)
3. 在`uni-config-center`公用模块下创建`uni-id`目录，在创建的uni-id目录下再创建`config.json`文件配置uni-id所需参数（请参考下面config.json的说明），**注意：如果HBuilderX版本低于3.1.8，批量上传云函数及公共模块后需要单独再上传一次uni-id**
3. Create a `uni-id` directory under the `uni-config-center` public module, and then create a `config.json` file under the created uni-id directory to configure the parameters required by uni-id (please refer to the following config. json description), **Note: If the HBuilderX version is lower than 3.1.8, you need to upload the uni-id separately after uploading cloud functions and public modules in batches**
4. 在`cloudfunctions/common`下上传`uni-config-center`模块以及`uni-id`模块
4. Upload the `uni-config-center` module and the `uni-id` module under `cloudfunctions/common`
5. 在要使用`uni-id`的云函数右键选择`管理公共模块依赖`添加`uni-id`到云函数，添加依赖后需要重新上传该云函数
5. Right-click the cloud function you want to use `uni-id` and select `Manage public module dependencies` to add `uni-id` to the cloud function. After adding the dependency, you need to re-upload the cloud function
6. 创建`uni-id-users`、`opendb-verify-codes`集合（opendb-verify-codes是验证码表。可以使用示例项目里面的db_init.json进行初始化、也可以在web控制台新建表时选择这些表模块）
6. Create a collection of `uni-id-users` and `opendb-verify-codes` (opendb-verify-codes is a verification code table. You can use db_init.json in the sample project to initialize, or you can create a new table in the web console when selecting these table modules)

**非uni_modules版本（非uni_modules版本已不再更新，不推荐使用）**
**Non-uni_modules version (non-uni_modules version is no longer updated and deprecated)**

1. HBuilderX 2.9+
2. 插件市场导入`uni-id`公用模块，[插件市场 uni-id](https://ext.dcloud.net.cn/plugin?id=2116)
2. The plugin market imports the `uni-id` public module, [plugin market uni-id](https://ext.dcloud.net.cn/plugin?id=2116)
3. 修改公用模块`uni-id`下的`config.json`内所需参数（请参考下面config.json的说明）
3. Modify the required parameters in `config.json` under the public module `uni-id` (please refer to the description of config.json below)
4. 上传`cloudfunctions/common`下的`uni-id`模块
4. Upload the `uni-id` module under `cloudfunctions/common`
5. 按照[公用模块使用说明](/uniCloud/cf-common)在云函数下安装`uni-id`模块
5. Install the `uni-id` module under the cloud function according to the [Common Module Instructions](/uniCloud/cf-common)
6. 创建`uni-id-users`、`opendb-verify-codes`集合（opendb-verify-codes是验证码表。可以使用示例项目里面的db_init.json进行初始化、也可以在web控制台新建表时选择这些表模块）
6. Create a collection of `uni-id-users` and `opendb-verify-codes` (opendb-verify-codes is a verification code table. You can use db_init.json in the sample project to initialize, or you can create a new table in the web console when selecting these table modules)

或者直接导入[uni-id在插件市场的示例工程](https://ext.dcloud.net.cn/plugin?id=2116)
Or directly import [uni-id's example project in the plugin market](https://ext.dcloud.net.cn/plugin?id=2116)

## config.json的说明@config
## config.json description @config

uni-id的云端配置文件在`uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`中。
The cloud configuration file for uni-id is in `uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`.

注意：
Notice:

- **config.json是一个标准json文件，不支持注释**
- **config.json is a standard json file and does not support comments**
- 如果不希望使用config.json初始化而是想自行传入参数（一般不推荐这么做），可以使用`createInstance`方法[uniID.createInstance](uniCloud/uni-id.md?id=create-instance)
- If you don't want to use config.json to initialize but want to pass in the parameters yourself (generally not recommended), you can use the `createInstance` method [uniID.createInstance](uniCloud/uni-id.md?id=create-instance)

> 在云函数URL化的场景无法获取客户端平台信息，可以在调用uni-id相关接口之前（推荐在云函数入口）通过修改context.PLATFORM手动传入客户端平台信息
> In the scenario where the cloud function is URLized, the client platform information cannot be obtained. You can manually transfer the client platform information by modifying context.PLATFORM before calling the uni-id related interface (recommended at the cloud function entry).

例：
example:

```js
exports.main = async (event, context) => {
	context.PLATFORM = 'app'
}
```

配置项：
Configuration item:

+ `passwordSecret`为用于加密密码入库的密钥
+ `passwordSecret` is the key used to encrypt the password storage
+ `tokenSecret`为生成token需要的密钥
+ `tokenSecret` is the secret key needed to generate the token
+ `tokenExpiresIn`token有效期，以秒为单位
+ `tokenExpiresIn` token expiration in seconds
+ `passwordErrorLimit`密码错误重试次数，分ip记录密码错误次数，达到重试次数之后等待`passwordErrorRetryTime`时间之后才可以重试
+ `passwordErrorLimit` the number of retries for password errors, record the number of password errors by ip, and wait for `passwordErrorRetryTime` time before retrying after reaching the number of retries
+ `passwordErrorRetryTime`单位为秒
+ `passwordErrorRetryTime` in seconds
+ 如果使用`sendSmsCode`接口发送短信需要前往[https://dev.dcloud.net.cn/#/pages/sms/base](https://dev.dcloud.net.cn/#/pages/sms/base)充值短信额度，配置`config.json`的`service`字段，字段说明见下方示例
+ If you use the `sendSmsCode` interface to send SMS, you need to go to [https://dev.dcloud.net.cn/#/pages/sms/base](https://dev.dcloud.net.cn/#/pages/sms /base) to recharge the SMS quota, configure the `service` field of `config.json`, see the example below for field descriptions
+ 如果使用其他方式发送短信可以参考`sendSmsCode`接口的实现[uni-id sendSmsCode](https://gitee.com/dcloud/uni-id/blob/master/src/lib/verify/send-sms-code.js)
+ If you use other methods to send SMS, you can refer to the implementation of the `sendSmsCode` interface [uni-id sendSmsCode](https://gitee.com/dcloud/uni-id/blob/master/src/lib/verify/send-sms- code.js)
+ 另外可以按照客户端平台进行不同的配置，参考下面示例
+ In addition, different configurations can be made according to the client platform, refer to the following example

**下面的配置文件中所有时间的单位都是秒**
**All times in the configuration files below are in seconds**

> ！！！重要！！！ passwordSecret与tokenSecret十分重要，切记妥善保存（不要直接使用下面示例中的passwordSecret与tokenSecret）。修改passwordSecret会导致老用户使用密码无法登录，修改tokenSecret会导致所有已经下发的token失效。如果重新导入uni-id切勿直接覆盖config.json相关配置
> ! ! ! important! ! ! passwordSecret and tokenSecret are very important, remember to keep them properly (do not directly use passwordSecret and tokenSecret in the following example). Modifying the passwordSecret will cause old users to be unable to log in with the password, and modifying the tokenSecret will invalidate all issued tokens. If you re-import uni-id, do not directly overwrite config.json related configuration

```json
// 如果拷贝此内容切记去除注释
// If you copy this content, remember to remove the comment
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
  "preferedWebPlatform": "web", // 新增于uni-id 3.3.22，指定web端对应的PLATFORM名称，用于处理web和h5的兼容问题，详细说明见：https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=prefered-web-platform
  "app": { // 此处需和preferedAppPlatform保持一致
    "tokenExpiresIn": 2592000,
    "oauth": {
      // App微信登录所用到的appid、appsecret需要在微信开放平台获取，注意：不是公众平台而是开放平台
      // The appid and appsecret used for App WeChat login need to be obtained on the WeChat open platform. Note: it is not a public platform but an open platform
      "weixin": {
        "appid": "weixin appid",
        "appsecret": "weixin appsecret"
      },
      // App QQ登录所用到的appid、appsecret需要在腾讯开放平台获取，注意：不是公众平台而是开放平台
      // The appid and appsecret used for App QQ login need to be obtained from the Tencent open platform. Note: it is not a public platform but an open platform
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
      // The appid and appsecret used for WeChat applet login need to be obtained from the corresponding applet management console
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
      // The appid and appsecret used for QQ applet login need to be obtained from the corresponding applet management console
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
      // For the appid and privateKey used for Alipay applet login, please refer to the Alipay applet documentation to set or obtain, https://opendocs.alipay.com/open/291/105971#LDsXr
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
**About token auto refresh**

tokenExpiresThreshold用于指定token还有多长时间过期时自动刷新token。
tokenExpiresThreshold is used to specify how long the token will expire and automatically refresh the token.

例：指定`tokenExpiresThreshold:600,tokenExpiresIn:7200`，token过期时间为2小时，在token有效期不足10分钟时自动刷新token
Example: Specify `tokenExpiresThreshold:600,tokenExpiresIn:7200`, the token expiration time is 2 hours, and the token is automatically refreshed when the token validity period is less than 10 minutes

在token还有5分钟过期时调用checkToken接口会返回新的token和新的token的过期时间（新token有效时间也是2小时），需要前端主动保存此新token。
Calling the checkToken interface when the token expires in 5 minutes will return the new token and the expiration time of the new token (the valid time of the new token is also 2 hours). The front end needs to actively save the new token.

## Token@token

用户注册/登录成功之后均会返回token及其过期时间，token是一个[json web token](https://jwt.io/)字符串。开发者应在用户登录/注册成功后持久化保存token及其过期时间。同样的在用户登出之后应删除保存的token及其过期时间。
After the user registers/login successfully, the token and its expiration time will be returned. The token is a [json web token](https://jwt.io/) string. The developer should persist the token and its expiration time after the user logs in/registers successfully. Similarly, the saved token and its expiration time should be deleted after the user logs out.

参考：
reference:

- [保存token及其过期时间](uniCloud/uni-id?id=save-token)
- [Save token and its expiration time](uniCloud/uni-id?id=save-token)
- [删除token及其过期时间](uniCloud/uni-id?id=remove-token)
- [Remove token and its expiration time](uniCloud/uni-id?id=remove-token)

用户token为明文存储，可以在token内查看用户相关信息。uniCloud也提供了一个接口用于直接获取token内的用户信息，参考：[uniCloud.getCurrentUserInfo](uniCloud/client-sdk.md?id=client-getcurrentuserinfo)
The user token is stored in plaintext, and user-related information can be viewed in the token. uniCloud also provides an interface for directly obtaining user information in the token, refer to: [uniCloud.getCurrentUserInfo](uniCloud/client-sdk.md?id=client-getcurrentuserinfo)

uniCloud.getCurrentUserInfo接口大致逻辑如下，需要注意的是某些小程序平台不支持atob，getCurrentUserInfo接口内已包含atob的polyfill
The general logic of the uniCloud.getCurrentUserInfo interface is as follows. It should be noted that some applet platforms do not support atob, and the getCurrentUserInfo interface already contains atob polyfill

```js
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWE1OTNiYTkxYTc1MDAwMDE2NmY3OGQiLCJyb2xlIjpbImFkbWluIl0sInBlcm1pc3Npb24iOltdLCJpYXQiOjE2MzgyNDMzNjUsImV4cCI6MTYzODI1MDU2NX0.MRHEvNYhj9yXjPK04rhZOdnitaxRdF2Ek9BbZjPJyDE'
const userSegment = token.split('.')[1]
const userInfo = atob(userSegment) // '{"uid":"61a593ba91a750000166f78d","role":["admin"],"permission":[],"iat":1638243365,"exp":1638250565}'
```

## preferedAppPlatform@prefered-app-platform

> 新增于uni-id 3.3.12
> Added in uni-id 3.3.12

**前提介绍：** 
**Premise introduction:**

uni-app vue2版本app端对应的platform为`app-plus`（HBuilderX 3.4.9起 vue2版本app端对应的platform值也调整为`app`），uni-app vue3版本app端对应的platform为`app`。此改动引发了一些问题，比如在uni-id内使微信登录会无法匹配对应的平台导致登录报错。
The platform corresponding to the app side of the uni-app vue2 version is `app-plus` (the platform value corresponding to the app side of the vue2 version of HBuilderX 3.4.9 is also adjusted to `app`), and the platform corresponding to the app side of the uni-app vue3 version is ` app`. This change has caused some problems. For example, the WeChat login in the uni-id will not match the corresponding platform, resulting in a login error.

由于uni-id将客户端平台存储在了数据库内（例如：app端微信登录的openid被存储为`wx_openid['app-plus']`），此问题无法平滑升级，因此对于新老项目建议分别处理。
Since the uni-id stores the client platform in the database (for example, the openid of WeChat login on the app side is stored as `wx_openid['app-plus']`), this problem cannot be upgraded smoothly, so it is recommended to separate the old and new projects. deal with.

**如果配置文件中使用的客户端平台和客户端不一致会出现`Client platform is app, but app-plus was found in config.`这种提示，按照下面文档配置`preferedAppPlatform`后即可正常使用。**
**If the client platform used in the configuration file is inconsistent with the client, the prompt `Client platform is app, but app-plus was found in config.` will appear. After configuring `preferredAppPlatform` according to the following document, it can be used normally. **

### 旧项目的处理
### Handling of old projects

旧项目建议将所有platform为app的场景统一为app-plus，即建议使用如下配置
In the old project, it is recommended to unify all scenarios where the platform is app as app-plus, that is, it is recommended to use the following configuration

```js
// 以下仅列出相关配置
// Only the relevant configuration is listed below
{
	"preferedAppPlatform": "app-plus", // uni-id内部会将收到的app平台全部转化为app-plus平台
	"app-plus": { // 配置内的平台名称和preferedAppPlatform保持一致
		"oauth": {}
	}
}
```

### 新项目的处理
### Handling of new items

新项目建议将platform统一为app，即建议使用如下配置
The new project proposes to unify the platform as an app, that is, it is recommended to use the following configuration

```js
// 以下仅列出相关配置
// Only the relevant configuration is listed below
{
	"preferedAppPlatform": "app", // uni-id内部会将收到的app-plus平台全部转化为app平台
	"app": { // 配置内的平台名称和preferedAppPlatform保持一致
		"oauth": {}
	}
}
```

## preferedWebPlatform@prefered-web-platform

> 新增于uni-id 3.3.22
> Added in uni-id 3.3.22

**前提介绍：** 
**Premise introduction:**

HBuilderX 3.4.9起，uni-app web端对应的platform由`h5`调整为`web`。此改动引发了一些问题，比如在uni-id内将无法获取web平台配置，以及有些基于uni-id扩充功能的项目可能存在不兼容的情况
Starting from HBuilderX 3.4.9, the platform corresponding to the uni-app web side has been adjusted from `h5` to `web`. This change caused some issues, such as the inability to get web platform configuration within uni-id, and possible incompatibilities for some projects based on uni-id extensions

**如果配置文件中使用的客户端平台和客户端不一致会出现`Client platform is web, but h5 was found in config.`这种提示，按照下面文档配置`preferedWebPlatform`后即可正常使用。**
**If the client platform used in the configuration file is inconsistent with the client, the prompt `Client platform is web, but h5 was found in config.` will appear. After configuring `preferredWebPlatform` according to the following document, it can be used normally. **

### 旧项目的处理
### Handling of old projects

旧项目建议将所有platform为web的场景统一为h5，即建议使用如下配置
In the old project, it is recommended to unify all scenarios where the platform is web as h5, that is, it is recommended to use the following configuration

```js
// 以下仅列出相关配置
// Only the relevant configuration is listed below
{
	"preferedWebPlatform": "h5", // uni-id内部会将收到的web平台全部转化为h5平台
	"h5": { // 配置内的平台名称和preferedWebPlatform保持一致
		"oauth": {}
	}
}
```

### 新项目的处理
### Handling of new items

新项目建议将platform统一为web，即建议使用如下配置
The new project proposes to unify the platform as web, that is, it is recommended to use the following configuration

```js
// 以下仅列出相关配置
// Only the relevant configuration is listed below
{
	"preferedWebPlatform": "web", // uni-id内部会将收到的h5平台全部转化为web平台
	"web": { // 配置内的平台名称和preferedWebPlatform保持一致
		"oauth": {}
	}
}
```

# 用户角色权限@rbac
# User role permissions @rbac

为什么需要角色权限管理？
Why do you need role rights management?
- 对于后台管理系统，比如[uniCloud admin](/uniCloud/admin)，除了超级管理员，不同账号通常需根据职位、责任设定不同的系统权限。
- For background management systems, such as [uniCloud admin](/uniCloud/admin), except for super administrators, different accounts usually need to set different system permissions according to their positions and responsibilities.
- [clientDB](/uniCloud/database)允许前端直接操作数据库，但部分字段应该是系统计算或管理员设置的，比如文章的阅读数、收藏数及是否加精置顶，这些字段不允许普通用户在前端通过clientDB直接修改，此时也需要通过权限控制来保证系统的安全稳定。 
- [clientDB](/uniCloud/database) allows the front-end to directly operate the database, but some fields should be calculated by the system or set by the administrator, such as the number of articles read, the number of favorites, and whether they are topped. These fields do not allow ordinary users to The front-end is directly modified through clientDB, and permission control is also required at this time to ensure the security and stability of the system.

`uni-id`基于经典的RBAC模型实现了角色权限系统。
`uni-id` implements a role permission system based on the classic RBAC model.

## RBAC模型简介
## RBAC model introduction

RBAC：Role-Based Access Control，基于角色的访问控制。
RBAC: Role-Based Access Control, role-based access control.

其基本思想：对系统操作的各种权限不是直接授予具体的用户，而是在用户集合与权限集合之间建立一个角色集合。每一种角色对应一组相应的权限。一旦用户被分配了适当的角色后，该用户就拥有此角色的所有权限。
Its basic idea: various permissions for system operations are not directly granted to specific users, but a role set is established between the user set and the permission set. Each role corresponds to a corresponding set of permissions. Once a user is assigned the appropriate role, the user has all the permissions of that role.

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/431878b0-0ca0-11eb-8a36-ebb87efcf8c0.png)

这样做的好处是，增强系统管理的扩展性，对于批量用户的权限变更，仅需变更该批用户角色对应权限即可，而无需对该批每个用户变更权限。
The advantage of this is that it enhances the scalability of system management. For the permission changes of batch users, it is only necessary to change the permissions corresponding to the roles of the batch of users, without changing the permissions of each user in the batch.

这个模型有三个关键名词：用户、角色、权限：
This model has three key nouns: users, roles, and permissions:
- 用户：使用系统的人，一个用户可以同时有多个角色
- User: The person who uses the system, a user can have multiple roles at the same time
- 角色：权限的集合，一个角色可以有多个权限
- Role: a collection of permissions, a role can have multiple permissions
- 权限：数据权限或业务权限，例如：删除用户、删除评论等
- Permissions: data permissions or business permissions, such as: delete users, delete comments, etc.

## 用户
## users

用户信息存储在`uni-id-users`表中，然后通过`role`字段保存该用户所拥有的所有角色ID，角色ID即角色表（`uni-id-roles`表）中的`role_id`字段，注意不是`_id`字段。
User information is stored in the `uni-id-users` table, and then all the role IDs owned by the user are saved through the `role` field. The role ID is the `role_id` in the role table (`uni-id-roles` table) field, note not the `_id` field.

```
{
  {
    "_id":"5f8428181c229600010389f6",
    "username":"uniapp",
    "email":"hr2013@dcloud.io",
    "role":[
      "USER_ADMIN",
      "NOTICE_ADMIN"
    ],
    "created_date":1602495783272
  }  
}
```

>Tips：将用户角色设计为用户表的字段，而没有新建`用户角色关联表`的原因：避免mongodb在跨表查询时的性能开销
>Tips: Design the user role as a field of the user table instead of creating a new `user role association table`: avoid the performance overhead of mongodb when querying across tables

## 角色
## Role

角色信息存储在`uni-id-roles`表中
Role information is stored in the `uni-id-roles` table

| 字段				| 类型			| 必填| 描述																	|
| Fields | Type | Required | Description |
| ----------	| ---------	| ----| --------------------------------------|
| \_id				| Object ID	| 是	| 系统自动生成的Id											|
| \_id | Object ID | Yes | System auto-generated ID |
| role_id			| String		| 是	| 角色唯一标识													|
| role_id | String | Yes | Unique role ID |
| role_name		| String		| 否	| 角色名，展示用												|
| role_name | String | No | Role name, for display |
| permission	| Array			| 是	| 角色拥有的权限列表										|
| permission | Array | yes | list of permissions the role has |
| comment			| String		| 否	| 备注																	|
| comment | String | No | Comment |
| created_date| Timestamp	| 是	| 角色创建时间													|
| created_date| Timestamp | yes | role creation time |

其中：
in:
- `role_id`为角色标志，全局唯一，可用于clientDB中的权限控制，建议按照语义化命名，例如：`USER_ADMIN`表示人事管理、`NOTICE_ADMIN`表示公告管理
- `role_id` is a role flag, which is globally unique and can be used for permission control in clientDB. It is recommended to name it semantically, for example: `USER_ADMIN` means personnel management, `NOTICE_ADMIN` means announcement management
- `permission`为数组类型，存储该角色拥有的所有权限ID，权限ID即权限表（`uni-id-permissions`表）中的`permission_id`字段，注意不是`_id`字段
- `permission` is an array type, which stores all the permission IDs owned by the role. The permission ID is the `permission_id` field in the permission table (`uni-id-permissions` table), note that it is not the `_id` field

如下为示例：
The following is an example:

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
The following is an example of role configuration in clientDB:

```js
// uni-id-users.schema.json
{
  "permission": {
    "update":"doc._id == auth.uid || 'USER_ADMIN' in auth.role" //用户自己或人事管理员可执行用户表的.update操作
  } 
}
```

>Tips1：uni-id中`admin`为超级管理员角色，uni-clientDB也基于同样的策略；如果用户角色包含`admin`，则该用户就拥有所有数据表的全部权限。
>Tips1: `admin` in uni-id is the super administrator role, and uni-clientDB is also based on the same policy; if the user role contains `admin`, the user has all permissions on all data tables.

>Tips2：出厂时可内置常用角色，也可上线后由运营人员动态创建角色。
>Tips2: Common roles can be built-in at the factory, or roles can be dynamically created by operators after going online.

## 权限
## permissions

权限信息在`uni-id-permissions`表中，表结构定义如下：
Permission information is in the `uni-id-permissions` table, and the table structure is defined as follows:

| 字段						| 类型			| 必填| 描述																	|
| Fields | Type | Required | Description |
| ----------			| ---------	| ----| --------------------------------------|
| \_id						| Object ID	| 是	| 系统自动生成的Id											|
| \_id | Object ID | Yes | System auto-generated ID |
| permission_id		| String		| 是	| 权限唯一标识													|
| permission_id | String | Yes | Unique ID of permission |
| permission_name	| String		| 否	| 权限名，展示用												|
| permission_name | String | No | Permission name, for display |
| comment					| String		| 否	| 备注																	|
| comment | String | No | Comment |
| created_date		| Timestamp	| 是	| 权限创建时间													|
| created_date | Timestamp | yes | permission creation time |

其中，`permission_id`为权限标志，全局唯一，可用于clientDB中的权限配置，建议按照语义化命名，例如：`USER_DEL`、`BRANCH_ADD`。**权限总数量不得超过500**
Among them, `permission_id` is a permission flag, which is globally unique and can be used for permission configuration in clientDB. It is recommended to name it semantically, for example: `USER_DEL`, `BRANCH_ADD`. **The total number of permissions cannot exceed 500**

如下为示例内容：
The following is an example content:

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
The following is an example of the configuration of permissions in clientDB:

```js
// uni-id-users.schema.json
{
  "permission": {
    "update":"doc._id == auth.uid || 'USER_EDIT' in auth.permission" //用户自己或有`USER_EDIT`权限的用户，可执行用户表的.update操作
  }
}
```

>Tips1：建议出厂时内置所有权限，方便clientDB中的权限配置。
>Tips1: It is recommended that all permissions are built-in at the factory to facilitate the configuration of permissions in clientDB.

## 其他说明
## other instructions

uni-id针对角色权限模块封装了丰富的API，比如：获取用户角色、获取某角色下的所有权限等，详情参考：[角色权限API](uniCloud/uni-id.md?id=rbac-api)。
uni-id encapsulates rich APIs for role permission modules, such as: obtaining user roles, obtaining all permissions under a role, etc. For details, please refer to: [Role Permission API](uniCloud/uni-id.md?id=rbac-api ).

> 自`uni-id 3.0.0`起，支持在token内缓存用户的角色权限，默认开启此功能，各登录接口的needPermission参数不再生效。如需关闭请在config内配置`"removePermissionAndRoleFromToken": true`。详情参考：[缓存角色权限](uniCloud/uni-id?id=cache-permission-in-token)。
> Since `uni-id 3.0.0`, the user's role permissions can be cached in the token. This function is enabled by default, and the needPermission parameter of each login interface no longer takes effect. To disable it, configure `"removePermissionAndRoleFromToken": true` in config. For details, refer to: [Cache role permission](uniCloud/uni-id?id=cache-permission-in-token).

如果不在token内缓存角色权限，可以使用以下方式，在checkToken时返回数据库内对应用户的角色权限信息。
If the role permissions are not cached in the token, you can use the following method to return the role permission information of the corresponding user in the database when checking the token.

uni-id登录注册接口可接收`needPermission`参数，若`needPermission`配置为true时，后续会在`checkToken`接口返回用户权限列表（permission）。如下是通过token判断权限的简单示例：
The uni-id login registration interface can receive the `needPermission` parameter. If `needPermission` is configured as true, the user permission list (permission) will be returned in the `checkToken` interface. The following is a simple example of judging permissions by token:

```js
// 简单的权限校验示例
// Simple permission check example
function hasPermission(token, permission) {
  const checkTokenRes = await uniID.checkToken(token)
  return checkTokenRes.permission.includes(permission)
}
```

注意：**在uniCloud admin中，封装了可视化的用户、权限、角色的管理，新增删除修改均支持。**无需自己维护。[详见](https://uniapp.dcloud.net.cn/uniCloud/admin?id=mutiladmin)
Note: **In uniCloud admin, visual management of users, permissions, and roles is encapsulated, and additions, deletions, and modifications are supported. **No maintenance required. [See details](https://uniapp.dcloud.net.cn/uniCloud/admin?id=mutiladmin)

**如果需要管理多端的用户，建议使用type在uni-id-users表内进行区分，不要分多个表**
**If you need to manage multiple users, it is recommended to use type to distinguish in the uni-id-users table, do not divide into multiple tables**

# uni-id的API列表@api
# uni-id API list @api

`uni-id`作为一个云函数的公共模块，暴露了各种API，供云函数调用。
As a public module of cloud functions, `uni-id` exposes various APIs for cloud functions to call.

## 基础功能@base
## Basic functions @base

### 创建uni-id实例@create-instance
### Create uni-id instance @create-instance

> uni-id 3.0.7及以上版本
> uni-id 3.0.7 and above

用法：`uniID.createInstance(Object CreateInstanceParams);`
Usage: `uniID.createInstance(Object CreateInstanceParams);`

CreateInstanceParams内可以传入云函数context，自`uni-id 3.3.13`起，也可以传入clientInfo参数，作用和context类似。方便在云对象内获取clientInfo后直接传入，[什么是云对象？](uniCloud/cloud-obj.md)。
The cloud function context can be passed in CreateInstanceParams. Since `uni-id 3.3.13`, the clientInfo parameter can also be passed in, which is similar to context. It is convenient to directly pass in the clientInfo after obtaining the clientInfo in the cloud object, [What is a cloud object? ](uniCloud/cloud-obj.md).

```js
// 云函数代码，传入context
// Cloud function code, pass in context
const uniID = require('uni-id')
exports.main = async function(event,context) {
  context.APPID = '__UNI__xxxxxxx' // 替换为当前客户端的APPID，通过客户端callFunction请求的场景可以使用context.APPID获取
  context.PLATFORM = 'h5' // 替换为当前客户端的平台类型，通过客户端callFunction请求的场景可以使用context.PLATFORM获取
  context.LOCALE = 'zh-Hans' // 替换为当前客户端的语言代码，通过客户端callFunction请求的场景可以使用context.LOCALE获取
  const uniIDIns = uniID.createInstance({ // 创建uni-id实例，其上方法同uniID
    context: context,
    // config: {} // 完整uni-id配置信息，使用config.json进行配置时无需传此参数
    // config: {} // Complete uni-id configuration information, no need to pass this parameter when using config.json for configuration
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
// Cloud object code passes in clientInfo
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
**Why do you need to create a uni-id instance yourself**

默认情况下uni-id某些接口会自动从全局context内获取客户端的PLATFORM（平台，如：app、web、mp-weixin）信息。
By default, some interfaces of uni-id will automatically obtain the client's PLATFORM (platform, such as app, web, mp-weixin) information from the global context.

在单实例多并发的场景下可能无法正确获取（全局对象会被后面的请求覆盖，可能会导致前面一次请求使用了后面一次请求的PLATFORM信息）。因此推荐在开启云函数单实例多并发后，自行为uni-id传入context。
In the scenario of single instance and multiple concurrency, it may not be obtained correctly (the global object will be overwritten by the subsequent request, which may cause the previous request to use the PLATFORM information of the subsequent request). Therefore, it is recommended to pass in the context for the uni-id after enabling the single-instance multi-concurrency of cloud functions.

此外云函数url化时无法获取客户端信息，也需要使用这种方式将客户端信息传入uni-id。
In addition, when the cloud function is urlized, the client information cannot be obtained, and it is also necessary to pass the client information into the uni-id in this way.

### 用户注册 @register
### User registration @register
用户注册就是将客户端用户输入的用户名和密码，经服务端：
User registration is to send the user name and password entered by the client user through the server:
1. 校验用户名是否与已经注册的用户名重复，如果重复就返回错误
1. Check whether the user name is the same as the registered user name, and return an error if it is repeated
2. 加密密码
2. Encryption password
3. 生成token
3. Generate token
最后将`用户名` `密码` `token`存储到数据库并返回token、uid等响应参数（详见下文“响应参数”表）的过程。
Finally, the process of storing `username` `password` `token` to the database and returning response parameters such as token and uid (see the "Response Parameters" table below for details).

如上操作uni-id的注册api内部会自动完成
The registration api of the uni-id operation as above will be automatically completed
用法`uniID.register(Object RegisterParams)`
Usage `uniID.register(Object RegisterParams)`

**注意**
**Notice**

- 注册成功之后会返回token、tokenExpired，在获取token之后应进行持久化存储，详情参考：[保存token及其有效期](uniCloud/uni-id.md?id=save-token)
- After successful registration, token and tokenExpired will be returned. After obtaining token, persistent storage should be performed. For details, please refer to: [Save token and its validity period](uniCloud/uni-id.md?id=save-token)

**参数说明**
**Parameter Description**

| 字段					| 类型		| 必填| 说明																																					|
| Fields | Type | Required | Description |
| ---						| ---			| ---	| ---																																						|
| username			| String	| 是	|用户名，唯一																																		|
| username | String | yes | username, unique |
| password			| String	| 是	|密码																																						|
| password | String | yes | password |
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission）。`uni-id 3.0.0`起，如果配置`"removePermissionAndRoleFromToken": false`此选项不再生效	|
| needPermission| Boolean | No | When set to true, the user permission will be returned when checkingToken. Since `uni-id 3.0.0`, if you configure `"removePermissionAndRoleFromToken": false`, this option no longer takes effect |
| myInviteCode	| String	| 否	|自行设置用户的邀请码																														|
| myInviteCode | String | No | Set the user's invitation code by yourself |
| role	| Array	| 否	|设定用户角色												|
| role | Array | no | set user role |

RegisterParams不仅支持如上列举字段，可以根据需要自定义更多字段。比如：直接传入mobile即可设置手机号码，**注意：切勿直接传入客户端传来的参数，否则这是一个极大的安全问题**
RegisterParams not only supports the fields listed above, but more fields can be customized as needed. For example: the mobile phone number can be set by directly passing in the mobile phone. **Note: Do not directly pass in the parameters from the client, otherwise it will be a great security issue**

username可以是字符串、可以是email、可以是手机号，本插件不约束，开发者可以自己定。如果使用登录接口时希望可以同时使用username、email、手机号登录，那么切记username不可以和手机号、email拥有相同格式，否则可能出现某一串字符串是一个用户的username同时又是另一个用户的email或者手机号的情况。
The username can be a string, an email, or a mobile phone number. This plugin is not restricted, and the developer can set it by himself. If you want to use username, email and mobile phone number to log in at the same time when using the login interface, then remember that username cannot have the same format as mobile phone number and email, otherwise a string of strings may appear that is the username of one user and another user at the same time. email or mobile phone number.

比如要求username为手机号，则自行在前端界面上做好提示，在后台对格式进行校验。
For example, if the username is required to be a mobile phone number, a prompt will be made on the front-end interface, and the format will be verified in the background.

password入库时会自动进行一次sha1加密，不明文存储密码。这是一种单向不可逆加密方式，强度高于md5，密钥是开发者在config.json里自行配置的passwordSecret。
When the password is stored in the database, it will automatically perform sha1 encryption once, and store the password in unknown text. This is a one-way irreversible encryption method, the strength is higher than md5, and the key is the passwordSecret configured by the developer in config.json.

即用户注册时输入的密码，通过密钥passwordSecret使用sha1算法加密，然后再入库。
That is, the password entered by the user during registration is encrypted by the key passwordSecret using the sha1 algorithm, and then stored in the library.

由于是不可逆加密，理论上数据库泄露或passwordSecret泄露都不会造成用户的真实密码被泄露。
Due to irreversible encryption, in theory, neither database leakage nor passwordSecret leakage will cause the user's real password to be leaked.

但任何加密算法，在撞库等暴力手段面前被攻破只是时间和算力问题。使用自己特定的而不是默认的passwordSecret，并保护好passwordSecret可以数倍提升破解的算力代价。
However, it is only a matter of time and computing power for any encryption algorithm to be broken in the face of violent means such as credential stuffing. Using your own specific passwordSecret instead of the default, and protecting the passwordSecret can increase the computational cost of cracking several times.

uni-id公共模块没有限制密码的强度，如长度限制、是否包含大小写或数据等限制，这类限制需要开发者自行在云函数中处理。
The uni-id public module does not limit the strength of the password, such as length restrictions, whether it contains uppercase and lowercase or data, etc. Such restrictions need to be handled by developers themselves in cloud functions.

**响应参数**
**Response parameters**

| 字段				| 类型	| 必填| 说明															|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																|
| code				| Number| 是	|错误码，0表示成功									|
| code | Number| Yes | Error code, 0 means success |
| message			| String| 是	|详细信息														|
| message | String| Yes | Details |
| uid					| String| -		|用户id															|
|uid|String| - |userid|
| token				| String| -		|注册完成自动登录之后返回的token信息|
| token | String| - |The token information returned after the registration is completed and the automatic login is completed|
| tokenExpired| String| -		|token过期时间											|
| tokenExpired| String| - |token expiration time |

**示例代码**
**Sample code**

```js
// 云函数register的代码
// Code for cloud function register
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		username,
		password
	} = event
  //自己额外增加的校验密码规范的逻辑（可选）
  //Additional logic to verify password specification by yourself (optional)
  //强弱密码校验,密码至少包含大写字母，小写字母，数字，且不少于6位
  //Strong and weak password verification, the password contains at least uppercase letters, lowercase letters, numbers, and no less than 6 digits
  if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/.test(password)){
    return {
      code: 401,
      msg: '密码至少包含大写字母，小写字母，数字，且不少于6位'
    }
  }
	// 自动验证用户名是否与已经注册的用户名重复，如果重复会直接返回错误。否则会自动生成token并加密password存储username、password、token到数据表uni-id-users，并返回如上响应参数
	// Automatically verify whether the user name is the same as the registered user name, if it is repeated, an error will be returned directly. Otherwise, a token will be automatically generated and the password will be encrypted to store username, password, and token in the data table uni-id-users, and return the above response parameters
	const res = await uniID.register({ //支持传入任何值，比如可以直接传入mobile即可设置手机号码，切勿直接传入event否则这是一个极大的安全问题
	    username,
	    password
	})
	return res
}
```

```js
// 客户端代码
// client code
uniCloud.callFunction({
	name: 'register',
	data: {
		username: 'username',
		password: 'user password'
	},
	success(res){
		if(res.result.code === 0) {
			// 2.8.0版本起调整为蛇形uni_id_token（调整后在一段时间内兼容驼峰uniIdToken）
			// Since version 2.8.0, it has been adjusted to snake-shaped uni_id_token (after adjustment, it will be compatible with camel-case uniIdToken for a period of time)
			uni.setStorageSync('uni_id_token',res.result.token)
			uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired)
			// 其他业务代码，如跳转到首页等
			// Other business codes, such as jumping to the home page, etc.
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
### User login @login

登录就是通过查询数据库验证，客户端传递的“用户名”和“密码”是否匹配并返回token、uid等响应参数（详见下文“响应参数”表）的过程。
Login is the process of verifying whether the "username" and "password" passed by the client match by querying the database, and returning response parameters such as token and uid (see the "Response Parameters" table below for details).
如果你允许用户同时使用多种方式登录，需要注意：必须限制用户注册用户名不为邮箱格式且不为手机号格式，uni-id内部并未做出此类限制。否则用户可以使用他人的手机号码作为用户名注册账号，这就成了一个漏洞。具体做法可以参考[云端一体应用快速开发模版"uniStarter"](https://ext.dcloud.net.cn/plugin?id=5057)
If you allow users to log in in multiple ways at the same time, you need to pay attention: you must restrict the user's registered user name to not be in the email format and not in the mobile phone number format. There is no such restriction inside uni-id. Otherwise, users can use someone else's mobile phone number as a user name to register an account, which becomes a loophole. For details, please refer to [Cloud Integrated Application Rapid Development Template "uniStarter"](https://ext.dcloud.net.cn/plugin?id=5057)

用法：`uniID.login(Object LoginParams)`
Usage: `uniID.login(Object LoginParams)`

**注意**
**Notice**

- 登录成功之后会返回token、tokenExpired，在获取token之后应进行持久化存储，详情参考：[保存token及其有效期](uniCloud/uni-id.md?id=save-token)
- After successful login, token and tokenExpired will be returned. After obtaining token, persistent storage should be performed. For details, please refer to: [Save token and its validity period](uniCloud/uni-id.md?id=save-token)
- 登录时请注意自行验证数据有效性
- Please verify the validity of the data by yourself when logging in

**参数说明**
**Parameter Description**

| 字段		| 类型	| 必填	| 说明	|
| Fields | Type | Required | Description |
| ---		| ---	| ---	| ---	|
| username	| String| 是	|用户名	|
| username | String| yes | username |
| password	| String| 是	|密码	|
| password | String| Yes | password |
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission）。`uni-id 3.0.0`起，如果配置`"removePermissionAndRoleFromToken": false`此选项不再生效	|
| needPermission| Boolean | No | When set to true, the user permission will be returned when checkingToken. Since `uni-id 3.0.0`, if you configure `"removePermissionAndRoleFromToken": false`, this option no longer takes effect |
| queryField	| Array| 否	|指定从哪些字段中比对username（传入参数均为username），不填默认与数据库内的username字段对比, 可取值'username'、'email'、'mobile'|
| queryField | Array| No | Specify which fields to compare the username from (the incoming parameters are all username), if not filled in, the default is to compare with the username field in the database, the possible values are 'username', 'email', 'mobile'|

**注意**
**Notice**

- 使用邮箱时需要用户对应的记录里`email_confirmed`为1才可以登录，手机号同样需要`mobile_confirmed`为1才可以登录
- When using the mailbox, the `email_confirmed` in the corresponding record of the user can be logged in, and the mobile phone number also needs `mobile_confirmed` to be 1 to log in

**响应参数**
**Response parameters**

| 字段				| 类型	| 必填| 说明											|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---												|
| uid					| String| 是	|用户Id											|
|uid|String|Yes |UserId|
| userInfo		| Object| 是	|用户全部信息								|
| userInfo | Object| Yes | All user information |
| code				| Number| 是	|错误码，0表示成功					|
| code | Number| Yes | Error code, 0 means success |
| message					| String| 是	|详细信息										|
| message | String| Yes | Details |
| token				| String| -		|登录成功之后返回的token信息|
| token | String| - |token information returned after successful login|
| tokenExpired| String| -		|token过期时间							|
| tokenExpired| String| - |token expiration time |

**示例代码**
**Sample code**

```js
// 云函数代码
// cloud function code
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		username,
		password
	} = event
	// 自动完成username、password验证是否合法的逻辑
	// Automatically complete the logic of username and password verification is legal
	const res = await uniID.login({
		username,
		password,
    queryField: ['username', 'email', 'mobile']
	})
	return res
}
```

### token校验@checktoken
### token verification @checktoken
一个校验客户端发起请求（uniCloud.callFunction）自带的uniIdToken，获得用户的uid、token、token的过期时间、角色、权限、用户信息(uni-id-users全部字段)的API。
An API that verifies the uniIdToken that comes with the client-initiated request (uniCloud.callFunction), and obtains the user's uid, token, token expiration time, role, permissions, and user information (all fields of uni-id-users).

这是非常高频且重要的API通常用于换取操作当前云函数的用户Id。
This is a very high frequency and important API that is usually used in exchange for the user ID of the current cloud function.

#### 思考
#### think
如果你并没有服务端开发经验，可能会想：为什么需要通过token去换取用户Id，而不是让客户端直接传递用户Id更方便？
If you have no experience in server-side development, you may think: Why do you need to exchange the user ID with a token, instead of letting the client pass the user ID directly?
这里就涉及到安全问题，有一句话叫做：“前端传递的参数都是不可信任的”。比如：你去银行取款，柜台会要求出示你的身份证来证明你是谁，而不是你直接告诉银行柜台你是谁就管用。否则这是一个极大的安全漏洞。
This involves security issues. There is a saying: "The parameters passed by the front end cannot be trusted." For example, if you go to the bank to withdraw money, the counter will ask to show your ID card to prove who you are, instead of telling the bank counter directly who you are. Otherwise this is a huge security hole.
综上所述：所有服务端操作涉及账户信息相关内容，都需要使用token来获得，而不是使用前端传递的参数。
To sum up: All server-side operations involving account information related content need to be obtained by using tokens instead of parameters passed by the front-end.

用法：`uniID.checkToken(String token, Object checkTokenOptions)`
Usage: `uniID.checkToken(String token, Object checkTokenOptions)`

**参数说明**
**Parameter Description**

| 字段							| 类型	| 必填| 说明												|
| Fields | Type | Required | Description |
| ---								| ---		| ---	| ---													|
| token							| String| 是	|客户端callFunction带上的token|
| token | String| Yes |token on the client's callFunction|
| checkTokenOptions	| Object| 是	|checkToken选项`uni-id 3.0.0`版起支持								|
| checkTokenOptions | Object| Yes |checkToken option `uni-id` is supported since version 3.0.0` |

**checkTokenOptions说明**
**checkTokenOptions description**

| 字段					| 类型		| 必填| 默认值|说明													|
| Field | Type | Required | Default Value | Description |
| ---						| ---			| ---	|---		| ---													|
| needPermission| Boolean	| 否	|false		|是否需要返回角色权限，请阅读下方说明|
| needPermission| Boolean | No |false |Whether you need to return the role permission, please read the instructions below|
| needUserInfo | Boolean	| 否	|true			|是否需要返回用户信息。|
| needUserInfo | Boolean | No |true | Whether user information needs to be returned. |

**说明**
**illustrate**

- `needPermission`参数仅对token内未缓存角色权限且token内不包含needPermission的场景生效。
- The `needPermission` parameter takes effect only in scenarios where the role permission is not cached in the token and the token does not contain needPermission.
- 如果在token内缓存角色权限，建议将此`needUserInfo`参数配置为`false`
- If role permissions are cached within the token, it is recommended to configure this `needUserInfo` parameter to `false`
- 角色内包含admin时返回的permission是一个空数组，因此判断一个用户是否有权限时应注意admin角色额外进行判断
- The permission returned when the role contains admin is an empty array, so when judging whether a user has permission, you should pay attention to the admin role for additional judgment

请务必阅读一下此文档：[关于缓存角色权限的说明](uniCloud/uni-id.md?id=cache-permission-in-token)
Be sure to read this document: [Notes on cache role permissions](uniCloud/uni-id.md?id=cache-permission-in-token)

**响应参数**
**Response parameters**

| 字段				| 类型			| 说明																																																										|
| Field | Type | Description |
| ---					| ---				| ---																																																											|
| code				| Number		|错误码，0表示成功																																																				|
| code | Number | Error code, 0 means success |
| message			| String		|详细信息																																																									|
| message | String | Details |
| uid					| String		|用户Id，校验成功之后会返回																																																|
| uid | String | User ID, it will be returned after successful verification |
| token				| String		|新增于uni-id 1.1.7版本，用户token快要过期时，新生成的token，只有在config内配置了`tokenExpiresThreshold`的值时才会有此行为|
| token | String | Added in uni-id version 1.1.7, when the user token is about to expire, the newly generated token will only have this behavior when the value of `tokenExpiresThreshold` is configured in config|
| tokenExpired| TimeStamp	|新增于uni-id 1.1.7版本，新token的过期时间																																								|
| tokenExpired| TimeStamp | Added in uni-id version 1.1.7, the expiration time of the new token |
| role				| Array			|新增于uni-id 1.1.9版本，用户角色列表。`uni-id 3.0.0`以上版本传入`needPermission:true`时返回此字段																																											|
| role | Array | Added in uni-id version 1.1.9, list of user roles. `uni-id 3.0.0` or later This field is returned when `needPermission:true` is passed in |
| permission	| Array			|新增于uni-id 1.1.9版本，用户权限列表，只有登录操作时传入needPermission才会返回，否则为空数组。`uni-id 3.0.0`以上版本传入`needPermission:true`时返回此字段															|
| permission | Array | Added in uni-id version 1.1.9, a list of user permissions, it will be returned only when needPermission is passed in the login operation, otherwise it is an empty array. `uni-id 3.0.0` or later This field is returned when `needPermission:true` is passed in |
| userInfo		| Object		|用户信息，uid对应的uni-id-users全部字段。		|
| userInfo | Object | User information, all fields of uni-id-users corresponding to uid. |


uni-id使用jwt生成token，jwt所生成的token包含三部分，其中存储的信息为明文信息，uni-id只根据tokenSecret来校验客户端token是否合法。
uni-id uses jwt to generate a token. The token generated by jwt consists of three parts, and the stored information is plaintext information. uni-id only verifies whether the client token is legal based on the tokenSecret.

`uni-id 3.0.0`之前的版本，checkToken必然会查询数据库进行token合法性校验。
In versions prior to `uni-id 3.0.0`, checkToken must query the database to verify the validity of the token.

`uni-id 3.0.0`起，默认情况下不再查库校验token，角色权限将被缓存在token中，此举能减少或消除checkToken的查库次数（有效节省费用、减少响应时间）。
Starting from `uni-id 3.0.0`, by default, the database verification token is no longer checked, and the role permissions will be cached in the token, which can reduce or eliminate the number of checkToken database checks (effectively save costs and reduce response time) .
如需关闭此行为需在config内配置`removePermissionAndRoleFromToken:true`。
To disable this behavior, configure `removePermissionAndRoleFromToken:true` in config.

更多关于`removePermissionAndRoleFromToken`的说明见：[缓存角色权限](https://uniapp.dcloud.io/uniCloud/uni-id?id=cachepermissionintoken)
For more instructions on `removePermissionAndRoleFromToken`, see: [Cache role permission](https://uniapp.dcloud.io/uniCloud/uni-id?id=cachepermissionintoken)

**注意：**
**Notice:**

- 客户端会自动查找storage内的token在callFunction时插入
- The client will automatically find the token in the storage and insert it during callFunction
- HBuilderX 2.9.5+ 客户端允许开发者自行传入uniIdToken，此时不再从storage获取token
- HBuilderX 2.9.5+ client allows developers to pass in uniIdToken by themselves, at this time no longer get token from storage
- HBuilderX 2.8.0版本起token存储在storage内推荐使用使用蛇形`uni_id_token`，会在一段时间内兼容驼峰形式`uniIdToken`
- Since HBuilderX version 2.8.0, it is recommended to use the snake-shaped `uni_id_token` when the token is stored in the storage, which will be compatible with the camel-case `uniIdToken` for a period of time

**示例代码**
**Sample code**

```js
// 云函数list-news代码
// Cloud function list-news code
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
  // other business code
  return {
    token,
    tokenExpired
  }
}

// 下面仅为简单示例，可以参考uniCloud admin里面的request进行封装 https://ext.dcloud.net.cn/plugin?id=3268
// The following is just a simple example, you can refer to the request in uniCloud admin for packaging https://ext.dcloud.net.cn/plugin?id=3268
// 客户端代码
// client code
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
  // other logic...
})

```

### 主动刷新token@refresh-token
### Active refresh token@refresh-token

> 新增于uni-id 3.3.14
> Added in uni-id 3.3.14

用法：`uniID.refreshToken(Object RefreshTokenParams);`
Usage: `uniID.refreshToken(Object RefreshTokenParams);`

**参数说明**
**Parameter Description**

| 字段| 类型	| 必填| 说明	|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---		|
| token	| String| 是	|用户token|
| token | String| Yes |user token|

**示例**
**Example**

```js
const {
  token,
  tokenExpired
} = await uniID.refreshToken({
  token: 'xxx'
})
```

**注意**
**Notice**

- 刷新token后会在再次触发查库校验token时使token失效
- After refreshing the token, the token will be invalidated when the database check is triggered again to verify the token

### 登出@logout
### Logout @logout

登出就是一个验证客户端uniCloud.callFunction自带的uniIdToken通过token校验并获取uid，将对应uid的用户的token清除的过程（uniID登出api内部会自动完成，你传入uniIdToken即可）。
Logout is a process of verifying that the uniIdToken that comes with the uniCloud.callFunction client side passes the token verification and obtains the uid, and clears the token of the user corresponding to the uid.

用法：`uniID.logout(String token);`
Usage: `uniID.logout(String token);`

**注意**
**Notice**

- 登出成功之后应删除持久化存储的token，参考：[客户端删除token及其有效期](uniCloud/uni-id?id=remove-token)
- After successful logout, the persistent storage token should be deleted, refer to: [Client delete token and its validity period](uniCloud/uni-id?id=remove-token)

**参数说明**
**Parameter Description**

| 字段| 类型	| 必填| 说明	|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---		|
| token	| String| 是	|用户token|
| token | String| Yes |user token|

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

**示例代码**
**Sample code**

```js
// 云函数logout代码
// Cloud function logout code
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.logout(event.uniIdToken)
	return res
}

```

### 生成token@createtoken
### Generate token@createtoken

注意createToken接口不会将生成的token存库，只是生成token而已
Note that the createToken interface will not store the generated token, but only generate the token

用法：`uniID.createToken(Object CreateTokenParams)`
Usage: `uniID.createToken(Object CreateTokenParams)`

**参数说明**
**Parameter Description**

| 字段					| 类型		| 必填| 说明																		|
| Fields | Type | Required | Description |
| ---						| ---			| ---	| ---																			|
| uid						| String	| 是	|用户Id																		|
|uid|String|Yes|UserId|
| needPermission| Boolean	| 否	|标识是否需要在checkToken时返回permission	|
| needPermission| Boolean | No | Whether the identity needs to return permission when checkToken |
| role					| Array		| 否	|指定缓存在token内的角色									|
| role | Array | No | Specifies the role cached in the token |
| permission		| Array		| 否	|指定缓存在角色内的权限										|
| permission | Array | No | Specifies the permissions cached within the role |

**响应参数**
**Response parameters**

| 字段				| 类型	| 必填| 说明										|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---											|
| token				| String| 是	|生成的token							|
| token | String| Yes | Generated token |
| tokenExpired| Number| 是	|token过期时间对应的时间戳|
|tokenExpired|Number| Yes |Timestamp corresponding to token expiration time|

**说明**
**illustrate**

- uni-id 3.0.0起默认缓存角色权限到token内，此功能生效时`needPermission`参数不在需要。如需调用createToken接口请自行传入role、permission
- Since uni-id 3.0.0, role permissions are cached in the token by default. When this function takes effect, the `needPermission` parameter is not required. If you need to call the createToken interface, please pass in the role and permission yourself


### 修改密码 @update-password
### Change password @update-password

用法：`uniID.updatePwd(Object UpdatePwdParams)`
Usage: `uniID.updatePwd(Object UpdatePwdParams)`

**参数说明**
**Parameter Description**

| 字段								| 类型	| 必填| 说明													|
| Fields | Type | Required | Description |
| ---									| ---		| ---	| ---														|
| uid									| String| 是	|用户Id，可以通过checkToken返回	|
|uid |String| Yes |User Id, which can be returned by checkToken |
| oldPassword					| String| 是	|旧密码													|
| oldPassword | String| Yes | old password |
| newPassword					| String| 是	|新密码													|
| newPassword | String| Yes | new password |

**响应参数**
**Response parameters**

| 字段	| 类型	| 必填	| 说明						|
| Fields | Type | Required | Description |
| ---	| ---	| ---	| ---						|
| code	| Number| 是	|错误码，0表示成功			|
| code | Number| Yes | Error code, 0 means success |
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

**注意：修改密码会导致所有token失效**
**Note: Changing the password will invalidate all tokens**

**示例代码**
**Sample code**

```js
// 云函数update-pwd代码
// Cloud function update-pwd code
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		oldPassword,
		newPassword,
		passwordConfirmation
	} = event
	// 校验新密码与确认新密码是否一致
	// Verify that the new password is the same as the new password
  
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
### Reset password @reset-password

用法：`uniID.resetPwd(Object ResetPwdParams)`
Usage: `uniID.resetPwd(Object ResetPwdParams)`

**参数说明**
**Parameter Description**

| 字段								| 类型	| 必填| 说明													|
| Fields | Type | Required | Description |
| ---									| ---		| ---	| ---														|
| uid									| String| 是	|用户Id，可以通过checkToken返回	|
|uid |String| Yes |User Id, which can be returned by checkToken |
| password					| String| 是	|重置后的密码													|
| password | String| Yes | Reset password |

**响应参数**
**Response parameters**

| 字段	| 类型	| 必填	| 说明						|
| Fields | Type | Required | Description |
| ---	| ---	| ---	| ---						|
| code	| Number| 是	|错误码，0表示成功			|
| code | Number| Yes | Error code, 0 means success |
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

**注意：重置密码会导致所有token失效**
**Note: Resetting the password will invalidate all tokens**

**示例代码**
**Sample code**

```js
// 云函数代码
// cloud function code
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
### Reset password with SMS verification code @reset-pwd-by-sms

> 新增于 uni-id 3.3.14
> Added in uni-id 3.3.14

用法：`uniID.resetPwdBySms(Object ResetPwdBySmsParams)`
Usage: `uniID.resetPwdBySms(Object ResetPwdBySmsParams)`

**参数说明**
**Parameter Description**

| 字段		| 类型	| 必填	| 说明			|
| Fields | Type | Required | Description |
| ---		| ---	| ---	| ---			|
| mobile	| String| 是	|手机号码		|
| mobile | String| yes | mobile number |
| code		| String| 是	|验证码			|
| code | String| yes | verification code |
| password	| String| 是	|重置后的密码	|
| password | String| Yes | Reset password |

**响应参数**
**Response parameters**

无
none

**注意**
**Notice**

- 对应发送短信验证码接口`type`为`reset-pwd`
- The corresponding interface `type` for sending SMS verification code is `reset-pwd`

### 加密密码 @encrypt-password
### Encrypted password @encrypt-password

用法：`uniID.encryptPwd(String password)`
Usage: `uniID.encryptPwd(String password)`

**参数说明**
**Parameter Description**

| 字段		| 类型	| 必填	| 说明			|
| Fields | Type | Required | Description |
| ---		| ---	| ---	| ---			|
| password	| String| 是	|要加密的字符串	|
| password | String| Yes | the string to encrypt |

**响应参数**
**Response parameters**

| 字段	| 类型	| 必填	| 说明						|
| Fields | Type | Required | Description |
| ---	| ---	| ---	| ---						|
| passwordHash	| String| 是	|加密后的字符串		|
| passwordHash | String| yes | encrypted string |

**重要**
**important**

`2.0.0`版本起`encryptPwd`接口调整为返回对象。结构如下
Since version `2.0.0`, the `encryptPwd` interface has been adjusted to return an object. The structure is as follows

```js
{
  passwordHash: 'asdajdoaiojfj', // 存储到数据库的密码
  version: 1 // 密钥版本，关于此字段请参考https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=modifysecret
}
```

**示例代码**
**Sample code**

```js
// 云函数代码
// cloud function code
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const encResult = await uniID.encryptPwd('123456')
	return {
    encResult
  }
}
```

### 设置头像
### Set Avatar

用法：`uniID.setAvatar(Object SetAvatarParams)`
Usage: `uniID.setAvatar(Object SetAvatarParams)`

**参数说明**
**Parameter Description**

| 字段	| 类型	| 必填| 说明													|
| Fields | Type | Required | Description |
| ---		| ---		| ---	| ---														|
| uid		| String| 是	|用户Id，可以通过checkToken返回	|
|uid |String| Yes |User Id, which can be returned by checkToken |
| avatar| String| 是	|用户头像URL										|
|avatar| String| Yes |User Avatar URL |

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

**示例代码**
**Sample code**

```js
// 云函数set-avatar代码
// Cloud function set-avatar code
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
### Update user information

用法：`uniID.updateUser(Object UpdateUserParams);`
Usage: `uniID.updateUser(Object UpdateUserParams);`

此接口用于在其他接口不满足需求时使用
This interface is used when other interfaces do not meet the requirements

**参数说明**
**Parameter Description**

| 字段| 类型	| 必填| 说明													|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---														|
| uid	| String| 是	|用户Id，可以通过checkToken返回	|
|uid |String| Yes |User Id, which can be returned by checkToken |
| 其余参数	| Any| 是	|要设置的用户信息	|
| Other parameters | Any| Yes | User information to be set |

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

```js
// 云函数代码
// cloud function code
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
### Get user information

用法：`uniID.getUserInfo(Object GetUserInfoParams);`
Usage: `uniID.getUserInfo(Object GetUserInfoParams);`

此接口用于在其他接口不满足需求时使用
This interface is used when other interfaces do not meet the requirements

**参数说明**
**Parameter Description**

| 字段	| 类型	| 必填| 说明													|
| Fields | Type | Required | Description |
| ---		| ---		| ---	| ---														|
| uid		| String| 是	|用户Id，可以通过checkToken返回	|
|uid |String| Yes |User Id, which can be returned by checkToken |
| field	| Array	| 否	|指定返回的字段，不传则返回所有	|
| field | Array | No | Specify the fields to be returned, otherwise return all fields |

**响应参数**
**Response parameters**

| 字段		| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---			| ---		| ---	| ---							|
| code		| Number| 是	|错误码，0表示成功|
|code |Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |
| userInfo| Object| 是	|获取的用户信息		|
| userInfo| Object| Yes |Get user information |

```js
// 云函数代码
// cloud function code
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
### Get user information based on token

自`uni-id 3.0.0`起支持
Supported since `uni-id 3.0.0`

用法：`uniID.getUserInfoByToken(String token);`
Usage: `uniID.getUserInfoByToken(String token);`

**参数说明**
**Parameter Description**

| 字段	| 类型	| 必填| 说明													|
| Fields | Type | Required | Description |
| ---		| ---		| ---	| ---														|
| token	| String| 是	|用户的token	|
| token | String| Yes | user's token |

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明															|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---																|
| code			| Number| 是	|错误码，0表示成功									|
| code | Number| Yes | Error code, 0 means success |
| message		| String| 是	|详细信息														|
| message | String| Yes | Details |
| uid				| String| 是	|用户id															|
|uid |String| Yes |userid|
| role			| Array	| 是	|用户角色列表，需要开启缓存角色权限	|
| role | Array | Yes | User role list, need to enable cache role permission |
| permission| Array	| 是	|用户权限列表，需要开启缓存角色权限	|
| permission| Array | Yes | User permission list, need to enable cache role permission |

```js
// 云函数代码
// cloud function code
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
**Notice**

- 此接口仅校验token是否合法，从token中获取用户信息。不查库校验token，也不会查库获取用户信息。适用于不想使用checkToken获取用户信息的场景（checkToken内包含其他逻辑，比如自动刷新token等）
- This interface only verifies whether the token is legal and obtains user information from the token. It does not check the database to verify the token, nor does it check the database to obtain user information. Applicable to scenarios where you do not want to use checkToken to obtain user information (checkToken contains other logic, such as automatic token refresh, etc.)

### 添加用户（非注册）@add-user
### Add user (non-registered) @add-user

> 新增于 uni-id 3.3.14
> Added in uni-id 3.3.14

用法：`uniID.addUser(Object AddUserParams);`
Usage:`uniID.addUser(Object AddUserParams);`

**BanAccountParams参数说明**
**BanAccountParams parameter description**

| 字段			| 类型	| 必填								| 说明								|
| Fields | Type | Required | Description |
| ---			| ---	| ---								| ---								|
| username		| String| username、email、mobile至少有一个	|用户名								|
| username | String| At least one of username, email, mobile |username|
| mobile		| String| username、email、mobile至少有一个	|手机号								|
| mobile | String| At least one of username, email, and mobile |mobile phone number |
| email			| String| username、email、mobile至少有一个	|邮箱								|
| email | String| At least one of username, email, mobile | Email |
| password		| String| 否								|密码								|
| password | String| No | Password |
| role			| Array	| 否								|角色列表							|
| role | Array | no | list of roles |
| authorizedApp	| Array	| 否								|此用户能登录的app对应的appId列表	|
| authorizedApp | Array | No | The list of appIds corresponding to the apps that this user can log in |


**响应参数**
**Response parameters**

| 字段	| 类型	| 必备	| 说明					|
| Field | Type | Required | Description |
| ---	| ---	| ---	| ---					|
| uid	| String| 是	|添加用户返回的用户id	|
| uid | String| yes | user id returned by adding user |

**注意**
**Notice**

- authorizedApp不传时创建的用户无法登录任一端，后续可以调用授权登录接口再次授权登录
- The user created when the authorizedApp is not uploaded cannot log in to either end, and can subsequently call the authorized login interface to authorize the login again
- 传入email、mobile时，自动会将对用的email_confirmed、mobile_confirmed设置为1
- When incoming email and mobile, it will automatically set the paired email_confirmed and mobile_confirmed to 1


### 封禁账户@ban-account
### Banned account @ban-account

- 由于客户端存在token缓存，执行封禁操作并不会实时生效。用户下次获取token（包括刷新token）时才会出现错误信息
- Due to the existence of token cache on the client side, the ban operation will not take effect in real time. The error message will only appear the next time the user obtains the token (including refreshing the token)

自`uni-id 3.3.8`起支持
Supported since `uni-id 3.3.8`

用法：`uniID.banAccount(Object BanAccountParams);`
Usage: `uniID.banAccount(Object BanAccountParams);`

**BanAccountParams参数说明**
**BanAccountParams parameter description**

| 字段| 类型	| 必填| 说明		|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---			|
| uid	| String| 是	|用户的id	|
|uid |String| Yes |user's id|

**响应参数**
**Response parameters**

| 字段		| 类型					| 必填	| 说明				|
| Fields | Type | Required | Description |
| ---		| ---					| ---	| ---				|
| errCode	| Number &#124; String	| 是	|错误码，0表示成功	|
| errCode | Number &#124; String | Yes | Error code, 0 means success |

### 解禁账户@unban-account
### Unban account @unban-account

自`uni-id 3.3.8`起支持
Supported since `uni-id 3.3.8`

用法：`uniID.unbanAccount(Object UnbanAccountParams);`
Usage: `uniID.unbanAccount(Object UnbanAccountParams);`

**UnbanAccountParams参数说明**
**UnbanAccountParams parameter description**

| 字段| 类型	| 必填| 说明		|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---			|
| uid	| String| 是	|用户的id	|
|uid |String| Yes |user's id|

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|

### 注销账户@close-account
### Close account @close-account

**注意**
**Notice**

- uni-id不会真的删除用户记录，但是会将用户标记为已注销（用户记录内status为4），同时此用户不可使用同样的用户标识（手机号、邮箱、微信账号等）进行注册或登录。由于用户信息与业务有关联，如需真注销用户逻辑应由开发者自行实现。
- uni-id will not actually delete the user record, but will mark the user as logged out (status in the user record is 4), and the user cannot use the same user ID (mobile phone number, email, WeChat account, etc.) to register or log in. Since user information is related to the business, the developer should implement the logic to log out the user.
- 由于客户端存在token缓存，执行注销操作后应清理用户客户端token。如未清理在用户下次获取token（包括刷新token）时才会出现错误信息
- Since there is a token cache on the client side, the user client token should be cleared after the logout operation is performed. If it is not cleaned up, the error message will only appear when the user obtains the token next time (including refreshing the token).

自`uni-id 3.3.8`起支持
Supported since `uni-id 3.3.8`

用法：`uniID.closeAccount(Object CloseAccountParams);`
Usage: `uniID.closeAccount(Object CloseAccountParams);`

**CloseAccountParams参数说明**
**CloseAccountParams parameter description**

| 字段| 类型	| 必填| 说明		|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---			|
| uid	| String| 是	|用户的id	|
|uid |String| Yes |user's id|

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|

### 取消注销账户@open-account
### Cancel account cancellation @open-account

自`uni-id 3.3.8`起支持
Supported since `uni-id 3.3.8`

用法：`uniID.openAccount(Object OpenAccountParams);`
Usage: `uniID.openAccount(Object OpenAccountParams);`

**OpenAccountParams参数说明**
**OpenAccountParams parameter description**

| 字段| 类型	| 必填| 说明		|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---			|
| uid	| String| 是	|用户的id	|
|uid |String| Yes |user's id|

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|


### 自行初始化uni-id@init
### Initialize uni-id@init by yourself

> 此接口已废弃，如需自行传入配置请使用uniID.createInstance接口创建uniID实例来使用
> This interface is obsolete. If you need to pass in the configuration yourself, please use the uniID.createInstance interface to create a uniID instance to use

用法：`uniID.init(Object InitParams);`
Usage: `uniID.init(Object InitParams);`

此接口仅适用于不希望使用config.json初始化而是希望通过js的方式传入配置的情况，多数情况下不推荐使用。**如果你要使用clientDB，且必须要用这种方式初始化uni-id，必须在uni-id的config.json内也写上同样的配置。**
This interface is only suitable for situations where you do not want to use config.json to initialize but want to pass in the configuration through js, and it is not recommended in most cases. **If you want to use clientDB, and you must initialize uni-id in this way, you must write the same configuration in config.json of uni-id. **

**参数说明**
**Parameter Description**

InitParams格式与[config.json](https://uniapp.dcloud.io/uniCloud/uni-id?id=configjson%e7%9a%84%e8%af%b4%e6%98%8e)完全相同
InitParams format is exactly the same as [config.json](https://uniapp.dcloud.io/uniCloud/uni-id?id=configjson%e7%9a%84%e8%af%b4%e6%98%8e)

**响应参数**
**Response parameters**

无
none

```js
// 云函数代码
// cloud function code
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
### The client saves the token and its validity period @save-token

在用户登录/注册成功后应在storage内保存用户的token及其过期时间，示例代码如下：
After the user logs in/registers successfully, the user's token and its expiration time should be saved in the storage. The sample code is as follows:

```js
uni.setStorageSync('uni_id_token', token)
uni.setStorageSync('uni_id_token_expired', tokenExpired)
```

### 客户端删除token及其有效期@remove-token
### Client delete token and its validity period @remove-token

在用户登出成功之后应删除持久化存储的token及其过期时间，示例代码如下：
After the user logs out successfully, the persistently stored token and its expiration time should be deleted. The sample code is as follows:

```js
uni.removeStorageSync('uni_id_token')
uni.removeStorageSync('uni_id_token_expired')
```

## 手机号码@mobile
## mobile number @mobile

### 发送短信验证码@sendsmscode
### Send SMS verification code @sendsmscode

用法：`uniID.sendSmsCode(Object SendSmsCodeParams)`
Usage: `uniID.sendSmsCode(Object SendSmsCodeParams)`

**参数说明**
**Parameter Description**

| 字段		| 类型	| 必填	| 说明																											|
| Fields | Type | Required | Description |
| ---		| ---	| ---	| ---																											|
| mobile	| String| 是	|用户手机号																										|
| mobile | String| Yes | User mobile number |
| templateId| String| 是	|`uni-id 1.1.8+`用户自定义模板Id，请使用类似下面模板示例的参数申请模板											|
| templateId| String| Yes |`uni-id 1.1.8+` User-defined template ID, please use the parameters similar to the template example below to apply for the template |
| code		| String| 否	|验证码字符串																									|
| code | String| No | Verification code string |
| type		| String| 是	|类型，用于防止不同功能的验证码混用，目前支持的类型`login`登录、`register`注册、`bind`绑定手机、`unbind`解绑手机|
| type | String| Yes | Type, used to prevent the verification codes of different functions from being mixed, currently supported types `login` login, `register` registration, `bind` bind mobile phone, `unbind` unbind mobile phone|

```
// 短信模板示例，请在https://dev.dcloud.net.cn/#/pages/sms/base申请签名（短信开头中括号内部分）及模板
// Example of SMS template, please apply for signature (the part in brackets at the beginning of SMS) and template at https://dev.dcloud.net.cn/#/pages/sms/base
验证码：${code}，${expMinute}分钟内有效，请勿泄露并尽快验证。
```

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

**示例代码**
**Sample code**

```js
// 云函数bind-mobile代码
// Cloud function bind-mobile code
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		mobile
	} = event
  // 生成验证码可以按自己的需求来，这里以生成6位数字为例
  // You can generate the verification code according to your own needs. Here is an example of generating a 6-digit number.
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
### Set verification code @setVerifyCode
如果使用`uni-id`的sendSmsCode发送短信的话会自动设置验证码（在数据表：`opendb-verify-codes`添加一条记录)，否则你需要使用此接口自行在库中设置验证码。
If you use the sendSmsCode of `uni-id` to send SMS, the verification code will be automatically set (add a record in the data table: `opendb-verify-codes`), otherwise you need to use this interface to set the verification code in the library yourself.

用法：`uniID.setVerifyCode(Object SetVerifyCodeParams)`
Usage: `uniID.setVerifyCode(Object SetVerifyCodeParams)`

**参数说明**
**Parameter Description**

| 字段			| 类型	| 必填| 说明																																													|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---																																														|
| mobile		| String| 是	|用户手机号，和邮箱二选一																																										|
| mobile | String| Yes | User's mobile phone number or email address |
| email		| String| 是	|用户邮箱，和手机号二选一																																										|
| email | String| Yes | User email or mobile phone number |
| code			| String| 是	|验证码字符串																																										|
| code | String| yes | verification code string |
| expiresIn	| Number| 是	|验证码过期时间，单位秒																																					|
| expiresIn | Number| Yes | Verification code expiration time, in seconds |
| type			| String| 是	|类型，用于防止不同功能的验证码混用，目前支持的类型`login`登录、`register`注册、`bind`绑定手机、`unbind`解绑手机|
| type | String| Yes | Type, used to prevent the verification codes of different functions from being mixed. Currently supported types `login` login, `register` registration, `bind` bind mobile phone, `unbind` unbind mobile phone|

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

**示例代码**
**Sample code**

```js
// 云函数bind-mobile代码
// Cloud function bind-mobile code
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const {
		mobile
	} = event
  // 生成验证码可以按自己的需求来，这里以生成6位数字为例
  // You can generate the verification code according to your own needs. Here is an example of generating a 6-digit number.
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
### Verify verification code @verifyCode
一个查库校验：由`uni-id`的sendSmsCode发送短信自动设置或调用uniID.setVerifyCode手动设置的验证码的API
A library check: an API that automatically sets a verification code by sending SMS by sendSmsCode of `uni-id` or calling uniID.setVerifyCode manually

uni-id内置方法`loginBySms`、`bindMobile`、`unbindMobile`均已内置校验验证码方法，如果使用以上方法不需要再调用此接口，如需扩展类型请确保type和发送验证码/设置验证码时对应
The built-in methods of uni-id `loginBySms`, `bindMobile`, `unbindMobile` have built-in verification verification code methods. If you use the above methods, you do not need to call this interface. If you need to extend the type, please ensure the type and send verification code/set verification code time

用法：`uniID.verifyCode(Object VerifyCodeParams)`
Usage: `uniID.verifyCode(Object VerifyCodeParams)`

**参数说明**
**Parameter Description**

| 字段	| 类型	| 必填| 说明																																													|
| Fields | Type | Required | Description |
| ---		| ---		| ---	| ---																																														|
| mobile| String| 是	|用户手机号，和邮箱二选一																																				|
| mobile| String| Yes | User's mobile phone number or email address |
| email	| String| 是	|用户邮箱，和手机号二选一																																				|
| email | String| Yes | User email or mobile phone number |
| code	| String| 是	|验证码字符串																																										|
| code | String| yes | verification code string |
| type	| String| 是	|类型，用于防止不同功能的验证码混用，目前支持的类型`login`登录、`register`注册、`bind`绑定手机、`unbind`解绑手机|
| type | String| Yes | Type, used to prevent the verification codes of different functions from being mixed. Currently supported types `login` login, `register` registration, `bind` bind mobile phone, `unbind` unbind mobile phone|

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

**示例代码**
**Sample code**

```js
// 云函数bind-mobile代码
// Cloud function bind-mobile code
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
### Mobile phone number verification code to log in directly

用法：`uniID.loginBySms(Object LoginBySmsParams)`
Usage: `uniID.loginBySms(Object LoginBySmsParams)`

**参数说明**
**Parameter Description**

| 字段					| 类型		| 必填| 说明																																																	|
| Fields | Type | Required | Description |
| ---						| ---			| ---	| ---																																																		|
| mobile				| String	| 是	|用户手机号																																															|
| mobile | String | Yes | User phone number |
| code					| String	| 是	|验证码																																																	|
| code | String | yes | verification code |
| type					| String	| 否	|指定操作类型，可选值为`login`、`register`，不传此参数时表现为手机号已注册则登录，手机号未注册则进行注册|
| type | String | No | Specify the operation type. The optional values are `login` and `register`. If this parameter is not passed, it means that the mobile phone number is registered, then the mobile phone number is registered, and the mobile phone number is not registered.
| password			|String		| 否	|密码，type为`register`时生效																																						|
| password |String | No |Password, valid when type is `register` |
| inviteCode		|String		| 否	|邀请人的邀请码，type为`register`时生效																																	|
| inviteCode |String | No | Invite code of the inviter, valid when type is `register` |
| myInviteCode	|String		| 否	|设置当前注册用户自己的邀请码，type为`register`时生效																										|
| myInviteCode |String | No | Set the current registered user's own invitation code, which takes effect when type is `register` |
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用													|
| needPermission| Boolean | No | When set to true, it will return the user permission (permission) when checkingToken, it is recommended to use it in the management console |
| role					| Array		| 否	|设定用户角色，当前用户为新注册时生效																																		|
| role | Array | No | Set the user role, which takes effect when the current user is newly registered |

**响应参数**
**Response parameters**

| 字段				| 类型	| 必填| 说明																		|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																			|
| code				| Number| 是	|错误码，0表示成功												|
| code | Number| Yes | Error code, 0 means success |
| message			| String| 是	|详细信息																	|
| message | String| Yes | Details |
| uid					| String| 是	|用户uid																	|
| uid | String| Yes | user uid |
| type				| String| 是	|操作类型，`login`为登录、`register`为注册|
| type | String| Yes | Operation type, `login` is login, `register` is registration|
| userInfo		| Object| 是	|用户全部信息															|
| userInfo | Object| Yes | All user information |
| token				| String| -		|登录成功之后返回的token信息							|
| token | String| - |The token information returned after successful login |
| tokenExpired| String| -		|token过期时间														|
| tokenExpired| String| - |token expiration time |

**示例代码**
**Sample code**

```js
// 云函数bind-mobile代码
// Cloud function bind-mobile code
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
### Mobile phone one-click login @univerify

用法：`uniID.loginByUniverify(Object loginByUniverifyParams)`
Usage: `uniID.loginByUniverify(Object loginByUniverifyParams)`

> 需在[开发者控制台](https://dev.dcloud.net.cn/#/pages/uniLogin/index)开通一键登录并在config.json内配置univerify相关信息
> You need to enable one-key login in the [Developer Console](https://dev.dcloud.net.cn/#/pages/uniLogin/index) and configure univerify related information in config.json

**参数说明**
**Parameter Description**

| 字段					| 类型		| 必填| 说明																																																	|
| Fields | Type | Required | Description |
| ---						| ---			| ---	| ---																																																		|
| access_token	| String	| 是	|uni.login登录成功后，返回的`access_token`参数																													|
| access_token | String | Yes | `access_token` parameter returned after successful login by uni.login |
| openid				| String	| 是	|uni.login登录成功后，返回的`openid`参数																																|
| openid | String | Yes | `openid` parameter returned after uni.login successfully logs in |
| type					| String	| 否	|指定操作类型，可选值为`login`、`register`，不传此参数时表现为手机号已注册则登录，手机号未注册则进行注册|
| type | String | No | Specify the operation type. The optional values are `login` and `register`. If this parameter is not passed, it means that the mobile phone number is registered, then the mobile phone number is registered, and the mobile phone number is not registered.
| password			|String		| 否	|密码，type为`register`时生效																																						|
| password |String | No |Password, valid when type is `register` |
| inviteCode		|String		| 否	|邀请人的邀请码，type为`register`时生效																																	|
| inviteCode |String | No | Invite code of the inviter, valid when type is `register` |
| myInviteCode	|String		| 否	|设置当前注册用户自己的邀请码，type为`register`时生效																										|
| myInviteCode |String | No |Set the current registered user's own invitation code, which takes effect when type is `register` |
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用													|
| needPermission| Boolean | No | When set to true, the user permission (permission) will be returned when checkingToken, it is recommended to use it in the management console |
| role					| Array		| 否	|设定用户角色  ，当前用户为新注册时生效																																	|
| role | Array | No | Set the user role, which takes effect when the current user is newly registered |

**响应参数**
**Response parameters**

| 字段				| 类型	| 说明																		|
| Field | Type | Description |
| ---					| ---		| ---																			|
| code				| Number| 错误码，0表示成功												|
| code | Number| Error code, 0 means success |
| message			| String|详细信息																	|
| message | String | Details |
| uid					| String|用户`uid`																|
| uid | String | user `uid` |
| type				| String|操作类型，`login`为登录、`register`为注册|
| type | String| Operation type, `login` is login, `register` is registration|
| mobile			| String|登录者手机号															|
| mobile | String | Login phone number |
| userInfo		| Object|用户全部信息															|
| userInfo | Object|All user information |
| token				| String|登录成功之后返回的`token`信息						|
| token | String | `token` information returned after successful login |
| tokenExpired| String|`token`过期时间													|
| tokenExpired| String|`token` expiration time |

**示例代码**
**Sample code**

```js
// 云函数代码
// cloud function code
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
### Bind mobile phone number @bind-mobile

用法：`uniID.bindMobile(Object BindMobileParams)`
Usage: `uniID.bindMobile(Object BindMobileParams)`

**参数说明**
**Parameter Description**

| 字段				| 类型	| 必填| 说明																																			|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																																				|
| uid					| String| 是	|用户Id，可以通过checkToken返回																							|
|uid |String| Yes |User Id, which can be returned by checkToken |
| mobile			| String| 否	|用户手机号																																	|
| mobile | String| No |User mobile phone number |
| code				| String| 否	|验证码，为兼容旧版逻辑此参数不填写时不会进行验证码校验，而是直接绑定手机号	|
| code | String| No | Verification code, in order to be compatible with the old logic, this parameter will not perform verification code verification when not filled in, but directly bind the mobile phone number |
| access_token| String| 否	|uni.login登录成功后，返回的`access_token`参数															|
| access_token| String| No |The `access_token` parameter returned after the uni.login login is successful |
| openid			| String| 否	|uni.login登录成功后，返回的`openid`参数																		|
| openid | String| No |The `openid` parameter returned after uni.login is successfully logged in |
| type				| String| 否	|通过何种方式绑定手机号，sms（手机号验证码）、univerify（一键登录），默认sms|
| type | String| No | How to bind the mobile phone number, sms (mobile phone number verification code), univerify (one-key login), default sms|

type为sms时mobile、code必传，type为univerify时access_token、openid必传
When type is sms, mobile and code must be passed. When type is universalify, access_token and openid must be passed.

**响应参数**
**Response parameters**

| 字段		| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---			| ---		| ---	| ---							|
| code		| Number| 是	|错误码，0表示成功|
|code |Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

**示例代码**
**Sample code**

```js
// 云函数bind-mobile代码
// Cloud function bind-mobile code
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
### Unbind the phone

用法：`uniID.unbindMobile(Object UnbindMobileParams)`
Usage: `uniID.unbindMobile(Object UnbindMobileParams)`

**参数说明**
**Parameter Description**

| 字段	| 类型	| 必填| 说明																																			|
| Fields | Type | Required | Description |
| ---		| ---		| ---	| ---																																				|
| uid		| String| 是	|用户Id，可以通过checkToken返回																							|
|uid |String| Yes |User Id, which can be returned by checkToken |
| mobile| String| 是	|用户手机号																																	|
| mobile| String| Yes |User mobile phone number |
| code	| String| 否	|验证码，此参数不填写时不会进行验证码校验，而是直接绑定手机号	|
| code | String| No | Verification code, if this parameter is not filled in, the verification code will not be verified, but the mobile phone number will be directly bound |

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

**示例代码**
**Sample code**

```js
// 云函数bind-mobile代码
// Cloud function bind-mobile code
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
## Email@email

### 邮箱验证码直接登录
### Email verification code to log in directly

用法：`uniID.loginByEmail(Object LoginByEmailParams)`
Usage: `uniID.loginByEmail(Object LoginByEmailParams)`

**参数说明**
**Parameter Description**

| 字段					| 类型	| 必填| 说明																																					|
| Fields | Type | Required | Description |
| ---						| ---		| ---	| ---																																						|
| email					| String| 是	|用户邮箱																																				|
| email | String| Yes | User Email |
| code					| String| 是	|验证码																																					|
| code | String| yes | verification code |
| type					| String| 否	|指定操作类型，覆盖存在则登录不存在则注册的默认行为，可选值为`login`、`register`|
| type | String| No | Specifies the operation type, overwrites the default behavior of registering if the login does not exist if it exists. The optional values are `login`, `register`|
| password			|String	| 否	|密码，type为`register`时生效																										|
| password |String | No |Password, valid when type is `register` |
| myInviteCode	|String	| 否	|设置当前注册用户自己的邀请码，type为`register`时生效														|
| myInviteCode |String | No |Set the current registered user's own invitation code, which takes effect when type is `register` |
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用	|
| needPermission| Boolean | No | When set to true, the user permission (permission) will be returned when checkingToken, it is recommended to use it in the management console |
| role	| Array	| 否	|设定用户角色	，当前用户为新注册时生效											|
| role | Array | No | Set the user role, which takes effect when the current user is newly registered |

**响应参数**
**Response parameters**

| 字段				| 类型	| 必填| 说明											|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---												|
| code				| Number| 是	|错误码，0表示成功					|
| code | Number| Yes | Error code, 0 means success |
| message					| String| 是	|详细信息										|
| message | String| Yes | Details |
| uid					| String| 是	|用户uid																	|
| uid | String| Yes | user uid |
| userInfo		| Object| 是	|用户全部信息								|
| userInfo | Object| Yes | All user information |
| type				| String| 是	|操作类型，`login`为登录、`register`为注册|
| type | String| Yes | Operation type, `login` is login, `register` is registration|
| token				| String| -		|登录成功之后返回的token信息|
| token | String| - |token information returned after successful login|
| tokenExpired| String| -		|token过期时间							|
| tokenExpired| String| - |token expiration time |

**示例代码**
**Sample code**

```js
// 云函数bind-mobile代码
// Cloud function bind-mobile code
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
### Set verification code

见[设置验证码](uniCloud/uni-id.md?id=setVerifyCode)
See [Set VerifyCode](uniCloud/uni-id.md?id=setVerifyCode)

### 校验验证码
### Verify verification code

见[校验验证码](uniCloud/uni-id.md?id=verifyCode)
See [Verify Verification Code](uniCloud/uni-id.md?id=verifyCode)

### 绑定邮箱
### Bind Email

用法：`uniID.bindEmail(Object BindEmailParams)`
Usage: `uniID.bindEmail(Object BindEmailParams)`

**参数说明**
**Parameter Description**

| 字段	| 类型	| 必填| 说明																									|
| Fields | Type | Required | Description |
| ---		| ---		| ---	| ---																										|
| uid		| String| 是	|用户Id，可以通过checkToken返回													|
|uid |String| Yes |User Id, which can be returned by checkToken |
| email	| String| 是	|用户邮箱																								|
| email | String| Yes | User Email |
| code	| String| 否	|用户邮箱验证码，不填此字段或留空时直接绑定不校验验证码	|
| code | String| No | User email verification code, leave this field blank or bind directly without verifying the verification code |

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

**示例代码**
**Sample code**

```js
// 云函数bind-email代码
// Cloud function bind-email code
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
### Unbind email

用法：`uniID.unbindEmail(Object UnbindEmailParams)`
Usage: `uniID.unbindEmail(Object UnbindEmailParams)`

**参数说明**
**Parameter Description**

| 字段	| 类型	| 必填| 说明																									|
| Fields | Type | Required | Description |
| ---		| ---		| ---	| ---																										|
| uid		| String| 是	|用户Id，可以通过checkToken返回													|
|uid |String| Yes |User Id, which can be returned by checkToken |
| email	| String| 是	|用户邮箱																								|
| email | String| Yes | User Email |
| code	| String| 否	|用户邮箱验证码，不填此字段或留空时直接绑定不校验验证码	|
| code | String| No | User email verification code, leave this field blank or bind directly without verifying the verification code |

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

**示例代码**
**Sample code**

```js
// 云函数bind-email代码
// Cloud function bind-email code
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
## WeChat @weixin

### 微信登录
### WeChat login

用法：`uniID.loginByWeixin(Object LoginByWexinParams);`
Usage: `uniID.loginByWeixin(Object LoginByWeixinParams);`

**注意**
**Notice**

- 需要在config.json内使用微信登录的平台下配置appid和appsecret
- You need to configure appid and appsecret in config.json under the platform that uses WeChat to log in
- uniId会自动判断客户端平台
- uniId will automatically determine the client platform
- 登录成功之后会返回token、tokenExpired，在获取token之后应进行持久化存储，详情参考：[保存token及其有效期](uniCloud/uni-id.md?id=save-token)
- After successful login, token and tokenExpired will be returned. After obtaining token, persistent storage should be performed. For details, please refer to: [Save token and its validity period](uniCloud/uni-id.md?id=save-token)
- App端获取code不可直接调用`uni.login`，详细用法可以看下面示例
- You cannot directly call `uni.login` to get the code on the App side. For details, see the example below

**APP微信登录详细配置流程**
**APP WeChat login detailed configuration process**

1. 在manifest.json内配置微信登录用appid
1. Configure the appid for WeChat login in manifest.json
2. **打包**并**使用**自定义基座（注意一定要在manifest.json填写微信appid后再制作自定义基座），[自定义基座使用说明](https://ask.dcloud.net.cn/article/35115)
2. **Package** and **use** a custom base (note that you must fill in the WeChat appid in manifest.json before making a custom base), [Custom Base Instructions](https:// ask.dcloud.net.cn/article/35115)
3. 在uni-id的config.json内app对应的微信登录信息内配置appid和appsecret
3. Configure appid and appsecret in the WeChat login information corresponding to the app in config.json of uni-id

**LoginByWexinParams参数说明**
**LoginByWexinParams parameter description**

| 字段					| 类型		| 必填| 说明																																												|
| Fields | Type | Required | Description |
| ---						| ---			| ---	| ---																																													|
| code					| String	| 是	|微信登录返回的code																																						|
| code | String | Yes | code returned by WeChat login |
| type					| String	| 否	| 指定操作类型，可选值为`login`、`register`，不传此参数时表现为已注册则登录，未注册则进行注册，新增于uni-id 3.3.4	|
| type | String | No | Specifies the operation type. The optional values are `login` and `register`. If this parameter is not passed, it means that it is registered and logged in. If it is not registered, it will be registered. New in uni-id 3.3.4 |
| myInviteCode	|String		| 否	|设置当前注册用户自己的邀请码，type为`register`时生效																					|
| myInviteCode |String | No | Set the current registered user's own invitation code, which takes effect when type is `register` |
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用								|
| needPermission| Boolean | No | When set to true, it will return the user permission (permission) when checkingToken, it is recommended to use it in the management console |
| role					| Array		| 否	|设定用户角色，当前用户为新注册时生效																													|
| role | Array | No | Set the user role, which takes effect when the current user is newly registered |

**响应参数**
**Response parameters**

| 字段						| 类型		| 必填| 说明																																								|
| Fields | Type | Required | Description |
| ---							| ---			| ---	| ---																																									|
| code						| Number	| 是	|错误码，0表示成功																																		|
| code | Number | Yes | Error code, 0 means success |
| message					| String	| 是	|详细信息																																							|
| message | String | Yes | Details |
| uid							| String	| 是	|用户uid																																							|
| uid | String | yes | user uid |
| type						| String	| 是	|操作类型，`login`为登录、`register`为注册																						|
| type | String | Yes | Operation type, `login` is login, `register` is registration |
| openid					| String	| 是	|用户openid																																						|
| openid | String | yes | user openid |
| unionid					| String	| 否	|用户unionid，能取到此参数时会返回																										|
| unionid | String | No | User unionid, if this parameter can be obtained, it will be returned |
| token						| String	| 是	|登录成功之后返回的token信息																													|
| token | String | Yes | token information returned after successful login |
| userInfo				| Object	| 否	|用户全部信息，`type`为`login`时返回																									|
| userInfo | Object | No | All user information, returned when `type` is `login` |
| tokenExpired		| String	| 是	|token过期时间																																				|
| tokenExpired | String | Yes | token expiration time |
| mobileConfirmed	| Boolean	| 是	|是否已验证手机号																																			|
| mobileConfirmed | Boolean | Yes | Mobile phone number verified |
| emailConfirmed	| Boolean	| 是	|是否已验证邮箱																																				|
| emailConfirmed | Boolean | Yes | Email Confirmed |
| sessionKey			| String	| -		|客户端为微信小程序时返回																															|
| sessionKey | String | - |Returned when the client is a WeChat applet |
| accessToken			| String	| -		|客户端为APP时返回，微信接口调用凭证，新增于`uni-id 3.1.1`														|
| accessToken | String | - |Returned when the client is an APP, the WeChat API calls the credentials, added in `uni-id 3.1.1` |
| refreshToken		| String	| -		|客户端为APP时返回，用于刷新accessToken，新增于`uni-id 3.1.1`													|
| refreshToken | String | - |Returned when the client is an APP, used to refresh the accessToken, added in `uni-id 3.1.1` |
| expired					| Number	| -		|客户端为APP时返回，accessToken 接口调用凭证超时时间对应的时间戳，新增于`uni-id 3.1.1`|
| expired | Number | - |Returned when the client is an APP, the accessToken interface calls the timestamp corresponding to the credential timeout, added in `uni-id 3.1.1`|

**示例代码**
**Sample code**

```js
// 云函数login-by-weixin代码
// Cloud function login-by-weixin code
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
// client code
// 代码较长建议直接参考插件市场示例项目：https://ext.dcloud.net.cn/plugin?id=2116
// If the code is longer, it is recommended to directly refer to the plug-in market example project: https://ext.dcloud.net.cn/plugin?id=2116
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
### Get WeChat openid

用法：`uniID.code2SessionWeixin(Object Code2SessionWeixinParams);`
Usage: `uniID.code2SessionWeixin(Object Code2SessionWeixinParams);`

**参数说明**
**Parameter Description**

| 字段		| 类型	| 必填| 说明																																																														|
| Fields | Type | Required | Description |
| ---			| ---		| ---	| ---																																																															|
| code		| String| 是	|微信登录返回的code																																																								|
| code | String| Yes | code returned by WeChat login |

**响应参数**
**Response parameters**

| 字段				| 类型	| 必填| 说明																													|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																														|
| code				| Number| 是	|错误码，0表示成功																							|
| code | Number| Yes | Error code, 0 means success |
| message			| String| 是	|详细信息																												|
| message | String| Yes | Details |
| openid			| String| -		|用户openid																											|
| openid | String| - | user openid |
| unionid			| String| -		|用户unionid，可以取到此值时返回																|
| unionid | String| - |User unionid, return when this value is available |
| sessionKey	| String| -		|客户端为微信小程序时返回																				|
| sessionKey | String| - |Returned when the client is a WeChat applet |
| accessToken	| String| -		|客户端为APP时返回																							|
| accessToken | String| - |Returned when the client is an APP |
| refreshToken| String| -		|客户端为APP时返回，用于刷新accessToken													|
| refreshToken| String| - |Returned when the client is an APP, used to refresh the accessToken |
| expired			| Number| -		|客户端为APP时返回，accessToken 接口调用凭证超时时间对应的时间戳，新增于`uni-id 3.1.1`|
| expired | Number| - |Returned when the client is an APP, the accessToken interface calls the timestamp corresponding to the credential timeout time, added in `uni-id 3.1.1`|
| expiresIn		| Number| -		|客户端为APP时返回，accessToken 接口调用凭证过期时间，单位（秒）|
| expiresIn | Number| - |Returned when the client is an APP, the accessToken API calls the credential expiration time, unit (seconds)|

```js
// 云函数代码
// cloud function code
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.code2SessionWeixin({
    code: event.code
  })
	return res
}
```

### 绑定微信
### Bind WeChat

用法：`uniID.bindWeixin(Object BindWeixinParams);`
Usage: `uniID.bindWeixin(Object BindWeixinParams);`

**参数说明**
**Parameter Description**

| 字段		| 类型	| 必填| 说明																																																														|
| Fields | Type | Required | Description |
| ---			| ---		| ---	| ---																																																															|
| uid			| String| 是	|用户Id，可以通过checkToken返回																																																		|
|uid |String| Yes |User Id, which can be returned by checkToken |
| code		| String| 是	|微信登录返回的code																																																								|
| code | String| Yes | code returned by WeChat login |

**响应参数**
**Response parameters**

| 字段				| 类型	| 必填| 说明																																								|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																																									|
| code				| Number| 是	|错误码，0表示成功																																		|
| code | Number| Yes | Error code, 0 means success |
| message			| String| 是	|详细信息																																							|
| message | String| Yes | Details |
| openid			| String| 是	|用户openid																																						|
| openid | String| yes | user openid |
| unionid			| String| 否	|用户unionid，能取到此参数时会返回																										|
| unionid | String| No | User unionid, if this parameter can be retrieved, it will be returned |
| sessionKey	| String| -		|客户端为微信小程序时返回，新增于`uni-id 3.1.1`																				|
| sessionKey | String| - |Returned when the client is a WeChat applet, added in `uni-id 3.1.1` |
| accessToken	| String| -		|客户端为APP时返回，微信接口调用凭证，新增于`uni-id 3.1.1`														|
| accessToken | String| - |Returned when the client is an APP, the WeChat API calls the credentials, added in `uni-id 3.1.1` |
| refreshToken| String| -		|客户端为APP时返回，用于刷新accessToken，新增于`uni-id 3.1.1`													|
| refreshToken| String| - |Returned when the client is an APP, used to refresh the accessToken, added in `uni-id 3.1.1` |
| expired			| Number| -		|客户端为APP时返回，accessToken 接口调用凭证超时时间对应的时间戳，新增于`uni-id 3.1.1`|
| expired | Number| - |Returned when the client is an APP, the accessToken interface calls the timestamp corresponding to the credential timeout time, added in `uni-id 3.1.1`|

```js
// 云函数代码
// cloud function code
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
### Unbind WeChat

用法：`uniID.unbindWeixin(String uid);`
Usage: `uniID.unbindWeixin(String uid);`

**参数说明**
**Parameter Description**

| 字段| 类型	| 必填| 说明													|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---														|
| uid	| String| 是	|用户Id，可以通过checkToken返回	|
|uid |String| Yes |User Id, which can be returned by checkToken |

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

```js
// 云函数代码
// cloud function code
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
### WeChat data decryption

用法：`uniID.wxBizDataCrypt(Object WxBizDataCryptParams);`
Usage: `uniID.wxBizDataCrypt(Object WxBizDataCryptParams);`

**参数说明**
**Parameter Description**

| 字段| 类型	| 必填| 说明													|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---														|
| encryptedData	| String| 是	|包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。解密后得到的数据结构见后文	|
| encryptedData | String| Yes | Encrypted data of complete user information including sensitive data, see Encrypted Data Decryption Algorithm for details. The data structure obtained after decryption is shown below |
| iv	| String| 是	|加密算法的初始向量	|
|iv |String| Yes |initial vector of encryption algorithm|
| code	| String| `sessionKey`二选一	|微信登录返回的code	|
| code | String| `sessionKey` to choose from two | the code returned by WeChat login |
| sessionKey	| String| `code`二选一	|用户的会话密钥，可通过uniID.code2SessionWeixin(code)获取	|
| sessionKey | String| Choose one of `code` | User's session key, which can be obtained through uniID.code2SessionWeixin(code) |

**注意**
**Notice**

- `code`参数和`sessionKey`参数必须选填一个。如果有`sessionKey`则使用此值进行解密，否则尝试使用`code`去获取`sessionKey`，若两个都没有则报错。
- `code` parameter and `sessionKey` parameter must be optional. If there is `sessionKey`, use this value to decrypt, otherwise try to use `code` to get `sessionKey`, if there is no two, an error will be reported.

**响应参数**
**Response parameters**

| 字段| 类型	| 说明						|
| Field | Type | Description |
| ---	| ---			| ---							|
| code| Number	|错误码，0表示成功|
| code| Number | Error code, 0 means success|
| message	| String	|详细信息					|
| message | String | Details |
| 解密数据	| String	|具体数据由微信接口解密为准					|
| Decrypted data | String | The specific data is subject to the decryption of the WeChat interface |

```js
// 云函数代码
// cloud function code
const uniID = require('uni-id')
exports.main = async function(event,context) {
	return uniID.wxBizDataCrypt(event)
}
```

### 获取App平台微信登录用户信息@get-weixin-user-info
### Get App platform WeChat login user information @get-weixin-user-info

> 新增于 uni-id 3.3.14
> Added in uni-id 3.3.14

用法：`uniID.getWeixinUserInfo(Object GetWeixinUserInfoParams);`
Usage: `uniID.getWeixinUserInfo(Object GetWeixinUserInfoParams);`

**参数说明**
**Parameter Description**

| 字段			| 类型	| 必填	| 说明						|
| Fields | Type | Required | Description |
| ---			| ---	| ---	| ---						|
| accessToken	| String| 是	|用户登录时返回的accessToken|
| accessToken | String| Yes |accessToken returned when the user logs in|
| openid		| String| 是	|用户登录时返回的openid		|
| openid | String| yes | openid returned when the user logs in |

**响应参数**
**Response parameters**

| 字段		| 类型	| 说明		|
| Field | Type | Description |
| ---		| ---	| ---		|
| nickname	| String|用户昵称	|
| nickname | String | User nickname |
| avatar	| String|用户头像	|
| avatar | String | User Avatar |


## QQ@qq

> 新增于3.3.0版本
> Added in version 3.3.0

### QQ登录
### QQ login

**目前仅支持app和小程序的qq登录**
**Currently only supports QQ login of app and applet**

用法：`uniID.loginByQQ(Object LoginByQQParams);`
Usage: `uniID.loginByQQ(Object LoginByQQParams);`

**注意**
**Notice**

- 需要在config.json内使用QQ登录的平台下配置appid和appsecret
- You need to configure appid and appsecret under the platform that uses QQ login in config.json
- uniId会自动判断客户端平台
- uniId will automatically determine the client platform
- 登录成功之后会返回token、tokenExpired，在获取token之后应进行持久化存储，详情参考：[保存token及其有效期](uniCloud/uni-id.md?id=save-token)
- After successful login, token and tokenExpired will be returned. After obtaining token, persistent storage should be performed. For details, please refer to: [Save token and its validity period](uniCloud/uni-id.md?id=save-token)

**APP QQ登录详细配置流程**
**APP QQ login detailed configuration process**

1. 在manifest.json内配置QQ登录用appid
1. Configure the appid for QQ login in manifest.json
2. **打包**并**使用**自定义基座（注意一定要在manifest.json填写QQ appid后再制作自定义基座），[自定义基座使用说明](https://ask.dcloud.net.cn/article/35115)
2. **Package** and **use** a custom base (note that you must fill in the QQ appid in manifest.json before making a custom base), [Custom Base Instructions](https:// ask.dcloud.net.cn/article/35115)
3. 在uni-id的config.json内app对应的QQ登录信息内配置appid和appsecret
3. Configure the appid and appsecret in the QQ login information corresponding to the app in the config.json of the uni-id

**参数说明**
**Parameter Description**

| 字段					| 类型		| 必填					| 说明																																												|
| Fields | Type | Required | Description |
| ---						| ---			| ---						| ---																																													|
| code					| String	| 小程序登录必填|QQ小程序登录返回的code																																				|
| code | String | Required for applet login | code returned by QQ applet login |
| accessToken		| String	| APP登录必填		|QQ APP登录返回的access_token																																	|
| accessToken | String | Required for APP login |access_token returned by QQ APP login |
| type					| String	| 否						| 指定操作类型，可选值为`login`、`register`，不传此参数时表现为已注册则登录，未注册则进行注册，新增于uni-id 3.3.4	|
| type | String | No | Specifies the operation type. The optional values are `login` and `register`. If this parameter is not passed, it means that it is registered and logged in, and if it is not registered, it will be registered. Added in uni-id 3.3.4 |
| myInviteCode	| String	| 否						|设置当前注册用户自己的邀请码，type为`register`时生效																					|
| myInviteCode | String | No | Set the current registered user's own invitation code, which takes effect when the type is `register` |
| needPermission| Boolean	| 否						|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用								|
| needPermission| Boolean | No | When set to true, the user permission (permission) will be returned when checkingToken, it is recommended to use it in the management console |
| role					| Array		| 否						|设定用户角色，当前用户为新注册时生效																													|
| role | Array | No | Set the user role, which takes effect when the current user is newly registered |

**响应参数**
**Response parameters**

| 字段						| 类型		| 必填| 说明																			|
| Fields | Type | Required | Description |
| ---							| ---			| ---	| ---																				|
| code						| Number	| 是	|错误码，0表示成功													|
| code | Number | Yes | Error code, 0 means success |
| message					| String	| 是	|详细信息																		|
| message | String | Yes | Details |
| uid							| String	| 是	|用户uid																		|
| uid | String | yes | user uid |
| type						| String	| 是	|操作类型，`login`为登录、`register`为注册	|
| type | String | Yes | Operation type, `login` is login, `register` is registration |
| openid					| String	| 是	|用户openid																	|
| openid | String | yes | user openid |
| unionid					| String	| 否	|用户unionid，能取到此参数时会返回					|
| unionid | String | No | User unionid, if this parameter can be obtained, it will be returned |
| token						| String	| 是	|登录成功之后返回的token信息								|
| token | String | Yes | token information returned after successful login |
| userInfo				| Object	| 否	|用户全部信息，`type`为`login`时返回				|
| userInfo | Object | No | All user information, returned when `type` is `login` |
| tokenExpired		| String	| 是	|token过期时间															|
| tokenExpired | String | Yes | token expiration time |
| mobileConfirmed	| Boolean	| 是	|是否已验证手机号														|
| mobileConfirmed | Boolean | Yes | Mobile phone number verified |
| emailConfirmed	| Boolean	| 是	|是否已验证邮箱															|
| emailConfirmed | Boolean | Yes | Email Confirmed |
| sessionKey			| String	| -		|客户端为QQ小程序时返回											|
| sessionKey | String | - | Returns when the client is a QQ applet |
| accessToken			| String	| -		|客户端为APP时返回，值等于传入的accessToken	|
| accessToken | String | - | Returned when the client is an APP, the value is equal to the incoming accessToken |

**示例代码**
**Sample code**

```js
// 云函数login-by-qq代码
// Cloud function login-by-qq code
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.loginByQQ({
    code: event.code,
    accessToken: event.accessToken
  })
	return res
}

// 客户端代码
// client code
// 代码较长建议直接参考插件市场示例项目：https://ext.dcloud.net.cn/plugin?id=2116
// If the code is longer, it is recommended to directly refer to the plug-in market example project: https://ext.dcloud.net.cn/plugin?id=2116
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
### Bind QQ

用法：`uniID.bindQQ(Object BindQQParams);`
Usage: `uniID.bindQQ(Object BindQQParams);`

**参数说明**
**Parameter Description**

| 字段				| 类型	| 必填				| 说明													|
| Fields | Type | Required | Description |
| ---					| ---		| ---					| ---														|
| uid					| String| 是					|用户Id，可以通过checkToken返回	|
|uid |String| Yes |User Id, which can be returned by checkToken |
| code				| String| QQ小程序必填|QQ登录返回的code								|
| code | String| QQ applet required | code returned by QQ login |
| accessToken	| String| APP必填			|QQ登录返回的access_token				|
| accessToken | String| Required for APP | access_token returned by QQ login |

**响应参数**
**Response parameters**

| 字段				| 类型	| 必填| 说明																		|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																			|
| code				| Number| 是	|错误码，0表示成功												|
| code | Number| Yes | Error code, 0 means success |
| message			| String| 是	|详细信息																	|
| message | String| Yes | Details |
| openid			| String| 是	|用户openid																|
| openid | String| yes | user openid |
| unionid			| String| 否	|用户unionid，能取到此参数时会返回				|
| unionid | String| No | User unionid, if this parameter can be retrieved, it will be returned |
| sessionKey	| String| -		|客户端为QQ小程序时返回										|
| sessionKey | String| - |Returned when the client is a QQ applet |
| accessToken	| String| -		|客户端为APP时返回，值为传入的accessToken	|
| accessToken | String| - |Returned when the client is an APP, the value is the incoming accessToken |

### 解绑QQ
### Unbind QQ

用法：`uniID.unbindQQ(String uid);`
Usage: `uniID.unbindQQ(String uid);`

**参数说明**
**Parameter Description**

| 字段| 类型	| 必填| 说明													|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---														|
| uid	| String| 是	|用户Id，可以通过checkToken返回	|
|uid |String| Yes |User Id, which can be returned by checkToken |

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

## 支付宝@alipay
## Alipay@alipay

### 支付宝登录
### Alipay login

用法：`uniID.loginByAlipay(Object LoginByAlipayParams);`
Usage: `uniID.loginByAlipay(Object LoginByAlipayParams);`

**注意**
**Notice**

- 需要在config.json内支付宝平台下配置appid和privateKey（应用私钥）
- You need to configure appid and privateKey (application private key) under Alipay platform in config.json
- 登录成功之后会返回token、tokenExpired，在获取token之后应进行持久化存储，详情参考：[保存token及其有效期](uniCloud/uni-id.md?id=save-token)
- After successful login, token and tokenExpired will be returned. After obtaining token, persistent storage should be performed. For details, please refer to: [Save token and its validity period](uniCloud/uni-id.md?id=save-token)
- uni.login仅支持使用支付宝小程序登录，不支持app使用支付宝登录，`uniID.loginByAlipay`也只支持小程序登录
- uni.login only supports login using Alipay applet, does not support app login using Alipay, `uniID.loginByAlipay` also only supports applet login

**LoginByAlipayParams参数说明**
**LoginByAlipayParams parameter description**

| 字段					| 类型		| 必填| 说明																																												|
| Fields | Type | Required | Description |
| ---						| ---			| ---	| ---																																													|
| code					| String	| 是	|支付宝登录返回的code																																					|
| code | String | Yes | code returned by Alipay login |
| type					| String	| 否	| 指定操作类型，可选值为`login`、`register`，不传此参数时表现为已注册则登录，未注册则进行注册，新增于uni-id 3.3.4	|
| type | String | No | Specifies the operation type. The optional values are `login` and `register`. If this parameter is not passed, it means that it is registered and logged in. If it is not registered, it will be registered. New in uni-id 3.3.4 |
| myInviteCode	| String	| 否	|设置当前注册用户自己的邀请码，type为`register`时生效																					|
| myInviteCode | String | No | Set the current registered user's own invitation code, which takes effect when the type is `register` |
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用								|
| needPermission| Boolean | No | When set to true, it will return the user permission (permission) when checkingToken, it is recommended to use it in the management console |
| role					| Array		| 否	|设定用户角色，当前用户为新注册时生效																													|
| role | Array | No | Set the user role, which takes effect when the current user is newly registered |

**响应参数**
**Response parameters**

| 字段						| 类型		| 必填| 说明																		|
| Fields | Type | Required | Description |
| ---							| ---			| ---	| ---																			|
| code						| Number	| 是	|错误码，0表示成功												|
| code | Number | Yes | Error code, 0 means success |
| message					| String	| 是	|详细信息																	|
| message | String | Yes | Details |
| uid							| String	| 是	|用户uid																	|
| uid | String | yes | user uid |
| type						| String	| 是	|操作类型，`login`为登录、`register`为注册|
| type | String | Yes | Operation type, `login` is login, `register` is registration|
| openid					| String	| 是	|用户openid																|
| openid | String | yes | user openid |
| token						| String	| 是	|登录成功之后返回的token信息							|
| token | String | Yes | token information returned after successful login |
| userInfo		| Object| 是	|用户全部信息，`type`为`login`时返回								|
| userInfo | Object| Yes | All user information, returned when `type` is `login` |
| tokenExpired		| String	| 是	|token过期时间														|
| tokenExpired | String | Yes | token expiration time |
| mobileConfirmed	| Boolean	| 是	|是否已验证手机号													|
| mobileConfirmed | Boolean | Yes | Mobile phone number verified |
| emailConfirmed	| Boolean	| 是	|是否已验证邮箱														|
| emailConfirmed | Boolean | Yes | Email Confirmed |

**示例代码**
**Sample code**

```js
// 云函数代码
// cloud function code
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
### Get Alipay user ID

用法：`uniID.code2SessionAlipay(Object Code2SessionAlipayParams);`
Usage: `uniID.code2SessionAlipay(Object Code2SessionAlipayParams);`

**参数说明**
**Parameter Description**

| 字段		| 类型	| 必填| 说明																																																														|
| Fields | Type | Required | Description |
| ---			| ---		| ---	| ---																																																															|
| code		| String| 是	|支付宝登录返回的code																																																								|
| code | String| Yes | code returned by Alipay login |

**响应参数**
**Response parameters**

| 字段				| 类型	| 必填| 说明																													|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																														|
| code				| Number| 是	|错误码，0表示成功																							|
| code | Number| Yes | Error code, 0 means success |
| message					| String| 是	|详细信息																												|
| message | String| Yes | Details |
| openid			| String| -		|用户openid																											|
| openid | String| - | user openid |
| accessToken	| String| -		|客户端为APP时返回																							|
| accessToken | String| - |Returned when the client is an APP |
| expiresIn		| String| -		|客户端为APP时返回，accessToken 接口调用凭证超时时间，单位（秒）|
| expiresIn | String| - |Returned when the client is an APP, the accessToken API calls the credentials timeout time, unit (seconds)|
| refreshToken| String| -		|客户端为APP时返回，用于刷新accessToken													|
| refreshToken| String| - |Returned when the client is an APP, used to refresh the accessToken |
| reExpiresIn	| String| -		|refreshToken超时时间，单位（秒）																|
| reExpiresIn | String| - |refreshToken timeout, unit (seconds) |

```js
// 云函数代码
// cloud function code
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.code2SessionAlipay({
    code: event.code
  })
	return res
}
```

### 绑定支付宝
### Bind Alipay

用法：`uniID.bindAlipay(Object BindAlipayParams);`
Usage: `uniID.bindAlipay(Object BindAlipayParams);`

**参数说明**
**Parameter Description**

| 字段| 类型	| 必填| 说明													|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---														|
| uid	| String| 是	|用户Id，可以通过checkToken返回	|
|uid |String| Yes |User Id, which can be returned by checkToken |
| code| String| 是	|支付宝登录返回的code							|
| code| String| Yes | code returned by Alipay login |

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

```js
// 云函数代码
// cloud function code
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
### Unbind Alipay

用法：`uniID.unbindAlipay(String uid);`
Usage: `uniID.unbindAlipay(String uid);`

**参数说明**
**Parameter Description**

| 字段| 类型	| 必填| 说明													|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---														|
| uid	| String| 是	|用户Id，可以通过checkToken返回	|
|uid |String| Yes |User Id, which can be returned by checkToken |

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |

```js
// 云函数代码
// cloud function code
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
## Apple @apple

### Apple登录@loginbyapple
### Apple login @loginbyapple

用法：`uniID.loginByApple(Object LoginByAppleParams);`
Usage: `uniID.loginByApple(Object LoginByAppleParams);`

**注意**
**Notice**

- 需要在config.json内的 app > oauth > apple 下配置 bundleId
- need to configure bundleId in config.json under app > oauth > apple
- 登录成功之后会返回token、tokenExpired，在获取token之后应进行持久化存储，详情参考：[保存token及其有效期](uniCloud/uni-id.md?id=save-token)
- After successful login, token and tokenExpired will be returned. After obtaining token, persistent storage should be performed. For details, please refer to: [Save token and its validity period](uniCloud/uni-id.md?id=save-token)

**LoginByAppleParams参数说明**
**LoginByAppleParams parameter description**

| 字段				| 类型	| 必填| 说明																																						   						|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																																     	     			|
| identityToken  |String	| 是	|uni.login使用apple登录后，uni.getUserInfo返回的identityToken								  					|
|identityToken |String | Yes |identityToken returned by uni.getUserInfo after uni.login uses apple to log in |
| nickName  |String	| 否	| 若无nickName，则读取fullName，若fullName也无效，则使用email												     			|
| nickName |String | No | If there is no nickName, read fullName, if fullName is also invalid, use email |
| fullName  |Object	| 否	| uni.login使用apple登录后，uni.getUserInfo返回的fullName												     			|
| fullName |Object | No | After uni.login uses apple to log in, the fullName returned by uni.getUserInfo |
| type				| String| 否	| 指定操作类型，可选值为`login`、`register`，不传此参数时表现为已注册则登录，未注册则进行注册|
| type | String| No | Specifies the operation type, the optional values are `login`, `register`, if this parameter is not passed, it means that it is registered and logged in, and if it is not registered, it will be registered|
| myInviteCode| String| 否	| 设置当前注册用户自己的邀请码，type为`register`时生效					          							|
| myInviteCode| String| No | Set the current registered user's own invitation code, valid when type is `register` |
| needPermission| Boolean	| 否	|设置为true时会在checkToken时返回用户权限（permission），建议在管理控制台中使用	|
| needPermission| Boolean | No | When set to true, it will return the user permission (permission) when checkingToken, it is recommended to use it in the management console |
| role	| Array	| 否	|设定用户角色	，当前用户为新注册时生效											|
| role | Array | No | Set the user role, which takes effect when the current user is newly registered |

**响应参数**
**Response parameters**

| 字段						| 类型		| 说明																		|
| Field | Type | Description |
| ---							| ---			| ---																			|
| code						| Number	|错误码，0表示成功												|
| code | Number | Error code, 0 means success |
| message							| String	|详细信息																	|
| message | String | Details |
| uid							| String	|用户uid																	|
| uid | String | User uid |
| type						| String	|操作类型，`login`为登录、`register`为注册|
| type | String | Operation type, `login` is login, `register` is registration|
| openid					| String	|用户openid																|
| openid | String | user openid |
| token						| String	|登录成功之后返回的token信息							|
| token | String | The token information returned after successful login |
| userInfo		| Object|用户全部信息								|
| userInfo | Object|All user information |
| tokenExpired		| String	|token过期时间														|
| tokenExpired | String | token expiration time |

**示例代码**
**Sample code**

```js
// 云函数login-by-apple代码
// Cloud function login-by-apple code
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.loginByApple(event)
	return res
}

// 客户端代码
// client code
// 代码较长建议直接参考插件市场示例项目：https://ext.dcloud.net.cn/plugin?id=2116
// If the code is longer, it is recommended to directly refer to the plug-in market example project: https://ext.dcloud.net.cn/plugin?id=2116
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
      // get user information
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
      // uni-id Apple login
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
### Apple login verification identityToken

用法：`uniID.verifyAppleIdentityToken(Object Code2SessionAppleParams);`
Usage: `uniID.verifyAppleIdentityToken(Object Code2SessionAppleParams);`

**参数说明**
**Parameter Description**

| 字段		| 类型	| 必填| 说明																																																										|
| Fields | Type | Required | Description |
| ---			| ---		| ---	| ---																																																											|
| identityToken  |String	| 否	|uni.login使用apple登录后，uni.getUserInfo返回的identityToken								  					|
| identityToken | String | No | After uni.login uses apple to log in, the identityToken returned by uni.getUserInfo |

**响应参数**
**Response parameters**

| 字段				| 类型	| 说明																													|
| Field | Type | Description |
| ---					| ---		| ---																														|
| code				| Number|错误码，0表示成功																							|
| code | Number | Error code, 0 means success |
| message					| String|详细信息																												|
| message | String | Details |
| iss			| String|发行人注册的索赔标识了发行身份令牌的委托人。由于Apple生成令牌，因此值为。https://appleid.apple.com																											|
|iss|String|The claim registered by the issuer identifies the principal who issued the identity token. Since Apple generates the token, the value is . https://appleid.apple.com |
| sub	| String|主题注册的权利要求标识作为身份令牌主题的主体。由于此令牌用于您的应用程序，因此该值是用户的唯一标识符。																							|
|sub |String|The claim registered by the subject identifies the subject as the subject of the identity token. Since this token is used in your application, this value is the user's unique identifier. |
| aud		| String|观众注册的声明标识了身份令牌所针对的收件人。由于令牌是针对您的应用程序的，因此该值是您开发者帐户中的。client_id |
|aud|String|The claim of the viewer registration identifies the recipient for which the identity token is intended. Since the token is for your application, the value is in your developer account. client_id |
| iat| String|在注册时发出的声明中，以自Epoch以来的秒数（单位为UTC）来指示Apple发行身份令牌的时间。													|
|iat|String|In the claim issued at registration, indicates when Apple issued the identity token, in seconds since the Epoch (in UTC). |
| exp	| String|注册的到期时间以UTC中的自Epoch以来的秒数来标识身份令牌将在其上或之后到期的时间。验证令牌时，该值必须大于当前日期/时间。																|
|exp|String|The registered expiry time is the number of seconds since the Epoch in UTC that identifies the time on or after which the identity token will expire. When validating the token, the value must be greater than the current date/time. |
| email	| String|一个字符串值，代表用户的电子邮件地址。电子邮件地址将是用户的真实电子邮件地址或代理地址，具体取决于他们的状态私人电子邮件中继服务。					|
| email | String | A string value representing the user's email address. The email address will be the user's real email address or a proxy address, depending on their status of private email relay service. |
| email_verified	| String|字符串或布尔值，指示服务是否已验证电子邮件。此声明的值始终为true，因为服务器仅返回经过验证的电子邮件地址。该值可以是字符串（”true”）或布尔值（true）。|
| email_verified | String | A string or boolean indicating whether the email has been verified by the service. The value of this claim is always true because the server only returns verified email addresses. The value can be a string ("true") or a boolean (true). |
| is_private_email	| String|字符串或布尔值，指示用户共享的电子邮件是否是代理地址。该值可以是字符串（”true”或“false”）或布尔值（true或false）。|
|is_private_email |String|String or Boolean indicating whether the email shared by the user is a proxy address. The value can be a string ("true" or "false") or a boolean (true or false). |
| real_user_status	| String|一个整数值，指示用户是否看起来是真实的人。使用此索赔的价值来减轻欺诈。可能的值为：（0或Unsupported）。1 （或Unknown），2 （或）。有关更多信息，请参见。仅在iOS 14和更高版本，macOS 11和更高版本，watchOS 7和更高版本，tvOS 14和更高版本上才存在此声明；基于Web的应用程序不存在或不支持该声明。|
| real_user_status | String | An integer value indicating whether the user appears to be a real person. Use the value of this claim to mitigate fraud. Possible values are: (0 or Unsupported). 1 (or Unknown), 2 (or). For more information, see . This statement exists only on iOS 14 and later, macOS 11 and later, watchOS 7 and later, tvOS 14 and later; it does not exist or is not supported for web-based applications. |

```js
// 云函数代码
// cloud function code
const uniID = require('uni-id')
exports.main = async function(event,context) {
	const res = await uniID.verifyAppleIdentityToken({
    identityToken: event.identityToken
  })
	return res
}
```

## 角色权限@rbac-api
## role permissions @rbac-api

### 获取用户角色
### Get user role

根据uid获取用户角色
Get user role based on uid

用法：`uniID.getRoleByUid(Object GetRoleByUidParams)`
Usage: `uniID.getRoleByUid(Object GetRoleByUidParams)`

**参数说明**
**Parameter Description**

| 字段	| 类型	| 必填| 说明													|
| Fields | Type | Required | Description |
| ---		| ---		| ---	| ---														|
| uid		| String| 是	|用户Id，可以通过checkToken返回	|
|uid |String| Yes |User Id, which can be returned by checkToken |

**响应参数**
**Response parameters**

| 字段| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---							|
| code| Number| 是	|错误码，0表示成功|
|code|Number| Yes |Error code, 0 means success|
| message	| String| 是	|详细信息					|
| message | String| Yes | Details |
| role	| Array	| 是	|用户拥有的角色列表|
| role | Array | Yes | list of roles the user has |

### 获取角色的权限
### Get the permissions of the role

根据roleID获取角色权限
Get role permissions based on roleID

用法：`uniID.getPermissionByRole(Object GetPermissionByRoleParams)`
Usage: `uniID.getPermissionByRole(Object GetPermissionByRoleParams)`

**参数说明**
**Parameter Description**

| 字段	| 类型	| 必填| 说明	|
| Fields | Type | Required | Description |
| ---		| ---		| ---	| ---		|
| roleID| String| 是	|角色Id	|
|roleID| String| Yes |roleId|

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明							|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| code | Number| Yes | Error code, 0 means success |
| message				| String| 是	|详细信息						|
| message | String| Yes | Details |
| permission| Array	| 是	|角色拥有的权限列表	|
|permission|Array|Yes |A list of permissions the role has |

### 获取用户的权限
### Get user permissions

根据uid获取用户权限
Get user permissions based on uid

用法：`uniID.getPermissionByUid(Object GetPermissionByUidParams)`
Usage: `uniID.getPermissionByUid(Object GetPermissionByUidParams)`

**参数说明**
**Parameter Description**

| 字段| 类型	| 必填| 说明	|
| Fields | Type | Required | Description |
| ---	| ---		| ---	| ---		|
| uid	| String| 是	|用户Id	|
|uid|String|Yes |UserId|

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明							|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| code | Number| Yes | Error code, 0 means success |
| message				| String| 是	|详细信息						|
| message | String| Yes | Details |
| permission| Array	| 是	|用户拥有的权限列表	|
|permission|Array|Yes |A list of permissions the user has |

### 为用户绑定角色
### Bind roles to users

用法：`uniID.bindRole(Object BindRoleParams)`
Usage: `uniID.bindRole(Object BindRoleParams)`

**参数说明**
**Parameter Description**

| 字段		| 类型		| 必填| 说明																																										|
| Fields | Type | Required | Description |
| ---			| ---			| ---	| ---																																											|
| uid			| String	| 是	|用户Id																																										|
|uid|String|Yes|UserId|
| roleList| Array		| 是	|角色Id（role_id）列表																																		|
| roleList| Array | yes | list of role ids (role_id) |
| reset		| Boolean	| 否	|是否直接覆盖用户角色，true：直接将roleList设置为用户角色，false：在用户已有角色后追加角色|
| reset | Boolean | No | Whether to directly override the user role, true: directly set the roleList to the user role, false: add the role after the user already has a role|

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明							|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| code | Number| Yes | Error code, 0 means success |
| message				| String| 是	|详细信息						|
| message | String| Yes | Details |

### 为角色绑定权限
### Bind permissions to roles

用法：`uniID.bindPermission(Object BindPermissionParams)`
Usage: `uniID.bindPermission(Object BindPermissionParams)`

**参数说明**
**Parameter Description**

| 字段					| 类型		| 必填| 说明																																													|
| Fields | Type | Required | Description |
| ---						| ---			| ---	| ---																																														|
| roleID				| String	| 是	|用户Id																																													|
| roleID | String | Yes | UserId |
| permissionList| Array		| 是	|权限Id（permission_id）列表																																													|
|permissionList| Array | yes | list of permission ids (permission_id) |
| reset					| Boolean	| 否	|是否直接覆盖角色权限，true：直接将permissionList设置为角色权限，false：在角色已有权限后追加权限|
| reset | Boolean | No | Whether to directly override the role permissions, true: directly set the permissionList as the role permissions, false: append the permissions after the roles already have permissions|

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明							|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| code | Number| Yes | Error code, 0 means success |
| message				| String| 是	|详细信息						|
| message | String| Yes | Details |

### 为用户解绑角色
### Unbind roles for users

用法：`uniID.unbindRole(Object UnbindRoleParams)`
Usage: `uniID.unbindRole(Object UnbindRoleParams)`

**参数说明**
**Parameter Description**

| 字段		| 类型		| 必填| 说明																																										|
| Fields | Type | Required | Description |
| ---			| ---			| ---	| ---																																											|
| uid			| String	| 是	|用户Id																																										|
|uid|String|Yes|UserId|
| roleList| Array		| 是	|角色Id（role_id）列表																																		|
| roleList| Array | yes | list of role ids (role_id) |

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明							|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| code | Number| Yes | Error code, 0 means success |
| message				| String| 是	|详细信息						|
| message | String| Yes | Details |

### 为角色解绑权限
### Unbind permissions for roles

用法：`uniID.unbindPermission(Object UnbindPermissionParams)`
Usage: `uniID.unbindPermission(Object UnbindPermissionParams)`

**参数说明**
**Parameter Description**

| 字段					| 类型	| 必填| 说明											|
| Fields | Type | Required | Description |
| ---						| ---		| ---	| ---												|
| roleID				| String| 是	|角色Id											|
|roleID | String| Yes |roleId|
| permissionList| Array	| 是	|权限Id（permission_id）列表|
|permissionList|Array|Yes |List of permission Ids (permission_id)|

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明							|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| code | Number| Yes | Error code, 0 means success |
| message				| String| 是	|详细信息						|
| message | String| Yes | Details |

### 新增角色
### Add new characters

用法：`uniID.addRole(Object AddRoleParams)`
Usage: `uniID.addRole(Object AddRoleParams)`

**参数说明**
**Parameter Description**

| 字段			| 类型	| 必填| 说明											|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---												|
| roleID		| String| 是	|角色Id，唯一标识											|
| roleID | String| Yes | Role ID, unique identifier |
| roleName	| String| 否	|角色名称，展示用						|
| roleName | String| No | Role name, for display |
| comment		| String| 否	|备注												|
| comment | String| No | Comment |
| permission| Array	| 否	|权限Id（permission_id）列表|
|permission|Array|No |List of permission Ids (permission_id)|

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明							|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| code | Number| Yes | Error code, 0 means success |
| message				| String| 是	|详细信息						|
| message | String| Yes | Details |

### 获取角色列表
### Get a list of roles

用法：`uniID.getRoleList(Object GetRoleListParams)`
Usage: `uniID.getRoleList(Object GetRoleListParams)`

**参数说明**
**Parameter Description**

| 字段			| 类型		| 必填| 说明						|
| Fields | Type | Required | Description |
| ---				| ---			| ---	| ---							|
| limit			| Number	| 是	|限制返回数量			|
| limit | Number | Yes | Limit the number of returns |
| offset		| Number	| 是	|偏移量						|
|offset|Number|Yes |offset|
| needTotal	| Boolean	| 否	|是否需要返回总数	|
| needTotal | Boolean | No |Do you need to return the total number |

**响应参数**
**Response parameters**

| 字段		| 类型	|  说明																			|
| Field | Type | Description |
| ---			| ---		|  ---																			|
| code		| Number| 错误码，0表示成功													|
| code | Number| Error code, 0 means success |
| message			| String| 详细信息																	|
| message | String| Details |
| roleList| Array	|roles表记录数组（包含role_name、comment等）|
|roleList| Array |roles table record array (including role_name, comment, etc.)|
| total		| Number|总数量																			|
| total | Number|Total number |

### 获取角色信息
### Get character info

用法：`uniID.getRoleInfo(String roleID)`
Usage: `uniID.getRoleInfo(String roleID)`

**参数说明**
**Parameter Description**

| 字段	| 类型	| 必填| 说明	|
| Fields | Type | Required | Description |
| ---		| ---		| ---	| ---		|
| roleID| String| 是	|角色ID	|
|roleID| String| Yes |roleID|

**响应参数**
**Response parameters**

| 字段				| 类型			|  说明							|
| Field | Type | Description |
| ---					| ---				|  ---							|
| code				| Number		| 错误码，0表示成功	|
| code | Number | Error code, 0 means success |
| message			| String		| 详细信息					|
| message | String | Details |
| role_name		| String		| 角色名，展示用		|
| role_name | String | role name, for display |
| permission	| Array			| 角色拥有的权限列表|
| permission | Array | List of permissions the role has |
| comment			| String		| 备注							|
| comment | String | Comment |
| created_date| Timestamp	| 角色创建时间			|
| created_date| Timestamp | Role creation time |

### 更新角色信息
### Update character info

**注意不可修改role_id**
**Note that role_id cannot be modified**

用法：`uniID.updateRole(Object UpdateRoleParams)`
Usage: `uniID.updateRole(Object UpdateRoleParams)`

**参数说明**
**Parameter Description**

| 字段			| 类型	| 必填| 说明											|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---												|
| roleID		| String| 是	|角色Id，唯一标识						|
| roleID | String| Yes | Role ID, unique identifier |
| roleName	| String| 否	|角色名称，展示用						|
| roleName | String| No | Role name, for display |
| comment		| String| 否	|备注												|
| comment | String| No | Comment |
| permission| Array	| 否	|权限Id（permission_id）列表|
|permission|Array|No |List of permission Ids (permission_id)|

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明							|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| code | Number| Yes | Error code, 0 means success |
| message				| String| 是	|详细信息						|
| message | String| Yes | Details |

### 删除角色
### delete role

用法：`uniID.deleteRole(Object DeleteRoleParams)`
Usage: `uniID.deleteRole(Object DeleteRoleParams)`

**参数说明**
**Parameter Description**

| 字段	| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---		| ---		| ---	| ---							|
| roleID| String| 是	|角色Id，唯一标识	|
| roleID| String| Yes | Role ID, unique identifier |

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明							|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| code | Number| Yes | Error code, 0 means success |
| message				| String| 是	|详细信息						|
| message | String| Yes | Details |

### 新增权限
### Add permissions

用法：`uniID.addPermission(Object AddPermissionParams)`
Usage: `uniID.addPermission(Object AddPermissionParams)`

**参数说明**
**Parameter Description**

| 字段					| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---						| ---		| ---	| ---							|
| permissionID	| String| 是	|权限Id，唯一标识	|
| permissionID | String| Yes | Permission ID, unique identifier |
| permissionName| String| 否	|权限名称，展示用	|
|permissionName| String| No |permission name, for display |
| comment				| String| 否	|备注							|
| comment | String| No | Comment |

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明							|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| code | Number| Yes | Error code, 0 means success |
| message				| String| 是	|详细信息						|
| message | String| Yes | Details |

### 获取权限列表
### Get permission list

用法：`uniID.getPermissionList(Object GetPermissionListParams)`
Usage: `uniID.getPermissionList(Object GetPermissionListParams)`

**参数说明**
**Parameter Description**

| 字段			| 类型		| 必填| 说明						|
| Fields | Type | Required | Description |
| ---				| ---			| ---	| ---							|
| limit			| Number	| 是	|限制返回数量			|
| limit | Number | Yes | Limit the number of returns |
| offset		| Number	| 是	|偏移量						|
|offset|Number|Yes |offset|
| needTotal	| Boolean	| 否	|是否需要返回总数	|
| needTotal | Boolean | No |Do you need to return the total number |

**响应参数**
**Response parameters**

| 字段					| 类型	|  说明																									|
| Field | Type | Description |
| ---						| ---		|  ---																									|
| code					| Number| 错误码，0表示成功																			|
| code | Number| Error code, 0 means success |
| message						| String| 详细信息																							|
| message | String| Details |
| permissionList| Array	|permissions表记录数组（包含permission_name、comment等）|
|permissionList| Array |permissions table record array (including permission_name, comment, etc.)|
| total					| Number|总数量																									|
| total | Number|Total number |

### 获取权限信息
### Get permission information

用法：`uniID.getPermissionInfo(String permissionID)`
Usage: `uniID.getPermissionInfo(String permissionID)`

**参数说明**
**Parameter Description**

| 字段				| 类型	| 必填| 说明	|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---		|
| permissionID| String| 是	|权限ID	|
|permissionID| String| yes |permissionID|

**响应参数**
**Response parameters**

| 字段						| 类型			|  说明							|
| Field | Type | Description |
| ---							| ---				|  ---							|
| code						| Number		| 错误码，0表示成功	|
| code | Number | Error code, 0 means success |
| message					| String		| 详细信息					|
| message | String | Details |
| permission_name	| String		| 权限名，展示用		|
| permission_name | String | Permission name, for display |
| comment					| String		| 备注							|
| comment | String | Comment |
| created_date		| Timestamp	| 权限创建时间			|
| created_date | Timestamp | Permission creation time |

### 修改权限
### edit permission

**注意：不可修改permissionID**
**Note: The permissionID cannot be modified**

用法：`uniID.updatePermission(Object UpdatePermissionParams)`
Usage: `uniID.updatePermission(Object UpdatePermissionParams)`

**参数说明**
**Parameter Description**

| 字段					| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---						| ---		| ---	| ---							|
| permissionID	| String| 是	|权限Id，唯一标识	|
| permissionID | String| Yes | Permission ID, unique identifier |
| permissionName| String| 否	|权限名称，展示用	|
|permissionName| String| No |permission name, for display |
| comment				| String| 否	|备注							|
| comment | String| No | Comment |

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明							|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| code | Number| Yes | Error code, 0 means success |
| message				| String| 是	|详细信息						|
| message | String| Yes | Details |

### 删除权限
### remove permission

用法：`uniID.deletePermission(Object DeletePermissionParams)`
Usage: `uniID.deletePermission(Object DeletePermissionParams)`

**参数说明**
**Parameter Description**

| 字段					| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---						| ---		| ---	| ---							|
| permissionID	| String| 是	|权限Id，唯一标识	|
| permissionID | String| Yes | Permission ID, unique identifier |

**响应参数**
**Response parameters**

| 字段			| 类型	| 必填| 说明							|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---								|
| code			| Number| 是	|错误码，0表示成功	|
| code | Number| Yes | Error code, 0 means success |
| message				| String| 是	|详细信息						|
| message | String| Yes | Details |

## 裂变@fission-api
## fission @fission-api

### 设置用户邀请码
### Set user invitation code

针对未生成邀请码的用户使用此方法生成邀请码
Use this method to generate an invitation code for users who have not generated an invitation code

用法：`uniID.setUserInviteCode(Object SetUserInviteCodeParams);`
Usage: `uniID.setUserInviteCode(Object SetUserInviteCodeParams);`

此接口用于在其他接口不满足需求时使用
This interface is used when other interfaces do not meet the requirements

**参数说明**
**Parameter Description**

| 字段				| 类型	| 必填| 说明																																								|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																																									|
| uid					| String| 是	|用户Id																																								|
|uid|String|Yes |UserId|
| myInviteCode| String| 否	|自行指定邀请码（不可与其他账号邀请码重复），如果不传此字段则自动生成不重复的6位邀请码|
| myInviteCode| String| No | Specify the invitation code by yourself (it cannot be repeated with other account invitation codes), if you do not pass this field, a unique 6-digit invitation code will be automatically generated|

**响应参数**
**Response parameters**

| 字段				  | 类型	  | 必填 | 说明						|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---							|
| code				| Number| 是	  |错误码，0表示成功|
|code |Number| Yes |Error code, 0 means success|
| message					| String| 是	  |详细信息					|
| message | String| Yes | Details |
| myInviteCode| String| 是	  |最终设置的邀请码	|
| myInviteCode| String| Yes | The final invitation code set |

### 用户接受邀请
### User accepts invitation

此接口用于在注册之后再填写邀请码的场景，多数情况下不会用到此接口而是在注册时填写邀请码
This interface is used to fill in the invitation code after registration. In most cases, this interface is not used, but the invitation code is filled in during registration.

用法：`uniID.acceptInvite(Object AcceptInviteParams);`
Usage: `uniID.acceptInvite(Object AcceptInviteParams);`

**参数说明**
**Parameter Description**

| 字段			| 类型	| 必填| 说明					|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---						|
| uid				| String| 是	|用户Id					|
|uid|String|Yes |UserId|
| inviteCode| String| 是	|邀请人的邀请码	|
| inviteCode| String| yes | inviter's invitation code |

**响应参数**
**Response parameters**

| 字段				  | 类型	  | 必填 | 说明						|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---							|
| code				| Number| 是	  |错误码，0表示成功|
|code |Number| Yes |Error code, 0 means success|
| message					| String| 是	  |详细信息					|
| message | String| Yes | Details |

### 获取接受邀请的用户清单
### Get the list of users who have accepted the invitation

用法：`uniID.getInvitedUser(Object GetInvitedUserParams);`
Usage: `uniID.getInvitedUser(Object GetInvitedUserParams);`

此接口用于在其他接口不满足需求时使用
This interface is used when other interfaces do not meet the requirements

**参数说明**
**Parameter Description**

| 字段			| 类型		| 必填| 说明												|
| Fields | Type | Required | Description |
| ---				| ---			| ---	| ---													|
| uid				| String	| 是	|用户Id												|
|uid|String|Yes|UserId|
| level			| Number	| 否	|指定获取第几级邀请用户，默认1|
| level | Number | No | Specifies the level of invited users to obtain, default 1|
| limit			| Number	| 否	|指定返回列表长度，默认20			|
| limit | Number | No | Specifies the length of the returned list, the default is 20 |
| offset		| Number	| 否	|指定列表偏移量，默认0				|
|offset|Number|No |Specify the list offset, default 0|
| needTotal	| Boolean	| 否	|是否需要返回总数，默认false	|
| needTotal | Boolean | No | Whether to return the total number, default false |

**响应参数**
**Response parameters**

| 字段				| 类型	| 必填| 说明						|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---							|
| code				| Number| 是	|错误码，0表示成功|
|code |Number| Yes |Error code, 0 means success|
| message					| String| 是	|详细信息					|
| message | String| Yes | Details |
| invitedUser	| Array	| 是	|邀请的用户列表		|
| invitedUser | Array | yes | list of invited users |

**invitedUser每项结构**
**invitedUser per structure**

| 字段				| 类型	| 必填| 说明															|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																|
| username		|String	|-		|被邀请者用户名											|
| username |String |- |Invitee username |
| mobile			|String	|-		|被邀请者手机号											|
| mobile |String |- |Invitee's mobile phone number |
| invite_time	|String	|-		|被邀请者注册时间，以时间戳形式返回	|
| invite_time |String |- |Invitee registration time, returned as timestamp |

```js
// 云函数代码
// cloud function code
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
## Authorize, prohibit users from logging in @authorize-app on a specific client

> 新增于3.3.0版本
> Added in version 3.3.0

用户授权或者取消授权用户登录某客户端。
The user authorizes or deauthorizes the user to log in to a client.

需要注意的是客户端APPID信息是由客户端上传上来的，并非完全可信，尽量在入口处进行校验。例：
It should be noted that the client APPID information is uploaded by the client and is not completely trusted. Try to verify it at the entrance. example:

```js
exports.main = async function(event, context){
  if(context.APPID !== '__UNI__xxx1') {
    throw new Error('非法访问')
  }
}
```

### 设置允许登录的客户端
### Set clients allowed to log in

用法：`uniID.setAuthorizedAppLogin(Object SetAuthorizedAppLoginParams);`
Usage: `uniID.setAuthorizedAppLogin(Object SetAuthorizedAppLoginParams);`

覆盖原有dcloud_appid字段，设置指定用户允许登录的客户端
Override the original dcloud_appid field, and set the client that the specified user is allowed to log in to

**参数说明**
**Parameter Description**

| 字段						| 类型	| 必填| 说明																	|
| Fields | Type | Required | Description |
| ---							| ---		| ---	| ---																		|
| uid							| String| 是	|用户Id																	|
|uid|String|Yes |UserId|
| dcloudAppidList	| Array	| 是	|指定允许登录的客户端的DCloud Appid列表	|
| dcloudAppidList | Array | yes | Specifies a list of DCloud Appids for clients that are allowed to log in |

```js
const res = await uniID.setAuthorizedAppLogin({
  uid: 'xxxx',
  dcloudAppidList: ['__UNI__xxx1', '__UNI__xxx2'] // 允许登录的DCloud Appid列表
})
```

### 新增允许登录的客户端
### Add clients that allow login

用法：`uniID.authorizeAppLogin(Object AuthorizeAppLoginParams);`
Usage: `uniID.authorizeAppLogin(Object AuthorizeAppLoginParams);`

在已有允许登录的客户端列表中插入新的客户端的DCloud Appid
Insert the new client's DCloud Appid into the list of existing clients allowed to log in

**参数说明**
**Parameter Description**

| 字段				| 类型	| 必填| 说明															|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																|
| uid					| String| 是	|用户Id															|
|uid|String|Yes |UserId|
| dcloudAppid	| String| 是	|指定允许登录的客户端的DCloud Appid	|
| dcloudAppid | String| Yes | Specifies the DCloud Appid of the client that is allowed to log in |

```js
const res = await uniID.authorizeAppLogin({
  uid: 'xxxx',
  dcloudAppid: '__UNI__xxx1' // 允许登录的客户端的DCloud Appid
})
```

### 移除允许登录的客户端
### Remove clients that are allowed to log in

用法：`uniID.forbidAppLogin(Object ForbidAppLoginParams);`
Usage: `uniID.forbidAppLogin(Object ForbidAppLoginParams);`

从已有允许登录的客户端列表中移除一个客户端的DCloud Appid，禁止后用户不可在特定客户端登录
Remove the DCloud Appid of a client from the list of clients that have been allowed to log in. Users cannot log in on a specific client after being banned.

**参数说明**
**Parameter Description**

| 字段				| 类型	| 必填| 说明															|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																|
| uid					| String| 是	|用户Id															|
|uid|String|Yes |UserId|
| dcloudAppid	| String| 是	|指定禁止登录的客户端的DCloud Appid	|
| dcloudAppid | String| Yes | Specifies the DCloud Appid of the client that is prohibited from logging in |

```js
const res = await uniID.forbidAppLogin({
  uid: 'xxxx',
  dcloudAppid: '__UNI__xxx1' // 禁止登录的客户端的DCloud Appid
})
```

## 调试功能
## Debug function

> 此类目下接口仅可用于开发调试，不要在生产环境使用
> This kind of current interface can only be used for development and debugging, do not use it in the production environment

### 获取当前uni-id实例使用的配置内容
### Get the configuration content used by the current uni-id instance

> 新增于3.3.0版本
> Added in version 3.3.0

由于uni-id提供了多种传入配置的方式`config.json、uniID.createInstance、uniID.init（已不推荐使用）`，开发者在使用插件作者或者其他人开发的功能时容易搞错到底在哪进行配置。可以使用此接口查看实际使用的配置文件内容，方便开发调试
Since uni-id provides multiple ways to pass in configuration `config.json, uniID.createInstance, uniID.init (deprecated)`, it is easy for developers to make mistakes when using functions developed by plugin authors or others where to configure. You can use this interface to view the actual configuration file content, which is convenient for development and debugging

用法：`uniID.dev.getConfig()`
Usage: `uniID.dev.getConfig()`

此接口会返回uni-id实例使用的配置内容。
This interface returns the configuration content used by the uni-id instance.

# 数据库结构@db-schema
# Database structure @db-schema

`uni-id`的所有数据表，都在[opendb](https://gitee.com/dcloud/opendb/)规范中。
All data tables for `uni-id` are in the [opendb](https://gitee.com/dcloud/opendb/) specification.

在unicloud [web控制台](https://unicloud.dcloud.net.cn/) 新建数据表时，可以从`uni-id`的模板分类里找到下面的表，并一键创建这些表。
When creating a new data table in unicloud [web console](https://unicloud.dcloud.net.cn/), you can find the following tables from the template category of `uni-id`, and create these tables with one click.

## 用户表@user-table
## User table @user-table

表名：`uni-id-users`
Table name: `uni-id-users`

| 字段				| 类型		| 必填	| 描述														|
| Fields | Type | Required | Description |
| ----------------	| ---------	| ----	| -------------------------------------------				|
| \_id				| Object ID	| 是	| 存储文档 ID（用户 ID），系统自动生成						|
| \_id | Object ID | Yes | Stores the document ID (user ID), the system automatically generates |
| username			| String	| 否	| 用户名，不允许重复										|
| username | String | No | Username, no duplicates allowed |
| password			| String	| 否	| 密码。加密存储											|
| password | String | No | Password. Encrypted Storage |
| nickname			| String	| 否	| 用户昵称													|
| nickname | String | No | User nickname |
| gender			| Integer	| 否	| 用户性别：0 未知 1 男性 2 女性							|
| gender | Integer | No | User gender: 0 unknown 1 male 2 female |
| status			| Integer	| 是	| 用户状态：0 正常，1 禁用，2 审核中，3 审核拒绝，4 已注销	|
| status | Integer | Yes | User Status: 0 Normal, 1 Disabled, 2 Reviewing, 3 Review Denied, 4 Logged Out |
| mobile			| String	| 否	| 手机号码													|
| mobile | String | No | Mobile number |
| mobile_confirmed	| Integer	| 否	| 手机号验证状态：0 未验证 1 已验证，未验证用户不可登录		|
| mobile_confirmed | Integer | No | Mobile number verification status: 0 Unverified 1 Verified, unverified users cannot log in |
| email				| String	| 否	| 邮箱地址													|
| email | String | No | Email address |
| email_confirmed	| Integer	| 否	| 邮箱验证状态：0 未验证 1 已验证，未验证用户不可登录		|
| email_confirmed | Integer | No | Email verification status: 0 not verified 1 verified, unverified users cannot log in |
| avatar			| String	| 否	| 头像地址													|
| avatar | String | No | Avatar address |
| wx_unionid		| String	| 否	| 微信unionid												|
| wx_unionid | String | No | WeChat unionid |
| wx_openid			| Object	| 否	| 微信各个平台openid										|
| wx_openid | Object | No | Wechat platform openid |
| ali_openid		| String	| 否	| 支付宝平台openid											|
| ali_openid | String | No | Alipay platform openid |
| comment			| String	| 否	| 备注														|
| comment | String | No | Comment |
| realname_auth		| Object	| 否	| 实名认证信息												|
| realname_auth | Object | No | Real-name authentication information |
| register_date		| Timestamp	| 否	| 注册时间													|
| register_date | Timestamp | No | Registration Date |
| register_ip		| String	| 否	| 注册时 IP 地址，`uni-id 3.3.14`起移至register_env内		|
| register_ip | String | No | IP address when registering, moved to register_env from `uni-id 3.3.14` |
| last_login_date	| Timestamp	| 否	| 最后登录时间												|
| last_login_date | Timestamp | No | Last login time |
| last_login_ip		| String	| 否	| 最后登录时 IP 地址										|
| last_login_ip | String | No | IP address of last login |
| login_ip_limit	| Array		| 否	| 登录 IP 限制												|
| login_ip_limit | Array | No | Login IP Limit |
| inviter_uid		| Array		| 否	| 邀请人uid，按层级从下往上排列的uid数组，即第一个是直接上级|
| inviter_uid | Array | No | The inviter uid, an array of uid arranged from bottom to top according to the level, that is, the first one is the direct superior|
| my_invite_code	| String	| 否	| 用户自己的邀请码											|
| my_invite_code | String | No | User's own invitation code |
| role				| Array		| 否	| 用户角色列表，由role_id组成的数组							|
| role | Array | no | list of user roles, an array of role_ids |
| register_env		| Object	| 否	| 用户注册时的环境信息，新增于`uni-id 3.3.14`				|
| register_env | Object | No | Environment information for user registration, added in `uni-id 3.3.14` |

**注意**
**Notice**

- 最后登录时间、IP，并非只有登录操作会修改，token刷新时也会修改最后登录时间、ip。应用启动时若token有效则不会触发登录行为，也不会更新本值。
- The last login time and IP, not only the login operation will be modified, the last login time and IP will also be modified when the token is refreshed. When the application starts, if the token is valid, the login behavior will not be triggered, and this value will not be updated.

**wx_openid字段定义**
**wx_openid field definition**

| 字段		| 类型	| 必填	| 描述					|
| Fields | Type | Required | Description |
| -------	| ------| ----	| --------				|
| app-plus	| String| 否	| app平台微信openid		|
| app-plus | String| No | app platform WeChat openid |
| mp-weixin	| String| 否	| 微信小程序平台openid	|
| mp-weixin | String| No | WeChat applet platform openid |
| h5-web	| String| 否	| 微信网页应用openid	|
| h5-web | String| No | WeChat web application openid |
| h5-weixin	| String| 否	| 微信公众号应用openid	|
| h5-weixin | String| No | WeChat public account application openid |

**realNameAuth 扩展字段定义**
**realNameAuth extension field definition**
该字段存储实名认证信息。
This field stores real-name authentication information.

| 字段            | 类型      | 必填 | 描述                                                |
| Fields | Type | Required | Description |
| --------------- | --------- | ---- | --------------------------------------------------- |
| type            | Integer   | 是   | 用户类型：0 个人用户 1 企业用户                     |
| type | Integer | Yes | User type: 0 personal user 1 enterprise user |
| auth_status     | Integer   | 是   | 认证状态：0 未认证 1 等待认证 2 认证通过 3 认证失败 |
| auth_status | Integer | Yes | Authentication status: 0 Not authenticated 1 Waiting for authentication 2 Authentication passed 3 Authentication failed |
| auth_date       | Timestamp | 否   | 认证通过时间                                        |
| auth_date | Timestamp | No | Authentication passed time |
| real_name       | String    | 否   | 真实姓名/企业名称                                   |
| real_name | String | No | Real Name/Business Name |
| identity        | String    | 否   | 身份证号码/营业执照号码                             |
| identity | String | No | ID number/business license number |
| id_card_front   | String    | 否   | 身份证正面照 URL                                    |
| id_card_front | String | No | ID card front photo URL |
| id_card_back    | String    | 否   | 身份证反面照 URL                                    |
| id_card_back | String | No | ID card back photo URL |
| id_card_in_hand | String    | 否   | 手持身份证照片 URL                                  |
| id_card_in_hand | String | No | ID card photo URL |
| license         | String    | 否   | 营业执照 URL                                        |
| license | String | No | Business License URL |
| contact_person  | String    | 否   | 联系人姓名                                          |
| contact_person | String | No | Contact name |
| contact_mobile  | String    | 否   | 联系人手机号码                                      |
| contact_mobile | String | No | Contact phone number |
| contact_email   | String    | 否   | 联系人邮箱                                          |
| contact_email | String | No | Contact email |

**job 扩展字段定义**
**job extension field definition**

| 字段    | 类型   | 必填 | 描述     |
| Fields | Type | Required | Description |
| ------- | ------ | ---- | -------- |
| company | String | 否   | 公司名称 |
| company | String | No | Company Name |
| title   | String | 否   | 职位     |
| title | String | No | Title |

**register_env字段定义**
**register_env field definition**

**注意：调用addUser添加的用户无此字段**
**Note: Users added by calling addUser do not have this field**

| 字段			| 类型	| 必填	| 描述												|
| Fields | Type | Required | Description |
|--				|--		|--		|--													|
|appid			| String|否		|注册时的客户端appId								|
|appid | String|No |Client appId when registering |
|uni_platform	|String	|否		|注册时的客户端平台，如h5、app、mp-weixin等			|
|uni_platform |String |No |The client platform when registering, such as h5, app, mp-weixin, etc. |
|os_name		|String	|否		|注册时的客户端系统名，ios、android、windows、mac、linux	|
|os_name |String |No |Client system name when registering, ios, android, windows, mac, linux |
|app_name		|String	|否		|注册时的客户端名称									|
|app_name |String |No |Client name when registering |
|app_version		|String	|否		|注册时的客户版本									|
|app_version |String |No |Customer version at registration |
|app_version_code	|String	|否		|注册时的客户版本号									|
|app_version_code |String |No |Customer version number at registration |
|channel		|String	|否		|注册时的客户端启动场景（小程序）或应用渠道（app）	|
|channel |String |No |Client startup scene (applet) or application channel (app) when registering |
|client_ip		|String	|否		|注册时的客户端IP									|
|client_ip |String |No |Client IP when registering |


用户集合示例：
User collection example:

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

### 用户表索引@uni-id-users-indexes
### User table index @uni-id-users-indexes

目前opendb内提供的uni-id-users表包含完整的索引，数据库在索引量多且频繁更新的情况下可能会出现写入缓慢的情况，因此推荐开发者在使用uni-id-users表时可以适当删除部分没有用到的索引。
At present, the uni-id-users table provided in opendb contains a complete index. When the database has a large number of indexes and is frequently updated, the writing may be slow. Therefore, it is recommended that developers can use the uni-id-users table. Appropriately delete some unused indexes.

例：项目内只使用了微信登录，不使用其他登录方式，可以只保留`wx_unionid、wx_openid.mp-weixin、wx_openid.app-plus`这些账号相关的索引，删除其他账号的索引
Example: Only WeChat login is used in the project, and no other login methods are used. You can only keep the indexes related to these accounts `wx_unionid, wx_openid.mp-weixin, wx_openid.app-plus`, and delete the indexes of other accounts

## 验证码表
## verification code table

表名：`opendb-verify-codes` 
Table name: `opendb-verify-codes`

**uni-id 2.0.0版本以前，使用的表名为uni-verify，2.0.0+起改为新表名**
**Before uni-id version 2.0.0, the table name used was uni-verify, and since 2.0.0+ it was changed to a new table name**

该表的前缀不是uni-id，意味着该表的设计用途是通用的，不管是uni-id的手机号验证码，或者支付等关键业务需要验证码，都使用此表。
The prefix of the table is not uni-id, which means that the table is designed for general use. Whether it is the verification code of the mobile phone number of the uni-id, or the verification code required for key businesses such as payment, this table is used.

每条验证信息，都记录在本表中。uni-id不会自动删除本表的历史数据，数据保留有效期需要开发者自行管理，可以在云函数中设置一个定时运行来清理过期数据。
Each piece of verification information is recorded in this form. The uni-id will not automatically delete the historical data of this table. The data retention period needs to be managed by the developer. You can set a timed operation in the cloud function to clear the expired data.

| 字段       | 类型      | 必填 | 描述                                   |
| Fields | Type | Required | Description |
| ---------- | --------- | ---- | -------------------------------------- |
| \_id       | Object ID | 是   | 存储文档 ID（验证码 ID），系统自动生成 |
| \_id | Object ID | Yes | Stores the document ID (verification code ID), which is automatically generated by the system |
| mobile     | String    | 是   | 手机号，和邮箱二选一                 |
| mobile | String | Yes | Mobile phone number or email address |
| email      | String    | 是   | 邮箱，和手机号二选一                  |
| email | String | Yes | Email, or mobile phone number to choose one |
| code       | String    | 是   | 验证码                                 |
| code | String | yes | verification code |
| type       | String   | 是   | 验证类型：login, bind, unbind, pay     |
| type | String | Yes | Authentication type: login, bind, unbind, pay |
| state      | Integer   | 是   | 验证状态：0 未验证 1 已验证 2 已作废    |
| state | Integer | Yes | Validation status: 0 not validated 1 validated 2 voided |
| ip         | String    | 是   | 请求时 IP 地址                         |
| ip | String | Yes | IP address when requesting |
| created_at | Timestamp | 是   | 创建时间                               |
| created_at | Timestamp | yes | created_at |
| expired_at | Timestamp | 是   | 验证码过期时间                         |
| expired_at | Timestamp | Yes | Verification code expiration time |

## 角色表
## role table

表名：`uni-id-roles`
Table name: `uni-id-roles`

| 字段				| 类型			| 必填| 描述																	|
| Fields | Type | Required | Description |
| ----------	| ---------	| ----| --------------------------------------|
| \_id				| Object ID	| 是	| 系统自动生成的Id											|
| \_id | Object ID | Yes | System auto-generated ID |
| role_id			| String		| 是	| 角色唯一标识													|
| role_id | String | Yes | Unique role ID |
| role_name		| String		| 否	| 角色名，展示用												|
| role_name | String | No | Role name, for display |
| permission	| Array			| 是	| 角色拥有的权限列表										|
| permission | Array | yes | list of permissions the role has |
| comment			| String		| 否	| 备注																	|
| comment | String | No | Comment |
| created_date| Timestamp	| 是	| 角色创建时间													|
| created_date| Timestamp | yes | role creation time |

## 权限表
## Permissions table

表名：`uni-id-permissions`
Table name: `uni-id-permissions`

| 字段						| 类型			| 必填| 描述																	|
| Fields | Type | Required | Description |
| ----------			| ---------	| ----| --------------------------------------|
| \_id						| Object ID	| 是	| 系统自动生成的Id											|
| \_id | Object ID | Yes | System auto-generated ID |
| permission_id		| String		| 是	| 权限唯一标识													|
| permission_id | String | Yes | Unique ID of permission |
| permission_name	| String		| 否	| 权限名，展示用												|
| permission_name | String | No | Permission name, for display |
| comment					| String		| 否	| 备注																	|
| comment | String | No | Comment |
| created_date		| Timestamp	| 是	| 权限创建时间													|
| created_date | Timestamp | yes | permission creation time |

## 更多表
## more tables

还有更多uni-id的配套数据表，可以在uniCloud [web控制台](https://unicloud.dcloud.net.cn/)新建表时选择相应模板。此处不再详述，仅罗列清单：
There are more uni-id supporting data tables, you can select the corresponding template when creating a new table in uniCloud [web console](https://unicloud.dcloud.net.cn/). I won't go into details here, just a list:

- 积分表：uni-id-scores
- Score table: uni-id-scores
- 地址信息表：uni-id-address
- Address information table: uni-id-address
- 订单表：uni-id-base-order
- Order table: uni-id-base-order
- 设备表：uni-id-device
- Device table: uni-id-device
- 关注粉丝表：uni-id-followers
- Follow followers table: uni-id-followers
- 日志表：uni-id-log
- log table: uni-id-log
- 任务表：uni-id-task
- Task table: uni-id-task
- 任务日志表：uni-id-task-log
- Task log table: uni-id-task-log

# 错误码@errcode
# Error code @errcode

**自`3.1.1`版本起使用此错误码规范**
**This error code specification is used since version `3.1.1`**

自`3.1.1`版本起uni-id使用errCode作为错误码，errMsg作为错误信息，为兼容旧版本，code、message字段仍保留。
Since the `3.1.1` version, uni-id uses errCode as the error code and errMsg as the error message. For compatibility with older versions, the code and message fields are still reserved.

errCode和errMsg对照表如下：
The comparison table between errCode and errMsg is as follows:

|错误码（errCode）												|详细信息（errMsg）				|说明																																|
|Error Code (errCode) |Detailed Information (errMsg) |Description |
|---																			|---											|---																																|
|0																				|成功											|操作成功																														|
|0 |Success |Operation succeeded |
|uni-id-account-banned										|账号已禁用								|账号已禁用																													|
|uni-id-account-banned |Account Banned |Account Banned |
|uni-id-user-not-exist										|用户不存在								|用户不存在																													|
|uni-id-user-not-exist |User does not exist |User does not exist |
|uni-id-multi-user-matched								|匹配到多个账号						|匹配到多个账号																											|
|uni-id-multi-user-matched |Matched to multiple accounts |Matched to multiple accounts |
|uni-id-user-info-error										|用户信息不正确						|用户信息不正确																											|
|uni-id-user-info-error |Incorrect user information |Incorrect user information |
|uni-id-user-account-conflict							|用户账号冲突							|用户账号冲突（例如同时授权拥有同一个手机号的司机与乘客登录管理端）	|
|uni-id-user-account-conflict |User account conflict |User account conflict (for example, authorizing the driver and passenger with the same mobile phone number to log in to the management terminal at the same time) |
|uni-id-password-error										|密码错误									|密码错误																														|
|uni-id-password-error |Wrong password |Wrong password |
|uni-id-password-error-exceed-limit				|密码错误次数过多					|密码错误次数过多																										|
|uni-id-password-error-exceed-limit |Too many password errors |Too many password errors |
|uni-id-account-exists					|此{type}已注册						|此账号已注册、包括手机号、微信等																		|
|uni-id-account-exists |This {type} is registered |This account is registered, including mobile phone number, WeChat, etc. |
|uni-id-account-not-exists							|此{type}尚未注册					|此账号尚未注册、包括手机号、微信等																	|
|uni-id-account-not-exists |This {type} has not been registered |This account has not been registered, including mobile phone number, WeChat, etc. |
|uni-id-invalid-invite-code								|邀请码无效								|邀请码无效																													|
|uni-id-invalid-invite-code |Invite code is invalid |Invite code is invalid |
|uni-id-get-third-party-account-failed		|获取{account}失败				|获取三方平台账号失败																								|
|uni-id-get-third-party-account-failed |Failed to get {account} |Failed to get third-party platform account |
|uni-id-param-required										|{param}不可为空					|字段不可为空																												|
|uni-id-param-required |{param} is not nullable |Field is not nullable |
|uni-id-check-device-feature-failed				|设备特征校验未通过				|设备特征校验未通过																									|
|uni-id-check-device-feature-failed |Device feature check failed |Device feature check failed |
|uni-id-token-not-exist										|云端已不包含此token			|云端已不包含此token																								|
|uni-id-token-not-exist |Cloud does not contain this token |Cloud does not contain this token |
|uni-id-token-expired											|token已过期							|token已过期																												|
|uni-id-token-expired |token expired |token expired |
|uni-id-check-token-failed								|token校验未通过					|token校验未通过																										|
|uni-id-check-token-failed |token verification failed |token verification failed |
|uni-id-invalid-old-password							|旧密码错误								|旧密码错误																													|
|uni-id-invalid-old-password |Incorrect old password |Incorrect old password |
|uni-id-param-error												|{param}参数错误，{reason}|参数错误																														|
|uni-id-param-error |{param} parameter error, {reason}|parameter error |
|uni-id-invalid-verify-code								|验证码错误或已失效				|验证码错误或已失效																									|
|uni-id-invalid-verify-code |The verification code is wrong or invalid |The verification code is wrong or invalid |
|uni-id-send-sms-code-failed							|验证码发送失败						|验证码发送失败																											|
|uni-id-send-sms-code-failed |Verification code sending failed |Verification code sending failed |
|uni-id-account-bound							|此{type}已绑定						|此账号已绑定，包括手机号、微信等																		|
|uni-id-account-bound |This {type} is bound |This account is bound, including mobile phone number, WeChat, etc. |
|uni-id-unbind-failed											|解绑失败									|解绑失败																														|
|uni-id-unbind-failed |Unbind failed |Unbind failed |
|uni-id-set-invite-code-failed						|邀请码设置失败						|邀请码设置失败																											|
|uni-id-set-invite-code-failed |Invite code setting failed |Invite code setting failed |
|uni-id-modify-invite-code-is-not-allowed	|邀请码不可修改						|邀请码不可修改																											|
|uni-id-modify-invite-code-is-not-allowed |Invite code cannot be modified |Invite code cannot be modified |
|uni-id-database-operation-failed					|数据库读写异常						|数据库读写异常																											|
|uni-id-database-operation-failed |Database read/write exception |Database read/write exception |
|uni-id-role-not-exist										|角色不存在								|角色不存在																													|
|uni-id-role-not-exist |role does not exist |role does not exist |
|uni-id-permission-not-exist							|权限不存在								|权限不存在																													|
|uni-id-permission-not-exist |Permission does not exist |Permission does not exist |

**自`1.1.0`版本使用此错误码规范**
**Use this error code specification since `1.1.0`**

|模块											|模块码	|错误代码	|错误信息																									|
|Module |Module Code |Error Code |Error Message |
|:-:											|:-:		|:-:			|:-:																											|
|`登录通用模块`							|100		|01				|（10001）账号已禁用																								|
|`Login Common Module` |100 |01 |(10001) Account Disabled |
|账号、邮箱、手机+密码登录|101		|01				|（10101）用户不存在																								|
|Account, Email, Mobile + Password Login|101 |01 |（10101）User does not exist |
|													|				|02				|（10102）密码错误																									|
| | |02 | (10102) Bad password |
|													|				|03				|（10103）密码错误次数过多																					|
| | |03 | (10103) Too many incorrect passwords |
|手机号验证码登录/注册		|102		|01				|（10201）手机号已存在（传入type='register'且手机号已注册时触发）	|
|Mobile phone number verification code login/registration |102 |01 | (10201) The mobile phone number already exists (triggered when type='register' is passed in and the mobile phone number is registered) |
|													|102		|02				|（10202）此手机号尚未注册（传入type='login'且手机号未注册时触发）	|
| |102 |02 | (10202) This phone number has not been registered (triggered when type='login' is passed in and the phone number is not registered) |
|													|102		|03				|（10203）邀请码无效（邀请码存在且唯一时才算有效）									|
| |102 |03 |(10203) The invitation code is invalid (the invitation code is valid only when it exists and is unique) |
|邮箱验证码登录/注册			|103		|01				|（10301）此邮箱已注册（传入type='register'且邮箱已注册时触发）		|
|Email Verification Code Login/Register |103 |01 |(10301) This mailbox is already registered (triggered when type='register' is passed in and the mailbox is registered) |
|													|103		|02				|（10302）此邮箱尚未注册（传入type='login'且邮箱未注册时触发）			|
| |103 |02 |(10302) This mailbox has not been registered (triggered when type='login' is passed in and the mailbox is not registered) |
|微信登录/注册						|104		|01				|（10401）获取openid失败																						|
|WeChat login/registration |104 |01 | (10401) Failed to get openid |
|支付宝登录/注册					|105		|01				|（10501）获取openid失败																						|
|Alipay login/registration |105 |01 | (10501) Failed to get openid |
|一键登录/注册					|106		|01				|（10601）手机号已存在（传入type='register'且手机号已注册时触发）								|
|One-click login/registration |106 |01 | (10601) The mobile phone number already exists (triggered when type='register' is passed in and the mobile phone number is registered) |
|					    |106		|02				|（10602）此手机号尚未注册（传入type='login'且手机号未注册时触发）																						|
| |106 |02 |(10602) This phone number has not been registered (triggered when type='login' is passed in and the phone number is not registered) |
|Apple登录/注册					|107		|01				|（10701）获取用户唯一标识符失败																						|
|Apple Sign In/Sign Up |107 |01|(10701) Failed to get User Unique Identifier|
|					    |107		|02				|（10702）bundleId校验失败，请确认配置后重试																						|
| |107 |02 |（10702）BundleId verification failed, please confirm the configuration and try again |
|					    |107		|03				|（10703）此账户已注册																						|
| |107 |03 | (10703) This account is already registered |
|					    |107		|04				|（10704）此账户尚未注册																						|
| |107 |04 | (10704) This account has not been registered |
|					    |107		|05				|（10705）identityToken校验失败																						|
| |107 |05 |（10705）identityToken verification failed |
|					    |107		|06				|（10706）签发机构检验失败																						|
| |107 |06 | (10706) Issuer inspection failed |
|`注册通用模块`							|200		|-				|-																												|
|`Register Common Module` |200 |- |- |
|账号、邮箱、手机+密码注册|201		|01				|（20101）用户名、邮箱、手机号必填一项															|
|Account, Email, Mobile + Password Registration|201 |01 |（20101）Username, Email, Mobile Number Required |
|													|				|02				|（20102）用户名、邮箱、手机号冲突																	|
| | |02 |（20102）User name, email, mobile phone number conflict |
|`Token类`									|300		|-				|-																												|
|`TokenType` |300 |- |- |
|生成Token								|301		|-				|-																												|
|Generate Token |301 |- |- |
|验证Token								|302		|01				|（30201）设备特征校验未通过																				|
|Verify Token |302 |01 |(30201) Device feature verification failed |
|													|				|02				|（30202）云端已不包含此token																			|
| | |02 | (30202) This token is not included in the cloud |
|													|				|03				|（30203）token已过期																							|
| | |03 | (30203) token expired |
|													|				|04				|（30204）token校验未通过																					|
| | |04 |（30204）Token verification failed |
|`账号安全类`								|400		|-				|-																												|
|`Account security class` |400 |- |- |
|登出											|401		|-				|-																												|
|Logout |401 |- |- |
|修改密码									|402		|01				|（40201）用户不存在																								|
|Change password |402 |01 |(40201) User does not exist |
|													|				|02				|（40202）旧密码错误																								|
| | |02 | (40202) Bad old password |
|重置密码									|403		|-				|-																												|
|Reset Password |403 |- |- |
|`验证类`										|500		|-				|-																												|
|`Authentication class` |500 |- |- |
|设置验证码								|501		|01				|（50101）参数错误																									|
|Set verification code |501 |01 |(50101) parameter error |
|校验验证码								|502		|01				|（50201）参数错误																									|
|Verification code |502 |01 |（50201）Parameter error |
|													|				|02				|（50202）验证码错误或已失效																				|
| | |02 | (50202) The verification code is incorrect or invalid |
|发送短信验证码						|503		|01				|（50301）验证码发送失败，一般message内有描述											|
|Send SMS verification code |503 |01 |(50301) The verification code failed to be sent, the general message has a description |
|`绑定账号`									|600		|-				|-																												|
|`Bind account` |600 |- |- |
|绑定手机号								|601		|01				|（60101）此手机号已被绑定																					|
|Binding mobile phone number |601 |01 |（60101）This mobile phone number has been bound |
|绑定邮箱									|602		|01				|（60201）此邮箱已被绑定																						|
|Binding Email |602 |01 |（60201）This Email has been bound |
|绑定微信									|603		|01				|（60301）获取openid失败																						|
|Bind WeChat |603 |01 |(60301) Failed to get openid |
|													|				|02				|（60302）此账号已被绑定																						|
| | |02 |（60302）This account has been bound |
|绑定支付宝								|604		|01				|（60401）获取openid失败																						|
|Bind Alipay |604 |01 |(60401) Failed to get openid |
|													|				|02				|（60402）此账号已被绑定																						|
| | |02 |（60402）This account has been bound |
|`解绑账号`									|700		|-				|-																												|
|`Unbind account` |700 |- |- |
|解绑手机号								|701		|01				|（70101）解绑失败，可能已经解绑或者账号不匹配											|
|Unbind mobile phone number |701 |01 |(70101) Unbind failed, it may have been unbind or the account number does not match |
|解绑邮箱									|702		|01				|（70201）解绑失败，可能已经解绑或者账号不匹配											|
|Unbind mailbox |702 |01 |(70201) Unbind failed, it may have been unbind or the account number does not match |
|解绑微信									|703		|01				|（70301）解绑失败，可能已经解绑																		|
|Unbind WeChat |703 |01 |(70301) Unbind failed, may have been unbind |
|解绑支付宝								|704		|01				|（70401）解绑失败，可能已经解绑																		|
|Unbind Alipay |704 |01 |（70401）Unbind failed, may have been unbind |
|`基础功能`									|800		|-				|-																												|
|`Basic function` |800 |- |- |
|更新用户信息							|801		|01				|（80101）参数错误																									|
|Update User Information |801 |01 |(80101) Parameter Error |
|设置头像									|802		|-				|-																												|
|Set Avatar |802 |- |- |
|获取用户信息							|803		|01				|（80301）未查询到用户信息																					|
|Get user information |803 |01 |（80301）No user information found |
|传入token获取用户信息			|808		|01				|（80801）未查询到用户信息																					|
|Pass in token to get user information |808 |01 |(80801) User information not found |
|设置用户自己的邀请码			|804		|01				|（80401）邀请码设置失败，验证码重复或自动设置重试多次依然重复			|
|Set the user's own invitation code |804 |01 |(80401) The invitation code setting failed, the verification code is repeated or the automatic setting has been retried for many times and it is still repeated |
|													|				|02				|（80402）邀请码重试多次依然重复																		|
| | |02 |（80402）The invitation code is repeated after repeated attempts |
|填写邀请人邀请码					|805		|01				|（80501）邀请码无效（邀请码存在且唯一时才算有效）									|
|Fill in the inviter's invitation code |805 |01 |(80501) The invitation code is invalid (the invitation code is valid only when it exists and is unique) |
|													|				|02				|（80502）uid错误，用户不存在																			|
| | |02 | (80502) uid error, user does not exist |
|													|				|03				|（80503）邀请码不可修改																						|
| | |03 |（80503）Invitation code cannot be modified |
|获取微信openid						|806		|01				|（80601）未能获取openid																						|
|Get WeChat openid |806 |01 | (80601) failed to get openid |
|													|				|02				|（80602）调用获取openid接口失败																		|
| | |02 | (80602) Failed to call to get openid interface |
|获取支付宝openid					|807		|01				|（80701）未能获取openid																						|
|Get Alipay openid |807 |01 | (80701) Failed to get openid |
|													|				|02				|（80702）调用获取openid接口失败																		|
| | |02 | (80702) Failed to call to get openid interface |
|解密微信encryptedData		|808		|01				|（80801）sessionKey获取失败																						|
|Decrypt WeChat encryptedData |808 |01 | (80801) sessionKey acquisition failed |
|													|				|02				|（80802）解密失败																		|
| | |02 | (80802) Decryption failed |
|													|				|03				|（80803）appid不匹配（[watermark](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95)敏感数据归属appid与config.json中appid不匹配）|
| | |03 | (80803) appid mismatch ([watermark](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5 %AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) Sensitive data belongs to appid and config.json appid mismatch)|
|													|				|04				|（80804）code或sessionKey必须有其中一个																		|
| | |04 | (80804) code or sessionKey must have either |
|													|				|05				|（80805）encryptedData不可为空																		|
| | |05 | (80805) encryptedData cannot be null|
|													|				|06				|（80806）iv不可为空																		        |
| | |06 | (80806) iv cannot be null|
|`公用码`										|900		|01				|（90001）数据库读写异常																						|
|`Public code` |900 |01 |（90001）Database read and write exception |

**另外还有一些字符串类型的扩展错误码在各自接口的文档中展示，请不要直接使用`code>0`这种方式来判断是否有错误，建议使用`if(code){}`来判断是否有错误**
**In addition, there are some extended error codes of string type shown in the documentation of their respective interfaces. Please do not use `code>0` directly to judge whether there is an error. It is recommended to use `if(code){}` to Determine if there is an error**


# 其他功能
# Other functions

## 裂变@fission
## fission @fission

自`1.1.2`版本起uni-id支持裂变功能，目前仅适用手机号+验证码方式注册可以填写邀请码（inviteCode）接受邀请。裂变相关API请参考[裂变API](uniCloud/uni-id.md?id=fission-api)
Since the `1.1.2` version, uni-id supports the fission function. Currently, it is only applicable to mobile phone number + verification code registration. You can fill in the invitation code (inviteCode) to accept the invitation. For fission related APIs, please refer to [Fission API](uniCloud/uni-id.md?id=fission-api)

在`config.json`内配置了`autoSetInviteCode: true`则在用户注册时会自动给设置不重复的6位邀请码，如果不希望使用自动设置的邀请码可以自行传入`myInviteCode`参数来设置邀请码，需要注意的是要保证邀请码唯一。
If `autoSetInviteCode: true` is configured in `config.json`, a unique 6-digit invitation code will be automatically set when the user registers. If you do not want to use the automatically set invitation code, you can pass in the `myInviteCode` parameter to set it. Invitation code, it should be noted that the invitation code must be unique.

在`config.json`内配置了`forceInviteCode: true`则只有使用邀请码才可以注册（仅手机号+验证码注册方式支持）。
If `forceInviteCode: true` is configured in `config.json`, you can only register with an invitation code (only mobile phone number + verification code registration method is supported).

针对之前使用了旧版本（不支持裂变）的uni-id，现在想增加裂变功能，可以调用`setUserInviteCode`接口给已注册用户设置邀请码，在设置之前可以使用`my_invite_code不存在`作为条件查询所有需要设置的用户。
For the uni-id that used the old version (does not support fission), and now want to add the fission function, you can call the `setUserInviteCode` interface to set the invitation code for the registered user. Before setting, you can use `my_invite_code does not exist` as a condition to query all User that needs to be set.

如果希望用户注册完成之后再填写邀请人的邀请码，可以调用`acceptInvite`接口来使用户接受邀请。
If you want to fill in the inviter's invitation code after the user is registered, you can call the `acceptInvite` interface to make the user accept the invitation.

`getInvitedUser`接口可以用于获取接受邀请的用户列表，其中level参数可以用来设置要获取哪一级的邀请用户，不填写level参数则默认获取第一级。
The `getInvitedUser` interface can be used to obtain the list of users who have accepted the invitation. The level parameter can be used to set which level of invited users to obtain. If the level parameter is not filled in, the first level will be obtained by default.

如果想详细的体验一下裂变流程，可以在插件市场导入[前后一体登录模板](https://ext.dcloud.net.cn/plugin?id=13)，此项目内已有邀请用户注册示例，流程如下
If you want to experience the fission process in detail, you can import the [front and back integrated login template](https://ext.dcloud.net.cn/plugin?id=13) in the plugin market. There is an example of inviting users to register in this project. The process is as follows

**分享邀请码/邀请链接**
**Share Invitation Code/Invitation Link**

<img width="375" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/1b181d40-e377-11ea-b680-7980c8a877b8.jpeg" />


**受邀者注册**
**Invite Registration**

<img width="375" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/1b12c610-e377-11ea-b997-9918a5dda011.jpeg" />


## 修改passwordSecret@modifysecret
## modify passwordSecret@modifysecret

> `注意：通常情况下设定好passwordSecret之后不需要再进行修改，使用此功能时请务必小心谨慎`
> `Note: Usually, you do not need to modify the passwordSecret after setting it. Please be careful when using this function`

**说明**
**illustrate**

在config.json内修改passwordSecret会导致历史用户无法通过密码登录。但是某些情况下有些应用有修改passwordSecret的需求，例如刚开始使用uni-id时没有自定义passwordSecret，后续需要修改，此时可以使用uni-id 2.0.1版本新增的修改passwordSecret功能。（注意：2.0.1版本验证码表名调整为了`opendb-verify-codes`）
Modifying passwordSecret in config.json will prevent historical users from logging in with passwords. However, in some cases, some applications need to modify the passwordSecret. For example, when the uni-id is first used, the passwordSecret is not customized. It needs to be modified later. In this case, you can use the new passwordSecret modification function of the uni-id version 2.0.1. (Note: The name of the verification code table in version 2.0.1 has been adjusted to `opendb-verify-codes`)

**如何使用**
**how to use**

下面以将passwordSecret从`passwordSecret-demo`修改为`qwertyasdfgh`为例介绍如何使用
The following is an example of how to modify passwordSecret from `passwordSecret-demo` to `qwertyasdfgh`

```json
// 旧config.json
// old config.json
{
  "passwordSecret": "passwordSecret-demo"
}

// 新config.json
// new config.json
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
If you modify the passwordSecret to `1q2w3e4r5t` on the basis of the above, config.json is adjusted as follows

> !!!注意只有在数据库内完全没有使用某个版本（`password_secret_version`字段表示了用户密钥版本）密钥的用户才可以将此密钥从config.json内去除。没有`password_secret_version`的用户使用的是最旧版本的passwordSecret，如果存在这样的用户对应的passwordSecret也不可去除。
> !!! Note that only users who are not using a key of a certain version (the `password_secret_version` field indicates the user's secret version) in the database can remove this key from config.json. Users who do not have `password_secret_version` use the oldest version of the passwordSecret. If there is such a user, the corresponding passwordSecret cannot be removed.

```json
// 新config.json，
// new config.json,
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
**principle**

uni-id-users表内存储的password字段为使用hmac-sha1生成的hash值，此值不可逆向推出用户真实密码。所以直接修改passwordSecret会导致老用户无法使用密码登录。
The password field stored in the uni-id-users table is a hash value generated by using hmac-sha1, which irreversibly deduces the user's real password. Therefore, directly modifying the passwordSecret will cause the old user to be unable to log in with the password.

上述修改通过密钥版本号区分新旧密钥，用户登录时如果密钥版本小于当前最新版本，会为用户更新数据库内存储的password字段，并记录当前使用的密钥版本。
The above modification distinguishes the old and new keys by the key version number. When the user logs in, if the key version is smaller than the current latest version, the password field stored in the database will be updated for the user, and the currently used key version will be recorded.

用户对应的数据库记录内没有密钥版本的话会使用最低版本密钥进行密码校验，校验通过后为用户更新为最新版密钥对应的password并记录版本号。
If there is no key version in the database record corresponding to the user, the lowest version key will be used for password verification. After the verification is passed, the user will be updated to the password corresponding to the latest version key and the version number will be recorded.

由于是不可逆加密，理论上passwordSecret泄露不会造成用户的真实密码被泄露，自定义passwordSecret只是进一步加强安全性。
Since it is irreversible encryption, in theory, the leakage of passwordSecret will not cause the user's real password to be leaked. Customizing passwordSecret only further enhances security.

## 缓存角色权限@cache-permission-in-token
## Cache role permission @cache-permission-in-token

自`uni-id 3.0.0`起，支持在token内缓存用户的角色权限，默认开启此功能，各登录接口的needPermission参数不再生效。如需关闭请在config内配置`"removePermissionAndRoleFromToken": true`。
Since `uni-id 3.0.0`, the user's role permissions can be cached in the token. This function is enabled by default, and the needPermission parameter of each login interface no longer takes effect. To disable it, configure `"removePermissionAndRoleFromToken": true` in config.

为什么要缓存角色权限？要知道云数据库是按照读写次数来收取费用的，并且读写数据库会拖慢接口响应速度。未配置`"removePermissionAndRoleFromToken": true`的情况下，可以在调用checkToken接口时不查询数据库获取用户角色权限。
Why cache role permissions? You must know that ApsaraDB charges fees based on the number of reads and writes, and reading and writing to the database will slow down the response speed of the interface. If `"removePermissionAndRoleFromToken": true` is not configured, you can obtain user role permissions without querying the database when calling the checkToken interface.

详细checkToken流程如下：
The detailed checkToken process is as follows:

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/ed45d350-5a4d-11eb-b997-9918a5dda011.jpg)

可以看出，旧版token（removePermissionAndRoleFromToken为true时生成的）在checkToken时如需返回权限需要进行两次数据库查询。新版token不需要查库即可返回权限信息。
It can be seen that the old version of the token (generated when removePermissionAndRoleFromToken is true) needs to perform two database queries to return the permission during checkToken. The new version of the token can return permission information without checking the database.

**注意**
**Notice**

- 由于角色权限缓存在token内，可能会存在权限已经更新但是用户token未过期之前依然是旧版角色权限的情况。可以调短一些token过期时间来减少这种情况的影响。
- Since the role permissions are cached in the token, there may be cases where the permissions have been updated but the user token is still the old version of the role permissions before it expires. The token expiration time can be shortened to reduce the impact of this situation.
- admin角色token内不包含permission，如需自行判断用户是否有某个权限，要注意admin角色需要额外判断一下，写法如下
- The admin role token does not contain permission. If you need to determine whether the user has a certain permission, you should pay attention to the admin role that needs to be judged additionally. The writing method is as follows
  ```js
  const {
    role,
    permission
  } = await uniID.checkToken(event.uniIdToken)
  if(role.includes('admin') || permission.includes('your permission id')) {
    // 当前角色拥有'your permission id'对应的权限
    // The current role has the permission corresponding to 'your permission id'
  }
  ```

## 自定义token内容@custom-token
## Custom token content @custom-token

> uni-id 3.0.7及以上版本，且需要使用[uni-config-center](https://ext.dcloud.net.cn/plugin?id=4425)
> uni-id 3.0.7 and above, and need to use [uni-config-center](https://ext.dcloud.net.cn/plugin?id=4425)

自`uni-id 3.0.0`起，支持在token内缓存用户的角色权限。但是某些情况下开发者可能还希望缓存一些别的东西，以便在客户端能方便的访问（**注意：不可缓存机密信息到token内**）。
Since `uni-id 3.0.0`, it is supported to cache the user's role permissions within the token. But in some cases developers may also want to cache some other things for easy access on the client side (**Note: do not cache confidential information in the token**).

**用法**
**usage**

在`uni-config-center`模块内的uni-id插件内创建`custom-token.js`内容如下：
Create `custom-token.js` in the uni-id plugin in the `uni-config-center` module with the following content:

```js
module.exports = async (tokenObj) => { 
  // tokenObj为原始token信息结构如下
  // {
  //   uid: 'abc', // 用户id
  // uid: 'abc', // user id
  //   role: [], // 用户角色列表
  // role: [], // list of user roles
  //   permission: [] // 用户权限列表，admin角色的用户权限列表为空数组
  // }
  
  tokenObj.customField = 'hello custom token' // 自定义token字段
  return tokenObj // 注意务必返回修改后的token对象
}
```

uni-id会自动加载custom-token.js进行处理，在所有生成token的操作（包括：登录、注册、token过期自动刷新、开发者自行调用createToken）执行时自动获取新token信息，并生成token。
uni-id will automatically load custom-token.js for processing, and automatically obtain new token information and generate tokens when all token-generating operations (including: login, registration, automatic token refresh after token expiration, and developers calling createToken by themselves) are executed.

**注意**
**Notice**

- 使用custom-token时自行调用createToken接口会变为异步操作，需使用`await uniID.createToken(...)`
- When using custom-token, calling the createToken interface by yourself will become an asynchronous operation, you need to use `await uniID.createToken(...)`
- 不要删除原始token内的字段
- don't delete the fields inside the original token

## 自定义国际化语言@custom-i8n
## custom internationalization language @custom-i8n

> 新增于uni-id 3.3.10，此功能依赖于[uni-config-center]
> Added in uni-id 3.3.10, this feature depends on [uni-config-center]

完整词句列表参考：[uni-id中文语言包](https://gitee.com/dcloud/uni-id/blob/v3.3.21/src/lang/zh-Hans.js)
For a complete list of words and sentences: [uni-id Chinese language pack](https://gitee.com/dcloud/uni-id/blob/v3.3.21/src/lang/zh-Hans.js)

**用法**
**usage**

在`cloudfunctions/common/uni-config-center/uni-id/lang/`目录下创建`index.js`，内容示例如下：
Create `index.js` in the `cloudfunctions/common/uni-config-center/uni-id/lang/` directory, the content example is as follows:

```js
module.exports = {
	'zh-hant': { // 语言代码
		'alipay': '支付寶'
	}
}
```

uni-id会自动进行语言匹配，无需额外配置
uni-id will automatically perform language matching without additional configuration

## 隔离不同端用户@isolate-user
## Isolate different end users @isolate-user

一个完整的项目，通常需要客户端、管理端等，但是不同端的用户在同一服务空间下使用uni-id会比较难处理。比如不同端需要不同的配置文件、登录接口需要开发者自行隔离开。自`uni-id 3.3.0`起，支持对不同端用户进行隔离，此功能在此版本是直接开启的。
A complete project usually requires a client, a management end, etc., but it is difficult for users on different ends to use uni-id in the same service space. For example, different terminals require different configuration files, and the login interface needs to be isolated by the developer. Since `uni-id 3.3.0`, the isolation of different end users is supported, and this function is directly enabled in this version.

uni-id 3.3.0版本起用户注册时会自动在用户表的记录内标记为注册端用户，如果没有授权登录其他端的话是不可以在其他端登录的
Since uni-id version 3.3.0, when a user registers, it will be automatically marked as a registered user in the record of the user table. If you are not authorized to log in to the other end, you cannot log in to the other end.

如何授权登录其他端请参考：[授权、禁止用户在特定客户端登录](uniCloud/uni-id?id=authorize-app)
For how to authorize login to other clients, please refer to: [Authorize, prohibit users from logging in on specific clients](uniCloud/uni-id?id=authorize-app)

需要注意的是客户端APPID信息是由端上传上来的，并非完全可信，尽量在入口处进行校验。例：
It should be noted that the client APPID information is uploaded from the end, and is not completely trusted. Try to verify it at the entrance. example:

```js
exports.main = async function(event, context){
  if(context.APPID !== '__UNI__xxx1') {
    throw new Error('应用ID非法')
  }
}
```

**DCloud Appid是一个很重要的配置，如无必要请勿随意更换。**
**DCloud Appid is a very important configuration, please do not change it if it is not necessary. **

> 不同端用户数据通过用户表的dcloud_appid字段隔离，同一个手机号、微信号也可以同时注册管理端和用户端，绑定账号同理。
> The user data of different terminals is isolated by the dcloud_appid field of the user table. The same mobile phone number and WeChat account can also register the management terminal and the user terminal at the same time, and the same is true for binding accounts.

**注意**
**Notice**

- uni-id会自动在用户表每条用户记录插入`dcloud_appid`字段（此字段是一个数组，标识此用户可以在哪些端登录）。
- uni-id will automatically insert the `dcloud_appid` field into each user record in the user table (this field is an array, which identifies which end this user can log in).
- 为兼容旧版本，针对没有dcloud_appid字段的用户，允许登录任意端。
- For compatibility with older versions, users without the dcloud_appid field are allowed to log in to any terminal.
- 如果用户数据库记录中`dcloud_appid`字段是一个空数组，表示当前用户不能在任何客户端登录
- If the `dcloud_appid` field in the user database record is an empty array, it means the current user cannot log in on any client
- 已有dcloud_appid的用户，如果使用相同的用户标识（用户名、邮箱、手机、微信等）+ 不同的DCloud Appid登录会被判定为不同的用户，如果此时数据库没有对应的记录，会报用户不存在的错误
- For users who already have dcloud_appid, if they use the same user ID (username, email, mobile phone, WeChat, etc.) + different DCloud Appid to log in, they will be judged as different users. If there is no corresponding record in the database at this time, the user will be reported to the user. nonexistent error

## 隔离不同端配置@isolate-config
## Isolate different side configurations @isolate-config

> `uni-id 3.3.0`及以上版本
> `uni-id 3.3.0` and above

uni-id的config.json支持配置为数组，每项都是一个完整的配置，对不同的配置使用`dcloudAppid`字段进行区分（**此字段与项目内的manifest.json里面的DCloud AppId一致**），uni-id会自动根据客户端的appid来判断该使用哪套配置。如果使用云函数url化请参考：[云函数Url化时使用](uniCloud/uni-id?id=url)
The config.json of uni-id supports the configuration as an array, and each item is a complete configuration. Use the `dcloudAppid` field to distinguish different configurations (**This field is consistent with the DCloud AppId in the manifest.json in the project* *), uni-id will automatically determine which configuration to use based on the client's appid. If you use cloud function urlization, please refer to: [Use when cloud function Urlization](uniCloud/uni-id?id=url)

需要注意的是客户端APPID信息是由端上传上来的，并非完全可信，尽量在入口处进行校验。例：
It should be noted that the client APPID information is uploaded from the end, and is not completely trusted. Try to verify it at the entrance. example:

```js
exports.main = async function(event, context){
  if(context.APPID !== '__UNI__xxx1') {
    throw new Error('应用ID非法')
  }
}
```

**示例**
**Example**

> 数组每一项都是一个完整的配置文件，全部选项请参考：[uni-id 配置](uniCloud/uni-id?id=config)
> Each item in the array is a complete configuration file. For all options, please refer to: [uni-id configuration](uniCloud/uni-id?id=config)

**注意：如果允许同一账号在不同端使用相同的账号+密码登录需要将不同端的passwordSecret设置成一样的**
**Note: If the same account is allowed to log in with the same account + password on different sides, you need to set the passwordSecret on different sides to the same**

```js
[{
  "dcloudAppid": "__UNI__xxxx1", // 务必替换为对应项目manifest.json内的DCloud Appid
  "isDefaultConfig": true, // 默认配置标记，未匹配到dcloudAppid的情况下使用默认配置
  "passwordSecret": "passwordSecret-demo",
  "tokenSecret": "tokenSecret-demo",
  "tokenExpiresIn": 7200,
  "tokenExpiresThreshold": 600,
  "app": {
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

## 云函数Url化时使用@url
## Use @url when Urlizing cloud functions

云函数url化时uni-id无法自行获取客户端相关信息，需要开发者自行创建uniID实例并传入相关信息，以下为一个简单示例
When the cloud function is urlized, the uni-id cannot obtain the relevant information of the client by itself. The developer needs to create a uniID instance and pass in the relevant information. The following is a simple example

**注意：实际业务中务必验证一下前端传来的数据的合法性，APPID、PLATFORM等均来自前端**
**Note: In actual business, be sure to verify the legitimacy of the data sent from the front-end, APPID, PLATFORM, etc. are all from the front-end**

```js
// 客户端代码示例
// client code example
uni.request({
  url: 'https://xxx.xxx/xxx?appid=your_appid&platform=your_platform&deviceId=your_deviceId'
})

// 云函数代码示例
// cloud function code example
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
  // uniIDIns.login() uses uniIDIns to call uni-id related interfaces
}
```


# 迁移指南@migration
# Migration guide @migration

## 自1.x.x版本升级到2.x.x@m1to2
## Upgrade from 1.x.x to 2.x.x@m1to2

自2.0.0版本起uni-id调整了验证码表名（这个调整导致了与旧版不兼容），如果要使用2.0.0以上版本需要在数据库中创建opendb-verify-code表（建议直接选择opendb内uni-id下的opendb-verify-code表，会自动创建索引以及表结构）
Since version 2.0.0, uni-id has adjusted the name of the verification code table (this adjustment caused incompatibility with the old version). If you want to use version 2.0.0 or later, you need to create an opendb-verify-code table in the database (it is recommended to directly select opendb The opendb-verify-code table under the internal uni-id will automatically create indexes and table structures)

## 自2.x.x版本升级到3.x.x@m2to3
## Upgrade from 2.x.x to 3.x.x@m2to3

3.0.0版本起uni-id默认将缓存用户角色权限到token内，关于缓存角色权限的说明请参考：[缓存角色权限](uniCloud/uni-id?id=cache-permission-in-token)。从2.x.x版本升级到3.x.x版本需要根据自己需求分别处理。
Since version 3.0.0, uni-id will cache user role permissions in the token by default. For the description of cache role permissions, please refer to: [Cache role permissions](uniCloud/uni-id?id=cache-permission-in-token). Upgrading from version 2.x.x to version 3.x.x needs to be handled separately according to your own needs.

- 如果不希望缓存角色权限到token内，需要在config.json内配置`"removePermissionAndRoleFromToken": true`。
- If you do not want to cache role permissions in the token, you need to configure `"removePermissionAndRoleFromToken": true` in config.json.
- 如果希望升级为缓存角色权限到token内的方案，可以按照以下步骤迁移
- If you want to upgrade to a scheme that caches role permissions in the token, you can follow the steps below to migrate
  + 各登录接口的needPermission参数不再生效，checkToken校验新token时总是返回角色权限
  + The needPermission parameter of each login interface is no longer valid, and checkToken always returns the role permission when verifying the new token
  + 所有注册用户行为均支持传入角色（role）字段，指定创建用户的角色（需要使用3.0.2及以上版本，此前只有uniID.register接口支持）。由于需要初始生成的token内带有角色权限，所以推荐在注册时就给用户设置好角色。
  + All registered user behaviors support the incoming role (role) field to specify the role to create the user (requires 3.0.2 and above, previously only supported by the uniID.register interface). Since the initially generated token needs to have role permissions, it is recommended to set a role for the user during registration.

#### uniCloud admin升级uni-id@m2to3-uni-admin
#### uniCloud admin upgrade uni-id@m2to3-uni-admin

uniCloud admin可以平滑升级到uni-id 3.0.0。如果要缓存角色权限到token内（uni-id 3.0.0的默认行为），那还有几点可以优化。详细调整如下
uniCloud admin can be smoothly upgraded to uni-id 3.0.0. If you want to cache role permissions in the token (the default behavior of uni-id 3.0.0), there are a few more optimizations. Detailed adjustments are as follows

1. `uniCloud-aliyun\cloudfunctions\uni-admin\middleware\auth.js`

  auth中间件内可以调整为checkToken时不再获取用户信息，这样auth中间件就无需进行数据库查询，可以加速接口响应
  The auth middleware can be adjusted to no longer obtain user information when checkToken is used, so that the auth middleware does not need to perform database query, which can speed up the interface response

2. `uniCloud-aliyun\cloudfunctions\uni-admin\controller\app.js`

  受第一步影响app/init内无法获取用户信息，可以额外调用uniID的getUserInfo获取
  Affected by the first step, user information cannot be obtained in app/init. You can additionally call getUserInfo of uniID to obtain it.

可以参考此次提交进行调整：[uniCloud admin](https://github.com/dcloudio/uniCloud-admin/commit/8359d699aacb8f7d074fce9aa82a36474cb6e7df)
You can refer to this submission for adjustment: [uniCloud admin](https://github.com/dcloudio/uniCloud-admin/commit/8359d699aacb8f7d074fce9aa82a36474cb6e7df)

#### 使用uni-config-center@uni-config-center
#### use uni-config-center@uni-config-center

> uni-id 3.0.7及以上版本
> uni-id 3.0.7 and above

从插件市场导入支持uni_modules的uni-id，会自动安装依赖的uni-config-center到uni_modules内。如果此前并没有使用uni-config-center可以直接将uni-id的config.json移至`uni-config-center/uni-id/config.json`即可（可以参照插件市场的uni-id示例项目）
Importing a uni-id that supports uni_modules from the plugin market will automatically install the dependent uni-config-center into uni_modules. If you have not used uni-config-center before, you can directly move the config.json of uni-id to `uni-config-center/uni-id/config.json` (refer to the uni-id example project in the plugin market )

- uni-id会优先使用uni-config-center内添加的配置
- uni-id will give priority to the configuration added in uni-config-center
- 如果批量上传后报“请在公用模块uni-id的config.json或init方法中内添加配置项”，请重新上传一次`uni-id`
- If the message "Please add configuration items to the config.json or init method of the uni-id of the common module" is reported after batch uploading, please re-upload the `uni-id`

**uni-id配置优先级**
**uni-id configuration priority**

1. `uniID.init`、`uniID.createInstance`传入的配置（此配置不会对clientDB依赖的uni-id生效，不推荐使用）
1. The configuration passed in `uniID.init`, `uniID.createInstance` (this configuration will not take effect on the uni-id that clientDB depends on, it is not recommended)
2. uni-config-center内配置的`uni-id/config.json`（推荐使用的配置方式）
2. `uni-id/config.json` configured in uni-config-center (recommended configuration method)
3. uni-id插件下配置的config.json（已不推荐使用的配置方式）
3. config.json configured under the uni-id plugin (deprecated configuration method)

以上三个配置不会进行合并，优先级高的先生效
The above three configurations will not be merged, and the one with higher priority will take effect first.

#### 忽略用户名邮箱大小写@case-sensitive
#### Ignore username email case @case-sensitive

> uni-id 3.1.0及以上版本
> uni-id 3.1.0 and above

uni-id 3.1.0版本主要有以下两个调整
The uni-id 3.1.0 version mainly has the following two adjustments

1. 自此版本起会对所有接口中的用户名、邮箱、密码进行前后去空格。
1. Starting from this version, the user name, email address and password in all interfaces will be removed before and after spaces.

2. 此版本之前uni-id并未忽略用户名及邮箱的大小写。这样导致了一些问题，比如用户在手机上登录不小心就会使用首字母大写的用户名或邮箱，这样就会登录失败，影响用户体验。很多应用/网站的登录都是忽略大小写的，为此uni-id在3.1.0版本起调整为默认忽略用户名、邮箱的大小写。实现方式为将用户名、邮箱均存储为小写，用户输入用户名邮箱时也转化为小写进行匹配
2. Before this version, uni-id did not ignore the case of username and mailbox. This leads to some problems. For example, if a user accidentally logs in on a mobile phone, he or she will use a username or email address with a capital letter, which will cause the login to fail and affect the user experience. The login of many applications/websites ignores case. For this reason, since version 3.1.0, uni-id is adjusted to ignore the case of username and email by default. The implementation method is to store the user name and mailbox as lowercase, and when the user enters the user name and mailbox, it is also converted to lowercase for matching.

**注意**
**Notice**

- 此调整兼容旧版本，以登录接口为例，优先匹配用户输入用户名对应的账号，如果不存在则匹配全小写用户名对应的账号（uni-id内部进行处理实际不会增加数据库读写次数）
- This adjustment is compatible with the old version. Taking the login interface as an example, the account corresponding to the username entered by the user is preferentially matched. If it does not exist, the account corresponding to the all-lowercase username will be matched (the internal processing of uni-id will not actually increase the number of database reads and writes. )
- 新注册用户会将用户名/邮箱存储为全小写格式，老用户可能还存在包含大写字母的邮箱及用户名
- New registered users will store their username/email in all lowercase format, old users may also have emails and usernames containing uppercase letters

#### 补齐用户dcloud_appid字段@makeup-dcloud-appid
#### Complete the user dcloud_appid field @makeup-dcloud-appid

此调整详情见：[隔离不同端用户](uniCloud/uni-id.md?id=isolate-user)
For details of this adjustment, see: [Isolate Different End Users](uniCloud/uni-id.md?id=isolate-user)

> uni-id3.3.0以下版本升级到3.3.0及以上版本时，需要参照本章节补齐用户数据
> When uni-id version below 3.3.0 is upgraded to version 3.3.0 and above, you need to refer to this chapter to complete the user data

uni-id在3.3.0提供了根据客户端appid（项目manifest.json内配置的DCloud Appid）隔离不同用户的功能，旧版本的uni-id在注册用户时并未将当前客户端的appid存储在用户的记录内，更新到新版后这些没有dcloud_appid字段的用户和之前一样可以登录所有端。开发者使用云函数本地运行可以自行对用户数据进行修补，为用户创建dcloud_appid字段
In 3.3.0, uni-id provides the function of isolating different users according to the client appid (DCloud Appid configured in the project manifest.json). The old version of uni-id did not store the appid of the current client in the user when registering a user. In the records of , after updating to the new version, these users without the dcloud_appid field can log in to all terminals as before. Developers can use cloud functions to run locally to patch user data and create dcloud_appid fields for users

**更新后用户将只允许登录与自己数据库记录内匹配的端**
**After the update, users will only be allowed to log in to the terminal that matches their own database records**

云函数示例代码如下：
The cloud function sample code is as follows:

**注意：如果要更新的记录很多可能会超时失败，此时无需重试等待数据库自行完成更新即可**
**Note: If there are many records to be updated, the timeout may fail. In this case, there is no need to retry and wait for the database to complete the update by itself.**

**如果仅有一端，将所有用户的数据更新为同一个dcloud_appid即可，例：**
**If there is only one end, just update the data of all users to the same dcloud_appid, for example:**

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
**If there are users who distinguish different users before, you can add the conditions for distinguishing users and then update them, for example:**

```js
// 更新教师端用户的云函数
// Update the cloud function of the teacher user
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
// Update the cloud function of the student user
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
**If users are allowed to log in from multiple terminals, they need to pass in the DCloud Appid from multiple terminals, for example:**

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
- Why is the token array getting longer and longer
  + 每次登录成功/刷新token都会新增一个token，并且检查所有token的有效期删除过期token。正常情况下客户端应该判断持久化存储的token是否还在有效期内，如果还有效就直接进入应用，不再执行登录。这样相当于用户的每个设备上都存在一个有效期内的token，云端会保留所有仍在有效期内的token（部分过期token需要等待用户重新获取token之后才会删除）。
  + Every time you log in successfully/refresh the token, a new token will be added, and the validity period of all tokens will be checked to delete expired tokens. Under normal circumstances, the client should judge whether the persistently stored token is still valid. If it is still valid, it will directly enter the application and no longer log in. This means that there is a valid token on each device of the user, and the cloud will retain all the tokens that are still within the validity period (some expired tokens need to wait for the user to re-acquire the token before deleting).

- 复制token到其他环境校验不通过
- Copying the token to other environments does not pass the verification
  + uni-id内会校验客户端ua，如果是在本地调试可以在云函数内修改`context.CLIENTUA`为生成token的设备ua，切记上线删除此逻辑。如果不需要设备和token绑定，可以在config内配置`bindTokenToDevice: false`来关闭绑定，`uni-id 3.0.12`及以上版本bindTokenToDevice默认值调整为了false
  + The client ua will be verified in the uni-id. If you are debugging locally, you can modify `context.CLIENTUA` in the cloud function to be the device ua that generates the token. Remember to delete this logic online. If you do not need to bind the device to the token, you can configure `bindTokenToDevice: false` in config to disable the binding. The default value of bindTokenToDevice for `uni-id 3.0.12` and above is adjusted to false

- username、email、mobile三个字段
- three fields of username, email, mobile
  + 三个字段均可能为空，但是建议限制一下插入数据库三个字段的格式，比如username不应是邮箱格式或手机号格式，因为登录时可以选择使用username或mobile或email+密码的方式
  + All three fields may be empty, but it is recommended to limit the format of the three fields inserted into the database. For example, username should not be in email format or mobile phone number format, because you can choose to use username or mobile or email + password when logging in.

- 关于邀请码
- About the invitation code
  + 目前仅手机号+验证码的注册方式支持填写邀请码
  + Currently, only the registration method of mobile phone number + verification code supports filling in the invitation code
