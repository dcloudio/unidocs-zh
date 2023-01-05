## 分享
## share

<!--
/// meta
keyword: 分享,share
keyword: share, share
-->

在不同平台，分享的调用方式和逻辑有较大差异。
On different platforms, the calling methods and logic of sharing are quite different.
- App：可以自主控制分享内容、分享形式及分享平台
- App: can independently control the sharing content, sharing form and sharing platform
1. 使用 ``uni.share`` API方式调用社交sdk分享
1. Use the ``uni.share`` API to call social sdk sharing
2. 使用[plus.share.sendWithSystem](http://www.html5plus.org/doc/zh_cn/share.html#plus.share.sendWithSystem)呼起手机os的系统分享菜单
2. Use [plus.share.sendWithSystem](http://www.html5plus.org/doc/zh_cn/share.html#plus.share.sendWithSystem) to call up the system share menu of the mobile os
- 小程序：不支持API调用，只能用户主动点击触发分享。可使用自定义按钮方式 &lt;button open-type="share"&gt; 或监听系统右上角的分享按钮 onShareAppMessage 进行自定义分享内容
- Mini Program: API calls are not supported, and users can only actively click to trigger sharing. You can use the custom button method &lt;button open-type="share"&gt; or listen to the share button onShareAppMessage in the upper right corner of the system to customize the sharing content
- H5：如果是普通浏览器，浏览器自带分享按钮；如果是在微信内嵌浏览器中，可调用js-sdk进行分享，[参考](https://ask.dcloud.net.cn/article/35380)
- H5: If it is a common browser, the browser has its own share button; if it is in the WeChat embedded browser, you can call js-sdk to share, [Reference](https://ask.dcloud.net.cn/ article/35380)
- APP：可以直接使用已经封装好的uni-share插件[详情](https://ext.dcloud.net.cn/plugin?id=4860)
- APP: You can directly use the packaged uni-share plugin [details](https://ext.dcloud.net.cn/plugin?id=4860)

### uni.share(OBJECT)
uni-app的App引擎已经封装了微信、QQ、微博的分享SDK，开发者可以直接调用相关功能。
The App engine of uni-app has encapsulated the sharing SDKs of WeChat, QQ and Weibo, and developers can directly call related functions.

可以分享到微信、QQ、微博，每个社交平台被称为分享服务提供商，即provider。
It can be shared to WeChat, QQ, Weibo, and each social platform is called a sharing service provider, that is, a provider.

可以分享文字、图片、图文横条、音乐、视频等多种形式。同时注意，分享为小程序也使用本API。即在App里可以通过本API把一个内容以小程序（通常为内容页）方式直接分享给微信好友。
You can share text, pictures, graphic bars, music, video and other forms. Also note that this API is also used for sharing as applet. That is, in the App, a content can be directly shared with WeChat friends in the form of a small program (usually a content page) through this API.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|x|x|x|x|x|x|x|


**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter name|Type|Required|Description|
|:-|:-|:-|:-|
|provider|String|是|分享服务提供商（即weixin&#124;qq&#124;sinaweibo），通过 [uni.getProvider](/api/plugins/provider) 获取可用的分享服务商，可用是指在manifest.json的sdk配置中配的分享sdk厂商，与本机安装了什么社交App无关|
|provider|String|Yes|Share service provider (i.e. weixin&#124;qq&#124;sinaweibo), get the available share service provider through [uni.getProvider](/api/plugins/provider), available means in the manifest The shared sdk manufacturer in the .json sdk configuration has nothing to do with the social app installed on the machine|
|type|Number|否|分享形式，如图文、纯文字、纯图片、音乐、视频、小程序等。默认图文 0。不同分享服务商支持的形式不同，具体参考下面type值说明。|
|type|Number|No|Sharing forms, such as graphic, text, image, music, video, applet, etc. Default teletext 0. Different sharing service providers support different forms. For details, please refer to the description of the type value below. |
|title|String|否|分享内容的标题|
|title|String|No|Title of the shared content|
|scene|String|provider 为 weixin 时必选|场景，可取值参考下面说明。|
|scene|String|provider is required when weixin is used|scene. For possible values, please refer to the description below. |
|summary|String|type 为 1 时必选|分享内容的摘要|
|summary|String|Required when type is 1|Summary of shared content|
|href|String|type 为 0 时必选|跳转链接|
|href|String|Required when type is 0|Jump link|
|imageUrl|String|type 为 0、2、5 时必选|图片地址。type为0时，推荐使用小于20Kb的图片|
|imageUrl|String|Required when type is 0, 2, 5|Image URL. When type is 0, it is recommended to use pictures less than 20Kb|
|mediaUrl|String|type 为 3、4 时必选|音视频地址|
|mediaUrl|String|Required when type is 3 or 4|Audio and video address|
|miniProgram|Object|type 为 5 时必选|分享小程序必要参数|
|miniProgram|Object|Required when type is 5|Required parameters for sharing mini programs|
|openCustomerServiceChat|Boolean|否|是否启用拉起客服功能（目前仅支持微信。HBuilder X 3.4.3+）|
|openCustomerServiceChat|Boolean|No|Enable the customer service function (currently only supports WeChat. HBuilder X 3.4.3+)|
|corpid|String|`openCustomerServiceChat = true` 时必填|客服ID（目前仅支持微信。HBuilder X 3.4.3+）|
|corpid|String|Required when `openCustomerServiceChat = true`|Customer ID (Currently only supports WeChat. HBuilder X 3.4.3+)|
|customerUrl|String|`openCustomerServiceChat = true` 时必填|客服的页面路径（目前仅支持微信。HBuilder X 3.4.3+）|
|customerUrl|String|Required when `openCustomerServiceChat = true`|Customer service page path (Currently only supports WeChat. HBuilder X 3.4.3+)|
|success|Function|否|接口调用成功的回调|
|success|Function|No|Callback for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

**type 值说明**
**type value description**

|值|说明|provider 支持度|
|value|description|provider support|
|:-|:-|:-|
|0|图文|weixin、sinaweibo|
|0|Graphics|weixin、sinaweibo|
|1|纯文字|weixin、qq|
|1|Plain text|weixin, qq|
|2|纯图片|weixin、qq|
|2|Pure Image|weixin, qq|
|3|音乐|weixin、qq|
|3|Music|weixin, qq|
|4|视频|weixin、sinaweibo|
|4|Video|weixin、sinaweibo|
|5|小程序|weixin|
|5|Mini Programs|weixin|

**scene 值说明**
**scene value description**

|值|说明|
|value|description|
|:-|:-|
|WXSceneSession|分享到聊天界面|
|WXSceneSession|Share to chat interface|
|WXSceneTimeline|分享到朋友圈|
|WXSceneTimeline|Share to Moments|
|WXSceneFavorite|分享到微信收藏|
|WXSceneFavorite|Share to WeChat Collection|

**miniProgram 值说明**
**miniProgram Value Description**

|值|类型|说明|
|value|type|description|
|:-|:-|:-|
|id|String|微信小程序原始id|
|id|String|Original id of WeChat Mini Program|
|path|String|点击链接进入的页面|
|path|String|The page to which the link was clicked|
|type|Number|微信小程序版本类型，可取值： 0-正式版； 1-测试版； 2-体验版。 默认值为0。|
|type|Number|WeChat applet version type, available values: 0-official version; 1-beta version; 2-trial version. The default value is 0. |
|webUrl|String|兼容低版本的网页链接|
|webUrl|String|Compatible with lower version web links|

**注意事项：**
**Precautions:**

* 真机运行时，分享调用的是HBuilder真机运行基座的sdk配置，分享出去的内容会显示为HBuilder。需自行在各社交平台注册账户，在manifest的sdk配置中填写自己的配置，打包后生效。
* When the real machine is running, the shared call is the sdk configuration of the HBuilder real machine running base, and the shared content will be displayed as HBuilder. You need to register an account on each social platform by yourself, fill in your own configuration in the sdk configuration of the manifest, and it will take effect after packaging.
* 分享到 QQ 必须含有 href 链接
* Share to QQ must contain href link
* 分享文字到 QQ 时，title 必选
* When sharing text to QQ, title is required
* 新浪微博仅支持分享本地音视频，不能分享网络音视频
* Sina Weibo only supports sharing local audio and video, not online audio and video
* 仅支持分享微信小程序到微信聊天界面，想进入朋友圈需改为分享图片方式，在图片中包含小程序码。一般通过canvas绘制图片，插件市场有很多生成图片的插件。
* Only supports sharing WeChat applet to WeChat chat interface. If you want to enter the circle of friends, you need to change the way to share pictures, and include the applet code in the picture. Generally, pictures are drawn through canvas, and there are many plugins for generating pictures in the plugin market.
* 在 iOS 端，若未安装微博客户端，会启用微博的网页分享，此时不能分享图片
* On the iOS side, if the Weibo client is not installed, the Weibo web page sharing will be enabled, and pictures cannot be shared at this time
* 分享新浪微博不会返回正确的成功回调
* Sharing on Sina Weibo does not return the correct success callback
* 不能直接分享到QQ空间，可以分享到QQ，然后在QQ的界面里选择QQ空间。
* You cannot share directly to QQ space, you can share to QQ, and then select QQ space in the QQ interface.
* 分享微信朋友圈多图，微信官方已经禁掉这个功能。可以考虑把多张图用canvas合并成一张图分享出去。
* Share multiple pictures in WeChat Moments, WeChat official has banned this function. You can consider merging multiple pictures into one picture with canvas to share.
* 从APP分享到微信时，无法判断用户是否点击取消分享，因为微信官方禁掉了分享成功的返回值。
* When sharing from APP to WeChat, it is impossible to judge whether the user clicks to cancel the sharing, because WeChat officially prohibits the return value of successful sharing.

#### 分享到微信聊天界面示例代码
#### Share to WeChat chat interface sample code

**分享文字**
**SHARE TEXT**
```javascript
uni.share({
	provider: "weixin",
	scene: "WXSceneSession",
	type: 1,
	summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
	success: function (res) {
		console.log("success:" + JSON.stringify(res));
	},
	fail: function (err) {
		console.log("fail:" + JSON.stringify(err));
	}
});
```

**分享图片**
**share pictures**
```javascript
uni.share({
	provider: "weixin",
	scene: "WXSceneSession",
	type: 2,
	imageUrl: "https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png",
	success: function (res) {
		console.log("success:" + JSON.stringify(res));
	},
	fail: function (err) {
		console.log("fail:" + JSON.stringify(err));
	}
});
```


**分享图文**
**Share pictures**

href、imageUrl 为必选参数，title/summary 二选一，最好将这四个参数都选上。
href and imageUrl are required parameters, and title/summary is optional. It is best to select all four parameters.

```javascript
uni.share({
	provider: "weixin",
	scene: "WXSceneSession",
	type: 0,
	href: "http://uniapp.dcloud.io/",
	title: "uni-app分享",
	summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
	imageUrl: "https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png",
	success: function (res) {
		console.log("success:" + JSON.stringify(res));
	},
	fail: function (err) {
		console.log("fail:" + JSON.stringify(err));
	}
});
```


#### 分享到微信朋友圈示例代码
#### Share to WeChat Moments Sample Code

**分享文字**
**SHARE TEXT**
```javascript
uni.share({
	provider: "weixin",
	scene: "WXSceneTimeline",
	type: 1,
	summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
	success: function (res) {
		console.log("success:" + JSON.stringify(res));
	},
	fail: function (err) {
		console.log("fail:" + JSON.stringify(err));
	}
});
```

**分享图片**
**share pictures**
```javascript
uni.share({
	provider: "weixin",
	scene: "WXSceneTimeline",
	type: 2,
	imageUrl: "https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png",
	success: function (res) {
		console.log("success:" + JSON.stringify(res));
	},
	fail: function (err) {
		console.log("fail:" + JSON.stringify(err));
	}
});
```

**分享图文**
**Share pictures and texts**

href、imageUrl 为必选参数，title、summary 至少有一项。
href and imageUrl are required parameters, and at least one of title and summary is required.

```javascript
uni.share({
	provider: "weixin",
	scene: "WXSceneTimeline",
	type: 0,
	href: "http://uniapp.dcloud.io/",
	title: "uni-app分享",
	summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
	imageUrl: "https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png",
	success: function (res) {
		console.log("success:" + JSON.stringify(res));
	},
	fail: function (err) {
		console.log("fail:" + JSON.stringify(err));
	}
});
```

**App分享为微信小程序**（App中分享一个内容到微信好友，对方微信中呈现的是一个小程序卡片）
**App sharing is a WeChat applet** (Apps share a content to WeChat friends, and the other party's WeChat shows a small program card)

```javascript
uni.share({
    provider: 'weixin',
    scene: "WXSceneSession",
    type: 5,
    imageUrl: 'https://web-assets.dcloud.net.cn/unidoc/zh/share-logo@3.png',
    title: '欢迎体验uniapp',
    miniProgram: {
        id: 'gh_abcdefg',
        path: 'pages/index/index',
        type: 0,
        webUrl: 'http://uniapp.dcloud.io'
    },
    success: ret => {
        console.log(JSON.stringify(ret));
    }
});
```


#### uni.share 在App端各社交平台分享配置说明
#### uni.share Share configuration instructions on various social platforms on the App side

- 第一步，打开 manifest.json -> App模块权限配置，勾选 Share(分享)；
- The first step, open manifest.json -> App module permission configuration, check Share;
- 第二步，按如下文档具体配置微信、微博、QQ的参数。
- The second step is to configure the parameters of WeChat, Weibo and QQ according to the following documents.

##### 微信分享
##### WeChat sharing

在 manifest.json 的 App SDK 配置里，勾选微信消息及朋友圈，并填写 appid，如需在iOS平台使用还需要配置通用链接。
In the App SDK configuration of manifest.json, check WeChat messages and Moments, and fill in the appid. If you want to use it on the iOS platform, you need to configure the universal link.

**参考文档**
**Reference Documentation**

- 微信 appid 申请步骤：[https://ask.dcloud.net.cn/article/208](https://ask.dcloud.net.cn/article/208)。
- WeChat appid application steps: [https://ask.dcloud.net.cn/article/208](https://ask.dcloud.net.cn/article/208).
- iOS平台微信SDK配置通用链接：[https://ask.dcloud.net.cn/article/36445](https://ask.dcloud.net.cn/article/36445)。
- General link for WeChat SDK configuration on iOS platform: [https://ask.dcloud.net.cn/article/36445](https://ask.dcloud.net.cn/article/36445).

![](https://web-assets.dcloud.net.cn/unidoc/zh/mp-weixin-manifest-share.png)

##### 新浪微博分享
##### Share on Sina Weibo
在 manifest.json 的 App SDK 配置里，勾选勾选新浪微博，并填写相关appkey，新浪微博 appkey 申请步骤可参考：[https://ask.dcloud.net.cn/article/209](https://ask.dcloud.net.cn/article/209)。
In the App SDK configuration of manifest.json, check Sina Weibo, and fill in the relevant appkey. For the Sina Weibo appkey application steps, please refer to: [https://ask.dcloud.net.cn/article/209]( https://ask.dcloud.net.cn/article/209).

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni2019022502.png)

##### QQ 分享
##### QQ Share
在 manifest.json 的 App SDK 配置里，勾选分享到QQ好友，并填写相关appkey，QQ分享 appkey 申请步骤：
In the App SDK configuration of manifest.json, check Share to QQ friends, and fill in the relevant appkey, QQ share appkey application steps:

1. 前往 QQ 开放平台：[https://connect.qq.com/index.html](https://connect.qq.com/index.html)；
1. Go to QQ Open Platform: [https://connect.qq.com/index.html](https://connect.qq.com/index.html);
2. 完成开发者注册；
2. Complete the developer registration;
3. 创建应用，选择移动 App，填写相关信息，然后等待审核，审核通过后即可得到AppId。
3. Create an app, select a mobile app, fill in the relevant information, and wait for the review. After the review is passed, you can get the AppId.

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni2019022503.png)

这些配置需要打包生效，真机运行仍然是HBuilder基座的设置，可使用[自定义基座包](http://ask.dcloud.net.cn/article/12723)调试。离线打包请参考离线打包文档在原生工程中配置。
These configurations need to be packaged to take effect, and the real machine operation is still the setting of the HBuilder base, which can be debugged using the [custom base package](http://ask.dcloud.net.cn/article/12723). For offline packaging, please refer to the offline packaging documentation to configure in the native project.

配置并打包后，通过`uni.getProvider`可以得到配置的结果列表，注意这里返回的是manifest配置的，与手机端是否安装微信、QQ、微博无关。
After configuration and packaging, you can get a list of configuration results through `uni.getProvider`. Note that what is returned here is the manifest configuration, which has nothing to do with whether WeChat, QQ, or Weibo is installed on the mobile phone.

如果手机端未安装QQ、微博，调用时会启动这些平台的wap页面分享，如果已安装相应客户端，会启动它们的客户端分享。
If QQ and Weibo are not installed on the mobile phone, the wap page sharing of these platforms will be activated when called, and if the corresponding client has been installed, their client-side sharing will be activated.


##### FAQ
- Q：App端如何集成其他分享SDK，如facebook分享、twitter分享
- Q: How to integrate other sharing SDKs on the App side, such as facebook sharing, twitter sharing
- A：插件市场已有相关插件，[详见](https://ext.dcloud.net.cn/search?q=share)；也可以根据原生插件教程自行开发，原生插件开发文档见[https://ask.dcloud.net.cn/article/35428](https://ask.dcloud.net.cn/article/35428)
- A: There are relevant plugins in the plugin market, [see details](https://ext.dcloud.net.cn/search?q=share); you can also develop your own according to the native plugin tutorial, see the native plugin development documentation [https://ext.dcloud.net.cn/search?q=share); ://ask.dcloud.net.cn/article/35428](https://ask.dcloud.net.cn/article/35428)

- Q：弹出分享菜单，是否有已经写好的插件？
- Q: The share menu pops up. Are there any plugins that have been written?
- A：插件市场有很多封装好的分享菜单插件，[底部图标菜单](https://ext.dcloud.net.cn/search?q=%E5%BA%95%E9%83%A8%E5%9B%BE%E6%A0%87%E8%8F%9C%E5%8D%95)，可直接弹出菜单，并且没有遮挡层级问题，推荐使用。
- A: There are many packaged share menu plugins in the plugin market, [bottom icon menu](https://ext.dcloud.net.cn/search?q=%E5%BA%95%E9%83%A8%E5 %9B%BE%E6%A0%87%E8%8F%9C%E5%8D%95), the menu can pop up directly, and there is no occlusion level problem, it is recommended to use.

### uni.shareWithSystem(OBJECT)

调用系统分享组件发送分享消息，不需要配置分享SDK
Call the system sharing component to send the sharing message, no need to configure the sharing SDK

**平台差异说明**
**Platform Difference Description**

|App				|H5	|微信小程序	|支付宝小程序	|百度小程序	|字节跳动小程序、飞书小程序	|QQ小程序	|京东小程序|
|App |H5 |WeChat applet |Alipay applet |Baidu applet |ByteDance applet, Feishu applet |QQ applet |JD applet|
|:-:				|:-:	|:-:		|:-:					|:-:			|:-:				|:-:			|:-:			|
|√(App 2.6.4+)	|x		|x			|x						|x				|x					|x				|x				|


**OBJECT 参数说明**
**OBJECT parameter description**

|参数名		|类型		|必填	|说明																		|
|Parameter Name |Type |Required |Description |
|:-				|:-			|:-		|:-																			|
|type			|String	|-		|分享类型，只支持text，image，默认为text|
|type |String |- |Share type, only supports text, image, the default is text|
|summary	|String	|-		|分享的文字内容													|
|summary |String |- |Shared text content |
|href			|String	|-		|分享链接，ios端分享到微信时必填此字段	|
|href |String |- |Share link, this field is required when sharing to WeChat on ios |
|imageUrl	|String	|-		|分享图片，仅支持本地路径								|
|imageUrl |String |- |Share image, only support local path |
|success|Function|否|接口调用成功的回调|
|success|Function|No|Callback for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

**注意事项**
**Precautions**

- Android端当msg参数中设置图片（`imageUrl`属性）时，分享类型自动变为为`image`，在分享时可能只会发送图片（如微信）；没有设置图片时分享类型则认为是文本`text`。
- On the Android side, when an image (`imageUrl` attribute) is set in the msg parameter, the sharing type automatically becomes `image`, and only images (such as WeChat) may be sent when sharing; if no image is set, the sharing type is considered to be text `text`.
- Android端高版本无法分析私有路径的图片，只能分享来自相册的图片（使用 uni.chooseImage 选择图像时请设置为原图）。
- The high-end version on Android cannot analyze the pictures in the private path, and can only share pictures from the album (please set the original picture when using uni.chooseImage to select an image).
- iOS端不同的分享程序对分享内容有要求，如微信分享时必需添加链接地址`href`，否则微信分享失败。 注：iOS8.0及以上系统触发成功回调则表示发送消息成功。
- Different sharing programs on the iOS side have requirements for sharing content. For example, the link address `href` must be added when sharing on WeChat, otherwise WeChat sharing will fail. Note: When iOS8.0 and above systems trigger a success callback, it means that the message is sent successfully.

**示例代码**
**Sample code**

```javascript
uni.shareWithSystem({
  summary: '',
  href: 'https://uniapp.dcloud.io',
  success(){
    // 分享完成，请注意此时不一定是成功分享
    // The sharing is complete, please note that it is not necessarily a successful sharing at this time
  },
  fail(){
    // 分享失败
    // share failed
  }
})
```

### plus.share.sendWithSystem(msg, successCB, errorCB)

Android和iOS都有应用注册分享接口的机制，基本上所有有接收分享内容功能的应用，都会注册分享接口。
Both Android and iOS have mechanisms for application registration and sharing interfaces. Basically, all applications that have the function of receiving and sharing content will register the sharing interface.

App端可调用手机的系统分享，实现所有注册分享的应用的呼起，比如短信、邮件、蓝牙(仅Android)、隔空投送(仅iOS)，或其他注册系统分享的应用，比如钉钉。
The app side can call the system sharing of the mobile phone to realize the calling of all registered and shared applications, such as SMS, email, Bluetooth (Android only), AirDrop (iOS only), or other applications shared by the registered system, such as DingTalk.

与`uni.share`相比，调用系统分享不需要集成三方sdk。但有些功能上的限制，比如无法分享为微信小程序。
Compared to `uni.share`, calling system share does not require the integration of third-party SDKs. However, there are some functional limitations, such as the inability to share as a WeChat applet.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|x|x|x|x|x|x|x|

说明：
illustrate:
调用系统分享组件分享消息，通过msg参数设置分享内容。 发送成功后通过successCB回调函数通知操作完成，发送失败则通过errorCB回调返回。
Call the system sharing component to share messages, and set the shared content through the msg parameter. After successful sending, the operation is notified through the successCB callback function, and if the sending fails, it is returned through the errorCB callback.

|参数|类型|说明|
|parameters|type|description|
|:-|:-|:-|
|msg|object|要发送的分享消息对象，如文字内容，图片等信息。对象格式见下。必填|
|msg|object|The object of the shared message to be sent, such as text content, pictures and other information. See below for the object format. Required|
|successCB||成功回调，可选。注：此回调仅保证呼起分享界面，并不表示分享消息已经发送成功|
|successCB|| Success callback, optional. Note: This callback only ensures that the sharing interface is called up, and does not mean that the sharing message has been sent successfully|
|errorCB||失败回调，可选|
|errorCB||Failure callback, optional|

**msg参数说明**
**msg parameter description**

|参数|类型|说明|
|parameters|type|description|
|:-|:-|:-|
|type|String|分享类型，仅支持text、image|
|type|String|Share type, only supports text, image|
|content|String|分享消息的文字内容|
|content|String|Text content of the shared message|
|pictures|Array[ String ]|分享消息中包含的图片路径，仅支持本地路径。 若分享平台仅支持提交一张图片，传入多张图片则仅提交第一张图片。 如果未指定type类型，优先级顺序为：pictures>content（即设置了pictures则认为分享图片类型）。|
|pictures|Array[ String ]| The picture path included in the share message, only local path is supported. If the sharing platform only supports the submission of one image, if multiple images are passed in, only the first image will be submitted. If the type type is not specified, the priority order is: pictures>content (that is, if pictures are set, the image type is considered to be shared). |
|href|String|分享独立的链接地址，仅支持网络地址（以http://或https://开头）。 如果未指定type类型，优先级顺序为：href>pictures>content（即设置了href则认为分享网页类型）。|
|href|String|Share an independent link address, only web addresses (starting with http:// or https://) are supported. If the type type is not specified, the priority order is: href>pictures>content (that is, if href is set, it is considered to be the type of shared web page). |

**示例代码**
**Sample code**
```javascript
	plus.share.sendWithSystem({content:'分享内容',href:'https://www.dcloud.io/'}, function(){
		console.log('分享成功');
	}, function(e){
		console.log('分享失败：'+JSON.stringify(e));
	});
```

**注意**
**Notice**
- Android：当msg参数中设置图片（msg.pictures属性）时，分享类型为"image"，在分享时可能只会发送图片（如微信）；没有设置图片时分享类型则认为是文本"text"。
- Android: When a picture (msg.pictures property) is set in the msg parameter, the sharing type is "image", and only pictures (such as WeChat) may be sent when sharing; when no picture is set, the sharing type is considered to be text "text" .
- iOS：不同的分享程序对分享内容有要求，如微信分享时必需添加链接地址（msg.href），否则微信分享失败。 注：iOS8.0及以上系统表示分享操作成功则表示发送消息成功。
- iOS: Different sharing programs have requirements for sharing content. For example, a link address (msg.href) must be added when sharing on WeChat, otherwise WeChat sharing will fail. Note: For iOS8.0 and above systems, if the sharing operation is successful, it means that the message is sent successfully.
- 很多App的做法是点击分享按钮首先弹出一个自定义菜单，放置微信好友、朋友圈、QQ、微博等功能图标，然后再放置一个更多分享，点击后会调用系统分享。类似插件在[插件市场](https://ext.dcloud.net.cn/search?q=%E5%BA%95%E9%83%A8%E5%9B%BE%E6%A0%87%E8%8F%9C%E5%8D%95)很多。
- The practice of many apps is to click the share button to first pop up a custom menu, place function icons such as WeChat friends, circle of friends, QQ, Weibo, etc., and then place a more share, which will call the system to share after clicking. Similar plugins are available in [Plugin Market](https://ext.dcloud.net.cn/search?q=%E5%BA%95%E9%83%A8%E5%9B%BE%E6%A0%87%E8 %8F%9C%E5%8D%95) a lot.

### onShareAppMessage(OBJECT)

小程序中用户点击分享后，在 js 中定义 onShareAppMessage 处理函数（和 onLoad 等生命周期函数同级），设置该页面的分享信息。
After the user clicks share in the applet, define the onShareAppMessage handler function (same level as onLoad and other life cycle functions) in js to set the sharing information of the page.

* 用户点击分享按钮的时候会调用。这个分享按钮可能是小程序右上角原生菜单自带的分享按钮，也可能是开发者在页面中放置的分享按钮（`<button open-type="share">`）；
* Called when the user clicks the share button. This share button may be the share button that comes with the native menu in the upper right corner of the applet, or it may be the share button (` <button open-type="share">`) placed by the developer on the page;</button>
* 此事件需要 return 一个Object，用于自定义分享内容。
* This event needs to return an Object for custom sharing content.

微信小程序平台的分享管理比较严格，请参考 [小程序分享指引](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html)。
The sharing management of WeChat Mini Program platform is relatively strict, please refer to [Mini Program Sharing Guidelines](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html).

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|x|√|√|√|√|


|参数|类型|说明|平台差异说明|
|Parameter|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|from|String|分享事件来源：button（页面内分享按钮）、menu（右上角分享按钮）||
|from|String|Share event source: button (share button in the page), menu (share button in the upper right corner)||
|target|Object|如果 from 值是 button，则 target 是触发这次分享事件的 button，否则为 undefined||
|target|Object|If the from value is button, the target is the button that triggered the sharing event, otherwise it is undefined||
|webViewUrl|String|页面中包含 ``<web-view>`` 组件时，返回当前 ``<web-view>`` 的url|微信小程序1.6.4+、支付宝小程序、京东小程序|
|webViewUrl|String|When the page contains the ``<web-view>`` component, return the url of the current ``<web-view>``|WeChat Mini Program 1.6.4+, Alipay Mini Program, JD Mini Program|

此事件需要 return 一个 Object，用于自定义分享内容，其内容如下：
This event needs to return an Object, which is used to customize the sharing content, and its content is as follows:

|参数名			|类型			|必填	|说明						|平台差异说明		|
|Parameter Name |Type |Required |Description |Platform Difference Description |
|:-					|:-				|:-		|:-			|:-					|
|title			|String		|是		|分享标题				|						|
|title |String |Yes |Share title | |
|path				|String		|是		|页面 path ，必须是以 / 开头的完整路径。注意：京东小程序，开头不要加'/'	|QQ小程序不支持						|
|path |String |Yes |Page path , must be a full path starting with / . Note: Jingdong applet, do not add '/' at the beginning |QQ applet does not support |
|imageUrl		|String		|否		|分享图标，路径可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4	|			|
|imageUrl |String |No |Share icon, the path can be local file path, code package file path or network image path. Support PNG and JPG. Display image aspect ratio is 5:4 | |
|content		|String		|否		|百度小程序表现为：分享内容；支付宝小程序表现为：吱口令文案	|百度小程序、支付宝小程序	|
|content |String |No |Baidu applet: share content; Alipay applet: squeak copy |Baidu applet, Alipay applet |
|desc				|String		|否		|自定义分享描述				|支付宝小程序、字节跳动小程序、京东小程序	|
|desc |String |No |Custom share description |Alipay applet, ByteDance applet, JD.com applet |
|bgImgUrl		|String		|否		|自定义分享二维码的背景图，建议大小750*950（网络图片路径）		|支付宝小程序			|
|bgImgUrl |String |No |Customize the background image of the shared QR code, the recommended size is 750*950 (network image path) |Alipay applet |
|query			|String		|否		|QQ小程序查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 qq.getLaunchOptionSync() 或 qq.onShow() 获取启动参数中的 query。	|QQ小程序									|
|query |String |No |QQ applet query string must be in the format of key1=val1&key2=val2. After entering from this forwarding message, the query in the launch parameters can be obtained through qq.getLaunchOptionSync() or qq.onShow(). |QQ Mini Program |
|templateId	|String		|否		|开发者后台设置的分享素材模板 id		|字节跳动小程序|
|templateId |String |No |The shared material template id set by the developer in the background |ByteDance applet|
|mpId	|String		|否		|微信小程序id，此场景用于分享到微信后，用户点击分享卡片，进入该appid对应的微信小程序，实现引流到微信小程序		|京东小程序|
|mpId |String |No |Wechat applet id, this scenario is used for sharing to WeChat, the user clicks the sharing card, enters the WeChat applet corresponding to the appid, and realizes the drainage to the WeChat applet |JD.com applet|
|type	|Number		|否		|转发形式（0 - 微信小程序正式版 ；1 - 微信小程序开发版；2 - 微信小程序体验版；京东App9.0.0开始不填或者其他值都会先判断是否有url参数，如果有打开分享后显示url对应页面，否则默认生成京东小程序官方的一个分享中间页面，点击可跳到京东app里面的对应小程序。）|京东小程序|
|type |Number |No |Forwarding form (0 - official version of WeChat applet; 1 - development version of WeChat applet; 2 - experience version of WeChat applet; JD App 9.0.0 will not fill in or other values will first determine whether there is a url parameter, if there is a page corresponding to the url displayed after sharing is opened, otherwise an official sharing intermediate page of the JD applet will be generated by default. Click to jump to the corresponding applet in the JD app.)|JD applet|
|mpPath	|String		|否		|微信小程序路径	|京东小程序|
|mpPath |String |No |WeChat Mini Program Path |JD Mini Program|
|channel	|String		|否		|渠道（不写默认微信朋友，微信朋友圈）	|京东小程序|
|channel |String |No |Channel (do not write default WeChat friends, WeChat Moments) |JD Mini Program|
|url	|String		|否		|h5链接地址（h5分享填写，不填默认中间页）	|京东小程序|
|url |String |No |h5 link address (fill in h5 share, do not fill in the default middle page) |JD Mini Program|
|success		|Function	|否		|接口调用成功的回调函数				|支付宝小程序、百度小程序	|
|success |Function |No |Callback function for successful interface call |Alipay applet, Baidu applet |
|fail				|Function	|否		|接口调用失败的回调函数			|支付宝小程序、百度小程序	|
|fail |Function |No |Callback function for interface call failure |Alipay applet, Baidu applet |
|complete		|Function	|否		|接口调用结束的回调函数（调用成功、失败都会执行）		|百度小程序			|
|complete |Function |No |Callback function at the end of the interface call (the call will be executed if the call succeeds or fails) |Baidu Mini Program |

**示例代码**
**Sample code**

```javascript
export default {
  onShareAppMessage(res) {
    if (res.from === 'button') {// 来自页面内分享按钮
      console.log(res.target)
    }
    return {
      title: '自定义分享标题',
      path: '/pages/test/test?id=123'
    }
  }
}
```

**注意**
**Notice**
* 微信、头条平台：只有定义了此事件处理函数，小程序右上角菜单才会显示“转发”按钮
* WeChat and Toutiao platforms: Only if this event handler is defined, the "Forward" button will be displayed in the menu in the upper right corner of the applet
* QQ小程序还支持通过[qq.offShareAppMessage](https://q.qq.com/wiki/develop/game/API/share/qq.offShareAppMessage.html)取消对系统分享按钮的监听。
* The QQ applet also supports canceling the monitoring of the system share button through [qq.offShareAppMessage](https://q.qq.com/wiki/develop/game/API/share/qq.offShareAppMessage.html).

### uni.showShareMenu(OBJECT)

小程序的原生菜单中显示分享按钮
Display the share button in the native menu of the applet

**平台差异说明**
**Platform Difference Description**

|App|H5	|微信小程序	|支付宝小程序	|百度小程序	|字节跳动小程序、飞书小程序	|QQ小程序	|快手小程序|京东小程序|
|App|H5 |WeChat applet |Alipay applet |Baidu applet |ByteDance applet, Feishu applet |QQ applet |Kuishou applet|Jingdong applet|
|:-:|:-:|:-:				|:-:			|:-:				|:-:				|:-:			|:-:				|:-:			|
|x	|x	|√					|√					|√					|√					|√				|√					|√				|



|属性						|类型			|必填	|说明			|平台差异说明	|
|Attribute |Type |Required |Description |Platform Difference Description |
|:-							|:-				|:-		|:-							|:-						|
|withShareTicket|Boolean	|否		|是否使用带 shareTicket 的转发，默认为 flase。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html)|微信小程序		|
|withShareTicket|Boolean |No |Whether to use forwarding with shareTicket, default is false. [Details](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html)|WeChat Mini Program |
|title					|String		|否		|分享标题			|百度小程序		|
|title |String |No |Share title |Baidu Mini Program |
|content				|String		|否		|分享内容						|百度小程序		|
|content |String |No |Share content |Baidu Mini Program |
|imageUrl				|String		|否		|分享图标						|百度小程序		|
|imageUrl |String |No |Share Icon |Baidu Mini Program |
|path						|String		|否		|页面 path ，必须是以 / 开头的完整路径。	|百度小程序		|
|path |String |No |page path , must be a full path starting with / . |Baidu Mini Program |
|success				|Function	|否		|接口调用成功的回调函数	|							|
|success |Function |No |Callback function for successful interface call | |
|fail						|Function	|否		|接口调用失败的回调函数	|							|
|fail |Function |No |Callback function for interface call failure | |
|complete				|Function	|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|&nbsp;				|
|complete |Function |No |The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |&nbsp; |


### uni.hideShareMenu(OBJECT)
小程序的原生菜单中隐藏分享按钮
Hide the share button in the native menu of the applet

**平台差异说明**
**Platform Difference Description**

|App|H5	|微信小程序	|支付宝小程序	|百度小程序	|字节跳动小程序、飞书小程序	|QQ小程序	|快手小程序|京东小程序|
|App|H5 |WeChat applet |Alipay applet |Baidu applet |ByteDance applet, Feishu applet |QQ applet |Kuishou applet|Jingdong applet|
|:-:|:-:|:-:				|:-:					|:-:				|:-:				|:-:			|:-:				|:-:			|
|x	|x	|√					|√(1.17.0+)	|x					|√					|√				|√					|√				|


|属性						|类型			|必填	|说明				|平台差异说明	|
|Attribute |Type |Required |Description |Platform Difference Description |
|:-							|:-				|:-		|:-				|:-						|
|hideShareItems	|Array		|否		|['qq']控制是否隐藏"转发"，['qzone']控制是否隐藏"分享到空间"，不带hideShareItems参数默认"转发"、"分享到空间"全隐藏。目前只支持'qq'、'qzone'。	|QQ小程序			|
|hideShareItems |Array |No |['qq'] controls whether to hide "forward", ['qzone'] controls whether to hide "share to space", without hideShareItems parameter, "forward" and "share to space" are all hidden by default. Currently only 'qq' and 'qzone' are supported. |QQ Mini Program |
|success				|function	|否		|接口调用成功的回调函数																																																										|							|
|success |function |No |Callback function for successful interface call | |
|fail						|function	|否		|接口调用失败的回调函数																																																										|							|
|fail |function |No |Callback function for interface call failure | |
|complete				|function	|否		|接口调用结束的回调函数（调用成功、失败都会执行）																																													|							|
|complete |function |No |The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) | |

**代码示例**
**CODE EXAMPLE**

```javascript
uni.hideShareMenu()
```

**注意**
**Notice**
* QQ小程序可以单独控制隐藏分享到QQ好友或分享到QQ空间，详见其[API文档](https://q.qq.com/wiki/develop/game/API/share/qq.hideShareMenu.html)
* The QQ applet can be individually controlled to hide and share to QQ friends or to QQ space, see its [API document](https://q.qq.com/wiki/develop/game/API/share/qq.hideShareMenu. html)
