# 快速上手

本文通过4个步骤，带领你开通与配置uni-push2.0并简单体验使用流程。

## 第一步：开通 uniPush
uni-push产品有2个入口：
1. 通过 HBuilderX 进入

	打开 HBuilderX，双击项目中的 “manifest.json” 文件，选择“App 模块配置”，向下找到“Push(消息推送)”，勾选后，点击 “uniPush” 下面的配置链接。如下图所示：
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/27015d7e-33e6-4596-a6bd-36ffa616a321.jpg)
2. 通过开发者中心进入
	
	使用 HBuilder 账号登录 [开发者中心](https://dev.dcloud.net.cn) ，登录后
	会进入“我创建的应用”列表，如下图所示：
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/51d70683-fef6-4990-a9a7-4d5d7cc10316.jpg)
	点击要操作的应用的应用名称可进入应用管理页面，点击左侧导航中的“uniPush 2.0（支持全端推送）”-“应用信息”
	
以上两种方式均可进入uniPush 应用开通界面。如下图所示：
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/637abb41-4702-4b05-928b-8aac6de7149f.jpg)

### 手机号验证

按照国家法律要求，所有提供云服务的公司在用户使用云服务时都需要验证手机号。

用户初次开通 uni-push 时，需要向个推同步手机号信息。
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a0e85961-e5e7-4e38-a6d0-aea6ab27766e.jpg)

### 填写应用信息
应用开通 uni-push 功能时，需要提交应用相关信息，如下图所示：
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/381bd60a-a38b-412a-8bfb-6cafb9788a6a.jpg)

关联服务空间说明：
uni-push2.0需要开发者开通uniCloud。不管您的业务服务器是否使用uniCloud，但专业推送服务器在uniCloud上。

- 如果您的后台业务使用uniCloud开发，那理解比较简单。
- 如果您的后台业务没有使用uniCloud，那么也需要在uni-app项目中创建uniCloud环境，在HBuilderX中和dev的uni-push配置中均绑定相同服务空间，之前的业务仍然由客户端连接原有传统服务器，push相关功能则通过uniCloud服务空间实现。如果您之前使用过三方推送服务的话，可以理解为您的服务器不再调用个推服务器，而是改为调用uniCloud服务空间。

在uniCloud的云函数中，加载扩展库 `uni-cloud-push`，直接调用相关API，无需额外的服务端配置。而传统服务器开发者需要把这个云函数URL后变成http接口，再由原来的php或java代码调用这个http接口。

注意：`Android包名、签名（SHA1指纹）`或`iOS Bundle ID`，必须确保与客户端manifest.json配置的证书相关信息一致，否则可能会导致无法正常打包或收到推送消息。

参考资料：[关于Android证书](https://ask.dcloud.net.cn/article/35985#server)、[iOS证书申请](https://ask.dcloud.net.cn/article/152)

开通完成后，后续仍可以在这里修改以上信息。

## 第二步：配置
- iOS 平台还需要上传专用的推送证书
	+ 证书申请：如何获取推送证书请参考个推官方文档教程 [iOS证书配置指南](https://docs.getui.com/getui/mobile/ios/apns/)
	+ 证书上传入口：消息推送-“配置管理”-“应用配置”
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a75716f3-3541-48e0-a1cb-43de8308d2b5.jpg)
- APP厂商推送参数设置（可选，应用进程离线时推送通道）
	![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/26656924-e58e-42dc-a5b2-6d72546aa5d2.jpg)
	uniPush集成并统一了各个手机厂商的系统级推送，目前支持魅族、OPPO、华为、小米、VIVO。如果需要使用厂商推送，需要先在各厂商开发者平台申请。详情[厂商推送应用创建配置流程](https://www.dcloud.io/docs/a/unipush/manufacturer.pdf)


## 第三步：客户端操作

### 名词解释
#### 离线推送@offline
<img width="30%" style="margin-left:20px;margin-top:0;float:right;" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/3bb2b4c4-1b73-426d-b713-f076aff80868.jpg"/>
仅APP端支持，当应用被用户关闭，或者运行到后台时，手机厂商为了省电或释放内存，会终止App后台联网。

消息将通过不会离线的手机厂商通道，下发到手机系统推送服务模块；

此时客户端会自动创建通知栏消息，展示在系统消息中心（如图所示）但客户端监听不到消息内容；当用户点击通知栏消息后，会将APP唤醒此时APP才能监听到消息内容。

#### 在线推送@online
当应用在线时，不会创建“通知栏消息”，此时客户端会立即监听到消息内容。

如果业务逻辑上需要创建“通知栏消息”来提醒用户；可以在监听到消息内容后，使用创建本地消息API [plus.push.createMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.createMessage)手动创建通知栏消息。

### 启用客户端uniPush

操作步骤打开`manifest.json`-`App模块配置`-中勾选`uniPush 2.0`
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/f897176a-6216-48bd-98c8-439b2bd2cb42.jpg)
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1280af61-06a3-46d3-bfc3-0e1c1aee2580.jpg)
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/2c5af727-2a43-4a4a-95e0-07403aafb019.jpg)
其他小程序启用方式参考微信小程序，这里不一一列举

### 获取客户端推送标识

代码示例：
```js 
	uni.getPushClientId({
		success: (res) => {
			let push_clientid = res.cid
			console.log(push_clientid)
		},
		fail(err) {
			console.log(err)
		}
	})
```

### 监听推送消息@listener  
监听推送消息的代码，应当写在应用生命周期（即：项目根目录的App.vue文件）中
示例代码：
```js 
export default {
	onLaunch: function() {
		console.log('App Launch')
		uni.onPushMessage((res) => {
			console.log(res) //监听推送消息
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

**APP端真机运行注意:** 如果启用了离线推送，必须：经过发行原生app云打包后，客户端才能监听到推送消息。

## 第四步：服务端推送消息  
消息推送属于敏感操作，只能直接或间接由服务端触发。传统的三方push服务，需要开发者在服务端配置密钥或证书，根据服务器端文档签名获取token，再向相关URL接口发起网络请求......

而UniPush2.0，开发者无需关心证书、签名、服务器端文档，使用简单，极简的代码，云函数通过 uni-push服务端sdk，即`uni-cloud-push`的API即可直接执行uniPush所有操作。

uni-push的服务端sdk的体积不小，没有内置在云函数中。在需要操作uni-push的云函数里，开发者需手动配置`uni-cloud-push`扩展库。
（uniCloud扩展库，是uniCloud自带API中不常用且包体积较大的部分，被独立为扩展库，可以由开发者自行选择是否使用该扩展库）

- HBuilderX 3.4起提供了可视化界面，新建云函数/云对象时可选择uni-cloud-push扩展库，或者如下图所示在已有的云函数目录点右键选择“管理公共模块或扩展库依赖”

- HBuilderX 3.4以前，没有可视化界面，需要开发者手动在云函数/云对象的package.json内添加云函数的扩展库（如果云函数目录下没有package.json，可以通过在云函数目录下执行`npm init -y`来生成）

<img style="width:80%;max-width:600px;margin:0 10%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/cb2bc39d-0dbd-4321-ba6f-cc4c782c820c.jpg"/>
</br>
<img style="width:80%;max-width:600px;margin:0 10%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/66f41377-5492-4345-b85c-e6978dd5ef63.jpg"/>
</br>
下面是一个开启了`uni-cloud-push`扩展库的云函数的package.json示例，**注意不可有注释，以下文件内容中的注释仅为说明，如果拷贝此文件，切记去除注释**

```js
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

云函数中调用uni-cloud-push扩展库的`sendMessage`方法，向客户端推送消息

```js
// 简单的使用示例
'use strict';
const uniPush = uniCloud.getPushManager({appId:"__UNI__XXXXXX"}) //注意这里需要传入你的应用appId
exports.main = async (event, context) => {
	return await uniPush.sendMessage({
		"push_clientid": "xxx", 	//填写你客户端获取到的push_clientid
		"title": "通知栏显示的标题",	
		"content": "通知栏显示的内容",
		"payload": "体验一下uni-push2.0"
	})
};
```

在云函数文件目录右键（或按快捷键ctrl + r）- 上传并运行云函数，此时你的客户端将监听推送消息

>以上仅演示简单的uni-cloud-push扩展库的API，更多详情[文档](/uniCloud/uni-push/api)