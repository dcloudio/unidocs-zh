
::: danger 重要通知
::: danger Important notice
组件升级更新 2.0.0 后，支持日期+时间范围选择，组件 ui 将使用日历选择日期，ui 变化较大，同时支持 PC 和 移动端。此版本不向后兼容，不再支持单独的时间选择（type=time）及相关的 hide-second 属性（时间选可使用内置组件 picker）。若仍需使用旧版本，可在插件市场下载*非uni_modules版本*，旧版本将不再维护
After the component is upgraded and updated to 2.0.0, it supports date + time range selection. The component ui will use the calendar to select the date. The ui changes greatly, and supports both PC and mobile terminals. This version is not backward compatible and no longer supports a separate time picker (type=time) and the associated hide-second property (time picker can use the built-in component picker). If you still need to use the old version, you can download the *non-uni_modules version* in the plugin market, the old version will no longer be maintained
:::

::: tip 组件名：uni-datetime-picker
::: tip component name: uni-datetime-picker
> 代码块： `uDatetimePicker`
> Code block: `uDatetimePicker`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker)
:::

该组件的优势是，支持**时间戳**输入和输出（起始时间、终止时间也支持时间戳），可**同时选择**日期和时间。
The advantage of this component is that it supports **timestamp** input and output (start time, end time also supports timestamp), and you can select both date and time at the same time.

若只是需要单独选择日期和时间，不需要时间戳输入和输出，可使用原生的 picker 组件。
If you just need to select the date and time separately, and don't need timestamp input and output, you can use the native picker component.

## 介绍
## introduce
### 基本用法
### Basic usage

```html
<template>
	<view class="page">
		<text class="example-info">可以同时选择日期和时间的选择器</text>
		<uni-section :title="'日期用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker
				type="date"
				:value="single"
				start="2021-3-20"
				end="2021-6-20"
				@change="change"
			/>
		</view>
		<uni-section :title="'时间戳用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker
				returnType="timestamp"
				@change="changeLog($event)"
				start="2021-3-20"
				end="2021-5-20"
			/>
		</view>
		<uni-section
			:title="'日期时间用法：' + datetimesingle"
			type="line"
		></uni-section>
		<view class="example-body">
			<uni-datetime-picker
				type="datetime"
				v-model="datetimesingle"
				@change="changeLog"
			/>
		</view>
		<uni-section :title="'v-model用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" />
		</view>
		<uni-section :title="'插槽用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single"
				>我是一个插槽，点击我</uni-datetime-picker
			>
		</view>
		<uni-section :title="'无边框用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :border="false" />
		</view>
		<uni-section :title="'disabled用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" disabled />
		</view>
		<uni-section
			:title="'日期范围用法：' + '[' + range + ']'"
			type="line"
		></uni-section>
		<view class="example-body">
			<uni-datetime-picker
				v-model="range"
				type="daterange"
				start="2021-3-20"
				end="2021-5-20"
				rangeSeparator="至"
			/>
		</view>
		<uni-section
			:title="'日期时间范围用法：' + '[' + datetimerange + ']' "
			type="line"
		></uni-section>
		<view class="example-body">
			<uni-datetime-picker
				v-model="datetimerange"
				type="datetimerange"
				start="2021-3-20 12:00:00"
				end="2021-6-20 20:00:00"
				rangeSeparator="至"
			/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				single: "2021-04-3",
				datetimesingle: "2021-04-3",
				range: ["2021-03-8", "2021-4-20"],
				datetimerange: ["2021-03-20 20:10:10", "2021-05-10 10:10:10"],
			};
		},

		watch: {
			datetimesingle(newval) {
				console.log("单选:", this.datetimesingle);
			},
			range(newval) {
				console.log("范围选:", this.range);
			},
			datetimerange(newval) {
				console.log("范围选:", this.datetimerange);
			},
		},
		mounted() {
			setTimeout(() => {
				this.datetimesingle = "2021-5-1";
				this.single = "2021-5-1";
			}, 1000);
		},

		methods: {
			change(e) {
				this.single = e;
				console.log("-change事件:", e);
			},
		},
	};
</script>

```

## API

### DatetimePicker Props

|属性名|类型|默认值|值域|说明|
|property name|type|default value|value range|description|
|:-: |:-:|:-:|:-:|:-:|
|type|String|datetime|date/daterange/datetime/datetimerange|选择器类型|
|type|String|datetime|date/daterange/datetime/datetimerange|selector type|
|value|String、Number、Array(范围选择)、Date|-|-|输入框当前值|
|value|String, Number, Array (range selection), Date|-|-|Current value of input box|
|start|String、Number|-|-|最小值，可以使用日期的字符串(String)、时间戳(Number)|
|start|String, Number|-|-|Minimum value, you can use date string (String), timestamp (Number)|
|end|String、Number|-|-|最大值，可以使用日期的字符串(String)、时间戳(Number)|
|end|String, Number|-|-|Maximum value, you can use date string (String), timestamp (Number)|
|return-type|String|string|timestamp 、string、date |返回值格式|
|return-type|String|string|timestamp, string, date |return value format|
|border|Boolean|true|-|是否有边框|
|border|Boolean|true|-|is there a border|
|rangeSeparator|String|'-'|-|选择范围时的分隔符|
|rangeSeparator|String|'-'|-|Separator when selecting a range|
|placeholder|String|-|-|非范围选择时的占位内容 |
|placeholder|String|-|-|The placeholder content for non-range selection |
|start-placeholder|String|-|-|范围选择时开始日期的占位内容|
|start-placeholder|String|-|-|The placeholder content of the start date when the range is selected|
|end-placeholder|String|-|-|范围选择时结束日期的占位内容|
|end-placeholder|String|-|-|The placeholder content of the end date when the range is selected|
|disabled|Boolean|false|-|是否不可选择|
|disabled|Boolean|false|-|is not selectable|
|clear-icon|Boolean|true||是否显示清除按钮|
|clear-icon|Boolean|true||Show clear button|
|hide-second|Boolean|false|-|是否显示秒，只显示时分|
|hide-second|Boolean|false|-|Whether to display seconds, only hours and minutes|

### DatetimePicker Events

|事件名称|说明|返回值|
|Event Name|Description|Return Value|
|:-:|:-:|:-:|
|change|确定日期时间时触发的事件，参数为当前选择的日期对象|单选返回日期字符串，如：'2010-02-3'；范围选返回日期字符串数组，如：['2020-10-1', '2021-4-1']|
|change|The event triggered when the date and time are determined, the parameter is the currently selected date object |The single selection returns the date string, such as: '2010-02-3'; the range selection returns the date string array, such as: ['2020- 10-1', '2021-4-1']|
|maskClick|点击遮罩层触发|-|
|maskClick|Click on the mask layer to trigger|-|

### DatetimePicker Methods

|方法称名|说明|参数|
|method name|description|parameters|
|:-:|:-:|:-:|
|show|打开弹出层|-|
|show|Open popup layer|-|
|close|关闭弹出层|-|
|close|Close the popup layer|-|
|clear|清除上次选中的状态和值|-|
|clear|Clear the last selected state and value|-|

### DatetimePicker Slots

|名称|说明|
|Name|Description|
|:-:|:-:|
|default|会覆盖输入框|
|default| will override the input box|



## 示例
## Example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker), select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/datetime-picker/datetime-picker
> Template
``` html
<template>
	<view class="page container">
		<uni-card is-full>
			<text class="uni-h6">可以同时选择日期和时间的选择器</text>
		</uni-card>
		<uni-section :title="'日期用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick" />
		</view>
		<uni-section :title="'日期时间用法：' + datetimesingle" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" v-model="datetimesingle" @change="changeLog" />
		</view>
		<uni-section :title="'日期范围用法：' + '[' + range + ']'" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="range" type="daterange" @maskClick="maskClick" />
		</view>
		<uni-section :title="'日期时间范围用法：' + '[' + datetimerange + ']' " type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="datetimerange" type="datetimerange" rangeSeparator="至" />
		</view>
		<uni-section :title="'v-model用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" />
		</view>
		<uni-section :title="'时间戳用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker returnType="timestamp" v-model="single" @change="changeLog($event)" />
		</view>
		<uni-section :title="'date 对象用法：' + datetimesingle" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" returnType="date" v-model="datetimesingle" @change="changeLog" />
		</view>
		<uni-section :title="'插槽用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single">我是一个插槽，点击我</uni-datetime-picker>
		</view>
		<uni-section :title="'无边框用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :border="false" />
		</view>
		<uni-section :title="'隐藏清除按钮用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :clearIcon="false" />
		</view>
		<uni-section :title="'disabled用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" disabled />
		</view>
	</view>
</template>
```
> Script
``` html
<script>
	export default {
		data() {
			return {
				single: '',
				datetimesingle: '',
				range: ['2021-02-1', '2021-3-28'],
				datetimerange: [],
				start: Date.now() - 1000000000,
				end: Date.now() + 1000000000
			}
		},

		watch: {
			datetimesingle(newval) {
				console.log('单选:', this.datetimesingle);
			},
			range(newval) {
				console.log('范围选:', this.range);
			},
			datetimerange(newval) {
				console.log('范围选:', this.datetimerange);
			}
		},
		mounted() {
			setTimeout(() => {
				this.datetimesingle = Date.now() - 2*24*3600*1000
				this.single = '2021-2-12'
				this.datetimerange = ["2021-07-08 0:01:10", "2021-08-08 23:59:59"]
			},3000)
		},

		methods:{
			change(e) {
				this.single = e
				console.log('change事件:', this.single = e);
			},
			changeLog(e) {
				console.log('change事件:', e);
			},
			maskClick(e){
				console.log('maskClick事件:', e);
			}
		}
	}
</script>
```
> Style
``` html
<style lang="scss">
	.example-body {
		background-color: #fff;
		padding: 10px;
	}
</style>
```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/datetime-picker/datetime-picker)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/datetime-picker/datetime-picker)