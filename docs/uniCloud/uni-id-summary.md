本文档适用于`uni-id 4.0.0`及以上版本，需 HBuilderX 3.5.0 及以上版本。旧版本文档请访问：[uni-id 3.x.x 文档](uni-id-3.md)
This document applies to `uni-id 4.0.0` and above, and requires HBuilderX 3.5.0 and above. For older versions of documentation, please visit: [uni-id 3.x.x documentation](uni-id-3.md)

## 需求背景
## Requirements background

99%的应用，都要开发用户注册、登录、发送短信验证码、修改密码、密码加密保存、密码防探测、token管理、页面访问权限、注册用户统计等众多功能，从前端到后端都需要。
99% of applications require the development of user registration, login, sending SMS verification codes, password modification, password encryption and storage, password detection, token management, page access rights, registered user statistics and many other functions, which are required from the front end to the back end. .

为什么不能有一个开源的通用项目，避免大家的重复开发呢？
Why can't there be an open source general project to avoid repeated development by everyone?

`uni-id`应需而生。
`uni-id` is on demand.

`uni-id`为`uniCloud`开发者提供了开源、易用、安全、丰富、可扩展的用户管理框架。
`uni-id` provides an open source, easy-to-use, secure, rich, and extensible user management framework for `uniCloud` developers.

[clientDB](clientDB.md)、[DB Schema](schema.md)、[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)、[uni-admin](admin.md)，这些产品都基于`uni-id`的账户体系。可以说`uni-id`是uniCloud不可或缺的基础能力。
[clientDB](clientDB.md), [DB Schema](schema.md), [uni-starter](https://ext.dcloud.net.cn/plugin?id=5057), [uni-admin]( admin.md), these products are based on the `uni-id` account system. It can be said that `uni-id` is an indispensable basic capability of uniCloud.

## uni-id 的价值
## uni-id value

1. 节省了大量重复劳动
1. Save a lot of repetitive work
2. 降低门槛，前端开发者无需研究数据库如何设计、账户安全如何保障
2. Lowering the threshold, front-end developers do not need to study how to design databases and how to ensure account security
3. 多系统打通用户和上下游协同
3. Multiple systems connect users and upstream and downstream collaboration

关于第三点，着重强调下。
Regarding the third point, I would like to emphasize it.

一个应用，往往需要集成多个功能模块。比如一个电商应用，需要一个基本电商模板，还需要客服聊天模板、统计看板模板。
An application often needs to integrate multiple functional modules. For example, an e-commerce application requires a basic e-commerce template, as well as a customer service chat template and a statistical kanban template.

在插件市场，每类模板插件都能找到，但他们如果不是基于同一套用户体系设计，就很难整合。
In the plugin market, every type of template plugin can be found, but if they are not designed based on the same user system, it is difficult to integrate.

所有uniCloud的标准应用，都基于`uni-id`来做。`uni-id-common`公共模块自动内置在每个服务空间里的。
All uniCloud standard applications are based on `uni-id`. The `uni-id-common` common module is automatically built into each service space.

有了统一的账户规范，并且围绕这套账户规范，有各种各样插件，那么开发者可以随意整合这些插件，让数据互通。
With a unified account specification and various plug-ins around this set of account specifications, developers can integrate these plug-ins at will to allow data interoperability.

规范，还可以让上下游充分协同。插件市场会出现各种数据迁移插件，比如把从discuz里把用户迁移到`uni-id`中的插件，相信围绕这套规范的产业链会非常活跃。
Specifications can also allow the upstream and downstream to fully cooperate. There will be various data migration plug-ins in the plug-in market, such as plug-ins that migrate users from discuz to `uni-id`. I believe that the industry chain around this specification will be very active.

目前插件市场上各种优秀的uniCloud轮子，几乎都是基于`uni-id`的。
At present, the various excellent uniCloud wheels on the plug-in market are almost all based on `uni-id`.

## 功能清单
## Feature list

`uni-id`已完成的功能：
`uni-id` completed functions:

- 注册、登录、发送短信验证码、密码加密保存、修改密码、忘记密码、头像管理、token管理、rbac权限角色体系、页面访问权限路由控制、用户邀请裂变、用户签到、日志记录、账户防刷
- Registration, login, sending SMS verification code, password encryption and saving, password modification, forgetting password, avatar management, token management, rbac permission role system, page access permission routing control, user invitation fission, user check-in, log record, account anti-brush

关于登录方式，目前已实现
Regarding the login method, it has been implemented

- 账户密码登录
- Account password login
- 手机号+短信验证码登录 （内置uniCloud短信能力）
- Mobile phone number + SMS verification code login (built-in uniCloud SMS capability)
- App手机号一键认证，免验证码（内置uni-app App一键登录能力）
- App mobile phone number one-key authentication, no verification code (built-in uni-app App one-key login capability)
- 三方登录：App中的微信登录、Apple ID、QQ登录；微信小程序中的微信登录；支付宝小程序中的支付宝账户登录；QQ小程序中的QQ登录
- Three-way login: WeChat login, Apple ID, QQ login in App; WeChat login in WeChat applet; Alipay account login in Alipay applet; QQ login in QQ applet

由于三方登录很多，DCloud没有精力全部实现，在uni-id-co中留下了空实现，欢迎开发者自行补充、提交pr或发布扩展插件，共同完善`uni-id`。。
Due to many three-party logins, DCloud does not have the energy to implement all of them, leaving empty implementations in uni-id-co. Developers are welcome to supplement, submit PR or publish extension plug-ins to improve `uni-id` together. .

后续计划：DCloud未来将内置 微信扫码登录和公众号登录、邮箱验证集成、facebook等海外主流社交账户登录、活体检测。
Follow-up plan: In the future, DCloud will have built-in WeChat scan code login and official account login, mailbox verification integration, Facebook and other overseas mainstream social account login, and live detection.

其他方面，各种常见开源项目如discuz、wordPress、ecshop的用户导入插件，不属于`uni-id`主工程，欢迎开发者单独提交插件到插件市场。
In other respects, the user-imported plugins of various common open source projects such as discuz, WordPress, and ecshop do not belong to the main project of `uni-id`. Developers are welcome to submit plugins to the plugin market separately.

## 组成结构
## Composition structure

`uni-id`贯穿了uni-app前端到uniCloud后端的各个环节。
`uni-id` runs through all links from the uni-app front end to the uniCloud back end.

|模块						|说明															|
|Module |Description |
|--							|--																|
|前端uni-app框架的相关API		|uniIdRouter页面路由、token管理客户端API						|
|Related APIs of the front-end uni-app framework |uniIdRouter page routing, token management client API |
|前端页面uni-id-pages		|登录、注册、修改密码、忘记密码、个人中心、修改头像等前端页面	|
|Front-end page uni-id-pages |Login, register, change password, forget password, personal center, change avatar and other front-end pages |
|网络传输自动管理用户token	|自动保存、续期token、网络自动传输token							|
|Network transmission automatically manages user tokens |Automatically save, renew tokens, network automatically transmit tokens |
|云端云对象uni-id-co			|与uni-id-pages搭配的云对象，相关业务的云端部分					|
|cloud cloud object uni-id-co | cloud object matched with uni-id-pages, cloud part of related business |
|云端配置uni-config-center	|在uni-config-center下提供各种配置								|
|Cloud configuration uni-config-center |Various configurations available under uni-config-center |
|云端公共模块uni-id-common	|用于云函数或云对象集成该模块验证token身份						|
|Cloud public module uni-id-common |Used for cloud function or cloud object integration, this module verifies token identity |
|云数据库的用户相关数据表		|uni-id-users等各种opendb数据表									|
|User-related data tables of cloud database |Various opendb data tables such as uni-id-users |
|uni-admin					|Admin管理后台，包括用户角色权限管理、注册用户统计					|
|uni-admin |Admin management background, including user role rights management, registered user statistics |


1. 云数据库的uni-id相关表
1. uni-id related table of cloud database

数据库是一个系统的核心，uni-id首先规范化了十几张用户相关的[opendb数据表](opendb.md)，
The database is the core of a system, uni-id first normalizes more than a dozen user-related [opendb data tables](opendb.md),

其中最为重要的4张opendb表，如下：
The four most important opendb tables are as follows:
- 用户表 [uni-id-users](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json)
- User table [uni-id-users](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json)
- 权限表 [uni-id-permissions](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-permissions/collection.json)
- Permission table [uni-id-permissions](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-permissions/collection.json)
- 角色表 [uni-id-roles](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-roles/collection.json)
- Install [uni-id-roles](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-roles/collection.json);
- 用户日志表 [uni-id-log](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-log/collection.json)
- User log table [uni-id-log](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-log/collection.json)

主表为`uni-id-users`表，保存用户的基本信息。扩展字段有很多，如实名认证数据、工作履历数据。由于MongoDB的特性，开发者可以自由扩展字段。
The main table is the `uni-id-users` table, which stores the basic information of users. There are many extended fields, such as real-name authentication data and work history data. Due to the characteristics of MongoDB, developers can freely extend fields.

所有`uni-id`的数据表，不管在HBuilderX中新建 `DB Schema` 还是在 uniCloud web控制台新建表的界面上，都可以选择模板直接建好。
All `uni-id` data tables, whether you create a new `DB Schema` in HBuilderX or on the interface of creating a new table in the uniCloud web console, can be created directly by selecting a template.

2. 云端公共模块uni-id-common
2. Cloud common module uni-id-common

uni-id-common公共模块包含了账户体系服务端的核心权限、token管理，内置在每个uniCloud服务空间里。
The uni-id-common public module contains the core permissions and token management of the account system server, and is built into each uniCloud service space.

如开发者需要在自己的云函数/云对象里校验前端用户token，则需要引用uni-id-common公共模块。
If developers need to verify the front-end user token in their own cloud functions/cloud objects, they need to refer to the uni-id-common public module.

uniCloud众多功能（如`DB Schema`的权限、uni-id-co）也都依赖 uni-id-common。
Many functions of uniCloud (such as `DB Schema` permissions, uni-id-co) also rely on uni-id-common.

[详见](uni-id-common.md)
[See details](uni-id-common.md)

3. 云端[uni-config-center](uni-config-center.md)下的uni-id配置
3. uni-id configuration under cloud [uni-config-center](uni-config-center.md)

`uni-id`在云端有很多配置，比如密码加密秘钥、短信和微信登录的appsecret等等。在`uni-config-center`下的`uni-id`目录下的config.json里存放着这些配置。
`uni-id` has many configurations in the cloud, such as password encryption key, SMS and WeChat login appsecret, etc. These configurations are stored in config.json in the `uni-id` directory under `uni-config-center`.

[见下](#config)
[see below](#config)

4. 客户端API
4. Client API
uni-app框架内置了uni-id的token管理。
The uni-app framework has built-in uni-id token management.

uni-app与uniCloud搭配且使用uni-id，登录后自动下发token、网络传输层自动传输token（uni-app 2.7.13+版本）、token临近过期会自动续期（uni-app 3.4.13 +版本），也就是说开发者无需自己管理token了。
uni-app is paired with uniCloud and uses uni-id. After logging in, the token is automatically issued, the network transport layer automatically transmits the token (uni-app 2.7.13+ version), and the token will be automatically renewed when it is about to expire (uni-app 3.4.13 + version), which means that developers do not need to manage tokens themselves.

uni-app客户端还有一批uni-id相关的内置API：
The uni-app client also has a number of built-in APIs related to uni-id:
- uniIDHasRole：判断当前用户是否拥有某角色。[详情](/api/global.md#uniidhasrole)
- uniIDHasRole: Determines whether the current user has a role. [Details](/api/global.md#uniidhasrole)
- uniIDHasPermission：判断当前用户是否拥有某权限。[详情](/api/global.md#uniidhaspermission)
- uniIDHasPermission: Determine whether the current user has a certain permission. [Details](/api/global.md#uniidhaspermission)
- uniCloud.getCurrentUserInfo()：客户端获取当前用户信息。[详情](client-sdk.md#client-getcurrentuserinfo)
- uniCloud.getCurrentUserInfo(): The client obtains the current user information. [Details](client-sdk.md#client-getcurrentuserinfo)

5. 云端一体页面模板 [uni-id-pages](uniCloud/uni-id-pages)（含uni-id-co）
5. Cloud integrated page template [uni-id-pages](uniCloud/uni-id-pages) (including uni-id-co)

基于uni-id-common，DCloud还提供了一组完整的前端页面和后端[云对象](cloud-obj.md) ，合称`uni-id-pages`。
Based on uni-id-common, DCloud also provides a complete set of front-end pages and back-end [cloud objects](cloud-obj.md), collectively called `uni-id-pages`.

uni-id-pages的功能包括：用户注册（含用户协议、隐私协议）、退出、修改密码、忘记密码等各种功能，同时适配PC宽屏和各种手机平台（App、H5、小程序）。
The functions of uni-id-pages include: user registration (including user agreement, privacy agreement), exit, password modification, forgetting password and other functions, and adapt to PC widescreen and various mobile platforms (App, H5, applet) .

此外，DCloud的其他产品也为uni-id提供了众多支持：
In addition, other DCloud products also provide numerous support for uni-id:
- [uni-admin后台管理框架](admin.md)，为uni-id提供了现成的用户、角色、权限的后台管理功能，以及注册用户统计报表。
- [uni-admin background management framework](admin.md), provides uni-id with ready-made background management functions of users, roles, and permissions, as well as registered user statistical reports.

以上全部是开源的。
All of the above are open source.

**历史遗留**
**Historical legacy**

在HBuilderX 3.5之前，DCloud提供了一个公共模块[uni-id](https://ext.dcloud.net.cn/plugin?id=2116)（注意不叫uni-id-common）和一个示例性云函数uni-id-cf（集成在uni-starter和uni-admin中）。
Before HBuilderX 3.5, DCloud provided a common module [uni-id](https://ext.dcloud.net.cn/plugin?id=2116) (note that it is not called uni-id-common) and an example cloud Function uni-id-cf (integrated in uni-starter and uni-admin).

老的公共模块uni-id是一个大而全的账户管理公共模块，体积太大，不适合被其他云函数引用。比如某个业务云函数需要校验用户token，引用的uni-id公共模块还包含了忘记密码的代码，很浪费资源。
The old public module uni-id is a large and comprehensive account management public module, which is too bulky to be referenced by other cloud functions. For example, a business cloud function needs to verify the user token, and the referenced uni-id public module also contains the code for forgetting the password, which is a waste of resources.

在云对象发布之前，DCloud基于云函数方式提供了uni-id-cf。但在HBuilderX 3.5 以后，推荐使用基于云对象的[uni-id-pages](uni-id-pages.md)，代码更简单清晰。
Before the release of cloud objects, DCloud provided uni-id-cf based on cloud functions. But after HBuilderX 3.5, it is recommended to use cloud object-based [uni-id-pages](uni-id-pages.md), the code is simpler and clearer.

从HBuilder 3.5起，[uni-id](https://ext.dcloud.net.cn/plugin?id=2116)和uni-id-cf都将被淘汰，不再更新。老的公共模块uni-id被拆开，变成了[uni-id-common](uni-id-common.md)公共模块和uni-id-co云对象。
From HBuilder 3.5 onwards, both [uni-id](https://ext.dcloud.net.cn/plugin?id=2116) and uni-id-cf will be phased out and will no longer be updated. The old common module uni-id was disassembled into [uni-id-common](uni-id-common.md) public module and uni-id-co cloud object.

uni-id-common很精简，只包括token和权限，适合被所有云函数引用。
uni-id-common is very compact, including only tokens and permissions, and is suitable for being referenced by all cloud functions.

uni-id-co则是一个更加比uni-id-cf更完善和规范的用户管理的云对象。
uni-id-co is a more complete and standardized user-managed cloud object than uni-id-cf.

老版升级指南，[详见](uni-id-pages.md#m-to-co)
Old version upgrade guide, [see details](uni-id-pages.md#m-to-co)



## 快速上手@start
## Quick start @start

uni-id-common的插件市场地址为：[uni-id-common插件](https://ext.dcloud.net.cn/plugin?id=8576)。但一般不需要单独下载这个插件，但更新uni-id-common公共模块时需要从这里下载更新。
The plugin market address of uni-id-common is: [uni-id-common plugin](https://ext.dcloud.net.cn/plugin?id=8576). But generally you don't need to download this plugin separately, but you need to download the update from here when you update the uni-id-common public module.

一般推荐直接使用uni-starter项目模板来开始开发，或者在新项目里导入uni-id-pages页面模板来使用。
It is generally recommended to use the uni-starter project template directly to start development, or import the uni-id-pages page template to use in a new project.

uni-id云端的配置是依赖[uni-config-center](uni-config-center.md)公用模块的，在工程目录uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json。（如未安装uni-config-center需安装，如缺少目录需手动创建）
The configuration of the uni-id cloud depends on the [uni-config-center](uni-config-center.md) public module, which is in the project directory uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json . (If uni-config-center is not installed, it needs to be installed, and if the directory is missing, it needs to be created manually)

uni-id云端同时依赖了公共模块[uni-captcha](https://ext.dcloud.net.cn/plugin?id=4048)，这个功能模块负责生成和校验验证码，进行人机验证。
The uni-id cloud also relies on the public module [uni-captcha](https://ext.dcloud.net.cn/plugin?id=4048), which is responsible for generating and verifying verification codes for human-machine verification.

体验uni-id需保证uniCloud服务空间至少有数据表`uni-id-users`、`opendb-verify-codes`（验证码表）
To experience uni-id, you need to ensure that the uniCloud service space has at least data tables `uni-id-users`, `opendb-verify-codes` (verification code table)

使用uni-id，首先需要确定2件事：
With uni-id, you first need to determine 2 things:

1. 确定注册登录方式
1. Determine how to register and log in

你的应用采用什么方式注册登录？比如用户名密码、手机号+短信验证码、或者微信登录。
How does your app register and log in? Such as username and password, mobile phone number + SMS verification code, or WeChat login.

很多登录方式涉及三方服务，需要开通[短信验证码服务](send-sms.md)、开通[App一键登录](univerify.md)、或者向微信等申请登录的appid和appsecret信息。
Many login methods involve third-party services, and you need to activate [SMS verification code service](send-sms.md), activate [App one-click login] (univerify.md), or apply for the appid and appsecret information for login to WeChat.

申请开通相关服务后，需要把配置信息填写在云端配置文件config.json中。
After applying to activate related services, you need to fill in the configuration information in the cloud configuration file config.json.

2. 配置各项Secret
2. Configure each Secret

账户如果涉及密码，那么需要配置`passwordSecret`，账户的密码会根据`passwordSecret`使用sha1摘要加密算法以不可逆的方式存储在数据库中。
If the account involves a password, you need to configure `passwordSecret`, and the password of the account will be irreversibly stored in the database according to the `passwordSecret` using the sha1 digest encryption algorithm.

配置`tokenSecret`是为了防止token被第三方解密，模拟用户身份。
Configuring `tokenSecret` is to prevent the token from being decrypted by a third party and impersonate the user's identity.

千万不要使用默认的passwordSecret和tokenSecret，会造成系统安全隐患。
Do not use the default passwordSecret and tokenSecret, which will cause system security risks.

云端的config.json还有各种配置，详见下个章节。前端的配置请参考uni-id-pages的文档。
There are also various configurations in config.json in the cloud, see the next chapter for details. For the configuration of the front end, please refer to the documentation of uni-id-pages.

## 云端配置config.json的说明@config
## Cloud configuration config.json description @config

uni-id的云端配置文件在`uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`中。
The cloud configuration file for uni-id is in `uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`.

注意：
Notice:

- **config.json是一个标准json文件，不支持注释**
- **config.json is a standard json file and does not support comments**

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
+ 如果使用`sendSmsCode`接口发送短信需要前往[https://dev.dcloud.net.cn/pages/sms/base](https://dev.dcloud.net.cn/pages/sms/base)充值短信额度，配置`config.json`的`service`字段，字段说明见下方示例
+ If you use the `sendSmsCode` interface to send SMS, you need to go to [https://dev.dcloud.net.cn/pages/sms/base](https://dev.dcloud.net.cn/pages/sms/base) to recharge SMS quota, configure the `service` field of `config.json`, see the example below for field description
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
  "passwordSecret": [
    {
      "type": "hmac-sha256",
      "version": 1
    }
  ], // 数据库中password字段是加密存储的，这里的passwordSecret即为加密密码所用的加密算法，详见[密码安全]
  "passwordStrength": "medium", // 密码强度，新增于 uni-id-pages 1.0.8版本，见下方说明
  "tokenSecret": "", // 生成token所用的密钥，注意修改为自己的，使用一个较长的字符串即可
  "requestAuthSecret": "", // URL化请求鉴权签名密钥
  "tokenExpiresIn": 7200, // 全平台token过期时间，未指定过期时间的平台会使用此值
  "tokenExpiresThreshold": 3600, // 新增于uni-id 1.1.7版本，checkToken时如果token有效期小于此值且在有效期内则自动获取新token，请注意将新token返回给前端保存（云对象会自动保存符合uniCloud响应体规范的响应内的新token），如果不配置此参数则不开启自动获取新token功能
  "passwordErrorLimit": 6, // 密码错误最大重试次数
  "passwordErrorRetryTime": 3600, // 密码错误重试次数超限之后的冻结时间
  "autoSetInviteCode": false, // 是否在用户注册时自动设置邀请码，默认不自动设置
  "forceInviteCode": false, // 是否强制用户注册时必填邀请码，默认为false
  "app": { // 如果你使用旧版本uni-id公共模块而不是uni-id-common这里可能配置的是app-plus，务必注意调整为app
    "tokenExpiresIn": 2592000,
    "tokenExpiresThreshold": 864000,
    "oauth": {
      // App微信登录所用到的appid、appsecret需要在微信开放平台获取，注意：不是公众平台而是开放平台
      // The appid and appsecret used for App WeChat login need to be obtained on the WeChat open platform. Note: it is not a public platform but an open platform
      "weixin": {
        "appid": "",
        "appsecret": ""
      },
      // App QQ登录所用到的appid、appsecret需要在腾讯开放平台获取，注意：不是公众平台而是开放平台
      // The appid and appsecret used for App QQ login need to be obtained from the Tencent open platform. Note: it is not a public platform but an open platform
      "qq": {
        "appid": "",
        "appsecret": ""
      },
      "apple": { // 使用苹果登录时需要
        "bundleId": ""
      }
    }
  },
  "web": { // 如果你使用旧版本uni-id公共模块而不是uni-id-common这里可能配置的是h5，务必注意调整为web
    "tokenExpiresIn": 7200,
    "tokenExpiresThreshold": 3600,
    "oauth": {
      "weixin-h5": { // 微信公众号登录配置
        "appid": "",
        "appsecret": ""
      },
      "weixin-web": { // 微信PC页面扫码登录配置
        "appid": "",
        "appsecret": ""
      }
    }
  },
  "mp-weixin": {
    "tokenExpiresIn": 259200,
    "tokenExpiresThreshold": 86400,
    "oauth": {
      // 微信小程序登录所用的appid、appsecret需要在对应的小程序管理控制台获取
      // The appid and appsecret used for WeChat applet login need to be obtained from the corresponding applet management console
      "weixin": {
        "appid": "",
        "appsecret": ""
      }
    }
  },
  "mp-qq": {
    "tokenExpiresIn": 259200,
    "tokenExpiresThreshold": 86400,
    "oauth": {
      // QQ小程序登录所用的appid、appsecret需要在对应的小程序管理控制台获取
      // The appid and appsecret used for QQ applet login need to be obtained from the corresponding applet management console
      "qq": {
        "appid": "",
        "appsecret": ""
      }
    }
  },
  "mp-alipay": {
    "tokenExpiresIn": 259200,
    "tokenExpiresThreshold": 86400,
    "oauth": {
      // 支付宝小程序登录用到的appid、privateKey请参考支付宝小程序的文档进行设置或者获取，https://opendocs.alipay.com/open/291/105971#LDsXr
      // For the appid and privateKey used for Alipay applet login, please refer to the Alipay applet documentation to set or obtain, https://opendocs.alipay.com/open/291/105971#LDsXr
      "alipay": {
        "appid": "",
        "privateKey": "", // 私钥
        "keyType": "PKCS8" // 私钥类型，如果私钥类型不是PKCS8，需要填写此字段，否则会出现“error:0D0680A8:asn1 encoding routines:ASN1_CHECK_TLEN:wrong tag”错误
      }
    }
  },
  "service": {
    "sms": {
      "name": "", // 应用名称，对应短信模版的name
      "codeExpiresIn": 180, // 验证码过期时间，单位为秒，注意一定要是60的整数倍
      "smsKey": "", // 短信密钥key，开通短信服务处可以看到
      "smsSecret": "", // 短信密钥secret，开通短信服务处可以看到
      "scene": {
        "bind-mobile-by-sms": { // 对绑定手机号场景的配置，短信验证码场景值参考：https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#sms-scene
          "templateId": "", // 绑定手机号使用的短信验证码模板
          "codeExpiresIn": 240 // 绑定手机号验证码过期时间
        }
      }
    },
    "univerify": {
      "appid": "", // 当前应用的appid，使用云函数URL化，此项必须配置
      "apiKey": "", // apiKey 和 apiSecret 在开发者中心获取，开发者中心：https://dev.dcloud.net.cn/pages/uniLogin/index，文档：https://ask.dcloud.net.cn/article/37965
      "apiSecret": ""
    }
  }
}
```

### token自动刷新@auto-refresh-token
### Automatic token refresh @auto-refresh-token

tokenExpiresThreshold用于指定token还有多长时间过期时自动刷新token。
tokenExpiresThreshold is used to specify how long the token will expire and automatically refresh the token.

例：指定`tokenExpiresThreshold:600,tokenExpiresIn:7200`，token过期时间为2小时，在token有效期不足10分钟时自动刷新token
Example: Specify `tokenExpiresThreshold:600,tokenExpiresIn:7200`, the token expiration time is 2 hours, and the token is automatically refreshed when the token validity period is less than 10 minutes

在token还有5分钟过期时调用checkToken接口会返回新的token和新的token的过期时间（新token有效时间也是2小时）。
Calling the checkToken interface when the token expires in 5 minutes will return the new token and the expiration time of the new token (the valid time of the new token is also 2 hours).

### 密码强度@password-strength
### Password Strength @password-strength

> 新增于uni-id-pages 1.0.8
> Added in uni-id-pages 1.0.8

`passwordStrength`配置项支持以下四种内置规则
The `passwordStrength` configuration item supports the following four built-in rules

```js
{
  // 密码必须包含大小写字母、数字和特殊符号
  // Password must contain uppercase and lowercase letters, numbers and special symbols
  super: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,
  // 密码必须包含字母、数字和特殊符号
  // Password must contain letters, numbers and special symbols
  strong: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,
  // 密码必须为字母、数字和特殊符号任意两种的组合
  // Password must be any combination of letters, numbers and special symbols
  medium: /^(?![0-9]+$)(?![a-zA-Z]+$)(?![~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]+$)[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,
  // 密码必须包含字母和数字
  // Password must contain letters and numbers
  weak: /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{6,16}$/
}
```

uni-id-co 与 uni-id-pages 内的前端页面均支持这四个内置规则
Front-end pages within uni-id-co and uni-id-pages both support these four built-in rules

### 登录方式及配置说明@login-and-config
### Login method and configuration instructions @login-and-config

|登录方式									|配置及获取方式																																																											|
|Login method |Configuration and access method |
|--												|--																																																																	|
|用户名、手机号、邮箱+密码|配置`passwordSecret`即可																																																						|
|Username, mobile phone number, email address + password|configure `passwordSecret` to be |
|手机号+验证码						|配置`service.sms`，在开发者中心短信服务内获取配置信息：[短信服务](https://dev.dcloud.net.cn/pages/sms/base)											|
|Mobile phone number + verification code |Configure `service.sms`, and get the configuration information in the developer center SMS service: [SMS service](https://dev.dcloud.net.cn/pages/sms/base) |
|手机号一键登录						|配置`service.univerify`，在开发者中心一键登录服务内获取：[一键登录](https://dev.dcloud.net.cn/pages/uniLogin/index)							|
|One-key login with mobile phone number |Configure `service.univerify` and get it in the one-key login service in the developer center: [One-key login](https://dev.dcloud.net.cn/pages/uniLogin/index) |
|微信小程序登录						|配置`mp-weixin.oauth.weixin`，在微信公众平台获取：[微信公众平台](https://mp.weixin.qq.com/)																				|
|WeChat applet login |Configure `mp-weixin.oauth.weixin` and obtain it on the WeChat public platform: [WeChat public platform](https://mp.weixin.qq.com/) |
|微信公众号登录						|配置`web.oauth.weixin-h5`，在微信公众平台获取：[微信公众平台](https://mp.weixin.qq.com/)																						|
|WeChat official account login |Configure `web.oauth.weixin-h5`, and obtain it on WeChat official platform: [WeChat official platform](https://mp.weixin.qq.com/) |
|微信PC页面扫码登录				|配置`web.oauth.weixin-web`，在微信开放平台获取：[微信开放平台](https://open.weixin.qq.com/)																				|
|Scan the QR code to log in on the WeChat PC page |Configure `web.oauth.weixin-web` and obtain it on the WeChat open platform: [WeChat Open Platform](https://open.weixin.qq.com/) |
|微信APP端登录						|配置`app.oauth.weixin`，在微信开放平台获取：[微信开放平台](https://open.weixin.qq.com/)																						|
|WeChat APP login |Configure `app.oauth.weixin` and obtain it on the WeChat open platform: [WeChat open platform](https://open.weixin.qq.com/) |
|QQ 小程序端登录					|配置`mp-qq.oauth.qq`，在QQ开放平台获取：[QQ开放平台](https://q.qq.com/)																														|
|QQ applet login |Configure `mp-qq.oauth.qq` and obtain it on the QQ open platform: [QQ open platform](https://q.qq.com/) |
|QQ APP端登录							|配置`app.oauth.qq`，在QQ互联获取：[QQ互联](https://connect.qq.com/)																																|
|QQ APP login |Configure `app.oauth.qq` and get it in QQ Interconnection: [QQ Interconnection](https://connect.qq.com/) |
|支付宝小程序端登录				|配置`mp-alipay.oauth.alipay`，在支付宝开放平台获取：[支付宝开放平台](https://openhome.alipay.com/develop/manage)										|
|Alipay applet login |Configure `mp-alipay.oauth.alipay` and obtain it on the Alipay open platform: [Alipay Open Platform](https://openhome.alipay.com/develop/manage) |
|Apple APP端登录					|配置`app.oauth.apple`，在Apple开发者中心自行配置：[Apple开发者中心](https://developer.apple.com/account/resources/identifiers/list)|
|Apple APP login |Configure `app.oauth.apple` and configure it yourself in the Apple Developer Center: [Apple Developer Center](https://developer.apple.com/account/resources/identifiers/list)|

## token令牌
## token token

首先解释下token的概念。token是服务器颁发给客户端的一个令牌。
First explain the concept of token. A token is a token issued by the server to the client.

用户在客户端登录时，云端通过登录接口对用户的用户名+密码，或者手机号+验证码进行校验，校验通过后服务器会给客户端下发一个token（就是根据tokenSecret生成的一串加密字符串），并同时给出有效期。
When a user logs in on the client, the cloud verifies the user's username + password, or mobile phone number + verification code through the login interface. After the verification is passed, the server will issue a token to the client (that is, a string generated based on tokenSecret). encrypted string), and at the same time give an expiration date.

客户端把这个token保存在storage中，然后每次联网请求服务器时，都带上这个token。服务器解密这个token，通过这个token认定客户端的身份。
The client saves this token in the storage, and brings this token every time it requests the server online. The server decrypts this token and identifies the client's identity through this token.

这样就避免了客户端每次请求服务器，都需要再传输一次用户名和密码。
This avoids the need for the client to transmit the username and password again every time the client requests the server.

这是业内通行的设计。
This is a common design in the industry.

在传统开发下，客户端和服务器各自需要为了token做很多事情。在uni云端一体下，开发者无需操心，只需要在uni-id云端config.json中配置好token的secret和有效期即可。剩余的工作都被自动处理了。
Under traditional development, the client and server each need to do a lot of things for the token. Under the integration of uni cloud, developers don't need to worry about it, they only need to configure the token's secret and validity period in the uni-id cloud config.json. The rest of the work is handled automatically.

uni-id云端会在login方法成功后自动返回token，uni-app前端框架会自动识别并保存这个token在storage中（uni_id_token），在前端每次连接uniCloud（不管是clientDB、callfunction、云对象调用），都会自动带上这个token。
The uni-id cloud will automatically return the token after the login method is successful, and the uni-app front-end framework will automatically identify and save the token in the storage (uni_id_token), and connect to uniCloud every time in the front-end (whether it is clientDB, callfunction, cloud object call) , will automatically bring this token.

云函数和云对象都提供了获取和校验token的方法，在uni-id相关业务中，校验token的代码都已经写好。
Both cloud functions and cloud objects provide methods for obtaining and verifying tokens. In uni-id related services, the code for verifying tokens has been written.

包括token快到期时的自动续期，开发者只需在config.json中配置好临近多久自动续期，续期的代码也无法开发者编写，框架已经内置。
Including the automatic renewal when the token is about to expire, the developer only needs to configure how long the automatic renewal will be in config.json, and the renewal code cannot be written by the developer, and the framework is already built-in.

注：不同平台的token有效期一般不一样，app有效期较长，web有效期较短。每个平台的有效期都可以单独在config.json里配置。
Note: The validity period of tokens on different platforms is generally different, the validity period of the app is longer, and the validity period of the web is shorter. The validity period for each platform can be configured individually in config.json.

## 用户角色权限@rbac
## User role permissions @rbac

为什么需要角色权限管理？
Why do you need role rights management?
- 企业管理系统，比如[uni-admin](admin.md)，除了超级管理员，不同账号通常需根据职位、责任设定不同的系统权限。比如部门管理员、Hr。
- Enterprise management systems, such as [uni-admin](admin.md), except for super administrators, different accounts usually need to set different system permissions according to their positions and responsibilities. Such as department manager, HR.
- [clientDB](clientdb.md)允许前端直接操作数据库，但部分字段应该是系统计算或管理员设置的，比如文章的阅读数、收藏数及是否加精置顶，这些字段不允许普通用户在前端通过clientDB直接修改，此时也需要通过权限控制来保证系统的安全稳定。 
- [clientDB](clientdb.md) allows the front-end to directly operate the database, but some fields should be calculated by the system or set by the administrator, such as the number of articles read, the number of favorites, and whether they are added to the top. These fields do not allow ordinary users to use the front-end Modifying directly through clientDB also requires permission control to ensure the security and stability of the system.

`uni-id`基于经典的RBAC模型实现了角色权限系统。
`uni-id` implements a role permission system based on the classic RBAC model.

### RBAC模型简介
### RBAC Model Introduction

RBAC：Role-Based Access Control，基于角色的访问控制。
RBAC: Role-Based Access Control, role-based access control.

其基本思想：对系统操作的各种权限不是直接授予具体的用户，而是在用户集合与权限集合之间建立一个角色集合。每一种角色对应一组相应的权限。一旦用户被分配了适当的角色后，该用户就拥有此角色的所有权限。
Its basic idea: various permissions for system operations are not directly granted to specific users, but a role set is established between the user set and the permission set. Each role corresponds to a corresponding set of permissions. Once a user is assigned the appropriate role, the user has all the permissions of that role.

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-rbac.png)

这样做的好处是，增强系统管理的扩展性，对于批量用户的权限变更，仅需变更该批用户角色对应权限即可，而无需对该批每个用户变更权限。
The advantage of this is that it enhances the scalability of system management. For the permission changes of batch users, it is only necessary to change the permissions corresponding to the roles of the batch of users, without changing the permissions of each user in the batch.

这个模型有三个关键名词：用户、角色、权限：
This model has three key nouns: users, roles, and permissions:
- 用户：使用系统的人，一个用户可以同时有多个角色，比如内容审核员、比如部门管理员
- User: The person who uses the system, a user can have multiple roles at the same time, such as content reviewer, such as department administrator
- 角色：权限的集合，一个角色可以有多个权限。比如内容审核员这个角色，有隐藏帖子权限、有帖子加精权限；而部门管理员这个角色，有给本部门新增员工权限、有删除本部门员工的权限。
- Role: a collection of permissions, a role can have multiple permissions. For example, the role of content reviewer has the permission to hide posts and refine posts; and the role of department administrator has the permission to add employees to the department and delete the employees of the department.
- 权限：数据权限或业务权限，例如：删除用户、帖子加精等
- Permissions: data permissions or business permissions, such as: delete users, refine posts, etc.

用户、角色、权限都存在数据库了，都可以动态创建和修改。当权限对应的代码实现完成后，用户的新入、退出、角色升迁都无需再修改代码，在uni-admin后台的web界面可以由运维人员可视化的给每个用户调整角色、给每个角色调整权限。
Users, roles, and permissions all exist in the database, and can be dynamically created and modified. When the code corresponding to the permissions is implemented, the user's new entry, exit, and role promotion do not need to modify the code. The web interface in the uni-admin background can be visually adjusted by the operation and maintenance personnel for each user and each role. permissions.

### 用户
### User

用户信息存储在`uni-id-users`表中，然后通过`role`字段保存该用户所拥有的所有角色ID，角色ID即角色表（`uni-id-roles`表）中的`role_id`字段，注意不是`_id`字段。
User information is stored in the `uni-id-users` table, and then all the role IDs owned by the user are saved through the `role` field. The role ID is the `role_id` in the role table (`uni-id-roles` table) field, note not the `_id` field.

``` json
// uni-id-users 表
// uni-id-users table
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
>Tips: Design the user role as a field of the user table instead of creating a new `user role association table`: avoid the performance overhead of mongodb when querying across tables

### 角色
### Role

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

```json
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

### 权限
### Permissions

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

```json
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

```json
// uni-id-users.schema.json
{
  "permission": {
    "update":"doc._id == auth.uid || 'USER_EDIT' in auth.permission" //用户自己或有`USER_EDIT`权限的用户，可执行用户表的.update操作
  }
}
```

>Tips1：建议代码交付时内置所有权限，方便clientDB中的权限配置和调整。
>Tips1: It is recommended that all permissions are built in when the code is delivered to facilitate the configuration and adjustment of permissions in clientDB.

### 其他说明
### other instructions

uni-id将用户的角色权限缓存在token内。详情参考：[缓存角色权限](#cache-permission-in-token)。
The uni-id caches the user's role permissions within the token. For details, refer to: [Cache role permissions](#cache-permission-in-token).

如下是通过token判断权限的简单示例：
The following is a simple example of judging permissions by token:

```js
// 简单的权限校验示例
// Simple permission check example
function hasPermission(token, permission) {
  const {
	  uid,
	  role,
	  permission
  } = await uniID.checkToken(token)
  return role.includes('admin') || checkTokenRes.permission.includes(permission) // admin用户的permission为空数组，但是拥有所有权限
}
```

注意： **在uniCloud admin中，封装了可视化的用户、权限、角色的管理，新增删除修改均支持**，无需自己维护。[详见](admin.md#mutiladmin)
Note: **In uniCloud admin, the visual management of users, permissions, and roles is encapsulated. New additions, deletions, and modifications are all supported**, and there is no need to maintain it yourself. [See details](admin.md#mutiladmin)

## uni-id数据表@db-schema
## uni-id data table @db-schema

`uni-id`的所有数据表，都在[opendb](opendb.md)规范中。
All data tables for `uni-id` are in the [opendb](opendb.md) specification.

在unicloud [web控制台](https://unicloud.dcloud.net.cn/) 新建数据表时，可以从`uni-id`的模板分类里找到下面的表，并一键创建这些表。HBuilderX 3.4.11起新建 DB Schema 也有模板可选择。
When creating a new data table in unicloud [web console](https://unicloud.dcloud.net.cn/), you can find the following tables from the template category of `uni-id`, and create these tables with one click. Since HBuilderX 3.4.11, new DB Schemas also have templates to choose from.

### 用户表@user-table
### User table @user-table

存放用户基本信息。
Store basic user information.

表名：`uni-id-users`
Table name: `uni-id-users`

| 字段				| 类型		| 必填	| 描述														|
| Fields | Type | Required | Description |
| ----------------	| ---------	| ----	| -------------------------------------------				|
| \_id				| Object ID	| 是	| 存储文档 ID（用户 ID），系统自动生成						|
| \_id | Object ID | Yes | Stores the document ID (user ID), the system automatically generates |
| username			| String	| 否	| 用户名，不允许重复										|
| username | String | No | Username, no duplicates allowed |
| password			| password	| 否	| 密码。加密存储											|
| password | password | No | Password. Encrypted Storage |
| nickname			| String	| 否	| 用户昵称													|
| nickname | String | No | User nickname |
| gender			| int	| 否	| 用户性别：0 未知 1 男性 2 女性							|
| gender | int | No | User gender: 0 unknown 1 male 2 female |
| role				| Array		| 否	| 用户角色列表，由role_id组成的数组							|
| role | Array | no | list of user roles, an array of role_ids |
| status			| int	| 是	| 用户状态：0 正常，1 禁用，2 审核中，3 审核拒绝，4 已注销	|
| status | int | yes | user status: 0 normal, 1 disabled, 2 under review, 3 review rejected, 4 logged out |
| dcloud_appid		| Array		| 否	| 允许登录的客户端的appid列表，不同应用同时复用一个user表时适用，比如	司机端和乘客端是2个appid，在登陆时可以隔离，[见下](#isolate-user)|
| dcloud_appid | Array | No | Appid list of clients allowed to log in. It is applicable when different applications reuse a user table at the same time. For example, the driver and the passenger are two appids, which can be isolated when logging in, [see below](#isolate -user)|
| mobile			| String	| 否	| 手机号码													|
| mobile | String | No | Mobile number |
| mobile_confirmed	| int	| 否	| 手机号验证状态：0 未验证 1 已验证，未验证用户不可登录		|
| mobile_confirmed | int | No | Mobile number verification status: 0 not verified 1 verified, unverified users cannot log in |
| email				| String	| 否	| 邮箱地址													|
| email | String | No | Email address |
| email_confirmed	| int	| 否	| 邮箱验证状态：0 未验证 1 已验证，未验证用户不可登录		|
| email_confirmed | int | No | Email verification status: 0 not verified 1 verified, unverified users cannot log in |
| avatar			| String	| 否	| 头像地址													|
| avatar | String | No | Avatar address |
| wx_unionid		| String	| 否	| 微信unionid												|
| wx_unionid | String | No | WeChat unionid |
| wx_openid			| Object	| 否	| 微信各个平台openid。子结构详见下文							|
| wx_openid | Object | No | The openid of each platform of WeChat. The substructure is detailed below |
| qq_unionid		| String	| 否	| QQ unionid												|
| qq_unionid		| String	| No	| QQ unionid												|
| qq_openid			| Object	| 否	| QQ各个平台openid。子结构详见下文							|
| qq_openid | Object | No | The openid of each QQ platform. The substructure is detailed below |
| ali_openid		| String	| 否	| 支付宝平台openid											|
| ali_openid | String | No | Alipay platform openid |
| apple_openid		| String	| 否	| 苹果登录openid
| apple_openid | String | No | Apple login openid
| comment			| String	| 否	| 备注														|
| comment | String | No | Comment |
| realname_auth		| Object	| 否	| 实名认证信息。子结构详见下文									|
| realname_auth | Object | No | Real-name authentication information. The substructure is detailed below |
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
| register_env		| Object	| 否	| 用户注册时的环境信息，新增于`uni-id 3.3.14`。子结构详见下文	|
| register_env | Object | no | Environment information for user registration, added in `uni-id 3.3.14`. The substructure is detailed below |

**注意**
**Notice**

- 本表格只列出部分字段，完整字段[详见](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json)
- This table only lists some fields, the full field [see details](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json)
- 最后登录时间、IP，并非只有登录操作会修改，token刷新时也会修改最后登录时间、ip。应用启动时若token有效则不会触发登录行为，也不会更新本值。
- The last login time and IP, not only the login operation will be modified, the last login time and IP will also be modified when the token is refreshed. When the application starts, if the token is valid, the login behavior will not be triggered, and this value will not be updated.

**wx_openid字段定义**
**wx_openid field definition**

> opendb中uni-id-users表1.0.0调整为下面的结构，uni-id-co使用此标准。如何处理旧数据请参考：[自uni-id升级为uni-id-co+uni-id-common](uni-id-pages.md#m-to-co)
> The uni-id-users table 1.0.0 in opendb is adjusted to the following structure, and uni-id-co uses this standard. How to deal with old data, please refer to: [Upgrade from uni-id to uni-id-co+uni-id-common](uni-id-pages.md#m-to-co)

| 字段		| 类型	| 必填	| 描述					|
| Fields | Type | Required | Description |
| -------	| ------| ----	| --------				|
| app		| String| 否	| app平台微信openid		|
| app | String| No | app platform WeChat openid |
| mp		| String| 否	| 微信小程序平台openid	|
| mp | String| No | WeChat applet platform openid |
| web		| String| 否	| 微信网页应用openid	|
| web | String| No | WeChat web application openid |
| h5		| String| 否	| 微信公众号应用openid	|
| h5 | String| No | WeChat public account application openid |

**qq_openid字段定义**
**qq_openid field definition**

> opendb中uni-id-users表1.0.0调整为下面的结构，uni-id-co使用此标准。如何处理旧数据请参考：[自uni-id升级为uni-id-co+uni-id-common](uni-id-pages.md#m-to-co)
> The uni-id-users table 1.0.0 in opendb is adjusted to the following structure, and uni-id-co uses this standard. How to deal with old data, please refer to: [Upgrade from uni-id to uni-id-co+uni-id-common](uni-id-pages.md#m-to-co)

| 字段		| 类型	| 必填	| 描述					|
| Fields | Type | Required | Description |
| -------	| ------| ----	| --------				|
| app		| String| 否	| app平台QQ openid		|
| app | String| No | app platform QQ openid |
| mp		| String| 否	| QQ小程序平台openid	|
| mp | String| No | QQ applet platform openid |

**realNameAuth 扩展字段定义**
**realNameAuth extension field definition**
该字段存储实名认证信息，子节点说明如下。
This field stores real-name authentication information, and the sub-nodes are described as follows.

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

**register_env字段定义**
**register_env field definition**

**注意：该字段是在前端注册用户时记录的前端环境信息。如果是管理员在云端调用uni-id的addUser添加的用户则无此字段**
**Note: This field is the front-end environment information recorded when the user was registered in the front-end. If the user is added by the administrator by calling the addUser of the uni-id in the cloud, there is no such field**

| 字段			| 类型	| 必填	| 描述												|
| Fields | Type | Required | Description |
|--				|--		|--		|--													|
|appid			|String|否		|注册时的客户端appId								|
|appid |String|No |Client appId when registering |
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

```json
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
  "last_login_ip": "123.120.11.128", //最后登录IP

}
```


#### 用户表索引使用注意@uni-id-users-indexes
#### User table index usage note @uni-id-users-indexes

目前 opendb 内提供的 uni-id-users表 包含完整的索引，数据库在索引量多且频繁更新的情况下可能会出现写入缓慢的情况，因此推荐开发者在使用 uni-id-users表 时可以删除没有用到的索引。
At present, the uni-id-users table provided in opendb contains a complete index. When the database has a large number of indexes and is frequently updated, the writing may be slow. Therefore, it is recommended that developers can use the uni-id-users table. Delete unused indexes.

例：项目内只使用了微信登录，不使用其他登录方式，可以只保留`wx_unionid、wx_openid.mp`这些账号相关的索引，删除其他登录方式的索引（比如username、mobile）
Example: Only WeChat login is used in the project, and no other login methods are used. You can only keep the account-related indexes such as `wx_unionid and wx_openid.mp`, and delete the indexes of other login methods (such as username, mobile)

不了解索引请参考：[索引](db-index.md)
If you don't know about indexes, please refer to: [index](db-index.md)

### 验证码表
### Verification code table

表名：`opendb-verify-codes` 
Table name: `opendb-verify-codes`

该表的前缀不是uni-id，意味着该表的设计用途是通用的，不管是uni-id的手机号验证码，或者支付等关键业务需要验证码，都使用此表。
The prefix of the table is not uni-id, which means that the table is designed for general use. Whether it is the verification code of the mobile phone number of the uni-id, or the verification code required for key businesses such as payment, this table is used.

每条验证信息，都记录在本表中。uni-id不会自动删除本表的历史数据，数据保留有效期需要开发者自行管理，可以在云函数中设置一个定时运行来清理过期数据。
Each piece of verification information is recorded in this form. The uni-id will not automatically delete the historical data of this table. The data retention period needs to be managed by the developer. You can set a timed operation in the cloud function to clear the expired data.

| 字段			| 类型		| 必填	| 描述									|
| Fields | Type | Required | Description |
| ----------	| ---------	| ----	| --------------------------------------|
| \_id			| Object ID	| 是	| 存储文档 ID（验证码 ID），系统自动生成|
| \_id | Object ID | Yes | Stores the document ID (verification code ID), which is automatically generated by the system|
| mobile		| String	| 是	| 手机号，和邮箱二选一					|
| mobile | String | Yes | Mobile phone number or email address |
| email			| String	| 是	| 邮箱，和手机号二选一					|
| email | String | Yes | Email, or mobile phone number to choose one |
| code			| String	| 是	| 验证码								|
| code | String | yes | verification code |
| scene			| String	| 是	| 验证场景								|
| scene | String | yes | verification scene |
| state			| Integer	| 是	| 验证状态：0 未验证 1 已验证 2 已作废	|
| state | Integer | Yes | Validation status: 0 not validated 1 validated 2 voided |
| ip			| String	| 是	| 请求时 IP 地址						|
| ip | String | Yes | IP address when requesting |
| create_date	| Timestamp	| 是	| 创建时间								|
| create_date | Timestamp | yes | creation time |
| expired_date	| Timestamp	| 是	| 验证码过期时间						|
| expired_date | Timestamp | Yes | Verification code expiration time |

### 角色表
### Role table

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

### 权限表
### Permissions table

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

### 更多表
### more tables

还有更多uni-id的配套数据表，可以在uniCloud [web控制台](https://unicloud.dcloud.net.cn/)新建表时选择相应模板。此处不再详述，仅罗列清单：
There are more uni-id supporting data tables, you can select the corresponding template when creating a new table in uniCloud [web console](https://unicloud.dcloud.net.cn/). I won't go into details here, just a list:

- 日志表：uni-id-log
- log table: uni-id-log
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
- 任务表：uni-id-task
- Task table: uni-id-task
- 任务日志表：uni-id-task-log
- Task log table: uni-id-task-log

## 常量@constants
## Constants @constants

### 用户状态@user-status
### User status @user-status

对应`uni-id-users`表的status字段
Corresponds to the status field of the `uni-id-users` table

|值	|说明		|
|value |description |
|--	|--			|
|0	|正常状态	|
|0 |Normal state |
|1	|封禁状态	|
|1 |Ban status |
|2	|审核中		|
|2 |Under review |
|3	|审核失败	|
|3 |Audit failed |
|4	|注销状态	|
|4 |Logout Status |

### log类型@log-type
### log type @log-type

对应`uni-id-log`表的type字段
Corresponds to the type field of the `uni-id-log` table

|值			|说明			|
|value |description |
|--			|--				|
|logout		|登出			|
|logout |logout |
|login		|登录			|
|login |login |
|register	|注册			|
|register |register |
|reset-pwd	|重置密码		|
|reset-pwd |Reset Password |
|bind-mobile|绑定手机		|
|bind-mobile|Bind mobile phone |
|bind-weixin|绑定微信账号	|
|bind-weixin|Bind WeChat account |
|bind-qq	|绑定QQ账号		|
|bind-qq |Bind QQ account |
|bind-apple	|绑定苹果账号	|
|bind-apple |Bind Apple Account |
|bind-alipay|绑定支付宝账号	|
|bind-alipay|Bind Alipay account |

### 手机、邮箱验证码使用场景@sms-scene
### Mobile phone, email verification code use scene @sms-scene

对应`opendb-verify-codes`表短信、邮箱验证码相关记录的的scene字段
Corresponds to the scene field of the `opendb-verify-codes` table SMS, email verification code related records

|值					|说明					|
|value |description |
|--					|--						|
|login-by-sms		|短信验证码登录			|
|login-by-sms |SMS verification code login |
|reset-pwd-by-sms	|短信验证码重置密码		|
|reset-pwd-by-sms |SMS verification code reset password |
|bind-mobile-by-sms	|短信验证码绑定手机号	|
|bind-mobile-by-sms |SMS verification code binding mobile phone number |
|login-by-email		|邮箱验证码登录			|
|login-by-email |Email verification code login |
|reset-pwd-by-email	|邮箱验证码重置密码		|
| reset-pwd-by-email | Email verification code reset password |
|set-pwd-by-sms	|手机验证码设置登录密码		|
| set-pwd-by-sms | Mobile phone verification code set login password |


### 图形验证码使用场景@captcha-scene
### Graphical captcha usage scenario @captcha-scene

对应`opendb-verify-codes`表图形验证码相关记录的scene字段
Corresponds to the scene field of the record related to the graphic verification code of the `opendb-verify-codes` table

|值					|说明						|
|value |description |
|--					|--							|
|register    |用户名密码注册  |
| register |Username and password registration |
|login-by-pwd		|用户名/手机/邮箱+密码登录	|
|login-by-pwd |Username/Mobile/Email+Password Login |
|login-by-sms		|短信验证码登录				|
|login-by-sms |SMS verification code login |
|reset-pwd-by-sms	|短信验证码重置密码			|
|reset-pwd-by-sms |SMS verification code reset password |
|reset-pwd-by-email	|邮箱验证码重置密码			|
|reset-pwd-by-email |Email verification code reset password |
|send-sms-code		|发送短信验证码				|
|send-sms-code |Send SMS Verification Code |
|send-email-code	|发送邮箱验证码				|
|send-email-code |Send Email Verification Code |
|bind-mobile-by-sms	|短信验证码绑定手机号		|
| bind-mobile-by-sms | SMS verification code binding mobile phone number |
|set-pwd-by-sms	|手机验证码设置登录密码		|
| set-pwd-by-sms | Mobile phone verification code set login password |

## uniIdRouter自动路由@uni-id-router
## uniIdRouter auto-route @uni-id-router

> 新增于 HBuilderX 3.5.0
> Added in HBuilderX 3.5.0

uniIdRouter 是一个运行在前端的、对前端页面访问权限路由进行控制的方案。
uniIdRouter is a solution that runs on the front-end and controls the routing of front-end page access rights.

大多数应用，都会指定某些页面需要登录才能访问。以往开发者需要写不少代码。
Most apps specify that certain pages require a login to access. In the past, developers needed to write a lot of code.

现在，只需在项目的`pages.json`内配置登录页路径、需要登录才能访问的页面等信息，uni-app框架的路由跳转，会自动在需要登录且客户端登录状态过期或未登录时跳转到登录页面。
Now, you only need to configure the login page path, pages that need to be logged in to access and other information in the `pages.json` of the project, and the routing jump of the uni-app framework will automatically log in when the login status of the client is expired or not logged in Jump to the login page.

结合以下代码及注释了解如何使用`uniIdRouter`
Combine the following code and comments to learn how to use `uniIdRouter`

```json
{
	"pages": [
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "uni-app"
			},
			"needLogin": false // 当前页面是否需要登录才可以访问，此配置优先级高于uniIdRouter下的needLogin
		}, {
			"path": "pages/list/list",
			"style": {
				"navigationBarTitleText": "uni-app"
			},
			"needLogin": true
		}, {
			"path": "pages/detail/detail",
			"style": {
				"navigationBarTitleText": "uni-app"
			}
		}
	],
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "uni-app",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8"
	},
	"uniIdRouter": {
		"loginPage": "pages/index/index", // 登录页面路径
		"needLogin": [
			"pages/detail/.*" // 需要登录才可访问的页面列表，可以使用正则语法
		],
		"resToLogin": true // 自动解析云对象及clientDB的错误码，如果是客户端token不正确或token过期则自动跳转配置的登录页面，配置为false则关闭此行为，默认true
	}
}

```

以上代码，指定了登录页为首页`index`，然后将`list`页面和`detail`目录下的所有页面，设为需要登录才能访问。那么访问`list`页面和`detail`目录下的页面时，如果客户端未登录或登录状态过期（也就是uni_id_token失效），那么会自动跳转到`index`页面来登录。
The above code specifies the login page as the home page `index`, and then sets the `list` page and all pages in the `detail` directory to require login to access. Then when accessing the `list` page and the pages in the `detail` directory, if the client is not logged in or the login status is expired (that is, the uni_id_token is invalid), it will automatically jump to the `index` page to log in.

与此功能对应的有两个uniCloud客户端api，`uniCloud.onNeedLogin()`和`uniCloud.offNeedLogin()`，开发者在监听onNeedLogin事件后，框架就不再自动跳转到登录页面，而是由开发者在onNeedLogin事件内自行处理。详情参考：[uniCloud.onNeedLogin](uniCloud/client-sdk.md?id=on-need-login)
There are two uniCloud client APIs corresponding to this function, `uniCloud.onNeedLogin()` and `uniCloud.offNeedLogin()`. After the developer listens to the onNeedLogin event, the framework will no longer automatically jump to the login page, but It is handled by the developer in the onNeedLogin event. For details, please refer to: [uniCloud.onNeedLogin](uniCloud/client-sdk.md?id=on-need-login)

自动跳转到登录页面时会携带uniIdRedirectUrl参数，其值为`encodeURIComponent(${跳转前的页面（包含路径和参数的完整页面地址）})`，如果希望用户登录后跳转回之前的页面，可以使用此参数实现。
When automatically jumping to the login page, it will carry the uniIdRedirectUrl parameter, whose value is `encodeURIComponent(${page before jumping (full page address including path and parameters)})`, if you want the user to jump back to the previous page after logging in , which can be achieved using this parameter.

以下为登录页面跳转到之前访问页面的简单示例：
Here is a simple example of a login page jumping to a previously visited page:

pages/login/login.vue
```html
<template>
	<view>
		<button @click="login">login</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uniIdRedirectUrl: ''
			}
		},
		onLoad(options) {
			this.uniIdRedirectUrl = decodeURIComponent(options.uniIdRedirectUrl)
		},
		methods: {
			async login() {
				// ...执行登录操作，在成功回调里跳转页面
				// ...Execute the login operation and jump to the page in the success callback
				if (this.uniIdRedirectUrl) {
					uni.redirectTo({
						url: this.uniIdRedirectUrl
					})
				}
			}
		}
	}
</script>

```

### 云对象响应触发needLogin
### Cloud object response triggers needLogin

云对象抛出uni-id token过期或token无效错误码时，会触发客户端自动跳转配置的登录页面，以下代码为一个简单示例
When the cloud object throws the uni-id token expired or token invalid error code, it will trigger the client to automatically jump to the configured login page. The following code is a simple example

```js
// todo云对象
// todo cloud object
const uniIdCommon = require('uni-id-common')
module.exports = {
	_before(){
		this.uniIdCommon = uniIdCommon.createInstance({
			clientInfo: this.getClientInfo()
		})
	},
	addTodo(title) {
		const {
			errCode,
			errMsg,
			uid
		} = await this.uniIdCommon.checkToken(this.getUniIdToken())
		if(errCode) { // uni-id-common的checkToken接口可能返回`uni-id-token-expired`、`uni-id-check-token-failed`错误码，二者均会触发客户端跳转登陆页面
			return {
				errCode,
				errMsg
			}
		}
		// ...
	}
}
```

客户端add-todo.vue
Client add-todo.vue
```html
<template>
	<!-- 略 -->
	<!-- omitted -->
</template>
<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {},
		methods: {
			async addTodo(title){
				const todo = uniCloud.importObject('todo')
				await todo.addTodo(title) // 调用addTodo时云端checkToken如果返回了token错误、token失效的错误码就会自动跳转到配置的登录页面
			}
		}
	}
</script>
<style>
</style>
```

**注意**
**Notice**

- pages.json内有`uniIdRouter`节点上述逻辑才会生效，自HBuilderX 3.5.0起创建空项目模板会自动配置空的`uniIdRouter`节点
- The above logic will only take effect if there is a `uniIdRouter` node in pages.json. Since HBuilderX 3.5.0, creating an empty project template will automatically configure an empty `uniIdRouter` node
- uniIdRouter底层使用navigateTo、redirectTo、reLaunch、switchTab的拦截器进行页面跳转拦截，不会拦截进入首页，web端和app端会拦截原生tabbar点击，其他端不会拦截原生tabbar点击。
- The bottom layer of uniIdRouter uses the interceptors of navigateTo, redirectTo, reLaunch, and switchTab to intercept page jumps. It will not intercept entering the home page. The web and app ends will intercept native tabbar clicks, and other ends will not intercept native tabbar clicks.
一般tabbar页面都不做自动跳转，而是在页面内再提供登录按钮。比如tabbar上有购物车或个人中心，点击购物车后在购物车页面内部会放一个提示语和按钮，告知用户需要登录。
Generally, the tabbar page does not automatically jump, but provides a login button in the page. For example, there is a shopping cart or personal center on the tabbar. After clicking the shopping cart, a prompt and a button will be placed inside the shopping cart page to inform the user that they need to log in.
在页面内判断用户是否登录，使用API[uniCloud.getCurrentUserInfo()](client-sdk.md#client-getcurrentuserinfo)
To determine whether the user is logged in on the page, use API[uniCloud.getCurrentUserInfo()](client-sdk.md#client-getcurrentuserinfo)

## 云端错误码@errcode
## Cloud error code @errcode

|错误码errCode														|错误信息errMsg												|说明																									|
|Error Code errCode |Error Message errMsg |Description |
|----																			|----																	|----																									|
|0（数字）																|成功																	|-																										|
| 0 (Number) | Success |- |
|uni-id-token-expired											|登陆状态失效，token已过期						|-																										|
| uni-id-token-expired | Login status invalid, token has expired |- |
|uni-id-check-token-failed								|token校验未通过											|-																										|
| uni-id-check-token-failed | token verification failed |- |
|uni-id-account-exists										|账户已存在														|-																										|
| uni-id-account-exists | Account already exists |- |
|uni-id-account-not-exists								|账户不存在														|-																										|
| uni-id-account-not-exists | Account does not exist |- |
|uni-id-account-not-exists-in-current-app| 匹配到的用户不可在当前应用登录											|
| uni-id-account-not-exists-in-current-app| The matched user cannot log in in the current app |
|uni-id-account-conflict									|用户账号冲突													|可能会由开发者手动更新数据库导致，正常情况下不应出现	|
| uni-id-account-conflict |User account conflict |It may be caused by the developer manually updating the database, and it should not appear under normal circumstances |
|uni-id-account-banned										|此账号已封禁													|-																										|
| uni-id-account-banned | This account has been banned |- |
|uni-id-account-auditing									|此账号正在审核中											|-																										|
| uni-id-account-auditing | This account is being audited |- |
|uni-id-account-audit-failed							|此账号审核失败												|-																										|
| uni-id-account-audit-failed | This account audit failed |- |
|uni-id-account-closed										|此账号已注销													|-																										|
| uni-id-account-closed | This account has been canceled |- |
|uni-id-captcha-required									|请输入图形验证码											|-																										|
| uni-id-captcha-required | Please enter the graphic captcha |- |
|uni-id-password-error										|用户名或密码错误											|-																										|
| uni-id-password-error | Incorrect username or password |- |
|uni-id-invalid-username									|用户名不合法													|-																										|
| uni-id-invalid-username | Invalid username |- |
|uni-id-invalid-password									|密码不合法														|-																										|
| uni-id-invalid-password | Invalid password |- |
|uni-id-invalid-mobile										|手机号码不合法												|-																										|
| uni-id-invalid-mobile | Invalid mobile phone number |- |
|uni-id-invalid-email											|邮箱不合法														|-																										|
| uni-id-invalid-email | Invalid email address |- |
|uni-id-invalid-nickname									|昵称不合法														|-																										|
| uni-id-invalid-nickname | Invalid nickname |- |
|uni-id-invalid-param											|参数错误															|-																										|
| uni-id-invalid-param | Parameter error |- |
|uni-id-param-required										|缺少参数															|-																										|
| uni-id-param-required | missing parameter |- |
|uni-id-get-third-party-account-failed		|获取第三方账号失败										|-																										|
| uni-id-get-third-party-account-failed | Failed to get third party account |- |
|uni-id-get-third-party-user-info-failed	|获取第三方用户信息失败								|-																										|
| uni-id-get-third-party-user-info-failed | Failed to get third party user info |- |
|uni-id-mobile-verify-code-error					|手机验证码错误或已过期								|-																										|
| uni-id-mobile-verify-code-error | Mobile phone verification code error or expired |- |
|uni-id-email-verify-code-error						|邮箱验证码错误或已过期								|-																										|
| uni-id-email-verify-code-error | Email verification code is wrong or expired |- |
|uni-id-admin-exists											|超级管理员已存在											|-																										|
| uni-id-admin-exists | Super administrator already exists |- |
|uni-id-permission-error									|权限错误															|-																										|
| uni-id-permission-error | permission error |- |
|uni-id-system-error											|系统错误															|-																										|
| uni-id-system-error | system error |- |
|uni-id-set-invite-code-failed						|设置邀请码失败												|-																										|
| uni-id-set-invite-code-failed | Failed to set invite code |- |
|uni-id-invalid-invite-code								|邀请码不可用													|-																										|
| uni-id-invalid-invite-code | Invite code invalid |- |
|uni-id-change-inviter-forbidden					|禁止修改邀请人												|-																										|
| uni-id-change-inviter-forbidden | Forbidden to modify the inviter |- |
|uni-id-bind-conflict											|此账号（微信、QQ、手机号等）已被绑定	|-																										|
| uni-id-bind-conflict | This account (WeChat, QQ, mobile phone number, etc.) has been bound |- |

## 多个应用复用相同uni-id-user表
## Multiple applications reuse the same uni-id-user table

有些系统由多个子应用组成，且没有各自独立服务空间，而是需要共享一个服务空间。此时就涉及一个问题，多个应用注册的账户都在uni-id-user表中，如何有效隔离。
Some systems are composed of multiple sub-applications, and there is no independent service space, but a shared service space. At this point, there is a problem. The accounts registered by multiple applications are in the uni-id-user table, how to effectively isolate them.

比如一个打车软件，有乘客端、司机端、管理端，都要注册账户。它们也都有自己的DCloud appID（manifest.json里第一个配置）
For example, a taxi software has a passenger terminal, a driver terminal, and a management terminal, and an account must be registered. They also have their own DCloud appID (the first configuration in manifest.json)

uni-id-user表中有一个数组型字段`dcloud_appid`，可以存贮这个用户有权登陆哪个应用。
There is an array field `dcloud_appid` in the uni-id-user table, which can store which application this user is authorized to log in to.

比如乘客端的appid是`__uni_111111`，司机端appid是`__uni_222222`，那么2个appid都存入`dcloud_appid`，即表示这个用户有权登录这2个应用。
For example, the appid of the passenger side is `__uni_111111`, and the appid of the driver side is `__uni_222222`, then both appids are stored in `dcloud_appid`, which means that the user has the right to log in to these two applications.

### 隔离不同应用的用户@isolate-user
### Isolate users of different applications @isolate-user

uni-id 3.3.0版本起用户注册时会自动在用户表的记录内标记为注册应用对应的用户，如果没有单独授权登录其他应用的话则只能登录这个应用。即在乘客端应用注册的，默认只能在乘客端应用登录。
Since uni-id version 3.3.0, when a user registers, it will be automatically marked as the user corresponding to the registered application in the records of the user table. If there is no separate authorization to log in to other applications, you can only log in to this application. That is, if you register in the passenger terminal application, you can only log in in the passenger terminal application by default.

如何授权登录其他应用请参考：[授权、禁止用户在特定客户端应用登录](#authorize-app)
For how to authorize login to other applications, please refer to: [Authorize, prohibit users from logging in to specific client applications](#authorize-app)

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
- 为兼容旧版本产生的旧数据，针对没有dcloud_appid字段的用户，允许登录任意端。
- In order to be compatible with the old data generated by the old version, users without the dcloud_appid field are allowed to log in to any terminal.
- 如果用户数据库记录中`dcloud_appid`字段是一个空数组，表示当前用户不能在任何客户端登录
- If the `dcloud_appid` field in the user database record is an empty array, it means the current user cannot log in on any client
- 已有dcloud_appid的用户，如果使用相同的用户标识（用户名、邮箱、手机、微信等）+ 不同的DCloud Appid登录会被判定为不同的用户，如果此时数据库没有对应的记录，会报用户不存在的错误
- For users who already have dcloud_appid, if they use the same user ID (username, email, mobile phone, WeChat, etc.) + different DCloud Appid to log in, they will be judged as different users. If there is no corresponding record in the database at this time, the user will be reported to the user. nonexistent error

### 隔离不同应用的配置@isolate-config
### Isolate configuration of different applications @isolate-config

uni-id的config.json支持配置为数组，每项都是一个完整的配置，对不同的配置使用`dcloudAppid`字段进行区分（**此字段与项目内的manifest.json里面的DCloud AppId一致**），
The config.json of uni-id supports the configuration as an array, and each item is a complete configuration. Use the `dcloudAppid` field to distinguish different configurations (**This field is consistent with the DCloud AppId in the manifest.json in the project* *),
uni-id会自动根据客户端的appid来判断该使用哪套配置。
uni-id will automatically determine which configuration to use based on the client's appid.

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

> 数组每一项都是一个完整的配置文件，全部选项请参考：[uni-id 配置](#config)
> Each item in the array is a complete configuration file. For all options, please refer to: [uni-id configuration](#config)

**注意：如果允许同一账号在不同端使用相同的账号+密码登录需要将不同端的passwordSecret设置成一样的**
**Note: If the same account is allowed to log in with the same account + password on different sides, you need to set the passwordSecret on different sides to the same**

```json
[{
  "dcloudAppid": "__UNI__xxxx1", // 务必替换为对应项目manifest.json内的DCloud Appid
  "isDefaultConfig": true, // 默认配置标记，未匹配到dcloudAppid的情况下使用默认配置
  "passwordSecret": "passwordSecret-demo",
  "tokenSecret": "tokenSecret-demo",
  "tokenExpiresIn": 7200,
  "tokenExpiresThreshold": 600
}, {
  "dcloudAppid": "__UNI__xxxx2", // 务必替换为对应项目manifest.json内的DCloud Appid
  "passwordSecret": "passwordSecret-demo",
  "tokenSecret": "tokenSecret-demo",
  "tokenExpiresIn": 7200,
  "tokenExpiresThreshold": 600
}]
```

## 其他功能
## Other functions

### 裂变@fission
### fission @fission

在`config.json`（`uniCloud/cloudfuntions/common/uni-config-center/uni-id/config.json`，以下config.json均指此文件）内配置了`autoSetInviteCode: true`则在用户注册时会自动给设置不重复的6位邀请码
If `autoSetInviteCode: true` is configured in `config.json` (`uniCloud/cloudfuntions/common/uni-config-center/uni-id/config.json`, the following config.json refers to this file), the user registers It will automatically set a 6-digit invitation code that does not repeat

在`config.json`内配置了`forceInviteCode: true`则只有使用邀请码才可以注册。
If `forceInviteCode: true` is configured in `config.json`, you can only register with an invitation code.

`uni-id-co`在会产生注册行为的接口均添加了inviteCode参数，用于传递邀请码使注册用户接受邀请
`uni-id-co` adds the inviteCode parameter to the interface that will generate the registration behavior, which is used to pass the invitation code to make the registered user accept the invitation

### 修改passwordSecret@modifysecret
### Modify passwordSecret@modifysecret

**注意：通常情况下设定好passwordSecret之后不需要再进行修改，使用此功能时请务必小心谨慎**
**Note: Usually, you do not need to modify the passwordSecret after setting it. Please be careful when using this function**

**说明**
**illustrate**

在config.json内修改passwordSecret会导致历史用户无法通过密码登录。但是某些情况下有些应用有修改passwordSecret的需求，例如刚开始使用uni-id时没有自定义passwordSecret，后续需要修改，此时可以使用uni-id 2.0.1版本新增的修改passwordSecret功能。（注意：2.0.1版本验证码表名调整为了`opendb-verify-codes`）
Modifying passwordSecret in config.json will prevent historical users from logging in with passwords. However, in some cases, some applications need to modify the passwordSecret. For example, when the uni-id is first used, the passwordSecret is not customized, and it needs to be modified later. In this case, you can use the new passwordSecret modification function of the uni-id version 2.0.1. (Note: The name of the verification code table in version 2.0.1 has been adjusted to `opendb-verify-codes`)

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
Since it is irreversible encryption, in theory, the leakage of the passwordSecret will not cause the user's real password to be leaked. Customizing the passwordSecret only further enhances the security.

### 缓存角色权限@cache-permission-in-token
### Cache role permission @cache-permission-in-token

使用`uni-id-common`时，token内会缓存用户的角色权限。
When using `uni-id-common`, the user's role permissions are cached in the token.

为什么要在token缓存角色权限？token校验是高频操作，云数据库是按照读写次数来收取费用的，并且读写数据库会拖慢接口响应速度。
Why cache role permissions in the token? Token verification is a high-frequency operation, ApsaraDB charges fees based on the number of reads and writes, and reading and writing the database will slow down the response speed of the interface.

比较经济的做法就是在token里缓存角色权限。更好的方案是在redis里缓存角色权限，只是redis需要付费开通。
A more economical approach is to cache role permissions in the token. A better solution is to cache role permissions in redis, but redis needs to be paid for.

**注意**
**Notice**

- 由于角色权限缓存在token内，可能会存在权限已经更新但是用户token未过期之前依然是旧版角色权限的情况。可以调短一些token过期时间来减少这种情况的影响。或者使用redis来缓存用户权限
- Since the role permissions are cached in the token, there may be cases where the permissions have been updated but the user token is still the old version of the role permissions before it expires. The token expiration time can be shortened to reduce the impact of this situation. Or use redis to cache user permissions
- admin角色token内不包含permission，如需自行判断用户是否有某个权限，要注意admin角色需要额外判断一下，只要角色为admin或permission包含期待值，都视为拥有权限
- The admin role token does not contain permission. If you need to determine whether the user has a certain permission, you should pay attention to the admin role. You need to make additional judgments. As long as the role is admin or the permission contains the expected value, it is regarded as having permission.

### 自定义token内容@custom-token
### Custom token content @custom-token

uni-id-common支持在token内缓存用户的角色权限。但是某些情况下开发者可能还希望缓存一些别的东西，以便在客户端能方便的访问（**注意：不可缓存机密信息到token内**）。
uni-id-common supports caching the user's role permissions within the token. But in some cases developers may also want to cache something else for easy access on the client side (**Note: do not cache confidential information in the token**).

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

- 不要删除原始token内的字段
- don't delete the fields inside the original token

### 自定义国际化语言@custom-i8n
### Custom internationalization language @custom-i8n

完整词句列表参考：
For a complete list of words and phrases:

- [uni-id-co中文语言包](https://gitcode.net/dcloud/hello_uni-id-pages/-/blob/master/uni_modules/uni-id-pages/uniCloud/cloudfunctions/uni-id-co/lang/zh-hans.js)
- [uni-id-co Chinese language pack](https://gitcode.net/dcloud/hello_uni-id-pages/-/blob/master/uni_modules/uni-id-pages/uniCloud/cloudfunctions/uni-id- co/lang/zh-hans.js)
- [uni-id-common中文语言包](https://gitcode.net/dcloud/uni-id-common/-/blob/master/src/lang/zh-Hans.js)
- [uni-id-common Chinese language pack](https://gitcode.net/dcloud/uni-id-common/-/blob/master/src/lang/zh-Hans.js)

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

### 自动保存用户sessionKey、accessToken等信息@save-user-token
### Automatically save user sessionKey, accessToken and other information @save-user-token

uni-id-co在微信、QQ登录或注册时会自动保存用户的sessionKey、accessToken信息。
uni-id-co will automatically save the user's sessionKey and accessToken information when logging in or registering on WeChat or QQ.

在`uni-id-pages 1.0.8`之前，uni-id-co直接将这些信息保存在了用户表（uni-id-users）的third_party字段下，仅按照平台区分没有按照不同应用区分。具体结构如下
Before `uni-id-pages 1.0.8`, uni-id-co directly stored this information in the third_party field of the user table (uni-id-users), which was only distinguished by platform and not by different applications. The specific structure is as follows

```json
{
  "_id": "uid",
  "wx_unionid": "xxx",
  "qq_unionid": "xxx",
  "third_party": {
    "mp_weixin": {
      "session_key": "xxxx"
    },
    "app_weixin": {
      "access_token": "accessToken",
      "access_token_expired": 1111
    },
    "mp_qq": {
      "session_key": "xxxx"
    },
    "app_qq": {
      "access_token": "accessToken",
      "access_token_expired": 1111
    }
  }
}
```

此结构无法满足多应用同一平台关联同一服务空间且允许用户跨应用登录的场景。因此在`uni-id-pages 1.0.8`及更高版本对此做出了调整，改为使用[uni-open-bridge-common](uni-open-bridge.md#uni-open-bridge-common)存储用户在三方平台的凭据信息。同时为了兼容旧版本上述third_party字段仍存有这些信息。
This structure cannot meet the scenario where multiple applications are associated with the same service space on the same platform and users are allowed to log in across applications. So in `uni-id-pages 1.0.8` and later this was adjusted to use [uni-open-bridge-common](uni-open-bridge.md#uni-open-bridge- common) to store the user's credential information on the third-party platform. At the same time, this information still exists in the third_party field above for compatibility with older versions.

目前被`uni-id-co`保存的三方凭据有以下几种：
The three-party credentials currently saved by `uni-id-co` are as follows:

- 微信小程序端用户session_key，通过`uni-open-bridge-common`的`setSessionKey`方法写入
- Wechat applet user session_key, written through the `setSessionKey` method of `uni-open-bridge-common`
- 微信公众号页面用户access_token，通过`uni-open-bridge-common`的`setUserAccessToken`方法写入
- Wechat official account page user access_token, written through the `setUserAccessToken` method of `uni-open-bridge-common`
- 微信web页面扫码登录时返回的用户access_token，通过`uni-open-bridge-common`的`setUserAccessToken`方法写入
- The user access_token returned when the WeChat web page scans the code to log in, which is written through the `setUserAccessToken` method of `uni-open-bridge-common`
- 微信APP登录时返回的用户access_token，通过`uni-open-bridge-common`的`setUserAccessToken`方法写入
- The user access_token returned by WeChat APP when logging in, written through the `setUserAccessToken` method of `uni-open-bridge-common`
- QQ小程序端用户session_key，通过`uni-open-bridge-common`的`setSessionKey`方法写入
- QQ applet user session_key, written through the `setSessionKey` method of `uni-open-bridge-common`
- QQ APP登录时返回的用户access_token，通过`uni-open-bridge-common`的`setUserAccessToken`方法写入
- The user access_token returned by the QQ APP when logging in, written through the `setUserAccessToken` method of `uni-open-bridge-common`

开发者如需获取某用户对应的openid，可以在用户使用相应的登录操作之后自行读取用户记录获取。代码示例如下：
If the developer needs to obtain the openid corresponding to a user, he can read the user record by himself after the user uses the corresponding login operation. The code example is as follows:

```js
const uid = 'xx'
const appId = '__UNI_xxx'
const wxPlatform = 'mp' // mp：小程序，h5：公众号，web：web页面，app：App微信登录

const db = uniCloud.database()
const getUserRes = await db.collection('uni-id-users').doc(uid).get()

const userRecord = getUserRes.data[0]
if(!userRecord) {
  throw new Error('未匹配到此用户')
}
const wxOpenid = userRecord.wx_openid || {}
const openid = wxOpenid[wxPlatform + '_' + appId]  || wxOpenid[wxPlatform]
```

### 钩子@hooks
### Hooks @hooks

> 新增于 uni-id-pages 1.0.8
> Added in uni-id-pages 1.0.8

uni-id-co是一个完整的云对象，里面注册登录等流程都已完全实现，开发者不方便进行修改。例如要实现注册时为某端用户统一添加一个角色的功能，只能去修改uni-id-co的代码。因此uni-id-co提供了通过钩子干涉内置逻辑的功能
uni-id-co is a complete cloud object, in which the registration and login processes have been fully implemented, and it is inconvenient for developers to modify it. For example, to realize the function of adding a role to a user at the time of registration, you can only modify the code of uni-id-co. So uni-id-co provides the ability to interfere with built-in logic through hooks
 
uni-id钩子函数需要在uni-config-center内配置。在`uni-config-center/uni-id`下创建hooks目录并在其内创建`index.js`内容如下
The uni-id hook function needs to be configured in uni-config-center. Create hooks directory under `uni-config-center/uni-id` and create `index.js` inside it with the following content

```js
module.exports = {
  beforeRegister: function (){
    // 注册前钩子
    // pre-registration hook
  }
}
```

#### beforeRegister@before-register

beforeRegister在注册用户记录入库前触发。钩子会接收到如下参数，需要返回处理后的用户记录用以入库存储
beforeRegister is triggered before the registered user records are stored. The hook will receive the following parameters and need to return the processed user record for storage

|参数名			|类型		|说明																																		|
|parameter name |type |description |
|--					|--			|--																																			|
|userRecord	|Object	|即将入库的用户记录																											|
|userRecord |Object |The user record to be stored |
|clientInfo	|Object	|客户端信息，参考：[云对象 getClientInfo](cloud-obj.md#get-client-info)	|
|clientInfo |Object |Client information, reference: [cloud object getClientInfo](cloud-obj.md#get-client-info) |

以为__UNI_123123这个应用注册的用户添加"teacher"角色为例，beforeRegister钩子示例如下
For example, adding the "teacher" role for the user registered by the application __UNI_123123, the example of the beforeRegister hook is as follows

```js
// 钩子函数示例 hooks/index.js
// hook function example hooks/index.js

function beforeRegister({
  userRecord,
  clientInfo
} = {}) {
  if(clientInfo.appId === '__UNI_123123') {
    if(userRecord.role) {
      userRecord.role.push('teacher')
    } else {
      userRecord.role = ['teacher']
    }
  }
  return userRecord // 务必返回处理后的userRecord
}

module.exports = {
  beforeRegister
}
```

### 密码安全@password-safe
### Password Safe @password-safe

uni-id 默认使用了 `hmac-sha1` 加密算法对密码进行加密，自 `uni-id-pages@1.0.28` 版本起新增了 `hmac-sha256` 加密算法，开发者可以自己需求选择不同的算法，推荐使用 `hmac-sha256`算法。
By default, uni-id uses the `hmac-sha1` encryption algorithm to encrypt the password. Since the `uni-id-pages@1.0.28` version, the `hmac-sha256` encryption algorithm has been added, and developers can choose different ones according to their needs. algorithm, it is recommended to use `hmac-sha256` algorithm.

在 `uni-config-center/uni-id/config.json` 中配置， [uni-id/config.json说明](uni-id-summary.html#config)
Configure in `uni-config-center/uni-id/config.json`, [uni-id/config.json description](uni-id-summary.html#config)

```json
{
  "passwordSecret": [
    {
      "type": "hmac-sha256", // 必须指定算法类型 默认 hmac-sha1
      "version": 1
    }
  ]
}
```

修改 passwordSecret [参考](uni-id-summary.html#modifysecret)
Modify passwordSecret [reference](uni-id-summary.html#modifysecret)

#### 升级 hmac-256 加密算法指南
#### Upgrade hmac-256 encryption algorithm guide
适用于 `uni-id-pages@1.0.28` 以下版本，
For versions below `uni-id-pages@1.0.28`,
首先确认 `uni-config-center/uni-id/config.json` 中 `passwordSecret` 字段类型
First confirm the `passwordSecret` field type in `uni-config-center/uni-id/config.json`

`passwordSecret` 字段可能是`string`或者`array`类型，示例如下：
The `passwordSecret` field may be of `string` or `array` type, examples are as follows:
```json
// 1 string
{
  "passwordSecret": "passwordSecret-demo"
}
// 2 array
{
  "passwordSecret": [
    {
      "value": "passwordSecret-demo",
      "version": 1
    }
  ]
}

```

如果 `passwordSecret` 是字符串类型，修改为数组类型后，在 `passwordSecret` 中添加 `hmac-256` 算法，同时 `version` 加 1
If `passwordSecret` is a string type, modify it to an array type, add `hmac-256` algorithm to `passwordSecret`, and add 1 to `version`
```json
{
  "passwordSecret": [
    {
      "value": "passwordSecret-demo",
      "version": 1
    },{
      "type": "hmac-256",
      "version": 2
    }
  ]
}
```

#### 自定义加密算法@custom-password-encrypt
#### Custom encryption algorithm @custom-password-encrypt

如果内置的加密算法无法满足业务需求，可以自定义加密规则。
If the built-in encryption algorithm cannot meet business requirements, you can customize the encryption rules.

首先在 `uni-config-center/uni-id/config.json` 中增加自定义密码类型 `custom`
First add custom password type `custom` in `uni-config-center/uni-id/config.json`

```json
{
  "passwordSecret": [
    {
      "value": "passwordSecret-demo",
      "version": 1
    },
    {
      "type": "hmac-sha256", // 必须指定算法类型 默认 hmac-sha1
      "version": 2
    },
    {
      "type": "custom", // 固定值 custom，代表使用自定义规则
      "version": 3
    }
  ]
}
```

在 `uni-config-center/uni-id/custom-password.js`文件（没有请手动创建）中创建加密与验证方法即可。
Just create encryption and authentication methods in the `uni-config-center/uni-id/custom-password.js` file (if not, please create it manually).

```javascript
module.exports = {
    /**
     * 密码加密
     * @param {String} password 用户输入的密码
     * @param {Object} clientInfo 客户端信息
     * @param {Object} passwordSecret config.json 匹配到的 passwordSecret
     * @return {{version, passwordHash}}
     */
    encryptPassword: function ({password, clientInfo, passwordSecret}) {
        // 必须按照此格式返回
        // Must return in this format
        return {
            passwordHash: password,
            version: passwordSecret.version
        }
    },
    /**
     * 密码验证
     * @param {String} password 用户输入的密码
     * @param {Object} userRecord 用户信息
     * @param {Object} clientInfo 客户端信息
     * @param {Object} passwordSecret config.json 匹配到的 passwordSecret
     * @return {boolean}
     */
    verifyPassword: function ({password, userRecord, clientInfo, passwordSecret}) {
        return password === userRecord.password
    }
}
```

### 将用户迁移至 uni-id@move-users-to-uni-id
### Move users to uni-id@move-users-to-uni-id
如果你想将自己系统内的用户导入至 uni-id，请按照以下步骤操作
If you want to import users in your own system to uni-id, please follow the steps below

#### 1. 准备自定义用户密码函数
#### 1. Prepare custom user password function
uni-id 默认使用了 `hmac-256` 密码加密算法，可能与你的加密算法不同，所以在迁移前需要自定义你的密码加密函数。
uni-id uses the `hmac-256` password encryption algorithm by default, which may be different from your encryption algorithm, so you need to customize your password encryption function before migration.
当用户第一次在 uni-id 中进行登录时，会先使用自定义验证密码(`verifyPassword`)函数进行验证，这样用户用之前的密码依旧能够登录，不需要用户重置密码。
When the user logs in in uni-id for the first time, it will first use the custom verification password (`verifyPassword`) function to verify, so that the user can still log in with the previous password, and the user does not need to reset the password.
在用户第一次登录成功后用户密码的加密算法规则将升级为配置文件中最新的算法规则。
After the user successfully logs in for the first time, the encryption algorithm rule of the user password will be upgraded to the latest algorithm rule in the configuration file.

首先在`uni-config-center/uni-id/config.json`文件中创建自定义类型的`paswordSecret`，如下：
First create a custom type of `paswordSecret` in the `uni-config-center/uni-id/config.json` file, as follows:
```json
{
  "passwordSecret": [
    {
      "type": "custom",
      "version": 1
    }
  ]
}
```

在 `uni-config-center/uni-id/custom-password.js` 文件（不存在请手动创建）中创建 `verifyPassword` 函数验证之前用户密码。
Create the `verifyPassword` function in the `uni-config-center/uni-id/custom-password.js` file (if it does not exist, please create it manually) to verify the previous user password.
```javascript
module.exports = {
    /**
     * 密码验证
     * @param {String} password 用户输入的密码
     * @param {Object} userRecord 用户信息
     * @param {Object} clientInfo 客户端信息
     * @param {Object} passwordSecret config.json 匹配到的 passwordSecret
     * @return {boolean}
     */
    verifyPassword: function ({password, userRecord, clientInfo, passwordSecret}) {
        return password === userRecord.password
    }
}
```

**注意**
**Notice**

如果配置文件中`passwordSecret`最新版本的 type 是 `custom`，那么所有用户的加密及校验都会使用自定义算法规则。
If the type of the latest version of `passwordSecret` in the configuration file is `custom`, then the encryption and verification of all users will use custom algorithm rules.

如果仅是为了迁移使用，请另外在 `passwordSecret` 中添加 `hmac-sha256` 类型算法，用于其他用户的加密与校验。
If it is only for migration, please add `hmac-sha256` type algorithm in `passwordSecret` for encryption and verification of other users.

这样只有之前的用户才会使用 `custom` 自定义规则，其他用户或者迁移后的新注册的用户会使用 `hmac-sha256` 算法规则。
In this way, only the previous users will use `custom` custom rules, and other users or newly registered users after migration will use `hmac-sha256` algorithm rules.

```json
{
  "passwordSecret": [
  {
    "type": "custom",
    "version": 1
  },
  {
    "type": "hmac-sha256",
    "version": 2
  }
  ]
}
```

#### 2. 导出用户数据
#### 2. Export user data
> 导出文件大小最大不超过 50MB，超过 50MB 请导出多个json文件
> The maximum export file size does not exceed 50MB, if it exceeds 50MB, please export multiple json files
> 
> 如果存在表A关联表B的字段的场景需要保证关联字段在A、B内是一致的（特别需要注意的是各种与_id关联的字段）
> If there is a scene where table A is associated with table B fields, it is necessary to ensure that the associated fields are consistent in A and B (special attention should be paid to various fields associated with _id)
> 
> [参考从文件中导入数据](https://uniapp.dcloud.net.cn/uniCloud/hellodb.html#import)
> [Refer to importing data from a file](https://uniapp.dcloud.net.cn/uniCloud/hellodb.html#import)

请将用户数据导出为json格式文件，注意json文件不是标准的json文件，请按照以下格式每行是一个json格式的用户记录导出：
Please export the user data as a json file. Note that the json file is not a standard json file. Please follow the format below to export a user record in json format per line:
```json
{"user_id":0,"nickname":"张三","age":25,"password":"123456"}
{"user_id":1,"nickname":"李四","age":18,"password":"000000"}
```
#### 3. 处理用户数据
#### 3. Processing user data
> 在 uni-id 中 userId 是系统自动创建的 _id，如果想保留之前用户的userId，可以将用户的 userId 映射为 _id，如果不保留 userId 建议删除 userId 字段，在数据导入中会创建 _id。
> In uni-id, userId is the _id automatically created by the system. If you want to keep the userId of the previous user, you can map the userId to _id. If you don’t want to keep the userId, it is recommended to delete the userId field, and _id will be created in the data import .
> 
> 注意`password_secret_version`字段，字段值需要修改为自定义密码类型的 `version`
> Pay attention to the `password_secret_version` field, the field value needs to be changed to the `version` of the custom password type

导入到 uni-id 之前，需要处理用户数据与 uni-id 字段的映射关系，见下方 uni-id 字段及说明：
Before importing to uni-id, you need to process the mapping relationship between user data and uni-id field, see the uni-id field and description below:

| 字段                      | 类型        | 默认值 | 说明                              |
| Field | Type | Default | Description |
|-------------------------|-----------|-----|---------------------------------|
| _id                     | -         | -   | 存储文档 ID（用户 ID），系统自动生成           |
| _id | - | - | Storage document ID (user ID), automatically generated by the system |
| ali_openid              | string    | -   | 支付宝平台openid                     |
| ali_openid | string | - | Alipay platform openid |
| apple_openid            | string    | -   | 苹果登录openid                      |
| apple_openid | string | - | Apple login openid |
| avatar                  | string    | -   | 头像地址 （完整路径）                     |
| avatar | string | - | Avatar address (full path) |
| avatar_file             | file      | -   | 用file类型方便使用uni-file-picker组件    |
| avatar_file | file | - | Use the file type to facilitate the use of uni-file-picker components |
| comment                 | string    | -   | 备注                              |
| comment | string | - | Remarks |
| dcloud_appid            | array     | -   | 允许登录的客户端的appid列表                |
| dcloud_appid | array | - | list of client appids allowed to log in |
| department_id           | array     | -   | 部门ID                            |
| department_id | array | - | department ID |
| email                   | string    | -   | 邮箱地址                            |
| email | string | - | email address |
| email_confirmed         | int       | 0   | 邮箱验证状态：0 未验证 1 已验证              |
| email_confirmed | int | 0 | Email verification status: 0 unverified 1 verified |
| gender                  | int       | 0   | 用户性别：0 未知 1 男性 2 女性             |
| gender | int | 0 | User gender: 0 unknown 1 male 2 female |
| invite_time             | timestamp | -   | 受邀时间                            |
| invite_time | timestamp | - | invitation time |
| inviter_uid             | array     | -   | 用户全部上级邀请者                       |
| inviter_uid | array | - | all inviters of the user |
| last_login_date         | timestamp | -   | 最后登录时间                          |
| last_login_date | timestamp | - | Last login time |
| last_login_ip           | string    | -   | 最后登录时 IP 地址                     |
| last_login_ip | string | - | Last login IP address |
| mobile                  | string    | -   | 手机号码                            |
| mobile | string | - | mobile phone number |
| mobile_confirmed        | int       | 0   | 手机号验证状态：0 未验证 1 已验证             |
| mobile_confirmed | int | 0 | mobile phone number verification status: 0 unverified 1 verified |
| my_invite_code          | string    | -   | 用户自身邀请码                         |
| my_invite_code | string | - | user's own invitation code |
| nickname                | string    | -   | 用户昵称                            |
| nickname | string | - | user nickname |
| password                | password  | -   | 密码，加密存储                         |
| password | password | - | password, encrypted storage |
| password_secret_version | int       | -   | 密码使用的passwordSecret版本           |
| password_secret_version | int | - | passwordSecret version used for password |
| realname_auth           | object    | -   | 实名认证信息；见下方 realname_auth 结构     |
| realname_auth | object | - | real name authentication information; see the realname_auth structure below |
| register_date           | timestamp | -   | 注册时间                            |
| register_date | timestamp | - | registration time |
| register_ip             | string    | -   | 注册时 IP 地址                       |
| register_ip | string | - | IP address when registering |
| role                    | array     | -   | 用户角色                            |
| role | array | - | user role |
| score                   | int       | -   | 用户积分，积分变更记录可参考：uni-id-scores表定义 |
| score | int | - | User points, point change records can refer to: uni-id-scores table definition |
| status                  | int       | -   | 用户状态：0 正常 1 禁用 2 审核中 3 审核拒绝     |
| status | int | - | user status: 0 normal 1 disabled 2 reviewing 3 reviewing rejected |
| token                   | array     | -   | 用户token                         |
| token | array | - | user token |
| username                | string    | -   | 用户名，不允许重复                       |
| username | string | - | username, duplicates are not allowed |
| wx_openid               | object    | -   | 微信各个平台openid；见下方 wx_openid 结构   |
| wx_openid | object | - | WeChat platform openid; see wx_openid structure below |
| wx_unionid              | string    | -   | 微信unionid                       |
| wx_unionid | string | - | WeChat unionid |
| qq_openid               | object    | -   | QQ各个平台openid；见下方 qq_openid 结构   |
| qq_unionid              | string    | -   | QQ unionid                      |
| third_party             | object    | -   | 三方平台凭证                          |
| third_party | object | - | third-party platform credentials |

**realname_auth 结构**
**realname_auth structure**
| 字段| 类型| 默认值 | 说明|
| Field | Type | Default | Description |
|---|---|---|---|
|auth_date|timestamp|-|认证通过时间|
|auth_date| timestamp|-|authentication passed time|
|auth_status|int|0|认证状态：0 未认证 1 等待认证 2 认证通过 3 认证失败|
| auth_status| int| 0|authentication status: 0 unauthenticated 1 waiting for authentication 2 authentication passed 3 authentication failed|
|contact_email|string|-|联系人邮箱|
| contact_email| string|-|contact email|
|contact_mobile|string|-|联系人手机号码|
| contact_mobile| string|-|contact phone number|
|contact_person|string|-|联系人姓名|
|contact_person| string|-|contact name|
|id_card_back|string|-|身份证反面照 URL|
| id_card_back| string|-| ID card back photo URL|
|id_card_front|string|-|身份证正面照 URL|
| id_card_front| string|-|ID card front photo URL|
|identity|string|-|身份证号码/营业执照号码|
| identity| string|-|ID card number/business license number|
|in_hand|string|-|手持身份证照片 URL|
| in_hand| string|-|hand-held ID photo URL|
|license|string|-|营业执照 URL|
| license| string|-|Business license URL|
|real_name|string|-|真实姓名/企业名称|
| real_name| string|-|real name/company name|
|type|int|-|用户类型：0 个人用户 1 企业用户|
| type| int|-|User type: 0 individual user 1 enterprise user|

**wx_openid 结构**
**wx_openid structure**
| 字段                      | 类型        | 默认值 | 说明                              |
| Field | Type | Default | Description |
|---|---|---|---|
|app|string|-|app平台微信openid|
| app| string|-| app platform WeChat openid|
|mp|string|-|微信小程序平台openid|
| mp| string|-|WeChat MiniApp platform openid|
|h5|string|-|微信公众号登录openid|
| h5| string|-|WeChat official account login openid|
|web|string|-|PC页面扫码登录openid|
| web| string|-| PC page scan code login openid|

**qq_openid 结构**
**qq_openid structure**
| 字段                      | 类型        | 默认值 | 说明                              |
| Field | Type | Default | Description |
|---|---|---|---|
|app|string|-|app平台QQ openid|
| app| string|-| app platform QQ openid|
|mp|string|-|QQ小程序平台openid|
| mp| string|-| QQ MiniApp platform openid|

#### 4. 导入数据
#### 4. Import data
在 [uniCloud 控制台](https://unicloud.dcloud.net.cn/)，找到 uni-id 所在的服务空间，在云数据库中选中 `uni-id-users` 表，点击导入按钮，上传用户数据json文件即可。
In [uniCloud console](https://unicloud.dcloud.net.cn/), find the service space where uni-id is located, select the `uni-id-users` table in the cloud database, click the import button, and upload users The data json file is fine.

[从文件中导入数据说明](https://uniapp.dcloud.net.cn/uniCloud/hellodb.html#import)
[Instructions for importing data from a file](https://uniapp.dcloud.net.cn/uniCloud/hellodb.html#import)
