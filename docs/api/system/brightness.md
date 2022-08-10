### uni.setScreenBrightness(OBJECT)
设置屏幕亮度。
Set screen brightness.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|x|√|√|√|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|value|Number|是|屏幕亮度值，范围 0~1，0 最暗，1 最亮|
| value| Number| Yes| Screen brightness value, ranging from 0 to 1, and 0 is the darkest and 1 is the brightest|
|success|Function|否|接口调用成功的回调|
| success| Function| No| Callback for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**示例**
**Example**

```javascript
uni.setScreenBrightness({
	value: 0.5,
	success: function () {
		console.log('success');
	}
});
```

>*Tips:* 避免 onshow() 里使用 setScreenBrightness() , 亮度变化会再次触发 onShow() 造成死循环
>*Tips:* Avoid using setScreenBrightness() in onshow(). The brightness change will trigger onShow() again, causing an endless loop

### uni.getScreenBrightness(OBJECT)
获取屏幕亮度。
Get screen brightness.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|x|√|√|√|√|

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
|value|Number|屏幕亮度值，范围 0~1，0 最暗，1 最亮。|
| value| Number| Screen brightness value, ranging from 0 to 1, and 0 is the darkest and 1 is the brightest.|

**示例**
**Example**

```javascript
uni.getScreenBrightness({
	success: function (res) {
		console.log('屏幕亮度值：' + res.value);
	}
});
```

### uni.setKeepScreenOn(OBJECT)
设置是否保持常亮状态。仅在当前应用生效，离开应用后设置失效。
Set whether to stay on or not. The setting will be valid only in the current application, and it will be invalid after leaving the application.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|keepScreenOn|Boolean|是|是否保持屏幕常亮|
| keepScreenOn| Boolean| Yes| Whether to keep the screen always on?|
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
|errMsg|String|调用结果|
| errMsg| String| Call result|

**示例**
**Example**

```javascript
// 保持屏幕常亮
//Keep the screen always on
uni.setKeepScreenOn({
	keepScreenOn: true
});
```

