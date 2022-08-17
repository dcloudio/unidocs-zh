#### radio-group

单项选择器，内部由多个 ``<radio>`` 组成。通过把多个`radio`包裹在一个`radio-group`下，实现这些`radio`的单选。
Single item selector is internally composed of multiple `<radio>`. By wrapping multiple `radio` under one `radio-group`, the single selection of these `radio` can be realized.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|
| Attribute name| Type| Defaults| Instruction|
|:-|:-|:-|:-|
|@change|EventHandle||``<radio-group>`` 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value}|
| @change| EventHandle| | The change event is triggered when the selected item in `<radio-group>` changes, event.detail = {value: Value of selected radio}|

#### radio

单选项目。
Radio item.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|
| Attribute name| Type| Defaults| Instruction|
|:-|:-|:-|:-|
|value|String||``<radio>`` 标识。当该 ``<radio>`` 选中时，``<radio-group>`` 的 change 事件会携带 ``<radio>`` 的 value|
| value| String| | `<radio>` identification. When the `<radio>` is selected, the change event of `<radio-group>` will carry the value of `<radio>`|
|checked|Boolean|false|当前是否选中|
| checked| Boolean| false| Whether it is currently selected?|
|disabled|Boolean|false|是否禁用|
| disabled| Boolean| false| Disable or not|
|color|Color||radio的颜色，同css的color|
| color| Color| | The color of the radio is the same as that of css|

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/radio/radio)
**Example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/radio/radio)
 
以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.

::: preview https://hellouniapp.dcloud.net.cn/pages/component/radio/radio
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="uni-title">默认样式</view>
			<view>
				<label class="radio"><radio value="r1" checked="true" />选中</label>
				<label class="radio"><radio value="r2" />未选中</label>
			</view>
		</view>
		<view class="uni-title uni-common-mt uni-common-pl">推荐展示样式</view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</radio-group>
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
            items: [{
                    value: 'USA',
                    name: '美国',
                    checked: 'true'
                },
                {
                    value: 'CHN',
                    name: '中国'
                },
                {
                    value: 'BRA',
                    name: '巴西'
                },
                {
                    value: 'JPN',
                    name: '日本'
                },
                {
                    value: 'ENG',
                    name: '英国'
                },
                {
                    value: 'FRA',
                    name: '法国'
                },
            ],
            current: 0
        }
    },
    methods: {
        radioChange: function(evt) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].value === evt.detail.value) {
                    this.current = i;
                    break;
                }
            }
        }
    }
}
</script>
```
:::


**注意**
**Notice**
- radio的默认颜色，在不同平台不一样。微信小程序是绿色的，字节跳动小程序为红色，其他平台是蓝色的。更改颜色使用color属性。
- The default color of radio varies on different platforms. WeChat mini-programs are green, ByteDance mini-programs are red, and other platforms are blue. Change the color using the color property.
- 如需调节radio大小，可通过css的scale方法调节，如缩小到70%`style="transform:scale(0.7)"`
- If you need to adjust the size of the radio, you can adjust it by the scale method of css, such as scaling down it to 70% `style="transform:scale(0.7)"`
- radio不是checkbox，点击一个已经选中的radio，不会将其取消选中
- radio is not checkbox, clicking on a selected radio will not uncheck it

**扩展**
**Extension**
- uni-ui提供了增强的uni-data-checkbox组件，基于[datacom规范](/component/datacom)，只需传入data数据，即可自动生成一组单选框，使用方式更简洁，并且支持[uni-forms](https://ext.dcloud.net.cn/plugin?id=2773)的表单验证。uni-data-checkbox组件详见[https://ext.dcloud.net.cn/plugin?id=3456](https://ext.dcloud.net.cn/plugin?id=3456)
- uni-ui provides an enhanced uni-data-checkbox component. Based on the [datacom specification](/component/datacom), a set of radio buttons can be automatically generated by simply inputting data, which is more concise and supports [uni-forms](https://ext.dcloud.net.cn/plugin?id=2773) form validation. For details of uni-data-checkbox components, please refer to [https://ext.dcloud.net.cn/plugin?id=3456](https://ext.dcloud.net.cn/plugin?id=3456)
