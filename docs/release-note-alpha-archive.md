#### 3.8.7.20230628-alpha
* 【uni-app】
  + App平台 修复 3.8.5更新的uni-push2.0引出的 仅启用在线推送而不启用离线推送时，调用 `uni.getPushClientId` 会报`getPushClientId:fail init am error: no api impl found`的问题 [详情](https://ask.dcloud.net.cn/question/172659)
  + App-iOS平台 修复 tabBar 图标宽高不一致时显示会变形的Bug [详情](https://ask.dcloud.net.cn/question/172418)
  + uts插件 App-Android平台 Math.round 返回结果为浮点数的Bug
  + uts插件 App-Android平台 console.log 修复部分类型打印异常的Bug
  + uts插件 App-iOS平台 修复 Hello UTS 中腾讯定位插件没有网络时调用 getLocation 导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/172744)
* 【uniCloud】
  + 修复 jql语法 geoNear方法不传query参数时返回结果不正确的Bug [详情](https://ask.dcloud.net.cn/question/172404)
  + 新增 uni-ai chatCompletion 接口流式响应支持 optimizedMessage 事件，优化 message 触发频率，减少客户端卡顿 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 优化 plus.runtime.install 安装apk功能剥离为独立模块，云端打包勾选 google play 渠道时不包含此模块，解决上架 google play 审核报 DCloud SDK 包含从未知来源下载或安装应用的问题 [详情](https://ask.dcloud.net.cn/question/172533)
  + Android平台 更新 AndroidX依赖库为 1.1.0 版，解决上架 google play 报 androidx.fragment:fragment:1.0.0 SDK 版本已老的问题
  + Android平台 修复 3.8.3引出的 同时勾选友盟统计模块和个推推送模块打包冲突报错的Bug [详情](https://ask.dcloud.net.cn/question/172844)
  + iOS平台 更新 云端打包环境 XCode 为 14.3.1 版、iOS SDK 为 16.4 版
  + iOS平台 修复 setTitleNViewButtonStyle 动态设置标题栏按钮样式可能导致无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/172191)

#### 3.8.6.20230621-alpha
* 【uni-app】
  + 修复 3.8.5更新的uni-push2.0的socket合法域名错误的问题
  + uts插件 App-iOS平台 修复 函数参数类型为 UTSJSONObject 时传入的参数值总是为空的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 更新 一键登录使用的个验基础库SDK为 3.0.6.0 版，解决上传 AppStore 可能报 ITMS-90683:Missing purpose string in info.plist 的Bug

#### 3.8.5.20230616-alpha
* 【uni-app】
  + App平台、Web平台 修复 vue 页面 textarea 组件高度渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/169380)
  + App平台 优化 Vue2 项目 nvue 文件事件编译 [详情](https://ask.dcloud.net.cn/question/170516)
  + App平台 修复 Vue3 项目部分情况下 VideoContext 方法失效的Bug [详情](https://ask.dcloud.net.cn/question/168476)
  + App平台 修复 nvue 文件中文本节点无法使用 \n 换行的Bug [详情](https://github.com/dcloudio/uni-app/issues/4215)
  + App平台 修复 指纹认证部分提示语未支持国际化的Bug [详情](https://ask.dcloud.net.cn/question/168473	)
  + App-iOS平台 修复 uni.setTabBarItem 动态设置 gif 图片不生效的Bug [详情](https://ask.dcloud.net.cn/question/171342)
  + App-iOS平台 修复 nvue rich-text 组件循环渲染时文字可能随机出现白色背景的Bug [详情](https://ask.dcloud.net.cn/question/171090)
  + App-iOS平台 修复 nvue video 组件高度设置 rpx 单位时可能导致 controls 不显示的Bug [详情](https://ask.dcloud.net.cn/question/171037)
  + App-iOS平台 修复 uni原生插件Hook系统事件 applicationMain:argv: 获取参数为空的Bug
  + Web平台 优化 uni.showToast 文本换行样式 [详情](https://github.com/dcloudio/uni-app/pull/4373)
  + Web平台 修复 部分情况下选择位置界面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/167071)
  + Web平台 修复 高德地图地址名称丢失的Bug [详情](https://ask.dcloud.net.cn/question/171013)
  + Web平台 修复 darkmode 配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4317)
  + 小程序平台 修复 嵌套列表部分情况下事件编译报错的Bug [详情](https://ask.dcloud.net.cn/question/171043)
  + 小程序平台 修复 部分情况下 eventChannel 错乱的Bug
  + 小程序平台 修复 自定义属性名称无法使用 name、value 的Bug [详情](https://github.com/dcloudio/uni-app/pull/4257)
  + 微信小程序平台 修复 使用 requirePlugin 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/4301)
  + 抖音小程序平台 新增 支持 consume-card、pay-button、rate-button、member-button 组件 [详情](https://ask.dcloud.net.cn/question/167927)
  + 抖音小程序平台 新增 showToast 支持 mask 配置 [详情](https://ask.dcloud.net.cn/question/154332)
  + Web平台、小程序平台、App平台在线推送 修复 uni-push2.0 修复 高频调用推送，导致客户端内存不足，从而引起客户端卡住的问题（小程序平台，需添加新的socket合法域名 wshzn.getui.net:5223 进白名单，[详情](https://uniapp.dcloud.net.cn/unipush-v2.html#useinmp)）
  + uts插件 App-Android平台 调整 内置`XXPermissions`库为仓储引用，避免与其它插件产生冲突
  + uts插件 App-iOS平台 新增 CocoaPods 依赖 [文档](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#config-json-2)
  + uts插件 App-iOS平台 修复 uts页面组件调用 $emit 方法无响应的Bug
* 【uniCloud】
  + 【重要】新增 uni-ai 计费网关，可低门槛的采购ai能力 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai-buy.html)
  + 新增 阿里云 云存储支持目录 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage.html#storage-dir)
  + 优化 阿里云 云函数调用云函数超时时间由10秒调整为60秒
  + 新增 本地调试支持使用push扩展库
  + 修复 本地调试调用redis服务的multi方法时未正确返回结果的Bug [详情](https://ask.dcloud.net.cn/question/171188)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 新增 enableOAID 配置不使用云端打包机默认版本 OAID SDK，避免通过uts插件或uni原生插件调用自己的 OAID SDK 引起的冲突 [详情](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#enableoaid)
  + Android平台 更新 uni-AD 今日头条穿山甲 SDK 为 5.3.4.1 版；穿山甲GroMore广告 SDK 为 5.3.4.1 版
  + Android平台 修复 3.8.4引出的 软键盘弹出时输入框可能被遮挡的Bug [详情](https://ask.dcloud.net.cn/question/172135)
  + iOS平台 调整 allowsInlineMediaPlayback 默认值为 ture，允许 H5 视频全屏播放 [文档](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#full-manifest)
  + iOS平台 调整 mediaPlaybackRequiresUserAction 默认值为 false，允许 H5 音视频通过 API 控制自动播放 [文档](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#full-manifest)
  + iOS平台 修复 视频播放控件 video 画面方向可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/171484)
* 【uni小程序SDK】
  + Android平台 修复 动态设置胶囊按钮全局项菜单可能不生效的Bug
  + iOS平台 优化 push 方式打开小程序设置 autoControlNavigationBar 为 false 时不接管 navigationController 的 delegate，减少对宿主的影响

#### 3.8.4.20230602-alpha
* 【uni-app】
  + 【重要】App-Android平台 修复 3.8.3引出的 在部分设备启动白屏，报`Uncaught SyntaxError: Invalid or unexpected token at __uniappview.html:2`错误的Bug 请所有使用3.8.3的开发者重新打包[详情](https://ask.dcloud.net.cn/question/170588)
  + App平台 修复 Vue2 项目在 nvue 页面 style 中使用 border-radius 样式解析不准确的Bug [详情](https://ask.dcloud.net.cn/question/168877)
  + 小程序平台 修复 Vue2 项目在模板中使用 JSON.stringify 等全局变量编译报错的Bug [详情](https://ask.dcloud.net.cn/question/170722)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 3.8.3引出的 输入框焦点切换可能引起页面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/170689)

#### 3.8.3.20230523-alpha
* 【uni-app】
  + App平台 修复 nvue 页面 switch 组件配置 type="checkbox" 后点击报错的Bug [详情](https://ask.dcloud.net.cn/question/168894)
  + uni-ad 管理后台页面调整，调整App的基础广告、增强广告的分类概念 [详见](https://uniapp.dcloud.net.cn/uni-ad/release.html)
  + App平台、Web平台 优化 navigationBarBackgroundColor、navigationBarTextStyle 默认值 [详情](https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle)
* 【uniCloud】
  + 新增 uni-ai 微软azure openai chatCompletion接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#get-llm-manager)
  + 修复 jql语法 部分请求执行缓慢的Bug [详情](https://ask.dcloud.net.cn/question/170035)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD SDK，对接618预算，其中优量汇SDK Android为 4.530.1400 版；iOS为 4.14.30 版；穿山甲SDK iOS为 5.4.0.0 版；穿山甲GroMore广告SDK iOS为 5.1.7.0 版；快手广告SDK iOS为 3.3.44 版；Sigmob广告联盟SDK Android为 4.12.1 版，iOS为 4.9.0 版；百度百青藤广告SDK Android为 9.29 版，iOS为 5.14 版
  + Android平台 更新 友盟统计SDK为 9.6.1 版，适配华为应用市场审核政策调整
  + iOS平台 更新 UniPush 使用的个推SDK为 2.7.4.2 版，解决默认获取定位权限的Bug
  + iOS平台 更新 一键登录使用的个验SDK为 3.0.4.1 版

#### 3.8.2.20230511-alpha
* 【uni-app】
  + uts插件 App-Android平台 新增 UTSAndroid.requestSystemPermission 申请系统权限 [详情](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html#requestsystempermission)
  + uts插件 App-Android平台 升级 kotlin-stdlib 为 1.8.10 版
  + uts插件 App-Android平台 修复 Math.random() 返回数据精度不足的Bug
  + uts插件 App-Android平台 修复 UTSAndroid.offAppActivityRequestPermissionsResult 传入参数不生效的Bug
* 【uniCloud】
  + 新增 uni-ai 新增文字生成图片接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#ai-media)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 UniPush 使用的个推核心组件SDK为 3.2.4.0 版；个推SDK为 3.2.17.0 版；适配华为应用市场审核政策调整
  + Android平台 修复 部分场景下真机运行同步文件失败的Bug [详情](https://ask.dcloud.net.cn/question/169374)
  + Android平台 修复 扫码界面拒绝权限提示文字不支持国际化的Bug [详情](https://ask.dcloud.net.cn/question/169217)
* 【uni小程序SDK】
  + Android平台 修复 releaseWgtToRunPathFromPath 部分场景下可能阻塞的Bug

#### 3.8.1.20230428-alpha
* 【uni-app】
  + App-Android平台 修复 nvue 页面 map 组件在特定场景未自动回收销毁可能导致黑屏的Bug [详情](https://ask.dcloud.net.cn/question/168133)
  + uts插件 App-iOS平台 修复 console.log 输出 json 对象可能不正确的Bug
* 【uniCloud】
  + 修复 vue3项目 发布到web端后 uniCloud.SSEChannel的open方法报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 uni-AD 快手广告SDK为 3.3.44 版；快手内容联盟SDK为 3.3.42 版

#### 3.8.0.20230425-alpha
* 【uni-app】
  + App-iOS平台 修复 uni.scanCode 扫码后跳转页面可能引起应用卡死的Bug [详情](https://ask.dcloud.net.cn/question/160090)
  + 【重要】新增 uts插件内可支持部分 uni 的 api，如`uni.showModel` [详情](https://uniapp.dcloud.net.cn/plugin/uts-uni-api.html)
  + uts插件 App-Android平台 修复 函数参数不支持 boolean 类型的Bug
* 【uniCloud】
  + 新增 基于uni-push构建sse通道，在云函数 return 前也可以给客户端发消息 [详情](https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html)
  + 新增 uni-ai 聊天接口支持steam流式响应 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream)
  + 新增 uni-ai-chat云端一体页面模板，开源的ai聊天示例。比uni-im更简单 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai-chat.html)
  + 新增 HBuilder新建opendb表时，如该表含有schema扩展js，会同时自动创建schema扩展js
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 安全检测可能报`存在数据库注入漏洞`的问题 [详情](https://ask.dcloud.net.cn/question/152576)
  + iOS平台 更新 uni-AD 今日头条穿山甲 SDK 为 5.1.6.0 版；穿山甲GroMore广告 SDK 为 5.1.6.0 版

#### 3.7.13.20230411-alpha
* 【uni-app】
  + 新增 uni.addInterceptor 回调增加第二个参数 params [详情](https://ask.dcloud.net.cn/question/129195)
  + App平台 修复 Vue3 项目 picker-view 组件使用 v-if 切换报错的Bug [详情](https://ask.dcloud.net.cn/question/166884)
  + App-Vue平台 修复 Vue3 项目 text 组件嵌套 text 组件显示异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/4215)
  + Web平台 优化 使用 IP 定位时取消坐标系转换 [详情](https://github.com/dcloudio/uni-app/issues/4248)
  + Web平台 修复 Vue3 项目 input 组件使用 v-model 时输入过快失焦的Bug [详情](https://ask.dcloud.net.cn/question/166821)
  + Web平台 修复 Vue3 项目 longpress 事件对象缺少 touches 字段的Bug [详情](https://ask.dcloud.net.cn/question/166956)
  + 小程序平台 修复 Vue2 项目使用高版本 CopyWebpackPlugin 时 static 目录条件编译无效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4181)
* 【uniCloud】
  + 【重要】新增 uni-ai 聚合多家ai引擎，帮助开发者快速将AI能力应用到自己的应用中 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html)
  + 新增 JQL语法 触发器内副表读取事件增加 primaryCollection 参数，值为本次联表查询的主表表名
  + 调整 JQL语法 schema 内配置的动态 enum 校验数据时移除仅枚举500条的限制
  + 【重要】新增 uni-cms，全端的、云端一体的开源CMS内容管理系统，内置ai生成内容和广告解锁变现 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-cms.html)
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】新增 uni-AD 支持 uniMP激励视频广告，提升CPM、提升填充率 [详情](https://uniapp.dcloud.net.cn/uni-ad.html#unimp)
  + 新增 一键登录支持 isCenterHint 参数设置未勾选服务条款时点击登录按钮的提示信息是否垂直居中显示 [详情](https://uniapp.dcloud.net.cn/univerify.html#%E5%AE%A2%E6%88%B7%E7%AB%AF-%E8%AF%B7%E6%B1%82%E7%99%BB%E5%BD%95%E6%8E%88%E6%9D%83)
  + Android平台 修复 蓝牙设备信息 BluetoothDeviceInfo 的 advertisData 字段可能会丢失数据的Bug [详情](https://ask.dcloud.net.cn/question/165119)
  + Android平台 修复 App切换语言后重启可能出现闪屏的Bug [详情](https://ask.dcloud.net.cn/question/166730)
  + iOS平台 更新 uni-AD Sigmob广告联盟SDK为 4.7.1 版；百度百青藤广告SDK为 5.121 版
  + iOS平台 修复 plus.runtime.restart 后苹果应用内支付 IAP 无响应的Bug

#### 3.7.12.20230331-alpha
* 【uni-app】
  + App平台、Web平台 优化 socket 连接 onClose 事件信息增加 code、reason 属性
  + App平台 修复 Vue3 项目使用纯 nvue 开发时热重载跳转到首页的Bug [详情](https://ask.dcloud.net.cn/question/164673)
  + App平台 修复 国际化配置新增语言兼容性不佳的Bug [详情](https://ask.dcloud.net.cn/question/165884)
  + App平台 修复 Vue3 项目 nvue 页面配置 flex-direction 默认值无效的Bug [详情](https://ask.dcloud.net.cn/question/165497)
  + App-Android平台 修复 uni.onSocketClose 监听 WebSocket 关闭时 code 值为 1001 可能不触发回调的Bug
  + App-Android平台 修复 实人认证 progressBarColor 设置为非法颜色值导致应用重启的Bug
  + App-Android平台 修复 nvue 页面中存在特殊字符可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/166447)
  + App-Android平台 修复 nvue 页面在App悬浮窗口模式下可能渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/156014)
  + App-Android平台 修复 nvue text 组件中特殊字符不显示Bug [详情](https://ask.dcloud.net.cn/question/166014)
  + App-Android平台 修复 反复进入退出App偶发 js 进程崩溃的Bug
  + Web平台 修复 浏览器启用隐私模式报错的Bug [详情](https://ask.dcloud.net.cn/question/164775)
  + Web平台 修复 Vue3 项目 script setup 中 onError 无效的Bug [详情](https://ask.dcloud.net.cn/question/164798)
  + Web平台 修复 高德导航目的地名称显示异常的Bug [详情](https://ask.dcloud.net.cn/question/165669)
  + Web平台 修复 高德无定位权限未触发 fail 回调的Bug [详情](https://ask.dcloud.net.cn/question/166298)
  + Web平台 修复 高德地图 callout 排版异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/4230)
  + 小程序平台 优化 Vue2 项目增加 slotMultipleInstance 配置，支持作用域插槽渲染多个实例 [详情](https://github.com/dcloudio/uni-app/issues/3503)
  + 小程序平台 优化 Vue2 项目 v-for 遍历对象时支持 index 参数 [详情](https://ask.dcloud.net.cn/question/163685)
  + 小程序平台 修复 Vue2 项目事件表达式包含多个函数语句时编译后无效的Bug [详情](https://ask.dcloud.net.cn/question/147342)
  + 小程序平台 修复 Vue3 项目页面样式文件编译后缺失的Bug [详情](https://ask.dcloud.net.cn/question/163867)
  + 百度小程序平台、支付宝小程序平台 新增 支持运行到指定页面
  + 微信小程序平台 新增 支持企业小程序 onNFCReadMessage 生命周期 [详情](https://ask.dcloud.net.cn/question/166024)
  + 微信小程序平台 修复 Vue3 项目混合分包部分情况下接口调用报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/4175)
  + 支付宝小程序平台 优化 组件 styleIsolation 默认配置为 apply-shared
  + 支付宝小程序平台 修复 Vue3 项目 page-meta 组件 foot-font-size 属性无效的Bug
  + 字节跳动小程序平台 修复 aweme-data 组件渲染不正常的Bug [详情](https://ask.dcloud.net.cn/question/165295)
  + uni统计2 新增 uniStatPageLog 参数，是否开启页面数据采集，默认为开启
  + uts插件 App-Android平台 修复 console.log 无法输出对象中包含的 any 类型字段的Bug
* 【uniCloud】
  + 新增 jql支持in语法，查询某字段和另一个表指定字段匹配的记录 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#enhanced-in)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.514.1384 版；iOS为 4.14.12 版；快手广告SDK Android为 3.3.40 版，iOS为 3.3.40 版；Sigmob广告联盟SDK Android为 4.10.1 版；百度百青藤广告SDK Android为 9.271 版
  + Android平台 修复 某些情况下可能出现软键盘弹出后立即收起的Bug [详情](https://ask.dcloud.net.cn/question/161957)
  + Android平台 修复 plus.navigator.updateSplashscreen 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/164023)
  + iOS平台 新增 配置 privacyRegisterMode 应用启动时是否获取 idfv，解决应用合规检测可能报同意隐私政策前读取 idfv 的问题 [详情](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#privacyRegisterMode)
  + iOS平台 更新 一键登录使用的个验SDK为 3.0.4.0 版，解决某些情况下会获取本地网络权限可能导致苹果审核被拒的Bug [详情](https://ask.dcloud.net.cn/question/166587)
  + iOS平台 修复 进入包含视频播放控件 video 页面会打断音乐播放的Bug [详情](https://ask.dcloud.net.cn/question/165329)
  + iOS平台 修复 导航栏 titleNView 设置 splitLine 样式可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/164906)
  + iOS平台 修复 从微信中唤起App时 plus.runtime.arguments 获取的参数可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/166211)

#### 3.7.7.20230316-alpha
* 【uni-app】
  + 微信小程序 修复 share-element 等组件部分属性无效的Bug [详情](https://ask.dcloud.net.cn/question/163926)
  + 支付宝小程序 修复 Vue3 项目 page-meta 组件 page-style 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/163563)
  + 字节跳动小程序 修复 uni.chooseImage 不支持 sizeType 配置的Bug [详情](https://ask.dcloud.net.cn/question/163986)
  + App-Android平台 修复 nvue 页面 map 组件使用高德地图 marker 被点击时 label 可能被遮挡的Bug [详情](https://ask.dcloud.net.cn/question/156062)
  + App-Android平台 修复 nvue 页面 map 组件使用谷歌地图 marker 的 label 设置锚点时位置会出现偏差的Bug
  + App-iOS平台 修复 nvue 页面组件设置 border 样式偶现崩溃的Bug [详情](https://ask.dcloud.net.cn/question/164236)
  + App-iOS平台 修复 nvue 页面 loading 组件事件触发异常的Bug [详情](https://ask.dcloud.net.cn/question/163143)
* 【uniCloud】
  + 新增 uni-cloud-s2s公共模块 用于解决uniCloud服务空间与传统服务器通讯时互相信任的问题 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-s2s.html)
  + 优化 安全网络 微信小程序端支持非uni-id的应用 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#mp-weixin-without-uni-id-pages)
  + 升级 阿里云 客户端连接云函数最大超时时间由20秒调整为40秒
  + 升级 阿里云 云函数URL化的默认域名访问QPS限制由100调整为1000
  + 升级 uniCloud控制台 阿里云 前端网页托管 cdn刷新次数限制由每小时3次调整为每小时10次
  + 修复 uniCloud控制台 阿里云 创建数据表时达到集合数量上限后删除集合不能实时刷新数量限制的Bug
  + 修复 阿里云 部分事务操作报错不清晰的Bug
  + 修复 本地调试插件 部分情况下修改本地js文件不能实时生效的Bug
  + 修复 本地调试插件 部分情况下修改云函数依赖 package.json 文件被改为错误的内容的Bug [详情](https://ask.dcloud.net.cn/question/165273)
  + 调整 本地调试插件 调用本地云函数时由每个项目固定4个云函数实例调整为最小2个实例最大8个实例
  + 调整 本地调试插件 调用本地云函数时当所有实例均被占用时不再等待实例空闲，直接拒绝本次调用请求
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 上架华为应用市场审核误报集成了`com.netease(网易;网易IM;网易云信)`SDK的bug [详情](https://ask.dcloud.net.cn/question/163991)
  + Android平台 修复 plus.io.FileReader 的 readAsDataURL 返回 base64 字符中包含换行符的Bug [详情](https://ask.dcloud.net.cn/question/164955)
  + iOS平台 修复 视频播放控件 video 设置 controls 为 false 时全屏状态没有隐藏标题栏的Bug [详情](https://ask.dcloud.net.cn/question/160712)

#### 3.7.6.20230227-alpha
* 【uni-app】
  + 【重要】App平台 新增 uni实人认证，uni.startFacialRecognitionVerify，姓名身份证和人脸活体比对，金融级安全保障 [详情](https://uniapp.dcloud.net.cn/uniCloud/frv/intro)
  + Web、App平台 修复 NodesRef 无法获取 properties 的Bug [详情](https://ask.dcloud.net.cn/question/163535)
  + Web平台 修复 高德地图缩放时会触发 markertap 事件的Bug [详情](https://ask.dcloud.net.cn/question/162763)
  + App平台 优化 video 组件支持 isLive 属性
  + App平台 修复 uni.uploadFile 接口 timeout 配置无效的Bug [详情](https://ask.dcloud.net.cn/question/163747)
  + App平台 修复 Vue2 项目使用组合式 API 时 onPageScroll、onReachBottom 无效的Bug [详情](https://ask.dcloud.net.cn/question/162503)
  + App-Android平台 修复 使用安全网络在部分设备可能引起崩溃的Bug
  + 小程序平台 修复 Vue2 项目部分情况下 v-for 嵌套 v-model 编译后无效的Bug
  + 京东小程序平台 新增 支持编译 Vue3 项目 [详情](https://github.com/dcloudio/uni-app/pull/4023)
  + 微信小程序平台 新增 支持 Skyline gesture [详情](https://ask.dcloud.net.cn/question/162700)
* 【uniCloud】
  + 新增 uni实人认证，云端一体，金融级安全保障，包括云函数扩展库、web控制台 [详情](https://uniapp.dcloud.net.cn/uniCloud/frv/intro)
  + 【重要】uni-id-pages 新增实名认证功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id/summary.html#frv)
  + 【重要】新增 uni-frv-external 云端一体模板，用于非uniCloud业务使用实名认证功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/frv/dev.html#uni-frv-external)
  + 调整 客户端sdk开发调试时连本地网络的时机由应用启动时连接调整为访问本地云函数时才会连接
  + 修复 客户端sdk uniCloud.init、uniCloud.database 方法在关联正式版阿里云服务空间时仍默认使用公测版 endpoint 的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 暗黑模式下 tabbar 页面切换可能出现异常的Bug [详情](https://ask.dcloud.net.cn/question/163416)
  + Android平台 修复 一键登录 按钮阴影可能显示异常的Bug [详情](https://ask.dcloud.net.cn/question/163054)
  + Android平台 修复 3.7.1版引出的 在小米 Android13 设备图片选择功能异常的Bug [详情](https://ask.dcloud.net.cn/question/163903)

#### 3.7.2.20230217-alpha
* 【uni-app】
  + App-Android平台 修复 uni.getSystemInfo 在部分设备获取 deviedId 值可能相同的Bug [详情](https://ask.dcloud.net.cn/question/163174)
  + uts插件 App-Android平台 修复  math.sign 参数为 0 时返回结果异常的Bug
  + uts插件 App-iOS平台 新增 支持调用 .a 静态库 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#ios-libs)
* 【uni小程序SDK】
  + Android平台 新增 适配支持暗黑模式
  + Android平台 修复 3.7.0版引出的 特定场景启动小程序可能失败的Bug

#### 3.7.1.20230210-alpha
* 【uni-app】
  + 修复 Vue3 项目 uni.scss 中变量条件编译无效的Bug [详情](https://ask.dcloud.net.cn/question/162271)
  + App平台 修复 Vue3 项目 movable-area 组件改变高度后可移动区域的高度不会更新的Bug [详情](https://ask.dcloud.net.cn/question/159723)
  + App平台 修复 Vue3 项目 preloadPage 生命周期触发异常的Bug [详情](https://ask.dcloud.net.cn/question/160416)
  + App-Android平台 修复 3.6.16版升级fastjson引出的 uni.sendSocketMessage 无法发送 ArrayBuffer 数据的Bug [详情](https://ask.dcloud.net.cn/question/161872)
  + App-Android平台 修复 nvue 页面 cell 组件高度超过 list 自身高度会频繁触发 loadmore 事件的Bug [详情](https://ask.dcloud.net.cn/question/161972)
  + App-Android平台 修复 nvue 页面 input 组件 placeholder 属性改变后 placeholder-style、placeholder-class 属性失效的Bug [详情](https://ask.dcloud.net.cn/question/161678)
  + App-Android平台 修复 nvue 页面 map 组件的 marker 设置 anchor 时气泡显示异常的Bug [详情](https://ask.dcloud.net.cn/question/161180)
  + App-Android平台 修复 nvue 页面 map 组件更新 marker 时 cover-view 不显示的Bug [详情](https://ask.dcloud.net.cn/question/161998)
  + Web平台 修复 标题栏按钮文字在国际化后显示异常的Bug [详情](https://ask.dcloud.net.cn/question/162369)
  + Web平台 修复 3.7.0版引出的 Vue2 项目 picker 组件样式错乱的Bug [详情](https://ask.dcloud.net.cn/question/162504)
  + Web平台 修复 Vue3 项目 picker 打包后卡死的Bug [详情](https://ask.dcloud.net.cn/question/162091)
  + Web平台 修复 Vue2 项目 内置浏览器高德地图 uni.getLocation 报错的Bug [详情](https://ask.dcloud.net.cn/question/156303)
  + 小程序平台 修复 Vue3 项目 页面作为组件引用，导航栏标题配置无效的Bug [详情](https://ask.dcloud.net.cn/question/162745)
  + 微信小程序平台 修复 3.7.0 版引出的 Vue2 项目部分情况下列表编译报错的Bug
  + 快手小程序平台 修复 Vue3 项目 button getPhoneNumber 触发异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/4113)
  + uts插件 App平台 新增 Math 相关函数支持
  + uts插件 App-Android平台 修复 Array.sort函数不生效的Bug
  + uts插件 App-iOS平台 修复 使用多层嵌套复杂对象时格式化不正确的Bug
  + uts插件 App-iOS平台 修复 调用方法时参数大于实际数量时功能可能异常的Bug
  + uts插件 App-iOS平台 修复 组件热刷新后属性初始值不生效的Bug
* 【uniCloud】
  + 新增 JQL触发器 支持联表查询时副表的读取触发器，beforeReadAsSecondaryCollection 和 afterReadAsSecondaryCollection [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-timing)
  + 调整 JQL触发器 参数内的 subCollection 改为 secondaryCollection。老参数仍可访问但会给出警告 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-param)
  + 修复 JQL语法字符串格式查询语句内使用数组且其中包含负数时报错的Bug [详情](https://ask.dcloud.net.cn/question/161852)
  + 修复 云对象未返回值时客户端报错的Bug [详情](https://ask.dcloud.net.cn/question/161852)
  + 修复 阿里云正式版删除文件出错未返回错误信息的Bug
  + 本地调试插件 修复 云函数内使用 console.warn 打印日志输出到控制台颜色不正确的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 Paypal SDK 为 0.8.8 版，修复无法正常支付的Bug [详情](https://ask.dcloud.net.cn/question/154976)
  + Android平台 修复 3.6.16版引出的 一键登录 全屏模式下配置其他登录按钮可能引起显示异常的Bug
  + Android平台 修复 plus.downloader.clear 无法清除持久化存储的下载任务的Bug [详情](https://ask.dcloud.net.cn/question/162099)
  + Android平台 修复 使用 UniPush 上架应用市场审核可能报`频繁自启动或关联启动第三方App`的Bug [详情](https://ask.dcloud.net.cn/question/162680)
  + Android平台 修复 真机运行时应用沙盒目录 _doc 中的文件会被清除的Bug
  + iOS平台 修复 音频播放 AudioPlayer seekTo 跳转指定位置不支持毫秒的Bug

#### 3.7.0.20230118-alpha
* 【uni-app】
  + 【重要】新增 uts 组件。可使用uts语言开发原生扩展组件 [详情](https://uniapp.dcloud.net.cn/plugin/uts-component.html)
  + 新增 uni-vue-devtools 插件，方便查看、修改 data 及审查自定义组件 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-vue-devtools.html)
  + Web平台、App平台 新增 page-meta 组件支持 scroll-top 属性
  + Web平台 修复 3.6.16版引出的 Vue3 项目 scroll-view 组件插槽部分情况下渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/149557)
  + Web平台 修复 video 组件 show-progress 属性不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3908)
  + Web平台 修复 input 组件 type=digit 时清空输入框后 placeholder 不显示的Bug [详情](https://ask.dcloud.net.cn/question/160726)
  + Web平台 修复 Vue3 项目 onNavigationBarSearchInputConfirmed 无效的Bug [详情](https://ask.dcloud.net.cn/question/154740)
  + Web平台 修复 Vue3 项目切换 tabbar 页面不触发 onTabItemTap 的Bug
  + App平台 新增 animation-view 组件 即 lottie [详情](https://uniapp.dcloud.net.cn/component/animation-view.html)
  + App平台 修复 Vue3 项目中原生导航栏 type 为 transparent 时，自定义 buttons 在导航栏上滑至顶端时颜色不改变的Bug [详情](https://ask.dcloud.net.cn/question/154074)
  + 小程序平台 新增 pages.json 支持配置 entryPagePath 属性 [详情](https://ask.dcloud.net.cn/question/126216)
  + 微信小程序平台 修复 3.6.16版引出的企业版微信运行报错的Bug
  + 微信小程序平台 修复 3.6.16版引出的 Vue2 项目部分情况下作用域插槽中访问 length 属性报错的Bug
  + 微信小程序平台 修复 Vue2 项目中使用 uni.env 时返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/159865)
  + 支付宝小程序平台 修复 钉钉小程序使用 uni.saveImageToPhotosAlbum 报错的Bug [详情](https://ask.dcloud.net.cn/question/159183)
  + 支付宝小程序平台 修复 uni.getSystemInfo 返回的 platform 属性在模拟器中不正确的Bug
  + QQ小程序平台 修复 Vue3 项目 video 组件 ended 事件在真机不触发的Bug [详情](https://ask.dcloud.net.cn/question/155602)
* 【uniCloud】
  + 新增 schema扩展js支持引入公共模块及扩展库 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#deps-of-jql)
  + 新增 JQL触发器方法新增一些参数 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-param)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 新增 隐私政策提示框支持 backToExit 配置是否响应点击系统返回键退出应用，解决部分应用市场上架审核可能提示`系统返回键失灵`的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
  + Android平台 更新 uni-AD 腾讯优量汇广告SDK 为 4.500.1370 版；Sigmob广告联盟SDK 为 4.9.0 版
  + Android平台 更新 云端打包环境 compileSdkVersion 为 32
  + Android平台 修复 3.6.17版引出的 系统导航栏按键颜色与背景颜色相同的Bug [详情](https://ask.dcloud.net.cn/question/161501)
  + Android平台 修复 3.6.17版引出的 自定义隐私政策提示框时启动应用可能出现卡死的Bug [详情](https://ask.dcloud.net.cn/question/161634)
  + Android平台 修复 隐私合规检测可能报`隐私弹窗中处理超链接的过程中调用到了获取设备sim卡国家信息的api`的Bug [详情](https://ask.dcloud.net.cn/question/161479)
  + Android平台 修复 图片选择在 Android13 设备提示没有权限的Bug [详情](https://ask.dcloud.net.cn/question/160879)
  + Android平台 修复 plus.io.FileReader 的 readAsDataURL 读取数据时未按 slice 分割位置读取的Bug [详情](https://ask.dcloud.net.cn/question/160467)
  + Android平台 修复 视频播放控件 VideoPlayer 在视频缓冲时触发 timeupdate 事件的Bug
  + iOS平台 新增 苹果应用内支付 IAP 支持订阅促销优惠 [详情](https://uniapp.dcloud.net.cn/api/plugins/payment.html#%E4%BF%83%E9%94%80%E4%BC%98%E6%83%A0%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
  + iOS平台 更新 一键登录使用的个验SDK为 3.0.3.0 版
* 【uni小程序SDK】
  + Android平台 修复 打开uni小程序切换应用到后台运行一段时间后可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/141868)

#### 3.6.17.20230111-alpha
* 【uni-app】
  + App平台 修复 3.6.16 版引出的 Vue3 项目 vue 页面内联样式中 rpx 渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/161256)
  + 微信小程序平台 修复 3.6.16 版引出的 Vue2 项目部分情况下模板中使用多个逻辑表达式运行报错的Bug [详情](https://ask.dcloud.net.cn/question/161190)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 3.6.11版引出的 使用 record 模块后 wgt 升级提示没有配置 record 模块的Bug [详情](https://ask.dcloud.net.cn/question/161167)
  + Android平台 修复 3.6.16版引出的 部分设备沉浸式状态栏失效的Bug [详情](https://ask.dcloud.net.cn/question/161277)
  + Android平台 修复 隐私政策提示框在未适配 disagreeMode 模式情况下仅显示一次的Bug [详情](https://uniapp.dcloud.net.cn/tutorial/app-disagreemode.html)

#### 3.6.16.20230109-alpha
* 【uni-app】
  + App平台、Web平台 优化 input 组件支持 inputmode 属性 [详情](https://uniapp.dcloud.net.cn/component/input.html#inputmode)
  + App平台 修复 Vue3 项目 nvue 页面 webview 组件 onPostMessage 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/158925)
  + App平台 修复 Vue3 项目 image 组件使用 base64 显示异常的Bug [详情](https://ask.dcloud.net.cn/question/158368)
  + App-Android平台 修复 nvue 页面 live-pusher 组件拒绝相机权限后再手动开启，回到应用后可能无法调用相机预览的Bug [详情](https://ask.dcloud.net.cn/question/158518)
  + App-iOS平台 修复 nvue 页面 ad-content-page 组件拉取广告配置失败后无法重新拉取的Bug
  + App-iOS平台 修复 nvue 页面 map 组件使用自定义地图样式后切换卫星图无效的Bug [详情](https://ask.dcloud.net.cn/question/159316)
  + App-iOS平台 修复 使用模拟器开启调试后启动应用白屏的Bug [详情](https://ask.dcloud.net.cn/question/160363)
  + App-iOS平台 修复 Vue3 项目中 input 组件 disabled 无法动态修改的Bug [详情](https://ask.dcloud.net.cn/question/157958)
  + Web平台、小程序平台 修复 uni-push2.0 WebSocket连接不稳定的Bug [详情](https://ask.dcloud.net.cn/question/159690)
  + Web平台 修复 input 组件输入负数带出上次结果的Bug [详情](https://ask.dcloud.net.cn/question/159447)
  + Web平台 修复 Vue3 项目 uni.navigateTo eventChannel 只会调用一次的Bug [详情](https://ask.dcloud.net.cn/question/155922)
  + Web平台 修复 Vue3 项目 scroll-view 组件滚动频繁触发视图更新的Bug [详情](https://ask.dcloud.net.cn/question/149557)
  + Web平台 修复 Vue3 项目 picker 组件 end 属性读取错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/4075)
  + Web平台 修复 uni.setTabBarItem 导致 tab 切换生命周期异常的Bug [详情](https://ask.dcloud.net.cn/question/160739)
  + 微信小程序平台 修复 Vue2 项目 模板中无法观测数组长度变化的Bug [详情](https://github.com/dcloudio/uni-app/issues/1827)
  + 支付宝小程序平台 修复 Vue3 项目运行报错的Bug [详情](https://ask.dcloud.net.cn/question/159362)
* 【uniCloud】
  + JQL语法 修复 使用 setUser 方法未传 permission 参数且使用触发器时报错的Bug
  + JQL语法 修复 add 方法传递的字段值为对象且其中包含null值时报错的Bug
  + JQL语法 新增 数据库触发器增加 triggerContext 参数，用于在 before 和 after 内共享数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-context)
  + 阿里云 调整 正式版云存储单文件100MB限制调整为5GB
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 fastjson SDK为 1.2.83 版，解决安全检测可能报`Fastjson反序列化远程代码执行漏洞`的问题
  + Android平台 更新 一键登录使用的个验SDK为 3.1.0.0 版，优化初始化和预登录速度
  + Android平台 更新 UniPush 使用的个推核心组件SDK为 3.2.1.0 版；谷歌渠道个推 sdk-for-gj 为 4.4.3.1 版；解决发布到 Google Play 商店可能被下架的问题 [详情](https://ask.dcloud.net.cn/question/160249)
  + Android平台 修复 3.6.12版引出的 从系统相册中选择文件在部分鸿蒙设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/159556)
  + Android平台 修复 3.6.7版引出的 一键登录 登录完成后自动关闭登录界面，以及登录按钮 loading 动画效果缺失的Bug [详情](https://ask.dcloud.net.cn/question/159898)
  + Android平台 修复 设置 targetSdkVersion 值大于或等于 30 时使用高德地图引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/159801)
  + iOS平台 更新 UniPush 使用的个推SDK为 2.7.2.0 版，需支持 Swift 环境可能导致 ipa 包变大 [详情](https://uniapp.dcloud.net.cn/tutorial/app-push-unipush.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)
  + iOS平台 修复 设置应用语言为英文时部分系统界面可能会显示为回退语言的Bug [详情](https://ask.dcloud.net.cn/question/159445)
  + iOS平台 修复 自定义基座真机运行可能导致 setStorage 保存的数据丢失的Bug [详情](https://ask.dcloud.net.cn/question/159903)
  + iOS平台 修复 plus.nativeUI.toast 设置 style 为 inline 时 iconWidth/iconHeight 属性失效的Bug [详情](https://ask.dcloud.net.cn/question/160192)
  + iOS平台 修复 uni-AD 优量汇开屏广告展示期间弹出提示框可能导致开屏界面不会关闭的Bug
  + iOS平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备返回数据没有 advertisData 字段的Bug [详情](https://ask.dcloud.net.cn/question/160178)

#### 3.6.14.20221216-alpha
* 【uni-app】
  + App-Android平台 修复 使用 canvas 模块后 wgt 升级提示没有配置 canvas 模块的Bug [详情](https://ask.dcloud.net.cn/question/159283)
  + App-iOS平台 修复 UniPush 2.0 在vue2项目中 启用离线推送后，调用 uni.getPushClientId 某些情况下获取不到cid的Bug [详情](https://ask.dcloud.net.cn/question/158921)
  + 小程序平台 修复 3.6.13版引出的 使用 async/await 发布后运行报错的Bug [详情](https://ask.dcloud.net.cn/question/159413)
* 【uniCloud】
  + JQL语法 新增 触发器内可以获取用户信息和本次数据库操作结果 [用户信息](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#user-info)、[执行结果](https://uniapp.dcloud.net.cn/uniCloud/  +ql-schema-ext.html#result)
  + JQL语法 新增 触发器内可以判断当前执行的语句是否和指定语句相同 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#is-equal-to-jql)
  + JQL语法 调整 对于 schema 内定义的复杂类型数据（file、array、object）类型的字段，忽略赋给此字段的 null 值
  + 本地调试插件 修复 在部分旧系统运行时本地调试服务启动失败的Bug [详情](https://ask.dcloud.net.cn/question/159343)
  + 本地调试插件 修复 3.6.12版引出的 云函数 调试运行 无法进行Debug断点调试的Bug
  + 本地调试插件 修复 阿里云正式版本地云函数内上传文件到云存储时，上传的文件无法在 uniCloud web 控制台看到的Bug [详情](https://ask.dcloud.net.cn/question/159109)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 plus.push.getClientInfoAsync 在应用热重启后调用不触发回调的Bug

#### 3.6.12.20221207-alpha
* 【uniCloud】
  + 本地调试插件 修复 云函数调用云函数时，被调用云函数无返回值导致报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 3.6.11 版本引出的 显示开屏广告时弹出系统 alert 窗偶现崩溃的Bug

#### 3.6.11.20221205-alpha
* 【uni-app】
  + 新增 ad-interactive 互动广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interactive.html)
  + App平台 新增 【ext api】 Wi-Fi 模块 [详情](https://uniapp.dcloud.net.cn/api/system/wifi.html)
  + App平台 优化 Vue2 项目 component is 支持传入组件选项和构造函数 [详情](https://ask.dcloud.net.cn/question/140044)
  + App平台 修复 nvue 页面 slider 组件某些情况下位置位置计算不准确的Bug [详情](https://ask.dcloud.net.cn/question/152714)
  + App-Android平台 修复 使用 tabbar 后页面多次跳转返回可能引起路由管理异常的Bug [详情](https://ask.dcloud.net.cn/question/158462)
  + App-Android平台 修复 3.6.9 版本引出的 uni.switchTab 在特殊场景可能无法正常切换页面的Bug [详情](https://ask.dcloud.net.cn/question/157720)
  + App-iOS平台 补齐 【ext api】 uni.onMemoryWarning [详情](https://ext.dcloud.net.cn/plugin?id=10071)
  + App-iOS平台 修复 3.6.7 版本引出的 ad 组件偶现加载优量汇广告成功但无法正常渲染的Bug
  + Web平台 修复 Vue3 项目 canvas 组件监听事件报错的Bug [详情](https://ask.dcloud.net.cn/question/158252)
  + 小程序平台 优化 vue3 项目使用 import 导入非 static 目录的资源生成后名称默认补充 hash [详情](https://github.com/dcloudio/uni-app/issues/4011)
  + 微信小程序平台 修复 Vue3 项目 v-for 循环事件可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/4015)
  + 微信小程序平台 修复 Vue3 项目 wxs 热更新失效的Bug [详情](https://ask.dcloud.net.cn/question/158252)
  + uni-im 全端支持Vue3 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
  + uni-im 新增多媒体消息（含：语音、图片、视频、任意文件）和代码发送
  + uts插件 新增 在uts文件中可使用条件编译 //#ifdef APP-ANDROID 和 //#ifdef APP-IOS [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#uts-%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)
  + uts插件 App-Android平台 调整 内置库包名为`io.dcloud.uts`，类名为`UTSAndroid` [详情](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html#iodcloudutsandroid)
  + uts插件 App-Android平台 优化 setTimeOut 函数线程池大小，支持多异步任务场景
  + uts插件 App-Android平台 修复 UTSJSONObject 构造函数无法传递复杂 JSON 参数的Bug
  + uts插件 App-Android平台 修复 UTSJSONObject 嵌套序列化存在冗余字段的Bug
  + uts插件 App-Android平台 修复 Array 索引不支持 number 类型的Bug
  + uts插件 App-Android平台 修复 JSON.stringify 参数为数组时返回字符串格式不正确的Bug
  + uts插件 App-iOS平台 新增 内置库`DCloudUTSFoundation` [详情](https://uniapp.dcloud.net.cn/plugin/uts-for-ios.html#dcloudutsfoundation)
  + uts插件 App-iOS平台 补齐 内置对象 Date、Number、Set、String、RegExp
  + uts插件 App-iOS平台 修复 console 打印对象在控制台输出格式不正确的Bug
  + hello uts 新增 系统API Alert 弹窗示例 [详情](https://ext.dcloud.net.cn/plugin?id=9892)
  + hello uts 补齐 iOS平台 三方SDK toast 消息提示框，监听设备位置变化示例 [详情](https://ext.dcloud.net.cn/plugin?id=9892)
* 【uniCloud】
  + 【重要】新增 数据库扩展js，{表名}.schema.ext.js，可实现数据库触发器。推荐用触发器替代action，更安全 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger)
  + 【重要】uni-pay 2.0，从公共模块升级为包含前端页面、uni-pay-co云对象，让支付更加简单省心 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-pay.html)
  + JQL语法 修复 where 和 permission 内使用负数常量时报错的Bug [详情](https://ask.dcloud.net.cn/question/157993)
  + 本地调试插件 修复 调用 clientDB、jql扩展 时报找不到 action 的Bug [详情](https://ask.dcloud.net.cn/question/157997)
  + uniIdRouter 修复 vue3项目跳转时报错的Bug [详情](https://ask.dcloud.net.cn/question/158015)
  + 【重要】uni-id-co 新增 外部系统联登接口，可为外部系统创建与uni-id相对应的账号，使该账号可以使用依赖uniId的系统及功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#external)
  + uni-id-co 新增 设置密码接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#set-pwd)
  + uni-id-co 新增 URL化请求时鉴权签名验证 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#http-reqeust-auth)
  + uni-id-co 新增匹配到的用户不可在当前应用登录时的错误码 `uni-id-account-not-exists-in-current-app` [错误码说明](https://uniapp.dcloud.net.cn/uniCloud/uni-id/summary.html#errcode)
  + uni-id-co 修复 微信登录时用户未设置头像的报错问题
  + uni-id-co 修复 无法从 clientInfo 中获取 uniIdToken
  + uni-id-pages 新增 登录后跳转设置密码页面配置项`setPasswordAfterLogin` [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#set-pwd-after-login)
  + uni-id-pages 新增 设置密码页面
  + uni-id-pages 优化 toast 错误提示时间为3秒
  + uni-admin 调整 群发短信功能的 schema 文件命名规范，将`batch-sms-template` `batch-sms-task` `batch-sms-result` 更改为 `opendb-sms-temlate` `opendb-sms-task` `opendb-sms-log` 以符合opendb规范
* 【App插件(含5+App和uni-app的App端)】
  + 新增 Record、Camera、Barcode、Orientation模块，解决iOS平台隐私合规检测可能报包含麦克风、相机/相册、运动等权限的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-modules.html#bcor)
  + Android平台 更新 UniPush 使用的个推SDK为 3.2.13.0 版，个推核心组件SDK为 3.1.12.0 版；谷歌渠道个推SDK为 4.10.1.0 版；解决隐私合规检测可能报超频采集的问题
  + iOS平台 更新 uni-AD 快手广告SDK为 3.3.33 版；快手内容联盟SDK为 3.3.32 版；今日头条穿山甲SDK为 4.9.0.5 版；穿山甲GroMore广告SDK为 3.8.0.2 版
  + iOS平台 修复 IAP支付 订单数据 orderInfo 参数异常时引起应用假死的Bug
  + iOS平台 修复 3.6.10版本引出的 三方登录授权不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/158380)

#### 3.6.10.20221121-alpha
* 【uni-app】
  + App平台 修复 Vue2 项目 编辑 uts 插件代码热更新失效的Bug
  + App平台 修复 Vue2 项目 nvue 页面不支持 uts 插件的Bug [详情](https://ask.dcloud.net.cn/question/157435)
  + App平台 修复 darkmode 模式下设置 statusBar 颜色不正常的Bug
  + App平台 修复 nvue 首页设置 navigationBarTextStyle 无效的Bug [详情](https://ask.dcloud.net.cn/question/150485)
  + App平台 修复 uni.startSoterAuthentication（生物识别）识别错误时 loading 没有文字提示的Bug [详情](https://ask.dcloud.net.cn/question/157353)
  + App-Android平台 修复 uni.request 不支持 head 请求的Bug [详情](https://ask.dcloud.net.cn/question/136717)
  + App-Android平台 修复 页面中存在多个 input 组件时获取焦点光标位置可能不正确的Bug
  + App-Android平台 修复 nvue live-pusher 组件在 Android11+ 设备使用移动网络无法预览的Bug [详情](https://ask.dcloud.net.cn/question/156532)
  + App-Android平台 调整 uts插件 Date.getDay 从以周日为1统一调整为周日为0
  + App-Android平台 修复 uts插件 不支持函数参数为数组的Bug
  + App-Android平台 修复 uts插件 JSON.parse 不支持 JSONArray 的Bug
  + Web平台 修复 Vue3 项目 --window-top 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/157164)
  + Web平台 修复 Vue3 项目配置全局 loading、error 组件无效的Bug [详情](https://ask.dcloud.net.cn/question/157122)
  + 支付宝小程序平台 修复 page-meta 组件 root-font-size 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/157168)
  + uni-im 支持 非uniCloud 或 不基于uni-id-pages 开发的项目 接入 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
* 【uniCloud】
  + 【重要】阿里云商用版正式上线 [详情](https://ask.dcloud.net.cn/article/40144)
  + JQL语法 新增 支持 geoNear 以实现地理位置查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#geo-near)
  + JQL语法 修复 部分有权限进行的查询被误报权限校验未通过的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 新增 隐私政策提示框支持 showAlways 配置是否每次启动都弹窗提示 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
  + Android平台 修复 监听系统暗黑模式主题切换事件可能无效的Bug [详情](https://ask.dcloud.net.cn/question/157497)
  + Android平台 修复 云端打包 使用自有证书可能报 `Invalid keystore format` 错误的Bug [详情](https://ask.dcloud.net.cn/question/157057)
  + Android平台 修复 云端打包 配置应用清单文件 AndroidManifest.xml 的 package 属性值与包名相同时打包失败的Bug
  + iOS平台 修复 3.6.7版本引出的 设置启动页不自动关闭无效的Bug [详情](https://ask.dcloud.net.cn/question/157721)
  + iOS平台 修复 plus.screen.lockOrientation、plus.screen.unlockOrientation 在 iOS16 设备无效的Bug [详情](https://ask.dcloud.net.cn/question/155357)
  + iOS平台 修复 播放音频时无法正常录音的Bug [详情](https://ask.dcloud.net.cn/question/157408)
  + iOS平台 修复 设置暗黑模式跟随系统主题可能无效的Bug
* 【uni小程序SDK】
  + Android平台 修复 默认包含设置角标权限的Bug

#### 3.6.9.20221114-alpha
* 【uni-app】
  + 新增 uni错误规范 [详情](https://uniapp.dcloud.net.cn/tutorial/err-spec.html)
  + App、Web平台 新增 暗黑模式（DarkMode） [详情](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
  + App、Web平台 修复 radio 组件禁用状态样式异常的Bug
  + App平台 新增 nvue 页面 MapContext 支持 setLocMarkerIcon 方法 [详情](https://uniapp.dcloud.net.cn/api/location/map.html#setLocMarkerIcon)
  + App平台 新增 nvue list 组件支持 render-reverse 属性 [详情](https://uniapp.dcloud.net.cn/component/list.html#%E5%B1%9E%E6%80%A7)
  + App平台 修复 Vue2 项目使用组合式 API 时 onReady 声明周期 template ref 未绑定的Bug
  + App平台 修复 Vue3 项目 template ref 会被代理的Bug
  + App平台 修复 Vue3 项目设置导航栏背景色为 rgba 色值无效的Bug [详情](https://ask.dcloud.net.cn/question/135111)
  + App平台 修复 Vue3 项目根节点 height:100% 无效的Bug [详情](https://ask.dcloud.net.cn/question/156564)
  + App-Android平台 新增 【ext api】 uni.onMemoryWarning [详情](https://ext.dcloud.net.cn/plugin?id=10071)
  + App-Android平台 新增 uts插件 生命周期函数 on/offAppTrimMemory、on/offAppConfigChange 等 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#iodcloudutsandroid)
  + App-iOS平台 修复 Vue3 项目录音播放无效的Bug [详情](https://ask.dcloud.net.cn/question/155741)
  + 微信小程序平台 修复 3.6.8 版本引出的 Vue3 项目在 vite.config.js 内定义编译注入的全局常量导致使用了 uniCloud 的客户端报错的Bug
  + 支付宝小程序平台 修复 uni.showLoading 提示 mask 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/156944)
  + 支付宝小程序平台 修复 Vue3 项目 eventChannel 通信失败的Bug [详情](https://github.com/dcloudio/uni-app/issues/3945)
  + 抖音小程序平台 优化 默认启用 component2 [详情](https://ask.dcloud.net.cn/question/156550)
  + hello uts 新增 Android平台获取用户输入、播放asset音频、调用系统拍照示例 [详情](https://ext.dcloud.net.cn/plugin?id=9892)
* 【uniCloud】
  + 【重要】新增 uni-im 云端一体的、全平台的、免费的、开源即时通讯系统 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
  + jql语法 修复 使用 add 数据库运算方法报错的Bug [详情](https://ask.dcloud.net.cn/question/156261)
  + jql语法 修复 使用部分 js 关键字导致查询条件或 field 报错的Bug
  + jql语法 修复 使用 getTemp 联表查询时，如果主表关联字段在 schema 内为数组类型但实际数据无此字段时报错的Bug
  + 云对象 新增 url 化支持通过多段 path 路径调用方法，以第一段作为云对象方法名 [详情](https://uniapp.dcloud.net.cn/uniCloud/http.html#request-co-url)
  + 本地调试插件 修复 HBuilderX 3.6.7 引出的断点进入nodejs内置模块的Bug
  + 安全网络 调整 统一错误码规范 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#err-code)
  + uni-id 升级密码加密算法，支持hmac-sha256加密 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id/summary.html#password-safe)
  + uni-id 新增 开发者可以自定义密码加密规则 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id/summary.html#custom-password-encrypt)
  + uni-id 新增 支持将其他系统用户迁移至uni-id [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id/summary.html#move-users-to-uni-id)
  + uni-id 支持URL化方式请求 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#adapter-http)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 Stripe支付支持设置账单信息 [详情](https://uniapp.dcloud.net.cn/tutorial/app-payment-stripe.html)
  + Android平台 新增 支持暗黑模式 [详情](https://ask.dcloud.net.cn/article/36995)
  + Android平台 更新 uni-AD 今日头条穿山甲广告SDK 为 4.9.0.8 版；穿山甲GroMore广告SDK 为 4.8.0.0 版；腾讯优量汇广告SDK 为 4.492.1362 版
  + Android平台 更新 高德地图SDK为 9.5.0 版，高德定位SDK为 6.1.0 版，解决隐私合规检测可能报高德SDK收取MAC地址、ANDROID ID的问题 [详情](https://ask.dcloud.net.cn/question/154268)
  + Android平台 修复 3.6.7版本引出的 应用后台切前台插屏广告可能不显示的Bug
  + Android平台 修复 视频播放控件 VideoPlayer 隐私合规检测可能报`数字天堂SDK获取传感器`的Bug [详情](https://ask.dcloud.net.cn/question/156360)
  + Android平台 修复 原生隐私政策提示框在部分设备 message 内容可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/156445)
  + Android平台 修复 uts插件 libs 包含三方 aar 时，丢失部分 jar 包的Bug
  + Android平台 修复 uts插件 无法继承内部类的Bug
  + iOS平台 修复 3.6.0版本引出的 开屏广告自定义底部图片、背景色不生效的Bug
  + iOS平台 修复 标题栏 titleNView 设置默认导航栏颜色可能导致与状态栏颜色不一致的Bug
  + iOS平台 修复 setUIStyle 设置暗黑模式可能无效的Bug
  + iOS平台 修复 uts插件 类构造函数无法使用外参的Bug

#### 3.6.8.20221027-alpha
* 【uni-app】
  + 新增 Vue2 项目支持使用组合式 API [详情](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)
  + 修复 3.6.7 版本引出的 Vue3 项目使用 TypeScript 后部分对象无法访问的Bug [详情](https://github.com/dcloudio/uni-app/issues/3930)
  + App平台、Web平台 新增 地理位置更新相关接口 [详情](https://uniapp.dcloud.net.cn/api/location/location-change.html)
  + App平台 修复 3.6.7 版本引出 Vue3 项目的 nvue 页面全局样式无效的Bug [详情](https://ask.dcloud.net.cn/question/155639)
  + App平台 修复 Vue2 项目移除页面根节点后导致事件异常的Bug [详情](https://ask.dcloud.net.cn/question/155057)
  + App平台 修复 Vue2 项目列表不使用 index 作为 key 时更新数据导致事件异常的Bug [详情](https://ask.dcloud.net.cn/question/155238)
  + App-Android平台 优化 Vue3 项目 minUserAgentVersion 默认配置为 49，避免低版本webview上白屏无提示 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
  + App-Android平台 修复 uni.getStorageSync在某些情况下可能报`SyntaxError`错误的Bug [详情](https://ask.dcloud.net.cn/question/154284)
  + App-iOS平台 修复 在 iOS16 设备 nvue 页面关闭、开启下拉刷新效果时偶现崩溃的Bug
  + App-iOS平台 修复 3.6.0版本引出的 nvue list 组件内使用 ad 信息流广告组件偶发渲染空白的Bug [详情](https://ask.dcloud.net.cn/question/155752)
  + Web平台 修复 Vue2 项目中 css 媒体查询中使用 page 选择器不生效的Bug
  + 【重要】微信小程序平台 新增 uni-AD 安全激励视频，提供防刷的服务器回调 [详情](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + 支付宝小程序 新增 uni.onKeyboardHeightChange 监听键盘高度变化 [详情](https://uniapp.dcloud.net.cn/api/key.html#onkeyboardheightchange)
  + 支付宝小程序 修复 小程序组件中的事件触发时机较早时在 Vue 组件中无法监听的Bug
* 【uniCloud】
  + 【重要】新增 安全网络 客户端校验功能，防止伪造的客户端请求服务器 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client)
  + 新增 `uni-clear-temp-data` 插件，用于自动清理数据库中的过期数据 [详情](https://ext.dcloud.net.cn/plugin?id=9826)
  + 修复 HBuilderX插件 `uni-`开头的 schema 文件 右键菜单缺少【opendb检查更新】的Bug
  + 修复 HBuilderX插件 本地云函数调用 redis 接口传较大的数据时报错的Bug [详情](https://ask.dcloud.net.cn/question/155804)
  + 修复 uniIdRouter 使用相对路径跳转时附带的 uniIdRedirectUrl 参数错误的Bug [详情](https://ask.dcloud.net.cn/question/155904)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uts插件不支持泛型通配符语法的Bug [详情](https://ask.dcloud.net.cn/question/155942)
  + Android平台 修复 chooseVideo 使用相机拍摄视频在Android10及以上设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/155877)
  + Android平台 修复 chooseImage、chooseVideo 存在读取设备应用安装列表的行为可能导致隐私检测不合规的Bug
  + Android平台 修复 应用安全检测可能报`app关联启动`的Bug
  + Android平台 修复 3.6.0版本引出的 首次真机运行隐私政策提示框可能不弹出的Bug
  + iOS平台 更新 uni-AD 百度百青藤广告SDK 为 4.901 版；快手广告SDK 为 3.3.32 版
  + iOS平台 更新 微信SDK 为 1.9.6 版
  + iOS平台 修复 分享到微信收藏夹时跳转到朋友圈的Bug [详情](https://ask.dcloud.net.cn/question/155362)

#### 3.6.7.20221018-alpha
* 【uni-app】
  + 【重要】新增 uts iOS版插件。将uts代码转为swift代码。 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + 【重要】新增 `uni ext api`。将不常用的API剥离为uni_modules插件，但仍使用uni.开头的API。[详情](https://uniapp.dcloud.net.cn/api/extapi.html)
  + 【重要】App-Android平台 修复 getSystemInfo 的 deviceId 属性偶尔获取失败和多设备获取重复的Bug（注意此修改造成的向下兼容问题）[详情](https://uniapp.dcloud.net.cn/api/system/info.html)
  + vue3 项目 vite 依赖版本升级至最新 3.1.8
  + App平台、Web平台 新增 【ext api】 uni.getBatteryInfo [详情](https://uniapp.dcloud.net.cn/api/system/batteryInfo.html)
  + App平台、Web平台 修复 picker 组件日期类型无法使用超出默认的年份范围值的Bug [详情](https://ask.dcloud.net.cn/question/131332)
  + App平台、Web平台 修复 iOS16 系统 input 组件 type=digit 无法输入小数点的Bug [详情](https://ask.dcloud.net.cn/question/154584)
  + App平台、Web平台 修复 editor 组件 insertImage 触发 input 事件没有 alt 属性的Bug [详情](https://ask.dcloud.net.cn/question/155163)
  + App平台、Web平台 修复 vue3 项目 editor 组件重新加载获取不到 EditorContext 的Bug [详情](https://ask.dcloud.net.cn/question/154702)
  + App平台 新增 nvue 页面 picker-view 组件增加 mask-top-style、mask-bottom-style 属性 [详情](https://uniapp.dcloud.net.cn/component/picker-view.html)
  + App平台 优化 video 组件支持 title 属性 [详情](https://uniapp.dcloud.net.cn/component/video.html)
  + App平台 修复 hover-class 属性不支持多个 class 的Bug [详情](https://ask.dcloud.net.cn/question/152506)
  + App平台 修复 vue3 项目 uts 插件 export default class 不生效的Bug [详情](https://ask.dcloud.net.cn/question/154164)
  + App平台 修复 vue3 项目 v-for 可能渲染失败的Bug [详情](https://ask.dcloud.net.cn/question/154836)
  + App平台 修复 vue3 项目 tabbar.broderStyle 自定义色值无效的Bug [详情](https://ask.dcloud.net.cn/question/150718)
  + App平台 修复 vue3 项目 nvue 页面 switch 组件 disabled 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/154577)
  + App-Android平台 修复 3.5.5版本引出 input 组件自动获取焦点可能失效的Bug [详情](https://ask.dcloud.net.cn/question/153481)
  + App-iOS平台 修复 nvue swiper 组件使用 rpx 时在部分设备可能无法正常滑动切换的Bug [详情](https://ask.dcloud.net.cn/question/149260)
  + Web平台 优化 uni.previewImage 在 PC 端增加切换和关闭按钮
  + Web平台 修复 tabbar 某些情况下显示重复的 badge 的Bug [详情](https://ask.dcloud.net.cn/question/153336)
  + Web平台 修复 uni.openLocation 导航未自动获取当前位置Bug [详情](https://ask.dcloud.net.cn/question/155066)
  + Web平台 修复 vue3 项目 titleNView 中 buttons 的 select 为 true 时图标不显示的Bug [详情](https://ask.dcloud.net.cn/question/153179)
  + Web平台 修复 vue3 项目 进入 tabbar 重复触发 onLoad 的 Bug [详情](https://ask.dcloud.net.cn/question/154066)
  + web平台 修复 vue3 项目 CSS 中的 v-bind 使用 rpx 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3884)
  + 小程序平台 修复 改变数据时 setData 调用异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/3787)
  + 小程序平台 修复 vue3 项目 CSS 中的 v-bind 使用非 setup 中的数据不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3887)
  + 小程序平台 修复 vue3 项目 作用域插槽嵌套使用时可能渲染错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3886)
  + 小程序平台 修复 vue3 项目 作用域插槽静态数据渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/153150)
  + 小程序平台 修复 vue3 项目 v-for 里的插槽可能渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/155008)
  + 小程序平台 修复 vue3 项目 发行为混合分包，页面返回可能报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3923)
  + 微信小程序平台 修复 vue3 项目 scroll-view 的 drag 相关事件不触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3921)
  + 微信小程序平台 修复 vue3 项目 uni://form-field 不生效的Bug [详情](https://ask.dcloud.net.cn/question/155373)
  + 百度小程序平台 修复 uni.createIntersectionObserver 无法监听多个节点的Bug [详情](https://github.com/dcloudio/uni-app/issues/3835)
  + 百度小程序平台 修复 node_modules 目录中的静态资源生成目录错误的Bug [详情](https://ask.dcloud.net.cn/question/154595)
  + 百度小程序平台 修复 onInit 生命周期不触发的Bug [详情](https://ask.dcloud.net.cn/question/154352)
  + 百度小程序平台 修复 vue2 项目 使用 usingSwanComponents 配置动态库组件内事件无法获取参数的Bug [详情](https://ask.dcloud.net.cn/question/155281)
  + 百度小程序平台 修复 vue3 项目 不能正常使用动态库组件的Bug [详情](https://github.com/dcloudio/uni-app/issues/3864)
  + 支付宝小程序平台 修复 编译成小程序插件后 uni.hideLoading 等接口无法访问的Bug [详情](https://github.com/dcloudio/uni-app/issues/2974)
  + 支付宝小程序平台 修复 page-container 组件被当作自定义组件编译的Bug [详情](https://ask.dcloud.net.cn/question/154028)
  + 支付宝小程序平台 修复 uni.showToast 不支持 duration 参数的Bug [详情](https://ask.dcloud.net.cn/question/147279)
  + 支付宝小程序平台 修复 小程序插件内的组件未使用事件运行报错的Bug [详情](https://github.com/dcloudio/uni-app/pull/3903)
  + QQ小程序平台 修复 vue3 项目 uni.uni.createCanvasContext 传入 this 报错的Bug [详情](https://ask.dcloud.net.cn/question/154223)
  + 抖音小程序平台 新增 支持使用小程序插件 [详情](https://github.com/dcloudio/uni-app/issues/3917)
  + 抖音小程序平台 修复 vue3 项目使用小程序自定义组件可能报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3915)
  + 快手小程序平台 新增 页面支持分包 [详情](https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages)
  + 快手小程序平台 优化 uni.requestPayment 实现改用 ks.pay [详情](https://ask.dcloud.net.cn/question/152948)
  + uni统计 修复 3.4.9版本引出的 deviceId 获取方式变化，导致 uni统计2.0 App-Android 平台部分统计数据不准确的Bug [详情](https://ask.dcloud.net.cn/article/40097)
* 【uniCloud】
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
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK iOS为 4.13.90 版；快手广告SDK Android为3.3.31，iOS为 3.3.31 版；快手内容联盟SDK iOS为 3.3.32 版；今日头条穿山甲SDK iOS为 4.8.0.3 版；穿山甲GroMore广告SDK iOS为 3.7.0.0 版；Sigmob广告联盟SDK Android为 4.7.0 版，iOS为 4.5.0 版；百度百青藤广告SDK Android为 9.241 版；华为广告SDK Android为 13.4.56.302 版
  + 【重要】Android平台 修复 plus.device.uuid 在高版本Android上不同设备获取的值可能相同的Bug。如之前依赖uuid，需注意处理兼容
  + 新增 plus.device.getDeviceId 获取匿名设备标识 [详情](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getDeviceId)
  + Android平台 新增 模板隐私政策提示框支持配置`游客模式`按钮 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
  + Android平台 更新 Paypal SDK 为 0.6.2 版，解决设置targetSdkVersion为31打包失败的问题 [详情](https://ask.dcloud.net.cn/question/154976)
  + Android平台 修复 UniPush 异步获取推送标识在部分情况可能返回慢的Bug
  + Android平台 修复 应用设置仅支持竖屏时在部分Android8设备可能引起应用崩溃的Bug
  + Android平台 修复 X5 内核在部分情况无法正确加载的Bug [详情](https://ask.dcloud.net.cn/question/152854)
  + Android平台 修复 直播推流 LivePusher 在部分场景可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/147593)
  + Android平台 修复 视频播放控件 VideoPlayer 切换视频资源后静音状态可能失效的Bug [详情](https://ask.dcloud.net.cn/question/153257)
  + Android平台 修复 视频播放控件 VideoPlayer 销毁时可能导致卡顿的Bug [详情](https://ask.dcloud.net.cn/question/153483)
  + Android平台 修复 视频播放控件 VideoPlayer 在部分情况下标题栏不显示的Bug
  + Android平台 修复 chooseVideo 选择视频文件在鸿蒙系统可能无法加载缩略图的Bug [详情](https://ask.dcloud.net.cn/question/152527)
  + Android平台 修复 一键登录 全屏模式设置背景图时沉浸式效果不正确的Bug
  + Android平台 修复 上架应用市场审核可能报`数字天堂SDK获取传感器的行为`的Bug [详情](https://ask.dcloud.net.cn/question/155043)
  + Android平台 修复 本地打包生成的自定义基座可能无法识别安装的Bug
  + Android平台 修复 3.6.0版本引出的 在 Android4.4 设备无法正常运行的Bug [详情](https://ask.dcloud.net.cn/question/153910)
  + 【重要】iOS平台 新增 云端打包支持原生应用配置文件 Info.plist 和资源目录 Resources [详情](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios)
  + iOS平台 修复 使用`阿里百川电商`SDK 5.x版，云端打包报符号冲突错误的Bug [详情](https://ask.dcloud.net.cn/question/153138)
  + iOS平台 修复 视频播放控件 VideoPlayer 标题栏、进度条样式不正确的Bug [详情](https://ask.dcloud.net.cn/question/153945)
  + iOS平台 修复 uni-AD 穿山甲Gromore 激励视频偶现可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/153717)
  + iOS平台 修复 3.6.0版本引出的 uni原生语言插件Hook不到applicationWillEnterForeground、applicationDidEnterBackground等系统事件的Bug
  + iOS平台 修复 安全检测可能报获取设备idfv的Bug

#### 3.6.3.20220919-alpha
* 【uni-app】
  + 小程序平台 修复 onReady 生命周期触发两次的Bug [详情](https://ask.dcloud.net.cn/question/153422)

#### 3.6.1.20220907-alpha
* 【uni-app】
  + App-Android平台 修复 uts 插件 部分情况下编译后丢失导入类的Bug [详情](https://ask.dcloud.net.cn/question/152597)
  + App平台 修复 切换tabbar页面时使用uni.createVideoContext的pause无法暂停播放的Bug[详情](https://ask.dcloud.net.cn/question/151933)
  + App-Android平台 修复 uts 插件 定义类型时使用 kotlin 基础类型（如 Int）时，编译报错的Bug
  + App-Android平台 修复 uts 插件 云打包时未包含 AndroidManifest.xml 的Bug
  + App-Android平台 修复 bindingx 执行 evaluateColor 可能出现异常的Bug [详情](https://ask.dcloud.net.cn/question/151759)
  + App-Android平台 修复 uni.reLaunch 打开非 tabbar nvue 页面可能依然显示 tabbar 的Bug [详情](https://ask.dcloud.net.cn/question/143792)
  + App-Android平台 修复 GooglePlay渠道包无法正常使用高德地图的Bug [详情](https://ask.dcloud.net.cn/question/152668)
  + App-Android平台 修复 nvue 作为首页使用 picker 可能引起应用无响应的Bug [详情](https://ask.dcloud.net.cn/question/151819)
  + App-iOS平台 修复 nvue tabbar 页面 uni.reLaunch 不触发 onUnload 生命周期的Bug [详情](https://ask.dcloud.net.cn/question/152738)
  + Web平台 修复 调用 uni.setClipboardData 会弹起键盘的Bug [详情](https://github.com/dcloudio/uni-app/issues/3569)
  + 小程序平台 优化 小程序组件内部支持使用 kebab-case 事件名 [详情](https://github.com/dcloudio/uni-app/issues/1802)
  + 微信小程序平台 修复 wxs 内调用 triggerEvent 无法携带事件参数的Bug [详情](https://github.com/dcloudio/uni-app/issues/3829)
  + 快手小程序平台 修复 授权手机号的无回调信息的Bug [详情](https://ask.dcloud.net.cn/question/143078)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 UniPush使用的个推SDK为 3.2.12.0 版，个推核心组件SDK为 3.1.10.0 版，OPPO厂商推送SDK为 3.1.0 版，华为厂商推送SDK为 6.5.0.300 版； 一键登录使用的个验SDK为 3.0.6.0 版；支付宝SDK为 15.8.11 版；新浪微博SDK为 12.5.0 版；友盟统计SDK为 9.5.2 版；解决提交应用市场可能隐私检测被拒的问题 [详情](https://ask.dcloud.net.cn/question/143573)
  + Android平台 修复 getVideoInfo 获取纵向视频文件的宽高值相反的Bug [详情](https://ask.dcloud.net.cn/question/151205)
  + Android平台 修复 previewImage 预览图片时可能出现偏移的Bug [详情](https://ask.dcloud.net.cn/question/151966)
  + iOS平台 修复 uploader 上传文件获取 uploadedSize 值不准确的Bug
* 【uni小程序SDK】
  + iOS平台 修复 uni.setStorage 存储数据可能出错的Bug

#### 3.6.0.20220901-alpha
* 【uni-app】
  + 【重要】新增 uts Android版插件 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + App-iOS平台 修复 uni.openLocation 底部安全区适配问题 [详情](https://ask.dcloud.net.cn/question/150074)
  + App-iOS平台 修复 uni.chooseLocation 可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/152367)
  + Web平台 新增 支持配置和使用高德地图 [详情](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfigmaps)
  + 支付宝小程序平台 修复 配置全局小程序组件后编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3619)
  + 支付宝小程序平台 修复 启用小程序基础库2.0配置后访问 $slots 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3529)
  + 抖音小程序平台 新增 vue2 项目支持 onUploadDouyinVideo 生命周期 [详情](https://ask.dcloud.net.cn/question/151113)
* 【uniCloud】
  + 调整 本地调试插件 云对象运行参数配置文件改为 ${objectName}.param.js [详情](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#run-obj-param)
  + 修复 本地调试插件 HBuilderX 3.5.5 版本引出的使用 push 扩展库导致其他云函数不能正常运行的Bug
  + 修复 本地调试插件 HBuilderX 3.5.5 版本引出的连接本地云函数时偶发 `SIGN_PARAM_INVALID` 错误
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】Android平台 新增 云端打包支持配置原生应用清单文件 AndroidManifest.xml 和应用资源目录 res、assets [详情](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)
  + Android平台 更新 uni-AD 快手广告SDK Android为 3.3.29 版；快手内容联盟SDK Android为 3.3.31 版
  + Android平台 修复 uni-AD Sigmob激励视频广告点击跳过按钮后关闭触发 onClose 事件返回的 isEnded 属性值可能不准确的Bug
  + Android平台 修复 腾讯云安全检测可能误报`含数字天堂(dcloud)广告插件,可读取设备信息,可能泄露您的个人隐私`的Bug [详情](https://ask.dcloud.net.cn/question/150624)
  + Android平台 修复 安全检测可能报快手广告 SDK 频繁获取用户信息的Bug
  + iOS平台 修复 3.5.0版本引出的 快手开屏广告点击打开落地页返回后无法进入应用首页的Bug [详情](https://ask.dcloud.net.cn/question/152441)
  + iOS平台 修复 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug

#### 3.5.5.20220825-alpha
* 【uni-app】
  + 修复 项目路径包含括号时编译异常的Bug [详情](https://ask.dcloud.net.cn/question/150173)
  + App平台 修复 vue 页面 cover-view 组件 flex 布局无效的Bug [详情](https://ask.dcloud.net.cn/question/151697)
  + App平台 修复 vue3 项目 uni.getSystemInfo 获取 windowHeight 值不准确的Bug [详情](https://ask.dcloud.net.cn/question/150862)
  + App平台 修复 vue3 项目 vue 页面 map 组件更新中心坐标后显示错误的Bug [详情](https://ask.dcloud.net.cn/question/151438)
  + App-Android平台 修复 uni.saveImageToPhotosAlbum 保存网络图片可能覆盖上次保存的图片的Bug [详情](https://ask.dcloud.net.cn/question/125357)
  + App-Android平台 修复 picker 组件获取焦点异常的Bug [详情](https://ask.dcloud.net.cn/question/150454)
  + App-Android平台 修复 nvue 页面 map 组件 customCallout 设置图片可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/150166)
  + App-iOS平台 修复 uni.getSystemSetting 获取的 bluetoothEnabled、locationEnabled 值不准确的Bug
  + App-iOS平台 修复 nvue 页面 map 组件 marker 调用 moveAlong 方法没有中断前一次动画的Bug [详情](https://ask.dcloud.net.cn/question/151411)
  + App-iOS平台 修复 3.5.2 引出的 nvue 页面 ad-content-page 组件在某些场景可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/151778)
  + Web平台 修复 vue3 项目 css 环境变量 --window-top 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/150842)
  + Web平台 修复 vue3 项目发行模式 showLoading 图标大小显示错误的Bug [详情](https://ask.dcloud.net.cn/question/149819)
  + Web平台 修复 custom-tab-bar 组件使用 uni.setTabBarItem 设置 visible 无效的Bug [详情](https://ask.dcloud.net.cn/question/132947)
  + 小程序平台 修复 v-for 内使用复杂表达式后 v-model 失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3173)
  + 支付宝小程序、百度小程序、快手小程序、抖音小程序平台 优化 支持自动拷贝 ext.json 文件
  + 支付宝小程序平台 优化 uni.saveImageToPhotosAlbum 接口不再使用旧版 saveImage 接口
  + 抖音小程序平台 修复 vue2 项目 反复快速创建销毁页面时组件无法渲染的Bug
* 【uniCloud】
  + 优化 阿里云 数据库超时时间由3秒调整为5秒
  + 新增 阿里云 通过代理解决微信服务器需要固定IP的问题 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#http-proxy-client)
  + 新增 提供了一批新API，更优雅的处理同实例多并发请求
    - 新增 uniCloud.getRequestList 用于获取当前云函数实例内正在处理的请求的 requestId 列表 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-request-list)
    - 云函数 新增 context.requestId 用于获取当前请求id [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#context)
    - 云对象 新增 this.getUniCloudRequestId() 用于获取当前请求id [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-request-id)
  + 新增 云函数 uniCloud.getCloudInfos 获取云端信息。同时兼容有无并发请求的情况 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-cloud-infos)
  + 新增 云函数 uniCloud.getClientInfos 获取客户端信息。同时兼容有无并发请求的情况 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-client-infos)
  + 修复 客户端sdk 未关联 uniCloud 服务空间时使用 uniCloud 对象导致报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3758)
  + 修复 JQL 一个表内多个包含 parentKey 字段时树查询报错的Bug [详情](https://ask.dcloud.net.cn/question/151834)
  + 修复 本地调试插件 部分情况下全局对象复用导致的扩展库提示不正确的Bug [详情](https://ask.dcloud.net.cn/question/150357)
  + 优化 本地调试插件 持续调试会导致内存占用过高并且响应缓慢的Bug
  + 优化 uniIdRouter 支持对首页、直达页面进行拦截并跳转到登录页面
  + 优化 uni-id-co 密码规则调整，废除之前的简单校验，允许配置密码强度 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id/summary.html#password-strength)
  + 调整 uni-id-co 存储用户 openid（`wx_openid.${mp|h5|app|web}`）时同时在`wx_openid.${mp|h5|app|web}_${DCloudAppId}`存储了一份副本，参考：[微信登录](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin)、[QQ登录](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-qq)
  + 调整 uni-id-co 依赖 uni-open-bridge-common 存储用户 `session_key`、`access_token` 等凭据 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id/summary.html#save-user-token)
  + 新增 uni-id-co 增加 beforeRegister 钩子用户在注册前向用户记录内添加一些数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id/summary.html#before-register)
  + 【重要】新增 uni-id-pages Web端支持微信登录（包括微信公众号内H5登录 和 普通浏览器内手机微信扫码登录）[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#weixinlogin)
  + 新增 uni-id-pages 支持密码强度（是否必须包含大小写字母、数字和特殊符号以及长度）配置 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#config)
  + 新增 uni-id-pages 登录成功（全局）回调事件：`uni-id-pages-login-success`，支持通过[uni.$on](https://uniapp.dcloud.net.cn/api/window/communication.html#on)监听 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
  + 新增 uni-open-bridge 开源库，统一管理微信等三方开放平台的凭据 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 QQ 登录、分享SDK版本为 3.5.12 版；百度定位SDK为 9.3.5 版，百度地图SDK为 7.5.3 版
  + Android平台 修复 UniPush 2.0 厂商推送通道不支持 payload 字段为非 json 字符串的Bug
  + Android平台 修复 plus.push.createMessage 创建本地消息 option 参数设置 when 字段无效的Bug
  + Android平台 修复 plus.runtime.install 升级 apk 可能报空指针的Bug
  + iOS平台 更新 uni-AD 百度百青藤广告SDK为 4.891 版
  + iOS平台 修复 3.5.0版本引出的 uni-AD 信息流广告设置宽度可能引起显示异常的Bug [详情](https://ask.dcloud.net.cn/question/150789)
  + iOS平台 修复 3.5.0版本引出的 使用百度定位模块需要勾选IDFA的Bug
  + iOS平台 修复 3.5.3版本引起的 标准真机运行基座中一键登录返回的 token 值不正确的Bug
  + iOS平台 修复 从本地相册中选择慢动作视频显示的时长不准确的Bug [详情](https://ask.dcloud.net.cn/question/150531)
* 【uni小程序SDK】
  + Android平台 优化 默认菜单字体大小为20px

#### 3.5.4.20220805-alpha
* 【uni-app】
  + App平台 优化 vue2 项目 web-view 组件通过 webviewStyles 设置更多样式 [详情](https://ask.dcloud.net.cn/question/149212)
  + App平台 优化 vue 页面 web-view 组件内页面默认支持绘制到安全区外 [详情](https://ask.dcloud.net.cn/question/149472)
  + App平台 修复 openLocation、chooseLocation 在应用语言改变时没有跟随变化的Bug [详情](https://ask.dcloud.net.cn/question/149216)
  + App-Android平台 新增 uni.scanCode autoZoom 属性，可控制扫码时是否启用自动放大功能 [详情](https://uniapp.dcloud.net.cn/api/system/barcode.html)
  + App-Android平台 修复 nvue map 组件 maker 点聚合坐标重叠无法展现的Bug [详情](https://ask.dcloud.net.cn/question/149665)
  + App-Android平台 修复 nvue map 组件 polyline、polygon 清空数据不生效的Bug
  + App-iOS平台 修复 uni.setTabBarItem 动态更新 icon 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/149955)
  + App-iOS平台 修复 nvue map 组件使用 Google 地图时，多个页面中使用地图组件可能无法正常加载的Bug [详情](https://ask.dcloud.net.cn/question/150080)
  + Web平台 优化 web-view 组件支持 fullscreen 属性 [详情](https://uniapp.dcloud.net.cn/component/web-view.html)
  + Web平台 修复 vue3 项目 canvas 组件 touch 事件 stop、prevent 修饰符无效的Bug [详情](https://ask.dcloud.net.cn/question/148195)
  + 支付宝小程序平台 修复 vue3 项目 访问 $slots 不生效的Bug [详情](https://ask.dcloud.net.cn/question/150373)
* 【uniCloud】
  + 【重要】新增云函数ip防刷功能，避免大量无效请求导致云函数、数据库响应变慢 [详情](https://uniapp.dcloud.net.cn/uniCloud/ip-filter.html)
  + 修复 部分场景下在 main.js 内使用 uniCloud 报错的Bug
  + 修复 uni-admin 在 vue3 项目中使用 uni.showLeftWindow 后组件上 showLeftWindow 值并没有更新的Bug [详情](https://ask.dcloud.net.cn/question/149618)
  + uni统计2 新增 前端数据上报周期配置项 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html#report-time)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 3.5.0版本引出的 使用百度地图或百度定位时未勾选`使用广告标识（IDFA）`云打包报错的Bug
  + iOS平台 修复 3.5.3版本引出的 开通 uni-AD 开屏广告后台切前台可能导致页面回退不正常的Bug [详情](https://ask.dcloud.net.cn/question/150053)
  + iOS平台 修复 图片选择界面设置 crop 属性选择 iCloud 图片黑屏的Bug [详情](https://ask.dcloud.net.cn/question/149219)

#### 3.5.3.20220727-alpha
* 【uni-app】
  + App平台 新增 uni.openAppAuthorizeSetting 跳转系统授权管理页 [详情](https://uniapp.dcloud.io/api/system/openappauthorizesetting.html)
  + App-iOS平台 修复 https 请求配置自签名 p12 证书包含中间证书时请求报错的Bug [详情](https://ask.dcloud.net.cn/question/149526)
  + App-iOS平台 修复 nvue box-shadow 样式设置 spread 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/148415)
* 【uniCloud】
  + 新增 uni-admin uni统计支持上传 sourceMap，报错可准确回溯源码 [详情](https://uniapp.dcloud.io/uni-stat-v2.html#sourcemap-parse-error)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.480.1350 版，iOS为 4.13.80 版；快手广告SDK iOS为 3.3.27 版；今日头条穿山甲SDK iOS为 4.7.0.0 版；穿山甲GroMore广告SDK iOS为 3.5.1.0 版；Sigmob广告联盟SDK iOS为 4.2.1 版
  + Android平台 更新 UniPush 使用的个推SDK为 3.2.11.0 版，个推核心组件SDK为 3.1.9.0 版；谷歌渠道个推SDK为 3.2.10.8 版，个推核心组件SDK为 3.1.9.10 版；解决安全检测可能报个推SDK超频获取信息的问题 [详情](https://ask.dcloud.net.cn/question/149127)
  + Android平台 修复 上架某些应用市场审核检测可能报应用后台运行时存在获取任务列表行为的Bug
  + iOS平台 修复 3.5.0版本引出的 创建本地消息 plus.push.createMessage 不传 option 参数引起应用崩溃的Bug
  + iOS平台 修复 sqlite 在应用 restart 后 executeSql 修改数据报`Attempt to write a readonly database`错误的Bug [详情](https://ask.dcloud.net.cn/question/139765)
  + iOS平台 修复 从本地相册中选择慢动作视频引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/149219)
  + iOS平台 修复 视频播放 video 的 seek 方法传入小于当前播放时间值无效的Bug [详情](https://ask.dcloud.net.cn/question/148781)
  + iOS平台 修复 打开包含视频播放 video 控件的页面会打断其他App后台音乐播放的Bug [详情](https://ask.dcloud.net.cn/question/146719)
* 【uni小程序SDK】
  + iOS平台 修复 未开启后台运行，多次切换小程序和原生界面可能导致小程序返回按钮无效的Bug

#### 3.5.2.20220719-alpha
* 【uni-app】
  + App平台 新增 uni.getSystemSetting 获取手机系统的定位、蓝牙、wifi开关等设置 [详情](https://uniapp.dcloud.io/api/system/getsystemsetting)
  + App平台 新增 uni.getAppAuthorizeSetting 获取应用权限状态，是否被授予定位、相册等权限 [详情](https://uniapp.dcloud.io/api/system/getappauthorizesetting)
  + App平台 新增 uni.createPushMessage 创建本地通知栏消息 [详情](https://uniapp.dcloud.io/api/plugins/push.html#createpushmessage)
  + App平台 修复 vue3 项目 首次启动调用 uni.getPushClientId 获取不到cid的Bug
  + App平台 修复 vue2 项目 nvue 页面访问 process.env 报错的Bug [详情](https://ask.dcloud.net.cn/question/147948)
  + App、H5平台 修复 vue3 项目 uni.openLocation 未配置 latitude longitude 时不触发 fail 回调的Bug
  + App-Android平台 修复 nvue map 组件放大地图时标记点气泡 callout 不显示的Bug [详情](https://ask.dcloud.net.cn/question/148741)
  + App-iOS平台 修复 nvue image 组件 src 属性更新使用 gif 格式图片时无法切换的Bug [详情](https://ask.dcloud.net.cn/question/148807)
  + App-iOS平台 修复 nvue 组件动态修改 border-radius 样式可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/144709)
  + 百度小程序平台 修复 vue3 项目 uni.login 失效的Bug [详情](https://ask.dcloud.net.cn/question/117304)
* 【uniCloud】
  + 【重要】新增 JQL Cache Redis。将 MongoDB 查询结果缓存到 Redis [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-cache-redis.html)
  + 新增 云对象支持URL化 [详情](https://uniapp.dcloud.net.cn/uniCloud/http.html#cloudobject)
  + 新增 云对象支持定时触发 [详情](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#cloudobject)
  + 新增 uniCloud web控制台支持对服务空间进行成员管理 [详情](https://uniapp.dcloud.io/uniCloud/concepts/space.html#collaboration)
  + 修复 JQL操作成功时新增返回`errCode: 0`，兼容uniCloud响应体规范
  + 调整 uni-id-common 仍将token存储在用户表的token字段内，与旧版本uni-id保持一致
  + 修复 uni-id-common 部分情况下报read property 'reduce' of undefined的Bug
  + 优化 uni-admin 应用管理模块可管理App下载地址、小程序二维码等更多应用信息 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#app-manager)
  + 调整 uni-admin 内置 统一发布页（uni-portal）插件 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#uni-portal)
  + 调整 uni-admin 内置 App升级中心（uni-upgrade-center）插件，并支持多应用商店更新 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#uni-upgrade-center)
  + 新增 uni-id-pages 允许覆盖uni-id-co内置校验规则 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#custom-validator)
  + 修复 uni-id-pages uni-id-co的logout接口时没有删除token的Bug
  + 修复 uni-id-pages app端 clientInfo.appVersionCode 为数字导致 uni-id-co 校验无法通过的Bug
  + 修复 uni-id-pages 微信小程序调用uni-id-co接口报错的Bug [详情](https://ask.dcloud.net.cn/question/148877)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持穿山甲GroMore广告 包括开屏、信息流、插屏、全屏视频、激励视频广告
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.472.1342 版；快手广告SDK Android为 3.3.27 版，iOS为 3.3.26 版；快手内容联盟SDK Android为 3.3.30 版；百度百青藤广告SDK Android为 9.223 版，iOS为 4.883 版；Sigmob广告联盟SDK Android为 4.4.0 版；华为广告SDK Android为 13.4.54.300 版
  + iOS平台 修复 3.5.0版本引出的 plus.runtime.restart 重启应用后页面返回按钮失效的Bug
  + iOS平台 修复 3.5.0版本引出的 uni-AD 开通基础广告首次安装可能卡在启动页面的Bug [详情](https://ask.dcloud.net.cn/question/149192)
  + iOS平台 修复 plus.runtime.openWeb 在 iOS15.4 及以上设备打开页面导航栏显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/148585)
  + iOS平台 修复 标题栏 titleNView 更新按钮样式导致布局错位的Bug [详情](https://ask.dcloud.net.cn/question/148542)
  + iOS平台 修复 plus.navigator.getOrientation 在设备横屏状态时返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/148843)
  + iOS平台 修复 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
* 【Uni小程序SDK】
  + iOS平台 修复 偶现内存泄漏可能引起应用崩溃的Bug
  + iOS平台 修复 直达二级页面后再打开此页面，关闭时会直接返回首页的Bug

#### 3.5.1.20220707-alpha
* 【uni-app】
  + 修复 vue3 项目 编译器清空输出目录可能报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3650)
  + App、H5平台 优化 movable-view 组件触摸过程中支持设置 disabled 属性 [详情](https://github.com/dcloudio/uni-app/issues/2384)
  + App平台 修复 map 组件在部分设备显示黑色边框的Bug [详情](https://ask.dcloud.net.cn/question/145449)
  + App平台 修复 vue3 项目 input 绑定动态 type 报错的Bug
  + App平台 修复 vue3 项目 nvue 页面组件插槽样式可能不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3632)
  + App平台 修复 vue3 项目 vue 页面在 iOS 平台内存不足导致白屏未自动恢复的Bug [详情](https://ask.dcloud.net.cn/article/35913)
  + App平台 修复 vue3 项目 nvue 页面 webview 组件 onPostMessage 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/144731)
  + App-Android平台 修复 nvue 页面为首页时在部分特定手机启动界面关闭过慢的Bug
  + App-Android平台 修复 nvue image 组件在部分设备可能报空指针错误的Bug [详情](https://ask.dcloud.net.cn/question/147965)
  + App-iOS平台 优化 IAP 支付逻辑 补充手动关闭订单策略，解决自动关单但后续报错可能造成丢单的Bug [详情](https://uniapp.dcloud.net.cn/api/plugins/payment.html#iap)
  + App-iOS平台 修复 uni.getSystemInfo 获取某些设备型号不正确的Bug [详情](https://ask.dcloud.net.cn/question/148344)
  + App-iOS平台 修复 动态设置 tabBar 隐藏再显示后高斯模糊效果失效的Bug [详情](https://ask.dcloud.net.cn/question/146478)
  + App-iOS平台 修复 nvue bindingx 在滚动视图中使用 transform.translateY 结果有偏差的Bug [详情](https://ask.dcloud.net.cn/question/144209)
  + App-iOS平台 修复 nvue input 组件嵌套在 list 中时，页面上下滑动 v-model 绑定的值会置空的Bug [详情](https://ask.dcloud.net.cn/question/146246)
  + App-iOS平台 修复 nvue textarea 组件设置 auto-height 为 true 时初始高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/146688)
  + H5平台 补齐 vue2 项目支持 uni.getLaunchOptionsSync [详情](https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html)
  + H5平台 补齐 vue2 项目支持 uni.getEnterOptionsSync [详情](https://uniapp.dcloud.net.cn/api/getEnterOptionsSync.html)
  + H5平台 优化 hover-class 支持鼠标事件
  + H5平台 优化 map 组件 markertap 事件支持返回坐标信息
  + H5平台 修复 map 组件 tap 事件重复触发的Bug
  + 小程序平台 优化 vue2 项目 slot name 支持动态赋值 [详情](https://ask.dcloud.net.cn/question/82506)
  + 小程序平台 修复 vue3 项目部分情况下，编译后组件 js 文件名不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3629)
  + 小程序平台 修复 vue3 项目部分情况下，数据更新后，页面未渲染的Bug [详情](https://github.com/dcloudio/uni-app/issues/3648)
  + 小程序平台 修复 vue2 项目命名插槽使用 v-if 编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/2635)
  + 微信小程序、支付宝小程序平台 新增 vue3 项目 manifest.json 支持 mergeVirtualHostAttributes 配置，用于合并虚拟节点外部样式 [详情](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + 百度小程序、抖音小程序平台 修复 vue3 项目 部分情况下，组件 ref 获取不到的Bug [详情](https://github.com/dcloudio/uni-app/issues/3615)
  + 百度小程序、抖音小程序平台 修复 vue3 项目 组件事件名包含`-`或`:`时，无法触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3616)
  + 微信小程序平台 修复 vue3 项目 input 组件动态 type 在 iOS 平台不生效的Bug [详情](https://ask.dcloud.net.cn/question/147787)
  + 微信小程序平台 修复 vue3 项目 微信开发者工具中配置编译模式丢失的Bug [详情](https://github.com/dcloudio/uni-app/issues/3655)
  + 微信小程序平台 修复 vue3 项目 project.config.json 更新可能导致开发者工具报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3524)
  + 百度小程序平台 修复 vue3 项目 事件触发可能混乱的Bug[详情](https://github.com/dcloudio/uni-app/issues/3647)
  + 抖音小程序平台 修复 vue3 项目 部分情况下，组件未更新的Bug [详情](https://github.com/dcloudio/uni-app/issues/3625)
* 【uniCloud】
  + 新增 uni-push2.0 全端支持（App、小程序、web）的云端一体的统一推送服务 [详情](https://uniapp.dcloud.io/unipush-v2.html)
  + 新增 腾讯云平台 数据万象，对云存储文件进行图片缩放、增加水印等计算功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage.html#%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86)
  + 新增 keepRunningAfterReturn 配置云函数是否能在 return 后继续运行，仅腾讯云 nodejs12 生效 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#keep-running)
  + 新增 Redis扩展库 增加 quit 接口用于断开 redis 连接 [详情](https://uniapp.dcloud.net.cn/uniCloud/redis.html#quit)
  + 新增 JQL数据库管理 支持使用更新操作符 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#update-command)
  + 修复 uniIdRouter 在 loginPage 为 tabbar 页面时无法自动跳转的Bug
  + 调整 云函数 context 内增加 `uniIdToken`、`FUNCTION_TYPE` [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-callfunction.html#context)
  + 调整 云对象 cloudInfo 内增加 functionName、functionType [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-cloud-info)
  + 调整 云对象 clientInfo 内增加 source [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + 修复 本地调试插件 使用运行菜单运行云函数时可能出现日志顺序错误的Bug
  + 修复 本地调试插件 项目AppId由无权使用调整为有权使用时（重新获取AppId或获得所有者授权）重启项目不生效的Bug
  + 调整 本地调试插件 云函数本地运行时配置的运行参数clientInfo内字段调整 [详情](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#mock-client-info)
  + 新增 HBuilderX opendb schema文件 右键菜单增加【opendb检查更新】，支持从云端更新 opendb schema文件，并生成 JQL 升级迁移文件用于数据迁移
  + 修复 HBuilderX 打开云对象子目录下的文件时按 Ctrl+r 运行菜单无运行云对象选项的Bug
  + 【重要】调整 uni统计2 版本记录复用 uni升级中心 的 opendb-app-versions表，废弃 uni-stat-app-versions表 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html#upgrade)
  + uni统计2 新增 启动时上报设备各种参数入库 opendb-device 表（目前没有可视化报表，开通 uni-push2.0 与 uni统计2.0 自动上报 push_clientid 到 opendb-device表）
  + uni统计2 新增 admin端 app崩溃统计页面，补充崩溃率统计
  + uni统计2 修复 admin端 js报错统计页面，错误率计算不准确的Bug
  + uni统计2 修复 admin端 切换版本或者修改时间等操作后，趋势图状态显示不正确的Bug
  + uni统计2 修复 admin端 部分页面首次进入时界面闪烁的问题
* 【App插件(含5+App和uni-app的App端)】
  + 优化 uni-AD 激励视频和信息流广告支持并发请求
  + Android平台 新增 Google Pay 支持配置支付网关信息 buildTokenizationSpecification [详情](https://uniapp.dcloud.io/tutorial/app-payment-google.html#%E4%BD%BF%E7%94%A8google%E6%94%AF%E4%BB%98)
  + Android平台 更新 腾讯X5内核为 4.3.0.299 版
  + Android平台 新增 Facebook 登录 SDK 为 12.0.0 版，解决登录受限的问题 [详情](https://ask.dcloud.net.cn/question/147788)
  + Android平台 修复 3.5.0 版本引出的 uni-AD 特定情况可能只展示同一广告源广告的Bug
  + Android平台 修复 uploader 上传文件请求返回错误响应码时，无法获取服务器返回数据的Bug
  + Android平台 修复 setBadgeNumber 设置角标在新荣耀设备不生效的Bug [详情](https://ask.dcloud.net.cn/question/140910)
  + iOS平台 新增 IAP支付 手动关闭订单、获取未关闭订单列表等功能，以解决自动关闭订单在某些情况引发的订单丢失的Bug [详情](https://uniapp.dcloud.io/tutorial/app-payment-aip.html)
  + iOS平台 修复 3.5.0 版本引出的 uni-AD 穿山甲开屏广告偶现 bottomView 没有关闭的Bug
  + iOS平台 修复 首次启动 App 获取安全区域高度可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/148277)
  + iOS平台 修复 设备型号名称 model、deviceModel 返回值不规范的Bug
* 【Uni小程序SDK】
  + Android平台 修复 getAppRuningForAppid 在部分场景可能报空指针错误的Bug
  + iOS平台 修复 小程序未开启后台运行，前台运行时调用 open 方法直达页面无效的Bug

#### 3.5.0.20220623-alpha
* 【uni-app】
  + 新增 uni-app vue2项目 支持使用`@/pages.json`引用条件编译后的`pages.json`文件
  + 修复 3.4.17 版本引发的 vue3 项目 运行在小程序平台 `<script setup>`中使用 const 定义 reactive 对象访问出错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3606)
  + App、Web平台 修复 3.4.10 版本引出的 vue2项目 image 组件 load 事件图像大小信息不准确的Bug [详情](https://ask.dcloud.net.cn/question/147174)
  + App平台 优化 slot name 支持动态赋值 [详情](https://ask.dcloud.net.cn/question/95109)
  + App-Android平台 新增 manifest.json 支持 webview 配置，系统 webview 低于指定版本时，弹出提示或者下载 x5 内核后继续启动 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
  + App-Android平台 修复 tabbar 启用高斯模糊后获取 windowBottom 错误的Bug [详情](https://ask.dcloud.net.cn/question/146583)
  + App-iOS平台 修复 uni.request 访问特定接口可能数据解析出现乱码的Bug [详情](https://ask.dcloud.net.cn/question/145530)
  + 微信小程序、支付宝小程序 新增 vue2项目 manifest.json 支持 scopedSlotsCompiler 配置，用于合并虚拟节点外部样式 [详情](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + 百度小程序平台 修复 vue3项目 组件嵌套使用时响应式可能失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3612)
* 【uniCloud】
  + 【重要】uni-id重构。uni-id公共模块 + uni-id-cf云函数 的组合不再更新，取而代之的是 uni-id-common公共模块 + uni-id-pages云端一体模板
    - 新增 uni-id-common公共模块。更小巧的公共模块，负责 uni-id 的 token 管理和权限校验 [详情](https://uniapp.dcloud.io/uniCloud/uni-id-common.html)
    - 新增 uni-id-pages云端一体页面模板。包括一组前端页面 + uni-id-co云对象。包括用户注册、登录、忘记密码、个人中心等功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
  + 新增 uniIdRouter路由管理。在 pages.json 里直接定义哪些页面需要登录后才能访问 [详情](https://uniapp.dcloud.io/uniCloud/uni-id/summary.html#uni-id-router)
  + 新增 uniCloud.onNeedLogin/offNeedLogin 用于监听/移除监听需要登录事件，需搭配 `uniIdRouter` 使用 [详情](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-need-login)
  + 新增 uniCloud.onRefreshToken/offRefreshToken 用于监听/移除监听 token 更新事件 [详情](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-refresh-token)
  + 调整 HBuilderX 中创建 uniCloud 项目时默认导入 uni-id-common公共模块，不再导入老版 uni-id公共模块
  + 调整 clientDB 优先依赖 uni-id-common，在没有 uni-id-common 时依赖老版 uni-id公共模块
  + 修复 本地调试插件 HBuilderX 3.4.12引出的运行项目时部分场景下访问非关联服务空间云函数报错的Bug
  + 修复 本地调试插件 部分app平台、web平台切换云端云函数/本地云函数无效的Bug [详情](https://ask.dcloud.net.cn/question/147633)
  + 修复 clientDB action 的 after 内抛出错误不能被另一个 action 的 after 接收到的Bug [详情](https://ask.dcloud.net.cn/question/147099)
  + 修复 项目内无 uni-id 时运行 jql 文件报错的Bug
  + uniCloud控制台 新增 Redis 数据可视化管理
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】uni-AD 新增 激励视频广告支持实时竞价 [详情](https://uniapp.dcloud.io/uni-ad.html#bidding)
  + Android平台 更新 云端打包环境 Gradle 为 7.3.3，Android Gradle plugin 为 4.2.0，compileSdkVersion 为 31
  + Android平台 新增 云端打包支持设置 dataBinding、viewBinding [文档](https://uniapp.dcloud.io/collocation/manifest.html#buildfeatures)
  + Android平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备在 Android12 设备可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/146849)
  + Android平台 修复 UniPush 存在监听`ACTION_BOOT_COMPLETED`广播行为，可能违反应用市场上架合规检测问题 [详情](https://ask.dcloud.net.cn/question/147319)
  + Android平台 修复 UniPush 调用 plus.runtime.restart 后无法创建本地通知消息的Bug [详情](https://ask.dcloud.net.cn/question/146470)
  + Android平台 修复 从本地相册选择大图片预览时可能引起应用崩溃的Bug
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK为 4.5.1.6 版
  + iOS平台 更新 百度定位SDK为 2.0.0 版，百度地图SDK为 6.5.0 版
  + iOS平台 修复 5+App项目获取5G网络类型错误的Bug
* 【Uni小程序SDK】
  + Android平台 修复 启动小程序直达页面参数与文档规范不一致的Bug

#### 3.4.17.20220614-alpha
* 【uni-app】
  + 修复 vue3 项目 onError 生命周期不生效的Bug
  + App、Web平台 修复 vue3 项目 uni.setTabBarItem 设置 pagePath 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3592)
  + App平台 优化 video 组件支持 show-mute-btn 配置
  + App平台 优化 vue3 项目 rich-text 组件支持服务端渲染
  + App平台 修复 3.4.10 版本引出的 scopeId 污染 slot 导致样式异常的Bug [详情](https://ask.dcloud.net.cn/question/145366)
  + App平台 修复 调试时调用 uni.getSystemInfo 报错的Bug [详情](https://ask.dcloud.net.cn/question/146611)
  + App平台 修复 vue3 项目 Windows 系统上，运行至手机或模拟器时，可能多次同步文件的Bug
  + App平台 修复 vue3 项目 nvue 页面 onPageScroll，onReachBottom 不触发的Bug [详情](https://ask.dcloud.net.cn/question/145873)
  + App平台 修复 vue3 项目 uni.getVideoInfo 成功回调不执行Bug
  + App-Android平台 修复 nvue web-view 组件 user-agent 不正确导致加载H5页面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/146877)
  + App-Android平台 修复 nvue 组件同时设置 box-shadow、elevation 样式在部分特殊场景可能会出现渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/147041)
  + iOS平台 修复 nvue ad-content-page 组件暂停后展示其它视频类广告，关闭广告可能引起组件后台自动播放的Bug
  + Web平台 修复 vue3 项目 pc端 createSelectorQuery 获取 top 错误Bug
  + 小程序平台 修复 vue3 项目 v-for 嵌套使用 slot 时，渲染不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3587)
  + 微信小程序平台 修复 3.4.13 版本引出的 manifest.json 文件缺少 mp-weixin 节点编译报错的Bug [详情](https://ask.dcloud.net.cn/question/146580)
* 【uniCloud】
  + 修复 本地调试插件 3.4.0版本引出的客户端连接本地云函数时获取客户端 userAgent 为`HBuilderX`的Bug
  + 修复 本地调试插件 云函数内使用`console.timeEnd`输出日志错乱的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 开屏广告在部分小米手机可能会卡在启动界面的Bug
  + iOS平台 更新 uni-AD 快手广告SDK为 3.3.25 版，快手内容联盟SDK为 3.3.29 版，解决调用系统相册可能引起崩溃的问题

#### 3.4.13.20220601-alpha
* 【uni-app】
  + App、H5平台 新增 uni.getDeviceInfo [详情](https://uniapp.dcloud.io/api/system/getDeviceInfo.html)
  + App、H5平台 新增 uni.getAppBaseInfo [详情](https://uniapp.dcloud.io/api/system/getAppBaseInfo.html)
  + App、H5平台 新增 uni.getWindowInfo [详情](https://uniapp.dcloud.io/api/system/getWindowInfo.html)
  + App、H5平台 新增 uni.getSystemInfo 添加 devicePixelRatio、deviceOrientation、appLanguage 等字段 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + App平台 新增 uni.getSystemInfo 添加 romName、romVersion 字段 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + App平台 修复 3.4.10 版本引出的 view 组件使用 wxs/renderjs 报错的Bug
  + App-Android平台 修复 使用谷歌地图时，mapContext 对象调用 moveAlong 移动 marker 动画过程中拖拽地图会产生偏移的Bug
  + App-Android平台 修复 nvue view 组件 hover-class 属性动态改变组件大小时无效的Bug [详情](https://ask.dcloud.net.cn/question/145677)
  + App-iOS平台 修复 nvue 页面滚动视图中设置 position 属性为 sticky 样式显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/144303)
  + H5平台 修复 vue3 项目 当 App.vue 使用 setup 时，发行后页面空白的Bug [详情](https://ask.dcloud.net.cn/question/146011)
  + H5平台 修复 3.4.10 版本引发的 vue3 项目在 left/top/right window 页面使用 match-media 报错的Bug [详情](https://ask.dcloud.net.cn/question/146126)
  + 微信小程序平台 修复 vue3 项目 ad-custom 组件无法使用的Bug [详情](https://ask.dcloud.net.cn/question/145883)
* 【uniCloud】
  + 新增 uniCloud.onResponse/offResponse 接口用于监听云函数、云对象及clientDB的响应结果 [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk.html#on-response)
  + 新增 uniCloud响应体规范 添加 newToken 字段，用于token续期。云对象会自动将token持久化存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)
  + 修复 uniCloud虚拟目录、以及uni_modules下的云对象目录，右键菜单，没有运行-本地云对象、调试运行-本地云对象的菜单的Bug
  + uniCloud控制台 新增 腾讯云云存储支持上传文件夹
  + uni-admin 新增 uni统计 可通过选择「应用版本」查询数据
  + uni-admin 新增 uni统计 原生 app 崩溃页部分功能
  + uni-admin 修复 uni统计 渠道页 table 表格最后一列空白的 bug
  + uni-admin 修复 uni统计 场景分析页趋势图有数据却显示为 0 的 bug
  + uni-admin 修复 系统设置中权限只能加载 20 条的 bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 新增 原生隐私政策提示框支持 hrefLoader 属性，配置提示框中点击 href 链接的打开方式 [详情](https://uniapp.dcloud.io/tutorial/app-privacy-android)
  + Android平台 修复 uni-AD 腾讯优量汇广告联盟部分下载类广告下载成功之后无法安装的Bug
  + iOS平台 更新 一键登录 使用的个验SDK为 2.2.0.0 版，个推核心组件SDK为 1.2.7.0 版
  + iOS平台 修复 音频播放 audio 设置 startTime 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/146028)
  + iOS平台 修复 视频播放 video 播放 rtmp 协议直播流视频时声音只能通过扬声器播放的Bug [详情](https://ask.dcloud.net.cn/question/129703)
  + iOS平台 修复 视频播放 video 播放 rtmp/rtsp 协议视频时 timeupdate 事件返回当前播放时间 currentTime 始终为 0 的Bug
* 【Uni小程序SDK】
  + Android平台 修复 小程序应用资源更新可能引起页面卡顿的Bug
  + iOS平台 修复 存在自定义 UIWindow 时 toast 可能无法显示的Bug

#### 3.4.12.20220523-alpha
* 【uniCloud】
  + 修复 HBuilderX 3.4.10 引起的关联服务空间运行云函数错误的Bug [详情](https://ask.dcloud.net.cn/question/145551)

#### 3.4.11.20220520-alpha
* 【uni-app】
  + App平台 修复 nvue 页面 switch 组件切换状态无限闪动的Bug [详情](https://ask.dcloud.net.cn/question/145272)
  + App平台 修复 纯 nvue 编译模式 uni_modules 内静态资源未拷贝的Bug
  + App-iOS平台 修复 vue3 项目 nvue 页面 swiper 组件面板指示点无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/145097)
  + H5平台 新增 vue3 项目 unicloud-db 组件属性 ssr-key [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db.html#ssrkey)
  + H5平台 修复 vue3 项目 unicloud-db 组件 使用 ssr 时 页面存在2个以上组件时数据显示错乱的Bug [详情](https://ask.dcloud.net.cn/question/139537)
  + H5平台 修复 3.4.10 版本引出的 vue2 项目启用摇树优化缺失 view 组件的Bug [详情](https://ask.dcloud.net.cn/question/145286)
  + 小程序平台 修复 vue3 项目 在模板中使用 wxs、sjs 插值表达式不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3527)
  + 支付宝小程序平台 修复 vue3 项目 全局组件不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3525)
  + 支付宝小程序平台 修复 vue3 项目 sjs 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3527)
* 【uniCloud】
  + uni-admin 优化 首页增加uni统计的设备概览、注册用户概览
  + uni-admin 优化 登录速度
  + uni-admin 修复 从「首页」跳转「概况」时，url 的 query 丢失的 bug
  + uni-admin 修复 路由改变后面包屑未响应的 bug
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 今日头条穿山甲SDK Android为 4.5.1.1 版；腾讯优量汇SDK iOS为 4.13.65 版；快手广告SDK Android为 3.3.24 版，iOS为 3.3.24 版；百度百青藤广告SDK Android为 9.212 版，iOS为 4.87 版；Sigmob广告联盟SDK Android为 3.5.9 版

#### 3.4.10.20220517-alpha
* 【uni-app】
  + 【重要】新增 uni统计2.0版本发布，开源、私有部署、易定制 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
  + 【重要】uniAD 支持微信小程序平台，降低开通流量主门槛 [详情](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + 【重要】App平台 优化 vue2 项目 view 组件实现方式，提高渲染性能。建议相关开发者升级
  + 新增 uni.getSystemInfo 支持获取更多属性 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + 优化 vue3 项目 兼容 pnpm@7.0.0
  + 修复 vue3 项目 部分情况下错误信息不准确的Bug
  + 修复 vue3 项目 vite.config.js 配置 build.minify 为 terser 不生效的Bug [详情](https://ask.dcloud.net.cn/question/144992)
  + App、H5平台 优化 image 组件减少网络请求
  + App、H5平台 修复 canvas transform 渲染时没有使用高清处理的Bug [详情](https://ask.dcloud.net.cn/question/144676)
  + App平台、微信小程序平台 新增 vue3 ad-rewarded-video 激励视频广告组件，更加易用 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + App平台、微信小程序平台 新增 vue3 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App平台 新增 vue3 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App平台 修复 vue3 项目使用录音时报错的Bug [详情](https://ask.dcloud.net.cn/question/144821)
  + App平台 修复 vue3 项目 纯 nvue 项目编译报错的Bug
  + App平台 修复 nvue 页面列表删除渲染卡顿的Bug [详情](https://ask.dcloud.net.cn/question/144110)
  + App平台 修复 nvue 页面 transition 包含多个属性时编译报错的Bug [详情](https://ask.dcloud.net.cn/question/89110)
  + App-Android平台 补齐 tabBar 和 navigationBar 支持高斯模糊效果 [详情](https://uniapp.dcloud.io/tutorial/app-blureffect)
  + H5平台 修复 rich-text 组件部分标签没有加上 scopeId 导致样式应用不上的Bug [详情](https://ask.dcloud.net.cn/question/144042)
  + H5平台 修复 vue3 项目使用 picker 组件报错的Bug [详情](https://ask.dcloud.net.cn/question/144073)
  + H5平台 修复 vue3 项目 当页面同时存在 vue、nvue 时，样式不正确的Bug [详情](https://ask.dcloud.net.cn/question/144687)
  + H5平台 修复 vue3 项目 App.vue 使用 setup 不生效的Bug [详情](https://ask.dcloud.net.cn/question/144672)
  + H5平台 修复 vue3 项目 使用 Vue.js devtools 查看页面状态不显示的Bug [详情](https://github.com/dcloudio/uni-app/issues/3492)
  + 小程序平台 修复 vue3 项目 部分情况下代码分割错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3491)
  + 微信小程序平台 调整 ad 广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad.html#weixin)
* 【uniCloud】
  + 新增 本地云函数调用云端redis，方便开发调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/redis.html#lcoal-function)
  + 新增 uni-cloud-jql 扩展库 databaseForJQL 方法支持传递 clientInfo，以便于在云对象中使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud.html#use-in-object)
  + 修复 本地运行插件 HBuilderX 3.4.8 引发的运行云函数时如未绑定服务空间会导致运行进程卡住的Bug
  + 修复 云对象 _before 内抛出错误后 _after 不执行的Bug [详情](https://ask.dcloud.net.cn/question/145046)
  + uni-id 调整 绑定、解绑邮箱手机号接口，只要传递 code 参数就进行验证码校验即使传递的值为undefined
  + uni-id 调整 用户表 `register_env` 内增加 `os_name` 字段用于区分注册时的客户端系统类型
  + uni-id 修复 addUser 接口添加的用户无法使用密码登录的Bug [详情](https://ask.dcloud.net.cn/question/144670)
  + uni-id 修复 config 文件语法错误时报`this.t is not a function`的Bug
  + uni-captcha 新增 集成：创建、刷新、显示验证码的云端一体组件 [详情](https://ext.dcloud.net.cn/plugin?id=4048)
  + uni-starter 新增 短信验证码登陆、绑定手机号码，防刷逻辑；当短信验证码输入错误超过2次，弹出图形验证码进行人机校验。[详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + uni-admin 新增 uni统计数据报表功能 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
* 【Uni小程序SDK】
  + Android平台 修复 多进程模式下微信分享过程中手动返回页面显示异常的Bug
  + Android平台 修复 3.4.7版本引出的 宿主事件回调格式异常的Bug

#### 3.4.9.20220508-alpha
* 【uni-app】
  + uni统计 修复 3.4.8 版本引发的上报数据不正常的Bug [详情](https://ask.dcloud.net.cn/question/144408)
  + App-iOS平台 修复 nvue textarea 组件默认换行不生效的Bug [详情](https://ask.dcloud.net.cn/question/143784)
  + App-iOS平台 修复 nvue map 组件开启标记点聚合时，调用 removeMarkers 移除所有 marker 引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/143991)
* 【App插件(含5+App和uni-app的App端)】
  + 修复 音频播放 AudioPlayer 暂停后设置播放倍速大于 0 会自动触发播放的Bug [详情](https://ask.dcloud.net.cn/question/143757)
  + Android平台 修复 uni-AD 开屏广告开通腾讯优量汇可能引起应用启动白屏的Bug
  + iOS平台 修复 登录鉴权、分享的 authorize 方法传入认证参数 options 不生效的Bug
* 【uniCloud】
  + 【重要】调整 vue2版本客户端App平台对应的`context.PLATFORM`值由 `app-plus` 改为 `app`。此调整对 uni-id 有影响，详情请参考文档：[uni-id preferedAppPlatform](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#prefered-app-platform)
  + 修复 云对象 自动展示交互界面时未能显示 loading 标题的Bug [详情](https://ask.dcloud.net.cn/question/144526)
  + 调整 客户端将上报所有`getSystemInfoSync`返回的内容供云端使用，参考文档：[云函数内获取客户端信息](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#client-info)，[云对象内获取客户端信息](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + uni-id 新增 getWeixinUserInfo 用于获取app平台微信登录用户的用户信息 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#get-weixin-user-info)
  + uni-id 新增 addUser 用于手动添加用户 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#add-user)
  + uni-id 新增 resetPwdBySms 用于使用短信验证码重置密码 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#reset-pwd-by-sms)
  + uni-id 调整 用户注册时记录用户注册环境到 register_env 字段 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#user-table)
  + uni-id 调整 用户注册时将注册 ip 移至 register_env 内

#### 3.4.8.20220428-alpha
* 【uni-app】
  + 新增 vue3 项目内置支持 pinia [详情](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
  + 修复 3.4.6 版本引发的 vue3 项目使用 pinia 报错的Bug [详情](https://ask.dcloud.net.cn/question/143578)
  + 修复 3.4.6 版本引发的 vue3 项目部分情况编译变慢的Bug [详情](https://github.com/dcloudio/uni-app/issues/3458)
  + App平台、H5平台 修复 canvas 组件画图裁剪异常的Bug [详情](https://ask.dcloud.net.cn/question/142494)
  + App平台、微信小程序平台 新增 vue2 ad-rewarded-video 激励视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + App平台、微信小程序平台 新增 vue2 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App平台、微信小程序平台 新增 vue2 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App平台 修复 vue3 nvue 页面引用的静态资源编译后可能不存在的Bug
  + App平台 修复 vue3 nvue 页面事件无法冒泡的Bug
  + App平台 修复 vue3 nvue input，textarea 组件的 v-model 不生效的Bug [详情](https://ask.dcloud.net.cn/question/143547)
  + App平台 修复 navigator 组件 animation-type、animation-duration 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/143377)
  + App平台 修复 vue3 nvue movable 组件使用异常的Bug [详情](https://ask.dcloud.net.cn/question/143742)
  + App平台 修复 3.4.2 版本引发的 ArrayBuffer 类型判断错误的Bug [详情](https://ask.dcloud.net.cn/question/143534)
  + App-Android平台 修复 3.4.6版本 引出的 nvue 页面在部分设备可能出现渲染闪烁的Bug [详情](https://ask.dcloud.net.cn/question/143657)
  + App-Android平台 修复 3.4.6版本 引出的 nvue 页面 boxShadow 在部分情况下可能渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/143727)
  + App-Android平台 修复 bindingx 执行 getComputedStyle 方法返回异常的Bug [详情](https://ask.dcloud.net.cn/question/143697)
  + App-iOS平台 修复 nvue swiper 组件与页面返回手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/137505)
  + H5平台 修复 vue3 项目 html 原生标签（如div）renderjs/wxs 事件监听无法获取 ownerInstance 的Bug [详情](https://github.com/dcloudio/uni-app/issues/3436)
  + H5平台 修复 vue3 项目运行到浏览器，本地服务端口校验可能报错的Bug [详情](https://ask.dcloud.net.cn/question/143504)
  + H5平台 修复 vue3 项目 map 组件 polyline、circles 颜色设置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3433)
  + 小程序平台 修复 vue3 项目当 style 样式值为数字，部分情况下丢失的Bug [详情](https://github.com/dcloudio/uni-app/issues/3456)
  + 小程序平台 修复 v-if 内连用多个逻辑表达式编译出错的Bug [详情](https://ask.dcloud.net.cn/question/129122)
  + 微信小程序平台 修复 vue3 项目当 input 事件函数返回 Promise 时，输入框显示错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3462)
  + 微信小程序平台 修复 uni.getSystemInfoSync() 获取的 safeAreaInsets.bottom 为负数的Bug [详情](https://ask.dcloud.net.cn/question/133479)
  + uni-ui 新增 uni-data-select 组件 [详情](https://ext.dcloud.net.cn/plugin?id=7993)
  + uni-ui 新增 uni-breadcrumb 组件 [详情](https://ext.dcloud.net.cn/plugin?id=7992)
  + uni-ui 新增 uni-tooltip 组件 [详情](https://ext.dcloud.net.cn/plugin?id=8020)
* 【uniCloud】
  + 修复 云对象 自动展示错误提示界面时 toast 图标错误的Bug [详情](https://ask.dcloud.net.cn/question/142246)
  + 新增 uniCloud 支持云对象本地运行和调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#run-local)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.462.1332 版，iOS为 4.13.63 版；今日头条穿山甲SDK iOS为 4.4.0.5 版；快手广告SDK Android为 3.3.23 版，iOS为 3.3.23 版；快手内容联盟SDK iOS为 3.3.28 版；百度百青藤广告SDK iOS为 4.861 版；Sigmob广告联盟SDK iOS为 4.1.0 版
  + Android平台 更新 高德地图SDK为 9.2.0 版， 解决在部分设备使用地图引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/143573)
  + Android平台 修复 uni-AD 离线打包开通开屏广告可能引起应用崩溃的Bug
  + iOS平台 修复 3.4.6版本 引出的 获取底部安全区域高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/143633)
  + iOS平台 修复 3.4.4版本 引出的 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
* 【Uni小程序SDK】
  + iOS平台 修复 调用 closeWithCompletion 方法关闭小程序后紧接着在打开小程序可能引起崩溃的Bug

#### 3.4.6.20220416-alpha
* 【uni-app】
  + 优化 vue3 项目 支持导出 onSaveExitState 生命周期 [详情](https://github.com/dcloudio/uni-app/issues/3427)
  + 修复 vue3 项目 错误信息行号可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/143075)
  + App平台 修复 vue3 项目 nvue map 组件部分属性无效的Bug [详情](https://ask.dcloud.net.cn/question/142159)
  + App平台 修复 InnerAudioContext 某些情况下 paused 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
  + App平台 修复 vue3 项目使用 vue-i18n 运行报错的Bug [详情](https://ask.dcloud.net.cn/question/142911)
  + App平台 修复 vue3 项目 renderjs 在低版本手机可能运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3366)
  + App-Android平台 修复 uni.saveImageToPhotosAlbum 在部分手机可能无法正常保存到系统相册的Bug [详情](https://ask.dcloud.net.cn/question/143125)
  + App-Android平台 修复 uni.getScreenBrightness 获取屏幕亮度始终返回 -1 的Bug [详情](https://ask.dcloud.net.cn/question/142726)
  + App-Android平台 修复 nvue 页面调用 dom.scrollToElement 滚动到 list 组件指定元素位置可能无效的Bug [详情](https://ask.dcloud.net.cn/question/143035)
  + App-iOS平台 修复 video 不支持 enable-play-gesture 属性的Bug [详情](https://ask.dcloud.net.cn/question/141862)
  + App-iOS平台 修复 nvue input 组件 confirm-hold 属性默认值不正确的Bug
  + App-iOS平台 修复 nvue ad-content-page 显示位置可能偏移的Bug
  + H5平台 修复 input 组件启用 password 后在小米手机钉钉内置浏览器无法弹出键盘的Bug [详情](https://ask.dcloud.net.cn/question/142834)
  + 小程序平台 修复 vue3 项目 pages.json 配置国际化信息显示错误的Bug
  + 小程序平台 修复 vue3 项目在 Windows 系统上生成的依赖文件可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3425)
  + QQ小程序平台 修复 vue3 项目部分情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3419)
  + 微信小程序平台 修复 vue3 项目发行为混合分包运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3416)
* 【uniCloud】
  + 【重要】阿里云 调整 单次数据库查询最大超时时间由1秒调整为3秒，需要重新上传云函数触发更新
  + 【重要】云对象 调整 默认自动显示请求相关ui（等待loading，错误弹框） [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + JQL 修复 部分情况下过度限制了权限的Bug [详情](https://ask.dcloud.net.cn/question/142457)
  + 本地调试插件 修复 HBuilderX 2.4.5 版本引出的部分场景下访问本地云函数误报公共模块冲突的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 3.4.5版本 引出的 关闭页面动画异常的Bug [详情](https://ask.dcloud.net.cn/question/142797)
  + iOS平台 修复 音频播放 AudioPlayer 获取暂停状态不准确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
  + iOS平台 修复 音频播放 AudioPlayer 暂停后再恢复播放倍速会重置为1的Bug [详情](https://ask.dcloud.net.cn/question/142848)
  + iOS平台 修复 视频播放控件 video 在刘海屏设备全屏播放时进度条可能无法拖动的Bug [详情](https://ask.dcloud.net.cn/question/141862)
  + iOS平台 修复 视频播放控件 video 设置 show-fullscreen-btn 属性为 false 时可能显示不正确的Bug
* 【Uni小程序SDK】
  + Android平台 新增 支持自定义实现获取匿名设备标识符OAID

#### 3.4.5.20220408-alpha
* 【uni-app】
  + 优化 vue3 项目 支持 vitest 测试框架 [详情](https://github.com/dcloudio/uni-app/issues/3398)
  + 优化 vue3 项目 全平台支持使用 props 接收页面参数 [详情](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#url-search-params)
  + 修复 vue3 项目 App.vue 中的 provide 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3404)
  + App平台 新增 InnerAudioContext、BackgroundAudioManager 支持倍速播放
  + App平台 修复 vue3 项目 App.vue 中的 css 可能编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3403)
  + App平台 修复 uni.getEnv 在 nvue webview 中返回值不准确的Bug [详情](https://uniapp.dcloud.net.cn/component/web-view.html#getenv)
  + App-Android平台 修复 3.4.3版本 引出的 nvue 组件设置 box-shadow 后 border 可能显示异常的Bug
  + App-Android平台 修复 3.4.3版本 引出的 tabBar 设置 iconPath 且未设置 selectedIconPath 可能引起图标无法正常显示的Bug
  + App-Android平台 修复 nvue 页面 flex 布局在部分设备可能出现换行计算不正确的Bug
  + App-iOS平台 修复 在页面生命周期 onLoad 方法中调用 lockOrientation 锁定屏幕方向可能引起布局异常的Bug
  + App-iOS平台 修复 3.4.4版本 引出的 tabBar 图标显示错位的Bug [详情](https://ask.dcloud.net.cn/question/142685)
  + H5平台 修复 vue3 项目同时使用 style 节点和 style scoped 节点时，样式可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3410)
  + 小程序平台 优化 vue3 项目支持动态导入静态资源 [详情](https://github.com/dcloudio/uni-app/issues/3376)
  + 小程序平台 修复 vue3 项目 slot 在部分复杂情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3346)
  + 小程序平台 修复 vue2 项目 v-if 中同时包含成员表达式和逻辑表达式编译出错的Bug [详情](https://ask.dcloud.net.cn/question/142293)
  + 微信小程序平台 优化 uni.showActionSheet 支持 title 参数
  + 支付宝小程序平台 修复 vue3 项目部分情况下渲染错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3408)
* 【uniCloud】
  + 修复 3.4.4版本 引出的 clientDB 本地运行报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 腾讯优量汇插屏广告在 onLoad 回调中执行 show 可能引起广告无法正常显示的Bug
  + iOS平台 修复 安心打包使用 swift 开发的uni原生插件时上传 AppStore 报`ITMS-90426: Invalid Swift Support`错误的Bug [详情](https://ask.dcloud.net.cn/question/142611)
  + iOS平台 修复 在 iOS15.4 及以上设备系统时间设置为12小时制 pickDate 返回值异常的Bug [详情](https://ask.dcloud.net.cn/question/141906)

#### 3.4.4.20220403-alpha
* 【uni-app】
  + App平台、H5平台 新增 input 组件配置 ignoreCompositionEvent 属性 [详情](https://uniapp.dcloud.io/component/input?id=input)
  + App平台 新增 tabbar 支持配置 iconfont [详情](https://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem)
  + App平台 修复 vue2 nvue 页面文本首尾回车符占用高度的Bug [详情](https://ask.dcloud.net.cn/question/95429)
  + App平台 修复 vue3 项目 uni.getSavedFileList、uni.getSavedFileInfo、uni.removeSavedFile、uni.getFileInfo 无效的Bug  [详情](https://ask.dcloud.net.cn/question/142428)
  + App-Android平台 修复 nvue list 组件横向滚动不会触发 loadmore 事件的Bug
  + App-Android平台 修复 连续调用 uni.chooseImage 在部分手机可能引起应用闪退的Bug
  + App-Android平台 修复 3.4.3 引出的 tabBar 的列表项未设置 iconPath 会导致文字显示不全的Bug [详情](https://ask.dcloud.net.cn/question/142250)
  + App-iOS平台 修复 video 组件 vslide-gesture-in-fullscreen 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/138299)
  + App-iOS平台 修复 nvue image 组件不支持 gif 图片中设置循环次数参数的Bug [详情](https://ask.dcloud.net.cn/question/140176)
  + 小程序平台 修复 vue3 项目 v-model.number 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3381)
  + 小程序平台 修复 vue3 项目页面复杂时可能编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3397)
  + 微信小程序平台 修复 vue3 项目 input 事件 return 一个字符串没有同步到输入框的Bug [详情](https://github.com/dcloudio/uni-app/issues/3371)
  + 百度小程序平台 修复 vue3 项目 onInit 生命周期不触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3384)
  + 支付宝小程序平台 修复 vue2 项目插件内组件部分事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/142048)
  + 支付宝小程序平台 修复 vue3 项目 默认分享功能失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3377)
* 【uniCloud】
  + 修复 3.4.0版本引出的云函数子目录内文件引用公共模块失败的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 音频播放 AudioPlayer 支持 playbackRate 设置倍速播放 [文档](https://www.html5plus.org/doc/zh_cn/audio.html#plus.audio.AudioPlayer.playbackRate)
  + Android平台 更新 高德定位SDK为 6.0.1 版，高德地图SDK为 9.0.1 版；UniPush 使用的个推SDK为 3.2.9.0 版，小米厂商推送库SDK为 3.1.1 版；Google地图SDK为 18.0.2 版
  + Android平台 优化 二维码扫码检测到 QR 码时自动放大，提升扫码识别率 [详情](https://ask.dcloud.net.cn/question/142209)
  + 【重要】Android平台 修复 uni-AD 穿山甲广告联盟在部分设备可能提示`应用的uni-AD业务状态异常`的Bug
  + iOS平台 修复 视频播放控件 video 播放视频音量与系统音量不一致的Bug

#### 3.4.3.20220325-alpha
* 【uni-app】
  + 【重要】App平台 nvue 页面支持 vue3（需要项目的 Vue 版本切换为3）[详情](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
  + App平台、H5平台 新增 map 组件支持 polygons [详情](https://uniapp.dcloud.io/component/map)
  + App平台、小程序平台 修复 vue3 项目配置 base 后资源路径可能错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3362)
  + App平台 新增 打开微信客服功能 [详情](https://uniapp.dcloud.io/api/plugins/share.html)
  + App平台 修复 vue3 项目内联样式引用静态资源可能错误的Bug [详情](https://ask.dcloud.net.cn/question/141278)
  + App平台 新增 nvue ad-content-page 组件支持内容播放状态事件start、pause、resume、complete [规范](https://uniapp.dcloud.io/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App-Android平台 优化 nvue 组件 box-shadow 渲染逻辑，解决在部分设备可能出现排版异常及闪烁的问题 [详情](https://uniapp.dcloud.io/tutorial/nvue-css.html#android-box-shadow)
  + App-Android平台 修复 nvue 组件设置 overflow 为 hidden 在部分设备无效的Bug [详情](https://ask.dcloud.net.cn/question/114175)
  + App-Android平台 修复 nvue swiper 组件设置 circular 为 true 时首次启动可能先显示最后一项的Bug [详情](https://ask.dcloud.net.cn/question/140931)
  + App-Android平台 修复 nvue swiper 组件在特定环境下可能出现页面空白的Bug [详情](https://ask.dcloud.net.cn/question/140942)
  + App-iOS平台 修复 nvue swiper 组件内嵌 list-waterfall 时，横向滑动的同时列表还可以竖向滚动的Bug [详情](https://ask.dcloud.net.cn/question/134909)
  + App-iOS平台 修复 nvue 页面内存在可滚动子组件时，开启 enablePullDownRefresh 下拉刷新功能无效的Bug
  + App平台 修复 vue3 组件 picker-view 调整列数据时渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/140609)
  + H5平台 修复 vue3 项目配置 base 发行后资源路径可能错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3354)
  + 小程序平台 优化 vue3 项目自定义组件支持 v-bind="" 语法 [详情](https://github.com/dcloudio/uni-app/issues/3330)
  + QQ小程序平台 修复 vue3 项目 appid 配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3339)
  + 抖音小程序平台 修复 vue3 项目部分情况下数据不响应的Bug [详情](https://github.com/dcloudio/uni-app/issues/3340)
  + 抖音小程序平台 修复 vue3 项目 options 方式配置 provide/inject 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3360)
  + 支付宝小程序平台 修复 vue3 项目分包页面事件响应不正常的Bug [详情](https://ask.dcloud.net.cn/question/140742)
* 【uniCloud】
  + 修复 公共模块右键管理依赖的公共模块不生效的Bug
  + 修复 修复本地运行云函数调用云对象报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + uni-AD 新增 百度百青藤广告联盟支持信息流广告
  + Android平台 更新 uni-AD 百度百青藤广告SDK 为 9.202 版
  + Android平台 修复 在部分设备识别国际化语言不正确的Bug [详情](https://ask.dcloud.net.cn/question/141688)
* 【Uni小程序SDK】
  + Android平台 修复 微信登录连续多次调用可能会导致失败的Bug
  + Android平台 修复 转场动画在 Android12 设备可能失效的Bug
  + Android平台 修复 调用 startActivityForUniMPTask 在 Android8 以下设备可能会引起应用崩溃的Bug

#### 3.4.2.20220310-alpha
* 【uni-app】
  + App平台 新增 vue 页面支持 live-pusher 组件 [详情](https://uniapp.dcloud.net.cn/component/live-pusher)
  + App平台 修复 uni.request、uni.onSocketMessage 等接口返回的 ArrayBuffer 类型不可用 instanceof 做类型判断的Bug
  + App平台 修复 vue3 项目 wxs/renderjs 监听事件运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3324)
  + App-Android平台 修复 nvue map组件使用高德地图时，频繁调用 addMarkers 增加聚合点可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/140461)
  + App-Android平台 修复 nvue map组件使用谷歌地图时，调用 moveAlong 移动 marker 可能出现偏移的Bug
  + App-iOS平台 补齐 uni-AD 支持 nvue ad-content-page组件 [文档](https://uniapp.dcloud.net.cn/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App-iOS平台 修复 nvue 组件 userInteractionEnabled 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/140838)
  + App-iOS平台 修复 nvue refresh 组件 pullingdown 事件触发时机不正确的Bug [详情](https://ask.dcloud.net.cn/question/138962)
  + H5平台 修复 vue3 项目 wxs/renderjs 热刷新不生效的Bug [详情](https://ask.dcloud.net.cn/question/140800)
  + H5平台 修复 vue3 项目特定情况下拉刷新后页面跳转的Bug [详情](https://github.com/dcloudio/uni-app/issues/3326)
  + 小程序平台 修复 vue3 项目模板中 style 属性包含换行符时编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3320)
  + 支付宝小程序平台 优化 vue3 项目默认开启 es6=>es5 [详情](https://ask.dcloud.net.cn/question/140742)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 新增 Google支付支持 isReadyToPay 方法 [文档](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.PaymentChannel.isReadyToPay)

#### 3.4.1.20220308-alpha
* 【uni-app】
  + App平台 修复 uni.getBackgroundAudioManager 的 onPrev onNext 事件无效Bug [详情](https://ask.dcloud.net.cn/question/107325)
  + App平台 修复 3.4.0 引发的 vue2 项目 canvas 组件 fillText 失效的Bug [详情](https://ask.dcloud.net.cn/question/140786)
  + App平台 修复 3.4.0 引发的 vue2 项目 nvue 页面的 uni.createLivePusherContext 无效Bug [详情](https://ask.dcloud.net.cn/question/140743)
  + App平台 修复 vue3 项目 navigator 组件和 rich-text 组件嵌套使用时 scopeId 值不一致导致的样式Bug [详情](https://ask.dcloud.net.cn/question/140644)
  + App-iOS平台 修复 nvue map 组件 marker 的 joinCluster 为 false 时 removeMarkers 方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/140648)
  + App-iOS平台 修复 nvue rich-text 组件 text-overflow 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/140586)
  + H5平台 修复 部分情况下 input 组件显示数值错误的Bug [详情](https://ask.dcloud.net.cn/question/140366)
  + 小程序平台 修复 vue3 项目部分情况下视图更新延迟的Bug [详情](https://github.com/dcloudio/uni-app/issues/3311)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 3.4.0 引出的 UniPush模块使用 Oppo 厂商通道时云端打包失败的Bug [详情](https://ask.dcloud.net.cn/question/140765)
* 【UniMPSDK】
  + iOS平台 修复 小程序SDK中设置 user-agent 影响宿主原生页面中 Webview 的Bug

#### 3.4.0.20220304-alpha
* 【uni-app】
  + 新增 vue2 项目支持发布到 京东小程序
  + 修复 vue3 项目兼容 vite@2.8.x [详情](https://ask.dcloud.net.cn/question/139311)
  + 修复 vue3 项目兼容 vite-plugin-eslint [详情](https://github.com/dcloudio/uni-app/issues/3247)
  + App平台、H5平台 优化 取消全局 canvas 高清处理，支持配置单个 canvas 组件 hidpi 属性
  + App平台、H5平台 修复 自定义组件监听 tap.native 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3259)
  + App平台、H5平台 修复 vue3 项目 uni.pageScrollTo 的 duration 为0时不生效的Bug [详情](https://ask.dcloud.net.cn/question/139432)
  + App平台、H5平台 修复 vue3 项目 input 组件类型为 number 时在低版本 webview 失去焦点时报错的Bug [详情](https://ask.dcloud.net.cn/question/138088)
  + App平台 新增 地图支持 Google地图 [详情](https://uniapp.dcloud.net.cn/app-maps)
  + App平台 新增 支付支持 Paypal、Stripe、Google Pay [详情](https://uniapp.dcloud.io/app-payment-paypal)
  + App平台 新增 登录支持 Google、Facebook [详情](https://uniapp.dcloud.io/api/plugins/login?id=app-oauth)
  + App平台 新增 vue 页面 video 组件支持 vslide-gesture、vslide-gesture-in-fullscreen 属性 [详情](https://uniapp.dcloud.io/component/video)
  + App平台 新增 pages.json 支持在 style 配置 disableSwipeBack 以禁用 iOS 侧滑返回
  + App平台 修复 uni.addPhoneContact 重复添加联系人的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I4NY6C)
  + App平台 修复 vue3 项目使用 html 原生标签（如div）时，事件监听报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3240)
  + App-Android平台 修复 nvue image 组件 mode 属性设置为 widthFix/HeightFix 时可能导致图片无法显示的Bug [详情](https://ask.dcloud.net.cn/question/139541)
  + App-Android平台 修复 nvue list 组件插入列表项可能引起页面闪烁的Bug [详情](https://ask.dcloud.net.cn/question/139424)
  + App-Android平台 修复 nvue web-view 组件 progress 颜色值不支持3位十六进制格式字符串的Bug [详情](https://ask.dcloud.net.cn/question/138670)
  + App-Android平台 修复 nvue web-view 组件 无法正常加载使用非受信任证书网页的Bug [详情](https://ask.dcloud.net.cn/question/134287)
  + App-Android平台 修复 nvue animation 动画切到后台可能无法执行的Bug [详情](https://ask.dcloud.net.cn/question/137868)
  + App-Android平台 修复 nvue map 组件 marker 设置 joinCluster 为 true 时导致 callouttap 事件不响应的Bug [详情](https://ask.dcloud.net.cn/question/136381)
  + App-Android平台 修复 nvue text 组件 font-style 设置 italic 在部分设备可能无效的Bug [详情](https://ask.dcloud.net.cn/question/120801)
  + App-Android平台 修复 nvue 页面切换可能导致 plus.key.addEventListener 监听 keydown 事件不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/140203)
  + App-iOS平台 修复 vue3 项目 调试时启动白屏的Bug
  + H5平台 优化 vue3 项目 navigator 组件使用 a 标签渲染以利于SEO
  + H5平台 修复 vue3 项目 html 中引入 static 目录的 js 文件包含 ifdef 编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3201)
  + H5平台 修复 vue3 项目 renderjs 发行后不正常的Bug [详情](https://ask.dcloud.net.cn/question/137832)
  + H5平台 修复 vue3 项目 dataset 不支持对象类型错误的Bug [详情](https://ask.dcloud.net.cn/question/139181)
  + H5平台 修复 vue3 项目 禁用摇树后，uni.showModal 等弹窗缺少样式的Bug [详情](https://ask.dcloud.net.cn/question/139593)
  + H5平台 修复 vue3 项目 热刷新编译报错的Bug [详情](https://ask.dcloud.net.cn/question/135765)
  + H5平台 修复 vue3 项目 text 组件使用 v-if 时显示错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3225)
  + H5平台 修复 map 组件 marker 不能设置 id 为 0 的Bug
  + 小程序平台 修复 vue3 项目 uni.getSystemInfo 无法获取 deviceId 的Bug [详情](https://ask.dcloud.net.cn/question/139733)
  + 小程序平台 修复 vue3 项目 不支持 v-html 的Bug [详情](https://ask.dcloud.net.cn/question/138290)
  + 小程序平台 修复 vue3 项目 v-if 中使用 wxs 等模块时报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3199)
  + 小程序平台 修复 vue3 项目 defineEmits 事件名包含 - 分隔符时无法正常监听的Bug [详情](https://github.com/dcloudio/uni-app/issues/3210)
  + 小程序平台 修复 vue3 项目 setup 手动引入组件不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3213)
  + 小程序平台 修复 vue3 项目 v-for 嵌套使用时部分情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3263)
  + 小程序平台 修复 vue3 项目 wxs 调用 callMethod 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3218)
  + 小程序平台 修复 vue3 项目 全局组件路径解析错误的Bug [详情](https://ask.dcloud.net.cn/question/138662)
  + 小程序平台 修复 vue3 项目 全局 mixin 分享 onShareAppMessage，onShareTimeline 不生效的Bug [详情](https://ask.dcloud.net.cn/question/140351)
  + 微信小程序平台 修复 vue2 项目 v-for 遍历部分表达式时 stop 修饰符无效的Bug [详情](https://ask.dcloud.net.cn/question/138684)
  + 微信小程序平台 修复 vue3 项目 canvas 监听 touch 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3209)
  + 微信小程序平台 修复 vue3 项目部分情况下事件监听错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3228)
  + 微信小程序平台 修复 vue3 项目使用小程序插件组件无法传递属性的Bug [详情](https://github.com/dcloudio/uni-app/issues/3257)
  + 支付宝小程序平台 修复 vue2 项目小程序组件事件监听失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/2273)
  + 支付宝小程序平台 修复 vue2 项目小程序插件中组件事件监听失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/2410)
  + 【重要】hello uniCloud 新增云对象基础使用示例[详情](https://ext.dcloud.net.cn/plugin?id=4082)
* 【uniCloud】
  + 【重要】新增`云对象`。将callfunction函数调用升级为模块化方式，网络不再传递json，前端对象化使用云API [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj)
  + 【调整】发送短信API 从内置库剥离为扩展库 uni-cloud-sms [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms?id=extension)
  + 【调整】一键登录API 从内置库剥离为扩展库 uni-cloud-verify [详情](https://uniapp.dcloud.net.cn/uniCloud/univerify?id=extension)
  + 【调整】uniCloud本地调试插件 云函数右键本地运行时，此云函数内的callFunction由调用云端云函数改为调用本地云函数
  + 新增 jql语法 允许在 getTemp 联表查询的虚拟联表内使用 groupBy distinct [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?  id=lookup-with-temp)
  + 优化 HBuilderX新建云函数的界面支持选择模板和依赖
  + 修复 阿里云 云函数删除文件接口返回数据格式不正确的Bug
  + 修复 uni-cloud-jql扩展库 权限校验失败等场景未抛出错误的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 支持Google地图 [详情](https://uniapp.dcloud.io/app-maps?id=google%e5%9c%b0%e5%9b%be)
  + 【重要】uni-AD 新增 百度百青藤广告联盟 支持开屏、插屏、激励视频广告 [详情](https://ask.dcloud.net.cn/article/36769)
  + 【重要】Android平台 新增 uni-AD 支持华为广告联盟 包括开屏、信息流、插屏、激励视频广告 [详情](https://ask.dcloud.net.cn/article/36769)
  + Android平台 优化 应用启动首页可能出现上下抖动的Bug [详情](https://ask.dcloud.net.cn/question/138243)
  + Android平台 修复 使用 X5 内核调用 plus.key.addEventListener 监听 keyup 事件不触发回调的Bug
  + Android平台 修复 Android8及以上设备 plus.navigator.createShortcut 无法创建桌面快捷图标的Bug [详情](https://ask.dcloud.net.cn/question/125119)
  + Android平台 修复 视频播放控件 video 边缘可能出现黑线的Bug [详情](https://ask.dcloud.net.cn/question/138320)
  + Android平台 修复 在部分设备调用 plus.runtime.restart 可能引起应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/138965)
  + Android平台 修复 系统语言设置为土耳其语时，tabbar 切换选项可能导致不显示的Bug [详情](https://ask.dcloud.net.cn/question/139313)
  + Android平台 修复 本地相册选择视频设置 compressed 为 false 时依然会压缩的Bug [详情](https://ask.dcloud.net.cn/question/140417)
  + iOS平台 新增 uni原生插件支持 applicationMain 获取 main 函数启动参数 argc、argv [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=hook%e7%b3%bb%e7%bb%9f%e4%ba%8b%e4%bb%b6)
  + iOS平台 修复 Webview窗口标题栏 titleNView无法动态更新网络页面标题的Bug [详情](https://ask.dcloud.net.cn/question/138958)
  + iOS平台 修复 compressVideo 视频压缩可能出现尺寸错乱的Bug [详情](https://ask.dcloud.net.cn/question/138303)
  + iOS平台 修复 微博分享 type 为 web 时无法正常分享的Bug [详情](https://ask.dcloud.net.cn/question/138830)
  + iOS平台 修复 播放背景音频时系统锁屏界面音乐播放器的进度条可能显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/140101)
* 【uni小程序SDK】
  + Android平台 优化 混淆配置规则，解决 zip4j 可能与其他的库冲突的Bug
  + Android平台 修复 3.3.5 引出的 微信支付回调可能会引起崩溃的Bug
  + Android平台 修复 多个小程序分别配置使用 vue2、vue3， 同时打开可能引起白屏的Bug [详情](https://ask.dcloud.net.cn/question/138576)
  + Android平台 修复 关闭小程序后台运行模式，重复操作打开/关闭小程序可能导致小程序无法正常运行的Bug
  + Android平台 修复 小程序切换到后台，直达页面启动时出现闪屏的Bug
  + iOS平台 修复 关闭小程序后快速启动小程序并直达页面，重复操作偶现崩溃的Bug

#### 3.3.12.20220222-alpha
* 【uni-app】
  + App平台、H5平台 修复 vue3 项目两个开启了下拉刷新的页面跳转后返回，下拉刷新不触发 onPullDownRefresh 生命周期的Bug [详情](https://github.com/dcloudio/uni-app/issues/3187)
  + App平台 修复 vue3 项目 nvue 页面使用 map 组件时部分方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/138515)
  + App-Android平台 修复 picker 组件选择选项后同页面 input 组件可能无法正常获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/138237)
  + App-Android平台 修复 vue3 项目 安卓低版本时使用 type=number 的 input 组件输入报错的Bug [详情](https://ask.dcloud.net.cn/question/138088)
  + App-iOS平台 修复 3.3.2 版本引出的支持多个音频同时播放引发iOS影响静音开关的问题，默认不支持同时播放多个文件，如果需要可手动设置 sessionCategory
  + App-iOS平台 修复 vue3 项目 canvas 组件绘制本地图像后无法导出到本地到Bug
  + H5平台 优化 uni.chooseLocation 支持传入坐标
  + H5平台 修复 vue2 项目开启摇树后 ad 组件失效的Bug
  + H5平台 修复 vue3 项目 image 组件 mode=heightFix 图像大小显示错误的Bug
  + H5平台 修复 vue3 项目 button 组件发行后 loading 不显示的Bug
  + 支付宝小程序平台 修复 触发自定义事件报错的Bug [详情](https://ask.dcloud.net.cn/question/138706)
* 【uniCloud】
  + 修复 JQL语法 getTemp 返回结果传递给组件属性时在微信小程序端报错的Bug [详情](https://ask.dcloud.net.cn/question/138308)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.450.1320 版，iOS为 4.13.50 版；今日头条穿山甲SDK Android为 4.3.0.1 版， iOS为 4.3.0.2 版；快手广告SDK Android为 3.3.21 版，iOS为 3.3.21 版
  + Android平台 修复 一键登录 授权页面服务协议自定义复选框状态图片设置不正确的Bug [详情](https://ask.dcloud.net.cn/question/139830)
  + iOS平台 修复 Downloader 下载图片文件可能失败的Bug [详情](https://ask.dcloud.net.cn/question/116101)
  + iOS平台 修复 geitImageInfo 可能不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/139361)
* 【uni小程序SDK】
  + iOS平台 修复 动态切换横竖屏导致页面布局异常的Bug

#### 3.3.8.20220114-alpha
* 【uniCloud】
  + 修复 3.3.7-alpha引出的JQL数据库管理无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/138139)
* 【uni-app】
  + App-Android平台 修复 3.3.7 版本引出的 nvue list 组件滚动后也会触发 click 事件的Bug
  + 小程序平台 修复 vue3 项目 组件使用 id 属性不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3179)
  + 小程序平台 修复 vue3 项目 部分情况 defineExpose 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3180)
  + 小程序平台 修复 vue3 项目 兼容 unocss 插件 [详情](https://ask.dcloud.net.cn/question/138021)
  + 微信小程序平台 修复 vue3 项目 当 v-for 循环变量名为 index 时渲染不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3193)
  + 微信小程序平台 修复 vue3 项目无法自动开启开发工具窗口的Bug
  + 支付宝小程序平台 修复 vue3 项目 mixin 中包含 props 运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3191)

#### 3.3.7.20220112-alpha
* 【uni-app】
  + App平台、H5平台 新增 textarea、input 组件支持 confirm-hold 属性 [详情](https://uniapp.dcloud.io/component/input)
  + App平台、H5平台 优化 image 组件 draggable 属性默认值改为 false
  + App平台 优化 uni.request 请求参数支持 ArrayBuffer 类型
  + App平台 修复 vue3 项目 发行后 renderjs 调用 ownerInstance.callMethod 失效的Bug [详情](https://ask.dcloud.net.cn/question/137832)
  + App平台 修复 vue3 项目 picker 组件默认语言固定为英文的Bug [详情](https://ask.dcloud.net.cn/question/136954)
  + App-Android平台 修复 nvue input 组件不支持自定义字体的Bug [详情](https://ask.dcloud.net.cn/question/135514)
  + App-Android平台 修复 nvue list 组件不支持 click 事件的Bug [详情](https://ask.dcloud.net.cn/question/136754)
  + App-iOS平台 修复 nvue swiper-list 组件滚动条无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/136261)
  + H5平台 修复 右键单击事件 contextmenu 丢失 clientX、clientY 属性的Bug [详情](https://ask.dcloud.net.cn/question/136530)
  + 小程序平台 修复 模板中包含转义引号时在小程序开发工具中编译报错或显示异常的Bug
  + 微信小程序平台 修复 多页面，组件内使用插槽数据时，差量编译丢失插槽信息的Bug [详情](https://ask.dcloud.net.cn/question/136258)
* 【uniCloud】
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在临时表内使用 as 或其他运算操作 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在虚拟联表内使用 foreignKey 方法指定要使用的 foreignKey 的归属的字段 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + 新增 web控制台 阿里云 前端网页托管支持为指定路径开启 uni-app history 路由跳转模式支持 [详情](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=routing)
  + 新增 uni-id 支持自定义国际化语言支持 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=custom-i8n)
  + 修复 uni-id 一键登录时未校验重复手机号是否已验证的Bug
  + 修复 uni-id Apple 登录时用户邮箱为空时报错的Bug
  + 修复 uni-id 用户名密码登录时多个应用出现重复用户名登录报错的Bug
  + 修复 本地调试插件 打开非云函数根目录文件时使用运行菜单本地运行云函数报错的Bug
  + 修复 本地调试插件 部分情况下客户端连接启用了 JQL 扩展的本地云函数报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】新增 Payment 模块支持 Paypal支付、Stripe支付、Google支付 [文档](https://uniapp.dcloud.io/app-payment)
  + 【重要】新增 Push 模块支持 Google推送 Firebase Cloud Push (FCM) [文档](https://uniapp.dcloud.io/app-push-fcm)
  + 【重要】新增 Statistic 模块支持 Google统计 [文档](https://uniapp.dcloud.io/app-statistic-google)
  + 新增 一键登录 支持 closeIcon 属性设置自定义关闭按钮图片 [文档](https://uniapp.dcloud.io/univerify)
  + 更新 uni-AD 快手广告SDK Android为 3.3.20 版，iOS为 3.3.20 版；快手内容联盟SDK Android为 3.3.27 版， iOS为 3.3.27 版
  + Android平台 修复 调用 plus.runtime.restart 重启应用后 user-agent 会清空的Bug [详情](https://ask.dcloud.net.cn/question/136105)
  + Android平台 修复 plus.downloader.enumerate 可能获取不到下载任务的Bug [详情](https://ask.dcloud.net.cn/question/137548)
  + Android平台 修复 一键登录 在部分 Android 8.0、8.1 设置无法弹出登录框的Bug
  + Android平台 修复 一键登录 设置登录界面 logo 图片可能不生效的Bug
  + Android平台 修复 视频播放控件 VideoPlayer 设置 object-fit 属性可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/137150)
  + Android平台 修复 使用系统定位模块执行 watchPosition 后再执行 getCurrentPosition 可能失败的Bug [详情](https://ask.dcloud.net.cn/question/137586)
  + Android平台 修复 Push模块 createMessage 在安卓系统8以下系统可能无法创建通知栏消息的Bug [详情](https://ask.dcloud.net.cn/question/137923)
  + Android平台 修复 图片选择界面设置 crop 属性在部分手机和模拟器上可能引起黑屏崩溃的Bug [详情](https://ask.dcloud.net.cn/question/136969)
  + Android平台 修复 图片选择界面未勾选`原图`时图片方向可能发生变化的Bug [详情](https://ask.dcloud.net.cn/question/137358)
  + iOS平台 修复 uni-AD 使用自定义 storyboard 时开屏广告底部应用图标、名称可能不显示的Bug
* 【uni小程序SDK】
  + 新增 小程序 wgt 资源文件支持加密 [文档](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=installWgt)
  + Android平台 修复 不设置任何参数初始化小程序SDK可能会引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/137175)
  + Android平台 修复 启动使用 vue3 的小程序可能出现白屏的Bug
  + iOS平台 修复 小程序未开启后台运行，通过手势关闭小程序后快速打开小程序偶现崩溃的Bug
  + iOS平台 修复 在隐藏小程序的回调方法中再次打开同一小程序无效的Bug
  + iOS平台 修复 同时打开多个小程序 getCurrentPageUrl 获取当前显示的小程序页面路径不正确的Bug

#### 3.3.6.20211231-alpha
* 【uni-app】
  + 【重要】App平台 修复 uni.getLocation 参数 type 配置不生效的Bug [详情](https://ask.dcloud.net.cn/article/39552)
  + 优化 vue3 项目 vite.config.js 支持自定义 isCustomElement，isNativeTag  [详情](https://github.com/dcloudio/uni-app/issues/3133)
  + 优化 vue3 项目 vite.config.js 支持自定义 scss additionalData [详情](https://github.com/dcloudio/uni-app/issues/3135)
  + 修复 vue3 项目 static 目录不支持按平台编译的Bug [详情](https://github.com/dcloudio/uni-app/issues/3132)
  + App平台 修复 nvue 页面使用 scss/sass 时条件编译不生效的Bug
  + App平台 修复 vue3 项目 input/textarea 组件使用 v-model 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3107)
  + App平台 修复 vue3 项目 picker-view 组件报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3130)
  + App-Android平台 修复 nvue input组件 maxlength 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/137031)
  + App-Android平台 修复 3.3.1 版本引出的 nvue video 组件 cover-view 全屏后排版不正确的Bug [详情](https://ask.dcloud.net.cn/question/136812)
  + H5平台 修复 vue3 项目 在首页执行 reLaunch 时，首页内的组件未销毁的Bug [详情](https://github.com/dcloudio/uni-app/issues/3114)
  + H5平台 修复 vue3 项目 manifest.json 中配置 devServer 不生效的Bug [详情](https://ask.dcloud.net.cn/question/133429)
  + 小程序平台 优化 运行时启用压缩代码后，移除代码注释，减少包体积大小
  + 小程序平台 优化 vue3 项目 支持在页面 setup 中使用 onShareTimeline，onShareAppMessage，onPageScroll [详情](https://github.com/dcloudio/uni-app/issues/3097)
  + 小程序平台 修复 vue3 项目 差量编译时组件模板内容被清空的Bug [详情](https://github.com/dcloudio/uni-app/issues/3122)
  + 小程序平台 修复 vue3 项目 分包静态资源未复制到输出目录的Bug [详情](https://github.com/dcloudio/uni-app/issues/3123)
  + 微信小程序平台 修复 vue3 项目 textarea 组件 input 事件在 iOS 平台不触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3090)
  + 微信小程序 修复 vue3 项目 v-for 中绑定事件可能错乱的Bug [详情](https://ask.dcloud.net.cn/question/137217)
  + 百度小程序 修复 vue3 项目 对象类型数据差量更新时报错的Bug [详情](https://ask.dcloud.net.cn/question/137222)
  + 支付宝小程序平台 修复 vue3 项目 button 组件 getPhoneNumber 事件报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3116)
* 【uniCloud】
  + 修复 app 端使用腾讯云作为服务商时 在高版本 iOS 安装后第一次启动无法连接云函数的Bug [详情](https://ask.dcloud.net.cn/question/136725)
  + 修复 uniCloud本地调试插件 云函数内使用腾讯云自定义登录调用 createTicket 接口报错的Bug
  + 修复 uniCloud本地调试插件 启动调试服务时错误的提示集合未初始化的Bug
  + 修复 clientDB getTemp 联表时部分情况下 where 方法无法正确筛选数据的Bug
  + 修复 JQL扩展库 使用 getTemp 联表查询时报错的Bug [详情](https://ask.dcloud.net.cn/question/137089)
  + 修复 multiSend 和 unicloud-db 组件搭配使用报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 二维码扫码在部分设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/137114)
  + Android平台 修复 targetSdkVersion 设置为 31 在 Android 12 设备可能无法安装的Bug [详情](https://ask.dcloud.net.cn/question/137233)

#### 3.3.2.20211218-alpha
* 【uni-app】
  + 修复 vue3 项目 部分组合式 API 参数缺少类型的Bug [详情](https://github.com/dcloudio/uni-app/issues/3076#issuecomment-994557108)
  + App平台、H5平台 修复 vue2 项目缺失 uni.previewImage.cancel 国际化的Bug [详情](https://ask.dcloud.net.cn/question/136054)
  + App平台 修复 vue3 项目 部分样式在低版本手机上不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3073)
  + App-Android平台 修复 3.3.1 版本引出的 input 组件在执行 uni.chooseLocation 返回结果后可能无法获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/136394)
  + App-iOS平台 修复 nvue map 组件当聚合簇中只有1个 marker 时，markertap 事件返回的 id 不正确的Bug [详情](https://ask.dcloud.net.cn/question/136245)
  + H5平台 修复 vue3 项目 运行至内置浏览器时，控制台日志输出没有文件行号的Bug
  + H5平台 修复 vue3 项目 运行模式下热刷新报错的Bug
  + H5平台 修复 vue3 项目 发行模式下 rpx 不生效的Bug [详情](https://ask.dcloud.net.cn/question/136238)
  + H5平台 修复 vue3 项目 vite.config.js host 配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3083)
  + 小程序平台 修复 vue3 项目 使用 behaviors 报错的Bug [详情](https://ask.dcloud.net.cn/question/131622)
  + 小程序平台 修复 vue3 项目 引入小程序组件（如wxcomponents）不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3071)
  + 小程序平台 修复 vue3 项目 defineExpose 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3074)
  + 小程序平台 修复 vue3 项目 部分情况下生成模板语法不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3080)
  + 小程序平台 修复 vue3 项目 pages.json condition 启动模式配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3079#issuecomment-995515310)
  + 微信小程序平台、支付宝小程序平台 修复 vue3 项目 分包内引入插件不生效的Bug [详情](https://ask.dcloud.net.cn/question/136465)
  + 微信小程序平台 修复 vue3 项目 页面 defineProps 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3079)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持设置是否关闭个性化推荐功能 [文档](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setPersonalizedAd)
  + 优化 定位模块默认使用 wgs84 坐标系，优先使用系统定位
  + Android平台 修复 uni-AD 开屏广告部分情况下点击事件可能透传的Bug
  + Android平台 修复 爱加密等安全检测平台报StrandHogg漏洞的Bug
  + 【重要】iOS平台 更新 云端打包环境 XCode 为 13.2.1 版、iOS SDK 为 15.2 版，解决提交 AppStore 审核报 ITMS-90901 警告的问题 [详情](https://ask.dcloud.net.cn/question/136405)
  + iOS平台 修复 uni-AD 后台切前台时开屏广告展示间隔时间设置无效及可能重复展示的Bug

#### 3.3.1.20211214-alpha
* 【uni-app】
  + App平台 修复 vue3 项目使用 uni.canvasGetImageData 报错的Bug [详情](https://ask.dcloud.net.cn/question/134355)
  + App平台 修复 vue3 项目使用 uni.showLoading 方法在不调用 hideLoading 时会运行两秒左右自动关闭的Bug [详情](https://ask.dcloud.net.cn/question/135551)
  + App平台 修复 vue3 项目 开发期间页面热刷新不生效的Bug
  + App平台 修复 vue3 项目 开发期间页面直达不生效的Bug
  + App-Android平台 修复 uni.getBackgroundAudioManager 触发 seek、pause后再播放 onTimeUpdate 可能不触发的Bug [详情](https://ask.dcloud.net.cn/question/134439)
  + App-Android平台 修复 nvue waterfall/list 组件横竖屏切换导致滚动偏移位置回到顶部的Bug [详情](https://ask.dcloud.net.cn/question/135845)
  + App-Android平台 修复 nvue input/textarea 组件使用中文输入法切换到英文时无法输入的Bug [详情](https://ask.dcloud.net.cn/question/133523)
  + App-Android平台 修复 nvue map 组件调用 addMarkers 设置 clear 参数不生效的Bug [详情](https://ask.dcloud.net.cn/question/132127)
  + App-Android平台 修复 nvue map 组件 marker 中 callout 首次显示位置可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/135351)
  + App-iOS平台 修复 nvue rich-text 组件在页面中动态创建时可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/135136)
  + H5平台 修复 vue3 项目 picker 组件无法动态赋值的Bug [详情](https://ask.dcloud.net.cn/question/135418)
  + H5平台 修复 vue3 项目 uni.previewImage 长按按钮显示英文的Bug [详情](https://ask.dcloud.net.cn/question/135557)
  + H5平台 修复 vue3 项目 safe-area-inset-* css 变量失效的Bug [详情](https://ask.dcloud.net.cn/question/134249)
  + 小程序平台 修复 vue3 项目 import 文件不加后缀 .js 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3041)
  + 小程序平台 修复 vue3 项目 不支持 Template Refs 的Bug [详情](https://github.com/dcloudio/uni-app/issues/3031)
  + 小程序平台 修复 vue3 项目 组件 props 不支持复杂对象的Bug [详情](https://github.com/dcloudio/uni-app/issues/3037)
  + 小程序平台 修复 vue3 项目 manifest.json 部分平台配置不生效的Bug
  + 微信小程序平台、支付宝小程序平台 修复 vue3 项目 引用插件不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3035)
  + 支付宝小程序 修复 vue3 项目 组件自定义事件触发报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3053)
  + 抖音小程序 修复 vue3 项目 page-meta 组件 报错的Bug [详情](https://ask.dcloud.net.cn/question/135769)
* 【uniCloud】
  + 新增 支持云函数内使用 JQL 语法操作数据库的扩展库 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud)
  + 修复 腾讯云 geoNear 聚合阶段 maxDistance、minDistance 参数无法正常生效的Bug
  + 修复 app 端 nvue 页面无法连接本地云函数的Bug [详情](https://ask.dcloud.net.cn/question/135703)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.431.1301 版；快手广告SDK Android为 3.3.19 版，iOS为 3.3.19 版；快手内容联盟SDK Android为 3.3.25 版， iOS为 3.3.25 版；Sigmob广告联盟SDK Android为 3.5.3 版
  + 【重要】Android平台 新增 支持未同意隐私政策模式，解决应用市场上架合规检测违反“App不得因用户不同意提供非必要个人信息，而拒绝用户使用其基本功能服务”问题 [详情](https://uniapp.dcloud.io/app-disagreemode)
  + Android平台 修复 3.2.13 版本引出的 更新UniPush使用的个推SDK导致出现App相同权限安装失败的Bug [详情](https://ask.dcloud.net.cn/question/135963)
  + Android平台 修复 视频播放控件 VideoPlayer 设置 objectFit 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/134278)
  + Android平台 修复 视频播放控件 VideoPlayer 播放部分 rtsp 格式视频时加载进度条展示异常的Bug [详情](https://ask.dcloud.net.cn/question/135060)
  + Android平台 修复 直播推流 LivePusher 设置宽高为100%时视频流可能变形的Bug [详情](https://ask.dcloud.net.cn/question/135749)
  + Android平台 修复 设置 targetSdkVersion 为 31 时本地相册选择图片压缩失败的Bug [详情](https://ask.dcloud.net.cn/question/134897)
  + iOS平台 修复 plus.nativeUI.showWaiting 在暗黑模式下默认文字颜色不正确的Bug
  + iOS平台 修复 二维码扫码 pdf417 码时识别中文字符为乱码的Bug
  + iOS平台 修复 本地相册选择进入编辑界面可能出现点击完成按钮无响应的Bug [详情](https://ask.dcloud.net.cn/question/135653)
* 【uni小程序SDK】
  + Android平台 修复 手动安装wgt模式下不支持 vue3 的Bug
  + Android平台 修复 热启动模式下直达页面参数不生效的Bug

#### 3.3.0.20211130-alpha
* 【uni-app】
  + 【重要】小程序平台 优化 vue3 项目使用 vite 编译，提供更快的编译速度 [详情](https://ask.dcloud.net.cn/article/37834)
  + App平台、H5平台 新增 uni.request 支持 PATCH 方法
  + App平台、H5平台 修复 swiper 组件开启衔接滑动点击指示器时切换问题 [详情](https://github.com/dcloudio/uni-app/issues/2985)
  + App平台 优化 nvue 页面默认文字大小更改为 16px
  + App平台 优化 innerAudioContext 支持多个音频同时播放
  + App-Android平台 修复 nvue input 组件 placeholder-class 样式中 font-size 不支持 rpx 单位的Bug [详情](https://ask.dcloud.net.cn/question/134764)
  + App-iOS平台 修复 nvue 页面固定横屏启动时 rpx 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/134971)
  + H5平台 修复 map 组件 @callouttap 失效的Bug [详情](https://ask.dcloud.net.cn/question/134803)
  + H5平台 新增 vue3 版本 page-meta 标签下支持浏览器原生head，方便进行 seo 优化 [详情](https://uniapp.dcloud.net.cn/component/page-meta?id=head)
  + 小程序平台 修复 百度小程序 login 组件 @getphonenumber 无参数的问题 [详情](https://ask.dcloud.net.cn/question/130022)
* 【uniCloud】
  + 新增 批量短信 发送功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + 新增 uniCloud DB Schema 支持国际化 [详情](https://uniapp.dcloud.net.cn/collocation/i18n?id=schema)
  + 新增 腾讯云redis
* 【App插件(含5+App和uni-app的App端)】
  + 新增 拍照和本地相册选择 crop 裁剪编辑图片支持 saveToAlbum 属性设置是否保存编辑后的图片到相册 [文档](https://www.html5plus.org/doc/zh_cn/camera.html#plus.camera.CameraCropStyles)
  + 新增 uni-AD 基础开屏广告支持 gif 图
  + 新增 系统定位模块，无需商业授权 [详情](https://uniapp.dcloud.io/app/geolocation)
  + 更新 uni-AD 腾讯优量汇SDK iOS为 4.13.31 版；今日头条穿山甲SDK iOS为 4.1.0.1 版；快手广告SDK Android为 3.3.18 版；快手内容联盟SDK Android为 3.3.24 版；Sigmob广告联盟SDK iOS为 3.5.0 版
  + 修复 微信分享场景参数 scene 默认值不正确的Bug
  + Android平台 新增 云端打包支持配置 packagingOptions [文档](https://ask.dcloud.net.cn/article/94#packagingOptions)
  + Android平台 更新 高德定位SDK为 5.6.1 版，高德地图SDK为 8.1.0 版；UniPush使用的个推SDK为 3.2.5.0 版，个推核心组件SDK为 3.1.6.0 版
  + Android平台 优化 录音保存为 mp3 格式的音质
  + Android平台 修复 uni-AD 加载激励视频广告可能触发申请访问设备信息、读写手机存储等权限的Bug
  + Android平台 修复 二维码扫码 pdf417 码时竖向无法识别、识别中文字符为乱码的Bug
  + Android平台 修复 视频播放控件 VideoPlayer 在 Android8 以下设备动态切换 src 可能会导致黑屏的Bug [详情](https://ask.dcloud.net.cn/question/134171)
  + iOS平台 修复 uni-AD setSplashAd 关闭开屏广告可能不生效的Bug
  + iOS平台 修复 拍照和本地相册选择 crop 裁剪编辑图片 resize 参数默认值不正确的Bug
  + iOS平台 修复 uni原生插件 validArchitectures 配置不正确可能导致云端打包失败的Bug
* 【uni小程序SDK】
  + Android平台 修复 在部分红米设备可能无法触发关闭小程序回调的Bug

#### 3.2.15.20211120-alpha
* 【uni-app】
  + App-Android平台 修复 showTabBarRedDot 设置红点可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/134420)
  + App-Android平台 修复 nvue waterfall 中 cell 组件横竖屏切换后可能出现排版不正常的Bug [详情](https://ask.dcloud.net.cn/question/133738)
  + 调整 uniCloud admin 改名为 uni-admin [详情](https://uniapp.dcloud.net.cn/uniCloud/admin)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 上架某些应用市场审核检测可能检测到收集已安装应用列表行为的Bug
  + Android平台 修复 3.2.13 版本引出的 webview页面作为子窗口时 WebviewStyles 的 top 属性不生效的Bug
  + 【重要】iOS平台 修复 应用启动时间统计在网络服务异常时可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/article/39448)

#### 3.2.14.20211112-alpha
* 【uni-app】
  + App平台、H5平台 修复 3.2.13 版本引出的 swiper 无法轮播的Bug [详情](https://ask.dcloud.net.cn/question/134100)
  + App平台 修复 3.2.13 版本引出的 webview 页面无法显示的Bug [详情](https://ask.dcloud.net.cn/question/134109)

#### 3.2.13.20211110-alpha
* 【uni-app】
  + App平台、H5平台 新增 rich-text 组件支持 itemclick 事件 [详情](https://uniapp.dcloud.io/component/rich-text)
  + App平台、H5平台 新增 uni.setClipboardData 支持配置是否弹出提示 [详情](https://uniapp.dcloud.io/api/system/clipboard?id=setclipboarddata)
  + App平台、H5平台 新增 异步触发 uni.chooseImage 时，会进入失败回调 [详情](https://ask.dcloud.net.cn/question/130768)
  + App平台、H5平台 修复 picker-view 滚动时会触发页面下拉刷新的Bug [详情](https://ask.dcloud.net.cn/question/113718)
  + App平台、H5平台 修复 swiper 组件动态加载内容时，触摸造成显示异常的Bug [详情](https://ask.dcloud.net.cn/question/100684)
  + App平台 新增 NVUE map API poiSearchNearBy 支持 offset，poiKeywordsSearch 支持 offset、cityLimit [详情](https://uniapp.dcloud.net.cn/api/location/map?id=poisearchnearby)
  + App平台 新增 cover 组件支持嵌套 [详情](https://uniapp.dcloud.io/component/cover-view?id=cover-view)
  + App平台 新增 nvue 页面支持 dynamicRpx 配置，用于 rpx 适配屏幕大小动态变化 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + App平台 修复 在 slot 使用 v-for 无法渲染的Bug [详情](https://ask.dcloud.net.cn/question/130258)
  + App平台 修复 editor 组件 a 标签 href 填写相对地址时渲染错误的Bug  [详情](https://github.com/dcloudio/uni-app/issues/2218)
  + App平台 修复 editor、rich-text 组件 img 本地路径图片渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/117245)
  + App-Android平台 修复 在 Android4.4 设备默认显示为英文的Bug
  + App-Android平台 修复 nvue web-view 组件网络请求与其它网络请求 user-agent 不一致的Bug
  + App-Android平台 修复 nvue list 组件中 cell 过多导致排版错误，可能抛出错误日志或引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/133072)
  + App-Android平台 修复 nvue map 组件中 Marker 标签 rotate 属性旋转方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/133418)
  + App-Android平台 修复 subNvue 原生子窗体 style 样式设置 top 属性值后可能出现排版不正确的Bug [详情](https://ask.dcloud.net.cn/question/132913)
  + App-iOS平台 修复 editor 组件设置字体格式时，placeholder 显示异常的Bug [详情](https://ask.dcloud.net.cn/question/106127)
  + App-iOS平台 修复 uni.request 请求与其它网络请求 user-agent 不一致的Bug
  + App-iOS平台 修复 nvue cover-view 组件样式可能存在异常的Bug
  + App-iOS平台 修复 nvue image 组件请求网络图片与其它网络请求 user-agent 不一致的Bug
  + App-iOS平台 修复 nvue video 中 cover-view 组件的点击事件会透传到 video 中的Bug [详情](https://ask.dcloud.net.cn/question/132936)
  + App-iOS平台 修复 nvue map 组件设置 marker-callout-textAlign 属性为 center 不生效的Bug [详情](https://ask.dcloud.net.cn/question/133264)
  + H5平台 优化 map 组件 marker label 支持 borderWidth、borderColor、bgColor 等配置
  + H5平台 修复 使用 uni.setClipboardData 时，会出现文本框的Bug
  + H5平台 修复 map 组件 marker label 坐标设置不生效的Bug [详情](https://ask.dcloud.net.cn/question/102514)
  + H5平台 修复 map 组件 marker callout 失效的Bug [详情](https://ask.dcloud.net.cn/question/133590)
  + H5平台 修复 vue3 项目 picker-view 组件显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/132418)
  + 微信小程序平台、支付宝小程序平台 新增 小程序导出到插件 [详情](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html#%E5%AF%BC%E5%87%BA%E5%88%B0%E6%8F%92%E4%BB%B6)
* 【uniCloud】
  + 客户端sdk 修复 使用callback形式调用接口时 success 回调内抛出错误会触发 fail 回调的Bug
  + uni-pay 新增 苹果应用内购凭证校验接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/unipay?id=verifyreceipt)
  + JQL数据库管理 修复 multiSend 接口报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 一键登录 服务协议项样式支持 checkBoxSize 属性设置复选框大小 [详情](https://uniapp.dcloud.io/univerify)
  + 新增 closePreviewImage 方法关闭预览图片界面 [规范](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.closePreviewImage)
  + 更新 uni-AD 腾讯优量汇SDK Android为4.422.1292版；快手广告SDK Android为 3.3.17 版，iOS为 3.3.17 版；快手内容联盟SDK Android为3.3.23版；Sigmob广告联盟SDK Android为3.5.1版
  + Android平台 更新 云端打包默认 targetSdkVersion 为 28 [文档](https://ask.dcloud.net.cn/article/193#targetsdkversion)
  + Android平台 修复 uploader 上传文件请求中 user-agent 不正确的Bug
  + Android平台 修复 plus.os.language 获取系统语言可能不正确的Bug
  + Android平台 修复 部分设备在静止情况下监听获取到的方向数据出现波动的Bug [详情](https://ask.dcloud.net.cn/question/132154)
  + iOS平台 新增 云端打包支持生成符号表 dsym 文件 [详情](https://uniapp.dcloud.io/app/ios/dsym)
  + iOS平台 更新 友盟统计SDK UMCommon 为 7.3.5 版，UMAPM 为 1.5.2 版
  + iOS平台 修复 基础开屏广告可能重复显示的Bug
  + iOS平台 修复 图片/视频选择界面中选择iCloud视频可能报错的Bug [详情](https://ask.dcloud.net.cn/question/133635)
  + iOS平台 修复 plus.navigator.getSignature 获取签名标识在应用通过 AppStore 或 Testflight 安装时 返回空值的Bug [详情](https://ask.dcloud.net.cn/question/133881)

#### 3.2.12.20211028-alpha
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 开通增强广告在部分设备首次启动可能误报`应用的uni-AD业务状态异常（-9001）`提示的Bug
  + Android平台 修复 上架某些应用市场审核检测可能误报存在收集安装列表行为的Bug [详情](https://ask.dcloud.net.cn/question/132948)
  + iOS平台 更新 uni-AD 今日头条穿山甲广告SDK 为4.1.0.0版

#### 3.2.11.20211021-alpha
* 【uni-app】
  + App平台、H5平台 修复 vue3 项目 picker-view 组件部分情况下 value 错误的Bug [详情](https://ask.dcloud.net.cn/question/132545)
  + App-Android平台 修复 uni.setLocale 设置应用语言后无法正确获取系统语言的Bug
  + App-Android平台 修复 nvue image 组件无法显示 webp 动图的Bug [详情](https://ask.dcloud.net.cn/question/132750)
  + App-iOS平台 修复 应用长时间后台运行再回到前台 tabbar 页面可能显示白屏的Bug
  + App-iOS平台 修复 nvue textarea 组件 padding 样式显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/131761)
  + App-iOS平台 修复 nvue list 中 header 组件在 iOS15 设备上存在默认 padding-top 的Bug [详情](https://ask.dcloud.net.cn/question/132524)
  + 小程序平台 修复 3.2.10 版本引出的 vue3 项目运行报错的Bug [详情](https://ask.dcloud.net.cn/question/132368)
  + 新增 Hello i18n 国际化示例项目 [详情](https://ext.dcloud.net.cn/plugin?id=6462)
* 【uniCloud】
  + clientDB 新增 调用 uniCloud.database 时传入其他服务空间配置，获取其他服务空间的数据库实例 [详情](https://uniapp.dcloud.net.cn/uniCloud/init?id=init-db)
  + clientDB 调整 自动保存 uni-id 刷新用户token返回的token及过期时间到storage内  [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=refreshtoken)
  + unicloud-db组件 新增 spaceInfo 参数，用于指定要使用的服务空间信息 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + mixinDatacom 新增 spaceInfo 参数，用于指定要使用的服务空间信息 [详情](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD Sigmob广告联盟SDK Android为3.4.1版，iOS为3.4.2版
  + 修复 geolocation 设置 timeout 参数时无法获取位置信息并且在控制报错的Bug
  + Android平台 新增 屏幕亮度参数值 -1 支持设置应用屏幕亮度与系统屏幕亮度保持一致
  + Android平台 修复 3.2.2 版本引出的 toast 提示框设置图标后无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/131445)
  + iOS平台 修复 显示模态弹窗如 actionSheet 引起系统状态栏文字颜色会自动变成黑色的Bug [详情](https://ask.dcloud.net.cn/question/132444)
  + iOS平台 修复 打开悬浮红包广告可能引起崩溃或无法关闭广告页面的Bug [详情](https://ask.dcloud.net.cn/question/132543)
  + iOS平台 修复 图片选择界面在 iOS15 设备上导航栏会显示白色的Bug [详情](https://ask.dcloud.net.cn/question/132528)

#### 3.2.10.20211013-alpha
* 【uni-app】
  + App平台、H5平台 新增 支持设置动态配置 tabBarItem 显示隐藏 [详情](https://uniapp.dcloud.io/api/ui/tabbar?id=settabbaritem)
  + App平台、H5平台 新增 uni.showModal 支持配置是否显示输入框 [详情](https://uniapp.dcloud.io/api/ui/prompt?id=showmodal)
  + App平台、H5平台 修复 3.2.8 版本引出的 scroll-view 组件内部元素部分样式失效的Bug [详情](https://ask.dcloud.net.cn/question/131736)
  + App平台 新增 nvue map 组件 API MapContext.on [详情](https://uniapp.dcloud.net.cn/api/location/map?id=createmapcontext)
  + APP-Android平台 修复 3.2.8 版本引出的 nvue 页面横屏时字体大小不正常的Bug [详情](https://ask.dcloud.net.cn/question/132200)
  + App-Android平台 修复 nvue scroll-view 组件设置 scroll-y 为 false 时引起横向滚动失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/1487)
  + App-Android平台 修复 nvue textarea 组件设置 v-model 时使用手写输入法出现异常的Bug [详情](https://ask.dcloud.net.cn/question/122239)
  + App-iOS平台 修复 nvue list 组件在 iOS15 设备上可能出现空白内容的Bug [详情](https://ask.dcloud.net.cn/question/131714)
  + App-iOS平台 修复 nvue textarea 组件默认存在 padding 的Bug [详情](https://ask.dcloud.net.cn/question/131761)
  + App-iOS平台 修复 nvue map 组件 marker 的 label 属性值格式不正确时可能引起崩溃的Bug
  + H5平台 新增 支持配置和使用谷歌地图 [详情](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfigmaps)
  + H5平台 修复 rich-text 组件 nodes 节点的 class 样式不生效的Bug  [详情](https://ask.dcloud.net.cn/article/36661)
  + 小程序平台 修复 使用 uniIDHasRole、uniIDHasPermission 报错的Bug [详情](https://ask.dcloud.net.cn/question/125165)
  + 支付宝小程序平台 新增 默认启用小程序基础库 2.x 构建 [详情](https://uniapp.dcloud.net.cn/collocation/manifest?id=mp-alipay)
  + 修复 unicloud-db 组件在某些情况下修改 page-size 无效的Bug [详情](https://github.com/dcloudio/uniCloud-admin/issues/8)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 支付宝SDK为 15.8.03 版；高德地图SDK为 8.0.1 版，高德定位SDK为 5.5.0 版
  + Android平台 修复 previewImage 预览图片无法按照图片正确方向显示的Bug[详情](https://ask.dcloud.net.cn/question/131446)
  + Android平台 修复 3.2.8 版本引出的 视频播放控件 VideoPlayer 不能播放 AES-128 模式 m3u8 视频的Bug [详情](https://ask.dcloud.net.cn/question/131768)
  + Android平台 修复 视频播放控件 VideoPlayer 不能播放 rtsp 视频的Bug [详情](https://ask.dcloud.net.cn/question/131816)
  + Android平台 修复 视频播放控件 VideoPlayer 设置 objectFit 属性为 fill 时 poster 封面显示效果不正确的Bug [详情](https://ask.dcloud.net.cn/question/129760)
  + Android平台 修复 视频播放控件 VideoPlayer 在部分设备全屏显示可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/131547)
  + iOS平台 更新 腾讯优量汇SDK为 4.13.11 版
  + iOS平台 修复 在 iOS15 设备配置使用广告标识 IDFA 首次启动可能不弹 AppTrackingTransparency 权限框的Bug
  + iOS平台 修复 在 iOS15 部分设备使用`标准运行基座`真机运行可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/131198)
  + iOS平台 修复 wgt热更新资源后再整包覆盖安装 App 导致获取不到之前 storage 保存的数据的Bug
  + iOS平台 修复 sqlite 在页面关闭时可能会自动关闭数据库的Bug [详情](https://ask.dcloud.net.cn/question/131917)
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 poster 后点播放按钮封面消失后播放器可能出现黑屏的Bug [详情](https://ask.dcloud.net.cn/question/131740)

#### 3.2.8.20210923-alpha
* 【uni-app】
  + App平台 修复 生命周期 onLaunch、onShow 不触发的Bug [详情](https://ask.dcloud.net.cn/question/131152)
  + App平台 修复 picker 组件按钮显示文本错误的Bug [详情](https://ask.dcloud.net.cn/question/131204)
  + App-Android平台 修复 3.2.7 引出的 Android8及以上设备默认语言设置为英文的Bug [详情](https://ask.dcloud.net.cn/question/131302)
  + App-iOS平台 修复 search 类型的 input 组件在 iOS15 默认显示搜索图标的Bug [详情](https://ask.dcloud.net.cn/question/129259)

#### 3.2.7.20210919-alpha
* 【uni-app】
  + App平台、H5平台 新增 uni.onLocaleChange 接口，用于监听应用语言切换 [详情](https://uniapp.dcloud.io/api/ui/locale)
  + App平台、H5平台 修复 canvas 组件 重复触发 resize 导致延迟绘图时 canvas 改变的Bug [详情](https://github.com/dcloudio/uni-app/issues/2847)
  + App平台 新增 uni.configMTLS 支持 https 请求配置自签名证书 [详情](https://uniapp.dcloud.io/api/request/request?id=configmtls)
  + App-iOS平台 修复 3.2.6 引出的 nvue 页面 css 伪类样式失效的Bug [详情](https://ask.dcloud.net.cn/question/130879)
  + App-iOS平台 修复 tabbar 设置选中项图片为 gif 时动画速度太慢的Bug [详情](https://ask.dcloud.net.cn/question/125824)
  + 支付宝小程序平台 新增 支持在 App.vue 文件内监听 onShareAppMessage 事件 [#2844](https://github.com/dcloudio/uni-app/pull/2844)
  + 抖音小程序平台 修复 差量编译失效的Bug
* 【uniCloud】
  + 本地调试插件 新增 设置启动调试参数（.hbuilderx/launch.json）关闭系统日志 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 本地调试插件 优化 公共模块查找逻辑，减少调试错误
  + clientDB 新增 action 依赖公共模块的功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=common-for-action)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 登录鉴权 支持Google登录和Facebook登录 [详情](http://ask.dcloud.net.cn/article/192)
  + 新增 微信分享 支持打开微信客服功能 [规范](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService.openCustomerServiceChat)
  + 更新 uni-AD 今日头条穿山甲广告SDK Android为4.0.0.1版；腾讯优量汇SDK Android为4.410.1280版；快手广告SDK Android为3.3.14版，iOS为3.3.15.1版；快手内容联盟SDK iOS为3.3.23.1版
  + 更新 微信SDK Android为6.7.9版，iOS为1.9.2版
  + Android平台 更新 友盟统计SDK为9.4.2版
  + Android平台 优化 compressVideo 视频压缩性能，支持 resolution 参数
  + Android平台 修复 系统相册中存在大量图片时图片选择界面操作卡顿的Bug[详情](https://ask.dcloud.net.cn/question/130582)
  + Android平台 修复 视频播放控件 VideoPlayer 在 Android11 设备播放视频可能崩溃的Bug [详情](https://ask.dcloud.net.cn/question/129108)
  + Android平台 修复 原生隐私政策提示框切换到横屏是显示异常的Bug [详情](https://ask.dcloud.net.cn/question/130403)
  + Android平台 修复 Orientation 方向传感器在部分平板设备可能无法方向信息的Bug
  + iOS平台 优化 compressVideo 视频压缩速度
  + iOS平台 修复 一键登录 授权页面服务协议复选框不好点击的Bug [详情](https://ask.dcloud.net.cn/question/130881)
  + iOS平台 修复 视频播放控件 VideoPlayer 播放直播视频无法触发 timeupdate 事件的Bug [详情](https://ask.dcloud.net.cn/question/129955)
  + iOS平台 修复 视频播放控件 VideoPlayer 可能无法正常播放m3u8视频流的Bug [详情](https://ask.dcloud.net.cn/question/129884)

#### 3.2.6.20210901-alpha
* 【uni-app】
  + App平台 修复 3.2.1 引出的 uni.chooseImage 无法压缩拍照图像的Bug [详情](https://ask.dcloud.net.cn/question/129238)
  + 抖音小程序平台 修复 部分事件无法触发的Bug [#2774](https://github.com/dcloudio/uni-app/issues/2774)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 图片选择界面设置 filter 为 video 时仍然显示`原图`按钮的Bug
  + iOS平台 修复 二维码扫码在应用横屏模式时预览画面被旋转了的Bug [详情](https://ask.dcloud.net.cn/question/116187)
* 【uniCloud】
  + 【重要】clientDB 新增 支持使用 getTemp 对主表、副表过滤后再联表查询，大幅提升联表查询性能 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-with-temp)

#### 3.2.5.20210827-alpha
* 【uni-app】
  + 【重要】新增 uni-app Vue3 版本 支持运行和发行到 App
  + 新增 uni-app Vue3 版本 发行到H5 支持以SSR方式发行 [详情](https://uniapp.dcloud.io/collocation/ssr)
  + App平台、H5平台 新增 uni.getLocale、uni.setLocale 接口，用于获取和设置应用语言 [详情](https://uniapp.dcloud.io/api/ui/locale)
  + App平台、H5平台 修复 scroll-view 组件滚动过快时 scroll 事件回调返回信息不正确的Bug [详情](https://ask.dcloud.net.cn/question/128573)
  + App平台、H5平台 修复 canvas 组件 createPattern 方法无效的Bug [详情](https://ask.dcloud.net.cn/question/128793)
  + App平台 优化 nvue 页面排版机制，解决横竖屏切换可能引起页面显示不正常的Bug
  + App平台 修复 nvue 页面 rich-text 组件解析块元素出现多余换行的Bug [详情](https://ask.dcloud.net.cn/question/116518)
  + App-Android平台 新增 nvue 页面适配支持折叠屏手机
  + App-Android平台 修复 nvue 页面 text 组件 line-height 高度失真引起 picker-view 无法对齐的Bug [详情](https://ask.dcloud.net.cn/question/128610)
  + App-Android平台 修复 nvue 页面 list、swiper、waterfall 组件嵌套时，包含的 header 组件可能无法正常显示Bug [详情](https://ask.dcloud.net.cn/question/128578)
  + App-iOS平台 修复 nvue 页面 textarea 组件的 blur 事件回调参数中缺少 cursor 属性数据的Bug [详情](https://ask.dcloud.net.cn/question/129023)
  + App-iOS平台 修复 nvue 页面 video 组件上方存在其他组件时可能引起显示错乱的Bug [详情](https://ask.dcloud.net.cn/question/129662)
  + App-iOS平台 修复 uni.openDocument 部分情况下回调错误的Bug
  + H5平台 修复 导航栏 searchInput 输入框出现两个清空 icon 的Bug [详情](https://ask.dcloud.net.cn/question/129225)
  + H5平台 修复 titleNView 配置 type 为 transparent 时，float 为 left 的 button 不居中的Bug [详情](https://ask.dcloud.net.cn/question/129598)
  + 支付宝小程序平台 修复 uni.chooseImage 在模拟器上不返回 tempFiles 的Bug [详情](https://ask.dcloud.net.cn/question/128732)
  + 抖音小程序平台 修复 同名文件内引用同一个组件作用域插槽渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/127962)
  + 抖音小程序平台 修复 使用 .sync 更新父子组件间的值失效的Bug [详情](https://ask.dcloud.net.cn/question/127397)
  + QQ小程序平台 修复 真机运行报错的Bug [#2648](https://github.com/dcloudio/uni-app/issues/2648)
* 【uniCloud】
  + uniCloud本地调试插件 修复 云函数日志 文件路径存在中文时无法点击跳转的Bug
  + uniCloud本地调试插件 修复 阿里云事务执行 updateAndReturn 报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD Sigmob广告联盟支持激励视频广告 [文档](https://uniapp.dcloud.io/api/a-d/rewarded-video)
  + 更新 uni-AD 腾讯优量汇SDK Android为4.400.1270版，iOS为4.13.02版；快手广告联盟SDK Android为3.3.13版， iOS为3.3.14版；快手内容联盟SDK Android为3.3.22版，iOS为3.3.22版
  + 优化 uni-AD 基础开屏广告填充率
  + 【重要】Android平台 新增 Android Support Library 升级迁移到 AndroidX
  + Android平台 新增 原生隐私政策提示框内容中的链接支持本地 html 页面地址 [详情](https://ask.dcloud.net.cn/article/36937)
  + Android平台 更新 云端打包环境 compileSdkVersion 版本为 30，buildToolsVersion 版本为 29.0.3
  + Android平台 修复 图片选择不设置 sizeType 时默认不显示`原图`按钮，选择图片会进行压缩的Bug [详情](https://ask.dcloud.net.cn/question/129156)
  + iOS平台 修复 3.2.0 版本引出的 微信登录、分享、支付，QQ登录、分享在部分设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/129378)
  + iOS平台 修复 视频播放控件 VideoPlayer 视频带有方向属性时 poster 封面图会被旋转的Bug [详情](https://ask.dcloud.net.cn/question/129090)
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 objectFit 为 cover 时封面显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/127991)
  + iOS平台 修复 新浪分享模块在某些安全平台检测可能误报使用 UIWebview APIs 的Bug
  + iOS平台 修复 二维码扫码部分图片可能无法识别的Bug

#### 3.2.1.20210811-alpha
* 【uni-app】
  + App-Andriod平台 优化 uni.chooseImage 图片选择界面增加`原图`按钮
  + App-Android平台 修复 3.2.0 版本引出的 uni.scanCode 可能无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/128311)
  + App-Android平台 修复 uni.saveFile 保存通过 uni.chooseImage 选择的图片在 Android11 设备上可能失败的Bug [详情](https://ask.dcloud.net.cn/question/128442)
  + App-iOS平台 修复 uni.chooseImage 图片选择界面`原图`按钮操作逻辑不正确的Bug
  + 小程序平台 修复 作用域插槽内使用事件后默认使用新版作用域插槽编译模式的Bug [详情](https://ask.dcloud.net.cn/question/127297)
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】Android平台 新增 androidPrivacy.json 文件配置隐私政策提示框 [详情](https://ask.dcloud.net.cn/article/36937)
  + Android平台 修复 3.1.19 版本引出的 直播推流 LivePusher 无法全屏预览的Bug [详情](https://ask.dcloud.net.cn/question/127987)
  + Android平台 修复 5+App项目打包后提交华为应用市场审核会误报包含三方广告SDK的Bug [详情](https://ask.dcloud.net.cn/question/126498)
  + Android平台 修复 申请权限被用户拒绝后，引导用户跳转设置界面开启权限后返回应用依然无法获取权限的Bug [详情](https://ask.dcloud.net.cn/question/128369)
  + iOS平台 修复 3.2.0 版本引出的 图片选择界面中部分按钮文字在系统语言为中文时依然显示英文的Bug [详情](https://ask.dcloud.net.cn/question/128285)
  + iOS平台 修复 Downloader 下载文件名称出现乱码或包含特殊字符，导致保存文件无法读取的Bug

#### 3.2.0.20210801-alpha
* 【uni-app】
  + App平台、H5平台 新增 input 组件 type 支持 tel 类型
  + App平台、H5平台 新增 input 组件支持 text-content-type 属性
  + App平台、H5平台 修复 3.1.22 版本引出的 scroll-view 组件下拉刷新失效的Bug
  + App-iOS平台 修复 压缩后的视频无法通过 plus.io 接口操作的Bug
  + App-iOS平台 修复 3.1.22 版本引出的 softinputMode 配置为 adjustResize 无效的Bug
  + App-iOS平台 修复 nvue map 组件 marker 设置 label 的 bgColor 为透明值无效的Bug [详情](https://ask.dcloud.net.cn/question/126459)
  + H5平台 优化 导航栏搜索框增加清除按钮
  + 支付宝小程序平台 修复 部分内置组件事件当做自定义事件处理的Bug
  + 【重要】 uniad广告的ad组件 支持h5平台  [详情](https://uniapp.dcloud.net.cn/component/ad)
  + 【重要】 uni ui 支持 vue3 [详情](https://ext.dcloud.net.cn/plugin?id=55)
  + HBuilder官方预置项目全面支持 vue3，包括hello uni-app、hello uniCloud、uniCloud admin、uni-starter等
  + 新增 VUE3 条件编译，方便一套代码同时兼容vue2和vue3 [详情](https://uniapp.dcloud.net.cn/platform?id=preprocessor)
  + uni-ui uni-collapse 修复 由1.2.0版本引起的 change 事件返回 undefined 的Bug
  + uni-ui uni-collapse 优化 组件示例
  + uni-ui uni-collapse 新增 组件折叠动画
  + uni-ui uni-collapse 新增 value\v-model 属性 ，动态修改面板折叠状态
  + uni-ui uni-collapse 新增 title 插槽 ，可定义面板标题
  + uni-ui uni-collapse 新增 border 属性 ，显示隐藏面板内容分隔线
  + uni-ui uni-collapse 新增 title-border 属性 ，显示隐藏面板标题分隔线
  + uni-ui uni-collapse 修复 resize 方法失效的Bug
  + uni-ui uni-collapse 修复 change 事件返回参数不正确的Bug
  + uni-ui uni-collapse 优化 H5、App 平台自动更具内容更新高度，无需调用 reszie() 方法
  + uni-ui uni-data-checkbox 优化 在uni-forms组件，与label不对齐的问题
  + uni-ui uni-data-checkbox 修复 单选默认值为0不能选中的Bug
  + uni-ui uni-easyinput 优化 errorMessage 属性支持 Boolean 类型
  + uni-ui uni-file-picker 修复 return-type为object下，返回值不正确的Bug
  + uni-ui uni-file-picker 修复（重要） H5 平台下如果和uni-forms组件一同使用导致页面卡死的问题
  + uni-ui uni-file-picker 优化 h5平台下上传文件导致页面卡死的问题
  + uni-ui uni-forms 修复 vue2 下条件编译导致destroyed生命周期失效的Bug
  + uni-ui uni-forms 修复 1.2.1 引起的示例在小程序平台报错的Bug
  + uni-ui uni-forms 修复 动态校验表单，默认值为空的情况下校验失效的Bug
  + uni-ui uni-forms 修复 不指定name属性时，运行报错的Bug
  + uni-ui uni-forms 优化 label默认宽度从65调整至70，使required为true且四字时不换行
  + uni-ui uni-forms 优化 组件示例，新增动态校验示例代码
  + uni-ui uni-forms 优化 组件文档，使用方式更清晰
  + uni-ui uni-list 修复 与其他组件嵌套使用时，点击失效的Bug
  + uni-ui uni-swipe-action 修复 跨页面修改组件数据 ，导致不能滑动的问题
  + hello-uniapp 新增 同时适配 vue2 和 vue3（HBuilder X 3.2.0+ 支持 vue3）
  + uniCloud admin 新增 同时适配 vue2 和 vue3（HBuilder X 3.2.0+ 支持 vue3）
  + uniCloud admin 新增 应用管理功能，管理用户可登录的应用，如某账户只能登录管理端、不能登录用户端（uni-id@3.3.1+ 支持）
  + uniCloud admin 新增 升级系统管理 list 页的表格功能，支持数据排序、筛选、搜索等功能
  + uniCloud admin 修复 刷新页面时，左侧菜单丢失高亮状态的 bug
  + uniCloud admin 修复 修改密码失败的 bug
  + 新增 插件市场 支持前端文件加密 限付费的云端一体项目类型的前端文件 [详情](https://ask.dcloud.net.cn/article/35408)
* 【uniCloud】
  + 云数据库 新增 updateAndReturn 方法，可以更新并返回更新后的值（仅可在云函数中使用） [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=update-and-return)
  + uniCloud本地调试插件 修复 部分情况下项目启动时报 npm 安装失败的Bug
  + uni-id 新增 多系统（如管理端、用户端）的配置隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
  + uni-id 新增 多系统用户管理，如某账户只能登录管理端，不能登录用户端 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-user)
    - 此版本升级需要开发者处理历史用户数据，请参考 [补齐用户dcloud_appid字段](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid)
  + uni-id 新增 QQ登录、注册相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=qq)
  + uni-id 调整 不再支持绑定手机、邮箱时不填验证码直接绑定
* 【App插件(含5+App和uni-app的App端)】
  + 新增 一键登录 服务协议项样式支持设置复选框图标 [详情](https://uniapp.dcloud.io/univerify)
  + 优化 新浪微博 登录、分享 模块配置，去掉appsecret参数
  + 修复 一键登录 应用横屏显示时打开一键登录页面UI显示异常的Bug [详情](https://ask.dcloud.net.cn/question/126597)
  + Android平台 更新 uni-AD 今日头条穿山甲广告SDK为3.8.0.6版；腾讯优量汇广告SDK为4.380.1250版；快手广告联盟SDK为3.3.12版，快手内容联盟SDK为3.3.20版
  + Android平台 更新 腾讯X5内核版本为 4.3.0.176_44076，解决在部分设备无法加载使用X5内核的问题
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.2.0，个推核心组件SDK版本为3.1.2.0
  + Android平台 修复 3.1.22 版本引出的 template 原生隐私政策提示框内容过多时显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/127582)
  + Android平台 修复 3.1.19 版本引出的 UniPush 云端打包设置 GooglePlay(AAB) 渠道，getClientInfo 无法获取推送标识信息的Bug [详情](https://ask.dcloud.net.cn/question/127434)
  + Android平台 修复 页面中 input 标签 type 为 file 时，应用没有读写手机存储权限不会主动申请导致无法正常使用的Bug
  + Android平台 修复 VideoPlayer 播放带方向信息的视频源，暂停时显示方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/125783)
  + Android平台 修复 VideoPlayer 播放部分视频源，暂停时可能显示黑边的Bug [详情](https://github.com/dcloudio/uni-app/issues/2779)
  + Android平台 修复 LivePusher 推流设置的本地缓冲池过大导致延迟时间过长的Bug
  + iOS平台 更新 QQ 登录、分享SDK版本为V3.5.3；新浪微博 登录、分享SDK版本为3.3.1；微信 登录、分享、支付SDK版本为1.9.1
  + iOS平台 更新 UniPush 使用的个推SDK为2.5.10.0无IDFA版
  + iOS平台 修复 一键登录 设置服务协议复选框默认不勾选时授权按钮背景颜色显示不正确的Bug
  + iOS平台 修复 Downloader 下载文件返回的请求头 Content-Range 数据为空时引起应用崩溃的Bug
  + iOS平台 修复 百度语音识别在用户拒绝录音权限时没有返回错误回调的Bug
  + iOS平台 修复 在 iOS14 设备使用 5G 网络可能引起崩溃的Bug

#### 3.1.22.20210707-alpha
* 【uni-app】
  + 【重要】调整 App平台、H5平台 input 组件 number 类型在 iOS 平台改用仅数字键盘（九宫格），如需输入负数和小数请改用 digit 类型
  + App平台、H5平台 修复 image 组件使用 transform 样式后，大小计算错误的Bug [详情](https://ask.dcloud.net.cn/question/125987)
  + App平台、H5平台 修复 scroll-view 下拉刷新错误触发的Bug [详情](https://ask.dcloud.net.cn/question/124430)
  + App平台、H5平台 优化 input 组件移除 verifyNumber 属性，改由框架自动处理
  + App-Android平台 修复 nvue  页面 swiper 组件嵌套 list 组件时 source 信息错误的Bug [详情](https://ask.dcloud.net.cn/question/121039)
  + App-iOS平台 修复 iOS14.6 键盘弹出卡顿的Bug [详情](https://ask.dcloud.net.cn/question/125870)
  + H5平台 修复 input 组件设置 confirm-type 为 search 时，无法自动获取焦点的Bug
  + 小程序平台 修复 v-for 嵌套 slot 编译报错的Bug [详情](https://ask.dcloud.net.cn/question/125108)
  + 小程序平台 修复 v-for 中含有复杂表达式时，事件接收的 item 参数错误的Bug
  + 小程序平台 修复 部分数值变更无法更新的Bug [#2696](https://github.com/dcloudio/uni-app/issues/2696)
  + 小程序平台 修复 新版作用域插槽编译模式嵌套自定义组件不显示的Bug [详情](https://ask.dcloud.net.cn/question/126058)
  + 抖音小程序平台 修复 新版开发者工具中 uni.request 发送请求失败的Bug
* 【uniCloud】
  + 【重要】云函数支持创建时选择 nodejs 版本 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=runtime)
  + 新增 内容安全公共模块，包含图片鉴黄、文字内容违规检测，免费且全端可用 [详情](https://ext.dcloud.net.cn/plugin?id=5460)
  + clientDB 新增 multiSend 接口，用于多个clientDB联网请求合并为一次联网 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + unicloud-db组件和API 新增 getTemp 接口，用于在 multiSend 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + uni-id 调整 3.1.1版本发布，使用兼容 uniCloud 响应体规范的新错误码格式 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
  + uniCloud本地调试插件 修复 部分情况下出现 MaxListenersExceededWarning 警告的Bug
  + uniCloud本地调试插件 修复 项目内存在项目外文件的软链时，修改无法实时生效的Bug
  + JQL数据库管理 修复 部分情况下执行数据库操作无响应的Bug
  + 客户端 修复 nvue 页面无法触发 App.vue 内注册的 db.on('error')、db.on('refreshToken') 等回调的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 优化 通知栏操作逻辑，解决提交 Google Play 审核可能提示 Implicit PendingIntent Vulnerability 的问题 [详情](https://ask.dcloud.net.cn/question/126207)
  + Android平台 优化 template 原生隐私政策提示框UI样式
  + iOS平台 修复 uni-AD 开屏广告在部分应用中可能引起曝光率较低的Bug
  + iOS平台 修复 在部分情况下 WKWebView 同步共享 cookie 可能引起崩溃的Bug

#### 3.1.21.20210624-alpha
* 【uni-app】
  + App平台 修复 3.1.20 引出的 uni.showToast 接口 icon 固定为 error 类型的Bug [详情](https://ask.dcloud.net.cn/question/125773)

#### 3.1.20.20210623-alpha
* 【uni-app】
  + App平台、H5平台 修复 input 组件同时设置 type=number 和 maxlength 时，部分情况 value 同步错误的Bug
  + App平台、H5平台 修复 textarea 组件设置 min-height 后高度异常的Bug
  + App平台 新增 uni.showToast 接口 icon 支持 error 类型
  + App平台 优化 nvue 页面中去除 display:flex 相关警告
  + App平台 优化 uni.chooseLocation 搜索结果按综合排序 [详情](https://ask.dcloud.net.cn/question/125044)
  + App-Android平台 优化 快速频繁操作应用启动/关闭可能出现白屏现象的问题
  + App-Android平台 修复 uni.previewImage 长按保存图片可能失败的Bug [详情](https://ask.dcloud.net.cn/question/125357)
  + App-iOS平台 修复 调用 uni.hideKeyboard 后点击页面任意位置 input 组件自动聚焦的Bug [详情](https://ask.dcloud.net.cn/question/125233)
  + App-iOS平台 修复 nvue textarea 组件不设置 padding 时 placeholder 显示位置不正常的Bug [详情](https://ask.dcloud.net.cn/question/122376)
  + 百度小程序平台 修复 部分 class 写法编译后失效的Bug
  + QQ小程序平台 修复 默认启用 nodeModules 导致作用域插槽编译后运行报错的Bug
* 【uniCloud】
  + 新增 uniCloud响应体规范，方便前端拦截器统一处理、方便国际化 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-response-format)
  + 客户端 新增 添加拦截器、移除拦截器API [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=add-interceptor)
  + 客户端 修复 HBuilderX 3.1.17-alpha 引出的 db.on("error") 回调不执行的Bug
  + 客户端 修复 leftWindow、topWindow 中使用 uniCloud 腾讯云报错的Bug [详情](https://ask.dcloud.net.cn/question/125039)
  + DB Schema 调整 enum 属性最大可枚举500条数据
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 快手广告联盟SDK Android为3.3.10.2版，iOS为3.3.10 版；快手内容联盟SDK Android为3.3.18.1版，iOS为3.3.19版
  + Android平台 修复 手机语言设置为阿拉伯文后无法操作页面返回的Bug [详情](https://ask.dcloud.net.cn/question/124914)
  + Android平台 修复 H5页面中 intent:// 协议无法拉起三方App的Bug [详情](https://ask.dcloud.net.cn/question/124597)
  + Android平台 修复 云端打包 提交 Google Play 审核提示包含无法识别的语言的Bug [详情](https://ask.dcloud.net.cn/question/125203)
  + Android平台 修复 getVideoInfo 方法调用无响应的Bug [详情](https://ask.dcloud.net.cn/question/122739)
  + Android平台 修复 3.1.14版本引出的 微博登录取消授权后再次调用无响应的Bug [详情](https://ask.dcloud.net.cn/question/125273)
  + Android平台 修复 targetSdkVersion 设置为 30 在部分 Android 11 设备可能无法正常拉起支付App的Bug
  + iOS平台 新增 安全区域配置 safearea 支持 backgroundDark 属性设置暗黑模式的背景颜色 [详情](https://ask.dcloud.net.cn/article/36995#safearea)
  + iOS平台 更新 云端打包环境为XCode12.5，解决在 iOS15 设备无法安装的Bug

#### 3.1.19.20210613-alpha
* 【uni-app】
  + App平台、H5平台 新增 input 组件添加 verifyNumber 属性 [详情](https://uniapp.dcloud.io/component/input)
  + App平台、H5平台 修复 editor 组件 insertImage 多次触发 input 事件的Bug [详情](https://ask.dcloud.net.cn/question/124809)
  + App平台 新增 一键登录自定义按钮添加 provider 属性，用于动态生成 buttons 时区分按钮 [详情](https://uniapp.dcloud.io/univerify?id=用户点击一键登录自定义按钮)
  + App平台 新增 uni.chooseImage 支持 crop 配置 [详情](https://uniapp.dcloud.io/api/media/image?id=chooseimage)
  + App平台 新增 video 组件支持 header 配置 [详情](https://uniapp.dcloud.io/component/video)
  + App-Android平台 修复 uni.request 请求 header 中设置自定义 content-type 会添加 charset 的Bug [详情](https://ask.dcloud.net.cn/question/123961)
  + App-Android平台 修复 websocket 请求过多可能引起崩溃的Bug
  + App-Android平台 修复 nvue webview 组件设置 background 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/117845)
  + App-Android平台 修复 nvue video 组件暂定播放后可能出现黑边的Bug [详情](https://ask.dcloud.net.cn/question/124152)
  + 小程序平台 优化 作用域插槽内支持使用作用域外数据 [#495](https://github.com/dcloudio/uni-app/issues/495)
  + 百度小程序平台 修复 基础库 3.290.33 以上页面 mounted 执行两次的Bug [#2642](https://github.com/dcloudio/uni-app/issues/2642)
  + 百度小程序平台 修复 使用 usingComponents 后代码上传报错的Bug [#2652](https://github.com/dcloudio/uni-app/issues/2652)
  + 支付宝小程序平台 优化 支持 useDynamicPlugins 配置 [详情](https://ask.dcloud.net.cn/article/39114)
  + 抖音小程序平台 修复 基础库 2.0 以上组件关系错乱的Bug [#2651](https://github.com/dcloudio/uni-app/issues/2651)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 拍照和本地相册选择 支持设置 crop 裁剪编辑图片 [规范](https://www.html5plus.org/doc/zh_cn/camera.html#plus.camera.CameraOptions)
  + 新增 视频播放控件 VideoPlayer 播放http/https协议视频资源时支持设置请求的 header [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + 新增 登录鉴权服务对象支持 nativeClient 属性标识依赖的客户端App是否已安装 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.nativeClient)
  + Android平台 更新 LivePusher 直播推流模块基于开源项目[yasea](https://github.com/begeekmyfriend/yasea)，支持 srs4.x
  + Android平台 更新 uni-AD 穿山甲SDK 为3.7.0.2版
  + Android平台 修复 storage 数据存储键值 key 中包含特殊字符时可能存取失败的Bug
  + Android平台 修复 getFileInfo 在 Android11 设备上可能无法正常获取文件信息的Bug [详情](https://ask.dcloud.net.cn/question/124440)
  + iOS平台 更新 uni-AD 腾讯优量汇SDK 为4.12.71版
  + iOS平台 更新 视频播放控件 VideoPlayer 使用的 FFmpeg 版本为 ff4.0--ijk0.8.8--20210426--001
  + iOS平台 修复 uni-AD 应用从后台切换到前台开屏广告可能被其它界面覆盖的Bug
  + iOS平台 修复 plus.sqlite.isOpenDatabase 不传入参数可能引起卡死或崩溃的Bug [详情](https://ask.dcloud.net.cn/question/114091)
  + iOS平台 修复 Geolocation 定位模块在用户未授权或设备关闭定位功能时返回错误码与规范不一致的Bug
* 【UniMPSDK】
  + iOS平台 修复 push 方式打开小程序手势返回关闭后偶现无法再次打开小程序页面的Bug
  + iOS平台 修复 动态设置 titleNView 样式后可能导致胶囊菜单按钮弹出的 actionSheet 部分 item 显示空白的Bug

#### 3.1.17.20210603-alpha
* 【uni-app】
  + App-Android平台 新增 nvue ad-content-page组件支持页面内显示快手短视频内容联盟 [规范](https://uniapp.dcloud.net.cn/component/ad-content-page)
  + App-Android平台 修复 nvue map 组件 marker 上的 label 可能会被 marker 本身覆盖的Bug [详情](https://ask.dcloud.net.cn/question/122872)
  + uni-ui uni-data-checkbox 新增 map 属性，可以方便映射text/value属性
  + uni-ui uni-data-checkbox 修复 不关联服务空间的情况下组件报错的Bug
  + uni-ui uni-data-picker 修复 上个版本引出的本地数据无法选择带有children的2级节点
  + uni-ui uni-forms 修复 动态删减数据导致报错的问题
  + uni-ui uni-forms 新增 modelValue 属性 ，value 即将废弃
  + uni-ui uni-forms 新增 uni-forms-item 可以设置单独的 rules
  + uni-ui uni-forms 新增 validate 事件增加 keepitem 参数，可以选择那些字段不过滤
  + uni-ui uni-forms 优化 submit 事件重命名为 validate
  + uni-ui uni-data-picker 修复 无法加载云端数据的问题
  + uni-ui uni-data-picker 修复 v-model 无效问题
  + uni-ui uni-data-picker 修复 loaddata 为空数据组时加载时间过长问题
  + uni-ui uni-datetime-picker 修复 图标在小程序上不显示的 bug
  + uni-ui uni-datetime-picker 优化 重命名引用组件，避免潜在组件命名冲突
  + uni-ui uni-datetime-picker 优化 代码目录扁平化
  + uni-ui uni-tag 修复 未定义 sass 变量 "$uni-color-royal" 的bug
* 【uniCloud】
  + 修复 HBuilderX 3.1.16 引出的未关联服务空间时无法获取 uniCloud.mixinDatacom 的Bug
  + 修复 HBuilderX 3.1.16 引出的某些情况下关联腾讯云服务空间的项目运行报错的Bug
  + uniCloud本地调试插件 修复 HBuilderX 3.1.16 引出的云函数日志内的文件链接点击无法跳转到对应文件的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 优化 云端打包googleplay渠道使用 Android App Bundle (AAB) 格式 [详情](https://ask.dcloud.net.cn/article/39052)
  + iOS平台 修复 视频播放控件 VideoPlayer 调用 playbackRate 方法设置倍数播放值为 1.25、1.5 不生效的Bug [详情](https://ask.dcloud.net.cn/question/107802)
  + iOS平台 修复 扫码时息屏后再次打开引起扫描线动画停止的Bug [详情](https://ask.dcloud.net.cn/question/124001)

#### 3.1.16.20210526-alpha
* 【uni-app】
  + 【重要】H5端 新增 支持在 CLI 工程使用 vue3/vite [详情](https://ask.dcloud.net.cn/article/37834)
  + 补充 addInterceptor 拦截器文档 [详情](https://uniapp.dcloud.io/api/interceptor)
  + App-Android平台 修复 nvue swiper 组件动态加载数据时会跳到第一个 swiper-item 的bug [详情](https://ask.dcloud.net.cn/question/121687)
* 【uniCloud】
  + clientDB 新增 使用副表 foreignKey 进行联表查询时增加 _value 用于存储主表关联字段原始值 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + clientDB 修复 部分情况下 action.after 会重复执行一次的bug
  + JQL数据管理 修复 使用云端 schema 时找不到 schema 的Bug [详情](https://ask.dcloud.net.cn/question/123285)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 3.1.15 版本引出的 云端打包同时勾选 UniPush 和 一键登录 模块会引起打包失败的Bug
  + iOS平台 更新 百度语音识别 SDK 为 3.0.10.0 版
  + iOS平台 优化 相册目录选择操作界面

#### 3.1.15.20210518-alpha
* 【uni-app】
  + App平台 新增 uni-AD 互动游戏，无需自行设计激励视频场景，快速嵌入激励视频变现 [详情](https://uniapp.dcloud.net.cn/api/a-d/interactive)
  + App平台 新增 激励视频服务器回调 [详情](https://uniapp.dcloud.net.cn/api/a-d/rewarded-video?id=callback)
  + App平台、H5平台 修复 3.1.10 版本引出的 textarea 组件固定 box-sizing 导致部分情况显示异常的Bug [详情](https://ask.dcloud.net.cn/question/121893)
  + App平台 修复 3.1.10 版本引出的 input 组件类型为 number 时在低版本 webview 失去焦点时报错的Bug [详情](https://ask.dcloud.net.cn/question/122328)
  + App平台 修复 3.1.0 版本引出的 dataset 使用驼峰写法时获取数据格式与其他平台不一致的Bug [详情](https://ask.dcloud.net.cn/question/119034)
  + App-Android平台 修复 3.1.14 版本引出的 nvue web-view 组件无法加载本地 html 页面的Bug [详情](https://ask.dcloud.net.cn/question/122944)
  + App-Android平台 修复 nvue map 组件 markers 中的 id 属性值重复导致标记点显示异常的Bug
  + App-iOS平台 修复 uni.downloadFile 下载文件名称存在中文时无法通过 uni.saveFile 保存的Bug [详情](https://ask.dcloud.net.cn/question/122212)
  + App-iOS平台 修复 nvue video 组件播放 mov 格式视频时显示尺寸会变小的Bug [详情](https://ask.dcloud.net.cn/question/121175)
  + H5平台 修复 3.1.0 版本引出的样式中包含媒体查询时部分 rpx 单位失效的Bug [#2600](https://github.com/dcloudio/uni-app/issues/2600)
  + uni-ui 发布新版本 1.3.1
    - uni-badge 新增 uni-badge 的 absolute 属性，支持定位
    - uni-badge 新增 uni-badge 的 offset 属性，支持定位偏移
    - uni-badge 新增 uni-badge 的 is-dot 属性，支持仅显示有一个小点
    - uni-badge 新增 uni-badge 的 max-num 属性，支持自定义封顶的数字值，超过 99 显示99+
    - uni-badge 优化 uni-badge 属性 custom-style， 支持以对象形式自定义样式
    - uni-badge 修复 uni-badge 在 App 端，数字小于10时不是圆形的bug
    - uni-badge 修复 uni-badge 在父元素不是 flex 布局时，宽度缩小的bug
    - uni-badge 新增 uni-badge 属性 custom-style， 支持自定义样式
    - uni-datetime-picker 修复 ios 下不识别 '-' 日期格式的 bug
    - uni-datetime-picker 优化 pc 下弹出层添加边框和阴影
    - uni-datetime-picker 修复 在 admin 中获取弹出层定位错误的bug
    - uni-datetime-picker 修复 type 属性向下兼容，默认值从 date 变更为 datetime
    - uni-datetime-picker 支持日历形式的日期+时间的范围选择
    - uni-steps 修复 uni-steps 横向布局时，多行文字高度不合理的 bug
    - uni-countdown 修复 uni-countdown 不能控制倒计时的 bug
    - uni-tag 修复 royal 类型无效的bug
    - uni-tag 修复 uni-tag 宽度不自适应的bug
    - uni-tag 新增 uni-tag 支持属性 custom-style 自定义样式
    - uni-link 新增 href 属性支持 tel:|mailto:
    - uni-popup 修复 组件内放置 input 、textarea 组件，无法聚焦的问题
    - uni-popup 新增 type 属性的 left\right 值，支持左右弹出
    - uni-popup 新增 open(String:type) 方法参数 ，可以省略 type 属性 ，直接传入类型打开指定弹窗
    - uni-popup 新增 backgroundColor 属性，可定义主窗口背景色,默认不显示背景色
    - uni-popup 新增 safeArea 属性，是否适配底部安全区
    - uni-popup 修复 App\h5\微信小程序底部安全区占位不对的Bug
    - uni-popup 修复 App 端弹出等待的Bug
    - uni-popup 优化 提升低配设备性能，优化动画卡顿问题
    - uni-popup 优化 更简单的组件自定义方式
    - uni-table 修复 示例项目缺少组件的Bug
    - uni-forms 修复 自定义检验器失效的问题
    - uni-title 修复 示例项目缺少组件的Bug
    - uni-transition 修复 示例项目缺少组件的Bug
    - uni-swiper-dot 修复 示例项目缺少组件的Bug
    - uni-ui 新增 组件示例地址
* 【uniCloud】
  + 【重要】新增 uni-starter 集成商用项目开发常见功能的云端一体项目模板 [详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + clientDB 修复 删除记录、统计记录数时受字段权限影响的bug [详情](https://ask.dcloud.net.cn/question/122846)
  + clientDB 修复 日期类型（date）数据校验出错的Bug [详情](https://ask.dcloud.net.cn/question/122517)
  + clientDB 修复 action、validateFunction 内打印日志无法在web控制台查看的Bug
  + unicloud-db组件 修复 联表查询时无法调用remove方法的问题 [详情](https://ask.dcloud.net.cn/question/122934)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 快手广告联盟支持插屏广告
  + 更新 uni-AD 快手广告联盟SDK 为3.3.9 版；快手内容联盟SDK 为3.3.16 版；腾讯优量汇SDK Android为4.360.1230版；穿山甲SDK Android为3.6.1.3版，iOS为3.6.1.2版
  + Android平台 更新 腾讯X5内核版本为 4.3.0.93，解决X5内核渲染页面时获取的UA中不包含 MQQBrowser 关键字的Bug
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.0.0，提升在Android高版本设备上的推送消息到达率
  + Android平台 修复 QQ登录获取用户信息 getUserInfo 返回的昵称可能出现乱码的Bug [详情](https://ask.dcloud.net.cn/question/120265)
  + iOS平台 更新 高德地图 SDK 为 1.6.4无IDFA版，适配 iOS14.5 开始 AppStore 审核要求用户许可访问IDFA数据
  + iOS平台 修复 3.1.11 版本引出的 横屏状态 toast 消息提示框 和 loading 提示框显示异常的Bug [详情](https://ask.dcloud.net.cn/question/121979)
  + iOS平台 修复 保存文件名称中存在中文时报错的Bug
  + iOS平台 修复 一键登录 授权登录时需要读取IDFA的Bug

#### 3.1.14.20210430-alpha
* 【uni-app】
  + App平台、小程序平台 新增 uni.getUserProfile 方法用于获取用户信息 [详情](https://uniapp.dcloud.io/api/plugins/login?id=getuserprofile)
  + App平台、H5平台 优化 progress 组件支持 duration 参数
  + App平台 优化 uni.getVideoInfo 返回信息增加 orientation、type、bitrate 属性
  + App平台 修复 3.1.10 版本引出的 uni.chooseVideo 选取视频失败的Bug
  + App-Android平台 新增 uni.request 网络请求支持 TLS 双向认证 [详情](https://ask.dcloud.net.cn/article/38981)
  + App-Android平台 修复 nvue map 组件 marker 执行移动动画时 callout 可能不会跟随的Bug [详情](https://ask.dcloud.net.cn/question/120985)
  + App-Android平台 修复 nvue video 组件在调用分享功能返回后，视频封面会消失的Bug [详情](https://ask.dcloud.net.cn/question/121364)
  + H5平台 修复 getSystemInfoSync()获取windowBottom的高度错误 [详情](https://ask.dcloud.net.cn/question/121154)
  + 小程序平台 修复 v-for 表达式包含方法时事件编译错误的Bug
  + uni-ui 优化 为依赖 uni-icons 的 ui 组件添加依赖, 导入后自动下载依赖
  + uni-ui 修复 uni-data-picker 非树形数据有 where 属性查询报错的问题
  + uni-ui 新增 uni-datetime-picker 日历形式的日期时间选择
  + uni-ui 新增 uni-number-box v-model 双向绑定
  + uni-ui 修复 uni-number-box 浮点数运算不精确的Bug
  + uni-ui 修复 uni-number-box change 事件触发不正确的Bug
  + uni-ui 修复 uni-rate 布局变化后星星计算不准确的Bug
  + uni-ui 新增 uni-transition 通过方法自定义动画
  + uni-ui 新增 uni-transition custom-class 非 NVUE 平台支持自定义 class 定制样式
  + uni-ui 优化 uni-transition 动画触发逻辑，使动画更流畅
  + uni-ui 优化 uni-transition 支持单独的动画类型
  + uni-ui 优化 uni-transition 文档示例
* 【uniCloud】
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + clientDB 新增 联表查询支持副表foreignKey联查，即副表字段的foreignKey指向主表，把副表数据挂在主表下面 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + uniCloud本地调试插件 修复 阿里云偶发启动时多请求并发报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 一键登录 全屏模式支持在登录界面添加自定义登录按钮 [详情](https://uniapp.dcloud.io/univerify)
  + 新增 获取视频信息 getVideoInfo 支持获取画面方向 orientation、视频格式 type、视频码率 bitrate [文档](https://www.html5plus.org/doc/zh_cn/io.html#plus.io.VideoInfo)
  + Android平台 优化 原生模板隐私政策提示框逻辑，解决部分应用市场检测到弹出隐私政策框之前读取mac地址和应用列表的问题 [文档](https://ask.dcloud.net.cn/article/36937)
  + Android平台 更新 新浪微博分享、授权登录 SDK 为 10.10.0 版，适配支持 Android11 设备
  + Android平台 更新 高德地图 SDK 为 7.9.1 版，高德定位 SDK 为 5.3.1 版，友盟统计 SDK 为 9.3.8 版
  + Android平台 修复 腾讯云等安全检测平台报的部分高风险漏洞 [详情](https://ask.dcloud.net.cn/article/39020)
  + Android平台 修复 uni-AD 开通基础开屏广告在弱网状态可能引起崩溃的Bug
  + Android平台 修复 uni-AD 快手联盟的信息流广告可能返回高度不正确导致显示异常的Bug
  + Android平台 修复 uni原生插件在原生模板隐私政策提示框之前可能进行初始化违规读取用户数据的Bug
  + 【重要】iOS平台 优化 广告标识 IDFA 操作逻辑，适配从 iOS14.5 开始 AppStore 审核要求用户许可收集跟踪数据 [详情](https://ask.dcloud.net.cn/article/36107)
  + iOS平台 修复 一键登录 登录和其它登录按钮的默认圆角值不一致的Bug [详情](https://ask.dcloud.net.cn/question/121572)
  + iOS平台 修复 微信授权登录调用 authorize 动态传入 appid 参数不生效的Bug [详情](https://ask.dcloud.net.cn/question/121292)

#### 3.1.10.20210416-alpha
* 【uni-app】
  + App平台 新增 插屏广告 uni.createInterstitialAd [详情](https://uniapp.dcloud.net.cn/api/a-d/interstitial)
  + App平台、H5平台 新增 支持 uni.getVideoInfo 用于获取视频信息 [详情](https://uniapp.dcloud.io/api/media/video?id=getvideoinfo)
  + App平台、H5平台 优化 uni.chooseLocation 地图选点支持搜索更大范围
  + App平台、H5平台 优化 input 组件支持 cursor、selectionStart、selectionEnd 属性
  + App平台、H5平台 修复 uni.canvasToTempFilePath 参数 quality 无效的Bug [详情](https://ask.dcloud.net.cn/question/119596)
  + App平台、H5平台 修复 checkbox 组件 disabled 属性无相关样式的Bug
  + App平台 新增 支持 uni.compressVideo 用于压缩视频 [详情](https://uniapp.dcloud.io/api/media/video?id=compressvideo)
  + App平台 优化 uni.chooseVideo 支持 compressed 参数
  + App平台 优化 video 组件支持 enable-play-gesture 属性
  + App平台 修复 image 组件加载后导致其他原生组件显示错位的Bug
  + App平台 修复 多列 picker 组件未设置 value 报错的Bug [#2561](https://github.com/dcloudio/uni-app/issues/2561)
  + App平台 修复 uni.getStorageInfo 获取信息中部分 key 未包含的Bug [#2577](https://github.com/dcloudio/uni-app/issues/2577)
  + App平台 修复 uni.getSystemInfo 返回的 system 信息未包含系统名称的Bug
  + App-Android平台 修复 部分设备 input 组件设置 focus 属性为 true 时键盘收回的Bug
  + App-Android平台 修复 nvue onLoad 事件调用 plus.navigator.hideSystemNavigation 可能出现页面高度异常的Bug
  + App-Android平台 修复 nvue list 组件中加载大量图片上下滚动可能引起崩溃的Bug
  + App-Android平台 修复 nvue map 组件中多个 marker 切换后 callout 可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100883)
  + App-Android平台 修复 nvue map 组件与页面拖拽滚动手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/120600)
  + App-Android平台 修复 nvue picker-view 组件在部分设备可能显示不正常的Bug
  + App-iOS平台 修复 nvue scroll-view 组件下添加过多子组件会有明显卡顿的Bug [详情](https://ask.dcloud.net.cn/question/118444)
  + App-iOS平台 修复 nvue map 组件 marker 标注的 label 设置 anchorY 偏移值无效的Bug [详情](https://ask.dcloud.net.cn/question/120953)
  + App-iOS平台 修复 nvue image 组件加载网络图片发送请求时没有携带 cookie 的Bug
  + H5平台 优化 uni.getSystemInfo 返回的 system 信息支持 Windows、Mac、Linux
  + H5平台 修复 picker-view-column 中的元素无法触发 click 等事件的Bug [详情](https://ask.dcloud.net.cn/question/119346)
  + H5平台 修复 innerAudio.stop 触发 onCanplay 的Bug [#2538](https://github.com/dcloudio/uni-app/issues/2538)
  + 小程序平台 修复 含有逻辑运算的复杂表达式编译后和预期不一致的Bug [详情](https://ask.dcloud.net.cn/question/118651)
  + 支付宝小程序平台 修复 默认插槽默认内容一直显示的Bug [详情](https://ask.dcloud.net.cn/question/116404)
  + uni-ui 新增 uni-data-picker 支持云端非树形表结构数据 [详情](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui 修复 uni-data-checkbox nvue 下无法选中的问题 [详情](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui 修复 uni-data-picker 根节点 parent_field 字段等于null时选择界面错乱问题 [详情](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui 修复 uni-file-picker 选择的文件非 file-extname 字段指定的扩展名报错的Bug [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 优化 uni-file-picker file-extname 字段支持字符串写法，多个扩展名需要用逗号分隔 [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 修复 微信小程序 nv_navigator is not defined 报错的bug
  + uni-ui 修复 uni-load-more 在首页使用时，h5 平台报 'uni is not defined' 的 bug [详情](https://ext.dcloud.net.cn/plugin?id=29)
  + uni-ui 优化 uni-pagination PC 和 移动端适配不同的 ui [详情](https://ext.dcloud.net.cn/plugin?id=32)
  + uni升级中心 App端 新增 call-check-version.js，可用于单独检测是否有更新 [详情](https://ext.dcloud.net.cn/plugin?id=4542)
* 【uniCloud】
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + unicloud-db组件 新增 loadtime 属性，替代 manual 属性 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + unicloud-db组件 新增 foreignKey 属性，用于存在多个foreignKey关系时指定要使用的foreignKey [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + uniCloud.mixinDataCom 新增 foreignKey 属性，用途同上 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + uni-id 修复 3.0.7 版本引出的多个用户访问时可能出现30201报错的Bug
  + uni-id 新增 bindMobile 接口支持通过一键登录的方式绑定 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=bind-mobile)
  + uni-id 调整 bindTokenToDevice 选项默认值改为 false，即默认不再与设备绑定，方便多设备登录
  + 修复 uniCloud.chooseAndUploadFile 在iOS微信小程序真机无法唤起选择文件的Bug
  + uniCloud admin 优化错误提示、键盘响应等众多细节，更新uni-id等众多依赖 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD支持插屏广告 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.createInterstitialAd)
  + 更新 uni-AD 腾讯优量汇SDK iOS为 4.12.4 版，穿山甲SDK 为 3.5.5.0 版；快手联盟SDK Android为 3.3.8 版
  + 新增 离线打包支持 AppKey 管理 [文档](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  + 新增 压缩视频支持 filename 属性设置压缩后文件保存路径功能 [规范](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.CompressVideoOptions)
  + 优化 一键登录 未通过审核时云端打包后调用API返回 -7 错误 [规范](https://uniapp.dcloud.io/univerify?id=%e9%94%99%e8%af%af%e7%a0%81)
  + 修复 一键登录 授权界面显示后，调用原生模态窗口无法正常显示的Bug
  + 修复 存在开屏广告时 splashclosed 事件可能在启动界面关闭前触发的Bug
  + Android平台 更新 公共测试证书，解决某些检测机构报病毒的问题 [文档](https://ask.dcloud.net.cn/article/36522)
  + Android平台 更新 gif图片库 android-gif-drawable 为 1.2.23 版，解决安全检测报存在远程代码执行漏洞的问题
  + Android平台 修复 申请权限被用户拒绝后可能无法再次正常申请权限的Bug [详情](https://ask.dcloud.net.cn/question/120747)
  + Android平台 修复 UniPush个推模块过度申请权限的Bug [详情](https://ask.dcloud.net.cn/question/119240)
  + Android平台 修复 视频播放控件 播放 http/https 地址视频的 cookie 与 X5 内核 webview 页面没有同步共享的Bug
  + Android平台 修复 一键登录 在部分设备上服务协议文本字体显示过大的Bug
  + Android平台 修复 一键登录 显示和关闭授权界面动画时间过长的Bug
  + Android平台 修复 Downloader 下载较大文件时可能引起页面无法更新的Bug
  + Android平台 修复 部分华为手机调用相机录像成功后无法找到视频文件的Bug
  + iOS平台 修复 uni-AD 仅开通增强开屏广告可能出现无法关闭spalsh页面的Bug
  + iOS平台 修复 Apple应用内支付 IAP 某些情况丢单无法恢复的Bug [文档](https://ask.dcloud.net.cn/article/497)
  + iOS平台 修复 应用覆盖安装后可能出现启动白屏的Bug
  + iOS平台 修复 从本地相册选择保存在 iCloud 的视频在下载失败时可能引起崩溃的Bug
  + iOS平台 修复 从本地相册选择gif图片预览时不能播放的Bug
  + iOS平台 修复 在 iPhone12 系列设备未适配底部安全区域的Bug [详情](https://ask.dcloud.net.cn/question/119291)
  + iOS平台 修复 视频播放控件 播放 http/https 地址视频没有同步共享 cookie 的Bug
  + iOS平台 修复 视频播放控件 VideoPlayer 播放某些视频显示方向可能不正确的Bug

#### 3.1.8.20210407-alpha
* 【uni-app】
  + App-Android平台 修复 3.1.6 版本引出的 nvue scroll-view组件设置 scroll-x 为 true 时可能引起闪退的Bug [详情](https://ask.dcloud.net.cn/question/119858)
  + App-iOS平台 修复 picker 组件部分情况下显示异常的Bug [详情](https://ask.dcloud.net.cn/question/119591)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 激励视频播放超过30秒的穿山甲广告点击跳过按钮 onClose 回调中 isEnd 属性值为 false 的Bug
  + iOS平台 修复 一键登录 授权登录界面使用浅色背景可能看不到 loading 显示效果的Bug
* 【uniCloud】
  + 新增 [uni-upgrade-center](https://uniapp.dcloud.io/uniCloud/upgrade-center)，提供了简单、易用、统一的App管理、App版本管理、安装包发布管理，升级检测更新管理。
  + uniCloud本地调试插件 修复 3.1.5 版本引出的腾讯云连接本地云函数运行一段时间后报错的Bug [详情](https://ask.dcloud.net.cn/question/119089)
  + 阿里云 新增 支持对云函数设置单实例并发度 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=concurrency)
  + 阿里云 新增 支持TTL索引 [详情](https://uniapp.dcloud.net.cn/uniCloud/db-index?ttl)

#### 3.1.6.20210318-alpha
* 【uni-app】
  + 百度小程序平台 修复 使用基础库 3.260+ 时，复杂表达式不显示的Bug [详情](https://ask.dcloud.net.cn/question/118213)
  + 百度小程序平台 修复 使用 usingComponents 引入部分动态库组件无效的Bug [#2526](https://github.com/dcloudio/uni-app/issues/2526)
  + App-iOS平台 修复 nvue web-view 组件在应用设置 allowsInlineMediaPlayback 为 true 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/106864)
  + App-iOS平台 修复 nvue map 组件 polyline 设置 arrowIconPath 为自定义箭头图标无效的Bug [详情](https://ask.dcloud.net.cn/question/118538)
  + 【重要】uni-ui 新增 调整为uni_modules目录规范，支持在HBuilderX里直接发布、更新、删除等;
  + uni-ui 新增 uni-row 组件，栅格系统;
  + uni-ui 新增 uni-datetime-picker 的 hide-second 属性、border 属性;
  + uni-ui 修复 uni-datetime-picker 选择跟显示的日期不一样的 bug，
  + uni-ui 修复 uni-datetime-picker change事件触发2次的 bug
  + uni-ui 修复 uni-datetime-picker 分、秒 end 范围错误的 bug
  + uni-ui 新增 uni-tr selectable 属性，用于 type=selection 时，设置某行是否可由全选按钮控制
  + uni-ui 新增 uni-data-checkbox 新增 disabled属性，支持nvue
  + uni-ui 优化 uni-data-checkbox  无选项时提示“暂无数据”
  + uni-ui 优化 uni-data-checkbox  默认颜色显示
  + uni-ui 新增 uni-link href 属性支持 tel:|mailto:
  + uni-ui 新增 uni-table 示例demo
  + uni-ui 修复 uni-data-picker 微信小程序某些情况下无法选择的问题，事件无法触发的问题
  + uni-ui 修复 uni-nav-bar easycom 下，找不到 uni-status-bar 的bug
  + uni-ui 修复 uni-easyinput 示例在 qq 小程序上的bug
  + uni-ui 修复 uni-forms 动态显示uni-forms-item的情况下，submit 方法获取值错误的Bug
  + uni-ui 修复 uni-forms schema 默认提示语不准确的问题
  + uni-ui 修复 uni-forms 偶发性获取表单值错误的Bug
  + uni-ui 修复 uni-forms 校验 uni-data-picker value 为 0 时，返回值错误的Bug
  + uni-ui 修复 uni-forms uni-forms-item 组件隐藏时依然触发校验的bug
  + uni-ui 修复 uni-forms 偶发性获取表单值错误的Bug
  + uni-ui 调整 cli 项目 建议使用 easycom 方式引用组件，如使用按需引用，需手动维护组件内部引用
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 3.1.0 版本引出的 wap2app 应用无法正常运行的Bug
  + Android平台 修复 一键登录 在部分双卡设备可能无法调起授权页面的Bug [详情](https://ask.dcloud.net.cn/question/117826)

#### 3.1.5.20210316-alpha
* 【uni-app】
  + App平台、H5平台 优化 uni.showModal、uni.showActionSheet 等 API 内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 优化 应用退出提示内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 优化 uni.scanCode、uni.previewImage 等 API 内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 修复 SelectorQuery.exec 在安卓 4.x 系统报错的 Bug
  + App-iOS平台 修复 nvue ad-draw 组件播放优量汇视频广告可能无声音的Bug
  + App-iOS平台 修复 subNVue input 组件获取焦点后隐藏页面时软键盘不会关闭的Bug [详情](https://ask.dcloud.net.cn/question/117872)
  + H5平台 优化 picker、video 组件内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
* 【uniCloud】
  + unicloud-db组件 add、update、remove方法新增可选参数needConfirm、needLoading、loadingTitle [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + unicloud-db组件 新增 load 事件支持 pagination [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=loadevent)
  + DB Schema 修复 exclusiveMinimum|exclusiveMaximum 默认验证提示语不准确的问题
  + uniCloud本地调试插件 修复 公共模块修改之后无法立即生效的Bug
  + schema2code 新增 导出 uni_modules
  + schema2code 修复 生成 uni-file-picker 组件的属性 file-extname 类型错误的问题
  + schema2code 优化 导出 admin list页面的批量删除逻辑，没有选择项时禁用批量删除按钮
  + schema2code 优化 生成的前端 list 页面，增加无数据提示语 "没有更多数据"
* 【App插件(含5+App和uni-app的App端)】
  + 新增 相册选择界面的预览界面中补充图片编辑功能，支持裁剪、涂鸦、马赛克、添加文字等。无需调用API，升级新版即可。
  + 新增 一键登录 支持全屏模式
  + 新增 uni-AD 支持快手内容联盟 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.showContentPage)
  + 新增 plus.zip.compressVideo 支持压缩视频功能 [规范](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.compressVideo)
  + 更新 uni-AD 腾讯优量汇SDK Android为4.333.1203版；穿山甲SDK iOS为3.4.2.8版；快手联盟SDK Android为3.3.7版
  + Android平台 更新 QQ 分享、登录SDK版本为3.5.2，解决在 Android11 设备无法分享图片的Bug [详情](https://ask.dcloud.net.cn/question/118510)
  + Android平台 优化 云端打包 启动界面样式为自定义启动图时的显示速度
  + Android平台 优化 一键登录 服务协议复选框勾选操作不灵敏的Bug [详情](https://ask.dcloud.net.cn/question/118305)
  + Android平台 修复 一键登录 在部分设备服务协议项超过两行可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/116873)
  + Android平台 优化 视频播放控件 设置 playStrategy 属性m3u8视频播放速度 [详情](https://ask.dcloud.net.cn/question/117115)
  + Android平台 修复 视频播放控件 动态设置 controls 属性延时生效的Bug [详情](https://ask.dcloud.net.cn/question/117457)
  + Android平台 修复 视频播放控件 播放 http/https 地址视频没有同步共享 cookie 的Bug
  + Android平台 修复 Webview窗口在部分场景加载 html 页面可能出现 plus 对象为空的Bug
  + iOS平台 新增 uni原生插件云端打包支持iOS Extension [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/package?id=ios-extension)
  + iOS平台 修复 从系统相册选择视频文件返回的大小和宽高不正确的Bug [详情](https://ask.dcloud.net.cn/question/117975)
  + iOS平台 修复 在 iOS14 系统返回安全区域的top不正确引起界面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/117849)
* 【UniMPSDK】
  + Android平台 修复 部分直达nvue页面中本地路径图片无法正常加载显示的Bug

#### 3.1.4.20210303-alpha
* 【uni-app】
  + App平台 修复 nvueStyleCompiler 设置为 uni-app 时 subNvue 页面根节点 class 无效的 Bug
  + App平台 修复 nvueStyleCompiler 设置为 uni-app 时 nvue 页面样式中 !important 前不含空格时报错的Bug [详情](https://ask.dcloud.net.cn/question/117212)
  + H5平台 修复 部分情况下获取 wxs 实例错误的的Bug [详情](https://ask.dcloud.net.cn/question/117097)
* 【uniCloud】
  + clientDB 修复 数据库运算方法in报错的Bug
  + clientDB 修复 jql非运算表现异常的Bug
  + clientDB 优化 部分场景下getCount性能
  + clientDB 优化 部分场景下jql联表查询性能
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 微信分享本地图片在部分 Android11 设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/117050)
  + Android平台 修复 页面中 input 标签 type 为 tel/email 时，弹出软键盘上方的辅助输入栏内容可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/118051)
  + iOS平台 修复 保存 gif 图片到系统相册可能引起卡死或崩溃的Bug [详情](https://ask.dcloud.net.cn/question/117814)

#### 3.1.3.20210219-alpha
* 【uni-app】
  + App平台、H5平台 修复 3.1.0 版本引出的 canvasGetImageData、canvasToTempFilePath 获取高度错误Bug [详情](https://ask.dcloud.net.cn/question/117082)
  + App平台、H5平台 修复 3.1.0 版本引出的获取自定义组件 dataset 数据缺失的Bug [详情](https://ask.dcloud.net.cn/question/117206)
  + App平台 修复 input 组件在安卓设备上 focus 事件触发错乱的Bug [详情](https://ask.dcloud.net.cn/question/116576)
  + App-Android平台 修复 3.1.0 版本引出的 nvue input 组件设置 ajust-position 为 false 后，keyboardheightchange 事件返回软键盘高度为0的Bug [详情](https://ask.dcloud.net.cn/question/117295)
  + App-Android平台 修复 nvue input 组件 focus 事件可能触发两次的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 3.1.0 版本引出的 wap2app 项目真机运行页面标题栏无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/117278)

#### 3.1.2.20210206-alpha
* 【uni-app】
  + App平台 修复 nvueStyleCompiler 配置为 uni-app 时 list 组件内 class 动态更新失效的Bug [详情](https://ask.dcloud.net.cn/question/116913)
  + H5平台 修复 应用初始化以前调用 uni.getSystemInfoSync 报错的Bug [详情](https://ask.dcloud.net.cn/question/116612)

#### 3.1.1.20210204-alpha
* 【uni-app】
  + 【重要】App平台 新增 nvue 组件支持 render-whole 属性。可以按组件整体渲染，而不是从上到下逐行渲染 [详情](https://uniapp.dcloud.io/nvue-outline?id=render-whole)
  + App平台 新增 manifest.json 支持 nvue css 编译新旧版本配置 app-plus -> nvueStyleCompiler。可切换老版的nvue css 编译器 [详情](https://ask.dcloud.net.cn/article/38751)
  + App平台 修复 纯 nvue 编译模式下 pages.json 缺少 style 节点编译报错的Bug
  + App平台 修复 3.1.0 版本引出的 nvue 页面中样式与 app.vue 样式冲突的Bug [详情](https://ask.dcloud.net.cn/question/116787)
  + App平台 修复 3.1.0 版本引出的 nvue 页面中 border-color 使用 rgb 类型时解析报错的Bug [详情](https://ask.dcloud.net.cn/question/116746)
  + H5平台 新增 image 组件支持 draggable 属性
  + H5平台 优化 swiper、movable 组件拖动时禁止 click 事件触发
* 【uniCloud】
  + 修复 uniCloud.getCurrentUserInfo 报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 uni-AD 腾讯优量汇SDK为4.332.1202版

#### 3.1.0.20210202-alpha
* 【uni-app】
  + 新增 uni.getSystemInfo 支持获取 deviceId 作为设备标识。App 端根据设备信息生成，非 App 端由 uni-app 框架生成基于随机数的 id
  + App平台、H5平台 优化 dataset 获取逻辑，完善非 string 类型支持
  + App平台、H5平台 修复 css 媒体查询内的 rpx 单位不生效的Bug [详情](https://ask.dcloud.net.cn/question/112279)
  + App平台、H5平台 修复 picker 组件特定情况下设置 start、end 表现异常的Bug [详情](https://ask.dcloud.net.cn/question/114223)
  + App平台、H5平台 修复 部分时机获取 input、textarea 组件值不正确的Bug [详情](https://ask.dcloud.net.cn/question/115897)
  + 【重要】App平台 新增 nvue css 支持组合选择器（相邻兄弟选择器、普通兄弟选择器、子选择器、后代选择器）
  + App平台 新增 manifest.json 支持全屏配置 app-plus -> fullscreen
  + App平台 新增 支持 uni.offNetworkStatusChange 方法
  + App平台 新增 支持 uni.offKeyboardHeightChange 方法
  + App平台 新增 input、textarea 组件支持 keyboardheightchange 事件
  + App平台 新增 nvue map 组件支持展示 POI 点、建筑物、个性化地图等新特性 [详情](https://uniapp.dcloud.io/component/map)
  + App平台 新增 video 组件新增属性 codec、http-cache、play-strategy
  + 【重要】App平台 优化 nvue 支持更多简写样式：border、border-top、border-right、border-bottom、border-left、border-style、border-width、border-color、border-radius、flex-flow、font、background
  + App平台 优化 uni.getNetworkType 支持获取 5g 网络类型
  + App平台 优化 uni.saveImageToPhotosAlbum 支持返回保存路径
  + App平台 修复 uni.canvasToTempFilePath 配置的大小超过 canvas 大小时获取的图像空白的Bug [详情](https://ask.dcloud.net.cn/question/111225)
  + App平台 修复 cover-view 样式动态变更未生效的Bug
  + App平台 修复 部分情况下组件递归调用内部 v-for 报错的Bug
  + App平台 修复 特定分辨率（iPhone12 Pro）下文字换行错误的Bug [详情](https://ask.dcloud.net.cn/question/114636)
  + App平台 修复 部分情况下 v-for 渲染列表事件错乱的Bug [详情](https://ask.dcloud.net.cn/question/112100)
  + App平台 修复 v-for 渲染 Map、Set 数据类型错乱的Bug [详情](https://ask.dcloud.net.cn/question/115506)
  + App平台 修复 uni.compressImage 传入本地路径失败的Bug [详情](https://ask.dcloud.net.cn/question/115315)
  + App-Android平台 修复 页面生命周期 onshow 中调用 getLocation 可能会引起死循环的Bug
  + App-Android平台 修复 软键盘弹出后，切换输入法软键盘高度发生变化时不会正常触发 onKeyboardHeightChange 事件的Bug
  + App-Android平台 修复 软键盘弹出后，返回到之前的页面可能显示高度不正确的bug [详情](https://ask.dcloud.net.cn/question/115772)
  + App-Android平台 修复 previewImage 预览网络图片长按保存到系统相册失败的Bug [详情](https://ask.dcloud.net.cn/question/115727)
  + App-Android平台 修复 subNVues 设置 popup 模式后，再设置 left 执行动画会卡顿的Bug [详情](https://ask.dcloud.net.cn/question/114631)
  + App-Android平台 修复 nvue css 中设置 transform 属性值中使用百分比无效的Bug [详情](https://ask.dcloud.net.cn/question/115728)
  + App-Android平台 修复 nvue live-pusher 组件横屏预览时上传视频方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/115673)
  + App-Android平台 修复 nvue map 组件动态绘制 polyline 路径轨迹可能会闪烁的Bug [详情](https://ask.dcloud.net.cn/question/90676)
  + App-Android平台 修复 nvue input 组件设置 cursor-spacing 属性无效的Bug
  + App-Android平台 修复 3.0.7 版本引出的 canvas 组件绘制网络图片失败的Bug
  + App-iOS平台 修复 nvue css 中设置 transform 执行动画可能引起崩溃的Bug
  + App-iOS平台 修复 nvue 使用 animation 对组件执行动画期间，组件绑定的点击事件可能不触发的Bug [详情](https://ask.dcloud.net.cn/question/98554)
  + App-iOS平台 修复 nvue ad-draw 组件加载快手联盟广告时，在 list 中滚动后可能无法正常显示的Bug
  + App-iOS平台 修复 nvue image 组件在 iOS14 系统设置 placeholder 后无法正常显示 src 图片的Bug [详情](https://ask.dcloud.net.cn/question/115531)
  + App-iOS平台 修复 nvue video 组件使用 exitFullScreen 无法正常退出全屏的Bug [详情](https://ask.dcloud.net.cn/question/111855)
  + App-iOS平台 修复 nvue web-view 组件加载的网页中 a 标签 target 属性值为 _blank 时，点击 a 标签链接无反应的Bug [详情](https://github.com/dcloudio/hello-uniapp/issues/37)
  + H5平台 新增 EditorContext 支持 blur、getSelectionText、scrollIntoView 方法
  + H5平台 新增 getTopWindowStyle、getLeftWindowStyle、getRightWindowStyle 方法 [详情](https://uniapp.dcloud.net.cn/api/ui/adapt)
  + H5平台 修复 ActionSheet 数据量多无法滚动的Bug
  + H5平台 修复 特定情况下 uni.showModal 内容区域出现横向滚动条的Bug
  + H5平台 修复 image 组件使用 require 方式引用的资源在配置基础路径为相对路径时，编译后不显示的Bug
  + 【重要】小程序平台 新增 发行时支持混合分包模式，将 uni-app 项目发行为小程序分包，集成到已有的原生开发的小程序 [详情](https://uniapp.dcloud.net.cn/hybrid)
  + 小程序平台 修复 事件回调内 arguments 获取到多余参数的Bug [#2270](https://github.com/dcloudio/uni-app/issues/2270)
  + 小程序平台 修复 修复 v-for 循环 wxs 模块内容报错的Bug [详情](https://ask.dcloud.net.cn/question/115658)
  + 支付宝平台、头条小程序平台 修复 部分情况下无法正确编译模板中 class 的Bug [#2294](https://github.com/dcloudio/uni-app/pull/2294)
  + 支付宝小程序平台 优化 组件支持 vue 事件监听方式（需启用 component2）[详情](https://ask.dcloud.net.cn/question/110978)
  + 支付宝小程序平台 修复 内置组件部分事件无法监听的Bug [#2185](https://github.com/dcloudio/uni-app/issues/2185)
  + 【重要】百度小程序平台 新增 支持 onInit 生命周期
  + 百度小程序平台 优化 支持使用 usingComponents 引入插件（原名称 usingSwanComponents 仍然保留）
  + 【重要】uni-ui 新增 所有组件适配 PC 端，适配宽屏、拖动、支持enter和esc按键响应 [详情](https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge)
  + uni-ui 新增 uni-file-picker 文件直传uniCloud云空间的组件 [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 优化 uni-forms、uni-easyinput、uni-group 兼容 nvue 页面
  + 【重要】新增 云端一体搜索模板。无需自行开发搜索 [详情](https://ext.dcloud.net.cn/plugin?id=3851)
  + 【重要】新增 uni-captcha 基于uniCloud的图片验证码 [详情](https://ext.dcloud.net.cn/plugin?id=4048)
  + 【重要】新增 网赚游戏合成猫项目模板 [详情](https://ext.dcloud.net.cn/plugin?id=4095)
  + 【重要】hello uniCloud 新增 clientDB、schema2code示例 [详情](https://ext.dcloud.net.cn/plugin?id=4082)
  + 新增 uniCloud-banner模板 支持管理员上传修改banner [详情](https://ext.dcloud.net.cn/plugin?id=4117)
  + 云端一体登录模板 新增 用户名密码连续登录失败时要求输入图形验证码
* 【uniCloud】
  + 【重要】客户端 新增 uniCloud.mixinDatacom 混入，方便快速开发datacom组件，无需自行处理云数据绑定 [详情](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)
  + 客户端 新增 uniCloud.chooseAndUploadFile API，选文件后直接上传到uniCloud云存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=chooseanduploadfile)
  + 【重要】uni-id 新增 在token内默认缓存角色权限，云端获取角色权限不再查库，提升clientDB性能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
  + uni-id 新增 支持苹果登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=loginbyapple)
  + uni-id 新增 客户端获取用户信息接口，包括权限角色 [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=client-getcurrentuserinfo)
  + 云函数 新增 获取客户端标识 deviceId [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=intro)
  + 阿里云 新增 云函数支持 uploadFile 接口（本地调试暂不支持）[详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=clouduploadfile)
  + 阿里云 新增 云数据库 add update 可以传入日期对象
  + 阿里云 新增 getTempFileURL 接口（仅为抹平和腾讯云的接口差异）[详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=cloudgettempfileurl)
  + web控制台 阿里云 新增 慢查询日志，有助于分析数据库设计缺陷
  + uniCloud本地调试插件 新增 支持 uni_modules
  + uniCloud本地调试插件 修复 cli 项目无法使用 uniCloud 本地调试的Bug
  + uniCloud本地调试插件 修复 客户端连接本地云函数时云函数内 callFunction 返回格式不正确的Bug
  + DB Schema 字段类型bsonType 新增 file、date类型 [详情](https://uniapp.dcloud.io/uniCloud/schema?id=bsontype)
  + DB Schema 字段类型bsonType 为 array 时，新增 arrayType 子类型，描述数组里项目的类型。比如 arrayType 设为 file，表示一组文件 [详见](https://uniapp.dcloud.io/uniCloud/schema?id=arraytype)
  + DB Schema 新增 fieldRules 用于描述字段之间的关系，如字段“开始时间”需小于字段“结束时间” [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=field-rules)
  + DB Schema 新增 count 权限 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=col-permission)
  + DB Schema 新增 validateFunction 配置是否在客户端生效 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)
  + clientDB 新增 数据库运算符，可在 where、field、groupBy、groupField 以及 DB Schema 的 fieldRules 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=where)
  + clientDB 新增 支持 groupBy 对数据进行分组统计 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=groupby)
  + clientDB 新增 支持 distinct 对数据进行去重 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=distinct)
  + clientDB 修复 JQL 写法内使用下标访问数组内的元素报错的Bug
  + unicloud-db组件 add、update 方法支持调用 action云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + schema2code 新增 生成前端页面时补充list.vue、detail.vue页面
  + schema2code 调整 之前的 component 改名为 componentForEdit，并新增 componentForShow 。一个字段可以分别控制它在表单页面（add、edit）和展示页面（list、detail）所使用的组件
  + schema2code 新增 展示页面可直接显示bool值为√或×，显示DB Schema里enum的text内容。
* 【App插件(含5+App和uni-app的App端)】
  + uni-AD 更新 腾讯优量汇SDK Android为4.330.1200版、iOS为4.12.3版；穿山甲SDK iOS为3.4.2.3版；快手联盟SDK iOS为3.3.6版
  + 一键登录 新增 defaultCheckBoxState 属性设置默认是否勾选同意使用服务条款框
  + 微信分享 新增 分享音乐支持 href 属性设置音乐网页地址
  + Android平台 新增 视频播放控件支持 codec 属性设置是否开启硬解码，解决某些视频播放不清晰的问题 [详情](https://ask.dcloud.net.cn/question/95568)
  + Android平台 新增 视频播放控件支持 httpCache 属性设置是否开启缓存，解决重复播放网络视频无法复用缓存的问题 [详情](https://ask.dcloud.net.cn/question/105515)
  + Android平台 新增 视频播放控件支持 playStrategy 属性设置视频优化策略，解决播放在线高清视频卡顿、音视频脱轨的问题 [详情](https://ask.dcloud.net.cn/question/116249)
  + Android平台 修复 视频播放控件 seek 跳转不准确的Bug [详情](https://ask.dcloud.net.cn/question/115171)
  + Android平台 修复 微信分享图片在 Android11 设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/115153)
  + Android平台 修复 设置应用角标数字时没有同步状态到 UniPush 服务器的Bug
  + iOS平台 优化 uni-AD 信息流广告内存管理机制，解决显示广告过多时内存泄露引起崩溃的Bug
  + iOS平台 修复 uni-AD 调用 plus.ad.releaseAdData 释放广告数据可能引起崩溃的Bug
  + iOS平台 更新 高德地图SDK为 7.8.0 版，解决在 iOS14 系统拖动地图时卡顿的Bug [详情](https://ask.dcloud.net.cn/question/113674)
  + iOS平台 修复 QQ分享音乐，点击分享内容跳转到的是音乐播放页面而不是 href 设置的音乐网页的Bug
  + iOS平台 修复 图片轮播控件 ImageSlider 设置样式可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/116068)
  + iOS平台 修复 从系统相册选择 iCloud 视频文件没有触发回调的Bug [详情](https://ask.dcloud.net.cn/question/115448)
  + iOS平台 修复 视频播放控件横向全屏播放后，调用 exitFullScreen 退出全屏可能界面显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/115775)
  + iOS平台 修复 视频播放控件拖动进度条可能引起进度显示不正常，不触发 timeupdate 事件的Bug [详情](https://ask.dcloud.net.cn/question/115300)
* 【UniMPSDK】
  + iOS平台 修复 关闭当前小程序立刻打开另一个小程序后，小程序可能无法关闭的Bug [详情](https://ask.dcloud.net.cn/question/115243)
  + iOS平台 新增 小程序页面关闭时支持动态设置原生导航栏的显隐方法 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=SetNavigationBarHidden)

#### 3.0.7.20210109-alpha
* 【uni-app】
  + App平台 修复 windows 系统部分情况下，查找 Chrome 失败，导致无法正常 debug 的Bug
  + App平台 修复 包含微信小程序组件时，部分情况下首次编译触发热刷新的Bug
  + App-Android平台 修复 nvue list 组件调用 setSpecialEffects 设置吸顶后，input 子组件无法获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/114511)
  + App-Android平台 修复 nvue list/waterfall 组件使用 refresh 并设置 background-color 属性后会出现白边的Bug [详情](https://ask.dcloud.net.cn/question/105800)
  + App-iOS平台 修复 nvue refresh 组件处于刷新状态时显示位置向下偏移0.5像素的Bug
  + 快应用 修复 华为快应用IDE V3.0.2无法识别项目类型的Bug
* 【uniCloud】
  + DB Schema 新增 支持对 string 类型数据配置 trim ，可自动对字符串去除前后空白字符 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=trim)
  + DB Schema 修复 部分情况下使用 enum 报错的Bug
  + DB Schema 修复 exclusiveMinimum、exclusiveMaximum 无效的bug
  + clientDB 修复 查询树形结构时使用 startWith 某些写法导致报错的Bug
  + clientDB 修复 field 内使用JQL联表查询语法时多个右花括号连续出现导致报错的Bug
  + clientDB 修复 field 中包含`-`时报错的Bug
  + uniCloud本地调试插件 修复 部分日志导致本地调试服务崩溃的Bug
  + unicloud-db组件 支持tree查询，新增属性 gettree、startwith、limitlevel [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
* 【App插件(含5+App和uni-app的App端)】
  + 一键登录 优化 错误回调返回数据格式，添加 appid、metadata、uid 属性，便于排查错误 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.ErrorCallback)
  + Android平台 更新 uni-AD 快手联盟SDK为3.3.6版，腾讯优量汇SDK为4.310.1180版，今日头条穿山甲SDK为3.4.1.0版
  + Android平台 更新 腾讯X5内核版本为 v4.3.0.67_43967 [详情](https://ask.dcloud.net.cn/article/36806)
  + Android平台 更新 UniPush 华为厂商推送 SDK 版本为 v4:2.0.0，适配 HMS4.0+ [详情](https://ask.dcloud.net.cn/article/35622#huawei)
  + Android平台 调整 应用主 Activity 为 FragmentActivity [详情](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + Android平台 修复 native.js 调用 requestPermissions 请求的权限已被允许可能引起其它功能无法正常申请系统权限的Bug [详情](https://ask.dcloud.net.cn/question/114645)
  + Android平台 修复 云端打包 更新 com.android.tools.build:gradle 版本后可能引起安装包文件变大、运行显示白屏的Bug [详情](https://ask.dcloud.net.cn/question/114496)
  + Android平台 修复 uploader 上传文件监听上传进度变化返回数据不准确的Bug [详情](https://ask.dcloud.net.cn/question/101035)
  + Android平台 修复 监听按键事件 keydown、keyup 不触发回调的Bug
  + Android平台 修复 video 封面图片 poster 拉伸变形显示的Bug [详情](https://ask.dcloud.net.cn/question/114952)
  + Android平台 修复 video 设置显示默认播放控件 controls 属性为 false 时手势操作失效的Bug
  + Android平台 修复 previewImage 预览图片可能显示模糊的Bug [详情](https://ask.dcloud.net.cn/question/113520)
  + Android平台 修复 2.9.9版本引出的 native.js 获取到原生对象可能无法执行器内部函数的Bug [详情](https://ask.dcloud.net.cn/article/38648)
  + iOS平台 修复 previewImage 预览网络图片地址中包含query参数过多可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/98259)
  + iOS平台 修复 audio 音频资源地址中包含中文字符时无法正常播放的Bug [详情](https://ask.dcloud.net.cn/question/103421)
  + iOS平台 修复 video 动态更新 src 属性值域名相同时无法正常切换视频的Bug [详情](https://ask.dcloud.net.cn/question/110386)
  + iOS平台 修复 video 视频资源地址中包含中文字符时无法正常播放的Bug
  + iOS平台 修复 titleNView 标题文字在隐藏软键盘时可能出现抖动的Bug

#### 3.0.4.20201230-alpha
* 【uniCloud】
  + uniCloud本地调试插件 修复 调试时较早请求云函数且无法连接本地调试服务时报错的Bug
  + uniCloud本地调试插件 修复 部分日志格式错误的Bug
  + uniCloud本地调试插件 修复 本地云函数向云数据库插入值为 null 的字段会报错的Bug
  + uniCloud本地调试插件 调整 输出调整复杂类型时调整最大展示层级为20级
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 云端打包 com.android.tools.build:gradle 版本为 4.1.1，适配Android11，修复无法准确检查uni原生插件需要兼容启用AndroidX [详情](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + iOS平台 修复 uni-AD 快手联盟 激励视频广告的奖励倒计时完成后关闭广告事件 onClose 的 isEnded 属性值可能为 false 的Bug

#### 3.0.3.20201228-alpha
* 【uni-app】
  + App-iOS平台 修复 nvue video 组件动态更新 src 属性无法播放本地视频的Bug [详情](https://ask.dcloud.net.cn/question/113920)
  + H5平台 修复 unicloud-db 组件 开发环境下 设置属性 :getone="true" 时报错的Bug
  + 微信小程序平台 修复 unicloud-db 组件某些情况下无效的Bug
  + 抖音小程序平台 新增 支持分包加载 [详情](https://uniapp.dcloud.io/collocation/pages?id=subpackages)
* 【uniCloud】
  + clientDB API 新增 树形数据查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=gettree)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 保存路径中包含特殊字符的图片到系统相册失败的Bug [详情](https://ask.dcloud.net.cn/question/113990)
  + iOS平台 修复 一键登录 设置多个自定义服务协议时中文语法不正确的Bug

#### 3.0.2.20201225-alpha
* 【uni-app】
  + App平台 修复 一键登录 univerifyStyle 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/113997)
* 【uniCloud】
  + clientDB 新增 数据库错误 error 事件 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=error)
  + clientDB 调整 refreshToken 事件由 db.auth 移至 db ，旧写法仍兼容 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=refreshtoken)
  + uniCloud本地调试插件 修复 本地运行云函数运行结果显示不全的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 支付宝SDK为15.8.00，解决提交 GooglePlay 审核报存在不安全的加密模式的Bug [详情](https://ask.dcloud.net.cn/question/114053)
  + Android平台 修复 uni-AD 开屏广告在部分设备可能触发崩溃的Bug
* 【uni小程序SDK】
  + iOS平台 修复 小程序跳转其他原生页面再返回小程序时，对应生命周期事件 onShow、onHide 没有触发的Bug

#### 3.0.1.20201223-alpha
* 【uni-app】
  + App平台 修复 3.0.0 版本引出的 match-media 组件失效的Bug
  + App-Android平台 修复 nvue image 组件加载图片过多可能引起内存溢出导致页面滚动卡顿的Bug
  + App-iOS平台 修复 3.0.0 版本引出的 nvue image 组件在iOS14以下系统 webp 格式图片无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/113840)
  + App-iOS平台 修复 3.0.0 版本引出的 iOS13.7 设备上 canvas 组件绘制图像会导致应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/113820)
  + 微信小程序平台 修复 unicloud-db 组件无效的Bug
* 【uniCloud】
  + uniCloud本地调试插件 修复 windows 平台未打印输出对应的文件名和行号的Bug
  + uniCloud本地调试插件 优化 多参数的 console.log 输出展现
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 3.0.0版本引出的 native.js 获取 runtimeMainActivity 对象执行 registerReceiver 不生效的Bug [详情](https://ask.dcloud.net.cn/question/113807)
  + iOS平台 新增 mediaPlaybackRequiresUserAction 属性控制H5页面支持自动播放音频 [详情](https://ask.dcloud.net.cn/article/94)
  + iOS平台 修复 3.0.0版本引出的 获取当前地理位置弹出系统授权框时，用户拒绝授权后没有触发失败回调的Bug [详情](https://ask.dcloud.net.cn/question/113696)
  + iOS平台 修复 一键登录授权界面自定义样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/113894)

#### 3.0.0.20201219-alpha
* 【uni-app】
  + App、H5平台 优化 input 组件 number 和 digit 类型支持输入负数（注意之前依赖键盘不能输入负数而没有校验输入内容应用应补充校验规则） [详情](https://ask.dcloud.net.cn/question/62987)
  + App、H5平台 修复 slider 组件 step 设置为小数时精度丢失的Bug [详情](https://ask.dcloud.net.cn/question/112749)
  + App平台 新增 uni-AD 支持 Draw信息流广告 [详情](https://uniapp.dcloud.net.cn/component/ad-draw)
  + App平台 新增 uni-AD ad 组件支持 adclicked 事件
  + App平台 优化 input、textarea 组件去除隐藏键盘自动失去焦点的逻辑并开放相关属性：auto-blur [详情](https://ask.dcloud.net.cn/question/111152)
  + App平台 优化 uni.compressImage 支持 width、height 设置
  + App平台 优化 uni.canvasGetImageData、uni.canvasSetImageData 等接口执行效率（注意：需更新自定义基座或离线SDK） [详情](https://ask.dcloud.net.cn/question/110948)
  + App平台 优化 uni.previewImage 弹出菜单底部的取消按钮文字根据系统语言进行国际化适配
  + App平台 修复 uni.setNavigationBarColor 部分时机不生效的Bug [详情](https://ask.dcloud.net.cn/question/110894)
  + App平台 修复 非 popup 类型的 subnvue 对象调用 setStyle 方法报错的Bug [详情](https://ask.dcloud.net.cn/question/110922)
  + App平台 修复 nvue progress组件 设置属性 active=true 时报错的Bug [详情](https://ask.dcloud.net.cn/question/113041)
  + App平台 修复 mainfest.json 配置 flex-direction:row 时部分内置组件样式错乱的Bug [详情](https://ask.dcloud.net.cn/question/102195)
  + App-Android平台 修复 页面存在 subnvue 时 web-view 组件无法返回的Bug [详情](https://ask.dcloud.net.cn/question/111213)
  + App-Android平台 修复 应用版本名称包含中文时，uni.request 可能引起请求失败的Bug [详情](https://ask.dcloud.net.cn/question/112326)
  + App-Android平台 修复 nvue map 组件 getScale 获取地图缩放等级可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/85722)
  + App-Android平台 修复 nvue input 组件不设置 confirm-type 属性时 confirm 事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/112729)
  + App-iOS平台 修复 生物认证 人脸识别 在未录入FaceID的情况下可能检查为已录入的Bug [详情](https://ask.dcloud.net.cn/question/112383)
  + App-iOS平台 修复 nvue text 组件设置相同的字体大小，不同文字内容高度不一致的Bug [详情](https://ask.dcloud.net.cn/question/112175)
  + App-iOS平台 修复 调用 getScreenBrightness、setScreenBrightness 会触发 onShow、onHide 的Bug
  + H5平台 优化 tabBar 支持配置更多属性，如：fontSize、height、midButton
  + H5平台 修复 canvas 组件绘制跨域图像后调用 uni.canvasToTempFilePath 失败的Bug
  + H5平台 修复 uni.chooseFile 在微信小程序内置浏览器失效的Bug
  + H5平台 修复 使用 uni.chooseLocation 时摇树优化报错的Bug [详情](https://ask.dcloud.net.cn/question/111785)
  + H5平台 修复 picker 组件在 PC 版 Chrome 浏览器点击不显示的Bug
  + H5平台 修复 picker-view 组件 indicator-class 设置不生效的Bug
  + H5平台 修复 iOS9 平台浏览器访问报错的Bug [#2320](https://github.com/dcloudio/uni-app/issues/2320)
  + 小程序平台 修复 for 循环中遍历数组表达式时部分事件编译后执行报错的Bug [详情](https://ask.dcloud.net.cn/question/110706)
  + uni-ui 新增 uni-easyinput 组件，提供更强大、易用的输入框封装组件，内置表单校验 [详情](https://ext.dcloud.net.cn/plugin?id=3455)
  + uni-ui 新增 uni-data-checkbox 组件，简化单选复选框的使用 [详情](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui 修复 forms、list、dateformat、indexed-list等组件的问题 [详情](https://ext.dcloud.net.cn/plugin?id=55)
  + hello uni-app 新增 App端一键登录示例（API分类login示例中）
  + 前后一体登录项目模板 新增 App端一键登录、修改密码
* 【uniCloud】
  + 【重要】调整 前端内置了`<unicloud-db>`组件，无需再人工引入插件市场的[clientDB组件插件](https://ext.dcloud.net.cn/plugin?id=3256) [规范](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
  + 【重要】新增 uniCloud 本地服务。支持前端项目在控制台切换连接云环境还是本地服务。本地修改直接生效，不用上传即可联调 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 【重要】调整 uniCloud 项目目录结构调整。根目录下为uniCloud目录，其下有二级目录 cloudfunctions 和 database。database目录存放数据表schema和扩展验证函数。并提供了目录结构迁移向导 [详情](https://ask.dcloud.net.cn/article/38028)
  + 【重要】新增 HBuilderX 本地编写 DB Schema，即数据表的表结构。支持新建、上传、下载表结构，支持代码提示。
  + 【重要】新增 `<unicloud-db>`组件（即之前的clientDB组件）支持代码提示。可提示JQL语法，在本地有schema的情况下可提示数据库表名字段。大幅提升开发效率
  + HBuilderX 新增 编写 validateFunction，即数据库扩展校验函数。支持新建、上传、下载validateFunction
  + HBuilderX 优化 uniCloud 关联云服务空间的选择方式。并支持关联其它项目服务空间，实现多个项目连接一个服务空间 [详情](https://ask.dcloud.net.cn/article/37949)
  + HBuilderX 新增 可视化管理公共模块依赖 （对云函数点右键->管理公共模块依赖）
  + HBuilderX 优化 上传uni-id公共模块时，增加校验，对比配置密钥是否一致
  + HBuilderX 修复 云函数本地运行 控制台日志打印`null`和`undefined`值错误的Bug
  + HBuilderX 修复 前端网页托管 某些情况下，上传网站到服务器，控制台显示(0 MB)大于上传限制(0 MB)的Bug [详情](https://ask.dcloud.net.cn/question/111228)
  + uni-id 新增 App端一键登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=univerify)
  + 其他云端更新日志另见：[https://uniapp.dcloud.io/uniCloud/release](https://uniapp.dcloud.io/uniCloud/release)
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】新增 一键登录，运营商网关认证，免短信验证获取手机号、一键免密登录 [详情](https://uniapp.dcloud.net.cn/univerify)
  + 新增 UniPush 华为手机，厂家通道离线推送可在服务端设置角标[参考插件](https://ext.dcloud.net.cn/plugin?id=1680)
  + 新增 uni-AD 编程控制开屏广告的开启或关闭 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setSplashAd)
  + 新增 uni-AD 激励视频、全屏视频、信息流广告支持监听点击广告事件
  + 新增 4个安全类API，推荐客户端安全要求较高的应用（如使用了激励视频），使用如下4个API并且搭配js原生混淆和App加固，防止客户端被篡改
    - 新增 plus.navigator.getSignature 获取应用签名标识。可用于判断App的证书是否被重签 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
    - 新增 plus.navigator.isSimulator 判断App是否运行在模拟器环境 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
    - 新增 plus.navigator.isRoot 判断设备是否被root [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
    - 新增 plus.networkinfo.isSetProxy 判断设备的网络是否设置了代理 [规范](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)
  + 新增 QQ登录获取授权信息支持获取用户统一标识 unionid 属性 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.UserInfo)
  + 更新 uni-AD 快手联盟SDK为3.3.5版
  + Android平台 优化 应用启动时申请读写手机存储权限策略默认值为 once [详情](https://ask.dcloud.net.cn/article/36549)
  + Android平台 修复 系统分享 sendWithSystem 分享应用资源图片可能失败的Bug [详情](https://ask.dcloud.net.cn/question/111836)
  + Android平台 修复 在Android10及以上设备无法保存视频文件到相册的Bug [详情](https://ask.dcloud.net.cn/question/112970)
  + Android平台 修复 相册选择图片视频时超过 180M 的文件无法显示的Bug
  + Android平台 修复 UniPush 第一次启动可能无法获取clientid的Bug [详情](https://ask.dcloud.net.cn/question/112318)
  + Android平台 修复 UniPush 消息对象 payload 属性值可能没有转换为JSON对象的Bug
  + Android平台 修复 Downloader 下载的链接地址无效时不会触发回调的Bug [详情](https://ask.dcloud.net.cn/question/111826)
  + Android平台 修复 getCookie setCookie等操作 与 X5 内核 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/111426)
  + Android平台 修复 设置窗口标题栏搜索框失去焦点时，光标仍然显示的Bug [详情](https://ask.dcloud.net.cn/question/111045)
  + Android平台 修复 关闭窗口页面动画在部分设备上可能出现闪烁的Bug [详情](https://ask.dcloud.net.cn/question/112882)
  + iOS平台 修复 QQ分享进入安全校验后，可能无法再次拉起手机QQ完成分享操作的Bug [详情](https://ask.dcloud.net.cn/question/103383)
  + iOS平台 修复 iPhone12、iPad 系列设备获取手机设备信息的 model 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/112922)
  + iOS平台 修复 iOS14 第一次获取位置信息弹出系统授权提示框时无法获取详细地址的Bug  [详情](https://ask.dcloud.net.cn/question/111570)
  + iOS平台 修复 iOS13 打开文档文件名称没有后缀时无任何响应的Bug
  + iOS平台 修复 真机运行时 plus.runtime.getProperty 返回的 appid 属性值不正确的Bug
  + iOS平台 修复 设置应用角标数字时没有同步状态到 UniPush 服务器的Bug
  + iOS平台 修复 从微信小程序打开App时，plus.runtime.launcher 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/111212)
  + iOS平台 修复 设置窗口标题栏搜索框失去焦点时，搜索框内容会被清除掉的Bug [详情](https://ask.dcloud.net.cn/question/111045)
  + iOS平台 修复 视频播放控件 VideoPlayer 播放时进度条可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/112150)
  + iOS平台 修复 uni原生插件开发可能出现 SimplePing 类冲突的Bug
* 【uni小程序SDK】
  + iOS平台 新增 小程序的打开方式支持 push 方式 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%90%af%e5%8a%a8%e6%96%b9%e5%bc%8f)
  + iOS平台 新增 支持开启侧滑手势关闭小程序 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e4%be%a7%e6%bb%91%e6%89%8b%e5%8a%bf%e5%85%b3%e9%97%ad%e5%b0%8f%e7%a8%8b%e5%ba%8f)

#### 2.9.11.20201121-alpha
* 【uniCloud】
  + clientDB 新增 jql写法支持在field内写别名 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=alias)
  + clientDB 新增 schema内enum支持使用云端数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=enum)
  + clientDB 新增 schema内bsonType支持password，设置后所有用户均不可读取此字段
  + clientDB 优化 索引冲突时返回更友好的提示及错误码 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue)

#### 2.9.10.20201117-alpha
* 【uni-app】
  + App平台 修复 atob 解码 base64 字符串返回结果可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/110758)
  + App-Android平台 修复 nvue ad 组件频繁打开、关闭页面操作可能引起崩溃的Bug
  + App-iOS平台 修复 2.9.9版本引出的 nvue swiper 组件中嵌套 video 后页面无法滑动的Bug [详情](https://ask.dcloud.net.cn/question/111145)
  + App-iOS平台 修复 nvue input 组件设置 focus 为 true 时频繁打开、关闭页面操作可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/110809)
  + hello uni-app 修复 在 H5 下【设置 tabBar】示例页面设置背景色时颜色错误的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 视频播放控件 VideoPlayer 支持 show-mute-btn 属性设置是否显示静音按钮 [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + Android平台 修复 Android11上调用相机录像后无法播放视频文件的Bug [详情](https://ask.dcloud.net.cn/question/110762)
  + iOS平台 修复 扫描部分二维码无法识别的Bug [详情](https://ask.dcloud.net.cn/question/110878)
  + iOS平台 修复 窗口标题栏 titleNView 设置 type 为 transparent 时，在 ActionSheet 上显示的按钮样式异常的Bug
* 【uni小程序SDK】
  + iOS平台 修复 窗口标题栏 titleNView 设置 type 为 transparent 时，在 ActionSheet 上显示的按钮样式异常的Bug
  + iOS平台 修复 从相册选择视频后调用 uni.navigateBack() 关闭页面时会退出小程序的Bug

#### 2.9.9.20201114-alpha
* 【uni-app】
  + App、H5平台 新增 vue 页面中的 input、textarea 在新版浏览器内核（Chrome81+、Safari13.7+）中 confirm-type（即键盘右下角按钮文字）支持更多配置（send、next、done）
  + App、H5平台 新增 网络请求相关接口 uni.request、uni.uploadFile、uni.downloadFile 支持 timeout 参数
  + App、H5平台 修复 slider 组件显示最大值时拖动不跟手的Bug
  + App-Android平台 修复 uni 原生插件扩展 Component 组件 bindData 回调不触发的Bug
  + App-Android平台 修复 华为更新系统后 canvas 绘制本地图像跨域的Bug [详情](https://ask.dcloud.net.cn/question/110676)
  + App-Android平台 修复 uni.request 请求超时不准确的Bug，优化请求最大并发数为10 [详情](https://ask.dcloud.net.cn/question/109996)
  + App-Android平台 修复 websocket 在5.0以下设备强制使用 LTSv1.2 导致无法建立连接的Bug [详情](https://ask.dcloud.net.cn/question/110367)
  + App-Android平台 修复 nvue input组件设置 focus 属性值为 false 时依然会自动获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/110553)
  + App-iOS平台 修复 input 组件在点击时取消禁用无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/110491)
  + App-iOS平台 修复 canvas 组件绘制字体部分属性未生效的Bug [详情](https://ask.dcloud.net.cn/question/110227)
  + App-iOS平台 修复 nvue video 组件的子组件点击事件会透传到 video 组件上的Bug [详情](https://ask.dcloud.net.cn/question/110601)
  + App-iOS平台 修复 uni.openLocation 页面使用 Apple 地图导航目的地错误的Bug
  + H5平台 新增 custom-tab-bar 组件，可自由定义 tabBar 的位置和样式，比如在宽屏浏览器上显示在 topWindow 中 [详情](https://uniapp.dcloud.io/component/custom-tab-bar)
  + H5平台 新增 uni.chooseFile 接口。用于替代 input type=file [详情](https://uniapp.dcloud.io/api/media/file)
  + H5平台 优化 uni.getLocation 支持通过 IP 定位
  + H5平台 优化 uni.chooseLocation、uni.openLocation 在大屏模式的显示效果
  + H5平台 优化 日期类型 picker 组件在PC版Chrome和FireFox上使用浏览器自带日期选择控件
  + H5平台 优化 单列 picker 组件在大屏设备默认使用 select 样式
  + H5平台 修复 topWindow 存在时，下方window页面的 navigationBar 无法显示的Bug
  + H5平台 修复 picker 组件在宽屏模式显示错位的Bug
  + H5平台 修复 tabBar 的 iconPath 使用带协议的图像路径不显示的Bug
  + 微信小程序平台 优化 跳转页面路径中不再自动增加 __id__ 参数
  + hello uni-app 优化 适配PC宽屏，参考：[https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
* 【uniCloud】
  + 阿里云支持事务（startTransaction方式，暂不支持runTransaction）[详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=starttransaction)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 QQ分享支持 type 为 web 类型分享网页链接
  + 修复 打开新页面后，手机无障碍功能的屏幕阅读器可浏览到底层页面元素的Bug [详情](https://ask.dcloud.net.cn/question/109916)
  + Android平台 新增 设置应用图标角标数字 plus.runtime.setBadgeNumber 支持 vivo 手机 [文档](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.setBadgeNumber)
  + Android平台 修复 多次调用 getImageInfo 获取网络图片信息返回的路径可能会重复的Bug [详情](https://ask.dcloud.net.cn/question/110487)
  + Android平台 修复 压缩图片 plus.zip.compressImage 在Android10上可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/110303)
  + Android平台 修复 storage 存储中文数据内容后读取可能出现乱码的Bug
  + Android平台 修复 频繁多次调用 Audio 播放音频可能引起崩溃的Bug
  + iOS平台 修复 2.9.1版本引出的 高德定位设置 geocode 为 true 无法返回地址信息的Bug [详情](https://ask.dcloud.net.cn/question/110474)
  + iOS平台 修复 关闭页面窗口时底部区域可能出现闪动的Bug [详情](https://ask.dcloud.net.cn/question/110153)
  + iOS平台 修复 打开系统内置地图导航时，传入的位置和名称与地图实际显示不一致的Bug [详情](https://ask.dcloud.net.cn/question/109998)
  + iOS平台 修复 native.js 使用 plus.ios.invoke 调用方法时传入参数为 jsonObject 不执行的Bug

#### 2.9.6.20201031-alpha
* 【uni-app】
  + 【重要】 更新文档 2.9.0+ 后 rpx、rem 样式变形的处理办法 [详情](https://ask.dcloud.net.cn/article/37911)
  + App平台、H5平台 新增 支持 uni.offCompassChange、uni.offAccelerometerChange 用于移除相关事件监听
  + App平台 优化 uni.connectSocket 支持配置 header
  + App-Android平台 修复 部分设备 uni.chooseVideo 无法选择视频的Bug [详情](https://ask.dcloud.net.cn/question/109301)
  + App-Android平台 修复 nvue map 组件 markers 的 width、height属性不生效的bug [详情](https://ask.dcloud.net.cn/question/108778)
  + App-Android平台 修复 nvue map 组件 translateMarker 方法中 rotate 参数值设置 `px` 单位后无法正常执行的Bug [详情](https://ask.dcloud.net.cn/question/109630)
  + App-Android平台 修复 2.9.5版本引出的 nvue 部分组件 border-radius 属性设置圆角无效的Bug [详情](https://ask.dcloud.net.cn/question/109597)
  + App-iOS平台 修复 iOS14 上新页面自动获取焦点导致页面变形的Bug [详情](https://ask.dcloud.net.cn/question/107820)
  + App-iOS平台 修复 nvue web-view 组件加载 html 页面中 js 调用 alert 不显示提示框的Bug [详情](https://ask.dcloud.net.cn/question/109791)
  + H5平台 优化 鼠标事件支持返回坐标信息
  + H5平台 优化 uni.showToast 在 宽屏的显示效果
  + H5平台 优化 弹出类接口和组件支持响应 esc、enter 按键
  + H5平台 修复 启用 leftWindow 后 web-view 组件显示错位的Bug
* 【uniCloud】
  + 新增 `<uni-clientDB>`组件支持remove方法，封装了删除确认框、删除数据库、删除前端data等操作，开发更便利 [详情](https://uniapp.dcloud.io/uniCloud/uni-clientdb-component?id=%e6%96%b9%e6%b3%95)
  + 优化 提升云函数执行速度几十毫秒。非冷启动时与传统服务器性能拉齐（需重新部署云函数）
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 腾讯广点通视频开屏广告可能造成应用闪退，或关闭广告后点击屏幕部分区域仍然打开落地页的Bug
  + Android平台 修复 UniPush 云端打包 GooglePlay 渠道默认添加定位权限的Bug [详情](https://ask.dcloud.net.cn/question/105068)
  + iOS平台 新增 二维码扫码支持 autoDecodeCharset 参数，解决非UTF-8编码数据出现乱码的问题 [详情](https://ask.dcloud.net.cn/question/66886)
  + iOS平台 修复 微信登录用户选择拒绝授权可能不触发失败回调的Bug [详情](https://ask.dcloud.net.cn/question/109305)
  + iOS平台 修复 无法保存文件路径包含中文的图片到系统相册的Bug [详情](https://ask.dcloud.net.cn/question/109168)

#### 2.9.5.20201024-alpha
* 【uni-app】
  + App平台、H5平台 修复 Safari 14 输入组件禁用状态文字颜色变浅的Bug [详情](https://ask.dcloud.net.cn/question/109013)
  + App平台 新增 全屏视频 uni.createFullScreenVideoAd [详情](https://uniapp.dcloud.net.cn/api/a-d/full-screen-video)
  + App-Android平台 修复 uni.request 请求 cookie 与 X5 内核 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/108639)
  + App-Android平台 修复 nvue image 组件 mode 设置为 widthFix、heightFix 不生效的Bug
  + App-Android平台 修复 nvue map 组件使用 translateMarker 移动 maker 后气泡文本没有跟随移动的Bug [详情](https://ask.dcloud.net.cn/question/95239)
  + App-Android平台 修复 nvue map 组件动态删除 marker 的 callout 属性不生效的Bug
  + App-iOS平台 修复 canvas 组件绘制 uni.getImageInfo 临时路径跨域的Bug [详情](https://ask.dcloud.net.cn/question/108817)
  + App-iOS平台 修复 nvue scroll-view 组件使用下拉刷新 refresh 隐藏时没有动画效果的Bug [详情](https://ask.dcloud.net.cn/question/108681)
  + App-iOS平台 修复 nvue image 组件 mode 设置为 widthFix、heightFix 时透明区域填充红色背景的Bug [详情](https://ask.dcloud.net.cn/question/108774)
  + App-iOS平台 修复 web-view 组件加载的页面 title 为空时，返回按钮不显示的Bug [详情](https://ask.dcloud.net.cn/question/108887)
  + H5平台 修复 Chrome 使用自动填充时 placeholder 仍然可见的Bug
  + uni-ui 新增 uni-forms 组件，支持表单校验 [详情](https://ext.dcloud.net.cn/plugin?id=2773)
  + uni-ui 新增 uni-group 组件，用于表单项分组显示 [详情](https://ext.dcloud.net.cn/plugin?id=3281)
  + uni-ui 新增 uni-table 组件 [详情](https://ext.dcloud.net.cn/plugin?id=3270)
  + uni-ui 新增 uni-dateformat 组件，支持各种日期格式化，以及1分钟前、刚刚等形式 [详情](https://ext.dcloud.net.cn/plugin?id=3279)
* 【uniCloud】
  + 【重要】新增 clientDB 支持 `jql` 查询语法，大幅降低数据库操作难度 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=jsquery)、大幅简化联表查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup)
  + 【重要】新增 uni-clientDB 组件，在前端通过组件直接获得云数据库内容，并直接绑定到界面上，大幅提升开发效率 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component)
  + 【重要】调整 clientDB内置，云端不再需要单独的clientDB云函数，前端无需引用clientDB的js sdk，直接在前端写`const db = uniCloud.database()`即可 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb)
  + 【重要】调整 uni-clientDB-actions 目录调整到 cloudfunctions 根目录 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action)
  + 【重要】调整 clientDB云函数的permission和validator子目录废除，只需在 DB Schema 中书写permission和validator内容，保存即可直接生效，无需再次导出
  + 【重要】新增 `uniCloud Admin 基础框架`（HBuilderX新建项目可选择该模板） [详情](https://uniapp.dcloud.net.cn/uniCloud/admin)
  + 【重要】新增 web控制台 云数据库配置 DB Schema 后，可直接生成前端工程，含数据表单新增、修改页面，以及校验规则。大幅提升开发效率
  + 【重要】腾讯云 正式商用 [详见](https://uniapp.dcloud.net.cn/uniCloud/price)
  + 新增 web控制台 云数据库支持导出db_init.json
  + 新增 web控制台 服务空间改名
  + 新增 web控制台 云数据库支持`扩展校验函数`，可自主编程实现更复杂的数据校验逻辑，同时在 DB Schema 中引用这些`扩展校验函数`
  + 修复 阿里云 数据库set方法表现不正确的Bug
  + uni-id 新增 开发者callFunction时可自行传入uniIdToken，此时不再从storage获取token
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持全屏视频广告 [详情](https://ask.dcloud.net.cn/article/36718#fullscreenvideo)
  + 优化 uni-AD 基础开屏广告显示效果，适配各种分辨率屏幕设备
  + Android平台 新增 二维码扫码支持 autoDecodeCharset 参数，解决非UTF-8编码数据出现乱码的问题 [详情](https://ask.dcloud.net.cn/question/66886)
  + Android平台 更新 高德地图SDK为7.6.0版
  + Android平台 更新 uni-AD 快手联盟SDK为3.3.4.2版
  + Android平台 修复 uni-AD 应用从后台切换到前台显示开屏广告时，系统状态栏可能遮挡跳过按钮的Bug
  + Android平台 修复 多次调用二维码扫码时，因复用扫码提示音频播放对象导致概率闪退的Bug [详情](https://ask.dcloud.net.cn/question/108776)
  + Android平台 修复 获取屏幕亮度 getBrightness 在小米手机上可能返回数据异常的Bug [详情](https://ask.dcloud.net.cn/question/108691)
  + Android平台 修复 storage 存储数据内容超过 2M 后可能无法正常存取非ASCII字符的Bug
  + Android平台 修复 Geolocation 定位模块默认添加后台定位权限 ACCESS_BACKGROUND_LOCATION 的Bug [详情](https://ask.dcloud.net.cn/question/109442)
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK为3.3.0.0版、快手联盟SDK为3.3.3版
  + iOS平台 更新 云端打包环境XCode为12.1版，uni原生插件兼容支持swift代码
  + iOS平台 优化 本地相册选择照片界面，新增支持 permissionAlert 参数配置权限检测，适配 iOS14 上用户设置为访问`选中的照片`权限时引导修改为访问`所有照片` [文档](http://www.html5plus.org/doc/zh_cn/gallery.html#plus.gallery.GalleryOptions)
  + iOS平台 修复 本地相册选择照片界面，在 iOS14 上如果选中的图片在 iCloud 会触发刷新导致排序混乱的Bug [详情](https://ask.dcloud.net.cn/question/108502)
  + iOS平台 修复 本地相册选择照片界面，选择视频文件出现错误提示框，预览视频文件只显示首帧的Bug
  + iOS平台 修复 本地相册选择照片界面，设置 filename 参数后选中多张图片后返回路径不正确的Bug
  + iOS平台 修复 获取当前地理位置设置 geocode 为 true 时可能无法返回数据的Bug [详情](https://ask.dcloud.net.cn/question/109170)
  + iOS平台 修复 获取图片信息 getImageInfo 返回的 width、height 值类型不正确的Bug [详情](https://ask.dcloud.net.cn/question/108893)
  + iOS平台 修复 视频播放控件横向全屏时唤起软键盘还是竖屏模式的Bug [详情](https://ask.dcloud.net.cn/question/107036)
  + iOS平台 修复 蓝牙订阅特征值 notifyBLECharacteristicValueChange 方法设置 state 属性不生效的Bug
  + iOS平台 修复 蓝牙同时读取和订阅特征值可能引起数据返回混乱的Bug [详情](https://ask.dcloud.net.cn/question/108107)
  + iOS平台 修复 Webview窗口标题栏搜索框的光标在 iOS13+ 上显示位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/103205)

#### 2.9.2.20200913-alpha
* 【uni-app】
  + App平台、H5平台 修复 获取节点信息未包含 computedStyle 的Bug [详情](https://ask.dcloud.net.cn/question/108387)
  + App平台 修复 高频调用 uni.saveFile 保存失败的Bug [详情](https://ask.dcloud.net.cn/question/106233)
  + App-Android平台 修复 系统 webview 更新到 Chrome84 后 canvas 组件绘制本地图像 uni.canvasToTempFilePath 报错的Bug
  + App-Android平台 修复 nvue web-view 组件部分https地址页面无法加载http地址资源的Bug [详情](https://ask.dcloud.net.cn/question/108527)
  + App-iOS平台 修复 nvue image 组件 mode 设置 widthFix、heightFix 不生效的Bug [详情](https://ask.dcloud.net.cn/question/98827)
  + App-iOS平台 修复 nvue map 组件中添加 polyline 边线总是带个箭头的Bug [详情](https://ask.dcloud.net.cn/question/91041)
  + H5平台 调整 picker 组件宽屏下默认垂直居中
  + H5平台 调整 uni.showActionSheet 宽屏下默认垂直居中，支持 popover 参数调节位置
  + H5平台 修复 image 组件 mode="heightFix" 图像变形的Bug [详情](https://ask.dcloud.net.cn/question/107022)
  + H5平台 修复 rich-text 组件无法渲染 section 等标签的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 uni-AD 今日头条穿山甲SDK版本为3.3.0.0，快手联盟SDK版本为3.3.4
  + Android平台 修复 2.9.0 版本引出的 选择文件或拍照后可能会显示开屏广告的Bug
  + Android平台 修复 蓝牙订阅特征值 notifyBLECharacteristicValueChange 方法设置 state 属性不生效的Bug
  + Android平台 修复 压缩图片 plus.zip.compressImage 在Android10上报传入参数错误的Bug [详情](https://ask.dcloud.net.cn/question/108010)
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.11
  + iOS平台 修复 wgt热更新后 plus.runtime.getProperty 获取的 versionCode 不正确的Bug [详情](https://ask.dcloud.net.cn/question/108425)
  + iOS平台 修复 云端打包不支持最新WWDR中间证书生成的企业版证书的Bug [详情](https://ask.dcloud.net.cn/question/106866)

#### 2.9.1.20200927-alpha
* 【uni-app】
  + App平台 修复 tabbar 动态显示或隐藏时可能出现闪白的Bug [详情](https://ask.dcloud.net.cn/question/80898)
  + App-iOS平台 修复 2.9.0版引出的 nvue image 组件动态设置样式在 iOS14 以下设备图片不显示的Bug [详情](https://ask.dcloud.net.cn/question/107884)
  + App-iOS平台 修复 tabbar 中的文本在 iOS14 上无法完整显示的Bug [#2146](https://github.com/dcloudio/uni-app/issues/2146)
  + H5平台 修复 2.9.0 版本引出的内置 css 变量 --window-bottom 在 部分浏览器中失效的Bug [详情](https://ask.dcloud.net.cn/question/107976)
  + H5平台 修复 2.9.0 版本引出的部分事件写法编译报错的Bug [详情](https://ask.dcloud.net.cn/question/107940)
  + 小程序平台 修复 属性值为空的对象表达式时编译报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 高德定位SDK版本为5.2.0
  + iOS平台 更新 高德地图SDK版本为7.6.0、高德定位SDK版本为2.6.7，解决 iOS14 上显示地图时申请 `连接到本地网络上的设备` 权限的问题
  + iOS平台 修复 uni-AD 腾讯广点通的信息流广告样式可能不正确的Bug
  + iOS平台 修复 获取通讯录 plus.contacts.getAddressBook 在 iOS14 上导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/107339)

#### 2.9.0.20200926-alpha
* 【uni-app】
  + 【重要】新增 大屏适配指南 [详情](https://uniapp.dcloud.net.cn/adapt)
  + 【重要】新增 leftWindow、rightWindow、topWindow，用于宽屏适配 [详情](https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow)
  + 【重要】新增 match-media 媒体查询适配组件，用于动态屏幕适配 [详情](https://uniapp.dcloud.net.cn/component/match-media)
  + 新增 支持 uni.createMediaQueryObserver 方法 [详情](https://uniapp.dcloud.net.cn/api/ui/media-query-observer)
  + 【重要】App平台、H5平台 新增 rpx 配置，默认限定了 rpx 生效的最大屏幕宽度为 px。可在 pages.json -> globalStyle 配置 rpxCalcMaxDeviceWidth、rpxCalcBaseDeviceWidth、rpxCalcIncludeWidth 等参数 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + 【重要】App平台、H5平台 优化 调整根字体大小为系统默认大小与微信小程序平台一致 [详情](https://ask.dcloud.net.cn/article/37911)
  + App平台、H5平台 新增 支持 uni.getSelectedTextRange 方法 [详情](https://uniapp.dcloud.io/api/key?id=getselectedtextrange)
  + App平台、H5平台 修复 部分 base64 路径的图像无法显示的Bug [详情](https://ask.dcloud.net.cn/question/106591)
  + App平台 修复 weex 编译模式 vue 页面中的 picker 组件 change 事件有时无法触发的Bug [#1774](https://github.com/dcloudio/uni-app/issues/1774)
  + App平台 修复 低版本系统上 canvas 组件绘制坐标比实际值小的Bug [详情](https://ask.dcloud.net.cn/question/105866)
  + App平台 修复 canvasContext.measureText 无效的Bug [详情](https://ask.dcloud.net.cn/question/107032)
  + App平台 修复 data-set 部分数据为 String 类型时显示错误的Bug [详情](https://ask.dcloud.net.cn/question/100073)
  + App平台 修复 蓝牙事件监听可以重复添加的Bug [#1988](https://github.com/dcloudio/uni-app/issues/1988)
  + App平台 修复 云打包后某些情况下启动白屏的Bug [详情](https://ask.dcloud.net.cn/question/107332)
  + App平台 修复 获取系统外观样式 plus.navigator.getUIStyle 无法调用的Bug [详情](https://ask.dcloud.net.cn/question/103886)
  + App-Android平台 修复 系统 webview 更新到 Chrome85+ 后 canvas 组件绘制本地图像 uni.canvasToTempFilePath 报错的Bug [详情](https://ask.dcloud.net.cn/question/103303)
  + App-Android平台 修复 web-view 组件内 input 被软键盘遮挡的Bug [详情](https://ask.dcloud.net.cn/question/92008)
  + App-Android平台 修复 uni.request 请求 firstIpv4 属性可能不生效的Bug
  + App-Android平台 修复 2.8.4版引出的 uni.request 重定向后 cookie 可能丢失的Bug [详情](https://ask.dcloud.net.cn/question/106697)
  + App-Android平台 修复 2.8.4版引出的 uni.request tcp连接没有复用的Bug [详情](https://ask.dcloud.net.cn/question/106167)
  + App-Android平台 修复 2.8.11版引出的 uni-AD 腾讯广点通SDK更新后在X86模拟器上无法正常启动的Bug [详情](https://ask.dcloud.net.cn/question/106532)
  + App-Android平台 修复 nvue v-if 切换 template 可能出现 tap 事件无法触发的Bug [详情](https://ask.dcloud.net.cn/question/106258)
  + App-iOS平台 修复 nvue 使用await请求网络赋值后页面无法渲染的bug [详情](https://ask.dcloud.net.cn/question/107670)
  + App-iOS平台 修复 iPhoneX 横屏启动时页面宽度异常Bug
  + App-iOS平台 修复 iOS12 以下 :adjust-position="false" 不生效的Bug
  + App-iOS平台 修复 部分情况 input 事件未触发的Bug [详情](https://ask.dcloud.net.cn/question/101135)
  + App-iOS平台 修复 nvue video 组件无法播放相对路径的本地视频的Bug [详情](https://ask.dcloud.net.cn/question/107215)
  + App-iOS平台 修复 uni原生插件 UniPluginProtocol 协议方法可能不触发回调的Bug
  + App-iOS平台 修复 uni原生插件可能与内部方法名称冲突导致部分功能异常的Bug
  + App-iOS平台 修复 离线打包使用 XCode12 编译运行到 iOS14 上 nvue 页面图片无法显示的Bug [详情](https://ask.dcloud.net.cn/question/107320)
  + H5平台 修复 video 组件全屏时 slot 不显示的Bug [详情](https://ask.dcloud.net.cn/question/105724)
  + H5平台 修复 iOS9 系统 uni.uploadFile 传入 base64 报错的Bug
  + 新闻模版 适配PC宽屏 (新建uni-app项目可选择该模板体验)
  + 小程序平台 新增 cli版本支持 vue3 [详情](https://ask.dcloud.net.cn/article/37834)
  + 小程序平台 修复 部分事件使用箭头函数表达式执行报错的Bug [#2132](https://github.com/dcloudio/uni-app/issues/2132)
* 【uniCloud】
  + 【重要】新增 腾讯云 云函数固定出口IP，可用于微信公众号开发等要求配置ip的场景 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip)
  + 【重要】uni-clientDB 2.0 重大更新，可完整方便的控制权限和数据验证。大多数场景不再需要编写云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB)
  + 【重要】uni-id 新增 角色权限相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=rbac)
  + 【重要】云数据库支持JSON Schema规范，可在Web控制台数据库管理界面对数据进行格式描述 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + 阿里云 去除客户端上传文件类型限制
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持应用从后台切换到前台显示开屏广告，并默认启用 [详情](https://ask.dcloud.net.cn/article/36718#splash_fr)
  + 新增 uni-AD 支持快手联盟的信息流广告，增加信息流的广告填充
  + 新增 原生导航标题栏 titleNView 的 searchInput 搜索框支持 color 属性设置文本颜色 [规范](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewSearchInputStyles)
  + 新增 视频播放控件 VideoPlayer 支持 show-loading 属性设置是否显示loading控件 [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + Android平台 适配 Android10+系统 `分区存储` 机制 [详情](https://ask.dcloud.net.cn/article/36199)
  + Android平台 更新 uni-AD 穿山甲SDK为3.2.5.1版；腾讯广告联盟SDK为4.270.1140版、快手联盟SDK为3.3.1版
  + Android平台 修复 视频播放控件 VideoPlayer 设置 show-progress 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/106150)
  + Android平台 修复 Webview窗口设置 videoFullscreen 不生效的Bug [详情](https://ask.dcloud.net.cn/question/106499)
  + Android平台 修复 页面中 input 标签 type 为 file 且 accept 为 video 时点击打开不是启动摄像的Bug [详情](https://ask.dcloud.net.cn/question/104931)
  + Android平台 修复 File 文件对象的 slice 方法无法获取指定数据内容的Bug [详情](https://ask.dcloud.net.cn/question/106427)
  + Android平台 修复 设置targetversion为29+时，在Android10及以上设备调用 uni.shareWithSystem 分享图片可能报 `多文件分享只支持照片` 的Bug
  + Android平台 修复 安全检测可能报apk安装包的Activity、Service组件存在导出风险的Bug
  + 【重要】iOS平台 适配 iOS14 解决应用启动时申请 `连接到本地网络上的设备` 权限导致无法通过AppStore审核的问题 [详情](https://ask.dcloud.net.cn/question/107530)
  + iOS平台 适配 iOS14 下拉刷新的雪花样式调整问题
  + iOS平台 更新 支付宝Alipay SDK版本为15.7.9，解决 iOS14 上应用启动时提示读取剪切板的问题
  + iOS平台 优化 uni-AD 快手联盟SDK引用库，减少安装包ipa大小约20M
  + iOS平台 修复 视频播放控件 VideoPlayer 调用 exitFullScreen 可能导致页面横屏设置失效的Bug [详情](https://ask.dcloud.net.cn/question/105520)
  + iOS平台 修复 从本地相册选择图片在 iOS14 上可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/107745)
  + iOS平台 修复 2.7.12版引出的 原生控件对象 plus.nativeObj.View 调用 drawRichText 设置 align 属性为 center 不居中显示的Bug [详情](https://ask.dcloud.net.cn/question/103328)
* 【uni小程序SDK】
  + iOS平台 修复 小程序前后台切换或跳转其他原生页面再返回小程序页面时，对应的应用生命周期 onShow、onHide 没有触发的Bug
  + iOS平台 修复 安装App后偶现首次无法正常启动小程序的Bug

#### 2.8.11.20200904-alpha
* 【uni-app】
  + App-Android 修复 2.8.9版引出的 uni-AD 小概率出现获取广告配置数据失败导致无法显示开屏广告的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 2.8.9版升级 QQ SDK引出的 在部分手机上无法正常分享到 QQ 的Bug [详情](https://ask.dcloud.net.cn/question/103383)

#### 2.8.10.20200903-alpha
* 【uni-app】
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求默认超时时间过长的Bug
* 【uniCloud】
  + 修复 某些情况下，上传公共模块，UI卡顿的Bug
  + 调整 阿里云放开文件上传类型限制

#### 2.8.9.20200829-alpha
* 【uni-app】
  + 新增 uni.navigateTo 增加参数 events 支持页面间通信 [详情](https://uniapp.dcloud.net.cn/api/router?id=navigateto)
  + App平台、H5平台 优化 image 组件支持 mode="heightFix"
  + App平台 优化 uni.canvasToTempFilePath 提高执行速度
  + App平台 修复 app.vue 生命周期 onshow 某些情况下无参数的Bug [详情](https://ask.dcloud.net.cn/question/103903)
  + App平台 修复 input 组件修改 password 属性后 adjust-position 配置失效的Bug [详情](https://ask.dcloud.net.cn/question/103435)
  + App平台 修复 临时文件未清理的Bug [详情](https://ask.dcloud.net.cn/question/103456)
  + App平台 修复 nvue refresh 组件偶现下拉刷新结束后不复位的Bug [详情](https://github.com/dcloudio/uni-app/issues/1107)
  + App-Android平台 修复 Android11 设备运行白屏的Bug [详情](https://ask.dcloud.net.cn/question/105319)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求 cookie 与 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/103956)
  + App-Android平台 修复 2.8.4版引出的 nvue 无法加载网络字体图标文件 iconfont 的Bug [详情](https://ask.dcloud.net.cn/question/104655)
  + App-Android平台 修复 调用监听加速度、陀螺仪等 API 可能报`e.setInterval is not a function`错误的Bug [详情](https://ask.dcloud.net.cn/question/105584)
  + App-Android平台 修复 没有获取到位置权限时，调用 uni.chooseLocation 可能导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/105312)
  + App-iOS平台 修复 scroll-view 组件在 iOS13 触摸交互卡顿的Bug [详情](https://ask.dcloud.net.cn/question/98881)
  + App-iOS平台 修复 nvue map 组件 controltap 事件返回数据参数名不正确的Bug [详情](https://ask.dcloud.net.cn/question/99769)
  + H5平台 优化 uni.previewImage 支持手势缩放
  + H5平台 修复 多个 editor 组件会重复加载依赖的Bug
  + H5平台 修复 从首页调用 uni.redirectTo 切换其他页面后首页未销毁的Bug [详情](https://ask.dcloud.net.cn/question/103503)
  + H5平台 修复 切换页面导致 textarea 组件 auto-height 属性失效的Bug
  + 小程序平台 修复 v-for 遍历复杂表达式不显示的Bug [#2012](https://github.com/dcloudio/uni-app/issues/2012)
* 【uniCloud】
  + 新增 本地运行 加入显示调试行号等信息
  + 修复 当npm镜像源为淘宝源时，某些云函数或公共模块上传失败的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持快手联盟的开屏和激励视频广告
  + 修复 下载文件设置的临时存储文件名过长时无法正常下载的Bug [详情](https://ask.dcloud.net.cn/question/103336)
  + Android平台 修复 UniPush 在部分魅族手机可能无法获取cid的Bug [详情](https://ask.dcloud.net.cn/question/102774)
  + Android平台 修复 设置targetversion为29时，从相册选择图片返回路径不正确的Bug [详情](https://ask.dcloud.net.cn/question/105269)
  + Android平台 修复 设置targetversion为29时，在部分 Android10 设备无法正常定位的Bug
  + iOS平台 更新 QQ 分享、登录SDK版本为3.3.9-Lite，解决分享到 QQ 显示未授权应用的问题
  + iOS平台 修复 设置页面横屏 landscape 显示时，在 iPad 设备上不显示状态栏的Bug [详情](https://ask.dcloud.net.cn/question/103386)
  + iOS平台 修复 视频播放控件 VideoPlayer 动态修改 objectFit 属性不生效的Bug

#### 2.8.7.20200820-alpha
* 【uni-app】
  + App-Android平台 修复 调用 plus.io.requestFileSystem 概率性出现`Failed to find taskCenter`错误信息的Bug [详情](https://ask.dcloud.net.cn/question/103902)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求 cookie 未正确处理可能引起网络请求失败的Bug [详情](https://ask.dcloud.net.cn/question/105139)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求返回的 http 响应头数据中 key 名称变成小写的Bug [详情](https://ask.dcloud.net.cn/question/103995)
  + 小程序平台 修复 v-for 中事件使用部分复杂的表达式编译报错的Bug
  + 小程序平台 修复 v-for 中嵌套 v-if 时部分复杂表达式编译后运行报错的Bug [#2011](https://github.com/dcloudio/uni-app/issues/2011)
  + 小程序平台 修复 修复部分自定义事件无参数时报错的Bug [#2021](https://github.com/dcloudio/uni-app/issues/2011)
  + 微信小程序平台 修复 属性使用复杂的对象表达式小程序开发工具编译报错的Bug [详情](https://ask.dcloud.net.cn/question/103944)
* 【uniCloud】
  + 优化 云函数插件支持写入components、js_sdk、static目录
  + web控制台 阿里云 新增 数据库集合导入导出功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=export)
  + web控制台 腾讯云 新增 资源概况页面
  + 短信发送 新增 3个通知类短信模板 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
* 【App插件(含5+App和uni-app的App端)】
  + uni-AD 新增 信息流和激励视频的多广告源在App同次启动时随机穿插，可提升广告收益
  + uni-AD 新增 设置开屏全屏显示
  + Android平台 修复 uni-AD 开屏显示穿山甲广告点击跳过按钮后，再点击splash页面可能导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/103601)
  + iOS平台 更新 UniPush 使用的个推SDK版本为2.4.5.1，解决在部分设备上获取唯一标识可能重复的问题
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.10，今日头条穿山甲SDK版本为3.1.0.5
  + iOS平台 修复 直播推流 LivePusher 监听事件后不触发回调的Bug

#### 2.8.4.20200805-alpha
* 【uni-app】
  + App平台、H5平台 优化 uni.setTabBarItem 支持 pagePath 配置
  + App平台、H5平台 修复 picker 组件设置 value 为 -1 时表现异常的Bug [#1553](https://github.com/dcloudio/uni-app/issues/1553)
  + App平台、H5平台 修复 editor 组件粘贴文字报错的Bug [详情](https://ask.dcloud.net.cn/question/102948)
  + App平台 新增 支持蓝牙相关接口 uni.setBLEMTU、uni.getBLEDeviceRSSI
  + App平台 优化 uni.request 支持返回 cookies 属性与微信小程序拉齐（基础库版本 2.10.0+）
  + App平台 修复 ibeacon 相关事件回调不触发的Bug [详情](https://ask.dcloud.net.cn/question/102136)
  + App平台 修复 当前 tab 页面不是配置的首页时，热刷新后 tabBar 消失的Bug [详情](https://ask.dcloud.net.cn/question/101612)
  + App平台 修复 从 nvue 页面调用 uni.reLaunch 切换到 vue 页面后无法设置状态栏的Bug [详情](https://ask.dcloud.net.cn/question/102594)
  + App-Android平台 更新 网络请求底层实现库 OKHttp 版本为3.12.11，提升 websocket 传输效率
  + 【重要】App-Android平台 修复 targetSdkVersion 设置为 29 时在 Android10 运行白屏的Bug，满足谷歌应用商店上架对targetSdkVersion的要求 [详情](https://ask.dcloud.net.cn/question/103166)
  + App-Android平台 修复 nvue input组件绑定值带小数点时显示异常的Bug [详情](https://ask.dcloud.net.cn/question/97745)
  + App-iOS平台 修复 nvue 页面 在 iOS9 系统白屏的Bug
  + H5平台 修复 picker 组件配置 mode="date" 且 fields="year" 时报错的Bug [#1687](https://github.com/dcloudio/uni-app/issues/1687)
  + 小程序平台 修复 v-for 中方法使用复杂表达式报错的Bug [#373](https://github.com/dcloudio/uni-app/issues/373)
  + 小程序平台 修复 v-for 中模板插值使用复杂表达式报错的Bug [详情](https://ask.dcloud.net.cn/question/102443)
  + 小程序平台 修复 v-for 遍历对象表达式报错的Bug [#449](https://github.com/dcloudio/uni-app/issues/449)
  + 小程序平台 修复 v-for 中属性值为对象表达式报错的Bug [#1450](https://github.com/dcloudio/uni-app/issues/1450)
  + 小程序平台 修复 v-for 遍历数值时模板中有复杂表达式不显示的Bug
  + 小程序平台 修复 v-if="false" 时标签内部的方法和过滤器仍然会执行的Bug [#334](https://github.com/dcloudio/uni-app/issues/334)
  + 微信小程序平台、QQ小程序平台、抖音小程序平台 优化 自定义组件支持 v-show 指令 [#1724](https://github.com/dcloudio/uni-app/issues/1724)
  + 支付宝小程序平台 修复 v-for 部分情况 key 不生效的Bug
  + 支付宝小程序平台 修复 支持 uni.getSavedFileList 接口
  + 支付宝小程序平台 修复 sjs 中 callMethod 不能正确调用的Bug
  + 头条小程序平台 修复 修复解构插槽不显示的Bug [详情](https://ask.dcloud.net.cn/question/80187)
  + uni-ui 新增 uni-list 组件的 clickable 属性，是否开启点击反馈
  + uni-ui 新增 uni-list 组件的 link 属性，显示右侧箭头并开启点击反馈
  + uni-ui 新增 uni-list 组件的 to 属性，直接跳转到指定页面
  + uni-ui 新增 uni-list 组件的 border 属性，是否显示列表分割线
  + uni-ui 新增 uni-rate 组件的 disabled 属性，可设置组件禁用状态（之前版本的不可点击状态）
  + uni-ui 新增 uni-rate 组件的 disabledColor 属性，可设置禁用颜色
  + uni-ui 新增 uni-rate 组件的 readonly 属性，可设置组件只读属性
  + uni-ui 新增 uni-rate 组件的 allowHalf 属性，可设置组件是否开启半星选择
  + uni-ui 新增 uni-rate 组件的 touchable 属性，可设置组件是否支持滑动手势
  + uni-ui 修复 uni-rate 组件动态传值不更新的问题
  + uni-ui 优化 uni-rate 组件的 value 属性可使用 v-model 双向绑定数据
  + uni-ui 优化 uni-popup 组件的扩展组件支持 easycom
  + uni-ui 新增 uni-swipe-action 组件的左侧滑动使用方式
  + uni-ui 新增 uni-swipe-action 组件的插槽使用方式
  + uni-ui 新增 uni-swipe-action 组件的 threshold 属性，可以控制滑动缺省值
  + uni-ui 修复 uni-swipe-aciotn 组件的滚动页面时触发滑动的Bug
  + uni-ui 优化 uni-swipe-action 组件的长列表滚动性能
* 【uniCloud】
  + 阿里云 新增 支持协作者本地运行云函数
  + 修复 HBuilderX 2.8.0引出的 公共模块右键菜单 更新依赖本模块的云函数菜单丢失的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 蓝牙设置最大传输单元 setBLEMTU，获取设备信号强度 getBLEDeviceRSSI 等功能 [文档](https://www.html5plus.org/doc/zh_cn/bluetooth.html#plus.bluetooth.setBLEMTU)
  + 修复 Webview窗口标题栏 titleNView 设置为透明样式时按钮的背景区域无法自适应的Bug
  + Android平台 更新 UniPush 使用的个推SDK国内渠道版本为2.14.1.0，提升消息推送到达率
  + Android平台 调整 UniPush 和 个推推送 谷歌渠道默认不显示隐私政策提示框 [详情](https://ask.dcloud.net.cn/article/36479)
  + Android平台 修复 UniPush 谷歌渠道设置不显示隐私政策提示框可能导致获取推送标识信息失败的Bug
  + Android平台 优化 native.js 自动回收对象 autoCollection 机制，避免应用长时间运行内存回收不及时的问题
  + Android平台 修复 从相册图片中扫描二维码识别率低的Bug [详情](https://ask.dcloud.net.cn/question/88500)
  + Android平台 修复 保存部分视频文件添加至相册可能无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/102669)
  + Android平台 修复 自定义基座 wap2app 真机运行 tab 无法切换的Bug [详情](https://ask.dcloud.net.cn/question/102492)
  + iOS平台 修复 直播推流 LivePusher 设置 whiteness 美白属性值不生效的Bug [详情](https://ask.dcloud.net.cn/question/102761)
  + iOS平台 修复 状态栏样式设置为非沉浸式在 iPad 设备上横屏时状态栏显示不正常的Bug
* 【uni小程序SDK】
  + Android平台 优化 小程序后台运行功能，支持关闭多任务窗口 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/android?id=setenablebackground)
  + Android平台 修复 小程序在manifest.json配置固定横屏或竖屏方向无效的Bug

#### 2.8.3.20200727-alpha
* 【uni-app】
  + H5平台 修复 启用摇树优化后 audio 组件编译报错的Bug [#1943](https://github.com/dcloudio/uni-app/issues/1943)

#### 2.8.2.20200724-alpha
* 【uni-app】
  + 支付宝小程序平台 修复 使用 await/async 报错的Bug [详情](https://ask.dcloud.net.cn/question/101714)
  + App-iOS平台 修复 2.8.1版引出的 nvue video 组件中 cover-view 无法覆盖显示的Bug [详情](https://ask.dcloud.net.cn/question/102165)
  + App-iOS平台 修复 nvue textarea 组件设置 auto-height 为 true 时传入初始值高度没有自适应的Bug [详情](https://github.com/dcloudio/uni-app/issues/992)
  + App-iOS平台 修复 nvue textarea 组件 linechange 事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/91477)
* 【uniCloud】
  + 阿里云 修复 本地运行时云函数互调报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 previewImage 预览图片在 iOS14 上导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/100379)
* 【uni小程序SDK】
  + Android平台 修复 2.8.1版引出的 通过 DCUniMPSDK.getInstance().startApp 运行小程序丢失启动参数的Bug

#### 2.8.1.20200721-alpha
* 【uni-app】
  + App平台 修复 audio 组件不显示的Bug
  + App平台 修复 backgroundAudioManager onCanPlay 事件失效的Bug
  + App-Android平台 修复 部分平板设备 rpx 计算错误的Bug  [#1848](https://github.com/dcloudio/uni-app/issues/1848)
  + App-Android平台 修复 系统日期选择框 pickDate 设置默认、最大、最小日期不生效的Bug [详情](https://ask.dcloud.net.cn/question/95065)
  + App-Android平台 修复 2.8.0版引出的 页面切换后 input 组件设置 focus 属性可能无法正常输入的Bug [详情](https://ask.dcloud.net.cn/question/100771)
  + App-Android平台 修复 2.8.0版引出的 uni.request 请求部分网络接口可能失败的Bug
  + App-Android平台 修复 tabBar 页面首次启动可能显示区域不正常的Bug [详情](https://ask.dcloud.net.cn/question/100898)
  + App-Android平台 修复 软键盘弹出时执行 uni.reLaunch 在Android10上会导致应用闪退的Bug [详情](https://github.com/dcloudio/uni-app/issues/1895)
  + App-Android平台 修复 subNvue 原生子窗体动态显示隐藏可能引起 map 组件显示异常的Bug
  + App-iOS平台 修复 2.8.0版引出的 页面中使用 video 组件跳转到其他页面会导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/100806)
  + App-iOS平台 修复 nvue video 组件在页面关闭后仍在后台播放，再次打开页面出现播放异常的Bug [详情](https://ask.dcloud.net.cn/question/100943)
  + App-iOS平台 修复 nvue 页面开启下拉刷新 enablePullDownRefresh 后，配置自定义导航栏显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100506)
  + 小程序平台 修复 组件的部分写法编译报错的Bug [详情](https://ask.dcloud.net.cn/question/101132)
  + 小程序平台 修复 作用域插槽中定义的 class 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/100724)
  + 小程序平台 修复 修复组件嵌套时解构插槽内事件报错的Bug [详情](https://ask.dcloud.net.cn/question/99063)
  + 小程序平台 修复 匿名插槽和具名插槽 default 不等同的Bug
  + 微信小程序平台 新增 支持生命周期 onUnhandleRejection、onShareTimeline（分享小程序到朋友圈）、onAddToFavorites
  + 微信小程序平台 优化 支持作用域插槽当作普通插槽使用 [详情](https://ask.dcloud.net.cn/question/98634)
  + 支付宝小程序平台 修复 作用域插槽不显示的Bug [#1253](https://github.com/dcloudio/uni-app/issues/1253)
  + 新建uni-app项目模板，新增来自插件市场腾讯云提供的discus!Q模板 [详情](https://ext.dcloud.net.cn/plugin?id=2336)
* 【uniCloud】
  + 【重要】新增 本地运行云函数，可连接远程数据库和云存储，大幅提升开发效率，同时方便数据导入导出 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=runlocal)
  + 【重要】新增 插件市场支持云函数付费销售，欢迎插件作者们提交高质量可售卖插件
  + 【重要】新增 uniCloud.sendSms 短信发送能力，可方便、便宜的发送验证码短信 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + 修复 2.7.12版本引出的支付宝小程序、百度小程序下使用 uniCloud 报错的Bug
  + 修复 2.7.12版本引出的H5端 main.js 内使用 uniCloud 导致 uniCloud 不可使用的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 uni-AD 更新 360广告SDK版本为5.17.3157
  + Android平台 修复 视频播放 VideoPlayer 的 src 属性无法切换相同ip不同端口的流媒体链接地址的Bug [详情](https://ask.dcloud.net.cn/question/95951)
  + Android平台 修复 消息提示框 toast 在 MIUI12 显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100601)
  + Android平台 修复 Webview窗口的 iframe 中调用请求权限 requestPermissions 报错的Bug [详情](https://ask.dcloud.net.cn/question/100592)
  + Android平台 修复 Webview窗口设置 scrollIndicator 属性可能不生效的Bug
  + Android平台 修复 连接蓝牙设备 createBLEConnection 设置 timeout 属性无效的Bug
  + Android平台 修复 获取蓝牙设备指定服务特征值的 write 属性值可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/99149)
  + iOS平台 修复 uni-AD 开屏广告点击特定基础广告时可能引起应用卡死的Bug
  + iOS平台 修复 连接多个蓝牙设备时，特征值变化事件 onBLECharacteristicValueChange 回调触发异常的Bug [详情](https://ask.dcloud.net.cn/question/99858)
  + iOS平台 修复 sqlite 执行查询SQL语句读取 big integer 类型数据不准确的Bug [详情](https://ask.dcloud.net.cn/question/100234)
  + iOS平台 修复 音频 audio 连接 airpods 等外接设备时依然使用手机扬声器播放的Bug [详情](https://ask.dcloud.net.cn/question/100719)
* 【uni小程序SDK】
  + Android平台 优化 小程序进程为应用私有进程，名称调整为`宿主包名:io.dcloud.unimp`，防止其他APP调用
  + Android平台 修复 小程序启动界面可能出现闪屏的Bug
  + iOS平台 优化 小程序启动流程，Hello uni-app 示例应用启动速度提升2倍，在iPhone11设备实测400ms内打开应用首页
  + iOS平台 修复 发送短信 sendMessage API无效的Bug

#### 2.8.0.20200701-alpha
* 【uni-app】
  + 优化 编译错误提示更准确，新增采集未知的编译器错误
  + App平台 修复 uni.hideLoading 会把 uni.showToast 隐藏掉的Bug
  + App平台 修复 uploadTask.abort 无效的Bug [详情](https://ask.dcloud.net.cn/question/99364)
  + App平台 修复 nvue 页面 Promise 不支持 finally 方法的Bug
  + App平台 修复 局部组件 props 中的 id 会覆盖根节点 id 属性的问题 [详情](https://ask.dcloud.net.cn/question/99900)
  + 【重要】App-Android平台 调整 JS引擎默认从 jscore 改为 V8，提升运算性能 [详情](https://ask.dcloud.net.cn/article/37465)
  + App-Android平台 新增 支持DNS解析时优先使用ipv4 [详情](https://uniapp.dcloud.net.cn/api/request/request)
  + App-Android平台 修复 启动分包后云端打包可能出现页面无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/100023)
  + App-Android平台 修复 map 组件 position 样式设置为 fixed 后可能出现地图控件无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/100128)
  + App-Android平台 修复 tabbar 页面中 webview 组件在 wgt 升级后可能出现白屏的Bug [详情](https://ask.dcloud.net.cn/question/99253)
  + App-Android平台 修复 nvue 页面使用 video 组件切换到其它 vue 页面后 input 组件无法唤起软键盘的Bug [详情](https://ask.dcloud.net.cn/question/97197)
  + App-Android平台 修复 nvue input、textarea 组件设置 adjust-position 为 false 后切换页面可能无法唤起软键盘的Bug [详情](https://ask.dcloud.net.cn/question/99416)
  + App-Android平台 修复 nvue webview 组件设置 webview-styles 的 progress 属性值后进度条显示不正常的Bug
  + App-Android平台 修复 全面屏手机横屏时页面宽高可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/99365)
  + App-iOS平台 修复 iOS12以下版本 切换到深色背景页面出现闪白的Bug。需注意当 pages.json 文件中配置窗口背景色与页面 style 节点设置背景色不一致时仍可能会闪屏 [详情](https://ask.dcloud.net.cn/question/99453)
  + App-iOS平台 修复 video 组件中使用 cover-image 退出全屏后不显示的Bug [详情](https://ask.dcloud.net.cn/question/98498)
  + App-iOS平台 修复 nvue map 组件 moveToLocation 方法不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/99638)
  + App-iOS平台 修复 nvue web-view 组件 schemes 无法跳转打开其他应用的Bug [详情](https://ask.dcloud.net.cn/question/99331)
  + App-iOS平台 修复 nvue 页面 picker-view 组件滚动错位的Bug
  + H5平台 修复 onPageNotFound 生命周期无效的Bug [#1743](https://github.com/dcloudio/uni-app/issues/1743)
  + H5平台 修复 iOS微信内置浏览器打开位置相关页面后无法后退的Bug [#1789](https://github.com/dcloudio/uni-app/issues/1789)
  + 微信小程序 修复 多个 v-for 嵌套时部分情况下绑定事件报错的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I1KNYW)
  + 登录模版 升级 集成 uni-id 补充云函数，实现前后一体、功能完整的登录注册模板 [详情](https://github.com/dcloudio/uni-template-login)
* 【uniCloud】
  + 【重要】新增[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)，实现简单、统一、可扩展的用户中心，推荐每个 uniCloud 开发者使用
  + 新增 callfunction时自动携带`uni-id`的token，无需自行开发token管理方案
  + 新增 web控制台 腾讯云 云数据库备份和恢复功能 [详情](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + 新增 web控制台 腾讯云 云数据库集合名称修改功能
  + 修复 云函数内获取客户端系统类型可能为空的Bug
  + 修复 HBuilderX 导入包含common目录的云函数模板，导致原common目录被覆盖的Bug
  + 优化 HBuilderX 新建公共模块增加名称不能包含大写字母的限制
  + 修复 HBuilderX 某些情况下，上传公共模块，出现npm install失败的Bug
  + 修复 HBuilderX 公共模块 右键菜单出现两个上传公共模块菜单的Bug
  + 修复 HBuilderX 上传公共模块没有填写appid时的错误提示与上传云函数不一致的Bug
* 【App插件(含5+App和uni-app的App端)】
  + uni-AD 更新 穿山甲SDK Android更新为3.1.0.0版、iOS更新为3.1.0.1版；腾讯广告联盟SDK Android更新为4.232.1102版、iOS更新为4.11.9版。请使用广告的开发者尽早升级，老版本在部分新手机上有闪退现象
  + Android平台 修复 请求权限 plus.android.requestPermissions 传入无效权限可能引起应用崩溃的Bug
  + Android平台 修复 视频播放 安卓9及以下的刘海屏手机上全屏播放引起闪退的Bug [详情](https://ask.dcloud.net.cn/question/99064)
  + Android平台 修复 从系统相册选择文件设置最多选择图片数量 maximum 后不会触发 onmaxed 事件的Bug [详情](https://ask.dcloud.net.cn/question/100062)
  + 【重要】iOS平台 新增 云端打包支持配置自定义storyboard启动界面 [详情](https://ask.dcloud.net.cn/article/37475)
  + iOS平台 修复 uni-AD 同时并发调用多次获取信息流广告可能导致无法返回广告数据的Bug
  + iOS平台 修复 应用首页加载网络页面在启动时可能偶现白屏的Bug [详情](https://ask.dcloud.net.cn/question/99572)
  + iOS平台 修复 Webview窗口直接加载mp4视频可能显示错误页面的Bug
  + iOS平台 修复 sqlite 执行查询SQL语句读取 blob 类型数据返回乱码的Bug [详情](https://ask.dcloud.net.cn/question/98721)
  + iOS平台 修复 连接蓝牙设备 createBLEConnection 超时不触发错误回调的Bug
  + iOS平台 修复 连接蓝牙设备后 可能无法写入数据的Bug
  + iOS平台 修复 连接蓝牙设备断开后 可能无法再次连接的Bug
* 【uni小程序SDK】
  + iOS平台 新增 预加载小程序功能，可提升初次启动速度 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e9%a2%84%e5%8a%a0%e8%bd%bd%e5%b0%8f%e7%a8%8b%e5%ba%8f)
  + iOS平台 新增 小程序支持后台运行功能，可提升二次启动速度 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%bc%80%e5%90%af%e5%90%8e%e5%8f%b0%e8%bf%90%e8%a1%8c)

#### 2.7.13.20200615-alpha
* 【uni-app】
  + App-nvue平台 修复 HBuilderX 2.7.12 alpha 版引发的 纯 nvue 项目编译出错的Bug [详情](https://ask.dcloud.net.cn/question/99356)
  + App-Android平台 修复 nvue web-view 组件 schemes 无法跳转打开其它应用的Bug [详情](https://ask.dcloud.net.cn/question/99331)

#### 2.7.12.20200613-alpha
* 【uni-app】
  + 【重要】新增 自动化测试 [详情](https://uniapp.dcloud.io/collocation/auto/quick-start)
  + 【重要】新增 运行和发布到快应用联盟 [详情](https://uniapp.dcloud.io/quickstart?id=quickapp-webview)
  + App-nvue平台、H5平台 新增 API uni.preloadPage 预加载页面 [详情](https://uniapp.dcloud.net.cn/api/preload-page)
  + App-vue平台 新增 分包支持，可提升大型App启动速度 [详情](https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization)
  + 补充 uni-app 部署 H5 到相对路径/使用file协议教程 [详情](https://ask.dcloud.net.cn/article/37432)
  + App平台、H5平台 修复 -1rpx、-1upx被错误的计算为1px的Bug [详情](https://ask.dcloud.net.cn/question/98270)
  + App平台 修复 map 组件 markers 无 id 时无法移除的Bug
  + App平台 修复 map 组件 监听 regionchange 事件报错的Bug
  + App平台 修复 textarea 组件初始化时配置 focus 属性无法获取焦点的Bug
  + App-Android平台 修复 map 组件可能无法正常显示的Bug
  + App-Android平台 修复 nvue map 组件 markers 上的气泡 callout 会跟随旋转的Bug [详情](https://ask.dcloud.net.cn/question/98195)
  + App-Android平台 修复 nvue web-view 组件中 input 标签设置 type 为 file 时选择拍照后可能无法返回图片路径的Bug
  + App-iOS平台 修复 uni.request 参数 data 为非字符串时请求失败的Bug
  + App-iOS平台 修复 uni.showToast 部分情况文本显示不全的Bug [详情](https://ask.dcloud.net.cn/question/98349)
  + H5平台 修复 picker-view 组件某些情况设置 value 不生效的Bug
  + hello uni-app 新增 在navigator示例和日历扩展ui示例中增加页面预载示例
* 【uniCloud】
  + 【重要】新增 前端网页部署。uni-app的H5页面或普通html网站，均可免费部署到uniCloud，不用再购买传统云，高速、省钱、省心。 [详情](https://uniapp.dcloud.io/uniCloud/hosting)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 腾讯广点通开屏广告可能出现填充率过低的Bug
  + Android平台 修复 uni-AD 创建多个激励视频广告引起 onLoad onClose onError 事件回调错乱的Bug
  + Android平台 修复 选择按钮框 actionSheet 设置 title 并且 buttons 设置过多可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/98476)
  + Android平台 修复 原生导航标题栏 titleNView 的 searchInput 搜索框动态更新后可能触发多次输入内容更新事件的Bug [详情](https://ask.dcloud.net.cn/question/98190)
  + Android平台 修复 音频 audio 的 seek 操作不触发 seeked 事件的Bug [详情](https://ask.dcloud.net.cn/question/78711)
  + Android平台 修复 图片预览 previewImage 无法显示bmp格式图片文件的Bug
  + Android平台 修复 HBuilderX2.6.11 引出的 Webview窗口设置 background 为 transparent 不生效的Bug
  + iOS平台 修复 视频播放 VideoPlayer 与 直播推流 LivePusher 同时使用时没有声音的Bug [详情](https://ask.dcloud.net.cn/question/97479)
  + iOS平台 修复 搜索蓝牙设备 startBluetoothDevicesDiscovery 可能不触发 onBluetoothAdapterStateChange 事件的Bug
  + iOS平台 修复 搜索蓝牙设备 startBluetoothDevicesDiscovery 连续调用多次触发失败回调的Bug

#### 2.7.11.20200602-alpha
* 【uni-app】
  + 【重要】支持运行和发布到 华为快应用 [详情](https://uniapp.dcloud.io/matter?id=quickapp-webview-huawei)
  + App平台 修复 使用小程序组件时局部组件不显示的Bug
  + App平台 修复 canvasContext.fillText 部分设备多次调用失败的Bug [详情](https://ask.dcloud.net.cn/question/97609)
  + App平台 修复 canvasContext.drawImage 无法绘制 base64 格式图像的Bug [详情](https://ask.dcloud.net.cn/question/95050)
  + App平台 修复 videoContext.stop 无效的Bug
  + App-Android平台 修复 HBuilderX2.7.8引出的 tabBar 页面无法动态更新原生导航标题栏 titleNView 的Bug
  + App-Android平台 修复 uni.reLaunch 关闭所有页面打开应用内某个页面后，uni.hideTabBar失效的Bug [详情](https://ask.dcloud.net.cn/question/97140)
  + App-Android平台 修复 uni.scanCode 二维码扫描预览界面在横屏状态下变形的Bug [详情](https://ask.dcloud.net.cn/question/96473)
  + App-Android平台 修复 uni.setNavigationBarTitle 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/97791)
  + App-Android平台 修复 wgt热更新后 uni.navigateTo 可能返回找不到访问页面错误的Bug [详情](https://ask.dcloud.net.cn/question/97930)
  + App-Android平台 修复 nvue video 组件 controls 设置为 false 时 click 事件在非全屏状态下无法触发的Bug [详情](https://ask.dcloud.net.cn/question/97439)
  + App-Android平台 修复 nvue video 组件 seek 后再设置 src 属性会导致进度跳到视频末尾的Bug [详情](https://ask.dcloud.net.cn/question/97439)
  + App-Android平台 修复 nvue livepusher 组件 device-position 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/96784)
  + App-Android平台 修复 nvue webview 组件加载网页中使用 schemes 跳转就会报错的Bug [详情](https://ask.dcloud.net.cn/question/97271)
  + App-iOS平台 修复 nvue waterfall、list、scroll-view 组件中的 loading 组件可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/93128)
  + App-iOS平台 修复 nvue video 组件在 list 中滑动后视频可能无法正常播放的Bug
  + H5平台 修复 启用摇树优化后部分 es6 语法未转换成 es5 的Bug [详情](https://ask.dcloud.net.cn/question/98104)
  + H5平台 修复 PC 端获取屏幕宽高错误的Bug [详情](https://ask.dcloud.net.cn/question/97721)
  + 支付宝小程序 修复 nvue 页面编译后部分样式失效的Bug
  + 钉钉小程序 修复 真机使用 uni.request 发送 content-type 为 application/json 的请求时报错的Bug [详情](https://ask.dcloud.net.cn/question/97570)
* 【uniCloud】
  + 新增 HBuilderX 支持上传所有云函数及公共模块 （cloudfunctions目录，右键菜单，上传所有云函数及公共模块）
  + 新增 HBuilderX 限制新建云函数名称不能为common，避免与公共模块冲突
  + 修复 钉钉小程序真机上传文件到云存储报错的Bug [详情](https://ask.dcloud.net.cn/question/97570)
  + 腾讯云 优化 HBuilderX开发调试期间访问云函数的性能
  + 腾讯云 修复 上传文件时不进入onUploadProgress的Bug [详情](https://ask.dcloud.net.cn/question/97532)
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】Android平台 新增 UniPush 支持谷歌推送FCM [文档](https://ask.dcloud.net.cn/article/37356)
  + Android平台 修复 uni-AD 腾讯广点通信息流广告可能显示不全的Bug [详情](https://ask.dcloud.net.cn/question/97376)
  + Android平台 修复 uni-AD 今日头条穿山甲点击广告开始下载后不能暂停或取消的Bug
  + Android平台 修复 uni-AD 创建信息流广告控件 createAdView 没有设置 id 时可能导致在当前页面无法再次创建的Bug
  + Android平台 修复 软键盘状态变化事件 keyboardchange 监听后回调不触发的Bug [详情](https://ask.dcloud.net.cn/question/97070)
  + iOS平台 修复 原生导航标题栏动态更新按钮样式 setTitleNViewButtonStyle 可能导致图标显示异常的Bug [详情](https://ask.dcloud.net.cn/question/96426)

#### 2.7.8.20200525-alpha
* 【uni-app】
  + 小程序平台 修复 组件 class 属性无值时报错的Bug
  + uni统计 修复 2.7.0.20200501-alpha 引出的统计数据上报不完整，导致uni统计日活偏少的Bug
  + App-Android平台 修复 tabbar 页面在部分手机可能高度显示不正确的Bug

#### 2.7.7.20200522-alpha
* 【uni-app】
  + App平台 修复 HBuilderX 2.7.6 引出的纯nvue项目编译出错的Bug [详情](https://ask.dcloud.net.cn/question/97264)
  + App-Android平台 修复 HBuilderX2.7.0 引出的 uni.request 网络请求 header 设置参数设置 content-type 无效的Bug [详情](https://ask.dcloud.net.cn/question/97246)
  + App-iOS平台 修复 pages.json 设置窗口背景色 backgroundColor 可能引起页面背景色不正确的Bug

#### 2.7.6.20200521-alpha
* 【uni-app】
  + 【重要】支持运行和发布到 360小程序 [详情](https://uniapp.dcloud.io/matter?id=mp-360)
  + App平台 修复  class 名称中含有 rpx、upx 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/96981)
  + App-Android平台 修复 HBuilderX2.7.0 引出的 uni.hideTabBar 隐藏 tabbar 后页面高度可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/96244)
  + App-Android平台 修复 nvue textarea 组件获取焦点后在部分手机可能会被软键盘遮挡的Bug [详情](https://ask.dcloud.net.cn/question/96914)
  + App-Android平台 修复 nvue live-pusher 组件调用 pause 方法暂停推流后依然录音的Bug [详情](https://ask.dcloud.net.cn/question/96411)
  + App-Android平台 修复 nvue web-view 组件中 input 标签设置 type 为 file 时无法选择文件的Bug [详情](https://ask.dcloud.net.cn/question/95220)
  + App-iOS平台 修复 vue 页面回弹无效果的Bug [详情](https://ask.dcloud.net.cn/question/91356)
  + App-iOS平台 修复 nvue ad 组件在 list 中使用可能引起滚动卡顿的Bug
  + App-iOS平台 修复 nvue web-view 组件在页面关闭时可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/97064)
  + H5平台 修复 配置基础路径为 ./ 打包后 image 组件显示异常的Bug [详情](https://ask.dcloud.net.cn/question/96767)
* 【uniCloud】
  + 【重要】 腾讯云开放，不再需要邮件申请
* 【App插件(含5+App和uni-app的App端)】
  + 新增 原生导航标题栏 titleNView 的 titleIconWidth 支持设置标题图标宽度
  + 新增 原生导航标题栏 titleNView 的 searchInput 搜索框支持清除按钮
  + 修复 原生导航标题栏 titleNView 的 titleIcon 设置 base64 图标无法支持 gif 格式图片的Bug
  + Android平台 更新 uni-AD 腾讯广点通SDK版本为4.211.1081
  + Android平台 更新 UniPush 使用的个推SDK谷歌渠道版本为4.3.8.0
  + Android平台 修复 uni-AD 腾讯广点通开屏广告可能拉伸变形显示的Bug
  + Androad平台 修复 uni-AD 开屏广告在刘海屏手机上跳过按钮可能被遮挡的Bug
  + Android平台 修复 视频播放 video 全屏时在刘海屏手机上控制栏可能被遮挡的Bug
  + Android平台 修复 页面中 input 标签 type 为 file 点击打开的选择页面不支持国际化的Bug
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK版本为3.0.0.1
  + iOS平台 修复 初始化蓝牙模块 openBluetoothAdapter 可能在没有打开蓝牙时也会返回成功回调的Bug
  + iOS平台 修复 previewImage 预览图片连续快速滑动时可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/96445)
  + iOS平台 修复 原生导航标题栏 titleNView 动态设置 type 为 transparent 可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/96556)

#### 2.7.4.20200515-alpha
* 【uni-app】
  + App-Android平台 修复 真机运行时提示HBuilderX版本与手机端SDK版本不匹配的Bug
* 【uniCloud】
  + 阿里云 优化 云函数冷启动时间，经测试冷启动时间平均减少800ms

#### 2.7.3.20200514-alpha
* 【uni-app】
  + App平台 修复 css 中静态资源路径解析不正确的Bug
  + App-iOS平台 修复 HBuilderX2.7.0 引出的配置底部安全区原生占位后，tabbar 动态更新 backgroundColor、backgroundImage 不生效的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.8，解决在部分设备可能出现启动时崩溃的Bug

#### 2.7.2.20200513-alpha
* 【uni-app】
  + 优化 pages.json 兼容 subPackages 与 subpackages 写法
  + App平台、H5平台 修复 swiper 组件设置 current 时滚动方向错误的Bug [详情](https://ask.dcloud.net.cn/question/94961)
  + App平台 修复 页面 onLoad 参数部分情况不正确的Bug
  + App平台 修复 cover-image 组件部分情况显示不全的Bug [详情](https://ask.dcloud.net.cn/question/94554)
  + App平台 修复 storage 中读取 Array 类型数据解析不正确的Bug [详情](https://ask.dcloud.net.cn/question/96139)
  + App-Android平台 修复 v3版本 真机运行修改代码保存后应用重启，可能无法直接显示应用重启前页面的Bug
  + App-iOS平台 修复 nvue richtext 组件 lines、text-overflow 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/94667)
  + App-iOS平台 修复 tabBar 同时设置 blurEffect 和 backgroundColor 时 uni.getSystemInfo 获取到 windowBottom 错误的Bug
  + H5平台 优化 video 组件支持 show-center-play-btn 配置
  + H5平台 修复 storage 中读取 Date 类型数据解析不正确的Bug [#1661](https://github.com/dcloudio/uni-app/issues/1661)
  + H5平台 修复 Safari 浏览器横屏状态获取宽度错误的Bug [详情](https://ask.dcloud.net.cn/question/95997)
  + 微信小程序平台 修复 页面中同一个组件多个实例相同作用域插槽异常的Bug [#1662](https://github.com/dcloudio/uni-app/issues/1662)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 音频 audio 播放网络音频资源缓冲时间过长的Bug [详情](https://ask.dcloud.net.cn/question/93427)
* 【uni小程序SDK】
  + iOS平台 修复 video 组件退出全屏后页面布局错位的Bug

#### 2.7.1.20200510-alpha
* 【uni-app】
  + 修复 easycom 组件优先级高于用户组件同名组件的Bug
  + App平台 新增 tabbar 支持 backgroundImage 属性设置背景图片及渐变色
  + App平台 优化 短时间内调用 uni.navigateTo 避免重复跳转页面
  + App平台 修复 页面生命周期 onUnload 部分表现与旧版表现不一致的Bug [详情](https://ask.dcloud.net.cn/question/94649)
  + App平台 修复 picker 组件点击事件不冒泡的Bug [详情](https://ask.dcloud.net.cn/question/95716)
  + App平台 修复 picker 组件打包后不显示的Bug [详情](https://ask.dcloud.net.cn/question/96014)
  + App平台 修复 video 组件打包后不显示进度条的Bug [详情](https://ask.dcloud.net.cn/question/95946)
  + App平台 修复 editor 组件 br 标签不解析的Bug [详情](https://ask.dcloud.net.cn/question/95819)
  + H5平台 修复 tabBar 页面 redirectTo 到其他页面，tabBar 仍然显示的Bug [详情](https://ask.dcloud.net.cn/article/36364)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 Webview窗口标题栏 titleNView 的 titleIcon 支持 GIF 格式动图
  + Android平台 修复 数据库执行查询SQL语句读取 REAL、BIGINT 等类型数值丢失精度的Bug [详情](https://ask.dcloud.net.cn/question/92964)
  + Android平台 修复 plus.gallery.save 保存网络图片成功后在系统相册中可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/75901)
  + Android平台 修复 使用 X5 Webview 内核渲染时，标题栏搜索框 searchinput 设置 autoFocus 为 true 可能无法自动获取焦点的Bug
  + Android平台 修复 使用 X5 Webview 内核渲染时，广告、视频等原生组件可能无法滚动的Bug
  + iOS平台 修复 在 iPad 设备横屏时 getSafeAreaInsets 获取安全区域的 top 值不正确的Bug [详情](https://ask.dcloud.net.cn/question/95645)
  + iOS平台 修复 Webview窗口标题栏搜索框 searchinput 动态修改 align 属性不生效的Bug

#### 2.7.0.20200501-alpha
* 【uni-app】
  + 【重要】 调整 App平台 自定义组件编译模式下线，应用默认以v3编译模式运行。并在manifest去除相关概念。包体积减少3M [详情](https://ask.dcloud.net.cn/article/36988)
  + 【重要】 调整 uni统计默认不再自动开启，需要此服务请手动在manifest中打开 [详情](https://ask.dcloud.net.cn/article/37234)
  + uni-app cli版支持发行到快应用平台 [详情](https://ask.dcloud.net.cn/article/37182)
  + App平台、H5平台 修复 textarea 组件 word-break 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/95172)
  + App平台、H5平台 新增 支持 onNavigationBarSearchInputFocusChanged 生命周期
  + App平台 优化 在去掉自定义组件模式的情况下保证 weex 编译模式仍然可用（nvueCompiler：weex）。但推荐开发者尽快迁移到uni-app编译模式
  + App平台 修复 input、textarea 组件快速输入时光标抖动的Bug [详情](https://ask.dcloud.net.cn/question/90460)
  + App平台 修复 pages.json 缺少 globalStyle 节点白屏的Bug
  + App平台 修复 picker 组件日期模式缺少 start 或 end 无法选择的Bug
  + App平台 修复 uni.onKeyboardHeightChange 重复监听的Bug [详情](https://ask.dcloud.net.cn/question/91818)
  + App平台 修复 downloadTask.abort 不生效的Bug [详情](https://ask.dcloud.net.cn/question/93342)
  + App平台 修复 uni.showModal 方法 content 不可为空的Bug [详情](https://ask.dcloud.net.cn/question/87180)
  + App平台 修复 nvue button 组件某些情况下 loading 样式异常的Bug [详情](https://ask.dcloud.net.cn/question/95422)
  + App平台 新增 nvue scrollview、list、waterfall、recycle-list等组件支持 scroll-top、scroll-left 属性
  + App平台 新增 video 组件支持 controlstoggle 事件
  + H5平台 修复 启用摇树优化后可能导致uniCloud功能不正常的Bug [详情](https://ask.dcloud.net.cn/question/94993)
  + 支付宝小程序 修复 uni.scanCode 设置 scanType 无效的Bug [#1578](https://github.com/dcloudio/uni-app/issues/1578)
  + uni-ui 新增 uni-drawer 组件 width 属性（仅在 vue 页面生效）、maskClick 属性，点击遮罩是否关闭抽屉
  + uni-ui 新增 uni-goods-nav 组件角标的前景色和背景色设置
  + uni-ui 新增 uni-popup 组件的信息提示、对话框、底部分享示例三种组件扩展样式
  + uni-ui 优化 uni-drawer 组件废弃 visible 属性，改用 open()、close() 方法开关抽屉，避免在某些场景不能正常关闭的 Bug
  + uni-ui 优化 uni-popup 组件部分代码逻辑，可支持自定义扩展组件
  + uni-ui 修复 uni-drawer 组件 close 回调执行两遍的 Bug
  + uni-ui 修复 uni-goods-nav 组件 buttonGroup 属性修改 color 颜色不生效的 Bug 
  + uni-ui 修复 uni-popup 组件内放置 input/textarea 获取不到焦点的 Bug
  + uni-ui 修复 uni-swipe-action 组件在 iOS13 中按钮点击失效或点击错位的 Bug
* 【uniCloud】
  + web控制台 调整 取消云存储文件类型限制。可用于托管App的apk或wgt下载
  + 阿里云 修复 某些情况下 neq 操作符无法正常使用的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 修复 Webview窗口标题栏 titleNView 调用 setTitleNViewButtonStyle 动态更新按钮属性可能不生效的Bug
  + 【重要】Android平台 调整 云端打包时默认不再包含 x86 CPU类型库，减少apk包体积 [详情](https://ask.dcloud.net.cn/article/36195#nox86)
  + Android平台 更新 uni-AD 腾讯广点通SDK版本为4.191.1061，今日头条穿山甲SDK版本为2.9.5.5，360广告SDK版本为4.14.3151
  + Android平台 更新 UniPush 使用的个推SDK版本为2.14.0.0，解决由于部分厂商推送SDK版本过低导致在新设备无法接收离线推送消息的问题
  + Android平台 优化 提交应用市场检查可能误报 Trojan-Dropper.AndroidOS.Agent 病毒的问题
  + Android平台 修复 storage 存储数据内容超过 2M 后无法正常获取的Bug [详情](https://ask.dcloud.net.cn/question/93875)
  + Android平台 修复 input 输入框获取焦点后可能无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/95119)
  + Android平台 修复 setUserAgent 设置 UA 可能引起应用概率性卡死的Bug [详情](https://ask.dcloud.net.cn/question/94668)
  + Android平台 修复 previewImage 预览图片界面顶部数字指示器在刘海屏手机上被遮挡的Bug [详情](https://ask.dcloud.net.cn/question/90222)
  + Android平台 修复 应用锁定横屏或竖屏后 previewImage 预览图片界面仍然可以横竖屏切换的Bug [详情](https://ask.dcloud.net.cn/question/94686)
  + iOS平台 修复 Webview窗口标题栏 titleNView 上按钮设置 select 属性，点击后下拉指示图标消失的Bug [详情](https://ask.dcloud.net.cn/question/92505)
  + iOS平台 修复 pick 从相册选择视频文件时只能使用默认压缩模式，无法选取原始视频的Bug [详情](https://ask.dcloud.net.cn/question/93738)
  + iOS平台 修复 在 iPad 设备横屏时状态栏消失的Bug [详情](https://ask.dcloud.net.cn/question/95284)

#### 2.6.16.20200427-alpha
* 【uni-app】
  + App平台、H5平台 修复 text 组件调整换行解析导致兼容问题的Bug [详情](https://ask.dcloud.net.cn/question/94473)
  + App平台、H5平台 修复 input、textarea 组件失去焦点时导致页面滚动到顶部的Bug [详情](https://ask.dcloud.net.cn/question/94065)
  + App平台、H5平台 修复 部分组件文本前后出现多余空格或换行的Bug [详情](https://ask.dcloud.net.cn/question/94802)
  + App平台 修复 非v3编译模式小程序组件事件监听报错的Bug [详情](https://ask.dcloud.net.cn/question/94377)
  + H5平台 修复 manifes.json 内 template 配置的模板文件不存在时框架样式错误的Bug
  + H5平台 修复 uni.chooseImage 返回的 tempFilePaths 为空Bug [详情](https://ask.dcloud.net.cn/question/94805)
* 【uniCloud】
  + 修复 某些情况下，公共模块上传失败的Bug [详情](https://ask.dcloud.net.cn/question/93580)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 使用 X5 Webview 内核渲染 plus.navigator.getUserAgent 获取 UA 不正确的Bug
  + Android平台 修复 新浪微博登录时选择不授权，返回后无法再次调用登录授权的Bug [详情](https://ask.dcloud.net.cn/question/93971)
* 【uni小程序SDK】
  + Android平台 修复 小程序启动直达 nvue 页面 query 参数丢失的Bug

#### 2.6.14.20200420-alpha
* 【uni-app】
  + 【重要】App平台 修复 v3版本 组件之间样式隔离，解决历史项目升级v3后，部分样式错乱问题 [详情](https://ask.dcloud.net.cn/question/91501)
  + App平台、H5平台 新增 EditorContext.insertImage 支持 width、height、extClass、data 配置
  + App平台、H5平台 修复 scroll-view 子元素使用百分比尺寸时大小不正确的Bug
  + App平台、H5平台 修复 input 组件设置 value 为 null 时显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/93729)
  + App平台、H5平台 修复 iOS设备键盘收起可能引起页面显示与点击位置错位的Bug [详情](https://ask.dcloud.net.cn/question/93818)
  + App平台 优化 v3版本 事件对象，支持 json 序列化输出 [详情](https://github.com/dcloudio/uni-app/issues/1559)
  + App平台 修复 vue 页面与 nvue 页面引用相同组件，条件编译失效的Bug
  + App平台 修复 v3版本 button 组件 open-type 为 feedback 不生效的Bug
  + App平台 修复 v3版本 picker-view 组件嵌套在 uni-pop 组件内渲染不正确的Bug [详情](https://ask.dcloud.net.cn/question/93606)
  + App平台 修复 v3版本 webview 组件 src 为空时显示错误页面的Bug
  + App平台 修复 v3版本 map 组件更新 marker 影响 polyline 的Bug [详情](https://ask.dcloud.net.cn/question/93944)
  + App平台 修复 v3版本 image 组件 widthFix 模式动态修改大小时不生效的Bug [详情](https://ask.dcloud.net.cn/question/93874)
  + App平台 修复 uni.openLocation 显示位置错误的Bug [详情](https://ask.dcloud.net.cn/question/85402)
  + App-Android平台 修复 nvue rich-text 组件 img 标签可能不显示的Bug [详情](https://ask.dcloud.net.cn/question/93388)
  + App-Android平台 修复 nvue input 组件 font-size 值设置过大时光标可能不显示的Bug [详情](https://ask.dcloud.net.cn/question/93283)
  + App-Android平台 修复 vue map 组件 marker 属性打包后图片不显示的Bug [详情](https://ask.dcloud.net.cn/question/92358)
  + App-Android平台 修复 nvue 页面跳转到 vue 页面后，input 组件获得焦点时可能无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/89769)
  + App-iOS 修复 uni.onBLEConnectionStateChange 不触发的bug
  + App-iOS 修复 uni.chooseImage 从相机选择图片分辨率过低的Bug [详情](https://ask.dcloud.net.cn/question/91502)
  + 小程序平台 修复 map 组件 @markertap 事件获取不到 markerId 的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.6
  + iOS平台 修复 uni-AD 腾讯广点通的信息流视频广告自动播放时没有静音的Bug
  + iOS平台 修复 iOS 13.4.1及以上版本在 iPad 设备应用第一次启动获取不到所有窗口对象的Bug [详情](https://ask.dcloud.net.cn/question/93308)
  + iOS平台 修复 视频播放控件 VideoPlayer 全屏时在 iPhoneX 可能出现亮度控制视图位置错乱的Bug [详情](https://ask.dcloud.net.cn/question/87370)
* 【uni小程序SDK】
  + iOS平台 补齐 wgt 编译版本与js框架版本校验，不一致会弹窗提示 [详情](https://ask.dcloud.net.cn/article/35627)
  + iOS平台 修复 小程序内 wgt 热更新资源后启动会显示一下 LaunchScreen.storyboard 页面的Bug

#### 2.6.13.20200414-alpha
* 【uni-app】
  + 支付宝小程序平台 修复 部分情况下编译失败的Bug
  + App-Android平台 修复 v2版本apk使用wgt升级资源后，用v3版本apk覆盖安装无法进入应用的Bug [详情](https://ask.dcloud.net.cn/question/93426)
* 【App插件(含5+App和uni-app的App端)】
  + 修复 打包模块勾选 iOS UIWebview/Android X5 Webview 后，wgt升级更新失败触发错误回调的Bug [详情](https://ask.dcloud.net.cn/question/93447)
  + Android平台 修复 确认模态框 confirm 显示时会弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/93574)
  + iOS平台 修复 HBuilderX2.6.8 引出的Webview窗口 userAgent 不正确可能导致加载的页面内部逻辑不正确的Bug [详情](https://ask.dcloud.net.cn/question/93284)
  + iOS平台 修复 uni-AD 腾讯广点通部分视频激励广告点击关闭按钮触发 onClose 事件参数中 isEnded 属性可能为 false 的Bug

#### 2.6.12.20200412-alpha
* 【uni-app】
  + App平台 修复 无法获取音频暂停状态的Bug [详情](https://ask.dcloud.net.cn/question/92714)
  + App平台 修复 renderjs 中未绑定到 change:prop 的数据变更也会触发 change 事件的Bug [详情](https://ask.dcloud.net.cn/question/91887)
  + App平台 修复 v3版本 uni.arrayBufferToBase64 某些参数无法支持的Bug [详情](https://ask.dcloud.net.cn/question/92720)
  + App平台 修复 v3版本 使用小程序组件在低版本系统报错的Bug [详情](https://ask.dcloud.net.cn/question/92561)
  + App平台 修复 v3版本 text 组件首尾换行解析不正确的Bug
  + App平台 修复 v3版本 uni.canvasToTempFilePath 在低版本系统报错的Bug [详情](https://ask.dcloud.net.cn/question/92189)
  + App平台 修复 v3版本 调用 socketTask.close 不传参数报错的Bug
  + App平台 修复 v3版本 RecorderManager 事件重复执行的Bug [详情](https://ask.dcloud.net.cn/question/91885)
  + App平台 修复 v3版本 form 组件 submit 事件内无法获取 picker 值的Bug [#1545](https://github.com/dcloudio/uni-app/issues/1545)
  + App平台 修复 v3版本 uni.createBLEConnection 没有被 Promisify 的Bug [#1543](https://github.com/dcloudio/uni-app/issues/1543)
  + App-Android平台 修复 uni.sendSocketMessage 无法发送某些 bytebuffer 数据的Bug [详情](https://ask.dcloud.net.cn/question/92700)
  + App-Android平台 修复 nvue list/waterfall 组件底部使用 loading 加载更多时，无法正常触发 @loading 事件的Bug [详情](https://ask.dcloud.net.cn/question/93190)
  + App-Android平台 修复 nvue list 组件 @scroll 事件返回参数 contentOffset.y 值域不正确的Bug [详情](https://ask.dcloud.net.cn/question/92872)
  + App-Android平台 修复 nvue input 组件设置 type 为 digit/number 时弹出键盘类型不正确的问题
  + App-Android平台 修复 tabBar 页面设置 titleNView 的 type 为 transparent 滚动时标题栏透明度不发生变化的Bug
  + App-iOS平台 修复 nvue video 组件设置 @click 事件后，视频底部控制栏上除进度条以外的其他按钮失效的Bug [详情](https://ask.dcloud.net.cn/question/92727)
  + App-iOS平台 修复 v3模式 movable-area 组件嵌套 scroll-view 组件点击事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/92638)
  + H5平台 优化 uni.request 增加 withCredentials 参数，支持配置跨域请求时是否携带凭证（cookies）
  + H5平台 优化 uni.uploadFile 增加 files 参数，支持上传多个文件
  + H5平台 优化 uni.uploadFile 增加 file 参数，支持上传原始 File 对象
  + H5平台 优化 uni.chooseVideo、uni.chooseImage 支持返回原始 File 对象
  + H5平台 修复 base为相对路径 ./ 时，相对路径的静态资源加载失败的Bug [详情](https://ask.dcloud.net.cn/question/92910)
  + 小程序平台 修复 条件编译中引用静态资源始终生效的Bug [#1542](https://github.com/dcloudio/uni-app/issues/1542)
  + 小程序平台 修复 启用分包优化后，当分包路径相似时 vendor 生成不正确Bug [#1440](https://github.com/dcloudio/uni-app/issues/1440)
  + 支付宝小程序平台 修复 uni.getFileInfo 提示参数不正确的Bug
* 【uniCloud】
  + 阿里云 新增 支持云函数定时触发
  + 阿里云 新增 HBuilderX内置浏览器运行H5项目时，可在前端控制台直接打印云函数的日志
  + 阿里云 优化 云函数上传并运行时有时不能立即生效的问题
  + 阿里云 修复 抖音小程序iOS端上传文件失败的Bug [详情](https://ask.dcloud.net.cn/question/93130)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 原生导航标题栏的 titleIcon 支持 base64 图标，方便页面里已经存在的图标在滚动时绘制在原生导航栏上
  + 新增 actionSheet 取消按钮文字国际化（如设置按钮文字，则以设置文字为准，如未设置，则根据手机系统的语言显示）
  + Android平台 新增 pop-in/pop-out 动画时通过 animationAlphaBGColor 设置动画蒙层背景色，可用于避免暗色风格页面转场动画的蒙层偏白 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyles)
  + Android平台 修复 uni-AD 腾讯广点通部分视频激励广告播放 30 秒后点击关闭按钮触发 onClose 事件参数中 isEnded 属性可能为 false 的Bug
  + Android平台 修复 Webview窗口对象 loadURL 方法没有触发 overrideUrlLoading 拦截回调函数的Bug [详情](https://ask.dcloud.net.cn/question/92689)
  + Android平台 修复 显示系统软键盘 plus.key.showSoftKeybord 多次调用会触发关闭软键盘的Bug
  + Android平台 修复 storage存储键值通过 setItem 方法传入 value 为空字符串后，通过 getItem 方法返回 null 的Bug
  + Android平台 修复 同时创建两个音频播放对象，其中一个音频暂停后另一个无法播放的Bug
  + Android平台 修复 视频播放控件 VideoPlayer 播放部分 rtmp 链接可能无声音的Bug
  + iOS平台 修复 原生导航标题栏 设置 type 为 float 时，backgroundColor 的半透明效果显示不正确的Bug

#### 2.6.10.20200403-alpha
* 【uni-app】
  + 【重要】 App平台 调整 manifest中默认的编译模式为v3模式。如需要切换为老版自定义组件模式，需要在 manifest可视化界面 - App其他常用设置 中，去掉v3编译模式
  + 【重要】 App平台 新增 v3版本 支持纯 nvue 编译模式。两种模式不再互斥
  + 【重要】 App平台 调整 v3版本 template 节点中引用静态资源文件时（如：图片），调整查找策略为【基于当前文件的路径搜索】，与其他平台保持一致
  + App平台、H5平台 优化 v3版本 uni.moveToLocation 支持 latitude、longitude 参数
  + App平台、H5平台 修复 多列 picker 组件部分情况修改 value 不生效的Bug
  + App平台 新增 激励视频广告支持服务器回调 [详情](https://uniapp.dcloud.io/api/a-d/rewarded-video-ad)
  + App平台 优化 控制台日志支持打印数组类型
  + App平台 修复 自定义组件编译模式使用 easycom 后在低版本设备白屏的Bug [详情](https://ask.dcloud.net.cn/question/92473)
  + App平台 修复 v3版本 判断浏览器专用 API（如：navigator）报错的Bug
  + App平台 修复 v3版本 uni.openLocation 点击导航栏返回后退2次的Bug [#1465](https://github.com/dcloudio/uni-app/issues/1465)
  + App平台 修复 v3版本 uni.moveToLocation 不执行回调的Bug
  + App平台 修复 v3版本 webview 组件无法收到 @message 的Bug [详情](https://ask.dcloud.net.cn/question/92296)
  + App平台 修复 v3版本 navigation-bar 组件 非首页某些属性无效的Bug
  + App-Android平台 修复 v3版本 SocketTask.onMessage 接收数据类型为 ArrayBuffer 时解析错误的Bug
  + App-Android平台 修复 nvue web-view 组件 src 属性的链接地址中带 query 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/92043)
  + App-Android平台 修复 nvue web-view、image 等组件 src 属性资源地址为_doc、_download路径时可能无法正常载入的Bug
  + App-iOS平台 修复 textarea 组件在 iOS13.4 系统报错的Bug
  + App-iOS平台 修复 nvue web-view 组件 src 属性加载本地 html 文件路径中带 query 参数时无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/91311)
  + App-iOS平台 修复 锁定横屏后打开 nvue 页面使用 plus.screen 获取屏幕宽高值不对的Bug
  + App-iOS平台 修复 v3版本 uni.canvasToTempFilePath 在 ios 9.3.4 报错的Bug [详情](https://ask.dcloud.net.cn/question/92189)
  + H5平台 修复 image 组件 某些情况下相对路径无法显示的Bug [详情](https://ask.dcloud.net.cn/question/92366)
  + 小程序平台 修复 调用取消事件监听类接口报错的Bug [#1511](https://github.com/dcloudio/uni-app/issues/1511)
* 【uniCloud】
  + 修复 使用阿里云时运行到App端不输出运行日志的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 激励视频广告支持服务器回调（限今日头条穿山甲广告） [文档](https://ask.dcloud.net.cn/article/37108)
  + 新增 Webview窗口标题栏 titleNView 的 titleIcon 支持网络图标路径
  + 新增 获取当前屏幕宽高信息接口 plus.screen.getCurrentSize [文档](https://www.html5plus.org/doc/zh_cn/device.html#plus.screen.getCurrentSize)
  + Android平台 修复 Webview窗口对象 loadURL 方法 headers 参数设置无效的Bug [详情](https://ask.dcloud.net.cn/question/87597)
  + Android平台 修复 在Android10上第一次安装后启动可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/90361)
  + Android平台 修复 应用标识 AppID 使用www结尾时导致部分资源无法正常载入的Bug [详情](https://ask.dcloud.net.cn/question/91217)
  + Android平台 修复 百度语音识别时在部分设备可能返回 4004 app name unknown 错误的Bug [详情](https://ask.dcloud.net.cn/question/90982)
  + Android平台 修复 设置应用图标显示角标数字 plus.runtime.setBadgeNumber 在部分设备超过100时仍然显示99的Bug [详情](https://ask.dcloud.net.cn/question/91452)
  + Android平台 修复 文件系统目录对象 DirectoryEntry 的 getFile 方法返回错误信息不准确的Bug
  + Android平台 修复 调用 plus.gellay.pick 通过QQ浏览器选择图片或视频在部分设备可能无响应的Bug
  + Android平台 修复 HBuilderX2.5.4引出的获取Cookie值 plus.navigator.getCookie 返回数据不正确的Bug
  + iOS平台 新增 Webview窗口使用WKWebview内核在iOS11及以上设备支持js原生混淆 [详情](https://ask.dcloud.net.cn/article/36437#wkwebview)
  + iOS平台 更新 支付宝Alipay SDK版本为15.7.4，解决AppStore审核报使用废弃UIWebview APIs的问题
  + iOS平台 更新 新浪微博登录、分享SDK版本为3.2.7，解决AppStore审核报使用废弃UIWebview APIs的问题
  + iOS平台 更新 今日头条穿山甲广告SDK版本为V2.9.5.0
  + iOS平台 修复 iOS 13.3及以上版本在 iPad 设备 plus.webview.all 无法获取所有Webview窗口的Bug [详情](https://ask.dcloud.net.cn/question/90517)
  + iOS平台 修复 iOS 13.3及以上版本在 iPad 设备 mui.openWindow 设置的窗口参数获取不到的Bug [详情](https://ask.dcloud.net.cn/question/91746)
  + iOS平台 修复 iOS 13及以上版本视频播放控件 VideoPlayer 全屏时可能出现亮度控制视图位置错乱的Bug [详情](https://ask.dcloud.net.cn/question/87370)
  + iOS平台 修复 视频播放控件 VideoPlayer 在下拉通知栏页面后依然播放的Bug [详情](https://ask.dcloud.net.cn/question/90627)
  + iOS平台 修复 预览图片 plus.nativeUI.previewImage 传入长图时显示不清楚的Bug [详情](https://ask.dcloud.net.cn/question/92083)
  + iOS平台 修复 应用安装后第一次启动 splash 界面显示不正常的Bug
  + iOS平台 修复 Webview窗口 setStyle 设置 {titleNView: false} 后通过 getSytle 获取的 titleNView 数据不正确的Bug
  + iOS平台 修复 Webview窗口标题栏 titleNView 动态设置 titleText 在某些情况下可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/92494)
* 【uni小程序SDK】
  + 新增 宿主与小程序通讯机制 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37122)
  + iOS平台 修复 在监听小程序被关闭的方法中紧接着在打开小程序可能会崩溃的Bug
  + iOS平台 修复 uni.chooseImage 引起内存泄露的Bug

#### 2.6.7.20200326-alpha
* 【uni-app】
  + App平台 新增 v3版本 支持动态插槽名
  + App平台 新增 v3版本 navigation-bar 组件 titleNView 配置 [详情](https://uniapp.dcloud.io/component/navigation-bar)
  + App平台 修复 v3版本 部分情况自定义组件内事件监听无效的Bug [详情](https://ask.dcloud.net.cn/question/91519)
  + App平台 修复 v3版本 动态绑定ref报错的Bug [#1458](https://github.com/dcloudio/uni-app/issues/1458)
  + App平台 修复 v3版本 textarea 组件 placeholder-class 无默认值的Bug [详情](https://ask.dcloud.net.cn/question/91373)
  + App平台 修复 v3版本 cover-view、cover-image 组件无法在自定义组件内使用的Bug [详情](https://ask.dcloud.net.cn/question/91345)
  + App平台 修复 v3版本 低功耗蓝牙某些接口在返回 ArrayBuffer 时被转为 base64 的Bug
  + App平台 修复 v3版本 uni.canvasPutImageData 无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/91672)
  + App平台 修复 v3版本 video 组件 timeupdate 事件回调错误的Bug [详情](https://ask.dcloud.net.cn/question/91769)
  + App-Android平台 修复 国产安卓模拟器 uni.getSystemInfo 获取设备宽高错误的Bug [详情](https://ask.dcloud.net.cn/question/90270)
  + App-Android平台 修复 HBuilderX2.6.6引出的 tabBar 设置图标云端打包后可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/91426)
  + App-iOS平台 修复 设备上使用第三方输入法收起键盘输入框无法失去焦点的Bug [详情](https://ask.dcloud.net.cn/question/91254)
  + App-iOS平台 修复 部分情况 page 设置 height 为 100% 无法全屏的Bug
  + App-iOS平台 修复 含 tabBar 页面使用原生占位时在 iPhoneX 获取窗口高度错误的Bug
  + App-iOS平台 修复 picker 设置 value 过大时会滚动到空白位置的Bug [详情](https://ask.dcloud.net.cn/question/89539)
  + App-iOS平台 修复 nvue 页面中加载 base64 格式 iconfont 文件在iOS13.4系统崩溃的Bug [详情](https://ask.dcloud.net.cn/question/91721)
  + H5平台 修复 带参数 url 直达部分情况参数解析失败的Bug [#1082](https://github.com/dcloudio/uni-app/issues/1082)
  + H5平台 修复 editor 组件 input 事件重复触发的Bug [详情](https://ask.dcloud.net.cn/question/91453)
  + H5平台 修复 editor 组件 statuschange 事件无法触发的Bug [详情](https://ask.dcloud.net.cn/question/91314)
  + H5平台 修复 picker 组件未设置 value 时报错的Bug [#1422](https://github.com/dcloudio/uni-app/issues/1422)
  + H5平台 修复 textarea 组件 placeholder-class 配置无效的Bug [详情](https://ask.dcloud.net.cn/question/86851)
* 【uniCloud】
  + 新增 腾讯云（限受邀内测用户）
  + 新增 uniCloud 支持通过模板创建公共模块（common目录，右键菜单，新建公共模块）
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 系统选择按钮框底部取消按钮UI显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/91265)
  + iOS平台 修复 云端打包启动页面中应用图标显示不清晰的Bug [详情](https://ask.dcloud.net.cn/question/91032)

#### 2.6.6.20200320-alpha
* 【uni-app】
  + 优化 静态资源引入方式 [详情](https://uniapp.dcloud.io/frame?id=resource)
  + 修复 内联 wxs 里包含“!”符号时报错的Bug [详情](https://ask.dcloud.net.cn/question/90581)
  + 修复 TypeScript 项目部分情况(存在 easycom 组件)，内置组件报未注册的Bug [#1400](https://github.com/dcloudio/uni-app/issues/1400)
  + 修复 uni.scss 内条件编译失效的Bug [详情](https://ask.dcloud.net.cn/question/90454)
  + 修复 vue.config.js 设置 transpileDependencies 失效的Bug [详情](https://ask.dcloud.net.cn/question/90068)
  + App平台、H5平台 修复 createAnimation 时 backgroundColor无效的Bug [详情](https://ask.dcloud.net.cn/question/91190)
  + App平台 调整 v3版本 使用 wx.xxx 方式调用接口不进行 Promise 封装
  + App平台 修复 热刷新页面参数被 encode 多次的Bug
  + App平台 修复 vue 页面 ad 组件 无法销毁的Bug
  + App平台 修复 uni.setNavigationBarColor 无法设置返回按钮的颜色的Bug
  + App平台 修复 tabBar 的 midButton 点击高出tabBar高度区域无响应的Bug [详情](https://ask.dcloud.net.cn/question/87821)
  + App平台 修复 纯 nvue 模式 uni.relaunch 会导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/89364)
  + App平台 修复 非v3编译模式 uni.getImageInfo 返回 path 不是本地路径的Bug [详情](https://ask.dcloud.net.cn/question/90689)
  + App平台 修复 v3版本 部分情况组件事件监听混乱，导致页面渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/91169)
  + App平台 修复 v3版本 fast 模式 storage相关API报错的Bug [详情](https://ask.dcloud.net.cn/question/90554)
  + App平台 修复 v3版本 通过 v-if 切换部分组件时报错的Bug [详情](https://ask.dcloud.net.cn/question/90200)
  + App平台 修复 v3版本 css 条件编译为非 nvue 页面报错 may not be supported 的Bug [详情](https://ask.dcloud.net.cn/question/90523)
  + App平台 修复 v3版本 await this.$nextTick() 触发时机不正确的Bug [详情](https://ask.dcloud.net.cn/question/87434)
  + App平台 修复 v3版本 切换到已显示 tabBar 页面时触发该页面 onHide 的Bug [详情](https://ask.dcloud.net.cn/question/91106)
  + App平台 修复 v3版本 从非 tabBar 页面调用 uni.switchTab 切换到一个已存在的 tabBar 页面，onShow 不执行的Bug
  + App平台 修复 v3版本 nvue 页面 swiper 组件的 @transition 事件在某些情况下回调不正确的Bug [详情](https://ask.dcloud.net.cn/question/88906)
  + App平台 修复 v3版本 swiper 组件作为插槽内容在其他组件中表现不正常的Bug [详情](https://ask.dcloud.net.cn/question/89853)
  + App平台 修复 v3版本 map 组件 @markertap、@callouttap 事件回调值错误的Bug [详情](https://ask.dcloud.net.cn/question/88656)
  + App平台 修复 v3版本 map 组件 @regionchange 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/88656)
  + App平台 修复 v3版本 nvue 页面 map 相关API：getRegion，getCenterLocation 无效的Bug [详情](https://ask.dcloud.net.cn/question/90327)
  + App平台 修复 v3版本 canvas 组件宽度或高度为0时报错的Bug [详情](https://ask.dcloud.net.cn/question/90647)
  + App平台 修复 v3版本 部分情况下绘制 canvas 组件报错的Bug [详情](https://ask.dcloud.net.cn/question/90328)
  + App平台 修复 v3版本 uni.canvasToTempFilePath 配置 fileType 参数不生效的Bug [详情](https://ask.dcloud.net.cn/question/89273)
  + App平台 修复 v3版本 uni.previewImage 参数 longPressActions 无效的Bug
  + App平台 修复 v3版本 uni.sendSocketMessage 发送 ArrayBuffer 类型数据报错的Bug [详情](https://ask.dcloud.net.cn/question/90434)
  + App平台 修复 v3版本 socketTask.onOpen 内调用 socketTask.send 报错的Bug
  + App平台 修复 v3版本 uni.createBLEConnection 回调不触发的Bug
  + App平台 修复 v3版本 uni.readBLECharacteristicValue 无法读取特征值数据的Bug
  + App平台 修复 v3版本 uni.writeBLECharacteristicValue 写入二进制数据报错的Bug
  + App平台 修复 v3版本 subNvue style 内的 mask 属性被错误的应用在 subNvue 上的Bug [详情](https://ask.dcloud.net.cn/question/91097)
  + App平台 新增 nvue 页面 list 组件支持 setSpecialEffects 方法，实现 swiper-list 吸顶滚动效果 [文档](https://uniapp.dcloud.io/component/list?id=setSpecialEffects)
  + App平台 修复 nvue 页面 v-slot:slotname 值为空时报错的Bug
  + App平台 修复 nvue 页面 修复部分情况下 createLivePusherContext 无法正确获取 live-pusher 上下文的Bug
  + App平台 修复 nvue 页面 map 组件 markers、polyline、polygons、circles 属性无法重置的Bug [详情](https://ask.dcloud.net.cn/question/86786)
  + App平台 修复 nvue 页面 自定义组件中无法正常使用 video 相关 API 的Bug [详情](https://ask.dcloud.net.cn/question/90877)
  + App-Android平台 优化 storage 相关 API 性能 [注意事项](https://ask.dcloud.net.cn/article/37071)
  + App-Android平台 修复 pages.json 内配置 softinputMode 为 adjustResize 部分情况下失效的Bug [详情](https://ask.dcloud.net.cn/question/90145)
  + App-Android平台 修复 nvue video 组件在页面中存在多个且包含 cover-view 全屏播放时闪退的Bug [详情](https://ask.dcloud.net.cn/question/88718)
  + App-Android平台 修复 nvue video 组件设置 click 事件后视频操作按钮无法触发的Bug [详情](https://ask.dcloud.net.cn/question/90291)
  + App-Android平台 修复 nvue waterfall 组件加入 Refresh 后item排版错乱的Bug [详情](https://ask.dcloud.net.cn/question/83130)
  + App-Android平台 修复 tabBar 的 midButton 设置 backgroundImage 显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/89800)
  + App-Android平台 修复 v3版本 map 组件绑定宽高后无法动态修改的Bug [详情](https://ask.dcloud.net.cn/question/89771)
  + App-Android平台 修复 v3版本 nvue 为首页时 autoclose 设置为 false 也会自动关闭启动页的Bug [详情](https://ask.dcloud.net.cn/question/90080)
  + App-iOS平台 新增 API uni.onUIStyleChange 监听系统主题状态变化（限v3） [详情](https://uniapp.dcloud.io/api/system/theme?id=onuistylechange)
  + App-iOS平台 优化 API uni.showActionSheet 在 iPad 设备支持 popover 设置弹出指示区域（限v3）
  + App-iOS平台 修复 HBuilderX2.6.4引出的调用 API uni.setClipboardData 可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/90439)
  + App-iOS平台 修复 HBuilderX2.6.4引出的调用 uni.showToast 可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/90520)
  + App-iOS平台 修复 配置底部安全区原生占位后，非 tabBar 页面获取的窗口高度错误的Bug
  + H5平台 优化 支持 manifest.json 配置 h5->router->base 值为 "./" 部署到相对路径
  + H5平台 修复 pages.json 配置 navigationBarShadow 无效的Bug [#607](https://github.com/dcloudio/uni-app/issues/607)
  + H5平台 修复 配置 transparentTitle 为 always 失效的Bug [详情](https://ask.dcloud.net.cn/question/91135)
  + H5平台 修复 解决PC模式图像预览页面滑动会关闭的Bug
  + H5平台 修复 部分情况下 webview 组件位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/90987)
  + H5平台 修复 picker 组件 mode=time 失效的Bug [#1421](https://github.com/dcloudio/uni-app/issues/1421)
  + 微信小程序平台 修复 组件缺少 script 节点时运行报错的Bug [#1411](https://github.com/dcloudio/uni-app/issues/1411)
  + hello uni-app 新增 swiper-list 模板
* 【uniCloud】
  + 新增 公共函数功能 [详情](https://uniapp.dcloud.io/uniCloud/quickstart?id=common)
  + 修复 客户端上传文件在web控制台显示大小为0的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 原生标题栏支持自定义返回按钮角标、标题图标、副标题等功能 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + 修复 Webview窗口的 WebviewEvent 事件回调函数参数没有 target 属性的Bug [详情](https://ask.dcloud.net.cn/question/90403)
  + Android平台 优化 本地数据存储 plus.storage 性能，新增异步操作接口 [注意事项](https://ask.dcloud.net.cn/article/37071)
  + Android平台 修复 uni-AD 激励视频云端打包勾选穿山甲，广告平台没有通过审核时可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/91251)
  + Android平台 修复 提交华为应用市场检查可能误报 TrojanDropper.Agent.EIY 病毒的Bug
  + Android平台 修复 页面中a标签设置非法链接后，点击可能出现应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/90425)
  + Android平台 修复 在部分华为手机上修改文件名之后，使用input标签type为file时获取文件名称可能为随机数字的Bug
  + Android平台 修复 Webview窗口标题栏（titleNView）设置type为transparent时，其它原生控件（如VideoPlayer）可能会覆盖标题栏的Bug [详情](https://github.com/dcloudio/uni-app/issues/1298)
  + Android平台 修复 页面中input标签触发软键盘收回时可能影响 WebviewStyles 中的top属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/91003)
  + Android平台 修复 HBuilderX2.6.4引出的Webview窗口标题栏（titleNView）动态修改 titleColor 不生效的Bug
  + Android平台 修复 获取UA值 plus.navigator.getUserAgent 返回为空的Bug [详情](https://ask.dcloud.net.cn/question/89762)
  + Android平台 修复 视频播放控件 VideoPlayer 跳转到指定位置之后，弹幕仍然按照之前的进度播放的Bug
  + Android平台 修复 视频播放控件 VideoPlayer 未指定 direction 时没有根据视频的宽高自动选择 direction 的Bug [详情](https://ask.dcloud.net.cn/question/89600)
  + Android平台 修复 地图控件 setCenter 后不触发 onstatuschanged 事件的Bug [详情](https://ask.dcloud.net.cn/question/48182)
  + Android平台 修复 在Android4.4系统设备无法正常运行的Bug
  + 【重要】iOS平台 新增 UIWebview独立模块，默认不再包含UIWebview相关代码 [详情](https://ask.dcloud.net.cn/article/36348#uiwebview)
  + iOS平台 新增 系统选择按钮框 plus.nativeUI.actionSheet 在iPad设备支持 popover 设置弹出指示区域 [文档](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.ActionSheetStyles)
  + iOS平台 新增 本地数据存储 plus.storage 异步操作接口 [文档](https://www.html5plus.org/doc/zh_cn/storage.html)
  + iOS平台 更新 友盟统计SDK版本为6.1.0
  + iOS平台 更新 微信登录、分享、支付SDK版本为1.8.6.2
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 show-center-play-btn 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/90673)
  + iOS平台 修复 Webview窗口标题栏（titleNView）中 button 按钮设置 colorPressed 不生效的Bug [详情](https://ask.dcloud.net.cn/question/90616)
  + iOS平台 修复 新浪微博分享 type 为 web 类型时 pictures 属性不生效的Bug
  + iOS平台 修复 系统选择按钮框 plus.nativeUI.actionSheet 显示后不关闭，通过HBuilderX真机运行更新资源可能引起崩溃的Bug
* 【uni小程序SDK】
  + 新增 获取当前显示小程序页面直达Url方法（用于启动直达二级页面）[iOS](https://ask.dcloud.net.cn/article/37068#getCurrentPageUrl)、[Android](https://ask.dcloud.net.cn/article/36984#getCurrentPageUrl)
  + 新增 获取已部署的小程序资源版本信息方法 [iOS](https://ask.dcloud.net.cn/article/37068#getUniMPVersionInfo)、[Android](https://ask.dcloud.net.cn/article/36984#getAppVersionInfo)
  + 新增 胶囊按钮添加点击效果
  + 开放 小程序内部调用 plus.runtime.install 热更新wgt资源 [详情](https://ask.dcloud.net.cn/article/35667)
  + iOS平台 修复 原生工程勾选 'Hide status bar' 导致小程序页面导航栏被系统状态栏挡住的Bug
  + iOS平台 修复 pickDate、pickTime 无法显示的Bug

#### 2.6.4.20200310-alpha
* 【uni-app】
  + App平台 新增 uni.shareWithSystem 调用系统分享组件发送分享消息 [详情](https://uniapp.dcloud.io/api/plugins/share?id=sharewithsystem)
  + App平台 修复 非 v3编译模式 webview 组件高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/89683)
  + App平台 修复 v3版本 uni.request 的 header 内使用小写的 content-type 会报错的Bug [详情](https://ask.dcloud.net.cn/question/90214)
  + App平台 修复 v3版本 vue 页面热刷新时 onLoad 参数被重复编码的Bug
  + App平台 修复 v3版本 vue map 组件 scale 属性和 tap 事件无效问题 [详情](https://ask.dcloud.net.cn/question/89491)
  + App-Android平台 修复 v3版本 wgt热更新后无法打开新增页面的Bug [详情](https://ask.dcloud.net.cn/question/88829)
  + App-iOS平台 修复 v3版本 wgt热更新后 plus.runtime.restart 卡在启动页的Bug [详情](https://ask.dcloud.net.cn/question/89966)
  + App-iOS平台 修复 v3版本 video 组件部分情况无法显示的bug
  + App-iOS平台 修复 nvue web-view 组件加载本地文件显示空白的Bug [详情](https://ask.dcloud.net.cn/question/90114)
* 【5+App插件】
  + 优化 uni-AD 激励视频广告内部加载逻辑，完善错误信息 [详情](https://ask.dcloud.net.cn/article/36718#rewarderror)

#### 2.6.3.20200305-alpha
* 【uni-app】
  + 新增 页面属性配置节点 page-meta [详情](https://uniapp.dcloud.io/component/page-meta)
  + App平台、H5平台 调整 canvas 组件大小改变时不再丢失内容
  + App平台 【重要】 老版自定义组件编译模式将于4月1日下线 [详情](https://ask.dcloud.net.cn/article/36988)
  + App平台 【重要】 新增 vue页面引用的js，支持原生混淆（限v3） [详情](https://ask.dcloud.net.cn/article/36437)
  + App平台 新增 video 组件全屏点击事件 fullscreenclick
  + App平台 优化 真机运行时，强化错误提示，输出vue警告日志（限v3）[详情](https://ask.dcloud.net.cn/question/89193)
  + App平台 优化 vue 页面 input、textarea 组件支持 show-confirm-bar 属性（限v3）
  + App平台 优化 picker 组件支持 fields 属性
  + App平台 优化 支持更多 crypto 加密库 [详情](https://ask.dcloud.net.cn/question/89334)
  + App平台 修复 v3版本 uni.getStorage 部分情况下获取数据格式错误的Bug [详情](https://ask.dcloud.net.cn/question/87866)
  + App平台 修复 v3版本 $nextTick 无法返回 Promise 的Bug
  + App平台 修复 v3版本 点击 tabBar 会重复触发 onShow 的Bug [详情](https://ask.dcloud.net.cn/question/87497)
  + App平台 修复 v3版本 input、textarea 组件 cursor-spacing 属性为字符串时报错的Bug
  + App平台 修复 v3版本 picker-view 组件内的 navigator 组件无法跳转的Bug [详情](https://ask.dcloud.net.cn/question/87794)
  + App平台 修复 v3版本 input 组件使用 v-model 后 input 事件会重复触发的Bug
  + App平台 修复 v3版本 多个 tabBar 页面同时使用 subNvue 时，点击蒙层关闭不正常的Bug [详情](https://ask.dcloud.net.cn/question/89050)
  + App平台 修复 v3版本 部分情况组件渲染不正确的Bug [#1334](https://github.com/dcloudio/uni-app/issues/1334)
  + App平台 修复 v3版本 部分情况文本节点渲染不正确的Bug [详情](https://ask.dcloud.net.cn/question/89557)
  + App平台 修复 v3版本 vue map 组件动态修改 v-if 无效隐藏的Bug [详情](https://ask.dcloud.net.cn/question/89986)
  + App平台 修复 v3版本 nvue map API translateMarker 无效的Bug
  + App平台 修复 v3版本 cover-view 组件部分样式渲染不正确的Bug [详情](https://ask.dcloud.net.cn/question/89609)
  + App平台 修复 v3版本 使用 renderjs 后，低版本系统运行异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/1373)
  + App平台 修复 v3版本 真机运行 修改 pages.json 触发多次同步手机端文件的Bug
  + App平台 修复 非v3模式 app.vue 中使用 css 变量不生效的Bug [详情](https://ask.dcloud.net.cn/question/89367)
  + App平台 修复 uni.uploadFile 的 formData 属性中不能包含数值类型的Bug [详情](https://ask.dcloud.net.cn/question/87951)
  + App平台 修复 nvue页面 movable-view 组件 inertia 属性不生效的Bug
  + App平台 修复 uni.request 在 content-type 为 application/json 时自动对 data 序列化 [详情](https://ask.dcloud.net.cn/question/89474)
  + App平台 修复 某些情况下事件接收参数不正确的Bug [详情](https://ask.dcloud.net.cn/question/89818)
  + App-Android平台 修复 nvue map 组件不设置 markers 属性导致tap事件不触发的Bug
  + App-Android平台 修复 云打包后 uni.getImageInfo() 获取本地图片信息可能会触发失败回调的Bug
  + App-iOS平台 修复 nvue image 组件使用相对路径加载图片可能会不显示的Bug [详情](https://ask.dcloud.net.cn/question/89117)
  + App-iOS平台 修复 video 组件设置 muted 为0静音后再设置为1时无法重新开启声音的bug [详情](https://ask.dcloud.net.cn/question/89106)
  + H5平台 优化 内置组件响应鼠标事件，可在PC浏览器正常拖动和滚动
  + H5平台 优化 “网络不给力”现象，调整页面加载超时时间和提示文案
  + H5平台 优化 修改代码后提升页面热更新速度
  + H5平台 修复 picker 组件设置 fields 属性后返回值格式错误的Bug
  + H5平台 修复 picker 组件设置 value 部分情况无法触发视图更新的Bug [#1162](https://github.com/dcloudio/uni-app/issues/1162)
  + H5平台 修复 uni.createSelectorQuery 返回的节点信息中 bottom 值错误的Bug [详情](https://ask.dcloud.net.cn/question/85968)
  + H5平台 修复 map 组件无法同时加载多个实例的Bug [详情](https://ask.dcloud.net.cn/question/88735)
  + H5平台 修复 movable-view 组件限制移动方向后，拖动操作会出现中断的Bug
  + H5平台 修复 tranparentTitle 失效的Bug [详情](https://ask.dcloud.net.cn/question/89354)
  + H5平台 修复 部分浏览器中 uni.getSystemInfo 获取 windowTop、windowHeight 值错误的Bug [#1348](https://github.com/dcloudio/uni-app/issues/1348)
  + H5平台 修复 在页面 onReady 生命周期内绘制canvas 绘制内容会一闪消失的Bug [详情](https://ask.dcloud.net.cn/question/81675)
  + 小程序平台 修复 easycom 无法正常使用驼峰式命名组件的Bug [详情](https://ask.dcloud.net.cn/question/87925)
  + 小程序平台 修复 App.vue 包含 template 节点时，导致 app.json 生成错误的Bug [#1351](https://github.com/dcloudio/uni-app/issues/1351)
  + 微信小程序平台 修复 控制台没有输出生命周期内异常的Bug [详情](https://ask.dcloud.net.cn/question/89440)
  + 钉钉小程序平台 调整 uni.request 在 content-type 为 application/json 时自动序列化 data
  + uni-ui 修复 NoticeBar 通告栏组件关闭按钮不显示的Bug
  + uni-ui 修复 IndexedList 索引列表组件非全屏显示时，右侧索引位置与点击位置偏移的Bug
* 【5+App插件】
  + 新增 原生标题栏支持自定义返回按钮、标题居左、标题栏背景图、背景渐变色等功能 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + 新增 视频播放控件 VideoPlayer 支持全屏播放时点击事件 fullscreenclick [文档](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerEvents)
  + Android平台 新增 原生隐私与政策提示框配置 [详情](https://ask.dcloud.net.cn/article/36937)
  + Android平台 优化 云端打包默认需要的系统权限，支持配置是否自动添加第三方SDK需要的权限 [详情](https://ask.dcloud.net.cn/article/36982)
  + Android平台 优化 Webview窗口加载可缩放页面时默认隐藏系统缩放控制条 [详情](https://ask.dcloud.net.cn/question/89088)
  + Android平台 修复 获取系统语言信息 plus.os.language 字符中没有包含地区信息的Bug
  + iOS平台 新增 适配iOS13+引入的暗黑模式 DarkMode [文档](https://ask.dcloud.net.cn/article/36995)
  + iOS平台 新增 应用使用Push（消息推送）模块后启动时不弹出“发送通知”系统授权框的配置方法 [详情](https://ask.dcloud.net.cn/article/36955#push)
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 objectFit 属性不生效的bug [详情](https://ask.dcloud.net.cn/question/88221)
  + iOS平台 修复 使用WKWebview内核 plus.orientation.getCurrentOrientation 无法获取设备方向信息的Bug
* 【uni小程序SDK】
  + 新增 启动小程序支持传入参数及直达指定页面 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37010)
  + 新增 关闭当前小程序方法及小程序关闭回调方法 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37014)
  + 新增 获取当前运行的小程序appid方法
  + Android平台 修复启动小程序后调用扫码可能引起的闪退问题 [详情](https://ask.dcloud.net.cn/question/89827)

#### 2.5.11.20200212-alpha
* 【uni-app】
  + App平台 新增 API uni.createRewardedVideoAd，激励视频广告 [详情](https://uniapp.dcloud.io/component/ad-rewarded-video)
  + hello uni-app 新增 ad 组件示例
  + hello uni-app 新增 激励视频广告 API示例
* 【5+App插件】
  + 新增 uni-AD 支持激励视频广告 [文档](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.createRewardedVideoAd)
  + 新增 推送 支持异步获取客户端推送标识接口 plus.push.getClientInfoAsync，解决同步接口可能返回空数据的问题 [文档](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.getClientInfoAsync)
  + iOS平台 修复 HBuilderX2.5.8引出的视频播放控件无法播放直播地址的Bug [详情](https://ask.dcloud.net.cn/question/88393)

#### 2.5.10.20200205-alpha
* 【uni-app】
  + APP平台、H5平台 优化 默认请求超时时间（request、connectSocket、uploadFile、downloadFile）对齐微信小程序由6秒改为60秒
* 【5+App插件】
  + Android平台 修复 调用系统分享消息 plus.share.sendWithSystem 标题不支持国际化的Bug [详情](https://ask.dcloud.net.cn/question/87936)

#### 2.5.9.20200203-alpha
* 【uni-app】
  + uniCloud 支持 H5平台的发布
  + uniCloud 支持设置协作者，多人使用相同AppID的项目，可绑定同一服务空间。方法：[开发者中心](https://dev.dcloud.net.cn) -> 选择应用 -> 项目成员管理。
  + uniCloud 修复 H5平台 main.js 内使用 uniCloud 报错的Bug
  + uniCloud 修复 App平台 callback 方式调用云函数报错的Bug
  + uniCloud 修复 上传 mp3 文件报错的Bug
  + uni-ui 新增 uni-combox 组合框组件

#### 2.5.8.20200128-alpha
* 【uni-app】
  + 【重要】uniCloud公测。serverless模式，全端云开发，js编写后端代码 [详情](https://uniapp.dcloud.io/uniCloud/README)
  + App-Android平台 修复 tabBar 设置 midButton 可能显示不全的Bug [详情](https://ask.dcloud.net.cn/question/87744)
  + App-iOS平台 修复 video 组件未播放时调用 seek 可能导致界面不正常的bug [详情](https://ask.dcloud.net.cn/question/80013)
  + App-iOS平台 修复 nvue input 组件 placeholder-style 和 placeholder-class 设置 fontSize 不生效的Bug
  + App-iOS平台 修复 页面中使用字体图标时可能无法正常显示的Bug
* 【5+App插件】
  + iOS平台 修复 视频播放控件 VideoPlayer 暂停播放后手势快进或后退操作时，没有更新进度条上显示时间的Bug

#### 2.5.7.20200116-alpha
* 【uni-app】
  + App平台 修复 v3版本 原生组件 fixed 定位无效的Bug [详情](https://ask.dcloud.net.cn/question/87475)
  + App平台 修复 v3版本 uni.createSelectorQuery 无法查询到 id 的Bug [详情](https://ask.dcloud.net.cn/question/87644)
  + App平台 修复 v3版本 非 tab 首页（nvue）显示 tabBar 的Bug [详情](https://ask.dcloud.net.cn/question/87536)
  + App平台 修复 v3版本 div、span 等 H5 组件样式不生效的Bug
  + App平台 修复 v3版本 videoContext.requestFullScreen 不生效的Bug [详情](https://ask.dcloud.net.cn/question/87202)
  + App平台 修复 v3版本 vue map 组件 API 不支持通过 $getAppMap 获取原生 map 对象的Bug
  + App-Android平台 修复 nvue map 组件 markers 更新频繁可能出现失败的Bug [详情](https://ask.dcloud.net.cn/question/87625)
  + H5平台 修复 启用摇树优化后 页面样式错乱的Bug [详情](https://ask.dcloud.net.cn/question/87495)
  + uni-ui 修复 v3版本 app-vue 页面中 swipe-action 组件无法滑动的Bug
* 【5+App插件】
  + Android平台 优化 uni-AD 使用今日头条穿山甲广告，在Android8及以上版本华为手机没有访问设备信息权限时只显示抖音广告的Bug
  + Android平台 修复 音频播放对象 AudioPlayer 触发end事件之后，调用 stop 和 destroy 方法会出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/73227)

#### 2.5.6.20200113-alpha
* 【uni-app】
  + App平台 修复 非v3编译模式 自定义组件失效的Bug [#1271](https://github.com/dcloudio/uni-app/issues/1271)
  + App平台 修复 v3版本 组件 dataset 属性可能导致运行报错的Bug
  + App平台 优化 v3版本 uni.request API 失败回调中返回详细信息
  + App-Android平台 修复 nvue textarea 组件设置 maxlength 为 -1 时无法输入文字的Bug [详情](https://ask.dcloud.net.cn/question/87503)
  + App-iOS平台 修复 nvue list 组件设置 bounce 为 false 可能导致页面无法滚动的Bug
  + H5平台 修复 input 组件设置 placeholder 的 top 样式显示错位的Bug [#1222](https://github.com/dcloudio/uni-app/issues/1222)
* 【5+App插件】
  + 新增 Webview窗口样式支持设置禁止调用plus属性 disablePlus，解决加载外部页面时可能调用plus对应用造成危害的隐患 [详情](https://ask.dcloud.net.cn/question/85390)

#### 2.5.5.20200111-alpha
* 【uni-app】
  + 【重要】easycom 支持自动扫描组件，符合目录规则的组件，无需在pages.json配置即可直接使用 [详情](https://uniapp.dcloud.io/collocation/pages?id=easycom)
  + 【重要】App平台、H5平台 新增 支持 renderjs，替代 wxs ，以 vue 组件的写法运行在视图层 [详情](https://uniapp.dcloud.io/frame?id=renderjs)
  + App平台、H5平台、抖音小程序平台 新增 swiper 组件支持 disable-touch 属性
  + App平台 修复 自定义组件模式 vue 文件不包含 script 节点时运行报错的Bug [详情](https://ask.dcloud.net.cn/question/87323)
  + APP平台 修复 nvue 页面 picker 组件时间、日期类型使用默认值报错的Bug [详情](https://ask.dcloud.net.cn/question/87203)
  + APP平台 修复 nvue 页面 appear、disappear 事件不返回 direction 的Bug
  + App平台 修复 v3版本 vue 页面 map 组件 部分API无效及属性无法动态更新的Bug [详情](https://ask.dcloud.net.cn/question/86872)
  + App平台 修复 v3版本 uni.request 在 content-type 为 urlencoded 时传入非 Object 的 data 时参数处理不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/1218)
  + App平台 修复 v3版本 alwaysShowBeforeRender 为 false 时无法关闭启动界面的Bug [详情](https://ask.dcloud.net.cn/question/87038)
  + App平台 修复 v3版本 InnerAudioContext 对象的 seek、onTimeUpdate 方法无效的Bug [详情](https://ask.dcloud.net.cn/question/86891)
  + App-Android平台 修复 uni.request 在 responseType 为 arraybuffer 时，返回数据可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/86405)
  + App-iOS平台 修复 tabBar 自定义高度时红点和角标显示位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/87344)
  + H5平台 修复 启用摇树优化后 easycom 组件失效的Bug [详情](https://ask.dcloud.net.cn/question/87170)
  + H5平台 修复 启用摇树优化后 uni.previewImage 失效的Bug [#1168](https://github.com/dcloudio/uni-app/issues/1168)
  + H5平台 修复 启用摇树优化后 animation 属性失效的Bug [#1231](https://github.com/dcloudio/uni-app/issues/1231)
  + H5平台 修复 部分浏览器上 Object.assign 报错的Bug [#1116](https://github.com/dcloudio/uni-app/issues/1116)
  + H5平台 修复 部分浏览器上 uni.canvasToTempFilePath 报错的Bug [详情](https://ask.dcloud.net.cn/question/87032)
  + Hello uni-app 优化 canvas 组件示例使用renderjs实现
* 【5+App插件】
  + 新增 数据库执行SQL语句 plus.sqlite.executeSql 支持一次传入多条语句，解决Android平台一条SQL语句中不支持以分号分割多条命令的需求 [详情](https://ask.dcloud.net.cn/article/36810)
  + Android平台 修复 在定时器回调函数中调用 plus.screen.lockOrientation 可能会引起应用闪退的Bug
  + Android平台 修复 在部分手机上获取OAID可能触发错误回调，错误信息提示不支持的Bug [详情](https://ask.dcloud.net.cn/question/87441)
  + iOS平台 修复 调用 plus.gallery.pick 选择相册中的照片后, 连续快速点击完成按钮可能会引起应用崩溃的bug [详情](https://ask.dcloud.net.cn/question/87123)

#### 2.5.3-20200107-alpha
* 【uni-app】
  + 【重要】新增 easycom 组件模式，简化组件使用。无需在页面里引入和注册组件，打包时会自动剔除没有使用的组件 [详情](https://uniapp.dcloud.io/collocation/pages?id=easycom)
  + 【重要】新增 uni-AD 广告联盟。整合App、小程序等多端广告，整合腾讯广点通、头条穿山甲、360广告联盟等众多SDK [详情](https://uniad.dcloud.net.cn/)
  + 【重要】App平台 新增 ad 组件，支持信息流、banner等应用内自定义广告 [详情](https://uniapp.dcloud.io/component/ad)
  + 【重要】App平台 优化 v3版本 运行时修改 vue 页面，手机端重启后可直达修改页面，无需手动配置 condition
  + 优化 非 scoped 样式支持 >>>、/deep/、::v-deep 语法[详情](https://github.com/dcloudio/uni-app/issues/1143)
  + App平台、H5平台、微信小程序 新增 uni.getSystemInfo 返回数据支持属性 safeAreaInsets
  + App平台 优化 调试控制台日志输出
  + App平台 优化 支持 CSS 变量 --window-top
  + App平台 优化 uni.getSystemInfo 获取的 windowHeight 不含 windowTop、windowBottom
  + App平台 修复 v3版本 行内样式设置背景图无效的Bug [详情](https://ask.dcloud.net.cn/question/86898)
  + App平台 修复 v3版本 app-plus 下配置 pullToRefresh 无效的Bug
  + App平台 修复 v3版本 subNvue mask 无法遮盖 tabBar 的Bug
  + App平台 修复 v3版本 vue map 组件动态更新中心点 latitude、longitude 无效的Bug [详情](https://ask.dcloud.net.cn/question/86963)
  + App-Android平台 修复 HBuilderX2.4.7引出的 nvue swiper 组件设置 autoplay 属性时最后一页会跳掉不显示的Bug [详情](https://ask.dcloud.net.cn/question/86856)
  + App-Android平台 修复 websocket 发送内容中包含特殊字符可能导致发送失败的Bug [详情](https://ask.dcloud.net.cn/question/86670)
  + App-Android平台 修复 nvue 页面中组件设置 hover-class 后，页面关闭可能出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/87016)
  + App-Android平台 修复 nvue video 组件下使用 cover-view 后，视频全屏后可能出现排版混乱的Bug [详情](https://ask.dcloud.net.cn/question/86879)
  + App-iOS平台 修复 nvue map 组件使用 controls 控件提交云端打包后可能会引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/86521)
  + App-iOS平台 修复 v3版本 部分情况下 rpx 计算错误的Bug
  + H5平台 修复 video 组件销毁报错的Bug [详情](https://ask.dcloud.net.cn/question/86959)
  + H5平台 修复 audio 组件无法显示的Bug [详情](https://ask.dcloud.net.cn/question/87045)
  + H5平台 修复 uni.chooseVideo 在微信内置浏览器无法触发回调的Bug [详情](https://ask.dcloud.net.cn/question/86968)
  + 新增 uni-ui 项目模板。该项目通过 easycom 引入所有 uni-ui 组件，可方便的开发项目
* 【5+App插件】
  + 【重要】新增 uni-AD 广告联盟。整合App、小程序等多端广告，整合腾讯广点通、头条穿山甲、360广告联盟等众多SDK [详情](https://uniad.dcloud.net.cn/)
  + 【重要】新增 plus.ad 广告模块，支持信息流、banner等应用内自定义广告 [文档](https://www.html5plus.org/doc/zh_cn/ad.html)
  + 【重要】Android平台 新增 腾讯X5内核。可解决rom自定义主题字体适配、低端机浏览器兼容性等问题 [详情](https://ask.dcloud.net.cn/article/36806)
  + Android平台 修复 Webview窗口创建并显示后立即关闭可能出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/86918)
  + iOS平台 修复 在非刘海屏手机获取应用的安全区域 plus.navigator.getSafeAreaInsets 返回 deviceTop 数据可能不正确的Bug

#### 2.5.0.20191231-alpha
* 【uni-app】
  + App平台 新建项目默认使用v3编译器，如不需要v3编译，请在【manifest-App常用其他配置】取消
  + App平台 新增 v3版本 支持配置 nvue 首页 fast 启动模式，即不等待逻辑层初始化完毕，直接启动渲染层 [详情](https://uniapp.dcloud.io/collocation/manifest?id=app-plus)
  + App平台 修复 v3版本 globalStyle 内配置页面动画不生效的Bug [详情](https://ask.dcloud.net.cn/question/85654)
  + App平台 修复 v3版本 无法读取非v3版本存储的 storage 数据的Bug
  + App平台 修复 picker 组件内容为空字符串时排版错位的Bug [详情](https://ask.dcloud.net.cn/question/85682)
  + App-iOS平台 修复 tabbar及标题栏上设置字体图标可能无法正常显示的Bug
  + App-iOS平台 修复 nvue map 组件不设置 marker 的 title 及 callout 时会显示空白标注的Bug [详情](https://ask.dcloud.net.cn/question/85874)
  + App-iOS平台 修复使用 uni.hideKeyboard 输入框无法失去焦点的Bug [详情](https://ask.dcloud.net.cn/question/85681)
  + H5平台 新增 video 组件支持 @loadedmetadata、@progress 事件
  + H5平台 优化 video 组件全屏展示效果 [详情](https://ask.dcloud.net.cn/question/85223)
  + H5平台 优化 canvas 组件内存占用
  + H5平台 修复 globalStyle 下 h5 节点配置不生效的Bug
  + H5平台 修复 editor 组件未配置图像控件时报错的Bug
  + H5平台 修复 在不支持 localStorage 的环境运行时框架报错的Bug [#1155](https://github.com/dcloudio/uni-app/issues/1155)
  + 支付宝小程序平台 新增 支持 onBackPress [详情](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%E9%A1%B5%E9%9D%A2%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
  + 支付宝小程序平台 修复 使用 createSelectorQuery().in(this) 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/1190)
  + 支付宝小程序平台 新增 支持配置 mini.project.json (manifest.json->mp-alipay) [#1164](https://github.com/dcloudio/uni-app/issues/1164)
  + uni-ui 新增vue doc，在HBuilderX中可以给予更完善的代码提示 [什么是vue doc](https://ask.dcloud.net.cn/article/35814)
* 【5+App插件】
  + Android平台 修复 HBuilderX2.4.9引出的在无网环境下应用启动可能崩溃的Bug
  + Android平台 修复 真机运行默认将日志保存到SD卡中，长时间运行可能出现日志文件过大的Bug
  + iOS平台 修复 录音对象（AudioRecorder）录制mp3格式音频设置 channels 参数值为 mono 不生效的Bug [详情](https://ask.dcloud.net.cn/question/85493)
  + iOS平台 修复 录音对象（AudioRecorder）设置音频播放模式 setSessionCategory 可能不生效的Bug
  + iOS平台 修复 iOS13调用 plus.screen.setBrightness 方法可能会导致页面失去响应的Bug

#### 2.4.9.20191223-alpha
* 【uni-app】
  + App平台 修复 v3版本 uCharts 某些图表类型无法显示的Bug
  + App-Android平台 修复 HBuilderX2.4.8引出的 nvue list 组件的下拉刷新功能无法使用的Bug
  + App-Android平台 修复 tabBar 动态设置某一项的内容会导致选中状态失效的Bug [详情](https://ask.dcloud.net.cn/question/80941)

#### 2.4.8.20191220-alpha
* 【uni-app】
  + App平台 修复 v-for 中监听事件某些情况参数不正确的Bug
  + App平台 修复 uni.login 微信登录提示“没有这些scope权限”的Bug [详情](https://ask.dcloud.net.cn/question/85417)
  + App-Android平台 修复 nvue map 组件中标注点设置 translateMarker 旋转角度后，点气泡也会随之旋转的Bug [详情](https://ask.dcloud.net.cn/question/84676)
  + App-Android平台 修复 nvue 页面中使用 animation 动画，关闭页面可能会闪退的Bug [详情](https://ask.dcloud.net.cn/question/84902)
  + App-Android平台 优化 应用退出后不清掉后台，反复热启动导致底层通信timeout引起的白屏问题
  + App-Android平台 修复 nvue scroll-view 组件中嵌套 list 组件，list高度大于scroll-view剩余高度时高度可能不正常的Bug [详情](https://ask.dcloud.net.cn/question/85496)
  + App-iOS平台 新增 nvue 普通 view 组件支持设置高斯模糊（毛玻璃）效果 [详情](https://ask.dcloud.net.cn/article/36617#view)
  + H5平台 优化 发行时 index.css 文件名包含 hash 以便更好的控制缓存 [详情](https://ask.dcloud.net.cn/question/84990)
  + H5平台 修复 tabBar 文字较多时角标（红点）错位的Bug [详情](https://ask.dcloud.net.cn/question/83293)
  + H5平台 修复 textarea 组件未设置 line-height 时 linechange 事件 lineCount 值错误的Bug [#1123](https://github.com/dcloudio/uni-app/issues/1123)
  + H5平台 修复 swiper 组件动画过程中销毁组件会报错的Bug [#1123](https://github.com/dcloudio/uni-app/issues/1127)
  + H5平台 修复 image 组件 src 包含英文括号时无法正常的Bug [#1090](https://github.com/dcloudio/uni-app/pull/1090)
  + 支付宝小程序平台 修复 使用 createIntersectionObserver 报错的Bug
* 【5+App插件】
  + Android平台 更新 高德地图SDK（7.1.0）
  + iOS平台 修复 应用切换到后台，从其它应用传参数激活到前台时 plus.runtime.arguments 可能不更新的Bug

#### 2.4.7.20191216-alpha
* 【uni-app】
  + 【重要】H5平台、QQ小程序 支持运行微信小程序组件 [详情](https://hellouniapp.dcloud.net.cn/pages/template/vant-button/vant-button)
  + 【重要】App平台 新增 pages.json 配置屏幕方向。横屏应用请在这里配置，app.vue里生效较晚 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + App平台 优化 选择位置 支持在搜索结果中选择
  + App平台 优化 picker 组件按钮文字增加多语言支持
  + App平台 优化 v3版本 支持微信小程序组件
  + App平台 修复 v3版本 uni.getBackgroundAudioManager 不触发 onTimeUpdate 回调的Bug
  + App平台 修复 v3版本 onTabItemTap 生命周期不触发的Bug
  + App平台 修复 image 组件初始值为空字符串时会执行一次@error事件的Bug
  + App平台 修复 input 组件失焦时会触发一次@input的Bug [详情](https://ask.dcloud.net.cn/question/84456)
  + App平台 修复 webview 组件在非沉浸式状态栏下高度不正确的Bug
  + App平台 修复 chooseImage 传入字符串格式 sizeType 导致报错的Bug
  + App平台 修复 纯 nvue 环境 uni.request 数据格式错误的Bug [#1100](https://github.com/dcloudio/uni-app/issues/1100)
  + App平台 修复 nvue input 组件动态设置 password 属性不生效的Bug
  + App-Android平台 新增 nvue 通用属性 elevation 设置组件的层级阴影，解决 box-shadow 样式在设置圆角或动画时显示不正常的问题 [详情](https://uniapp.dcloud.io/nvue-css?id=android-box-shadow)
  + App-Android平台 修复 部分使用64位CPU的手机上可能出现白屏的Bug [详情](https://ask.dcloud.net.cn/question/83611)
  + App-Android平台 修复 nvue image 组件在部分手机上设置 fade-show 属性值为false可能仍然会闪烁的Bug
  + App-Android平台 修复 nvue swipe 组件设置 circular 属性值为true时从首页直接跳到最后一页可能出现页面无法正常渲染的Bug
  + App-Android平台 修复 tabbar 的 midButton 不设置图片时显示默认图片的Bug [详情](https://ask.dcloud.net.cn/question/84908)
  + 【重要】App-iOS平台 新增 uni.login 支持Apple登录 [详情](https://ask.dcloud.net.cn/article/36651)
  + App-iOS平台 修复 nvue input 组件设置 maxlength 属性后，@input事件返回value值与实际显示值不一致的Bug [详情](https://github.com/dcloudio/uni-app/issues/1073)
  + H5平台 新增 支持 editor 组件 [详情](https://hellouniapp.dcloud.net.cn/pages/component/editor/editor)
  + H5平台 新增 支持使用 nodesRef.context 获取 VideoContext、CanvasContext 和 MapContext 对象
  + H5平台 修复 css 变量 --window-bottom 在全面屏设备不准确的Bug [详情](https://ask.dcloud.net.cn/question/83069)
  + H5平台 修复 canvasContext.measureText 报错的Bug [详情](https://ask.dcloud.net.cn/question/84858)
  + H5平台 修复 uni.createAnimation 动画不正确的Bug [详情](https://ask.dcloud.net.cn/question/84862)
  + H5平台 修复 webview 页面调用 uni API 无效的Bug [详情](https://ask.dcloud.net.cn/question/84977)
  + hello uni-app 新增 canvas 组件示例(App端使用wxs实现高性能动画)
* 【5+App插件】
  + Android平台 修复 Webview窗口关闭后可能出现内存占用不释放的Bug [详情](https://ask.dcloud.net.cn/question/83587)
  + 【重要】iOS平台 新增 支持苹果授权登录（Sign in with Apple） [教程](https://ask.dcloud.net.cn/article/36651)
  + iOS平台 修复 音频播放对象（AudioPlayer）播放网络音频时，缓存完成恢复播放时没有触发 onPlay 事件的Bug
  + iOS平台 修复 Webview窗口的titleUpdate事件可能不触发导致无法修改页面标题的Bug [详情](https://ask.dcloud.net.cn/question/84115)
  + iOS平台 修复 Webview窗口的标题栏（titleNView）设置titleSize属性不生效的Bug
  + iOS平台 修复 系统日期选择框（plus.nativeUI.pickDate）、时间选择框（plus.nativeUI.pickTime）在横屏时显示不正常的Bug

#### 2.4.4.20191129-alpha
* 【uni-app】
  + App平台 优化 选择位置，全新UI、新增参数 latitude、longitude，一键到达当前位置
  + App平台 修复 真机运行指定页面为首页时白屏的Bug
  + App平台 修复 v3版本 webview 组件返回不正确的Bug
  + App平台 修复 v3版本 uni.request header 属性 Content-Type=application/x-www-form-urlencoded 时请求异常的Bug
  + App平台 修复 v3版本 隐藏原生导航栏的 tabBar 页面状态栏颜色不正确的Bug
  + App平台 修复 weex 编译模式 uni.scanCode 打开扫码页面空白的Bug [详情](https://ask.dcloud.net.cn/question/83820)
  + App平台 修复 nvue 页面导航栏 titleNView 的 type 属性设置为 transparent 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/66907)
  + App-Android平台 修复 首页为 nvue 时反复启动应用后可能出现假死状态的Bug [详情](https://ask.dcloud.net.cn/question/83611)
  + App-iOS平台 新增 tabbar 支持设置高斯模糊（毛玻璃）效果 [详情](https://ask.dcloud.net.cn/article/36617)
  + App-iOS平台 修复 网络请求 uni.request 设置请求的 header 中存在非字符串值可能会引起崩溃的Bug
  + H5平台 新增 uni.chooseImage 、uni.chooseVideo 支持返回文件名
  + H5平台 新增 支持使用 uni.loadFontFace 加载字体
* 【5+App插件】
  + iOS平台 修复 苹果应用内支付IAP恢复购买接口（restoreComplateRequest）有可能不会返回恢复购买凭证的Bug
  + iOS平台 修复 预览图片（previewImage）可能无法正常显示部分网络地址图片的Bug [详情](https://ask.dcloud.net.cn/question/83542)

#### 2.4.3.20191125-alpha
* 【uni-app】
  + 【重要】App端重大架构升级 “v3编译器”，更快的启动速度、更好的性能、更多vue语法支持、可webview调试视图层。可通过设置`manifest.json`文件中`app-plus`节点下的`compilerVersion:3 `启用新架构 [详情](https://ask.dcloud.net.cn/article/36599)
  + 新增 支持在页面文件调用 `App.vue` 中定义的函数方法 [#665](https://github.com/dcloudio/uni-app/issues/665)
  + 修复 发行模式下使用 scss ，部分情况条件编译不生效的 Bug [1013](https://github.com/dcloudio/uni-app/issues/1013)
  + 优化 `babel.config.js` 文件里的 `@vue/babel-preset-app` 支持配置 `modules:false` ，让打包出来的代码体积更小，运行更快 [#929](https://github.com/dcloudio/uni-app/issues/929)
  + App平台 新增 uni-app编译模式的nvue页面 控制是否自动包裹 scroll 组件（通过 pages.json 里 style 的 `disableScroll` 属性配置页面) [详见](https://uniapp.dcloud.io/collocation/pages?id=style)
  + App平台 新增 uni-app编译模式的nvue页面 webview 组件加载的HTML支持调用部分uni API [详情](https://ask.dcloud.net.cn/question/83399)
  + App平台 修复 nvue 页面中 picker 组件多次打开后无法关闭的Bug [详情](https://ask.dcloud.net.cn/question/83417)
  + App-Android平台 优化 应用退出后不清掉后台，再热启动可能出现白屏的问题 [详情](https://ask.dcloud.net.cn/question/77397)
  + App-Android平台 修复 应用在 tabbar 页面跳转到其它页面在Android10上可能出现图片闪烁的Bug
  + App-Android平台 修复 nvue scroll-view 组件无法触发 touchstart/touchend 事件及动态设置 scroll-left 属性可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/83256)
  + App-Android平台 修复 nvue input 组件设置 autofocus 属性为 true 在subnvue页面可能出现软键盘弹出后自动隐藏的Bug [详情](https://ask.dcloud.net.cn/question/83014)
  + App-Android平台 修复 nvue map 组件下的view子节点不显示的Bug [详情](https://ask.dcloud.net.cn/question/83719)
  + App-Android平台 修复 nvue live-pusher 组件推流成功后拉流可能显示绿屏或卡在首帧的Bug [详情](https://ask.dcloud.net.cn/question/83198)
  + App-iOS平台 修复 nvue view 组件设置 border 属性可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/83206)
  + App-iOS平台 修复 iOS 13 系统中 textarea 输入的内容，比 placeholder 偏左一点的Bug [详情](https://ask.dcloud.net.cn/question/83373)
  + App-iOS平台 修复 faceID 识别成功时不能正确触发成功回调的Bug [详情](https://ask.dcloud.net.cn/question/83068)
  + H5平台 修复 webview 组件 加载的HTML中调用 uni.getEnv 错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/1011)
  + H5平台 修复 h5 平台组件的自定义事件无法接收多个参数的Bug [#1016](https://github.com/dcloudio/uni-app/issues/1016)
  + H5平台 修复 在企业微信中 uni.chooseImage 无法使用的Bug [详情](https://github.com/dcloudio/uni-app/issues/82872)
  + 小程序平台 修复 不能直接在模版内使用 $emit 的 Bug [详情](https://ask.dcloud.net.cn/question/82865)
  + 微信小程序平台 修复在发行模式使用 lodash@4.17.15 ，运行报错的 Bug[#994](https://github.com/dcloudio/uni-app/issues/994)
  + 支付宝小程序平台 修复 for 循环中 ref 生成的多个组件数组长度不准确的Bug [#930](https://github.com/dcloudio/uni-app/issues/930)
  + 抖音小程序平台 修复 当 rpx 后跟着 !important 时，发行模式下 rpx 未被编译成px的Bug [#1014](https://github.com/dcloudio/uni-app/issues/1014)
  + 百度小程序平台 修复 页面 onShow 只能触发一次的Bug
  + uni-ui 新增 uni-transition 过渡动画组件
  + uni-ui 新增 uni-fab 悬浮按钮支持nvue
  + uni-ui 修复 uni-calendar 动态获取 selected 属性就会导致切换不了月份的Bug
  + uni-ui 修复 uni-calendar H5 端选择月份按钮不能点击的Bug
  + uni-ui 优化 uni-calendar 切换月份必选中每月1号的Bug
  + uni-ui 优化 uni-calendar 视图样式,优化逻辑代码实现,使性能更好
  + uni-ui 优化 uni-calendar 切换月份返回事件
  + uni-ui 修复 uni-grid 正方形宫格显示不正确的Bug
  + uni-ui 修复 uni-grid 动态数据不渲染的Bug
  + uni-ui 优化 uni-grid 用户可自定义宫格内容，如添加角标、红点、修改背景色等
  + uni-ui 优化 uni-load-more 支持调整图标大小
  + uni-ui 修复 uni-popup 点击蒙版关闭后，再次打开弹框失败的Bug
  + uni-ui 修复 uni-popup type 属性为静态值时导致弹出层错误的Bug
  + uni-ui 优化 uni-popup 弹出层动画，使动画更流畅
  + uni-ui 修复 uni-swipe-action autoClose 属性开启状态下滑动不正常的Bug
  + uni-ui 优化 uni-swipe-action 组件间联动效果更流畅
* 【5+App插件】
  + Android平台 优化 启动时申请手机存储权限，若用户拒绝则会弹出说明文字。满足部分应用商店要求的权限申请需申明的要求 [详情](https://ask.dcloud.net.cn/article/36549#externalstorage)
  + Android平台 修复 Webview窗口设置drag滑屏操作手势，快速滑动操作可能引起白屏的Bug [详情](https://ask.dcloud.net.cn/question/82668)
  + Android平台 修复 视频播放控件（VideoPlayer）可能无法播放某些本地视频文件的Bug
  + Andrpid平台 修复 数据库执行SQL语句（plus.sqlite.executeSql）传入错误sql语句时，可能在控制台输出错误日志且不触发错误回调的Bug [详情](https://ask.dcloud.net.cn/question/83203)
  + iOS平台 新增 Webview窗口原生标题栏样式属性 blurEffect，支持模糊毛玻璃）效果 [详情](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + iOS平台 补齐 直播推流（LivePusher）控件支持设置最小码率（min-bitrate）和最大码率（max-bitrate）
  + iOS平台 修复 Webview窗口原生标题栏的搜索框（searchInput）获取焦点会导致placeholder文字移位的Bug [详情](https://ask.dcloud.net.cn/question/83027)
  + iOS平台 修复 图片预览（plus.nativeUI.previewImage）可能出现长图片不能滚动的Bug [详情](https://ask.dcloud.net.cn/question/82455)
  + iOS平台 修复 使用UniPush或个推推送在后台统计数据中没有展示数和点击数的Bug [详情](https://ask.dcloud.net.cn/question/83292)
  + iOS平台 修复 用户拒绝访问相机后，调用摄像头拍照或录像时不会触发错误回调的Bug
  + iOS平台 修复 配置使用高德或百度地图后，定位默认没有使用gcj02坐标的Bug
  + iOS平台 修复 系统日期（plus.nativeUI.pickDate）、时间（plus.nativeUI.pickTime）选择框与系统提示框遮罩颜色不一致的Bug
* 【mui】
  + iOS平台 wkwebview下，plusready未触发时调用mui.ajax，在控制台输出正确的告警提醒

#### 2.4.2.20191115-alpha
* 【uni-app】
  + APP平台 修复 当`manifest.json`中`nvueCompiler`配置项不是`weex`时，picker 组件文字超出无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/83048)
  + APP平台 修复 当`manifest.json`中`nvueCompiler`配置项不是`weex`时，uni.scanCode 接口无法回调的Bug [详情](https://ask.dcloud.net.cn/question/82984)
  + APP平台 修复 当`manifest.json`中`nvueCompiler`配置项不是`weex`时，uni.chooseLocation 接口无法回调的Bug [详情](https://ask.dcloud.net.cn/question/82988)
  + App-Android平台 修复 nvue barcode 组件设置 autostart 为true时在部分设备可能出现黑屏的Bug
  + App-iOS平台 修复 纯nvue项目 侧滑关闭后无法触发上个页面生命周期 onShow 的Bug [详情](https://ask.dcloud.net.cn/question/81830)
  + H5平台 修复 uni.getImageInfo 回调信息中 path 错误的Bug [详情](https://ask.dcloud.net.cn/question/82793)
  + H5平台 修复 路由后退时弹出的 picker 无法自动关闭的Bug [详情](https://ask.dcloud.net.cn/question/82684)
  + H5平台 修复 在夸克浏览器（iOS）onReachBottom 生命周期只触发一次的Bug [详情](https://ask.dcloud.net.cn/question/67636)
  + H5平台 修复 在手机QQ浏览器 onReachBottom 无法触发的Bug [详情](https://ask.dcloud.net.cn/question/82795)
  + H5平台 修复 在网络断开的情况下 SocketTask.send 回调不正确的Bug [#744](https://github.com/dcloudio/uni-app/issues/744)
  + 微信小程序 调整微信基础库版本为2.9.2，解决微信2.9.3基础库input事件不触发的Bug [详情](https://developers.weixin.qq.com/community/develop/doc/000a067cd0c6102d0d79558e65bc00?highLine=bindinput)
  + 钉钉小程序 修复 多层组件嵌套的情况下，子组件生命周期不触发的Bug
  + 百度小程序 修复 onShow在onLoad之前触发的Bug [详情](https://ask.dcloud.net.cn/question/82822)
* 【5+App插件】
  + iOS平台 修复 创建本地消息（plus.push.createMessage）在iOS10及以上系统只显示最后一条的Bug [详情](https://ask.dcloud.net.cn/question/82560)

#### 2.4.1.20191114-alpha
* 【uni-app】
  + App-iOS平台 修复 picker 组件 range 数据量较大时无法打开的Bug

#### 2.4.0.20191112-alpha
* 【uni-app】
  + 【重要】nvue文件编译模式默认从 weex 模式修改为 uni-app 模式。推荐使用多端可用、更成熟、组件更丰富的 uni-app 模式。如仍需使用 weex 模式，需在manifest中手动配置
  + 【重要】uni ui 新版正式发布，同时兼容vue和nvue。欢迎插件市场作者也升级自己的组件，同时兼容nvue [详情](https://uniapp.dcloud.io/component/README?id=uniui)
  + 【重要】自定义组件模式新增 crypto.getRandomValues 方法，获取符合密码学要求的安全随机值
  + H5平台 修复 wxs getDataset() 函数获取不到参数的Bug。uni ui 的 swiperaction 组件的问题也因此得到修复 [详情](https://ask.dcloud.net.cn/question/82718)
  + APP平台 新增 nvue picker 组件支持多列
  + APP平台 优化 picker、扫码、选择位置、打开位置API的界面通过原生实现，提升性能体验（nvue为weex编译模式时未优化）
  + APP平台 修复 swiper 设置为autoplay时滑动导致速度加快的BUG [详情](https://ask.dcloud.net.cn/question/82431)
  + App-iOS平台 修复 nvue页面在iOS13及以上系统默认字体不对的Bug
  + App-iOS平台 修复 nvue list 组件 scroll 事件返回的 isDragging 属性不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/932)
  + App-iOS平台 修复 nvue swiper 组件动态修改 current 属性触发 transition 事件返回的参数不准确的Bug
  + 百度小程序平台 修复 新版百度小程序生命周期下组件内mounted不触发的BUG
  + uni ui 优化 uni-swipe-action 组件在nvue中使用 BindingX ，使跟手动画更流畅
  + uni ui 优化 uni-list 组件在nvue中使用原生list组件，提升性能
  + 新闻模板 优化 顶部tab栏目增加下滑横线（支持app-nvue、app-vue、h5、微信小程序、qq小程序，其他端暂无下滑横线）
* 【5+App插件】
  + Android平台 新增 获取移动智能设备标识公共服务平台提供的匿名设备标识符[OAID](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID)、开发者匿名设备标识符VAID、及应用匿名设备标识符AAID，可用于解决Android10无法获取设备标识（如IMEI、IMSI、Wi-Fi MAC地址等）的问题
  + Android平台 修复 创建视频播放控件（VideoPlayer）时，没有开始播放视频也会停止后台背景音频的Bug [详情](https://ask.dcloud.net.cn/question/82034)
  + Android平台 优化 视频播放的操作条的拖动误触和图标美化问题
  + iOS平台 修复 平台绝对路径转换成本地URL路径（plus.io.convertAbsoluteFileSystem）可能返回null的Bug [详情](https://ask.dcloud.net.cn/question/51954)

<md-virtual key="release-note-alpha"/>
