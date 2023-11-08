### uni.chooseAddress(OBJECT)

获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，需要用户授权 scope.address。
Get the user's shipping address. Call up the native interface for the user to edit the delivery address, and return to the address selected by the user after editing, which requires the user to authorize scope.address.
 
**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|x|x|x|x|
 
**OBJECT参数说明**
**OBJECT parameter description**

| 属性 | 类型  | 必填 | 说明 |
| Attribute | Type | Required | Description |
| --- | --- | --- | --- | --- |
| success | function|否 | 接口调用成功的回调函数 |
| success | function|No | Callback function for successful interface call |
| fail | function|否 | 接口调用失败的回调函数 |
| fail | function|No | Callback function for interface call failure |
| complete | function|否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | function|No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**success返回参数说明**
**success return parameter description**


| 属性 | 类型 | 说明 |平台差异说明|
| Properties | Type | Description | Platform Difference Description |
| --- | --- | --- |---|
| userName | string | 收货人姓名 ||
| userName | string | consignee name ||
| postalCode | string | 邮编 ||
| postalCode | string | Postal Code ||
| provinceName | string | 国标收货地址第一级地址 ||
| provinceName | string | National standard delivery address first-level address ||
| cityName | string | 国标收货地址第二级地址 ||
| cityName | string | The second-level address of the national standard delivery address ||
| countyName | string | 国标收货地址第三级地址 ||
| streetName | string | 国标收货地址第四级地址 |微信小程序|
| detailInfo | string | 详细收货地址信息 ||
| detailInfoNew | string | 新选择器详细收货地址信息 |微信小程序|
| nationalCode | string | 收货地址国家码 ||
| nationalCode | string | Shipping address country code ||
| telNumber | string | 收货人手机号码 ||
| telNumber | string | recipient mobile phone number ||
| errMsg | string | 错误信息 |微信小程序|
| errMsg | string | Error message |WeChat applet|


**示例代码**
**Sample code**

```js
uni.chooseAddress({
  success(res) {
    console.log(res.userName)
    console.log(res.postalCode)
    console.log(res.provinceName)
    console.log(res.cityName)
    console.log(res.countyName)
    console.log(res.detailInfo)
    console.log(res.nationalCode)
    console.log(res.telNumber)
  }
})
```