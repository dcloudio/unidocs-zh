## slider

滑动选择器。

<!-- UNIAPPCOMJSON.scroll-view.compatibility -->

**属性说明**

|属性名|类型|默认值|说明|
|:-|:-|:-|:-|
|min|Number|0|最小值|
|max|Number|100|最大值|
|step|Number|1|步长，取值必须大于 0，并且可被(max - min)整除|
|disabled|Boolean|false|是否禁用|
|value|Number|0|当前取值|
|activeColor|Color|各个平台不同，详见下|滑块左侧已选择部分的线条颜色|
|backgroundColor|Color|#e9e9e9|滑块右侧背景条的颜色|
|block-size|Number|28|滑块的大小，取值范围为 12 - 28
|block-color|Color|#ffffff|滑块的颜色|
|show-value|Boolean|false|是否显示当前 value|
|@change|EventHandle||完成一次拖动后触发的事件，event.detail = {value: value}|
|@changing|EventHandle||拖动过程中触发的事件，event.detail = {value: value}|


<!-- UNIAPPCOMJSON.scroll-view.attribute -->

<!-- |color|Color|#e9e9e9|背景条的颜色（请使用 backgroundColor）|
|selected-color|Color|#1aad19|已选择的颜色（请使用 activeColor）| -->
**Tips**

- activeColor默认值在不同平台不一样，微信是绿色(#1aad19)，头条是红色，其他平台是 #007aff（蓝色）
- 如需要区间滑块，即一根横条上使用2个滑块选择一段范围，可见[插件市场](https://ext.dcloud.net.cn/search?q=%E5%8C%BA%E9%97%B4%E6%BB%91%E5%9D%97)

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/slider/slider)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。

::: preview https://hellouniapp.dcloud.net.cn/pages/component/slider/slider
> Template
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">设置step</view>
			<view>
				<slider value="60" @change="sliderChange" step="5" />
			</view>

			<view class="uni-title">显示当前value</view>
			<view>
				<slider value="50" @change="sliderChange" show-value />
			</view>

			<view class="uni-title">设置最小/最大值</view>
			<view>
				<slider value="100" @change="sliderChange" min="50" max="200" show-value />
			</view>

			<view class="uni-title">不同颜色和大小的滑块</view>
			<view>
				<slider value="50" @change="sliderChange" activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9" block-size="20" />
			</view>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        sliderChange(e) {
            console.log('value 发生变化：' + e.detail.value)
        }
    }
}
</script>
```
:::


**Tips**
- 2.6.3以前，在PC端使用`slider`，需配置[H5模版](https://uniapp.dcloud.io/collocation/manifest?id=h5-template)，并引入[touch-emulator.js](https://github.com/dcloudio/touchemulator)

<!-- UNIAPPCOMJSON.scroll-view.reference -->
