#### 3.7.0.20230118-alpha
* 【uni-app】
* 【重要】新增 uts 组件。可使用uts语言开发原生扩展组件 [详情](https://uniapp.dcloud.net.cn/plugin/uts-component.html)
* 【Important】Add uts component. UTS language can be used to develop native extension components [Details](https://uniapp.dcloud.net.cn/plugin/uts-component.html)
* 新增 uni-vue-devtools 插件，方便查看、修改 data 及审查自定义组件 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-vue-devtools.html)
* Added uni-vue-devtools plug-in, which is convenient for viewing, modifying data and reviewing custom components [Details](https://uniapp.dcloud.net.cn/tutorial/debug/uni-vue-devtools.html)
* Web平台、App平台 新增 page-meta 组件支持 scroll-top 属性
* Web platform and App platform add page-meta component to support scroll-top attribute
* Web平台 修复 3.6.16版引出的 Vue3 项目 scroll-view 组件插槽部分情况下渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/149557)
* Web platform Fixed the bug that the scroll-view component slot of the Vue3 project introduced in version 3.6.16 rendered abnormally in some cases [Details](https://ask.dcloud.net.cn/question/149557)
* Web平台 修复 video 组件 show-progress 属性不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3908)
* Web platform fixes the bug that the show-progress property of the video component does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3908)
* Web平台 修复 input 组件 type=digit 时清空输入框后 placeholder 不显示的Bug [详情](https://ask.dcloud.net.cn/question/160726)
* Web platform fixes the bug that the placeholder does not display after clearing the input box when the input component type=digit [details](https://ask.dcloud.net.cn/question/160726)
* Web平台 修复 Vue3 项目 onNavigationBarSearchInputConfirmed 无效的Bug [详情](https://ask.dcloud.net.cn/question/154740)
* Web platform fix Vue3 project onNavigationBarSearchInputConfirmed invalid bug [details](https://ask.dcloud.net.cn/question/154740)
* Web平台 修复 Vue3 项目切换 tabbar 页面不触发 onTabItemTap 的Bug
* Web platform fixes the bug that the Vue3 project switching tabbar page does not trigger onTabItemTap
* App平台 新增 【ext component】animation-view 组件 [详情](https://uniapp.dcloud.net.cn/component/animation-view.html)
* App platform added [ext component] animation-view component [Details](https://uniapp.dcloud.net.cn/component/animation-view.html)
* App平台 修复 Vue3 项目中原生导航栏 type 为 transparent 时，自定义 buttons 在导航栏上滑至顶端时颜色不改变的Bug [详情](https://ask.dcloud.net.cn/question/154074)
* App platform fixes the bug that the color of custom buttons does not change when sliding to the top of the navigation bar when the native navigation bar type in the Vue3 project is transparent [Details](https://ask.dcloud.net.cn/question/154074 )
* 小程序平台 新增 pages.json 支持配置 entryPagePath 属性 [详情](https://ask.dcloud.net.cn/question/126216)
* Added pages.json to the MiniApp platform to support configuration of the entryPagePath attribute [Details](https://ask.dcloud.net.cn/question/126216)
* 微信小程序平台 修复 3.6.16版引出的企业版微信运行报错的Bug
* Wechat MiniApp platform fixes the bug that the enterprise version of wechat running error caused by version 3.6.16
* 微信小程序平台 修复 3.6.16版引出的 Vue2 项目部分情况下作用域插槽中访问 length 属性报错的Bug
* Wechat MiniApp platform fixes the bug of accessing the length property in the scope slot in some cases of the Vue2 project introduced by version 3.6.16.
* 微信小程序平台 修复 Vue2 项目中使用 uni.env 时返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/159865)
* Wechat MiniApp platform fixes the bug that the return value is incorrect when using uni.env in the Vue2 project [details](https://ask.dcloud.net.cn/question/159865)
* 支付宝小程序平台 修复 钉钉小程序使用 uni.saveImageToPhotosAlbum 报错的Bug [详情](https://ask.dcloud.net.cn/question/159183)
* The Alipay MiniApp platform fixes the bug that the DingTalk MiniApp uses uni.saveImageToPhotosAlbum to report an error [Details](https://ask.dcloud.net.cn/question/159183)
* 支付宝小程序平台 修复 uni.getSystemInfo 返回的 platform 属性在模拟器中不正确的Bug
* Alipay MiniApp platform fixes the bug that the platform attribute returned by uni.getSystemInfo is incorrect in the simulator
* QQ小程序平台 修复 Vue3 项目 video 组件 ended 事件在真机不触发的Bug [详情](https://ask.dcloud.net.cn/question/155602)
* 【uniCloud】
* 新增 schema扩展js支持引入公共模块及扩展库 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#deps-of-jql)
* Added schema extension js to support the introduction of public modules and extension libraries [Details](https://uniapp.dcloud.net.cn/uniCloud/jql.html#deps-of-jql)
* 新增 JQL触发器方法新增一些参数 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-param)
* Add some parameters to the JQL trigger method [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-param)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
* Android平台 新增 隐私政策提示框支持 backToExit 配置是否响应点击系统返回键退出应用，解决部分应用市场上架审核可能提示`系统返回键失灵`的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
* The Android platform has added a privacy policy prompt box that supports backToExit to configure whether to respond to clicking the system return button to exit the application, and solve the problem that some application markets may prompt `system return button failure`[Details](https://uniapp.dcloud.net .cn/tutorial/app-privacy-android.html)
* Android平台 更新 uni-AD 腾讯优量汇广告SDK 为 4.500.1370 版；Sigmob广告联盟SDK 为 4.9.0 版
* Android platform update uni-AD Tencent Youlianghui Advertising SDK to version 4.500.1370; Sigmob Advertising Alliance SDK to version 4.9.0
* Android平台 修复 3.6.17版引出的 系统导航栏按键颜色与背景颜色相同的Bug [详情](https://ask.dcloud.net.cn/question/161501)
* Android platform fixed the bug that the button color of the system navigation bar was the same as the background color caused by version 3.6.17 [Details](https://ask.dcloud.net.cn/question/161501)
* Android平台 修复 3.6.17版引出的 自定义隐私政策提示框时启动应用可能出现卡死的Bug [详情](https://ask.dcloud.net.cn/question/161634)
* Android platform Fixed the bug that the custom privacy policy prompt box caused by version 3.6.17 may freeze when starting the application [Details](https://ask.dcloud.net.cn/question/161634)
* Android平台 修复 隐私合规检测可能报`隐私弹窗中处理超链接的过程中调用到了获取设备sim卡国家信息的api`的Bug [详情](https://ask.dcloud.net.cn/question/161479)
* The Android platform fixes the bug that the privacy compliance detection may report that the API for obtaining the country information of the device's sim card is called during the process of processing hyperlinks in the privacy pop-up [Details](https://ask.dcloud.net.cn/ question/161479)
* Android平台 修复 图片选择在 Android13 设备提示没有权限的Bug [详情](https://ask.dcloud.net.cn/question/160879)
* Android platform fixed the bug that the image selection prompts no permission on Android13 devices [Details](https://ask.dcloud.net.cn/question/160879)
* Android平台 修复 plus.io.FileReader 的 readAsDataURL 读取数据时未按 slice 分割位置读取的Bug [详情](https://ask.dcloud.net.cn/question/160467)
* Android platform fixes the bug that the readAsDataURL of plus.io.FileReader does not read the data according to the slice division [Details](https://ask.dcloud.net.cn/question/160467)
* Android平台 修复 视频播放控件 VideoPlayer 在视频缓冲时触发 timeupdate 事件的Bug
* Android platform fixes the bug that the video playback control VideoPlayer triggers the timeupdate event when the video buffers
* iOS平台 更新 一键登录使用的个验SDK为 3.0.3.0 版
* iOS platform update The personal test SDK used for one-click login is version 3.0.3.0
* 【uni小程序SDK】
* 【uni MiniApp SDK】
* Android平台 修复 打开uni小程序切换应用到后台运行一段时间后可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/141868)
* Android platform fixes the bug that may cause a crash after opening the uni MiniApp and switching the application to the background for a period of time [Details](https://ask.dcloud.net.cn/question/141868)

#### 3.6.17.20230111-alpha
* 【[uni-app plugin]】
* App平台 修复 3.6.16 版引出的 Vue3 项目 vue 页面内联样式中 rpx 渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/161256)
* App platform Fixed the rpx rendering error bug in the inline style of the Vue3 project vue page introduced by version 3.6.16 [Details](https://ask.dcloud.net.cn/question/161256)
* 微信小程序平台 修复 3.6.16 版引出的 Vue2 项目部分情况下模板中使用多个逻辑表达式运行报错的Bug [详情](https://ask.dcloud.net.cn/question/161190)
* Wechat MiniApp platform fixes the bug that the Vue2 project introduced by version 3.6.16 uses multiple logical expressions in the template to run the bug [details](https://ask.dcloud.net.cn/question/161190)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
* Android平台 修复 3.6.11版引出的 使用 record 模块后 wgt 升级提示没有配置 record 模块的Bug [详情](https://ask.dcloud.net.cn/question/161167)
* Android platform fixes the bug caused by version 3.6.11 that the wgt upgrade prompts that the record module is not configured after using the record module [Details](https://ask.dcloud.net.cn/question/161167)
* Android平台 修复 3.6.16版引出的 部分设备沉浸式状态栏失效的Bug [详情](https://ask.dcloud.net.cn/question/161277)
* Android platform fixes the bug that the immersive status bar of some devices caused by version 3.6.16 [Details](https://ask.dcloud.net.cn/question/161277)
* Android平台 修复 隐私政策提示框在未适配 disagreeMode 模式情况下仅显示一次的Bug [详情](https://uniapp.dcloud.net.cn/tutorial/app-disagreemode.html)
* Android platform fixes the bug that the privacy policy prompt box is only displayed once when the disagreeMode mode is not adapted [Details](https://uniapp.dcloud.net.cn/tutorial/app-disagreemode.html)

#### 3.6.16.20230109-alpha
* 【uni-app】
* App平台、Web平台 优化 input 组件支持 inputmode 属性 [详情](https://uniapp.dcloud.net.cn/component/input.html#inputmode)
* App platform, Web platform optimized input component supports inputmode attribute [Details](https://uniapp.dcloud.net.cn/component/input.html#inputmode)
* App平台 修复 Vue3 项目 nvue 页面 webview 组件 onPostMessage 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/158925)
* App platform Fix the bug that the onPostMessage event of the webview component of the Vue3 project nvue page is invalid [Details](https://ask.dcloud.net.cn/question/158925)
* App平台 修复 Vue3 项目 image 组件使用 base64 显示异常的Bug [详情](https://ask.dcloud.net.cn/question/158368)
* App platform Fix the bug that the image component of the Vue3 project uses base64 to display abnormal bugs [Details](https://ask.dcloud.net.cn/question/158368)
* App-Android平台 修复 nvue 页面 live-pusher 组件拒绝相机权限后再手动开启，回到应用后可能无法调用相机预览的Bug [详情](https://ask.dcloud.net.cn/question/158518)
* App-Android platform fixes the bug that the live-pusher component of the nvue page refuses the camera permission and then manually opens it. After returning to the app, the camera preview may not be called. [Details](https://ask.dcloud.net.cn/question/158518 )
* App-iOS平台 修复 nvue 页面 ad-content-page 组件拉取广告配置失败后无法重新拉取的Bug
* App-iOS platform fixes the bug that the ad-content-page component of the nvue page cannot be re-pulled after failing to pull the ad configuration
* App-iOS平台 修复 nvue 页面 map 组件使用自定义地图样式后切换卫星图无效的Bug [详情](https://ask.dcloud.net.cn/question/159316)
* App-iOS platform fix nvue page map component using a custom map style to switch satellite image invalid bug [details](https://ask.dcloud.net.cn/question/159316)
* App-iOS平台 修复 使用模拟器开启调试后启动应用白屏的Bug [详情](https://ask.dcloud.net.cn/question/160363)
* App-iOS platform fixes the bug that the application starts with a white screen after using the simulator to enable debugging [Details](https://ask.dcloud.net.cn/question/160363)
* App-iOS平台 修复 Vue3 项目中 input 组件 disabled 无法动态修改的Bug [详情](https://ask.dcloud.net.cn/question/157958)
* App-iOS platform fixes the bug that the input component disabled in the Vue3 project cannot be modified dynamically [Details](https://ask.dcloud.net.cn/question/157958)
* Web平台、小程序平台 修复 uni-push2.0 WebSocket连接不稳定的Bug [详情](https://ask.dcloud.net.cn/question/159690)
* Web platform, MiniApp platform repair uni-push2.0 WebSocket connection unstable bug [details](https://ask.dcloud.net.cn/question/159690)
* Web平台 修复 input 组件输入负数带出上次结果的Bug [详情](https://ask.dcloud.net.cn/question/159447)
* Web platform fixes the bug that the negative input component of the input component will bring out the last result [Details](https://ask.dcloud.net.cn/question/159447)
* Web平台 修复 Vue3 项目 uni.navigateTo eventChannel 只会调用一次的Bug [详情](https://ask.dcloud.net.cn/question/155922)
* Web platform Fix the bug that uni.navigateTo eventChannel of Vue3 project will only be called once [Details](https://ask.dcloud.net.cn/question/155922)
* Web平台 修复 Vue3 项目 scroll-view 组件滚动频繁触发视图更新的Bug [详情](https://ask.dcloud.net.cn/question/149557)
* Web platform Fix the bug that scrolling of the scroll-view component of the Vue3 project frequently triggers view updates [Details](https://ask.dcloud.net.cn/question/149557)
* Web平台 修复 Vue3 项目 picker 组件 end 属性读取错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/4075)
* Web platform Fix the bug that the end attribute of the Vue3 project picker component was read incorrectly [Details](https://github.com/dcloudio/uni-app/issues/4075)
* Web平台 修复 uni.setTabBarItem 导致 tab 切换生命周期异常的Bug [详情](https://ask.dcloud.net.cn/question/160739)
* Web platform fixes the bug that uni.setTabBarItem causes the life cycle of tab switching to be abnormal [Details](https://ask.dcloud.net.cn/question/160739)
* 微信小程序平台 修复 Vue2 项目 模板中无法观测数组长度变化的Bug [详情](https://github.com/dcloudio/uni-app/issues/1827)
* Wechat MiniApp platform fixes the bug that the length of the array cannot be observed in the Vue2 project template [details](https://github.com/dcloudio/uni-app/issues/1827)
* 支付宝小程序平台 修复 Vue3 项目运行报错的Bug [详情](https://ask.dcloud.net.cn/question/159362)
* 【uniCloud】
* JQL语法 修复 使用 setUser 方法未传 permission 参数且使用触发器时报错的Bug
* JQL syntax fixes the bug that the permission parameter is not passed when using the setUser method and an error is reported when using a trigger
* JQL语法 修复 add 方法传递的字段值为对象且其中包含null值时报错的Bug
* JQL grammar fixes the bug that the field value passed by the add method is an object and contains a null value and reports an error
* JQL语法 新增 数据库触发器增加 triggerContext 参数，用于在 before 和 after 内共享数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-context)
* JQL syntax adds a database trigger and adds a triggerContext parameter for sharing data in before and after [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-context )
* 阿里云 调整 正式版云存储单文件100MB限制调整为5GB
* Alibaba Cloud adjusted the limit of 100MB for a single file in the official version of cloud storage to 5GB
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
* Android平台 更新 fastjson SDK为 1.2.83 版，解决安全检测可能报`Fastjson反序列化远程代码执行漏洞`的问题
* Android platform update fastjson SDK to version 1.2.83 to solve the problem that security detection may report `Fastjson deserialization remote code execution vulnerability`
* Android平台 更新 一键登录使用的个验SDK为 3.1.0.0 版，优化初始化和预登录速度
* Android platform update The personal test SDK used by one-click login is version 3.1.0.0, which optimizes the initialization and pre-login speed
* Android平台 更新 UniPush 使用的个推核心组件SDK为 3.2.1.0 版；谷歌渠道个推 sdk-for-gj 为 4.4.3.1 版；解决发布到 Google Play 商店可能被下架的问题 [详情](https://ask.dcloud.net.cn/question/160249)
* The Android platform updates the core component SDK used by UniPush to version 3.2.1.0; the Google channel push sdk-for-gj to version 4.4.3.1; solves the problem that publishing to the Google Play store may be removed [Details](https ://ask.dcloud.net.cn/question/160249)
* Android平台 修复 3.6.12版引出的 从系统相册中选择文件在部分鸿蒙设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/159556)
* Android platform fixed the bug caused by version 3.6.12 that selecting files from the system album may cause a crash on some Hongmeng devices [Details](https://ask.dcloud.net.cn/question/159556)
* Android平台 修复 3.6.7版引出的 一键登录 登录完成后自动关闭登录界面，以及登录按钮 loading 动画效果缺失的Bug [详情](https://ask.dcloud.net.cn/question/159898)
* Android platform Fixed the bug that the one-click login automatically closes the login interface after the login is completed and the login button loading animation effect is missing from version 3.6.7 [Details](https://ask.dcloud.net.cn/question/159898)
* Android平台 修复 设置 targetSdkVersion 值大于或等于 30 时使用高德地图引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/159801)
* Android platform fixed the bug that caused the application to crash when the value of targetSdkVersion was set to be greater than or equal to 30 [Details](https://ask.dcloud.net.cn/question/159801)
* iOS平台 更新 UniPush 使用的个推SDK为 2.7.2.0 版，需支持 Swift 环境可能导致 ipa 包变大 [详情](https://uniapp.dcloud.net.cn/tutorial/app-push-unipush.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)
* iOS platform update UniPush uses a push SDK version 2.7.2.0, need to support Swift environment may lead to larger ipa package [details](https://uniapp.dcloud.net.cn/tutorial/app-push-unipush. html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)
* iOS平台 修复 设置应用语言为英文时部分系统界面可能会显示为回退语言的Bug [详情](https://ask.dcloud.net.cn/question/159445)
* iOS platform fixes the bug that some system interfaces may display a fallback language when the application language is set to English [Details](https://ask.dcloud.net.cn/question/159445)
* iOS平台 修复 自定义基座真机运行可能导致 setStorage 保存的数据丢失的Bug [详情](https://ask.dcloud.net.cn/question/159903)
* iOS platform fixes the bug that the data saved by setStorage may be lost when the custom base is running on the real machine [Details](https://ask.dcloud.net.cn/question/159903)
* iOS平台 修复 plus.nativeUI.toast 设置 style 为 inline 时 iconWidth/iconHeight 属性失效的Bug [详情](https://ask.dcloud.net.cn/question/160192)
* iOS platform fixes the bug that the iconWidth/iconHeight properties are invalid when plus.nativeUI.toast is set to inline [Details](https://ask.dcloud.net.cn/question/160192)
* iOS平台 修复 uni-AD 优量汇开屏广告展示期间弹出提示框可能导致开屏界面不会关闭的Bug
* iOS platform fixes the bug that the pop-up prompt box may cause the screen opening interface to not close during the uni-AD Youlianghui App Open Ads display
* iOS平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备返回数据没有 advertisData 字段的Bug [详情](https://ask.dcloud.net.cn/question/160178)
* iOS platform fixes the bug that startBluetoothDevicesDiscovery searches for nearby Bluetooth devices and returns data without the advertiseData field. [Details](https://ask.dcloud.net.cn/question/160178)

#### 3.6.14.20221216-alpha
* 【uni-app】
* App-Android平台 修复 使用 canvas 模块后 wgt 升级提示没有配置 canvas 模块的Bug [详情](https://ask.dcloud.net.cn/question/159283)
* App-Android platform fixes the bug that the wgt upgrade prompts that the canvas module is not configured after using the canvas module [Details](https://ask.dcloud.net.cn/question/159283)
* App-iOS平台 修复 UniPush 2.0 在vue2项目中 启用离线推送后，调用 uni.getPushClientId 某些情况下获取不到cid的Bug [详情](https://ask.dcloud.net.cn/question/158921)
* App-iOS platform fixes UniPush 2.0. After enabling offline push in the vue2 project, calling uni.getPushClientId can not get the cid bug in some cases [Details](https://ask.dcloud.net.cn/question/158921 )
* 小程序平台 修复 3.6.13版引出的 使用 async/await 发布后运行报错的Bug [详情](https://ask.dcloud.net.cn/question/159413)
* 【uniCloud】
* JQL语法 新增 触发器内可以获取用户信息和本次数据库操作结果 [用户信息](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#user-info)、[执行结果](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#result)
* JQL syntax adds triggers to obtain user information and the results of this database operation [User Information](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#user-info), [Execution result](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#result)
* JQL语法 新增 触发器内可以判断当前执行的语句是否和指定语句相同 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#is-equal-to-jql)
* JQL syntax adds triggers to determine whether the currently executed statement is the same as the specified statement [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#is-equal-to -jql)
* JQL语法 调整 对于 schema 内定义的复杂类型数据（file、array、object）类型的字段，忽略赋给此字段的 null 值
* JQL syntax adjustment For fields of complex type data (file, array, object) defined in the schema, ignore the null value assigned to this field
* 本地调试插件 修复 在部分旧系统运行时本地调试服务启动失败的Bug [详情](https://ask.dcloud.net.cn/question/159343)
* Local debugging plug-in Fix the bug that the local debugging service fails to start when some old systems are running [Details](https://ask.dcloud.net.cn/question/159343)
* 本地调试插件 修复 3.6.12版引出的 云函数 调试运行 无法进行Debug断点调试的Bug
* The local debugging plug-in fixes the bug that cannot be debugged with Debug breakpoints when debugging and running cloud functions introduced by version 3.6.12
* 本地调试插件 修复 阿里云正式版本地云函数内上传文件到云存储时，上传的文件无法在 uniCloud web 控制台看到的Bug [详情](https://ask.dcloud.net.cn/question/159109)
* The local debugging plug-in fixes the bug that when uploading files to the cloud storage in the cloud function of the official version of Alibaba Cloud, the uploaded files cannot be seen in the uniCloud web console. [Details](https://ask.dcloud.net.cn/question /159109)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
* iOS平台 修复 plus.push.getClientInfoAsync 在应用热重启后调用不触发回调的Bug
* iOS platform fix the bug that calling plus.push.getClientInfoAsync does not trigger callback after app hot restart

#### 3.6.12.20221207-alpha
* 【uniCloud】
  + 本地调试插件 修复 云函数调用云函数时，被调用云函数无返回值导致报错的Bug
  + Local debugging plug-in fixes the bug that when the cloud function calls the cloud function, the called cloud function has no return value and causes an error
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + iOS平台 修复 3.6.11 版本引出的 显示开屏广告时弹出系统 alert 窗偶现崩溃的Bug
  + iOS platform fixes the bug that the system alert window occasionally crashes when the App Open Ads is displayed, which is caused by version 3.6.11

#### 3.6.11.20221205-alpha
* 【uni-app】
  + 新增 ad-interactive 互动广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interactive.html)
  + Added ad-interactive interactive advertising component [Details](https://uniapp.dcloud.net.cn/component/ad-interactive.html)
  + App平台 新增 【ext api】 Wi-Fi 模块 [详情](https://uniapp.dcloud.net.cn/api/system/wifi.html)
  + App platform added [ext api] Wi-Fi module [Details](https://uniapp.dcloud.net.cn/api/system/wifi.html)
  + App平台 优化 Vue2 项目 component is 支持传入组件选项和构造函数 [详情](https://ask.dcloud.net.cn/question/140044)
  + App platform optimized Vue2 project component is supports passing in component options and constructors [Details](https://ask.dcloud.net.cn/question/140044)
  + App平台 修复 nvue 页面 slider 组件某些情况下位置位置计算不准确的Bug [详情](https://ask.dcloud.net.cn/question/152714)
  + App platform Fix the bug that the position calculation of the nvue page slider component is inaccurate in some cases [Details](https://ask.dcloud.net.cn/question/152714)
  + App-Android平台 修复 使用 tabbar 后页面多次跳转返回可能引起路由管理异常的Bug [详情](https://ask.dcloud.net.cn/question/158462)
  + App-Android platform fixes the bug that may cause abnormal routing management after multiple page jumps after using the tabbar [Details](https://ask.dcloud.net.cn/question/158462)
  + App-Android平台 修复 3.6.9 版本引出的 uni.switchTab 在特殊场景可能无法正常切换页面的Bug [详情](https://ask.dcloud.net.cn/question/157720)
  + App-Android platform fixed the bug that the uni.switchTab introduced in version 3.6.9 may not be able to switch pages normally in special scenarios [Details](https://ask.dcloud.net.cn/question/157720)
  + App-iOS平台 补齐 【ext api】 uni.onMemoryWarning [详情](https://ext.dcloud.net.cn/plugin?id=10071)
  + App-iOS platform complement [ext api] uni.onMemoryWarning [details](https://ext.dcloud.net.cn/plugin?id=10071)
  + App-iOS平台 修复 3.6.7 版本引出的 ad 组件偶现加载优量汇广告成功但无法正常渲染的Bug
  + App-iOS platform fixed the bug that the ad component introduced in version 3.6.7 occasionally loaded the Youlianghui ad successfully but could not render normally
  + Web平台 修复 Vue3 项目 canvas 组件监听事件报错的Bug [详情](https://ask.dcloud.net.cn/question/158252)
  + Web platform fixed the bug that the canvas component of the Vue3 project reported an error [Details](https://ask.dcloud.net.cn/question/158252)
  + 小程序平台 优化 vue3 项目使用 import 导入非 static 目录的资源生成后名称默认补充 hash [详情](https://github.com/dcloudio/uni-app/issues/4011)
  + MiniApp platform optimization vue3 project uses import to import resources in non-static directories. After generation, the name is added to hash by default [details](https://github.com/dcloudio/uni-app/issues/4011)
  + 微信小程序平台 修复 Vue3 项目 v-for 循环事件可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/4015)
  + Wechat MiniApp platform fixes the bug that the v-for loop event of the Vue3 project may be confused [details](https://github.com/dcloudio/uni-app/issues/4015)
  + 微信小程序平台 修复 Vue3 项目 wxs 热更新失效的Bug [详情](https://ask.dcloud.net.cn/question/158252)
  + The WeChat MiniApp platform fixes the bug that the wxs hot update of the Vue3 project fails [details](https://ask.dcloud.net.cn/question/158252)
  + uni-im 全端支持Vue3 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
  + uni-im fully supports Vue3 [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
  + uni-im 新增多媒体消息（含：语音、图片、视频、任意文件）和代码发送
  + uni-im adds multimedia messages (including: voice, picture, video, arbitrary files) and code sending
  + uts插件 新增 在uts文件中可使用条件编译 //#ifdef APP-ANDROID 和 //#ifdef APP-IOS [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#uts-%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)
  + The uts plugin is newly added to use conditional compilation in the uts file //#ifdef APP-ANDROID and //#ifdef APP-IOS [details](https://uniapp.dcloud.net.cn/tutorial/platform.html# uts-%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)
  + uts插件 App-Android平台 调整 内置库包名为`io.dcloud.uts`，类名为`UTSAndroid` [详情](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html#iodcloudutsandroid)
  + uts plugin App-Android platform adjusts the built-in library package name `io.dcloud.uts`, class name `UTSAndroid` [Details](https://uniapp.dcloud.net.cn/plugin/uts-for-android .html#iodcloudutsandroid)
  + uts插件 App-Android平台 优化 setTimeOut 函数线程池大小，支持多异步任务场景
  + uts plugin App-Android platform optimizes the setTimeOut function thread pool size, supports multiple asynchronous task scenarios
  + uts插件 App-Android平台 修复 UTSJSONObject 构造函数无法传递复杂 JSON 参数的Bug
  + uts plugin App-Android platform fixes the bug that the UTSJSONObject constructor cannot pass complex JSON parameters
  + uts插件 App-Android平台 修复 UTSJSONObject 嵌套序列化存在冗余字段的Bug
  + uts plug-in App-Android platform fixes the bug of redundant fields in nested serialization of UTSJSONObject
  + uts插件 App-Android平台 修复 Array 索引不支持 number 类型的Bug
  + uts plugin App-Android platform fixes the bug that the Array index does not support the number type
  + uts插件 App-Android平台 修复 JSON.stringify 参数为数组时返回字符串格式不正确的Bug
  + uts plugin App-Android platform fixes the bug that JSON.stringify returns an incorrect string format when the parameter is an array
  + uts插件 App-iOS平台 新增 内置库`DCloudUTSFoundation` [详情](https://uniapp.dcloud.net.cn/plugin/uts-for-ios.html#dcloudutsfoundation)
  + uts plugin App-iOS platform added built-in library `DCloudUTSFoundation` [Details](https://uniapp.dcloud.net.cn/plugin/uts-for-ios.html#dcloudutsfoundation)
  + uts插件 App-iOS平台 补齐 内置对象 Date、Number、Set、String、RegExp
  + uts plug-in App-iOS platform complement built-in objects Date, Number, Set, String, RegExp
  + uts插件 App-iOS平台 修复 console 打印对象在控制台输出格式不正确的Bug
  + uts plugin App-iOS platform Fix the bug that the output format of the console print object is incorrect in the console
  + hello uts 新增 系统API Alert 弹窗示例 [详情](https://ext.dcloud.net.cn/plugin?id=9892)
  + hello uts added system API Alert popup example [Details](https://ext.dcloud.net.cn/plugin?id=9892)
  + hello uts 补齐 iOS平台 三方SDK toast 消息提示框，监听设备位置变化示例 [详情](https://ext.dcloud.net.cn/plugin?id=9892)
  + hello uts complements the three-party SDK toast message prompt box on the iOS platform, and listens to the example of device location changes [Details](https://ext.dcloud.net.cn/plugin?id=9892)
* 【uniCloud】
  + 【重要】新增 数据库扩展js，{表名}.schema.ext.js，可实现数据库触发器。推荐用触发器替代action，更安全 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger)
  + [Important] Added database extension js, {table name}.schema.ext.js, which can implement database triggers. It is recommended to use triggers instead of actions, which is more secure [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger)
  + 【重要】uni-pay 2.0，从公共模块升级为包含前端页面、uni-pay-co云对象，让支付更加简单省心 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-pay.html)
  + [Important] uni-pay 2.0, upgraded from a public module to include front-end pages and uni-pay-co cloud objects, making payment easier and worry-free [Details](https://uniapp.dcloud.net.cn/uniCloud/ uni-pay.html)
  + JQL语法 修复 where 和 permission 内使用负数常量时报错的Bug [详情](https://ask.dcloud.net.cn/question/157993)
  + JQL syntax fixes the error bug when negative constants are used in where and permission [Details](https://ask.dcloud.net.cn/question/157993)
  + 本地调试插件 修复 调用 clientDB、jql扩展 时报找不到 action 的Bug [详情](https://ask.dcloud.net.cn/question/157997)
  + Local debugging plug-in to fix the bug that the action cannot be found when calling clientDB and jql extension [Details](https://ask.dcloud.net.cn/question/157997)
  + uniIdRouter 修复 vue3项目跳转时报错的Bug [详情](https://ask.dcloud.net.cn/question/158015)
  + uniIdRouter fixes the bug that the vue3 project jumps and reports an error [Details](https://ask.dcloud.net.cn/question/158015)
  + 【重要】uni-id-co 新增 外部系统联登接口，可为外部系统创建与uni-id相对应的账号，使该账号可以使用依赖uniId的系统及功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#external)
  + [Important] uni-id-co has added an external system login interface, which can create an account corresponding to uni-id for external systems, so that the account can use systems and functions that rely on uniId [details](https:// uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#external)
  + uni-id-co 新增 设置密码接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#set-pwd)
  + uni-id-co added a password setting interface [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#set-pwd)
  + uni-id-co 新增 URL化请求时鉴权签名验证 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#http-reqeust-auth)
  + uni-id-co added authentication signature verification when requesting URL [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#http-reqeust-auth)
  + uni-id-co 新增匹配到的用户不可在当前应用登录时的错误码 `uni-id-account-not-exists-in-current-app` [错误码说明](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#errcode)
  + uni-id-co added the error code `uni-id-account-not-exists-in-current-app` when the matched user cannot log in in the current app` [error code description](https://uniapp. dcloud.net.cn/uniCloud/uni-id-summary.html#errcode)
  + uni-id-co 修复 微信登录时用户未设置头像的报错问题
  + uni-id-co fixed the error that the user did not set the avatar when logging in on WeChat
  + uni-id-co 修复 无法从 clientInfo 中获取 uniIdToken
  + uni-id-co fix can't get uniIdToken from clientInfo
  + uni-id-pages 新增 登录后跳转设置密码页面配置项`setPasswordAfterLogin` [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#set-pwd-after-login)
  + uni-id-pages added configuration item `setPasswordAfterLogin` to jump to set password page after login [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#set-pwd- after-login)
  + uni-id-pages 新增 设置密码页面
  + uni-id-pages added new setting password page
  + uni-id-pages 优化 toast 错误提示时间为3秒
  + uni-id-pages optimized toast error prompt time is 3 seconds
  + uni-admin 调整 群发短信功能的 schema 文件命名规范，将`batch-sms-template` `batch-sms-task` `batch-sms-result` 更改为 `opendb-sms-temlate` `opendb-sms-task` `opendb-sms-log` 以符合opendb规范
  + uni-admin adjusted the schema file naming convention of the group SMS function, changed `batch-sms-template` `batch-sms-task` `batch-sms-result` to `opendb-sms-template` `opendb-sms- task` `opendb-sms-log` to comply with the opendb specification
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 新增 Record、Camera、Barcode、Orientation模块，解决iOS平台隐私合规检测可能报包含麦克风、相机/相册、运动等权限的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-modules.html#bcor)
  + Added Record, Camera, Barcode, and Orientation modules to solve the problem that iOS platform privacy compliance detection may report permissions including microphone, camera/album, and motion [Details](https://uniapp.dcloud.net.cn/tutorial /app-modules.html#bcor)
  + Android平台 更新 UniPush 使用的个推SDK为 3.2.13.0 版，个推核心组件SDK为 3.1.12.0 版；谷歌渠道个推SDK为 4.10.1.0 版；解决隐私合规检测可能报超频采集的问题
  + Android platform update the Gotui SDK used by UniPush to version 3.2.13.0, the Gotui core component SDK to version 3.1.12.0; the Google channel Gotui SDK to version 4.10.1.0; solve the problem that privacy compliance detection may report overclocking collection
  + iOS平台 更新 uni-AD 快手广告SDK为 3.3.33 版；快手内容联盟SDK为 3.3.32 版；今日头条穿山甲SDK为 4.9.0.5 版；穿山甲GroMore广告SDK为 3.8.0.2 版
  + iOS platform update uni-AD Kuaishou Advertising SDK to version 3.3.33; Kuaishou Content Alliance SDK to version 3.3.32; Toutiao Pangolin SDK to version 4.9.0.5; Pangolin GroMore Advertising SDK to version 3.8.0.2
  + iOS平台 修复 IAP支付 订单数据 orderInfo 参数异常时引起应用假死的Bug
  + iOS platform fixed the bug that caused the application to freeze when the orderInfo parameter of IAP payment order data was abnormal
  + iOS平台 修复 3.6.10版本引出的 三方登录授权不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/158380)
  + iOS platform fixed the bug that the three-party login authorization does not trigger the callback caused by version 3.6.10 [Details](https://ask.dcloud.net.cn/question/158380)

#### 3.6.10.20221121-alpha
* 【uni-app】
  + App平台 修复 Vue2 项目 编辑 uts 插件代码热更新失效的Bug
  + App platform Fix Vue2 project edit uts plug-in code hot update invalid bug
  + App平台 修复 Vue2 项目 nvue 页面不支持 uts 插件的Bug [详情](https://ask.dcloud.net.cn/question/157435)
  + App platform Fix the bug that the nvue page of the Vue2 project does not support the uts plugin [Details](https://ask.dcloud.net.cn/question/157435)
  + App平台 修复 darkmode 模式下设置 statusBar 颜色不正常的Bug
  + App platform Fix the bug that the statusBar color is not normal in darkmode mode
  + App平台 修复 nvue 首页设置 navigationBarTextStyle 无效的Bug [详情](https://ask.dcloud.net.cn/question/150485)
  + App platform fix nvue homepage setting navigationBarTextStyle invalid bug [details](https://ask.dcloud.net.cn/question/150485)
  + App平台 修复 uni.startSoterAuthentication（生物识别）识别错误时 loading 没有文字提示的Bug [详情](https://ask.dcloud.net.cn/question/157353)
  + App platform fixed the bug that there was no text prompt for loading when uni.startSoterAuthentication (biometric identification) was incorrectly recognized [Details](https://ask.dcloud.net.cn/question/157353)
  + App-Android平台 修复 uni.request 不支持 head 请求的Bug [详情](https://ask.dcloud.net.cn/question/136717)
  + App-Android platform fixes the bug that uni.request does not support head requests [Details](https://ask.dcloud.net.cn/question/136717)
  + App-Android平台 修复 页面中存在多个 input 组件时获取焦点光标位置可能不正确的Bug
  + App-Android platform fixed the bug that the focus cursor position may be incorrect when there are multiple input components on the page
  + App-Android平台 修复 nvue live-pusher 组件在 Android11+ 设备使用移动网络无法预览的Bug [详情](https://ask.dcloud.net.cn/question/156532)
  + App-Android platform fixed the bug that the nvue live-pusher component could not be previewed on Android11+ devices using the mobile network [Details](https://ask.dcloud.net.cn/question/156532)
  + App-Android平台 调整 uts插件 Date.getDay 从以周日为1统一调整为周日为0
  + App-Android platform adjusted the uts plugin Date.getDay from 1 on Sunday to 0 on Sunday
  + App-Android平台 修复 uts插件 不支持函数参数为数组的Bug
  + App-Android platform fixes the bug that the uts plugin does not support the function parameter as an array
  + App-Android平台 修复 uts插件 JSON.parse 不支持 JSONArray 的Bug
  + App-Android platform fixes the bug that the uts plugin JSON.parse does not support JSONArray
  + Web平台 修复 Vue3 项目 --window-top 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/157164)
  + Web platform fix the bug of Vue3 project --window-top calculation error [details](https://ask.dcloud.net.cn/question/157164)
  + Web平台 修复 Vue3 项目配置全局 loading、error 组件无效的Bug [详情](https://ask.dcloud.net.cn/question/157122)
  + Web platform fixes the bug that the Vue3 project configuration global loading and error components are invalid [Details](https://ask.dcloud.net.cn/question/157122)
  + 支付宝小程序平台 修复 page-meta 组件 root-font-size 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/157168)
  + Alipay MiniApp platform fixes the bug that the root-font-size attribute of the page-meta component is invalid [details](https://ask.dcloud.net.cn/question/157168)
  + uni-im 支持 非uniCloud 或 不基于uni-id-pages 开发的项目 接入 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
  + uni-im supports access to non-uniCloud or projects not developed based on uni-id-pages [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
* 【uniCloud】
  + 【重要】阿里云商用版正式上线 [详情](https://ask.dcloud.net.cn/article/40144)
  + [Important] Alibaba Cloud Commercial Edition is officially launched [Details](https://ask.dcloud.net.cn/article/40144)
  + JQL语法 新增 支持 geoNear 以实现地理位置查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#geo-near)
  + Added support for geoNear in JQL syntax to realize geographic location query [Details](https://uniapp.dcloud.net.cn/uniCloud/jql.html#geo-near)
  + JQL语法 修复 部分有权限进行的查询被误报权限校验未通过的Bug
  + JQL syntax repaired the bug that some queries with permissions were falsely reported as failed permission verification
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + Android平台 新增 隐私政策提示框支持 showAlways 配置是否每次启动都弹窗提示 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
  + Added support for the privacy policy prompt box on the Android platform. ShowAlways configures whether to pop up a prompt every time it starts [Details](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
  + Android平台 修复 监听系统暗黑模式主题切换事件可能无效的Bug [详情](https://ask.dcloud.net.cn/question/157497)
  + Android platform repaired the bug that the monitoring system dark mode theme switching event might not work [Details](https://ask.dcloud.net.cn/question/157497)
  + Android平台 修复 云端打包 使用自有证书可能报 `Invalid keystore format` 错误的Bug [详情](https://ask.dcloud.net.cn/question/157057)
  + Android platform fixed the bug that `Invalid keystore format` error may be reported when using its own certificate for cloud packaging [Details](https://ask.dcloud.net.cn/question/157057)
  + Android平台 修复 云端打包 配置应用清单文件 AndroidManifest.xml 的 package 属性值与包名相同时打包失败的Bug
  + Android platform fixed cloud packaging configuration application manifest file AndroidManifest.xml package attribute value is the same as the package name when the packaging failed Bug
  + iOS平台 修复 3.6.7版本引出的 设置启动页不自动关闭无效的Bug [详情](https://ask.dcloud.net.cn/question/157721)
  + iOS platform fixed the invalid bug caused by version 3.6.7 that the setting startup page does not automatically close [Details](https://ask.dcloud.net.cn/question/157721)
  + iOS平台 修复 plus.screen.lockOrientation、plus.screen.unlockOrientation 在 iOS16 设备无效的Bug [详情](https://ask.dcloud.net.cn/question/155357)
  + iOS platform Fix the bug that plus.screen.lockOrientation and plus.screen.unlockOrientation are invalid on iOS16 devices [Details](https://ask.dcloud.net.cn/question/155357)
  + iOS平台 修复 播放音频时无法正常录音的Bug [详情](https://ask.dcloud.net.cn/question/157408)
  + iOS platform fixes the bug that the audio cannot be recorded normally when playing audio [Details](https://ask.dcloud.net.cn/question/157408)
  + iOS平台 修复 设置暗黑模式跟随系统主题可能无效的Bug
  + iOS platform fixes the bug that setting the dark mode to follow the system theme may not work
* 【uni小程序SDK】
* 【uni MiniApp SDK】
  + Android平台 修复 默认包含设置角标权限的Bug
  + Android platform fixes the bug that includes setting corner badge permissions by default

#### 3.6.9.20221114-alpha
* 【uni-app】
  + 新增 uni错误规范 [详情](https://uniapp.dcloud.net.cn/tutorial/err-spec.html)
  + Added uni error specification [details](https://uniapp.dcloud.net.cn/tutorial/err-spec.html)
  + App、Web平台 新增 暗黑模式（DarkMode） [详情](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
  + Added Dark Mode (DarkMode) on App and Web platforms [Details](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
  + App、Web平台 修复 radio 组件禁用状态样式异常的Bug
  + App, Web platform Fix the bug that the style of the radio component is disabled and the style is abnormal
  + App平台 新增 nvue 页面 MapContext 支持 setLocMarkerIcon 方法 [详情](https://uniapp.dcloud.net.cn/api/location/map.html#setLocMarkerIcon)
  + App platform added nvue page MapContext supports setLocMarkerIcon method [Details](https://uniapp.dcloud.net.cn/api/location/map.html#setLocMarkerIcon)
  + App平台 新增 nvue list 组件支持 render-reverse 属性 [详情](https://uniapp.dcloud.net.cn/component/list.html#%E5%B1%9E%E6%80%A7)
  + App platform added nvue list component to support render-reverse attribute [Details](https://uniapp.dcloud.net.cn/component/list.html#%E5%B1%9E%E6%80%A7)
  + App平台 修复 Vue2 项目使用组合式 API 时 onReady 声明周期 template ref 未绑定的Bug
  + App platform Fixed the bug that the template ref in the onReady statement cycle was not bound when the Vue2 project used the combined API
  + App平台 修复 Vue3 项目 template ref 会被代理的Bug
  + App platform fixes the bug that the template ref of the Vue3 project will be proxied
  + App平台 修复 Vue3 项目设置导航栏背景色为 rgba 色值无效的Bug [详情](https://ask.dcloud.net.cn/question/135111)
  + App platform Fix the bug that the background color of the navigation bar of the Vue3 project is set to an invalid rgba color value [Details](https://ask.dcloud.net.cn/question/135111)
  + App平台 修复 Vue3 项目根节点 height:100% 无效的Bug [详情](https://ask.dcloud.net.cn/question/156564)
  + App platform fix Vue3 project root node height: 100% invalid bug [Details](https://ask.dcloud.net.cn/question/156564)
  + App-Android平台 新增 【ext api】 uni.onMemoryWarning [详情](https://ext.dcloud.net.cn/plugin?id=10071)
  + App-Android platform added [ext api] uni.onMemoryWarning [Details](https://ext.dcloud.net.cn/plugin?id=10071)
  + App-Android平台 新增 uts插件 生命周期函数 on/offAppTrimMemory、on/offAppConfigChange 等 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#iodcloudutsandroid)
  + App-Android platform added uts plugin lifecycle functions on/offAppTrimMemory, on/offAppConfigChange, etc. [Details](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#iodcloudutsandroid)
  + App-iOS平台 修复 Vue3 项目录音播放无效的Bug [详情](https://ask.dcloud.net.cn/question/155741)
  + App-iOS platform fixes the bug that Vue3 project recording playback is invalid [Details](https://ask.dcloud.net.cn/question/155741)
  + 微信小程序平台 修复 3.6.8 版本引出的 Vue3 项目在 vite.config.js 内定义编译注入的全局常量导致使用了 uniCloud 的客户端报错的Bug
  + Wechat MiniApp platform fixes the bug that the Vue3 project introduced in version 3.6.8 defines the compiled and injected global constants in vite.config.js, which causes the client using uniCloud to report an error
  + 支付宝小程序平台 修复 uni.showLoading 提示 mask 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/156944)
  + Alipay MiniApp platform fixes the bug that uni.showLoading prompts that the mask parameter is invalid [Details](https://ask.dcloud.net.cn/question/156944)
  + 支付宝小程序平台 修复 Vue3 项目 eventChannel 通信失败的Bug [详情](https://github.com/dcloudio/uni-app/issues/3945)
  + Alipay MiniApp platform fixes the bug of eventChannel communication failure of Vue3 project [details](https://github.com/dcloudio/uni-app/issues/3945)
  + 字节跳动小程序平台 优化 默认启用 component2 [详情](https://ask.dcloud.net.cn/question/156550)
  + ByteDance MiniApp platform optimization enables component2 by default [Details](https://ask.dcloud.net.cn/question/156550)
  + hello uts 新增 Android平台获取用户输入、播放asset音频、调用系统拍照示例 [详情](https://ext.dcloud.net.cn/plugin?id=9892)
  + hello uts added an example of obtaining user input, playing asset audio, and calling the system to take pictures on the Android platform [Details](https://ext.dcloud.net.cn/plugin?id=9892)
* 【uniCloud】
  + 【重要】新增 uni-im 云端一体的、全平台的、免费的、开源即时通讯系统 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
  + [Important] Added uni-im cloud-integrated, full-platform, free, open-source instant messaging system [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
  + jql语法 修复 使用 add 数据库运算方法报错的Bug [详情](https://ask.dcloud.net.cn/question/156261)
  + jql syntax fixes the bug of using the add database operation method to report errors [details](https://ask.dcloud.net.cn/question/156261)
  + jql语法 修复 使用部分 js 关键字导致查询条件或 field 报错的Bug
  + jql syntax fixes the bug that using some js keywords causes query conditions or field errors
  + jql语法 修复 使用 getTemp 联表查询时，如果主表关联字段在 schema 内为数组类型但实际数据无此字段时报错的Bug
  + jql syntax fixes the bug that an error will be reported if the associated field of the main table is an array type in the schema but the actual data does not have this field when using getTemp joint table query
  + 云对象 新增 url 化支持通过多段 path 路径调用方法，以第一段作为云对象方法名 [详情](https://uniapp.dcloud.net.cn/uniCloud/http.html#request-co-url)
  + Added urlization support for cloud objects to call methods through multi-segment paths, and use the first segment as the cloud object method name [Details](https://uniapp.dcloud.net.cn/uniCloud/http.html#request-co- url)
  + 本地调试插件 修复 HBuilderX 3.6.7 引出的断点进入nodejs内置模块的Bug
  + Local debugging plug-in to fix the bug that the breakpoint introduced by HBuilderX 3.6.7 enters the nodejs built-in module
  + 安全网络 调整 统一错误码规范 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#err-code)
  + Secure network adjustment Unified error code specification [Details](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#err-code)
  + uni-id 升级密码加密算法，支持hmac-sha256加密 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password-safe)
  + uni-id upgrade password encryption algorithm, support hmac-sha256 encryption [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password-safe)
  + uni-id 新增 开发者可以自定义密码加密规则 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#custom-password-encrypt)
  + uni-id added that developers can customize password encryption rules [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#custom-password-encrypt)
  + uni-id 新增 支持将其他系统用户迁移至uni-id [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#move-users-to-uni-id)
  + uni-id added support for migrating other system users to uni-id [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#move-users-to-uni- id)
  + uni-id 支持URL化方式请求 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#adapter-http)
  + uni-id supports URL-based requests [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#adapter-http)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 新增 Stripe支付支持设置账单信息 [详情](https://uniapp.dcloud.net.cn/tutorial/app-payment-stripe.html)
  + Added support for setting billing information for Stripe payment [Details](https://uniapp.dcloud.net.cn/tutorial/app-payment-stripe.html)
  + Android平台 新增 支持暗黑模式 [详情](https://ask.dcloud.net.cn/article/36995)
  + Added support for dark mode on Android platform [Details](https://ask.dcloud.net.cn/article/36995)
  + Android平台 更新 uni-AD 今日头条穿山甲广告SDK 为 4.9.0.8 版；穿山甲GroMore广告SDK 为 4.8.0.0 版；腾讯优量汇广告SDK 为 4.492.1362 版
  + Android platform update uni-AD Jinri Toutiao Pangolin Advertising SDK to version 4.9.0.8; Pangolin GroMore Advertising SDK to version 4.8.0.0; Tencent Youlianghui Advertising SDK to version 4.492.1362
  + Android平台 更新 高德地图SDK为 9.5.0 版，高德定位SDK为 6.1.0 版，解决隐私合规检测可能报高德SDK收取MAC地址、ANDROID ID的问题 [详情](https://ask.dcloud.net.cn/question/154268)
  + Android platform updated Amap SDK to version 9.5.0, and Amap positioning SDK to version 6.1.0 to solve the problem that privacy compliance detection may report MAC address and ANDROID ID to Amap SDK [details](https:// ask.dcloud.net.cn/question/154268)
  + Android平台 修复 3.6.7版本引出的 应用后台切前台插屏广告可能不显示的Bug
  + Android platform fixes the bug caused by the 3.6.7 version that the application background cuts the foreground Interstitial Ads may not be displayed
  + Android平台 修复 视频播放控件 VideoPlayer 隐私合规检测可能报`数字天堂SDK获取传感器`的Bug [详情](https://ask.dcloud.net.cn/question/156360)
  + Android platform fixed video player control VideoPlayer privacy compliance detection may report `Digital Paradise SDK acquisition sensor` bug [Details](https://ask.dcloud.net.cn/question/156360)
  + Android平台 修复 原生隐私政策提示框在部分设备 message 内容可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/156445)
  + Android platform fixed the bug that the native privacy policy prompt box may display abnormal message content on some devices [Details](https://ask.dcloud.net.cn/question/156445)
  + Android平台 修复 uts插件 libs 包含三方 aar 时，丢失部分 jar 包的Bug
  + Android platform fixes the bug that some jar packages are missing when the uts plugin libs contains three-party aar
  + Android平台 修复 uts插件 无法继承内部类的Bug
  + Android platform fixes the bug that the uts plugin cannot inherit internal classes
  + iOS平台 修复 3.6.0版本引出的 开屏广告自定义底部图片、背景色不生效的Bug
  + iOS platform fixes the bug that the custom bottom image and background color of the App Open Ads caused by version 3.6.0 do not take effect
  + iOS平台 修复 标题栏 titleNView 设置默认导航栏颜色可能导致与状态栏颜色不一致的Bug
  + iOS platform fixed the bug that the title bar titleNView setting the default navigation bar color may cause inconsistent color with the status bar
  + iOS平台 修复 setUIStyle 设置暗黑模式可能无效的Bug
  + iOS platform fixes the bug that setUIStyle may not work when setting the dark mode
  + iOS平台 修复 uts插件 类构造函数无法使用外参的Bug
  + iOS platform fixes the bug that the class constructor of the uts plugin cannot use external parameters

#### 3.6.8.20221027-alpha
* 【uni-app】
  + 新增 Vue2 项目支持使用组合式 API [详情](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)
  + Added support for Vue2 projects to use Composition API [Details](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)
  + 修复 3.6.7 版本引出的 Vue3 项目使用 TypeScript 后部分对象无法访问的Bug [详情](https://github.com/dcloudio/uni-app/issues/3930)
  + Fix the bug that some objects cannot be accessed after the Vue3 project introduced in version 3.6.7 uses TypeScript [Details](https://github.com/dcloudio/uni-app/issues/3930)
  + App平台、Web平台 新增 地理位置更新相关接口 [详情](https://uniapp.dcloud.net.cn/api/location/location-change.html)
  + App platform, Web platform Added location update related interface [Details](https://uniapp.dcloud.net.cn/api/location/location-change.html)
  + App平台 修复 3.6.7 版本引出 Vue3 项目的 nvue 页面全局样式无效的Bug [详情](https://ask.dcloud.net.cn/question/155639)
  + App platform Fixed the bug that the global style of the nvue page of the Vue3 project was invalid due to version 3.6.7 [Details](https://ask.dcloud.net.cn/question/155639)
  + App平台 修复 Vue2 项目移除页面根节点后导致事件异常的Bug [详情](https://ask.dcloud.net.cn/question/155057)
  + App platform Fix the bug that caused the event to be abnormal after the Vue2 project removed the root node of the page [Details](https://ask.dcloud.net.cn/question/155057)
  + App平台 修复 Vue2 项目列表不使用 index 作为 key 时更新数据导致事件异常的Bug [详情](https://ask.dcloud.net.cn/question/155238)
  + App platform Fix the bug that when the Vue2 item list does not use the index as the key, the update data causes the event to be abnormal. [Details](https://ask.dcloud.net.cn/question/155238)
  + App-Android平台 优化 Vue3 项目 minUserAgentVersion 默认配置为 49，避免低版本webview上白屏无提示 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
  + App-Android platform optimized Vue3 project minUserAgentVersion is configured to 49 by default, avoiding a white screen with no prompts on low-version webviews [Details](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
  + App-Android平台 修复 uni.getStorageSync在某些情况下可能报`SyntaxError`错误的Bug [详情](https://ask.dcloud.net.cn/question/154284)
  + App-Android platform fix the bug that uni.getStorageSync may report `SyntaxError` in some cases [Details](https://ask.dcloud.net.cn/question/154284)
  + App-iOS平台 修复 在 iOS16 设备 nvue 页面关闭、开启下拉刷新效果时偶现崩溃的Bug
  + App-iOS platform fixed the bug that occasionally crashed when the nvue page was closed and the pull-down refresh effect was enabled on iOS16 devices
  + App-iOS平台 修复 3.6.0版本引出的 nvue list 组件内使用 ad 信息流广告组件偶发渲染空白的Bug [详情](https://ask.dcloud.net.cn/question/155752)
  + App-iOS platform fixes the bug that occasionally renders blank when using the ad Native Ads component in the nvue list component introduced by version 3.6.0 [Details](https://ask.dcloud.net.cn/question/155752)
  + Web平台 修复 Vue2 项目中 css 媒体查询中使用 page 选择器不生效的Bug
  + Web platform Fixed the bug that the page selector used in the css media query in the Vue2 project did not take effect
  + 【重要】微信小程序平台 新增 uni-AD 安全激励视频，提供防刷的服务器回调 [详情](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + [Important] Added uni-AD security incentive video on the WeChat MiniApp platform, providing anti-scraping server callback [details](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + 支付宝小程序 新增 uni.onKeyboardHeightChange 监听键盘高度变化 [详情](https://uniapp.dcloud.net.cn/api/key.html#onkeyboardheightchange)
  + Alipay MiniApp adds uni.onKeyboardHeightChange to monitor keyboard height changes [Details](https://uniapp.dcloud.net.cn/api/key.html#onkeyboardheightchange)
  + 支付宝小程序 修复 小程序组件中的事件触发时机较早时在 Vue 组件中无法监听的Bug
  + The Alipay MiniApp fixes the bug that the Vue component cannot be listened to when the event in the MiniApp component is triggered earlier
* 【uniCloud】
  + 【重要】新增 安全网络 客户端校验功能，防止伪造的客户端请求服务器 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client)
  + [Important] Added secure network client verification function to prevent fake clients from requesting the server [Details](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client)
  + 新增 `uni-clear-temp-data` 插件，用于自动清理数据库中的过期数据 [详情](https://ext.dcloud.net.cn/plugin?id=9826)
  + Add `uni-clear-temp-data` plugin to automatically clean up expired data in the database [Details](https://ext.dcloud.net.cn/plugin?id=9826)
  + 修复 HBuilderX插件 `uni-`开头的 schema 文件 右键菜单缺少【opendb检查更新】的Bug
  + Fix the bug that the right-click menu of the schema file starting with `uni-` in the HBuilderX plug-in lacks the bug of [opendb check for update]
  + 修复 HBuilderX插件 本地云函数调用 redis 接口传较大的数据时报错的Bug [详情](https://ask.dcloud.net.cn/question/155804)
  + Fixed the bug that the HBuilderX plug-in local cloud function called the redis interface and reported an error [Details](https://ask.dcloud.net.cn/question/155804)
  + 修复 uniIdRouter 使用相对路径跳转时附带的 uniIdRedirectUrl 参数错误的Bug [详情](https://ask.dcloud.net.cn/question/155904)
  + Fixed the bug that the uniIdRedirectUrl parameter attached to uniIdRouter was wrong when using a relative path to jump [Details](https://ask.dcloud.net.cn/question/155904)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + Android平台 修复 uts插件不支持泛型通配符语法的Bug [详情](https://ask.dcloud.net.cn/question/155942)
  + Android platform fixes the bug that the uts plugin does not support generic wildcard syntax [details](https://ask.dcloud.net.cn/question/155942)
  + Android平台 修复 chooseVideo 使用相机拍摄视频在Android10及以上设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/155877)
  + Android platform Fix the bug that chooseVideo may fail to shoot video with the camera on Android10 and above devices [Details](https://ask.dcloud.net.cn/question/155877)
  + Android平台 修复 chooseImage、chooseVideo 存在读取设备应用安装列表的行为可能导致隐私检测不合规的Bug
  + Android platform fixes the bug that the behavior of choosingImage and chooseVideo to read the device application installation list may lead to non-compliance with privacy detection
  + Android平台 修复 应用安全检测可能报`app关联启动`的Bug
  + Android platform fixes the bug that the application security detection may report `app association startup`
  + Android平台 修复 3.6.0版本引出的 首次真机运行隐私政策提示框可能不弹出的Bug
  + Android platform Fixed the bug that the privacy policy prompt box may not pop up when the first real machine is running due to version 3.6.0
  + iOS平台 更新 uni-AD 百度百青藤广告SDK 为 4.901 版；快手广告SDK 为 3.3.32 版
  + iOS platform update uni-AD Baidu Baiqingteng Advertising SDK to version 4.901; Kuaishou Advertising SDK to version 3.3.32
  + iOS平台 更新 微信SDK 为 1.9.6 版
  + iOS platform update WeChat SDK to version 1.9.6
  + iOS平台 修复 分享到微信收藏夹时跳转到朋友圈的Bug [详情](https://ask.dcloud.net.cn/question/155362)
  + iOS platform fixed the bug of jumping to Moments when sharing to WeChat favorites [Details](https://ask.dcloud.net.cn/question/155362)

#### 3.6.7.20221018-alpha
* 【uni-app】
  + 【重要】新增 uts iOS版插件。将uts代码转为swift代码。 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + [Important] Added uts iOS plugin. Convert uts code to swift code. [Details](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + 【重要】新增 `uni ext api`。将不常用的API剥离为uni_modules插件，但仍使用uni.开头的API。[详情](https://uniapp.dcloud.net.cn/api/extapi.html)
  + [Important] Add `uni ext api`. Strip off uncommonly used APIs as uni_modules plugins, but still use APIs starting with uni. [Details](https://uniapp.dcloud.net.cn/api/extapi.html)
  + 【重要】App-Android平台 修复 getSystemInfo 的 deviceId 属性偶尔获取失败和多设备获取重复的Bug（注意此修改造成的向下兼容问题）[详情](https://uniapp.dcloud.net.cn/api/system/info.html)
  + [Important] App-Android platform repairs the occasional failure to obtain the deviceId attribute of getSystemInfo and the repeated bug of multiple devices (note the backward compatibility problem caused by this modification) [details](https://uniapp.dcloud.net.cn/ api/system/info.html)
  + vue3 项目 vite 依赖版本升级至最新 3.1.8
  + The vue3 project vite dependency version is upgraded to the latest 3.1.8
  + App平台、Web平台 新增 【ext api】 uni.getBatteryInfo [详情](https://uniapp.dcloud.net.cn/api/system/batteryInfo.html)
  + App platform, Web platform added [ext api] uni.getBatteryInfo [Details](https://uniapp.dcloud.net.cn/api/system/batteryInfo.html)
  + App平台、Web平台 修复 picker 组件日期类型无法使用超出默认的年份范围值的Bug [详情](https://ask.dcloud.net.cn/question/131332)
  + App platform, Web platform Fix the bug that the date type of the picker component cannot use values beyond the default year range [Details](https://ask.dcloud.net.cn/question/131332)
  + App平台、Web平台 修复 iOS16 系统 input 组件 type=digit 无法输入小数点的Bug [详情](https://ask.dcloud.net.cn/question/154584)
  + App platform, Web platform fix iOS16 system input component type=digit bug that cannot input decimal point [details](https://ask.dcloud.net.cn/question/154584)
  + App平台、Web平台 修复 editor 组件 insertImage 触发 input 事件没有 alt 属性的Bug [详情](https://ask.dcloud.net.cn/question/155163)
  + App platform, Web platform Fix the bug that the editor component insertImage triggers the input event without the alt attribute [Details](https://ask.dcloud.net.cn/question/155163)
  + App平台、Web平台 修复 vue3 项目 editor 组件重新加载获取不到 EditorContext 的Bug [详情](https://ask.dcloud.net.cn/question/154702)
  + App platform, Web platform Fix the bug that the editor component of the vue3 project cannot get the EditorContext after reloading [Details](https://ask.dcloud.net.cn/question/154702)
  + App平台 新增 nvue 页面 picker-view 组件增加 mask-top-style、mask-bottom-style 属性 [详情](https://uniapp.dcloud.net.cn/component/picker-view.html)
  + Added nvue page picker-view component on App platform to add mask-top-style, mask-bottom-style attributes [Details](https://uniapp.dcloud.net.cn/component/picker-view.html)
  + App平台 优化 video 组件支持 title 属性 [详情](https://uniapp.dcloud.net.cn/component/video.html)
  + App platform optimized video component to support title attribute [Details](https://uniapp.dcloud.net.cn/component/video.html)
  + App平台 修复 hover-class 属性不支持多个 class 的Bug [详情](https://ask.dcloud.net.cn/question/152506)
  + App platform fixes the bug that the hover-class attribute does not support multiple classes [details](https://ask.dcloud.net.cn/question/152506)
  + App平台 修复 vue3 项目 uts 插件 export default class 不生效的Bug [详情](https://ask.dcloud.net.cn/question/154164)
  + App platform fixes the bug that the export default class of the vue3 project uts plugin does not take effect [Details](https://ask.dcloud.net.cn/question/154164)
  + App平台 修复 vue3 项目 v-for 可能渲染失败的Bug [详情](https://ask.dcloud.net.cn/question/154836)
  + App platform Fix the bug that the v-for of vue3 project may fail to render [Details](https://ask.dcloud.net.cn/question/154836)
  + App平台 修复 vue3 项目 tabbar.broderStyle 自定义色值无效的Bug [详情](https://ask.dcloud.net.cn/question/150718)
  + App platform Fix the bug that the custom color value of tabbar.broderStyle in the vue3 project is invalid [Details](https://ask.dcloud.net.cn/question/150718)
  + App平台 修复 vue3 项目 nvue 页面 switch 组件 disabled 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/154577)
  + App platform Fix the bug that the disabled attribute of the switch component of the vue3 project nvue page is invalid [Details](https://ask.dcloud.net.cn/question/154577)
  + App-Android平台 修复 3.5.5版本引出 input 组件自动获取焦点可能失效的Bug [详情](https://ask.dcloud.net.cn/question/153481)
  + App-Android platform fixes the bug that the input component may fail to automatically get the focus in version 3.5.5 [Details](https://ask.dcloud.net.cn/question/153481)
  + App-iOS平台 修复 nvue swiper 组件使用 rpx 时在部分设备可能无法正常滑动切换的Bug [详情](https://ask.dcloud.net.cn/question/149260)
  + App-iOS platform fixed the bug that the nvue swiper component may not be able to swipe and switch normally on some devices when using rpx [Details](https://ask.dcloud.net.cn/question/149260)
  + Web平台 优化 uni.previewImage 在 PC 端增加切换和关闭按钮
  + Web platform optimized uni.previewImage Added toggle and close buttons on PC
  + Web平台 修复 tabbar 某些情况下显示重复的 badge 的Bug [详情](https://ask.dcloud.net.cn/question/153336)
  + Web platform fixes the bug that the tabbar displays duplicate badges in some cases [Details](https://ask.dcloud.net.cn/question/153336)
  + Web平台 修复 uni.openLocation 导航未自动获取当前位置Bug [详情](https://ask.dcloud.net.cn/question/155066)
  + Web platform fixes the bug that the uni.openLocation navigation does not automatically obtain the current location [Details](https://ask.dcloud.net.cn/question/155066)
  + Web平台 修复 vue3 项目 titleNView 中 buttons 的 select 为 true 时图标不显示的Bug [详情](https://ask.dcloud.net.cn/question/153179)
  + Web platform Fix the bug that the icon is not displayed when the select of the buttons in the titleNView of the vue3 project is true [Details](https://ask.dcloud.net.cn/question/153179)
  + Web平台 修复 vue3 项目 进入 tabbar 重复触发 onLoad 的 Bug [详情](https://ask.dcloud.net.cn/question/154066)
  + Web platform fix the bug of repeatedly triggering onLoad when entering the tabbar of the vue3 project [Details](https://ask.dcloud.net.cn/question/154066)
  + web平台 修复 vue3 项目 CSS 中的 v-bind 使用 rpx 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3884)
  + web platform Fix the bug that v-bind in vue3 project CSS does not take effect when using rpx [details](https://github.com/dcloudio/uni-app/issues/3884)
  + 小程序平台 修复 改变数据时 setData 调用异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/3787)
  + The MiniApp platform fixes the bug that setData calls abnormally when changing data [details](https://github.com/dcloudio/uni-app/issues/3787)
  + 小程序平台 修复 vue3 项目 CSS 中的 v-bind 使用非 setup 中的数据不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3887)
  + The MiniApp platform fixes the bug that the v-bind in the CSS of the vue3 project does not take effect when using the data in the non-setup [details](https://github.com/dcloudio/uni-app/issues/3887)
  + 小程序平台 修复 vue3 项目 作用域插槽嵌套使用时可能渲染错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3886)
  + The MiniApp platform fixes the bug that the vue3 project scope slot may be rendered incorrectly when using it nested [details](https://github.com/dcloudio/uni-app/issues/3886)
  + 小程序平台 修复 vue3 项目 作用域插槽静态数据渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/153150)
  + MiniApp platform fixes the bug of static data rendering error in vue3 project scope slot [details](https://ask.dcloud.net.cn/question/153150)
  + 小程序平台 修复 vue3 项目 v-for 里的插槽可能渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/155008)
  + The MiniApp platform fixes the bug that the slot in the v-for of the vue3 project may render incorrectly [Details](https://ask.dcloud.net.cn/question/155008)
  + 小程序平台 修复 vue3 项目 发行为混合分包，页面返回可能报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3923)
  + The MiniApp platform fixes the bug that the vue3 project is released as a mixed subpackage, and the page returns a possible error [Details](https://github.com/dcloudio/uni-app/issues/3923)
  + 微信小程序平台 修复 vue3 项目 scroll-view 的 drag 相关事件不触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3921)
  + Wechat MiniApp platform fixes the bug that the drag-related events of the scroll-view of the vue3 project do not trigger [details](https://github.com/dcloudio/uni-app/issues/3921)
  + 微信小程序平台 修复 vue3 项目 uni://form-field 不生效的Bug [详情](https://ask.dcloud.net.cn/question/155373)
  + Wechat MiniApp platform fixes the bug that the vue3 project uni://form-field does not take effect [details](https://ask.dcloud.net.cn/question/155373)
  + 百度小程序平台 修复 uni.createIntersectionObserver 无法监听多个节点的Bug [详情](https://github.com/dcloudio/uni-app/issues/3835)
  + Baidu MiniApp platform fixes the bug that uni.createIntersectionObserver cannot monitor multiple nodes [details](https://github.com/dcloudio/uni-app/issues/3835)
  + 百度小程序平台 修复 node_modules 目录中的静态资源生成目录错误的Bug [详情](https://ask.dcloud.net.cn/question/154595)
  + Baidu MiniApp platform fixes the bug that the static resources in the node_modules directory generate wrong directories [details](https://ask.dcloud.net.cn/question/154595)
  + 百度小程序平台 修复 onInit 生命周期不触发的Bug [详情](https://ask.dcloud.net.cn/question/154352)
  + Baidu MiniApp platform fixes the bug that the onInit life cycle does not trigger [Details](https://ask.dcloud.net.cn/question/154352)
  + 百度小程序平台 修复 vue2 项目 使用 usingSwanComponents 配置动态库组件内事件无法获取参数的Bug [详情](https://ask.dcloud.net.cn/question/155281)
  + Baidu MiniApp platform fixes the bug that the vue2 project uses usingSwanComponents to configure the event in the dynamic library component and cannot obtain parameters [Details](https://ask.dcloud.net.cn/question/155281)
  + 百度小程序平台 修复 vue3 项目 不能正常使用动态库组件的Bug [详情](https://github.com/dcloudio/uni-app/issues/3864)
  + Baidu MiniApp platform fixes the bug that the vue3 project cannot use dynamic library components normally [details](https://github.com/dcloudio/uni-app/issues/3864)
  + 支付宝小程序平台 修复 编译成小程序插件后 uni.hideLoading 等接口无法访问的Bug [详情](https://github.com/dcloudio/uni-app/issues/2974)
  + Alipay MiniApp platform fixes the bug that uni.hideLoading and other interfaces cannot be accessed after compiling into a MiniApp plug-in [Details](https://github.com/dcloudio/uni-app/issues/2974)
  + 支付宝小程序平台 修复 page-container 组件被当作自定义组件编译的Bug [详情](https://ask.dcloud.net.cn/question/154028)
  + Alipay MiniApp platform fixes the bug that the page-container component is compiled as a custom component [details](https://ask.dcloud.net.cn/question/154028)
  + 支付宝小程序平台 修复 uni.showToast 不支持 duration 参数的Bug [详情](https://ask.dcloud.net.cn/question/147279)
  + Alipay MiniApp platform fixes the bug that uni.showToast does not support the duration parameter [details](https://ask.dcloud.net.cn/question/147279)
  + 支付宝小程序平台 修复 小程序插件内的组件未使用事件运行报错的Bug [详情](https://github.com/dcloudio/uni-app/pull/3903)
  + Alipay MiniApp platform repaired the bug that the component in the MiniApp plug-in did not use the event to run the bug [details](https://github.com/dcloudio/uni-app/pull/3903)
  + QQ小程序平台 修复 vue3 项目 uni.uni.createCanvasContext 传入 this 报错的Bug [详情](https://ask.dcloud.net.cn/question/154223)
  + The QQ MiniApp platform fixes the bug that the vue3 project uni.uni.createCanvasContext passes in this and reports an error [Details](https://ask.dcloud.net.cn/question/154223)
  + 字节跳动小程序平台 新增 支持使用小程序插件 [详情](https://github.com/dcloudio/uni-app/issues/3917)
  + The ByteDance MiniApp platform supports the use of MiniApp plug-ins [details](https://github.com/dcloudio/uni-app/issues/3917)
  + 字节跳动小程序平台 修复 vue3 项目使用小程序自定义组件可能报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3915)
  + ByteDance MiniApp platform fixes bugs that may report errors when using MiniApp custom components in vue3 projects [details](https://github.com/dcloudio/uni-app/issues/3915)
  + 快手小程序平台 新增 页面支持分包 [详情](https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages)
  +Added page support for subpackages on Kuaishou MiniApp platform [details](https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages)
  + 快手小程序平台 优化 uni.requestPayment 实现改用 ks.pay [详情](https://ask.dcloud.net.cn/question/152948)
  + Kuaishou MiniApp platform optimized uni.requestPayment and switched to ks.pay [Details](https://ask.dcloud.net.cn/question/152948)
  + uni统计 修复 3.4.9版本引出的 deviceId 获取方式变化，导致 uni统计2.0 App-Android 平台部分统计数据不准确的Bug [详情](https://ask.dcloud.net.cn/article/40097)
  + uni statistics Fix the change of deviceId acquisition method introduced by version 3.4.9, resulting in the inaccurate bug of some statistical data on the uni statistics 2.0 App-Android platform [details](https://ask.dcloud.net.cn/article/40097)
* 【uniCloud】
  + 【重要】新增 `安全网络` uni-app客户端和unicloud实现安全通讯，验证客户端身份和加密数据，防刷利器 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html)
  + [Important] Added `safe network` uni-app client and unicloud to achieve secure communication, verify client identity and encrypt data, and prevent brushing [Details](https://uniapp.dcloud.net.cn/uniCloud/ secure-network.html)
  + 新增 客户端sdk 新增 uniCloud.databaseForJQL 接口，拉齐在云函数中的写法。相比之前 database，返回值移除了多一层的 result [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb.html#jssdk)
  + Added client sdk Added uniCloud.databaseForJQL interface, Lacy's writing method in cloud functions. Compared with the previous database, the return value has one more layer of result removed [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb.html#jssdk)
  + 新增 客户端sdk uniCloud.importObject增加 parseSystemError 选项，用于处理云对象未捕获的错误或客户端网络错误，以便给用户展示友好的错误信息 [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + Added client sdk uniCloud.importObject to add parseSystemError option, which is used to handle uncaught errors of cloud objects or client network errors, so as to display friendly error messages to users [details](https://uniapp.dcloud.net. cn/uniCloud/cloud-obj.html#auto-ui)
  + 修复 本地调试插件 连接本地云函数 require 出错时仅第一次报出错误的Bug
  + Fix the bug that only the first error is reported when the local debugging plug-in connects to the local cloud function require error
  + uni-id-co 新增 支持微信授权手机号登录方式 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin-mobile)
  + uni-id-co added support for WeChat authorized phone number login [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin-mobile)
  + uni-id-co 新增 解绑第三方平台账号 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#unbind-third-account)
  + uni-id-co added unbind third-party platform account [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#unbind-third-account)
  + uni-id-co 新增 微信绑定手机号支持通过`getPhoneNumber`事件回调的`code`绑定 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#bind-mobile-by-mp-weixin)
  + uni-id-co added WeChat binding phone number to support `code` binding via `getPhoneNumber` event callback[Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages. html#bind-mobile-by-mp-weixin)
  + uni-admin 新增 群发短信功能 [详情](https://uniapp.dcloud.net.cn//uniCloud/admin.html#群发短信)
  + uni-admin added group SMS function [details](https://uniapp.dcloud.net.cn//uniCloud/admin.html#%E7%BE%A4%E5%8F%91%E7%9F%AD %E4%BF%A1)
  + uni-admin 修复 uni统计 App-Android 平台部分统计数据不准确的Bug [详情](https://ask.dcloud.net.cn/article/40097)
  + uni-admin fixed the bug of inaccurate statistical data on uni statistics app-Android platform [details](https://ask.dcloud.net.cn/article/40097)
  + uni-admin 修复 uni统计 周/月数据不准确的Bug
  + uni-admin fixed the bug that uni statistics weekly/monthly data was inaccurate
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 更新 uni-AD 腾讯优量汇SDK iOS为 4.13.90 版；快手广告SDK Android为3.3.31，iOS为 3.3.31 版；快手内容联盟SDK iOS为 3.3.32 版；今日头条穿山甲SDK iOS为 4.8.0.3 版；穿山甲GroMore广告SDK iOS为 3.7.0.0 版；Sigmob广告联盟SDK Android为 4.7.0 版，iOS为 4.5.0 版；百度百青藤广告SDK Android为 9.241 版；华为广告SDK Android为 13.4.56.302 版
  + Update uni-AD Tencent Youlianghui SDK iOS to version 4.13.90; Kuaishou Advertising SDK Android to version 3.3.31, iOS to version 3.3.31; Kuaishou Content Alliance SDK iOS to version 3.3.32; Toutiao Pangolin SDK iOS to Version 4.8.0.3; Pangolin GroMore Advertising SDK iOS version 3.7.0.0; Sigmob Advertising Alliance SDK Android version 4.7.0, iOS version 4.5.0; Baidu Baiqingteng Advertising SDK Android version 9.241; Huawei Advertising SDK Android version Version 13.4.56.302
  + 【重要】Android平台 修复 plus.device.uuid 在高版本Android上不同设备获取的值可能相同的Bug。如之前依赖uuid，需注意处理兼容
  + [Important] Android platform Fixed the bug that the value of plus.device.uuid may be the same for different devices on higher versions of Android. If you relied on uuid before, you need to pay attention to handling compatibility
  + 新增 plus.device.getDeviceId 获取匿名设备标识 [详情](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getDeviceId)
  + Added plus.device.getDeviceId to get anonymous device ID [Details](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getDeviceId)
  + Android平台 新增 模板隐私政策提示框支持配置`游客模式`按钮 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
  + Added a template privacy policy prompt box for Android platform to support the configuration of the `Guest Mode` button [Details](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
  + Android平台 更新 Paypal SDK 为 0.6.2 版，解决设置targetSdkVersion为31打包失败的问题 [详情](https://ask.dcloud.net.cn/question/154976)
  + Android platform update Paypal SDK to version 0.6.2 to solve the problem of package failure when setting targetSdkVersion to 31 [Details](https://ask.dcloud.net.cn/question/154976)
  + Android平台 修复 UniPush 异步获取推送标识在部分情况可能返回慢的Bug
  + Android platform fixed the bug that UniPush asynchronously obtains the push ID and may return slowly in some cases
  + Android平台 修复 应用设置仅支持竖屏时在部分Android8设备可能引起应用崩溃的Bug
  + Android platform fixed the bug that may cause the app to crash on some Android8 devices when the app setting only supports vertical screen
  + Android平台 修复 X5 内核在部分情况无法正确加载的Bug [详情](https://ask.dcloud.net.cn/question/152854)
  + Android platform fixed the bug that the X5 kernel could not be loaded correctly in some cases [Details](https://ask.dcloud.net.cn/question/152854)
  + Android平台 修复 直播推流 LivePusher 在部分场景可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/147593)
  + Android platform fixed the bug that LivePusher may cause the app to crash in some scenarios [Details](https://ask.dcloud.net.cn/question/147593)
  + Android平台 修复 视频播放控件 VideoPlayer 切换视频资源后静音状态可能失效的Bug [详情](https://ask.dcloud.net.cn/question/153257)
  + Android platform fixed the bug that the video player control VideoPlayer may lose the mute state after switching video resources [Details](https://ask.dcloud.net.cn/question/153257)
  + Android平台 修复 视频播放控件 VideoPlayer 销毁时可能导致卡顿的Bug [详情](https://ask.dcloud.net.cn/question/153483)
  + Android platform fixed the bug that may cause freeze when the video playback control VideoPlayer is destroyed [Details](https://ask.dcloud.net.cn/question/153483)
  + Android平台 修复 视频播放控件 VideoPlayer 在部分情况下标题栏不显示的Bug
  + Android platform fixed the bug that the video playback control VideoPlayer does not display the title bar in some cases
  + Android平台 修复 chooseVideo 选择视频文件在鸿蒙系统可能无法加载缩略图的Bug [详情](https://ask.dcloud.net.cn/question/152527)
  + Android platform fixed the bug that chooseVideo may not be able to load thumbnails in Hongmeng system [Details](https://ask.dcloud.net.cn/question/152527)
  + Android平台 修复 一键登录 全屏模式设置背景图时沉浸式效果不正确的Bug
  + Android platform fixed the bug that the immersive effect was incorrect when one-click login and setting the background image in full-screen mode
  + Android平台 修复 上架应用市场审核可能报`数字天堂SDK获取传感器的行为`的Bug [详情](https://ask.dcloud.net.cn/question/155043)
  + Android platform repaired the bug that the review of the application market on the shelves may report the bug of `Digital Paradise SDK’s behavior of acquiring sensors` [details](https://ask.dcloud.net.cn/question/155043)
  + Android平台 修复 本地打包生成的自定义基座可能无法识别安装的Bug
  + Android platform fixed the bug that the custom base generated by local packaging may not recognize the installation bug
  + Android平台 修复 3.6.0版本引出的 在 Android4.4 设备无法正常运行的Bug [详情](https://ask.dcloud.net.cn/question/153910)
  + Android platform Fix the bug caused by version 3.6.0 that cannot run normally on Android4.4 devices [Details](https://ask.dcloud.net.cn/question/153910)
  + 【重要】iOS平台 新增 云端打包支持原生应用配置文件 Info.plist 和资源目录 Resources [详情](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios)
  + [Important] iOS platform adds cloud packaging support for native application configuration file Info.plist and resource directory Resources [details](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios)
  + iOS平台 修复 使用`阿里百川电商`SDK 5.x版，云端打包报符号冲突错误的Bug [详情](https://ask.dcloud.net.cn/question/153138)
  + iOS platform fixed the bug that the cloud package reported symbol conflict errors when using `Ali Baichuan E-commerce` SDK version 5.x [Details](https://ask.dcloud.net.cn/question/153138)
  + iOS平台 修复 视频播放控件 VideoPlayer 标题栏、进度条样式不正确的Bug [详情](https://ask.dcloud.net.cn/question/153945)
  + iOS platform fixed the bug that the video playback control VideoPlayer title bar and progress bar had incorrect styles [Details](https://ask.dcloud.net.cn/question/153945)
  + iOS平台 修复 uni-AD 穿山甲Gromore 激励视频偶现可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/153717)
  + iOS platform fixed the bug that the uni-AD pangolin Gromore incentive video may not be displayed occasionally [Details](https://ask.dcloud.net.cn/question/153717)
  + iOS平台 修复 3.6.0版本引出的 uni原生语言插件Hook不到applicationWillEnterForeground、applicationDidEnterBackground等系统事件的Bug
  + iOS platform fixed the bug that the uni native language plug-in hook introduced by version 3.6.0 could not reach system events such as applicationWillEnterForeground and applicationDidEnterBackground
  + iOS平台 修复 安全检测可能报获取设备idfv的Bug
  + iOS platform repaired the bug that the security detection may report the device idfv

#### 3.6.3.20220919-alpha
* 【uni-app】
  + 小程序平台 修复 onReady 生命周期触发两次的Bug [详情](https://ask.dcloud.net.cn/question/153422)
  + The MiniApp platform fixes the bug that the onReady life cycle triggers twice [details](https://ask.dcloud.net.cn/question/153422)

#### 3.6.1.20220907-alpha
* 【uni-app】
  + App-Android平台 修复 uts 插件 部分情况下编译后丢失导入类的Bug [详情](https://ask.dcloud.net.cn/question/152597)
  + App-Android platform fixes the bug that the uts plugin loses the imported class after compiling in some cases [Details](https://ask.dcloud.net.cn/question/152597)
  + App平台 修复 切换tabbar页面时使用uni.createVideoContext的pause无法暂停播放的Bug[详情](https://ask.dcloud.net.cn/question/151933)
  + App platform fixed the bug that the playback cannot be paused when using the pause of uni.createVideoContext when switching the tabbar page [details](https://ask.dcloud.net.cn/question/151933)
  + App-Android平台 修复 uts 插件 定义类型时使用 kotlin 基础类型（如 Int）时，编译报错的Bug
  + App-Android platform fixes the bug of compiling errors when using kotlin basic types (such as Int) when defining types in the uts plugin
  + App-Android平台 修复 uts 插件 云打包时未包含 AndroidManifest.xml 的Bug
  + App-Android platform fixed the bug that AndroidManifest.xml was not included when the uts plugin was packaged in the cloud
  + App-Android平台 修复 bindingx 执行 evaluateColor 可能出现异常的Bug [详情](https://ask.dcloud.net.cn/question/151759)
  + App-Android platform fix bindingx execution evaluateColor abnormal bug [details](https://ask.dcloud.net.cn/question/151759)
  + App-Android平台 修复 uni.reLaunch 打开非 tabbar nvue 页面可能依然显示 tabbar 的Bug [详情](https://ask.dcloud.net.cn/question/143792)
  + App-Android platform fixes the bug that uni.reLaunch may still display tabbar when opening non-tabbar nvue pages [Details](https://ask.dcloud.net.cn/question/143792)
  + App-Android平台 修复 GooglePlay渠道包无法正常使用高德地图的Bug [详情](https://ask.dcloud.net.cn/question/152668)
  + App-Android platform fixes the bug that the GooglePlay channel package cannot use Gaode map normally [Details](https://ask.dcloud.net.cn/question/152668)
  + App-Android平台 修复 nvue 作为首页使用 picker 可能引起应用无响应的Bug [详情](https://ask.dcloud.net.cn/question/151819)
  + App-Android platform fix the bug that using picker on nvue as the home page may cause the app to become unresponsive [Details](https://ask.dcloud.net.cn/question/151819)
  + App-iOS平台 修复 nvue tabbar 页面 uni.reLaunch 不触发 onUnload 生命周期的Bug [详情](https://ask.dcloud.net.cn/question/152738)
  + App-iOS platform fix nvue tabbar page uni.reLaunch does not trigger the onUnload life cycle Bug [details](https://ask.dcloud.net.cn/question/152738)
  + Web平台 修复 调用 uni.setClipboardData 会弹起键盘的Bug [详情](https://github.com/dcloudio/uni-app/issues/3569)
  + Web platform fixed the bug that the keyboard would pop up when calling uni.setClipboardData [Details](https://github.com/dcloudio/uni-app/issues/3569)
  + 小程序平台 优化 小程序组件内部支持使用 kebab-case 事件名 [详情](https://github.com/dcloudio/uni-app/issues/1802)
  + MiniApp platform optimization MiniApp components internally support the use of kebab-case event names [details](https://github.com/dcloudio/uni-app/issues/1802)
  + 微信小程序平台 修复 wxs 内调用 triggerEvent 无法携带事件参数的Bug [详情](https://github.com/dcloudio/uni-app/issues/3829)
  + Wechat MiniApp platform fixes the bug that triggerEvent cannot carry event parameters in wxs [details](https://github.com/dcloudio/uni-app/issues/3829)
  + 快手小程序平台 修复 授权手机号的无回调信息的Bug [详情](https://ask.dcloud.net.cn/question/143078)
  + Kuaishou MiniApp platform fixes the bug that the authorized mobile phone number has no callback information [details](https://ask.dcloud.net.cn/question/143078)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + Android平台 更新 UniPush使用的个推SDK为 3.2.12.0 版，个推核心组件SDK为 3.1.10.0 版，OPPO厂商推送SDK为 3.1.0 版，华为厂商推送SDK为 6.5.0.300 版； 一键登录使用的个验SDK为 3.0.6.0 版；支付宝SDK为 15.8.11 版；新浪微博SDK为 12.5.0 版；友盟统计SDK为 9.5.2 版；解决提交应用市场可能隐私检测被拒的问题 [详情](https://ask.dcloud.net.cn/question/143573)
  + Android platform update The Getui SDK used by UniPush is version 3.2.12.0, the Getui core component SDK is version 3.1.10.0, the OPPO vendor push SDK is version 3.1.0, and the Huawei vendor push SDK is version 6.5.0.300; one-click login The self-test SDK used is version 3.0.6.0; Alipay SDK is version 15.8.11; Sina Weibo SDK is version 12.5.0; Umeng Statistics SDK is version 9.5.2; solve the problem that the application market may be rejected for privacy detection [Details](https://ask.dcloud.net.cn/question/143573)
  + Android平台 修复 getVideoInfo 获取纵向视频文件的宽高值相反的Bug [详情](https://ask.dcloud.net.cn/question/151205)
  + Android platform fixed the bug that getVideoInfo gets the opposite width and height values of vertical video files [Details](https://ask.dcloud.net.cn/question/151205)
  + Android平台 修复 previewImage 预览图片时可能出现偏移的Bug [详情](https://ask.dcloud.net.cn/question/151966)
  + Android platform fix previewImage Bug that may appear offset when previewing images [Details](https://ask.dcloud.net.cn/question/151966)
  + iOS平台 修复 uploader 上传文件获取 uploadedSize 值不准确的Bug
  + iOS platform fixes the bug that the uploader uploads files to get the uploadedSize value is inaccurate
* 【uni小程序SDK】
* 【uni MiniApp SDK】
  + iOS平台 修复 uni.setStorage 存储数据可能出错的Bug
  + iOS platform fixes the bug that uni.setStorage may store data incorrectly

#### 3.6.0.20220901-alpha
* 【uni-app】
  + 【重要】新增 uts Android版插件 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + [Important] Added uts Android plugin [Details](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + App-iOS平台 修复 uni.openLocation 底部安全区适配问题 [详情](https://ask.dcloud.net.cn/question/150074)
  + App-iOS platform fix uni.openLocation bottom safety area adaptation problem [Details](https://ask.dcloud.net.cn/question/150074)
  + App-iOS平台 修复 uni.chooseLocation 可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/152367)
  + App-iOS platform fixes the bug that uni.chooseLocation may cause the app to crash [Details](https://ask.dcloud.net.cn/question/152367)
  + Web平台 新增 支持配置和使用高德地图 [详情](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfigmaps)
  + Added support for configuring and using Gaode Maps on the Web platform [Details](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfigmaps)
  + 支付宝小程序平台 修复 配置全局小程序组件后编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3619)
  + Alipay MiniApp platform fixes the bug of compiling errors after configuring the global MiniApp components [details](https://github.com/dcloudio/uni-app/issues/3619)
  + 支付宝小程序平台 修复 启用小程序基础库2.0配置后访问 $slots 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3529)
  + Alipay MiniApp platform fixes the bug of accessing $slots after enabling the configuration of the MiniApp base library 2.0 [details](https://github.com/dcloudio/uni-app/issues/3529)
  + 字节小程序平台 新增 vue2 项目支持 onUploadDouyinVideo 生命周期 [详情](https://ask.dcloud.net.cn/question/151113)
  + Added vue2 project to Byte MiniApp platform to support onUploadDouyinVideo life cycle [details](https://ask.dcloud.net.cn/question/151113)
* 【uniCloud】
  + 调整 本地调试插件 云对象运行参数配置文件改为 ${objectName}.param.js [详情](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#run-obj-param)
  + Adjust the local debugging plug-in cloud object running parameter configuration file to ${objectName}.param.js [Details](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#run-obj-param)
  + 修复 本地调试插件 HBuilderX 3.5.5 版本引出的使用 push 扩展库导致其他云函数不能正常运行的Bug
  + Fixed the bug caused by the local debugging plug-in HBuilderX 3.5.5 that uses the push extension library to cause other cloud functions to not work properly
  + 修复 本地调试插件 HBuilderX 3.5.5 版本引出的连接本地云函数时偶发 `SIGN_PARAM_INVALID` 错误
  + Fixed the occasional `SIGN_PARAM_INVALID` error caused by the local debugging plug-in HBuilderX version 3.5.5 when connecting to local cloud functions
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 【重要】Android平台 新增 云端打包支持配置原生应用清单文件 AndroidManifest.xml 和应用资源目录 res、assets [详情](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)
  + [Important] Added cloud packaging support for Android platform to configure native application manifest file AndroidManifest.xml and application resource directory res, assets [details](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)
  + Android平台 更新 uni-AD 快手广告SDK Android为 3.3.29 版；快手内容联盟SDK Android为 3.3.31 版
  + Android platform update uni-AD Kuaishou Advertising SDK Android to version 3.3.29; Kuaishou Content Alliance SDK Android to version 3.3.31
  + Android平台 修复 uni-AD Sigmob激励视频广告点击跳过按钮后关闭触发 onClose 事件返回的 isEnded 属性值可能不准确的Bug
  + Android platform fixed the bug that the value of the isEnded attribute returned by the onClose event may be inaccurate after the uni-AD Sigmob rewarded Rewarded Ads is closed after clicking the skip button
  + Android平台 修复 腾讯云安全检测可能误报`含数字天堂(dcloud)广告插件,可读取设备信息,可能泄露您的个人隐私`的Bug [详情](https://ask.dcloud.net.cn/question/150624)
  + Android platform fixes the bug that Tencent Cloud security detection may falsely report `contains digital paradise (dcloud) advertising plug-ins, which can read device information and may leak your personal privacy` [details](https://ask.dcloud.net. cn/question/150624)
  + Android平台 修复 安全检测可能报快手广告 SDK 频繁获取用户信息的Bug
  + Android platform fixes the bug that the security detection may report that the Kuaishou advertising SDK frequently obtains user information
  + iOS平台 修复 3.5.0版本引出的 快手开屏广告点击打开落地页返回后无法进入应用首页的Bug [详情](https://ask.dcloud.net.cn/question/152441)
  + iOS platform fixes the bug that cannot enter the home page of the application after clicking the App Open Ads of Kuaishou version 3.5.0 after clicking to open the landing page [Details](https://ask.dcloud.net.cn/question/152441)
  + iOS平台 修复 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
  + iOS platform fixed the Bug that did not use the Push module to upload to the AppStore and reported `ITMS-90078: Missing Push Notification Entitlement` warning bug

#### 3.5.5.20220825-alpha
* 【uni-app】
  + 修复 项目路径包含括号时编译异常的Bug [详情](https://ask.dcloud.net.cn/question/150173)
  + Fix the bug of compile exception when the project path contains parentheses [Details](https://ask.dcloud.net.cn/question/150173)
  + App平台 修复 vue 页面 cover-view 组件 flex 布局无效的Bug [详情](https://ask.dcloud.net.cn/question/151697)
  + App platform Fix the bug that the flex layout of the vue page cover-view component is invalid [Details](https://ask.dcloud.net.cn/question/151697)
  + App平台 修复 vue3 项目 uni.getSystemInfo 获取 windowHeight 值不准确的Bug [详情](https://ask.dcloud.net.cn/question/150862)
  + App platform Fix the bug that the windowHeight value obtained by uni.getSystemInfo of the vue3 project is inaccurate [Details](https://ask.dcloud.net.cn/question/150862)
  + App平台 修复 vue3 项目 vue 页面 map 组件更新中心坐标后显示错误的Bug [详情](https://ask.dcloud.net.cn/question/151438)
  + App platform Fixed the bug that the map component of the vue page of the vue3 project displayed an error after updating the center coordinates [Details](https://ask.dcloud.net.cn/question/151438)
  + App-Android平台 修复 uni.saveImageToPhotosAlbum 保存网络图片可能覆盖上次保存的图片的Bug [详情](https://ask.dcloud.net.cn/question/125357)
  + App-Android platform fixes the bug that uni.saveImageToPhotosAlbum may overwrite the last saved picture when saving network pictures [Details](https://ask.dcloud.net.cn/question/125357)
  + App-Android平台 修复 picker 组件获取焦点异常的Bug [详情](https://ask.dcloud.net.cn/question/150454)
  + App-Android platform fixes the bug that the picker component gets focus abnormally [Details](https://ask.dcloud.net.cn/question/150454)
  + App-Android平台 修复 nvue 页面 map 组件 customCallout 设置图片可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/150166)
  + App-Android platform fix nvue page map component customCallout setting picture may cause app crash bug [Details](https://ask.dcloud.net.cn/question/150166)
  + App-iOS平台 修复 uni.getSystemSetting 获取的 bluetoothEnabled、locationEnabled 值不准确的Bug
  + App-iOS platform fixed the bug that the bluetoothEnabled and locationEnabled values obtained by uni.getSystemSetting were inaccurate
  + App-iOS平台 修复 nvue 页面 map 组件 marker 调用 moveAlong 方法没有中断前一次动画的Bug [详情](https://ask.dcloud.net.cn/question/151411)
  + App-iOS platform fixed the bug that the nvue page map component marker did not interrupt the previous animation when calling the moveAlong method [Details](https://ask.dcloud.net.cn/question/151411)
  + App-iOS平台 修复 3.5.2 引出的 nvue 页面 ad-content-page 组件在某些场景可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/151778)
  + App-iOS platform fixes the bug that the ad-content-page component of the nvue page introduced in 3.5.2 may cause the app to crash in some scenarios [Details](https://ask.dcloud.net.cn/question/151778)
  + Web平台 修复 vue3 项目 css 环境变量 --window-top 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/150842)
  + Web platform fixes the bug that the css environment variable --window-top of the vue3 project is incorrectly calculated [Details](https://ask.dcloud.net.cn/question/150842)
  + Web平台 修复 vue3 项目发行模式 showLoading 图标大小显示错误的Bug [详情](https://ask.dcloud.net.cn/question/149819)
  + Web platform fixed the bug that the size of the showLoading icon in the vue3 project release mode was displayed incorrectly [Details](https://ask.dcloud.net.cn/question/149819)
  + Web平台 修复 custom-tab-bar 组件使用 uni.setTabBarItem 设置 visible 无效的Bug [详情](https://ask.dcloud.net.cn/question/132947)
  + Web platform Fix the bug that the custom-tab-bar component uses uni.setTabBarItem to set visible to be invalid [Details](https://ask.dcloud.net.cn/question/132947)
  + 小程序平台 修复 v-for 内使用复杂表达式后 v-model 失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3173)
  + The MiniApp platform fixes the bug that the v-model fails after using complex expressions in v-for [Details](https://github.com/dcloudio/uni-app/issues/3173)
  + 支付宝小程序、百度小程序、快手小程序、字节小程序平台 优化 支持自动拷贝 ext.json 文件
  + Alipay MiniApp, Baidu MiniApp, Kuaishou MiniApp, Byte MiniApp platform optimization supports automatic copying of ext.json files
  + 支付宝小程序平台 优化 uni.saveImageToPhotosAlbum 接口不再使用旧版 saveImage 接口
  + Alipay MiniApp platform optimized uni.saveImageToPhotosAlbum interface no longer uses the old saveImage interface
  + 字节小程序平台 修复 vue2 项目 反复快速创建销毁页面时组件无法渲染的Bug
  + The byte MiniApp platform fixes the bug that the component cannot be rendered when the vue2 project repeatedly and quickly creates and destroys the page
* 【uniCloud】
  + 优化 阿里云 数据库超时时间由3秒调整为5秒
  + Optimized the timeout of Alibaba Cloud database from 3 seconds to 5 seconds
  + 新增 阿里云 通过代理解决微信服务器需要固定IP的问题 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#http-proxy-client)
  + Added Alibaba Cloud to use a proxy to solve the problem that the WeChat server needs a fixed IP [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#http-proxy-client)
  + 新增 提供了一批新API，更优雅的处理同实例多并发请求
  + Added A batch of new APIs are provided to handle multiple concurrent requests of the same instance more elegantly
    - 新增 uniCloud.getRequestList 用于获取当前云函数实例内正在处理的请求的 requestId 列表 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-request-list)
    - Added uniCloud.getRequestList to get the requestId list of requests being processed in the current cloud function instance [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-request-list )
    - 云函数 新增 context.requestId 用于获取当前请求id [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#context)
    - Cloud function Added context.requestId to get the current request id [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#context)
    - 云对象 新增 this.getUniCloudRequestId() 用于获取当前请求id [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-request-id)
    - Cloud object Added this.getUniCloudRequestId() to get the current request id [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-request-id)
  + 新增 云函数 uniCloud.getCloudInfos 获取云端信息。同时兼容有无并发请求的情况 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-cloud-infos)
  + Added cloud function uniCloud.getCloudInfos to get cloud information. Compatible with concurrent requests at the same time [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-cloud-infos)
  + 新增 云函数 uniCloud.getClientInfos 获取客户端信息。同时兼容有无并发请求的情况 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-client-infos)
  + Added cloud function uniCloud.getClientInfos to get client information. Compatible with concurrent requests [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-client-infos)
  + 修复 客户端sdk 未关联 uniCloud 服务空间时使用 uniCloud 对象导致报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3758)
  + Fixed the bug of using uniCloud object when the client sdk is not associated with the uniCloud service space [details](https://github.com/dcloudio/uni-app/issues/3758)
  + 修复 JQL 一个表内多个包含 parentKey 字段时树查询报错的Bug [详情](https://ask.dcloud.net.cn/question/151834)
  + Fix the bug that the tree query reported an error when multiple JQL tables contained parentKey fields [Details](https://ask.dcloud.net.cn/question/151834)
  + 修复 本地调试插件 部分情况下全局对象复用导致的扩展库提示不正确的Bug [详情](https://ask.dcloud.net.cn/question/150357)
  + Fix the bug that the extension library prompts caused by the reuse of global objects in some cases in the local debugging plug-in [Details](https://ask.dcloud.net.cn/question/150357)
  + 优化 本地调试插件 持续调试会导致内存占用过高并且响应缓慢的Bug
  + Optimize the local debugging plug-in, continuous debugging will lead to high memory usage and slow response bugs
  + 优化 uniIdRouter 支持对首页、直达页面进行拦截并跳转到登录页面
  + Optimized uniIdRouter to support intercepting the homepage and direct pages and jumping to the login page
  + 优化 uni-id-co 密码规则调整，废除之前的简单校验，允许配置密码强度 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password-strength)
  + Optimize the adjustment of uni-id-co password rules, abolish the previous simple verification, and allow configuration of password strength [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password- strength)
  + 调整 uni-id-co 存储用户 openid（`wx_openid.${mp|h5|app|web}`）时同时在`wx_openid.${mp|h5|app|web}_${DCloudAppId}`存储了一份副本，参考：[微信登录](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin)、[QQ登录](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-qq)
  + When uni-id-co stores user openid (`wx_openid.${mp|h5|app|web}`), it is also stored in `wx_openid.${mp|h5|app|web}_${DCloudAppId}` A copy, refer to: [WeChat Login](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin), [QQ Login](https://uniapp .dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-qq)
  + 调整 uni-id-co 依赖 uni-open-bridge-common 存储用户 `session_key`、`access_token` 等凭据 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#save-user-token)
  + Adjust uni-id-co to rely on uni-open-bridge-common to store user credentials such as `session_key`, `access_token` [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary. html#save-user-token)
  + 新增 uni-id-co 增加 beforeRegister 钩子用户在注册前向用户记录内添加一些数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#before-register)
  + Added uni-id-co to add beforeRegister hook, users add some data to user records before registration [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#before- register)
  + 【重要】新增 uni-id-pages Web端支持微信登录（包括微信公众号内H5登录 和 普通浏览器内手机微信扫码登录）[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#weixinlogin)
  + [Important] Added uni-id-pages web terminal to support WeChat login (including H5 login in WeChat public account and mobile WeChat scan code login in ordinary browsers) [details](https://uniapp.dcloud.net.cn /uniCloud/uni-id-pages.html#weixinlogin)
  + 新增 uni-id-pages 支持密码强度（是否必须包含大小写字母、数字和特殊符号以及长度）配置 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#config)
  + Added uni-id-pages to support password strength (whether it must contain uppercase and lowercase letters, numbers, special symbols and length) configuration [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages .html#config)
  + 新增 uni-id-pages 登录成功（全局）回调事件：`uni-id-pages-login-success`，支持通过[uni.$on](https://uniapp.dcloud.net.cn/api/window/communication.html#on)监听 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
  + Added uni-id-pages login success (global) callback event: `uni-id-pages-login-success`, support [uni.$on](https://uniapp.dcloud.net.cn/api /window/communication.html#on) monitoring [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
  + 新增 uni-open-bridge 开源库，统一管理微信等三方开放平台的凭据 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)
  + Added uni-open-bridge open source library, unified management of WeChat and other three-party open platform credentials [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + Android平台 更新 QQ 登录、分享SDK版本为 3.5.12 版；百度定位SDK为 9.3.5 版，百度地图SDK为 7.5.3 版
  + Android platform updated QQ login and sharing SDK version to version 3.5.12; Baidu positioning SDK to version 9.3.5, Baidu map SDK to version 7.5.3
  + Android平台 修复 UniPush 2.0 厂商推送通道不支持 payload 字段为非 json 字符串的Bug
  + Android platform fixed the bug that the UniPush 2.0 vendor push channel did not support the payload field being a non-json string
  + Android平台 修复 plus.push.createMessage 创建本地消息 option 参数设置 when 字段无效的Bug
  + Android platform fix plus.push.createMessage to create a local message option parameter setting when field is invalid Bug
  + Android平台 修复 plus.runtime.install 升级 apk 可能报空指针的Bug
  + Android platform fixed plus.runtime.install upgrade apk may report a bug of null pointer
  + iOS平台 更新 uni-AD 百度百青藤广告SDK为 4.891 版
  + iOS platform update uni-AD Baidu Baiqingteng Advertising SDK to version 4.891
  + iOS平台 修复 3.5.0版本引出的 uni-AD 信息流广告设置宽度可能引起显示异常的Bug [详情](https://ask.dcloud.net.cn/question/150789)
  + iOS platform fixes the bug that the uni-AD Native Ads setting width caused by version 3.5.0 may cause abnormal display [Details](https://ask.dcloud.net.cn/question/150789)
  + iOS平台 修复 3.5.0版本引出的 使用百度定位模块需要勾选IDFA的Bug
  + iOS platform fixed the bug that IDFA needs to be checked when using the Baidu positioning module introduced by version 3.5.0
  + iOS平台 修复 3.5.3版本引起的 标准真机运行基座中一键登录返回的 token 值不正确的Bug
  + iOS platform fixed the bug that the token value returned by the one-click login in the standard real machine running base caused by version 3.5.3 was incorrect
  + iOS平台 修复 从本地相册中选择慢动作视频显示的时长不准确的Bug [详情](https://ask.dcloud.net.cn/question/150531)
  + iOS platform fixed the bug that the displayed duration of the slow-motion video selected from the local photo album was inaccurate [Details](https://ask.dcloud.net.cn/question/150531)
* 【uni小程序SDK】
* 【uni MiniApp SDK】
  + Android平台 优化 默认菜单字体大小为20px
  + Optimized for Android platform The default menu font size is 20px

#### 3.5.4.20220805-alpha
* 【uni-app】
  + App平台 优化 vue2 项目 web-view 组件通过 webviewStyles 设置更多样式 [详情](https://ask.dcloud.net.cn/question/149212)
  + App platform optimize vue2 project web-view component to set more styles through webviewStyles [Details](https://ask.dcloud.net.cn/question/149212)
  + App平台 优化 vue 页面 web-view 组件内页面默认支持绘制到安全区外 [详情](https://ask.dcloud.net.cn/question/149472)
  + App platform optimized vue page web-view component pages support drawing outside the safe area by default [Details](https://ask.dcloud.net.cn/question/149472)
  + App平台 修复 openLocation、chooseLocation 在应用语言改变时没有跟随变化的Bug [详情](https://ask.dcloud.net.cn/question/149216)
  + App platform fixed the bug that openLocation and chooseLocation did not follow the change of the application language [Details](https://ask.dcloud.net.cn/question/149216)
  + App-Android平台 新增 uni.scanCode autoZoom 属性，可控制扫码时是否启用自动放大功能 [详情](https://uniapp.dcloud.net.cn/api/system/barcode.html)
  + App-Android platform added uni.scanCode autoZoom attribute, which can control whether to enable the automatic zoom function when scanning the code [Details](https://uniapp.dcloud.net.cn/api/system/barcode.html)
  + App-Android平台 修复 nvue map 组件 maker 点聚合坐标重叠无法展现的Bug [详情](https://ask.dcloud.net.cn/question/149665)
  + App-Android platform fix nvue map component maker point aggregation coordinate overlapping bug cannot be displayed [Details](https://ask.dcloud.net.cn/question/149665)
  + App-Android平台 修复 nvue map 组件 polyline、polygon 清空数据不生效的Bug
  + App-Android platform fix nvue map component polyline, polygon clearing the data does not take effect Bug
  + App-iOS平台 修复 uni.setTabBarItem 动态更新 icon 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/149955)
  + App-iOS platform fixes the bug that uni.setTabBarItem dynamic update icon may not take effect [Details](https://ask.dcloud.net.cn/question/149955)
  + App-iOS平台 修复 nvue map 组件使用 Google 地图时，多个页面中使用地图组件可能无法正常加载的Bug [详情](https://ask.dcloud.net.cn/question/150080)
  + App-iOS platform Fix the bug that the map component may not be loaded properly in multiple pages when the nvue map component uses Google Maps [Details](https://ask.dcloud.net.cn/question/150080)
  + Web平台 优化 web-view 组件支持 fullscreen 属性 [详情](https://uniapp.dcloud.net.cn/component/web-view.html)
  + Web platform optimized web-view component supports fullscreen attribute [Details](https://uniapp.dcloud.net.cn/component/web-view.html)
  + Web平台 修复 vue3 项目 canvas 组件 touch 事件 stop、prevent 修饰符无效的Bug [详情](https://ask.dcloud.net.cn/question/148195)
  + Web platform Fix the bug that the stop and prevent modifiers of the touch event of the vue3 project canvas component are invalid [Details](https://ask.dcloud.net.cn/question/148195)
  + 支付宝小程序平台 修复 vue3 项目 访问 $slots 不生效的Bug [详情](https://ask.dcloud.net.cn/question/150373)
  + Alipay MiniApp platform fixes the bug that the vue3 project access $slots does not take effect [Details](https://ask.dcloud.net.cn/question/150373)
* 【uniCloud】
  + 【重要】新增云函数ip防刷功能，避免大量无效请求导致云函数、数据库响应变慢 [详情](https://uniapp.dcloud.net.cn/uniCloud/ip-filter.html)
  + [Important] Added cloud function ip anti-brush function to avoid cloud function and database response slowdown caused by a large number of invalid requests [Details](https://uniapp.dcloud.net.cn/uniCloud/ip-filter.html)
  + 修复 部分场景下在 main.js 内使用 uniCloud 报错的Bug
  + Fixed the bug that reported errors when using uniCloud in main.js in some scenarios
  + 修复 uni-admin 在 vue3 项目中使用 uni.showLeftWindow 后组件上 showLeftWindow 值并没有更新的Bug [详情](https://ask.dcloud.net.cn/question/149618)
  + Fixed the bug that the showLeftWindow value on the component was not updated after uni-admin used uni.showLeftWindow in the vue3 project [Details](https://ask.dcloud.net.cn/question/149618)
  + uni统计2 新增 前端数据上报周期配置项 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html#report-time)
  + Added front-end data reporting period configuration item in uni statistics 2 [Details](https://uniapp.dcloud.net.cn/uni-stat-v2.html#report-time)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + iOS平台 修复 3.5.0版本引出的 使用百度地图或百度定位时未勾选`使用广告标识（IDFA）`云打包报错的Bug
  + iOS platform fixes the bug that cloud packaging errors caused by version 3.5.0 were not checked when using Baidu Maps or Baidu Positioning
  + iOS平台 修复 3.5.3版本引出的 开通 uni-AD 开屏广告后台切前台可能导致页面回退不正常的Bug [详情](https://ask.dcloud.net.cn/question/150053)
  + iOS platform fixed the bug caused by the 3.5.3 version of uni-AD App Open Ads background switching to the foreground that may lead to abnormal page rollback [Details](https://ask.dcloud.net.cn/question/150053)
  + iOS平台 修复 图片选择界面设置 crop 属性选择 iCloud 图片黑屏的Bug [详情](https://ask.dcloud.net.cn/question/149219)
  + iOS platform fixed the black screen bug in the image selection interface setting crop attribute to select iCloud images [Details](https://ask.dcloud.net.cn/question/149219)

#### 3.5.3.20220727-alpha
* 【uni-app】
  + App平台 新增 uni.openAppAuthorizeSetting 跳转系统授权管理页 [详情](https://uniapp.dcloud.io/api/system/openappauthorizesetting.html)
  + App platform added uni.openAppAuthorizeSetting to jump to the system authorization management page [Details](https://uniapp.dcloud.io/api/system/openappauthorizesetting.html)
  + App-iOS平台 修复 https 请求配置自签名 p12 证书包含中间证书时请求报错的Bug [详情](https://ask.dcloud.net.cn/question/149526)
  + App-iOS platform fixes the bug that the https request configuration self-signed p12 certificate contains an intermediate certificate. [Details](https://ask.dcloud.net.cn/question/149526)
  + App-iOS平台 修复 nvue box-shadow 样式设置 spread 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/148415)
  + App-iOS platform fix nvue box-shadow style setting spread parameter invalid Bug [details](https://ask.dcloud.net.cn/question/148415)
* 【uniCloud】
  + 新增 uni-admin uni统计支持上传 sourceMap，报错可准确回溯源码 [详情](https://uniapp.dcloud.io/uni-stat-v2.html#sourcemap-parse-error)
  + Added uni-admin uni statistics to support uploading sourceMap, error reporting can accurately trace back to the source code [Details](https://uniapp.dcloud.io/uni-stat-v2.html#sourcemap-parse-error)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.480.1350 版，iOS为 4.13.80 版；快手广告SDK iOS为 3.3.27 版；今日头条穿山甲SDK iOS为 4.7.0.0 版；穿山甲GroMore广告SDK iOS为 3.5.1.0 版；Sigmob广告联盟SDK iOS为 4.2.1 版
  + Update uni-AD Tencent Youlianghui SDK Android to version 4.480.1350, iOS to version 4.13.80; Kuaishou Advertising SDK iOS to version 3.3.27; Toutiao Pangolin SDK iOS to version 4.7.0.0; Pangolin GroMore Advertising SDK iOS Version 3.5.1.0; Sigmob advertising network SDK iOS version 4.2.1
  + Android平台 更新 UniPush 使用的个推SDK为 3.2.11.0 版，个推核心组件SDK为 3.1.9.0 版；谷歌渠道个推SDK为 3.2.10.8 版，个推核心组件SDK为 3.1.9.10 版；解决安全检测可能报个推SDK超频获取信息的问题 [详情](https://ask.dcloud.net.cn/question/149127)
  + Android platform update The Getui SDK used by UniPush is version 3.2.11.0, and the Getui core component SDK is version 3.1.9.0; the Google channel Getui SDK is version 3.2.10.8, and the Getui core component SDK is version 3.1.9.10; Security detection may report a problem with overclocking the SDK to obtain information [details](https://ask.dcloud.net.cn/question/149127)
  + Android平台 修复 上架某些应用市场审核检测可能报应用后台运行时存在获取任务列表行为的Bug
  + Android platform repaired the bug that the audit detection of some application markets on the shelves may report that there is a behavior of obtaining the task list when the application is running in the background
  + iOS平台 修复 3.5.0版本引出的 创建本地消息 plus.push.createMessage 不传 option 参数引起应用崩溃的Bug
  + iOS platform fixes the bug that the application crashes caused by the 3.5.0 version of creating a local message plus.push.createMessage without passing the option parameter
  + iOS平台 修复 sqlite 在应用 restart 后 executeSql 修改数据报`Attempt to write a readonly database`错误的Bug [详情](https://ask.dcloud.net.cn/question/139765)
  + iOS platform fixed the bug that executeSql modified the data report `Attempt to write a readonly database` error in sqlite after application restart [details](https://ask.dcloud.net.cn/question/139765)
  + iOS平台 修复 从本地相册中选择慢动作视频引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/149219)
  + iOS platform fixed the bug that the app crashed when selecting a slow-motion video from the local photo album [Details](https://ask.dcloud.net.cn/question/149219)
  + iOS平台 修复 视频播放 video 的 seek 方法传入小于当前播放时间值无效的Bug [详情](https://ask.dcloud.net.cn/question/148781)
  + iOS platform fixes the bug that the seek method of video playback is invalid when the value is less than the current playback time [Details](https://ask.dcloud.net.cn/question/148781)
  + iOS平台 修复 打开包含视频播放 video 控件的页面会打断其他App后台音乐播放的Bug [详情](https://ask.dcloud.net.cn/question/146719)
  + iOS platform fixes the bug that opening a page containing a video control will interrupt the background music playback of other apps [Details](https://ask.dcloud.net.cn/question/146719)
* 【uni小程序SDK】
* 【uni MiniApp SDK】
  + iOS平台 修复 未开启后台运行，多次切换小程序和原生界面可能导致小程序返回按钮无效的Bug
  + iOS platform fixes the bug that the back button of the MiniApp may be invalid due to multiple switching between the MiniApp and the native interface without turning on the background operation

#### 3.5.2.20220719-alpha
* 【uni-app】
  + App平台 新增 uni.getSystemSetting 获取手机系统的定位、蓝牙、wifi开关等设置 [详情](https://uniapp.dcloud.io/api/system/getsystemsetting)
  + Added uni.getSystemSetting to the App platform to get the location, bluetooth, wifi switch and other settings of the mobile phone system [Details](https://uniapp.dcloud.io/api/system/getsystemsetting)
  + App平台 新增 uni.getAppAuthorizeSetting 获取应用权限状态，是否被授予定位、相册等权限 [详情](https://uniapp.dcloud.io/api/system/getappauthorizesetting)
  + Added uni.getAppAuthorizeSetting on the App platform to get the status of the app authorization, whether it is granted location, photo album and other permissions [Details](https://uniapp.dcloud.io/api/system/getappauthorizesetting)
  + App平台 新增 uni.createPushMessage 创建本地通知栏消息 [详情](https://uniapp.dcloud.io/api/plugins/push.html#createpushmessage)
  + App platform added uni.createPushMessage to create a local notification bar message [Details](https://uniapp.dcloud.io/api/plugins/push.html#createpushmessage)
  + App平台 修复 vue3 项目 首次启动调用 uni.getPushClientId 获取不到cid的Bug
  + App platform fixes the bug that the cid cannot be obtained by calling uni.getPushClientId for the first startup of the vue3 project
  + App平台 修复 vue2 项目 nvue 页面访问 process.env 报错的Bug [详情](https://ask.dcloud.net.cn/question/147948)
  + App platform fixes the bug that the vue2 project nvue page access process.env error report [details](https://ask.dcloud.net.cn/question/147948)
  + App、H5平台 修复 vue3 项目 uni.openLocation 未配置 latitude longitude 时不触发 fail 回调的Bug
  + App, H5 platform Fix the bug that the fail callback is not triggered when the uni.openLocation of the vue3 project is not configured with latitude longitude
  + App-Android平台 修复 nvue map 组件放大地图时标记点气泡 callout 不显示的Bug [详情](https://ask.dcloud.net.cn/question/148741)
  + App-Android platform fixes the bug that the marker bubble callout is not displayed when the nvue map component zooms in on the map [Details](https://ask.dcloud.net.cn/question/148741)
  + App-iOS平台 修复 nvue image 组件 src 属性更新使用 gif 格式图片时无法切换的Bug [详情](https://ask.dcloud.net.cn/question/148807)
  + App-iOS platform fixed the bug that the nvue image component src attribute update cannot be switched when using gif format images [Details](https://ask.dcloud.net.cn/question/148807)
  + App-iOS平台 修复 nvue 组件动态修改 border-radius 样式可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/144709)
  + App-iOS platform fixes the bug that the dynamic modification of the border-radius style of the nvue component may not take effect [Details](https://ask.dcloud.net.cn/question/144709)
  + 百度小程序平台 修复 vue3 项目 uni.login 失效的Bug [详情](https://ask.dcloud.net.cn/question/117304)
  + Baidu MiniApp platform fixes the bug that the uni.login of the vue3 project fails [details](https://ask.dcloud.net.cn/question/117304)
* 【uniCloud】
  + 【重要】新增 JQL Cache Redis。将 MongoDB 查询结果缓存到 Redis [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-cache-redis.html)
  + [Important] Added JQL Cache Redis. Cache MongoDB query results to Redis [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-cache-redis.html)
  + 新增 云对象支持URL化 [详情](https://uniapp.dcloud.net.cn/uniCloud/http.html#cloudobject)
  + Added support for URLization of cloud objects [Details](https://uniapp.dcloud.net.cn/uniCloud/http.html#cloudobject)
  + 新增 云对象支持定时触发 [详情](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#cloudobject)
  + Added cloud object support timing trigger [Details](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#cloudobject)
  + 新增 uniCloud web控制台支持对服务空间进行成员管理 [详情](https://uniapp.dcloud.io/uniCloud/concepts/space.html#collaboration)
  + Added uniCloud web console to support member management of service spaces [Details](https://uniapp.dcloud.io/uniCloud/concepts/space.html#collaboration)
  + 修复 JQL操作成功时新增返回`errCode: 0`，兼容uniCloud响应体规范
  + Fixed the new return `errCode: 0` when the JQL operation is successful, compatible with the uniCloud response body specification
  + 调整 uni-id-common 仍将token存储在用户表的token字段内，与旧版本uni-id保持一致
  + Adjust uni-id-common to still store the token in the token field of the user table, consistent with the old version of uni-id
  + 修复 uni-id-common 部分情况下报read property 'reduce' of undefined的Bug
  + Fix the bug that uni-id-common reported read property 'reduce' of undefined in some cases
  + 优化 uni-admin 应用管理模块可管理App下载地址、小程序二维码等更多应用信息 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#app-manager)
  + Optimize the uni-admin application management module to manage more application information such as App download address, MiniApp QR code [details](https://uniapp.dcloud.io/uniCloud/admin.html#app-manager)
  + 调整 uni-admin 内置 统一发布页（uni-portal）插件 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#uni-portal)
  + Adjust the uni-admin built-in unified release page (uni-portal) plug-in [Details](https://uniapp.dcloud.io/uniCloud/admin.html#uni-portal)
  + 调整 uni-admin 内置 App升级中心（uni-upgrade-center）插件，并支持多应用商店更新 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#uni-upgrade-center)
  + Adjust the uni-admin built-in uni-upgrade-center(uni-upgrade-center) plug-in, and support multiple app store updates [details](https://uniapp.dcloud.io/uniCloud/admin.html#uni-upgrade-center)
  + 新增 uni-id-pages 允许覆盖uni-id-co内置校验规则 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#custom-validator)
  + Added uni-id-pages to allow overriding uni-id-co built-in validation rules [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#custom-validator)
  + 修复 uni-id-pages uni-id-co的logout接口时没有删除token的Bug
  + Fixed the bug that the token was not deleted when the logout interface of uni-id-pages uni-id-co
  + 修复 uni-id-pages app端 clientInfo.appVersionCode 为数字导致 uni-id-co 校验无法通过的Bug
  + Fixed the bug that the uni-id-co verification could not pass because clientInfo.appVersionCode on the uni-id-pages app was a number
  + 修复 uni-id-pages 微信小程序调用uni-id-co接口报错的Bug [详情](https://ask.dcloud.net.cn/question/148877)
  + Fixed the bug that the uni-id-pages WeChat MiniApp called the uni-id-co interface and reported an error [Details](https://ask.dcloud.net.cn/question/148877)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 新增 uni-AD 支持穿山甲GroMore广告 包括开屏、信息流、插屏、全屏视频、激励视频广告
  + Added uni-AD support for pangolin GroMore ads, including opening screen, news feed, interstitial screen, full-screen video, rewarded Rewarded Ads
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.472.1342 版；快手广告SDK Android为 3.3.27 版，iOS为 3.3.26 版；快手内容联盟SDK Android为 3.3.30 版；百度百青藤广告SDK Android为 9.223 版，iOS为 4.883 版；Sigmob广告联盟SDK Android为 4.4.0 版；华为广告SDK Android为 13.4.54.300 版
  + Update uni-AD Tencent Youlianghui SDK Android to version 4.472.1342; Kuaishou Advertising SDK Android to version 3.3.27, iOS to version 3.3.26; Kuaishou Content Alliance SDK Android to version 3.3.30; Baidu Baiqingteng Advertising SDK Android is version 9.223, iOS is version 4.883; Sigmob Advertising Alliance SDK Android is version 4.4.0; Huawei Advertising SDK Android is version 13.4.54.300
  + iOS平台 修复 3.5.0版本引出的 plus.runtime.restart 重启应用后页面返回按钮失效的Bug
  + iOS platform fixes the bug that the page back button fails after restarting the application in plus.runtime.restart caused by version 3.5.0
  + iOS平台 修复 3.5.0版本引出的 uni-AD 开通基础广告首次安装可能卡在启动页面的Bug [详情](https://ask.dcloud.net.cn/question/149192)
  + iOS platform fixed the bug that the uni-AD activation basic ad first installation caused by version 3.5.0 might get stuck on the startup page [Details](https://ask.dcloud.net.cn/question/149192)
  + iOS平台 修复 plus.runtime.openWeb 在 iOS15.4 及以上设备打开页面导航栏显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/148585)
  + iOS platform fixed the bug that the navigation bar of plus.runtime.openWeb was displayed abnormally on iOS15.4 and above devices [Details](https://ask.dcloud.net.cn/question/148585)
  + iOS平台 修复 标题栏 titleNView 更新按钮样式导致布局错位的Bug [详情](https://ask.dcloud.net.cn/question/148542)
  + iOS platform fixed the bug that the title bar titleNView update button style caused layout misalignment [Details](https://ask.dcloud.net.cn/question/148542)
  + iOS平台 修复 plus.navigator.getOrientation 在设备横屏状态时返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/148843)
  + iOS platform fixed the bug that the return value of plus.navigator.getOrientation was incorrect when the device was in landscape state [Details](https://ask.dcloud.net.cn/question/148843)
  + iOS平台 修复 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
  + iOS platform fixed the Bug that did not use the Push module to upload to the AppStore and reported `ITMS-90078: Missing Push Notification Entitlement` warning bug
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + iOS平台 修复 偶现内存泄漏可能引起应用崩溃的Bug
  + iOS platform fixed the bug that the occasional memory leak may cause the app to crash
  + iOS平台 修复 直达二级页面后再打开此页面，关闭时会直接返回首页的Bug
  + iOS platform fixes the bug that when you open this page after going directly to the second-level page, it will directly return to the home page when it is closed

#### 3.5.1.20220707-alpha
* 【uni-app】
  + 修复 vue3 项目 编译器清空输出目录可能报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3650)
  + Fix the bug that the compiler may report an error when clearing the output directory of the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3650)
  + App、H5平台 优化 movable-view 组件触摸过程中支持设置 disabled 属性 [详情](https://github.com/dcloudio/uni-app/issues/2384)
  + App, H5 platform optimized movable-view component support setting disabled attribute during touch [Details](https://github.com/dcloudio/uni-app/issues/2384)
  + App平台 修复 map 组件在部分设备显示黑色边框的Bug [详情](https://ask.dcloud.net.cn/question/145449)
  + App platform Fixed the bug that the map component displayed black borders on some devices [Details](https://ask.dcloud.net.cn/question/145449)
  + App平台 修复 vue3 项目 input 绑定动态 type 报错的Bug
  + App platform fixes the bug that the vue3 project input is bound to the dynamic type and the error is reported
  + App平台 修复 vue3 项目 nvue 页面组件插槽样式可能不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3632)
  + App platform Fix the bug that the vue3 project nvue page component slot style may be incorrect [Details](https://github.com/dcloudio/uni-app/issues/3632)
  + App平台 修复 vue3 项目 vue 页面在 iOS 平台内存不足导致白屏未自动恢复的Bug [详情](https://ask.dcloud.net.cn/article/35913)
  + App platform Fix the bug that the vue page of the vue3 project has insufficient memory on the iOS platform and the white screen does not automatically recover [Details](https://ask.dcloud.net.cn/article/35913)
  + App平台 修复 vue3 项目 nvue 页面 webview 组件 onPostMessage 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/144731)
  + App platform Fix the bug that the onPostMessage event of the nvue page webview component of the vue3 project is invalid [Details](https://ask.dcloud.net.cn/question/144731)
  + App-Android平台 修复 nvue 页面为首页时在部分特定手机启动界面关闭过慢的Bug
  + App-Android platform fixes the bug that when the nvue page is the home page, it is too slow to close the startup interface of some specific mobile phones
  + App-Android平台 修复 nvue image 组件在部分设备可能报空指针错误的Bug [详情](https://ask.dcloud.net.cn/question/147965)
  + App-Android platform fix the bug that the nvue image component may report a null pointer error on some devices [Details](https://ask.dcloud.net.cn/question/147965)
  + App-iOS平台 优化 IAP 支付逻辑 补充手动关闭订单策略，解决自动关单但后续报错可能造成丢单的Bug [详情](https://uniapp.dcloud.net.cn/api/plugins/payment.html#iap)
  + The App-iOS platform optimizes the IAP payment logic and supplements the manual closing order strategy to solve the bug that the order may be lost due to automatic closing but subsequent error reports [Details](https://uniapp.dcloud.net.cn/api/plugins/payment. html#iap)
  + App-iOS平台 修复 uni.getSystemInfo 获取某些设备型号不正确的Bug [详情](https://ask.dcloud.net.cn/question/148344)
  + App-iOS platform fixes the bug that uni.getSystemInfo gets incorrect device models [details](https://ask.dcloud.net.cn/question/148344)
  + App-iOS平台 修复 动态设置 tabBar 隐藏再显示后高斯模糊效果失效的Bug [详情](https://ask.dcloud.net.cn/question/146478)
  + App-iOS platform fixes the bug that the Gaussian blur effect fails after dynamically setting the tabBar to hide and display [Details](https://ask.dcloud.net.cn/question/146478)
  + App-iOS平台 修复 nvue bindingx 在滚动视图中使用 transform.translateY 结果有偏差的Bug [详情](https://ask.dcloud.net.cn/question/144209)
  + App-iOS platform fixes the bug that nvue bindingx uses transform.translateY in the scroll view and the result is biased. [Details](https://ask.dcloud.net.cn/question/144209)
  + App-iOS平台 修复 nvue input 组件嵌套在 list 中时，页面上下滑动 v-model 绑定的值会置空的Bug [详情](https://ask.dcloud.net.cn/question/146246)
  + App-iOS platform fixes the bug that when the nvue input component is nested in the list, the value bound to the v-model will be empty when the page slides up and down [Details](https://ask.dcloud.net.cn/question/146246 )
  + App-iOS平台 修复 nvue textarea 组件设置 auto-height 为 true 时初始高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/146688)
  + App-iOS platform fixes the bug that the initial height of the nvue textarea component is incorrect when auto-height is set to true [Details](https://ask.dcloud.net.cn/question/146688)
  + H5平台 补齐 vue2 项目支持 uni.getLaunchOptionsSync [详情](https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html)
  + H5 platform complement vue2 project support uni.getLaunchOptionsSync [details](https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html)
  + H5平台 补齐 vue2 项目支持 uni.getEnterOptionsSync [详情](https://uniapp.dcloud.net.cn/api/getEnterOptionsSync.html)
  + H5 platform complement vue2 project support uni.getEnterOptionsSync [Details](https://uniapp.dcloud.net.cn/api/getEnterOptionsSync.html)
  + H5平台 优化 hover-class 支持鼠标事件
  + H5 platform optimized hover-class to support mouse events
  + H5平台 优化 map 组件 markertap 事件支持返回坐标信息
  + H5 platform optimized map component markertap event supports returning coordinate information
  + H5平台 修复 map 组件 tap 事件重复触发的Bug
  + H5 platform fixes the bug that the tap event of the map component triggers repeatedly
  + 小程序平台 优化 vue2 项目 slot name 支持动态赋值 [详情](https://ask.dcloud.net.cn/question/82506)
  + MiniApp platform optimization Vue2 project slot name supports dynamic assignment [details](https://ask.dcloud.net.cn/question/82506)
  + 小程序平台 修复 vue3 项目部分情况下，编译后组件 js 文件名不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3629)
  + The MiniApp platform fixes the bug that the js file name of the compiled component is incorrect in some cases of the vue3 project [details](https://github.com/dcloudio/uni-app/issues/3629)
  + 小程序平台 修复 vue3 项目部分情况下，数据更新后，页面未渲染的Bug [详情](https://github.com/dcloudio/uni-app/issues/3648)
  + The MiniApp platform fixes the bug that the page is not rendered after the data is updated in some cases of the vue3 project [details](https://github.com/dcloudio/uni-app/issues/3648)
  + 小程序平台 修复 vue2 项目命名插槽使用 v-if 编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/2635)
  + MiniApp platform fix vue2 project naming slot use v-if compile error bug [details](https://github.com/dcloudio/uni-app/issues/2635)
  + 微信小程序、支付宝小程序平台 新增 vue3 项目 manifest.json 支持 mergeVirtualHostAttributes 配置，用于合并虚拟节点外部样式 [详情](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + Wechat MiniApp and Alipay MiniApp platform add vue3 project manifest.json to support mergeVirtualHostAttributes configuration, which is used to merge external styles of virtual nodes [details](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + 百度小程序、字节小程序平台 修复 vue3 项目 部分情况下，组件 ref 获取不到的Bug [详情](https://github.com/dcloudio/uni-app/issues/3615)
  + Baidu MiniApp and Byte MiniApp platforms fix the bug that the component ref cannot be obtained in some cases of the vue3 project [details](https://github.com/dcloudio/uni-app/issues/3615)
  + 百度小程序、字节小程序平台 修复 vue3 项目 组件事件名包含`-`或`:`时，无法触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3616)
  + Baidu MiniApp and Byte MiniApp platforms fix the bug that cannot be triggered when the vue3 project component event name contains `-` or `:` [details](https://github.com/dcloudio/uni-app/issues/3616)
  + 微信小程序平台 修复 vue3 项目 input 组件动态 type 在 iOS 平台不生效的Bug [详情](https://ask.dcloud.net.cn/question/147787)
  + Wechat MiniApp platform fixes the bug that the dynamic type of the input component of the vue3 project does not take effect on the iOS platform [details](https://ask.dcloud.net.cn/question/147787)
  + 微信小程序平台 修复 vue3 项目 微信开发者工具中配置编译模式丢失的Bug [详情](https://github.com/dcloudio/uni-app/issues/3655)
  + Wechat MiniApp platform fixes the bug that the configuration compilation mode is lost in the vue3 project wechat developer tool [details](https://github.com/dcloudio/uni-app/issues/3655)
  + 微信小程序平台 修复 vue3 项目 project.config.json 更新可能导致开发者工具报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3524)
  + Wechat MiniApp platform repairs the bug that the update of the project.config.json of the vue3 project may cause the developer tool to report an error [details](https://github.com/dcloudio/uni-app/issues/3524)
  + 百度小程序平台 修复 vue3 项目 事件触发可能混乱的Bug[详情](https://github.com/dcloudio/uni-app/issues/3647)
  + Baidu MiniApp platform fixes the bug that may cause confusion when the vue3 project event triggers [details](https://github.com/dcloudio/uni-app/issues/3647)
  + 字节小程序平台 修复 vue3 项目 部分情况下，组件未更新的Bug [详情](https://github.com/dcloudio/uni-app/issues/3625)
  + Byte MiniApp platform fixes the bug that components are not updated in some cases of vue3 projects [details](https://github.com/dcloudio/uni-app/issues/3625)
* 【uniCloud】
  + 新增 uni-push2.0 全端支持（App、小程序、web）的云端一体的统一推送服务 [详情](https://uniapp.dcloud.io/unipush-v2.html)
  + Added uni-push2.0 full support (app, MiniApp, web) cloud-integrated unified push service [details](https://uniapp.dcloud.io/unipush-v2.html)
  + 新增 腾讯云平台 数据万象，对云存储文件进行图片缩放、增加水印等计算功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage.html#%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86)
  + Added Tencent cloud platform data Vientiane, image scaling, watermarking and other calculation functions for cloud storage files [details](https://uniapp.dcloud.net.cn/uniCloud/storage.html#%E6%95%B0 %E6%8D%AE%E5%A4%84%E7%90%86)
  + 新增 keepRunningAfterReturn 配置云函数是否能在 return 后继续运行，仅腾讯云 nodejs12 生效 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#keep-running)
  + Added keepRunningAfterReturn to configure whether the cloud function can continue to run after return, only Tencent Cloud nodejs12 takes effect [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#keep-running)
  + 新增 Redis扩展库 增加 quit 接口用于断开 redis 连接 [详情](https://uniapp.dcloud.net.cn/uniCloud/redis.html#quit)
  + Added Redis extension library Add quit interface to disconnect redis connection [Details](https://uniapp.dcloud.net.cn/uniCloud/redis.html#quit)
  + 新增 JQL数据库管理 支持使用更新操作符 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#update-command)
  + Added JQL database management to support the use of update operators [Details](https://uniapp.dcloud.net.cn/uniCloud/jql.html#update-command)
  + 修复 uniIdRouter 在 loginPage 为 tabbar 页面时无法自动跳转的Bug
  + Fix the bug that uniIdRouter cannot automatically jump when the loginPage is a tabbar page
  + 调整 云函数 context 内增加 `uniIdToken`、`FUNCTION_TYPE` [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-callfunction.html#context)
  + Adjust the cloud function context to add `uniIdToken`, `FUNCTION_TYPE` [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-callfunction.html#context)
  + 调整 云对象 cloudInfo 内增加 functionName、functionType [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-cloud-info)
  + Added functionName and functionType in cloud object cloudInfo [details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-cloud-info)
  + 调整 云对象 clientInfo 内增加 source [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + Adjust the cloud object clientInfo to add source [details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + 修复 本地调试插件 使用运行菜单运行云函数时可能出现日志顺序错误的Bug
  + Fix the bug that the log sequence may be wrong when the local debugging plugin uses the run menu to run the cloud function
  + 修复 本地调试插件 项目AppId由无权使用调整为有权使用时（重新获取AppId或获得所有者授权）重启项目不生效的Bug
  + Fixed the bug that when the project AppId of the local debugging plug-in is adjusted from no right to use (re-acquire AppId or obtain owner authorization) the project does not take effect
  + 调整 本地调试插件 云函数本地运行时配置的运行参数clientInfo内字段调整 [详情](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#mock-client-info)
  + Adjustment of the local debugging plug-in Cloud function local runtime configuration operating parameters clientInfo field adjustment [Details](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#mock-client-info)
  + 新增 HBuilderX opendb schema文件 右键菜单增加【opendb检查更新】，支持从云端更新 opendb schema文件，并生成 JQL 升级迁移文件用于数据迁移
  + Added HBuilderX opendb schema file Right-click menu adds [opendb check update], supports updating opendb schema file from the cloud, and generates JQL upgrade migration file for data migration
  + 修复 HBuilderX 打开云对象子目录下的文件时按 Ctrl+r 运行菜单无运行云对象选项的Bug
  + Fixed the bug that when HBuilderX opened the file under the cloud object subdirectory, press Ctrl+r to run the menu without the option to run the cloud object
  + 【重要】调整 uni统计2 版本记录复用 uni升级中心 的 opendb-app-versions表，废弃 uni-stat-app-versions表 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html#upgrade)
  + [Important] Adjust the uni statistics 2 version record to reuse the opendb-app-versions table of the uni uni-upgrade-center, and discard the uni-stat-app-versions table [details](https://uniapp.dcloud.net.cn/uni-stat-v2.html#upgrade)
  + uni统计2 新增 启动时上报设备各种参数入库 opendb-device 表（目前没有可视化报表，开通 uni-push2.0 与 uni统计2.0 自动上报 push_clientid 到 opendb-device表）
  + Added uni statistics 2 to report various parameters of the device into the opendb-device table at startup (currently there is no visual report, and uni-push2.0 and uni statistics 2.0 will automatically report push_clientid to the opendb-device table)
  + uni统计2 新增 admin端 app崩溃统计页面，补充崩溃率统计
  + uni statistics 2 added admin app crash statistics page, supplemented crash rate statistics
  + uni统计2 修复 admin端 js报错统计页面，错误率计算不准确的Bug
  + uni statistics 2 repair the bug that the admin js error reporting statistics page, the error rate calculation is inaccurate
  + uni统计2 修复 admin端 切换版本或者修改时间等操作后，趋势图状态显示不正确的Bug
  + uni statistics 2 fixes the bug that the status of the trend graph is displayed incorrectly after operations such as switching versions or modifying time on the admin side
  + uni统计2 修复 admin端 部分页面首次进入时界面闪烁的问题
  + uni statistics 2 fixes the problem that the interface flickers when entering some pages on the admin side for the first time
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 优化 uni-AD 激励视频和信息流广告支持并发请求
  + Optimized uni-AD rewarded video and feed Native Ads to support concurrent requests
  + Android平台 新增 Google Pay 支持配置支付网关信息 buildTokenizationSpecification [详情](https://uniapp.dcloud.io/tutorial/app-payment-google.html#%E4%BD%BF%E7%94%A8google%E6%94%AF%E4%BB%98)
  + Added Google Pay support for Android platform to configure payment gateway information buildTokenizationSpecification [Details](https://uniapp.dcloud.io/tutorial/app-payment-google.html#%E4%BD%BF%E7%94%A8google% E6%94%AF%E4%BB%98)
  + Android平台 更新 腾讯X5内核为 4.3.0.299 版
  + Android platform update Tencent X5 kernel to version 4.3.0.299
  + Android平台 新增 Facebook 登录 SDK 为 12.0.0 版，解决登录受限的问题 [详情](https://ask.dcloud.net.cn/question/147788)
  + Android platform added Facebook login SDK version 12.0.0 to solve the problem of limited login [Details](https://ask.dcloud.net.cn/question/147788)
  + Android平台 修复 3.5.0 版本引出的 uni-AD 特定情况可能只展示同一广告源广告的Bug
  + Android platform fixed the bug that only the same ad source ad could be displayed in uni-AD caused by version 3.5.0
  + Android平台 修复 uploader 上传文件请求返回错误响应码时，无法获取服务器返回数据的Bug
  + Android platform fixed the bug that the uploader could not get the data returned by the server when the uploader request returned an error response code
  + Android平台 修复 setBadgeNumber 设置角标在新荣耀设备不生效的Bug [详情](https://ask.dcloud.net.cn/question/140910)
  + Android platform fixes the bug that setBadgeNumber setting badge does not take effect on new Honor devices [Details](https://ask.dcloud.net.cn/question/140910)
  + iOS平台 新增 IAP支付 手动关闭订单、获取未关闭订单列表等功能，以解决自动关闭订单在某些情况引发的订单丢失的Bug [详情](https://uniapp.dcloud.io/tutorial/app-payment-aip.html)
  + The iOS platform has added functions such as IAP payment to manually close orders, obtain a list of unclosed orders, etc., to solve the bug of order loss caused by automatic closing orders in some cases [details](https://uniapp.dcloud.io/tutorial/ app-payment-aip.html)
  + iOS平台 修复 3.5.0 版本引出的 uni-AD 穿山甲开屏广告偶现 bottomView 没有关闭的Bug
  + iOS platform fixes the bug that the uni-AD pangolin App Open Ads occasionally appears in the bottomView and is not closed due to the 3.5.0 version
  + iOS平台 修复 首次启动 App 获取安全区域高度可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/148277)
  + iOS platform fixes the bug that the height of the safe area may be incorrect when starting the App for the first time [Details](https://ask.dcloud.net.cn/question/148277)
  + iOS平台 修复 设备型号名称 model、deviceModel 返回值不规范的Bug
  + iOS platform fixed the bug that the device model name model, deviceModel return value is not standardized
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 getAppRuningForAppid 在部分场景可能报空指针错误的Bug
  + Android platform fixes the bug that getAppRuningForAppid may report a null pointer error in some scenarios
  + iOS平台 修复 小程序未开启后台运行，前台运行时调用 open 方法直达页面无效的Bug
  + iOS platform fixes the bug that the MiniApp is not running in the background, and the open method is called when the foreground is running, and the page is invalid.

#### 3.5.0.20220623-alpha
* 【uni-app】
  + 新增 uni-app vue2项目 支持使用`@/pages.json`引用条件编译后的`pages.json`文件
  + Added support for uni-app vue2 project to use `@/pages.json` to reference conditionally compiled `pages.json` file
  + 修复 3.4.17 版本引发的 vue3 项目 运行在小程序平台 `<script setup>`中使用 const 定义 reactive 对象访问出错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3606)
  + Fixed the bug caused by version 3.4.17 when the vue3 project runs on the MiniApp platform `<script setup>` and uses const to define the reactive object access error bug [details](https://github.com/dcloudio/uni-app/issues/3606)
  + App、Web平台 修复 3.4.10 版本引出的 vue2项目 image 组件 load 事件图像大小信息不准确的Bug [详情](https://ask.dcloud.net.cn/question/147174)
  + App, Web platform Fix the bug of inaccurate image size information in the image component load event of the vue2 project introduced in version 3.4.10 [Details](https://ask.dcloud.net.cn/question/147174)
  + App平台 优化 slot name 支持动态赋值 [详情](https://ask.dcloud.net.cn/question/95109)
  + App platform optimized slot name to support dynamic assignment [Details](https://ask.dcloud.net.cn/question/95109)
  + App-Android平台 新增 manifest.json 支持 webview 配置，系统 webview 低于指定版本时，弹出提示或者下载 x5 内核后继续启动 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
  + App-Android platform newly added manifest.json to support webview configuration. When the system webview is lower than the specified version, a prompt will pop up or continue to start after downloading the x5 kernel [Details](https://uniapp.dcloud.net.cn/collocation/manifest .html#appwebview)
  + App-Android平台 修复 tabbar 启用高斯模糊后获取 windowBottom 错误的Bug [详情](https://ask.dcloud.net.cn/question/146583)
  + App-Android platform fixes the bug of getting windowBottom error after Gaussian blur is enabled on the tabbar [Details](https://ask.dcloud.net.cn/question/146583)
  + App-iOS平台 修复 uni.request 访问特定接口可能数据解析出现乱码的Bug [详情](https://ask.dcloud.net.cn/question/145530)
  + App-iOS platform fixes the bug that uni.request accessing a specific interface may cause garbled data parsing [Details](https://ask.dcloud.net.cn/question/145530)
  + 微信小程序、支付宝小程序 新增 vue2项目 manifest.json 支持 scopedSlotsCompiler 配置，用于合并虚拟节点外部样式 [详情](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + Wechat MiniApp and Alipay MiniApp add vue2 project manifest.json to support scopedSlotsCompiler configuration, which is used to merge external styles of virtual nodes [details](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + 百度小程序平台 修复 vue3项目 组件嵌套使用时响应式可能失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3612)
  + Baidu MiniApp platform fixes the bug that the responsiveness may fail when the vue3 project components are nested [Details](https://github.com/dcloudio/uni-app/issues/3612)
* 【uniCloud】
  + 【重要】uni-id重构。uni-id公共模块 + uni-id-cf云函数 的组合不再更新，取而代之的是 uni-id-common公共模块 + uni-id-pages云端一体模板
  + [Important] uni-id refactoring. The combination of uni-id public module + uni-id-cf cloud function is no longer updated, replaced by uni-id-common public module + uni-id-pages cloud integrated template
    - 新增 uni-id-common公共模块。更小巧的公共模块，负责 uni-id 的 token 管理和权限校验 [详情](https://uniapp.dcloud.io/uniCloud/uni-id-common.html)
    - Added uni-id-common common module. A smaller public module, responsible for token management and permission verification of uni-id [Details](https://uniapp.dcloud.io/uniCloud/uni-id-common.html)
    - 新增 uni-id-pages云端一体页面模板。包括一组前端页面 + uni-id-co云对象。包括用户注册、登录、忘记密码、个人中心等功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
    - Added uni-id-pages cloud-integrated page template. Includes a set of front-end pages + uni-id-co cloud objects. Including user registration, login, forgotten password, personal center and other functions [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
  + 新增 uniIdRouter路由管理。在 pages.json 里直接定义哪些页面需要登录后才能访问 [详情](https://uniapp.dcloud.io/uniCloud/uni-id-summary.html#uni-id-router)
  + Added uniIdRouter routing management. Directly define in pages.json which pages need to be logged in to access [Details](https://uniapp.dcloud.io/uniCloud/uni-id-summary.html#uni-id-router)
  + 新增 uniCloud.onNeedLogin/offNeedLogin 用于监听/移除监听需要登录事件，需搭配 `uniIdRouter` 使用 [详情](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-need-login)
  + Added uniCloud.onNeedLogin/offNeedLogin to monitor/remove the need to monitor login events, need to be used with `uniIdRouter`[Details](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-need -login)
  + 新增 uniCloud.onRefreshToken/offRefreshToken 用于监听/移除监听 token 更新事件 [详情](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-refresh-token)
  + Added uniCloud.onRefreshToken/offRefreshToken for monitoring/removing monitoring token update events [details](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-refresh-token)
  + 调整 HBuilderX 中创建 uniCloud 项目时默认导入 uni-id-common公共模块，不再导入老版 uni-id公共模块
  + Adjust the uni-id-common public module to be imported by default when creating a uniCloud project in HBuilderX, and no longer import the old version of the uni-id public module
  + 调整 clientDB 优先依赖 uni-id-common，在没有 uni-id-common 时依赖老版 uni-id公共模块
  + Adjust clientDB to rely on uni-id-common first, and rely on the old version of uni-id common module when there is no uni-id-common
  + 修复 本地调试插件 HBuilderX 3.4.12引出的运行项目时部分场景下访问非关联服务空间云函数报错的Bug
  + Fix the bug that the local debugging plug-in HBuilderX 3.4.12 leads to the bug that the error is reported when accessing the cloud function of the non-associated service space in some scenarios when running the project
  + 修复 本地调试插件 部分app平台、web平台切换云端云函数/本地云函数无效的Bug [详情](https://ask.dcloud.net.cn/question/147633)
  + Fix the bug that the local debugging plug-in part of the app platform and the web platform switch cloud function/local cloud function invalid [details](https://ask.dcloud.net.cn/question/147633)
  + 修复 clientDB action 的 after 内抛出错误不能被另一个 action 的 after 接收到的Bug [详情](https://ask.dcloud.net.cn/question/147099)
  + Fix the bug that the error thrown in the after of the clientDB action cannot be received by the after of another action [Details](https://ask.dcloud.net.cn/question/147099)
  + 修复 项目内无 uni-id 时运行 jql 文件报错的Bug
  + Fixed the bug that the error was reported when running the jql file when there was no uni-id in the project
  + uniCloud控制台 新增 Redis 数据可视化管理
  + Added Redis data visualization management in uniCloud console
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 【重要】uni-AD 新增 激励视频广告支持实时竞价 [详情](https://uniapp.dcloud.io/uni-ad.html#bidding)
  + [Important] uni-AD has added Rewarded Ads to support real-time bidding [Details](https://uniapp.dcloud.io/uni-ad.html#bidding)
  + Android平台 更新 云端打包环境 Gradle 为 7.3.3，Android Gradle plugin 为 4.2.0，compileSdkVersion 为 31
  + Android platform update Cloud packaging environment Gradle is 7.3.3, Android Gradle plugin is 4.2.0, compileSdkVersion is 31
  + Android平台 新增 云端打包支持设置 dataBinding、viewBinding [文档](https://uniapp.dcloud.io/collocation/manifest.html#buildfeatures)
  + Added cloud packaging support setting dataBinding, viewBinding [documentation](https://uniapp.dcloud.io/collocation/manifest.html#buildfeatures) for Android platform
  + Android平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备在 Android12 设备可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/146849)
  + Android platform fixed the bug that the startBluetoothDevicesDiscovery search for nearby Bluetooth devices may cause the app to crash on Android12 devices [Details](https://ask.dcloud.net.cn/question/146849)
  + Android平台 修复 UniPush 存在监听`ACTION_BOOT_COMPLETED`广播行为，可能违反应用市场上架合规检测问题 [详情](https://ask.dcloud.net.cn/question/147319)
  + Android platform fixed UniPush monitoring `ACTION_BOOT_COMPLETED` broadcast behavior, which may violate the application market compliance detection problem [Details](https://ask.dcloud.net.cn/question/147319)
  + Android平台 修复 UniPush 调用 plus.runtime.restart 后无法创建本地通知消息的Bug [详情](https://ask.dcloud.net.cn/question/146470)
  + Android platform fixed the bug that UniPush could not create local notification messages after calling plus.runtime.restart [Details](https://ask.dcloud.net.cn/question/146470)
  + Android平台 修复 从本地相册选择大图片预览时可能引起应用崩溃的Bug
  + Android platform fixed a bug that may cause the app to crash when selecting a large image preview from the local photo album
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK为 4.5.1.6 版
  + iOS platform update uni-AD Jinri Toutiao pangolin SDK to version 4.5.1.6
  + iOS平台 更新 百度定位SDK为 2.0.0 版，百度地图SDK为 6.5.0 版
  + iOS platform update Baidu positioning SDK to version 2.0.0, Baidu map SDK to version 6.5.0
  + iOS平台 修复 5+App项目获取5G网络类型错误的Bug
  + iOS platform fixed the bug that the 5+App project got the wrong 5G network type
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 启动小程序直达页面参数与文档规范不一致的Bug
  + Android platform repaired the bug that the direct page parameters of the startup MiniApp were inconsistent with the document specification

#### 3.4.17.20220614-alpha
* 【uni-app】
  + 修复 vue3 项目 onError 生命周期不生效的Bug
  + Fixed the bug that the onError life cycle of the vue3 project did not take effect
  + App、Web平台 修复 vue3 项目 uni.setTabBarItem 设置 pagePath 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3592)
  + App, Web platform Fix the bug that the pagePath setting of vue3 project uni.setTabBarItem does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3592)
  + App平台 优化 video 组件支持 show-mute-btn 配置
  + App platform optimized video component to support show-mute-btn configuration
  + App平台 优化 vue3 项目 rich-text 组件支持服务端渲染
  + App platform optimized vue3 project rich-text component supports server-side rendering
  + App平台 修复 3.4.10 版本引出的 scopeId 污染 slot 导致样式异常的Bug [详情](https://ask.dcloud.net.cn/question/145366)
  + App platform Fixed the bug that the scopeId pollution slot caused by version 3.4.10 caused abnormal styles [Details](https://ask.dcloud.net.cn/question/145366)
  + App平台 修复 调试时调用 uni.getSystemInfo 报错的Bug [详情](https://ask.dcloud.net.cn/question/146611)
  + App platform fixed the bug of calling uni.getSystemInfo when debugging [details](https://ask.dcloud.net.cn/question/146611)
  + App平台 修复 vue3 项目 Windows 系统上，运行至手机或模拟器时，可能多次同步文件的Bug
  + App platform Fix the bug that the vue3 project may synchronize files multiple times when running on a mobile phone or emulator on a Windows system
  + App平台 修复 vue3 项目 nvue 页面 onPageScroll，onReachBottom 不触发的Bug [详情](https://ask.dcloud.net.cn/question/145873)
  + App platform Fix the bug that onPageScroll and onReachBottom do not trigger on the vue3 project nvue page [Details](https://ask.dcloud.net.cn/question/145873)
  + App平台 修复 vue3 项目 uni.getVideoInfo 成功回调不执行Bug
  + App platform fixes the bug that the uni.getVideoInfo success callback of the vue3 project does not execute
  + App-Android平台 修复 nvue web-view 组件 user-agent 不正确导致加载H5页面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/146877)
  + App-Android platform fix nvue web-view component user-agent error causing abnormal loading H5 page display bug [Details](https://ask.dcloud.net.cn/question/146877)
  + App-Android平台 修复 nvue 组件同时设置 box-shadow、elevation 样式在部分特殊场景可能会出现渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/147041)
  + App-Android platform fix nvue component and set box-shadow and elevation styles at the same time. In some special scenes, abnormal rendering may occur. [Details](https://ask.dcloud.net.cn/question/147041)
  + iOS平台 修复 nvue ad-content-page 组件暂停后展示其它视频类广告，关闭广告可能引起组件后台自动播放的Bug
  + iOS platform Fix nvue ad-content-page component to display other video ads after pausing, closing the ad may cause the component to automatically play the bug in the background
  + Web平台 修复 vue3 项目 pc端 createSelectorQuery 获取 top 错误Bug
  + Web platform fix vue3 project pc side createSelectorQuery get top error bug
  + 小程序平台 修复 vue3 项目 v-for 嵌套使用 slot 时，渲染不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3587)
  + The MiniApp platform fixes the bug of incorrect rendering when the v-for nested slot is used in the vue3 project [details](https://github.com/dcloudio/uni-app/issues/3587)
  + 微信小程序平台 修复 3.4.13 版本引出的 manifest.json 文件缺少 mp-weixin 节点编译报错的Bug [详情](https://ask.dcloud.net.cn/question/146580)
  + The WeChat MiniApp platform fixes the bug that the manifest.json file derived from version 3.4.13 lacks the mp-weixin node compilation error [Details](https://ask.dcloud.net.cn/question/146580)
* 【uniCloud】
  + 修复 本地调试插件 3.4.0版本引出的客户端连接本地云函数时获取客户端 userAgent 为`HBuilderX`的Bug
  + Fix the bug that the client userAgent is `HBuilderX` when the client connects to the local cloud function introduced by the local debugging plug-in version 3.4.0
  + 修复 本地调试插件 云函数内使用`console.timeEnd`输出日志错乱的Bug
  + Fix the bug that the local debugging plug-in uses `console.timeEnd` in the cloud function to output log confusion
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + Android平台 修复 uni-AD 开屏广告在部分小米手机可能会卡在启动界面的Bug
  + Android platform fixes the bug that uni-AD App Open Ads may be stuck on the startup interface on some Xiaomi phones
  + iOS平台 更新 uni-AD 快手广告SDK为 3.3.25 版，快手内容联盟SDK为 3.3.29 版，解决调用系统相册可能引起崩溃的问题
  + iOS platform update uni-AD Kuaishou Advertising SDK to version 3.3.25, and Kuaishou Content Alliance SDK to version 3.3.29, to solve the problem that calling the system album may cause a crash

#### 3.4.13.20220601-alpha
* 【uni-app】
  + App、H5平台 新增 uni.getDeviceInfo [详情](https://uniapp.dcloud.io/api/system/getDeviceInfo.html)
  + App, H5 platform added uni.getDeviceInfo [Details](https://uniapp.dcloud.io/api/system/getDeviceInfo.html)
  + App、H5平台 新增 uni.getAppBaseInfo [详情](https://uniapp.dcloud.io/api/system/getAppBaseInfo.html)
  + Added uni.getAppBaseInfo for App and H5 platforms [Details](https://uniapp.dcloud.io/api/system/getAppBaseInfo.html)
  + App、H5平台 新增 uni.getWindowInfo [详情](https://uniapp.dcloud.io/api/system/getWindowInfo.html)
  + App, H5 platform added uni.getWindowInfo [Details](https://uniapp.dcloud.io/api/system/getWindowInfo.html)
  + App、H5平台 新增 uni.getSystemInfo 添加 devicePixelRatio、deviceOrientation、appLanguage 等字段 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + Added uni.getSystemInfo to App and H5 platforms and added fields such as devicePixelRatio, deviceOrientation, appLanguage [Details](https://uniapp.dcloud.io/api/system/info.html)
  + App平台 新增 uni.getSystemInfo 添加 romName、romVersion 字段 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + App platform added uni.getSystemInfo to add romName, romVersion fields [Details](https://uniapp.dcloud.io/api/system/info.html)
  + App平台 修复 3.4.10 版本引出的 view 组件使用 wxs/renderjs 报错的Bug
  + App platform Fix the bug that the view component introduced in version 3.4.10 uses wxs/renderjs to report errors
  + App-Android平台 修复 使用谷歌地图时，mapContext 对象调用 moveAlong 移动 marker 动画过程中拖拽地图会产生偏移的Bug
  + App-Android platform fixes the bug that when using Google Maps, the mapContext object calls moveAlong to move the marker animation, and dragging the map will produce an offset bug
  + App-Android平台 修复 nvue view 组件 hover-class 属性动态改变组件大小时无效的Bug [详情](https://ask.dcloud.net.cn/question/145677)
  + App-Android platform fixed the bug that the hover-class attribute of the nvue view component was invalid when the component size was dynamically changed [Details](https://ask.dcloud.net.cn/question/145677)
  + App-iOS平台 修复 nvue 页面滚动视图中设置 position 属性为 sticky 样式显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/144303)
  + App-iOS platform Fix the bug that setting the position attribute to sticky style in the nvue page scroll view is incorrect [Details](https://ask.dcloud.net.cn/question/144303)
  + H5平台 修复 vue3 项目 当 App.vue 使用 setup 时，发行后页面空白的Bug [详情](https://ask.dcloud.net.cn/question/146011)
  + H5 platform fix vue3 project When App.vue uses setup, the bug that the page is blank after release [Details](https://ask.dcloud.net.cn/question/146011)
  + H5平台 修复 3.4.10 版本引发的 vue3 项目在 left/top/right window 页面使用 match-media 报错的Bug [详情](https://ask.dcloud.net.cn/question/146126)
  + H5 platform Fix the bug that the vue3 project caused by version 3.4.10 uses match-media error reporting on the left/top/right window page [Details](https://ask.dcloud.net.cn/question/146126)
  + 微信小程序平台 修复 vue3 项目 ad-custom 组件无法使用的Bug [详情](https://ask.dcloud.net.cn/question/145883)
  + The WeChat MiniApp platform fixes the bug that the ad-custom component of the vue3 project cannot be used [Details](https://ask.dcloud.net.cn/question/145883)
* 【uniCloud】
  + 新增 uniCloud.onResponse/offResponse 接口用于监听云函数、云对象及clientDB的响应结果 [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk.html#on-response)
  + Added uniCloud.onResponse/offResponse interface to monitor the response results of cloud functions, cloud objects and clientDB [Details](https://uniapp.dcloud.net.cn/uniCloud/client-sdk.html#on-response)
  + 新增 uniCloud响应体规范 添加 newToken 字段，用于token续期。云对象会自动将token持久化存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)
  + Added uniCloud response body specification and added newToken field for token renewal. Cloud objects will automatically store the token persistently [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)
  + 修复 uniCloud虚拟目录、以及uni_modules下的云对象目录，右键菜单，没有运行-本地云对象、调试运行-本地云对象的菜单的Bug
  + Fix the bug that the uniCloud virtual directory and the cloud object directory under uni_modules, the right-click menu, do not have the menu of run-local cloud object, debug run-local cloud object
  + uniCloud控制台 新增 腾讯云云存储支持上传文件夹
  + Added Tencent Cloud cloud storage to support uploading folders in uniCloud console
  + uni-admin 新增 uni统计 可通过选择「应用版本」查询数据
  + uni-admin added uni statistics, you can query data by selecting "application version"
  + uni-admin 新增 uni统计 原生 app 崩溃页部分功能
  + uni-admin added some functions of uni statistics native app crash page
  + uni-admin 修复 uni统计 渠道页 table 表格最后一列空白的 bug
  + uni-admin fixes the bug that the last column of the uni statistics channel page table is blank
  + uni-admin 修复 uni统计 场景分析页趋势图有数据却显示为 0 的 bug
  + uni-admin fixes the bug that the trend chart on the uni statistics scene analysis page has data but shows 0
  + uni-admin 修复 系统设置中权限只能加载 20 条的 bug
  + uni-admin fixes the bug that only 20 items of authority can be loaded in the system settings
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + Android平台 新增 原生隐私政策提示框支持 hrefLoader 属性，配置提示框中点击 href 链接的打开方式 [详情](https://uniapp.dcloud.io/tutorial/app-privacy-android)
  + Added support for the hrefLoader attribute in the native privacy policy prompt box on the Android platform, and configures the opening method of clicking the href link in the prompt box [Details](https://uniapp.dcloud.io/tutorial/app-privacy-android)
  + Android平台 修复 uni-AD 腾讯优量汇广告联盟部分下载类广告下载成功之后无法安装的Bug
  + Android platform fixed the bug that the uni-AD Tencent Youlianghui Advertising Alliance part of the download ads could not be installed after the download was successful
  + iOS平台 更新 一键登录 使用的个验SDK为 2.2.0.0 版，个推核心组件SDK为 1.2.7.0 版
  + iOS platform update One-click login The Getest SDK used is version 2.2.0.0, and the core component SDK of Getui is version 1.2.7.0
  + iOS平台 修复 音频播放 audio 设置 startTime 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/146028)
  + iOS platform fixes the bug that the audio setting startTime of audio playback may not take effect [Details](https://ask.dcloud.net.cn/question/146028)
  + iOS平台 修复 视频播放 video 播放 rtmp 协议直播流视频时声音只能通过扬声器播放的Bug [详情](https://ask.dcloud.net.cn/question/129703)
  + iOS platform fixes the bug that the sound can only be played through the speaker when playing rtmp protocol live streaming video [details](https://ask.dcloud.net.cn/question/129703)
  + iOS平台 修复 视频播放 video 播放 rtmp/rtsp 协议视频时 timeupdate 事件返回当前播放时间 currentTime 始终为 0 的Bug
  + iOS platform fixed the bug that the timeupdate event returns the current playback time and currentTime is always 0 when the video is playing rtmp/rtsp protocol video
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 小程序应用资源更新可能引起页面卡顿的Bug
  + Android platform fixes the bug that the resource update of the MiniApp application may cause the page to freeze
  + iOS平台 修复 存在自定义 UIWindow 时 toast 可能无法显示的Bug
  + iOS platform fixed the bug that the toast may not be displayed when there is a custom UIWindow

#### 3.4.12.20220523-alpha
* 【uniCloud】
  + 修复 HBuilderX 3.4.10 引起的关联服务空间运行云函数错误的Bug [详情](https://ask.dcloud.net.cn/question/145551)
  + Fix the bug of HBuilderX 3.4.10 that caused the error of running cloud functions in the associated service space [Details](https://ask.dcloud.net.cn/question/145551)

#### 3.4.11.20220520-alpha
* 【uni-app】
  + App平台 修复 nvue 页面 switch 组件切换状态无限闪动的Bug [详情](https://ask.dcloud.net.cn/question/145272)
  + App platform fixed the bug that the switching status of the switch component on the nvue page flickered infinitely [Details](https://ask.dcloud.net.cn/question/145272)
  + App平台 修复 纯 nvue 编译模式 uni_modules 内静态资源未拷贝的Bug
  + App platform fixed the bug that static resources in uni_modules in pure nvue compilation mode were not copied
  + App-iOS平台 修复 vue3 项目 nvue 页面 swiper 组件面板指示点无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/145097)
  + App-iOS platform fixes the bug that the indicator point of the swiper component panel of the vue3 project nvue page cannot be hidden [Details](https://ask.dcloud.net.cn/question/145097)
  + H5平台 新增 vue3 项目 unicloud-db 组件属性 ssr-key [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db.html#ssrkey)
  + Added vue3 project unicloud-db component attribute ssr-key on H5 platform [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db.html#ssrkey)
  + H5平台 修复 vue3 项目 unicloud-db 组件 使用 ssr 时 页面存在2个以上组件时数据显示错乱的Bug [详情](https://ask.dcloud.net.cn/question/139537)
  + H5 platform Fix the bug that the data display disorder when there are more than 2 components on the page when the unicloud-db component of the vue3 project uses ssr [Details](https://ask.dcloud.net.cn/question/139537)
  + H5平台 修复 3.4.10 版本引出的 vue2 项目启用摇树优化缺失 view 组件的Bug [详情](https://ask.dcloud.net.cn/question/145286)
  + H5 platform Fix the bug that the vue2 project introduced in version 3.4.10 enables tree-shaking optimization and the missing view component [Details](https://ask.dcloud.net.cn/question/145286)
  + 小程序平台 修复 vue3 项目 在模板中使用 wxs、sjs 插值表达式不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3527)
  + MiniApp platform fixes the bug that the vue3 project uses wxs and sjs interpolation expressions in the template not to take effect [Details](https://github.com/dcloudio/uni-app/issues/3527)
  + 支付宝小程序平台 修复 vue3 项目 全局组件不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3525)
  + Alipay MiniApp platform fixes the bug that the global components of the vue3 project do not take effect [details](https://github.com/dcloudio/uni-app/issues/3525)
  + 支付宝小程序平台 修复 vue3 项目 sjs 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3527)
  + Alipay MiniApp platform fixes the bug that the vue3 project sjs does not take effect [details](https://github.com/dcloudio/uni-app/issues/3527)
* 【uniCloud】
  + uni-admin 优化 首页增加uni统计的设备概览、注册用户概览
  + uni-admin optimization Added uni statistics device overview and registered user overview on the home page
  + uni-admin 优化 登录速度
  + uni-admin optimized login speed
  + uni-admin 修复 从「首页」跳转「概况」时，url 的 query 丢失的 bug  
  + uni-admin fixed the bug that the query of the url was lost when jumping from the "Homepage" to the "Overview"
  + uni-admin 修复 路由改变后面包屑未响应的 bug
  + uni-admin fixed breadcrumbs not responding bug after route change
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 更新 uni-AD 今日头条穿山甲SDK Android为 4.5.1.1 版；腾讯优量汇SDK iOS为 4.13.65 版；快手广告SDK Android为 3.3.24 版，iOS为 3.3.24 版；百度百青藤广告SDK Android为 9.212 版，iOS为 4.87 版；Sigmob广告联盟SDK Android为 3.5.9 版
  + Updated uni-AD Toutiao Pangolin SDK Android to version 4.5.1.1; Tencent Youlianghui SDK iOS to version 4.13.65; Kuaishou Advertising SDK Android to version 3.3.24, iOS to version 3.3.24; Baidu Baiqingteng Advertising SDK Android is version 9.212, iOS is version 4.87; Sigmob advertising alliance SDK Android is version 3.5.9

#### 3.4.10.20220517-alpha
* 【uni-app】
  + 【重要】新增 uni统计2.0版本发布，开源、私有部署、易定制 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
  + [Important] Added uni statistics 2.0 release, open source, private deployment, easy customization [Details](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
  + 【重要】uniAD 支持微信小程序平台，降低开通流量主门槛 [详情](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + [Important] uniAD supports the WeChat MiniApp platform, lowering the main threshold for opening traffic [Details](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + 【重要】App平台 优化 vue2 项目 view 组件实现方式，提高渲染性能。建议相关开发者升级
  + [Important] App platform optimizes the implementation of the vue2 project view component to improve rendering performance. Suggest related developers to upgrade
  + 新增 uni.getSystemInfo 支持获取更多属性 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + Added uni.getSystemInfo to support getting more properties [Details](https://uniapp.dcloud.io/api/system/info.html)
  + 优化 vue3 项目 兼容 pnpm@7.0.0
  + Optimize vue3 project Compatible with pnpm@7.0.0
  + 修复 vue3 项目 部分情况下错误信息不准确的Bug
  + Fix the bug of inaccurate error information in some cases of vue3 project
  + 修复 vue3 项目 vite.config.js 配置 build.minify 为 terser 不生效的Bug [详情](https://ask.dcloud.net.cn/question/144992)
  + Fix vue3 project vite.config.js configuration build.minify to terser does not take effect Bug [Details](https://ask.dcloud.net.cn/question/144992)
  + App、H5平台 优化 image 组件减少网络请求
  + App, H5 platform optimize image components to reduce network requests
  + App、H5平台 修复 canvas transform 渲染时没有使用高清处理的Bug [详情](https://ask.dcloud.net.cn/question/144676)
  + App, H5 platform Fixed the bug that canvas transform did not use high-definition processing when rendering [Details](https://ask.dcloud.net.cn/question/144676)
  + App平台、微信小程序平台 新增 vue3 ad-rewarded-video 激励视频广告组件，更加易用 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + Added vue3 ad-rewarded-video rewarded Rewarded Ads component on App platform and WeChat MiniApp platform, making it easier to use [Details](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + App平台、微信小程序平台 新增 vue3 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + Added Interstitial Ads ad-interstitial interstitial component on App platform and WeChat MiniApp platform [Details](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App平台 新增 vue3 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App platform added vue3 ad-fullscreen-video full-screen video ad component [Details](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App平台 修复 vue3 项目使用录音时报错的Bug [详情](https://ask.dcloud.net.cn/question/144821)
  + App platform fixed the bug that the vue3 project reported an error when using recording [Details](https://ask.dcloud.net.cn/question/144821)
  + App平台 修复 vue3 项目 纯 nvue 项目编译报错的Bug
  + App platform fixes the bug that the vue3 project and the pure nvue project compile an error
  + App平台 修复 nvue 页面列表删除渲染卡顿的Bug [详情](https://ask.dcloud.net.cn/question/144110)
  + App platform fix nvue page list deletion bug [details](https://ask.dcloud.net.cn/question/144110)
  + App平台 修复 nvue 页面 transition 包含多个属性时编译报错的Bug [详情](https://ask.dcloud.net.cn/question/89110)
  + App platform Fix the bug that the nvue page transition contains multiple attributes and compile errors [Details](https://ask.dcloud.net.cn/question/89110)
  + App-Android平台 补齐 tabBar 和 navigationBar 支持高斯模糊效果 [详情](https://uniapp.dcloud.io/tutorial/app-blureffect)
  + App-Android platform complements tabBar and navigationBar to support Gaussian blur effect [Details](https://uniapp.dcloud.io/tutorial/app-blureffect)
  + H5平台 修复 rich-text 组件部分标签没有加上 scopeId 导致样式应用不上的Bug [详情](https://ask.dcloud.net.cn/question/144042)
  + H5 platform Fix the bug that some tags of the rich-text component do not add scopeId, resulting in the bug that the style cannot be applied [Details](https://ask.dcloud.net.cn/question/144042)
  + H5平台 修复 vue3 项目使用 picker 组件报错的Bug [详情](https://ask.dcloud.net.cn/question/144073)
  + H5 platform Fix the bug that the vue3 project uses the picker component to report an error [Details](https://ask.dcloud.net.cn/question/144073)
  + H5平台 修复 vue3 项目 当页面同时存在 vue、nvue 时，样式不正确的Bug [详情](https://ask.dcloud.net.cn/question/144687)
  + H5 platform fix vue3 project When the page has vue and nvue at the same time, the bug of incorrect style [details](https://ask.dcloud.net.cn/question/144687)
  + H5平台 修复 vue3 项目 App.vue 使用 setup 不生效的Bug [详情](https://ask.dcloud.net.cn/question/144672)
  + H5 platform Fix the bug that the vue3 project App.vue does not work when using setup [Details](https://ask.dcloud.net.cn/question/144672)
  + H5平台 修复 vue3 项目 使用 Vue.js devtools 查看页面状态不显示的Bug [详情](https://github.com/dcloudio/uni-app/issues/3492)
  + H5 platform Fix vue3 project Use Vue.js devtools to view the bug that the page status does not display [Details](https://github.com/dcloudio/uni-app/issues/3492)
  + 小程序平台 修复 vue3 项目 部分情况下代码分割错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3491)
  + The MiniApp platform fixes the bug of code segmentation errors in some cases of vue3 projects [details](https://github.com/dcloudio/uni-app/issues/3491)
  + 微信小程序平台 调整 ad 广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad.html#weixin)
  + WeChat MiniApp platform to adjust ad advertising components [details](https://uniapp.dcloud.net.cn/component/ad.html#weixin)
* 【uniCloud】
  + 新增 本地云函数调用云端redis，方便开发调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/redis.html#lcoal-function)
  + Added local cloud function calling cloud redis, convenient for development and debugging [Details](https://uniapp.dcloud.net.cn/uniCloud/redis.html#lcoal-function)
  + 新增 uni-cloud-jql 扩展库 databaseForJQL 方法支持传递 clientInfo，以便于在云对象中使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud.html#use-in-object)
  + Added uni-cloud-jql extension library databaseForJQL method to support passing clientInfo for use in cloud objects [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud.html#use-in -object)
  + 修复 本地运行插件 HBuilderX 3.4.8 引发的运行云函数时如未绑定服务空间会导致运行进程卡住的Bug
  + Fix the bug that the running process will be stuck if the service space is not bound when running the cloud function caused by running the plug-in HBuilderX 3.4.8 locally
  + 修复 云对象 _before 内抛出错误后 _after 不执行的Bug [详情](https://ask.dcloud.net.cn/question/145046)
  + Fix the bug that _after does not execute after an error is thrown in the cloud object _before [Details](https://ask.dcloud.net.cn/question/145046)
  + uni-id 调整 绑定、解绑邮箱手机号接口，只要传递 code 参数就进行验证码校验即使传递的值为undefined
  + uni-id adjustment Bind and unbind the email phone number interface, as long as the code parameter is passed, the verification code will be verified even if the passed value is undefined
  + uni-id 调整 用户表 `register_env` 内增加 `os_name` 字段用于区分注册时的客户端系统类型
  + uni-id adjustment Add `os_name` field in the user table `register_env` to distinguish the client system type when registering
  + uni-id 修复 addUser 接口添加的用户无法使用密码登录的Bug [详情](https://ask.dcloud.net.cn/question/144670)
  + uni-id fixes the bug that users added through the addUser interface cannot log in with a password [Details](https://ask.dcloud.net.cn/question/144670)
  + uni-id 修复 config 文件语法错误时报`this.t is not a function`的Bug
  + uni-id fixed the bug that `this.t is not a function` was reported when the syntax error in the config file was incorrect
  + uni-captcha 新增 集成：创建、刷新、显示验证码的云端一体组件 [详情](https://ext.dcloud.net.cn/plugin?id=4048)
  + uni-captcha new integration: create, refresh, display captcha cloud integrated component [Details](https://ext.dcloud.net.cn/plugin?id=4048)
  + uni-starter 新增 短信验证码登陆、绑定手机号码，防刷逻辑；当短信验证码输入错误超过2次，弹出图形验证码进行人机校验。[详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + uni-starter has added SMS verification code login, binding mobile phone number, and anti-swipe logic; when the SMS verification code is entered incorrectly more than 2 times, a graphic verification code will pop up for man-machine verification. [Details](https://ext.dcloud.net.cn/plugin?id=5057)
  + uni-admin 新增 uni统计数据报表功能 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
  + uni-admin added uni statistics report function [Details](https://ext.dcloud.net.cn/plugin?id=3268)
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 多进程模式下微信分享过程中手动返回页面显示异常的Bug
  + Android platform repaired the bug that the page displayed abnormally when manually returning to the page during WeChat sharing in multi-process mode
  + Android平台 修复 3.4.7版本引出的 宿主事件回调格式异常的Bug
  + Android platform fixes the bug that the host event callback format is abnormal caused by version 3.4.7

#### 3.4.9.20220508-alpha
* 【uni-app】
  + uni统计 修复 3.4.8 版本引发的上报数据不正常的Bug [详情](https://ask.dcloud.net.cn/question/144408)
  + uni statistics Fix the bug that reported abnormal data caused by version 3.4.8 [Details](https://ask.dcloud.net.cn/question/144408)
  + App-iOS平台 修复 nvue textarea 组件默认换行不生效的Bug [详情](https://ask.dcloud.net.cn/question/143784)
  + App-iOS platform fixes the bug that the default line break of the nvue textarea component does not take effect [Details](https://ask.dcloud.net.cn/question/143784)
  + App-iOS平台 修复 nvue map 组件开启标记点聚合时，调用 removeMarkers 移除所有 marker 引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/143991)
  + App-iOS platform Fix the bug that when the nvue map component enables marker aggregation, call removeMarkers to remove all markers and cause the app to crash [Details](https://ask.dcloud.net.cn/question/143991)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 修复 音频播放 AudioPlayer 暂停后设置播放倍速大于 0 会自动触发播放的Bug [详情](https://ask.dcloud.net.cn/question/143757)
  + Fix the bug that after the AudioPlayer is paused, setting the playback speed greater than 0 will automatically trigger the playback [Details](https://ask.dcloud.net.cn/question/143757)
  + Android平台 修复 uni-AD 开屏广告开通腾讯优量汇可能引起应用启动白屏的Bug
  + Android platform fixes the bug that the uni-AD App Open Ads may cause a white screen when the application is launched after opening Tencent Youlianghui
  + iOS平台 修复 登录鉴权、分享的 authorize 方法传入认证参数 options 不生效的Bug
  + iOS platform fixed the bug that the authentication parameter options passed in to the authorize method of login authentication and sharing did not take effect
* 【uniCloud】
  + 【重要】调整 vue2版本客户端App平台对应的`context.PLATFORM`值由 `app-plus` 改为 `app`。此调整对 uni-id 有影响，详情请参考文档：[uni-id preferedAppPlatform](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#prefered-app-platform)
  + [Important] Adjust the `context.PLATFORM` value corresponding to the vue2 version client App platform from `app-plus` to `app`. This adjustment has an impact on uni-id, please refer to the document for details: [uni-id preferredAppPlatform](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#prefered-app-platform)
  + 修复 云对象 自动展示交互界面时未能显示 loading 标题的Bug [详情](https://ask.dcloud.net.cn/question/144526)
  + Fixed the bug that the loading title could not be displayed when the cloud object automatically displayed the interactive interface [Details](https://ask.dcloud.net.cn/question/144526)
  + 调整 客户端将上报所有`getSystemInfoSync`返回的内容供云端使用，参考文档：[云函数内获取客户端信息](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#client-info)，[云对象内获取客户端信息](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + Adjust the client to report all the content returned by `getSystemInfoSync` for cloud use, refer to the document: [Get client information in cloud functions](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html# client-info), [Get client information in the cloud object](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + uni-id 新增 getWeixinUserInfo 用于获取app平台微信登录用户的用户信息 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#get-weixin-user-info)
  + uni-id added getWeixinUserInfo to get the user information of app platform WeChat login users [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#get-weixin-user-info)
  + uni-id 新增 addUser 用于手动添加用户 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#add-user)
  + uni-id added addUser to manually add users [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#add-user)
  + uni-id 新增 resetPwdBySms 用于使用短信验证码重置密码 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#reset-pwd-by-sms)
  + uni-id added resetPwdBySms to reset password with SMS verification code [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#reset-pwd-by-sms)
  + uni-id 调整 用户注册时记录用户注册环境到 register_env 字段 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#user-table)
  + uni-id adjustment Record the user registration environment to the register_env field when the user registers [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#user-table)
  + uni-id 调整 用户注册时将注册 ip 移至 register_env 内
  + uni-id adjustment Move the registration ip to register_env when the user registers

#### 3.4.8.20220428-alpha
* 【uni-app】
  + 新增 vue3 项目内置支持 pinia [详情](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
  + Added built-in pinia support for vue3 projects [Details](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
  + 修复 3.4.6 版本引发的 vue3 项目使用 pinia 报错的Bug [详情](https://ask.dcloud.net.cn/question/143578)
  + Fix the bug that the vue3 project using pinia caused by version 3.4.6 [details](https://ask.dcloud.net.cn/question/143578)
  + 修复 3.4.6 版本引发的 vue3 项目部分情况编译变慢的Bug [详情](https://github.com/dcloudio/uni-app/issues/3458)
  + Fixed the bug that the compilation of the vue3 project was slow in some cases caused by the 3.4.6 version [Details](https://github.com/dcloudio/uni-app/issues/3458)
  + App平台、H5平台 修复 canvas 组件画图裁剪异常的Bug [详情](https://ask.dcloud.net.cn/question/142494)
  + App platform, H5 platform Fix the bug that the canvas component draws and crops abnormally [Details](https://ask.dcloud.net.cn/question/142494)
  + App平台、微信小程序平台 新增 vue2 ad-rewarded-video 激励视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + Added vue2 ad-rewarded-video rewarded Rewarded Ads component [details](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html) on App platform and WeChat MiniApp platform
  + App平台、微信小程序平台 新增 vue2 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + Added vue2 ad-fullscreen-video full-screen video ad component [details](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html) on App platform and WeChat MiniApp platform
  + App平台、微信小程序平台 新增 vue2 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + Added Interstitial Ads ad-interstitial interstitial component on App platform and WeChat MiniApp platform [Details](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App平台 修复 vue3 nvue 页面引用的静态资源编译后可能不存在的Bug
  + App platform Fixed the bug that the static resource referenced by the vue3 nvue page may not exist after compilation
  + App平台 修复 vue3 nvue 页面事件无法冒泡的Bug
  + App platform fixed the bug that vue3 nvue page events could not bubble
  + App平台 修复 vue3 nvue input，textarea 组件的 v-model 不生效的Bug [详情](https://ask.dcloud.net.cn/question/143547)
  + App platform fix the vue3 nvue input, the v-model of the textarea component does not take effect Bug [details](https://ask.dcloud.net.cn/question/143547)
  + App平台 修复 navigator 组件 animation-type、animation-duration 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/143377)
  + App platform Fix the bug that the animation-type and animation-duration properties of the navigator component are invalid [Details](https://ask.dcloud.net.cn/question/143377)
  + App平台 修复 vue3 nvue movable 组件使用异常的Bug [详情](https://ask.dcloud.net.cn/question/143742)
  + App platform fix the bug that the vue3 nvue movable component is used abnormally [details](https://ask.dcloud.net.cn/question/143742)
  + App平台 修复 3.4.2 版本引发的 ArrayBuffer 类型判断错误的Bug [详情](https://ask.dcloud.net.cn/question/143534)
  + App platform Fixed the bug of wrong judgment of ArrayBuffer type caused by version 3.4.2 [Details](https://ask.dcloud.net.cn/question/143534)
  + App-Android平台 修复 3.4.6版本 引出的 nvue 页面在部分设备可能出现渲染闪烁的Bug [详情](https://ask.dcloud.net.cn/question/143657)
  + App-Android platform fixed the nvue page introduced by version 3.4.6, which may cause flickering bugs on some devices [Details](https://ask.dcloud.net.cn/question/143657)
  + App-Android平台 修复 3.4.6版本 引出的 nvue 页面 boxShadow 在部分情况下可能渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/143727)
  + App-Android platform fixed the bug that the nvue page boxShadow introduced by version 3.4.6 may render abnormally in some cases [Details](https://ask.dcloud.net.cn/question/143727)
  + App-Android平台 修复 bindingx 执行 getComputedStyle 方法返回异常的Bug [详情](https://ask.dcloud.net.cn/question/143697)
  + App-Android platform fixes the bug that bindingx executes the getComputedStyle method to return an exception [Details](https://ask.dcloud.net.cn/question/143697)
  + App-iOS平台 修复 nvue swiper 组件与页面返回手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/137505)
  + App-iOS platform fixes the bug that the nvue swiper component conflicts with the page return gesture [Details](https://ask.dcloud.net.cn/question/137505)
  + H5平台 修复 vue3 项目 html 原生标签（如div）renderjs/wxs 事件监听无法获取 ownerInstance 的Bug [详情](https://github.com/dcloudio/uni-app/issues/3436)
  + H5 platform Fix the bug that the renderjs/wxs event listener of the vue3 project html native tags (such as div) cannot get the ownerInstance [Details](https://github.com/dcloudio/uni-app/issues/3436)
  + H5平台 修复 vue3 项目运行到浏览器，本地服务端口校验可能报错的Bug [详情](https://ask.dcloud.net.cn/question/143504)
  + H5 platform Fix the bug that the local service port verification may report an error when the vue3 project runs to the browser [Details](https://ask.dcloud.net.cn/question/143504)
  + H5平台 修复 vue3 项目 map 组件 polyline、circles 颜色设置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3433)
  + H5 platform Fix the bug that the polyline and circles color settings of the vue3 project map component do not take effect [Details](https://github.com/dcloudio/uni-app/issues/3433)
  + 小程序平台 修复 vue3 项目当 style 样式值为数字，部分情况下丢失的Bug [详情](https://github.com/dcloudio/uni-app/issues/3456)
  + MiniApp platform fixes the bug that the style value of the vue3 project is missing in some cases when the style value is a number [details](https://github.com/dcloudio/uni-app/issues/3456)
  + 小程序平台 修复 v-if 内连用多个逻辑表达式编译出错的Bug [详情](https://ask.dcloud.net.cn/question/129122)
  + The MiniApp platform fixes the bug that the v-if inline uses multiple logical expressions to compile errors [details](https://ask.dcloud.net.cn/question/129122)
  + 微信小程序平台 修复 vue3 项目当 input 事件函数返回 Promise 时，输入框显示错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3462)
  + Wechat MiniApp platform fix vue3 project when the input event function returns Promise, the input box displays the wrong bug [details](https://github.com/dcloudio/uni-app/issues/3462)
  + 微信小程序平台 修复 uni.getSystemInfoSync() 获取的 safeAreaInsets.bottom 为负数的Bug [详情](https://ask.dcloud.net.cn/question/133479)
  + Wechat MiniApp platform fixes the bug that safeAreaInsets.bottom obtained by uni.getSystemInfoSync() is a negative number [details](https://ask.dcloud.net.cn/question/133479)
  + uni-ui 新增 uni-data-select 组件 [详情](https://ext.dcloud.net.cn/plugin?id=7993)
  + uni-ui added uni-data-select component [Details](https://ext.dcloud.net.cn/plugin?id=7993)
  + uni-ui 新增 uni-breadcrumb 组件 [详情](https://ext.dcloud.net.cn/plugin?id=7992)
  + uni-ui added uni-breadcrumb component [Details](https://ext.dcloud.net.cn/plugin?id=7992)
  + uni-ui 新增 uni-tooltip 组件 [详情](https://ext.dcloud.net.cn/plugin?id=8020)
  + uni-ui added uni-tooltip component [Details](https://ext.dcloud.net.cn/plugin?id=8020)
* 【uniCloud】
  + 修复 云对象 自动展示错误提示界面时 toast 图标错误的Bug [详情](https://ask.dcloud.net.cn/question/142246)
  + Fix the bug that the toast icon is wrong when the cloud object automatically displays the error prompt interface [Details](https://ask.dcloud.net.cn/question/142246)
  + 新增 uniCloud 支持云对象本地运行和调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#run-local)
  + Added uniCloud to support local running and debugging of cloud objects [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#run-local)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.462.1332 版，iOS为 4.13.63 版；今日头条穿山甲SDK iOS为 4.4.0.5 版；快手广告SDK Android为 3.3.23 版，iOS为 3.3.23 版；快手内容联盟SDK iOS为 3.3.28 版；百度百青藤广告SDK iOS为 4.861 版；Sigmob广告联盟SDK iOS为 4.1.0 版
  + Updated uni-AD Tencent Youlianghui SDK to version 4.462.1332 for Android and 4.13.63 for iOS; Toutiao Pangolin SDK for iOS to version 4.4.0.5; Kuaishou Advertising SDK for Android to version 3.3.23 and iOS to version 3.3.23 version; Kuaishou Content Alliance SDK iOS is version 3.3.28; Baidu Baiqingteng Advertising SDK iOS is version 4.861; Sigmob Advertising Alliance SDK iOS is version 4.1.0
  + Android平台 更新 高德地图SDK为 9.2.0 版， 解决在部分设备使用地图引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/143573)
  + Android platform update Gaode map SDK to version 9.2.0, which solves the bug of application crash caused by using maps on some devices [Details](https://ask.dcloud.net.cn/question/143573)
  + Android平台 修复 uni-AD 离线打包开通开屏广告可能引起应用崩溃的Bug
  + Android platform fixes the bug that uni- App Open Ads offline package activation may cause the application to crash
  + iOS平台 修复 3.4.6版本 引出的 获取底部安全区域高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/143633)
  + iOS platform fixes the bug that the height of the bottom safe area is incorrect due to version 3.4.6 [Details](https://ask.dcloud.net.cn/question/143633)
  + iOS平台 修复 3.4.4版本 引出的 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
  + iOS platform fixed the bug that the warning `ITMS-90078: Missing Push Notification Entitlement` was reported when the Push module was not used to upload to the AppStore caused by version 3.4.4
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + iOS平台 修复 调用 closeWithCompletion 方法关闭小程序后紧接着在打开小程序可能引起崩溃的Bug
  + iOS platform fixes the bug that may cause a crash when calling the closeWithCompletion method to close the MiniApp immediately after opening the MiniApp

#### 3.4.6.20220416-alpha
* 【uni-app】
  + 优化 vue3 项目 支持导出 onSaveExitState 生命周期 [详情](https://github.com/dcloudio/uni-app/issues/3427)
  + Optimize vue3 project and support exporting onSaveExitState life cycle [details](https://github.com/dcloudio/uni-app/issues/3427)
  + 修复 vue3 项目 错误信息行号可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/143075)
  + Fix the bug that the error message line number of the vue3 project may be incorrect [Details](https://ask.dcloud.net.cn/question/143075)
  + App平台 修复 vue3 项目 nvue map 组件部分属性无效的Bug [详情](https://ask.dcloud.net.cn/question/142159)
  + App platform Fix the bug that some properties of the vue3 project nvue map component are invalid [Details](https://ask.dcloud.net.cn/question/142159)
  + App平台 修复 InnerAudioContext 某些情况下 paused 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
  + App platform Fix the bug that the paused attribute value of InnerAudioContext is incorrect in some cases [Details](https://ask.dcloud.net.cn/question/141832)
  + App平台 修复 vue3 项目使用 vue-i18n 运行报错的Bug [详情](https://ask.dcloud.net.cn/question/142911)
  + App platform fixes the bug that the vue3 project uses vue-i18n to run the bug [details](https://ask.dcloud.net.cn/question/142911)
  + App平台 修复 vue3 项目 renderjs 在低版本手机可能运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3366)
  + App platform Fix the bug that the renderjs of the vue3 project may run on low-version mobile phones [details](https://github.com/dcloudio/uni-app/issues/3366)
  + App-Android平台 修复 uni.saveImageToPhotosAlbum 在部分手机可能无法正常保存到系统相册的Bug [详情](https://ask.dcloud.net.cn/question/143125)
  + App-Android platform fixes the bug that uni.saveImageToPhotosAlbum may not be saved to the system album on some phones [Details](https://ask.dcloud.net.cn/question/143125)
  + App-Android平台 修复 uni.getScreenBrightness 获取屏幕亮度始终返回 -1 的Bug [详情](https://ask.dcloud.net.cn/question/142726)
  + App-Android platform Fix the bug that uni.getScreenBrightness always returns -1 when getting the screen brightness [Details](https://ask.dcloud.net.cn/question/142726)
  + App-Android平台 修复 nvue 页面调用 dom.scrollToElement 滚动到 list 组件指定元素位置可能无效的Bug [详情](https://ask.dcloud.net.cn/question/143035)
  + App-Android platform fix nvue page calling dom.scrollToElement to scroll to the bug that the specified element position of the list component may be invalid [Details](https://ask.dcloud.net.cn/question/143035)
  + App-iOS平台 修复 video 不支持 enable-play-gesture 属性的Bug [详情](https://ask.dcloud.net.cn/question/141862)
  + App-iOS platform fixes the bug that the video does not support the enable-play-gesture attribute [Details](https://ask.dcloud.net.cn/question/141862)
  + App-iOS平台 修复 nvue input 组件 confirm-hold 属性默认值不正确的Bug
  + App-iOS platform fixes the bug that the default value of the confirm-hold attribute of the nvue input component is incorrect
  + App-iOS平台 修复 nvue ad-content-page 显示位置可能偏移的Bug
  + App-iOS platform fix the bug that nvue ad-content-page display position may shift
  + H5平台 修复 input 组件启用 password 后在小米手机钉钉内置浏览器无法弹出键盘的Bug [详情](https://ask.dcloud.net.cn/question/142834)
  + H5 platform fixes the bug that the keyboard cannot pop up in the built-in browser of the Xiaomi phone DingTalk after the input component is enabled with password [Details](https://ask.dcloud.net.cn/question/142834)
  + 小程序平台 修复 vue3 项目 pages.json 配置国际化信息显示错误的Bug
  + The MiniApp platform fixes the bug that the internationalization information of the vue3 project pages.json configuration is displayed incorrectly
  + 小程序平台 修复 vue3 项目在 Windows 系统上生成的依赖文件可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3425)
  + The MiniApp platform fixes the bug that the dependent files generated by the vue3 project on the Windows system may be confused [details](https://github.com/dcloudio/uni-app/issues/3425)
  + QQ小程序平台 修复 vue3 项目部分情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3419)
  + The QQ MiniApp platform repaired the bug that the error was reported in some cases of the vue3 project [details](https://github.com/dcloudio/uni-app/issues/3419)
  + 微信小程序平台 修复 vue3 项目发行为混合分包运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3416)
  + The WeChat MiniApp platform fixes the bug that the vue3 project releases as a mixed subpackage operation [details](https://github.com/dcloudio/uni-app/issues/3416)
* 【uniCloud】
  + 【重要】阿里云 调整 单次数据库查询最大超时时间由1秒调整为3秒，需要重新上传云函数触发更新
  + [Important] Alibaba Cloud adjusted the maximum timeout period of a single database query from 1 second to 3 seconds, and the cloud function needs to be re-uploaded to trigger the update
  + 【重要】云对象 调整 默认自动显示请求相关ui（等待loading，错误弹框） [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + [Important] Cloud object adjustments automatically display request-related ui by default (waiting for loading, error popup) [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + JQL 修复 部分情况下过度限制了权限的Bug [详情](https://ask.dcloud.net.cn/question/142457)
  + JQL fixes a bug that restricts permissions excessively in some cases [Details](https://ask.dcloud.net.cn/question/142457)
  + 本地调试插件 修复 HBuilderX 2.4.5 版本引出的部分场景下访问本地云函数误报公共模块冲突的Bug
  + Local debugging plug-in Fix the bug that the public module conflict is falsely reported when accessing local cloud functions in some scenarios caused by HBuilderX version 2.4.5
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + iOS平台 修复 3.4.5版本 引出的 关闭页面动画异常的Bug [详情](https://ask.dcloud.net.cn/question/142797)
  + iOS platform fixed the bug of abnormal closing page animation caused by version 3.4.5 [Details](https://ask.dcloud.net.cn/question/142797)
  + iOS平台 修复 音频播放 AudioPlayer 获取暂停状态不准确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
  + iOS platform fixed the bug that AudioPlayer got inaccurate pause status [details](https://ask.dcloud.net.cn/question/141832)
  + iOS平台 修复 音频播放 AudioPlayer 暂停后再恢复播放倍速会重置为1的Bug [详情](https://ask.dcloud.net.cn/question/142848)
  + iOS platform fixed the bug that the AudioPlayer speed will be reset to 1 when the AudioPlayer is paused and resumed [Details](https://ask.dcloud.net.cn/question/142848)
  + iOS平台 修复 视频播放控件 video 在刘海屏设备全屏播放时进度条可能无法拖动的Bug [详情](https://ask.dcloud.net.cn/question/141862)
  + iOS platform fixed the bug that the progress bar of the video playback control video may not be able to be dragged when the video is played in full screen on Notch devices [Details](https://ask.dcloud.net.cn/question/141862)
  + iOS平台 修复 视频播放控件 video 设置 show-fullscreen-btn 属性为 false 时可能显示不正确的Bug
  + iOS platform fixed the bug that the video player control video may display incorrectly when the show-fullscreen-btn property is set to false
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 新增 支持自定义实现获取匿名设备标识符OAID
  + Added support for custom implementation of Android platform to obtain anonymous device identifier OAID

#### 3.4.5.20220408-alpha
* 【uni-app】
  + 优化 vue3 项目 支持 vitest 测试框架 [详情](https://github.com/dcloudio/uni-app/issues/3398)
  + Optimize vue3 project and support vitest testing framework [details](https://github.com/dcloudio/uni-app/issues/3398)
  + 优化 vue3 项目 全平台支持使用 props 接收页面参数 [详情](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#url-search-params)
  + Optimize vue3 project All platforms support using props to receive page parameters [Details](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#url-search-params)
  + 修复 vue3 项目 App.vue 中的 provide 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3404)
  + Fix the bug that the provide in the vue3 project App.vue does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3404)
  + App平台 新增 InnerAudioContext、BackgroundAudioManager 支持倍速播放
  + App platform added InnerAudioContext, BackgroundAudioManager to support double-speed playback
  + App平台 修复 vue3 项目 App.vue 中的 css 可能编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3403)
  + App platform Fix the bug that css in App.vue of vue3 project may compile and report errors [details](https://github.com/dcloudio/uni-app/issues/3403)
  + App平台 修复 uni.getEnv 在 nvue webview 中返回值不准确的Bug [详情](https://uniapp.dcloud.net.cn/component/web-view.html#getenv)
  + App platform Fix the bug that uni.getEnv returns inaccurate values in nvue webview [Details](https://uniapp.dcloud.net.cn/component/web-view.html#getenv)
  + App-Android平台 修复 3.4.3版本 引出的 nvue 组件设置 box-shadow 后 border 可能显示异常的Bug
  + App-Android platform fixes the bug that the border may display abnormally after setting box-shadow on the nvue component introduced in version 3.4.3
  + App-Android平台 修复 3.4.3版本 引出的 tabBar 设置 iconPath 且未设置 selectedIconPath 可能引起图标无法正常显示的Bug
  + App-Android platform fixed the bug that iconPath and selectedIconPath were not set in the tabBar introduced in version 3.4.3, which may cause the icon not to be displayed normally
  + App-Android平台 修复 nvue 页面 flex 布局在部分设备可能出现换行计算不正确的Bug
  + App-Android platform fix nvue page flex layout on some devices may have incorrect line break calculation bug
  + App-iOS平台 修复 在页面生命周期 onLoad 方法中调用 lockOrientation 锁定屏幕方向可能引起布局异常的Bug
  + App-iOS platform fixed the bug that calling lockOrientation in the onLoad method of the page life cycle to lock the screen orientation may cause layout exceptions
  + App-iOS平台 修复 3.4.4版本 引出的 tabBar 图标显示错位的Bug [详情](https://ask.dcloud.net.cn/question/142685)
  + App-iOS platform fixes the bug that the tabBar icon displayed in the 3.4.4 version is misplaced [Details](https://ask.dcloud.net.cn/question/142685)
  + H5平台 修复 vue3 项目同时使用 style 节点和 style scoped 节点时，样式可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3410)
  + H5 platform Fix the bug that the style may be confused when the vue3 project uses both style nodes and style scoped nodes [details](https://github.com/dcloudio/uni-app/issues/3410)
  + 小程序平台 优化 vue3 项目支持动态导入静态资源 [详情](https://github.com/dcloudio/uni-app/issues/3376)
  + MiniApp platform optimization vue3 project supports dynamic import of static resources [details](https://github.com/dcloudio/uni-app/issues/3376)
  + 小程序平台 修复 vue3 项目 slot 在部分复杂情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3346)
  + The MiniApp platform fixes the bug that the vue3 project slot runs in some complex situations and reports errors [details](https://github.com/dcloudio/uni-app/issues/3346)
  + 小程序平台 修复 vue2 项目 v-if 中同时包含成员表达式和逻辑表达式编译出错的Bug [详情](https://ask.dcloud.net.cn/question/142293)
  + The MiniApp platform fixes the bug that the v-if of the vue2 project contains both member expressions and logical expressions. [Details](https://ask.dcloud.net.cn/question/142293)
  + 微信小程序平台 优化 uni.showActionSheet 支持 title 参数
  + Wechat MiniApp platform optimization uni.showActionSheet supports title parameter
  + 支付宝小程序平台 修复 vue3 项目部分情况下渲染错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3408)
  + Alipay MiniApp platform fixes the bug of rendering errors in some cases of vue3 projects [details](https://github.com/dcloudio/uni-app/issues/3408)
* 【uniCloud】
  + 修复 3.4.4版本 引出的 clientDB 本地运行报错的Bug
  + Fix the bug that the clientDB caused by the 3.4.4 version reports an error when running locally
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + Android平台 修复 uni-AD 腾讯优量汇插屏广告在 onLoad 回调中执行 show 可能引起广告无法正常显示的Bug
  + Android platform fixed the bug that the uni-AD Interstitial Ads performed show in the onLoad callback, which may cause the advertisement to not display normally
  + iOS平台 修复 安心打包使用 swift 开发的uni原生插件时上传 AppStore 报`ITMS-90426: Invalid Swift Support`错误的Bug [详情](https://ask.dcloud.net.cn/question/142611)
  + iOS platform fixes the bug of `ITMS-90426: Invalid Swift Support` error reported when uploading AppStore when using the uni native plug-in developed by swift to package with peace of mind. [Details](https://ask.dcloud.net.cn/question/142611)
  + iOS平台 修复 在 iOS15.4 及以上设备系统时间设置为12小时制 pickDate 返回值异常的Bug [详情](https://ask.dcloud.net.cn/question/141906)
  + iOS platform fixes the bug that the pickDate return value is abnormal when the system time of iOS15.4 and above devices is set to 12 hours [Details](https://ask.dcloud.net.cn/question/141906)

#### 3.4.4.20220403-alpha
* 【uni-app】
  + App平台、H5平台 新增 input 组件配置 ignoreCompositionEvent 属性 [详情](https://uniapp.dcloud.io/component/input?id=input)
  + App platform and H5 platform add input component configuration ignoreCompositionEvent property [details](https://uniapp.dcloud.io/component/input?id=input)
  + App平台 新增 tabbar 支持配置 iconfont [详情](https://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem)
  + App platform added tabbar support configuration iconfont [Details](https://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem)
  + App平台 修复 vue2 nvue 页面文本首尾回车符占用高度的Bug [详情](https://ask.dcloud.net.cn/question/95429)
  + App platform fixes the bug that the carriage return character at the beginning and end of the vue2 nvue page text takes up the height [Details](https://ask.dcloud.net.cn/question/95429)
  + App平台 修复 vue3 项目 uni.getSavedFileList、uni.getSavedFileInfo、uni.removeSavedFile、uni.getFileInfo 无效的Bug  [详情](https://ask.dcloud.net.cn/question/142428)
  + App platform Fix the invalid bug of uni.getSavedFileList, uni.getSavedFileInfo, uni.removeSavedFile, uni.getFileInfo of vue3 project [Details](https://ask.dcloud.net.cn/question/142428)
  + App-Android平台 修复 nvue list 组件横向滚动不会触发 loadmore 事件的Bug
  + App-Android platform fixes the bug that the horizontal scrolling of the nvue list component will not trigger the loadmore event
  + App-Android平台 修复 连续调用 uni.chooseImage 在部分手机可能引起应用闪退的Bug
  + App-Android platform fixed the bug that continuous calls to uni.chooseImage may cause the app to crash on some phones
  + App-Android平台 修复 3.4.3 引出的 tabBar 的列表项未设置 iconPath 会导致文字显示不全的Bug [详情](https://ask.dcloud.net.cn/question/142250)
  + App-Android platform Fixed the bug that the list item of the tabBar introduced in 3.4.3 did not set iconPath, which would cause the text to be displayed incompletely. [Details](https://ask.dcloud.net.cn/question/142250)
  + App-iOS平台 修复 video 组件 vslide-gesture-in-fullscreen 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/138299)
  + App-iOS platform fix the bug that video component vslide-gesture-in-fullscreen property is invalid [details](https://ask.dcloud.net.cn/question/138299)
  + App-iOS平台 修复 nvue image 组件不支持 gif 图片中设置循环次数参数的Bug [详情](https://ask.dcloud.net.cn/question/140176)
  + App-iOS platform fixes the bug that the nvue image component does not support setting the number of cycles parameter in the gif image [Details](https://ask.dcloud.net.cn/question/140176)
  + 小程序平台 修复 vue3 项目 v-model.number 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3381)
  + The MiniApp platform fixes the bug that the v-model.number of the vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3381)
  + 小程序平台 修复 vue3 项目页面复杂时可能编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3397)
  + The MiniApp platform fixes the bug that may cause compilation errors when the vue3 project page is complex [details](https://github.com/dcloudio/uni-app/issues/3397)
  + 微信小程序平台 修复 vue3 项目 input 事件 return 一个字符串没有同步到输入框的Bug [详情](https://github.com/dcloudio/uni-app/issues/3371)
  + Wechat MiniApp platform fixes the bug that the input event of the vue3 project returns a string that is not synchronized to the input box [details](https://github.com/dcloudio/uni-app/issues/3371)
  + 百度小程序平台 修复 vue3 项目 onInit 生命周期不触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3384)
  + Baidu MiniApp platform fixes the bug that the onInit life cycle of the vue3 project does not trigger [details](https://github.com/dcloudio/uni-app/issues/3384)
  + 支付宝小程序平台 修复 vue2 项目插件内组件部分事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/142048)
  + The Alipay MiniApp platform fixes the bug that some events in the vue2 project plug-in components do not trigger [Details](https://ask.dcloud.net.cn/question/142048)
  + 支付宝小程序平台 修复 vue3 项目 默认分享功能失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3377)
  + Alipay MiniApp platform fixes the bug that the default sharing function of the vue3 project fails [details](https://github.com/dcloudio/uni-app/issues/3377)
* 【uniCloud】
  + 修复 3.4.0版本引出的云函数子目录内文件引用公共模块失败的Bug
  + Fixed the bug that the file in the cloud function subdirectory failed to refer to the public module introduced by version 3.4.0
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 新增 音频播放 AudioPlayer 支持 playbackRate 设置倍速播放 [文档](https://www.html5plus.org/doc/zh_cn/audio.html#plus.audio.AudioPlayer.playbackRate)
  + Added audio playback AudioPlayer supports playbackRate setting double speed playback [documentation](https://www.html5plus.org/doc/zh_cn/audio.html#plus.audio.AudioPlayer.playbackRate)
  + Android平台 更新 高德定位SDK为 6.0.1 版，高德地图SDK为 9.0.1 版；UniPush 使用的个推SDK为 3.2.9.0 版，小米厂商推送库SDK为 3.1.1 版；Google地图SDK为 18.0.2 版
  + Android platform updated Amap SDK to version 6.0.1, Amap SDK to version 9.0.1; Getui SDK used by UniPush to version 3.2.9.0, Xiaomi manufacturer push library SDK to version 3.1.1; Google Maps SDK for version 18.0.2
  + Android平台 优化 二维码扫码检测到 QR 码时自动放大，提升扫码识别率 [详情](https://ask.dcloud.net.cn/question/142209)
  + Android platform optimized QR code scanning automatically zooms in when a QR code is detected, improving the scanning recognition rate [Details](https://ask.dcloud.net.cn/question/142209)
  + 【重要】Android平台 修复 uni-AD 穿山甲广告联盟在部分设备可能提示`应用的uni-AD业务状态异常`的Bug
  + 【Important】Android platform fixed the bug that the uni-AD Pangolin Ad Alliance may prompt "the application's uni-AD business status is abnormal" on some devices
  + iOS平台 修复 视频播放控件 video 播放视频音量与系统音量不一致的Bug
  + iOS platform repaired the bug that the volume of the video playback control video playback video was inconsistent with the system volume

#### 3.4.3.20220325-alpha
* 【uni-app】
  + 【重要】App平台 nvue 页面支持 vue3（需要项目的 Vue 版本切换为3）[详情](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
  + [Important] App platform nvue page supports vue3 (need to switch the Vue version of the project to 3) [details](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
  + App平台、H5平台 新增 map 组件支持 polygons [详情](https://uniapp.dcloud.io/component/map)
  + App platform, H5 platform Add map component to support polygons [Details](https://uniapp.dcloud.io/component/map)
  + App平台、小程序平台 修复 vue3 项目配置 base 后资源路径可能错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3362)
  + App platform, MiniApp platform fixes the bug that the resource path may be wrong after the vue3 project configures the base [details](https://github.com/dcloudio/uni-app/issues/3362)
  + App平台 新增 打开微信客服功能 [详情](https://uniapp.dcloud.io/api/plugins/share.html)
  + App platform added the function of opening WeChat customer service [Details](https://uniapp.dcloud.io/api/plugins/share.html)
  + App平台 修复 vue3 项目内联样式引用静态资源可能错误的Bug [详情](https://ask.dcloud.net.cn/question/141278)
  + App platform Fix the bug that the inline style of the vue3 project may be wrong when referencing static resources [Details](https://ask.dcloud.net.cn/question/141278)
  + App平台 新增 nvue ad-content-page 组件支持内容播放状态事件start、pause、resume、complete [规范](https://uniapp.dcloud.io/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + Added nvue ad-content-page component on App platform to support content playback state events start, pause, resume, complete [Specification](https://uniapp.dcloud.io/component/ad-content-page.html#%E7 %9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB %B6)
  + App-Android平台 优化 nvue 组件 box-shadow 渲染逻辑，解决在部分设备可能出现排版异常及闪烁的问题 [详情](https://uniapp.dcloud.io/tutorial/nvue-css.html#android-box-shadow)
  + The App-Android platform optimizes the rendering logic of the nvue component box-shadow, and solves the problem of typesetting exceptions and flickering that may occur on some devices [Details](https://uniapp.dcloud.io/tutorial/nvue-css.html#android- box-shadow)
  + App-Android平台 修复 nvue 组件设置 overflow 为 hidden 在部分设备无效的Bug [详情](https://ask.dcloud.net.cn/question/114175)
  + App-Android platform fixes the bug that the nvue component setting overflow to hidden is invalid on some devices [details](https://ask.dcloud.net.cn/question/114175)
  + App-Android平台 修复 nvue swiper 组件设置 circular 为 true 时首次启动可能先显示最后一项的Bug [详情](https://ask.dcloud.net.cn/question/140931)
  + App-Android platform Fix nvue swiper component setting circular to true Bug that the last item may be displayed first [Details](https://ask.dcloud.net.cn/question/140931)
  + App-Android平台 修复 nvue swiper 组件在特定环境下可能出现页面空白的Bug [详情](https://ask.dcloud.net.cn/question/140942)
  + App-Android platform fixes the bug that the nvue swiper component may appear blank under certain circumstances [Details](https://ask.dcloud.net.cn/question/140942)
  + App-iOS平台 修复 nvue swiper 组件内嵌 list-waterfall 时，横向滑动的同时列表还可以竖向滚动的Bug [详情](https://ask.dcloud.net.cn/question/134909)
  + App-iOS platform fix nvue swiper component embedded list-waterfall bug, the list can also scroll vertically while swiping horizontally [Details](https://ask.dcloud.net.cn/question/134909)
  + App-iOS平台 修复 nvue 页面内存在可滚动子组件时，开启 enablePullDownRefresh 下拉刷新功能无效的Bug
  + App-iOS platform Fix the bug that the enablePullDownRefresh pull-down refresh function is invalid when there are scrollable subcomponents in the nvue page
  + App平台 修复 vue3 组件 picker-view 调整列数据时渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/140609)
  + App platform Fix the bug of vue3 component picker-view rendering error when adjusting column data [Details](https://ask.dcloud.net.cn/question/140609)
  + H5平台 修复 vue3 项目配置 base 发行后资源路径可能错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3354)
  + H5 platform Fix the bug that the resource path may be wrong after the release of the vue3 project configuration base [details](https://github.com/dcloudio/uni-app/issues/3354)
  + 小程序平台 优化 vue3 项目自定义组件支持 v-bind="" 语法 [详情](https://github.com/dcloudio/uni-app/issues/3330)
  + MiniApp platform optimization vue3 project custom components support v-bind="" syntax [details](https://github.com/dcloudio/uni-app/issues/3330)
  + QQ小程序平台 修复 vue3 项目 appid 配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3339)
  + The QQ MiniApp platform fixes the bug that the appid configuration of the vue3 project does not take effect [details](https://github.com/dcloudio/uni-app/issues/3339)
  + 字节跳动小程序平台 修复 vue3 项目部分情况下数据不响应的Bug [详情](https://github.com/dcloudio/uni-app/issues/3340)
  + ByteDance MiniApp platform fixes the bug that the data does not respond in some cases of the vue3 project [details](https://github.com/dcloudio/uni-app/issues/3340)
  + 字节跳动小程序平台 修复 vue3 项目 options 方式配置 provide/inject 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3360)
  + ByteDance MiniApp platform fixes the bug that the configuration of provide/inject in the options mode of the vue3 project does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3360)
  + 支付宝小程序平台 修复 vue3 项目分包页面事件响应不正常的Bug [详情](https://ask.dcloud.net.cn/question/140742)
  + The Alipay MiniApp platform fixed the bug that the event response of the vue3 project subcontracting page was abnormal [Details](https://ask.dcloud.net.cn/question/140742)
* 【uniCloud】
  + 修复 公共模块右键管理依赖的公共模块不生效的Bug
  + Fix the bug that the public modules that depend on the right-click management of public modules do not take effect
  + 修复 修复本地运行云函数调用云对象报错的Bug
  + Fix Fix the bug of calling cloud objects when running cloud functions locally
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + uni-AD 新增 百度百青藤广告联盟支持信息流广告
  + uni-AD has added Baidu Baiqingteng Advertising Alliance to support Native Ads
  + Android平台 更新 uni-AD 百度百青藤广告SDK 为 9.202 版
  + Android platform update uni-AD Baidu Baiqingteng Advertising SDK to version 9.202
  + Android平台 修复 在部分设备识别国际化语言不正确的Bug [详情](https://ask.dcloud.net.cn/question/141688)
  + Android platform fixed the bug that the internationalized language was incorrectly recognized on some devices [Details](https://ask.dcloud.net.cn/question/141688)
* 【Uni小程序SDK】
* 【Uni MiniApp SDK】
  + Android平台 修复 微信登录连续多次调用可能会导致失败的Bug
  + Android platform fixes the bug that WeChat login may fail if called multiple times in a row
  + Android平台 修复 转场动画在 Android12 设备可能失效的Bug
  + Android platform fixed the bug that the transition animation may fail on Android12 devices
  + Android平台 修复 调用 startActivityForUniMPTask 在 Android8 以下设备可能会引起应用崩溃的Bug
  + Android platform fixed the bug that calling startActivityForUniMPTask may cause the app to crash on devices below Android8

#### 3.4.2.20220310-alpha
* 【uni-app】
  + App平台 新增 vue 页面支持 live-pusher 组件 [详情](https://uniapp.dcloud.net.cn/component/live-pusher)
  + Added support for live-pusher component on App platform [Details](https://uniapp.dcloud.net.cn/component/live-pusher)
  + App平台 修复 uni.request、uni.onSocketMessage 等接口返回的 ArrayBuffer 类型不可用 instanceof 做类型判断的Bug
  + App platform Fixed the bug that the ArrayBuffer type returned by uni.request, uni.onSocketMessage and other interfaces could not be judged by instanceof
  + App平台 修复 vue3 项目 wxs/renderjs 监听事件运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3324)
  + App platform Fix the bug that the vue3 project wxs/renderjs listens to the event and reports an error [Details](https://github.com/dcloudio/uni-app/issues/3324)
  + App-Android平台 修复 nvue map组件使用高德地图时，频繁调用 addMarkers 增加聚合点可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/140461)
  + App-Android platform fixes the bug that frequent calls to addMarkers to add aggregation points may cause a crash when the nvue map component uses Gaode map [Details](https://ask.dcloud.net.cn/question/140461)
  + App-Android平台 修复 nvue map组件使用谷歌地图时，调用 moveAlong 移动 marker 可能出现偏移的Bug
  + App-Android platform fix nvue map component when using Google Maps, calling moveAlong to move the marker may have offset bugs
  + App-iOS平台 补齐 uni-AD 支持 nvue ad-content-page组件 [文档](https://uniapp.dcloud.net.cn/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App-iOS platform completes uni-AD and supports nvue ad-content-page component [documentation](https://uniapp.dcloud.net.cn/component/ad-content-page.html#%E7%9F%AD %E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App-iOS平台 修复 nvue 组件 userInteractionEnabled 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/140838)
  + App-iOS platform fix nvue component userInteractionEnabled attribute invalid Bug [details](https://ask.dcloud.net.cn/question/140838)
  + App-iOS平台 修复 nvue refresh 组件 pullingdown 事件触发时机不正确的Bug [详情](https://ask.dcloud.net.cn/question/138962)
  + App-iOS platform fixed the bug that the trigger timing of nvue refresh component pullingdown event was incorrect [Details](https://ask.dcloud.net.cn/question/138962)
  + H5平台 修复 vue3 项目 wxs/renderjs 热刷新不生效的Bug [详情](https://ask.dcloud.net.cn/question/140800)
  + H5 platform fixes the bug that the vue3 project wxs/renderjs hot refresh does not take effect [Details](https://ask.dcloud.net.cn/question/140800)
  + H5平台 修复 vue3 项目特定情况下拉刷新后页面跳转的Bug [详情](https://github.com/dcloudio/uni-app/issues/3326)
  + H5 platform fixes the bug of page jump after pulling and refreshing in specific cases of vue3 project [details](https://github.com/dcloudio/uni-app/issues/3326)
  + 小程序平台 修复 vue3 项目模板中 style 属性包含换行符时编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3320)
  + MiniApp platform fixes the bug that compiles when the style attribute in the vue3 project template contains a line break [details](https://github.com/dcloudio/uni-app/issues/3320)
  + 支付宝小程序平台 优化 vue3 项目默认开启 es6=>es5 [详情](https://ask.dcloud.net.cn/question/140742)
  + Alipay MiniApp platform optimizes vue3 project to enable es6=>es5 by default [Details](https://ask.dcloud.net.cn/question/140742)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + Android平台 新增 Google支付支持 isReadyToPay 方法 [文档](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.PaymentChannel.isReadyToPay)
  + Android platform added Google payment support isReadyToPay method [Documentation](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.PaymentChannel.isReadyToPay)

#### 3.4.1.20220308-alpha
* 【uni-app】
  + App平台 修复 uni.getBackgroundAudioManager 的 onPrev onNext 事件无效Bug [详情](https://ask.dcloud.net.cn/question/107325)
  + App platform fix the invalid bug of onPrev onNext event of uni.getBackgroundAudioManager [Details](https://ask.dcloud.net.cn/question/107325)
  + App平台 修复 3.4.0 引发的 vue2 项目 canvas 组件 fillText 失效的Bug [详情](https://ask.dcloud.net.cn/question/140786)
  + App platform Fix the bug that the fillText of the canvas component of the vue2 project caused by 3.4.0 fails [Details](https://ask.dcloud.net.cn/question/140786)
  + App平台 修复 3.4.0 引发的 vue2 项目 nvue 页面的 uni.createLivePusherContext 无效Bug [详情](https://ask.dcloud.net.cn/question/140743)
  + App platform Fix the invalid bug of uni.createLivePusherContext on the vue2 project nvue page caused by 3.4.0 [Details](https://ask.dcloud.net.cn/question/140743)
  + App平台 修复 vue3 项目 navigator 组件和 rich-text 组件嵌套使用时 scopeId 值不一致导致的样式Bug [详情](https://ask.dcloud.net.cn/question/140644)
  + App platform Fix the style bug caused by inconsistent scopeId values when the vue3 project navigator component and rich-text component are nested and used [Details](https://ask.dcloud.net.cn/question/140644)
  + App-iOS平台 修复 nvue map 组件 marker 的 joinCluster 为 false 时 removeMarkers 方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/140648)
  + App-iOS platform fixes the bug that the removeMarkers method does not take effect when the joinCluster of the nvue map component marker is false [Details](https://ask.dcloud.net.cn/question/140648)
  + App-iOS平台 修复 nvue rich-text 组件 text-overflow 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/140586)
  + App-iOS platform fixes the bug that the text-overflow style of the nvue rich-text component does not take effect [Details](https://ask.dcloud.net.cn/question/140586)
  + H5平台 修复 部分情况下 input 组件显示数值错误的Bug [详情](https://ask.dcloud.net.cn/question/140366)
  + H5 platform fixed the bug that the input component displayed wrong values in some cases [details](https://ask.dcloud.net.cn/question/140366)
  + 小程序平台 修复 vue3 项目部分情况下视图更新延迟的Bug [详情](https://github.com/dcloudio/uni-app/issues/3311)
  + The MiniApp platform fixes the bug that the view update is delayed in some cases of the vue3 project [details](https://github.com/dcloudio/uni-app/issues/3311)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + Android平台 3.4.0 引出的 UniPush模块使用 Oppo 厂商通道时云端打包失败的Bug [详情](https://ask.dcloud.net.cn/question/140765)
  + The UniPush module introduced by Android platform 3.4.0 failed to be packaged in the cloud when using the Oppo vendor channel [Details](https://ask.dcloud.net.cn/question/140765)
* 【UniMPSDK】
  + iOS平台 修复 小程序SDK中设置 user-agent 影响宿主原生页面中 Webview 的Bug
  + iOS platform repaired the bug that setting user-agent in the MiniApp SDK would affect the Webview in the native page of the host

#### 3.4.0.20220304-alpha
* 【uni-app】
  + 新增 vue2 项目支持发布到 京东小程序
  + Added support for publishing vue2 projects to JD MiniApp
  + 修复 vue3 项目兼容 vite@2.8.x [详情](https://ask.dcloud.net.cn/question/139311)
  + Fix vue3 project to be compatible with vite@2.8.x [Details](https://ask.dcloud.net.cn/question/139311)
  + 修复 vue3 项目兼容 vite-plugin-eslint [详情](https://github.com/dcloudio/uni-app/issues/3247)
  + Fix vue3 project to be compatible with vite-plugin-eslint [details](https://github.com/dcloudio/uni-app/issues/3247)
  + App平台、H5平台 优化 取消全局 canvas 高清处理，支持配置单个 canvas 组件 hidpi 属性
  + App platform, H5 platform optimization Cancel the global canvas high-definition processing, support the configuration of a single canvas component hidpi attribute
  + App平台、H5平台 修复 自定义组件监听 tap.native 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3259)
  + App platform, H5 platform Fix the bug that the custom component monitoring tap.native does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3259)
  + App平台、H5平台 修复 vue3 项目 uni.pageScrollTo 的 duration 为0时不生效的Bug [详情](https://ask.dcloud.net.cn/question/139432)
  + App platform, H5 platform Fix the bug that the vue3 project uni.pageScrollTo does not take effect when the duration is 0 [Details](https://ask.dcloud.net.cn/question/139432)
  + App平台、H5平台 修复 vue3 项目 input 组件类型为 number 时在低版本 webview 失去焦点时报错的Bug [详情](https://ask.dcloud.net.cn/question/138088)
  + App platform, H5 platform Fix the bug that an error is reported when the input component type of the vue3 project is number when the low version webview loses focus [Details](https://ask.dcloud.net.cn/question/138088)
  + App平台 新增 地图支持 Google地图 [详情](https://uniapp.dcloud.net.cn/app-maps)
  + Added map support for App platform Google Maps [Details](https://uniapp.dcloud.net.cn/app-maps)
  + App平台 新增 支付支持 Paypal、Stripe、Google Pay [详情](https://uniapp.dcloud.io/app-payment-paypal)
  + App platform added payment support Paypal, Stripe, Google Pay [Details](https://uniapp.dcloud.io/app-payment-paypal)
  + App平台 新增 登录支持 Google、Facebook [详情](https://uniapp.dcloud.io/api/plugins/login?id=app-oauth)
  + App platform added login support Google, Facebook [details](https://uniapp.dcloud.io/api/plugins/login?id=app-oauth)
  + App平台 新增 vue 页面 video 组件支持 vslide-gesture、vslide-gesture-in-fullscreen 属性 [详情](https://uniapp.dcloud.io/component/video)
  + Added vue page video component on App platform to support vslide-gesture, vslide-gesture-in-fullscreen attributes [details](https://uniapp.dcloud.io/component/video)
  + App平台 新增 pages.json 支持在 style 配置 disableSwipeBack 以禁用 iOS 侧滑返回
  + App platform added pages.json to support configuring disableSwipeBack in style to disable iOS side-swipe back
  + App平台 修复 uni.addPhoneContact 重复添加联系人的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I4NY6C)
  + App platform fixes the bug of repeatedly adding contacts in uni.addPhoneContact [details](https://gitee.com/dcloud/uni-app/issues/I4NY6C)
  + App平台 修复 vue3 项目使用 html 原生标签（如div）时，事件监听报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3240)
  + App platform Fix the bug that the event listener reports an error when the vue3 project uses html native tags (such as div) [Details](https://github.com/dcloudio/uni-app/issues/3240)
  + App-Android平台 修复 nvue image 组件 mode 属性设置为 widthFix/HeightFix 时可能导致图片无法显示的Bug [详情](https://ask.dcloud.net.cn/question/139541)
  + App-Android platform Fix the bug that the image may not be displayed when the mode property of the nvue image component is set to widthFix/HeightFix [Details](https://ask.dcloud.net.cn/question/139541)
  + App-Android平台 修复 nvue list 组件插入列表项可能引起页面闪烁的Bug [详情](https://ask.dcloud.net.cn/question/139424)
  + App-Android platform fixes the bug that the nvue list component inserting list items may cause the page to flicker [Details](https://ask.dcloud.net.cn/question/139424)
  + App-Android平台 修复 nvue web-view 组件 progress 颜色值不支持3位十六进制格式字符串的Bug [详情](https://ask.dcloud.net.cn/question/138670)
  + App-Android platform fixed the bug that the nvue web-view component progress color value did not support 3-digit hexadecimal format string [Details](https://ask.dcloud.net.cn/question/138670)
  + App-Android平台 修复 nvue web-view 组件 无法正常加载使用非受信任证书网页的Bug [详情](https://ask.dcloud.net.cn/question/134287)
  + App-Android platform fixed the bug that the nvue web-view component could not normally load webpages using untrusted certificates [Details](https://ask.dcloud.net.cn/question/134287)
  + App-Android平台 修复 nvue animation 动画切到后台可能无法执行的Bug [详情](https://ask.dcloud.net.cn/question/137868)
  + App-Android platform fixes the bug that nvue animation may not be able to execute when it switches to the background [Details](https://ask.dcloud.net.cn/question/137868)
  + App-Android平台 修复 nvue map 组件 marker 设置 joinCluster 为 true 时导致 callouttap 事件不响应的Bug [详情](https://ask.dcloud.net.cn/question/136381)
  + App-Android platform fixes the bug that the callouttap event does not respond when the nvue map component marker sets joinCluster to true [Details](https://ask.dcloud.net.cn/question/136381)
  + App-Android平台 修复 nvue text 组件 font-style 设置 italic 在部分设备可能无效的Bug [详情](https://ask.dcloud.net.cn/question/120801)
  + App-Android platform fix nvue text component font-style setting italic may be invalid bug on some devices [Details](https://ask.dcloud.net.cn/question/120801)
  + App-Android平台 修复 nvue 页面切换可能导致 plus.key.addEventListener 监听 keydown 事件不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/140203)
  + App-Android platform fix nvue page switching may cause plus.key.addEventListener listen keydown event does not trigger a callback bug [Details](https://ask.dcloud.net.cn/question/140203)
  + App-iOS平台 修复 vue3 项目 调试时启动白屏的Bug
  + App-iOS platform fixes the bug of starting a white screen when debugging a vue3 project
  + H5平台 优化 vue3 项目 navigator 组件使用 a 标签渲染以利于SEO
  + H5 platform optimize the navigator component of vue3 project to render with a tag to facilitate SEO
  + H5平台 修复 vue3 项目 html 中引入 static 目录的 js 文件包含 ifdef 编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3201)
  + H5 platform fixes the bug that the js file introduced into the static directory in the vue3 project html contains ifdef compilation errors [details](https://github.com/dcloudio/uni-app/issues/3201)
  + H5平台 修复 vue3 项目 renderjs 发行后不正常的Bug [详情](https://ask.dcloud.net.cn/question/137832)
  + H5 platform fixes the abnormal bug after the release of the vue3 project renderjs [Details](https://ask.dcloud.net.cn/question/137832)
  + H5平台 修复 vue3 项目 dataset 不支持对象类型错误的Bug [详情](https://ask.dcloud.net.cn/question/139181)
  + H5 platform fixes the bug that the vue3 project dataset does not support the wrong object type [details](https://ask.dcloud.net.cn/question/139181)
  + H5平台 修复 vue3 项目 禁用摇树后，uni.showModal 等弹窗缺少样式的Bug [详情](https://ask.dcloud.net.cn/question/139593)
  + H5 platform fixes the bug that the pop-up windows such as uni.showModal lack styles after tree shaking is disabled in the vue3 project [Details](https://ask.dcloud.net.cn/question/139593)
  + H5平台 修复 vue3 项目 热刷新编译报错的Bug [详情](https://ask.dcloud.net.cn/question/135765)
  + H5 platform fixes the bug of hot refresh compilation error of vue3 project [details](https://ask.dcloud.net.cn/question/135765)
  + H5平台 修复 vue3 项目 text 组件使用 v-if 时显示错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3225)
  + H5 platform Fix the bug that the text component of the vue3 project displays errors when using v-if [details](https://github.com/dcloudio/uni-app/issues/3225)
  + H5平台 修复 map 组件 marker 不能设置 id 为 0 的Bug
  + H5 platform fixes the bug that the map component marker cannot set the id to 0
  + 小程序平台 修复 vue3 项目 uni.getSystemInfo 无法获取 deviceId 的Bug [详情](https://ask.dcloud.net.cn/question/139733)
  + MiniApp platform fixes the bug that the vue3 project uni.getSystemInfo cannot get the deviceId [details](https://ask.dcloud.net.cn/question/139733)
  + 小程序平台 修复 vue3 项目 不支持 v-html 的Bug [详情](https://ask.dcloud.net.cn/question/138290)
  + The MiniApp platform fixes the bug that the vue3 project does not support v-html [details](https://ask.dcloud.net.cn/question/138290)
  + 小程序平台 修复 vue3 项目 v-if 中使用 wxs 等模块时报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3199)
  + The MiniApp platform fixes the bug that reported errors when using wxs and other modules in the v-if of the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3199)
  + 小程序平台 修复 vue3 项目 defineEmits 事件名包含 - 分隔符时无法正常监听的Bug [详情](https://github.com/dcloudio/uni-app/issues/3210)
  + MiniApp platform fixes the bug that the defineEmits event name of the vue3 project contains - separators and cannot be monitored normally [Details](https://github.com/dcloudio/uni-app/issues/3210)
  + 小程序平台 修复 vue3 项目 setup 手动引入组件不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3213)
  + The MiniApp platform fixes the bug that the manual introduction of components in the vue3 project setup does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3213)
  + 小程序平台 修复 vue3 项目 v-for 嵌套使用时部分情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3263)
  + The MiniApp platform fixes the bug that the vue3 project v-for is nested and used in some cases to run the bug [details](https://github.com/dcloudio/uni-app/issues/3263)
  + 小程序平台 修复 vue3 项目 wxs 调用 callMethod 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3218)
  + The MiniApp platform fixes the bug that the callMethod of the vue3 project wxs does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3218)
  + 小程序平台 修复 vue3 项目 全局组件路径解析错误的Bug [详情](https://ask.dcloud.net.cn/question/138662)
  + The MiniApp platform fixes the bug that the global component path of the vue3 project is parsed incorrectly [Details](https://ask.dcloud.net.cn/question/138662)
  + 小程序平台 修复 vue3 项目 全局 mixin 分享 onShareAppMessage，onShareTimeline 不生效的Bug [详情](https://ask.dcloud.net.cn/question/140351)
  + The MiniApp platform fixes the bug that the vue3 project global mixin share onShareAppMessage, onShareTimeline does not take effect [Details](https://ask.dcloud.net.cn/question/140351)
  + 微信小程序平台 修复 vue2 项目 v-for 遍历部分表达式时 stop 修饰符无效的Bug [详情](https://ask.dcloud.net.cn/question/138684)
  + WeChat MiniApp platform fixes the bug that the stop modifier is invalid when the v-for of the vue2 project traverses some expressions [details](https://ask.dcloud.net.cn/question/138684)
  + 微信小程序平台 修复 vue3 项目 canvas 监听 touch 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3209)
  + Wechat MiniApp platform fixes the bug that the vue3 project canvas monitoring touch does not work [Details](https://github.com/dcloudio/uni-app/issues/3209)
  + 微信小程序平台 修复 vue3 项目部分情况下事件监听错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3228)
  + Wechat MiniApp platform repaired the bug of event monitoring disorder in some cases of vue3 projects [details](https://github.com/dcloudio/uni-app/issues/3228)
  + 微信小程序平台 修复 vue3 项目使用小程序插件组件无法传递属性的Bug [详情](https://github.com/dcloudio/uni-app/issues/3257)
  + WeChat MiniApp platform fixes the bug that the vue3 project cannot pass attributes when using the MiniApp plug-in component [details](https://github.com/dcloudio/uni-app/issues/3257)
  + 支付宝小程序平台 修复 vue2 项目小程序组件事件监听失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/2273)
  + Alipay MiniApp platform fixes the bug that the event monitoring of the vue2 project MiniApp component fails [details](https://github.com/dcloudio/uni-app/issues/2273)
  + 支付宝小程序平台 修复 vue2 项目小程序插件中组件事件监听失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/2410)
  + Alipay MiniApp platform fixes the bug that component event monitoring fails in the vue2 project MiniApp plug-in [details](https://github.com/dcloudio/uni-app/issues/2410)
  + 【重要】hello uniCloud 新增云对象基础使用示例[详情](https://ext.dcloud.net.cn/plugin?id=4082)
  + [Important] hello uniCloud adds cloud object basic usage examples [details](https://ext.dcloud.net.cn/plugin?id=4082)
* 【uniCloud】
  + 【重要】新增`云对象`。将callfunction函数调用升级为模块化方式，网络不再传递json，前端对象化使用云API [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj)
  + [Important] Add `cloud object`. Upgrade the call function call to a modular method, the network no longer transmits json, and the front-end object uses cloud API [Details](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj)
  + 【调整】发送短信API 从内置库剥离为扩展库 uni-cloud-sms [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms?id=extension)
  + [Adjustment] Split the send SMS API from the built-in library to the extension library uni-cloud-sms [Details](https://uniapp.dcloud.net.cn/uniCloud/send-sms?id=extension)
  + 【调整】一键登录API 从内置库剥离为扩展库 uni-cloud-verify [详情](https://uniapp.dcloud.net.cn/uniCloud/univerify?id=extension)
  + [Adjustment] The one-click login API is separated from the built-in library to the extended library uni-cloud-verify [Details](https://uniapp.dcloud.net.cn/uniCloud/univerify?id=extension)
  + 【调整】uniCloud本地调试插件 云函数右键本地运行时，此云函数内的callFunction由调用云端云函数改为调用本地云函数
  + [Adjustment] uniCloud local debugging plug-in When the cloud function is right-clicked to run locally, the callFunction in this cloud function is changed from calling the cloud function to calling the local cloud function
  + 新增 jql语法 允许在 getTemp 联表查询的虚拟联表内使用 groupBy distinct [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?  id=lookup-with-temp)
  + Added jql syntax to allow the use of groupBy distinct in the virtual join table of getTemp join table query [Details](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + 优化 HBuilderX新建云函数的界面支持选择模板和依赖
  + Optimize the interface of HBuilderX to create new cloud functions to support the selection of templates and dependencies
  + 修复 阿里云 云函数删除文件接口返回数据格式不正确的Bug
  + Fixed the bug that the data format returned by the Alibaba Cloud cloud function delete file interface was incorrect
  + 修复 uni-cloud-jql扩展库 权限校验失败等场景未抛出错误的Bug
  + Fixed the bug that the uni-cloud-jql extension library did not throw an error in scenarios such as permission verification failure
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 新增 支持Google地图 [详情](https://uniapp.dcloud.io/app-maps?id=google%e5%9c%b0%e5%9b%be)
  + Added support for Google Maps [Details](https://uniapp.dcloud.io/app-maps?id=google%e5%9c%b0%e5%9b%be)
  + 【重要】uni-AD 新增 百度百青藤广告联盟 支持开屏、插屏、激励视频广告 [详情](https://ask.dcloud.net.cn/article/36769)
  + [Important] uni-AD has added Baidu Baiqingteng Advertising Alliance to support open screen, interstitial screen, and rewarded Rewarded Ads[Details](https://ask.dcloud.net.cn/article/36769)
  + 【重要】Android平台 新增 uni-AD 支持华为广告联盟 包括开屏、信息流、插屏、激励视频广告 [详情](https://ask.dcloud.net.cn/article/36769)
  + [Important] Added uni-AD on Android platform to support Huawei Advertising Alliance, including open screen, information flow, interstitial screen, rewarded Rewarded Ads[details](https://ask.dcloud.net.cn/article/36769)
  + Android平台 优化 应用启动首页可能出现上下抖动的Bug [详情](https://ask.dcloud.net.cn/question/138243)
  + Android platform optimization Bug that the home page of the application may shake up and down [Details](https://ask.dcloud.net.cn/question/138243)
  + Android平台 修复 使用 X5 内核调用 plus.key.addEventListener 监听 keyup 事件不触发回调的Bug
  + Android platform fixed the bug that using the X5 kernel to call plus.key.addEventListener to listen to the keyup event does not trigger the callback bug
  + Android平台 修复 Android8及以上设备 plus.navigator.createShortcut 无法创建桌面快捷图标的Bug [详情](https://ask.dcloud.net.cn/question/125119)
  + Android platform Fix the bug that plus.navigator.createShortcut cannot create desktop shortcut icons on Android8 and above devices [Details](https://ask.dcloud.net.cn/question/125119)
  + Android平台 修复 视频播放控件 video 边缘可能出现黑线的Bug [详情](https://ask.dcloud.net.cn/question/138320)
  + Android platform fixes the bug that black lines may appear on the edge of the video playback control [Details](https://ask.dcloud.net.cn/question/138320)
  + Android平台 修复 在部分设备调用 plus.runtime.restart 可能引起应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/138965)
  + Android platform fixed a bug that may cause the app to crash when calling plus.runtime.restart on some devices [Details](https://ask.dcloud.net.cn/question/138965)
  + Android平台 修复 系统语言设置为土耳其语时，tabbar 切换选项可能导致不显示的Bug [详情](https://ask.dcloud.net.cn/question/139313)
  + Android platform fixed when the system language is set to Turkish, the tabbar switching option may cause the bug not to be displayed [Details](https://ask.dcloud.net.cn/question/139313)
  + Android平台 修复 本地相册选择视频设置 compressed 为 false 时依然会压缩的Bug [详情](https://ask.dcloud.net.cn/question/140417)
  + Android platform fixes the bug that the local album selection video will still be compressed when the compressed setting is false [Details](https://ask.dcloud.net.cn/question/140417)
  + iOS平台 新增 uni原生插件支持 applicationMain 获取 main 函数启动参数 argc、argv [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=hook%e7%b3%bb%e7%bb%9f%e4%ba%8b%e4%bb%b6)
  + Added uni native plug-in on iOS platform to support applicationMain to get main function startup parameters argc and argv [documentation](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=hook%e7%b3%bb% e7%bb%9f%e4%ba%8b%e4%bb%b6)
  + iOS平台 修复 Webview窗口标题栏 titleNView无法动态更新网络页面标题的Bug [详情](https://ask.dcloud.net.cn/question/138958)
  + iOS platform fixed the bug that the title bar of the Webview window titleNView could not dynamically update the title of the web page [Details](https://ask.dcloud.net.cn/question/138958)
  + iOS平台 修复 compressVideo 视频压缩可能出现尺寸错乱的Bug [详情](https://ask.dcloud.net.cn/question/138303)
  + iOS platform fixed the bug that compressVideo video compression may have wrong size [Details](https://ask.dcloud.net.cn/question/138303)
  + iOS平台 修复 微博分享 type 为 web 时无法正常分享的Bug [详情](https://ask.dcloud.net.cn/question/138830)
  + iOS platform fixed the bug that the Weibo sharing type was web and could not be shared normally [Details](https://ask.dcloud.net.cn/question/138830)
  + iOS平台 修复 播放背景音频时系统锁屏界面音乐播放器的进度条可能显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/140101)
  + iOS platform fixes the bug that the progress bar of the music player on the system lock screen may display incorrectly when playing background audio [Details](https://ask.dcloud.net.cn/question/140101)
* 【uni小程序SDK】
* 【uni MiniApp SDK】
  + Android平台 优化 混淆配置规则，解决 zip4j 可能与其他的库冲突的Bug
  + Android platform optimization Confuse configuration rules, solve the bug that zip4j may conflict with other libraries
  + Android平台 修复 3.3.5 引出的 微信支付回调可能会引起崩溃的Bug
  + Android platform fixes the bug that the WeChat payment callback may cause a crash caused by 3.3.5
  + Android平台 修复 多个小程序分别配置使用 vue2、vue3， 同时打开可能引起白屏的Bug [详情](https://ask.dcloud.net.cn/question/138576)
  + Android platform fixes a bug that may cause a white screen when multiple MiniApp are configured to use vue2 and vue3 respectively [Details](https://ask.dcloud.net.cn/question/138576)
  + Android平台 修复 关闭小程序后台运行模式，重复操作打开/关闭小程序可能导致小程序无法正常运行的Bug
  + Android platform fixes the bug that closing the background running mode of the MiniApp, repeated operations to open/close the MiniApp may cause the MiniApp to fail to run normally
  + Android平台 修复 小程序切换到后台，直达页面启动时出现闪屏的Bug
  + Android platform fixes the bug that the splash screen appears when the MiniApp is switched to the background, and the page starts directly
  + iOS平台 修复 关闭小程序后快速启动小程序并直达页面，重复操作偶现崩溃的Bug
  + iOS platform repaired the bug that the MiniApp would quickly start up and go directly to the page after closing the MiniApp , and repeated operations would occasionally crash the bug

#### 3.3.12.20220222-alpha
* 【uni-app】
  + App平台、H5平台 修复 vue3 项目两个开启了下拉刷新的页面跳转后返回，下拉刷新不触发 onPullDownRefresh 生命周期的Bug [详情](https://github.com/dcloudio/uni-app/issues/3187)
  + App platform and H5 platform fix the bug that the two vue3 projects that enable the pull-down refresh page jump and return, the pull-down refresh does not trigger the onPullDownRefresh life cycle [Details](https://github.com/dcloudio/uni-app/issues /3187)
  + App平台 修复 vue3 项目 nvue 页面使用 map 组件时部分方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/138515)
  + App platform Fix the bug that some methods do not work when the nvue page of the vue3 project uses the map component [Details](https://ask.dcloud.net.cn/question/138515)
  + App-Android平台 修复 picker 组件选择选项后同页面 input 组件可能无法正常获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/138237)
  + App-Android platform fixes the bug that the input component on the same page may not get the focus normally after the picker component selects an option [Details](https://ask.dcloud.net.cn/question/138237)
  + App-Android平台 修复 vue3 项目 安卓低版本时使用 type=number 的 input 组件输入报错的Bug [详情](https://ask.dcloud.net.cn/question/138088)
  + App-Android platform fix vue3 project when using input component with type=number to input error bug [details](https://ask.dcloud.net.cn/question/138088)
  + App-iOS平台 修复 3.3.2 版本引出的支持多个音频同时播放引发iOS影响静音开关的问题，默认不支持同时播放多个文件，如果需要可手动设置 sessionCategory
  + App-iOS platform Fixed the problem that the 3.3.2 version supports multiple audios playing at the same time, causing iOS to affect the mute switch. By default, it does not support playing multiple files at the same time. If necessary, you can manually set the sessionCategory
  + App-iOS平台 修复 vue3 项目 canvas 组件绘制本地图像后无法导出到本地到Bug
  + App-iOS platform fixed the bug that the canvas component of the vue3 project could not be exported to the local after drawing the local image
  + H5平台 优化 uni.chooseLocation 支持传入坐标
  + H5 platform optimized uni.chooseLocation to support incoming coordinates
  + H5平台 修复 vue2 项目开启摇树后 ad 组件失效的Bug
  + H5 platform fixes the bug that the ad component fails after the vue2 project starts shaking the tree
  + H5平台 修复 vue3 项目 image 组件 mode=heightFix 图像大小显示错误的Bug
  + H5 platform fixes the bug that the image component mode=heightFix of the vue3 project displays the wrong image size
  + H5平台 修复 vue3 项目 button 组件发行后 loading 不显示的Bug
  + H5 platform fixes the bug that the loading does not display after the button component of the vue3 project is released
  + 支付宝小程序平台 修复 触发自定义事件报错的Bug [详情](https://ask.dcloud.net.cn/question/138706)
  + The Alipay MiniApp platform fixes the bug that triggers custom event error reporting [details](https://ask.dcloud.net.cn/question/138706)
* 【uniCloud】
  + 修复 JQL语法 getTemp 返回结果传递给组件属性时在微信小程序端报错的Bug [详情](https://ask.dcloud.net.cn/question/138308)
  + Fixed the bug that an error was reported on the WeChat MiniApp when the return result of the JQL syntax getTemp was passed to the component property [Details](https://ask.dcloud.net.cn/question/138308)
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.450.1320 版，iOS为 4.13.50 版；今日头条穿山甲SDK Android为 4.3.0.1 版， iOS为 4.3.0.2 版；快手广告SDK Android为 3.3.21 版，iOS为 3.3.21 版
  + Update uni-AD Tencent Youlianghui SDK Android to version 4.450.1320, iOS to version 4.13.50; Toutiao Pangolin SDK Android to version 4.3.0.1, iOS to version 4.3.0.2; Kuaishou Advertising SDK Android to version 3.3.21 version, iOS version 3.3.21
  + Android平台 修复 一键登录 授权页面服务协议自定义复选框状态图片设置不正确的Bug [详情](https://ask.dcloud.net.cn/question/139830)
  + Android platform fixed the bug that the one-click login authorization page service agreement custom check box status picture setting was incorrect [Details](https://ask.dcloud.net.cn/question/139830)
  + iOS平台 修复 Downloader 下载图片文件可能失败的Bug [详情](https://ask.dcloud.net.cn/question/116101)
  + iOS platform fixes the bug that Downloader may fail to download image files [Details](https://ask.dcloud.net.cn/question/116101)
  + iOS平台 修复 geitImageInfo 可能不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/139361)
  + iOS platform fix the bug that geitImageInfo may not trigger the callback [Details](https://ask.dcloud.net.cn/question/139361)
* 【uni小程序SDK】
* 【uni MiniApp SDK】
  + iOS平台 修复 动态切换横竖屏导致页面布局异常的Bug
  + iOS platform repaired the bug that the page layout was abnormal due to dynamic switching between horizontal and vertical screens

#### 3.3.8.20220114-alpha
* 【uniCloud】
  + 修复 3.3.7-alpha引出的JQL数据库管理无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/138139)
  + Fix the bug that the JQL database management cannot be used normally caused by 3.3.7-alpha [Details](https://ask.dcloud.net.cn/question/138139)
* 【uni-app】
  + App-Android平台 修复 3.3.7 版本引出的 nvue list 组件滚动后也会触发 click 事件的Bug
  + App-Android platform fixes the bug that the nvue list component triggered by the 3.3.7 version will also trigger the click event after scrolling
  + 小程序平台 修复 vue3 项目 组件使用 id 属性不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3179)
  + The MiniApp platform fixes the bug that the id attribute of the vue3 project component does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3179)
  + 小程序平台 修复 vue3 项目 部分情况 defineExpose 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3180)
  + The MiniApp platform fixes the bug that defineExpose does not take effect in some cases of the vue3 project [details](https://github.com/dcloudio/uni-app/issues/3180)
  + 小程序平台 修复 vue3 项目 兼容 unocss 插件 [详情](https://ask.dcloud.net.cn/question/138021)
  + MiniApp platform repair vue3 project compatible unocss plug-in [details](https://ask.dcloud.net.cn/question/138021)
  + 微信小程序平台 修复 vue3 项目 当 v-for 循环变量名为 index 时渲染不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3193)
  + Wechat MiniApp platform fixes the bug that the vue3 project renders incorrectly when the v-for loop variable name is index [details](https://github.com/dcloudio/uni-app/issues/3193)
  + 微信小程序平台 修复 vue3 项目无法自动开启开发工具窗口的Bug
  + Wechat MiniApp platform fixes the bug that the vue3 project cannot automatically open the development tool window
  + 支付宝小程序平台 修复 vue3 项目 mixin 中包含 props 运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3191)
  + Alipay MiniApp platform fixes the bug that contains props running errors in the vue3 project mixin [details](https://github.com/dcloudio/uni-app/issues/3191)

#### 3.3.7.20220112-alpha
* 【uni-app】
  + App平台、H5平台 新增 textarea、input 组件支持 confirm-hold 属性 [详情](https://uniapp.dcloud.io/component/input)
  + Added textarea and input components on App platform and H5 platform to support confirm-hold attribute [Details](https://uniapp.dcloud.io/component/input)
  + App平台、H5平台 优化 image 组件 draggable 属性默认值改为 false
  + App platform, H5 platform optimized image component draggable property default value changed to false
  + App平台 优化 uni.request 请求参数支持 ArrayBuffer 类型
  + App platform optimized uni.request request parameter to support ArrayBuffer type
  + App平台 修复 vue3 项目 发行后 renderjs 调用 ownerInstance.callMethod 失效的Bug [详情](https://ask.dcloud.net.cn/question/137832)
  + App platform Fix the bug that renderjs calls ownerInstance.callMethod invalid after the release of vue3 project [Details](https://ask.dcloud.net.cn/question/137832)
  + App平台 修复 vue3 项目 picker 组件默认语言固定为英文的Bug [详情](https://ask.dcloud.net.cn/question/136954)
  + App platform Fix the bug that the default language of the picker component of the vue3 project is fixed to English [Details](https://ask.dcloud.net.cn/question/136954)
  + App-Android平台 修复 nvue input 组件不支持自定义字体的Bug [详情](https://ask.dcloud.net.cn/question/135514)
  + App-Android platform fixes the bug that the nvue input component does not support custom fonts [Details](https://ask.dcloud.net.cn/question/135514)
  + App-Android平台 修复 nvue list 组件不支持 click 事件的Bug [详情](https://ask.dcloud.net.cn/question/136754)
  + App-Android platform fixes the bug that the nvue list component does not support the click event [Details](https://ask.dcloud.net.cn/question/136754)
  + App-iOS平台 修复 nvue swiper-list 组件滚动条无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/136261)
  + App-iOS platform fixed the bug that the nvue swiper-list component scroll bar could not be hidden [Details](https://ask.dcloud.net.cn/question/136261)
  + H5平台 修复 右键单击事件 contextmenu 丢失 clientX、clientY 属性的Bug [详情](https://ask.dcloud.net.cn/question/136530)
  + H5 platform fixes the bug that the right-click event contextmenu loses the clientX and clientY attributes [Details](https://ask.dcloud.net.cn/question/136530)
  + 小程序平台 修复 模板中包含转义引号时在小程序开发工具中编译报错或显示异常的Bug
  + MiniApp platform fixes the bug of compiling an error or displaying an exception in the MiniApp development tool when escaping quotes are included in the template
  + 微信小程序平台 修复 多页面，组件内使用插槽数据时，差量编译丢失插槽信息的Bug [详情](https://ask.dcloud.net.cn/question/136258)
  + Wechat MiniApp platform fixes the bug of missing slot information in differential compilation when multiple pages are used in components. [Details](https://ask.dcloud.net.cn/question/136258)
* 【uniCloud】
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在临时表内使用 as 或其他运算操作 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + Added JQL syntax to use getTemp for joint table query, support using as or other operations in the temporary table [Details](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with- temp)
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在虚拟联表内使用 foreignKey 方法指定要使用的 foreignKey 的归属的字段 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + Added JQL syntax to use getTemp for join table query, support to use foreignKey method in the virtual join table to specify the attribution field of the foreignKey to be used [details](https://uniapp.dcloud.net.cn/uniCloud/jql ?id=lookup-with-temp)
  + 新增 web控制台 阿里云 前端网页托管支持为指定路径开启 uni-app history 路由跳转模式支持 [详情](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=routing)
  + Added support for web console Alibaba Cloud front-end web hosting to enable uni-app history routing jump mode support for specified paths [Details](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=routing)
  + 新增 uni-id 支持自定义国际化语言支持 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=custom-i8n)
  + Added uni-id support for custom internationalization language support [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=custom-i8n)
  + 修复 uni-id 一键登录时未校验重复手机号是否已验证的Bug
  + Fixed the bug that the repeated mobile phone number was not verified when the uni-id one-click login was not verified
  + 修复 uni-id Apple 登录时用户邮箱为空时报错的Bug
  + Fixed the bug that the user's mailbox was empty when the uni-id Apple login was reported.
  + 修复 uni-id 用户名密码登录时多个应用出现重复用户名登录报错的Bug
  + Fixed the bug that repeated user name login errors occurred in multiple applications when logging in with uni-id username and password
  + 修复 本地调试插件 打开非云函数根目录文件时使用运行菜单本地运行云函数报错的Bug
  + Fix the bug that when the local debugging plug-in opens a non-cloud function root directory file, use the run menu to run the cloud function locally and report an error
  + 修复 本地调试插件 部分情况下客户端连接启用了 JQL 扩展的本地云函数报错的Bug
  + Fixed the bug that the local debugging plugin reported an error when the client connected to the local cloud function with the JQL extension enabled in some cases
* 【App插件(含5+App和uni-app的App端)】
* [App plug-in (App end including 5+App and uni-app)]
  + 【重要】新增 Payment 模块支持 Paypal支付、Stripe支付、Google支付 [文档](https://uniapp.dcloud.io/app-payment)
  + [Important] Added Payment module to support Paypal payment, Stripe payment, Google payment [Documentation](https://uniapp.dcloud.io/app-payment)
  + 【重要】新增 Push 模块支持 Google推送 Firebase Cloud Push (FCM) [文档](https://uniapp.dcloud.io/app-push-fcm)
  + [Important] Added Push module to support Google Push Firebase Cloud Push (FCM) [documentation](https://uniapp.dcloud.io/app-push-fcm)
  + 【重要】新增 Statistic 模块支持 Google统计 [文档](https://uniapp.dcloud.io/app-statistic-google)
  + [Important] Added Statistic module to support Google statistics [documentation](https://uniapp.dcloud.io/app-statistic-google)
  + 新增 一键登录 支持 closeIcon 属性设置自定义关闭按钮图片 [文档](https://uniapp.dcloud.io/univerify)
  + Added one-click login to support closeIcon property to set custom close button image [documentation](https://uniapp.dcloud.io/univerify)
  + 更新 uni-AD 快手广告SDK Android为 3.3.20 版，iOS为 3.3.20 版；快手内容联盟SDK Android为 3.3.27 版， iOS为 3.3.27 版
  + Update uni-AD Kuaishou advertising SDK Android to version 3.3.20, iOS to version 3.3.20; Kuaishou content alliance SDK Android to version 3.3.27, iOS to version 3.3.27
  + Android平台 修复 调用 plus.runtime.restart 重启应用后 user-agent 会清空的Bug [详情](https://ask.dcloud.net.cn/question/136105)
  + Android platform fixed the bug that the user-agent would be cleared after calling plus.runtime.restart to restart the app [Details](https://ask.dcloud.net.cn/question/136105)
  + Android平台 修复 plus.downloader.enumerate 可能获取不到下载任务的Bug [详情](https://ask.dcloud.net.cn/question/137548)
  + Android platform fix the bug that plus.downloader.enumerate may not get the download task [Details](https://ask.dcloud.net.cn/question/137548)
  + Android平台 修复 一键登录 在部分 Android 8.0、8.1 设置无法弹出登录框的Bug
  + Android platform fixed the bug that one-click login could not pop up the login box in some Android 8.0 and 8.1 settings
  + Android平台 修复 一键登录 设置登录界面 logo 图片可能不生效的Bug
  + Android platform repaired the bug that one-click login, setting the logo picture on the login interface might not take effect
  + Android平台 修复 视频播放控件 VideoPlayer 设置 object-fit 属性可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/137150)
  + Android platform fixed the bug that the video playback control VideoPlayer setting object-fit attribute might not take effect [Details](https://ask.dcloud.net.cn/question/137150)
  + Android平台 修复 使用系统定位模块执行 watchPosition 后再执行 getCurrentPosition 可能失败的Bug [详情](https://ask.dcloud.net.cn/question/137586)
  + Android platform fixed the bug that may fail to execute getCurrentPosition after executing watchPosition using the system positioning module [Details](https://ask.dcloud.net.cn/question/137586)
  + Android平台 修复 Push模块 createMessage 在安卓系统8以下系统可能无法创建通知栏消息的Bug [详情](https://ask.dcloud.net.cn/question/137923)
  + Android platform fixes the bug that the Push module createMessage may not be able to create notification bar messages on systems below Android 8 [Details](https://ask.dcloud.net.cn/question/137923)
  + Android平台 修复 图片选择界面设置 crop 属性在部分手机和模拟器上可能引起黑屏崩溃的Bug [详情](https://ask.dcloud.net.cn/question/136969)
  + Android platform fixed the bug that setting the crop attribute on the image selection interface might cause a black screen crash on some phones and emulators [Details](https://ask.dcloud.net.cn/question/136969)
  + Android平台 修复 图片选择界面未勾选`原图`时图片方向可能发生变化的Bug [详情](https://ask.dcloud.net.cn/question/137358)
  + Android platform Fixed the bug that the direction of the picture may change when the "Original Picture" was not checked in the picture selection interface [Details](https://ask.dcloud.net.cn/question/137358)
  + iOS平台 修复 uni-AD 使用自定义 storyboard 时开屏广告底部应用图标、名称可能不显示的Bug
  + iOS platform fixes the bug that the app icon and name at the bottom of the App Open Ads may not be displayed when uni-AD uses a custom storyboard
* 【uni小程序SDK】
* 【uni MiniApp SDK】
  + 新增 小程序 wgt 资源文件支持加密 [文档](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=installWgt)
  + Added MiniApp wgt resource files to support encryption [documentation](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=installWgt)
  + Android平台 修复 不设置任何参数初始化小程序SDK可能会引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/137175)
  + Android platform fixes the bug that may cause a crash when initializing the MiniApp SDK without setting any parameters [Details](https://ask.dcloud.net.cn/question/137175)
  + Android平台 修复 启动使用 vue3 的小程序可能出现白屏的Bug
  + Android platform fixes the bug that a white screen may appear when starting an MiniApp using vue3
  + iOS平台 修复 小程序未开启后台运行，通过手势关闭小程序后快速打开小程序偶现崩溃的Bug
  + iOS platform repaired the bug that the MiniApp was not running in the background, and the MiniApp was closed by gestures and then quickly opened the bug that the MiniApp crashed occasionally
  + iOS平台 修复 在隐藏小程序的回调方法中再次打开同一小程序无效的Bug
  + iOS platform fixed the bug that reopening the same MiniApp was invalid in the callback method of the hidden MiniApp
  + iOS平台 修复 同时打开多个小程序 getCurrentPageUrl 获取当前显示的小程序页面路径不正确的Bug
  + iOS platform fixes the bug that getCurrentPageUrl is incorrect when multiple MiniApp are opened at the same time


#### 已归档的历史版本
#### Archived Historical Versions

[更多已归档版本的更新日志](release-note-alpha-archive.md)
[More changelog for archived releases](release-note-alpha-archive.md)

<md-virtual key="release-note-alpha"/>
