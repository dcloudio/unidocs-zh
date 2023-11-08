
### uni.arrayBufferToBase64(arrayBuffer)

将 ArrayBuffer 对象转成 Base64 字符串
Convert ArrayBuffer object to Base64 string

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|x|x|x|√|√|

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|arrayBuffer|ArrayBuffer|是|要转换成 Base64 字符串的 ArrayBuffer 对象|
| arrayBuffer| ArrayBuffer| Yes| ArrayBuffer object to be converted to Base64 string|

**示例**
**Example**

```javascript
const arrayBuffer = new Uint8Array([55, 55, 55])
const base64 = uni.arrayBufferToBase64(arrayBuffer)
```