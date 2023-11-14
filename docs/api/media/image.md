### uni.chooseImage(OBJECT)
从本地相册选择图片或使用相机拍照。
Choose an image from your local photo album or take a photo with your camera.

App端如需要更丰富的相机拍照API（如直接调用前置摄像头），参考[plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html)
If the App side needs a richer camera camera API (such as directly calling the front camera), refer to [plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html)

> _微信小程序从基础库 2.21.0 开始， [wx.chooseImage](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html) 停止维护，请使用 [uni.chooseMedia](https://uniapp.dcloud.net.cn/api/media/video.html#choosemedia) 代替。_
> _WeChat MiniApp starts from the basic library 2.21.0, [wx.chooseImage](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html) stop maintenance, Please use [uni.chooseMedia]( <a href="https://uniapp.dcloud.net.cn/api/media/video.html#choosemedia">https://uniapp.dcloud.net.cn/api/media/video.html#choosemedia</a> ) instead. _


**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
|Parameter Name|Type|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|count|Number|否|最多可以选择的图片张数，默认9|见下方说明|
| count| Number|No|The maximum number of pictures that can be selected, the default is 9|See the description below|
|sizeType|Array&lt;String&gt;|否|original 原图，compressed 压缩图，默认二者都有|App、微信小程序、支付宝小程序、百度小程序|
| sizeType| Array&lt;String&gt;|No| original image, compressed image, both are available by default| App, WeChat MiniApp, Alipay MiniApp, Baidu MiniApp|
|extension|Array&lt;String&gt;|否|根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。|H5(HBuilder X2.9.9+)|
| extension| Array&lt;String&gt;|No|Filter according to the file extension, and each item cannot be an empty string. No filtering by default. | H5(HBuilder X2.9.9+)|
|sourceType|Array&lt;String&gt;|否|album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项||
| sourceType| Array&lt;String&gt;|No| album selects pictures from the album, camera uses the camera, both are available by default. If you want to directly open the camera or directly select the album, please use only one option||
|crop|Object|否|图像裁剪参数，设置后 sizeType 失效|App 3.1.19+|
| crop| Object|No|Image cropping parameter, sizeType will be invalid after setting| App 3.1.19+|
|success|Function|是|成功则返回图片的本地文件路径列表 tempFilePaths||
| success| Function|Yes|If successful, return the local file path list of the image tempFilePaths||
|fail|Function|否|接口调用失败的回调函数|小程序、App|
| fail| Function|No|Callback function for interface call failure| MiniApp, App|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function|No|The callback function of the end of the interface call (it will be executed when the call succeeds or fails)|&nbsp;|

**crop 参数说明**
**crop parameter description**

|参数名|类型|必填|说明|平台差异说明|
|Parameter Name|Type|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|quality|Number|否|取值范围为1-100，数值越小，质量越低（仅对jpg格式有效）。默认值为80。||
| quality| Number|No| The value range is 1-100, the smaller the value, the lower the quality (only valid for jpg format). The default value is 80. ||
|width|Number|是|裁剪的宽度，单位为px，用于计算裁剪宽高比。||
|width|Number|Yes|the width of the clipping, in px, used to calculate the cropping aspect ratio. ||
|height|Number|是|裁剪的高度，单位为px，用于计算裁剪宽高比。||
|height|Number|Yes|the height of the clipping, in px, used to calculate the clipping aspect ratio. ||
|resize|Boolean|否|是否将width和height作为裁剪保存图片真实的像素值。默认值为true。注：设置为false时在裁剪编辑界面显示图片的像素值，设置为true时不显示||
| resize| Boolean|No|Whether to use width and height as cropping to save the real pixel value of the picture. The default value is true. Note: When set to false, the pixel value of the picture will be displayed on the crop editing interface, and when set to true, it will not be displayed||

**Tips**

- count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。并且，在实际的手机浏览器很少有能够支持多选的。
- The performance of the count value on the H5 platform is based on the browser's own specification. Judging from the results of the current test, only single-choice/multiple-choice can be limited, and the number cannot be limited. Also, few actual mobile browsers support multiple selections.
- sourceType 值在 H5 平台根据浏览器的不同而表现不同，一般不可限制仅使用相册，部分浏览器也无法限制是否使用相机。
- The value of sourceType on the H5 platform varies depending on the browser. Generally, the use of albums cannot be restricted, and some browsers cannot restrict the use of cameras.
- 可以通过用户授权API来判断用户是否给应用授予相册或摄像头的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- You can use the user authorization API to determine whether the user has granted the application permission to access the photo album or camera [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other /authorize)
- App端如需选择非媒体文件，可在插件市场搜索[文件选择](https://ext.dcloud.net.cn/search?q=文件选择)，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。
- If you need to select non-media files on the App side, you can search [file selection](https://ext.dcloud.net.cn/search?q=%E6%96%87%E4%BB%B6%E9 in the plug-in market %80%89%E6%8B%A9), where Native.js can be used on the Android side without native plug-ins, while native plug-ins are required on the iOS side.
- 选择照片大多为了上传，uni ui封装了更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud的免费存储和cdn中，一站式集成。强烈推荐使用。
- App上有时会遇到图片旋转90度问题，插件市场有解决方案：[图片旋转](https://ext.dcloud.net.cn/search?q=%E5%9B%BE%E7%89%87%E6%97%8B%E8%BD%AC)
- 微信小程序在2023年10月17日之后，使用API需要配置[隐私协议](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html)


**注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](api/file/file?id=savefile)，在应用下次启动时才能访问得到。**
**Note: The temporary path of the file can be used normally during the current startup of the application. If you need to save it persistently, you need to actively call [uni.saveFile](api/file/file?id=savefile), and the next startup of the application can only be accessed when. **

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|tempFilePaths|Array&lt;String&gt;|图片的本地文件路径列表|
| tempFilePaths| Array&lt;String&gt;|List of local file paths of images|
|tempFiles|Array&lt;Object&gt;、Array&lt;File&gt;|图片的本地文件列表，每一项是一个 File 对象|
| tempFiles| Array&lt;Object&gt;, Array&lt;File&gt;|The local file list of the picture, each item is a File object|

**File 对象结构如下**
**File object structure is as follows**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|path|String|本地文件路径|
| path| String|local file path|
|size|Number|本地文件大小，单位：B|
| size| Number|Local file size, unit: B|
|name|String|包含扩展名的文件名称，仅H5支持|
| name| String|The file name including the extension, only supported by H5|
|type|String|文件类型，仅H5支持|
| type| String| file type, only supported by H5|

**示例**
**example**

```javascript
uni.chooseImage({
	count: 6, //默认9
	sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
	sourceType: ['album'], //从相册选择
	success: function (res) {
		console.log(JSON.stringify(res.tempFilePaths));
	}
});
```

### uni.previewImage(OBJECT) @unipreviewimageobject
预览图片。
preview picture.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
|Parameter Name|Type|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|current|String/Number|详见下方说明|详见下方说明||
| current| String/Number|See below for details|See below for details||
|urls|Array&lt;String&gt;|是|需要预览的图片链接列表||
| urls| Array&lt;String&gt;|Yes|A list of image links to be previewed||
|indicator|String|否|图片指示器样式，可取值："default" - 底部圆点指示器； "number" - 顶部数字指示器； "none" - 不显示指示器。|App|
| indicator| String|No|Image indicator style, possible values: "default" - dot indicator at the bottom; "number" - number indicator at the top; "none" - no indicator. | App|
|loop|Boolean|否|是否可循环预览，默认值为 false|App|
| loop| Boolean|No|Whether the preview can be looped, the default value is false|App|
|longPressActions|Object|否|长按图片显示操作菜单，如不填默认为**保存相册**|App 1.9.5+|
| longPressActions| Object|No|Long press the picture to display the action menu, if not filled, the default is **Save Album**| App 1.9.5+|
|success|Function|否|接口调用成功的回调函数||
| success| Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
| fail| Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function|No|The callback function of the end of the interface call (it will be executed when the call succeeds or fails)|&nbsp;|

**current 参数说明**
**current parameter description**

> 1.9.5+ 支持传图片在 urls 中的索引值
> 1.9.5+ supports uploading image index value in urls

current 为当前显示图片的链接/索引值，不填或填写的值无效则为 urls 的第一张。**App平台在 1.9.5至1.9.8之间，current为必填。不填会报错**
current is the link/index value of the currently displayed image, if it is left blank or the filled value is invalid, it will be the first one of urls. **App platform is between 1.9.5 and 1.9.8, current is required. If you do not fill in, an error will be reported**

注意，当 urls 中有重复的图片链接时：
Note, when there are duplicate image links in urls:

- 传链接，预览结果始终显示该链接在 urls 中第一次出现的位置。
- 传索引值，在微信/百度/抖音小程序平台，会过滤掉传入的 urls 中该索引值之前与其对应图片链接重复的值。其它平台会保留原始的 urls 不会做去重处理。

举例说明：
for example:

一组图片 `[A, B1, C, B2, D]`，其中 B1 与 B2 的图片链接是一样的。
A set of images `[A, B1, C, B2, D]`, where the image links of B1 and B2 are the same.

- 传 B2 的链接，预览的结果是 B1，前一张是 A，下一张是 C。
- 传 B2 的索引值 3，预览的结果是 B2，前一张是 C，下一张是 D。此时在微信/百度/抖音小程序平台，最终传入的 urls 是 `[A, C, B2, D]`，过滤掉了与 B2 重复的 B1。

**longPressActions 参数说明**
**longPressActions parameter description**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|itemList|Array&lt;String&gt;|是|按钮的文字数组|
| itemList| Array&lt;String&gt;|Yes|Array of text for the button|
|itemColor|String|否|按钮的文字颜色，字符串格式，默认为"#000000"|
| itemColor| String|No|The text color of the button, in string format, the default is "#000000"|
|success|Function|否|接口调用成功的回调函数，详见返回参数说明|
| success| Function|No|Callback function for successful interface call, see return parameter description for details|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|index|Number|用户长按图片的索引值|
| index| Number|The index value when the user presses the picture for a long time|
|tapIndex|Number|用户点击按钮列表的索引值|
| tapIndex| Number|The index value of the user tapped button list|

**示例**
**example**

```javascript
// 从相册选择6张图
// Select 6 pictures from the album
uni.chooseImage({
	count: 6,
	sizeType: ['original', 'compressed'],
	sourceType: ['album'],
	success: function(res) {
		// 预览图片
		// preview picture
		uni.previewImage({
			urls: res.tempFilePaths,
			longPressActions: {
				itemList: ['发送给朋友', '保存图片', '收藏'],
				success: function(data) {
					console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				},
				fail: function(err) {
					console.log(err.errMsg);
				}
			}
		});
	}
	});
```

**TIPS**
- 在非H5端，previewImage是原生实现的，界面自定义灵活度较低。
- On the non-H5 side, previewImage is implemented natively, and the interface customization flexibility is low.
- 插件市场有前端实现的previewImage，性能低于原生实现，但界面可随意定义；插件市场也有适于App端的previewImage原生插件，提供了更多功能。
- The plug-in market has a front-end implementation of previewImage, whose performance is lower than that of the native implementation, but the interface can be defined at will; the plug-in market also has a native previewImage plug-in suitable for the App side, which provides more functions.

### uni.closePreviewImage(OBJECT)

关闭预览图片。
Close the preview image.

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√ `(3.2.15+)`|√ `(3.2.15+)`|x|x|x|x|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter Name|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数|
| success| Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

### uni.getImageInfo(OBJECT)

获取图片信息。
Get image information.

小程序下获取网络图片信息需先配置download域名白名单才能生效。
To obtain network picture information under the MiniApp, you need to configure the download domain name whitelist first to take effect.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter Name|Type|Required|Description|
|:-|:-|:-|:-|
|src|String|是|图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径|
| src| String|Yes|the path of the image, which can be a relative path, a temporary file path, a storage file path, or a network image path|
|success|Function|否|接口调用成功的回调函数|
| success| Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**success 返回参数说明**
**success return parameter description**

|参数名|类型|说明|平台差异说明|
|Parameter Name|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|width|Number|图片宽度，单位px||
| width| Number|image width, unit px||
|height|Number|图片高度，单位px||
| height| Number|image height, unit px||
|path|String|返回图片的本地路径||
| path| String|Returns the local path of the image||
|orientation|String|返回图片的方向，有效值见下表|App、小程序、京东小程序|
|orientation| String|Returns the orientation of the image, see the table below for valid values| App, MiniApp, Jingdong MiniApp|
|type|String|返回图片的格式|App、小程序、京东小程序|
| type| String|The format of the returned image| App, MiniApp, Jingdong MiniApp|

**orientation 参数说明**
**orientation parameter description**

|枚举值|说明|
|enum value|description|
|:-|:-|
|up|默认|
|up|default|
|down|180度旋转|
| down| 180 degree rotation|
|left|逆时针旋转90度|
| left|rotate 90 degrees counterclockwise|
|right|顺时针旋转90度|
| right|rotate 90 degrees clockwise|
|up-mirrored|同up，但水平翻转|
| up-mirrored|Same as up, but flipped horizontally|
|down-mirrored|同down，但水平翻转|
| down-mirrored|same as down, but flipped horizontally|
|left-mirrored|同left，但垂直翻转|
| left-mirrored|same as left, but flipped vertically|
|right-mirrored|同right，但垂直翻转|
| right-mirrored|Same as right, but flipped vertically|

**示例**
**example**

```javascript
uni.chooseImage({
	count: 1,
	sourceType: ['album'],
	success: function (res) {
		uni.getImageInfo({
			src: res.tempFilePaths[0],
			success: function (image) {
				console.log(image.width);
				console.log(image.height);
			}
		});
	}
});
```

### uni.saveImageToPhotosAlbum(OBJECT)
保存图片到系统相册。
Save the picture to the system album.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter Name|Type|Required|Description|
|:-|:-|:-|:-|
|filePath|String|是|图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径|
| filePath| String|Yes|The image file path, which can be a temporary file path or a permanent file path, does not support the network image path|
|success|Function|否|接口调用成功的回调函数|
| success| Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**success 返回参数说明**
**success return parameter description**

|参数名|类型|说明|
|parameter name|type|description|
|:-|:-|:-|
|path|String|保存到相册的图片路径，仅 App 3.0.5+ 支持|
| path| String|The path of the image saved to the album, only supported by App 3.0.5+|
|errMsg|String|调用结果|
| errMsg| String|call result|

**注意**
**Notice**

- 可以通过用户授权API来判断用户是否给应用授予相册的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- You can use the user authorization API to determine whether the user has granted the app the access to the photo album [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize )
- H5没有API可触发保存到相册行为，下载图片时浏览器会询问图片存放地址。
- 微信小程序在2023年10月17日之后，使用API需要配置[隐私协议](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html)

**示例代码：**
**Example code:**

```javascript
uni.chooseImage({
	count: 1,
	sourceType: ['camera'],
	success: function (res) {
		uni.saveImageToPhotosAlbum({
			filePath: res.tempFilePaths[0],
			success: function () {
				console.log('save success');
			}
		});
	}
});
```

### uni.compressImage(OBJECT)

压缩图片接口，可选压缩质量
Compressed image interface, optional compression quality

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√(基础库版本>=3.110.3)|√|√|√|√|
|√| x|√|√|√(base library version>=3.110.3)|√|√|√|√|

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 | 平台差异说明 |
| Property | Type | Default | Required | Description | Platform Difference Description |
| :- | :- | :- | :- | :- | :- |
| src | String |  | 是 | 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径 ||
| src | String | | Yes | Image path, image path, can be relative path, temporary file path, storage file path ||
| quality | Number | 80 | 否 | 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效） ||
| quality | Number | 80 | No | Compression quality, ranging from 0 to 100, the smaller the value, the lower the quality and the higher the compression rate (only valid for jpg) ||
| width | String | auto | 否 | 缩放图片的宽度，支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据width与源图宽的缩放比例计算，若未设置width则使用源图宽度）|App 3.0.0+|
| width | String | auto | No | Scale the width of the picture, support pixel value (such as "100px"), percentage (such as "50%"), automatic calculation (such as "auto", that is, zoom according to the width and the width of the source image Scale calculation, if width is not set, the source image width will be used) | App 3.0.0+|
| height | String | auto | 否 | 缩放图片的高度，支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据height与源图高的缩放比例计算，若未设置height则使用源图高度）|App 3.0.0+|
| height | String | auto | No | The height of the scaled image, supports pixel value (such as "100px"), percentage (such as "50%"), automatic calculation (such as "auto", that is, scaling according to the height and the height of the source image Scale calculation, if the height is not set, the height of the source image will be used) | App 3.0.0+|
| compressedWidth | Number | - | 否 | 压缩后图片的宽度，单位为px，若不填写则默认以 compressHeight 为准等比缩放 |微信小程序2.26.0 +|
| compressedWidth | Number | - | No| The width of the compressed image, in px, if not filled, the default will be scaled according to the compressedHeight|WeChat MiniApp 2.26.0+|
| compressHeight | Number | - | 否 | 压缩后图片的高度，单位为px，若不填写则默认以 compressedWidth 为准等比缩放 |微信小程序2.26.0 +|
| compressHeight | Number | - | No| The height of the compressed image, in px, if not filled in, the compressedWidth will be used as the default scaling|WeChat MiniApp 2.26.0+|
| rotate | Number | 0 | 否 | 旋转度数，范围0～360 |App 3.0.0+|
| rotate | Number | 0 | No | Rotation degree, range 0～360 | App 3.0.0+|
| success | Function |  | 否 | 接口调用成功的回调函数 ||
| success | Function | | No | Callback function for successful interface call ||
| fail | Function |  | 否 | 接口调用失败的回调函数 ||
| fail | Function | | No | Callback function for interface call failure ||
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） ||
| complete | Function | | No | The callback function for the end of the interface call (it will be executed when the call succeeds or fails) ||

**success 返回参数说明**
**success return parameter description**

| 属性 | 类型 | 说明 |
| Property | Type | Description |
| :- | :- | :- |
| tempFilePath | String | 压缩后图片的临时文件路径 |
| tempFilePath | String | Temporary file path of the compressed image |

**示例代码：**
**Example code:**

```js
uni.compressImage({
  src: '/static/logo.jpg',
  quality: 80,
  success: res => {
    console.log(res.tempFilePath)
  }
})
```
