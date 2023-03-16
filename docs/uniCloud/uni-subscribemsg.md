## uni-subscribemsg 公共模块

开发业务时时常遇到需要向用户发送一些通知，如欠费通知、会员到期通知等等。

uni-subscribemsg公共模块可以方便开发者快速接入小程序订阅消息和微信公众号模板消息。

目前uni-subscribemsg支持：

- 微信公众号模板消息
- 微信小程序订阅消息

::: warning 注意
uni-subscribemsg公共模块仅能在云函数/云对象内使用。如果您不了解公共模块，请[参阅](cf-common.md)
本插件依赖uni-open-bridge-common，且版本需≥1.1.2
:::

> 插件市场地址：[https://ext.dcloud.net.cn/plugin?name=uni-subscribemsg](https://ext.dcloud.net.cn/plugin?name=uni-subscribemsg)

## 配置@config

`uni-subscribemsg` 自身没有配置文件，Ta依赖 `uni-open-bridge` 的配置，[点击查看uni-open-bridge配置](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html#uni-open-bridge%E7%9A%84%E4%BD%BF%E7%94%A8%E6%B5%81%E7%A8%8B)

## API@api

### 发送微信公众号模板消息@sendTemplateMessage

**用法**

```js
// 引入uni-subscribemsg公共模块
const UniSubscribemsg = require('uni-subscribemsg');
// 初始化实例
let uniSubscribemsg = new UniSubscribemsg({
	dcloudAppid: "你项目的dcloudAppid",
	provider: "weixin-h5",
});
// 发送模板消息
let res = await uniSubscribemsg.sendTemplateMessage({
	touser: "用户openid",
	template_id: "消息模板id",
	url: "https://uniapp.dcloud.net.cn", // 用户点击消息后跳转的链接地址
	data: {
		first: {
			value: "您购买的套餐已到期!",
			color: "#666666"
		},
		keyword1: {
			value: "test@qq.com",
			color: "#666666"
		},
		keyword2: {
			value: "阿里云空间",
			color: "#666666"
		},
		keyword3: {
			value: "2023-12-21 15:30:20",
			color: "#666666"
		},
		remark: {
			value: "请及时续费",
			color: "#666666"
		}
	}
});
```

**请求参数**

|参数								|类型		|必填	|说明																																																								|
|---								|---		|---	|---																																																								|
|touser							|String	|是		|接收者openid																																																				|
|template_id				|String	|是		|模板ID																																																							|
|url								|String	|否		|模板跳转链接（海外帐号没有跳转能力）																																								|
|miniprogram				|Object	|否		|跳小程序所需数据，不需跳小程序可不用传该数据																																				|
| &#124;-- appid		|String	|是		|所需跳转到的小程序appid（该小程序 appid 必须与发模板消息的公众号是绑定关联关系，暂不支持小游戏）										|
| &#124;-- pagepath	|String	|否		|所需跳转到小程序的具体页面路径，支持带参数,（示例index?foo=bar），要求该小程序已发布，暂不支持小游戏								|
|data								|Object	|是		|模板数据																																																						|
|color							|String	|否		|模板内容字体颜色，不填默认为黑色																																										|
|client_msg_id			|String	|否		|防重入id。对于同一个openid + client_msg_id, 只发送一条消息,10分钟有效,超过10分钟不保证效果。若无防重入需求，可不填	|

**返回参数**

|参数		|说明													|
|---		|---													|
|errCode|为0代表发送成功，其他均为失败，与微信公众号官方返回码一致 [微信公众号全局返回码](https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Global_Return_Code.html)|
|errMsg	|失败后的提示	，与微信公众号官方错误提示一致								|

### 检测用户是否关注了公众号@getSubscribeUserInfo

**用法**

```js
// 引入uni-subscribemsg公共模块
const UniSubscribemsg = require('uni-subscribemsg');
// 初始化实例
let uniSubscribemsg = new UniSubscribemsg({
	dcloudAppid: "你项目的dcloudAppid",
	provider: "weixin-h5",
});
// 检测用户是否关注了公众号
let res = await uniSubscribemsg.getSubscribeUserInfo({
	openid
});
```

**请求参数**

|参数								|类型		|必填	|说明																																																								|
|---								|---		|---	|---																																																								|
|openid							|String	|是		|用户openid																																																				|

**返回参数**

|参数			|说明																																																																																				|
|---			|---																																																																																				|
|errCode	|为0代表发送成功，其他均为失败，与微信公众号官方返回码一致 [微信公众号全局返回码](https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Global_Return_Code.html)	|
|errMsg		|失败后的提示，与微信公众号官方错误提示一致																																																																	|
|subscribe| true 已关注公众号 false 未关注公众号																																																																			|
|result		| [用户基本信息返回值](https://developers.weixin.qq.com/doc/offiaccount/User_Management/Get_users_basic_information_UnionID.html#UinonId)																		|

### 发送微信小程序订阅消息@sendSubscribeMessage

订阅消息顾名思义，需要先订阅，才可以发送消息，因此前端需要先让用户订阅。

**前端订阅**

调用 [uni.requestSubscribeMessage](https://uniapp.dcloud.net.cn/api/other/requestSubscribeMessage.html) API即可让用户订阅。

```js
uni.requestSubscribeMessage({
	tmplIds: ["ksKe4u8VGwScLUMFXERYgtmVqD9KUFPF-hN3-qae7_I"], // 改成你的小程序订阅消息模板id
	success: () => {
		uni.showToast({
			title: "订阅成功",
			icon: "none"
		})
	}
});
```


**云端发送**

```js
// 引入uni-subscribemsg公共模块
const UniSubscribemsg = require('uni-subscribemsg');
// 初始化实例
let uniSubscribemsg = new UniSubscribemsg({
	dcloudAppid: "你项目的dcloudAppid",
	provider: "weixin-mp",
});
// 发送订阅消息
let res = await uniSubscribemsg.sendSubscribeMessage({
	touser: "用户openid",
	template_id: "消息模板id",
	page: "pages/index/index", // 小程序页面地址
	miniprogram_state: "developer", // 跳转小程序类型：developer为开发版；trial为体验版；formal为正式版；默认为正式版
	lang: "zh_CN",
	data: {
		name1: {
			value: "张三"
		},
		time2: {
			value: "2023-12-21 15:30:20"
		}
	}
});
```

**请求参数**

|属性							|类型		|必填	|说明																																																				|
|---							|---		|---	|---																																																				|
|touser						|string	|是		|接收者（用户）的 openid																																										|
|template_id			|string	|是		|所需下发的订阅模板id																																												|
|page							|string	|否		|点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转		|
|miniprogram_state|string	|是		|跳转小程序类型：developer为开发版；trial为体验版；formal为正式版；默认为正式版															|
|lang							|string	|是		|进入小程序查看”的语言类型，支持zh_CN(简体中文)、en_US(英文)、zh_HK(繁体中文)、zh_TW(繁体中文)，默认为zh_CN|
|data							|string	|是		|模板内容，格式形如 { "key1": { "value": any }, "key2": { "value": any } }的object													|

**返回参数**

|参数		|说明													|
|---		|---													|
|errCode|为0代表发送成功，其他均为失败|
|errMsg	|失败后的提示									|

**错误码**

|错误码	|错误码取值																								|解决方案																																																																|
|---		|---																											|---																																																																		|
|40003	|invalid openid																						|不合法的 openid ，请开发者确认 openid （该用户）是否已关注公众号，或是否是其他公众号的 openid																					|
|40014	|invalid access_token																			|不合法的 access_token ，请开发者认真比对 access_token 的有效性（如是否过期），或查看是否正在为恰当的公众号调用接口											|
|40037	|invalid template_id																			|不合法的 template_id																																																										|


## 常见问题

### 如何申请微信公众号模板消息


进入[微信公众号后台](https://mp.weixin.qq.com) - 点击【模板消息】- 点击【从历史模板库中添加】

![](http://dcloud-chjh-web.oss-cn-hangzhou.aliyuncs.com/unidoc/zh/wwq/350.png)

### 如何申请微信小程序订阅消息

进入[微信小程序后台](https://mp.weixin.qq.com) - 点击【订阅消息】- 点击【公共模板库】- 点击【选用】

![](http://dcloud-chjh-web.oss-cn-hangzhou.aliyuncs.com/unidoc/zh/wwq/349.png)
