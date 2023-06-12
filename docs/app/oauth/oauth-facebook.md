### 开通条件
1.海外网络环境
2.Facebook账号([Facebook登录页面](http://www.facebook.com))

### 创建应用

1.打开[Facebook开发者中心](http://developers.facebook.com/)

2.点击右上角"我的应用"

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-myApplication.png)

3.进入应用管理界面，点击"创建应用"

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-createApplication.png)


4.根据需要选择应用产品的类型(应用类型详见"详细了解应用类型")，然后点击继续

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-chooseApplicationType.png)


5.填写应用信息

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-fillInAppInfo.png)


6.创建完成后即可获取应用的应用编号(即appID)

7.为应用添加登录功能

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-addProduct.png)



### 设置登录-iOS
1.我的应用--设置--基本，选择添加平台，选择iOS

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-ios-addPlatform.png)


2.填写信息保存即可 

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-ios-saveInfo.png)



### 设置登录-Android

我的应用--设置--基本，选择添加平台

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-android-addPlatform.png)


选择android平台，应用商店选择Google Play

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-android-appstore.png)


填写必要的包名和散列信息，类名是固定的。如图

散列的获取方法，参考文档：
https://developers.facebook.com/docs/facebook-login/android  第六小节

如果获取到的散列位数不对，需要找台linux/mac 计算机。
使用下面的命令获取
keytool -exportcert -alias hbuilder -keystore ./HBuilder.keystore | openssl dgst -sha1 -binary | openssl base64

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-android-saveInfo.png)



### 应用权限
使用Facebook登录需开启"public_profile"以及"email"的访问权限
点击"应用审核"-"权限和功能"，开启"public_profile"以及"email"的高级访问权限

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-permission.png)





