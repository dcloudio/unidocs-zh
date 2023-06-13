### uni.createCameraContext()
创建并返回 camera 组件的上下文 cameraContext 对象。
Create and return the context cameraContext object of the camera component.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|x|√|√|√|

本API为 camera 组件配套的js API，与 camera 组件的平台兼容性相同，可实现非全屏摄像头。App端可通过[plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html)实现全屏摄像头。
This API is the js API supporting the camera component, which has the same platform compatibility as the camera component, and can realize a non-full-screen camera. The app can realize full-screen camera through [plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html).

**cameraContext 对象的方法列表**
**cameraContext object method list**

|方法|参数|说明|平台差异说明|
|Method|Parameter|Description|Platform Difference Description|
|:-|:-|:-|:-|
|takePhoto|Object|拍照，可指定质量，成功则返回图片路径。||
| takePhoto| Object| Take a photo, you can specify the quality, and return the path of the image if it succeeds. ||
|setZoom|Object|设置缩放级别。|百度、QQ、快手、京东小程序不支持|
| setZoom| Object| Sets the zoom level. |Baidu, QQ, Kuaishou, Jingdong MiniApp do not support|
|startRecord|Object|开始录像|京东小程序不支持|
| startRecord| Object|Start recording|Jingdong MiniApp not support|
|stopRecord|Object|结束录像，成功则返回封面与视频。|京东小程序不支持|
|onCameraFrame|Function|获取 Camera 实时帧数据。|微信小程序[详情](https://developers.weixin.qq.com/miniprogram/dev/api/CameraContext.onCameraFrame.html)、支付宝小程序[详情](https://opendocs.alipay.com/mini/03qitt)、抖音小程序支持[详情](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/media/camera/camera-context/camera-context-on-camera-frame)|

### cameraContext.takePhoto
**takePhoto 的 Object 参数列表：**
**takePhoto Object parameter list:**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|quality|String|否|成像质量，值为high（高质量）、normal（普通质量）、low（低质量），默认normal|
| quality| String|No|Imaging quality, the value is high (high quality), normal (normal quality), low (low quality), the default is normal|
|selfieMirror|Boolean|否|是否开启镜像，默认true。**仅微信小程序 2.22.0+ 支持**|
| selfieMirror| Boolean|No|Whether to enable mirroring, the default is true. **Only supported by WeChat MiniApp 2.22.0+**|
|success|Function|否|接口调用成功的回调函数 ，返回照片文件的临时路径，res = { tempImagePath }|
|success| Function|No|The interface calls the callback function successfully, returns the temporary path of the photo file, res = { tempImagePath }|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

### cameraContext.setZoom
**setZoom 的 Object 参数列表：**
**setZoom Object parameter list:**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|zoom|String|是|缩放级别，范围[1, maxZoom]。zoom 可取小数，精确到小数后一位。maxZoom 可在 @initdone 返回值中获取。|
|zoom| String|yes|zoom level, range [1, maxZoom]. zoom can take a decimal, accurate to one decimal place. maxZoom is available in @initdone return value. |
|success|Function|否|接口调用成功的回调函数|
| success| Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

### cameraContext.startRecord
**startRecord 的 Object 参数列表：**
**StartRecord's Object parameter list:**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|timeoutCallback|Function|否|接超过30s或页面 onHide 时会结束录像|
| timeoutCallback| Function|No|The recording will end when the connection exceeds 30s or the page is onHide|
|timeout|Number|否|录制时长上限，单位为秒，默认30s。微信小程序最长不能超过 5 分钟，支付宝小程序最大录制时长 10 分钟。**仅微信2.22.0+ 、支付宝1.11.0+小程序支持**|
| timeout| Number|No| The upper limit of the recording time, in seconds, the default is 30s. The maximum recording time for WeChat MiniApp cannot exceed 5 minutes, and the maximum recording time for Alipay MiniApp is 10 minutes. **Only supported by WeChat 2.22.0+ and Alipay 1.11.0+ MiniApp**|
|selfieMirror|Boolean|否|是否开启镜像，默认true。**仅微信小程序 2.22.0+ 支持**|
| selfieMirror| Boolean|No|Whether to enable mirroring, the default is true. **Only supported by WeChat MiniApp 2.22.0+**|
|success|Function|否|接口调用成功的回调函数|
| success| Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

### cameraContext.stopRecord
**stopRecord 的 Object 参数列表：**
**stopRecord Object parameter list:**

|参数|类型|默认值|必填|说明|
|Parameter|Type|Default|Required|Description|
|:-|:-|:-|:-|:-|
|compressed|Boolean|false|否|启动视频压缩，压缩效果同 `chooseVideo` 。微信2.10.0+ 、抖音2.41.0（Android暂不支持）、快手小程序支持|
|success|Function||否|接口调用成功的回调函数 ，返回封面与视频的临时路径，res = { tempThumbPath, tempVideoPath }。|
|success| Function||No|Interface calls the callback function successfully, returns the temporary path of the cover and video, res = { tempThumbPath, tempVideoPath }. |
|fail|Function||否|接口调用失败的回调函数|
| fail| Function||No|Callback function for interface call failure|
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function||No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**注意**
**Notice**

- App下实现OCR等证件识别等需求，可在插件市场获取原生插件，[https://ext.dcloud.net.cn/plugin?id=135](https://ext.dcloud.net.cn/plugin?id=135)
- To realize OCR and other document identification requirements under the App, you can obtain native plug-ins in the plug-in market, [https://ext.dcloud.net.cn/plugin?id=135](https://ext.dcloud.net.cn /plugin?id=135)
- 微信小程序下实现OCR等证件识别等需求，插件市场也有封装，搜索 [ocr](https://ext.dcloud.net.cn/search?q=ocr) 可见。
- To realize OCR and other document identification requirements under the WeChat MiniApp, the plug-in market also has packaging, search [ocr](https://ext.dcloud.net.cn/search?q=ocr) to see.
- 可以通过用户授权API来判断用户是否给应用授予摄像头的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- You can use the user authorization API to determine whether the user has granted the camera access to the application [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize )
- 各家小程序平台对API的实现情况可能不一致，比如支付宝小程序调用createCameraContext时需要传参cameraId，使用时请以具体文档为准。
- Different MiniApp platforms may have different API implementations. For example, Alipay MiniApp needs to pass the parameter cameraId when calling createCameraContext. Please refer to the specific document when using it.
- 支付宝小程序开发者工具（IDE）暂不支持调试此 API，请使用真机调试功能在真机进行调试。
- The Alipay MiniApp Developer Tool (IDE) does not support debugging this API at the moment, please use the real device debugging function to debug on a real device.
