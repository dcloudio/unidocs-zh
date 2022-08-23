## button

按钮。
Button.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|生效时机|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Effective time| Platform difference description|
|:-|:-|:-|:-|:-|:-|
|size|String|default|按钮的大小|||
| size| String| default| Button size| | |
|type|String|default|按钮的样式类型|||
| type| String| default| Button style type| | |
|plain|Boolean|false|按钮是否镂空，背景色透明|||
| plain| Boolean| false| Whether the button is hollow and the background color is transparent| | |
|disabled|Boolean|false|是否禁用|||
| disabled| Boolean| false| Disable or not| | |
|loading|Boolean|false|名称前是否带 loading 图标||H5、App(App-nvue 平台，在 ios 上为雪花，Android上为圆圈)|
|loading|Boolean|false|Is there a loading icon before the name||H5, App (App-nvue platform, snowflake on ios, circle on Android)|
|form-type|String||用于 ``<form>`` 组件，点击分别会触发 ``<form>`` 组件的 submit/reset 事件|||
| form-type| String| | Used for the `<form>` component, clicking will trigger the submit/reset event of the `<form>` component respectively| | |
|open-type|String||开放能力|||
| open-type| String| | Openness| | |
|hover-class|String|button-hover|指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果||App-nvue 平台暂不支持|
| hover-class| String| button-hover| Specify the style class of the pressed button. For hover-class="none", there is no effect of click state| | The App-nvue platform does not support temporarily|
|hover-start-time|Number|20|按住后多久出现点击态，单位毫秒|||
| hover-start-time| Number| 20| How long does the click state appear after pressing, in milliseconds| | |
|hover-stay-time|Number|70|手指松开后点击态保留时间，单位毫秒|||
| hover-stay-time| Number| 70| Retention time of the click state after finger release, in milliseconds| | |
|app-parameter|String||打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效||微信小程序、QQ小程序|
|app-parameter|String||The parameter passed to the APP when the APP is opened, valid when open-type=launchApp||WeChat applet, QQ applet|
|hover-stop-propagation|boolean|false|指定是否阻止本节点的祖先节点出现点击态||微信小程序|
|hover-stop-propagation|boolean|false|Specify whether to prevent the ancestor node of this node from appearing in the click state||WeChat applet|
|lang|string|'en'|指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。||微信小程序|
|lang|string|'en'| Specifies the language for returning user information, zh_CN for simplified Chinese, zh_TW for traditional Chinese, and en for English. ||WeChat Mini Program|
|session-from|string||会话来源，open-type="contact"时有效||微信小程序|
|session-from|string||session source, valid when open-type="contact"||WeChat applet|
|send-message-title|string|当前标题|会话内消息卡片标题，open-type="contact"时有效||微信小程序|
|send-message-title|string|Current title|In-session message card title, valid when open-type="contact"||WeChat applet|
|send-message-path|string|当前分享路径|会话内消息卡片点击跳转小程序路径，open-type="contact"时有效||微信小程序|
|send-message-path|string|Current sharing path|Click on the message card in the session to jump to the applet path, valid when open-type="contact"||WeChat applet|
|send-message-img|string|截图|会话内消息卡片图片，open-type="contact"时有效||微信小程序|
|send-message-img|string|Screenshot|In-session message card picture, valid when open-type="contact"||WeChat applet|
|show-message-card|boolean|false|是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效||微信小程序|
|show-message-card|boolean|false|Whether to display the message card in the session, set this parameter to true, the user enters the customer service session, and a "may be sent applet" prompt will be displayed in the lower right corner. After clicking, the user can quickly send the message Program message, valid when open-type="contact"||WeChat applet|
|group-id|String||打开群资料卡时，传递的群号|open-type="openGroupProfile"|QQ小程序|
|group-id|String||The group ID passed when opening the group profile card|open-type="openGroupProfile"|QQ applet|
|guild-id|String||打开频道页面时，传递的频道号|open-type="openGuildProfile"|QQ小程序|
|guild-id|String||The channel number passed when opening the channel page|open-type="openGuildProfile"|QQ applet|
|public-id|String||打开公众号资料卡时，传递的号码|open-type="openPublicProfile"|QQ小程序|
|public-id|String||The number passed when opening the public account profile card|open-type="openPublicProfile"|QQ applet|
|@getphonenumber|Handler||获取用户手机号回调|open-type="getPhoneNumber"|微信、支付宝、百度、字节、快手、京东小程序|
|@getphonenumber|Handler||Get the user's phone number callback|open-type="getPhoneNumber"|WeChat, Alipay, Baidu, Byte, Kuaishou, JD Mini Program|
|@getuserinfo|Handler||用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo|open-type="getUserInfo"|微信、QQ、百度、快手、京东小程序|
|@getuserinfo|Handler||When the user clicks this button, the obtained user information will be returned, and the value obtained from the detail of the returned parameter is the same as uni.getUserInfo|open-type="getUserInfo"|WeChat, QQ, Baidu, Kuaishou, Jingdong Mini Program |
|@error|Handler||当使用开放能力时，发生错误的回调|open-type="launchApp"|微信、QQ、快手、京东小程序|
|@error|Handler||When using the open ability, an error callback occurs|open-type="launchApp"|WeChat, QQ, Kuaishou, JD Mini Program|
|@opensetting|Handler||在打开授权设置页并关闭后回调|open-type="openSetting"|微信、QQ、百度、快手、京东小程序|
|@opensetting|Handler||Call back after opening the authorization setting page and closing it|open-type="openSetting"|WeChat, QQ, Baidu, Kuaishou, JD.com Mini Program|
|@launchapp|Handler||从小程序打开 App 成功的回调|open-type="launchApp"|微信、QQ、快手、京东小程序|
|@launchapp|Handler||Open App from Mini Program Successful callback|open-type="launchApp"|WeChat, QQ, Kuaishou, JD Mini Program|
|@contact|Handler||客服消息回调|open-type="contact"|微信、QQ、百度、快手小程序|
|@contact|Handler||Customer Service Message Callback|open-type="contact"|WeChat, QQ, Baidu, Kuaishou Mini Program|
|@chooseavatar|Handler||获取用户头像回调|open-type="chooseAvatar"|微信小程序|
|@chooseavatar|Handler||Get User Avatar Callback|open-type="chooseAvatar"|WeChat Mini Program|
|@addgroupapp|Handler||添加群应用的回调|open-type="addGroupApp"|QQ小程序|
|@addgroupapp|Handler||Add group app callback|open-type="addGroupApp"|QQ applet|
|@chooseaddress|Handler||调起用户编辑并选择收货地址的回调|open-type="chooseAddress"|百度小程序|
|@chooseaddress|Handler||Calls up the callback for the user to edit and select the delivery address|open-type="chooseAddress"|Baidu Mini Program|
|@chooseinvoicetitle|Handler||用户选择发票抬头的回调|open-type="chooseInvoiceTitle"|百度小程序|
|@chooseinvoicetitle|Handler||User selects the callback of the invoice title|open-type="chooseInvoiceTitle"|Baidu Mini Program|
|@subscribe|Handler||订阅消息授权回调|open-type="subscribe"|百度小程序|
|@subscribe|Handler||Subscription message authorization callback|open-type="subscribe"|Baidu applet|
|@login|Handler||登录回调|open-type="login"|百度小程序|
|@login|Handler||Login Callback|open-type="login"|Baidu Mini Program|

- **注1：``button-hover`` 默认为 ``{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}``**
- **Note 1: ``button-hover`` defaults to ``{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}``**
- ```open-type="launchApp"```时需要调起的APP接入微信OpenSDK[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html)
- When ```open-type="launchApp"``` needs to be called up, the APP needs to be connected to WeChat OpenSDK [see details](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability /launchApp.html)

### size 有效值
### size valid values

|值|说明|
| Value| Instruction|
|:-|:-|
|default|默认大小|
| default| Default size|
|mini|小尺寸|
| mini| Small size|

### type 有效值
### type valid values

|值|说明|
| Value| Instruction|
|:-|:-|
|primary|微信小程序、360小程序为绿色，App、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ小程序为浅蓝色。如想在多端统一颜色，请改用default，然后自行写样式|
|primary|WeChat applet and 360 applet are green, App, H5, Baidu applet, Alipay applet, Feishu applet, and Quick App are blue, ByteDance applet is red, and QQ applet is light blue color. If you want to unify the color on multiple ends, please use default instead, and then write your own style|
|default|白色|
| default| White|
|warn|红色|
| warn| Red|

### form-type 有效值
### form-type valid values

|值|说明|
| Value| Instruction|
|:-|:-|
|submit|提交表单|
| submit| Submit form|
|reset|重置表单|
| reset| Reset form|

### open-type 有效值
### open-type valid values

|值|说明|平台差异说明|
| Value| Instruction| Platform difference description|
|:-|:-|:-|
|feedback|打开“意见反馈”页面，用户可提交反馈内容并上传日志|App、微信小程序、QQ小程序|
|feedback|Open the "Feedback" page, users can submit feedback and upload logs|App, WeChat applet, QQ applet|
|share|触发用户转发|微信小程序、百度小程序、支付宝小程序、字节跳动小程序、飞书小程序、QQ小程序、快手小程序、京东小程序、360小程序	|
|share|Trigger user forwarding|WeChat applet, Baidu applet, Alipay applet, ByteDance applet, Feishu applet, QQ applet, Kuaishou applet, Jingdong applet, 360 applet |
|getUserInfo|获取用户信息，可以从@getuserinfo回调中获取到用户信息|微信小程序、百度小程序、QQ小程序、快手小程序、京东小程序、360小程序	|
|getUserInfo|Get user information, you can get user information from @getuserinfo callback | WeChat applet, Baidu applet, QQ applet, Kuaishou applet, Jingdong applet, 360 applet |
|contact | 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 @contact 回调中获得具体信息 |微信小程序、百度小程序、快手小程序 |
|contact | Open the customer service session, if the user returns to the app after clicking the message card in the session, you can get specific information from the @contact callback |WeChat applet, Baidu applet, Kuaishou applet |
|getPhoneNumber | 获取用户手机号，可以从@getphonenumber回调中获取到用户信息|微信小程序、百度小程序、字节跳动小程序、支付宝小程序、快手小程序、京东小程序。App平台另见[一键登陆](https://uniapp.dcloud.net.cn/univerify) |
|getPhoneNumber | Get the user's mobile phone number, user information can be obtained from the @getphonenumber callback | WeChat applet, Baidu applet, ByteDance applet, Alipay applet, Kuaishou applet, Jingdong applet. For App platform, see [One-click login](https://uniapp.dcloud.net.cn/univerify) |
|launchApp | 小程序中打开APP，可以通过app-parameter属性设定向APP传的参数|[微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html)、[QQ小程序](https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_app.html)、快手小程序、京东小程序 |
|launchApp | Open the APP in the applet, you can set the parameters passed to the APP through the app-parameter attribute|[WeChat applet](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability /launchApp.html), [QQ Mini Program](https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_app.html), Kuaishou Mini Program, JD Mini Program |
|openSetting | 打开授权设置页 |微信小程序、QQ小程序、百度小程序、快手小程序、京东小程序、360小程序 |
|openSetting | Open the authorization setting page |WeChat applet, QQ applet, Baidu applet, Kuaishou applet, Jingdong applet, 360 applet |
|chooseAvatar|获取用户头像，可以从@chooseavatar回调中获取到头像信息|微信小程序2.21.2版本+ |
|chooseAvatar|Get the user avatar, you can get the avatar information from the @chooseavatar callback|WeChat applet version 2.21.2+ |
|getAuthorize | 支持小程序授权 | 支付宝小程序 |
|getAuthorize | Support applet authorization | Alipay applet |
|lifestyle | 关注生活号 | 支付宝小程序 |
|lifestyle | Follow Life Account | Alipay Mini Program |
|contactShare|分享到通讯录好友|支付宝小程序基础库1.11.0版本+ |
|contactShare|Share to friends in the address book|Alipay Mini Program Basic Library Version 1.11.0+ |
|openGroupProfile|呼起QQ群资料卡页面，可以通过group-id属性设定需要打开的群资料卡的群号，同时manifest.json中必须配置groupIdList|QQ小程序基础库1.4.7版本+ |
|openGroupProfile| Call up the QQ group profile card page, you can set the group ID of the group profile card to be opened through the group-id attribute, and groupIdList must be configured in manifest.json|QQ Mini Program Basic Library Version 1.4.7+ |
|openGuildProfile|呼起频道页面，可以通过guild-id属性设定需要打开的频道ID|QQ小程序基础库1.46.8版本+ |
|openGuildProfile|Call up the channel page, you can set the channel ID to be opened through the guild-id attribute|QQ Mini Program Basic Library Version 1.46.8+ |
|openPublicProfile|打开公众号资料卡，可以通过public-id属性设定需要打开的公众号资料卡的号码，同时manifest.json中必须配置publicIdList|QQ小程序基础库1.12.0版本+ |
|openPublicProfile|Open the public account data card, you can set the number of the public account data card to be opened through the public-id attribute, and publicIdList must be configured in the manifest.json|QQ Mini Program Basic Library Version 1.12.0+ |
|shareMessageToFriend|在自定义开放数据域组件中,向指定好友发起分享据|QQ小程序基础库1.17.0版本+ |
|shareMessageToFriend|In the custom open data domain component, initiate sharing data to specified friends|QQ Mini Program Basic Library Version 1.17.0+ |
|addFriend|添加好友， 对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权|QQ小程序 |
|addFriend|To add a friend, the other party needs to authorize through this applet, and the successful user authorization can be invoked only after being allowed to be added as a friend|QQ applet|
|addColorSign|添加彩签，点击后添加状态有用户提示，无回调|QQ小程序基础库1.10.0版本+ |
|addColorSign|Add a color sign, click to add status, there is a user prompt, no callback|QQ Mini Program Basic Library Version 1.10.0+ |
|addGroupApp|添加群应用（只有管理员或群主有权操作），添加后给button绑定@addgroupapp事件接收回调数据|QQ小程序基础库1.16.0版本+ |
|addGroupApp|Add a group application (only the administrator or group owner has the right to operate), and then bind the button to the @addgroupapp event to receive callback data|QQ Mini Program Basic Library Version 1.16.0+ |
|addToFavorites|收藏当前页面，点击按钮后会触发Page.onAddToFavorites方法|QQ小程序基础库1.19.0版本+ |
|addToFavorites|Favorite the current page, the Page.onAddToFavorites method will be triggered after clicking the button|QQ Mini Program Basic Library Version 1.19.0+ |
|chooseAddress|选择用户收货地址，可以从@chooseaddress回调中获取到用户选择的地址信息|百度小程序3.160.3版本+ |
|chooseAddress|Select the user's delivery address, you can get the address information selected by the user from the @chooseaddress callback |Baidu applet version 3.160.3+ |
|chooseInvoiceTitle|选择用户发票抬头，可以从@chooseinvoicetitle回调中获取到用户选择发票抬头信息|百度小程序3.160.3版本+ |
|chooseInvoiceTitle|Select the user's invoice title, you can get the user's selected invoice title information from the @chooseinvoicetitle callback|Baidu applet version 3.160.3+ |
|login|登录，可以从@login回调中确认是否登录成功|百度小程序3.230.1版本+ |
|login|Login, you can confirm whether the login is successful from the @login callback |Baidu applet version 3.230.1+ |
|subscribe|订阅类模板消息，需要用户授权才可发送|百度小程序 |
|subscribe|Subscription template message, which requires user authorization to send |Baidu Mini Program |
|favorite|触发用户收藏|快手小程序 |
|favorite|Trigger User Favorites| Kuaishou Mini Program |
|watchLater|触发用户稍后再看|快手小程序 |
|watchLater|Trigger users to watch later|Kaishou applet|
|openProfile|触发打开用户主页|快手小程序 |
|openProfile|Trigger to open user homepage|Kaishou applet|

#### feedback

open-type 为 feedback时：
When open-type is feedback:

- 小程序中，开发者可以登录 [微信小程序管理后台](https://mp.weixin.qq.com/) 、[QQ小程序后台](https://q.qq.com/#/)后，进入菜单“客服反馈”页面获取反馈内容。
- In the applet, developers can log in to the [WeChat applet management background](https://mp.weixin.qq.com/), [QQ applet background](https://q.qq.com/#/ ), enter the menu "Customer Service Feedback" page to get feedback content.
- 在 App 中，开发者登录 [DCloud开发者中心](https://dev.dcloud.net.cn/) 后点击应用名称，进入左侧菜单“用户反馈”页面获取反馈内容。
- In the App, the developer logs in to the [DCloud Developer Center](https://dev.dcloud.net.cn/), clicks on the application name, and enters the "User Feedback" page in the left menu to get feedback.
- 但推荐使用全端的、开源的、云端一体的意见反馈功能，[前端部分](https://ext.dcloud.net.cn/plugin?id=50)、[管理端部分](https://ext.dcloud.net.cn/plugin?id=4992)
- But it is recommended to use the full-end, open-source, cloud-integrated feedback function, [Front-end part](https://ext.dcloud.net.cn/plugin?id=50), [Management-end part](https:/ /ext.dcloud.net.cn/plugin?id=4992)


### button点击
### button click

button 组件的点击遵循 vue 标准的 @click事件。
The click of the button component follows the vue standard @click event.

button 组件没有 url 属性，如果要跳转页面，可以在@click中编写，也可以在button组件外面套一层 navigator 组件。举例，如需跳转到about页面，可按如下几种代码写法执行：
Button component has no url attribute. If you want to jump to certain pages, you can write it in @click, or put a layer of navigator component outside the button component. For example, if you need to jump to the about page, execution can be performed as the following writing mode of codes:

```html
<template>
	<view>
		<navigator url="/pages/about/about"><button type="default">通过navigator组件跳转到about页面</button></navigator>
		<button type="default" @click="goto('/pages/about/about')">通过方法跳转到about页面</button>
		<button type="default" @click="navigateTo('/pages/about/about')">跳转到about页面</button><!-- 这种写法只有h5平台支持，不跨端，不推荐使用 -->
	</view>
</template>
<script>
	export default {
		methods: {
			goto(url) {
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>
```


**注意**
**Notice**
- 点击 share 分享按钮时会触发 [onShareAppMessage](/api/plugins/share)
- When you click the share button, it will trigger [onShareAppMessage](/api/plugins/share)
- 支付宝小程序平台，获取用户手机号时，建议先通过条件编译的方式，调用支付宝原生API，[参考](https://docs.alipay.com/mini/api/getphonenumber)
- For the Alipay applet platform, when obtaining the user's mobile phone number, it is recommended to call Alipay's native API through conditional compilation. [Reference](https://docs.alipay.com/mini/api/getphonenumber)


### 示例
### Example

[查看演示](https://hellouniapp.dcloud.net.cn/pages/component/button/button)
[View demo](https://hellouniapp.dcloud.net.cn/pages/component/button/button)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.

:::preview https://hellouniapp.dcloud.net.cn/pages/component/button/button

```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary">页面主操作 Normal</button>
			<button type="primary" loading="true">页面主操作 Loading</button>
			<button type="primary" disabled="true">页面主操作 Disabled</button>
			<button type="default">页面次要操作 Normal</button>
			<button type="default" disabled="true">页面次要操作 Disabled</button>
			<button type="warn">警告类操作 Normal</button>
			<button type="warn" disabled="true">警告类操作 Disabled</button>
			<view class="button-sp-area">
				<button type="primary" plain="true">按钮</button>
				<button type="primary" disabled="true" plain="true">不可点击的按钮</button>
				<button type="default" plain="true">按钮</button>
				<button type="default" disabled="true" plain="true">按钮</button>
				<button class="mini-btn" type="primary" size="mini">按钮</button>
				<button class="mini-btn" type="default" size="mini">按钮</button>
				<button class="mini-btn" type="warn" size="mini">按钮</button>
			</view>
		</view>
	</view>
</template>
```
:::


**注意**
**Notice**

事件务必使用vue语法，比如下面的获取手机号示例
Events must use vue syntax, such as the following example of getting a mobile phone number

```html
<button type="default" open-type="getPhoneNumber" @getphonenumber="decryptPhoneNumber">获取手机号</button>
```
