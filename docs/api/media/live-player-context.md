### uni.createLivePlayerContext(livePlayerId, this)
创建 live-player 上下文 livePlayerContext 对象。注意是直播的播放而不是推流。
Create a livePlayerContext object for live-player context. Note that it is live broadcast other than live-pusher.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|见下|x|√|x|√|x|√|x|√|
|See below|x|√|x|√|x|√|x|√|

App平台的直播播放，不使用此API，而直接使用video的API。
The App platform does not use its API for live broadcast, but directly uses the API of video.

**参数说明**
**Parameter Description**

|参数|说明|平台差异说明|
| Parameter| Instruction| Platform difference description|
|:-:|:-:|:-:|
|livePlayerId|``<live-player>`` 组件 id||
| livePlayerId| `<live-player>` component id| |
|this|在自定义组件下，当前组件实例的 this，以操作组件内 ``<live-player>`` 组件|微信小程序|
|thYes|Under the custom component, the this of the current component instance to operate the ``<live-player>`` component in the component|WeChat applet|

**livePlayerContext 对象的方法列表：**
**Method list of livePlayerContext object:**

|方法|参数|说明|
| Method| Parameter| Instruction|
|:-|:-|:-|
|play|Object|播放|
| play| Object| Play|
|stop|Object|停止|
| stop| Object| Stop|
|mute|Object|静音|
| mute| Object| Mute|
|pause|Object|暂停|
| pause| Object| Pause|
|resume|Object|恢复|
| resume| Object| Restore|
|requestFullScreen|Object|进入全屏|
| requestFullScreen| Object| Enter full screen|
|exitFullScreen|Object|退出全屏|
| exitFullScreen| Object| Exit full screen|

**requestFullScreen 的 Object 参数列表：**
**Parameter list of requestFullScreen Object:**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|direction|Number|是|设置全屏时的方向，有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）。|
| direction| Number| Yes| Set full screen direction, valid values are 0 (normal vertical), 90 (when screen is 90 degrees counterclockwise), -90 (when screen is 90 degrees clockwise).|
|success|Function|否|接口调用成功的回调函数。|
| success| Function| No| Callback function for successful interface calling.|
|fail|Function|否|接口调用失败的回调函数。|
| fail| Function| No| Callback function for failed interface calling.|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）。|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling).|

**其他方法的 Object 参数列表：**
**Parameter list of Objects for other methods:**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|



### uni.createLivePusherContext(livePusherId, this)
创建 live-pusher 上下文 livePusherContext 对象。
Create the livePusherContext object of the live-pusher context.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|见下|x|√|x|x|x|√|x|
|See below|x|√|x|x|x|√|x|

- app-nvue 平台 2.2.5+ 支持 uni.createLivePusherContext(livePusherId, this)
- The app-nvue platform 2.2.5+ supports uni.createLivePusherContext(livePusherId, this)
- app-nvue 平台 2.2.5以下，需要同时设置组件属性id和ref ``<live-pusher id="livepusher1" ref="livepusher1"></live-pusher>``，或者直接使用 ref，例如 ``this.$refs.livepusher1``
- For app-nvue platform 2.2.5-, you need to set both the component attribute id and ref `<live-pusher id="livepusher1" ref="livepusher1"></live-pusher>`, or use ref directly, for example `this.$refs.livepusher1`
- app-vue 平台，需要编写条件编译代码，使用 `plus.video.LivePusher`，[业务指南](https://ask.dcloud.net.cn/article/13416)、[规范文档](http://www.html5plus.org/doc/zh_cn/video.html#plus.video.LivePusher)
- For app-vue platform, you need to write conditional compilation code, use `plus.video.LivePusher`, [Business Guide](https://ask.dcloud.net.cn/article/13416), [Specification Document](http: //www.html5plus.org/doc/en_us/video.html#plus.video.LivePusher)

#### livePusherContext
#### start(OBJECT)
> 开始推流
> Start live-pusher

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:--|:--|:--|:--|
|success|Function|否|接口调用成功的回调函数||
|success|Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|

#### pause(OBJECT)
> 暂停推流
> Pause live-pusher

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:--|:--|:--|:--|
|success|Function|否|接口调用成功的回调函数||
|success|Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|

#### resume(OBJECT)
> 恢复推流
> Restore live-pusher

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:--|:--|:--|:--|
|success|Function|否|接口调用成功的回调函数||
|success|Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|


#### stop(OBJECT)
> 停止推流
> Stop live-pusher

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:--|:--|:--|:--|
|success|Function|否|接口调用成功的回调函数||
|success|Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|The callback function for the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|

#### switchCamera(OBJECT)
> 切换前后摄像头
> Switch front and rear cameras

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:--|:--|:--|:--|
|success|Function|否|接口调用成功的回调函数||
|success|Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|The callback function for the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|

#### snapshot(OBJECT)
> 快照
> Snapshot

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:--|:--|:--|:--|
|success|Function|否|接口调用成功的回调函数||
|success|Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|

#### startPreview(OBJECT)
> 开启摄像头预览
> Turn on camera preview

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:--|:--|:--|:--|
|success|Function|否|接口调用成功的回调函数||
|success|Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|

#### stopPreview(OBJECT)
> 关闭摄像头预览
> Turn off camera preview

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:--|:--|:--|:--|
|success|Function|否|接口调用成功的回调函数||
|success|Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|
