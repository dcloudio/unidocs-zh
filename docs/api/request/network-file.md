### uni.uploadFile(OBJECT)
将本地资源上传到开发者服务器，客户端发起一个 ``POST`` 请求，其中 ``content-type`` 为 ``multipart/form-data``。  
Upload the local resources to the developer server, and the client side initiates one `POST` request, in which `content-type` is `multipart/form-data`.   
如页面通过 [uni.chooseImage](api/media/image?id=chooseimage) 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。另外选择和上传非图像、视频文件参考：[https://ask.dcloud.net.cn/article/35547](https://ask.dcloud.net.cn/article/35547)。
If the page obtains the temporary file path of a local resource through an interface such as [uni.chooseImage](api/media/image?id=chooseimage), the local resource can be uploaded to the designated server via this interface. In addition, select and upload non-image and video files, please refer to: [https://ask.dcloud.net.cn/article/35547](https://ask.dcloud.net.cn/article/35547).

> 在各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单。

**推荐开发者上传到uniCloud，uniCloud提供了免费CDN和更好的易用性，包括安全的cdn直传。**
**It is recommended for the developers to upload it to uniCloud, which provides free CDN and better ease of use, including secure cdn direct transmission.**
- uniCloud的上传API：[https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile](https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile)
- UniCloud's uploaded API: [https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile](https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile)
- 封装的更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud，一站式集成。
- It encapsulates a more complete [uni-file-picker component](https://ext.dcloud.net.cn/plugin?id=4079). Files are selected and uploaded to uniCloud for one-stop integration.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| Parameter name| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|url|String|是|开发者服务器 url||
| url| String| Yes| Developer server url| |
|files|Array|是（files和filePath选其一）|需要上传的文件列表。**使用 files 时，filePath 和 name 不生效。**|App、H5（ 2.6.15+）|
| files| Array| Yes (choose files or filepath)| List of files to be uploaded. **filePath and name will not take effect if using files.**| App, H5( 2.6.15+)|
|fileType|String|见平台差异说明|文件类型，image/video/audio|仅支付宝小程序，且必填。|
|file|File|否|要上传的文件对象。|仅H5（2.6.15+）支持|
| file| File| No| File object to be uploaded.| Only supported by H5 (2.6.15+)|
|filePath|String|是（files和filePath选其一）|要上传文件资源的路径。||
| filePath| String| Yes (choose files or filepath)| Path of the file resource to be uploaded.| |
|name|String|是|文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容||
| name| String| Yes| The key corresponding to the file, through which the developer can obtain the binary content of the file on the server side.| |
|header|Object|否|HTTP 请求 Header, header 中不能设置 Referer。||
| header| Object| No| HTTP request Header and Referer should not be used in it.| |
|timeout|Number|否|超时时间，单位 ms|H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)|
| timeout| Number| No| Timeout, in ms| H5(HBuilderX 2.9.9+), APP(HBuilderX 2.9.9+)|
|formData|Object|否|HTTP 请求中其他额外的 form data||
| formData| Object| No| Additional form data in HTTP request| |
|success|Function|否|接口调用成功的回调函数||
| success| Function| No| Callback function for successful interface calling| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**注意**：
**Notice**:

- App支持多文件上传，微信小程序只支持单文件上传，传多个文件需要反复调用本API。所以跨端的写法就是循环调用本API。
- hello uni-app中的客服反馈，支持多图上传。[uni-app插件市场](https://ext.dcloud.net.cn/)中也有多个封装的组件。
- Customer service feedback in hello uni-app, supporting multi-image upload. There are also multiple encapsulated components in the [uni-app plug-in market](https://ext.dcloud.net.cn/).
- App平台选择和上传非图像、视频文件，参考[https://ask.dcloud.net.cn/article/35547](https://ask.dcloud.net.cn/article/35547)
- To select and upload non-image and video files on the App platform, please refer to [https://ask.dcloud.net.cn/article/35547](https://ask.dcloud.net.cn/article/35547)
- 网络请求的 ``超时时间`` 可以统一在 ``manifest.json`` 中配置 [networkTimeout](/collocation/manifest?id=networktimeout)。
- The `Timeout` requested by the network can be uniformly configured in the `manifest.json` as [networkTimeout](/collocation/manifest?id=networktimeout).
- 支付宝小程序开发工具上传文件返回的http状态码为字符串形式，支付宝小程序真机返回的状态码为数字形式

**files参数说明**
**Files parameter description**

files 参数是一个 file 对象的数组，file 对象的结构如下：
The files parameter is an array of file object whose structure is as follows:

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|name|String|否|multipart 提交时，表单的项目名，默认为 file|
| name| String| No| Item names of the form at the submission of multipart, with file as default|
|file|File|否|要上传的文件对象，仅H5（2.6.15+）支持|
| file| File| No| File object to be uploaded, only supported by H5 (2.6.15+)|
|uri|String|是|文件的本地地址|
| uri| String| Yes| Local address of the file|

Tip:

- 如果 ``name`` 不填或填的值相同，可能导致服务端读取文件时只能读取到一个文件。
- If `name` is left blank or has the same value, the server may read only one file when it reads the file.

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|data|String|开发者服务器返回的数据|
| data| String| Data returned by the developer server|
|statusCode|Number|开发者服务器返回的 HTTP 状态码|
| statusCode| Number| HTTP status code returned by the developer server|

**示例**
**Example**

```javascript
uni.chooseImage({
	success: (chooseImageRes) => {
		const tempFilePaths = chooseImageRes.tempFilePaths;
		uni.uploadFile({
			url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
			filePath: tempFilePaths[0],
			name: 'file',
			formData: {
				'user': 'test'
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes.data);
			}
		});
	}
});
```

**返回值**
**Return value**

如果希望返回一个 `uploadTask` 对象，需要至少传入 success / fail / complete 参数中的一个。例如：
If you want to return a `uploadTask` object, at least one of the success/fail/complete parameters needs to be passed in. E.g.:

```javascript
var uploadTask = uni.uploadFile({
	url: 'https://www.example.com/upload', //仅为示例，并非真实接口地址。
	complete: ()=> {}
});
uploadTask.abort();
```

如果没有传入 success / fail / complete 参数，则会返回封装后的 Promise 对象：[Promise 封装](/api/README?id=promise-%E5%B0%81%E8%A3%85)
If the success/fail/complete parameter is not passed in, the encapsulated Promise object will be returned: [Promise encapsulation](/api/README?id=promise-%E5%B0%81%E8%A3%85)

通过 `uploadTask`，可监听上传进度变化事件，以及取消上传任务。
You can listen to upload progress change events and cancel upload tasks with `uploadTask`.

**uploadTask 对象的方法列表**
**Method list of uploadTask object**

|方法|参数|说明|
| Method| Parameter| Instruction|
|:-|:-|:-|
|abort||中断上传任务|
| abort| | Interrupt upload task|
|onProgressUpdate|callback|监听上传进度变化|
| onProgressUpdate| callback| listen to upload progress changes|
|onHeadersReceived|callback|监听 HTTP Response Header 事件。会比请求完成事件更早,仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/UploadTask.onHeadersReceived.html)|    
|offProgressUpdate|callback|取消监听上传进度变化事件，仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/UploadTask.offProgressUpdate.html)|
|offHeadersReceived|callback|取消监听 HTTP Response Header 事件，仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/UploadTask.offHeadersReceived.html)|

**onProgressUpdate 返回参数说明**
**OnProgressUpdate return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|progress|Number|上传进度百分比|
| progress| Number| Upload progress percentage|
|totalBytesSent|Number|已经上传的数据长度，单位 Bytes|
| totalBytesSent| Number| Length of uploaded data, in Bytes|
|totalBytesExpectedToSend|Number|预期需要上传的数据总长度，单位 Bytes|
| totalBytesExpectedToSend| Number| Total length of expected data to be uploaded, in Bytes|

**示例**
**Example**

```javascript
uni.chooseImage({
	success: (chooseImageRes) => {
		const tempFilePaths = chooseImageRes.tempFilePaths;
		const uploadTask = uni.uploadFile({
			url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
			filePath: tempFilePaths[0],
			name: 'file',
			formData: {
				'user': 'test'
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes.data);
			}
		});

		uploadTask.onProgressUpdate((res) => {
			console.log('上传进度' + res.progress);
			console.log('已经上传的数据长度' + res.totalBytesSent);
			console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);

			// 测试条件，取消上传任务。
			//Testing condition, to cancel the upload task.
			if (res.progress > 50) {
				uploadTask.abort();
			}
		});
	}
});
```

### uni.downloadFile(OBJECT)
下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。
Download the file resources locally, and the client directly initiates the HTTP GET request to return the local temporary path of the file.

> 在各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单。在h5上是跨域的，用户需要处理好跨域问题。

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| Parameter name| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|url|String|是|下载资源的 url| |
| url| String| Yes| url of the downloaded resource| |
|header|Object|否|HTTP 请求 Header, header 中不能设置 Referer。| |
| header| Object| No| HTTP request Header and Referer should not be used in it.| |
|timeout|Number|否|超时时间，单位 ms|H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)| 
| timeout| Number| No| Timeout, in ms| H5(HBuilderX 2.9.9+), APP(HBuilderX 2.9.9+)|
|success|Function|否|下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}| |
| success| Function| No| After downloading successfully, it will be sent to the page in the form of tempfilepath, res = {tempfilepath: 'Temporary path of the file'}| |
|fail|Function|否|接口调用失败的回调函数| |
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）| |
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)| |
|filePath|string|否|指定文件下载后存储的路径 (本地路径)|微信小程序（IOS小程序保存到相册需要添加此字段才可以正常保存）|

**注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](/api/file/file?id=savefile)，才能在应用下次启动时访问得到。**
**Note: The temporary path of the file can be used normally during this startup of the application. To save it for a long time, you need to call [uni.saveFile](/api/file/file?id=savefile) actively, which will not be accessible until the next startup of the application.**

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|tempFilePath|String|临时文件路径，下载后的文件会存储到一个临时文件|
| tempFilePath| String| Temporary file path, and the downloaded file will be stored in a temporary file|
|statusCode|Number|开发者服务器返回的 HTTP 状态码|
| statusCode| Number| HTTP status code returned by the developer server|

**注意**
**Notice**
- 网络请求的 ``超时时间`` 可以统一在 ``manifest.json`` 中配置 [networkTimeout](/collocation/manifest?id=networktimeout)。
- The `Timeout` requested by the network can be uniformly configured in the `manifest.json` as [networkTimeout](/collocation/manifest?id=networktimeout).

**示例**
**Example**

```javascript
uni.downloadFile({
	url: 'https://www.example.com/file/test', //仅为示例，并非真实的资源
	success: (res) => {
		if (res.statusCode === 200) {
			console.log('下载成功');
		}
	}
});
```

**返回值**
**Return value**

如果希望返回一个 `downloadTask` 对象，需要至少传入 success / fail / complete 参数中的一个。例如：
If you want to return a `downloadTask` object, at least one of the success/fail/complete parameters needs to be passed in. E.g.:

```javascript
var downloadTask = uni.downloadFile({
	url: 'https://www.example.com/file/test', //仅为示例，并非真实接口地址。
	complete: ()=> {}
});
downloadTask.abort();
```

如果没有传入 success / fail / complete 参数，则会返回封装后的 Promise 对象：[Promise 封装](/api/README?id=promise-%E5%B0%81%E8%A3%85)
If the success/fail/complete parameter is not passed in, the encapsulated Promise object will be returned: [Promise encapsulation](/api/README?id=promise-%E5%B0%81%E8%A3%85)

通过 `downloadTask`，可监听下载进度变化事件，以及取消下载任务。
You can listen to download progress change events and cancel upload download tasks with `downloadTask`.

**downloadTask 对象的方法列表**
**Method list of downloadTask object**

|方法|参数|说明|最低版本|
| Method| Parameter| Instruction| Minimum version|
|:-|:-|:-|:-|
|abort||中断下载任务|*|
| abort| | Interrupt download task| *|
|onProgressUpdate|callback|监听下载进度变化|*|
| onProgressUpdate| callback| listen to download progress changes| *|
|onHeadersReceived|callback|监听 HTTP Response Header 事件，会比请求完成事件更早,仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/DownloadTask.onHeadersReceived.html)| | 
|offProgressUpdate|callback|取消监听下载进度变化事件，仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/DownloadTask.offProgressUpdate.html)|
|offHeadersReceived|callback|取消监听 HTTP Response Header 事件，仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/DownloadTask.offHeadersReceived.html)| |

**onProgressUpdate 返回参数说明**
**OnProgressUpdate return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|progress|Number|下载进度百分比|
| progress| Number| Download progress percentage|
|totalBytesWritten|Number|已经下载的数据长度，单位 Bytes|
| totalBytesWritten| Number| Length of downloaded data, in Bytes|
|totalBytesExpectedToWrite|Number|预期需要下载的数据总长度，单位 Bytes|
| totalBytesExpectedToWrite| Number| Total length of expected data to be downloaded, in Bytes|

**示例**
**Example**

```javascript
const downloadTask = uni.downloadFile({
	url: 'http://www.example.com/file/test', //仅为示例，并非真实的资源
	success: (res) => {
		if (res.statusCode === 200) {
			console.log('下载成功');
		}
	}
});

downloadTask.onProgressUpdate((res) => {
	console.log('下载进度' + res.progress);
	console.log('已经下载的数据长度' + res.totalBytesWritten);
	console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);

	// 满足测试条件，取消下载任务。
	if (res.progress > 50) {
		downloadTask.abort();
	}
});
```
