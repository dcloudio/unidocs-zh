
::: tip 组件名：uni-number-box
::: tip component name: uni-number-box
> 代码块： `uNumberBox`
> Code block: `uNumberBox`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-number-box)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-number-box)
:::

带加减按钮的数字输入框。
Numeric input box with plus and minus buttons.


## 介绍
## introduce
### 基本用法
### Basic usage

```html
<uni-number-box></uni-number-box>
<uni-number-box v-model="vModelValue" ></uni-number-box>
<uni-number-box :min="0" :max="9"></uni-number-box>
<uni-number-box @change="bindChange"></uni-number-box>
```

## API

### NumberBox Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|
|value/v-model|Number|0|输入框当前值|
|value/v-model|Number|0|Current value of input box|
|min|Number	|0|最小值|
|min|Number |0|Minimum|
|max|Number	|100|最大值|
|max|Number |100|Maximum|
|step|Number|1|每次点击改变的间隔大小|
|step|Number|1|The size of the interval to change with each click|
|disabled|Boolean|false	|是否为禁用状态|
|disabled|Boolean|false |Disabled state|

### NumberBox Events

|事件名称|说明|返回值	|
|Event Name|Description|Return Value|
|:-:|:-:|:-:|
|change|输入框值改变时触发的事件，参数为输入框当前的 value	|-|
|change|The event triggered when the value of the input box changes, the parameter is the current value of the input box |-|
|focus|输入框聚焦时触发的事件，参数为 event 对象|-|
|focus|The event triggered when the input box is focused, the parameter is the event object|-|
|blur|输入框失焦时触发的事件，参数为 event 对象|-|
|blur|The event triggered when the input box is out of focus, the parameter is the event object|-|




## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-number-box) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-number-box), select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/number-box/number-box
> Template
``` html
<template>
	<view class="page">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">数字输入框组件多用于购物车加减商品等场景</text>
		</uni-card>
		<uni-section title="基本用法" type="line" padding>
			<uni-number-box @change="changeValue" />
		</uni-section>
		<uni-section :title="'使用v-model : '+ vModelValue" subTitle="使用 v-model 显示默认值" type="line" padding>
			<uni-number-box v-model="vModelValue" @blur="blur" @focus="focus" @change="changeValue" />
		</uni-section>
		<uni-section title="设置最小值和最大值" subTitle="使用 min \ max 属性设置最大最小值" type="line" padding>
			<uni-number-box :min="2" :max="9" :value="555" />
		</uni-section>
		<uni-section title="设置步长（步长0.1)" subTitle="使用 step 属性设置步长" type="line" padding>
			<uni-number-box :value="1.1" :step="0.1" />
		</uni-section>
		<uni-section title="自定义背景" type="line" subTitle="使用 background 属性设置自定义背景色" padding>
			<uni-number-box :value="50" background="#2979FF" color="#fff" />
		</uni-section>
		<uni-section title="禁用状态" subTitle="使用 disabled 属性设置组件禁用" type="line" padding>
			<uni-number-box :disabled="true" />
		</uni-section>
		<uni-section :title="'获取输入的值 : '+ numberValue" type="line" padding>
			<uni-number-box :value="numberValue" @change="change" />
		</uni-section>
	</view>
</template>
``` 
> Script
``` html
<script>
	export default {
		components: {},
		data() {
			return {
				numberValue: 0,
				vModelValue: 3
			}
		},
		methods: {
			change(value) {
				this.numberValue = value
			},
			changeValue(value) {
				console.log('返回数值：', value);
			},
			blur(e) {
				console.log('blur:', e);
			},
			focus(e) {
				console.log('focus:', e);
			}

		}
	}
</script>
```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/number-box/number-box)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/number-box/number-box)