

::: tip 组件名：uni-countdown
> 代码块： `uCountDown`
 
[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-countdown)
:::

倒计时组件。


## 介绍
### 基本用法

在 ``template`` 中使用组件

```html
<!-- 一般用法 -->
<uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>

<!-- 不显示天数 -->
<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12"></uni-countdown>

<!-- 修改颜色 -->
<uni-countdown color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" :day="1" :hour="2" :minute="30" :second="0"></uni-countdown>
```



## API

### Countdown Props 

|属性名				|类型	|默认值	|说明				|
|:-:				|:-:	|:-:	|:-:				|
|backgroundColor	|String	|#FFFFFF|背景色				|
|color				|String	|#000000|文字颜色			|
|splitorColor		|String	|#000000|分割符号颜色			|
|day				|Number	|0		|天数				|
|hour				|Number	|0		|小时				|
|minute				|Number	|0		|分钟				|
|second				|Number	|0		|秒					|
|showDay			|Boolean|true	|是否显示天数		|
|showColon			|Boolean|true	|是否以冒号为分隔符	|
|start				|Boolean|true	|是否初始化组件后就开始倒计时|

### Countdown Events

|事件称名	|说明							|返回值	|
|:-:		|:-:							|:-:		|
|@timeup|倒计时时间到触发事件	|-			|



### Countdown Methods

|事件称名	|说明							|返回值	|
|:-:		|:-:							|:-:		|
|update		|动态更新时间后，刷新组件显示		|-			|





## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-countdown) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
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

