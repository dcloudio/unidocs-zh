

::: tip 组件名：uni-countdown
::: tip component name: uni-countdown
> 代码块： `uCountDown`
> Code block: `uCountDown`
 
[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-countdown)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-countdown)
:::

倒计时组件。
Countdown component.


## 介绍
## introduce
### 基本用法
### Basic usage

在 ``template`` 中使用组件
Using components in ``template``

```html
<!-- 一般用法 -->
<!-- General usage -->
<uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>

<!-- 不显示天数 -->
<!-- Do not display days -->
<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12"></uni-countdown>

<!-- 修改颜色 -->
<!-- Modify color -->
<uni-countdown color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" :day="1" :hour="2" :minute="30" :second="0"></uni-countdown>
```



## API

### Countdown Props 

|属性名				|类型	|默认值	|说明				|
|property name |type |default value |description |
|:-:				|:-:	|:-:	|:-:				|
|backgroundColor	|String	|#FFFFFF|背景色				|
|backgroundColor |String |#FFFFFF|BackgroundColor |
|color				|String	|#000000|文字颜色			|
|color |String |#000000|Text Color |
|splitorColor		|String	|#000000|分割符号颜色			|
|splitorColor |String |#000000|Split symbol color |
|day				|Number	|0		|天数				|
|day |Number |0 |Number of days |
|hour				|Number	|0		|小时				|
|hour |Number |0 |hour |
|minute				|Number	|0		|分钟				|
|minute |Number |0 |minute |
|second				|Number	|0		|秒					|
|second |Number |0 |seconds |
|showDay			|Boolean|true	|是否显示天数		|
|showDay |Boolean|true |whether to show the number of days |
|showColon			|Boolean|true	|是否以冒号为分隔符	|
|showColon |Boolean|true |Are colon separators |
|start				|Boolean|true	|是否初始化组件后就开始倒计时|
|start |Boolean|true |Whether to start the countdown after the component is initialized|

### Countdown Events

|事件称名	|说明							|返回值	|
|Event Name |Description |Return Value |
|:-:		|:-:							|:-:		|
|@timeup|倒计时时间到触发事件	|-			|
|@timeup|Countdown time to trigger event |- |



### Countdown Methods

|事件称名	|说明							|返回值	|
|Event Name |Description |Return Value |
|:-:		|:-:							|:-:		|
|update		|动态更新时间后，刷新组件显示		|-			|
|update |After the dynamic update time, refresh the component display |- |





## 示例
## Example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-countdown) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-countdown) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/countdown/countdown
> Template
```vue
<template>
	<view class="container">
		<uni-card is-full>
			<text class="uni-h6">倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景</text>
		</uni-card>
		 <uni-section title="一般用法" type="line" padding>
			<uni-countdown :day="1" :hour="1" :minute="12" :second="40" />
		</uni-section>
		<uni-section title="不显示天数" subTitle="设置 show-day = false 不显示天" type="line" padding>
			<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12" />
		</uni-section>
		<uni-section title="文字分隔符" subTitle="设置 show-colon 属性设置分隔符样式" type="line" padding>
			<uni-countdown :minute="30" :second="0" :show-colon="false" />
		</uni-section>
		<uni-section title="修改颜色" subTitle="设置 color \ background 属性设置组件颜色" type="line" padding>
			<uni-countdown :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF" />
		</uni-section>
		<uni-section title="修改字体大小" subTitle="设置 font-size 属性设置组件大小" type="line" padding>
			<uni-countdown :font-size="30" :day="1" :hour="2" :minute="30" :second="0" />
		</uni-section>
		<uni-section title="修改颜色 + 字体大小" type="line" padding>
			<uni-countdown :font-size="30" :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF" />
		</uni-section>
		<uni-section title="自由控制开始/暂停" subTitle="设置 start 属性控制是否自动开启" type="line" padding>
			<uni-countdown :start="start" :day="1" :hour="1" :minute="12" :second="40" />
		</uni-section>
		<uni-section title="倒计时回调事件" type="line" padding>
			<uni-countdown :show-day="false" :second="timeupSecond" @timeup="timeup" />
		</uni-section>
		<uni-section title="动态赋值" type="line" padding>
			<uni-countdown  :show-day="false" :hour="testHour" :minute="testMinute" :second="testSecond" />
		</uni-section>
	</view>
</template>
```
> Script
```vue
<script>
	export default {
		components: {},
		data() {
			return {
				testHour: 1,
				testMinute: 0,
				testSecond: 0,
				start: false,
				timeupSecond: 10
			}
		},
		mounted() {
			setTimeout(() => {
				this.testHour = 1
				this.testMinute = 1
				this.testSecond = 0
				this.start = true
			}, 3000)
			setTimeout(() => {
				this.start = false
			}, 10000)
		},
		methods: {
			timeup() {
				uni.showToast({
					title: '时间到'
				})
				this.timeupSecond = 29
			}
		}
	}
</script>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/countdown/countdown)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/countdown/countdown)

