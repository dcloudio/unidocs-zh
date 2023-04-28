注：本更新日志仅限uniCloud，包括uniCloud web控制台、uniCloud 云端运行环境。这些更新不跟随HBuilderX发版更新。

#### 2023-04-28
* 修复 vue3项目 发布到web端后 uniCloud.SSEChannel的open方法报错的Bug

#### 2023-04-25
* 新增 基于uni-push构建sse通道，在云函数 return 前也可以给客户端发消息 [详情](https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html)
* 新增 uni-ai 聊天接口支持steam流式响应 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream)
* 新增 uni-ai-chat云端一体页面模板，开源的ai聊天示例。比uni-im更简单 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai-chat.html)
* 新增 HBuilder新建opendb表时，如该表含有schema扩展js，会同时自动创建schema扩展js

#### 2023-04-11
* 【重要】新增 uni-cloud-ai 扩展库，提供AI对话能力 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html)
* 新增 JQL语法 触发器内副表读取事件增加 primaryCollection 参数，值为本次联表查询的主表表名
* 调整 JQL语法 schema 内配置的动态 enum 校验数据时移除仅枚举500条的限制

#### 2023-03-31
* 新增 jql语法支持查询某字段和另一个表指定字段相等的记录 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#enhanced-in)

#### 2023-03-16
* 新增 uni-cloud-s2s公共模块 用于解决uniCloud服务空间与传统服务器通讯时互相信任的问题 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-s2s.html)
* 优化 安全网络 微信小程序端支持非uni-id的应用 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#mp-weixin-without-uni-id-pages)
* 升级 阿里云 客户端连接云函数最大超时时间由20秒调整为40秒
* 升级 阿里云 云函数URL化的默认域名访问QPS限制由100调整为1000
* 升级 uniCloud控制台 阿里云 前端网页托管 cdn刷新次数限制由每小时3次调整为每小时10次
* 修复 uniCloud控制台 阿里云 创建数据表时达到集合数量上限后删除集合不能实时刷新数量限制的Bug
* 修复 阿里云 部分事务操作报错不清晰的Bug
* 修复 本地调试插件 部分情况下修改本地js文件不能实时生效的Bug
* 修复 本地调试插件 部分情况下修改云函数依赖 package.json 文件被改为错误的内容的Bug [详情](https://ask.dcloud.net.cn/question/165273)
* 调整 本地调试插件 调用本地云函数时由每个项目固定4个云函数实例调整为最小2个实例最大8个实例
* 调整 本地调试插件 调用本地云函数时当所有实例均被占用时不再等待实例空闲，直接拒绝本次调用请求

#### 2023-03-14
* 调整 阿里云云函数url化默认域名QPS限制由100调整为1000

#### 2023-03-07
* 调整 阿里云客户端请求云函数最大超时时间由20秒调整为30秒

#### 2023-02-27
* 新增 uni实人认证，云端一体，金融级安全保障，包括云函数扩展库、web控制台 [详情](https://uniapp.dcloud.net.cn/uniCloud/frv/intro)
* 调整 客户端sdk开发调试时连本地网络的时机由应用启动时连接调整为访问本地云函数时才会连接
* 修复 客户端sdk uniCloud.init、uniCloud.database 方法在关联正式版阿里云服务空间时仍默认使用公测版 endpoint 的Bug

#### 2023-02-10
* 新增 JQL触发器 支持联表查询时副表的读取触发器，beforeReadAsSecondaryCollection 和 afterReadAsSecondaryCollection [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-timing)
* 调整 JQL触发器 参数内的 subCollection 改为 secondaryCollection。老参数仍可访问但会给出警告 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-param)
* 修复 JQL语法字符串格式查询语句内使用数组且其中包含负数时报错的Bug [详情](https://ask.dcloud.net.cn/question/161852)
* 修复 云对象未返回值时客户端报错的Bug [详情](https://ask.dcloud.net.cn/question/161852)
* 修复 阿里云正式版删除文件出错未返回错误信息的Bug
* 本地调试插件 修复 云函数内使用 console.warn 打印日志输出到控制台颜色不正确的Bug

#### 2023-02-06
* 调整 阿里云客户端请求云函数最大超时时间由10秒调整为20秒

#### 2023-02-03
* 调整 阿里云跨域配置对云存储生效，如果此前已配置跨域配置下次进行修改时会同步设置到云存储

#### 2023-01-18
* 新增 schema扩展js支持引入公共模块及扩展库 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#deps-of-jql)
* 新增 JQL触发器方法新增一些参数 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-param)

#### 2023-01-09
* JQL语法 修复 使用 setUser 方法未传 permission 参数且使用触发器时报错的Bug
* JQL语法 修复 add 方法传递的字段值为对象且其中包含null值时报错的Bug
* JQL语法 新增 数据库触发器增加 triggerContext 参数，用于在 before 和 after 内共享数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-context)
* 阿里云 调整 正式版云存储单文件100MB限制调整为5GB

#### 2023-01-06
* 阿里云 正式版云存储单文件100MB限制调整为5GB

#### 2022-12-16
* JQL语法 新增 触发器内可以获取用户信息和本次数据库操作结果 [用户信息](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#user-info)、[执行结果](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#result)
* JQL语法 新增 触发器内可以判断当前执行的语句是否和指定语句相同 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#is-equal-to-jql)
* JQL语法 调整 对于 schema 内定义的复杂类型数据（file、array、object）类型的字段，忽略赋给此字段的 null 值
* 本地调试插件 修复 在部分旧系统运行时本地调试服务启动失败的Bug [详情](https://ask.dcloud.net.cn/question/159343)
* 本地调试插件 修复 3.6.12版引出的 云函数 调试运行 无法进行Debug断点调试的Bug
* 本地调试插件 修复 阿里云正式版本地云函数内上传文件到云存储时，上传的文件无法在 uniCloud web 控制台看到的Bug [详情](https://ask.dcloud.net.cn/question/159109)

#### 2022-12-07
  + 本地调试插件 修复 云函数调用云函数时，被调用云函数无返回值导致报错的Bug

#### 2022-12-05
  + 【重要】新增 数据库扩展js，{表名}.schema.ext.js，可实现数据库触发器。推荐用触发器替代action，更安全 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger)
  + 【重要】uni-pay 2.0，从公共模块升级为包含前端页面、uni-pay-co云对象，让支付更加简单省心 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-pay.html)
  + JQL语法 修复 where 和 permission 内使用负数常量时报错的Bug [详情](https://ask.dcloud.net.cn/question/157993)
  + 本地调试插件 修复 调用 clientDB、jql扩展 时报找不到 action 的Bug [详情](https://ask.dcloud.net.cn/question/157997)
  + uniIdRouter 修复 vue3项目跳转时报错的Bug [详情](https://ask.dcloud.net.cn/question/158015)
  + 【重要】uni-id-co 新增 外部系统联登接口，可为外部系统创建与uni-id相对应的账号，使该账号可以使用依赖uniId的系统及功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#external)
  + uni-id-co 新增 设置密码接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#set-pwd)
  + uni-id-co 新增 URL化请求时鉴权签名验证 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#http-reqeust-auth)
  + uni-id-co 新增匹配到的用户不可在当前应用登录时的错误码 `uni-id-account-not-exists-in-current-app` [错误码说明](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#errcode)
  + uni-id-co 修复 微信登录时用户未设置头像的报错问题
  + uni-id-co 修复 无法从 clientInfo 中获取 uniIdToken
  + uni-id-pages 新增 登录后跳转设置密码页面配置项`setPasswordAfterLogin` [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#set-pwd-after-login)
  + uni-id-pages 新增 设置密码页面
  + uni-id-pages 优化 toast 错误提示时间为3秒
  + uni-admin 调整 群发短信功能的 schema 文件命名规范，将`batch-sms-template` `batch-sms-task` `batch-sms-result` 更改为 `opendb-sms-temlate` `opendb-sms-task` `opendb-sms-log` 以符合opendb规范

#### 2022-11-21
  + 【重要】阿里云商用版正式上线 [详情](https://ask.dcloud.net.cn/article/40144)

#### 2022-11-14
  + 【重要】新增 uni-im 云端一体的、全平台的、免费的、开源即时通讯系统 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
  + jql语法 修复 使用 add 数据库运算方法报错的Bug [详情](https://ask.dcloud.net.cn/question/156261)
  + jql语法 修复 使用部分 js 关键字导致查询条件或 field 报错的Bug
  + jql语法 修复 使用 getTemp 联表查询时，如果主表关联字段在 schema 内为数组类型但实际数据无此字段时报错的Bug
  + 云对象 新增 url 化支持通过多段 path 路径调用方法，以第一段作为云对象方法名 [详情](https://uniapp.dcloud.net.cn/uniCloud/http.html#request-co-url)
  + 本地调试插件 修复 HBuilderX 3.6.7 引出的断点进入nodejs内置模块的Bug
  + 安全网络 调整 统一错误码规范 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#err-code)
  + uni-id 升级密码加密算法，支持hmac-sha256加密 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password-safe)
  + uni-id 新增 开发者可以自定义密码加密规则 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#custom-password-encrypt)
  + uni-id 新增 支持将其他系统用户迁移至uni-id [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#move-users-to-uni-id)
  + uni-id 支持URL化方式请求 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#adapter-http)

#### 2022-10-27
  + 【重要】新增 安全网络 客户端校验功能，防止伪造的客户端请求服务器 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client)
  + 新增 `uni-clear-temp-data` 插件，用于自动清理数据库中的过期数据 [详情](https://ext.dcloud.net.cn/plugin?id=9826)
  + 修复 HBuilderX插件 `uni-`开头的 schema 文件 右键菜单缺少【opendb检查更新】的Bug
  + 修复 HBuilderX插件 本地云函数调用 redis 接口传较大的数据时报错的Bug [详情](https://ask.dcloud.net.cn/question/155804)
  + 修复 uniIdRouter 使用相对路径跳转时附带的 uniIdRedirectUrl 参数错误的Bug [详情](https://ask.dcloud.net.cn/question/155904)

#### 2022-10-18
  + 【重要】新增 `安全网络` uni-app客户端和unicloud实现安全通讯，验证客户端身份和加密数据，防刷利器 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html)
  + 新增 客户端sdk 新增 uniCloud.databaseForJQL 接口，拉齐在云函数中的写法。相比之前 database，返回值移除了多一层的 result [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb.html#jssdk)
  + 新增 客户端sdk uniCloud.importObject增加 parseSystemError 选项，用于处理云对象未捕获的错误或客户端网络错误，以便给用户展示友好的错误信息 [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + 修复 本地调试插件 连接本地云函数 require 出错时仅第一次报出错误的Bug
  + uni-id-co 新增 支持微信授权手机号登录方式 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin-mobile)
  + uni-id-co 新增 解绑第三方平台账号 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#unbind-third-account)
  + uni-id-co 新增 微信绑定手机号支持通过`getPhoneNumber`事件回调的`code`绑定 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#bind-mobile-by-mp-weixin)
  + uni-admin 新增 群发短信功能 [详情](https://uniapp.dcloud.net.cn//uniCloud/admin.html#群发短信)
  + uni-admin 修复 uni统计 App-Android 平台部分统计数据不准确的Bug [详情](https://ask.dcloud.net.cn/article/40097)
  + uni-admin 修复 uni统计 周/月数据不准确的Bug

#### 2022-09-22
  + 新增 uni-pay 支持微信支付V3接口 [详情](https://uniapp.dcloud.io/uniCloud/unipay?id=微信支付v3)

#### 2022-09-05
  + 新增 阿里云 支持申请云存储独立CDN域名，避免因其他服务空间违规导致云存储被封禁 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage.html#aliyun-cdn-domain)

#### 2022-09-01
  + 调整 本地调试插件 云对象运行参数配置文件改为 ${objectName}.param.js [详情](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#run-obj-param)
  + Adjust the local debugging plugin cloud object running parameter configuration file to ${objectName}.param.js [Details](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#run-obj-param)
  + 修复 本地调试插件 HBuilderX 3.5.5 版本引出的使用 push 扩展库导致其他云函数不能正常运行的Bug
  + Fixed the bug that the use of push extension library caused by the local debugging plugin HBuilderX 3.5.5 caused other cloud functions to fail to run normally
  + 修复 本地调试插件 HBuilderX 3.5.5 版本引出的连接本地云函数时偶发 `SIGN_PARAM_INVALID` 错误
  + Fixed the occasional `SIGN_PARAM_INVALID` error when connecting to a local cloud function caused by the local debugging plugin HBuilderX 3.5.5

#### 2022-08-25
  + 优化 阿里云 数据库超时时间由3秒调整为5秒
  + Optimized Alibaba Cloud database timeout time from 3 seconds to 5 seconds
  + 新增 阿里云 通过代理解决微信服务器需要固定IP的问题 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#http-proxy-client)
  + Added Alibaba Cloud to solve the problem that the WeChat server needs a fixed IP through a proxy [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#http-proxy-client)
  + 新增 提供了一批新API，更优雅的处理同实例多并发请求
  + Added a batch of new APIs to handle multiple concurrent requests of the same instance more gracefully
    - 新增 uniCloud.getRequestList 用于获取当前云函数实例内正在处理的请求的 requestId 列表 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-request-list)
    - Added uniCloud.getRequestList to get the requestId list of requests being processed in the current cloud function instance [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-request-list )
    - 云函数 新增 context.requestId 用于获取当前请求id [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#context)
    - Cloud Functions Added context.requestId to get the current request id [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#context)
    - 云对象 新增 this.getUniCloudRequestId() 用于获取当前请求id [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-request-id)
    - Cloud Object Added this.getUniCloudRequestId() to get the current request id [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-request-id)
  + 新增 云函数 uniCloud.getCloudInfos 获取云端信息。同时兼容有无并发请求的情况 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-cloud-infos)
  + Added cloud function uniCloud.getCloudInfos to get cloud information. Also compatible with concurrent requests [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-cloud-infos)
  + 新增 云函数 uniCloud.getClientInfos 获取客户端信息。同时兼容有无并发请求的情况 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-client-infos)
  + Added cloud function uniCloud.getClientInfos to get client information. At the same time compatible with or without concurrent requests [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-client-infos)
  + 修复 客户端sdk 未关联 uniCloud 服务空间时使用 uniCloud 对象导致报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3758)
  + Fix the bug of using uniCloud object when client sdk is not associated with uniCloud service space [Details](https://github.com/dcloudio/uni-app/issues/3758)
  + 修复 JQL 一个表内多个包含 parentKey 字段时树查询报错的Bug [详情](https://ask.dcloud.net.cn/question/151834)
  + Fix the bug of tree query error when there are multiple parentKey fields in a JQL table [Details](https://ask.dcloud.net.cn/question/151834)
  + 修复 本地调试插件 部分情况下全局对象复用导致的扩展库提示不正确的Bug [详情](https://ask.dcloud.net.cn/question/150357)
  + Fixed the bug that the extension library prompts incorrectly caused by the reuse of global objects in local debugging plugins in some cases [Details](https://ask.dcloud.net.cn/question/150357)
  + 优化 本地调试插件 持续调试会导致内存占用过高并且响应缓慢的Bug
  + Optimization Local debugging plugin Continuous debugging will lead to high memory usage and slow response bugs
  + 优化 uniIdRouter 支持对首页、直达页面进行拦截并跳转到登录页面
  + Optimized uniIdRouter to support intercepting the home page and direct page and jumping to the login page
  + 优化 uni-id-co 密码规则调整，废除之前的简单校验，允许配置密码强度 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password-strength)
  + Optimize the adjustment of uni-id-co password rules, abolish the previous simple verification, and allow to configure the password strength [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password- strength)
  + 调整 uni-id-co 存储用户 openid（`wx_openid.${mp|h5|app|web}`）时同时在`wx_openid.${mp|h5|app|web}_${DCloudAppId}`存储了一份副本，参考：[微信登录](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin)、[QQ登录](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-qq)
  + Adjust uni-id-co to store user openid (`wx_openid.${mp|h5|app|web}`) also in `wx_openid.${mp|h5|app|web}_${DCloudAppId}` A copy, reference: [WeChat login](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin), [QQ login](https://uniapp .dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-qq)
  + 调整 uni-id-co 依赖 uni-open-bridge-common 存储用户 `session_key`、`access_token` 等凭据 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#save-user-token)
  + Adjust uni-id-co to rely on uni-open-bridge-common to store user credentials such as `session_key`, `access_token` [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary. html#save-user-token)
  + 新增 uni-id-co 增加 beforeRegister 钩子用户在注册前向用户记录内添加一些数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#before-register)
  + Added uni-id-co Added beforeRegister hook to add some data to user records before registration [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#before- register)
  + 【重要】新增 uni-id-pages Web端支持微信登录（包括微信公众号内H5登录 和 普通浏览器内手机微信扫码登录）[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#weixinlogin)
  + [Important] Added uni-id-pages web terminal to support WeChat login (including H5 login in WeChat official account and mobile phone WeChat scan code login in ordinary browsers) [Details](https://uniapp.dcloud.net.cn /uniCloud/uni-id-pages.html#weixinlogin)
  + 新增 uni-id-pages 支持密码强度（是否必须包含大小写字母、数字和特殊符号以及长度）配置 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#config)
  + Added uni-id-pages to support password strength (whether it must contain uppercase and lowercase letters, numbers and special symbols and length) configuration [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages .html#config)
  + 新增 uni-id-pages 登录成功（全局）回调事件：`uni-id-pages-login-success`，支持通过[uni.$on](https://uniapp.dcloud.net.cn/api/window/communication.html#on)监听 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
  + Added uni-id-pages login success (global) callback event: `uni-id-pages-login-success`, support through [uni.$on](https://uniapp.dcloud.net.cn/api /window/communication.html#on) monitor [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
  + 新增 uni-open-bridge 开源库，统一管理微信等三方开放平台的凭据 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)
  + Added uni-open-bridge open source library, unified management of credentials of three-party open platforms such as WeChat [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)

#### 2022-08-05
  + 【重要】新增云函数ip防刷功能，避免大量无效请求导致云函数、数据库响应变慢 [详情](https://uniapp.dcloud.net.cn/uniCloud/ip-filter.html)
  + [Important] Added cloud function ip anti-brush function to avoid a large number of invalid requests causing slow cloud function and database responses [Details](https://uniapp.dcloud.net.cn/uniCloud/ip-filter.html)
  + 修复 部分场景下在 main.js 内使用 uniCloud 报错的Bug
  + Fix the bug of using uniCloud in main.js in some scenarios
  + 修复 uni-admin 在 vue3 项目中使用 uni.showLeftWindow 后组件上 showLeftWindow 值并没有更新的Bug [详情](https://ask.dcloud.net.cn/question/149618)
  + Fix the bug that the value of showLeftWindow on the component is not updated after uni-admin uses uni.showLeftWindow in the vue3 project [Details](https://ask.dcloud.net.cn/question/149618)
  + uni统计2 新增 前端数据上报周期配置项 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html#report-time)
  + uni statistics 2 Added front-end data reporting period configuration item [Details](https://uniapp.dcloud.net.cn/uni-stat-v2.html#report-time)

#### 2022-07-27
  + 新增 uni-admin uni统计支持上传 sourceMap，报错可准确回溯源码 [详情](https://uniapp.dcloud.io/uni-stat-v2.html#sourcemap-parse-error)
  + Added uni-admin uni statistics to support uploading sourceMap, and the sourcemap can be accurately traced when reporting errors [Details](https://uniapp.dcloud.io/uni-stat-v2.html#sourcemap-parse-error)

#### 2022-07-19
  + 【重要】新增 JQL Cache Redis。将 MongoDB 查询结果缓存到 Redis [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-cache-redis.html)
  + [Important] Added JQL Cache Redis. Cache MongoDB query results to Redis [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-cache-redis.html)
  + 新增 云对象支持URL化 [详情](https://uniapp.dcloud.net.cn/uniCloud/http.html#cloudobject)
  + Added support for URLization of cloud objects [Details](https://uniapp.dcloud.net.cn/uniCloud/http.html#cloudobject)
  + 新增 云对象支持定时触发 [详情](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#cloudobject)
  + Added cloud object support for timing trigger [Details](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#cloudobject)
  + 新增 uniCloud web控制台支持对服务空间进行成员管理 [详情](https://uniapp.dcloud.io/uniCloud/concepts/space.html#collaboration)
  + Added uniCloud web console to support member management of service space [Details](https://uniapp.dcloud.io/uniCloud/concepts/space.html#collaboration)
  + 修复 JQL操作成功时新增返回`errCode: 0`，兼容uniCloud响应体规范
  + Fix the new return `errCode: 0` when the JQL operation is successful, compatible with the uniCloud response body specification
  + 调整 uni-id-common 仍将token存储在用户表的token字段内，与旧版本uni-id保持一致
  + Adjusted uni-id-common to still store the token in the token field of the user table, consistent with the old version of uni-id
  + 修复 uni-id-common 部分情况下报read property 'reduce' of undefined的Bug
  + Fix the bug that read property 'reduce' of undefined is reported in some cases of uni-id-common
  + 优化 uni-admin 应用管理模块可管理App下载地址、小程序二维码等更多应用信息 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#app-manager)
  + Optimize the uni-admin application management module to manage more application information such as App download address, applet QR code [Details](https://uniapp.dcloud.io/uniCloud/admin.html#app-manager)
  + 调整 uni-admin 内置 统一发布页（uni-portal）插件 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#uni-portal)
  + Adjust uni-admin built-in unified publishing page (uni-portal) plugin [Details](https://uniapp.dcloud.io/uniCloud/admin.html#uni-portal)
  + 调整 uni-admin 内置 App升级中心（uni-upgrade-center）插件，并支持多应用商店更新 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#uni-upgrade-center)
  + Adjust the uni-admin built-in App Upgrade Center (uni-upgrade-center) plugin, and support multi-app store update [Details](https://uniapp.dcloud.io/uniCloud/admin.html#uni-upgrade-center)
  + 新增 uni-id-pages 允许覆盖uni-id-co内置校验规则 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#custom-validator)
  + Added uni-id-pages to allow overriding the built-in validation rules of uni-id-co [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#custom-validator)
  + 修复 uni-id-pages uni-id-co的logout接口时没有删除token的Bug
  + Fixed the bug that the token was not deleted when the logout interface of uni-id-pages uni-id-co
  + 修复 uni-id-pages app端 clientInfo.appVersionCode 为数字导致 uni-id-co 校验无法通过的Bug
  + Fixed the bug that the uni-id-co verification could not be passed because the clientInfo.appVersionCode of the uni-id-pages app side was a number
  + 修复 uni-id-pages 微信小程序调用uni-id-co接口报错的Bug [详情](https://ask.dcloud.net.cn/question/148877)
  + Fix the bug that the uni-id-pages WeChat applet calls the uni-id-co interface to report an error [Details](https://ask.dcloud.net.cn/question/148877)

#### 2022-07-07
  + 新增 uni-push2.0 全端支持（App、小程序、web）的云端一体的统一推送服务 [详情](https://uniapp.dcloud.io/unipush-v2.html)
  + Added uni-push2.0 cloud-integrated unified push service with full-end support (App, applet, web) [Details](https://uniapp.dcloud.io/unipush-v2.html)
  + 新增 腾讯云平台 数据万象，对云存储文件进行图片缩放、增加水印等计算功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage.html#%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86)
  + Added Tencent Cloud Platform Data Vientiane, which can perform image scaling, watermarking and other computing functions for cloud storage files [Details](https://uniapp.dcloud.net.cn/uniCloud/storage.html#%E6%95%B0 %E6%8D%AE%E5%A4%84%E7%90%86)
  + 新增 keepRunningAfterReturn 配置云函数是否能在 return 后继续运行，仅腾讯云 nodejs12 生效 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#keep-running)
  + Added keepRunningAfterReturn to configure whether the cloud function can continue to run after return. Only Tencent Cloud nodejs12 takes effect [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#keep-running)
  + 新增 Redis扩展库 增加 quit 接口用于断开 redis 连接 [详情](https://uniapp.dcloud.net.cn/uniCloud/redis.html#quit)
  + Added Redis extension library Added quit interface to disconnect redis connection [Details](https://uniapp.dcloud.net.cn/uniCloud/redis.html#quit)
  + 新增 JQL数据库管理 支持使用更新操作符 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#update-command)
  + Added JQL database management support to use update operator [Details](https://uniapp.dcloud.net.cn/uniCloud/jql.html#update-command)
  + 修复 uniIdRouter 在 loginPage 为 tabbar 页面时无法自动跳转的Bug
  + Fixed the bug that uniIdRouter could not automatically jump when the loginPage is the tabbar page
  + 调整 云函数 context 内增加 `uniIdToken`、`FUNCTION_TYPE` [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-callfunction.html#context)
  + Added `uniIdToken` and `FUNCTION_TYPE` to the cloud function context [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-callfunction.html#context)
  + 调整 云对象 cloudInfo 内增加 functionName、functionType [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-cloud-info)
  + Adjust the cloud object cloudInfo to add functionName and functionType [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-cloud-info)
  + 调整 云对象 clientInfo 内增加 source [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + Adjust the cloud object clientInfo to add source [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + 修复 本地调试插件 使用运行菜单运行云函数时可能出现日志顺序错误的Bug
  + Fix the bug that the log sequence may be wrong when using the run menu to run the cloud function in the local debugging plugin
  + 修复 本地调试插件 项目AppId由无权使用调整为有权使用时（重新获取AppId或获得所有者授权）重启项目不生效的Bug
  + Fixed the bug that restarting the project does not take effect when the AppId of the local debugging plugin is adjusted from unauthorized to authorized (re-acquire the AppId or obtain the owner's authorization)
  + 调整 本地调试插件 云函数本地运行时配置的运行参数clientInfo内字段调整 [详情](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#mock-client-info)
  + Adjust the local debugging plug-in to adjust the fields in the running parameter clientInfo of the cloud function local runtime configuration [Details](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#mock-client-info)
  + 新增 HBuilderX opendb schema文件 右键菜单增加【opendb检查更新】，支持从云端更新 opendb schema文件，并生成 JQL 升级迁移文件用于数据迁移
  + Added HBuilderX opendb schema file Right-click menu adds [opendb check update], supports updating opendb schema files from the cloud, and generates JQL upgrade migration files for data migration
  + 修复 HBuilderX 打开云对象子目录下的文件时按 Ctrl+r 运行菜单无运行云对象选项的Bug
  + Fix the bug that when HBuilderX opens the file in the cloud object subdirectory, there is no option to run the cloud object in the run menu by pressing Ctrl+r
  + 【重要】调整 uni统计2 版本记录复用 uni升级中心 的 opendb-app-versions表，废弃 uni-stat-app-versions表 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html#upgrade)
  + [Important] Adjust the uni statistics 2 version records to reuse the opendb-app-versions table of the uni upgrade center, and discard the uni-stat-app-versions table [Details](https://uniapp.dcloud.net.cn/uni- stat-v2.html#upgrade)
  + uni统计2 新增 启动时上报设备各种参数入库 opendb-device 表（目前没有可视化报表，开通 uni-push2.0 与 uni统计2.0 自动上报 push_clientid 到 opendb-device表）
  + uni statistics 2 added Report various parameters of the device into the opendb-device table at startup (there is currently no visual report, open uni-push2.0 and uni statistics 2.0 to automatically report push_clientid to the opendb-device table)
  + uni统计2 新增 admin端 app崩溃统计页面，补充崩溃率统计
  + uni statistics 2 Added crash statistics page on admin side app, supplemented crash rate statistics
  + uni统计2 修复 admin端 js报错统计页面，错误率计算不准确的Bug
  + uni statistics 2 Fix the bug of inaccurate error rate calculation on the admin side js error report statistics page
  + uni统计2 修复 admin端 切换版本或者修改时间等操作后，趋势图状态显示不正确的Bug
  + uni statistics 2 Fix the bug that the trend graph status is displayed incorrectly after switching versions or modifying time on the admin side
  + uni统计2 修复 admin端 部分页面首次进入时界面闪烁的问题
  + uni statistics 2 Fix the problem that the interface flickers when some pages are entered for the first time on the admin side

#### 2022-06-23
  + 【重要】uni-id重构。uni-id公共模块 + uni-id-cf云函数 的组合不再更新，取而代之的是 uni-id-common公共模块 + uni-id-pages云端一体模板
  + [Important] uni-id refactoring. The combination of uni-id public module + uni-id-cf cloud function is no longer updated, but replaced by uni-id-common public module + uni-id-pages cloud integrated template
    - 新增 uni-id-common公共模块。更小巧的公共模块，负责 uni-id 的 token 管理和权限校验 [详情](https://uniapp.dcloud.io/uniCloud/uni-id-common.html)
    - Added uni-id-common public module. A smaller public module, responsible for uni-id token management and permission verification [Details](https://uniapp.dcloud.io/uniCloud/uni-id-common.html)
    - 新增 uni-id-pages云端一体页面模板。包括一组前端页面 + uni-id-co云对象。包括用户注册、登录、忘记密码、个人中心等功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
    - Added uni-id-pages cloud integrated page template. Includes a set of frontend pages + uni-id-co cloud objects. Including user registration, login, forgotten password, personal center and other functions [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
  + 新增 uniIdRouter路由管理。在 pages.json 里直接定义哪些页面需要登录后才能访问 [详情](https://uniapp.dcloud.io/uniCloud/uni-id-summary.html#uni-id-router)
  + Added uniIdRouter routing management. Define which pages need to be logged in directly in pages.json [Details](https://uniapp.dcloud.io/uniCloud/uni-id-summary.html#uni-id-router)
  + 新增 uniCloud.onNeedLogin/offNeedLogin 用于监听/移除监听需要登录事件，需搭配 `uniIdRouter` 使用 [详情](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-need-login)
  + Added uniCloud.onNeedLogin/offNeedLogin for monitoring/removing monitoring of required login events, it needs to be used with `uniIdRouter` [Details](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-need -login)
  + 新增 uniCloud.onRefreshToken/offRefreshToken 用于监听/移除监听 token 更新事件 [详情](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-refresh-token)
  + Added uniCloud.onRefreshToken/offRefreshToken to monitor/remove monitor token update event [Details](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-refresh-token)
  + 调整 HBuilderX 中创建 uniCloud 项目时默认导入 uni-id-common公共模块，不再导入老版 uni-id公共模块
  + Adjusted to import the uni-id-common public module by default when creating an uniCloud project in HBuilderX, and no longer import the old uni-id public module
  + 调整 clientDB 优先依赖 uni-id-common，在没有 uni-id-common 时依赖老版 uni-id公共模块
  + Adjust clientDB to rely on uni-id-common first, and rely on the old uni-id common module when there is no uni-id-common
  + 修复 本地调试插件 HBuilderX 3.4.12引出的运行项目时部分场景下访问非关联服务空间云函数报错的Bug
  + Fix the bug that the local debugging plugin HBuilderX 3.4.12 leads to the error of accessing non-related service space cloud functions in some scenarios when running the project
  + 修复 本地调试插件 部分app平台、web平台切换云端云函数/本地云函数无效的Bug [详情](https://ask.dcloud.net.cn/question/147633)
  + Fix the local debugging plug-in Some app platforms, web platforms switch cloud cloud function / local cloud function invalid bug [Details](https://ask.dcloud.net.cn/question/147633)
  + 修复 clientDB action 的 after 内抛出错误不能被另一个 action 的 after 接收到的Bug [详情](https://ask.dcloud.net.cn/question/147099)
  + Fix the bug that the error thrown in the after of the clientDB action cannot be received by the after of another action [Details](https://ask.dcloud.net.cn/question/147099)
  + 修复 项目内无 uni-id 时运行 jql 文件报错的Bug
  + Fix the bug of running jql file error when there is no uni-id in the project
  + uniCloud控制台 新增 Redis 数据可视化管理
  + uniCloud console added Redis data visualization management

#### 2022-06-14
  + 修复 本地调试插件 3.4.0版本引出的客户端连接本地云函数时获取客户端 userAgent 为`HBuilderX`的Bug
  + Fix the bug that the client userAgent is `HBuilderX` when the client connected to the local cloud function caused by the local debugging plugin version 3.4.0
  + 修复 本地调试插件 云函数内使用`console.timeEnd`输出日志错乱的Bug
  + Fixed the bug of using `console.timeEnd` in the local debugging plug-in cloud function to output the log disorderly

#### 2022-06-01
  + 新增 uniCloud.onResponse/offResponse 接口用于监听云函数、云对象及clientDB的响应结果 [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk.html#on-response)
  + Added uniCloud.onResponse/offResponse interface to monitor the response results of cloud functions, cloud objects and clientDB [Details](https://uniapp.dcloud.net.cn/uniCloud/client-sdk.html#on-response)
  + 新增 uniCloud响应体规范 添加 newToken 字段，用于token续期。云对象会自动将token持久化存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)
  + Added uniCloud response body specification Added newToken field for token renewal. The cloud object will automatically store the token persistently [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)
  + 修复 uniCloud虚拟目录、以及uni_modules下的云对象目录，右键菜单，没有运行-本地云对象、调试运行-本地云对象的菜单的Bug
  + Fix the bug of uniCloud virtual directory and cloud object directory under uni_modules, right-click menu, there is no run-local cloud object, debug run-local cloud object menu
  + uniCloud控制台 新增 腾讯云云存储支持上传文件夹
  + uniCloud console Added Tencent Cloud cloud storage support for uploading folders
  + uni-admin 新增 uni统计 可通过选择「应用版本」查询数据
  + uni-admin Added uni statistics You can query data by selecting "App Version"
  + uni-admin 新增 uni统计 原生 app 崩溃页部分功能
  + uni-admin added some functions of uni statistics native app crash page
  + uni-admin 修复 uni统计 渠道页 table 表格最后一列空白的 bug
  + uni-admin fix the bug that the last column of the uni statistics channel page table is blank
  + uni-admin 修复 uni统计 场景分析页趋势图有数据却显示为 0 的 bug
  + uni-admin fix the bug that the trend graph of the uni statistics scene analysis page has data but it is displayed as 0
  + uni-admin 修复 系统设置中权限只能加载 20 条的 bug
  + uni-admin fix the bug that the permissions can only load 20 items in the system settings

#### 2022-05-23
  + 修复 HBuilderX 3.4.10 引起的关联服务空间运行云函数错误的Bug [详情](https://ask.dcloud.net.cn/question/145551)
  + Fix the bug that HBuilderX 3.4.10 caused the error of running cloud functions in the associated service space [Details](https://ask.dcloud.net.cn/question/145551)

#### 2022-05-20
  + uni-admin 优化 uni 统计的「统计首页」菜单移动到应用「首页」，添加了设备概览、注册用户概览
  + uni-admin Optimized the "Statistics Home" menu of uni statistics and moved it to the "Home" of the application, adding device overview and registered user overview
  + uni-admin 优化 「首页」显示逻辑，无 appid 时提示添加统计应用，可跳转"应用管理"的新增页
  + uni-admin optimizes the display logic of "Home", when there is no appid, you will be prompted to add a statistical application, and you can jump to the new page of "Application Management"
  + uni-admin 优化 精简登录逻辑，提升登录速度
  + uni-admin optimization Simplifies login logic and improves login speed
  + uni-admin 优化 uni 统计的「帮助」菜单移动到「文档与插件」
  + uni-admin Optimized uni stats Help menu moved to Documentation and Plugins
  + uni-admin 修复 从「首页」跳转「概况」时，url 的 query 丢失的 bug
  + uni-admin fix the bug that the query of url is lost when jumping from "Home" to "Overview"
  + uni-admin 修复 路由改变后面包屑未响应的 bug
  + uni-admin fix bug that breadcrumbs did not respond after route change

#### 2022-05-17
  + 新增 本地云函数调用云端redis，方便开发调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/redis.html#lcoal-function)
  + Added local cloud function to call cloud redis for easy development and debugging [Details](https://uniapp.dcloud.net.cn/uniCloud/redis.html#lcoal-function)
  + 新增 uni-cloud-jql 扩展库 databaseForJQL 方法支持传递 clientInfo，以便于在云对象中使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud.html#use-in-object)
  + Added uni-cloud-jql extension library databaseForJQL method to support passing clientInfo for easy use in cloud objects [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud.html#use-in -object)
  + 修复 本地运行插件 HBuilderX 3.4.8 引发的运行云函数时如未绑定服务空间会导致运行进程卡住的Bug
  + Fix the bug that the running process will be stuck if the service space is not bound when running the cloud function caused by the local running plugin HBuilderX 3.4.8
  + 修复 云对象 _before 内抛出错误后 _after 不执行的Bug [详情](https://ask.dcloud.net.cn/question/145046)
  + Fix the bug that _after does not execute after an error is thrown in the cloud object _before [Details](https://ask.dcloud.net.cn/question/145046)
  + uni-id 调整 绑定、解绑邮箱手机号接口，只要传递 code 参数就进行验证码校验即使传递的值为undefined
  + uni-id adjustment Bind and unbind the mailbox phone number interface, as long as the code parameter is passed, the verification code will be verified even if the passed value is undefined
  + uni-id 调整 用户表 `register_env` 内增加 `os_name` 字段用于区分注册时的客户端系统类型
  + uni-id adjustment Add the `os_name` field in the user table `register_env` to distinguish the client system type during registration
  + uni-id 修复 addUser 接口添加的用户无法使用密码登录的Bug [详情](https://ask.dcloud.net.cn/question/144670)
  + uni-id Fix the bug that users added by addUser interface cannot log in with password [Details](https://ask.dcloud.net.cn/question/144670)
  + uni-id 修复 config 文件语法错误时报`this.t is not a function`的Bug
  + uni-id fix the bug of `this.t is not a function` when the config file syntax is wrong
  + uni-captcha 新增 集成：创建、刷新、显示验证码的云端一体组件 [详情](https://ext.dcloud.net.cn/plugin?id=4048)
  + uni-captcha new integration: cloud-integrated component that creates, refreshes, and displays captcha [Details](https://ext.dcloud.net.cn/plugin?id=4048)
  + uni-starter 新增 短信验证码登录、绑定手机号码，防刷逻辑；当短信验证码输入错误超过2次，弹出图形验证码进行人机校验。[详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + uni-starter adds SMS verification code login, binding mobile phone number, anti-swipe logic; when the SMS verification code is entered incorrectly more than 2 times, the graphic verification code will pop up for man-machine verification. [Details](https://ext.dcloud.net.cn/plugin?id=5057)
  + uni-admin 新增 uni统计数据报表功能 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
  + uni-admin added uni statistics report function [Details](https://ext.dcloud.net.cn/plugin?id=3268)

#### 2022-05-08
  + 【重要】调整 vue2版本客户端App平台对应的`context.PLATFORM`值由 `app-plus` 改为 `app`。此调整对 uni-id 有影响，详情请参考文档：[uni-id preferedAppPlatform](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#prefered-app-platform)
  + [Important] Adjust the `context.PLATFORM` value corresponding to the client App platform of vue2 version from `app-plus` to `app`. This adjustment affects uni-id, please refer to the document for details: [uni-id preferedAppPlatform](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#prefered-app-platform)
  + 修复 云对象 自动展示交互界面时未能显示 loading 标题的Bug [详情](https://ask.dcloud.net.cn/question/144526)
  + Fixed the bug that the loading title could not be displayed when the cloud object automatically displayed the interactive interface [Details](https://ask.dcloud.net.cn/question/144526)
  + 调整 客户端将上报所有`getSystemInfoSync`返回的内容供云端使用，参考文档：[云函数内获取客户端信息](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#client-info)，[云对象内获取客户端信息](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + Adjusted that the client will report all the content returned by `getSystemInfoSync` for the cloud to use, refer to the document: [Get client information in cloud functions](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html# client-info), [Get client information in cloud object](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + uni-id 新增 getWeixinUserInfo 用于获取app平台微信登录用户的用户信息 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#get-weixin-user-info)
  + uni-id Added getWeixinUserInfo to get the user information of the WeChat login user on the app platform [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#get-weixin-user-info)
  + uni-id 新增 addUser 用于手动添加用户 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#add-user)
  + uni-id Added addUser for adding users manually [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#add-user)
  + uni-id 新增 resetPwdBySms 用于使用短信验证码重置密码 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#reset-pwd-by-sms)
  + uni-id Added resetPwdBySms to reset password using SMS verification code [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#reset-pwd-by-sms)
  + uni-id 调整 用户注册时记录用户注册环境到 register_env 字段 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#user-table)
  + uni-id adjustment Record the user registration environment to the register_env field during user registration [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#user-table)
  + uni-id 调整 用户注册时将注册 ip 移至 register_env 内
  + uni-id adjustment Move the registration ip to register_env when users register

#### 2022-04-28
  + 修复 云对象 自动展示错误提示界面时 toast 图标错误的Bug [详情](https://ask.dcloud.net.cn/question/142246)
  + Fix the bug that the toast icon is wrong when the cloud object automatically displays the error prompt interface [Details](https://ask.dcloud.net.cn/question/142246)
  + 新增 uniCloud 支持云对象本地运行和调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#run-local)
  + Added uniCloud support for running and debugging cloud objects locally [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#run-local)

#### 2022-04-24
  + 【重要】阿里云 调整 nodejs8 版本云函数使用的 nodejs 版本由 8.9.0 调整为 8.17.0
  + [Important] Alibaba Cloud adjusted the nodejs version used by cloud functions in nodejs8 version from 8.9.0 to 8.17.0

#### 2022-04-16
  + 【重要】阿里云 调整 单次数据库查询最大超时时间由1秒调整为3秒，需要重新上传云函数触发更新
  + [Important] Alibaba Cloud Adjustment The maximum timeout time for a single database query has been adjusted from 1 second to 3 seconds, and the cloud function needs to be re-uploaded to trigger the update
  + 【重要】云对象 调整 默认自动显示请求相关ui（等待loading，错误弹框） [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + [Important] Cloud object adjustment By default, the request-related ui will be automatically displayed (waiting for loading, error pop-up box) [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + JQL 修复 部分情况下过度限制了权限的Bug [详情](https://ask.dcloud.net.cn/question/142457)
  + JQL fix Bug that restricts permissions excessively in some cases [Details](https://ask.dcloud.net.cn/question/142457)
  + 本地调试插件 修复 HBuilderX 2.4.5 版本引出的部分场景下访问本地云函数误报公共模块冲突的Bug
  + Local debugging plug-in Fixed the bug that HBuilderX version 2.4.5 caused a false report of public module conflict when accessing local cloud functions in some scenarios.

#### 2022-04-08
  + 修复 3.4.4版本 引出的 clientDB 本地运行报错的Bug
  + Fix the bug of clientDB local running error caused by version 3.4.4

#### 2022-04-03
  + 修复 3.4.0版本引出的云函数子目录内文件引用公共模块失败的Bug
  + Fixed the bug that the file in the cloud function subdirectory introduced by version 3.4.0 failed to refer to the public module

#### 2022-03-25
  + 修复 公共模块右键管理依赖的公共模块不生效的Bug
  + Fix the bug that the public module that the right-click management of the public module depends on does not take effect
  + 修复 修复本地运行云函数调用云对象报错的Bug
  + Fix Fix the bug of calling cloud objects when running cloud functions locally

#### 2022-03-04
  + 【重要】新增`云对象`。将callfunction函数调用升级为模块化方式，网络不再传递json，前端对象化使用云API [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj)
  + [Important] Added `Cloud Object`. Upgrade the callfunction function call to a modular method, the network no longer transmits json, and the front-end objectification uses cloud API [details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj)
  + 【调整】发送短信API 从内置库剥离为扩展库 uni-cloud-sms [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms?id=extension)
  + [Adjustment] The send SMS API is stripped from the built-in library to the extension library uni-cloud-sms [Details](https://uniapp.dcloud.net.cn/uniCloud/send-sms?id=extension)
  + 【调整】一键登录API 从内置库剥离为扩展库 uni-cloud-verify [详情](https://uniapp.dcloud.net.cn/uniCloud/univerify?id=extension)
  + [Adjustment] One-click login API is stripped from the built-in library to the extension library uni-cloud-verify [Details](https://uniapp.dcloud.net.cn/uniCloud/univerify?id=extension)
  + 【调整】uniCloud本地调试插件 云函数右键本地运行时，此云函数内的callFunction由调用云端云函数改为调用本地云函数
  + [Adjustment] UniCloud local debugging plug-in When the cloud function is right-clicked and run locally, the callFunction in this cloud function is changed from calling the cloud cloud function to calling the local cloud function
  + 新增 jql语法 允许在 getTemp 联表查询的虚拟联表内使用 groupBy distinct [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?  id=lookup-with-temp)
  + Added jql syntax to allow groupBy distinct to be used in the virtual join table of getTemp join table query [Details](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + 优化 HBuilderX新建云函数的界面支持选择模板和依赖
  + Optimized the interface of HBuilderX new cloud function to support selection of templates and dependencies
  + 修复 阿里云 云函数删除文件接口返回数据格式不正确的Bug
  + Fix the bug that the data format returned by the Alibaba Cloud function delete file interface is incorrect
  + 修复 uni-cloud-jql扩展库 权限校验失败等场景未抛出错误的Bug
  + Fixed the bug that the uni-cloud-jql extension library did not throw errors in scenarios such as permission verification failure

#### 2022-02-22
  + 修复 JQL语法 getTemp 返回结果传递给组件属性时在微信小程序端报错的Bug [详情](https://ask.dcloud.net.cn/question/138308)
  + Fix the bug that the JQL syntax getTemp returns an error when the result is passed to the component property [Details](https://ask.dcloud.net.cn/question/138308)

#### 2022-01-14
  + 修复 3.3.7-alpha引出的JQL数据库管理无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/138139)
  + Fix the bug that JQL database management caused by 3.3.7-alpha cannot be used normally [Details](https://ask.dcloud.net.cn/question/138139)

#### 2022-01-12
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在临时表内使用 as 或其他运算操作 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + Added JQL syntax to use getTemp for join table query, support using as or other operations in temporary tables [Details](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with- temp)
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在虚拟联表内使用 foreignKey 方法指定要使用的 foreignKey 的归属的字段 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + Added JQL syntax. When using getTemp to query the linked table, it supports using the foreignKey method in the virtual linked table to specify the field of the foreignKey to be used [Details](https://uniapp.dcloud.net.cn/uniCloud/jql ?id=lookup-with-temp)
  + 新增 web控制台 阿里云 前端网页托管支持为指定路径开启 uni-app history 路由跳转模式支持 [详情](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=routing)
  + Added web console Alibaba Cloud front-end web hosting support to enable uni-app history routing jump mode support for specified paths [Details](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=routing)
  + 新增 uni-id 支持自定义国际化语言支持 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=custom-i8n)
  + Added uni-id support for custom international language support [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=custom-i8n)
  + 修复 uni-id 一键登录时未校验重复手机号是否已验证的Bug
  + Fixed the bug that the duplicate phone number was not verified when uni-id one-click login
  + 修复 uni-id Apple 登录时用户邮箱为空时报错的Bug
  + Fix the bug that the user's mailbox is empty when uni-id Apple login
  + 修复 uni-id 用户名密码登录时多个应用出现重复用户名登录报错的Bug
  + Fixed the bug of duplicate username and password errors in multiple applications when logging in with uni-id username and password
  + 修复 本地调试插件 打开非云函数根目录文件时使用运行菜单本地运行云函数报错的Bug
  + Fixed the bug that the local debugging plug-in reported an error when using the run menu to run the cloud function locally when opening the non-cloud function root directory file
  + 修复 本地调试插件 部分情况下客户端连接启用了 JQL 扩展的本地云函数报错的Bug
  + Fix the local debug plug-in. In some cases, the client connected to the local cloud function with the JQL extension enabled.

#### 已归档的历史版本
[更多已归档版本的更新日志](uniCloud/release-archive.md)