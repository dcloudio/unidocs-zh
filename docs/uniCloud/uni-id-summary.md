本文档适用于`uni-id 4.0.0`及以上版本，旧版本文档请访问：[uni-id 3.x.x 文档](uniCloud/uni-id-3.md)

## 概述

99%的应用，都要开发用户注册、登录、发送短信验证码、修改密码、密码加密保存、密码防探测、token管理、注册用户统计等众多功能，从前端到后端都需要。

为什么不能有一个开源的通用项目，避免大家的重复开发呢？

`uni-id`应需而生。

`uni-id`为`uniCloud`开发者提供了开源、易用、安全、丰富、可扩展的用户管理框架。

[clientDB](uniCloud/clientDB)、[DB Schema](uniCloud/schema)、[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)、[uni-admin](uniCloud/admin)，这些产品都基于`uni-id`的账户体系。可以说`uni-id`是uniCloud不可或缺的基础能力。

## 组成部分


1. 云数据库

十几张用户相关的[opendb数据表](uniCloud/opendb)，如[uni-id-users](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json)、[uni-id-roles](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-roles/collection.json)、[uni-id-permissions](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-permissions/collection.json)。

主表为 `uni-id-users` 表，保存用户的基本信息。扩展字段有很多，如实名认证数据、工作履历数据。由于MongoDB的特性，开发者可以自由扩展字段。

所有`uni-id`的数据表，不管在HBuilderX中新建DB Schema还是在uniCloud web控制台新建表的界面上，都可以选择模板直接建好。

2. 云端核心[公共模块](https://uniapp.dcloud.io/uniCloud/cf-common.html) [uni-id-common](uniCloud/uni-id-common.md)

uni-id-common公共模块包含了账户体系服务端的核心权限、token管理，内置在每个uniCloud服务空间里。

uniCloud众多功能（如DB Schema的权限、uni-id-co）都依赖uni-id-common。如果开发者想要在自己的云函数里校验前端用户token，也需要引用uni-id-common公共模块。

uni-id-common这个uni_modules包括了4张opendb表，分别为：
- 用户表 uni-id-users
- 权限表 uni-id-permissions
- 角色表 uni-id-roles
- 用户日志表 uni-id-log

3. 云端一体页面模板 [uni-id-pages](uniCloud/uni-id-pages)

基于uni-id-common，DCloud还提供了一组完整的前端页面和后端[云对象](https://uniapp.dcloud.io/uniCloud/cloud-obj.html) ，合称`uni-id-pages`。

uni-id-pages的功能包括：用户注册（含用户协议、隐私协议）、退出、修改密码、忘记密码等各种功能，同时适配PC宽屏和各种手机平台（App、H5、小程序）。

此外，DCloud的其他产品也为uni-id提供了众多支持：
- [uni-admin后台管理框架](https://uniapp.dcloud.io/uniCloud/admin.html)，为uni-id提供了现成的用户、角色、权限的后台管理功能，以及注册用户统计报表。
- uni-app框架内置的uniCloud客户端SDK，自动处理了uni-id的token的网络传输（uni-app 2.7.13+版本）、续期（uni-app 3.4.13 +版本），也就是说开发者无需自己管理token了。

以上全部是开源的。

**历史遗留**

在HBuilderX 3.5之前，DCloud提供了一个公共模块[uni-id](https://ext.dcloud.net.cn/plugin?id=2116)（注意不叫uni-id-common）和一个示例性云函数uni-id-cf（集成在uni-starter和uni-admin中）。

老的公共模块uni-id是一个大而全的账户管理公共模块，体积太大，不适合被其他云函数引用。比如某个业务云函数需要校验用户token，引用的uni-id公共模块还包含了忘记密码的代码，很浪费资源。

在云对象发布之前，DCloud基于云函数方式提供了uni-id-cf。但在HBuilderX 3.5 以后，推荐使用基于云对象的[uni-id-pages](uniCloud/uni-id-pages)，代码更简单清晰。

从HBuilder 3.5起，[uni-id](https://ext.dcloud.net.cn/plugin?id=2116)和uni-id-cf都将被淘汰，不再更新。老的公共模块uni-id被拆开，变成了[uni-id-common](uniCloud/uni-id-common)公共模块和uni-id-co云对象。

uni-id-common很精简，只包括token和权限，适合被所有云函数引用。

uni-id-co则是一个更加比uni-id-cf更完善和规范的用户管理的云对象。

老版升级指南，[详见](uniCloud/uni-id-pages?id=m-to-co)

## uni-id 对开发者的价值

1. 节省了大量重复劳动
2. 降低门槛，前端开发者无需研究数据库如何设计、账户安全如何保障
3. 多系统打通用户和上下游协同

关于第三点，着重强调下。

一个应用，往往需要集成多个功能模块。比如一个电商应用，需要一个基本电商模板，还需要客服聊天模板、统计看板模板。

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
- 三方登录：App中的微信登录和Apple ID和QQ登录、微信小程序中的微信登录、支付宝小程序中的支付宝账户登录 、QQ小程序中的QQ登录

关于还缺少的部分，哪些DCloud在完善，哪些希望开发者给共同完善开源项目，计划与边界公布如下：

1. 无计划做的

百度、快手、快应用等小程序的登录，以及微博等App端的登录。

2. 有计划做但不是近期计划

web的微信扫码登录、字节小程序登录、facebook等海外主流社交账户登录、邮箱验证集成、活体检测。

上述功能均欢迎其他开发者在开源项目上提交pr，或在插件市场发布插件，共同完善`uni-id`。

其他方面，各种常见开源项目如discuz、wordPress、ecshop的用户导入插件，不属于`uni-id`主工程，欢迎开发者单独提交插件到插件市场。

## 快速上手@start

uni-id-common的插件市场地址为：[uni-id-common插件](【待定】)。但一般不需要单独下载这个插件，但更新uni-id-common公共模块时需要从这里下载更新。

一般推荐直接使用uni-starter项目模板来开始开发，或者在新项目里导入uni-id-pages页面模板来使用。

uni-id云端的配置是依赖[uni-config-center](/uniCloud/uni-config-center)公用模块的，在工程目录uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json。（如未安装uni-config-center需安装，如缺少目录需手动创建）

uni-id云端同时依赖了公共模块[uni-captcha](https://ext.dcloud.net.cn/plugin?id=4048)，这个功能模块负责生成和校验验证码，进行人机验证。

体验uni-id需保证uniCloud服务空间至少有数据表`uni-id-users`、`opendb-verify-codes`（验证码表）

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

## 云端配置config.json的说明@config

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
+ 如果使用`sendSmsCode`接口发送短信需要前往[https://dev.dcloud.net.cn/uniSms](https://dev.dcloud.net.cn/uniSms)充值短信额度，配置`config.json`的`service`字段，字段说明见下方示例
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
  "autoSetInviteCode": false, // 是否在用户注册时自动设置邀请码，默认不自动设置
  "forceInviteCode": false, // 是否强制用户注册时必填邀请码，默认为false
  "app": { // 如果你使用旧版本uni-id公共模块而不是uni-id-common这里可能配置的是app-plus，务必注意调整为app
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
  "web": { // 如果你使用旧版本uni-id公共模块而不是uni-id-common这里可能配置的是h5，务必注意调整为web
    "tokenExpiresIn": 14400,
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
      "smsSecret": "your sms secret", // 短信密钥secret，开通短信服务处可以看到
	  "scene": {
		  "bind-mobile": { // 对绑定手机号场景的配置
			  "templateId": "your template id", // 绑定手机号使用的短信验证码模板
			  "codeExpiresIn": 240 // 绑定手机号验证码过期时间
		  }
	  }
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

在token还有5分钟过期时调用checkToken接口会返回新的token和新的token的过期时间（新token有效时间也是2小时）。

## token令牌

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

## 用户角色权限@rbac

为什么需要角色权限管理？
- 企业管理系统，比如[uniCloud admin](/uniCloud/admin)，除了超级管理员，不同账号通常需根据职位、责任设定不同的系统权限。比如部门管理员、Hr。
- [clientDB](/uniCloud/database)允许前端直接操作数据库，但部分字段应该是系统计算或管理员设置的，比如文章的阅读数、收藏数及是否加精置顶，这些字段不允许普通用户在前端通过clientDB直接修改，此时也需要通过权限控制来保证系统的安全稳定。 

`uni-id`基于经典的RBAC模型实现了角色权限系统。

### RBAC模型简介

RBAC：Role-Based Access Control，基于角色的访问控制。

其基本思想：对系统操作的各种权限不是直接授予具体的用户，而是在用户集合与权限集合之间建立一个角色集合。每一种角色对应一组相应的权限。一旦用户被分配了适当的角色后，该用户就拥有此角色的所有权限。

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/431878b0-0ca0-11eb-8a36-ebb87efcf8c0.png)

这样做的好处是，增强系统管理的扩展性，对于批量用户的权限变更，仅需变更该批用户角色对应权限即可，而无需对该批每个用户变更权限。

这个模型有三个关键名词：用户、角色、权限：
- 用户：使用系统的人，一个用户可以同时有多个角色，比如内容审核员、比如部门管理员
- 角色：权限的集合，一个角色可以有多个权限。比如内容审核员这个角色，有隐藏帖子权限、有帖子加精权限；而部门管理员这个角色，有给本部门新增员工权限、有删除本部门员工的权限。
- 权限：数据权限或业务权限，例如：删除用户、帖子加精等

用户、角色、权限都存在数据库了，都可以动态创建和修改。当权限对应的代码实现完成后，用户的新入、退出、角色升迁都无需再修改代码，在uni-admin后台的web界面可以由运维人员可视化的给每个用户调整角色、给每个角色调整权限。

### 用户

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

### 角色

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

### 权限

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

### 其他说明

uni-id将用户的角色权限缓存在token内。详情参考：[缓存角色权限](uniCloud/uni-id?id=cache-permission-in-token)。

如下是通过token判断权限的简单示例：

```js
// 简单的权限校验示例
function hasPermission(token, permission) {
  const {
	  uid,
	  role,
	  permission
  } = await uniID.checkToken(token)
  return role.includes('admin') || checkTokenRes.permission.includes(permission) // admin用户的permission为空数组，但是拥有所有权限
}
```

注意：**在uniCloud admin中，封装了可视化的用户、权限、角色的管理，新增删除修改均支持。**无需自己维护。[详见](https://uniapp.dcloud.net.cn/uniCloud/admin?id=mutiladmin)

## 数据库结构@db-schema

`uni-id`的所有数据表，都在[opendb](https://gitee.com/dcloud/opendb/)规范中。

在unicloud [web控制台](https://unicloud.dcloud.net.cn/) 新建数据表时，可以从`uni-id`的模板分类里找到下面的表，并一键创建这些表。

### 用户表@user-table

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

> opendb中uni-id-users表1.0.0调整为下面的结构，uni-id-co使用此标准。如何处理旧数据请参考：[自uni-id升级为uni-id-co+uni-id-common](uniCloud/uni-id-summary.md?id=m-to-co)

| 字段		| 类型	| 必填	| 描述					|
| -------	| ------| ----	| --------				|
| app		| String| 否	| app平台微信openid		|
| mp		| String| 否	| 微信小程序平台openid	|
| h5		| String| 否	| 微信网页应用openid	|
| web		| String| 否	| 微信公众号应用openid	|

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

#### 用户表索引使用注意@uni-id-users-indexes

目前opendb内提供的uni-id-users表包含完整的索引，数据库在索引量多且频繁更新的情况下可能会出现写入缓慢的情况，因此推荐开发者在使用uni-id-users表时可以删除没有用到的索引。

例：项目内只使用了微信登录，不使用其他登录方式，可以只保留`wx_unionid、wx_openid.mp-weixin、wx_openid.app-plus`这些账号相关的索引，删除其他登录方式的索引（比如username、mobile）

不了解索引请参考：[索引](/uniCloud/db-index.html)

### 验证码表

表名：`opendb-verify-codes` 

**uni-id 2.0.0版本以前，使用的表名为uni-verify，2.0.0+起改为新表名**

该表的前缀不是uni-id，意味着该表的设计用途是通用的，不管是uni-id的手机号验证码，或者支付等关键业务需要验证码，都使用此表。

每条验证信息，都记录在本表中。uni-id不会自动删除本表的历史数据，数据保留有效期需要开发者自行管理，可以在云函数中设置一个定时运行来清理过期数据。

| 字段			| 类型		| 必填	| 描述									|
| ----------	| ---------	| ----	| --------------------------------------|
| \_id			| Object ID	| 是	| 存储文档 ID（验证码 ID），系统自动生成|
| mobile		| String	| 是	| 手机号，和邮箱二选一					|
| email			| String	| 是	| 邮箱，和手机号二选一					|
| code			| String	| 是	| 验证码								|
| scene			| String	| 是	| 验证场景								|
| state			| Integer	| 是	| 验证状态：0 未验证 1 已验证 2 已作废	|
| ip			| String	| 是	| 请求时 IP 地址						|
| create_date	| Timestamp	| 是	| 创建时间								|
| expired_date	| Timestamp	| 是	| 验证码过期时间						|

### 角色表

表名：`uni-id-roles`

| 字段				| 类型			| 必填| 描述																	|
| ----------	| ---------	| ----| --------------------------------------|
| \_id				| Object ID	| 是	| 系统自动生成的Id											|
| role_id			| String		| 是	| 角色唯一标识													|
| role_name		| String		| 否	| 角色名，展示用												|
| permission	| Array			| 是	| 角色拥有的权限列表										|
| comment			| String		| 否	| 备注																	|
| created_date| Timestamp	| 是	| 角色创建时间													|

### 权限表

表名：`uni-id-permissions`

| 字段						| 类型			| 必填| 描述																	|
| ----------			| ---------	| ----| --------------------------------------|
| \_id						| Object ID	| 是	| 系统自动生成的Id											|
| permission_id		| String		| 是	| 权限唯一标识													|
| permission_name	| String		| 否	| 权限名，展示用												|
| comment					| String		| 否	| 备注																	|
| created_date		| Timestamp	| 是	| 权限创建时间													|

### 更多表

还有更多uni-id的配套数据表，可以在uniCloud [web控制台](https://unicloud.dcloud.net.cn/)新建表时选择相应模板。此处不再详述，仅罗列清单：

- 积分表：uni-id-scores
- 地址信息表：uni-id-address
- 订单表：uni-id-base-order
- 设备表：uni-id-device
- 关注粉丝表：uni-id-followers
- 日志表：uni-id-log
- 任务表：uni-id-task
- 任务日志表：uni-id-task-log

## 常量@constants

### 用户状态@user-status

对应`uni-id-users`表的status字段

|值	|说明		|
|--	|--			|
|0	|正常状态	|
|1	|封禁状态	|
|2	|审核中		|
|3	|审核失败	|
|4	|注销状态	|

### log类型@log-type

对应`uni-id-log`表的type字段

|值			|说明			|
|--			|--				|
|logout		|登出			|
|login		|登录			|
|register	|注册			|
|reset-pwd	|重置密码		|
|bind-mobile|绑定手机		|
|bind-weixin|绑定微信账号	|
|bind-qq	|绑定QQ账号		|
|bind-apple	|绑定苹果账号	|
|bind-alipay|绑定支付宝账号	|

### 手机、邮箱验证码使用场景@sms-type

对应`opendb-verify-codes`表短信、邮箱验证码相关记录的的scene字段

|值					|说明					|
|--					|--						|
|login-by-sms		|短信验证码登录			|
|reset-pwd-by-sms	|短信验证码重置密码		|
|bind-mobile-by-sms |短信验证码绑定手机号	|

### 图形验证码使用场景@captcha-scene

对应`opendb-verify-codes`表图形验证码相关记录的scene字段

|值					|说明						|
|--					|--							|
|login-by-pwd		|用户名/手机/邮箱+密码登录	|
|login-by-sms		|短信验证码登录				|
|reset-pwd-by-sms	|短信验证码重置密码			|
|send-sms-code		|发送短信验证码				|
|bind-mobile-by-sms	|短信验证码绑定手机号		|

## uniIdRouter自动路由@uni-id-router

> 新增于 HBuilderX 3.5.0

开发者可以在项目的`pages.json`内配置需要登录的页面，登录页面路径等信息，uniCloud会自动在需要登录且客户端登录状态过期或未登录时跳转到登录页面。

结合以下代码及注释了解如何使用`uniIdRouter`

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
			"needLogin": false
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

与此功能对应的有两个uniCloud客户端api，`uniCloud.onNeedLogin()`和`uniCloud.offNeedLogin()`，开发者在监听onNeedLogin事件后，框架就不再自动跳转到登录页面，而是由开发者在onNeedLogin事件内自行处理。详情参考：[uniCloud.onNeedLogin](uniCloud/client-sdk.md?id=on-need-login)

自动跳转到登录页面时会携带uniIdRedirectUrl参数，其值为`encodeURIComponent(${跳转前的页面（包含路径和参数的完整页面地址）})`，如果希望用户登录后跳转回之前的页面，可以使用此参数实现。

以下为登录页面跳转到之前访问页面的简单示例：

```html
// pages/login/login.vue
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
				// ...执行登录操作
				if (this.uniIdRedirectUrl) {
					uni.redirectTo({
						url: this.uniIdRedirectUrl
					})
				}
			}
		}
	}
</script>
<style>
</style>
```

**注意**

- pages.json内有`uniIdRouter`节点上述逻辑才会生效，自HBuilderX 3.5.0起创建空项目模板会自动配置空的`uniIdRouter`节点

## 错误码@errcode

|错误码									|错误信息								|说明													|
|----									|----									|----													|
|0（数字）								|成功									|-														|
|uni-id-token-expired					|登陆状态失效，token已过期				|-														|
|uni-id-check-token-failed				|token校验未通过						|-														|
|uni-id-account-exists					|账户已存在								|-														|
|uni-id-account-not-exists				|账户不存在								|-														|
|uni-id-account-conflict				|用户账号冲突							|可能会由开发者手动更新数据库导致，正常情况下不应出现	|
|uni-id-account-banned					|此账号已封禁							|-														|
|uni-id-account-auditing				|此账号正在审核中						|-														|
|uni-id-account-audit-failed			|此账号审核失败							|-														|
|uni-id-account-closed					|此账号已注销							|-														|
|uni-id-captcha-required				|请输入图形验证码						|-														|
|uni-id-password-error					|用户名或密码错误						|-														|
|uni-id-invalid-username				|用户名不合法							|-														|
|uni-id-invalid-password				|密码不合法								|-														|
|uni-id-invalid-mobile					|手机号码不合法							|-														|
|uni-id-invalid-email					|邮箱不合法								|-														|
|uni-id-invalid-nickname				|昵称不合法								|-														|
|uni-id-invalid-param					|参数错误								|-														|
|uni-id-param-required					|缺少参数								|-														|
|uni-id-get-third-party-account-failed	|获取第三方账号失败						|-														|
|uni-id-get-third-party-user-info-failed|获取第三方用户信息失败					|-														|
|uni-id-mobile-verify-code-error		|手机验证码错误或已过期					|-														|
|uni-id-email-verify-code-error			|邮箱验证码错误或已过期					|-														|
|uni-id-admin-exists					|超级管理员已存在						|-														|
|uni-id-permission-error				|权限错误								|-														|
|uni-id-system-error					|系统错误								|-														|
|uni-id-set-invite-code-failed			|设置邀请码失败							|-														|
|uni-id-invalid-invite-code				|邀请码不可用							|-														|
|uni-id-change-inviter-forbidden		|禁止修改邀请人							|-														|
|uni-id-bind-conflict					|此账号（微信、QQ、手机号等）已被绑定	|-														|

## 多个应用复用相同uni-id-user表

有些系统由多个子应用组成，且没有各自独立服务空间，而是需要共享一个服务空间。此时就涉及一个问题，多个应用注册的账户都在uni-id-user表中，如何有效隔离。

比如一个打车软件，有乘客端、司机端、管理端，都要注册账户。它们也都有自己的DCloud appID（manifest.json里第一个配置）

uni-id-user表中有一个数组型字段`dcloud_appid`，可以存贮这个用户有权登陆哪个应用。

比如乘客端的appid是`__uni_111111`，司机端appid是`__uni_222222`，那么2个appid都存入`dcloud_appid`，即表示这个用户有权登录这2个应用。

### 隔离不同应用的用户@isolate-user

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
- 为兼容旧版本产生的旧数据，针对没有dcloud_appid字段的用户，允许登录任意端。
- 如果用户数据库记录中`dcloud_appid`字段是一个空数组，表示当前用户不能在任何客户端登录
- 已有dcloud_appid的用户，如果使用相同的用户标识（用户名、邮箱、手机、微信等）+ 不同的DCloud Appid登录会被判定为不同的用户，如果此时数据库没有对应的记录，会报用户不存在的错误

### 隔离不同应用的配置@isolate-config

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

> 数组每一项都是一个完整的配置文件，全部选项请参考：[uni-id 配置](uniCloud/uni-id-summary?id=config)

**注意：如果允许同一账号在不同端使用相同的账号+密码登录需要将不同端的passwordSecret设置成一样的**

```js
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

### 裂变@fission

在`config.json`（`uniCloud/cloudfuntions/common/uni-config-center/uni-id/config.json`，以下config.json均指此文件）内配置了`autoSetInviteCode: true`则在用户注册时会自动给设置不重复的6位邀请码

在`config.json`内配置了`forceInviteCode: true`则只有使用邀请码才可以注册。

`uni-id-co`在会产生注册行为的接口均添加了inviteCode参数，用于传递邀请码使注册用户接受邀请

### 修改passwordSecret@modifysecret

**注意：通常情况下设定好passwordSecret之后不需要再进行修改，使用此功能时请务必小心谨慎**

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

### 缓存角色权限@cache-permission-in-token

使用`uni-id-common`时，token内会缓存用户的角色权限。

为什么要缓存角色权限？要知道云数据库是按照读写次数来收取费用的，并且读写数据库会拖慢接口响应速度。

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

### 自定义token内容@custom-token

uni-id-common支持在token内缓存用户的角色权限。但是某些情况下开发者可能还希望缓存一些别的东西，以便在客户端能方便的访问（**注意：不可缓存机密信息到token内**）。

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

- 不要删除原始token内的字段

### 自定义国际化语言@custom-i8n

完整词句列表参考：

- [uni-id-co中文语言包](https://gitcode.net/dcloud/uni-id-pages/-/blob/master/uni_modules/uni-id-pages/uniCloud/cloudfunctions/uni-id-co/lang/zh-hans.js)
- [uni-id-common中文语言包](https://gitcode.net/dcloud/uni-id-common/-/blob/master/src/lang/zh-Hans.js)

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



