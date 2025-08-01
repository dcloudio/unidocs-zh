> 视频需要上传？推荐`uni-cdn`，帮你节省至少30%的 CDN 费用！[详情](https://doc.dcloud.net.cn/uniCloud/uni-cdn/intro.html)。

## uni.chooseVideo(OBJECT)
拍摄视频或从手机相册中选视频，返回视频的临时文件路径。

若选择和上传非图像、视频文件，另行参考：[https://uniapp.dcloud.io/api/media/file](https://uniapp.dcloud.io/api/media/file)。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|x|√|

<!-- UNIAPPAPIJSON.chooseVideo.compatibility -->

**OBJECT 参数说明**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|sourceType|Array&lt;String&gt;|否|album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']||
|extension|Array&lt;String&gt;|否|根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。|H5(HBuilder X 2.9.9+)|
|compressed|Boolean|否|是否压缩所选的视频源文件，默认值为 true，需要压缩。|微信小程序、百度小程序、抖音小程序、飞书小程序、京东小程序、App(HBuilder X 3.2.7+)|
|maxDuration|Number|否|拍摄视频最长拍摄时间，单位秒。最长支持 60 秒。|APP平台 1.9.7+(iOS支持，Android取决于ROM的拍照组件是否实现此功能，如果没实现此功能则忽略此属性。) 微信小程序、百度小程序、京东小程序|
|camera|String|否|'front'、'back'，默认'back'|APP、微信小程序、京东小程序、抖音小程序|
|success|Function|否|接口调用成功，返回视频文件的临时文件路径，详见返回参数说明。||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

**success 返回参数说明**

|参数|类型|说明|平台差异|
|:-|:-|:-|:-|
|tempFilePath|String|选定视频的临时文件路径||
|tempFile|File|选定的视频文件|仅H5（2.6.15+）支持|
|duration|Number|选定视频的时间长度，单位为 s|APP 2.1.0+、H5、微信小程序、京东小程序|
|size|Number|选定视频的数据量大小|APP 2.1.0+、H5、微信小程序、京东小程序|
|height|Number|返回选定视频的高|APP 2.1.0+、H5、微信小程序、京东小程序|
|width|Number|返回选定视频的宽|APP 2.1.0+、H5、微信小程序、京东小程序|
|name|String|包含扩展名的文件名称|仅H5支持|

**注意：**
* sourceType 值在 H5 平台根据浏览器的不同而表现不同，一般不可限制仅使用相册，部分浏览器也无法限制是否使用相机。
* app安卓端选择的视频最大只支持180MB，如需突破该限制请使用原生插件https://ext.dcloud.net.cn/search?q=%E6%96%87%E4%BB%B6%E9%80%89%E6%8B%A9
* 文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](/api/file/file.md#savefile)，在应用下次启动时才能访问得到。
* camera 部分 Android 手机下由于系统 ROM 不支持无法生效，打开拍摄界面后可操作切换
* 可以通过用户授权API来判断用户是否给应用授予相册或摄像头的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
* App下如需进一步压缩视频大小，可以在插件市场搜索[视频压缩](http://ext.dcloud.net.cn/search?q=%E8%A7%86%E9%A2%91%E5%8E%8B%E7%BC%A9)插件
* 如需上传到cdn，可使用uniCloud.uploadFile API，uniCloud提供了免费cdn给开发者使用，详见[https://doc.dcloud.net.cn/uniCloud/storage?id=uploadfile](https://doc.dcloud.net.cn/uniCloud/storage?id=uploadfile)
* 选择视频大多为了上传，uni ui封装了更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud的免费存储和cdn中，一站式集成。强烈推荐使用。
* 部分浏览器中无法获取视频信息。
* 微信小程序在2023年10月17日之后，使用API需要配置[隐私协议](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html)
* 由于受[google play 照片和视频权限](https://support.google.com/googleplay/android-developer/answer/14115180)政策的影响，使用uni.chooseVideo在上架google play时需要主动添加声明。遇到此问题可以使用插件[uni-chooseSystemMedia](https://ext.dcloud.net.cn/plugin?id=20744)。

**示例**

```
<template>
	<view>
		<text>hello</text>
		<button @tap="test">click me</button>
		<video :src="src"></video>
	</view>
</template>
export default {
	data() {
		return {
			src: ''
		}
	},
	methods: {
		test: function () {
			var self = this;
			uni.chooseVideo({
				sourceType: ['camera', 'album'],
				success: function (res) {
					self.src = res.tempFilePath;
				}
			});
		}
	}
}
```


## uni.chooseMedia(OBJECT)

拍摄或从手机相册中选择图片或视频。注意在app平台，相册选择使用的是系统相册。系统相册选择不需要本地媒体访问权限，但上面的UI无法定制，不能自行添加类似“原图”的单选框，

若选择和上传非图像、视频文件，另行参考：[https://uniapp.dcloud.io/api/media/file](https://uniapp.dcloud.io/api/media/file)。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|4.52+|x|2.10.0+|x|x|√|x|x|√|√|√|

<!-- UNIAPPAPIJSON.chooseMedia.compatibility -->

**OBJECT 参数说明**

|参数名|类型|默认值|必填|说明|
|:-|:-|:-|:-|:-|
|count|Number|9（注意：ios不可大于9）|否|最多可以选择的文件个数|
|mediaType|Array.&lt;string&gt;|['image', 'video']|否|文件类型|
|sourceType|Array.&lt;string&gt;|['album', 'camera']|否|图片和视频选择的来源|
|maxDuration|Number|10|否|拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 30s 之间|
|sizeType|Array.&lt;string&gt;|['original', 'compressed']|否|仅对 mediaType 为 image 时有效，是否压缩所选文件|
|camera|String|'back'|否|仅在 sourceType 为 camera 时生效，使用前置或后置摄像头|
|success|function||否|接口调用成功的回调函数|
|fail|function||否|接口调用失败的回调函数|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|

**OBJECT.mediaType 合法值**

|值|说明|
|:-|:-|
|image|只能拍摄图片或从相册选择图片|
|video|只能拍摄视频或从相册选择视频	|
|mix|	可同时选择图片和视频	|

**OBJECT.sourceType 合法值**

|值|说明|
|:-|:-|
|album|从相册选择|
|camera|使用相机拍摄	|

**OBJECT.camera 合法值**

|值|说明|
|:-|:-|
|back|使用后置摄像头|
|front|使用前置摄像头	|

**success 返回参数说明**

|参数名|类型|说明|
|:-|:-|:-|
|tempFiles|Array.&lt;string&gt;|本地临时文件列表|
|type|String|文件类型，有效值有 image 、video、mix|

**res.tempFiles 的结构**

|参数名						|类型		|说明												|
|:-								|:-			|:-													|
|tempFilePath			|String	|本地临时文件路径 (本地路径)|
|size							|Number	|本地临时文件大小，单位 B		|
|duration					|Number	|视频的时间长度							|
|height						|Number	|视频的高度									|
|width						|Number	|视频的宽度									|
|thumbTempFilePath|String	|视频缩略图临时文件路径			|
|fileType|String	|文件类型			|

**fileType 合法值**

|值|说明|
|:-|:-|
|image|图片|
|video|视频|


**示例**

```javascript
uni.chooseMedia({
  count: 9,
  mediaType: ['image','video'],
  sourceType: ['album', 'camera'],
  maxDuration: 30,
  camera: 'back',
  success(res) {
    console.log(res.tempFiles)
  }
})

```

**Tips**

* 如需上传到cdn，可使用uniCloud.uploadFile API，uniCloud提供了免费cdn给开发者使用，详见[https://doc.dcloud.net.cn/uniCloud/storage?id=uploadfile](https://doc.dcloud.net.cn/uniCloud/storage?id=uploadfile)
* 选择文件大多为了上传，uni ui封装了更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud的免费存储和cdn中，一站式集成。强烈推荐使用。
* 经开发者提醒，微信小程序ios真机可以选择的文件个数不能大于9，详见帖子[https://ask.dcloud.net.cn/question/115561](https://ask.dcloud.net.cn/question/115561)
* 微信小程序在2023年10月17日之后，使用API需要配置[隐私协议](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html)
* app-android/app-ios平台使用此API需要勾选“Camera&Gallery(相机和相册)”模块


## uni.saveVideoToPhotosAlbum(OBJECT)

保存视频到系统相册。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|x|√|√|

<!-- UNIAPPAPIJSON.saveVideoToPhotosAlbum.compatibility -->

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|filePath|String|是|视频文件路径，可以是临时文件路径也可以是永久文件路径|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**

|参数名|类型|说明|
|:-|:-|:-|
|errMsg|String|调用结果|

**注意**

- 可以通过用户授权API来判断用户是否给应用授予相册写入权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)

**示例**

```
<template>
	<view>
		<text>hello</text>
		<button @tap="test">click me</button>
		<video :src="src"></video>
	</view>
</template>
export default {
	data() {
		return {
			src: ''
		}
	},
	methods: {
		test: function () {
			var self = this;
			uni.chooseVideo({
				sourceType: ['camera'],
				success: function (res) {
					self.src = res.tempFilePath;

					uni.saveVideoToPhotosAlbum({
						filePath: res.tempFilePath,
						success: function () {
							console.log('save success');
						}
					});
				}
			});
		}
	}
}
```

**Tips**

* 微信小程序在2023年10月17日之后，使用API需要配置[隐私协议](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html)

## uni.getVideoInfo(OBJECT)

获取视频详细信息

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.1.10+|3.1.10+|2.11.0+|x|x|x|x|√|x|√|√|

<!-- UNIAPPAPIJSON.getVideoInfo.compatibility -->

**OBJECT 参数说明**


|属性	|类型	|默认值	|必填	|说明	|
|:-:	|:-:	|:-:	|:-:	|:-:	|
|src	|string		|-	|是	|视频文件路径，可以是临时文件路径也可以是永久文件路径（不支持网络地址）|
|success	|function	|-	|否		|接口调用成功的回调函数	|
|fail		|function	|-	|否		|接口调用失败的回调函数	|
|complete	|function	|-	|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|


**success 返回参数说明**

|参数名	|类型	|说明	|平台差异说明|
|:-:	|:-:	|:-:	|:-:	|
|orientation|string	|画面方向	|微信小程序、App（3.1.14+）|
|type	|string	|视频格式		|微信小程序、App（3.1.14+）|
|duration	|number	|视频长度	|微信小程序、App（3.1.10+）、H5|
|size		|number	|视频大小，单位 kB	|微信小程序、App（3.1.10+）、H5|
|height		|number	|视频的长，单位 px	|微信小程序、App（3.1.10+）、H5|
|width		|number	|视频的宽，单位 px	|微信小程序、App（3.1.10+）、H5|
|fps		|number	|视频帧率		|微信小程序、App（3.1.14+）|
|bitrate	|number	|视频码率，单位 kbps|微信小程序、App（3.1.14+）|

**res.orientation参数说明**

|值							|说明									|
|:-							|:-										|
|up							|默认									|
|down						|180度旋转						|
|left						|逆时针旋转90度				|
|right					|顺时针旋转90度				|
|up-mirrored		|同up，但水平翻转			|
|down-mirrored	|同down，但水平翻转		|
|left-mirrored	|同left，但垂直翻转		|
|right-mirrored	|同right，但垂直翻转	|

## uni.compressVideo(OBJECT)

压缩视频接口。开发者可指定压缩质量 quality 进行压缩。当需要更精细的控制时，可指定 bitrate、fps、和 resolution，当 quality 传入时，这三个参数将被忽略。原视频的相关信息可通过 getVideoInfo 获取。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.1.10+|x|2.11.0+|x|x|x|x|x|x|√|√|

<!-- UNIAPPAPIJSON.compressVideo.compatibility -->

App端有很多插件支持视频压缩，详见[插件市场](https://ext.dcloud.net.cn/search?q=%E8%A7%86%E9%A2%91%E5%8E%8B%E7%BC%A9)

压缩完毕后如需上传到cdn，可使用uniCloud.uploadFile API，uniCloud提供了免费cdn给开发者使用，详见[https://doc.dcloud.net.cn/uniCloud/storage?id=uploadfile](https://doc.dcloud.net.cn/uniCloud/storage?id=uploadfile)


**OBJECT 参数说明**

|属性				|类型			|默认值	|必填	|说明																									|
|:-:				|:-:			|:-:		|:-:	|:-:																									|
|src				|string		|				|是		|视频文件路径，可以是临时文件路径也可以是永久文件路径	|
|quality		|string		|'high'|否		|压缩质量																							|
|bitrate		|number		|				|否		|码率，单位 kbps（仅 iOS 支持）																			|
|fps				|number		|				|否		|帧率（仅 iOS 支持）																									|
|resolution	|number		|				|否		|相对于原视频的分辨率比例，取值范围(0, 1]（仅 iOS 支持）							|
|success		|function	|				|否		|接口调用成功的回调函数																|
|fail				|function	|				|否		|接口调用失败的回调函数																|
|complete		|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）			|

**quality可取值**

|值			|说明	|
|:-			|:-		|
|low		|低		|
|medium	|中		|
|high		|高		|

**success 返回参数说明**

|参数名				|类型		|说明									|
|:-						|:-			|:-										|
|tempFilePath	|string	|压缩后的临时文件地址	|
|size					|string	|压缩后的大小，单位 kB|

## uni.openVideoEditor(OBJECT)

打开视频编辑器

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|2.12.0+|x|x|x|x|x|x|x|x|

**OBJECT 参数说明**

|属性			|类型			|默认值	|必填	|说明			|
|:-:			|:-:			|:-:		|:-:	|:-:		|
|filePath	|string		|-			|是		|视频源的路径，只支持本地路径	|
|minDuration	|string		|-			|是		|视频裁剪的最小长度（2.16.1）	|
|maxDuration	|string		|-			|是		|视频裁剪的最大长度	（2.16.1）|
|success	|function	|-			|否		|接口调用成功的回调函数			|
|fail			|function	|-			|否		|接口调用失败的回调函数		|
|complete	|function	|-			|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|

**success 返回参数说明**

|参数名				|类型		|说明																					|
|:-						|:-			|:-																						|
|duration			|number	|剪辑后生成的视频文件的时长，单位毫秒（ms）		|
|size					|number	|剪辑后生成的视频文件大小，单位字节数（byte）	|
|tempFilePath	|string	|编辑后生成的视频文件的临时路径								|
|tempThumbPath|string	|编辑后生成的缩略图文件的临时路径							|
