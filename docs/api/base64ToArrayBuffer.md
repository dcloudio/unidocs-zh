
### uni.base64ToArrayBuffer(base64)

将 Base64 字符串转成 ArrayBuffer 对象
Convert Base64 string to ArrayBuffer object

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
|base64|String|是|要转化成 ArrayBuffer 对象的 Base64 字符串|
| base64| String| Yes| Base64 string to be converted to ArrayBuffer object|

**示例**
**Example**

```javascript
const base64 = 'test'
const arrayBuffer = uni.base64ToArrayBuffer(base64)
```