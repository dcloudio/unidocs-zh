## Google Play上架注意事项

首先App提交云端打包时请务必勾选“GooglePlay(AAB)”渠道

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/uni-app/doc/app/android/googleplay/channel.png)

Google Play上架审核要求比较严格，应用中不能存在以下行为：
- 不能直接下载apk方式安装应用，需引导用户到Google Play安装
- 不能存在动态加载代码行为

uni-app中部分功能模块不符合Google Play审核要求，需注意使用。

### 必须适配Android11
“App常用其它设置”中需要将targetSdkVersion设置值大于等于30

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/uni-app/doc/app/android/googleplay/targetsdkversion.png)

**注意：务必在Android11设备上进行测试，确保应用所有功能可以正常运行**


### 不能包含安装应用权限
在App权限配置中不要勾选 android.permission.INSTALL_PACKAGES、android.permission.REQUEST_INSTALL_PACKAGES 权限

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/uni-app/doc/app/android/googleplay/permission-install.png)

#### 离线打包:

请查看原生项目中的AndroidManifest.xml。如果包含以下权限请手动删除：

```
<uses-permission android:name="android.permission.INSTALL_PACKAGES" />
<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
```

**注意：如果使用了uni原生插件，可能会添加安装应用权限，请联系uni原生插件作者确认**

### 不要使用QQ登录、QQ分享模块
使用QQ登录、分享功能时，如果当前设备上没有安装QQ应用时，会引导用户下载安装，不符合Google Play的审核要求，因此提交到Google Play时不要勾选QQ登录及QQ分享模块

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/uni-app/doc/app/android/googleplay/qq.png)

#### 离线打包:

请不要集成qq_mta-sdk-xxx.jar，qq_sdk_vxxx.jar等SDK。如果有请删除

### 不要使用国内增强广告SDK
uni-AD国内增强广告（如穿山甲、广点通、快手等SDK）显示的广告落地页可能会引导用户下载安装apk，不符合Google Play的审核要求，因此提交到Google Play时不要勾选增强广告SDK

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/uni-app/doc/app/android/googleplay/ad.png)

**注意：uni-AD 广告基础功能不受影响**

#### 离线打包:

请不要集成国内增强广告相关依赖库 ks_adsdk-ad.aar、windAd.aar、GDTSDK.unionNormal.aar,open_ad_sdk.aar,torch-adcore-xx.aar。如有请删除

### 不要使用X5内核
腾讯TBS（X5）内核在Android平台解决了很多适配问题（详情可参考：[https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/36806)），但它使用了动态热更新技术，不符合Google Play的审核要求，因此提交Google Play时不要勾选使用“Android X5 Webview(腾讯TBS)”模块

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/uni-app/doc/app/android/googleplay/x5.png)

#### 离线打包:

请不要集成X5相依赖库webview-x5-release.aar，如有请删除

## 其它相关问题
- Android App Bundle(AAB)格式相关说明：[https://ask.dcloud.net.cn/article/39052](https://ask.dcloud.net.cn/article/39052)