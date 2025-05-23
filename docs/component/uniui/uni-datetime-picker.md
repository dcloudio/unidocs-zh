
::: danger 重要通知
组件升级更新 2.0.0 后，支持日期+时间范围选择，组件 ui 将使用日历选择日期，ui 变化较大，同时支持 PC 和 移动端。此版本不向后兼容，不再支持单独的时间选择（type=time）及相关的 hide-second 属性（时间选可使用内置组件 picker）。若仍需使用旧版本，可在插件市场下载*非uni_modules版本*，旧版本将不再维护
:::

::: tip 组件名：uni-datetime-picker
> 代码块： `uDatetimePicker`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker)
:::

该组件的优势是，支持**时间戳**输入和输出（起始时间、终止时间也支持时间戳），可**同时选择**日期和时间。

若只是需要单独选择日期和时间，不需要时间戳输入和输出，可使用原生的 picker 组件。

## 介绍
### 基本用法

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
|:-: |:-:|:-:|:-:|:-:|
|type|String|datetime|date/daterange/datetime/datetimerange|选择器类型|
|value|String、Number、Array(范围选择)、Date|-|-|输入框当前值|
|start|String、Number|-|-|最小值，可以使用日期的字符串(String)、时间戳(Number)|
|end|String、Number|-|-|最大值，可以使用日期的字符串(String)、时间戳(Number)|
|return-type|String|string|timestamp 、string、date |返回值格式|
|border|Boolean|true|-|是否有边框|
|rangeSeparator|String|'-'|-|选择范围时的分隔符|
|placeholder|String|-|-|非范围选择时的占位内容 |
|start-placeholder|String|-|-|范围选择时开始日期的占位内容|
|end-placeholder|String|-|-|范围选择时结束日期的占位内容|
|disabled|Boolean|false|-|是否不可选择|
|clear-icon|Boolean|true||是否显示清除按钮|
|hide-second|Boolean|false|-|是否显示秒，只显示时分|

### DatetimePicker Events

|事件名称|说明|返回值|
|:-:|:-:|:-:|
|change|确定日期时间时触发的事件，参数为当前选择的日期对象|单选返回日期字符串，如：'2010-02-3'；范围选返回日期字符串数组，如：['2020-10-1', '2021-4-1']|
|maskClick|点击遮罩层触发|-|
|show|弹窗弹出时触发|-|

### DatetimePicker Methods

|方法称名|说明|参数|
|:-:|:-:|:-:|
|show|打开弹出层|-|
|close|关闭弹出层|-|
|clear|清除上次选中的状态和值|-|

### DatetimePicker Slots

|名称|说明|
|:-:|:-:|
|default|会覆盖输入框|



## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
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