#### picker-view

嵌入页面的滚动选择器。
A scroll picker embedded in the page.

相对于`picker`组件，`picker-view`拥有更强的灵活性。当需要对自定义选择的弹出方式和UI表现时，往往需要使用`picker-view`。
Compared with the `picker` component, `picker-view` has more flexibility. When you need to customize the pop-up mode and UI performance of the selection, you often need to use `picker-view`.

**属性说明**
**Attribute Description**

|属性名|类型|默认值|平台差异说明|
|Property Name|Type|Default Value|Platform Difference Description|
|:-|:-|:-|:-|
|value|Array＜Number＞|数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。||
| value| Array<Number>|The numbers in the array represent the number of items selected by the picker-view-column in the picker-view (the subscript starts from 0). When the number is greater than the length of the picker-view-column option, select last item. ||
|indicator-style|String|设置选择器中间选中框的样式||
| indicator-style| String|Set the style of the check box in the middle of the selector||
|indicator-class|String|设置选择器中间选中框的类名，注意页面或组件的style中写了scoped时，需要在类名前写/deep/|app-nvue与字节跳动小程序与飞书小程序不支持|
| indicator-class| String|Set the class name of the check box in the middle of the selector. Note that when scoped is written in the style of the page or component, you need to write /deep/| before the class name The MiniApp does not support|
|mask-style|String|设置蒙层的样式||
| mask-style| String|Set the mask style||
|mask-top-style|String|设置蒙层上半部分的样式|仅 app-nvue（3.6.7+） 支持|
| mask-top-style| String|Set the style of the top half of the mask|only supported by app-nvue(3.6.7+)|
|mask-bottom-style|String|设置蒙层下半部分的样式|仅 app-nvue（3.6.7+） 支持|
| mask-bottom-style| String|Set the style of the bottom half of the mask|Only supported by app-nvue (3.6.7+)|
|mask-class|String|设置蒙层的类名|app-nvue与字节跳动小程序与飞书小程序不支持|
| mask-class| String|Set the class name of the mask| App-nvue and ByteDance MiniApp and Feishu MiniApp are not supported|
|immediate-change|Boolean|是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件。|微信小程序 2.21.1|                                                                 
| immediate-change| Boolean|Whether to trigger the change event immediately when the finger is released. If not enabled, the change event will be triggered after the scrolling animation ends. |WeChat MiniApp 2.21.1|
|@change|EventHandle|当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）|&nbsp;|
|@change| EventHandle|When the selection is scrolled, the change event is triggered when the value changes, event.detail = {value: value}; value is an array, indicating which item is currently selected by the picker-view-column in the picker-view ( Subscript starts from 0)|&nbsp;|
|@pickstart|eventhandle|当滚动选择开始时候触发事件|微信小程序2.3.1、快手小程序|
|@pickstart| eventhandle|Event is triggered when the scroll selection starts|WeChat MiniApp 2.3.1, Kuaishou MiniApp|
|@pickend|eventhandle|当滚动选择结束时候触发事件|微信小程序2.3.1、快手小程序|
|@pickend| eventhandle|Trigger an event when the scroll selection ends|WeChat MiniApp 2.3.1, Kuaishou MiniApp|

**注意：**其中只可放置 `<picker-view-column/>` 组件，其他节点不会显示。
**Note:** Only the `<picker-view-column/>` component can be placed in it, other nodes will not be displayed.

#### picker-view-column

`<picker-view />` 的子组件，仅可放置于 `<picker-view />` 中，其子节点的高度会自动设置成与 picker-view 的选中框的高度一致。
The child component of `<picker-view />` can only be placed in `<picker-view />`, and the height of its child nodes will be automatically set to be consistent with the height of the check box of picker-view.

**注意：**nvue页面子节点未继承 picker-view 的选中框的高度，需要自己设置高度并居中。
**Note: **nvue page child nodes do not inherit the height of the check box of picker-view, you need to set the height and center it yourself.

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/picker-view/picker-view)
**Example** [View Demo](https://hellouniapp.dcloud.net.cn/pages/component/picker-view/picker-view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and select the hello uni-app template to directly experience the complete example.

::: preview https://hellouniapp.dcloud.net.cn/pages/component/picker-view/picker-view
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not contain the complete css, please refer to the above to get the external link css, check it in the hello uni-app project -->
<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="uni-title">日期：{{year}}年{{month}}月{{day}}日</view>
        </view>
        <picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
            <picker-view-column>
                <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
            </picker-view-column>
            <picker-view-column>
                <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
            </picker-view-column>
            <picker-view-column>
                <view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
            </picker-view-column>
        </picker-view>
    </view>
</template>
```
> Script
```vue
<script>
    export default {
        data: function () {
            const date = new Date()
            const years = []
            const year = date.getFullYear()
            const months = []
            const month = date.getMonth() + 1
            const days = []
            const day = date.getDate()
            for (let i = 1990; i <= date.getFullYear(); i++) {
                years.push(i)
            }
            for (let i = 1; i <= 12; i++) {
                months.push(i)
            }
            for (let i = 1; i <= 31; i++) {
                days.push(i)
            }
            return {
                title: 'picker-view',
                years,
                year,
                months,
                month,
                days,
                day,
                value: [9999, month - 1, day - 1],
                visible: true,
                indicatorStyle: `height: 50px;`
            }
        },
        methods: {
            bindChange: function (e) {
                const val = e.detail.value
                this.year = this.years[val[0]]
                this.month = this.months[val[1]]
                this.day = this.days[val[2]]
            }
        }
    }
</script>
```
> Style
```vue
<style>
	.picker-view {
		width: 750rpx;
		height: 600rpx;
		margin-top: 20rpx;
	}
	.item {
		height: 50px;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>
```
:::


**Tips**
- 微信小程序端，滚动时在iOS自带振动反馈，可在系统设置 -> 声音与触感 -> 系统触感反馈中关闭
- Wechat MiniApp terminal, iOS comes with vibration feedback when scrolling, which can be turned off in System Settings -> Sound and Haptics -> System Haptic Feedback
- 在2.6.3版本以前，如果需要在PC端使用`picker-view`，需配置[H5模版](https://uniapp.dcloud.io/collocation/manifest?id=h5-template)，并引入[touch-emulator.js](https://github.com/dcloudio/touchemulator)
- Before version 2.6.3, if you need to use `picker-view` on the PC side, you need to configure [H5 template](https://uniapp.dcloud.io/collocation/manifest?id=h5-template) and import [touch-emulator.js](https://github.com/dcloudio/touchemulator)

**扩展**
**extended**
- uni ui提供了增强版`<uni-data-picker>`组件，详见：[https://ext.dcloud.net.cn/plugin?id=3796](https://ext.dcloud.net.cn/plugin?id=3796)
- uni ui provides an enhanced `<uni-data-picker>` component, see: [https://ext.dcloud.net.cn/plugin?id=3796](https://ext.dcloud.net .cn/plugin?id=3796)
