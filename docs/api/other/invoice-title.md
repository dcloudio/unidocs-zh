### uni.chooseInvoiceTitle(OBJECT)

选择用户的发票抬头，需要用户授权 scope.invoiceTitle。
Selecting the user's invoice header requires the user to authorize scope.invoiceTitle.

在微信小程序中，当前小程序必须关联一个公众号，且这个公众号是完成了[微信认证](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1496554031_RD4xe)的，才能调用 chooseInvoiceTitle。
In the WeChat applet, the current applet must be associated with an official account, and this official account has completed [WeChat authentication](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1496554031_RD4xe) , to call chooseInvoiceTitle.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|x|√|x|x|
 
**OBJECT参数说明**
**OBJECT parameter description**

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|:-|
|success|function|否|接口调用成功的回调函数|
|success|function|No|Callback function for successful interface call|
|fail|function|否|接口调用失败的回调函数|
|fail|function|No|Callback function for interface call failure|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function|No|The callback function for the end of the interface call (the call will be executed if the call succeeds or fails)|

**success返回参数说明**
**success return parameter description**

|属性|类型|说明|平台差异说明|
|Properties|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|type|string|抬头类型（0：单位，1：个人）||
|type|string|Header Type (0: Unit, 1: Individual) ||
|title|string|抬头名称||
|title|string|Header name||
|taxNumber|string|抬头税号||
|taxNumber|string|Look up tax number||
|companyAddress|string|单位地址||
|companyAddress|string|Company Address||
|telephone|string|手机号码||
|telephone|string|Mobile number||
|bankName|string|银行名称||
|bankName|string|Bank Name||
|bankAccount|string|银行账号||
|bankAccount|string|Bank Account Number||
|errMsg|string|错误信息|微信小程序|
|errMsg|string|Error message|WeChat applet|

**示例代码**
**Sample code**

```js
uni.chooseInvoiceTitle({
    success(res) {
        console.log(res.type);
        console.log(res.title);
        console.log(res.taxNumber);
        console.log(res.companyAddress);
        console.log(res.telephone);
        console.log(res.bankName);
        console.log(res.bankAccount);
  }
})
```