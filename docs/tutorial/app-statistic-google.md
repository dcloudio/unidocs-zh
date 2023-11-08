#### 准备条件  
#### Preparation conditions

- 可访问Google服务器  
- Access to Google servers
注意：中国境内无法访问Google服务器
Note: Google servers cannot be accessed within China
- 注册Google账号  
- Register a Google account
- 了解什么是 `Google Analytics`,确定你是否需要用它
- Learn what `Google Analytics` is and decide if you need it
  + [介绍](https://firebase.google.com/docs/analytics)
  + [Introduction](https://firebase.google.com/docs/analytics)
  + [Android设置文档](https://firebase.google.com/docs/analytics/get-started?platform=android)
  + [Android Setup Documentation](https://firebase.google.com/docs/analytics/get-started?platform=android)
  + [iOS设置文档](https://firebase.google.com/docs/analytics/get-started?platform=ios)
  + [iOS setup documentation](https://firebase.google.com/docs/analytics/get-started?platform=ios)

#### 申请开通Google统计  
#### Apply for Google Statistics

1. 打开[Firebase引导页](https://firebase.google.com)
1. Open the [Firebase Bootstrap Page](https://firebase.google.com)

2. 创建新项目  
2. Create a new project
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_1.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_2.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_3.jpg)  

3. 创建`iOS`平台配置  
3. Create the `iOS` platform configuration
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_iOS_step_1.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_iOS_step_2.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_iOS_step_3.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_iOS_step_4.jpg)  
将 `GoogleService-Info.plist` 下载到本地，HBuilderX中云端打包需要使用此文件  
Download `GoogleService-Info.plist` to the local, this file is required for cloud packaging in HBuilderX

4. 创建`Android`平台配置 (如已创建项目，无须创建新项目，直接进行Android平台的配置)
4. Create `Android` platform configuration (if you have already created a project, you don't need to create a new project, you can directly configure the Android platform)
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_1.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_2.jpg)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_project_setup_3.jpg)  

项目创建完成后，进入项目配置Android平台的包名、签名证书步骤如下：  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_start.png)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_package.png)  
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_download_config_file.png)  

将 `google-services.json` 下载到本地，HBuilderX中云端打包需要配置使用此文件
Download `google-services.json` to the local, the cloud package in HBuilderX needs to be configured to use this file


#### 使用Google统计
#### Using Google Statistics

在项目manifest.json文件的“App模块配置”页面，在“Statistic(统计)”下勾选“Google统计”项，并添加从Google统计平台申请的配置文件：
![](https://native-res.dcloud.net.cn/images/uniapp/statistic/google.png)

