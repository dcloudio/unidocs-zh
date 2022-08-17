<md-translatedByGoogle />
### movable-view

可移动的视图容器，在页面中可以拖拽滑动或双指缩放。
Movable view container. Dragging and sliding or scaling with two fingers on the page is allowed.

`movable-view`必须在`movable-area`组件中，并且必须是直接子节点，否则不能移动。
`movable-view` must be in the `movable-area` component and must be a direct child node, otherwise it cannot be moved.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet|Feishu applet|QQ applet|Quick application|360 applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|x|√|√|√|√|√|

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|direction|String|none|movable-view的移动方向，属性值有all、vertical、horizontal、none||
| direction| String| none| The moving direction of movable-view, with the attribute values of all, vertical, horizontal and none| |
|inertia|Boolean|false|movable-view是否带有惯性||
|inertia|Boolean|false|movable-view has inertia||
|out-of-bounds|Boolean|false|超过可移动区域后，movable-view是否还可以移动||
|out-of-bounds|Boolean|false|After the movable area is exceeded, can the movable-view still move||
|x|Number / String||定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画||
| x| Number / String| | Define the offset of x-axis direction. If the value of x is not within the movable range, it will automatically move to it. Changing the value of x will trigger the animation| |
|y|Number / String||定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画||
| y| Number / String| | Define the offset of y-axis direction. If the value of y is not within the movable range, it will automatically move to it. Changing the value of y will trigger the animation| |
|damping|Number|20|阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快|360小程序不支持|
|damping|Number|20|Damping coefficient, which is used to control the animation when x or y changes and the animation of the rebound after crossing the boundary. The larger the value, the faster the movement|360 applet does not support|
|friction|Number|2|摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值|360小程序不支持|
|friction|Number|2|Friction coefficient, used to control the animation of inertial sliding, the larger the value, the greater the friction force, and the faster the sliding stops; it must be greater than 0, otherwise it will be set to the default value|360 applet does not support|
|disabled|Boolean|false|是否禁用||
| disabled| Boolean| false| Disable or not| |
|scale|Boolean|false|是否支持双指缩放，默认缩放手势生效区域是在movable-view内|360小程序不支持|
|scale|Boolean|false|Whether pinch zoom is supported, the default zoom gesture effective area is in movable-view|360 applet does not support|
|scale-min|Number|0.5|定义缩放倍数最小值||
|scale-min|Number|0.5|Define the minimum scaling factor||
|scale-max|Number|10|定义缩放倍数最大值||
|scale-max|Number|10|Define the maximum zoom factor||
|scale-value|Number|1|定义缩放倍数，取值范围为 0.5 - 10||
|scale-value|Number|1| defines the zoom factor, the value range is 0.5 - 10||
|animation|Boolean|true|是否使用动画||
|animation|Boolean|true|whether to use animation||
|@change|EventHandle||拖动过程中触发的事件，event.detail = {x: x, y: y, source: source}，其中source表示产生移动的原因，值可为touch（拖动）、touch-out-of-bounds（超出移动范围）、out-of-bounds（超出移动范围后的回弹）、friction（惯性）和空字符串（setData）||
| @change| EventHandle| | Event triggered during dragging, event.detail = {x: x, y: y, source: source}, wherein the source represents the reason for the movement, with the options of touch (drag), touch-out-of-bounds (out of the movement bound), out-of-bounds (rebound after exceeding the movement bound), friction (Inertia) and empty string (setData)| |
|@scale|EventHandle||缩放过程中触发的事件，event.detail = {x: x, y: y, scale: scale}，||
|@scale|EventHandle||Event triggered during scaling, event.detail = {x: x, y: y, scale: scale}, ||

除了基本事件外，movable-view提供了两个特殊事件
In addition to the basic events, the movable-view also provides two special events

|类型|触发条件|平台差异说明|
|Type|Trigger Condition|Platform Difference Description|
|:-|:-|:-|
|htouchmove|初次手指触摸后移动为横向的移动，如果catch此事件，则意味着touchmove事件也被catch|微信小程序、百度小程序、QQ小程序、快手小程序、快应用|
|htouchmove|After the first finger touch, the movement is a horizontal movement. If the event is caught, it means that the touchmove event is also caught|WeChat applet, Baidu applet, QQ applet, Kuaishou applet, Kuaishou|
|vtouchmove|初次手指触摸后移动为纵向的移动，如果catch此事件，则意味着touchmove事件也被catch|微信小程序、百度小程序、QQ小程序、快手小程序、快应用|
|vtouchmove|After the first finger touch, the movement is a vertical movement. If you catch this event, it means that the touchmove event is also caught|WeChat applet, Baidu applet, QQ applet, Kuaishou applet, Kuaishou|

> movable-view 必须设置width和height属性，不设置默认为10px
> The width and height attributes must be set for movable-view, with 10px as default
> 
> movable-view 默认为绝对定位，top和left属性为0px
> movable-view defaults to absolute positioning, and the top and left attributes are 0px.
> 
> 当movable-view小于movable-area时，movable-view的移动范围是在movable-area内；当movable-view大于movable-area时，movable-view的移动范围必须包含movable-area（x轴方向和y轴方向分开考虑）
> When movable-view is smaller than the movable-area, the moving range of the movable-view is within the movable-area. When it is larger than the movable-area, the moving range of the movable-view must include the movable-area (X-axis direction and Y-axis direction are considered separately)

**Tips**
- movable-view必须在`<movable-area/>`组件中，并且必须是直接子节点，否则不能移动。
- movable-view must be in the `<movable-area/>` component and must be a direct child node, otherwise it cannot be moved.
- 如果遇到x、y、scale属性设置不生效的问题参考：[组件属性设置不生效解决办法](/tutorial/vue-api.html#componentsolutions)
- If you encounter the problem that x, y, scale attribute settings do not take effect, please refer to: [Component attribute settings do not take effect solution](/tutorial/vue-api.html#componentsolutions)
- 除了H5端和app-nvue端，其他平台不支持内嵌video、map等原生组件。更新：微信基础库2.4.4起支持了原生组件在 scroll-view、swiper、movable-view 中的使用
- Except for H5 and app-nvue, other platforms do not support embedded video, map and other native components. Update: Wechat base library 2.4.4 supports the use of native components in scroll-view, swiper, movable-view

**示例**[查看演示](https://hellouniapp.dcloud.net.cn/pages/component/movable-view/movable-view)
**Example**[View demo](https://hellouniapp.dcloud.net.cn/pages/component/movable-view/movable-view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可快速体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to quickly experience the complete example.

::: preview https://hellouniapp.dcloud.net.cn/pages/component/movable-view/movable-view
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
<template>
	<view class="page-body">
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				示例 1
				<text>\nmovable-view 区域小于 movable-area</text>
			</view>
			<movable-area>
				<movable-view :x="x" :y="y" direction="all" @change="onChange">text</movable-view>
			</movable-area>
			<view @tap="tap" class="uni-link uni-center uni-common-mt">
				点击这里移动至 (30px, 30px)
			</view>
			<view class="uni-title uni-common-mt">
				示例 2
				<text>\nmovable-view区域大于movable-area</text>
			</view>
			<movable-area>
				<movable-view class="max" direction="all">text</movable-view>
			</movable-area>
		</view>
	</view>
</template>
```
> Script
```vue
<script>
export default {
    data() {
        return {
            x: 0,
            y: 0,
            old: {
                x: 0,
                y: 0
            }
        }
    },
    methods: {
        tap: function(e) {
            this.x = this.old.x
            this.y = this.old.y
            this.$nextTick(function() {
                this.x = 30
                this.y = 30
            })
        },
        onChange: function(e) {
            this.old.x = e.detail.x
            this.old.y = e.detail.y
        }
    }
}
</script>
```
:::

