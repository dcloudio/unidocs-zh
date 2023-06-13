### uni.setBackgroundColor(OBJECT)

动态设置窗口的背景色。
Dynamically set the background color of the window.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|√|√|√|

**参数说明**
**Parameter Description**

|属性|类型|默认值|必填|说明|
|property|type|default value|required|description|
|:-|:-|:-|:-|:-|
|backgroundColor|String||否|窗口的背景色，必须为十六进制颜色值|
|backgroundColor|String||No|The background color of the window, must be a hexadecimal color value|
|backgroundColorTop|String||否|顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持|
|backgroundColorTop|String||No|Background color of the top window, must be a hexadecimal color value, only supported by iOS|
|backgroundColorBottom|String||否|底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持|
|backgroundColorBottom|String||No|The background color of the bottom window, must be a hexadecimal color value, only supported by iOS|
|success|Function||否|接口调用成功的回调函数|
|success|Function||No|Callback function for successful interface call|
|fail|Function||否|接口调用失败的回调函数|
|fail|Function||No|Callback function for interface call failure|
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function||No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

**代码示例**
**CODE EXAMPLE**

```javascript
uni.setBackgroundColor({
    backgroundColor: '#ffffff',
    backgroundColorTop: '#222222',
    backgroundColorBottom: '#333333'
});
```

### uni.setBackgroundTextStyle(OBJECT)

动态设置下拉背景字体、loading 图的样式。
Dynamically set the style of the drop-down background font and loading image.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|√|√|√|

**参数说明**
**Parameter Description**

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|textStyle|String|是|下拉背景字体、loading 图的样式，值为：dark、light|
|textStyle|String| Yes | the style of the drop-down background font and loading image, the values are: dark, light|
|success|Function|否|接口调用成功的回调函数|
|success|Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

**代码示例**
**CODE EXAMPLE**

```javascript
uni.setBackgroundTextStyle({
  textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
})
```
