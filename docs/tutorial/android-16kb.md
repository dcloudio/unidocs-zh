## 概述  

16K，是指C语言等可操作内存的语言使用内存的规范，对齐16K可以提升C代码的运行性能。只有so库涉及。如果使用js、java，不涉及16K问题。

随着设备制造商为设备配备更多 RAM 以优化性能，许多制造商将采用更大的页面大小（例如 16 KB）。为了迎接这些即将推出的设备，Google Play 推出了一项新的兼容性要求：  
自 2025 年 11 月 1 日起，提交到 Google Play 且以 Android15（API 级别 35）及更高版本的设备为目标平台的所有新应用和现有应用更新都必须支持 16KB 的页面大小。  
如需详细了解此兼容性要求，请参阅[Google官方博文](https://android-developers.googleblog.com/2025/05/prepare-play-apps-for-devices-with-16kb-page-size.html)。

> HBuilderX4.81版本，uni-app官方库已适配支持 16KB 内存页面大小

**注意**  ：
Android17+，默认会开启16KB兼容性检测，如果应用中包含未适配支持 16KB 的 so 库，在启动时会弹出 `Android 应用兼容性` 提示框。  
提示内容为：“此应用不符合 16KB 对齐要求。ELF文件对齐检查失败。”虽然这个列表中也会出现 DCloud的自有so库，但其实是因为三方sdk不支持16KB导致打包时被降级了。如去掉不支持16KB的三方sdk再打包，可以正常通过16K校验。切勿在这个弹框中看到有DCloud字样的so库，就误以为uni-app未适配16K。

::: warning 注意事项

uni-app 核心功能模块为了适配支持 16KB 内存页面大小，更新了部分依赖库（如Fresco3.4.0），最低支持的版本由 Android4.4（API 等级19） 调整为 Android5（API 等级21）。  
也就是说升级HBuilderX4.81及以上版本后，生成的安装包将无法安装到 Android5 以下的设备，如果还需兼容 Android4.4 版本请继续使用 HBuilderX4.76 版本。  

:::


## 不支持 16KB 的模块  
虽然 uni-app 核心功能模块已适配支持 16KB 内存页面大小，但部分涉及三方 SDK 的模块仍未完全适配支持。  

以下列出三方sdk清单，开发者可根据需要，去除这些sdk再打包。有些三方sdk已经不再维护，开发者可在插件市场寻求替代方案或自行使用uni-agent开发相关插件。

### [uni-ad](https://uniapp.dcloud.net.cn/uni-ad/)
`uni-ad`使用国内广告渠道SDK 仅支持国内环境，建议应用用于提交 Google Play 时不要使用国内渠道 SDK。  

涉及的so库文件列表：
- libwmAliAgainstId.so（旺脉）
- libsgcore.so（快手）
- libttmplayer_lite.so、libavmdl_lite.so（穿山甲）

`uni-ad`国际广告从HBuilderX4.83版本起已适配16KB。


### [uni-push](../api/plugins/push.md)
`uni-push`是由 DCloud 与合作伙伴个推共同推出的统一推送服务，在国内环境下，该服务依赖`卓信ID SDK`，但该 SDK 目前未适配支持 16KB 内存页面大小。  
为满足 Google Play 的要求，应用在提交至 Google Play 时需避免使用`卓信ID SDK`。按以下方式配置，使用`uni-push`时将不会包含`卓信ID SDK`：  
1. 项目manifest.json可视化界面，在 “安卓/iOS模块配置” 下的 “Push（消息推送）” -> “离线推送” 中只勾选 “Google FCM推送SDK”  
2. 云端打包界面，在 “渠道包” 下勾选 “Google Play(AAB)”  

涉及的so库文件列表：
- libzxprotect.so


### [uni实人认证](../api/plugins/facialRecognitionVerify.md)  
`uni实人认证`功能仅支持国内环境，建议应用用于提交 Google Play 时不要使用此功能。

涉及的so库文件列表：
- libaliyunaf.so  
- libfacedevice.so  


### 友盟统计
友盟统计模块使用的SDK 版本为 `9.4.4`，目前无计划更新此 SDK 版本，建议应用用于提交 Google Play 时不要使用此功能。  
如确实需要使用，请开发[uni原生语言插件](../plugin/native-plugin.md)或[uts插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)接入支持。  

涉及的so库文件列表：
- libcrashsdk.so  
- libucrash-core.so  


### OAID

OAID目前使用的 SDK 版本为 `1.0.25`或`1.0.13`，更高版本需要申请证书，暂时无计划更新。云端打包时选择 `GooglePlay(AAB)` 渠道包时不包含 OAID SDK。

其它渠道提交云端打包默认会包含 OAID SDK，可以在 `manifest.json` 的 "app-plus"->"distribute"->"android" 下配置 "enableOAID" 为 false 强制不包含。

离线打包时默认包含此SDK，如果需要上架 Google Play，可以直接删除库`base_oaid_sdk.aar`和`base_old_oaid_13.aar`。

涉及的so库文件列表：  
- lib39285EFA.so
- libsecsdk.so


## 高德地图  
HBuilderX5.0及以上版本更新 GooglePlay 渠道使用的高德地图 SDK 版本为 `11.1.060`，解决适配支持 16KB 页面大小。  

HBuilderX5.0以下版本高德地图模块在国内渠道使用的SDK 版本为 `10.0.700`，请更新HBuilderX到最新版本解决。  

涉及的so库文件列表：  
- libAMapSDK_MAP_v10_0_700.so  



