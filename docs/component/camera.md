## camera
页面内嵌的区域相机组件。注意这不是点击后全屏打开的相机。

**平台差异说明**

|App|HarmonyOS Next|Web|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|x|√|√|√|√|√|√|x|√|√|√|x|

* 在 App 和 H5 端，可以使用API方式来调用全屏摄像头，而不是组件内嵌方式，详见：[uni.chooseImage](/api/media/image?id=chooseimage) 和 [uni.chooseVideo](/api/media/video?id=choosevideo)
* 如开发身份证扫描、银行卡识别等ocr识别需求，在微信小程序和百度小程序中使用本camera组件，将图片发送给服务器识别，插件市场有封装好的[模板](https://ext.dcloud.net.cn/search?q=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9B%B8%E6%9C%BA)；在App端使用[原生插件](https://ext.dcloud.net.cn/search?q=ocr)
* 活体检测另见文档[实人认证](/api/plugins/facialRecognitionVerify)，人脸识别另见文档[生物认证](/api/system/authentication)
* app-nvue下支持barcode组件，可实现自定义扫码。[参考](https://uniapp.dcloud.io/component/barcode)

**属性说明**

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|mode|String|normal	|应用模式，有效值为 normal(相机模式), scanCode(扫码模式)，不支持动态修改	||
|resolution|string|medium|分辨率，有效值为low, medium, high，不支持动态修改|微信小程序2.10.0、抖音小程序、飞书小程序|
|device-position|String			|back		|前置或后置摄像头，值为front, back|		|
|flash			|String			|auto		|闪光灯，值为auto, on, off, torch|			|
|frame-size|string|medium|指定期望的相机帧数据尺寸，值为small, medium, large|微信小程序2.7.0、快应用、支付宝小程序、抖音小程序|
|output-dimension	|String		|720P		|相机拍照，录制的分辨率。有效值为 360P、540P、720P、1080P、max。|	支付宝小程序1.23.0	|
|@stop		|EventHandle	|			|摄像头在非正常终止时触发，如退出后台等情况|		|
|@error		|EventHandle	|			|用户不允许使用摄像头时触发|			|
|@initdone|eventhandle||相机初始化完成时触发，e.detail = {maxZoom}|微信小程序2.7.0、抖音小程序1.78.0、飞书小程序、快手小程序|
|@ready		|EventHandle	|			|相机初始化成功时触发。event.detail = {maxZoom}|支付宝小程序1.24.3	|
|@scancode		|EventHandle	|		|在扫码识别成功时触发，仅在 mode="scanCode" 时生效|微信小程序、支付宝小程序、抖音小程序、飞书小程序、快手小程序|



**Tips：**
* camera 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。可使用 cover-view cover-image 覆盖在上面。
* 微信小程序上,原生组件均已支持同层渲染,建议使用 view 替代 [详见](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html)
* 请勿在 scroll-view、swiper、picker-view、movable-view 中使用 camera 组件。
* 同一页面只能插入一个 camera 组件。
* 相关API：[createCameraContext](/api/media/camera-context)


**代码示例**

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
