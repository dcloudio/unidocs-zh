<md-translatedByGoogle />
### uni.connectSocket(OBJECT)
创建一个 [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) 连接。
Create a [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) connection.

> 在各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单。
> When each Mini Program platform is running, network-related APIs need to be configured with a whitelist of domain names before using them.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| Parameter name| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|url|String|是|服务器接口地址|小程序中必须是 `wss://` 协议|
|url|String|yes|server interface address|must be `wss://` protocol in applet|
|header|Object|否|HTTP Header , header 中不能设置 Referer|小程序、App 2.9.6+|
|header|Object|No|HTTP Header , Referer cannot be set in the header|Applet, App 2.9.6+|
|method|String|否|默认是GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT|仅微信小程序支持|
|method|String|No|Default is GET, valid values: OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT|Only supported by WeChat applet|
|protocols|Array&lt;String&gt;|否|子协议数组|App、H5、微信小程序、百度小程序、字节跳动小程序、飞书小程序|
|protocols|Array&lt;String&gt;|No|Subprotocol Array|App, H5, WeChat applet, Baidu applet, ByteDance applet, Feishu applet|
|success|Function|否|接口调用成功的回调函数||
| success| Function| No| Callback function for successful interface calling| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**示例代码**
**Sample code**

```javascript
uni.connectSocket({
	url: 'wss://www.example.com/socket',
	data() {
		return {
			x: '',
			y: ''
		};
	},
	header: {
		'content-type': 'application/json'
	},
	protocols: ['protocol1'],
	method: 'GET'
});
```

**返回值**
**Return value**

如果希望返回一个 [socketTask](/api/request/socket-task) 对象，需要至少传入 success / fail / complete 参数中的一个。例如：
If you want to return a [socketTask](/api/request/socket-task) object, at least one of the success/fail/complete parameters needs to be passed in. E.g.:

```javascript
var socketTask = uni.connectSocket({
	url: 'wss://www.example.com/socket', //仅为示例，并非真实接口地址。
	complete: ()=> {}
});
```

如果没有传入 success / fail / complete 参数，则会返回封装后的 Promise 对象：[Promise 封装](/api/README?id=promise-%E5%B0%81%E8%A3%85)
If the success/fail/complete parameter is not passed in, the encapsulated Promise object will be returned: [Promise encapsulation](/api/README?id=promise-%E5%B0%81%E8%A3%85)

**注意事项**
**Precautions**

- 网络请求的 ``超时时间`` 可以统一在 ``manifest.json`` 中配置 [networkTimeout](/collocation/manifest?id=networktimeout)。
- The `Timeout` requested by the network can be uniformly configured in the `manifest.json` as [networkTimeout](/collocation/manifest?id=networktimeout).
- App平台，2.2.6以下的版本，不支持 ``ArrayBuffer`` 类型的数据收发。老版本不愿升级也可以使用 [plus-websocket插件](https://ext.dcloud.net.cn/plugin?id=647) 插件替代。
- App platform, versions below 2.2.6, do not support ``ArrayBuffer`` type data sending and receiving. If the old version is unwilling to upgrade, you can also use the [plus-websocket plugin](https://ext.dcloud.net.cn/plugin?id=647) plugin instead.
- App平台2.2.6以下的版本以及支付宝小程序下，所有 `vue` 页面只能使用一个 `websocket` 连接。App下可以使用 [plus-websocket](https://ext.dcloud.net.cn/plugin?id=647) 插件替代实现多链接。。
- For versions below 2.2.6 of the App platform and the Alipay applet, all `vue` pages can only use one `websocket` connection. Under the App, you can use the [plus-websocket](https://ext.dcloud.net.cn/plugin?id=647) plug-in instead to achieve multi-link. .
- 微信小程序平台1.7.0 及以上版本，最多可以同时存在5个WebSocket 连接。老版本只支持一个socket连接
- WeChat applet platform version 1.7.0 and above can have up to 5 WebSocket connections at the same time. The old version only supports one socket connection
- 百度小程序平台自基础库版本 1.9.4 及以后支持多个socket连接。老版本只支持一个socket连接
- The Baidu applet platform supports multiple socket connections since the base library version 1.9.4 and later. The old version only supports one socket connection
- QQ小程序平台最多支持同时存在5个socket链接
- The QQ applet platform supports up to 5 socket links at the same time


### uni.onSocketOpen(CALLBACK)
监听WebSocket连接打开事件。
listen to WebSocket connection opening event.

**平台兼容性**
**Platform Compatibility**

字节小程序不支持
Byte applet does not support

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|header|Object|连接成功的 HTTP 响应 Header|
| header| Object| HTTP response Header for successful connection|

**示例代码：**
**Sample code:**

```javascript
uni.connectSocket({
  url: 'wss://www.example.com/socket'
});
uni.onSocketOpen(function (res) {
  console.log('WebSocket连接已打开！');
});
```


### uni.onSocketError(CALLBACK)
监听WebSocket错误。
listen to WebSocket error.

**平台兼容性**
**Platform Compatibility**

字节小程序不支持
Byte applet does not support

**示例代码**
**Sample code**

```javascript
uni.connectSocket({
  url: 'wss://www.example.com/socket'
});
uni.onSocketOpen(function (res) {
  console.log('WebSocket连接已打开！');
});
uni.onSocketError(function (res) {
  console.log('WebSocket连接打开失败，请检查！');
});
```

### uni.sendSocketMessage(OBJECT)
通过 WebSocket 连接发送数据，需要先 [uni.connectSocket](/api/request/websocket?id=connectsocket)，并在 [uni.onSocketOpen](/api/request/websocket?id=onsocketopen) 回调之后才能发送。
Sending data over a WebSocket connection requires [uni.connectSocket](/api/request/websocket?id=connectsocket) and [uni.onSocketOpen](/api/request/websocket?id=onsocketopen) callback before sending.

**平台兼容性**
**Platform Compatibility**

字节小程序不支持
Byte applet does not support

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|data|String/ArrayBuffer|是|需要发送的内容|
| data| String/ArrayBuffer| Yes| Content to be sent|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**示例代码**
**Sample code**

```javascript
var socketOpen = false;
var socketMsgQueue = [];

uni.connectSocket({
  url: 'wss://www.example.com/socket'
});

uni.onSocketOpen(function (res) {
  socketOpen = true;
  for (var i = 0; i < socketMsgQueue.length; i++) {
    sendSocketMessage(socketMsgQueue[i]);
  }
  socketMsgQueue = [];
});

function sendSocketMessage(msg) {
  if (socketOpen) {
    uni.sendSocketMessage({
      data: msg
    });
  } else {
    socketMsgQueue.push(msg);
  }
}
```

### uni.onSocketMessage(CALLBACK)
监听WebSocket接受到服务器的消息事件。
listen to the message events that WebSocket receives and send to the server.

**平台兼容性**
**Platform Compatibility**

字节小程序不支持
Byte applet does not support

**CALLBACK 返回参数**
**CALLBACK return parameter**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|data|String/ArrayBuffer|服务器返回的消息|
| data| String/ArrayBuffer| Message returned by the server|

**示例代码：**
**Sample code:**

```javascript
uni.connectSocket({
  url: 'wss://www.example.com/socket'
});

uni.onSocketMessage(function (res) {
  console.log('收到服务器内容：' + res.data);
});
```

### uni.closeSocket(OBJECT)
关闭 WebSocket 连接。
Close WebSocket connection.

**平台兼容性**
**Platform Compatibility**

字节小程序不支持
Byte applet does not support

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|code|Number|否|一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）|
| code| Number| No| A numeric value indicates the status number of the closed connection and the corresponding reason. If this parameter is not specified, with 1000 as default (indicating normal connection closure)|
|reason|String|否|一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）|
| reason| String| No| A readable string indicating the reason why the connection was closed. This string must be UTF-8 text (not characters) no longer than 123 bytes|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

### uni.onSocketClose(CALLBACK)
监听WebSocket关闭。
listen to WebSocket closing.

**平台兼容性**
**Platform Compatibility**

字节小程序不支持
Byte applet does not support

```javascript
uni.connectSocket({
  url: 'wss://www.example.com/socket'
});

// 注意这里有时序问题，
//Note that there is a timing problem,
// 如果 uni.connectSocket 还没回调 uni.onSocketOpen，而先调用 uni.closeSocket，那么就做不到关闭 WebSocket 的目的。
//If uni.connectSocket calls uni.closeSocket before calling uni.onSocketOpen, closing WebSocket is impossible.
// 必须在 WebSocket 打开期间调用 uni.closeSocket 才能关闭。
//To close WebSocket, uni.closeSocket should be called under opened WebSocket.
uni.onSocketOpen(function () {
  uni.closeSocket();
});

uni.onSocketClose(function (res) {
  console.log('WebSocket 已关闭！');
});
```
