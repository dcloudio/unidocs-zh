### uni.scanCode(OBJECT)
调起客户端扫码界面，扫码成功后返回对应的结果。
Call the client scanning interface, and return the corresponding results after successful scanning.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|x|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| Parameter name| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-:|
|onlyFromCamera|Boolean|否|是否只能从相机扫码，不允许从相册选择图片|字节跳动小程序、百度小程序、支付宝小程序不支持此参数|
|onlyFromCamera|Boolean|No|Whether you can only scan the code from the camera, and not allow to select pictures from the album|ByteDance applet, Baidu applet, Alipay applet do not support this parameter|
|scanType|Array|否|扫码类型，参考下方`scanType的合法值`|字节跳动小程序不支持此参数|
|scanType|Array|No|Scan code type, refer to the legal value of `scanType` below |Byte Beat applet does not support this parameter|
|autoDecodeCharset|Boolean|否|是否启用自动识别字符编码功能，默认为否|App|
|autoDecodeCharset|Boolean|No|Enable the automatic character encoding function, the default is No|App|
|autoZoom|Boolean|否|是否启用自动放大，默认启用|仅 App-Android (3.5.4+) 支持|
|autoZoom|Boolean|No|Enable auto zoom, default enabled|Only supported by App-Android (3.5.4+)|
|barCodeInput|Boolean|否|是否支持手动输入条形码|仅飞书小程序（V3.14.0）支持|
|barCodeInput|Boolean|No |Whether to support manual input of barcodes|Only Feishu applet (V3.14.0) supports|
|hideAlbum|Boolean|否|是否隐藏相册（不允许从相册选择图片），只能从相机扫码。默认值为 false。|仅支付宝小程序支持|
|hideAlbum|Boolean|No|Whether to hide the album (it is not allowed to select pictures from the album), you can only scan the code from the camera. The default value is false. |Only supported by Alipay applet|
|success|Function|否|接口调用成功的回调，返回内容详见返回参数说明。||
| success| Function| No| Callback for successful interface calling. See the notices on returning parameter description for returning contents.| |
|fail|Function|否|接口调用失败的回调函数（识别失败、用户取消等情况下触发）||
| fail| Function| No| Callback function for failed interface calling (triggered when identification failed, or being cancelled by user, etc.)| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**scanType的合法值**
**legal values for scanType**

|值|说明|
|value|description|
|:-|:-|
|barCode|一维码|
|barCode|One-dimensional code|
|qrCode|二维码|
|qrCode|QR Code|
|datamatrix|Data Matrix 码|
|datamatrix|Data Matrix Code|
|pdf417|PDF417 条码|
|pdf417|PDF417 Barcode|

**success 返回参数说明**
**success return parameter description**

|参数|说明|平台差异说明|
| Parameter| Instruction| Platform difference description|
|:-|:-|:-|
|result|所扫码的内容||
| result| Content scanned| |
|scanType|所扫码的类型|App、微信小程序、百度小程序、QQ小程序、京东小程序、支付宝小程序|
|scanType|Type of scanned code|App, WeChat applet, Baidu applet, QQ applet, Jingdong applet, Alipay applet|
|charSet|所扫码的字符集|App、微信小程序、百度小程序(所扫码的字符集，仅支持 Android 系统)、QQ小程序、京东小程序|
|charSet|The character set of the scanned code|App, WeChat applet, Baidu applet (the character set of the scanned code, only supports Android system), QQ applet, Jingdong applet|
|path|当所扫的码为当前应用的合法二维码时，会返回此字段，内容为二维码携带的 path。|微信小程序、QQ小程序、京东小程序|
|path|When the scanned code is a valid QR code of the current application, this field will be returned, and the content is the path carried by the QR code. |WeChat applet, QQ applet, Jingdong applet|
|rawData|原始数据，base64 编码|微信小程序、QQ小程序、京东小程序、支付宝小程序|
|rawData|raw data, base64 encoding|WeChat applet, QQ applet, Jingdong applet, Alipay applet|
|code|扫码所得数据|支付宝小程序|
|code|Data obtained by scanning the code|Alipay applet|
|qrCode|扫描二维码时返回二维码数据|支付宝小程序|
|qrCode|Return QR code data when scanning QR code|Alipay applet|
|barCode|扫描条形码时返回条形码数据|支付宝小程序|
|barCode|Return barcode data when scanning barcode|Alipay applet|
|imageChannel|来源|支付宝小程序|
|imageChannel|Source|Alipay Mini Program|


**示例**
**Example**

```javascript
// 允许从相机和相册扫码
//Allow scanning codes from cameras and photo albums
uni.scanCode({
	success: function (res) {
		console.log('条码类型：' + res.scanType);
		console.log('条码内容：' + res.result);
	}
});

// 只允许通过相机扫码
// Allow scanning codes from cameras only.
uni.scanCode({
	onlyFromCamera: true,
	success: function (res) {
		console.log('条码类型：' + res.scanType);
		console.log('条码内容：' + res.result);
	}
});

// 调起条码扫描
//Call up scanning
uni.scanCode({
	scanType: ['barCode'],
	success: function (res) {
		console.log('条码类型：' + res.scanType);
		console.log('条码内容：' + res.result);
	}
});
```

**Tip**

- App-vue如果想自定义扫码，可参考[uni-app中如何使用5+的原生界面控件](http://ask.dcloud.net.cn/article/35036)和[plus.barcode API](https://www.html5plus.org/doc/zh_cn/barcode.html)
- If you want to customize the scan code in App-vue, you can refer to [How to use 5+ native interface controls in uni-app](http://ask.dcloud.net.cn/article/35036) and [plus.barcode API] ](https://www.html5plus.org/doc/zh_cn/barcode.html)
- App-nvue，支持barcode组件，可自定义扫码界面。[详见](https://uniapp.dcloud.io/component/barcode)。App端自定义扫码界面，建议使用nvue方式。
- App-nvue, supports barcode component, you can customize the scan code interface. [See details.](https://uniapp.dcloud.io/component/barcode) It is recommended to use nvue to customize the scanning interface on the App.
- App的扫码引擎，使用业内开源的通用扫码库，扫码效率比不过微信、支付宝等商业扫码库。如需更强的扫码效果，请使用支付宝提供的扫码插件：[https://ext.dcloud.net.cn/plugin?id=2636](https://ext.dcloud.net.cn/plugin?id=2636)
- The scan code engine of the app uses the industry's open source general code scan library, and the scan code efficiency is not comparable to that of WeChat, Alipay and other commercial code scan libraries. For stronger code scanning effect, please use the code scanning plugin provided by Alipay: [https://ext.dcloud.net.cn/plugin?id=2636](https://ext.dcloud.net.cn/ plugin?id=2636)
- 微信小程序自定义扫码界面，可使用camera组件。[详见](https://uniapp.dcloud.io/component/camera)
- Wechat applet can customize the scan code interface, which can use the camera component. [See details](https://uniapp.dcloud.io/component/camera)
- 微信内嵌浏览器运行H5版时，可通过js sdk实现扫码，需要引入一个单独的js，[详见](https://ask.dcloud.net.cn/article/35380)
- When the WeChat embedded browser runs the H5 version, the js sdk can be used to scan the code, and a separate js needs to be introduced. [See details](https://ask.dcloud.net.cn/article/35380)
- 在扫码界面点击返回也会进入 `fail` 回调中
- Click return on the scanning interface to enter `fail` callback
- 支付宝小程序不支持 `success` 回调中的`charSet`，`path`
- Alipay applet does not support `charSet`, `path` in `success` callback
- HX 3.4.4之后版本 android 新增 检测到 QR 码时自动放大功能，提升扫码识别率。
- The android version after HX 3.4.4 added the automatic zoom function when a QR code is detected to improve the scan code recognition rate.

