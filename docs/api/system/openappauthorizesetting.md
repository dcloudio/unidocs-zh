### uni.openAppAuthorizeSetting()
跳转系统授权管理页

- App端  
    打开系统App的权限设置界面  
- 微信小程序  
    打开系统微信App的权限设置界面  

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|钉钉小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX (3.5.3+)|x|基础库 (2.20.1+)|x|x|x|x|x|x|x|



**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**

```javascript
uni.openAppAuthorizeSetting({
  success (res) {
    console.log(res)
  }
})
```
