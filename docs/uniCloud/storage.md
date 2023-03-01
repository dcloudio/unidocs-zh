## 概述
## Overview

开发者使用`uniCloud`的云存储，无需再像传统模式那样单独去购买存储空间、CDN映射、流量采购等；
Developers use the cloud storage of `uniCloud`, and no longer need to separately purchase storage space, CDN mapping, traffic procurement, etc. as in the traditional model;

云存储的上传方式有3种：
There are 3 ways to upload to cloud storage:
1. web界面：即在[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/) web控制台，点击云存储，通过web界面进行文件上传。该管理界面同时提供了资源浏览、删除等操作界面。
1. Web interface: In the [https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/) web console, click Cloud Storage to upload files through the web interface. The management interface also provides operation interfaces such as resource browsing and deletion.
2. 客户端API或组件上传：在前端js中编写`uniCloud.uploadFile`，或者使用uni ui的[FilePicker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择+上传均封装完毕。
2. Client API or component upload: write `uniCloud.uploadFile` in front-end js, or use uni ui's [FilePicker component](https://ext.dcloud.net.cn/plugin?id=4079), file Select + upload are all packaged.
3. 云函数上传文件到云存储：即在云函数js中编写`uniCloud.uploadFile`
3. Cloud function uploads files to cloud storage: that is, write `uniCloud.uploadFile` in cloud function js

**注意：**
**Notice:**
- 前端和云函数端，均有一个相同名称的api：`uniCloud.uploadFile`。请不要混淆。
- Both the front end and the cloud function end have an api with the same name: `uniCloud.uploadFile`. Please don't confuse.
- 前端还有一个`uni.uploadFile`的API，那个API用于连接非uniCloud的上传使用。请不要混淆。
- The front end also has a `uni.uploadFile` API, which is used to connect to non-uniCloud uploads. Please don't confuse.
- 在使用腾讯云时如果访问云存储文件提示`The requested URL '/1123.jpg' was not found on this server`这种错误，一般是cdn流量用尽导致的。可以升级配置或转为按量计费（目前仅企业类型认证的账号可以使用按量计费的服务空间）。
- When using Tencent Cloud, if you access the cloud storage file, the error `The requested URL '/1123.jpg' was not found on this server` is displayed, which is usually caused by the exhaustion of cdn traffic. You can upgrade the configuration or switch to pay-as-you-go (currently, only enterprise-type certified accounts can use the pay-as-you-go service space).
- 在允许用户上传图片的应用里，违规检测是必不可少的，为此uniCloud提供了内容安全检测模块，可以很方便的实现图片鉴黄等功能。详情参考：[内容安全](https://ext.dcloud.net.cn/plugin?id=5460)
- In applications that allow users to upload pictures, violation detection is essential. For this reason, uniCloud provides a content security detection module, which can easily implement functions such as image identification. For details, please refer to: [Content Security](https://ext.dcloud.net.cn/plugin?id=5460)

阿里云的云存储有一些限制：
Alibaba Cloud's cloud storage has some limitations:
- 不支持目录
- Directories are not supported
- 同名文件上传也是按新文件名对待，不会覆盖
- File uploads with the same name are also treated as new file names and will not be overwritten
- 文件没有读权限控制，任意人知道路径都可以读。
- The file has no read permission control, anyone who knows the path can read it.

腾讯云没有上述限制。
Tencent Cloud does not have the above restrictions.

### 文件权限
### File Permissions

uniCloud腾讯云版支持云存储的文件权限。当上传的文件不希望被其他人访问时，需配置权限。比如身份证照片。
uniCloud Tencent Cloud Edition supports file permissions for cloud storage. When the uploaded files do not want to be accessed by others, you need to configure permissions. such as ID photos.

首先在uniCloud web控制台，腾讯云的服务空间中，可以配置云存储的权限。如果是隐私文件，应该配置为仅管理员可访问。
First of all, in the uniCloud web console, in the service space of Tencent Cloud, you can configure the permissions of cloud storage. If it is a private file, it should be configured so that only administrators can access it.

在云函数中，通过`uniCloud.getTempFileURL`（[见下](#cloudgettempfileurl)），获取该文件的临时URL。然后将临时URL发给客户端，客户端根据临时URL请求云存储的文件。
In the cloud function, get the temporary URL of the file through `uniCloud.getTempFileURL` ([see below](#cloudgettempfileurl)). Then the temporary URL is sent to the client, and the client requests the file stored in the cloud according to the temporary URL.

## 客户端API
## Client API

在uni-app前端进行云存储的操作（不是在云函数里操作），包括在前端上传、删除文件。
Perform cloud storage operations on the front end of uni-app (not in cloud functions), including uploading and deleting files on the front end.

腾讯云支持配置云存储权限，需搭配腾讯云自定义登录使用，详情：[自定义登录](uniCloud/authentication.md)
Tencent Cloud supports configuring cloud storage permissions, which needs to be used with Tencent Cloud custom login. Details: [custom login](uniCloud/authentication.md)

阿里云不支持控制前端访问云储存的权限
Alibaba Cloud does not support controlling permissions for front-end access to cloud storage

云存储客户端api内部会使用`uni.request`、`uni.uploadFile`来发送请求，如果有这两个接口写拦截器务必准确区分要拦截的内容
The cloud storage client API will use `uni.request` and `uni.uploadFile` to send requests internally. If there are these two interfaces, write interceptors to accurately distinguish the content to be intercepted

### uploadFile(Object object)@uploadfile

直接上传文件到云存储。
Upload files directly to cloud storage.

客户端上传文件到云函数、云函数再上传文件到云存储，这样的过程会导致文件流量带宽耗费较大。所以一般上传文件都是客户端直传。
The client uploads the file to the cloud function, and the cloud function uploads the file to the cloud storage. This process will result in a large bandwidth consumption of file traffic. Therefore, the uploaded files are generally uploaded directly from the client.

**阿里云和腾讯云的单文件大小限制为5GB**

**支付宝小程序开发工具上传文件到腾讯云时可能会返回失败，请以真机为准**
**Alipay applet development tool may return a failure when uploading files to Tencent Cloud, please refer to the real machine**

**各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单。[参考](https://uniapp.dcloud.io/uniCloud/publish.html#useinmp)**
**When each Mini Program platform is running, network-related APIs need to be configured with a whitelist of domain names before using them. [Reference](https://uniapp.dcloud.io/uniCloud/publish.html#useinmp)**

#### 请求参数
#### request parameters
**Object object**

|参数名						|类型			|必填	|默认值	|说明																														|平台差异说明							|
|Parameter Name |Type |Required |Default Value |Description |Platform Difference Description |
|:-:							|:-:			|:-:	|:-:		|:-:																														|:-:											|
|filePath					|String		|是		|-			|要上传的文件对象																								|-												|
|filePath |String |Yes |- |File object to upload |- |
|cloudPath				|String		|是		|-			|使用腾讯云时，表示文件的绝对路径，包含文件名。使用阿里云时，`cloudPath`为云端文件名																			|-	|
|cloudPath |String |Yes |- |When using Tencent Cloud, it indicates the absolute path of the file, including the file name. When using Alibaba Cloud, `cloudPath` is the cloud file name |- |
|fileType					|String		|-		|-			|文件类型，支付宝小程序、钉钉小程序必填，可选image、video、audio|-												|
|fileType |String |- |- |File type, required for Alipay applet and DingTalk applet, optional image, video, audio|- |
|onUploadProgress	|Function	|否		|-			|上传进度回调																										|-												|
|onUploadProgress |Function |No |- |Upload progress callback |- |

**注意**
**Notice**

- 使用阿里云时，`cloudPath`为云端文件名，请勿使用非法字符
- When using Alibaba Cloud, `cloudPath` is the cloud file name, please do not use illegal characters
- 腾讯云`cloudPath` 为文件的绝对路径，包含文件名 foo/bar.jpg、foo/bar/baz.jpg 等，不能包含除[0-9 , a-z , A-Z]、/、!、-、\_、.、、\*和中文以外的字符，使用 / 字符来实现类似传统文件系统的层级结构。
- Tencent Cloud `cloudPath` is the absolute path of the file, including the file name foo/bar.jpg, foo/bar/baz.jpg, etc. It cannot contain anything except [0-9 , a-z , A-Z], /, !, -, \ _, ., , \* and characters other than Chinese, use the / character to implement a hierarchy similar to a traditional file system.
- 腾讯云`cloudPath`为文件标识，相同的`cloudPath`会覆盖，如果没有权限覆盖则会上传失败。阿里云以自动生成的ID为文件标识，不会存在覆盖问题
- Tencent Cloud `cloudPath` is the file identifier. The same `cloudPath` will be overwritten. If there is no permission to overwrite, the upload will fail. Alibaba Cloud uses the automatically generated ID as the file identifier, so there will be no overwriting problem
- 阿里云目前由于安全原因暂时禁止云存储内上传html文件
- Alibaba Cloud temporarily prohibits uploading html files in cloud storage due to security reasons
- 上传文件超时时间可以在项目manifest.json内进行配置
- The upload file timeout can be configured in the project manifest.json

**关于腾讯云是否有权限覆盖/删除云端文件**
**About whether Tencent Cloud has permission to overwrite/delete cloud files**

腾讯云使用[自定义登录](authentication.md)的方式确定用户身份。以下以默认权限”所有用户可读，仅创建者及管理员可写“为例进行讲解
Tencent Cloud uses [custom login](authentication.md) to determine user identity. The following uses the default permission "readable by all users, writable only by creators and administrators" as an example to explain

默认情况下用户以匿名身份登录（为了方便暂时称此身份为“匿名用户A”）
By default users log in as anonymous (for convenience we will temporarily call this identity "Anonymous User A")

  - 云端路径不存在则可以成功上传。
  - If the cloud path does not exist, the upload can be successful.
  - 云端路径存在并且是匿名用户A创建的可以成功上传
  - The cloud path exists and is created by anonymous user A and can be uploaded successfully
  - 云端路径存在并且并非匿名用户A创建的会上传失败
  - If the cloud path exists and is not created by anonymous user A, the upload will fail

匿名用户A身份过期之后再次获取的身份并不是”匿名用户A“（暂记为”匿名用户B“），这时匿名用户B是没有权限覆盖匿名用户A上传的文件的。
After the identity of anonymous user A expires, the identity obtained again is not "anonymous user A" (which is temporarily referred to as "anonymous user B"). At this time, anonymous user B does not have permission to overwrite the files uploaded by anonymous user A.

如果使用了[自定义登录](authentication.md)，那么云存储就可以确定用户身份，这时候用户可以覆盖自己上传的文件，删除同理。
If [custom login](authentication.md) is used, then cloud storage can determine the user's identity. At this time, the user can overwrite the files uploaded by himself, and delete them in the same way.

#### 响应参数
#### Response parameters

|字段		|类型	|说明														|
|Field |Type |Description |
|:-:		|:-:	|:-:														|
|fileID		|String	|文件唯一 ID，用来访问文件，建议存储起来	|
|fileID |String |The unique ID of the file, used to access the file, it is recommended to store it |
|requestId	|String	|请求序列号，用于错误排查									|
|requestId |String |Request serial number, used for troubleshooting |

#### 示例代码
#### Sample code

<!-- 
cloudPath: 'test-admin.jpeg',
filePath: filePath,
onUploadProgress: function(progressEvent) {
  console.log(progressEvent);
  var percentCompleted = Math.round(
    (progressEvent.loaded * 100) / progressEvent.total
  );
}
 -->

```javascript
//前端代码
// front end code
uni.chooseImage({
  count: 1,
  success(res) {
    console.log(res);
    if (res.tempFilePaths.length > 0) {
      let filePath = res.tempFilePaths[0]
      //进行上传操作
      //Perform upload operation

      // promise方式
      // promise method
      const result = await uniCloud.uploadFile({
        filePath: filePath,
        cloudPath: 'a.jpg',
        onUploadProgress: function(progressEvent) {
          console.log(progressEvent);
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
        }
      });

      // callback方式，与promise方式二选一即可
      // callback method, you can choose one of the two methods with the promise method
      uniCloud.uploadFile({
        filePath: filePath,
        cloudPath: 'a.jpg',
        onUploadProgress: function(progressEvent) {
          console.log(progressEvent);
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
        },
        success() {},
        fail() {},
        complete() {}
      });

    }
  }
});
```

**Tips**

- 阿里云返回的fileID为链接形式可以直接使用，腾讯云返回的为cloud://形式，如需展示需要调用getTempFileURL获取链接
- The fileID returned by Alibaba Cloud is in the form of a link and can be used directly, while the one returned by Tencent Cloud is in the form of cloud://. If you want to display it, you need to call getTempFileURL to get the link
- uniCloud.uploadFile 只有上传，没有文件选择。uni ui的封装了[FilePicker组件](https://ext.dcloud.net.cn/plugin?id=4079)，从选择到上传一条龙。
- uniCloud.uploadFile only upload, no file selection. uni ui encapsulates the [FilePicker component](https://ext.dcloud.net.cn/plugin?id=4079), from selection to upload one-stop.

### getTempFileURL(Object object)

在云函数中，把文件的fileid转换为临时URL。临时URL有有效期限制，避免其他人获取URL后可以持续访问该文件。
In the cloud function, the fileid of the file is converted to a temporary URL. Temporary URLs have a limited validity period to prevent others from continuously accessing the file after obtaining the URL.

**平台兼容性**
**Platform Compatibility**

|阿里云						|腾讯云	|
|Alibaba Cloud |Tencent Cloud |
|----							|----		|
|HBuilderX 3.1.0+	|√			|

腾讯云获取文件临时下载链接。
Tencent Cloud obtains the temporary download link of the file.

自HBuilderX 3.1.0起阿里云也支持此接口，但仅为抹平和腾讯云的接口差异。因为阿里云的云存储不支持权限控制。
Since HBuilderX 3.1.0, Alibaba Cloud also supports this interface, but only to smooth out the interface differences with Tencent Cloud. Because Alibaba Cloud's cloud storage does not support permission control.

#### 请求参数
#### request parameters

|字段		|类型						|必填	|默认值	|说明								|平台差异说明	|
|Field |Type |Required |Default |Description |Platform Difference Description |
|:-:		|:-:						|:-:	|:-:	|:-:								|:-:			|
|fileList	|Array&lt;String&gt;|是		|-		|要获取下载链接的文件 ID 组成的数组	|-	|
| fileList | Array&lt;String&gt;|Yes |- |Array of file IDs to get download links |- |

**请求参数中的fileList**
**fileList in request parameters**

|字段	|类型	|必填	|说明					|
|Fields |Type |Required |Description |
|:-:	|:-:	|:-:	|:-:					|
|fileID	|String	|是		|文件 ID				|
|fileID |String |Yes |FileID|

#### 响应参数
#### Response parameters

|字段		|类型					|说明							|
|Field |Type |Description |
|:-:		|:-:					|:-:							|
|fileList	|Array&lt;Object&gt;	|存储下载链接的数组				|
| fileList | Array&lt;Object&gt; |Array storing download links |
|requestId	|String					|请求序列号，用于错误排查		|
|requestId |String |Request serial number, used for troubleshooting |

**响应参数中的fileList**
**fileList in response parameters**

|字段		|类型	|说明			|
|Field |Type |Description |
|:-:		|:-:	|:-:			|
|fileID		|String	|文件 ID		|
|fileID |String |File ID |
|tempFileURL|String	|文件访问链接	|
|tempFileURL|String |File access link |

#### 示例代码
#### Sample code

```javascript
// 客户端获取临时文件示例源码
// The client gets the sample source code of the temporary file
// promise方式
// promise method
uniCloud.getTempFileURL({
		fileList: ['cloud://test-28farb/a.png']
	})
	.then(res => {});

// callback方式，与promise方式二选一
//callback method, choose one from promise method
uniCloud.getTempFileURL({
	fileList: ['cloud://test-28farb/a.png'],
	success() {},
	fail() {},
	complete() {}
});
```

### getFileInfo(Object object)@get-file-info

阿里云迁移服务空间后，旧云存储url需要通过此接口获取新服务空间的cdn链接
After Alibaba Cloud migrates the service space, the old cloud storage url needs to obtain the CDN link of the new service space through this interface

**平台兼容性**
**Platform Compatibility**

|阿里云																										|腾讯云	|
|Alibaba Cloud |Tencent Cloud |
|----																											|----		|
|HBuilderX 3.6.10+（alpha版）、HBuilderX 3.6.5+（正式版）	|不支持			|
| HBuilderX 3.6.10+ (alpha version), HBuilderX 3.6.5+ (official version) | Not supported |

#### 请求参数
#### Request parameters

|字段		|类型						|必填	|默认值	|说明								|平台差异说明	|
|Field |Type |Required |Default Value |Description |Platform Difference Description |
|:-:		|:-:						|:-:	|:-:	|:-:								|:-:			|
|fileList	|Array&lt;String&gt;|是		|-		|要获取下载链接的文件 ID 组成的数组	|-	|
| fileList | Array&lt;String&gt;|Yes |- |Array of file IDs to get download links |- |

**请求参数中的fileList**
**fileList in the request parameter**

|字段	|类型	|必填	|说明					|
|Field |Type |Required |Description |
|:-:	|:-:	|:-:	|:-:					|
|fileID	|String	|是		|旧云存储url			|
| fileID | String | yes | old cloud storage url |

#### 响应参数
#### Response parameters

|字段		|类型					|说明							|
|Field |Type |Description |
|:-:		|:-:					|:-:							|
|fileList	|Array&lt;Object&gt;	|存储下载链接的数组				|
| fileList | Array&lt;Object&gt; |Array storing download links |

**响应参数中的fileList**
**fileList in the response parameter**

|字段				|类型		|说明															|
|Field |Type |Description |
|:-:				|:-:		|:-:															|
|fileId			|string	|文件 ID（从文件url中解析出的id）	|
| fileId | string | file ID (id parsed from the file url) |
|gmtCreate	|number	|文件上传时间（精确到秒的时间戳）	|
| gmtCreate | number |File upload time (time stamp accurate to seconds) |
|gmtModified|number	|文件更改时间（精确到秒的时间戳）	|
| gmtModified| number | File modification time (time stamp accurate to the second) |
|name				|string	|文件原始名称											|
| name | string | Original file name |
|size				|number	|文件大小（Byte）									|
| size | number | file size (Byte) |
|type				|string	|文件类型													|
| type | string | file type |
|url				|string	|文件cdn链接											|
| url | string | file cdn link |

### chooseAndUploadFile(Object object)@chooseanduploadfile

> HBuilderX 3.1.0起支持
> Supported since HBuilderX 3.1.0

通过ui界面选择文件（图片/视频）并直接上传到云存储。
Select files (pictures/videos) via ui interface and upload directly to cloud storage.

同时提供了选择回调事件，方便对选择后的图片进行压缩等二次处理，然后再上传。
At the same time, a selection callback event is provided, which is convenient for secondary processing such as compression of the selected image before uploading.

#### 客户端平台兼容性
#### Client Platform Compatibility

此接口根据type不同接收兼容性也略有差异
The receiving compatibility of this interface is slightly different depending on the type

**选择图片，type:'image'**
**Select image, type:'image'**

|App|H5	|微信小程序	|支付宝小程序	  |百度小程序	|字节小程序、飞书小程序	|QQ小程序	|快手小程序|京东小程序|
|App|H5 |WeChat applet |Alipay applet |Baidu applet |Byte applet, Feishu applet |QQ applet |Kuishou applet|Jingdong applet|
|:-:|:-:|:-:				|:-:					|:-:				|:-:				|:-:			|:-:			|:-:			|
|√	|√	|√					|√						|√					|√					|√				|√				|√				|

**选择视频，type:'video'**
**Select video, type:'video'**

|App|H5	|微信小程序	|支付宝小程序	  |百度小程序	|字节小程序、飞书小程序	|QQ小程序	|快手小程序|京东小程序|
|App|H5 |WeChat applet |Alipay applet |Baidu applet |Byte applet, Feishu applet |QQ applet |Kuishou applet|Jingdong applet|
|:-:|:-:|:-:				|:-:					|:-:				|:-:				|:-:			|:-:			|:-:			|
|√	|√	|√					|√						|√					|√					|√				|√				|√				|

**选择任意文件，type:'all'**
**Select any file, type:'all'**

|App|H5	|微信小程序								|支付宝小程序	|百度小程序	|字节小程序、飞书小程序	|QQ小程序	|快手小程序|京东小程序|
|App|H5 |WeChat applet |Alipay applet |Baidu applet |Byte applet, Feishu applet |QQ applet |Kuishou applet|Jingdong applet|
|:-:|:-:|:-:											|:-:					|:-:				|:-:				|:-:			|:-:			|:-:			|
|×	|√	|√（仅支持选择聊天文件）	|×						|×					|×					|×				|×				|×				|
|× |√ |√ (Only supports selecting chat files) |× |× |× |× |× |× |

#### 请求参数
#### request parameters

此接口根据type不同接收不同参数
This interface receives different parameters according to the type

**选择图片，type:'image'**
**Select image, type:'image'**

|字段				|类型		|必填	|说明																															|
|Fields |Type |Required |Description |
|:-:				|:-:		|----	|:-:																															|
|type				|String	|是		|文件类型，image（图片）、video（视频）、all（任意文件）					|
|type |String |Yes |File type, image (picture), video (video), all (any file) |
|count			|Number	|否		|文件数量，默认9																													|
|count |Number |No |Number of files, default 9 |
|extension	|Array	|否		|文件后缀																													|
|extension |Array |No |File Suffix |
|sizeType		|Array	|否		|original 原图，compressed 压缩图，默认二者都有，type为image时生效|
|sizeType |Array |No |original original image, compressed compressed image, both by default, valid when type is image|
|sourceType	|Array	|否		|album 从相册选图，camera 使用相机，默认二者都有									|
|sourceType |Array |No |album Select image from album, camera uses camera, both are available by default |

**选择视频，type:'video'**
**Select video, type:'video'**

|字段				|类型		|必填	|说明																										|
|Fields |Type |Required |Description |
|:-:				|:-:		|----	|:-:																										|
|type				|String	|是		|文件类型，image（图片）、video（视频）、all（任意文件）|
|type |String |Yes |File type, image (picture), video (video), all (any file)|
|extension	|Array	|否		|文件后缀																								|
|extension |Array |No |File Suffix |
|camera			|String	|否		|摄像切换，front（前置摄像头）、back（后置摄像头）			|
|camera |String |No |Camera switch, front (front camera), back (rear camera) |
|compressed	|Boolean|否		|是否压缩所选的视频源文件，默认值为true，需要压缩，type	|
|compressed |Boolean|No | Whether to compress the selected video source file, the default value is true, compression is required, type |
|sourceType	|Array	|否		|album 从相册选图，camera 使用相机，默认二者都有				|
|sourceType |Array |No |album Select image from album, camera uses camera, both are available by default |

**选择文件，type:all**
**Select file, type:all**

|字段			|类型		|必填	|说明																										|
|Fields |Type |Required |Description |
|:-:			|:-:		|----	|:-:																										|
|type			|String	|是		|文件类型，image（图片）、video（视频）、all（任意文件）|
|type |String |Yes |File type, image (picture), video (video), all (any file)|
|count		|Number	|否		|文件数量																								|
|count |Number |No |Number of files |
|extension|Array	|否		|文件后缀																								|
|extension|Array |No |File Suffix |

**说明**
**illustrate**

- 选择视频时没有count参数，表现为一次仅能选择一个
- There is no count parameter when selecting videos, which means that only one can be selected at a time
- count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。并且，在实际的手机浏览器很少有能够支持多选的。
- The performance of the count value on the H5 platform is based on the browser's own specifications. According to the results of the current test, only single-choice/multi-choice can be limited, and the number cannot be limited. Also, few actual mobile browsers support multiple selection.

#### 回调方法
#### callback method

**onChooseFile(Object OnChooseFileRes)**

选择图片的回调事件。方便对选择后的图片进行压缩、裁剪等二次处理，然后再上传。
The callback event for the selected image. It is convenient to perform secondary processing such as compression and cropping on the selected image, and then upload it.

OnChooseFileRes结构如下
The structure of OnChooseFileRes is as follows

```js
{
  errMsg: '',
  tempFilePaths: [], // 临时文件路径数组，chooseVideo/chooseImage/chooseFile接口返回的tempFilePath组成的数组
  tempFiles: [] // 临时文件组成的数组
}
```

如果onChooseFile回调有返回值，此返回值会用来替换实际选择的文件，用以上传。可以在此回调内对文件进行额外的处理，通过在onChooseFile内返回一个promise来阻塞上传，在此期间可以对文件进行额外处理。
If the onChooseFile callback has a return value, this return value will be used to replace the actual selected file for uploading. Additional processing of the file can be done within this callback, blocking the upload by returning a promise within onChooseFile, during which additional processing of the file can be done.

例：
example:

```js
function cropImg(file) {
  return new Promise((resolve, reject) => {
    let ext
    let filePathProcessed = file.path // 处理结果
    // #ifdef H5
    ext = file.name.split('.').pop()
    resolve({
      path: filePathProcessed,
      ext,
      fileType: file.fileType
    })
    // #endif
    // #ifndef H5
    uni.getImageInfo({
      src: file.path,
      success(info) {
        ext = info.type.toLowerCase()
        resolve({
          path: filePathProcessed,
          ext,
          fileType: file.fileType
        })
      },
      fail(err) {
        reject(new Error(err.errMsg || '未能获取图片类型'))
      }
    })
    // #endif
  })
}

uniCloud.chooseAndUploadFile({
  type: 'image',
  onChooseFile(res) {
    const processAll = []
    for (let i = 0; i < res.tempFiles.length; i++) {
      processAll.push(cropImg(res.tempFiles[i]))
    }
    return Promise.all(processAll).then((fileList) => {
      let result = {
        tempFilePaths: []
      }
      result.tempFiles = fileList.map((fileItem, index) => {
        result.tempFilePaths.push(fileItem.path)
        return {
          path: fileItem.path,
          cloudPath: '' + Date.now() + index + '.' + fileItem.ext, // 云端路径，这里随便生成了一个
          fileType: fileItem.fileType
        }
      })
      return result
    })
  }
}).then(res => {
  console.log(res)
})
```


**OnUploadProgress(Object OnUploadProgressRes)**

上传进度的回调
Upload progress callback

OnUploadProgressRes结构如下
The structure of OnUploadProgressRes is as follows

```js
{
  index: 0, // 触发此回调的文件序号
  loaded: 256, // 已上传大小
  total: 1024, // 总大小
  tempFilePath: '', // 本地临时文件路径
  tempFile: {} // 本地文件对象
}
```

#### 响应参数
#### Response parameters

成功回调内的响应参数形式如下
The response parameters in the success callback are in the following form

```js
{
  errMsg: '', // 错误信息
  tempFilePaths: [], // 本地临时文件路径组成的数组
  tempFiles: [] // 文件对象数组，每项上都被追加了一个url属性，值为文件上传得到的fileID
}
```

#### 示例
#### Example

```js
// promise方式
// promise method
uniCloud.chooseAndUploadFile({
		type: 'image'
	})
	.then(res => {});

// callback方式，与promise方式二选一
//callback method, choose one from promise method
uniCloud.chooseAndUploadFile({
	type: 'image',
	success(res) {},
	fail() {},
	complete() {}
});
```

### deleteFile(Object object)

客户端删除云存储文件。
The client deletes cloud storage files.

不建议使用此API。删除云存储文件是一个高危操作，应该由云函数进行权限校验后由云函数来删除云存储的文件。
This API is deprecated. Deleting cloud storage files is a high-risk operation, and cloud functions should delete cloud storage files after permission verification.
- 阿里云不支持此API，前端运行此API会报权限错误
- Alibaba Cloud does not support this API, and the front-end running this API will report a permission error
- 腾讯云支持此API，如若使用，需搭配腾讯云提供的自定义登录和权限设置使用
- Tencent Cloud supports this API, if you want to use it, you need to use it with the custom login and permission settings provided by Tencent Cloud

#### 请求参数
#### request parameters

**Object object**

|字段		|类型					|必填	|说明						|
|Fields |Type |Required |Description |
|:-:		|:-:					|----	|:-:						|
|fileList	|&lt;Array&gt;.String	|是		|要删除的文件 ID 组成的数组，**阿里云只支持一次删除一个文件**|
|fileList |&lt;Array&gt;.String |Yes |An array of file IDs to be deleted, **Alibaba Cloud only supports deleting one file at a time**|

#### 响应参数
#### Response parameters

|字段		|类型					|必填	|说明						|
|Fields |Type |Required |Description |
|:-:		|:-:					|:-:	|:-:						|
|fileList	|&lt;Array&gt;.Object	|否		|删除结果组成的数组			|
|fileList |&lt;Array&gt;.Object |No |Array of delete results |
|requestId	|String					|否		|请求序列号，用于错误排查	|
|requestId |String |No |Request serial number for troubleshooting |

**fileList定义**
**fileList definition**

|字段	|类型	|必填	|说明						|
|Fields |Type |Required |Description |
|:-:	|:-:	|:-:	|:-:						|
|fileID	|String	|是		|文件 ID					|
|fileID |String |Yes |FileID|

#### 示例代码
#### Sample code

```javascript
// 客户端删除云文件示例源码
// promise
uniCloud
  .deleteFile({
    fileList: ['cloud://jimmytest-088bef/1534576354877.jpg']
  })
  .then(res => {});

// callback
uniCloud.deleteFile(
  {
    fileList: ['cloud://jimmytest-088bef/1534576354877.jpg'],
	success(){},
	fail(){},
	complete(){}
  }
);
```

### 将图片传到其他服务空间@upload-to-storage-space
### Transfer pictures to other service spaces @upload-to-storage-space

某些场景下需要使用客户端未关联的服务空间的云存储，此时可以通过[uniCloud.init](https://uniapp.dcloud.net.cn/uniCloud/concepts/space.html#multi-space)方法获取对应空间的实例用于上传文件
In some scenarios, it is necessary to use the cloud storage of the service space not associated with the client. At this time, [uniCloud.init](https://uniapp.dcloud.net.cn/uniCloud/concepts/space.html#multi-space ) method to obtain an instance of the corresponding space for uploading files

**示例代码**
**Example Code**

```js
const storageSpace = uniCloud.init({
  provider: 'aliyun',
  spaceId: 'mp-xxxx',
  clientSecret: 'xxxx',
  endpoint: 'https://api.next.bspapp.com'
})

const uploadRes = await storageSpace.uploadFile({
  filePath: '',
  cloudPath: ''
})
```

## 云函数API
## Cloud Function API

在云函数中操作云存储文件（不是在前端），包括在云函数里上传、删除云存储文件。
Operate cloud storage files in cloud functions (not in the front end), including uploading and deleting cloud storage files in cloud functions.

### uniCloud.uploadFile(Object uploadFileOptions)@clouduploadfile

**云函数**内上传文件至云存储。
**Cloud function** upload files to cloud storage.

如果是从客户端上传文件，一般不建议先把文件从客户端上传到云函数，再由云函数上传到云存储，而是建议客户端直传云存储。详见：[https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile](https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile)
If the file is uploaded from the client, it is generally not recommended to upload the file from the client to the cloud function first, and then upload the file to the cloud storage from the cloud function. Instead, it is recommended that the client directly upload the cloud storage. See: [https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile](https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile)

**平台兼容性**
**Platform Compatibility**

|阿里云						|腾讯云	|
|Alibaba Cloud |Tencent Cloud |
|----							|----		|
|HBuilderX 3.1.0+	|√			|

HBuilderX 3.1.0之前版本如使用阿里云，请在客户端通过`uniCloud.uploadFile`进行上传
If HBuilderX versions before 3.1.0 use Alibaba Cloud, please upload through `uniCloud.uploadFile` on the client side

#### 请求参数
#### request parameters

**uploadFileOptions参数说明**
**uploadFileOptions parameter description**

| 字段				| 类型	| 必填| 说明																															|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																																|
| cloudPath		| string| 是	| 使用腾讯云时，表示文件的绝对路径，包含文件名。使用阿里云时，`cloudPath`为云端文件名			|
| cloudPath | string| Yes | When using Tencent Cloud, it indicates the absolute path of the file, including the file name. When using Alibaba Cloud, `cloudPath` is the cloud file name |
| fileContent	| -			| 是	| 文件内容，请看下方说明																						|
| fileContent | - | Yes | File content, please see the description below |

**说明**
**illustrate**

- 腾讯云支持在fileContent内传[可读流](https://nodejs.org/api/stream.html#stream_class_stream_readable) 或buffer
- Tencent Cloud supports uploading [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) or buffer in fileContent
- 阿里云支持在fileContent内传文件绝对路径或buffer
- Alibaba Cloud supports uploading file absolute path or buffer in fileContent

#### 响应参数
#### Response parameters

| 字段			| 类型	| 必填| 说明																			|
| Fields | Type | Required | Description |
| ---				| ---		| ---	| ---																				|
| fileID		| fileID| 是	| 文件唯一 ID，用来访问文件，建议存储起来。	|
| fileID | fileID| Yes | The unique ID of the file, used to access the file, it is recommended to store it. |
| requestId	| string| 否	| 请求序列号，用于错误排查。								|
| requestId | string| No | Request serial number, used for error troubleshooting. |

#### 示例代码
#### Sample code

```javascript
// 云函数上传文件示例代码
// Cloud function upload file sample code
const fs = require("fs");

let result = await uniCloud.uploadFile({
    cloudPath: "test-admin.jpeg",
    fileContent: fs.createReadStream(`${__dirname}/cos.jpeg`)
});
```

### uniCloud.getTempFileURL(Object getTempFileURLOptions)@cloudgettempfileurl

**云函数**获取文件下载链接。
**Cloud Function** Get the file download link.

**平台兼容性**
**Platform Compatibility**

|阿里云	|腾讯云	|
|Alibaba Cloud |Tencent Cloud |
|----		|----		|
|×			|√			|

#### 请求参数
#### request parameters

**getTempFileURLOptions参数说明**
**getTempFileURLOptions parameter description**

| 字段		| 类型								| 必填| 说明												|
| Fields | Type | Required | Description |
| ---			| ---									| ---	| ---													|
| fileList| &lt;Array&gt;.string| 是	| 要下载的文件 ID 组成的数组。|
| fileList| &lt;Array&gt;.string| Yes | an array of file IDs to download. |

**fileList字段**
**fileList field**

| 字段	| 类型		| 必填| 说明						|
| Fields | Type | Required | Description |
| ---		| ---			| ---	| ---							|
| fileID| string	| 是	| 文件 ID。				|
| fileID| string | yes | File ID. |
<!-- | maxAge| Integer	| 是	| 文件链接有效期。| -->
<!-- | maxAge| Integer | yes | file link validity period. | -->

#### 响应参数
#### Response parameters

| 字段			| 类型								| 必填| 说明													|
| Fields | Type | Required | Description |
| ---				| ---									| ---	| ---														|
| fileList	| &lt;Array&gt;.object| 否	| 存储下载链接的数组。					|
| fileList | &lt;Array&gt;.object| no | Array to store download links. |
| requestId	| string							| 否	| 请求序列号，用于错误排查。		|
| requestId | string | No | Request serial number, used for error troubleshooting. |

**fileList字段**
**fileList field**

| 字段				| 类型	| 必填| 说明											|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---												|
| fileID			| string| 是	| 文件 ID。									|
| fileID | string| yes | File ID. |
| tempFileURL	| string| 是	| 文件访问链接。						|
| tempFileURL | string| yes | File access link. |

#### 示例代码
#### Sample code

```javascript
let result = await uniCloud.getTempFileURL({
    fileList: ['cloud://test-28farb/a.png']
});
```

### uniCloud.deleteFile(Object deleteFileOptions)@clouddeletefile

**云函数**删除云存储文件。
**Cloud Function** delete cloud storage files.

删除云存储文件是高危操作，不建议在客户端操作，而建议在云函数中操作。
Deleting cloud storage files is a high-risk operation. It is not recommended to perform operations on the client, but to perform operations in cloud functions.

#### 请求参数
#### request parameters

**deleteFileOptions参数说明**
**deleteFileOptions parameter description**

| 字段		| 类型								| 必填| 说明												|
| Fields | Type | Required | Description |
| ---			| ---									| ---	| ---													|
| fileList| &lt;Array&gt;.string| 是	| 要删除的文件 ID 组成的数组。|
| fileList| &lt;Array&gt;.string| yes | Array of file IDs to delete. |

#### 响应参数
#### Response parameters

| 字段			| 类型								| 必填| 说明											|
| Fields | Type | Required | Description |
| ---				| ---									| ---	| ---												|
| fileList	| &lt;Array&gt;.object| 否	| 删除结果组成的数组。			|
| fileList | &lt;Array&gt;.object| no | Array of delete results. |
| requestId	| string							| 否	| 请求序列号，用于错误排查。|
| requestId | string | No | Request serial number, used for error troubleshooting. |

**fileList字段**
**fileList field**

| 字段 | 类型 | 必填 | 说明 |
| Fields | Type | Required | Description |
| --- | --- | --- | --- |
| fileID | string | 是 | 文件 ID。 |
| fileID | string | yes | File ID. |

#### 示例代码
#### Sample code

```javascript
// 云函数删除文件示例代码
// Cloud function delete file sample code
let result = await uniCloud.deleteFile({
    fileList: [
        "cloud://test-28farb/a.png" // 阿里云fileID是url形式，例：https://xxx.com/xxx.png
    ]
});
```

### uniCloud.downloadFile(Object downloadFileOptions)@clouddownloadfile

**云函数**下载已上传至云存储的文件到云函数代码空间内。阿里云直接使用http请求url下载即可，无需使用downloadFile接口。

如需下载到客户端请参考：

- [uni.downloadFile()](../api/request/network-file.md#downloadfile)

**平台兼容性**
**Platform Compatibility**

|阿里云	|腾讯云	|
|Alibaba Cloud |Tencent Cloud |
|----		|----		|
|×			|√			|

#### 请求参数
#### request parameters

**downloadFileOptions参数说明**
**downloadFileOptions parameter description**

| 字段				| 类型	| 必填| 说明										|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---											|
| fileID			| string| 是	| 要下载的文件的 ID。			|
| fileID | string| yes | ID of the file to download. |
| tempFilePath| string| 否	| 下载的文件要存储的位置。|
| tempFilePath| string| no | The location where the downloaded file is to be stored. |

#### 响应参数
#### Response parameters

| 字段				| 类型	| 必填| 说明																										|
| Fields | Type | Required | Description |
| ---					| ---		| ---	| ---																											|
| fileContent	| Buffer| 否	| 下载的文件的内容。如果传入 tempFilePath 则不返回该字段。|
| fileContent | Buffer| no | The content of the downloaded file. This field is not returned if tempFilePath is passed in. |
| requestId		| string| 否	| 请求序列号，用于错误排查。															|
| requestId | string| No | Request serial number, used for error troubleshooting. |

#### 示例代码
#### Sample code

```javascript
let result = await uniCloud.downloadFile({
    fileID: "cloud://aa-99j9f/my-photo.png",
    // tempFilePath: '/tmp/test/storage/my-photo.png'
});
```


### getFileInfo(Object object)@get-file-info

阿里云迁移服务空间后，旧云存储url需要通过此接口获取新服务空间的cdn链接
After Alibaba Cloud migrates the service space, the old cloud storage url needs to obtain the CDN link of the new service space through this interface

**平台兼容性**
**Platform Compatibility**

|阿里云																										|腾讯云	|
|Alibaba Cloud |Tencent Cloud |
|----																											|----		|
|HBuilderX 3.6.10+（alpha版）、HBuilderX 3.6.5+（正式版）	|不支持			|
| HBuilderX 3.6.10+ (alpha version), HBuilderX 3.6.5+ (official version) | Not supported |

#### 请求参数
#### Request parameters

|字段		|类型						|必填	|默认值	|说明								|平台差异说明	|
|Field |Type |Required |Default Value |Description |Platform Difference Description |
|:-:		|:-:						|:-:	|:-:	|:-:								|:-:			|
|fileList	|Array&lt;String&gt;|是		|-		|要获取下载链接的文件 ID 组成的数组	|-	|
| fileList | Array&lt;String&gt;|Yes |- |Array of file IDs to get download links |- |

**请求参数中的fileList**
**fileList in the request parameter**

|字段	|类型	|必填	|说明					|
|Field |Type |Required |Description |
|:-:	|:-:	|:-:	|:-:					|
|fileID	|String	|是		|旧云存储url			|
| fileID | String | yes | old cloud storage url |

#### 响应参数
#### Response parameters

|字段		|类型					|说明							|
|Field |Type |Description |
|:-:		|:-:					|:-:							|
|fileList	|Array&lt;Object&gt;	|存储下载链接的数组				|
| fileList | Array&lt;Object&gt; |Array storing download links |

**响应参数中的fileList**
**fileList in the response parameter**

|字段				|类型		|说明															|
|Field |Type |Description |
|:-:				|:-:		|:-:															|
|fileId			|string	|文件 ID（从文件url中解析出的id）	|
| fileId | string | file ID (id parsed from the file url) |
|gmtCreate	|number	|文件上传时间（精确到秒的时间戳）	|
| gmtCreate | number |File upload time (time stamp accurate to seconds) |
|gmtModified|number	|文件更改时间（精确到秒的时间戳）	|
| gmtModified| number | File modification time (time stamp accurate to the second) |
|name				|string	|文件原始名称											|
| name | string | Original file name |
|size				|number	|文件大小（Byte）									|
| size | number | file size (Byte) |
|type				|string	|文件类型													|
| type | string | file type |
|url				|string	|文件cdn链接											|
| url | string | file cdn link |

## 数据处理
## data processing

**阿里云**
**Ali Cloud**

> 阿里云商用版目前仍可使用此功能，但是未来可能会进行计费
> Alibaba Cloud Commercial Edition can still use this function, but billing may be performed in the future

使用阿里云作为服务商时，云存储支持直接使用**restful api**对资源进行处理，下表列出支持的操作类型。
When using Alibaba Cloud as the service provider, cloud storage supports the direct use of **restful api** to process resources. The following table lists the supported operation types.

如果你的数据库及云函数使用腾讯云，也是可以使用阿里云云存储的。详细用法参考：[连接多个服务空间](uniCloud/init.md)
If your database and cloud functions use Tencent Cloud, you can also use Alibaba Cloud Cloud Storage. Detailed usage reference: [Connect multiple service spaces](uniCloud/init.md)

|功能			|操作参数	|参考文档																													|
|Function |Operation Parameters |Reference Documentation |
|:-:			|:-:		|:-:																														|
|图片缩放		|resize		|[点击查看](https://help.aliyun.com/document_detail/44688.html?spm=a2c4g.11186623.2.10.274651b0YkQ5hE#concept-hxj-c4n-vdb)	|
|Image zoom |resize |[Click to view](https://help.aliyun.com/document_detail/44688.html?spm=a2c4g.11186623.2.10.274651b0YkQ5hE#concept-hxj-c4n-vdb) |
|图片裁剪		|crop		|[点击查看](https://help.aliyun.com/document_detail/44693.html?spm=a2c4g.11186623.2.11.274651b0YkQ5hE#concept-bbn-14s-vdb)	|
|Image crop |crop |[Click to view](https://help.aliyun.com/document_detail/44693.html?spm=a2c4g.11186623.2.11.274651b0YkQ5hE#concept-bbn-14s-vdb) |
|图片旋转		|rotate		|[点击查看](https://help.aliyun.com/document_detail/44690.html?spm=a2c4g.11186623.2.12.274651b0YkQ5hE#concept-yvv-25t-vdb)	|
|Image rotation |rotate |[Click to view](https://help.aliyun.com/document_detail/44690.html?spm=a2c4g.11186623.2.12.274651b0YkQ5hE#concept-yvv-25t-vdb) |
|图片锐化调节		|sharpen	|[点击查看](https://help.aliyun.com/document_detail/44700.html?spm=a2c4g.11186623.2.13.274651b0YkQ5hE#concept-cyw-zzt-vdb)	|
|Image sharpening adjustment |sharpen |[Click to view](https://help.aliyun.com/document_detail/44700.html?spm=a2c4g.11186623.2.13.274651b0YkQ5hE#concept-cyw-zzt-vdb) |
|图片格式转换		|format		|[点击查看](https://help.aliyun.com/document_detail/44703.html?spm=a2c4g.11186623.2.14.274651b0YkQ5hE#concept-mf3-md5-vdb)	|
|Image format conversion |format |[Click to view](https://help.aliyun.com/document_detail/44703.html?spm=a2c4g.11186623.2.14.274651b0YkQ5hE#concept-mf3-md5-vdb) |
|图片质量调节		|quality	|[点击查看](https://help.aliyun.com/document_detail/44705.html?spm=a2c4g.11186623.2.15.274651b0YkQ5hE#concept-exc-qp5-vdb)	|
|Image quality adjustment |quality |[Click to view](https://help.aliyun.com/document_detail/44705.html?spm=a2c4g.11186623.2.15.274651b0YkQ5hE#concept-exc-qp5-vdb) |
|图片水印		|watermark	|[点击查看](https://help.aliyun.com/document_detail/44957.html?spm=a2c4g.11186623.2.16.274651b0YkQ5hE#concept-hrt-sv5-vdb)	|
|Image watermark |watermark |[Click to view](https://help.aliyun.com/document_detail/44957.html?spm=a2c4g.11186623.2.16.274651b0YkQ5hE#concept-hrt-sv5-vdb) |
|视频截帧		|snapshot	|[点击查看](https://help.aliyun.com/document_detail/64555.html?spm=a2c4g.11186623.2.17.274651b0YkQ5hE#concept-kz1-cwc-wdb)	|
|Video frame |snapshot |[Click to view](https://help.aliyun.com/document_detail/64555.html?spm=a2c4g.11186623.2.17.274651b0YkQ5hE#concept-kz1-cwc-wdb) |

**Tips**

- 阿里云的云存储暂不支持分目录。阿里云的前端网页托管支持分目录。
- Alibaba Cloud's cloud storage does not currently support sub-directories. Alibaba Cloud's front-end web hosting supports sub-directory.

**腾讯云**
**Tencent Cloud**


使用腾讯云作为服务商时，云存储通过`数据万象`提供图片缩放、图片水印等计算功能。
When using Tencent Cloud as a service provider, cloud storage provides image scaling, image watermarking and other computing functions through `Data Vientiane`.

`数据万象`是腾讯云的一个按量计费产品，月初生成上个月的账单，并从账号余额中扣除相关费用。故若在腾讯云中使用图片缩放、图片水印等功能，首先需保证账号余额充足，否则可能会触发**账号级停服**风险！
`Data Vientiane` is a pay-as-you-go product of Tencent Cloud. The bill for the previous month is generated at the beginning of the month, and the relevant fees are deducted from the account balance. Therefore, if you use functions such as image scaling and image watermarking in Tencent Cloud, you must first ensure that the account balance is sufficient, otherwise it may trigger the risk of **account-level service suspension**!

说明：`数据万象`月初产生的账单，会从uniCloud账号余额中自动扣除，相关费用及单价完全和腾讯云保持一致，具体可参考[数据万象 - 计费方式](https://cloud.tencent.com/document/product/460/73221)。
Note: The bill generated at the beginning of the month of `Data Vientiane` will be automatically deducted from the balance of the uniCloud account. The relevant fees and unit prices are completely consistent with Tencent Cloud. For details, please refer to [Data Vientiane - Billing Method](https://cloud.tencent .com/document/product/460/73221).

腾讯云支持的数据处理功能如下：
The data processing functions supported by Tencent Cloud are as follows:

|功能			|操作参数	|参考文档																													|
|Function |Operation Parameters |Reference Documentation |
|:-:			|:-:		|:-:																														|
|图片缩放		|thumbnail		|[点击查看](https://cloud.tencent.com/document/product/436/44880)	|
|Image Zoom |thumbnail |[Click to view](https://cloud.tencent.com/document/product/436/44880) |
|图片裁剪		|cut,crop,iradius,rradius,scrop|[点击查看](https://cloud.tencent.com/document/product/436/44881)	|
|Image crop |cut,crop,iradius,rradius,scrop|[Click to view](https://cloud.tencent.com/document/product/436/44881) |
|图片旋转		|rotate		|[点击查看](https://cloud.tencent.com/document/product/436/44882)	|
|Image Rotate |rotate |[Click to view](https://cloud.tencent.com/document/product/436/44882) |
|格式转换		|format,cgif,interlace|[点击查看](https://cloud.tencent.com/document/product/436/44883)	|
|Format Conversion |format,cgif,interlace|[Click to view](https://cloud.tencent.com/document/product/436/44883) |
|质量变换|quality,rquality,lquality|[点击查看](https://cloud.tencent.com/document/product/436/44884)	|
|Quality Transform|quality,rquality,lquality|[Click to view](https://cloud.tencent.com/document/product/436/44884) |
|高斯模糊|radius,sigma|[点击查看](https://cloud.tencent.com/document/product/436/44885)	|
|Gaussian Blur|radius,sigma|[Click to view](https://cloud.tencent.com/document/product/436/44885)|
|亮度|bright|[点击查看](https://cloud.tencent.com/document/product/436/58206)	|
|brightness|bright|[Click to view](https://cloud.tencent.com/document/product/436/58206) |
|对比度|contrast|[点击查看](https://cloud.tencent.com/document/product/436/58207)	|
|Contrast|contrast|[Click to view](https://cloud.tencent.com/document/product/436/58207)|
|锐化|sharpen|[点击查看](https://cloud.tencent.com/document/product/436/44886)	|
|Sharpen|sharpen|[Click to view](https://cloud.tencent.com/document/product/436/44886)|
|灰度图|grayscale|[点击查看](https://cloud.tencent.com/document/product/436/66518)	|
|Grayscale|grayscale|[Click to view](https://cloud.tencent.com/document/product/436/66518)|
|图片水印|watermark|[点击查看](https://cloud.tencent.com/document/product/436/44887)	|
|Image watermark|watermark|[Click to view](https://cloud.tencent.com/document/product/436/44887) |
|文字水印|watermark|[点击查看](https://cloud.tencent.com/document/product/436/44888)	|
|Text Watermark|watermark|[Click to view](https://cloud.tencent.com/document/product/436/44888) |
|获取图片基本信息|	imageInfo	|[点击查看](https://cloud.tencent.com/document/product/436/44889)	|
|Get basic image information | imageInfo |[Click to view](https://cloud.tencent.com/document/product/436/44889) |
|获取图片 EXIF|exif|[点击查看](https://cloud.tencent.com/document/product/436/44890)	|
|Get Image EXIF|exif|[Click to view](https://cloud.tencent.com/document/product/436/44890) |
|获取图片主色调|imageAve|[点击查看](https://cloud.tencent.com/document/product/436/44891)	|
|Get the main color of the image|imageAve|[Click to view](https://cloud.tencent.com/document/product/436/44891)|
|去除元信息|strip|[点击查看](https://cloud.tencent.com/document/product/436/44892)	|
|Remove meta information|strip|[Click to view](https://cloud.tencent.com/document/product/436/44892) |
|快速缩略模板|w,h,format,q,rq,lq		|[点击查看](https://cloud.tencent.com/document/product/436/44893)	|
|Quick Thumbnail Template|w,h,format,q,rq,lq |[Click to view](https://cloud.tencent.com/document/product/436/44893) |
|限制图片大小|size-limit|[点击查看](https://cloud.tencent.com/document/product/436/56734)	|
|Limit image size|size-limit|[Click to view](https://cloud.tencent.com/document/product/436/56734)|
|管道操作符|	&#124;	|[点击查看](https://cloud.tencent.com/document/product/436/44894)	|
|Pipe operator| &#124; |[Click to view](https://cloud.tencent.com/document/product/436/44894) |


