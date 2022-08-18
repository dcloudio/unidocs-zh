## 概述
## Overview
HBuilder|HBuilderX集成了常用的推送平台，包括个推推送和小米推送。
HBuilder|HBuilderX integrates common push platforms, including personal push push and Xiaomi push.
从HBuilderX1.7.2版本开始支持UniPush推送服务（支持华为、小米、OPPO、魅族厂商推送通道），解决APP离线时因为三方推送进程被杀而导致无法推送的问题，参考[UniPush使用指南](http://ask.dcloud.net.cn/article/35622)。
From HBuilderX 1.7.2 version, it supports UniPush push service (supports Huawei, Xiaomi, OPPO, Meizu manufacturer push channels), to solve the problem that the APP cannot be pushed due to the killing of the three-party push process when the APP is offline, refer to [UniPush User Guide](http: //ask.dcloud.net.cn/article/35622).

**Push推送功能需配置SDK参数后提交云端打包后才能生效，如需真机运行生效请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)**
**Push push function needs to configure the SDK parameters and submit the cloud package to take effect. If you want the real machine to take effect, please use the [custom base](http://ask.dcloud.net.cn/article/35115)**

### 使用须知
### usage notice
push是一个可用但不可依赖的功能。
push is a usable but not dependable feature.
- Android平台
- Android platform
Push推送通道不可依赖，Android rom厂商为了省电会禁止push进程开机自启、三方清理软件会杀掉push进程。不止是个推，所有非大厂的app，没有进入rom厂商和三方清理软件白名单的app，不管用哪个推送方案都可能会被杀。当然集成了小米推送后在小米手机上肯定不会被杀，但在其他平台被杀的概率可能更高。
The Push channel cannot be relied upon. To save power, Android rom manufacturers will prohibit the push process from starting automatically, and the third-party cleaning software will kill the push process. It's not just a push, all apps from non-big manufacturers, apps that have not entered the whitelist of rom manufacturers and third-party cleanup software, may be killed no matter which push scheme is used. Of course, after integrating Xiaomi push, it will definitely not be killed on Xiaomi mobile phones, but the probability of being killed on other platforms may be higher.
本质上推送是一个有利于开发商但却很容易造成用户骚扰和费电的功能，所以大多数主流app里的push的实际用处都是拉激活的非实时活动推送。必要时要补充发短信通知的方式。
In essence, push is a function that is beneficial to developers but can easily cause user harassment and power consumption. Therefore, the actual use of push in most mainstream apps is pull-activated non-real-time activity push. If necessary, supplement the way of sending SMS notification.
关于三方推送服务商，其实发展多年内后，技术、服务差距都不大，核心还在于用户量，因为集成的sdk越多，保活和看护机制越有效果。从个推、极光等公司在ipo时披露的数据来看，还是个推占据优势。
Regarding the third-party push service providers, in fact, after many years of development, the gap between technology and services is not large, and the core lies in the number of users, because the more SDKs are integrated, the more effective the keep-alive and nursing mechanisms will be. Judging from the data disclosed by companies such as Getui and Jiguang at the IPO, Getui still has the advantage.
- iOS平台
- iOS platform
手机用户有自主关闭APP推送的权利，如果被关闭自然无法收到push。
Mobile phone users have the right to close APP push voluntarily. If it is closed, they will not be able to receive push.
**可以参考[iOS平台检查是否关闭通知消息，并提醒用户开启通知消息](https://ask.dcloud.net.cn/article/35727)**
**You can refer to [iOS platform to check whether to close the notification message and remind the user to turn on the notification message](https://ask.dcloud.net.cn/article/35727)**

### 整体架构
### Overall structure
![](http://www.dcloud.io/docs/a/push/architecture.png)

### 推送消息类型
### Push message type
通常推送消息分以下两种类型：
There are usually two types of push messages:
- 通知栏消息（推送通知）
- Notification bar messages (push notifications)
UniPush推送服务定义好的推送样式、后续动作的推送方式，客户端接收到后显示在系统通知栏，用户点击通知栏消息启动APP（激活到前台）。
The push style and the push method of the follow-up action defined by the UniPush push service are displayed on the system notification bar after the client receives it. The user clicks the message in the notification bar to start the APP (activated to the foreground).

- 透传消息
- Transparent message
即自定义消息，UniPush推送服务只负责消息传递，不做任何处理，客户端在接收到透传消息后需要自己去处理消息的展示方式或后续动作。
That is, a custom message. The UniPush push service is only responsible for message delivery and does not do any processing. After receiving a transparent message, the client needs to handle the display method or follow-up action of the message by itself.


## 使用5+ API处理推送消息
## Handle push messages using 5+ APIs
uni-app应用中使用推送服务参考：[http://ask.dcloud.net.cn/article/35726](http://ask.dcloud.net.cn/article/35726)。
Reference for using push service in uni-app applications: [http://ask.dcloud.net.cn/article/35726](http://ask.dcloud.net.cn/article/35726).

### 获取APP终端标识
### Get the APP terminal ID
在应用安装后第一次运行时应该调用5+ API的[plus.push.getClientInfo](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.getClientInfo)方法获取客户端标识，并将此标识提交到开发者的业务服务器进行注册设备，以便在用户登录时可绑定设备，实现向登录用户推送专属消息。
The [plus.push.getClientInfo](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.getClientInfo) method of the 5+ API should be called when the app is installed and run for the first time to get the client The terminal ID is submitted to the developer's business server to register the device, so that the device can be bound when the user logs in, and exclusive messages can be pushed to the logged-in user.
示例代码如下：
The sample code is as follows:
```JavaScript
document.addEventListener('plusready', function(){
	// 页面加载时触发
	// Fired when the page loads
	var pinf = plus.push.getClientInfo();
	var cid = pinf.clientid;//客户端标识
}, false );
```
**如果获取的cid为空，说明客户端向推送服务器注册还未完成，可以使用setTimeout延时重试。**
**If the obtained cid is empty, it means that the client's registration with the push server has not been completed, and you can use setTimeout to delay retry. **

### 监听推送消息事件
### Listen for push message events
通常在应用入口页面（首页）中调用5+ API的[plus.push.addEventListener](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.addEventListener)方法监听消息事件，在回调函数中处理消息的响应业务逻辑，如下示例：
Usually, the [plus.push.addEventListener](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.addEventListener) method of the 5+ API is called on the application entry page (home page) to listen for message events , process the response business logic of the message in the callback function, as shown in the following example:
```JavaScript
//监听系统通知栏消息点击事件
//Listen to the system notification bar message click event
plus.push.addEventListener('click', function(msg){
	//处理点击消息的业务逻辑代码
	//The business logic code that handles the click message
}, false);
//监听接收透传消息事件
//Listen to receive transparent message event
plus.push.addEventListener('receive', function(msg){
	//处理透传消息的业务逻辑代码
	//Business logic code for processing transparent messages
}, false);
```
启动回调函数的参数msg为[PushMessage](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage)对象，保存消息的标题(title)、内容(content)、自定义数据(payload)等。
The parameter msg to start the callback function is the [PushMessage](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) object, which saves the title, content, Custom data (payload), etc.

推送消息包括以下事件类型：
Push messages include the following event types:
- click
用户点击系统通知栏中的消息，APP启动或者激活到前台运行，触发click事件。
When the user clicks the message in the system notification bar, the APP starts or activates to run in the foreground, triggering the click event.
- receive
客户端接收到透传消息时（在系统通知栏中不显示消息），触发receive事件。
When the client receives a transparent message (the message is not displayed in the system notification bar), the receive event is triggered.

**注意：特殊情况**
**NOTE: SPECIAL CASE**
- Android平台
- Android platform
推送服务器下发的透传消息符合以下json格式:
The transparent transmission message sent by the push server conforms to the following json format:
```json
{title:"标题",content:"内容",payload:"自定义数据"}
```
时，会作为普通推送通知处理，在系统通知栏创建消息，点击消息激活APP触发"click"事件。
, it will be processed as a normal push notification, create a message in the system notification bar, click the message to activate the APP and trigger the "click" event.
- iOS平台
- iOS platform
如果应用在前台运行，并且监听了"receive"事件，此时接收到APNs通道下发的消息时，会触发"receive"事件。此时可在回调的参数PushMessage对象中获取aps属性值来判断是否是APNs下发的消息。
If the application is running in the foreground and listens to the "receive" event, the "receive" event will be triggered when it receives a message from the APNs channel. At this time, you can obtain the aps attribute value in the callback parameter PushMessage object to determine whether it is a message sent by APNs.
```
// 监听在线消息事件
// Listen for online message events
plus.push.addEventListener( "receive", function( msg ) {
	if ( msg.aps ) {  // Apple APNS message
		//APNS下发的消息，应用在前台
		//The message sent by APNS is applied in the foreground
	} else {
		//其它情况接收消息
		//Other cases receive messages
	}
	//其它逻辑
	//other logic
}, false );
```

### 通知栏消息操作
### Notification bar message operation
5+ Push模块还提供一系列API操作系统通知栏，解决比较少见的业务场景需求。
The 5+ Push module also provides a series of API operating system notification bars to meet the needs of relatively rare business scenarios.

- 清空消息
- clear message
5+ API提供[plus.push.clear]()方法可用于清空系统通知栏中属于当前应用的所有消息，示例代码如下：
The 5+ API provides the [plus.push.clear]() method, which can be used to clear all messages belonging to the current application in the system notification bar. The sample code is as follows:
```JavaScript
plus.push.clear();
```

- 创建本地消息
- Create local messages
开发者在业务逻辑中如需创建本地消息可以调用[plus.push.createMessage](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.createMessage)接口，可以指定消息的标题，显示消息的时间或者使用延迟时间。
If the developer needs to create a local message in the business logic, he can call the [plus.push.createMessage](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.createMessage) interface, and can specify the message The title of the message, the time to display the message, or the use of delay time.
示例代码如下：
The sample code is as follows:
```JavaScript
var options = {cover:false};  
var str = dateToStr(new Date());  
str += ": 欢迎使用Html5 Plus创建本地消息！";  
plus.push.createMessage(str, "LocalMSG", options);  
```
<a id="receive" />
**iOS平台创建本地消息也会触发监听的"receive"事件，此时需要添加特殊参数来标识本地创建的消息。**
**The creation of a local message on the iOS platform will also trigger the monitored "receive" event. In this case, special parameters need to be added to identify the locally created message. **
```
// 监听在线消息事件
// Listen for online message events
plus.push.addEventListener( "receive", function( msg ) {
	if ( msg.aps ) {  // Apple APNS message
		//APNS下发的消息，应用在前台
		//The message sent by APNS is applied in the foreground
	} else if ( 'LocalMSG' == msg.payload ) {   // 特殊payload标识本地创建的消息
	} else if ( 'LocalMSG' == msg.payload ) { // special payload identifies locally created messages
		//本地创建的消息，通常不需要处理
		// Locally created messages, usually do not need to be processed
		//注意：不要在这种情况下再此调用plus.push.createMessage，从而引起循环创建本地消息
		//Note: Do not call plus.push.createMessage again in this case, causing a loop to create local messages
	} else {
		//接收到在线透传消息
		//Receive the online transparent transmission message
	}
	//其它逻辑
	//other logic
}, false );
```

- 获取所有消息
- Get all messages
可以调用[plus.push.getAllMessage](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.getAllMessage)获取系统通知栏中属于当前应用的所有消息，示例代码如下：
You can call [plus.push.getAllMessage](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.getAllMessage) to get all the messages belonging to the current application in the system notification bar. The sample code is as follows:
```JavaScript
var msgs = plus.push.getAllMessage();
for(var i in msgs){  
    var msg = msgs[i];  
    console.log( i+": "+msg.title+" - "+msg.content );  
}
```
**iOS平台不支持获取系统通知栏消息，返回空数组。**
**The iOS platform does not support getting system notification bar messages and returns an empty array. **


## 推送平台申请
## Push platform application
使用推送前需要向推送平台申请应用，并获取推送参数（提交云端打包时需配置），如appid、appkey等。
Before using push, you need to apply for an application to the push platform and obtain push parameters (which need to be configured when submitting cloud packaging), such as appid, appkey, etc.

### 个推推送
### Tweets
登录个推[消息推送开放平台](https://dev.getui.com/)：
Log in to Getui [Message Push Open Platform](https://dev.getui.com/):
如果已经申请过个推的消息推送应用，打开“个推·消息推送”页面，在应用列表中找到申请的应用，点击“应用配置”打开应用信息页面，可获取个推的AppID、AppKey、AppSecret等信息。
If you have already applied for a Getui message push application, open the "Gitui·Message Push" page, find the applied application in the application list, click "App Configuration" to open the application information page, and you can get the AppID, AppKey, AppSecret of Getui and other information.
如果没有申请过应用，打开“[应用管理](https://dev.getui.com/dev/#/appManage)”页面选择“创建应用”申请新应用，申请成功后再通过上面的方法获取AppID、AppKey、AppSecret等参数。
If you have not applied for an app before, open the "[App Management](https://dev.getui.com/dev/#/appManage)" page and select "Create App" to apply for a new app. After the application is successful, you can obtain the AppID through the above method. , AppKey, AppSecret and other parameters.

**个推推送平台相关问题可直接咨询个推客服，企业QQ：2880983159。也可以在ask中@[getui_johny](http://ask.dcloud.net.cn/people/getui_johny)**
**For questions related to the push platform, you can directly consult the customer service of the push platform, corporate QQ: 2880983159. You can also ask @[getui_johny](http://ask.dcloud.net.cn/people/getui_johny)**

### 小米推送
### Xiaomi push
登录[小米开放平台](https://dev.mi.com/console/)，进入“[管理控制台](https://dev.mi.com/console/man/)”页面，在“应用服务”栏选择“消息推送”，打开[推送运营平台](http://admin.xmpush.xiaomi.com/zh_CN/app/nav)：
Log in to the [Xiaomi Open Platform](https://dev.mi.com/console/), go to the "[Management Console](https://dev.mi.com/console/man/)" page, in the "Application In the "Service" column, select "Message Push" and open the [Push Operation Platform](http://admin.xmpush.xiaomi.com/zh_CN/app/nav):
如果已经在小米开放平台申请应用，则在应用列表中点击相应应用的“应用信息”按钮，打开应用信息页面可查看小米推送的AppID、AppKey、AppSecret等信息；若应用没有启用推送服务，则点击“启用推送”按钮申请开通。
If you have applied for an application on the Xiaomi Open Platform, click the "App Information" button of the corresponding application in the application list to open the application information page to view the AppID, AppKey, AppSecret and other information pushed by Xiaomi; if the application does not have the push service enabled, click "Enable Push" button to apply for activation.
如果没有申请过应用，则点击页面左上角的“创建应用”按钮创建新应用，创建成功后再他通过上面的方法“启用推送”功能并获取小米推送的AppID、AppKey、AppSecret等参数。
If you have not applied for an app, click the "Create App" button in the upper left corner of the page to create a new app. After the creation is successful, he will use the above method to "enable the push" function and obtain the AppID, AppKey, AppSecret and other parameters pushed by Xiaomi.
**小米推送需要为Android和iOS平台分别创建两个应用**
**Xiaomi push needs to create two apps for Android and iOS platforms respectively**


## 云端打包配置
## Cloud package configuration
HBuilder|HBuilderX中提交云端打包前，需在manifest.json文件中配置Push推送模块的参数。
Before submitting cloud packaging in HBuilder|HBuilderX, you need to configure the parameters of the Push module in the manifest.json file.

### 1. 模块配置、
### 1. Module configuration,
打开应用的manifest.json文件，选择“模块权限配置”项，勾选“Push(消息推送)”，如下图所示：
Open the manifest.json file of the application, select the "Module Permission Configuration" item, and check "Push (message push)", as shown in the following figure:
![Push(消息推送)-模块权限配置](http://www.dcloud.io/docs/a/push/x_s1.png)
![Push (message push)-module permission configuration](http://www.dcloud.io/docs/a/push/x_s1.png)

### 2. SDK参数配置
### 2. SDK parameter configuration
打开应用的manifest.json文件，选择“SDK配置”项，选择应用使用的推送平台，并输入从此推送平台申请获取的配置参数，如下图所示：
Open the manifest.json file of the application, select the "SDK Configuration" item, select the push platform used by the application, and enter the configuration parameters obtained from the application for this push platform, as shown in the following figure:
![Push(消息推送)-SDK配置](http://www.dcloud.io/docs/a/push/x_s2.png)
![Push (message push)-SDK configuration](http://www.dcloud.io/docs/a/push/x_s2.png)

**Android平台云端打包时需要确认填写的app包名和在推送平台创建应用时填写的包名一致**
**When the Android platform is packaged in the cloud, you need to confirm that the app package name filled in is the same as the package name filled in when the app was created on the push platform**
**iOS平台云端打包时需要确人打包填写的Bundle ID（Apple AppID）和提交给推送平台的APS证书内包含的AppID一致**
**When packaging the iOS platform in the cloud, the Bundle ID (Apple AppID) filled in by the packaging person must be consistent with the AppID contained in the APS certificate submitted to the push platform**


## 常见问题
## common problem
**1.为什么真机运行时不能收到推送的消息**
**1. Why can't I receive the push message when the real machine is running**
答： 如果需要测试推送功能，需要使用HBuilder云打包生成安装包进行测试。
A: If you need to test the push function, you need to use the HBuilder cloud package to generate the installation package for testing.

**2.推送消息到安卓平台为什么没有在消息中心中显示**
**2. Why is the push message to Android platform not displayed in the message center**
答： 如果推送到安卓平台的消息是透传消息，并且格式不符合规范则会触发监听页面的receive事件，消息不会进入消息中心。
A: If the message pushed to the Android platform is a transparent message, and the format does not conform to the specification, the receive event of the monitoring page will be triggered, and the message will not enter the message center.

**3. IOS平台本地创建本地消息会触发“receive”事件，如何和服务器发送的消息进行区分。**
**3. The "receive" event is triggered when a local message is created locally on the IOS platform, how to distinguish it from the message sent by the server. **
答： 用户在创建IOS本地消息是可以在“payload”节点添加特殊标记对消息进行区分
Answer: When creating IOS local messages, users can add special tags to the "payload" node to distinguish the messages

**4. Android平台如何配置推送消息图标**
**4. How to configure push message icon on Android platform**
答：参考[https://ask.dcloud.net.cn/article/35537](https://ask.dcloud.net.cn/article/35537)
Answer: Refer to [https://ask.dcloud.net.cn/article/35537](https://ask.dcloud.net.cn/article/35537)
