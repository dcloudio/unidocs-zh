### uni.onCompassChange(CALLBACK)
监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用 ``uni.offCompassChange`` 取消监听。
Monitor compass data, frequency: 5 times per second, it will automatically start monitoring after the interface is called, you can use ``uni.offCompassChange`` to cancel the monitoring.

**CALLBACK 返回参数**
**CALLBACK return parameter**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|direction|Number|面对的方向度数|
| direction| Number|Facing direction in degrees|

**Tips**
- H5端获取罗盘信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- The H5 terminal needs to be deployed on the **https** service to obtain compass information, and the local preview (localhost) can still use the http protocol.

**示例**
**example**

```javascript
const callback = function (res) {
	console.log(res.direction);
}
uni.onCompassChange(callback);
```

### uni.offCompassChange(CALLBACK)
取消监听罗盘数据。
Cancel listening to compass data.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 2.9.6+|HBuilderX 2.9.6+|基础库 2.9.3+|x|x|x|x|√|x|
| HBuilderX 2.9.6+| HBuilderX 2.9.6+|Basic library 2.9.3+| x| x| x| x|√| x|

**示例**
**example**
```javascript
const callback = function (res) {
	console.log(res.direction);
}
uni.onCompassChange(callback);
// 和 onCompassChange 传入同一个函数即可
// Just pass in the same function as onCompassChange
uni.offCompassChange(callback);
```

**Tips**
- `CALLBACK`为调用`uni.onCompassChange`时传入的`CALLBACK`
- `CALLBACK` is the `CALLBACK` passed in when calling `uni.onCompassChange`

### uni.startCompass(OBJECT)
开始监听罗盘数据。
Start listening to compass data.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|x|√|√|√|√|x|

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
uni.startCompass();
```

### uni.stopCompass(OBJECT)
停止监听罗盘数据。
Stop listening to compass data.

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
uni.stopCompass();
```
