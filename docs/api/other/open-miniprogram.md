### uni.navigateToMiniProgram(OBJECT)

打开另一个小程序。
Open another applet.

**平台差异说明**
**Platform Difference Description**

|App|H5|[微信小程序](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html)|[支付宝小程序](https://docs.alipay.com/mini/api/open-miniprogram)|[百度小程序](https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#swan-navigateToSmartProgram/)|[字节跳动小程序](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/open-interface/mini-app-forward/tt-navigate-to-mini-program/)|[QQ小程序](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_change.html#qq-navigatetominiprogram)|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x(见下)|x|√|√|√|√(1.15.0+)|√|√|
|x (see below)|x|√|√|√|√(1.15.0+)|√|√|

- App平台打开微信小程序，使用plus.share的[launchMiniProgram](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService.launchMiniProgram)。注意uni-app不需要plus ready，将plus ready里的代码写到页面的onLoad生命周期即可。使用此功能需在manifest中配置微信分享SDK信息，打包后生效。
- Open the WeChat Mini Program on the App platform and use the [launchMiniProgram] of plus.share (https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService.launchMiniProgram). Note that uni-app does not need plus ready, just write the code in plus ready to the onLoad life cycle of the page. To use this function, you need to configure WeChat to share SDK information in the manifest, and it will take effect after packaging.
- 各小程序平台对跳转到其他小程序有一些限制和规定，需要遵守，具体见各平台文档。
- Each Mini Program platform has some restrictions and regulations on jumping to other Mini Programs, which need to be followed. For details, see the documentation of each platform.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|平台差异说明|
|Attribute|Type|Default|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|:-|
|appId|string||是|要打开的小程序 appId（百度小程序则填写App Key）||
|appId|string||Yes|The applet appId to be opened (fill in the App Key for Baidu applet)||
|path|string||否|打开的页面路径，如果为空则打开首页||
|path|string||No|Open page path, if empty, open home page||
|extraData|object||否|需要传递给目标小程序的数据，目标小程序可在 ``App.vue `` 的 `onLaunch`或`onShow` 中获取到这份数据。||
|envVersion|string|release|否|要打开的小程序版本，有效值： develop（开发版），trial（体验版），release（正式版）。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。|支付宝小程序、微信小程序、字节小程序|
|success|function||否|接口调用成功的回调函数||
|success|function||No|Callback function for successful interface call||
|fail|function||否|接口调用失败的回调函数||
|fail|function||No|Callback function for interface call failure||
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|function||No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|

**示例代码**
**Sample code**

```js
uni.navigateToMiniProgram({
  appId: '',
  path: 'pages/index/index?id=123',
  extraData: {
    'data1': 'test'
  },
  success(res) {
    // 打开成功
    // open successfully
  }
})
```



### uni.navigateBackMiniProgram(OBJECT)

跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功。
Jump back to the previous applet, only when another applet jumps to the current applet can it be called successfully.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet|Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|x|√|√|√|

**OBJECT参数说明**
**OBJECT parameter description**

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|extraData|Object|否|需要返回给上一个小程序的数据，上一个小程序可在 ``App.vue `` 的 `onShow` 中获取到这份数据|
|extraData|Object|No|The data that needs to be returned to the previous applet, the last applet can get this data in `onShow` of ``App.vue ``|
|success|function|否|接口调用成功的回调函数|
|success|function|No|Callback function for successful interface call|
|fail|function|否|接口调用失败的回调函数|
|fail|function|No|Callback function for interface call failure|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

**示例代码**
**Sample code**
```js
uni.navigateBackMiniProgram({
  extraData: {
    'data1': 'test'
  },
  success(res) {
    // 返回成功
    // return success
  }
})
```

### uni.openEmbeddedMiniProgram(OBJECT)

微信小程序跳转小程序（半屏模式）（从微信础库 2.20.1 开始支持）
WeChat applet jump to applet (half-screen mode) (supported from WeChat base library 2.20.1)

当小程序需要打开另一个小程序让用户进行快捷操作时，可将要打开的小程序以半屏的形态跳转。
When the applet needs to open another applet for the user to perform shortcut operations, the applet to be opened can be jumped in the form of a half screen.

![](https://web-assets.dcloud.net.cn/unidoc/zh/wx-miniprogram.jpeg)

**调用流程**
**Call process**

1. 微信小程序2.23.1以下版本基础库，开发者需要在全局配置`manifest.json`-->`mp-weixin`节点下添加`embeddedAppIdList`字段并声明需要半屏跳转的小程序，若不配置将切换为普通的小程序跳转小程序。2.23.1及以上版本起无需配置。
1. For the basic library of WeChat applet version 2.23.1 or lower, developers need to add the `embeddedAppIdList` field in the global configuration `manifest.json`-->`mp-weixin` node and declare the applet that needs half-screen jumping. If it is not configured, it will switch to the normal applet and jump to the applet. No configuration is required since version 2.23.1 and above.

配置示例：
Configuration example:

```js
	{
		"mp-weixin" : {
		   "embeddedAppIdList": ["wxe5f52902cf4de896"]//需要半屏跳转的小程序appid
		}
	}
```

2. 开发者通过调用uni.openEmbeddedMiniProgram半屏跳转小程序：
2. The developer can jump to the applet by calling uni.openEmbeddedMiniProgram:

|属性 |类型 |默认值|必填  |说明|
|property |type |default value|required |description|
|--	|--	|--	|--	|--	|
|appId|string	|	|	是|要打开的小程序 appId|
|appId|string | | Yes |the applet to open appId|
|path	|string	|	|否 |	打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的``App.vue `` 的 `onLaunch`、`onShow`和 Page.onLoad 的回调函数中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)|
|path |string | |No | The path of the page to open, if empty, open the home page. The part after the ? in the path will become the query, and the query data can be obtained in the callback functions of `onLaunch`, `onShow` and Page.onLoad of `App.vue` of the applet. For small games, you can only pass in the query part to achieve the effect of passing parameters, for example: pass in "?foo=bar". [See details](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)|
|extraData	|	object|	|否	|需要传递给目标小程序的数据，目标小程序可在 ``App.vue `` 的 `onLaunch`或`onShow` 中获取到这份数据。[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)|
|extraData | object| |No |The data that needs to be passed to the target applet. The target applet can obtain this data in `onLaunch` or `onShow` of ``App.vue ``. [See details](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)|
|envVersion|string	|release	|否	|要打开的小程序版本，有效值： develop（开发版），trial（体验版），release（正式版）。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。	|
|envVersion|string |release |No |The version of the applet to open, valid values: develop (development version), trial (experience version), release (official version). This parameter is valid only when the current Mini Program is the development version or the trial version. If the current applet is the official version, the opened applet must be the official version. |
|shortLink	|string	|	|否	|小程序链接，当传递该参数后，可以不传 appId 和 path。链接可以通过【小程序菜单】->【复制链接】获取。	|
|shortLink |string | |No |Mini program link, when this parameter is passed, appId and path can be omitted. The link can be obtained through [Mini Program Menu] -> [Copy Link]. |
|success	|function	|	|否	|接口调用成功的回调函数	|
|success |function | |No |Callback function for successful interface call |
|fail|function	|	|否	|接口调用失败的回调函数	|
|fail|function | |No |Callback function for interface call failure |
|complete	|function	|	|否	|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete |function | |No |Callback function for the end of the interface call (the call will be executed if the call succeeds or fails)|


**示例代码**
**Sample code**

```js
uni.openEmbeddedMiniProgram({
	appId: '',
	path: 'pages/index/index?id=123',
	extraData: {
		'data1': 'test'
	},
	success(res) {
    // 打开成功
    // open successfully
	}
})
```


**使用限制**
**Usage Restrictions**

2022年3月18日后，使用过程有以下限制，若不符合以下所有条件将被自动切换为普通的小程序跳转小程序，不影响用户使用：
After March 18, 2022, the use process has the following restrictions. If all the following conditions are not met, it will be automatically switched to the normal applet jump applet, which will not affect the user's use:

1. 被半屏跳转的小程序需要通过来源小程序的调用申请，开发者可在 小程序管理后台「设置」-「第三方设置」-「半屏小程序管理」板块发起申请，最多可以申请10个小程序；
1. The applet that is jumped by half-screen needs to be applied through the calling of the source applet. The developer can initiate an application in the "Settings" - "Third-party Settings" - "Half-screen applet management" section of the applet management background. Apply for 10 Mini Programs;
2. 微信小程序2.23.1版本以下基础库，被半屏打开的小程序需要在全局配置`manifest.json`-->`mp-weixin`节点下添加`embeddedAppIdList`字段并声明；
2. The basic library of WeChat applet version 2.23.1 and below, the applet opened by half-screen needs to add the `embeddedAppIdList` field and declare it in the global configuration `manifest.json`-->`mp-weixin` node;
3. 当前小程序需为竖屏；
3. The current applet needs to be vertical screen;
4. 被半屏跳转的小程序需为非个人主体小程序（不含小游戏）
4. The applet that is jumped by half-screen must be a non-personal main applet (excluding mini-games)

2022年3月18日前，使用过程有以下限制，若不符合以下所有条件将被自动切换为普通的小程序跳转小程序，不影响用户使用：
Before March 18, 2022, the use process has the following restrictions. If all of the following conditions are not met, it will be automatically switched to the normal applet jumping applet, which will not affect the user's use:

1. 不能在横屏下打开半屏小程序
1. Cannot open half-screen applet in landscape mode
2. 能打开小游戏
3. 跳转目标小程序需符合以下类目，[详见小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)
