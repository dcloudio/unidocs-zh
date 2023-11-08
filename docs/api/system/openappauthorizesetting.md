### uni.openAppAuthorizeSetting()
跳转系统授权管理页
Jump to the system authorization management page

- App端  
- App side
    打开系统App的权限设置界面  
    Open the permission setting interface of the system app
- 微信小程序  
- WeChat applet
    打开系统微信App的权限设置界面  
    Open the permission setting interface of the system WeChat App

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|钉钉小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX (3.5.3+)|x|基础库 (2.20.1+)|x|x|x|x|x|x|x|
|HBuilderX (3.5.3+)|x|Base Library (2.20.1+)|x|x|x|x|x|x|x|



**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter name|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数|
|success|Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

**示例**
**Example**

```javascript
uni.openAppAuthorizeSetting({
  success (res) {
    console.log(res)
  }
})
```
