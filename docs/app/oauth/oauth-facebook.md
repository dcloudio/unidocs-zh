### 开通条件
### Activation conditions
1. 海外网络环境
1. Overseas network environment
2. Facebook账号([Facebook登录页面](http://www.facebook.com))
2. Facebook account ([Facebook login page](http://www.facebook.com))

### 创建应用
### Create application

1. 打开[Facebook开发者中心](http://developers.facebook.com/)
1. Open [Facebook Developer Center](http://developers.facebook.com/)

2. 点击右上角"我的应用"
2. Click "My Apps" in the upper right corner

![](https://web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-myApplication.png)

3. 进入应用管理界面，点击"创建应用"
3. Enter the application management interface and click "Create Application"

![](https://web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-createApplication.png)


4. 根据需要选择应用产品的类型(应用类型详见"详细了解应用类型")，然后点击继续
4. Select the type of application product according to your needs (for application type, please refer to "Learn more about application type"), and then click Continue

![](https://web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-chooseApplicationType.png)


5. 填写应用信息
5. Fill in the application information

![](https://web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-fillInAppInfo.png)


6. 创建完成后即可获取应用的应用编号(即appID)
6. After the creation is completed, the application number (ie appID) of the application can be obtained

7. 为应用添加登录功能
7. Add login functionality to the app

![](https://web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-addProduct.png)



### 设置登录-iOS
### Setup Login - iOS
1. 我的应用--设置--基本，选择添加平台，选择iOS
1. My app--Settings--Basic, select Add platform, select iOS

![](https://web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-ios-addPlatform.png)


2. 填写信息保存即可 
2. Fill in the information and save it

![](https://web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-ios-saveInfo.png)



### 设置登录-Android
### Setup Login - Android

我的应用--设置--基本，选择添加平台
My application - settings - basic, select add platform

![](https://web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-android-addPlatform.png)


选择android平台，应用商店选择Google Play
Select the android platform, and the app store select Google Play

![](https://web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-android-appstore.png)


填写必要的包名和散列信息，类名是固定的。如图
Fill in the necessary package name and hash information, the class name is fixed. As shown

散列的获取方法，参考文档：
How to get the hash, refer to the documentation:
https://developers.facebook.com/docs/facebook-login/android  第六小节
https://developers.facebook.com/docs/facebook-login/android Section 6

如果获取到的散列位数不对，需要找台linux/mac 计算机。
If the obtained hash digits are wrong, you need to find a linux/mac computer.
使用下面的命令获取
keytool -exportcert -alias hbuilder -keystore ./HBuilder.keystore | openssl dgst -sha1 -binary | openssl base64

![](https://web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-android-saveInfo.png)



### 应用权限
### App permissions
使用Facebook登录需开启"public_profile"以及"email"的访问权限
Login with Facebook requires access to "public_profile" and "email"
点击"应用审核"-"权限和功能"，开启"public_profile"以及"email"的高级访问权限
Click "App Review" - "Permissions and Features" to enable advanced access to "public_profile" and "email"

![](https://web-assets.dcloud.net.cn/unidoc/zh/oauth-fb-permission.png)





