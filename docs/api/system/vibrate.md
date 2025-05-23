## uni.vibrate(OBJECT)

> HarmonyOS Next 不支持

使手机发生振动。

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**

```javascript
uni.vibrate({
	success: function () {
		console.log('success');
	}
});
```

## uni.vibrateLong(OBJECT)

|元服务|
|:-:|
|√|

> HarmonyOS Next 不支持

使手机发生较长时间的振动（400ms）。

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**

```javascript
uni.vibrateLong({
	success: function () {
		console.log('success');
	}
});
```

## uni.vibrateShort(OBJECT)

|元服务|
|:-:|
|√|

> HarmonyOS Next 不支持

使手机发生较短时间的振动（15ms）。

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|type|String|是|震动强度类型，有效值为：heavy、medium、light（微信、元服务必填）|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**

```javascript
uni.vibrateShort({
	success: function () {
		console.log('success');
	}
});
```

**注意**
- iOS上只有长震动，没有短震动
- iOS上需要手机设置“打开响铃时震动”或“静音时震动”，否则无法震动
- vibrate只适用于钉钉小程序、支付宝小程序
