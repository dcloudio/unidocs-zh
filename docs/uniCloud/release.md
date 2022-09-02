注：本更新日志仅限uniCloud，包括uniCloud web控制台、uniCloud 云端运行环境。这些更新不跟随HBuilderX发版更新。
Note: This changelog is only for uniCloud, including the uniCloud web console and the uniCloud cloud operating environment. These updates do not follow HBuilderX release updates.

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

#### 2021-12-31
  + 修复 app 端使用腾讯云作为服务商时 在高版本 iOS 安装后第一次启动无法连接云函数的Bug [详情](https://ask.dcloud.net.cn/question/136725)
  + Fix the bug that the cloud function cannot be connected to the cloud function for the first time after the high version iOS is installed when using Tencent Cloud as the service provider on the app side [Details](https://ask.dcloud.net.cn/question/136725)
  + 修复 uniCloud本地调试插件 云函数内使用腾讯云自定义登录调用 createTicket 接口报错的Bug
  + Fixed the bug of calling the createTicket interface using Tencent Cloud custom login in the cloud function of the uniCloud local debugging plugin
  + 修复 uniCloud本地调试插件 启动调试服务时错误的提示集合未初始化的Bug
  + Fixed the bug that the uniCloud local debugging plugin was not initialized when the wrong prompt collection was started when the debugging service was started
  + 修复 clientDB getTemp 联表时部分情况下 where 方法无法正确筛选数据的Bug
  + Fixed the bug where the where method could not correctly filter data in some cases when clientDB getTemp was connected to the table
  + 修复 JQL扩展库 使用 getTemp 联表查询时报错的Bug [详情](https://ask.dcloud.net.cn/question/137089)
  + Fix the bug that the JQL extension library uses getTemp to query the linked table [Details](https://ask.dcloud.net.cn/question/137089)
  + 修复 multiSend 和 unicloud-db 组件搭配使用报错的Bug
  + Fix the bug of error when using multiSend and unicloud-db components together

#### 2021-12-14
  + 新增 支持云函数内使用 JQL 语法操作数据库的扩展库 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud)
  + Added an extension library that supports the use of JQL syntax in the cloud function to operate the database [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud)
  + 修复 腾讯云 geoNear 聚合阶段 maxDistance、minDistance 参数无法正常生效的Bug
  + Fixed the bug that the maxDistance and minDistance parameters of Tencent Cloud geoNear aggregation stage could not take effect normally
  + 修复 app 端 nvue 页面无法连接本地云函数的Bug [详情](https://ask.dcloud.net.cn/question/135703)
  + Fix the bug that the nvue page on the app side cannot connect to the local cloud function [Details](https://ask.dcloud.net.cn/question/135703)

#### 2021-11-30
  + 新增 批量短信 发送功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + Added batch SMS sending function [Details](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + 新增 uniCloud DB Schema 支持国际化 [详情](https://uniapp.dcloud.net.cn/collocation/i18n?id=schema)
  + Added uniCloud DB Schema to support internationalization [Details](https://uniapp.dcloud.net.cn/collocation/i18n?id=schema)

#### 2021-11-18
  + redis扩展能力 新增 支持腾讯云服务空间购买redis实例
  + Redis expansion capability Added support for purchasing redis instances in Tencent Cloud service space

#### 2021-11-10
  + 客户端sdk 修复 使用callback形式调用接口时 success 回调内抛出错误会触发 fail 回调的Bug
  + Client sdk fixes the bug that an error is thrown in the success callback will trigger the fail callback when the interface is called using the callback form
  + uni-pay 新增 苹果应用内购凭证校验接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/unipay?id=verifyreceipt)
  + uni-pay adds Apple in-app purchase certificate verification interface [Details](https://uniapp.dcloud.net.cn/uniCloud/unipay?id=verifyreceipt)
  + JQL数据库管理 修复 multiSend 接口报错的Bug
  + JQL database management Fix the bug of multiSend interface error reporting

#### 2021-10-21
  + clientDB 新增 调用 uniCloud.database 时传入其他服务空间配置，获取其他服务空间的数据库实例 [详情](https://uniapp.dcloud.net.cn/uniCloud/init?id=init-db)
  + clientDB added. When calling uniCloud.database, pass in the configuration of other service spaces to obtain database instances of other service spaces [Details](https://uniapp.dcloud.net.cn/uniCloud/init?id=init-db)
  + clientDB 调整 自动保存 uni-id 刷新用户token返回的token及过期时间到storage内  [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=refreshtoken)
  + clientDB adjustment Auto save uni-id Refresh the token returned by user token and its expiration time into storage [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=refreshtoken)
  + unicloud-db组件 新增 spaceInfo 参数，用于指定要使用的服务空间信息 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + unicloud-db component Added spaceInfo parameter to specify the service space information to be used [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + mixinDatacom 新增 spaceInfo 参数，用于指定要使用的服务空间信息 [详情](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)
  + add spaceInfo parameter to mixinDatacom to specify the service space information to be used [Details](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)

#### 2021-09-19
  + 本地调试插件 新增 设置启动调试参数（.hbuilderx/launch.json）关闭系统日志 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + Local debugging plugin Added Set startup debugging parameters (.hbuilderx/launch.json) to disable system log [Details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 本地调试插件 优化 公共模块查找逻辑，减少调试错误
  + Local debugging plugin Optimize common module search logic to reduce debugging errors
  + clientDB 新增 action 依赖公共模块的功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=common-for-action)
  + clientDB adds the function that actions depend on common modules [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=common-for-action)

#### 2021-09-16
  + 阿里云 调整 跨域配置对前端网页托管自定义域名生效 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)
  + Aliyun adjustment Cross-domain configuration takes effect for front-end web hosting custom domain names [Details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)

#### 2021-09-01
  + 【重要】clientDB 新增 支持使用 getTemp 对主表、副表过滤后再联表查询，大幅提升联表查询性能 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-with-temp)
  + [Important] clientDB has added support for using getTemp to filter the main table and the auxiliary table and then join the table query, which greatly improves the performance of the join table query [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id =lookup-with-temp)
  + 阿里云 新增 redis扩展能力，加速云函数响应 [详情](https://uniapp.dcloud.net.cn/uniCloud/redis)
  + Alibaba Cloud added redis extension capability to speed up cloud function response [Details](https://uniapp.dcloud.net.cn/uniCloud/redis)

#### 2021-08-27
  + uniCloud本地调试插件 修复 云函数日志 文件路径存在中文时无法点击跳转的Bug
  + uniCloud local debugging plug-in Fix the bug that the cloud function log file path cannot be clicked to jump when the file path exists in Chinese
  + uniCloud本地调试插件 修复 阿里云事务执行 updateAndReturn 报错的Bug
  + uniCloud local debugging plugin to fix the bug of Alibaba Cloud transaction execution updateAndReturn error

#### 2021-08-01
  + 云数据库 新增 updateAndReturn 方法，可以更新并返回更新后的值（仅可在云函数中使用） [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=update-and-return)
  + Cloud database adds updateAndReturn method, which can update and return the updated value (only available in cloud functions) [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=update -and-return)
  + uniCloud本地调试插件 修复 部分情况下项目启动时报 npm 安装失败的Bug
  + uniCloud local debugging plugin Fix the bug that npm installation fails when the project starts in some cases
  + uni-id 新增 多系统（如管理端、用户端）的配置隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
  + uni-id Added configuration isolation for multiple systems (such as management and client) [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
  + uni-id 新增 多系统用户管理，如某账户只能登录管理端，不能登录用户端 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-user)
  + uni-id adds multi-system user management, for example, an account can only log in to the management side, but not the client side [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate- user)
    * 此版本升级需要开发者处理历史用户数据，请参考 [补齐用户dcloud_appid字段](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid)
    * This version upgrade requires developers to process historical user data, please refer to [Complete the user dcloud_appid field](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid)
  + uni-id 新增 QQ登录、注册相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=qq)
  + uni-id added QQ login and registration related functions [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=qq)
  + uni-id 调整 不再支持绑定手机、邮箱时不填验证码直接绑定
  + uni-id adjustment No longer supports binding mobile phone and email without filling in the verification code

#### 2021-07-07
  + 【重要】云函数支持创建时选择 nodejs 版本 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.md?id=runtime)
  + [Important] Cloud functions support select nodejs version when creating [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.md?id=runtime)
  + 新增 内容安全公共模块，包含图片鉴黄、文字内容违规检测，免费且全端可用 [详情](https://ext.dcloud.net.cn/plugin?id=5460)
  + Added content security public module, including image pornography, text content violation detection, free and available on all sides [Details](https://ext.dcloud.net.cn/plugin?id=5460)
  + clientDB 新增 multiSend 接口，用于多个clientDB联网请求合并为一次联网 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + clientDB adds multiSend interface, which is used to combine multiple clientDB networking requests into one networking [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + unicloud-db组件和API 新增 getTemp 接口，用于在 multiSend 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + Added getTemp interface to unicloud-db component and API for use in multiSend [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + uni-id 调整 3.1.1版本发布，使用兼容uniCloud响应体规范的新错误码格式 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
  + uni-id adjustment Version 3.1.1 is released, using a new error code format compatible with the uniCloud response body specification [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
  + uniCloud本地调试插件 修复 部分情况下出现 MaxListenersExceededWarning 警告的Bug
  + uniCloud local debugging plug-in Fix the bug of MaxListenersExceededWarning warning in some cases
  + uniCloud本地调试插件 修复 项目内存在项目外文件的软链时，修改无法实时生效的Bug
  + uniCloud local debugging plug-in Fix the bug that the modification cannot take effect in real time when there is a soft chain of files outside the project in the project
  + JQL数据库管理 修复 部分情况下执行数据库操作无响应的Bug
  + JQL database management Fix the bug that the database operation does not respond in some cases
  + 客户端SDK 修复 nvue 页面无法触发 App.vue 内注册的 db.on('error')、db.on('refreshToken') 等回调的Bug
  + Client SDK fixes the bug that the nvue page cannot trigger callbacks such as db.on('error') and db.on('refreshToken') registered in App.vue

#### 2021-07-06
  + web控制台 新增 违规文件列表
  + Added a list of illegal files to the web console
  + web控制台 修复 云存储删除文件总数不变的Bug
  + web console Fix the bug that the total number of deleted files in cloud storage remains unchanged
  + web控制台 调整 云函数日志默认查询开始时间为2小时前
  + web console adjustment Cloud function log default query start time is 2 hours ago
  + web控制台 腾讯云 新增 数据库导入、导出
  + web console Tencent Cloud Added database import and export
  + web控制台 腾讯云 新增 前端网页托管可开启HTTP强制跳转HTTPS
  + web console Tencent Cloud Added front-end web hosting can enable HTTP forced redirect HTTPS
  + web控制台 腾讯云 新增 云函数url化允许 / 作为触发路径
  + web console Tencent Cloud Added cloud function urlization to allow / as trigger path
  + web控制台 阿里云 新增 前端网页托管域名归属验证
  + Web console Alibaba Cloud Added front-end web hosting domain name attribution verification

#### 2021-06-23
  + 新增 uniCloud响应体规范，方便前端拦截器统一处理、方便国际化 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-response-format)
  + Added uniCloud response body specification to facilitate unified processing by front-end interceptors and facilitate internationalization [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-response-format)
  + 客户端 新增 添加拦截器、移除拦截器API [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=add-interceptor)
  + Client Added Add Interceptor, Remove Interceptor API [Details](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=add-interceptor)
  + 客户端 修复 HBuilderX 3.1.17-alpha 引出的 db.on("error") 回调不执行的Bug
  + Client fix the bug that the db.on("error") callback caused by HBuilderX 3.1.17-alpha is not executed
  + 客户端 修复 leftWindow、topWindow 中使用 uniCloud 腾讯云报错的Bug [详情](https://ask.dcloud.net.cn/question/125039)
  + Client Fix bug in leftWindow and topWindow that use uniCloud Tencent Cloud to report errors [Details](https://ask.dcloud.net.cn/question/125039)
  + DB Schema 调整 enum 属性最大可枚举500条数据
  + DB Schema adjusts the enum attribute to enumerate up to 500 pieces of data

#### 2021-06-03
  + 修复 HBuilderX 3.1.16 引出的未关联服务空间时无法获取 uniCloud.mixinDatacom 的Bug
  + Fixed the bug that uniCloud.mixinDatacom could not be obtained when the service space was not associated with HBuilderX 3.1.16
  + 修复 HBuilderX 3.1.16 引出的某些情况下关联腾讯云服务空间的项目运行报错的Bug
  + Fixed the bug that HBuilderX 3.1.16 caused errors in the running of projects associated with Tencent Cloud service space in some cases
  + uniCloud本地调试插件 修复 HBuilderX 3.1.16 引出的云函数日志内的文件链接点击无法跳转到对应文件的Bug
  + uniCloud local debugging plug-in Fix the bug that the file link in the cloud function log derived from HBuilderX 3.1.16 cannot jump to the corresponding file

#### 2021-05-26
  + clientDB 新增 使用副表 foreignKey 进行联表查询时增加 _value 用于存储主表关联字段原始值 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + clientDB adds _value to store the original value of the associated field of the main table when using the secondary table foreignKey for joint table query [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign -key)
  + clientDB 修复 部分情况下 action.after 会重复执行一次的bug
  + clientDB fixed the bug that action.after would be executed repeatedly in some cases
  + JQL数据管理 修复 使用云端 schema 时找不到 schema 的Bug [详情](https://ask.dcloud.net.cn/question/123285)
  + JQL data management Fix bug that schema cannot be found when using cloud schema [Details](https://ask.dcloud.net.cn/question/123285)
  + web控制台 腾讯云 调整 云函数超时时间最大可配置为900秒
  + web console Tencent Cloud Adjustment Cloud function timeout can be configured to a maximum of 900 seconds

#### 2021-05-25
  + web控制台 腾讯云 调整 云函数Url化需要配置CNAME为腾讯云给定的域名，此前配置为默认域名 [详情](https://uniapp.dcloud.net.cn/uniCloud/http)
  + web console Tencent Cloud To adjust the Urlization of cloud functions, you need to configure CNAME as the domain name given by Tencent Cloud, which was previously configured as the default domain name [Details](https://uniapp.dcloud.net.cn/uniCloud/http)

#### 2021-05-18
  + 【重要】新增 uni-starter 集成商用项目开发常见功能的云端一体项目模板 [详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + [Important] Added a cloud-integrated project template for uni-starter to integrate common functions of commercial project development [Details](https://ext.dcloud.net.cn/plugin?id=5057)
  + clientDB 修复 删除记录、统计记录数时受字段权限影响的bug [详情](https://ask.dcloud.net.cn/question/122846)
  + clientDB fixed bugs affected by field permissions when deleting records and counting records [Details](https://ask.dcloud.net.cn/question/122846)
  + clientDB 修复 日期类型（date）数据校验出错的Bug [详情](https://ask.dcloud.net.cn/question/122517)
  + clientDB fix the bug of date type (date) data verification error [Details](https://ask.dcloud.net.cn/question/122517)
  + clientDB 修复 action、validateFunction 内打印日志无法在web控制台查看的Bug
  + clientDB fixes the bug that the print log in action and validateFunction cannot be viewed in the web console
  + unicloud-db组件 修复 联表查询时无法调用remove方法的问题 [详情](https://ask.dcloud.net.cn/question/122934)
  + unicloud-db component Fixed the problem that the remove method could not be called when querying a linked table [Details](https://ask.dcloud.net.cn/question/122934)

#### 2021-04-30
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + [Important] To adjust the query strategy of clientDB linked table, please refer to this document for troubleshooting and adjustment: [Adjustment of clientDB linked table query strategy](https://ask.dcloud.net.cn/article/38966)
  + clientDB 新增 联表查询支持副表foreignKey联查，即副表字段的foreignKey指向主表，把副表数据挂在主表下面 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + ClientDB adds a new joint table query to support the foreignKey joint query of the auxiliary table, that is, the foreignKey of the auxiliary table field points to the main table, and the data of the auxiliary table is hung under the main table [Details](https://uniapp.dcloud.net.cn/uniCloud /clientdb?id=st-foreign-key)
  + uniCloud本地调试插件 修复 阿里云偶发启动时多请求并发报错的Bug
  + uniCloud local debugging plug-in to fix the bug of multi-request and error report when Alibaba Cloud occasionally starts

#### 2021-04-16
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + [Important] To adjust the query strategy of clientDB linked table, please refer to this document for troubleshooting and adjustment: [Adjustment of clientDB linked table query strategy](https://ask.dcloud.net.cn/article/38966)
  + unicloud-db组件 新增 loadtime 属性，替代 manual 属性 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + unicloud-db component Added loadtime property to replace manual property [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + unicloud-db组件 新增 foreignKey 属性，用于存在多个foreignKey关系时指定要使用的foreignKey [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + The foreignKey property is added to the unicloud-db component, which is used to specify the foreignKey to be used when there are multiple foreignKey relationships [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key )
  + uniCloud.mixinDataCom 新增 foreignKey 属性，用途同上 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + uniCloud.mixinDataCom added foreignKey property, the purpose is the same as above [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + uni-id 修复 3.0.7 版本引出的多个用户访问时可能出现30201报错的Bug
  + uni-id fix the bug that 30201 error may appear when multiple users access from version 3.0.7
  + uni-id 新增 bindMobile 接口支持通过一键登录的方式绑定 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=bind-mobile)
  + uni-id Added bindMobile interface to support binding by one-click login [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=bind-mobile)
  + uni-id 调整 bindTokenToDevice 选项默认值改为 false，即默认不再与设备绑定，方便多设备登录
  + uni-id Adjust the default value of bindTokenToDevice option to false, that is, it is no longer bound to the device by default, which is convenient for multi-device login
  + 修复 uniCloud.chooseAndUploadFile 在iOS微信小程序真机无法唤起选择文件的Bug
  + Fixed the bug that uniCloud.chooseAndUploadFile could not evoke the selected file in the real device of the iOS WeChat applet
  + uniCloud admin 优化错误提示、键盘响应等众多细节，更新uni-id等众多依赖 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
  + uniCloud admin optimized error prompts, keyboard response and many other details, updated many dependencies such as uni-id [Details](https://ext.dcloud.net.cn/plugin?id=3268)

#### 2021-04-07
  + 新增 [uni-upgrade-center](https://uniapp.dcloud.io/uniCloud/upgrade-center)，提供了简单、易用、统一的App管理、App版本管理、安装包发布管理，升级检测更新管理。
  + Added [uni-upgrade-center](https://uniapp.dcloud.io/uniCloud/upgrade-center), which provides simple, easy-to-use, unified App management, App version management, installation package release management, upgrade Check update management.
  + uniCloud本地调试插件 修复 3.1.5 版本引出的腾讯云连接本地云函数运行一段时间后报错的Bug [详情](https://ask.dcloud.net.cn/question/119089)
  + uniCloud local debugging plug-in Fixed the bug that Tencent Cloud connected to the local cloud function and reported an error after running for a period of time from version 3.1.5 [Details](https://ask.dcloud.net.cn/question/119089)
  + 阿里云 新增 支持对云函数设置单实例并发度 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=concurrency)
  + Alibaba Cloud Added support for setting single-instance concurrency for cloud functions [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=concurrency)
  + 阿里云 新增 支持TTL索引 [详情](https://uniapp.dcloud.net.cn/uniCloud/db-index?ttl)
  + Alibaba Cloud added support for TTL index [Details](https://uniapp.dcloud.net.cn/uniCloud/db-index?ttl)

#### 2021-03-16
  + unicloud-db组件 add、update、remove方法新增可选参数needConfirm、needLoading、loadingTitle [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + Added optional parameters needConfirm, needLoading, loadingTitle to add, update, and remove methods of unicloud-db components [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + unicloud-db组件 新增 load 事件支持 pagination [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=loadevent)
  + unicloud-db component Added load event support pagination [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=loadevent)
  + DB Schema 修复 exclusiveMinimum|exclusiveMaximum 默认验证提示语不准确的问题
  + DB Schema fix exclusiveMinimum|exclusiveMaximum default validation prompt is inaccurate
  + uniCloud本地调试插件 修复 公共模块修改之后无法立即生效的Bug
  + uniCloud local debugging plugin to fix the bug that the public module cannot take effect immediately after modification
  + schema2code 新增 导出 uni_modules
  + schema2code added export uni_modules
  + schema2code 修复 生成 uni-file-picker 组件的属性 file-extname 类型错误的问题
  + schema2code fix the problem that the attribute file-extname of the uni-file-picker component is of the wrong type
  + schema2code 优化 导出 admin list页面的批量删除逻辑，没有选择项时禁用批量删除按钮
  + schema2code optimization Export the batch delete logic of the admin list page, disable the batch delete button when no items are selected
  + schema2code 优化 生成的前端 list 页面，增加无数据提示语 "没有更多数据"
  + schema2code optimization Generated front-end list page, add no data prompt "No more data"

#### 2021-03-05
  + DB Schema 修复 exclusiveMinimum|exclusiveMaximum 默认验证提示语不准确的问题（重新保存schema后生效）
  + DB Schema fix the problem that the default validation prompt of exclusiveMinimum|exclusiveMaximum is inaccurate (it will take effect after re-saving the schema)
  + schema2code 优化 生成的前端 list 页面，增加无数据提示语 "没有更多数据"
  + schema2code optimization Generated front-end list page, add no data prompt "No more data"

#### 2021-03-04
  + schema2code 新增 导出 uni_modules
  + schema2code added export uni_modules
  + schema2code 调整 导出 components 目录为 uni_modules 结构
  + schema2code adjusted export components directory to uni_modules structure
  + schema2code 优化 导出 admin list页面的批量删除逻辑，没有选择项时禁用批量删除按钮
  + schema2code optimization Export the batch delete logic of the admin list page, disable the batch delete button when no items are selected
  + schema2code 修复 生成 uni-file-picker 组件的属性 file-extname 类型错误的问题
  + schema2code fix the problem that the attribute file-extname of the uni-file-picker component is of the wrong type

#### 2021-03-03
  + clientDB 修复 数据库运算方法in报错的Bug
  + clientDB fix the bug of database operation method in error
  + clientDB 修复 jql非运算表现异常的Bug
  + clientDB fix the bug of jql non-operation abnormal performance
  + clientDB 优化 部分场景下getCount性能
  + clientDB optimized getCount performance in some scenarios
  + clientDB 优化 部分场景下jql联表查询性能
  + clientDB optimization jql join table query performance in some scenarios

#### 2021-02-04
  + 修复 uniCloud.getCurrentUserInfo 报错的Bug
  + Fixed the bug that uniCloud.getCurrentUserInfo reported an error

#### 2021-02-02
  + 【重要】客户端 新增 uniCloud.mixinDatacom 混入，方便快速开发datacom组件，无需自行处理云数据绑定 [详情](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)
  + [Important] Added uniCloud.mixinDatacom mixin on the client side to facilitate the rapid development of datacom components without having to deal with cloud data binding by yourself [Details](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)
  + 客户端 新增 uniCloud.chooseAndUploadFile API，选文件后直接上传到uniCloud云存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=chooseanduploadfile)
  + Client Added uniCloud.chooseAndUploadFile API, select files and upload them directly to uniCloud cloud storage [Details](https://uniapp.dcloud.net.cn/uniCloud/storage?id=chooseanduploadfile)
  + 【重要】uni-id 新增 在token内默认缓存角色权限，云端获取角色权限不再查库，提升clientDB性能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
  + [Important] uni-id adds the default cache role permission in the token, the cloud will no longer check the database when the role permission is obtained, and improve the performance of clientDB [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id ?id=cachepermissionintoken)
  + uni-id 新增 支持苹果登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=loginbyapple)
  + uni-id added support for Apple login [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=loginbyapple)
  + uni-id 新增 客户端获取用户信息接口，包括权限角色 [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=client-getcurrentuserinfo)
  + uni-id Added interface for client to get user information, including permission roles [Details](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=client-getcurrentuserinfo)
  + 云函数 新增 获取客户端标识 deviceId [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=intro)
  + Cloud functions Added Get client ID deviceId [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=intro)
  + 阿里云 新增 云函数支持 uploadFile 接口（本地调试暂不支持）[详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=clouduploadfile)
  + Alibaba Cloud added cloud function support uploadFile interface (local debugging is not currently supported) [Details](https://uniapp.dcloud.net.cn/uniCloud/storage?id=clouduploadfile)
  + 阿里云 新增 云数据库 add update 可以传入日期对象
  + Alibaba Cloud added ApsaraDB for add update can pass in date objects
  + 阿里云 新增 getTempFileURL 接口（仅为抹平和腾讯云的接口差异）[详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=cloudgettempfileurl)
  + Alibaba Cloud Added getTempFileURL interface (only to smooth out the interface difference between Tencent Cloud and Tencent Cloud) [Details](https://uniapp.dcloud.net.cn/uniCloud/storage?id=cloudgettempfileurl)
  + web控制台 阿里云 新增 慢查询日志，有助于分析数据库设计缺陷
  + Web console Alibaba Cloud added slow query log, which is helpful for analyzing database design flaws
  + uniCloud本地调试插件 新增 支持 uni_modules
  + uniCloud local debugging plugin added support for uni_modules
  + uniCloud本地调试插件 修复 cli 项目无法使用 uniCloud 本地调试的Bug
  + uniCloud local debugging plugin Fix the bug that cli projects cannot use uniCloud local debugging
  + uniCloud本地调试插件 修复 客户端连接本地云函数时云函数内 callFunction 返回格式不正确的Bug
  + uniCloud local debugging plugin Fix the bug that the callFunction in the cloud function returns an incorrect format when the client connects to the local cloud function
  + DB Schema 字段类型bsonType 新增 file、date类型 [详情](https://uniapp.dcloud.io/uniCloud/schema?id=bsontype)
  + DB Schema field type bsonType adds file and date types [Details](https://uniapp.dcloud.io/uniCloud/schema?id=bsontype)
  + DB Schema 字段类型bsonType 为 array 时，新增 arrayType 子类型，描述数组里项目的类型。比如 arrayType 设为 file，表示一组文件 [详见](https://uniapp.dcloud.io/uniCloud/schema?id=arraytype)
  + When the DB Schema field type bsonType is array, a new subtype of arrayType is added to describe the type of items in the array. For example, if arrayType is set to file, it means a group of files [see details](https://uniapp.dcloud.io/uniCloud/schema?id=arraytype)
  + DB Schema 新增 fieldRules 用于描述字段之间的关系，如字段“开始时间”需小于字段“结束时间” [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=field-rules)
  + DB Schema adds fieldRules to describe the relationship between fields. For example, the field "start time" should be less than the field "end time" [Details](https://uniapp.dcloud.net.cn/uniCloud/schema?id= field-rules)
  + DB Schema 新增 count 权限 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=col-permission)
  + DB Schema added count permission [Details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=col-permission)
  + DB Schema 新增 validateFunction 配置是否在客户端生效 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)
  + DB Schema added validateFunction configuration whether to take effect on the client [Details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)
  + clientDB 新增 数据库运算符，可在 where、field、groupBy、groupField 以及 DB Schema 的 fieldRules 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=where)
  + clientDB adds new database operators, which can be used in where, field, groupBy, groupField and fieldRules of DB Schema [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=where)
  + clientDB 新增 支持 groupBy 对数据进行分组统计 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=groupby)
  + clientDB added support groupBy to group data [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=groupby)
  + clientDB 新增 支持 distinct 对数据进行去重 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=distinct)
  + clientDB added support distinct to deduplicate data [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=distinct)
  + clientDB 修复 JQL 写法内使用下标访问数组内的元素报错的Bug
  + clientDB fixes the bug of using subscripts to access elements in the array in JQL writing method
  + unicloud-db组件 add、update 方法支持调用 action云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + The add and update methods of unicloud-db components support calling action cloud functions [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + schema2code 新增 生成前端页面时补充list.vue、detail.vue页面
  + schema2code added Add list.vue and detail.vue pages when generating front-end pages
  + schema2code 调整 之前的 component 改名为 componentForEdit，并新增 componentForShow 。一个字段可以分别控制它在表单页面（add、edit）和展示页面（list、detail）所使用的组件
  + schema2code adjustment The previous component was renamed componentForEdit, and componentForShow was added. A field can control the components it uses on form pages (add, edit) and display pages (list, detail) respectively
  + schema2code 新增 展示页面可直接显示bool值为√或×，显示DB Schema里enum的text内容。
  + schema2code added The display page can directly display the bool value of √ or ×, and display the text content of the enum in the DB Schema.

#### 2021-02-01
  + web控制台 新增 云数据库慢查询日志，帮助开发者优化数据库查询性能，仅阿里云支持
  + Added ApsaraDB for slow query logs in the web console to help developers optimize database query performance, only supported by Alibaba Cloud

#### 2021-01-09
  + DB Schema 新增 支持对 string 类型数据配置 trim ，可自动对字符串去除前后空白字符 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=trim)
  + DB Schema added support for configuring trim for string type data, which can automatically remove whitespace characters before and after the string [Details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=trim)
  + DB Schema 修复 部分情况下使用 enum 报错的Bug
  + DB Schema fix some bugs that use enum to report errors
  + DB Schema 修复 exclusiveMinimum、exclusiveMaximum 无效的bug
  + DB Schema fix exclusiveMinimum, exclusiveMaximum invalid bug
  + clientDB 修复 查询树形结构时使用 startWith 某些写法导致报错的Bug
  + clientDB fixed the bug of using startWith when querying the tree structure, which caused an error
  + clientDB 修复 field 内使用JQL联表查询语法时多个右花括号连续出现导致报错的Bug
  + clientDB fixes the bug that multiple closing curly braces appear in a row when using JQL join table query syntax in the field, causing an error to be reported
  + clientDB 修复 field 中包含`-`时报错的Bug
  + clientDB fixes the bug of error when field contains `-`
  + uniCloud本地调试插件 修复 部分日志导致本地调试服务崩溃的Bug
  + uniCloud local debugging plugin Fix the bug that some logs cause the local debugging service to crash
  + unicloud-db组件 支持tree查询，新增属性 gettree、startwith、limitlevel [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + unicloud-db component Support tree query, new properties gettree, startwith, limitlevel [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)

#### 2021-01-08
  + web控制台 新增 协作者可访问被授权的空间 
  + web console added Collaborators can access authorized spaces
  + web控制台 新增 云函数批量删除
  + web console Added cloud function batch deletion
  + web控制台 新增 数据表批量删除
  + web console added data table batch deletion
  + web控制台 新增 公共模块批量删除
  + Web console added public modules to delete in batches
  + web控制台 新增  action 批量删除
  + web console added action batch delete

#### 2020-12-30
  + uniCloud本地调试插件 修复 调试时较早请求云函数且无法连接本地调试服务时报错的Bug
  + uniCloud local debugging plug-in Fix the bug that the cloud function was requested earlier during debugging and the local debugging service could not be connected
  + uniCloud本地调试插件 修复 部分日志格式错误的Bug
  + uniCloud local debugging plug-in to fix some bugs that the log format is wrong
  + uniCloud本地调试插件 修复 本地云函数向云数据库插入值为 null 的字段会报错的Bug
  + uniCloud local debugging plugin Fix the bug that the local cloud function will report an error when inserting a field with a value of null into the cloud database
  + uniCloud本地调试插件 调整 输出调整复杂类型时调整最大展示层级为20级
  + uniCloud local debugging plugin Adjustment Adjust the maximum display level to 20 when outputting complex types

#### 2020-12-28
  + clientDB API 新增 树形数据查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=gettree)
  + Added tree data query to clientDB API [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=gettree)

#### 2020-12-25
  + clientDB 新增 数据库错误 error 事件 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=error)
  + clientDB adds database error error event [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=error)
  + clientDB 调整 refreshToken 事件由 db.auth 移至 db ，旧写法仍兼容 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=refreshtoken)
  + clientDB adjusted refreshToken event moved from db.auth to db, the old writing is still compatible [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=refreshtoken)
  + uniCloud本地调试插件 修复 本地运行云函数运行结果显示不全的Bug
  + uniCloud local debugging plug-in Fix the bug that the running result of running cloud function locally is not displayed completely

#### 2020-12-23
  + uniCloud本地调试插件 修复 windows 平台未打印输出对应的文件名和行号的Bug
  + uniCloud local debugging plug-in Fix the bug that the windows platform does not print out the corresponding file name and line number
  + uniCloud本地调试插件 优化 多参数的 console.log 输出展现
  + uniCloud local debugging plug-in Optimized console.log output display of multiple parameters

#### 2020-12-19
  + 【重要】调整 前端内置了`<unicloud-db>`组件，无需再人工引入插件市场的[clientDB组件插件](https://ext.dcloud.net.cn/plugin?id=3256) [规范](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
  + [Important] Adjusting the built-in `<unicloud-db>` component in the front-end, there is no need to manually introduce the [clientDB component plugin] in the plugin market (https://ext.dcloud.net.cn/plugin?id=3256) [Specification ](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
  + 【重要】新增 uniCloud 本地服务。支持前端项目在控制台切换连接云环境还是本地服务。本地修改直接生效，不用上传即可联调 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 【Important】Add uniCloud local service. Support the front-end project to switch between the cloud environment and the local service in the console. The local modification takes effect directly, and you can make joint debugging without uploading [Details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 【重要】调整 uniCloud 项目目录结构调整。根目录下为uniCloud目录，其下有二级目录 cloudfunctions 和 database。database目录存放数据表schema和扩展验证函数。并提供了目录结构迁移向导 [详情](https://ask.dcloud.net.cn/article/38028)
  + [Important] Adjust the uniCloud project directory structure adjustment. The root directory is the uniCloud directory, and there are secondary directories cloudfunctions and database under it. The database directory stores data table schemas and extended validation functions. And provides a directory structure migration wizard [details](https://ask.dcloud.net.cn/article/38028)
  + 【重要】新增 HBuilderX 本地编写 DB Schema，即数据表的表结构。支持新建、上传、下载表结构，支持代码提示。
  + [Important] Added HBuilderX to write DB Schema locally, that is, the table structure of the data table. Supports creating, uploading, and downloading table structures, and supports code prompts.
  + 【重要】新增 `<unicloud-db>`组件（即之前的clientDB组件）支持代码提示。可提示JQL语法，在本地有schema的情况下可提示数据库表名字段。大幅提升开发效率 
  + [Important] Added `<unicloud-db>` component (the former clientDB component) to support code hints. The JQL syntax can be prompted, and the database table name field can be prompted if there is a local schema. Greatly improve development efficiency
  + HBuilderX 新增 编写 validateFunction，即数据库扩展校验函数。支持新建、上传、下载validateFunction
  + Added HBuilderX Write validateFunction, which is a database extension validation function. Support new, upload, download validateFunction
  + HBuilderX 优化 uniCloud 关联云服务空间的选择方式。并支持关联其它项目服务空间，实现多个项目连接一个服务空间 [详情](https://ask.dcloud.net.cn/article/37949)
  + HBuilderX optimizes the selection method of uniCloud associated cloud service space. And support the association of other project service spaces to achieve multiple projects connected to a service space [Details](https://ask.dcloud.net.cn/article/37949)
  + HBuilderX 新增 可视化管理公共模块依赖 （对云函数点右键->管理公共模块依赖）
  + HBuilderX adds visual management of public module dependencies (right-click on the cloud function -> manage public module dependencies)
  + HBuilderX 优化 上传uni-id公共模块时，增加校验，对比配置密钥是否一致
  + HBuilderX optimization When uploading uni-id public modules, add verification to compare whether the configuration keys are consistent
  + HBuilderX 修复 云函数本地运行 控制台日志打印`null`和`undefined`值错误的Bug
  + HBuilderX fix the bug that the console log prints wrong values of `null` and `undefined` when running cloud functions locally
  + HBuilderX 修复 前端网页托管 某些情况下，上传网站到服务器，控制台显示(0 MB)大于上传限制(0 MB)的Bug [详情](https://ask.dcloud.net.cn/question/111228)
  + HBuilderX fixes the bug that in some cases of front-end web hosting, when uploading the website to the server, the console display (0 MB) is larger than the upload limit (0 MB). [Details](https://ask.dcloud.net.cn/question/ 111228)
  + uni-id 新增 App端一键登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=univerify)
  + uni-id Added one-click login on App [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=univerify)
  + 其他云端更新日志另见：[https://uniapp.dcloud.io/uniCloud/release](https://uniapp.dcloud.io/uniCloud/release)
  + See also other cloud changelogs: [https://uniapp.dcloud.io/uniCloud/release](https://uniapp.dcloud.io/uniCloud/release)

#### 2020-12-10
  + web控制台 新增 阿里云新增稀疏索引 [详情](https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=dbindex)
  + Web console added Alibaba Cloud added sparse index [Details](https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=dbindex)
  + web控制台 新增 腾讯云云存储新增批量删除功能
  + web console added Tencent cloud storage added batch delete function
  + web控制台 新增 前端网页托管批量删除
  + web console added front-end web hosting batch deletion
  + web控制台 新增 腾讯云 概览页面新增clientDB资源用量
  + Web console added Tencent Cloud overview page added clientDB resource usage
  + web控制台 新增 导出 db_init.json 新增是否导出 ID
  + web console added export db_init.json added whether to export ID
  + web控制台 新增 云函数、公共模块、action 列表新增操作者邮箱
  + Web console Added cloud functions, public modules, and action list Added operator mailbox
  + web控制台 优化 数据库记录编辑窗口
  + web console optimized database record editing window
  + web控制台 修复 腾讯云 云存储文件夹过多时上拉加载错误的BUG
  + web console Fix the bug of uploading and loading errors when there are too many Tencent Cloud cloud storage folders

#### 2020-11-21
  + clientDB 新增 jql写法支持在field内写别名 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=alias)
  + clientDB adds jql writing to support writing aliases in fields [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=alias)
  + clientDB 新增 schema内enum支持使用云端数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=enum)
  + clientDB adds enum support for using cloud data in schema [Details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=enum)
  + clientDB 新增 schema内bsonType支持password，设置后所有用户均不可读取此字段
  + clientDB added bsonType in schema to support password, after setting this field cannot be read by all users
  + clientDB 优化 索引冲突时返回更友好的提示及错误码 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue)
  + clientDB optimization Return more friendly prompts and error codes in case of index conflicts [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue)

#### 2020-11-14
  + uni-id 调整 2.0.0版本起验证码表名改为`opendb-verify-codes`
  + uni-id adjustment Since version 2.0.0, the name of the verification code table has been changed to `opendb-verify-codes`
  + uni-id 调整 2.0.0版本起encryptPwd接口返回值调整 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=encrypt-password)
  + uni-id adjustment Adjustment of the return value of the encryptPwd interface since version 2.0.0 [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=encrypt-password)
  + uni-id 新增 修改passwordSecret功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=modifysecret)
  + uni-id added the function of modifying passwordSecret [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=modifysecret)

#### 2020-11-13
  +  阿里云支持事务（startTransaction方式，暂不支持runTransaction）[详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=start-transaction)
  + Alibaba Cloud supports transactions (startTransaction method, runTransaction is not currently supported) [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=start-transaction)

#### 2020-10-31
  + 新增 `<uni-clientDB>`组件支持remove方法，封装了删除确认框、删除数据库、删除前端data等操作，开发更便利 [详情](https://uniapp.dcloud.io/uniCloud/uni-clientdb-component?id=%e6%96%b9%e6%b3%95)
  + The new `<uni-clientDB>` component supports the remove method, which encapsulates operations such as deleting the confirmation box, deleting the database, and deleting the front-end data, which is more convenient for development [Details](https://uniapp.dcloud.io/uniCloud/uni -clientdb-component?id=%e6%96%b9%e6%b3%95)
  + 优化 提升云函数执行速度几十毫秒。非冷启动时与传统服务器性能拉齐（需重新部署云函数）
  + Optimization Improve the execution speed of cloud functions by tens of milliseconds. Compared with traditional server performance in non-cold start (need to redeploy cloud functions)

#### 2020-10-24
  + clientDB 去除schema内permission中的点，例：`.write`改为`write`，旧写法仍然支持。
  + clientDB removes the dot in the permission in the schema, for example: `.write` is changed to `write`, the old writing method is still supported.
  + clientDB 优化无权限操作时的报错提示
  + clientDB optimizes the error message when operating without permission

#### 2020-10-24
  + 【重要】新增 clientDB 支持 `jql` 查询语法，大幅降低数据库操作难度 [详情](https://uniapp.dcloud.net.cn/uniCloud/database?id=jsquery)、大幅简化联表查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/database?id=lookup)
  + [Important] Added clientDB to support `jql` query syntax, greatly reducing the difficulty of database operations [Details](https://uniapp.dcloud.net.cn/uniCloud/database?id=jsquery), greatly simplifying join table queries [ Details](https://uniapp.dcloud.net.cn/uniCloud/database?id=lookup)
  + 【重要】新增 uni-clientDB 组件，在前端通过组件直接获得云数据库内容，并直接绑定到界面上，大幅提升开发效率 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component)
  + [Important] Added the uni-clientDB component, which can directly obtain the cloud database content through the component in the front end, and directly bind it to the interface, greatly improving the development efficiency [Details](https://uniapp.dcloud.net.cn/uniCloud /uni-clientdb-component)
  + 【重要】调整 clientDB内置，云端不再需要单独的clientDB云函数，前端无需引用clientDB的js sdk，直接在前端写`const db = uniCloud.database()`即可 [详情](https://uniapp.dcloud.net.cn/uniCloud/database)
  + [Important] Adjusting the built-in clientDB, the cloud no longer needs a separate clientDB cloud function, and the front-end does not need to reference the js sdk of clientDB, just write `const db = uniCloud.database()` in the front-end [Details](https:// uniapp.dcloud.net.cn/uniCloud/database)
  + 【重要】调整 uni-clientDB-actions 目录调整到 cloudfunctions 根目录 [详情](https://uniapp.dcloud.net.cn/uniCloud/database?id=action)
  + [Important] Adjust the uni-clientDB-actions directory to the cloudfunctions root directory [Details](https://uniapp.dcloud.net.cn/uniCloud/database?id=action)
  + 【重要】调整 clientDB云函数的permission和validator子目录废除，只需在 DB Schema 中书写permission和validator内容，保存即可直接生效，无需再次导出
  + [Important] Adjust the permission and validator subdirectories of the clientDB cloud function to be abolished. Just write the permission and validator content in the DB Schema and save it to take effect directly without exporting again.
  + 【重要】新增 `uniCloud Admin 基础框架`（HBuilderX新建项目可选择该模板） [详情](https://uniapp.dcloud.net.cn/uniCloud/admin)
  + [Important] Added `uniCloud Admin basic framework` (this template can be selected for HBuilderX new projects) [Details](https://uniapp.dcloud.net.cn/uniCloud/admin)
  + 【重要】新增 web控制台 云数据库配置 DB Schema 后，可直接生成前端工程，含数据表单新增、修改页面，以及校验规则。大幅提升开发效率
  + [Important] After adding a new web console ApsaraDB for configuring DB Schema, you can directly generate front-end projects, including adding and modifying pages of data forms, as well as validation rules. Greatly improve development efficiency
  + 【重要】腾讯云 正式商用 [详见](https://uniapp.dcloud.net.cn/uniCloud/price)
  + [Important] Tencent Cloud officially commercialized [see details](https://uniapp.dcloud.net.cn/uniCloud/price)
  + 新增 web控制台 云数据库支持导出db_init.json
  + Added web console ApsaraDB for exporting db_init.json
  + 新增 web控制台 服务空间改名
  + Added web console service space renamed
  + 新增 web控制台 云数据库支持`扩展校验函数`，可自主编程实现更复杂的数据校验逻辑，同时在 DB Schema 中引用这些`扩展校验函数`
  + Added web console ApsaraDB for `Extended Validation Functions`, which can implement more complex data validation logic by programming independently, and reference these `Extended Validation Functions` in DB Schema
  + 修复 阿里云 数据库set方法表现不正确的Bug
  + Fix the bug that the Alibaba Cloud database set method does not behave correctly
  + uni-id 新增 开发者callFunction时可自行传入uniIdToken，此时不再从storage获取token
  + uni-id added Developers can pass in uniIdToken when calling Function, and no longer get token from storage

#### 2020-10-13
  + 腾讯云 全面开放企业用户按量计费服务空间的购买 [详情](https://uniapp.dcloud.net.cn/uniCloud/price?id=price-info)
  + Tencent Cloud fully opens the purchase of pay-as-you-go service space for enterprise users [Details](https://uniapp.dcloud.net.cn/uniCloud/price?id=price-info)

#### 2020-09-29
  + 腾讯云 开放包年包月套餐购买 [详情](https://uniapp.dcloud.net.cn/uniCloud/price?id=price-month)
  + Tencent Cloud Open Yearly and Monthly Package Purchase [Details](https://uniapp.dcloud.net.cn/uniCloud/price?id=price-month)

#### 2020-09-26
  + 【重要】新增 腾讯云 云函数固定出口IP，可用于微信公众号开发等要求配置ip的场景 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip)
  + [Important] Added Tencent Yunyun function fixed export IP, which can be used in WeChat public account development and other scenarios that require IP configuration [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip )
  + 【重要】uni-clientDB 2.0 重大更新，可完整方便的控制权限和数据验证。大多数场景不再需要编写云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB)
  + [Important] uni-clientDB 2.0 is a major update, which allows complete and convenient control of permissions and data verification. Most scenarios no longer need to write cloud functions [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB)
  + 【重要】uni-id 新增 角色权限相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=rbac)
  + [Important] uni-id adds role permissions related functions [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=rbac)
  + 【重要】云数据库支持JSON Schema规范，可在Web控制台数据库管理界面对数据进行格式描述 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + [Important] The cloud database supports the JSON Schema specification, and the data format can be described in the database management interface of the web console [Details](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + 阿里云 去除客户端上传文件类型限制
  + Aliyun removes the file type restriction on client upload

#### 2020-09-16
  + 腾讯云 支持云函数固定出口IP，支持微信公众号开发 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip)
  + Tencent Cloud Support cloud function fixed export IP, support WeChat public account development [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip)

#### 2020-09-03
  + 修复 某些情况下，上传公共模块，UI卡顿的Bug
  + Fixed the bug that UI stuck when uploading public modules in some cases
  + 调整 阿里云放开文件上传类型限制
  + Adjusted Alibaba Cloud to release file upload type restrictions

#### 2020-08-29
  + 新增 本地运行 加入显示调试行号等信息
  + Added local operation to display debugging line number and other information
  + 修复 当npm镜像源为淘宝源时，某些云函数或公共模块上传失败的Bug
  + Fixed the bug that some cloud functions or public modules failed to upload when the npm mirror source was Taobao source

#### 2020-08-20
  + 阿里云 升级mongoDB到4.0版本，现已支持地理位置
  + Alibaba Cloud upgraded mongoDB to version 4.0, now supports geographic location
  + 优化 云函数插件支持写入components、js_sdk、static目录
  + Optimized cloud function plugin to support writing components, js_sdk, static directories

#### 2020-08-12
  + web控制台 阿里云 新增 数据库集合导入导出功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=export)
  + web console Alibaba Cloud Added database collection import and export function [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=export)
  + web控制台 腾讯云 新增 资源概况页面
  + Web console Tencent Cloud Added resource overview page

#### 2020-08-05
  + 阿里云 新增 支持协作者本地运行云函数
  + Alibaba Cloud Added support for collaborators to run cloud functions locally
  + 修复 HBuilderX 2.8.0引出的 公共模块右键菜单 更新依赖本模块的云函数菜单丢失的Bug
  + Fix the bug that the right-click menu of the public module brought out by HBuilderX 2.8.0 is updated, and the cloud function menu that depends on this module is missing.

#### 2020-08-04
  + 新增 3个内置短信模板 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + Added 3 built-in SMS templates [Details](https://uniapp.dcloud.net.cn/uniCloud/send-sms)

#### 2020-08-04
  + 阿里云 新增 支持协作者本地运行云函数
  + Alibaba Cloud Added support for collaborators to run cloud functions locally

#### 2020-07-24
  + 阿里云 修复 本地运行时云函数互调报错的Bug
  + Alibaba Cloud fixed the bug of cloud function intermodulation error in local runtime

#### 2020-07-21
  + 【重要】新增 本地运行云函数，可连接远程数据库和云存储，大幅提升开发效率，同时方便数据导入导出 [详情](https://uniapp.dcloud.net.cn/uniCloud/local)
  + [Important] Added local running cloud functions, which can connect to remote databases and cloud storage, greatly improve development efficiency, and facilitate data import and export [Details](https://uniapp.dcloud.net.cn/uniCloud/local)
  + 【重要】新增 插件市场支持云函数付费销售，欢迎插件作者们提交高质量可售卖插件
  + [Important] Added the plugin market to support paid sales of cloud functions. Plugin authors are welcome to submit high-quality salable plugins
  + 【重要】新增 uniCloud.sendSms 短信发送能力，可方便、便宜的发送验证码短信 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + [Important] Added uniCloud.sendSms SMS sending ability, which can send verification code SMS conveniently and cheaply [Details](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + 修复 2.7.12版本引出的支付宝小程序、百度小程序下使用 uniCloud 报错的Bug
  + Fixed the bug of using uniCloud in Alipay applet and Baidu applet from version 2.7.12
  + 修复 2.7.12版本引出的H5端 main.js 内使用 uniCloud 导致 uniCloud 不可使用的Bug
  + Fix the bug that uniCloud is unusable due to the use of uniCloud in the main.js of the H5 side brought out by version 2.7.12

#### 2020-07-10
  + web控制台 新增 云数据库新增、管理记录可全屏编辑
  + web console added cloud database added, management records can be edited in full screen
  + web控制台 优化 云数据库数据的展现形式
  + web console to optimize the presentation of cloud database data
  + web控制台 修复 云数据库选项卡快速切换导致内容显示不正确的Bug
  + web console Fix the bug that the content is displayed incorrectly when the cloud database tab is quickly switched

#### 2020-07-01
  + 【重要】新增[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)，实现简单、统一、可扩展的用户中心，推荐每个 uniCloud 开发者使用
  + [Important] Added [uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id) to achieve a simple, unified and scalable user center, recommended for every uniCloud developer
  + 新增 callfunction时自动携带`uni-id`的token，无需自行开发token管理方案
  + When adding the call function, the token of `uni-id` is automatically carried, so there is no need to develop your own token management scheme
  + 新增 web控制台 腾讯云 云数据库备份和恢复功能 [详情](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + New web console Tencent Cloud cloud database backup and restore function [Details](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + 新增 web控制台 腾讯云 云数据库集合名称修改功能
  + Added the function of modifying the name of a collection of Tencent Cloud cloud database in the web console
  + 修复 云函数内获取客户端系统类型可能为空的Bug
  + Fix the bug that the client system type may be empty in the cloud function
  + 修复 HBuilderX 导入包含common目录的云函数模板，导致原common目录被覆盖的Bug
  + Fixed the bug that HBuilderX imported the cloud function template containing the common directory, causing the original common directory to be overwritten
  + 优化 HBuilderX 新建公共模块增加名称不能包含大写字母的限制
  + Optimized HBuilderX new public module to increase the restriction that the name cannot contain uppercase letters
  * 修复 HBuilderX 某些情况下，上传公共模块，出现npm install失败的Bug
  * Fix the bug that npm install fails when uploading public modules in HBuilderX in some cases
  + 修复 HBuilderX 公共模块 右键菜单出现两个上传公共模块菜单的Bug
  + Fixed two bugs in the right-click menu of HBuilderX public module, where two upload public module menus appeared
  + 修复 HBuilderX 上传公共模块没有填写appid时的错误提示与上传云函数不一致的Bug
  + Fixed the bug that HBuilderX uploading a public module without filling in the appid is inconsistent with the upload cloud function

#### 2020-06-24
  + 腾讯云 新增 数据库回档功能 [详情](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + Tencent Cloud added database backup function [Details](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + 腾讯云 修复 web控制台修改日期格式字段会变成字符串的Bug，目前显示为 {$date:xxx} 形式
  + Tencent Cloud Fixed the bug that the date format field in the web console would be changed into a string, which is currently displayed in the form of {$date:xxx}

#### 2020-06-15
  + 腾讯云 优化 开发期间客户端直连云函数
  + Tencent Cloud optimization, the client directly connects to the cloud function during development

#### 2020-06-13
  + 阿里云 新增 前端网站部署功能 [详情](https://uniapp.dcloud.io/uniCloud/hosting)
  + Alibaba Cloud added front-end website deployment function [Details](https://uniapp.dcloud.io/uniCloud/hosting)

#### 2020-06-10
  + 阿里云 调整 定时触发的云函数，运行超时时间上限可设置为600秒，便于大数据量的跑批任务执行
  + Alibaba Cloud adjustment The time-triggered cloud function, the upper limit of the running timeout can be set to 600 seconds, which is convenient for the execution of batch running tasks with large amounts of data
  + 腾讯云 新增 前端网站部署功能 [详情](https://uniapp.dcloud.io/uniCloud/hosting)
  + Tencent Cloud added front-end website deployment function [Details](https://uniapp.dcloud.io/uniCloud/hosting)

#### 2020-06-04
  + 腾讯云 新增 云数据库支持批量插入数据 [详情](https://uniapp.dcloud.io/uniCloud/cf-database?id=add)
  + Tencent Cloud Added cloud database support for batch inserting data [Details](https://uniapp.dcloud.io/uniCloud/cf-database?id=add)

#### 2020-05-21
  + 新增 云函数内获取客户端ua、ip [详情](https://uniapp.dcloud.io/uniCloud/cf-functions)
  + Added access to client ua and ip in cloud functions [Details](https://uniapp.dcloud.io/uniCloud/cf-functions)

#### 2020-05-16
  + 开放腾讯云创建入口
  + Open Tencent Cloud Creation Portal

#### 2020-05-15
  + 阿里云 优化 云函数冷启动时间，经测试冷启动时间平均减少800ms
  + Alibaba Cloud optimized the cold start time of cloud functions, and the cold start time was reduced by an average of 800ms after testing

#### 2020-04-29
  + 阿里云 修复 某些情况下 neq 操作符无法正常使用的Bug
  + Alibaba Cloud fixed the bug that the neq operator could not be used normally in some cases
  + web控制台 调整 阿里云去除云存储文件类型限制
  + Web console adjustment Alibaba Cloud removes cloud storage file type restrictions

#### 2020-04-23
  + 阿里云 修复 云函数无法接收微信支付回调的Bug
  + Alibaba Cloud Fixed the bug that cloud functions could not receive WeChat payment callbacks

#### 2020-04-21
  + 腾讯云 修复 云函数互调某些情况下报签名错误的Bug
  + Tencent Cloud Fixed the bug that the signature error was reported in some cases of cloud function intermodulation
  + 腾讯云 修复 elemMatch 内使用 neq 报错的Bug [详情](https://ask.dcloud.net.cn/question/91531)
  + Tencent Cloud Fix the bug of using neq in elemMatch [Details](https://ask.dcloud.net.cn/question/91531)
  + 阿里云 调整 云函数Url化最大可返回1MB数据，调整前为4KB
  + Alibaba Cloud Adjusted Cloud function Urlization can return a maximum of 1MB of data, before adjustment is 4KB

#### 2020-04-08
  + web控制台 新增 阿里云支持云函数定时触发
  + Web console added Alibaba Cloud supports cloud function timing trigger
  + web控制台 优化 阿里云云函数上传并运行时会运行更新之前的云函数的问题
  + Web console optimization The cloud function before the update will run when the Alibaba Cloud function is uploaded and run

#### 2020-03-27
  + web控制台 新增 阿里云支持云函数Url化
  + Web console Added Alibaba Cloud to support cloud function URLization

#### 2020-03-26
  + web控制台 新增 腾讯云服务空间，需发送邮件获取体验资格
  + Web console added Tencent Cloud service space, you need to send email to get experience qualification
  + web控制台 新增 云函数运行日志
  + web console Added cloud function running log
  + web控制台 新增 云存储权限
  + web console added cloud storage permission
  + web控制台 新增 公共模块
  + web console added public module
  + web控制台 优化 阿里云文件存储上传体验
  + web console to optimize Alibaba Cloud file storage upload experience
  + web控制台 优化 阿里云云数据库搜索体验
  + web console to optimize Alibaba Cloud database search experience
  + web控制台 修复 阿里云删除索引报错的Bug
  + web console to fix the bug of Alibaba Cloud deleting index error
  + web控制台 修复 阿里云云存储文件后缀为大写文件不显示的Bug
  + web console Fix the bug that Alibaba Cloud cloud storage file suffix is not displayed when the file suffix is capitalized
  + web控制台 修复 阿里云云数据库字段为空或为 null 时显示错误的Bug
  + web console Fixed the bug that an error was displayed when the Alibaba Cloud database field was empty or null

#### 2020-03-04
  + web控制台 新增 阿里云支持云数据库分页
  + web console Added Alibaba Cloud to support ApsaraDB for paging
  + web控制台 新增 阿里云支持云数据库索引
  + Web console added Alibaba Cloud to support ApsaraDB for indexing
  + web控制台 新增 服务空间快捷切换选项卡
  + Added a new tab for quick switching of service space in web console
  + web控制台 优化 云数据库长文本显示收起展开按钮
  + web console optimization cloud database long text display collapse expand button
  + web控制台 优化 云数据库搜索体验
  + web console to optimize cloud database search experience

#### 2020-02-27
  + db_init.json 调整 添加索引方向时应使用字符串
  + db_init.json tweak should use string when adding index direction

#### 2020-02-26
  + 阿里云 新增 云数据库支持 add 批量添加数据 [详情](https://uniapp.dcloud.io/uniCloud/cf-database?id=add)
  + Alibaba Cloud added cloud database support to add data in batches [Details](https://uniapp.dcloud.io/uniCloud/cf-database?id=add)

#### 2020-02-24
  + 阿里云 新增 云函数互调功能 [详情](https://uniapp.dcloud.io/uniCloud/cf-functions?id=callbyfunction)
  + Alibaba Cloud added cloud function intermodulation function [Details](https://uniapp.dcloud.io/uniCloud/cf-functions?id=callbyfunction)