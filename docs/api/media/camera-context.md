### uni.createCameraContext()
创建并返回 camera 组件的上下文 cameraContext 对象。
Creates and returns a context cameraContext object for the camera component.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet|Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|x|√|√|√|

本API为 camera 组件配套的js API，与 camera 组件的平台兼容性相同，可实现非全屏摄像头。App端可通过[plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html)实现全屏摄像头。
This API is the js API supporting the camera component. It has the same platform compatibility as the camera component, and can implement non-full-screen cameras. On the App side, a full-screen camera can be achieved through [plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html).

**cameraContext 对象的方法列表**
**CameraContext object method list**

|方法|参数|说明|平台差异说明|
|Methods|Parameters|Description|Platform Difference Description|
|:-|:-|:-|:-|
|takePhoto|Object|拍照，可指定质量，成功则返回图片路径。||
|takePhoto|Object| Take a photo, you can specify the quality, if successful, it will return the image path. ||
|setZoom|Object|设置缩放级别 **微信小程序 2.10.0+ 支持**|京东小程序不支持|
|setZoom|Object|Set the zoom level **WeChat applet 2.10.0+ supports**|JD applet does not support|
|startRecord|Object|开始录像|京东小程序不支持|
|startRecord|Object|Start recording|JD applet does not support|
|stopRecord|Object|结束录像，成功则返回封面与视频。|京东小程序不支持|
|stopRecord|Object|End the recording, if successful, it will return the cover and video. |JD Mini Program does not support|
|onCameraFrame|Function|获取 Camera 实时帧数据。|仅`微信小程序平台`支持，[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/CameraContext.onCameraFrame.html)|
|onCameraFrame|Function|Get the camera real-time frame data. |Supported only by `WeChat Mini Program Platform`, [Specification Details](https://developers.weixin.qq.com/miniprogram/dev/api/CameraContext.onCameraFrame.html)|

### cameraContext.takePhoto
**takePhoto 的 Object 参数列表：**
**takePhoto's Object parameter list:**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|quality|String|否|成像质量，值为high（高质量）、normal（普通质量）、low（低质量），默认normal|
|quality|String|No|Image quality, the value is high (high quality), normal (normal quality), low (low quality), default normal|
|success|Function|否|接口调用成功的回调函数 ，返回照片文件的临时路径，res = { tempImagePath }|
|success|Function|No|The callback function when the interface is called successfully, returns the temporary path of the photo file, res = { tempImagePath }|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

### cameraContext.setZoom
**setZoom 的 Object 参数列表：**
**List of Object parameters for setZoom:**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|zoom|String|是|缩放级别，范围[1, maxZoom]。zoom 可取小数，精确到小数后一位。maxZoom 可在 @initdone 返回值中获取。|
|zoom|String| Yes | zoom level, range [1, maxZoom]. zoom can take decimals, accurate to one decimal place. maxZoom is available in the @initdone return value. |
|success|Function|否|接口调用成功的回调函数|
|success|Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

### cameraContext.startRecord
**startRecord 的 Object 参数列表：**
**List of Object parameters for startRecord:**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|timeoutCallback|Function|否|接超过30s或页面 onHide 时会结束录像|
|timeoutCallback|Function|No|The recording will end when the call exceeds 30s or the page is onHide|
|success|Function|否|接口调用成功的回调函数|
|success|Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

### cameraContext.stopRecord
**stopRecord 的 Object 参数列表：**
**List of Object parameters for stopRecord:**

|参数|类型|默认值|必填|说明|
|Parameters|Type|Default Value|Required|Description|
|:-|:-|:-|:-|:-|
|compressed|Boolean|false|否|启动视频压缩，压缩效果同 `chooseVideo` ,**微信小程序 2.10.0+ 支持**｜
|compressed|Boolean|false|No|Enable video compression, the compression effect is the same as `chooseVideo` ,**supported by WeChat Mini Program 2.10.0+**｜
|success|Function||否|接口调用成功的回调函数 ，返回封面与视频的临时路径，res = { tempThumbPath, tempVideoPath }。|
|success|Function||No|The interface calls the callback function successfully, and returns the temporary path of the cover and video, res = { tempThumbPath, tempVideoPath }. |
|fail|Function||否|接口调用失败的回调函数|
|fail|Function||No|Callback function for interface call failure|
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function||No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

**注意**
**Notice**

- App下实现OCR等证件识别等需求，可在插件市场获取原生插件，[https://ext.dcloud.net.cn/plugin?id=135](https://ext.dcloud.net.cn/plugin?id=135)
- OCR and other document identification requirements are realized under the App, and native plug-ins can be obtained in the plug-in market, [https://ext.dcloud.net.cn/plugin?id=135](https://ext.dcloud.net.cn /plugin?id=135)
- 微信小程序下实现OCR等证件识别等需求，插件市场也有封装，搜索 [ocr](https://ext.dcloud.net.cn/search?q=ocr) 可见。
- OCR and other document identification requirements are realized under the WeChat applet, and the plug-in market is also packaged. Search [ocr](https://ext.dcloud.net.cn/search?q=ocr) to see.
- 可以通过用户授权API来判断用户是否给应用授予摄像头的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- The user authorization API can be used to determine whether the user has granted camera access to the application [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize )
- 各家小程序平台对API的实现情况可能不一致，比如支付宝小程序调用createCameraContext时需要传参cameraId，使用时请以具体文档为准。
- The API implementations of various mini-program platforms may be inconsistent. For example, when Alipay mini-programs call createCameraContext, you need to pass the cameraId as a parameter. Please refer to the specific documents when using them.
