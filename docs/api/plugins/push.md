> 以下为uni-push2.0的api文档，业务介绍[详情参考](/unipush-v2)
> The following is the api document of uni-push2.0, business introduction [details reference](/unipush-v2)

`uni-push`有服务器API和客户端API。
`uni-push` has a server API and a client API.

## 客户端API
## Client API

### uni.getPushClientId(OBJECT)
获取客户端唯一的推送标识
Obtain the unique push ID of the client

注意：这是一个异步的方法，且仅支持uni-push2.0；
Note: This is an asynchronous method and only supports uni-push2.0;

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter Name|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|是|接口调用的回调函数，详见返回参数说明|
| success| Function| Yes | the callback function called by the interface, see the return parameter description for details|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|cid|String| 个推客户端推送id，对应uni-id-device表的push_clientid|
| cid| String| A push client push id, corresponding to the push_clientid of the uni-id-device table|
|errMsg|String| 错误描述|
| errMsg| String| error description|

**fail 返回参数说明**
**fail return parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|errMsg|String| 错误描述|
| errMsg| String| error description|

常见报错：   
`getPushClientId:fail register fail: {\"errorCode\":1,\"errorMsg\":\"\"}`  
请检查：  
Check, please:  
1. 当前应用是否已开通uni-push2.0 [详情参考](https://uniapp.dcloud.io/unipush-v2.html#%E7%AC%AC%E4%B8%80%E6%AD%A5-%E5%BC%80%E9%80%9A)
1. Whether the current application has activated uni-push2.0 [For details, please refer to](https://uniapp.dcloud.io/unipush-v2.html#%E7%AC%AC%E4%B8%80%E6%AD% A5-%E5%BC%80%E9%80%9A)
2. 客户端对应平台是否已启用uni-push2.0[详情参考](https://uniapp.dcloud.io/unipush-v2.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%90%AF%E7%94%A8unipush2-0)
2. Whether the corresponding platform of the client has enabled uni-push2.0 [details refer to](https://uniapp.dcloud.io/unipush-v2.html#%E5%AE%A2%E6%88%B7%E7% AB%AF%E5%90%AF%E7%94%A8unipush2-0)
3. HBuilderX3.5.1 App平台vue3项目首次启动调用uni.getPushClientId 存在可能获取不到cid的问题，HBuilderX3.5.2修复了此问题，请升级。
3. HBuilderX3.5.1 App platform vue3 project starts for the first time and calls uni.getPushClientId. There is a problem that the cid may not be obtained. HBuilderX3.5.2 fixes this problem, please upgrade.

示例代码：
Sample code:
```js 
	uni.getPushClientId({
		success: (res) => {
			console.log(res.cid);
		},
		fail(err) {
			console.log(err)
		}
	})
```


### uni.onPushMessage(callback)@onPushMessage
启动监听推送消息事件
Start listening to push message events
代码示例：
Code example:
```js 
uni.onPushMessage((res)=>{
	console.log(res)
})
```
#### 回调参数说明
#### Callback parameter description
|名称	|类型	|描述	|
|Name |Type |Description |
|--		|--		|--		|
|type	|String	| 事件类型，"click"-从系统推送服务点击消息启动应用事件；"receive"-应用从推送服务器接收到推送消息事件。|
| type | String | event type, "click" - the click message from the system push service starts the application event; "receive" - the application receives the push message event from the push server. |
|data	|String、Object|消息内容|
| data | String, Object|message content|

### uni.offPushMessage(callback)
关闭推送消息监听事件
Close the push message listening event
示例代码：
Sample code:
```js
let callback = (res)=>{
	console.log(res)
}
//启动推送事件监听
uni.onPushMessage(callback);
//关闭推送事件监听
uni.offPushMessage(callback);
```
#### Tips
- 如果uni.offPushMessage没有传入参数，则移除App级别的所有事件监听器；
- 如果只提供了事件名（callback），则移除该事件名对应的所有监听器；

### uni.createPushMessage(OBJECT)@createPushMessage
创建本地通知栏消息（HBuilderX 3.5.2起支持）
Create a local notification bar message (supported from HBuilderX 3.5.2)

**平台差异说明**
**Platform Difference Description**

|App|H5	|快应用	|微信小程序	|支付宝小程序	|百度小程序	|字节跳动小程序、飞书小程序	|QQ小程序	|快手小程序	|京东小程序	|
| App| H5 | QuickApp |WeChat MiniApp |Alipay MiniApp |Baidu MiniApp |Byte Beat MiniApp, Feishu MiniApp |QQ MiniApp | Kuaishou MiniApp |Jingdong MiniApp |
|:-:|:-:|:-:	|:-:		|:-:			|:-:		|:-:						|:-:		|:-:		|:-:		|
|√	|x	|x		|x			|x				|x			|x							|x			|x			|x			|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名		|类型			|必填	|说明																																																																																																								|
|Parameter name |Type |Required |Description |
|:-			|:-				|:-		|:-																																																																																																									|
|title		|string			|否		|推送消息的标题，在系统消息中心显示的通知消息标题，默认值为程序的名称。</br>Android - ALL (支持)</br>iOS - 5.0+ (不支持): 不支持设置消息的标题，固定为程序的名称。																																																																|
| title | string |No |The title of the push message, the title of the notification message displayed in the system message center, the default value is the name of the program. </br>Android - ALL (supported)</br>iOS - 5.0+ (not supported): It does not support setting the title of the message, it is fixed as the name of the program. |
|content	|string			|是		|消息显示的内容，在系统通知中心中显示的文本内容。																																																																																													|
| content | string |yes |The content displayed in the message, the text content displayed in the system notification center. |
|payload	|string、Object	|否		|消息承载的数据，可根据业务逻辑自定义数据格式。																																																																																														|
| payload | string, Object |No |The data carried by the message can be customized according to the business logic. |
|icon		|string			|否		|推送消息的图标</br>本地图片地址，相对路径 - 相对于当前页面的host位置，如"a.jpg"，注意当前页面为网络地址则不支持； 绝对路径 - 系统绝对路径，如Android平台"/sdcard/logo.png"，此类路径通常通过其它5+ API获取的； 扩展相对路径URL(RelativeURL) - 以"_"开头的相对路径，如"_www/a.jpg"； 本地路径URL - 以“file://”开头，后面跟随系统绝对路径。</br>Android - 2.3+ (支持)</br>iOS - ALL (不支持): 不支持自定义图片，固定使用应用图标。	|
| icon | string |No |Push message icon</br>Local image address, relative path - relative to the host location of the current page, such as "a.jpg", note that the current page is a network address, it does not support; absolute path - System absolute path, such as Android platform "/sdcard/logo.png", such path is usually obtained through other 5+ API; extended relative path URL (RelativeURL) - relative path starting with "_", such as "_www/a .jpg"; Local Path URL - Start with "file://" followed by the system absolute path. </br>Android - 2.3+ (Support)</br>iOS - ALL (Not Support): Do not support custom images, use the application icon instead. |
|sound		|string			|否		|'system'  'none'推送消息的提示音</br>显示消息时的播放的提示音，可取值： “system”-表示使用系统通知提示音； “none”-表示不使用提示音； 默认值为“system”。</br>Android - 2.3+ (支持)</br>iOS - 5.1+ (支持): 当程序在前台运行时，提示音不生效。 注：通常应该设置延迟时间，当程序切换到后台才创建本地推送消息时生效。																												|
| sound | string |No |'system' 'none'The prompt sound for push messages</br>The prompt sound played when the message is displayed, possible values: "system" - means to use the system notification prompt sound; "none" - Indicates that no beep is used; the default value is "system". </br>Android - 2.3+ (Support)</br>iOS - 5.1+ (Support): When the program is running in the foreground, the prompt sound does not work. Note: Usually the delay time should be set, and it will take effect when the program switches to the background to create local push messages. |
|cover		|boolean		|否		|是否覆盖上一次提示的消息</br>可取值true或false，true为覆盖，false不覆盖，默认为permission中设置的cover值</br>Android - ALL (支持)</br>iOS - 5.0+ (不支持): 不支持覆盖消息，只能创建新的消息。																																																										|
| cover | boolean |No |Whether to cover the last prompt message</br>The value can be true or false, true is covered, false is not covered, the default is the cover value set in the permission</br>Android - ALL (support )</br>iOS - 5.0+ (not supported): Overwrite messages are not supported, only new ones can be created. |
|delay		|number			|否		|提示消息延迟显示的时间</br>当设备接收到推送消息后，可不立即显示，而是延迟一段时间显示，延迟时间单位为s，默认为0s，立即显示。																																																																										|
| delay | number |No |Delayed display time of the prompt message</br>When the device receives the push message, it may not be displayed immediately, but displayed after a period of delay. The delay time unit is s, and the default is 0s, which is displayed immediately. |
|when		|Date			|否		|消息上显示的提示时间</br>默认为当前时间，如果延迟显示则使用延时后显示消息的时间。</br>Android - ALL (支持)</br>iOS - 5.0+ (不支持): 不支持设定消息的显示时间，由系统自动管理消息的创建时间。																																																										|
| when | Date |No |The reminder time displayed on the message</br> defaults to the current time, if the display is delayed, the time to display the message after the delay will be used. </br>Android - ALL (supported)</br>iOS - 5.0+ (not supported): It does not support setting the display time of the message, and the system automatically manages the creation time of the message. |
|success	|Function		|否		|接口调用成功的回调函数																																																																																																				|
| success | Function |No |Callback function for successful interface call |
|fail		|Function		|否		|接口调用失败的回调函数																																																																																																				|
| fail | Function | No | The callback function of interface call failure |
|complete	|Function		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	
| complete | Function |No |The callback function for the end of the interface call (it will be executed when the call succeeds or fails)


**其他相关资源**
**Other Related Resources**
- 检查应用是否被授予推送权限：[https://ext.dcloud.net.cn/plugin?id=594](https://ext.dcloud.net.cn/plugin?id=594)
- Check if the app is granted push permission: [https://ext.dcloud.net.cn/plugin?id=594](https://ext.dcloud.net.cn/plugin?id=594)
- 开启关闭推送服务：[https://ext.dcloud.net.cn/plugin?id=727](https://ext.dcloud.net.cn/plugin?id=727)
- Turn on and off the push service: [https://ext.dcloud.net.cn/plugin?id=727](https://ext.dcloud.net.cn/plugin?id=727)
- 自定义App推送铃声：[https://ext.dcloud.net.cn/plugin?id=7482](https://ext.dcloud.net.cn/plugin?id=7482)
- Custom app push ringtone: [https://ext.dcloud.net.cn/plugin?id=7482](https://ext.dcloud.net.cn/plugin?id=7482)
- 如何自定义推送通知的图标：[https://ask.dcloud.net.cn/article/35537](https://ask.dcloud.net.cn/article/35537)
- How to customize the icon of push notification: [https://ask.dcloud.net.cn/article/35537](https://ask.dcloud.net.cn/article/35537)

### 小程序平台
### MiniApp Platform

小程序平台的类似概念叫做`模板消息`，也有的平台改名为`订阅消息`。
The similar concept of the MiniApp platform is called `Template Message`, and some platforms have renamed it `Subscription Message`.

以微信为例，开发者的服务器发送消息给微信的服务器，微信服务器会发送一条订阅消息，折叠到微信的消息列表中的服务通知里。它属于后台开发，和手机端无关。
Taking WeChat as an example, the developer's server sends a message to the WeChat server, and the WeChat server sends a subscription message, which is folded into the service notification in the WeChat message list. It belongs to the background development and has nothing to do with the mobile terminal.

如果使用uniCloud发送微信、支付宝订阅消息，参考：[https://ext.dcloud.net.cn/plugin?id=1810](https://ext.dcloud.net.cn/plugin?id=1810)
If you use uniCloud to send WeChat and Alipay subscription messages, refer to: [https://ext.dcloud.net.cn/plugin?id=1810](https://ext.dcloud.net.cn/plugin?id=1810)

微信订阅消息文档：[https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html)
WeChat subscription message document: [https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html](https://developers.weixin.qq.com/miniprogram/dev /framework/open-ability/subscribe-message.html)

支付宝模板消息文档：[https://docs.alipay.com/mini/introduce/message](https://docs.alipay.com/mini/introduce/message)
Alipay template message document: [https://docs.alipay.com/mini/introduce/message](https://docs.alipay.com/mini/introduce/message)

百度模板消息文档：[https://smartprogram.baidu.com/docs/develop/third/api/](https://smartprogram.baidu.com/docs/develop/third/api/)
Baidu template message document: [https://smartprogram.baidu.com/docs/develop/third/api/](https://smartprogram.baidu.com/docs/develop/third/api/)

字节跳动订阅消息文档：[https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/open-capacity/operation/subscribe-message/](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/open-capacity/operation/subscribe-message/)

QQ小程序订阅消息文档：[https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_message.html#%E8%AE%A2%E9%98%85%E6%B6%88%E6%81%AF](https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_message.html#%E8%AE%A2%E9%98%85%E6%B6%88%E6%81%AF)
QQ MiniApp subscription message document: [https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_message.html#%E8%AE%A2%E9%98%85%E6%B6%88%E6%81%AF](https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_message.html#%E8%AE%A2%E9%98%85%E6%B6%88 %E6%81%AF)

华为快应用推送文档：[https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwpush](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwpush)
Huawei QuickApp push document: [https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwpush](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwpush)

## 服务端API [详情参考](/uniCloud/uni-cloud-push/api)
## Server API [Reference for details](/uniCloud/uni-cloud-push/api)
