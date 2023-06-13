### uni.chooseFile(OBJECT)
从本地选择文件。
Select files from the local directory.

本API主要用于选择非媒体文件，如果选择的文件是媒体文件，另有3个专用API：
This API is mainly used to select non-media files. For media files, there are three specialized APIs:
- [图片选择](https://uniapp.dcloud.io/api/media/image?id=chooseimage)
- [Image selection](https://uniapp.dcloud.io/api/media/image?id=chooseimage)
- [视频选择](https://uniapp.dcloud.io/api/media/video?id=choosevideo)
- [Video selection](https://uniapp.dcloud.io/api/media/video?id=choosevideo)
- [多媒体文件选择(含图片视频)](https://uniapp.dcloud.io/api/media/video?id=choosemedia)
- [Multimedia file selection (including pictures and videos)](https://uniapp.dcloud.io/api/media/video?id=choosemedia)

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√`(HBuilder X2.9.9+)`|x`(可使用wx.chooseMessageFile)`|x|x|x|x|x|x|
|x|√`(HBuilder X2.9.9+)`|x`(wx.chooseMessageFile can be used)`|x|x|x|x|x|x|

- App端如需选择非媒体文件，可在插件市场搜索[文件选择](https://ext.dcloud.net.cn/search?q=文件选择)，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。
- If you need to select non-media files on the App side, you can search for [File Selection] in the plugin market (https://ext.dcloud.net.cn/search?q=%E6%96%87%E4%BB%B6%E9 %80%89%E6%8B%A9), in which Native.js can be used on the Android side without native plugins, while the iOS side requires native plugins.
- App端如果想选择下载到`_doc`、`_downloads`、`_documents`等plus.io控制的目录下的文件，可通过[plus.io Api](https://www.html5plus.org/doc/zh_cn/io.html)，自己做选择框。
- If you want to download files to the plus.io-controlled directories such as `_doc`, `_downloads`, `_documents`, etc. on the App side, you can use [plus.io Api](https://www.html5plus.org/doc /zh_cn/io.html), make the selection box yourself.
- 选择文件大多为了上传，uni ui封装了更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud的免费存储和cdn中，一站式集成。强烈推荐使用。
- Most of the files are selected for uploading. uni ui encapsulates a more complete [uni-file-picker component](https://ext.dcloud.net.cn/plugin?id=4079). Files are selected and uploaded to uniCloud's free storage and cdn for one-stop integration. Highly recommended.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|默认值|必填|说明|平台差异说明|
| Parameter name| Type| Defaults| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|:-|
|count|Number|100|否|最多可以选择的文件数量|见下方说明|
| count| Number| 100| No| Maximum number of files that can be selected| See the instructions below|
|type|String|'all'|否|所选的文件的类型|见下方说明|
| type| String| 'all'| No| Type of selected file| See the instructions below|
|extension|Array&lt;String&gt;||否|根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。|见下方说明|
| extension| Array\<String>| | No| Filter by file extension. No empty string is allowed in any item. No filtering by default.| See the instructions below|
|sourceType|Array&lt;String&gt;|['album','camera']|否|（仅在type为`image`或`video`时可用）`album` 从相册选图，`camera` 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项||
| sourceType| Array\<String>| \['album','camera']| No| (Available only when the type is `image` or `video`) `album` refers to selecting images from album, and `camera` refers to using camera. Both exist by default. If you want to open the camera or select from the album directly, please use only one option.| |
|success|Function||是|成功则返回图片的本地文件路径列表 `tempFilePaths`||
| success| Function| | Yes| If success, it returns the list of local file paths of the image `tempFilePaths`| |
|fail|Function||否|接口调用失败的回调函数||
| fail| Function| | No| Callback function for failed interface calling| |
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**Tips**

- count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。并且，在实际的手机浏览器很少有能够支持多选的。
- The performance of the count value on H5 platform is based on the specification of the browser. As seen from the resent testing result, only single/multiple selection can be specified, and the amount limitation is unavailable. Moreover, there are few real mobile browsers that support multiple choices.
- sourceType 值在 H5 平台根据浏览器的不同而表现不同，一般不可限制仅使用相册，部分浏览器也无法限制是否使用相机。
- The sourceType value behaves differently on the H5 platform depending on the browser. Generally, it is not restricted to use only the photo album, and some browsers cannot restrict the use of the camera.
- extension暂只支持文件后缀名，例如`['.zip','.exe','.js']`，不支持`application/msword`等类似值
- extension only supports file extensions temporarily, such as `['.zip','.exe','.js']`, instead of `application/msword` and similar values

**注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](api/file/file?id=savefile)，在应用下次启动时才能访问得到。**
**Note: The temporary path of the file can be used normally during this startup of the application. To save it for a long time, you need to call [uni.saveFile](api/file/file?id=savefile) actively, which will not be accessible until the next startup of the application.**

**OBJECT.type 的合法值**
**Legal values of OBJECT.type.**

|值|说明|
| Value| Instruction|
|:-|:-|
|all|从所有文件选择|
| all| Select from all files|
|video|只能选择视频文件|
| video| Only video files can be selected|
|image|只能选择图片文件|
| image| Only image files can be selected|

**Tips**

- 如果type属性和extension同时存在，例如`{type:'image',extension:['.png','.jpg']}`，则会选择`image/png,image/jpg`文件
- If both the type attribute and the extension exist, such as `{type:'image',extension:['.png','.jpg']}`, the `image/png,image/jpg` file will be selected
- 如果只配置extension属性，例如`{extension:['.doc','.xlsx','.docx']}`，则会选择`.doc,.xlsx,.docx`文件，详情见[`accept属性`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/accept)
- If only the extension attribute is configured, such as `{extension:['.doc','.xlsx','.docx']}`, the `.doc,.xlsx,.docx` file will be selected. See [`accept attribute`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/accept) for details
- 在微信环境中，如果`type="all"`，则`extension`属性失效
- In the WeChat environment, if `type="all"`, the `extension` attribute is invalid

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|tempFilePaths|Array&lt;String&gt;|文件的本地文件路径列表|
| tempFilePaths| Array\<String>| List of local file paths for files.|
|tempFiles|Array&lt;Object&gt;、Array&lt;File&gt;|文件的本地文件列表，每一项是一个 File 对象|
| tempFiles| Array\<Object>, Array\<File>| List of local files. Each item is a file object.|

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
uni.chooseFile({
  count: 6, //默认100
  extension:['.zip','.doc'],
	success: function (res) {
		console.log(JSON.stringify(res.tempFilePaths));
	}
});

// 选择图片文件
//Select image file
uni.chooseFile({
  count: 10,
  type: 'image',
  success (res) {
    // tempFilePath可以作为img标签的src属性显示图片
    // tempFilePath can display images as the src attribute of the img tags.
    const tempFilePaths = res.tempFiles
  }
})
```

### wx.chooseMessageFile(OBJECT)

从微信聊天会话中选择文件。
Select a file from a WeChat chat session.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√`(基础库2.5.0+)`|x|x|x|√`(基础库1.18.0+)`|x|x|
|x|x|√`(base library 2.5.0+)`|x|x|x|√`(base library 1.18.0+)`|x|x|

