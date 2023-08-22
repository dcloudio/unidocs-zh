### uni.exit(OBJECT)

退出当前应用。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|x|x|x|x|x|x|x|


**注意**  
- HBuilderX3.8.15+ 新增支持  
- 小程序端必须有点击行为才能调用成功  
- App-iOS平台可以调用此API，但不支持退出应用功能，触发fail回调返回system not support错误  

**OBJECT参数说明**

|参数|类型|必填|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**

```javascript
// 退出应用
uni.exit({
	success: () => {
		console.log("exit success")
	},
	fail: (e) => {
		console.log("exit fail")
	}
});
```


### 错误码

|错误码	|错误信息					|说明																|
|---	|----						|------															|
|12001	|system not support			|当前系统不支持相关能力												|

