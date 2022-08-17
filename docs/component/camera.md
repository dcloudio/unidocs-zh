<md-translatedByGoogle />
#### camera
页面内嵌的区域相机组件。注意这不是点击后全屏打开的相机。
The area camera component embedded in the page. Note that this is not the camera that opens in full screen after clicking.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Quick application|360 applet|Kuishou applet|JD applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|√|√|x|√|√|

* 在 App 和 H5 端，可以使用API方式来调用全屏摄像头，而不是组件内嵌方式，详见：[uni.chooseImage](/api/media/image?id=chooseimage) 和 [uni.chooseVideo](/api/media/video?id=choosevideo) * 
* On the App and H5 side, you can use the API method to call the full-screen camera instead of the component inline method, see: [uni.chooseImage](/api/media/image?id=chooseimage) and [uni.chooseVideo]( /api/media/video?id=choosevideo) *
* 如开发身份证扫描、银行卡识别等ocr识别需求，在微信小程序和百度小程序中使用本camera组件，将图片发送给服务器识别，插件市场有封装好的[模板](https://ext.dcloud.net.cn/search?q=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9B%B8%E6%9C%BA)；在App端使用[原生插件](https://ext.dcloud.net.cn/search?q=ocr)
* If you develop OCR identification requirements such as ID card scanning, bank card identification, etc., use this camera component in WeChat applet and Baidu applet, and send the picture to the server for identification. The plug-in market has packaged [templates](https:// ext.dcloud.net.cn/search?q=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9B%B8%E6%9C%BA); use on the App side [native Plugin](https://ext.dcloud.net.cn/search?q=ocr)
* 活体检测、人脸识别另见文档[生物认证](/api/system/authentication)
* For liveness detection and face recognition, see also the document [Biometric Authentication](/api/system/authentication)
* app-nvue下支持barcode组件，可实现自定义扫码。[参考](https://uniapp.dcloud.io/component/barcode)
* The barcode component is supported under app-nvue, which can realize custom code scanning. [Reference](https://uniapp.dcloud.io/component/barcode)

**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异说明|
|property name|type|default value|description|platform difference description|
|:-|:-|:-|:-|:-|
|mode|String|normal	|有效值为 normal, scanCode	|微信小程序、QQ小程序、快应用、京东小程序|
|mode|String|normal |Valid values are normal, scanCode |WeChat applet, QQ applet, Quick App, Jingdong applet|
|resolution|string|medium|分辨率，不支持动态修改|微信小程序2.10.0|
|resolution|string|medium|Resolution, dynamic modification is not supported|WeChat applet 2.10.0|
|device-position|String			|back		|前置或后置摄像头，值为front, back|													|
|device-position|String |back |Front or back camera, the value is front, back| |
|flash			|String			|auto		|闪光灯，值为auto, on, off|													|
|flash |String |auto |Flash, the value is auto, on, off| |
|frame-size|string|medium|指定期望的相机帧数据尺寸|微信小程序2.7.0、快应用|
|frame-size|string|medium|Specify the desired camera frame data size|WeChat Mini Program 2.7.0, Quick App|
|@stop		|EventHandle	|			|摄像头在非正常终止时触发，如退出后台等情况|		快手小程序不支持			|
|@stop |EventHandle | |The camera is triggered when the camera is terminated abnormally, such as exiting the background, etc. | Kuaishou applet does not support |
|@error		|EventHandle	|			|用户不允许使用摄像头时触发|					快手小程序不支持					|
|@error |EventHandle | |Triggered when the user is not allowed to use the camera | Kuaishou applet does not support |
|@initdone|eventhandle||相机初始化完成时触发，e.detail = {maxZoom}|微信小程序2.7.0|
|@initdone|eventhandle||Triggered when camera initialization is complete, e.detail = {maxZoom}|WeChat applet 2.7.0|
|@scancode		|EventHandle	|			|在扫码识别成功时触发，仅在 mode="scanCode" 时生效|微信小程序											|
|@scancode |EventHandle | |Triggered when the scan code recognition is successful, it only takes effect when mode="scanCode" |WeChat applet |

**Tips：**
* camera 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。可使用 cover-view cover-image 覆盖在上面。
* The camera component is a native component created by the client, its level is the highest, and the level cannot be controlled by z-index. Can be overlaid with cover-view cover-image.
* 请勿在 scroll-view、swiper、picker-view、movable-view 中使用 camera 组件。
* Do not use camera component in scroll-view, swiper, picker-view, movable-view.
* 同一页面只能插入一个 camera 组件。
* Only one camera component can be inserted on the same page.
* 相关API：[createCameraContext](/api/media/camera-context)


**代码示例**
**CODE EXAMPLE**

```html
<template>
	<view>
        <camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
        <button type="primary" @click="takePhoto">拍照</button>
        <view>预览</view>
        <image mode="widthFix" :src="src"></image>
    </view>
</template>
```

```javascript
export default {
    data() {
        return {
            src:""
        }
    },
    methods: {
         takePhoto() {
            const ctx = uni.createCameraContext();
            ctx.takePhoto({
                quality: 'high',
                success: (res) => {
                    this.src = res.tempImagePath
                }
            });
        },
        error(e) {
            console.log(e.detail);
        }
    }
}
```
