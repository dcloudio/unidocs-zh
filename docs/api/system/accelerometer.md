### uni.onAccelerometerChange(CALLBACK)
监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 ``uni.offAccelerometer`` 取消监听。
listen to the acceleration data at a frequency of 5 times/second. The listening to will automatically start after the interface is called. You can use `uni.offAccelerometer` to cancel the listening to.

**CALLBACK 返回参数**
**CALLBACK return parameter**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|x|Number|X 轴|
| x| Number| X axis|
|y|Number|Y 轴|
| y| Number| Y axis|
|z|Number|Z 轴|
| z| Number| Z axis|

**Tips**

- H5端获取加速度信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- To obtain acceleration information on the H5 side, it must be deployed on the **https** service.  For local preview (localhost), the http protocol can still be used.

**示例**
**Example**

```javascript
uni.onAccelerometerChange(function (res) {
	console.log(res.x);
	console.log(res.y);
	console.log(res.z);
});
```

### uni.offAccelerometerChange(CALLBACK)
取消监听加速度数据。
Remove listening to the acceleration data.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 2.9.6+|HBuilderX 2.9.6+|基础库 2.9.3+|x|x|x|x|√|√|
|HBuilderX 2.9.6+|HBuilderX 2.9.6+|Basic Library 2.9.3+|x|x|x|x|√|√|

### uni.startAccelerometer(OBJECT)
开始监听加速度数据。
Start listening to the acceleration data.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|x|√|√|√|√|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|默认|必填|说明|平台差异说明|
| Parameter name| Type| Default| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|:-|
|interval|String|normal|否|监听加速度数据回调函数的执行频率|微信小程序、百度小程序、QQ小程序、快手小程序、京东小程序|
|interval|String|normal|No|Monitor the execution frequency of the acceleration data callback function|WeChat applet, Baidu applet, QQ applet, Kuaishou applet, Jingdong applet|
|success|Function||否|接口调用成功的回调||
| success| Function| | No| Callback for successful interface calling| |
|fail|Function||否|接口调用失败的回调函数||
| fail| Function| | No| Callback function for failed interface calling| |
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|  |

`interval` 的合法值
Legal value of `interval`

|值|说明|
| Value| Instruction|
|:-|:-|
|game|适用于更新游戏的回调频率，在 20ms/次 左右|
| game| The callback frequency for updating the game, approx. 20ms/time|
|ui|适用于更新 UI 的回调频率，在 60ms/次 左右|
| ui| The callback frequency for updating the UI, approx. 60ms/time|
|normal|普通的回调频率，在 200ms/次 左右|
| normal| Ordinary callback frequency, approx. 200ms/time.|


**示例**
**Example**

```javascript
uni.startAccelerometer();
```

### uni.stopAccelerometer(OBJECT)
停止监听加速度数据。
Stop listening to the acceleration data.

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
uni.stopAccelerometer();
```
