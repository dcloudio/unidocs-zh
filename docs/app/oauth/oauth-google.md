###   前置条件
###   precondition

1  海外网络环境
1 Overseas network environment
2  Google账号
2 Google account

###   Android开通步骤
### Android activation steps

2.1 打开Google 登录引导页
2.1 Open the Google login guide page
网址： https://developers.google.com/identity/sign-in/android/sign-in?hl=zh-cn
URL: https://developers.google.com/identity/sign-in/android/sign-in?hl=en-us

2.2 选择项目配置
2.2 Select project configuration

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-google-android-apiConfig.png)

点击后出现项目与应用选择界面，
After clicking, the project and application selection interface will appear.
如果你有已创建过的Firebase项目，可以直接选择。
If you have a Firebase project already created, you can choose it directly.
如果没有，可以选择新建一个Google Api 项目。
If not, you can choose to create a new Google Api project.

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-google-android-configureProject.png)

选择项目后，在该项目下新建一个应用
After selecting the project, create a new application under the project
选择应用平台  android
Select application platform android

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-google-android-appType.png)


需要填写应用的包名和sha1指纹
You need to fill in the package name and sha1 fingerprint of the application
指纹的获取方法在界面上有提示。按照提示操作即可。
There are hints on the interface for how to obtain fingerprints. Just follow the prompts.

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-google-android-createApp.png)

点击创建，即可完成开通步骤。
Click Create to complete the activation steps.

###   iOS开通步骤
### iOS activation steps

3.1 打开[Google登录iOS引导页](http://developers.google.com/identity/sign-in/ios/start-integrating?hl=zh-cn)
3.1 Open the [Google Sign in iOS Guide Page](http://developers.google.com/identity/sign-in/ios/start-integrating?hl=zh-cn)

3.2 点击创建OAuth客户端ID，填写项目名称
3.2 Click Create OAuth Client ID and fill in the project name

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-google-ios-config.png)

3.3 选择iOS平台、填写BundleID后，点击CREATE，即可获取Client ID
3.3 Select the iOS platform, fill in the BundleID, and click CREATE to get the Client ID

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-google-ios-create.png)