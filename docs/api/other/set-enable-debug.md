### uni.setEnableDebug(OBJECT)

设置是否打开调试开关。此开关对正式版也能生效。
Set whether to enable the debug switch. This switch also works for the official version.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|√|x|√|

**OBJECT说明**
**OBJECT DESCRIPTION**

| 属性 | 类型 | 必填 | 说明 |平台差异说明|
| Attribute | Type | Required | Description | Platform Difference Description |
| --- | --- | --- | --- | --- |
| enableDebug | boolean| 是 | 是否打开调试 ||
| enableDebug | boolean| yes | whether to enable debugging ||
| success | function| 否 | 接口调用成功的回调函数 |微信小程序|
| success | function| No | Callback function for successful API call |WeChat applet|
| fail | function| 否 | 接口调用失败的回调函数 |微信小程序|
| fail | function| No | Callback function for API call failure |WeChat applet|
| complete | function| 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |微信小程序|
| complete | function| No | The callback function of the end of the interface call (the call will be executed if the call succeeds or fails) |WeChat applet|

#### 示例代码
#### Sample code
```js
// 打开调试
// turn on debugging
uni.setEnableDebug({
    enableDebug: true
})
// 关闭调试
// turn off debugging
uni.setEnableDebug({
    enableDebug: false
})
```
