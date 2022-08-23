#### switch

开关选择器。
Switch selector.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|:-|
|checked|Boolean|false|是否选中||
| checked| Boolean| false| Selected or not| |
|disabled|Boolean|false|是否禁用|字节跳动小程序与飞书小程序不支持|
|disabled|Boolean|false|Whether to disable|ByteDance applet and Feishu applet are not supported|
|type|String|switch|样式，有效值：switch, checkbox||
| type| String| switch| Style, valid values: switch, checkbox| |
|color|Color||switch 的颜色，同 css 的 color|&nbsp;|
| color| Color| | The color of the switch is the same as that of css|  |
|@change|EventHandle||checked 改变时触发 change 事件，event.detail={ value:checked}||
| @change| EventHandle| | change event is triggered at checked changing, event.detail={ value:checked}| |

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/switch/switch)
**Example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/switch/switch)
 
::: preview https://hellouniapp.dcloud.net.cn/pages/component/switch/switch
> Template
```vue
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">默认样式</view>
			<view>
				<switch checked @change="switch1Change" />
				<switch @change="switch2Change" />
			</view>
			<view class="uni-title">不同颜色和尺寸的switch</view>
			<view>
				<switch checked color="#FFCC33" style="transform:scale(0.7)"/>
				<switch color="#FFCC33" style="transform:scale(0.7)"/>
			</view>
			<view class="uni-title">推荐展示样式</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">开启中</view>
				<switch checked />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">关闭</view>
				<switch />
			</view>
		</view>
	</view>
</template>
```
> Script
```vue
<script>
export default {
    data() {
        return {}
    },
    methods: {
        switch1Change: function (e) {
            console.log('switch1 发生 change 事件，携带值为', e.detail.value)
        },
        switch2Change: function (e) {
            console.log('switch2 发生 change 事件，携带值为', e.detail.value)
        }
    }
}
</script>
```
:::


示例代码说明：以上示例代码从hello uni-app示例中复制，涉及的css样式在hello uni-app的app.vue和uni.css中
Code description: The above code is copied from the example of hello uni-app, and the css styles involved can be found in app.vue and uni.css of hello uni-app

预览H5效果：使用浏览器的手机模式访问[https://hellouniapp.dcloud.net.cn/pages/component/switch/switch](https://hellouniapp.dcloud.net.cn/pages/component/switch/switch)
Preview the effect of H5: Visit [https://hellouniapp.dcloud.net.cn/pages/component/switch/switch](https://hellouniapp.dcloud.net.cn/pages/component/switch/switch) by using the mobile phone mode of the browser

**注意**
**Notice**
- switch的默认颜色，在不同平台不一样。微信小程序是绿色的，字节跳动小程序为红色，其他平台是蓝色的。更改颜色使用color属性。
- The default color of switch is different on different platforms. WeChat mini-programs are green, ByteDance mini-programs are red, and other platforms are blue. Change the color using the color property.
- 如需调节switch大小，可通过css的scale方法调节，如缩小到70%`style="transform:scale(0.7)"`
- If you need to adjust the switch size, you can adjust it by the scale method of css, such as scaling down it to 70% `style="transform:scale(0.7)"`
