**剪贴板 API 平台差异说明**
**Platform difference description for clipboard APIs**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|
### uni.setClipboardData(OBJECT)
设置系统剪贴板的内容。
Set the contents of the system clipboard.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
|Parameter Name|Type|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|data|String|是|需要设置的内容||
|data|String| Yes |what needs to be set||
|showToast|Boolean|否|配置是否弹出提示，默认弹出提示|App (3.2.13+)、H5 (3.2.13+)|
|showToast|Boolean|No|Configure whether to pop up a prompt, the default popup prompt|App (3.2.13+), H5 (3.2.13+)|
|success|Function|否|接口调用成功的回调||
|success|Function|No|Callback for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）||
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)||

**示例**
**Example**

```javascript
uni.setClipboardData({
	data: 'hello',
	success: function () {
		console.log('success');
	}
});
```

### uni.getClipboardData(OBJECT)
获取系统剪贴板内容。
Get the contents of the system clipboard.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
| success| Function| No| Callback for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|data|String|剪贴板的内容|
| data| String| Contents of the clipboard|

**示例**
**Example**

```javascript
uni.getClipboardData({
	success: function (res) {
		console.log(res.data);
	}
});
```

#### **注意**
#### **Notice**

- 设置剪贴板内容后，小程序平台会自动弹出轻提示；（微信小程序在成功回调success里设置toast可覆盖自带的轻提示）。App平台默认与小程序保持一致策略。如不希望在App平台弹出提示，可使用Native.js自行操作剪贴板，插件市场有封装好的示例[https://ext.dcloud.net.cn/plugin?id=712](https://ext.dcloud.net.cn/plugin?id=712)。也可以在设置剪切板后立即uni.hideToast()。
- After setting the clipboard content, the applet platform will automatically pop up a light prompt; (the WeChat applet setting toast in the success callback success can override the built-in light prompt). The App platform maintains the same policy as the Mini Program by default. If you don’t want to pop up a prompt on the App platform, you can use Native.js to operate the clipboard by yourself. There are packaged examples in the plugin market [https://ext.dcloud.net.cn/plugin?id=712](https://ext.dcloud.net.cn/plugin?id=712] ext.dcloud.net.cn/plugin?id=712). It is also possible to uni.hideToast() immediately after setting the clipboard.