#### 4.63.2025042307-alpha
* 【uni-app x】
  + App平台 新增 组件 web-view 支持获取内容高度及内容高度变化事件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16625>
  + Android、iOS平台 新增 API uni.makePhoneCall 支持拨打电话 [文档](https://doc.dcloud.net.cn/uni-app-x/api/make-phone-call.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16592>
  + Android、iOS平台 修复 4.51版本引发的 API uni.showActionSheet 主题监听导致内存泄漏问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17201)
  + Android、iOS平台 修复 4.61版本引发的 API uni.showModal 主题监听导致内存泄漏问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17230)
  + Android、iOS平台 修复 4.61版本引发的 API uni.showModal 应用主题设置为跟随系统时暗黑效果不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17226)
  + Android平台 修复 组件 web-view 网页中输入框获取焦点后可能被软键盘遮挡 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17222)
  + Android平台 修复 DOM API UniElement animate 方法设置 opacity 导致动画不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17191)
  + iOS平台 新增 API uni.connectEventSource 支持SSE [文档](https://doc.dcloud.net.cn/uni-app-x/api/connect-event-source.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15664>
  + iOS平台 修复 4.55版本引发的 组件 text selectable 文本可选效果可能无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17199)
  + 鸿蒙平台 新增 编译器 支持模块摇树，根据使用情况自动添加 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#treeshaking) <https://issues.dcloud.net.cn/pages/issues/detail?id=17140>
  + 鸿蒙平台 新增 组件 web-view 支持 bounces 属性 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html)
  + 鸿蒙平台 修复 运行调试 uni-app x 项目启用了 uni-push 模块时运行到鸿蒙报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17159)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 plus.runtime.showPrivacyDialog 弹出隐私协议框点击`同意`后需重启才能生效的Bug
  + iOS平台 修复 模拟器运行时调用 plus.nativeUI.setUIStyle 可能会导致应用崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16708)

#### 4.62.2025041603-alpha
* 【uni-app】
  + App-iOS平台 修复 google 地图卫星视图模式不显示建筑和道路名称的Bug [详情](https://ask.dcloud.net.cn/question/207738)
  + App-Harmony平台 新增 defineNativeEmbed 接口，用于定义原生嵌入组件 [详情](https://uniapp.dcloud.net.cn/tutorial/harmony/native-component.html)
  + App-Harmony平台 修复 4.61 版本引发的 storage 存储出现混乱的Bug
  + App-Harmony平台 修复 getStorage 接口返回的对象内的数组调用 push 方法无效的Bug [详情](https://ask.dcloud.net.cn/question/207828)
  + App-Harmony平台 修复 直达页面跳转同名页面后返回直接回到了首页的Bug
  + App-Harmony平台 修复 web-view 的 update-title 默认表现错误的Bug
  + App-Harmony平台 修复 uts 插件内打印日志无法在 HBuilderX 控制台查看的Bug
  + App-Harmony平台 调整 uni-app 页面所在的 webview 启用 MixedMode.All
* 【uni-app x】
  + App-Android平台 修复 API dialogPage 在android5.0系统设备内容显示不全 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16939)
  + App-Android平台 修复 4.61版本引发的 组件 ad 打包勾选章鱼广告模块广告加载失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16948)
  + App-iOS平台 修复 4.25版本引发的 组件 list-view scroll-into-view 属性可能无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16934)
  + App-iOS平台 修复 组件 waterflow scroll-into-view 属性可能无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16443)
  + App-iOS平台 修复 组件 input 某些场景下 hold-keyboard 设置为 true 滑动 scroll-view 依然隐藏软键盘 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17060)
  + App-iOS平台 修复 组件 web-view web页面中 a 标签 target 属性值为 _blank 时点击无法跳转 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16740)
  + App-iOS平台 修复 4.61版本引发的 API uni.showModal showCancel字段默认值不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16943)
  + App-iOS平台 修复 CSS text-decoration-line 属性运行在 iOS18 及以上设备无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16838)
  + Web平台 修复 4.61版本引发的 组件 video 播放图标不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17035)
  + 微信小程序平台 修复 编译器 $vm找不到 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16723)
  + App-Harmony平台 新增 运行调试 支持运行到 x64 平台的鸿蒙模拟器 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17036)
* 【uts插件】
  + App-Harmony平台 修复 UTSHarmony 在较早时机无法调用 getUIAbilityContext 的 Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17019)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 更新 分享/登录模块 QQ SDK 为 3.5.17.4 版，解决在 iOS18 系统登录无法跳转到 QQ 的问题 [详情](https://ask.dcloud.net.cn/question/207800)

#### 4.61.2025040322-alpha
* 【uni-app】
  + 修复 Vue2 项目 使用预编译器 dart-sass 时非 uni.scss 文件不能使用 @use 语法的Bug [详情](https://ask.dcloud.net.cn/question/206689)
  + Web 平台 修复 在使用国际化时，leftWindow、topWindow 和 rightWindow 初始语言默认显示为英文的Bug [详情](https://github.com/dcloudio/uni-app/issues/5243)
  + App 平台 修复 Canvas 设置不支持字体小数、 font-weight 不支持更多自重和数字的Bug [详情](https://github.com/dcloudio/uni-app/issues/5329)
  + App 平台 修复 textarea 组件在某些情况下，在APP端 iOS 模拟器中无法渲染的Bug [详情](https://ask.dcloud.net.cn/question/206746)
  + App 平台 修复 在有拦截器的情况下，切换 tabbar 时索引与页面不对应的Bug [详情](https://ask.dcloud.net.cn/question/147649)
  + App-Android 平台 修复 Vue2 模式下 data 相同值赋值不会触发 nextTick 的Bug [详情](https://ask.dcloud.net.cn/question/206600)
  + App-Harmony平台 新增 通过交互界面配置鸿蒙的数字签名证书，支持自动申请调试证书
  + App-Harmony平台 新增 运行到鸿蒙时可以选择构建过程的缓存策略
  + App-Harmony平台 调整 运行到鸿蒙时不再先尝试卸载原有应用，以保持应用存储的连续性
  + App-Harmony平台 新增 UniMP 实例支持访问 appId 属性
  + App-Harmony平台 新增 uni.getBackgroundAudioManager 现可以在通知栏中显示音频播放控制
  + App-Harmony平台 调整 navigateBar 高度，调整返回按钮点击区域，调整 loading 改为在左侧
  + App-Harmony平台 修复 setTimeout 传入错误参数导致崩溃的Bug
  + App-Harmony平台 修复 createWebviewContext  的相关方法调用之后闪退的Bug
  + App-Harmony平台 修复 getWindowInfo 部分设备获取的 windowHeight 少1px的Bug
  + App-Harmony平台 修复 部分情况下主应用和小程序切换时调用 uni api 报错的Bug
  + App-Harmony平台 修复 uni.request data 传入字符串被额外 JSON.stringify 了一次的Bug [详情](https://ask.dcloud.net.cn/question/207554)
  + 小程序平台 修复 Node 高版本废弃部分 API 导致运行失败的Bug [详情](https://github.com/dcloudio/uni-app/issues/5300)
  + 小程序平台 修复 编译 style 产物存在冗余 runtime 判断逻辑的Bug [详情](https://github.com/dcloudio/uni-app/issues/5333)
  + 微信小程序平台 新增 支持 useExtendedLib 属性，引入 weui 工具库 [详情](https://ask.dcloud.net.cn/question/206730)
  + 支付宝小程序平台 修复 getSystemInfo 时 osName 错误的Bug [详情](https://ask.dcloud.net.cn/question/207186)
  + MP-Harmony平台 新增 鸿蒙元服务支持 vue2 项目类型
  + 小红书小程序平台 修复 产物目录下无法编入 ext.json 的Bug
  + 抖音小程序平台 修复 产物目录下无法编入 package.json 的Bug
* 【uni-app x】
  + 【重要】新增 编译App到HarmonyOS平台 [详见](https://doc.dcloud.net.cn/uni-app-x/app-harmony/)
  + App-Android平台 修复 4.53版本引发的 组件 text 触摸事件可能不响应 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16132)
* 【uts】
  + Web平台、App-iOS平台、微信小程序平台 修复 getString/getNumber 等get方法默认值参数部分情况不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16094)
  + App-Harmony平台 新增 convert2AbsFullPath、getResourcePath 方法 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/utsharmony.html)
* 【unicloud】
  + 新增 软件版服务空间支持跨服务空间调用云函数
  + 修复 阿里云云数据库 updateAdnReturn 传入空间不会报错的Bug [详情](https://ask.dcloud.net.cn/question/206249)
  + 修复 HBuilderX 项目存在多服务空间时，运行本地云函数不支持集群空间运行的Bug
  + 修复 下载云函数时如果本地已存在云函数弹出对话框，点击关闭会继续下载的Bug

#### 4.57.2025032014-alpha
* 【uni-app】
  + 【重要】Vue2 项目scss预编译器默认改用dart-sass，HBuilderX 非 Mac Arm 版可以在manifest.json中根节点配置"sassImplementationName": "node-sass"手动指定，继续使用node-sass。这2种sass编译器有语法差异 [文档](https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#css-preprocessor) [详情](https://ask.dcloud.net.cn/question/206506)
  + App-Android平台 修复 4.55版本引发的 组件 Button 在 nvue 页面设置 border-radius、border 和 iOS 表现不一致的Bug [详情](https://ask.dcloud.net.cn/question/206548)
  + MP-Harmony平台 新增 鸿蒙元服务支持 vue2 项目类型
* 【uni-app-x】
  + Web平台、微信小程序平台 修复 4.55版本引发的 编译器 运行时会提交云端编译仅App端支持的uts加密插件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16242)
  + App-Android平台 修复 4.41版本引发的 组件 waterflow 触发下拉刷新可能出现app卡死 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16133)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 4.41版本引发的 uni-AD 快捷开屏广告可能会不展示的Bug
  + Android平台 修复 4.51版本引发的 部分设备启动白屏或停留在启动界面无法启动的Bug [详情](https://ask.dcloud.net.cn/question/206890)

#### 4.54.2025030608-alpha
* 【uni-app】
  + App-iOS 修复 uni.requestPayment 使用苹果应用内购 IAP 在 iOS18 系统 username 参数类型不为字符串时会引起应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/206161)
* 【uts插件】
  + 新增 in 操作符支持 type 定义的类型 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/data-type.html#in-%E6%93%8D%E4%BD%9C%E7%AC%A6)
  + App-Android平台 修复 4.51版本引发的 UTSJSONObject 对象使用 in 操作符编译报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 更新 新浪微博SDK 为 3.4.0 版本，解决在 iOS18 系统无法登录的Bug [详情](https://ask.dcloud.net.cn/question/206323)
  + iOS平台 修复 uni-AD 开屏显示快手广告时频繁前后台切换可能导致页面显示不正常的Bug

#### 4.53.2025022409-alpha
* 【uni-app】
  + App-Android平台 修复 使用uts插件云端打包后没有包含隐私清单的Bug
  + App-Harmony平台 修复 4.51 引发的使用 uni.chooseImage 选择图片无法显示的Bug
  + 快手小程序平台 修复 自定义组件 ref 获取失败的 bug [详情](https://ask.dcloud.net.cn/question/204250)
* 【uni-app x】
  + 修复 编译器 as 语法导致对象引用丢失 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15705)
  + App平台 新增 组件 兼容支持 cover-view、cover-image [文档](https://doc.dcloud.net.cn/uni-app-x/component/cover-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15771>
  + App-iOS平台、微信小程序平台 新增 DOM API 关键帧动画 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unielement.html#animate) <https://issues.dcloud.net.cn/pages/issues/detail?id=15642>
  + App-Android平台 修复 组件 canvas 设置textBaseline="Top"绘制位置不准确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15634)
  + App-Android平台 修复 组件 canvas Image释放后不会立即回收内存 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15645)
  + App-Android平台 修复 组件 web-view 底部textarea弹出的软键盘遮挡界面元素 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15678)
  + App-Android平台 修复 API dialogPage 在app的onLaunch或在页面的onLoad中打开dialogPage时获取不到安全区域信息 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15489)
  + App-Android平台 修复 CSS border 安卓运行时解析 border 和编译时表现不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15510)
  + App-iOS平台 修复 4.51版本引发的 组件 Touch 事件 move 中执行 preventDefault 可能导致页面始终无法滚动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15617)
  + App-iOS平台 修复 组件 canvas ios端 Image对象 本地路径结尾带问号参数时无法被canvas渲染 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15784)
  + App-iOS平台 修复 4.11版本引发的 组件 web-view 重写了 window.postMessage 函数 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15796)
  + 微信小程序平台 修复 onShareAppMessage, onShareTimeline需要import才可使用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15707)
  + 微信小程序平台 修复 组合式api页面中 onShareAppMessage, onShareTimeline声明后页面也无法分享 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15708)
* 【uts插件】
  + Web平台、App-iOS平台、微信小程序平台 修复 部分对象字面量未转化为UTSJSONObject [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15557)
* 【uniCloud】
  + 修复 4.32版本引发的 uni-app-x 腾讯云云函数、云对象等网络请求返回的数据没有被转为UTSJSONObject [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15653)

#### 4.52.2025020807-alpha
* 【uni-app】
  + App平台 新增 uni.chooseMedia [文档](https://uniapp.dcloud.net.cn/api/media/video.html#choosemedia)
  + App平台 vue3项目 修复 v-if 在某些情况下子组件不能被正确销毁的Bug [详情](https://ask.dcloud.net.cn/question/205222)
* 【uni-app x】
  + 修复 4.51版本引发的 编译器 uni-app兼容模式组件uts插件内utssdk目录、平台目录下均无index.uts时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15502)
  + Web平台、微信小程序平台 新增 CSS var支持安全区域相关变量 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/function.html)
  + App平台 修复 4.51版本引发的 API showActionSheet appTheme 设置 auto 时，未适配系统主题问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15501)
  + App平台 修复 API uni.downloadFile 下载时断网不会触发回调事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15497)
  + App-Android平台 修复 组件 button 拆分设置border相关样式不起作用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15526)
  + App-Android平台 修复 4.51版本引发的 API showActionSheet 某些时机底部安全区适配失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15500)
  + App-Android平台 修复 API uni.setAppBadgeNumber 在MIUI12以上系统设置角标不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15231)
  + App-iOS平台 修复 4.51版本引发的 组件 video 播放控件上的按钮点击无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15545)
* 【uts插件】
  + App平台 修复 4.51版本引发的 部分情况下类型收窄编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15491)
* 【uniCloud】
  + 新增 uni-ai 支持 DeepSeek 模型 [详情](https://doc.dcloud.net.cn/uniCloud/uni-ai.html#get-llm-manager)
  + 修复 支付宝云数据库 count 查询时没有显式返回数量的Bug [详情](https://ask.dcloud.net.cn/question/204598)

#### 4.51.2025012123-alpha
* 【uni-app-x】
  + Web平台、App平台 新增 API UniPage 补充更多信息属性 [文档](https://doc.dcloud.net.cn/uni-app-x/api/unipage.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10587>
  + Web平台、App平台 重构 showActionSheet，基于dialogPage，支持国际化、主题、横屏、更多item数量、自定义颜色 [文档](https://doc.dcloud.net.cn/uni-app-x/api/show-action-sheet.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=6259>
  + Web平台、App平台 新增 API uni.hideActionSheet 关闭栈顶页面的 actionSheet [文档](https://doc.dcloud.net.cn/uni-app-x/api/show-action-sheet.html#hideactionsheet) <https://issues.dcloud.net.cn/pages/issues/detail?id=15304>
  + Web平台、App平台 修复 API dialogPage pages.json 中 navigationStyle、backgroundColorContent 配置无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14225)
  + Web平台 修复 组件 list-view list-item下的自定义组件触发两次生命周期 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13858)
  + Web平台 修复 API showActionSheet 内嵌套showActionSheet第二层点击itemList无法取消，取消后再也无法打开 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1765)
  + Web平台 修复 API uni.createCanvasContextAsync 组件内多根节点无法获取canvas元素的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14392)
  + App平台 新增 vue v-on 支持 prevent 修饰符 [文档](https://doc.dcloud.net.cn/uni-app-x/vue/modifier.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15333>
  + App平台 新增 组件 共享元素动画 [文档](https://doc.dcloud.net.cn/uni-app-x/component/share-element.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14354>
  + App平台 新增 组件 text 嵌套为子组件时响应点击事件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/text.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=362>
  + App平台 新增 组件 map 更改tap相关Event类型继承自UniPointerEvent [文档](https://doc.dcloud.net.cn/uni-app-x/component/map.html#unimappoitapevent) <https://issues.dcloud.net.cn/pages/issues/detail?id=14280>
  + App平台 新增 组件 map 支持Marker的callout属性 [文档](https://doc.dcloud.net.cn/uni-app-x/component/map.html#%E5%B1%9E%E6%80%A7) <https://issues.dcloud.net.cn/pages/issues/detail?id=14595>
  + App平台 新增 API uni.openAppAuthorizeSetting 打开系统的应用授权管理页面 [文档](https://doc.dcloud.net.cn/uni-app-x/api/open-app-authorize-setting.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12833>
  + App平台 新增 API uni.chooseMedia 选择图片或视频 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-media.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13164>
  + App平台 新增 API uni.previewImage 基于dialogPage重构，优化指示器效果，补充长按事件，开放源码方便自定义 [文档](https://doc.dcloud.net.cn/uni-app-x/api/preview-image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15200>
  + App平台 新增 API uni.getUniverifyManager 基于dialogPage重构内置UI，适配暗黑模式 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14332>
  + App平台 新增 CSS 支持env方法 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/function.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7296>
  + App平台 调整 DOM API CSSStyleDeclaration getPropertyValue获取不存在的样式值时，与web一样返回空字符串 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/cssstyledeclaration.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14749>
  + App平台 修复 4.31版本引发的 组件 map marker不支持title属性 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14270)
  + App平台 修复 CSS 某些情况下未处理百分比导致view没有显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14572)
  + App-Android平台 新增 pages.json 支持androidThreeButtonNavigationBackgroundColor配置虚拟按键导航栏背景色 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14135>
  + App-Android平台 新增 API 支持chooseFile [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-file.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14362>
  + App-Android平台 新增 API uni.isSimulator() 判断是否为模拟器 [文档](https://doc.dcloud.net.cn/uni-app-x/api/is-simulator.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15225>
  + App-Android平台 新增 API getAccessibilityInfo 获取无障碍服务相关信息 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-accessibility-info.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15303>
  + App-Android平台 新增 API uni.base64ToArrayBuffer 、uni.arrayBufferToBase64 [文档](https://doc.dcloud.net.cn/uni-app-x/api/base64.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12771>
  + App-Android平台 新增 API uni.request 支持 ArrayBuffer 数据 [文档](http://localhost:8081/uni-app-x/api/request.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11652>
  + App-Android平台 新增 API uni.request 支持sse 用于流式响应服务器推送消息 [文档](https://doc.dcloud.net.cn/uni-app-x/api/connect-event-source.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14290>
  + App-Android平台 新增 API uni.getFileSystemManager 读取文件支持content://路径 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14130>
  + App-Android平台 新增 DOM API 关键帧动画 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unielement.html#animate) <https://issues.dcloud.net.cn/pages/issues/detail?id=13135>
  + App-Android平台 修复 编译器 无法使用相对路径引入uni_modules下插件static目录 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14427)
  + App-Android平台 修复 vue Array和Map的forEach、Map的for of不触发响应式收集 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15065)
  + App-Android平台 修复 vue props 使用数组定义 type 类型包含 null 时编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14252)
  + App-Android平台 修复 组件 list-view 对v-if的元素缓存异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13869)
  + App-Android平台 修复 组件 list-view 安卓下listview中sticky-header如果是动态加载的数据，无法吸顶 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14705)
  + App-Android平台 修复 组件 input 部分情况下keyboardheightchange事件不触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13334)
  + App-Android平台 修复 组件 image 配置border-radius属性后边缘锯齿严重 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15258)
  + App-Android平台 修复 4.31版本引发的 组件 video 使用view.takeSnapshot（）方法对暂停的video视频暂停页面进行截图，4.29版本使用该方法可以进行截图，更新至4.36无法进行截图，截图后图片是全黑 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14013)
  + App-Android平台 修复 组件 video 组件缺少开关弹幕的API [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14195)
  + App-Android平台 修复 组件 canvas y轴参数，文字却写成了X轴 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14980)
  + App-Android平台 更新 组件 ad 使用的腾讯优量汇SDK为4.611.1481版，适配android 15 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15262)
  + App-Android平台 修复 API setTabBar 切换tabbar页面时图标会出现短暂的闪白 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15288)
  + App-Android平台 修复 API showActionSheet uni.showActionSheet 数组超过6就报错了 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14821)
  + App-Android平台 修复 CSS text-overflow : ellipsis 在某些尺寸时会换行 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13663)
  + App-iOS平台 新增 API uni.createInnerAudioContext 和 uni-getBackgroundAudioManager 支持音频文件Cache功能 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-background-audio-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14207>
  + App-iOS平台 修复 编译器 模板内使用较新的js语法时无法在低版本iOS运行 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15088)
  + App-iOS平台 修复 4.12版本引发的 vue options 名称被编译器占用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15107)
  + App-iOS平台 修复 全局事件 Touch 事件 阻止默认行为无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14285)
  + App-iOS平台 修复 全局事件 Transition 事件 transtion 0ms 不应该触发事件回调的问题，该问题导致事件断断续续 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14911)
  + App-iOS平台 修复 组件 waterflow 子组件高度动态变化时未更新排版 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14645)
  + App-iOS平台 修复 组件 nested-scroll 当内层滚动视图内容高度不够容器高度时可能导致外层滚动视图无法滚动的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15197)
  + App-iOS平台 修复 组件 input placeholderStyle与placeholderClass优先级不对 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14742)
  + App-iOS平台 修复 组件 textarea 组件placeholder内容会超过光标，影响美观 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13973)
  + App-iOS平台 修复 组件 image 组件在循环本地图片路径图片加载成功了但会发出error事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13839)
  + App-iOS平台 修复 4.33版本引发的 API uni.chooseImage 选择相册，编辑图片时裁剪框以及图片无法拖拽的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14310)
  + App-iOS平台 修复 CSS border 相同权重的 css 表现和 web 不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14277)
  + App-iOS平台 修复 CSS border-style 设置为dotted、dashed时显示效果不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14369)
  + App-iOS平台 修复 CSS lines 设置为 1 时 text-overflow: ellipsis 无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14496)
  + App-iOS平台 修复 CSS transition-property style中设置transition-property无效，且设置后通过dom设置也无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13943)
  + App-iOS平台 修复 CSS transform translateX未生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14917)
  + App-iOS平台 修复 CSS transform-origin 效果不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14808)
  + 微信小程序平台 修复 编译器 编译为分包时部分资源引用路径不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14860)
  + 微信小程序平台 修复 编译器 cli项目编译为小程序插件时输出目录不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14869)
  + 微信小程序平台 修复 4.41版本引发的 vue skyline模式的页面无法显示内容 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15297)
* 【uts插件】
  + 【重要】App平台 新增 支持更多联合类型 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/data-type.html#union-type) <https://issues.dcloud.net.cn/pages/issues/detail?id=15131>
  + App平台 新增 支持类型保护、类型收窄 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/data-type.html#narrowing) <https://issues.dcloud.net.cn/pages/issues/detail?id=15132>
  + App平台 新增 Array支持静态方法 from、fromAsync、isArray、of [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/array.html#from-arraylike-arraylike-t) <https://issues.dcloud.net.cn/pages/issues/detail?id=6394>
  + App平台 修复 await 一个非 Promise 类型的值编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14481)
  + App平台 修复 class静态getter、setter编译错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15168)
  + App-Android平台 修复 switch case 语句中使用return代替break时，case 语句不会自动合并 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9158)
  + App-Android平台 修复 Array.push数组中添加数据，运行调试一切正常，打包后就不能渲染了 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14417)
  + App-Android平台 修复 promise异常安卓环境未带出文件位置 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15056)
  + App-Android平台 修复 promise调用链抛出reject异常安卓结果和web不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15083)
  + App-Android平台 修复 uni-app环境下 setPrivacyAgree/isPrivacyAgree 数值不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14367)
  + App-Android平台 修复 4.42版本引发的 uni-app项目 uts插件中修改的代码真机运行到Android14及以上系统设备非首次更新未生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15213)
  + App-iOS平台 新增 ArrayBuffer 支持在UTS插件编译为swift时使用 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/arraybuffer.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10911>
  + App-iOS平台 新增 js 和 swift 基于 ArrayBuffer 的内存共享 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/arraybuffer.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15260>
  + App-iOS平台 新增 uts 插件支持依赖uni_modules目录下其他uts插件 [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html#utsplugindependent) <https://issues.dcloud.net.cn/pages/issues/detail?id=15242>
* 【uni-app】
  + Web平台 App平台 调整 movable-view 的最小缩放比例为 0.1 [详情](https://ask.dcloud.net.cn/question/203268)
  + web平台 调整 编译解析 manifest.json 文件时优先读取 web 节点配置信息，而不是 H5 节点
  + web平台 修复 uni.chooseFile 如果传递了 type 没有对 mime 限制的Bug
  + 小程序平台 修复 4.41版本引发的 访问 uni 上不存在的属性也会获取到一个方法的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15216)
  + 小程序平台 修复 Vue2 模式下 style 绑定动态空对象引起编译报错的Bug [详情](https://ask.dcloud.net.cn/question/204410)
  + 微信小程序平台 调整 兼容基础库 2.20 以下的 getAppBaseInfo、getWindowInfo 和 getDeviceInfo [详情](https://ask.dcloud.net.cn/question/204348)
  + 微信小程序平台 修复 无法在游客模式下运行到微信小程序的 bug
  + 微信小程序平台 修复 vue3 编译器 编译为分包时部分资源引用路径不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14860)
  + 微信小程序平台 修复 vue3 编译器 cli项目编译为小程序插件时输出目录不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14869)
  + App-Android、App-iOS平台 修复 uni.chooseLocation 在搭配腾讯定位、腾讯地图使用时，在发行或自定义基座环境下无法获取定位信息的Bug
  + App-Harmony平台 修复 打印部分对象时崩溃的Bug
  + App-Harmony平台 修复 uni_module 内导出的 class 无法在页面中创建实例的Bug
  + App-Harmony平台 修复 uni_module 内对象字面量部分用法报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15241)
  + App-Harmony平台 修复 启动后首次 hide 事件不触发的Bug
  + App-Harmony平台 修复 canvas 绘制网络图片后使用 canvasToTempFilePath 报错画布污染的Bug
  + App-Harmony平台 修复 页面中使用 renderjs 加载本地资源时报错跨域的Bug
  + App-Harmony平台 修复 uni.getStorage 获取的对象无法赋予新字段的Bug
  + App-Harmony平台 修复 uni.getRecorderManager onStop 等监听事件重复触发的Bug [详情](https://ask.dcloud.net.cn/question/203679)
  + App-Harmony平台 修复 uni.chooseImage uni.compressImage 在所选图片名称包含中文时压缩文件路径错误的Bug
  + App-Harmony平台 修复 uni.uploadFile 在服务端返回内容大于5MB时报错的Bug
  + App-Harmony平台 调整 如果之前在 harmony-config 中自定义过 `build-profile.json5` 文件，需要在 `products` 节点中添加 `compatibleSdkVersionStage: "beta6"` 配置项 [详情](https://uniapp.dcloud.net.cn/tutorial/harmony/history.html)
  + MP-Harmony平台 调整 更新鸿蒙元服务工程模板以同步新发布的ascf基础库
* 【uniCloud】
  + 新增 un-ai minimax与讯飞部分模型支持联网搜索 [详情](https://doc.dcloud.net.cn/uniCloud/uni-ai.html)
  + 修复 3.99版本引发的uniCloud下database目录右键菜单"创建数据库扩展校验函数目录"菜单项重复的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15199)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 uni-ad 腾讯优量汇SDK 为 4.611.1481 版，适配android 15
  + iOS平台 更新 uni-AD 快手广告和快手内容联盟SDK 为 3.3.72 版本
  + iOS平台 修复 iOS 18 系统调用 plus.video.createLivePusher 引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/204418)

#### 4.45.2025010702-alpha
* 【uni-app】
  + App-Harmony平台 修复 应用首次切换到后台时 App onHide 生命周期不触发的 bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14757)
  + 小程序平台 修复 4.41版本引发的 vue3项目 部分 api 无法调用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14784)
  + 微信小程序平台 修复 vue2 项目调用 getAppBaseInfo 报错 `Cannot read property 'replace' of undefined` 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14764)
* 【uts插件】
  + App-Android平台 修复 4.41版本引发的 String.split 使用了 Kotlin 的 removeFirst/removeLast 扩展函数与 Android15 中的 Java 函数冲突 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14804)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-ad 穿山甲&GroMore 静默状态下或在后台运行可能会获取MAC地址的问题
  + iOS平台 修复 4.41版本引发的 uni-ad 某些场景下开屏广告读取缓存失败导致展示率降低的Bug

#### 4.43.2024122419-alpha
* 【uni-app】
  + App-HarmonyOS平台 修复 部分情况下键盘收回后视图显示异常的 Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14557)
  + App-HarmonyOS平台 修复 新建uni-app项目运行到模拟器报错的 Bug
  + 微信小程序平台 修复 ad 组件在配置为全屏广告类型后因高度不正确导致显示不全的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14589)
* 【uni-app x】
  + 微信小程序平台 修复 4.42版本引发的 vue 无 id 属性的组件根节点 ref 无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14513)

#### 4.42.2024121808-alpha
* 【uni-app】
  + 小程序平台 优化 启用 mergeVirtualHostAttributes 配置支持合并 id 属性 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html)
  + App-Harmony平台 修复 部分情况下 TabBar 图标配置不生效的 bug [详情](https://ask.dcloud.net.cn/question/202822)
* 【uni-app x】
  + Web平台 修复 组件 checkbox 影响子元素 flex 布局的 css 不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14235)
  + 微信小程序平台 修复 组件 radio、checkbox 影响子元素 flex 布局的 css 不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14234)
  + 微信小程序平台 修复 DOM API uni.getElementById 无法获取自定义组件中由组件外层设置 id 的根节点 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14304)
  + App-Android平台 修复 pages.json androidThreeButtonNavigationTranslucent属性横屏不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14133)
  + App-Android平台 修复 pages.json androidThreeButtonNavigationTranslucent属性在 dialogPage 页面不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14134)
  + App-Android平台 修复 组件 waterflow 最后一个flow-item自动显示一整行 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14244)
  + App-Android平台 修复 API uni.getUniverifyManager 更新个验SDK解决合规风险问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14276)
  + App-Android平台 修复 4.41版本引发的 CSS box-shadow rgb/rgba颜色显示错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14199)
* 【uts插件】
  + Web平台、App-iOS平台、微信小程序平台 新增 支持import type的用法 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/type-compatibility.html#import-type) <https://issues.dcloud.net.cn/pages/issues/detail?id=12941>
  + Web平台、微信小程序平台 修复 兼容模式组件查找错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14305)
  + App-Android平台 修复 4.41版本引发的 模板字符串或字符串相加包含可为空的any或number类型时部分情况报空指针 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14185)
  + App-Android平台 修复 4.41版本引发的 使用 import type 时可能编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14241)
  + App-Android平台 修复 uni-app项目 uts插件中修改的代码真机运行到Android14及以上系统设备未生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14275)
* 【uniCloud】
  + 修复 vue2项目使用迁移后的腾讯云服务空间后调用云函数报错`access token disabled for ANONYMOUS login`的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14287)

#### 4.41.2024121203-alpha
* 【uni-app】
  + Web平台 修复 4.25版本引发的 vue3项目 onPageNotFound 生命周期中使用路由 API 失效的Bug [详情](https://ask.dcloud.net.cn/question/201202)
  + 小程序平台 新增 uni.rpx2px [详情](https://uniapp.dcloud.net.cn/api/ui/font.html#rpx2px)
  + 小程序平台 优化 启用 mergeVirtualHostAttributes 配置支持合并 v-show 指令 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html)
  + 微信小程序平台 新增 uni-ad 支持流量主代运营及比价，进一步提高收益 [详情](https://uniapp.dcloud.net.cn/uni-ad/ad-weixin-agency.html)
  + 微信小程序平台 修复 微信不推荐使用 getSystemInfo 引发的警告
  + 微信小程序平台 修复 组件告警找不到对应 json 文件的Bug [详情](https://ask.dcloud.net.cn/question/202415)
  + MP-Harmony平台 修复 Vue3 setup 中无法获取 provider/inject 值的Bug
  + App-Harmony平台 修复 传递数组的 proxy 到原生层时会被原生层当做对象处理的 Bug
  + App-Harmony平台 修复 setTabBarItem 不生效的 Bug [详情](https://ask.dcloud.net.cn/question/201288)
  + App-Harmony平台 修复 web-view 组件报错`The type of "permissionList" must be Array<string>`的 Bug
  + App-Harmony平台 修复 CanvasContext.measureText 不生效的 Bug
  + App-Harmony平台 修复 chooseVideo 在选视频界面可以勾选多个视频的 Bug
  + App-Harmony平台 修复 connectSocket 传入 header 会在控制台告警的 Bug
  + App-Harmony平台 修复 onLocationChange 部分情况下不触发的 Bug
  + App-Harmony平台 调整 调用 startSoterAuthentication 时 challenge 属性必填
* 【uni-app x】
  + 【重要】uni-app-x 项目支持发布到微信小程序 [详情](https://doc.dcloud.net.cn/uni-app-x/mp/)
  + 新增 DOM API UniElement getBoundingClientRectAsync 异步获取元素位置信息 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unielement.html#getBoundingClientRectAsync) <https://issues.dcloud.net.cn/pages/issues/detail?id=12092>
  + 新增 API uni.openDialogPage triggerParentHide 参数控制是否触发父页面 onHide 生命周期 [文档](https://doc.dcloud.net.cn/uni-app-x/api/dialog-page.html#opendialogpage) <https://issues.dcloud.net.cn/pages/issues/detail?id=13636>
  + 新增 API uni.chooseLocation 打开时触发当前页面 onHide 生命周期，关闭时触发当前页面 onShow 生命周期 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13836>
  + 修复 编译器 返回值类型推断不支持函数类型 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13046)
  + Web平台、App-iOS平台 修复 dialogPage 实例上 getElementById 等部分方法不支持的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14047)
  + Web平台 修复 4.02版本引发的 组件 全局事件 部分组件触发的事件中 target 未指向内置组件根节点 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12910)
  + Web平台 修复 API uni.getStorage 获取 UTSJSONObject 数组时未能取到正确结果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14039)
  + App平台 新增 组件 waterflow 瀑布流 [文档](https://doc.dcloud.net.cn/uni-app-x/component/waterflow.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11016>
  + App平台 新增 组件 input placeholderStyle支持font-family、font-style、text-align [文档](https://doc.dcloud.net.cn/uni-app-x/component/input.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13052>
  + App平台 新增 API uni.getBackgroundAudioManager 背景音频播放 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-background-audio-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12144>
  + App平台 新增 API uni.openLocation 打开当前位置 [文档](https://doc.dcloud.net.cn/uni-app-x/api/open-location.html)
  + App平台 新增 API uni.getUniverifyManager 支持自定义一键登录页面 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11020>
  + App平台 新增 API uni.getUniverifyManager 调整参数类名以及返回值类名 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13772>
  + App平台 新增 API uni.closeDialogPage 调整 animationType 默认值为 auto [文档](https://doc.dcloud.net.cn/uni-app-x/api/dialog-page.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13942>
  + App平台 修复 组件 canvas 动画过程中圆弧闪动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13487)
  + App平台 修复 CSS background-color 十六进制颜色语法与web不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13371)
  + App-Android平台 新增 pages.json 支持 androidThreeButtonNavigationTranslucent 配置页面内容可渲染到系统导航栏的虚拟按键区域 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11021>
  + App-Android平台 新增 API uni.chooseImage uni.saveImageToPhotosAlbum uni.getImageInfo uni.compressImage uni.chooseVideo uni.saveVideoToPhotosAlbum uni.getVideoInfo 支持内容URI地址 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-image.html)
  + App-Android平台 修复 vue 使用defineModel嵌套绑定v-model编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11505)
  + App-Android平台 修复 vue ref变量类型推导优化 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12042)
  + App-Android平台 修复 组件 list-view 自定义刷新样式显示异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13511)
  + App-Android平台 修复 组件 textarea 部分情况下input事件不触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9081)
  + App-Android平台 修复 组件 canvas new Image没有触发onload事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12336)
  + App-Android平台 修复 4.33版本引发的 API getCurrentPages 部分场景 getPageStyle 返回的 navigationStyle 值域不准 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13133)
  + App-Android平台 修复 API dialogPage animationType设置zoom-fade-out不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12655)
  + App-Android平台 修复 API dialogPage navigationBarTextStyle属性不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13281)
  + App-Android平台 修复 API showToast 被 dialogPage 遮挡 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12993)
  + App-Android平台 修复 API uni.request 指定泛型为string，接口返回404时解析失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13054)
  + App-Android平台 修复 云对象返回的errSubject无法在客户端获取 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13228)
  + App-Android平台 修复 CSS font-family 自定义字体、内置字体设置font-style、font-weight属性不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13100)
  + App-iOS平台 新增 API uni.createInnerAudioContext 支持音频播放 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-inner-audio-context.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12829>
  + App-iOS平台 新增 API uni.chooseLocation 支持 uts 插件环境调用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13780>
  + App-iOS平台 修复 组件 scroll-view 内容高度小于容器高度时无法触发自定义下拉刷新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13747)
  + App-iOS平台 修复 组件 input iOS 输入框长按粘贴与touch事件冲突，导致input失焦，键盘被收起 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12621)
  + App-iOS平台 修复 组件 slider 点击时事件触发错误的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13783)
  + App-iOS平台 修复 组件 canvas Image支持width、height属性 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12687)
  + App-iOS平台 修复 组件 canvas 通过style.setProperty方法动态修改尺寸导致渲染异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12904)
  + App-iOS平台 修复 组件 canvas 反复退出进入应用偶发闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13093)
  + App-iOS平台 修复 API uni.$emit 不支持参数为UTSJSONObject [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12615)
  + App-iOS平台 修复 API navigator iOS页面边界不应该带有阴影效果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11585)
  + App-iOS平台 修复 API dialogPage 关闭后，状态栏颜色无法更新为当前页面的设置 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13765)
  + App-iOS平台 修复 API uni.createSelectorQuery 在视图滚动期间 callback 回调不及时 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13368)
  + App-iOS平台 修复 API uni.getWindowInfo 在 iPhone18 设备获取的屏幕宽、高可能不正确
  + App-iOS平台 修复 CSS transform 修改transform值页面闪动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12850)
  + App-iOS平台 更新 云端打包环境 XCode 为 16.1 版、iOS SDK 为 18.1 版
* 【uts插件】
  + 新增 支持迭代协议 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/iterable.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=6511>
  + Web平台、App-iOS平台 新增 编译器 编译 uts 到 js 时支持 import type 的用法 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/type-compatibility.html#import-type)
  + App平台 新增 UTSJSONObject 支持点号表示法访问属性。注意返回值类型为any [文档](https://doc.dcloud.net.cn/uni-app-x/uts/data-type.html#_1-%E6%93%8D%E4%BD%9C%E7%AC%A6) <https://issues.dcloud.net.cn/pages/issues/detail?id=11072>
  + App平台 修复 vue2项目下导出的class实例被vue响应式后调用方法报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13685&ask_id=202006)
  + App-Android平台 新增 优化number类型的实现 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/number.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7119>
  + App-Android平台 新增 JSON.Parse 新增ignoreError参数，用于隐藏解析报错 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/json.html#parse) <https://issues.dcloud.net.cn/pages/issues/detail?id=13219>
  + App-Android平台 修复 JSON.parse<string> 解析失败时返回数据应该是输入参数 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13274)
  + App-Android平台 修复 4.25版本引发的 UTSJSONObject 包含 自定义type 类型数据时调用 toJSONObject 序列化可能异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13110)
  + App-Android平台 修复 数组every、some、filter、find、findIndex返回值类型推断不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12985)
  + App-Android平台 修复 split 函数返回结果与web不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10884)
  + App-Android平台 修复 java混编模式下，不能使用 console.log [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11532)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 uni-AD模块 泛连广告SDK为 2.8.1 版
  + Android平台 更新 一键登录使用的个验SDK为 3.2.0.0 版，修复安全检测报`receiver导出`风险问题 [详情](https://ask.dcloud.net.cn/question/202586)
  + Android平台 更新 云端打包环境 compileSdk 为 35、buildToolsVersion 为 35.0.0 、 Gradle 为 8.11.1 版、Android Gradle 插件为 8.7.3 版 [文档](https://uniapp.dcloud.net.cn/tutorial/app-env.html#android%E5%B9%B3%E5%8F%B0%E4%BA%91%E7%AB%AF%E6%89%93%E5%8C%85%E7%8E%AF%E5%A2%83)
  + Android平台 修复 配置 targetSdkVersion 为 35 后在安卓15设备页面底部内容可能会被系统按键导航栏盖住的Bug [详情](https://ask.dcloud.net.cn/question/202585)
  + iOS平台 更新 云端打包环境 XCode 为 16.1 版、iOS SDK 为 18.1 版
* 【uniCloud】
  + 修复 12月份之后新创建的腾讯云服务空间使用unicloud客户端SDK请求云函数时报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14037)
  + 修复 支付宝云数据库不支持arrayElemAt运算符的Bug [详情](https://ask.dcloud.net.cn/question/200275)
  + 修复 运行鸿蒙元服务/应用时，无法切换本地或者云端云函数运行的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14038)

#### 4.36.2024112612-alpha
* 【uni-app x】
  + App平台 修复 API uni.createCanvasContextAsync 在生命周期 onLoad/onMount 中无法获取width/height [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13212)
  + App-Android平台 修复 4.35版本引发的 vue keepAlive 组件切换时，触发了 update 生命周期的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13261)

#### 4.35.2024112402-alpha
* 【uni-app】
  + MP-Harmony平台 新增 对分包模式的支持
  + MP-Harmony平台 修复 windows平台用户名过长时，鸿蒙工具链报错导致uni-app编译失败的问题
  + App-Harmony平台 修复 4.34版本引发的 内置鸿蒙项目模板丢失了部分4.33版本的修复及特性的Bug
* 【uni-app x】
  + 优化 API uni.chooseLocation 新增请求参数payload，原样透传给uni-map-co，可用于用户鉴权 [详情](https://doc.dcloud.net.cn/uni-app-x/api/choose-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13108>

#### 4.34.2024112020-alpha
* 【uni-app】
  + 【重要】uni-app 支持发布为鸿蒙元服务 [详情](https://uniapp.dcloud.net.cn/tutorial/mp-harmony/intro.html)
* 【uni-app x】
  + 修复 API uni.chooseLocation input输入框点击会闪、POI显示不准确等问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12940)
  + App-Android平台 修复 组件 video 云打包后应用static目录下视频无法播放 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12871)
  + App-Android平台 修复 API uni.downloadFile 部分情况下可能引起应用崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12869)
  + App-Android平台 修复 API uni.saveVideoToPhotosAlbum 云打包后保存应用static目录下的视频文件失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12867)
  + App-Android平台 修复 API uni.createInnerAudioContext 播放倍速仅支持设置平台专有Double数据类型 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12862)
  + App-Android平台 修复 API uni.shareWithSystem shareWithSystem 云打包后应用static目录下文件无法分享 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12851)
* 【uts插件】
  + App平台 修复 4.19版本引发的 uts加密插件包含easycom组件时，云打包报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12775)

#### 4.33.2024111702-alpha
* 【uni-app】
  + App-HarmonyOS平台 新增 支持 uni.upx2px
  + App-HarmonyOS平台 修复 用户代码编译产物过大导致应用崩溃的 Bug
  + App-HarmonyOS平台 修复 cleatInterval 无效的 Bug
  + App-HarmonyOS平台 修复 页面内表单元素的 auto-focus 无法拉起键盘的 Bug
  + App-HarmonyOS平台 修复 websocket 传 ArrayBuffer 作为 data 无效的 Bug [详情](https://ask.dcloud.net.cn/question/200725)
  + App-HarmonyOS平台 修复 uni.previewImage 在图片放大后无法移动的 Bug
  + App-HarmonyOS平台 修复 调用 web-view 组件 evalJs 等方法不生效的Bug
  + App-HarmonyOS平台 修复 web-view 组件无法加载沙盒中 html 文件的 Bug
  + App-HarmonyOS平台 修复 canvas 组件绘制本地图片时因画布污染导致无法调用 canvasToTempFilePath 的 Bug [详情](https://ask.dcloud.net.cn/question/201151)
  + App-HarmonyOS平台 调整 调用 uni.getRecorderManager().start() 可不传参数
  + App-HarmonyOS平台 调整 WebviewContext evalJs 方法重命名为 evalJS，旧方法暂时保留但不推荐使用
  + App-HarmonyOS平台 调整 web-view 组件支持加载 https、http 混合内容
  + App-HarmonyOS平台 调整 Picker 组件 mode="multiSelector" 时在宽屏上的显示效果
* 【uni-app x】
  + 新增 uni统计功能 [文档](https://uniapp.dcloud.net.cn/uni-stat-uniappx) <https://issues.dcloud.net.cn/pages/issues/detail?id=12350>
  + Web平台 修复 CSS rpx 通过style.setProperty设置rpx值无法响应屏幕宽度变化 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11256)
  + Web平台 修复 DOM API UniElement 在属性值为空字符串时错误的返回了null [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12306)
  + Web平台 修复 4.31版本引发的 vue ssr模式运行项目时控制台报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12304)
  + Web平台 修复 4.23版本引发的 运行调试 uni-app-x项目以SSR模式运行报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12179)
  + App平台 新增 app.uvue 原生捕获异常触发应用生命周期onError [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#onerror) <https://issues.dcloud.net.cn/pages/issues/detail?id=7116>
  + App平台 新增 API uni.chooseLocation 打开地图选择位置 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12430>
  + App平台 新增 API uni.shareWithSystem 调用系统分享 [文档](http://doc.dcloud.net.cn/uni-app-x/api/share-with-system.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10687>
  + App平台 新增 API uni.createInnerAudioContext 支持音频播放 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-inner-audio-context.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10686>
  + App平台 新增 API uni.chooseImage 支持 pageOrientation 参数适配横竖屏 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10683>
  + App平台 新增 API uni.chooseVideo 支持 pageOrientation 参数适配横竖屏 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-video.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12342>
  + App平台 新增 CSS 支持内置 uni-icon 字体图标 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/at-rules.html#uniicon) <https://issues.dcloud.net.cn/pages/issues/detail?id=11994>
  + App平台 修复 vue 设置样式 display: flex 时，v-show="false" 首次渲染会显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11473)
  + App平台 修复 API getCurrentPages getPageStyle 返回页面样式信息不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10274)
  + App平台 修复 API uni.loadFontFace 不支持 base64 格式数据URL [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12105)
  + App平台 修复 pages.json tabbar不支持字体图标在theme.json配置颜色 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11289)
  + App平台 修复 组件 canvas source-atop与web效果不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11284)
  + App-Android平台 新增 API uni.chooseImage 支持 albumMode 参数配置使用系统相册选择图片 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12344>
  + App-Android平台 新增 API uni.chooseVideo 支持 albumMode 参数配置使用系统相册选择视频 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-video.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10685>
  + App-Android平台 新增 发行 云端打包支持 enableResourceOptimizations 配置关闭原生res资源文件名称混淆 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest.html#enableresourceoptimizations) <https://issues.dcloud.net.cn/pages/issues/detail?id=12424>
  + App-Android平台 修复 vue 使用h()函数时无法使用具名插槽 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12388)
  + App-Android平台 修复 4.31版本引发的 vue render 函数渲染自定义组件，修改数据无法触发更新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11752)
  + App-Android平台 修复 vue v-bind与其他绑定混合使用编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12488)
  + App-Android平台 修复 4.31版本引发的 pages.json hideStatusBar 属性在 dialogPage 页面失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12321)
  + App-Android平台 修复 组件 list-item 中的子元素在某些场景 boder 和 background-color 样式不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12341)
  + App-Android平台 修复 4.02版本引发的 组件 rich-text 中的 a 标签某些场景下可能出现点击不触发 itemclick 事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11051)
  + App-Android平台 修复 4.31版本引发的 组件 input 在 dialogPage 页面无法取消焦点 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12182)
  + App-Android平台 修复 组件 map 设置 show-location 为 true 时偶发显示定位精度圆形遮罩 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11575)
  + App-Android平台 修复 pages.json 横屏参数导致启动页面的时候会有一个切换的动作 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11147)
  + App-Android平台 修复 API uni.redirectTo 某些场景窗口动画失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11158)
  + App-Android平台 修复 API push 某些情况点击离线消息不能触发 `click` 事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11268)
  + App-Android平台 修复 API push 模块使用的 gson 库可能与uts插件的依赖库冲突 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11861)
  + App-Android平台 优化 API uni.$emit 支持不传参数或传多个参数 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11588)
  + App-iOS平台 新增 pages.json 支持 hideBottomNavigationIndicator 属性 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pagesoptionspage-style) <https://issues.dcloud.net.cn/pages/issues/detail?id=10478>
  + App-iOS平台 新增 pages.json 支持 hideStatusBar 属性 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-globalstyle) <https://issues.dcloud.net.cn/pages/issues/detail?id=10554>
  + App-iOS平台 新增 组件 video 支持子组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/video.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10477>
  + App-iOS平台 新增 API uni.exit 支持在原生SDK环境中退出应用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/exit.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11654>
  + App-iOS平台 修复 组件 rich-text 点击不会触发父组件 click 事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6986)
  + App-iOS平台 修复 组件 rich-text 设置固定高度时内容不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10999)
  + App-iOS平台 修复 组件 slider 设置的 max 不能整除 step 时滑动到最右侧返回值可能会大于 max [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12503)
  + App-iOS平台 修复 组件 canvas 在自定义组件中处理高清屏逻辑不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11696)
  + App-iOS平台 修复 API uni.request 返回数据类型为不为UTSJSONObject [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11697)
  + App-iOS平台 修复 API uni.getWindowInfo 返回 safeArea 中的 bottom、height 属性值不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10935)
  + App-iOS平台 修复 API uni.addInterceptor 【ios端】uni.addInterceptor拦截'switchTab'无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10147)
  + App-iOS平台 修复 4.18版本引发的 DOM API UniResizeObserver 监视元素的大小变化可能导致内存泄露 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11451)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 新增 云端打包支持 enableResourceOptimizations 配置关闭原生res资源文件名称混淆 [文档](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#enableresourceoptimizations)
  + Android平台 修复 云端打包证书密码中包含特殊字符时可能提示 `Keystore was tampered with, or password was incorrect` 错误的Bug [详情](https://ask.dcloud.net.cn/question/201240)
  + Android平台 修复 UniPush 在部分高版本设备点击通知无法唤起应用的Bug [详情](https://ask.dcloud.net.cn/question/200520)
  + App-iOS平台 修复 视频选择开启压缩后在iphone16设备上无法触发回调的Bug [详情](https://ask.dcloud.net.cn/question/199797)

#### 4.32.2024110103-alpha
* 【uni-app】
  + App平台、Web平台 修复 4.31版本引发的 rpx 渲染异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11253)
  + App平台 修复 4.31版本引发的 vue 和 nvue 页面混合项目路由跳转异常问题 [详情](https://ask.dcloud.net.cn/question/200528)
  + App-Android平台 修复 4.31版本引发的 调用 uni.previewImage 闪退的Bug [详情](https://ask.dcloud.net.cn/question/200452)
  + App-HarmonyOS平台 修复 jsvm 和 napi 数据转换时 null 丢失的Bug
  + App-HarmonyOS平台 修复 getStorageSync 获取储存的数组时将数组转为了对象的Bug [详情](https://ask.dcloud.net.cn/question/200673)
  + App-HarmonyOS平台 修复 网络请求返回非法 cookie 导致应用崩溃的Bug
  + App-HarmonyOS平台 修复 网络请求重定向时返回的 cookie 被设置到错误的 url 的Bug
  + App-HarmonyOS平台 修复 网络请求 api 访问 http 链接返回的 cookie 无法保存的Bug [详情](https://ask.dcloud.net.cn/question/200536)
  + App-HarmonyOS平台 修复 网络请求 api 在 url 非法时未进入任何回调的Bug
  + App-HarmonyOS平台 修复 web-view 组件内请求摄像头、麦克风权限不生效的Bug [详情](https://ask.dcloud.net.cn/question/200562)
  + App-HarmonyOS平台 调整 web-view 组件内请求定位权限时不再额外弹窗
  + App-HarmonyOS平台 调整 web-view 组件内请求定位权限时自动申请 ohos.permission.LOCATION 权限
  + App-HarmonyOS平台 调整 构造 UTSJSONObject 时不再递归所有属性的值
* 【uni-app x】
  + Web平台 修复 4.31版本引发的 rpx 渲染异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11253)
  + App-Android平台 修复 4.31版本引发的 编译器 pages.json以及外链引入的css/scss/less文件修改后热更新不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11247)
  + App-Android平台 修复 4.31版本引发的 pages.json 隐藏tabbar后可能渲染异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11269)
  + App-Android平台 修复 组件 触发 @click 事件没有音效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11066)
  + App-Android平台 修复 4.31版本引发的 CSS border 某些情况下border不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11225)
  + App-Android平台 修复 4.31版本引发的 CSS box-shadow 阴影渲染异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11447)
  + App-iOS平台 修复 组件 canvas 中使用的 image 更新 src 时可能触发图片重复加载导致绘制异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11136)
  + App-iOS平台 修复 API dialogPage 可能无法遮挡原生 tabbar [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11129)
  + App-iOS平台 修复 API uni.getDeviceInfo 返回的 deviceId 值异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11436)
* 【uts】
  + App-Android平台 修复 4.31版本引发的 number除法可能会触发 java.lang.ArithmeticException: divide by zero [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11331)
  + App-Android平台 修复 4.31版本引发的 Math.abs 可能不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11332)
* 【uniCloud】
  + 修复 新建云开发环境后，部分情况下uniCloud文件夹显示顺序不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11421)

#### 4.31.2024102414-alpha
* 【uni-app】
  + 修复 4.25版本引发的 vue3项目 static 目录条件编译失效的Bug [详情](https://ask.dcloud.net.cn/question/199019) [详情](https://ask.dcloud.net.cn/question/199184)
  + 修复 4.25版本引发的 vue3项目 三方依赖使用 require 加载 json 文件编译报错的Bug [详情](https://ask.dcloud.net.cn/question/199088) [详情](https://ask.dcloud.net.cn/question/199002) [详情](https://ask.dcloud.net.cn/question/198500)
  + Web平台 修复 input 设置maxLength 粘贴文本时不触发change事件的Bug [详情](https://ask.dcloud.net.cn/question/196650)
  + 小程序平台 修复 vue3实例$children内的子组件没有动态删除的Bug [详情](https://github.com/dcloudio/uni-app/issues/5143)
  + 微信小程序平台 修复 补充store-home、store-product自定义节点 [详情](https://github.com/dcloudio/uni-app/issues/5135)
  + 微信小程序平台 修复 混合发布时运行生命周期报错的Bug [详情](https://ask.dcloud.net.cn/question/188049)
  + 小红书小程序平台 修复 分享微信群无法自定义标题和图片的Bug [详情](https://ask.dcloud.net.cn/question/198199)
  + App平台 修复 swiper-item个数动态减少后渲染和交互异常的Bug [详情](https://ask.dcloud.net.cn/question/175252)
  + App平台 修复 page-meta设置font-root-size不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/5088)
  + App-Android/iOS平台 新增 API uni.getLocation 支持腾讯定位 [详情](https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#tencent)
  + App-Android/iOS平台 新增 地图组件、chooseLocation、openLocation 支持使用腾讯地图 [详情](https://uniapp.dcloud.net.cn/component/map.html)
  + App-Android/iOS平台 修复 4.25版本引发的 vue3项目 页面组件setup情况下子组件无法通过$root.$scope获取getAppWebview的Bug [详情](https://ask.dcloud.net.cn/question/199111)
  + App-Android平台 修复 targetsdkVersion 设置大于等于33 webview 深色模式不生效的Bug [详情](https://ask.dcloud.net.cn/question/198181)
  + App-Android平台 修复 部分横屏设备上二级页面显示可能不全的Bug [详情](https://ask.dcloud.net.cn/question/166536)
  + App-HarmonyOS平台 新增 支持uni小程序SDK [详情](https://nativesupport.dcloud.net.cn/)
  + App-HarmonyOS平台 新增 支持 renderjs
  + App-HarmonyOS平台 新增 tabBar 支持 midButton
  + App-HarmonyOS平台 新增 发行制作 wgt 包时可勾选编译 sourcemap [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html#create-sourcemap)
  + App-HarmonyOS平台 新增 web-view 组件支持位置大小配置
  + App-HarmonyOS平台 新增 web-view 组件支持下载能力
  + App-HarmonyOS平台 新增 web-view 组件支持点击 tel 协议的 url
  + App-HarmonyOS平台 新增 picker 组件 fields 属性支持 month 和 year
  + App-HarmonyOS平台 新增 uni.getImageInfo 支持网络图片
  + App-HarmonyOS平台 新增 支持 uni.getAppAuthorizeSetting Api [详情](https://uniapp.dcloud.net.cn/api/system/getappauthorizesetting.html#getappauthorizesetting)
  + App-HarmonyOS平台 新增 支持 uni.getSystemSetting Api [详情](https://uniapp.dcloud.net.cn/api/system/getsystemsetting.html)
  + App-HarmonyOS平台 新增 支持 uni.compressImage Api [详情](https://uniapp.dcloud.net.cn/api/media/image.html#compressimage)
  + App-HarmonyOS平台 新增 支持 uni.shareWithSystem Api [详情](https://uniapp.dcloud.net.cn/api/plugins/share.html#sharewithsystem)
  + App-HarmonyOS平台 新增 网络请求相关接口持久化保存 cookie，并且发送请求时会自动携带
  + App-HarmonyOS平台 新增 uni.login 支持华为登录 [详情](https://uniapp.dcloud.net.cn/api/plugins/login.html#login)
  + App-HarmonyOS平台 新增 uni.setBackgroundColor [详情](https://uniapp.dcloud.net.cn/api/ui/bgcolor.html#setbackgroundcolor)
  + App-HarmonyOS平台 新增 uni.setBackgroundTextStyle [详情](https://uniapp.dcloud.net.cn/api/ui/bgcolor.html#setbackgroundtextstyle)
  + App-HarmonyOS平台 新增 uni.showNavigationBarLoading [详情](https://uniapp.dcloud.net.cn/api/ui/navigationbar.html#shownavigationbarloading)
  + App-HarmonyOS平台 新增 uni.hideNavigationBarLoading [详情](https://uniapp.dcloud.net.cn/api/ui/navigationbar.html#hidenavigationbarloading)
  + App-HarmonyOS平台 新增 uni.startLocationUpdateBackground [详情](https://uniapp.dcloud.net.cn/api/location/location-change.html#startlocationupdatebackground)
  + App-HarmonyOS平台 新增 uni.offWindowResize [详情](https://uniapp.dcloud.net.cn/api/ui/window.html#offwindowresize)
  + App-HarmonyOS平台 新增 uni.createMediaQueryObserver [详情](https://uniapp.dcloud.net.cn/api/ui/media-query-observer.html#createmediaqueryobserver)
  + App-HarmonyOS平台 新增 uni.getPushClientId、uni.onPushMessag、uni.offPushMessag、uni.createPushMessag、uni.setAppBadgeNumber Api
  + App-HarmonyOS平台 调整 鸿蒙项目运行时仅保留基础的网络权限，其他权限需要在`harmony-configs`内自行配置
  + App-HarmonyOS平台 调整 腾讯地图、支付宝支付功能需要在`manifest.json -> 鸿蒙配置`中重新配置
  + App-HarmonyOS平台 调整 逻辑层从 ArkTS 环境加载改为使用 JSVM 加载 [详情](https://uniapp.dcloud.net.cn/tutorial/harmony/history.html)
  + App-HarmonyOS平台 调整 统一 userAgent 配置，web-view组件、网络请求遵循同一个 userAgent
  + App-HarmonyOS平台 调整 picker 组件禁用循环滚动
  + App-HarmonyOS平台 调整 web-view 组件允许加载 https 证书过期、错误的资源
  + App-HarmonyOS平台 调整 uni.navigateBack 不再判断页面有没有 webview 组件，直接返回。
  + App-HarmonyOS平台 调整 uni.saveImageToPhotosAlbum、uni.saveVideoToPhotosAlbum 不再申请权限
  + App-HarmonyOS平台 调整 uni.downloadFile、uni.saveFile 接口返回的 tempFilePath 不再添加 file 协议
  + App-HarmonyOS平台 修复 部分场景下拉刷新引发应用崩溃的Bug
  + App-HarmonyOS平台 修复 部分情况下快速返回页面应用报错的Bug
  + App-HarmonyOS平台 修复 部分情况下 tabBar 页面导航栏文字重叠的Bug
  + App-HarmonyOS平台 修复 组件 dataset 属性层级较深时，无法在事件内的 dataset 中获取的Bug
  + App-HarmonyOS平台 修复 web-view 组件部分操作导致崩溃的Bug
  + App-HarmonyOS平台 修复 web-view 组件在自定义组件内无法获取 context 的Bug
  + App-HarmonyOS平台 修复 web-view 组件接收消息格式错误的 Bug
  + App-HarmonyOS平台 修复 多个页面包含 web-view 组件时，webviewContext 方法混乱的bug
  + App-HarmonyOS平台 修复 picker 组件 mode="multiSelector" 数据变更时不联动的Bug [详情](https://ask.dcloud.net.cn/question/198236)
  + App-HarmonyOS平台 修复 picker 组件 mode="time" 时打开不显示 value 显示当前时间的Bug
  + App-HarmonyOS平台 修复 picker 组件 mode="date" 时选择日期后再打开日期不改变的Bug
  + App-HarmonyOS平台 修复 uni 接口 fail 回调内无法获取 errMsg 属性的Bug
  + App-HarmonyOS平台 修复 uni.getImageInfo 获取某些图片的信息时报错的Bug
  + App-HarmonyOS平台 修复 uni.scanCode 返回的 code 类型不正确的Bug
  + App-HarmonyOS平台 修复 uni.openLocation 进入导航页面后点击页面自带的返回按钮白屏的Bug
  + App-HarmonyOS平台 修复 uni.uploadFile 仅传递 files 参数不传 filePath 参数时报错的Bug
  + App-HarmonyOS平台 修复 uni.canvasToTempFilePath 调用不触发回调的 Bug [详情](https://ask.dcloud.net.cn/question/199849)
  + App-HarmonyOS平台 修复 uni.compressImage 调用报错的Bug
  + App-HarmonyOS平台 修复 uni.request 设置的 cookie 对 webview 内部的资源请求无效的Bug
  + App-HarmonyOS平台 修复 网络请求返回多个 cookie 时 uni.request 返回的 cookies 字段格式错误的Bug
  + App-HarmonyOS平台 修复 使用 uni.addPhoneContact 添加后查看联系人有大片空白的Bug
  + App-HarmonyOS平台 修复 uni.showLoading 点击 mask 自动关闭的Bug
  + App-HarmonyOS平台 修复 uni.chooseImage 接口 sizeType 不生效的Bug
  + App-HarmonyOS平台 修复 uni.chooseImage 未勾选原图时未压缩图片的Bug
  + App-HarmonyOS平台 修复 uni.getLocation 接口部分情况下无法返回正确位置信息的Bug
  + App-HarmonyOS平台 修复 MapContext 上的方法回调不触发的Bug
  + App-HarmonyOS平台 修复 支付宝支付成功未触发成功回调的Bug
* 【uni-app x】
  + 新增 vue 页面实例.options 及 onLoad 参数调整为 UTSJSONObject 类型 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=9323>
  + 新增 API `uni.openDialogPage`、`uni.closeDialogPage` 打开和关闭模态弹框页面 [文档](https://doc.dcloud.net.cn/uni-app-x/api/dialog-page.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3870>
  + 调整 API getApp 返回值类型为 UniApp，新增若干方法，并支持在uts插件中使用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-app.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3847>
  + 调整 API getCurrentPages 返回值类型为 UniPage数组，新增UniPage对象若干方法，并支持在uts插件中使用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3847>
  + 新增 API eventBus 支持通过 id 移除自定义事件监听器，并支持在uts插件中使用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/event-bus.html#on) <https://issues.dcloud.net.cn/pages/issues/detail?id=9068>
  + Web平台、App-iOS平台 修复 vue reactive参数传一个对象字面量时返回的结果并不是UTSJSONObject [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9175)
  + Web平台、App-iOS平台 修复 instanceof UniCloudError 的用法报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7848)
  + Web平台 修复 vue 使用defineModel编译告警 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10257)
  + App平台 新增 编译器 优化uts类型推导 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/#%E7%B1%BB%E5%9E%8B%E8%87%AA%E5%8A%A8%E6%8E%A8%E5%AF%BC) <https://issues.dcloud.net.cn/pages/issues/detail?id=9967>
  + App平台 新增 组件 native-view组件和UniNativeViewElement，支持vue规范开发原生组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/native-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3846>
  + App平台 新增 `标准模式`组件，即通过vue规范和native-view来开发原生组件 [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-component-vue.html)
  + App平台 新增 组件 button 支持open-type=agreePrivacyAuthorization 用于同意隐私政策 [文档](https://doc.dcloud.net.cn/uni-app-x/component/button.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=8245>
  + App平台 新增 组件 map 地图 [文档](https://doc.dcloud.net.cn/uni-app-x/component/map.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3849>
  + App平台 新增 uni-ad Android平台国内广告新增华为、倍孜、聚力阅盟、泛连渠道；App平台国内广告新增章鱼渠道 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad) <https://issues.dcloud.net.cn/pages/issues/detail?id=9102>
  + App平台 新增 组件 ad 信息流广告 [文档](https://doc.dcloud.net.cn/uni-app-x/component/ad.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=9414>
  + App平台 新增 API 隐私信息授权相关API [文档](https://doc.dcloud.net.cn/uni-app-x/api/privacy.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7900>
  + App平台 新增 API uni.getAppBaseInfo 支持渠道包的channel渠道信息 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-app-base-info.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=8190>
  + App平台 新增 API uni.createInterstitialAd 插屏广告 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-interstitial-ad.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7113>
  + App平台 新增 API uni.requestPayment 支付失败错误码 700607 和 700608 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html#irequestpaymentfail-values) <https://issues.dcloud.net.cn/pages/issues/detail?id=8366>
  + App平台 优化 provider注册机制 [文档](https://doc.dcloud.net.cn/uni-app-x/api/provider.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7394>
  + App平台 修复 编译器 在 windows 系统上运行同步文件可能不正常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10570)
  + App平台 修复 4.19版本引发的 pages.json 下拉刷新loading的样式设置backgroundTextStyle属性无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2537)
  + App平台 修复 组件 list-view 组件的@scroll事件参数deltaY数据异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9121)
  + App平台 修复 3.99版本引发的 组件 picker-view，给picker-view动态设置indicator-style、mask-top-style、mask-bottom-style无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6620)
  + App平台 修复 3.99版本引发的 CSS border 动态设置 boder/background 样式切换不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7236)
  + App平台 修复 4.2版本引发的 编译器 软链的插件编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7397)
  + App-Android平台 新增 pages.json pageStyle支持隐藏状态栏和底部指示器，实现全屏效果 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3854>
  + App-Android平台 新增 API uni.getFileSystemManager 文件管理模块支持Arraybuffer [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=6881>
  + App-Android平台 新增 发行 云端打包支持aab格式 [文档](https://doc.dcloud.net.cn/uni-app-x/tutorial/app-package.html#aab) <https://issues.dcloud.net.cn/pages/issues/detail?id=7171>
  + App-Android平台 新增 发行 支持 aaptOptions、buildFeatures 配置 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest.html#aaptoptions) <https://issues.dcloud.net.cn/pages/issues/detail?id=10770>
  + App-Android平台 调整 页面内容可渲染到全面屏手势指示条区域 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-window-info.html#safearea)
  + App-Android平台 修复 vue UTSJSONObject使用keyPath不触发响应式变更 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8845)
  + App-Android平台 修复 vue keepAlive 组件切换时，触发了 update 生命周期 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7420)
  + App-Android平台 修复 vue app.config.globalProperties无法在app.uvue中使用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9417)
  + App-Android平台 修复 vue defineModel如果父级没有接收，则安卓没有变化 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8741)
  + App-Android平台 修复 组件 scroll-view 安卓端4.23scroll-view子元素最后一个元素margin-bottom无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3866)
  + App-Android平台 修复 组件 scroll-view 组件是list-item组件的子元素时可能会不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6623)
  + App-Android平台 修复 4.18版本引发的 组件 scroll-view 嵌套滚动时 scroll-view触发了滚动行为但未触发@scroll事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7006)
  + App-Android平台 修复 3.91版本引发的 组件 swiper 在app端，swiper第一次触发@animationfinish事件得到detail中的source为空 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2342)
  + App-Android平台 修复 组件 text 设置宽高后文本无法修改为空 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9870)
  + App-Android平台 修复 组件 rich-text 组件设置selectable为true时itemclick事件无法触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=285)
  + App-Android平台 修复 组件 video 全屏播放时点击返回键，直接返回到上一个页面了 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2184)
  + App-Android平台 修复 组件 video 返回桌面，在进入是黑屏，不是暂停到当前页面 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7689)
  + App-Android平台 修复 组件 canvas Contex.measureText 安卓端绘制文字会抖动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6631)
  + App-Android平台 修复 组件 canvas Context2d arc方法counterclockwise默认值不对 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7107)
  + App-Android平台 修复 组件 canvas .toDataURL() 在部分安卓模拟器上卡顿 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7118)
  + App-Android平台 修复 组件 canvas 放在swiper里面无法绘制，可见current项可以绘制，但是切换之后回来绘制的内容就不见了  【安卓】 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7188)
  + App-Android平台 修复 组件 canvas 绘制的文字为空字符串会闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8772)
  + App-Android平台 修复 API uni.setTabBarItem 【安卓端】uni.setTabBarItem设置iconfont报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9969)
  + App-Android平台 修复 CSS transform 设置rotateX或者rotateY为180度时，view消失的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5570)
  + App-iOS平台 新增 API eventBus 支持在UTS插件中使用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/event-bus.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=9254>
  + App-iOS平台 修复 组件 全局事件 onResize 回调参数缺少 size 数据 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8186)
  + App-iOS平台 修复 组件 picker-view pickerview 上下蒙版颜色设置被覆盖 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2600)
  + App-iOS平台 修复 组件 slider 设置滑块颜色不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9361)
  + App-iOS平台 修复 组件 canvas : Path2D 绘制原点与 Context 绘制原点不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8748)
  + App-iOS平台 修复 4.23版本引发的 API uni.setTabBarStyle 设置backgroundColor或backgroundImage时borderColor受影响 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6567)
  + App-iOS平台 修复 4.25版本引发的 API uni.showActionSheet 适配横竖屏切换布局错乱 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8542)
  + App-iOS平台 修复 API uni.showToast 显示位置不正常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8123)
  + App-iOS平台 修复 API uni.chooseVideo 选择苹果手机拍摄的延时视频报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9886)
  + App-iOS平台 修复 4.25版本引发的 CSS border-radius 父视图添加圆角某些场景下无法裁剪子视图 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10188)
* 【uts】
  + Web平台、App-iOS平台 修复 部分情况下非对象字面量as为UTSJSONObject时会对这个变量创建一个新的UTSJSONObject实例 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9059)
  + App平台 修复 非根目录 config.json 资源文件打包后不存在 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8989)
  + App-Android平台 新增 app-android 支持TextDecoder [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/textdecoder.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=9044>
  + App-Android平台 修复 4.21版本引发的 number类型的数据在改变之后显示为3.0，4.0，5.0..... [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6450)
  + App-Android平台 修复 Number 类型 toString 方法与web有差异 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6791)
  + App-Android平台 修复 响应式数组扩展运算结果为空 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7897)
  + App-Android平台 修复 typeof null 编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9392)
  + App-Android平台 修复 h函数 第二个参数如何使用变量传入安卓只能使用Map,web端只能使用UTSJSONObject [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1337)
  + App-Android平台 修复 UTSJSONObject getXXX 数据不存在时期望返回null [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9253)
  + App-Android平台 修复 4.25版本引发的 UTSJSONObject 包含 number 类型数据时调用 toJSONObject 序列化可能异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9447)
  + App-Android平台 修复 4.25版本引发的 JSON.stringify  replacer 函数 key 参数类型 应该是 string [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9242)
  + App-Android平台 修复 Math.round(NaN) 运行报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7509)
  + App-Android平台 修复 容器组件中子组件和排版相关的CSS样式设置无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6060)
  + App-Android平台 修复 4.26版本引发的 uts：调用返回参数为promise类型的函数会报UTS: targetFunction does not exists 错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10051)
  + App-iOS平台 新增 uts插件支持Promise [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/promise.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3914>
  + App-iOS平台 修复 iOS uts组件 props 数组参数 没有作用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8582)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD模块 国外广告 支持 Meta、Unity、Liftoff、inmobi、IronSource、Mintegral 等渠道（暂未开放，有需求的开发者在uniad的im群中申请）
  + 更新 uni-AD模块 腾讯优量汇SDK Android为 4.603.1473 版，iOS为 4.15.10 版；快手广告和快手内容联盟SDK Android为 3.3.69 版，iOS为 3.3.69 版；穿山甲&GroMore SDK Android为 6.4.1.6 版，iOS为 6.4.1.0 版；Sigmob广告联盟SDK Android为 4.19.5 版，iOS为 4.15.5 版；百度百青藤广告SDK iOS为 5.371 版；Octopus章鱼移动广告SDK Android为 1.6.1.6 版；Google AdMob SDK iOS 为 11.10.0 版；Pangle SDK iOS为 6.2.0.8 版
  + Android平台 新增 uni-AD模块 国内广告支持 泛连、聚力阅盟 等渠道
  + Android平台 新增 云端打包支持 aaptOptions 配置 [文档](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#aaptoptions)
  + Android平台 更新 登录模块 Facebook SDK 为 17.0.2 版，解决误删`com.google.android.gms.permission.AD_ID`权限的Bug
  + Android平台 更新 UniPush 谷歌渠道 使用的个推 SDK 为 4.4.3.13 版，解决部分Android14设备无法拉起应用的Bug
  + Android平台 修复 UniPush 使用的个推消息推送 SDK 默认获取IMSI、关联启动应用导致无法通过合规检测的Bug
  + iOS平台 新增 uni-AD模块 支持 章鱼广告联盟 渠道
  + iOS平台 修复 iPhone 16 设备无法获取手机型号的Bug
  + iOS平台 修复 iOS 18 系统调用拨打电话等API失败的Bug [详情](https://ask.dcloud.net.cn/question/198814)
  + iOS平台 修复 音频播放 AudioPlayer 在 iOS16 及以下系统断开耳机时声音暂停了但没有回调 onPause 事件的Bug
* 【uniCloud】
  + 【重要】 新增 uni云开发软件版私有化部署 [详情](https://doc.dcloud.net.cn/uniCloud/software)
  + 新增 手机号二三要素实名核验服务 [详情](https://doc.dcloud.net.cn/uniCloud/uni-rpia/mobile-verify/intro.html)
  + 新增 统一推送服务扩展库 uni-cloud-push 支持鸿蒙next [详情](https://doc.dcloud.net.cn/uniCloud/uni-cloud-push/api.html)
  + 修复 4.25版本引发的 本地运行云函数包含Redis时报"函数不允许调用"的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10362)

#### 4.28.2024092105-alpha
* 【uni-app x】
  + App-iOS平台 修复 tabBar 页面无法横屏显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8185)
  + App-iOS平台 修复 4.25版本引发的 pages.json pageOrientation 值不为 auto 时运行在 iPad 竖屏切换横屏时页面没有自动适配 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8991)

#### 4.27.2024091308-alpha
* 【uni-app】
  + 【重要】开放鸿蒙next的运行、发行、生成wgt [详情](https://uniapp.dcloud.net.cn/tutorial/run/run-app-harmony.html)
  + Web平台 修复 4.25版本引发的 HBuilderX 可视化界面编辑 web 端配置后配置失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8068)
  + 支付宝小程序平台 修复 button 处理 chooseAvatar 事件失败的Bug [详情](https://ask.dcloud.net.cn/question/195634)
  + 头条小程序平台 修复 开启 virtualHost 后添加 watch 页面卡住无反应的Bug [详情](https://ask.dcloud.net.cn/question/193756)
  + App-Android平台 更新 SoLoader SDK 为 0.10.5 版，解决因 SoLoader 版本低可能无法通过 GooglePlay 审核的问题 [详情](https://ask.dcloud.net.cn/question/197371)
  + App-Android平台 修复 合规检测可能报 `com.taobao.weex SDK 收集设备“AndroidID”` 的Bug [详情](https://ask.dcloud.net.cn/question/197538)
* 【uni-app x】
  + 修复 编译器 前端付费插件依赖uts插件本地运行编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7323)
  + Web平台 修复 4.25版本引发的 HBuilderX 可视化界面编辑 web 端配置后配置失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8068)
  + App-Android平台 新增 发行 云端打包支持配置 packagingOptions [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest.html#distribute-android) <https://issues.dcloud.net.cn/pages/issues/detail?id=8067>
  + App-Android平台 修复 组件 input 部分情况下，input在ScrollView中键盘弹起时，不会自动上推页面 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5364)
  + App-Android平台 修复 4.25版本引发的 组件 video 不指定宽高时全屏后可能宽高不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8363)
  + App-Android平台 修复 uni-AD 上架小米应用市场提示`未经用户同意，存在收集SD卡数据的行为` [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7896)
  + App-Android平台 修复 API push 使用的个推消息推送 SDK 默认获取应用列表、位置相关信息可能导致无法通过合规检测 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8054)
  + App-Android平台 修复 API uni.getImageInfo 云端打包后获取图片信息可能失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7688)
  + App-Android平台 修复 API uni.getVideoInfo 云端打包后获取视频信息可能失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8332)
  + App-Android平台 修复 4.26版本引发的 API uni.getWindowInfo 在非全面屏手机上screenHeight、windowHeight不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8179)
  + App-Android平台 修复 4.26版本引发的 运行调试 打开二级页修改保存后应用重启直达失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8177)
  + App-iOS平台 修复 组件 textarea auto-height:true时设置height，再切换为false恢复的高度不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6561)
  + App-iOS平台 修复 组件 input 光标颜色失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8521)
  + App-iOS平台 修复 组件 input 动态更新某些属性可能导致cursor-spacing失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8530)
  + App-iOS平台 修复 4.26版本引发的 组件 Touch 事件 子组件和父组件同时监听 touch 事件，触摸子组件时父组件 touch 事件会多回调一次 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7832)
  + App-iOS平台 修复 4.25版本引发的 组件 view click事件位置丢失 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7987)
  + App-iOS平台 修复 4.26版本引发的 组件 rich-text 偶现内容不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7533)
  + App-iOS平台 修复 API uni.getLocation 腾讯定位默认配置 UIBackgroundModes 为 location [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8052)
  + App-iOS平台 修复 API uni.getImageInfo 非首次获取网络图片信息失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8457)
  + App-iOS平台 修复 发行 云端打包uts插件中的framework动态库不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8150)
* 【uts插件】
  + App平台 新增 支持通过装饰器(注解)的方式定义回调函数是否一直存活 [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html#keepalive) <https://issues.dcloud.net.cn/pages/issues/detail?id=8436>
  + App-Android平台 修复 函数返回的UTSJSONObject属性下的数据对象为空 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6735)
  + App-Android平台 修复 UTSJSONObject 检索内部属性耗时过多 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5147)
  + App-Android平台 修复 无法声明 RegExpExecArray 类型 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5529)
  + App-Android平台 修复 4.26版本引发的 uni-app项目中 函数 默认参数与可选参数不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8199)
  + App-Android平台 修复 4.26版本引发的 JSON.stringify 可能将 UTSJSONObject 中绝对值小于1的数据值转换为0 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8365)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 UniPush 使用的个推消息推送 SDK 默认获取应用列表、位置相关信息可能导致无法通过合规检测的Bug
  + iOS平台 修复 音频播放 AudioPlayer 在弱网环境下触发 onWaiting 后可能不触发 onPlay 的Bug
* 【uniCloud】
  + 修复 4.25版本引发的 腾讯云callFunction时报timeout参数不能读取的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8065)

#### 4.26.2024082213-alpha
* 【uni-app-x】
  + App平台 新增 组件 canvas 支持绘制自定义字体 [文档](https://doc.dcloud.net.cn/uni-app-x/api/canvasrenderingcontext2d.html#custonfont) <https://issues.dcloud.net.cn/pages/issues/detail?id=5359>
  + App平台 调整 API uni.getWindowInfo 返回的 screenTop 属性废弃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7095)
  + App-Android平台 修复 4.25版本引发的 编译器 当代码中定义一个包含大量数据的UTSJSONObject数组字面量时，编译报 method too large [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6906)
  + App-Android平台 修复 4.25版本引发的 API uni.getLocation 导入uni-getLocation-tencent插件云打包报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6890)
  + App-Android平台 修复 4.25版本引发的 API uni.getWindowInfo 返回的 screenHeight 值可能不是设备屏幕高度 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7058)
  + App-Android平台 修复 4.14版本引发的 CSS overflow 多级子 view 全部设置 overflow 为 visible 后点击 view 可能引起崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6957)
  + App-iOS平台 修复 组件 rich-text 设置 border 后高度会自动增加 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6989)
  + App-iOS平台 修复 组件 rich-text 动态设置内容后组件高度未更新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6991)
  + App-iOS平台 修复 API uni.setTabBarStyle 取消设置backgroundImage后backgroundColor受影响的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6587)
  + App-iOS平台 修复 API push 默认使用的发送通知许可描述不准确导致上架 AppStore 审核可能被拒 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7001)
  + App-iOS平台 修复 CSS border-width 动态修改某些css属性可能导致border-width恢复为默认值的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6624)
* 【uts插件】
  + App-Android平台 修复 3.91版本引发的 UTS插件在uniapp项目上运行报错，‌error: Unresolved reference: getMainExecutor‌ [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6345)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 更新 uni-AD模块 穿山甲&Gromore SDK 为 6.4.0.1 版
  + iOS平台 修复 音频播放 AudioPlayer 被其他三方中止播放时没有回调 pause 事件的Bug
* 【uniCloud】
  + 修复 4.18版本引发的 上传云函数安装依赖时报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7190)

#### 4.25.2024081703-alpha
* 【uni-app】
  + Web平台 修复 image 的 widthFix 部分场景下表现异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1762)
  + Web平台 修复 App-vue平台 input组件的type属性渲染的Bug [详情](https://github.com/dcloudio/uni-app/issues/4800)
  + Web平台 修复 input组件中传入值为null时直接报错的bug [详情](https://ask.dcloud.net.cn/question/194772)
  + Web平台 修复 vue3自定义组件无法触发onReachBottom,onPageScroll事件的Bug [详情](https://ask.dcloud.net.cn/question/194675)
  + Web平台 修复 App.vue 同级存在 App.uvue 时运行报错的Bug
  + Web平台 修复 map在高德地图下calloutmap返回markerid为NaN的bug [详情](https://ask.dcloud.net.cn/question/195628)
  + 微信小程序平台 修复 xr-frame组件标签属性透传的Bug [详情](https://ask.dcloud.net.cn/question/196249)
  + App-Android平台 修复 4.12版本引发的 部分场景下低版本webview语法错误的Bug [详情](https://ask.dcloud.net.cn/question/194534)
  + App-Android平台 修复 uni.chooseImage 选择`拍摄`可能会多次申请相机权限的Bug [详情](https://ask.dcloud.net.cn/question/194968)
  + App-iOS平台 修复 nvue map 组件使用 google 地图时 circles 无法删除的Bug [详情](https://ask.dcloud.net.cn/question/195622)
  + App-iOS平台 修复 nvue map 组件使用 v-if 指令设置为 false 时没有及时销毁原生地图实例的Bug
  + App-iOS平台 修复 nvue web-view 组件在某些情况可能会显示 js 源码的Bug [详情](https://ask.dcloud.net.cn/question/194214)
* 【uni-app-x】
  + 新增 发行 原生SDK iOS版。可用于原生应用集成或本地打包 [文档](https://doc.dcloud.net.cn/uni-app-x/native) <https://issues.dcloud.net.cn/pages/issues/detail?id=4462>
  + 新增 编译器 uts插件支持kt、java、swift代码混编 [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin-hybrid.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3913>
  + 新增 编译器 支持 import json 文件 [文档](https://uniapp.dcloud.net.cn/tutorial/page-json.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=2560>
  + 新增 编译器 支持 .env 文件配置环境变量 [文档](https://uniapp.dcloud.net.cn/tutorial/env.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=4254>
  + 新增 组件 canvas 及上下文对象 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unicanvaselement.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3769>
  + 新增 API requestAnimationFrame/cancelAnimationFrame [文档](https://doc.dcloud.net.cn/uni-app-x/api/animation-frame.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3832>
  + 新增 API uni.createSelectorQuery 补充传入参数 node/filed [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-selector-query.html#fields-%E5%85%BC%E5%AE%B9%E6%80%A7) <https://issues.dcloud.net.cn/pages/issues/detail?id=3263>
  + 修复 scroll-view的@scroll事件event参数中的detail类型报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2420)
  + Web平台、App-iOS平台 修复 scroll-view/list-view 动态设置 refresher-triggered 为 true 时没有触发 refresherpulling 事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2359)
  + Web平台、App-iOS平台 调整 组件 switch 移除margin-right的5px 保持和Android一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6708)
  + Web平台 修复 组件 image 的widthFix部分场景下表现异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1762)
  + App平台 新增 API 全局 Image 类用于 canvas 绘制 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-canvas-context-async.html#createimage)
  + App平台 新增 DOM API UniElement getAndroidView()/getIOSView() 获取原生view [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unielement.html#getandroidview) <https://issues.dcloud.net.cn/pages/issues/detail?id=3844>
  + App平台 新增 API uni.getLaunchOptionsSync 返回参数补充 appLink/appScheme，获取通用链接和scheme启动参数 [文档](https://doc.dcloud.net.cn/uni-app-x/api/launch.html#getenteroptionssync) <https://issues.dcloud.net.cn/pages/issues/detail?id=2990>
  + App平台 新增 API uni.getEnterOptionsSync [文档](https://doc.dcloud.net.cn/uni-app-x/api/launch.html#getlaunchoptionssync) <https://issues.dcloud.net.cn/pages/issues/detail?id=5552>
  + App平台 新增 API provider开放自注册，并调整 uni.getProvider 的返回值命名 [文档](https://doc.dcloud.net.cn/uni-app-x/api/provider.html#getprovider) <https://issues.dcloud.net.cn/pages/issues/detail?id=5843>
  + App平台 新增 API uni.setAppBadgeNumber 设置桌面应用图标的角标 [文档](https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html#setappbadgenumber) <https://issues.dcloud.net.cn/pages/issues/detail?id=4194>
  + App平台 新增 API uni.getLocation 内置腾讯定位，支持Provider属性来切换系统定位和腾讯定位 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-getlocation) <https://issues.dcloud.net.cn/pages/issues/detail?id=5666>
  + App平台 新增 API uni.chooseImage UI国际化 Android平台补充法语和西班牙语；iOS平台补充中文繁体、英语、法语和西班牙语 [文档](https://doc.dcloud.net.cn/uni-app-x/i18n.html#%E6%A1%86%E6%9E%B6%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6%E5%92%8Capi%E5%9B%BD%E9%99%85%E5%8C%96) <https://issues.dcloud.net.cn/pages/issues/detail?id=4162>
  + App平台 新增 API uni.chooseVideo UI国际化 Android平台补充法语和西班牙语；iOS平台补充中文繁体、英语、法语和西班牙语 [文档](https://doc.dcloud.net.cn/uni-app-x/i18n.html#%E6%A1%86%E6%9E%B6%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6%E5%92%8Capi%E5%9B%BD%E9%99%85%E5%8C%96) <https://issues.dcloud.net.cn/pages/issues/detail?id=5526>
  + App平台 修复 3.99版本引发的 API uni.request 返回的数据是json字符串不会自动解析成UTSJSONObject [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3116)
  + App平台 修复 DOM API CSSStyleDeclaration app端通过style.setProperty设置元素的border样式不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2446)
  + App-Android平台 新增 组件 video 支持子组件，可自定义全屏时的UI表现 [文档](https://doc.dcloud.net.cn/uni-app-x/component/video.html#children-tags)
  + App-Android平台 修复 4.02版本引发的 编译器 `<script setup>`导入外部文件定义的包含条件编译的props时编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6658)
  + App-Android平台 修复 4.21版本引发的 vue v-for循环JSON.parse出来的数值运行时报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3807)
  + App-Android平台 修复 vue v-slot与v-if/v-for结合使用时编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5059)
  + App-Android平台 修复 app.uvue 应用生命周期（如onLaunch）中发生异常时错误信息不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2007)
  + App-Android平台 修复 组件 text 、button 横竖屏切换时文本渲染可能不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6001)
  + App-Android平台 修复 组件 scroll-view 设置上下padding或者border后可能会出现滚动条 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1930)
  + App-Android平台 修复 组件 scroll-view 设置scroll-into-view属性可能出现位置不对 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2598)
  + App-Android平台 修复 组件 scroll-view 横向滚动设置scrollleft scroll-with-animation="true"动画不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4442)
  + App-Android平台 修复 组件 list-view @scroll事件参数event.detail中的scrollWidth为0 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2445)
  + App-Android平台 修复 组件 list-item 子组件复用后 event 事件可能触发异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5160)
  + App-Android平台 修复 3.98版本引发的 组件 list-view listview中使用sticky-section和sticky-header新增数据显示不全 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2988)
  + App-Android平台 修复 组件 image 组件设置border后默认mode值效果不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2654)
  + App-Android平台 修复 3.99版本引发的 组件 input 设置password但不设置value会白屏 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2462)
  + App-Android平台 修复 组件 web-view 进度条color设置简写RGB颜色闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2130)
  + App-Android平台 修复 组件 web-view pointer-events属性不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2621)
  + App-Android平台 修复 组件 video 点击播放时不显示播放控件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3982)
  + App-Android平台 修复 组件 video 中间播放按钮不清晰 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5638)
  + App-Android平台 修复 组件 video controlstoggle事件可能不触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5642)
  + App-Android平台 修复 组件 slider 横向多重嵌套排列的若干个slider 只有第一个可以正常拖动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4050)
  + App-Android平台 新增 API uni.getAppAuthorizeSetting 补充相册、蓝牙的授权状态 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-app-authorize-setting.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=4378>
  + App-Android平台 新增 API uni.getPushChannelManager 获取推送渠道管理器。同时废弃uni.getChannelManager [文档](https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=5242>
  + App-Android平台 修复 3.99版本引发的 API uni.getSystemInfoSync 、getSystemInfo()、getWindowInfo()的screenHeight属性某些情况下高度异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2330)
  + App-Android平台 修复 API uni.getSystemInfoSync getSystemInfoSync在多窗口模式下返回的screen、window、status高度错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2570)
  + App-Android平台 修复 API uni.addInterceptor 无法拦截点击tabbar的行为 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2776)
  + App-Android平台 修复 API 网络 应用退出后Cookie也清除了 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2364)
  + App-Android平台 修复 3.99版本引发的 API uni.request 泛型设为string时，解析失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4010)
  + App-Android平台 修复 3.99版本引发的 API websocket 回调内触发异常，导致多次触发fail回调 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2829)
  + App-Android平台 修复 3.99版本引发的 API uni.getLocation type 为 wgs84 时在Android 7.x 版本无法定位 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6785)
  + App-Android平台 修复 API uni.createSelectorQuery 在template有多个跟节点时无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2981)
  + App-Android平台 修复 API uni.createVideoContext 调用requestFullScreen进入全屏时屏幕方向不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3989)
  + App-Android平台 修复 API uni.$emit 传对象字面量参数时编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5321)
  + App-Android平台 修复 API uni.setStorageSync 存储对象字面量时编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5392)
  + App-Android平台 修复 API uni.rpx2px 某些尺寸的设备上单位精度可能偏差 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6769)
  + App-Android平台 修复 3.97版本引发的 CSS overflow 组件设置overflow:visible样式后，通过transform:translate移动组件，位置偏差 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2406)
  + App-Android平台 修复 4.13版本引发的 CSS overflow 组件设置overflow:visible时，点击事件分发错误的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2481)
  + App-Android平台 修复 4.13版本引发的 CSS overflow 设置overflow: visible后hover-class会失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2490)
  + App-Android平台 修复 3.99版本引发的 CSS border 某些情况下border-color与background-image同时设置时，颜色异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4996)
  + App-Android平台 修复 运行调试 离线打包基座，targetSdk34下真机运行失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2424)
  + App-Android平台 修复 发行 app运行时修改部分系统设置后返回app可能会白屏 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=273)
  + App-iOS平台 新增 组件 list-item 支持复用 [文档](https://doc.dcloud.net.cn/uni-app-x/component/list-item.html#list-item%E5%A4%8D%E7%94%A8%E6%9C%BA%E5%88%B6)
  + App-iOS平台 新增 pages.json 支持配置页面横屏 pageOrientation 属性 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pagesoptionspage-style)
  + App-iOS平台 新增 API uni.requestVirtualPayment / uni.getVirtualPaymentManager 苹果应用内支付IAP [文档](https://doc.dcloud.net.cn/uni-app-x/api/virtual-payment.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3843>
  + App-iOS平台 新增 API navigator 支持 animationType 设置页面动画 [文档](https://doc.dcloud.net.cn/uni-app-x/api/navigator.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=5641>
  + App-iOS平台 新增 API uni.compressImage 支持压缩图片 [文档](https://doc.dcloud.net.cn/uni-app-x/api/compress-image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=4844>
  + App-iOS平台 新增 API uni.getImageInfo 支持获取图片信息 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-image-info.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=4847>
  + App-iOS平台 新增 API uni.getVideoInfo 支持获取视频信息 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-video-info.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=4851>
  + App-iOS平台 新增 API uni.compressVideo 支持压缩视频 [文档](https://doc.dcloud.net.cn/uni-app-x/api/compress-video.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=4852>
  + App-iOS平台 新增 API uni.getElementById 可在 uts 插件中使用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-element-by-id.html#getelementbyid) <https://issues.dcloud.net.cn/pages/issues/detail?id=5573>
  + App-iOS平台 新增 API uni.getPerformance 获取性能数据 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-performance.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3018>
  + App-iOS平台 修复 vue 通过 this.data 赋值ref和查询元素不全等 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3520)
  + App-iOS平台 修复 页面、应用 onLoad，应用 onShow 回调参数没有对中文解码 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6280)
  + App-iOS平台 修复 pages.json tabbar是纯文字时，没有居中，并且文字超出不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2521&ask_id=190221)
  + App-iOS平台 修复 组件 全局属性和事件 根节点 template 不包含子元素时页面 onReady 事件不会触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2386)
  + App-iOS平台 修复 组件 scroll-view/list-view refresherabort 事件返回的 dy 值不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5349)
  + App-iOS平台 修复 组件 list-view 列表加载内容过多应用闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2043)
  + App-iOS平台 修复 组件 list-view 自定义下拉刷新动画结束时首部的 sticky-header 组件复位动画异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2412)
  + App-iOS平台 修复 组件 list-view 动态增删子元素布局可能会错乱 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2787)
  + App-iOS平台 修复 组件 list-view/scroll-view 下拉刷新事件 refresherabort 可能不触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2448)
  + App-iOS平台 修复 组件 swiper 属性autoplay设置true，首次横向滑动切换@transition事件参数e.detail.dy错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2426)
  + App-iOS平台 修复 组件 text 嵌套后对不齐 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2259)
  + App-iOS平台 修复 组件 button 同时设置setProperty和attributes样式不完全生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5017&ask_id=193724)
  + App-iOS平台 修复 组件 input 当view添加touch事件后可能导致隐藏键盘的事件没有触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2258)
  + App-iOS平台 修复 组件 input placeholderStyle 不支持设置字体大小 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4068)
  + App-iOS平台 修复 组件 rich-text click 事件不触发及点击时父节点的 click 事也不触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6613)
  + App-iOS平台 修复 组件 web-view 组件监听 touchstart事件后和webview自身手势冲突，造成部分网页上下滑动异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5472)
  + App-iOS平台 修复 API uni.showModal uni.showModel 连续弹出无法关闭的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2466)
  + App-iOS平台 修复 API uni.setTabBarItem 设置visible无法隐藏某项item [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2547)
  + App-iOS平台 修复 CSS box-shadow 不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2399)
  + App-iOS平台 修复 CSS border-style 无法动态移除 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6680)
  + App-iOS平台 修复 CSS flex-flow 使用缩写排版效果不稳定 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3855)
  + App-iOS平台 修复 页面关闭后某些类未全部释放销毁 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6064)
* 【uts】
  + Web平台 新增 UTSJSONObject 补齐 keys、assign 方法 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/utsjsonobject.html#%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95) <https://issues.dcloud.net.cn/pages/issues/detail?id=4370>
  + Web平台 修复 JSON.parse接收方法父级作用域传入的泛型时报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5074)
  + App-Android平台 新增 ArrayBuffer [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/arraybuffer.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3770>
  + App-Android平台 新增 atob,btoa 方法 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/global.html#atob-encodeddata-string-string) <https://issues.dcloud.net.cn/pages/issues/detail?id=2709>
  + App-Android平台 新增 JSON.stringify 支持 replacer、space 参数 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/json.html#stringify-value-replacer-space) <https://issues.dcloud.net.cn/pages/issues/detail?id=1183>
  + App-Android平台 新增 Date构造函数 支持的日期字符串与浏览器保持一致 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/date.html#date) <https://issues.dcloud.net.cn/pages/issues/detail?id=4518>
  + App-Android平台 新增 String 支持 isWellFormed/toWellFormed [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/string.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3479>
  + App-Android平台 新增 RegExp 不支持空构造/常规字面量 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/regexp.html#regexp) <https://issues.dcloud.net.cn/pages/issues/detail?id=3705>
  + App-Android平台 新增 UTSAndroid.requestSystemPermission 增加shallUnCheck 选项，用来忽略异常检测 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#requestsystempermission) <https://issues.dcloud.net.cn/pages/issues/detail?id=2346>
  + App-Android平台 修复 uts API加密插件发行时编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3467)
  + App-iOS平台 修复 对class属性赋值时，没有触发属性的setter方法 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1951)
  + App-iOS平台 修复 调用uts代码参数中包含callback时，UTSCallback在内存中未释放 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2288)
* 【uniCloud】
  + 新增 uni-app x 客户端 SDK 支持连接支付宝云 WebSocket API [详情](https://doc.dcloud.net.cn/uniCloud/websocket.html#unicloud-connectwebsocket)
  + 新增 callFunction 支持传递timeout参数 [详情](https://doc.dcloud.net.cn/uniCloud/cf-callfunction.html)
  + 新增 云函数中获取当前运行环境标识 [详情](https://doc.dcloud.net.cn/uniCloud/cf-callfunction.html#context)
  + 调整 uni-app-x 安卓端 UniCloudError detail 属性类型由必备调整为不必备
  + 调整 uni-app-x 安卓端 导出 UniCloudChooseAndUploadFileItem、UniCloudChooseAndUploadFileItem 类型到全局
  + 修复 uni-app-x 发行到安卓时项目内使用了uniCloud对象但是未关联服务空间时发行报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3826)
  + 修复 支付宝云 Nodejs18 版本使用安全网络报错的Bug [详情](https://ask.dcloud.net.cn/question/191326)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 新增 uni-AD模块 支持 Octopus章鱼移动广告 和 AdScope倍孜广告 [文档](https://uniapp.dcloud.net.cn/uni-ad.html)
  + Android平台 更新 uni-AD模块 Google AdMob SDK 为 23.2.0 版；Pangle SDK 为 6.2.0.0 版
  + Android平台 更新 云端打包环境 compileSdk 为 34、buildToolsVersion 为 34.0.0 、 Gradle 为 8.5 版、Android Grad 插件为 8.2.2 版、JDK 为 Amazon corretto 17.0.12.7.1 版
  + Android平台 修复 部分小米设备启动应用立即申请`发送通知`权限，解决小米商城审核问题 [详情](https://ask.dcloud.net.cn/question/194065)
  + Android平台 修复 高德地图可能被检测报频繁采集数据，解决vivo商城审核问题 [详情](https://ask.dcloud.net.cn/question/194104)
  + Android平台 修复 设置 targetSdkVersion 大于等于 29 时自定义启动图可能显示异常的Bug [详情](https://ask.dcloud.net.cn/question/195273)
  + iOS平台 更新 云端打包环境 XCode 为 15.4 版、iOS SDK 为 17.5 版

#### 4.23.2024070309-alpha
* 【uni-app-x】
  + 新增 API uni.setTabBarStyle/pages.json 支持传递 borderColor 设定自定义边框颜色，优先级高于 borderStyle [详情](https://doc.dcloud.net.cn/uni-app-x/api/set-tabbar.html#settabbarstyle)
  + Web平台、App-Android平台 调整 API uni.setTabBarStyle/pages.json 中 borderStyle 只支持 black/white [详情](https://doc.dcloud.net.cn/uni-app-x/api/set-tabbar.html#settabbarstyle)
  + Web平台 修复 4.22版本引出的 开发阶段内置浏览器白屏的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2722)
  + Web平台 修复 4.21版提供的 canvas API 缺失 toDataURL/toBlob 方法的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2811)
  + App平台 调整 API uni.getDeviceInfo 返回数据中的 devicePixelRatio 属性类型为 number [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-device-info.html#%E8%BF%94%E5%9B%9E%E5%80%BC)
  + App-iOS平台 修复 4.22版本引出的 自定义组件样式污染造成渲染变慢的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2592)
  + App-iOS平台 修复 组件 form submit/reset 事件 target 属性为 null 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2798)
  + App-iOS平台 修复 uts组件插件触发 event 事件参数中缺少 type、target 等属性的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2801)
* 【uts】
  + App-iOS平台 新增 UTSJSONObject 支持 assign、keys 等静态方法 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/utsjsonobject.html#%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95)
  + App-iOS平台 修复 UTSJSONObject 中包含 Map 类型数据可能会引起崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2047)
* 【uniCloud】
  + 修复 4.22版本引出的支付宝云 WebSocket 默认连接地址不是 wss 协议的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2725)
  + 优化 上传网页前端托管上传速度及上传稳定性，减少上传失败的情况

#### 4.22.2024062415-alpha
* 【uni-app】
  + Web平台、App-vue平台 修复 input 组件 type="digit"，在有初始值的情况下输入小数点时输入框清空的Bug [详情](https://ask.dcloud.net.cn/question/193171)
  + Web平台 修复 vue3版本 tabBar切换时不能记忆滚动位置的Bug [详情](https://ask.dcloud.net.cn/question/193400)
* 【uni-app-x】
  + Web平台 修复 input 在 type="digit"，在有初始值的情况下输入小数点时输入框清空的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2601)
  + Web平台 修复 tabBar切换时不能记忆滚动位置的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2516)
  + App-Android平台 修复 响应式API可能存在内存泄漏的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2543)
  + App-Android平台 修复 组件 switch 在 list-view 组件中显示状态可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2482)
  + App-iOS平台 新增 uni-ad 开屏广告 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad)
  + App-iOS平台 新增 uni-ad 激励视频广告 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-rewarded-video-ad.html)
  + App-iOS平台 修复 组件 button 动态设置 text 文本重复显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2507)
  + App-iOS平台 修复 API uni.setTabBarStyle 参数 backgroundImage 无效的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2523)
  + App-iOS平台 修复 自定义组件样式污染的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2592)
  + App-iOS平台 修复 `Info.plis` 中配置应用支持的横竖屏后云端打包无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2639)
* 【uniCloud 插件】
  + 【重要】新增 支付宝云支持 WebSocket [详情](https://doc.dcloud.net.cn/uniCloud/websocket.html)
  + 修复 支付宝云 uni-app-x ios 端请求在某些情况下云函数报错的Bug [详情](https://ask.dcloud.net.cn/question/193076)

#### 4.21.2024061818-alpha
* 【uni-app】
  + Web平台 修复 Vue3 项目暗黑模式下，theme.json 中配置 tabbar 的 iconPath 或 selectedIconPath 或 midButton -> backgroundImage 的路径不以 / 开头时在发行模式下图片 404 不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2472)
  + 小程序平台 修复 用户工程路由以 App.vue 结尾错误识别为主入口的bug [详情](https://ask.dcloud.net.cn/question/192513)
  + 小程序平台 修复 不支持用户传递 `transformAssetUrls.tags` 的 bug [详情](https://github.com/dcloudio/uni-app/pull/4980)
  + 微信小程序平台 修复 使用 `uni://form-field` 报错的 bug [详情](https://github.com/dcloudio/uni-app/issues/4960)
  + 头条小程序平台 修复 启用 virtualHost 时相关生命周期不生效的bug [详情](https://ask.dcloud.net.cn/question/192502)
  + App-iOS平台 修复 在 iOS 16 系统中，input type="digit" 时无法删除小数点的Bug [详情](https://ask.dcloud.net.cn/question/193171)
* 【uni-app-x】
  + 新增 支持 onError 应用生命周期 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/app.html)
  + Web平台 修复 暗黑模式下，theme.json 中配置 tabbar 的 iconPath 或 selectedIconPath 或 midButton -> backgroundImage 的路径不以 / 开头时在发行模式下图片 404 不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2472)
  + Web平台 修复 uni.setTabBarStyle后minbutton消失的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2513)
  + App-Android平台 调整 系统底栏背景色与页面 backgroundColorContent 颜色一致 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pagesoptionspage-tips)
  + App-Android平台 修复 离线打包 number 类型判断相等可能与云打包结果不一致的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2422)
  + App-Android平台 修复 响应式数组调用 unshift 方法不触发响应式变更 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2151)
  + App-Android平台 调整 input/textarea 组件同时设置 modelValue 和 value 时，modelValue 优先级更高 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2236)
  + App-iOS平台 修复 uts 插件事件包含大写触发后无法接收事件的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2525)
* 【uts】
  + App-Android平台 修复 可选 number 类型判断相等结果可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2439)
  + App-Android平台 修复 UTSJSONObject 通过 getXXX 方法获取对象属性返回的不是引用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2340)
  + App-Android平台 修复 JSON.parse 返回的数字类型通过 console.log 打印输出类型不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2427)
  + App-iOS平台 修复 4.18版本引出的 uts组件插件使用时设置 style 可能会被默认 style 覆盖的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2411)
* 【uniCloud】
  + 调整 客户端请求云函数、云对象的 clientInfo 内仅保留部分字段，移除 oaid、safeAreaInsets 等信息，避免 vivo 商店报警 [详情](https://doc.dcloud.net.cn/uniCloud/cf-functions.html#get-client-infos)
  + 新增 客户端API uniCloud.setCustomClientInfo 用于自定义客户端信息 [详情](https://doc.dcloud.net.cn/uniCloud/client-sdk.html#set-custom-client-info)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 统计模块 google渠道友盟统计 SDK 为 9.6.8 版，解决可能无法通过 GooglePlay 审核的问题 [详情](https://ask.dcloud.net.cn/question/189922)
  + iOS平台 修复 特定场景下可能偶现崩溃的Bug [详情](https://ask.dcloud.net.cn/question/191578)

#### 4.19.2024060704-alpha
* 【uni-app】
  + 小程序平台 修复 uni-app cli 项目依赖 @vitejs/plugin-vue@5.05 引发的组件编译失败的Bug [详情](https://github.com/dcloudio/uni-app/issues/4952)
* 【uni-app-x】
  + 新增 uni_modules 前端 easycom 组件支持加密付费销售 [详情](https://uniapp.dcloud.net.cn/plugin/publish.html#components-pay)
  + App平台 新增 uniCloud.chooseAndUploadFile 支持选择视频并上传 [详情](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/storage.html#chooseanduploadfile)
  + App平台 调整 API uni.onAppThemeChange 计算后的应用主题值变化才会触发监听回调 [详情](https://doc.dcloud.net.cn/uni-app-x/api/theme.html#onappthemechange)
  + App-iOS平台 修复 4.18版本引出的 触发 @longpress 事件引起应用闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2334)
  + App-iOS平台 修复 组件 list-item 在 v-for 使用数组方法会错乱的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2287)
  + App-iOS平台 修复 API uni.setAppTheme 设置主题状态应用退出后未保存的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2372)
  + App-iOS平台 修复 uts 付费插件编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2085)
* 【uts】
  + App-Android平台 修复 可选链调用的后续连续调用也必须手动增加可选链的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2144)
  + App-iOS平台 修复 uts 插件中导出 class 包含 init 构造函数编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2177)
  + App-iOS平台 修复 uts 插件中 interface 定义 Promise 返回值编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2251)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 一键登录、UniPush 使用的个推核心组件 SDK 为 3.2.16.0 版，一键登录 使用的个验SDK为 3.1.7.0 版，UniPush 使用的个推SDK为 3.3.7.0 版，适配小米应用商店的隐私合规要求

#### 4.18.2024060311-alpha
* 【uni-app】
  + Web平台 修复 当 router.base 为 ./ 时，部分情况下 image 引用图片加载不成功的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1570)
  + Web平台 修复 API uni.getVideoInfo 返回的 size 属性单位不为KB的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2250)
  + 支付宝小程序平台 修复 组件传递 Options 配置不生效的Bug [详情](https://ask.dcloud.net.cn/question/190681)
  + 京东小程序平台 修复 Vue3 项目 input 组件 @input 方法不触发的Bug [详情](https://ask.dcloud.net.cn/question/190631)
* 【uni-app-x】
  + 新增 theme.json 用于pages.json中颜色主题变量定义，处理暗黑模式的pages.json兼容 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/themejson.html)
  + 新增 switch 组件属性 backgroundColor/activeBackgroundColor/foreColor/activeForeColor[详情](https://doc.dcloud.net.cn/uni-app-x/component/switch.html)
  + 新增 slider 组件属性 activeBackgroundColor/foreColor/valueColor[详情](https://doc.dcloud.net.cn/uni-app-x/component/slider.html)
  + 新增 radio 组件属性 foreColor 替代 iconColor/color[详情](https://doc.dcloud.net.cn/uni-app-x/component/radio-group.html)
  + 新增 checkbox 组件属性 foreColor 替代 iconColor/color[详情](https://doc.dcloud.net.cn/uni-app-x/component/checkbox-group.html)
  + 新增 API $setPageStyle 支持更多属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html#setpagestyle)
  + 调整 vue框架 validateProp 方法, required prop 存在 default value 时不告警[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1600)
  + Web平台 新增 服务端渲染（ssr） [详情](https://doc.dcloud.net.cn/uni-app-x/web/ssr.html)
  + Web平台 调整 去除 uni-text、uni-input、uni-textarea、uni-view 组件根节点的`color: black`样式
  + Web平台 修复 pages.json 下拉刷新默认背景色不为透明的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1726)
  + Web平台 修复 组件 input/textarea 同时设置 modelValue 和 value 显示效果不一致的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2236)
  + Web平台 修复 组件 list-item 包含在自定义组件内时在 list-view 内不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2199)
  + Web平台 修复 API uni.getAppBaseInfo、uni.getSystemInfo 内缺少部分属性的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1917)
  + Web平台 修复 API uni.getVideoInfo 返回的 size 属性单位不为KB的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2250)
  + Web平台 修复 API $getPageStyle获取到的对象不是UTSJSONObject的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1916)
  + App平台 新增 manifest 设置 url scheme，可从外部打开App [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest.html#urlscheme)
  + App平台 新增 API uni.chooseVideo 支持拍摄视频或从手机相册中选视频 [详情](https://doc.dcloud.net.cn/uni-app-x/api/choose-video.html)
  + App平台 新增 API uni.saveVideoToPhotosAlbum 支持保存视频到相册 [详情](https://doc.dcloud.net.cn/uni-app-x/api/save-video-to-photos-album.html)
  + App平台 新增 API uni.getProvider 成功回调参数支持 providers [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-provider.html)
  + App平台 新增 API uni.getDeviceInfo 返回数据支持os、rom相关属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-device-info.html)
  + App平台 新增 API uni.setAppTheme 设置应用主题；uni.onAppThemeChange 监听应用主题变化；uni.onOsThemeChange 监听系统主题变化 [详情](https://doc.dcloud.net.cn/uni-app-x/api/theme.html)
  + App平台 新增 API uni.getSystemInfo、uni.getAppBaseInfo 返回数据支持 `appTheme` 属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-app-base-info.html)
  + App平台 修复 部分内置组件事件触发缺少target属性的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1932)
  + App平台 修复 组件 textarea 设置 flex 为 1 时高度异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2045)
  + App-Android平台 新增 `uni-app x 原生SDK`，可用于原生App集成和离线打包 [详情](https://doc.dcloud.net.cn/uni-app-x/native/)
  + App-Android平台 新增 API uni.getImageInfo 支持获取图片信息 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-image-info.html)
  + App-Android平台 新增 API uni.compressImage 支持压缩图片 [详情](https://doc.dcloud.net.cn/uni-app-x/api/compress-image.html)
  + App-Android平台 新增 API uni.getVideoInfo 支持获取视频信息 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-video-info.html)
  + App-Android平台 新增 API uni.compressVideo 支持压缩视频 [详情](https://doc.dcloud.net.cn/uni-app-x/api/compress-video.html)
  + App-Android平台 修复 首次安装可能重复打开首页的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2231)
  + App-Android平台 修复 小窗口模式应用导航栏高度不正确的问题Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2117)
  + App-Android平台 修复 异步创建组件时可能会崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2133)
  + App-Android平台 修复 组件内发生异常可能不会输出到控制台的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=880)
  + App-Android平台 修复 tabBar 同时设置 borderStyle、backgroundColor 为深色时会显示一条白线的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2116)
  + App-Android平台 修复 组件 scroll-view 设置 scroll-top 属性不触发 scroll 事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2249)
  + App-Android平台 修复 组件 swiper 竖向滑动动画过快的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1550)
  + App-Android平台 修复 组件 swiper 嵌套时在部分场景可能滑动冲突Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1069)
  + App-Android平台 修复 组件 swiper 部分场景事件触发顺序可能错乱的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1944)
  + App-Android平台 修复 组件 video 未设置 direction 属性时进入全屏视频方向可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2042)
  + App-Android平台 修复 组件 video 通过 uni.createVideoContext 调用 stop 后重新播放不显示视频封面图的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2314)
  + App-Android平台 修复 组件 web-view 在滚动容器中可能出现滑动冲突的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1488)
  + App-Android平台 修复 组件 web-view 设置 android-layer-type 属性无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2088)
  + App-Android平台 修复 组件 web-view 中输入框获取焦点后可能被软键盘遮挡的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1771)
  + App-Android平台 修复 API uni.showToast 同时弹出多个提示框显示异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1663)
  + App-Android平台 修复 uniIdRouter 在首页是需要登录的页面时未自动跳转到登录页面的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2027)
  + App-Android平台 修复 VUE ref、reactive、readonly、shallowRef、shallowReactive、shallowReadonly 使用泛型+对象/数组字面量编译报错的Bug [详情](http://git.dcloud.io/uni-app-next/uts/commit/5f9278a020c435a35b0a782e2d56fcc9dbd78f08)
  + App-Android平台 修复 VUE v-for 不支持循环 UTSJSONObject 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1839)
  + App-Android平台 修复 VUE inject 不支持泛型的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1787)
  + App-Android平台 更新 一键登录使用的个推核心组件SDK为 3.2.13.0 版，个验SDK为 3.1.6.3 版，解决与 uni-push 一起使用存在冲突的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1749)
  + App-Android平台 优化 组件 slider 在滚动容器中的行为 [详情](https://doc.dcloud.net.cn/uni-app-x/component/slider.html)
  + App-iOS平台 新增 splash 在 manifest.json 中配置`storyboard`启动界面 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-splashscreen.html#ios)
  + App-iOS平台 补齐 tabbar 支持 fontSize、iconWidth、spacing、iconfontSrc、backgroundImage 等属性 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-tabbar)
  + App-iOS平台 补齐 API uni-push [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/push.html)
  + App-iOS平台 补齐 API uni.requestPayment 支持支付宝支付、微信支付 [详情](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html)
  + App-iOS平台 补齐 API uni.getUniverifyManager 支持一键登录 [详情](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html)
  + App-iOS平台 补齐 API UniResizeObserver 监视 UniElement 元素的大小变化 [详情](https://doc.dcloud.net.cn/uni-app-x/dom/uniresizeobserver.html)
  + App-iOS平台 调整 onShow 生命周期由页面动画完成时触发改为固定在 onCreate 之后触发 [详情](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
  + App-iOS平台 调整 组件 text 渲染高度计算逻辑，靠近 safari 浏览器渲染逻辑
  + App-iOS平台 修复 云端打包 未勾选`支持iPad`生成的安装包仍然可全屏运行在iPad设备的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2105)
  + App-iOS平台 修复 组件 touch 事件返回数据不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2165)
  + App-iOS平台 修复 组件 scroll-view 自定义下拉刷新可能引起某些元素不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1669)
  + App-iOS平台 修复 组件 progress 回调事件不完整的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2237)
  + App-iOS平台 修复 组件 事件回调包装不完整的 Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2240)
  + App-iOS平台 修复 CSS 样式支持 cubic-bezier [详情](https://doc.dcloud.net.cn/uni-app-x/css/transition-timing-function.html)
  + App-iOS平台 修复 CSS background-image 动态设置空字符时没有恢复默认值的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2033)
  + App-iOS平台 修复 CSS opacity 值为 0 时不响应点击事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2200)
  + App-iOS平台 修复 API uni.downloadFile 下载地址中含有特殊字符会导致失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2235)
* 【uts】
  + Web平台 App-iOS平台 调整 uts 编译为 js 时 any 类型调整为包含 null 类型 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/type-compatibility.html#any%E7%B1%BB%E5%9E%8B)
  + Web平台 App-iOS平台 修复 JSON.parse传入泛型为Map时报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1985)
  + App平台 修复 类的成员变量使用对象字面量初始化 type 类型时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1924)
  + App-Android平台 新增 UTSJSONObject 支持 assign、keys 等静态方法 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/utsjsonobject.html#%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95)
  + App-Android平台 新增 UTSAndroid.onActivityCallback 监听 activity 各种生命周期 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#onactivitycallback-callback-pageroute)
  + App-Android平台 新增 UTSAndroid.onPrivacyAgreeChange 监听同意应用隐私政策状态变更 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#onprivacyagreechange)
  + App-Android平台 优化 JSON.parse 解析数据速度 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1561)
  + App-Android平台 修复 JSON.parse 在部分场景下输出日志错乱的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1952)
  + App-Android平台 修复 Date 构造函数不支持部分格式字符串的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1774)
  + App-Android平台 修复 console.log 无法打印复杂对象的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1399)
  + App-Android平台 修复 Math.ceil/floor/round 不支持64位整型数字的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1817)
  + App-Android平台 修复 UTSAndroid.offAppActivityPause 可能会引发应用闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1613)
  + App-Android平台 修复 模板字符串不支持转义的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=883)
  + App-iOS平台 修复 uni.request 携带泛型报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2049)
  + App-iOS平台 修复 参数签名传递 function 表达式编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1852)
  + App-iOS平台 修复 当 switch 的 case 语句块仅包含break时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1640)
  + App-iOS平台 修复 部分情况下赋值语句编译不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1520)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD模块 腾讯优量汇SDK Android为 4.575.1445 版，iOS为 4.14.76 版；快手广告SDK iOS为 3.3.65 版；穿山甲&GroMore SDK Android为 6.1.0.4 版，iOS为 6.2.0.0 版；Sigmob广告联盟SDK Android为 4.17.1 版，iOS为 4.13.0 版；百度百青藤广告SDK Android为 9.35 版
  + Android平台 更新 地图/定位模块 高德地图 SDK 为 10.0.700 版，高德定位 SDK 为 6.4.5 版，解决华为Mate60及后续设备定位失败的Bug [详情](https://ask.dcloud.net.cn/question/187119)
  + Android平台 更新 uni实人认证使用的阿里云金融级实人认证SDK为 2.3.16.1 版
  + Android平台 修复 uni-AD 信息流广告可能出现的广告加载成功但是无法展示的Bug
* 【uniCloud】
  + 调整 客户端调用本地云函数时如果连接不到本地调试服务则自动切换为连接云端云函数。
  + 优化 扩展存储新增管理端接口 getDomains、getCdnTop，可用于实时监听cdn流量 [详情](https://doc.dcloud.net.cn/uniCloud/ext-storage/dev.html#getdomains)
  + 优化 扩展存储新增CDN流量监控告警定时任务模板 [详情](https://doc.dcloud.net.cn/uniCloud/ext-storage/dev.html#cdnsecurewarn)
  + 修复 ip防刷部分条件下不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2063)
  + 修复 上传云函数时 npm install 报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2180)
  + 修复 初始化向导没有上传schema扩展js的配置的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2289)
  + 修复 导入插件时不支持支付宝云的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2290)

#### 4.17.2024051110-alpha
* 【uni-app】
  + 修复 4.16 引出的 input 组件 type="number" 时触发不了 input 事件的Bug [详情](https://ask.dcloud.net.cn/question/190631)
* 【uni-app-x】
  + Web平台 修复 4.16 引出的 input 组件 type="number" 时触发不了 input 事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1960)
* 【uts插件】
  + App-iOS平台 修复 HBuilderX安装路径中包含空格或者中文时，UTS插件真机运行编译失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1950)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 微信中通过 `<wx-open-launch-app>` 开放标签唤起 app 时获取启动参数异常的Bug [详情](https://ask.dcloud.net.cn/question/190840)

#### 4.16.2024051009-alpha
* 【uni-app】
  + 修复 4.0版引出的 vue2 项目普通目录下的 static 目录被编译器复制到输出目录的Bug [详情](https://ask.dcloud.net.cn/question/190650)
  + 修复 input 组件 type="digit" 时，Web 和 App 上无法输入小数点的Bug [详情](https://ask.dcloud.net.cn/question/190763)
  + Web平台 修复 4.11版本引出的 因升级vue版本导致 部分事件监听报错的Bug [详情](https://ask.dcloud.net.cn/question/190670)
  + Web平台 修复 4.11版本引出的 因升级vue版本导致 css内使用v-bind且值包含rpx时无效的Bug [详情](https://ask.dcloud.net.cn/question/190828)
  + Web平台 修复 4.11版本引出的 因升级vite版本导致 ssr运行报错的Bug [详情](https://ask.dcloud.net.cn/question/190830)
  + App平台 修复 4.11版本引出的 scroll-view下拉刷新样式丢失的Bug [详情](https://ask.dcloud.net.cn/question/190805)
* 【uni-app-x】
  + Web平台 新增 $setPageStyle、$getPageStyle 支持 backgroundColorContent 属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html#setpagestyle)
  + Web平台 补齐 API UniResizeObserver 监视 UniElement 元素的大小变化 [详情](https://doc.dcloud.net.cn/uni-app-x/dom/uniresizeobserver.html)
  + Web平台 修复 4.11版本引出的 因升级vue版本导致 css内使用v-bind且值包含rpx时无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1830)
  + App平台 修复 CSS border 在某些情况下渲染导常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1701)
  + App平台 修复 CSS position 设置为 fixed 时某些情况下位置不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1681)
  + App平台 修复 CSS flex-direction 设置为 row，flex-wrap 为 wrap 且设置 min-height 时可能高度计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1528)
  + App-Android平台 修复 组件 image 设置 mode 为 widthFix 在部分场景图片显示可能不完整的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1764)
  + App-Android平台 修复 组件 input、textarea 的 keyboardheightchange、focus 事件某些情况下返回键盘高度为 0 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1362)
  + App-Android平台 修复 组件 input、textarea 在 list-view 中获取焦点可能被弹出软键盘遮挡的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1846)
  + App-Android平台 修复 4.11版引出的 组件 list-view 设置 scroll-top 属性滚动位置与预期不符的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1922)
  + App-Android平台 修复 组件 list-item 子元素使用 v-show 控制是否显示时可能出现异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1857)
  + App-Android平台 修复 组件 text 设置宽高和边框时 text-align 居中效果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1383)
  + App-Android平台 修复 API uni.getSystemInfo 返回 osTheme 字段值为 null 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1688)
  + App-Android平台 修复 UniElement 获取 offsetLeft 属性值异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1539)
  + App-Android平台 修复 CSS 同时设置 display 和 visibility 可能出现其中一个属性不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1923)
  + App-iOS平台 新增 组件 textarea 支持 confirm-type 属性 [详情](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html)
  + App-iOS平台 修复 组件 video 在 list-view 中全屏播放后退出全屏无法回到原来位置上的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1491)
  + App-iOS平台 修复 组件 video 在 iPad 设备全屏播放时可能无法横屏显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1565)
  + App-iOS平台 修复 API uni.setNavigationBarColor 传入非法值时导航栏背景色变为白色的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1841)
  + App-iOS平台 修复 API $setPageStyle 在 page.json 中关闭页面下拉刷新时，无法通过 $setPageStyle 方法动态开启页面下拉刷新的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1838)
  + App-iOS平台 修复 API $setPageStyle 动态设置页面容器背景色不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1837)
  + App-iOS平台 修复 API $getPageStyle 返回值可能是旧值的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1871)
  + App-iOS平台 修复 Tab 页面创建时 onShow 触发次数有误的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1809)
  + App-iOS平台 修复 调用 uni.createWebviewContext 打印警告的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1902)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 登录模块 Facebook SDK 为 17.0.0 版，去除`com.google.android.gms.permission.AD_ID`权限，解决谷歌审核报`您的应用未使用广告 ID`的Bug [详情](https://ask.dcloud.net.cn/question/179709)
* 【uniCloud】
  + 新增 uni-app-x 项目支持 multiSend [详情](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/database.html#multisend)
  + 修复 4.13版本引出的 调用本地云函数时云函数调用其他云函数报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1708)
* 【uni小程序SDK】
  + Android平台 修复 应用长时间处于后台可能报错的Bug [详情](https://ask.dcloud.net.cn/question/189480)

#### 4.14.2024042905-alpha
* 【uni-app】
  + 小程序平台 修复 4.13版引出的 Pinia 编译报错的Bug [详情](https://ask.dcloud.net.cn/question/190295)
  + 支付宝小程序平台 新增 支持 join-group-chat、subscribe-message 开放组件 [详情](https://ask.dcloud.net.cn/question/190053)
  + App平台 修复 vue3 项目配置原生js混淆后，云打包运行不正常的Bug [详情](https://ask.dcloud.net.cn/question/190488)
* 【uni-app-x】
  + Web平台 修复 $setPageStyle 动态修改 enablePullDownRefresh 为 true 无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1632)
  + App平台 调整 4.13版引出的 uni.getSystemInfo 返回 uniPlatform 字段值，从`app-android`和`app-ios`回退为 `app` [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-system-info.html#getsysteminfo-%E5%85%BC%E5%AE%B9%E6%80%A7)
  + App-Android平台 修复 DOM API UniResizeObserver 监视元素大小变化在部分场景回调不准确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1696)
  + App-Android平台 调整 组件 switch 关闭时的背景色由 #e5e5e5 调整为 #e9e9ea，与其他平台拉齐 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1705)
  + App-iOS平台 修复 app.uvue 不支持多个 style 标签的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1699)
  + App-iOS平台 修复 keep-alive 渲染结果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1627)
  + App-iOS平台 修复 组件 swiper 某些情况下首个 swiper-item 内容不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1618)
  + App-iOS平台 修复 组件 swiper 开启循环后 change 事件回调参数 detail.current 值可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1706)
  + App-iOS平台 修复 API uni.uploadFile 上传多个文件时崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1625)
  + App-iOS平台 修复 API uni.getAppBaseInfo 标准基座真机运行获取 appId 属性值不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1672)
  + App-iOS平台 修复 CSS background-image 某些情况下无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1667)
  + App-iOS平台 修复 CSS border-radius 动态设置可能不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1619)
  + App-iOS平台 修复 CSS transition 的 transform 动画设置 translate 值为百分比时动画效果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1633)
  + App-iOS平台 修复 CSS border-color 运行时展开样式错误的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1537)
  + App-iOS平台 修复 在 iOS15 以下部分组件写法会导致页面初始化报错的Bug（该改动可能引起原生插件回调与 vue 任务队列先后顺序的细微变化） [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1671)

#### 4.13.2024042321-alpha
* 【uni-app】
  + Vue3 项目 升级编译器依赖的 vite 版本为5.2.8
  + 微信小程序平台 新增 支持的skyline内置组件：draggable-sheet、grid-builder、list-builder、nested-scroll-body、nested-scroll-header、open-container、 share-element、snapshot、span [详情](https://ask.dcloud.net.cn/question/178372)
  + 百度小程序平台 修复 public静态资源引入路径有误导致icons不显示的问题 [详情](https://ask.dcloud.net.cn/question/189033)
  + Web平台 修复 onNavigationBarSearchInputClicked 生命周期 在部分浏览器下不触发的Bug [详情](https://ask.dcloud.net.cn/question/189465)
* 【uni-app-x】
  + 新增 API $getPageStyle 和 $setPageStyle，获取和设置pages.json的页面style [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html)
  + 新增 云对象及云函数调用时支持传泛型 [云对象客户端API文档](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/object.html)、[云函数客户端API文档](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/function.html)
  + 编译器 修复 script 节点内语法报错时，行号不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1290)
  + Web平台、App-iOS平台 补齐 $callMethod支持调用defineExpose导出的方法 [详情](https://doc.dcloud.net.cn/uni-app-x/component/#callmethod)
  + Web平台、App-iOS平台 修复 构造UniError时不支持无参数及一个参数的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1455)
  + Web平台 修复 css内使用v-bind无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1370)
  + Web平台 修复 backgroundColorContent显示高度不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1427)
  + Web平台 修复 textarea组件动态切换autoHeight不能实时生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1502)
  + Web平台 修复 textarea、input组件disable状态下设置cursor样式无效的Bug
  + Web平台 修复 request接口返回数组时错误的处理为了UTSJSONObject的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1582)
  + Web平台 调整 界面相关Api（showLoading、showToast、showModal、showActionSheet）样式调整，对齐App端
  + App平台 调整 组件 web-view 的 message 事件回调参数 detail.data 类型为 Array<UTSJSONObject>，load、loading 事件回调参数 detail.url 为 detail.src 属性 [详情](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html#%E4%BA%8B%E4%BB%B6)
  + App平台 调整 uni.getSystemInfo 返回 uniPlatform 字段值域分为 `app-android` 与 `app-ios` [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-system-info.html#getsysteminfo-%E5%85%BC%E5%AE%B9%E6%80%A7)
  + App平台 修复 CSS position 设置 absolute 时父元素的 padding 布局与 web 不一致的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1219)
  + App-Android平台 新增 页面 style 配置项支持 pageOrientation 来实现横屏或自旋转适应 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-json)
  + App-Android平台 新增 API FileSystemManager 支持 appendFile、readCompressedFile 等文件操作方法 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html)
  + App-Android平台 新增 API uni.$off 支持第二个参数为可选 [详情](https://doc.dcloud.net.cn/uni-app-x/api/event-bus.html#off)
  + App-Android平台 新增 API UniResizeObserver 监视 UniElement 元素的大小变化 [详情](https://doc.dcloud.net.cn/uni-app-x/dom/uniresizeobserver.html)
  + App-Android平台 修复 项目下包含云对象但是页面内未使用uniCloud时云打包报错的Bug
  + App-Android平台 修复 template 节点运行时异常导致应用闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1578)
  + App-Android平台 修复 script setup 下 defineSlots 定义作用域插槽编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1551)
  + App-Android平台 修复 uts插件打包自定义基座后，编译报错依赖找不到的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1379)
  + App-Android平台 修复 ref 类型数据在模板上插值显示不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1344)
  + App-Android平台 修复 script setup 下定义 ref 类型绑定 v-model 时，编译可能报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1338)
  + App-Android平台 修复 script setup 下函数声明不能递归调用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1312)
  + App-Android平台 修复 4.02版引出的运行时异常信息显示不正确[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1518)
  + App-Android平台 修复 组件 view 设置 overflow 为 visible 时超出父元素区域无法响应点击和触摸事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=157)
  + App-Android平台 修复 组件 scroll-view 子元素设置 overflow 为 visible 不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1175)
  + App-Android平台 修复 组件 sticky-header 吸顶后可能与 list-view 下拉刷新区域重叠的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1242)
  + App-Android平台 修复 组件 sticky-header 吸顶后部分场景中可能被 list-view 覆盖的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1241)
  + App-Android平台 修复 组件 swiper 嵌套 scroll-view 后触发下拉刷新可能会阻碍 swiper 左右滑动的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1231)
  + App-Android平台 修复 组件 input、textarea 在某些情况下可能被输入法遮挡的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=947)
  + App-Android平台 修复 组件 textarea 设置 auto-height 导致高度异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1298)
  + App-Android平台 修复 组件 slider 宽度发生变化或父容器大小发生变化后显示错乱的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=296)
  + App-Android平台 修复 组件 keep-alive 和 component 结合使用，切换打开过的组件可能出现空白的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1189)
  + App-Android平台 修复 组件 web-view 无法获取精准位置信息的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1563)
  + App-Android平台 修复 4.11版引出的 组件 scroll-view 自定义下拉刷新时 refresher-max-drag-distance 属性不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1512)
  + App-Android平台 修复 4.11版引出的 CSS transition-duration 设置为 0ms 时 transform 可能不执行的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1473)
  + App-Android平台 修复 退出应用时会可能短暂显示白屏的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=896)
  + App-iOS平台 新增 运行时的异常信息显示源码位置 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1519)
  + App-iOS平台 新增 onPageScroll 生命周期 [详情](https://doc.dcloud.net.cn/uni-app-x/page.html)
  + App-iOS平台 新增 组件 web-view 支持 horizontalScrollBarAccess、verticalScrollBarAccess 属性 [详情](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html#%E5%B1%9E%E6%80%A7)
  + App-iOS平台 新增 API uni.downloadFile 的 filePath 属性支持 uni.env [详情](https://doc.dcloud.net.cn/uni-app-x/api/download-file.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
  + App-iOS平台 新增 CSS transition-property 支持 all | none [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1381)
  + App-iOS平台 修复 组件 scroll-view 因为计算精度问题可能导致横向竖向同时能滑动的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1463)
  + App-iOS平台 修复 组件 text 通过 class 设置 line-height 不带单位的值时高度不正常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1458)
  + App-iOS平台 修复 组件 switch 父元素有点击事件时不能响应点击手势的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1475)
  + App-iOS平台 修复 组件 input type 属性动态赋值时 v-modol 无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1510)
  + App-iOS平台 修复 组件 textarea 设置 cursor 属性会触发 focus 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1465)
  + App-iOS平台 修复 组件 textarea 设置 cursor-color 为空时光标颜色会变成白色的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1469)
  + App-iOS平台 修复 组件 textarea 设置 auto-height 导致高度异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1298)
  + App-iOS平台 修复 组件 textarea 输入内容后 placeholder 没隐藏的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1526)
  + App-iOS平台 修复 组件 progress 组件初始化未能正确赋值的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1504)
  + App-iOS平台 修复 组件 slider 点击滑轨不会触发 change 事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1485)
  + App-iOS平台 修复 组件 picker-view 初始化赋值不能立即执行的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1506)
  + App-iOS平台 修复 组件 video 仅使用video组件，不使用createVideoContext时，云打包缺少video模块的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1556)
  + App-iOS平台 修复 组件 web-view 不触发 load 事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1322)
  + App-iOS平台 修复 组件 swiper 设置 current 默认值无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1543)
  + App-iOS平台 修复 组件 嵌套子组件样式不能继承父组件样式的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1505)
  + App-iOS平台 修复 API selectorQuery.in 传入组件实例无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1507)
  + App-iOS平台 修复 API DrawableContext 设置 font 存在字体信息(如"13px Arial")时文字绘制失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1472)
  + App-iOS平台 修复 API uni.showModal 点击取消按钮回调函数中 confirm 参数值为 true 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1326)
  + App-iOS平台 修复 API uni-getSystemInfo 返回的 windowTop 值不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1577)
  + App-iOS平台 修复 CSS 元素宽或高为0时设置背景渐变色导致应用闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1471)
  + App-iOS平台 修复 CSS box-shadow 设置为 none 时可能显示白色阴影的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1467)
  + App-iOS平台 修复 CSS backgroundColor 做 transition 动画时缺失透明度导致颜色不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1468)
  + App-iOS平台 修复 CSS border-style 为 solid 且设置 border-width 时 border-radius无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1470)
  + App-iOS平台 修复 CSS position 从 fixed 动态切换成其他值无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1527)
  + App-iOS平台 修复 CSS pointer-events 设置为 none 不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1530)
  + App-iOS平台 修复 CSS transition 动画在某些情况下异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1531)
  + App-iOS平台 修复 CSS 元素动态设置 Style 空值切换不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1589)
  + App-iOS平台 修复 事件冒泡在部分情况下可能自动停止的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1509)
* 【uts插件】
  + App平台 优化 API插件模板中 unierror.uts 错误对象构造函数，兼容 web 平台使用
  + App平台 修复 正则表达式包含双引号时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1428)
  + App-Android平台 修复 Date toISOString/toJSON 返回日期数据可能偏差一天的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1464)
  + App-iOS平台 修复 if else 空语句时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1351)
  + App-iOS平台 修复 class定义无参constructor时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1342)
  + App-iOS平台 修复 class定义boolean类型的getter、setter时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1332)
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】iOS平台 新增 支持隐私清单，满足Appstore从5月1日起的新合规要求 [文档](https://uniapp.dcloud.net.cn/tutorial/app-ios-privacyinfo.html)
  + 更新 uni-AD模块 快手广告和快手内容联盟SDK Android为 4.14.32 版；Google AdMob SDK iOS为 11.2.0 版
  + Android平台 更新 统计模块 友盟统计 SDK 为 9.6.8 版 [详情](https://ask.dcloud.net.cn/question/189922)
  + iOS平台 更新 推送模块 FCM SDK 为 10.23.1 版
  + iOS平台 更新 统计模块 Google 统计 SDK 为 10.23.1 版
  + iOS平台 更新 登录模块 Facebook SDK 为 17.0.0 版；Google SDK 为 7.1.0 版
  + iOS平台 修复 离线SDK集成 PDFNet.framework 运行时闪退的Bug
  + iOS平台 修复 一键登录 更换移动手机卡可能仍然返回上一个手机号的Bug
  + iOS平台 修复 atob 处理特定字符串可能异常的Bug

#### 4.12.2024041009-alpha
* 【uni-app 插件】
  + App平台 修复 Vue2 cli项目使用 webpack5.x 时，部分情况下资源文件找不到的Bug [详情](https://ask.dcloud.net.cn/question/188778)
* 【uni-app-x】
  + Web平台 调整 回滚HBuilderX 4.11版本将z-index默认值设为0的调整 [详情](https://doc.dcloud.net.cn/uni-app-x/css/z-index.html)
  + App-Android平台 修复 4.11版引出的 CSS z-index 可能引发下标越界异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1272)
  + App-iOS平台 新增 onPageScroll 生命周期 [详情](https://doc.dcloud.net.cn/uni-app-x/page.html)
  + App-iOS平台 新增 组件 text 支持嵌套子 text 组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/text.html#%E5%AD%90%E7%BB%84%E4%BB%B6)
  + App-iOS平台 修复 进入应用首页立即调用 uni.hideTabbar 可能导致页面底部区域高度异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1364)
  + App-iOS平台 修复 页面 onReady 生命周期在特定设备触发时机可能不准确导致无法正确获取页面元素大小的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1367)
* 【uts插件】
  + iOS平台 修复 对象字面量as成uni-module app-js内的type时未能转为指定类型的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1314)

#### 4.11.2024040401-alpha
* 【uni-app 插件】
  + 【重要】Web平台 调整 vue版本由3.2.47升级为3.4.21，支持defineOptions、defineModel、toValue等新特性
  + Web平台 修复 vue3版本 scroll-view无法使用自定义下拉刷新的Bug
* 【uni-app-x】
  + 【重要】新增 编译到iOS平台
  + 【重要】Web平台 调整 vue版本由3.2.47升级为3.4.21，支持defineOptions、defineModel、toValue等新特性
  + Web平台 新增 scroll-view、list-view支持自定义下拉刷新 [详情](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html)
  + Web平台 新增 list-view支持下拉刷新相关属性、事件 [详情](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html)
  + Web平台 新增 页面样式及globalStyle支持backgroundColorContent [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-globalstyle)
  + Web平台 修复 scroll-view组件下拉刷新相关事件缺少dy属性的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=932)
  + Web平台 修复 navigator组件内子元素部分样式无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1025)
  + Web平台 修复 input、textarea组件内maxlength无法限制uts内设置的值的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1204)
  + Web平台 调整 textarea、input maxlength属性调整为传入非法值时不限制长度，默认调整为不限制长度
  + Web平台 调整 progress组件percent属性传入非法值时显示为0%，此前为NaN
  + Web平台 调整 内置组件、页面容器默认z-index由auto调整为0
  + Web平台 调整 body的font-family调整为`"-apple-system", HelveticaNeue;`，iOS上与系统字体保持一致
  + Web平台 调整 组件 switch 关闭时的背景色由 rgba(0,0,0,.1) 调整为 #e9e9ea
  + App-Android平台 新增 computed 支持类型自动推导 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=833)
  + App-Android平台 新增 v-for 指令支持循环Map、Set对象 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1200)
  + App-Android平台 新增 组件 nested-scroll-header、nested-scroll-body [详情](https://doc.dcloud.net.cn/uni-app-x/component/nested-scroll-header.html)
  + App-Android平台 新增 组件 scroll-view 支持 type 属性设置 `nested` 嵌套模式 [详情](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html#nested-scroll-view)
  + App-Android平台 新增 组件 web-view 支持 horizontalScrollBarAccess、verticalScrollBarAccess 属性设置是否显示横向、竖向滚动条 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=598)
  + App-Android平台 新增 API uni.requestPayment 支持微信支付 [详情](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html)
  + App-Android平台 新增 CSS transition-property 支持 `all` 和 `none`，默认值调整为 `all`
  + App-Android平台 修复 静态引入 static 目录中的只读资源，编译可能报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=992)
  + App-Android平台 修复 uts 插件内 easycom 组件不能正常使用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1034)
  + App-Android平台 修复 复杂的响应式对象修改后可能不触发页面渲染的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1123)
  + App-Android平台 修复 模板上文本插值Map、Set类型不显示实际内容的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1182)
  + App-Android平台 修复 defineProps 定义 any 类型属性时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1198)
  + App-Android平台 修复 组件 list-view 的 show-scrollbar 属性默认不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1050)
  + App-Android平台 修复 组件 input、textarea 未设置 placeholder 时设置 placeholder-style 可能引起异常崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1042)
  + App-Android平台 修复 组件 input、textarea 在 scroll-view 中获取焦点可能被弹出软键盘遮挡的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1128)
  + App-Android平台 修复 组件 input、textarea 的 keyboardheightchange 事件返回的键盘高度可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1158)
  + App-Android平台 修复 组件 input 设置 password 属性先于 value 属性可能导致 value 不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=990)
  + App-Android平台 修复 组件 web-view 加载的网页中 `<input type="file"/>` 文件选择不支持 multiple 属性的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=541)
  + App-Android平台 修复 组件 web-view 加载网页默认无法显示全部宽度且无法缩放的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1047)
  + App-Android平台 修复 组件 video 无法加载本地绝对路径资源的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=786)
  + App-Android平台 修复 组件 video 设置 header 属性无效Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1210)
  + App-Android平台 修复 CSS background-image 属性动态修改不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1160)
  + App-Android平台 修复 CSS font-size 属性动态修改后文本高度可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=377)
  + App-Android平台 修复 CSS z-index 可能引发下标越界异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1077)
  + App-Android平台 修复 CSS white-space 属性为 nowrap 时 text-overflow 的 ellipsis 效果可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=959)
  + App-Android平台 修复 Windows 系统 本机不含 vcruntime 时编译报错的Bug [详情](https://ask.dcloud.net.cn/question/187931)
  + App-Android平台 调整 组件 switch 关闭时的背景色由 #e5e5e5 调整为 #e9e9ea
  + uni-ui 新增 `<uni-recycle-view>`虚拟长列表组件，解决长列表初始化卡顿和内存占用问题 [详见](https://ext.dcloud.net.cn/plugin?id=17385)
* 【uts插件】
  + 编译器 修复 Windows 平台 编译器相关动态库没有数字签名导致可能被某些防病毒软件拦截进而导致编译失败的Bug
  + Web平台 修复 解构时默认值无法覆盖null的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1076)
  + App平台 修复 interface 中可选属性可能编译不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1202)
  + App-Android平台 修复 声明 UTSJSONObject 类型后，无法二次赋值的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=851)
  + App-Android平台 修复 switch 语句 default 语句仅包含 break 时，编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=852)
  + App-Android平台 修复 String.match 与web平台不一致的Bug [详情]( https://issues.dcloud.net.cn/pages/issues/detail?id=835)
  + App-Android平台 修复 RegExp.exec 匹配的捕获组结果与web平台不一致的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=954)
* 【App插件(含5+App和uni-app的App端)】
  + uni-AD模块 调整 广告对象 getProvider 方法和激励视频对象 onVerify 回调事件中返回的广告提供商标识取值范围为 china、global
  + Android平台 更新 地图/定位模块 高德地图 SDK 为10.0.600 版，高德定位 SDK 为 6.4.3 版，解决某些情况定位失败的Bug [详情](https://ask.dcloud.net.cn/question/187119)
  + Android平台 更新 UniPush使用的个推核心组件 SDK 为 3.2.13.0 版；个推SDK为 3.3.5.0 版，解决合规检测报频繁收集信息的Bug [详情](https://ask.dcloud.net.cn/question/188266)
  + Android平台 修复 手动杀死进程可能会报 java.util.ConcurrentModificationException 的Bug [详情](https://ask.dcloud.net.cn/question/186990)
  + Android平台 修复 plus.downloader.createDownload 在部分设备设置文件保存路径非法时，下载成功后返回的 filename 不正确的Bug [详情](https://ask.dcloud.net.cn/question/188982)
  + iOS平台 更新 uni-AD SDK 腾讯优量汇SDK为 4.14.70 版；快手广告SDK为 3.3.63 版，快手内容联盟SDK为 3.3.61 版；穿山甲&GroMore SDK为 6.0.0.5 版；Sigmob广告联盟SDK为 4.12.4 版；百度百青藤广告SDK为 5.34 版
  + iOS平台 修复 原生插件中使用共享文件报无权限错误的Bug
* 【uniCloud】
  + 修复 4.07 版本引出的无法上传至前端网页托管的Bug [详情](https://ask.dcloud.net.cn/question/188503)

#### 4.07.2024032807-alpha
* 【uni-app 插件】
  + Web平台、APP平台 修复 4.06版引出的 button 更改 border-radius 后边框样式不对的Bug [详情](https://ask.dcloud.net.cn/question/188417)
* 【uni-app x 插件】
  + Web平台 修复 4.06版引出的 button 更改 border-radius 后边框样式不对的Bug
* 【uniCloud】
  + 修复 上传/下载所有公共模块时HBuilderX控制台无响应的Bug [详情](https://ask.dcloud.net.cn/question/188162)
  + 修复 Web发行目录从H5调整为Web后，导致的上传前端网页托管失败的Bug

#### 4.05.2024032021-alpha
* 【uni-app-x】
  + Web平台 修复 部分情况下picker-view、picker-view-column值显示错误并额外触发了change事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1009)
  + App-Android平台 修复 uni.createSelectorQuery 获取的组件对象调用 boundingClientRect 返回数据不准的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=948)

#### 4.04.2024031519-alpha
* 【uni-app】
  + Web平台 修复 iOS safari手势返回期间上一页面为空白的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=941)
  + 微信小程序平台 新增 `uni.requestVirtualPayment` 虚拟支付API [详情](https://uniapp.dcloud.net.cn/api/plugins/virtualPayment.html)
  + 修复 4.0.2 引发的 vue3 项目 uts 加密插件编译报错的Bug
  + App平台 修复 wgt热更新后无法调用 uts 加密插件的Bug [详情](https://ask.dcloud.net.cn/question/187762)
  + App平台 修复 制作应用 wgt 包时包含 uts 插件的Bug [详情](https://ask.dcloud.net.cn/question/181181)
  + App平台 修复 uni.getFileSystemManager 错误提示信息不准确的Bug [详情](https://ask.dcloud.net.cn/question/184457)
  + App-Android平台 修复 应用非首次启动可能偶发崩溃的Bug
  + App-Android平台 修复 uni.getStorageSync 特定情况可能丢失字符的Bug [详情](https://ask.dcloud.net.cn/question/187167)
  + App-Android平台 修复 nvue textarea 组件特定情况可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/187514)
* 【uni-app x 插件】
  + Web平台 优化 减少编译耗时
  + Web平台 修复 uni.rpx2px在项目发行后调用报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=930)
  + Web平台 修复 instanceof UniXXXElement 报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=940)
  + App-Android平台 修复 组件 text 内容从非空设置为空文本无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=950)
  + App-Android平台 修复 组件 text 设置高度后无法修改文本内容的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=981)
  + App-Android平台 修复 4.02版引出的 组件 button 属性样式部分情况可能无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=900)
  + App-Android平台 修复 4.02版引出的 组件 button 组件 hover-class 设置为 none 无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=958)
* 【uniCloud 插件】
  + 【重要】uni-pay 支持微信小程序虚拟支付 [详情](https://doc.dcloud.net.cn/uniCloud/uni-pay/wxpay-virtual.html)
  + 新增 插件 uni-pay-x，uni-app x 版本的 uni-pay [详情](https://doc.dcloud.net.cn/uniCloud/uni-pay/uni-app-x.html)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 地图/定位模块 高德地图 SDK 为 9.8.3 版，高德定位 SDK 为 6.4.2 版，解决无法合规检测的问题 [详情](https://ask.dcloud.net.cn/question/187161)

#### 4.03.2024031101-alpha
* 【uni-app 插件】
  + Web平台 修复 4.02 引发的 Vue3 项目 .scss 文件条件编译失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=912)
* 【uni-app x 插件】
  + 修复 3.98 引发的 pages.json 检查页面文件是否存在时，部分条件编译不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=909)
  + Web平台 调整 运行到浏览器时将script标签内代码编译为可以在低版本浏览器运行的兼容代码
  + App-Android平台 修复 APP-PLUS 条件编译的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=910)
  + App-Android平台 修复 4.02版引出的 组件 button 的 disabled 属性在部分场景设置无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=900)
  + App-Android平台 修复 4.02版引出的 组件 button 的对象类型 `UniButtonElement` 编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=907)
* 【uniCloud 插件】
  + 修复 3.98版本引发的 cli项目下载云函数或公共模块时无法下载到指定位置的bug
  + 修复 4.02版本引发的 上传公共模块时不会自动安装依赖的bug
  + 优化 4.02版本引发的 uni_modules 插件的 package.json 配置的云厂商与uniCloud目录绑定的云厂商不匹配导致该插件不显示的Bug [详情](https://ask.dcloud.net.cn/question/187371)

#### 4.02.2024030621-alpha
* 【uni-app 插件】
  + App平台 修复 Vue2 Cli 项目 nvue 页面编译报错的Bug [详情](https://ask.dcloud.net.cn/question/186784)
  + App-Android平台 新增 API uni.getChannelManager，获取通知渠道管理器 [详情](https://uniapp.dcloud.net.cn/api/plugins/push.html#getChannelManager)
  + App-Android平台 修复 首次安装调用 uni.scanCode 可能会出现黑屏的Bug [详情](https://ask.dcloud.net.cn/question/185913)
  + Web平台 修复 Vue3 项目自动化测试 element.input 方法报错的Bug [详情](https://ask.dcloud.net.cn/question/184815)
  + 抖音小程序平台 新增 组件支持 virtualHost 配置 [详情](https://uniapp.dcloud.net.cn/tutorial/vue3-api.html#其他配置)
  + 抖音小程序平台 修复 Vue3 项目使用插件时属性丢失的Bug [详情](https://ask.dcloud.net.cn/question/185513)
  + 抖音小程序平台 修复 Vue2 项目使用国际化报错的Bug [详情](https://ask.dcloud.net.cn/question/161008)
* 【uni-app x 插件】
  + 新增 API uni.rpx2px [详情](https://doc.dcloud.net.cn/uni-app-x/api/rpx2px.html)
  + 调整 pages.json 中配置的页面路径大小写敏感
  + 修复 UniElement tagName、nodeName获取内置组件的标签与组件名不一致的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=766)
  + 修复 vue $parent未跳过内置组件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=773)
  + Web平台 新增 组件 list-view、list-item组件 [详情](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html)
  + Web平台 新增 组件 sticky-section、sticky-header组件 [详情](https://doc.dcloud.net.cn/uni-app-x/component/sticky.html)
  + Web平台 修复 部分场景下类型推断时未将对象字面量作为UTSJSONObject使用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=819)
  + Web平台 修复 类型字面量内带有any[]时无法正确创建实例的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=767)
  + Web平台 修复 非全局声明的type在变量声明为此类型时不会自动创建实例的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=782)
  + Web平台 修复 vue $forceUpdate未能更新内置组件插槽内容的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=776)
  + Web平台 修复 使用热更新uts文件内新导出的type时报找不到导出的type的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=823)
  + Web平台 修复 API request、uploadFile、downloadFile接口timeout参数传null时会直接超时的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=805)
  + App-Android平台 新增 API uni.requestPayment，支持支付宝支付 [详情](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html)
  + App-Android平台 修复 组件 button 渲染宽高与Web端不一致的问题 [详情](https://doc.dcloud.net.cn/uni-app-x/component/button.html)
  + App-Android平台 修复 组件 text 无文本内容时组件宽度不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=777)
  + App-Android平台 修复 组件 text 子组件设置 background-color 样式无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=276)
  + App-Android平台 修复 组件 text 子组件无法修改文本内容的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=562)
  + App-Android平台 修复 组件 image 请求网络图片无法共享cookie的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=820)
  + App-Android平台 修复 组件 list-item 动态调整宽高不生效的Bug [详情](https://ask.dcloud.net.cn/question/185517)
  + App-Android平台 修复 组件 list-view 部分场景修改refresher-triggered属性值域可能不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=796)
  + App-Android平台 修复 组件 list-view 部分场景删除插槽子元素报错Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=769)
  + App-Android平台 修复 CSS 4.0版本引出的 position 属性设置为 fixed 后 z-index 属性无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=726)
  + App-Android平台 修复 tabBar 配置 pagePath 有误时点击 tab 切换崩溃的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=779)
  + App-Android平台 修复 使用 UTSAndroid.getJavaClass 获取导入的类时可能编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=809)
  + App-Android平台 优化 type类型响应式对象的构造方式，避免使用反射，优化性能
  + App-Android平台 修复 关联其他项目的服务空间并使用其中的云对象时报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=817)
  + App-Android平台 修复 unicloud-db组件，使用 setup 语法，作用域插槽中无法使用data的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=761)
  + App-Android平台 修复 云对象返回数字错误码时报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=840)
  + App-Android平台 更新 云端打包环境 compileSdkVersion 为 34
* 【uts插件】
  + Android平台 新增 `typeof` 操作符支持平台专有字符类型 `Char` [详情](https://doc.dcloud.net.cn/uni-app-x/uts/operator.html#typeof)
  + App-Android平台 修复 局部定义 class 时，构造函数使用 super 报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=802)
  + App-Android平台 新增 interface.uts 文件支持 export declare 语法 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=744)
  + App-Android平台 修复 import * as Types from 'xxx' 导入 type 类型编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=696)
  + App-iOS平台 新增 @UTSiOS.keyword('fileprivate') 注解，用于解决自定义swift类，属性的访问控制
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 uni-AD 快手广告SDK为 3.3.61 版；Sigmob广告联盟SDK为 4.15.1 版；百度百青藤广告SDK为 9.34 版
  + Android平台 更新 UniPush 谷歌渠道 使用的个推 SDK 为 4.4.3.8 版，解决可能无法通过 GooglePlay 审核的问题 [详情](https://ask.dcloud.net.cn/question/186384)
  + Android平台 更新 支付模块 Paypal SDK 为 1.2.1 版，解决谷歌商店审核失败的问题
  + iOS平台 修复 应用沙盒 tmp 缓存目录没有及时清理的Bug [详情](https://ask.dcloud.net.cn/question/186250)
  + iOS平台 修复 应用内存占用过高时系统终止 WKWebview 进程导致页面白屏无法恢复的Bug [详情](https://ask.dcloud.net.cn/question/186341)
  + iOS平台 更新 云端打包环境 XCode 为 15.2 版、iOS SDK 为 17.2 版
* 【uniCloud】
  + 新增 `uniCloud.httpProxyForEip.get` API支持 headers 字段
  + 修复 上传云函数时安装依赖失败后仍然会上传云函数的Bug
  + 修复 上传公共模块时不会剔除 node_modules 目录的Bug
  + 修复 本地运行时无法使用地理位置查询/索引API的Bug
  + 修复 同时存在支付宝小程序云、阿里云、腾讯云空间时，虚拟目录无法正确显示的Bug
  + 修复 修复项目关闭后，再次打开云空间未显示关联服务空间的Bug [详情](https://ask.dcloud.net.cn/question/186741)
  + 修复 关联其他项目运行时unicloud目录识别错误的Bug
  + 修复 未登录状态下点击关联服务空间无响应的Bug
  + 调整 阿里云 url化请求体大小限制由1MB调整为2MB，响应体大小限制由1MB调整为2MB

#### 4.01.2024020211-alpha
* 【uni-app 插件】
  + Web平台 修复 Vue3 项目 ssr 运行报错的Bug [详情](https://ask.dcloud.net.cn/question/185205)
  + Web平台 修复 Vue3 项目 ssr 打包报错的Bug [详情](https://ask.dcloud.net.cn/question/184125)
  + Web平台 调整 navigator组件真实渲染出的节点中a标签由uni-navigator标签外部移动到uni-navigator标签内部
  + App平台 修复 Vue2 项目 nvue 页面引用不到非 static 目录静态资源的Bug
* 【uni-app x 插件】
  + Web平台 新增 绑定class、style时支持Map类型 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/#class-%E4%B8%8E-style-%E7%BB%91%E5%AE%9A)
  + Web平台 调整 类型校验失败由报错调整为警告且不中断编译
  + Web平台 调整 navigator组件真实渲染出的节点中a标签由uni-navigator标签外部移动到uni-navigator标签内部
  + Web平台 调整 getStorage、getStorageSync接口返回对象类型数据时转化为UTSJSONObject类型
  + Web平台 调整 request接口返回的data转化为UTSJSONObject类型
  + Web平台 修复 未使用到的easycom组件内包含错误或web端不支持的用法导致编译报错的Bug
  + Web平台 修复 部分场景下对象字面量as为指定类型时报错的Bug
  + Web平台 修复 引用.uvue文件时未带后缀提示找不到模块的Bug
  + Web平台 修复 部分场景下uts文件内使用条件编译无效的Bug
  + App-Android平台 新增 组件 公共属性 `android-layer-type` 支持配置视图渲染模型，开启硬件加速 [详情](https://doc.dcloud.net.cn/uni-app-x/component/common.html#android-layer-type)
  + App-Android平台 修复 特殊元素(list-view等)删除插槽内子元素报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=388)
  + App-Android平台 修复 data 中定义的变量名，与外部导入的变量同名时，引发运行时报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=701)
  + App-Android平台 修复 pages.json 中使用条件编译时，可能报错 must contain at least 1 page 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=690)
  + App-Android平台 修复 4.0 引发的部分复杂场景运行时报错 Comparison method violates its general contract! 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=687)
  + App-Android平台 修复 仅使用 easycom 组件类型编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=678)
  + App-Android平台 修复 @import 引入的 scss 文件内部条件编译不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=671)
  + App-Android平台 修复 组件里import uts文件路径不对，但编译时不会指向正确的源码的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=275)
  + App-Android平台 修复 组件 input 默认高度计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=693)
  + App-Android平台 修复 组件 input 设置 value 属性后首次输入文字时 input 事件不触发的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=699)
  + App-Android平台 修复 组件 textarea 行高计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=695)
  + App-Android平台 修复 组件 textarea 多行滚动时不显示滚动条的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=694)
  + App-Android平台 修复 组件 input、textarea 获取焦点弹出的软键盘隐藏时关闭页面可能引起异常崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=716)
  + App-Android平台 修复 组件 image 的 src 属性设置 `file:///android_asset/` 格式图片路径无法正常显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=723)
  + App-Android平台 修复 组件 video 播放PCM音频格式的视频可能没有声音的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=713)
  + App-Android平台 修复 API uni.createSelectorQuery 无法查询根节点的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=672)
* 【uts插件】
  + App-Android平台 修复 async 方法参数数量超过一个时运行报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 视频播放控件 video 播放PCM音频格式的视频可能没有声音的Bug
* 【uniCloud】
  + 修复 3.97版本引发的安全网络客户端校验功能不可使用的Bug

#### 4.0.2024012711-alpha
* 【uni-app 插件】
  + App-Android平台 修复 uni.chooseLocation 安装后首次调用无法获取位置列表的Bug [详情](https://ask.dcloud.net.cn/question/183239)
  + App-Android平台 修复 nvue swiper 组件内嵌 swiper 设置 disable-touch 时外层 swiper 无法滑动的Bug
  + Web平台 新增 vue3 scroll-view 组件支持 show-scrollbar 属性
  + Web平台、App-Vue平台 新增 input 组件支持 cursor-color 属性 [详情](https://uniapp.dcloud.net.cn/component/input.html#input)
  + Web平台、App-Vue平台 新增 textarea 组件支持 cursor-color 属性 [详情](https://uniapp.dcloud.net.cn/component/textarea.html#textarea)
  + Web平台 修复 Vue2 项目打包后静态资源重复的Bug [详情](https://ask.dcloud.net.cn/question/184480)
  + Web平台 优化 vue3 项目 getCurrentPages() 返回 options 属性 [详情](https://ask.dcloud.net.cn/question/183580)
  + 小程序平台 修复 页面内有较大的 base64 字符时编译慢的Bug [详情](https://github.com/dcloudio/uni-app/issues/4661)
  + 微信小程序平台 修复 Vue2 项目 workers 配置为对象报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/4589)
  + 微信小程序平台 修复 Vue2 项目 class 换行导致小程编译报错的Bug [详情](https://ask.dcloud.net.cn/question/184192)
  + 抖音小程序平台 修复 rtc-room 组件属性无效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4627)
  + 支付宝小程序平台 修复 globalObjectMode 配置为 enable 编译报错的Bug [详情](https://ask.dcloud.net.cn/question/183499)
  + 支付宝小程序平台 修复 原生小程序组件传递 props 无效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4376)
* 【uni-app x 插件】
  + 【重要】新增 编译到Web平台 [详情](https://doc.dcloud.net.cn/uni-app-x/web/)
  + 【重要】App-Android平台 新增 vue 组合式 API [详情](https://doc.dcloud.net.cn/uni-app-x/vue/#composition-api)
  + 【重要】调整 组件事件类型名称增加 Uni 前缀，避免与浏览器全局事件冲突 [详情](https://doc.dcloud.net.cn/uni-app-x/component/common.html#rename-event-type)
  + 编译器 修复 pages.json 中 APP-ANDROID、APP-IOS 不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=523)
  + App-Android平台 新增 uni-ad 激励视频广告 [详情](https://doc.dcloud.net.cn/uni-app-x/api/create-rewarded-video-ad.html)
  + App-Android平台 新增 vue 内置组件 KeepAlive [详情](https://doc.dcloud.net.cn/uni-app-x/vue/#component)
  + App-Android平台 新增 vue 内置组件 Teleport [详情](https://doc.dcloud.net.cn/uni-app-x/vue/#component)
  + App-Android平台 新增 vue watch 支持 deep、immediate 配置 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/#options-api-compatibility)
  + App-Android平台 新增 vue 组件 props 支持字符串数组方式声明，此时所有 prop 类型为 any | null [详情](https://doc.dcloud.net.cn/uni-app-x/component/#props)
  + App-Android平台 新增 API 监听权限申请事件，适用于应用商店要求申请权限时弹出用途说明 [详情](https://doc.dcloud.net.cn/uni-app-x/api/create-request-permission-listener.html)
  + App-Android平台 新增 css变量 [详情](https://doc.dcloud.net.cn/uni-app-x/css/#variable)
  + App-Android平台 新增 CSS white-space [详情](https://doc.dcloud.net.cn/uni-app-x/css/white-space)
  + App-Android平台 新增 pages.json 中 backgroundColorContent 配置页面容器背景色 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-globalstyle)
  + App-Android平台 新增 组件 input、textarea 支持 hold-keyboard [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=291)
  + App-Android平台 新增 组件 input 的 blur 事件回调参数支持 cursor 属性 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=512)
  + App-Android平台 调整 二级页面导航栏标题文字居中显示
  + App-Android平台 调整 组件 scroll-view、list-view 设置横向或纵向滚动属性为 direction，设置回弹效果属性为 bounces [详情](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html)
  + App-Android平台 调整 组件 scroll-view、list-view 默认高度为子元素高度之和，即默认不出现滚动条，需通过 css 属性设置容器高度才会出现滚动条 [详情](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html#app%E5%B9%B3%E5%8F%B0)
  + App-Android平台 调整 组件 view 的 hover-class 按下状态在组件区域内移动不会取消，移动到组件区域外才会取消 [详情](https://doc.dcloud.net.cn/uni-app-x/component/view.html#app)
  + App-Android平台 调整 组件 click/tap 事件在组件区域内移动不会取消，移动到组件区域外才会取消 [详情](https://doc.dcloud.net.cn/uni-app-x/component/common.html#tap)
  + App-Android平台 调整 组件 text 渲染 baseline 计算逻辑，靠近浏览器渲染逻辑
  + App-Android平台 调整 组件 input、textarea 点击输入框外的屏幕，默认关闭软键盘
  + App-Android平台 调整 组件 input 的 font-size 默认值为 16px
  + App-Android平台 调整 组件 textarea 的 font-size 默认值为 16px，line-height 默认值为 1.2em，width 默认值为300px [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=492)
  + App-Android平台 调整 组件 web-view 默认宽高为100%
  + App-Android平台 调整 组件 web-view 网页加载完成事件名称 loaded 改为 load
  + App-Android平台 调整 组件 video 默认宽度为300px，高度为225px [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=457)
  + App-Android平台 调整 API uni.getSystemInfo、uni.getAppBaseInfo 返回的uni编译器版本属性命名中的`Compile`改为`Compiler` [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-system-info.html)
  + App-Android平台 调整 css transition-duration 动画时长不设置单位时不再当做毫秒，统一为web的策略，必须设置单位，无单位当做非法值，造成动画不生效 [详情](https://doc.dcloud.net.cn/uni-app-x/css/transition-duration.html)
  + App-Android平台 修复 template 非预期的将 object 编译为 map 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=244)
  + App-Android平台 修复 部分组件嵌套导致页面关闭时无法回收的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=535)
  + App-Android平台 修复 MuMu模拟器多次切换页面后再次进入白屏的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=436)
  + App-Android平台 修复 vue 不同组件同名props且default均为通过Function返回时，默认值被污染的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=374)
  + App-Android平台 修复 vue 组件配置 mixins，emits 丢失 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=348)
  + App-Android平台 修复 组件 scroll-view 设置 border 导致滚动视图显示不完整的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=510)
  + App-Android平台 修复 组件 scroll-view 动态修改 refresher-default-style 属性不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=641)
  + App-Android平台 修复 组件 scroll-view 的 show-scrollbar 属性默认值不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=648)
  + App-Android平台 修复 组件 scroll-view 开启下拉刷新，设置 padding 属性后滚动条位置异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=661)
  + App-Android平台 修复 组件 swiper 监听 animationfinish 事件可能不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=502)
  + App-Android平台 修复 组件 swiper 设置 autoplay 未设置 circluar 滚动到顶没有从头开始运行的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=556)
  + App-Android平台 修复 组件 swiper 相互嵌套时只能滚动外层 swiper 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=558)
  + App-Android平台 修复 组件 swiper 在 scroll-view 中滑动效果异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=500)
  + App-Android平台 修复 组件 list-view 嵌套在 scroll-view 中反复滚动后可能出现无法再滚动的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=289)
  + App-Android平台 修复 组件 list-view 设置隐藏再显示可能无法正常显示内容的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=283)
  + App-Android平台 修复 组件 sticky-header 在部分场景吸顶位置与父容器顶部位置存在偏移的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=323)
  + App-Android平台 修复 组件 text 多次更新后高度计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=563)
  + App-Android平台 修复 组件 input、textarea 在 list-view 中复用时内容异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=382)
  + App-Android平台 修复 组件 input、textarea 的 auto-focus 属性多次生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=491)
  + App-Android平台 修复 组件 input、textarea 的 cusor、selection-start、selection-end 属性多次设置不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=516)
  + App-Android平台 修复 组件 textarea 监听 focus 事件返回可能导致闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=609)
  + App-Android平台 修复 组件 textarea 设置 padding 尺寸不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=618)
  + App-Android平台 修复 组件 image mode 属性设置为 widthFix、heightFix 显示效果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=493)
  + App-Android平台 修复 组件 image 设置 border-radius 时 mode 属性失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=332)
  + App-Android平台 修复 组件 video 在 list-view 中使用可能出现异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=288)
  + App-Android平台 修复 组件 click/tap 事件在连续点击操作时因触发双击导致丢失事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=364)
  + App-Android平台 修复 CSS height 小于 padding 时排版高度计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=496)
  + App-Android平台 修复 CSS flex-basis 为百分比父节点存在 padding 时排版换行计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=352)
  + App-Android平台 修复 CSS flex 设置为 1 且最外层和叶子结点未设置高度时排版高度计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=497)
  + App-Android平台 修复 CSS position 设置为 fixed 节点相互嵌套时，动态更新内层节点不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=537)
  + App-Android平台 修复 CSS transition、transform 同时设置后动态修改 transform 可能不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=353)
  + App-Android平台 修复 CSS transition、transform 同时设置后在系统`开发者选项`中关闭所有动画 transform 可能不执行的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=634)
  + App-Android平台 修复 API uni.toast、uni.showModal等交互反馈弹窗在 onShow 生命周期调用可能无法正常显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=520)
  + App-Android平台 修复 API uni.request、uni.uploadFile、uni.downloadFile 等网络请求无法共享 cookie 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=335)
  + App-Android平台 修复 API uni.showModal、uni.showActionSheet 交互反馈弹窗通过手势操作关闭不触发 `complete` 回调的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=597)
  + App-Android平台 修复 API uni.showModal 弹窗在英文系统中 `确认` 按钮上的文字不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=589)
  + App-Android平台 修复 API Event 事件对象通过 JSON.stringify 输出字符串内容不全的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=495)
  + App-Android平台 修复 API uni.saveImageToPhotosAlbum 可能无法保存 `static` 目录下图片的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=525)
  + App-Android平台 修复 API uni.previewImage 可能无法保存 `static` 目录下图片的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=524)
  + App-Android平台 修复 API uni.getWindowInfo 在页面 onReady 生命周期获取 windowHeight 可能不准确的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=260)
  + App-Android平台 修复 API uni.getStorageSync 获取保存为 json 格式字符串数据返回空字符串的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=572)
  + App-Android平台 修复 DOM API UniElement 对象的 getBoundingClientRect() 方法，在页面 onResize 生命周期获取元素的 DOMRect 信息可能异常的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=266)
  + App-Android平台 修复 DOM API 部分组件无法通过 getAttribute 方法获取 value 的Bug
* 【uts插件】
  + 编译器 修复 特殊值域string构成的数组类型编译报错的Bug
  + App-Android平台 新增 UTSAndroid.getJavaClass 获取 Android 原生对象的 Java Class [详情](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#getjavaclass)
  + App-Android平台 修复 Date 无法解析日期时间格式字符串（如“2024-01-09 22:00:00”）的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=499)
  + App-Android平台 修复 typeof 运算符返回 NaN、INFINITY 的数据类型不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=557)
  + App-Android平台 修复 Array.includes 判断元素类型为 number 时可能返回结果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=559)
  + App-Android平台 修复 Number.toString 不支持指定转换进制基数的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=308)
  + App-Android平台 修复 Number.toFixed 方法在 android6.0 以下设备返回值异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=233)
  + App-Android平台 修复 不同属性名编译可能冲突报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=568)
  + App-Android平台 修复 编译告警 No cast needed 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=527)
  + App-Android平台 修复 当顶部存在多个相同变量名时可能存在访问错乱的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=334)
  + App-Android平台 修复 部分情况下正则表达式转换错误的Bug [详情](https://ask.dcloud.net.cn/question/183344)
  + App-Android平台 优化 类型不匹配时的错误提示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=358)
  + App-Android平台 修复 interface 中泛型方法编译不正确的Bug
  + App-Android、App-iOS 平台 修复 interface 中 readonly 属性不生效的Bug
  + App-Android、App-iOS 平台 修复 负数小数点0可能被移除的问题，比如 -1.0 => -1
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 新增 监听权限申请事件，适用于应用商店要求申请权限时弹出用途说明 [详情](https://uniapp.dcloud.net.cn/api/system/create-request-permission-listener)
  + Android平台 修复 合规检测可能报`多次重复通过getRunningTasks读取任务列表`的Bug [详情](https://ask.dcloud.net.cn/question/185028)
  + Android平台 修复 OPPO应用市场和腾讯管家可能误报`含数字天堂(dcloud)广告插件`的Bug [详情](https://ask.dcloud.net.cn/question/160501)
  + Android平台 修复 模块配置中勾选`facialrecognitionverify(实人认证)`后wgt升级提示未配置此模块的Bug [详情](https://ask.dcloud.net.cn/question/184088)
  + Android平台 修复 视频播放控件 video 退出全屏后软键盘可能无法弹出的Bug [详情](https://ask.dcloud.net.cn/question/183340)
  + iOS平台 新增 一键登录 支持设置关闭按钮的宽高
  + iOS平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备设置 allowDuplicates 为 false 时设备数据未更新的Bug [详情](https://ask.dcloud.net.cn/question/182692)
* 【uniCloud】
  + 新增 支付宝小程序云 云数据库支持地理位置查询
  + 新增 运行云函数时控制台可以点击云函数名称跳转到对应的云函数
  + 新增 云函数本地node和云端node版本不一致时，上传云函数将提示本地node版本与云端node版本
  + 修复 JQL管理器 不执行选中的语句的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=534)
  + 修复 云函数只能关联 uni_modules 下的公共函数的Bug [详情](https://ask.dcloud.net.cn/question/184434)
  + 修复 前端网页托管 上传没有自动选择当前项目绑定的服务空间的Bug
  + 修复 关联服务空间切换云厂商时存在关联项目仍然可以切换的Bug
  + 修复 "上传schema扩展js的配置"超时时间太短，导致上传失败的Bug
  + 修复 cli 创建的项目无法上传schema的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=592)
  + 修复 支付宝小程序云 云数据库JQL连表查询报错的Bug [详情](https://ask.dcloud.net.cn/question/185177)
  + 修复 支付宝小程序云 云数据库使用原生MongoDB $查询无效的Bug [详情](https://ask.dcloud.net.cn/question/183811)
  + 修复 支付宝小程序云 Redis本地调试无法运行的Bug

#### 3.99.2023121601-alpha
* 【uni-app 插件】
  + 新增 编译器 nvue + vue2 支持使用ts开发。方便插件作者的库全面升级为ts。
  + Web平台、App-Vue平台 新增 radio 组件支持 backgroundColor、borderColor、activeBackgroundColor、activeBorderColor、iconColor 属性  [详情](https://uniapp.dcloud.net.cn/component/radio.html#radio)
  + Web平台、App-Vue平台 新增 checkbox 组件支持 backgroundColor、borderColor、activeBackgroundColor、activeBorderColor、iconColor 属性 [详情](https://uniapp.dcloud.net.cn/component/checkbox.html#checkbox)
  + Web平台 新增 Vue3 项目支持百度地图 [详情](https://uniapp.dcloud.net.cn/collocation/manifest#h5sdkconfig)
  + Web平台 修复 Vue3 CLI 创建的项目打包后多根节点组件属性丢失的Bug [详情](https://ask.dcloud.net.cn/question/182569)
  + Web平台 修复 map 组件使用高德地图 circles 的 fillColor、color 属性设置透明度无效的Bug [详情](https://ask.dcloud.net.cn/question/159809)
  + App-Android平台 修复 uni.downloadFile 下载完成发后会多触发一次 onProgressUpdate 事件的Bug
  + App平台 修复 vite.config.js 配置 target 为 esnext 时 nvue 页面报错的Bug [详情](https://ask.dcloud.net.cn/question/183180)
  + 小程序平台 修复 Vue3 项目 script setup 中 onError 无效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4276)
  + 小程序平台 修复 Vue3 项目插槽内容为单根节点时 v-if 无效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4486)
  + 支付宝小程序平台 新增 组件支持 styleIsolation 配置，默认值 apply-shared [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#mp-alipay)
  + 飞书小程序平台 修复 Vue3 项目作用域插槽不显示内容的Bug [详情](https://ask.dcloud.net.cn/question/181927)
* 【uni-app x插件】
  + 修复 编译器 部分情况下报错信息未回溯到源码的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=246) [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=253) [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=264)
  + 修复 编译器 组件递归使用时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=225)
  + 修复 应用 onLaunch 生命周期调用 route API 异常的Bug
  + 新增 vue框架 支持 app.use 注册 vue 插件 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#app-instance)
  + 新增 vue框架 app.config.globalProperties 注册全局属性 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#app-instance)
  + 新增 vue框架 动态组件 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#special-elements)
  + 新增 vue框架 provide/inject 用于组件通信 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#composition-options)
  + 新增 vue框架 mixin 混入 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#composition-options)
  + 新增 vue框架 v-html 指令 [详情](https://doc.dcloud.net.cn/uni-app-x/component/index.html#directives)
  + 新增 vue框架 v-once 指令、v-memo 指令、v-pre 指令 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#directives)
  + 新增 vue框架 componentInstance.$forceUpdate [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#component-instance)
  + 新增 vue框架 支持 render 函数 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#rendering-options)
  + 新增 全局变量 globalData [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#globaldata)
  + 新增 splash 在 manifest.json 中配置启动封面 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-splashscreen.html)
  + 新增 uni-ad 开屏广告 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad)
  + 新增 组件 input 的属性 cursor-color，用于调整光标颜色 [详情](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)
  + 新增 API uni.getUniverifyManager，App一键登陆 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html)
  + 新增 API uni.getFileSystemManager，本地文件管理 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html)
  + 优化 规范了文件系统使用，对cache文件进行了详细约定 [详情](https://doc.dcloud.net.cn/uni-app-x/api/file-system-spec.html)
  + 新增 API uni-push 支持荣耀厂商推送
  + 修复 API uni.toast、uni.showModal等交互反馈弹窗在 onReady 生命周期前调用可能无法正常显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=312))
  + 补齐 CSS background-image 的 linear-gradient 渐变方向支持 to bottom left 、to top right [详情](https://doc.dcloud.net.cn/uni-app-x/css/background-image.html)
  + 修复 CSS 先后设置 box-shadow 与 border 属性导致后设置的样式不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=280)
  + 修复 CSS z-index 属性可能引发下标越界异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=215)
  + 修复 CSS position 设置为 fixed 时 z-index 可能不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=274)
  + 修复 CSS transition 初始值为百分比时动态设置 length 值动画效果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=262)
  + 修复 CSS transition-property 属性值动态更新为 background-color 时不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=298)
  + 修复 CSS transform-origin 在设置 transition-property 为 transform 时不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=299)
  + 修复 组件 text 在某些情况设置 max-width 后高度不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=257)
  + 修复 组件 video 无法播放本地m3u8文件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=229)
  + 修复 组件 list-view 无法通过 scroll-into-view 属性滚动到 sticky-header 组件位置的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=261)
  + 修复 组件 list-item 被复用后 click 事件无法正常触发的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=271)
  + 修复 组件 view 设置 overflow 为 visible 后需同时对父元素设置 overflow 为 visible 才能生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=259)
  + 修复 组件 view 设置 overflow 为 hidden 后子元素显示区域可能占用 border 边框区域的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=304)
  + 修复 TouchEvent 事件在超出父视图可视区域后 screenX、screenY 属性值可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=245)
  + 修复 系统切换暗黑模式导致应用白屏
  + 优化 App打release包后，应用资源不再释放到存储卡，提升首次启动速度
  + 调整 API uni.installApk 安装apk，从ext api改为内置api [详情](https://doc.dcloud.net.cn/uni-app-x/api/install-apk.html)
  + 调整 App真机运行标准基座内置 uni-facialRecognitionVerify 实人认证模块，方便调试开发
  + 新增 ui库 uni-icons 支持uni-app x [详情](https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html)
  + 新增 ui库 uni-data-picker 支持uni-app x [详情](https://uniapp.dcloud.net.cn/component/uniui/uni-data-picker.html)
  + 新增 uni-cms 客户端插件 uni-cms-article [详情](https://ext.dcloud.net.cn/plugin?id=11701)
  + 更新 模板 App升级中心 支持在通知栏显示下载进度
  + 更新 模板 uni-id-pages-x v1.0.4+ 不再支持配置项：`config.needLogin`，改用uni-id-router替代 [详情](https://ext.dcloud.net.cn/plugin?name=uni-id-pages-x)
* 【uts插件】
  + 新增 Android平台 UTSAndroid.getFileProviderUrl，方便控制应用内文件对外分享 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#getfileprovideruri)
  + 修复 Android平台 本地 libs 三方依赖变更后不生效的Bug [详情](https://ask.dcloud.net.cn/question/182382)
  + 修复 多个解构语句可能编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=217)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 UniPush使用的个推核心组件 SDK 为 3.2.9.0 版，个推 SDK 为 3.3.3.0 版，支持荣耀厂商推送；谷歌渠道个推 SDK 为 4.4.3.6 版，适配Android14
  + iOS平台 更新 支付模块 微信 SDK 为 2.0.2 版；支付宝 SDK 为 15.8.6 版； Paypal SDK 为 1.2.0 版；Stripe SDK 为 23.18.2 版
  + iOS平台 更新 分享/登录模块 微信 SDK 为 2.0.2 版；QQ SDK 为 3.5.14 版；新浪微博 SDK 为 3.3.4 版；Facebook SDK 为 16.2.1 版；Google SDK 为 7.0.0 版
  + iOS平台 更新 地图/定位模块 高德地图 SDK 为 9.7.0 版，高德定位 SDK 为 2.10.0 版；百度地图 SDK 为 6.6.0 版，百度定位 SDK 为 2.0.9 版
  + iOS平台 更新 统计模块 友盟基础库 SDK 为 7.4.2 版，友盟统计 SDK 为 9.6.1 版；Google 统计 SDK 为 10.18.0 版
  + iOS平台 更新 uni-AD模块 Google AdMob SDK 为 10.13.0 版
  + iOS平台 修复 iPhone 15 设备无法获取手机型号的Bug [详情](https://ask.dcloud.net.cn/question/182298)
  + iOS平台 修复 iOS17系统视频播放控件 video 竖屏状态下进入全屏后退出全屏无法正常显示的Bug
* 【uniCloud】
  + 【重要】新增 七牛云扩展存储 价格更优、权限更灵活 [详情](https://uniapp.dcloud.net.cn/uniCloud/ext-storage/intro.html)
  + 新增 uni-app-x 项目支持 uniIdRouter [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id/summary.html#uni-id-router)
  + 新增 支付宝小程序云 支持云函数URL化
  + 补齐 支付宝小程序云 支持ide中运行JQL文件
  + 修复 支付宝小程序云 doc get 未兼容返回值为 null 的Bug [详情](https://ask.dcloud.net.cn/question/182457)
  + 修复 支付宝小程序云 数据库 where、match 查询对象时结果不正确的Bug
  + 修复 支付宝小程序云 云存储上传失败时，失败原因未在前端展示的Bug
  + 修复 支付宝小程序云 uni.getTempFileURL API 返回只有文件名的Bug
  + 修复 项目存在多个云厂商时，上传云函数识别云厂商错误的Bug
  + 修复 database 目录右击菜单“上传Schema扩展Js的配置”提示“请绑定服务空间”的Bug [详情](https://ask.dcloud.net.cn/question/182971)
  + 修复 创建 Schema 时，存在数据量大的 init_data.json 会导致无法正确下载的Bug
  + 修复 单独上传 uni-clientDB-actions 文件时会导致覆盖之前上传的 action 的Bug [详情](https://ask.dcloud.net.cn/question/182598)
  + 修复 上传云函数、创建schema、上传/下载校验函数时，如果存在时在弹窗中选择跳过将会跳过所有的Bug
  + 修复 初始化向导删除 db_init.json 文案的Bug
  + 优化 关联服务空间时可以跨不同云厂商切换服务空间

#### 3.98.2023112011-alpha
* 【uni-app】
  + 优化 编译时如 static 目录下存在被忽略的、非当前平台可用的目录，会给出强调提示 [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#static)
  + 修复 当项目使用了uni ext api时，且云打包同时勾选Android和iOS，发行后的安装包未能正确包含uni ext api插件的Bug [详情](https://ask.dcloud.net.cn/question/181295)
  + uni统计2 修复 支付宝小程序云报错 spaceAppId required 的bug [详情](https://ask.dcloud.net.cn/question/181491)
* 【uni-app x插件】
  + 优化 编译器 项目存在大量css代码时的编译速度
  + 新增 组件 sticky-section 分段吸顶 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/sticky.html#sticky-section)
  + 新增 API uni-push [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/push.html)
  + 新增 css position 属性设置为 absolute 时，margin 支持取值 auto
  + 调整 API uni.downloadFile 下载默认目录调整为app的cache目录下的uniDownloads目录，方便被rom的清理工具清理
  + 修复 组件 video 部分 event 回调没有属性值的Bug[详情](https://ask.dcloud.net.cn/question/180748)
  + 修复 组件 swiper current 属性可能不生效的Bug[详情](https://ask.dcloud.net.cn/question/181396)
  + 修复 组件 list-item 执行复用时遇到 text 组件嵌套可能会闪退的Bug
  + 修复 组件 checkbox-group 动态修改 checkbox 组件的 check 属性时，form 组件提交的 value 不正确的Bug
  + 修复 组件 radio-group 动态修改 radio 组件的 check 属性时，form 组件提交的 value 不正确的Bug
  + 修复 组件 slider 当父容器可滚动且显示 value 且当前滑块值为最大值时，无法直接在滑块的右半径上按下拖动的Bug
  + 修复 组件 scroll-view、list-view 同时设置 scroll-y、scroll-x属性为 false 时，组件的 touch 相关事件不触发的Bug
  + 修复 easycom组件类型在非uvue页面中使用报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=177)
  + 修复 3.97引出的 首页面 onLoad 生命周期调用 uni.showLoading 可能会崩溃的Bug [详情](https://ask.dcloud.net.cn/question/181567)
  + 修复 css 代码中引用非 static 目录的静态资源失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=231)
  + 调整 各项目模板的 index.html （web平台专有文件）中引入入口文件从 main.js 改为 main（即main.uts，后缀可省略）
  + 新增 模板 App升级中心兼容uni-app x [详见](https://ext.dcloud.net.cn/plugin?id=4542)
  + 新增 模板 uni-id-pages-x [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id/app-x.html)
* 【uts插件】
  + 优化 异步函数在 uni-app x 中使用时默认与框架运行在同一线程
  + 修复 部分位运算组合使用时优先级不正确的Bug
  + 修复 App-Android平台 Array join 返回值与 web 不一致的Bug
  + 修复 自定义基座真机运行时hooksClass 相关回调重复调用的Bug
  + 修复 App-iOS平台 使用 uts 插件（含ext api）后因底层依赖 uni-getDeviceInfo 有读取 IDFA 的代码导致可能影响应用上架审核的Bug
  + 修复 Number 参与的运算结果可能整型溢出的Bug
  + 修复 Number 参与的除法运算除数不能为0的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 uni-AD 模块 穿山甲&GroMore SDK为 5.7.0.5 版，解决加载广告可能会崩溃的Bug
* 【uniCloud】
  + 新增 uni-app-x 项目 支持uniCloud支付宝小程序云
  + 新增 支付宝小程序云初始化向导
  + 优化 基于模板新建schema/新建schemajs时，如模板是由多个文件组成的，允许用户选择创建具体的文件
  + 修复 初始化云数据库时，云端已存在集合触发的弹窗提示中第一个集合默认选中的Bug
  + 修复 打开db_init.json文件后，在编辑区域右键“初始化数据库”无法初始化的Bug
  + 修复 对uniCloud文件夹重命名后，不会更新uniCloud文件夹别名的Bug
  + 修复 上传公共模块时项目目录下不存在uni_modules目录导致无法上传的Bug
  + 修复 微信小程序平台上传文件到支付宝小程序云报错的Bug
  + 修复 支付宝小程序云 database update 操作返回值没有返回 updated 参数

#### 3.97.2023110504-alpha
* 【uni-app】
* 修复 vue3 项目 vite.config.js 配置 target 未作用到 renderjs 的Bug [详情](https://ask.dcloud.net.cn/question/180135)
* 修复 使用 uts 开发的 ext-api，升级更新 wgt 后，调用可能报错的Bug [详情](https://ask.dcloud.net.cn/question/180309)
* 【uni-app x插件】
* 新增 form 组件 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/form.html)
* 新增 uni.addInterceptor 拦截器，可拦截部分API [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/interceptor.html)
* 新增 uni.setNavigationBarTitle [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/set-navigation-bar-title.html)
* 新增 uni.getAppBaseInfo 获取获取包名、签名信息 [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/get-app-base-info.html)
* 新增 scroll-view 组件支持 nested-scroll-child，可将嵌套滚动的父滚动视图滚动余量传递给子视图 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/scroll-view.html)
* 新增 web-view 组件支持 download 事件，以及 loading、loaded 事件回调参数支持 url 属性 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/web-view.html)
* 新增 image、video 组件 src 支持非 static 目录的静态资源
* 新增 uvue 文件支持引入 ts 后缀的文件，等同于 uts 后缀
* 新增 App-Android平台 真机运行标准基座内置所有常用权限
* 修复 动态创建的根节点 class 样式丢失的Bug
* 修复 v-model 绑定的表达式包裹 () 运行失败的Bug
* 修复 在自定义组件中使用 class 定制另一个自定义组件根节点样式不生效的Bug
* 修复 data 中定义的 UTSJSONObject 修改后，不触发渲染的Bug
* 修复 uvue 页面文件名与 easycom 组件同名时渲染不正确Bug
* 修复 text 组件固定宽高时，设置 padding-left 和 padding-right 可能导致文本不居中的Bug
* 修复 text 组件设置 space 属性时，换行符 \n 有时无法正常显示的Bug
* 修复 swiper-item 组件 overflow 属性值为 hidden 时子元素未被裁剪的Bug
* 修复 uni.loadFontFace 多次请求同一网络字体时可能触发错误回调的Bug
* 修复 Element 的 style 调用 setProperty 更新 transition-duration 属性值不支持单位为s(秒)的Bug
* 修复 uni.toast、uni.showModal等交互反馈弹窗在onLoad等特定场景可能引起应用崩溃的Bug
* 修复 App-Android平台 uni.getLocation 使用系统定位获取位置信息慢的Bug
* 【uts插件】
* 修复 位移赋值类操作符，当右侧为复杂表达式，计算结果不正确的Bug
* 修复 相同interface、class定义了不同属性，方法调用失败的Bug
* 修复 App-Android平台 string 的 indexOf 方法参数类型不正确的Bug
* 新增 App-Android平台 uni-app x项目开发的uts原生组件定义的对外方法支持返回值
* 新增 App-iOS平台 真机运行适配支持 XCode15
* 新增 uts插件支持监听应用的原生生命周期回调函数 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#hooksclass)
* 新增 uts组件插件支持 NVUpdateStyles 生命周期监听组件的样式更新 [详情](https://uniapp.dcloud.net.cn/plugin/uts-component.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
* 调整 App-Android平台 uts组件插件内置对象 $androidContext 可为空 [详情](https://uniapp.dcloud.net.cn/plugin/uts-component.html#%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1%E5%92%8C%E5%87%BD%E6%95%B0)
* 修复 uni-app 项目 vue2 下开发uts插件报错可能未指向源码的Bug
* 【uniCloud】
* 【重要】新增支持支付宝小程序云，价格更便宜，限制更少，功能更强，支持域名备案
* 调整 `db_init.json` 按collection拆分，每个collection由schema.json、index.json、init_data.json三个文件描述

#### 3.94.2023102311-alpha
* 【uni-app x插件】
* 修复 多根节点时，uni.getElementById 获取失败的Bug
* 修复 web-view 组件点击网页中的输入框无法弹出软键盘的Bug
* 修复 scroll-view 组件的子组件滑动松手后惯性滚动时没有触发 nestedprescroll 事件的Bug
* 【uts插件】
* App-Android平台 更新 编译使用的 Android SDK 为 33
* App-Android平台 修复 number 的 toFixed 方法返回结果可能异常的Bug
* App-Android平台 修复 number 数据类型的位运算操作可能引起崩溃的Bug
* 【App插件(含5+App和uni-app的App端)】
* Android平台 修复 targetSdkVersion 设置为 33 在 Android13 设备保存图片到相册失败的Bug
* iOS平台 更新 uni-AD模块 百度百青藤广告SDK 为 5.324 版，解决信息流广告偶现无法关闭的Bug

#### 3.93.2023101913-alpha
* 【uni-app】
  + 微信小程序平台 修复 subscribe 组件属性无效的Bug [详情](https://ask.dcloud.net.cn/question/178893)
  + 支付宝小程序平台 修复 lottie 组件属性无效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4510)
  + 抖音小程序平台 修复 Vue2 项目运行到抖音 27.2.0 版本以上 $refs 失效的Bug [详情](https://github.com/dcloudio/uni-app/pull/4555)
* 【uni-app x插件】
  + 新增 sticky-header 吸顶组件 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/sticky-header.html)
  + 新增 unicloud-db 组件 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/unicloud-db.html)
  + 新增 takeSnapshot 截图api [详情](https://uniapp.dcloud.net.cn/uni-app-x/dom/element.html#takeSnapshot)
  + 新增 transitionend 动画结束事件 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/common.html#transitionend)
  + 新增 css border-*-width 属性值支持 thin | medium | thick
  + 新增 摇树优化 代码中未使用的内置模块（如video）会自动摇掉，减少安装包体积 [详情](https://uniapp.dcloud.net.cn/uni-app-x/manifest.html#treeShaking)
  + 优化 组件类型，内置组件和自定义组件可更方便的获取类型并调用组件方法 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/#methods)
  + 优化 uni.getElementById 支持泛型 [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/get-element.html)
  + 新增 list-view 组件的下拉刷新支持自定义样式
  + 修复 list-view 组件嵌套 swiper 时 swiper-item 可能重复显示的Bug
  + 修复 list-view 组件某些情况子节点位置错乱的Bug
  + 修复 video 组件在 Android8.0 以下设备使用硬解码可能引起崩溃的Bug
  + 修复 web-view 组件在 Android11 及以上设备可能无法加载本地网页的Bug
  + 修复 text 组件动态修改 display 属性可能出现渲染异常的Bug
  + 修复 css position 属性设置为 fixed 时，z-index 属性可能不生效的Bug
  + 修复 uvue 文件 methods 中定义的方法不能递归访问的Bug [详情](https://ask.dcloud.net.cn/question/179395)
  + 修复 目录包含特殊字符编译报错的Bug
  + 修复 ref 绑定节点移除时，$refs 数据未更新的Bug
* 【uts插件】
  + 新增 await 支持与 Promise 一同使用 [详情](https://uniapp.dcloud.net.cn/uts/operator.html#await)
  + 新增 UTSJSONObject 支持 hasOwnProperty [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/utsjsonobject.html#hasOwnProperty)
  + 修复 parseInt 解析超过整型数据范围返回值为 NaN 的Bug
  + App-Android平台 修复 console 输出对象信息中包含 private 属性和方法的Bug
  + App-Android平台 修复 number 数据类型在某些情况除法运行结果不正确的Bug
  + App-iOS平台 修复 vue 页面中调用 API 参数不支持 null 的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD SDK，对接双11预算，其中腾讯优量汇SDK Android为 4.542.1412 版，iOS为 4.14.45 版；穿山甲&GroMore SDK Android为 5.6.1.6 版，iOS为 5.7.0.4 版；快手广告SDK Android为 3.3.53.3 版，iOS为 3.3.53 版；快手内容联盟SDK Android为 3.3.53 版；Sigmob广告联盟SDK Android为 4.12.7 版，iOS为 4.10.0 版；百度百青藤广告SDK Android为 9.322 版，iOS为 5.322 版；华为广告SDK Android为 13.4.66.300 版
  + Android平台 调整 默认支持CPU类型为arm64-v8a，解决在华为新设备（如Mate60、X5）应用启动慢的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-android-abifilters.html#default)
  + Android平台 修复 上架 OPPO 应用市场可能提示`含数字天堂(dcloud)广告插件`的Bug [详情](https://ask.dcloud.net.cn/question/174958)
  + Android平台 修复 uni-AD 红包广告可能不展示的Bug
* 【uniCloud】
  + 优化 阿里云 callFunction、url化方式调用云函数最大超时时间由60秒调整为120秒
  + 新增 uni-app x项目 支持uniCloud调试

#### 3.92.2023101106-alpha
* 【uni-app】
* App平台 修复 云端打包 Storage 相关接口设置和获取内容异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/4556)
* App-iOS平台 修复 nvue 页面在 iOS17 设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/179220)
* 【uni-app x插件】
* App-Android平台 修复 uni-app-x 项目 onLoad 生命周期调用 route API 交互异常的Bug
* App-Android平台 修复 uni-app-x 项目非 tabBar 首页调用 uni.switchTab 应用崩溃的Bug
* 【uts插件】
* 修复 App-Android平台 vue 页面调用 API 传参对象中包含`Any`类型字段时可能出现异常的Bug
* 【App插件(含5+App和uni-app的App端)】
* Android平台 更新 Google 统计 SDK 为 21.3.0 版；Google 推送 SDK 为 23.2.1 版
* 【uniCloud】
* 修复 uni-app-x 项目 android 6.0 下调用 uniCloud 部分接口报错的Bug

#### 3.91.2023092719-alpha
* 【uni-app】
  + 新增 条件编译 提供 uniVersion 用于区分编译器版本。可用于插件适配不同版本的uni-app [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#uniVersion)
  + 新增 条件编译 static目录支持app、web子目录 [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#static)
  + App-Android平台 修复 uni.downloadFile 下载 wgt 文件可能没有文件后缀的Bug [详情](https://ask.dcloud.net.cn/question/176447)
  + App-iOS平台 修复 应用语言设置为英文时，nvue map 组件仍然显示中文的Bug [详情](https://ask.dcloud.net.cn/question/178833)
* 【uts插件】
  + 调整 通过数字字面量定义变量未申明类型时默认推导为 number 类型 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#autotypefornumber)
  + 调整 typeof 获取实例对象类型支持平台专有数字类型 Int、Float、Double等 [详情](https://uniapp.dcloud.net.cn/uts/operator.html#typeof)
  + 调整 instanceof 不再支持判断基础类型 number、string、boolean [详情](https://uniapp.dcloud.net.cn/uts/operator.html#instanceof)
  + 调整 JSON.parse 解析json字符串支持返回 Array、number、boolean、string 等数据类型 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/json.html#parse)
  + 新增 JSON.parse 支持传入泛型解析为指定 type 类型 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#%E6%8A%8Ajson%E5%AF%B9%E8%B1%A1%E8%BD%AC%E4%B8%BAtype)
  + 新增 UTSJSONObject 通过 getBoolean、getString、getNumber、getJSON 等方法访问属性，并支持传入 keyPath 格式参数 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#%E8%AE%BF%E9%97%AE-utsjsonobject-%E4%B8%AD%E7%9A%84%E5%B1%9E%E6%80%A7%E6%95%B0%E6%8D%AE)
  + 新增 number 类型支持与平台专有数字类型相互转换方法 toInt、toFloat、toDouble、from 等 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/number.html)
  + 新增 type 自定义类型支持 for...in 遍历 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#type)
  + 新增 Regexp 正则表达式支持 flags 属性 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/regexp.html#flags)
  + 新增 支持 encodeURI、decodeURI、encodeURIComponent、decodeURIComponent 等全局方法 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/global.html#encodeuri)
  + 新增 支持使用数值字面量和字符串字面量用作类型注解 [详情](https://uniapp.dcloud.net.cn/uts/literal.html)
  + 新增 uni.request 请求的 method 支持 OPTIONS [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/request.html)
  + 新增 App-Android平台 Promise [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/promise.html)
  + 新增 App-Android平台 支持 Array.fromNative 方法将原生 ByteArray/LongArray/ShortArray 类型转换为 Array
  + 修复 App-Android平台 修复部分场景下位运算符异常的Bug
  + 修复 App-iOS平台 class 实例对象调用带参数标签的方法编译报错的Bug
  + 补齐 App-iOS平台 支持 parseInt、parseFloat、isNan、isFinite 等全局方法
  + 补齐 App-iOS平台 string 类型支持 toString、valueOf 等方法
  + 补齐 App-iOS平台 Array 类型支持 toString、sort 等方法
  + 补齐 App-iOS平台 Date 类型支持 toString、 valueOf、toUTCString、toTimeString、toDateString、parse 等方法
  + 修复 App-iOS平台 函数参数不支持 class 数组类型的Bug
  + 修复 for 循环中包含复杂continue、break时，执行不正确的Bug
  + 修复 class 中无法访问外部定义的与类内部属性、方法同名的变量的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 Facebook 登录 SDK 为 16.1.3 版，解决登录异常的问题[详情](https://ask.dcloud.net.cn/question/175402)
  + iOS平台 更新 uni-AD模块 穿山甲广告联盟SDK 为 5.6.0.5 版；百度百青藤广告联盟SDK 为 5.321 版；Pangle SDK 为 5.5.0.4 版；Google AdMob SDK 为 10.9.0 版
  + iOS平台 修复 3.7.12版更新个验SDK引出的 一键登录弹窗模式下点击关闭不会触发 fail 回调的Bug [详情](https://ask.dcloud.net.cn/question/177253)
* 【uniCloud】
  + 新增 uni-app x 项目支持 [详情](https://uniapp.dcloud.net.cn/uni-app-x/unicloud.html)

#### 3.8.12.20230802-alpha
* 【uni-app】
  + App-iOS平台 修复 uni.setTabBarItem 动态设置 gif 后再设置普通图片可能不生效的Bug
* 【uniCloud】
  + 调整 uni-ai 非uni-ai计费网关调用百度接口由内测接口调整为[文心千帆大模型接口](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/jlil56u11)
  + 新增 uni-map-common 聚合多家地图供应商的云能力的公共模块 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-map-common.html)
  + 新增 unicloud-map 云端一体组件，主要用于显示数据库里的自定义POI，渲染在地图上。 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-map.html)
  + 新增 unicloud-map 地图管理端插件，提供了POI管理，可以在管理端可视化的标记POI。 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-map-admin.html)
  + 新增 unicloud-city-select 城市选择组件，方便用户在应用中快速选择目标城市的组件。 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-city-select.html)
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】Android平台 适配 支持 Android14 系统
  + Android平台 更新 云端打包环境 compileSdkVersion 为 33
  + iOS平台 更新 uni-AD模块 穿山甲广告联盟SDK 为 5.5.0.3 版；穿山甲GroMore SDK 为 5.3.6.0 版；百度百青藤广告联盟SDK 为 5.31 版；Sigmob广告联盟SDK 为 4.9.3 版
  + iOS平台 修复 uni-AD模块 穿山甲GroMore激励视频 close 事件返回的 isEnded 属性返回值可能不正确的Bug

#### 3.8.11.20230719-alpha
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 更新 uni-AD模块 腾讯优量汇广告联盟SDK 为 4.14.32 版

#### 3.8.10.20230714-alpha
* 【uni-app】
  + App-Android平台 修复 UniPush1.0 指定格式透传消息不会创建推送消息的Bug [详情](https://ask.dcloud.net.cn/question/173602)
  + App-iOS平台 修复 tabBar 使用 iconfont 字体图标时，样式可能不正常的Bug [详情](https://ask.dcloud.net.cn/question/173375)
  + 抖音小程序平台 新增 支持运行到指定页面
  + uts插件 App-Android平台 调整 UTSAndroid.getSystemPermissionDenied 返回值类型为Array [详情](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html#getsystempermissiondenied)
  + uts插件 App-iOS平台 新增 CocoaPods 依赖支持配置git地址 [详情](https://uniapp.dcloud.net.cn/plugin/uts-ios-cocoapods.html#usecocoapods)
  + uts插件 App-iOS平台 修复 调用方法参数中有多个自定义类型时会导致应用崩溃的Bug
* 【uniCloud】
  + 新增 阿里云定时触发时云函数入参对齐腾讯云 [详情](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#trigger-param)
  + 新增 云对象定时触发方法_timing增加入参 [详情](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#cloudobject)
  + 新增 uni-ai支持通过开发者自己的key调用讯飞星火大模型 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#get-llm-manager)
  + 新增 类似uni.request的http请求接口uniCloud.request [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-request)
  + 新增 类似uni.connectSocket的websocket客户端接口uniCloud.connectSocket [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#websocket-client)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 隐私政策提示框在部分设备横屏状态下按钮显示不全的Bug [详情](https://ask.dcloud.net.cn/question/173749)
  + Android平台 修复 扫码界面拒绝权限提示文字默认语言不正确的Bug [详情](https://ask.dcloud.net.cn/question/174032)
  + Android平台 修复 通过 scheme 可唤起应用打开外部链接的Bug [详情](https://ask.dcloud.net.cn/question/173349)
  + Android平台 修复 双击返回键退出应用后接收不到个推通道的推送消息的Bug
  + iOS平台 补齐 一键登录 icon 支持 width、height 属性设置 logo 图片的宽高 [文档](https://uniapp.dcloud.net.cn/univerify.html)
  + iOS平台 更新 uni-AD模块 腾讯优量汇广告联盟SDK 为 4.14.31 版；快手广告联盟SDK 为3.3.46 版；穿山甲广告联盟SDK 为 5.4.0.2 版本；穿山甲GroMore SDK 为 5.3.5.0 版；百度百青藤广告联盟SDK 为 5.30 版；Sigmob广告联盟SDK 为 4.9.1 版
  + iOS平台 修复 wgt热更新后整包覆盖安装引起应用启动白屏的Bug [详情](https://ask.dcloud.net.cn/question/163393)

#### 已归档的历史版本

[更多已归档版本的更新日志](release-note-alpha-archive.md)

<md-virtual key="release-note-alpha"/>
