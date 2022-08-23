
::: tip 组件名：uni-dateformat
::: tip component name: uni-dateformat
> 代码块： `uDateformat`
> Code block: `uDateformat`
 
[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-dateformat)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-dateformat)
:::

日期格式化组件。
Date formatting component.

## 介绍
## introduce
### 基本用法
### Basic usage

在 ``template`` 中使用组件
Using components in ``template``

```html
<!-- 一般用法 -->
<!-- General usage -->
<uni-dateformat date="2020/10/20 20:20:20"></uni-dateformat>

<!-- 不显示刚刚/马上/xx分钟前 -->
<!-- don't show just/immediately/xx minutes ago -->
<uni-dateformat date="2020/10/20 20:20:20" :threshold="[0,0]"></uni-dateformat>
```

## API

### Dateformat Props

|属性名		|类型							|默认值					|说明												|
|property name |type |default value |description |
|:-:		|:-:							|:-:					|:-:												|
|date		|Object&#124;String&#124;Number	|Date.now()				|要格式化的日期对象/日期字符串/时间戳				|
|date |Object&#124;String&#124;Number |Date.now() |Date object/datestring/timestamp to format |
|threshold	|Array							|[0, 0]					|转化类型阈值										|
|threshold |Array |[0, 0] |Transformation type threshold |
|format		|String							|'yyyy/MM/dd hh:mm:ss'	|格式字符串											|
|format |String |'yyyy/MM/dd hh:mm:ss' |format string |
|locale		|String							|zh						|格式化使用的语言，目前支持zh（中文）、en（英文）	|
|locale |String |zh |The language used for formatting, currently supports zh (Chinese), en (English) |


#### Threshold Options

格式化组件会对时间进行用户友好转化，threshold就是用来控制转化的时间阈值的。
The formatting component will perform user-friendly conversion of time, and the threshold is used to control the time threshold for conversion.

以`[60000, 3600000]`为例，将传入时间与当前时间差的绝对值记为delta（单位毫秒）
Take `[60000, 3600000]` as an example, record the absolute value of the difference between the incoming time and the current time as delta (unit: milliseconds)

- `delta < 60000`时，时间会被转化为“刚刚|马上”
- When `delta < 60000`, the time will be converted to "just | right now"
- `delta >= 60000 && delta < 3600000`时，时间会被转化为“xx分钟前|xx分钟后”，如果超过1小时会显示成“xx小时前|xx小时后”，以此类推
- When `delta >= 60000 && delta < 3600000`, the time will be converted to "xx minutes ago | xx minutes later", if it exceeds 1 hour, it will be displayed as "xx hours ago | xx hours later", and so on
- `delta >= 3600000`时，会按照format参数传入的格式进行格式化
- When `delta >= 3600000`, it will be formatted according to the format passed in the format parameter

如果不想转化为“马上|刚刚”可以传入`:threshold = "[0,3600000]"`。默认值`[0,0]`既不会转换为“马上|刚刚”也不会转化为“xx分钟前|xx分钟后”
If you don't want to convert it to "right now | just now", you can pass in `:threshold = "[0,3600000]"`. The default value of `[0,0]` does not translate to either "right now|just now" nor "xx minutes ago|xx minutes later"

#### Format Options

format接收字符以及含义如下：
format accepts characters and their meanings are as follows:

|字符	|说明							|
|character |description |
|:-:	|:-:							|
|yyyy	|四位年份						|
|yyyy |Four-digit year |
|yy		|两位年份						|
|yy |Two Years |
|MM		|两位月份（不足两位在前面补0）	|
|MM |Two-digit month (with less than two digits, add 0 in front) |
|M		|月份，不自动补0				|
|M |month, do not automatically fill 0 |
|dd		|两位天（不足两位在前面补0）	|
|dd |Two days (if there are less than two digits, add 0 in front) |
|d		|天，不自动补0					|
|d |days, do not automatically fill 0 |
|hh		|两位小时（不足两位在前面补0）	|
|hh |Two hours (for less than two digits, add 0 in front) |
|h		|小时，不自动补0				|
|h |hour, not automatically filled with 0 |
|mm		|两位分钟（不足两位在前面补0）	|
|mm |Two minutes (for less than two digits, add 0 in front) |
|m		|分钟，不自动补0				|
|m |minutes, do not automatically fill 0 |
|ss		|两位秒（不足两位在前面补0）	|
|ss |Two seconds (for less than two digits, add 0 in front) |
|s		|秒，不自动补0					|
|s |Seconds, do not automatically fill 0 |
|SSS	|三位毫秒（不足三位在前面补0）	|
|SSS |Three milliseconds (if less than three, add 0 in front) |
|S		|毫秒，不自动补0				|
|S | milliseconds, not automatically filled with 0 |




## 示例
## Example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-dateformat) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-dateformat) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/dateformat/dateformat
> Template
``` vue
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">日期格式化组件，通常用于需要展示友好的日期格式的场景。</text>
		</uni-card>
		<uni-section title="基础用法" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 7200000"></uni-dateformat>
				<uni-dateformat date="2020/12/12"></uni-dateformat>
			</view>
		</uni-section>
		<uni-section title="设置阈值" subTitle="阈值用于控制什么时候显示刚刚|马上，什么时候显示xx分钟前|xx分钟后" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 30000" :threshold="[0,3600000]"></uni-dateformat>
				<uni-dateformat :date="now - 30000" :threshold="[0,0]"></uni-dateformat>
			</view>
		</uni-section>
		<uni-section title="使用英文" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 1200000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
				<uni-dateformat :date="now - 30000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
				<uni-dateformat :date="now - 80000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
			</view>
		</uni-section>
	</view>
</template>
``` 
> Script
``` vue
<script>
	export default {
		data() {
			return {
				now: Date.now()
			}
		}
	}
</script>
``` 
> Style
``` vue
<style lang="scss">
	.example-body {
		display: flex;
		flex-direction: column;
		line-height: 1.5em;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/dateformat/dateformat)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/dateformat/dateformat)

