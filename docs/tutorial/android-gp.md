
#### 务必确保将HBulider X升级到`3.2.15+`版本。离线打包需要将离线打包SDK升级到`3.2.15+`版本
#### Make sure to upgrade HBulider X to version `3.2.15+`. Offline packaging requires upgrading the offline packaging SDK to version `3.2.15+`

App提交云端打包时请务必勾选“GooglePlay(AAB)”渠道
When submitting an app for cloud packaging, be sure to check the "GooglePlay(AAB)" channel

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/app/android/googleplay/channel.png)

Google Play上架审核要求比较严格，应用中不能存在以下行为：
The Google Play listing review requirements are strict, and the following behaviors cannot exist in the application:
- 不能直接下载apk方式安装应用，需引导用户到Google Play安装
- You cannot directly download the apk to install the app, you need to guide the user to Google Play to install it
- 不能存在动态加载代码行为
- No dynamic loading code behavior

uni-app中部分功能模块不符合Google Play审核要求，请仔细阅读下面章节。
Some functional modules in uni-app do not meet the Google Play review requirements, please read the following sections carefully.

### 必须适配Android11
### Must be compatible with Android11

“App常用其它设置”中需要将targetSdkVersion设置值大于等于30
The targetSdkVersion needs to be set to a value greater than or equal to 30 in "App common other settings"

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/app/android/googleplay/targetsdkversion.png)

**注意：务必在Android11设备上进行测试，确保应用所有功能可以正常运行**
**Note: Be sure to test on an Android 11 device to make sure that all the features of the app work properly**


### 不能包含安装应用权限
### Cannot include install app permissions
在App权限配置中不要勾选 android.permission.INSTALL_PACKAGES、android.permission.REQUEST_INSTALL_PACKAGES 权限
Do not check android.permission.INSTALL_PACKAGES, android.permission.REQUEST_INSTALL_PACKAGES permissions in App permission configuration

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/app/android/googleplay/permission-install.png)

#### 离线打包:
#### Offline packaging:

1. 更新SDK3.2.15+版本
1. Update SDK3.2.15+ version

2. 请查看原生项目中的AndroidManifest.xml。如果包含以下权限请手动删除：
2. Please check the AndroidManifest.xml in the native project. If it contains the following permissions, please delete it manually:

```html
<uses-permission android:name="android.permission.INSTALL_PACKAGES" />
<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
```

**注意：如果使用了uni原生插件，可能会添加安装应用权限，请联系uni原生插件作者确认**
**Note: If the uni native plugin is used, the permission to install the application may be added, please contact the author of the uni native plugin to confirm**

### 不要使用QQ登录、QQ分享模块
### Do not use QQ login, QQ sharing module
使用QQ登录、分享功能时，如果当前设备上没有安装QQ应用时，会引导用户下载安装，不符合Google Play的审核要求，因此提交到Google Play时不要勾选QQ登录及QQ分享模块
When using the QQ login and sharing function, if the QQ application is not installed on the current device, the user will be guided to download and install it, which does not meet the review requirements of Google Play. Therefore, do not check the QQ login and QQ sharing modules when submitting to Google Play.

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/app/android/googleplay/qq.png)

#### 离线打包:
#### Offline packaging:

请不要集成qq_mta-sdk-xxx.jar，qq_sdk_vxxx.jar等SDK。如果有请删除
Please do not integrate SDKs such as qq_mta-sdk-xxx.jar, qq_sdk_vxxx.jar, etc. If there is, please delete

### 不要使用国内增强广告SDK
### Do not use the domestic enhanced advertising SDK
uni-AD国内增强广告（如穿山甲、广点通、快手等SDK）显示的广告落地页可能会引导用户下载安装apk，不符合Google Play的审核要求，因此提交到Google Play时不要勾选增强广告SDK
The landing page of the uni-AD domestic enhanced advertisement (such as pangolin, Guangdiantong, Kuaishou, etc. SDK) may guide users to download and install the apk, which does not meet the review requirements of Google Play, so do not check the enhanced advertisement when submitting to Google Play SDK

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/app/android/googleplay/ad.png)

**注意：uni-AD 广告基础功能不受影响**
**Note: uni-AD advertising basic functionality is not affected**

#### 离线打包:
#### Offline packaging:

请不要集成国内增强广告相关依赖库 ks_adsdk-ad.aar、windAd.aar、GDTSDK.unionNormal.aar,open_ad_sdk.aar,torch-adcore-xx.aar。如有请删除
Please do not integrate the domestic enhanced advertising related dependency libraries ks_adsdk-ad.aar, windAd.aar, GDTSDK.unionNormal.aar, open_ad_sdk.aar, torch-adcore-xx.aar. Please delete if so

### 不要使用X5内核
### Don't use X5 kernel
腾讯TBS（X5）内核在Android平台解决了很多适配问题（详情可参考：[https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/36806)），但它使用了动态热更新技术，不符合Google Play的审核要求，因此提交Google Play时不要勾选使用“Android X5 Webview(腾讯TBS)”模块
Tencent TBS (X5) kernel solves many adaptation problems on the Android platform (for details, please refer to: [https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/ article/36806)), but it uses dynamic hot update technology and does not meet the review requirements of Google Play, so do not check the "Android X5 Webview (Tencent TBS)" module when submitting to Google Play

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/app/android/googleplay/x5.png)

#### 离线打包:
#### Offline packaging:

请不要集成X5相依赖库webview-x5-release.aar，如有请删除
Please do not integrate the X5 dependent library webview-x5-release.aar, if so, please delete

### 其它相关问题
### Other related questions
- Android App Bundle(AAB)格式相关说明：[https://ask.dcloud.net.cn/article/39052](https://ask.dcloud.net.cn/article/39052)
- Description of Android App Bundle (AAB) format: [https://ask.dcloud.net.cn/article/39052](https://ask.dcloud.net.cn/article/39052)