#### 准备条件  
- 可访问Facebook服务器  
注意：中国境内可能无法访问Fackbook服务器
- 注册Facebook账号，登录[Facebook](http://www.facebook.com)


#### 创建应用
* 打开[Facebook开发者中心](http://developers.facebook.com/)
* 点击右上角"我的应用"
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/9e3ba994-95b0-46d6-9e40-0c18b9fac5d3.png)

* 进入应用管理界面，点击"创建应用"
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/0d96a58b-e31d-4f86-9372-dd84249a498b.png)


* 根据需要选择应用产品的类型(应用类型详见"详细了解应用类型")，然后点击继续
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a940cfc2-8e8c-44cf-9334-56cb282d4f52.png)


* 填写应用信息
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/57f5f5c0-27ca-4aa7-9e68-fb051c8afccb.png)


* 创建完成后即可获取应用的应用编号(即appID)

* 为应用添加登录功能

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/4e7ad147-e4ce-40eb-a1b0-2381bdc53813.png)



#### 设置登录-iOS
* 我的应用--设置--基本，选择添加平台，选择iOS
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/cebc70d2-da0e-4708-9d05-d5f5d80de1ca.png)


* 填写信息保存即可 
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/70038074-8c3a-4db8-99ab-49e14b951c79.png)



#### 设置登录-Android

* 我的应用--设置--基本，选择添加平台
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a8fe2779-1142-452b-a4b0-f4bd61695770.png)


* 选择android平台，应用商店选择Google Play
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/afa346b7-a001-47b1-9c7e-914074153ac3.png)


* 填写必要的包名和散列信息，类名是固定的。如图
散列的获取方法，参考文档：
https://developers.facebook.com/docs/facebook-login/android  第六小节
如果获取到的散列位数不对，需要找台linux/mac 计算机。
使用下面的命令获取
keytool -exportcert -alias hbuilder -keystore ./HBuilder.keystore | openssl dgst -sha1 -binary | openssl base64
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/4c59adf0-cb40-41d7-95d4-e26102aeacd9.png)



#### 应用权限
使用Facebook登录需开启"public_profile"以及"email"的访问权限
点击"应用审核"-"权限和功能"，开启"public_profile"以及"email"的高级访问权限
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/28dac1d2-f714-4477-a5c8-dd2e1b894894.png)

