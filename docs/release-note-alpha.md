## 3.6.1.20220907-alpha
* 【uni-app】
  + App-Android平台 修复 uts 插件 部分情况下编译后丢失导入类的Bug [详情](https://ask.dcloud.net.cn/question/152597)
  + App-Android platform Fix the bug of missing imported classes after compiling the uts plugin in some cases [Details](https://ask.dcloud.net.cn/question/152597)
  + App平台 修复 切换tabbar页面时使用uni.createVideoContext的pause无法暂停播放的Bug[详情](https://ask.dcloud.net.cn/question/151933)
  + App platform Fix the bug that the pause cannot be paused when using the pause of uni.createVideoContext when switching tabbar pages [Details](https://ask.dcloud.net.cn/question/151933)
  + App-Android平台 修复 uts 插件 定义类型时使用 kotlin 基础类型（如 Int）时，编译报错的Bug
  + App-Android platform Fixed the bug of compilation error when uts plugin uses kotlin basic type (such as Int) when defining type
  + App-Android平台 修复 uts 插件 云打包时未包含 AndroidManifest.xml 的Bug
  + App-Android platform Fix the bug that AndroidManifest.xml is not included when uts plugin is packaged in cloud
  + App-Android平台 修复 bindingx 执行 evaluateColor 可能出现异常的Bug [详情](https://ask.dcloud.net.cn/question/151759)
  + App-Android platform Fix the bug that bindx executes evaluateColor abnormally [Details](https://ask.dcloud.net.cn/question/151759)
  + App-Android平台 修复 uni.reLaunch 打开非 tabbar nvue 页面可能依然显示 tabbar 的Bug [详情](https://ask.dcloud.net.cn/question/143792)
  + App-Android platform Fix uni.reLaunch to open non-tabbar nvue page may still display the bug of tabbar [Details](https://ask.dcloud.net.cn/question/143792)
  + App-Android平台 修复 GooglePlay渠道包无法正常使用高德地图的Bug [详情](https://ask.dcloud.net.cn/question/152668)
  + App-Android platform Fix the bug that the GooglePlay channel package cannot use the AutoNavi map [Details](https://ask.dcloud.net.cn/question/152668)
  + App-Android平台 修复 nvue 作为首页使用 picker 可能引起应用无响应的Bug [详情](https://ask.dcloud.net.cn/question/151819)
  + App-Android platform Fix the bug that using picker as the home page may cause the application to become unresponsive [Details](https://ask.dcloud.net.cn/question/151819)
  + App-iOS平台 修复 nvue tabbar 页面 uni.reLaunch 不触发 onUnload 生命周期的Bug [详情](https://ask.dcloud.net.cn/question/152738)
  + App-iOS platform Fix the bug that the nvue tabbar page uni.reLaunch does not trigger the onUnload life cycle [Details](https://ask.dcloud.net.cn/question/152738)
  + Web平台 修复 调用 uni.setClipboardData 会弹起键盘的Bug [详情](https://github.com/dcloudio/uni-app/issues/3569)
  + Web platform Fix the bug that calling uni.setClipboardData will pop up the keyboard [Details](https://github.com/dcloudio/uni-app/issues/3569)
  + 小程序平台 优化 小程序组件内部支持使用 kebab-case 事件名 [详情](https://github.com/dcloudio/uni-app/issues/1802)
  + MiniApp platform optimization MiniApp components support the use of kebab-case event names [details](https://github.com/dcloudio/uni-app/issues/1802)
  + 微信小程序平台 修复 wxs 内调用 triggerEvent 无法携带事件参数的Bug [详情](https://github.com/dcloudio/uni-app/issues/3829)
  + Wechat MiniApp platform to fix the bug that triggerEvent cannot carry event parameters in wxs [Details](https://github.com/dcloudio/uni-app/issues/3829)
  + 快手小程序平台 修复 授权手机号的无回调信息的Bug [详情](https://ask.dcloud.net.cn/question/143078)
  +The Kuaishou MiniApp platform fixes the bug that the authorized mobile phone number has no callback information [Details](https://ask.dcloud.net.cn/question/143078)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 更新 UniPush使用的个推SDK为 3.2.12.0 版，个推核心组件SDK为 3.1.10.0 版，OPPO厂商推送SDK为 3.1.0 版，华为厂商推送SDK为 6.5.0.300 版； 一键登录使用的个验SDK为 3.0.6.0 版；支付宝SDK为 15.8.11 版；新浪微博SDK为 12.5.0 版；友盟统计SDK为 9.5.2 版；解决提交应用市场可能隐私检测被拒的问题 [详情](https://ask.dcloud.net.cn/question/143573)
  + Android platform update UniPush uses version 3.2.12.0 of the Personal Push SDK, the core component SDK of Personal Push is version 3.1.10.0, the OPPO manufacturer's SDK is version 3.1.0, and the Huawei manufacturer's SDK is version 6.5.0.300; one-click login The personal verification SDK used is version 3.0.6.0; the Alipay SDK is version 15.8.11; the Sina Weibo SDK is version 12.5.0; the Umeng Statistics SDK is version 9.5.2; the problem that the privacy test may be rejected when submitting the application market is solved [Details](https://ask.dcloud.net.cn/question/143573)
  + Android平台 修复 getVideoInfo 获取纵向视频文件的宽高值相反的Bug [详情](https://ask.dcloud.net.cn/question/151205)
  + Android platform Fix the bug that getVideoInfo gets the opposite width and height of vertical video files [Details](https://ask.dcloud.net.cn/question/151205)
  + Android平台 修复 previewImage 预览图片时可能出现偏移的Bug [详情](https://ask.dcloud.net.cn/question/151966)
  + Android platform Fix the bug that previewImage may be offset when previewing images [Details](https://ask.dcloud.net.cn/question/151966)
  + iOS平台 修复 uploader 上传文件获取 uploadedSize 值不准确的Bug
  + iOS platform, fix the bug that the uploader uploads files to get the inaccurate uploadedSize value
* 【uni小程序SDK】
* [uni MiniApp SDK]
  + iOS平台 修复 uni.setStorage 存储数据可能出错的Bug
  + iOS platform, fix the bug that uni.setStorage may store data incorrectly

## 3.6.0.20220901-alpha
* 【uni-app】
  + 【重要】新增 uts Android版插件 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + [Important] Added uts Android plugin [Details](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + App-iOS平台 修复 uni.openLocation 底部安全区适配问题 [详情](https://ask.dcloud.net.cn/question/150074)
  + App-iOS platform to fix uni.openLocation bottom safe area adaptation problem [Details](https://ask.dcloud.net.cn/question/150074)
  + App-iOS平台 修复 uni.chooseLocation 可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/152367)
  + App-iOS platform Fix the bug that uni.chooseLocation may cause the app to crash [Details](https://ask.dcloud.net.cn/question/152367)
  + Web平台 新增 支持配置和使用高德地图 [详情](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfigmaps)
  + Web platform added support for configuring and using AutoNavi maps [Details](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfigmaps)
  + 支付宝小程序平台 修复 配置全局小程序组件后编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3619)
  + The Alipay MiniApp platform fixes the bug of compilation error after configuring the global MiniApp components [Details](https://github.com/dcloudio/uni-app/issues/3619)
  + 支付宝小程序平台 修复 启用小程序基础库2.0配置后访问 $slots 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3529)
  + The Alipay MiniApp platform fixes the bug of accessing $slots after enabling the configuration of the MiniApp base library 2.0 [Details](https://github.com/dcloudio/uni-app/issues/3529)
  + 字节小程序平台 新增 vue2 项目支持 onUploadDouyinVideo 生命周期 [详情](https://ask.dcloud.net.cn/question/151113)
  + Byte MiniApp platform added vue2 project to support onUploadDouyinVideo life cycle [details](https://ask.dcloud.net.cn/question/151113)
* 【uniCloud】
  + 调整 本地调试插件 云对象运行参数配置文件改为 ${objectName}.param.js [详情](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#run-obj-param)
  + Adjust the local debugging plugin cloud object running parameter configuration file to ${objectName}.param.js [Details](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#run-obj-param)
  + 修复 本地调试插件 HBuilderX 3.5.5 版本引出的使用 push 扩展库导致其他云函数不能正常运行的Bug
  + Fixed the bug that the use of push extension library caused by the local debugging plugin HBuilderX 3.5.5 caused other cloud functions to fail to run normally
  + 修复 本地调试插件 HBuilderX 3.5.5 版本引出的连接本地云函数时偶发 `SIGN_PARAM_INVALID` 错误
  + Fixed the occasional `SIGN_PARAM_INVALID` error when connecting to a local cloud function caused by the local debugging plugin HBuilderX 3.5.5
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 【重要】Android平台 新增 云端打包支持配置原生应用清单文件 AndroidManifest.xml 和应用资源目录 res、assets [详情](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)
  + [Important] Added support for cloud packaging on Android platform to configure native application manifest file AndroidManifest.xml and application resource directory res, assets [Details](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)
  + Android平台 更新 uni-AD 快手广告SDK Android为 3.3.29 版；快手内容联盟SDK Android为 3.3.31 版
  + Android platform update uni-AD Kuaishou Advertising SDK Android version 3.3.29; Kuaishou Content Alliance SDK Android version 3.3.31
  + Android平台 修复 uni-AD Sigmob激励视频广告点击跳过按钮后关闭触发 onClose 事件返回的 isEnded 属性值可能不准确的Bug
  + Fix the bug that the isEnded property value returned by the onClose event may be inaccurate after the uni-AD Sigmob rewarded Rewarded Ads clicks the skip button to close the Android platform
  + Android平台 修复 腾讯云安全检测可能误报`含数字天堂(dcloud)广告插件,可读取设备信息,可能泄露您的个人隐私`的Bug [详情](https://ask.dcloud.net.cn/question/150624)
  + Android platform fixes the bug that Tencent Cloud security detection may falsely report `contains digital paradise (dcloud) advertising plug-in, which can read device information and may reveal your personal privacy` Bug [Details](https://ask.dcloud.net. cn/question/150624)
  + Android平台 修复 安全检测可能报快手广告 SDK 频繁获取用户信息的Bug
  + Android platform fixes the bug that the security detection may report the Kuaishou Ad SDK to frequently obtain user information
  + iOS平台 修复 3.5.0版本引出的 快手开屏广告点击打开落地页返回后无法进入应用首页的Bug [详情](https://ask.dcloud.net.cn/question/152441)
  + iOS platform fixes the bug of the Kuaishou App Open Ads introduced by version 3.5.0 that cannot enter the homepage of the application after clicking to open the landing page and returning [Details](https://ask.dcloud.net.cn/question/152441)
  + iOS平台 修复 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
  + iOS platform Fixed the bug that the AppStore was not uploaded using the Push module and reported the `ITMS-90078: Missing Push Notification Entitlement` warning

## 3.5.5.20220825-alpha
* 【uni-app】
  + 修复 项目路径包含括号时编译异常的Bug [详情](https://ask.dcloud.net.cn/question/150173)
  + Fix the bug of abnormal compilation when the project path contains brackets [Details](https://ask.dcloud.net.cn/question/150173)
  + App平台 修复 vue 页面 cover-view 组件 flex 布局无效的Bug [详情](https://ask.dcloud.net.cn/question/151697)
  + App platform Fix the bug that the flex layout of the cover-view component of the vue page is invalid [Details](https://ask.dcloud.net.cn/question/151697)
  + App平台 修复 vue3 项目 uni.getSystemInfo 获取 windowHeight 值不准确的Bug [详情](https://ask.dcloud.net.cn/question/150862)
  + App platform Fix the bug of inaccurate windowHeight value obtained by uni.getSystemInfo in vue3 project [Details](https://ask.dcloud.net.cn/question/150862)
  + App平台 修复 vue3 项目 vue 页面 map 组件更新中心坐标后显示错误的Bug [详情](https://ask.dcloud.net.cn/question/151438)
  + App platform Fix the bug that the map component of the vue3 project vue page shows the wrong bug after updating the center coordinates [Details](https://ask.dcloud.net.cn/question/151438)
  + App-Android平台 修复 uni.saveImageToPhotosAlbum 保存网络图片可能覆盖上次保存的图片的Bug [详情](https://ask.dcloud.net.cn/question/125357)
  + App-Android platform Fix the bug that uni.saveImageToPhotosAlbum may overwrite the last saved picture when saving network pictures [Details](https://ask.dcloud.net.cn/question/125357)
  + App-Android平台 修复 picker 组件获取焦点异常的Bug [详情](https://ask.dcloud.net.cn/question/150454)
  + App-Android platform Fix the bug that the picker component gets the focus abnormally [Details](https://ask.dcloud.net.cn/question/150454)
  + App-Android平台 修复 nvue 页面 map 组件 customCallout 设置图片可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/150166)
  + App-Android platform Fix the bug that the image setting of the map component customCallout of nvue page may cause the application to crash [Details](https://ask.dcloud.net.cn/question/150166)
  + App-iOS平台 修复 uni.getSystemSetting 获取的 bluetoothEnabled、locationEnabled 值不准确的Bug
  + App-iOS platform Fix the bug of inaccurate bluetoothEnabled and locationEnabled values obtained by uni.getSystemSetting
  + App-iOS平台 修复 nvue 页面 map 组件 marker 调用 moveAlong 方法没有中断前一次动画的Bug [详情](https://ask.dcloud.net.cn/question/151411)
  + App-iOS platform Fix the bug of nvue page map component marker calling moveAlong method without interrupting the previous animation [Details](https://ask.dcloud.net.cn/question/151411)
  + App-iOS平台 修复 3.5.2 引出的 nvue 页面 ad-content-page 组件在某些场景可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/151778)
  + App-iOS platform Fix the bug that the ad-content-page component of the nvue page introduced in 3.5.2 may cause the application to crash in some scenarios [Details](https://ask.dcloud.net.cn/question/151778)
  + Web平台 修复 vue3 项目 css 环境变量 --window-top 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/150842)
  + Web platform Fix vue3 project css environment variable --window-top calculates the bug [details](https://ask.dcloud.net.cn/question/150842)
  + Web平台 修复 vue3 项目发行模式 showLoading 图标大小显示错误的Bug [详情](https://ask.dcloud.net.cn/question/149819)
  + Web platform Fix the bug that the size of the showLoading icon in the vue3 project release mode is displayed incorrectly [Details](https://ask.dcloud.net.cn/question/149819)
  + Web平台 修复 custom-tab-bar 组件使用 uni.setTabBarItem 设置 visible 无效的Bug [详情](https://ask.dcloud.net.cn/question/132947)
  + Web platform Fix the bug that the custom-tab-bar component uses uni.setTabBarItem to set visible invalid [Details](https://ask.dcloud.net.cn/question/132947)
  + 小程序平台 修复 v-for 内使用复杂表达式后 v-model 失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3173)
  + MiniApp platform fixes the bug that v-model fails after using complex expressions in v-for [Details](https://github.com/dcloudio/uni-app/issues/3173)
  + 支付宝小程序、百度小程序、快手小程序、字节小程序平台 优化 支持自动拷贝 ext.json 文件
  + Alipay MiniApp, Baidu MiniApp, Kuaishou MiniApp, byte MiniApp platform optimization supports automatic copying of ext.json files
  + 支付宝小程序平台 优化 uni.saveImageToPhotosAlbum 接口不再使用旧版 saveImage 接口
  + Alipay MiniApp platform optimization uni.saveImageToPhotosAlbum interface no longer uses the old saveImage interface
  + 字节小程序平台 修复 vue2 项目 反复快速创建销毁页面时组件无法渲染的Bug
  + Byte MiniApp platform fixes the bug that the component cannot be rendered when the vue2 project repeatedly creates and destroys the page quickly
* 【uniCloud】
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
  + Added cloud function uniCloud.getCloudInfos to get cloud information. At the same time, it is compatible with or without concurrent requests [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-cloud-infos)
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
  + Added uni-open-bridge open source library, unified management of credentials for three-party open platforms such as WeChat [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 更新 QQ 登录、分享SDK版本为 3.5.12 版；百度定位SDK为 9.3.5 版，百度地图SDK为 7.5.3 版
  + Android platform update QQ login and share SDK version is version 3.5.12; Baidu positioning SDK is version 9.3.5, Baidu map SDK is version 7.5.3
  + Android平台 修复 UniPush 2.0 厂商推送通道不支持 payload 字段为非 json 字符串的Bug
  + Android platform Fixed the bug that the UniPush 2.0 vendor push channel does not support a non-json string in the payload field
  + Android平台 修复 plus.push.createMessage 创建本地消息 option 参数设置 when 字段无效的Bug
  + Android platform fix plus.push.createMessage to create a local message option parameter setting when field is invalid bug
  + Android平台 修复 plus.runtime.install 升级 apk 可能报空指针的Bug
  + Android platform Fix the bug that plus.runtime.install may report null pointer when upgrading apk
  + iOS平台 更新 uni-AD 百度百青藤广告SDK为 4.891 版
  + iOS platform update uni-AD Baidu Baiqingteng Advertising SDK to version 4.891
  + iOS平台 修复 3.5.0版本引出的 uni-AD 信息流广告设置宽度可能引起显示异常的Bug [详情](https://ask.dcloud.net.cn/question/150789)
  + iOS platform fixes the bug that the width of uni-AD Native Ads caused by version 3.5.0 may cause abnormal display [Details](https://ask.dcloud.net.cn/question/150789)
  + iOS平台 修复 3.5.0版本引出的 使用百度定位模块需要勾选IDFA的Bug
  + iOS platform Fix the bug that IDFA needs to be checked when using Baidu positioning module from version 3.5.0
  + iOS平台 修复 3.5.3版本引起的 标准真机运行基座中一键登录返回的 token 值不正确的Bug
  + iOS platform Fix the bug of incorrect token value returned by one-click login in the standard real machine running base caused by version 3.5.3
  + iOS平台 修复 从本地相册中选择慢动作视频显示的时长不准确的Bug [详情](https://ask.dcloud.net.cn/question/150531)
  + iOS platform Fix the bug that the duration of the slow-motion video selected from the local album is inaccurate [Details](https://ask.dcloud.net.cn/question/150531)
* 【uni小程序SDK】
* [uni MiniApp SDK]
  + Android平台 优化 默认菜单字体大小为20px
  + Android platform optimization The default menu font size is 20px

## 3.5.4.20220805-alpha
* 【uni-app】
  + App平台 优化 vue2 项目 web-view 组件通过 webviewStyles 设置更多样式 [详情](https://ask.dcloud.net.cn/question/149212)
  + App platform optimize vue2 project web-view component set more styles through webviewStyles [Details](https://ask.dcloud.net.cn/question/149212)
  + App平台 优化 vue 页面 web-view 组件内页面默认支持绘制到安全区外 [详情](https://ask.dcloud.net.cn/question/149472)
  + App platform optimization vue page web-view component pages support drawing outside the safe area by default [details](https://ask.dcloud.net.cn/question/149472)
  + App平台 修复 openLocation、chooseLocation 在应用语言改变时没有跟随变化的Bug [详情](https://ask.dcloud.net.cn/question/149216)
  + App platform Fixed the bug that openLocation and chooseLocation did not follow the changes when the application language changed [Details](https://ask.dcloud.net.cn/question/149216)
  + App-Android平台 新增 uni.scanCode autoZoom 属性，可控制扫码时是否启用自动放大功能 [详情](https://uniapp.dcloud.net.cn/api/system/barcode.html)
  + App-Android platform Added the uni.scanCode autoZoom property, which can control whether to enable the automatic zoom function when scanning the code [Details](https://uniapp.dcloud.net.cn/api/system/barcode.html)
  + App-Android平台 修复 nvue map 组件 maker 点聚合坐标重叠无法展现的Bug [详情](https://ask.dcloud.net.cn/question/149665)
  + App-Android platform Fix the bug that the overlapping coordinates of maker points in nvue map component cannot be displayed [Details](https://ask.dcloud.net.cn/question/149665)
  + App-Android平台 修复 nvue map 组件 polyline、polygon 清空数据不生效的Bug
  + App-Android platform Fix the bug that the nvue map component polyline, polygon clearing data does not take effect
  + App-iOS平台 修复 uni.setTabBarItem 动态更新 icon 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/149955)
  + App-iOS platform Fix the bug that uni.setTabBarItem dynamic update icon may not take effect [Details](https://ask.dcloud.net.cn/question/149955)
  + App-iOS平台 修复 nvue map 组件使用 Google 地图时，多个页面中使用地图组件可能无法正常加载的Bug [详情](https://ask.dcloud.net.cn/question/150080)
  + App-iOS platform Fix the bug that when the nvue map component uses Google Maps, the map component may not be loaded properly in multiple pages [Details](https://ask.dcloud.net.cn/question/150080)
  + Web平台 优化 web-view 组件支持 fullscreen 属性 [详情](https://uniapp.dcloud.net.cn/component/web-view.html)
  + Web Platform Optimized web-view component to support fullscreen attribute [Details](https://uniapp.dcloud.net.cn/component/web-view.html)
  + Web平台 修复 vue3 项目 canvas 组件 touch 事件 stop、prevent 修饰符无效的Bug [详情](https://ask.dcloud.net.cn/question/148195)
  + Web platform Fix the bug that the touch event stop and prevent modifier of the canvas component of the vue3 project are invalid [Details](https://ask.dcloud.net.cn/question/148195)
  + 支付宝小程序平台 修复 vue3 项目 访问 $slots 不生效的Bug [详情](https://ask.dcloud.net.cn/question/150373)
  + The Alipay MiniApp platform fixes the bug that the vue3 project access $slots does not take effect [Details](https://ask.dcloud.net.cn/question/150373)
* 【uniCloud】
  + 【重要】新增云函数ip防刷功能，避免大量无效请求导致云函数、数据库响应变慢 [详情](https://uniapp.dcloud.net.cn/uniCloud/ip-filter.html)
  + [Important] Added cloud function ip anti-brush function to avoid a large number of invalid requests causing slow cloud function and database responses [Details](https://uniapp.dcloud.net.cn/uniCloud/ip-filter.html)
  + 修复 部分场景下在 main.js 内使用 uniCloud 报错的Bug
  + Fix the bug of using uniCloud in main.js in some scenarios
  + 修复 uni-admin 在 vue3 项目中使用 uni.showLeftWindow 后组件上 showLeftWindow 值并没有更新的Bug [详情](https://ask.dcloud.net.cn/question/149618)
  + Fix the bug that the value of showLeftWindow on the component is not updated after uni-admin uses uni.showLeftWindow in the vue3 project [Details](https://ask.dcloud.net.cn/question/149618)
  + uni统计2 新增 前端数据上报周期配置项 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html#report-time)
  + uni statistics 2 Added front-end data reporting period configuration item [Details](https://uniapp.dcloud.net.cn/uni-stat-v2.html#report-time)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + iOS平台 修复 3.5.0版本引出的 使用百度地图或百度定位时未勾选`使用广告标识（IDFA）`云打包报错的Bug
  + iOS platform Fixed the bug of cloud package error reported by version 3.5.0 when using Baidu Maps or Baidu Positioning without checking the `Use Advertising Logo (IDFA)`
  + iOS平台 修复 3.5.3版本引出的 开通 uni-AD 开屏广告后台切前台可能导致页面回退不正常的Bug [详情](https://ask.dcloud.net.cn/question/150053)
  + iOS platform fixes the bug caused by version 3.5.3 that opening uni-AD on-App Open Ads in the background and switching to the foreground may cause abnormal page rollback [Details](https://ask.dcloud.net.cn/question/150053)
  + iOS平台 修复 图片选择界面设置 crop 属性选择 iCloud 图片黑屏的Bug [详情](https://ask.dcloud.net.cn/question/149219)
  + iOS platform Fix the bug that the image selection interface set the crop attribute to select the iCloud image black screen [Details](https://ask.dcloud.net.cn/question/149219)

## 3.5.3.20220727-alpha
* 【uni-app】
  + App平台 新增 uni.openAppAuthorizeSetting 跳转系统授权管理页 [详情](https://uniapp.dcloud.io/api/system/openappauthorizesetting.html)
  + App platform Added uni.openAppAuthorizeSetting to jump to the system authorization management page [Details](https://uniapp.dcloud.io/api/system/openappauthorizesetting.html)
  + App-iOS平台 修复 https 请求配置自签名 p12 证书包含中间证书时请求报错的Bug [详情](https://ask.dcloud.net.cn/question/149526)
  + App-iOS platform Fix the bug that an error is reported when the https request configures a self-signed p12 certificate including an intermediate certificate [Details](https://ask.dcloud.net.cn/question/149526)
  + App-iOS平台 修复 nvue box-shadow 样式设置 spread 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/148415)
  + App-iOS platform Fix the bug that the spread parameter of nvue box-shadow style setting is invalid [Details](https://ask.dcloud.net.cn/question/148415)
* 【uniCloud】
  + 新增 uni-admin uni统计支持上传 sourceMap，报错可准确回溯源码 [详情](https://uniapp.dcloud.io/uni-stat-v2.html#sourcemap-parse-error)
  + Added uni-admin uni statistics to support uploading sourceMap, and the sourcemap can be accurately traced when reporting errors [Details](https://uniapp.dcloud.io/uni-stat-v2.html#sourcemap-parse-error)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.480.1350 版，iOS为 4.13.80 版；快手广告SDK iOS为 3.3.27 版；今日头条穿山甲SDK iOS为 4.7.0.0 版；穿山甲GroMore广告SDK iOS为 3.5.1.0 版；Sigmob广告联盟SDK iOS为 4.2.1 版
  + Updated the uni-AD Tencent Youlianghui SDK to version 4.480.1350 for Android and 4.13.80 for iOS; Kuaishou Advertising SDK for iOS to version 3.3.27; Toutiao Pangolin SDK for iOS to version 4.7.0.0; Pangolin GroMore Advertising SDK for iOS Version 3.5.1.0; Sigmob Ad Network SDK iOS version 4.2.1
  + Android平台 更新 UniPush 使用的个推SDK为 3.2.11.0 版，个推核心组件SDK为 3.1.9.0 版；谷歌渠道个推SDK为 3.2.10.8 版，个推核心组件SDK为 3.1.9.10 版；解决安全检测可能报个推SDK超频获取信息的问题 [详情](https://ask.dcloud.net.cn/question/149127)
  + Android platform update UniPush uses the version 3.2.11.0 of the Getui SDK, the Getui core component SDK is version 3.1.9.0; the Google channel Getui SDK is version 3.2.10.8, and the Getui core component SDK is version 3.1.9.10; Security detection may report a problem of pushing SDK overclocking to obtain information [details](https://ask.dcloud.net.cn/question/149127)
  + Android平台 修复 上架某些应用市场审核检测可能报应用后台运行时存在获取任务列表行为的Bug
  + Android platform fix Some app market review and detection may report a bug in the behavior of getting the task list when the app is running in the background
  + iOS平台 修复 3.5.0版本引出的 创建本地消息 plus.push.createMessage 不传 option 参数引起应用崩溃的Bug
  + iOS platform Fixed the bug of creating a local message caused by version 3.5.0 that plus.push.createMessage did not pass the option parameter and caused the application to crash
  + iOS平台 修复 sqlite 在应用 restart 后 executeSql 修改数据报`Attempt to write a readonly database`错误的Bug [详情](https://ask.dcloud.net.cn/question/139765)
  + iOS platform Fix the bug that executeSql modifies the datagram `Attempt to write a readonly database` error after sqlite restarts the application [Details](https://ask.dcloud.net.cn/question/139765)
  + iOS平台 修复 从本地相册中选择慢动作视频引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/149219)
  + iOS platform Fixed the bug that selecting slow motion video from the local album caused the app to crash [Details](https://ask.dcloud.net.cn/question/149219)
  + iOS平台 修复 视频播放 video 的 seek 方法传入小于当前播放时间值无效的Bug [详情](https://ask.dcloud.net.cn/question/148781)
  + iOS platform fix the bug of video playback video's seek method which is less than the current playback time value is invalid [Details](https://ask.dcloud.net.cn/question/148781)
  + iOS平台 修复 打开包含视频播放 video 控件的页面会打断其他App后台音乐播放的Bug [详情](https://ask.dcloud.net.cn/question/146719)
  + iOS platform Fix the bug that opening a page containing video controls will interrupt the background music playback of other apps [Details](https://ask.dcloud.net.cn/question/146719)
* 【uni小程序SDK】
* [uni MiniApp SDK]
  + iOS平台 修复 未开启后台运行，多次切换小程序和原生界面可能导致小程序返回按钮无效的Bug
  + iOS platform fixes the bug that the background operation is not enabled, and switching between the MiniApp and the native interface may cause the MiniApp return button to be invalid

## 3.5.2.20220719-alpha
* 【uni-app】
  + App平台 新增 uni.getSystemSetting 获取手机系统的定位、蓝牙、wifi开关等设置 [详情](https://uniapp.dcloud.io/api/system/getsystemsetting)
  + App platform Added uni.getSystemSetting to get the location, bluetooth, wifi switch and other settings of the mobile phone system [Details](https://uniapp.dcloud.io/api/system/getsystemsetting)
  + App平台 新增 uni.getAppAuthorizeSetting 获取应用权限状态，是否被授予定位、相册等权限 [详情](https://uniapp.dcloud.io/api/system/getappauthorizesetting)
  + App platform Added uni.getAppAuthorizeSetting to get the app permission status, whether it has been granted permissions such as positioning and photo albums [Details](https://uniapp.dcloud.io/api/system/getappauthorizesetting)
  + App平台 新增 uni.createPushMessage 创建本地通知栏消息 [详情](https://uniapp.dcloud.io/api/plugins/push.html#createpushmessage)
  + App platform Added uni.createPushMessage to create local notification bar messages [Details](https://uniapp.dcloud.io/api/plugins/push.html#createpushmessage)
  + App平台 修复 vue3 项目 首次启动调用 uni.getPushClientId 获取不到cid的Bug
  + App platform Fix the bug that the cid cannot be obtained by calling uni.getPushClientId for the first time when the vue3 project is started
  + App平台 修复 vue2 项目 nvue 页面访问 process.env 报错的Bug [详情](https://ask.dcloud.net.cn/question/147948)
  + App platform Fix the bug that the nvue page of the vue2 project reports an error when accessing process.env [Details](https://ask.dcloud.net.cn/question/147948)
  + App、H5平台 修复 vue3 项目 uni.openLocation 未配置 latitude longitude 时不触发 fail 回调的Bug
  + App, H5 platform Fix the bug that the fail callback is not triggered when the uni.openLocation of the vue3 project is not configured with latitude longitude
  + App-Android平台 修复 nvue map 组件放大地图时标记点气泡 callout 不显示的Bug [详情](https://ask.dcloud.net.cn/question/148741)
  + App-Android platform Fix the bug that the marker bubble callout is not displayed when the nvue map component zooms in on the map [Details](https://ask.dcloud.net.cn/question/148741)
  + App-iOS平台 修复 nvue image 组件 src 属性更新使用 gif 格式图片时无法切换的Bug [详情](https://ask.dcloud.net.cn/question/148807)
  + App-iOS platform Fix the bug that the nvue image component src attribute cannot be switched when the gif format image is updated [Details](https://ask.dcloud.net.cn/question/148807)
  + App-iOS平台 修复 nvue 组件动态修改 border-radius 样式可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/144709)
  + App-iOS platform Fix the bug that the dynamic modification of border-radius style of nvue components may not take effect [Details](https://ask.dcloud.net.cn/question/144709)
  + 百度小程序平台 修复 vue3 项目 uni.login 失效的Bug [详情](https://ask.dcloud.net.cn/question/117304)
  + Baidu MiniApp platform to fix the bug that uni.login of vue3 project fails [Details](https://ask.dcloud.net.cn/question/117304)
* 【uniCloud】
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
  + Optimize the uni-admin application management module to manage more application information such as App download address, MiniApp QR code [details](https://uniapp.dcloud.io/uniCloud/admin.html#app-manager)
  + 调整 uni-admin 内置 统一发布页（uni-portal）插件 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#uni-portal)
  + Adjust uni-admin built-in unified publishing page (uni-portal) plugin [Details](https://uniapp.dcloud.io/uniCloud/admin.html#uni-portal)
  + 调整 uni-admin 内置 App升级中心（uni-upgrade-center）插件，并支持多应用商店更新 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#uni-upgrade-center)
  + Adjust uni-admin built-in uni-upgrade-center(uni-upgrade-center) plugin, and support multi-app store update [Details](https://uniapp.dcloud.io/uniCloud/admin.html#uni-upgrade-center)
  + 新增 uni-id-pages 允许覆盖uni-id-co内置校验规则 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#custom-validator)
  + Added uni-id-pages to allow overriding the built-in validation rules of uni-id-co [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#custom-validator)
  + 修复 uni-id-pages uni-id-co的logout接口时没有删除token的Bug
  + Fixed the bug that the token was not deleted when the logout interface of uni-id-pages uni-id-co
  + 修复 uni-id-pages app端 clientInfo.appVersionCode 为数字导致 uni-id-co 校验无法通过的Bug
  + Fixed the bug that the uni-id-co verification could not be passed because the clientInfo.appVersionCode of the uni-id-pages app side was a number
  + 修复 uni-id-pages 微信小程序调用uni-id-co接口报错的Bug [详情](https://ask.dcloud.net.cn/question/148877)
  + Fixed the bug that the uni-id-pages WeChat MiniApp reported an error when calling the uni-id-co interface [Details](https://ask.dcloud.net.cn/question/148877)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 uni-AD 支持穿山甲GroMore广告 包括开屏、信息流、插屏、全屏视频、激励视频广告
  + Added uni-AD support for pangolin GroMore ads including open screen, information flow, interstitial, full screen video, rewarded Rewarded Ads
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.472.1342 版；快手广告SDK Android为 3.3.27 版，iOS为 3.3.26 版；快手内容联盟SDK Android为 3.3.30 版；百度百青藤广告SDK Android为 9.223 版，iOS为 4.883 版；Sigmob广告联盟SDK Android为 4.4.0 版；华为广告SDK Android为 13.4.54.300 版
  + Update uni-AD Tencent Youlianghui SDK Android version 4.472.1342; Kuaishou Advertising SDK Android version 3.3.27, iOS version 3.3.26; Kuaishou Content Alliance SDK Android version 3.3.30; Baidu Baiqingteng Advertising SDK Android is version 9.223, iOS is version 4.883; Sigmob Advertising Alliance SDK Android is version 4.4.0; Huawei Advertising SDK Android is version 13.4.54.300
  + iOS平台 修复 3.5.0版本引出的 plus.runtime.restart 重启应用后页面返回按钮失效的Bug
  + iOS platform Fixed the bug that the back button on the page does not work after the plus.runtime.restart introduced in version 3.5.0 restarts the app
  + iOS平台 修复 3.5.0版本引出的 uni-AD 开通基础广告首次安装可能卡在启动页面的Bug [详情](https://ask.dcloud.net.cn/question/149192)
  + iOS platform Fix the bug that the uni-AD activation basic advertisement caused by version 3.5.0 may be stuck on the startup page for the first time installation [Details](https://ask.dcloud.net.cn/question/149192)
  + iOS平台 修复 plus.runtime.openWeb 在 iOS15.4 及以上设备打开页面导航栏显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/148585)
  + iOS platform Fix plus.runtime.openWeb on iOS15.4 and above devices to open the page navigation bar display abnormally [Details](https://ask.dcloud.net.cn/question/148585)
  + iOS平台 修复 标题栏 titleNView 更新按钮样式导致布局错位的Bug [详情](https://ask.dcloud.net.cn/question/148542)
  + iOS platform Fix the bug that the title bar titleNView update button style causes the layout to be dislocated [Details](https://ask.dcloud.net.cn/question/148542)
  + iOS平台 修复 plus.navigator.getOrientation 在设备横屏状态时返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/148843)
  + iOS platform Fix the bug that plus.navigator.getOrientation returns incorrect value when the device is in landscape state [Details](https://ask.dcloud.net.cn/question/148843)
  + iOS平台 修复 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
  + iOS platform Fixed the bug that the AppStore was not uploaded using the Push module and reported the `ITMS-90078: Missing Push Notification Entitlement` warning
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + iOS平台 修复 偶现内存泄漏可能引起应用崩溃的Bug
  + iOS platform to fix the bug that occasional memory leaks may cause the app to crash
  + iOS平台 修复 直达二级页面后再打开此页面，关闭时会直接返回首页的Bug
  + iOS platform Fix the bug that when you open this page after going to the secondary page, it will directly return to the home page when it is closed

## 3.5.1.20220707-alpha
* 【uni-app】
  + 修复 vue3 项目 编译器清空输出目录可能报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3650)
  + Fix the bug that the compiler of the vue3 project may report an error when the output directory is cleared [Details](https://github.com/dcloudio/uni-app/issues/3650)
  + App、H5平台 优化 movable-view 组件触摸过程中支持设置 disabled 属性 [详情](https://github.com/dcloudio/uni-app/issues/2384)
  + App, H5 platform Optimize movable-view component to support setting disabled property during touch process [Details](https://github.com/dcloudio/uni-app/issues/2384)
  + App平台 修复 map 组件在部分设备显示黑色边框的Bug [详情](https://ask.dcloud.net.cn/question/145449)
  + App platform Fix the bug that the map component displays a black border on some devices [Details](https://ask.dcloud.net.cn/question/145449)
  + App平台 修复 vue3 项目 input 绑定动态 type 报错的Bug
  + App platform to fix the bug of dynamic type error in input binding of vue3 project
  + App平台 修复 vue3 项目 nvue 页面组件插槽样式可能不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3632)
  + App platform Fix the bug that the slot style of the nvue page component of the vue3 project may be incorrect [Details](https://github.com/dcloudio/uni-app/issues/3632)
  + App平台 修复 vue3 项目 vue 页面在 iOS 平台内存不足导致白屏未自动恢复的Bug [详情](https://ask.dcloud.net.cn/article/35913)
  + App platform Fixed the bug that the vue page of the vue3 project was not automatically restored due to insufficient memory on the iOS platform [Details](https://ask.dcloud.net.cn/article/35913)
  + App平台 修复 vue3 项目 nvue 页面 webview 组件 onPostMessage 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/144731)
  + App platform Fix the bug that the onPostMessage event of the webview component of the nvue page of the vue3 project is invalid [Details](https://ask.dcloud.net.cn/question/144731)
  + App-Android平台 修复 nvue 页面为首页时在部分特定手机启动界面关闭过慢的Bug
  + App-Android platform Fix the bug that the startup interface of some specific mobile phones closes too slowly when the nvue page is the home page
  + App-Android平台 修复 nvue image 组件在部分设备可能报空指针错误的Bug [详情](https://ask.dcloud.net.cn/question/147965)
  + App-Android platform Fix the bug that nvue image component may report null pointer error on some devices [Details](https://ask.dcloud.net.cn/question/147965)
  + App-iOS平台 优化 IAP 支付逻辑 补充手动关闭订单策略，解决自动关单但后续报错可能造成丢单的Bug [详情](https://uniapp.dcloud.net.cn/api/plugins/payment.html#iap)
  + App-iOS platform optimizes IAP payment logic, supplements manual order closing strategy, and solves the bug of automatic order closing but subsequent error reporting may cause order loss [Details](https://uniapp.dcloud.net.cn/api/plugins/payment. html#iap)
  + App-iOS平台 修复 uni.getSystemInfo 获取某些设备型号不正确的Bug [详情](https://ask.dcloud.net.cn/question/148344)
  + App-iOS platform Fix the bug that uni.getSystemInfo gets the incorrect model of some devices [Details](https://ask.dcloud.net.cn/question/148344)
  + App-iOS平台 修复 动态设置 tabBar 隐藏再显示后高斯模糊效果失效的Bug [详情](https://ask.dcloud.net.cn/question/146478)
  + App-iOS platform Fix the bug that the Gaussian blur effect is invalid after dynamically setting the tabBar to hide and then display [Details](https://ask.dcloud.net.cn/question/146478)
  + App-iOS平台 修复 nvue bindingx 在滚动视图中使用 transform.translateY 结果有偏差的Bug [详情](https://ask.dcloud.net.cn/question/144209)
  + App-iOS platform Fix the bug that nvue bindingx uses transform.translateY in scroll view, the result is biased [Details](https://ask.dcloud.net.cn/question/144209)
  + App-iOS平台 修复 nvue input 组件嵌套在 list 中时，页面上下滑动 v-model 绑定的值会置空的Bug [详情](https://ask.dcloud.net.cn/question/146246)
  + App-iOS platform fixes the bug that when the nvue input component is nested in the list, the value bound by the v-model will be empty when the page slides up and down [Details](https://ask.dcloud.net.cn/question/146246 )
  + App-iOS平台 修复 nvue textarea 组件设置 auto-height 为 true 时初始高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/146688)
  + App-iOS platform Fix the bug that the initial height of nvue textarea component is incorrect when auto-height is set to true [Details](https://ask.dcloud.net.cn/question/146688)
  + H5平台 补齐 vue2 项目支持 uni.getLaunchOptionsSync [详情](https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html)
  + H5 platform to complement vue2 project support uni.getLaunchOptionsSync [Details](https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html)
  + H5平台 补齐 vue2 项目支持 uni.getEnterOptionsSync [详情](https://uniapp.dcloud.net.cn/api/getEnterOptionsSync.html)
  + H5 platform to complement vue2 project support uni.getEnterOptionsSync [Details](https://uniapp.dcloud.net.cn/api/getEnterOptionsSync.html)
  + H5平台 优化 hover-class 支持鼠标事件
  + H5 platform optimized hover-class to support mouse events
  + H5平台 优化 map 组件 markertap 事件支持返回坐标信息
  + H5 platform optimized map component markertap event supports returning coordinate information
  + H5平台 修复 map 组件 tap 事件重复触发的Bug
  + H5 platform fix the bug that the tap event of the map component is repeatedly triggered
  + 小程序平台 优化 vue2 项目 slot name 支持动态赋值 [详情](https://ask.dcloud.net.cn/question/82506)
  + MiniApp platform optimization vue2 project slot name supports dynamic assignment [details](https://ask.dcloud.net.cn/question/82506)
  + 小程序平台 修复 vue3 项目部分情况下，编译后组件 js 文件名不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3629)
  + The MiniApp platform fixes the bug that the compiled component js file name is incorrect in some cases of the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3629)
  + 小程序平台 修复 vue3 项目部分情况下，数据更新后，页面未渲染的Bug [详情](https://github.com/dcloudio/uni-app/issues/3648)
  + The MiniApp platform fixes the bug that the page is not rendered after the data is updated in some cases of the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3648)
  + 小程序平台 修复 vue2 项目命名插槽使用 v-if 编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/2635)
  + The MiniApp platform fixes the bug that the v-if compilation error is reported in the vue2 project named slot [Details](https://github.com/dcloudio/uni-app/issues/2635)
  + 微信小程序、支付宝小程序平台 新增 vue3 项目 manifest.json 支持 mergeVirtualHostAttributes 配置，用于合并虚拟节点外部样式 [详情](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + Wechat MiniApp and Alipay MiniApp platform added vue3 project manifest.json to support mergeVirtualHostAttributes configuration for merging external styles of virtual nodes [details](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + 百度小程序、字节小程序平台 修复 vue3 项目 部分情况下，组件 ref 获取不到的Bug [详情](https://github.com/dcloudio/uni-app/issues/3615)
  + Baidu MiniApp and byte MiniApp platform fix the bug that component ref cannot get in some cases of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3615)
  + 百度小程序、字节小程序平台 修复 vue3 项目 组件事件名包含`-`或`:`时，无法触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3616)
  + Baidu MiniApp and byte MiniApp platform fix the bug that cannot be triggered when the event name of the vue3 project component contains `-` or `:` [Details](https://github.com/dcloudio/uni-app/issues/3616)
  + 微信小程序平台 修复 vue3 项目 input 组件动态 type 在 iOS 平台不生效的Bug [详情](https://ask.dcloud.net.cn/question/147787)
  + Wechat MiniApp platform to fix the bug that the dynamic type of the input component of the vue3 project does not take effect on the iOS platform [Details](https://ask.dcloud.net.cn/question/147787)
  + 微信小程序平台 修复 vue3 项目 微信开发者工具中配置编译模式丢失的Bug [详情](https://github.com/dcloudio/uni-app/issues/3655)
  + Wechat MiniApp platform to fix the bug of missing configuration compilation mode in Wechat developer tools of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3655)
  + 微信小程序平台 修复 vue3 项目 project.config.json 更新可能导致开发者工具报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3524)
  + Wechat MiniApp platform to fix the bug of vue3 project project.config.json update that may cause developer tools to report errors [Details](https://github.com/dcloudio/uni-app/issues/3524)
  + 百度小程序平台 修复 vue3 项目 事件触发可能混乱的Bug[详情](https://github.com/dcloudio/uni-app/issues/3647)
  + Baidu MiniApp platform to fix the bug that the event trigger of vue3 project may be confusing [details](https://github.com/dcloudio/uni-app/issues/3647)
  + 字节小程序平台 修复 vue3 项目 部分情况下，组件未更新的Bug [详情](https://github.com/dcloudio/uni-app/issues/3625)
  + Byte MiniApp platform fixes the bug that components are not updated in some cases of vue3 project [details](https://github.com/dcloudio/uni-app/issues/3625)
* 【uniCloud】
  + 新增 uni-push2.0 全端支持（App、小程序、web）的云端一体的统一推送服务 [详情](https://uniapp.dcloud.io/unipush-v2.html)
  + Added uni-push2.0 full-end support (App, MiniApp, web) cloud-integrated unified push service [Details](https://uniapp.dcloud.io/unipush-v2.html)
  + 新增 腾讯云平台 数据万象，对云存储文件进行图片缩放、增加水印等计算功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage.html#%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86)
  + Added Tencent Cloud Platform Data Vientiane, zooming in and out of cloud storage files, adding watermarks and other computing functions [Details](https://uniapp.dcloud.net.cn/uniCloud/storage.html#%E6%95%B0 %E6%8D%AE%E5%A4%84%E7%90%86)
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
  + [Important] Adjust the uni statistics 2 version records to reuse the opendb-app-versions table of the uni uni-upgrade-center, and discard the uni-stat-app-versions table [Details](https://uniapp.dcloud.net.cn/uni-stat-v2.html#upgrade)
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
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 优化 uni-AD 激励视频和信息流广告支持并发请求
  + Optimized uni-AD rewarded video and in-feed Native Ads to support concurrent requests
  + Android平台 新增 Google Pay 支持配置支付网关信息 buildTokenizationSpecification [详情](https://uniapp.dcloud.io/tutorial/app-payment-google.html#%E4%BD%BF%E7%94%A8google%E6%94%AF%E4%BB%98)
  + Added support for configuring payment gateway information for Google Pay on Android platform buildTokenizationSpecification [Details](https://uniapp.dcloud.io/tutorial/app-payment-google.html#%E4%BD%BF%E7%94%A8google% E6%94%AF%E4%BB%98)
  + Android平台 更新 腾讯X5内核为 4.3.0.299 版
  + Android platform update Tencent X5 kernel to version 4.3.0.299
  + Android平台 新增 Facebook 登录 SDK 为 12.0.0 版，解决登录受限的问题 [详情](https://ask.dcloud.net.cn/question/147788)
  + Android platform Added Facebook login SDK version 12.0.0 to solve the problem of limited login [Details](https://ask.dcloud.net.cn/question/147788)
  + Android平台 修复 3.5.0 版本引出的 uni-AD 特定情况可能只展示同一广告源广告的Bug
  + Android platform Fix the bug that uni-AD may only display the same advertisement source in the specific situation of uni-AD caused by version 3.5.0
  + Android平台 修复 uploader 上传文件请求返回错误响应码时，无法获取服务器返回数据的Bug
  + Android platform Fixed the bug that the data returned by the server could not be obtained when the uploader uploaded a file request and returned an error response code
  + Android平台 修复 setBadgeNumber 设置角标在新荣耀设备不生效的Bug [详情](https://ask.dcloud.net.cn/question/140910)
  + Android platform Fix the bug that the setBadgeNumber setting angle label does not take effect on new Honor devices [Details](https://ask.dcloud.net.cn/question/140910)
  + iOS平台 新增 IAP支付 手动关闭订单、获取未关闭订单列表等功能，以解决自动关闭订单在某些情况引发的订单丢失的Bug [详情](https://uniapp.dcloud.io/tutorial/app-payment-aip.html)
  + The iOS platform has added functions such as IAP payment to manually close orders and obtain a list of unclosed orders to solve the bug of order loss caused by automatic closing orders in some cases [Details](https://uniapp.dcloud.io/tutorial/ app-payment-aip.html)
  + iOS平台 修复 3.5.0 版本引出的 uni-AD 穿山甲开屏广告偶现 bottomView 没有关闭的Bug
  + iOS platform fixes the bug that bottomView is not closed occasionally in the uni-AD pangolin App Open Ads introduced by version 3.5.0
  + iOS平台 修复 首次启动 App 获取安全区域高度可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/148277)
  + iOS platform Fix the bug that the height of the safe area may be incorrect when launching the app for the first time [Details](https://ask.dcloud.net.cn/question/148277)
  + iOS平台 修复 设备型号名称 model、deviceModel 返回值不规范的Bug
  + iOS platform Fix the bug that the device model name model, deviceModel return value is not standardized
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 getAppRuningForAppid 在部分场景可能报空指针错误的Bug
  + Android platform Fix the bug that getAppRuningForAppid may report null pointer error in some scenarios
  + iOS平台 修复 小程序未开启后台运行，前台运行时调用 open 方法直达页面无效的Bug
  + iOS platform fixes the bug that the MiniApp not start running in the background, and the open method is called when the foreground is running to go to the page.

## 3.5.0.20220623-alpha
* 【uni-app】
  + 新增 uni-app vue2项目 支持使用`@/pages.json`引用条件编译后的`pages.json`文件
  + Added uni-app vue2 project to support using `@/pages.json` to refer to the conditionally compiled `pages.json` file
  + 修复 3.4.17 版本引发的 vue3 项目 运行在小程序平台 `<script setup>`中使用 const 定义 reactive 对象访问出错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3606)
  + Fix the bug caused by version 3.4.17 that the vue3 project runs in the MiniApp platform `<script setup>` using const to define the reactive object access error [Details](https://github.com/dcloudio/uni-app/issues/3606)
  + App、Web平台 修复 3.4.10 版本引出的 vue2项目 image 组件 load 事件图像大小信息不准确的Bug [详情](https://ask.dcloud.net.cn/question/147174)
  + App, Web platform Fix the bug of inaccurate image size information in the image component load event of the vue2 project introduced by version 3.4.10 [Details](https://ask.dcloud.net.cn/question/147174)
  + App平台 优化 slot name 支持动态赋值 [详情](https://ask.dcloud.net.cn/question/95109)
  + App platform Optimize slot name to support dynamic assignment [Details](https://ask.dcloud.net.cn/question/95109)
  + App-Android平台 新增 manifest.json 支持 webview 配置，系统 webview 低于指定版本时，弹出提示或者下载 x5 内核后继续启动 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
  + App-Android platform adds manifest.json to support webview configuration. When the system webview is lower than the specified version, a prompt will pop up or continue to start after downloading the x5 kernel [Details](https://uniapp.dcloud.net.cn/collocation/manifest .html#appwebview)
  + App-Android平台 修复 tabbar 启用高斯模糊后获取 windowBottom 错误的Bug [详情](https://ask.dcloud.net.cn/question/146583)
  + App-Android platform Fix the bug that the tabbar gets windowBottom error after Gaussian blur is enabled [Details](https://ask.dcloud.net.cn/question/146583)
  + App-iOS平台 修复 uni.request 访问特定接口可能数据解析出现乱码的Bug [详情](https://ask.dcloud.net.cn/question/145530)
  + App-iOS platform Fix the bug that garbled characters may appear in data parsing when uni.request accesses specific interfaces [Details](https://ask.dcloud.net.cn/question/145530)
  + 微信小程序、支付宝小程序 新增 vue2项目 manifest.json 支持 scopedSlotsCompiler 配置，用于合并虚拟节点外部样式 [详情](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + Wechat MiniApp and Alipay MiniApp added vue2 project manifest.json to support scopedSlotsCompiler configuration for merging external styles of virtual nodes [details](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + 百度小程序平台 修复 vue3项目 组件嵌套使用时响应式可能失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3612)
  + Baidu MiniApp platform fixes the bug that the responsiveness may fail when the vue3 project components are nested [Details](https://github.com/dcloudio/uni-app/issues/3612)
* 【uniCloud】
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
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 【重要】uni-AD 新增 激励视频广告支持实时竞价 [详情](https://uniapp.dcloud.io/uni-ad.html#bidding)
  + [Important] uni-AD adds Rewarded Ads to support real-time bidding [Details](https://uniapp.dcloud.io/uni-ad.html#bidding)
  + Android平台 更新 云端打包环境 Gradle 为 7.3.3，Android Gradle plugin 为 4.2.0，compileSdkVersion 为 31
  + Android platform update Cloud packaging environment Gradle is 7.3.3, Android Gradle plugin is 4.2.0, compileSdkVersion is 31
  + Android平台 新增 云端打包支持设置 dataBinding、viewBinding [文档](https://uniapp.dcloud.io/collocation/manifest.html#buildfeatures)
  + Android platform Added support for setting dataBinding and viewBinding in cloud packaging [Documentation](https://uniapp.dcloud.io/collocation/manifest.html#buildfeatures)
  + Android平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备在 Android12 设备可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/146849)
  + Android platform Fix the bug that startBluetoothDevicesDiscovery search for nearby Bluetooth devices may cause the app to crash on Android12 devices [Details](https://ask.dcloud.net.cn/question/146849)
  + Android平台 修复 UniPush 存在监听`ACTION_BOOT_COMPLETED`广播行为，可能违反应用市场上架合规检测问题 [详情](https://ask.dcloud.net.cn/question/147319)
  + Android platform Fixed UniPush monitoring `ACTION_BOOT_COMPLETED` broadcast behavior, which may violate the compliance detection of the application market. [Details](https://ask.dcloud.net.cn/question/147319)
  + Android平台 修复 UniPush 调用 plus.runtime.restart 后无法创建本地通知消息的Bug [详情](https://ask.dcloud.net.cn/question/146470)
  + Android platform Fix the bug that UniPush cannot create local notification message after calling plus.runtime.restart [Details](https://ask.dcloud.net.cn/question/146470)
  + Android平台 修复 从本地相册选择大图片预览时可能引起应用崩溃的Bug
  + Android platform Fix the bug that may cause the application to crash when selecting a large image preview from the local album
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK为 4.5.1.6 版
  + iOS platform update uni-AD Toutiao Pangolin SDK to version 4.5.1.6
  + iOS平台 更新 百度定位SDK为 2.0.0 版，百度地图SDK为 6.5.0 版
  + iOS platform update Baidu Positioning SDK is version 2.0.0, Baidu Map SDK is version 6.5.0
  + iOS平台 修复 5+App项目获取5G网络类型错误的Bug
  + iOS platform Fix the bug that the 5+App project gets the wrong type of 5G network
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 启动小程序直达页面参数与文档规范不一致的Bug
  + Android platform fixes the bug that the parameters of launching the MiniApp directly to the page are inconsistent with the document specification

## 3.4.17.20220614-alpha
* 【uni-app】
  + 修复 vue3 项目 onError 生命周期不生效的Bug
  + Fix the bug that the onError life cycle of vue3 project does not take effect
  + App、Web平台 修复 vue3 项目 uni.setTabBarItem 设置 pagePath 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3592)
  + App, Web platform Fix the bug that uni.setTabBarItem setting pagePath does not take effect in vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3592)
  + App平台 优化 video 组件支持 show-mute-btn 配置
  + App platform optimized video component to support show-mute-btn configuration
  + App平台 优化 vue3 项目 rich-text 组件支持服务端渲染
  + App platform optimization vue3 project rich-text components support server-side rendering
  + App平台 修复 3.4.10 版本引出的 scopeId 污染 slot 导致样式异常的Bug [详情](https://ask.dcloud.net.cn/question/145366)
  + App platform Fix the bug that the scopeId polluted slot caused by the 3.4.10 version leads to the abnormal style [Details](https://ask.dcloud.net.cn/question/145366)
  + App平台 修复 调试时调用 uni.getSystemInfo 报错的Bug [详情](https://ask.dcloud.net.cn/question/146611)
  + App platform Fix the bug of calling uni.getSystemInfo when debugging [Details](https://ask.dcloud.net.cn/question/146611)
  + App平台 修复 vue3 项目 Windows 系统上，运行至手机或模拟器时，可能多次同步文件的Bug
  + App platform Fix the bug that files may be synchronized multiple times when running to a mobile phone or simulator on a Windows system of a vue3 project
  + App平台 修复 vue3 项目 nvue 页面 onPageScroll，onReachBottom 不触发的Bug [详情](https://ask.dcloud.net.cn/question/145873)
  + App platform to fix the bug that the onPageScroll and onReachBottom of the nvue page of the vue3 project do not trigger [Details](https://ask.dcloud.net.cn/question/145873)
  + App平台 修复 vue3 项目 uni.getVideoInfo 成功回调不执行Bug
  + App platform to fix the bug that the successful callback of uni.getVideoInfo in vue3 project does not execute
  + App-Android平台 修复 nvue web-view 组件 user-agent 不正确导致加载H5页面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/146877)
  + App-Android platform Fix the bug that the nvue web-view component user-agent is incorrect, causing the H5 page to be displayed abnormally [Details](https://ask.dcloud.net.cn/question/146877)
  + App-Android平台 修复 nvue 组件同时设置 box-shadow、elevation 样式在部分特殊场景可能会出现渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/147041)
  + App-Android platform Fix the bug that the nvue component set box-shadow and elevation styles at the same time may render abnormally in some special scenes [Details](https://ask.dcloud.net.cn/question/147041)
  + iOS平台 修复 nvue ad-content-page 组件暂停后展示其它视频类广告，关闭广告可能引起组件后台自动播放的Bug
  + iOS platform Fixed the bug that other video ads were displayed after the nvue ad-content-page component was paused, and closing the ad might cause the component to automatically play in the background
  + Web平台 修复 vue3 项目 pc端 createSelectorQuery 获取 top 错误Bug
  + Web platform Fix the bug that createSelectorQuery on the PC side of the vue3 project gets the top error
  + 小程序平台 修复 vue3 项目 v-for 嵌套使用 slot 时，渲染不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3587)
  + MiniApp platform to fix the bug of incorrect rendering when v-for is nested in vue3 project [details](https://github.com/dcloudio/uni-app/issues/3587)
  + 微信小程序平台 修复 3.4.13 版本引出的 manifest.json 文件缺少 mp-weixin 节点编译报错的Bug [详情](https://ask.dcloud.net.cn/question/146580)
  + Wechat MiniApp platform fixes the bug that the manifest.json file derived from version 3.4.13 is missing the bug of mp-weixin node compilation error [Details](https://ask.dcloud.net.cn/question/146580)
* 【uniCloud】
  + 修复 本地调试插件 3.4.0版本引出的客户端连接本地云函数时获取客户端 userAgent 为`HBuilderX`的Bug
  + Fix the bug that the client userAgent is `HBuilderX` when the client connected to the local cloud function brought out by the local debugging plugin version 3.4.0
  + 修复 本地调试插件 云函数内使用`console.timeEnd`输出日志错乱的Bug
  + Fixed the bug of using `console.timeEnd` in the local debugging plug-in cloud function to output the log disorderly
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 修复 uni-AD 开屏广告在部分小米手机可能会卡在启动界面的Bug
  + Fix the bug that the uni-AD App Open Ads may be stuck on the startup interface on some Xiaomi phones on the Android platform
  + iOS平台 更新 uni-AD 快手广告SDK为 3.3.25 版，快手内容联盟SDK为 3.3.29 版，解决调用系统相册可能引起崩溃的问题
  + iOS platform updated uni-AD Kuaishou Advertising SDK to version 3.3.25 and Kuaishou Content Alliance SDK to version 3.3.29 to solve the problem that calling system albums may cause crashes

## 3.4.13.20220601-alpha
* 【uni-app】
  + App、H5平台 新增 uni.getDeviceInfo [详情](https://uniapp.dcloud.io/api/system/getDeviceInfo.html)
  + App, H5 platform Added uni.getDeviceInfo [Details](https://uniapp.dcloud.io/api/system/getDeviceInfo.html)
  + App、H5平台 新增 uni.getAppBaseInfo [详情](https://uniapp.dcloud.io/api/system/getAppBaseInfo.html)
  + App, H5 platform Added uni.getAppBaseInfo [Details](https://uniapp.dcloud.io/api/system/getAppBaseInfo.html)
  + App、H5平台 新增 uni.getWindowInfo [详情](https://uniapp.dcloud.io/api/system/getWindowInfo.html)
  + App, H5 platform added uni.getWindowInfo [Details](https://uniapp.dcloud.io/api/system/getWindowInfo.html)
  + App、H5平台 新增 uni.getSystemInfo 添加 devicePixelRatio、deviceOrientation、appLanguage 等字段 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + App, H5 platform Added uni.getSystemInfo Added devicePixelRatio, deviceOrientation, appLanguage and other fields [Details](https://uniapp.dcloud.io/api/system/info.html)
  + App平台 新增 uni.getSystemInfo 添加 romName、romVersion 字段 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + App platform Added uni.getSystemInfo Added romName, romVersion fields [Details](https://uniapp.dcloud.io/api/system/info.html)
  + App平台 修复 3.4.10 版本引出的 view 组件使用 wxs/renderjs 报错的Bug
  + App platform Fixed the bug that the view component from version 3.4.10 reported an error using wxs/renderjs
  + App-Android平台 修复 使用谷歌地图时，mapContext 对象调用 moveAlong 移动 marker 动画过程中拖拽地图会产生偏移的Bug
  + App-Android platform Fix the bug that when using Google Maps, the mapContext object calls moveAlong to move the marker, and dragging the map will cause an offset bug during the animation process
  + App-Android平台 修复 nvue view 组件 hover-class 属性动态改变组件大小时无效的Bug [详情](https://ask.dcloud.net.cn/question/145677)
  + App-Android platform Fix the bug that the nvue view component's hover-class attribute is invalid when the component size is dynamically changed [Details](https://ask.dcloud.net.cn/question/145677)
  + App-iOS平台 修复 nvue 页面滚动视图中设置 position 属性为 sticky 样式显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/144303)
  + App-iOS platform Fix the bug that the position property is set to sticky style in the scroll view of nvue page [Details](https://ask.dcloud.net.cn/question/144303)
  + H5平台 修复 vue3 项目 当 App.vue 使用 setup 时，发行后页面空白的Bug [详情](https://ask.dcloud.net.cn/question/146011)
  + H5 platform Fix vue3 project When App.vue uses setup, the page is blank after release Bug [Details](https://ask.dcloud.net.cn/question/146011)
  + H5平台 修复 3.4.10 版本引发的 vue3 项目在 left/top/right window 页面使用 match-media 报错的Bug [详情](https://ask.dcloud.net.cn/question/146126)
  + H5 platform Fix the bug that the vue3 project caused by version 3.4.10 uses match-media to report errors on the left/top/right window page [Details](https://ask.dcloud.net.cn/question/146126)
  + 微信小程序平台 修复 vue3 项目 ad-custom 组件无法使用的Bug [详情](https://ask.dcloud.net.cn/question/145883)
  + Wechat MiniApp platform to fix the bug that the ad-custom component of vue3 project cannot be used [Details](https://ask.dcloud.net.cn/question/145883)
* 【uniCloud】
  + 新增 uniCloud.onResponse/offResponse 接口用于监听云函数、云对象及clientDB的响应结果 [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk.html#on-response)
  + Added uniCloud.onResponse/offResponse interface to monitor the response results of cloud functions, cloud objects and clientDB [Details](https://uniapp.dcloud.net.cn/uniCloud/client-sdk.html#on-response)
  + 新增 uniCloud响应体规范 添加 newToken 字段，用于token续期。云对象会自动将token持久化存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)
  + Added uniCloud response body specification Added newToken field for token renewal. The cloud object will automatically store the token persistently [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)
  + 修复 uniCloud虚拟目录、以及uni_modules下的云对象目录，右键菜单，没有运行-本地云对象、调试运行-本地云对象的菜单的Bug
  + Fixed the bug of uniCloud virtual directory and cloud object directory under uni_modules, right-click menu, there is no run-local cloud object, debug run-local cloud object menu
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
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 新增 原生隐私政策提示框支持 hrefLoader 属性，配置提示框中点击 href 链接的打开方式 [详情](https://uniapp.dcloud.io/tutorial/app-privacy-android)
  + Android platform Added native privacy policy prompt box to support hrefLoader attribute, configure how to open the href link in the prompt box [Details](https://uniapp.dcloud.io/tutorial/app-privacy-android)
  + Android平台 修复 uni-AD 腾讯优量汇广告联盟部分下载类广告下载成功之后无法安装的Bug
  + Android platform, fix the bug that some download advertisements in uni-AD Tencent Youlianghui Advertising Alliance cannot be installed after successful download
  + iOS平台 更新 一键登录 使用的个验SDK为 2.2.0.0 版，个推核心组件SDK为 1.2.7.0 版
  + iOS platform update One-click login The personal verification SDK used is version 2.2.0.0, and the core component SDK of personal push is version 1.2.7.0
  + iOS平台 修复 音频播放 audio 设置 startTime 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/146028)
  + iOS platform fix the bug that audio playback audio setting startTime may not take effect [Details](https://ask.dcloud.net.cn/question/146028)
  + iOS平台 修复 视频播放 video 播放 rtmp 协议直播流视频时声音只能通过扬声器播放的Bug [详情](https://ask.dcloud.net.cn/question/129703)
  + iOS platform Fix the bug that the sound can only be played through the speaker when the video is playing the rtmp protocol live streaming video [Details](https://ask.dcloud.net.cn/question/129703)
  + iOS平台 修复 视频播放 video 播放 rtmp/rtsp 协议视频时 timeupdate 事件返回当前播放时间 currentTime 始终为 0 的Bug
  + iOS platform Fix the bug that the timeupdate event returns the current playback time currentTime is always 0 when the video is playing rtmp/rtsp protocol video
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 小程序应用资源更新可能引起页面卡顿的Bug
  + Android platform fixes the bug that the update of MiniApp application resources may cause the page to freeze
  + iOS平台 修复 存在自定义 UIWindow 时 toast 可能无法显示的Bug
  + iOS platform fix the bug that toast may not be displayed when there is a custom UIWindow

## 3.4.12.20220523-alpha
* 【uniCloud】
  + 修复 HBuilderX 3.4.10 引起的关联服务空间运行云函数错误的Bug [详情](https://ask.dcloud.net.cn/question/145551)
  + Fix the bug that HBuilderX 3.4.10 caused the error of running cloud functions in the associated service space [Details](https://ask.dcloud.net.cn/question/145551)

## 3.4.11.20220520-alpha
* 【uni-app】
  + App平台 修复 nvue 页面 switch 组件切换状态无限闪动的Bug [详情](https://ask.dcloud.net.cn/question/145272)
  + App platform Fix the bug that the switch state of the nvue page switch component flashes infinitely [Details](https://ask.dcloud.net.cn/question/145272)
  + App平台 修复 纯 nvue 编译模式 uni_modules 内静态资源未拷贝的Bug
  + App platform Fix the bug that static resources in uni_modules are not copied in pure nvue compilation mode
  + App-iOS平台 修复 vue3 项目 nvue 页面 swiper 组件面板指示点无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/145097)
  + App-iOS platform Fix the bug that the indicator point of the swiper component panel on the nvue page of the vue3 project cannot be hidden [Details](https://ask.dcloud.net.cn/question/145097)
  + H5平台 新增 vue3 项目 unicloud-db 组件属性 ssr-key [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db.html#ssrkey)
  + H5 platform Added vue3 project unicloud-db component attribute ssr-key [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db.html#ssrkey)
  + H5平台 修复 vue3 项目 unicloud-db 组件 使用 ssr 时 页面存在2个以上组件时数据显示错乱的Bug [详情](https://ask.dcloud.net.cn/question/139537)
  + H5 platform Fix the bug that the unicloud-db component of the vue3 project uses ssr and the data is displayed in disorder when there are more than 2 components on the page [Details](https://ask.dcloud.net.cn/question/139537)
  + H5平台 修复 3.4.10 版本引出的 vue2 项目启用摇树优化缺失 view 组件的Bug [详情](https://ask.dcloud.net.cn/question/145286)
  + H5 platform Fix the bug that the vue2 project from version 3.4.10 enables tree-shaking optimization and the missing view component [Details](https://ask.dcloud.net.cn/question/145286)
  + 小程序平台 修复 vue3 项目 在模板中使用 wxs、sjs 插值表达式不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3527)
  + MiniApp platform fixes the bug that the use of wxs and sjs interpolation expressions in the template of vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3527)
  + 支付宝小程序平台 修复 vue3 项目 全局组件不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3525)
  + The Alipay MiniApp platform fixes the bug that the global component of the vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3525)
  + 支付宝小程序平台 修复 vue3 项目 sjs 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3527)
  + The Alipay MiniApp platform fixes the bug that the sjs of the vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3527)
* 【uniCloud】
  + uni-admin 优化 首页增加uni统计的设备概览、注册用户概览
  + uni-admin optimization Homepage adds uni statistics device overview and registered user overview
  + uni-admin 优化 登录速度
  + uni-admin optimized login speed
  + uni-admin 修复 从「首页」跳转「概况」时，url 的 query 丢失的 bug  
  + uni-admin fix the bug that the query of url is lost when jumping from "Home" to "Overview"
  + uni-admin 修复 路由改变后面包屑未响应的 bug
  + uni-admin fix bug that breadcrumbs did not respond after route change
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 更新 uni-AD 今日头条穿山甲SDK Android为 4.5.1.1 版；腾讯优量汇SDK iOS为 4.13.65 版；快手广告SDK Android为 3.3.24 版，iOS为 3.3.24 版；百度百青藤广告SDK Android为 9.212 版，iOS为 4.87 版；Sigmob广告联盟SDK Android为 3.5.9 版
  + Update uni-AD Toutiao Pangolin SDK Android version 4.5.1.1; Tencent Youlianghui SDK iOS version 4.13.65; Kuaishou Advertising SDK Android version 3.3.24, iOS version 3.3.24; Baidu Baiqingteng Advertising SDK Android is version 9.212, iOS is version 4.87; Sigmob Advertising Alliance SDK Android is version 3.5.9

## 3.4.10.20220517-alpha
* 【uni-app】
  + 【重要】新增 uni统计2.0版本发布，开源、私有部署、易定制 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
  + [Important] Added uni stat 2.0 version release, open source, private deployment, easy to customize [Details](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
  + 【重要】uniAD 支持微信小程序平台，降低开通流量主门槛 [详情](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + [Important] uniAD supports WeChat MiniApp platform, lowering the main threshold for opening traffic [Details](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + 【重要】App平台 优化 vue2 项目 view 组件实现方式，提高渲染性能。建议相关开发者升级
  + [Important] App platform Optimize the implementation of the view component of the vue2 project to improve the rendering performance. Recommend relevant developers to upgrade
  + 新增 uni.getSystemInfo 支持获取更多属性 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + Added uni.getSystemInfo support to get more properties [Details](https://uniapp.dcloud.io/api/system/info.html)
  + 优化 vue3 项目 兼容 pnpm@7.0.0
  + Optimize vue3 project compatible with pnpm@7.0.0
  + 修复 vue3 项目 部分情况下错误信息不准确的Bug
  + Fix the bug of inaccurate error information in some cases of vue3 project
  + 修复 vue3 项目 vite.config.js 配置 build.minify 为 terser 不生效的Bug [详情](https://ask.dcloud.net.cn/question/144992)
  + Fix the bug that vue3 project vite.config.js configures build.minify as terser does not take effect [Details](https://ask.dcloud.net.cn/question/144992)
  + App、H5平台 优化 image 组件减少网络请求
  + App, H5 platform optimized image components to reduce network requests
  + App、H5平台 修复 canvas transform 渲染时没有使用高清处理的Bug [详情](https://ask.dcloud.net.cn/question/144676)
  + App, H5 platform Fix the bug that high-definition processing is not used when canvas transform is rendered [Details](https://ask.dcloud.net.cn/question/144676)
  + App平台、微信小程序平台 新增 vue3 ad-rewarded-video 激励视频广告组件，更加易用 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + App platform and WeChat MiniApp platform have added vue3 ad-rewarded-video rewarded Rewarded Ads component, which is easier to use [Details](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + App平台、微信小程序平台 新增 vue3 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App platform and WeChat MiniApp platform add vue3 ad-interstitial interstitial Interstitial Ads component [details](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App平台 新增 vue3 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App platform Added vue3 ad-fullscreen-video full-screen video ad component [Details](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App平台 修复 vue3 项目使用录音时报错的Bug [详情](https://ask.dcloud.net.cn/question/144821)
  + App platform Fix the bug that the vue3 project uses the recording error [Details](https://ask.dcloud.net.cn/question/144821)
  + App平台 修复 vue3 项目 纯 nvue 项目编译报错的Bug
  + App platform to fix the bug of compiling error of pure nvue project in vue3 project
  + App平台 修复 nvue 页面列表删除渲染卡顿的Bug [详情](https://ask.dcloud.net.cn/question/144110)
  + App platform Fix the bug that the nvue page list deletes the rendering stuck [Details](https://ask.dcloud.net.cn/question/144110)
  + App平台 修复 nvue 页面 transition 包含多个属性时编译报错的Bug [详情](https://ask.dcloud.net.cn/question/89110)
  + App platform Fix the bug of compilation error when nvue page transition contains multiple properties [Details](https://ask.dcloud.net.cn/question/89110)
  + App-Android平台 补齐 tabBar 和 navigationBar 支持高斯模糊效果 [详情](https://uniapp.dcloud.io/tutorial/app-blureffect)
  + App-Android platform completes tabBar and navigationBar to support Gaussian blur effect [Details](https://uniapp.dcloud.io/tutorial/app-blureffect)
  + H5平台 修复 rich-text 组件部分标签没有加上 scopeId 导致样式应用不上的Bug [详情](https://ask.dcloud.net.cn/question/144042)
  + H5 platform Fix the bug that the rich-text component tags are not added with scopeId, which causes the style to not be applied [Details](https://ask.dcloud.net.cn/question/144042)
  + H5平台 修复 vue3 项目使用 picker 组件报错的Bug [详情](https://ask.dcloud.net.cn/question/144073)
  + H5 platform Fix the bug that the vue3 project uses the picker component to report errors [Details](https://ask.dcloud.net.cn/question/144073)
  + H5平台 修复 vue3 项目 当页面同时存在 vue、nvue 时，样式不正确的Bug [详情](https://ask.dcloud.net.cn/question/144687)
  + H5 platform Fix the bug of incorrect style in vue3 project when the page has both vue and nvue [Details](https://ask.dcloud.net.cn/question/144687)
  + H5平台 修复 vue3 项目 App.vue 使用 setup 不生效的Bug [详情](https://ask.dcloud.net.cn/question/144672)
  + H5 platform Fix the bug that the vue3 project App.vue does not take effect when using setup [Details](https://ask.dcloud.net.cn/question/144672)
  + H5平台 修复 vue3 项目 使用 Vue.js devtools 查看页面状态不显示的Bug [详情](https://github.com/dcloudio/uni-app/issues/3492)
  + H5 platform Fix vue3 project Use Vue.js devtools to view the bug that the page status is not displayed [Details](https://github.com/dcloudio/uni-app/issues/3492)
  + 小程序平台 修复 vue3 项目 部分情况下代码分割错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3491)
  + MiniApp platform to fix the bug of code segmentation error in some cases of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3491)
  + 微信小程序平台 调整 ad 广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad.html#weixin)
  + Wechat MiniApp platform to adjust ad advertising components [details](https://uniapp.dcloud.net.cn/component/ad.html#weixin)
* 【uniCloud】
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
  + uni-captcha added Integration: cloud-integrated component to create, refresh, and display captcha [Details](https://ext.dcloud.net.cn/plugin?id=4048)
  + uni-starter 新增 短信验证码登陆、绑定手机号码，防刷逻辑；当短信验证码输入错误超过2次，弹出图形验证码进行人机校验。[详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + uni-starter adds SMS verification code login, binding mobile phone number, anti-swipe logic; when the SMS verification code is entered incorrectly more than 2 times, the graphic verification code will pop up for man-machine verification. [Details](https://ext.dcloud.net.cn/plugin?id=5057)
  + uni-admin 新增 uni统计数据报表功能 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
  + uni-admin added uni statistics report function [Details](https://ext.dcloud.net.cn/plugin?id=3268)
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 多进程模式下微信分享过程中手动返回页面显示异常的Bug
  + Android platform Fix the bug that the page is displayed abnormally when manually returning to the page during WeChat sharing in multi-process mode
  + Android平台 修复 3.4.7版本引出的 宿主事件回调格式异常的Bug
  + Android platform Fix the bug of abnormal host event callback format caused by version 3.4.7

## 3.4.9.20220508-alpha
* 【uni-app】
  + uni统计 修复 3.4.8 版本引发的上报数据不正常的Bug [详情](https://ask.dcloud.net.cn/question/144408)
  + uni statistics Fix the bug of abnormal reporting data caused by version 3.4.8 [Details](https://ask.dcloud.net.cn/question/144408)
  + App-iOS平台 修复 nvue textarea 组件默认换行不生效的Bug [详情](https://ask.dcloud.net.cn/question/143784)
  + App-iOS platform Fix the bug that the default line break of nvue textarea component does not take effect [Details](https://ask.dcloud.net.cn/question/143784)
  + App-iOS平台 修复 nvue map 组件开启标记点聚合时，调用 removeMarkers 移除所有 marker 引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/143991)
  + App-iOS platform Fix the bug that when the nvue map component enables marker aggregation, calling removeMarkers to remove all markers causes the app to crash [Details](https://ask.dcloud.net.cn/question/143991)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 修复 音频播放 AudioPlayer 暂停后设置播放倍速大于 0 会自动触发播放的Bug [详情](https://ask.dcloud.net.cn/question/143757)
  + Fix the bug that AudioPlayer will automatically trigger playback after setting the playback speed greater than 0 after the audio playback is paused [Details](https://ask.dcloud.net.cn/question/143757)
  + Android平台 修复 uni-AD 开屏广告开通腾讯优量汇可能引起应用启动白屏的Bug
  + On Android platform, fix the bug that uni-AD App Open Ads and opening Tencent Youlianghui may cause the application to start a white screen
  + iOS平台 修复 登录鉴权、分享的 authorize 方法传入认证参数 options 不生效的Bug
  + iOS platform Fix the bug that the login authentication and share authorize method does not take effect when the authentication parameter options are passed in
* 【uniCloud】
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

## 3.4.8.20220428-alpha
* 【uni-app】
  + 新增 vue3 项目内置支持 pinia [详情](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
  + Added built-in support for pinia in vue3 project [Details](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
  + 修复 3.4.6 版本引发的 vue3 项目使用 pinia 报错的Bug [详情](https://ask.dcloud.net.cn/question/143578)
  + Fix the bug that the vue3 project uses pinia to report errors caused by version 3.4.6 [Details](https://ask.dcloud.net.cn/question/143578)
  + 修复 3.4.6 版本引发的 vue3 项目部分情况编译变慢的Bug [详情](https://github.com/dcloudio/uni-app/issues/3458)
  + Fix the bug of slow compilation of some vue3 projects caused by version 3.4.6 [Details](https://github.com/dcloudio/uni-app/issues/3458)
  + App平台、H5平台 修复 canvas 组件画图裁剪异常的Bug [详情](https://ask.dcloud.net.cn/question/142494)
  + App platform, H5 platform Fix the bug of abnormal drawing and clipping of canvas components [Details](https://ask.dcloud.net.cn/question/142494)
  + App平台、微信小程序平台 新增 vue2 ad-rewarded-video 激励视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + Added vue2 ad-rewarded-video rewarded Rewarded Ads component on App platform and WeChat MiniApp platform [Details](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + App平台、微信小程序平台 新增 vue2 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App platform and WeChat MiniApp platform add vue2 ad-fullscreen-video full-screen video advertising component [details](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App平台、微信小程序平台 新增 vue2 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App platform and WeChat MiniApp platform add vue2 ad-interstitial interstitial Interstitial Ads component [details](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App平台 修复 vue3 nvue 页面引用的静态资源编译后可能不存在的Bug
  + App platform Fix the bug that the static resources referenced by the vue3 nvue page may not exist after compilation
  + App平台 修复 vue3 nvue 页面事件无法冒泡的Bug
  + App platform to fix the bug that vue3 nvue page events cannot bubble
  + App平台 修复 vue3 nvue input，textarea 组件的 v-model 不生效的Bug [详情](https://ask.dcloud.net.cn/question/143547)
  + App platform Fix vue3 nvue input, the bug that the v-model of the textarea component does not take effect [Details](https://ask.dcloud.net.cn/question/143547)
  + App平台 修复 navigator 组件 animation-type、animation-duration 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/143377)
  + App platform Fixed the bug of invalid animation-type and animation-duration properties of the navigator component [Details](https://ask.dcloud.net.cn/question/143377)
  + App平台 修复 vue3 nvue movable 组件使用异常的Bug [详情](https://ask.dcloud.net.cn/question/143742)
  + App platform to fix the bug of abnormal use of vue3 nvue movable component [Details](https://ask.dcloud.net.cn/question/143742)
  + App平台 修复 3.4.2 版本引发的 ArrayBuffer 类型判断错误的Bug [详情](https://ask.dcloud.net.cn/question/143534)
  + App platform Fix the bug of wrong ArrayBuffer type judgment caused by version 3.4.2 [Details](https://ask.dcloud.net.cn/question/143534)
  + App-Android平台 修复 3.4.6版本 引出的 nvue 页面在部分设备可能出现渲染闪烁的Bug [详情](https://ask.dcloud.net.cn/question/143657)
  + App-Android platform Fix the bug that the nvue page brought out by version 3.4.6 may render a flickering bug in some devices [Details](https://ask.dcloud.net.cn/question/143657)
  + App-Android平台 修复 3.4.6版本 引出的 nvue 页面 boxShadow 在部分情况下可能渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/143727)
  + App-Android platform Fix the bug that the nvue page boxShadow from version 3.4.6 may render abnormally in some cases [Details](https://ask.dcloud.net.cn/question/143727)
  + App-Android平台 修复 bindingx 执行 getComputedStyle 方法返回异常的Bug [详情](https://ask.dcloud.net.cn/question/143697)
  + App-Android platform Fix the bug that bindingx executes the getComputedStyle method to return an exception [Details](https://ask.dcloud.net.cn/question/143697)
  + App-iOS平台 修复 nvue swiper 组件与页面返回手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/137505)
  + App-iOS platform Fix the bug that the nvue swiper component conflicts with the page return gesture [Details](https://ask.dcloud.net.cn/question/137505)
  + H5平台 修复 vue3 项目 html 原生标签（如div）renderjs/wxs 事件监听无法获取 ownerInstance 的Bug [详情](https://github.com/dcloudio/uni-app/issues/3436)
  + H5 platform Fix vue3 project html native tag (such as div) renderjs/wxs event listener cannot get ownerInstance Bug [Details](https://github.com/dcloudio/uni-app/issues/3436)
  + H5平台 修复 vue3 项目运行到浏览器，本地服务端口校验可能报错的Bug [详情](https://ask.dcloud.net.cn/question/143504)
  + H5 platform Fix the bug that the vue3 project runs to the browser, and the local service port verification may report an error [Details](https://ask.dcloud.net.cn/question/143504)
  + H5平台 修复 vue3 项目 map 组件 polyline、circles 颜色设置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3433)
  + H5 platform Fix the bug that the color settings of the map component polyline and circles of the vue3 project do not take effect [Details](https://github.com/dcloudio/uni-app/issues/3433)
  + 小程序平台 修复 vue3 项目当 style 样式值为数字，部分情况下丢失的Bug [详情](https://github.com/dcloudio/uni-app/issues/3456)
  + MiniApp platform fixes the bug that when the style value of the vue3 project is a number, it is lost in some cases [Details](https://github.com/dcloudio/uni-app/issues/3456)
  + 小程序平台 修复 v-if 内连用多个逻辑表达式编译出错的Bug [详情](https://ask.dcloud.net.cn/question/129122)
  + MiniApp platform to fix the bug of compiling errors with multiple logical expressions in v-if [Details](https://ask.dcloud.net.cn/question/129122)
  + 微信小程序平台 修复 vue3 项目当 input 事件函数返回 Promise 时，输入框显示错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3462)
  + Wechat MiniApp platform to fix the bug that when the input event function returns Promise in the vue3 project, the input box displays the wrong bug [Details](https://github.com/dcloudio/uni-app/issues/3462)
  + 微信小程序平台 修复 uni.getSystemInfoSync() 获取的 safeAreaInsets.bottom 为负数的Bug [详情](https://ask.dcloud.net.cn/question/133479)
  + Wechat MiniApp platform to fix the bug that safeAreaInsets.bottom obtained by uni.getSystemInfoSync() is negative [Details](https://ask.dcloud.net.cn/question/133479)
  + uni-ui 新增 uni-data-select 组件 [详情](https://ext.dcloud.net.cn/plugin?id=7993)
  + Added uni-data-select component to uni-ui [Details](https://ext.dcloud.net.cn/plugin?id=7993)
  + uni-ui 新增 uni-breadcrumb 组件 [详情](https://ext.dcloud.net.cn/plugin?id=7992)
  + uni-ui added uni-breadcrumb component [Details](https://ext.dcloud.net.cn/plugin?id=7992)
  + uni-ui 新增 uni-tooltip 组件 [详情](https://ext.dcloud.net.cn/plugin?id=8020)
  + Added uni-tooltip component to uni-ui [Details](https://ext.dcloud.net.cn/plugin?id=8020)
* 【uniCloud】
  + 修复 云对象 自动展示错误提示界面时 toast 图标错误的Bug [详情](https://ask.dcloud.net.cn/question/142246)
  + Fix the bug that the toast icon is wrong when the cloud object automatically displays the error prompt interface [Details](https://ask.dcloud.net.cn/question/142246)
  + 新增 uniCloud 支持云对象本地运行和调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#run-local)
  + Added uniCloud support for running and debugging cloud objects locally [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#run-local)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.462.1332 版，iOS为 4.13.63 版；今日头条穿山甲SDK iOS为 4.4.0.5 版；快手广告SDK Android为 3.3.23 版，iOS为 3.3.23 版；快手内容联盟SDK iOS为 3.3.28 版；百度百青藤广告SDK iOS为 4.861 版；Sigmob广告联盟SDK iOS为 4.1.0 版
  + Update uni-AD Tencent Youlianghui SDK Android version 4.462.1332, iOS version 4.13.63; Toutiao Pangolin SDK iOS version 4.4.0.5; Kuaishou Advertising SDK Android version 3.3.23, iOS version 3.3.23 Kuaishou Content Alliance SDK iOS is version 3.3.28; Baidu Baiqingteng Advertising SDK iOS is version 4.861; Sigmob Advertising Alliance SDK iOS is version 4.1.0
  + Android平台 更新 高德地图SDK为 9.2.0 版， 解决在部分设备使用地图引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/143573)
  + Android platform update AutoNavi Map SDK to version 9.2.0, to solve the bug that the application crashes when using the map on some devices [Details](https://ask.dcloud.net.cn/question/143573)
  + Android平台 修复 uni-AD 离线打包开通开屏广告可能引起应用崩溃的Bug
  + Android platform fixes the bug that uni-AD offline packaging and opening the App Open Ads may cause the application to crash
  + iOS平台 修复 3.4.6版本 引出的 获取底部安全区域高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/143633)
  + iOS platform to fix the bug that the height of the bottom safe area is incorrect from version 3.4.6 [Details](https://ask.dcloud.net.cn/question/143633)
  + iOS平台 修复 3.4.4版本 引出的 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
  + iOS platform Fix the bug of `ITMS-90078: Missing Push Notification Entitlement` warning caused by version 3.4.4 when uploading the AppStore without using the Push module
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + iOS平台 修复 调用 closeWithCompletion 方法关闭小程序后紧接着在打开小程序可能引起崩溃的Bug
  + On iOS platform, the bug that calling the closeWithCompletion method to close the MiniApp and then opening the MiniApp may cause a crash

## 3.4.6.20220416-alpha
* 【uni-app】
  + 优化 vue3 项目 支持导出 onSaveExitState 生命周期 [详情](https://github.com/dcloudio/uni-app/issues/3427)
  + Optimize vue3 project to support export onSaveExitState life cycle [details](https://github.com/dcloudio/uni-app/issues/3427)
  + 修复 vue3 项目 错误信息行号可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/143075)
  + Fix the bug that the line number of the error message in the vue3 project may be incorrect [Details](https://ask.dcloud.net.cn/question/143075)
  + App平台 修复 vue3 项目 nvue map 组件部分属性无效的Bug [详情](https://ask.dcloud.net.cn/question/142159)
  + App platform Fix the bug that some attributes of the nvue map component of the vue3 project are invalid [Details](https://ask.dcloud.net.cn/question/142159)
  + App平台 修复 InnerAudioContext 某些情况下 paused 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
  + App platform Fix the bug that the paused property value of InnerAudioContext is incorrect in some cases [Details](https://ask.dcloud.net.cn/question/141832)
  + App平台 修复 vue3 项目使用 vue-i18n 运行报错的Bug [详情](https://ask.dcloud.net.cn/question/142911)
  + App platform Fix the bug that the vue3 project uses vue-i18n to run the error [Details](https://ask.dcloud.net.cn/question/142911)
  + App平台 修复 vue3 项目 renderjs 在低版本手机可能运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3366)
  + App platform Fix the bug that renderjs of the vue3 project may run with errors on low-version mobile phones [Details](https://github.com/dcloudio/uni-app/issues/3366)
  + App-Android平台 修复 uni.saveImageToPhotosAlbum 在部分手机可能无法正常保存到系统相册的Bug [详情](https://ask.dcloud.net.cn/question/143125)
  + App-Android platform Fix the bug that uni.saveImageToPhotosAlbum may not be saved to the system album normally on some mobile phones [Details](https://ask.dcloud.net.cn/question/143125)
  + App-Android平台 修复 uni.getScreenBrightness 获取屏幕亮度始终返回 -1 的Bug [详情](https://ask.dcloud.net.cn/question/142726)
  + App-Android platform Fix the bug that uni.getScreenBrightness always returns -1 when getting the screen brightness [Details](https://ask.dcloud.net.cn/question/142726)
  + App-Android平台 修复 nvue 页面调用 dom.scrollToElement 滚动到 list 组件指定元素位置可能无效的Bug [详情](https://ask.dcloud.net.cn/question/143035)
  + App-Android platform Fix the bug that the nvue page calling dom.scrollToElement to scroll to the specified element position of the list component may be invalid [Details](https://ask.dcloud.net.cn/question/143035)
  + App-iOS平台 修复 video 不支持 enable-play-gesture 属性的Bug [详情](https://ask.dcloud.net.cn/question/141862)
  + App-iOS platform Fix the bug that video does not support enable-play-gesture attribute [Details](https://ask.dcloud.net.cn/question/141862)
  + App-iOS平台 修复 nvue input 组件 confirm-hold 属性默认值不正确的Bug
  + App-iOS platform fix the bug that the default value of the confirm-hold property of nvue input component is incorrect
  + App-iOS平台 修复 nvue ad-content-page 显示位置可能偏移的Bug
  + App-iOS platform to fix the bug that the display position of nvue ad-content-page may be offset
  + H5平台 修复 input 组件启用 password 后在小米手机钉钉内置浏览器无法弹出键盘的Bug [详情](https://ask.dcloud.net.cn/question/142834)
  + H5 platform Fix the bug that the keyboard cannot pop up in the built-in browser of Xiaomi mobile phone DingTalk after the password is enabled in the input component [Details](https://ask.dcloud.net.cn/question/142834)
  + 小程序平台 修复 vue3 项目 pages.json 配置国际化信息显示错误的Bug
  + The MiniApp platform fixes the bug that the vue3 project pages.json configures the wrong internationalization information
  + 小程序平台 修复 vue3 项目在 Windows 系统上生成的依赖文件可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3425)
  + The MiniApp platform fixes the bug that the dependency files generated by the vue3 project on the Windows system may be confused [Details](https://github.com/dcloudio/uni-app/issues/3425)
  + QQ小程序平台 修复 vue3 项目部分情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3419)
  + QQ MiniApp platform fixes the bug of running error in some cases of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3419)
  + 微信小程序平台 修复 vue3 项目发行为混合分包运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3416)
  + Wechat MiniApp platform to fix the bug that the vue3 project is issued as a mixed sub-package running error [Details](https://github.com/dcloudio/uni-app/issues/3416)
* 【uniCloud】
  + 【重要】阿里云 调整 单次数据库查询最大超时时间由1秒调整为3秒，需要重新上传云函数触发更新
  + [Important] Alibaba Cloud Adjustment The maximum timeout time for a single database query is adjusted from 1 second to 3 seconds, and you need to re-upload the cloud function to trigger the update
  + 【重要】云对象 调整 默认自动显示请求相关ui（等待loading，错误弹框） [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + [Important] Cloud object adjustment By default, the request-related ui will be automatically displayed (waiting for loading, error pop-up box) [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + JQL 修复 部分情况下过度限制了权限的Bug [详情](https://ask.dcloud.net.cn/question/142457)
  + JQL fix Bug that restricts permissions excessively in some cases [Details](https://ask.dcloud.net.cn/question/142457)
  + 本地调试插件 修复 HBuilderX 2.4.5 版本引出的部分场景下访问本地云函数误报公共模块冲突的Bug
  + Local debugging plug-in Fixed the bug that HBuilderX version 2.4.5 caused a false report of public module conflict when accessing local cloud functions in some scenarios.
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + iOS平台 修复 3.4.5版本 引出的 关闭页面动画异常的Bug [详情](https://ask.dcloud.net.cn/question/142797)
  + iOS platform Fix the bug of abnormal closing page animation caused by version 3.4.5 [Details](https://ask.dcloud.net.cn/question/142797)
  + iOS平台 修复 音频播放 AudioPlayer 获取暂停状态不准确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
  + iOS platform fix the bug that AudioPlayer gets inaccurate pause status [Details](https://ask.dcloud.net.cn/question/141832)
  + iOS平台 修复 音频播放 AudioPlayer 暂停后再恢复播放倍速会重置为1的Bug [详情](https://ask.dcloud.net.cn/question/142848)
  + iOS platform Fix the bug that AudioPlayer will reset to 1 after pausing and then resuming playback [Details](https://ask.dcloud.net.cn/question/142848)
  + iOS平台 修复 视频播放控件 video 在刘海屏设备全屏播放时进度条可能无法拖动的Bug [详情](https://ask.dcloud.net.cn/question/141862)
  + iOS platform Fix the bug that the video playback control video may not be dragged when the video is played in full screen on the Liu Haiping device [Details](https://ask.dcloud.net.cn/question/141862)
  + iOS平台 修复 视频播放控件 video 设置 show-fullscreen-btn 属性为 false 时可能显示不正确的Bug
  + iOS platform fix the bug that the video playback control video may display incorrectly when the show-fullscreen-btn property is set to false
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 新增 支持自定义实现获取匿名设备标识符OAID
  + Android platform Added support for custom implementation to obtain anonymous device identifier OAID

## 3.4.5.20220408-alpha
* 【uni-app】
  + 优化 vue3 项目 支持 vitest 测试框架 [详情](https://github.com/dcloudio/uni-app/issues/3398)
  + Optimize vue3 project to support vitest test framework [details](https://github.com/dcloudio/uni-app/issues/3398)
  + 优化 vue3 项目 全平台支持使用 props 接收页面参数 [详情](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#url-search-params)
  + Optimize the vue3 project to support the use of props to receive page parameters [Details](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#url-search-params)
  + 修复 vue3 项目 App.vue 中的 provide 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3404)
  + Fix the bug that provide does not take effect in App.vue of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3404)
  + App平台 新增 InnerAudioContext、BackgroundAudioManager 支持倍速播放
  + App platform Added InnerAudioContext and BackgroundAudioManager to support double-speed playback
  + App平台 修复 vue3 项目 App.vue 中的 css 可能编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3403)
  + App platform Fix the bug that css in App.vue of vue3 project may compile and report errors [Details](https://github.com/dcloudio/uni-app/issues/3403)
  + App平台 修复 uni.getEnv 在 nvue webview 中返回值不准确的Bug [详情](https://uniapp.dcloud.net.cn/component/web-view.html#getenv)
  + App platform Fix the bug that uni.getEnv returns inaccurate value in nvue webview [Details](https://uniapp.dcloud.net.cn/component/web-view.html#getenv)
  + App-Android平台 修复 3.4.3版本 引出的 nvue 组件设置 box-shadow 后 border 可能显示异常的Bug
  + App-Android platform Fix the bug that the border may display abnormally after setting the box-shadow of the nvue component from version 3.4.3
  + App-Android平台 修复 3.4.3版本 引出的 tabBar 设置 iconPath 且未设置 selectedIconPath 可能引起图标无法正常显示的Bug
  + App-Android platform Fix the bug that the iconPath of the tabBar brought out from version 3.4.3 is set and the selectedIconPath is not set, which may cause the icon to not display properly
  + App-Android平台 修复 nvue 页面 flex 布局在部分设备可能出现换行计算不正确的Bug
  + App-Android platform Fix the bug that the flex layout of nvue page may appear incorrect calculation of line breaks on some devices
  + App-iOS平台 修复 在页面生命周期 onLoad 方法中调用 lockOrientation 锁定屏幕方向可能引起布局异常的Bug
  + App-iOS platform Fix the bug that calling lockOrientation in the onLoad method of the page life cycle to lock the screen orientation may cause abnormal layout
  + App-iOS平台 修复 3.4.4版本 引出的 tabBar 图标显示错位的Bug [详情](https://ask.dcloud.net.cn/question/142685)
  + App-iOS platform Fix the bug that the tabBar icon displayed in the 3.4.4 version is misplaced [Details](https://ask.dcloud.net.cn/question/142685)
  + H5平台 修复 vue3 项目同时使用 style 节点和 style scoped 节点时，样式可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3410)
  + H5 platform Fix the bug that the style may be disordered when the vue3 project uses the style node and the style scoped node at the same time [Details](https://github.com/dcloudio/uni-app/issues/3410)
  + 小程序平台 优化 vue3 项目支持动态导入静态资源 [详情](https://github.com/dcloudio/uni-app/issues/3376)
  + MiniApp platform optimization vue3 project supports dynamic import of static resources [details](https://github.com/dcloudio/uni-app/issues/3376)
  + 小程序平台 修复 vue3 项目 slot 在部分复杂情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3346)
  + The MiniApp platform fixes the bug of the vue3 project slot running in some complex situations [details](https://github.com/dcloudio/uni-app/issues/3346)
  + 小程序平台 修复 vue2 项目 v-if 中同时包含成员表达式和逻辑表达式编译出错的Bug [详情](https://ask.dcloud.net.cn/question/142293)
  + The MiniApp platform fixes the bug that the v-if of the vue2 project contains both member expressions and logical expressions. [Details](https://ask.dcloud.net.cn/question/142293)
  + 微信小程序平台 优化 uni.showActionSheet 支持 title 参数
  + Wechat MiniApp platform optimized uni.showActionSheet to support title parameter
  + 支付宝小程序平台 修复 vue3 项目部分情况下渲染错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3408)
  + Alipay MiniApp platform fixes the bug of rendering error in some cases of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3408)
* 【uniCloud】
  + 修复 3.4.4版本 引出的 clientDB 本地运行报错的Bug
  + Fix the bug of clientDB local running error caused by version 3.4.4
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 修复 uni-AD 腾讯优量汇插屏广告在 onLoad 回调中执行 show 可能引起广告无法正常显示的Bug
  + Android platform fixes the bug that the uni-AD Tencent Interstitial Ads executes show in the onLoad callback, which may cause the advertisement to not display properly
  + iOS平台 修复 安心打包使用 swift 开发的uni原生插件时上传 AppStore 报`ITMS-90426: Invalid Swift Support`错误的Bug [详情](https://ask.dcloud.net.cn/question/142611)
  + iOS platform Fix the bug that `ITMS-90426: Invalid Swift Support` error is reported when uploading the uni native plug-in developed with swift in peace of mind [Details](https://ask.dcloud.net.cn/question/142611)
  + iOS平台 修复 在 iOS15.4 及以上设备系统时间设置为12小时制 pickDate 返回值异常的Bug [详情](https://ask.dcloud.net.cn/question/141906)
  + iOS platform Fix the bug that pickDate returns abnormal value when the system time of iOS15.4 and above devices is set to 12 hours [Details](https://ask.dcloud.net.cn/question/141906)

## 3.4.4.20220403-alpha
* 【uni-app】
  + App平台、H5平台 新增 input 组件配置 ignoreCompositionEvent 属性 [详情](https://uniapp.dcloud.io/component/input?id=input)
  + App platform, H5 platform Added ignoreCompositionEvent property for input component configuration [Details](https://uniapp.dcloud.io/component/input?id=input)
  + App平台 新增 tabbar 支持配置 iconfont [详情](https://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem)
  + App platform Added tabbar support to configure iconfont [Details](https://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem)
  + App平台 修复 vue2 nvue 页面文本首尾回车符占用高度的Bug [详情](https://ask.dcloud.net.cn/question/95429)
  + App platform Fix the bug that the carriage return characters at the beginning and end of the vue2 nvue page text occupy the height [Details](https://ask.dcloud.net.cn/question/95429)
  + App平台 修复 vue3 项目 uni.getSavedFileList、uni.getSavedFileInfo、uni.removeSavedFile、uni.getFileInfo 无效的Bug  [详情](https://ask.dcloud.net.cn/question/142428)
  + App platform Fix the bug that the vue3 project uni.getSavedFileList, uni.getSavedFileInfo, uni.removeSavedFile, uni.getFileInfo is invalid [Details](https://ask.dcloud.net.cn/question/142428)
  + App-Android平台 修复 nvue list 组件横向滚动不会触发 loadmore 事件的Bug
  + App-Android platform Fix the bug that the horizontal scrolling of the nvue list component will not trigger the loadmore event
  + App-Android平台 修复 连续调用 uni.chooseImage 在部分手机可能引起应用闪退的Bug
  + App-Android platform Fix the bug that continuous calling of uni.chooseImage may cause the application to crash on some mobile phones
  + App-Android平台 修复 3.4.3 引出的 tabBar 的列表项未设置 iconPath 会导致文字显示不全的Bug [详情](https://ask.dcloud.net.cn/question/142250)
  + App-Android platform Fixed the bug that the list item of the tabBar introduced in 3.4.3 did not set iconPath, which would cause the text to be incomplete [Details](https://ask.dcloud.net.cn/question/142250)
  + App-iOS平台 修复 video 组件 vslide-gesture-in-fullscreen 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/138299)
  + App-iOS platform Fix the bug that the vslide-gesture-in-fullscreen attribute of the video component is invalid [Details](https://ask.dcloud.net.cn/question/138299)
  + App-iOS平台 修复 nvue image 组件不支持 gif 图片中设置循环次数参数的Bug [详情](https://ask.dcloud.net.cn/question/140176)
  + App-iOS platform Fix the bug that the nvue image component does not support setting the loop count parameter in gif images [Details](https://ask.dcloud.net.cn/question/140176)
  + 小程序平台 修复 vue3 项目 v-model.number 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3381)
  + MiniApp platform to fix the bug that v-model.number of vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3381)
  + 小程序平台 修复 vue3 项目页面复杂时可能编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3397)
  + MiniApp platform fixes the bug that may compile errors when the vue3 project page is complex [Details](https://github.com/dcloudio/uni-app/issues/3397)
  + 微信小程序平台 修复 vue3 项目 input 事件 return 一个字符串没有同步到输入框的Bug [详情](https://github.com/dcloudio/uni-app/issues/3371)
  + Wechat MiniApp platform fixes the bug that the input event of the vue3 project returns a string that is not synchronized to the input box [Details](https://github.com/dcloudio/uni-app/issues/3371)
  + 百度小程序平台 修复 vue3 项目 onInit 生命周期不触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3384)
  + Baidu MiniApp platform fixes the bug that the onInit life cycle of vue3 project does not trigger [Details](https://github.com/dcloudio/uni-app/issues/3384)
  + 支付宝小程序平台 修复 vue2 项目插件内组件部分事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/142048)
  + The Alipay MiniApp platform fixes the bug that some events of the components in the vue2 project plugin are not triggered [Details](https://ask.dcloud.net.cn/question/142048)
  + 支付宝小程序平台 修复 vue3 项目 默认分享功能失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3377)
  + The Alipay MiniApp platform fixes the bug that the default sharing function of the vue3 project fails [Details](https://github.com/dcloudio/uni-app/issues/3377)
* 【uniCloud】
  + 修复 3.4.0版本引出的云函数子目录内文件引用公共模块失败的Bug
  + Fixed the bug that the file in the cloud function subdirectory introduced by version 3.4.0 failed to refer to the public module
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 音频播放 AudioPlayer 支持 playbackRate 设置倍速播放 [文档](https://www.html5plus.org/doc/zh_cn/audio.html#plus.audio.AudioPlayer.playbackRate)
  + Added audio playback AudioPlayer supports playbackRate to set double speed playback [document](https://www.html5plus.org/doc/zh_cn/audio.html#plus.audio.AudioPlayer.playbackRate)
  + Android平台 更新 高德定位SDK为 6.0.1 版，高德地图SDK为 9.0.1 版；UniPush 使用的个推SDK为 3.2.9.0 版，小米厂商推送库SDK为 3.1.1 版；Google地图SDK为 18.0.2 版
  + Android platform update AutoNavi positioning SDK is version 6.0.1, AutoNavi map SDK is version 9.0.1; UniPush uses personal push SDK version 3.2.9.0, Xiaomi manufacturer push library SDK is version 3.1.1; Google map SDK for version 18.0.2
  + Android平台 优化 二维码扫码检测到 QR 码时自动放大，提升扫码识别率 [详情](https://ask.dcloud.net.cn/question/142209)
  + Android platform optimization The QR code will automatically zoom in when the QR code is detected, improving the scanning recognition rate [Details](https://ask.dcloud.net.cn/question/142209)
  + 【重要】Android平台 修复 uni-AD 穿山甲广告联盟在部分设备可能提示`应用的uni-AD业务状态异常`的Bug
  + [Important] Android platform, fix the bug that the uni-AD pangolin advertising alliance may prompt 'the uni-AD business status of the application is abnormal' on some devices
  + iOS平台 修复 视频播放控件 video 播放视频音量与系统音量不一致的Bug
  + iOS platform Fix the bug that the video playback control video playback video volume is inconsistent with the system volume

## 3.4.3.20220325-alpha
* 【uni-app】
  + 【重要】App平台 nvue 页面支持 vue3（需要项目的 Vue 版本切换为3）[详情](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
  + [Important] The nvue page of the App platform supports vue3 (the Vue version of the project needs to be switched to 3) [Details](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
  + App平台、H5平台 新增 map 组件支持 polygons [详情](https://uniapp.dcloud.io/component/map)
  + App platform, H5 platform Added map component to support polygons [Details](https://uniapp.dcloud.io/component/map)
  + App平台、小程序平台 修复 vue3 项目配置 base 后资源路径可能错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3362)
  + App platform and MiniApp platform fix the bug that the resource path may be wrong after the vue3 project is configured with base [details](https://github.com/dcloudio/uni-app/issues/3362)
  + App平台 新增 打开微信客服功能 [详情](https://uniapp.dcloud.io/api/plugins/share.html)
  + App platform Added the function of opening WeChat customer service [Details](https://uniapp.dcloud.io/api/plugins/share.html)
  + App平台 修复 vue3 项目内联样式引用静态资源可能错误的Bug [详情](https://ask.dcloud.net.cn/question/141278)
  + App platform Fix the bug that the inline style of the vue3 project may refer to static resources incorrectly [Details](https://ask.dcloud.net.cn/question/141278)
  + App平台 新增 nvue ad-content-page 组件支持内容播放状态事件start、pause、resume、complete [规范](https://uniapp.dcloud.io/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App platform adds nvue ad-content-page component to support content playback status events start, pause, resume, complete [Specification](https://uniapp.dcloud.io/component/ad-content-page.html#%E7 %9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB %B6)
  + App-Android平台 优化 nvue 组件 box-shadow 渲染逻辑，解决在部分设备可能出现排版异常及闪烁的问题 [详情](https://uniapp.dcloud.io/tutorial/nvue-css.html#android-box-shadow)
  + App-Android platform optimizes the nvue component box-shadow rendering logic to solve the problem of typesetting and flickering that may occur in some devices [Details](https://uniapp.dcloud.io/tutorial/nvue-css.html#android- box-shadow)
  + App-Android平台 修复 nvue 组件设置 overflow 为 hidden 在部分设备无效的Bug [详情](https://ask.dcloud.net.cn/question/114175)
  + App-Android platform Fix the bug that the nvue component set overflow to hidden is invalid in some devices [Details](https://ask.dcloud.net.cn/question/114175)
  + App-Android平台 修复 nvue swiper 组件设置 circular 为 true 时首次启动可能先显示最后一项的Bug [详情](https://ask.dcloud.net.cn/question/140931)
  + App-Android platform Fix the bug that the last item may be displayed first when the nvue swiper component set circular to true [Details](https://ask.dcloud.net.cn/question/140931)
  + App-Android平台 修复 nvue swiper 组件在特定环境下可能出现页面空白的Bug [详情](https://ask.dcloud.net.cn/question/140942)
  + App-Android platform Fix the bug that the nvue swiper component may appear blank page in certain environments [Details](https://ask.dcloud.net.cn/question/140942)
  + App-iOS平台 修复 nvue swiper 组件内嵌 list-waterfall 时，横向滑动的同时列表还可以竖向滚动的Bug [详情](https://ask.dcloud.net.cn/question/134909)
  + App-iOS platform Fix the bug that the list can be scrolled vertically when the list-waterfall is embedded in the nvue swiper component [Details](https://ask.dcloud.net.cn/question/134909)
  + App-iOS平台 修复 nvue 页面内存在可滚动子组件时，开启 enablePullDownRefresh 下拉刷新功能无效的Bug
  + App-iOS platform Fix the bug that the enablePullDownRefresh pull-down refresh function is invalid when there are scrollable subcomponents in the nvue page
  + App平台 修复 vue3 组件 picker-view 调整列数据时渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/140609)
  + App platform Fix the bug that the vue3 component picker-view renders incorrectly when the column data is adjusted [Details](https://ask.dcloud.net.cn/question/140609)
  + H5平台 修复 vue3 项目配置 base 发行后资源路径可能错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3354)
  + H5 platform Fix the bug that the resource path may be wrong after the vue3 project configuration base is released [Details](https://github.com/dcloudio/uni-app/issues/3354)
  + 小程序平台 优化 vue3 项目自定义组件支持 v-bind="" 语法 [详情](https://github.com/dcloudio/uni-app/issues/3330)
  + MiniApp platform optimization vue3 project custom components support v-bind="" syntax [details](https://github.com/dcloudio/uni-app/issues/3330)
  + QQ小程序平台 修复 vue3 项目 appid 配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3339)
  + QQ MiniApp platform fixes the bug that the appid configuration of vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3339)
  + 字节跳动小程序平台 修复 vue3 项目部分情况下数据不响应的Bug [详情](https://github.com/dcloudio/uni-app/issues/3340)
  + The ByteDance MiniApp platform fixes the bug that the data does not respond in some cases of the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3340)
  + 字节跳动小程序平台 修复 vue3 项目 options 方式配置 provide/inject 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3360)
  + The ByteDance MiniApp platform fixes the bug that the vue3 project options configuration provide/inject does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3360)
  + 支付宝小程序平台 修复 vue3 项目分包页面事件响应不正常的Bug [详情](https://ask.dcloud.net.cn/question/140742)
  + The Alipay MiniApp platform fixes the bug that the event response of the subcontracting page of the vue3 project is abnormal [Details](https://ask.dcloud.net.cn/question/140742)
* 【uniCloud】
  + 修复 公共模块右键管理依赖的公共模块不生效的Bug
  + Fix the bug that the public module that the right-click management of the public module depends on does not take effect
  + 修复 修复本地运行云函数调用云对象报错的Bug
  + Fix Fix the bug of calling cloud objects when running cloud functions locally
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + uni-AD 新增 百度百青藤广告联盟支持信息流广告
  + uni-AD added Baidu Baiqingteng Advertising Alliance to support Native Ads
  + Android平台 更新 uni-AD 百度百青藤广告SDK 为 9.202 版
  + Android platform update uni-AD Baidu Baiqingteng Advertising SDK to version 9.202
  + Android平台 修复 在部分设备识别国际化语言不正确的Bug [详情](https://ask.dcloud.net.cn/question/141688)
  + Android platform Fix the bug that the internationalized language is not recognized correctly in some devices [Details](https://ask.dcloud.net.cn/question/141688)
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 微信登录连续多次调用可能会导致失败的Bug
  + Android platform to fix the bug that WeChat login may fail to be called multiple times in a row
  + Android平台 修复 转场动画在 Android12 设备可能失效的Bug
  + Android platform to fix the bug that the transition animation may fail on Android12 devices
  + Android平台 修复 调用 startActivityForUniMPTask 在 Android8 以下设备可能会引起应用崩溃的Bug
  + Android platform Fix the bug that calling startActivityForUniMPTask may cause the application to crash on devices below Android8

## 3.4.2.20220310-alpha
* 【uni-app】
  + App平台 新增 vue 页面支持 live-pusher 组件 [详情](https://uniapp.dcloud.net.cn/component/live-pusher)
  + App platform Added vue page support for live-pusher component [Details](https://uniapp.dcloud.net.cn/component/live-pusher)
  + App平台 修复 uni.request、uni.onSocketMessage 等接口返回的 ArrayBuffer 类型不可用 instanceof 做类型判断的Bug
  + App platform Fixed the bug that the ArrayBuffer type returned by interfaces such as uni.request and uni.onSocketMessage cannot be used for type judgment with instanceof
  + App平台 修复 vue3 项目 wxs/renderjs 监听事件运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3324)
  + App platform Fix the bug of wxs/renderjs monitoring event running error in vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3324)
  + App-Android平台 修复 nvue map组件使用高德地图时，频繁调用 addMarkers 增加聚合点可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/140461)
  + App-Android platform Fix the bug that when the nvue map component uses the Gaode map, frequently calling addMarkers to increase the aggregation point may cause a crash [Details](https://ask.dcloud.net.cn/question/140461)
  + App-Android平台 修复 nvue map组件使用谷歌地图时，调用 moveAlong 移动 marker 可能出现偏移的Bug
  + App-Android platform Fixed the bug that when the nvue map component uses Google Maps, calling moveAlong to move the marker may appear offset
  + App-iOS平台 补齐 uni-AD 支持 nvue ad-content-page组件 [文档](https://uniapp.dcloud.net.cn/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App-iOS platform completes uni-AD to support nvue ad-content-page component [document](https://uniapp.dcloud.net.cn/component/ad-content-page.html#%E7%9F%AD %E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App-iOS平台 修复 nvue 组件 userInteractionEnabled 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/140838)
  + App-iOS platform Fix the bug that the nvue component userInteractionEnabled property is invalid [Details](https://ask.dcloud.net.cn/question/140838)
  + App-iOS平台 修复 nvue refresh 组件 pullingdown 事件触发时机不正确的Bug [详情](https://ask.dcloud.net.cn/question/138962)
  + App-iOS platform Fix the bug that nvue refresh component pullingdown event trigger timing is incorrect [Details](https://ask.dcloud.net.cn/question/138962)
  + H5平台 修复 vue3 项目 wxs/renderjs 热刷新不生效的Bug [详情](https://ask.dcloud.net.cn/question/140800)
  + H5 platform Fix the bug that the vue3 project wxs/renderjs hot refresh does not take effect [Details](https://ask.dcloud.net.cn/question/140800)
  + H5平台 修复 vue3 项目特定情况下拉刷新后页面跳转的Bug [详情](https://github.com/dcloudio/uni-app/issues/3326)
  + H5 platform Fix the bug of page jumping after pull-down refresh under specific circumstances of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3326)
  + 小程序平台 修复 vue3 项目模板中 style 属性包含换行符时编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3320)
  + MiniApp platform fixes the bug of compilation error when the style attribute in the vue3 project template contains line breaks [Details](https://github.com/dcloudio/uni-app/issues/3320)
  + 支付宝小程序平台 优化 vue3 项目默认开启 es6=>es5 [详情](https://ask.dcloud.net.cn/question/140742)
  + Alipay MiniApp platform optimization vue3 project opens es6=>es5 by default [Details](https://ask.dcloud.net.cn/question/140742)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 新增 Google支付支持 isReadyToPay 方法 [文档](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.PaymentChannel.isReadyToPay)
  + Android platform added Google payment support isReadyToPay method [document](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.PaymentChannel.isReadyToPay)

## 3.4.1.20220308-alpha
* 【uni-app】
  + App平台 修复 uni.getBackgroundAudioManager 的 onPrev onNext 事件无效Bug [详情](https://ask.dcloud.net.cn/question/107325)
  + App platform Fix the bug that the onPrev onNext event of uni.getBackgroundAudioManager is invalid [Details](https://ask.dcloud.net.cn/question/107325)
  + App平台 修复 3.4.0 引发的 vue2 项目 canvas 组件 fillText 失效的Bug [详情](https://ask.dcloud.net.cn/question/140786)
  + App platform Fix the bug that the fillText of the canvas component of the vue2 project caused by 3.4.0 is invalid [Details](https://ask.dcloud.net.cn/question/140786)
  + App平台 修复 3.4.0 引发的 vue2 项目 nvue 页面的 uni.createLivePusherContext 无效Bug [详情](https://ask.dcloud.net.cn/question/140743)
  + App platform Fix the bug of invalid uni.createLivePusherContext on the nvue page of the vue2 project caused by 3.4.0 [Details](https://ask.dcloud.net.cn/question/140743)
  + App平台 修复 vue3 项目 navigator 组件和 rich-text 组件嵌套使用时 scopeId 值不一致导致的样式Bug [详情](https://ask.dcloud.net.cn/question/140644)
  + App platform Fix the style bug caused by inconsistent scopeId values when the navigator component of the vue3 project and the rich-text component are nested. [Details](https://ask.dcloud.net.cn/question/140644)
  + App-iOS平台 修复 nvue map 组件 marker 的 joinCluster 为 false 时 removeMarkers 方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/140648)
  + App-iOS platform Fix the bug that the removeMarkers method does not take effect when the joinCluster of the nvue map component marker is false [Details](https://ask.dcloud.net.cn/question/140648)
  + App-iOS平台 修复 nvue rich-text 组件 text-overflow 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/140586)
  + App-iOS platform Fix the bug that the text-overflow style of nvue rich-text component does not take effect [Details](https://ask.dcloud.net.cn/question/140586)
  + H5平台 修复 部分情况下 input 组件显示数值错误的Bug [详情](https://ask.dcloud.net.cn/question/140366)
  + H5 platform Fix the bug that the input component displays the wrong value in some cases [Details](https://ask.dcloud.net.cn/question/140366)
  + 小程序平台 修复 vue3 项目部分情况下视图更新延迟的Bug [详情](https://github.com/dcloudio/uni-app/issues/3311)
  + MiniApp platform fixes the bug of view update delay in some cases of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3311)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 3.4.0 引出的 UniPush模块使用 Oppo 厂商通道时云端打包失败的Bug [详情](https://ask.dcloud.net.cn/question/140765)
  + The bug that the cloud package fails when the UniPush module derived from Android platform 3.4.0 uses the Oppo vendor channel [Details](https://ask.dcloud.net.cn/question/140765)
* 【UniMPSDK】
  + iOS平台 修复 小程序SDK中设置 user-agent 影响宿主原生页面中 Webview 的Bug
  + iOS platform fixes the bug that setting user-agent in the MiniApp SDK affects the Webview in the host's native page

## 3.4.0.20220304-alpha
* 【uni-app】
  + 新增 vue2 项目支持发布到 京东小程序
  + Added vue2 project support for publishing to Jingdong MiniApp
  + 修复 vue3 项目兼容 vite@2.8.x [详情](https://ask.dcloud.net.cn/question/139311)
  + Fix vue3 project compatible with vite@2.8.x [Details](https://ask.dcloud.net.cn/question/139311)
  + 修复 vue3 项目兼容 vite-plugin-eslint [详情](https://github.com/dcloudio/uni-app/issues/3247)
  + Fix vue3 project compatibility with vite-plugin-eslint [details](https://github.com/dcloudio/uni-app/issues/3247)
  + App平台、H5平台 优化 取消全局 canvas 高清处理，支持配置单个 canvas 组件 hidpi 属性
  + App platform, H5 platform optimization Cancel the global canvas HD processing, support the configuration of the hidpi attribute of a single canvas component
  + App平台、H5平台 修复 自定义组件监听 tap.native 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3259)
  + App platform, H5 platform Fix the bug that custom component monitoring tap.native does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3259)
  + App平台、H5平台 修复 vue3 项目 uni.pageScrollTo 的 duration 为0时不生效的Bug [详情](https://ask.dcloud.net.cn/question/139432)
  + App platform, H5 platform Fix the bug that the duration of uni.pageScrollTo of vue3 project does not take effect when the duration is 0 [Details](https://ask.dcloud.net.cn/question/139432)
  + App平台、H5平台 修复 vue3 项目 input 组件类型为 number 时在低版本 webview 失去焦点时报错的Bug [详情](https://ask.dcloud.net.cn/question/138088)
  + App platform, H5 platform Fix the bug that when the input component type of the vue3 project is number, when the low version webview loses focus [Details](https://ask.dcloud.net.cn/question/138088)
  + App平台 新增 地图支持 Google地图 [详情](https://uniapp.dcloud.net.cn/app-maps)
  + App platform Added map support for Google Maps [Details](https://uniapp.dcloud.net.cn/app-maps)
  + App平台 新增 支付支持 Paypal、Stripe、Google Pay [详情](https://uniapp.dcloud.io/app-payment-paypal)
  + App platform added Paypal, Stripe, Google Pay [Details](https://uniapp.dcloud.io/app-payment-paypal)
  + App平台 新增 登录支持 Google、Facebook [详情](https://uniapp.dcloud.io/api/plugins/login?id=app-oauth)
  + App platform Added login support Google, Facebook [Details](https://uniapp.dcloud.io/api/plugins/login?id=app-oauth)
  + App平台 新增 vue 页面 video 组件支持 vslide-gesture、vslide-gesture-in-fullscreen 属性 [详情](https://uniapp.dcloud.io/component/video)
  + App platform Added vue page video component to support vslide-gesture, vslide-gesture-in-fullscreen properties [Details](https://uniapp.dcloud.io/component/video)
  + App平台 新增 pages.json 支持在 style 配置 disableSwipeBack 以禁用 iOS 侧滑返回
  + App platform Added pages.json support to configure disableSwipeBack in style to disable swipe back on iOS
  + App平台 修复 uni.addPhoneContact 重复添加联系人的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I4NY6C)
  + App Platform Fix the bug of adding contacts repeatedly in uni.addPhoneContact [Details](https://gitee.com/dcloud/uni-app/issues/I4NY6C)
  + App平台 修复 vue3 项目使用 html 原生标签（如div）时，事件监听报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3240)
  + App platform Fix the bug of event monitoring error when vue3 project uses html native tags (such as div) [Details](https://github.com/dcloudio/uni-app/issues/3240)
  + App-Android平台 修复 nvue image 组件 mode 属性设置为 widthFix/HeightFix 时可能导致图片无法显示的Bug [详情](https://ask.dcloud.net.cn/question/139541)
  + App-Android platform Fix the bug that the image cannot be displayed when the mode attribute of the nvue image component is set to widthFix/HeightFix [Details](https://ask.dcloud.net.cn/question/139541)
  + App-Android平台 修复 nvue list 组件插入列表项可能引起页面闪烁的Bug [详情](https://ask.dcloud.net.cn/question/139424)
  + App-Android platform Fix the bug that the nvue list component inserting list items may cause the page to flicker [Details](https://ask.dcloud.net.cn/question/139424)
  + App-Android平台 修复 nvue web-view 组件 progress 颜色值不支持3位十六进制格式字符串的Bug [详情](https://ask.dcloud.net.cn/question/138670)
  + App-Android platform Fix the bug that the progress color value of the nvue web-view component does not support the 3-digit hexadecimal format string [Details](https://ask.dcloud.net.cn/question/138670)
  + App-Android平台 修复 nvue web-view 组件 无法正常加载使用非受信任证书网页的Bug [详情](https://ask.dcloud.net.cn/question/134287)
  + App-Android platform Fix the bug that nvue web-view component cannot load pages using untrusted certificate [Details](https://ask.dcloud.net.cn/question/134287)
  + App-Android平台 修复 nvue animation 动画切到后台可能无法执行的Bug [详情](https://ask.dcloud.net.cn/question/137868)
  + App-Android platform Fix the bug that nvue animation animation may not be executed when it switches to the background [Details](https://ask.dcloud.net.cn/question/137868)
  + App-Android平台 修复 nvue map 组件 marker 设置 joinCluster 为 true 时导致 callouttap 事件不响应的Bug [详情](https://ask.dcloud.net.cn/question/136381)
  + App-Android platform Fix the bug that the callouttap event does not respond when the nvue map component marker sets joinCluster to true [Details](https://ask.dcloud.net.cn/question/136381)
  + App-Android平台 修复 nvue text 组件 font-style 设置 italic 在部分设备可能无效的Bug [详情](https://ask.dcloud.net.cn/question/120801)
  + App-Android platform Fix the bug that the font-style setting of nvue text component italic may be invalid in some devices [Details](https://ask.dcloud.net.cn/question/120801)
  + App-Android平台 修复 nvue 页面切换可能导致 plus.key.addEventListener 监听 keydown 事件不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/140203)
  + App-Android platform Fix the bug that the nvue page switching may cause plus.key.addEventListener to listen to the keydown event and not trigger the callback [Details](https://ask.dcloud.net.cn/question/140203)
  + App-iOS平台 修复 vue3 项目 调试时启动白屏的Bug
  + App-iOS platform Fix the bug of starting the white screen when debugging the vue3 project
  + H5平台 优化 vue3 项目 navigator 组件使用 a 标签渲染以利于SEO
  + H5 platform Optimize vue3 project navigator component to use a tag rendering to facilitate SEO
  + H5平台 修复 vue3 项目 html 中引入 static 目录的 js 文件包含 ifdef 编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3201)
  + H5 platform Fix the bug that the js file introduced into the static directory in the html of the vue3 project contains the bug of ifdef compilation error [Details](https://github.com/dcloudio/uni-app/issues/3201)
  + H5平台 修复 vue3 项目 renderjs 发行后不正常的Bug [详情](https://ask.dcloud.net.cn/question/137832)
  + H5 platform Fix the abnormal bug after the release of vue3 project renderjs [Details](https://ask.dcloud.net.cn/question/137832)
  + H5平台 修复 vue3 项目 dataset 不支持对象类型错误的Bug [详情](https://ask.dcloud.net.cn/question/139181)
  + H5 platform Fix the bug that the vue3 project dataset does not support the wrong object type [Details](https://ask.dcloud.net.cn/question/139181)
  + H5平台 修复 vue3 项目 禁用摇树后，uni.showModal 等弹窗缺少样式的Bug [详情](https://ask.dcloud.net.cn/question/139593)
  + H5 platform Fix the bug that the pop-up window such as uni.showModal lacks styles after disabling tree shaking in the vue3 project [Details](https://ask.dcloud.net.cn/question/139593)
  + H5平台 修复 vue3 项目 热刷新编译报错的Bug [详情](https://ask.dcloud.net.cn/question/135765)
  + H5 platform Fix the bug of hot refresh compilation error of vue3 project [Details](https://ask.dcloud.net.cn/question/135765)
  + H5平台 修复 vue3 项目 text 组件使用 v-if 时显示错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3225)
  + H5 platform Fix the bug that the text component of the vue3 project displays an error when using v-if [Details](https://github.com/dcloudio/uni-app/issues/3225)
  + H5平台 修复 map 组件 marker 不能设置 id 为 0 的Bug
  + H5 platform fix the bug that the map component marker cannot be set to 0 with id
  + 小程序平台 修复 vue3 项目 uni.getSystemInfo 无法获取 deviceId 的Bug [详情](https://ask.dcloud.net.cn/question/139733)
  + MiniApp platform to fix the bug that uni.getSystemInfo cannot get deviceId in vue3 project [Details](https://ask.dcloud.net.cn/question/139733)
  + 小程序平台 修复 vue3 项目 不支持 v-html 的Bug [详情](https://ask.dcloud.net.cn/question/138290)
  + MiniApp platform to fix the bug that vue3 project does not support v-html [Details](https://ask.dcloud.net.cn/question/138290)
  + 小程序平台 修复 vue3 项目 v-if 中使用 wxs 等模块时报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3199)
  + The MiniApp platform fixes the bug in the v-if of the vue3 project when using modules such as wxs [details](https://github.com/dcloudio/uni-app/issues/3199)
  + 小程序平台 修复 vue3 项目 defineEmits 事件名包含 - 分隔符时无法正常监听的Bug [详情](https://github.com/dcloudio/uni-app/issues/3210)
  + MiniApp platform to fix the bug that the defineEmits event name of the vue3 project cannot be monitored normally when the delimiter is included [Details](https://github.com/dcloudio/uni-app/issues/3210)
  + 小程序平台 修复 vue3 项目 setup 手动引入组件不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3213)
  + The MiniApp platform fixes the bug that the manual introduction of components in the vue3 project setup does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3213)
  + 小程序平台 修复 vue3 项目 v-for 嵌套使用时部分情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3263)
  + The MiniApp platform fixes the bug of running errors in some cases when v-for is nested in the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3263)
  + 小程序平台 修复 vue3 项目 wxs 调用 callMethod 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3218)
  + The MiniApp platform fixes the bug that the wxs call method of the vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3218)
  + 小程序平台 修复 vue3 项目 全局组件路径解析错误的Bug [详情](https://ask.dcloud.net.cn/question/138662)
  + The MiniApp platform fixes the bug that the global component path parsing error of the vue3 project [details](https://ask.dcloud.net.cn/question/138662)
  + 小程序平台 修复 vue3 项目 全局 mixin 分享 onShareAppMessage，onShareTimeline 不生效的Bug [详情](https://ask.dcloud.net.cn/question/140351)
  + The MiniApp platform fixes the bug that the global mixin of the vue3 project shares onShareAppMessage and onShareTimeline does not take effect [Details](https://ask.dcloud.net.cn/question/140351)
  + 微信小程序平台 修复 vue2 项目 v-for 遍历部分表达式时 stop 修饰符无效的Bug [详情](https://ask.dcloud.net.cn/question/138684)
  + Wechat MiniApp platform fixes the bug that the stop modifier is invalid when v-for traverses some expressions in vue2 project [Details](https://ask.dcloud.net.cn/question/138684)
  + 微信小程序平台 修复 vue3 项目 canvas 监听 touch 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3209)
  + Wechat MiniApp platform to fix the bug that canvas monitoring touch does not take effect in vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3209)
  + 微信小程序平台 修复 vue3 项目部分情况下事件监听错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3228)
  + WeChat MiniApp platform fixes the bug of disordered event monitoring in some cases of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3228)
  + 微信小程序平台 修复 vue3 项目使用小程序插件组件无法传递属性的Bug [详情](https://github.com/dcloudio/uni-app/issues/3257)
  + Wechat MiniApp platform to fix the bug that the vue3 project uses the MiniApp plugin component to pass attributes [details](https://github.com/dcloudio/uni-app/issues/3257)
  + 支付宝小程序平台 修复 vue2 项目小程序组件事件监听失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/2273)
  + The Alipay MiniApp platform fixes the bug that the event monitoring of the MiniApp component of the vue2 project fails [Details](https://github.com/dcloudio/uni-app/issues/2273)
  + 支付宝小程序平台 修复 vue2 项目小程序插件中组件事件监听失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/2410)
  + The Alipay MiniApp platform fixes the bug of the component event monitoring failure in the MiniApp plug-in of the vue2 project [Details](https://github.com/dcloudio/uni-app/issues/2410)
  + 【重要】hello uniCloud 新增云对象基础使用示例[详情](https://ext.dcloud.net.cn/plugin?id=4082)
  + [Important] hello uniCloud adds cloud object basic usage example [details](https://ext.dcloud.net.cn/plugin?id=4082)
* 【uniCloud】
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
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 支持Google地图 [详情](https://uniapp.dcloud.io/app-maps?id=google%e5%9c%b0%e5%9b%be)
  + Added support for Google Maps [Details](https://uniapp.dcloud.io/app-maps?id=google%e5%9c%b0%e5%9b%be)
  + 【重要】uni-AD 新增 百度百青藤广告联盟 支持开屏、插屏、激励视频广告 [详情](https://ask.dcloud.net.cn/article/36769)
  + [Important] uni-AD has added Baidu Baiqingteng Advertising Alliance to support open-screen, interstitial, and rewarded Rewarded Ads[Details](https://ask.dcloud.net.cn/article/36769)
  + 【重要】Android平台 新增 uni-AD 支持华为广告联盟 包括开屏、信息流、插屏、激励视频广告 [详情](https://ask.dcloud.net.cn/article/36769)
  + [Important] Android platform adds uni-AD to support Huawei Advertising Alliance, including screen opening, information flow, interstitial, and rewarded Rewarded Ads[Details](https://ask.dcloud.net.cn/article/36769)
  + Android平台 优化 应用启动首页可能出现上下抖动的Bug [详情](https://ask.dcloud.net.cn/question/138243)
  + Android platform optimization The application startup home page may appear a bug that shakes up and down [Details](https://ask.dcloud.net.cn/question/138243)
  + Android平台 修复 使用 X5 内核调用 plus.key.addEventListener 监听 keyup 事件不触发回调的Bug
  + Android platform fixed the bug that using the X5 kernel to call plus.key.addEventListener to listen to the keyup event does not trigger the callback
  + Android平台 修复 Android8及以上设备 plus.navigator.createShortcut 无法创建桌面快捷图标的Bug [详情](https://ask.dcloud.net.cn/question/125119)
  + Android platform Fix the bug that Android8 and above devices plus.navigator.createShortcut cannot create desktop shortcut icons [Details](https://ask.dcloud.net.cn/question/125119)
  + Android平台 修复 视频播放控件 video 边缘可能出现黑线的Bug [详情](https://ask.dcloud.net.cn/question/138320)
  + Android platform Fix the bug that black lines may appear on the video edge of the video playback controls [Details](https://ask.dcloud.net.cn/question/138320)
  + Android平台 修复 在部分设备调用 plus.runtime.restart 可能引起应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/138965)
  + Android platform Fix the bug that calling plus.runtime.restart on some devices may cause the application to crash [Details](https://ask.dcloud.net.cn/question/138965)
  + Android平台 修复 系统语言设置为土耳其语时，tabbar 切换选项可能导致不显示的Bug [详情](https://ask.dcloud.net.cn/question/139313)
  + Android platform Fix When the system language is set to Turkish, the tabbar switch option may cause a bug that is not displayed [Details](https://ask.dcloud.net.cn/question/139313)
  + Android平台 修复 本地相册选择视频设置 compressed 为 false 时依然会压缩的Bug [详情](https://ask.dcloud.net.cn/question/140417)
  + Android platform Fix the bug that the video will still be compressed when the local album selects compressed to false [Details](https://ask.dcloud.net.cn/question/140417)
  + iOS平台 新增 uni原生插件支持 applicationMain 获取 main 函数启动参数 argc、argv [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=hook%e7%b3%bb%e7%bb%9f%e4%ba%8b%e4%bb%b6)
  + Added uni native plugin for iOS platform to support applicationMain to get main function startup parameters argc, argv [document](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=hook%e7%b3%bb% e7%bb%9f%e4%ba%8b%e4%bb%b6)
  + iOS平台 修复 Webview窗口标题栏 titleNView无法动态更新网络页面标题的Bug [详情](https://ask.dcloud.net.cn/question/138958)
  + iOS platform Fix the bug that the title bar of the Webview window titleNView cannot dynamically update the title of the web page [Details](https://ask.dcloud.net.cn/question/138958)
  + iOS平台 修复 compressVideo 视频压缩可能出现尺寸错乱的Bug [详情](https://ask.dcloud.net.cn/question/138303)
  + iOS platform Fix the bug that compressVideo video compression may appear wrong size [Details](https://ask.dcloud.net.cn/question/138303)
  + iOS平台 修复 微博分享 type 为 web 时无法正常分享的Bug [详情](https://ask.dcloud.net.cn/question/138830)
  + iOS platform Fix bug that cannot be shared normally when Weibo sharing type is web [Details](https://ask.dcloud.net.cn/question/138830)
  + iOS平台 修复 播放背景音频时系统锁屏界面音乐播放器的进度条可能显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/140101)
  + iOS platform Fix the bug that the progress bar of the music player on the system lock screen may display incorrectly when playing background audio [Details](https://ask.dcloud.net.cn/question/140101)
* 【uni小程序SDK】
* [uni MiniApp SDK]
  + Android平台 优化 混淆配置规则，解决 zip4j 可能与其他的库冲突的Bug
  + Android platform optimization Confused configuration rules to solve the bug that zip4j may conflict with other libraries
  + Android平台 修复 3.3.5 引出的 微信支付回调可能会引起崩溃的Bug
  + Android platform Fix the bug that WeChat payment callback caused by 3.3.5 may cause a crash
  + Android平台 修复 多个小程序分别配置使用 vue2、vue3， 同时打开可能引起白屏的Bug [详情](https://ask.dcloud.net.cn/question/138576)
  + Fix multiple MiniApp on Android platform to use vue2 and vue3 respectively, and open bugs that may cause white screen at the same time [Details](https://ask.dcloud.net.cn/question/138576)
  + Android平台 修复 关闭小程序后台运行模式，重复操作打开/关闭小程序可能导致小程序无法正常运行的Bug
  + On Android platform, the bug that closes the MiniApp background running mode, and repeats the operation to open/close the MiniApp may cause the MiniApp to fail to run normally
  + Android平台 修复 小程序切换到后台，直达页面启动时出现闪屏的Bug
  + Android platform fixes the bug that the MiniApp switches to the background, and the splash screen appears when the direct page starts
  + iOS平台 修复 关闭小程序后快速启动小程序并直达页面，重复操作偶现崩溃的Bug
  + iOS platform fixes the bug that after closing the MiniApp, quickly start the MiniApp and go to the page, and the repeated operation occasionally crashes

## 3.3.12.20220222-alpha
* 【uni-app】
  + App平台、H5平台 修复 vue3 项目两个开启了下拉刷新的页面跳转后返回，下拉刷新不触发 onPullDownRefresh 生命周期的Bug [详情](https://github.com/dcloudio/uni-app/issues/3187)
  + App platform and H5 platform fix the bug of the onPullDownRefresh life cycle that the two pages of the vue3 project with pull-down refresh enabled are returned after jumping. [Details](https://github.com/dcloudio/uni-app/issues /3187)
  + App平台 修复 vue3 项目 nvue 页面使用 map 组件时部分方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/138515)
  + App platform Fix the bug that some methods do not take effect when the map component is used on the nvue page of the vue3 project [Details](https://ask.dcloud.net.cn/question/138515)
  + App-Android平台 修复 picker 组件选择选项后同页面 input 组件可能无法正常获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/138237)
  + App-Android platform Fix the bug that the input component on the same page may not get the focus normally after the picker component selects an option [Details](https://ask.dcloud.net.cn/question/138237)
  + App-Android平台 修复 vue3 项目 安卓低版本时使用 type=number 的 input 组件输入报错的Bug [详情](https://ask.dcloud.net.cn/question/138088)
  + App-Android platform Fix the bug that the input component of type=number is used to input errors in the vue3 project when the Android version is low [Details](https://ask.dcloud.net.cn/question/138088)
  + App-iOS平台 修复 3.3.2 版本引出的支持多个音频同时播放引发iOS影响静音开关的问题，默认不支持同时播放多个文件，如果需要可手动设置 sessionCategory
  + App-iOS platform Fixed the problem that the 3.3.2 version supports simultaneous playback of multiple audios and causes iOS to affect the mute switch. By default, multiple files are not supported at the same time. If necessary, you can manually set sessionCategory
  + App-iOS平台 修复 vue3 项目 canvas 组件绘制本地图像后无法导出到本地到Bug
  + App-iOS platform Fix the bug that the canvas component of the vue3 project cannot export to the local after drawing the local image
  + H5平台 优化 uni.chooseLocation 支持传入坐标
  + H5 platform optimized uni.chooseLocation to support incoming coordinates
  + H5平台 修复 vue2 项目开启摇树后 ad 组件失效的Bug
  + H5 platform Fix the bug that the ad component fails after the vue2 project opens the tree shake
  + H5平台 修复 vue3 项目 image 组件 mode=heightFix 图像大小显示错误的Bug
  + H5 platform Fix the bug that the image component mode=heightFix of the vue3 project image component displays the wrong image size
  + H5平台 修复 vue3 项目 button 组件发行后 loading 不显示的Bug
  + H5 platform Fix the bug that the loading is not displayed after the button component of the vue3 project is released
  + 支付宝小程序平台 修复 触发自定义事件报错的Bug [详情](https://ask.dcloud.net.cn/question/138706)
  + The Alipay MiniApp platform fixes the bug that triggers custom events to report errors [Details](https://ask.dcloud.net.cn/question/138706)
* 【uniCloud】
  + 修复 JQL语法 getTemp 返回结果传递给组件属性时在微信小程序端报错的Bug [详情](https://ask.dcloud.net.cn/question/138308)
  + Fix the bug that an error is reported on the WeChat MiniApp when the JQL syntax getTemp returns the result to the component property [Details](https://ask.dcloud.net.cn/question/138308)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.450.1320 版，iOS为 4.13.50 版；今日头条穿山甲SDK Android为 4.3.0.1 版， iOS为 4.3.0.2 版；快手广告SDK Android为 3.3.21 版，iOS为 3.3.21 版
  + Update uni-AD Tencent Youlianghui SDK Android version 4.450.1320, iOS version 4.13.50; Toutiao Pangolin SDK Android version 4.3.0.1, iOS version 4.3.0.2; Kuaishou Advertising SDK Android version 3.3.21 version, iOS version 3.3.21
  + Android平台 修复 一键登录 授权页面服务协议自定义复选框状态图片设置不正确的Bug [详情](https://ask.dcloud.net.cn/question/139830)
  + Android platform Fix the bug that the one-click login authorization page service agreement custom checkbox state picture is set incorrectly [Details](https://ask.dcloud.net.cn/question/139830)
  + iOS平台 修复 Downloader 下载图片文件可能失败的Bug [详情](https://ask.dcloud.net.cn/question/116101)
  + iOS platform Fix the bug that Downloader may fail to download image files [Details](https://ask.dcloud.net.cn/question/116101)
  + iOS平台 修复 geitImageInfo 可能不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/139361)
  + iOS platform Fix the bug that geitImageInfo may not trigger callback [Details](https://ask.dcloud.net.cn/question/139361)
* 【uni小程序SDK】
* [uni MiniApp SDK]
  + iOS平台 修复 动态切换横竖屏导致页面布局异常的Bug
  + iOS platform Fix the bug that the page layout is abnormal due to dynamic switching between horizontal and vertical screens

## 3.3.8.20220114-alpha
* 【uniCloud】
  + 修复 3.3.7-alpha引出的JQL数据库管理无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/138139)
  + Fix the bug that JQL database management caused by 3.3.7-alpha cannot be used normally [Details](https://ask.dcloud.net.cn/question/138139)
* 【uni-app】
  + App-Android平台 修复 3.3.7 版本引出的 nvue list 组件滚动后也会触发 click 事件的Bug
  + App-Android platform Fix the bug that the nvue list component introduced in version 3.3.7 will also trigger the click event after scrolling
  + 小程序平台 修复 vue3 项目 组件使用 id 属性不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3179)
  + MiniApp platform fixes the bug that the id attribute of the vue3 project component does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3179)
  + 小程序平台 修复 vue3 项目 部分情况 defineExpose 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3180)
  + The MiniApp platform fixes the bug that defineExpose does not take effect in some cases of the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3180)
  + 小程序平台 修复 vue3 项目 兼容 unocss 插件 [详情](https://ask.dcloud.net.cn/question/138021)
  + MiniApp platform repair vue3 project compatible with unocss plugin [details](https://ask.dcloud.net.cn/question/138021)
  + 微信小程序平台 修复 vue3 项目 当 v-for 循环变量名为 index 时渲染不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3193)
  + Wechat MiniApp platform to fix the bug that the vue3 project renders incorrectly when the v-for loop variable is named index [Details](https://github.com/dcloudio/uni-app/issues/3193)
  + 微信小程序平台 修复 vue3 项目无法自动开启开发工具窗口的Bug
  + Wechat MiniApp platform to fix the bug that the vue3 project cannot automatically open the development tool window
  + 支付宝小程序平台 修复 vue3 项目 mixin 中包含 props 运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3191)
  + The Alipay MiniApp platform fixes the bug that the mixin of the vue3 project contains props running errors [Details](https://github.com/dcloudio/uni-app/issues/3191)

## 3.3.7.20220112-alpha
* 【uni-app】
  + App平台、H5平台 新增 textarea、input 组件支持 confirm-hold 属性 [详情](https://uniapp.dcloud.io/component/input)
  + App platform, H5 platform Added textarea and input components to support confirm-hold attribute [Details](https://uniapp.dcloud.io/component/input)
  + App平台、H5平台 优化 image 组件 draggable 属性默认值改为 false
  + App platform, H5 platform Optimize the default value of the draggable attribute of the image component to false
  + App平台 优化 uni.request 请求参数支持 ArrayBuffer 类型
  + App platform optimized uni.request request parameters to support ArrayBuffer type
  + App平台 修复 vue3 项目 发行后 renderjs 调用 ownerInstance.callMethod 失效的Bug [详情](https://ask.dcloud.net.cn/question/137832)
  + App platform Fix the bug that renderjs calls ownerInstance.callMethod invalid after the vue3 project is released [Details](https://ask.dcloud.net.cn/question/137832)
  + App平台 修复 vue3 项目 picker 组件默认语言固定为英文的Bug [详情](https://ask.dcloud.net.cn/question/136954)
  + App platform Fix the bug that the default language of the picker component of the vue3 project is fixed to English [Details](https://ask.dcloud.net.cn/question/136954)
  + App-Android平台 修复 nvue input 组件不支持自定义字体的Bug [详情](https://ask.dcloud.net.cn/question/135514)
  + App-Android platform Fix the bug that nvue input component does not support custom fonts [Details](https://ask.dcloud.net.cn/question/135514)
  + App-Android平台 修复 nvue list 组件不支持 click 事件的Bug [详情](https://ask.dcloud.net.cn/question/136754)
  + App-Android platform Fix the bug that nvue list component does not support click event [Details](https://ask.dcloud.net.cn/question/136754)
  + App-iOS平台 修复 nvue swiper-list 组件滚动条无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/136261)
  + App-iOS platform Fix the bug that the scroll bar of nvue swiper-list component cannot be hidden [Details](https://ask.dcloud.net.cn/question/136261)
  + H5平台 修复 右键单击事件 contextmenu 丢失 clientX、clientY 属性的Bug [详情](https://ask.dcloud.net.cn/question/136530)
  + H5 platform Fix the bug that the right-click event contextmenu loses clientX, clientY properties [Details](https://ask.dcloud.net.cn/question/136530)
  + 小程序平台 修复 模板中包含转义引号时在小程序开发工具中编译报错或显示异常的Bug
  + MiniApp platform fixes the bug that when the template contains escaped quotation marks, an error is reported or displayed in the MiniApp development tool when compiling
  + 微信小程序平台 修复 多页面，组件内使用插槽数据时，差量编译丢失插槽信息的Bug [详情](https://ask.dcloud.net.cn/question/136258)
  + Wechat MiniApp platform fixes the bug of missing slot information when using slot data in components [Details](https://ask.dcloud.net.cn/question/136258)
* 【uniCloud】
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在临时表内使用 as 或其他运算操作 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + Added JQL syntax to use getTemp for join table query, support using as or other operations in temporary tables [Details](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with- temp)
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在虚拟联表内使用 foreignKey 方法指定要使用的 foreignKey 的归属的字段 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + Added JQL syntax. When using getTemp to query the linked table, it supports using the foreignKey method in the virtual linked table to specify the field of the foreignKey to be used [Details](https://uniapp.dcloud.net.cn/uniCloud/jql ?id=lookup-with-temp)
  + 新增 web控制台 阿里云 前端网页托管支持为指定路径开启 uni-app history 路由跳转模式支持 [详情](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=routing)
  + Added support for web console Alibaba Cloud front-end web hosting to enable uni-app history routing jump mode support for specified paths [Details](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=routing)
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
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 【重要】新增 Payment 模块支持 Paypal支付、Stripe支付、Google支付 [文档](https://uniapp.dcloud.io/app-payment)
  + [Important] Added Payment module to support Paypal payment, Stripe payment, Google payment [Documentation](https://uniapp.dcloud.io/app-payment)
  + 【重要】新增 Push 模块支持 Google推送 Firebase Cloud Push (FCM) [文档](https://uniapp.dcloud.io/app-push-fcm)
  + [Important] Added Push module to support Google Push Firebase Cloud Push (FCM) [Documentation](https://uniapp.dcloud.io/app-push-fcm)
  + 【重要】新增 Statistic 模块支持 Google统计 [文档](https://uniapp.dcloud.io/app-statistic-google)
  + [Important] Added Statistic module to support Google statistics [Documentation](https://uniapp.dcloud.io/app-statistic-google)
  + 新增 一键登录 支持 closeIcon 属性设置自定义关闭按钮图片 [文档](https://uniapp.dcloud.io/univerify)
  + Added one-click login Support closeIcon property to set custom close button image [Documentation](https://uniapp.dcloud.io/univerify)
  + 更新 uni-AD 快手广告SDK Android为 3.3.20 版，iOS为 3.3.20 版；快手内容联盟SDK Android为 3.3.27 版， iOS为 3.3.27 版
  + Update uni-AD Kuaishou Advertising SDK to version 3.3.20 for Android and version 3.3.20 for iOS; Kuaishou Content Alliance SDK to version 3.3.27 for Android and version 3.3.27 for iOS
  + Android平台 修复 调用 plus.runtime.restart 重启应用后 user-agent 会清空的Bug [详情](https://ask.dcloud.net.cn/question/136105)
  + Android platform Fix the bug that user-agent will be cleared after calling plus.runtime.restart to restart the application [Details](https://ask.dcloud.net.cn/question/136105)
  + Android平台 修复 plus.downloader.enumerate 可能获取不到下载任务的Bug [详情](https://ask.dcloud.net.cn/question/137548)
  + Android platform Fix the bug that plus.downloader.enumerate may not get the download task [Details](https://ask.dcloud.net.cn/question/137548)
  + Android平台 修复 一键登录 在部分 Android 8.0、8.1 设置无法弹出登录框的Bug
  + Android platform Fix the bug that one-click login cannot pop up the login box in some Android 8.0, 8.1 settings
  + Android平台 修复 一键登录 设置登录界面 logo 图片可能不生效的Bug
  + For Android platform, fix the bug that the logo image of the login interface may not work with one-click login
  + Android平台 修复 视频播放控件 VideoPlayer 设置 object-fit 属性可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/137150)
  + Android platform Fix the bug that the video player control VideoPlayer setting object-fit attribute may not take effect [Details](https://ask.dcloud.net.cn/question/137150)
  + Android平台 修复 使用系统定位模块执行 watchPosition 后再执行 getCurrentPosition 可能失败的Bug [详情](https://ask.dcloud.net.cn/question/137586)
  + Android platform fix the bug that use the system positioning module to execute watchPosition and then execute getCurrentPosition may fail [Details](https://ask.dcloud.net.cn/question/137586)
  + Android平台 修复 Push模块 createMessage 在安卓系统8以下系统可能无法创建通知栏消息的Bug [详情](https://ask.dcloud.net.cn/question/137923)
  + Android platform Fix the bug that the Push module createMessage may not be able to create notification bar messages in systems below Android 8 [Details](https://ask.dcloud.net.cn/question/137923)
  + Android平台 修复 图片选择界面设置 crop 属性在部分手机和模拟器上可能引起黑屏崩溃的Bug [详情](https://ask.dcloud.net.cn/question/136969)
  + Android platform Fix the bug that setting the crop attribute in the image selection interface may cause a black screen crash on some mobile phones and emulators [Details](https://ask.dcloud.net.cn/question/136969)
  + Android平台 修复 图片选择界面未勾选`原图`时图片方向可能发生变化的Bug [详情](https://ask.dcloud.net.cn/question/137358)
  + Android platform Fix the bug that the image orientation may change when the `original image` is not checked in the image selection interface [Details](https://ask.dcloud.net.cn/question/137358)
  + iOS平台 修复 uni-AD 使用自定义 storyboard 时开屏广告底部应用图标、名称可能不显示的Bug
  + Fix the bug that the app icon and name may not be displayed at the bottom of the App Open Ads when uni-AD uses a custom storyboard on the iOS platform
* 【uni小程序SDK】
* [uni MiniApp SDK]
  + 新增 小程序 wgt 资源文件支持加密 [文档](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=installWgt)
  + Added support for encryption of MiniApp wgt resource files [document](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=installWgt)
  + Android平台 修复 不设置任何参数初始化小程序SDK可能会引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/137175)
  + Android platform fixes the bug that initializing the MiniApp SDK without setting any parameters may cause a crash [Details](https://ask.dcloud.net.cn/question/137175)
  + Android平台 修复 启动使用 vue3 的小程序可能出现白屏的Bug
  + Fix the bug that white screen may appear when launching the MiniApp using vue3 on Android platform
  + iOS平台 修复 小程序未开启后台运行，通过手势关闭小程序后快速打开小程序偶现崩溃的Bug
  + iOS platform fixes the bug that the MiniApp not start running in the background, and the MiniApp is quickly opened after closing the MiniApp through gestures and occasionally crashes
  + iOS平台 修复 在隐藏小程序的回调方法中再次打开同一小程序无效的Bug
  + iOS platform fixes the bug that opening the same MiniApp again in the callback method of the hidden MiniApp is invalid
  + iOS平台 修复 同时打开多个小程序 getCurrentPageUrl 获取当前显示的小程序页面路径不正确的Bug
  + iOS platform fixes the bug that when multiple MiniApp are opened at the same time, getCurrentPageUrl gets the incorrect page path of the currently displayed MiniApp


## 3.5.5.20220825-alpha
* 【uni-app】
  + 修复 项目路径包含括号时编译异常的Bug [详情](https://ask.dcloud.net.cn/question/150173)
  + Fix the bug of abnormal compilation when the project path contains brackets [Details](https://ask.dcloud.net.cn/question/150173)
  + App平台 修复 vue 页面 cover-view 组件 flex 布局无效的Bug [详情](https://ask.dcloud.net.cn/question/151697)
  + App platform Fix the bug that the flex layout of the cover-view component of the vue page is invalid [Details](https://ask.dcloud.net.cn/question/151697)
  + App平台 修复 vue3 项目 uni.getSystemInfo 获取 windowHeight 值不准确的Bug [详情](https://ask.dcloud.net.cn/question/150862)
  + App platform Fix the bug of inaccurate windowHeight value obtained by uni.getSystemInfo in vue3 project [Details](https://ask.dcloud.net.cn/question/150862)
  + App平台 修复 vue3 项目 vue 页面 map 组件更新中心坐标后显示错误的Bug [详情](https://ask.dcloud.net.cn/question/151438)
  + App platform Fix the bug that the map component of the vue3 project vue page shows the wrong bug after updating the center coordinates [Details](https://ask.dcloud.net.cn/question/151438)
  + App-Android平台 修复 uni.saveImageToPhotosAlbum 保存网络图片可能覆盖上次保存的图片的Bug [详情](https://ask.dcloud.net.cn/question/125357)
  + App-Android platform Fix the bug that uni.saveImageToPhotosAlbum may overwrite the last saved picture when saving network pictures [Details](https://ask.dcloud.net.cn/question/125357)
  + App-Android平台 修复 picker 组件获取焦点异常的Bug [详情](https://ask.dcloud.net.cn/question/150454)
  + App-Android platform Fix the bug that the picker component gets the focus abnormally [Details](https://ask.dcloud.net.cn/question/150454)
  + App-Android平台 修复 nvue 页面 map 组件 customCallout 设置图片可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/150166)
  + App-Android platform Fix the bug that the image setting of the map component customCallout of nvue page may cause the application to crash [Details](https://ask.dcloud.net.cn/question/150166)
  + App-iOS平台 修复 uni.getSystemSetting 获取的 bluetoothEnabled、locationEnabled 值不准确的Bug
  + App-iOS platform Fix the bug of inaccurate bluetoothEnabled and locationEnabled values obtained by uni.getSystemSetting
  + App-iOS平台 修复 nvue 页面 map 组件 marker 调用 moveAlong 方法没有中断前一次动画的Bug [详情](https://ask.dcloud.net.cn/question/151411)
  + App-iOS platform Fix the bug of nvue page map component marker calling moveAlong method without interrupting the previous animation [Details](https://ask.dcloud.net.cn/question/151411)
  + App-iOS平台 修复 3.5.2 引出的 nvue 页面 ad-content-page 组件在某些场景可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/151778)
  + App-iOS platform Fix the bug that the ad-content-page component of the nvue page introduced in 3.5.2 may cause the application to crash in some scenarios [Details](https://ask.dcloud.net.cn/question/151778)
  + Web平台 修复 vue3 项目 css 环境变量 --window-top 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/150842)
  + Web platform Fix vue3 project css environment variable --window-top calculates the bug [details](https://ask.dcloud.net.cn/question/150842)
  + Web平台 修复 vue3 项目发行模式 showLoading 图标大小显示错误的Bug [详情](https://ask.dcloud.net.cn/question/149819)
  + Web platform Fix the bug that the size of the showLoading icon in the vue3 project release mode is displayed incorrectly [Details](https://ask.dcloud.net.cn/question/149819)
  + Web平台 修复 custom-tab-bar 组件使用 uni.setTabBarItem 设置 visible 无效的Bug [详情](https://ask.dcloud.net.cn/question/132947)
  + Web platform Fix the bug that the custom-tab-bar component uses uni.setTabBarItem to set visible invalid [Details](https://ask.dcloud.net.cn/question/132947)
  + 小程序平台 修复 v-for 内使用复杂表达式后 v-model 失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3173)
  + MiniApp platform fixes the bug that v-model fails after using complex expressions in v-for [Details](https://github.com/dcloudio/uni-app/issues/3173)
  + 支付宝小程序、百度小程序、快手小程序、字节小程序平台 优化 支持自动拷贝 ext.json 文件
  + Alipay MiniApp, Baidu MiniApp, Kuaishou MiniApp, byte MiniApp platform optimization supports automatic copying of ext.json files
  + 支付宝小程序平台 优化 uni.saveImageToPhotosAlbum 接口不再使用旧版 saveImage 接口
  + Alipay MiniApp platform optimization uni.saveImageToPhotosAlbum interface no longer uses the old saveImage interface
  + 字节小程序平台 修复 vue2 项目 反复快速创建销毁页面时组件无法渲染的Bug
  + Byte MiniApp platform fixes the bug that the component cannot be rendered when the vue2 project repeatedly creates and destroys the page quickly
* 【uniCloud】
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
  + Added cloud function uniCloud.getCloudInfos to get cloud information. At the same time, it is compatible with or without concurrent requests [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-cloud-infos)
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
  + Added uni-open-bridge open source library, unified management of credentials for three-party open platforms such as WeChat [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 更新 QQ 登录、分享SDK版本为 3.5.12 版；百度定位SDK为 9.3.5 版，百度地图SDK为 7.5.3 版
  + Android platform update QQ login and share SDK version is version 3.5.12; Baidu positioning SDK is version 9.3.5, Baidu map SDK is version 7.5.3
  + Android平台 修复 UniPush 2.0 厂商推送通道不支持 payload 字段为非 json 字符串的Bug
  + Android platform Fixed the bug that the UniPush 2.0 vendor push channel does not support a non-json string in the payload field
  + Android平台 修复 plus.push.createMessage 创建本地消息 option 参数设置 when 字段无效的Bug
  + Android platform fix plus.push.createMessage to create a local message option parameter setting when field is invalid bug
  + Android平台 修复 plus.runtime.install 升级 apk 可能报空指针的Bug
  + Android platform Fix the bug that plus.runtime.install may report null pointer when upgrading apk
  + iOS平台 更新 uni-AD 百度百青藤广告SDK为 4.891 版
  + iOS platform update uni-AD Baidu Baiqingteng Advertising SDK to version 4.891
  + iOS平台 修复 3.5.0版本引出的 uni-AD 信息流广告设置宽度可能引起显示异常的Bug [详情](https://ask.dcloud.net.cn/question/150789)
  + iOS platform fixes the bug that the width of uni-AD Native Ads caused by version 3.5.0 may cause abnormal display [Details](https://ask.dcloud.net.cn/question/150789)
  + iOS平台 修复 3.5.0版本引出的 使用百度定位模块需要勾选IDFA的Bug
  + iOS platform Fix the bug that IDFA needs to be checked when using Baidu positioning module from version 3.5.0
  + iOS平台 修复 3.5.3版本引起的 标准真机运行基座中一键登录返回的 token 值不正确的Bug
  + iOS platform Fix the bug of incorrect token value returned by one-click login in the standard real machine running base caused by version 3.5.3
  + iOS平台 修复 从本地相册中选择慢动作视频显示的时长不准确的Bug [详情](https://ask.dcloud.net.cn/question/150531)
  + iOS platform Fix the bug that the duration of the slow-motion video selected from the local album is inaccurate [Details](https://ask.dcloud.net.cn/question/150531)
* 【uni小程序SDK】
* [uni MiniApp SDK]
  + Android平台 优化 默认菜单字体大小为20px
  + Android platform optimization The default menu font size is 20px

## 3.5.4.20220805-alpha
* 【uni-app】
  + App平台 优化 vue2 项目 web-view 组件通过 webviewStyles 设置更多样式 [详情](https://ask.dcloud.net.cn/question/149212)
  + App platform optimize vue2 project web-view component set more styles through webviewStyles [Details](https://ask.dcloud.net.cn/question/149212)
  + App平台 优化 vue 页面 web-view 组件内页面默认支持绘制到安全区外 [详情](https://ask.dcloud.net.cn/question/149472)
  + App platform optimization vue page web-view component pages support drawing outside the safe area by default [details](https://ask.dcloud.net.cn/question/149472)
  + App平台 修复 openLocation、chooseLocation 在应用语言改变时没有跟随变化的Bug [详情](https://ask.dcloud.net.cn/question/149216)
  + App platform Fixed the bug that openLocation and chooseLocation did not follow the changes when the application language changed [Details](https://ask.dcloud.net.cn/question/149216)
  + App-Android平台 新增 uni.scanCode autoZoom 属性，可控制扫码时是否启用自动放大功能 [详情](https://uniapp.dcloud.net.cn/api/system/barcode.html)
  + App-Android platform Added the uni.scanCode autoZoom property, which can control whether to enable the automatic zoom function when scanning the code [Details](https://uniapp.dcloud.net.cn/api/system/barcode.html)
  + App-Android平台 修复 nvue map 组件 maker 点聚合坐标重叠无法展现的Bug [详情](https://ask.dcloud.net.cn/question/149665)
  + App-Android platform Fix the bug that the overlapping coordinates of maker points in nvue map component cannot be displayed [Details](https://ask.dcloud.net.cn/question/149665)
  + App-Android平台 修复 nvue map 组件 polyline、polygon 清空数据不生效的Bug
  + App-Android platform Fix the bug that the nvue map component polyline, polygon clearing data does not take effect
  + App-iOS平台 修复 uni.setTabBarItem 动态更新 icon 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/149955)
  + App-iOS platform Fix the bug that uni.setTabBarItem dynamic update icon may not take effect [Details](https://ask.dcloud.net.cn/question/149955)
  + App-iOS平台 修复 nvue map 组件使用 Google 地图时，多个页面中使用地图组件可能无法正常加载的Bug [详情](https://ask.dcloud.net.cn/question/150080)
  + App-iOS platform Fix the bug that when the nvue map component uses Google Maps, the map component may not be loaded properly in multiple pages [Details](https://ask.dcloud.net.cn/question/150080)
  + Web平台 优化 web-view 组件支持 fullscreen 属性 [详情](https://uniapp.dcloud.net.cn/component/web-view.html)
  + Web Platform Optimized web-view component to support fullscreen attribute [Details](https://uniapp.dcloud.net.cn/component/web-view.html)
  + Web平台 修复 vue3 项目 canvas 组件 touch 事件 stop、prevent 修饰符无效的Bug [详情](https://ask.dcloud.net.cn/question/148195)
  + Web platform Fix the bug that the touch event stop and prevent modifier of the canvas component of the vue3 project are invalid [Details](https://ask.dcloud.net.cn/question/148195)
  + 支付宝小程序平台 修复 vue3 项目 访问 $slots 不生效的Bug [详情](https://ask.dcloud.net.cn/question/150373)
  + The Alipay MiniApp platform fixes the bug that the vue3 project access $slots does not take effect [Details](https://ask.dcloud.net.cn/question/150373)
* 【uniCloud】
  + 【重要】新增云函数ip防刷功能，避免大量无效请求导致云函数、数据库响应变慢 [详情](https://uniapp.dcloud.net.cn/uniCloud/ip-filter.html)
  + [Important] Added cloud function ip anti-brush function to avoid a large number of invalid requests causing slow cloud function and database responses [Details](https://uniapp.dcloud.net.cn/uniCloud/ip-filter.html)
  + 修复 部分场景下在 main.js 内使用 uniCloud 报错的Bug
  + Fix the bug of using uniCloud in main.js in some scenarios
  + 修复 uni-admin 在 vue3 项目中使用 uni.showLeftWindow 后组件上 showLeftWindow 值并没有更新的Bug [详情](https://ask.dcloud.net.cn/question/149618)
  + Fix the bug that the value of showLeftWindow on the component is not updated after uni-admin uses uni.showLeftWindow in the vue3 project [Details](https://ask.dcloud.net.cn/question/149618)
  + uni统计2 新增 前端数据上报周期配置项 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html#report-time)
  + uni statistics 2 Added front-end data reporting period configuration item [Details](https://uniapp.dcloud.net.cn/uni-stat-v2.html#report-time)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + iOS平台 修复 3.5.0版本引出的 使用百度地图或百度定位时未勾选`使用广告标识（IDFA）`云打包报错的Bug
  + iOS platform Fixed the bug of cloud package error reported by version 3.5.0 when using Baidu Maps or Baidu Positioning without checking the `Use Advertising Logo (IDFA)`
  + iOS平台 修复 3.5.3版本引出的 开通 uni-AD 开屏广告后台切前台可能导致页面回退不正常的Bug [详情](https://ask.dcloud.net.cn/question/150053)
  + iOS platform fixes the bug caused by version 3.5.3 that opening uni-AD on-App Open Ads in the background and switching to the foreground may cause abnormal page rollback [Details](https://ask.dcloud.net.cn/question/150053)
  + iOS平台 修复 图片选择界面设置 crop 属性选择 iCloud 图片黑屏的Bug [详情](https://ask.dcloud.net.cn/question/149219)
  + iOS platform Fix the bug that the image selection interface set the crop attribute to select the iCloud image black screen [Details](https://ask.dcloud.net.cn/question/149219)

## 3.5.3.20220727-alpha
* 【uni-app】
  + App平台 新增 uni.openAppAuthorizeSetting 跳转系统授权管理页 [详情](https://uniapp.dcloud.io/api/system/openappauthorizesetting.html)
  + App platform Added uni.openAppAuthorizeSetting to jump to the system authorization management page [Details](https://uniapp.dcloud.io/api/system/openappauthorizesetting.html)
  + App-iOS平台 修复 https 请求配置自签名 p12 证书包含中间证书时请求报错的Bug [详情](https://ask.dcloud.net.cn/question/149526)
  + App-iOS platform Fix the bug that an error is reported when the https request configures a self-signed p12 certificate including an intermediate certificate [Details](https://ask.dcloud.net.cn/question/149526)
  + App-iOS平台 修复 nvue box-shadow 样式设置 spread 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/148415)
  + App-iOS platform Fix the bug that the spread parameter of nvue box-shadow style setting is invalid [Details](https://ask.dcloud.net.cn/question/148415)
* 【uniCloud】
  + 新增 uni-admin uni统计支持上传 sourceMap，报错可准确回溯源码 [详情](https://uniapp.dcloud.io/uni-stat-v2.html#sourcemap-parse-error)
  + Added uni-admin uni statistics to support uploading sourceMap, and the sourcemap can be accurately traced when reporting errors [Details](https://uniapp.dcloud.io/uni-stat-v2.html#sourcemap-parse-error)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.480.1350 版，iOS为 4.13.80 版；快手广告SDK iOS为 3.3.27 版；今日头条穿山甲SDK iOS为 4.7.0.0 版；穿山甲GroMore广告SDK iOS为 3.5.1.0 版；Sigmob广告联盟SDK iOS为 4.2.1 版
  + Updated the uni-AD Tencent Youlianghui SDK to version 4.480.1350 for Android and 4.13.80 for iOS; Kuaishou Advertising SDK for iOS to version 3.3.27; Toutiao Pangolin SDK for iOS to version 4.7.0.0; Pangolin GroMore Advertising SDK for iOS Version 3.5.1.0; Sigmob Ad Network SDK iOS version 4.2.1
  + Android平台 更新 UniPush 使用的个推SDK为 3.2.11.0 版，个推核心组件SDK为 3.1.9.0 版；谷歌渠道个推SDK为 3.2.10.8 版，个推核心组件SDK为 3.1.9.10 版；解决安全检测可能报个推SDK超频获取信息的问题 [详情](https://ask.dcloud.net.cn/question/149127)
  + Android platform update UniPush uses the version 3.2.11.0 of the Getui SDK, the Getui core component SDK is version 3.1.9.0; the Google channel Getui SDK is version 3.2.10.8, and the Getui core component SDK is version 3.1.9.10; Security detection may report a problem of pushing SDK overclocking to obtain information [details](https://ask.dcloud.net.cn/question/149127)
  + Android平台 修复 上架某些应用市场审核检测可能报应用后台运行时存在获取任务列表行为的Bug
  + Android platform fix Some app market review and detection may report a bug in the behavior of getting the task list when the app is running in the background
  + iOS平台 修复 3.5.0版本引出的 创建本地消息 plus.push.createMessage 不传 option 参数引起应用崩溃的Bug
  + iOS platform Fixed the bug of creating a local message caused by version 3.5.0 that plus.push.createMessage did not pass the option parameter and caused the application to crash
  + iOS平台 修复 sqlite 在应用 restart 后 executeSql 修改数据报`Attempt to write a readonly database`错误的Bug [详情](https://ask.dcloud.net.cn/question/139765)
  + iOS platform Fix the bug that executeSql modifies the datagram `Attempt to write a readonly database` error after sqlite restarts the application [Details](https://ask.dcloud.net.cn/question/139765)
  + iOS平台 修复 从本地相册中选择慢动作视频引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/149219)
  + iOS platform Fixed the bug that selecting slow motion video from the local album caused the app to crash [Details](https://ask.dcloud.net.cn/question/149219)
  + iOS平台 修复 视频播放 video 的 seek 方法传入小于当前播放时间值无效的Bug [详情](https://ask.dcloud.net.cn/question/148781)
  + iOS platform fix the bug of video playback video's seek method which is less than the current playback time value is invalid [Details](https://ask.dcloud.net.cn/question/148781)
  + iOS平台 修复 打开包含视频播放 video 控件的页面会打断其他App后台音乐播放的Bug [详情](https://ask.dcloud.net.cn/question/146719)
  + iOS platform Fix the bug that opening a page containing video controls will interrupt the background music playback of other apps [Details](https://ask.dcloud.net.cn/question/146719)
* 【uni小程序SDK】
* [uni MiniApp SDK]
  + iOS平台 修复 未开启后台运行，多次切换小程序和原生界面可能导致小程序返回按钮无效的Bug
  + iOS platform fixes the bug that the background operation is not enabled, and switching between the MiniApp and the native interface may cause the MiniApp return button to be invalid

## 3.5.2.20220719-alpha
* 【uni-app】
  + App平台 新增 uni.getSystemSetting 获取手机系统的定位、蓝牙、wifi开关等设置 [详情](https://uniapp.dcloud.io/api/system/getsystemsetting)
  + App platform Added uni.getSystemSetting to get the location, bluetooth, wifi switch and other settings of the mobile phone system [Details](https://uniapp.dcloud.io/api/system/getsystemsetting)
  + App平台 新增 uni.getAppAuthorizeSetting 获取应用权限状态，是否被授予定位、相册等权限 [详情](https://uniapp.dcloud.io/api/system/getappauthorizesetting)
  + App platform Added uni.getAppAuthorizeSetting to get the app permission status, whether it has been granted permissions such as positioning and photo albums [Details](https://uniapp.dcloud.io/api/system/getappauthorizesetting)
  + App平台 新增 uni.createPushMessage 创建本地通知栏消息 [详情](https://uniapp.dcloud.io/api/plugins/push.html#createpushmessage)
  + App platform Added uni.createPushMessage to create local notification bar messages [Details](https://uniapp.dcloud.io/api/plugins/push.html#createpushmessage)
  + App平台 修复 vue3 项目 首次启动调用 uni.getPushClientId 获取不到cid的Bug
  + App platform Fix the bug that the cid cannot be obtained by calling uni.getPushClientId for the first time when the vue3 project is started
  + App平台 修复 vue2 项目 nvue 页面访问 process.env 报错的Bug [详情](https://ask.dcloud.net.cn/question/147948)
  + App platform Fix the bug that the nvue page of the vue2 project reports an error when accessing process.env [Details](https://ask.dcloud.net.cn/question/147948)
  + App、H5平台 修复 vue3 项目 uni.openLocation 未配置 latitude longitude 时不触发 fail 回调的Bug
  + App, H5 platform Fix the bug that the fail callback is not triggered when the uni.openLocation of the vue3 project is not configured with latitude longitude
  + App-Android平台 修复 nvue map 组件放大地图时标记点气泡 callout 不显示的Bug [详情](https://ask.dcloud.net.cn/question/148741)
  + App-Android platform Fix the bug that the marker bubble callout is not displayed when the nvue map component zooms in on the map [Details](https://ask.dcloud.net.cn/question/148741)
  + App-iOS平台 修复 nvue image 组件 src 属性更新使用 gif 格式图片时无法切换的Bug [详情](https://ask.dcloud.net.cn/question/148807)
  + App-iOS platform Fix the bug that the nvue image component src attribute cannot be switched when the gif format image is updated [Details](https://ask.dcloud.net.cn/question/148807)
  + App-iOS平台 修复 nvue 组件动态修改 border-radius 样式可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/144709)
  + App-iOS platform Fix the bug that the dynamic modification of border-radius style of nvue components may not take effect [Details](https://ask.dcloud.net.cn/question/144709)
  + 百度小程序平台 修复 vue3 项目 uni.login 失效的Bug [详情](https://ask.dcloud.net.cn/question/117304)
  + Baidu MiniApp platform to fix the bug that uni.login of vue3 project fails [Details](https://ask.dcloud.net.cn/question/117304)
* 【uniCloud】
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
  + Optimize the uni-admin application management module to manage more application information such as App download address, MiniApp QR code [details](https://uniapp.dcloud.io/uniCloud/admin.html#app-manager)
  + 调整 uni-admin 内置 统一发布页（uni-portal）插件 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#uni-portal)
  + Adjust uni-admin built-in unified publishing page (uni-portal) plugin [Details](https://uniapp.dcloud.io/uniCloud/admin.html#uni-portal)
  + 调整 uni-admin 内置 App升级中心（uni-upgrade-center）插件，并支持多应用商店更新 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#uni-upgrade-center)
  + Adjust uni-admin built-in uni-upgrade-center(uni-upgrade-center) plugin, and support multi-app store update [Details](https://uniapp.dcloud.io/uniCloud/admin.html#uni-upgrade-center)
  + 新增 uni-id-pages 允许覆盖uni-id-co内置校验规则 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#custom-validator)
  + Added uni-id-pages to allow overriding the built-in validation rules of uni-id-co [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#custom-validator)
  + 修复 uni-id-pages uni-id-co的logout接口时没有删除token的Bug
  + Fixed the bug that the token was not deleted when the logout interface of uni-id-pages uni-id-co
  + 修复 uni-id-pages app端 clientInfo.appVersionCode 为数字导致 uni-id-co 校验无法通过的Bug
  + Fixed the bug that the uni-id-co verification could not be passed because the clientInfo.appVersionCode of the uni-id-pages app side was a number
  + 修复 uni-id-pages 微信小程序调用uni-id-co接口报错的Bug [详情](https://ask.dcloud.net.cn/question/148877)
  + Fixed the bug that the uni-id-pages WeChat MiniApp reported an error when calling the uni-id-co interface [Details](https://ask.dcloud.net.cn/question/148877)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 uni-AD 支持穿山甲GroMore广告 包括开屏、信息流、插屏、全屏视频、激励视频广告
  + Added uni-AD support for pangolin GroMore ads including open screen, information flow, interstitial, full screen video, rewarded Rewarded Ads
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.472.1342 版；快手广告SDK Android为 3.3.27 版，iOS为 3.3.26 版；快手内容联盟SDK Android为 3.3.30 版；百度百青藤广告SDK Android为 9.223 版，iOS为 4.883 版；Sigmob广告联盟SDK Android为 4.4.0 版；华为广告SDK Android为 13.4.54.300 版
  + Update uni-AD Tencent Youlianghui SDK Android version 4.472.1342; Kuaishou Advertising SDK Android version 3.3.27, iOS version 3.3.26; Kuaishou Content Alliance SDK Android version 3.3.30; Baidu Baiqingteng Advertising SDK Android is version 9.223, iOS is version 4.883; Sigmob Advertising Alliance SDK Android is version 4.4.0; Huawei Advertising SDK Android is version 13.4.54.300
  + iOS平台 修复 3.5.0版本引出的 plus.runtime.restart 重启应用后页面返回按钮失效的Bug
  + iOS platform Fixed the bug that the back button on the page does not work after the plus.runtime.restart introduced in version 3.5.0 restarts the app
  + iOS平台 修复 3.5.0版本引出的 uni-AD 开通基础广告首次安装可能卡在启动页面的Bug [详情](https://ask.dcloud.net.cn/question/149192)
  + iOS platform Fix the bug that the uni-AD activation basic advertisement caused by version 3.5.0 may be stuck on the startup page for the first time installation [Details](https://ask.dcloud.net.cn/question/149192)
  + iOS平台 修复 plus.runtime.openWeb 在 iOS15.4 及以上设备打开页面导航栏显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/148585)
  + iOS platform Fix plus.runtime.openWeb on iOS15.4 and above devices to open the page navigation bar display abnormally [Details](https://ask.dcloud.net.cn/question/148585)
  + iOS平台 修复 标题栏 titleNView 更新按钮样式导致布局错位的Bug [详情](https://ask.dcloud.net.cn/question/148542)
  + iOS platform Fix the bug that the title bar titleNView update button style causes the layout to be dislocated [Details](https://ask.dcloud.net.cn/question/148542)
  + iOS平台 修复 plus.navigator.getOrientation 在设备横屏状态时返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/148843)
  + iOS platform Fix the bug that plus.navigator.getOrientation returns incorrect value when the device is in landscape state [Details](https://ask.dcloud.net.cn/question/148843)
  + iOS平台 修复 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
  + iOS platform Fixed the bug that the AppStore was not uploaded using the Push module and reported the `ITMS-90078: Missing Push Notification Entitlement` warning
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + iOS平台 修复 偶现内存泄漏可能引起应用崩溃的Bug
  + iOS platform to fix the bug that occasional memory leaks may cause the app to crash
  + iOS平台 修复 直达二级页面后再打开此页面，关闭时会直接返回首页的Bug
  + iOS platform Fix the bug that when you open this page after going to the secondary page, it will directly return to the home page when it is closed

## 3.5.1.20220707-alpha
* 【uni-app】
  + 修复 vue3 项目 编译器清空输出目录可能报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3650)
  + Fix the bug that the compiler of the vue3 project may report an error when the output directory is cleared [Details](https://github.com/dcloudio/uni-app/issues/3650)
  + App、H5平台 优化 movable-view 组件触摸过程中支持设置 disabled 属性 [详情](https://github.com/dcloudio/uni-app/issues/2384)
  + App, H5 platform Optimize movable-view component to support setting disabled property during touch process [Details](https://github.com/dcloudio/uni-app/issues/2384)
  + App平台 修复 map 组件在部分设备显示黑色边框的Bug [详情](https://ask.dcloud.net.cn/question/145449)
  + App platform Fix the bug that the map component displays a black border on some devices [Details](https://ask.dcloud.net.cn/question/145449)
  + App平台 修复 vue3 项目 input 绑定动态 type 报错的Bug
  + App platform to fix the bug of dynamic type error in input binding of vue3 project
  + App平台 修复 vue3 项目 nvue 页面组件插槽样式可能不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3632)
  + App platform Fix the bug that the slot style of the nvue page component of the vue3 project may be incorrect [Details](https://github.com/dcloudio/uni-app/issues/3632)
  + App平台 修复 vue3 项目 vue 页面在 iOS 平台内存不足导致白屏未自动恢复的Bug [详情](https://ask.dcloud.net.cn/article/35913)
  + App platform Fixed the bug that the vue page of the vue3 project was not automatically restored due to insufficient memory on the iOS platform [Details](https://ask.dcloud.net.cn/article/35913)
  + App平台 修复 vue3 项目 nvue 页面 webview 组件 onPostMessage 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/144731)
  + App platform Fix the bug that the onPostMessage event of the webview component of the nvue page of the vue3 project is invalid [Details](https://ask.dcloud.net.cn/question/144731)
  + App-Android平台 修复 nvue 页面为首页时在部分特定手机启动界面关闭过慢的Bug
  + App-Android platform Fix the bug that the startup interface of some specific mobile phones closes too slowly when the nvue page is the home page
  + App-Android平台 修复 nvue image 组件在部分设备可能报空指针错误的Bug [详情](https://ask.dcloud.net.cn/question/147965)
  + App-Android platform Fix the bug that nvue image component may report null pointer error on some devices [Details](https://ask.dcloud.net.cn/question/147965)
  + App-iOS平台 优化 IAP 支付逻辑 补充手动关闭订单策略，解决自动关单但后续报错可能造成丢单的Bug [详情](https://uniapp.dcloud.net.cn/api/plugins/payment.html#iap)
  + App-iOS platform optimizes IAP payment logic, supplements manual order closing strategy, and solves the bug of automatic order closing but subsequent error reporting may cause order loss [Details](https://uniapp.dcloud.net.cn/api/plugins/payment. html#iap)
  + App-iOS平台 修复 uni.getSystemInfo 获取某些设备型号不正确的Bug [详情](https://ask.dcloud.net.cn/question/148344)
  + App-iOS platform Fix the bug that uni.getSystemInfo gets the incorrect model of some devices [Details](https://ask.dcloud.net.cn/question/148344)
  + App-iOS平台 修复 动态设置 tabBar 隐藏再显示后高斯模糊效果失效的Bug [详情](https://ask.dcloud.net.cn/question/146478)
  + App-iOS platform Fix the bug that the Gaussian blur effect is invalid after dynamically setting the tabBar to hide and then display [Details](https://ask.dcloud.net.cn/question/146478)
  + App-iOS平台 修复 nvue bindingx 在滚动视图中使用 transform.translateY 结果有偏差的Bug [详情](https://ask.dcloud.net.cn/question/144209)
  + App-iOS platform Fix the bug that nvue bindingx uses transform.translateY in scroll view, the result is biased [Details](https://ask.dcloud.net.cn/question/144209)
  + App-iOS平台 修复 nvue input 组件嵌套在 list 中时，页面上下滑动 v-model 绑定的值会置空的Bug [详情](https://ask.dcloud.net.cn/question/146246)
  + App-iOS platform fixes the bug that when the nvue input component is nested in the list, the value bound by the v-model will be empty when the page slides up and down [Details](https://ask.dcloud.net.cn/question/146246 )
  + App-iOS平台 修复 nvue textarea 组件设置 auto-height 为 true 时初始高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/146688)
  + App-iOS platform Fix the bug that the initial height of nvue textarea component is incorrect when auto-height is set to true [Details](https://ask.dcloud.net.cn/question/146688)
  + H5平台 补齐 vue2 项目支持 uni.getLaunchOptionsSync [详情](https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html)
  + H5 platform to complement vue2 project support uni.getLaunchOptionsSync [Details](https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html)
  + H5平台 补齐 vue2 项目支持 uni.getEnterOptionsSync [详情](https://uniapp.dcloud.net.cn/api/getEnterOptionsSync.html)
  + H5 platform to complement vue2 project support uni.getEnterOptionsSync [Details](https://uniapp.dcloud.net.cn/api/getEnterOptionsSync.html)
  + H5平台 优化 hover-class 支持鼠标事件
  + H5 platform optimized hover-class to support mouse events
  + H5平台 优化 map 组件 markertap 事件支持返回坐标信息
  + H5 platform optimized map component markertap event supports returning coordinate information
  + H5平台 修复 map 组件 tap 事件重复触发的Bug
  + H5 platform fix the bug that the tap event of the map component is repeatedly triggered
  + 小程序平台 优化 vue2 项目 slot name 支持动态赋值 [详情](https://ask.dcloud.net.cn/question/82506)
  + MiniApp platform optimization vue2 project slot name supports dynamic assignment [details](https://ask.dcloud.net.cn/question/82506)
  + 小程序平台 修复 vue3 项目部分情况下，编译后组件 js 文件名不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3629)
  + The MiniApp platform fixes the bug that the compiled component js file name is incorrect in some cases of the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3629)
  + 小程序平台 修复 vue3 项目部分情况下，数据更新后，页面未渲染的Bug [详情](https://github.com/dcloudio/uni-app/issues/3648)
  + The MiniApp platform fixes the bug that the page is not rendered after the data is updated in some cases of the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3648)
  + 小程序平台 修复 vue2 项目命名插槽使用 v-if 编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/2635)
  + The MiniApp platform fixes the bug that the v-if compilation error is reported in the vue2 project named slot [Details](https://github.com/dcloudio/uni-app/issues/2635)
  + 微信小程序、支付宝小程序平台 新增 vue3 项目 manifest.json 支持 mergeVirtualHostAttributes 配置，用于合并虚拟节点外部样式 [详情](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + Wechat MiniApp and Alipay MiniApp platform added vue3 project manifest.json to support mergeVirtualHostAttributes configuration for merging external styles of virtual nodes [details](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + 百度小程序、字节小程序平台 修复 vue3 项目 部分情况下，组件 ref 获取不到的Bug [详情](https://github.com/dcloudio/uni-app/issues/3615)
  + Baidu MiniApp and byte MiniApp platform fix the bug that component ref cannot get in some cases of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3615)
  + 百度小程序、字节小程序平台 修复 vue3 项目 组件事件名包含`-`或`:`时，无法触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3616)
  + Baidu MiniApp and byte MiniApp platform fix the bug that cannot be triggered when the event name of the vue3 project component contains `-` or `:` [Details](https://github.com/dcloudio/uni-app/issues/ 3616)
  + 微信小程序平台 修复 vue3 项目 input 组件动态 type 在 iOS 平台不生效的Bug [详情](https://ask.dcloud.net.cn/question/147787)
  + Wechat MiniApp platform to fix the bug that the dynamic type of the input component of the vue3 project does not take effect on the iOS platform [Details](https://ask.dcloud.net.cn/question/147787)
  + 微信小程序平台 修复 vue3 项目 微信开发者工具中配置编译模式丢失的Bug [详情](https://github.com/dcloudio/uni-app/issues/3655)
  + Wechat MiniApp platform to fix the bug of missing configuration compilation mode in Wechat developer tools of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3655)
  + 微信小程序平台 修复 vue3 项目 project.config.json 更新可能导致开发者工具报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3524)
  + Wechat MiniApp platform to fix the bug of vue3 project project.config.json update that may cause developer tools to report errors [Details](https://github.com/dcloudio/uni-app/issues/3524)
  + 百度小程序平台 修复 vue3 项目 事件触发可能混乱的Bug[详情](https://github.com/dcloudio/uni-app/issues/3647)
  + Baidu MiniApp platform to fix the bug that the event trigger of vue3 project may be confusing [details](https://github.com/dcloudio/uni-app/issues/3647)
  + 字节小程序平台 修复 vue3 项目 部分情况下，组件未更新的Bug [详情](https://github.com/dcloudio/uni-app/issues/3625)
  + Byte MiniApp platform fixes the bug that components are not updated in some cases of vue3 project [details](https://github.com/dcloudio/uni-app/issues/3625)
* 【uniCloud】
  + 新增 uni-push2.0 全端支持（App、小程序、web）的云端一体的统一推送服务 [详情](https://uniapp.dcloud.io/unipush-v2.html)
  + Added uni-push2.0 full-end support (App, MiniApp, web) cloud-integrated unified push service [Details](https://uniapp.dcloud.io/unipush-v2.html)
  + 新增 腾讯云平台 数据万象，对云存储文件进行图片缩放、增加水印等计算功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage.html#%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86)
  + Added Tencent Cloud Platform Data Vientiane, zooming in and out of cloud storage files, adding watermarks and other computing functions [Details](https://uniapp.dcloud.net.cn/uniCloud/storage.html#%E6%95%B0 %E6%8D%AE%E5%A4%84%E7%90%86)
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
  + [Important] Adjust the uni statistics 2 version records to reuse the opendb-app-versions table of the uni uni-upgrade-center, and discard the uni-stat-app-versions table [Details](https://uniapp.dcloud.net.cn/uni- stat-v2.html#upgrade)
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
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 优化 uni-AD 激励视频和信息流广告支持并发请求
  + Optimized uni-AD rewarded video and in-feed Native Ads to support concurrent requests
  + Android平台 新增 Google Pay 支持配置支付网关信息 buildTokenizationSpecification [详情](https://uniapp.dcloud.io/tutorial/app-payment-google.html#%E4%BD%BF%E7%94%A8google%E6%94%AF%E4%BB%98)
  + Added support for configuring payment gateway information for Google Pay on Android platform buildTokenizationSpecification [Details](https://uniapp.dcloud.io/tutorial/app-payment-google.html#%E4%BD%BF%E7%94%A8google% E6%94%AF%E4%BB%98)
  + Android平台 更新 腾讯X5内核为 4.3.0.299 版
  + Android platform update Tencent X5 kernel to version 4.3.0.299
  + Android平台 新增 Facebook 登录 SDK 为 12.0.0 版，解决登录受限的问题 [详情](https://ask.dcloud.net.cn/question/147788)
  + Android platform Added Facebook login SDK version 12.0.0 to solve the problem of limited login [Details](https://ask.dcloud.net.cn/question/147788)
  + Android平台 修复 3.5.0 版本引出的 uni-AD 特定情况可能只展示同一广告源广告的Bug
  + Android platform Fix the bug that uni-AD may only display the same advertisement source in the specific situation of uni-AD caused by version 3.5.0
  + Android平台 修复 uploader 上传文件请求返回错误响应码时，无法获取服务器返回数据的Bug
  + Android platform Fixed the bug that the data returned by the server could not be obtained when the uploader uploaded a file request and returned an error response code
  + Android平台 修复 setBadgeNumber 设置角标在新荣耀设备不生效的Bug [详情](https://ask.dcloud.net.cn/question/140910)
  + Android platform Fix the bug that the setBadgeNumber setting angle label does not take effect on new Honor devices [Details](https://ask.dcloud.net.cn/question/140910)
  + iOS平台 新增 IAP支付 手动关闭订单、获取未关闭订单列表等功能，以解决自动关闭订单在某些情况引发的订单丢失的Bug [详情](https://uniapp.dcloud.io/tutorial/app-payment-aip.html)
  + The iOS platform has added functions such as IAP payment to manually close orders and obtain a list of unclosed orders to solve the bug of order loss caused by automatic closing orders in some cases [Details](https://uniapp.dcloud.io/tutorial/ app-payment-aip.html)
  + iOS平台 修复 3.5.0 版本引出的 uni-AD 穿山甲开屏广告偶现 bottomView 没有关闭的Bug
  + iOS platform fixes the bug that bottomView is not closed occasionally in the uni-AD pangolin App Open Ads introduced by version 3.5.0
  + iOS平台 修复 首次启动 App 获取安全区域高度可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/148277)
  + iOS platform Fix the bug that the height of the safe area may be incorrect when launching the app for the first time [Details](https://ask.dcloud.net.cn/question/148277)
  + iOS平台 修复 设备型号名称 model、deviceModel 返回值不规范的Bug
  + iOS platform Fix the bug that the device model name model, deviceModel return value is not standardized
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 getAppRuningForAppid 在部分场景可能报空指针错误的Bug
  + Android platform Fix the bug that getAppRuningForAppid may report null pointer error in some scenarios
  + iOS平台 修复 小程序未开启后台运行，前台运行时调用 open 方法直达页面无效的Bug
  + iOS platform fixes the bug that the MiniApp not start running in the background, and the open method is called when the foreground is running to go to the page.

## 3.5.0.20220623-alpha
* 【uni-app】
  + 新增 uni-app vue2项目 支持使用`@/pages.json`引用条件编译后的`pages.json`文件
  + Added uni-app vue2 project to support using `@/pages.json` to refer to the conditionally compiled `pages.json` file
  + 修复 3.4.17 版本引发的 vue3 项目 运行在小程序平台 `<script setup>`中使用 const 定义 reactive 对象访问出错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3606)
  + Fix the bug caused by version 3.4.17 that the vue3 project runs in the MiniApp platform `<script setup>` using const to define the reactive object access error [Details](https://github.com/dcloudio/uni-app/issues /3606)
  + App、Web平台 修复 3.4.10 版本引出的 vue2项目 image 组件 load 事件图像大小信息不准确的Bug [详情](https://ask.dcloud.net.cn/question/147174)
  + App, Web platform Fix the bug of inaccurate image size information in the image component load event of the vue2 project introduced by version 3.4.10 [Details](https://ask.dcloud.net.cn/question/147174)
  + App平台 优化 slot name 支持动态赋值 [详情](https://ask.dcloud.net.cn/question/95109)
  + App platform Optimize slot name to support dynamic assignment [Details](https://ask.dcloud.net.cn/question/95109)
  + App-Android平台 新增 manifest.json 支持 webview 配置，系统 webview 低于指定版本时，弹出提示或者下载 x5 内核后继续启动 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
  + App-Android platform adds manifest.json to support webview configuration. When the system webview is lower than the specified version, a prompt will pop up or continue to start after downloading the x5 kernel [Details](https://uniapp.dcloud.net.cn/collocation/manifest .html#appwebview)
  + App-Android平台 修复 tabbar 启用高斯模糊后获取 windowBottom 错误的Bug [详情](https://ask.dcloud.net.cn/question/146583)
  + App-Android platform Fix the bug that the tabbar gets windowBottom error after Gaussian blur is enabled [Details](https://ask.dcloud.net.cn/question/146583)
  + App-iOS平台 修复 uni.request 访问特定接口可能数据解析出现乱码的Bug [详情](https://ask.dcloud.net.cn/question/145530)
  + App-iOS platform Fix the bug that garbled characters may appear in data parsing when uni.request accesses specific interfaces [Details](https://ask.dcloud.net.cn/question/145530)
  + 微信小程序、支付宝小程序 新增 vue2项目 manifest.json 支持 scopedSlotsCompiler 配置，用于合并虚拟节点外部样式 [详情](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + Wechat MiniApp and Alipay MiniApp added vue2 project manifest.json to support scopedSlotsCompiler configuration for merging external styles of virtual nodes [details](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + 百度小程序平台 修复 vue3项目 组件嵌套使用时响应式可能失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3612)
  + Baidu MiniApp platform fixes the bug that the responsiveness may fail when the vue3 project components are nested [Details](https://github.com/dcloudio/uni-app/issues/3612)
* 【uniCloud】
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
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 【重要】uni-AD 新增 激励视频广告支持实时竞价 [详情](https://uniapp.dcloud.io/uni-ad.html#bidding)
  + [Important] uni-AD adds Rewarded Ads to support real-time bidding [Details](https://uniapp.dcloud.io/uni-ad.html#bidding)
  + Android平台 更新 云端打包环境 Gradle 为 7.3.3，Android Gradle plugin 为 4.2.0，compileSdkVersion 为 31
  + Android platform update Cloud packaging environment Gradle is 7.3.3, Android Gradle plugin is 4.2.0, compileSdkVersion is 31
  + Android平台 新增 云端打包支持设置 dataBinding、viewBinding [文档](https://uniapp.dcloud.io/collocation/manifest.html#buildfeatures)
  + Android platform Added support for setting dataBinding and viewBinding in cloud packaging [Documentation](https://uniapp.dcloud.io/collocation/manifest.html#buildfeatures)
  + Android平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备在 Android12 设备可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/146849)
  + Android platform Fix the bug that startBluetoothDevicesDiscovery search for nearby Bluetooth devices may cause the app to crash on Android12 devices [Details](https://ask.dcloud.net.cn/question/146849)
  + Android平台 修复 UniPush 存在监听`ACTION_BOOT_COMPLETED`广播行为，可能违反应用市场上架合规检测问题 [详情](https://ask.dcloud.net.cn/question/147319)
  + Android platform Fixed UniPush monitoring `ACTION_BOOT_COMPLETED` broadcast behavior, which may violate the compliance detection of the application market. [Details](https://ask.dcloud.net.cn/question/147319)
  + Android平台 修复 UniPush 调用 plus.runtime.restart 后无法创建本地通知消息的Bug [详情](https://ask.dcloud.net.cn/question/146470)
  + Android platform Fix the bug that UniPush cannot create local notification message after calling plus.runtime.restart [Details](https://ask.dcloud.net.cn/question/146470)
  + Android平台 修复 从本地相册选择大图片预览时可能引起应用崩溃的Bug
  + Android platform Fix the bug that may cause the application to crash when selecting a large image preview from the local album
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK为 4.5.1.6 版
  + iOS platform update uni-AD Toutiao Pangolin SDK to version 4.5.1.6
  + iOS平台 更新 百度定位SDK为 2.0.0 版，百度地图SDK为 6.5.0 版
  + iOS platform update Baidu Positioning SDK is version 2.0.0, Baidu Map SDK is version 6.5.0
  + iOS平台 修复 5+App项目获取5G网络类型错误的Bug
  + iOS platform Fix the bug that the 5+App project gets the wrong type of 5G network
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 启动小程序直达页面参数与文档规范不一致的Bug
  + Android platform fixes the bug that the parameters of launching the MiniApp directly to the page are inconsistent with the document specification

## 3.4.17.20220614-alpha
* 【uni-app】
  + 修复 vue3 项目 onError 生命周期不生效的Bug
  + Fix the bug that the onError life cycle of vue3 project does not take effect
  + App、Web平台 修复 vue3 项目 uni.setTabBarItem 设置 pagePath 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3592)
  + App, Web platform Fix the bug that uni.setTabBarItem setting pagePath does not take effect in vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3592)
  + App平台 优化 video 组件支持 show-mute-btn 配置
  + App platform optimized video component to support show-mute-btn configuration
  + App平台 优化 vue3 项目 rich-text 组件支持服务端渲染
  + App platform optimization vue3 project rich-text components support server-side rendering
  + App平台 修复 3.4.10 版本引出的 scopeId 污染 slot 导致样式异常的Bug [详情](https://ask.dcloud.net.cn/question/145366)
  + App platform Fix the bug that the scopeId polluted slot caused by the 3.4.10 version leads to the abnormal style [Details](https://ask.dcloud.net.cn/question/145366)
  + App平台 修复 调试时调用 uni.getSystemInfo 报错的Bug [详情](https://ask.dcloud.net.cn/question/146611)
  + App platform Fix the bug of calling uni.getSystemInfo when debugging [Details](https://ask.dcloud.net.cn/question/146611)
  + App平台 修复 vue3 项目 Windows 系统上，运行至手机或模拟器时，可能多次同步文件的Bug
  + App platform Fix the bug that files may be synchronized multiple times when running to a mobile phone or simulator on a Windows system of a vue3 project
  + App平台 修复 vue3 项目 nvue 页面 onPageScroll，onReachBottom 不触发的Bug [详情](https://ask.dcloud.net.cn/question/145873)
  + App platform to fix the bug that the onPageScroll and onReachBottom of the nvue page of the vue3 project do not trigger [Details](https://ask.dcloud.net.cn/question/145873)
  + App平台 修复 vue3 项目 uni.getVideoInfo 成功回调不执行Bug
  + App platform to fix the bug that the successful callback of uni.getVideoInfo in vue3 project does not execute
  + App-Android平台 修复 nvue web-view 组件 user-agent 不正确导致加载H5页面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/146877)
  + App-Android platform Fix the bug that the nvue web-view component user-agent is incorrect, causing the H5 page to be displayed abnormally [Details](https://ask.dcloud.net.cn/question/146877)
  + App-Android平台 修复 nvue 组件同时设置 box-shadow、elevation 样式在部分特殊场景可能会出现渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/147041)
  + App-Android platform Fix the bug that the nvue component set box-shadow and elevation styles at the same time may render abnormally in some special scenes [Details](https://ask.dcloud.net.cn/question/147041)
  + iOS平台 修复 nvue ad-content-page 组件暂停后展示其它视频类广告，关闭广告可能引起组件后台自动播放的Bug
  + iOS platform Fixed the bug that other video ads were displayed after the nvue ad-content-page component was paused, and closing the ad might cause the component to automatically play in the background
  + Web平台 修复 vue3 项目 pc端 createSelectorQuery 获取 top 错误Bug
  + Web platform Fix the bug that createSelectorQuery on the PC side of the vue3 project gets the top error
  + 小程序平台 修复 vue3 项目 v-for 嵌套使用 slot 时，渲染不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3587)
  + MiniApp platform to fix the bug of incorrect rendering when v-for is nested in vue3 project [details](https://github.com/dcloudio/uni-app/issues/3587)
  + 微信小程序平台 修复 3.4.13 版本引出的 manifest.json 文件缺少 mp-weixin 节点编译报错的Bug [详情](https://ask.dcloud.net.cn/question/146580)
  + Wechat MiniApp platform fixes the bug that the manifest.json file derived from version 3.4.13 is missing the bug of mp-weixin node compilation error [Details](https://ask.dcloud.net.cn/question/146580)
* 【uniCloud】
  + 修复 本地调试插件 3.4.0版本引出的客户端连接本地云函数时获取客户端 userAgent 为`HBuilderX`的Bug
  + Fix the bug that the client userAgent is `HBuilderX` when the client connected to the local cloud function brought out by the local debugging plugin version 3.4.0
  + 修复 本地调试插件 云函数内使用`console.timeEnd`输出日志错乱的Bug
  + Fixed the bug of using `console.timeEnd` in the local debugging plug-in cloud function to output the log disorderly
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 修复 uni-AD 开屏广告在部分小米手机可能会卡在启动界面的Bug
  + Fix the bug that the uni-AD App Open Ads may be stuck on the startup interface on some Xiaomi phones on the Android platform
  + iOS平台 更新 uni-AD 快手广告SDK为 3.3.25 版，快手内容联盟SDK为 3.3.29 版，解决调用系统相册可能引起崩溃的问题
  + iOS platform updated uni-AD Kuaishou Advertising SDK to version 3.3.25 and Kuaishou Content Alliance SDK to version 3.3.29 to solve the problem that calling system albums may cause crashes

## 3.4.13.20220601-alpha
* 【uni-app】
  + App、H5平台 新增 uni.getDeviceInfo [详情](https://uniapp.dcloud.io/api/system/getDeviceInfo.html)
  + App, H5 platform Added uni.getDeviceInfo [Details](https://uniapp.dcloud.io/api/system/getDeviceInfo.html)
  + App、H5平台 新增 uni.getAppBaseInfo [详情](https://uniapp.dcloud.io/api/system/getAppBaseInfo.html)
  + App, H5 platform Added uni.getAppBaseInfo [Details](https://uniapp.dcloud.io/api/system/getAppBaseInfo.html)
  + App、H5平台 新增 uni.getWindowInfo [详情](https://uniapp.dcloud.io/api/system/getWindowInfo.html)
  + App, H5 platform added uni.getWindowInfo [Details](https://uniapp.dcloud.io/api/system/getWindowInfo.html)
  + App、H5平台 新增 uni.getSystemInfo 添加 devicePixelRatio、deviceOrientation、appLanguage 等字段 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + App, H5 platform Added uni.getSystemInfo Added devicePixelRatio, deviceOrientation, appLanguage and other fields [Details](https://uniapp.dcloud.io/api/system/info.html)
  + App平台 新增 uni.getSystemInfo 添加 romName、romVersion 字段 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + App platform Added uni.getSystemInfo Added romName, romVersion fields [Details](https://uniapp.dcloud.io/api/system/info.html)
  + App平台 修复 3.4.10 版本引出的 view 组件使用 wxs/renderjs 报错的Bug
  + App platform Fixed the bug that the view component from version 3.4.10 reported an error using wxs/renderjs
  + App-Android平台 修复 使用谷歌地图时，mapContext 对象调用 moveAlong 移动 marker 动画过程中拖拽地图会产生偏移的Bug
  + App-Android platform Fix the bug that when using Google Maps, the mapContext object calls moveAlong to move the marker, and dragging the map will cause an offset bug during the animation process
  + App-Android平台 修复 nvue view 组件 hover-class 属性动态改变组件大小时无效的Bug [详情](https://ask.dcloud.net.cn/question/145677)
  + App-Android platform Fix the bug that the nvue view component's hover-class attribute is invalid when the component size is dynamically changed [Details](https://ask.dcloud.net.cn/question/145677)
  + App-iOS平台 修复 nvue 页面滚动视图中设置 position 属性为 sticky 样式显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/144303)
  + App-iOS platform Fix the bug that the position property is set to sticky style in the scroll view of nvue page [Details](https://ask.dcloud.net.cn/question/144303)
  + H5平台 修复 vue3 项目 当 App.vue 使用 setup 时，发行后页面空白的Bug [详情](https://ask.dcloud.net.cn/question/146011)
  + H5 platform Fix vue3 project When App.vue uses setup, the page is blank after release Bug [Details](https://ask.dcloud.net.cn/question/146011)
  + H5平台 修复 3.4.10 版本引发的 vue3 项目在 left/top/right window 页面使用 match-media 报错的Bug [详情](https://ask.dcloud.net.cn/question/146126)
  + H5 platform Fix the bug that the vue3 project caused by version 3.4.10 uses match-media to report errors on the left/top/right window page [Details](https://ask.dcloud.net.cn/question/146126)
  + 微信小程序平台 修复 vue3 项目 ad-custom 组件无法使用的Bug [详情](https://ask.dcloud.net.cn/question/145883)
  + Wechat MiniApp platform to fix the bug that the ad-custom component of vue3 project cannot be used [Details](https://ask.dcloud.net.cn/question/145883)
* 【uniCloud】
  + 新增 uniCloud.onResponse/offResponse 接口用于监听云函数、云对象及clientDB的响应结果 [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk.html#on-response)
  + Added uniCloud.onResponse/offResponse interface to monitor the response results of cloud functions, cloud objects and clientDB [Details](https://uniapp.dcloud.net.cn/uniCloud/client-sdk.html#on-response)
  + 新增 uniCloud响应体规范 添加 newToken 字段，用于token续期。云对象会自动将token持久化存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)
  + Added uniCloud response body specification Added newToken field for token renewal. The cloud object will automatically store the token persistently [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)
  + 修复 uniCloud虚拟目录、以及uni_modules下的云对象目录，右键菜单，没有运行-本地云对象、调试运行-本地云对象的菜单的Bug
  + Fixed the bug of uniCloud virtual directory and cloud object directory under uni_modules, right-click menu, there is no run-local cloud object, debug run-local cloud object menu
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
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 新增 原生隐私政策提示框支持 hrefLoader 属性，配置提示框中点击 href 链接的打开方式 [详情](https://uniapp.dcloud.io/tutorial/app-privacy-android)
  + Android platform Added native privacy policy prompt box to support hrefLoader attribute, configure how to open the href link in the prompt box [Details](https://uniapp.dcloud.io/tutorial/app-privacy-android)
  + Android平台 修复 uni-AD 腾讯优量汇广告联盟部分下载类广告下载成功之后无法安装的Bug
  + Android platform, fix the bug that some download advertisements in uni-AD Tencent Youlianghui Advertising Alliance cannot be installed after successful download
  + iOS平台 更新 一键登录 使用的个验SDK为 2.2.0.0 版，个推核心组件SDK为 1.2.7.0 版
  + iOS platform update One-click login The personal verification SDK used is version 2.2.0.0, and the core component SDK of personal push is version 1.2.7.0
  + iOS平台 修复 音频播放 audio 设置 startTime 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/146028)
  + iOS platform fix the bug that audio playback audio setting startTime may not take effect [Details](https://ask.dcloud.net.cn/question/146028)
  + iOS平台 修复 视频播放 video 播放 rtmp 协议直播流视频时声音只能通过扬声器播放的Bug [详情](https://ask.dcloud.net.cn/question/129703)
  + iOS platform Fix the bug that the sound can only be played through the speaker when the video is playing the rtmp protocol live streaming video [Details](https://ask.dcloud.net.cn/question/129703)
  + iOS平台 修复 视频播放 video 播放 rtmp/rtsp 协议视频时 timeupdate 事件返回当前播放时间 currentTime 始终为 0 的Bug
  + iOS platform Fix the bug that the timeupdate event returns the current playback time currentTime is always 0 when the video is playing rtmp/rtsp protocol video
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 小程序应用资源更新可能引起页面卡顿的Bug
  + Android platform fixes the bug that the update of MiniApp application resources may cause the page to freeze
  + iOS平台 修复 存在自定义 UIWindow 时 toast 可能无法显示的Bug
  + iOS platform fix the bug that toast may not be displayed when there is a custom UIWindow

## 3.4.12.20220523-alpha
* 【uniCloud】
  + 修复 HBuilderX 3.4.10 引起的关联服务空间运行云函数错误的Bug [详情](https://ask.dcloud.net.cn/question/145551)
  + Fix the bug that HBuilderX 3.4.10 caused the error of running cloud functions in the associated service space [Details](https://ask.dcloud.net.cn/question/145551)

## 3.4.11.20220520-alpha
* 【uni-app】
  + App平台 修复 nvue 页面 switch 组件切换状态无限闪动的Bug [详情](https://ask.dcloud.net.cn/question/145272)
  + App platform Fix the bug that the switch state of the nvue page switch component flashes infinitely [Details](https://ask.dcloud.net.cn/question/145272)
  + App平台 修复 纯 nvue 编译模式 uni_modules 内静态资源未拷贝的Bug
  + App platform Fix the bug that static resources in uni_modules are not copied in pure nvue compilation mode
  + App-iOS平台 修复 vue3 项目 nvue 页面 swiper 组件面板指示点无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/145097)
  + App-iOS platform Fix the bug that the indicator point of the swiper component panel on the nvue page of the vue3 project cannot be hidden [Details](https://ask.dcloud.net.cn/question/145097)
  + H5平台 新增 vue3 项目 unicloud-db 组件属性 ssr-key [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db.html#ssrkey)
  + H5 platform Added vue3 project unicloud-db component attribute ssr-key [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db.html#ssrkey)
  + H5平台 修复 vue3 项目 unicloud-db 组件 使用 ssr 时 页面存在2个以上组件时数据显示错乱的Bug [详情](https://ask.dcloud.net.cn/question/139537)
  + H5 platform Fix the bug that the unicloud-db component of the vue3 project uses ssr and the data is displayed in disorder when there are more than 2 components on the page [Details](https://ask.dcloud.net.cn/question/139537)
  + H5平台 修复 3.4.10 版本引出的 vue2 项目启用摇树优化缺失 view 组件的Bug [详情](https://ask.dcloud.net.cn/question/145286)
  + H5 platform Fix the bug that the vue2 project from version 3.4.10 enables tree-shaking optimization and the missing view component [Details](https://ask.dcloud.net.cn/question/145286)
  + 小程序平台 修复 vue3 项目 在模板中使用 wxs、sjs 插值表达式不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3527)
  + MiniApp platform fixes the bug that the use of wxs and sjs interpolation expressions in the template of vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3527)
  + 支付宝小程序平台 修复 vue3 项目 全局组件不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3525)
  + The Alipay MiniApp platform fixes the bug that the global component of the vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3525)
  + 支付宝小程序平台 修复 vue3 项目 sjs 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3527)
  + The Alipay MiniApp platform fixes the bug that the sjs of the vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3527)
* 【uniCloud】
  + uni-admin 优化 首页增加uni统计的设备概览、注册用户概览
  + uni-admin optimization Homepage adds uni statistics device overview and registered user overview
  + uni-admin 优化 登录速度
  + uni-admin optimized login speed
  + uni-admin 修复 从「首页」跳转「概况」时，url 的 query 丢失的 bug  
  + uni-admin fix the bug that the query of url is lost when jumping from "Home" to "Overview"
  + uni-admin 修复 路由改变后面包屑未响应的 bug
  + uni-admin fix bug that breadcrumbs did not respond after route change
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 更新 uni-AD 今日头条穿山甲SDK Android为 4.5.1.1 版；腾讯优量汇SDK iOS为 4.13.65 版；快手广告SDK Android为 3.3.24 版，iOS为 3.3.24 版；百度百青藤广告SDK Android为 9.212 版，iOS为 4.87 版；Sigmob广告联盟SDK Android为 3.5.9 版
  + Update uni-AD Toutiao Pangolin SDK Android version 4.5.1.1; Tencent Youlianghui SDK iOS version 4.13.65; Kuaishou Advertising SDK Android version 3.3.24, iOS version 3.3.24; Baidu Baiqingteng Advertising SDK Android is version 9.212, iOS is version 4.87; Sigmob Advertising Alliance SDK Android is version 3.5.9

## 3.4.10.20220517-alpha
* 【uni-app】
  + 【重要】新增 uni统计2.0版本发布，开源、私有部署、易定制 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
  + [Important] Added uni stat 2.0 version release, open source, private deployment, easy to customize [Details](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
  + 【重要】uniAD 支持微信小程序平台，降低开通流量主门槛 [详情](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + [Important] uniAD supports WeChat MiniApp platform, lowering the main threshold for opening traffic [Details](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + 【重要】App平台 优化 vue2 项目 view 组件实现方式，提高渲染性能。建议相关开发者升级
  + [Important] App platform Optimize the implementation of the view component of the vue2 project to improve the rendering performance. Recommend relevant developers to upgrade
  + 新增 uni.getSystemInfo 支持获取更多属性 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + Added uni.getSystemInfo support to get more properties [Details](https://uniapp.dcloud.io/api/system/info.html)
  + 优化 vue3 项目 兼容 pnpm@7.0.0
  + Optimize vue3 project compatible with pnpm@7.0.0
  + 修复 vue3 项目 部分情况下错误信息不准确的Bug
  + Fix the bug of inaccurate error information in some cases of vue3 project
  + 修复 vue3 项目 vite.config.js 配置 build.minify 为 terser 不生效的Bug [详情](https://ask.dcloud.net.cn/question/144992)
  + Fix the bug that vue3 project vite.config.js configures build.minify as terser does not take effect [Details](https://ask.dcloud.net.cn/question/144992)
  + App、H5平台 优化 image 组件减少网络请求
  + App, H5 platform optimized image components to reduce network requests
  + App、H5平台 修复 canvas transform 渲染时没有使用高清处理的Bug [详情](https://ask.dcloud.net.cn/question/144676)
  + App, H5 platform Fix the bug that high-definition processing is not used when canvas transform is rendered [Details](https://ask.dcloud.net.cn/question/144676)
  + App平台、微信小程序平台 新增 vue3 ad-rewarded-video 激励视频广告组件，更加易用 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + App platform and WeChat MiniApp platform have added vue3 ad-rewarded-video rewarded Rewarded Ads component, which is easier to use [Details](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + App平台、微信小程序平台 新增 vue3 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App platform and WeChat MiniApp platform add vue3 ad-interstitial interstitial Interstitial Ads component [details](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App平台 新增 vue3 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App platform Added vue3 ad-fullscreen-video full-screen video ad component [Details](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App平台 修复 vue3 项目使用录音时报错的Bug [详情](https://ask.dcloud.net.cn/question/144821)
  + App platform Fix the bug that the vue3 project uses the recording error [Details](https://ask.dcloud.net.cn/question/144821)
  + App平台 修复 vue3 项目 纯 nvue 项目编译报错的Bug
  + App platform to fix the bug of compiling error of pure nvue project in vue3 project
  + App平台 修复 nvue 页面列表删除渲染卡顿的Bug [详情](https://ask.dcloud.net.cn/question/144110)
  + App platform Fix the bug that the nvue page list deletes the rendering stuck [Details](https://ask.dcloud.net.cn/question/144110)
  + App平台 修复 nvue 页面 transition 包含多个属性时编译报错的Bug [详情](https://ask.dcloud.net.cn/question/89110)
  + App platform Fix the bug of compilation error when nvue page transition contains multiple properties [Details](https://ask.dcloud.net.cn/question/89110)
  + App-Android平台 补齐 tabBar 和 navigationBar 支持高斯模糊效果 [详情](https://uniapp.dcloud.io/tutorial/app-blureffect)
  + App-Android platform completes tabBar and navigationBar to support Gaussian blur effect [Details](https://uniapp.dcloud.io/tutorial/app-blureffect)
  + H5平台 修复 rich-text 组件部分标签没有加上 scopeId 导致样式应用不上的Bug [详情](https://ask.dcloud.net.cn/question/144042)
  + H5 platform Fix the bug that the style cannot be applied because the scopeId is not added to some tags of the rich-text component [Details](https://ask.dcloud.net.cn/question/144042)
  + H5平台 修复 vue3 项目使用 picker 组件报错的Bug [详情](https://ask.dcloud.net.cn/question/144073)
  + H5 platform Fix the bug that the vue3 project uses the picker component to report errors [Details](https://ask.dcloud.net.cn/question/144073)
  + H5平台 修复 vue3 项目 当页面同时存在 vue、nvue 时，样式不正确的Bug [详情](https://ask.dcloud.net.cn/question/144687)
  + H5 platform Fix the bug of incorrect style in vue3 project when the page has both vue and nvue [Details](https://ask.dcloud.net.cn/question/144687)
  + H5平台 修复 vue3 项目 App.vue 使用 setup 不生效的Bug [详情](https://ask.dcloud.net.cn/question/144672)
  + H5 platform Fix the bug that the vue3 project App.vue does not take effect when using setup [Details](https://ask.dcloud.net.cn/question/144672)
  + H5平台 修复 vue3 项目 使用 Vue.js devtools 查看页面状态不显示的Bug [详情](https://github.com/dcloudio/uni-app/issues/3492)
  + H5 platform Fix vue3 project Use Vue.js devtools to view the bug that the page status is not displayed [Details](https://github.com/dcloudio/uni-app/issues/3492)
  + 小程序平台 修复 vue3 项目 部分情况下代码分割错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3491)
  + MiniApp platform to fix the bug of code segmentation error in some cases of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3491)
  + 微信小程序平台 调整 ad 广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad.html#weixin)
  + Wechat MiniApp platform to adjust ad advertising components [details](https://uniapp.dcloud.net.cn/component/ad.html#weixin)
* 【uniCloud】
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
  + uni-captcha added Integration: cloud-integrated component to create, refresh, and display captcha [Details](https://ext.dcloud.net.cn/plugin?id=4048)
  + uni-starter 新增 短信验证码登陆、绑定手机号码，防刷逻辑；当短信验证码输入错误超过2次，弹出图形验证码进行人机校验。[详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + uni-starter adds SMS verification code login, binding mobile phone number, anti-swipe logic; when the SMS verification code is entered incorrectly more than 2 times, the graphic verification code will pop up for man-machine verification. [Details](https://ext.dcloud.net.cn/plugin?id=5057)
  + uni-admin 新增 uni统计数据报表功能 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
  + uni-admin added uni statistics report function [Details](https://ext.dcloud.net.cn/plugin?id=3268)
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 多进程模式下微信分享过程中手动返回页面显示异常的Bug
  + Android platform Fix the bug that the page is displayed abnormally when manually returning to the page during WeChat sharing in multi-process mode
  + Android平台 修复 3.4.7版本引出的 宿主事件回调格式异常的Bug
  + Android platform Fix the bug of abnormal host event callback format caused by version 3.4.7

## 3.4.9.20220508-alpha
* 【uni-app】
  + uni统计 修复 3.4.8 版本引发的上报数据不正常的Bug [详情](https://ask.dcloud.net.cn/question/144408)
  + uni statistics Fix the bug of abnormal reporting data caused by version 3.4.8 [Details](https://ask.dcloud.net.cn/question/144408)
  + App-iOS平台 修复 nvue textarea 组件默认换行不生效的Bug [详情](https://ask.dcloud.net.cn/question/143784)
  + App-iOS platform Fix the bug that the default line break of nvue textarea component does not take effect [Details](https://ask.dcloud.net.cn/question/143784)
  + App-iOS平台 修复 nvue map 组件开启标记点聚合时，调用 removeMarkers 移除所有 marker 引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/143991)
  + App-iOS platform Fix the bug that when the nvue map component enables marker aggregation, calling removeMarkers to remove all markers causes the app to crash [Details](https://ask.dcloud.net.cn/question/143991)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 修复 音频播放 AudioPlayer 暂停后设置播放倍速大于 0 会自动触发播放的Bug [详情](https://ask.dcloud.net.cn/question/143757)
  + Fix the bug that AudioPlayer will automatically trigger playback after setting the playback speed greater than 0 after the audio playback is paused [Details](https://ask.dcloud.net.cn/question/143757)
  + Android平台 修复 uni-AD 开屏广告开通腾讯优量汇可能引起应用启动白屏的Bug
  + On Android platform, fix the bug that uni-AD App Open Ads and opening Tencent Youlianghui may cause the application to start a white screen
  + iOS平台 修复 登录鉴权、分享的 authorize 方法传入认证参数 options 不生效的Bug
  + iOS platform Fix the bug that the login authentication and share authorize method does not take effect when the authentication parameter options are passed in
* 【uniCloud】
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

## 3.4.8.20220428-alpha
* 【uni-app】
  + 新增 vue3 项目内置支持 pinia [详情](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
  + Added built-in support for pinia in vue3 project [Details](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
  + 修复 3.4.6 版本引发的 vue3 项目使用 pinia 报错的Bug [详情](https://ask.dcloud.net.cn/question/143578)
  + Fix the bug that the vue3 project uses pinia to report errors caused by version 3.4.6 [Details](https://ask.dcloud.net.cn/question/143578)
  + 修复 3.4.6 版本引发的 vue3 项目部分情况编译变慢的Bug [详情](https://github.com/dcloudio/uni-app/issues/3458)
  + Fix the bug of slow compilation of some vue3 projects caused by version 3.4.6 [Details](https://github.com/dcloudio/uni-app/issues/3458)
  + App平台、H5平台 修复 canvas 组件画图裁剪异常的Bug [详情](https://ask.dcloud.net.cn/question/142494)
  + App platform, H5 platform Fix the bug of abnormal drawing and clipping of canvas components [Details](https://ask.dcloud.net.cn/question/142494)
  + App平台、微信小程序平台 新增 vue2 ad-rewarded-video 激励视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + Added vue2 ad-rewarded-video rewarded Rewarded Ads component on App platform and WeChat MiniApp platform [Details](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + App平台、微信小程序平台 新增 vue2 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App platform and WeChat MiniApp platform add vue2 ad-fullscreen-video full-screen video advertising component [details](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App平台、微信小程序平台 新增 vue2 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App platform and WeChat MiniApp platform add vue2 ad-interstitial interstitial Interstitial Ads component [details](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App平台 修复 vue3 nvue 页面引用的静态资源编译后可能不存在的Bug
  + App platform Fix the bug that the static resources referenced by the vue3 nvue page may not exist after compilation
  + App平台 修复 vue3 nvue 页面事件无法冒泡的Bug
  + App platform to fix the bug that vue3 nvue page events cannot bubble
  + App平台 修复 vue3 nvue input，textarea 组件的 v-model 不生效的Bug [详情](https://ask.dcloud.net.cn/question/143547)
  + App platform Fix vue3 nvue input, the bug that the v-model of the textarea component does not take effect [Details](https://ask.dcloud.net.cn/question/143547)
  + App平台 修复 navigator 组件 animation-type、animation-duration 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/143377)
  + App platform Fixed the bug of invalid animation-type and animation-duration properties of the navigator component [Details](https://ask.dcloud.net.cn/question/143377)
  + App平台 修复 vue3 nvue movable 组件使用异常的Bug [详情](https://ask.dcloud.net.cn/question/143742)
  + App platform to fix the bug of abnormal use of vue3 nvue movable component [Details](https://ask.dcloud.net.cn/question/143742)
  + App平台 修复 3.4.2 版本引发的 ArrayBuffer 类型判断错误的Bug [详情](https://ask.dcloud.net.cn/question/143534)
  + App platform Fix the bug of wrong ArrayBuffer type judgment caused by version 3.4.2 [Details](https://ask.dcloud.net.cn/question/143534)
  + App-Android平台 修复 3.4.6版本 引出的 nvue 页面在部分设备可能出现渲染闪烁的Bug [详情](https://ask.dcloud.net.cn/question/143657)
  + App-Android platform Fix the bug that the nvue page brought out by version 3.4.6 may render a flickering bug in some devices [Details](https://ask.dcloud.net.cn/question/143657)
  + App-Android平台 修复 3.4.6版本 引出的 nvue 页面 boxShadow 在部分情况下可能渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/143727)
  + App-Android platform Fix the bug that the nvue page boxShadow from version 3.4.6 may render abnormally in some cases [Details](https://ask.dcloud.net.cn/question/143727)
  + App-Android平台 修复 bindingx 执行 getComputedStyle 方法返回异常的Bug [详情](https://ask.dcloud.net.cn/question/143697)
  + App-Android platform Fix the bug that bindingx executes the getComputedStyle method to return an exception [Details](https://ask.dcloud.net.cn/question/143697)
  + App-iOS平台 修复 nvue swiper 组件与页面返回手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/137505)
  + App-iOS platform Fix the bug that the nvue swiper component conflicts with the page return gesture [Details](https://ask.dcloud.net.cn/question/137505)
  + H5平台 修复 vue3 项目 html 原生标签（如div）renderjs/wxs 事件监听无法获取 ownerInstance 的Bug [详情](https://github.com/dcloudio/uni-app/issues/3436)
  + H5 platform Fix vue3 project html native tag (such as div) renderjs/wxs event listener cannot get ownerInstance Bug [Details](https://github.com/dcloudio/uni-app/issues/3436)
  + H5平台 修复 vue3 项目运行到浏览器，本地服务端口校验可能报错的Bug [详情](https://ask.dcloud.net.cn/question/143504)
  + H5 platform Fix the bug that the vue3 project runs to the browser, and the local service port verification may report an error [Details](https://ask.dcloud.net.cn/question/143504)
  + H5平台 修复 vue3 项目 map 组件 polyline、circles 颜色设置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3433)
  + H5 platform Fix the bug that the color settings of the map component polyline and circles of the vue3 project do not take effect [Details](https://github.com/dcloudio/uni-app/issues/3433)
  + 小程序平台 修复 vue3 项目当 style 样式值为数字，部分情况下丢失的Bug [详情](https://github.com/dcloudio/uni-app/issues/3456)
  + MiniApp platform fixes the bug that when the style value of the vue3 project is a number, it is lost in some cases [Details](https://github.com/dcloudio/uni-app/issues/3456)
  + 小程序平台 修复 v-if 内连用多个逻辑表达式编译出错的Bug [详情](https://ask.dcloud.net.cn/question/129122)
  + MiniApp platform to fix the bug of compiling errors with multiple logical expressions in v-if [Details](https://ask.dcloud.net.cn/question/129122)
  + 微信小程序平台 修复 vue3 项目当 input 事件函数返回 Promise 时，输入框显示错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3462)
  + Wechat MiniApp platform to fix the bug that when the input event function returns Promise in the vue3 project, the input box displays the wrong bug [Details](https://github.com/dcloudio/uni-app/issues/3462)
  + 微信小程序平台 修复 uni.getSystemInfoSync() 获取的 safeAreaInsets.bottom 为负数的Bug [详情](https://ask.dcloud.net.cn/question/133479)
  + Wechat MiniApp platform to fix the bug that safeAreaInsets.bottom obtained by uni.getSystemInfoSync() is negative [Details](https://ask.dcloud.net.cn/question/133479)
  + uni-ui 新增 uni-data-select 组件 [详情](https://ext.dcloud.net.cn/plugin?id=7993)
  + Added uni-data-select component to uni-ui [Details](https://ext.dcloud.net.cn/plugin?id=7993)
  + uni-ui 新增 uni-breadcrumb 组件 [详情](https://ext.dcloud.net.cn/plugin?id=7992)
  + uni-ui added uni-breadcrumb component [Details](https://ext.dcloud.net.cn/plugin?id=7992)
  + uni-ui 新增 uni-tooltip 组件 [详情](https://ext.dcloud.net.cn/plugin?id=8020)
  + Added uni-tooltip component to uni-ui [Details](https://ext.dcloud.net.cn/plugin?id=8020)
* 【uniCloud】
  + 修复 云对象 自动展示错误提示界面时 toast 图标错误的Bug [详情](https://ask.dcloud.net.cn/question/142246)
  + Fix the bug that the toast icon is wrong when the cloud object automatically displays the error prompt interface [Details](https://ask.dcloud.net.cn/question/142246)
  + 新增 uniCloud 支持云对象本地运行和调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#run-local)
  + Added uniCloud support for running and debugging cloud objects locally [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#run-local)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.462.1332 版，iOS为 4.13.63 版；今日头条穿山甲SDK iOS为 4.4.0.5 版；快手广告SDK Android为 3.3.23 版，iOS为 3.3.23 版；快手内容联盟SDK iOS为 3.3.28 版；百度百青藤广告SDK iOS为 4.861 版；Sigmob广告联盟SDK iOS为 4.1.0 版
  + Update uni-AD Tencent Youlianghui SDK Android version 4.462.1332, iOS version 4.13.63; Toutiao Pangolin SDK iOS version 4.4.0.5; Kuaishou Advertising SDK Android version 3.3.23, iOS version 3.3.23 Kuaishou Content Alliance SDK iOS is version 3.3.28; Baidu Baiqingteng Advertising SDK iOS is version 4.861; Sigmob Advertising Alliance SDK iOS is version 4.1.0
  + Android平台 更新 高德地图SDK为 9.2.0 版， 解决在部分设备使用地图引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/143573)
  + Android platform update AutoNavi Map SDK to version 9.2.0, to solve the bug that the application crashes when using the map on some devices [Details](https://ask.dcloud.net.cn/question/143573)
  + Android平台 修复 uni-AD 离线打包开通开屏广告可能引起应用崩溃的Bug
  + Android platform fixes the bug that uni-AD offline packaging and opening the App Open Ads may cause the application to crash
  + iOS平台 修复 3.4.6版本 引出的 获取底部安全区域高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/143633)
  + iOS platform to fix the bug that the height of the bottom safe area is incorrect from version 3.4.6 [Details](https://ask.dcloud.net.cn/question/143633)
  + iOS平台 修复 3.4.4版本 引出的 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
  + iOS platform Fix the bug of `ITMS-90078: Missing Push Notification Entitlement` warning caused by version 3.4.4 when uploading the AppStore without using the Push module
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + iOS平台 修复 调用 closeWithCompletion 方法关闭小程序后紧接着在打开小程序可能引起崩溃的Bug
  + On iOS platform, the bug that calling the closeWithCompletion method to close the MiniApp and then opening the MiniApp may cause a crash

## 3.4.6.20220416-alpha
* 【uni-app】
  + 优化 vue3 项目 支持导出 onSaveExitState 生命周期 [详情](https://github.com/dcloudio/uni-app/issues/3427)
  + Optimize vue3 project to support export onSaveExitState life cycle [details](https://github.com/dcloudio/uni-app/issues/3427)
  + 修复 vue3 项目 错误信息行号可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/143075)
  + Fix the bug that the line number of the error message in the vue3 project may be incorrect [Details](https://ask.dcloud.net.cn/question/143075)
  + App平台 修复 vue3 项目 nvue map 组件部分属性无效的Bug [详情](https://ask.dcloud.net.cn/question/142159)
  + App platform Fix the bug that some attributes of the nvue map component of the vue3 project are invalid [Details](https://ask.dcloud.net.cn/question/142159)
  + App平台 修复 InnerAudioContext 某些情况下 paused 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
  + App platform Fix the bug that the paused property value of InnerAudioContext is incorrect in some cases [Details](https://ask.dcloud.net.cn/question/141832)
  + App平台 修复 vue3 项目使用 vue-i18n 运行报错的Bug [详情](https://ask.dcloud.net.cn/question/142911)
  + App platform Fix the bug that the vue3 project uses vue-i18n to run the error [Details](https://ask.dcloud.net.cn/question/142911)
  + App平台 修复 vue3 项目 renderjs 在低版本手机可能运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3366)
  + App platform Fix the bug that renderjs of the vue3 project may run with errors on low-version mobile phones [Details](https://github.com/dcloudio/uni-app/issues/3366)
  + App-Android平台 修复 uni.saveImageToPhotosAlbum 在部分手机可能无法正常保存到系统相册的Bug [详情](https://ask.dcloud.net.cn/question/143125)
  + App-Android platform Fix the bug that uni.saveImageToPhotosAlbum may not be saved to the system album normally on some mobile phones [Details](https://ask.dcloud.net.cn/question/143125)
  + App-Android平台 修复 uni.getScreenBrightness 获取屏幕亮度始终返回 -1 的Bug [详情](https://ask.dcloud.net.cn/question/142726)
  + App-Android platform Fix the bug that uni.getScreenBrightness always returns -1 when getting the screen brightness [Details](https://ask.dcloud.net.cn/question/142726)
  + App-Android平台 修复 nvue 页面调用 dom.scrollToElement 滚动到 list 组件指定元素位置可能无效的Bug [详情](https://ask.dcloud.net.cn/question/143035)
  + App-Android platform Fix the bug that the nvue page calling dom.scrollToElement to scroll to the specified element position of the list component may be invalid [Details](https://ask.dcloud.net.cn/question/143035)
  + App-iOS平台 修复 video 不支持 enable-play-gesture 属性的Bug [详情](https://ask.dcloud.net.cn/question/141862)
  + App-iOS platform Fix the bug that video does not support enable-play-gesture attribute [Details](https://ask.dcloud.net.cn/question/141862)
  + App-iOS平台 修复 nvue input 组件 confirm-hold 属性默认值不正确的Bug
  + App-iOS platform fix the bug that the default value of the confirm-hold property of nvue input component is incorrect
  + App-iOS平台 修复 nvue ad-content-page 显示位置可能偏移的Bug
  + App-iOS platform to fix the bug that the display position of nvue ad-content-page may be offset
  + H5平台 修复 input 组件启用 password 后在小米手机钉钉内置浏览器无法弹出键盘的Bug [详情](https://ask.dcloud.net.cn/question/142834)
  + H5 platform Fix the bug that the keyboard cannot pop up in the built-in browser of Xiaomi mobile phone DingTalk after the password is enabled in the input component [Details](https://ask.dcloud.net.cn/question/142834)
  + 小程序平台 修复 vue3 项目 pages.json 配置国际化信息显示错误的Bug
  + The MiniApp platform fixes the bug that the vue3 project pages.json configures the wrong internationalization information
  + 小程序平台 修复 vue3 项目在 Windows 系统上生成的依赖文件可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3425)
  + The MiniApp platform fixes the bug that the dependency files generated by the vue3 project on the Windows system may be confused [Details](https://github.com/dcloudio/uni-app/issues/3425)
  + QQ小程序平台 修复 vue3 项目部分情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3419)
  + QQ MiniApp platform fixes the bug of running error in some cases of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3419)
  + 微信小程序平台 修复 vue3 项目发行为混合分包运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3416)
  + Wechat MiniApp platform to fix the bug that the vue3 project is issued as a mixed sub-package running error [Details](https://github.com/dcloudio/uni-app/issues/3416)
* 【uniCloud】
  + 【重要】阿里云 调整 单次数据库查询最大超时时间由1秒调整为3秒，需要重新上传云函数触发更新
  + [Important] Alibaba Cloud Adjustment The maximum timeout time for a single database query is adjusted from 1 second to 3 seconds, and you need to re-upload the cloud function to trigger the update
  + 【重要】云对象 调整 默认自动显示请求相关ui（等待loading，错误弹框） [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + [Important] Cloud object adjustment By default, the request-related ui will be automatically displayed (waiting for loading, error pop-up box) [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + JQL 修复 部分情况下过度限制了权限的Bug [详情](https://ask.dcloud.net.cn/question/142457)
  + JQL fix Bug that restricts permissions excessively in some cases [Details](https://ask.dcloud.net.cn/question/142457)
  + 本地调试插件 修复 HBuilderX 2.4.5 版本引出的部分场景下访问本地云函数误报公共模块冲突的Bug
  + Local debugging plug-in Fixed the bug that HBuilderX version 2.4.5 caused a false report of public module conflict when accessing local cloud functions in some scenarios.
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + iOS平台 修复 3.4.5版本 引出的 关闭页面动画异常的Bug [详情](https://ask.dcloud.net.cn/question/142797)
  + iOS platform Fix the bug of abnormal closing page animation caused by version 3.4.5 [Details](https://ask.dcloud.net.cn/question/142797)
  + iOS平台 修复 音频播放 AudioPlayer 获取暂停状态不准确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
  + iOS platform fix the bug that AudioPlayer gets inaccurate pause status [Details](https://ask.dcloud.net.cn/question/141832)
  + iOS平台 修复 音频播放 AudioPlayer 暂停后再恢复播放倍速会重置为1的Bug [详情](https://ask.dcloud.net.cn/question/142848)
  + iOS platform Fix the bug that AudioPlayer will reset to 1 after pausing and then resuming playback [Details](https://ask.dcloud.net.cn/question/142848)
  + iOS平台 修复 视频播放控件 video 在刘海屏设备全屏播放时进度条可能无法拖动的Bug [详情](https://ask.dcloud.net.cn/question/141862)
  + iOS platform Fix the bug that the video playback control video may not be dragged when the video is played in full screen on the Liu Haiping device [Details](https://ask.dcloud.net.cn/question/141862)
  + iOS平台 修复 视频播放控件 video 设置 show-fullscreen-btn 属性为 false 时可能显示不正确的Bug
  + iOS platform fix the bug that the video playback control video may display incorrectly when the show-fullscreen-btn property is set to false
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 新增 支持自定义实现获取匿名设备标识符OAID
  + Android platform Added support for custom implementation to obtain anonymous device identifier OAID

## 3.4.5.20220408-alpha
* 【uni-app】
  + 优化 vue3 项目 支持 vitest 测试框架 [详情](https://github.com/dcloudio/uni-app/issues/3398)
  + Optimize vue3 project to support vitest test framework [details](https://github.com/dcloudio/uni-app/issues/3398)
  + 优化 vue3 项目 全平台支持使用 props 接收页面参数 [详情](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#url-search-params)
  + Optimize the vue3 project to support the use of props to receive page parameters [Details](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#url-search-params)
  + 修复 vue3 项目 App.vue 中的 provide 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3404)
  + Fix the bug that provide does not take effect in App.vue of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3404)
  + App平台 新增 InnerAudioContext、BackgroundAudioManager 支持倍速播放
  + App platform Added InnerAudioContext and BackgroundAudioManager to support double-speed playback
  + App平台 修复 vue3 项目 App.vue 中的 css 可能编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3403)
  + App platform Fix the bug that css in App.vue of vue3 project may compile and report errors [Details](https://github.com/dcloudio/uni-app/issues/3403)
  + App平台 修复 uni.getEnv 在 nvue webview 中返回值不准确的Bug [详情](https://uniapp.dcloud.net.cn/component/web-view.html#getenv)
  + App platform Fix the bug that uni.getEnv returns inaccurate value in nvue webview [Details](https://uniapp.dcloud.net.cn/component/web-view.html#getenv)
  + App-Android平台 修复 3.4.3版本 引出的 nvue 组件设置 box-shadow 后 border 可能显示异常的Bug
  + App-Android platform Fix the bug that the border may display abnormally after setting the box-shadow of the nvue component from version 3.4.3
  + App-Android平台 修复 3.4.3版本 引出的 tabBar 设置 iconPath 且未设置 selectedIconPath 可能引起图标无法正常显示的Bug
  + App-Android platform Fix the bug that the iconPath of the tabBar brought out from version 3.4.3 is set and the selectedIconPath is not set, which may cause the icon to not display properly
  + App-Android平台 修复 nvue 页面 flex 布局在部分设备可能出现换行计算不正确的Bug
  + App-Android platform Fix the bug that the flex layout of nvue page may appear incorrect calculation of line breaks on some devices
  + App-iOS平台 修复 在页面生命周期 onLoad 方法中调用 lockOrientation 锁定屏幕方向可能引起布局异常的Bug
  + App-iOS platform Fix the bug that calling lockOrientation in the onLoad method of the page life cycle to lock the screen orientation may cause abnormal layout
  + App-iOS平台 修复 3.4.4版本 引出的 tabBar 图标显示错位的Bug [详情](https://ask.dcloud.net.cn/question/142685)
  + App-iOS platform Fix the bug that the tabBar icon displayed in the 3.4.4 version is misplaced [Details](https://ask.dcloud.net.cn/question/142685)
  + H5平台 修复 vue3 项目同时使用 style 节点和 style scoped 节点时，样式可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3410)
  + H5 platform Fix the bug that the style may be disordered when the vue3 project uses the style node and the style scoped node at the same time [Details](https://github.com/dcloudio/uni-app/issues/3410)
  + 小程序平台 优化 vue3 项目支持动态导入静态资源 [详情](https://github.com/dcloudio/uni-app/issues/3376)
  + MiniApp platform optimization vue3 project supports dynamic import of static resources [details](https://github.com/dcloudio/uni-app/issues/3376)
  + 小程序平台 修复 vue3 项目 slot 在部分复杂情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3346)
  + The MiniApp platform fixes the bug of the vue3 project slot running in some complex situations [details](https://github.com/dcloudio/uni-app/issues/3346)
  + 小程序平台 修复 vue2 项目 v-if 中同时包含成员表达式和逻辑表达式编译出错的Bug [详情](https://ask.dcloud.net.cn/question/142293)
  + The MiniApp platform fixes the bug that the v-if of the vue2 project contains both member expressions and logical expressions. [Details](https://ask.dcloud.net.cn/question/142293)
  + 微信小程序平台 优化 uni.showActionSheet 支持 title 参数
  + Wechat MiniApp platform optimized uni.showActionSheet to support title parameter
  + 支付宝小程序平台 修复 vue3 项目部分情况下渲染错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3408)
  + Alipay MiniApp platform fixes the bug of rendering error in some cases of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3408)
* 【uniCloud】
  + 修复 3.4.4版本 引出的 clientDB 本地运行报错的Bug
  + Fix the bug of clientDB local running error caused by version 3.4.4
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 修复 uni-AD 腾讯优量汇插屏广告在 onLoad 回调中执行 show 可能引起广告无法正常显示的Bug
  + Android platform fixes the bug that the uni-AD Tencent Interstitial Ads executes show in the onLoad callback, which may cause the advertisement to not display properly
  + iOS平台 修复 安心打包使用 swift 开发的uni原生插件时上传 AppStore 报`ITMS-90426: Invalid Swift Support`错误的Bug [详情](https://ask.dcloud.net.cn/question/142611)
  + iOS platform Fix the bug that `ITMS-90426: Invalid Swift Support` error is reported when uploading the uni native plug-in developed with swift in peace of mind [Details](https://ask.dcloud.net.cn/question/142611)
  + iOS平台 修复 在 iOS15.4 及以上设备系统时间设置为12小时制 pickDate 返回值异常的Bug [详情](https://ask.dcloud.net.cn/question/141906)
  + iOS platform Fix the bug that pickDate returns abnormal value when the system time of iOS15.4 and above devices is set to 12 hours [Details](https://ask.dcloud.net.cn/question/141906)

## 3.4.4.20220403-alpha
* 【uni-app】
  + App平台、H5平台 新增 input 组件配置 ignoreCompositionEvent 属性 [详情](https://uniapp.dcloud.io/component/input?id=input)
  + App platform, H5 platform Added ignoreCompositionEvent property for input component configuration [Details](https://uniapp.dcloud.io/component/input?id=input)
  + App平台 新增 tabbar 支持配置 iconfont [详情](https://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem)
  + App platform Added tabbar support to configure iconfont [Details](https://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem)
  + App平台 修复 vue2 nvue 页面文本首尾回车符占用高度的Bug [详情](https://ask.dcloud.net.cn/question/95429)
  + App platform Fix the bug that the carriage return characters at the beginning and end of the vue2 nvue page text occupy the height [Details](https://ask.dcloud.net.cn/question/95429)
  + App平台 修复 vue3 项目 uni.getSavedFileList、uni.getSavedFileInfo、uni.removeSavedFile、uni.getFileInfo 无效的Bug  [详情](https://ask.dcloud.net.cn/question/142428)
  + App platform Fix the bug that the vue3 project uni.getSavedFileList, uni.getSavedFileInfo, uni.removeSavedFile, uni.getFileInfo is invalid [Details](https://ask.dcloud.net.cn/question/142428)
  + App-Android平台 修复 nvue list 组件横向滚动不会触发 loadmore 事件的Bug
  + App-Android platform Fix the bug that the horizontal scrolling of the nvue list component will not trigger the loadmore event
  + App-Android平台 修复 连续调用 uni.chooseImage 在部分手机可能引起应用闪退的Bug
  + App-Android platform Fix the bug that continuous calling of uni.chooseImage may cause the application to crash on some mobile phones
  + App-Android平台 修复 3.4.3 引出的 tabBar 的列表项未设置 iconPath 会导致文字显示不全的Bug [详情](https://ask.dcloud.net.cn/question/142250)
  + App-Android platform Fixed the bug that the list item of the tabBar introduced in 3.4.3 did not set iconPath, which would cause the text to be incomplete [Details](https://ask.dcloud.net.cn/question/142250)
  + App-iOS平台 修复 video 组件 vslide-gesture-in-fullscreen 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/138299)
  + App-iOS platform Fix the bug that the vslide-gesture-in-fullscreen attribute of the video component is invalid [Details](https://ask.dcloud.net.cn/question/138299)
  + App-iOS平台 修复 nvue image 组件不支持 gif 图片中设置循环次数参数的Bug [详情](https://ask.dcloud.net.cn/question/140176)
  + App-iOS platform Fix the bug that the nvue image component does not support setting the loop count parameter in gif images [Details](https://ask.dcloud.net.cn/question/140176)
  + 小程序平台 修复 vue3 项目 v-model.number 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3381)
  + MiniApp platform to fix the bug that v-model.number of vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3381)
  + 小程序平台 修复 vue3 项目页面复杂时可能编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3397)
  + MiniApp platform fixes the bug that may compile errors when the vue3 project page is complex [Details](https://github.com/dcloudio/uni-app/issues/3397)
  + 微信小程序平台 修复 vue3 项目 input 事件 return 一个字符串没有同步到输入框的Bug [详情](https://github.com/dcloudio/uni-app/issues/3371)
  + Wechat MiniApp platform fixes the bug that the input event of the vue3 project returns a string that is not synchronized to the input box [Details](https://github.com/dcloudio/uni-app/issues/3371)
  + 百度小程序平台 修复 vue3 项目 onInit 生命周期不触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3384)
  + Baidu MiniApp platform fixes the bug that the onInit life cycle of vue3 project does not trigger [Details](https://github.com/dcloudio/uni-app/issues/3384)
  + 支付宝小程序平台 修复 vue2 项目插件内组件部分事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/142048)
  + The Alipay MiniApp platform fixes the bug that some events of the components in the vue2 project plugin are not triggered [Details](https://ask.dcloud.net.cn/question/142048)
  + 支付宝小程序平台 修复 vue3 项目 默认分享功能失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3377)
  + The Alipay MiniApp platform fixes the bug that the default sharing function of the vue3 project fails [Details](https://github.com/dcloudio/uni-app/issues/3377)
* 【uniCloud】
  + 修复 3.4.0版本引出的云函数子目录内文件引用公共模块失败的Bug
  + Fixed the bug that the file in the cloud function subdirectory introduced by version 3.4.0 failed to refer to the public module
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 音频播放 AudioPlayer 支持 playbackRate 设置倍速播放 [文档](https://www.html5plus.org/doc/zh_cn/audio.html#plus.audio.AudioPlayer.playbackRate)
  + Added audio playback AudioPlayer supports playbackRate to set double speed playback [document](https://www.html5plus.org/doc/zh_cn/audio.html#plus.audio.AudioPlayer.playbackRate)
  + Android平台 更新 高德定位SDK为 6.0.1 版，高德地图SDK为 9.0.1 版；UniPush 使用的个推SDK为 3.2.9.0 版，小米厂商推送库SDK为 3.1.1 版；Google地图SDK为 18.0.2 版
  + Android platform update AutoNavi positioning SDK is version 6.0.1, AutoNavi map SDK is version 9.0.1; UniPush uses personal push SDK version 3.2.9.0, Xiaomi manufacturer push library SDK is version 3.1.1; Google map SDK for version 18.0.2
  + Android平台 优化 二维码扫码检测到 QR 码时自动放大，提升扫码识别率 [详情](https://ask.dcloud.net.cn/question/142209)
  + Android platform optimization The QR code will automatically zoom in when the QR code is detected, improving the scanning recognition rate [Details](https://ask.dcloud.net.cn/question/142209)
  + 【重要】Android平台 修复 uni-AD 穿山甲广告联盟在部分设备可能提示`应用的uni-AD业务状态异常`的Bug
  + [Important] Android platform, fix the bug that the uni-AD pangolin advertising alliance may prompt 'the uni-AD business status of the application is abnormal' on some devices
  + iOS平台 修复 视频播放控件 video 播放视频音量与系统音量不一致的Bug
  + iOS platform Fix the bug that the video playback control video playback video volume is inconsistent with the system volume

## 3.4.3.20220325-alpha
* 【uni-app】
  + 【重要】App平台 nvue 页面支持 vue3（需要项目的 Vue 版本切换为3）[详情](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
  + [Important] The nvue page of the App platform supports vue3 (the Vue version of the project needs to be switched to 3) [Details](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
  + App平台、H5平台 新增 map 组件支持 polygons [详情](https://uniapp.dcloud.io/component/map)
  + App platform, H5 platform Added map component to support polygons [Details](https://uniapp.dcloud.io/component/map)
  + App平台、小程序平台 修复 vue3 项目配置 base 后资源路径可能错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3362)
  + App platform and MiniApp platform fix the bug that the resource path may be wrong after the vue3 project is configured with base [details](https://github.com/dcloudio/uni-app/issues/3362)
  + App平台 新增 打开微信客服功能 [详情](https://uniapp.dcloud.io/api/plugins/share.html)
  + App platform Added the function of opening WeChat customer service [Details](https://uniapp.dcloud.io/api/plugins/share.html)
  + App平台 修复 vue3 项目内联样式引用静态资源可能错误的Bug [详情](https://ask.dcloud.net.cn/question/141278)
  + App platform Fix the bug that the inline style of the vue3 project may refer to static resources incorrectly [Details](https://ask.dcloud.net.cn/question/141278)
  + App平台 新增 nvue ad-content-page 组件支持内容播放状态事件start、pause、resume、complete [规范](https://uniapp.dcloud.io/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App platform adds nvue ad-content-page component to support content playback status events start, pause, resume, complete [Specification](https://uniapp.dcloud.io/component/ad-content-page.html#%E7 %9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB %B6)
  + App-Android平台 优化 nvue 组件 box-shadow 渲染逻辑，解决在部分设备可能出现排版异常及闪烁的问题 [详情](https://uniapp.dcloud.io/tutorial/nvue-css.html#android-box-shadow)
  + App-Android platform optimizes the nvue component box-shadow rendering logic to solve the problem of typesetting and flickering that may occur in some devices [Details](https://uniapp.dcloud.io/tutorial/nvue-css.html#android- box-shadow)
  + App-Android平台 修复 nvue 组件设置 overflow 为 hidden 在部分设备无效的Bug [详情](https://ask.dcloud.net.cn/question/114175)
  + App-Android platform Fix the bug that the nvue component set overflow to hidden is invalid in some devices [Details](https://ask.dcloud.net.cn/question/114175)
  + App-Android平台 修复 nvue swiper 组件设置 circular 为 true 时首次启动可能先显示最后一项的Bug [详情](https://ask.dcloud.net.cn/question/140931)
  + App-Android platform Fix the bug that the last item may be displayed first when the nvue swiper component set circular to true [Details](https://ask.dcloud.net.cn/question/140931)
  + App-Android平台 修复 nvue swiper 组件在特定环境下可能出现页面空白的Bug [详情](https://ask.dcloud.net.cn/question/140942)
  + App-Android platform Fix the bug that the nvue swiper component may appear blank page in certain environments [Details](https://ask.dcloud.net.cn/question/140942)
  + App-iOS平台 修复 nvue swiper 组件内嵌 list-waterfall 时，横向滑动的同时列表还可以竖向滚动的Bug [详情](https://ask.dcloud.net.cn/question/134909)
  + App-iOS platform Fix the bug that the list can be scrolled vertically when the list-waterfall is embedded in the nvue swiper component [Details](https://ask.dcloud.net.cn/question/134909)
  + App-iOS平台 修复 nvue 页面内存在可滚动子组件时，开启 enablePullDownRefresh 下拉刷新功能无效的Bug
  + App-iOS platform Fix the bug that the enablePullDownRefresh pull-down refresh function is invalid when there are scrollable subcomponents in the nvue page
  + App平台 修复 vue3 组件 picker-view 调整列数据时渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/140609)
  + App platform Fix the bug that the vue3 component picker-view renders incorrectly when the column data is adjusted [Details](https://ask.dcloud.net.cn/question/140609)
  + H5平台 修复 vue3 项目配置 base 发行后资源路径可能错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3354)
  + H5 platform Fix the bug that the resource path may be wrong after the vue3 project configuration base is released [Details](https://github.com/dcloudio/uni-app/issues/3354)
  + 小程序平台 优化 vue3 项目自定义组件支持 v-bind="" 语法 [详情](https://github.com/dcloudio/uni-app/issues/3330)
  + MiniApp platform optimization vue3 project custom components support v-bind="" syntax [details](https://github.com/dcloudio/uni-app/issues/3330)
  + QQ小程序平台 修复 vue3 项目 appid 配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3339)
  + QQ MiniApp platform fixes the bug that the appid configuration of vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3339)
  + 字节跳动小程序平台 修复 vue3 项目部分情况下数据不响应的Bug [详情](https://github.com/dcloudio/uni-app/issues/3340)
  + The ByteDance MiniApp platform fixes the bug that the data does not respond in some cases of the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3340)
  + 字节跳动小程序平台 修复 vue3 项目 options 方式配置 provide/inject 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3360)
  + The ByteDance MiniApp platform fixes the bug that the vue3 project options configuration provide/inject does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3360)
  + 支付宝小程序平台 修复 vue3 项目分包页面事件响应不正常的Bug [详情](https://ask.dcloud.net.cn/question/140742)
  + The Alipay MiniApp platform fixes the bug that the event response of the subcontracting page of the vue3 project is abnormal [Details](https://ask.dcloud.net.cn/question/140742)
* 【uniCloud】
  + 修复 公共模块右键管理依赖的公共模块不生效的Bug
  + Fix the bug that the public module that the right-click management of the public module depends on does not take effect
  + 修复 修复本地运行云函数调用云对象报错的Bug
  + Fix Fix the bug of calling cloud objects when running cloud functions locally
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + uni-AD 新增 百度百青藤广告联盟支持信息流广告
  + uni-AD added Baidu Baiqingteng Advertising Alliance to support Native Ads
  + Android平台 更新 uni-AD 百度百青藤广告SDK 为 9.202 版
  + Android platform update uni-AD Baidu Baiqingteng Advertising SDK to version 9.202
  + Android平台 修复 在部分设备识别国际化语言不正确的Bug [详情](https://ask.dcloud.net.cn/question/141688)
  + Android platform Fix the bug that the internationalized language is not recognized correctly in some devices [Details](https://ask.dcloud.net.cn/question/141688)
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 微信登录连续多次调用可能会导致失败的Bug
  + Android platform to fix the bug that WeChat login may fail to be called multiple times in a row
  + Android平台 修复 转场动画在 Android12 设备可能失效的Bug
  + Android platform to fix the bug that the transition animation may fail on Android12 devices
  + Android平台 修复 调用 startActivityForUniMPTask 在 Android8 以下设备可能会引起应用崩溃的Bug
  + Android platform Fix the bug that calling startActivityForUniMPTask may cause the application to crash on devices below Android8

## 3.4.2.20220310-alpha
* 【uni-app】
  + App平台 新增 vue 页面支持 live-pusher 组件 [详情](https://uniapp.dcloud.net.cn/component/live-pusher)
  + App platform Added vue page support for live-pusher component [Details](https://uniapp.dcloud.net.cn/component/live-pusher)
  + App平台 修复 uni.request、uni.onSocketMessage 等接口返回的 ArrayBuffer 类型不可用 instanceof 做类型判断的Bug
  + App platform Fixed the bug that the ArrayBuffer type returned by interfaces such as uni.request and uni.onSocketMessage cannot be used for type judgment with instanceof
  + App平台 修复 vue3 项目 wxs/renderjs 监听事件运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3324)
  + App platform Fix the bug of wxs/renderjs monitoring event running error in vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3324)
  + App-Android平台 修复 nvue map组件使用高德地图时，频繁调用 addMarkers 增加聚合点可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/140461)
  + App-Android platform Fix the bug that when the nvue map component uses the Gaode map, frequently calling addMarkers to increase the aggregation point may cause a crash [Details](https://ask.dcloud.net.cn/question/140461)
  + App-Android平台 修复 nvue map组件使用谷歌地图时，调用 moveAlong 移动 marker 可能出现偏移的Bug
  + App-Android platform Fixed the bug that when the nvue map component uses Google Maps, calling moveAlong to move the marker may appear offset
  + App-iOS平台 补齐 uni-AD 支持 nvue ad-content-page组件 [文档](https://uniapp.dcloud.net.cn/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App-iOS platform completes uni-AD to support nvue ad-content-page component [document](https://uniapp.dcloud.net.cn/component/ad-content-page.html#%E7%9F%AD %E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App-iOS平台 修复 nvue 组件 userInteractionEnabled 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/140838)
  + App-iOS platform Fix the bug that the nvue component userInteractionEnabled property is invalid [Details](https://ask.dcloud.net.cn/question/140838)
  + App-iOS平台 修复 nvue refresh 组件 pullingdown 事件触发时机不正确的Bug [详情](https://ask.dcloud.net.cn/question/138962)
  + App-iOS platform Fix the bug that nvue refresh component pullingdown event trigger timing is incorrect [Details](https://ask.dcloud.net.cn/question/138962)
  + H5平台 修复 vue3 项目 wxs/renderjs 热刷新不生效的Bug [详情](https://ask.dcloud.net.cn/question/140800)
  + H5 platform Fix the bug that the vue3 project wxs/renderjs hot refresh does not take effect [Details](https://ask.dcloud.net.cn/question/140800)
  + H5平台 修复 vue3 项目特定情况下拉刷新后页面跳转的Bug [详情](https://github.com/dcloudio/uni-app/issues/3326)
  + H5 platform Fix the bug of page jumping after pull-down refresh under specific circumstances of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3326)
  + 小程序平台 修复 vue3 项目模板中 style 属性包含换行符时编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3320)
  + MiniApp platform fixes the bug of compilation error when the style attribute in the vue3 project template contains line breaks [Details](https://github.com/dcloudio/uni-app/issues/3320)
  + 支付宝小程序平台 优化 vue3 项目默认开启 es6=>es5 [详情](https://ask.dcloud.net.cn/question/140742)
  + Alipay MiniApp platform optimization vue3 project opens es6=>es5 by default [Details](https://ask.dcloud.net.cn/question/140742)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 新增 Google支付支持 isReadyToPay 方法 [文档](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.PaymentChannel.isReadyToPay)
  + Android platform added Google payment support isReadyToPay method [document](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.PaymentChannel.isReadyToPay)

## 3.4.1.20220308-alpha
* 【uni-app】
  + App平台 修复 uni.getBackgroundAudioManager 的 onPrev onNext 事件无效Bug [详情](https://ask.dcloud.net.cn/question/107325)
  + App platform Fix the bug that the onPrev onNext event of uni.getBackgroundAudioManager is invalid [Details](https://ask.dcloud.net.cn/question/107325)
  + App平台 修复 3.4.0 引发的 vue2 项目 canvas 组件 fillText 失效的Bug [详情](https://ask.dcloud.net.cn/question/140786)
  + App platform Fix the bug that the fillText of the canvas component of the vue2 project caused by 3.4.0 is invalid [Details](https://ask.dcloud.net.cn/question/140786)
  + App平台 修复 3.4.0 引发的 vue2 项目 nvue 页面的 uni.createLivePusherContext 无效Bug [详情](https://ask.dcloud.net.cn/question/140743)
  + App platform Fix the bug of invalid uni.createLivePusherContext on the nvue page of the vue2 project caused by 3.4.0 [Details](https://ask.dcloud.net.cn/question/140743)
  + App平台 修复 vue3 项目 navigator 组件和 rich-text 组件嵌套使用时 scopeId 值不一致导致的样式Bug [详情](https://ask.dcloud.net.cn/question/140644)
  + App platform Fix the style bug caused by inconsistent scopeId values when the navigator component of the vue3 project and the rich-text component are nested. [Details](https://ask.dcloud.net.cn/question/140644)
  + App-iOS平台 修复 nvue map 组件 marker 的 joinCluster 为 false 时 removeMarkers 方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/140648)
  + App-iOS platform Fix the bug that the removeMarkers method does not take effect when the joinCluster of the nvue map component marker is false [Details](https://ask.dcloud.net.cn/question/140648)
  + App-iOS平台 修复 nvue rich-text 组件 text-overflow 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/140586)
  + App-iOS platform Fix the bug that the text-overflow style of nvue rich-text component does not take effect [Details](https://ask.dcloud.net.cn/question/140586)
  + H5平台 修复 部分情况下 input 组件显示数值错误的Bug [详情](https://ask.dcloud.net.cn/question/140366)
  + H5 platform Fix the bug that the input component displays the wrong value in some cases [Details](https://ask.dcloud.net.cn/question/140366)
  + 小程序平台 修复 vue3 项目部分情况下视图更新延迟的Bug [详情](https://github.com/dcloudio/uni-app/issues/3311)
  + MiniApp platform fixes the bug of view update delay in some cases of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3311)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 3.4.0 引出的 UniPush模块使用 Oppo 厂商通道时云端打包失败的Bug [详情](https://ask.dcloud.net.cn/question/140765)
  + The bug that the cloud package fails when the UniPush module derived from Android platform 3.4.0 uses the Oppo vendor channel [Details](https://ask.dcloud.net.cn/question/140765)
* 【UniMPSDK】
  + iOS平台 修复 小程序SDK中设置 user-agent 影响宿主原生页面中 Webview 的Bug
  + iOS platform fixes the bug that setting user-agent in the MiniApp SDK affects the Webview in the host's native page

## 3.4.0.20220304-alpha
* 【uni-app】
  + 新增 vue2 项目支持发布到 京东小程序
  + Added vue2 project support for publishing to Jingdong MiniApp
  + 修复 vue3 项目兼容 vite@2.8.x [详情](https://ask.dcloud.net.cn/question/139311)
  + Fix vue3 project compatible with vite@2.8.x [Details](https://ask.dcloud.net.cn/question/139311)
  + 修复 vue3 项目兼容 vite-plugin-eslint [详情](https://github.com/dcloudio/uni-app/issues/3247)
  + Fix vue3 project compatibility with vite-plugin-eslint [details](https://github.com/dcloudio/uni-app/issues/3247)
  + App平台、H5平台 优化 取消全局 canvas 高清处理，支持配置单个 canvas 组件 hidpi 属性
  + App platform, H5 platform optimization Cancel the global canvas HD processing, support the configuration of the hidpi attribute of a single canvas component
  + App平台、H5平台 修复 自定义组件监听 tap.native 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3259)
  + App platform, H5 platform Fix the bug that custom component monitoring tap.native does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3259)
  + App平台、H5平台 修复 vue3 项目 uni.pageScrollTo 的 duration 为0时不生效的Bug [详情](https://ask.dcloud.net.cn/question/139432)
  + App platform, H5 platform Fix the bug that the duration of uni.pageScrollTo of vue3 project does not take effect when the duration is 0 [Details](https://ask.dcloud.net.cn/question/139432)
  + App平台、H5平台 修复 vue3 项目 input 组件类型为 number 时在低版本 webview 失去焦点时报错的Bug [详情](https://ask.dcloud.net.cn/question/138088)
  + App platform, H5 platform Fix the bug that when the input component type of the vue3 project is number, when the low version webview loses focus [Details](https://ask.dcloud.net.cn/question/138088)
  + App平台 新增 地图支持 Google地图 [详情](https://uniapp.dcloud.net.cn/app-maps)
  + App platform Added map support for Google Maps [Details](https://uniapp.dcloud.net.cn/app-maps)
  + App平台 新增 支付支持 Paypal、Stripe、Google Pay [详情](https://uniapp.dcloud.io/app-payment-paypal)
  + App platform added Paypal, Stripe, Google Pay [Details](https://uniapp.dcloud.io/app-payment-paypal)
  + App平台 新增 登录支持 Google、Facebook [详情](https://uniapp.dcloud.io/api/plugins/login?id=app-oauth)
  + App platform Added login support Google, Facebook [Details](https://uniapp.dcloud.io/api/plugins/login?id=app-oauth)
  + App平台 新增 vue 页面 video 组件支持 vslide-gesture、vslide-gesture-in-fullscreen 属性 [详情](https://uniapp.dcloud.io/component/video)
  + App platform Added vue page video component to support vslide-gesture, vslide-gesture-in-fullscreen properties [Details](https://uniapp.dcloud.io/component/video)
  + App平台 新增 pages.json 支持在 style 配置 disableSwipeBack 以禁用 iOS 侧滑返回
  + App platform Added pages.json support to configure disableSwipeBack in style to disable swipe back on iOS
  + App平台 修复 uni.addPhoneContact 重复添加联系人的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I4NY6C)
  + App Platform Fix the bug of adding contacts repeatedly in uni.addPhoneContact [Details](https://gitee.com/dcloud/uni-app/issues/I4NY6C)
  + App平台 修复 vue3 项目使用 html 原生标签（如div）时，事件监听报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3240)
  + App platform Fix the bug of event monitoring error when vue3 project uses html native tags (such as div) [Details](https://github.com/dcloudio/uni-app/issues/3240)
  + App-Android平台 修复 nvue image 组件 mode 属性设置为 widthFix/HeightFix 时可能导致图片无法显示的Bug [详情](https://ask.dcloud.net.cn/question/139541)
  + App-Android platform Fix the bug that the image cannot be displayed when the mode attribute of the nvue image component is set to widthFix/HeightFix [Details](https://ask.dcloud.net.cn/question/139541)
  + App-Android平台 修复 nvue list 组件插入列表项可能引起页面闪烁的Bug [详情](https://ask.dcloud.net.cn/question/139424)
  + App-Android platform Fix the bug that the nvue list component inserting list items may cause the page to flicker [Details](https://ask.dcloud.net.cn/question/139424)
  + App-Android平台 修复 nvue web-view 组件 progress 颜色值不支持3位十六进制格式字符串的Bug [详情](https://ask.dcloud.net.cn/question/138670)
  + App-Android platform Fix the bug that the progress color value of the nvue web-view component does not support the 3-digit hexadecimal format string [Details](https://ask.dcloud.net.cn/question/138670)
  + App-Android平台 修复 nvue web-view 组件 无法正常加载使用非受信任证书网页的Bug [详情](https://ask.dcloud.net.cn/question/134287)
  + App-Android platform Fix the bug that nvue web-view component cannot load pages using untrusted certificate [Details](https://ask.dcloud.net.cn/question/134287)
  + App-Android平台 修复 nvue animation 动画切到后台可能无法执行的Bug [详情](https://ask.dcloud.net.cn/question/137868)
  + App-Android platform Fix the bug that nvue animation animation may not be executed when it switches to the background [Details](https://ask.dcloud.net.cn/question/137868)
  + App-Android平台 修复 nvue map 组件 marker 设置 joinCluster 为 true 时导致 callouttap 事件不响应的Bug [详情](https://ask.dcloud.net.cn/question/136381)
  + App-Android platform Fix the bug that the callouttap event does not respond when the nvue map component marker sets joinCluster to true [Details](https://ask.dcloud.net.cn/question/136381)
  + App-Android平台 修复 nvue text 组件 font-style 设置 italic 在部分设备可能无效的Bug [详情](https://ask.dcloud.net.cn/question/120801)
  + App-Android platform Fix the bug that the font-style setting of nvue text component italic may be invalid in some devices [Details](https://ask.dcloud.net.cn/question/120801)
  + App-Android平台 修复 nvue 页面切换可能导致 plus.key.addEventListener 监听 keydown 事件不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/140203)
  + App-Android platform Fix the bug that the nvue page switching may cause plus.key.addEventListener to listen to the keydown event and not trigger the callback [Details](https://ask.dcloud.net.cn/question/140203)
  + App-iOS平台 修复 vue3 项目 调试时启动白屏的Bug
  + App-iOS platform Fix the bug of starting the white screen when debugging the vue3 project
  + H5平台 优化 vue3 项目 navigator 组件使用 a 标签渲染以利于SEO
  + H5 platform Optimize vue3 project navigator component to use a tag rendering to facilitate SEO
  + H5平台 修复 vue3 项目 html 中引入 static 目录的 js 文件包含 ifdef 编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3201)
  + H5 platform Fix the bug that the js file introduced into the static directory in the html of the vue3 project contains the bug of ifdef compilation error [Details](https://github.com/dcloudio/uni-app/issues/3201)
  + H5平台 修复 vue3 项目 renderjs 发行后不正常的Bug [详情](https://ask.dcloud.net.cn/question/137832)
  + H5 platform Fix the abnormal bug after the release of vue3 project renderjs [Details](https://ask.dcloud.net.cn/question/137832)
  + H5平台 修复 vue3 项目 dataset 不支持对象类型错误的Bug [详情](https://ask.dcloud.net.cn/question/139181)
  + H5 platform Fix the bug that the vue3 project dataset does not support the wrong object type [Details](https://ask.dcloud.net.cn/question/139181)
  + H5平台 修复 vue3 项目 禁用摇树后，uni.showModal 等弹窗缺少样式的Bug [详情](https://ask.dcloud.net.cn/question/139593)
  + H5 platform Fix the bug that the pop-up window such as uni.showModal lacks styles after disabling tree shaking in the vue3 project [Details](https://ask.dcloud.net.cn/question/139593)
  + H5平台 修复 vue3 项目 热刷新编译报错的Bug [详情](https://ask.dcloud.net.cn/question/135765)
  + H5 platform Fix the bug of hot refresh compilation error of vue3 project [Details](https://ask.dcloud.net.cn/question/135765)
  + H5平台 修复 vue3 项目 text 组件使用 v-if 时显示错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3225)
  + H5 platform Fix the bug that the text component of the vue3 project displays an error when using v-if [Details](https://github.com/dcloudio/uni-app/issues/3225)
  + H5平台 修复 map 组件 marker 不能设置 id 为 0 的Bug
  + H5 platform fix the bug that the map component marker cannot be set to 0 with id
  + 小程序平台 修复 vue3 项目 uni.getSystemInfo 无法获取 deviceId 的Bug [详情](https://ask.dcloud.net.cn/question/139733)
  + MiniApp platform to fix the bug that uni.getSystemInfo cannot get deviceId in vue3 project [Details](https://ask.dcloud.net.cn/question/139733)
  + 小程序平台 修复 vue3 项目 不支持 v-html 的Bug [详情](https://ask.dcloud.net.cn/question/138290)
  + MiniApp platform to fix the bug that vue3 project does not support v-html [Details](https://ask.dcloud.net.cn/question/138290)
  + 小程序平台 修复 vue3 项目 v-if 中使用 wxs 等模块时报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3199)
  + The MiniApp platform fixes the bug in the v-if of the vue3 project when using modules such as wxs [details](https://github.com/dcloudio/uni-app/issues/3199)
  + 小程序平台 修复 vue3 项目 defineEmits 事件名包含 - 分隔符时无法正常监听的Bug [详情](https://github.com/dcloudio/uni-app/issues/3210)
  + MiniApp platform to fix the bug that the defineEmits event name of the vue3 project cannot be monitored normally when the delimiter is included [Details](https://github.com/dcloudio/uni-app/issues/3210)
  + 小程序平台 修复 vue3 项目 setup 手动引入组件不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3213)
  + The MiniApp platform fixes the bug that the manual introduction of components in the vue3 project setup does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3213)
  + 小程序平台 修复 vue3 项目 v-for 嵌套使用时部分情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3263)
  + The MiniApp platform fixes the bug of running errors in some cases when v-for is nested in the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3263)
  + 小程序平台 修复 vue3 项目 wxs 调用 callMethod 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3218)
  + The MiniApp platform fixes the bug that the wxs call method of the vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3218)
  + 小程序平台 修复 vue3 项目 全局组件路径解析错误的Bug [详情](https://ask.dcloud.net.cn/question/138662)
  + The MiniApp platform fixes the bug that the global component path parsing error of the vue3 project [details](https://ask.dcloud.net.cn/question/138662)
  + 小程序平台 修复 vue3 项目 全局 mixin 分享 onShareAppMessage，onShareTimeline 不生效的Bug [详情](https://ask.dcloud.net.cn/question/140351)
  + The MiniApp platform fixes the bug that the global mixin of the vue3 project shares onShareAppMessage and onShareTimeline does not take effect [Details](https://ask.dcloud.net.cn/question/140351)
  + 微信小程序平台 修复 vue2 项目 v-for 遍历部分表达式时 stop 修饰符无效的Bug [详情](https://ask.dcloud.net.cn/question/138684)
  + Wechat MiniApp platform fixes the bug that the stop modifier is invalid when v-for traverses some expressions in vue2 project [Details](https://ask.dcloud.net.cn/question/138684)
  + 微信小程序平台 修复 vue3 项目 canvas 监听 touch 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3209)
  + Wechat MiniApp platform to fix the bug that canvas monitoring touch does not take effect in vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3209)
  + 微信小程序平台 修复 vue3 项目部分情况下事件监听错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3228)
  + WeChat MiniApp platform fixes the bug of disordered event monitoring in some cases of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3228)
  + 微信小程序平台 修复 vue3 项目使用小程序插件组件无法传递属性的Bug [详情](https://github.com/dcloudio/uni-app/issues/3257)
  + Wechat MiniApp platform to fix the bug that the vue3 project uses the MiniApp plugin component to pass attributes [details](https://github.com/dcloudio/uni-app/issues/3257)
  + 支付宝小程序平台 修复 vue2 项目小程序组件事件监听失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/2273)
  + The Alipay MiniApp platform fixes the bug that the event monitoring of the MiniApp component of the vue2 project fails [Details](https://github.com/dcloudio/uni-app/issues/2273)
  + 支付宝小程序平台 修复 vue2 项目小程序插件中组件事件监听失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/2410)
  + The Alipay MiniApp platform fixes the bug of the component event monitoring failure in the MiniApp plug-in of the vue2 project [Details](https://github.com/dcloudio/uni-app/issues/2410)
  + 【重要】hello uniCloud 新增云对象基础使用示例[详情](https://ext.dcloud.net.cn/plugin?id=4082)
  + [Important] hello uniCloud adds cloud object basic usage example [details](https://ext.dcloud.net.cn/plugin?id=4082)
* 【uniCloud】
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
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 支持Google地图 [详情](https://uniapp.dcloud.io/app-maps?id=google%e5%9c%b0%e5%9b%be)
  + Added support for Google Maps [Details](https://uniapp.dcloud.io/app-maps?id=google%e5%9c%b0%e5%9b%be)
  + 【重要】uni-AD 新增 百度百青藤广告联盟 支持开屏、插屏、激励视频广告 [详情](https://ask.dcloud.net.cn/article/36769)
  + [Important] uni-AD has added Baidu Baiqingteng Advertising Alliance to support open-screen, interstitial, and rewarded Rewarded Ads[Details](https://ask.dcloud.net.cn/article/36769)
  + 【重要】Android平台 新增 uni-AD 支持华为广告联盟 包括开屏、信息流、插屏、激励视频广告 [详情](https://ask.dcloud.net.cn/article/36769)
  + [Important] Android platform adds uni-AD to support Huawei Advertising Alliance, including screen opening, information flow, interstitial, and rewarded Rewarded Ads[Details](https://ask.dcloud.net.cn/article/36769)
  + Android平台 优化 应用启动首页可能出现上下抖动的Bug [详情](https://ask.dcloud.net.cn/question/138243)
  + Android platform optimization The application startup home page may appear a bug that shakes up and down [Details](https://ask.dcloud.net.cn/question/138243)
  + Android平台 修复 使用 X5 内核调用 plus.key.addEventListener 监听 keyup 事件不触发回调的Bug
  + Android platform fixed the bug that using the X5 kernel to call plus.key.addEventListener to listen to the keyup event does not trigger the callback
  + Android平台 修复 Android8及以上设备 plus.navigator.createShortcut 无法创建桌面快捷图标的Bug [详情](https://ask.dcloud.net.cn/question/125119)
  + Android platform Fix the bug that Android8 and above devices plus.navigator.createShortcut cannot create desktop shortcut icons [Details](https://ask.dcloud.net.cn/question/125119)
  + Android平台 修复 视频播放控件 video 边缘可能出现黑线的Bug [详情](https://ask.dcloud.net.cn/question/138320)
  + Android platform Fix the bug that black lines may appear on the video edge of the video playback controls [Details](https://ask.dcloud.net.cn/question/138320)
  + Android平台 修复 在部分设备调用 plus.runtime.restart 可能引起应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/138965)
  + Android platform Fix the bug that calling plus.runtime.restart on some devices may cause the application to crash [Details](https://ask.dcloud.net.cn/question/138965)
  + Android平台 修复 系统语言设置为土耳其语时，tabbar 切换选项可能导致不显示的Bug [详情](https://ask.dcloud.net.cn/question/139313)
  + Android platform fix When the system language is set to Turkish, the tabbar switch option may cause a bug that is not displayed [Details](https://ask.dcloud.net.cn/question/139313)
  + Android平台 修复 本地相册选择视频设置 compressed 为 false 时依然会压缩的Bug [详情](https://ask.dcloud.net.cn/question/140417)
  + Android platform Fix the bug that the video will still be compressed when the local album selects compressed to false [Details](https://ask.dcloud.net.cn/question/140417)
  + iOS平台 新增 uni原生插件支持 applicationMain 获取 main 函数启动参数 argc、argv [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=hook%e7%b3%bb%e7%bb%9f%e4%ba%8b%e4%bb%b6)
  + Added uni native plugin for iOS platform to support applicationMain to get main function startup parameters argc, argv [document](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=hook%e7%b3%bb% e7%bb%9f%e4%ba%8b%e4%bb%b6)
  + iOS平台 修复 Webview窗口标题栏 titleNView无法动态更新网络页面标题的Bug [详情](https://ask.dcloud.net.cn/question/138958)
  + iOS platform Fix the bug that the title bar of the Webview window titleNView cannot dynamically update the title of the web page [Details](https://ask.dcloud.net.cn/question/138958)
  + iOS平台 修复 compressVideo 视频压缩可能出现尺寸错乱的Bug [详情](https://ask.dcloud.net.cn/question/138303)
  + iOS platform Fix the bug that compressVideo video compression may appear wrong size [Details](https://ask.dcloud.net.cn/question/138303)
  + iOS平台 修复 微博分享 type 为 web 时无法正常分享的Bug [详情](https://ask.dcloud.net.cn/question/138830)
  + iOS platform Fix bug that cannot be shared normally when Weibo sharing type is web [Details](https://ask.dcloud.net.cn/question/138830)
  + iOS平台 修复 播放背景音频时系统锁屏界面音乐播放器的进度条可能显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/140101)
  + iOS platform Fix the bug that the progress bar of the music player on the system lock screen may display incorrectly when playing background audio [Details](https://ask.dcloud.net.cn/question/140101)
* 【uni小程序SDK】
* [uni MiniApp SDK]
  + Android平台 优化 混淆配置规则，解决 zip4j 可能与其他的库冲突的Bug
  + Android platform optimization Confused configuration rules to solve the bug that zip4j may conflict with other libraries
  + Android平台 修复 3.3.5 引出的 微信支付回调可能会引起崩溃的Bug
  + Android platform Fix the bug that WeChat payment callback caused by 3.3.5 may cause a crash
  + Android平台 修复 多个小程序分别配置使用 vue2、vue3， 同时打开可能引起白屏的Bug [详情](https://ask.dcloud.net.cn/question/138576)
  + Fix multiple MiniApp on Android platform to use vue2 and vue3 respectively, and open bugs that may cause white screen at the same time [Details](https://ask.dcloud.net.cn/question/138576)
  + Android平台 修复 关闭小程序后台运行模式，重复操作打开/关闭小程序可能导致小程序无法正常运行的Bug
  + On Android platform, the bug that closes the MiniApp background running mode, and repeats the operation to open/close the MiniApp may cause the MiniApp to fail to run normally
  + Android平台 修复 小程序切换到后台，直达页面启动时出现闪屏的Bug
  + Android platform fixes the bug that the MiniApp switches to the background, and the splash screen appears when the direct page starts
  + iOS平台 修复 关闭小程序后快速启动小程序并直达页面，重复操作偶现崩溃的Bug
  + iOS platform fixes the bug that after closing the MiniApp, quickly start the MiniApp and go to the page, and the repeated operation occasionally crashes

## 3.3.12.20220222-alpha
* 【uni-app】
  + App平台、H5平台 修复 vue3 项目两个开启了下拉刷新的页面跳转后返回，下拉刷新不触发 onPullDownRefresh 生命周期的Bug [详情](https://github.com/dcloudio/uni-app/issues/3187)
  + App platform and H5 platform fix the bug of the onPullDownRefresh life cycle that the two pages of the vue3 project with pull-down refresh enabled are returned after jumping. [Details](https://github.com/dcloudio/uni-app/issues /3187)
  + App平台 修复 vue3 项目 nvue 页面使用 map 组件时部分方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/138515)
  + App platform Fix the bug that some methods do not take effect when the map component is used on the nvue page of the vue3 project [Details](https://ask.dcloud.net.cn/question/138515)
  + App-Android平台 修复 picker 组件选择选项后同页面 input 组件可能无法正常获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/138237)
  + App-Android platform Fix the bug that the input component on the same page may not get the focus normally after the picker component selects an option [Details](https://ask.dcloud.net.cn/question/138237)
  + App-Android平台 修复 vue3 项目 安卓低版本时使用 type=number 的 input 组件输入报错的Bug [详情](https://ask.dcloud.net.cn/question/138088)
  + App-Android platform Fix the bug that the input component of type=number is used to input errors in the vue3 project when the Android version is low [Details](https://ask.dcloud.net.cn/question/138088)
  + App-iOS平台 修复 3.3.2 版本引出的支持多个音频同时播放引发iOS影响静音开关的问题，默认不支持同时播放多个文件，如果需要可手动设置 sessionCategory
  + App-iOS platform Fixed the problem that the 3.3.2 version supports simultaneous playback of multiple audios and causes iOS to affect the mute switch. By default, multiple files are not supported at the same time. If necessary, you can manually set sessionCategory
  + App-iOS平台 修复 vue3 项目 canvas 组件绘制本地图像后无法导出到本地到Bug
  + App-iOS platform Fix the bug that the canvas component of the vue3 project cannot export to the local after drawing the local image
  + H5平台 优化 uni.chooseLocation 支持传入坐标
  + H5 platform optimized uni.chooseLocation to support incoming coordinates
  + H5平台 修复 vue2 项目开启摇树后 ad 组件失效的Bug
  + H5 platform Fix the bug that the ad component fails after the vue2 project opens the tree shake
  + H5平台 修复 vue3 项目 image 组件 mode=heightFix 图像大小显示错误的Bug
  + H5 platform Fix the bug that the image component mode=heightFix of the vue3 project image component displays the wrong image size
  + H5平台 修复 vue3 项目 button 组件发行后 loading 不显示的Bug
  + H5 platform Fix the bug that the loading is not displayed after the button component of the vue3 project is released
  + 支付宝小程序平台 修复 触发自定义事件报错的Bug [详情](https://ask.dcloud.net.cn/question/138706)
  + The Alipay MiniApp platform fixes the bug that triggers custom events to report errors [Details](https://ask.dcloud.net.cn/question/138706)
* 【uniCloud】
  + 修复 JQL语法 getTemp 返回结果传递给组件属性时在微信小程序端报错的Bug [详情](https://ask.dcloud.net.cn/question/138308)
  + Fix the bug that an error is reported on the WeChat MiniApp when the JQL syntax getTemp returns the result to the component property [Details](https://ask.dcloud.net.cn/question/138308)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.450.1320 版，iOS为 4.13.50 版；今日头条穿山甲SDK Android为 4.3.0.1 版， iOS为 4.3.0.2 版；快手广告SDK Android为 3.3.21 版，iOS为 3.3.21 版
  + Update uni-AD Tencent Youlianghui SDK Android version 4.450.1320, iOS version 4.13.50; Toutiao Pangolin SDK Android version 4.3.0.1, iOS version 4.3.0.2; Kuaishou Advertising SDK Android version 3.3.21 version, iOS version 3.3.21
  + Android平台 修复 一键登录 授权页面服务协议自定义复选框状态图片设置不正确的Bug [详情](https://ask.dcloud.net.cn/question/139830)
  + Android platform Fix the bug that the one-click login authorization page service agreement custom checkbox state picture is set incorrectly [Details](https://ask.dcloud.net.cn/question/139830)
  + iOS平台 修复 Downloader 下载图片文件可能失败的Bug [详情](https://ask.dcloud.net.cn/question/116101)
  + iOS platform Fix the bug that Downloader may fail to download image files [Details](https://ask.dcloud.net.cn/question/116101)
  + iOS平台 修复 geitImageInfo 可能不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/139361)
  + iOS platform Fix the bug that geitImageInfo may not trigger callback [Details](https://ask.dcloud.net.cn/question/139361)
* 【uni小程序SDK】
* [uni MiniApp SDK]
  + iOS平台 修复 动态切换横竖屏导致页面布局异常的Bug
  + iOS platform Fix the bug that the page layout is abnormal due to dynamic switching between horizontal and vertical screens

## 3.3.8.20220114-alpha
* 【uniCloud】
  + 修复 3.3.7-alpha引出的JQL数据库管理无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/138139)
  + Fix the bug that JQL database management caused by 3.3.7-alpha cannot be used normally [Details](https://ask.dcloud.net.cn/question/138139)
* 【uni-app】
  + App-Android平台 修复 3.3.7 版本引出的 nvue list 组件滚动后也会触发 click 事件的Bug
  + App-Android platform Fix the bug that the nvue list component introduced in version 3.3.7 will also trigger the click event after scrolling
  + 小程序平台 修复 vue3 项目 组件使用 id 属性不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3179)
  + MiniApp platform fixes the bug that the id attribute of the vue3 project component does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3179)
  + 小程序平台 修复 vue3 项目 部分情况 defineExpose 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3180)
  + The MiniApp platform fixes the bug that defineExpose does not take effect in some cases of the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3180)
  + 小程序平台 修复 vue3 项目 兼容 unocss 插件 [详情](https://ask.dcloud.net.cn/question/138021)
  + MiniApp platform repair vue3 project compatible with unocss plugin [details](https://ask.dcloud.net.cn/question/138021)
  + 微信小程序平台 修复 vue3 项目 当 v-for 循环变量名为 index 时渲染不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3193)
  + Wechat MiniApp platform to fix the bug that the vue3 project renders incorrectly when the v-for loop variable is named index [Details](https://github.com/dcloudio/uni-app/issues/3193)
  + 微信小程序平台 修复 vue3 项目无法自动开启开发工具窗口的Bug
  + Wechat MiniApp platform to fix the bug that the vue3 project cannot automatically open the development tool window
  + 支付宝小程序平台 修复 vue3 项目 mixin 中包含 props 运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3191)
  + The Alipay MiniApp platform fixes the bug that the mixin of the vue3 project contains props running errors [Details](https://github.com/dcloudio/uni-app/issues/3191)

## 3.3.7.20220112-alpha
* 【uni-app】
  + App平台、H5平台 新增 textarea、input 组件支持 confirm-hold 属性 [详情](https://uniapp.dcloud.io/component/input)
  + App platform, H5 platform Added textarea and input components to support confirm-hold attribute [Details](https://uniapp.dcloud.io/component/input)
  + App平台、H5平台 优化 image 组件 draggable 属性默认值改为 false
  + App platform, H5 platform Optimize the default value of the draggable attribute of the image component to false
  + App平台 优化 uni.request 请求参数支持 ArrayBuffer 类型
  + App platform optimized uni.request request parameters to support ArrayBuffer type
  + App平台 修复 vue3 项目 发行后 renderjs 调用 ownerInstance.callMethod 失效的Bug [详情](https://ask.dcloud.net.cn/question/137832)
  + App platform Fix the bug that renderjs calls ownerInstance.callMethod invalid after the vue3 project is released [Details](https://ask.dcloud.net.cn/question/137832)
  + App平台 修复 vue3 项目 picker 组件默认语言固定为英文的Bug [详情](https://ask.dcloud.net.cn/question/136954)
  + App platform Fix the bug that the default language of the picker component of the vue3 project is fixed to English [Details](https://ask.dcloud.net.cn/question/136954)
  + App-Android平台 修复 nvue input 组件不支持自定义字体的Bug [详情](https://ask.dcloud.net.cn/question/135514)
  + App-Android platform Fix the bug that nvue input component does not support custom fonts [Details](https://ask.dcloud.net.cn/question/135514)
  + App-Android平台 修复 nvue list 组件不支持 click 事件的Bug [详情](https://ask.dcloud.net.cn/question/136754)
  + App-Android platform Fix the bug that nvue list component does not support click event [Details](https://ask.dcloud.net.cn/question/136754)
  + App-iOS平台 修复 nvue swiper-list 组件滚动条无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/136261)
  + App-iOS platform Fix the bug that the scroll bar of nvue swiper-list component cannot be hidden [Details](https://ask.dcloud.net.cn/question/136261)
  + H5平台 修复 右键单击事件 contextmenu 丢失 clientX、clientY 属性的Bug [详情](https://ask.dcloud.net.cn/question/136530)
  + H5 platform Fix the bug that the right-click event contextmenu loses clientX, clientY properties [Details](https://ask.dcloud.net.cn/question/136530)
  + 小程序平台 修复 模板中包含转义引号时在小程序开发工具中编译报错或显示异常的Bug
  + MiniApp platform fixes the bug that when the template contains escaped quotation marks, an error is reported or displayed in the MiniApp development tool when compiling
  + 微信小程序平台 修复 多页面，组件内使用插槽数据时，差量编译丢失插槽信息的Bug [详情](https://ask.dcloud.net.cn/question/136258)
  + Wechat MiniApp platform fixes the bug of missing slot information when using slot data in components [Details](https://ask.dcloud.net.cn/question/136258)
* 【uniCloud】
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在临时表内使用 as 或其他运算操作 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + Added JQL syntax to use getTemp for join table query, support using as or other operations in temporary tables [Details](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with- temp)
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在虚拟联表内使用 foreignKey 方法指定要使用的 foreignKey 的归属的字段 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + Added JQL syntax. When using getTemp to query the linked table, it supports using the foreignKey method in the virtual linked table to specify the field of the foreignKey to be used [Details](https://uniapp.dcloud.net.cn/uniCloud/jql ?id=lookup-with-temp)
  + 新增 web控制台 阿里云 前端网页托管支持为指定路径开启 uni-app history 路由跳转模式支持 [详情](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=routing)
  + Added support for web console Alibaba Cloud front-end web hosting to enable uni-app history routing jump mode support for specified paths [Details](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=routing)
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
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 【重要】新增 Payment 模块支持 Paypal支付、Stripe支付、Google支付 [文档](https://uniapp.dcloud.io/app-payment)
  + [Important] Added Payment module to support Paypal payment, Stripe payment, Google payment [Documentation](https://uniapp.dcloud.io/app-payment)
  + 【重要】新增 Push 模块支持 Google推送 Firebase Cloud Push (FCM) [文档](https://uniapp.dcloud.io/app-push-fcm)
  + [Important] Added Push module to support Google Push Firebase Cloud Push (FCM) [Documentation](https://uniapp.dcloud.io/app-push-fcm)
  + 【重要】新增 Statistic 模块支持 Google统计 [文档](https://uniapp.dcloud.io/app-statistic-google)
  + [Important] Added Statistic module to support Google statistics [Documentation](https://uniapp.dcloud.io/app-statistic-google)
  + 新增 一键登录 支持 closeIcon 属性设置自定义关闭按钮图片 [文档](https://uniapp.dcloud.io/univerify)
  + Added one-click login Support closeIcon property to set custom close button image [Documentation](https://uniapp.dcloud.io/univerify)
  + 更新 uni-AD 快手广告SDK Android为 3.3.20 版，iOS为 3.3.20 版；快手内容联盟SDK Android为 3.3.27 版， iOS为 3.3.27 版
  + Update uni-AD Kuaishou Advertising SDK to version 3.3.20 for Android and version 3.3.20 for iOS; Kuaishou Content Alliance SDK to version 3.3.27 for Android and version 3.3.27 for iOS
  + Android平台 修复 调用 plus.runtime.restart 重启应用后 user-agent 会清空的Bug [详情](https://ask.dcloud.net.cn/question/136105)
  + Android platform Fix the bug that user-agent will be cleared after calling plus.runtime.restart to restart the application [Details](https://ask.dcloud.net.cn/question/136105)
  + Android平台 修复 plus.downloader.enumerate 可能获取不到下载任务的Bug [详情](https://ask.dcloud.net.cn/question/137548)
  + Android platform Fix the bug that plus.downloader.enumerate may not get the download task [Details](https://ask.dcloud.net.cn/question/137548)
  + Android平台 修复 一键登录 在部分 Android 8.0、8.1 设置无法弹出登录框的Bug
  + Android platform Fix the bug that one-click login cannot pop up the login box in some Android 8.0, 8.1 settings
  + Android平台 修复 一键登录 设置登录界面 logo 图片可能不生效的Bug
  + For Android platform, fix the bug that the logo image of the login interface may not work with one-click login
  + Android平台 修复 视频播放控件 VideoPlayer 设置 object-fit 属性可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/137150)
  + Android platform Fix the bug that the video player control VideoPlayer setting object-fit attribute may not take effect [Details](https://ask.dcloud.net.cn/question/137150)
  + Android平台 修复 使用系统定位模块执行 watchPosition 后再执行 getCurrentPosition 可能失败的Bug [详情](https://ask.dcloud.net.cn/question/137586)
  + Android platform fix the bug that use the system positioning module to execute watchPosition and then execute getCurrentPosition may fail [Details](https://ask.dcloud.net.cn/question/137586)
  + Android平台 修复 Push模块 createMessage 在安卓系统8以下系统可能无法创建通知栏消息的Bug [详情](https://ask.dcloud.net.cn/question/137923)
  + Android platform Fix the bug that the Push module createMessage may not be able to create notification bar messages in systems below Android 8 [Details](https://ask.dcloud.net.cn/question/137923)
  + Android平台 修复 图片选择界面设置 crop 属性在部分手机和模拟器上可能引起黑屏崩溃的Bug [详情](https://ask.dcloud.net.cn/question/136969)
  + Android platform Fix the bug that setting the crop attribute in the image selection interface may cause a black screen crash on some mobile phones and emulators [Details](https://ask.dcloud.net.cn/question/136969)
  + Android平台 修复 图片选择界面未勾选`原图`时图片方向可能发生变化的Bug [详情](https://ask.dcloud.net.cn/question/137358)
  + Android platform Fix the bug that the image orientation may change when the `original image` is not checked in the image selection interface [Details](https://ask.dcloud.net.cn/question/137358)
  + iOS平台 修复 uni-AD 使用自定义 storyboard 时开屏广告底部应用图标、名称可能不显示的Bug
  + Fix the bug that the app icon and name may not be displayed at the bottom of the App Open Ads when uni-AD uses a custom storyboard on the iOS platform
* 【uni小程序SDK】
* [uni MiniApp SDK]
  + 新增 小程序 wgt 资源文件支持加密 [文档](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=installWgt)
  + Added support for encryption of MiniApp wgt resource files [document](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=installWgt)
  + Android平台 修复 不设置任何参数初始化小程序SDK可能会引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/137175)
  + Android platform fixes the bug that initializing the MiniApp SDK without setting any parameters may cause a crash [Details](https://ask.dcloud.net.cn/question/137175)
  + Android平台 修复 启动使用 vue3 的小程序可能出现白屏的Bug
  + Fix the bug that white screen may appear when launching the MiniApp using vue3 on Android platform
  + iOS平台 修复 小程序未开启后台运行，通过手势关闭小程序后快速打开小程序偶现崩溃的Bug
  + iOS platform fixes the bug that the MiniApp not start running in the background, and the MiniApp is quickly opened after closing the MiniApp through gestures and occasionally crashes
  + iOS平台 修复 在隐藏小程序的回调方法中再次打开同一小程序无效的Bug
  + iOS platform fixes the bug that opening the same MiniApp again in the callback method of the hidden MiniApp is invalid
  + iOS平台 修复 同时打开多个小程序 getCurrentPageUrl 获取当前显示的小程序页面路径不正确的Bug
  + iOS platform fixes the bug that when multiple MiniApp are opened at the same time, getCurrentPageUrl gets the incorrect page path of the currently displayed MiniApp


## 已归档的历史版本
## Archived historical versions

[更多已归档版本的更新日志](release-note-alpha-archive.md)
[Changelog for more archived releases](release-note-alpha-archive.md)

<md-virtual key="release-note-alpha"/>
