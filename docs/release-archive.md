#### 3.3.5.20211229
* 【uni-app】
  + App平台 修复 nvue 页面使用 scss/sass 时条件编译不生效的Bug
  + App platform Fix the bug that conditional compilation does not take effect when nvue page uses scss/sass
  + App平台 修复 vue3 项目 picker-view 组件报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3130)
  + App platform Fix the bug that the picker-view component of the vue3 project reports an error [Details](https://github.com/dcloudio/uni-app/issues/3130)
  + App-Android平台  修复 3.3.3 版本引出的 nvue video 组件全屏后 cover-view 在部分情况下排版不正确的Bug [详情](https://ask.dcloud.net.cn/question/137179)
  + App-Android platform Fix the bug that the cover-view typesetting is incorrect in some cases after the nvue video component brought out by version 3.3.3 is full-screen [Details](https://ask.dcloud.net.cn/question/137179)
  + 小程序平台 修复 vue3 项目 差量编译时组件模板内容被清空的Bug [详情](https://github.com/dcloudio/uni-app/issues/3122)
  + Mini Program Platform Fix the bug that the content of the component template is cleared during the differential compilation of the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3122)
  + 小程序平台 修复 vue3 项目 分包静态资源未复制到输出目录的Bug [详情](https://github.com/dcloudio/uni-app/issues/3123)
  + Mini Program Platform Fix the bug that the subpackage static resources of the vue3 project are not copied to the output directory [Details](https://github.com/dcloudio/uni-app/issues/3123)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 修复 targetSdkVersion 设置为 31 在 Android 12 设备可能无法安装的Bug [详情](https://ask.dcloud.net.cn/question/137233)
  + Android platform Fix the bug that targetSdkVersion is set to 31 and may not be installed on Android 12 devices [Details](https://ask.dcloud.net.cn/question/137233)

#### 3.3.4.20211228
* 【uni-app】
  + App平台 修复 nvue 页面使用 scss/sass 时条件编译不生效的Bug
  + App platform Fix the bug that conditional compilation does not take effect when nvue page uses scss/sass
  + App平台 修复 vue3 项目 input/textarea 组件使用 v-model 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3107)
  + App platform Fix the bug that v-model does not take effect in the input/textarea component of vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3107)
  + App-Android平台 修复 nvue input组件 maxlength 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/137031)
  + App-Android platform Fix the bug that the maxlength attribute of nvue input component does not take effect [Details](https://ask.dcloud.net.cn/question/137031)
  + App-Android平台 修复 3.3.3 版本引出的 nvue video 组件 cover-view 全屏后排版不正确的Bug [详情](https://ask.dcloud.net.cn/question/136812)
  + App-Android platform Fix the bug that the nvue video component cover-view caused by version 3.3.3 is incorrectly formatted after full screen [Details](https://ask.dcloud.net.cn/question/136812)
  + H5平台 修复 vue3 项目 在首页执行 reLaunch 时，首页内的组件未销毁的Bug [详情](https://github.com/dcloudio/uni-app/issues/3114)
  + H5 platform Fix the bug that the components in the home page are not destroyed when the vue3 project executes reLaunch on the home page [Details](https://github.com/dcloudio/uni-app/issues/3114)
  + 小程序平台 优化 运行时启用压缩代码后，移除代码注释，减少包体积大小
  + Mini Program Platform Optimization After enabling compressed code at runtime, remove code comments to reduce package size
  + 小程序平台 优化 vue3 项目 支持在页面 setup 中使用 onShareTimeline，onShareAppMessage，onPageScroll [详情](https://github.com/dcloudio/uni-app/issues/3097)
  + Mini Program Platform Optimize vue3 project Support use onShareTimeline, onShareAppMessage, onPageScroll in page setup [Details](https://github.com/dcloudio/uni-app/issues/3097)
  + 微信小程序平台 修复 vue3 项目 textarea 组件 input 事件在 iOS 平台不触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3090)
  + WeChat applet platform Fix the bug that the input event of the textarea component of the vue3 project does not trigger on the iOS platform [Details](https://github.com/dcloudio/uni-app/issues/3090)
  + 支付宝小程序平台 修复 vue3 项目 button 组件 getPhoneNumber 事件报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3116)
  + Alipay applet platform Fix the bug that the getPhoneNumber event of the button component of the vue3 project reports an error [Details](https://github.com/dcloudio/uni-app/issues/3116)
* 【uniCloud】
  + 修复 云函数JQL扩展库 使用 getTemp 联表查询时报错的Bug [详情](https://ask.dcloud.net.cn/question/137089)
  + Fix the bug that the cloud function JQL extension library uses the getTemp linked table query to report an error [Details](https://ask.dcloud.net.cn/question/137089)
  + 修复 uniCloud本地调试插件 启动调试服务时错误的提示集合未初始化的Bug
  + Fixed the bug that the uniCloud local debugging plugin was not initialized when the wrong prompt collection was started when the debugging service was started
  + 修复 multiSend 和 unicloud-db 组件搭配使用报错的Bug
  + Fix the bug of error when using multiSend and unicloud-db components together
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 修复 二维码扫码在部分设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/137114)
  + Android platform Fix the bug that QR code scanning may cause crashes on some devices [Details](https://ask.dcloud.net.cn/question/137114)

#### 3.3.3.20211225
* 【uni-app】
  + 【重要】小程序平台 优化 vue3 项目使用 vite 编译，提供更快的编译速度 [详情](https://ask.dcloud.net.cn/article/37834)
  + [Important] Mini Program Platform Optimize vue3 projects to compile with vite, providing faster compilation speed [Details](https://ask.dcloud.net.cn/article/37834)
  + 【重要】App平台 修复 uni.getLocation 参数 type 配置不生效的Bug [详情](https://ask.dcloud.net.cn/article/39552)
  + [Important] App platform to fix the bug that the uni.getLocation parameter type configuration does not take effect [Details](https://ask.dcloud.net.cn/article/39552)
  + 修复 vue3 项目 部分组合式 API 参数缺少类型的Bug [详情](https://github.com/dcloudio/uni-app/issues/3076#issuecomment-994557108)
  + Fix the bug of missing types for some combined API parameters in the vue3 project [Details](https://github.com/dcloudio/uni-app/issues/3076#issuecomment-994557108)
  + App平台、H5平台 新增 uni.request 支持 PATCH 方法
  + App platform, H5 platform Added uni.request to support PATCH method
  + App平台、H5平台 修复 swiper 组件开启衔接滑动点击指示器时切换问题 [详情](https://github.com/dcloudio/uni-app/issues/2985)
  + App platform, H5 platform Fix the switching problem when the swiper component opens the connection sliding click indicator [Details](https://github.com/dcloudio/uni-app/issues/2985)
  + App平台、H5平台 修复 vue2 项目缺失 uni.previewImage.cancel 国际化的Bug [详情](https://ask.dcloud.net.cn/question/136054)
  + App platform, H5 platform Fix the bug of missing uni.previewImage.cancel internationalization in vue2 project [Details](https://ask.dcloud.net.cn/question/136054)
  + App平台 优化 nvue 页面默认文字大小更改为 16px
  + App platform optimized nvue page default text size changed to 16px
  + App平台 优化 innerAudioContext 支持多个音频同时播放
  + App platform optimized innerAudioContext to support multiple audio playback at the same time
  + App平台 修复 vue3 项目使用 uni.canvasGetImageData 报错的Bug [详情](https://ask.dcloud.net.cn/question/134355)
  + App platform Fix the bug that the vue3 project uses uni.canvasGetImageData to report an error [Details](https://ask.dcloud.net.cn/question/134355)
  + App平台 修复 vue3 项目使用 uni.showLoading 方法在不调用 hideLoading 时会运行两秒左右自动关闭的Bug [详情](https://ask.dcloud.net.cn/question/135551)
  + App platform Fix the bug that the vue3 project will automatically close for about two seconds when the uni.showLoading method is used without calling hideLoading [Details](https://ask.dcloud.net.cn/question/135551)
  + App平台 修复 vue3 项目 开发期间页面热刷新不生效的Bug
  + App platform Fix the bug that the hot page refresh does not take effect during the development of the vue3 project
  + App平台 修复 vue3 项目 开发期间页面直达不生效的Bug
  + App platform Fix the bug that the page directly does not take effect during the development of the vue3 project
  + App平台 修复 vue3 项目 部分样式在低版本手机上不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3073)
  + App platform Fix the bug that some styles of vue3 project do not take effect on lower version mobile phones [Details](https://github.com/dcloudio/uni-app/issues/3073)
  + App-Android平台 修复 nvue input 组件 placeholder-class 样式中 font-size 不支持 rpx 单位的Bug [详情](https://ask.dcloud.net.cn/question/134764)
  + App-Android platform Fix the bug that the font-size in the placeholder-class style of the nvue input component does not support the rpx unit [Details](https://ask.dcloud.net.cn/question/134764)
  + App-Android平台 修复 uni.getBackgroundAudioManager 触发 seek、pause后再播放 onTimeUpdate 可能不触发的Bug [详情](https://ask.dcloud.net.cn/question/134439)
  + App-Android platform Fix the bug that uni.getBackgroundAudioManager triggers seek, pause and then play onTimeUpdate may not trigger [Details](https://ask.dcloud.net.cn/question/134439)
  + App-Android平台 修复 nvue waterfall/list 组件横竖屏切换导致滚动偏移位置回到顶部的Bug [详情](https://ask.dcloud.net.cn/question/135845)
  + App-Android platform Fix the bug that the nvue waterfall/list component switches between horizontal and vertical screens, causing the scroll offset position to return to the top [Details](https://ask.dcloud.net.cn/question/135845)
  + App-Android平台 修复 nvue input/textarea 组件使用中文输入法切换到英文时无法输入的Bug [详情](https://ask.dcloud.net.cn/question/133523)
  + App-Android platform Fix the bug that nvue input/textarea component cannot input when using Chinese input method to switch to English [Details](https://ask.dcloud.net.cn/question/133523)
  + App-Android平台 修复 nvue map 组件调用 addMarkers 设置 clear 参数不生效的Bug [详情](https://ask.dcloud.net.cn/question/132127)
  + App-Android platform Fix the bug that the clear parameter set by the nvue map component calling addMarkers does not take effect [Details](https://ask.dcloud.net.cn/question/132127)
  + App-Android平台 修复 nvue map 组件 marker 中 callout 首次显示位置可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/135351)
  + App-Android platform Fix the bug that the first display position of callout in the nvue map component marker may be incorrect [Details](https://ask.dcloud.net.cn/question/135351)
  + App-Android平台 修复 3.3.1 版本引出的 input 组件在执行 uni.chooseLocation 返回结果后可能无法获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/136394)
  + App-Android platform Fix the bug that the input component from version 3.3.1 may not get the focus after executing uni.chooseLocation to return the result [Details](https://ask.dcloud.net.cn/question/136394)
  + App-iOS平台 修复 nvue 页面固定横屏启动时 rpx 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/134971)
  + App-iOS platform Fix the bug that rpx is wrongly calculated when the nvue page is fixed in landscape orientation [Details](https://ask.dcloud.net.cn/question/134971)
  + App-iOS平台 修复 nvue rich-text 组件在页面中动态创建时可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/135136)
  + App-iOS platform Fix the bug that nvue rich-text components may crash when dynamically created in the page [Details](https://ask.dcloud.net.cn/question/135136)
  + App-iOS平台 修复 nvue map 组件当聚合簇中只有1个 marker 时，markertap 事件返回的 id 不正确的Bug [详情](https://ask.dcloud.net.cn/question/136245)
  + App-iOS platform Fix the bug that the id returned by the markerap event is incorrect when the nvue map component has only one marker in the aggregated cluster [Details](https://ask.dcloud.net.cn/question/136245)
  + H5平台 修复 map 组件 @callouttap 失效的Bug [详情](https://ask.dcloud.net.cn/question/134803)
  + H5 platform Fix the bug that the map component @callouttap fails [Details](https://ask.dcloud.net.cn/question/134803)
  + H5平台 新增 vue3 版本 page-meta 标签下支持浏览器原生head，方便进行 seo 优化 [详情](https://uniapp.dcloud.net.cn/component/page-meta?id=head)
  + H5 platform Added support for browser native head under the page-meta tag of vue3 version, which is convenient for seo optimization [Details](https://uniapp.dcloud.net.cn/component/page-meta?id=head)
  + H5平台 修复 vue3 项目 picker 组件无法动态赋值的Bug [详情](https://ask.dcloud.net.cn/question/135418)
  + H5 platform Fix the bug that the picker component of the vue3 project cannot be dynamically assigned [Details](https://ask.dcloud.net.cn/question/135418)
  + H5平台 修复 vue3 项目 uni.previewImage 长按按钮显示英文的Bug [详情](https://ask.dcloud.net.cn/question/135557)
  + H5 platform Fix vue3 project uni.previewImage long press the button to display the bug in English [Details](https://ask.dcloud.net.cn/question/135557)
  + H5平台 修复 vue3 项目 safe-area-inset-* css 变量失效的Bug [详情](https://ask.dcloud.net.cn/question/134249)
  + H5 platform Fix the bug that the safe-area-inset-* css variable of vue3 project is invalid [Details](https://ask.dcloud.net.cn/question/134249)
  + H5平台 修复 vue3 项目 运行至内置浏览器时，控制台日志输出没有文件行号的Bug
  + H5 platform Fix the bug that the console log output has no file line number when running the vue3 project to the built-in browser
  + H5平台 修复 vue3 项目 运行模式下热刷新报错的Bug
  + H5 platform Fix the bug of hot refresh error in vue3 project running mode
  + H5平台 修复 vue3 项目 发行模式下 rpx 不生效的Bug [详情](https://ask.dcloud.net.cn/question/136238)
  + H5 platform Fix the bug that rpx does not take effect in vue3 project release mode [Details](https://ask.dcloud.net.cn/question/136238)
  + H5平台 修复 vue3 项目 vite.config.js host 配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3083)
  + H5 platform Fix the bug that vue3 project vite.config.js host configuration does not take effect [Details](https://github.com/dcloudio/uni-app/issues/3083)
  + 小程序平台 修复 百度小程序 login 组件 @getphonenumber 无参数的问题 [详情](https://ask.dcloud.net.cn/question/130022)
  + Mini Program Platform Fix Baidu Mini Program login component @getphonenumber without parameters [Details](https://ask.dcloud.net.cn/question/130022)
* 【uniCloud】
  + 新增 支持云函数内使用 JQL 语法操作数据库的扩展库 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud)
  + Added an extension library that supports the use of JQL syntax in the cloud function to operate the database [Details](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud)
  + 新增 腾讯云redis
  + Added Tencent Cloud redis
  + 新增 批量短信 发送功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + Added batch SMS sending function [Details](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + 新增 uniCloud DB Schema 支持国际化 [详情](https://uniapp.dcloud.net.cn/collocation/i18n?id=schema)
  + Added uniCloud DB Schema to support internationalization [Details](https://uniapp.dcloud.net.cn/collocation/i18n?id=schema)
  + 修复 腾讯云 geoNear 聚合阶段 maxDistance、minDistance 参数无法正常生效的Bug
  + Fixed the bug that the maxDistance and minDistance parameters of Tencent Cloud geoNear aggregation stage could not take effect normally
  + 修复 app 端 nvue 页面无法连接本地云函数的Bug [详情](https://ask.dcloud.net.cn/question/135703)
  + Fix the bug that the nvue page on the app side cannot connect to the local cloud function [Details](https://ask.dcloud.net.cn/question/135703)
  + 修复 app 端使用腾讯云作为服务商时 在高版本 iOS 安装后第一次启动无法连接云函数的Bug [详情](https://ask.dcloud.net.cn/question/136725)
  + Fix the bug that the cloud function cannot be connected to the cloud function for the first time after the high version iOS is installed when using Tencent Cloud as the service provider on the app side [Details](https://ask.dcloud.net.cn/question/136725)
  + 修复 uniCloud本地调试插件 云函数内使用腾讯云自定义登录调用 createTicket 接口报错的Bug
  + Fixed the bug of calling the createTicket interface using Tencent Cloud custom login in the cloud function of the uniCloud local debugging plugin
  + 修复 clientDB getTemp 联表时部分情况下 where 方法无法正确筛选数据的Bug
  + Fixed the bug where the where method could not correctly filter data in some cases when clientDB getTemp was connected to the table
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 拍照和本地相册选择 crop 裁剪编辑图片支持 saveToAlbum 属性设置是否保存编辑后的图片到相册 [文档](https://www.html5plus.org/doc/zh_cn/camera.html#plus.camera.CameraCropStyles)
  + Added photos and local albums, select crop to crop and edit pictures, support saveToAlbum attribute to set whether to save the edited pictures to the album [document](https://www.html5plus.org/doc/zh_cn/camera.html#plus.camera. CameraCropStyles)
  + 新增 系统定位模块，无需商业授权 [详情](https://uniapp.dcloud.io/app/geolocation)
  + Added system location module, no commercial authorization required [Details](https://uniapp.dcloud.io/app/geolocation)
  + 优化 定位模块默认使用 wgs84 坐标系，优先使用系统定位
  + Optimization The positioning module uses the wgs84 coordinate system by default, and the system positioning is preferred
  + 新增 uni-AD 基础开屏广告支持 gif 图
  + Added uni-AD basic splash ads to support gifs
  + 新增 uni-AD 支持设置是否关闭个性化推荐功能 [文档](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setPersonalizedAd)
  + Added uni-AD support to set whether to turn off the personalized recommendation function [Documentation](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setPersonalizedAd)
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.431.1301 版，iOS为 4.13.31 版；今日头条穿山甲SDK iOS为 4.1.0.1 版；快手广告SDK Android为 3.3.19 版，iOS为 3.3.19 版；快手内容联盟SDK Android为 3.3.25 版， iOS为 3.3.25 版；Sigmob广告联盟SDK Android为 3.5.3 版，iOS为 3.5.0 版
  + Update the uni-AD Tencent Youlianghui SDK Android version 4.431.1301, iOS version 4.13.31; Toutiao Pangolin SDK iOS version 4.1.0.1; Kuaishou Advertising SDK Android version 3.3.19, iOS version 3.3.19 Kuaishou Content Alliance SDK Android version 3.3.25, iOS version 3.3.25; Sigmob Advertising Alliance SDK Android version 3.5.3, iOS version 3.5.0
  + 修复 微信分享场景参数 scene 默认值不正确的Bug
  + Fix the bug that the default value of scene parameter scene in WeChat sharing is incorrect
  + 【重要】Android平台 新增 支持未同意隐私政策模式，解决应用市场上架合规检测违反“App不得因用户不同意提供非必要个人信息，而拒绝用户使用其基本功能服务”问题 [详情](https://uniapp.dcloud.io/app-disagreemode)
  + [Important] The Android platform has added support for the non-agreement privacy policy mode, which solves the problem of violation of "Apps shall not refuse users to use their basic functions and services because users do not agree to provide non-essential personal information". [Details]( https://uniapp.dcloud.io/app-disagreemode)
  + Android平台 新增 云端打包支持配置 packagingOptions [文档](https://ask.dcloud.net.cn/article/94#packagingOptions)
  + Android platform added cloud packaging support to configure packagingOptions [document](https://ask.dcloud.net.cn/article/94#packagingOptions)
  + Android平台 更新 高德定位SDK为 5.6.1 版，高德地图SDK为 8.1.0 版；UniPush使用的个推SDK为 3.2.5.0 版，个推核心组件SDK为 3.1.6.0 版
  + Android platform update The AutoNavi positioning SDK is version 5.6.1, the AutoNavi map SDK is version 8.1.0; the Getui SDK used by UniPush is version 3.2.5.0, and the core component SDK of UniPush is version 3.1.6.0
  + Android平台 优化 录音保存为 mp3 格式的音质
  + Android platform optimization Save the audio quality in mp3 format
  + Android平台 修复 uni-AD 加载激励视频广告可能触发申请访问设备信息、读写手机存储等权限的Bug
  + Android platform Fixed bugs that loading rewarded video ads in uni-AD may trigger application for permission to access device information, read and write mobile phone storage, etc.
  + Android平台 修复 uni-AD 开屏广告部分情况下点击事件可能透传的Bug
  + Android platform Fix the bug that the click event may be transparently transmitted in some cases of the uni-AD open screen advertisement
  + Android平台 修复 3.2.13 版本引出的 更新UniPush使用的个推SDK导致出现App相同权限安装失败的Bug [详情](https://ask.dcloud.net.cn/question/135963)
  + Android platform Fix the bug caused by the 3.2.13 version update the personal push SDK used by UniPush, which caused the installation of the app with the same permissions to fail [Details](https://ask.dcloud.net.cn/question/135963)
  + Android平台 修复 视频播放控件 VideoPlayer 设置 objectFit 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/134278)
  + Android platform Fix the bug that the VideoPlayer setting objectFit may not take effect [Details](https://ask.dcloud.net.cn/question/134278)
  + Android平台 修复 视频播放控件 VideoPlayer 播放部分 rtsp 格式视频时加载进度条展示异常的Bug [详情](https://ask.dcloud.net.cn/question/135060)
  + Android platform Fix the video playback control VideoPlayer plays some rtsp format video loading progress bar display abnormal bug [Details](https://ask.dcloud.net.cn/question/135060)
  + Android平台 修复 直播推流 LivePusher 设置宽高为100%时视频流可能变形的Bug [详情](https://ask.dcloud.net.cn/question/135749)
  + Android platform Fix the bug that the video stream may be deformed when LivePusher sets the width and height to 100% [Details](https://ask.dcloud.net.cn/question/135749)
  + Android平台 修复 设置 targetSdkVersion 为 31 时本地相册选择图片压缩失败的Bug [详情](https://ask.dcloud.net.cn/question/134897)
  + Android platform Fix the bug that the local album fails to compress when the targetSdkVersion is set to 31 [Details](https://ask.dcloud.net.cn/question/134897)
  + Android平台 修复 二维码扫码 pdf417 码时竖向无法识别、识别中文字符为乱码的Bug
  + Android platform Fix the bug that the QR code cannot be recognized vertically when scanning the pdf417 code, and the Chinese characters are garbled
  + Android平台 修复 视频播放控件 VideoPlayer 在 Android8 以下设备动态切换 src 可能会导致黑屏的Bug [详情](https://ask.dcloud.net.cn/question/134171)
  + Android platform Fix the video playback control VideoPlayer dynamically switch src in devices below Android8 may cause a black screen bug [Details](https://ask.dcloud.net.cn/question/134171)
  + Android平台 修复 爱加密等安全检测平台报StrandHogg漏洞的Bug
  + Android platform Fixed the bug that security detection platforms such as AiEncrypt reported the StrandHogg vulnerability
  + 【重要】iOS平台 更新 云端打包环境 XCode 为 13.2.1 版、iOS SDK 为 15.2 版，解决提交 AppStore 审核报 ITMS-90901 警告的问题 [详情](https://ask.dcloud.net.cn/question/136405)
  + [Important] The iOS platform updates the cloud packaging environment XCode to version 13.2.1 and the iOS SDK to version 15.2 to solve the problem of submitting the AppStore audit report ITMS-90901 warning [Details](https://ask.dcloud.net.cn/ question/136405)
  + iOS平台 修复 uni-AD setSplashAd 关闭开屏广告可能不生效的Bug
  + iOS platform, fix the bug that uni-AD setSplashAd may not take effect when turning off the open screen ad
  + iOS平台 修复 uni-AD 后台切前台时开屏广告展示间隔时间设置无效及可能重复展示的Bug
  + For iOS platform, fix the bug that the display interval setting of open-screen advertisements is invalid and may be repeatedly displayed when the uni-AD background switches to the foreground
  + iOS平台 修复 plus.nativeUI.showWaiting 在暗黑模式下默认文字颜色不正确的Bug
  + iOS platform Fixed the bug that the default text color of plus.nativeUI.showWaiting was incorrect in dark mode
  + iOS平台 修复 二维码扫码 pdf417 码时识别中文字符为乱码的Bug
  + iOS platform Fix the bug that the Chinese characters are garbled when scanning the pdf417 code in the QR code
  + iOS平台 修复 本地相册选择进入编辑界面可能出现点击完成按钮无响应的Bug [详情](https://ask.dcloud.net.cn/question/135653)
  + iOS platform Fixed a bug that may cause no response after clicking the Finish button when selecting a local album to enter the editing interface [Details](https://ask.dcloud.net.cn/question/135653)
  + iOS平台 修复 拍照和本地相册选择 crop 裁剪编辑图片 resize 参数默认值不正确的Bug
  + iOS platform Fix the bug that the default value of the resize parameter is incorrect when selecting crop and editing pictures in photo and local albums
  + iOS平台 修复 uni原生插件 validArchitectures 配置不正确可能导致云端打包失败的Bug
  + iOS platform Fix the bug that the uni native plugin validArchitectures is incorrectly configured, which may cause cloud packaging to fail
* 【uni小程序SDK】
* [uni applet SDK]
  + Android平台 修复 在部分红米设备可能无法触发关闭小程序回调的Bug
  + Android platform fixed bug that some Redmi devices may not be able to trigger the callback to close the applet
  + Android平台 修复 手动安装wgt模式下不支持 vue3 的Bug
  + Android platform fix bug that does not support vue3 in manual installation wgt mode
  + Android平台 修复 热启动模式下直达页面参数不生效的Bug
  + For Android platform, fix the bug that the direct page parameter does not take effect in hot boot mode

#### 3.2.15.20211120
* 调整 uniCloud admin 改名为 uni-admin [详情](https://uniapp.dcloud.net.cn/uniCloud/admin)
* 【uni-app】
  + App平台、H5平台 新增 rich-text 组件支持 itemclick 事件 [详情](https://uniapp.dcloud.io/component/rich-text)
  + App platform, H5 platform Added rich-text component to support itemclick event [Details](https://uniapp.dcloud.io/component/rich-text)
  + App平台、H5平台 新增 uni.setClipboardData 支持配置是否弹出提示 [详情](https://uniapp.dcloud.io/api/system/clipboard?id=setclipboarddata)
  + App platform, H5 platform Added uni.setClipboardData to support configuration pop-up prompt [Details](https://uniapp.dcloud.io/api/system/clipboard?id=setclipboarddata)
  + App平台、H5平台 新增 异步触发 uni.chooseImage 时，会进入失败回调 [详情](https://ask.dcloud.net.cn/question/130768)
  + App platform, H5 platform newly added When uni.chooseImage is triggered asynchronously, it will enter the failure callback [Details](https://ask.dcloud.net.cn/question/130768)
  + App平台、H5平台 修复 picker-view 滚动时会触发页面下拉刷新的Bug [详情](https://ask.dcloud.net.cn/question/113718)
  + App platform, H5 platform Fix the bug that the page will be refreshed when the picker-view is scrolled [Details](https://ask.dcloud.net.cn/question/113718)
  + App平台、H5平台 修复 swiper 组件动态加载内容时，触摸造成显示异常的Bug [详情](https://ask.dcloud.net.cn/question/100684)
  + App platform, H5 platform Fix the bug that touch causes abnormal display when swiper component dynamically loads content [Details](https://ask.dcloud.net.cn/question/100684)
  + App平台 新增 NVUE map API poiSearchNearBy 支持 offset，poiKeywordsSearch 支持 offset、cityLimit [详情](https://uniapp.dcloud.net.cn/api/location/map?id=poisearchnearby)
  + App platform Added NVUE map API poiSearchNearBy supports offset, poiKeywordsSearch supports offset, cityLimit [Details](https://uniapp.dcloud.net.cn/api/location/map?id=poisearchnearby)
  + App平台 新增 cover 组件支持嵌套 [详情](https://uniapp.dcloud.io/component/cover-view?id=cover-view)
  + App platform added cover component to support nesting [Details](https://uniapp.dcloud.io/component/cover-view?id=cover-view)
  + App平台 新增 nvue 页面支持 dynamicRpx 配置，用于 rpx 适配屏幕大小动态变化 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + App platform Added support for dynamicRpx configuration on nvue pages for rpx to adapt to dynamic changes in screen size [Details](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + App平台 修复 在 slot 使用 v-for 无法渲染的Bug [详情](https://ask.dcloud.net.cn/question/130258)
  + App Platform Fix the bug that v-for cannot be rendered in slot [Details](https://ask.dcloud.net.cn/question/130258)
  + App平台 修复 editor 组件 a 标签 href 填写相对地址时渲染错误的Bug  [详情](https://github.com/dcloudio/uni-app/issues/2218)
  + App platform Fix the bug that the editor component a tag href renders the wrong bug when filling in the relative address [Details](https://github.com/dcloudio/uni-app/issues/2218)
  + App平台 修复 editor、rich-text 组件 img 本地路径图片渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/117245)
  + App platform Fix the bug that the editor, rich-text component img local path image rendering error [Details](https://ask.dcloud.net.cn/question/117245)
  + App-Android平台 修复 在 Android4.4 设备默认显示为英文的Bug
  + App-Android platform fix bug that the default display is English on Android4.4 devices
  + App-Android平台 修复 showTabBarRedDot 设置红点可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/134420)
  + App-Android platform Fix the bug that the red dot setting of showTabBarRedDot may not take effect [Details](https://ask.dcloud.net.cn/question/134420)
  + App-Android平台 修复 nvue web-view 组件网络请求与其它网络请求 user-agent 不一致的Bug
  + App-Android platform Fix the bug that nvue web-view component network request is inconsistent with other network request user-agent
  + App-Android平台 修复 nvue list 组件中 cell 过多导致排版错误，可能抛出错误日志或引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/133072)
  + App-Android platform Fix too many cells in the nvue list component, resulting in typesetting errors, which may throw error logs or cause crashes [Details](https://ask.dcloud.net.cn/question/133072)
  + App-Android平台 修复 nvue map 组件中 Marker 标签 rotate 属性旋转方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/133418)
  + App-Android platform Fix the bug that the rotate attribute of the Marker label in the nvue map component has an incorrect rotation direction [Details](https://ask.dcloud.net.cn/question/133418)
  + App-Android平台 修复 nvue waterfall 中 cell 组件横竖屏切换后可能出现排版不正常的Bug [详情](https://ask.dcloud.net.cn/question/133738)
  + App-Android platform Fix the bug that the layout of the cell component in nvue waterfall may be abnormal after switching between horizontal and vertical screens [Details](https://ask.dcloud.net.cn/question/133738)
  + App-Android平台 修复 subNvue 原生子窗体 style 样式设置 top 属性值后可能出现排版不正确的Bug [详情](https://ask.dcloud.net.cn/question/132913)
  + App-Android platform Fix the bug of incorrect typesetting after setting the top attribute value of the subNvue native subform style style [Details](https://ask.dcloud.net.cn/question/132913)
  + App-iOS平台 修复 editor 组件设置字体格式时，placeholder 显示异常的Bug [详情](https://ask.dcloud.net.cn/question/106127)
  + App-iOS platform Fix the bug that the placeholder displays abnormally when the editor component sets the font format [Details](https://ask.dcloud.net.cn/question/106127)
  + App-iOS平台 修复 uni.request 请求与其它网络请求 user-agent 不一致的Bug
  + App-iOS platform Fix the bug that the uni.request request is inconsistent with other network request user-agent
  + App-iOS平台 修复 nvue cover-view 组件样式可能存在异常的Bug
  + App-iOS platform to fix the bug that nvue cover-view component style may be abnormal
  + App-iOS平台 修复 nvue image 组件请求网络图片与其它网络请求 user-agent 不一致的Bug
  + App-iOS platform Fix the bug that the nvue image component requests network images that are inconsistent with other network requests user-agent
  + App-iOS平台 修复 nvue video 中 cover-view 组件的点击事件会透传到 video 中的Bug [详情](https://ask.dcloud.net.cn/question/132936)
  + App-iOS platform Fix the bug that the click event of the cover-view component in nvue video will be transparently transmitted to the video [Details](https://ask.dcloud.net.cn/question/132936)
  + App-iOS平台 修复 nvue map 组件设置 marker-callout-textAlign 属性为 center 不生效的Bug [详情](https://ask.dcloud.net.cn/question/133264)
  + App-iOS platform Fix the bug that the marker-callout-textAlign property of nvue map component does not take effect [Details](https://ask.dcloud.net.cn/question/133264)
  + H5平台 优化 map 组件 marker label 支持 borderWidth、borderColor、bgColor 等配置
  + H5 platform optimized map component marker label supports borderWidth, borderColor, bgColor and other configurations
  + H5平台 修复 使用 uni.setClipboardData 时，会出现文本框的Bug
  + H5 platform fixed bug of text box when using uni.setClipboardData
  + H5平台 修复 map 组件 marker label 坐标设置不生效的Bug [详情](https://ask.dcloud.net.cn/question/102514)
  + H5 platform Fix the bug that the map component marker label coordinate setting does not take effect [Details](https://ask.dcloud.net.cn/question/102514)
  + H5平台 修复 map 组件 marker callout 失效的Bug [详情](https://ask.dcloud.net.cn/question/133590)
  + H5 platform Fix the bug that the map component marker callout fails [Details](https://ask.dcloud.net.cn/question/133590)
  + H5平台 修复 vue3 项目 picker-view 组件显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/132418)
  + H5 platform Fix the bug that the picker-view component of the vue3 project displays incorrectly [Details](https://ask.dcloud.net.cn/question/132418)
  + 微信小程序平台、支付宝小程序平台 新增 小程序导出到插件 [详情](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html#%E5%AF%BC%E5%87%BA%E5%88%B0%E6%8F%92%E4%BB%B6)
  + WeChat applet platform, Alipay applet platform added applet export to plugin [details](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html#%E5%AF% BC%E5%87%BA%E5%88%B0%E6%8F%92%E4%BB%B6)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 一键登录 服务协议项样式支持 checkBoxSize 属性设置复选框大小 [详情](https://uniapp.dcloud.io/univerify)
  + Added one-click login service agreement item style support checkBoxSize property to set checkbox size [Details](https://uniapp.dcloud.io/univerify)
  + 新增 closePreviewImage 方法关闭预览图片界面 [规范](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.closePreviewImage)
  + Added the method closePreviewImage to close the preview image interface [Specification](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.closePreviewImage)
  + 更新 uni-AD 腾讯优量汇SDK Android为4.422.1292版；快手广告SDK Android为 3.3.17 版，iOS为 3.3.17 版；快手内容联盟SDK Android为 3.3.23 版；Sigmob广告联盟SDK Android为 3.5.1 版
  + Update uni-AD Tencent Youlianghui SDK Android version 4.422.1292; Kuaishou Advertising SDK Android version 3.3.17, iOS version 3.3.17; Kuaishou Content Alliance SDK Android version 3.3.23; Sigmob Advertising Alliance SDK Android for version 3.5.1
  + 【重要】Android平台 更新 云端打包默认 targetSdkVersion 为 28 [文档](https://ask.dcloud.net.cn/article/193#targetsdkversion)
  + [Important] The default targetSdkVersion of the Android platform update cloud package is 28 [document](https://ask.dcloud.net.cn/article/193#targetsdkversion)
  + Android平台 修复 上架某些应用市场审核检测可能检测到收集已安装应用列表行为的Bug
  + Android platform fix Some app market review detection may detect a bug that collects the list of installed apps
  + Android平台 修复 uploader 上传文件请求中 user-agent 不正确的Bug
  + Android platform fix the bug of incorrect user-agent in uploader upload file request
  + Android平台 修复 plus.os.language 获取系统语言可能不正确的Bug
  + Android platform Fix the bug that plus.os.language may be incorrect to get the system language
  + Android平台 修复 部分设备在静止情况下监听获取到的方向数据出现波动的Bug [详情](https://ask.dcloud.net.cn/question/132154)
  + Android platform Fix the bug that some devices monitor the obtained direction data when they are stationary [Details](https://ask.dcloud.net.cn/question/132154)
  + iOS平台 新增 云端打包支持生成符号表 dsym 文件 [详情](https://uniapp.dcloud.io/app/ios/dsym)
  + iOS platform Added support for cloud packaging to generate symbol table dsym files [Details](https://uniapp.dcloud.io/app/ios/dsym)
  + 【重要】iOS平台 修复 应用启动时间统计在网络服务异常时可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/article/39448)
  + [Important] iOS platform, fix the bug that the application startup time statistics may cause crashes when the network service is abnormal [Details](https://ask.dcloud.net.cn/article/39448)
  + iOS平台 更新 友盟统计SDK UMCommon 为 7.3.5 版，UMAPM 为 1.5.2 版
  + iOS platform update Umeng Statistics SDK UMCommon is version 7.3.5, UMAPM is version 1.5.2
  + iOS平台 修复 基础开屏广告可能重复显示的Bug
  + iOS platform to fix the bug that the basic open screen advertisement may be displayed repeatedly
  + iOS平台 修复 图片/视频选择界面中选择iCloud视频可能报错的Bug [详情](https://ask.dcloud.net.cn/question/133635)
  + iOS platform Fix the bug that may report an error when selecting iCloud video in the picture/video selection interface [Details](https://ask.dcloud.net.cn/question/133635)
  + iOS平台 修复 plus.navigator.getSignature 获取签名标识在应用通过 AppStore 或 Testflight 安装时 返回空值的Bug [详情](https://ask.dcloud.net.cn/question/133881)
  + iOS platform Fix the bug that plus.navigator.getSignature to get the signature ID returns a null value when the app is installed through AppStore or Testflight [Details](https://ask.dcloud.net.cn/question/133881)

#### 3.2.12.20211029
* 【uni-app】
  + App平台、H5平台 新增 支持设置动态配置 tabBarItem 显示隐藏 [详情](https://uniapp.dcloud.io/api/ui/tabbar?id=settabbaritem)
  + App platform, H5 platform Added support for setting dynamic configuration tabBarItem display and hide [Details](https://uniapp.dcloud.io/api/ui/tabbar?id=settabbaritem)
  + App平台、H5平台 新增 uni.showModal 支持配置是否显示输入框 [详情](https://uniapp.dcloud.io/api/ui/prompt?id=showmodal)
  + App platform, H5 platform Added uni.showModal support to configure whether to display the input box [Details](https://uniapp.dcloud.io/api/ui/prompt?id=showmodal)
  + App平台、H5平台 修复 vue3 项目 picker-view 组件部分情况下 value 错误的Bug [详情](https://ask.dcloud.net.cn/question/132545)
  + App platform, H5 platform Fix the bug that the value is wrong in some cases of the picker-view component of the vue3 project [Details](https://ask.dcloud.net.cn/question/132545)
  + App平台 新增 nvue map 组件 API MapContext.on [详情](https://uniapp.dcloud.net.cn/api/location/map?id=createmapcontext)
  + App platform Added nvue map component API MapContext.on [Details](https://uniapp.dcloud.net.cn/api/location/map?id=createmapcontext)
  + App-Android平台 修复 nvue scroll-view 组件设置 scroll-y 为 false 时引起横向滚动失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/1487)
  + App-Android platform Fix the bug that horizontal scrolling fails when the nvue scroll-view component sets scroll-y to false [Details](https://github.com/dcloudio/uni-app/issues/1487)
  + App-Android平台 修复 nvue textarea 组件设置 v-model 时使用手写输入法出现异常的Bug [详情](https://ask.dcloud.net.cn/question/122239)
  + App-Android platform Fix the bug that the handwriting input method is abnormal when the nvue textarea component is set to v-model [Details](https://ask.dcloud.net.cn/question/122239)
  + App-Android平台 修复 uni.setLocale 设置应用语言后无法正确获取系统语言的Bug
  + App-Android platform Fix the bug that the system language cannot be obtained correctly after setting the application language with uni.setLocale
  + App-Android平台 修复 nvue image 组件无法显示 webp 动图的Bug [详情](https://ask.dcloud.net.cn/question/132750)
  + App-Android platform Fix the bug that nvue image component cannot display webp animation [Details](https://ask.dcloud.net.cn/question/132750)
  + App-iOS平台 修复 nvue list 组件在 iOS15 设备上可能出现空白内容的Bug [详情](https://ask.dcloud.net.cn/question/131714)
  + App-iOS platform Fix the bug that the nvue list component may have blank content on iOS15 devices [Details](https://ask.dcloud.net.cn/question/131714)
  + App-iOS平台 修复 nvue map 组件 marker 的 label 属性值格式不正确时可能引起崩溃的Bug
  + App-iOS platform Fix the bug that may cause a crash when the label attribute value of the nvue map component marker is not in the correct format
  + App-iOS平台 修复 应用长时间后台运行再回到前台 tabbar 页面可能显示白屏的Bug
  + App-iOS platform Fix the bug that the app may display a white screen when the app runs in the background for a long time and then returns to the foreground tabbar page
  + App-iOS平台 修复 nvue textarea 组件 padding 样式显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/131761)
  + App-iOS platform Fix the bug that the padding style of nvue textarea component is not displayed correctly [Details](https://ask.dcloud.net.cn/question/131761)
  + App-iOS平台 修复 nvue list 中 header 组件在 iOS15 设备上存在默认 padding-top 的Bug [详情](https://ask.dcloud.net.cn/question/132524)
  + App-iOS platform Fix the bug of default padding-top in the header component in nvue list on iOS15 devices [Details](https://ask.dcloud.net.cn/question/132524)
  + H5平台 新增 支持配置和使用谷歌地图 [详情](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfigmaps)
  + H5 platform Added support for configuring and using Google Maps [Details](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfigmaps)
  + H5平台 修复 rich-text 组件 nodes 节点的 class 样式不生效的Bug  [详情](https://ask.dcloud.net.cn/article/36661)
  + H5 platform Fix the bug that the class style of the nodes node of the rich-text component does not take effect [Details](https://ask.dcloud.net.cn/article/36661)
  + 小程序平台 修复 使用 uniIDHasRole、uniIDHasPermission 报错的Bug [详情](https://ask.dcloud.net.cn/question/125165)
  + Mini Program Platform Fix the bug of using uniIDHasRole and uniIDHasPermission [Details](https://ask.dcloud.net.cn/question/125165)
  + 支付宝小程序平台 新增 默认启用小程序基础库 2.x 构建 [详情](https://uniapp.dcloud.net.cn/collocation/manifest?id=mp-alipay)
  + Alipay Mini Program Platform Added default enabled Mini Program base library 2.x build [Details](https://uniapp.dcloud.net.cn/collocation/manifest?id=mp-alipay)
  + 修复 unicloud-db 组件在某些情况下修改 page-size 无效的Bug [详情](https://github.com/dcloudio/uniCloud-admin/issues/8)
  + Fix the bug that the page-size of the unicloud-db component is invalid in some cases [Details](https://github.com/dcloudio/uniCloud-admin/issues/8)
  + 新增 Hello i18n 国际化示例项目 [详情](https://ext.dcloud.net.cn/plugin?id=6462)
  + Added Hello i18n internationalization example project [Details](https://ext.dcloud.net.cn/plugin?id=6462)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 更新 uni-AD 今日头条穿山甲广告SDK iOS为4.1.0.0版；Sigmob广告联盟SDK Android为3.4.1版，iOS为3.4.2版
  + Updated the uni-AD Toutiao Pangolin Advertising SDK for iOS to version 4.1.0.0; Sigmob Advertising Alliance SDK for Android to version 3.4.1 and iOS to version 3.4.2
  + 修复 geolocation 设置 timeout 参数时无法获取位置信息并且在控制报错的Bug
  + Fixed the bug that geolocation could not get location information and reported an error when setting the timeout parameter
  + Android平台 新增 屏幕亮度参数值 -1 支持设置应用屏幕亮度与系统屏幕亮度保持一致
  + Android platform Added screen brightness parameter value -1 to support setting the application screen brightness to be consistent with the system screen brightness
  + Android平台 更新 支付宝SDK为 15.8.03 版；高德地图SDK为 8.0.1 版，高德定位SDK为 5.5.0 版
  + Android platform update Alipay SDK is version 15.8.03; AutoNavi Map SDK is version 8.0.1, AutoNavi positioning SDK is version 5.5.0
  + Android平台 修复 previewImage 预览图片无法按照图片正确方向显示的Bug[详情](https://ask.dcloud.net.cn/question/131446)
  + Android platform Fix the bug that previewImage preview image cannot be displayed in the correct direction of the image [Details](https://ask.dcloud.net.cn/question/131446)
  + Android平台 修复 3.2.8 版本引出的 视频播放控件 VideoPlayer 不能播放 AES-128 模式 m3u8 视频的Bug [详情](https://ask.dcloud.net.cn/question/131768)
  + Android platform Fix the bug that the video playback control VideoPlayer introduced in version 3.2.8 cannot play m3u8 video in AES-128 mode [Details](https://ask.dcloud.net.cn/question/131768)
  + Android平台 修复 视频播放控件 VideoPlayer 不能播放 rtsp 视频的Bug [详情](https://ask.dcloud.net.cn/question/131816)
  + Fix the bug of video playback control VideoPlayer cannot play rtsp video on Android platform [Details](https://ask.dcloud.net.cn/question/131816)
  + Android平台 修复 视频播放控件 VideoPlayer 设置 objectFit 属性为 fill 时 poster 封面显示效果不正确的Bug [详情](https://ask.dcloud.net.cn/question/129760)
  + Android platform Fix the bug that the video player control VideoPlayer sets the objectFit property to fill and the poster cover display effect is incorrect [Details](https://ask.dcloud.net.cn/question/129760)
  + Android平台 修复 视频播放控件 VideoPlayer 在部分设备全屏显示可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/131547)
  + Android platform fix Video playback controls VideoPlayer may cause a crash when displayed in full screen on some devices [Details](https://ask.dcloud.net.cn/question/131547)
  + Android平台 修复 3.2.2 版本引出的 toast 提示框设置图标后无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/131445)
  + Android platform Fix the bug that the toast prompt box caused by version 3.2.2 cannot be displayed normally after setting the icon [Details](https://ask.dcloud.net.cn/question/131445)
  + Android平台 修复 uni-AD 开通增强广告在部分设备首次启动可能误报`应用的uni-AD业务状态异常（-9001）`提示的Bug
  + Android platform Fixed the bug that the uni-AD service status of the application is abnormal (-9001) may be falsely reported when the uni-AD activation enhanced advertisement is activated for the first time on some devices
  + Android平台 修复 上架某些应用市场审核检测可能误报存在收集安装列表行为的Bug [详情](https://ask.dcloud.net.cn/question/132948)
  + Android platform fix Some app market review and detection may falsely report a bug in the collection and installation list behavior [Details](https://ask.dcloud.net.cn/question/132948)
  + iOS平台 修复 wgt热更新资源后再整包覆盖安装 App 导致获取不到之前 storage 保存的数据的Bug
  + iOS platform Fixed the bug that the data saved in storage could not be obtained after wgt hot update resources and then install the app over the entire package
  + iOS平台 修复 sqlite 在页面关闭时可能会自动关闭数据库的Bug [详情](https://ask.dcloud.net.cn/question/131917)
  + iOS platform Fix the bug that sqlite may automatically close the database when the page is closed [Details](https://ask.dcloud.net.cn/question/131917)
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 poster 后点播放按钮封面消失后播放器可能出现黑屏的Bug [详情](https://ask.dcloud.net.cn/question/131740)
  + iOS platform Fix the video playback control VideoPlayer After setting the poster, click the play button and the cover disappears, and the player may have a black screen. [Details](https://ask.dcloud.net.cn/question/131740)
  + iOS平台 修复 显示模态弹窗如 actionSheet 引起系统状态栏文字颜色会自动变成黑色的Bug [详情](https://ask.dcloud.net.cn/question/132444)
  + iOS platform Fix the bug that the text color of the system status bar will automatically turn black when displaying modal pop-ups such as actionSheet [Details](https://ask.dcloud.net.cn/question/132444)
  + iOS平台 修复 打开悬浮红包广告可能引起崩溃或无法关闭广告页面的Bug [详情](https://ask.dcloud.net.cn/question/132543)
  + iOS platform Fix the bug that opening the floating red envelope advertisement may cause a crash or the advertisement page cannot be closed [Details](https://ask.dcloud.net.cn/question/132543)
  + iOS平台 修复 图片选择界面在 iOS15 设备上导航栏会显示白色的Bug [详情](https://ask.dcloud.net.cn/question/132528)
  + iOS platform Fix the bug that the navigation bar of the image selection interface will display a white bug on iOS15 devices [Details](https://ask.dcloud.net.cn/question/132528)

#### 3.2.9.20210927
* 【uni-app】
  + 【重要】新增 uni-app Vue3 版本 支持运行和发行到 App
  + [Important] Added uni-app Vue3 version to support running and publishing to App
  + 新增 uniapp 发行H5 支持以SSR方式发行 [详情](https://uniapp.dcloud.io/collocation/ssr)
  + Added uniapp distribution H5 to support SSR distribution [Details](https://uniapp.dcloud.io/collocation/ssr)
  + App平台、H5平台 新增 uni.getLocale、uni.setLocale、uni.onLocaleChange 接口，用于获取和设置应用语言 [详情](https://uniapp.dcloud.io/api/ui/locale)
  + App platform, H5 platform Added uni.getLocale, uni.setLocale, uni.onLocaleChange interfaces to get and set the application language [Details](https://uniapp.dcloud.io/api/ui/locale)
  + App平台、H5平台 修复 scroll-view 组件滚动过快时 scroll 事件回调返回信息不正确的Bug [详情](https://ask.dcloud.net.cn/question/128573)
  + App platform, H5 platform Fix the bug that the scroll event callback returns incorrect information when the scroll-view component scrolls too fast [Details](https://ask.dcloud.net.cn/question/128573)
  + App平台、H5平台 修复 canvas 组件 createPattern 方法无效的Bug [详情](https://ask.dcloud.net.cn/question/128793)
  + App platform, H5 platform Fix the bug that the createPattern method of the canvas component is invalid [Details](https://ask.dcloud.net.cn/question/128793)
  + App平台、H5平台 修复 canvas 组件 重复触发 resize 导致延迟绘图时 canvas 改变的Bug [详情](https://github.com/dcloudio/uni-app/issues/2847)
  + App platform, H5 platform Fix the bug of canvas component repeatedly triggering resize, causing the canvas to change during delayed drawing [Details](https://github.com/dcloudio/uni-app/issues/2847)
  + App平台 新增 uni.configMTLS 支持 https 请求配置自签名证书 [详情](https://uniapp.dcloud.io/api/request/request?id=configmtls)
  + App platform Added uni.configMTLS to support https request to configure self-signed certificate [Details](https://uniapp.dcloud.io/api/request/request?id=configmtls)
  + App平台 优化 nvue 页面排版机制，解决横竖屏切换可能引起页面显示不正常的Bug
  + App platform Optimize nvue page layout mechanism, solve the bug that the page display may be abnormal when switching between horizontal and vertical screens
  + App平台 修复 nvue 页面 rich-text 组件解析块元素出现多余换行的Bug [详情](https://ask.dcloud.net.cn/question/116518)
  + App platform Fix the bug of extra line breaks in the parsing block elements of the rich-text component of the nvue page [Details](https://ask.dcloud.net.cn/question/116518)
  + App平台 修复 3.2.2 引出的 uni.chooseImage 无法压缩拍照图像的Bug [详情](https://ask.dcloud.net.cn/question/129238)
  + App platform Fix the bug that uni.chooseImage can't compress photo images from 3.2.2 [Details](https://ask.dcloud.net.cn/question/129238)
  + App-Android平台 新增 nvue 页面适配支持折叠屏手机
  + App-Android platform added nvue page adaptation to support folding screen mobile phones
  + App-Android平台 修复 nvue 页面 text 组件 line-height 高度失真引起 picker-view 无法对齐的Bug [详情](https://ask.dcloud.net.cn/question/128610)
  + App-Android platform Fix the bug that the picker-view cannot be aligned due to the height distortion of the line-height of the text component of the nvue page [Details](https://ask.dcloud.net.cn/question/128610)
  + App-Android平台 修复 nvue 页面 list、swiper、waterfall 组件嵌套时，包含的 header 组件可能无法正常显示Bug [详情](https://ask.dcloud.net.cn/question/128578)
  + App-Android platform Fixed the bug that when the nvue page list, swiper and waterfall components are nested, the included header components may not display properly [Details](https://ask.dcloud.net.cn/question/128578)
  + App-iOS平台 修复 nvue 页面 textarea 组件的 blur 事件回调参数中缺少 cursor 属性数据的Bug [详情](https://ask.dcloud.net.cn/question/129023)
  + App-iOS platform Fix the bug that the cursor attribute data is missing in the blur event callback parameter of the textarea component of the nvue page [Details](https://ask.dcloud.net.cn/question/129023)
  + App-iOS平台 修复 nvue 页面 video 组件上方存在其他组件时可能引起显示错乱的Bug [详情](https://ask.dcloud.net.cn/question/129662)
  + App-iOS platform Fixed a bug that may cause confusion when there are other components above the video component of the nvue page [Details](https://ask.dcloud.net.cn/question/129662)
  + App-iOS平台 修复 uni.openDocument 部分情况下回调错误的Bug
  + App-iOS platform Fix the bug of callback error in some cases of uni.openDocument
  + App-iOS平台 修复 tabbar 设置选中项图片为 gif 时动画速度太慢的Bug [详情](https://ask.dcloud.net.cn/question/125824)
  + App-iOS platform Fix the bug that the animation speed is too slow when the tabbar set the selected item image as gif [Details](https://ask.dcloud.net.cn/question/125824)
  + App-iOS平台 修复 search 类型的 input 组件在 iOS15 默认显示搜索图标的Bug [详情](https://ask.dcloud.net.cn/question/129259)
  + App-iOS platform Fix the bug that the search type input component displays the search icon by default in iOS15 [Details](https://ask.dcloud.net.cn/question/129259)
  + H5平台 修复 导航栏 searchInput 输入框出现两个清空 icon 的Bug [详情](https://ask.dcloud.net.cn/question/129225)
  + H5 platform Fixed bugs with two empty icons in the searchInput input box of the navigation bar [Details](https://ask.dcloud.net.cn/question/129225)
  + H5平台 修复 titleNView 配置 type 为 transparent 时，float 为 left 的 button 不居中的Bug [详情](https://ask.dcloud.net.cn/question/129598)
  + H5 platform Fix the bug that the button whose float is left is not centered when the titleNView configuration type is transparent [Details](https://ask.dcloud.net.cn/question/129598)
  + 支付宝小程序平台 修复 uni.chooseImage 在模拟器上不返回 tempFiles 的Bug [详情](https://ask.dcloud.net.cn/question/128732)
  + Alipay applet platform to fix the bug that uni.chooseImage does not return tempFiles on the simulator [Details](https://ask.dcloud.net.cn/question/128732)
  + 字节小程序平台 修复 同名文件内引用同一个组件作用域插槽渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/127962)
  + Byte applet platform Fix the bug that the same name file references the same component scope slot rendering error [Details](https://ask.dcloud.net.cn/question/127962)
  + 字节小程序平台 修复 使用 .sync 更新父子组件间的值失效的Bug [详情](https://ask.dcloud.net.cn/question/127397)
  + Byte applet platform to fix the bug of using .sync to update the value between parent and child components. [Details](https://ask.dcloud.net.cn/question/127397)
  + 字节小程序平台 修复 部分事件无法触发的Bug [#2774](https://github.com/dcloudio/uni-app/issues/2774)
  + Byte applet platform to fix the bug that some events cannot be triggered [#2774](https://github.com/dcloudio/uni-app/issues/2774)
  + 支付宝小程序平台 新增 支持在 App.vue 文件内监听 onShareAppMessage 事件 [#2844](https://github.com/dcloudio/uni-app/pull/2844)
  + Added support for monitoring onShareAppMessage event in App.vue file in Alipay applet platform [#2844](https://github.com/dcloudio/uni-app/pull/2844)
  + QQ小程序平台 修复 真机运行报错的Bug [#2648](https://github.com/dcloudio/uni-app/issues/2648)
  + QQ applet platform to fix the bug of real machine running error [#2648](https://github.com/dcloudio/uni-app/issues/2648)
* 【uniCloud】
  + 【重要】clientDB 新增 支持使用 getTemp 对主表、副表过滤后再联表查询，大幅提升联表查询性能 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-with-temp)
  + [Important] clientDB has added support for using getTemp to filter the main table and the auxiliary table and then join the table query, which greatly improves the performance of the join table query [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id =lookup-with-temp)
  + uniCloud本地调试插件 修复 云函数日志 文件路径存在中文时无法点击跳转的Bug
  + uniCloud local debugging plug-in Fix the bug that the cloud function log file path cannot be clicked to jump when the file path exists in Chinese
  + uniCloud本地调试插件 修复 阿里云事务执行 updateAndReturn 报错的Bug
  + uniCloud local debugging plugin to fix the bug of Alibaba Cloud transaction execution updateAndReturn error
  + 本地调试插件 新增 设置启动调试参数（.hbuilderx/launch.json）关闭系统日志 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + Local debugging plugin Added Set startup debugging parameters (.hbuilderx/launch.json) to disable system log [Details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 本地调试插件 优化 公共模块查找逻辑，减少调试错误
  + Local debugging plugin Optimize common module search logic to reduce debugging errors
  + clientDB 新增 action 依赖公共模块的功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=common-for-action)
  + clientDB adds the function that actions depend on common modules [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=common-for-action)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 登录鉴权 支持Google登录和Facebook登录 [详情](http://ask.dcloud.net.cn/article/192)
  + Added login authentication to support Google login and Facebook login [Details](http://ask.dcloud.net.cn/article/192)
  + 新增 微信分享 支持打开微信客服功能 [规范](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService.openCustomerServiceChat)
  + Added WeChat Share to support opening WeChat customer service function [Specification](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService.openCustomerServiceChat)
  + 新增 uni-AD Sigmob广告联盟支持激励视频广告 [文档](https://uniapp.dcloud.io/api/a-d/rewarded-video)
  + Added support for rewarded video ads in the uni-AD Sigmob network [documentation](https://uniapp.dcloud.io/api/a-d/rewarded-video)
  + 更新 uni-AD 今日头条穿山甲广告SDK Android为4.0.0.1版；腾讯优量汇SDK Android为4.410.1280版，iOS为4.13.11版；快手广告SDK Android为3.3.14版，iOS为3.3.15.1版；快手内容联盟SDK Android为3.3.22版，iOS为3.3.23.1版
  + Update uni-AD Today's Toutiao Pangolin Advertising SDK Android version 4.0.0.1; Tencent Youlianghui SDK Android version 4.410.1280, iOS version 4.13.11; Kuaishou Advertising SDK Android version 3.3.14, iOS version 3.3. Version 15.1; Kuaishou Content Alliance SDK version 3.3.22 for Android and version 3.3.23.1 for iOS
  + 更新 微信SDK Android为6.7.9版，iOS为1.9.2版
  + Update WeChat SDK Android version 6.7.9, iOS version 1.9.2
  + 优化 uni-AD 基础开屏广告填充率
  + Optimize uni-AD basic open screen ad fill rate
  + 【重要】Android平台 新增 Android Support Library 升级迁移到 AndroidX
  + [Important] Added Android Support Library to Android platform and migrated to AndroidX
  + Android平台 新增 原生隐私政策提示框内容中的链接支持本地 html 页面地址 [详情](https://ask.dcloud.net.cn/article/36937)
  + Android platform Added the link in the content of the native privacy policy prompt box to support the local html page address [Details](https://ask.dcloud.net.cn/article/36937)
  + Android平台 更新 云端打包环境 compileSdkVersion 版本为 30，buildToolsVersion 版本为 29.0.3
  + Android platform update Cloud packaging environment compileSdkVersion version is 30, buildToolsVersion version is 29.0.3
  + Android平台 更新 友盟统计SDK为9.4.2版
  + Android platform update Umeng Statistics SDK is version 9.4.2
  + Android平台 优化 compressVideo 视频压缩性能，支持 resolution 参数
  + Android platform optimized compressVideo video compression performance, support resolution parameter
  + Android平台 修复 系统相册中存在大量图片时图片选择界面操作卡顿的Bug[详情](https://ask.dcloud.net.cn/question/130582)
  + Android platform Fix the bug that the picture selection interface is stuck when there are a lot of pictures in the system album [Details](https://ask.dcloud.net.cn/question/130582)
  + Android平台 修复 视频播放控件 VideoPlayer 在 Android11 设备播放视频可能崩溃的Bug [详情](https://ask.dcloud.net.cn/question/129108)
  + Android platform Fix the bug that the video playback control VideoPlayer may crash when playing video on Android11 devices [Details](https://ask.dcloud.net.cn/question/129108)
  + Android平台 修复 原生隐私政策提示框切换到横屏是显示异常的Bug [详情](https://ask.dcloud.net.cn/question/130403)
  + Android platform Fix the bug that the native privacy policy prompt box is displayed abnormally when switched to landscape [Details](https://ask.dcloud.net.cn/question/130403)
  + Android平台 修复 Orientation 方向传感器在部分平板设备可能无法方向信息的Bug
  + Android platform Fixed the bug that Orientation orientation sensor may not have orientation information on some tablet devices
  + Android平台 修复 图片选择不设置 sizeType 时默认不显示`原图`按钮，选择图片会进行压缩的Bug [详情](https://ask.dcloud.net.cn/question/129156)
  + Android platform Fix the bug that the `original image` button is not displayed by default when the sizeType is not set for the image selection, and the selected image will be compressed [Details](https://ask.dcloud.net.cn/question/129156)
  + Android平台 修复 图片选择界面设置 filter 为 video 时仍然显示`原图`按钮的Bug
  + Android platform, fix the bug that the `original image` button is still displayed when the filter is set to video in the image selection interface
  + iOS平台 优化 compressVideo 视频压缩速度
  + iOS platform optimized compressVideo video compression speed
  + iOS平台 修复 3.2.0 版本引出的 微信登录、分享、支付，QQ登录、分享在部分设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/129378)
  + iOS platform Fix the bug that WeChat login, sharing, payment, QQ login and sharing caused by version 3.2.0 may cause crashes on some devices [Details](https://ask.dcloud.net.cn/question/129378)
  + iOS平台 修复 一键登录 授权页面服务协议复选框不好点击的Bug [详情](https://ask.dcloud.net.cn/question/130881)
  + iOS platform Fix the bug that the service agreement checkbox on the one-click login authorization page is not easy to click [Details](https://ask.dcloud.net.cn/question/130881)
  + iOS平台 修复 二维码扫码在应用横屏模式时预览画面被旋转了的Bug [详情](https://ask.dcloud.net.cn/question/116187)
  + iOS platform Fix the bug that the preview screen is rotated when QR code scanning is applied in landscape mode [Details](https://ask.dcloud.net.cn/question/116187)
  + iOS平台 修复 视频播放控件 VideoPlayer 播放直播视频无法触发 timeupdate 事件的Bug [详情](https://ask.dcloud.net.cn/question/129955)
  + iOS platform Fix the bug that the video playback control VideoPlayer cannot trigger the timeupdate event when playing live video [Details](https://ask.dcloud.net.cn/question/129955)
  + iOS平台 修复 视频播放控件 VideoPlayer 可能无法正常播放m3u8视频流的Bug [详情](https://ask.dcloud.net.cn/question/129884)
  + Fix the bug of video playback control VideoPlayer may not play m3u8 video stream normally on iOS platform [Details](https://ask.dcloud.net.cn/question/129884)
  + iOS平台 修复 视频播放控件 VideoPlayer 视频带有方向属性时 poster 封面图会被旋转的Bug [详情](https://ask.dcloud.net.cn/question/129090)
  + iOS platform Fix the bug that the video player control VideoPlayer video with orientation attribute will rotate the poster cover image [Details](https://ask.dcloud.net.cn/question/129090)
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 objectFit 为 cover 时封面显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/127991)
  + iOS platform Fix the bug that the cover is displayed incorrectly when VideoPlayer sets objectFit to cover [Details](https://ask.dcloud.net.cn/question/127991)
  + iOS平台 修复 新浪分享模块在某些安全平台检测可能误报使用 UIWebview APIs 的Bug
  + iOS platform Fix the bug that the Sina sharing module may falsely report the use of UIWebview APIs in some security platforms
  + iOS平台 修复 二维码扫码部分图片可能无法识别的Bug
  + iOS platform Fix the bug that some pictures of QR code scanning may not be recognized
  + iOS平台 修复 在 iOS15 设备配置使用广告标识 IDFA 首次启动可能不弹 AppTrackingTransparency 权限框的Bug
  + iOS platform Fix the bug that the AppTrackingTransparency permission box may not pop up when the iOS15 device is configured to use the advertising identifier IDFA for the first time

#### 3.2.3.20210825
* 【uni-app】
  + App平台 修复 3.2.2 版本引出的资源重复编译的Bug [详情](https://ask.dcloud.net.cn/question/129157)
  + App platform Fixed the bug of repeated compilation of resources from version 3.2.2 [Details](https://ask.dcloud.net.cn/question/129157)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 更新 uni-AD 腾讯优量汇SDK Android为4.400.1270版，iOS为4.13.02版；快手广告SDK iOS为3.3.14版；快手内容联盟SDK iOS为3.3.22版
  + Update uni-AD Tencent Youlianghui SDK Android version 4.400.1270, iOS version 4.13.02; Kuaishou Advertising SDK iOS version 3.3.14; Kuaishou Content Alliance SDK iOS version 3.3.22
  + Android平台 修复 图片选择不设置 sizeType 时默认不显示`原图`按钮，选择图片会进行压缩的Bug [详情](https://ask.dcloud.net.cn/question/129156)
  + Android platform Fix the bug that the `original image` button is not displayed by default when the sizeType is not set for the image selection, and the selected image will be compressed [Details](https://ask.dcloud.net.cn/question/129156)
  + iOS平台 修复 3.2.2 版本引出的 微信登录、分享、支付，QQ登录、分享在部分设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/129378)
  + iOS platform Fix the bug that WeChat login, sharing, payment, QQ login and sharing may cause crashes on some devices caused by version 3.2.2 [Details](https://ask.dcloud.net.cn/question/129378)
  + iOS平台 修复 新浪分享模块在某些安全平台检测可能误报使用 UIWebview APIs 的Bug
  + iOS platform Fix the bug that the Sina sharing module may falsely report the use of UIWebview APIs in some security platforms

#### 3.2.2.20210818
* 【uni-app】
  + App平台、H5平台 新增 input 组件 type 支持 tel 类型
  + App platform, H5 platform new input component type supports tel type
  + App平台、H5平台 新增 input 组件支持 text-content-type 属性
  + App platform, H5 platform Added input component to support text-content-type attribute
  + App平台、H5平台 修复 3.1.22 版本引出的 scroll-view 组件下拉刷新失效的Bug
  + App platform, H5 platform Fix the bug that the scroll-view component pull-down refresh caused by version 3.1.22 is invalid
  + App-Andriod平台 优化 uni.chooseImage 图片选择界面增加`原图`按钮
  + App-Andriod platform optimized uni.chooseImage image selection interface added `original image` button
  + App-Android平台 修复 uni.saveFile 保存通过 uni.chooseImage 选择的图片在 Android11 设备上可能失败的Bug [详情](https://ask.dcloud.net.cn/question/128442)
  + App-Android platform Fix the bug that uni.saveFile may fail to save the image selected by uni.chooseImage on Android11 devices [Details](https://ask.dcloud.net.cn/question/128442)
  + App-iOS平台 修复 压缩后的视频无法通过 plus.io 接口操作的Bug
  + App-iOS platform Fix the bug that the compressed video cannot be operated through the plus.io interface
  + App-iOS平台 修复 nvue map 组件 marker 设置 label 的 bgColor 为透明值无效的Bug [详情](https://ask.dcloud.net.cn/question/126459)
  + App-iOS platform Fix the bug that the nvue map component marker sets the bgColor of the label to an invalid transparent value [Details](https://ask.dcloud.net.cn/question/126459)
  + App-iOS平台 修复 uni.chooseImage 图片选择界面`原图`按钮操作逻辑不正确的Bug
  + App-iOS platform fix the bug that the operation logic of the `original image` button in the uni.chooseImage image selection interface is incorrect
  + H5平台 优化 导航栏搜索框增加清除按钮
  + H5 platform optimization Add clear button to search box in navigation bar
  + 小程序平台 修复 作用域插槽内使用事件后默认使用新版作用域插槽编译模式的Bug [详情](https://ask.dcloud.net.cn/question/127297)
  + Mini Program Platform Fix the bug that the new version of the scope slot compilation mode is used by default after using events in the scope slot [Details](https://ask.dcloud.net.cn/question/127297)
  + 支付宝小程序平台 修复 部分内置组件事件当做自定义事件处理的Bug
  + Alipay applet platform fixed the bug that some built-in component events were treated as custom events
  + 【重要】 uniad广告的ad组件 支持h5平台  [详情](https://uniapp.dcloud.net.cn/component/ad)
  + [Important] The ad component of uniad ads supports h5 platform [Details](https://uniapp.dcloud.net.cn/component/ad)
  + 【重要】 uni ui 支持 vue3 [详情](https://ext.dcloud.net.cn/plugin?id=55)
  + [Important] uni ui supports vue3 [details](https://ext.dcloud.net.cn/plugin?id=55)
  + HBuilder官方预置项目全面支持 vue3，包括hello uni-app、hello uniCloud、uniCloud admin、uni-starter等
  + HBuilder official preset projects fully support vue3, including hello uni-app, hello uniCloud, uniCloud admin, uni-starter, etc.
  + 新增 VUE3 条件编译，方便一套代码同时兼容vue2和vue3 [详情](https://uniapp.dcloud.net.cn/platform?id=preprocessor)
  + Added VUE3 conditional compilation, which is convenient for a set of code to be compatible with both vue2 and vue3 [Details](https://uniapp.dcloud.net.cn/platform?id=preprocessor)
  + uni-ui uni-collapse 修复 由1.2.0版本引起的 change 事件返回 undefined 的Bug
  + uni-ui uni-collapse fix the bug that the change event returns undefined caused by version 1.2.0
  + uni-ui uni-collapse 优化 组件示例
  + uni-ui uni-collapse optimized component example
  + uni-ui uni-collapse 新增 组件折叠动画
  + uni-ui uni-collapse added component collapse animation
  + uni-ui uni-collapse 新增 value\v-model 属性 ，动态修改面板折叠状态
  + uni-ui uni-collapse Added value\v-model property to dynamically modify panel collapse state
  + uni-ui uni-collapse 新增 title 插槽 ，可定义面板标题
  + uni-ui uni-collapse Added title slot to define panel title
  + uni-ui uni-collapse 新增 border 属性 ，显示隐藏面板内容分隔线
  + uni-ui uni-collapse Added border property to show hidden panel content divider
  + uni-ui uni-collapse 新增 title-border 属性 ，显示隐藏面板标题分隔线
  + uni-ui uni-collapse added the title-border property to display the title divider of the hidden panel
  + uni-ui uni-collapse 修复 resize 方法失效的Bug
  + uni-ui uni-collapse fix the bug of invalid resize method
  + uni-ui uni-collapse 修复 change 事件返回参数不正确的Bug
  + uni-ui uni-collapse fix the bug that the parameter returned by the change event is incorrect
  + uni-ui uni-collapse 优化 H5、App 平台自动更具内容更新高度，无需调用 reszie() 方法
  + uni-ui uni-collapse optimization H5, App platform automatically more content update height, no need to call the reszie() method
  + uni-ui uni-data-checkbox 优化 在uni-forms组件，与label不对齐的问题
  + uni-ui uni-data-checkbox optimization In the uni-forms component, the problem of misalignment with the label
  + uni-ui uni-data-checkbox 修复 单选默认值为0不能选中的Bug
  + uni-ui uni-data-checkbox fix the bug that the default value of radio selection is 0 and cannot be selected
  + uni-ui uni-easyinput 优化 errorMessage 属性支持 Boolean 类型
  + uni-ui uni-easyinput optimized errorMessage property to support Boolean type
  + uni-ui uni-file-picker 修复 return-type为object下，返回值不正确的Bug
  + uni-ui uni-file-picker fix the bug of incorrect return value when return-type is object
  + uni-ui uni-file-picker 修复（重要） H5 平台下如果和uni-forms组件一同使用导致页面卡死的问题
  + uni-ui uni-file-picker fix (important) H5 platform if used together with uni-forms component will cause the page to freeze
  + uni-ui uni-file-picker 优化 h5平台下上传文件导致页面卡死的问题
  + uni-ui uni-file-picker Optimized the problem that uploading files on the h5 platform caused the page to freeze
  + uni-ui uni-forms 修复 vue2 下条件编译导致destroyed生命周期失效的Bug
  + uni-ui uni-forms Fix the bug that conditional compilation under vue2 causes the destroyed life cycle to fail
  + uni-ui uni-forms 修复 1.2.1 引起的示例在小程序平台报错的Bug
  + uni-ui uni-forms Fix the bug that the example caused by 1.2.1 reported an error on the applet platform
  + uni-ui uni-forms 修复 动态校验表单，默认值为空的情况下校验失效的Bug
  + uni-ui uni-forms Fix the bug of dynamic validation form, when the default value is empty, the validation fails
  + uni-ui uni-forms 修复 不指定name属性时，运行报错的Bug
  + uni-ui uni-forms fix the bug of running an error when the name attribute is not specified
  + uni-ui uni-forms 优化 label默认宽度从65调整至70，使required为true且四字时不换行
  + uni-ui uni-forms optimization The default label width is adjusted from 65 to 70, so that required is true and no line breaks are used when four characters are used
  + uni-ui uni-forms 优化 组件示例，新增动态校验示例代码
  + uni-ui uni-forms optimization component example, new dynamic verification example code
  + uni-ui uni-forms 优化 组件文档，使用方式更清晰
  + uni-ui uni-forms optimized component documentation, clearer usage
  + uni-ui uni-list 修复 与其他组件嵌套使用时，点击失效的Bug
  + uni-ui uni-list fix the bug of click invalid when nested with other components
  + uni-ui uni-swipe-action 修复 跨页面修改组件数据 ，导致不能滑动的问题
  + uni-ui uni-swipe-action fix the problem of not being able to swipe when modifying component data across pages
  + hello-uniapp 新增 同时适配 vue2 和 vue3（HBuilder X 3.2.0+ 支持 vue3）
  + hello-uniapp added to adapt to both vue2 and vue3 (HBuilder X 3.2.0+ supports vue3)
  + uniCloud admin 新增 同时适配 vue2 和 vue3（HBuilder X 3.2.0+ 支持 vue3）
  + uniCloud admin added support for both vue2 and vue3 (HBuilder X 3.2.0+ supports vue3)
  + uniCloud admin 新增 应用管理功能，管理用户可登录的应用，如某账户只能登录管理端、不能登录用户端（uni-id@3.3.1+ 支持）
  + uniCloud admin Added application management function to manage the applications that users can log in. For example, an account can only log in to the management terminal, but not the user terminal (uni-id@3.3.1+ support)
  + uniCloud admin 新增 升级系统管理 list 页的表格功能，支持数据排序、筛选、搜索等功能
  + uniCloud admin added the table function of upgrading the system management list page, supporting data sorting, filtering, searching and other functions
  + uniCloud admin 修复 刷新页面时，左侧菜单丢失高亮状态的 bug
  + uniCloud admin fix the bug that the left menu loses the highlighted state when the page is refreshed
  + uniCloud admin 修复 修改密码失败的 bug
  + uniCloud admin fix the bug that the password failed to change
  + 新增 插件市场 支持前端文件加密 限付费的云端一体项目类型的前端文件 [详情](https://ask.dcloud.net.cn/article/35408)
  + Added Plug-in Market Support front-end file encryption Limited payment for cloud-integrated project type front-end files [Details](https://ask.dcloud.net.cn/article/35408)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 一键登录 服务协议项样式支持设置复选框图标 [详情](https://uniapp.dcloud.io/univerify)
  + Added one-click login service agreement item style support setting checkbox icon [Details](https://uniapp.dcloud.io/univerify)
  + 优化 新浪微博 登录、分享 模块配置，去掉appsecret参数
  + Optimize the Sina Weibo login and share module configuration, remove the appsecret parameter
  + 修复 一键登录 应用横屏显示时打开一键登录页面UI显示异常的Bug [详情](https://ask.dcloud.net.cn/question/126597)
  + Fix one-click login. When the application is displayed in landscape orientation, the UI of the one-click login page is displayed abnormally [Details](https://ask.dcloud.net.cn/question/126597)
  + 【重要】Android平台 新增 androidPrivacy.json 文件配置隐私政策提示框 [详情](https://ask.dcloud.net.cn/article/36937)
  + [Important] Android platform added androidPrivacy.json file to configure privacy policy prompt box [Details](https://ask.dcloud.net.cn/article/36937)
  + Android平台 更新 uni-AD 今日头条穿山甲广告SDK为3.8.0.6版；腾讯优量汇广告SDK为4.380.1250版；快手广告联盟SDK为3.3.12版，快手内容联盟SDK为3.3.20版
  + Android platform update uni-AD Toutiao Pangolin Advertising SDK is version 3.8.0.6; Tencent Youlianghui Advertising SDK is version 4.380.1250; Kuaishou Advertising Alliance SDK is version 3.3.12, Kuaishou Content Alliance SDK is version 3.3.20
  + Android平台 更新 腾讯X5内核版本为 4.3.0.176_44076，解决在部分设备无法加载使用X5内核的问题
  + Android platform update Tencent X5 kernel version to 4.3.0.176_44076, solve the problem that X5 kernel cannot be loaded in some devices
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.2.0，个推核心组件SDK版本为3.1.2.0
  + Android platform update UniPush uses 3.2.2.0 of the Getui SDK, and 3.1.2.0 of the core components of Getui
  + Android平台 修复 3.1.22 版本引出的 template 原生隐私政策提示框内容过多时显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/127582)
  + Android platform Fix the bug that the template native privacy policy prompt box brought out by version 3.1.22 shows abnormally when there is too much content [Details](https://ask.dcloud.net.cn/question/127582)
  + Android平台 修复 3.1.19 版本引出的 UniPush 云端打包设置 GooglePlay(AAB) 渠道，getClientInfo 无法获取推送标识信息的Bug [详情](https://ask.dcloud.net.cn/question/127434)
  + Android platform Fix the bug that the GooglePlay(AAB) channel of the UniPush cloud package introduced by version 3.1.19 cannot be obtained by getClientInfo [Details](https://ask.dcloud.net.cn/question/127434)
  + Android平台 修复 3.1.19 版本引出的 直播推流 LivePusher 无法全屏预览的Bug [详情](https://ask.dcloud.net.cn/question/127987)
  + Android platform Fix the bug that LivePusher cannot preview in full screen caused by version 3.1.19 [Details](https://ask.dcloud.net.cn/question/127987)
  + Android平台 修复 5+App项目打包后提交华为应用市场审核会误报包含三方广告SDK的Bug [详情](https://ask.dcloud.net.cn/question/126498)
  + Android platform Fixed the bug that the 5+App project was packaged and submitted to the Huawei App Market for review, and a bug containing the third-party advertising SDK would be falsely reported [Details](https://ask.dcloud.net.cn/question/126498)
  + Android平台 修复 申请权限被用户拒绝后，引导用户跳转设置界面开启权限后返回应用依然无法获取权限的Bug [详情](https://ask.dcloud.net.cn/question/128369)
  + Android platform Fix the bug that after the application permission is rejected by the user, the user is guided to jump to the setting interface to open the permission and still cannot obtain the permission after returning to the application [Details](https://ask.dcloud.net.cn/question/128369)
  + Android平台 修复 页面中 input 标签 type 为 file 时，应用没有读写手机存储权限不会主动申请导致无法正常使用的Bug
  + Android platform fixed the bug that when the input tag type in the page is file, the application does not have the permission to read and write mobile phone storage and will not apply for it automatically, causing it to fail to be used normally.
  + Android平台 修复 VideoPlayer 播放带方向信息的视频源，暂停时显示方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/125783)
  + Android platform Fixed the bug that VideoPlayer played video sources with direction information and displayed incorrect direction when paused [Details](https://ask.dcloud.net.cn/question/125783)
  + Android平台 修复 VideoPlayer 播放部分视频源，暂停时可能显示黑边的Bug [详情](https://github.com/dcloudio/uni-app/issues/2779)
  + Android platform Fix VideoPlayer playing some video sources, may display a black border bug when paused [Details](https://github.com/dcloudio/uni-app/issues/2779)
  + Android平台 修复 LivePusher 推流设置的本地缓冲池过大导致延迟时间过长的Bug
  + For Android platform, fix the bug that the local buffer pool set by LivePusher is too large and the delay time is too long
  + iOS平台 更新 QQ 登录、分享SDK版本为V3.5.3；新浪微博 登录、分享SDK版本为3.3.1；微信 登录、分享、支付SDK版本为1.9.1
  + iOS platform update QQ login, sharing SDK version is V3.5.3; Sina Weibo login, sharing SDK version is 3.3.1; WeChat login, sharing, payment SDK version is 1.9.1
  + iOS平台 更新 UniPush 使用的个推SDK为2.5.10.0无IDFA版
  + iOS platform Update the personal push SDK used by UniPush to 2.5.10.0 without IDFA
  + iOS平台 修复 一键登录 设置服务协议复选框默认不勾选时授权按钮背景颜色显示不正确的Bug
  + iOS platform Fix the bug that the background color of the authorization button is displayed incorrectly when the one-click login setting service agreement checkbox is not checked by default
  + iOS平台 修复 Downloader 下载文件返回的请求头 Content-Range 数据为空时引起应用崩溃的Bug
  + iOS platform Fixed a bug that caused the application to crash when the Content-Range data returned by the Downloader to download a file was empty
  + iOS平台 修复 Downloader 下载文件名称出现乱码或包含特殊字符，导致保存文件无法读取的Bug
  + iOS platform Fix the bug that the downloaded file name of Downloader is garbled or contains special characters, resulting in the bug that the saved file cannot be read
  + iOS平台 修复 百度语音识别在用户拒绝录音权限时没有返回错误回调的Bug
  + iOS platform Fix the bug that Baidu speech recognition does not return an error callback when the user refuses the recording permission
  + iOS平台 修复 在 iOS14 设备使用 5G 网络可能引起崩溃的Bug
  + iOS platform Fix bug that may cause crash when using 5G network on iOS14 devices
* 【uniCloud】
  + 云数据库 新增 updateAndReturn 方法，可以更新并返回更新后的值（仅可在云函数中使用） [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=update-and-return)
  + Cloud database adds updateAndReturn method, which can update and return the updated value (only available in cloud functions) [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=update -and-return)
  + uniCloud本地调试插件 修复 部分情况下项目启动时报 npm 安装失败的Bug
  + uniCloud local debugging plugin Fix the bug that npm installation fails when the project starts in some cases
  + uni-id 新增 多系统（如管理端、用户端）的配置隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
  + uni-id Added configuration isolation for multiple systems (such as management and client) [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
  + uni-id 新增 多系统用户管理，如某账户只能登录管理端，不能登录用户端 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-user)
  + uni-id adds multi-system user management. For example, an account can only log in to the management side, but not the client side [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate- user)
    - 此版本升级需要开发者处理历史用户数据，请参考 [补齐用户dcloud_appid字段](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid)
    - This version upgrade requires developers to process historical user data, please refer to [Complete the user dcloud_appid field](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid)
  + uni-id 新增 QQ登录、注册相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=qq)
  + uni-id added QQ login and registration related functions [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=qq)
  + uni-id 调整 不再支持绑定手机、邮箱时不填验证码直接绑定
  + uni-id adjustment No longer supports binding mobile phone and email without filling in the verification code

#### 3.1.22.20210709
* 【uni-app】
  + 【重要】调整 App平台、H5平台 input 组件 number 类型在 iOS 平台改用仅数字键盘（九宫格），如需输入负数和小数请改用 digit 类型
  + [Important] Adjust the number type of the input component of the App platform and H5 platform to use only the numeric keyboard (nine squares) on the iOS platform. If you need to input negative numbers and decimals, please use the digit type instead
  + App平台、H5平台 修复 editor 组件 insertImage 多次触发 input 事件的Bug [详情](https://ask.dcloud.net.cn/question/124809)
  + App platform, H5 platform Fix the bug that the editor component insertImage triggers the input event multiple times [Details](https://ask.dcloud.net.cn/question/124809)
  + App平台、H5平台 修复 image 组件使用 transform 样式后，大小计算错误的Bug [详情](https://ask.dcloud.net.cn/question/125987)
  + App platform, H5 platform Fix the bug of wrong size calculation after the image component uses the transform style [Details](https://ask.dcloud.net.cn/question/125987)
  + App平台、H5平台 修复 scroll-view 下拉刷新错误触发的Bug [详情](https://ask.dcloud.net.cn/question/124430)
  + App platform, H5 platform Fix the bug triggered by scroll-view pull-down refresh error [Details](https://ask.dcloud.net.cn/question/124430)
  + App平台、H5平台 修复 input 组件同时设置 type=number 和 maxlength 时，部分情况 value 同步错误的Bug
  + App platform, H5 platform Fix the bug of incorrect value synchronization in some cases when the input component sets type=number and maxlength at the same time
  + App平台、H5平台 修复 textarea 组件设置 min-height 后高度异常的Bug
  + App platform, H5 platform Fix the bug of abnormal height after setting min-height of textarea component
  + App平台 新增 一键登录自定义按钮添加 provider 属性，用于动态生成 buttons 时区分按钮 [详情](https://uniapp.dcloud.io/univerify?id=用户点击一键登录自定义按钮)
  + Added a one-click login custom button on the App platform to add the provider attribute to differentiate buttons when dynamically generating buttons [Details](https://uniapp.dcloud.io/univerify?id=%E7%94%A8%E6% 88%B7%E7%82%B9%E5%87%BB%E4%B8%80%E9%94%AE%E7%99%BB%E5%BD%95%E8%87%AA%E5%AE% 9A%E4%B9%89%E6%8C%89%E9%92%AE)
  + App平台 新增 uni.chooseImage 支持 crop 裁剪配置 [详情](https://uniapp.dcloud.io/api/media/image?id=chooseimage)
  + App platform Added uni.chooseImage to support crop cropping configuration [Details](https://uniapp.dcloud.io/api/media/image?id=chooseimage)
  + App平台 新增 video 组件支持 header 配置 [详情](https://uniapp.dcloud.io/component/video)
  + App platform Added video component to support header configuration [Details](https://uniapp.dcloud.io/component/video)
  + App平台 新增 uni.showToast 接口 icon 支持 error 类型
  + App platform added uni.showToast interface icon to support error type
  + App平台 优化 nvue 页面中去除 display:flex 相关警告
  + App platform optimized nvue page to remove display:flex related warnings
  + App平台 优化 uni.chooseLocation 搜索结果按综合排序 [详情](https://ask.dcloud.net.cn/question/125044)
  + App platform Optimized uni.chooseLocation search results sorted by comprehensive [Details](https://ask.dcloud.net.cn/question/125044)
  + App-Android平台 优化 快速频繁操作应用启动/关闭可能出现白屏现象的问题
  + App-Android platform optimization The problem of white screen phenomenon may appear when the application is started/closed quickly and frequently
  + App-Android平台 修复 uni.request 请求 header 中设置自定义 content-type 会添加 charset 的Bug [详情](https://ask.dcloud.net.cn/question/123961)
  + App-Android platform Fix the bug that setting custom content-type in uni.request request header will add charset [Details](https://ask.dcloud.net.cn/question/123961)
  + App-Android平台 修复 uni.previewImage 长按保存图片可能失败的Bug [详情](https://ask.dcloud.net.cn/question/125357)
  + App-Android platform Fix the bug that uni.previewImage long press to save the image may fail [Details](https://ask.dcloud.net.cn/question/125357)
  + App-Android平台 修复 websocket 请求过多可能引起崩溃的Bug
  + App-Android platform Fix the bug that too many websocket requests may cause crashes
  + App-Android平台 修复 tabBar 列表项不设置 selectedIconPath 在部分手机可能引起`trying to use a recycled bitmap android.graphics.Bitmap`崩溃的Bug
  + App-Android platform Fix the bug that the tabBar list item does not set selectedIconPath which may cause the crash of `trying to use a recycled bitmap android.graphics.Bitmap` on some mobile phones
  + App-Android平台 修复 nvue 页面 webview 组件设置 background 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/117845)
  + App-Android platform Fix the bug that the background property of the webview component of the nvue page does not take effect [Details](https://ask.dcloud.net.cn/question/117845)
  + App-Android平台 修复 nvue 页面 video 组件暂定播放后可能出现黑边的Bug [详情](https://ask.dcloud.net.cn/question/124152)
  + App-Android platform Fix the bug that black border may appear after the video component of nvue page is tentatively played [Details](https://ask.dcloud.net.cn/question/124152)
  + App-Android平台 修复 nvue 页面 swiper 组件嵌套 list 组件时 source 信息错误的Bug [详情](https://ask.dcloud.net.cn/question/121039)
  + App-Android platform Fix the bug that the source information is wrong when the swiper component of the nvue page nests the list component [Details](https://ask.dcloud.net.cn/question/121039)
  + App-iOS平台 修复 调用 uni.hideKeyboard 后点击页面任意位置 input 组件自动聚焦的Bug [详情](https://ask.dcloud.net.cn/question/125233)
  + App-iOS platform Fix the bug that the input component auto-focuses when clicking anywhere on the page after calling uni.hideKeyboard [Details](https://ask.dcloud.net.cn/question/125233)
  + App-iOS平台 修复 nvue 页面 textarea 组件不设置 padding 时 placeholder 显示位置不正常的Bug [详情](https://ask.dcloud.net.cn/question/122376)
  + App-iOS platform Fix the bug that the placeholder display position is abnormal when the textarea component of nvue page does not set padding [Details](https://ask.dcloud.net.cn/question/122376)
  + App-iOS平台 修复 iOS14.6 键盘弹出卡顿的Bug [详情](https://ask.dcloud.net.cn/question/125870)
  + App-iOS platform Fix the bug that the iOS14.6 keyboard pops up and freezes [Details](https://ask.dcloud.net.cn/question/125870)
  + H5平台 修复 input 组件设置 confirm-type 为 search 时，无法自动获取焦点的Bug
  + H5 platform Fix the bug that the input component cannot automatically get the focus when confirm-type is set to search
  + 小程序平台 优化 作用域插槽内支持使用作用域外数据 [#495](https://github.com/dcloudio/uni-app/issues/495)
  + Mini Program platform optimization Supports the use of out-of-scope data in scoped slots [#495](https://github.com/dcloudio/uni-app/issues/495)
  + 小程序平台 修复 v-for 中含有复杂表达式时，事件接收的 item 参数错误的Bug
  + Mini Program Platform Fix the bug that the item parameter received by the event is wrong when the v-for contains complex expressions
  + 小程序平台 修复 部分数值变更无法更新的Bug [#2696](https://github.com/dcloudio/uni-app/issues/2696)
  + Mini Program Platform Fix the bug that some value changes cannot be updated [#2696](https://github.com/dcloudio/uni-app/issues/2696)
  + 百度小程序平台 修复 基础库 3.290.33 以上页面 mounted 执行两次的Bug [#2642](https://github.com/dcloudio/uni-app/issues/2642)
  + Baidu applet platform to fix the bug that the base library 3.290.33 and above pages are mounted twice [#2642](https://github.com/dcloudio/uni-app/issues/2642)
  + 百度小程序平台 修复 使用 usingComponents 后代码上传报错的Bug [#2652](https://github.com/dcloudio/uni-app/issues/2652)
  + Baidu applet platform to fix the bug of code upload error after using usingComponents [#2652](https://github.com/dcloudio/uni-app/issues/2652)
  + 百度小程序平台 修复 部分 class 写法编译后失效的Bug
  + Baidu applet platform to fix some bugs that fail after compiling class writing
  + 支付宝小程序平台 优化 支持 useDynamicPlugins 配置 [详情](https://ask.dcloud.net.cn/article/39114)
  + Alipay applet platform optimization Support useDynamicPlugins configuration [Details](https://ask.dcloud.net.cn/article/39114)
  + QQ小程序 修复 默认启用 nodeModules 导致作用域插槽编译后运行报错的Bug
  + QQ applet fix the bug that nodeModules is enabled by default, which causes an error to run after the scope slot is compiled
  + 字节小程序平台 修复 基础库 2.0 以上组件关系错乱的Bug [#2651](https://github.com/dcloudio/uni-app/issues/2651)
  + Byte applet platform Fix the bug that the relationship between the components of the basic library above 2.0 is disordered [#2651](https://github.com/dcloudio/uni-app/issues/2651)
  + 字节小程序平台 修复 新版开发者工具中 uni.request 发送请求失败的Bug
  + Byte applet platform to fix the bug that uni.request failed to send request in the new version of developer tools
* 【uniCloud】
  + 【重要】云函数支持创建时选择 nodejs 版本 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=runtime)
  + [Important] Cloud functions support select nodejs version when creating [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=runtime)
  + 新增 内容安全公共模块，包含图片鉴黄、文字内容违规检测，免费且全端可用 [详情](https://ext.dcloud.net.cn/plugin?id=5460)
  + New content security public module, including image pornography, text content violation detection, free and available on all sides [Details](https://ext.dcloud.net.cn/plugin?id=5460)
  + 新增 uniCloud响应体规范，方便前端拦截器统一处理、方便国际化 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-response-format)
  + Added uniCloud response body specification to facilitate unified processing by front-end interceptors and facilitate internationalization [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-response-format)
  + clientDB 新增 multiSend 接口，用于多个clientDB联网请求合并为一次联网 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + clientDB adds multiSend interface, which is used to combine multiple clientDB networking requests into one networking [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + unicloud-db组件和API 新增 getTemp 接口，用于在 multiSend 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + Added getTemp interface to unicloud-db component and API for use in multiSend [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + JQL数据库管理 修复 部分情况下执行数据库操作无响应的Bug
  + JQL database management Fix the bug that the database operation does not respond in some cases
  + uni-id 调整 3.1.1版本发布，使用兼容 uniCloud 响应体规范的新错误码格式 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
  + uni-id adjustment Version 3.1.1 is released, using a new error code format compatible with the uniCloud response body specification [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
  + uniCloud本地调试插件 修复 部分情况下出现 MaxListenersExceededWarning 警告的Bug
  + uniCloud local debugging plug-in Fix the bug of MaxListenersExceededWarning warning in some cases
  + uniCloud本地调试插件 修复 项目内存在项目外文件的软链时，修改无法实时生效的Bug
  + uniCloud local debugging plug-in Fix the bug that the modification cannot take effect in real time when there is a soft chain of files outside the project in the project
  + 客户端 新增 添加拦截器、移除拦截器API [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=add-interceptor)
  + Client Added Add Interceptor, Remove Interceptor API [Details](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=add-interceptor)
  + 客户端 修复 HBuilderX 3.1.17 引出的 db.on("error") 回调不执行的Bug
  + Client fix the bug that the db.on("error") callback caused by HBuilderX 3.1.17 is not executed
  + 客户端 修复 leftWindow、topWindow 中使用 uniCloud 腾讯云报错的Bug [详情](https://ask.dcloud.net.cn/question/125039)
  + Client Fix bug in leftWindow and topWindow that use uniCloud Tencent Cloud to report errors [Details](https://ask.dcloud.net.cn/question/125039)
  + 客户端 修复 nvue 页面无法触发 App.vue 内注册的 db.on('error')、db.on('refreshToken') 等回调的Bug
  + Client fix bug that nvue page cannot trigger callbacks such as db.on('error') and db.on('refreshToken') registered in App.vue
  + DB Schema 调整 enum 属性最大可枚举500条数据
  + DB Schema adjusts the enum attribute to enumerate up to 500 pieces of data
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 拍照和本地相册选择 支持设置 crop 裁剪编辑图片 [规范](https://www.html5plus.org/doc/zh_cn/camera.html#plus.camera.CameraOptions)
  + Added photo and local album selection Support setting crop, crop and edit pictures [Specification](https://www.html5plus.org/doc/zh_cn/camera.html#plus.camera.CameraOptions)
  + 新增 视频播放控件 VideoPlayer 播放http/https协议视频资源时支持设置请求的 header [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + Added video playback control VideoPlayer supports setting request headers when playing http/https protocol video resources [Specification](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + 新增 登录鉴权服务对象支持 nativeClient 属性标识依赖的客户端App是否已安装 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.nativeClient)
  + Added support for the login authentication service object to support the nativeClient attribute to identify whether the dependent client app has been installed [Specification](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.nativeClient)
  + 更新 uni-AD 穿山甲SDK Android为3.7.0.2版；快手广告联盟SDK Android为3.3.10.2版，iOS为3.3.10版；快手内容联盟SDK Android为3.3.18.1版，iOS为3.3.19版；腾讯优量汇SDK iOS为4.12.71版
  + Update uni-AD Pangolin SDK Android to 3.7.0.2; Kuaishou Advertising Alliance SDK Android 3.3.10.2, iOS 3.3.10; Kuaishou Content Alliance SDK Android 3.3.18.1, iOS 3.3.19; Tencent Youlianghui SDK iOS is version 4.12.71
  + Android平台 更新 LivePusher 直播推流模块基于开源项目[yasea](https://github.com/begeekmyfriend/yasea)，支持 srs4.x
  + Android platform update LivePusher live streaming module based on open source project [yasea](https://github.com/begeekmyfriend/yasea), support srs4.x
  + Android平台 优化 通知栏操作逻辑，解决提交 Google Play 审核可能提示 Implicit PendingIntent Vulnerability 的问题 [详情](https://ask.dcloud.net.cn/question/126207)
  + Android platform optimized the operation logic of the notification bar to solve the problem that Implicit PendingIntent Vulnerability may be prompted when submitting Google Play review [Details](https://ask.dcloud.net.cn/question/126207)
  + Android平台 优化 template 原生隐私政策提示框UI样式
  + Android platform optimized template native privacy policy prompt box UI style
  + Android平台 修复 template 原生隐私政策提示框点击同意按钮前可能读取设备标识的Bug
  + Android platform Fix the bug that the device logo may be read before clicking the agree button in the template native privacy policy prompt box
  + Android平台 修复 手机语言设置为阿拉伯文后无法操作页面返回的Bug [详情](https://ask.dcloud.net.cn/question/124914)
  + Android platform Fix the bug that the page cannot be returned after the phone language is set to Arabic [Details](https://ask.dcloud.net.cn/question/124914)
  + Android平台 修复 H5页面中 intent:// 协议无法拉起三方App的Bug [详情](https://ask.dcloud.net.cn/question/124597)
  + Android platform Fix the bug that the intent:// protocol in the H5 page cannot pull up the third-party App [Details](https://ask.dcloud.net.cn/question/124597)
  + Android平台 修复 云端打包 提交 Google Play 审核提示包含无法识别的语言的Bug [详情](https://ask.dcloud.net.cn/question/125203)
  + Android platform fix Cloud packaging Submit the bug that Google Play review prompt contains unrecognized language [Details](https://ask.dcloud.net.cn/question/125203)
  + Android平台 修复 getVideoInfo 方法调用无响应的Bug [详情](https://ask.dcloud.net.cn/question/122739)
  + Android platform Fix the bug that the getVideoInfo method call is unresponsive [Details](https://ask.dcloud.net.cn/question/122739)
  + Android平台 修复 3.1.14版本引出的 微博登录取消授权后再次调用无响应的Bug [详情](https://ask.dcloud.net.cn/question/125273)
  + Android platform Fixed the bug that the Weibo login caused by version 3.1.14 did not respond after the authorization was cancelled [Details](https://ask.dcloud.net.cn/question/125273)
  + Android平台 修复 targetSdkVersion 设置为 30 在部分 Android 11 设备可能无法正常拉起支付App的Bug
  + For Android platform, fix targetSdkVersion set to 30, some Android 11 devices may not be able to properly pull up the bug of the payment app
  + Android平台 修复 getFileInfo 在 Android11 设备上可能无法正常获取文件信息的Bug [详情](https://ask.dcloud.net.cn/question/124440)
  + Android platform Fix the bug that getFileInfo may not get file information normally on Android11 devices [Details](https://ask.dcloud.net.cn/question/124440)
  + Android平台 修复 storage 数据存储键值 key 中包含特殊字符时可能存取失败的Bug
  + Android platform, fix the bug that the storage data storage key value may fail to access when the key contains special characters
  + iOS平台 新增 安全区域配置 safearea 支持 backgroundDark 属性设置暗黑模式的背景颜色 [详情](https://ask.dcloud.net.cn/article/36995#safearea)
  + iOS platform Added safe area configuration safearea supports backgroundDark property to set the background color of dark mode [Details](https://ask.dcloud.net.cn/article/36995#safearea)
  + iOS平台 更新 云端打包环境为XCode12.5.1，解决在 iOS15 设备无法安装的Bug
  + iOS platform update Cloud packaging environment is XCode12.5.1, solve the bug that cannot be installed on iOS15 devices
  + iOS平台 更新 视频播放控件 VideoPlayer 使用的 FFmpeg 版本为 ff4.0--ijk0.8.8--20210426--001
  + iOS platform update Video playback control VideoPlayer uses FFmpeg version ff4.0--ijk0.8.8--20210426--001
  + iOS平台 修复 uni-AD 开屏广告在部分应用中可能引起曝光率较低的Bug
  + iOS platform Fix the bug that the uni-AD opening screen advertisement may cause low exposure in some applications
  + iOS平台 修复 uni-AD 应用从后台切换到前台开屏广告可能被其它界面覆盖的Bug
  + iOS platform Fix the bug that the uni-AD app may be covered by other interfaces when switching from the background to the foreground.
  + iOS平台 修复 uni-AD 显示穿山甲开屏广告时在部分手机上可能`跳过`按钮无法点击的Bug
  + iOS platform Fix the bug that the `skip` button may not be clickable on some mobile phones when uni-AD displays the pangolin open screen advertisement
  + iOS平台 修复 plus.sqlite.isOpenDatabase 不传入参数可能引起卡死或崩溃的Bug [详情](https://ask.dcloud.net.cn/question/114091)
  + iOS platform Fix the bug that plus.sqlite.isOpenDatabase may get stuck or crash without passing parameters [Details](https://ask.dcloud.net.cn/question/114091)
  + iOS平台 修复 Geolocation 定位模块在用户未授权或设备关闭定位功能时返回错误码与规范不一致的Bug
  + iOS platform Fix the bug that the Geolocation positioning module returns an error code inconsistent with the specification when the user is not authorized or the device turns off the positioning function
  + iOS平台 修复 在部分情况下 WKWebView 同步共享 cookie 可能引起崩溃的Bug
  + iOS platform Fix the bug that WKWebView may cause crash when synchronizing shared cookies in some cases
* 【UniMPSDK】
  + iOS平台 修复 push 方式打开小程序手势返回关闭后偶现无法再次打开小程序页面的Bug
  + iOS platform Fixed the bug that the applet page could not be opened again after the push method to open the applet gesture returned to close
  + iOS平台 修复 动态设置 titleNView 样式后可能导致胶囊菜单按钮弹出的 actionSheet 部分 item 显示空白的Bug
  + For iOS platform, fix a bug that may cause the item in the actionSheet part of the capsule menu button to display a blank bug after dynamically setting the titleNView style

#### 3.1.17.20210608
* 【uniCloud】
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + [Important] To adjust the query strategy of clientDB linked table, please refer to this document for troubleshooting and adjustment: [Adjustment of clientDB linked table query strategy](https://ask.dcloud.net.cn/article/38966)
  + 【重要】新增 uni-starter 集成商用项目开发常见功能的云端一体项目模板，大幅节省开发工作量 [详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + [Important] Added a cloud-integrated project template that integrates common functions of commercial project development in uni-starter, greatly saving development workload [Details](https://ext.dcloud.net.cn/plugin?id=5057)
  + clientDB 修复 日期类型（date）数据校验出错的Bug [详情](https://ask.dcloud.net.cn/question/122517)
  + clientDB fix the bug of date type (date) data verification error [Details](https://ask.dcloud.net.cn/question/122517)
  + clientDB 修复 action、validateFunction 内打印日志无法在web控制台查看的Bug
  + clientDB fixes the bug that the print log in action and validateFunction cannot be viewed in the web console
  + clientDB 新增 联表查询支持副表foreignKey联查，即副表字段的foreignKey指向主表，把副表数据挂在主表下面 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + ClientDB adds a new joint table query to support the foreignKey joint query of the auxiliary table, that is, the foreignKey of the auxiliary table field points to the main table, and the data of the auxiliary table is hung under the main table [Details](https://uniapp.dcloud.net.cn/uniCloud /clientdb?id=st-foreign-key)
  + clientDB 修复 部分情况下 action.after 会重复执行一次的bug
  + clientDB fixed the bug that action.after would be executed repeatedly in some cases
  + uniCloud本地调试插件 修复 阿里云偶发启动时多请求并发报错的Bug
  + uniCloud local debugging plug-in to fix the bug of multi-request and error report when Alibaba Cloud occasionally starts
  + JQL数据管理 修复 使用云端 schema 时找不到 schema 的Bug [详情](https://ask.dcloud.net.cn/question/123285)
  + JQL data management Fix bug that schema cannot be found when using cloud schema [Details](https://ask.dcloud.net.cn/question/123285)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 uni-AD 快手广告联盟支持插屏广告
  + Added uni-AD Kuaishou Advertising Alliance to support interstitial ads
  + 新增 一键登录 全屏模式支持在登录界面添加自定义登录按钮 [详情](https://uniapp.dcloud.io/univerify)
  + Added one-click login Full-screen mode supports adding a custom login button to the login interface [Details](https://uniapp.dcloud.io/univerify)
  + 新增 获取视频信息 getVideoInfo 支持获取画面方向 orientation、视频格式 type、视频码率 bitrate [文档](https://www.html5plus.org/doc/zh_cn/io.html#plus.io.VideoInfo)
  + Added Get video information getVideoInfo Supports getting screen orientation, video format type, video bitrate [document](https://www.html5plus.org/doc/zh_cn/io.html#plus.io.VideoInfo)
  + 更新 uni-AD 快手广告联盟SDK 为3.3.9 版；快手内容联盟SDK 为3.3.16 版；腾讯优量汇SDK Android为4.360.1230版；穿山甲SDK Android为3.6.1.3版，iOS为3.6.1.2版
  + Update the uni-AD Kuaishou Advertising Alliance SDK to version 3.3.9; Kuaishou Content Alliance SDK to version 3.3.16; Tencent Youlianghui SDK for Android to version 4.360.1230; Pangolin SDK to version 3.6.1.3 for Android and 3.6 for iOS. Version 1.2
  + Android平台 优化 原生模板隐私政策提示框逻辑，解决部分应用市场检测到弹出隐私政策框之前读取mac地址和应用列表的问题 [文档](https://ask.dcloud.net.cn/article/36937)
  + Android platform optimizes the logic of the native template privacy policy prompt box, and solves the problem of reading the mac address and application list before some application markets detect the pop-up privacy policy box [document](https://ask.dcloud.net.cn/article/ 36937)
  + Android平台 优化 云端打包googleplay渠道使用 Android App Bundle (AAB) 格式 [详情](https://ask.dcloud.net.cn/article/39052)
  + Android platform optimization Cloud-packaged googleplay channel uses Android App Bundle (AAB) format [Details](https://ask.dcloud.net.cn/article/39052)
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.0.0，提升在Android高版本设备上的推送消息到达率
  + Android platform Update the personal push SDK version used by UniPush to 3.2.0.0, which improves the arrival rate of push messages on devices with high Android versions
  + Android平台 更新 新浪微博分享、授权登录 SDK 为 10.10.0 版，适配支持 Android11 设备
  + Android platform update Sina Weibo sharing, authorized login SDK version 10.10.0, adapted to support Android11 devices
  + Android平台 更新 高德地图 SDK 为 7.9.1 版，高德定位 SDK 为 5.3.1 版，友盟统计 SDK 为 9.3.8 版
  + Android platform update AutoNavi Map SDK is version 7.9.1, AutoNavi Positioning SDK is version 5.3.1, Umeng Statistics SDK is version 9.3.8
  + Android平台 修复 腾讯云等安全检测平台报的部分高风险漏洞 [详情](https://ask.dcloud.net.cn/article/39020)
  + Android platform Fix some high-risk vulnerabilities reported by security detection platforms such as Tencent Cloud [Details](https://ask.dcloud.net.cn/article/39020)
  + Android平台 修复 uni-AD 开通基础开屏广告在弱网状态可能引起崩溃的Bug
  + Android platform, fix the bug that uni-AD activation basic open screen advertisement may cause crash in weak network state
  + Android平台 修复 uni-AD 快手联盟的信息流广告可能返回高度不正确导致显示异常的Bug
  + Android platform, fix the bug that the information flow advertisement of uni-AD Kuaishou alliance may return incorrect height and cause abnormal display
  + Android平台 修复 uni原生插件在原生模板隐私政策提示框之前可能进行初始化违规读取用户数据的Bug
  + Android platform Fix the bug that the uni native plugin may initialize before the native template privacy policy prompt box and read user data illegally
  + Android平台 修复 QQ登录获取用户信息 getUserInfo 返回的昵称可能出现乱码的Bug [详情](https://ask.dcloud.net.cn/question/120265)
  + Android platform Fixed the bug that the nickname returned by getUserInfo may be garbled after QQ login to obtain user information [Details](https://ask.dcloud.net.cn/question/120265)
  + iOS平台 优化 相册目录选择操作界面
  + iOS platform optimization Album directory selection interface
  + iOS平台 更新 高德地图 SDK 为 1.6.4无IDFA版，适配 iOS14.5 开始 AppStore 审核要求用户许可访问IDFA数据
  + iOS platform update AutoNavi Map SDK to 1.6.4 without IDFA version, compatible with iOS14.5 Start AppStore review to require user permission to access IDFA data
  + iOS平台 更新 百度语音识别 SDK 为 3.0.10.0 版
  + iOS platform update Baidu Speech Recognition SDK to version 3.0.10.0
  + iOS平台 修复 视频播放控件 VideoPlayer 调用 playbackRate 方法设置倍数播放值为 1.25、1.5 不生效的Bug [详情](https://ask.dcloud.net.cn/question/107802)
  + iOS platform Fix the bug that the video playback control VideoPlayer calls the playbackRate method to set the multiple playback value to 1.25, and 1.5 does not take effect [Details](https://ask.dcloud.net.cn/question/107802)
  + iOS平台 修复 扫码时息屏后再次打开引起扫描线动画停止的Bug [详情](https://ask.dcloud.net.cn/question/124001)
  + iOS platform Fixed a bug that caused the scan line animation to stop after turning off the screen when scanning the code [Details](https://ask.dcloud.net.cn/question/124001)
  + iOS平台 修复 保存文件名称中存在中文时报错的Bug
  + iOS platform Fix the bug that there is an error in Chinese in the save file name
  + iOS平台 修复 一键登录 授权登录时需要读取IDFA的Bug
  + iOS platform Fix the bug that IDFA needs to be read when one-click login is authorized to log in

#### 3.1.13.20210514
* 【uni-app】
  + App平台、H5平台 修复 3.1.11 版本引出的 textarea 组件固定 box-sizing 导致部分情况显示异常的Bug [详情](https://ask.dcloud.net.cn/question/121893)
  + App platform, H5 platform Fix the bug that the fixed box-sizing of the textarea component introduced in version 3.1.11 causes abnormal display in some cases [Details](https://ask.dcloud.net.cn/question/121893)
  + App平台 修复 3.1.11 版本引出的 input 组件类型为 number 时在低版本 webview 失去焦点时报错的Bug [详情](https://ask.dcloud.net.cn/question/122328)
  + App platform Fix the bug that when the input component type introduced by version 3.1.11 is number, an error is reported when the lower version webview loses focus [Details](https://ask.dcloud.net.cn/question/122328)
  + App平台 修复 3.1.2 版本引出的 dataset 使用驼峰写法时获取数据格式与其他平台不一致的Bug [详情](https://ask.dcloud.net.cn/question/119034)
  + App platform Fix the bug that the data format obtained from the 3.1.2 version is inconsistent with other platforms when the dataset is written in camel case [Details](https://ask.dcloud.net.cn/question/119034)
  + H5平台 修复 3.1.2 版本引出的样式中包含媒体查询时部分 rpx 单位失效的Bug [#2600](https://github.com/dcloudio/uni-app/issues/2600)
  + H5 platform Fix the bug that some rpx units are invalid when media queries are included in the style derived from version 3.1.2 [#2600](https://github.com/dcloudio/uni-app/issues/2600)
* 【uniCloud】
  + clientDB 修复 删除记录、统计记录数时受字段权限影响的bug [详情](https://ask.dcloud.net.cn/question/122846)
  + clientDB fixed bugs affected by field permissions when deleting records and counting records [Details](https://ask.dcloud.net.cn/question/122846)
  + unicloud-db组件 修复 联表查询时无法调用remove方法的问题 [详情](https://ask.dcloud.net.cn/question/122934)
  + unicloud-db component Fixed the problem that the remove method could not be called when querying a linked table [Details](https://ask.dcloud.net.cn/question/122934)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 更新 腾讯X5内核版本为 4.3.0.93，解决X5内核渲染页面时获取的UA中不包含 MQQBrowser 关键字的Bug
  + Android platform update Tencent X5 kernel version is 4.3.0.93, solve the bug that the MQQBrowser keyword is not included in the UA obtained when the X5 kernel renders the page
  + 【重要】iOS平台 优化 广告标识 IDFA 操作逻辑，适配从 iOS14.5 开始 AppStore 审核要求用户许可收集跟踪数据 [详情](https://ask.dcloud.net.cn/article/36107)
  + [Important] The iOS platform optimizes the IDFA operation logic of the advertising logo, and adapts to the AppStore review from iOS14.5 to require user permission to collect tracking data [Details](https://ask.dcloud.net.cn/article/36107)
  + iOS平台 修复 3.1.11 版本引出的 横屏状态 toast 消息提示框 和 loading 提示框显示异常的Bug [详情](https://ask.dcloud.net.cn/question/121979)
  + iOS platform Fix the bug that the toast message prompt box and loading prompt box in landscape state caused by version 3.1.11 are displayed abnormally [Details](https://ask.dcloud.net.cn/question/121979)
  + iOS平台 修复 一键登录 登录和其它登录按钮的默认圆角值不一致的Bug [详情](https://ask.dcloud.net.cn/question/121572)
  + iOS platform Fix the bug that the default rounded corner values of one-click login and other login buttons are inconsistent [Details](https://ask.dcloud.net.cn/question/121572)
  + iOS平台 修复 微信授权登录调用 authorize 动态传入 appid 参数不生效的Bug [详情](https://ask.dcloud.net.cn/question/121292)
  + iOS platform Fix the bug that the WeChat authorized login call authorize dynamically passed in the appid parameter does not take effect [Details](https://ask.dcloud.net.cn/question/121292)

#### 3.1.12.20210428
* 【uni-app】
  + App平台 修复 3.1.11 版本引出的 uni.chooseVideo 选取视频失败的Bug
  + App platform Fixed the bug that uni.chooseVideo failed to select video from version 3.1.11
  + App-Android平台 修复 3.1.11 版本引出的 nvue 页面在项目配置 nvueCompiler 为 weex 时显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/121905)
  + App-Android platform Fix the bug that the nvue page derived from version 3.1.11 displays abnormally when the project is configured with nvueCompiler as weex [Details](https://ask.dcloud.net.cn/question/121905)
  + App-iOS平台 修复 3.1.11 版本引起的 web-view 组件中 video 标签无法内联播放的Bug [详情](https://ask.dcloud.net.cn/question/121996)
  + App-iOS platform Fix the bug that the video tag in the web-view component cannot be played inline caused by version 3.1.11 [Details](https://ask.dcloud.net.cn/question/121996)
  + uni-ui 优化 为依赖 uni-icons 的 ui 组件添加依赖, 导入后自动下载依赖
  + uni-ui optimization Add dependencies for ui components that depend on uni-icons, and automatically download dependencies after importing
  + uni-ui 修复 uni-data-picker 非树形数据有 where 属性查询报错的问题
  + uni-ui fix the problem that uni-data-picker non-tree data has where attribute query error
  + uni-ui 新增 uni-datetime-picker 日历形式日期时间选择
  + uni-ui added uni-datetime-picker calendar form date and time selection
  + uni-ui 新增 uni-number-box v-model 双向绑定
  + uni-ui added uni-number-box v-model two-way binding
  + uni-ui 修复 uni-number-box 浮点数运算不精确的 bug
  + uni-ui fix uni-number-box floating point arithmetic inaccuracy bug
  + uni-ui 修复 uni-number-box change 事件触发不正确的 bug
  + uni-ui fix uni-number-box change event trigger incorrect bug
  + uni-ui 修复 uni-rate 布局变化后 uni-rate  星星计算不准确的 bug
  + uni-ui fix the bug of inaccurate calculation of uni-rate stars after uni-rate layout change
  + uni-ui 新增 uni-transition 通过方法自定义动画
  + uni-ui added uni-transition custom animation by method
  + uni-ui 新增 uni-transition custom-class 非 NVUE 平台支持自定义 class 定制样式
  + uni-ui added uni-transition custom-class non-NVUE platform supports custom class custom style
  + uni-ui 优化 uni-transition 动画触发逻辑，使动画更流畅
  + uni-ui optimizes uni-transition animation trigger logic to make animation smoother
  + uni-ui 优化 uni-transition 支持单独的动画类型
  + uni-ui optimization uni-transition supports separate animation types
  + uni-ui 优化 uni-transition 文档示例
  + uni-ui optimized uni-transition documentation example
* 【uniCloud】
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + [Important] To adjust the query strategy of clientDB linked table, please refer to this document for troubleshooting and adjustment: [Adjustment of clientDB linked table query strategy](https://ask.dcloud.net.cn/article/38966)
  + clientDB 新增 联表查询支持副表foreignKey联查，即副表字段的foreignKey指向主表，把副表数据挂在主表下面 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + ClientDB adds a new linked table query to support the foreignKey linked query of the secondary table, that is, the foreignKey of the secondary table field points to the main table, and the data of the secondary table is hung under the main table [Details](https://uniapp.dcloud.net.cn/uniCloud /clientdb?id=st-foreign-key)
  + uniCloud本地调试插件 修复 阿里云偶发启动时多请求并发报错的Bug
  + uniCloud local debugging plug-in to fix the bug of multi-request and error report when Alibaba Cloud occasionally starts
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 修复 uni-AD 快手联盟的信息流广告可能返回高度不正确导致显示异常的Bug
  + Android platform, fix the bug that the information flow advertisement of uni-AD Kuaishou alliance may return incorrect height and cause abnormal display

#### 3.1.11.20210423
* 【uni-app】
  + App平台 新增 插屏广告 uni.createInterstitialAd [详情](https://uniapp.dcloud.net.cn/api/a-d/interstitial)
  + App platform added interstitial ads uni.createInterstitialAd [Details](https://uniapp.dcloud.net.cn/api/a-d/interstitial)
  + App平台、H5平台 新增 支持 uni.getVideoInfo 用于获取视频信息 [详情](https://uniapp.dcloud.io/api/media/video?id=getvideoinfo)
  + App platform, H5 platform Added support for uni.getVideoInfo to get video information [Details](https://uniapp.dcloud.io/api/media/video?id=getvideoinfo)
  + App平台、H5平台 优化 uni.chooseLocation 地图选点支持搜索更大范围
  + App platform, H5 platform Optimized uni.chooseLocation map selection to support a wider range of searches
  + App平台、H5平台 优化 input 组件支持 cursor、selectionStart、selectionEnd 属性
  + App platform, H5 platform Optimize the input component to support cursor, selectionStart, selectionEnd properties
  + App平台、H5平台 修复 uni.canvasToTempFilePath 参数 quality 无效的Bug [详情](https://ask.dcloud.net.cn/question/119596)
  + App platform, H5 platform Fix the bug that the parameter quality of uni.canvasToTempFilePath is invalid [Details](https://ask.dcloud.net.cn/question/119596)
  + App平台、H5平台 修复 checkbox 组件 disabled 属性无相关样式的Bug
  + App platform, H5 platform Fix the bug that the disabled attribute of the checkbox component has no related styles
  + App平台 新增 支持 uni.compressVideo 用于压缩视频 [详情](https://uniapp.dcloud.io/api/media/video?id=compressvideo)
  + App platform added support for uni.compressVideo for compressing video [Details](https://uniapp.dcloud.io/api/media/video?id=compressvideo)
  + App平台 优化 uni.chooseVideo 支持 compressed 参数
  + App platform optimized uni.chooseVideo to support compressed parameter
  + App平台 优化 video 组件支持 enable-play-gesture 属性
  + App platform optimized video component to support enable-play-gesture attribute
  + App平台 修复 image 组件加载后导致其他原生组件显示错位的Bug
  + App platform Fixed the bug that caused other native components to display misalignment after the image component was loaded
  + App平台 修复 多列 picker 组件未设置 value 报错的Bug [#2561](https://github.com/dcloudio/uni-app/issues/2561)
  + App platform Fix the bug that the value of the multi-column picker component is not set [#2561](https://github.com/dcloudio/uni-app/issues/2561)
  + App平台 修复 uni.getStorageInfo 获取信息中部分 key 未包含的Bug [#2577](https://github.com/dcloudio/uni-app/issues/2577)
  + App platform Fix the bug that some keys in uni.getStorageInfo get information are not included [#2577](https://github.com/dcloudio/uni-app/issues/2577)
  + App平台 修复 uni.getSystemInfo 返回的 system 信息未包含系统名称的Bug
  + App platform Fixed the bug that the system information returned by uni.getSystemInfo did not include the system name
  + App-Android平台 修复 部分设备 input 组件设置 focus 属性为 true 时键盘收回的Bug
  + App-Android platform Fix the bug that the keyboard retracts when the focus property is set to true in the input component of some devices
  + App-Android平台 修复 nvue onLoad 事件调用 plus.navigator.hideSystemNavigation 可能出现页面高度异常的Bug
  + App-Android platform Fix the bug that the page height may be abnormal when the nvue onLoad event calls plus.navigator.hideSystemNavigation
  + App-Android平台 修复 nvue list 组件中加载大量图片上下滚动可能引起崩溃的Bug
  + App-Android platform Fix the bug that loading a large number of images in the nvue list component may cause a crash when scrolling up and down
  + App-Android平台 修复 nvue map 组件中多个 marker 切换后 callout 可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100883)
  + App-Android platform Fix the bug that the callout may display abnormally after switching multiple markers in the nvue map component [Details](https://ask.dcloud.net.cn/question/100883)
  + App-Android平台 修复 nvue map 组件 marker 执行移动动画时 callout 可能不会跟随的Bug [详情](https://ask.dcloud.net.cn/question/120985)
  + App-Android platform Fix the bug that the callout may not follow when the nvue map component marker performs moving animation [Details](https://ask.dcloud.net.cn/question/120985)
  + App-Android平台 修复 nvue map 组件与页面拖拽滚动手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/120600)
  + App-Android platform Fix the bug that the nvue map component conflicts with the page drag and scroll gesture [Details](https://ask.dcloud.net.cn/question/120600)
  + App-Android平台 修复 nvue picker-view 组件在部分设备可能显示不正常的Bug
  + App-Android platform Fix the bug that nvue picker-view component may display abnormally on some devices
  + App-iOS平台 修复 nvue map 组件 marker 标注的 label 设置 anchorY 偏移值无效的Bug [详情](https://ask.dcloud.net.cn/question/120953)
  + App-iOS platform Fix the bug that the anchorY offset value of the label of the nvue map component marker is invalid [Details](https://ask.dcloud.net.cn/question/120953)
  + H5平台 优化 uni.getSystemInfo 返回的 system 信息支持 Windows、Mac、Linux
  + H5 platform Optimize the system information returned by uni.getSystemInfo supports Windows, Mac, Linux
  + H5平台 修复 picker-view-column 中的元素无法触发 click 等事件的Bug [详情](https://ask.dcloud.net.cn/question/119346)
  + H5 platform Fix the bug that elements in picker-view-column cannot trigger events such as click [Details](https://ask.dcloud.net.cn/question/119346)
  + H5平台 修复 innerAudio.stop 触发 onCanplay 的Bug [#2538](https://github.com/dcloudio/uni-app/issues/2538)
  + H5 platform Fix the bug that innerAudio.stop triggers onCanplay [#2538](https://github.com/dcloudio/uni-app/issues/2538)
  + 小程序平台 修复 含有逻辑运算的复杂表达式编译后和预期不一致的Bug [详情](https://ask.dcloud.net.cn/question/118651)
  + Mini Program Platform Fix the bug that the complex expressions containing logical operations are not compiled and expected. [Details](https://ask.dcloud.net.cn/question/118651)
  + 支付宝小程序平台 修复 默认插槽默认内容一直显示的Bug [详情](https://ask.dcloud.net.cn/question/116404)
  + Alipay applet platform to fix the bug that the default content of the default slot is always displayed [Details](https://ask.dcloud.net.cn/question/116404)
  + uni-ui 新增 uni-data-picker 支持云端非树形表结构数据 [详情](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui added uni-data-picker to support non-tree table structure data in cloud [Details](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui 修复 uni-data-checkbox nvue 下无法选中的问题 [详情](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui fix the problem that uni-data-checkbox cannot be selected under nvue [Details](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui 修复 uni-data-picker 根节点 parent_field 字段等于null时选择界面错乱问题 [详情](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui fix the problem of confusion in the selection interface when the parent_field field of the root node of uni-data-picker is equal to null [Details](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui 修复 uni-file-picker 选择的文件非 file-extname 字段指定的扩展名报错的Bug [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui fix the bug that the file selected by uni-file-picker is not the extension specified by the file-extname field [Details](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 优化 uni-file-picker file-extname 字段支持字符串写法，多个扩展名需要用逗号分隔 [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui optimization The uni-file-picker file-extname field supports string writing, and multiple extensions need to be separated by commas [Details](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 修复 微信小程序 nv_navigator is not defined 报错的bug
  + uni-ui fix the bug of WeChat applet nv_navigator is not defined error
  + uni-ui 修复 uni-load-more 在首页使用时，h5 平台报 'uni is not defined' 的 bug [详情](https://ext.dcloud.net.cn/plugin?id=29)
  + uni-ui Fix the bug of 'uni is not defined' reported on the h5 platform when uni-load-more is used on the homepage [Details](https://ext.dcloud.net.cn/plugin?id=29)
  + uni-ui 优化 uni-pagination PC 和 移动端适配不同的 ui [详情](https://ext.dcloud.net.cn/plugin?id=32)
  + uni-ui optimization uni-pagination PC and mobile end adapt to different ui [Details](https://ext.dcloud.net.cn/plugin?id=32)
  + uni升级中心 App端 新增 call-check-version.js，可用于单独检测是否有更新 [详情](https://ext.dcloud.net.cn/plugin?id=4542)
  + uni Upgrade Center App added call-check-version.js, which can be used to independently detect whether there is an update [Details](https://ext.dcloud.net.cn/plugin?id=4542)
* 【uniCloud】
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + [Important] To adjust the query strategy of clientDB linked table, please refer to this document for troubleshooting and adjustment: [Adjustment of clientDB linked table query strategy](https://ask.dcloud.net.cn/article/38966)
  + unicloud-db组件 新增 loadtime 属性，替代 manual 属性 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + unicloud-db component Added loadtime property to replace manual property [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + unicloud-db组件 新增 foreignKey 属性，用于存在多个foreignKey关系时指定要使用的foreignKey [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + The unicloud-db component adds the foreignKey property, which is used to specify the foreignKey to be used when there are multiple foreignKey relationships [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key )
  + uniCloud.mixinDataCom 新增 foreignKey 属性，用途同上 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + uniCloud.mixinDataCom added foreignKey property, the purpose is the same as above [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + uni-id 修复 3.0.7 版本引出的多个用户访问时可能出现30201报错的Bug
  + uni-id fix the bug that 30201 error may appear when multiple users access from version 3.0.7
  + uni-id 新增 bindMobile 接口支持通过一键登录的方式绑定 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=bind-mobile)
  + uni-id Added bindMobile interface to support binding by one-click login [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=bind-mobile)
  + uni-id 调整 bindTokenToDevice 选项默认值改为 false，即默认不再与设备绑定，方便多设备登录
  + uni-id Adjust the default value of bindTokenToDevice option to false, that is, it is no longer bound to the device by default, which is convenient for multi-device login
  + uni-id 调整 默认对用户名邮箱去除两端空格、忽略大小写 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=case-sensitive)
  + uni-id adjustment By default, the spaces at both ends of the username and mailbox are removed, and the case is ignored [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=case-sensitive)
  + 修复 uniCloud.chooseAndUploadFile 在iOS微信小程序真机无法唤起选择文件的Bug
  + Fixed the bug that uniCloud.chooseAndUploadFile could not evoke the selected file in the real device of the iOS WeChat applet
  + uniCloud admin 优化错误提示、键盘响应等众多细节，更新uni-id等众多依赖 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
  + uniCloud admin optimizes many details such as error prompts and keyboard responses, and updates many dependencies such as uni-id [Details](https://ext.dcloud.net.cn/plugin?id=3268)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 uni-AD支持插屏广告 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.createInterstitialAd)
  + Added uni-AD support for interstitial ads [Specification](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.createInterstitialAd)
  + 更新 uni-AD 腾讯优量汇SDK iOS为 4.12.4 版，穿山甲SDK 为 3.5.5.0 版；快手联盟SDK Android为 3.3.8 版
  + Update uni-AD Tencent Youlianghui SDK iOS version 4.12.4, Pangolin SDK version 3.5.5.0; Kuaishou Alliance SDK Android version 3.3.8
  + 新增 离线打包支持 AppKey 管理 [文档](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  + Added offline packaging support for AppKey management [documentation](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  + 新增 压缩视频支持 filename 属性设置压缩后文件保存路径功能 [规范](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.CompressVideoOptions)
  + Added support for compressed video filename attribute to set the compressed file save path function [Specification](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.CompressVideoOptions)
  + 优化 一键登录 未通过审核时云端打包后调用API返回 -7 错误 [规范](https://uniapp.dcloud.io/univerify?id=%e9%94%99%e8%af%af%e7%a0%81)
  + Optimized the one-click login failed to pass the audit when the cloud package is called and the API returns -7 error [specification](https://uniapp.dcloud.io/univerify?id=%e9%94%99%e8%af%af%e7 %a0%81)
  + 修复 一键登录 授权界面显示后，调用原生模态窗口无法正常显示的Bug
  + Fix the bug that after the one-click login authorization interface is displayed, the native modal window cannot be displayed normally
  + 修复 存在开屏广告时 splashclosed 事件可能在启动界面关闭前触发的Bug
  + Fix the bug that splashclosed event may be triggered before the startup interface is closed when there is a screen-opening advertisement
  + Android平台 更新 公共测试证书，解决某些检测机构报病毒的问题 [文档](https://ask.dcloud.net.cn/article/36522)
  + Android platform update public test certificate, solve the problem of virus reported by some testing agencies [document](https://ask.dcloud.net.cn/article/36522)
  + Android平台 更新 gif图片库 android-gif-drawable 为 1.2.23 版，解决安全检测报存在远程代码执行漏洞的问题
  + Android platform update gif image library android-gif-drawable to version 1.2.23, to solve the problem of remote code execution vulnerability in security detection report
  + Android平台 修复 uni-AD 开通基础开屏广告在弱网状态可能引起崩溃的Bug
  + Android platform, fix the bug that uni-AD activation basic open screen advertisement may cause crash in weak network state
  + Android平台 修复 UniPush个推模块过度申请权限的Bug [详情](https://ask.dcloud.net.cn/question/119240)
  + Android platform Fix the bug that UniPush push module excessively apply for permission [Details](https://ask.dcloud.net.cn/question/119240)
  + Android平台 修复 视频播放控件 播放 http/https 地址视频的 cookie 与 X5 内核 webview 页面没有同步共享的Bug
  + Android platform Fix the bug that the video playback control and the X5 kernel webview page do not share the cookie for playing http/https address video synchronously
  + Android平台 修复 一键登录 在部分设备上服务协议文本字体显示过大的Bug
  + Android platform Fixed the bug that the service agreement text font displayed too large on some devices with one-click login
  + Android平台 修复 一键登录 显示和关闭授权界面动画时间过长的Bug
  + Android platform Fix the bug that one-click login shows and closes the authorization interface animation for too long
  + Android平台 修复 Downloader 下载较大文件时可能引起页面无法更新的Bug
  + Android platform Fixed a bug that might cause the page to fail to update when Downloader downloads large files
  + Android平台 修复 部分华为手机调用相机录像成功后无法找到视频文件的Bug
  + Android platform Fixed the bug that some Huawei phones could not find the video file after calling the camera to record successfully
  + iOS平台 修复 一键登录 登录和其它登录按钮的默认圆角值不一致的Bug [详情](https://ask.dcloud.net.cn/question/121572)
  + iOS platform Fix the bug that the default rounded corner values of one-click login and other login buttons are inconsistent [Details](https://ask.dcloud.net.cn/question/121572)
  + iOS平台 修复 Apple应用内支付 IAP 某些情况丢单无法恢复的Bug [文档](https://ask.dcloud.net.cn/article/497)
  + iOS platform Fix the bug that Apple's in-app payment IAP cannot be recovered in some cases [document](https://ask.dcloud.net.cn/article/497)
  + iOS平台 修复 从本地相册选择保存在 iCloud 的视频在下载失败时可能引起崩溃的Bug
  + iOS platform Fixed a bug that may cause a crash when downloading videos saved in iCloud from local albums
  + iOS平台 修复 从本地相册选择gif图片预览时不能播放的Bug
  + iOS platform Fix the bug that cannot be played when selecting gif image preview from local album
  + iOS平台 修复 视频播放控件 播放 http/https 地址视频没有同步共享 cookie 的Bug
  + Fix the bug of video playback controls for iOS platform, the video does not share cookie synchronously when playing http/https address

#### 3.1.9.20210413
* 【uni-app】
  + App-iOS平台 修复 nvue image 组件加载网络图片发送请求时没有携带 cookie 的Bug
  + App-iOS platform fix the bug that nvue image component does not carry cookie when loading network image and sending request
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 修复 申请权限被用户拒绝后可能无法再次正常申请权限的Bug [详情](https://ask.dcloud.net.cn/question/120747)
  + Android platform Fix the bug that the user may not be able to apply for permission again after the application permission is rejected by the user [Details](https://ask.dcloud.net.cn/question/120747)
  + iOS平台 修复 uni-AD 仅开通增强开屏广告可能出现无法关闭spalsh页面的Bug
  + iOS platform, fix the bug that uni-AD only opens the enhanced open screen advertisement, which may cause the bug that the spalsh page cannot be closed
  + iOS平台 修复 应用覆盖安装后可能出现启动白屏的Bug
  + iOS platform Fix the bug that the white screen may appear after the application is installed
* 【uniCloud】
  + 新增 [schema2code HBuilderX插件](https://ext.dcloud.net.cn/plugin?id=4684)，对项目下的schema文件点右键，快速生成数据的增删改查页面。[详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)
  + Added [schema2code HBuilderX plugin](https://ext.dcloud.net.cn/plugin?id=4684), right-click on the schema file under the project, and quickly generate a data addition, deletion, modification and query page. [Details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)

#### 3.1.8.20210406
* 【uniCloud】
  + 新增 [uni-upgrade-center](https://uniapp.dcloud.io/uniCloud/upgrade-center)，提供了简单、易用、统一的App管理、App版本管理、安装包发布管理，升级检测更新管理。
  + Added [uni-upgrade-center](https://uniapp.dcloud.io/uniCloud/upgrade-center), which provides simple, easy-to-use, unified App management, App version management, installation package release management, upgrade Check update management.
  + uniCloud本地调试插件 修复 3.1.5 版本引出的腾讯云连接本地云函数运行一段时间后报错的Bug [详情](https://ask.dcloud.net.cn/question/119089)
  + uniCloud local debugging plug-in Fix the bug that Tencent Cloud connected to the local cloud function caused by version 3.1.5 to report an error after running for a period of time [Details](https://ask.dcloud.net.cn/question/119089)
  + 阿里云 新增 支持对云函数设置单实例并发度，减少冷启动概率 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=concurrency)
  + Alibaba Cloud Added support for setting single-instance concurrency for cloud functions to reduce the probability of cold start [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=concurrency)
  + 阿里云 新增 支持TTL索引，自动删除临时数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/db-index?ttl)
  + Alibaba Cloud Added support for TTL indexing and automatic deletion of temporary data [Details](https://uniapp.dcloud.net.cn/uniCloud/db-index?ttl)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 修复 uni-AD 激励视频播放超过30秒的穿山甲广告点击跳过按钮 onClose 回调中 isEnd 属性值为 false 的Bug
  + Android platform Fix the bug that the isEnd property value is false in the onClose callback of the pangolin advertisement when the uni-AD rewarded video is played for more than 30 seconds

#### 3.1.7.20210330
* 【uni-app】
  + App-Android平台 修复 3.1.6 版本引出的 nvue scroll-view组件设置 scroll-x 为 true 时可能引起闪退的Bug [详情](https://ask.dcloud.net.cn/question/119858)
  + App-Android platform Fix the bug that may cause a crash when the nvue scroll-view component from version 3.1.6 is set scroll-x to true [Details](https://ask.dcloud.net.cn/question/119858)
  + App-iOS平台 修复 picker 组件部分情况下显示异常的Bug [详情](https://ask.dcloud.net.cn/question/119591)
  + App-iOS platform Fixed the bug that the picker component displayed abnormally in some cases [Details](https://ask.dcloud.net.cn/question/119591)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + iOS平台 修复 一键登录 授权登录界面使用浅色背景可能看不到 loading 显示效果的Bug
  + iOS platform Fix the bug that the one-click login authorization login interface may not see the loading display effect when using a light background

#### 3.1.6.20210326
* 【uni-app】
  + App平台、H5平台 优化 uni.showModal、uni.showActionSheet 等 API 内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App platform, H5 platform Optimized uni.showModal, uni.showActionSheet and other APIs with built-in internationalization support [Details](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 优化 应用退出提示内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App platform optimization Built-in internationalization support for app exit prompt [Details](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 优化 uni.scanCode、uni.previewImage 等 API 内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App platform Optimized APIs such as uni.scanCode, uni.previewImage, etc. Built-in internationalization support [Details](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 修复 SelectorQuery.exec 在安卓 4.x 系统报错的 Bug
  + App platform Fix the bug that SelectorQuery.exec reported error in Android 4.x system
  + App-iOS平台 修复 nvue ad-draw 组件播放优量汇视频广告可能无声音的Bug
  + App-iOS platform fix the bug that nvue ad-draw component may have no sound when playing Youlianghui video ads
  + App-iOS平台 修复 subNVue input 组件获取焦点后隐藏页面时软键盘不会关闭的Bug [详情](https://ask.dcloud.net.cn/question/117872)
  + App-iOS platform Fix the bug that the soft keyboard will not close when the page is hidden after the subNVue input component gets the focus [Details](https://ask.dcloud.net.cn/question/117872)
  + App-iOS平台 修复 nvue web-view 组件在应用设置 allowsInlineMediaPlayback 为 true 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/106864)
  + App-iOS platform Fix the bug that the nvue web-view component does not take effect when the app setting allowsInlineMediaPlayback to true [Details](https://ask.dcloud.net.cn/question/106864)
  + App-iOS平台 修复 nvue map 组件 polyline 设置 arrowIconPath 为自定义箭头图标无效的Bug [详情](https://ask.dcloud.net.cn/question/118538)
  + App-iOS platform Fix the bug that the nvue map component polyline set arrowIconPath to be invalid for custom arrow icons [Details](https://ask.dcloud.net.cn/question/118538)
  + App-iOS平台 修复 nvue scroll-view 组件下添加过多子组件会有明显卡顿的Bug [详情](https://ask.dcloud.net.cn/question/118444)
  + App-iOS platform Fix the bug that adding too many sub-components under the nvue scroll-view component will cause obvious lag [Details](https://ask.dcloud.net.cn/question/118444)
  + H5平台 优化 picker、video 组件内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + H5 platform optimized picker, video components built-in internationalization support [Details](https://uniapp.dcloud.io/collocation/i18n)
  + 百度小程序平台 修复 使用基础库 3.260+ 时，复杂表达式不显示的Bug [详情](https://ask.dcloud.net.cn/question/118213)
  + Baidu Mini Program Platform Fix the bug that complex expressions are not displayed when using the basic library 3.260+ [Details](https://ask.dcloud.net.cn/question/118213)
  + 百度小程序平台 修复 使用 usingComponents 引入部分动态库组件无效的Bug [#2526](https://github.com/dcloudio/uni-app/issues/2526)
  + Baidu Mini Program Platform Fix the bug that using usingComponents to import some dynamic library components is invalid [#2526](https://github.com/dcloudio/uni-app/issues/2526)
  + 【重要】uni-ui 新增 调整为uni_modules目录规范，支持在HBuilderX里直接发布、更新、删除等;
  + [Important] uni-ui has been added and adjusted to the uni_modules directory specification, which supports direct publishing, updating, deleting, etc. in HBuilderX;
  + uni-ui 新增 uni-row 组件，栅格系统;
  + uni-ui added uni-row component, grid system;
  + uni-ui 新增 uni-datetime-picker 的 hide-second 属性、border 属性;
  + uni-ui adds hide-second property and border property of uni-datetime-picker;
  + uni-ui 修复 uni-datetime-picker 选择跟显示的日期不一样的 bug，
  + uni-ui fix the bug that uni-datetime-picker selects a different date than the displayed date,
  + uni-ui 修复 uni-datetime-picker change事件触发2次的 bug
  + uni-ui fix the bug that the uni-datetime-picker change event triggers twice
  + uni-ui 修复 uni-datetime-picker 分、秒 end 范围错误的 bug
  + uni-ui fix uni-datetime-picker minute, second end range bug
  + uni-ui 新增 uni-tr selectable 属性，用于 type=selection 时，设置某行是否可由全选按钮控制
  + uni-ui adds the uni-tr selectable attribute, which is used to set whether a row can be controlled by the select all button when type=selection
  + uni-ui 新增 uni-data-checkbox 新增 disabled属性，支持nvue
  + uni-ui added uni-data-checkbox added disabled attribute, supports nvue
  + uni-ui 优化 uni-data-checkbox  无选项时提示“暂无数据”
  + uni-ui optimization uni-data-checkbox prompts "no data" when there is no option
  + uni-ui 优化 uni-data-checkbox  默认颜色显示
  + uni-ui optimized uni-data-checkbox default color display
  + uni-ui 新增 uni-link href 属性支持 tel:|mailto:
  + uni-ui added uni-link href attribute support tel:|mailto:
  + uni-ui 新增 uni-table 示例demo
  + uni-ui new uni-table example demo
  + uni-ui 修复 uni-data-picker 微信小程序某些情况下无法选择的问题，事件无法触发的问题
  + uni-ui fix the problem that the uni-data-picker WeChat applet cannot be selected in some cases, and the event cannot be triggered
  + uni-ui 修复 uni-nav-bar easycom 下，找不到 uni-status-bar 的bug
  + uni-ui fix the bug that uni-status-bar cannot be found under uni-nav-bar easycom
  + uni-ui 修复 uni-easyinput 示例在 qq 小程序上的bug
  + uni-ui fix the bug of uni-easyinput example on qq applet
  + uni-ui 修复 uni-forms 动态显示uni-forms-item的情况下，submit 方法获取值错误的Bug
  + uni-ui fix the bug that the submit method gets the wrong value when uni-forms dynamically displays uni-forms-item
  + uni-ui 修复 uni-forms schema 默认提示语不准确的问题
  + uni-ui fix the problem of inaccurate default prompt in uni-forms schema
  + uni-ui 修复 uni-forms 偶发性获取表单值错误的Bug
  + uni-ui fix the bug that uni-forms occasionally gets the wrong form value
  + uni-ui 修复 uni-forms 校验 uni-data-picker value 为 0 时，返回值错误的Bug
  + uni-ui fix the bug of returning wrong value when uni-forms check uni-data-picker value is 0
  + uni-ui 修复 uni-forms uni-forms-item 组件隐藏时依然触发校验的bug
  + uni-ui fix the bug that the uni-forms uni-forms-item component still triggers the verification when the uni-forms-item component is hidden
  + uni-ui 修复 uni-forms 偶发性获取表单值错误的Bug
  + uni-ui fix the bug that uni-forms occasionally gets the wrong form value
  + uni-ui 调整 cli 项目 建议使用 easycom 方式引用组件，如使用按需引用，需手动维护组件内部引用
  + uni-ui adjust the cli project It is recommended to use easycom to reference components. If you use on-demand reference, you need to manually maintain the internal reference of the component
  + 【重要】新增 uni-app升级中心，提供完善的App升级和免费的下载CDN。前端插件 [详见](https://ext.dcloud.net.cn/plugin?id=4542)、admin端插件 [详见](https://ext.dcloud.net.cn/plugin?id=4470)
  + [Important] Added uni-app upgrade center, providing complete App upgrade and free download CDN. Front-end plugins [see details](https://ext.dcloud.net.cn/plugin?id=4542), admin-side plugins [see details](https://ext.dcloud.net.cn/plugin?id= 4470)
* 【uniCloud】
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
  + schema2code 新增 format 配置 tel|email 时，支持拨打电话或调起本机邮件应用
  + schema2code adds a format to configure tel|email to support making calls or calling up the native mail application
  + schema2code 修复 生成 uni-file-picker 组件的属性 file-extname 类型错误的问题
  + schema2code fix the problem that the attribute file-extname of the uni-file-picker component is of the wrong type
  + schema2code 优化 导出 admin list页面的批量删除逻辑，没有选择项时禁用批量删除按钮
  + schema2code optimization Export the batch delete logic of the admin list page, disable the batch delete button when no items are selected
  + schema2code 优化 生成的前端 list 页面，增加无数据提示语 "没有更多数据"
  + schema2code optimization Generated front-end list page, add no data prompt "No more data"
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 相册选择界面的预览界面底部补充图片编辑功能，支持裁剪、涂鸦、马赛克、添加文字等。无需调用API，升级新版即可。
  + Added the photo editing function at the bottom of the preview interface of the album selection interface, which supports cropping, graffiti, mosaic, adding text, etc. There is no need to call the API, just upgrade to the new version.
  + 新增 一键登录 支持全屏模式 [详情](https://uniapp.dcloud.io/univerify?id=fullscreen)
  + Added one-click login to support fullscreen mode [Details](https://uniapp.dcloud.io/univerify?id=fullscreen)
  + 新增 uni-AD 支持快手内容联盟 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.showContentPage)
  + Added uni-AD support for Kuaishou Content Alliance [Specification](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.showContentPage)
  + 新增 plus.zip.compressVideo 支持压缩视频功能 [规范](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.compressVideo)
  + Added plus.zip.compressVideo to support compressed video function [Specification](https://www.html5plus.org/doc/en_us/zip.html#plus.zip.compressVideo)
  + 更新 uni-AD 腾讯优量汇SDK Android为4.333.1203版；穿山甲SDK iOS为3.4.2.8版；快手联盟SDK Android为3.3.7版
  + Update uni-AD Tencent Youlianghui SDK Android version 4.333.1203; Pangolin SDK iOS version 3.4.2.8; Kuaishou Alliance SDK Android version 3.3.7
  + Android平台 更新 QQ 分享、登录SDK版本为3.5.2，解决在 Android11 设备无法分享图片的Bug [详情](https://ask.dcloud.net.cn/question/118510)
  + Android platform update QQ sharing and login SDK version to 3.5.2, solve the bug that cannot share pictures on Android11 devices [Details](https://ask.dcloud.net.cn/question/118510)
  + Android平台 优化 云端打包 启动界面样式为自定义启动图时的显示速度
  + Android platform optimization Cloud packaging Display speed when the startup interface style is a custom startup image
  + Android平台 优化 一键登录 服务协议复选框勾选操作不灵敏的Bug [详情](https://ask.dcloud.net.cn/question/118305)
  + Android platform optimization One-click login Service agreement check box check the bug of insensitive operation [Details](https://ask.dcloud.net.cn/question/118305)
  + Android平台 修复 一键登录 在部分设备服务协议项超过两行可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/116873)
  + Android platform Fix one-click login. Some device service agreement items may display abnormal bugs with more than two lines [Details](https://ask.dcloud.net.cn/question/116873)
  + Android平台 优化 视频播放控件 设置 playStrategy 属性m3u8视频播放速度 [详情](https://ask.dcloud.net.cn/question/117115)
  + Android platform optimization Video playback controls Set playStrategy attribute m3u8 video playback speed [Details](https://ask.dcloud.net.cn/question/117115)
  + Android平台 修复 视频播放控件 动态设置 controls 属性延时生效的Bug [详情](https://ask.dcloud.net.cn/question/117457)
  + Android platform Fix the bug that the video playback controls dynamically set the controls property to take effect after a delay [Details](https://ask.dcloud.net.cn/question/117457)
  + Android平台 修复 视频播放控件 播放 http/https 地址视频没有同步共享 cookie 的Bug
  + Android platform to fix the bug of video playback controls, the video does not share cookie synchronously when playing http/https address
  + Android平台 修复 Webview窗口在部分场景加载 html 页面可能出现 plus 对象为空的Bug
  + Android platform Fix the bug that the plus object may be empty when loading html pages in the Webview window in some scenes
  + iOS平台 新增 uni原生插件云端打包支持iOS Extension [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/package?id=ios-extension)
  + iOS platform Added uni native plug-in cloud packaging to support iOS Extension [documentation](https://nativesupport.dcloud.net.cn/NativePlugin/course/package?id=ios-extension)
  + iOS平台 修复 从系统相册选择视频文件返回的大小和宽高不正确的Bug [详情](https://ask.dcloud.net.cn/question/117975)
  + iOS platform Fix the bug that the size, width and height returned by selecting a video file from the system album are incorrect [Details](https://ask.dcloud.net.cn/question/117975)
  + iOS平台 修复 在 iOS14 系统返回安全区域的top不正确引起界面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/117849)
  + iOS platform Fix the bug that the top of the safe area returned to the iOS14 system is incorrect, causing the interface to display abnormally [Details](https://ask.dcloud.net.cn/question/117849)
  + iOS平台 修复 在 iPhone12 系列设备未适配底部安全区域的Bug [详情](https://ask.dcloud.net.cn/question/119291)
  + iOS platform Fix the bug that iPhone12 series devices do not adapt to the bottom safe area [Details](https://ask.dcloud.net.cn/question/119291)
  + iOS平台 修复 视频播放控件 VideoPlayer 播放某些视频显示方向可能不正确的Bug
  + iOS platform Fix the bug that the video playback control VideoPlayer may display some videos in the wrong direction
* 【UniMPSDK】
  + Android平台 修复 部分直达nvue页面中本地路径图片无法正常加载显示的Bug
  + Android platform Fix the bug that the local path image in the direct nvue page cannot be loaded and displayed normally

#### 3.1.4.20210305
* 【uni-app】
  + App平台、H5平台 修复 3.1.2 版本引出的 canvasGetImageData、canvasToTempFilePath 获取高度错误Bug [详情](https://ask.dcloud.net.cn/question/117082)
  + App platform, H5 platform Fixed the bug of height error in canvasGetImageData and canvasToTempFilePath introduced in version 3.1.2 [Details](https://ask.dcloud.net.cn/question/117082)
  + App平台、H5平台 修复 3.1.2 版本引出的获取自定义组件 dataset 数据缺失的Bug [详情](https://ask.dcloud.net.cn/question/117206)
  + App platform, H5 platform Fix the bug that the 3.1.2 version of the custom component dataset data is missing [Details](https://ask.dcloud.net.cn/question/117206)
  + App平台 修复 input 组件在安卓设备上 focus 事件触发错乱的Bug [详情](https://ask.dcloud.net.cn/question/116576)
  + App platform Fix the bug that the focus event of the input component triggers disorderly on Android devices [Details](https://ask.dcloud.net.cn/question/116576)
  + App平台 修复 nvueStyleCompiler 设置为 uni-app 时 subNvue 页面根节点 class 无效的 Bug
  + App platform Fix the bug that the root node class of subNvue page is invalid when nvueStyleCompiler is set to uni-app
  + App平台 修复 nvueStyleCompiler 设置为 uni-app 时 nvue 页面样式中 !important 前不含空格时报错的Bug [详情](https://ask.dcloud.net.cn/question/117212)
  + App platform Fix the bug that the nvue page style does not contain spaces before !important when nvueStyleCompiler is set to uni-app [Details](https://ask.dcloud.net.cn/question/117212)
  + App-Android平台 修复 3.1.2 版本引出的 nvue input 组件设置 ajust-position 为 false 后，keyboardheightchange 事件返回软键盘高度为0的Bug [详情](https://ask.dcloud.net.cn/question/117295)
  + App-Android platform fixes the bug that the keyboardheightchange event returns a bug that the height of the soft keyboard is 0 after the nvue input component brought out by version 3.1.2 is set to false. [Details](https://ask.dcloud.net.cn/question /117295)
  + App-Android平台 修复 nvue input 组件 focus 事件可能触发两次的Bug
  + App-Android platform fix the bug that the focus event of nvue input component may be triggered twice
  + H5平台 修复 部分情况下获取 wxs 实例错误的的Bug [详情](https://ask.dcloud.net.cn/question/117097)
  + H5 platform Fix the bug that the wxs instance is incorrectly obtained in some cases [Details](https://ask.dcloud.net.cn/question/117097)
* 【uniCloud】
  + clientDB 修复 数据库运算方法in报错的Bug
  + clientDB fix the bug of database operation method in error
  + clientDB 修复 jql非运算表现异常的Bug
  + clientDB fix the bug of jql non-operation abnormal performance
  + clientDB 优化 部分场景下getCount性能
  + clientDB optimized getCount performance in some scenarios
  + clientDB 优化 部分场景下jql联表查询性能
  + clientDB optimization jql join table query performance in some scenarios
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 修复 3.1.0 版本引出的 wap2app 项目真机运行页面标题栏无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/117278)
  + Android platform Fix the bug that the title bar of the real machine running page of the wap2app project brought out by version 3.1.0 cannot be displayed normally [Details](https://ask.dcloud.net.cn/question/117278)
  + Android平台 修复 微信分享本地图片在部分 Android11 设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/117050)
  + Android platform Fix the bug that WeChat sharing local pictures may fail on some Android11 devices [Details](https://ask.dcloud.net.cn/question/117050)
  + Android平台 修复 页面中 input 标签 type 为 tel/email 时，弹出软键盘上方的辅助输入栏内容可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/118051)
  + Android platform fix When the input label type in the page is tel/email, the content of the auxiliary input field above the soft keyboard may appear abnormally. [Details](https://ask.dcloud.net.cn/question/118051)
  + iOS平台 修复 保存 gif 图片到系统相册可能引起卡死或崩溃的Bug [详情](https://ask.dcloud.net.cn/question/117814)
  + iOS platform Fix the bug that saving gif pictures to the system album may cause the bug to freeze or crash [Details](https://ask.dcloud.net.cn/question/117814)

#### 3.1.2.20210206
* 【uni-app】
  + 新增 uni.getSystemInfo 支持获取 deviceId 作为设备标识。App 端根据设备信息生成，非 App 端由 uni-app 框架生成基于随机数的 id
  + Added uni.getSystemInfo to support getting deviceId as device ID. The App side is generated according to the device information, and the non-App side is generated by the uni-app framework based on the random number id
  + App平台、H5平台 优化 dataset 获取逻辑，完善非 string 类型支持
  + App platform, H5 platform Optimize dataset acquisition logic, improve non-string type support
  + App平台、H5平台 修复 css 媒体查询内的 rpx 单位不生效的Bug [详情](https://ask.dcloud.net.cn/question/112279)
  + App platform, H5 platform Fix the bug that the rpx unit in the css media query does not take effect [Details](https://ask.dcloud.net.cn/question/112279)
  + App平台、H5平台 修复 picker 组件特定情况下设置 start、end 表现异常的Bug [详情](https://ask.dcloud.net.cn/question/114223)
  + App platform, H5 platform Fix the bug that the start and end performance of the picker component is abnormal under certain circumstances [Details](https://ask.dcloud.net.cn/question/114223)
  + App平台、H5平台 修复 部分时机获取 input、textarea 组件值不正确的Bug [详情](https://ask.dcloud.net.cn/question/115897)
  + App platform, H5 platform Fix the bug that the input and textarea component values are incorrect in some occasions [Details](https://ask.dcloud.net.cn/question/115897)
  + 【重要】App平台 新增 nvue 组件支持 render-whole 属性。可以按组件整体渲染，而不是从上到下逐行渲染 [详情](https://uniapp.dcloud.io/nvue-outline?id=render-whole)
  + [Important] App platform added the nvue component to support the render-whole attribute. Can render by component as a whole instead of line by line from top to bottom [details](https://uniapp.dcloud.io/nvue-outline?id=render-whole)
  + 【重要】App平台 新增 nvue 增加 nvueStyleCompiler 配置，支持组合选择器（相邻兄弟选择器、普通兄弟选择器、子选择器、后代选择器）[详情](https://ask.dcloud.net.cn/article/38751)
  + [Important] App platform adds nvue, adds nvueStyleCompiler configuration, supports combined selectors (adjacent sibling selector, common sibling selector, child selector, descendant selector) [Details](https://ask.dcloud.net .cn/article/38751)
  + App平台 新增 manifest.json 支持全屏配置 app-plus -> fullscreen
  + App platform Added manifest.json to support full screen configuration app-plus -> fullscreen
  + App平台 新增 支持 uni.offNetworkStatusChange 方法
  + App platform added support for uni.offNetworkStatusChange method
  + App平台 新增 支持 uni.offKeyboardHeightChange 方法
  + App platform added support for uni.offKeyboardHeightChange method
  + App平台 新增 input、textarea 组件支持 keyboardheightchange 事件
  + App platform Added input and textarea components to support keyboardheightchange event
  + App平台 新增 nvue map 组件支持展示 POI 点、建筑物、个性化地图等新特性 [详情](https://uniapp.dcloud.io/component/map)
  + App platform Added nvue map component to support the display of POI points, buildings, personalized maps and other new features [Details](https://uniapp.dcloud.io/component/map)
  + App平台 新增 video 组件新增属性 codec、http-cache、play-strategy
  + App platform Added video component Added properties codec, http-cache, play-strategy
  + 【重要】App平台 优化 nvue 支持更多简写样式：border、border-top、border-right、border-bottom、border-left、border-style、border-width、border-color、border-radius、flex-flow、font、background
  + [Important] App platform optimization nvue supports more shorthand styles: border, border-top, border-right, border-bottom, border-left, border-style, border-width, border-color, border-radius, flex- flow, font, background
  + App平台 优化 uni.getNetworkType 支持获取 5g 网络类型
  + App platform optimized uni.getNetworkType to support getting 5g network type
  + App平台 优化 uni.saveImageToPhotosAlbum 支持返回保存路径
  + App platform optimization uni.saveImageToPhotosAlbum support return save path
  + App平台 修复 uni.canvasToTempFilePath 配置的大小超过 canvas 大小时获取的图像空白的Bug [详情](https://ask.dcloud.net.cn/question/111225)
  + App platform Fixed the bug that the image obtained when the size of the uni.canvasToTempFilePath configuration exceeds the canvas size [Details](https://ask.dcloud.net.cn/question/111225)
  + App平台 修复 cover-view 样式动态变更未生效的Bug
  + App platform to fix the bug that the dynamic change of cover-view style does not take effect
  + App平台 修复 部分情况下组件递归调用内部 v-for 报错的Bug
  + App platform Fix the bug that the component recursively calls the internal v-for error in some cases
  + App平台 修复 特定分辨率（iPhone12 Pro）下文字换行错误的Bug [详情](https://ask.dcloud.net.cn/question/114636)
  + App platform Fix the bug of text wrapping error under certain resolution (iPhone12 Pro) [Details](https://ask.dcloud.net.cn/question/114636)
  + App平台 修复 部分情况下 v-for 渲染列表事件错乱的Bug [详情](https://ask.dcloud.net.cn/question/112100)
  + App platform Fix the bug that v-for rendering list events are disordered in some cases [Details](https://ask.dcloud.net.cn/question/112100)
  + App平台 修复 v-for 渲染 Map、Set 数据类型错乱的Bug [详情](https://ask.dcloud.net.cn/question/115506)
  + App platform Fix the bug that v-for renders Map and Set data type disorder [Details](https://ask.dcloud.net.cn/question/115506)
  + App平台 修复 uni.compressImage 传入本地路径失败的Bug [详情](https://ask.dcloud.net.cn/question/115315)
  + App platform Fix the bug that uni.compressImage fails to pass in the local path [Details](https://ask.dcloud.net.cn/question/115315)
  + App平台 修复 纯 nvue 编译模式下 pages.json 缺少 style 节点编译报错的Bug
  + App platform Fix the bug that pages.json lacks style node compilation error in pure nvue compilation mode
  + App-Android平台 修复 页面生命周期 onshow 中调用 getLocation 可能会引起死循环的Bug
  + App-Android platform Fix the bug that calling getLocation in the onshow of the page life cycle may cause an infinite loop
  + App-Android平台 修复 软键盘弹出后，切换输入法软键盘高度发生变化时不会正常触发 onKeyboardHeightChange 事件的Bug
  + App-Android platform Fix the bug that the onKeyboardHeightChange event will not be triggered normally when the height of the soft keyboard is changed after the soft keyboard pops up
  + App-Android平台 修复 软键盘弹出后，返回到之前的页面可能显示高度不正确的bug [详情](https://ask.dcloud.net.cn/question/115772)
  + App-Android platform fix After the soft keyboard pops up, returning to the previous page may display a bug with incorrect height [Details](https://ask.dcloud.net.cn/question/115772)
  + App-Android平台 修复 previewImage 预览网络图片长按保存到系统相册失败的Bug [详情](https://ask.dcloud.net.cn/question/115727)
  + App-Android platform Fix the bug that previewImage preview network image fails to save to system album by long press [Details](https://ask.dcloud.net.cn/question/115727)
  + App-Android平台 修复 subNVues 设置 popup 模式后，再设置 left 执行动画会卡顿的Bug [详情](https://ask.dcloud.net.cn/question/114631)
  + App-Android platform Fix the bug that after subNVues set the popup mode, and then set the left to execute the animation, the bug will be stuck [Details](https://ask.dcloud.net.cn/question/114631)
  + App-Android平台 修复 nvue css 中设置 transform 属性值中使用百分比无效的Bug [详情](https://ask.dcloud.net.cn/question/115728)
  + App-Android platform Fix the bug of invalid percentage in setting transform attribute value in nvue css [Details](https://ask.dcloud.net.cn/question/115728)
  + App-Android平台 修复 nvue live-pusher 组件横屏预览时上传视频方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/115673)
  + App-Android platform Fix the bug that the upload video direction is incorrect when the nvue live-pusher component is previewed in horizontal screen [Details](https://ask.dcloud.net.cn/question/115673)
  + App-Android平台 修复 nvue map 组件动态绘制 polyline 路径轨迹可能会闪烁的Bug [详情](https://ask.dcloud.net.cn/question/90676)
  + App-Android platform Fix the bug that the nvue map component dynamically draws the polyline path track may flicker [Details](https://ask.dcloud.net.cn/question/90676)
  + App-Android平台 修复 nvue input 组件设置 cursor-spacing 属性无效的Bug
  + App-Android platform Fix the bug that the cursor-spacing property of nvue input component is invalid
  + App-Android平台 修复 3.0.7 版本引出的 canvas 组件绘制网络图片失败的Bug
  + App-Android platform Fixed the bug that the canvas component failed to draw network images from version 3.0.7
  + App-iOS平台 修复 nvue css 中设置 transform 执行动画可能引起崩溃的Bug
  + App-iOS platform Fix the bug that setting transform to execute animation in nvue css may cause crash
  + App-iOS平台 修复 nvue 使用 animation 对组件执行动画期间，组件绑定的点击事件可能不触发的Bug [详情](https://ask.dcloud.net.cn/question/98554)
  + App-iOS platform Fix the bug that the click event bound to the component may not be triggered when nvue uses animation to animate the component [Details](https://ask.dcloud.net.cn/question/98554)
  + App-iOS平台 修复 nvue ad-draw 组件加载快手联盟广告时，在 list 中滚动后可能无法正常显示的Bug
  + App-iOS platform Fix the bug that when the nvue ad-draw component loads Kuaishou alliance ads, it may not display properly after scrolling in the list
  + App-iOS平台 修复 nvue image 组件在 iOS14 系统设置 placeholder 后无法正常显示 src 图片的Bug [详情](https://ask.dcloud.net.cn/question/115531)
  + App-iOS platform Fix the bug that the nvue image component cannot display the src image normally after the placeholder is set in the iOS14 system [Details](https://ask.dcloud.net.cn/question/115531)
  + App-iOS平台 修复 nvue video 组件使用 exitFullScreen 无法正常退出全屏的Bug [详情](https://ask.dcloud.net.cn/question/111855)
  + App-iOS platform Fix the bug that the nvue video component cannot exit the full screen normally when using exitFullScreen [Details](https://ask.dcloud.net.cn/question/111855)
  + App-iOS平台 修复 nvue web-view 组件加载的网页中 a 标签 target 属性值为 _blank 时，点击 a 标签链接无反应的Bug [详情](https://github.com/dcloudio/hello-uniapp/issues/37)
  + App-iOS platform fixes the bug that when the target attribute value of the a tag is _blank in the webpage loaded by the nvue web-view component, clicking the a tag link does not respond [Details](https://github.com/dcloudio/hello-uniapp /issues/37)
  + H5平台 新增 EditorContext 支持 blur、getSelectionText、scrollIntoView 方法
  + H5 platform Added EditorContext to support blur, getSelectionText, scrollIntoView methods
  + H5平台 新增 getTopWindowStyle、getLeftWindowStyle、getRightWindowStyle 方法 [详情](https://uniapp.dcloud.net.cn/api/ui/adapt)
  + H5 platform Added getTopWindowStyle, getLeftWindowStyle, getRightWindowStyle methods [Details](https://uniapp.dcloud.net.cn/api/ui/adapt)
  + H5平台 新增 image 组件支持 draggable 属性
  + H5 platform added image component to support draggable attribute
  + H5平台 优化 swiper、movable 组件拖动时禁止 click 事件触发
  + H5 platform Optimized swiper and movable components to disable click event triggering when dragging
  + H5平台 修复 ActionSheet 数据量多无法滚动的Bug
  + H5 platform fix the bug that ActionSheet cannot scroll due to large amount of data
  + H5平台 修复 特定情况下 uni.showModal 内容区域出现横向滚动条的Bug
  + H5 platform Fix the bug that the horizontal scroll bar appears in the uni.showModal content area under certain circumstances
  + H5平台 修复 image 组件使用 require 方式引用的资源在配置基础路径为相对路径时，编译后不显示的Bug
  + H5 platform Fix the bug that the resource referenced by the image component using the require method is not displayed after compiling when the base path is configured as a relative path
  + H5平台 修复 应用初始化以前调用 uni.getSystemInfoSync 报错的Bug [详情](https://ask.dcloud.net.cn/question/116612)
  + H5 platform Fix the bug of calling uni.getSystemInfoSync before application initialization [Details](https://ask.dcloud.net.cn/question/116612)
  + 【重要】小程序平台 新增 发行时支持混合分包模式，将 uni-app 项目发行为小程序分包，集成到已有的原生开发的小程序 [详情](https://uniapp.dcloud.net.cn/hybrid)
  + [Important] The Mini Program platform supports the mixed subcontracting mode when it is newly released. The uni-app project is released as a Mini Program subcontracting and integrated into the existing natively developed Mini Programs [Details](https://uniapp.dcloud .net.cn/hybrid)
  + 小程序平台 修复 事件回调内 arguments 获取到多余参数的Bug [#2270](https://github.com/dcloudio/uni-app/issues/2270)
  + Mini Program Platform Fix the bug that the arguments in the event callback get redundant parameters [#2270](https://github.com/dcloudio/uni-app/issues/2270)
  + 小程序平台 修复 修复 v-for 循环 wxs 模块内容报错的Bug [详情](https://ask.dcloud.net.cn/question/115658)
  + Mini Program Platform Fix the bug that the content of the wxs module of the v-for loop is incorrect [Details](https://ask.dcloud.net.cn/question/115658)
  + 支付宝平台、头条小程序平台 修复 部分情况下无法正确编译模板中 class 的Bug [#2294](https://github.com/dcloudio/uni-app/pull/2294)
  + Alipay platform and Toutiao applet platform fixed the bug that the class in the template could not be compiled correctly in some cases [#2294](https://github.com/dcloudio/uni-app/pull/2294)
  + 支付宝小程序平台 优化 组件支持 vue 事件监听方式（需启用 component2）[详情](https://ask.dcloud.net.cn/question/110978)
  + Alipay applet platform optimization component supports vue event monitoring method (component2 needs to be enabled) [details](https://ask.dcloud.net.cn/question/110978)
  + 支付宝小程序平台 修复 内置组件部分事件无法监听的Bug [#2185](https://github.com/dcloudio/uni-app/issues/2185)
  + Alipay applet platform to fix the bug that some events of built-in components cannot be monitored [#2185](https://github.com/dcloudio/uni-app/issues/2185)
  + 【重要】百度小程序平台 新增 支持 onInit 生命周期
  + [Important] Baidu applet platform added support for onInit life cycle
  + 百度小程序平台 优化 支持使用 usingComponents 引入插件（原名称 usingSwanComponents 仍然保留）
  + Baidu applet platform optimization Supports the introduction of plugins using usingComponents (the original name usingSwanComponents is still retained)
  + 【重要】uni-ui 新增 所有组件适配 PC 端，适配宽屏、拖动、支持enter和esc按键响应 [详情](https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge)
  + [Important] uni-ui added all components to adapt to the PC side, adapt to widescreen, drag, support enter and esc button response [details](https://hellouniapp.dcloud.net.cn/pages/extUI/badge /badge)
  + uni-ui 新增 uni-file-picker 文件直传uniCloud云空间的组件 [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui added uni-file-picker to directly transfer files to uniCloud cloud space [Details](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 优化 uni-forms、uni-easyinput、uni-group 兼容 nvue 页面
  + uni-ui optimized uni-forms, uni-easyinput, uni-group compatible nvue pages
  + 【重要】新增 云端一体搜索模板。无需自行开发搜索 [详情](https://ext.dcloud.net.cn/plugin?id=3851)
  + [Important] Added a cloud-integrated search template. No need to develop your own search [Details](https://ext.dcloud.net.cn/plugin?id=3851)
  + 【重要】新增 uni-captcha 基于uniCloud的图片验证码 [详情](https://ext.dcloud.net.cn/plugin?id=4048)
  + [Important] Added uni-captcha image verification code based on uniCloud [Details](https://ext.dcloud.net.cn/plugin?id=4048)
  + 【重要】新增 网赚游戏合成猫项目模板 [详情](https://ext.dcloud.net.cn/plugin?id=4095)
  + [Important] New online earning game synthetic cat project template [Details](https://ext.dcloud.net.cn/plugin?id=4095)
  + 【重要】hello uniCloud 新增 clientDB、schema2code示例 [详情](https://ext.dcloud.net.cn/plugin?id=4082)
  + [Important] hello uniCloud adds clientDB and schema2code examples [Details](https://ext.dcloud.net.cn/plugin?id=4082)
  + 新增 uniCloud-banner模板 支持管理员上传修改banner [详情](https://ext.dcloud.net.cn/plugin?id=4117)
  + Added uniCloud-banner template to support administrators to upload and modify banner [Details](https://ext.dcloud.net.cn/plugin?id=4117)
  + 云端一体登录模板 新增 用户名密码连续登录失败时要求输入图形验证码
  + Cloud integrated login template Added a graphic verification code when the user name and password fail to log in consecutively
* 【uniCloud】
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
  + Alibaba Cloud Added cloud function support uploadFile interface (local debugging is not supported for now) [Details](https://uniapp.dcloud.net.cn/uniCloud/storage?id=clouduploadfile)
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
  + uniCloud本地调试插件 修复 3.0.7版本引出的某些情况下客户端连接本地云函数时报模块冲突的Bug
  + uniCloud local debugging plug-in Fix the bug of module conflict when the client connects to the local cloud function in some cases caused by version 3.0.7
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
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + uni-AD 更新 腾讯优量汇SDK Android为4.332.1202版、iOS为4.12.3版；穿山甲SDK iOS为3.4.2.3版；快手联盟SDK iOS为3.3.6版
  + uni-AD update Tencent Youlianghui SDK Android version 4.332.1202, iOS version 4.12.3; Pangolin SDK iOS version 3.4.2.3; Kuaishou Alliance SDK iOS version 3.3.6
  + 一键登录 新增 defaultCheckBoxState 属性设置默认是否勾选同意使用服务条款框
  + One-click login Added defaultCheckBoxState property to set whether to check the agree to the terms of service box by default
  + 微信分享 新增 分享音乐支持 href 属性设置音乐网页地址
  + WeChat sharing Added support for sharing music with href attribute to set music webpage address
  + Android平台 新增 视频播放控件支持 codec 属性设置是否开启硬解码，解决某些视频播放不清晰的问题 [详情](https://ask.dcloud.net.cn/question/95568)
  + Android platform Added the video playback control to support the codec property setting whether to enable hard decoding, to solve the problem of unclear playback of some videos [Details](https://ask.dcloud.net.cn/question/95568)
  + Android平台 新增 视频播放控件支持 httpCache 属性设置是否开启缓存，解决重复播放网络视频无法复用缓存的问题 [详情](https://ask.dcloud.net.cn/question/105515)
  + Android platform Added video playback controls to support httpCache attribute setting whether to enable caching, to solve the problem that repeated playback of online videos cannot be reused and cached [Details](https://ask.dcloud.net.cn/question/105515)
  + Android平台 新增 视频播放控件支持 playStrategy 属性设置视频优化策略，解决播放在线高清视频卡顿、音视频脱轨的问题 [详情](https://ask.dcloud.net.cn/question/116249)
  + Android platform Added the video playback control to support the playStrategy attribute to set video optimization strategy, to solve the problem of playing online high-definition video stuck, audio and video derailment [Details](https://ask.dcloud.net.cn/question/116249)
  + Android平台 修复 视频播放控件 seek 跳转不准确的Bug [详情](https://ask.dcloud.net.cn/question/115171)
  + Android platform fix the bug of inaccurate seek jump in video playback controls [Details](https://ask.dcloud.net.cn/question/115171)
  + Android平台 修复 微信分享图片在 Android11 设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/115153)
  + Android platform Fix the bug that WeChat sharing pictures may fail on Android11 devices [Details](https://ask.dcloud.net.cn/question/115153)
  + Android平台 修复 设置应用角标数字时没有同步状态到 UniPush 服务器的Bug
  + Android platform fix the bug that the status is not synchronized to the UniPush server when setting the number of the application corner mark
  + iOS平台 优化 uni-AD 信息流广告内存管理机制，解决显示广告过多时内存泄露引起崩溃的Bug
  + iOS platform Optimize the uni-AD information flow advertisement memory management mechanism, and solve the bug of memory leak caused by crash when displaying too many advertisements
  + iOS平台 修复 uni-AD 调用 plus.ad.releaseAdData 释放广告数据可能引起崩溃的Bug
  + iOS platform Fix the bug that uni-AD may crash when calling plus.ad.releaseAdData to release ad data
  + iOS平台 更新 高德地图SDK为 7.8.0 版，解决在 iOS14 系统拖动地图时卡顿的Bug [详情](https://ask.dcloud.net.cn/question/113674)
  + iOS platform update AutoNavi Maps SDK to version 7.8.0, to solve the bug of stuck when dragging the map in iOS14 system [Details](https://ask.dcloud.net.cn/question/113674)
  + iOS平台 修复 QQ分享音乐，点击分享内容跳转到的是音乐播放页面而不是 href 设置的音乐网页的Bug
  + iOS platform Fix the bug of QQ sharing music, click the sharing content to jump to the music playback page instead of the music page set by href
  + iOS平台 修复 图片轮播控件 ImageSlider 设置样式可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/116068)
  + iOS platform Fix the bug that the image carousel control ImageSlider setting style may not take effect [Details](https://ask.dcloud.net.cn/question/116068)
  + iOS平台 修复 从系统相册选择 iCloud 视频文件没有触发回调的Bug [详情](https://ask.dcloud.net.cn/question/115448)
  + iOS platform Fixed the bug that selecting iCloud video files from the system album did not trigger the callback [Details](https://ask.dcloud.net.cn/question/115448)
  + iOS平台 修复 视频播放控件横向全屏播放后，调用 exitFullScreen 退出全屏可能界面显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/115775)
  + iOS platform Fix the bug that the interface may display abnormally after calling exitFullScreen to exit the full screen after the video playback control is played horizontally and full screen [Details](https://ask.dcloud.net.cn/question/115775)
  + iOS平台 修复 视频播放控件拖动进度条可能引起进度显示不正常，不触发 timeupdate 事件的Bug [详情](https://ask.dcloud.net.cn/question/115300)
  + iOS platform Fix the bug that dragging the progress bar of the video playback control may cause the progress to display abnormally and not trigger the timeupdate event [Details](https://ask.dcloud.net.cn/question/115300)
* 【UniMPSDK】
  + iOS平台 修复 关闭当前小程序立刻打开另一个小程序后，小程序可能无法关闭的Bug [详情](https://ask.dcloud.net.cn/question/115243)
  + iOS platform Fix the bug that the applet may not be closed after closing the current applet and immediately opening another applet [Details](https://ask.dcloud.net.cn/question/115243)
  + iOS平台 新增 小程序页面关闭时支持动态设置原生导航栏的显隐方法 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=SetNavigationBarHidden)
  + iOS platform Added support to dynamically set the display and hide method of the native navigation bar when the applet page is closed [Details](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=SetNavigationBarHidden)

#### 3.0.7.20210123
* 【uni-app】
  + App平台 修复 windows 系统部分情况下，查找 Chrome 失败，导致无法正常 debug 的Bug
  + App platform Fixed the bug that in some cases of windows system, the search for Chrome failed, resulting in the inability to debug normally
  + App平台 修复 包含微信小程序组件时，部分情况下首次编译触发热刷新的Bug
  + App platform fix When including WeChat applet components, in some cases, the first compilation triggers a bug that triggers a hot refresh
  + App-Android平台 修复 nvue list 组件调用 setSpecialEffects 设置吸顶后，input 子组件无法获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/114511)
  + App-Android platform Fix the bug that the input sub-component cannot get the focus after the nvue list component calls setSpecialEffects to set the ceiling [Details](https://ask.dcloud.net.cn/question/114511)
  + App-Android平台 修复 nvue list/waterfall 组件使用 refresh 并设置 background-color 属性后会出现白边的Bug [详情](https://ask.dcloud.net.cn/question/105800)
  + App-Android platform Fix the bug of white border after using refresh and setting background-color property of nvue list/waterfall component [Details](https://ask.dcloud.net.cn/question/105800)
  + App-iOS平台 修复 nvue refresh 组件处于刷新状态时显示位置向下偏移0.5像素的Bug
  + App-iOS platform Fix the bug that the display position is offset down by 0.5 pixels when the nvue refresh component is in the refresh state
  + 快应用 修复 华为快应用IDE V3.0.2无法识别项目类型的Bug
  + Quick App Fix the bug that Huawei Quick App IDE V3.0.2 cannot recognize the project type
* 【uniCloud】
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
  + uni-id 新增 支持苹果登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=loginbyapple)
  + uni-id added support for Apple login [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=loginbyapple)
  + uni-id 新增 在token内默认缓存角色权限，云端获取角色权限不再查库，提升clientDB性能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
  + uni-id Added the default cache role permission in the token, the cloud will no longer check the database when the role permission is obtained, and improve the performance of clientDB [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id= cachepermissionintoken)
  + schema2code 支持生成list、detail页面
  + schema2code supports generating list and detail pages
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 更新 uni-AD 快手联盟SDK为3.3.6版，腾讯优量汇SDK为4.310.1180版，今日头条穿山甲SDK为3.4.1.0版
  + Android platform update uni-AD Kuaishou Alliance SDK is version 3.3.6, Tencent Youlianghui SDK is version 4.310.1180, Toutiao Pangolin SDK is version 3.4.1.0
  + Android平台 更新 腾讯X5内核版本为 v4.3.0.67_43967 [详情](https://ask.dcloud.net.cn/article/36806)
  + Android platform update Tencent X5 kernel version is v4.3.0.67_43967 [Details](https://ask.dcloud.net.cn/article/36806)
  + Android平台 更新 UniPush 华为厂商推送 SDK 版本为 v4:2.0.0，适配 HMS4.0+ [详情](https://ask.dcloud.net.cn/article/35622#huawei)
  + Android platform Update UniPush Huawei manufacturer push SDK version is v4:2.0.0, compatible with HMS4.0+ [Details](https://ask.dcloud.net.cn/article/35622#huawei)
  + Android平台 调整 应用的主 Activity 为 FragmentActivity [详情](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + Android platform adjustment The main Activity of the application is FragmentActivity [Details](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + Android平台 修复 uploader 上传文件监听上传进度变化返回数据不准确的Bug [详情](https://ask.dcloud.net.cn/question/101035)
  + Android platform Fix the bug that the uploader uploads files to monitor the upload progress change and returns inaccurate data [Details](https://ask.dcloud.net.cn/question/101035)
  + Android平台 修复 监听按键事件 keydown、keyup 不触发回调的Bug
  + Android platform to fix the bug that listening to key events keydown, keyup does not trigger callback
  + Android平台 修复 video 封面图片 poster 拉伸变形显示的Bug [详情](https://ask.dcloud.net.cn/question/114952)
  + Android platform Fix the bug that the video cover image poster is stretched and deformed [Details](https://ask.dcloud.net.cn/question/114952)
  + Android平台 修复 video 设置显示默认播放控件 controls 属性为 false 时手势操作失效的Bug
  + Android platform, fix the bug that the gesture operation fails when the video setting shows the default playback control controls property is false
  + Android平台 修复 previewImage 预览图片可能显示模糊的Bug [详情](https://ask.dcloud.net.cn/question/113520)
  + Android platform Fix previewImage preview image may display a blurred Bug [Details](https://ask.dcloud.net.cn/question/113520)
  + Android平台 修复 3.0.4版本引出的 native.js 获取到原生对象可能无法执行器内部函数的Bug [详情](https://ask.dcloud.net.cn/article/38648)
  + Android platform Fix the bug that native.js from version 3.0.4 may not be able to execute the internal function of the native object [Details](https://ask.dcloud.net.cn/article/38648)
  + iOS平台 修复 previewImage 预览网络图片地址中包含query参数过多可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/98259)
  + iOS platform Fix the bug that previewImage preview network image address contains too many query parameters and may not be displayed [Details](https://ask.dcloud.net.cn/question/98259)
  + iOS平台 修复 audio 音频资源地址中包含中文字符时无法正常播放的Bug [详情](https://ask.dcloud.net.cn/question/103421)
  + iOS platform Fix the bug that audio cannot be played normally when the audio resource address contains Chinese characters [Details](https://ask.dcloud.net.cn/question/103421)
  + iOS平台 修复 video 动态更新 src 属性值域名相同时无法正常切换视频的Bug [详情](https://ask.dcloud.net.cn/question/110386)
  + iOS platform Fix the bug that video cannot be switched normally when the domain name of the src attribute value is the same in video dynamic update [Details](https://ask.dcloud.net.cn/question/110386)
  + iOS平台 修复 video 视频资源地址中包含中文字符时无法正常播放的Bug
  + iOS platform, fix the bug that the video cannot be played normally when the video resource address contains Chinese characters
  + iOS平台 修复 titleNView 标题文字在隐藏软键盘时可能出现抖动的Bug
  + iOS platform, fix the bug that titleNView title text may shake when the soft keyboard is hidden

#### 3.0.5.20210107
* 【uni-app】
  + H5平台 新增 uni.setLeftWindowStyle、uni.setTopWindowStyle、uni.setRightWindowStyle 三个为窗体（leftWindow、rightWindow、topWindow）设置样式的API [详情](https://uniapp.dcloud.net.cn/api/ui/adapt)
  + H5 platform adds uni.setLeftWindowStyle, uni.setTopWindowStyle, uni.setRightWindowStyle three APIs for setting styles for windows (leftWindow, rightWindow, topWindow) [Details](https://uniapp.dcloud.net.cn/api/ ui/adapt)
* 【uniCloud】
  + DB Schema 新增 支持对 string 类型数据配置 trim ，可自动对字符串去除前后空白字符 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=trim)
  + DB Schema added support for configuring trim for string type data, which can automatically remove whitespace characters before and after the string [Details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=trim)
  + DB Schema 修复 部分情况下使用 enum 报错的Bug
  + DB Schema fix some bugs that use enum to report errors
  + DB Schema 修复 exclusiveMinimum、exclusiveMaximum 无效的bug
  + DB Schema fix exclusiveMinimum, exclusiveMaximum invalid bug
  + clientDB 修复 查询树形结构时使用 startWith 某些写法导致报错的Bug
  + clientDB fixed the bug of using startWith when querying the tree structure, which caused an error
  + clientDB 修复 field 内使用JQL联表查询语法时多个右花括号连续出现导致报错的Bug
  + clientDB fixes the bug that multiple closing curly brackets appear in a row when using JQL join table query syntax in the field, causing an error to be reported
  + clientDB 修复 field 中包含`-`时报错的Bug
  + clientDB fixes the bug of error when field contains `-`
  + uniCloud本地调试插件 修复 部分日志导致本地调试服务崩溃的Bug
  + uniCloud local debugging plugin Fix the bug that some logs cause the local debugging service to crash
  + unicloud-db组件 支持tree查询，新增属性 gettree、startwith、limitlevel [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + unicloud-db component Support tree query, new properties gettree, startwith, limitlevel [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
* 【uni-app】
  + uni-ui 新增 uni-data-picker 组件 [详情](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui added uni-data-picker component [Details](https://ext.dcloud.net.cn/plugin?id=3796)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 一键登录 优化 错误回调返回数据格式，添加 appid、metadata、uid 属性，便于排查错误 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.ErrorCallback)
  + One-click login Optimization Error callback returns data format, add appid, metadata, uid attributes, easy to troubleshoot errors [Specification](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.ErrorCallback)
  + Android平台 修复 native.js 调用 requestPermissions 请求的权限已被允许可能引起其它功能无法正常申请系统权限的Bug [详情](https://ask.dcloud.net.cn/question/114645)
  + Android platform Fix the bug that the permission requested by native.js calling requestPermissions has been allowed, which may cause other functions to fail to apply for system permissions normally [Details](https://ask.dcloud.net.cn/question/114645)
  + Android平台 修复 云端打包 更新 com.android.tools.build:gradle 版本后可能引起安装包文件变大、运行显示白屏的Bug [详情](https://ask.dcloud.net.cn/question/114496)
  + Android platform fixes the bug of cloud packaging and updating the com.android.tools.build:gradle version, which may cause the installation package file to become larger and run to display a white screen. [Details](https://ask.dcloud.net.cn/question/ 114496)

#### 3.0.4.20201231
* 【uni-app】
  + App、H5平台 新增 vue 页面中的 input、textarea 在新版浏览器内核（Chrome81+、Safari13.7+）中 confirm-type 即键盘右下角按钮文字，支持更多配置（send、next、done）
  + App, H5 platform Added input and textarea in the vue page In the new browser kernel (Chrome81+, Safari13.7+) confirm-type is the button text in the lower right corner of the keyboard, supports more configurations (send, next, done)
  + App、H5平台 新增 网络请求相关接口 uni.request、uni.uploadFile、uni.downloadFile 支持 timeout 参数
  + App, H5 platform new network request related interfaces uni.request, uni.uploadFile, uni.downloadFile support timeout parameter
  + App、H5平台 优化 input 组件 number 和 digit 类型支持输入负数（注意之前依赖键盘不能输入负数而没有校验输入内容应用应补充校验规则） [详情](https://ask.dcloud.net.cn/question/62987)
  + App and H5 platform optimize the input component number and digit types to support input of negative numbers (note that the keyboard cannot input negative numbers without validating the input content, the application should supplement the validation rules) [Details](https://ask.dcloud.net. cn/question/62987)
  + App、H5平台 修复 slider 组件显示最大值时拖动不跟手的Bug
  + App, H5 platform fix the bug that the slider component does not follow the drag when the maximum value is displayed
  + App、H5平台 修复 slider 组件 step 设置为小数时精度丢失的Bug [详情](https://ask.dcloud.net.cn/question/112749)
  + App, H5 platform Fix the bug of losing precision when the slider component step is set to decimal [Details](https://ask.dcloud.net.cn/question/112749)
  + App平台 新增 uni.login 支持一键登录 [详情](https://uniapp.dcloud.io/univerify)
  + App platform Added uni.login to support one-click login [Details](https://uniapp.dcloud.io/univerify)
  + App平台 新增 uni-AD 支持 Draw信息流广告 [详情](https://uniapp.dcloud.net.cn/component/ad-draw)
  + App platform Added uni-AD support for Draw feed ads [Details](https://uniapp.dcloud.net.cn/component/ad-draw)
  + App平台 新增 uni-AD ad 组件支持 adclicked 事件
  + App platform added uni-AD ad component to support adclicked event
  + App平台 优化 input、textarea 组件去除隐藏键盘自动失去焦点的逻辑并开放相关属性：auto-blur [详情](https://ask.dcloud.net.cn/question/111152)
  + App platform Optimize the input and textarea components to remove the logic that hides the keyboard and automatically lose focus and open related properties: auto-blur [Details](https://ask.dcloud.net.cn/question/111152)
  + App平台 优化 uni.compressImage 支持 width、height 设置
  + App platform optimization uni.compressImage supports width and height settings
  + App平台 优化 uni.canvasGetImageData、uni.canvasSetImageData 等接口执行效率（注意：需更新自定义基座或离线SDK） [详情](https://ask.dcloud.net.cn/question/110948)
  + App platform Optimize the execution efficiency of uni.canvasGetImageData, uni.canvasSetImageData and other interfaces (note: need to update custom base or offline SDK) [Details](https://ask.dcloud.net.cn/question/110948)
  + App平台 优化 uni.previewImage 弹出菜单底部的取消按钮文字根据系统语言进行国际化适配
  + App platform optimization uni.previewImage The text of the cancel button at the bottom of the pop-up menu is internationalized according to the system language
  + App平台 修复 atob 解码 base64 字符串返回结果可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/110758)
  + App platform Fixed the bug that atob decoding base64 string may return incorrect results [Details](https://ask.dcloud.net.cn/question/110758)
  + App平台 修复 uni.setNavigationBarColor 部分时机不生效的Bug [详情](https://ask.dcloud.net.cn/question/110894)
  + App platform Fix the bug that some timings of uni.setNavigationBarColor do not take effect [Details](https://ask.dcloud.net.cn/question/110894)
  + App平台 修复 非 popup 类型的 subnvue 对象调用 setStyle 方法报错的Bug [详情](https://ask.dcloud.net.cn/question/110922)
  + App platform Fixed the bug that the setStyle method of the non-popup subnvue object reported an error [Details](https://ask.dcloud.net.cn/question/110922)
  + App平台 修复 nvue progress 组件 设置属性 active=true 时报错的Bug [详情](https://ask.dcloud.net.cn/question/113041)
  + App platform Fixed the bug that the nvue progress component set the property active=true to report an error [Details](https://ask.dcloud.net.cn/question/113041)
  + App平台 修复 mainfest.json 配置 flex-direction:row 时部分内置组件样式错乱的Bug [详情](https://ask.dcloud.net.cn/question/102195)
  + App platform Fix the bug that some built-in components have disordered styles when flex-direction:row is configured in mainfest.json [Details](https://ask.dcloud.net.cn/question/102195)
  + App-Android平台 修复 uni 原生插件扩展 Component 组件 bindData 回调不触发的Bug
  + App-Android platform Fix the bug that the uni native plug-in extension Component component bindData callback does not trigger
  + App-Android平台 修复 华为更新系统后 canvas 绘制本地图像跨域的Bug [详情](https://ask.dcloud.net.cn/question/110676)
  + App-Android platform Fix the bug that canvas draws local images across domains after Huawei updates the system [Details](https://ask.dcloud.net.cn/question/110676)
  + App-Android平台 修复 uni.request 请求超时不准确的Bug，优化请求最大并发数为10 [详情](https://ask.dcloud.net.cn/question/109996)
  + App-Android platform Fix the bug of inaccurate request timeout of uni.request, optimize the maximum number of concurrent requests to 10 [Details](https://ask.dcloud.net.cn/question/109996)
  + App-Android平台 修复 应用版本名称包含中文时，uni.request 可能引起请求失败的Bug [详情](https://ask.dcloud.net.cn/question/112326)
  + App-Android platform Fix the bug that uni.request may cause the request to fail when the app version name contains Chinese [Details](https://ask.dcloud.net.cn/question/112326)
  + App-Android平台 修复 websocket 在5.0以下设备强制使用 LTSv1.2 导致无法建立连接的Bug [详情](https://ask.dcloud.net.cn/question/110367)
  + App-Android platform Fix the bug that websocket forcibly use LTSv1.2 on devices below 5.0, resulting in failure to establish a connection [Details](https://ask.dcloud.net.cn/question/110367)
  + App-Android平台 修复 页面存在 subnvue 时 web-view 组件无法返回的Bug [详情](https://ask.dcloud.net.cn/question/111213)
  + App-Android platform Fix the bug that the web-view component cannot return when the page has subnvue [Details](https://ask.dcloud.net.cn/question/111213)
  + App-Android平台 修复 nvue input组件设置 focus 属性值为 false 时依然会自动获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/110553)
  + App-Android platform Fix the bug that the nvue input component will automatically get the focus when the focus attribute is set to false [Details](https://ask.dcloud.net.cn/question/110553)
  + App-Android平台 修复 nvue ad 组件频繁打开、关闭页面操作可能引起崩溃的Bug
  + App-Android platform Fix the bug that the frequent opening and closing of the nvue ad component may cause a crash
  + App-Android平台 修复 nvue map 组件 getScale 获取地图缩放等级可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/85722)
  + App-Android platform Fix the bug that the nvue map component getScale may be inaccurate to get the map zoom level [Details](https://ask.dcloud.net.cn/question/85722)
  + App-Android平台 修复 nvue input 组件不设置 confirm-type 属性时 confirm 事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/112729)
  + App-Android platform Fix the bug that the confirm event does not trigger when the nvue input component does not set the confirm-type attribute [Details](https://ask.dcloud.net.cn/question/112729)
  + App-Android平台 修复 nvue image 组件加载图片过多可能引起内存溢出导致页面滚动卡顿的Bug
  + App-Android platform Fix the bug that the nvue image component loads too many images, which may cause memory overflow and cause page scrolling to freeze.
  + App-iOS平台 修复 input 组件在点击时取消禁用无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/110491)
  + App-iOS platform Fix the bug that the soft keyboard cannot pop up when the input component is canceled when clicked [Details](https://ask.dcloud.net.cn/question/110491)
  + App-iOS平台 修复 canvas 组件绘制字体部分属性未生效的Bug [详情](https://ask.dcloud.net.cn/question/110227)
  + App-iOS platform Fix the bug that some properties of canvas component drawing fonts do not take effect [Details](https://ask.dcloud.net.cn/question/110227)
  + App-iOS平台 修复 生物认证 人脸识别 在未录入FaceID的情况下可能检查为已录入的Bug [详情](https://ask.dcloud.net.cn/question/112383)
  + App-iOS platform Fix biometric authentication and face recognition may be checked as an entered bug when FaceID is not entered [Details](https://ask.dcloud.net.cn/question/112383)
  + App-iOS平台 修复 uni.openLocation 页面使用 Apple 地图导航目的地错误的Bug
  + App-iOS platform Fix the bug that the uni.openLocation page uses Apple Maps to navigate the wrong destination
  + App-iOS平台 修复 调用 getScreenBrightness、setScreenBrightness 会触发 onShow、onHide 的Bug
  + App-iOS platform Fix the bug that calling getScreenBrightness and setScreenBrightness will trigger onShow and onHide
  + App-iOS平台 修复 nvue video 组件的子组件点击事件会透传到 video 组件上的Bug [详情](https://ask.dcloud.net.cn/question/110601)
  + App-iOS platform Fixed the bug that the click event of the sub-component of the nvue video component would be transparently transmitted to the video component [Details](https://ask.dcloud.net.cn/question/110601)
  + App-iOS平台 修复 nvue input 组件设置 focus 为 true 时频繁打开、关闭页面操作可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/110809)
  + App-iOS platform Fix the bug that frequent opening and closing of page operations may cause crashes when nvue input component is set focus to true [Details](https://ask.dcloud.net.cn/question/110809)
  + App-iOS平台 修复 nvue text 组件设置相同的字体大小，不同文字内容高度不一致的Bug [详情](https://ask.dcloud.net.cn/question/112175)
  + App-iOS platform Fix the bug that the nvue text component sets the same font size and the height of different text content is inconsistent [Details](https://ask.dcloud.net.cn/question/112175)
  + App-iOS平台 修复 nvue video 组件动态更新 src 属性无法播放本地视频的Bug [详情](https://ask.dcloud.net.cn/question/113920)
  + App-iOS platform Fix the bug that the nvue video component dynamically updates the src attribute and cannot play the local video [Details](https://ask.dcloud.net.cn/question/113920)
  + H5平台 新增 custom-tab-bar 组件，可自由定义 tabBar 的位置和样式，比如在宽屏浏览器上显示在 topWindow 中 [详情](https://uniapp.dcloud.io/component/custom-tab-bar)
  + The custom-tab-bar component is added to the H5 platform, which can freely define the position and style of the tabBar, such as displaying it in the topWindow on a widescreen browser [Details](https://uniapp.dcloud.io/component/custom-tab -bar)
  + H5平台 新增 uni.chooseFile 接口。用于替代 input type=file [详情](https://uniapp.dcloud.io/api/media/file)
  + Added uni.chooseFile interface for H5 platform. Used in place of input type=file [details](https://uniapp.dcloud.io/api/media/file)
  + H5平台 优化 uni.getLocation 支持通过 IP 定位
  + H5 platform optimized uni.getLocation to support location by IP
  + H5平台 优化 uni.chooseLocation、uni.openLocation 在大屏模式的显示效果
  + H5 platform Optimize the display effect of uni.chooseLocation, uni.openLocation in large screen mode
  + H5平台 优化 日期类型 picker 组件在PC版Chrome和FireFox上使用浏览器自带日期选择控件
  + H5 platform optimization Date type picker component Use the browser's own date picker on PC Chrome and FireFox
  + H5平台 优化 单列 picker 组件在大屏设备默认使用 select 样式
  + H5 platform optimization The single-column picker component uses the select style by default on large-screen devices
  + H5平台 优化 tabBar 支持配置更多属性，如：fontSize、height、midButton
  + H5 platform optimized tabBar Support configuration of more properties, such as: fontSize, height, midButton
  + H5平台 修复 tabBar 的 iconPath 使用带协议的图像路径不显示的Bug
  + H5 platform Fix the bug that the iconPath of the tabBar does not display when using the image path with the protocol
  + H5平台 修复 topWindow 存在时，下方window页面的 navigationBar 无法显示的Bug
  + H5 platform Fix the bug that the navigationBar of the lower window page cannot be displayed when the topWindow exists
  + H5平台 修复 picker-view 组件 indicator-class 设置不生效的Bug
  + H5 platform Fix the bug that the indicator-class setting of the picker-view component does not take effect
  + H5平台 修复 iOS9 平台浏览器访问报错的Bug [#2320](https://github.com/dcloudio/uni-app/issues/2320)
  + H5 platform Fix the bug of browser access error on iOS9 platform [#2320](https://github.com/dcloudio/uni-app/issues/2320)
  + 小程序平台 修复 for 循环中遍历数组表达式时部分事件编译后执行报错的Bug [详情](https://ask.dcloud.net.cn/question/110706)
  + Mini Program Platform Fix the bug that some events are executed after compiling when traversing array expressions in a for loop [Details](https://ask.dcloud.net.cn/question/110706)
  + 微信小程序平台 优化 跳转页面路径中不再自动增加 __id__ 参数
  + Wechat applet platform optimization The __id__ parameter is no longer automatically added to the jump page path
  + uni-ui 新增 uni-easyinput 组件，提供更强大、易用的输入框封装组件，内置表单校验 [详情](https://ext.dcloud.net.cn/plugin?id=3455)
  + uni-ui adds the uni-easyinput component, which provides a more powerful and easy-to-use input box package component with built-in form validation [Details](https://ext.dcloud.net.cn/plugin?id=3455)
  + uni-ui 新增 uni-data-checkbox 组件，简化单选复选框的使用 [详情](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui adds uni-data-checkbox component to simplify the use of radio checkboxes [Details](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui 修复 forms、list、dateformat、indexed-list等组件的问题 [详情](https://ext.dcloud.net.cn/plugin?id=55)
  + uni-ui fixes the problems of forms, list, dateformat, indexed-list and other components [Details](https://ext.dcloud.net.cn/plugin?id=55)
  + hello uni-app 新增 App端一键登录示例（API分类login示例中）
  + hello uni-app Added a one-click login example on the App side (in the API category login example)
  + hello uni-app 优化 适配PC宽屏，参考：[https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
  + hello uni-app is optimized for PC widescreen, refer to: [https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
  + hello uni-app 修复 在 H5 下【设置 tabBar】示例页面设置背景色时颜色错误的Bug
  + hello uni-app fix the bug that the color is wrong when setting the background color of the example page under H5 [Set tabBar]
  + 前后一体登录项目模板 新增 App端一键登录、修改密码
  + Front and back integrated login project template Added one-click login and password modification on the App side
* 【uniCloud】
  + 【重要】调整 前端内置了`<unicloud-db>`组件，无需再人工引入插件市场的[clientDB组件插件](https://ext.dcloud.net.cn/plugin?id=3256) [规范](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
  + [Important] Adjusting the built-in `<unicloud-db>` component in the front-end, there is no need to manually introduce the [clientDB component plugin] in the plugin market (https://ext.dcloud.net.cn/plugin?id=3256) [Specification ](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
  + 【重要】新增 uniCloud 本地服务。支持前端项目在控制台切换连接云环境还是本地服务。本地修改直接生效，不用上传即可联调 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 【Important】Add uniCloud local service. Support the front-end project to switch between the cloud environment and the local service in the console. The local modification takes effect directly, and you can make joint debugging without uploading [Details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 【重要】调整 uniCloud 项目目录结构调整。根目录下为uniCloud目录，其下有二级目录 cloudfunctions 和 database。database目录存放数据表schema和扩展验证函数。并提供了目录结构迁移向导 [详情](https://ask.dcloud.net.cn/article/38028)
  + [Important] Adjust the uniCloud project directory structure adjustment. The root directory is the uniCloud directory, and there are secondary directories cloudfunctions and database under it. The database directory stores data table schemas and extended validation functions. And provides a directory structure migration wizard [details](https://ask.dcloud.net.cn/article/38028)
  + HBuilderX【重要】新增 本地编写 DB Schema，即数据表的表结构。支持新建、上传、下载表结构，支持代码提示。
  + HBuilderX [Important] Added local writing DB Schema, that is, the table structure of the data table. Supports creating, uploading, and downloading table structures, and supports code prompts.
  + HBuilderX【重要】新增 `<unicloud-db>`组件（即之前的clientDB组件）支持代码提示。可提示JQL语法，在本地有schema的情况下可提示数据库表名字段。大幅提升开发效率
  + HBuilderX [Important] Added `<unicloud-db>` component (the previous clientDB component) to support code hints. The JQL syntax can be prompted, and the database table name field can be prompted if there is a local schema. Greatly improve development efficiency
  + HBuilderX 新增 编写 validateFunction，即数据库扩展校验函数。支持新建、上传、下载validateFunction
  + Added HBuilderX Write validateFunction, which is a database extension validation function. Support new, upload, download validateFunction
  + HBuilderX 新增 uni-clientDB-actions 支持单文件上传、删除
  + HBuilderX added uni-clientDB-actions to support single file upload and delete
  + HBuilderX 优化 db_init.json 当云数据库存在同名数据表时，提示覆盖的窗口UI
  + HBuilderX optimizes db_init.json when there is a data table with the same name in ApsaraDB for the window UI that prompts for overlay
  + HBuilderX 优化 uniCloud 关联云服务空间的选择方式。并支持关联其它项目服务空间，实现多个项目连接一个服务空间 [详情](https://ask.dcloud.net.cn/article/37949)
  + HBuilderX optimizes the selection method of uniCloud associated cloud service space. And support the association of other project service spaces to achieve multiple projects connected to a service space [Details](https://ask.dcloud.net.cn/article/37949)
  + HBuilderX 新增 可视化管理公共模块依赖 （对云函数点右键->管理公共模块依赖）
  + HBuilderX adds visual management of public module dependencies (right-click on the cloud function -> manage public module dependencies)
  + HBuilderX 优化 上传uni-id公共模块时，增加校验，对比配置密钥是否一致
  + HBuilderX optimization When uploading uni-id public modules, add verification to compare whether the configuration keys are consistent
  + HBuilderX 修复 云函数本地运行 控制台日志打印`null`和`undefined`值错误的Bug
  + HBuilderX fix the bug that the console log prints wrong values of `null` and `undefined` when running cloud functions locally
  + HBuilderX 修复 前端网页托管 某些情况下，上传网站到服务器，控制台显示(0 MB)大于上传限制(0 MB)的Bug [详情](https://ask.dcloud.net.cn/question/111228)
  + HBuilderX fixes the bug that when uploading the website to the server in some cases of front-end web page hosting, the console display (0 MB) is larger than the upload limit (0 MB). [Details](https://ask.dcloud.net.cn/question/ 111228)
  + uni-id 新增 App端一键登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=univerify)
  + uni-id Added one-click login on App [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=univerify)
  + clientDB 新增 jql写法支持在field内写别名 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=alias)
  + clientDB adds jql writing to support writing aliases in fields [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=alias)
  + clientDB 新增 schema内enum支持使用云端数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=enum)
  + clientDB adds enum support for using cloud data in schema [Details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=enum)
  + clientDB 新增 schema内bsonType支持password，设置后所有用户均不可读取此字段
  + clientDB added bsonType in schema to support password, after setting this field cannot be read by all users
  + clientDB 优化 索引冲突时返回更友好的提示及错误码 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue)
  + clientDB optimization Return more friendly prompts and error codes in case of index conflicts [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue)
  + 阿里云支持事务（startTransaction方式，暂不支持runTransaction）[详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=starttransaction)
  + Alibaba Cloud supports transactions (startTransaction method, runTransaction is not currently supported) [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=starttransaction)
  + 其他云端更新日志另见：[https://uniapp.dcloud.io/uniCloud/release](https://uniapp.dcloud.io/uniCloud/release)
  + See also other cloud changelogs: [https://uniapp.dcloud.io/uniCloud/release](https://uniapp.dcloud.io/uniCloud/release)
  + 阿里云 修复 本地运行云函数向云数据库插入值为 null 的字段会报错的Bug
  + Alibaba Cloud fixed the bug that an error will be reported when a field with a null value is inserted into the cloud database when running a cloud function locally
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 【重要】新增 一键登录，运营商网关认证，免短信验证获取手机号、一键免密登录 [详情](https://uniapp.dcloud.net.cn/univerify)
  + 【Important】Added one-key login, operator gateway authentication, SMS-free verification to obtain mobile phone number, one-key password-free login [Details](https://uniapp.dcloud.net.cn/univerify)
  + 新增 UniPush 华为手机，厂家通道离线推送可在服务端设置角标[参考插件](https://ext.dcloud.net.cn/plugin?id=1680)
  + Added UniPush Huawei mobile phone, the manufacturer channel offline push can set the corner mark on the server [Reference Plugin](https://ext.dcloud.net.cn/plugin?id=1680)
  + 新增 uni-AD 编程控制开屏广告的开启或关闭 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setSplashAd)
  + Added uni-AD programming to control the opening or closing of SplashAd [Specification](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setSplashAd)
  + 新增 uni-AD 激励视频、全屏视频、信息流广告支持监听点击广告事件
  + Added uni-AD rewarded video, full-screen video, news feed ad support to monitor click ad events
  + 新增 4个安全类API，推荐客户端安全要求较高的应用（如使用了激励视频），使用如下4个API并且搭配js原生混淆和App加固，防止客户端被篡改
  + Added 4 security APIs. It is recommended for applications with high client security requirements (such as using rewarded videos), and the following 4 APIs are used together with js native obfuscation and App reinforcement to prevent clients from being tampered with
    - 新增 plus.navigator.getSignature 获取应用签名标识。可用于判断App的证书是否被重签 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
    - Added plus.navigator.getSignature to get the app signature. Can be used to determine whether the app's certificate has been re-signed [Specification](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
    - 新增 plus.navigator.isSimulator 判断App是否运行在模拟器环境 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
    - Added plus.navigator.isSimulator to determine whether the app is running in the simulator environment [Specification](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
    - 新增 plus.navigator.isRoot 判断设备是否被root [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
    - Added plus.navigator.isRoot to determine whether the device is rooted [Specification](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
    - 新增 plus.networkinfo.isSetProxy 判断设备的网络是否设置了代理 [规范](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)
    - Added plus.networkinfo.isSetProxy to determine whether the device's network has a proxy set [Specification](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)
  + 新增 QQ登录获取授权信息支持获取用户统一标识 unionid 属性 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.UserInfo)
  + Added QQ login to obtain authorization information to support obtaining the unionid attribute of the user's unified identification [Specification](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.UserInfo)
  + 更新 uni-AD 快手联盟SDK为3.3.5版
  + Update uni-AD Kuaishou Alliance SDK to version 3.3.5
  + Android平台 更新 支付宝SDK为15.8.00，解决提交 GooglePlay 审核报存在不安全的加密模式的Bug [详情](https://ask.dcloud.net.cn/question/114053)
  + Android platform update Alipay SDK is 15.8.00, solve the bug of insecure encryption mode in GooglePlay audit report [Details](https://ask.dcloud.net.cn/question/114053)
  + Android平台 优化 应用启动时申请读写手机存储权限策略默认值为 once [详情](https://ask.dcloud.net.cn/article/36549)
  + Android platform optimization The default value of the application read and write mobile phone storage permission policy is once [Details](https://ask.dcloud.net.cn/article/36549)
  + Android平台 修复 uni-AD 开屏广告在部分设备可能触发崩溃的Bug
  + Android platform, fix the bug that uni-AD open screen advertisement may trigger crash on some devices
  + Android平台 修复 uni-AD 开屏基础广告展示gif图片可能引起应用崩溃的Bug
  + Android platform, fix the bug that uni-AD open screen basic advertisement display gif image may cause the application to crash
  + Android平台 修复 系统分享 sendWithSystem 分享应用资源图片可能失败的Bug [详情](https://ask.dcloud.net.cn/question/111836)
  + Android platform Fix the bug that system sharing sendWithSystem may fail to share application resource pictures [Details](https://ask.dcloud.net.cn/question/111836)
  + Android平台 修复 在Android10及以上设备无法保存视频文件到相册的Bug [详情](https://ask.dcloud.net.cn/question/112970)
  + Android platform Fix the bug that the video file cannot be saved to the album on Android10 and above devices [Details](https://ask.dcloud.net.cn/question/112970)
  + Android平台 修复 相册选择图片视频时超过 180M 的文件无法显示的Bug
  + Android platform fix the bug that files over 180M cannot be displayed when selecting pictures and videos from the album
  + Android平台 修复 UniPush 第一次启动可能无法获取clientid的Bug [详情](https://ask.dcloud.net.cn/question/112318)
  + Android platform Fix the bug that UniPush may not be able to get clientid when it is started for the first time [Details](https://ask.dcloud.net.cn/question/112318)
  + Android平台 修复 UniPush 消息对象 payload 属性值可能没有转换为JSON对象的Bug
  + Android platform Fix the bug that the payload property value of UniPush message object may not be converted to JSON object
  + Android平台 修复 Downloader 下载的链接地址无效时不会触发回调的Bug [详情](https://ask.dcloud.net.cn/question/111826)
  + Android platform Fix the bug that the callback will not be triggered when the download link address of Downloader is invalid [Details](https://ask.dcloud.net.cn/question/111826)
  + Android平台 修复 getCookie setCookie等操作 与 X5 内核 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/111426)
  + Android platform Fix the bug that the operations such as getCookie setCookie are not synchronized with the X5 kernel webview page [Details](https://ask.dcloud.net.cn/question/111426)
  + Android平台 修复 设置窗口标题栏搜索框失去焦点时，光标仍然显示的Bug [详情](https://ask.dcloud.net.cn/question/111045)
  + Android platform Fix the bug that the cursor is still displayed when the search box in the title bar of the settings window loses focus [Details](https://ask.dcloud.net.cn/question/111045)
  + Android平台 修复 关闭窗口页面动画在部分设备上可能出现闪烁的Bug [详情](https://ask.dcloud.net.cn/question/112882)
  + Android platform Fix the bug that the closing window page animation may flicker on some devices [Details](https://ask.dcloud.net.cn/question/112882)
  + Android平台 更新 云端打包 com.android.tools.build:gradle 版本为 4.1.1，适配Android11，修复无法准确检查uni原生插件需要兼容启用AndroidX [详情](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + Android platform update cloud package com.android.tools.build:gradle version is 4.1.1, compatible with Android11, fix can not accurately check uni native plugin needs to be compatible with AndroidX enabled [Details](https://nativesupport.dcloud.net. cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + iOS平台 新增 mediaPlaybackRequiresUserAction 属性控制H5页面支持自动播放音频 [详情](https://ask.dcloud.net.cn/article/94)
  + iOS platform Added mediaPlaybackRequiresUserAction attribute to control H5 page to support automatic audio playback [Details](https://ask.dcloud.net.cn/article/94)
  + iOS平台 修复 uni-AD 快手联盟 激励视频广告的奖励倒计时完成后关闭广告事件 onClose 的 isEnded 属性值可能为 false 的Bug
  + iOS platform, fix the bug that the value of isEnded property of onClose may be false after the reward countdown of uni-AD Kuaishou Alliance rewarded video ad is closed
  + iOS平台 修复 QQ分享进入安全校验后，可能无法再次拉起手机QQ完成分享操作的Bug [详情](https://ask.dcloud.net.cn/question/103383)
  + iOS platform Fix the bug that after QQ sharing enters the security check, it may not be possible to pull up the mobile QQ to complete the sharing operation [Details](https://ask.dcloud.net.cn/question/103383)
  + iOS平台 修复 iPhone12、iPad 系列设备获取手机设备信息的 model 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/112922)
  + iOS platform Fixed the bug that the model attribute value of the mobile device information obtained by iPhone12 and iPad series devices was incorrect [Details](https://ask.dcloud.net.cn/question/112922)
  + iOS平台 修复 iOS14 第一次获取位置信息弹出系统授权提示框时无法获取详细地址的Bug  [详情](https://ask.dcloud.net.cn/question/111570)
  + iOS platform Fix the bug that iOS14 cannot get the detailed address when the system authorization prompt box pops up for the first time to obtain location information [Details](https://ask.dcloud.net.cn/question/111570)
  + iOS平台 修复 iOS13 打开文档文件名称没有后缀时无任何响应的Bug
  + iOS platform Fix the bug that there is no response when opening the document file name without a suffix in iOS13
  + iOS平台 修复 真机运行时 plus.runtime.getProperty 返回的 appid 属性值不正确的Bug
  + iOS platform Fix the bug that the value of the appid property returned by plus.runtime.getProperty is incorrect when the real machine is running
  + iOS平台 修复 设置应用角标数字时没有同步状态到 UniPush 服务器的Bug
  + iOS platform Fix the bug that the status is not synced to the UniPush server when setting the number of the app icon
  + iOS平台 修复 从微信小程序打开App时，plus.runtime.launcher 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/111212)
  + iOS platform Fixed the bug that the value of the plus.runtime.launcher property was incorrect when the app was opened from the WeChat applet [Details](https://ask.dcloud.net.cn/question/111212)
  + iOS平台 修复 设置窗口标题栏搜索框失去焦点时，搜索框内容会被清除掉的Bug [详情](https://ask.dcloud.net.cn/question/111045)
  + iOS platform Fix the bug that when the search box in the title bar of the settings window loses focus, the content of the search box will be cleared [Details](https://ask.dcloud.net.cn/question/111045)
  + iOS平台 修复 视频播放控件 VideoPlayer 播放时进度条可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/112150)
  + iOS platform Fix the bug that the progress bar may be inaccurate when the video playback control VideoPlayer is playing [Details](https://ask.dcloud.net.cn/question/112150)
  + iOS平台 修复 uni原生插件开发可能出现 SimplePing 类冲突的Bug
  + iOS platform Fix the bug that SimplePing class conflict may occur in the development of uni native plug-in
  + iOS平台 修复 保存路径中包含特殊字符的图片到系统相册失败的Bug [详情](https://ask.dcloud.net.cn/question/113990)
  + iOS platform Fixed a bug that failed to save images containing special characters in the path to the system album [Details](https://ask.dcloud.net.cn/question/113990)
* 【uni小程序SDK】
* [uni applet SDK]
  + iOS平台 新增 小程序的打开方式支持 push 方式 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%90%af%e5%8a%a8%e6%96%b9%e5%bc%8f)
  + The new applet opening method on the iOS platform supports the push method [Details](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%90%af%e5%8a%a8% e6%96%b9%e5%bc%8f)
  + iOS平台 新增 支持开启侧滑手势关闭小程序 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e4%be%a7%e6%bb%91%e6%89%8b%e5%8a%bf%e5%85%b3%e9%97%ad%e5%b0%8f%e7%a8%8b%e5%ba%8f)
  + The iOS platform adds support for turning on the side swipe gesture to close the applet [Details](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e4%be%a7%e6%bb%91% e6%89%8b%e5%8a%bf%e5%85%b3%e9%97%ad%e5%b0%8f%e7%a8%8b%e5%ba%8f)
  + iOS平台 修复 小程序跳转其他原生页面再返回小程序时，对应生命周期事件 onShow、onHide 没有触发的Bug
  + iOS platform Fix the bug that when the applet jumps to other native pages and then returns to the applet, the corresponding life cycle events onShow and onHide are not triggered

#### 2.9.8.20201110
* 【uni-app】
  + App-Android平台 修复 uni原生插件扩展Component组件 bindData 回调不触发的Bug
  + App-Android platform Fix the bug that the uni native plugin extends the Component component bindData callback does not trigger the bug
  + App-iOS平台 修复 input 组件在点击时取消禁用无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/110491)
  + App-iOS platform Fix the bug that the soft keyboard cannot pop up when the input component is canceled when clicked [Details](https://ask.dcloud.net.cn/question/110491)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 修复 压缩图片 plus.zip.compressImage 在Android10上可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/110303)
  + Android platform Fix the bug that compressed images plus.zip.compressImage may cause crash on Android10 [Details](https://ask.dcloud.net.cn/question/110303)
  + iOS平台 修复 2.8.13版本引出的 高德定位设置 geocode 为 true 无法返回地址信息的Bug [详情](https://ask.dcloud.net.cn/question/110474)
  + iOS platform Fix the bug that the Geocode location setting geocode is true and cannot return address information caused by version 2.8.13 [Details](https://ask.dcloud.net.cn/question/110474)

#### 2.9.7.20201106
* 【uni-app】
  + 【重要】 更新文档 2.9.0+ 后 rpx、rem 样式变形的处理办法 [详情](https://ask.dcloud.net.cn/article/37911)
  + [Important] How to deal with rpx and rem style deformation after updating document 2.9.0+ [Details](https://ask.dcloud.net.cn/article/37911)
  + App平台、H5平台 新增 支持 uni.offCompassChange、uni.offAccelerometerChange 用于移除相关事件监听
  + App platform, H5 platform Added support for uni.offCompassChange, uni.offAccelerometerChange to remove related event monitoring
  + App平台、H5平台 修复 Safari 14 输入组件禁用状态文字颜色变浅的Bug [详情](https://ask.dcloud.net.cn/question/109013)
  + App platform, H5 platform Fix the bug that the text color becomes lighter when the input component is disabled in Safari 14 [Details](https://ask.dcloud.net.cn/question/109013)
  + App平台 新增 全屏视频 uni.createFullScreenVideoAd [详情](https://uniapp.dcloud.net.cn/api/a-d/full-screen-video)
  + App platform Added full screen video uni.createFullScreenVideoAd [Details](https://uniapp.dcloud.net.cn/api/a-d/full-screen-video)
  + App平台 优化 uni.connectSocket 支持配置 header
  + App platform optimized uni.connectSocket support configuration header
  + App-Android平台 修复 uni.request 请求 cookie 与 X5 内核 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/108639)
  + App-Android platform Fix the bug that the uni.request request cookie is not shared with the X5 kernel webview page [Details](https://ask.dcloud.net.cn/question/108639)
  + App-Android平台 修复 nvue image 组件 mode 设置为 widthFix、heightFix 不生效的Bug
  + App-Android platform Fix the bug that the nvue image component mode is set to widthFix, heightFix does not take effect
  + App-Android平台 修复 nvue map 组件使用 translateMarker 移动 maker 后气泡文本没有跟随移动的Bug [详情](https://ask.dcloud.net.cn/question/95239)
  + App-Android platform Fix the bug that the bubble text does not follow the movement after the nvue map component uses translateMarker to move the maker [Details](https://ask.dcloud.net.cn/question/95239)
  + App-Android平台 修复 nvue map 组件动态删除 marker 的 callout 属性不生效的Bug
  + App-Android platform Fix the bug that the nvue map component dynamically deletes the callout attribute of the marker and does not take effect
  + App-Android平台 修复 部分设备 uni.chooseVideo 无法选择视频的Bug [详情](https://ask.dcloud.net.cn/question/109301)
  + App-Android platform Fix the bug that uni.chooseVideo cannot select video on some devices [Details](https://ask.dcloud.net.cn/question/109301)
  + App-Android平台 修复 nvue map 组件 markers 的 width、height属性不生效的bug [详情](https://ask.dcloud.net.cn/question/108778)
  + App-Android platform Fix the bug that the width and height attributes of the markers of the nvue map component do not take effect [Details](https://ask.dcloud.net.cn/question/108778)
  + App-iOS平台 修复 canvas 组件绘制 uni.getImageInfo 临时路径跨域的Bug [详情](https://ask.dcloud.net.cn/question/108817)
  + App-iOS platform Fix the bug that the canvas component draws the uni.getImageInfo temporary path cross-domain [Details](https://ask.dcloud.net.cn/question/108817)
  + App-iOS平台 修复 nvue scroll-view 组件使用下拉刷新 refresh 隐藏时没有动画效果的Bug [详情](https://ask.dcloud.net.cn/question/108681)
  + App-iOS platform Fix the bug that nvue scroll-view component has no animation effect when it is hidden using drop-down refresh [Details](https://ask.dcloud.net.cn/question/108681)
  + App-iOS平台 修复 nvue image 组件 mode 设置为 widthFix、heightFix 时透明区域填充红色背景的Bug [详情](https://ask.dcloud.net.cn/question/108774)
  + App-iOS platform Fix the bug that the transparent area is filled with red background when the nvue image component mode is set to widthFix and heightFix [Details](https://ask.dcloud.net.cn/question/108774)
  + App-iOS平台 修复 web-view 组件加载的页面 title 为空时，返回按钮不显示的Bug [详情](https://ask.dcloud.net.cn/question/108887)
  + App-iOS platform Fix the bug that the return button is not displayed when the title of the page loaded by the web-view component is empty [Details](https://ask.dcloud.net.cn/question/108887)
  + App-iOS平台 修复 iOS14 上新页面自动获取焦点导致页面变形的Bug [详情](https://ask.dcloud.net.cn/question/107820)
  + App-iOS platform Fix the bug that the new page automatically gets the focus on iOS14 and causes the page to deform [Details](https://ask.dcloud.net.cn/question/107820)
  + App-iOS平台 修复 nvue web-view 组件加载 html 页面中 js 调用 alert 不显示提示框的Bug [详情](https://ask.dcloud.net.cn/question/109791)
  + App-iOS platform Fix the bug that js calls alert in the html page loaded by nvue web-view component does not display the alert box [Details](https://ask.dcloud.net.cn/question/109791)
  + H5平台 优化 鼠标事件支持返回坐标信息
  + H5 platform optimization, mouse events support return coordinate information
  + H5平台 优化 uni.showToast 在 宽屏的显示效果
  + Optimize the display effect of uni.showToast in widescreen on H5 platform
  + H5平台 优化 弹出类接口和组件支持响应 esc、enter 按键
  + H5 platform optimization Pop-up class interface and components support responding to esc, enter buttons
  + H5平台 修复 Chrome 使用自动填充时 placeholder 仍然可见的Bug
  + H5 platform fix bug where placeholder is still visible when Chrome uses autofill
  + H5平台 修复 启用 leftWindow 后 web-view 组件显示错位的Bug
  + H5 platform fix the bug that the web-view component displays misplaced after enabling leftWindow
  + uni-ui 新增 uni-forms 组件，支持表单校验 [详情](https://ext.dcloud.net.cn/plugin?id=2773)
  + uni-ui adds a uni-forms component to support form validation [Details](https://ext.dcloud.net.cn/plugin?id=2773)
  + uni-ui 新增 uni-group 组件，用于表单项分组显示 [详情](https://ext.dcloud.net.cn/plugin?id=3281)
  + uni-ui adds uni-group component for group display of form items [Details](https://ext.dcloud.net.cn/plugin?id=3281)
  + uni-ui 新增 uni-table 组件 [详情](https://ext.dcloud.net.cn/plugin?id=3270)
  + Added uni-table component to uni-ui [Details](https://ext.dcloud.net.cn/plugin?id=3270)
  + uni-ui 新增 uni-dateformat 组件，支持各种日期格式化，以及1分钟前、刚刚等形式 [详情](https://ext.dcloud.net.cn/plugin?id=3279)
  + uni-ui adds the uni-dateformat component, which supports various date formats, as well as 1 minute ago, just now, etc. [Details](https://ext.dcloud.net.cn/plugin?id=3279)
* 【uniCloud】
  + 【重要】新增 uni-clientDB 组件，在前端通过组件直接获得云数据库内容，并直接绑定到界面上，大幅提升开发效率 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component)
  + [Important] Added the uni-clientDB component, which can directly obtain the cloud database content through the component in the front end, and directly bind it to the interface, greatly improving the development efficiency [Details](https://uniapp.dcloud.net.cn/uniCloud /uni-clientdb-component)
  + 【重要】新增 clientDB 支持 `jql` 查询语法，大幅降低数据库操作难度 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=jsquery)、大幅简化联表查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup)
  + [Important] Added clientDB to support `jql` query syntax, greatly reducing the difficulty of database operations [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=jsquery), greatly simplifying join table queries [ Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup)
  + 【重要】调整 clientDB内置，云端不再需要单独的clientDB云函数，前端无需引用clientDB的js sdk，直接在前端写`const db = uniCloud.database()`即可 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb)
  + [Important] Adjusting the built-in clientDB, the cloud no longer needs a separate clientDB cloud function, and the front-end does not need to refer to the js sdk of clientDB, just write `const db = uniCloud.database()` directly in the front-end [Details](https:// uniapp.dcloud.net.cn/uniCloud/clientdb)
  + 【重要】调整 uni-clientDB-actions 目录调整到 cloudfunctions 根目录 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action)
  + [Important] Adjust the uni-clientDB-actions directory to the cloudfunctions root directory [Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action)
  + 【重要】调整 clientDB云函数的permission和validator子目录废除，只需在 DB Schema 中书写permission和validator内容，保存即可直接生效，无需再次导出
  + [Important] Adjust the permission and validator subdirectories of the clientDB cloud function to be abolished. Just write the permission and validator content in the DB Schema and save it to take effect directly without exporting again.
  + 【重要】新增 `uniCloud Admin 基础框架`（HBuilderX新建项目可选择该模板） [详情](https://uniapp.dcloud.net.cn/uniCloud/admin)
  + [Important] Added `uniCloud Admin basic framework` (this template can be selected for HBuilderX new projects) [Details](https://uniapp.dcloud.net.cn/uniCloud/admin)
  + 【重要】新增 web控制台 云数据库配置 DB Schema 后，可直接生成前端工程，含数据表单新增、修改页面，以及校验规则。大幅提升开发效率。 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + [Important] After adding a new web console ApsaraDB for configuring DB Schema, you can directly generate front-end projects, including adding and modifying pages of data forms, as well as validation rules. Significantly improve development efficiency. [Details](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + 【重要】腾讯云 正式商用 [详见](https://uniapp.dcloud.net.cn/uniCloud/price)
  + [Important] Tencent Cloud officially commercialized [see details](https://uniapp.dcloud.net.cn/uniCloud/price)
  + 优化 提升云函数执行速度几十毫秒。非冷启动时与传统服务器性能拉齐（需重新部署云函数）
  + Optimization Improve the execution speed of cloud functions by tens of milliseconds. Compared with traditional server performance in non-cold start (need to redeploy cloud functions)
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
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 uni-AD 支持全屏视频广告 [详情](https://ask.dcloud.net.cn/article/36718#fullscreenvideo)
  + Added uni-AD support for fullscreen video ads [Details](https://ask.dcloud.net.cn/article/36718#fullscreenvideo)
  + 新增 二维码扫码支持 autoDecodeCharset 参数，解决非UTF-8编码数据出现乱码的问题 [详情](https://ask.dcloud.net.cn/question/66886)
  + Added QR code scanning support autoDecodeCharset parameter to solve the problem of garbled characters in non-UTF-8 encoded data [Details](https://ask.dcloud.net.cn/question/66886)
  + 优化 uni-AD 基础开屏广告显示效果，适配各种分辨率屏幕设备
  + Optimize the display effect of uni-AD basic open-screen advertisements to adapt to various screen resolutions
  + Android平台 更新 高德地图SDK为7.6.0版
  + Android platform update AutoNavi Map SDK to version 7.6.0
  + Android平台 更新 uni-AD 快手联盟SDK为3.3.4.2版
  + Android platform update uni-AD Kuaishou Alliance SDK to version 3.3.4.2
  + Android平台 修复 uni-AD 腾讯广点通视频开屏广告可能造成应用闪退，或关闭广告后点击屏幕部分区域仍然打开落地页的Bug
  + Android platform Fix the bug that the uni-AD Tencent Guangdiantong video opening screen advertisement may cause the application to crash, or click on part of the screen to open the landing page after closing the advertisement.
  + Android平台 修复 uni-AD 应用从后台切换到前台显示开屏广告时，系统状态栏可能遮挡跳过按钮的Bug
  + Android platform Fix the bug that the system status bar may block the skip button when the uni-AD application switches from the background to the foreground to display the open-screen advertisement
  + Android平台 修复 多次调用二维码扫码时，因复用扫码提示音频播放对象导致概率闪退的Bug [详情](https://ask.dcloud.net.cn/question/108776)
  + Android platform Fix the bug that when the QR code scanning is called multiple times, the probability of flashback is caused by multiplexing the scanning code prompting the audio playback object [Details](https://ask.dcloud.net.cn/question/108776)
  + Android平台 修复 获取屏幕亮度 getBrightness 在小米手机上可能返回数据异常的Bug [详情](https://ask.dcloud.net.cn/question/108691)
  + Android platform fix the bug that getBrightness may return abnormal data on Xiaomi mobile phones [Details](https://ask.dcloud.net.cn/question/108691)
  + Android平台 修复 storage 存储数据内容超过 2M 后可能无法正常存取非ASCII字符的Bug
  + Android platform, fix the bug that non-ASCII characters may not be properly accessed after the storage data content exceeds 2M
  + Android平台 修复 UniPush 云端打包 GooglePlay 渠道默认添加定位权限的Bug [详情](https://ask.dcloud.net.cn/question/105068)
  + Android platform Fix the bug that the location permission is added by default in the GooglePlay channel of UniPush cloud package [Details](https://ask.dcloud.net.cn/question/105068)
  + Android平台 修复 Geolocation 定位模块默认添加后台定位权限 ACCESS_BACKGROUND_LOCATION 的Bug [详情](https://ask.dcloud.net.cn/question/109442)
  + Android platform Fix the bug that the Geolocation location module adds background location permission ACCESS_BACKGROUND_LOCATION by default [Details](https://ask.dcloud.net.cn/question/109442)
  + iOS平台 更新 uni-AD 快手联盟SDK为3.3.3版
  + iOS platform update uni-AD Kuaishou Alliance SDK to version 3.3.3
  + iOS平台 更新 云端打包环境XCode为12.1版，uni原生插件兼容支持swift代码
  + iOS platform update Cloud packaging environment XCode is version 12.1, uni native plug-in is compatible and supports swift code
  + iOS平台 修复 微信登录用户选择拒绝授权可能不触发失败回调的Bug [详情](https://ask.dcloud.net.cn/question/109305)
  + iOS platform Fix the bug that the WeChat login user chooses to deny the authorization may not trigger the failure callback [Details](https://ask.dcloud.net.cn/question/109305)
  + iOS平台 优化 本地相册选择照片界面，新增支持 permissionAlert 参数配置权限检测，适配 iOS14 上用户设置为访问`选中的照片`权限时引导修改为访问`所有照片` [文档](http://www.html5plus.org/doc/zh_cn/gallery.html#plus.gallery.GalleryOptions)
  + iOS platform optimizes the local album selection photo interface, adds support for permissionAlert parameter configuration permission detection, adapts to iOS14, when users set the permission to access `selected photos`, the guide is modified to access `all photos` [Documents](http:// www.html5plus.org/doc/en_us/gallery.html#plus.gallery.GalleryOptions)
  + iOS平台 修复 本地相册选择照片界面，在 iOS14 上如果选中的图片在 iCloud 会触发刷新导致排序混乱的Bug [详情](https://ask.dcloud.net.cn/question/108502)
  + iOS platform Fix the local album selection photo interface, on iOS14, if the selected picture is in iCloud, it will trigger a refresh and cause a bug in the sorting disorder [Details](https://ask.dcloud.net.cn/question/108502)
  + iOS平台 修复 本地相册选择照片界面，选择视频文件出现错误提示框，预览视频文件只显示首帧的Bug
  + iOS platform Fixed a bug in the local album selection photo interface, an error prompt box appears when selecting a video file, and the preview video file only displays the bug of the first frame
  + iOS平台 修复 本地相册选择照片界面，设置 filename 参数后选中多张图片后返回路径不正确的Bug
  + For iOS platform, fix the bug of the local album selection photo interface, after setting the filename parameter and selecting multiple images, the return path is incorrect
  + iOS平台 修复 无法保存文件路径包含中文的图片到系统相册的Bug [详情](https://ask.dcloud.net.cn/question/109168)
  + iOS platform Fix the bug that the file path contains Chinese pictures cannot be saved to the system album [Details](https://ask.dcloud.net.cn/question/109168)
  + iOS平台 修复 获取当前地理位置设置 geocode 为 true 时可能无法返回数据的Bug [详情](https://ask.dcloud.net.cn/question/109170)
  + iOS platform Fix the bug that the data may not be returned when the geocode is set to true for the current geographic location [Details](https://ask.dcloud.net.cn/question/109170)
  + iOS平台 修复 获取图片信息 getImageInfo 返回的 width、height 值类型不正确的Bug [详情](https://ask.dcloud.net.cn/question/108893)
  + iOS platform Fix the bug that the width and height values returned by getImageInfo are incorrect [Details](https://ask.dcloud.net.cn/question/108893)
  + iOS平台 修复 视频播放控件横向全屏时唤起软键盘还是竖屏模式的Bug [详情](https://ask.dcloud.net.cn/question/107036)
  + iOS platform Fix the bug that the video playback control evokes the soft keyboard or the vertical screen mode when the video playback control is in horizontal full screen [Details](https://ask.dcloud.net.cn/question/107036)
  + iOS平台 修复 蓝牙订阅特征值 notifyBLECharacteristicValueChange 方法设置 state 属性不生效的Bug
  + iOS platform Fix the bug that the Bluetooth subscription characteristic value notifyBLECharacteristicValueChange method setting the state property does not take effect
  + iOS平台 修复 蓝牙同时读取和订阅特征值可能引起数据返回混乱的Bug [详情](https://ask.dcloud.net.cn/question/108107)
  + iOS platform Fix the bug that Bluetooth reading and subscribing feature values at the same time may cause confusion in data return [Details](https://ask.dcloud.net.cn/question/108107)
  + iOS平台 修复 Webview窗口标题栏搜索框的光标在 iOS13+ 上显示位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/103205)
  + iOS platform Fix the bug that the cursor of the search box in the title bar of the Webview window is displayed in an incorrect position on iOS13+ [Details](https://ask.dcloud.net.cn/question/103205)

#### 2.9.3.20201014
* 【uni-app】
  + 【重要】新增 大屏适配指南 [详情](https://uniapp.dcloud.net.cn/adapt)
  + [Important] Added a guide for large screen adaptation [Details](https://uniapp.dcloud.net.cn/adapt)
  + 【重要】新增 leftWindow、rightWindow、topWindow，用于宽屏适配 [详情](https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow)
  + [Important] Added leftWindow, rightWindow, topWindow for widescreen adaptation [Details](https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow)
  + 【重要】新增 match-media 媒体查询适配组件，用于动态屏幕适配 [详情](https://uniapp.dcloud.net.cn/component/match-media)
  + [Important] Added match-media media query adaptation component for dynamic screen adaptation [Details](https://uniapp.dcloud.net.cn/component/match-media)
  + 新增 支持 uni.createMediaQueryObserver 方法 [详情](https://uniapp.dcloud.net.cn/api/ui/media-query-observer)
  + Added support for uni.createMediaQueryObserver method [Details](https://uniapp.dcloud.net.cn/api/ui/media-query-observer)
  + 【重要】App平台、H5平台 新增 rpx 配置，默认限定了 rpx 生效的最大屏幕宽度为 px。可在 pages.json -> globalStyle 配置 rpxCalcMaxDeviceWidth、rpxCalcBaseDeviceWidth、rpxCalcIncludeWidth 等参数 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + [Important] Added rpx configuration for App platform and H5 platform. By default, the maximum screen width for rpx to take effect is px. Parameters such as rpxCalcMaxDeviceWidth, rpxCalcBaseDeviceWidth, rpxCalcIncludeWidth can be configured in pages.json -> globalStyle [Details](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + 【重要】App平台、H5平台 优化 调整根字体大小为系统默认大小与微信小程序平台一致
  + [Important] App platform, H5 platform optimization Adjust the root font size to the system default size consistent with the WeChat applet platform
  + App平台、H5平台 新增 支持 uni.getSelectedTextRange 方法 [详情](https://uniapp.dcloud.io/api/key?id=getselectedtextrange)
  + App platform, H5 platform Added support for uni.getSelectedTextRange method [Details](https://uniapp.dcloud.io/api/key?id=getselectedtextrange)
  + App平台、H5平台 修复 部分 base64 路径的图像无法显示的Bug [详情](https://ask.dcloud.net.cn/question/106591)
  + App platform, H5 platform Fix the bug that some images of base64 path cannot be displayed [Details](https://ask.dcloud.net.cn/question/106591)
  + App平台、H5平台 修复 获取节点信息未包含 computedStyle 的Bug [详情](https://ask.dcloud.net.cn/question/108387)
  + App platform, H5 platform Fix the bug that the node information does not contain computedStyle [Details](https://ask.dcloud.net.cn/question/108387)
  + App平台 修复 weex 编译模式 vue 页面中的 picker 组件 change 事件有时无法触发的Bug [#1774](https://github.com/dcloudio/uni-app/issues/1774)
  + App platform Fix the bug that the change event of the picker component in the vue page of the weex compilation mode sometimes fails to trigger [#1774](https://github.com/dcloudio/uni-app/issues/1774)
  + App平台 修复 低版本系统上 canvas 组件绘制坐标比实际值小的Bug [详情](https://ask.dcloud.net.cn/question/105866)
  + App platform Fix the bug that the drawing coordinates of the canvas component on the lower version system are smaller than the actual value [Details](https://ask.dcloud.net.cn/question/105866)
  + App平台 修复 canvasContext.measureText 无效的Bug [详情](https://ask.dcloud.net.cn/question/107032)
  + App platform Fix the bug that canvasContext.measureText is invalid [Details](https://ask.dcloud.net.cn/question/107032)
  + App平台 修复 data-set 部分数据为 String 类型时显示错误的Bug [详情](https://ask.dcloud.net.cn/question/100073)
  + App platform Fix the bug that the data-set part of the data is of String type [Details](https://ask.dcloud.net.cn/question/100073)
  + App平台 修复 蓝牙事件监听可以重复添加的Bug [#1988](https://github.com/dcloudio/uni-app/issues/1988)
  + App platform Fix the bug that Bluetooth event listeners can be added repeatedly [#1988](https://github.com/dcloudio/uni-app/issues/1988)
  + App平台 修复 云打包后某些情况下启动白屏的Bug [详情](https://ask.dcloud.net.cn/question/107332)
  + App platform Fix the bug of starting a white screen in some cases after cloud packaging [Details](https://ask.dcloud.net.cn/question/107332)
  + App平台 修复 获取系统外观样式 plus.navigator.getUIStyle 无法调用的Bug [详情](https://ask.dcloud.net.cn/question/103886)
  + App platform fixes the bug that the system appearance style plus.navigator.getUIStyle cannot be called [Details](https://ask.dcloud.net.cn/question/103886)
  + App平台 修复 tabbar 动态显示或隐藏时可能出现闪白的Bug [详情](https://ask.dcloud.net.cn/question/80898)
  + App platform Fix the bug that may flash white when the tabbar is dynamically displayed or hidden [Details](https://ask.dcloud.net.cn/question/80898)
  + App平台 修复 高频调用 uni.saveFile 保存失败的Bug [详情](https://ask.dcloud.net.cn/question/106233)
  + App platform to fix the bug that frequent calls to uni.saveFile fail to save [Details](https://ask.dcloud.net.cn/question/106233)
  + App-Android平台 修复 系统 webview 更新到 Chrome84+ 后 canvas 组件绘制本地图像 uni.canvasToTempFilePath 报错的Bug [详情](https://ask.dcloud.net.cn/question/103303)
  + App-Android platform Fix the bug that the canvas component draws the local image uni.canvasToTempFilePath error after the system webview is updated to Chrome84+ [Details](https://ask.dcloud.net.cn/question/103303)
  + App-Android平台 修复 web-view 组件内 input 被软键盘遮挡的Bug [详情](https://ask.dcloud.net.cn/question/92008)
  + App-Android platform Fix the bug that the input in the web-view component is blocked by the soft keyboard [Details](https://ask.dcloud.net.cn/question/92008)
  + App-Android平台 修复 uni.request 请求 firstIpv4 属性可能不生效的Bug
  + App-Android platform Fix the bug that the firstIpv4 attribute of uni.request request may not take effect
  + App-Android平台 修复 2.8.4版引出的 uni.request 重定向后 cookie 可能丢失的Bug [详情](https://ask.dcloud.net.cn/question/106697)
  + App-Android platform Fix the bug that cookie may be lost after uni.request redirected by version 2.8.4 [Details](https://ask.dcloud.net.cn/question/106697)
  + App-Android平台 修复 nvue v-if 切换 template 可能出现 tap 事件无法触发的Bug [详情](https://ask.dcloud.net.cn/question/106258)
  + App-Android platform Fix the bug that nvue v-if switch template may not trigger the tap event [Details](https://ask.dcloud.net.cn/question/106258)
  + App-Android平台 修复 nvue web-view 组件部分https地址页面无法加载http地址资源的Bug [详情](https://ask.dcloud.net.cn/question/108527)
  + App-Android platform Fix the bug that the https address page of the nvue web-view component cannot load the http address resource [Details](https://ask.dcloud.net.cn/question/108527)
  + App-iOS平台 修复 nvue 使用await请求网络赋值后页面无法渲染的bug [详情](https://ask.dcloud.net.cn/question/107670)
  + App-iOS platform Fix the bug that the page cannot be rendered after nvue uses await to request network assignment [Details](https://ask.dcloud.net.cn/question/107670)
  + App-iOS平台 修复 iPhoneX 横屏启动时页面宽度异常Bug
  + App-iOS platform Fix the bug of abnormal page width when iPhoneX is launched in landscape orientation
  + App-iOS平台 修复 iOS12 以下 :adjust-position="false" 不生效的Bug
  + App-iOS platform Fix the bug that :adjust-position="false" does not take effect below iOS12
  + App-iOS平台 修复 部分情况 input 事件未触发的Bug [详情](https://ask.dcloud.net.cn/question/101135)
  + App-iOS platform to fix the bug that the input event is not triggered in some cases [Details](https://ask.dcloud.net.cn/question/101135)
  + App-iOS平台 修复 nvue video 组件无法播放相对路径的本地视频的Bug [详情](https://ask.dcloud.net.cn/question/107215)
  + App-iOS platform Fix the bug that nvue video component cannot play local video with relative path [Details](https://ask.dcloud.net.cn/question/107215)
  + App-iOS平台 修复 uni原生插件 UniPluginProtocol 协议方法可能不触发回调的Bug
  + App-iOS platform Fix the bug that the uni native plugin UniPluginProtocol protocol method may not trigger the callback
  + App-iOS平台 修复 uni原生插件可能与内部方法名称冲突导致部分功能异常的Bug
  + App-iOS platform Fix the bug that the uni native plugin may conflict with the name of the internal method, causing some functions to be abnormal
  + App-iOS平台 修复 nvue image 组件 mode 设置 widthFix、heightFix 不生效的Bug [详情](https://ask.dcloud.net.cn/question/98827)
  + App-iOS platform Fix the bug that the nvue image component mode setting widthFix and heightFix does not take effect [Details](https://ask.dcloud.net.cn/question/98827)
  + App-iOS平台 修复 nvue map 组件中添加 polyline 边线总是带个箭头的Bug [详情](https://ask.dcloud.net.cn/question/91041)
  + App-iOS platform Fix the bug that the polyline edge always has an arrow in the nvue map component [Details](https://ask.dcloud.net.cn/question/91041)
  + H5平台 调整 picker 组件宽屏下默认垂直居中
  + H5 platform Adjust the default vertical center of the picker component under widescreen
  + H5平台 调整 uni.showActionSheet 宽屏下默认垂直居中，支持 popover 参数调节位置
  + H5 platform, adjust uni.showActionSheet default vertical center in widescreen, support popover parameter adjustment position
  + H5平台 修复 video 组件全屏时 slot 不显示的Bug [详情](https://ask.dcloud.net.cn/question/105724)
  + H5 platform Fix the bug that the slot is not displayed when the video component is full screen [Details](https://ask.dcloud.net.cn/question/105724)
  + H5平台 修复 iOS9 系统 uni.uploadFile 传入 base64 报错的Bug
  + H5 platform Fix the bug that uni.uploadFile in iOS9 system reports an error when base64 is passed in
  + H5平台 修复 image 组件 mode="heightFix" 图像变形的Bug [详情](https://ask.dcloud.net.cn/question/107022)
  + H5 platform Fix the bug of image component mode="heightFix" image deformation [Details](https://ask.dcloud.net.cn/question/107022)
  + H5平台 修复 rich-text 组件无法渲染 section 等标签的Bug
  + For H5 platform, fix the bug that rich-text components cannot render labels such as section
  + 小程序平台 新增 cli版本支持 vue3 [详情](https://ask.dcloud.net.cn/article/37834)
  + Mini Program Platform Added cli version to support vue3 [Details](https://ask.dcloud.net.cn/article/37834)
  + 小程序平台 修复 部分事件使用箭头函数表达式执行报错的Bug [#2132](https://github.com/dcloudio/uni-app/issues/2132)
  + Mini Program Platform Fix the bug that some events use arrow function expressions to report errors [#2132](https://github.com/dcloudio/uni-app/issues/2132)
  + 小程序平台 修复 属性值为空的对象表达式时编译报错的Bug
  + Mini Program Platform Fix the bug of compilation error when the property value is empty object expression
  + 新闻模版 适配PC宽屏 (新建uni-app项目可选择该模板体验)
  + News template adapted to PC widescreen (new uni-app project can choose this template experience)
* 【uniCloud】
  + 【重要】新增 腾讯云 云函数固定出口IP，可用于微信公众号开发等要求配置ip的场景 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip)
  + [Important] Added Tencent Yunyun function fixed export IP, which can be used for scenarios that require IP configuration such as WeChat public account development [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip )
  + 【重要】uni-clientDB 2.0 重大更新，可完整方便的控制权限和数据验证。大多数场景不再需要编写云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB)
  + [Important] uni-clientDB 2.0 is a major update, which allows complete and convenient control of permissions and data verification. Most scenarios no longer need to write cloud functions [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB)
  + 【重要】uni-id 新增 角色权限相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=rbac)
  + [Important] uni-id adds role permissions related functions [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=rbac)
  + 【重要】云数据库支持JSON Schema规范，可在Web控制台数据库管理界面对数据进行格式描述 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + [Important] The cloud database supports the JSON Schema specification, and the data format can be described in the database management interface of the web console [Details](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + 阿里云 去除客户端上传文件类型限制
  + Aliyun removes the file type restriction on client upload
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 uni-AD 支持应用从后台切换到前台显示开屏广告，并默认启用 [详情](https://ask.dcloud.net.cn/article/36718#splash_fr)
  + Added uni-AD support for apps to switch from background to foreground to display splash ads, and enabled by default [Details](https://ask.dcloud.net.cn/article/36718#splash_fr)
  + 新增 uni-AD 支持快手联盟的信息流广告，增加信息流的广告填充
  + Added uni-AD to support the information flow advertisement of Kuaishou Alliance, and increase the advertisement filling of information flow
  + 新增 原生导航标题栏 titleNView 的 searchInput 搜索框支持 color 属性设置文本颜色 [规范](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewSearchInputStyles)
  + Added native navigation title bar titleNView's searchInput search box supports color attribute to set text color [Specification](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewSearchInputStyles)
  + 新增 视频播放控件 VideoPlayer 支持 show-loading 属性设置是否显示loading控件 [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + Added video playback control VideoPlayer supports show-loading property to set whether to display loading control [Specification](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + Android平台 适配 Android10+系统 `分区存储` 机制 [详情](https://ask.dcloud.net.cn/article/36199)
  + Android platform adapts to Android10+ system `partition storage` mechanism [details](https://ask.dcloud.net.cn/article/36199)
  + Android平台 更新 uni-AD 今日头条穿山甲SDK为3.3.0.0版、腾讯广告联盟SDK为4.270.1140版、快手联盟SDK3.3.4版
  + Android platform update uni-AD Toutiao Pangolin SDK is version 3.3.0.0, Tencent Advertising Alliance SDK is version 4.270.1140, Kuaishou Alliance SDK is version 3.3.4
  + Android平台 更新 高德定位SDK版本为5.2.0
  + Android platform update AutoNavi positioning SDK version is 5.2.0
  + Android平台 修复 视频播放控件 VideoPlayer 设置 show-progress 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/106150)
  + Android platform Fix the bug that the video playback control VideoPlayer setting show-progress may not take effect [Details](https://ask.dcloud.net.cn/question/106150)
  + Android平台 修复 Webview窗口设置 videoFullscreen 不生效的Bug [详情](https://ask.dcloud.net.cn/question/106499)
  + Android platform Fix the bug that the Webview window setting videoFullscreen does not take effect [Details](https://ask.dcloud.net.cn/question/106499)
  + Android平台 修复 页面中 input 标签 type 为 file 且 accept 为 video 时点击打开不是启动摄像的Bug [详情](https://ask.dcloud.net.cn/question/104931)
  + Android platform Fix the bug when the input label type is file and accept is video in the page [Details](https://ask.dcloud.net.cn/question/104931)
  + Android平台 修复 File 文件对象的 slice 方法无法获取指定数据内容的Bug [详情](https://ask.dcloud.net.cn/question/106427)
  + Android platform Fix the bug that the slice method of the File file object cannot obtain the specified data content [Details](https://ask.dcloud.net.cn/question/106427)
  + Android平台 修复 设置targetversion为29+时，在Android10及以上设备调用 uni.shareWithSystem 分享图片可能报 `多文件分享只支持照片` 的Bug
  + Android platform fix When the targetversion is set to 29+, calling uni.shareWithSystem on Android10 and above devices to share pictures may report the bug of `multi-file sharing only supports photos`
  + Android平台 修复 安全检测可能报apk安装包的Activity、Service组件存在导出风险的Bug
  + Android platform fix The security detection may report a bug that the Activity and Service components of the apk installation package are at risk of exporting
  + Android平台 修复 压缩图片 plus.zip.compressImage 在Android10上报传入参数错误的Bug [详情](https://ask.dcloud.net.cn/question/108010)
  + Android platform Fix the bug of compressing images plus.zip.compressImage in Android10 reporting the bug of wrong input parameters [Details](https://ask.dcloud.net.cn/question/108010)
  + Android平台 修复 蓝牙订阅特征值 notifyBLECharacteristicValueChange 方法设置 state 属性不生效的Bug
  + Android platform Fix the bug that the Bluetooth subscription characteristic value notifyBLECharacteristicValueChange method does not take effect when setting the state property
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK为3.3.0.0版、腾讯广点通SDK为4.11.11版
  + iOS platform update uni-AD Toutiao Pangolin SDK is version 3.3.0.0, Tencent Guangdiantong SDK is version 4.11.11
  + iOS平台 优化 uni-AD 快手联盟SDK引用库，减少安装包ipa大小约20M
  + iOS platform Optimized the uni-AD Kuaishou Alliance SDK reference library, reducing the installation package ipa size by about 20M
  + iOS平台 修复 uni-AD 腾讯广点通的信息流广告样式可能不正确的Bug
  + iOS platform, fix the bug that the information flow advertisement style of uni-AD Tencent Guangdiantong may be incorrect
  + iOS平台 修复 视频播放控件 VideoPlayer 调用 exitFullScreen 可能导致页面横屏设置失效的Bug [详情](https://ask.dcloud.net.cn/question/105520)
  + iOS platform Fix the bug that the video playback control VideoPlayer calling exitFullScreen may cause the page landscape setting to fail [Details](https://ask.dcloud.net.cn/question/105520)
  + iOS平台 修复 2.7.12版引出的 原生控件对象 plus.nativeObj.View 调用 drawRichText 设置 align 属性为 center 不居中显示的Bug [详情](https://ask.dcloud.net.cn/question/103328)
  + iOS platform Fixed the bug that the native control object plus.nativeObj.View introduced in version 2.7.12 calls drawRichText to set the align property to center and is not displayed in the center [Details](https://ask.dcloud.net.cn/question/103328)
  + iOS平台 修复 wgt热更新后 plus.runtime.getProperty 获取的 versionCode 不正确的Bug [详情](https://ask.dcloud.net.cn/question/108425)
  + iOS platform Fix the bug that the versionCode obtained by plus.runtime.getProperty is incorrect after wgt hot update [Details](https://ask.dcloud.net.cn/question/108425)
  + iOS平台 修复 云端打包不支持最新WWDR中间证书生成的企业版证书的Bug [详情](https://ask.dcloud.net.cn/question/106866)
  + iOS platform Fix the bug that cloud packaging does not support the enterprise version certificate generated by the latest WWDR intermediate certificate [Details](https://ask.dcloud.net.cn/question/106866)
* 【uni小程序SDK】
* [uni applet SDK]
  + iOS平台 修复 小程序前后台切换或跳转其他原生页面再返回小程序页面时，对应的应用生命周期 onShow、onHide 没有触发的Bug
  + iOS platform Fixed the bug that the corresponding application life cycle onShow and onHide did not trigger when switching between the front and back of the applet or jumping to other native pages and then returning to the applet page
  + iOS平台 修复 安装App后偶现首次无法正常启动小程序的Bug
  + iOS platform Fixed the bug that the applet could not be launched normally for the first time after installing the app

#### 2.8.13.2020927
* 【uni-app】
  + App-iOS平台 修复 2.8.12版引出的 nvue image 组件动态设置样式在 iOS14 以下设备图片不显示的Bug [详情](https://ask.dcloud.net.cn/question/107884)
  + App-iOS platform Fix the bug that the nvue image component dynamic style setting style introduced by version 2.8.12 is not displayed on devices below iOS14 [Details](https://ask.dcloud.net.cn/question/107884)
  + App-iOS平台 修复 tabbar 中的文本在 iOS14 上无法完整显示的Bug [#2146](https://github.com/dcloudio/uni-app/issues/2146)
  + App-iOS platform Fix the bug that the text in the tabbar cannot be fully displayed on iOS14 [#2146](https://github.com/dcloudio/uni-app/issues/2146)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + iOS平台 更新 高德地图SDK版本为7.6.0、高德定位SDK版本为2.6.7，解决 iOS14 上显示地图时申请 `连接到本地网络上的设备` 权限的问题
  + iOS platform update AutoNavi Map SDK version is 7.6.0, AutoNavi positioning SDK version is 2.6.7, solve the problem of applying for `connect to a device on the local network` permission when displaying the map on iOS14
  + iOS平台 修复 获取通讯录 plus.contacts.getAddressBook 在 iOS14 上导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/107339)
  + iOS platform Fix the bug of getting the address book plus.contacts.getAddressBook on iOS14 that causes the app to crash [Details](https://ask.dcloud.net.cn/question/107339)

#### 2.8.12.20200926
* 【uni-app】
  + App-Android平台 修复 2.8.4版引出的 uni.request tcp连接没有复用的Bug [详情](https://ask.dcloud.net.cn/question/106167)
  + App-Android platform Fix the bug that the uni.request tcp connection is not multiplexed by version 2.8.4 [Details](https://ask.dcloud.net.cn/question/106167)
  + App-Android平台 修复 2.8.11版引出的 uni-AD 腾讯广点通SDK更新后在X86模拟器上无法正常启动的Bug [详情](https://ask.dcloud.net.cn/question/106532)
  + App-Android platform fixes the bug that the uni-AD Tencent Guangdiantong SDK cannot be started normally on the X86 emulator after the update of the uni-AD Tencent Guangdiantong SDK from version 2.8.11 [Details](https://ask.dcloud.net.cn/question/ 106532)
  + App-iOS平台 修复 离线打包使用 XCode12 编译运行到 iOS14 上 nvue 页面图片无法显示的Bug [详情](https://ask.dcloud.net.cn/question/107320)
  + App-iOS platform Fix the bug that the nvue page image cannot be displayed on iOS14 when offline packaging is compiled and run with XCode12 [Details](https://ask.dcloud.net.cn/question/107320)
  + App-iOS平台 修复 uni原生插件可能与内部方法名称冲突导致部分功能异常的Bug
  + App-iOS platform Fix the bug that the uni native plugin may conflict with the name of the internal method, causing some functions to be abnormal
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 【重要】iOS平台 适配 iOS14 解决应用启动时申请 `连接到本地网络上的设备` 权限导致无法通过AppStore审核的问题 [详情](https://ask.dcloud.net.cn/question/107530)
  + [Important] The iOS platform is adapted to iOS14 to solve the problem that the application for the `connect to a device on the local network` permission cannot pass the AppStore review when the application is launched [Details](https://ask.dcloud.net.cn/question/107530 )
  + iOS平台 适配 iOS14 下拉刷新的雪花样式调整问题
  + iOS platform to adapt to the snowflake style adjustment problem of iOS14 pull-down refresh
  + iOS平台 更新 支付宝Alipay SDK版本为15.7.9，解决 iOS14 上应用启动时提示读取剪切板的问题
  + iOS platform update Alipay SDK version is 15.7.9, solve the problem of prompting to read the clipboard when the application starts on iOS14
  + iOS平台 修复 从本地相册选择图片在 iOS14 上可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/107745)
  + iOS platform Fix the bug that selecting pictures from local albums may display abnormally on iOS14 [Details](https://ask.dcloud.net.cn/question/107745)

#### 2.8.11.20200907
* 【uni-app】
  + 新增 uni.navigateTo 增加参数 events 支持页面间通信 [详情](https://uniapp.dcloud.net.cn/api/router?id=navigateto)
  + Added uni.navigateTo Added parameter events to support communication between pages [Details](https://uniapp.dcloud.net.cn/api/router?id=navigateto)
  + 修复 编译时提示 caniuse-lite 过期的Bug
  + Fix the bug that caniuse-lite expired when compiling
  + App平台、H5平台 优化 image 组件支持 mode="heightFix"
  + App platform, H5 platform optimized image component support mode="heightFix"
  + App平台 优化 uni.canvasToTempFilePath 提高执行速度
  + App platform optimize uni.canvasToTempFilePath to improve execution speed
  + App平台 修复 app.vue 生命周期 onshow 某些情况下无参数的Bug [详情](https://ask.dcloud.net.cn/question/103903)
  + App platform Fix the bug of app.vue life cycle onshow without parameters in some cases [Details](https://ask.dcloud.net.cn/question/103903)
  + App平台 修复 input 组件修改 password 属性后 adjust-position 配置失效的Bug [详情](https://ask.dcloud.net.cn/question/103435)
  + App platform Fix the bug that the adjust-position configuration is invalid after the input component modifies the password attribute [Details](https://ask.dcloud.net.cn/question/103435)
  + App平台 修复 临时文件未清理的Bug [详情](https://ask.dcloud.net.cn/question/103456)
  + App platform to fix the bug that temporary files are not cleaned up [Details](https://ask.dcloud.net.cn/question/103456)
  + App平台 修复 nvue refresh 组件偶现下拉刷新结束后不复位的Bug [详情](https://github.com/dcloudio/uni-app/issues/1107)
  + App platform Fix the bug that the nvue refresh component occasionally does not reset after the pull-down refresh ends [Details](https://github.com/dcloudio/uni-app/issues/1107)
  + App-Android平台 修复 Android11 设备运行白屏的Bug [详情](https://ask.dcloud.net.cn/question/105319)
  + App-Android platform Fix the bug of Android11 device running white screen [Details](https://ask.dcloud.net.cn/question/105319)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求 cookie 与 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/103956)
  + App-Android platform Fix the bug that the uni.request request cookie and the webview page are not synchronized and shared in version 2.8.4 [Details](https://ask.dcloud.net.cn/question/103956)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求默认超时时间过长的Bug
  + App-Android platform Fix the bug that the default timeout time of uni.request request is too long caused by version 2.8.4
  + App-Android平台 修复 2.8.4版引出的 nvue 无法加载网络字体图标文件 iconfont 的Bug [详情](https://ask.dcloud.net.cn/question/104655)
  + App-Android platform Fixed the bug that nvue could not load the iconfont of the web font icon file from version 2.8.4 [Details](https://ask.dcloud.net.cn/question/104655)
  + App-Android平台 修复 调用监听加速度、陀螺仪等 API 可能报`e.setInterval is not a function`错误的Bug [详情](https://ask.dcloud.net.cn/question/105584)
  + App-Android platform Fix the bug that `e.setInterval is not a function` error may be reported when calling APIs such as monitoring acceleration and gyroscope [Details](https://ask.dcloud.net.cn/question/105584)
  + App-Android平台 修复 没有获取到位置权限时，调用 uni.chooseLocation 可能导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/105312)
  + App-Android platform Fix the bug that calling uni.chooseLocation may cause the application to crash when the location permission is not obtained [Details](https://ask.dcloud.net.cn/question/105312)
  + App-iOS平台 修复 scroll-view 组件在 iOS13 触摸交互卡顿的Bug [详情](https://ask.dcloud.net.cn/question/98881)
  + App-iOS platform Fix the bug that the scroll-view component is stuck in touch interaction in iOS13 [Details](https://ask.dcloud.net.cn/question/98881)
  + App-iOS平台 修复 nvue map 组件 controltap 事件返回数据参数名不正确的Bug [详情](https://ask.dcloud.net.cn/question/99769)
  + App-iOS platform Fix the bug that the nvue map component controltap event returns incorrect data parameter name [Details](https://ask.dcloud.net.cn/question/99769)
  + H5平台 优化 uni.previewImage 支持手势缩放
  + H5 platform optimized uni.previewImage to support gesture zoom
  + H5平台 修复 多个 editor 组件会重复加载依赖的Bug
  + H5 platform Fix bug that multiple editor components will repeatedly load dependent bugs
  + H5平台 修复 从首页调用 uni.redirectTo 切换其他页面后首页未销毁的Bug [详情](https://ask.dcloud.net.cn/question/103503)
  + H5 platform Fix the bug that the home page is not destroyed after calling uni.redirectTo from the home page to switch to other pages [Details](https://ask.dcloud.net.cn/question/103503)
  + H5平台 修复 切换页面导致 textarea 组件 auto-height 属性失效的Bug
  + H5 platform Fix the bug that the auto-height property of the textarea component is invalid due to switching pages
  + 小程序平台 修复 v-for 遍历复杂表达式不显示的Bug [#2012](https://github.com/dcloudio/uni-app/issues/2012)
  + Mini Program Platform Fix the bug that v-for traverse complex expressions does not display [#2012](https://github.com/dcloudio/uni-app/issues/2012)
* 【uniCloud】
  + 新增 本地运行 加入显示调试行号等信息
  + Added local operation to display debugging line number and other information
  + 修复 当npm镜像源为淘宝源时，某些云函数或公共模块上传失败的Bug
  + Fixed the bug that some cloud functions or public modules failed to upload when the npm mirror source was Taobao source
  + 修复 某些情况下，上传公共模块，UI卡顿的Bug
  + Fixed the bug that UI stuck when uploading public modules in some cases
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 uni-AD 支持快手联盟的开屏和激励视频广告
  + Added uni-AD to support Kuaishou Alliance's opening screen and rewarded video ads
  + 修复 下载文件设置的临时存储文件名过长时无法正常下载的Bug [详情](https://ask.dcloud.net.cn/question/103336)
  + Fix the bug that the download file cannot be downloaded normally when the temporary storage file name of the download file setting is too long [Details](https://ask.dcloud.net.cn/question/103336)
  + Android平台 修复 UniPush 在部分魅族手机可能无法获取cid的Bug [详情](https://ask.dcloud.net.cn/question/102774)
  + Android platform Fix the bug that UniPush may not be able to obtain cid on some Meizu phones [Details](https://ask.dcloud.net.cn/question/102774)
  + Android平台 修复 设置targetversion为29时，从相册选择图片返回路径不正确的Bug [详情](https://ask.dcloud.net.cn/question/105269)
  + Fix for Android platform. When the targetversion is set to 29, the bug that the path is incorrect when selecting pictures from the album [Details](https://ask.dcloud.net.cn/question/105269)
  + Android平台 修复 设置targetversion为29时，在部分 Android10 设备无法正常定位的Bug
  + Android platform Fix the bug that when targetversion is set to 29, some Android10 devices cannot be positioned normally
  + iOS平台 更新 QQ 分享、登录SDK版本为3.3.9-Lite，解决分享到 QQ 显示未授权应用的问题
  + iOS platform update QQ sharing and login SDK version to 3.3.9-Lite, solve the problem that unauthorized applications are displayed when sharing to QQ
  + iOS平台 修复 设置页面横屏 landscape 显示时，在 iPad 设备上不显示状态栏的Bug [详情](https://ask.dcloud.net.cn/question/103386)
  + iOS platform Fix the bug that the status bar is not displayed on iPad devices when the settings page is displayed in landscape landscape [Details](https://ask.dcloud.net.cn/question/103386)
  + iOS平台 修复 视频播放控件 VideoPlayer 动态修改 objectFit 属性不生效的Bug
  + iOS platform fix the bug that the video player control VideoPlayer dynamically modify the objectFit property does not take effect

#### 2.8.8.20200820
* 【uni-app】
  + App-Android平台 修复 调用 plus.io.requestFileSystem 概率性出现`Failed to find taskCenter`错误信息的Bug [详情](https://ask.dcloud.net.cn/question/103902)
  + App-Android platform Fix the bug that `Failed to find taskCenter` error message may appear when calling plus.io.requestFileSystem [Details](https://ask.dcloud.net.cn/question/103902)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求 cookie 未正确处理可能引起网络请求失败的Bug [详情](https://ask.dcloud.net.cn/question/105139)
  + App-Android platform Fix the bug that the uni.request request cookie introduced by version 2.8.4 is not properly handled that may cause network request failure [Details](https://ask.dcloud.net.cn/question/105139)
  + App-Android平台 修复 2.8.4版引出的 Android4.4系统设备运行崩溃的Bug
  + App-Android platform to fix the bug of Android 4.4 system device crash caused by version 2.8.4
  + 小程序平台 修复 修复部分自定义事件无参数时报错的Bug [#2021](https://github.com/dcloudio/uni-app/issues/2011)
  + Mini Program Platform Fix Fix the bug that some custom events report an error without parameters [#2021](https://github.com/dcloudio/uni-app/issues/2011)
  + 小程序平台 修复 v-for 嵌套 v-if 内使用到全局方法处理当前作用域内数据时报错的Bug [详情](https://ask.dcloud.net.cn/question/105010)
  + Mini Program Platform Fix the bug that an error is reported when a global method is used in v-for nested v-if to process data in the current scope [Details](https://ask.dcloud.net.cn/question/105010)
* 【uniCloud】
  + 阿里云 升级mongoDB到4.0版本，现已支持地理位置
  + Alibaba Cloud upgraded mongoDB to version 4.0, now supports geographic location
  + 优化 云函数插件支持写入components、js_sdk、static目录
  + Optimized cloud function plugin to support writing components, js_sdk, static directories
  + web控制台 阿里云 新增 数据库集合导入导出功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=export)
  + web console Alibaba Cloud Added database collection import and export function [Details](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=export)
  + web控制台 腾讯云 新增 资源概况页面
  + Web console Tencent Cloud Added resource overview page
  + 短信发送 新增 3个通知类短信模板 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + SMS sending Added 3 notification SMS templates [Details](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + uni-AD 新增 信息流和激励视频的多广告源在App同次启动时随机穿插，可提升广告收益
  + uni-AD added the multi-advertising sources of information flow and rewarded video are randomly interspersed when the app is launched at the same time, which can increase advertising revenue
  + uni-AD 新增 设置开屏全屏显示
  + uni-AD added setting open screen full screen display
  + Android平台 修复 uni-AD 开屏显示穿山甲广告点击跳过按钮后，再点击splash页面可能导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/103601)
  + Android platform Fix the bug that the app may crash when the pangolin advertisement is displayed on the uni-AD screen after clicking the skip button, and then clicking the splash page [Details](https://ask.dcloud.net.cn/question/103601)
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.10，今日头条穿山甲SDK版本为3.1.0.5
  + iOS platform update uni-AD Tencent Guangdiantong SDK version is 4.11.10, Toutiao Pangolin SDK version is 3.1.0.5
  + iOS平台 修复 直播推流 LivePusher 监听事件后不触发回调的Bug
  + iOS platform fix the bug that the callback is not triggered after LivePusher listens for events

#### 2.8.6.20200814
* 【uni-app】
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求返回的 http 响应头数据中 key 名称变成小写的Bug [详情](https://ask.dcloud.net.cn/question/103995)
  + App-Android platform Fixed the bug that the key name in the http response header data returned by the uni.request request from version 2.8.4 became lowercase [Details](https://ask.dcloud.net.cn/question/103995)
  + 小程序平台 修复 v-for 中事件使用部分复杂的表达式编译报错的Bug
  + Mini Program Platform Fix the bug that some complex expressions are used in events in v-for to compile errors
  + 小程序平台 修复 v-for 中嵌套 v-if 时部分复杂表达式编译后运行报错的Bug [#2011](https://github.com/dcloudio/uni-app/issues/2011)
  + Mini Program Platform Fix the bug that some complex expressions will run after compiling when nesting v-if in v-for [#2011](https://github.com/dcloudio/uni-app/issues/2011)
  + 微信小程序平台 修复 属性使用复杂的对象表达式小程序开发工具编译报错的Bug [详情](https://ask.dcloud.net.cn/question/103944)
  + Wechat applet platform fixed the bug that attributes use complex object expression applet development tools to compile errors [Details](https://ask.dcloud.net.cn/question/103944)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + iOS平台 更新 UniPush 使用的个推SDK版本为2.4.5.1，解决在部分设备上获取唯一标识可能重复的问题
  + iOS platform Update the personal push SDK version used by UniPush to 2.4.5.1, solve the problem that the unique ID may be duplicated on some devices

#### 2.8.5.20200812
* 【uni-app】
  + 【重要】App-Android平台 修复 targetSdkVersion 设置为 29 时在 Android10 运行白屏的Bug，满足谷歌应用商店上架对targetSdkVersion的要求 [详情](https://ask.dcloud.net.cn/question/103166)
  + [Important] The App-Android platform fixes the bug of running a white screen on Android 10 when targetSdkVersion is set to 29, and meets the requirements for targetSdkVersion listed on the Google App Store [Details](https://ask.dcloud.net.cn/question/103166 )
  + App平台、H5平台 优化 uni.setTabBarItem 支持 pagePath 配置
  + App platform, H5 platform optimize uni.setTabBarItem support pagePath configuration
  + App平台、H5平台 修复 picker 组件设置 value 为 -1 时表现异常的Bug [#1553](https://github.com/dcloudio/uni-app/issues/1553)
  + App platform, H5 platform Fix the bug that the picker component behaves abnormally when the value is set to -1 [#1553](https://github.com/dcloudio/uni-app/issues/1553)
  + App平台、H5平台 修复 editor 组件粘贴文字报错的Bug [详情](https://ask.dcloud.net.cn/question/102948)
  + App platform, H5 platform Fix the bug that the editor component pastes the text error [Details](https://ask.dcloud.net.cn/question/102948)
  + App平台 新增 支持蓝牙相关接口 uni.setBLEMTU、uni.getBLEDeviceRSSI
  + App platform Added support for Bluetooth related interfaces uni.setBLEMTU, uni.getBLEDeviceRSSI
  + App平台 优化 uni.request 支持返回 cookies 属性与微信小程序拉齐（基础库版本 2.10.0+）
  + App platform optimization uni.request supports returning cookies attribute and WeChat applet Lazi (basic library version 2.10.0+)
  + App平台 修复 ibeacon 相关事件回调不触发的Bug [详情](https://ask.dcloud.net.cn/question/102136)
  + App platform Fix the bug that the ibeacon related event callback is not triggered [Details](https://ask.dcloud.net.cn/question/102136)
  + App平台 修复 当前 tab 页面不是配置的首页时，热刷新后 tabBar 消失的Bug [详情](https://ask.dcloud.net.cn/question/101612)
  + App platform Fix the bug that the tabBar disappears after hot refresh when the current tab page is not the configured home page [Details](https://ask.dcloud.net.cn/question/101612)
  + App平台 修复 从 nvue 页面调用 uni.reLaunch 切换到 vue 页面后无法设置状态栏的Bug [详情](https://ask.dcloud.net.cn/question/102594)
  + App platform Fix the bug that the status bar cannot be set after calling uni.reLaunch from the nvue page to switch to the vue page [Details](https://ask.dcloud.net.cn/question/102594)
  + App-Android平台 更新 网络请求底层实现库 OKHttp 版本为3.12.11，提升 websocket 传输效率
  + App-Android platform update The underlying implementation library of network requests is OKHttp version 3.12.11, which improves the transmission efficiency of websocket
  + App-Android平台 修复 nvue input组件绑定值带小数点时显示异常的Bug [详情](https://ask.dcloud.net.cn/question/97745)
  + App-Android platform Fix the bug that the binding value of nvue input component has a decimal point. [Details](https://ask.dcloud.net.cn/question/97745)
  + App-iOS平台 修复 nvue 页面 在 iOS9 系统白屏的Bug
  + App-iOS platform to fix the bug of the white screen of nvue page in iOS9 system
  + H5平台 修复 picker 组件配置 mode="date" 且 fields="year" 时报错的Bug [#1687](https://github.com/dcloudio/uni-app/issues/1687)
  + H5 platform Fix the bug that the picker component configuration mode="date" and fields="year" report an error [#1687](https://github.com/dcloudio/uni-app/issues/1687)
  + 小程序平台 修复 v-for 中方法使用复杂表达式报错的Bug [#373](https://github.com/dcloudio/uni-app/issues/373)
  + Mini Program Platform Fix the bug of using complex expressions in v-for [#373](https://github.com/dcloudio/uni-app/issues/373)
  + 小程序平台 修复 v-for 中模板插值使用复杂表达式报错的Bug [详情](https://ask.dcloud.net.cn/question/102443)
  + Mini Program Platform Fix the bug of template interpolation in v-for reporting errors using complex expressions [Details](https://ask.dcloud.net.cn/question/102443)
  + 小程序平台 修复 v-for 遍历对象表达式报错的Bug [#449](https://github.com/dcloudio/uni-app/issues/449)
  + Mini Program Platform Fix the bug of v-for traversing object expression error [#449](https://github.com/dcloudio/uni-app/issues/449)
  + 小程序平台 修复 v-for 中属性值为对象表达式报错的Bug [#1450](https://github.com/dcloudio/uni-app/issues/1450)
  + Mini Program Platform Fix the bug that the attribute value in v-for reports an error of object expression [#1450](https://github.com/dcloudio/uni-app/issues/1450)
  + 小程序平台 修复 v-for 遍历数值时模板中有复杂表达式不显示的Bug
  + Mini Program Platform Fix the bug that complex expressions in templates are not displayed when v-for traverses values
  + 小程序平台 修复 v-if="false" 时标签内部的方法和过滤器仍然会执行的Bug [#334](https://github.com/dcloudio/uni-app/issues/334)
  + Mini Program Platform Fix the bug that methods and filters inside tags are still executed when v-if="false" [#334](https://github.com/dcloudio/uni-app/issues/334)
  + 微信小程序平台、QQ小程序平台、字节跳动小程序平台 优化 自定义组件支持 v-show 指令 [#1724](https://github.com/dcloudio/uni-app/issues/1724)
  + Wechat applet platform, QQ applet platform, and ByteDance applet platform Optimization Custom components support v-show command [#1724](https://github.com/dcloudio/uni-app/issues/1724)
  + 支付宝小程序平台 修复 v-for 部分情况 key 不生效的Bug
  + Alipay applet platform to fix the bug that v-for key does not take effect in some cases
  + 支付宝小程序平台 修复 支持 uni.getSavedFileList 接口
  + The Alipay applet platform is fixed and supports the uni.getSavedFileList interface
  + 支付宝小程序平台 修复 sjs 中 callMethod 不能正确调用的Bug
  + Alipay applet platform to fix the bug that callMethod cannot be called correctly in sjs
  + 头条小程序平台 修复 修复解构插槽不显示的Bug [详情](https://ask.dcloud.net.cn/question/80187)
  + Toutiao applet platform fix Fix bug that deconstruction slot is not displayed [Details](https://ask.dcloud.net.cn/question/80187)
  + uni-ui 新增 uni-list 组件的 clickable 属性，是否开启点击反馈
  + uni-ui Added clickable property of uni-list component, whether to enable click feedback
  + uni-ui 新增 uni-list 组件的 link 属性，显示右侧箭头并开启点击反馈
  + uni-ui added the link attribute of the uni-list component, showing the right arrow and enabling click feedback
  + uni-ui 新增 uni-list 组件的 to 属性，直接跳转到指定页面
  + uni-ui adds the to attribute of the uni-list component to jump directly to the specified page
  + uni-ui 新增 uni-list 组件的 border 属性，是否显示列表分割线
  + uni-ui adds the border property of the uni-list component, whether to display the list dividing line
  + uni-ui 新增 uni-rate 组件的 disabled 属性，可设置组件禁用状态（之前版本的不可点击状态）
  + uni-ui added the disabled attribute of the uni-rate component, which can set the disabled state of the component (the unclickable state of the previous version)
  + uni-ui 新增 uni-rate 组件的 disabledColor 属性，可设置禁用颜色
  + uni-ui adds the disabledColor property of the uni-rate component to set the disabled color
  + uni-ui 新增 uni-rate 组件的 readonly 属性，可设置组件只读属性
  + uni-ui added the readonly attribute of the uni-rate component, which can set the readonly attribute of the component
  + uni-ui 新增 uni-rate 组件的 allowHalf 属性，可设置组件是否开启半星选择
  + uni-ui adds the allowHalf attribute of the uni-rate component to set whether the component enables half star selection
  + uni-ui 新增 uni-rate 组件的 touchable 属性，可设置组件是否支持滑动手势
  + uni-ui adds the touchable property of the uni-rate component to set whether the component supports swipe gestures
  + uni-ui 修复 uni-rate 组件动态传值不更新的问题
  + uni-ui fix the problem that the dynamic value of uni-rate component is not updated
  + uni-ui 优化 uni-rate 组件的 value 属性可使用 v-model 双向绑定数据
  + uni-ui optimizes the value property of uni-rate component to use v-model two-way binding data
  + uni-ui 优化 uni-popup 组件的扩展组件支持 easycom
  + uni-ui optimization uni-popup component extension component support easycom
  + uni-ui 新增 uni-swipe-action 组件的左侧滑动使用方式
  + uni-ui added uni-swipe-action component's left swipe usage
  + uni-ui 新增 uni-swipe-action 组件的插槽使用方式
  + uni-ui added slot usage for uni-swipe-action component
  + uni-ui 新增 uni-swipe-action 组件的 threshold 属性，可以控制滑动缺省值
  + uni-ui adds the threshold attribute of the uni-swipe-action component, which can control the default value of sliding
  + uni-ui 修复 uni-swipe-aciotn 组件的滚动页面时触发滑动的Bug
  + uni-ui fix the bug of triggering swipe when scrolling the page of uni-swipe-aciotn component
  + uni-ui 优化 uni-swipe-action 组件的长列表滚动性能
  + uni-ui optimize long list scrolling performance of uni-swipe-action component
* 【uniCloud】
  + 阿里云 新增 支持协作者本地运行云函数
  + Alibaba Cloud Added support for collaborators to run cloud functions locally
  + 修复 HBuilderX 2.8.0引出的 公共模块右键菜单 更新依赖本模块的云函数菜单丢失的Bug
  + Fix the bug that the right-click menu of the public module brought out by HBuilderX 2.8.0 is updated, and the cloud function menu that depends on this module is missing.
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 蓝牙设置最大传输单元 setBLEMTU，获取设备信号强度 getBLEDeviceRSSI 等功能 [文档](https://www.html5plus.org/doc/zh_cn/bluetooth.html#plus.bluetooth.setBLEMTU)
  + Added Bluetooth setting maximum transmission unit setBLEMTU, get the device signal strength getBLEDeviceRSSI and other functions [document](https://www.html5plus.org/doc/zh_cn/bluetooth.html#plus.bluetooth.setBLEMTU)
  + 修复 Webview窗口标题栏 titleNView 设置为透明样式时按钮的背景区域无法自适应的Bug
  + Fixed the bug that the background area of the button cannot be adapted when the titleNView of the title bar of the Webview window is set to a transparent style
  + Android平台 更新 UniPush 使用的个推SDK国内渠道版本为2.14.1.0，提升消息推送到达率
  + Android platform Update the domestic channel version of the personal push SDK used by UniPush is 2.14.1.0, which improves the arrival rate of news push
  + Android平台 调整 UniPush 和 个推推送 谷歌渠道默认不显示隐私政策提示框 [详情](https://ask.dcloud.net.cn/article/36479)
  + Android platform Adjust UniPush and Getui Push Google channel does not display the privacy policy prompt box by default [Details](https://ask.dcloud.net.cn/article/36479)
  + Android平台 修复 UniPush 谷歌渠道设置不显示隐私政策提示框可能导致获取推送标识信息失败的Bug
  + Android platform Fix the bug that the privacy policy prompt box is not displayed in the UniPush Google channel settings, which may cause the failure to obtain the push identification information
  + Android平台 优化 native.js 自动回收对象 autoCollection 机制，避免应用长时间运行内存回收不及时的问题
  + Android platform Optimized the autoCollection mechanism of native.js to automatically recycle objects to avoid the problem of untimely memory recovery in applications running for a long time
  + Android平台 修复 从相册图片中扫描二维码识别率低的Bug [详情](https://ask.dcloud.net.cn/question/88500)
  + Android platform Fix the bug of low recognition rate of scanning QR code from album pictures [Details](https://ask.dcloud.net.cn/question/88500)
  + Android平台 修复 保存部分视频文件添加至相册可能无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/102669)
  + Android platform Fix the bug that saving some video files and adding them to the album may not display properly [Details](https://ask.dcloud.net.cn/question/102669)
  + Android平台 修复 自定义基座 wap2app 真机运行 tab 无法切换的Bug [详情](https://ask.dcloud.net.cn/question/102492)
  + Android platform Fix the bug that the custom base wap2app cannot switch tabs when running on a real machine [Details](https://ask.dcloud.net.cn/question/102492)
  + iOS平台 修复 直播推流 LivePusher 设置 whiteness 美白属性值不生效的Bug [详情](https://ask.dcloud.net.cn/question/102761)
  + iOS platform Fix the bug that the whiteness attribute value of LivePusher does not take effect [Details](https://ask.dcloud.net.cn/question/102761)
  + iOS平台 修复 状态栏样式设置为非沉浸式在 iPad 设备上横屏时状态栏显示不正常的Bug
  + iOS platform Fix the bug that the status bar does not display properly when the status bar style is set to non-immersive when the iPad device is landscaped
* 【uni小程序SDK】
* [uni applet SDK]
  + Android平台 优化 小程序后台运行功能，支持关闭多任务窗口 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/android?id=setenablebackground)
  + Android platform optimization Mini program background running function, support closing multitasking windows [Details](https://nativesupport.dcloud.net.cn/UniMPDocs/API/android?id=setenablebackground)
  + Android平台 修复 小程序在manifest.json配置固定横屏或竖屏方向无效的Bug
  + Android platform Fix the bug that the applet configuration in the manifest.json fixed landscape or portrait orientation is invalid

#### 2.8.3.20200728
* 【uni-app】
  + H5平台 修复 启用摇树优化后 audio 组件编译报错的Bug [#1943](https://github.com/dcloudio/uni-app/issues/1943)
  + H5 platform Fix the bug of audio component compilation error after tree shaking optimization is enabled [#1943](https://github.com/dcloudio/uni-app/issues/1943)

#### 2.8.2.20200726
* 【uni-app】
  + 优化 编译错误提示更准确，新增采集未知的编译器错误
  + Optimization The compilation error prompt is more accurate, and the collection of unknown compiler errors is added.
  + App平台 修复 uni.hideLoading 会把 uni.showToast 隐藏掉的Bug
  + App platform fix the bug that uni.hideLoading will hide uni.showToast
  + App平台 修复 uploadTask.abort 无效的Bug [详情](https://ask.dcloud.net.cn/question/99364)
  + App platform Fix uploadTask.abort invalid bug [Details](https://ask.dcloud.net.cn/question/99364)
  + App平台 修复 nvue 页面 Promise 不支持 finally 方法的Bug
  + App platform to fix the bug that Promise on nvue page does not support finally method
  + App平台 修复 局部组件 props 中的 id 会覆盖根节点 id 属性的问题 [详情](https://ask.dcloud.net.cn/question/99900)
  + App platform Fix the problem that the id in the props of the partial component will overwrite the id attribute of the root node [Details](https://ask.dcloud.net.cn/question/99900)
  + App平台 修复 audio 组件不显示的Bug
  + App platform to fix the bug that the audio component does not display
  + App平台 修复 backgroundAudioManager onCanPlay 事件失效的Bug
  + App platform Fix the bug that the backgroundAudioManager onCanPlay event is invalid
  + 【重要】App-Android平台 调整 JS引擎默认从 jscore 改为 V8，提升运算性能 [详情](https://ask.dcloud.net.cn/article/37465)
  + [Important] On App-Android platform, adjust the default JS engine from jscore to V8 to improve computing performance [Details](https://ask.dcloud.net.cn/article/37465)
  + App-Android平台 新增 支持DNS解析时优先使用ipv4 [详情](https://uniapp.dcloud.net.cn/api/request/request)
  + App-Android platform Added support for DNS resolution using ipv4 [Details](https://uniapp.dcloud.net.cn/api/request/request)
  + App-Android平台 修复 启动分包后云端打包可能出现页面无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/100023)
  + App-Android platform fix. After starting the sub-package, there may be a bug that the page cannot be displayed normally. [Details](https://ask.dcloud.net.cn/question/100023)
  + App-Android平台 修复 map 组件 position 样式设置为 fixed 后可能出现地图控件无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/100128)
  + App-Android platform Fix the bug that the map control cannot be displayed normally when the position style of the map component is set to fixed [Details](https://ask.dcloud.net.cn/question/100128)
  + App-Android平台 修复 tabbar 页面中 webview 组件在 wgt 升级后可能出现白屏的Bug [详情](https://ask.dcloud.net.cn/question/99253)
  + App-Android platform Fix the bug that the webview component in the tabbar page may appear white screen after wgt upgrade [Details](https://ask.dcloud.net.cn/question/99253)
  + App-Android平台 修复 nvue 页面使用 video 组件切换到其它 vue 页面后 input 组件无法唤起软键盘的Bug [详情](https://ask.dcloud.net.cn/question/97197)
  + App-Android platform Fix the bug that the input component cannot evoke the soft keyboard after the nvue page uses the video component to switch to other vue pages [Details](https://ask.dcloud.net.cn/question/97197)
  + App-Android平台 修复 nvue input、textarea 组件设置 adjust-position 为 false 后切换页面可能无法唤起软键盘的Bug [详情](https://ask.dcloud.net.cn/question/99416)
  + App-Android platform Fix the bug that the soft keyboard may not be evoked when switching pages after nvue input and textarea components set adjust-position to false [Details](https://ask.dcloud.net.cn/question/99416)
  + App-Android平台 修复 nvue webview 组件设置 webview-styles 的 progress 属性值后进度条显示不正常的Bug
  + App-Android platform Fix the bug that the progress bar does not display properly after the nvue webview component sets the progress attribute value of webview-styles
  + App-Android平台 修复 全面屏手机横屏时页面宽高可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/99365)
  + App-Android platform Fix the bug that the page width and height may be incorrect when the full-screen mobile phone is landscaped [Details](https://ask.dcloud.net.cn/question/99365)
  + App-Android平台 修复 部分平板设备 rpx 计算错误的Bug [#1848](https://github.com/dcloudio/uni-app/issues/1848)
  + App-Android platform Fix the bug that rpx is calculated incorrectly on some tablet devices [#1848](https://github.com/dcloudio/uni-app/issues/1848)
  + App-Android平台 修复 系统日期选择框 pickDate 设置默认、最大、最小日期不生效的Bug [详情](https://ask.dcloud.net.cn/question/95065)
  + App-Android platform Fix the bug that the default, maximum and minimum dates in the system date selection box pickDate do not take effect [Details](https://ask.dcloud.net.cn/question/95065)
  + App-Android平台 修复 tabBar 页面首次启动可能显示区域不正常的Bug [详情](https://ask.dcloud.net.cn/question/100898)
  + App-Android platform Fix the bug that the tabBar page may display abnormal area for the first time [Details](https://ask.dcloud.net.cn/question/100898)
  + App-Android平台 修复 软键盘弹出时执行 uni.reLaunch 在Android10上会导致应用闪退的Bug [详情](https://github.com/dcloudio/uni-app/issues/1895)
  + App-Android platform Fix the bug that executing uni.reLaunch when the soft keyboard pops up will cause the app to crash on Android10 [Details](https://github.com/dcloudio/uni-app/issues/1895)
  + App-Android平台 修复 subNvue 原生子窗体动态显示隐藏可能引起 map 组件显示异常的Bug
  + App-Android platform Fix the bug that the dynamic display and hiding of subNvue native sub-forms may cause abnormal display of map components
  + App-iOS平台 修复 iOS12以下版本 切换到深色背景页面出现闪白的Bug。需注意当 pages.json 文件中配置窗口背景色与页面 style 节点设置背景色不一致时仍可能会闪屏 [详情](https://ask.dcloud.net.cn/question/99453)
  + App-iOS platform Fix the bug of flashing white when switching to a dark background page for versions below iOS12. It should be noted that when the background color of the configuration window in the pages.json file is inconsistent with the background color set by the page style node, the screen may still flicker [Details](https://ask.dcloud.net.cn/question/99453)
  + App-iOS平台 修复 video 组件中使用 cover-image 退出全屏后不显示的Bug [详情](https://ask.dcloud.net.cn/question/98498)
  + App-iOS platform Fix the bug that the video component does not display after using cover-image to exit the full screen [Details](https://ask.dcloud.net.cn/question/98498)
  + App-iOS平台 修复 nvue map 组件 moveToLocation 方法不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/99638)
  + App-iOS platform Fix the bug that the moveToLocation method of the nvue map component does not trigger the callback [Details](https://ask.dcloud.net.cn/question/99638)
  + App-iOS平台 修复 nvue web-view 组件 schemes 无法跳转打开其他应用的Bug [详情](https://ask.dcloud.net.cn/question/99331)
  + App-iOS platform Fix the bug that nvue web-view component schemes cannot jump to open other applications [Details](https://ask.dcloud.net.cn/question/99331)
  + App-iOS平台 修复 nvue 页面 picker-view 组件滚动错位的Bug
  + App-iOS platform to fix the bug that the picker-view component of nvue page is scrolling misaligned
  + App-iOS平台 修复 nvue video 组件在页面关闭后仍在后台播放，再次打开页面出现播放异常的Bug [详情](https://ask.dcloud.net.cn/question/100943)
  + App-iOS platform Fix the bug that nvue video component still plays in the background after the page is closed, and the playback is abnormal when the page is opened again [Details](https://ask.dcloud.net.cn/question/100943)
  + App-iOS平台 修复 nvue 页面开启下拉刷新 enablePullDownRefresh 后，配置自定义导航栏显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100506)
  + App-iOS platform Fix the bug that the custom navigation bar is displayed abnormally after enablePullDownRefresh on the nvue page [Details](https://ask.dcloud.net.cn/question/100506)
  + App-iOS平台 修复 nvue textarea 组件设置 auto-height 为 true 时传入初始值高度没有自适应的Bug [详情](https://github.com/dcloudio/uni-app/issues/992)
  + App-iOS platform Fix the bug that the initial value height is not adaptive when the nvue textarea component sets auto-height to true [Details](https://github.com/dcloudio/uni-app/issues/992)
  + App-iOS平台 修复 nvue textarea 组件 linechange 事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/91477)
  + App-iOS platform Fix the bug that the linechange event of nvue textarea component does not trigger [Details](https://ask.dcloud.net.cn/question/91477)
  + H5平台 修复 onPageNotFound 生命周期无效的Bug [#1743](https://github.com/dcloudio/uni-app/issues/1743)
  + H5 platform Fix the bug of invalid life cycle of onPageNotFound [#1743](https://github.com/dcloudio/uni-app/issues/1743)
  + H5平台 修复 iOS微信内置浏览器打开位置相关页面后无法后退的Bug [#1789](https://github.com/dcloudio/uni-app/issues/1789)
  + H5 platform Fix the bug that the iOS WeChat built-in browser cannot go back after opening the location-related page [#1789](https://github.com/dcloudio/uni-app/issues/1789)
  + 小程序平台 修复 组件的部分写法编译报错的Bug [详情](https://ask.dcloud.net.cn/question/101132)
  + Mini Program Platform Fix the bug that some components write errors when compiling [Details](https://ask.dcloud.net.cn/question/101132)
  + 小程序平台 修复 作用域插槽中定义的 class 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/100724)
  + Mini Program Platform Fix the bug that the class style defined in the scope slot does not take effect [Details](https://ask.dcloud.net.cn/question/100724)
  + 小程序平台 修复 修复组件嵌套时解构插槽内事件报错的Bug [详情](https://ask.dcloud.net.cn/question/99063)
  + Mini Program Platform Fix Fix the bug of deconstructing the event in the slot when components are nested [Details](https://ask.dcloud.net.cn/question/99063)
  + 小程序平台 修复 匿名插槽和具名插槽 default 不等同的Bug
  + Mini Program Platform Fix the bug that anonymous slot and named slot default are not equivalent
  + 微信小程序 修复 多个 v-for 嵌套时部分情况下绑定事件报错的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I1KNYW)
  + WeChat applet Fix the bug of binding event error in some cases when multiple v-fors are nested [Details](https://gitee.com/dcloud/uni-app/issues/I1KNYW)
  + 微信小程序平台 新增 支持生命周期 onUnhandleRejection、onShareTimeline（分享小程序到朋友圈）、onAddToFavorites
  + WeChat applet platform Added support for life cycle onUnhandleRejection, onShareTimeline (share applet to Moments), onAddToFavorites
  + 微信小程序平台 优化 支持作用域插槽当作普通插槽使用 [详情](https://ask.dcloud.net.cn/question/98634)
  + Wechat applet platform optimization to support the use of scoped slots as normal slots [Details](https://ask.dcloud.net.cn/question/98634)
  + 支付宝小程序平台 修复 作用域插槽不显示的Bug [#1253](https://github.com/dcloudio/uni-app/issues/1253)
  + Alipay applet platform fix the bug that the scope slot is not displayed [#1253](https://github.com/dcloudio/uni-app/issues/1253)
  + 新建uni-app项目模板，新增来自插件市场腾讯云提供的discus!Q模板 [详情](https://ext.dcloud.net.cn/plugin?id=2336)
  + Create a new uni-app project template, and add the discus!Q template provided by Tencent Cloud in the plugin market [Details](https://ext.dcloud.net.cn/plugin?id=2336)
  + 登录模版 升级 集成 uni-id 补充云函数，实现前后一体、功能完整的登录注册模板 [详情](https://github.com/dcloudio/uni-template-login)
  + Login template upgrade Integrate uni-id supplementary cloud functions to achieve an integrated and fully functional login registration template [Details](https://github.com/dcloudio/uni-template-login)
* 【uniCloud】
  + 【重要】新增 本地运行云函数，可连接远程数据库和云存储，大幅提升开发效率，同时方便数据导入导出 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=runlocal)
  + [Important] Added local running cloud functions, which can connect to remote databases and cloud storage, greatly improve development efficiency, and facilitate data import and export [Details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id =runlocal)
  + 【重要】新增 插件市场支持云函数付费销售，并可以设置某些云函数加密，欢迎插件作者们提交高质量可售卖插件
  + [Important] Added the plug-in market to support paid sales of cloud functions, and can set some cloud function encryption. Plug-in authors are welcome to submit high-quality sellable plug-ins
  + 【重要】新增[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)，实现简单、统一、可扩展的用户中心，推荐每个 uniCloud 开发者使用
  + [Important] Added [uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id) to achieve a simple, unified and scalable user center, recommended for every uniCloud developer
  + 【重要】新增[uni-clientBD](https://uniapp.dcloud.io/uniCloud/uni-clientDB)，实现安全的客户端直接操作云数据库，大幅提升开发效率，推荐每个 uniCloud 开发者使用
  + [Important] Added [uni-clientBD](https://uniapp.dcloud.io/uniCloud/uni-clientDB), which enables secure clients to directly operate cloud databases, greatly improves development efficiency, and is recommended for every uniCloud developer use
  + 【重要】新增 uniCloud.sendSms 短信发送能力，可方便、便宜的发送验证码短信 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + [Important] Added uniCloud.sendSms SMS sending ability, which can send verification code SMS conveniently and cheaply [Details](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + 新增 web控制台 腾讯云 云数据库备份和恢复功能 [详情](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + New web console Tencent Cloud cloud database backup and restore function [Details](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + 新增 web控制台 腾讯云 云数据库集合名称修改功能
  + Added the function of modifying the name of a collection of Tencent Cloud cloud database in the web console
  + 修复 2.7.14版本引出的支付宝小程序、百度小程序下使用 uniCloud 报错的Bug
  + Fixed the bug of using uniCloud in Alipay applet and Baidu applet from version 2.7.14
  + 修复 2.7.14版本引出的H5端 main.js 内使用 uniCloud 导致 uniCloud 不可使用的Bug
  + Fixed the bug that uniCloud was unavailable due to the use of uniCloud in the main.js of the H5 side introduced in version 2.7.14
  + 修复 云函数内获取客户端系统类型可能为空的Bug
  + Fix the bug that the client system type may be empty in the cloud function
  + 修复 HBuilderX 导入包含common目录的云函数模板，导致原common目录被覆盖的Bug
  + Fixed the bug that HBuilderX imported the cloud function template containing the common directory, causing the original common directory to be overwritten
  + 修复 HBuilderX 某些情况下，上传公共模块，出现npm install失败的Bug
  + Fixed the bug that npm install failed when uploading public modules in HBuilderX in some cases
  + 修复 HBuilderX 上传公共模块没有填写appid时的错误提示与上传云函数不一致的Bug
  + Fixed the bug that HBuilderX uploading a public module without filling in the appid is inconsistent with the upload cloud function
  + 优化 HBuilderX 新建公共模块增加名称不能包含大写字母的限制
  + Optimized HBuilderX new public module to increase the restriction that the name cannot contain uppercase letters
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + uni-AD 更新 穿山甲SDK Android更新为3.1.0.0版、iOS更新为3.1.0.1版；腾讯广告联盟SDK Android更新为4.232.1102版、iOS更新为4.11.9版；360广告SDK Android更新为5.17.3157。请使用广告的开发者尽早升级，老版本在部分新手机上有闪退现象
  + uni-AD updated Pangolin SDK Android to 3.1.0.0, iOS to 3.1.0.1; Tencent Advertising Alliance SDK Android to 4.232.1102, iOS to 4.11.9; 360 Advertising SDK Android to 5.17 .3157. Developers who use ads please upgrade as soon as possible, the old version may crash on some new phones
  + Android平台 修复 请求权限 plus.android.requestPermissions 传入无效权限可能引起应用崩溃的Bug
  + Android platform fix the bug that request permission plus.android.requestPermissions may cause the application to crash when invalid permissions are passed in
  + Android平台 修复 视频播放 安卓9及以下的刘海屏手机上全屏播放引起闪退的Bug [详情](https://ask.dcloud.net.cn/question/99064)
  + Android platform Fix the bug of video playback on Android 9 and below Liu Haiping mobile phones that cause flashback in full-screen playback [Details](https://ask.dcloud.net.cn/question/99064)
  + Android平台 修复 视频播放 VideoPlayer 的 src 属性无法切换相同ip不同端口的流媒体链接地址的Bug [详情](https://ask.dcloud.net.cn/question/95951)
  + Android platform Fix the bug that the src attribute of VideoPlayer cannot switch the streaming media link address of the same ip and different ports [Details](https://ask.dcloud.net.cn/question/95951)
  + Android平台 修复 从系统相册选择文件设置最多选择图片数量 maximum 后不会触发 onmaxed 事件的Bug [详情](https://ask.dcloud.net.cn/question/100062)
  + Android platform Fix the bug that the onmaxed event will not be triggered after selecting the file from the system album to set the maximum number of selected pictures [Details](https://ask.dcloud.net.cn/question/100062)
  + Android平台 修复 消息提示框 toast 在 MIUI12 显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100601)
  + Android platform to fix the bug that the message prompt box toast displays abnormally in MIUI12 [Details](https://ask.dcloud.net.cn/question/100601)
  + Android平台 修复 Webview窗口的 iframe 中调用请求权限 requestPermissions 报错的Bug [详情](https://ask.dcloud.net.cn/question/100592)
  + Android platform Fixed the bug that the requestPermissions error was reported in the iframe of the Webview window [Details](https://ask.dcloud.net.cn/question/100592)
  + Android平台 修复 Webview窗口设置 scrollIndicator 属性可能不生效的Bug
  + Android platform Fix the bug that the scrollIndicator property of the Webview window may not take effect
  + Android平台 修复 连接蓝牙设备 createBLEConnection 设置 timeout 属性无效的Bug
  + Android platform fix the bug that the timeout property of createBLEConnection is invalid when connecting to a bluetooth device
  + Android平台 修复 获取蓝牙设备指定服务特征值的 write 属性值可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/99149)
  + Android platform Fix the bug that the write attribute value of the specified service characteristic value of the Bluetooth device may be incorrect [Details](https://ask.dcloud.net.cn/question/99149)
  + 【重要】iOS平台 新增 云端打包支持配置自定义storyboard启动界面 [详情](https://ask.dcloud.net.cn/article/37475)
  + [Important] Added support for cloud packaging on iOS platform to configure custom storyboard startup interface [Details](https://ask.dcloud.net.cn/article/37475)
  + iOS平台 修复 uni-AD 同时并发调用多次获取信息流广告可能导致无法返回广告数据的Bug
  + For iOS platform, fix the bug that uni-AD may not return advertisement data when uni-AD calls multiple times at the same time to obtain information feed advertisements
  + iOS平台 修复 uni-AD 开屏广告点击特定基础广告时可能引起应用卡死的Bug
  + iOS platform Fix the bug that may cause the app to freeze when the uni-AD open screen ad clicks on a specific basic ad
  + iOS平台 修复 应用首页加载网络页面在启动时可能偶现白屏的Bug [详情](https://ask.dcloud.net.cn/question/99572)
  + iOS platform Fixed a bug where a white screen may occasionally appear when loading the web page on the home page of the app [Details](https://ask.dcloud.net.cn/question/99572)
  + iOS平台 修复 Webview窗口直接加载mp4视频可能显示错误页面的Bug
  + iOS platform Fix the bug that the Webview window may display an error page when loading mp4 video directly
  + iOS平台 修复 音频 audio 连接 airpods 等外接设备时依然使用手机扬声器播放的Bug [详情](https://ask.dcloud.net.cn/question/100719)
  + iOS platform Fix the bug that audio and audio are still played on the phone speaker when connected to external devices such as airpods [Details](https://ask.dcloud.net.cn/question/100719)
  + iOS平台 修复 sqlite 执行查询SQL语句读取 blob 类型数据返回乱码的Bug [详情](https://ask.dcloud.net.cn/question/98721)
  + iOS platform Fix the bug that sqlite executes query SQL statement to read blob type data and returns garbled characters [Details](https://ask.dcloud.net.cn/question/98721)
  + iOS平台 修复 sqlite 执行查询SQL语句读取 big integer 类型数据不准确的Bug [详情](https://ask.dcloud.net.cn/question/100234)
  + iOS platform Fix the bug that sqlite executes the query SQL statement to read the inaccurate data of big integer type [Details](https://ask.dcloud.net.cn/question/100234)
  + iOS平台 修复 连接多个蓝牙设备时，特征值变化事件 onBLECharacteristicValueChange 回调触发异常的Bug [详情](https://ask.dcloud.net.cn/question/99858)
  + iOS platform Fix the bug that the onBLECharacteristicValueChange callback of the characteristic value change event triggers an exception when multiple Bluetooth devices are connected [Details](https://ask.dcloud.net.cn/question/99858)
  + iOS平台 修复 连接蓝牙设备 createBLEConnection 超时不触发错误回调的Bug
  + iOS platform fix the bug that the createBLEConnection timeout does not trigger an error callback when connecting to a bluetooth device
  + iOS平台 修复 连接蓝牙设备后 可能无法写入数据的Bug
  + iOS platform fix the bug that data may not be written after connecting to a bluetooth device
  + iOS平台 修复 连接蓝牙设备断开后 可能无法再次连接的Bug
  + iOS platform fix the bug that the connection to the Bluetooth device may not be able to connect again after disconnection
  + iOS平台 修复 previewImage 预览图片在 iOS14 上导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/100379)
  + iOS platform Fix the bug that previewImage preview images cause the app to crash on iOS14 [Details](https://ask.dcloud.net.cn/question/100379)
* 【uni小程序SDK】
* [uni applet SDK]
  + Android平台 优化 小程序进程为应用私有进程，名称调整为`宿主包名:io.dcloud.unimp`，防止其他APP调用
  + Android platform optimization The applet process is a private process of the application, and the name is adjusted to `host package name: io.dcloud.unimp` to prevent other APPs from calling
  + Android平台 修复 小程序启动界面可能出现闪屏的Bug
  + Android platform fix the bug that the splash screen may appear on the startup interface of the applet
  + iOS平台 新增 预加载小程序功能，可提升初次启动速度 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e9%a2%84%e5%8a%a0%e8%bd%bd%e5%b0%8f%e7%a8%8b%e5%ba%8f)
  + The iOS platform adds a preloaded applet function, which can improve the initial startup speed [Details](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e9%a2%84%e5%8a %a0%e8%bd%bd%e5%b0%8f%e7%a8%8b%e5%ba%8f)
  + iOS平台 新增 小程序支持后台运行功能，可提升二次启动速度 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%bc%80%e5%90%af%e5%90%8e%e5%8f%b0%e8%bf%90%e8%a1%8c)
  + The new applet on the iOS platform supports the background running function, which can improve the secondary startup speed [Details](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%bc%80%e5 %90%af%e5%90%8e%e5%8f%b0%e8%bf%90%e8%a1%8c)
  + iOS平台 优化 小程序启动流程，Hello uni-app 示例应用启动速度提升2倍，在iPhone11设备实测400ms内打开应用首页
  + iOS platform optimization Mini program startup process, the Hello uni-app sample application startup speed is increased by 2 times, and the application home page is opened within 400ms measured on the iPhone11 device
  + iOS平台 修复 发送短信 sendMessage API无效的Bug
  + iOS platform fix the bug that sendMessage API is invalid

#### 2.7.14.20200618
* 【uni-app】
  + 【重要】新增 自动化测试 [详情](https://uniapp.dcloud.io/collocation/auto/quick-start)
  + [Important] Added automated test [Details](https://uniapp.dcloud.io/collocation/auto/quick-start)
  + 【重要】新增 运行和发布到快应用联盟 [详情](https://uniapp.dcloud.io/quickstart?id=quickapp-webview)
  + [Important] Added Run and Publish to Quick App Alliance [Details](https://uniapp.dcloud.io/quickstart?id=quickapp-webview)
  + 【重要】新增 运行和发布到华为快应用 [详情](https://uniapp.dcloud.io/quickstart?id=quickapp-webview-huawei)
  + [Important] Added Run and Publish to Huawei Quick App [Details](https://uniapp.dcloud.io/quickstart?id=quickapp-webview-huawei)
  + 【重要】App-nvue平台、H5平台 新增 API uni.preloadPage 预加载页面，可加快新窗体载入速度 [详情](https://uniapp.dcloud.net.cn/api/preload-page)
  + [Important] App-nvue platform and H5 platform add API uni.preloadPage preload page, which can speed up the loading speed of new forms [Details](https://uniapp.dcloud.net.cn/api/preload-page )
  + App-vue平台 新增 分包支持，可提升大型App启动速度 [详情](https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization)
  + App-vue platform adds subcontracting support, which can improve the startup speed of large apps [Details](https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization)
  + 补充 uni-app 部署 H5 到相对路径/使用file协议教程 [详情](https://ask.dcloud.net.cn/article/37432)
  + Added uni-app to deploy H5 to relative path/use file protocol tutorial [Details](https://ask.dcloud.net.cn/article/37432)
  + App平台、H5平台 修复 -1rpx、-1upx被错误的计算为1px的Bug [详情](https://ask.dcloud.net.cn/question/98270)
  + App platform, H5 platform Fix the bug that -1rpx and -1upx are incorrectly calculated as 1px [Details](https://ask.dcloud.net.cn/question/98270)
  + App平台 修复 使用小程序组件时局部组件不显示的Bug
  + App Platform Fix the bug that some components are not displayed when using applet components
  + App平台 修复 canvasContext.fillText 部分设备多次调用失败的Bug [详情](https://ask.dcloud.net.cn/question/97609)
  + App platform Fixed the bug that canvasContext.fillText failed to be called multiple times on some devices [Details](https://ask.dcloud.net.cn/question/97609)
  + App平台 修复 canvasContext.drawImage 无法绘制 base64 格式图像的Bug [详情](https://ask.dcloud.net.cn/question/95050)
  + App platform Fix the bug that canvasContext.drawImage cannot draw base64 format images [Details](https://ask.dcloud.net.cn/question/95050)
  + App平台 修复 videoContext.stop 无效的Bug
  + App platform fix videoContext.stop invalid bug
  + App平台 修复 map 组件 markers 无 id 时无法移除的Bug
  + App platform to fix the bug that the map component markers cannot be removed when there is no id
  + App平台 修复 map 组件 监听 regionchange 事件报错的Bug
  + App platform to fix the bug that the map component listens to the regionchange event and reports an error
  + App平台 修复 textarea 组件初始化时配置 focus 属性无法获取焦点的Bug
  + App platform Fixed the bug that the focus property could not get the focus when the textarea component was initialized
  + App-Android平台 修复 uni.reLaunch 关闭所有页面打开应用内某个页面后，uni.hideTabBar失效的Bug [详情](https://ask.dcloud.net.cn/question/97140)
  + App-Android platform Fix the bug that uni.hideTabBar fails after uni.reLaunch closes all pages and opens a certain page in the app [Details](https://ask.dcloud.net.cn/question/97140)
  + App-Android平台 修复 uni.scanCode 二维码扫描预览界面在横屏状态下变形的Bug [详情](https://ask.dcloud.net.cn/question/96473)
  + App-Android platform Fix the bug that the uni.scanCode QR code scanning preview interface is deformed in landscape state [Details](https://ask.dcloud.net.cn/question/96473)
  + App-Android平台 修复 uni.setNavigationBarTitle 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/97791)
  + App-Android platform Fix the bug that uni.setNavigationBarTitle may not take effect [Details](https://ask.dcloud.net.cn/question/97791)
  + App-Android平台 修复 wgt热更新后 uni.navigateTo 可能返回找不到访问页面错误的Bug [详情](https://ask.dcloud.net.cn/question/97930)
  + App-Android platform Fix the bug that uni.navigateTo may return the error that the access page cannot be found after wgt hot update [Details](https://ask.dcloud.net.cn/question/97930)
  + App-Android平台 修复 nvue video 组件 controls 设置为 false 时 click 事件在非全屏状态下无法触发的Bug [详情](https://ask.dcloud.net.cn/question/97439)
  + App-Android platform Fix the bug that the click event cannot be triggered in non-full screen state when nvue video component controls are set to false [Details](https://ask.dcloud.net.cn/question/97439)
  + App-Android平台 修复 nvue video 组件 seek 后再设置 src 属性会导致进度跳到视频末尾的Bug [详情](https://ask.dcloud.net.cn/question/97439)
  + App-Android platform Fix the bug that the progress jumps to the end of the video when the nvue video component seeks and then sets the src attribute [Details](https://ask.dcloud.net.cn/question/97439)
  + App-Android平台 修复 nvue livepusher 组件 device-position 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/96784)
  + App-Android platform Fix the bug that the device-position attribute of nvue livepusher component does not take effect [Details](https://ask.dcloud.net.cn/question/96784)
  + App-Android平台 修复 nvue webview 组件加载网页中使用 schemes 跳转就会报错的Bug [详情](https://ask.dcloud.net.cn/question/97271)
  + App-Android platform Fix the bug that the nvue webview component will report an error when using schemes to jump to the web page [Details](https://ask.dcloud.net.cn/question/97271)
  + App-Android平台 修复 map 组件可能无法正常显示的Bug
  + App-Android platform to fix the bug that the map component may not be displayed normally
  + App-Android平台 修复 nvue map 组件 markers 上的气泡 callout 会跟随旋转的Bug [详情](https://ask.dcloud.net.cn/question/98195)
  + App-Android platform Fix the bug that the bubble callout on the markers of the nvue map component will follow the rotation [Details](https://ask.dcloud.net.cn/question/98195)
  + App-Android平台 修复 nvue web-view 组件中 input 标签设置 type 为 file 时选择拍照后可能无法返回图片路径的Bug
  + App-Android platform Fix the bug that the image path may not be returned after taking a photo when the input tag in the nvue web-view component is set to type as file
  + App-Android平台 修复 nvue web-view 组件 schemes 无法跳转打开其它应用的Bug [详情](https://ask.dcloud.net.cn/question/99331)
  + App-Android platform Fix the bug that nvue web-view component schemes cannot jump to open other applications [Details](https://ask.dcloud.net.cn/question/99331)
  + App-iOS平台 修复 nvue waterfall、list、scroll-view 组件中的 loading 组件可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/93128)
  + App-iOS platform Fix the bug that the loading component in the nvue waterfall, list, scroll-view components may display abnormally [Details](https://ask.dcloud.net.cn/question/93128)
  + App-iOS平台 修复 nvue video 组件在 list 中滑动后视频可能无法正常播放的Bug
  + App-iOS platform, fix the bug that the video may not play properly after the nvue video component slides in the list
  + App-iOS平台 修复 uni.request 参数 data 为非字符串时请求失败的Bug
  + App-iOS platform Fix the bug that the request fails when the uni.request parameter data is non-string
  + App-iOS平台 修复 uni.showToast 部分情况文本显示不全的Bug [详情](https://ask.dcloud.net.cn/question/98349)
  + App-iOS platform Fix the bug of incomplete text display in uni.showToast in some cases [Details](https://ask.dcloud.net.cn/question/98349)
  + H5平台 修复 启用摇树优化后部分 es6 语法未转换成 es5 的Bug [详情](https://ask.dcloud.net.cn/question/98104)
  + H5 platform fix The bug that some es6 syntax is not converted to es5 after tree shaking optimization is enabled [Details](https://ask.dcloud.net.cn/question/98104)
  + H5平台 修复 PC 端获取屏幕宽高错误的Bug [详情](https://ask.dcloud.net.cn/question/97721)
  + H5 platform Fix the bug that the PC side gets the wrong screen width and height [Details](https://ask.dcloud.net.cn/question/97721)
  + H5平台 修复 picker-view 组件某些情况设置 value 不生效的Bug
  + H5 platform Fix the bug that the value setting of the picker-view component does not take effect in some cases
  + 支付宝小程序 修复 nvue 页面编译后部分样式失效的Bug
  + Alipay applet to fix the bug that some styles are invalid after nvue page compilation
  + 钉钉小程序 修复 真机使用 uni.request 发送 content-type 为 application/json 的请求时报错的Bug [详情](https://ask.dcloud.net.cn/question/97570)
  + Dingding applet to fix the bug that the real machine uses uni.request to send a request with a content-type of application/json. [Details](https://ask.dcloud.net.cn/question/97570)
  + hello uni-app 新增 在navigator示例和日历扩展ui示例中增加页面预载示例
  + hello uni-app added Added page preloading example in navigator example and calendar extension ui example
* 【uniCloud】
  + 【重要】新增 前端网页部署。uni-app的H5页面或普通html网站，均可免费部署到uniCloud，不用再购买传统云，高速、省钱、省心。 [详情](https://uniapp.dcloud.io/uniCloud/hosting)
  + [Important] Added front-end web page deployment. The H5 page of uni-app or ordinary html website can be deployed to uniCloud for free, no need to buy traditional cloud, high speed, money saving and worry-free. [Details](https://uniapp.dcloud.io/uniCloud/hosting)
  + 新增 HBuilderX 支持上传所有云函数及公共模块 （cloudfunctions目录，右键菜单，上传所有云函数及公共模块）
  + Added HBuilderX support for uploading all cloud functions and public modules (cloudfunctions directory, right-click menu, upload all cloud functions and public modules)
  + 新增 HBuilderX 限制新建云函数名称不能为common，避免与公共模块冲突
  + Added HBuilderX to limit the name of newly created cloud functions to be common to avoid conflicts with common modules
  + 修复 HBuilderX 公共模块 右键菜单出现两个上传公共模块菜单的Bug
  + Fixed two bugs in the right-click menu of HBuilderX public module, where two upload public module menus appeared
  + 修复 钉钉小程序真机上传文件到云存储报错的Bug [详情](https://ask.dcloud.net.cn/question/97570)
  + Fix the bug of uploading files to cloud storage in the DingTalk applet [Details](https://ask.dcloud.net.cn/question/97570)
  + 腾讯云 优化 HBuilderX开发调试期间访问云函数的性能
  + Tencent Cloud Optimized the performance of accessing cloud functions during HBuilderX development and debugging
  + 腾讯云 修复 上传文件时不进入onUploadProgress的Bug [详情](https://ask.dcloud.net.cn/question/97532)
  + Tencent Cloud fixed the bug that the onUploadProgress did not enter when uploading files [Details](https://ask.dcloud.net.cn/question/97532)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 新增 UniPush 支持谷歌推送FCM [文档](https://ask.dcloud.net.cn/article/37356)
  + Android platform Added UniPush support for Google Push FCM [document](https://ask.dcloud.net.cn/article/37356)
  + Android平台 修复 uni-AD 腾讯广点通信息流广告可能显示不全的Bug [详情](https://ask.dcloud.net.cn/question/97376)
  + Android platform Fix the bug that uni-AD Tencent Guangdiantong information flow advertisement may be incomplete [Details](https://ask.dcloud.net.cn/question/97376)
  + Android平台 修复 uni-AD 今日头条穿山甲点击广告开始下载后不能暂停或取消的Bug
  + Android platform, fix the bug that uni-AD today's headline pangolin cannot pause or cancel after clicking on the advertisement to start the download
  + Android平台 修复 uni-AD 创建信息流广告控件 createAdView 没有设置 id 时可能导致在当前页面无法再次创建的Bug
  + Android platform Fix the bug that when uni-AD creates an information feed ad control createAdView without setting an id, it may cause the bug to be recreated on the current page
  + Android平台 修复 uni-AD 腾讯广点通开屏广告可能出现填充率过低的Bug
  + Android platform to fix the bug that the fill rate may be too low in the uni-AD Tencent Guangdiantong open-screen advertisement
  + Android平台 修复 uni-AD 创建多个激励视频广告引起 onLoad onClose onError 事件回调错乱的Bug
  + Android platform Fixed the bug that uni-AD created multiple rewarded video ads, causing the onLoad onClose onError event callback to be disordered
  + Android平台 修复 软键盘状态变化事件 keyboardchange 监听后回调不触发的Bug [详情](https://ask.dcloud.net.cn/question/97070)
  + Android platform Fix the bug that the soft keyboard state change event keyboardchange does not trigger the callback after listening [Details](https://ask.dcloud.net.cn/question/97070)
  + Android平台 修复 选择按钮框 actionSheet 设置 title 并且 buttons 设置过多可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/98476)
  + Android platform fix. Select button box actionSheet to set title and too many buttons settings may display abnormal bugs [Details](https://ask.dcloud.net.cn/question/98476)
  + Android平台 修复 原生导航标题栏 titleNView 的 searchInput 搜索框动态更新后可能触发多次输入内容更新事件的Bug [详情](https://ask.dcloud.net.cn/question/98190)
  + Android platform Fix the bug that the searchInput search box of the native navigation title bar titleNView may trigger multiple input content update events after the dynamic update [Details](https://ask.dcloud.net.cn/question/98190)
  + Android平台 修复 音频 audio 的 seek 操作不触发 seeked 事件的Bug [详情](https://ask.dcloud.net.cn/question/78711)
  + Android platform Fix the bug that the seek operation of audio audio does not trigger the seeked event [Details](https://ask.dcloud.net.cn/question/78711)
  + Android平台 修复 图片预览 previewImage 无法显示bmp格式图片文件的Bug
  + Android platform fixes the bug that previewImage cannot display bmp format image files
  + iOS平台 修复 原生导航标题栏动态更新按钮样式 setTitleNViewButtonStyle 可能导致图标显示异常的Bug [详情](https://ask.dcloud.net.cn/question/96426)
  + iOS platform Fix the bug that the native navigation title bar dynamically updates the button style setTitleNViewButtonStyle may cause the icon to display abnormally [Details](https://ask.dcloud.net.cn/question/96426)
  + iOS平台 修复 视频播放 VideoPlayer 与 直播推流 LivePusher 同时使用时没有声音的Bug [详情](https://ask.dcloud.net.cn/question/97479)
  + iOS platform Fix the bug of no sound when using VideoPlayer and LivePusher at the same time [Details](https://ask.dcloud.net.cn/question/97479)
  + iOS平台 修复 搜索蓝牙设备 startBluetoothDevicesDiscovery 可能不触发 onBluetoothAdapterStateChange 事件的Bug
  + iOS platform Fix the bug that search for bluetooth devices startBluetoothDevicesDiscovery may not trigger onBluetoothAdapterStateChange event
  + iOS平台 修复 搜索蓝牙设备 startBluetoothDevicesDiscovery 连续调用多次触发失败回调的Bug
  + iOS platform Fix the bug that search for bluetooth devices startBluetoothDevicesDiscovery repeatedly triggers the failure callback

#### 2.7.9.20200527
* 【uni-app】
  + 【重要】支持运行和发布到 360小程序 [详情](https://uniapp.dcloud.io/matter?id=mp-360)
  + [Important] Support running and publishing to 360 applet [Details](https://uniapp.dcloud.io/matter?id=mp-360)
  + App平台 修复 class 名称中含有 rpx、upx 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/96981)
  + App platform Fix the bug that does not take effect when the class name contains rpx and upx [Details](https://ask.dcloud.net.cn/question/96981)
  + App-Android平台 修复 HBuilderX2.7.5 引出的 uni.request 网络请求 header 设置参数设置 content-type 无效的Bug [详情](https://ask.dcloud.net.cn/question/97246)
  + App-Android platform Fix the bug that HBuilderX2.7.5 leads to uni.request network request header setting parameter setting content-type invalid bug [Details](https://ask.dcloud.net.cn/question/97246)
  + App-Android平台 修复 HBuilderX2.7.5 引出的 uni.hideTabBar 隐藏 tabbar 后页面高度可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/96244)
  + App-Android platform Fix the bug that the page height may be incorrect after uni.hideTabBar hides the tabbar brought out by HBuilderX2.7.5 [Details](https://ask.dcloud.net.cn/question/96244)
  + App-Android平台 修复 tabbar 页面在部分手机可能高度显示不正确的Bug
  + App-Android platform Fix the bug that the height of the tabbar page may be displayed incorrectly on some mobile phones
  + App-Android平台 修复 nvue textarea 组件获取焦点后在部分手机可能会被软键盘遮挡的Bug [详情](https://ask.dcloud.net.cn/question/96914)
  + App-Android platform Fix the bug that the nvue textarea component may be blocked by the soft keyboard on some mobile phones after the focus is obtained [Details](https://ask.dcloud.net.cn/question/96914)
  + App-Android平台 修复 nvue live-pusher 组件调用 pause 方法暂停推流后依然录音的Bug [详情](https://ask.dcloud.net.cn/question/96411)
  + App-Android platform Fix the bug that the nvue live-pusher component calls the pause method to pause the push stream and still record the bug [Details](https://ask.dcloud.net.cn/question/96411)
  + App-Android平台 修复 nvue web-view 组件中 input 标签设置 type 为 file 时无法选择文件的Bug [详情](https://ask.dcloud.net.cn/question/95220)
  + App-Android platform Fix the bug that the file cannot be selected when the input label is set to file in the nvue web-view component [Details](https://ask.dcloud.net.cn/question/95220)
  + App-iOS平台 修复 pages.json 设置窗口背景色 backgroundColor 可能引起页面背景色不正确的Bug
  + App-iOS platform Fix the bug that setting the window background color backgroundColor in pages.json may cause the page background color to be incorrect
  + App-iOS平台 修复 vue 页面回弹无效果的Bug [详情](https://ask.dcloud.net.cn/question/91356)
  + App-iOS platform to fix the bug that the vue page rebound has no effect [Details](https://ask.dcloud.net.cn/question/91356)
  + App-iOS平台 修复 nvue ad 组件在 list 中使用可能引起滚动卡顿的Bug
  + App-iOS platform Fix the bug that the use of nvue ad components in the list may cause scrolling freezes
  + App-iOS平台 修复 nvue web-view 组件在页面关闭时可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/97064)
  + App-iOS platform Fix the bug that the nvue web-view component may cause the application to crash when the page is closed [Details](https://ask.dcloud.net.cn/question/97064)
  + H5平台 修复 配置基础路径为 ./ 打包后 image 组件显示异常的Bug [详情](https://ask.dcloud.net.cn/question/96767)
  + H5 platform Fix the bug that the image component displays abnormally after the configuration base path is ./ after packaging [Details](https://ask.dcloud.net.cn/question/96767)
  + 小程序平台 修复 组件 class 属性无值时报错的Bug
  + Mini Program Platform Fix the bug that an error is reported when the component class attribute has no value
  + uni统计 修复 HBuilderX2.7.5 引出的统计数据上报不完整，导致uni统计日活偏少的Bug
  + uni statistics Fix the bug that the statistical data report from HBuilderX2.7.5 is incomplete, resulting in less daily activity in uni statistics
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 原生导航标题栏 titleNView 的 titleIconWidth 支持设置标题图标宽度
  + Added titleIconWidth of native navigation title bar titleNView to support setting title icon width
  + 新增 原生导航标题栏 titleNView 的 searchInput 搜索框支持清除按钮
  + Added support for clear button in searchInput search box of native navigation title bar titleNView
  + 修复 原生导航标题栏 titleNView 的 titleIcon 设置 base64 图标无法支持 gif 格式图片的Bug
  + Fixed the bug that the base64 icon in the titleIcon setting of the native navigation title bar titleNView cannot support gif format images
  + Android平台 更新 uni-AD 腾讯广点通SDK版本为4.211.1081
  + Android platform update uni-AD Tencent Guangdiantong SDK version to 4.211.1081
  + Android平台 更新 UniPush 使用的个推SDK版本为4.3.8.0
  + Android platform update UniPush SDK version is 4.3.8.0
  + Android平台 修复 HBuilderX2.7.5 引出的 5+App云打包 plus.runtime.restart 重启应用后卡在启动页的Bug [详情](https://ask.dcloud.net.cn/question/97155)
  + Android platform Fix the bug of 5+App cloud packaging from HBuilderX2.7.5 plus.runtime.restart stuck on the startup page after restarting the app [Details](https://ask.dcloud.net.cn/question/97155)
  + Android平台 修复 软键盘状态变化事件 keyboardchange 监听后回调不触发的Bug [详情](https://ask.dcloud.net.cn/question/97070)
  + Android platform Fix the bug that the soft keyboard state change event keyboardchange does not trigger the callback after listening [Details](https://ask.dcloud.net.cn/question/97070)
  + Android平台 修复 uni-AD 腾讯广点通开屏广告可能拉伸变形显示的Bug
  + Android platform, fix the bug that the uni-AD Tencent Guangdiantong open-screen advertisement may be stretched and deformed
  + Androad平台 修复 uni-AD 开屏广告在刘海屏手机上跳过按钮可能被遮挡的Bug
  + Androad platform to fix the bug that the skip button of uni-AD open screen advertisement may be blocked on Liu Haiping mobile phone
  + Android平台 修复 视频播放 video 全屏时在刘海屏手机上控制栏可能被遮挡的Bug
  + For Android platform, fix the bug that the control bar may be blocked on Liu Haiping mobile phone when the video is played in full screen
  + Android平台 修复 页面中 input 标签 type 为 file 点击打开的选择页面不支持国际化的Bug
  + Android platform fixed the bug that the input tag type in the page is file and the selection page opened by clicking does not support internationalization
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK版本为3.0.0.1
  + iOS platform update uni-AD Toutiao Pangolin SDK version is 3.0.0.1
  + iOS平台 修复 初始化蓝牙模块 openBluetoothAdapter 可能在没有打开蓝牙时也会返回成功回调的Bug
  + iOS platform Fix the bug that the initialized Bluetooth module openBluetoothAdapter may return a successful callback even when the Bluetooth is not turned on
  + iOS平台 修复 previewImage 预览图片连续快速滑动时可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/96445)
  + iOS platform Fix the bug that previewImage preview images may display abnormally when they slide continuously and quickly [Details](https://ask.dcloud.net.cn/question/96445)
  + iOS平台 修复 原生导航标题栏 titleNView 动态设置 type 为 transparent 可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/96556)
  + iOS platform Fix the bug that the native navigation title bar titleNView dynamic setting type to transparent may display abnormally [Details](https://ask.dcloud.net.cn/question/96556)

#### 2.7.5.20200519
* 【uni-app】
  + 【重要】 调整 App平台 自定义组件编译模式下线，应用默认以v3编译模式运行。并在manifest去除相关概念。包体积减少3M [详情](https://ask.dcloud.net.cn/article/36988)
  + [Important] Adjust the App platform. The custom component compilation mode is offline, and the application runs in the v3 compilation mode by default. And remove related concepts in manifest. Package volume reduced by 3M [Details](https://ask.dcloud.net.cn/article/36988)
  + 【重要】 调整 uni统计默认不再自动开启，需要此服务请手动在manifest中打开 [详情](https://ask.dcloud.net.cn/article/37234)
  + [Important] Adjust uni statistics is no longer automatically enabled by default. If you need this service, please manually open it in the manifest [Details](https://ask.dcloud.net.cn/article/37234)
  + uni-app cli版支持发行到快应用平台 [详情](https://uniapp.dcloud.io/quickstart?id=quickapp)
  + uni-app cli version supports publishing to the quick application platform [Details](https://uniapp.dcloud.io/quickstart?id=quickapp)
  + 优化 pages.json 兼容 subPackages 与 subpackages 写法
  + Optimize pages.json to be compatible with subPackages and subpackages
  + 修复 easycom 组件优先级高于用户组件同名组件的Bug
  + Fix the bug that the easycom component has a higher priority than the user component with the same name
  + App平台、H5平台 新增 支持 onNavigationBarSearchInputFocusChanged 生命周期
  + App platform, H5 platform Added support for onNavigationBarSearchInputFocusChanged life cycle
  + App平台、H5平台 修复 textarea 组件 word-break 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/95172)
  + App platform, H5 platform Fix the bug that the word-break style of the textarea component does not take effect [Details](https://ask.dcloud.net.cn/question/95172)
  + App平台、H5平台 修复 swiper 组件设置 current 时滚动方向错误的Bug [详情](https://ask.dcloud.net.cn/question/94961)
  + App platform, H5 platform Fix the bug of wrong scrolling direction when the swiper component sets current [Details](https://ask.dcloud.net.cn/question/94961)
  + App平台 新增 tabbar 支持 backgroundImage 属性设置背景图片及渐变色
  + App platform Added tabbar support backgroundImage property to set background image and gradient color
  + App平台 新增 nvue scrollview、list、waterfall、recycle-list等组件支持 scroll-top、scroll-left 属性
  + App platform Added nvue scrollview, list, waterfall, recycle-list and other components to support scroll-top, scroll-left properties
  + App平台 新增 video 组件支持 controlstoggle 事件
  + App platform added video component to support controlstoggle event
  + App平台 优化 在去掉自定义组件模式的情况下保证 weex 编译模式仍然可用（nvueCompiler：weex）。但推荐开发者尽快迁移到uni-app编译模式
  + App platform optimizations Ensure that the weex compilation mode is still available when the custom component mode is removed (nvueCompiler:weex). But it is recommended that developers migrate to uni-app compilation mode as soon as possible
  + App平台 优化 短时间内调用 uni.navigateTo 避免重复跳转页面
  + App platform optimization Call uni.navigateTo in a short time to avoid repeated page jumps
  + App平台 修复 pages.json 缺少 globalStyle 节点白屏的Bug
  + App platform Fix the bug that pages.json is missing globalStyle node white screen bug
  + App平台 修复 页面 onLoad 参数部分情况不正确的Bug
  + App platform to fix the bug that some of the page onLoad parameters are incorrect
  + App平台 修复 页面生命周期 onUnload 部分表现与旧版表现不一致的Bug [详情](https://ask.dcloud.net.cn/question/94649)
  + App platform Fix the bug that the performance of the onUnload part of the page life cycle is inconsistent with the old version [Details](https://ask.dcloud.net.cn/question/94649)
  + App平台 修复 input、textarea 组件快速输入时光标抖动的Bug [详情](https://ask.dcloud.net.cn/question/90460)
  + App platform Fix the bug of cursor jitter when input and textarea components are input quickly [Details](https://ask.dcloud.net.cn/question/90460)
  + App平台 修复 picker 组件日期模式缺少 start 或 end 无法选择的Bug
  + App Platform Fix the bug that the date mode of the picker component lacks start or end and cannot be selected
  + App平台 修复 picker 组件点击事件不冒泡的Bug [详情](https://ask.dcloud.net.cn/question/95716)
  + App platform Fix the bug that the click event of the picker component does not bubble [Details](https://ask.dcloud.net.cn/question/95716)
  + App平台 修复 video 组件打包后不显示进度条的Bug [详情](https://ask.dcloud.net.cn/question/95946)
  + App platform Fix the bug that the progress bar is not displayed after the video component is packaged [Details](https://ask.dcloud.net.cn/question/95946)
  + App平台 修复 editor 组件 br 标签不解析的Bug [详情](https://ask.dcloud.net.cn/question/95819)
  + App platform Fix the bug that the editor component br tag is not parsed [Details](https://ask.dcloud.net.cn/question/95819)
  + App平台 修复 cover-image 组件部分情况显示不全的Bug [详情](https://ask.dcloud.net.cn/question/94554)
  + App platform Fix the bug that the cover-image component is partially displayed [Details](https://ask.dcloud.net.cn/question/94554)
  + App平台 修复 uni.onKeyboardHeightChange 重复监听的Bug [详情](https://ask.dcloud.net.cn/question/91818)
  + App platform Fix the bug of repeated monitoring of uni.onKeyboardHeightChange [Details](https://ask.dcloud.net.cn/question/91818)
  + App平台 修复 downloadTask.abort 不生效的Bug [详情](https://ask.dcloud.net.cn/question/93342)
  + App platform Fix the bug that downloadTask.abort does not take effect [Details](https://ask.dcloud.net.cn/question/93342)
  + App平台 修复 uni.showModal 方法 content 不可为空的Bug [详情](https://ask.dcloud.net.cn/question/87180)
  + App platform Fix the bug that the content of the uni.showModal method cannot be null [Details](https://ask.dcloud.net.cn/question/87180)
  + App平台 修复 nvue button 组件某些情况下 loading 样式异常的Bug [详情](https://ask.dcloud.net.cn/question/95422)
  + App platform Fix the bug of abnormal loading style of nvue button component in some cases [Details](https://ask.dcloud.net.cn/question/95422)
  + App平台 修复 storage 中读取 Array 类型数据解析不正确的Bug [详情](https://ask.dcloud.net.cn/question/96139)
  + App platform Fixed the bug of incorrect parsing of Array type data in storage [Details](https://ask.dcloud.net.cn/question/96139)
  + App-Android平台 修复 v3版本 真机运行修改代码保存后应用重启，可能无法直接显示应用重启前页面的Bug
  + App-Android platform Repair v3 version. After the real machine runs the modified code and the application restarts, the bug of the page before the application restart may not be displayed directly.
  + App-iOS平台 修复 nvue richtext 组件 lines、text-overflow 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/94667)
  + App-iOS platform Fix the bug that the lines and text-overflow properties of nvue richtext components do not take effect [Details](https://ask.dcloud.net.cn/question/94667)
  + App-iOS平台 修复 tabBar 同时设置 blurEffect 和 backgroundColor 时 uni.getSystemInfo 获取到 windowBottom 错误的Bug
  + App-iOS platform Fix the bug that uni.getSystemInfo gets windowBottom error when both blurEffect and backgroundColor are set on tabBar
  + H5平台 优化 video 组件支持 show-center-play-btn 配置
  + H5 platform optimized video component to support show-center-play-btn configuration
  + H5平台 修复 启用摇树优化后可能导致 uniCloud 功能不正常的Bug [详情](https://ask.dcloud.net.cn/question/94993)
  + H5 platform Fix the bug that may cause uniCloud to function abnormally after enabling tree shaking optimization [Details](https://ask.dcloud.net.cn/question/94993)
  + H5平台 修复 tabBar 页面 redirectTo 到其他页面，tabBar 仍然显示的Bug [详情](https://ask.dcloud.net.cn/article/36364)
  + H5 platform Fix the bug that the tabBar page redirectTo to other pages, the tabBar is still displayed [Details](https://ask.dcloud.net.cn/article/36364)
  + H5平台 修复 storage 中读取 Date 类型数据解析不正确的Bug [#1661](https://github.com/dcloudio/uni-app/issues/1661)
  + H5 platform Fix the bug of incorrect parsing of Date type data in storage [#1661](https://github.com/dcloudio/uni-app/issues/1661)
  + H5平台 修复 Safari 浏览器横屏状态获取宽度错误的Bug [详情](https://ask.dcloud.net.cn/question/95997)
  + H5 platform Fix the bug that the Safari browser gets the wrong width in landscape state [Details](https://ask.dcloud.net.cn/question/95997)
  + 微信小程序平台 修复 页面中同一个组件多个实例相同作用域插槽异常的Bug [#1662](https://github.com/dcloudio/uni-app/issues/1662)
  + Wechat Mini Program Platform Fix the bug that multiple instances of the same component in the page are abnormal in the same scope slot [#1662](https://github.com/dcloudio/uni-app/issues/1662)
  + 支付宝小程序 修复 uni.scanCode 设置 scanType 无效的Bug [#1578](https://github.com/dcloudio/uni-app/issues/1578)
  + Alipay applet fix the bug that uni.scanCode set scanType invalid [#1578](https://github.com/dcloudio/uni-app/issues/1578)
  + uni-ui 新增 uni-drawer 组件 width 属性（仅在 vue 页面生效）、maskClick 属性，点击遮罩是否关闭抽屉
  + uni-ui adds width property of uni-drawer component (only valid on vue page), maskClick property, whether clicking on the mask closes the drawer
  + uni-ui 新增 uni-goods-nav 组件角标的前景色和背景色设置
  + uni-ui added the foreground and background color settings of the uni-goods-nav component corner icon
  + uni-ui 新增 uni-popup 组件的信息提示、对话框、底部分享示例三种组件扩展样式
  + uni-ui adds three component extension styles for uni-popup component: information prompt, dialog box, and bottom sharing example
  + uni-ui 优化 uni-drawer 组件废弃 visible 属性，改用 open()、close() 方法开关抽屉，避免在某些场景不能正常关闭的 Bug
  + uni-ui optimizes the uni-drawer component to abandon the visible property, and use the open() and close() methods to switch the drawer to avoid bugs that cannot be closed normally in some scenarios
  + uni-ui 优化 uni-popup 组件部分代码逻辑，可支持自定义扩展组件
  + uni-ui optimizes part of the code logic of the uni-popup component to support custom extension components
  + uni-ui 修复 uni-drawer 组件 close 回调执行两遍的 Bug
  + uni-ui fix the bug that the close callback of the uni-drawer component is executed twice
  + uni-ui 修复 uni-goods-nav 组件 buttonGroup 属性修改 color 颜色不生效的 Bug 
  + uni-ui fix the bug that the color of the buttonGroup property of the uni-goods-nav component does not take effect
  + uni-ui 修复 uni-popup 组件内放置 input/textarea 获取不到焦点的 Bug
  + uni-ui fix the bug that input/textarea cannot get focus when placed in uni-popup component
  + uni-ui 修复 uni-swipe-action 组件在 iOS13 中按钮点击失效或点击错位的 Bug
  + uni-ui fix the bug that the button click of the uni-swipe-action component is invalid or clicked in the wrong place in iOS13
* 【uniCloud】
  + 【重要】 腾讯云开放，不再需要邮件申请
  + [Important] Tencent Cloud is open, no need to apply by mail anymore
  + web控制台 调整 取消云存储文件类型限制。可用于托管App的apk或wgt下载。在uniCloud公测期间免费提供cdn
  + Web console adjustment Remove cloud storage file type restrictions. Available for apk or wgt download for hosted App. Free cdn during uniCloud public beta
  + 优化 阿里云 云函数冷启动时间，经测试冷启动时间平均减少800ms
  + Optimized the cold start time of Alibaba Cloud cloud functions, and the average cold start time was reduced by 800ms after testing
  + 新增 uni-pay 基于云函数在App、微信小程序、支付宝小程序等平台统一了微信支付和支付宝支付，大幅降低支付业务开发门槛 [详情](https://ext.dcloud.net.cn/plugin?id=1835)
  + Added uni-pay based on cloud functions to unify WeChat payment and Alipay payment in App, WeChat applet, Alipay applet and other platforms, greatly reducing the threshold for payment business development [Details](https://ext.dcloud.net.cn /plugin?id=1835)
  + 新增 插件市场提供uniCloud分类插件，并欢迎更多开发者贡献插件。近期将举办插件大赛 [详情](https://ext.dcloud.net.cn/?cat1=7)
  + Added the plugin market to provide uniCloud classified plugins, and welcome more developers to contribute plugins. A plugin contest will be held in the near future [Details](https://ext.dcloud.net.cn/?cat1=7)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 【重要】Android平台 调整 云端打包时默认不再包含 x86 CPU类型库，减少apk包体积 [详情](https://ask.dcloud.net.cn/article/36195#nox86)
  + [Important] Android platform adjustment The x86 CPU type library is no longer included by default during cloud packaging, reducing the size of the apk package [Details](https://ask.dcloud.net.cn/article/36195#nox86)
  + 新增 Webview窗口标题栏 titleNView 的 titleIcon 支持 GIF 格式动图
  + Added the titleIcon of the title bar titleNView of the Webview window to support GIF format animations
  + 修复 Webview窗口标题栏 titleNView 调用 setTitleNViewButtonStyle 动态更新按钮属性可能不生效的Bug
  + Fixed the bug that the Webview window title bar titleNView call setTitleNViewButtonStyle to dynamically update the button properties may not take effect
  + Android平台 更新 uni-AD 腾讯广点通SDK版本为4.191.1061，今日头条穿山甲SDK版本为2.9.5.5，360广告SDK版本为4.14.3151
  + Android platform update uni-AD Tencent Guangdiantong SDK version is 4.191.1061, Toutiao Pangolin SDK version is 2.9.5.5, 360 advertising SDK version is 4.14.3151
  + Android平台 更新 UniPush 使用的个推SDK版本为2.14.0.0，解决由于部分厂商推送SDK版本过低导致在新设备无法接收离线推送消息的问题
  + Android platform Update the personal push SDK version used by UniPush is 2.14.0.0, which solves the problem that the new device cannot receive offline push messages due to the low version of the push SDK version of some manufacturers
  + Android平台 优化 提交应用市场检查可能误报 Trojan-Dropper.AndroidOS.Agent 病毒的问题
  + Android platform optimization Submit app market check may falsely report Trojan-Dropper.AndroidOS.Agent virus problem
  + Android平台 修复 storage 存储数据内容超过 2M 后无法正常获取的Bug [详情](https://ask.dcloud.net.cn/question/93875)
  + Android platform Fix the bug that the storage data cannot be obtained normally after the storage data content exceeds 2M [Details](https://ask.dcloud.net.cn/question/93875)
  + Android平台 修复 input 输入框获取焦点后可能无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/95119)
  + Android platform Fix the bug that the soft keyboard may not pop up after the input input box gets the focus [Details](https://ask.dcloud.net.cn/question/95119)
  + Android平台 修复 setUserAgent 设置 UA 可能引起应用概率性卡死的Bug [详情](https://ask.dcloud.net.cn/question/94668)
  + Android platform Fix the bug that setUserAgent setting UA may cause the application to freeze probabilistically [Details](https://ask.dcloud.net.cn/question/94668)
  + Android平台 修复 previewImage 预览图片界面顶部数字指示器在刘海屏手机上被遮挡的Bug [详情](https://ask.dcloud.net.cn/question/90222)
  + Android platform Fix the bug that the digital indicator at the top of previewImage preview image interface is blocked on Liu Haiping mobile phone [Details](https://ask.dcloud.net.cn/question/90222)
  + Android平台 修复 应用锁定横屏或竖屏后 previewImage 预览图片界面仍然可以横竖屏切换的Bug [详情](https://ask.dcloud.net.cn/question/94686)
  + Android platform Fix the bug that previewImage preview image interface can still be switched between landscape and portrait after the app is locked in landscape or portrait [Details](https://ask.dcloud.net.cn/question/94686)
  + Android平台 修复 数据库执行查询SQL语句读取 REAL、BIGINT 等类型数值丢失精度的Bug [详情](https://ask.dcloud.net.cn/question/92964)
  + Android platform Fix the bug that the database executes the query SQL statement to read the bug of REAL, BIGINT and other types of values losing precision [Details](https://ask.dcloud.net.cn/question/92964)
  + Android平台 修复 plus.gallery.save 保存网络图片成功后在系统相册中可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/75901)
  + Android platform Fix the bug that plus.gallery.save may not be displayed in the system album after successfully saving network pictures [Details](https://ask.dcloud.net.cn/question/75901)
  + Android平台 修复 使用 X5 Webview 内核渲染时，标题栏搜索框 searchinput 设置 autoFocus 为 true 可能无法自动获取焦点的Bug
  + Android platform Fix the bug that when using X5 Webview kernel rendering, the title bar search box searchinput set autoFocus to true may not get the focus automatically
  + Android平台 修复 使用 X5 Webview 内核渲染时，广告、视频等原生组件可能无法滚动的Bug
  + Android platform Fix bug that native components such as advertisements and videos may not scroll when rendered using the X5 Webview kernel
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.8，解决在部分设备可能出现启动时崩溃的Bug
  + iOS platform Update uni-AD Tencent Guangdiantong SDK version to 4.11.8, solve the bug that some devices may crash at startup
  + iOS平台 修复 Webview窗口标题栏 titleNView 上按钮设置 select 属性，点击后下拉指示图标消失的Bug [详情](https://ask.dcloud.net.cn/question/92505)
  + iOS platform Fix the bug that the button on the title bar titleNView of the Webview window sets the select attribute, and the drop-down indicator icon disappears after clicking [Details](https://ask.dcloud.net.cn/question/92505)
  + iOS平台 修复 pick 从相册选择视频文件时只能使用默认压缩模式，无法选取原始视频的Bug [详情](https://ask.dcloud.net.cn/question/93738)
  + iOS platform Fix the bug that pick can only use the default compression mode when selecting video files from the album, and cannot select the original video [Details](https://ask.dcloud.net.cn/question/93738)
  + iOS平台 修复 iPad 设备横屏时状态栏消失的Bug [详情](https://ask.dcloud.net.cn/question/95284)
  + iOS platform Fix the bug that the status bar disappears when the iPad device is landscaped [Details](https://ask.dcloud.net.cn/question/95284)
  + iOS平台 修复 iPad 设备横屏时 getSafeAreaInsets 获取安全区域的 top 值不正确的Bug [详情](https://ask.dcloud.net.cn/question/95645)
  + iOS platform Fix the bug that the top value of the safe area obtained by getSafeAreaInsets is incorrect when the iPad device is in landscape orientation [Details](https://ask.dcloud.net.cn/question/95645)
  + iOS平台 修复 音频 audio 播放网络音频资源缓冲时间过长的Bug [详情](https://ask.dcloud.net.cn/question/93427)
  + iOS platform Fix the bug that the buffering time of audio audio is too long when playing network audio resources [Details](https://ask.dcloud.net.cn/question/93427)
  + iOS平台 修复 Webview窗口标题栏搜索框 searchinput 动态修改 align 属性不生效的Bug
  + For iOS platform, fix the bug that the dynamic modification of the align property of the search input in the search box in the title bar of the Webview window does not take effect
* 【uni小程序SDK】
* [uni applet SDK]
  + iOS平台 修复 video 组件退出全屏后页面布局错位的Bug
  + iOS platform, fix the bug that the page layout is dislocated after the video component exits the full screen

#### 2.6.16.20200424
* 【uni-app】
  + App平台、H5平台 修复 部分组件文本前后出现多余空格或换行的Bug [详情](https://ask.dcloud.net.cn/question/94802)
  + App platform, H5 platform Fix the bug that extra spaces or line breaks appear before and after some component text [Details](https://ask.dcloud.net.cn/question/94802)
  + App平台 修复 v3版本 text 组件首尾换行表现与旧版不一致的Bug
  + App platform Fix the bug that the line wrapping performance of the text component in v3 version is inconsistent with the old version
  + H5平台 修复 manifes.json 内 template 配置的模板文件不存在时框架样式错误的Bug
  + H5 platform Fix the bug of frame style error when the template file of template configuration in manifests.json does not exist
  + H5平台 修复 uni.chooseImage 返回的 tempFilePaths 为空Bug [详情](https://ask.dcloud.net.cn/question/94805)
  + H5 platform Fix the bug that tempFilePaths returned by uni.chooseImage is empty [Details](https://ask.dcloud.net.cn/question/94805)
  + 小程序平台 修复 使用小程序组件时部分事件返回信息不正确的Bug
  + Mini Program Platform Fix the bug that some events returned incorrect information when using Mini Program components
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + Android平台 修复 使用 X5 Webview 内核渲染 plus.navigator.getUserAgent 获取 UA 不正确的Bug
  + Android platform fix: use X5 Webview kernel rendering plus.navigator.getUserAgent to get the bug of incorrect UA
  + Android平台 修复 新浪微博登录时选择不授权，返回后无法再次调用登录授权的Bug [详情](https://ask.dcloud.net.cn/question/93971)
  + Android platform Fixed the bug that Sina Weibo chooses not to authorize when logging in, and the login authorization cannot be called again after returning [Details](https://ask.dcloud.net.cn/question/93971)

#### 2.6.15.20200421
* 【uni-app】
  + 【重要】App平台 修复 v3版本 组件之间样式隔离，解决历史项目升级v3后，部分样式错乱问题 [详情](https://ask.dcloud.net.cn/question/91501)
  + [Important] App platform fixes the style isolation between components in v3 version, and solves the problem of some style confusion after the historical project is upgraded to v3 [Details](https://ask.dcloud.net.cn/question/91501)
  + App平台、H5平台 新增 EditorContext.insertImage 支持 width、height、extClass、data 配置
  + App platform, H5 platform Added EditorContext.insertImage to support width, height, extClass, data configuration
  + App平台、H5平台 修复 text 组件调整换行解析导致兼容问题的Bug [详情](https://ask.dcloud.net.cn/question/94473)
  + App platform, H5 platform Fix the bug of compatibility problem caused by the adjustment of line break parsing in the text component [Details](https://ask.dcloud.net.cn/question/94473)
  + App平台、H5平台 修复 scroll-view 子元素使用百分比尺寸时大小不正确的Bug
  + App platform, H5 platform Fix the bug of incorrect size when scroll-view child elements use percentage size
  + App平台、H5平台 修复 input 组件设置 value 为 null 时显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/93729)
  + App platform, H5 platform Fix the bug that the input component is incorrectly displayed when the value is set to null [Details](https://ask.dcloud.net.cn/question/93729)
  + App平台、H5平台 修复 iOS设备键盘收起可能引起页面显示与点击位置错位的Bug [详情](https://ask.dcloud.net.cn/question/93818)
  + App platform, H5 platform Fix the bug that may cause the page display and click position to be misplaced when the keyboard of iOS device is folded [Details](https://ask.dcloud.net.cn/question/93818)
  + App平台 优化 v3版本 事件对象，支持 json 序列化输出 [详情](https://github.com/dcloudio/uni-app/issues/1559)
  + App platform Optimize v3 version event object, support json serialization output [Details](https://github.com/dcloudio/uni-app/issues/1559)
  + App平台 修复 无法获取音频暂停状态的Bug [详情](https://ask.dcloud.net.cn/question/92714)
  + App platform to fix the bug that the audio pause state cannot be obtained [Details](https://ask.dcloud.net.cn/question/92714)
  + App平台 修复 renderjs 中未绑定到 change:prop 的数据变更也会触发 change 事件的Bug [详情](https://ask.dcloud.net.cn/question/91887)
  + App platform Fix the bug that the data change not bound to change:prop in renderjs will also trigger the change event [Details](https://ask.dcloud.net.cn/question/91887)
  + App平台 修复 vue 页面与 nvue 页面引用相同组件，条件编译失效的Bug
  + App platform Fix the bug that the conditional compilation fails when the vue page and the nvue page refer to the same components
  + App平台 修复 v3版本 使用小程序组件在低版本系统报错的Bug [详情](https://ask.dcloud.net.cn/question/92561)
  + App platform Fix the bug that the v3 version uses the applet component to report errors in the lower version system [Details](https://ask.dcloud.net.cn/question/92561)
  + App平台 修复 v3版本 text 组件首尾换行解析不正确的Bug
  + App platform Fix the bug that the beginning and end of the text component in the v3 version are incorrectly parsed
  + App平台 修复 v3版本 调用 socketTask.close 不传参数报错的Bug
  + App platform Fix the bug that the v3 version calls socketTask.close without passing parameters and reports an error
  + App平台 修复 v3版本 RecorderManager 事件重复执行的Bug [详情](https://ask.dcloud.net.cn/question/91885)
  + App platform Fix the bug of repeated execution of RecorderManager events in v3 version [Details](https://ask.dcloud.net.cn/question/91885)
  + App平台 修复 v3版本 form 组件 submit 事件内无法获取 picker 值的Bug [#1545](https://github.com/dcloudio/uni-app/issues/1545)
  + App platform Fix the bug that the picker value cannot be obtained in the submit event of the form component of the v3 version [#1545](https://github.com/dcloudio/uni-app/issues/1545)
  + App平台 修复 v3版本 button 组件 open-type 为 feedback 不生效的Bug 
  + App platform Fix the bug that the open-type of the button component in v3 version is feedback and it does not take effect
  + App平台 修复 v3版本 picker-view 组件嵌套在 uni-pop 组件内渲染不正确的Bug [详情](https://ask.dcloud.net.cn/question/93606)
  + App platform Fix the bug that the picker-view component in v3 version is nested in the uni-pop component and render incorrectly [Details](https://ask.dcloud.net.cn/question/93606)
  + App平台 修复 v3版本 webview 组件 src 为空时显示错误页面的Bug
  + App platform Fix the bug that the error page is displayed when the src of the v3 version webview component is empty
  + App平台 修复 v3版本 map 组件更新 marker 影响 polyline 的Bug [详情](https://ask.dcloud.net.cn/question/93944)
  + App platform Fix the bug that the map component update marker in v3 version affects polyline [Details](https://ask.dcloud.net.cn/question/93944)
  + App平台 修复 v3版本 image 组件 widthFix 模式动态修改大小时不生效的Bug [详情](https://ask.dcloud.net.cn/question/93874)
  + App platform Fix the bug that the widthFix mode of the image component in v3 version does not take effect when the size is dynamically modified [Details](https://ask.dcloud.net.cn/question/93874)
  + App平台 修复 v3版本 uni.arrayBufferToBase64 某些参数无法支持的Bug [详情](https://ask.dcloud.net.cn/question/92720)
  + App platform Fix the bug that some parameters of uni.arrayBufferToBase64 in v3 version cannot be supported [Details](https://ask.dcloud.net.cn/question/92720)
  + App平台 修复 v3版本 uni.createBLEConnection 没有被 Promisify 的Bug [#1543](https://github.com/dcloudio/uni-app/issues/1543)
  + App Platform Fix the bug of v3 version uni.createBLEConnection not being Promisify [#1543](https://github.com/dcloudio/uni-app/issues/1543)
  + App平台 修复 uni.openLocation 显示位置错误的Bug [详情](https://ask.dcloud.net.cn/question/85402)
  + App platform Fix the bug that uni.openLocation displays wrong location [Details](https://ask.dcloud.net.cn/question/85402)
  + App-Android平台 修复 v2版本apk使用wgt升级资源后，用v3版本apk覆盖安装无法进入应用的Bug [详情](https://ask.dcloud.net.cn/question/93426)
  + App-Android platform Fix the bug that the v3 version apk cannot be installed after the v2 version apk uses wgt to upgrade resources [Details](https://ask.dcloud.net.cn/question/93426)
  + App-Android平台 修复 nvue rich-text 组件 img 标签可能不显示的Bug [详情](https://ask.dcloud.net.cn/question/93388)
  + App-Android platform Fix the bug that the img tag of nvue rich-text component may not be displayed [Details](https://ask.dcloud.net.cn/question/93388)
  + App-Android平台 修复 nvue input 组件 font-size 值设置过大时光标可能不显示的Bug [详情](https://ask.dcloud.net.cn/question/93283)
  + App-Android platform Fix the bug that the cursor may not be displayed when the font-size value of the nvue input component is set too large [Details](https://ask.dcloud.net.cn/question/93283)
  + App-Android平台 修复 nvue input 组件设置 type 为 digit/number 时弹出键盘类型不正确的问题
  + App-Android platform fix the problem that the incorrect keyboard type pops up when the nvue input component is set to type as digit/number
  + App-Android平台 修复 vue map 组件 marker 属性打包后图片不显示的Bug [详情](https://ask.dcloud.net.cn/question/92358)
  + App-Android platform Fix the bug that the image is not displayed after the marker attribute of the vue map component is packaged [Details](https://ask.dcloud.net.cn/question/92358)
  + App-Android平台 修复 tabBar 页面设置 titleNView 的 type 为 transparent 滚动时标题栏透明度不发生变化的Bug
  + App-Android platform Fix the bug that the title bar transparency does not change when the type of titleNView is set to transparent on the tabBar page
  + App-Android平台 修复 nvue 页面跳转到 vue 页面后，input 组件获得焦点时可能无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/89769)
  + App-Android platform Fix the bug that the soft keyboard may not pop up when the input component gets the focus after the nvue page jumps to the vue page [Details](https://ask.dcloud.net.cn/question/89769)
  + App-iOS平台 修复 nvue video 组件设置 @click 事件后，视频底部控制栏上除进度条以外的其他按钮失效的Bug [详情](https://ask.dcloud.net.cn/question/92727)
  + App-iOS platform Fix the bug that the buttons other than the progress bar on the control bar at the bottom of the video are invalid after the nvue video component sets the @click event [Details](https://ask.dcloud.net.cn/question/92727)
  + App-iOS平台 修复 v3模式 movable-area 组件嵌套 scroll-view 组件点击事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/92638)
  + App-iOS platform Fix the bug that the click event of the nested scroll-view component of the movable-area component in v3 mode is not triggered [Details](https://ask.dcloud.net.cn/question/92638)
  + App-iOS 修复 uni.onBLEConnectionStateChange 不触发的bug
  + App-iOS fix the bug that uni.onBLEConnectionStateChange does not trigger
  + App-iOS 修复 uni.chooseImage 从相机选择图片分辨率过低的Bug [详情](https://ask.dcloud.net.cn/question/91502)
  + App-iOS fix the bug that uni.chooseImage selects images from camera with too low resolution [Details](https://ask.dcloud.net.cn/question/91502)
  + H5平台 优化 uni.request 增加 withCredentials 参数，支持配置跨域请求时是否携带凭证（cookies）
  + H5 platform Optimized uni.request and added the withCredentials parameter to support whether to carry credentials (cookies) when configuring cross-domain requests
  + H5平台 优化 uni.uploadFile 增加 files 参数，支持上传多个文件
  + H5 platform optimized uni.uploadFile Added files parameter to support uploading multiple files
  + H5平台 优化 uni.uploadFile 增加 file 参数，支持上传原始 File 对象
  + H5 platform optimized uni.uploadFile to increase the file parameter, support uploading the original File object
  + H5平台 优化 uni.chooseVideo、uni.chooseImage 支持返回原始 File 对象
  + H5 platform optimization uni.chooseVideo, uni.chooseImage support returning the original File object
  + H5平台 修复 base为相对路径 ./ 时，相对路径的静态资源加载失败的Bug [详情](https://ask.dcloud.net.cn/question/92910)
  + H5 platform Fix the bug that static resources of relative paths fail to load when base is a relative path ./ [Details](https://ask.dcloud.net.cn/question/92910)
  + 小程序平台 修复 条件编译中引用静态资源始终生效的Bug [#1542](https://github.com/dcloudio/uni-app/issues/1542)
  + Mini Program Platform Fix the bug that static resources are always valid in conditional compilation [#1542](https://github.com/dcloudio/uni-app/issues/1542)
  + 小程序平台 修复 启用分包优化后，当分包路径相似时 vendor 生成不正确Bug [#1440](https://github.com/dcloudio/uni-app/issues/1440)
  + Mini Program Platform Fix After enabling sub-package optimization, when sub-package paths are similar, vendor generation is incorrect Bug [#1440](https://github.com/dcloudio/uni-app/issues/1440)
  + 小程序平台 修复 map 组件 @markertap 事件获取不到 markerId 的Bug
  + Mini Program Platform Fix the bug that the @markertap event of the map component cannot get markerId
  + 支付宝小程序平台 修复 uni.getFileInfo 提示参数不正确的Bug
  + Alipay applet platform to fix the bug that uni.getFileInfo prompts incorrect parameters
* 【uniCloud】
  + 修复 某些情况下，公共模块上传失败的Bug [详情](https://ask.dcloud.net.cn/question/93580)
  + Fixed the bug that the upload of public modules failed in some cases [Details](https://ask.dcloud.net.cn/question/93580)
  + 腾讯云 修复 云函数互调某些情况下报签名错误的Bug
  + Tencent Cloud Fixed the bug that the signature error was reported in some cases of cloud function intermodulation
  + 腾讯云 修复 elemMatch 内使用 neq 报错的Bug [详情](https://ask.dcloud.net.cn/question/91531)
  + Tencent Cloud Fix the bug of using neq in elemMatch [Details](https://ask.dcloud.net.cn/question/91531)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 原生导航标题栏的 titleIcon 支持 base64 图标，方便页面里已经存在的图标在滚动时绘制在原生导航栏上
  + Added the titleIcon of the native navigation title bar to support base64 icons, so that the icons already in the page can be drawn on the native navigation bar when scrolling
  + 新增 actionSheet 取消按钮文字国际化（如设置按钮文字，则以设置文字为准，如未设置，则根据手机系统的语言显示）
  + Added actionSheet to cancel the internationalization of button text (if the button text is set, the set text shall prevail, if not set, it will be displayed according to the language of the mobile phone system)
  + 修复 打包模块勾选 iOS UIWebview/Android X5 Webview 后，wgt升级更新失败触发错误回调的Bug [详情](https://ask.dcloud.net.cn/question/93447)
  + Fix the bug that the wgt upgrade and update failed to trigger an error callback after the iOS UIWebview/Android X5 Webview is checked in the packaging module [Details](https://ask.dcloud.net.cn/question/93447)
  + Android平台 新增 pop-in/pop-out 动画时通过 animationAlphaBGColor 设置动画蒙层背景色，可用于避免暗色风格页面转场动画的蒙层偏白 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyles)
  + Android platform adds the pop-in/pop-out animation to set the background color of the animation mask through animationAlphaBGColor, which can be used to avoid the whitening of the mask layer in the transition animation of the dark style page [document](https://www.html5plus.org /doc/en_us/webview.html#plus.webview.WebviewStyles)
  + Android平台 修复 uni-AD 腾讯广点通部分视频激励广告播放 30 秒后点击关闭按钮触发 onClose 事件参数中 isEnded 属性可能为 false 的Bug
  + Android platform, fix the bug that the isEnded property in the onClose event parameter may be false after the uni-AD Tencent Guangdiantong some video rewarded ads are played for 30 seconds after clicking the close button
  + Android平台 修复 Webview窗口对象 loadURL 方法没有触发 overrideUrlLoading 拦截回调函数的Bug [详情](https://ask.dcloud.net.cn/question/92689)
  + Android platform Fixed the bug that the loadURL method of the Webview window object did not trigger the overrideUrlLoading interception callback function [Details](https://ask.dcloud.net.cn/question/92689)
  + Android平台 修复 显示系统软键盘 plus.key.showSoftKeybord 多次调用会触发关闭软键盘的Bug
  + Android platform Fix the bug of displaying the system soft keyboard plus.key.showSoftKeybord multiple calls will trigger the closing of the soft keyboard
  + Android平台 修复 storage存储键值通过 setItem 方法传入 value 为空字符串后，通过 getItem 方法返回 null 的Bug
  + For Android platform, fix the bug of returning null through the getItem method after the value of the storage storage key value is an empty string through the setItem method
  + Android平台 修复 同时创建两个音频播放对象，其中一个音频暂停后另一个无法播放的Bug
  + Android platform Fixed the bug that two audio playback objects were created at the same time, and one of them could not play after the audio was paused
  + Android平台 修复 视频播放控件 VideoPlayer 播放部分 rtmp 链接可能无声音的Bug
  + Android platform fix the video playback control VideoPlayer playback part of the rtmp link may have no sound bug
  + iOS平台 修复 原生导航标题栏 设置 type 为 float 时，backgroundColor 的半透明效果显示不正确的Bug
  + iOS platform Fix the bug that the translucent effect of backgroundColor is not displayed correctly when the native navigation title bar is set to float
  + Android平台 修复 确认模态框 confirm 显示时会弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/93574)
  + Android platform Fix the bug that the soft keyboard will pop up when the confirm modal box confirm is displayed [Details](https://ask.dcloud.net.cn/question/93574)
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.6
  + iOS platform update uni-AD Tencent Guangdiantong SDK version to 4.11.6
  + iOS平台 修复 uni-AD 腾讯广点通部分视频激励广告点击关闭按钮触发 onClose 事件参数中 isEnded 属性可能为 false 的Bug
  + iOS platform Fix the bug that the isEnded property in the onClose event parameter may be false when clicking the close button on some video rewarded ads of uni-AD Tencent Guangdiantong
  + iOS平台 修复 uni-AD 腾讯广点通的信息流视频广告自动播放时没有静音的Bug
  + iOS platform, fix the bug that uni-AD Tencent Guangdiantong's information stream video ads are not muted when they are automatically played
  + iOS平台 修复 HBuilderX2.6.8 引出的Webview窗口 userAgent 不正确可能导致加载的页面内部逻辑不正确的Bug [详情](https://ask.dcloud.net.cn/question/93284)
  + iOS platform Fix the bug that the incorrect userAgent of the Webview window brought out by HBuilderX2.6.8 may lead to incorrect internal logic of the loaded page [Details](https://ask.dcloud.net.cn/question/93284)
  + iOS平台 修复 iOS 13.4.1及以上版本在 iPad 设备应用第一次启动获取不到所有窗口对象的Bug [详情](https://ask.dcloud.net.cn/question/93308)
  + iOS platform Fix the bug that iOS 13.4.1 and above cannot get all the window objects when the iPad application is launched for the first time [Details](https://ask.dcloud.net.cn/question/93308)
  + iOS平台 修复 视频播放控件 VideoPlayer 全屏时在 iPhoneX 可能出现亮度控制视图位置错乱的Bug [详情](https://ask.dcloud.net.cn/question/87370)
  + iOS platform Fix the bug that the position of the brightness control view may be disordered on iPhoneX when VideoPlayer is full screen [Details](https://ask.dcloud.net.cn/question/87370)
* 【uni小程序SDK】
* [uni applet SDK]
  + iOS平台 补齐 wgt 编译版本与js框架版本校验，不一致会弹窗提示 [详情](https://ask.dcloud.net.cn/article/35627)
  + iOS platform Completion of wgt compiled version and js framework version verification, a pop-up prompt will be displayed if they are inconsistent [Details](https://ask.dcloud.net.cn/article/35627)
  + iOS平台 修复 小程序内 wgt 热更新资源后启动会显示一下 LaunchScreen.storyboard 页面的Bug
  + iOS platform Fix the bug that the LaunchScreen.storyboard page will be displayed after wgt hot update resources in the applet

#### 2.6.11.20200409
* 【uni-app】
  + App平台 新增 激励视频广告支持服务器回调 [详情](https://uniapp.dcloud.io/api/a-d/rewarded-video-ad)
  + App platform added Rewarded video ads support server callback [Details](https://uniapp.dcloud.io/api/a-d/rewarded-video-ad)
  + App平台 优化 控制台日志支持打印数组类型
  + App platform optimization Console log supports printing array type
  + App平台 修复 v3版本 判断浏览器专用 API（如：navigator）报错的Bug
  + App platform Fixed bugs in v3 version judging browser-specific APIs (such as: navigator)
  + App平台 修复 v3版本 navigation-bar 组件 非首页某些属性无效的Bug
  + App platform Fix the bug that some properties of the navigation-bar component of the v3 version are not valid on the home page
  + App-Android平台 修复 nvue web-view 组件 src 属性的链接地址中带 query 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/92043)
  + App-Android platform Fix the bug with invalid query parameter in the link address of the src attribute of the nvue web-view component [Details](https://ask.dcloud.net.cn/question/92043)
  + App-Android平台 修复 nvue web-view、image 等组件 src 属性资源地址为_doc、_download路径时可能无法正常载入的Bug
  + App-Android platform Fix the bug that the src attribute resource address of nvue web-view, image and other components may not be loaded normally when the resource address is _doc, _download path
  + App-Android平台 修复 nvue list/waterfall 组件底部使用 loading 加载更多时，无法正常触发 @loading 事件的Bug [详情](https://ask.dcloud.net.cn/question/93190)
  + App-Android platform Fix the bug that the @loading event cannot be triggered normally when loading more using loading at the bottom of the nvue list/waterfall component [Details](https://ask.dcloud.net.cn/question/93190)
  + App-Android平台 修复 nvue list 组件 @scroll 事件返回参数 contentOffset.y 值域不正确的Bug [详情](https://ask.dcloud.net.cn/question/92872)
  + App-Android platform Fix the bug that the @scroll event of nvue list component returns the parameter contentOffset.y value range is incorrect [Details](https://ask.dcloud.net.cn/question/92872)
  + App-Android平台 修复 uni.sendSocketMessage 无法发送某些 bytebuffer 数据的Bug [详情](https://ask.dcloud.net.cn/question/92700)
  + App-Android platform Fix the bug that uni.sendSocketMessage cannot send some bytebuffer data [Details](https://ask.dcloud.net.cn/question/92700)
  + App-iOS平台 修复 nvue web-view 组件加载本地 html 文件，若路径中带 query 参数时，无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/91311)
  + App-iOS platform Fix the bug that the nvue web-view component loads local html files, if the query parameter is included in the path, it cannot be displayed normally [Details](https://ask.dcloud.net.cn/question/91311)
  + App-iOS平台 修复 v3版本 uni.canvasToTempFilePath 在 ios 9.3.4 报错的Bug [详情](https://ask.dcloud.net.cn/question/92189)
  + App-iOS platform Fix the bug that the v3 version uni.canvasToTempFilePath reported an error in ios 9.3.4 [Details](https://ask.dcloud.net.cn/question/92189)
* 【uniCloud】
  + 阿里云 新增 支持云函数定时触发
  + Alibaba Cloud added support for cloud function timing trigger
  + 阿里云 优化 云函数上传并运行时有时不能立即生效的问题
  + Alibaba Cloud Optimized the problem that cloud functions sometimes do not take effect immediately when they are uploaded and run
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 uni-AD 激励视频广告支持服务器回调（限今日头条穿山甲广告） [文档](https://ask.dcloud.net.cn/article/37108)
  + Added support for server callback for uni-AD rewarded video ads (only for Toutiao pangolin ads) [document](https://ask.dcloud.net.cn/article/37108)
  + 新增 Webview窗口标题栏 titleNView 的 titleIcon 支持网络图标路径
  + Added the titleIcon of the title bar titleNView of the Webview window to support the network icon path
  + Android平台 修复 Webview窗口对象 loadURL 方法 headers 参数设置无效的Bug [详情](https://ask.dcloud.net.cn/question/87597)
  + Android platform Fix the bug that the headers parameter of the Webview window object loadURL method is invalid [Details](https://ask.dcloud.net.cn/question/87597)
  + Android平台 修复 在Android10上第一次安装后启动可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/90361)
  + Android platform Fix the bug that may cause the app to crash after the first installation on Android10 [Details](https://ask.dcloud.net.cn/question/90361)
  + Android平台 修复 应用标识 AppID 使用www结尾时导致部分资源无法正常载入的Bug [详情](https://ask.dcloud.net.cn/question/91217)
  + Android platform Fixed a bug that caused some resources to fail to load normally when the AppID ends with www [Details](https://ask.dcloud.net.cn/question/91217)
  + Android平台 修复 百度语音识别时在部分设备可能返回 4004 app name unknown 错误的Bug [详情](https://ask.dcloud.net.cn/question/90982)
  + Android platform Fix the bug that Baidu voice recognition may return 4004 app name unknown error on some devices [Details](https://ask.dcloud.net.cn/question/90982)
  + Android平台 修复 设置应用图标显示角标数字 plus.runtime.setBadgeNumber 在部分设备超过100时仍然显示99的Bug [详情](https://ask.dcloud.net.cn/question/91452)
  + Android platform Fix the bug of setting the app icon to display the corner number plus.runtime.setBadgeNumber when some devices exceed 100, the bug still displays 99 [Details](https://ask.dcloud.net.cn/question/91452)
  + Android平台 修复 文件系统目录对象 DirectoryEntry 的 getFile 方法返回错误信息不准确的Bug
  + Android platform Fix the bug that the getFile method of the file system directory object DirectoryEntry returns an inaccurate error message
  + Android平台 修复 调用 plus.gellay.pick 通过QQ浏览器选择图片或视频在部分设备可能无响应的Bug
  + Android platform fixed the bug that calling plus.gellay.pick to select pictures or videos through QQ browser may not respond to some devices
  + Android平台 修复 HBuilderX 2.6.1引出的获取Cookie值 plus.navigator.getCookie 返回数据不正确的Bug
  + Android platform Fix the bug that HBuilderX 2.6.1 leads to get Cookie value plus.navigator.getCookie returns incorrect data
  + iOS平台 新增 Webview窗口使用WKWebview内核在iOS11及以上设备支持js原生混淆 [详情](https://ask.dcloud.net.cn/article/36437#wkwebview)
  + iOS platform Added Webview window using WKWebview kernel to support js native obfuscation on iOS11 and above devices [Details](https://ask.dcloud.net.cn/article/36437#wkwebview)
  + iOS平台 更新 支付宝Alipay SDK版本为15.7.4，解决AppStore审核报使用废弃UIWebview APIs的问题
  + iOS platform update The Alipay SDK version is 15.7.4, which solves the problem that the AppStore audit report uses abandoned UIWebview APIs
  + iOS平台 更新 新浪微博登录、分享SDK版本为3.2.7，解决AppStore审核报使用废弃UIWebview APIs的问题
  + iOS platform update Sina Weibo login and share SDK version is 3.2.7, solve the problem of AppStore audit report using abandoned UIWebview APIs
  + iOS平台 更新 今日头条穿山甲广告SDK版本为V2.9.5.0
  + iOS platform update Toutiao pangolin advertising SDK version is V2.9.5.0
  + iOS平台 修复 iOS 13.3及以上版本在 iPad 设备 plus.webview.all 无法获取所有Webview窗口的Bug [详情](https://ask.dcloud.net.cn/question/90517)
  + iOS platform Fix the bug that iOS 13.3 and above cannot get all Webview windows on iPad devices plus.webview.all [Details](https://ask.dcloud.net.cn/question/90517)
  + iOS平台 修复 iOS 13.3及以上版本在 iPad 设备 mui.openWindow 设置的窗口参数获取不到的Bug [详情](https://ask.dcloud.net.cn/question/91746)
  + iOS platform Fix the bug that iOS 13.3 and above cannot get the window parameters set by mui.openWindow on iPad devices [Details](https://ask.dcloud.net.cn/question/91746)
  + iOS平台 修复 iOS 13及以上版本视频播放控件 VideoPlayer 全屏时可能出现亮度控制视图位置错乱的Bug [详情](https://ask.dcloud.net.cn/question/87370)
  + iOS platform Fix the bug that the brightness control view may be out of position when the video playback control VideoPlayer is full screen on iOS 13 and above [Details](https://ask.dcloud.net.cn/question/87370)
  + iOS平台 修复 视频播放控件 VideoPlayer 在下拉通知栏页面后依然播放的Bug [详情](https://ask.dcloud.net.cn/question/90627)
  + iOS platform Fix the bug that the video playback control VideoPlayer still plays after pulling down the notification bar page [Details](https://ask.dcloud.net.cn/question/90627)
  + iOS平台 修复 预览图片 plus.nativeUI.previewImage 传入长图时显示不清楚的Bug [详情](https://ask.dcloud.net.cn/question/92083)
  + iOS platform Fix the bug that the preview image plus.nativeUI.previewImage is unclear when a long image is passed in [Details](https://ask.dcloud.net.cn/question/92083)
  + iOS平台 修复 应用安装后第一次启动 splash 界面显示不正常的Bug
  + iOS platform Fixed the bug that the splash interface displayed abnormally when the app was installed for the first time
  + iOS平台 修复 Webview窗口 setStyle 设置 {titleNView: false} 后通过 getSytle 获取的 titleNView 数据不正确的Bug
  + iOS platform Fix the bug that the titleNView data obtained through getSytle is incorrect after the Webview window setStyle is set to {titleNView: false}
* 【uni小程序SDK】
* [uni applet SDK]
  + 新增 宿主与小程序通讯机制 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37122)
  + Added host and applet communication mechanism [Details](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37122)
  + iOS平台 修复 在监听小程序被关闭的方法中紧接着在打开小程序可能会崩溃的Bug
  + iOS platform Fix the bug that may crash when opening the applet in the method of listening for the applet to be closed
  + iOS平台 修复 uni.chooseImage 引起内存泄露的Bug
  + Fix the bug of memory leak caused by uni.chooseImage on iOS platform

#### 2.6.9.20200403
* 【uni-app】
  + 【重要】 App平台 调整 manifest中默认的编译模式为v3模式。如需要切换为老版自定义组件模式，需要在 manifest可视化界面 - App其他常用设置 中，去掉v3编译模式
  + [Important] App platform Adjust the default compilation mode in manifest to v3 mode. If you need to switch to the old version of the custom component mode, you need to remove the v3 compilation mode in the manifest visual interface - other common settings of the app
  + 【重要】 App平台 新增 v3版本 支持纯 nvue 编译模式。两种模式不再互斥
  + [Important] App platform added v3 version to support pure nvue compilation mode. The two modes are no longer mutually exclusive
  + 【重要】 App平台 调整 v3版本 template 节点中引用静态资源文件时（如：图片），调整查找策略为【基于当前文件的路径搜索】，与其他平台保持一致
  + [Important] App platform When adjusting the v3 version template node to reference static resource files (such as: pictures), adjust the search strategy to [search based on the path of the current file], which is consistent with other platforms
  + App平台、H5平台 优化 v3版本 uni.moveToLocation 支持 latitude、longitude 参数
  + App platform, H5 platform Optimize v3 version uni.moveToLocation supports latitude, longitude parameters
  + App平台、H5平台 修复 多列 picker 组件部分情况修改 value 不生效的Bug
  + App platform, H5 platform Fix the bug that the value of the multi-column picker component does not take effect in some cases
  + App平台 修复 自定义组件编译模式使用 easycom 后在低版本设备白屏的Bug [详情](https://ask.dcloud.net.cn/question/92473)
  + App platform Fix the bug of white screen on low-version devices after using easycom in custom component compilation mode [Details](https://ask.dcloud.net.cn/question/92473)
  + App平台 修复 v3版本 uni.openLocation 点击导航栏返回后退2次的Bug [详情](https://github.com/dcloudio/uni-app/issues/1465)
  + App platform Fix the bug of v3 version uni.openLocation Click the navigation bar to go back 2 times [Details](https://github.com/dcloudio/uni-app/issues/1465)
  + App平台 修复 v3版本 uni.moveToLocation 不执行回调的Bug
  + App platform Fix the bug that uni.moveToLocation does not execute callback in v3 version
  + App平台 修复 v3版本 webview 组件无法收到 @message 的Bug [详情](https://ask.dcloud.net.cn/question/92296)
  + App platform Fix the bug that the v3 version webview component cannot receive the bug of @message [Details](https://ask.dcloud.net.cn/question/92296)
  + App-iOS平台 修复 textarea 组件在 iOS13.4 系统报错的Bug
  + App-iOS platform Fix the bug that the textarea component reported an error in the iOS13.4 system
  + App-iOS平台 修复 锁定横屏后打开 nvue 页面使用 plus.screen 获取屏幕宽高值不对的Bug
  + App-iOS platform fix the bug that the nvue page is opened after locking the landscape screen to use plus.screen to get the wrong screen width and height
  + H5平台 修复 image 组件 某些情况下相对路径无法显示的Bug [详情](https://ask.dcloud.net.cn/question/92366)
  + H5 platform Fix the bug that the relative path of the image component cannot be displayed in some cases [Details](https://ask.dcloud.net.cn/question/92366)
  + 小程序平台 修复 调用取消事件监听类接口报错的Bug [#1511](https://github.com/dcloudio/uni-app/issues/1511)
  + Mini Program Platform Fix the bug that calls the cancel event listener class interface to report an error [#1511](https://github.com/dcloudio/uni-app/issues/1511)
* 【uniCloud】
  + 修复 使用阿里云时运行到App端不输出运行日志的Bug
  + Fix the bug that the running log is not output when running to the App side when using Alibaba Cloud
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 获取当前屏幕宽高信息接口 plus.screen.getCurrentSize [文档](https://www.html5plus.org/doc/zh_cn/device.html#plus.screen.getCurrentSize)
  + Added interface for getting current screen width and height information plus.screen.getCurrentSize [documentation](https://www.html5plus.org/doc/zh_cn/device.html#plus.screen.getCurrentSize)
  + iOS平台 修复 Webview窗口标题栏 titleNView 动态设置 titleText 在某些情况下可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/92494)
  + iOS platform Fix the bug that the titleNView dynamic setting of the titleText of the Webview window may not take effect in some cases [Details](https://ask.dcloud.net.cn/question/92494)

#### 2.6.8.20200330
* 【uni-app】
  + 优化 静态资源引入方式 [详情](https://uniapp.dcloud.io/frame?id=resource)
  + Optimized the way of importing static resources [Details](https://uniapp.dcloud.io/frame?id=resource)
  + 修复 内联 wxs 里包含“!”符号时报错的Bug [详情](https://ask.dcloud.net.cn/question/90581)
  + Fix the bug that the inline wxs contains the "!" symbol. [Details](https://ask.dcloud.net.cn/question/90581)
  + 修复 TypeScript 项目部分情况(存在 easycom 组件)，内置组件报未注册的Bug [#1400](https://github.com/dcloudio/uni-app/issues/1400)
  + Fixed some cases of TypeScript projects (there is easycom component), the built-in component reported an unregistered bug [#1400](https://github.com/dcloudio/uni-app/issues/1400)
  + 修复 uni.scss 内条件编译失效的Bug [详情](https://ask.dcloud.net.cn/question/90454)
  + Fix the bug that conditional compilation fails in uni.scss [Details](https://ask.dcloud.net.cn/question/90454)
  + 修复 vue.config.js 设置 transpileDependencies 失效的Bug [详情](https://ask.dcloud.net.cn/question/90068)
  + Fix the bug that vue.config.js set transpileDependencies invalid [Details](https://ask.dcloud.net.cn/question/90068)
  + App平台、H5平台 修复 createAnimation 时 backgroundColor无效的Bug [详情](https://ask.dcloud.net.cn/question/91190)
  + App platform, H5 platform Fix the bug of invalid backgroundColor when createAnimation [Details](https://ask.dcloud.net.cn/question/91190)
  + App平台 新增 v3版本 支持动态插槽名
  + App platform Added v3 version Support dynamic slot name
  + App平台 新增 v3版本 navigation-bar 组件 titleNView 配置 [详情](https://uniapp.dcloud.io/component/navigation-bar)
  + App platform Added v3 version navigation-bar component titleNView configuration [Details](https://uniapp.dcloud.io/component/navigation-bar)
  + App平台 修复 热刷新页面参数被 encode 多次的Bug
  + App platform to fix the bug that hot refresh page parameters are encoded many times
  + App平台 修复 vue 页面 ad 组件 无法销毁的Bug
  + App platform to fix the bug that the ad component of the vue page cannot be destroyed
  + App平台 修复 tabBar 的 midButton 点击高出tabBar高度区域无响应的Bug [详情](https://ask.dcloud.net.cn/question/87821)
  + App platform Fix the bug that the midButton of the tabBar does not respond when the area is higher than the height of the tabBar [Details](https://ask.dcloud.net.cn/question/87821)
  + App平台 修复 v3版本 切换到已显示 tabBar 页面时触发该页面 onHide 的Bug [详情](https://ask.dcloud.net.cn/question/91106)
  + App platform Fixed the bug of triggering the onHide of the page when switching to the displayed tabBar page in v3 version [Details](https://ask.dcloud.net.cn/question/91106)
  + App平台 修复 v3版本 通过 v-if 切换部分组件时报错的Bug [详情](https://ask.dcloud.net.cn/question/90200)
  + App platform Fix the bug of v3 version when switching some components through v-if [Details](https://ask.dcloud.net.cn/question/90200)
  + App平台 修复 v3版本 css 条件编译为非 nvue 页面报错 may not be supported 的Bug [详情](https://ask.dcloud.net.cn/question/90523)
  + App platform Fix the bug that the css conditional compilation of v3 version is a non-nvue page error may not be supported [Details](https://ask.dcloud.net.cn/question/90523)
  + App平台 修复 v3版本 部分情况自定义组件内事件监听无效的Bug [详情](https://ask.dcloud.net.cn/question/91519)
  + App platform Fix the bug that the event monitoring in the custom component is invalid in some cases in the v3 version [Details](https://ask.dcloud.net.cn/question/91519)
  + App平台 修复 v3版本 部分情况组件事件监听混乱，导致页面渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/91169)
  + App platform Fixed a bug in the v3 version where component event monitoring was confusing, resulting in abnormal page rendering [Details](https://ask.dcloud.net.cn/question/91169)
  + App平台 修复 v3版本 动态绑定ref报错的Bug [#1458](https://github.com/dcloudio/uni-app/issues/1458)
  + App platform Fix the bug of dynamic binding ref error in v3 version [#1458](https://github.com/dcloudio/uni-app/issues/1458)
  + App平台 修复 v3版本 textarea 组件 placeholder-class 无默认值的Bug [详情](https://ask.dcloud.net.cn/question/91373)
  + App platform Fix the bug that the textarea component placeholder-class in v3 version has no default value [Details](https://ask.dcloud.net.cn/question/91373)
  + App平台 修复 v3版本 cover-view、cover-image 组件无法在自定义组件内使用的Bug [详情](https://ask.dcloud.net.cn/question/91345)
  + App platform Fix the bug that cover-view and cover-image components in v3 version cannot be used in custom components [Details](https://ask.dcloud.net.cn/question/91345)
  + App平台 修复 v3版本 nvue 页面 swiper 组件的 @transition 事件在某些情况下回调不正确的Bug [详情](https://ask.dcloud.net.cn/question/88906)
  + App Platform Fix the bug that the @transition event of the swiper component of the nvue page in v3 version is called incorrectly in some cases [Details](https://ask.dcloud.net.cn/question/88906)
  + App平台 修复 v3版本 swiper 组件作为插槽内容在其他组件中表现不正常的Bug [详情](https://ask.dcloud.net.cn/question/89853)
  + App platform Fix the bug that the swiper component of v3 version does not behave normally in other components as slot content [Details](https://ask.dcloud.net.cn/question/89853)
  + App平台 修复 v3版本 map 组件 @markertap、@callouttap 事件回调值错误的Bug [详情](https://ask.dcloud.net.cn/question/88656)
  + App platform Fix the bug that the v3 version map component @markertap, @callouttap event callback value is wrong [Details](https://ask.dcloud.net.cn/question/88656)
  + App平台 修复 v3版本 map 组件 @regionchange 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/88656)
  + App platform Fix the bug that the @regionchange event of the v3 map component is invalid [Details](https://ask.dcloud.net.cn/question/88656)
  + App平台 修复 v3版本 nvue 页面 map 相关API：getRegion，getCenterLocation 无效的Bug [详情](https://ask.dcloud.net.cn/question/90327)
  + App platform Fix v3 version nvue page map related API: getRegion, getCenterLocation invalid bug [Details](https://ask.dcloud.net.cn/question/90327)
  + App平台 修复 v3版本 video 组件 timeupdate 事件回调错误的Bug [详情](https://ask.dcloud.net.cn/question/91769)
  + App platform Fixed the bug of timeupdate event callback error of video component in v3 version [Details](https://ask.dcloud.net.cn/question/91769)
  + App平台 修复 v3版本 canvas 组件宽度或高度为0时报错的Bug [详情](https://ask.dcloud.net.cn/question/90647)
  + App platform Fix the bug that the width or height of the canvas component in v3 version is 0 [Details](https://ask.dcloud.net.cn/question/90647)
  + App平台 修复 v3版本 部分情况下绘制 canvas 组件报错的Bug [详情](https://ask.dcloud.net.cn/question/90328)
  + App platform Fix the bug of drawing canvas component in some cases in v3 version [Details](https://ask.dcloud.net.cn/question/90328)
  + App平台 修复 v3版本 uni.canvasToTempFilePath 配置 fileType 参数不生效的Bug [详情](https://ask.dcloud.net.cn/question/89273)
  + App platform Fix the bug that the fileType parameter of uni.canvasToTempFilePath configuration in v3 version does not take effect [Details](https://ask.dcloud.net.cn/question/89273)
  + App平台 修复 v3版本 uni.canvasPutImageData 无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/91672)
  + App platform Fix the bug that the v3 version uni.canvasPutImageData cannot be used normally [Details](https://ask.dcloud.net.cn/question/91672)
  + App平台 修复 v3版本 uni.previewImage 参数 longPressActions 无效的Bug
  + App platform Fix the bug that the parameter longPressActions of uni.previewImage is invalid in v3 version
  + App平台 修复 v3版本 uni.sendSocketMessage 发送 ArrayBuffer 类型数据报错的Bug [详情](https://ask.dcloud.net.cn/question/90434)
  + App platform Fixed the bug of uni.sendSocketMessage in v3 version sending ArrayBuffer type data error [Details](https://ask.dcloud.net.cn/question/90434)
  + App平台 修复 v3版本 socketTask.onOpen 内调用 socketTask.send 报错的Bug
  + App platform Fix the bug of calling socketTask.send in v3 version socketTask.onOpen
  + App平台 修复 v3版本 低功耗蓝牙某些接口在返回 ArrayBuffer 时被转为 base64 的Bug
  + App platform Fix the bug that some interfaces of low energy bluetooth are converted to base64 when returning ArrayBuffer in v3 version
  + App平台 修复 v3版本 uni.createBLEConnection 回调不触发的Bug
  + App platform Fix the bug that the uni.createBLEConnection callback does not trigger in v3 version
  + App平台 修复 v3版本 uni.readBLECharacteristicValue 无法读取特征值数据的Bug
  + App platform Fixed the bug that uni.readBLECharacteristicValue in v3 version could not read the characteristic value data
  + App平台 修复 v3版本 uni.writeBLECharacteristicValue 写入二进制数据报错的Bug
  + App platform Fixed the bug that uni.writeBLECharacteristicValue in v3 version reported an error when writing binary data
  + App平台 修复 v3版本 subNvue style 内的 mask 属性被错误的应用在 subNvue 上的Bug [详情](https://ask.dcloud.net.cn/question/91097)
  + App platform Fixed the bug that the mask attribute in the subNvue style of the v3 version was incorrectly applied to the subNvue [Details](https://ask.dcloud.net.cn/question/91097)
  + App平台 修复 v3版本 从非 tabBar 页面调用 uni.switchTab 切换到一个已存在的 tabBar 页面，onShow 不执行的Bug
  + App platform Fixed the bug that onShow does not execute when calling uni.switchTab from a non-tabBar page to switch to an existing tabBar page in v3 version
  + App平台 调整 v3版本 使用 wx.xxx 方式调用接口不进行 Promise 封装
  + App platform Adjust v3 version Use wx.xxx method to call interface without Promise encapsulation
  + App平台 修复 v3版本 fast 模式 storage相关API报错的Bug [详情](https://ask.dcloud.net.cn/question/90554)
  + App platform Fix the bug of v3 version fast mode storage related API error [Details](https://ask.dcloud.net.cn/question/90554)
  + App平台 修复 v3版本 await this.$nextTick() 触发时机不正确的Bug [详情](https://ask.dcloud.net.cn/question/87434)
  + App platform Fix the bug that await this.$nextTick() trigger timing is incorrect in v3 version [Details](https://ask.dcloud.net.cn/question/87434)
  + App平台 修复 uni.setNavigationBarColor 无法设置返回按钮的颜色的Bug
  + App platform Fixed the bug that uni.setNavigationBarColor could not set the color of the return button
  + App平台 修复 非v3编译模式 uni.getImageInfo 返回 path 不是本地路径的Bug [详情](https://ask.dcloud.net.cn/question/90689)
  + App platform Fix bug that uni.getImageInfo returns path is not a local path in non-v3 compilation mode [Details](https://ask.dcloud.net.cn/question/90689)
  + App平台 修复 纯 nvue 模式 uni.relaunch 会导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/89364)
  + App platform Fix the bug that uni.relaunch in pure nvue mode will cause the application to crash [Details](https://ask.dcloud.net.cn/question/89364)
  + App平台 修复 nvue 页面 v-slot:slotname 值为空时报错的Bug
  + App platform Fix the bug that the v-slot:slotname value of the nvue page is empty when an error occurs
  + App平台 修复 nvue 页面 修复部分情况下 createLivePusherContext 无法正确获取 live-pusher 上下文的Bug
  + App platform Fix nvue page Fix the bug that createLivePusherContext cannot correctly obtain live-pusher context in some cases
  + App平台 新增 nvue 页面 list 组件支持 setSpecialEffects 方法，实现 swiper-list 吸顶滚动效果 [文档](https://uniapp.dcloud.io/component/list?id=setSpecialEffects)
  + App platform Added nvue page list component to support setSpecialEffects method to achieve swiper-list ceiling scrolling effect [document](https://uniapp.dcloud.io/component/list?id=setSpecialEffects)
  + App平台 修复 nvue 页面 map 组件 markers、polyline、polygons、circles 属性无法重置的Bug [详情](https://ask.dcloud.net.cn/question/86786)
  + App platform Fix the bug that the markers, polyline, polygons, circles properties of the map component of the nvue page cannot be reset [Details](https://ask.dcloud.net.cn/question/86786)
  + App平台 修复 nvue 页面 自定义组件中无法正常使用 video 相关 API 的Bug [详情](https://ask.dcloud.net.cn/question/90877)
  + App platform Fix the bug that the video related API cannot be used normally in the custom component of nvue page [Details](https://ask.dcloud.net.cn/question/90877)
  + App-Android平台 优化 storage 相关 API 性能 [注意事项](https://ask.dcloud.net.cn/article/37071)
  + App-Android platform optimizes storage related API performance [Notes](https://ask.dcloud.net.cn/article/37071)
  + App-Android平台 修复 pages.json 内配置 softinputMode 为 adjustResize 部分情况下失效的Bug [详情](https://ask.dcloud.net.cn/question/90145)
  + App-Android platform Fix the bug that the softinputMode is set to adjustResize in pages.json [Details](https://ask.dcloud.net.cn/question/90145)
  + App-Android平台 修复 nvue video 组件在页面中存在多个且包含 cover-view 全屏播放时闪退的Bug [详情](https://ask.dcloud.net.cn/question/88718)
  + App-Android platform Fix the bug that the nvue video component exists in multiple pages and includes cover-view full screen playback. [Details](https://ask.dcloud.net.cn/question/88718)
  + App-Android平台 修复 nvue video 组件设置 click 事件后视频操作按钮无法触发的Bug [详情](https://ask.dcloud.net.cn/question/90291)
  + App-Android platform Fix the bug that the video operation button cannot be triggered after the click event is set in the nvue video component [Details](https://ask.dcloud.net.cn/question/90291)
  + App-Android平台 修复 nvue waterfall 组件加入 Refresh 后item排版错乱的Bug [详情](https://ask.dcloud.net.cn/question/83130)
  + App-Android platform Fix the bug that the item typesetting is disordered after the nvue waterfall component is added to Refresh [Details](https://ask.dcloud.net.cn/question/83130)
  + App-Android平台 修复 tabBar 的 midButton 设置 backgroundImage 显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/89800)
  + App-Android platform Fix the bug that the backgroundImage of the midButton of the tabBar is not displayed properly [Details](https://ask.dcloud.net.cn/question/89800)
  + App-Android平台 修复 国产安卓模拟器 uni.getSystemInfo 获取设备宽高错误的Bug [详情](https://ask.dcloud.net.cn/question/90270)
  + App-Android platform Fix the bug that the domestic Android emulator uni.getSystemInfo gets the wrong device width and height [Details](https://ask.dcloud.net.cn/question/90270)
  + App-Android平台 修复 v3版本 map 组件绑定宽高后无法动态修改的Bug [详情](https://ask.dcloud.net.cn/question/89771)
  + App-Android platform Fix the bug that the v3 version map component cannot be dynamically modified after the width and height are bound [Details](https://ask.dcloud.net.cn/question/89771)
  + App-Android平台 修复 v3版本 nvue 为首页时 autoclose 设置为 false 也会自动关闭启动页的Bug [详情](https://ask.dcloud.net.cn/question/90080)
  + App-Android platform Fix the bug that when the v3 version of nvue is the homepage, if autoclose is set to false, the startup page will also be automatically closed [Details](https://ask.dcloud.net.cn/question/90080)
  + App-Android平台 修复 v3版本 SocketTask.onMessage 接收数据类型为 ArrayBuffer 时解析错误的Bug
  + App-Android platform, fix the bug that the v3 version SocketTask.onMessage receives the data type of ArrayBuffer when the data type is parsed incorrectly
  + App-iOS平台 新增 API uni.onUIStyleChange 监听系统主题状态变化（限v3） [详情](https://uniapp.dcloud.io/api/system/theme?id=onuistylechange)
  + App-iOS platform Added API uni.onUIStyleChange to monitor system theme state changes (v3 only) [Details](https://uniapp.dcloud.io/api/system/theme?id=onuistylechange)
  + App-iOS平台 优化 API uni.showActionSheet 在 iPad 设备支持 popover 设置弹出指示区域（限v3）
  + App-iOS platform optimization API uni.showActionSheet supports popover on iPad devices to set the popup indicator area (v3 only)
  + App-iOS平台 修复 设备上使用第三方输入法收起键盘输入框无法失去焦点的Bug [详情](https://ask.dcloud.net.cn/question/91254)
  + App-iOS platform Fix the bug that the keyboard input box cannot lose focus when using a third-party input method on the device [Details](https://ask.dcloud.net.cn/question/91254)
  + App-iOS平台 修复 部分情况 page 设置 height 为 100% 无法全屏的Bug
  + App-iOS platform to fix the bug that the page cannot be full screen when the height is set to 100% in some cases
  + App-iOS平台 修复 页面使用原生占位时在 iPhoneX 获取窗口高度错误的Bug
  + App-iOS platform Fix the bug of getting the wrong window height on iPhoneX when the page uses native placeholder
  + App-iOS平台 修复 picker 设置 value 过大时会滚动到空白位置的Bug [详情](https://ask.dcloud.net.cn/question/89539)
  + App-iOS platform Fix the bug that the picker will scroll to a blank position when the value is too large [Details](https://ask.dcloud.net.cn/question/89539)
  + App-iOS平台 修复 nvue 页面中加载 base64 格式 iconfont 文件在iOS13.4系统崩溃的Bug [详情](https://ask.dcloud.net.cn/question/91721)
  + App-iOS platform Fix the bug that the base64 format iconfont file loaded in the nvue page crashes on iOS13.4 [Details](https://ask.dcloud.net.cn/question/91721)
  + H5平台 优化 支持 manifest.json 配置 h5->router->base 值为 "./" 部署到相对路径
  + H5 platform optimization Support manifest.json configuration h5->router->base value "./" to deploy to relative path
  + H5平台 修复 PC模式图像预览页面滑动会关闭的Bug
  + H5 platform Fix the bug that the image preview page in PC mode will be closed by sliding
  + H5平台 修复 带参数 url 直达部分情况参数解析失败的Bug [#1082](https://github.com/dcloudio/uni-app/issues/1082)
  + H5 platform Fix the bug that parameter parsing fails in some cases when url with parameters is directly connected [#1082](https://github.com/dcloudio/uni-app/issues/1082)
  + H5平台 修复 pages.json 配置 navigationBarShadow 无效的Bug [#607](https://github.com/dcloudio/uni-app/issues/607)
  + H5 platform Fix the bug that pages.json configuration navigationBarShadow is invalid [#607](https://github.com/dcloudio/uni-app/issues/607)
  + H5平台 修复 配置 transparentTitle 为 always 失效的Bug [详情](https://ask.dcloud.net.cn/question/91135)
  + H5 platform fix the bug that configure transparentTitle as always invalid [Details](https://ask.dcloud.net.cn/question/91135)
  + H5平台 修复 editor 组件 input 事件重复触发的Bug [详情](https://ask.dcloud.net.cn/question/91453)
  + H5 platform Fix the bug that the input event of the editor component is repeatedly triggered [Details](https://ask.dcloud.net.cn/question/91453)
  + H5平台 修复 editor 组件 statuschange 事件无法触发的Bug [详情](https://ask.dcloud.net.cn/question/91314)
  + H5 platform Fix the bug that the editor component statuschange event cannot be triggered [Details](https://ask.dcloud.net.cn/question/91314)
  + H5平台 修复 picker 组件未设置 value 时报错的Bug [#1422](https://github.com/dcloudio/uni-app/issues/1422)
  + H5 platform Fix the bug that the value of picker component is not set [#1422](https://github.com/dcloudio/uni-app/issues/1422)
  + H5平台 修复 picker 组件 mode=time 失效的Bug [#1421](https://github.com/dcloudio/uni-app/issues/1421)
  + H5 platform Fix the bug that the mode=time of the picker component is invalid [#1421](https://github.com/dcloudio/uni-app/issues/1421)
  + H5平台 修复 textarea 组件 placeholder-class 配置无效的Bug [详情](https://ask.dcloud.net.cn/question/86851)
  + H5 platform Fix the bug that the placeholder-class configuration of the textarea component is invalid [Details](https://ask.dcloud.net.cn/question/86851)
  + H5平台 修复 部分情况下 webview 组件位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/90987)
  + H5 platform Fix the bug that the location of webview components is incorrect in some cases [Details](https://ask.dcloud.net.cn/question/90987)
  + 微信小程序平台 修复 组件缺少 script 节点时运行报错的Bug [#1411](https://github.com/dcloudio/uni-app/issues/1411)
  + Wechat applet platform Fix the bug of running error when the component lacks the script node [#1411](https://github.com/dcloudio/uni-app/issues/1411)
  + hello uni-app 新增 swiper-list 模板（nvue实现区域长列表左右滚动+吸顶）
  + hello uni-app added swiper-list template (nvue implements long list scrolling left and right + ceiling)
* 【uniCloud】
  + 新增 支持腾讯云作为uniCloud底层资源平台，当前处于邀请测试阶段
  + Added support for Tencent Cloud as the underlying resource platform of uniCloud, currently in the invitation test phase
  + 新增 公共函数功能 [详情](https://uniapp.dcloud.io/uniCloud/quickstart?id=common)
  + Added public functions [Details](https://uniapp.dcloud.io/uniCloud/quickstart?id=common)
  + 新增 阿里云 支持云函数Url化 [详情](https://uniapp.dcloud.io/uniCloud/http)
  + Added Alibaba Cloud to support cloud function URLization [Details](https://uniapp.dcloud.io/uniCloud/http)
  + 修复 阿里云 客户端上传文件在web控制台显示大小为0的Bug
  + Fix the bug that the upload file of Alibaba Cloud client shows a size of 0 in the web console
  + web控制台 新增 云函数运行日志
  + web console Added cloud function running log
  + web控制台 优化 阿里云 文件存储上传体验
  + web console to optimize Alibaba Cloud file storage and upload experience
  + web控制台 优化 阿里云 云数据库搜索体验
  + web console to optimize Alibaba Cloud cloud database search experience
  + web控制台 修复 阿里云 删除索引报错的Bug
  + Web console to fix the bug of Alibaba Cloud delete index error
  + web控制台 修复 阿里云 云存储文件后缀为大写文件不显示的Bug
  + web console Fix the bug that Alibaba Cloud cloud storage file suffix is not displayed in uppercase
  + web控制台 修复 阿里云 云数据库字段为空或为 null 时显示错误的Bug
  + web console Fix the bug that the Alibaba Cloud cloud database field is empty or null to display an error
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 原生标题栏支持自定义返回按钮角标、标题图标、副标题等功能 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + Added native title bar to support custom back button corner label, title icon, subtitle and other functions [Documentation](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + 修复 Webview窗口的 WebviewEvent 事件回调函数参数没有 target 属性的Bug [详情](https://ask.dcloud.net.cn/question/90403)
  + Fix the bug that the WebviewEvent event callback function parameter of the Webview window has no target attribute [Details](https://ask.dcloud.net.cn/question/90403)
  + Android平台 优化 本地数据存储 plus.storage 性能，新增异步操作接口 [注意事项](https://ask.dcloud.net.cn/article/37071)
  + Android platform optimized local data storage plus.storage performance, added asynchronous operation interface [Notes](https://ask.dcloud.net.cn/article/37071)
  + Android平台 修复 uni-AD 激励视频云端打包勾选穿山甲，广告平台没有通过审核时可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/91251)
  + Android platform Fixed a bug that may cause the app to crash when the uni-AD rewarded video cloud package is checked for pangolins and the advertising platform fails to pass the review [Details](https://ask.dcloud.net.cn/question/91251)
  + Android平台 修复 提交华为应用市场检查可能误报 TrojanDropper.Agent.EIY 病毒的Bug
  + Android platform fix Submitted to HUAWEI AppGallery to check the bug that may falsely report TrojanDropper.Agent.EIY virus
  + Android平台 修复 页面中a标签设置非法链接后，点击可能出现应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/90425)
  + Android platform repair After setting an illegal link in the a tag on the page, click on the bug that may cause the application to crash [Details](https://ask.dcloud.net.cn/question/90425)
  + Android平台 修复 在部分华为手机上修改文件名之后，使用input标签type为file时获取文件名称可能为随机数字的Bug
  + Android platform Fix the bug that the file name may be a random number when the input tag type is file after modifying the file name on some Huawei phones
  + Android平台 修复 Webview窗口标题栏（titleNView）设置type为transparent时，其它原生控件（如VideoPlayer）可能会覆盖标题栏的Bug [详情](https://github.com/dcloudio/uni-app/issues/1298)
  + On Android platform, when the Webview window title bar (titleNView) is set to transparent, other native controls (such as VideoPlayer) may cover the bug of the title bar [Details](https://github.com/dcloudio/uni-app/issues /1298)
  + Android平台 修复 页面中input标签触发软键盘收回时可能影响 WebviewStyles 中的top属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/91003)
  + Android platform Fixed a bug that may affect the top attribute in WebviewStyles not taking effect when the input tag in the page triggers the retraction of the soft keyboard [Details](https://ask.dcloud.net.cn/question/91003)
  + Android平台 修复 获取UA值 plus.navigator.getUserAgent 返回为空的Bug [详情](https://ask.dcloud.net.cn/question/89762)
  + Android platform fix Get UA value plus.navigator.getUserAgent returns empty bug [Details](https://ask.dcloud.net.cn/question/89762)
  + Android平台 修复 视频播放控件 VideoPlayer 跳转到指定位置之后，弹幕仍然按照之前的进度播放的Bug
  + Android platform Fix the bug that the barrage still plays according to the previous progress after the video playback control VideoPlayer jumps to the specified position
  + Android平台 修复 视频播放控件 VideoPlayer 未指定 direction 时没有根据视频的宽高自动选择 direction 的Bug [详情](https://ask.dcloud.net.cn/question/89600)
  + Android platform Fix the bug that the video playback control VideoPlayer does not automatically select the direction according to the width and height of the video when the direction is not specified [Details](https://ask.dcloud.net.cn/question/89600)
  + Android平台 修复 地图控件 setCenter 后不触发 onstatuschanged 事件的Bug [详情](https://ask.dcloud.net.cn/question/48182)
  + Android platform Fix the bug that the onstatuschanged event is not triggered after the map control setCenter [Details](https://ask.dcloud.net.cn/question/48182)
  + Android平台 修复 HBuilderX2.6.5 引出的在Android4.4系统设备无法正常运行的Bug
  + Android platform Fix the bug caused by HBuilderX2.6.5 that cannot run normally on Android4.4 system devices
  + Android平台 修复 系统选择按钮框底部取消按钮UI显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/91265)
  + Android platform Fix the bug that the UI of the cancel button at the bottom of the system selection button box is not displayed normally [Details](https://ask.dcloud.net.cn/question/91265)
  + 【重要】iOS平台 新增 UIWebview独立模块，默认不再包含UIWebview相关代码 [详情](https://ask.dcloud.net.cn/article/36348#uiwebview)
  + [Important] The iOS platform has added a UIWebview independent module, which no longer contains UIWebview related codes by default [Details](https://ask.dcloud.net.cn/article/36348#uiwebview)
  + iOS平台 新增 系统选择按钮框 plus.nativeUI.actionSheet 在iPad设备支持 popover 设置弹出指示区域 [文档](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.ActionSheetStyles)
  + Added system selection button box on iOS platform plus.nativeUI.actionSheet Support popover on iPad device to set pop-up indication area [document](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.ActionSheetStyles )
  + iOS平台 新增 本地数据存储 plus.storage 异步操作接口 [文档](https://www.html5plus.org/doc/zh_cn/storage.html)
  + iOS platform added local data storage plus.storage asynchronous operation interface [document](https://www.html5plus.org/doc/zh_cn/storage.html)
  + iOS平台 更新 友盟统计SDK版本为6.1.0
  + iOS platform update Umeng Statistics SDK version is 6.1.0
  + iOS平台 更新 微信登录、分享、支付SDK版本为1.8.6.2
  + iOS platform update WeChat login, sharing, payment SDK version is 1.8.6.2
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 show-center-play-btn 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/90673)
  + iOS platform Fix the bug that the video playback control VideoPlayer setting the show-center-play-btn property does not take effect [Details](https://ask.dcloud.net.cn/question/90673)
  + iOS平台 修复 Webview窗口标题栏（titleNView）中 button 按钮设置 colorPressed 不生效的Bug [详情](https://ask.dcloud.net.cn/question/90616)
  + iOS platform Fix the bug that the button button in the title bar (titleNView) of the Webview window does not set colorPressed [Details](https://ask.dcloud.net.cn/question/90616)
  + iOS平台 修复 新浪微博分享 type 为 web 类型时 pictures 属性不生效的Bug
  + iOS platform Fix the bug that pictures attribute does not take effect when Sina Weibo sharing type is web
  + iOS平台 修复 系统选择按钮框 plus.nativeUI.actionSheet 显示后不关闭，通过HBuilderX真机运行更新资源可能引起崩溃的Bug
  + iOS platform Fix the bug that the system selection button box plus.nativeUI.actionSheet does not close after being displayed, and running the update resource through HBuilderX real machine may cause a crash
  + iOS平台 修复 云端打包启动页面中应用图标显示不清晰的Bug [详情](https://ask.dcloud.net.cn/question/91032)
  + iOS platform Fix the bug that the application icon in the cloud package startup page is not clearly displayed [Details](https://ask.dcloud.net.cn/question/91032)
* 【uni小程序SDK】
* [uni applet SDK]
  + 新增 获取当前显示小程序页面直达Url方法（用于启动直达二级页面）[iOS](https://ask.dcloud.net.cn/article/37068#getCurrentPageUrl)、[Android](https://ask.dcloud.net.cn/article/36984#getCurrentPageUrl)
  + Added the method of getting the direct Url of the currently displayed applet page (used to start the direct secondary page) [iOS](https://ask.dcloud.net.cn/article/37068#getCurrentPageUrl), [Android](https: //ask.dcloud.net.cn/article/36984#getCurrentPageUrl)
  + 新增 获取已部署的小程序资源版本信息方法 [iOS](https://ask.dcloud.net.cn/article/37068#getUniMPVersionInfo)、[Android](https://ask.dcloud.net.cn/article/36984#getAppVersionInfo)
  + Added methods for obtaining the version information of the deployed Mini Program resources [iOS](https://ask.dcloud.net.cn/article/37068#getUniMPVersionInfo), [Android](https://ask.dcloud.net. cn/article/36984#getAppVersionInfo)
  + 新增 胶囊按钮添加点击效果
  + Added Capsule button to add click effect
  + 开放 小程序内部调用 plus.runtime.install 热更新wgt资源 [详情](https://ask.dcloud.net.cn/article/35667)
  + Open Mini Program calls plus.runtime.install to hot update wgt resources [Details](https://ask.dcloud.net.cn/article/35667)
  + iOS平台 修复 原生工程勾选 'Hide status bar' 导致小程序页面导航栏被系统状态栏挡住的Bug
  + iOS platform Fix the bug that the navigation bar of the applet page was blocked by the system status bar when the native project checked 'Hide status bar'
  + iOS平台 修复 pickDate、pickTime 无法显示的Bug
  + iOS platform fix the bug that pickDate and pickTime cannot be displayed

#### 2.6.5.20200314
* 【uni-app】
  + 新增 页面属性配置节点 page-meta [详情](https://uniapp.dcloud.io/component/page-meta)
  + Added page attribute configuration node page-meta [details](https://uniapp.dcloud.io/component/page-meta)
  + App平台 【重要】 老版自定义组件编译模式将于4月1日下线 [详情](https://ask.dcloud.net.cn/article/36988)
  + App platform [Important] The old version of the custom component compilation mode will be offline on April 1 [Details](https://ask.dcloud.net.cn/article/36988)
  + App平台 【重要】 新增 vue页面引用的js，支持原生混淆（限v3） [详情](https://ask.dcloud.net.cn/article/36437)
  + App platform [Important] Added js referenced by vue page, supports native obfuscation (v3 only) [Details](https://ask.dcloud.net.cn/article/36437)
  + App平台、H5平台 优化 canvas 组件大小改变时不再丢失内容
  + App platform, H5 platform Optimized canvas component size changes no longer lose content
  + App平台 新增 原生导航栏支持自定义返回按钮、标题居左、导航栏背景图、背景渐变色等功能 [文档](https://uniapp.dcloud.io/collocation/pages?id=app-titlenview)
  + App platform adds native navigation bar to support custom back button, title left, navigation bar background image, background gradient color and other functions [document](https://uniapp.dcloud.io/collocation/pages?id=app-titlenview )
  + App平台 新增 video 组件全屏点击事件 fullscreenclick
  + App platform Added video component fullscreen click event fullscreenclick
  + App平台 新增 uni.shareWithSystem 调用系统分享组件发送分享消息 [详情](https://uniapp.dcloud.io/api/plugins/share?id=sharewithsystem)
  + App platform Added uni.shareWithSystem to call the system share component to send share messages [Details](https://uniapp.dcloud.io/api/plugins/share?id=sharewithsystem)
  + App平台 优化 真机运行时，强化错误提示，输出vue警告日志（限v3）[详情](https://ask.dcloud.net.cn/question/89193)
  + App platform optimization When the real machine is running, strengthen the error prompt and output the vue warning log (v3 only) [Details](https://ask.dcloud.net.cn/question/89193)
  + App平台 优化 vue 页面 input、textarea 组件支持 show-confirm-bar 属性（限v3）
  + App platform optimization vue page input, textarea components support show-confirm-bar attribute (v3 only)
  + App平台 优化 picker 组件支持 fields 属性
  + App platform optimized picker component to support fields attribute
  + App平台 优化 支持更多 crypto 加密库 [详情](https://ask.dcloud.net.cn/question/89334)
  + App platform optimization Support more crypto encryption libraries [Details](https://ask.dcloud.net.cn/question/89334)
  + App平台 修复 非 v3编译模式 webview 组件高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/89683)  
  + App platform Fix the bug of incorrect height of webview components in non-v3 compilation mode [Details](https://ask.dcloud.net.cn/question/89683)
  + App平台 修复 v3版本 vue 页面热刷新时 onLoad 参数被重复编码的Bug
  + App platform Fix the bug that the onLoad parameter is repeatedly coded when the v3 version vue page is hot refreshed
  + App平台 修复 v3版本 vue map 组件 scale 属性和 tap 事件无效问题 [详情](https://ask.dcloud.net.cn/question/89491)
  + App platform Fixed the issue that the scale attribute and tap event of the vue map component of v3 version were invalid [Details](https://ask.dcloud.net.cn/question/89491)
  + App平台 修复 v3版本 uni.getStorage 部分情况下获取数据格式错误的Bug [详情](https://ask.dcloud.net.cn/question/87866)
  + App platform Fix the bug of incorrect data format in some cases of uni.getStorage in v3 version [Details](https://ask.dcloud.net.cn/question/87866)
  + App平台 修复 v3版本 $nextTick 无法返回 Promise 的Bug
  + App Platform Fix the bug that $nextTick cannot return Promise in v3 version
  + App平台 修复 v3版本 点击 tabBar 会重复触发 onShow 的Bug [详情](https://ask.dcloud.net.cn/question/87497)
  + App platform to fix the bug of v3 version, clicking tabBar will trigger onShow repeatedly [Details](https://ask.dcloud.net.cn/question/87497)
  + App平台 修复 v3版本 input、textarea 组件 cursor-spacing 属性为字符串时报错的Bug
  + App platform Fixed the bug of error when the cursor-spacing property of the input and textarea components of v3 version is a string
  + App平台 修复 v3版本 picker-view 组件内的 navigator 组件无法跳转的Bug [详情](https://ask.dcloud.net.cn/question/87794)
  + App platform Fix the bug that the navigator component in the picker-view component of the v3 version cannot be jumped [Details](https://ask.dcloud.net.cn/question/87794)
  + App平台 修复 v3版本 input 组件使用 v-model 后 input 事件会重复触发的Bug
  + App platform Fix the bug that the input event will be repeatedly triggered after the v3 version input component uses v-model
  + App平台 修复 v3版本 多个 tabBar 页面同时使用 subNvue 时，点击蒙层关闭不正常的Bug [详情](https://ask.dcloud.net.cn/question/89050)
  + App platform Fix the bug of v3 version, when multiple tabBar pages use subNvue at the same time, click the mask to close the abnormal bug [Details](https://ask.dcloud.net.cn/question/89050)
  + App平台 修复 v3版本 部分情况组件渲染不正确的Bug [#1334](https://github.com/dcloudio/uni-app/issues/1334)
  + App platform Fix the bug of incorrect rendering of components in v3 version [#1334](https://github.com/dcloudio/uni-app/issues/1334)
  + App平台 修复 v3版本 部分情况文本节点渲染不正确的Bug [详情](https://ask.dcloud.net.cn/question/89557)
  + App platform Fix the bug of incorrect rendering of text nodes in v3 version [Details](https://ask.dcloud.net.cn/question/89557)
  + App平台 修复 v3版本 vue map 组件动态修改 v-if 无效隐藏的Bug [详情](https://ask.dcloud.net.cn/question/89986)
  + App platform Fix v3 version vue map component dynamic modification v-if invalid hidden bug [Details](https://ask.dcloud.net.cn/question/89986)
  + App平台 修复 v3版本 nvue map API translateMarker 无效的Bug
  + App platform fix the bug that nvue map API translateMarker is invalid in v3 version
  + App平台 修复 v3版本 cover-view 组件部分样式渲染不正确的Bug [详情](https://ask.dcloud.net.cn/question/89609)
  + App platform Fixed the bug that some styles of the cover-view component of the v3 version were not rendered correctly [Details](https://ask.dcloud.net.cn/question/89609)
  + App平台 修复 v3版本 使用 renderjs 后，低版本系统运行异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/1373)
  + App platform Fix the bug that the lower version system runs abnormally after using renderjs in v3 version [Details](https://github.com/dcloudio/uni-app/issues/1373)
  + App平台 修复 v3版本 真机运行 修改 pages.json 触发多次同步手机端文件的Bug
  + App platform Fix the bug of v3 version running on real machine, modify pages.json to trigger multiple synchronization of mobile files
  + App平台 修复 非v3模式 app.vue 中使用 css 变量不生效的Bug [详情](https://ask.dcloud.net.cn/question/89367)
  + App platform Fix the bug that the use of css variables in non-v3 mode app.vue does not take effect [Details](https://ask.dcloud.net.cn/question/89367)
  + App平台 修复 uni.uploadFile 的 formData 属性中不能包含数值类型的Bug [详情](https://ask.dcloud.net.cn/question/87951)
  + App platform Fixed the bug that the formData attribute of uni.uploadFile cannot contain numeric types [Details](https://ask.dcloud.net.cn/question/87951)
  + App平台 修复 nvue页面 movable-view 组件 inertia 属性不生效的Bug
  + App platform Fix the bug that the inertia property of movable-view component in nvue page does not take effect
  + App平台 修复 uni.request 在 content-type 为 application/json 时自动对 data 序列化 [详情](https://ask.dcloud.net.cn/question/89474)
  + App platform Fix uni.request automatically serialize data when content-type is application/json [Details](https://ask.dcloud.net.cn/question/89474)
  + App平台 修复 某些情况下事件接收参数不正确的Bug [详情](https://ask.dcloud.net.cn/question/89818)
  + App platform to fix the bug of incorrect event receiving parameters in some cases [Details](https://ask.dcloud.net.cn/question/89818)
  + App-Android平台 修复 nvue map 组件不设置 markers 属性导致tap事件不触发的Bug
  + App-Android platform Fix the bug that the nvue map component does not set the markers attribute, which causes the tap event not to trigger
  + App-Android平台 修复 云打包后 uni.getImageInfo() 获取本地图片信息可能会触发失败回调的Bug
  + App-Android platform Fix the bug that uni.getImageInfo() to get local image information may trigger a failure callback after cloud packaging
  + App-Android平台 修复 v3版本 wgt热更新后无法打开新增页面的Bug [详情](https://ask.dcloud.net.cn/question/88829)
  + App-Android platform Fix the bug that the new page cannot be opened after the v3 version wgt hot update [Details](https://ask.dcloud.net.cn/question/88829)
  + App-Android平台 修复 nvue video 组件在页面中存在多个且包含 cover-view 全屏播放时闪退的Bug [详情](https://ask.dcloud.net.cn/question/88718)
  + App-Android platform Fix the bug that the nvue video component exists in multiple pages and includes cover-view full screen playback. [Details](https://ask.dcloud.net.cn/question/88718)
  + App-iOS平台 修复 v3版本 wgt热更新后 plus.runtime.restart 卡在启动页的Bug [详情](https://ask.dcloud.net.cn/question/89966)
  + App-iOS platform Fix the bug that plus.runtime.restart is stuck on the startup page after the v3 hot update of wgt [Details](https://ask.dcloud.net.cn/question/89966)
  + App-iOS平台 修复 v3版本 video 组件部分情况无法显示的bug
  + App-iOS platform Fix the bug that the video component of v3 version cannot be displayed in some cases
  + App-iOS平台 修复 nvue web-view 组件加载本地文件显示空白的Bug [详情](https://ask.dcloud.net.cn/question/90114)
  + App-iOS platform Fix the bug that the nvue web-view component loads local files and displays a blank bug [Details](https://ask.dcloud.net.cn/question/90114)
  + App-iOS平台 修复 nvue image 组件使用相对路径加载图片可能会不显示的Bug [详情](https://ask.dcloud.net.cn/question/89117)
  + App-iOS platform Fix the bug that the nvue image component may not be displayed when loading images using relative paths [Details](https://ask.dcloud.net.cn/question/89117)
  + App-iOS平台 修复 video 组件设置 muted 为0静音后再设置为1时无法重新开启声音的bug [详情](https://ask.dcloud.net.cn/question/89106)
  + App-iOS platform Fix the bug that the sound cannot be restarted when the video component is set to muted to 0 and then set to 1 [Details](https://ask.dcloud.net.cn/question/89106)
  + H5平台 优化 内置组件响应鼠标事件，可在PC浏览器正常拖动和滚动
  + H5 platform optimization Built-in components respond to mouse events, which can be dragged and scrolled normally in PC browsers
  + H5平台 优化 “网络不给力”现象，调整页面加载超时时间和提示文案
  + H5 platform Optimized the phenomenon of "unpowerful network", adjusted the page load timeout time and prompt copy
  + H5平台 优化 修改代码后提升页面热更新速度
  + H5 platform optimization After modifying the code to improve the page hot update speed
  + H5平台 修复 picker 组件设置 fields 属性后返回值格式错误的Bug
  + H5 platform Fix the bug that the return value format is incorrect after the picker component sets the fields attribute
  + H5平台 修复 picker 组件设置 value 部分情况无法触发视图更新的Bug [#1162](https://github.com/dcloudio/uni-app/issues/1162)
  + H5 platform Fix the bug that the value setting of the picker component cannot trigger the view update [#1162](https://github.com/dcloudio/uni-app/issues/1162)
  + H5平台 修复 uni.createSelectorQuery 返回的节点信息中 bottom 值错误的Bug [详情](https://ask.dcloud.net.cn/question/85968)
  + H5 platform Fix the bug of wrong bottom value in the node information returned by uni.createSelectorQuery [Details](https://ask.dcloud.net.cn/question/85968)
  + H5平台 修复 map 组件无法同时加载多个实例的Bug [详情](https://ask.dcloud.net.cn/question/88735)
  + H5 platform Fix the bug that the map component cannot load multiple instances at the same time [Details](https://ask.dcloud.net.cn/question/88735)
  + H5平台 修复 movable-view 组件限制移动方向后，拖动操作会出现中断的Bug
  + H5 platform Fix the bug that the drag operation will be interrupted after the movable-view component restricts the movement direction
  + H5平台 修复 tranparentTitle 失效的Bug [详情](https://ask.dcloud.net.cn/question/89354)
  + H5 platform to fix the bug of invalid tranparentTitle [Details](https://ask.dcloud.net.cn/question/89354)
  + H5平台 修复 部分浏览器中 uni.getSystemInfo 获取 windowTop、windowHeight 值错误的Bug [#1348](https://github.com/dcloudio/uni-app/issues/1348)
  + H5 platform Fix the bug that uni.getSystemInfo gets the wrong value of windowTop and windowHeight in some browsers [#1348](https://github.com/dcloudio/uni-app/issues/1348)
  + H5平台 修复 在页面 onReady 生命周期内绘制canvas 绘制内容会一闪消失的Bug [详情](https://ask.dcloud.net.cn/question/81675)
  + H5 platform Fix the bug that the drawing content of canvas will disappear in a flash during the onReady life cycle of the page [Details](https://ask.dcloud.net.cn/question/81675)
  + 小程序平台 修复 easycom 无法正常使用驼峰式命名组件的Bug [详情](https://ask.dcloud.net.cn/question/87925)
  + Mini Program Platform Fix the bug that easycom cannot use camel case named components normally [Details](https://ask.dcloud.net.cn/question/87925)
  + 小程序平台 修复 App.vue 包含 template 节点时，导致 app.json 生成错误的Bug [#1351](https://github.com/dcloudio/uni-app/issues/1351)
  + Mini Program Platform Fix the bug that caused app.json to generate error when App.vue contains template node [#1351](https://github.com/dcloudio/uni-app/issues/1351)
  + 微信小程序平台 修复 控制台没有输出生命周期内异常的Bug [详情](https://ask.dcloud.net.cn/question/89440)
  + Wechat applet platform Fixed the bug that the console did not output abnormal life cycle [Details](https://ask.dcloud.net.cn/question/89440)
  + 钉钉小程序平台 调整 uni.request 在 content-type 为 application/json 时自动序列化 data
  + DingTalk applet platform adjust uni.request to automatically serialize data when content-type is application/json
  + uni-ui 修复 NoticeBar 通告栏组件关闭按钮不显示的Bug
  + uni-ui fix the bug that the close button of the NoticeBar component is not displayed
  + uni-ui 修复 IndexedList 索引列表组件非全屏显示时，右侧索引位置与点击位置偏移的Bug
  + uni-ui fix the bug that the index position on the right side is offset from the click position when the IndexedList index list component is not displayed in full screen
* 【uniCloud】
  + 新增 云函数 批量上传功能
  + Added cloud function batch upload function
  + 新增 云函数 运行调试传参功能（右键【配置运行测试参数】) [详情](https://uniapp.dcloud.io/uniCloud/quickstart?id=%e8%bf%90%e8%a1%8c%e5%92%8c%e8%b0%83%e8%af%95%e4%ba%91%e5%87%bd%e6%95%b0)
  + Added cloud function running and debugging parameter transfer function (right click [Configure Run Test Parameters]) [Details](https://uniapp.dcloud.io/uniCloud/quickstart?id=%e8%bf%90%e8%a1% 8c%e5%92%8c%e8%b0%83%e8%af%95%e4%ba%91%e5%87%bd%e6%95%b0)
  + 新增 云数据库 通过db_init.json初始化数据的功能 [详情](https://uniapp.dcloud.io/uniCloud/quickstart?id=%e4%bd%bf%e7%94%a8db_initjson%e5%88%9d%e5%a7%8b%e5%8c%96%e9%a1%b9%e7%9b%ae%e6%95%b0%e6%8d%ae%e5%ba%93)
  + Added the function of initializing data through db_init.json for cloud database [Details](https://uniapp.dcloud.io/uniCloud/quickstart?id=%e4%bd%bf%e7%94%a8db_initjson%e5%88% 9d%e5%a7%8b%e5%8c%96%e9%a1%b9%e7%9b%ae%e6%95%b0%e6%8d%ae%e5%ba%93)
  + 新增 云数据库 支持在web控制台配置索引
  + Added cloud database support for index configuration in web console
  + 优化 web控制台体验 [详情](https://uniapp.dcloud.io/uniCloud/release)
  + Optimized web console experience [Details](https://uniapp.dcloud.io/uniCloud/release)
* 【uni-AD】 
  + 优化 激励视频广告内部加载逻辑，完善错误信息 [详情](https://ask.dcloud.net.cn/article/36718#rewarderror)
  + Optimized the internal loading logic of rewarded video ads and improved the error message [Details](https://ask.dcloud.net.cn/article/36718#rewarderror)
  + 优化 web控制台。原dev.dcloud.net.cn中的广告相关页面，统一迁移到新的[https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/)
  + Optimized web console. The advertisement-related pages in the original dev.dcloud.net.cn have been uniformly migrated to the new [https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/)
* 【App插件(含5+App和uni-app的App端)】
* [App Plug-in (App side including 5+App and uni-app)]
  + 新增 原生标题栏支持自定义返回按钮、标题居左、标题栏背景图、背景渐变色等功能 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + Added native title bar to support custom back button, title left, title bar background image, background gradient and other functions [Documentation](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview .WebviewTitleNViewStyles)
  + 新增 视频播放控件 VideoPlayer 支持全屏播放时点击事件 fullscreenclick [文档](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerEvents)
  + Added video playback controls VideoPlayer supports click event fullscreenclick [documentation](https://www.html5plus.org/doc/en_us/video.html#plus.video.VideoPlayerEvents)
  + Android平台 新增 原生隐私与政策提示框配置 [详情](https://ask.dcloud.net.cn/article/36937)
  + Android platform added native privacy and policy prompt box configuration [Details](https://ask.dcloud.net.cn/article/36937)
  + Android平台 优化 云端打包默认需要的系统权限，支持配置是否自动添加第三方SDK需要的权限 [详情](https://ask.dcloud.net.cn/article/36982)
  + Android platform optimization System permissions required by default for cloud packaging, support to configure whether to automatically add permissions required by third-party SDKs [Details](https://ask.dcloud.net.cn/article/36982)
  + Android平台 优化 Webview窗口加载可缩放页面时默认隐藏系统缩放控制条 [详情](https://ask.dcloud.net.cn/question/89088)
  + Android platform Optimize the system zoom control bar by default when the Webview window loads a zoomable page [Details](https://ask.dcloud.net.cn/question/89088)
  + Android平台 修复 获取系统语言信息 plus.os.language 字符中没有包含地区信息的Bug
  + Android platform Fix the bug that get system language information plus.os.language character does not contain regional information
  + iOS平台 新增 适配iOS13+引入的暗黑模式 DarkMode [文档](https://ask.dcloud.net.cn/article/36995)
  + iOS platform Added DarkMode adapted to iOS13+ [document](https://ask.dcloud.net.cn/article/36995)
  + iOS平台 新增 应用使用Push（消息推送）模块后启动时不弹出“发送通知”系统授权框的配置方法 [详情](https://ask.dcloud.net.cn/article/36955#push)
  + iOS platform Added the configuration method of not popping up the "Send Notification" system authorization box when the application uses the Push (message push) module [Details](https://ask.dcloud.net.cn/article/36955#push)
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 objectFit 属性不生效的bug [详情](https://ask.dcloud.net.cn/question/88221)
  + iOS platform Fix the bug that the objectFit property of VideoPlayer does not take effect [Details](https://ask.dcloud.net.cn/question/88221)
  + iOS平台 修复 使用WKWebview内核 plus.orientation.getCurrentOrientation 无法获取设备方向信息的Bug
  + iOS platform Fix the bug that the device orientation information cannot be obtained using the WKWebview kernel plus.orientation.getCurrentOrientation
* 【uni小程序SDK】
* [uni applet SDK]
  + 新增 启动小程序支持传入参数及直达指定页面 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37010)
  + Added Startup applet to support incoming parameters and direct access to the specified page [Details](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37010)
  + 新增 关闭当前小程序方法及小程序关闭回调方法 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37014)
  + Added the method of closing the current applet and the callback method of closing the applet [Details](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37014)
  + 新增 获取当前运行的小程序appid方法
  + Added the method to get the appid of the currently running applet
  + Android平台 修复启动小程序后调用扫码可能引起的闪退问题 [详情](https://ask.dcloud.net.cn/question/89827)
  + Android platform Fixed the crash problem that may be caused by scanning the code after launching the applet [Details](https://ask.dcloud.net.cn/question/89827)

#### 2.6.1.20200226
* 【uni-app】
  + App-iOS平台 修复 非 v3 编译模式真机运行时提示框架版本不一致的Bug
  + App-iOS platform Fix the bug that the framework version is inconsistent when running on a real machine in non-v3 compilation mode

#### 2.6.0.20200223
* 【uni-app】
  + 【重要】uniCloud公测。serverless模式，全端云开发，js编写后端代码 [详情](https://uniapp.dcloud.io/uniCloud/README)
  + 【Important】uniCloud public beta. serverless mode, full-end cloud development, js to write back-end code [details](https://uniapp.dcloud.io/uniCloud/README)
  + 【重要】uni小程序sdk公测。原生App内嵌本sdk，快速实现小程序能力，或部分栏目实现动态化 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/36941)
  + [Important] uni applet sdk public beta. This SDK is embedded in the native App, which can quickly realize the ability of small programs, or realize the dynamic of some columns [Details](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/ article/36941)
  + 【重要】新增 uni-AD 广告联盟。整合App、小程序等多端广告，整合腾讯广点通、头条穿山甲、360广告联盟等众多广告源，提供最佳变现平台
  + [Important] Added uni-AD ad network. Integrate multi-end advertisements such as apps and small programs, integrate Tencent Guangdiantong, Toutiao Pangolin, 360 Advertising Alliance and many other advertising sources to provide the best monetization platform
  + 【重要】App平台 新增 ad 组件（可用于banner或信息流）、激励视频广告API [详情](https://uniad.dcloud.net.cn/)
  + [Important] App platform adds ad components (can be used for banner or information flow), rewarded video advertising API [Details](https://uniad.dcloud.net.cn/)
  + 【重要】新增 easycom 组件模式，简化组件使用。无需在页面里引入和注册组件，按实际使用打包 [详情](https://uniapp.dcloud.io/collocation/pages?id=easycom)
  + [Important] Added easycom component mode to simplify the use of components. No need to introduce and register components in the page, package according to actual use [Details](https://uniapp.dcloud.io/collocation/pages?id=easycom)
  + 【重要】App平台、H5平台 新增 renderjs，替代 wxs ，减少逻辑层和视图层的通讯折损 [详情](https://uniapp.dcloud.io/frame?id=renderjs)
  + [Important] App platform, H5 platform add renderjs, replace wxs, reduce the communication loss of logic layer and view layer [Details](https://uniapp.dcloud.io/frame?id=renderjs)
  + 【重要】App平台 优化 v3版本 真机运行时修改 vue 文件，手机端重启直达修改页面，无需手动配置 condition
  + [Important] Optimize the v3 version of the App platform, modify the vue file when the real machine is running, and restart the mobile terminal to go to the modification page, no need to manually configure the condition
  + 优化 非 scoped 样式支持 >>>、/deep/、::v-deep 语法 [详情](https://github.com/dcloudio/uni-app/issues/1143)
  + Optimized non-scoped style support >>>, /deep/, ::v-deep syntax [details](https://github.com/dcloudio/uni-app/issues/1143)
  + App平台、H5平台、微信小程序 新增 uni.getSystemInfo 返回数据支持属性 safeAreaInsets
  + App platform, H5 platform, WeChat applet added uni.getSystemInfo return data support attribute safeAreaInsets
  + App平台、H5平台、字节跳动小程序平台 新增 swiper 组件支持 disable-touch 属性
  + App platform, H5 platform, ByteDance applet platform Added swiper component to support disable-touch attribute
  + APP平台、H5平台 调整 默认请求超时时间（request、connectSocket、uploadFile、downloadFile）对齐微信小程序由6秒改为60秒
  + APP platform, H5 platform Adjust the default request timeout time (request, connectSocket, uploadFile, downloadFile) to align WeChat applet from 6 seconds to 60 seconds
  + App平台 优化 支持 CSS 变量 --window-top
  + App platform optimization Support CSS variables --window-top
  + App平台 优化 调试控制台日志输出
  + App platform optimized debug console log output
  + App平台 优化 v3版本 uni.request API 失败回调中返回详细信息
  + App platform optimization v3 version uni.request API failure callback returns detailed information
  + App平台 调整 uni.getSystemInfo 获取的 windowHeight 和 H5平台一致，不再包含 windowTop、windowBottom
  + App platform Adjust the windowHeight obtained by uni.getSystemInfo to be consistent with the H5 platform, no longer including windowTop and windowBottom
  + APP平台 修复 nvue 页面 picker 组件时间、日期类型使用默认值报错的Bug [详情](https://ask.dcloud.net.cn/question/87203)
  + APP platform Fix the bug that the time and date type of the picker component of the nvue page use the default value to report an error [Details](https://ask.dcloud.net.cn/question/87203)
  + APP平台 修复 nvue 页面 appear、disappear 事件不返回 direction 的Bug
  + APP platform to fix the bug that nvue page appear and disappear events do not return direction
  + App平台 修复 自定义组件模式 vue 文件不包含 script 节点时运行报错的Bug [详情](https://ask.dcloud.net.cn/question/87323)
  + App platform Fix the bug of running error when the vue file of the custom component mode does not contain the script node [Details](https://ask.dcloud.net.cn/question/87323)
  + App平台 修复 v3版本 原生组件 fixed 定位无效的Bug [详情](https://ask.dcloud.net.cn/question/87475)
  + App platform Fix v3 native component fixed bug with invalid positioning [Details](https://ask.dcloud.net.cn/question/87475)
  + App平台 修复 v3版本 uni.createSelectorQuery 无法查询到 id 的Bug [详情](https://ask.dcloud.net.cn/question/87644)
  + App platform Fixed the bug that uni.createSelectorQuery in v3 version could not query the id [Details](https://ask.dcloud.net.cn/question/87644)
  + App平台 修复 v3版本 非 tab 首页（nvue）显示 tabBar 的Bug [详情](https://ask.dcloud.net.cn/question/87536)
  + App platform Fix the bug of displaying tabBar in non-tab homepage (nvue) in v3 version [Details](https://ask.dcloud.net.cn/question/87536)
  + App平台 修复 v3版本 div、span 等 H5 组件样式不生效的Bug
  + App platform Fix the bug that the styles of H5 components such as div and span in v3 version do not take effect
  + App平台 修复 v3版本 videoContext.requestFullScreen 不生效的Bug [详情](https://ask.dcloud.net.cn/question/87202)
  + App platform Fix the bug that videoContext.requestFullScreen does not take effect in v3 version [Details](https://ask.dcloud.net.cn/question/87202)
  + App平台 修复 v3版本 组件 dataset 属性可能导致运行报错的Bug
  + App platform Fix the bug that the dataset attribute of the v3 version component may cause an error to run
  + App平台 修复 v3版本 vue 页面 map 组件 部分API无效及属性无法动态更新的Bug [详情](https://ask.dcloud.net.cn/question/86872)
  + App platform Fix the bug that some APIs of vue page map component in v3 version are invalid and properties cannot be dynamically updated [Details](https://ask.dcloud.net.cn/question/86872)
  + App平台 修复 v3版本 uni.request 在 content-type 为 urlencoded 时传入非 Object 的 data 时参数处理不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/1218)
  + App platform fixes the bug of incorrect parameter processing when the content-type of uni.request is urlencoded when the content-type is urlencoded. [Details](https://github.com/dcloudio/uni-app/issues/1218 )
  + App平台 修复 v3版本 alwaysShowBeforeRender 为 false 时无法关闭启动界面的Bug [详情](https://ask.dcloud.net.cn/question/87038)
  + App platform Fix the bug that the startup interface cannot be closed when alwaysShowBeforeRender is false in v3 version [Details](https://ask.dcloud.net.cn/question/87038)
  + App平台 修复 v3版本 InnerAudioContext 对象的 seek、onTimeUpdate 方法无效的Bug [详情](https://ask.dcloud.net.cn/question/86891)
  + App platform Fix the bug that the seek and onTimeUpdate methods of the InnerAudioContext object in v3 version are invalid [Details](https://ask.dcloud.net.cn/question/86891)
  + App平台 修复 v3版本 行内样式设置背景图无效的Bug [详情](https://ask.dcloud.net.cn/question/86898)
  + App platform Fix the bug that the inline style setting background image is invalid in v3 version [Details](https://ask.dcloud.net.cn/question/86898)
  + App平台 修复 v3版本 app-plus 下配置 pullToRefresh 无效的Bug
  + App platform Fix the bug that the configuration of pullToRefresh is invalid under the v3 version app-plus
  + App平台 修复 v3版本 subNvue mask 无法遮盖 tabBar 的Bug
  + App platform to fix the bug that the subNvue mask in v3 version cannot cover the tabBar
  + App平台 修复 v3版本 多个循环时数据可能混乱的Bug [详情](https://ask.dcloud.net.cn/question/89091)
  + App platform Fix the bug that the data may be confused in the v3 version when there are multiple loops [Details](https://ask.dcloud.net.cn/question/89091)
  + App平台 修复 非v3编译模式 自定义组件失效的Bug [#1271](https://github.com/dcloudio/uni-app/issues/1271)
  + App platform Fix the bug that the custom component fails in non-v3 compilation mode [#1271](https://github.com/dcloudio/uni-app/issues/1271)
  + App-iOS平台 修复 v3版本 部分情况下 rpx 计算错误的Bug
  + App-iOS platform Fix the bug of rpx calculation error in some cases in v3 version
  + App-iOS平台 修复 video 组件未播放时调用 seek 可能导致界面不正常的bug [详情](https://ask.dcloud.net.cn/question/80013)
  + App-iOS platform Fix the bug that calling seek when the video component is not playing may cause the interface to be abnormal [Details](https://ask.dcloud.net.cn/question/80013)
  + App-iOS平台 修复 页面中使用字体图标时可能无法正常显示的Bug
  + App-iOS platform Fix the bug that the font icon may not be displayed normally when using the font icon in the page
  + App-iOS平台 修复 tabBar 自定义高度时红点和角标显示位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/87344)
  + App-iOS platform Fix the bug that the red dot and corner marker are displayed incorrectly when the height of the tabBar is customized [Details](https://ask.dcloud.net.cn/question/87344)
  + App-iOS平台 修复 nvue input 组件 placeholder-style 和 placeholder-class 设置 fontSize 不生效的Bug
  + App-iOS platform Fix the bug that the placeholder-style and placeholder-class setting fontSize of nvue input components do not take effect
  + App-iOS平台 修复 nvue list 组件设置 bounce 为 false 可能导致页面无法滚动的Bug
  + App-iOS platform Fix the bug that the nvue list component setting bounce to false may cause the page to fail to scroll
  + App-iOS平台 修复 nvue map 组件使用 controls 控件提交云端打包后可能会引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/86521)
  + App-iOS platform Fix the bug that the nvue map component may crash after submitting cloud package using controls control [Details](https://ask.dcloud.net.cn/question/86521)
  + App-Android平台 修复 tabBar 设置 midButton 可能显示不全的Bug [详情](https://ask.dcloud.net.cn/question/87744)
  + App-Android platform Fix the bug that the midButton setting of tabBar may be incomplete [Details](https://ask.dcloud.net.cn/question/87744)
  + App-Android平台 修复 nvue map 组件 markers 更新频繁可能出现失败的Bug [详情](https://ask.dcloud.net.cn/question/87625)
  + App-Android platform Fix the bug that the nvue map component markers update frequently may fail [Details](https://ask.dcloud.net.cn/question/87625)
  + App-Android平台 修复 nvue textarea 组件设置 maxlength 为 -1 时无法输入文字的Bug [详情](https://ask.dcloud.net.cn/question/87503)
  + App-Android platform Fix the bug that the nvue textarea component cannot enter text when the maxlength is set to -1 [Details](https://ask.dcloud.net.cn/question/87503)
  + App-Android平台 修复 nvue 页面中组件设置 hover-class 后，页面关闭可能出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/87016)
  + App-Android platform Fixed a bug that may crash when the page is closed after the component in the nvue page is set to hover-class [Details](https://ask.dcloud.net.cn/question/87016)
  + App-Android平台 修复 nvue video 组件下使用 cover-view 后，视频全屏后可能出现排版混乱的Bug [详情](https://ask.dcloud.net.cn/question/86879)
  + App-Android platform Fix the bug that the layout may be chaotic after using cover-view under the nvue video component [Details](https://ask.dcloud.net.cn/question/86879)
  + App-Android平台 修复 uni.request 在 responseType 为 arraybuffer 时，返回数据可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/86405)
  + App-Android platform Fix the bug that uni.request may return inaccurate data when the responseType is arraybuffer [Details](https://ask.dcloud.net.cn/question/86405)
  + App-Android平台 修复 websocket 发送内容中包含特殊字符可能导致发送失败的Bug [详情](https://ask.dcloud.net.cn/question/86670)
  + App-Android platform Fix the bug that the content sent by websocket contains special characters that may cause the sending to fail [Details](https://ask.dcloud.net.cn/question/86670)
  + H5平台 修复 input 组件设置 placeholder 的 top 样式显示错位的Bug [#1222](https://github.com/dcloudio/uni-app/issues/1222)
  + H5 platform Fix the bug that the top style of the input component set placeholder is misplaced [#1222](https://github.com/dcloudio/uni-app/issues/1222)
  + H5平台 修复 启用摇树优化后 uni.previewImage 失效的Bug [#1168](https://github.com/dcloudio/uni-app/issues/1168)
  + H5 platform Fix the bug that uni.previewImage fails after tree shaking optimization is enabled [#1168](https://github.com/dcloudio/uni-app/issues/1168)
  + H5平台 修复 启用摇树优化后 animation 属性失效的Bug [#1231](https://github.com/dcloudio/uni-app/issues/1231)
  + H5 platform Fix the bug that the animation property is invalid after tree shaking optimization is enabled [#1231](https://github.com/dcloudio/uni-app/issues/1231)
  + H5平台 修复 启用摇树优化后 页面样式错乱的Bug [详情](https://ask.dcloud.net.cn/question/87495)
  + H5 platform Fix the bug that the page style is disordered after tree shaking optimization is enabled [Details](https://ask.dcloud.net.cn/question/87495)
  + H5平台 修复 video 组件销毁报错的Bug [详情](https://ask.dcloud.net.cn/question/86959)
  + H5 platform Fix the bug of video component destruction error [Details](https://ask.dcloud.net.cn/question/86959)
  + H5平台 修复 uni.chooseVideo 在微信内置浏览器无法触发回调的Bug [详情](https://ask.dcloud.net.cn/question/86968)
  + H5 platform Fix the bug that uni.chooseVideo cannot trigger callback in WeChat built-in browser [Details](https://ask.dcloud.net.cn/question/86968)
  + H5平台 修复 audio 组件无法显示的Bug [详情](https://ask.dcloud.net.cn/question/87045)
  + H5 platform Fix the bug that the audio component cannot be displayed [Details](https://ask.dcloud.net.cn/question/87045)
  + H5平台 修复 部分浏览器上 Object.assign 报错的Bug [#1116](https://github.com/dcloudio/uni-app/issues/1116)
  + H5 platform Fix the bug of Object.assign error on some browsers [#1116](https://github.com/dcloudio/uni-app/issues/1116)
  + H5平台 修复 部分浏览器上 uni.canvasToTempFilePath 报错的Bug [详情](https://ask.dcloud.net.cn/question/87032)
  + H5 platform Fix the bug of uni.canvasToTempFilePath error on some browsers [Details](https://ask.dcloud.net.cn/question/87032)
  + hello uni-app 新增 ad 组件示例 和 激励视频广告 API 示例
  + hello uni-app added ad component example and rewarded video ad API example
  + Hello uni-app 优化 canvas 组件示例，使用 renderjs 实现 App端高性能动画
  + Hello uni-app optimizes the canvas component example, using renderjs to achieve high-performance animation on the App side
  + uni-ui 新增 uni-combox 可写可选组合框组件
  + uni-ui added uni-combox writable optional combo box component
  + uni-ui 修复 v3版本 app-vue 页面中 swipe-action 组件无法滑动的Bug
  + uni-ui fix the bug that the swipe-action component cannot be swiped in the v3 app-vue page
  + 新增 uni-ui 项目模板，该项目通过 easycom 引入所有 uni-ui 组件，可方便的开发项目
  + Added uni-ui project template, this project introduces all uni-ui components through easycom, which can be easily developed
* 【5+App插件】
* 【5+App Plugins】
  + 【重要】新增 plus.ad 广告模块，聚合穿山甲、广点通、360联盟等uni-AD联盟服务，支持信息流、banner、激励视频等应用内自定义广告 [文档](https://www.html5plus.org/doc/zh_cn/ad.html)
  + [Important] Added a plus.ad advertising module, which aggregates uni-AD alliance services such as Pangolin, Guangdiantong, and 360 Alliance, and supports in-app custom advertisements such as information flow, banner, and rewarded video [document](https:// www.html5plus.org/doc/zh_cn/ad.html)
  + 新增 Webview窗口样式支持设置禁止调用plus属性 disablePlus，解决加载外部页面时可能调用plus对应用造成危害的隐患 [详情](https://ask.dcloud.net.cn/question/85390)
  + Added Webview window style support setting to prohibit calling plus attribute disablePlus, to solve the hidden danger that calling plus may cause harm to the application when loading external pages [Details](https://ask.dcloud.net.cn/question/85390)
  + 新增 数据库执行SQL语句 plus.sqlite.executeSql 支持一次传入多条语句，解决Android平台一条SQL语句中不支持以分号分割多条命令的需求 [详情](https://ask.dcloud.net.cn/article/36810)
  + Added database execution SQL statement plus.sqlite.executeSql to support multiple statements at a time, to solve the requirement that a single SQL statement on the Android platform does not support multiple commands separated by semicolons [Details](https://ask.dcloud. net.cn/article/36810)
  + 新增 推送 支持异步获取客户端推送标识接口 plus.push.getClientInfoAsync，解决同步接口可能返回空数据的问题 [文档](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.getClientInfoAsync)
  + Added push support for asynchronously obtaining the client push ID interface plus.push.getClientInfoAsync, to solve the problem that the synchronous interface may return empty data [document](https://www.html5plus.org/doc/zh_cn/push.html#plus .push.getClientInfoAsync)
  + 【重要】Android平台 新增 腾讯X5内核。可解决rom自定义主题字体适配、低端机浏览器兼容性等问题 [详情](https://ask.dcloud.net.cn/article/36806)
  + [Important] Added Tencent X5 kernel for Android platform. It can solve the problems of rom custom theme font adaptation, low-end computer browser compatibility, etc. [Details](https://ask.dcloud.net.cn/article/36806)
  + Android平台 修复 Webview窗口创建并显示后立即关闭可能出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/86918)
  + Android platform Fixed a bug that may crash immediately after the Webview window is created and displayed [Details](https://ask.dcloud.net.cn/question/86918)
  + Android平台 修复 在定时器回调函数中调用 plus.screen.lockOrientation 可能会引起应用闪退的Bug
  + Android platform Fix the bug that calling plus.screen.lockOrientation in the timer callback function may cause the application to crash
  + Android平台 修复 在部分手机上获取OAID可能触发错误回调，错误信息提示不支持的Bug [详情](https://ask.dcloud.net.cn/question/87441)
  + Android platform fix Get OAID on some mobile phones may trigger an error callback, the error message indicates an unsupported bug [Details](https://ask.dcloud.net.cn/question/87441)
  + Android平台 修复 调用系统分享消息 plus.share.sendWithSystem 标题不支持国际化的Bug [详情](https://ask.dcloud.net.cn/question/87936)
  + Android platform fix Call system to share message plus.share.sendWithSystem header does not support the bug of internationalization [Details](https://ask.dcloud.net.cn/question/87936)
  + Android平台 修复 音频播放对象 AudioPlayer 触发end事件之后，调用 stop 和 destroy 方法会出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/73227)
  + Android platform Fixed the bug that after the audio playback object AudioPlayer triggers the end event, the stop and destroy methods will be called. [Details](https://ask.dcloud.net.cn/question/73227)
  + iOS平台 修复 在非刘海屏手机获取应用的安全区域 plus.navigator.getSafeAreaInsets 返回 deviceTop 数据可能不正确的Bug
  + iOS platform Fix the bug that the deviceTop data may be incorrect when getting the safe area of the application on non-Liu Haiping mobile phones plus.navigator.getSafeAreaInsets
  + iOS平台 修复 调用 plus.gallery.pick 选择相册中的照片后, 连续快速点击完成按钮可能会引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/87123)
  + iOS platform Fix the bug that after calling plus.gallery.pick to select a photo in the album, clicking the finish button in quick succession may cause the application to crash [Details](https://ask.dcloud.net.cn/question/87123)
  + iOS平台 修复 视频播放控件 VideoPlayer 暂停播放后手势快进或后退操作时，没有更新进度条上显示时间的Bug
  + iOS platform Fix the video playback control VideoPlayer does not update the time displayed on the progress bar when the videoPlayer gestures to fast-forward or rewind after pausing the playback

#### 2.5.1.20200103
* 【uni-app】
  + 【重要】App端重大架构升级 `v3编译器`，更快的启动速度、更好的性能、更多vue语法支持、可webview调试视图层。新项目默认开启v3，可通过【manifest.json-App其他设置】开启关闭v3 [详情](https://ask.dcloud.net.cn/article/36599)
  + [Important] Major architecture upgrade on the App side `v3 compiler`, faster startup speed, better performance, more vue syntax support, webview debug view layer. For new projects, v3 is enabled by default, and v3 can be enabled or disabled through [manifest.json-App other settings] [Details](https://ask.dcloud.net.cn/article/36599)
  + 【重要】H5平台、QQ小程序 支持运行微信小程序组件 [详情](https://hellouniapp.dcloud.net.cn/pages/template/vant-button/vant-button)
  + [Important] H5 platform and QQ applet support running WeChat applet components [Details](https://hellouniapp.dcloud.net.cn/pages/template/vant-button/vant-button)
  + 【重要】App平台 新增 pages.json 配置屏幕方向。横屏应用请在这里配置，app.vue里生效较晚 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + [Important] App platform added pages.json to configure screen orientation. Please configure the horizontal screen application here, it will take effect later in app.vue [Details](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + 优化 非 scoped 样式支持 >>>,/deep/,::v-deep语法[详情](https://github.com/dcloudio/uni-app/issues/1143)
  + Optimized non-scoped style support >>>,/deep/,::v-deep syntax [details](https://github.com/dcloudio/uni-app/issues/1143)
  + App平台 优化 选择位置 支持在搜索结果中选择
  + App platform optimization Select location Support selection in search results
  + App平台 优化 picker 组件按钮文字增加多语言支持
  + App platform Optimized picker component button text and added multi-language support
  + App平台 修复 v3版本 block 或 template 使用 v-for 且仅包含文本节点时渲染不正确的 Bug [详情](https://github.com/dcloudio/uni-app/issues/1206)
  + App Platform Fix the bug that the v3 version block or template uses v-for and only contains text nodes to render incorrectly [Details](https://github.com/dcloudio/uni-app/issues/1206)
  + App平台 修复 image 组件初始值为空字符串时会执行一次@error事件的Bug
  + App platform Fixed the bug that an @error event would be executed when the initial value of the image component was an empty string
  + App平台 修复 input 组件失焦时会触发一次@input的Bug [详情](https://ask.dcloud.net.cn/question/84456)
  + App platform Fixed the bug that @input would be triggered once when the input component was out of focus [Details](https://ask.dcloud.net.cn/question/84456)
  + App平台 修复 webview 组件在非沉浸式状态栏下高度不正确的Bug
  + App Platform Fix the bug that the height of the webview component is incorrect under the non-immersive status bar
  + App平台 修复 chooseImage 传入字符串格式 sizeType 导致报错的Bug
  + App platform Fix the bug that chooseImage input string format sizeType causes an error
  + App平台 修复 纯 nvue 环境 uni.request 数据格式错误的Bug [#1100](https://github.com/dcloudio/uni-app/issues/1100)
  + App platform Fix the bug of wrong format of uni.request data in pure nvue environment [#1100](https://github.com/dcloudio/uni-app/issues/1100)
  + App平台 修复 nvue input 组件动态设置 password 属性不生效的Bug
  + App platform to fix the bug that the dynamic setting of the password attribute of the nvue input component does not take effect
  + App平台 修复 v-for 中监听事件某些情况参数不正确的Bug
  + App platform Fix the bug that the parameters of the listening events in v-for are incorrect in some cases
  + App平台 修复 picker 组件内容为空字符串时排版错位的Bug [详情](https://ask.dcloud.net.cn/question/85682)
  + App platform Fix the bug of misplaced typesetting when the content of the picker component is an empty string [Details](https://ask.dcloud.net.cn/question/85682)
  + App平台 修复 App.vue onError 部分异常未捕获的 Bug [详情](https://github.com/dcloudio/uni-app/issues/1093)
  + App platform Fix App.vue onError bug that some exceptions are not caught [Details](https://github.com/dcloudio/uni-app/issues/1093)
  + App-Android平台 新增 nvue 通用属性 elevation 设置组件的层级阴影，解决 box-shadow 样式在设置圆角或动画时显示不正常的问题 [详情](https://uniapp.dcloud.io/use-css?id=android-box-shadow)
  + App-Android platform adds the nvue common attribute elevation to set the level shadow of the component, to solve the problem that the box-shadow style does not display properly when setting rounded corners or animation [Details](https://uniapp.dcloud.io/use- css?id=android-box-shadow)
  + App-Android平台 优化 应用退出后不清掉后台，反复热启动导致底层通信timeout引起的白屏问题
  + App-Android platform optimization After the application exits, the background is not cleared, and repeated hot restarts lead to the white screen problem caused by the underlying communication timeout
  + App-Android平台 修复 部分使用64位CPU的手机上可能出现白屏的Bug [详情](https://ask.dcloud.net.cn/question/83611)
  + App-Android platform fix Bug that may appear white screen on some mobile phones with 64-bit CPU [Details](https://ask.dcloud.net.cn/question/83611)
  + App-Android平台 修复 nvue image 组件在部分手机上设置 fade-show 属性值为false可能仍然会闪烁的Bug 
  + App-Android platform Fix the bug that the nvue image component may still flicker when the fade-show property value is set to false on some mobile phones
  + App-Android平台 修复 nvue swipe 组件设置 circular 属性值为true时从首页直接跳到最后一页可能出现页面无法正常渲染的Bug
  + App-Android platform Fix the bug that the page may not be rendered normally when the nvue swipe component sets the circular property value to true when jumping directly from the first page to the last page
  + App-Android平台 修复 tabbar 的 midButton 不设置图片时显示默认图片的Bug [详情](https://ask.dcloud.net.cn/question/84908)
  + App-Android platform Fix the bug that the default image is displayed when the midButton of the tabbar does not set an image [Details](https://ask.dcloud.net.cn/question/84908)
  + App-Android平台 修复 nvue map 组件中标注点设置 translateMarker 旋转角度后，点气泡也会随之旋转的Bug [详情](https://ask.dcloud.net.cn/question/84676)
  + App-Android platform Fix the bug that the point bubble will also rotate after setting the translateMarker rotation angle in the nvue map component. [Details](https://ask.dcloud.net.cn/question/84676)
  + App-Android平台 修复 nvue 页面中使用 animation 动画，关闭页面可能会闪退的Bug [详情](https://ask.dcloud.net.cn/question/84902)
  + App-Android platform Fix the bug that using animation animation in nvue page, closing the page may crash [Details](https://ask.dcloud.net.cn/question/84902)
  + App-Android平台 修复 nvue scroll-view 组件中嵌套 list 组件，list高度大于scroll-view剩余高度时高度可能不正常的Bug [详情](https://ask.dcloud.net.cn/question/85496)
  + App-Android platform fixes the bug that the list component is nested in the nvue scroll-view component, and the height of the list may be abnormal when the height of the list is greater than the remaining height of the scroll-view [Details](https://ask.dcloud.net.cn/question/ 85496)
  + App-Android平台 修复 tabBar 动态设置某一项的内容会导致选中状态失效的Bug [详情](https://ask.dcloud.net.cn/question/80941)
  + App-Android platform Fix the bug that the content of a certain item in the tabBar will cause the selected state to be invalid [Details](https://ask.dcloud.net.cn/question/80941)
  + 【重要】App-iOS平台 新增 uni.login 支持Apple登录 [详情](https://ask.dcloud.net.cn/article/36651)
  + [Important] App-iOS platform added uni.login to support Apple login [Details](https://ask.dcloud.net.cn/article/36651)
  + App-iOS平台 新增 nvue 普通 view 组件支持设置高斯模糊（毛玻璃）效果 [详情](https://ask.dcloud.net.cn/article/36617#view)
  + App-iOS platform added the normal view component of nvue to support setting Gaussian blur (frosted glass) effect [Details](https://ask.dcloud.net.cn/article/36617#view)
  + App-iOS平台 修复 nvue input 组件设置 maxlength 属性后，@input事件返回value值与实际显示值不一致的Bug [详情](https://github.com/dcloudio/uni-app/issues/1073)
  + App-iOS platform Fix the bug that the value returned by the @input event is inconsistent with the actual display value after the nvue input component sets the maxlength attribute [Details](https://github.com/dcloudio/uni-app/issues/1073)
  + App-iOS平台 修复 tabbar及标题栏上设置字体图标可能无法正常显示的Bug
  + App-iOS platform Fix the bug that the font icon on the tabbar and title bar may not be displayed properly
  + App-iOS平台 修复 nvue map 组件不设置 marker 的 title 及 callout 时会显示空白标注的Bug [详情](https://ask.dcloud.net.cn/question/85874)
  + App-iOS platform Fix the bug that the blank label will be displayed when the title and callout of the marker are not set in the nvue map component [Details](https://ask.dcloud.net.cn/question/85874)
  + App-iOS平台 修复 nvue map 组件使用 controls 控件提交云端打包后可能会引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/86521)
  + App-iOS platform Fix the bug that the nvue map component may crash after submitting cloud package using controls control [Details](https://ask.dcloud.net.cn/question/86521)
  + App-iOS平台 修复 使用 uni.hideKeyboard 输入框无法失去焦点的Bug [详情](https://ask.dcloud.net.cn/question/85681)
  + App-iOS platform Fix the bug that the input box cannot lose focus when using uni.hideKeyboard [Details](https://ask.dcloud.net.cn/question/85681)
  + H5平台 新增 支持 editor 组件 [详情](https://hellouniapp.dcloud.net.cn/pages/component/editor/editor)
  + Added support for editor component on H5 platform [Details](https://hellouniapp.dcloud.net.cn/pages/component/editor/editor)
  + H5平台 新增 支持使用 nodesRef.context 获取 VideoContext、CanvasContext 和 MapContext 对象
  + Added support for using nodesRef.context to obtain VideoContext, CanvasContext and MapContext objects on H5 platform
  + H5平台 新增 video 组件支持 @loadedmetadata、@progress 事件
  + H5 platform added video component to support @loadedmetadata, @progress events
  + H5平台 优化 发行时 index.css 文件名包含 hash 以便更好的控制缓存 [详情](https://ask.dcloud.net.cn/question/84990)
  + H5 platform optimization The index.css file name contains hash when released to better control the cache [Details](https://ask.dcloud.net.cn/question/84990)
  + H5平台 优化 video 组件全屏展示效果 [详情](https://ask.dcloud.net.cn/question/85223)
  + H5 platform optimizes the full-screen display effect of video components [Details](https://ask.dcloud.net.cn/question/85223)
  + H5平台 优化 canvas 组件内存占用
  + H5 platform optimized canvas component memory usage
  + H5平台 修复 css 变量 --window-bottom 在全面屏设备不准确的Bug [详情](https://ask.dcloud.net.cn/question/83069)
  + H5 platform Fix the bug that the css variable --window-bottom is inaccurate in full-screen devices [Details](https://ask.dcloud.net.cn/question/83069)
  + H5平台 修复 canvasContext.measureText 报错的Bug [详情](https://ask.dcloud.net.cn/question/84858)
  + H5 platform Fix the bug of canvasContext.measureText error [Details](https://ask.dcloud.net.cn/question/84858)
  + H5平台 修复 uni.createAnimation 动画不正确的Bug [详情](https://ask.dcloud.net.cn/question/84862)
  + H5 platform Fix the bug of incorrect animation in uni.createAnimation [Details](https://ask.dcloud.net.cn/question/84862)
  + H5平台 修复 webview 页面调用 uni API 无效的Bug [详情](https://ask.dcloud.net.cn/question/84977)
  + H5 platform Fix the bug that the webview page calls uni API invalid [Details](https://ask.dcloud.net.cn/question/84977)
  + H5平台 修复 tabBar 文字较多时角标（红点）错位的Bug [详情](https://ask.dcloud.net.cn/question/83293)
  + H5 platform Fix the bug of misplaced corner labels (red dots) when there are many texts in the tabBar [Details](https://ask.dcloud.net.cn/question/83293)
  + H5平台 修复 textarea 组件未设置 line-height 时 linechange 事件 lineCount 值错误的Bug [#1123](https://github.com/dcloudio/uni-app/issues/1123)
  + H5 platform Fix the bug that the lineCount value of the linechange event is wrong when the textarea component does not set line-height [#1123](https://github.com/dcloudio/uni-app/issues/1123)
  + H5平台 修复 swiper 组件动画过程中销毁组件会报错的Bug [#1123](https://github.com/dcloudio/uni-app/issues/1127)
  + H5 platform Fix the bug that an error will be reported when the swiper component is destroyed during the animation process of the swiper component [#1123](https://github.com/dcloudio/uni-app/issues/1127)
  + H5平台 修复 image 组件 src 包含英文括号时无法正常的Bug [#1090](https://github.com/dcloudio/uni-app/pull/1090)
  + H5 platform Fix the bug that the image component src does not work properly when it contains English brackets [#1090](https://github.com/dcloudio/uni-app/pull/1090)
  + H5平台 修复 globalStyle 下 h5 节点配置不生效的Bug
  + H5 platform Fix the bug that the h5 node configuration does not take effect under globalStyle
  + H5平台 修复 editor 组件未配置图像控件时报错的Bug
  + H5 platform Fix the bug that the editor component is not configured with image controls
  + H5平台 修复 在不支持 localStorage 的环境运行时框架报错的Bug [#1155](https://github.com/dcloudio/uni-app/issues/1155)
  + H5 platform Fix the bug that the framework reports an error when running in an environment that does not support localStorage [#1155](https://github.com/dcloudio/uni-app/issues/1155)
  + 支付宝小程序平台 新增 支持 onBackPress [详情](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%E9%A1%B5%E9%9D%A2%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
  + Added support for onBackPress on Alipay applet platform [Details](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%E9%A1%B5%E9%9D%A2%E7%94%9F% E5%91%BD%E5%91%A8%E6%9C%9F)
  + 支付宝小程序平台 新增 支持配置 mini.project.json (manifest.json->mp-alipay) [#1164](https://github.com/dcloudio/uni-app/issues/1164)
  + Alipay applet platform added support for configuring mini.project.json (manifest.json->mp-alipay) [#1164](https://github.com/dcloudio/uni-app/issues/1164)
  + 支付宝小程序平台 修复 使用 createIntersectionObserver 报错的Bug
  + Alipay applet platform to fix the bug of using createIntersectionObserver to report errors
  + 支付宝小程序平台 修复 使用 createSelectorQuery().in(this) 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/1190)
  + Alipay applet platform to fix the bug reported by createSelectorQuery().in(this) [Details](https://github.com/dcloudio/uni-app/issues/1190)
  + uni-ui 新增 vue doc，在HBuilderX中可以给予更完善的代码提示 [什么是vue doc](https://ask.dcloud.net.cn/article/35814)
  + uni-ui adds vue doc, which can give more complete code hints in HBuilderX [What is vue doc](https://ask.dcloud.net.cn/article/35814)
  + hello uni-app 新增 canvas 组件示例(App端使用wxs实现高性能动画)
  + hello uni-app added canvas component example (App uses wxs to achieve high-performance animation)
* 【5+App插件】
* 【5+App Plugins】
  + Android平台 更新 高德地图SDK（7.1.0）
  + Android platform update AutoNavi Map SDK (7.1.0)
  + Android平台 修复 Webview窗口关闭后可能出现内存占用不释放的Bug [详情](https://ask.dcloud.net.cn/question/83587)
  + Android platform Fix the bug that the memory usage may not be released after the Webview window is closed [Details](https://ask.dcloud.net.cn/question/83587)
  + Android平台 修复 数据库执行SQL语句 plus.sqlite.executeSql 不支持多条sql语句的Bug [详情](https://ask.dcloud.net.cn/question/74376)
  + Android platform Fix the bug that the database executes SQL statements plus.sqlite.executeSql does not support multiple SQL statements [Details](https://ask.dcloud.net.cn/question/74376)
  + Android平台 修复 真机运行默认将日志保存到SD卡中，长时间运行可能出现日志文件过大的Bug
  + Android platform fix: The real machine will save the log to the SD card by default, and the log file may be too large when running for a long time.
  + 【重要】iOS平台 新增 支持苹果授权登录（Sign in with Apple） [教程](https://ask.dcloud.net.cn/article/36651)
  + [Important] Added support for Sign in with Apple on iOS platform [Tutorial](https://ask.dcloud.net.cn/article/36651)
  + iOS平台 修复 音频播放对象（AudioPlayer）播放网络音频时，缓存完成恢复播放时没有触发 onPlay 事件的Bug
  + For iOS platform, when the audio player object (AudioPlayer) plays network audio, the bug that the onPlay event is not triggered when the cache is completed and the playback is resumed
  + iOS平台 修复 Webview窗口的titleUpdate事件可能不触发导致无法修改页面标题的Bug [详情](https://ask.dcloud.net.cn/question/84115)
  + iOS platform Fix the bug that the titleUpdate event of the Webview window may not be triggered, resulting in the inability to modify the page title [Details](https://ask.dcloud.net.cn/question/84115)
  + iOS平台 修复 Webview窗口的标题栏（titleNView）设置titleSize属性不生效的Bug
  + iOS platform Fix the bug that the titleSize property of the title bar (titleNView) of the Webview window does not take effect
  + iOS平台 修复 系统日期选择框（plus.nativeUI.pickDate）、时间选择框（plus.nativeUI.pickTime）在横屏时显示不正常的Bug
  + iOS platform Fix the bug that the system date selection box (plus.nativeUI.pickDate) and time selection box (plus.nativeUI.pickTime) display abnormally in landscape
  + iOS平台 修复 应用切换到后台，从其它应用传参数激活到前台时 plus.runtime.arguments 可能不更新的Bug
  + iOS platform Fix the bug that the plus.runtime.arguments may not be updated when the application switches to the background and is activated by passing parameters from other applications to the foreground
  + iOS平台 修复 录音对象（AudioRecorder）录制mp3格式音频设置 channels 参数值为 mono 不生效的Bug [详情](https://ask.dcloud.net.cn/question/85493)
  + iOS platform Fix the bug that the audio recorder (AudioRecorder) records audio in mp3 format and the channel parameter value is mono does not take effect [Details](https://ask.dcloud.net.cn/question/85493)
  + iOS平台 修复 录音对象（AudioRecorder）设置音频播放模式 setSessionCategory 可能不生效的Bug
  + iOS platform, fix the bug that the audio recording object (AudioRecorder) set the audio playback mode setSessionCategory may not take effect
  + iOS平台 修复 iOS13调用 plus.screen.setBrightness 方法可能会导致页面失去响应的Bug
  + iOS platform Fix the bug that calling the plus.screen.setBrightness method on iOS13 may cause the page to become unresponsive
  + iOS平台 修复 在非刘海屏手机获取应用的安全区域 plus.navigator.getSafeAreaInsets 返回 deviceTop 数据可能不正确的Bug
  + iOS platform Fix the bug that the deviceTop data may be incorrect when getting the safe area of the application on non-Liu Haiping mobile phones plus.navigator.getSafeAreaInsets

#### 2.4.6.20191210
* 【uni-app】
  + App平台 修复 纯 vue 项目配置 condition 后运行报错的Bug [详情](https://ask.dcloud.net.cn/question/84752)
  + App platform Fix the bug of running error after the pure vue project is configured with condition [Details](https://ask.dcloud.net.cn/question/84752)
  + App-Android平台 修复 选择位置 概率出现定位中心点不居中的Bug [详情](https://ask.dcloud.net.cn/question/84819)
  + App-Android platform Fix the bug that the positioning center point is not centered when selecting the location [Details](https://ask.dcloud.net.cn/question/84819)
  + H5平台 修复 发行模式启用摇树优化后，运行报 getApp 出错的Bug [详情](https://ask.dcloud.net.cn/question/84763)
  + H5 platform Fix the bug that when the tree-shaking optimization is enabled in the release mode, an error is reported when running getApp [Details](https://ask.dcloud.net.cn/question/84763)

#### 2.4.5.20191209
* 【uni-app】
  + 新增 支持在页面文件调用 `App.vue` 中定义的函数方法 [#665](https://github.com/dcloudio/uni-app/issues/665)
  + Added support for calling function methods defined in `App.vue` in the page file [#665](https://github.com/dcloudio/uni-app/issues/665)
  + 优化 `babel.config.js` 文件里的 `@vue/babel-preset-app` 支持配置 `modules:false` ，让打包后的代码体积更小，运行更快 [#929](https://github.com/dcloudio/uni-app/issues/929)
  + Optimize the `@vue/babel-preset-app` in the `babel.config.js` file to support the configuration of `modules: false`, making the packaged code smaller and faster [#929](https:/ /github.com/dcloudio/uni-app/issues/929)
  + 修复 发行模式下使用 scss ，部分情况条件编译不生效的 Bug [1013](https://github.com/dcloudio/uni-app/issues/1013)
  + Fix bug [1013](https://github.com/dcloudio/uni-app/issues/1013) when using scss in release mode, conditional compilation does not take effect in some cases
  + App平台 新增 nvue(uni-app编译模式) 控制是否自动包裹 scroll 组件（通过 pages.json 里 style 的 `disableScroll` 属性配置页面) [详见](https://uniapp.dcloud.io/collocation/pages?id=style)
  + App platform adds nvue (uni-app compilation mode) to control whether to automatically wrap the scroll component (configure the page through the `disableScroll` property of style in pages.json) [see details](https://uniapp.dcloud.io/collocation /pages?id=style)
  + App平台 新增 nvue(uni-app编译模式) webview 组件加载的HTML支持调用部分uni API [详情](https://ask.dcloud.net.cn/question/83399)
  + App platform Added nvue (uni-app compilation mode) HTML supported by webview components to call some uni APIs [Details](https://ask.dcloud.net.cn/question/83399)
  + App平台 优化 选择位置，全新UI、支持传入经纬度参数、一键到达当前位置
  + App platform optimization Select location, new UI, support incoming latitude and longitude parameters, one-click to reach the current location
  + App平台 修复 真机运行 指定页面为首页时白屏的Bug
  + App platform to fix the bug of the white screen when the specified page is the homepage when running on a real machine
  + App平台 修复 nvue 导航栏 titleNView 的 type 属性设置为 transparent 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/66907)
  + App platform Fix the bug that the nvue navigation bar titleNView's type attribute does not take effect when it is set to transparent [Details](https://ask.dcloud.net.cn/question/66907)
  + App平台 修复 nvue(weex编译模式) uni.scanCode 打开扫码页面空白的Bug [详情](https://ask.dcloud.net.cn/question/83820)
  + App platform Fix nvue (weex compilation mode) uni.scanCode opens the bug of blank scan code page [Details](https://ask.dcloud.net.cn/question/83820)
  + App平台 修复 nvue picker 组件多次打开后无法关闭的Bug [详情](https://ask.dcloud.net.cn/question/83417)
  + App platform Fix the bug that the nvue picker component cannot be closed after multiple openings [Details](https://ask.dcloud.net.cn/question/83417)
  + App-Android平台 优化 应用退出后不清掉后台，再次启动可能出现白屏的问题 [详情](https://ask.dcloud.net.cn/question/77397)
  + App-Android platform optimization After the application is exited, the background cannot be cleared, and a white screen may appear when it is restarted [Details](https://ask.dcloud.net.cn/question/77397)
  + App-Android平台 修复 首页为 nvue 时反复启动应用后可能出现假死状态的Bug [详情](https://ask.dcloud.net.cn/question/83611)
  + App-Android platform Fix the bug that may appear suspended animation after repeatedly launching the app when the homepage is nvue [Details](https://ask.dcloud.net.cn/question/83611)
  + App-Android平台 修复 应用在 tabbar 页面跳转到其它页面在Android10上可能出现图片闪烁的Bug
  + App-Android platform Fix the bug that the app jumps to other pages on the tabbar page, and the picture may flicker on Android10
  + App-Android平台 修复 nvue scroll-view 组件无法触发 touchstart/touchend 事件及动态设置 scroll-left 属性可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/83256)
  + App-Android platform Fix the bug that nvue scroll-view component cannot trigger touchstart/touchend event and dynamic setting scroll-left property may not take effect [Details](https://ask.dcloud.net.cn/question/83256)
  + App-Android平台 修复 nvue input 组件设置 autofocus 属性为 true 在subnvue页面可能出现软键盘弹出后自动隐藏的Bug [详情](https://ask.dcloud.net.cn/question/83014)
  + App-Android platform Fix the bug that the nvue input component sets the autofocus attribute to true and the soft keyboard pops up on the subnvue page. [Details](https://ask.dcloud.net.cn/question/83014)
  + App-Android平台 修复 nvue map 组件下的view子节点不显示的Bug [详情](https://ask.dcloud.net.cn/question/83719)
  + App-Android platform Fix the bug that the view child node under the nvue map component is not displayed [Details](https://ask.dcloud.net.cn/question/83719)
  + App-Android平台 修复 nvue live-pusher 组件推流成功后拉流可能显示绿屏或卡在首帧的Bug [详情](https://ask.dcloud.net.cn/question/83198)
  + App-Android platform Fix the bug that the nvue live-pusher component may display a green screen or get stuck in the first frame after the nvue live-pusher component is successfully pushed [Details](https://ask.dcloud.net.cn/question/83198)
  + App-iOS平台 新增 tabbar和navigationBar 支持设置高斯模糊（毛玻璃）效果 [详情](https://ask.dcloud.net.cn/article/36617)
  + App-iOS platform Added support for setting Gaussian blur (frosted glass) in tabbar and navigationBar [Details](https://ask.dcloud.net.cn/article/36617)
  + App-iOS平台 修复 nvue view 组件设置 border 属性可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/83206)
  + App-iOS platform Fix the bug that setting the border property of the nvue view component may cause the application to crash [Details](https://ask.dcloud.net.cn/question/83206)
  + App-iOS平台 修复 iOS 13 系统中 textarea 输入的内容，比 placeholder 偏左一点的Bug [详情](https://ask.dcloud.net.cn/question/83373)
  + App-iOS platform Fix the bug of textarea input in iOS 13 system, which is a little bit to the left of placeholder [Details](https://ask.dcloud.net.cn/question/83373)
  + App-iOS平台 修复 faceID 识别成功时不能正确触发成功回调的Bug [详情](https://ask.dcloud.net.cn/question/83068)
  + App-iOS platform Fix the bug that the success callback cannot be triggered correctly when faceID recognition is successful [Details](https://ask.dcloud.net.cn/question/83068)
  + App-iOS平台 修复 网络请求 uni.request 设置请求的 header 中存在非字符串值可能会引起崩溃的Bug
  + App-iOS platform Fix the bug that a non-string value in the header of the network request uni.request setting request may cause a crash
  + H5平台 新增 uni.chooseImage 、uni.chooseVideo 支持返回文件名
  + H5 platform added uni.chooseImage and uni.chooseVideo support to return file name
  + H5平台 新增 支持使用 uni.loadFontFace 加载字体
  + Added support for loading fonts using uni.loadFontFace for H5 platform
  + H5平台 修复 webview 组件 加载的HTML中调用 uni.getEnv 错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/1011)
  + H5 platform Fix the bug of calling uni.getEnv wrong in HTML loaded by webview component [Details](https://github.com/dcloudio/uni-app/issues/1011)
  + H5平台 修复 h5 平台组件的自定义事件无法接收多个参数的Bug [#1016](https://github.com/dcloudio/uni-app/issues/1016)
  + H5 platform Fix the bug that the custom event of the h5 platform component cannot receive multiple parameters [#1016](https://github.com/dcloudio/uni-app/issues/1016)
  + H5平台 修复 在企业微信中 uni.chooseImage 无法使用的Bug [详情](https://github.com/dcloudio/uni-app/issues/82872)
  + H5 platform Fix the bug that uni.chooseImage cannot be used in enterprise WeChat [Details](https://github.com/dcloudio/uni-app/issues/82872)
  + 小程序平台 修复 不能直接在模版内使用 $emit 的 Bug [详情](https://ask.dcloud.net.cn/question/82865)
  + Mini Program Platform Fix the bug that $emit cannot be used directly in the template [Details](https://ask.dcloud.net.cn/question/82865)
  + 微信小程序平台 修复在发行模式使用 lodash@4.17.15 ，运行报错的 Bug[#994](https://github.com/dcloudio/uni-app/issues/994)
  + Wechat applet platform Fix the bug of using lodash@4.17.15 in release mode and running an error[#994](https://github.com/dcloudio/uni-app/issues/994)
  + 支付宝小程序平台 修复 for 循环中 ref 生成的多个组件数组长度不准确的Bug [#930](https://github.com/dcloudio/uni-app/issues/930)
  + Alipay applet platform Fix the bug that the length of multiple component arrays generated by ref in the for loop is inaccurate [#930](https://github.com/dcloudio/uni-app/issues/930)
  + 字节跳动小程序平台 修复 当 rpx 后跟着 !important 时，发行模式下 rpx 未被编译成px的Bug [#1014](https://github.com/dcloudio/uni-app/issues/1014)
  + ByteDance applet platform Fix the bug that rpx is not compiled into px in release mode when rpx is followed by !important [#1014](https://github.com/dcloudio/uni-app/issues/1014)
  + 百度小程序平台 修复 页面 onShow 只能触发一次的Bug
  + Baidu applet platform to fix the bug that the page onShow can only be triggered once
  + uni-ui 新增 uni-transition 过渡动画组件
  + uni-ui added uni-transition transition animation component
  + uni-ui 新增 uni-fab 悬浮按钮支持nvue
  + uni-ui added uni-fab floating button to support nvue
  + uni-ui 优化 uni-calendar 切换月份必选中每月1号的Bug
  + uni-ui optimization uni-calendar switch month must select the bug on the 1st of each month
  + uni-ui 优化 uni-calendar 视图样式,优化逻辑代码实现,使性能更好
  + uni-ui optimizes the uni-calendar view style, optimizes the logic code implementation, and makes the performance better
  + uni-ui 优化 uni-calendar 切换月份返回事件
  + uni-ui optimized uni-calendar switch month return event
  + uni-ui 优化 uni-grid 用户可自定义宫格内容，如添加角标、红点、修改背景色等
  + uni-ui optimization uni-grid users can customize the grid content, such as adding corner marks, red dots, modifying the background color, etc.
  + uni-ui 优化 uni-load-more 支持调整图标大小
  + uni-ui optimization uni-load-more supports resizing icons
  + uni-ui 优化 uni-popup 弹出层动画，使动画更流畅
  + uni-ui optimize uni-popup popup animation to make animation smoother
  + uni-ui 优化 uni-swipe-action 组件间联动效果更流畅
  + uni-ui optimizes the linkage effect between uni-swipe-action components more smoothly
  + uni-ui 修复 uni-calendar 动态获取 selected 属性就会导致切换不了月份的Bug
  + uni-ui fix the bug that when uni-calendar dynamically obtains the selected attribute, the month cannot be switched
  + uni-ui 修复 uni-calendar H5 端选择月份按钮不能点击的Bug
  + uni-ui fix the bug that the select month button cannot be clicked on the uni-calendar H5 side
  + uni-ui 修复 uni-grid 正方形宫格显示不正确的Bug
  + uni-ui fix the bug that the square grid of uni-grid is not displayed correctly
  + uni-ui 修复 uni-grid 动态数据不渲染的Bug
  + uni-ui fix the bug that uni-grid dynamic data does not render
  + uni-ui 修复 uni-popup 点击蒙版关闭后，再次打开弹框失败的Bug
  + uni-ui fix the bug of failing to open the popup box again after the uni-popup click mask is closed
  + uni-ui 修复 uni-popup type 属性为静态值时导致弹出层错误的Bug
  + uni-ui fix the bug that caused popup layer error when uni-popup type attribute is static value
  + uni-ui 修复 uni-swipe-action autoClose 属性开启状态下滑动不正常的Bug
  + uni-ui fix the bug that the swipe does not work properly when the uni-swipe-action autoClose property is enabled
* 【5+App插件】
* 【5+App Plugins】
  + Android平台 优化 启动时申请手机存储权限，若用户拒绝则会弹出说明文字。满足部分应用商店要求的权限申请需申明的要求 [详情](https://ask.dcloud.net.cn/article/36549#externalstorage)
  + Android platform optimization Apply for mobile phone storage permission at startup, if the user refuses, a description text will pop up. Requirements to be declared for permission applications that meet the requirements of some app stores [Details](https://ask.dcloud.net.cn/article/36549#externalstorage)
  + Android平台 修复 Webview窗口设置drag滑屏操作手势，快速滑动操作可能引起白屏的Bug [详情](https://ask.dcloud.net.cn/question/82668)
  + Android platform Fix the bug that the Webview window sets the drag sliding gesture, and the fast sliding operation may cause a white screen [Details](https://ask.dcloud.net.cn/question/82668)
  + Android平台 修复 视频播放控件（VideoPlayer）可能无法播放某些本地视频文件的Bug
  + Android platform fix the bug that the video playback control (VideoPlayer) may not play some local video files
  + Andrpid平台 修复 数据库执行SQL语句（plus.sqlite.executeSql）传入错误sql语句时，可能在控制台输出错误日志且不触发错误回调的Bug [详情](https://ask.dcloud.net.cn/question/83203)
  + Andrpid platform fixes the bug that when the database executes the SQL statement (plus.sqlite.executeSql) and the wrong SQL statement is passed in, the error log may be output in the console and the error callback will not be triggered [Details](https://ask.dcloud.net. cn/question/83203)
  + iOS平台 新增 Webview窗口原生标题栏样式属性 blurEffect，支持高斯模糊（毛玻璃）效果 [详情](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + iOS platform Added the native title bar style attribute blurEffect of Webview window, which supports Gaussian blur (frosted glass) effect [Details](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + iOS平台 补齐 直播推流（LivePusher）控件支持设置最小码率（min-bitrate）和最大码率（max-bitrate）
  + iOS platform Completion The LivePusher control supports setting the minimum bitrate (min-bitrate) and the maximum bitrate (max-bitrate)
  + iOS平台 修复 Webview窗口原生标题栏的搜索框（searchInput）获取焦点会导致placeholder文字移位的Bug [详情](https://ask.dcloud.net.cn/question/83027)
  + iOS platform Fix the bug that the search box (searchInput) of the native title bar of the Webview window will cause the placeholder text to shift when the focus is obtained [Details](https://ask.dcloud.net.cn/question/83027)
  + iOS平台 修复 图片预览（plus.nativeUI.previewImage）可能出现长图片不能滚动的Bug [详情](https://ask.dcloud.net.cn/question/82455)
  + iOS platform Fix the bug that the image preview (plus.nativeUI.previewImage) may not scroll long images [Details](https://ask.dcloud.net.cn/question/82455)
  + iOS平台 修复 图片预览（plus.nativeUI.previewImage）可能无法正常显示部分网络地址图片的Bug [详情](https://ask.dcloud.net.cn/question/83542)
  + iOS platform Fix the bug that the image preview (plus.nativeUI.previewImage) may not display some network address images properly [Details](https://ask.dcloud.net.cn/question/83542)
  + iOS平台 修复 使用UniPush或个推推送在后台统计数据中没有展示数和点击数的Bug [详情](https://ask.dcloud.net.cn/question/83292)
  + iOS platform Fix the bug that there are no impressions and clicks in the background statistics when using UniPush or a push push [Details](https://ask.dcloud.net.cn/question/83292)
  + iOS平台 修复 用户拒绝访问相机后，调用摄像头拍照或录像时不会触发错误回调的Bug
  + iOS platform Fix the bug that when the user refuses to access the camera, the error callback will not be triggered when calling the camera to take pictures or videos
  + iOS平台 修复 配置使用高德或百度地图后，定位默认没有使用gcj02坐标的Bug
  + iOS platform fix: After configuring the use of AutoNavi or Baidu map, the positioning default does not use the bug of gcj02 coordinates
  + iOS平台 修复 系统日期（plus.nativeUI.pickDate）、时间（plus.nativeUI.pickTime）选择框与系统提示框遮罩颜色不一致的Bug
  + iOS platform Fix the bug that the system date (plus.nativeUI.pickDate), time (plus.nativeUI.pickTime) selection box is inconsistent with the mask color of the system prompt box
  + iOS平台 修复 苹果应用内支付IAP恢复购买接口（restoreComplateRequest）有可能不会返回恢复购买凭证的Bug
  + iOS platform Fix the bug that Apple's in-app payment IAP restore purchase interface (restoreComplateRequest) may not return to restore the purchase certificate

#### 2.4.2.20191115
* 【uni-app】
  + APP平台 修复 当`manifest.json`中`nvueCompiler`配置项不是`weex`时，picker 组件文字超出无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/83048)
  + APP platform fix When the `nvueCompiler` configuration item in `manifest.json` is not `weex`, the picker component text exceeds the bug that cannot be hidden [Details](https://ask.dcloud.net.cn/question/83048)
  + APP平台 修复 当`manifest.json`中`nvueCompiler`配置项不是`weex`时，uni.scanCode 接口无法回调的Bug [详情](https://ask.dcloud.net.cn/question/82984)
  + APP platform Fix the bug that the uni.scanCode interface cannot be called back when the `nvueCompiler` configuration item in `manifest.json` is not `weex` [Details](https://ask.dcloud.net.cn/question/82984)
  + APP平台 修复 当`manifest.json`中`nvueCompiler`配置项不是`weex`时，uni.chooseLocation 接口无法回调的Bug [详情](https://ask.dcloud.net.cn/question/82988)
  + APP platform Fix the bug that the uni.chooseLocation interface cannot be called back when the `nvueCompiler` configuration item in `manifest.json` is not `weex` [Details](https://ask.dcloud.net.cn/question/82988)
  + App-Android平台 修复 nvue barcode 组件设置 autostart 为true时在部分设备可能出现黑屏的Bug
  + App-Android platform Fix the bug that a black screen may appear on some devices when the nvue barcode component is set to autostart as true
  + App-iOS平台 修复 纯nvue项目 侧滑关闭后无法触发上个页面生命周期 onShow 的Bug [详情](https://ask.dcloud.net.cn/question/81830)
  + App-iOS platform to fix the bug that the onShow of the previous page life cycle cannot be triggered after the side slide is closed in pure nvue projects [Details](https://ask.dcloud.net.cn/question/81830)
  + H5平台 修复 uni.getImageInfo 回调信息中 path 错误的Bug [详情](https://ask.dcloud.net.cn/question/82793)
  + H5 platform Fix the bug of wrong path in uni.getImageInfo callback information [Details](https://ask.dcloud.net.cn/question/82793)
  + H5平台 修复 路由后退时弹出的 picker 无法自动关闭的Bug [详情](https://ask.dcloud.net.cn/question/82684)
  + H5 platform Fix the bug that the picker that pops up cannot be automatically closed when the route goes back [Details](https://ask.dcloud.net.cn/question/82684)
  + H5平台 修复 在夸克浏览器（iOS）onReachBottom 生命周期只触发一次的Bug [详情](https://ask.dcloud.net.cn/question/67636)
  + H5 platform Fix the bug that onReachBottom is only triggered once in the life cycle of Quark Browser (iOS) [Details](https://ask.dcloud.net.cn/question/67636)
  + H5平台 修复 在手机QQ浏览器 onReachBottom 无法触发的Bug [详情](https://ask.dcloud.net.cn/question/82795)
  + H5 platform Fix bug that onReachBottom cannot be triggered in mobile QQ browser [Details](https://ask.dcloud.net.cn/question/82795)
  + H5平台 修复 在网络断开的情况下 SocketTask.send 回调不正确的Bug [#744](https://github.com/dcloudio/uni-app/issues/744)
  + H5 platform Fix the bug that the SocketTask.send callback is incorrect in the case of network disconnection [#744](https://github.com/dcloudio/uni-app/issues/744)
  + 微信小程序 调整微信基础库版本为2.9.2，解决微信2.9.3基础库input事件不触发的Bug [详情](https://developers.weixin.qq.com/community/develop/doc/000a067cd0c6102d0d79558e65bc00?highLine=bindinput)
  + Wechat applet adjusted the version of Wechat base library to 2.9.2, and solved the bug that the input event of Wechat 2.9.3 base library was not triggered [Details](https://developers.weixin.qq.com/community/develop/doc/000a067cd0c6102d0d79558e65bc00 ?highLine=bindinput)
  + 钉钉小程序 修复 多层组件嵌套的情况下，子组件生命周期不触发的Bug
  + DingTalk applet fixes the bug that the life cycle of subcomponents does not trigger when multiple layers of components are nested
  + 百度小程序 修复 onShow在onLoad之前触发的Bug [详情](https://ask.dcloud.net.cn/question/82822)
  + Baidu applet to fix the bug that onShow triggers before onLoad [Details](https://ask.dcloud.net.cn/question/82822)
* 【5+App插件】
* 【5+App Plugins】
  + iOS平台 修复 创建本地消息（plus.push.createMessage）在iOS10及以上系统只显示最后一条的Bug [详情](https://ask.dcloud.net.cn/question/82560)
  + iOS platform Fix the bug of creating a local message (plus.push.createMessage) in iOS10 and above, only the last one is displayed [Details](https://ask.dcloud.net.cn/question/82560)

#### 2.4.1.20191114
* 【uni-app】
  + 【重要】公告：非自定义组件模式停止支持 [详情](https://ask.dcloud.net.cn/article/36385)
  + [Important] Announcement: Support for non-custom component mode stopped [Details](https://ask.dcloud.net.cn/article/36385)
  + 【重要】nvue文件编译模式默认从 weex 模式修改为 uni-app 模式。推荐使用多端可用、更成熟、组件更丰富的 uni-app 模式。如仍需使用 weex 模式，需在manifest中手动配置
  + [Important] The nvue file compilation mode is changed from weex mode to uni-app mode by default. It is recommended to use the uni-app mode with multi-terminal availability, more mature and richer components. If you still need to use weex mode, you need to configure it manually in the manifest
  + 【重要】uni ui 新版正式发布，同时兼容vue和nvue。欢迎插件市场作者也升级自己的组件，同时兼容nvue [详情](https://uniapp.dcloud.io/component/README?id=uniui)
  + [Important] The new version of uni ui is officially released, compatible with both vue and nvue. Plug-in market authors are welcome to upgrade their components to be compatible with nvue [details](https://uniapp.dcloud.io/component/README?id=uniui)
  + App平台 新增 自定义组件模式下的 crypto.getRandomValues 方法，获取符合密码学要求的安全随机值
  + App platform adds the crypto.getRandomValues method in custom component mode to obtain secure random values that meet cryptographic requirements
  + App平台 新增 生物认证API，包括指纹和 Apple Face ID [详情](https://uniapp.dcloud.io/api/system/authentication)
  + App platform Added biometric authentication API, including fingerprint and Apple Face ID [Details](https://uniapp.dcloud.io/api/system/authentication)
  + APP平台 新增 nvue picker 组件支持多列
  + APP platform Added nvue picker component to support multiple columns
  + APP平台 优化 picker、扫码、选择位置、打开位置API的界面通过原生实现，提升性能体验（nvue为weex编译模式时未优化）
  + APP platform Optimize the interface of picker, scan code, select location, and open location API through native implementation to improve performance experience (nvue is not optimized when it is compiled in weex mode)
  + APP平台 修复 swiper 设置为autoplay时滑动导致速度加快的Bug [详情](https://ask.dcloud.net.cn/question/82431)
  + APP platform Fix the bug that swiper speeds up when swiper is set to autoplay [Details](https://ask.dcloud.net.cn/question/82431)
  + App平台 修复 uni.requestPayment API 回调结果中没有支付收据的Bug [详情](https://github.com/dcloudio/uni-app/issues/621#issuecomment-518001954)
  + App platform Fix the bug that there is no payment receipt in the uni.requestPayment API callback result [Details](https://github.com/dcloudio/uni-app/issues/621#issuecomment-518001954)
  + App-Android平台 优化 weex原生渲染引擎的圆角和边框绘制效率
  + App-Android platform Optimize the rounded corners and border drawing efficiency of the weex native rendering engine
  + App-Android平台 修复 tabBar 页面真机运行可能无法同步更新的Bug
  + App-Android platform Fix the bug that the tabBar page may not be updated synchronously when running on a real machine
  + App-Android平台 修复 64位专用包 启动时概率出现白屏的Bug [详情](https://ask.dcloud.net.cn/question/79556)
  + App-Android platform Fix the bug that the 64-bit special package may appear white screen when starting up [Details](https://ask.dcloud.net.cn/question/79556)
  + App-Android平台 修复 input 组件在部分场景获取焦点可能引起软键盘闪现后自动关闭的Bug [详情](https://ask.dcloud.net.cn/question/81642)
  + App-Android platform Fix the bug that the input component may automatically close after the soft keyboard flashes when the input component gets focus in some scenes [Details](https://ask.dcloud.net.cn/question/81642)
  + App-Android平台 修复 nvue input 组件密码框焦点切换时可能出现自动关闭软键盘的Bug [详情](https://ask.dcloud.net.cn/question/81779)
  + App-Android platform Fix the bug that the soft keyboard may be automatically closed when the focus of the password box of the nvue input component is switched [Details](https://ask.dcloud.net.cn/question/81779)
  + App-Android平台 修复 nvue map 组件在真机运行同步更新时可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/81364)
  + App-Android platform Fix the bug that the nvue map component may not be displayed when the real machine is running synchronous update [Details](https://ask.dcloud.net.cn/question/81364)
  + App-Android平台 修复 nvue video 组件在应用首页中可能无法正常播放视频的Bug [详情](https://ask.dcloud.net.cn/question/81877)
  + App-Android platform Fix the bug that the nvue video component may not play the video normally in the application home page [Details](https://ask.dcloud.net.cn/question/81877)
  + App-Android平台 修复 nvue video 组件前后台切换不触发 onShow/onHide 事件的Bug [详情](https://ask.dcloud.net.cn/question/81812)
  + App-Android platform Fixed the bug that the onShow/onHide event was not triggered when switching between the front and back of the nvue video component [Details](https://ask.dcloud.net.cn/question/81812)
  + App-Android平台 修复 websocket 传输数据类型为 ArrayBuffer 某些情况下报错的Bug [详情](https://ask.dcloud.net.cn/question/81687)
  + App-Android platform Fix the bug that the websocket transmission data type is ArrayBuffer in some cases. [Details](https://ask.dcloud.net.cn/question/81687)
  + App-iOS平台 修复 nvue页面在iOS13及以上系统默认字体不对的Bug
  + App-iOS platform Fix the bug that the default font of nvue page is wrong in iOS13 and above system
  + App-iOS平台 修复 nvue list 组件 scroll 事件返回的 isDragging 属性不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/932)
  + App-iOS platform Fix the bug that the isDragging property returned by the scroll event of the nvue list component is incorrect [Details](https://github.com/dcloudio/uni-app/issues/932)
  + App-iOS平台 修复 nvue list 组件滚动时 scrollStart/scrollEnd 事件返回参数值为负数的Bug
  + App-iOS platform Fix the bug that the scrollStart/scrollEnd event returns a negative parameter value when the nvue list component scrolls
  + App-iOS平台 修复 nvue swiper 组件动态修改 current 属性触发 transition 事件返回的参数不准确的Bug
  + App-iOS platform Fix the bug that the parameter returned by the transition event is inaccurate when the nvue swiper component dynamically modifies the current property to trigger the transition event
  + App-iOS平台 修复 uni.hideKeyboard 不能收起软键盘的Bug [#903](https://github.com/dcloudio/uni-app/issues/903)
  + App-iOS platform Fix the bug that uni.hideKeyboard cannot hide the soft keyboard [#903](https://github.com/dcloudio/uni-app/issues/903)
  + App-iOS平台 修复 picker 组件可能被软键盘遮挡的Bug [#888](https://github.com/dcloudio/uni-app/issues/888)
  + App-iOS platform Fix the bug that the picker component may be blocked by the soft keyboard [#888](https://github.com/dcloudio/uni-app/issues/888)
  + App-iOS平台 修复 input 组件输入中文时失焦导致文字消失的Bug [#888](https://github.com/dcloudio/uni-app/issues/888)
  + App-iOS platform Fix the bug that the text disappears when the input component loses focus when inputting Chinese [#888](https://github.com/dcloudio/uni-app/issues/888)
  + App-iOS平台 修复 nvue text 组件设置 line-height 属性可能引起显示不正确的Bug
  + App-iOS platform Fix the bug that the line-height property of nvue text component may cause incorrect display
  + App-iOS平台 修复 nvue live-pusher 组件设置 whiteness 属性为false不生效的Bug
  + App-iOS platform Fix the bug that the whiteness property of nvue live-pusher component does not take effect when the whiteness property is set to false
  + App-iOS平台 修复 nvue barcode 组件动态修改属性不生效的Bug
  + App-iOS platform Fix the bug that the dynamic modification of the nvue barcode component does not take effect
  + H5平台 修复 wxs getDataset() 函数获取不到参数的Bug。uni ui 的 swiperaction 组件的问题也因此得到修复 [详情](https://ask.dcloud.net.cn/question/82718)
  + H5 platform Fixed the bug that the wxs getDataset() function could not get parameters. The problem of the swiperaction component of uni ui has also been fixed [details](https://ask.dcloud.net.cn/question/82718)
  + H5平台 修复 picker 组件初始值不是合法日期/时间的情况下返回值不正确的Bug
  + H5 platform Fix the bug that the return value is incorrect when the initial value of the picker component is not a valid date/time
  + 百度小程序 修复 新版百度小程序生命周期下组件内mounted不触发的Bug
  + Baidu applet fixes the bug that mounted in the component does not trigger under the life cycle of the new Baidu applet
  + 百度小程序 修复 页面 onShow 触发两次的Bug [详情](https://ask.dcloud.net.cn/question/81243)
  + Baidu applet to fix the bug that the page onShow triggers twice [Details](https://ask.dcloud.net.cn/question/81243)
  + 百度小程序 修复 3.105.17 以上的调试库页面 onReady 事件比 onLoad 事件执行的要早的Bug [详情](https://ask.dcloud.net.cn/question/81504)
  + Baidu applet Fix the bug that the onReady event of the debug library page above 3.105.17 is executed earlier than the onLoad event [Details](https://ask.dcloud.net.cn/question/81504)
  + uni ui 优化 uni-swipe-action 组件在nvue中使用 BindingX ，使跟手动画更流畅
  + uni ui optimize the uni-swipe-action component to use BindingX in nvue to make the follower animation smoother
  + uni ui 优化 uni-list 组件在nvue中使用原生list组件，提升性能
  + uni ui optimizes the uni-list component to use the native list component in nvue to improve performance
  + uni ui 修复 uniNoticeBar跑马灯组件，在Android平台webview版本高于66时，且在隐藏的tabbar的vue页面中使用，造成App卡顿的Bug [详情](https://ask.dcloud.net.cn/article/36537)
  + uni ui Fix the uniNoticeBar marquee component. When the Android platform webview version is higher than 66, and it is used in the vue page of the hidden tabbar, it causes the bug of the App freeze [Details](https://ask.dcloud.net. cn/article/36537)
  + hello uni-app 新增 生物认证API示例
  + hello uni-app Added biometric authentication API example
  + 新闻模板 优化 顶部tab栏目增加下滑横线（支持app-nvue、app-vue、h5、微信小程序、qq小程序，其他端暂无下滑横线）
  + News template optimization Added a sliding horizontal line in the top tab column (supports app-nvue, app-vue, h5, WeChat applet, qq applet, and there is no sliding horizontal line on other ends)
* 【5+App插件】
* 【5+App Plugins】
  + Android平台 新增 获取移动智能设备标识公共服务平台提供的匿名设备标识符[OAID](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID)、开发者匿名设备标识符VAID、及应用匿名设备标识符AAID，可用于解决Android10无法获取设备标识（如IMEI、IMSI、Wi-Fi MAC地址等）的问题
  + Android platform newly added the anonymous device identifier [OAID](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID) provided by the public service platform for obtaining mobile smart device identification, developer Anonymous device identifier VAID and application anonymous device identifier AAID can be used to solve the problem that Android 10 cannot obtain device identifiers (such as IMEI, IMSI, Wi-Fi MAC address, etc.)
  + Android平台 新增 在manifest中配置 App 启动时申请设备IMEI等信息的权限策略，默认调整为应用第一次启动时申请 [详情](https://ask.dcloud.net.cn/article/36549)
  + The Android platform has added a permission policy to apply for device IMEI and other information when the app is launched in the manifest. The default adjustment is to apply for the first time the app is launched [Details](https://ask.dcloud.net.cn/article/36549 )
  + Android平台 新增 Webview窗口支持暂停（[pause](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.pause)）和恢复（[resume](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.resume)）操作，解决页面中如果存在持续渲染隐藏后可能引起卡顿的Bug [详情](https://ask.dcloud.net.cn/article/36537)
  + Added support for pause ([pause](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.pause)) and resume ([resume](https: //www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.resume)) operation, to solve the bug that may cause stuttering if there is continuous rendering and hiding in the page [Details](https:// ask.dcloud.net.cn/article/36537)
  + Android平台 新增 文件上传支持配置分块上传参数[chunkSize](https://www.html5plus.org/doc/zh_cn/uploader.html#plus.uploader.UploadOptions)，解决不能真实返回上传进度的Bug [详情](https://ask.dcloud.net.cn/question/79930)
  + Added support for uploading files on Android platform [chunkSize](https://www.html5plus.org/doc/zh_cn/uploader.html#plus.uploader.UploadOptions), to solve the bug that the upload progress cannot be returned [Details](https://ask.dcloud.net.cn/question/79930)
  + Android平台 修复 Webview子窗口先隐藏（hide）再添加（append）到父窗口依然显示的Bug [详情](https://ask.dcloud.net.cn/question/81427)
  + Android platform Fix the bug that the Webview child window is hidden (hide) and then added (append) to the parent window. [Details](https://ask.dcloud.net.cn/question/81427)
  + Android平台 修复 二维码（Barcode）扫描在设备横屏时显示异常的Bug [详情](https://ask.dcloud.net.cn/question/79997)
  + Android platform Fix the bug that the QR code (Barcode) scan is abnormal when the device is horizontally displayed [Details](https://ask.dcloud.net.cn/question/79997)
  + Android平台 修复 创建视频播放控件（VideoPlayer）时，没有开始播放视频也会停止后台背景音频的Bug [详情](https://ask.dcloud.net.cn/question/82034)
  + Android platform Fix the bug that when creating a video player control (VideoPlayer), the background audio will stop when the video is not started [Details](https://ask.dcloud.net.cn/question/82034)
  + Android平台 优化 视频播放的操作条的拖动误触和图标美化问题
  + Android platform optimization The operation bar of video playback is accidentally touched by dragging and the icon is beautified
  + Android平台 修复 在部分设备上插拔usb硬件设备可能引起应用重启的Bug [详情](https://ask.dcloud.net.cn/question/81362)
  + Android platform Fix the bug that plugging and unplugging usb hardware devices on some devices may cause the application to restart [Details](https://ask.dcloud.net.cn/question/81362)
  + iOS平台 修复 Webview窗口使用WKWebview内核时截屏绘制（draw）设置 clip 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/45969)
  + iOS platform Fix the bug that the clip parameter is invalid when the Webview window uses the WKWebview kernel [Details](https://ask.dcloud.net.cn/question/45969)
  + iOS平台 修复 Webview窗口全部关闭（close）时可能引起应用崩溃的Bug
  + iOS platform Fix the bug that may cause the application to crash when all Webview windows are closed (close)
  + iOS平台 修复 Webview窗口设置自定义标题栏按钮点击时可能引起应用崩溃的Bug
  + iOS platform Fix the bug that may cause the application to crash when the button of the custom title bar is set in the Webview window
  + iOS平台 修复 视频播放（VideoPlayer）控件无法自动识别视频方向的Bug [详情](https://ask.dcloud.net.cn/question/79320)
  + iOS platform Fix the bug that the VideoPlayer control cannot automatically recognize the video direction [Details](https://ask.dcloud.net.cn/question/79320)
  + iOS平台 修复 调用摄像头拍照（captureImage）时设置resolution参数为high、low、medium时可能引起图片显示方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/80814)
  + iOS platform Fixed a bug that may cause the image to display incorrectly when the resolution parameter is set to high, low, and medium when calling the camera to take a photo (captureImage). [Details](https://ask.dcloud.net.cn/question/80814)
  + iOS平台 修复 系统相册选择图片（plus.gallery.pick）可能返回不是选中图片的Bug [详情](https://ask.dcloud.net.cn/question/81055)
  + iOS platform Fixed the bug that the system album selection picture (plus.gallery.pick) may return a bug that is not the selected picture [Details](https://ask.dcloud.net.cn/question/81055)
  + iOS平台 修复 文件下载暂停后再继续文件名后面会自动添加数字的Bug [详情](https://ask.dcloud.net.cn/question/66523)
  + iOS platform Fix the bug that the file name will automatically add a number after the file download is paused and then resume [Details](https://ask.dcloud.net.cn/question/66523)
  + iOS平台 修复 平台绝对路径转换成本地URL路径（plus.io.convertAbsoluteFileSystem）可能返回null的Bug [详情](https://ask.dcloud.net.cn/question/51954)
  + iOS platform Fix the bug that the platform absolute path is converted to the local URL path (plus.io.convertAbsoluteFileSystem) may return null [Details](https://ask.dcloud.net.cn/question/51954)
  + iOS平台 修复 设置应用屏幕常亮（plus.device.setWakelock）在iOS13.1.3系统可能引起崩溃的Bug
  + iOS platform Fix the bug that the setting application screen is always on (plus.device.setWakelock) may cause a crash in the iOS13.1.3 system
  + iOS平台 修复 Native.JS获取当前Webview窗口的原生实例对象（plus.ios.currentWebview）可能返回为空的Bug [详情](https://ask.dcloud.net.cn/question/81037)
  + iOS platform Fixed the bug that Native.JS obtained the native instance object of the current Webview window (plus.ios.currentWebview) may return to be empty [Details](https://ask.dcloud.net.cn/question/81037)

#### 2.3.7.20191024
* 【uni-app】
  + 修复 在 App.vue 的 onLaunch 中，不支持 this.globalData 的 Bug
  + Fix bug that this.globalData is not supported in onLaunch of App.vue
  + H5平台 修复 开启 treeShaking 后 picker 组件无法使用的Bug [#841](https://github.com/dcloudio/uni-app/issues/841)
  + H5 platform Fix the bug that the picker component cannot be used after treeShaking is enabled [#841](https://github.com/dcloudio/uni-app/issues/841)
  + App-Android平台 修复 input组件使用特定输入法（如搜狗）时，无法正常切换键盘模式的Bug [详情](https://ask.dcloud.net.cn/question/80172)
  + App-Android platform Fix the bug that the keyboard mode cannot be switched normally when the input component uses a specific input method (such as Sogou) [Details](https://ask.dcloud.net.cn/question/80172)
  + App-iOS平台 修复 nvue map组件的标记点（markers）的 iconPath 属性值设置为相对路径时可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/79444)
  + App-iOS platform Fix a bug that may cause the app to crash when the iconPath attribute value of the markers of the nvue map component is set to a relative path [Details](https://ask.dcloud.net.cn/question/79444)
* 【5+App插件】
* 【5+App Plugins】
  + Android平台 修复 微信分享内容包含网络图片时，第二次操作分享会失败的Bug [详情](https://ask.dcloud.net.cn/question/81234)
  + Android platform Fix the bug that the second sharing operation will fail when the WeChat sharing content contains network pictures [Details](https://ask.dcloud.net.cn/question/81234)
  + iOS平台 修复 图片预览（plus.nativeUI.previewImage）3张图片且current属性设置为2时显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/79564)
  + iOS platform Fix image preview (plus.nativeUI.previewImage) when 3 images are displayed and the current property is set to 2, the bug is displayed abnormally [Details](https://ask.dcloud.net.cn/question/79564)
  + 5+引擎开源，开发者可自主编译自己的引擎，[Android地址](https://github.com/dcloudio/H5P.Android)、[iOS引擎地址](https://github.com/dcloudio/H5P.iOS)
  + 5+ engines are open source, developers can compile their own engines, [Android address](https://github.com/dcloudio/H5P.Android), [iOS engine address](https://github.com/dcloudio /H5P.iOS)

#### 2.3.6.20191021
* 【uni-app】
  + App平台 修复 nvue bindingx API bind 参数导致异常的Bug [详情](https://ask.dcloud.net.cn/question/80735)
  + App platform Fix the bug that the nvue bindingx API bind parameter causes an exception [Details](https://ask.dcloud.net.cn/question/80735)
  + App平台 修复 tabBar 设置 borderStyle 为 black 不生效的Bug [详情](https://ask.dcloud.net.cn/question/80921)
  + App platform Fix the bug that setting the borderStyle of the tabBar to black does not take effect [Details](https://ask.dcloud.net.cn/question/80921)
  + App平台 修复 tabBar 使用默认高度时 uni.getSystemInfo 获取的 windowHeight 不正确的Bug [详情](https://ask.dcloud.net.cn/question/80888)
  + App platform Fix the bug that the windowHeight obtained by uni.getSystemInfo is incorrect when the tabBar uses the default height [Details](https://ask.dcloud.net.cn/question/80888)
  + App-Android平台 修复 tabBar 调用 uni.setTabBarItem 动态设置tabBar某一项内容导致选中状态失效的Bug [详情](https://ask.dcloud.net.cn/question/80941)
  + App-Android platform Fix the bug that the selected state is invalid when the tabBar calls uni.setTabBarItem to dynamically set a certain content of the tabBar [Details](https://ask.dcloud.net.cn/question/80941)
  + App-iOS平台 修复 tabBar 页面因内存不足而白屏后无法自动恢复的Bug [详情](https://ask.dcloud.net.cn/question/80927)
  + App-iOS platform Fix the bug that the tabBar page cannot be automatically restored after the blank screen due to insufficient memory [Details](https://ask.dcloud.net.cn/question/80927)
  + App-iOS平台 修复 tabBar 设置 icon 图标可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/80946)
  + App-iOS platform Fix the bug that the tabBar setting icon icon may not be displayed [Details](https://ask.dcloud.net.cn/question/80946)
  + App-iOS平台 修复 nvue list组件 scroll 事件返回的参数缺少 isDragging 属性的Bug [详情](https://ask.dcloud.net.cn/question/80928)
  + App-iOS platform Fix the bug that the parameter returned by the scroll event of the nvue list component lacks the isDragging attribute [Details](https://ask.dcloud.net.cn/question/80928)
* 【5+App插件】
* 【5+App Plugins】
  + Android平台 修复 HBuilderX2.3.5引出的上传文件 uploadFile 可能失败的Bug [详情](https://ask.dcloud.net.cn/question/80815)
  + Android platform Fix the bug that uploadFile may fail when uploading files caused by HBuilderX2.3.5 [Details](https://ask.dcloud.net.cn/question/80815)

#### 2.3.5.20191018
* 【uni-app】
  + 【重要】App平台 重构 tabBar，原生支持 midButton（中间凸起），支持高度调节（App、H5默认高度统一为50px），降低内存占用，避免iOS白屏。注意不再支持通过 plus API 操作 tabBar [详情](https://uniapp.dcloud.io/collocation/pages?id=tabbar)
  + [Important] App platform Refactored tabBar, natively supports midButton (the middle bulge), supports height adjustment (the default height of App and H5 is unified to 50px), reduces memory usage, and avoids iOS white screen. Note that manipulating the tabBar via the plus API is no longer supported [details](https://uniapp.dcloud.io/collocation/pages?id=tabbar)
  + App平台 新增 nvue 云打包支持原生混淆源码 [详情](https://ask.dcloud.net.cn/article/36437)
  + App platform Added nvue cloud packaging to support native obfuscated source code [Details](https://ask.dcloud.net.cn/article/36437)
  + App平台 新增 nvue （uni-app编译模式）内置 bindingx 模块，可以免安装node模块直接使用
  + App platform Added nvue (uni-app compilation mode) built-in bindingx module, which can be used directly without installing node module
  + App平台 新增 nvue API uni.createSelectorQuery(仅支持id选择器)
  + App platform Added nvue API uni.createSelectorQuery (only supports id selector)
  + App平台 修复 nvue swiper组件纵向滚动时，transition 事件属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/79694)
  + App platform Fixed the bug that the value of the transition event attribute was incorrect when the nvue swiper component scrolled vertically [Details](https://ask.dcloud.net.cn/question/79694)
  + App平台 修复 nvue swiper组件设置 current 后滑动不触发 change 事件的Bug [详情](https://ask.dcloud.net.cn/question/79469)
  + App platform Fix the bug that the nvue swiper component does not trigger the change event after swiping after setting the current [Details](https://ask.dcloud.net.cn/question/79469)
  + App平台 修复 nvue 部分机型样式 width 设置为 750rpx 不会占满整个屏幕的Bug [详情](https://ask.dcloud.net.cn/question/79565)
  + App platform Fix the bug that the width of some nvue models is set to 750rpx and will not fill the entire screen [Details](https://ask.dcloud.net.cn/question/79565)
  + App平台 修复 nvue barcode组件扫码成功触发 marked 事件返回参数条码数据为空的Bug [详情](https://ask.dcloud.net.cn/question/79475)
  + App platform Fixed the bug that the nvue barcode component successfully triggered the marked event after scanning the code. [Details](https://ask.dcloud.net.cn/question/79475)
  + App平台 修复 uni.canvasGetImageData 和 uni.canvasPutImageData 位置大小不正确的Bug [详情](https://ask.dcloud.net.cn/question/79273)
  + App platform Fix the bug of incorrect position size of uni.canvasGetImageData and uni.canvasPutImageData [Details](https://ask.dcloud.net.cn/question/79273)
  + App平台 修复 使用 plus.webview API 手工创建webview时，默认注入uni-app组件样式，导致干扰html页面样式的Bug
  + App platform fix When using the plus.webview API to manually create a webview, the uni-app component style is injected by default, resulting in a bug that interferes with the style of the html page
  + App-Android平台 修复 WebSocket 在Android4.4手机上使用 ws 协议时无法连接服务器的Bug [详情](https://ask.dcloud.net.cn/question/79534)
  + App-Android platform Fix the bug that WebSocket cannot connect to the server when using ws protocol on Android4.4 mobile phones [Details](https://ask.dcloud.net.cn/question/79534)
  + App-Android平台 修复 WebSocket 传输二进制数据时 uni.onSocketMessage 返回为字符串数据的Bug
  + App-Android platform Fix the bug that uni.onSocketMessage returns string data when WebSocket transmits binary data
  + App-Android平台 修复 nvue video组件的 show-progress 属性值设置为 false 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/788)
  + App-Android platform Fix the bug that the value of the show-progress attribute of the nvue video component is set to false [Details](https://github.com/dcloudio/uni-app/issues/788)
  + App-Android平台 修复 nvue video组件在 swiper 中实现仿抖音效果时滑动不灵敏的Bug
  + App-Android platform to fix the bug that nvue video component does not slide sensitively when it implements the vibrato effect in swiper
  + App-Android平台 修复 nvue live-pusher组件动态设置 beauty whiteness 属性值无效的Bug [详情](https://ask.dcloud.net.cn/question/80285)
  + App-Android platform Fix the bug that the nvue live-pusher component dynamically sets the beauty whiteness attribute value invalid [Details](https://ask.dcloud.net.cn/question/80285)
  + App-Android平台 修复 nvue live-pusher组件没有开始推流时无法切换摄像头的Bug
  + App-Android platform Fixed the bug that the camera could not be switched when the nvue live-pusher component did not start streaming
  + App-Android平台 修复 nvue image组件的 src 属性值为空时 placeholder 无法正常显示的Bug
  + App-Android platform Fix the bug that the placeholder cannot be displayed normally when the src attribute value of the nvue image component is empty
  + App-iOS平台 新增 nvue live-pusher组件支持 orientation 属性设置画面方向 
  + App-iOS platform Added nvue live-pusher component to support orientation property to set screen orientation
  + App-iOS平台 修复 nvue map组件的点击控件事件 @controltap 不响应的Bug [详情](https://ask.dcloud.net.cn/question/80170)
  + App-iOS platform Fix the bug that the click control event @controltap of nvue map component does not respond [Details](https://ask.dcloud.net.cn/question/80170)
  + 百度小程序 修复 开发时修改保存页面，百度模拟器页面无法正常刷新的Bug
  + Baidu applet fixes the bug that the page of Baidu simulator cannot be refreshed normally after modifying the save page during development
  + uni ui 实现nvue化，源码及示例工程详见：[https://github.com/dcloudio/uni-ui/tree/nvue-uni-ui](https://github.com/dcloudio/uni-ui/tree/nvue-uni-ui)
  + uni ui to realize nvue, see the source code and example project: [https://github.com/dcloudio/uni-ui/tree/nvue-uni-ui](https://github.com/dcloudio/uni- ui/tree/nvue-uni-ui)
  + uni统计 修复 关闭统计的情况下，统计系统事件（如：登录、分享）还能上报数据的 Bug
  + uni statistics Fixed a bug where statistics system events (such as login, sharing) can still report data when statistics are turned off
* 【5+App插件】
* 【5+App Plugins】
  + 【重要】Android平台 更新 个推/UniPush SDK（4.3.7.0），解决无法上架谷歌应用市场（GooglePlay）的问题 [详情](https://ask.dcloud.net.cn/article/36479)
  + [Important] Android platform update Getui/UniPush SDK (4.3.7.0) to solve the problem that Google Play cannot be listed [Details](https://ask.dcloud.net.cn/article/36479)
  + 【重要】Android平台 修复 MIUI11中toast背景为白色，导致前景色无法看清的Bug [详情](https://ask.dcloud.net.cn/question/80328)
  + [Important] Android platform Fix the bug that the toast background in MIUI11 is white, which makes the foreground color invisible [Details](https://ask.dcloud.net.cn/question/80328)
  + 【重要】iOS平台 更新 微信登录、分享、支付SDK（1.8.6.1），适配iOS13，需要配置通用链接（Universal Links）[详情](https://ask.dcloud.net.cn/article/36445)
  + [Important] The iOS platform updates the WeChat login, sharing, and payment SDK (1.8.6.1) to adapt to iOS13, and you need to configure Universal Links [Details](https://ask.dcloud.net.cn/article/ 36445)
  + Android平台 更新 微信登录、分享、支付SDK（5.4.3），适配Android10
  + Android platform update WeChat login, sharing, payment SDK (5.4.3), compatible with Android10
  + Android平台 更新 QQ登录、分享SDK（3.3.5），新浪微博登录、分享SDK（4.4.1）
  + Android platform update QQ login and share SDK (3.3.5), Sina Weibo login and share SDK (4.4.1)
  + Android平台 更新 高德地图SDK（6.8.0），解决在部分手机上可能出现黑屏的Bug
  + Android platform update AutoNavi Map SDK (6.8.0), solve the bug that black screen may appear on some mobile phones
  + Android平台 修复 数据库查询SQL语句（plus.sqlite.selectSql）返回结果中的浮点数据类型精度丢失的Bug [详情](https://ask.dcloud.net.cn/question/79541)
  + Android platform Fixed the bug that the precision of the floating point data type in the returned result of the database query SQL statement (plus.sqlite.selectSql) [Details](https://ask.dcloud.net.cn/question/79541)
  + Android平台 修复 在双卡手机上获取国际移动用户识别码（IMSI）只能返回一个值的Bug [详情](https://ask.dcloud.net.cn/question/79863)
  + Android platform Fix the bug that the International Mobile Subscriber Identity (IMSI) can only return one value on dual SIM phones [Details](https://ask.dcloud.net.cn/question/79863)
  + Android平台 修复 Android10设备上获取设备唯一标识（UUID）为空的Bug [详情](https://ask.dcloud.net.cn/question/80200)
  + Android platform Fix the bug that the device unique identifier (UUID) is empty on Android10 devices [Details](https://ask.dcloud.net.cn/question/80200)
  + Android平台 修复 上传任务（plus.uploader.createUpload）提交的请求头中包含多个Cookie的Bug [详情](https://ask.dcloud.net.cn/question/74619)
  + Android platform Fix the bug that the request header submitted by the upload task (plus.uploader.createUpload) contains multiple cookies [Details](https://ask.dcloud.net.cn/question/74619)
  + Android平台 修复 蓝牙断开设备连接（plus.bluetooth.closeBLEConnection）可能不触发onBLEConnectionStateChange事件的Bug
  + Android platform Fix the bug that the onBLEConnectionStateChange event may not be triggered when the bluetooth disconnects the device (plus.bluetooth.closeBLEConnection)
  + Android平台 修复 微信分享图片无法加载带重定向的url链接的Bug
  + Android platform Fix the bug that WeChat sharing pictures cannot be loaded with redirected url links
  + Android平台 修复 Webview窗口动画在特定情况下可能会将pop-in/out动画自动变为slide-in/out-right的Bug
  + Android platform Fixed the bug that the Webview window animation may automatically change the pop-in/out animation to slide-in/out-right under certain circumstances
  + iOS平台 更新 QQ登录、分享SDK（3.3.6），新浪微博登录、分享SDK（3.2.5）
  + iOS platform update QQ login and share SDK (3.3.6), Sina Weibo login and share SDK (3.2.5)
  + iOS平台 修复 iOS13上配置后台播放音乐可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/80253)
  + iOS platform Fixed a bug that may cause the app to crash when configuring background music on iOS13 [Details](https://ask.dcloud.net.cn/question/80253)
  + iOS平台 修复 图片压缩（plus.zip.compressImage）设置缩放图片的宽度（width）和高度（height）无效的Bug [详情](https://ask.dcloud.net.cn/question/79993)
  + iOS platform Fix the bug that image compression (plus.zip.compressImage) is invalid when setting the width (width) and height (height) of the zoomed image [Details](https://ask.dcloud.net.cn/question/79993)
  + iOS平台 修复 iPhone11上查询设备是否为刘海屏（plus.navigator.hasNotchInScreen）返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/80291)
  + iOS platform Fix the bug that the return value is incorrect on iPhone11 when querying whether the device is NotchInScreen (plus.navigator.hasNotchInScreen) [Details](https://ask.dcloud.net.cn/question/80291)
  + iOS平台 修复 视频播放（VideoPlayer）控件设置 show-progress 属性不生效的Bug
  + iOS platform fix the bug that the video player (VideoPlayer) control set the show-progress property does not take effect
  + iOS平台 修复 视频播放（VideoPlayer）控件设置 autoplay 属性值为 true 后加载雪花可能显示不正常的Bug
  + For iOS platform, fix the bug that snowflakes may be displayed abnormally after setting the autoplay property value of the VideoPlayer control to true
  + iOS平台 修复 指纹识别（Fingerprint）判断当前设备是否支持（plus.fingerprint.isSupport）返回值可能不正确的Bug
  + iOS platform Fix the bug that the return value of fingerprint identification (Fingerprint) to determine whether the current device supports (plus.fingerprint.isSupport) may be incorrect
  + iOS平台 修复 Webview窗口设置软键盘模式（softinputMode）为adjustResize时，新开页面并弹出软键盘后返回可能白屏的Bug
  + iOS platform Fixed the bug that when the softinputMode of the Webview window is set to adjustResize, the new page will return to a white screen after the soft keyboard pops up.
  + iOS平台 修复 数据库（SQLite）多次打开数据库后，调用判断数据库是否打开（plus.sqlite.isOpenDatabase）返回值可能不正确的Bug
  + iOS platform Fix the bug that after the database (SQLite) has been opened multiple times, the return value of calling to determine whether the database is open (plus.sqlite.isOpenDatabase) may be incorrect
  + iOS平台 修复 数据库（SQLite）在HX中真机运行可能出现SQL语句操作（plus.sqlite.executeSql）无法正常执行的Bug
  + iOS platform fixed the bug that the SQL statement operation (plus.sqlite.executeSql) may not be executed normally when the database (SQLite) is running on the real machine in HX
  + iOS平台 修复 系统相册选择图片文件时如果相册中没有图片返回时loading界面不消失的Bug
  + iOS platform Fix the bug that the loading interface does not disappear when the system album selects a picture file if there is no picture in the album and returns

#### 2.3.3.20190923
* 【uni-app】
  + App-Android平台 新增 uni.request 网络请求增加参数 sslVerify，配置是否验证 ssl 证书。但建议使用普遍受信的证书而不是忽略证书校验。[详情](https://uniapp.dcloud.io/api/request/request)
  + App-Android platform Added the uni.request network request parameter sslVerify to configure whether to verify the ssl certificate. But it is recommended to use a generally trusted certificate instead of ignoring certificate verification. [Details](https://uniapp.dcloud.io/api/request/request)
  + App-iOS平台 调整 非自定义组件模式 逻辑层默认从 WKWebview 切回 UIWebview，避免 uni.request 无法跨域的问题。但仍建议开发者尽快升级自定义组件模式
  + App-iOS platform adjustment Non-custom component mode The logic layer switches back to UIWebview from WKWebview by default to avoid the problem that uni.request cannot cross domains. However, it is still recommended that developers upgrade the custom component mode as soon as possible
  + App-iOS平台 新增 非自定义组件模式 iOS13上页面无法滚动的问题，如不能很快升级为自定义组件模式，可临时使用本文的方案2来解决，[详情](https://ask.dcloud.net.cn/article/36410)
  + App-iOS platform adds non-custom component mode to the problem that pages cannot be scrolled on iOS13. If you cannot upgrade to custom component mode soon, you can temporarily use solution 2 of this article to solve the problem. [Details](https://ask .dcloud.net.cn/article/36410)
  + App-iOS平台 修复 nvue swiper组件包含子组件少于3个时布局可能不正确的Bug
  + App-iOS platform Fix the bug that the layout may be incorrect when the nvue swiper component contains less than 3 sub-components
  + App-iOS平台 修复 nvue video组件退出全屏动画会闪现底层组件的Bug 
  + App-iOS platform Fix the bug that the underlying component will flash when the nvue video component exits the full-screen animation
  + H5端 修复 监听页面滚动（onPageScroll）后切换页面报错的Bug [详情](https://ask.dcloud.net.cn/question/78955)
  + H5 side Fix the bug of switching page error after monitoring page scroll (onPageScroll) [Details](https://ask.dcloud.net.cn/question/78955)
* 【5+App插件】
* 【5+App Plugins】
  + iOS平台 修复 iOS13上保存图片到系统相册（plus.gallery.save）失败的Bug
  + iOS platform Fix the bug of failing to save pictures to the system album (plus.gallery.save) on iOS13

#### 2.3.2.20190921
* 【uni-app】
  + App平台 修复 uni.writeBLECharacteristicValue 无法写入数据的Bug [详情](https://ask.dcloud.net.cn/question/79204)
  + App platform Fix the bug that uni.writeBLECharacteristicValue cannot write data [Details](https://ask.dcloud.net.cn/question/79204)
  + App平台 修复 调用 uni.pageScrollTo 时页面内元素 fixed 定位失效的Bug [详情](https://ask.dcloud.net.cn/question/73179)
  + App platform Fix the bug that the fixed positioning of the elements in the page is invalid when calling uni.pageScrollTo [Details](https://ask.dcloud.net.cn/question/73179)
  + App平台 修复 调用 uni.switchTab 某些情况下白屏的Bug
  + App platform to fix the bug of white screen when calling uni.switchTab in some cases
  + App平台 修复 nvue map组件的点击标记点事件（@markertap）参数中markerId属性不正确的Bug
  + App platform Fix the bug that the markerId attribute in the parameter of the click marker event (@markertap) of the nvue map component is incorrect
  + App平台 修复 调用 uni.setNavigationBarColor 导致其他页面状态栏颜色一起改变的Bug
  + App platform fix the bug that calling uni.setNavigationBarColor causes the status bar color of other pages to change together
  + App平台 修复 应用启动后立刻调用 uni.hideTabBar 导致页面高度错误的Bug [详情](https://ask.dcloud.net.cn/question/77611)
  + App Platform Fix the bug that calls uni.hideTabBar immediately after the app starts, causing the page height to be wrong [Details](https://ask.dcloud.net.cn/question/77611)
  + App-iOS平台 修复 调用 uni.setNavigationBarColor 导致隐藏状态的导航栏显示的Bug
  + App-iOS platform Fix the bug that calling uni.setNavigationBarColor causes the hidden navigation bar to be displayed
  + App-iOS平台 修复 nvue swiper组件 垂直滑动且高度较低时内容可能出现重叠的Bug 
  + App-iOS platform Fix the bug that the content may overlap when the nvue swiper component slides vertically and the height is low
  + App-iOS平台 修复 nvue refresh组件 某些情况下闪退的Bug
  + App-iOS platform to fix the bug of nvue refresh component crashing in some cases
  + H5平台 修复 longpress 事件消息对象的 touches/changedTouches 属性不正确的Bug [详情](https://ask.dcloud.net.cn/question/79149)
  + H5 platform Fix the bug that the touches/changedTouches property of the longpress event message object is incorrect [Details](https://ask.dcloud.net.cn/question/79149)
  + uni统计 修复 网络异常时，上报重试机制失效的Bug
  + uni statistics Fix the bug that the reporting retry mechanism fails when the network is abnormal
* 【5+App插件】
* 【5+App Plugins】
  + Android平台 修复 系统相册选择文件（plus.gallery.pick）设置selected参数时多次选择失效的Bug [详情](https://ask.dcloud.net.cn/question/78931)
  + Android platform Fix the bug that multiple selections fail when the system album selection file (plus.gallery.pick) is set to the selected parameter [Details](https://ask.dcloud.net.cn/question/78931)
  + iOS平台 修复 视频播放（VideoPlayer）控件退出全屏后状态栏方向不对的Bug [详情](https://ask.dcloud.net.cn/question/79171)
  + iOS platform Fix the bug that the status bar is in the wrong direction after the VideoPlayer control exits the full screen [Details](https://ask.dcloud.net.cn/question/79171)
  + iOS平台 修复 iOS13上获取系统状态栏样式（plus.navigator.getStatusBarStyle）总是反馈dark的Bug。此问题同时会导致uni-app状态栏颜色混乱的Bug [详情](https://ask.dcloud.net.cn/question/79189)
  + iOS platform Fix the bug that getting the system status bar style (plus.navigator.getStatusBarStyle) always returns dark on iOS13. This problem will also cause a bug in the color confusion of the uni-app status bar [Details](https://ask.dcloud.net.cn/question/79189)
  + iOS平台 修复 iOS13上获取系统状态高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/79219)
  + iOS platform Fix the bug that the height of the system status is incorrect on iOS13 [Details](https://ask.dcloud.net.cn/question/79219)
  + iOS平台 修复 iOS13上WKWebview的input组件设置自动聚焦无效的Bug
  + iOS platform Fix the bug that the automatic focus setting of the input component of WKWebview on iOS13 is invalid

#### 2.3.1.20190920
* 【uni-app】
  + App平台 修复 vue页面 scroll-view 组件在 iOS13 无法滚动的 Bug [详情](https://ask.dcloud.net.cn/question/78627)
  + App platform Fix the bug that the scroll-view component of the vue page cannot scroll in iOS13 [Details](https://ask.dcloud.net.cn/question/78627)
  + H5平台 修复 uni.request 方法发起 GET 请求之前出现 OPTIONS 预检请求的 Bug
  + H5 platform Fix the bug of OPTIONS preflight request before the uni.request method initiates a GET request
  + 字节跳动小程序 修复 this.$refs 部分场景无法获取组件引用的 Bug [#791](https://github.com/dcloudio/uni-app/issues/791)
  + ByteDance applet to fix the bug that some scenarios in this.$refs cannot get component references [#791](https://github.com/dcloudio/uni-app/issues/791)
  + uni统计 修复 小程序端发行后所有页面都添加 onShareAppMessage 的 Bug [#792](https://github.com/dcloudio/uni-app/issues/792)
  + uni statistics Fix the bug that onShareAppMessage is added to all pages after the applet is released [#792](https://github.com/dcloudio/uni-app/issues/792)

#### 2.3.0.20190919
* 【uni-app】
  + 【重要】uni统计平台上线，一份报表，掌握业务全景 [详情](https://tongji.dcloud.net.cn) 注意小程序需加 tongji.dcloud.io 到域名白名单
  + [Important] The uni statistics platform is online, a report, and a business panorama [Details](https://tongji.dcloud.net.cn) Note that the applet needs to add tongji.dcloud.io to the domain name whitelist
  + 【重要】调整：编译模式默认为自定义组件模式。若开发者需要非自定义组件模式，需在manifest.json中明确配置usingComponents节点为false
  + [Important] Adjustment: The compilation mode defaults to the custom component mode. If developers need non-custom component mode, they need to explicitly configure the usingComponents node to false in manifest.json
  + 【重要】公告：非自定义组件模式，将于2019年11月1日起，停止支持。请开发者尽快升级 [详情](https://ask.dcloud.net.cn/article/36385)
  + [Important] Announcement: The non-custom component mode will stop supporting from November 1, 2019. Please upgrade as soon as possible [details](https://ask.dcloud.net.cn/article/36385)
  + 【重要】App/微信小程序/H5 新增 支持wxs，支付宝小程序平台支持SJS，百度小程序平台支持Filter [详情](https://uniapp.dcloud.io/frame?id=wxs)
  + [Important] App/WeChat applet/H5 added support for wxs, Alipay applet platform supports SJS, Baidu applet platform supports Filter [Details](https://uniapp.dcloud.io/frame?id=wxs)
  + 【重要】App平台 优化使用Tab时应用的内存占用，提升Android平台窗体动画和页面滚动的平滑度（自定义组件模式）
  + [Important] App platform Optimize the memory usage of the application when using Tab, improve the smoothness of the Android platform form animation and page scrolling (custom component mode)
  + 【重要】App平台 iOS环境，uni-app 编译模式下的nvue页面及所有vue页面，web-view组件从UIWebview调整为WKWebview。[详情](https://ask.dcloud.net.cn/article/36348)
  + [Important] App platform iOS environment, nvue pages and all vue pages in uni-app compilation mode, web-view components are adjusted from UIWebview to WKWebview. [Details](https://ask.dcloud.net.cn/article/36348)
  + 【重要】App平台 新增 nvue 页面支持 vuex 的使用 [详情](https://uniapp.dcloud.io/nvue-api?id=sharevar)
  + [Important] App platform added nvue page to support the use of vuex [Details](https://uniapp.dcloud.io/nvue-api?id=sharevar)
  + 新增 编译时增加警告信息（不影响运行）
  + Added a warning message when compiling (does not affect running)
  + 新增 支持sass-loader 8.0.0版本 [#776](https://github.com/dcloudio/uni-app/issues/776)
  + Added support for sass-loader 8.0.0 [#776](https://github.com/dcloudio/uni-app/issues/776)
  + 优化 image 组件支持自闭合写法 [#625](https://github.com/dcloudio/uni-app/issues/625)
  + Optimize image component to support self-closing writing [#625](https://github.com/dcloudio/uni-app/issues/625)
  + 优化 autoprefixer 目标浏览器兼容，减少生成的 css 代码
  + Optimize autoprefixer target browser compatibility, reduce generated css code
  + 修复 部分模板写法导致编译器报错的Bug [#604](https://github.com/dcloudio/uni-app/issues/604)
  + Fix a bug that caused the compiler to report errors due to some template writing [#604](https://github.com/dcloudio/uni-app/issues/604)
  + 修复 mode 不正确导致 cli 下读取 .env 错误的Bug [#710](https://github.com/dcloudio/uni-app/issues/710)
  + Fix the bug that the mode is incorrect, causing the .env to be read incorrectly under cli [#710](https://github.com/dcloudio/uni-app/issues/710)
  + 修复 for 循环中绑定多个事件方法，参数获取不正确的Bug [#720](https://github.com/dcloudio/uni-app/issues/720)
  + Fix the bug that when multiple event methods are bound in the for loop, the parameters are not obtained correctly [#720](https://github.com/dcloudio/uni-app/issues/720)
  + 修复 静态资源过大时编译报错的 Bug
  + Fix the bug of compilation error when the static resource is too large
  + 修复 部分样式编译时未自动增加 webkit 前缀的 Bug [#769](https://github.com/dcloudio/uni-app/issues/769)
  + Fix the bug that the webkit prefix is not automatically added when some styles are compiled [#769](https://github.com/dcloudio/uni-app/issues/769)
  + App/H5/支付宝小程序平台 新增 导航栏支持配置图片(titleImage) [详情](https://uniapp.dcloud.io/collocation/pages?id=style)
  + App/H5/Alipay applet platform added Navigation bar support configuration image (titleImage) [Details](https://uniapp.dcloud.io/collocation/pages?id=style)
  + App/H5/支付宝小程序平台 新增 支持导航栏透明(transparentTitle) [详情](https://uniapp.dcloud.io/collocation/pages?id=style)
  + App/H5/Alipay applet platform Added support for transparent navigation bar (transparentTitle) [Details](https://uniapp.dcloud.io/collocation/pages?id=style)
  + App/H5平台 新增 uni.getSystemInfo 支持返回安全区信息（safeArea）
  + App/H5 platform added uni.getSystemInfo to support returning safe area information (safeArea)
  + App/H5平台 新增 swiper 组件支持 transition 事件
  + App/H5 platform added swiper component to support transition event
  + App/H5平台 修复 input、textarea 组件禁用状态黑色文字在 iOS 颜色变浅的 Bug
  + App/H5 platform Fix the bug that the black text in the disabled state of the input and textarea components becomes lighter in iOS
  + App平台 优化 页面背景样式生效时机，解决深色背景等特定场景下，页面切换时闪白的问题
  + App platform optimization The time when the page background style takes effect, to solve the problem of flashing white when the page is switched in certain scenarios such as dark background
  + App平台 修复 iOS13 页面无法滚动的Bug [详情](https://ask.dcloud.net.cn/question/77877)
  + App platform to fix the bug that the iOS13 page cannot be scrolled [Details](https://ask.dcloud.net.cn/question/77877)
  + App平台 新增 uni.onKeyboardHeightChange 支持监听键盘高度变化
  + App platform Added uni.onKeyboardHeightChange to support monitoring keyboard height changes
  + App平台 新增 uni.getSystemInfo 支持返回手机品牌信息（brand） [详情](https://ask.dcloud.net.cn/question/77313)
  + App platform Added uni.getSystemInfo to support returning mobile phone brand information (brand) [Details](https://ask.dcloud.net.cn/question/77313)
  + App平台 新增 nvue 中支持 uni.scss
  + App platform Added support for uni.scss in nvue
  + App平台 新增 uni-app 编译模式下的 nvue 页面支持 recycle-list 组件 [详情](https://uniapp.dcloud.io/component/recycle-list)
  + App platform Added support for recycle-list component on nvue page in uni-app compilation mode [Details](https://uniapp.dcloud.io/component/recycle-list)
  + App平台 新增 uni-app 编译模式下的 nvue 页面支持 picker-view 组件
  + App platform Added support for picker-view component on nvue page in uni-app compilation mode
  + App平台 优化 websocket 支持创建多个连接，支持收发 ArrayBuffer 类型数据
  + App platform optimization websocket supports creating multiple connections, supports sending and receiving ArrayBuffer type data
  + App平台 优化 renderer配置为native的纯nvue项目，uni.request 发起网络请求时，Content-Type 默认设置为 application/json
  + App platform Optimized the pure nvue project with the renderer configured as native. When uni.request initiates a network request, the Content-Type is set to application/json by default
  + App平台 优化 uni.request 自动去除 url 首尾空白字符
  + App platform optimized uni.request to automatically remove whitespace characters at the beginning and end of url
  + App平台 优化 input 组件 @focus 事件支持获取键盘高度
  + App platform optimized input component @focus event support to get keyboard height
  + App平台 优化 nvue Android系统switch的样式与性能
  + App platform Optimize the style and performance of nvue Android system switch
  + App平台 优化 nvue button 组件内部支持嵌套 text 组件
  + App platform Optimized nvue button components to support nested text components
  + App平台 修复 nvue 环境 movable-area 组件手势和滚动冲突的 Bug
  + App platform to fix the bug of gesture and scroll conflict of movable-area component in nvue environment
  + App平台 修复 调用 setNavigationBarTitle 不生效的Bug
  + App platform to fix the bug that calling setNavigationBarTitle does not take effect
  + App平台 修复 微信自定义组件运行时报错的Bug [详情](https://ask.dcloud.net.cn/question/77358)
  + App platform to fix the bug when the WeChat custom component is running [Details](https://ask.dcloud.net.cn/question/77358)
  + App平台 修复 键盘高度变化事件不生效的 Bug
  + App platform to fix the bug that the keyboard height change event does not take effect
  + App平台 修复 页面中 web-view 组件的页面加载完成之前标题栏会显示 null 的 Bug
  + App Platform Fix the bug that the title bar will display null before the page loading of the web-view component in the page is completed
  + App平台 修复 解决 scroll-view、movable-view 组件触摸滑动时会触发下拉刷新的 Bug
  + App platform fix Fix the bug that scroll-view and movable-view components will trigger pull-down refresh when they touch and slide
  + App平台 修复 纯nvue项目 uni.scanCode、uni.chooseLocation 接口不触发回调的Bug
  + App platform Fixed the bug that the uni.scanCode and uni.chooseLocation interfaces of pure nvue projects did not trigger callbacks
  + App平台 修复 纯nvue项目 uni.stopPullDownRefresh 不生效的Bug
  + App platform to fix the bug that the pure nvue project uni.stopPullDownRefresh does not take effect
  + App平台 修复 纯nvue项目 开发运行期间新增 nvue 页面，热更新白屏的Bug
  + App platform Fix pure nvue project, add nvue page during development and operation, hot update the bug of white screen
  + App-Android平台 修复 uni-app中网络请求设置method为DELETE时请求参数丢失的Bug [详情](https://ask.dcloud.net.cn/question/77624)
  + App-Android platform Fix the bug that the request parameters are lost when the network request method is set to DELETE in uni-app [Details](https://ask.dcloud.net.cn/question/77624)
  + App-Android平台 修复 uni-app自定义组件模式下websocket连接报some error occur错误的Bug [详情](https://ask.dcloud.net.cn/question/78789)
  + App-Android platform Fixed the bug that the websocket connection reported some error occur in the uni-app custom component mode [Details](https://ask.dcloud.net.cn/question/78789)
  + App-Android平台 修复 nvue web-view组件无法使用定位功能的Bug [详情](https://ask.dcloud.net.cn/question/76909)
  + App-Android platform Fix the bug that the nvue web-view component cannot use the positioning function [Details](https://ask.dcloud.net.cn/question/76909)
  + App-Android平台 修复 nvue textarea、input组件首次触发focus事件时无法获取键盘高度的Bug [详情](https://ask.dcloud.net.cn/question/76923)
  + App-Android platform Fix the bug that the keyboard height cannot be obtained when the nvue textarea and input components trigger the focus event for the first time [Details](https://ask.dcloud.net.cn/question/76923)
  + App-Android平台 修复 nvue map组件中添加的子组件无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/78307)
  + App-Android platform Fix the bug that the sub-components added in the nvue map component cannot be displayed normally [Details](https://ask.dcloud.net.cn/question/78307)
  + App-Android平台 修复 nvue video标签设置control属性为false时，未播放状态下仍然显示控制栏的Bug
  + App-Android platform Fixed the bug that when the nvue video tag sets the control attribute to false, the control bar is still displayed in the non-playing state
  + App-Android平台 修复 nvue input标签设置adjust-position属性不生效，及KeyboardHeightChange事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/78796)
  + App-Android platform Fix the bug that the adjust-position property of the nvue input tag does not take effect, and the KeyboardHeightChange event does not trigger [Details](https://ask.dcloud.net.cn/question/78796)
  + App-Android平台 修复 HBuilderX2.2.0引出的uni原生插件调用（uni.requireNativePlugin）使用时报错的Bug [详情](https://ask.dcloud.net.cn/question/76962)
  + App-Android platform Fixed the bug that the uni native plugin call (uni.requireNativePlugin) brought out by HBuilderX2.2.0 was reported incorrectly [Details](https://ask.dcloud.net.cn/question/76962)
  + App-iOS平台 修复 uni-app中subNVue页面可能无法接收到父页面通过subNVue.postMessage发送的消息的Bug [详情](https://ask.dcloud.net.cn/question/77312)
  + App-iOS platform Fix the bug that the subNVue page in uni-app may not be able to receive the message sent by the parent page through subNVue.postMessage [Details](https://ask.dcloud.net.cn/question/77312)
  + App-iOS平台 修复 nvue iPhoneX设备软键盘弹出时页面偏移位置不准确的Bug [详情](https://ask.dcloud.net.cn/question/76783)
  + App-iOS platform Fix the bug of inaccurate page offset position when the soft keyboard of nvue iPhoneX device pops up [Details](https://ask.dcloud.net.cn/question/76783)
  + App-iOS平台 修复 nvue map组件添加的子组件可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/76719)
  + App-iOS platform Fix the bug that the sub-components added by the nvue map component may not be displayed [Details](https://ask.dcloud.net.cn/question/76719)
  + App-iOS平台 修复 nvue swipe组件高度动态变化后切页显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/77500)
  + App-iOS platform Fix the bug that the nvue swipe component is not displayed normally after the height of the nvue swipe component changes dynamically [Details](https://ask.dcloud.net.cn/question/77500)
  + App-iOS平台 修复 nvue video标签设置封面图片（poster）后动态修改src属性可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/77353)
  + App-iOS platform Fix the bug that dynamically modifying the src attribute after setting the cover image (poster) in the nvue video tag may cause the application to crash [Details](https://ask.dcloud.net.cn/question/77353)
  + App-iOS平台 修复 nvue video标签设置自动播放（autoplay）为true不生效的Bug
  + App-iOS platform Fix the bug that the nvue video tag setting autoplay (autoplay) to true does not take effect
  + App-iOS平台 修复 nvue video标签中退出全屏后覆盖元素显示不正常的Bug
  + App-iOS platform, fix the bug that the overlay element does not display properly after exiting the full screen in the nvue video tag
  + App-iOS平台 修复 nvue input组件设置adjust-position属性值为false无效的Bug [详情](https://ask.dcloud.net.cn/question/78472)
  + App-iOS platform Fix the bug that the adjust-position property value of nvue input component is invalid [Details](https://ask.dcloud.net.cn/question/78472)
  + App-iOS平台 修复 nvue webSocket模块设置多个协议（protocol）导致连接服务器失败的Bug
  + App-iOS platform Fix the bug that the nvue webSocket module sets multiple protocols and causes the connection to the server to fail
  + App-iOS平台 修复 nvue bindingx在uni-app编译模式下拖拽组件时偏移系数不正确的Bug
  + App-iOS platform Fix the bug that the offset factor is incorrect when dragging components in nvue bindingx in uni-app compilation mode
  + App-iOS平台 修复 uni原生插件实现代理方法（application:openURL:options:）后与第三方应用交互（如调用微信登录）引起应用崩溃的Bug
  + App-iOS platform Fix the bug that the uni native plugin implements the proxy method (application:openURL:options:) and interacts with third-party applications (such as calling WeChat to log in), which causes the application to crash.
  + App-iOS平台 修复 uni原生插件实现代理方法（application:handleOpenURL:）不触发，导致无法获取第三方应用返回数据的Bug
  + App-iOS platform Fixed the bug that the proxy method (application:handleOpenURL:) implemented by the uni native plug-in did not trigger, resulting in the inability to obtain the data returned by the third-party application
  + H5平台 新增 支持导航栏点击穿透配置（titlePenetrate） [详情](https://uniapp.dcloud.io/collocation/pages?id=style)
  + H5 platform Added support for click-through configuration of navigation bar (titlePenetrate) [Details](https://uniapp.dcloud.io/collocation/pages?id=style)
  + H5平台 新增 支持 icon 组件。注意此功能会与老版的uni ui的icon组件重名 [详情](https://ask.dcloud.net.cn/article/36404)
  + Added support for icon component on H5 platform. Note that this function will have the same name as the icon component of the old version of uni ui [Details](https://ask.dcloud.net.cn/article/36404)
  + H5平台 优化 uni.getNetworkType 支持 Safari 浏览器
  + H5 platform optimization uni.getNetworkType supports Safari browser
  + H5平台 修复 rich-text 内部节点包含多个 class 时渲染不正确的 Bug [#756](https://github.com/dcloudio/uni-app/issues/756)
  + H5 platform Fix the bug of incorrect rendering when rich-text inner node contains multiple classes [#756](https://github.com/dcloudio/uni-app/issues/756)
  + H5平台 修复 input 组件 confirm-type 值为 search 时文字垂直不居中的 Bug
  + For H5 platform, fix the bug that the text is not vertically centered when the confirm-type value of the input component is search
  + H5平台 修复 input 组件的 change 事件会冒泡到父组件的Bug [详情](https://ask.dcloud.net.cn/question/77962)
  + H5 platform Fix the bug that the change event of the input component will bubble to the parent component [Details](https://ask.dcloud.net.cn/question/77962)
  + H5平台 修复 animation 属性中部分动画不生效的 Bug
  + H5 platform Fix the bug that some animations in the animation property do not take effect
  + H5平台 修复 svg 或非base64格式的 Data URI 无法使用的Bug [#668](https://github.com/dcloudio/uni-app/issues/668)
  + H5 platform Fix the bug that svg or non-base64 format Data URI cannot be used [#668](https://github.com/dcloudio/uni-app/issues/668)
  + 小程序平台 新增 uni.getMenuButtonBoundingClientRect 接口，可获取导航栏右上角胶囊按钮的布局位置信息 [详情](https://uniapp.dcloud.io/api/ui/menuButton?id=getmenubuttonboundingclientrect)
  + Mini Program Platform Added uni.getMenuButtonBoundingClientRect interface to get the layout position information of the capsule button in the upper right corner of the navigation bar [Details](https://uniapp.dcloud.io/api/ui/menuButton?id=getmenubuttonboundingclientrect)
  + 小程序平台 优化 发行时压缩 css 代码
  + Mini Program Platform Optimized to compress css code when publishing
  + 微信小程序平台 修复 当使用小程序插件后，调用数组方法修改数组未触发界面渲染的 Bug [#694](https://github.com/dcloudio/uni-app/issues/694)
  + WeChat Mini Program Platform Fix the bug that when using the Mini Program plugin, calling the array method to modify the array does not trigger UI rendering [#694](https://github.com/dcloudio/uni-app/issues/694)
  + 支付宝小程序平台 新增 支持分包加载功能
  + Alipay applet platform added support for sub-package loading function
  + 支付宝小程序 新增 button 组件 open-type 属性支持 getPhoneNumber
  + Alipay applet added open-type attribute of button component to support getPhoneNumber
  + 百度/字节跳动小程序平台 修复 开发工具 sourcemap 无效的Bug [#724](https://github.com/dcloudio/uni-app/issues/724)
  + Baidu/ByteDance applet platform fix the bug that the development tool sourcemap is invalid [#724](https://github.com/dcloudio/uni-app/issues/724)
  + hello uni-app 新增 nvue地图 组件及API示例
  + hello uni-app added nvue map component and API example
  + hello uni-app 新增 全屏视频上下滑动的示例模板
  + hello uni-app added a sample template for full-screen video sliding up and down
  + hello uni-app 新增 globalData和vuex的示例模板
  + hello uni-app adds sample templates for globalData and vuex
  + hello uni-app 优化 cover-view 组件示例(App端使用nvue实现)，支持在视频全屏界面覆盖遮罩物
  + hello uni-app optimizes the cover-view component example (implemented by nvue on the App side), supports covering the mask in the video full screen interface
  + hello uni-app 优化 video 组件示例，新增播放、暂停、设置倍速等能力演示
  + hello uni-app optimizes the video component example, and adds the ability to play, pause, and set the speed
  + uni-ui 新增 SearchBar 搜索输入框
  + uni-ui added SearchBar search input box
  + uni-ui 新增 GoodsNav 商品详情页底部购物车、购买导航条
  + uni-ui added shopping cart and purchase navigation bar at the bottom of GoodsNav product details page
  + uni-ui 新增 Fav 收藏按钮
  + uni-ui added Fav favorite button
  + uni-ui 优化 SwipeAction 滑动操作组件，App平台、H5 平台、微信小程序平台利用 wxs 实现跟手式流畅拖动
  + uni-ui optimizes the SwipeAction sliding operation component, and the App platform, H5 platform, and WeChat applet platform use wxs to achieve smooth dragging with hands
  + uni-ui 优化 Collapse 折叠面板在低配设备中动画卡顿的问题
  + uni-ui optimizes the problem that the animation of the Collapse folding panel is stuck in low-end devices
  + uni-ui 优化 LoadMore 加载图标可按平台配置或由用户指定，Android平台默认circle，iOS平台默认雪花
  + uni-ui optimization LoadMore loading icon can be configured by platform or specified by the user, the Android platform defaults to circle, and the iOS platform defaults to snowflake
  + uni-ui 优化 SwipeDot 优化指示器样式
  + uni-ui optimized SwipeDot optimized indicator style
  + uni-ui 修复 Icons 组件在 H5 平台不显示的BUG。老用户请更新Icons组件 [详情](https://ask.dcloud.net.cn/article/36404)
  + uni-ui fix the bug that the Icons component is not displayed on the H5 platform. Old users, please update the Icons component [Details](https://ask.dcloud.net.cn/article/36404)
  + 新闻模板 优化 拖动标签卡时更快的渲染页面、无网络时引导用户设置
  + News template optimization Faster rendering page when dragging tabs, guide user settings when no network
* 【5+App插件】
* 【5+App Plugins】
  + 【重要】Android平台 优化 窗体动画popin/popout的效率，Android6+加入老窗体透明alpha效果（同时注意此时动画时长设置不再生效）
  + [Important] The Android platform has optimized the popin/popout efficiency of the form animation, and added the transparent alpha effect of the old form to Android6+ (at the same time, note that the animation duration setting will no longer take effect at this time)
  + 【重要】iOS平台 默认Webview从UIWebview改为WKWebview，从iOS13开始苹果将UIWebview列为过期API。[详情](https://ask.dcloud.net.cn/article/36348)
  + [Important] The default Webview on the iOS platform is changed from UIWebview to WKWebview. Since iOS13, Apple has listed UIWebview as an expired API. [Details](https://ask.dcloud.net.cn/article/36348)
  + 修复 nvue页面在非自定义组件模式下module（模块）只能触发一次回调事件（如webSockets的onMessage事件）的Bug
  + Fix the bug that the module (module) can only trigger a callback event (such as the onMessage event of webSockets) in the non-custom component mode of the nvue page
  + Android平台 修复 部分平板设备横屏显示时可能出现灰色区域的Bug [详情](https://ask.dcloud.net.cn/question/77055)
  + Android platform Fixed a bug where a gray area may appear when some tablet devices are displayed in landscape orientation [Details](https://ask.dcloud.net.cn/question/77055)
  + Android平台 修复 图片压缩转换（plus.zip.compressImage）后exif头信息丢失的Bug [详情](https://github.com/dcloudio/uni-app/issues/437)
  + Android platform Fix the bug that exif header information is lost after image compression conversion (plus.zip.compressImage) [Details](https://github.com/dcloudio/uni-app/issues/437)
  + Android平台 修复 获取图片信息（plus.io.getImageInfo）传入网络图片地址无法下载图片时控制台输出Unexpected identifier错误的Bug [详情](https://ask.dcloud.net.cn/question/77363)
  + Android platform fixes the bug that the console outputs the wrong Unexpected identifier when the image information (plus.io.getImageInfo) cannot be downloaded from the network image address [Details](https://ask.dcloud.net.cn/question/77363 )
  + Android平台 修复 设置应用全屏显示（plus.navigator.setFullscreen）时在部分刘海屏设备显示区域可能不正确的Bug
  + Android platform Fix the bug that the display area of some notch devices may be incorrect when setting the full screen display of the application (plus.navigator.setFullscreen)
  + Android平台 修复 Webview窗口动画在Android6以下设备可能出现残影的Bug
  + Android platform Fix the bug that the afterimage of Webview window animation may appear on devices below Android6
  + Android平台 修复 使用plus.io.resolveLocalFileSystemURL方法传入路径非'/'结尾是获取目录对象entry不正确，导致entry.getDirectory创建子目录路径不对的Bug
  + Android platform Fixed the bug that when using the plus.io.resolveLocalFileSystemURL method to pass in a path that does not end with '/', the entry of the directory object is incorrect, causing entry.getDirectory to create an incorrect subdirectory path.
  + iOS平台 新增 云打包支持配置Capabilities，如通用链接（Universal Link）[详情](https://ask.dcloud.net.cn/article/36393)
  + iOS platform Added cloud packaging support to configure Capabilities, such as Universal Link [Details](https://ask.dcloud.net.cn/article/36393)
  + iOS平台 新增 创建本地消息（plus.push.createMessage）支持设置标题（title）和副标题（subtitle） [详情](https://ask.dcloud.net.cn/question/78475)
  + iOS platform Added support for creating a local message (plus.push.createMessage) to set the title (title) and subtitle (subtitle) [Details](https://ask.dcloud.net.cn/question/78475)
  + iOS平台 更新 UniPush&个推推送SDK（2.4.1.0）适配iOS13
  + iOS platform update UniPush & Push Push SDK (2.4.1.0) to adapt to iOS13
  + iOS平台 更新 友盟统计SDK（6.0.5）适配iOS13，注意：新版本要求应用使用广告标识IDFA [详情](https://ask.dcloud.net.cn/article/74)
  + iOS platform update Umeng Statistics SDK (6.0.5) is adapted to iOS13, note: the new version requires the application to use the advertising logo IDFA [Details](https://ask.dcloud.net.cn/article/74)
  + iOS平台 修复 使用录音对象（AudioRecorder）时如果用户不允许访问麦克风（未授权）不触发失败回调的Bug
  + iOS platform Fix the bug that the failure callback is not triggered if the user does not allow access to the microphone (unauthorized) when using the recording object (AudioRecorder)
  + iOS平台 修复 音频播放对象（AudioPlayer）的setStyles方法设置开始播放位置（startTime）不准确，isPaused方法获取播放状态不准确的Bug [详情](https://ask.dcloud.net.cn/question/76201)
  + Fix the bug that the setStyles method of the audio playback object (AudioPlayer) sets the start playback position (startTime) is inaccurate, and the isPaused method obtains the bug of the playback status inaccurate [Details](https://ask.dcloud.net.cn/question/ 76201)
  + iOS平台 修复 视频播放（VideoPlayer）控件无法播放带身份认证的rtsp地址的Bug [详情](https://ask.dcloud.net.cn/question/76526)
  + iOS platform Fix the bug that the VideoPlayer control cannot play the rtsp address with authentication [Details](https://ask.dcloud.net.cn/question/76526)
  + iOS平台 修复 视频播放（VideoPlayer）控件在iOS13上退出全屏后显示位置不正确的Bug
  + iOS platform Fix the bug that the video player (VideoPlayer) control is displayed in an incorrect position after exiting full screen on iOS13
  + iOS平台 修复 蓝牙（Bluetooth）停止搜索设备后再开始可能无法返回之前搜索到的设备，及搜索设置allowDuplicatesKey参数无效的Bug。
  + iOS platform Fix the bug that Bluetooth may not return to the previously searched device after stopping the search for devices, and the search setting allowDuplicatesKey parameter is invalid.
  + iOS平台 修复 获取网络gif图片信息（plus.io.getImageInfo）引起应用崩溃的Bug
  + iOS platform Fix the bug that the application crashes when getting network gif image information (plus.io.getImageInfo)
  + iOS平台 修复 Webview窗口设置滑屏（drag）后，侧滑返回操作可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/77462)
  + iOS platform Fixed the bug that after the Webview window is set to slide (drag), the side slide back operation may cause the application to crash [Details](https://ask.dcloud.net.cn/question/77462)
  + iOS平台 修复 应用仅配置横屏时调用系统相册选择图片（plus.gallery.pick）时引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/77394)
  + iOS platform Fixed a bug that caused the app to crash when the app was only configured for landscape orientation when calling the system album to select a picture (plus.gallery.pick) [Details](https://ask.dcloud.net.cn/question/77394)
  + iOS平台 修复 图片压缩转换（plus.zip.compressImage）处理图片分辨率过高可能造成内存溢出引起应用崩溃的Bug [详情](https://github.com/dcloudio/uni-app/issues/713)
  + Fix the bug of image compression conversion (plus.zip.compressImage) on iOS platform that may cause memory overflow and application crash when processing image resolution too high [Details](https://github.com/dcloudio/uni-app/issues/713 )
  + iOS平台 修复 图片预览（plus.nativeUI.previewImage）显示高分辨率图片可能超出内存溢出引起应用崩溃的Bug
  + iOS platform Fix the bug that the image preview (plus.nativeUI.previewImage) may display high-resolution images out of memory and cause the app to crash
  + iOS平台 修复 直播推流（LivePusher）控件配置开启摄像头（enable-camera）属性导致无法推视频流的Bug
  + iOS platform Fix the bug that the LivePusher control configuration enables the camera (enable-camera) property, resulting in the bug that the video stream cannot be pushed
  + iOS平台 修复 直播推流（LivePusher）控件设置视频模式（mode）属性和宽高比（aspect）属性可能不生效的Bug
  + iOS platform Fix the bug that the LivePusher control setting the video mode (mode) property and aspect ratio (aspect) property may not take effect
  + iOS平台 修复 获取图片信息（plus.io.getImageInfo）传入网络图片地址无法下载图片时触发成功回调的Bug
  + iOS platform Fix the bug that triggers a successful callback when the image information (plus.io.getImageInfo) cannot be downloaded from the network image address
  + iOS平台 修复 Webview窗口背景设置为深色时，Tab栏上面会出现白条的Bug [详情](https://ask.dcloud.net.cn/question/77442)
  + iOS platform Fixed the bug that white bars would appear on the Tab bar when the background of the Webview window is set to dark [Details](https://ask.dcloud.net.cn/question/77442)
  + iOS平台 修复 Webview窗口使用WKWebview内核时overrideUrlLoading方法无效的Bug [详情](https://ask.dcloud.net.cn/question/78173)
  + iOS platform Fix the bug that the overrideUrlLoading method is invalid when the Webview window uses the WKWebview kernel [Details](https://ask.dcloud.net.cn/question/78173)
  + iOS平台 修复 蓝牙（Bluetooth）开始搜索后不停止直接关闭页面可能会引起应用崩溃的Bug
  + iOS platform Fix the bug that the application may crash if the page is closed without stopping after the Bluetooth (Bluetooth) starts searching

#### 2.2.2.20190816
* 【uni-app】
  + App平台 修复 uni.chooseLocation 界面搜索地点导致地图高度异常的Bug [详情](https://ask.dcloud.net.cn/question/76645)
  + App platform Fix the bug that the map height is abnormal when searching for locations in the uni.chooseLocation interface [Details](https://ask.dcloud.net.cn/question/76645)
* 【5+App插件】
* 【5+App Plugins】
  + Android平台 修复 部分情况下软键盘隐藏后页面底部留白的Bug [详情](https://ask.dcloud.net.cn/question/76683)
  + Android platform Fix the bug that the bottom of the page is left blank after the soft keyboard is hidden in some cases [Details](https://ask.dcloud.net.cn/question/76683)
  + Android平台 修复 plus.gallery.pick选择视频后返回失败的Bug
  + Android platform Fixed the bug that plus.gallery.pick failed to return after selecting a video

#### 2.2.1.20190813
* 【uni-app】
  + App平台 修复 uni.request 接口中 responseType 参数设置为 arraybuffer 时,请求无效的 Bug [详情](https://ask.dcloud.net.cn/question/66153)
  + App platform Fix the bug that the request is invalid when the responseType parameter in the uni.request interface is set to arraybuffer [Details](https://ask.dcloud.net.cn/question/66153)
  + H5平台 修复 开启摇树优化（treeShaking）后，多构建出一份无效文件的Bug [#638](https://github.com/dcloudio/uni-app/issues/638)
  + H5 platform fix: After treeShaking is turned on, an additional bug of invalid file is built [#638](https://github.com/dcloudio/uni-app/issues/638)
* 【5+App插件】
* 【5+App Plugins】
  + Android平台 修复 在小米手机上选择本地视频总是返回失败回调的Bug [详情](https://ask.dcloud.net.cn/question/76469)
  + Android platform Fix the bug that selecting a local video on Xiaomi phones always returns a failed callback [Details](https://ask.dcloud.net.cn/question/76469)
  + Android平台 修复 nvue页面中input组件弹出软键盘后报js错误（Failed to receiveTasks, instance is not available）的Bug
  + Android platform Fix the bug that js error (Failed to receiveTasks, instance is not available) is reported after the input component pops up the soft keyboard in the nvue page
  + iOS平台 更新 高德地图SDK：基础SDK（v1.5.7）、3D地图SDK（v6.9.0）、搜索功能（v6.9.0），修复多次打开关闭地图页面引起应用崩溃的Bug [  + 详情](https://ask.dcloud.net.cn/question/66225)  + 
  + iOS platform update AutoNavi Map SDK: basic SDK (v1.5.7), 3D map SDK (v6.9.0), search function (v6.9.0), fix the bug of opening and closing the map page multiple times and causing the application to crash [ + Details](https://ask.dcloud.net.cn/question/66225) +
  + iOS平台 修复 视频播放（VideoPlayer）控件的timeupd  + ate事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/76470)  + 
  + Fix the bug that the timeupd + ate event of the VideoPlayer control does not trigger on the iOS platform [Details](https://ask.dcloud.net.cn/question/76470) +
  + iOS平台 修复 视频播放（VideoPlayer）控件全屏时音量  + 调节手势功能无效的Bug  + 
  + iOS platform fix the bug that the volume of the video player (VideoPlayer) control is in full screen + adjust the gesture function is invalid +
  + iOS平台 修复 Webview窗口配置系统软键盘模式（softinputMode）为adjustResize，收起软键盘后窗口高度无法恢复的Bug [详情](  + https://ask.dcloud.net.cn/question/76374)
  + iOS platform Fix the bug that the Webview window configures the system soft inputMode to adjustResize, and the window height cannot be restored after closing the soft keyboard [Details]( + https://ask.dcloud.net.cn/question/76374)
  + iOS平台 修复 uni-app项目打包模块配置中勾选“Maps(地图)”但不配置高德或百度地图SDK参数引起提交云端打包失败的Bug
  + iOS platform Fix the bug that "Maps (map)" is checked in the configuration of the uni-app project packaging module, but the parameters of AutoNavi or Baidu Map SDK are not configured, causing the submission of cloud packaging to fail.

#### 2.2.0.20190812
* 【uni-app】
  + 【重要】H5平台 新增 支持配置摇树优化，打包时裁剪不需要的组件及API，大幅减少H5框架的发行体积，提高首次加载渲染速度 [详情](https://uniapp.dcloud.io/collocation/manifest?id=optimization)
  + [Important] The H5 platform adds support for configuration tree shaking optimization, cutting unnecessary components and APIs when packaging, greatly reducing the release volume of the H5 framework, and improving the rendering speed of the first load [Details](https://uniapp.dcloud.io /collocation/manifest?id=optimization)
  + 【重要】App平台 自定义组件模式 优化 uni.request 的实现，加快联网速度，尤其是上拉翻页的速度
  + [Important] App platform Custom component mode Optimize the implementation of uni.request, speed up the networking speed, especially the speed of pulling up and turning pages
  + 【重要】App平台 支持纯 nvue 项目，manifest配置 "app-plus" -> "renderer":"native"，可不加载基于 webview 的运行框架，减少包体积、提升启动速度。（新建项目选新闻模板可体验）
  + [Important] The App platform supports pure nvue projects, and the manifest is configured with "app-plus" -> "renderer": "native", and the webview-based running framework can not be loaded, which reduces the package size and improves the startup speed. (New project can choose news template to experience)
  + 【重要】App平台 nvue 的 uni-app 编译模式 新增 组件：cover-view（支持嵌套、滚动）、cover-image、progress、button、checkbox、radio、switch、form、slider、barcode、live-pusher、map（map 组件实现与微信对齐，目前仅支持高德地图）
  + [Important] New components in the uni-app compilation mode of the App platform nvue: cover-view (supports nesting, scrolling), cover-image, progress, button, checkbox, radio, switch, form, slider, barcode, live- pusher, map (the map component is aligned with WeChat, currently only supports AutoNavi map)
  + 【重要】App平台 nvue 的 uni-app 编译模式 优化组件 `swiper`，支持竖向滑动，内嵌 video，实现抖音式视频上下滑动效果（微信基础库 2.4.0以上亦可实现类似功能）
  + [Important] The uni-app compilation mode of the app platform nvue optimizes the component `swiper`, supports vertical sliding, embedded video, and realizes the effect of vibrato-style video sliding up and down (Wechat basic library 2.4.0 and above can also achieve similar functions)
  + 【重要】App平台 nvue 的 uni-app 编译模式 优化组件 `video`，支持内嵌 cover-view，并支持视频全屏后通过 cover-view 自定义全屏界面内容（用法同微信小程序）
  + [Important] The uni-app compilation mode of the App platform nvue optimizes the component `video`, supports embedded cover-view, and supports customizing the full-screen interface content through cover-view after the video is full-screen (the usage is the same as the WeChat applet)
  + 【重要】App平台 nvue 的 uni-app 编译模式 优化组件 `rich-text`，支持加粗、文字换行
  + [Important] The uni-app compilation mode of the App platform nvue optimizes the component `rich-text`, supports bolding and text wrapping
  + 【重要】App平台 nvue 的 uni-app 编译模式 iOS上支持点击顶部状态栏滚动页面到顶部，组件 `scroll-view` 支持enableBackToTop属性为true以实现相同效果
  + [Important] The uni-app compilation mode of the App platform nvue supports clicking on the top status bar to scroll the page to the top on iOS, and the component `scroll-view` supports the enableBackToTop property to be true to achieve the same effect
  + 【重要】App平台 nvue 的 uni-app 编译模式 软键盘弹出事件（focus）中支持获取软键盘的高度 [详情](https://uniapp.dcloud.io/component/input)
  + [Important] The uni-app compilation mode of the App platform nvue supports obtaining the height of the soft keyboard in the soft keyboard pop-up event (focus) [Details](https://uniapp.dcloud.io/component/input)
  + 【重要】App平台 Android 系统 input、textarea、editor 键盘弹出方式默认从 adjustResize 调整为 adjustPan，即输入法弹出后窗体不是缩小而是上推，让软键盘弹出和收起更顺滑，并且与iOS、及各种小程序平台的实现逻辑统一。如不需要此功能，需在 pages.json 中 style->app-plus 节点下设 "softinputMode": "adjustResize"。另 editor 组件目前仍然是 adjustResize
  + [Important] The keyboard pop-up method of the Android system input, textarea, and editor of the App platform is adjusted from adjustResize to adjustPan by default, that is, the window is not reduced but pushed up after the input method pops up, which makes the soft keyboard pop up and fold more smoothly, and is consistent with the The implementation logic of iOS and various applet platforms is unified. If you don't need this function, you need to set "softinputMode": "adjustResize" under the style->app-plus node in pages.json. The editor component is still adjustResize
  + 【重要】新增 支持 vue.config.js 配置文件，可自定义 webpack 配置选项，包括增加自定义静态资源目录、小程序自定义组件目录，方便老项目转换 [详情](https://uniapp.dcloud.io/collocation/vue-config)
  + [Important] Added support for the vue.config.js configuration file, which can customize webpack configuration options, including adding a custom static resource directory and a small program custom component directory to facilitate the conversion of old projects [Details](https://uniapp .dcloud.io/collocation/vue-config)
  + 【重要】新增 CLI版支持 package.json 配置文件扩展，自行扩展条件编译平台（如钉钉小程序、H5-weixin等） [详情](https://uniapp.dcloud.io/collocation/package)
  + [Important] The new CLI version supports package.json configuration file expansion, and self-expands conditional compilation platform (such as DingTalk applet, H5-weixin, etc.) [Details](https://uniapp.dcloud.io/collocation/package )
  + 新增 提供离线文档[https://github.com/dcloudio/uni-app/tree/master/docs](https://github.com/dcloudio/uni-app/tree/master/docs)
  + Added offline documentation [https://github.com/dcloudio/uni-app/tree/master/docs](https://github.com/dcloudio/uni-app/tree/master/docs)
  + App平台 Android平台 新增 uni-app（自定义组件模式及 nvue 页面）适配支持 arm64-v8a（64位）CPU类型，解决 Google Play 发布 app 必须支持64位的问题 [详情](https://ask.dcloud.net.cn/article/36195)
  + App platform Android platform adds uni-app (custom component mode and nvue page) adaptation to support arm64-v8a (64-bit) CPU type, solving the problem that Google Play publishing apps must support 64-bit [Details](https:/ /ask.dcloud.net.cn/article/36195)
  + App平台 weex版本升级为最新的0.26.0
  + App platform weex version upgraded to the latest 0.26.0
  + App平台 uni.chooseLocation 新增 keyword 参数，解决启用百度地图后，选择位置界面附近地址列表为空的 Bug
  + Added keyword parameter to uni.chooseLocation on the App platform to solve the bug that the address list near the select location interface is empty after enabling Baidu Maps
  + App平台 修复 当 pages.json 中配置页面过多时，windows平台编译报 ENAMETOOLONG 错误的 Bug
  + App platform Fix the bug that the Windows platform compiles and reports ENAMETOOLONG error when there are too many configuration pages in pages.json
  + App平台 修复 static 下部分类型资源文件未打包的 Bug [#619](https://github.com/dcloudio/uni-app/issues/619)
  + App platform Fix the bug that some types of resource files are not packaged under static [#619](https://github.com/dcloudio/uni-app/issues/619)
  + App平台 修复 nvue 在 uni-app 编译模式下，nvue页面无法接收参数的 Bug
  + App platform Fix the bug that nvue page cannot receive parameters in uni-app compilation mode
  + App平台 iOS系统 修复 uni.openLocation 打开的位置展示页面，地图显示不全的 Bug [详情](https://ask.dcloud.net.cn/question/75754)
  + App platform iOS system Fix the bug that the location display page opened by uni.openLocation, the map is not displayed completely [Details](https://ask.dcloud.net.cn/question/75754)
  + 微信小程序平台 新增 支持在分包内引入插件代码包 [#620](https://github.com/dcloudio/uni-app/issues/620)
  + Wechat Mini Program Platform Added support for introducing plugin code packages into subpackages [#620](https://github.com/dcloudio/uni-app/issues/620)
  + hello uni-app 首页选项卡页面，重构为 nvue，提升渲染速度
  + hello uni-app homepage tab page, refactored to nvue to improve rendering speed
  + hello uni-app 使用定位、相册等功能时，新增权限判断，优化用户体验
  + hello uni-app adds permission judgment when using functions such as positioning and photo albums to optimize user experience
  + uni-ui 新增 Calendar 日历组件新增打点、范围选择，优化性能
  + uni-ui added Calendar component, added dots, range selection, and optimized performance
  + uni-ui 新增 Grid 宫格组件新增红点、数字角标、图片角标显示、点击事件
  + uni-ui added Grid component, added red dot, digital corner mark, picture corner mark display, click event
  + uni-ui 新增 Card 卡片组件新增图文卡片模式
  + uni-ui added Card component, added graphic card mode
  + uni-ui 新增 Popup 弹出层组件新增动画效果
  + uni-ui added Popup popup layer component added animation effect
  + uni-ui 优化 Grid 宫格组件代码重构，修改传值方式，定制度更高
  + uni-ui optimizes the code refactoring of Grid components, modifies the way of passing values, and has higher customization
  + uni-ui 修复 Calendar 日历组件高度渲染不正确的 Bug 
  + uni-ui fix the bug of incorrect height rendering of Calendar component
  + uni-ui 修复 Collapse 折叠面板组件在动画模式下，动态添加数据高度不正确的 Bug
  + uni-ui fix the bug that the height of the dynamically added data is incorrect in the animation mode of the Collapse folding panel component
  + uni-ui 修复 Popup 弹出层组件底部弹出示例样式错乱的 Bug
  + uni-ui fix the bug that the popup example at the bottom of the Popup popup layer component is disordered in style
  + uni-ui 修复 Popup 弹出层组件顶部弹出在 H5 端位置不正确的 Bug
  + uni-ui fix the bug that the top popup of the Popup component is not in the correct position on the H5 side
  + uni-ui 修复 LoadMore 加载更多组件不显示”加载中“动画的 bug
  + uni-ui fix the bug that LoadMore does not display the "Loading" animation when loading more components
  + 新闻/资讯App模板 所有页面均使用nvue实现
  + News/News App Template All pages are implemented using nvue
* 【5+App插件】
* 【5+App Plugins】
  + 【重要】Android平台 新增 5+ APP和uni-app适配支持arm64-v8a（64位）CPU类型，解决GooglePlay提审要求64位的问题 [详情](https://ask.dcloud.net.cn/article/36195)
  + [Important] Android platform added 5+ APP and uni-app adaptation to support arm64-v8a (64-bit) CPU type, to solve the problem of GooglePlay requesting 64-bit [Details](https://ask.dcloud.net. cn/article/36195)
  + 【重要】Android平台 更新 支付宝SDK版本为15.6.5，修复SDK版本过低可能被Google Play下架的Bug [详情](https://ask.dcloud.net.cn/question/76073)
  + [Important] Android platform update Alipay SDK version is 15.6.5, fix the bug that the SDK version is too low and may be removed from Google Play [Details](https://ask.dcloud.net.cn/question/76073)
  + 新增 支持manifest.json文件中设置屏幕方向（screenOrientation）真机运行时可立即生效（无需提交云端打包） [文档](https://ask.dcloud.net.cn/article/94#screenOrientation)
  + Added support for setting the screen orientation (screenOrientation) in the manifest.json file, which can take effect immediately when the real machine is running (no need to submit cloud packaging) [Documentation](https://ask.dcloud.net.cn/article/94#screenOrientation)
  + Android平台 新增 适配最新的Android Q（API等级29）系统 [详情](https://ask.dcloud.net.cn/article/36199)
  + Android platform newly added Adapt to the latest Android Q (API level 29) system [Details](https://ask.dcloud.net.cn/article/36199)
  + Android平台 新增 可在打包时取消x86 cpu支持，以减少apk体积
  + Android platform added x86 cpu support can be canceled during packaging to reduce apk size
  + Android平台 修复 部分安卓4.4手机上获取设备信息（plus.device.getInfo）无法返回imei的Bug
  + Android platform Fix the bug that the device information (plus.device.getInfo) cannot be returned to imei on some Android 4.4 mobile phones
  + Android平台 修复 微信登录第一次授权登录可能返回失败的Bug [详情](https://ask.dcloud.net.cn/question/74869)
  + Android platform Fix the bug that WeChat login may fail when the first authorized login [Details](https://ask.dcloud.net.cn/question/74869)
  + Android平台 修复 华为手机调用plus.runtime.setBadgeNumber(0)无法清除应用角标的Bug [详情](https://ask.dcloud.net.cn/question/72276)
  + Android platform Fixed the bug that Huawei mobile phone calls plus.runtime.setBadgeNumber(0) cannot clear the bug of the app badge [Details](https://ask.dcloud.net.cn/question/72276)
  + iOS平台 新增 视频播放（VideoPlayer）控件支持设置倍速播放（playbackRate）
  + iOS platform Added the VideoPlayer control to support setting the playbackRate
  + iOS平台 修复 视频播放（VideoPlayer）控件在页面关闭后可能还会在后台重新播放的Bug [详情](https://ask.dcloud.net.cn/question/74022)
  + iOS platform Fix the bug that the VideoPlayer control may replay in the background after the page is closed [Details](https://ask.dcloud.net.cn/question/74022)
  + iOS平台 修复 横竖屏设置中landscape-primary、landscape-secondary方向与android平台相反的Bug
  + iOS platform Fix the bug that landscape-primary and landscape-secondary directions are opposite to those of the android platform in the horizontal and vertical screen settings
  + iOS平台 修复 使用plus.maps.create创建地图设置宽高为用百分比时计算不准确的Bug [详情](https://ask.dcloud.net.cn/question/75754)
  + iOS platform Fix the bug of inaccurate calculation when using plus.maps.create to create a map and set the width and height as percentages [Details](https://ask.dcloud.net.cn/question/75754)
  + iOS平台 修复 蓝牙（Bluetooth）订阅特征值变化（notifyBLECharacteristicValueChange）后触发onBLECharacteristicValueChange事件逻辑不正确的Bug
  + iOS platform Fixed the bug that the logic of the onBLECharacteristicValueChange event was incorrectly triggered after the Bluetooth subscription characteristic value changed (notifyBLECharacteristicValueChange).
  + iOS平台 修复 蓝牙（Bluetooth）特征值的写（write）属性可能获取不正确的Bug
  + iOS platform Fix the bug that the write attribute of the Bluetooth characteristic value may be incorrectly obtained
  + iOS平台 修复 蓝牙（Bluetooth）特征值读（readBLECharacteristicValue）或写（writeBLECharacteristicValue）操作可能不触发回调的Bug
  + iOS platform Fix the bug that the Bluetooth characteristic value read (readBLECharacteristicValue) or write (writeBLECharacteristicValue) operation may not trigger the callback

#### 2.1.3.20190724
* 【uni-app】
  + 修复 项目路径包含空格时，debugger 的 sourcemap 不正确导致无法打断点的Bug
  + Fix the bug that the sourcemap of the debugger is incorrect when the project path contains spaces
  + App平台 修复 input 组件 type 值为 number 时 password 属性不生效的 Bug [#556](https://github.com/dcloudio/uni-app/issues/556)
  + App platform Fix the bug that the password attribute does not take effect when the input component type value is number [#556](https://github.com/dcloudio/uni-app/issues/556)
  + App平台 修复 取消扫码会触发扫码成功回调的 Bug
  + App platform Fix the bug that canceling the scan code will trigger the successful callback of the scan code
  + App平台 修复 调用 uni.setNavigationBarTitle、uni.setNavigationBarColor 接口会导致隐藏状态的导航栏显示的 Bug
  + App platform Fix the bug that calling the uni.setNavigationBarTitle, uni.setNavigationBarColor interface will cause the display of the hidden navigation bar
  + App平台 修复 部分特殊设备上 input textarea 组件中 input 事件无法触发的 Bug [详情](https://ask.dcloud.net.cn/question/74222)
  + App platform Fix the bug that the input event cannot be triggered in the input textarea component on some special devices [Details](https://ask.dcloud.net.cn/question/74222)
  + H5平台 修复 uni.hideLoading 部分场景下失效的 Bug
  + H5 platform Fix uni.hideLoading bug that fails in some scenarios
  + 百度小程序平台 修复 uni.request 方法 dataType 设置为非 json 类型，仍按 json 解析的 Bug [#558](https://github.com/dcloudio/uni-app/issues/558)
  + Baidu Mini Program Platform Fix the bug that the dataType of the uni.request method is set to a non-json type, but is still parsed by json [#558](https://github.com/dcloudio/uni-app/issues/558)
* 【5+App插件】
* 【5+App Plugins】
  + Android平台 修复 Webview子窗口调用plus.webview.startAnimation动画可能引起页面不显示的Bug [详情](https://ask.dcloud.net.cn/question/74759)
  + Android platform Fix the bug that the Webview sub-window calling plus.webview.startAnimation animation may cause the page not to be displayed [Details](https://ask.dcloud.net.cn/question/74759)
  + Android平台 修复 Webview窗口软键盘弹出高度可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/74854)
  + Android platform Fix the bug that the pop-up height of the soft keyboard of the Webview window may be incorrect [Details](https://ask.dcloud.net.cn/question/74854)
  + Android平台 修复 Webview父子窗口都设置statusbar后导致显示不正确的Bug，统一为父子窗口同时设置statusbar后仅子窗口的statusbar生效
  + Android platform Fixed the bug that the statusbar of the parent and child windows of the Webview was set incorrectly, which caused the display to be incorrect. After the statusbar was set for the parent and child windows, only the statusbar of the child window took effect.
  + Android平台 修复 Webview窗口的标题栏（titleNView）设置搜索框（searchInput）后可能会同时显示标题文字（titleText）的Bug [详情](https://ask.dcloud.net.cn/question/75179)
  + Android platform Fixed the bug that the title text (titleText) may be displayed at the same time after setting the search box (searchInput) in the title bar (titleNView) of the Webview window [Details](https://ask.dcloud.net.cn/question/75179)
  + Android平台 修复 wap2app应用首页为选项卡页面在全面屏手机第一次打开底部可能有空白的Bug [详情](https://ask.dcloud.net.cn/question/74896)
  + Android platform Fix the bug that the home page of wap2app application is a tab page when the full screen mobile phone is opened for the first time, there may be a blank bug at the bottom [Details](https://ask.dcloud.net.cn/question/74896)
  + Android平台 修复 图片进行扫码识别（plus.barcode.scan）返回数据多出引号的Bug [详情](https://ask.dcloud.net.cn/question/74738)
  + Android platform Fix the bug that the image scan code (plus.barcode.scan) returns the data with quotation marks [Details](https://ask.dcloud.net.cn/question/74738)
  + Android平台 修复 获取设备信息（plus.device.getInfo）在部分只有一个IMEI号的设备（如华为荣耀6等）无返回值的Bug [详情](https://ask.dcloud.net.cn/question/74855)
  + Android platform fixes the bug that the device information (plus.device.getInfo) has no return value in some devices with only one IMEI number (such as Huawei Honor 6, etc.) [Details](https://ask.dcloud.net.cn/ question/74855)
  + Android平台 修复 uni-app应用中nvue页面使用uni-app编译模式打包后覆盖安装使用了weex模式（老模式）版本引起nvue页面白屏的Bug
  + Android platform Fix the bug that the nvue page in the uni-app application is packaged in the uni-app compilation mode and then overwritten and installed using the weex mode (old mode) version, which causes the white screen of the nvue page
  + iOS平台 修复 Webvie窗口中通过new plus.maps.Map方法创建地图控件后再调用append方法添加其它子窗口会引起地图控件变成全屏大小的Bug
  + iOS platform Fixed a bug in the Webvie window that created a map control through the new plus.maps.Map method and then called the append method to add other child windows, which would cause the map control to become full-screen.
  + iOS平台 修复 UniPush通过苹果APNS通道下发payload为字符串内容时，点击触发click事件中消息对象的payload属性值自动转换为包含无效数据json类型的Bug
  + iOS platform Fixed the bug that when UniPush delivered the payload as a string content through the Apple APNS channel, the value of the payload property of the message object in the click event was automatically converted to a json type containing invalid data
  + iOS平台 修复 nvue页面中获取渠道标识（plus.runtime.channel）返回值不正确的Bug
  + iOS platform Fix the bug that the return value of the channel ID (plus.runtime.channel) is incorrect in the nvue page
  + iOS平台 修复 真机运行时偶发页面无法渲染（白屏）的Bug [详情](https://ask.dcloud.net.cn/question/74782)
  + iOS platform Fix the bug that occasionally the page cannot be rendered (white screen) when the real machine is running [Details](https://ask.dcloud.net.cn/question/74782)

#### 2.1.1.20190716
* 【uni-app】
  + 修复 TypeScript 项目中包含 nvue 时编译报错的Bug
  + Fix the bug of compilation error when nvue is included in TypeScript project
  + App端 优化 titleNView 配置为字符串"false"时，等同于布尔型false，均为隐藏导航栏
  + App-side optimization When titleNView is configured as a string "false", it is equivalent to boolean false, and both hide the navigation bar
  + App端（Android平台） 修复部分场景下，导航栏标题显示为页面url的Bug
  + App side (Android platform) Fix the bug that the title of the navigation bar is displayed as the page url in some scenarios
  + H5端 修复 input 组件在 flex 布局下默认宽度为0的Bug
  + H5 side Fix the bug that the default width of the input component is 0 under flex layout
  + H5端 修复 input 组件设置高度后文字默认未垂直居中的Bug
  + H5 side Fix the bug that the text is not vertically centered by default after the height of the input component is set
  + hello uni-app 修复顶部选项卡（nvue版本）下拉刷新无法回弹的Bug
  + hello uni-app fix the bug that the top tab (nvue version) pull-down refresh cannot bounce back
* 【5+App插件】
* 【5+App Plugins】
  + iOS平台 修复 uni-app使用非自定义组件模式编译可能出现卡在splash界面或崩溃闪退的Bug [详情](https://ask.dcloud.net.cn/question/74644)
  + iOS platform Fix the bug that uni-app may get stuck in splash interface or crash when compiled using non-custom component mode [Details](https://ask.dcloud.net.cn/question/74644)
  + iOS平台 修复 5+应用使用WKWebview在某些情况下可能引起闪退的Bug
  + iOS platform fix bug that 5+ applications using WKWebview may cause crash in some cases
  + iOS平台 修复 webview的circle样式下拉刷新操作不流畅和显示细节不正确的Bug [详情](https://ask.dcloud.net.cn/question/74717)
  + iOS platform Fix the bug that the circle style pull-down refresh operation of webview is not smooth and the display details are incorrect [Details](https://ask.dcloud.net.cn/question/74717)
  + Android平台 修复 nvue页面中image标签的placeholder属性设置本地地址可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/74646)
  + Android platform Fix the bug that the placeholder attribute of the image tag in the nvue page may cause a crash when setting the local address [Details](https://ask.dcloud.net.cn/question/74646)
  + Android平台 修复 原生控件对象（plus.nativeObj.View）不添加到Webview窗口直接显示后无法正常关闭的Bug [详情](https://ask.dcloud.net.cn/question/74744)
  + Android platform Fix the bug that the native control object (plus.nativeObj.View) cannot be closed normally after it is not added to the Webview window and displayed directly [Details](https://ask.dcloud.net.cn/question/74744)

#### 2.1.0.20190713
* 【uni-app】
  + 【重要】App平台 新增 debug调试功能（限自定义组件模式），支持vue/nvue页面断点调试、支持nvue页面element审查 [详情](https://uniapp.dcloud.io/snippet?id=%e5%85%b3%e4%ba%8e-app-%e7%9a%84%e8%b0%83%e8%af%95)
  + [Important] The App platform adds debug debugging function (limited to custom component mode), supports vue/nvue page breakpoint debugging, and supports nvue page element review [Details](https://uniapp.dcloud.io/snippet?id =%e5%85%b3%e4%ba%8e-app-%e7%9a%84%e8%b0%83%e8%af%95)
  + 【重要】App平台 nvue 新增 uni-app编译模式。以后同时存在weex编译模式和uni-app编译模式。uni-app编译模式将不再使用weex组件，而是改用uni基础组件，目前已支持部分组件，并支持nvue页面编译到H5和小程序端 [详情](https://ask.dcloud.net.cn/article/36074)
  + [Important] App platform nvue adds uni-app compilation mode. In the future, both the weex compilation mode and the uni-app compilation mode will exist. The uni-app compilation mode will no longer use the weex component, but the uni basic component. Currently, some components are supported, and nvue pages are compiled to H5 and applet [details](https://ask.dcloud.net .cn/article/36074)
  + 【重要】App平台 nvue 新增 编译时校验css合法性，对于App平台的nvue不支持的样式在控制台给予告警（不影响编译结果） [详情](https://ask.dcloud.net.cn/article/36093)
  + [Important] App platform nvue adds a new method to verify the validity of CSS when compiling. For styles that are not supported by nvue on the App platform, an alarm will be given in the console (does not affect the compilation result) [Details](https://ask.dcloud.net .cn/article/36093)
  + 调整 推荐使用rpx替代upx，rpx支持全端动态绑定，无需再使用uni.upx2px [详情](https://ask.dcloud.net.cn/article/36130)
  + Adjustment It is recommended to use rpx instead of upx, rpx supports full-end dynamic binding, no need to use uni.upx2px [Details](https://ask.dcloud.net.cn/article/36130)
  + 修复 内置CSS变量应用于calc方法时，在特定场景下失效的Bug [详情](https://ask.dcloud.net.cn/question/67834)
  + Fix the bug that when the built-in CSS variable is applied to the calc method, it fails in certain scenarios [Details](https://ask.dcloud.net.cn/question/67834)
  + 修复 自定义组件模式下，未直接修改 props 仍报 [Vue warn]: Avoid mutating a prop directly… 异常信息的Bug [详情](https://ask.dcloud.net.cn/question/72649)
  + Fixed the bug of abnormal information [Vue warn]: Avoid mutating a prop directly… abnormal information is still reported without directly modifying props in custom component mode [Details](https://ask.dcloud.net.cn/question/72649)
  + 修复 自定义组件模式下，非 h5 平台，当计算属性发生错误，导致页面其他数据不再更新的 Bug [#530](https://github.com/dcloudio/uni-app/issues/530)
  + Fix the bug in custom component mode, non-h5 platform, when an error occurs in the computed property, other data on the page is no longer updated [#530](https://github.com/dcloudio/uni-app/issues/530)
  + App/H5平台 修复 input 组件 letter-spacing 样式不生效的 Bug [#485](https://github.com/dcloudio/uni-app/issues/485)
  + App/H5 platform Fix the bug that the letter-spacing style of the input component does not take effect [#485](https://github.com/dcloudio/uni-app/issues/485)
  + App/H5平台 修复 textarea 组件在 iOS 设备上自增高度计算错误的 Bug [详情](https://ask.dcloud.net.cn/question/68372)
  + App/H5 platform Fix the bug of incorrect height calculation of textarea component on iOS devices [Details](https://ask.dcloud.net.cn/question/68372)
  + App/H5平台 修复 input 组件 min-height 样式不生效的 Bug
  + App/H5 platform fix the bug that the min-height style of the input component does not take effect
  + App平台 新增 支持 navigationStyle 配置为 custom 时隐藏导航栏
  + App platform added support for hiding the navigation bar when the navigationStyle is configured as custom
  + App平台 新增 nvue 在uni-app编译模式下，新增支持全局样式（App.vue中的样式，会作用于页面级.nvue文件）
  + App platform Added nvue In uni-app compilation mode, added support for global styles (styles in App.vue will apply to page-level .nvue files)
  + App平台 新增 uni.getLocation 接口支持获取海拔高度
  + App platform Added uni.getLocation interface to support getting altitude
  + App平台 优化 uni.previewImage 的 longPressActions 回调支持返回图片索引值
  + App platform optimization uni.previewImage's longPressActions callback supports returning image index value
  + App平台 优化 uni.connectSocket 接口支持 protocols 参数配置
  + App platform optimized uni.connectSocket interface to support protocols parameter configuration
  + App平台 优化 组件 style 动态绑定样式支持 upx 单位
  + App platform optimization component style dynamic binding style support upx unit
  + App平台 修复 backgroundAudioManager 对象 onStop 事件监听不生效的 Bug
  + App platform Fix the bug that the onStop event monitoring of the backgroundAudioManager object does not take effect
  + App平台 修复 uni.getSavedFileList、uni.getSavedFileInfo 能获取到已删除文件信息的 Bug [详情](https://ask.dcloud.net.cn/question/77936)
  + App platform Fix the bug that uni.getSavedFileList and uni.getSavedFileInfo can get deleted file information [Details](https://ask.dcloud.net.cn/question/77936)
  + App平台 修复 map 组件 中的 iconPath 不支持本地路径的 Bug [详情](https://ask.dcloud.net.cn/question/72660)
  + App platform Fix the bug that the iconPath in the map component does not support the local path [Details](https://ask.dcloud.net.cn/question/72660)
  + App平台 修复 uni.getStorageInfo 无法获取缓存信息的 Bug [详情](https://ask.dcloud.net.cn/question/70600)
  + App platform Fixed the bug that uni.getStorageInfo could not get cached information [Details](https://ask.dcloud.net.cn/question/70600)
  + App平台 修复 textarea 组件 @blur 事件中未返回 cursor 参数的 Bug [#365](https://github.com/dcloudio/uni-app/issues/365)
  + App platform Fix the bug that the cursor parameter is not returned in the @blur event of the textarea component [#365](https://github.com/dcloudio/uni-app/issues/365)
  + App平台 修复 uni.chooseLocation 打开的位置选择页面，下方的地点列表某些情况无法自动加载的 Bug [详情](https://ask.dcloud.net.cn/question/73007)
  + App platform Fixed a bug where the location selection page opened by uni.chooseLocation, the location list at the bottom could not be automatically loaded in some cases [Details](https://ask.dcloud.net.cn/question/73007)
  + App平台 修复 cover-view 组件无法销毁的 Bug
  + App platform to fix the bug that the cover-view component cannot be destroyed
  + App平台 修复 cover-view 组件在安卓平台，特定情况下无法显示文字的 Bug
  + App platform Fix the bug that the cover-view component cannot display text under certain circumstances on the Android platform
  + App平台 修复 cover-image 组件在自定义组件编译模式，无法使用网络图片路径的 Bug [详情](https://ask.dcloud.net.cn/question/69236)
  + App platform Fix the bug that the cover-image component cannot use the network image path in the custom component compilation mode [Details](https://ask.dcloud.net.cn/question/69236)
  + App平台 修复 uni.scanCode 在 iOS 设备上侧滑返回不触发 fail 回调的 Bug [详情](https://ask.dcloud.net.cn/question/73372)
  + App platform Fix the bug that uni.scanCode slides back on iOS devices without triggering fail callback [Details](https://ask.dcloud.net.cn/question/73372)
  + App平台 修复 在 uni.scanCode 回调函数内调用 uni.setNavigationBarTitle 接口不生效的 Bug [详情](https://ask.dcloud.net.cn/question/73593)
  + App platform Fix the bug that calling the uni.setNavigationBarTitle interface in the uni.scanCode callback function does not take effect [Details](https://ask.dcloud.net.cn/question/73593)
  + App平台 修复 input 组件设置 disabled 属性后，在 iOS 平台文字颜色变浅的 Bug [详情](https://ask.dcloud.net.cn/question/72971)
  + App platform Fix the bug that the text color becomes lighter on the iOS platform after setting the disabled attribute of the input component [Details](https://ask.dcloud.net.cn/question/72971)
  + App平台 修复 uni.chooseVideo 返回值中 duration/width/height 错误的 Bug [详情](https://ask.dcloud.net.cn/question/71001)
  + App platform Fix the bug of incorrect duration/width/height in the return value of uni.chooseVideo [Details](https://ask.dcloud.net.cn/question/71001)
  + App平台 修复 非自定义组件模式 InnerAudioContext 对象无法销毁的 Bug
  + App platform fix bug that InnerAudioContext object cannot be destroyed in non-custom component mode
  + App平台 修复 InnerAudioContext 对象获取 buffered 值不正确的 Bug [详情](https://ask.dcloud.net.cn/question/73902)
  + App platform Fix the bug that InnerAudioContext object gets incorrect buffered value [Details](https://ask.dcloud.net.cn/question/73902)
  + H5平台 新增 uni.createIntersectionObserver 接口支持
  + H5 platform added uni.createIntersectionObserver interface support
  + H5平台 新增 uni.createAnimation 接口支持，组件支持 animation 属性
  + H5 platform added uni.createAnimation interface support, components support animation property
  + H5平台 新增 video 组件支持配置 x5-playsinline 属性
  + H5 platform added video component to support configuring x5-playsinline property
  + H5平台 优化 uni.showModal 内容支持通过 \n 实现换行显示 [详情](https://ask.dcloud.net.cn/question/67355)
  + H5 platform Optimized uni.showModal content to support line break display through \n [Details](https://ask.dcloud.net.cn/question/67355)
  + H5平台 优化 自动修改 document.title 为 navigationBarTitleText 的值 [#394](https://github.com/dcloudio/uni-app/issues/394)
  + H5 platform optimization Automatically modify document.title to the value of navigationBarTitleText [#394](https://github.com/dcloudio/uni-app/issues/394)
  + H5平台 优化 URL 参数解析方式 [#445](https://github.com/dcloudio/uni-app/issues/445)
  + H5 platform optimize URL parameter parsing method [#445](https://github.com/dcloudio/uni-app/issues/445)
  + H5平台 优化 页面生命周期 onLaunch、onShow 中支持获取 path、query 参数 [#408](https://github.com/dcloudio/uni-app/issues/408)
  + H5 platform optimization Support for obtaining path and query parameters in onLaunch and onShow in the page life cycle [#408](https://github.com/dcloudio/uni-app/issues/408)
  + H5平台 修复 在页面或组件内定义 input 组件 placeholder-class 不生效的 Bug [详情](https://ask.dcloud.net.cn/question/62846)
  + H5 platform Fix the bug that the placeholder-class of the input component defined in the page or component does not take effect [Details](https://ask.dcloud.net.cn/question/62846)
  + H5平台 修复 InnerAudioContext 对象 buffered 属性读取报错的 Bug [详情](https://ask.dcloud.net.cn/question/73902)
  + H5 platform Fixed the bug that the buffered property of InnerAudioContext object was read incorrectly [Details](https://ask.dcloud.net.cn/question/73902)
  + H5平台 修复 onPageScroll、onReachBottom 等生命周期无法触发的 Bug
  + H5 platform Fix bugs that cannot be triggered in the life cycle of onPageScroll, onReachBottom, etc.
  + H5平台 修复 uni.canvasToTempFilePath 接口 desWidth、desHeight 参数不生效的 Bug
  + For H5 platform, fix the bug that the parameters desWidth and desHeight of uni.canvasToTempFilePath interface do not take effect
  + H5平台 修复 微信浏览器中 uni.openLocation 打开的查看位置页面，“去这里”按钮点击无效的 Bug [详情](https://ask.dcloud.net.cn/question/73089)
  + H5 platform Fix the bug that the "go here" button is invalid in the view location page opened by uni.openLocation in WeChat browser [Details](https://ask.dcloud.net.cn/question/73089)
  + H5平台 修复 mixin 中定义的 onLoad、onShow 等页面生命周期钩子函数不生效的 Bug [详情](https://ask.dcloud.net.cn/question/69412)
  + H5 platform Fix the bug that the onLoad, onShow and other page life cycle hook functions defined in the mixin do not take effect [Details](https://ask.dcloud.net.cn/question/69412)
  + H5平台 修复 textarea 组件设置 auto-height 属性后，在 Chrome 浏览器内仍然显示滚动条的 Bug [详情](https://ask.dcloud.net.cn/question/68372)
  + H5 platform Fix the bug that scroll bars are still displayed in Chrome browser after setting the auto-height attribute of the textarea component [Details](https://ask.dcloud.net.cn/question/68372)
  + H5平台 修复 textarea 组件在特定场景下，不触发@input事件的 Bug [详情](https://ask.dcloud.net.cn/question/73221)
  + H5 platform Fix the bug that the textarea component does not trigger the @input event in certain scenarios [Details](https://ask.dcloud.net.cn/question/73221)
  + H5平台 修复 uni.showLoading 方法 mask 参数配置无效的 Bug
  + H5 platform fix the bug that the mask parameter configuration of uni.showLoading method is invalid
  + H5平台 修复 innerAudioContext 对象的 src 属性使用相对路径时，音频无法播放的 Bug [详情](https://ask.dcloud.net.cn/question/73632)
  + H5 platform Fix the bug that audio cannot be played when the src property of the innerAudioContext object uses a relative path [Details](https://ask.dcloud.net.cn/question/73632)
  + H5平台 修复 uni.previewImage 不传 current 参数时，运行报错的 Bug
  + H5 platform Fixed the bug of running error when uni.previewImage does not pass the current parameter
  + H5平台 修复 movable-area 组件 scale 事件中无法获取 x、y 属性的Bug [#408](https://github.com/dcloudio/uni-app/issues/415)
  + H5 platform Fix the bug that the x and y attributes cannot be obtained in the scale event of the movable-area component [#408](https://github.com/dcloudio/uni-app/issues/415)
  + H5平台 修复 navigator 组件 delta 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/65354)
  + H5 platform Fix the bug that the delta attribute of the navigator component does not take effect [Details](https://ask.dcloud.net.cn/question/65354)
  + H5平台 修复 uni.navigateBack 接口 delta 值大于1时中间页面未销毁的Bug [详情](https://ask.dcloud.net.cn/question/62639)
  + H5 platform Fix the bug that the intermediate page is not destroyed when the delta value of the uni.navigateBack interface is greater than 1 [Details](https://ask.dcloud.net.cn/question/62639)
  + H5平台 修复 在 Chrome 浏览器中快速滑动 swiper 组件，可能会导致动画卡死的 Bug [#107](https://github.com/dcloudio/uni-app/issues/107)
  + H5 platform Fix a bug that may cause the animation to freeze when swiping the swiper component quickly in the Chrome browser [#107](https://github.com/dcloudio/uni-app/issues/107)
  + H5平台 修复 在 iOS 浏览器中点击 view 组件显示半透明高亮效果的 Bug [#440](https://github.com/dcloudio/uni-app/issues/440)
  + H5 platform Fix bug in iOS browser when click on view component shows translucent highlight effect [#440](https://github.com/dcloudio/uni-app/issues/440)
  + 微信小程序平台 修复 页面默认显示分享菜单的Bug [#411](https://github.com/dcloudio/uni-app/issues/411)
  + Wechat applet platform to fix the bug that the page displays the share menu by default [#411](https://github.com/dcloudio/uni-app/issues/411)
  + 支付宝小程序平台 新增 transitionend/animationstart/animationiteration/animationend 通用事件支持
  + Alipay applet platform added transitionend/animationstart/animationiteration/animationend general event support
  + 支付宝小程序平台 新增 scroll-view 组件支持scrolltoupper/scrolltolower事件
  + Alipay applet platform added scroll-view component to support scrolltoupper/scrolltolower events
  + 支付宝小程序平台 修复 无法使用npm方式引入@dcloudio/uni-ui的Bug  [#431](https://github.com/dcloudio/uni-app/issues/431)
  + The Alipay applet platform fixed the bug that @dcloudio/uni-ui could not be imported via npm [#431](https://github.com/dcloudio/uni-app/issues/431)
  + 支付宝小程序平台 修复 web-view 组件中 postMessage 不能正常触发 @message 事件的 Bug [#389](https://github.com/dcloudio/uni-app/issues/389)
  + Alipay applet platform Fix the bug that the postMessage in the web-view component cannot trigger the @message event normally [#389](https://github.com/dcloudio/uni-app/issues/389)
  + 百度小程序平台 修复 页面直达时，onLoad生命周期不触发的Bug
  + Baidu applet platform fixes the bug that the onLoad life cycle does not trigger when the page is directly connected
  + 百度小程序平台 修复 App.vue中onShow不触发的Bug [详情](https://ask.dcloud.net.cn/question/71446)
  + Baidu applet platform to fix the bug that onShow does not trigger in App.vue [Details](https://ask.dcloud.net.cn/question/71446)
  + 字节跳动小程序平台 修复 getCurrentPages 接口返回的页面对象中route属性缺失的Bug [详情](https://ask.dcloud.net.cn/question/72603)
  + ByteDance Mini Program Platform Fix the bug that the route attribute is missing in the page object returned by the getCurrentPages interface [Details](https://ask.dcloud.net.cn/question/72603)
  + uni-ui 修复 LoadMore 加载更多组件不显示加载中动画的 Bug
  + uni-ui fix the bug that LoadMore does not display loading animation when loading more components
  + hello uni-app 小程序平台 当用户拒绝定位权限后，再次点击获取定位时，引导用户去设置中开启
  + hello uni-app applet platform When the user refuses the location permission and clicks to obtain location again, guide the user to enable it in the settings
  + 新闻/资讯App模板 nvue页面使用新的uni-app编译模式，用uni基础组件重写，实现了nvue页面直接跨多端，App端新增了自定义的下拉刷新
  + News/Information App Template The nvue page uses the new uni-app compilation mode and is rewritten with uni basic components, which enables the nvue page to directly cross multiple terminals, and a custom pull-down refresh is added on the App side
  + 登录模板 修复 在支付宝平台页面高度设置 100% 未生效的Bug
  + Login template to fix the bug that the height setting of 100% on the Alipay platform page does not take effect
  + 登录模板 修复 在字节跳动小程序上自定义组件编译模式下输入框样式错乱的 Bug
  + Login template Fix the bug that the input box style is disordered in the custom component compilation mode on the ByteDance applet
* 【5+App插件】
* 【5+App Plugins】
  + 【重要】新增 5+App添加UniPush功能，替代之前的个推和小米推送。[详情](https://ask.dcloud.net.cn/article/35622)
  + [Important] Added 5+App to add UniPush function, replacing the previous personal push and Xiaomi push. [Details](https://ask.dcloud.net.cn/article/35622)
  + 【重要】新增 获取设备信息方法（plus.device.getInfo），不再推荐使用plus.device.imei。把属性改为方法可以避免Android平台在应用启动时被某些手机提示需要电话权限的问题。[详情](https://ask.dcloud.net.cn/article/36075)
  + [Important] Added the method to get device information (plus.device.getInfo), and it is no longer recommended to use plus.device.imei. Changing the attribute to a method can avoid the problem that the Android platform is prompted by some mobile phones to require phone permissions when the application is started. [Details](https://ask.dcloud.net.cn/article/36075)
  + 【重要】Android平台 云端打包API等级（targetSdkVersion）默认值调整为26，满足各主流应用市场的上架要求
  + [Important] The default value of the cloud packaging API level (targetSdkVersion) on the Android platform is adjusted to 26, which meets the listing requirements of various mainstream application markets.
  + 新增 获取应用（ipa/apk）版本号（plus.runtime.versionCode）接口 [文档](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.versionCode)
  + Added interface to get application (ipa/apk) version number (plus.runtime.versionCode) [documentation](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.versionCode)
  + 新增 获取应用信息（plus.runtime.getProperty）支持manifest.json文件中的版本号（version->code字段值） [文档](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.WidgetInfo)
  + Added support for getting application information (plus.runtime.getProperty) to support version number (version->code field value) in manifest.json file [Documentation](https://www.html5plus.org/doc/zh_cn/runtime. html#plus.runtime.WidgetInfo)
  + 修复 网络请求接口（plus.net.XMLHttpRequest）获取HTTP响应头部信息字段中多一个空格的Bug
  + Fix the bug that the network request interface (plus.net.XMLHttpRequest) gets an extra space in the header information field of the HTTP response
  + Android平台 优化 图片预览（plus.nativeUI.previewImage）界面未沉浸式状态栏效果
  + Android platform optimization Picture preview (plus.nativeUI.previewImage) interface does not have immersive status bar effect
  + Android平台 修复 配置渠道云端打包后获取的渠道信息（plus.runtime.channel）总是为空的Bug [详情](https://ask.dcloud.net.cn/question/72721)
  + Android platform Fix the bug that the channel information (plus.runtime.channel) obtained after configuring the channel cloud package is always empty [Details](https://ask.dcloud.net.cn/question/72721)
  + Android平台 修复 HBuilderX2.0.0版本引出的plus.io.getImageInfo一直触发失败回调的Bug [详情](https://ask.dcloud.net.cn/question/72240)
  + Android platform Fixed the bug that the plus.io.getImageInfo caused by HBuilderX2.0.0 version kept triggering the failure callback [Details](https://ask.dcloud.net.cn/question/72240)
  + Android平台 修复 搜索蓝牙设备（plus.bluetooth.startBluetoothDevicesDiscovery）设置为允许重复上报相同设备（allowDuplicatesKey参数为true）时，获取设备列表为空的Bug
  + Android platform Fixed the bug that when searching for bluetooth devices (plus.bluetooth.startBluetoothDevicesDiscovery) is set to allow repeated reporting of the same device (allowDuplicatesKey parameter is true), the bug that the device list is empty
  + Android平台 修复 图片预览（plus.nativeUI.previewImage）设置两张图片且loop为true会闪退的Bug [详情](https://ask.dcloud.net.cn/question/72711)
  + Android platform Fix the bug that the image preview (plus.nativeUI.previewImage) will crash when two images are set and loop is true [Details](https://ask.dcloud.net.cn/question/72711)
  + Android平台 完善 原生图片对象（plus.nativeObj.Bitmap）保存图片（save）方法兼容非预期参数 [详情](https://ask.dcloud.net.cn/question/72937)
  + Android platform improvement Native image object (plus.nativeObj.Bitmap) save image (save) method compatible with unexpected parameters [Details](https://ask.dcloud.net.cn/question/72937)
  + Android平台 修复 使用unipush模块提交华为应用市场报“HMS根证书文件”错误的Bug [详情](https://ask.dcloud.net.cn/question/73258)
  + Android platform Fixed the bug that "HMS root certificate file" error was reported in Huawei AppGallery using the unipush module [Details](https://ask.dcloud.net.cn/question/73258)
  + Android平台 修复 Webview窗口在某些情况（如退出视频全屏播放、弹出软键盘按home键后再切回前台、wap2app应用设置statusbar）可能出现底部空缺的Bug [详情](https://ask.dcloud.net.cn/question/72909)
  + Android platform fixes the bug that the bottom of the Webview window may be vacant in some cases (such as exiting the video full-screen playback, popping up the soft keyboard and pressing the home button and then switching back to the foreground, wap2app setting the statusbar) [Details](https://ask. dcloud.net.cn/question/72909)
  + Android平台 修复 subnvue窗口在某些情况下调用setStyle无效的Bug
  + Android platform Fixed the bug that the subnvue window called setStyle invalid in some cases
  + Android平台 修复 视频控件（VideoPlayer）可能偶发出现进度条不更新不消失的Bug
  + Android platform fix the video control (VideoPlayer) may occasionally appear the bug that the progress bar does not update and does not disappear
  + Android平台 修复 视频播放（VideoPlayer）控件提交云端打包后无法播放本地视频文件的Bug [详情](https://ask.dcloud.net.cn/question/74129)
  + Android platform Fixed the bug that the video player (VideoPlayer) control could not play the local video file after submitting the cloud package [Details](https://ask.dcloud.net.cn/question/74129)
  + Android平台 修复 应用第一次运行时调用定位功能可能不弹出定位权限申请框也不触发错误回调的Bug [详情](https://ask.dcloud.net.cn/question/73081)
  + Android platform Fix the bug that when the application is running for the first time, the positioning function may not pop up the positioning permission application box or trigger the error callback [Details](https://ask.dcloud.net.cn/question/73081)
  + Android平台 修复 原生控件（NView）绘制字体图标在部分魅族手机上可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/64233)
  + Android platform Fix the bug that the font icon drawn by native control (NView) may not be displayed on some Meizu phones [Details](https://ask.dcloud.net.cn/question/64233)
  + Android平台 修复 部分手机上设置titleNView后可能引起页面高度不对的Bug [详情](https://ask.dcloud.net.cn/article/74198)
  + Android platform Fix a bug that may cause incorrect page height after setting titleNView on some mobile phones [Details](https://ask.dcloud.net.cn/article/74198)
  + Android平台 修复 通过plus.runtime.launchApplication启动的应用可能出现plus.runtime.arguments更新失败的Bug [详情](https://ask.dcloud.net.cn/question/74479)
  + Android platform Fix the bug that plus.runtime.arguments may fail to update for applications launched through plus.runtime.launchApplication [Details](https://ask.dcloud.net.cn/question/74479)
  + Android平台 修复 nvue页面云端打包后设置字体（font-family）属性可能无效的Bug
  + Android platform Fix the bug that setting the font (font-family) attribute may be invalid after the nvue page is packaged in the cloud
  + Android平台 修复 nvue页面创建WebSockets连接服务器总是反馈超时错误的Bug
  + Android platform Fixed the bug that the server always reported a timeout error when creating a WebSockets connection on the nvue page
  + Android平台 修复 uni-app为多tab应用，切换显示nvue页面时可能出现顶部留白的Bug [详情](https://ask.dcloud.net.cn/question/73687)
  + Android platform Fix uni-app is a multi-tab application, there may be a bug with a blank top when switching to display nvue pages [Details](https://ask.dcloud.net.cn/question/73687)
  + iOS平台 修复 提交苹果应用市场（AppStore）审核提示违反Guideline2.5.2的Bug [详情](https://ask.dcloud.net.cn/question/70813)
  + iOS platform fixes Bugs that violated Guideline 2.5.2 when submitted for review in the Apple App Store (AppStore) [Details](https://ask.dcloud.net.cn/question/70813)
  + iOS平台 修复 音频播放（AudioPlayer）后台播放网络音乐时控制页面（iOS锁屏控制页）进度显示不准确的Bug [详情](https://ask.dcloud.net.cn/question/71891)
  + iOS platform Fix the bug of inaccurate progress display on the control page (iOS lock screen control page) when the audio player (AudioPlayer) is playing network music in the background [Details](https://ask.dcloud.net.cn/question/71891)
  + iOS平台 修复 数据库（SQLite）在多个页面同时操作时可能无效的Bug [详情](https://ask.dcloud.net.cn/question/72299)
  + iOS platform Fix the bug that the database (SQLite) may be invalid when multiple pages are operated at the same time [Details](https://ask.dcloud.net.cn/question/72299)
  + iOS平台 修复 Webview窗口设置不替换H5标准定位接口（replacewebapi：{geolocation:'none'}）不生效的Bug
  + iOS platform Fix the bug that the Webview window setting does not replace the H5 standard positioning interface (replace webapi: {geolocation: 'none'}) does not take effect
  + iOS平台 修复 日期选择（plus.nativeUI.pickDate）设置显示日期小于起始日期时默认返回的日期不正确的Bug [详情](https://ask.dcloud.net.cn/question/71886)
  + iOS platform Fix the bug that the date selection (plus.nativeUI.pickDate) setting shows that the date returned by default is incorrect when the date is less than the starting date [Details](https://ask.dcloud.net.cn/question/71886)
  + iOS平台 修复 获取图片信息（plus.io.getImageInfo）可能不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/71511)
  + iOS platform Fix the bug that getting image information (plus.io.getImageInfo) may not trigger the callback [Details](https://ask.dcloud.net.cn/question/71511)
  + iOS平台 修复 非自定义组件模式在某些情况子窗口高度计算不正确的Bug [详情](https://ask.dcloud.net.cn/question/72889)
  + iOS platform Fix the bug that the height of the child window is not calculated correctly in some cases in the non-custom component mode [Details](https://ask.dcloud.net.cn/question/72889)
  + iOS平台 修复 视频控件（VideoPlayer）播放时拖放调整进度后可能不触发播放结束事件的Bug
  + iOS platform Fix the bug that the playback end event may not be triggered after dragging and dropping the video control (VideoPlayer) to adjust the progress
  + iOS平台 修复 子Webview窗口中软键盘收起后页面无法自动恢复的Bug [详情](https://ask.dcloud.net.cn/question/74321)
  + iOS platform Fix the bug that the page cannot be automatically restored after the soft keyboard in the child Webview window is closed [Details](https://ask.dcloud.net.cn/question/74321)
  + iOS平台 修复 蓝牙（Bluetooth）第一次获取本机蓝牙适配器状态（getBluetoothAdapterState）不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/73242)
  + iOS platform Fix the bug that the bluetooth (getBluetoothAdapterState) does not trigger the callback for the first time. [Details](https://ask.dcloud.net.cn/question/73242)
  + iOS平台 修复 蓝牙（Bluetooth）特征值的write操作类型值为false时无法写入数据的Bug [详情](https://ask.dcloud.net.cn/question/69458)
  + iOS platform Fix the bug that data cannot be written when the write operation type value of the Bluetooth characteristic value is false [Details](https://ask.dcloud.net.cn/question/69458)
  + iOS平台 修复 蓝牙（Bluetooth）特征值的notify操作类型值为true时无法订阅的Bug [详情](https://ask.dcloud.net.cn/question/72063)
  + iOS platform Fix the bug that cannot be subscribed when the notify operation type value of the Bluetooth characteristic value is true [Details](https://ask.dcloud.net.cn/question/72063)
  + iOS平台 修复 nvue页面打开vue页面后弹出软键盘时可能会露出之前nvue页面内容的Bug
  + iOS platform Fix the bug that the content of the previous nvue page may be exposed when the soft keyboard pops up after the nvue page opens the vue page
  + iOS平台 修复 nvue页面中img标签src属性不支持"_doc"等开头的图片地址的Bug [详情](https://ask.dcloud.net.cn/question/64986)
  + iOS platform Fix the bug that the src attribute of the img tag in the nvue page does not support the image address starting with "_doc" [Details](https://ask.dcloud.net.cn/question/64986)
  + iOS平台 修复 地图控件中的标点对象（marker）在新开页面后再返回时点击报js错误的bug [详情](https://ask.dcloud.net.cn/question/74517)
  + iOS platform Fix the bug that the punctuation object (marker) in the map control is clicked to report a js error when returning to a new page [Details](https://ask.dcloud.net.cn/question/74517)
  + iOS平台 修复 nvue页面中获取渠道标识（plus.runtime.channel）返回值不正确的Bug
  + iOS platform Fix the bug that the return value of the channel ID (plus.runtime.channel) is incorrect in the nvue page

#### 2.0.1.20190614
* 【5+App插件】
* 【5+App Plugins】
  + Android平台 修复 配置渠道云端打包后获取的渠道信息（plus.runtime.channel）总是为空的Bug [详情](https://ask.dcloud.net.cn/question/72721)
  + Android platform Fix the bug that the channel information (plus.runtime.channel) obtained after configuring the channel cloud package is always empty [Details](https://ask.dcloud.net.cn/question/72721)
  + Android平台 修复 图片预览（plus.nativeUI.previewImage）设置两张图片且loop为true会闪退的Bug [详情](https://ask.dcloud.net.cn/question/72711)
  + Android platform Fix the bug that the image preview (plus.nativeUI.previewImage) will crash when two images are set and loop is true [Details](https://ask.dcloud.net.cn/question/72711)

#### 2.0.0.20190610
* 【uni-app】
  + 【重要】App平台 新增 subNVue ，支持使用原生组件绘制自定义导航栏、全屏遮罩等 [详情](https://uniapp.dcloud.io/api/window/subNVues)
  + [Important] App platform added subNVue, which supports the use of native components to draw custom navigation bars, full-screen masks, etc. [Details](https://uniapp.dcloud.io/api/window/subNVues)
  + 【重要】支付宝/百度/字节跳动小程序平台 新增 支持自定义组件模式，提升性能和增强vue语法支持，[详见](https://ask.dcloud.net.cn/article/35843)
  + [Important] Alipay/Baidu/ByteDance applet platform added support for custom component mode, improved performance and enhanced vue syntax support, [see details](https://ask.dcloud.net.cn/article/35843 )
  + 新增 uni.$on,uni.$once,uni.$off,uni.$emit 方法，提供更优雅的页面间通信解决方案 [详情](https://uniapp.dcloud.io/api/window/communication)
  + Added uni.$on, uni.$once, uni.$off, uni.$emit methods to provide a more elegant solution for inter-page communication [Details](https://uniapp.dcloud.io/api/window /communication)
  + 新增 组件 editor 富文本编辑器组件，包括微信和App平台 [详情](https://uniapp.dcloud.io/component/editor)
  + New component editor Rich text editor component, including WeChat and App platforms [Details](https://uniapp.dcloud.io/component/editor)
  + 新增 pages.json支持配置导航栏下方的阴影线navigationbarshadow [详情](https://uniapp.dcloud.io/collocation/pages?id=navigationbarshadow)
  + Added support for configuring the shadow line navigationbarshadow below the navigation bar in pages.json [Details](https://uniapp.dcloud.io/collocation/pages?id=navigationbarshadow)
  + 修复 map 组件 @regionchange 事件绑定不生效的bug [详情](https://ask.dcloud.net.cn/article/35534)
  + Fix the bug that the @regionchange event binding of the map component does not take effect [Details](https://ask.dcloud.net.cn/article/35534)
  + 修复 更多 v-model 用法支持 [详情](https://ask.dcloud.net.cn/question/71517)
  + Fix more v-model usage support [Details](https://ask.dcloud.net.cn/question/71517)
  + App平台 新增 uni.chooseVideo API 支持 camera、maxDuration 参数 [详情](https://uniapp.dcloud.io/api/media/video?id=choosevideo)
  + App platform Added uni.chooseVideo API to support camera, maxDuration parameters [Details](https://uniapp.dcloud.io/api/media/video?id=choosevideo)
  + App平台 新增 getLocation 支持geocode参数，开发者可控制是否解析省市街道地址信息 [详情](https://uniapp.dcloud.io/api/location/location?id=getlocation)
  + App platform Added getLocation to support geocode parameters, developers can control whether to parse provincial and municipal street address information [Details](https://uniapp.dcloud.io/api/location/location?id=getlocation)
  + App平台 新增 getLocation 成功回调中增加 address 属性，支持获取省市街道地址信息 [详情](https://uniapp.dcloud.io/api/location/location?id=getlocation)
  + App platform Added the address property in the getLocation success callback to support obtaining the provincial and municipal street address information [Details](https://uniapp.dcloud.io/api/location/location?id=getlocation)
  + App平台 修复 getLocation 经纬度获取成功、但地址解析失败时，未触发成功回调的Bug
  + App platform Fix the bug that the success callback is not triggered when the getLocation latitude and longitude is obtained successfully, but the address resolution fails
  + App平台 修复 项目中仅包含 nvue 页面时运行报错的Bug
  + App platform Fix the bug of running error when only nvue pages are included in the project
  + App平台 修复 偶发编译出错后再次保存代码不再继续编译的Bug
  + App platform Fix the bug that save the code again after the occasional compilation error will not continue to compile
  + App平台 修复 popup类型的subNVue在特定场景下弹出时，遮罩未覆盖底部选项卡的Bug [详情](https://ask.dcloud.net.cn/question/72091)
  + App platform Fixed the bug that the mask does not cover the bottom tab when the popup type subNVue pops up in a specific scene [Details](https://ask.dcloud.net.cn/question/72091)
  + App平台 修复 部分 iOS 机型上 uni.canvasToTempFilePath 保存的图像内容空白的问题 [详情](https://ask.dcloud.net.cn/question/71200)
  + App platform Fix the problem that the image content saved by uni.canvasToTempFilePath is blank on some iOS models [Details](https://ask.dcloud.net.cn/question/71200)
  + App平台 修复 picker 组件在部分安卓手机上关闭时报错的Bug
  + App platform Fix the bug that the picker component is closed on some Android phones
  + App平台 修复 picker 组件在 iOS8 设备上无法显示的Bug
  + App Platform Fix the bug that the picker component cannot be displayed on iOS8 devices
  + App平台 修复 uni.previewimage 接口的 longPressActions 回调无效的Bug
  + App platform Fix the bug that the longPressActions callback of the uni.previewimage interface is invalid
  + H5平台 新增 innerAudioContext 实现取消事件监听方法 [#393](https://github.com/dcloudio/uni-app/issues/393)
  + H5 platform added innerAudioContext to cancel event listener method [#393](https://github.com/dcloudio/uni-app/issues/393)
  + H5平台 优化 picker、picker-view 组件滚动停止过慢的问题 [#278](https://github.com/dcloudio/uni-app/issues/278)、[#367](https://github.com/dcloudio/uni-app/issues/367)
  + H5 platform optimization picker, picker-view component scrolling stops too slowly [#278](https://github.com/dcloudio/uni-app/issues/278), [#367](https://github.com .com/dcloudio/uni-app/issues/367)
  + H5平台 修复 Safari 浏览器调用 uni.getSystemInfoSync 接口报错的Bug
  + H5 platform Fix the bug that the Safari browser reported an error when calling the uni.getSystemInfoSync interface
  + H5平台 修复 uni.getSystemInfoSync 在部分手机上执行异常的Bug [详情](https://ask.dcloud.net.cn/question/71622)
  + H5 platform Fix the bug that uni.getSystemInfoSync executes abnormally on some mobile phones [Details](https://ask.dcloud.net.cn/question/71622)
  + H5平台 修复 picker 组件设置 start 属性后导致部分日期无法选择的Bug [#404](https://github.com/dcloudio/uni-app/issues/404)
  + H5 platform Fix the bug that some dates cannot be selected after setting the start attribute of the picker component [#404](https://github.com/dcloudio/uni-app/issues/404)
  + H5平台 修复 video 组件全屏后播放控件被视频遮挡的Bug [详情](https://ask.dcloud.net.cn/question/71831)
  + H5 platform Fix the bug that the playback controls are blocked by the video after the video component is full screen [Details](https://ask.dcloud.net.cn/question/71831)
  + H5平台 修复 页面点击事件中获取的x坐标不正确的Bug [详情](https://ask.dcloud.net.cn/question/71921)
  + H5 platform Fix the bug that the x-coordinate obtained in the page click event is incorrect [Details](https://ask.dcloud.net.cn/question/71921)
  + H5平台 修复 uni.showToast() 被部分页面元素遮挡的Bug [详情](https://ask.dcloud.net.cn/question/70914)
  + H5 platform Fix the bug that uni.showToast() was blocked by some page elements [Details](https://ask.dcloud.net.cn/question/70914)
  + H5平台 修复 某些情况下外部修改 history 导致路由卡在当前页面、无法后退的Bug
  + H5 platform Fix the bug that in some cases, external modification of history causes the router to be stuck on the current page and cannot go back
  + H5平台 修复 部分浏览器上 canvas 监听 touch 事件无法获取触发坐标的Bug
  + H5 platform Fix the bug that some browsers cannot get the trigger coordinates when the canvas listens to the touch event
  + H5平台 修复 image 组件的src属性为空时，错误触发资源请求的Bug
  + H5 platform Fix the bug of incorrectly triggering resource requests when the src attribute of the image component is empty
  + H5平台 修复 movable-view 组件的animation属性无效的Bug
  + H5 platform Fix the bug that the animation property of the movable-view component is invalid
  + 微信小程序平台 新增 支持workers目录配置 [详情](https://uniapp.dcloud.io/collocation/manifest?id=mp-weixin)
  + WeChat Mini Program Platform Added support for workers directory configuration [Details](https://uniapp.dcloud.io/collocation/manifest?id=mp-weixin)
  + 支付宝小程序平台 新增 设置TabBar 相关API [详情](https://uniapp.dcloud.io/api/ui/tabbar?id=settabbaritem)
  + Alipay Mini Program Platform Added TabBar related API [Details](https://uniapp.dcloud.io/api/ui/tabbar?id=settabbaritem)
  + 支付宝小程序平台 修复 uni.showLoading() 在小程序开发者工具 v0.32.3 版本下报错的Bug [详情](https://ask.dcloud.net.cn/question/71332)
  + Alipay applet platform Fixed the bug that uni.showLoading() reported an error under the applet developer tool v0.32.3 [Details](https://ask.dcloud.net.cn/question/71332)
  + 百度小程序平台 修复 自定义组件模式下，页面的 onShow 生命周期不触发的Bug
  + Baidu applet platform to fix the bug that the onShow life cycle of the page does not trigger in the custom component mode
  + hello uni-app 新增 原生子窗体（subNVue）示例
  + hello uni-app added a native subform (subNVue) example
  + hello uni-app 新增 iBeacon 示例
  + hello uni-app added iBeacon example
  + hello uni-app 新增 editor 富文本编辑器示例
  + hello uni-app added editor rich text editor example
  + hello uni-app 在支付宝/百度/字节跳动小程序平台，开启[自定义组件模式](https://ask.dcloud.net.cn/article/35843)
  + hello uni-app On Alipay/Baidu/ByteDance applet platforms, enable [custom component mode](https://ask.dcloud.net.cn/article/35843)
* 【5+App插件】
* 【5+App Plugins】
  + 新增 Webview窗口标题栏（titleNView）支持获取输入搜索内容功能（getTitleNViewSearchInputText） [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.getTitleNViewSearchInputText)
  + Added Webview window title bar (titleNView) to support the function of getting input search content (getTitleNViewSearchInputText) [Documentation](https://www.html5plus.org/doc/en_us/webview.html#plus.webview.WebviewObject.getTitleNViewSearchInputText)
  + 新增 Webview窗口标题栏（titleNView）支持监听搜索输入框焦点变化事件（titleNViewSearchInputFocusChanged） [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewEvent)
  + Added Webview window title bar (titleNView) to support monitoring search input box focus change event (titleNViewSearchInputFocusChanged) [Documentation](https://www.html5plus.org/doc/en_cn/webview.html#plus.webview.WebviewEvent)
  + Android平台 修复 Webview窗口未设置标题栏（titleNView）时可能出现显示错误的Bug
  + Android platform Fix the bug that the display error may occur when the Webview window does not have a title bar (titleNView)
  + Android平台 修复 数据库多次执行事务（plus.sqlite.transaction）可能不成功的Bug
  + Android platform fixed the bug that the database may not succeed in executing transactions (plus.sqlite.transaction) multiple times
  + Android平台 修复 蓝牙（Bluetooth）搜索设备返回的advertisData数据丢失前连个字节的Bug [详情](https://ask.dcloud.net.cn/question/70486)
  + Android platform Fixed the bug that the advertisData data returned by the Bluetooth search device lost the first byte [Details](https://ask.dcloud.net.cn/question/70486)
  + Android平台 修复 部分设备上开启全面屏手势的情况下获取屏幕高度（plus.screen.resolutionHeight）不正确的Bug [详情](https://ask.dcloud.net.cn/question/71725)
  + Android platform Fix the bug that the screen height (plus.screen.resolutionHeight) is incorrect when the full screen gesture is enabled on some devices [Details](https://ask.dcloud.net.cn/question/71725)
  + Android平台 修复 网络请求（plus.net.XMLHttpRequest）没有共享cookie的Bug [详情](https://ask.dcloud.net.cn/question/71287)
  + Android platform Fix the bug that the network request (plus.net.XMLHttpRequest) does not share cookies [Details](https://ask.dcloud.net.cn/question/71287)
  + Android平台 修复 视频控件（VideoPlayer）切换视频可能出现无法播放的Bug
  + Android platform fixed the bug that video control (VideoPlayer) switching video may not be able to play
  + Android平台 修复 视频控件（VideoPlayer）播放部分rtmp协议视频可能出现没有声音的Bug [详情](https://ask.dcloud.net.cn/question/69609)
  + Android platform fixed a bug that the video control (VideoPlayer) may have no sound when playing some rtmp protocol videos [Details](https://ask.dcloud.net.cn/question/69609)
  + Android平台 修复 uni-app应用设置窗口背景透明不生效的Bug [详情](https://ask.dcloud.net.cn/question/70793)
  + Android platform Fix the bug that the background transparency of the uni-app application setting window does not take effect [Details](https://ask.dcloud.net.cn/question/70793)
  + Android平台 修复 调用摄像头（Camera）录像完成后点击播放可能触发错误回调的Bug [详情](https://ask.dcloud.net.cn/question/71210)
  + Android platform Fixed a bug that may trigger an error callback after calling the camera (Camera) to record and click to play [Details](https://ask.dcloud.net.cn/question/71210)
  + iOS平台 修复 提交苹果应用市场（AppStore）审核提示违反Guideline2.5.2的Bug [详情](https://ask.dcloud.net.cn/question/70813)
  + iOS platform fixes Bugs that violated Guideline 2.5.2 when submitted for review in the Apple App Store (AppStore) [Details](https://ask.dcloud.net.cn/question/70813)
  + iOS平台 修复 音频播放（AudioPlayer）后台播放网络音乐时控制页面（iOS锁屏控制页）进度显示不准确的Bug [详情](https://ask.dcloud.net.cn/question/71891)
  + iOS platform Fix the bug of inaccurate progress display on the control page (iOS lock screen control page) when the audio player (AudioPlayer) is playing network music in the background [Details](https://ask.dcloud.net.cn/question/71891)
  + iOS平台 修复 日期选择对话框（plus.nativeUI.pickDate）返回日期可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/71886)
  + iOS platform Fix the bug that the date selection dialog (plus.nativeUI.pickDate) may return the date may be inaccurate [Details](https://ask.dcloud.net.cn/question/71886)
  + iOS平台 修复 Webview窗口移除原生控件（plus.nativeObj.View）不生效的Bug
  + iOS platform Fix the bug that the native control (plus.nativeObj.View) does not take effect in the Webview window
  + iOS平台 修复 Webview窗口获取样式（getStyle）返回的json对象键名称全部为小写的Bug
  + iOS platform Fix the bug that the key names of the json object returned by the Webview window get style (getStyle) are all lowercase

#### 1.9.9.20190522
* 【重要】 App平台 nvue中可使用所有plus API，大幅改进weex API能力不足的问题（限自定义组件模式）
* [Important] All plus APIs can be used in the App platform nvue, which greatly improves the problem of insufficient weex API capabilities (limited to custom component mode)
* App平台 修复 在 onLaunch 或首页的 onLoad/onReady 等生命周期内路由跳转失败的Bug [详情](https://ask.dcloud.net.cn/question/71248)
* App platform fixes the bug that the route jump fails during the life cycle such as onLaunch or onLoad/onReady of the home page [Details](https://ask.dcloud.net.cn/question/71248)
* App平台 修复 uni.previewImage 不传 current 参数可能导致运行报错的Bug
* App platform Fix the bug that uni.previewImage does not pass the current parameter, which may cause an error to run
* App平台 修复 onTabItemTap 触发时机，修改为每次点击切换均触发（原来的逻辑是首次切换不触发）
* App platform Fixed the trigger timing of onTabItemTap, and modified it to trigger every time the switch is clicked (the original logic is that the first switch does not trigger)

#### 1.9.8.20190518
* 修复 1.9.7引入的 @-moz-keyframes @-ms-keyframes @-o-keyframes 编译报错 [详情](https://ask.dcloud.net.cn/question/71173) 。另注意手机端不应该添加-moz、-ms、-o等前缀语法
* Fix the compilation error of @-moz-keyframes @-ms-keyframes @-o-keyframes introduced in 1.9.7 [Details](https://ask.dcloud.net.cn/question/71173) . Also note that the mobile phone should not add -moz, -ms, -o and other prefix syntax

#### 1.9.7.20190517
* 修复 使用预编译语言部分情况下条件编译无效的Bug [详情](https://ask.dcloud.net.cn/question/70065)
* Fix the bug that conditional compilation is invalid when using precompiled languages [Details](https://ask.dcloud.net.cn/question/70065)
* uni.previewImage 支持传入图片的索引值 [详情](https://uniapp.dcloud.io/api/media/image?id=previewimage)
* uni.previewImage supports the index value of the incoming image [Details](https://uniapp.dcloud.io/api/media/image?id=previewimage)
* 微信平台 兼容微信开发者工具-开发版(Nightly Build)
* Wechat platform is compatible with Wechat Developer Tools-Development Edition (Nightly Build)
* App平台 新增 图片预览支持长按显示操作菜单 [详情](https://uniapp.dcloud.io/api/media/image?id=unipreviewimageobject)
* Added support for image preview on App platform [Details](https://uniapp.dcloud.io/api/media/image?id=unipreviewimageobject)
* App平台 修复 uni.scanCode 从相册选择二维码，成功回调中 scanType 为空的 bug [详情](https://ask.dcloud.net.cn/question/70461)
* App platform Fixed the bug that uni.scanCode selects a QR code from the album, and the scanType is empty in the successful callback [Details](https://ask.dcloud.net.cn/question/70461)
* App平台 修复 设置剪切板内容后弹出的toast图标错误的Bug
* App platform fixed the bug that the wrong toast icon popped up after setting the clipboard content
* App平台 修复 各种waiting、toast样式不统一的Bug
* App platform fixes various bugs with inconsistent waiting and toast styles
* App平台 修复 自定义组件模式下，map 对象 translateMarker 方法无效及animationEnd不回调的Bug [详情](https://ask.dcloud.net.cn/question/70333)
* App platform Fix the bug that the translateMarker method of the map object is invalid and the animationEnd does not call back in the custom component mode [Details](https://ask.dcloud.net.cn/question/70333)
* App平台 修复 地图缩放时 getScale 返回结果不准确的Bug [详情](https://ask.dcloud.net.cn/question/70148)
* App platform fixes the bug that getScale returns inaccurate results when the map is zoomed [Details](https://ask.dcloud.net.cn/question/70148)
* App平台 修复 onNavigationBarSearchInputClicked 在 .nvue 上没有响应的Bug [详情](https://ask.dcloud.net.cn/question/70137)
* App Platform Fix the bug that onNavigationBarSearchInputClicked does not respond on .nvue [Details](https://ask.dcloud.net.cn/question/70137)
* App平台 修复 获取蓝牙设备信息中 advertisData 值不正确的bug [详情](https://ask.dcloud.net.cn/question/70486)
* App platform fix the bug that the advertisData value in the Bluetooth device information is incorrect [Details](https://ask.dcloud.net.cn/question/70486)
* App平台 优化 picker、picker-view 组件滚动停止过慢的问题
* App platform Optimized the problem that the scrolling of picker and picker-view components stops too slowly
* App平台（Android）修复 uni.showModal 点击返回不触发取消回调的Bug [详情](https://ask.dcloud.net.cn/question/70327)
* App platform (Android) fix the bug that uni.showModal click return does not trigger cancellation callback [Details](https://ask.dcloud.net.cn/question/70327)
* App平台（iOS）优化 因内存问题导致wkwebview页面白屏时，支持自动恢复页面数据
* App platform (iOS) optimization Supports automatic recovery of page data when the wkwebview page is white screen due to memory problems
* App平台（iOS）修复 在 iOS 8.x/9.x 低版本系统上，启动白屏的Bug
* App platform (iOS) fix On iOS 8.x/9.x lower version systems, the bug of starting a white screen
* App平台（iOS）修复 下拉刷新在特殊场景下拉失效的Bug [详情](https://ask.dcloud.net.cn/question/69185)
* App platform (iOS) fixed the bug that pull down to refresh fails in special scenarios [Details](https://ask.dcloud.net.cn/question/69185)
* App平台（iOS）修复 自定义组件模式下，地图初始化时设置经纬度属性未立即生效的Bug
* App platform (iOS) Fixed the bug that the latitude and longitude properties did not take effect immediately when the map was initialized in the custom component mode
* App平台（iOS）修复 自定义组件模式下，同一页面多个 input 框点击时光标乱跳的Bug [详情](https://ask.dcloud.net.cn/question/69557)
* App platform (iOS) Fix the bug that the cursor jumps randomly when multiple input boxes on the same page are clicked in the custom component mode [Details](https://ask.dcloud.net.cn/question/69557)
* App平台（iOS 12.2）修复 input 组件自动聚焦失败的Bug
* App platform (iOS 12.2) fixed the bug that the auto-focus of the input component failed
* App平台（iOS 12.2）修复 多 input 组件页面，切换焦点时，导致页面抖动的Bug
* App platform (iOS 12.2) fixed a bug that caused page jitter when switching focus on multiple input component pages
* H5平台 新增 map 组件 支持开发者配置自己申请的腾讯地图秘钥（key），解决因共用秘钥对应配额耗尽导致定位失败的Bug [详情](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfig)
* The new map component on the H5 platform supports developers to configure their own Tencent map keys (keys), and solves the bug of positioning failure due to the exhaustion of the corresponding quota of the shared key [Details](https://uniapp.dcloud.io/ collocation/manifest?id=h5sdkconfig)
* H5平台 修复 canvas 不支持设置渐变色的Bug [详情](https://github.com/dcloudio/uni-app/issues/371)
* H5 platform Fix the bug that canvas does not support setting gradient color [Details](https://github.com/dcloudio/uni-app/issues/371)
* H5平台 修复 map 组件 @tap 不触发的Bug [详情](https://ask.dcloud.net.cn/question/63988)
* H5 platform fix the bug that the map component @tap does not trigger [Details](https://ask.dcloud.net.cn/question/63988)
* H5平台（iOS特定版本） 修复 标签的 data-* 属性值在事件中获取失败的Bug [详情](https://ask.dcloud.net.cn/question/70246)
* H5 platform (iOS specific version) Fix the bug that the data-* attribute value of the tag fails to get in the event [Details](https://ask.dcloud.net.cn/question/70246)
* H5平台 修复 canvas 属性 更新width height无效的Bug [详情](https://ask.dcloud.net.cn/question/69804)
* On H5 platform, fix the bug of invalid canvas attribute updating width and height [Details](https://ask.dcloud.net.cn/question/69804)
* H5平台 修复 canvasToTempFilePath API 生成宽高不准确bug
* For H5 platform, fix the bug of inaccurate width and height generated by canvasToTempFilePath API
* 支付宝小程序 修复 当值为0或false等值时，uni.getStorage 读取结果不正确的Bug [#337](https://github.com/dcloudio/uni-app/issues/271)
* Alipay applet fix bug that when the value is 0 or false, the reading result of uni.getStorage is incorrect [#337](https://github.com/dcloudio/uni-app/issues/271)
* 支付宝小程序 修复 支付接口调用报错的Bug [详情](https://ask.dcloud.net.cn/question/69972)
* Alipay applet fixes the bug that the payment interface calls an error [Details](https://ask.dcloud.net.cn/question/69972)
* uni-ui 新增 uniIndexedList 索引列表组件 [详情](https://ext.dcloud.net.cn/plugin?id=375)
* Added uniIndexedList index list component to uni-ui [Details](https://ext.dcloud.net.cn/plugin?id=375)
* hello uni-app 新增 radio, checkbox, switch, slider 修改颜色、大小示例
* hello uni-app added radio, checkbox, switch, slider to modify color and size example
* hello uni-app 优化 chat聊天模板，input输入框在iOS上取消软键盘顶部的完成横条
* hello uni-app optimizes the chat template, the input box cancels the completion bar at the top of the soft keyboard on iOS
* hello uni-app 新增 指纹示例
* Added fingerprint example to hello uni-app
* hello uni-app 新增 SQLite 示例
* Added SQLite example to hello uni-app

#### 1.9.4.20190426
* 修复 特定场景执行发行导致文件体积增大的问题 [详情](https://ask.dcloud.net.cn/question/69568)
* Fix the issue that the file size increases due to the execution of the release in a specific scenario [Details](https://ask.dcloud.net.cn/question/69568)
* App平台 新增 video 组件 支持 direction 属性，可控制视频全屏方向 [详情](https://uniapp.dcloud.io/component/video)
* App platform adds video component to support the direction property, which can control the full-screen direction of the video [Details](https://uniapp.dcloud.io/component/video)
* App平台 修复 input 组件 设置 type 属性为 idcard 时，无法输入字母 `X` 的bug
* App platform fixes the bug that the letter `X` cannot be entered when the type attribute of the input component is set to idcard
* App平台（iOS） 修复 调用 $getAppMap 异常的bug
* App platform (iOS) fix the bug of calling $getAppMap exception
* App平台（iOS） 修复 uni.showToast() 设置 position 属性后，title 属性失效的bug [详情](https://ask.dcloud.net.cn/question/69481)
* App platform (iOS) Fix the bug that the title attribute is invalid after uni.showToast() sets the position attribute [Details](https://ask.dcloud.net.cn/question/69481)
* App平台（Android） 修复 uni.removeStorage 在 nvue 下使用报错的 bug [详情](https://ask.dcloud.net.cn/question/69595)
* App platform (Android) Fix the bug of using uni.removeStorage under nvue [Details](https://ask.dcloud.net.cn/question/69595)
* H5平台 修复 非 uni-app 的 canvas 组件默认高清导致历史代码兼容问题 [详情](https://ask.dcloud.net.cn/question/69432)
* For H5 platform, fix the default high-definition of canvas components of non-uni-app causing historical code compatibility issues [Details](https://ask.dcloud.net.cn/question/69432)
* H5平台 修复 picker 组件 range-key 属性不生效的bug [详情](https://ask.dcloud.net.cn/question/69423)
* H5 platform fix the bug that the range-key attribute of the picker component does not take effect [Details](https://ask.dcloud.net.cn/question/69423)
* H5平台 修复 picker 组件 value 属性为空时，@change 事件返回信息不完整的bug [详情](https://ask.dcloud.net.cn/question/69358)
* H5 platform Fix the bug that the @change event returns incomplete information when the value attribute of the picker component is empty [Details](https://ask.dcloud.net.cn/question/69358)
* H5平台 修复 canvasToTempFilePath API，fileType参数兼容jpg/jpeg格式 [详情](https://ask.dcloud.net.cn/question/65036)
* On H5 platform, the canvasToTempFilePath API is fixed, and the fileType parameter is compatible with jpg/jpeg format [Details](https://ask.dcloud.net.cn/question/65036)
* uni-ui 修复 popup 组件在页面内容超出一屏后，弹出层不居中的bug [详情](https://ask.dcloud.net.cn/question/69494)
* uni-ui fixes the bug that the popup layer is not centered when the content of the popup component exceeds one screen [Details](https://ask.dcloud.net.cn/question/69494)
* hello uni-app 优化 从列表到详情示例的上拉体验
* hello uni-app optimizes the pull-up experience from the list to the detailed example


#### 1.9.3.20190422
  * 新增 自定义组件模式下 组件支持通过 extends mixins 继承 props [详情](https://ask.dcloud.net.cn/question/69051)
  * Added support for inheriting props through extends mixins in custom component mode [Details](https://ask.dcloud.net.cn/question/69051)
  * 新增 template模板模式下 TypeScript工程支持使用装饰符 @Component
  * Added support for using the decorator @Component in TypeScript projects in template template mode
  * App平台 自定义组件模式 新增 获取原生地图对象的方法 MapContext.$getAppMap() [详情](https://uniapp.dcloud.io/api/location/map?id=createmapcontext)
  * App platform custom component mode Added method to get native map object MapContext.$getAppMap() [Details](https://uniapp.dcloud.io/api/location/map?id=createmapcontext)
  * App平台 自定义组件模式 修复 在 iOS8 版本启动失败的 bug
  * App platform custom component mode Fix the bug that failed to start in iOS8 version
  * App平台 自定义组件模式 修复 未启用 tabBar 的项目调用 reLaunch 导致 App 退出的问题 [详情](https://ask.dcloud.net.cn/question/68841)
  * App platform custom component mode Fix the problem that the app quits when the project without tabBar is called reLaunch [Details](https://ask.dcloud.net.cn/question/68841)
  * H5平台 优化 canvas 组件支持高清显示 [详情](https://ask.dcloud.net.cn/question/69001)
  * H5 platform optimized canvas component to support high-definition display [Details](https://ask.dcloud.net.cn/question/69001)
  * H5平台 修复 HBuilderX 1.9.2 alpha 版中运行到浏览器白屏的问题
  * H5 platform Fix the problem of running to the browser white screen in HBuilderX 1.9.2 alpha version
  * H5平台 修复 运行至部分低版本浏览器白屏的问题 [详情](https://ask.dcloud.net.cn/question/69189)
  * H5 platform fixed the problem of running to a white screen in some lower version browsers [Details](https://ask.dcloud.net.cn/question/69189)
  * H5平台 修复 部分浏览器环境下调用 uni.chooseImage() 导致页面滚动的问题 [详情](https://ask.dcloud.net.cn/question/68335)
  * H5 platform Fixed the issue that calling uni.chooseImage() in some browsers caused page scrolling [Details](https://ask.dcloud.net.cn/question/68335)
  * H5平台 修复 页面后退至 tabBar 页面时丢失滚动位置的问题 [详情](https://ask.dcloud.net.cn/question/68427)
  * H5 platform fix the problem of losing the scroll position when the page goes back to the tabBar page [Details](https://ask.dcloud.net.cn/question/68427)
  * H5平台 修复 页面后退时 scroll-view 滚动位置不正确的问题 [详情](https://ask.dcloud.net.cn/question/68427)
  * H5 platform fix the problem that the scroll-view scroll position is incorrect when the page is back [Details](https://ask.dcloud.net.cn/question/68427)
  * H5平台 修复 特定内置组件样式会影响到部分外部元素样式的bug [#282](https://github.com/dcloudio/uni-app/issues/282)
  * H5 platform Fix the bug that certain built-in component styles will affect the styles of some external elements [#282](https://github.com/dcloudio/uni-app/issues/282)
  * H5平台 修复 uni.showModal() 点击空白区域，弹窗会消失的bug [#311](https://github.com/dcloudio/uni-app/issues/311)
  * H5 platform Fix the bug that uni.showModal() clicks the blank area, the pop-up window will disappear [#311](https://github.com/dcloudio/uni-app/issues/311)
  * 微信小程序 修复 swiper scroll-view 等组件绑定事件在 vconsole 中报 JSON 序列化错误的问题 [详情](https://ask.dcloud.net.cn/question/69277)
  * Wechat applet to fix the problem that component binding events such as swiper scroll-view report JSON serialization error in vconsole [Details](https://ask.dcloud.net.cn/question/69277)
  * 支付宝小程序 优化 兼容新的 request 规范 [详情](https://ask.dcloud.net.cn/question/69180)
  * The Alipay applet is optimized and compatible with the new request specification [Details](https://ask.dcloud.net.cn/question/69180)
  * uni-ui 修复 popup 居中弹出（插屏广告）示例在部分手机上样式不正确的问题
  * uni-ui fix the problem that the popup centered popup (interstitial advertisement) example is incorrect on some mobile phones
  * uni-ui 修复 calendar 日历组件获取高度错误的问题
  * uni-ui fix the problem that the calendar component gets the wrong height
  * uni-ui 优化 notice-bar 等组件设置节点 id 的实现
  * uni-ui optimizes the implementation of setting node id for components such as notice-bar
  * hello uni-app 新增 request 示例添加 Promise 方式的使用
  * hello uni-app added a request example to add the use of Promise
  * hello uni-app 优化 分享示例，分享类型和对应支持的分享渠道关联（如选择图文分享时，QQ分享渠道自动变为可不用状态）
  * hello uni-app optimization Sharing example, sharing type and the corresponding supported sharing channel association (for example, when selecting image and text sharing, the QQ sharing channel automatically becomes unavailable)
  * hello uni-app 优化 echarts 示例的传值方式，解决百度小程序不显示的问题
  * hello uni-app optimizes the value transfer method of the echarts example to solve the problem that the Baidu applet does not display

#### 1.9.2.20190417
* App平台 新增 自定义组件模式下输出日志时显示正确的行号
* App platform added Display the correct line number when outputting logs in custom component mode
* H5平台 修复 API 返回的 Promise 对象不正确的问题 [详情](https://ask.dcloud.net.cn/question/68867)
* H5 platform Fix the problem that the Promise object returned by the API is incorrect [Details](https://ask.dcloud.net.cn/question/68867)

#### 1.9.1.20190415
* 修复 调用 uni 方法返回的 Promise 对象不正确的问题 [#295](https://github.com/dcloudio/uni-app/issues/295)
* Fix the problem that the Promise object returned by calling the uni method is incorrect [#295](https://github.com/dcloudio/uni-app/issues/295)
* App端 新增 自定义组件模式下支持 loadFontFace 方法动态加载字体 [详情](https://uniapp.dcloud.io/api/ui/font?id=loadfontface)
* Added support for the loadFontFace method to dynamically load fonts in the custom component mode on the App side [Details](https://uniapp.dcloud.io/api/ui/font?id=loadfontface)

#### 1.9.0.20190412
* 【重要】App平台 升级为新版编译器（自定义组件模式），提升App启动速度、减少js阻塞、提升组件性能、支持过滤器等更多vue语法 [详情](https://ask.dcloud.net.cn/article/35818)
* [Important] The App platform is upgraded to a new version of the compiler (custom component mode), which improves the app startup speed, reduces js blocking, improves component performance, supports filters, and more vue syntax [Details](https://ask.dcloud .net.cn/article/35818)
* 【重要】插件市场支持付费原生插件，欢迎插件作者们踊跃提交原生插件。示例[https://ext.dcloud.net.cn/plugin?id=135](https://ext.dcloud.net.cn/plugin?id=135)
* [Important] The plugin market supports paid native plugins, and plugin authors are welcome to submit native plugins. Example[https://ext.dcloud.net.cn/plugin?id=135](https://ext.dcloud.net.cn/plugin?id=135)
* 新增 自定义组件模式下，支持在 `v-for` 中使用 `v-model`、`v-bind` 指令的 `sync` 修饰符
* Added support for `sync` modifiers of `v-model` and `v-bind` commands in `v-for` in custom component mode
* 新增 uni.showActiveSheet() 支持 `titile` 属性，仅 App/H5 平台生效
* Added uni.showActiveSheet() to support `titile` property, only valid on App/H5 platform
* 修复 自定义组件模式下，支持直接修改 `v-on` 事件绑定传入的响应式数据参数 [详情](https://ask.dcloud.net.cn/question/67921)
* Fix In custom component mode, support to directly modify the responsive data parameters passed in `v-on` event binding [Details](https://ask.dcloud.net.cn/question/67921)
* 修复 uni.connectSocket() 返回的 SocketTask 不正确的bug
* Fix the bug of incorrect SocketTask returned by uni.connectSocket()
* App平台 新增 网络请求支持在 `header` 头信息中设置 `Cookie` 关键字为 `key` [详情](https://ask.dcloud.net.cn/question/68260)
* App platform added network request support to set `Cookie` keyword as `key` in `header` header information [Details](https://ask.dcloud.net.cn/question/68260)
* App平台 新增 uni.showToast() 支持 `position` 属性，可以显示纯文本轻提示
* App platform added uni.showToast() to support `position` attribute, which can display plain text light tips
* App平台 修复 uni.canvasPutImageData() 执行报错的bug，[详情](https://ask.dcloud.net.cn/question/66334)
* App platform Fixed the bug of uni.canvasPutImageData() error reporting, [Details](https://ask.dcloud.net.cn/question/66334)
* App平台 修复 清除本地缓存后 nvue 页面报 launch webview id is not ready 错误的问题 [详情](https://ask.dcloud.net.cn/question/64961)
* App platform fixed the issue that the nvue page reported the error "launch webview id is not ready" after clearing the local cache [Details](https://ask.dcloud.net.cn/question/64961)
* App平台（Android） 修复 部分低版本 Android 手机执行 `uni.reLaunch()` 报错的问题 [详情](https://ask.dcloud.net.cn/question/67888)
* App platform (Android) Fixed the problem that some low-version Android phones reported an error when executing `uni.reLaunch()` [Details](https://ask.dcloud.net.cn/question/67888)
* App平台 修复 navigator 组件默认动画不生效的bug
* App platform Fix the bug that the default animation of the navigator component does not take effect
* App平台 修复 `自定义组件模式`下调用 uni.connectSocket() 报错的问题 [详情](https://ask.dcloud.net.cn/question/68362)
* App platform Fixed the problem of calling uni.connectSocket() in `custom component mode` and reporting an error [Details](https://ask.dcloud.net.cn/question/68362)
* App平台 修复 `自定义组件模式`下扫码功能非首次打开时报错的问题 [详情](https://ask.dcloud.net.cn/question/68550)
* App platform Fixed the problem that the code scanning function in `custom component mode` was not opened for the first time. [Details](https://ask.dcloud.net.cn/question/68550)
* H5平台 修复 uni.reLaunch() 后 getCurrentPages() 获取不正确的bug [详情](https://ask.dcloud.net.cn/question/68134)
* H5 platform fix the bug that getCurrentPages() gets incorrect after uni.reLaunch() [Details](https://ask.dcloud.net.cn/question/68134)
* H5平台 修复 canvas 接口无法获取坐标的问题 [详情](https://ask.dcloud.net.cn/question/67791)
* H5 platform Fix the problem that the canvas interface cannot obtain coordinates [Details](https://ask.dcloud.net.cn/question/67791)
* H5平台 修复 image 组件加载无协议的网络图片资源无效的问题
* H5 platform fix the problem that the image component is invalid when loading non-protocol network image resources
* 微信小程序 新增 `自定义组件模式`下支持 `v-text` 指令
* Added support for `v-text` command in `custom component mode` in WeChat applet
* 微信小程序 新增 支持在根目录下添加 `ext.json` 及 `sitemap.json` [详情](https://github.com/dcloudio/uni-app/issues/223)
* Added support for adding `ext.json` and `sitemap.json` in the root directory of WeChat applet [Details](https://github.com/dcloudio/uni-app/issues/223)
* 微信小程序 修复 text 组件内文字不能换行以及不显示空格的问题 [详情](https://ask.dcloud.net.cn/question/67894)
* Wechat applet fixes the problem that the text in the text component cannot wrap and does not display spaces [Details](https://ask.dcloud.net.cn/question/67894)
* uni-ui 新增 轮播图指示点（uni-swiper-dot）组件 [详情](https://ext.dcloud.net.cn/plugin?id=284)
* Added uni-swiper-dot component to uni-ui [Details](https://ext.dcloud.net.cn/plugin?id=284)
* uni-ui 修复 部分组件在支付宝小程序中垂直居中不生效的bug
* uni-ui fixed the bug that some components did not take effect in the vertical centering of Alipay applet
* hello uni-app 修复 部分页面在支付宝小程序中垂直居中不生效的bug
* hello uni-app fixes the bug that vertical centering of some pages does not take effect in Alipay applet
* hello uni-app 新增 列表到详情模板兼容支付宝小程序
* hello uni-app added list to details template compatible with Alipay applet
* hello uni-app 新增 u-link 组件，方便在各平台使用超链接
* Added u-link component to hello uni-app to facilitate the use of hyperlinks on various platforms
* hello uni-app 新增 在 uni-app 中使用第三方微信小程序组件（vant ui）的示例
* hello uni-app added an example of using third-party WeChat applet components (vant ui) in uni-app
* hello uni-app 强化`通过scheme打开三方app示例`，直接打开应用商店指定应用方便评分、直接打开QQ联系人聊天、地图指定位置导航、打开淘宝指定页面。
* hello uni-app strengthens the `opening a three-party app example through scheme`, directly opening the app store to specify the application for easy scoring, directly opening the QQ contact chat, the map specified location navigation, and the Taobao specified page.
  
#### 1.8.2.20190401
* 新增 微信小程序启用`自定义组件模式`时，支持v-text指令
* Added support for v-text instruction when `custom component mode` is enabled in WeChat applet

#### 1.8.1.20190330
* 微信小程序 修复 text 组件内文字不能换行以及不显示空格的问题 [详情](https://ask.dcloud.net.cn/question/67894)
* Wechat applet fixes the problem that the text in the text component cannot wrap and does not display spaces [Details](https://ask.dcloud.net.cn/question/67894)
* App平台（Android） 修复 部分低版本 Android 手机执行 uni.reLaunch() 报错的问题 [详情](https://ask.dcloud.net.cn/question/67888)
* App platform (Android) Fixed the problem that some low-version Android phones reported an error when executing uni.reLaunch() [Details](https://ask.dcloud.net.cn/question/67888)
  
#### 1.8.0.20190330
* 【重要】架构全新重写，大幅提升微信小程序端的性能体验，并增加若干 Vue 语法支持。[详情](https://ask.dcloud.net.cn/article/35699)
* [Important] The architecture has been completely rewritten, greatly improving the performance experience of the WeChat applet, and adding some Vue syntax support. [Details](https://ask.dcloud.net.cn/article/35699)
* 【重要】App平台 新增 UniPush推送服务，统一手机厂商（苹果、华为、小米、OPPO、魅族）和三方推送（个推）通道，提升推送消息送达率。[详情](https://ask.dcloud.net.cn/article/35622)
* [Important] App platform adds UniPush push service to unify mobile phone manufacturers (Apple, Huawei, Xiaomi, OPPO, Meizu) and three-party push (individual push) channels to improve the delivery rate of push messages. [Details](https://ask.dcloud.net.cn/article/35622)
* App平台 优化数据通讯机制，修复滚动监听延迟的问题
* App platform Optimize the data communication mechanism and fix the problem of scrolling monitoring delay
* App平台 修复 特定场景页面转场无动画或动画配置不生效的问题
* App platform fixed the problem that there is no animation in the transition of the specific scene page or the animation configuration does not take effect
* App平台 修复 多 tabbar 显示时，非最新 tabbar 页面不触发 onUnload 生命周期的问题 [详情](https://ask.dcloud.net.cn/question/67024)
* App platform Fixed the problem that the non-latest tabbar page does not trigger the onUnload life cycle when multiple tabbars are displayed [Details](https://ask.dcloud.net.cn/question/67024)
* App平台 修复 iOS 端 web-view 组件内页面样式不正确的bug
* App Platform Fix the bug of incorrect page style in the web-view component on the iOS side
* App平台 修复 CanvasContext.draw 使用本地相同图片多次绘制，特定情况绘制失败的问题
* App platform Fixed the problem that CanvasContext.draw uses the same local image to draw multiple times, and the drawing fails in certain situations
* H5平台 新增 SelectorQuery 对象支持 in 方法
* H5 platform added SelectorQuery object support in method
* H5平台 新增 uni.getImageInfo 返回 path 属性
* H5 platform added uni.getImageInfo to return the path property
* H5平台 新增 CanvasContext 增加部分属性支持 [详情](https://uniapp.dcloud.io/api/canvas/CanvasContext)
* Added CanvasContext for H5 platform. Added support for some properties [Details](https://uniapp.dcloud.io/api/canvas/CanvasContext)
* H5平台 修复 CanvasContext 调用 path 相关API报错的问题
* H5 platform fix the problem that CanvasContext calls path related API error
* H5平台 修复 onNavigationBarSearchInputChanged 钩子函数获取到的数据不正确的bug
* For H5 platform, fix the bug that the data obtained by the onNavigationBarSearchInputChanged hook function is incorrect
* H5平台 修复 textarea 组件自动计算高度不正确的问题
* For H5 platform, fix the problem that the textarea component automatically calculates the height incorrectly
* 【重要】hello uni-app 改版，底部选项卡拆分为四个（内置组件、接口、扩展组件uni-ui、模板）
* [Important] The hello uni-app has been revised, and the bottom tabs are split into four (built-in components, interfaces, extension components uni-ui, templates)
* hello uni-app 新增 蓝牙示例
* Added Bluetooth example to hello uni-app
* hello uni-app 新增 cover-view 示例
* Added cover-view example to hello uni-app
* hello uni-app 更新 toast示例，App 端补充底部 toast 示例
* hello uni-app update the toast example, add the bottom toast example on the App side
* hello uni-app 修复 grid 组件元素未满一行样式不正确的bug
* hello uni-app fix the bug that the grid component element is not full of one line and the style is incorrect
* hello uni-app 修复 grid 组件 click 事件返回值不正确的bug
* hello uni-app fix the bug that the return value of the click event of the grid component is incorrect
* hello uni-app 修复 部分设备录音无法播放的bug
* hello uni-app fix the bug that some device recordings cannot be played
* hello uni-app 修复 手势示例 key 冲突的bug
* hello uni-app fix the bug of key conflict in gesture example
* hello uni-app 修复 im 示例 message 属性类型错误的bug
* hello uni-app fix bug that im example message attribute type is wrong
* hello uni-app 修复 uParse 在部分场景下，显示异常的bug
* hello uni-app fix the bug that uParse displays abnormally in some scenarios

#### 1.7.0.20190314
* 【重要】支持App资源在线热更新 [详情](https://ask.dcloud.net.cn/article/35667)
* [Important] Support online hot update of App resources [Details](https://ask.dcloud.net.cn/article/35667)
* 修复 uni.webview.js 在字节跳动小程序真机环境无效的问题 [v1.5.0](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.0.js)
* Fix the problem that uni.webview.js is invalid in the real machine environment of ByteDance applet [v1.5.0](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview .1.5.0.js)
* 修复 rich-text 组件 ins 标签嵌套在 span 标签中无法渲染的问题 [详情](https://ask.dcloud.net.cn/question/65382)
* Fix the problem that the ins tag of the rich-text component cannot be rendered when nested in the span tag [Details](https://ask.dcloud.net.cn/question/65382)
* 修复 uni.getProvider 获取 push 服务供应商的信息始终为 igexin 的bug
* Fix the bug that the information of the push service provider obtained by uni.getProvider is always igexin
* 【重要】App平台 新增 转场动画配置，详见[pages.json](https://uniapp.dcloud.io/collocation/pages?id=app-plus)、[navigator](https://uniapp.dcloud.io/component/navigator)、[uni.navigateTo](https://uniapp.dcloud.io/api/router?id=navigateto)
* [Important] Added transition animation configuration on App platform, see [pages.json](https://uniapp.dcloud.io/collocation/pages?id=app-plus), [navigator](https:// uniapp.dcloud.io/component/navigator), [uni.navigateTo](https://uniapp.dcloud.io/api/router?id=navigateto)
* App平台 修复 设置 web-view 组件的 webview-styles 属性在部分设备上报错的问题 [详情](https://ask.dcloud.net.cn/question/66498)
* App platform Fixed the problem that setting the webview-styles property of the web-view component reported an error on some devices [Details](https://ask.dcloud.net.cn/question/66498)
* App平台 修复 查看位置界面，点击去这里按钮，启动百度地图导航时，目的地坐标偏移的问题
* App platform Fixed the problem that the destination coordinates are offset when viewing the location interface, click the button to go here, and start Baidu map navigation
* App平台 优化 扫码界面调整为全屏显示
* App platform optimization, the scan code interface is adjusted to full screen display
* App平台（iOS） 修复 在特定情况下获取系统信息报错的bug
* App platform (iOS) Fix the bug of getting system information error under certain circumstances
* App平台（iOS） 修复 QQ 分享无法选择图文类型的问题
* App platform (iOS) Fixed the problem that QQ sharing cannot select the type of image and text
* H5平台 新增 titleNView 支持 searchInput 配置 [详情](https://uniapp.dcloud.io/collocation/pages?id=h5-searchinput)
* H5 platform added titleNView to support searchInput configuration [Details](https://uniapp.dcloud.io/collocation/pages?id=h5-searchinput)
* H5平台 新增 titleNView -> buttons 支持配置 background、badgeText、redDot、select、width [详情](https://uniapp.dcloud.io/collocation/pages?id=h5-titlenview-buttons)
* H5 platform added titleNView -> buttons to support configuration of background, badgeText, redDot, select, width [Details](https://uniapp.dcloud.io/collocation/pages?id=h5-titlenview-buttons)
* H5平台 优化 页面对象增加 $mp 属性兼容 mpvue 用法 [#227](https://github.com/dcloudio/uni-app/issues/227)
* H5 platform optimization, add $mp attribute to the page object to be compatible with mpvue usage [#227](https://github.com/dcloudio/uni-app/issues/227)
* H5平台 修复 条件编译中的 CSS 在运行/生产环境下编译结果不一致的bug [#188](https://github.com/dcloudio/uni-app/issues/188)
* H5 platform Fix the bug that the CSS in conditional compilation is inconsistent in the running/production environment [#188](https://github.com/dcloudio/uni-app/issues/188)
* H5平台 修复 navigator 组件 navigatorBack 限制了 url 参数的问题 [#195](https://github.com/dcloudio/uni-app/issues/195)
* H5 platform Fix the problem that the navigator component navigatorBack limits the url parameter [#195](https://github.com/dcloudio/uni-app/issues/195)
* H5平台 修复 首页导航栏配置左侧按钮无效的问题 [详情](https://ask.dcloud.net.cn/question/65994)
* H5 platform fix the problem that the left button of the homepage navigation bar configuration is invalid [Details](https://ask.dcloud.net.cn/question/65994)
* H5平台 修复 低版本 safari 浏览器下调用 uni.chooseImage/uni.chooseVideo 方法无效的问题 [详情](https://ask.dcloud.net.cn/question/66000)
* H5 platform Fix the problem that calling uni.chooseImage/uni.chooseVideo method is invalid in lower version safari browser [Details](https://ask.dcloud.net.cn/question/66000)
* H5平台 修复 input 组件半透明时背景显示异常的问题
* For H5 platform, fix the problem that the background display is abnormal when the input component is translucent
* H5平台 修复 修改 input 组件的 maxlength 属性时报错的问题
* H5 platform fix the problem of error when modifying the maxlength property of the input component
* H5平台 修复 picker 组件关闭时内部状态未重置的问题 [#192](https://github.com/dcloudio/uni-app/issues/192)
* H5 platform Fix the problem that the internal state of the picker component is not reset when it is closed [#192](https://github.com/dcloudio/uni-app/issues/192)
* H5平台 修复 picker-view 组件 change 事件返回值错误的问题 [#193](https://github.com/dcloudio/uni-app/issues/193)
* H5 platform Fix the problem that the return value of the picker-view component change event is wrong [#193](https://github.com/dcloudio/uni-app/issues/193)
* H5平台 修复 uni.request 在无参数的GET请求时，地址拼接中冗余一个 ？的问题
* On H5 platform, fix uni.request when there is no parameter GET request, there is a redundant one in address splicing? The problem
* H5平台 修复 使用透明渐变导航栏导致页面高度不准确的问题
* H5 platform fix the problem of inaccurate page height caused by using transparent gradient navigation bar
* H5平台 修复 tabbar 组件在 iPhoneX 上超出底部安全区的问题
* H5 platform fix the problem that the tabbar component exceeds the bottom safe area on iPhoneX
* H5平台 修复 cover-view、cover-image 无法监听点击事件的问题 [详情](https://ask.dcloud.net.cn/question/66416)
* H5 platform fix the problem that cover-view and cover-image cannot monitor click events [Details](https://ask.dcloud.net.cn/question/66416)
* H5平台 修复 swiper 组件动态设置 current-item-id 不生效的问题 [详情](https://ask.dcloud.net.cn/question/66491)
* For H5 platform, fix the problem that the dynamic setting of current-item-id of the swiper component does not take effect [Details](https://ask.dcloud.net.cn/question/66491)
* H5平台 修复 uni.chooseVideo 返回结果中部分信息不准确的问题
* For H5 platform, fix the problem that some information in the returned result of uni.chooseVideo is inaccurate
* H5平台 修复 uni.getSystemInfoSync 接口返回的 statusBarHeight 属性拼写与其他平台不同的问题
* H5 platform Fix the problem that the spelling of the statusBarHeight property returned by the uni.getSystemInfoSync interface is different from other platforms
* H5平台 修复 image 组件部分情况下加载 base64 资源失败的问题
* H5 platform fix the problem that loading base64 resources fails in some cases of image component
* 支付宝小程序 修复 uni.canvasToTempFilePath 未能正确返回 tempFilePath 值的问题
* Alipay applet fixed the problem that uni.canvasToTempFilePath could not return tempFilePath value correctly
* 支付宝小程序 修复 uni.setScreenBrightness/uni.getScreenBrightness 传入参数与返回结果参数不正确的问题
* Alipay applet to fix the problem that the input parameters and return result parameters of uni.setScreenBrightness/uni.getScreenBrightness are incorrect
* uni-ui 新增 左滑操作菜单插件 [详情](https://ext.dcloud.net.cn/plugin?id=181)
* uni-ui added a left-swipe operation menu plugin [Details](https://ext.dcloud.net.cn/plugin?id=181)
* hello uni-app 新增 SwipeAction（滑动操作）扩展组件
* Added SwipeAction extension component to hello uni-app
* hello uni-app 新增 Calendar（日历）扩展组件
* Added Calendar extension component to hello uni-app
* hello uni-app 新增 Pagination(分页器) 扩展组件
* Added Pagination extension component to hello uni-app
* hello uni-app 新增 NoticeBar(通告栏) 扩展组件
* Added NoticeBar extension component to hello uni-app
* hello uni-app 新增 屏幕亮度 API 示例 
* hello uni-app adds an example of screen brightness API
* hello uni-app 新增 保存媒体到本地 API 示例 
* hello uni-app added save media to local API example
* hello uni-app 新增 震动 API 示例 
* Added vibration API example to hello uni-app
* hello uni-app 新增 打开系统浏览器或三方App示例
* hello uni-app adds an example of opening a system browser or a third-party app
* hello uni-app 新增 设置 tabBar 示例
* hello uni-app adds an example of setting tabBar
* hello uni-app 新增 获取节点信息示例
* hello uni-app added an example of getting node information
* hello uni-app 新增 获取节点布局交互状态示例
* hello uni-app added an example of getting node layout interaction status
* hello uni-app 修复 number-box 组件按钮禁用状态显示不正确的问题
* hello uni-app fix the problem that the disabled state of the button of the number-box component is not displayed correctly
* hello uni-app 新增 App端自定义转场动画示例
* hello uni-app added App-side custom transition animation example
* hello uni-app 新增 H5端导航栏带搜索框示例
* hello uni-app adds an example of H5 navigation bar with search box
* hello uni-app 新增 H5端导航栏带城市选择示例
* hello uni-app adds an example of city selection in the H5 navigation bar
* hello uni-app 新增 H5端导航栏带红点和角标示例
* hello uni-app adds an example with red dots and corner labels in the H5 side navigation bar
* hello uni-app 新增 iOS端隐藏软键盘上的导航条示例
* hello uni-app adds an example of hiding the navigation bar on the soft keyboard on the iOS side

#### 1.6.2.20190220
* 【重要】新增 uni-app 支持发行到字节跳动小程序 [详情](https://ask.dcloud.net.cn/article/35563)
* [Important] Added uni-app support for publishing to ByteDance applet [Details](https://ask.dcloud.net.cn/article/35563)
* 新增 窗口大小变化监听接口 uni.onWindowResize、uni.offWindowResize [详情](https://uniapp.dcloud.io/api/ui/window?id=onwindowresize)
* Added window size change monitoring interface uni.onWindowResize, uni.offWindowResize [Details](https://uniapp.dcloud.io/api/ui/window?id=onwindowresize)
* 修复 upx 负数转换和正数不一致的问题 [#180](https://github.com/dcloudio/uni-app/issues/180)
* Fix the inconsistency between upx negative conversion and positive conversion [#180](https://github.com/dcloudio/uni-app/issues/180)
* 新增 uni.webview.js 支持字节跳动小程序 [v1.4.9](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.4.9.js)
* Added uni.webview.js to support ByteDance applet [v1.4.9](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.4.9. js)
* App平台 新增 picker 组件支持多列选择器（mode: multiSelector）
* App platform added picker component to support multi-column selector (mode: multiSelector)
* App平台 新增 manifest的启动图配置增加白屏时不关闭splash启动图 [详情](https://ask.dcloud.net.cn/article/35565)
* App platform Added the startup image configuration of manifest without closing the splash image when the white screen is added [Details](https://ask.dcloud.net.cn/article/35565)
* App平台 修复 uni.notifyBLECharacteristicValueChange 方法调用无效的bug
* App platform fix the bug that the uni.notifyBLECharacteristicValueChange method call is invalid
* App平台 修复 uni.getSystemInfo/uni.getSystemInfoSync 接口返回部分参数不准确的bug
* App platform Fixed the bug that some parameters returned by the uni.getSystemInfo/uni.getSystemInfoSync interface were inaccurate
* App平台 修复 上传和下载接口服务端返回状态码不为200时判断为失败的问题
* App platform fixes the problem that the upload and download interface server returns a failure when the status code is not 200
* App平台 修复 uni.uploadFile 接口上传文件到阿里云oss失败的兼容问题
* App platform to fix the compatibility issue that the uni.uploadFile interface fails to upload files to Alibaba Cloud oss
* App平台 修复 uni.setTabBarItem 接口未设置图标参数时报错的bug
* App platform Fixed the bug that the uni.setTabBarItem interface did not set the icon parameter and reported an error
* App平台 优化 iOS 平台支持配置底部安全区占位 [详情](https://ask.dcloud.net.cn/article/35564)
* App platform Optimized iOS platform to support the configuration of the bottom safe area [Details](https://ask.dcloud.net.cn/article/35564)
* H5平台 修复 map 组件 controls 点击无效的bug
* H5 platform fix the bug that the map component controls click is invalid
* H5平台 修复 input 组件 placeholder 位置不正确的bug
* For H5 platform, fix the bug that the placeholder of the input component is incorrectly positioned
* H5平台 修复 input 组件文字颜色无法通过动态修改 class 来调整的bug
* On H5 platform, fix the bug that the text color of the input component cannot be adjusted by dynamically modifying the class
* H5平台 修复 movable-view 组件动态设置显示/隐藏后，组件状态异常的bug [#163](https://github.com/dcloudio/uni-app/issues/163)
* H5 platform Fix the bug that the component status is abnormal after the movable-view component is dynamically set to show/hide [#163](https://github.com/dcloudio/uni-app/issues/163)
* H5平台 修复 image 组件 mode=widthFix 不生效的bug
* H5 platform fix the bug that the image component mode=widthFix does not take effect
* H5平台 修复 上传文件路径为 base64 时文件没有扩展名的问题
* H5 platform fix the problem that the file has no extension when the upload file path is base64
* hello uni-app 新增 添加联系人信息示例
* hello uni-app added an example of adding contact information
* hello uni-app 新增 picker 组件在 App 平台支持多列选择器
* Added picker component to hello uni-app to support multi-column selectors on App platform
* hello uni-app 新增 悬浮按钮（fab button）扩展组件
* hello uni-app added a fab button extension component
* hello uni-app 新增 导航栏带搜索框的示例
* hello uni-app adds an example of a navigation bar with a search box

#### 1.5.4.20190127
* 修复 错误过滤css属性选择器通配符（*），注意：非属性选择器中依然不支持通配符（*）
* Fixed bug in filtering css attribute selector wildcards (*), note: wildcards (*) are still not supported in non-attribute selectors
* 修复 未检测到微信开发者工具时，特殊情况编译卡死的bug
* Fixed the bug that the compilation stuck in special circumstances when the WeChat developer tool was not detected
* 优化 微信小程序在特定场景数据渲染慢的问题
* Optimized the slow rendering of WeChat applet in specific scenes

#### 1.5.2.20190121
* 修复 编译至 app 时触发 babel 500kb 限制
* Fix babel 500kb limit triggered when compiling to app
* 修复 文本节点未移除前后空格及换行符
* Fixed text nodes not removing leading and trailing spaces and newlines
* 修复 scss,less,stylus等文件引用的 css 文件中条件编译不生效
* Fixed conditional compilation not taking effect in css files referenced by scss, less, stylus and other files
* 修复 vue 文件 template 节点为空时编译器报错
* Fix the compiler error when the template node of the vue file is empty
* 优化 自动移除 css 文件中的多余分号
* Optimized to automatically remove extra semicolons in css files
* 优化 自动移除 css 文件中的 * 通配符选择器 
* Optimized to automatically remove * wildcard selectors in css files

#### 1.5.1.20190120
* 修复 components 目录引用组件查找失败的问题
* Fix the problem that the component directory reference component search fails
* 修复 @import 引用 css 文件查找失败的问题
* Fix the problem that @import referenced css file search failed
* 修复 组件嵌套 slot 导致的事件冲突问题
* Fix the event conflict problem caused by component nested slot
* 优化 发行至小程序的包体积
* Optimize the package size released to the applet

#### 1.5.0.20190119
* 【重要】变更 为加快调试速度，运行到微信小程序时取消代码压缩。正式发布，需点击发行菜单操作
* [Important] Changed to speed up debugging, cancel code compression when running to the WeChat applet. Official release, you need to click the release menu to operate
* 优化 首页未渲染时不关闭splash，避免白屏（手动设置延迟关闭splash不再生效）
* Optimized to not close splash when the home page is not rendered to avoid white screen (manually setting the delay to close splash will no longer take effect)
* 优化 减小编译器体积，精简依赖文件
* Optimization Reduce the size of the compiler and simplify the dependency files
* 新增 支持字体及背景图片使用本地资源（编译器自动将其编译为base64方式，要求大小在40k以内）
* Added support for using local resources for fonts and background images (the compiler automatically compiles them into base64, and the size is required to be within 40k)
* 新增 新闻/资讯App模板，已上传[插件市场](https://ext.dcloud.net.cn/plugin?id=103)
* Added News/Information App template, which has been uploaded to [Plugin Market](https://ext.dcloud.net.cn/plugin?id=103)
* 新增 底部tab带加号的模板，已上传[插件市场](https://ext.dcloud.net.cn/plugin?id=98)
* Added a template with a plus sign on the bottom tab, which has been uploaded to [Plugin Market](https://ext.dcloud.net.cn/plugin?id=98)
* 新增 一批跨各家小程序的API，如小程序间互跳、收货地址、发票抬头等，[详情](https://uniapp.dcloud.io/api/README)
* Added a batch of APIs across various mini-programs, such as mutual jump between mini-programs, delivery address, invoice header, etc. [Details](https://uniapp.dcloud.io/api/README)
* 新增 less/scss/stylus/ts 等预编译语言支持条件编译 [详情](https://uniapp.dcloud.io/platform?id=%E6%A0%B7%E5%BC%8F%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)
* Added less/scss/stylus/ts and other precompiled languages to support conditional compilation [Details](https://uniapp.dcloud.io/platform?id=%E6%A0%B7%E5%BC%8F%E7% 9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)
* 新增 typescript 在vue里内联使用
* Added typescript to be used inline in vue
* 新增 支持通过 process.env.NODE_ENV 进行运行环境判断，并提供快捷代码块uEnvDev、uEnvProd，[详情](https://uniapp.dcloud.io/frame?id=运行环境判断)
* Added support for running environment judgment through process.env.NODE_ENV, and provides shortcut code blocks uEnvDev, uEnvProd, [Details](https://uniapp.dcloud.io/frame?id=%E8%BF%90%E8 %A1%8C%E7%8E%AF%E5%A2%83%E5%88%A4%E6%96%AD)
* 修复 uni-app 项目上层目录中含有 node_modules 目录时，模块依赖查找错误，导致运行到 H5 平台时页面白屏的bug
* Fix the bug of module dependency lookup error when the upper directory of uni-app project contains the node_modules directory, resulting in a white screen bug when running to the H5 platform
* App平台 新增 TabBar 相关 API：setTabBarItem、setTabBarStyle、hideTabBar、showTabBar
* App platform added TabBar related APIs: setTabBarItem, setTabBarStyle, hideTabBar, showTabBar
* App平台 修复 TabBar 在 iOS 平台左上角多显示一个小点的问题
* App platform Fixed the problem that TabBar displayed an extra dot in the upper left corner of the iOS platform
* App平台 修复 rich-text 组件无法解析部分富文本信息的问题
* App platform Fixed the problem that the rich-text component could not parse some rich text information
* App平台 修复 map 组件动态改变 polyline 属性不生效的问题
* App platform fix the problem that the map component dynamically changes the polyline property does not take effect
* App平台 修复 下拉刷新后页面点击事件第一次触发不正确的问题
* App platform fixed the problem that the page click event was triggered incorrectly for the first time after the pull-down refresh
* H5平台 新增 组件：cover-view、cover-image
* H5 platform new components: cover-view, cover-image
* H5平台 优化 image 组件支持浏览器中的长按识别
* Optimized image component for H5 platform to support long press recognition in browsers
* H5平台 优化 reLaunch 及 redirectTo 实现，和其他端保持一致
* H5 platform optimized reLaunch and redirectTo implementation, consistent with other terminals
* H5平台 优化 TabBar 的 badge 位置与小程序表现一致
* H5 platform optimizes the tabBar's badge position to be consistent with the applet performance
* H5平台 优化 TabBar 的 icon 大小与 APP 端表现一致
* H5 platform optimizes the icon size of TabBar to be consistent with the APP side performance
* H5平台 修复 选择文件后导致页面滚动的问题
* H5 platform fix the problem that the page scrolls after selecting a file
* H5平台 修复 页面 onUnload 不触发的 bug
* H5 platform to fix the bug that the page onUnload does not trigger
* H5平台 修复 选择节点时不包含当前页面节点的问题
* H5 platform fix the problem that the current page node is not included when selecting a node
* H5平台 修复 节点操作 API 在 created 生命周期内调用报错的问题。
* H5 platform fixed the problem that the node operation API calls an error during the created life cycle.
* H5平台 修复 点击事件缺少的信息的问题
* H5 platform fix click event missing information issue
* H5平台 修复 部分组件不能使用 hidden 属性控制显示状态的问题
* H5 platform fix the problem that some components cannot use the hidden attribute to control the display state
* H5平台 修复 uni.pageScrollTo 在微信内置浏览器无效的问题
* H5 platform fix the problem that uni.pageScrollTo is invalid in WeChat built-in browser
* H5平台 解决 swiper 组件设置 skipHiddenItemLayout 属性报错的问题
* H5 platform to solve the problem that the swiper component sets the skipHiddenItemLayout attribute to report an error
* H5平台 修复 swiper 组件动态修改内容后自动播放停止的问题
* For H5 platform, fix the problem that the automatic playback stops after the swiper component dynamically modifies the content
* H5平台 修复 swiper 组件同时显示多个 swiper-item 时指示器显示不正确的问题
* H5 platform Fix the problem that the indicator is not displayed correctly when the swiper component displays multiple swiper-items at the same time
* H5平台 修复 swiper 组件上拖动导致父组件表现异常的问题
* H5 platform fixed the problem that dragging on the swiper component caused the parent component to behave abnormally
* H5平台 修复 text 组件 selectable 属性无效的问题
* H5 platform fix the problem that the selectable attribute of the text component is invalid
* H5平台 修复 map 组件 markertap 事件不触发的问题
* H5 platform fix the problem that the map component markertap event does not trigger
* H5平台 修复 map 组件 callout 点击事件不触发的问题
* H5 platform fix the problem that the map component callout click event does not trigger
* H5平台 修复 picker 组件 start 和 end 值不合法时表现异常的问题
* For H5 platform, fix the problem that the picker component behaves abnormally when the start and end values are illegal
* H5平台 修复 picker 组件和 actionSheet 组件未使用时在 Safari 内可见的问题
* H5 platform fix picker component and actionSheet component visible in Safari when not used
* H5平台 修复 web-view 组件 src 属性动态修改不生效的问题
* For H5 platform, fix the problem that the dynamic modification of the src attribute of the web-view component does not take effect
* H5平台 新增 video 组件开放 TBS 同层播放器相关配置
* H5 platform added video component to open TBS same-layer player related configuration
* H5平台 修复 部分场景获取安卓手机型号出错的问题 [#134](https://github.com/dcloudio/uni-app/issues/134)
* H5 platform fix the problem of getting Android phone model error in some scenarios [#134](https://github.com/dcloudio/uni-app/issues/134)
* hello uni-app 百度小程序版已上架，[详情](https://m3w.cn/uniapp)
* hello uni-app Baidu applet version has been launched, [Details](https://m3w.cn/uniapp)
* hello uni-app 新增 导航栏显示图片的示例
* hello uni-app adds an example of displaying pictures in the navigation bar
* hello uni-app 新增 导航栏带红点和角标的示例
* hello uni-app adds an example of a navigation bar with red dots and corner markers
* hello uni-app 新增 导航栏带城市选择的示例
* hello uni-app added an example with city selection in the navigation bar
* hello uni-app 优化 顶部可拖动选项卡（原生）支持配置是否可拖动
* hello uni-app optimization The top draggable tab (native) supports configuring whether it is draggable
* hello uni-app 优化 H5 平台模板文件更名为 template.h5.html，避免文件名引发的误解
* hello uni-app optimized H5 platform template file renamed template.h5.html to avoid misunderstanding caused by file name
* hello uni-app 更新 city.data.js，使用最新的城市区县数据
* hello uni-app update city.data.js to use the latest city district data

#### 1.4.1.20181228
* 修复 CSS中条件编译导致运行至App和微信小程序失败的bug
* Fixed the bug that conditional compilation in CSS caused failure to run to App and WeChat applet

#### 1.4.0.20181227
* 【重要】新增 uni-app添加支付宝和百度小程序运行 [详情](https://ask.dcloud.net.cn/article/35393)
* [Important] Added uni-app to add Alipay and Baidu applet to run [Details](https://ask.dcloud.net.cn/article/35393)
* 【重要】新增 uni-app插件市场，支持前端组件、js sdk、页面模板、项目模板、原生插件等多种类型 [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
* [Important] New uni-app plug-in market, supporting front-end components, js sdk, page templates, project templates, native plug-ins and other types [https://ext.dcloud.net.cn](https://ext .dcloud.net.cn)
* 【重要】新增 uni-app支持原生插件云打包
* [Important] Added uni-app to support cloud packaging of native plugins
* 新增 条件编译 static 支持平台目录，不同平台可定义自己的独有静态文件 [详情](https://uniapp.dcloud.io/frame?id=%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
* Added conditional compilation static support platform directory, different platforms can define their own unique static files [details](https://uniapp.dcloud.io/frame?id=%E7%9B%AE%E5%BD%95 %E7%BB%93%E6%9E%84)
* 新增 条件编译 支持多平台“或”运算符：||。例如： // #ifdef MP-WEIXIN || MP-BAIDU 代表在微信小程序和百度小程序均生效
* Added conditional compilation to support multi-platform "or" operator: ||. For example: // #ifdef MP-WEIXIN || MP-BAIDU means it takes effect in both WeChat Mini Programs and Baidu Mini Programs
* 新增 条件编译 pages.json 支持条件编译。pages.json里不引用的页面不会打包，可以更自由的管理不同平台文件的打包策略。
* Added conditional compilation pages.json supports conditional compilation. Pages that are not referenced in pages.json will not be packaged, and the packaging policies of files on different platforms can be managed more freely.
* 修复 条件编译 使用 ifndef 导致编译错误的问题
* Fix conditional compilation use ifndef to cause compilation errors
* 新增 manifest.json 中（mp-weixin 节点下） 新增 permission 配置，用于微信小程序接口权限相关设置
* Added permission configuration in manifest.json (under mp-weixin node), which is used for WeChat applet interface permission settings
* 新增 蓝牙相关API [文档](https://uniapp.dcloud.io/api/system/bluetooth)
* Added Bluetooth related API [documentation](https://uniapp.dcloud.io/api/system/bluetooth)
* 新增 低功耗蓝牙相关API [文档](https://uniapp.dcloud.io/api/system/ble)
* Added Bluetooth Low Energy related API [documentation](https://uniapp.dcloud.io/api/system/ble)
* 新增 iBeacon相关API [文档](https://uniapp.dcloud.io/api/system/ibeacon)
* Added iBeacon related API [documentation](https://uniapp.dcloud.io/api/system/ibeacon)
* 优化 css 编译报错提示
* Optimize css compilation error prompt
* 修复 v-for item 部分写法编译失败的问题
* Fix the problem that some writing of v-for item fails to compile
* H5平台 新增 canvas 组件和相关 API
* Added canvas component and related API for H5 platform
* H5平台 优化 导航栏自定义按钮支持 float 属性
* H5 platform optimization Navigation bar custom button supports float attribute
* H5平台 修复 uni.showModal 内容过多显示超出屏幕的问题
* H5 platform fix the problem that uni.showModal shows too much content beyond the screen
* H5平台 修复 picker 组件未设置 value 属性值时报错的问题
* For H5 platform, fix the problem that the picker component does not set the value attribute value and reports an error
* H5平台 修复 TabBar 页面 onHide 钩子函数不触发的问题
* H5 platform fix the problem that the onHide hook function of the TabBar page does not trigger
* H5平台 修复 map 组件中 marker 图像不显示的问题
* H5 platform fix the problem that the marker image in the map component is not displayed
* H5平台 修复 AudioContext 事件监听报错的问题
* H5 platform fix AudioContext event monitoring error
* H5平台 修复 swiper 组件动态设置 current 后 swiper 不切换的问题
* H5 platform fix the problem that the swiper does not switch after the swiper component dynamically sets the current
* H5平台 修复 swiper 组件设置属性 previous-margin、next-margin 显示异常的问题
* For H5 platform, fix the problem that previous-margin and next-margin display abnormally when setting properties of swiper component
* H5平台 修复 picker 组件显示的选中项不正确的问题 [#103](https://github.com/dcloudio/uni-app/issues/103)
* H5 platform Fix the problem that the selected item displayed by the picker component is incorrect [#103](https://github.com/dcloudio/uni-app/issues/103)
* H5平台 修复 picker 组件动态设置高度后显示异常的问题
* H5 platform fixed the problem that the picker component displayed abnormally after dynamically setting the height
* H5平台 修复 radio 组件设置 color 属性不生效的问题 [#119](https://github.com/dcloudio/uni-app/issues/119)
* For H5 platform, fix the problem that the color property of the radio component does not take effect [#119](https://github.com/dcloudio/uni-app/issues/119)
* H5平台 修复 picker 组件 columnchange 事件不触发的问题
* H5 platform fix the problem that the columnchange event of the picker component does not trigger
* hello uni-app 优化 radio-group 组件的切换逻辑，兼容支付宝/百度小程序
* hello uni-app optimizes the switching logic of radio-group components, compatible with Alipay/Baidu applet
* hello uni-app 优化 echarts 示例，兼容H5
* hello uni-app optimized echarts example, compatible with H5
* hello uni-app 修复 自定义懒加载占位图位置不正确的问题
* hello uni-app fix the problem that the position of custom lazy loading placeholder is not correct
* hello uni-app 优化 H5平台放开手势识别、图标裁剪等与 canvas 有关的示例
* hello uni-app optimized H5 platform to release gesture recognition, icon cropping and other examples related to canvas

#### 1.3.1.20181211
* 优化 编译时提供更明确的错误提示
* Optimized to provide clearer error prompts when compiling
* 优化 支持在 main.js 引入 css 模块
* Optimized to support the introduction of css modules in main.js
* 修复 onReady 触发两次的问题
* Fix the problem of onReady triggering twice
* 修复 number 类型的 input 组件设置 maxlength 无效的bug
* Fix the bug of invalid setting maxlength for input component of type number
* 修复 number 类型的 input 组件输入无效数值导致 placeholder 和数字重叠的bug
* Fix the bug that the placeholder and the number overlap when the input component of the number type enters an invalid value
* App平台 优化 web-view 组件支持自定义进度条 progress
* App platform optimized web-view component to support custom progress bar progress
* App平台 优化 titleNView配置支持左右内边距（padding/padding-left/padding-right）和按钮的宽度（width）
* App platform optimized titleNView configuration to support left and right padding (padding/padding-left/padding-right) and button width (width)
* App平台 修复 video 组件静音属性不生效的问题
* App platform fixed the problem that the mute property of the video component did not take effect
* App平台 修复 date 类型的 picker 组件未设置开始结束时间在部分设备不能选择日期的问题
* App platform fix the problem that the date type picker component does not set the start and end time and cannot select the date on some devices
* App平台 修复 TabBar 组件图像和文本均未设置的情况下报错的问题
* App platform Fixed the problem of error reporting when the image and text of the TabBar component are not set
* App平台 修复 引入小程序组件时获取当前 Webview 对象失败的问题
* App platform fixes the problem that the current Webview object fails to be obtained when the applet component is introduced
* App平台 修复 nvue 中 uni.getStorage 某些情况无法获取数据的问题
* App platform to fix the problem that uni.getStorage in nvue cannot get data in some cases
* App平台 修复 nvue 中 uni.setStorage 导致 iOS 设备崩溃的问题
* App platform fix the problem that uni.setStorage in nvue causes iOS device to crash
* App平台 修复 在线打包过的应用某些情况下运行到真机报错的问题
* App platform repaired the problem that the online packaged application runs to the real machine in some cases and reports an error
* iOS平台 修复 canvas 组件保存到文件时绘制的图像不显示的问题
* iOS platform fix the problem that the image drawn when the canvas component is saved to a file is not displayed
* iOS平台 修复 uni.request 方法 GET 请求无法使用 data 传参的问题
* iOS platform fix the problem that uni.request method GET request cannot use data to pass parameters
* H5平台 新增 组件 movable-area、movable-view、web-view
* H5 platform added components movable-area, movable-view, web-view
* H5平台 优化 文件上传时保留原始文件名
* H5 platform optimization Keep the original file name when uploading files
* H5平台 优化 input 和 textarea 组件在 iOS 设备上禁用状态颜色不一致的情况
* H5 platform optimizes the inconsistency of the disabled state color of the input and textarea components on iOS devices
* H5平台 修复 swiper 组件未包含子组件时显示异常的问题
* H5 platform fix the problem of abnormal display when the swiper component does not contain subcomponents
* H5平台 修复 picker 组件可选择错误的日期的问题 [#89](https://github.com/dcloudio/uni-app/issues/89)
* H5 platform Fix the problem that the picker component can select the wrong date [#89](https://github.com/dcloudio/uni-app/issues/89)
* H5平台 修复 uni.request GET 类型请求的 url 拼接不规范导致部分服务器无法识别参数的问题
* For H5 platform, fix the problem that some servers cannot recognize the parameters due to irregular splicing of urls for uni.request GET type requests
* H5平台 修复 WebSocket 事件监听报错的bug
* H5 platform fix the bug of WebSocket event monitoring error

#### 1.2.1.20181126
* 修复 真机运行到不支持viewport-fit=cover属性的设备上时，控制台出现相关警告的问题
* Fix the issue that the console will display a warning when the real machine is running on a device that does not support the viewport-fit=cover attribute

#### 1.2.0.20181122
* 【重要】uni-app 支持发布到H5平台 注意事项参考[ask.dcloud.net.cn/article/35232](https://ask.dcloud.net.cn/article/35232)
* [Important] uni-app supports publishing to H5 platform. Please refer to [ask.dcloud.net.cn/article/35232](https://ask.dcloud.net.cn/article/35232)
* uni-app框架开源，欢迎大家star鼓励，[github地址](https://github.com/dcloudio/uni-app)
* The uni-app framework is open source, everyone is welcome to encourage it, [github address](https://github.com/dcloudio/uni-app)
* uni-app支持通过vue-cli脚手架创建项目模板并运行到H5平台
* uni-app supports creating project templates through vue-cli scaffolding and running to H5 platform
* 新增 条件编译 #ifndef 代表非此平台的条件编译（如<!-- #ifndef H5 -->代表非H5平台，也就是uni-app目前支持的App及小程序平台）
* Added conditional compilation #ifndef represents conditional compilation for non-this platform (eg <!-- #ifndef H5 --> represents non-H5 platform, which is the App and applet platform currently supported by uni-app)
* 新增 API tabBar支持设置红点和角标 参考[uni-app规范](https://uniapp.dcloud.io/api/ui/tabbar)
* Added API tabBar support for setting red dots and corner markers Refer to [uni-app specification](https://uniapp.dcloud.io/api/ui/tabbar)
* 新增 API 监听网络状态变化，参考[uni-app规范](https://uniapp.dcloud.io/api/system/network?id=onnetworkstatuschange)
* Added API to monitor network status changes, refer to [uni-app specification](https://uniapp.dcloud.io/api/system/network?id=onnetworkstatuschange)
* 新增 button 组件的 open-type 属性支持 feedback 值域，参考[uni-app规范](https://uniapp.dcloud.io/component/button)
* Added open-type property of button component to support feedback value field, refer to [uni-app specification](https://uniapp.dcloud.io/component/button)
* 新增 manifest.json 配置 navigateToMiniProgramAppIdList 节点，可配置需需跳转的小程序列表
* Added manifest.json to configure the navigateToMiniProgramAppIdList node, which can configure the list of mini programs to be jumped to
* 优化 web-view 组件 增加网页加载进度条
* Optimize the web-view component and increase the web page loading progress bar
* 优化 web-view 组件 标题与页面 title 同步
* Optimize web-view component title and page title synchronization
* 修复 uni.request method 为 PUT、DELETE 时，参数信息丢失的问题
* Fix the problem that parameter information is lost when uni.request method is PUT or DELETE
* 修复 picker 组件 cancel 事件不触发的问题
* Fix the problem that the cancel event of the picker component is not triggered
* 修复 复杂场景下组件数据渲染异常的问题
* Fix the problem of abnormal component data rendering in complex scenes
* 修复 uni.canvasToTempFilePath 方法设置参数destWidth、destHeight不生效的问题
* Fix the problem that the parameters destWidth and destHeight set by the uni.canvasToTempFilePath method do not take effect
* 优化 input 组件 type="number" 在 App 端支持输入小数点
* Optimize the input component type="number" to support the input of decimal points on the App side
* 新增 nvue 支持第三方weex ui库，参考[uni-app规范](https://uniapp.dcloud.io/use-weex?id=nvue-中使用-weex-第三方库)
* Added nvue support for third-party weex ui library, refer to [uni-app specification](https://uniapp.dcloud.io/use-weex?id=nvue-%E4%B8%AD%E4%BD%BF% E7%94%A8-weex-%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%93)
* 新增 nvue 支持 bindingx
* Added nvue support bindingx
* 新增 nvue 支持顶部原生导航的 onNavigationBarButtonTap 事件
* Added nvue support onNavigationBarButtonTap event for top native navigation
* 修复 nvue 初始化时得不到 storage 的问题
* Fix the problem of not getting storage when nvue is initialized
* 修复 nvue Android平台 不支持 Websocket 功能的问题
* Fix the problem that the nvue Android platform does not support the Websocket function
* 修复 nvue Android平台 页面未设置 titleNView 时可能显示不正常的问题
* Fix nvue Android platform page may not display properly when titleNView is not set
* 修复 nvue iOS平台 弹出软键盘后收回区域可能不对的问题
* Fix the problem that the retracted area may be incorrect after popping up the soft keyboard on nvue iOS platform
* 修复 nvue iOS平台使用 uni.request 不能设置data的问题
* Fix the problem that data cannot be set when using uni.request on nvue iOS platform
* 优化 hello uni-app web-view页面 增加和其它页面进行传参及跳转
* Optimize the hello uni-app web-view page and add parameters and jump to other pages
* 优化 hello uni-app 示例，样式更统一，uni.css有较大升级，老项目升级时需注意测试
* Optimize the hello uni-app example, the style is more uniform, uni.css has been greatly upgraded, and the old project needs to be tested when upgrading

#### 1.1.0.20181030
* 【重要】uni-app的官方视频教程发布了！ [参考](https://ke.qq.com/course/343370)
* [Important] The official video tutorial of uni-app has been released! [Reference](https://ke.qq.com/course/343370)
* 【重要】新增 web-view组件在App环境支持加载本地html文件，方便引用dom相关库及方便5+项目向uni-app分步迁移。[参考](https://uniapp.dcloud.io/component/web-view)
* [Important] The new web-view component supports loading local html files in the App environment, which is convenient for referencing dom-related libraries and facilitating the step-by-step migration of 5+ projects to uni-app. [Reference](https://uniapp.dcloud.io/component/web-view)
* 新增 自定义返回逻辑，点击手机back时可先关闭弹出类自定义组件。 [参考](https://ask.dcloud.net.cn/article/35120)
* Added custom return logic, you can first close the pop-up custom component when you click back on the phone. [Reference](https://ask.dcloud.net.cn/article/35120)
* 新增 cover-view,cover-image 组件（仅支持在 video,map 中使用，暂不支持互相嵌套）。[参考](https://uniapp.dcloud.io/component/cover-view)
* Added cover-view, cover-image components (only supported in video, map, not supported for nesting). [Reference](https://uniapp.dcloud.io/component/cover-view)
* 优化 WebSocket 支持 ArrayBuffer 类型的数据通信
* Optimize WebSocket to support data communication of ArrayBuffer type
* 优化 uni.showToast 显示文字在 iOS 平台字体过小的问题
* Optimize uni.showToast to display text on iOS platform with too small font size
* 调整 sourcemap文件的生成目录，微信开发者工具发布小程序时不再提示忽略文件
* Adjust the generation directory of the sourcemap file, the WeChat developer tool will no longer prompt to ignore the file when publishing the applet
* 修复 pages.json 调整部分内容时编译不生效的bug
* Fix the bug that compilation does not take effect when pages.json adjusts some content
* 修复 uni.saveFile 在Android平台保存文件后返回路径不正确的bug
* Fix the bug that uni.saveFile returns incorrect path after saving file on Android platform
* 修复 manifest.json文件中networkTimeout节点下 downloadFile、uploadFile 配置项有效值单位不正确的bug
* Fix the bug that the valid value unit of the downloadFile and uploadFile configuration items under the networkTimeout node in the manifest.json file is incorrect
* 修复 map 组件使用 v-show 切换时地图不显示的bug
* Fix the bug that the map is not displayed when the map component uses v-show to switch
* 修复 map 组件动态修改 scale 值不生效的bug
* Fix the bug that the dynamic modification of the scale value of the map component does not take effect
* 修复 video 组件的 timeupdate/fullscreenchange 事件回调中，event.detail 参数信息缺失的bug
* Fix the bug that the event.detail parameter information is missing in the timeupdate/fullscreenchange event callback of the video component
* 修复 uni.getSystemInfo 在App平台下获取系统语言不正确的bug
* Fix the bug that uni.getSystemInfo gets the system language incorrectly under the App platform
* hello uni-app 优化顶部选项卡模板，vue/nvue 复用共同的js逻辑和css样式
* hello uni-app optimizes the top tab template, and vue/nvue reuses common js logic and css styles
* hello uni-app 新增 tag标签 模板
* Added tag template for hello uni-app
* hello uni-app 新增 web-view组件加载本地html的示例（仅App平台生效）
* hello uni-app adds an example of loading local html in the web-view component (only valid on the App platform)
* hello uni-app 修复 问题反馈 模板 新增图片会覆盖前一张图片的bug
* hello uni-app fix bug feedback template, new image will cover the bug of previous image
* hello uni-app 新增 倒计时 模板(感谢网友hcoder-深海)
* Added countdown template to hello uni-app (thanks to netizen hcoder-deep sea)
* hello uni-app 新增 插屏弹窗 模板(感谢网友hcoder-深海)
* Added interstitial popup template for hello uni-app (thanks to netizen hcoder-deep sea)
* hello uni-app 新增 表单验证 模板(感谢网友hcoder-深海)
* hello uni-app added form validation template (thanks to netizen hcoder-deep sea)

#### 1.0.1.20181012
* 优化 uni.chooseImage 在App平台补齐sizeType参数，可直接压缩图片，不需要使用plus api压缩了
* Optimized uni.chooseImage to fill in the sizeType parameter on the App platform to compress images directly, no need to use plus api to compress
* 修复 video组件 初始化时报错的问题
* Fix the problem of error when the video component is initialized
* 修复 video组件 poster属性不支持本地路径的问题
* Fix the problem that the poster property of the video component does not support local paths
* 修复 地图API mapContext 的 getRegion,getScale 接口 success/fail 回调不触发的bug
* Fix the bug that the success/fail callbacks of the getRegion and getScale interfaces of the map API mapContext are not triggered
* 修复 地图API uni.chooseLocation 在Android 4.4平台打开地图显示白屏的bug
* Fix the bug that the map API uni.chooseLocation displays a white screen when opening the map on the Android 4.4 platform
* 修复 nvue无法在iOS模拟器渲染的问题，Android也仅支持谷歌官方模拟器
* Fixed the issue that nvue could not render in iOS simulator, and Android only supports official Google simulator
* 修复 部分手机桌面启动uni-app，首页偶发渲染白屏的bug
* Fix the bug that some mobile phone desktops start uni-app, and the home page occasionally renders a white screen
* 修复 canvas API uni.canvasToTempFilePath接口在canvas中含有图像时调用失败的bug
* Fix the bug that the canvas API uni.canvasToTempFilePath interface fails to call when there is an image in the canvas
	
#### 1.0.0.20181010
* 【重要】开放 uni-app支持原生sdk集成，离线打包，自由扩展原生能力 [参考](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/104)
* [Important] Open uni-app supports native SDK integration, offline packaging, and free expansion of native capabilities [Reference](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article /104)
* 【重要】开放 兼容微信小程序 JS SDK，丰富的小程序生态内容可直接引入uni-app并且3端通用 [参考文档及各种小程序SDK资源汇总](https://ask.dcloud.net.cn/article/35070)
* [Important] Open and compatible with WeChat applet JS SDK, rich applet ecological content can be directly imported into uni-app and common to 3 terminals [reference documents and various applet SDK resources summary](https://ask.dcloud.net .cn/article/35070)
* 【重要】开放 兼容微信小程序自定义组件并且3端通用 [参考](https://uniapp.dcloud.io/frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)
* [Important] Open and compatible with WeChat applet custom components and common to 3 terminals [Reference](https://uniapp.dcloud.io/frame?id=%E5%B0%8F%E7%A8%8B%E5%BA %8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)
* 【重要】开放 nvue 原生渲染，引入weex，解决某些场景webview无法高性能实现的问题(如左右拖动的复杂tab列表) 注：暂不支持模拟器 [参考](https://uniapp.dcloud.io/nvue-outline)
* [Important] Open nvue native rendering and introduce weex to solve the problem that webview cannot be implemented with high performance in some scenarios (such as complex tab list dragged left and right) Note: The simulator is not supported [Reference](https://uniapp. dcloud.io/nvue-outline)
* 【重要】开放 npm 支持 [参考](https://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
* [Important] Open npm support [Reference](https://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
* 新增 web-view 组件里的网页支持使用uni跳转api跳转到指定路由页面 [参考](https://uniapp.dcloud.io/component/web-view)
* Added support for web pages in the web-view component to use the uni jump api to jump to the specified routing page [Reference](https://uniapp.dcloud.io/component/web-view)
* 优化 发行到App平台时，自动完成js业务代码的混淆压缩
* Optimized to automatically complete the obfuscation and compression of js business code when it is released to the App platform
* 新增 尺寸单位转换方法 uni.upx2px() [参考规范](https://uniapp.dcloud.io/frame?id=upx2px)
* Added dimension unit conversion method uni.upx2px() [reference specification](https://uniapp.dcloud.io/frame?id=upx2px)
* 修复 slot 内无法使用{{}}插入数据
* Fixed the inability to use {{}} to insert data in slot
* 修复 slot 内使用自定义组件数据错乱
* Fix data confusion when using custom components in slot
* 修复 打开多个相同页面数据错乱，例如商品详情页面A跳转详情页面B
* Fix the data disorder when opening multiple identical pages, for example, product detail page A jumps to detail page B
* 调整 unifile:// 文件路径调整为5+识别的plus.io的目录结构，方便plus API继续操作文件
* Adjust the unifile:// file path to the directory structure of plus.io recognized by 5+, so that the plus API can continue to operate the file
* 修复 uni.login 无法切换登录账户的问题
* Fix the problem that uni.login cannot switch login accounts
* 修复 uni.chooseLocation 定位不准的问题
* Fix the problem of inaccurate positioning of uni.chooseLocation
* 优化 pages.json 支持在 app-plus 节点下使用 upx 单位
* Optimize pages.json to support upx unit under app-plus node
* 优化 condition 启动二级页面时支持back至首页
* Optimized condition to support back to the home page when starting the secondary page
* 优化 App平台地图控件从腾讯地图调整为高德原生地图（使用时注意需要向高德申请Appkey）
* Optimized the map control of the App platform from Tencent map to AutoNavi's native map (note that you need to apply for an Appkey to AutoNavi when using it)
* 优化 video组件 支持rtmp等非http协议的视频源
* Optimize the video component to support non-http protocol video sources such as rtmp
* 修复 video组件 设置 duration 属性无效的bug 
* Fix the bug that the duration property of the video component is invalid
* 修复 真机调试时，修改main.js代码，未自动热更新的bug
* Fixed the bug that the main.js code was modified and not automatically hot-updated when debugging on a real machine
* hello uni-app 新增 原生nvue左右滑动选项卡示例
* hello uni-app added native nvue left and right sliding tab example
* hello uni-app 新增 movable-area示例
* Added movable-area example to hello uni-app
* hello uni-app 新增 小程序支付演示
* hello uni-app adds a demo of applet payment
* hello uni-app 新增 自定义导航栏组件支持下拉刷新
* hello uni-app added custom navigation bar component to support pull-down refresh
* hello uni-app 新增 列表到详情模板中详情页底部增加小程序banner广告演示
* hello uni-app added the list to the details template and added the mini program banner advertisement demo at the bottom of the details page
* hello uni-app 新增 时间轴timeline 模板示例
* hello uni-app adds a timeline template example
* hello uni-app 新增 模板 步骤提示 (感谢网友hcoder-深海)
* hello uni-app added template step tips (thanks to netizen hcoder-deep sea)
* hello uni-app 新增 模板 滚动公告 (感谢网友hcoder-深海)
* hello uni-app added template rolling announcement (thanks to netizen hcoder-deep sea)
* hello uni-app 新增 模板 评论列表 (感谢网友hcoder-深海)
* Added template comment list to hello uni-app (thanks to netizen hcoder-deep sea)
* hello uni-app 修复 segmented-control 示例退出重进后数据未重置的问题
* hello uni-app fix the problem that the data is not reset after the segmented-control example exits and re-enters

#### 0.1.50.20180918-alpha
*  优化 下拉刷新配置
* Optimized pull-down refresh configuration
*  修复 uploadFile 参数 files 不生效
* Fix uploadFile parameter files does not take effect
*  修复 组件内联 style 中使用 background-image 相对路径不生效
* Fix the use of background-image relative path in component inline style does not take effect
*  修复 组件 picker-view 无法正确选中
* Fix component picker-view cannot be selected correctly
*  修复 部分历史创建的uni-app项目在iOS平台真机运行报错的bug
* Fixed the bug that some historically created uni-app projects reported errors when running on real machines on the iOS platform
*  修复 模板 索引列表在微信小程序平台，滑动右侧索引导致整体界面跟随滑动的bug
* Fix the bug that the template index list is on the WeChat applet platform, and sliding the index on the right causes the overall interface to follow the sliding bug

#### 0.1.49.20180917
* 【重要】 新增 upx 作为响应式尺寸单位，px 变为传统的物理像素，历史项目升级参考 [教程](https://ask.dcloud.net.cn/article/35014)
* [Important] Added upx as a responsive size unit, px has become a traditional physical pixel, historical project upgrade reference [Tutorial](https://ask.dcloud.net.cn/article/35014)
* 新增 支持注册全局组件 [文档](https://uniapp.dcloud.io/use?id=%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6)
* Added support for registering global components [documentation](https://uniapp.dcloud.io/use?id=%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6)
* 新增 pages.json app-plus 支持pullToRefresh配置 [文档](https://uniapp.dcloud.io/collocation/pages?id=下拉刷新)
* Added pages.json app-plus supports pullToRefresh configuration [document](https://uniapp.dcloud.io/collocation/pages?id=%E4%B8%8B%E6%8B%89%E5%88%B7 %E6%96%B0)
* 优化 iOS平台 从UIWebview切换为WKWebview，提升页面图片渲染速度
* Optimize the iOS platform to switch from UIWebview to WKWebview to improve page image rendering speed
* 新增 小程序平台 分包预下载（hello uni-app示例为方便分包调整了目录结构）
* Added sub-package pre-download of Mini Program Platform (hello uni-app example adjusts the directory structure for the convenience of sub-package)
* 修复 css 变量 var(--status-bar-height) 部分情况不生效 
* Fix css variable var(--status-bar-height) not working in some cases
* 修复 组件嵌套 slot 无法传递 props
* Fix component nested slot cannot pass props
* 优化 组件 input 支持focus属性，自动弹出键盘（目前iOS部分版本仍有兼容问题）
* Optimize the component input to support the focus attribute and automatically pop up the keyboard (currently some versions of iOS still have compatibility issues)
* 优化 组件 input 支持confirm-type=search属性，键盘右下角显示为搜索样式
* Optimized component input to support confirm-type=search attribute, the lower right corner of the keyboard is displayed as search style
* 优化 组件 swiper 在iOS平台屏幕边缘的滑动体验
* Optimize the sliding experience of the component swiper on the edge of the screen on the iOS platform
* 修复 uni.openLocation无法调用系统导航的问题
* Fix the problem that uni.openLocation cannot call system navigation
* 修复 iOS setNavigationBarColor 改变frontColor时未修改状态栏颜色
* Fix iOS setNavigationBarColor does not modify status bar color when changing frontColor
* 修复 组件 picker-view value属性不生效的bug
* Fix the bug that the component picker-view value attribute does not take effect
* 修复 页面onLoad事件内立即执行reLaunch不生效的bug
* Fix the bug that executing reLaunch immediately in the onLoad event of the page does not take effect
* 优化 back逻辑，优先关闭当前显示的 loading 或 toast，再关闭页面
* Optimize the back logic, give priority to closing the currently displayed loading or toast, and then close the page
* hello uni-app 新增 input 示例新增自动弹出键盘、搜索框
* Added input example to hello uni-app Added automatic pop-up keyboard and search box
* hello uni-app 新增 侧滑导航示例
* hello uni-app added a side-swipe navigation example
* hello uni-app 新增 多列选择、联动选择示例（含城市选择）
* Added example of multi-column selection and linkage selection (including city selection) in hello uni-app
* hello uni-app 新增 自定义导航栏示例
* Added custom navigation bar example to hello uni-app
* hello uni-app 优化 导航栏示例中App原生按钮的写法和样式
* hello uni-app optimizes the writing and style of the native buttons of the App in the navigation bar example
* hello uni-app 新增 load more（加载更多）示例
* Added load more example to hello uni-app
* hello uni-app 新增 segment control（分段选择器）示例
* Added example of segment control (segment selector) in hello uni-app
* hello uni-app 新增 indexed-list（索引列表）示例
* hello uni-app added indexed-list (indexed list) example
* hello uni-app 新增 图片懒加载示例
* hello uni-app adds image lazy loading example
* hello uni-app 新增 手势图片锁屏示例
* hello uni-app added gesture picture lock screen example
* hello uni-app 新增 IM chat示例（感谢网友xcecd@qq.com）
* Added IM chat example to hello uni-app (thanks to netizen xcecd@qq.com)

#### 0.1.48.20180906-alpha
* 更新 mpvue 相关插件至最新
* Update mpvue related plugins to the latest
* 新增 小程序平台 分包加载，参考[pages.json配置说明](https://uniapp.dcloud.io/collocation/pages?id=subpackages)
* Added Mini Program Platform subpackage loading, refer to [pages.json configuration instructions](https://uniapp.dcloud.io/collocation/pages?id=subpackages)
* 新增 TypeScript 预编译器支持，实现了 <script lang="ts" src="xx.ts"></script> 引用方式的自动识别
* Added TypeScript precompiler support, implemented<script lang="ts" src="xx.ts"></script> Automatic identification of citations
* 新增 内置 autoprefixer ，自动处理css兼容性(iOS>=8,Android>=4)，修复iOS8上部分组件变形的问题
* Added built-in autoprefixer to automatically handle css compatibility (iOS>=8, Android>=4), and fix the problem of deformation of some components on iOS8
* 新增 App平台 二级页面支持单独取消原生导航栏，支持定义导航栏为透明渐变模式
* Added App platform secondary page support to cancel the native navigation bar separately, support to define the navigation bar as transparent gradient mode
* 新增 组件 picker-view，规范参考[picker-view](https://uniapp.dcloud.io/component/picker-view)
* Added component picker-view, specification reference [picker-view](https://uniapp.dcloud.io/component/picker-view)
* 修复 uni.switchTab跳转的bug，注意switchTab跳转后会关闭所有非tabbar页面。可用于初始页为欢迎页、登陆页，之后switchTab到业务首页的场景
* Fix the bug of jumping uni.switchTab, note that switchTab will close all non-tabbar pages after jumping. It can be used in scenarios where the initial page is a welcome page, a landing page, and then switchTab to the business home page
* 修复 uni.request 未返回 header 的问题
* Fix uni.request not returning header
* 修复 组件 textarea 有时无法输入汉字的问题
* Fix the problem that the component textarea sometimes cannot input Chinese characters
* 修复 组件 input 数字类型无法输入小数点的问题
* Fix the problem that the component input number type cannot input decimal point
* 修复 启动后立即切换tab，可能卡死的问题
* Fix the problem that the tab may be stuck when switching tabs immediately after startup
* hello uni-app 页面跳转 新增switchTab、reLaunch演示
* hello uni-app page jump Added switchTab, reLaunch demo
* hello uni-app 新增 EChart图标示例
* Added EChart icon example to hello uni-app
* hello uni-app 新增 可拖动九宫格示例
* Added draggable nine-square grid example in hello uni-app
* hello uni-app 新增 自定义导航栏（透明渐变、自定义按钮）示例
* Added custom navigation bar (transparent gradient, custom button) example to hello uni-app
* hello uni-app 优化 列表到详情模板 详情页改为透明渐变导航
* hello uni-app optimization list to details template details page changed to transparent gradient navigation
* hello uni-app 新增 图片、头像剪切示例（感谢网友杨大宝）
* Added pictures and avatar cutting examples in hello uni-app (thanks to netizen Yang Dabao)
* hello uni-app 新增 二维码生成示例（感谢网友诗小柒）
* Added QR code generation example to hello uni-app (thanks to netizen Shi Xiaoqi)
* 更多三方扩展，参考[https://ask.dcloud.net.cn/explore/category-12__is_recommend-1](https://ask.dcloud.net.cn/explore/category-12__is_recommend-1)
* For more tripartite expansion, refer to [https://ask.dcloud.net.cn/explore/category-12__is_recommend-1](https://ask.dcloud.net.cn/explore/category-12__is_recommend-1)
* 新增 应用模板：图片浏览App模板
* New application template: picture browsing App template
* 新增 应用模板：登录注册模板
* Added application template: login registration template
* 新增 [mpvue项目（组件）迁移指南、示例及资源汇总](https://ask.dcloud.net.cn/article/34945)
* Added [mpvue project (component) migration guide, examples and resource summary](https://ask.dcloud.net.cn/article/34945)

#### 0.1.47.20180823-alpha
* 修复 通过<style lang="less"></style>方式使用less、scss、stylus预编译语言开发，云端打包时编译报错的问题
* Repair passed<style lang="less"></style> The method uses less, scss, and stylus precompiled languages to develop, and compile errors when packaging in the cloud

#### 0.1.47.20180821-alpha
* 新增 支持vue里通过<style lang="less"></style>方式使用less、scss、stylus这3种预编译语言。需先在HBuilderX插件安装中安装对应编译插件
* Added support for passing in vue<style lang="less"></style> The method uses three precompiled languages: less, scss, and stylus. You need to install the corresponding compilation plug-in in the HBuilderX plug-in installation first.
* 新增 pages.json 中 globalStyle, style 节点支持分平台配置，可在App侧单独定义titleNView。[参考pages.json说明](https://uniapp.dcloud.io/collocation/pages?id=app-plus)
* Added globalStyle, style nodes in pages.json to support sub-platform configuration, and titleNView can be defined separately on the App side. [Refer to pages.json description](https://uniapp.dcloud.io/collocation/pages?id=app-plus)
* 新增 App中监听原生Title的按钮点击事件onNavigationBarButtonTap
* Added button click event onNavigationBarButtonTap that listens for native Title in App
* 优化 编译的错误日志提示语
* Optimized compiled error log prompts
* 补充 启动时指定关闭Splash的延时时间
* Supplement: Specify the delay time for turning off Splash at startup
* 新增 uni.canvasToTempFilePath，可把canvas区域保存为图片
* Added uni.canvasToTempFilePath to save the canvas area as a picture
* 支持 iPhone X 安全区域配置（默认：App 包含 tabBar 时，自动启用底部安全区域，背景色为 tabBar 背景色，无 tabBar 时，不启用安全区域。也可在App侧参考5+的manifest规范配置）
* Support iPhone X safe area configuration (default: when the App contains tabBar, the bottom safe area is automatically enabled, and the background color is the tabBar background color. When there is no tabBar, the safe area is not enabled. You can also refer to the 5+ manifest specification configuration on the App side)
* 修复 非首页配置 navigationBarTextStyle 不生效
* Fix non-homepage configuration navigationBarTextStyle does not take effect
* 修复 组件 video show-play-center-btn 不生效
* Fix component video show-play-center-btn not working
* 修复 组件 input 标签属性 value="" 导致运行时显示为 true
* Fix component input tag attribute value="" causes it to display true at runtime
* 修复 组件 input 类型为 number 时输入报错
* Fix input error when component input type is number
* 修复 组件 input 在 iOS 平台焦点错乱，快速输入异常，删除时光标错乱
* Fix the focus of the component input on the iOS platform is disordered, the quick input is abnormal, and the cursor is disordered when deleting
* 修复 组件 input 数字类型输入非法字符时 placeholder 不消失
* Fix the placeholder does not disappear when illegal characters are entered in the input numeric type of the component
* 修复 组件 map 的 translateMarker 方法不生效
* Fix the translateMarker method of component map does not take effect
* 修复 uni.navigateBack delta 参数不生效
* Fixed uni.navigateBack delta parameter not taking effect
* 修复 uni.getSystemInfo/uni.getSystemInfoSync 返回 platform 不正确
* Fixed uni.getSystemInfo/uni.getSystemInfoSync returning incorrect platform
* 修复 uni.reLaunch 参数丢失
* Fix uni.reLaunch parameter missing
* 修复 onLoad 事件内立刻调用 uni.startPullDownRefresh 不生效
* Fixed calling uni.startPullDownRefresh immediately in the onLoad event does not take effect
* 修复 App 生命周期 onShow,onHide 在 app 切换到前台、后台不触发的问题
* Fix the problem that onShow and onHide in the app life cycle are not triggered when the app switches to the foreground and background
* 新增 新项目模板默认添加 mp-weixin->appid 节点
* Added mp-weixin->appid node by default in new project template
* hello uni-app：支持app端首页单独设置原生导航栏，并在右上角增加关于介绍按钮
* hello uni-app: support to set the native navigation bar separately on the home page of the app, and add an about introduction button in the upper right corner
* hello uni-app：新增 接口 媒体 文件示例
* hello uni-app: Added interface media file example
* hello uni-app：新增 模板 markdown渲染富文本（用于图文新闻、资讯、笔记快速渲染）
* hello uni-app: Added template markdown to render rich text (for fast rendering of graphic news, information, and notes)
* hello uni-app：新增 模板 问题反馈
* hello uni-app: add template feedback

#### 0.1.46.20180810-alpha
* 修复 Android4.4、5.0的兼容问题
* Fix Android4.4, 5.0 compatibility issues
* 修复 不支持iOS模拟器的问题
* Fix the issue that iOS simulator is not supported
* 优化 iOS上的运行性能，尤其是示例中模板tab示例的卡顿
* Optimize the running performance on iOS, especially the freeze of the template tab example in the example
* 升级 mpvue至1.0.13
* Upgrade mpvue to 1.0.13
* 修复 uniapp的appid为空时真机运行白屏的问题
* Fix the problem that the real machine runs a white screen when the appid of uniapp is empty
* 优化 部分手机上splash关闭过早造成白屏的问题
* Optimized the white screen problem caused by premature shutdown of splash on some mobile phones
* 新增 css变量var(—status-bar-height)，微信小程序固定为25px，App环境为真实状态栏高度，[详见](https://uniapp.dcloud.io/frame?id=css%E5%8F%98%E9%87%8F)
* Added css variable var(—status-bar-height), the WeChat applet is fixed to 25px, and the App environment is the real status bar height, [see details](https://uniapp.dcloud.io/frame?id=css %E5%8F%98%E9%87%8F)
* 修复 pages.json修改page的style不编译的问题
* Fix the problem that the style of pages.json modified page does not compile
* 优化 video组件从HTML5 video改为原生video
* Optimize the video component from HTML5 video to native video
* 修复 解决大部分情况下，页面data数据未重置导致的页面显示旧数据
* Fix to solve the problem that in most cases, the page data data is not reset and the page displays the old data
* 修复 reLaunch每次都会出现启动splash的问题
* Fix the problem that reLaunch will start splash every time
* 更新 对接最新的5+分享接口，支持小程序分享
* Update Connect to the latest 5+ sharing interface, support applet sharing
* 修复 禁用 .babelrc 对编译器的影响
* Fix disabling .babelrc effect on compiler
* 更新 扫码支持 onlyFromCamera、scanType 参数
* Update scan code to support onlyFromCamera, scanType parameters
* 修复 有时运行到微信模拟器未生成project.config.json的问题
* Fixed the problem that sometimes running to WeChat simulator did not generate project.config.json
* 优化 previewImage
* Optimize previewImage
* 优化 dns.js(localhost)报错提示
* Optimized dns.js(localhost) error message
* 更新 调整App运行时的userAgent
* Update adjust userAgent when App is running
* 更新 调整 input 组件数字输入，身份证输入，带小数点的数字键盘对应的类型
* Update and adjust the input component number input, ID card input, the type corresponding to the number keyboard with decimal point
* hello uni-app：新增商品列表模板
* hello uni-app: Added product list template

#### 0.1.45.20180728-alpha
* 【重要】新增uni-app，使用vue技术，开发一次，iOS、Android、微信小程序三端同时生成。[详见](https://uniapp.dcloud.io/)
* [Important] Add uni-app, use vue technology, develop once, and generate iOS, Android, WeChat applet at the same time. [See details](https://uniapp.dcloud.io/)
* 【重要】调整uniapp策略，之前的原生渲染uniapp改为nml项目[详见](https://ask.dcloud.net.cn/article/13507)
* [Important] Adjust the uniapp strategy, the previous native rendering uniapp is changed to nml project [see details](https://ask.dcloud.net.cn/article/13507)
*  uni-app：新增条件编译，采用类似 //#ifdef APP-PLUS 的写法做平台条件编译，代码块名为ifdef，还可双击ifdef选中整体代码段落。[详见](https://uniapp.dcloud.io/platform)
* uni-app: Conditional compilation is added, which uses a writing method similar to //#ifdef APP-PLUS for platform conditional compilation. The code block is named ifdef, and you can double-click ifdef to select the entire code paragraph. [See details](https://uniapp.dcloud.io/platform)

<md-virtual key="release"/>