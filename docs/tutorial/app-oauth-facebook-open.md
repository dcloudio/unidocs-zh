#### 准备条件  
#### Preparation conditions
- 可访问Facebook服务器  
- Access to Facebook servers
注意：中国境内可能无法访问Fackbook服务器
Note: Facebook servers may not be accessible within China
- 注册Facebook账号，登录[Facebook](http://www.facebook.com)
- Register a Facebook account and log in to [Facebook](http://www.facebook.com)


#### 创建应用
#### Create application
* 打开[Facebook开发者中心](http://developers.facebook.com/)
* Open [Facebook Developer Center](http://developers.facebook.com/)
* 点击右上角"我的应用"
* Click "My Apps" in the upper right corner
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/9e3ba994-95b0-46d6-9e40-0c18b9fac5d3.png)

* 进入应用管理界面，点击"创建应用"
* Enter the application management interface, click "Create Application"
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/0d96a58b-e31d-4f86-9372-dd84249a498b.png)


* 根据需要选择应用产品的类型(应用类型详见"详细了解应用类型")，然后点击继续
* Select the type of application product as needed (for application type, see "Learn more about application type"), then click Continue
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a940cfc2-8e8c-44cf-9334-56cb282d4f52.png)


* 填写应用信息
* Fill in the application information
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/57f5f5c0-27ca-4aa7-9e68-fb051c8afccb.png)


* 创建完成后即可获取应用的应用编号(即appID)
* After the creation is completed, the application number (ie appID) of the application can be obtained

* 为应用添加登录功能
* Add login function to the app

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/4e7ad147-e4ce-40eb-a1b0-2381bdc53813.png)



#### 设置登录-iOS
#### Setup Login - iOS
* 我的应用--设置--基本，选择添加平台，选择iOS
* My app--Settings--Basic, select Add platform, select iOS
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/cebc70d2-da0e-4708-9d05-d5f5d80de1ca.png)


* 填写信息保存即可 
* Fill in the information and save it
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/70038074-8c3a-4db8-99ab-49e14b951c79.png)



#### 设置登录-Android
#### Setup Login - Android

* 我的应用--设置--基本，选择添加平台
* My application--Settings--Basic, select Add platform
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a8fe2779-1142-452b-a4b0-f4bd61695770.png)


* 选择android平台，应用商店选择Google Play
* Select the android platform, and the app store select Google Play
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/afa346b7-a001-47b1-9c7e-914074153ac3.png)


* 填写必要的包名和散列信息，类名是固定的。如图
* Fill in the necessary package name and hash information, the class name is fixed. As shown
散列的获取方法，参考文档：
How to get the hash, refer to the documentation:
https://developers.facebook.com/docs/facebook-login/android  第六小节
https://developers.facebook.com/docs/facebook-login/android Section 6
如果获取到的散列位数不对，需要找台linux/mac 计算机。
If the obtained hash digits are wrong, you need to find a linux/mac computer.
使用下面的命令获取
keytool -exportcert -alias hbuilder -keystore ./HBuilder.keystore | openssl dgst -sha1 -binary | openssl base64
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/4c59adf0-cb40-41d7-95d4-e26102aeacd9.png)



#### 应用权限
#### App permissions
使用Facebook登录需开启"public_profile"以及"email"的访问权限
Login with Facebook requires access to "public_profile" and "email"
点击"应用审核"-"权限和功能"，开启"public_profile"以及"email"的高级访问权限
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/28dac1d2-f714-4477-a5c8-dd2e1b894894.png)

