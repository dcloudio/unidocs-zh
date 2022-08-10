#### canvas

画布。
Canvas.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|type|String||指定 canvas 类型，支持 2d (2.9.0) 和 webgl|微信小程序 2.7.0+ 字节小程序1.78.0+|
|canvas-id|String||canvas 组件的唯一标识符||
|disable-scroll|Boolean|false|当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新|字节跳动小程序与飞书小程序不支持|
|hidpi|Boolean|true|是否启用高清处理|H5 (HBuilder X 3.4.0+)、App-vue (HBuilder X 3.4.0+)|
|@touchstart|EventHandle||手指触摸动作开始|字节小程序1.78.0+|
|@touchmove|EventHandle||手指触摸后移动|字节小程序1.78.0+|
|@touchend|EventHandle||手指触摸动作结束|字节小程序1.78.0+|
|@touchcancel|EventHandle||手指触摸动作被打断，如来电提醒，弹窗|字节小程序1.78.0+|
|@longtap|EventHandle||手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动|字节跳动小程序与飞书小程序不支持|
|@error|EventHandle||当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}|字节跳动小程序与飞书小程序不支持|

**注意事项：**
**Notes:**

* canvas 标签默认宽度 300px、高度 225px，动态修改 canvas 大小后需要重新绘制。
* The default width of the canvas tag is 300px and the height is 225px. It needs to be redrawn after dynamically modifying the canvas size.
* h5、app-vue 中单个尺寸过大的 canvas 在 iOS/Safari 无法绘制（具体限制尺寸未公布）。
* The single oversized canvas in h5 and app-vue cannot be drawn in iOS/Safari (the specific size limit has not been announced).
* 同一页面中的 canvas-id 不可重复，如果使用一个已经出现过的 canvas-id，该 canvas 标签对应的画布将被隐藏并不再正常工作。
* The canvas-id in the same page cannot be duplicated. If you use a canvas-id that has already appeared, the canvas corresponding to the canvas label will be hidden and will no longer work normally.
* canvas 在微信小程序、百度小程序、QQ小程序中为原生组件，层级高于前端组件，请勿内嵌在 scroll-view、swiper、picker-view、movable-view 中使用。解决 canvas 层级过高无法覆盖，参考 [native-component](/component/native-component)。其他小程序端的 canvas 仍然为 webview 中的 canvas。
* app-vue 中的 canvas 仍然是 webview 的 canvas。app-nvue下如需使用canvas，需下载插件，详见文档底部章节。
* The canvas in app-vue is still the canvas of webview. To use canvas under app-nvue, you need to download the plugin. See the bottom chapter of the documentation for details.
* app-vue的canvas虽然是webview自带的canvas，但却比nvue和微信小程序的原生canvas性能更高。注意并非原生=更快。canvas动画的流畅，关键不在于渲染引擎的速度，而在于减少从逻辑层向视图层频繁通信造成的折损。
* 小程序、app-nvue，因为通信阻塞，难以绘制非常流畅的canvas动画。h5和app-vue不存在此问题。但注意，app-vue下若想流畅的绘制canvas动画，需要使用[renderjs](https://uniapp.dcloud.io/tutorial/renderjs?id=renderjs)技术，把操作canvas的js逻辑放到视图层运行，避免逻辑层和视图层频繁通信。hello uni-app的canvas示例很典型，在相同手机运行该示例，可以看出在h5端和app端非常流畅，而小程序端由于没有renderjs技术，做不到这么流畅的动画。

**示例：** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/canvas/canvas)
**Example:** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/canvas/canvas)
 
::: preview https://hellouniapp.dcloud.net.cn/pages/component/canvas/canvas
> Template
```vue
<template>
	<view>
		<canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas" id="firstCanvas"></canvas>
		<canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" id="secondCanvas"></canvas>
		<canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" id="secondCanvas" @error="canvasIdErrorCallback"></canvas>
	</view>
</template>
```
> Script
```vue
<script>
export default {
	onReady: function (e) {
		var context = uni.createCanvasContext('firstCanvas')
		context.setStrokeStyle("#00ff00")
		context.setLineWidth(5)
		context.rect(0, 0, 200, 200)
		context.stroke()
		context.setStrokeStyle("#ff0000")
		context.setLineWidth(2)
		context.moveTo(160, 100)
		context.arc(100, 100, 60, 0, 2 * Math.PI, true)
		context.moveTo(140, 100)
		context.arc(100, 100, 40, 0, Math.PI, false)
		context.moveTo(85, 80)
		context.arc(80, 80, 5, 0, 2 * Math.PI, true)
		context.moveTo(125, 80)
		context.arc(120, 80, 5, 0, 2 * Math.PI, true)
		context.stroke()
		context.draw()
	},
	methods: {
		canvasIdErrorCallback: function (e) {
			console.error(e.detail.errMsg)
		}
	}
}
</script>
```
:::
 
相关 api：[uni.createCanvasContext](/api/canvas/createCanvasContext)

**扩展阅读**
**Extended reading**

canvas的常用用途有图表和图片处理，在uni-app插件市场有大量基于canvas的插件，可搜索 [图表](https://ext.dcloud.net.cn/search?q=图表) 、 [头像裁剪](https://ext.dcloud.net.cn/search?q=头像裁剪) 、 [海报](https://ext.dcloud.net.cn/search?q=海报) 、 [二维码](https://ext.dcloud.net.cn/search?q=%E4%BA%8C%E7%BB%B4%E7%A0%81) 。
canvas is commonly used for charts and image processing. There are a large number of plug-ins based on canvas in the uni-app plug-in market. You can search for [charts](https://ext.dcloud.net.cn/search?q=%E5%9B%BE%E8%A1%A8), [avatar cropping](https://ext.dcloud.net.cn/search?q=%E5%A4%B4%E5%83%8F%E8%A3%81%E5%89%AA), [posters](https://ext.dcloud.net.cn/search?q=%E6%B5%B7%E6%8A%A5), [QR code](https://ext.dcloud.net.cn/search?q=%E4%BA%8C%E7%BB%B4%E7%A0%81).

关于图表
About chart
- H5端流行的echart报表因为涉及大量dom操作，无法跨端使用，而wx-chart在跨端和更新方面都不足。如考虑小程序，推荐使用全端可用的[uChart](https://ext.dcloud.net.cn/plugin?id=271)。
- 如只考虑H5端，也可以继续使用echart、f2等常规web图表。
- If we only consider H5 side, we can continue to use conventional web charts such as echart and f2.
- 如不考虑小程序，那么App端和H5，也可以通过renderjs技术来使用echart、f2等web图表，功能性能比uchart更好。[什么是renderjs](https://uniapp.dcloud.io/frame?id=renderjs)、[基于renderjs使用echart的示例](https://ext.dcloud.net.cn/plugin?id=1207)


**nvue页面如何使用canvas**
**How to use canvas in nvue pages**

HBuilderX 2.2.5 开始 nvue 页面支持 Canvas，支持 W3C WebGL API [WebGL 1.0](https://www.khronos.org/registry/webgl/specs/latest/1.0/)

示例工程地址：[NvueCanvasDemo](https://github.com/dcloudio/NvueCanvasDemo)
Example project address: [NvueCanvasDemo](https://github.com/dcloudio/NvueCanvasDemo)

在App端，从性能来讲，由于通讯阻塞的问题，nvue的canvas性能不可能达到使用renderjs的vue页面的canvas。在App端，推荐使用vue的canvas。
On the App side, in terms of performance, due to the blocking problem of communication, the canvas performance of nvue can't reach the canvas of vue page using renderjs. On the App side, the canvas of vue is recommended.
