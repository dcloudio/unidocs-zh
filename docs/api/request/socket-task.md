<md-translatedByGoogle />
**SocketTask** 由 [uni.connectSocket()](/api/request/websocket?id=connectsocket) 接口创建。
**SocketTask** is created by the [uni.connectSocket()](/api/request/websocket?id=connectsocket) interface.

**平台差异说明**
**Platform Difference Description**

支付宝小程序、字节跳动小程序，没有明确的文档来具体说明这个对象，而是指向了 [Web Websocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) 对象。
Alipay applet and ByteDance applet have no clear documentation to specify this object, but point to [Web Websocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket ) object.

### SocketTask.onMessage(CALLBACK)
监听 WebSocket 接受到服务器的消息事件
listen to the message events that WebSocket receives and send to the server.

**回调函数**
**Callback function**

`Function`

WebSocket 接受到服务器的消息事件的回调函数
WebSocket receives the callback function of the message event from the server

**回调函数中的参数**
**Parameters in the callback function**

`Object`

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|data|String/ArrayBuffer|服务器返回的消息|
| data| String/ArrayBuffer| Message returned by the server|

### SocketTask.send(OBJECT)
通过 WebSocket 连接发送数据
Send data through WebSocket connection

**参数**
**Parameter**

|属性|类型|是否必填|说明|
| Attribute| Type| Required or not| Instruction|
|:-|:-|:-|:-|
|data|String/ArrayBuffer|是|需要发送的内容|
| data| String/ArrayBuffer| Yes| Content to be sent|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

### SocketTask.close(OBJECT)
关闭 WebSocket 连接
Close WebSocket connection

**参数**
**Parameter**

|属性|类型|默认值|是否必填|说明|
| Attribute| Type| Defaults| Required or not| Instruction|
|:-|:-|:-|:-|:-|
|code|Number|1000（表示正常关闭连接）|否|一个数字值表示关闭连接的状态号，表示连接被关闭的原因。|
| code| Number| 1000 (indicates normal connection closure)| No| A numeric value indicates the status number of the closed connection and the corresponding reason.|
|reason|String||否|一个可读的字符串，表示连接被关闭的原因。|
| reason| String| | No| A readable string indicating the reason why the connection was closed.|
|success|Function||否|接口调用成功的回调函数|
| success| Function| | No| Callback function for successful interface calling|
|fail|Function||否|接口调用失败的回调函数|
| fail| Function| | No| Callback function for failed interface calling|
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

### SocketTask.onOpen(CALLBACK)
监听 WebSocket 连接打开事件
listen to WebSocket connection opening event

**回调函数**
**Callback function**

`Function`

WebSocket 连接打开事件的回调函数
Callback function of WebSocket connection open event

**回调函数中的参数**
**Parameters in the callback function**

`Object`

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|data|String/ArrayBuffer|服务器返回的消息|
| data| String/ArrayBuffer| Message returned by the server|

### SocketTask.onClose(CALLBACK)
监听 WebSocket 连接关闭事件
listen to WebSocket connection closing event

**回调函数**
**Callback function**

`Function`

WebSocket 连接关闭事件的回调函数
Callback function of WebSocket connection close event

### SocketTask.onError(CALLBACK)
监听 WebSocket 错误事件
listen to WebSocket error event

**回调函数**
**Callback function**

`Function`

WebSocket 错误事件的回调函数
Callback function of WebSocket error event

**回调函数中的参数**
**Parameters in the callback function**

`Object`

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|errMsg|String|错误信息|
| errMsg| String| Error message|