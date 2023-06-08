# uni-push2统一推送

> 本文为uni-push2.0（需要HBuilderX 3.5.1 及其以上版本支持）的介绍，如果旧项目需要使用老版本的uniPush1.0，另见：[https://ask.dcloud.net.cn/article/35622](https://ask.dcloud.net.cn/article/35622)

# 应用场景
# application scenarios
以下功能可以用uni-push 实现  
The following functions can be implemented with uni-push
- 用户消息通知  
- User message notification
当 APP 用户相关状态或者系统功能状态变化时（如用户订单通知、交易提醒、物流通知、升级提醒、社交互动提醒等），可对用户进行及时告知，或者促使用户完成特定操作。
When the relevant status of APP users or the status of system functions changes (such as user order notifications, transaction reminders, logistics notifications, upgrade reminders, social interaction reminders, etc.), users can be notified in time, or users can be prompted to complete specific operations.

- 离线语音播报  
- Offline voice broadcast
它也是一种用户消息推送，实现原理其实是自定义通知提醒铃声
It is also a user message push, the implementation principle is actually to customize the notification reminder ringtone

- 营销促活通知  
- Marketing promotion notice
在日常营销推广、促销活动等场景下（如双11大促、产品上新、重要资讯等），APP可对目标用户进行定向通知栏消息+应用内消息推送，吸引用户参与活动，提升日活。
In daily marketing promotion, promotional activities and other scenarios (such as the Double 11 promotion, new product launches, important information, etc.), the APP can send targeted notifications to target users + push in-app messages to attract users to participate in activities and improve daily activities.

- 基于uniCloud的IM、聊天、客服、棋牌游戏交互等  
- IM, chat, customer service, chess and card game interaction based on uniCloud
例如：DCloud基于`uni-push2`开发并开源了`uni-im`详情:[https://uniapp.dcloud.net.cn/uniCloud/uni-im.html](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)  
For example: DCloud developed and open-sourced `uni-im` based on `uni-push2` Details: [https://uniapp.dcloud.net.cn/uniCloud/uni-im.html](https://uniapp.dcloud. net.cn/uniCloud/uni-im.html)
另外棋牌游戏等，需要客户端被动接收消息的需求都可以用`uni-push`实现。
In addition, chess and card games and other requirements that require the client to passively receive messages can be implemented with `uni-push`.

# 简介
# Introduction

## 概述
`uni-push`是DCloud推出的、全端的、云端一体的统一推送服务。

1. 客户端方面，`uni-push2`支持App、web、小程序。
  * App端，内置了苹果、华为、小米、OPPO、VIVO、魅族、谷歌FCM等手机厂商的系统推送和个推第三方推送
  * 小程序端，内置了socket在线推送。如需模板消息/订阅消息，另见[uni-subscribemsg](/uniCloud/uni-subscribemsg.md)
  * web端，内置了socket在线推送
  （uni-push1仅支持app，且app必须包含个推原生sdk。uni-push2在app端如不需要厂商推送，只需在线推送，无需集成个推原生sdk）
2. 服务端方面，`uni-push2`支持uniCloud云端一体，无需再编写复杂代码轻松完成push。
  （uni-push1.0仅支持使用传统服务器开发语言如php，未和客户端有效协同，流程比uni-push2.0繁琐）
3. uni-push还自带一个web控制台。不写代码也可以在web页面发推送。uni-push1.0的web控制台在[dev.dcloud.net.cn](https://dev.dcloud.net.cn)。uni-push2.0的web控制台是开源的，属于uni-admin插件[详见](https://ext.dcloud.net.cn/plugin?name=uni-push-admin)。
3. uni-push also comes with a web console. You can also send pushes on web pages without writing code. The web console of uni-push1.0 is at [dev.dcloud.net.cn](https://dev.dcloud.net.cn). The web console of uni-push2.0 is open source and belongs to the uni-admin plugin [see details](https://ext.dcloud.net.cn/plugin?name=uni-push-admin).

## 什么是push？
## What is push?
push，指服务器主动向客户端发送消息的技术。无需客户端持续轮询服务器，即可获得即时数据。
Push refers to the technology in which the server actively sends messages to the client. Instant data is available without the need for the client to continuously poll the server.

轮询有很多弊端：1) 客户端应用必须实时在线；2) 手机端耗电严重；3) 服务器负载高且浪费资源
Polling has many disadvantages: 1) The client application must be online in real time; 2) The mobile phone consumes a lot of power; 3) The server load is high and wastes resources

手机的通知栏、小程序的订阅消息都是一种push，由手机操作系统或微信在底层提供了push通道，屏蔽了轮询的各种弊端。你的应用可以被关闭，只要手机有网，操作系统提供的push通道即是实时在线的。
The notification bar of the mobile phone and the subscription message of the applet are all a kind of push. The mobile operating system or WeChat provides a push channel at the bottom layer, which shields various drawbacks of polling. Your application can be closed, as long as the mobile phone has a network, the push channel provided by the operating system is online in real time.

提醒：web浏览器的webnotification其实是一个本地通知栏功能，浏览器厂商没有提供push通道。
Reminder: The webnotification of the web browser is actually a local notification bar function, and the browser manufacturer does not provide a push channel.

当客户端在线时，push通过socket协议实现。当客户端离线时，服务器找不到客户端，开发者无法自己实现推送，只能依托手机操作系统、小程序底层提供的离线消息推送，调用指定的手机厂商或小程序厂商的服务器接口来发送消息。
When the client is online, push is implemented through the socket protocol. When the client is offline, the server cannot find the client, and the developer cannot implement the push by himself. He can only rely on the offline message push provided by the mobile phone operating system and the bottom layer of the applet, and call the server interface of the designated mobile phone manufacturer or applet manufacturer to send the message. information.

所以一个push系统需要3部分协作：开发者的业务服务器 + 专业push服务器 + 开发者的客户端应用。
Therefore, a push system needs three parts of cooperation: the developer's business server + the professional push server + the developer's client application.

其主要流程是：
Its main process is:

1. 开发者的业务服务器向专业push服务器发送指令，告知需要向哪些客户端发送什么样的消息
1. The developer's business server sends instructions to the professional push server, informing which clients need to send what kind of messages
2. 专业push服务器再向客户端发送消息
2. The professional push server sends a message to the client
3. 若手机应用在线，直接收到push；若不在线，手机用户在操作系统的通知栏中看到push消息，点击后呼起客户端应用，客户端代码可以接收响应获得消息；如果是小程序的话，则是在微信消息里看到订阅消息，点击后呼起小程序并拿到启动参数。
3. If the mobile application is online, it will receive the push directly; if it is not online, the mobile phone user will see the push message in the notification bar of the operating system, click it to call up the client application, and the client code can receive the response and get the message; if it is a small If you are a program, you will see the subscription message in the WeChat message, click it to call up the applet and get the startup parameters.
<div style="float:clear;">
	<img width="30%" style="margin-left:5%;max-width:260px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/20220325203150.jpg"/>
	<img width="30%" style="margin-left:5%;max-width:260px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/3bb2b4c4-1b73-426d-b713-f076aff80868.jpg"/>
</div>

由于手机厂商众多，他们各自都有不同的推送服务，包括Apple、google（仅能在海外使用）、华为、小米、oppo、vivo、魅族，以及还有一些没有专业推送服务的中小手机品牌。他们对App后台耗电都有查杀机制，除了微信等大应用，普通应用很难常驻后台。
Due to the large number of mobile phone manufacturers, they each have different push services, including Apple, Google (only available overseas), Huawei, Xiaomi, oppo, vivo, Meizu, and some small and medium-sized mobile phone brands that do not have professional push services. They have a mechanism to check and kill the power consumption of the app in the background. Except for WeChat and other large applications, it is difficult for ordinary applications to stay in the background.

如果开发者把上述每个平台的客户端和服务器的SDK都对接一遍，还自己处理没有push服务的中小品牌手机，那过于困难了。所以业内有专业的推送服务厂商把各种手机厂商的通道封装成一套统一的API，如个推（属于上市公司每日互动）；同时这些三方专业推送厂商还提供了高速socket通道。当应用在线时，也可以直接通过socket下发消息。否则开发者需要写很多判断代码、搭建socket服务器、处理在线时和离线时各种差异。
It would be too difficult for developers to connect the client and server SDKs of each of the above platforms and deal with small and medium-sized mobile phones without push services by themselves. Therefore, there are professional push service providers in the industry that encapsulate the channels of various mobile phone manufacturers into a set of unified API, such as Ge Push (which belongs to the daily interaction of listed companies); at the same time, these three-party professional push providers also provide high-speed socket channels. When the application is online, it can also send messages directly through the socket. Otherwise, developers need to write a lot of judgment code, build a socket server, and deal with various differences between online and offline.

DCloud与个推（A股上市公司每日互动）深度合作，为uni-app的开发者提供了比传统方案便利甚多的统一推送方案`uni-push2`，利用云端一体的优势，同时提供基于uniCloud的push服务器和基于uni-app的push客户端，两者高效协同，极大的简化了push的使用。

> 注：`uni-push`的服务器稳定性是由阿里云serverless、腾讯云serverless、个推来保障的，都是日活过亿的上市公司，无需顾虑稳定性。
> Note: The server stability of `uni-push` is guaranteed by Alibaba Cloud serverless, Tencent Cloud serverless, and Getui, all of which are listed companies with over 100 million daily active users, so there is no need to worry about stability.

如下图所示：
As shown below:
首先开发者的uniCloud应用服务器向uniPush服务器发送push消息，然后
First, the developer's uniCloud application server sends a push message to the uniPush server, and then
- 如果客户端应用在线，客户端通过socket直接收到push在线消息；
- If the client application is online, the client directly receives the push online message through the socket;
- 客户端应用不联网时，`uni-push`服务器根据客户端类型，把push消息发给某个手机厂商的push服务器或小程序的订阅消息服务器；然后厂商push通道会把这条消息发到手机的通知栏或微信的订阅消息里；手机用户点击通知栏消息或小程序订阅消息后，启动App或小程序，客户端才能收到离线消息。
- When the client application is not connected to the Internet, the `uni-push` server will send the push message to the push server of a mobile phone manufacturer or the subscription message server of the MiniApp according to the type of the client; then the manufacturer's push channel will send this message to In the notification bar of the mobile phone or the subscription message of WeChat; after the mobile phone user clicks the message in the notification bar or subscribes to the message in the MiniApp, and starts the App or MiniApp, the client can receive the offline message.
	<img width="100%" src="https://web-assets.dcloud.net.cn/unidoc/zh/cd3e676a-6a3b-44ea-9045-5bc058d0d8ae.png"/></br>


总结下`uni-push`提供的功能：
Summarize the functions provided by `uni-push`:
1. 一个在线的socket下行服务，无论app、小程序、web，只要在线，都可以从服务器推送消息。尤其对于uniCloud用户，这个免费socket下行服务用途很多。
1. An online socket downlink service, regardless of app, applet, or web, as long as it is online, it can push messages from the server. Especially for uniCloud users, this free socket downlink service has many uses.
2. app平台，提供app离线时的推送，聚合了所有已知手机厂商的push通道；对于未提供push通道的小手机厂商，提供后台常驻进程接收push消息（受手机rom节电设置约束）
2. The app platform provides push when the app is offline, and aggregates the push channels of all known mobile phone manufacturers; for small mobile phone manufacturers that do not provide push channels, it provides background resident processes to receive push messages (subject to mobile phone rom power saving settings)
3. 小程序平台，目前提供了下行socket通道，后续会整合小程序离线时的订阅消息
3. The Mini Program platform currently provides downlink socket channels, and will integrate the subscription messages when the Mini Program is offline in the future
4. web平台，目前提供了下行socket通道，后续会提供webnotification的封装。当标签卡在后台时（注意不是关闭时），仍然可以在屏幕上弹出通知栏。
4. The web platform currently provides downlink socket channels, and will provide webnotification encapsulation in the future. When the tab is stuck in the background (note not closed), the notification bar can still pop up on the screen.
5. 快应用平台，目前提供了下行socket通道，后续会提供离线push的封装
5. The fast application platform currently provides downlink socket channels, and will provide offline push packaging in the future
6. 一个[uni-admin](/uniCloud/admin)插件，开源的web控制台，无需编程，可视化界面发送push消息 [详见](https://ext.dcloud.net.cn/plugin?name=uni-push-admin)
6. A [uni-admin](/uniCloud/admin) plug-in, an open source web console, no programming required, and a visual interface to send push messages [see details](https://ext.dcloud.net.cn/plugin?name =uni-push-admin)

在[uni-starter](/uniCloud/uni-starter)里，还提供了app push权限判断、申请、开关设置，搭配使用可以大量降低开发工作量。

注意：app申请创建通知栏消息、web申请弹出通知，均会由操作系统或浏览器自动弹窗询问用户是否同意。小程序下需要手机用户主动发起订阅行为，才能送达消息。
Note: The operating system or browser will automatically pop up a window to ask the user whether to agree or not. Under the applet, the mobile phone user needs to actively initiate the subscription behavior before the message can be delivered.

`uni-push`即降低了开发成本，又提高了push送达率，还支持全平台，并且免费，是当前推送的最佳解决方案。
`uni-push` not only reduces the development cost, but also improves the push delivery rate. It also supports all platforms and is free. It is the best solution for current push.

## uni-push2.0 使用uniCloud产生的费用说明@cost
## uni-push2.0 Description of the cost generated by using uniCloud @cost

uni-push本身并不收费，实际使用中需要依赖uniCloud云服务，而uniCloud价格很实惠：  
uni-push itself is free of charge, and it needs to rely on uniCloud cloud service in actual use, and the price of uniCloud is very affordable:
- 调用10000次云函数仅需0.0133元
- It only costs 0.0133 yuan to call cloud functions 10,000 times
- 调用10000次数据库查询仅需0.015元
- It only costs 0.015 yuan to call 10,000 database queries

可见价格之低，几乎可以忽略不计。
It can be seen that the price is so low that it is almost negligible.

一次消息推送 = 1次云函数请求 + 最高3次数据库查询（最常用的基于user_id推送仅需一次查询，详情参考：[推送接口查库详解](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-push/mate.html#%E6%8E%A8%E9%80%81%E6%8E%A5%E5%8F%A3%E6%9F%A5%E5%BA%93%E8%AF%A6%E8%A7%A3) )  
A message push = 1 cloud function request + up to 3 database queries (the most commonly used push based on user_id only requires one query, for details, please refer to: [Detailed Explanation of Push Interface Database Search](https://uniapp.dcloud.net.cn/ uniCloud/uni-cloud-push/mate.html#%E6%8E%A8%E9%80%81%E6%8E%A5%E5%8F%A3%E6%9F%A5%E5%BA%93%E8 %AF%A6%E8%A7%A3) )

即：最高(1 * 0.0133 + 3 * 0.015)/10000 = 0.00000583元/每次（注：给你的应用的所有注册用户群发消息算一次）  
That is: the highest (1 * 0.0133 + 3 * 0.015)/10000 = 0.00000583 yuan / each time (note: sending group messages to all registered users of your application counts as one time)

详细的计费参考：[阿里云版uniCloud按量计费文档](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)
Detailed billing reference: [Aliyun version uniCloud pay-as-you-go document](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)

# 常见问题
# common problem
有了uni-push，开发者不应该再使用其他push方案了。但我们发现很多开发者有误解，导致还在错误使用其他推送。
With uni-push, developers should no longer use other push schemes. However, we found that many developers have misunderstandings, which lead to the wrong use of other pushes.

- 常见误解1：“uni-push的专业性，和专业的个推、极光等服务可相比吗？”
- Common misunderstanding 1: "Is the professionalism of uni-push comparable to professional personal push, Aurora and other services?"

	答：uniPush 是由个推将其本来收费的 push 产品，免费提供给了DCloud的开发者。它与个推vip push的只有3个区别：1、免费；2、账户使用的是DCloud开发者账户，而无需再重新注册个推账户；3、开发文档看DCloud的。

- 常见误解2：“uni-push好麻烦，我就喜欢个推、极光这种简单sdk，不想去各个rom厂商去申请一圈”
- Common misunderstanding 2: "uni-push is so troublesome, I like simple sdk like push and aurora, and I don't want to go to various rom manufacturers to apply for a circle"

	答：uni-push不建立在申请手机厂商授权的基础上，如果你不申请那些，使用起来和用普通的push是一样的。但是要特别注意，推送行业的现状就是：不集成rom厂商的推送，就无法在App离线时发送push。按照普通push模式使用，后果就是在华为、小米、OPPO、VIVO、魅族上发不了离线消息。
	A: uni-push is not based on applying for authorization from mobile phone manufacturers. If you do not apply for those, it will be the same as using ordinary push. However, special attention should be paid to the status quo of the push industry: without integrating the push of the rom manufacturer, it is impossible to send push when the app is offline. According to the normal push mode, the consequence is that offline messages cannot be sent on Huawei, Xiaomi, OPPO, VIVO, and Meizu.

- 常见误解3：“uni-push的送达率高吗？是否可以付费来提升送达率，个推是有付费提升送达率的方法的”
- Common misunderstanding 3: "Is the delivery rate of uni-push high? Is it possible to pay to increase the delivery rate? There is a way to pay to increase the delivery rate of uni-push"

	答：前文已经说了。个推的付费提升送达率的产品就是vip push，而uni-push就是个推的vip Push。DCloud通过谈判免费给DCloud的开发者使用了。
	A: It has been mentioned above. The paid product of uni-push to improve the delivery rate is vip push, and uni-push is the vip push of uni-push. DCloud has been negotiated for free use by DCloud developers.

- uni-push可以完整替代socket吗？
- Can uni-push completely replace sockets?

	答：能部分替代。uni-push客户端接收消息的通讯协议属于websocket；但业务服务端向uniPush服务发送消息用的是http通讯协议，会有1-2秒的延时。需要超低延迟的应用场景，如多人交互远程画板不合适。但对于普通的im消息、聊天、通知都没有问题。
	A: Partial replacement is possible. The communication protocol used by the uni-push client to receive messages belongs to websocket; however, the service server uses the HTTP communication protocol to send messages to the uniPush service, and there will be a delay of 1-2 seconds. Application scenarios that require ultra-low latency, such as multi-person interactive remote drawing boards, are not suitable. But there is no problem with normal im messages, chats, notifications.

- 5+app和wap2app支持uni-push2.0吗？  
- Do 5+app and wap2app support uni-push2.0?
	
	答：暂不支持。
	A: Not currently supported.

- **使用有其他疑问**，欢迎扫码加入 uni-push2.0 微信交流群讨论：
    <br/><img src="https://ask.dcloud.net.cn/uploads/article/20210219/f0fca7f4ea8b8650386fc20345312105.JPG" width="250"/>

# 快速上手
# Quick start
## 第一步：开通  
## Step 1: Activate
uni-push产品有2个入口：
uni-push products have 2 entries:
1. 通过 HBuilderX(3.5.1及其以上版本)进入
1. Enter through HBuilderX (version 3.5.1 and above)

	打开 HBuilderX，双击项目中的 “manifest.json” 文件，选择“App 模块配置”，向下找到“Push(消息推送)”，勾选后，点击 “uniPush” 下面的配置链接。如下图所示：
![](https://web-assets.dcloud.net.cn/unidoc/zh/20220525104554.jpg)
2. 通过开发者中心进入
2. Enter through the developer center
	
	使用 HBuilder 账号登录 [开发者中心](https://dev.dcloud.net.cn) ，登录后
	会进入“uniPush”-“Uni Push 2.0（支持全端推送）”-“应用信息”，点击“当前应用”选择要操作的应用。
	
以上两种方式均可进入uniPush 应用开通界面。如下图所示：
![](https://web-assets.dcloud.net.cn/unidoc/zh/uniPush2-info.jpg)

### 手机号验证
### Phone number verification

按照国家法律要求，所有提供云服务的公司在用户使用云服务时都需要验证手机号。
According to national legal requirements, all companies that provide cloud services need to verify mobile phone numbers when users use cloud services.

用户初次开通 uni-push 时，需要向个推同步手机号信息（DCloud开发者无需再注册个推账户）。
![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/sm.png)

### 填写应用信息
### Fill in the application information
应用开通 uni-push 功能时，需要提交应用相关信息，如下图所示：
![](https://web-assets.dcloud.net.cn/unidoc/zh/uniPush2-info.jpg)

关联服务空间说明：uni-push2.0需要开发者开通uniCloud。不管您的业务服务器是否使用uniCloud，但专业推送服务器在uniCloud上。
Description of associated service space: uni-push2.0 requires developers to activate uniCloud. It doesn't matter if your business server uses uniCloud or not, but the professional push server is on uniCloud.

- 如果您的后台业务使用uniCloud开发，那理解比较简单。
- If your backend business is developed using uniCloud, it is easier to understand.
- 如果您的后台业务没有使用uniCloud，那么也需要在uni-app项目中创建uniCloud环境，在HBuilderX中和dev的uni-push配置中均绑定相同服务空间，之前的业务仍然由客户端连接原有传统服务器，push相关功能则通过uniCloud服务空间实现。如果您之前使用过三方推送服务的话，可以理解为您的服务器不再调用个推服务器，而是改为调用uniCloud服务空间。
- If your background business does not use uniCloud, you also need to create an uniCloud environment in the uni-app project, bind the same service space in HBuilderX and the uni-push configuration of dev, and the previous business is still connected by the client. There are traditional servers, and push-related functions are implemented through the uniCloud service space. If you have used the three-party push service before, it can be understood that your server no longer calls the personal push server, but instead calls the uniCloud service space.

在uniCloud的云函数中，加载扩展库 `uni-cloud-push`，直接调用相关API，无需额外的服务端配置。而传统服务器开发者需要把这个[云函数URL化](https://uniapp.dcloud.io/uniCloud/http.html)后变成http接口，再由原来的php或java代码调用这个http接口。
In the cloud function of uniCloud, load the extension library `uni-cloud-push`, and directly call the related API without additional server configuration. Traditional server developers need to convert this [cloud function URL](https://uniapp.dcloud.io/uniCloud/http.html) into an http interface, and then call this http interface from the original php or java code.

注意：`Android包名、签名（SHA1指纹）`或`iOS Bundle ID`，必须确保与客户端manifest.json配置的证书相关信息一致，否则可能会导致无法正常打包或收到推送消息。
Note: The `Android package name, signature (SHA1 fingerprint)` or `iOS Bundle ID` must be consistent with the certificate-related information configured in the manifest.json of the client, otherwise, the package may not be properly packaged or the push message may not be received.

参考资料：[关于Android证书](https://ask.dcloud.net.cn/article/35985#server)、[iOS证书申请](https://ask.dcloud.net.cn/article/152)
Reference materials: [About Android certificate](https://ask.dcloud.net.cn/article/35985#server), [iOS certificate application](https://ask.dcloud.net.cn/article/152)

开通完成后，后续仍可以在这里修改以上信息。
After the activation is completed, you can still modify the above information here.

开通App的完整流程较多，但开通web和小程序的流程比较简单，即开即用。可以快速将uni-app项目运行到浏览器或小程序体验。
There are many complete processes for opening an app, but the process for opening a web and a small program is relatively simple, and it can be used immediately. A uni-app project can be quickly run into a browser or applet experience.

## 第二步：配置  
## Step 2: Configuration
- iOS 平台还需要上传专用的推送证书
- iOS platform also needs to upload a dedicated push certificate
	+ 证书申请：如何获取推送证书请参考个推官方文档教程 [iOS证书配置指南](https://docs.getui.com/getui/mobile/ios/apns/)
	+ Certificate application: how to obtain the push certificate, please refer to the official document tutorial [iOS certificate configuration guide](https://docs.getui.com/getui/mobile/ios/apns/)
	+ 证书上传入口：消息推送-“配置管理”-“应用配置”
	+ Certificate upload entry: message push - "configuration management" - "application configuration"
![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/ios.png)
- APP手机厂商推送参数设置（可选，应用进程离线时推送通道）
- APP mobile phone manufacturer push parameter settings (optional, push channel when the application process is offline)
	![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/20220728173149.png)
	uniPush集成并统一了各个手机厂商的系统级推送，目前支持魅族、OPPO、华为、小米、VIVO。如果需要使用厂商推送，需要先在各厂商开发者平台申请。详见[厂商推送应用创建配置流程](https://www.dcloud.io/docs/a/unipush/manufacturer.pdf)
	uniPush integrates and unifies the system-level push of various mobile phone manufacturers, and currently supports Meizu, OPPO, Huawei, Xiaomi, and VIVO. If you need to use manufacturer push, you need to apply on the developer platform of each manufacturer first. For details, see [Manufacturer Push Application Creation and Configuration Process](https://www.dcloud.io/docs/a/unipush/manufacturer.pdf)


## 第三步：客户端操作
## Step 3: Client Operation
### 名词解释
### Glossary
#### 离线推送@offline
#### Offline push @offline
<img width="30%" style="margin-left:20px;margin-top:0;float:right;" src="https://web-assets.dcloud.net.cn/unidoc/zh/20220325203150.jpg"/>

仅APP端支持，当应用被用户关闭，或者运行到后台时，手机厂商为了省电或释放内存，会终止App后台联网。
It is only supported on the APP side. When the application is closed by the user or runs in the background, the mobile phone manufacturer will terminate the APP background networking in order to save power or release memory.

消息将通过不会离线的手机厂商通道，下发到手机系统推送服务模块；
The message will be sent to the mobile phone system push service module through the mobile phone manufacturer channel that will not be offline;

此时客户端会自动创建通知栏消息，展示在系统消息中心（如图所示）但客户端监听不到消息内容；当用户点击通知栏消息后，会将APP唤醒此时APP才能监听到消息内容。
At this time, the client will automatically create a notification bar message and display it in the system message center (as shown in the figure), but the client cannot monitor the content of the message; when the user clicks the notification bar message, the APP will wake up and the APP can only monitor the message. content.

#### 在线推送@online
#### Online push @online
当应用在线时，不会创建“通知栏消息”，此时客户端会立即监听到消息内容。
When the application is online, no "notification bar message" will be created, and the client will immediately monitor the content of the message.

如果你希望当应用在线时，也通过“通知栏消息”来提醒用户；可以通过以下两种方式实现：
If you want to remind the user through the "notification bar message" when the app is online; you can do it in the following two ways:
1. 监听到消息内容后，根据业务需要自己判断是否要创建“通知栏消息”，需要就调用创建本地消息API [uni.createPushMessage](https://uniapp.dcloud.net.cn/api/plugins/push.html#createpushmessage)手动创建通知栏消息。
1. After listening to the content of the message, you can decide whether to create a "notification bar message" according to your business needs, and you can call the API [uni.createPushMessage](https://uniapp.dcloud.net.cn/api/plugins) to create a local message. /push.html#createpushmessage) to manually create a notification bar message.
2. 服务端执行推送时，传递参数`force_notification:true`，客户端就会自动创建“通知栏消息”（此时你监听不到消息内容），当用户点击通知栏消息后，APP才能监听到消息内容。
2. When the server executes the push, pass the parameter `force_notification:true`, and the client will automatically create a "notification bar message" (you cannot listen to the message content at this time). When the user clicks the notification bar message, the APP can listen to it. Message content.

以上两种方案各有优劣，方案一更加灵活；比如：客服功能，客户端接收到聊天消息时，应用如果已经打开聊天对话页面，就直接将监听到的推送内容，渲染到页面。如果应用未打开聊天页，则调用api创建“通知栏消息”提醒用户；此时你还可以执行一些其他逻辑，比如将tabBar的消息中心加红点等。方案二比较简便，客户端无需额外编写代码，自动创建通知栏消息；但仅适用于不关心客户端行为就创建“通知栏消息”的场景，如广告营销内容的推送等。
The above two solutions have their own advantages and disadvantages, and the first solution is more flexible; for example, in the customer service function, when the client receives a chat message, if the application has already opened the chat dialog page, it will directly render the monitored push content to the page. If the app does not open the chat page, call the api to create a "notification bar message" to remind the user; at this time, you can also perform some other logic, such as adding a red dot to the message center of the tabBar. Option 2 is relatively simple. The client does not need to write additional code to automatically create notification bar messages; but it is only suitable for scenarios where "notification bar messages" are created without caring about client behavior, such as the push of advertising and marketing content.

### 客户端启用uniPush2.0
### The client enables uniPush2.0

操作步骤打开`manifest.json` - `App模块配置` - 中勾选`uniPush 2.0` - `重新编译项目`
![](https://web-assets.dcloud.net.cn/unidoc/zh/20220525105852.jpg)
![](https://web-assets.dcloud.net.cn/unidoc/zh/20220525105914.jpg)
![](https://web-assets.dcloud.net.cn/unidoc/zh/87accaa0-e6a4-4916-9a74-87719142abaa.jpg)
其他小程序启用方式参考微信小程序，这里不一一列举
Refer to WeChat Mini Programs for other ways of enabling small programs, which will not be listed here.

在`manifest.json`中配置完之后，需要重新编译项目，即：点击如图`重新运行`按钮
After configuring in `manifest.json`, you need to recompile the project, that is: click the `Rerun` button as shown in the figure

<img width="50%" style="max-width:260px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/WechatIMG589.jpeg"/>


#### 小程序中使用uni-push2.0的白名单配置@useinmp
#### Whitelist configuration @useinmp using uni-push2.0 in the applet

uni-push在web和小程序端就是个websocket；各家小程序平台，均要求在小程序管理后台配置小程序应用的联网服务器域名，否则无法联网。
uni-push is a websocket on the web and applet side; each applet platform requires the configuration of the network server domain name of the applet application in the applet management background, otherwise it will not be able to connect to the Internet.

根据下表，在小程序管理后台设置socket合法域名。下表的域名均为个推自有域名，并非DCloud所属域名。
According to the following table, set the socket legal domain name in the applet management background. The domain names in the table below are all self-owned domain names, not the domain names of DCloud.

- HBuilderX 3.6.15以下版本（小程序和web端 WebSocket连接不稳定，请尽快升级）
- Versions below HBuilderX 3.6.15 (the connection between the MiniApp and the web-side WebSocket is unstable, please upgrade as soon as possible)

|域名|端口|
|Domain Name|Port|
|--	|--	|
|wshz.getui.net|5223|
|wshz.gepush.com|5223|


- HBuilderX 3.6.15及以上版本
- HBuilderX 3.6.15 and above

|域名|端口|
|Domain Name|Port|
|--	|--	|
|wshzn.gepush.com |5223|


### 客户端监听推送消息@listener  
### The client listens for push messages @listener
监听推送消息的代码，需要在收到推送消息之前被执行。所以应当写在应用一启动就会触发的[应用生命周期](https://uniapp.dcloud.io/collocation/App.html#applifecycle)`onLaunch`中。
The code that listens for push messages needs to be executed before receiving push messages. So it should be written in the [application lifecycle](https://uniapp.dcloud.io/collocation/App.html#applifecycle)`onLaunch` that will be triggered as soon as the application starts.

示例代码：
Sample code:
```js 
//文件路径：项目根目录/App.vue
//File path: project root directory/App.vue
export default {
	onLaunch: function() {
		console.log('App Launch')
		uni.onPushMessage((res) => {
			console.log("收到推送消息：",res) //监听推送消息
		})
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	}
}
```

> 先跟着示例代码简单体验，详细的uni.onPushMessage API介绍[详情参考](/api/plugins/push.html#onpushmessage)
> Follow the sample code for a simple experience first, detailed uni.onPushMessage API introduction [details reference](/api/plugins/push.html#onpushmessage)

**APP端真机运行注意:** 
**Note for real machine operation on the APP side:**
- 如果启用了离线推送，必须：经过发行原生app云打包后，客户端才能监听到推送消息。标准HBuilder运行基座无法使用。
- If offline push is enabled, the client can listen to push messages only after the native app is packaged in the cloud. The standard HBuilder runtime base cannot be used.
- 离线推送时，Android手机厂商通道推送[需设置消息渠道id](/uniCloud/uni-cloud-push/api.html#channel)，否则会被限制频次和静默推送(静音且需下拉系统通知栏才可见)
- When offline push, the Android phone manufacturer channel push [need to set the message channel id](/uniCloud/uni-cloud-push/api.html#channel), otherwise it will be limited frequency and silent push (mute and need to pull down the system notification bar only visible)
- 如果Android应用进入后台后（App未销毁），点击通知消息无法拉起App，请检查设备是否有禁止后台弹出界面，路径>>设置-应用管理-测试应用-权限管理-后台弹出界面，(一般是小米、oppo、
- If the Android app enters the background (the App is not destroyed), and the app cannot be launched by clicking the notification message, please check whether the device has a pop-up interface that prohibits the background. Path >> Settings - Application Management - Test Application - Permission Management - Background pop-up interface, ( Usually millet, oppo,
vivo设备)。
vivo devices).

### 获取客户端推送标识  
### Get client push ID
假如我要给“张三”打电话，那就需要知道对方的电话标识，即电话号码是多少。
If I want to call "Zhang San", I need to know the phone ID of the other party, that is, what the phone number is.
同理，要给某个客户端推送消息，也需要知道该设备的客户端推送标识。
Similarly, to push a message to a client, you also need to know the client push identifier of the device.

> 先跟着示例代码简单体验，详细的uni.getPushClientId API介绍[详情参考](/api/plugins/push.md)
> Follow the sample code for a simple experience first, the detailed uni.getPushClientId API introduction [details reference](/api/plugins/push.md)
代码示例：
Code example:
```js
// uni-app客户端获取push客户端标记
// uni-app client gets push client tag
uni.getPushClientId({
	success: (res) => {
		let push_clientid = res.cid
		console.log('客户端推送标识:',push_clientid)
	},
	fail(err) {
		console.log(err)
	}
})
```
## 第四步：服务端推送消息  
## Step 4: Server push message
消息推送属于敏感操作，只能直接或间接由服务端触发。传统的三方push服务，需要开发者在服务端配置密钥或证书，根据服务器端文档签名获取token，再向相关URL接口发起网络请求......
Message push is a sensitive operation that can only be triggered directly or indirectly by the server. The traditional three-party push service requires the developer to configure a key or certificate on the server side, obtain the token according to the server-side document signature, and then initiate a network request to the relevant URL interface...

而UniPush2.0，开发者无需关心证书、签名、服务器端文档，使用简单。云函数通过 uni-push服务端sdk，即`uni-cloud-push`的API即可直接执行uniPush所有操作。
With UniPush 2.0, developers do not need to care about certificates, signatures, and server-side documents, and it is easy to use. Cloud functions can directly perform all operations of uniPush through the uni-push server SDK, that is, the API of `uni-cloud-push`.

uni-push的服务端sdk的体积不小，没有内置在云函数中。在需要操作uni-push的云函数里，开发者需手动配置`uni-cloud-push`扩展库。
The server-side SDK of uni-push is not small in size, and it is not built into the cloud function. In cloud functions that need to operate uni-push, developers need to manually configure the `uni-cloud-push` extension library.
（uniCloud扩展库，是uniCloud自带API中不常用且包体积较大的部分，被独立为扩展库，可以由开发者自行选择是否使用该扩展库）
(uniCloud extension library, which is not commonly used in uniCloud's own API and has a large package size, is an independent extension library, and developers can choose whether to use this extension library)

- HBuilderX 中新建云函数时可选择uni-cloud-push扩展库，或者如下图所示在已有的云函数目录点右键选择“管理公共模块或扩展库依赖”
- When creating a new cloud function in HBuilderX, you can choose the uni-cloud-push extension library, or right-click on the existing cloud function directory as shown in the figure below and select "Manage Common Module or Extension Library Dependencies"

<img style="width:80%;max-width:600px;margin:0 10%" src="https://web-assets.dcloud.net.cn/unidoc/zh/uniPush-glkzk.jpg"/>
</br>
<img style="width:80%;max-width:450px;margin:0 10%" src="https://web-assets.dcloud.net.cn/unidoc/zh/uniPush-kzk.jpg"/>
</br>

下面是一个开启了`uni-cloud-push`扩展库的云函数的package.json示例，**注意不可有注释，以下文件内容中的注释仅为说明，如果拷贝此文件，切记去除注释**
The following is a package.json example of a cloud function with the `uni-cloud-push` extension library enabled. **Note that there should be no comments. The comments in the following file content are for illustration only. If you copy this file, remember to remove the comments**

```json
{
	"name": "test",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"extensions": {
		"uni-cloud-push": {} // 配置为此云函数开启uni-cloud-push扩展库，值为空对象留作后续追加参数，暂无内容
	},
	"author": ""
}
```

**注意：扩展库依赖3张opendb表：`opendb-tempdata`,`opendb-device`,`uni-id-device`。公测版uniCloud，执行扩展库会自动创建。如果你使用的是uniCloud正式版需要自己创建这3张表。**
**Note: The extension library depends on 3 opendb tables: `opendb-tempdata`, `opendb-device`, `uni-id-device`. In the public beta version of uniCloud, the execution extension library will be automatically created. If you are using the official version of uniCloud, you need to create these 3 tables yourself. **

云函数中调用uni-cloud-push扩展库的`sendMessage`方法，向客户端推送消息
Call the `sendMessage` method of the uni-cloud-push extension library in the cloud function to push messages to the client

```js
// 简单的使用示例
// simple usage example
'use strict';
const uniPush = uniCloud.getPushManager({appId:"__UNI__XXXXXX"}) //注意这里需要传入你的应用appId
exports.main = async (event, context) => {
	return await uniPush.sendMessage({
		"push_clientid": "xxx", 	//填写上一步在uni-app客户端获取到的客户端推送标识push_clientid
		"title": "通知栏显示的标题",	
		"content": "通知栏显示的内容",
		"payload": {
			"text":"体验一下uni-push2.0"
		}
	})
};
```

在云函数文件目录右键（或按快捷键ctrl + r）-> `上传并运行云函数`，此时你的客户端将收到推送消息（应用关闭时为通知栏消息，在线时代码监听到推送消息）
Right-click on the cloud function file directory (or press the shortcut key ctrl + r) -> `Upload and run cloud function`, at this time your client will receive a push message (the notification bar message when the application is closed, and the code listens when it is online). forward news)

> 先跟着示例代码简单体验一下，详细的uniPush.sendMessage API介绍[详情参考](/uniCloud/uni-cloud-push/api.html#uni-cloud-push)
> First follow the sample code for a simple experience, detailed uniPush.sendMessage API introduction [details reference](/uniCloud/uni-cloud-push/api.html#uni-cloud-push)

如果按步骤操作完毕，此时你运行起来的uni-app客户端就会打印出“收到推送消息：xxxx”。如遇异常，可以重新运行一遍。
If the steps are completed, the uni-app client you run at this time will print out "Push message received: xxxx". In case of exception, you can run it again.

# 最佳实践
# Best Practices
上一章，演示了基于“客户端推送标识”的消息推送，仅为方便理解和体验；在业务开发中，通常是指定消息的接收人，而不是某个设备。
In the previous chapter, the message push based on the "client push identity" was demonstrated, which is only for the convenience of understanding and experience; in business development, the recipient of the message is usually specified, not a certain device.

如果项目使用[uni-id-pages](https://ext.dcloud.net.cn/plugin?id=8577)，即可直接指定基于uni-id的user_id、user_tag，并可筛选设备的平台、登录信息是否有效等，执行推送消息。
If the project uses [uni-id-pages](https://ext.dcloud.net.cn/plugin?id=8577), you can directly specify user_id and user_tag based on uni-id, and filter the platform, Whether the login information is valid, etc., execute the push message.

uni-id-pages已经内置：在登录账号、退出账号、切换账号、token续期、注销账号5个时机，管理uni-id-device表、opendb-device表与user_id、push_clientid、platform、os_name等字段的映射关系。[详情参考](/uniCloud/uni-cloud-push/mate)
uni-id-pages has been built-in: manage uni-id-device table, opendb-device table and fields such as user_id, push_clientid, platform, os_name, etc. mapping relationship. [Details reference](/uniCloud/uni-cloud-push/mate)

此外uni-push2.0 还提供了uni-admin中的web控制台[uni-push-admin](https://ext.dcloud.net.cn/plugin?name=uni-push-admin)。如图，包含消息推送、推送统计等功能的，
In addition, uni-push2.0 also provides a web console in uni-admin [uni-push-admin](https://ext.dcloud.net.cn/plugin?name=uni-push-admin). As shown in the figure, it includes functions such as message push and push statistics.

![](https://web-assets.dcloud.net.cn/unidoc/zh/f981f620-f9de-11ec-8412-6b7a68f609ab_0.jpg)
