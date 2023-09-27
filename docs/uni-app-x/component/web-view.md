## web-view

<!-- UTSCOMJSON.web-view.description -->

<!-- UTSCOMJSON.web-view.attrubute -->

<!-- UTSCOMJSON.web-view.event -->

<!-- UTSCOMJSON.web-view.example -->

<!-- UTSCOMJSON.web-view.compatibility -->

<!-- UTSCOMJSON.web-view.children -->

<!-- UTSCOMJSON.web-view.reference -->

### 上下文对象API

web-view的操作api为[uni.createWebviewContext()](../api/create-webview-context.md)。

给web-view组件设一个id属性，将id的值传入uni.createWebviewContext()，即可得到web-view组件的上下文对象，进一步可使用`.evalJS()`、`.reload()`等方法。

### web-view组件的内外通信
- uts向web-view的网页发消息

	使用`evalJS()`方法，详见上方示例代码

- web-view里的网页向uts发消息

	在网页中引入[uni.webview.1.5.5.js](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/hybrid/html/uni.webview.1.5.5.js)。即可在网页中调用一批uni的api，包括：
	
|方法名|说明|平台差异说明|
|:-|:-|:-|
|uni.navigateTo|[navigateTo](../api/navigator.md#uni.navigateto)||
|uni.redirectTo|[redirectTo](../api/navigator#redirectto)||
|uni.reLaunch|[reLaunch](../api/navigator#relaunch)||
|uni.switchTab|[switchTab](../api/navigator#switchtab)||
|uni.navigateBack|[navigateBack](../api/navigator#navigateback)||
|uni.postMessage|向应用发送消息||

在网页中使用`uni.postMessage()`即可向uts发送消息。

uts端在 `<web-view>` 组件的 `message` 事件回调 `event.detail.data` 中接收消息。

示例代码详见[hello-uni-app-x/hybrid/html/local.html](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/hybrid/html/local.html)
	
**Tips**

- 传递的消息信息，必须写在 data 对象中。
- `event.detail.data` 中的数据，以数组的形式接收每次 post 的消息。（注：支付宝小程序除外，支付宝小程序中以对象形式接受）

## 注意
- web-view组件为系统web-view，内核版本号不由uni-app x框架控制。如需x5等webview，需另行开发插件。