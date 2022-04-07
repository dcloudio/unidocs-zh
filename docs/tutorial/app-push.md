## 概述
HBuilder|HBuilderX集成了常用的推送平台，包括个推推送和小米推送。
从HBuilderX1.7.2版本开始支持UniPush推送服务（支持华为、小米、OPPO、魅族厂商推送通道），解决APP离线时因为三方推送进程被杀而导致无法推送的问题，参考[UniPush使用指南](http://ask.dcloud.net.cn/article/35622)。

**Push推送功能需配置SDK参数后提交云端打包后才能生效，如需真机运行生效请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)**

### 使用须知
push是一个可用但不可依赖的功能。
- Android平台
Push推送通道不可依赖，Android rom厂商为了省电会禁止push进程开机自启、三方清理软件会杀掉push进程。不止是个推，所有非大厂的app，没有进入rom厂商和三方清理软件白名单的app，不管用哪个推送方案都可能会被杀。当然集成了小米推送后在小米手机上肯定不会被杀，但在其他平台被杀的概率可能更高。
本质上推送是一个有利于开发商但却很容易造成用户骚扰和费电的功能，所以大多数主流app里的push的实际用处都是拉激活的非实时活动推送。必要时要补充发短信通知的方式。
关于三方推送服务商，其实发展多年内后，技术、服务差距都不大，核心还在于用户量，因为集成的sdk越多，保活和看护机制越有效果。从个推、极光等公司在ipo时披露的数据来看，还是个推占据优势。
- iOS平台
手机用户有自主关闭APP推送的权利，如果被关闭自然无法收到push。
**可以参考[iOS平台检查是否关闭通知消息，并提醒用户开启通知消息](https://ask.dcloud.net.cn/article/35727)**

### 整体架构
![](http://www.dcloud.io/docs/a/push/architecture.png)

### 推送消息类型
通常推送消息分以下两种类型：
- 通知栏消息（推送通知）
UniPush推送服务定义好的推送样式、后续动作的推送方式，客户端接收到后显示在系统通知栏，用户点击通知栏消息启动APP（激活到前台）。

- 透传消息
即自定义消息，UniPush推送服务只负责消息传递，不做任何处理，客户端在接收到透传消息后需要自己去处理消息的展示方式或后续动作。


## 使用5+ API处理推送消息
uni-app应用中使用推送服务参考：[http://ask.dcloud.net.cn/article/35726](http://ask.dcloud.net.cn/article/35726)。

### 获取APP终端标识
在应用安装后第一次运行时应该调用5+ API的[plus.push.getClientInfo](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.getClientInfo)方法获取客户端标识，并将此标识提交到开发者的业务服务器进行注册设备，以便在用户登录时可绑定设备，实现向登录用户推送专属消息。
示例代码如下：
```JavaScript
document.addEventListener('plusready', function(){
	// 页面加载时触发
	var pinf = plus.push.getClientInfo();
	var cid = pinf.clientid;//客户端标识
}, false );
```
**如果获取的cid为空，说明客户端向推送服务器注册还未完成，可以使用setTimeout延时重试。**

### 监听推送消息事件
通常在应用入口页面（首页）中调用5+ API的[plus.push.addEventListener](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.addEventListener)方法监听消息事件，在回调函数中处理消息的响应业务逻辑，如下示例：
```JavaScript
//监听系统通知栏消息点击事件
plus.push.addEventListener('click', function(msg){
	//处理点击消息的业务逻辑代码
}, false);
//监听接收透传消息事件
plus.push.addEventListener('receive', function(msg){
	//处理透传消息的业务逻辑代码
}, false);
```
启动回调函数的参数msg为[PushMessage](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage)对象，保存消息的标题(title)、内容(content)、自定义数据(payload)等。

推送消息包括以下事件类型：
- click
用户点击系统通知栏中的消息，APP启动或者激活到前台运行，触发click事件。
- receive
客户端接收到透传消息时（在系统通知栏中不显示消息），触发receive事件。

**注意：特殊情况**
- Android平台
推送服务器下发的透传消息符合以下json格式:
```json
{title:"标题",content:"内容",payload:"自定义数据"}
```
时，会作为普通推送通知处理，在系统通知栏创建消息，点击消息激活APP触发"click"事件。
- iOS平台
如果应用在前台运行，并且监听了"receive"事件，此时接收到APNs通道下发的消息时，会触发"receive"事件。此时可在回调的参数PushMessage对象中获取aps属性值来判断是否是APNs下发的消息。
```
// 监听在线消息事件
plus.push.addEventListener( "receive", function( msg ) {
	if ( msg.aps ) {  // Apple APNS message
		//APNS下发的消息，应用在前台
	} else {
		//其它情况接收消息
	}
	//其它逻辑
}, false );
```

### 通知栏消息操作
5+ Push模块还提供一系列API操作系统通知栏，解决比较少见的业务场景需求。

- 清空消息
5+ API提供[plus.push.clear]()方法可用于清空系统通知栏中属于当前应用的所有消息，示例代码如下：
```JavaScript
plus.push.clear();
```

- 创建本地消息
开发者在业务逻辑中如需创建本地消息可以调用[plus.push.createMessage](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.createMessage)接口，可以指定消息的标题，显示消息的时间或者使用延迟时间。
示例代码如下：
```JavaScript
var options = {cover:false};  
var str = dateToStr(new Date());  
str += ": 欢迎使用Html5 Plus创建本地消息！";  
plus.push.createMessage(str, "LocalMSG", options);  
```
<a id="receive" />
**iOS平台创建本地消息也会触发监听的"receive"事件，此时需要添加特殊参数来标识本地创建的消息。**
```
// 监听在线消息事件
plus.push.addEventListener( "receive", function( msg ) {
	if ( msg.aps ) {  // Apple APNS message
		//APNS下发的消息，应用在前台
	} else if ( 'LocalMSG' == msg.payload ) {   // 特殊payload标识本地创建的消息
		//本地创建的消息，通常不需要处理
		//注意：不要在这种情况下再此调用plus.push.createMessage，从而引起循环创建本地消息
	} else {
		//接收到在线透传消息
	}
	//其它逻辑
}, false );
```

- 获取所有消息
可以调用[plus.push.getAllMessage](http://www.html5plus.org/doc/zh_cn/push.html#plus.push.getAllMessage)获取系统通知栏中属于当前应用的所有消息，示例代码如下：
```JavaScript
var msgs = plus.push.getAllMessage();
for(var i in msgs){  
    var msg = msgs[i];  
    console.log( i+": "+msg.title+" - "+msg.content );  
}
```
**iOS平台不支持获取系统通知栏消息，返回空数组。**


## 推送平台申请
使用推送前需要向推送平台申请应用，并获取推送参数（提交云端打包时需配置），如appid、appkey等。

### 个推推送
登录个推[消息推送开放平台](https://dev.getui.com/)：
如果已经申请过个推的消息推送应用，打开“个推·消息推送”页面，在应用列表中找到申请的应用，点击“应用配置”打开应用信息页面，可获取个推的AppID、AppKey、AppSecret等信息。
如果没有申请过应用，打开“[应用管理](https://dev.getui.com/dev/#/appManage)”页面选择“创建应用”申请新应用，申请成功后再通过上面的方法获取AppID、AppKey、AppSecret等参数。

**个推推送平台相关问题可直接咨询个推客服，企业QQ：2880983159。也可以在ask中@[getui_johny](http://ask.dcloud.net.cn/people/getui_johny)**

### 小米推送
登录[小米开放平台](https://dev.mi.com/console/)，进入“[管理控制台](https://dev.mi.com/console/man/)”页面，在“应用服务”栏选择“消息推送”，打开[推送运营平台](http://admin.xmpush.xiaomi.com/zh_CN/app/nav)：
如果已经在小米开放平台申请应用，则在应用列表中点击相应应用的“应用信息”按钮，打开应用信息页面可查看小米推送的AppID、AppKey、AppSecret等信息；若应用没有启用推送服务，则点击“启用推送”按钮申请开通。
如果没有申请过应用，则点击页面左上角的“创建应用”按钮创建新应用，创建成功后再他通过上面的方法“启用推送”功能并获取小米推送的AppID、AppKey、AppSecret等参数。
**小米推送需要为Android和iOS平台分别创建两个应用**


## 云端打包配置
HBuilder|HBuilderX中提交云端打包前，需在manifest.json文件中配置Push推送模块的参数。

### 1. 模块配置、
打开应用的manifest.json文件，选择“模块权限配置”项，勾选“Push(消息推送)”，如下图所示：
![Push(消息推送)-模块权限配置](http://www.dcloud.io/docs/a/push/x_s1.png)

### 2. SDK参数配置
打开应用的manifest.json文件，选择“SDK配置”项，选择应用使用的推送平台，并输入从此推送平台申请获取的配置参数，如下图所示：
![Push(消息推送)-SDK配置](http://www.dcloud.io/docs/a/push/x_s2.png)

**Android平台云端打包时需要确认填写的app包名和在推送平台创建应用时填写的包名一致**
**iOS平台云端打包时需要确人打包填写的Bundle ID（Apple AppID）和提交给推送平台的APS证书内包含的AppID一致**


## 常见问题
**1.为什么真机运行时不能收到推送的消息**
答： 如果需要测试推送功能，需要使用HBuilder云打包生成安装包进行测试。

**2.推送消息到安卓平台为什么没有在消息中心中显示**
答： 如果推送到安卓平台的消息是透传消息，并且格式不符合规范则会触发监听页面的receive事件，消息不会进入消息中心。

**3. IOS平台本地创建本地消息会触发“receive”事件，如何和服务器发送的消息进行区分。**
答： 用户在创建IOS本地消息是可以在“payload”节点添加特殊标记对消息进行区分

**4. Android平台如何配置推送消息图标**
答：参考[https://ask.dcloud.net.cn/article/35537](https://ask.dcloud.net.cn/article/35537)
