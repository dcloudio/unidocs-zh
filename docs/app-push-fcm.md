#### 准备条件  

- 可访问Google服务器  
注意：中国境内无法访问Google服务器
- 注册Google账号  
- 了解什么是 `Firebase Cloud Messaging`,确定你是否需要用它
  + [介绍](https://firebase.google.com/docs/cloud-messaging)
  + [Android设置文档](https://firebase.google.com/docs/cloud-messaging/android/client)
  + [iOS设置文档](https://firebase.google.com/docs/cloud-messaging/ios/client)


#### 申请开通FCM  

1. 打开[Firebase引导页](https://firebase.google.com)  

2. 创建新项目  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_1.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_2.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_3.jpg)  

3. 创建`iOS`平台配置  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_1.jpg)
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_2.jpg)
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_3.jpg)
将 `GoogleService-Info.plist` 下载到本地，HBuilderX中云端打包需要使用此文件  

4. 创建`Android`平台配置 (如已创建项目，无须创建新项目，直接进行Android平台的配置)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_1.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_2.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_3.jpg)  
项目创建完成后，进入项目配置Android平台的包名、签名证书步骤如下：
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_start.png)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_package.png)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_download_config_file.png)
将 `google-services.json` 下载到本地，HBuilderX中云端打包需要使用此文件  


####  Android平台FCM后台推送消息  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_1.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_2.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_3.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_4.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_5.jpg)  


#### iOS平台FCM后台推送消息  

1. 上传APNS证书  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_ios_upload_profile.jpg)  

2. 网页端实现推送客户端功能  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_1.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_2.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_3.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_4.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_create_notification_5.jpg)  

