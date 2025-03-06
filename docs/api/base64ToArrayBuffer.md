## uni.base64ToArrayBuffer(base64)

将 Base64 字符串转成 ArrayBuffer 对象

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|x|x|√|√|√|x|√|

<!-- UNIAPPAPIJSON.base64ToArrayBuffer.compatibility -->

**参数说明**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|base64|String|是|要转化成 ArrayBuffer 对象的 Base64 字符串|

**示例**

```javascript
const base64 = 'test'
const arrayBuffer = uni.base64ToArrayBuffer(base64)
```

<!-- UNIAPPAPIJSON.base64ToArrayBuffer.tutorial -->
