### uni.navigateToMiniProgram(OBJECT)

打开另一个小程序。

**平台差异说明**

|App|H5|[微信小程序](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html)|[支付宝小程序](https://docs.alipay.com/mini/api/open-miniprogram)|[百度小程序](https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#swan-navigateToSmartProgram/)|[字节跳动小程序](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/open-interface/mini-app-forward/tt-navigate-to-mini-program/)|[QQ小程序](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_change.html#qq-navigatetominiprogram)|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x(见下)|x|√|√|√|√(1.15.0+)|√|√|

- App平台打开微信小程序，使用plus.share的[launchMiniProgram](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService.launchMiniProgram)。注意uni-app不需要plus ready，将plus ready里的代码写到页面的onLoad生命周期即可。使用此功能需在manifest中配置微信分享SDK信息，打包后生效。
- 各小程序平台对跳转到其他小程序有一些限制和规定，需要遵守，具体见各平台文档。

**OBJECT 参数说明**

|属性|类型|默认值|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|:-|
|appId|string||是|要打开的小程序 appId（百度小程序则填写App Key）||
|path|string||否|打开的页面路径，如果为空则打开首页||
|extraData|object||否|需要传递给目标小程序的数据，目标小程序可在 ``App.vue `` 的 `onLaunch`或`onShow` 中获取到这份数据。||
|envVersion|string|release|否|要打开的小程序版本，有效值： develop（开发版），trial（体验版），release（正式版）。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。|支付宝小程序、微信小程序、字节小程序|
|success|function||否|接口调用成功的回调函数||
|fail|function||否|接口调用失败的回调函数||
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

**示例代码**

```js
uni.navigateToMiniProgram({
  appId: '',
  path: 'pages/index/index?id=123',
  extraData: {
    'data1': 'test'
  },
  success(res) {
    // 打开成功
  }
})
```



### uni.navigateBackMiniProgram(OBJECT)

跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|x|√|√|√|

**OBJECT参数说明**

|属性|类型|必填|说明|
|:-|:-|:-|:-|
|extraData|Object|否|需要返回给上一个小程序的数据，上一个小程序可在 ``App.vue `` 的 `onShow` 中获取到这份数据|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例代码**
```js
uni.navigateBackMiniProgram({
  extraData: {
    'data1': 'test'
  },
  success(res) {
    // 返回成功
  }
})
```

### uni.openEmbeddedMiniProgram(OBJECT)

微信小程序跳转小程序（半屏模式）（从微信础库 2.20.1 开始支持）

当小程序需要打开另一个小程序让用户进行快捷操作时，可将要打开的小程序以半屏的形态跳转。

![](https://web-assets.dcloud.net.cn/unidoc/zh/wx-miniprogram.jpeg)

**调用流程**

1. 微信小程序2.23.1以下版本基础库，开发者需要在全局配置`manifest.json`-->`mp-weixin`节点下添加`embeddedAppIdList`字段并声明需要半屏跳转的小程序，若不配置将切换为普通的小程序跳转小程序。2.23.1及以上版本起无需配置。

配置示例：

```js
	{
		"mp-weixin" : {
		   "embeddedAppIdList": ["wxe5f52902cf4de896"]//需要半屏跳转的小程序appid
		}
	}
```

2. 开发者通过调用uni.openEmbeddedMiniProgram半屏跳转小程序：

|属性 |类型 |默认值|必填  |说明|
|--	|--	|--	|--	|--	|
|appId|string	|	|	是|要打开的小程序 appId|
|path	|string	|	|否 |	打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的``App.vue `` 的 `onLaunch`、`onShow`和 Page.onLoad 的回调函数中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)|
|extraData	|	object|	|否	|需要传递给目标小程序的数据，目标小程序可在 ``App.vue `` 的 `onLaunch`或`onShow` 中获取到这份数据。[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)|
|envVersion|string	|release	|否	|要打开的小程序版本，有效值： develop（开发版），trial（体验版），release（正式版）。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。	|
|shortLink	|string	|	|否	|小程序链接，当传递该参数后，可以不传 appId 和 path。链接可以通过【小程序菜单】->【复制链接】获取。	|
|success	|function	|	|否	|接口调用成功的回调函数	|
|fail|function	|	|否	|接口调用失败的回调函数	|
|complete	|function	|	|否	|接口调用结束的回调函数（调用成功、失败都会执行）|


**示例代码**

```js
uni.openEmbeddedMiniProgram({
	appId: '',
	path: 'pages/index/index?id=123',
	extraData: {
		'data1': 'test'
	},
	success(res) {
    // 打开成功
	}
})
```


**使用限制**

2022年3月18日后，使用过程有以下限制，若不符合以下所有条件将被自动切换为普通的小程序跳转小程序，不影响用户使用：

1. 被半屏跳转的小程序需要通过来源小程序的调用申请，开发者可在 小程序管理后台「设置」-「第三方设置」-「半屏小程序管理」板块发起申请，最多可以申请10个小程序；
2. 微信小程序2.23.1版本以下基础库，被半屏打开的小程序需要在全局配置`manifest.json`-->`mp-weixin`节点下添加`embeddedAppIdList`字段并声明；
3. 当前小程序需为竖屏；
4. 被半屏跳转的小程序需为非个人主体小程序（不含小游戏）

2022年3月18日前，使用过程有以下限制，若不符合以下所有条件将被自动切换为普通的小程序跳转小程序，不影响用户使用：

1. 不能在横屏下打开半屏小程序
2. 能打开小游戏
3. 跳转目标小程序需符合以下类目，[详见小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)
