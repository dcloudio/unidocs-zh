## radio-group

单项选择器，内部由多个 ``<radio>`` 组成。通过把多个`radio`包裹在一个`radio-group`下，实现这些`radio`的单选。

<!-- UNIAPPCOMJSON.radio-group.compatibility -->

**属性说明**

|属性名|类型|默认值|说明|
|:-|:-|:-|:-|
|@change|EventHandle||``<radio-group>`` 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value}|

<!-- UNIAPPCOMJSON.radio-group.attribute -->

<!-- UNIAPPCOMJSON.radio-group.reference -->

#### radio

单选项目。

<!-- UNIAPPCOMJSON.radio.compatibility -->

**属性说明**

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|value|String||``<radio>`` 标识。当该 ``<radio>`` 选中时，``<radio-group>`` 的 change 事件会携带 ``<radio>`` 的 value||
|checked|Boolean|false|当前是否选中||
|disabled|Boolean|false|是否禁用||
|color|Color||radio的颜色，同css的color||
|backgroundColor|Color|#ffffff|radio默认的背景颜色|H5(3.99+)、App-Vue(3.99+)|
|borderColor|Color|#d1d1d1|radio默认的边框颜色|H5(3.99+)、App-Vue(3.99+)|
|activeBackgroundColor|Color|#007AFF|radio选中时的背景颜色，优先级大于color属性|H5(3.99+)、App-Vue(3.99+)|
|activeBorderColor|Color||radio选中时的边框颜色|H5(3.99+)、App-Vue(3.99+)|
|iconColor|Color|#ffffff|radio的图标颜色|H5(3.99+)、App-Vue(3.99+)|

<!-- UNIAPPCOMJSON.radio.attribute -->

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/radio/radio)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。

::: preview https://hellouniapp.dcloud.net.cn/pages/component/radio/radio
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
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
- radio的默认颜色，在不同平台不一样。微信小程序是绿色的，抖音小程序为红色，其他平台是蓝色的。更改颜色使用color属性。
- 如需调节radio大小，可通过css的scale方法调节，如缩小到70%`style="transform:scale(0.7)"`
- radio不是checkbox，点击一个已经选中的radio，不会将其取消选中

**扩展**
- uni-ui提供了增强的uni-data-checkbox组件，基于[datacom规范](/component/datacom)，只需传入data数据，即可自动生成一组单选框，使用方式更简洁，并且支持[uni-forms](https://ext.dcloud.net.cn/plugin?id=2773)的表单验证。uni-data-checkbox组件详见[https://ext.dcloud.net.cn/plugin?id=3456](https://ext.dcloud.net.cn/plugin?id=3456)

<!-- UNIAPPCOMJSON.radio-group.reference -->
