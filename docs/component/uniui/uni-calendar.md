

:::tip 组件名：uni-calendar
> 代码块： `uCalendar`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-calendar)
:::

日历组件可以查看日期，选择任意范围内的日期，打点操作。常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等。

## 介绍
::: warning 注意事项
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
- 本组件农历转换使用的js是 [@1900-2100区间内的公历、农历互转](https://github.com/jjonline/calendar.js)  
- `date`属性传入的应该是一个 String ，如： 2019-06-27 ，而不是 new Date()
- 通过 `insert` 属性来确定当前的事件是 @change 还是 @confirm 。理应合并为一个事件，但是为了区分模式，现使用两个事件，这里需要注意
- 弹窗模式下无法阻止后面的元素滚动，如有需要阻止，请在弹窗弹出后，手动设置滚动元素为不可滚动
:::
### 基本用法

在 ``template`` 中使用组件

```html
<view>
	<uni-calendar 
	:insert="true"
	:lunar="true" 
	:start-date="'2019-3-2'"
	:end-date="'2019-5-20'"
	@change="change"
	 />
</view>
```

### 通过方法打开日历

需要设置 `insert` 为 `false`

```html
<view>
	<uni-calendar 
	ref="calendar"
	:insert="false"
	@confirm="confirm"
	 />
	 <button @click="open">打开日历</button>
</view>
```

```javascript

export default {
	data() {
		return {};
	},
	methods: {
		open(){
			this.$refs.calendar.open();
		},
		confirm(e) {
			console.log(e);
		}
	}
};

```



## API

### Calendar Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|date|String|-|自定义当前时间，默认为今天|
| lunar|Boolean| false	| 显示农历|
| startDate	|String|-| 日期选择范围-开始日期|
| endDate|String|-| 日期选择范围-结束日期|
| range|Boolean|false| 范围选择|
| insert|Boolean|false| 插入模式,可选值，ture：插入模式；false：弹窗模式；默认为插入模式|
|clearDate|Boolean|true|弹窗模式是否清空上次选择内容|
| selected|Array|-| 打点，期待格式[{date: '2019-06-27', info: '签到', data: { custom: '自定义信息', name: '自定义消息头',xxx:xxx... }}]|
|showMonth	|Boolean|true| 是否显示月份为背景|

### Calendar Events

|事件名|说明|返回值|
|:-:|:-:|:-:|
|open|弹出日历组件，`insert :false` 时生效|-|

## 示例

::: danger 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-calendar) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/calendar/calendar
> Template
```vue
<template>
	<view class="calendar-content" v-if="showCalendar">
		<text class="example-info">日历组件可以查看日期，选择任意范围内的日期，打点操作。常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等。</text>
		<uni-section title="插入模式" type="line"></uni-section>
		<view>
			<!-- 插入模式 -->
			<uni-calendar class="uni-calendar--hook" :selected="info.selected" :showMonth="false" @change="change" @monthSwitch="monthSwitch" />
		</view>
		<uni-section class="hideOnPc" title="弹出模式" type="line"></uni-section>
		<view class="example-body hideOnPc">
			<button class="calendar-button" type="button" @click="open">打开日历</button>
		</view>
		<uni-calendar ref="calendar" class="uni-calendar--hook" :clear-date="true" :date="info.date" :insert="info.insert" :lunar="info.lunar" :startDate="info.startDate"
		 :endDate="info.endDate" :range="info.range" @confirm="confirm" @close="close"/>
	</view>
</template>
```
> Script
```vue
<script>
	/**
	 * 获取任意时间
	 */
	function getDate(date, AddDayCount = 0) {
		if (!date) {
			date = new Date()
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/')
		}
		const dd = new Date(date)

		dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期

		const y = dd.getFullYear()
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
		return {
			fullDate: y + '-' + m + '-' + d,
			year: y,
			month: m,
			date: d,
			day: dd.getDay()
		}
	}
	export default {
		components: {},
		data() {
			return {
				showCalendar: false,
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				}
			}
		},
		onReady() {
			this.$nextTick(() => {
				this.showCalendar = true
			})
			// TODO 模拟请求异步同步数据
			setTimeout(() => {
				this.info.date = getDate(new Date(),-30).fullDate
				this.info.startDate = getDate(new Date(),-60).fullDate
				this.info.endDate =  getDate(new Date(),30).fullDate
				this.info.selected = [{
						date: getDate(new Date(),-3).fullDate,
						info: '打卡'
					},
					{
						date: getDate(new Date(),-2).fullDate,
						info: '签到',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: getDate(new Date(),-1).fullDate,
						info: '已打卡'
					}
				]
			}, 2000)
		},
		methods: {
			open() {
				this.$refs.calendar.open()
			},
			close(){
				console.log('弹窗关闭');
			},
			change(e) {
				console.log('change 返回:', e)
				// 模拟动态打卡
				if (this.info.selected.length > 5) return
				this.info.selected.push({
					date: e.fulldate,
					info: '打卡'
				})
			},
			confirm(e) {
				console.log('confirm 返回:', e)
			},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
			}
		}
	}
</script>
```
> Style
```vue
<style lang="scss">
	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}
	.calendar-button {
		flex: 1;
		font-weight: bold;
		font-size: 32rpx;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/calendar/calendar)