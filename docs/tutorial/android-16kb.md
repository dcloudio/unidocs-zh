## 概述  
随着设备制造商为设备配备更多 RAM 以优化性能，许多制造商将采用更大的页面大小（例如 16 KB）。为了迎接这些即将推出的设备，Google Play 推出了一项新的兼容性要求：  
自 2025 年 11 月 1 日起，提交到 Google Play 且以 Android15（API 级别 35）及更高版本的设备为目标平台的所有新应用和现有应用更新都必须支持 16KB 的页面大小。  
如需详细了解此兼容性要求，请参阅[Google官方博文](https://android-developers.googleblog.com/2025/05/prepare-play-apps-for-devices-with-16kb-page-size.html)。

> HBuilderX4.81版本已适配支持 16KB 内存页面大小

::: warning 注意事项

uni-app 核心功能模块为了适配支持 16KB 内存页面大小，更新了部分依赖库（如Fresco3.4.0），最低支持的版本由 Android4.4（API 等级19） 调整为 Android5（API 等级21）。  
也就是说升级HBuilderX4.81及以上版本后，生成的安装包将无法安装到 Android5 以下的设备，如果还需兼容 Android4.4 版本请继续使用 HBuilderX4.76 版本。  

:::

## 不支持 16KB 的模块  
虽然 uni-app 核心功能模块已适配支持 16KB 内存页面大小，但部分涉及三方 SDK 的模块仍未完全适配支持。  

### [uni-ad](https://uniapp.dcloud.net.cn/uni-ad/)
`uni-ad`使用国内广告渠道SDK 仅支持国内环境，建议应用用于提交 Google Play 时不要使用国内渠道 SDK。  

涉及的so库文件列表：
- libplt-base.so
- libsgcore.so
- libti-monitor.so


国外广告 `applovin`、`pangle(海外穿山甲)` 广告渠道SDK 未适配支持 16KB 内存页面大小，需等待官方升级相关SDK版本解决。  
如果应用用于提交 Google Play 时不要包含这些SDK。  

涉及的so库文件列表：
- libapplovin-native-crash-report.so
- libnms.so
- libpglarmor.so
- libtobEmbedPageEncrypt.so


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

OAID目前使用的 SDK 版本为 `1.0.25`或`1.0.13`，更高版本需要申请证书，暂时无计划更新。此功能在生成 Google Play 渠道包时默认不包含。

离线打包时默认包含此SDK，如果需要上架 Google Play，可以直接删除库`msa_mdid_1.0.13.aar`和`oaid_sdk_1.0.25.aar`。

涉及的so库文件列表：  
- libsecsdk.so
- lib39285EFA.so

## 高德地图  
高德地图模块在国内渠道使用的SDK 版本为 `10.0.700`，Google Play 渠道使用单独版本，详情参考下面章节说明

涉及的so库文件列表：  
- libAMapSDK_MAP_v10_0_700.so  


## Google Play渠道包专属模块  

### [高德地图](../component/map.md)  
云端打包界面时在 “渠道包” 下勾选 “Google Play(AAB)”，使用的是高德地图 SDK 版本为 `6.9.3`，没有使用so库，不涉及16KB 内存页面大小问题。  


使用高德地图SDK的API：
- [uni.createMapContext](../api/location/map.md#createmapcontext)
- [uni.chooseLocation](../api/location/location.md#chooselocation)




