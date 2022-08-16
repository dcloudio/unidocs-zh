<md-translatedByGoogle />

### uni.saveFile(OBJECT) @savefile
保存文件到本地。
Save the file to a local directory.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|x|√|

**注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用**
**Note: saveFile will move the temporary file, so the tempFilePath passed in after the call is successful will not be available**

> _微信小程序已停止维护[wx.saveFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html)接口，建议使用[FileSystemManager](https://uniapp.dcloud.io/api/file/getFileSystemManager.html)对象中的方法。_
> _WeChat applet has stopped maintaining [wx.saveFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html) interface, it is recommended to use [FileSystemManager ](https://uniapp.dcloud.io/api/file/getFileSystemManager.html) method in the object. _

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|tempFilePath|String|是|需要保存的文件的临时路径|
| tempFilePath| String| Yes| Temporary path of files to be saved|
|success|Function|否|返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}|
| success| Function| No| Return the saving path of the file, res = {savedFilePath: 'File saving path'}|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明：**
**Success return parameter description:**

|参数|说明|
| Parameter| Instruction|
|:-|:-|
|savedFilePath|文件的保存路径|
| savedFilePath| File saving path|

**示例代码：**
**Sample code:**

```javascript
uni.chooseImage({
  success: function (res) {
    var tempFilePaths = res.tempFilePaths;
    uni.saveFile({
      tempFilePath: tempFilePaths[0],
      success: function (res) {
        var savedFilePath = res.savedFilePath;
      }
    });
  }
});
```

### uni.getSavedFileList(OBJECT) @getsavedfilelist
获取本地已保存的文件列表。
Get the list of locally saved files.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|x|√|

> _微信小程序已停止维护[wx.getSavedFileList(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html)接口，建议使用[FileSystemManager](https://uniapp.dcloud.io/api/file/getFileSystemManager.html)对象中的方法。_
> _WeChat Mini Program has stopped maintaining [wx.getSavedFileList(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html) interface, it is recommended to use [FileSystemManager ](https://uniapp.dcloud.io/api/file/getFileSystemManager.html) method in the object. _

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，返回结果见 success 返回参数说明|
| success| Function| No| For callback function for successful interface calling, see the success return parameter description for the return result.|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明：**
**Success return parameter description:**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|errMsg|String|接口调用结果|
| errMsg| String| Interface call result|
|fileList|Array&lt;Object&gt;|文件列表|
| fileList| Array\<Object>| Document list|

**fileList 中的项目说明：**
**Item description in fileList:**

|键|类型|说明|
| Key| Type| Instruction|
|:-|:-|:-|
|filePath|String|文件的本地路径|
| filePath| String| Local path of the file|
|createTime|Number|文件的保存时的时间戳，从 `1970/01/01 08:00:00` 到该时刻的秒数。|
| createTime| Number| Timestamp when the file is saved: the number of seconds from `1970/01/01 08:00:00` to this moment.|
|size|Number|文件大小，以字节为单位。|
| size| Number| File size, in bytes.|

**示例代码：**
**Sample code:**

```javascript
uni.getSavedFileList({
  success: function (res) {
    console.log(res.fileList);
  }
});
```

### uni.getSavedFileInfo(OBJECT) @getsavedfileinfo
获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件。
Get the file information of the local file. This interface can only be used to get files that have been saved locally.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|x|√|x|√|

> _微信小程序已停止维护[wx.getSavedFileInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html)接口，建议使用[FileSystemManager](https://uniapp.dcloud.io/api/file/getFileSystemManager.html)对象中的方法。_
> _WeChat applet has stopped maintaining [wx.getSavedFileInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html) interface, it is recommended to use [FileSystemManager ](https://uniapp.dcloud.io/api/file/getFileSystemManager.html) method in the object. _


**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|filePath|String|是|文件路径|
| filePath| String| Yes| File path|
|success|Function|否|接口调用成功的回调函数，返回结果见 success 返回参数说明|
| success| Function| No| For callback function for successful interface calling, see the success return parameter description for the return result.|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明：**
**Success return parameter description:**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|errMsg|String|接口调用结果|
| errMsg| String| Interface call result|
|size|Number|文件大小，以字节为单位。|
| size| Number| File size, in bytes.|
|createTime|Number|文件保存时的时间戳，从 `1970/01/01 08:00:00` 到该时刻的秒数。|
| createTime| Number| Timestamp when the file is saved: the number of seconds from `1970/01/01 08:00:00` to this moment.|

**示例代码：**
**Sample code:**

```javascript
uni.getSavedFileInfo({
  filePath: 'unifile://somefile', //仅做示例用，非真正的文件路径
  success: function (res) {
    console.log(res.size);
    console.log(res.createTime);
  }
});
```

### uni.removeSavedFile(OBJECT) @removesavedfile
删除本地存储的文件。
Delete locally stored files.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|x|√|

> _微信小程序已停止维护[wx.removeSavedFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html)接口，建议使用[FileSystemManager](https://uniapp.dcloud.io/api/file/getFileSystemManager.html)对象中的方法。_
> _WeChat applet has stopped maintaining the [wx.removeSavedFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html) interface, it is recommended to use [FileSystemManager ](https://uniapp.dcloud.io/api/file/getFileSystemManager.html) method in the object. _

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|filePath|String|是|需要删除的文件路径|
| filePath| String| Yes| Path of the file to be deleted|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**示例代码：**
**Sample code:**

```javascript
uni.getSavedFileList({
  success: function (res) {
    if (res.fileList.length > 0) {
      uni.removeSavedFile({
        filePath: res.fileList[0].filePath,
        complete: function (res) {
          console.log(res);
        }
      });
    }
  }
});
```

### uni.getFileInfo(OBJECT) @getfileinfo
获取文件信息
Get file information

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|x|√|

> _微信小程序已停止维护[wx.getFileInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html)接口，建议使用[FileSystemManager](https://uniapp.dcloud.io/api/file/getFileSystemManager.html)对象中的方法。_
> _WeChat Mini Program has stopped maintaining the [wx.getFileInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html) interface, it is recommended to use [FileSystemManager ](https://uniapp.dcloud.io/api/file/getFileSystemManager.html) method in the object. _

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|默认值|必填|说明|平台差异说明|
| Parameter name| Type| Defaults| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|:-|
|filePath|String||是|本地文件路径||
| filePath| String| | Yes| Local file path| |
|digestAlgorithm|String|md5|否|计算文件摘要的算法，可取值 md5、sha1。|微信小程序、京东小程序、App 2.9.0+|
|digestAlgorithm|String|md5|No|The algorithm for calculating the digest of the file, which can be md5, sha1. |WeChat applet, Jingdong applet, App 2.9.0+|
|success|Function||否|接口调用成功的回调函数||
| success| Function| | No| Callback function for successful interface calling| |
|fail|Function||否|接口调用失败的回调函数||
| fail| Function| | No| Callback function for failed interface calling| |
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**success 返回参数说明：**
**Success return parameter description:**

|参数|类型|说明|平台差异说明|
| Parameter| Type| Instruction| Platform difference description|
|:-|:-|:-|:-|
|errMsg|String|接口调用结果||
| errMsg| String| Interface call result| |
|size|Number|文件大小，以字节为单位。||
| size| Number| File size, in bytes.| |
|digest|String|按照传入的 digestAlgorithm 计算得出的的文件摘要|微信小程序、京东小程序、App 2.9.0+|
|digest|String|The file digest calculated according to the incoming digestAlgorithm|WeChat applet, Jingdong applet, App 2.9.0+|

### uni.openDocument(OBJECT) @opendocument
新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。
Open the document on the new page. Supported formats: doc, xls, ppt, pdf, docx, xlsx, pptx.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|x|√|

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|平台差异说明|
|Parameter Name|Type|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|filePath|String|是|文件路径，可通过 downFile 获得||
|filePath|String| is |file path, available via downFile||
|fileType|String|支付宝小程序必填，其他平台非必填|文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx，支付宝小程序仅支持pdf|微信小程序、支付宝小程序、京东小程序|
|fileType|String|Required for Alipay applet, not required for other platforms|File type, specify the file type to open the file, the valid values are doc, xls, ppt, pdf, docx, xlsx, pptx, Alipay applet only supports pdf|WeChat Mini Programs, Alipay Mini Programs, JD Mini Programs|
|showMenu|Boolean|否|右上角是否有可以转发分享的功能|微信小程序|
|showMenu|Boolean|No|Is there a function that can be forwarded and shared in the upper right corner|WeChat applet|
|success|String|否|接口调用成功的回调函数||
|success|String|No|Callback function for successful interface call||
|fail|String|否|接口调用失败的回调函数|微信小程序、京东小程序|
|fail|String|No|Callback function for interface call failure|WeChat applet, Jingdong applet|
|complete|String|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|String|No|The callback function for the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|

**示例代码：**
**Sample code:**

```javascript
uni.downloadFile({
  url: 'https://example.com/somefile.pdf',
  success: function (res) {
    var filePath = res.tempFilePath;
    uni.openDocument({
      filePath: filePath,
      showMenu: true,
      success: function (res) {
        console.log('打开文档成功');
      }
    });
  }
});
```

**平台差异**
**Platform differences**

|平台|打开方式|
| Platform| Open with|
|:-|:-|
|小程序|在小程序的入口应用内打开|
|Mini Program|Open in the portal application of the Mini Program|
|App iOS|在当前应用内打开|
| App iOS| Open in current app|
|App Android|调用系统相关应用打开，无相关应用则不能打开|
| App Android| Call the related application on the system to open it, and if no such application, it will not be opened.|
|H5|使用浏览器打开，当前浏览器不支持则不能打开|
| H5| Use browser to open it, and if the current browser does not support, it will not be opened.|

**Tips**

- App端，io操作还可以用更强大的plus.io API。[https://www.html5plus.org/doc/zh_cn/io.html](https://www.html5plus.org/doc/zh_cn/io.html)
- On the App side, the io operation can also use the more powerful plus.io API. [https://www.html5plus.org/doc/zh_cn/io.html](https://www.html5plus.org/doc/zh_cn/io.html)
- App端，打开各种格式的文件，如office、pdf等，还可以用更强大的三方插件，详见[插件市场](https://ext.dcloud.net.cn/search?q=pdf)
- On the App side, open files in various formats, such as office and pdf, and you can also use more powerful third-party plug-ins. See [Plug-in market](https://ext.dcloud.net.cn/search?q=pdf) for details.
- 选择文件上传，uni-app有自带的api：[uni.chooseImage](https://uniapp.dcloud.io/api/media/image?id=chooseimage)和[uni.chooseVideo](https://uniapp.dcloud.io/api/media/video?id=choosevideo)。App端如需选择非媒体文件，可在插件市场搜索[文件选择](https://ext.dcloud.net.cn/search?q=文件选择)，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。
- Select file upload, uni-app has its own api: [uni.chooseImage](https://uniapp.dcloud.io/api/media/image?id=chooseimage) and [uni.chooseVideo](https:/ /uniapp.dcloud.io/api/media/video?id=choosevideo). If you need to select non-media files on the App side, you can search for [File Selection](https://ext.dcloud.net.cn/search?q=file selection) in the plugin market, and Native.js can be used on the Android side, no native plug-ins, while the iOS side requires native plug-ins.
