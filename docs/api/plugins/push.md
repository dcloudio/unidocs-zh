> 以下为uni-push2.0的api文档，业务介绍[详情参考](/unipush-v2)

`uni-push`有服务器API和客户端API。

# 客户端API

## uni.getPushClientId(OBJECT)@getpushclientid
获取客户端唯一的推送标识

注意：这是一个异步的方法，且仅支持uni-push2.0；

|元服务|
|:-:|
|x|

<!-- UNIAPPAPIJSON.getPushClientId.compatibility -->

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|是|接口调用的回调函数，详见返回参数说明|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**

|参数|类型|说明|
|:-|:-|:-|
|cid|String| 个推客户端推送id，对应uni-id-device表的push_clientid|
|errMsg|String| 错误描述|

**fail 返回参数说明**

|参数|类型|说明|
|:-|:-|:-|
|errMsg|String| 错误描述|

常见报错：
`getPushClientId:fail register fail: {\"errorCode\":1,\"errorMsg\":\"\"}`
请检查：
1. 当前应用是否已开通uni-push2.0 [详情参考](https://uniapp.dcloud.io/unipush-v2.html#%E7%AC%AC%E4%B8%80%E6%AD%A5-%E5%BC%80%E9%80%9A)
2. 客户端对应平台是否已启用uni-push2.0[详情参考](https://uniapp.dcloud.io/unipush-v2.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%90%AF%E7%94%A8unipush2-0)
3. HBuilderX3.5.1 App平台vue3项目首次启动调用uni.getPushClientId 存在可能获取不到cid的问题，HBuilderX3.5.2修复了此问题，请升级。

示例代码：
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


## uni.onPushMessage(callback)@onpushmessage
启动监听推送消息事件


<!-- UNIAPPAPIJSON.onPushMessage.compatibility -->

代码示例：
```js
uni.onPushMessage((res)=>{
	console.log(res)
})
```
### 回调参数说明
|名称	|类型	|描述	|
|--		|--		|--		|
|type	|String	| 事件类型，"click"-从系统推送服务点击消息启动应用事件；"receive"-应用从推送服务器接收到推送消息事件。|
|data	|String、Object|消息内容|

## uni.offPushMessage(callback)@offpushmessage
关闭推送消息监听事件

<!-- UNIAPPAPIJSON.offPushMessage.compatibility -->

示例代码：
```js
let callback = (res)=>{
	console.log(res)
}
//启动推送事件监听
uni.onPushMessage(callback);
//关闭推送事件监听
uni.offPushMessage(callback);
```
### Tips
- 如果uni.offPushMessage没有传入参数，则移除App级别的所有事件监听器；
- 如果只提供了事件名（callback），则移除该事件名对应的所有监听器；

## uni.getChannelManager()@getchannelmanager

获取通知渠道管理器，Android 8系统以上才可以设置通知渠道。

<!-- UNIAPPAPIJSON.getChannelManager.compatibility -->

**返回值说明**

|类型|
|:-|
|[ChannelManager](#channelmanager)|

### getChannelManager兼容性

|Android 系统版本	|Android|iOS|其他|
|:-|:-|:-|:-|
|8.0|4.02|x|x|

## ChannelManager

渠道管理器

### setPushChannel(options)

设置推送渠道

|名称|类型|必填|
|:-|:-|:-|
|options|[SetPushChannelOptions](#setpushchanneloptions)|是|


#### SetPushChannelOptions 的属性值 @setpushchanneloptions

|名称|类型|必备|默认值|描述|
|:-|:-|:-|:-|:-|
|soundName|string|否|null|声音文件名（不能带文件后缀），需要放置声音文件到Android原生的`/res/raw/`目录下 [原生资源配置](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#nativeresources) |
|channelId|string|是|-|通知渠道id|
|channelDesc|string|是|-|通知渠道描述|
|enableLights|boolean|否|false|呼吸灯闪烁|
|enableVibration|boolean|否|false|震动|
|importance|number|否|3|通知的重要性级别，可选范围IMPORTANCE_LOW：2、IMPORTANCE_DEFAULT：3、IMPORTANCE_HIGH：4|
|lockscreenVisibility|number|否|-1000|锁屏可见性，可选范围VISIBILITY_PRIVATE：0、VISIBILITY_PUBLIC：1、VISIBILITY_SECRET：-1、VISIBILITY_NO_OVERRIDE：-1000|

#### 代码示例

```typescript

const manager = uni.getChannelManager()
manager.setPushChannel({
	channelId: "xxx",
	channelDesc: "通知渠道描述",
	soundName: "pushsound" // 已经把声音文件存储到/res/raw/pushsound.mp3
})

```


#### setPushChannel兼容性

|Android 系统版本	|Android|iOS|其他|
|:-|:-|:-|:-|
|8.0|4.02|x|x|

### getAllChannels()

获取当前应用注册的所有的通知渠道。

#### 返回值
|类型|
|:-|
| Array<string> |


#### getAllChannels兼容性

|Android 系统版本	|Android|iOS|其他|
|:-|:-|:-|:-|
|8.0|4.02|x|x|

## 注意事项

* 通知渠道相关配置为Android端专有配置，只能在Android端进行配置。[通知渠道](https://developer.android.com/develop/ui/views/notifications/channels?hl=zh-cn)
* 离线推送申请自分类权益时，需要客户端创建channel，因此客户端提供了`setPushChannel`来进行channel的创建，通过此Api来创建渠道进行推送。客户端创建渠道成功后，即可通过云函数进行推送，[uni-push2服务端文档](https://doc.dcloud.net.cn/uniCloud/uni-cloud-push/api.html)。
* 由于Android通知渠道的机制问题，一旦通知渠道建立，便不能修改此渠道的配置，即使删除渠道后再次创建同channelId名称的渠道，也不会改变原先渠道的配置（除非删除应用），最明显的现象就是铃声动态修改失败，比如调用`setPushChannel`时，第一次的设置参数是`{"channelId":"test","soundName":"pushsound"}` , 这时你想切换铃音，你的channelId就不能再叫test了，而应该为`{"channelId":"test2","soundName":"ring"}` ，此时会新建一个渠道。

## uni.createPushMessage(OBJECT)@createpushmessage
创建本地通知栏消息（HBuilderX 3.5.2起支持）

**平台差异说明**

|App|H5	|快应用	|微信小程序	|支付宝小程序	|百度小程序	|抖音小程序、飞书小程序	|QQ小程序	|快手小程序	|京东小程序	|小红书小程序|
|:-:|:-:|:-:	|:-:		|:-:			|:-:		|:-:						|:-:		|:-:		|:-:		|:-:		|
|√	|x	|x		|x			|x				|x			|x							|x			|x			|x			| x|

<!-- UNIAPPAPIJSON.createPushMessage.compatibility -->

**OBJECT 参数说明**

|参数名		|类型						|必填	|说明																																																																																																																																																																																									|
|:-				|:-							|:-		|:-																																																																																																																																																																																										|
|title		|string					|否		|推送消息的标题，在系统消息中心显示的通知消息标题，默认值为程序的名称。</br>Android和Harmony - ALL (支持)</br>iOS - 5.0+ (不支持): 不支持设置消息的标题，固定为程序的名称。																																																																																																																				|
|content	|string					|是		|消息显示的内容，在系统通知中心中显示的文本内容。																																																																																																																																																																							|
|payload	|string、Object	|否		|消息承载的数据，可根据业务逻辑自定义数据格式。																																																																																																																																																																								|
|icon			|string					|否		|推送消息的图标</br>本地图片地址，相对路径 - 相对于当前页面的host位置，如"a.jpg"，注意当前页面为网络地址则不支持； 绝对路径 - 系统绝对路径，如Android平台"/sdcard/logo.png"，此类路径通常通过其它5+ API获取的； 扩展相对路径URL(RelativeURL) - 以"_"开头的相对路径，如"_www/a.jpg"； 本地路径URL - 以“file://”开头，后面跟随系统绝对路径。</br>Android - 2.3+ (支持)</br>iOS和Harmony - ALL (不支持): 不支持自定义图片，固定使用应用图标。	|
|sound		|string					|否		|显示消息时播放的提示音；</br>可取值：`system`表示使用系统通知提示音，`none`表示不使用提示音；(默认值为system)。</br>注意：当程序在前台运行时，提示音不生效。 注：通常应该设置延迟时间，当程序切换到后台才创建本地推送消息时生效</br>支持的版本：Android 2.3+，iOS - 5.1+。Harmony - ALL (不支持)																																																																							|
|cover		|boolean				|否		|是否覆盖上一次提示的消息</br>可取值：`true`或`false`，true为覆盖，false不覆盖，默认为permission中设置的cover值</br>Android - ALL (支持)</br>iOS - 5.0+ (不支持): 不支持覆盖消息，只能创建新的消息。</br>Harmony - ALL (不支持)																																																																																																			|
|delay		|number					|否		|提示消息延迟显示的时间</br>当设备接收到推送消息后，可不立即显示，而是延迟一段时间显示，延迟时间单位为s，默认为0s，立即显示。</br>Harmony - ALL (不支持)																																																																																																																																							|
|when			|Date						|否		|消息上显示的提示时间</br>默认为当前时间，如果延迟显示则使用延时后显示消息的时间。</br>Android (支持)</br>iOS - 5.0+ 和 Harmony - ALL (不支持): 不支持设定消息的显示时间，由系统自动管理消息的创建时间。																																																																																																									|
|channelId|string					|否		|渠道id， 支持的版本：HBuilder X 4.02+	，Harmony - ALL (不支持)																																																																																																																																																																									|
|category	|string					|否		|通知类别，支持的版本：HBuilder X 4.02+	，Harmony支持的category值[详情查看](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-slot-V5#通知渠道类型说明?ha_source=Dcloud&ha_sourceId=89000448)																																																																																																																																																																									|
|success	|Function				|否		|接口调用成功的回调函数																																																																																																																																																																																		|
|fail			|Function				|否		|接口调用失败的回调函数																																																																																																																																																																																		|
|complete	|Function				|否		|接口调用结束的回调函数（调用成功、失败都会执行）																																																																																																																																																																							|


**其他相关资源**
- 检查应用是否被授予推送权限：[https://ext.dcloud.net.cn/plugin?id=594](https://ext.dcloud.net.cn/plugin?id=594)
- 开启关闭推送服务：[https://ext.dcloud.net.cn/plugin?id=727](https://ext.dcloud.net.cn/plugin?id=727)
- 自定义App推送铃声：[https://ext.dcloud.net.cn/plugin?id=7482](https://ext.dcloud.net.cn/plugin?id=7482)
- 如何自定义推送通知的图标：[https://ask.dcloud.net.cn/article/35537](https://ask.dcloud.net.cn/article/35537)

## uni.setAppBadgeNumber(num)@setAppBadgeNumber
设置应用图标上显示的角标数字    
注意：此api仅鸿蒙平台支持，iOS和Android平台请使用`plus.runtime.setBadgeNumber`[详情参考](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.setBadgeNumber)
|参数名	|类型		|必填	|说明																			|
|:-			|:-			|:-		|:-																				|
|num		|number	|是		|要显示的角标数字值，参数为0则表示清除角标数字。	|


## 小程序平台

小程序平台的类似概念叫做`模板消息`，也有的平台改名为`订阅消息`。

以微信为例，开发者的服务器发送消息给微信的服务器，微信服务器会发送一条订阅消息，折叠到微信的消息列表中的服务通知里。它属于后台开发，和手机端无关。

如果使用uniCloud发送微信、支付宝订阅消息，参考：[https://ext.dcloud.net.cn/plugin?id=1810](https://ext.dcloud.net.cn/plugin?id=1810)

微信订阅消息文档：[https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html)

支付宝模板消息文档：[https://docs.alipay.com/mini/introduce/message](https://docs.alipay.com/mini/introduce/message)

百度模板消息文档：[https://smartprogram.baidu.com/docs/develop/third/api/](https://smartprogram.baidu.com/docs/develop/third/api/)

抖音订阅消息文档：[https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/open-capacity/operation/subscribe-message/](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/open-capacity/operation/subscribe-message/)

QQ小程序订阅消息文档：[https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_message.html#%E8%AE%A2%E9%98%85%E6%B6%88%E6%81%AF](https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_message.html#%E8%AE%A2%E9%98%85%E6%B6%88%E6%81%AF)

华为快应用推送文档：[https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwpush](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwpush?ha_source=Dcloud&ha_sourceId=89000448)

## 服务端API [详情参考](https://doc.dcloud.net.cn/uniCloud/uni-cloud-push/api)
