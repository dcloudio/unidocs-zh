### uni.chooseImage(OBJECT)
从本地相册选择图片或使用相机拍照。
Select images from local album or take photos with the camera.

App端如需要更丰富的相机拍照API（如直接调用前置摄像头），参考[plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html)

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| Parameter name| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|count|Number|否|最多可以选择的图片张数，默认9|见下方说明|
| count| Number| No| The default of the maximum number of selected images is 9.| See the instructions below|
|sizeType|Array&lt;String&gt;|否|original 原图，compressed 压缩图，默认二者都有|App、微信小程序、支付宝小程序、百度小程序|
|extension|Array&lt;String&gt;|否|根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。|H5(HBuilder X2.9.9+)|
| extension| Array\<String>| No| Filter by file extension. No empty string is allowed in any item. No filtering by default.| H5(HBuilder X2.9.9+)|
|sourceType|Array&lt;String&gt;|否|album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项||
| sourceType| Array\<String>| No| album refers to selecting images from album, and camera refers to using camera. Both exist by default. If you want to open the camera or select from the album directly, please use only one option.| |
|crop|Object|否|图像裁剪参数，设置后 sizeType 失效|App 3.1.19+|
| crop| Object| No| Image cropping parameter. sizeType will be invalid after enabling.| App 3.1.19+|
|success|Function|是|成功则返回图片的本地文件路径列表 tempFilePaths||
| success| Function| Yes| If success, it returns the list of local file paths tempFilePaths.| |
|fail|Function|否|接口调用失败的回调函数|小程序、App|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**crop 参数说明**
**crop parameter description**

|参数名|类型|必填|说明|平台差异说明|
| Parameter name| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|quality|Number|否|取值范围为1-100，数值越小，质量越低（仅对jpg格式有效）。默认值为80。||
|width|Number|是|裁剪的宽度，单位为px，用于计算裁剪宽高比。||
|height|Number|是|裁剪的高度，单位为px，用于计算裁剪宽高比。||
|resize|Boolean|否|是否将width和height作为裁剪保存图片真实的像素值。默认值为true。注：设置为false时在裁剪编辑界面显示图片的像素值，设置为true时不显示||

**Tips**

- count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。并且，在实际的手机浏览器很少有能够支持多选的。
- The performance of the count value on H5 platform is based on the specification of the browser. As seen from the resent testing result, only single/multiple selection can be specified, and the amount limitation is unavailable. Moreover, there are few real mobile browsers that support multiple choices.
- sourceType 值在 H5 平台根据浏览器的不同而表现不同，一般不可限制仅使用相册，部分浏览器也无法限制是否使用相机。
- 可以通过用户授权API来判断用户是否给应用授予相册或摄像头的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- The user authorization API can be used to determine whether the user authorizes the application the access to the photo album or camera [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- App端如需选择非媒体文件，可在插件市场搜索[文件选择](https://ext.dcloud.net.cn/search?q=文件选择)，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。
- 选择照片大多为了上传，uni ui封装了更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud的免费存储和cdn中，一站式集成。强烈推荐使用。
- Most of the photos are selected for uploading. uni ui encapsulates a more complete [uni-file-picker component](https://ext.dcloud.net.cn/plugin?id=4079). Files are selected and uploaded to uniCloud's free storage and cdn for one-stop integration. Highly recommended.


**注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](api/file/file?id=savefile)，在应用下次启动时才能访问得到。**
**Note: The temporary path of the file can be used normally during this startup of the application. To save it for a long time, you need to call [uni.saveFile](api/file/file?id=savefile) actively, which will not be accessible until the next startup of the application.**

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|tempFilePaths|Array&lt;String&gt;|图片的本地文件路径列表|
| tempFilePaths| Array\<String>| List of local file path of image.|
|tempFiles|Array&lt;Object&gt;、Array&lt;File&gt;|图片的本地文件列表，每一项是一个 File 对象|
| tempFiles| Array\<Object>, Array\<File>| List of local images. Each item is a file object.|

**File 对象结构如下**
**The structure of File object is as follows.**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|path|String|本地文件路径|
| path| String| Local file path|
|size|Number|本地文件大小，单位：B|
| size| Number| Local file size, in: B|
|name|String|包含扩展名的文件名称，仅H5支持|
| name| String| File names with extensions, only supported by H5.|
|type|String|文件类型，仅H5支持|
| type| String| Types of files, only supported by H5.|

**示例**
**Example**

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
Preview image.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| Parameter name| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|current|String/Number|详见下方说明|详见下方说明||
| current| String/Number| See the instructions below| See the instructions below| |
|urls|Array&lt;String&gt;|是|需要预览的图片链接列表||
| urls| Array\<String>| Yes| List of links to preview images| |
|indicator|String|否|图片指示器样式，可取值："default" - 底部圆点指示器； "number" - 顶部数字指示器； "none" - 不显示指示器。|App|
| indicator| String| No| Image indicator style. Options include: "default" - bottom dot indicator; "number" - top number indicator; "none" - no indicator displayed.| App|
|loop|Boolean|否|是否可循环预览，默认值为 false|App|
| loop| Boolean| No| Whether to preview circularly, with false as default.| App|
|longPressActions|Object|否|长按图片显示操作菜单，如不填默认为**保存相册**|App 1.9.5+|
| longPressActions| Object| No| Long press the picture to display the operation menu. If left blank, the default is **Save album**| App 1.9.5+|
|success|Function|否|接口调用成功的回调函数||
| success| Function| No| Callback function for successful interface calling| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**current 参数说明**
**current parameter description**

> 1.9.5+ 支持传图片在 urls 中的索引值
> 1.9.5+ supports the index value of the transmitted image in urls.

current 为当前显示图片的链接/索引值，不填或填写的值无效则为 urls 的第一张。**App平台在 1.9.5至1.9.8之间，current为必填。不填会报错**
current is the link/index value of the currently displayed image. If the value is not filled or invalid, the first image of urls will be displayed. **For App platform versions between 1.9.5 and 1.9.8, current is mandatory. An error is reported if it is left blank**

注意，当 urls 中有重复的图片链接时：
Note! When urls have duplicate image links :

- 传链接，预览结果始终显示该链接在 urls 中第一次出现的位置。
- Upload the link. The preview results always show where the link firstly appears in urls.
- 传索引值，在微信/百度/字节跳动小程序平台，会过滤掉传入的 urls 中该索引值之前与其对应图片链接重复的值。其它平台会保留原始的 urls 不会做去重处理。

举例说明：
For example:

一组图片 `[A, B1, C, B2, D]`，其中 B1 与 B2 的图片链接是一样的。
A group of pictures `[A, B1, C, B2, D]`, where B1 and B2 have the same picture link.

- 传 B2 的链接，预览的结果是 B1，前一张是 A，下一张是 C。
- If upload B2 link, the preview result is B1, the previous one is A, and the next one is C.
- 传 B2 的索引值 3，预览的结果是 B2，前一张是 C，下一张是 D。此时在微信/百度/字节跳动小程序平台，最终传入的 urls 是 `[A, C, B2, D]`，过滤掉了与 B2 重复的 B1。

**longPressActions 参数说明**
**LongPressActions parameter description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|itemList|Array&lt;String&gt;|是|按钮的文字数组|
| itemList| Array\<String>| Yes| Text array of buttons|
|itemColor|String|否|按钮的文字颜色，字符串格式，默认为"#000000"|
| itemColor| String| No| Button text color, in string format. The default is "#000000".|
|success|Function|否|接口调用成功的回调函数，详见返回参数说明|
| success| Function| No| Callback function for successful interface calling. See the notices on returning parameter description.|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|index|Number|用户长按图片的索引值|
| index| Number| User holds down the index value of the image.|
|tapIndex|Number|用户点击按钮列表的索引值|
| tapIndex| Number| User press the index value of the button list|

**示例**
**Example**

```javascript
// 从相册选择6张图
// Select 6 images from album
uni.chooseImage({
	count: 6,
	sizeType: ['original', 'compressed'],
	sourceType: ['album'],
	success: function(res) {
		// 预览图片
		//Preview image
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
- On the non-H5 side, previewImage is implemented natively with low flexibility of interface customization.
- 插件市场有前端实现的previewImage，性能低于原生实现，但界面可随意定义；插件市场也有适于App端的previewImage原生插件，提供了更多功能。
- The plug-in market has front-end implementation of the previewImage. Its performance is lower than the native implementation, but the interface can be defined optionally. The plug-in market also has native previewImage plug-ins applicable for App side, providing more functionality.

### uni.closePreviewImage(OBJECT)

关闭预览图片。

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√ `(3.2.15+)`|√ `(3.2.15+)`|x|x|x|x|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

### uni.getImageInfo(OBJECT)

获取图片信息。
Get image information.

小程序下获取网络图片信息需先配置download域名白名单才能生效。

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|src|String|是|图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径|
| src| String| Yes| Image path. Relative path, temporary file path, storage file path and network image path are applicable|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明**
**success return parameter description**

|参数名|类型|说明|平台差异说明|
| Parameter name| Type| Instruction| Platform difference description|
|:-|:-|:-|:-|
|width|Number|图片宽度，单位px||
| width| Number| Image width, in px| |
|height|Number|图片高度，单位px||
| height| Number| Image height, in px| |
|path|String|返回图片的本地路径||
| path| String| Return the local path of the image| |
|orientation|String|返回图片的方向，有效值见下表|App、小程序、京东小程序|
|type|String|返回图片的格式|App、小程序、京东小程序|

**orientation 参数说明**
**Orientation parameter description**

|枚举值|说明|
| Enumerated value| Instruction|
|:-|:-|
|up|默认|
| up| Default|
|down|180度旋转|
| down| 180° rotation|
|left|逆时针旋转90度|
| left| Rotate 90° counterclockwise|
|right|顺时针旋转90度|
| right| Rotate 90° clockwise|
|up-mirrored|同up，但水平翻转|
| up-mirrored| Same as up, but flipped horizontally|
|down-mirrored|同down，但水平翻转|
| down-mirrored| Same as down, but flipped horizontally.|
|left-mirrored|同left，但垂直翻转|
| left-mirrored| Same as left, but flipped vertically.|
|right-mirrored|同right，但垂直翻转|
| right-mirrored| Same as right, but flipped vertically.|

**示例**
**Example**

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
Save the image to the system album.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|filePath|String|是|图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径|
| filePath| String| Yes| Image path, Temporary file path and permanent file path are allowed but not network image path.|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明**
**success return parameter description**

|参数名|类型|说明|
| Parameter name| Type| Instruction|
|:-|:-|:-|
|path|String|保存到相册的图片路径，仅 App 3.0.5+ 支持|
| path| String| Path of image saved to album, only supported in App 3.0.5+|
|errMsg|String|调用结果|
| errMsg| String| Call result|

**注意**
**Notice**

- 可以通过用户授权API来判断用户是否给应用授予相册的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- The user authorization API can be used to determine whether the user authorizes the application the permission to access to the album [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- H5没有API可触发保存到相册行为，下载图片时浏览器会询问图片存放地址。
- There is no API for H5 to trigger save to album action. When downloading images, the browser will ask for the save path of images.

**示例代码：**
**Sample code:**

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
Image compressing interface, to choose compression quality.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√(基础库版本>=3.110.3)|√|√|√|√|

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 | 平台差异说明 |
| Attribute| Type| Defaults| Required| Instruction| Platform difference description|
| :- | :- | :- | :- | :- | :- |
| src | String |  | 是 | 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径 ||
| src| String| | Yes| Image path, which can be relative path, temporary file path and storage file path| |
| quality | Number | 80 | 否 | 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效） ||
| quality| Number| 80| No| Compression quality ranges from 0 to 100, and the smaller the value, the lower the quality, the higher the compression rate (only for JPG).| |
| width | String | auto | 否 | 缩放图片的宽度，支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据width与源图宽的缩放比例计算，若未设置width则使用源图宽度）|App 3.0.0+|
| height | String | auto | 否 | 缩放图片的高度，支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据height与源图高的缩放比例计算，若未设置height则使用源图高度）|App 3.0.0+|
| height| String| auto| No| Height of the image to be scaled, in pixel (e.g., "100px"), percentage (e.g., "50%") or automatic calculation (e.g., "auto", based on the scaling ratio of height to the height of the source image. If height is not set, use the height of the source image).| App 3.0.0+|
| rotate | Number | 0 | 否 | 旋转度数，范围0～360 |App 3.0.0+|
| success | Function |  | 否 | 接口调用成功的回调函数 ||
| success| Function| | No| Callback function for successful interface calling| |
| fail | Function |  | 否 | 接口调用失败的回调函数 ||
| fail| Function| | No| Callback function for failed interface calling| |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） ||
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)| |

**success 返回参数说明**
**success return parameter description**

| 属性 | 类型 | 说明 |
| Attribute| Type| Instruction|
| :- | :- | :- |
| tempFilePath | String | 压缩后图片的临时文件路径 |
| tempFilePath| String| Temporary file path of compressed image|

**示例代码：**
**Sample code:**

```js
uni.compressImage({
  src: '/static/logo.jpg',
  quality: 80,
  success: res => {
    console.log(res.tempFilePath)
  }
})
```
