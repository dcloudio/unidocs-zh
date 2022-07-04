>本文为uni-push2.0的介绍，如果旧项目需要使用老版本的uniPush1.0详情：[https://ask.dcloud.net.cn/article/35622](https://ask.dcloud.net.cn/article/35622)

<div style="display: flex;align-items: center;">
	<img width="20px" height="21px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/759713d0-4f2d-11eb-a16f-5b3e54966275.png">
	&nbsp;
	<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=EErVqoKDps4QSo5M0mm_OfzdA7JqtQU4&jump_from=webapi">官方QQ交流群：757742921</a>
</div>

# 简介
## 概述
`uni-push`是DCloud联合个推公司推出的、全端的、云端一体的统一推送服务。

1. 客户端方面，`uni-push`支持App、web、小程序。App端还内建了苹果、华为、小米、OPPO、VIVO、魅族、谷歌FCM等手机厂商的系统推送和个推第三方推送。（uni-push 1.0不支持小程序端、web端以及App端仅启用轻量级的在线推送）
2. 服务端方面，uni-push2.0起支持uniCloud云端一体，无需再编写复杂代码轻松完成push。而uni-push1.0仅支持使用传统服务器开发语言如php，未和客户端有效协同，流程比uni-push2.0繁琐。
3. uni-push还自带一个web控制台。不写代码也可以在web页面发推送。uni-push1.0的web控制台在[dev.dcloud.net.cn](https://dev.dcloud.net.cn)。uni-push2.0的web控制台是开源的，属于uni-admin插件[详见](https://ext.dcloud.net.cn/plugin?name=uni-push-admin)。

## 什么是push？
push，指服务器主动向客户端发送消息的技术。无需客户端持续轮询服务器，即可获得即时数据。

轮询有很多弊端：1) 客户端应用必须实时在线；2) 手机端耗电严重；3) 服务器负载高且浪费资源

手机的通知栏、小程序的订阅消息都是一种push，由手机操作系统或微信在底层提供了push通道，屏蔽了轮询的各种弊端。你的应用可以被关闭，只要手机有网，操作系统提供的push通道即是实时在线的。

提醒：web浏览器的webnotification其实是一个本地通知栏功能，浏览器厂商没有提供push通道。

当客户端在线时，push通过socket协议实现。当客户端离线时，服务器找不到客户端，开发者无法自己实现推送，只能依托手机操作系统、小程序底层提供的离线消息推送，调用指定的手机厂商或小程序厂商的服务器接口来发送消息。

所以一个push系统需要3部分协作：开发者的业务服务器 + 专业push服务器 + 开发者的客户端应用。

其主要流程是：

1. 开发者的业务服务器向专业push服务器发送指令，告知需要向哪些客户端发送什么样的消息
2. 专业push服务器再向客户端发送消息
3. 手机用户在操作系统的通知栏中看到push消息，点击后呼起客户端应用，客户端代码才能接收响应；如果是小程序的话，则是在微信消息里看到订阅消息，点击后呼起小程序。
<div style="float:clear;">
	<img width="30%" style="margin-left:5%;max-width:260px;" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/3bb2b4c4-1b73-426d-b713-f076aff80868.jpg"/>
	<img width="30%" style="margin-left:5%;max-width:260px;" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/368bb2ca-1213-4895-9ad7-f39e28ee8b5a.jpg"/>
</div>

由于手机厂商众多，他们各自都有不同的推送服务，包括Apple、google（仅能在海外使用）、华为、小米、oppo、vivo、魅族，以及还有一些没有专业推送服务的中小手机品牌。他们对App后台耗电都有查杀机制，除了微信等大应用，普通应用很难常驻后台。

如果开发者把上述每个平台的客户端和服务器的SDK都对接一遍，还自己处理没有push服务的中小品牌手机，那过于困难了。所以业内有专业的推送服务厂商把各种手机厂商的通道封装成一套统一的API，如个推（属于上市公司每日互动）；同时这些三方专业推送厂商还提供了专业socket通道。当应用在线时，也可以直接通过socket下发消息。否则开发者需要写很多判断代码、搭建socket服务器、处理在线时和离线时各种差异。

DCloud与个推深度合作，为uni-app的开发者提供了比传统方案便利甚多的统一推送方案`uni-push`，利用云端一体一起配合改造的优势，同时提供基于uniCloud的push服务器和基于uni-app的push客户端，两者高效协同，极大的简化了push的使用。

> 注：`uni-push`的服务器稳定性是由阿里云serverless、腾讯云serverless、个推来保障的，都是日活过亿的上市公司，无需担心稳定性。

如下图所示：
首先开发者的uniCloud应用服务器向uniPush服务器发送push消息，然后
- 如果客户端应用在线，客户端通过socket直接收到push在线消息；
- 客户端应用不联网时，`uni-push`服务器根据客户端类型，把push消息发给某个手机厂商的push服务器或小程序的订阅消息服务器；然后厂商push通道会把这条消息发到手机的通知栏或微信的订阅消息里；手机用户点击通知栏消息或小程序订阅消息后，启动App或小程序，客户端才能收到离线消息。
	<img width="100%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1b3b17d1-d6fb-4d26-96d4-c0dbc4300aad.png"/></br>


总结下`uni-push`提供的功能：
1. 一个在线的socket下行服务，无论app、小程序、web，只要在线，都可以从服务器推送消息。尤其对于uniCloud用户，这个免费socket下行服务用途很多。
2. app平台，提供app离线时的推送，聚合了所有已知手机厂商的push通道；对于未提供push通道的小手机厂商，提供后台常驻进程接收push消息（受手机rom节电设置约束）
3. 小程序平台，提供了小程序离线时的订阅消息推送能力的封装（暂未实现）
4. web平台，提供了webnotification的封装。当标签卡在后台时（注意不是关闭时），仍然可以在屏幕上弹出通知栏（暂未实现）
5. 快应用平台，提供了push的封装（暂未实现）
6. 一个[uni-admin](/uniCloud/admin)插件，开源的web控制台，无需编程，可视化界面发送push消息 [详见](https://ext.dcloud.net.cn/plugin?name=uni-push-admin)

在[uni-starter](/uniCloud/uni-starter)里，还提供了app push权限判断、申请、开关设置、消息中心（暂未实现），搭配使用可以大量降低开发工作量。

注意：app申请创建通知栏消息、web申请弹出通知，均会由操作系统或浏览器自动弹窗询问用户是否同意。小程序下需要手机用户主动发起订阅行为，才能送达消息。

`uni-push`即降低了开发成本，又提高了push送达率，还支持全平台，并且免费，是当前推送的最佳解决方案。

# 应用场景
- 用户消息通知  
当 APP 用户相关状态或者系统功能状态变化时（如用户订单通知、交易提醒、物流通知、升级提醒、社交互动提醒等），可对用户进行及时告知，或者促使用户完成特定操作。

- 离线语音播报  
它也是一种用户消息推送，实现原理其实是自定义通知提醒铃声

- 营销促活通知  
在日常营销推广、促销活动等场景下（如双11大促、产品上新、重要资讯等），APP可对目标用户进行定向通知栏消息+应用内消息推送，吸引用户参与活动，提升日活。

- 基于uniCloud的IM、聊天、客服、棋牌游戏交互等  
DCloud基于`uni-push2`在开发`uni-im`，后续会开源，敬请关注。
另外棋牌游戏等，需要客户端被动接收消息的需求都可以用`uni-push`实现。


# 常见问题
有了uni-push，开发者不应该再使用其他push方案了。但我们发现很多开发者有误解，导致还在错误使用其他推送。

- 常见误解1：“uni-push的专业性，和专业的个推、极光等服务可相比吗？”

	答：uni-push是由个推将其本来收费的（vip套餐） push产品，免费提供给了DCloud的开发者。它与个推vip push的只有2个区别：1、免费；2、账户使用的是DCloud开发者账户，而无需再重新注册个推账户。个推是A股上市公司，专业性在推送领域领先。

- 常见误解2：“uni-push好麻烦，我就喜欢个推、极光这种简单sdk，不想去各个rom厂商去申请一圈”

	答：uni-push不建立在申请手机厂商授权的基础上，如果你不申请那些，使用起来和用普通的push是一样的。但是要特别注意，推送行业的现状就是：不集成rom厂商的推送，就无法在App离线时发送push。按照普通push模式使用，后果就是在华为、小米、OPPO、VIVO、魅族上发不了离线消息。

- 常见误解3：“uni-push的送达率高吗？是否可以付费来提升送达率，个推是有付费提升送达率的方法的”

	答：前文已经说了。个推的付费提升送达率的产品就是vip push，而uni-push就是个推的vip Push。DCloud通过谈判免费给DCloud的开发者使用了。

- uni-push可以完整替代socket吗？

	答：能部分替代。uni-push客户端接收消息的通讯协议属于websocket；但业务服务端向uniPush服务发送消息用的是http通讯协议，会有1-2秒的延时。需要超低延迟的应用场景，如多人交互远程画板不合适。但对于普通的im消息、聊天、通知都没有问题。
