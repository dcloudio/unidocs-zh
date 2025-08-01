## uni.saveFile(OBJECT) @savefile
保存文件到本地。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|x|√|x|

<!-- UNIAPPAPIJSON.saveFile.compatibility -->

**注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用**

> _微信小程序已停止维护[wx.saveFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html)接口，建议使用[FileSystemManager](https://uniapp.dcloud.io/api/file/getFileSystemManager.html)对象中的方法。_

**OBJECT 参数说明：**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|tempFilePath|String|是|需要保存的文件的临时路径|
|success|Function|否|返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数|说明|
|:-|:-|
|savedFilePath|文件的保存路径|

**示例代码：**

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

## uni.getSavedFileList(OBJECT) @getsavedfilelist
获取本地已保存的文件列表。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|x|√|x|

<!-- UNIAPPAPIJSON.getSavedFileList.compatibility -->

> _微信小程序已停止维护[wx.getSavedFileList(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html)接口，建议使用[FileSystemManager](https://uniapp.dcloud.io/api/file/getFileSystemManager.html)对象中的方法。_

**OBJECT 参数说明：**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，返回结果见 success 返回参数说明|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数|类型|说明|
|:-|:-|:-|
|errMsg|String|接口调用结果|
|fileList|Array&lt;Object&gt;|文件列表|

**fileList 中的项目说明：**

|键|类型|说明|
|:-|:-|:-|
|filePath|String|文件的本地路径|
|createTime|Number|文件的保存时的时间戳，从 `1970/01/01 08:00:00` 到该时刻的秒数。|
|size|Number|文件大小，以字节为单位。|

**示例代码：**

```javascript
uni.getSavedFileList({
  success: function (res) {
    console.log(res.fileList);
  }
});
```

## uni.getSavedFileInfo(OBJECT) @getsavedfileinfo
获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|x|√|x|√|x|

<!-- UNIAPPAPIJSON.getSavedFileInfo.compatibility -->

> _微信小程序已停止维护[wx.getSavedFileInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html)接口，建议使用[FileSystemManager](https://uniapp.dcloud.io/api/file/getFileSystemManager.html)对象中的方法。_


**OBJECT 参数说明：**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|filePath|String|是|文件路径|
|success|Function|否|接口调用成功的回调函数，返回结果见 success 返回参数说明|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数|类型|说明|
|:-|:-|:-|
|errMsg|String|接口调用结果|
|size|Number|文件大小，以字节为单位。|
|createTime|Number|文件保存时的时间戳，从 `1970/01/01 08:00:00` 到该时刻的秒数。|

**示例代码：**

```javascript
uni.getSavedFileInfo({
  filePath: 'unifile://somefile', //仅做示例用，非真正的文件路径
  success: function (res) {
    console.log(res.size);
    console.log(res.createTime);
  }
});
```

## uni.removeSavedFile(OBJECT) @removesavedfile
删除本地存储的文件。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|x|√|x|

<!-- UNIAPPAPIJSON.removeSavedFile.compatibility -->

> _微信小程序已停止维护[wx.removeSavedFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html)接口，建议使用[FileSystemManager](https://uniapp.dcloud.io/api/file/getFileSystemManager.html)对象中的方法。_

**OBJECT 参数说明：**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|filePath|String|是|需要删除的文件路径|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例代码：**

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

## uni.getFileInfo(OBJECT) @getfileinfo
获取文件信息

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|x|√|x|

<!-- UNIAPPAPIJSON.getFileInfo.compatibility -->

> _微信小程序已停止维护[wx.getFileInfo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html)接口，建议使用[FileSystemManager](https://uniapp.dcloud.io/api/file/getFileSystemManager.html)对象中的方法。_

**OBJECT 参数说明：**

|参数名|类型|默认值|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|:-|
|filePath|String||是|本地文件路径||
|digestAlgorithm|String|md5|否|计算文件摘要的算法，可取值 md5、sha1。|微信小程序、京东小程序、抖音小程序、App 2.9.0+|
|success|Function||否|接口调用成功的回调函数||
|fail|Function||否|接口调用失败的回调函数||
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

**success 返回参数说明：**

|参数|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|errMsg|String|接口调用结果||
|size|Number|文件大小，以字节为单位。||
|digest|String|按照传入的 digestAlgorithm 计算得出的的文件摘要|微信小程序、京东小程序、抖音小程序、App 2.9.0+|

## uni.openDocument(OBJECT) @opendocument
新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|√|√|

<!-- UNIAPPAPIJSON.openDocument.compatibility -->

**OBJECT 参数说明：**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|filePath|String|是|文件路径（本地路径），可通过 downloadFile 获得||
|fileType|String|支付宝小程序必填，其他平台非必填|文件类型，指定文件类型打开文件|HarmonyOS、小程序|
@|合法值|说明|
@|:-|:-|
@|doc|doc 格式|
@|docx|docx 格式|
@|xls|xls 格式|
@|xlsx|xlsx 格式|
@|ppt|ppt 格式|
@|pptx|pptx 格式|
@|pdf|pdf 格式|
|showMenu|Boolean|否|右上角是否有可以转发分享的功能|微信小程序、支付宝小程序、快手小程序|
|success|String|否|接口调用成功的回调函数||
|fail|String|否|接口调用失败的回调函数||
|complete|String|否|接口调用结束的回调函数（调用成功、失败都会执行）||

**示例代码：**

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

|平台|打开方式|
|:-|:-|
|小程序|在小程序的入口应用内打开|
|App iOS|在当前应用内打开|
|App Android|调用系统相关应用打开，无相关应用则不能打开|
|H5|使用浏览器打开，当前浏览器不支持则不能打开|

**Tips**

- App端，io操作还可以用更强大的plus.io API。[https://www.html5plus.org/doc/zh_cn/io.html](https://www.html5plus.org/doc/zh_cn/io.html)
- App端，打开各种格式的文件，如office、pdf等，还可以用更强大的三方插件，详见[插件市场](https://ext.dcloud.net.cn/search?q=pdf)
- 选择文件上传，uni-app有自带的api：[uni.chooseImage](https://uniapp.dcloud.io/api/media/image?id=chooseimage)和[uni.chooseVideo](https://uniapp.dcloud.io/api/media/video?id=choosevideo)。App端如需选择非媒体文件，可在插件市场搜索[文件选择](https://ext.dcloud.net.cn/search?q=文件选择)，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。
