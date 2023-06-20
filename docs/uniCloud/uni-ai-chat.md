## 简介

> 支持HBuilder版本，正式版 3.7.10+，Alpha版 3.8.0+

`uni-ai-chat`是基于[uni-ai](uni-ai.md)的聊天项目模板。它包含一个前端页面(路径：`/pages/chat/chat.vue`)和一个云对象(路径：`uniCloud/cloudfunctions/uni-ai-chat/index.obj.js`)

它支持上文总结、流式响应，把众多复杂的ai聊天逻辑都封装好了。

**插件下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-ai-chat](https://ext.dcloud.net.cn/plugin?name=uni-ai-chat)**

视频效果：  
<video controls src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-ai-chat/uni-ai-stream.mov" style="max-width: 100%; max-height: 70vh;"></video>

### 示例项目

地址：[https://chat.dcloud.net.cn](https://chat.dcloud.net.cn/#/)

注意：需要使用HBuilder账号登录，限制：5条消息/账号/天

## 体验步骤  

1. 如之前未使用过uni-app，那请从头学起。[uni-app官网](https://uniapp.dcloud.net.cn)
2. 如果你还没有开通uniCloud，需要登录[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/)，创建一个服务空间。
3. 如果你不了解[uni-ai](uni-ai.md)，请务必阅读相关文档。
4. 打开本插件`uni-ai-chat`下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-ai-chat](https://ext.dcloud.net.cn/plugin?name=uni-ai-chat)
5. 点击`使用HBuilderX导入示例项目`
6. 对项目根目录uniCloud点右键选择“云服务空间初始化向导”界面按提示部署项目
7. 在uni-app项目点右键，关联之前创建的服务空间。
8. 运行启动。
9. 如果需要stream流式响应，需要在[dev.dcloud.net.cn](https://dev.dcloud.net.cn)的uni-push2中开通你的应用

## 配置 @config
文件路径 `uniCloud/cloudfunctions/common/uni-config-center/uni-ai-chat/config.json`

目前的配置文件包括是否开启内容安全，即是否检查用户输入和ai返回结果的合规性。开启后，会延缓一定的响应时间，但保证了合规性。

| 字段									| 类型		| 默认值| 描述																																																						|
| :--------								| :--------	| :---	| :--------------------																																																		|
| contentSecurity						| Boolean	| false	| 开启内容安全识别																																																			|
| spentScore							| Number	| 0		| 对话一次所需消耗的积分数																																																								|
| earnedScore							| object	| -		| 配置积分的获取策略																																																								|
| &nbsp;&nbsp;&#124;-&nbsp;ad			| Number	| 3		| 观看1次广告可获得的积分数量																																																	|
| &nbsp;&nbsp;&#124;-&nbsp;price		| Number	| 3		| 支付1元可获得的积分数量(暂未支持)																																																|
| chatCompletionOptions					| Object	| -		| 支持配置：`model`,`deploymentId`,`tokensToGenerate`（默认值：512）,`temperature`,`topP` </br> 详情查看：[https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion)|
| llm									| Object	| -		| 大语言模型配置，详情查看：[https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#get-llm-manager](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#get-llm-manager)															|

这里内置的内容安全是基于`uni-sec-check`插件，它是免费的，但有一些限制条件，请务必阅读该插件的文档：[https://uniapp.dcloud.net.cn/uniCloud/uni-sec-check.html](uni-sec-check.md)。

如果你需要使用其他的内容安全检测方案，请自行集成。

注意：如果对ai返回结果进行内容安全检查，会导致stream流式响应失效。

## stream流式响应实现解析

当访问 AI 接口时，如果生成的回复内容过大，响应时间会很长，导致前端用户需要等待很长时间才能收到结果。所以流式响应可以减少前端用户的等待，让ai回复的内容一个字或一段话逐步出现在前端用户的界面上。

`uni-ai-chat`的流式响应，调用的是`uni-ai`的llm API中的[stream参数](uni-ai.md#chat-completion-stream)。

而stream参数是基于云函数的[sse通道](sse-channel.md#cloud-deserialize-channel)封装的。

而`sse通道`是基于[uni-push2](https://uniapp.dcloud.net.cn/unipush-v2.html)封装的。

所以**使用流式响应必须给应用开通uni-push**。

流式响应的流程图

<img width="500px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-ai-chat/20230425203311.jpg">

流式响应的使用需客户端先通过 `new uniCloud.SSEChannel()` 创建 SSE 通道，并获得 `channel` 值（详情请参考：[https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html#create-sse-channel](https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html#create-sse-channel)）。在客户端向 uniCloud 云对象发起请求时，需要将该 `channel` 值作为参数一同携带；然后 uniCloud 云对象与 uni-ai 建立 流式响应[(stream)](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream) 通讯，云对象监听 uni-ai 返回的分片数据，在接收到数据后再通过 sse-channel ([反序列化消息通道](https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html#cloud-deserialize-channel))向客户端推送消息。

### 注意事项 @heed
- 使用`sse-channel`需要先[开通uni-push](https://uniapp.dcloud.net.cn/unipush-v2.html#%E7%AC%AC%E4%B8%80%E6%AD%A5-%E5%BC%80%E9%80%9A)

## 营运专题@ad
v1.0.3起提供了商业化能力，与uni-ai对话消耗积分。

积分可通过看[激励视频广告](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)获得。
如需要通过支付获取积分，可自行二次开发，接入[uni-pay](uni-pay.md)。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.4.8+）|x|√（3.4.8+）|x|x|x|x|x|x|x|x|

### 流程概述
1. 开通广告；在[uni-ad](https://uniad.dcloud.net.cn/)官网点击菜单`广告设置`在应用列表，找到你的应用点击`开通广告`
2. 创建激励视频广告位；在[应用列表](https://uniad.dcloud.net.cn/list/app)点击`应用详情`再点击`新建广告位`；如下图：广告类型选`激励视频广告`，配置服务器回调，选uni-ai-chat部署的uniCloud服务空间，回调云函数名称选：`reward-video-callback`
<img width="500px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-ai-chat/uni-ai-chat-create-adpid.jpg">

	**微信小程序端注意**：
	- 参考：[uniAD微信小程序广告开通指南](https://ask.dcloud.net.cn/article/39928)开通广告后会自动创建广告位
	- 广告服务器回调，提前条件：详情查看[https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html#callbackweixin](https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html#callbackweixin)

3. 配置广告位唯一标识（adpid）
- 客户端，配置路径：`/config.js`
- 服务端，配置路径：`uniCloud/cloudfunctions/common/uni-config-center/uni-ad/config.json`

4. 一般情况下，新注册的用户将获得少量初始积分（即：对于新注册用户，系统将给予其n次免费对话机会）；在`uni-id/hooks`配置。路径：`uniCloud/cloudfunctions/common/uni-config-center/uni-id/hooks/index.js`
5. 配置对话一次需要消耗多少积分`needReduceScore`[详情查看](#config)
6. 配置看一次广告获得多少积分`earnedScore.ad`[详情查看](#config)

注意：因为广告服务器回调走的是云端，以上配置项，配置完成后记得上传。

7. 客户端需要登录才能消耗积分才能与ai对话，所以要将chat页面配置为必须登录的页面。以下是pages.json里的设置
```json
"uniIdRouter": {
	"loginPage": "uni_modules/uni-id-pages/pages/login/login-withoutpwd",
	"needLogin": [
		"pages/chat/chat"
	],
	"resToLogin": true
}
```
> 更多uniIdRouter自动路由详情参考：[https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#uni-id-router](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#uni-id-router)

## 二次开发  
**主要文件目录结构**

<pre v-pre="" data-lang="">
<code class="lang-" style="padding:0">
uni-ai-chat
├── uniCloud
│   ├── cloudfunctions
│   │   ├── common                         公共模块目录
│   │   │   ├── uni-config-center          uniCloud 配置中心
│   │   │   │   ├── uni-ad
│   │   │   │   │   └── config.json        广告信息配置
│   │   │   │   ├── uni-ai-chat              
│   │   │   │   │   └── config.json        ai对话项目配置文件<a target="_blank" href="/#config">详情查看</a>
│   │   │   │   ├── uni-id              
│   │   │   │   │   ├── config.json        身份信息配置文件
│   │   │   │   │   └── hooks              
│   │   │   │   │      └── index.js        用户注册钩子文件
│   │   │   │   └── uni-open-bridge        三方平台认证凭据管理配置
│   │   │   └── uni-sec-check              内容安全检测公共模块
│   │   ├── reward-video-callback          激励视频广告回调云函数
│   │   ├── uni-ai-chat                    uni-ai-chat云对象
│   │   └── uni-open-bridge                三方平台认证凭据管理模块云对象
│   └── database
│       ├── newQuery.jql
│       └── uni-ai-chat.schema.json         
├── components
│   ├── uni-ad-rewarded-video               激励视频广告组件
│   └── uni-ai-msg                          消息内容渲染组件
├── lib                                     资源文件目录
│   ├── highlight
│   │   ├── github-dark.min.css             代码高亮库样式文件
│   │   └── highlight.min.js                代码高亮库脚本文件
│   ├── html-parser.js                      HTML String转nodes数组脚本文件
│   └── markdown-it.min.js                  Markdown 渲染库脚本文件
├── pages                                   页面目录
│   └── chat                                对话页面
├── static                                  静态资源目录
├─ uni_modules                              uni-app模块目录
│   ├── uni-id-pages                        统一身份信息管理模块<a target="_blank" href="https://ext.dcloud.net.cn/plugin?name=uni-id-pages">详情查看</a>
│   ├── uni-open-bridge                     三方平台认证凭据管理模块<a target="_blank" href="https://ext.dcloud.net.cn/plugin?name=uni-id-pages">详情查看</a>
│   ├── uni-id-pages                        统一身份信息管理模块<a target="_blank" href="https://ext.dcloud.net.cn/plugin?name=uni-id-pages">详情查看</a>
│   └── uni-sec-check                       内容安全检测模块<a target="_blank" href="https://ext.dcloud.net.cn/plugin?name=uni-sec-check">详情查看</a>
├─ App.vue                                  应用配置，用来配置App全局样式以及监听 <a href="/collocation/frame/lifecycle?id=应用生命周期">应用生命周期</a>
├─ changelog.md                             项目更新日志
├─ config.js                                项目配置文件
├─ main.js                                  项目初始化入口文件
├─ manifest.json                            配置应用名称、appid、logo、版本等打包信息，<a href="/collocation/manifest">详情参考</a>
├─ pages.json                               配置页面路由、导航条、选项卡等页面类信息，<a href="/collocation/pages">详情参考</a>
└─ redme.md                                 自述文件
</code>
</pre>

> 完整的uni-app目录结构[详情参考](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)

### 实现通过支付获取积分
二开流程思路如下：
- 服务端  
根据[uni-pay](uni-pay.md)文档集成支付功能，在支付成功异步回调（路径：`uni-pay-co/notify/earnedScore.js`）
给相关用户加积分示例代码如下：
```js
'use strict';
// 读取配置的“支付1元可获得的积分数量”值
const uniAiChatConfig = require('uni-config-center')({
	pluginId: 'uni-ai-chat'
}).config()
module.exports = async (obj) => {
	let user_order_success = true;
	let { data = {} } = obj;
	let {
		user_id, //对应用户唯一身份标识
		total_fee, // 支付的金额
		order_no,
		out_trade_no
	} = data; // uni-pay-orders 表内的数据均可获取到
	
	let score = db.command.inc(uniAiChatConfig.earnedScore.pay * total_fee/100)
	let res = await db.collection('uni-id-users')
			.doc(user_id)
			.update({score})
	// console.log(res)
	return user_order_success;
};
```

- 客户端
1. 新建组件`earned-score-pay`实现支付并回调支付结果
2. 在chat页面（路径：`pages/chat/chat.vue`）搜索 `uni-ad-rewarded-video`修改同位置代码块如下：
```html
	<view v-if="index == msgList.length-1 && msg.insufficientScore">
		<uni-ad-rewarded-video v-if="adpid" :adpid="adpid" @onAdClose="onAdClose"></uni-ad-rewarded-video>
		<earned-score-pay @success="paySuccess"></earned-score-pay>
	</view>
```
```js
	paySuccess(){
		this.msgList.pop()
		this.$nextTick(()=>{
			this.retriesSendMsg()
			uni.showToast({
				title: '积分余额:'+score,
				icon: 'none'
			});
		})
	}
```

## 常见错误  
- **uni-ai相关错误请参考：**[uni-ai错误码](uni-ai.md#err-code)

- **错误信息："certificate has expired"**  
  请参考文档：[云函数通过https访问其他服务器时出现“certificate has expired”](faq.md#lets-encrypt-cert)

- **错误信息："Wx0e203209e27b1e66 插件未授权使用 添加插住(env: Windows,mp,1.06.2303060；1ib: 2.31.1)"**  
  请参考文档：[uniAD微信小程序广告开通指南](https://ask.dcloud.net.cn/article/39928)

## 其他  
DCloud基于`uni-ai`提供了很多开源模板，除了本项目`uni-ai-chat`，还有：

- [uni-cms](uni-cms.md)，一款集成了ai生成文章内容的开源内容管理系统。

## 交流群

更多问题欢迎加入uni-ai官方交流群 QQ群号:[699680439](https://qm.qq.com/cgi-bin/qm/qr?k=P_JoYXY56vNfb78uNHwwzqpODwl9e89B&jump_from=webapi&authKey=GDp321q9ZYW4V0ZQcejXikwMnNRs4KVBcQXMADs8lvC0hifSH9ORHsyERy6vO4bA)
