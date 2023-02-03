### uni.onPageNotFound(CALLBACK)

监听应用要打开的页面不存在事件。该事件与 `App.onPageNotFound` 的回调时机一致
Listen to the event that the page to be opened by the application does not exist. This event is consistent with the callback timing of `App.onPageNotFound`

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|√|√|√|

#### 参数
#### parameters

**CALLBACK**

要打开的页面不存在事件的回调函数
The callback function of the event that the page to be opened does not exist

#### 参数
#### parameters

|属性|类型|说明|
|Attribute|Type|Description|
|:-:|:-:|:-:|
|path|String|不存在页面的路径 (代码包路径)|
| path| String|The path of the non-existent page (code package path)|
|query|Object|打开不存在页面的 query 参数|
| query| Object|Open the query parameter of the non-existent page|
|isEntryPage|Boolean|是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）	|
| isEntryPage| Boolean|Whether it is the first page of this startup (for example, from the sharing and other entrances, the first page is the sharing page configured by the developer) |

**注意**
**Notice**
- 开发者可以在回调中进行页面重定向，但必须在回调中同步处理，异步处理（例如 `setTimeout` 异步执行）无效。
- Developers can perform page redirection in the callback, but it must be processed synchronously in the callback, and asynchronous processing (such as `setTimeout` asynchronous execution) is invalid.
- 若开发者没有调用 `uni.onPageNotFound` 绑定监听，也没有声明 `App.onPageNotFound`，当跳转页面不存在时，将推入客户端原生的页面不存在提示页面。
- If the developer does not call the `uni.onPageNotFound` binding listener, and does not declare `App.onPageNotFound`, when the jump page does not exist, it will push the native page of the client to the non-existence prompt page.
- 如果回调中又重定向到另一个不存在的页面，将推入客户端原生的页面不存在提示页面，并且不再第二次回调。
- If the callback is redirected to another page that does not exist, it will be pushed to the client's native page that does not exist to prompt the page, and there will be no second callback.
- 在除了 `App.vue` 的其他时机中调用 `uni.onPageNotFound` 的话，需要用uni.offPageNotFound取消监听，否则会出现监听多次的情况
- If you call `uni.onPageNotFound` at other timings except `App.vue`, you need to use uni.offPageNotFound to cancel the monitoring, otherwise there will be multiple monitoring

### uni.onError(CALLBACK)

监听小程序错误事件。如脚本错误或 `API` 调用报错等。该事件与 `App.onError` 的回调时机与参数一致。
Listen for MiniApp error events. Such as script error or `API` call error, etc. This event is consistent with the callback timing and parameters of `App.onError`.

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|√|√|√|√|

#### 参数
#### parameters

**CALLBACK**

应用错误事件的回调函数
Callback function for application error events

#### 参数
#### parameters
**string error**

错误信息，包含堆栈
error message, including stack

### uni.onAppShow(CALLBACK)

监听应用切前台事件。该事件与 `App.onShow` 的回调参数一致。
Listen for events when the application cuts to the foreground. This event is consistent with the callback parameter of `App.onShow`.

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|√|√|x|

**支付宝小程序使用说明：**
**Alipay MiniApp Instructions:**

- 由于开发者工具版本限制，目前本 API 暂不支持在开发者工具调试和真机调试，仅支持真机预览。开发者请调至 预览 模式，在支付宝客户端扫码查看效果。
- Due to the limitation of the developer tool version, this API does not currently support developer tool debugging and real device debugging, and only supports real device preview. Developers, please switch to the preview mode and scan the QR code on the Alipay client to view the effect.
- 请勿使用 API 监听匿名函数，否则将无法关闭监听。
- Do not use the API to monitor anonymous functions, otherwise the monitoring will not be turned off.

#### 参数
#### parameters

**CALLBACK**

应用切前台事件的回调函数
The callback function of the application cutting foreground event

#### 参数
#### parameters

|属性|类型|说明|平台差异说明|
|Property|Type|Description|Platform Difference Description|
|:-:|:-:|:-:|:-:|
|path|String|应用切前台的路径 (代码包路径)||
| path| String|The path to the foreground of the application (code package path)||
|scene|Number|应用切前台的场景值||
| scene| Number|The value of the scene where the application is switched to the foreground||
|query|Object	|应用切前台的 query 参数||
| query| Object | The query parameter of the front end of the application||
|shareTicket|String	|shareTicket|微信小程序|
| shareTicket| String | shareTicket|WeChat MiniApp|
|referrerInfo|String|来源信息||
| referrerInfo| String|source information||
|entryType|String|页面展现的来源标识，可取的值为: 'user'、'schema'、'sys'，对应代表的意义如下表。|百度小程序 2.10.7+|
| entryType| String| The source ID of the page display, the possible values are: 'user', 'schema', 'sys', the meanings of the corresponding representatives are as follows. |Baidu MiniApp 2.10.7+|
|appURL|String|展现时的调起协议，仅当entryType值为 schema 时存在。|百度小程序 2.10.7+|
| appURL| String| The calling protocol when displaying, only exists when the value of entryType is schema. |Baidu MiniApp 2.10.7+|
|entryDataHash|String|群入口信息，通过群应用商店打开、群分享卡片打开的小程序可获得。|qq小程序|
| entryDataHash| String|Group entry information, which can be obtained by opening the MiniApp in the group app store or opening the group sharing card. | qq MiniApp|

**referrerInfo 的结构**
**Structure of referrerInfo**

|属性|类型|说明|平台差异说明|
|Property|Type|Description|Platform Difference Description|
|:-:|:-:|:-:|:-:|
|appId|String|来源小程序的appId||
| appId| String|appId of the source MiniApp||
|extraData|Object|来源小程序传过来的数据|微信小程序和qq小程序 scene=1037或1038时支持|
| extraData| Object|Data from the source MiniApp|Wechat MiniApp and qq MiniApp scene=1037 or 1038 supported|

### uni.onAppHide(CALLBACK)

监听应用切后台事件。该事件与 `App.onHide` 的回调参数一致。
Listen to the background events of the application. This event is consistent with the callback parameter of `App.onHide`.

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|√|√|x|

**支付宝小程序使用说明：**
**Alipay MiniApp Instructions:**

- 由于开发者工具版本限制，目前本 API 暂不支持在开发者工具调试和真机调试，仅支持真机预览。开发者请调至 预览 模式，在支付宝客户端扫码查看效果。
- Due to the limitation of the developer tool version, this API does not currently support developer tool debugging and real device debugging, and only supports real device preview. Developers, please switch to the preview mode and scan the QR code on the Alipay client to view the effect.
- 请勿使用 API 监听匿名函数，否则将无法关闭监听。
- Do not use the API to monitor anonymous functions, otherwise the monitoring will not be turned off.

#### 参数
#### parameters

**CALLBACK**

应用切后台事件的回调函数
Callback function for app cut background events

### uni.offPageNotFound(CALLBACK)

取消监听应用要打开的页面不存在事件。
Cancel the event that the page to be opened by the application does not exist.

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|√|√|x|

#### 参数
#### parameters

**CALLBACK**

应用要打开的页面不存在事件的回调函数
The callback function of the event that the page to be opened does not exist

### uni.offError(CALLBACK)

取消监听应用错误事件。
Unlisten for application error events.

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|√|√|√|x|

#### 参数
#### parameters

**CALLBACK**

应用错误事件的回调函数
Callback function for application error events

### uni.offAppShow(CALLBACK)

取消监听小程序切前台事件。
Cancel the foreground event from listening to the MiniApp.

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|√|√|x|

#### 参数
#### parameters

**CALLBACK**

应用切前台事件的回调函数
The callback function of the application cutting foreground event

### uni.offAppHide(CALLBACK)

取消监听小程序切后台事件。
Cancel the monitoring of MiniApp and background events.

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|√|√|x|

#### 参数
#### parameters

**CALLBACK**

应用切后台事件的回调函数
Callback function for app cut background events
