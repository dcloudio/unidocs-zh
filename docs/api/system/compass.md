## uni.onCompassChange(CALLBACK)
监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用 ``uni.offCompassChange`` 取消监听。

|元服务|小红书小程序|
|:-:|:-:|
|1.0.4+|x|

<!-- UNIAPPAPIJSON.onCompassChange.compatibility -->

**CALLBACK 返回参数**

|参数|类型|说明|
|:-|:-|:-|
|direction|Number|面对的方向度数|



**Tips**
- H5端获取罗盘信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。

**示例**

```javascript
const callback = function (res) {
	console.log(res.direction);
}
uni.onCompassChange(callback);
```

<!-- UNIAPPAPIJSON.onCompassChange.tutorial -->

## uni.offCompassChange(CALLBACK)
取消监听罗盘数据。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 2.9.6+|HBuilderX 2.9.6+|基础库 2.9.3+|x|x|x|x|√|x|1.0.4+|x|

<!-- UNIAPPAPIJSON.offCompassChange.compatibility -->

**示例**
```javascript
const callback = function (res) {
	console.log(res.direction);
}
uni.onCompassChange(callback);
// 和 onCompassChange 传入同一个函数即可
uni.offCompassChange(callback);
```

<!-- UNIAPPAPIJSON.offCompassChange.tutorial -->

**Tips**
- `CALLBACK`为调用`uni.onCompassChange`时传入的`CALLBACK`

## uni.startCompass(OBJECT)
开始监听罗盘数据。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|x|√|√|√|√|x|1.0.4+|x|

<!-- UNIAPPAPIJSON.startCompass.compatibility -->

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|



**示例**

```javascript
uni.startCompass();
```

<!-- UNIAPPAPIJSON.startCompass.tutorial -->

## uni.stopCompass(OBJECT)
停止监听罗盘数据。

|小红书小程序|
|:-:|
|x|

<!-- UNIAPPAPIJSON.stopCompass.compatibility -->

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|



**示例**

```javascript
uni.stopCompass();
```

<!-- UNIAPPAPIJSON.stopCompass.tutorial -->
