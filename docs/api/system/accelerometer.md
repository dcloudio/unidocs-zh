### uni.onAccelerometerChange(CALLBACK)
监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 ``uni.offAccelerometer`` 取消监听。
Monitoring acceleration data, frequency: 5 times per second, the monitoring will start automatically after the interface is called, you can use ``uni.offAccelerometer`` to cancel the monitoring.

**参数**
**parameter**

function listener

加速度数据事件的监听函数
Listener function for acceleration data events

**参数**
**parameter**

Object res

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|x|Number|X 轴|
| x| Number| X-axYes|
|y|Number|Y 轴|
| y| Number| Y-axYes|
|z|Number|Z 轴|
| z| Number| Z axYes|

**Tips**

- H5端获取加速度信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- The H5 terminal needs to be deployed on the **https** service to obtain the acceleration information, and the local preview (localhost) can still use the http protocol.

**示例**
**example**

```javascript
uni.onAccelerometerChange(function (res) {
	console.log(res.x);
	console.log(res.y);
	console.log(res.z);
});
```

### uni.offAccelerometerChange(CALLBACK)
取消监听加速度数据。
Cancel listening to acceleration data.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 2.9.6+|HBuilderX 2.9.6+|基础库 2.9.3+|x|x|x|x|√|√|
| HBuilderX 2.9.6+| HBuilderX 2.9.6+|Basic library 2.9.3+| x| x| x| x|√|√|

**参数**
**parameter**

function listener

onAccelerometerChange 传入的监听函数。不传此参数则移除所有监听函数。
The listener function passed in by onAccelerometerChange. If this parameter is not passed, all listener functions will be removed.

**示例**
**example**

```javascript
const listener = function (res) { console.log(res) }

uni.onAccelerometerChange(listener)
uni.offAccelerometerChange(listener) // 需传入与监听时同一个的函数对象
```


### uni.startAccelerometer(OBJECT)
开始监听加速度数据。
Start monitoring acceleration data.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|x|√|√|√|√|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|默认|必填|说明|平台差异说明|
|Parameter Name|Type|Default|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|:-|
|interval|String|normal|否|监听加速度数据回调函数的执行频率|微信小程序、百度小程序、QQ小程序、快手小程序、京东小程序|
| interval| String| normal|No|Monitor the execution frequency of the acceleration data callback function|WeChat MiniApp, Baidu MiniApp, QQ MiniApp, Kuaishou MiniApp, JD MiniApp|
|success|Function||否|接口调用成功的回调||
| success| Function||No|Callback for successful interface call||
|fail|Function||否|接口调用失败的回调函数||
| fail| Function||No|Callback function for interface call failure||
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function||No|The callback function of the end of the interface call (it will be executed when the call succeeds or fails)|&nbsp;|

`interval` 的合法值
Legal values for `interval`

|值|说明|
|value|description|
|:-|:-|
|game|适用于更新游戏的回调频率，在 20ms/次 左右|
| game|Callback frequency suitable for updating games, around 20ms/time|
|ui|适用于更新 UI 的回调频率，在 60ms/次 左右|
|ui|Callback frequency suitable for updating UI, around 60ms/time|
|normal|普通的回调频率，在 200ms/次 左右|
| normal|Normal callback frequency, about 200ms/time|


**示例**
**example**

```javascript
uni.startAccelerometer();
```

### uni.stopAccelerometer(OBJECT)
停止监听加速度数据。
Stop listening to acceleration data.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter Name|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
| success| Function|No|Callback for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**示例**
**example**

```javascript
uni.stopAccelerometer();
```
