::: tip 提示
本文为`uni-push 2.0`（需要HBuilderX 3.5.1 及其以上版本支持）的介绍，如果旧项目需要使用老版本的`uni-push 1.0`，另见：[uni-push 1.0](unipush-v1.md)
:::

## uni-push介绍
[查看uni-push介绍](unipush.md)

## 概述
`uni-push 2.0`是DCloud推出的、全端的、云端一体的统一推送服务。

1. 客户端方面，`uni-push 2.0`支持App、web、小程序。
    * App端，内置了苹果、华为、小米、OPPO、VIVO、魅族、谷歌FCM等手机厂商的系统推送和个推第三方推送
    * 小程序端，内置了socket在线推送。如需模板消息/订阅消息，另见[uni-subscribemsg](https://doc.dcloud.net.cn/uniCloud/uni-subscribemsg.html)
    * web端，内置了socket在线推送
  （uni-push1仅支持app，且app必须包含个推原生sdk。uni-push2在app端如不需要厂商推送，只需在线推送，无需集成个推原生sdk）
2. 服务端方面，`uni-push 2.0`支持uniCloud云端一体，无需再编写复杂代码轻松完成push。
  （uni-push1.0仅支持使用传统服务器开发语言如php，未和客户端有效协同，流程比uni-push2.0繁琐）
3. uni-push还自带一个web控制台。不写代码也可以在web页面发推送。uni-push1.0的web控制台在[dev.dcloud.net.cn](https://dev.dcloud.net.cn)。uni-push2.0的web控制台是开源的，属于uni-admin插件[详见](https://ext.dcloud.net.cn/plugin?name=uni-push-admin)。

4. 如果你的项目由于特殊原因不能通过uniCloud的云函数使用uni-push2.0，你希望直接通过调用个推服务器推送消息。在这种情况下：
    - uni-app项目，需要使用老版的 [uni-push1.0](./unipush-v1.md) 。相关密钥获取方式：登录[开发者中心](https://dev.dcloud.net.cn)左侧菜单->`uni-push`->`uni-push 2.0（支持全端推送）`->`消息推送`->`应用配置`->`应用信息`
    - uni-app-x 项目，虽然只能使用 uni-push2.0，但支持在[开发者中心](https://dev.dcloud.net.cn)左侧菜单-`uni-push`->`uni-push 2.0（支持全端推送）`-> `厂商推送设置` 在顶端注意事项中，点击获取个推的MasterSecret

请注意，直接调用个推服务器进行推送可能需要更多的配置和操作步骤，具体请参考[调用个推服务器](./unipush-v1.md#request-getui)的相关文档。

## 为什么选择`uni-push 2.0`

由于手机厂商众多，他们各自都有不同的推送服务，包括Apple、google（仅能在海外使用）、华为、小米、oppo、vivo、魅族，以及还有一些没有专业推送服务的中小手机品牌。他们对App后台耗电都有查杀机制，除了微信等大应用，普通应用很难常驻后台。

如果开发者把上述每个平台的客户端和服务器的SDK都对接一遍，还自己处理没有push服务的中小品牌手机，那过于困难了。所以业内有专业的推送服务厂商把各种手机厂商的通道封装成一套统一的API，如个推（属于上市公司每日互动）；同时这些三方专业推送厂商还提供了高速socket通道。当应用在线时，也可以直接通过socket下发消息。否则开发者需要写很多判断代码、搭建socket服务器、处理在线时和离线时各种差异。

DCloud与个推（A股上市公司每日互动）深度合作，为uni-app的开发者提供了比传统方案便利甚多的统一推送方案`uni-push 2.0`，利用云端一体的优势，同时提供基于uniCloud的push服务器和基于uni-app的push客户端，两者高效协同，极大的简化了push的使用。

> 注：`uni-push`的服务器稳定性是由阿里云serverless、腾讯云serverless、个推来保障的，都是日活过亿的上市公司，无需顾虑稳定性。

如下图所示：
首先开发者的uniCloud应用服务器向uni-push服务器发送push消息，然后
- 如果客户端应用在线，客户端通过socket直接收到push在线消息；
- 客户端应用不联网时，`uni-push`服务器根据客户端类型，把push消息发给某个手机厂商的push服务器或小程序的订阅消息服务器；然后厂商push通道会把这条消息发到手机的通知栏或微信的订阅消息里；手机用户点击通知栏消息或小程序订阅消息后，启动App或小程序，客户端才能收到离线消息。
  ![img](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/cd3e676a-6a3b-44ea-9045-5bc058d0d8ae.png)#{width=100%}

总结下`uni-push`提供的功能：
1. 一个在线的socket下行服务，无论app、小程序、web，只要在线，都可以从服务器推送消息。尤其对于uniCloud用户，这个免费socket下行服务用途很多。
2. app平台，提供app离线时的推送，聚合了所有已知手机厂商的push通道；对于未提供push通道的小手机厂商，提供后台常驻进程接收push消息（受手机rom节电设置约束）
3. 小程序平台，目前提供了下行socket通道，后续会整合小程序离线时的订阅消息
4. web平台，目前提供了下行socket通道，后续会提供webnotification的封装。当标签卡在后台时（注意不是关闭时），仍然可以在屏幕上弹出通知栏。
5. 快应用平台，目前提供了下行socket通道，后续会提供离线push的封装
6. 一个[uni-admin](https://doc.dcloud.net.cn/uniCloud/admin)插件，开源的web控制台，无需编程，可视化界面发送push消息 [详见](https://ext.dcloud.net.cn/plugin?name=uni-push-admin)

在[uni-starter](https://doc.dcloud.net.cn/uniCloud/uni-starter)里，还提供了app push权限判断、申请、开关设置，搭配使用可以大量降低开发工作量。

注意：app申请创建通知栏消息、web申请弹出通知，均会由操作系统或浏览器自动弹窗询问用户是否同意。小程序下需要手机用户主动发起订阅行为，才能送达消息。

`uni-push`即降低了开发成本，又提高了push送达率，还支持全平台，并且免费，是当前推送的最佳解决方案。

## uni-push 2.0 使用uniCloud产生的费用说明@cost

`uni-push 2.0`本身并不收费，实际使用中需要依赖uniCloud云服务，而uniCloud价格很实惠：  
- 调用10000次云函数仅需0.0133元
- 调用10000次数据库查询仅需0.015元

可见价格之低，几乎可以忽略不计。

一次消息推送 = 1次云函数请求 + 最高3次数据库查询（最常用的基于user_id推送仅需一次查询，详情参考：[推送接口查库详解](https://doc.dcloud.net.cn/uniCloud/uni-cloud-push/mate.html#%E6%8E%A8%E9%80%81%E6%8E%A5%E5%8F%A3%E6%9F%A5%E5%BA%93%E8%AF%A6%E8%A7%A3)

即：最高(1 * 0.0133 + 3 * 0.015)/10000 = 0.00000583元/每次（注：给你的应用的所有注册用户群发消息算一次）  

详细的计费参考：[阿里云版uniCloud按量计费文档](https://doc.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)

## 快速上手@start
### 第一步：开通  
[查看开通文档](./uni-push/open.md)

### 第二步：配置  
- iOS 平台如需要使用推送功能，还需要上传专用的推送证书
- Android 平台如需要使用离线推送，需要配置APP手机厂商推送参数（可选，应用进程离线时推送通道）
  
以上配置，详见：[uni-push其它配置](uni-push/open.md#other-config)	

### 第三步：客户端操作
#### 名词解释
##### 离线推送@offline
<img width="30%" style="margin-left:20px;margin-top:0;float:right;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20220325203150.jpg"/>

仅APP端支持，当应用被用户关闭，或者运行到后台时，手机厂商为了省电或释放内存，会终止App后台联网。

消息将通过不会离线的手机厂商通道，下发到手机系统推送服务模块；

此时客户端会自动创建通知栏消息，展示在系统消息中心（如图所示）但客户端监听不到消息内容；当用户点击通知栏消息后，会将APP唤醒此时APP才能监听到消息内容。

##### 在线推送@online
当应用在线时，不会创建“通知栏消息”，此时客户端会立即监听到消息内容。

如果你希望当应用在线时，也通过“通知栏消息”来提醒用户；可以通过以下两种方式实现：
1. 监听到消息内容后，根据业务需要自己判断是否要创建“通知栏消息”，需要就调用创建本地消息API `uni.createPushMessage`(uni-app 框架[详情参考](https://uniapp.dcloud.io/api/plugins/push.html#createpushmessage)，uni-app x 框架[详情参考](https://uniapp.dcloud.io/uni-app-x/api/push.html#createpushmessage)) 手动创建通知栏消息。
2. 服务端执行推送时，传递参数`force_notification:true`，客户端就会自动创建“通知栏消息”（此时你监听不到消息内容），当用户点击通知栏消息后，APP才能监听到消息内容。

以上两种方案各有优劣，方案一更加灵活；比如：客服功能，客户端接收到聊天消息时，应用如果已经打开聊天对话页面，就直接将监听到的推送内容，渲染到页面。如果应用未打开聊天页，则调用api创建“通知栏消息”提醒用户；此时你还可以执行一些其他逻辑，比如将tabBar的消息中心加红点等。方案二比较简便，客户端无需额外编写代码，自动创建通知栏消息；但仅适用于不关心客户端行为就创建“通知栏消息”的场景，如广告营销内容的推送等。

##### 客户端类型@getuiPhoneType
个推的客户端类型是仅根据使用的sdk类型来判断的，分为两类：
1. native sdk（在`manifest.json`->`APP 模块配置`->`uniPush 2.0`配置界面勾选离线推送时启用的 sdk），获取到的 cid 的 phoneType 为 APP 类型。
2. jssdk（`manifest.json`->`APP 模块配置`->`uniPush 2.0`配置界面，仅勾选在线推送，未勾选离线推送时启用的 sdk），获取到的 cid 的 phoneType 均为小程序，而不管实际上你的客户端是 APP、小程序还是 web。

#### 客户端启用uni-push2.0
##### uni-app x 框架的App端@enable-x-app  
  标准基座不包含uni-push模块，如果需要使用此模块，应当在提交云打包时，项目代码中包含uni-push相关客户端api。[点此](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#treeshaking)了解uni-app x的摇树机制
  
  所以在开发调试时，需要先写一段包含uni-push相关客户端api代码，再打一个自定义基座。  
  
  例如：
  1. 先添加如下代码：
  ```js
  uni.getPushClientId({
    success(res) {
      console.log(res);
    },
    fail(err) {
      console.log(err)
    }
  })
  ```
  > 注意：此时由于运行的标准基座中，不包含uni-push模块，如果运行会报错，不用着急继续往下操作  
  2. 点击菜单栏的【发行】-【原生APP-云打包】然后再弹出的窗口中勾选【制作自定义调试基座】- 点击【打包】  
  3. 打包成功后，点击菜单栏的【运行】-【运行到手机或模拟器】-【运行到 Android App 基座】然后再弹出的窗口中勾选【使用自定义基座运行】-【运行】  
  
  接下来即可使用 uni-push 相关客户端 api

##### uni-app 框架App端@enable-app  
操作步骤打开`manifest.json` - `App模块配置` - 中勾选`uni-push 2.0` - `重新编译项目`
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20220525105852.jpg)

##### h5端
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20220525105914.jpg)

##### 微信小程序端
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/87accaa0-e6a4-4916-9a74-87719142abaa.jpg)


其他小程序启用方式参考微信小程序，这里不一一列举

在`manifest.json`中配置完之后，需要重新编译项目，即：点击如图`重新运行`按钮

<img width="50%" style="max-width:260px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/WechatIMG589.jpeg"/>


##### 小程序中使用uni-push2.0的白名单配置@useinmp

uni-push在web和小程序端就是个websocket；各家小程序平台，均要求在小程序管理后台配置小程序应用的联网服务器域名，否则无法联网。

根据下表，在小程序管理后台设置socket合法域名。下表的域名均为个推自有域名，并非DCloud所属域名。

- HBuilderX 3.6.15以下版本（小程序和web端 WebSocket连接不稳定，请尽快升级）

|域名|端口|
|--	|--	|
|wshz.getui.net|5223|
|wshz.gepush.com|5223|


- HBuilderX 3.6.15及以上版本

|域名|端口|
|--	|--	|
|wshzn.gepush.com |5223|
|wshzn.getui.net |5223（3.8.5新增）|


#### 客户端监听推送消息@listener  
监听推送消息的代码，需要在收到推送消息之前被执行。所以应当写在应用一启动就会触发的[应用生命周期](https://uniapp.dcloud.io/collocation/App.html#applifecycle)`onLaunch`中。

示例代码：
```js 
// 文件路径：项目根目录App.vue/uvue
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

> 先跟着示例代码简单体验，详细的uni.onPushMessage API介绍：uni-app 框架[详情参考](api/plugins/push.md#onpushmessage)，uni-app x 框架[详情参考](https://doc.dcloud.net.cn/uni-app-x/api/push.html#onpushmessage)

**APP端真机运行注意:** 
- 如果启用了离线推送，必须：经过发行原生app云打包后，客户端才能监听到推送消息。标准HBuilder运行基座无法使用。
- 如果Android应用进入后台后（App未销毁），点击通知消息无法拉起App，请检查设备是否有禁止后台弹出界面，路径>>设置-应用管理-测试应用-权限管理-后台弹出界面，(一般是小米、oppo、
vivo设备)。

#### 获取客户端推送标识  
假如我要给“张三”打电话，那就需要知道对方的电话标识，即电话号码是多少。
同理，要给某个客户端推送消息，也需要知道该设备的客户端推送标识。

> 先跟着示例代码简单体验，详细的uni.getPushClientId API介绍：uni-app 框架[详情参考](api/plugins/push.md#getpushclientid)，uni-app x 框架[详情参考](https://doc.dcloud.net.cn/uni-app-x/api/push.html#getpushclientid)
代码示例：
```js
// uni-app客户端获取push客户端标记
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
### 第四步：服务端推送消息  
消息推送属于敏感操作，只能直接或间接由服务端触发。传统的三方push服务，需要开发者在服务端配置密钥或证书，根据服务器端文档签名获取token，再向相关URL接口发起网络请求......

而uni-push2.0，开发者无需关心证书、签名、服务器端文档，使用简单。云函数通过 uni-push服务端sdk，即`uni-cloud-push`的API即可直接执行uni-push所有操作。

uni-push的服务端sdk的体积不小，没有内置在云函数中。在需要操作uni-push的云函数里，开发者需手动配置`uni-cloud-push`扩展库。
（uniCloud扩展库，是uniCloud自带API中不常用且包体积较大的部分，被独立为扩展库，可以由开发者自行选择是否使用该扩展库）

- HBuilderX 中新建云函数时可选择uni-cloud-push扩展库，或者如下图所示在已有的云函数目录点右键选择“管理公共模块或扩展库依赖”

<img style="width:80%;max-width:600px;margin:0 10%" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uniPush-glkzk.jpg"/>
</br>
<img style="width:80%;max-width:450px;margin:0 10%" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uniPush-kzk.jpg"/>
</br>

下面是一个开启了`uni-cloud-push`扩展库的云函数的package.json示例，**注意不可有注释，以下文件内容中的注释仅为说明，如果拷贝此文件，切记去除注释**

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

云函数中调用uni-cloud-push扩展库的`sendMessage`方法，向客户端推送消息

```js
// 简单的使用示例
'use strict';
const uniPush = uniCloud.getPushManager({appId:"__UNI__XXXXXX"}) //注意这里需要传入你的应用appId，用于指定接收消息的客户端
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

在云函数文件目录右键（或按快捷键ctrl + r）-> `运行-本地云函数`，此时你的客户端将收到推送消息（应用关闭时为通知栏消息，在线时代码监听到推送消息）

> 先跟着示例代码简单体验一下，详细的uniPush.sendMessage API介绍[详情参考](https://doc.dcloud.net.cn/uniCloud/uni-cloud-push/api.html#uni-cloud-push)

如果按步骤操作完毕，此时你运行起来的uni-app客户端就会打印出“收到推送消息：xxxx”。如遇异常，可以重新运行一遍。

## 最佳实践
上一节，演示了基于“客户端推送标识”的消息推送，仅为方便理解和体验；在业务开发中，通常是指定消息的接收人，而不是某个设备。

如果项目使用[uni-id-pages](https://ext.dcloud.net.cn/plugin?id=8577)或 [uni-id-pages-x](https://ext.dcloud.net.cn/plugin?name=uni-id-pages-x)，即可直接指定基于uni-id的user_id、user_tag，并可筛选设备的平台、登录信息是否有效等，执行推送消息。

uni-id-pages/uni-id-pages-x 已经内置了：在登录账号、退出账号、切换账号、token续期、注销账号5个时机，管理uni-id-device表、opendb-device表与user_id、push_clientid、platform、os_name等字段的映射关系。[详情参考](https://doc.dcloud.net.cn/uniCloud/uni-cloud-push/mate.html)  

::: warning 注意  
  以上内置逻辑，在uni-id-pages下，会自动判断是否启用push模块自动执行；但uni-id-pages-x下，需手动在:`/uni_modules/uni-id-pages-x/init.uts`导入 autoReportPushClientId 模块。  
:::

此外`uni-push 2.0` 还提供了uni-admin中的web控制台[uni-push-admin](https://ext.dcloud.net.cn/plugin?name=uni-push-admin)。包含消息推送、推送统计等功能，而且是开源的，可自定义。如图：

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/f981f620-f9de-11ec-8412-6b7a68f609ab_0.jpg)

## 常见问题
[参考文档](unipush.md#faq)

**使用有其他疑问**，欢迎扫码加入 uni-push2.0 微信交流群讨论：
    <br/><img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/support.jpg" width="250"/>
