## uni.onAccelerometerChange(CALLBACK)
监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 ``uni.offAccelerometer`` 取消监听。

|元服务|小红书小程序|
|:-:|:-:|
|1.0.4+|x|

<!-- UNIAPPAPIJSON.onAccelerometerChange.compatibility -->

**参数**

function listener

加速度数据事件的监听函数

**参数**

Object res

|参数|类型|说明|
|:-|:-|:-|
|x|Number|X 轴|
|y|Number|Y 轴|
|z|Number|Z 轴|



**Tips**

- H5端获取加速度信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。

**示例**

```javascript
uni.onAccelerometerChange(function (res) {
	console.log(res.x);
	console.log(res.y);
	console.log(res.z);
});
```

<!-- UNIAPPAPIJSON.onAccelerometerChange.tutorial -->

## uni.offAccelerometerChange(CALLBACK)
取消监听加速度数据。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 2.9.6+|HBuilderX 2.9.6+|基础库 2.9.3+|x|x|x|x|√|√|1.0.4+|x|

<!-- UNIAPPAPIJSON.offAccelerometerChange.compatibility -->


**参数**

function listener

onAccelerometerChange 传入的监听函数。不传此参数则移除所有监听函数。

**示例**

```javascript
const listener = function (res) { console.log(res) }

uni.onAccelerometerChange(listener)
uni.offAccelerometerChange(listener) // 需传入与监听时同一个的函数对象
```

<!-- UNIAPPAPIJSON.offAccelerometerChange.tutorial -->

## uni.startAccelerometer(OBJECT)
开始监听加速度数据。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|x|√|√|√|√|√|1.0.4+|x|

<!-- UNIAPPAPIJSON.startAccelerometer.compatibility -->

**OBJECT 参数说明**

|参数名|类型|默认|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|:-|
|interval|String|normal|否|监听加速度数据回调函数的执行频率|微信小程序、百度小程序、QQ小程序、快手小程序、京东小程序|
|success|Function||否|接口调用成功的回调||
|fail|Function||否|接口调用失败的回调函数||
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

`interval` 的合法值

|值|说明|
|:-|:-|
|game|适用于更新游戏的回调频率，在 20ms/次 左右|
|ui|适用于更新 UI 的回调频率，在 60ms/次 左右|
|normal|普通的回调频率，在 200ms/次 左右|



**示例**

```javascript
uni.startAccelerometer();
```

<!-- UNIAPPAPIJSON.startAccelerometer.tutorial -->

## uni.stopAccelerometer(OBJECT)
停止监听加速度数据。

|元服务|小红书小程序|
|:-:|:-:|
|1.0.4+|x|

<!-- UNIAPPAPIJSON.stopAccelerometer.compatibility -->

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|



**示例**

```javascript
uni.stopAccelerometer();
```

<!-- UNIAPPAPIJSON.stopAccelerometer.tutorial -->
