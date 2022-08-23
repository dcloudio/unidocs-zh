### uni.vibrate(OBJECT)
使手机发生振动。
Make the phone vibrate.

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

**示例**
**Example**

```javascript
uni.vibrate({
	success: function () {
		console.log('success');
	}
});
```

### uni.vibrateLong(OBJECT)
使手机发生较长时间的振动（400ms）。
Lead to long time vibration of the phone (400ms).

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

**示例**
**Example**

```javascript
uni.vibrateLong({
	success: function () {
		console.log('success');
	}
});
```

### uni.vibrateShort(OBJECT)
使手机发生较短时间的振动（15ms）。
Lead to short time vibration of the phone (15ms).

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

**示例**
**Example**

```javascript
uni.vibrateShort({
	success: function () {
		console.log('success');
	}
});
```

**注意**
**Notice**
- iOS上只有长震动，没有短震动
- There is only long vibration on iOS, no short vibration
- iOS上需要手机设置“打开响铃时震动”或“静音时震动”，否则无法震动
- On iOS, you need to turn on "Vibrate on Ring" or "Vibrate on Mute" on your mobile phone, or otherwise it will not vibrate
- vibrate只适用于钉钉小程序、支付宝小程序
- vibrate is only applicable to Dingding applet and Alipay applet