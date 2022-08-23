
::: tip 组件名：uni-combox
::: tip component name: uni-combox
> 代码块： `uCombox`
> Code block: `uCombox`

 [点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-combox)
 [Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-combox)
:::

组合框组件，一般用于可以选择也可以输入的表单项。
The combo box component is generally used for form items that can be selected and entered.



## 介绍
## introduce
::: danger 注意
::: danger attention
- 因 nvue 框架限制 ，组件暂不支持nvue
- Due to the limitation of the nvue framework, the component does not support nvue for the time being
:::
### 基本用法
### Basic usage

在 ``template`` 中使用组件
Using components in ``template``
```html
<uni-combox label="所在城市" :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
```


## API

### Combox Props

|属性名		|类型			|默认值		|说明								|
|property name |type |default value |description |
|:-:		|:-:			|:-:		|:-:								|
|label		|String			|-			|标签文字							|
|label |String |- |label text |
|value		|String			|-			|combox的值							|
|value |String |- |value of combox |
|labelWidth	|String			|auto		|标签宽度，有单位字符串，如:'100px'	|
|labelWidth |String |auto |Label width, there is a unit string, such as: '100px' |
|placeholder|String			|-			|输入框占位符						|
|placeholder|String |- |input box placeholder |
|candidates	|Array/String	|[]			|候选字段							|
|candidates |Array/String |[] |Candidates |
|emptyTips	|String			|无匹配项	|无匹配项时的提示语					|
|emptyTips |String |No match |Tips when no match |

### Combox Events

|事件称名	|说明					|返回值												|
|Event Name |Description |Return Value |
|:-:		|:-:					|:-:													|
|@input	|combox输入事件	|返回combox值|
|@input |combox input event |return combox value|

## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-combox) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-combox) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/combox/combox
> Template
```vue
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">组合框一般用于可以选择也可以输入的表单项。</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<view class="example-body">
				<uni-combox :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
				<view class="result-box">
					<text>所选城市为：{{city}}</text>
				</view>
			</view>
		</uni-section>

		<uni-section title="无边框" subTitle="使用 border = false 取消边框" type="line">
			<view class="example-body">
				<uni-combox :border="false" :candidates="candidates" placeholder="请选择所在城市"></uni-combox>
			</view>
		</uni-section>

		<uni-section title="设置无匹配项时的提示语" subTitle="使用 emptyTips 属性设置无匹配项时的提示语" type="line">
			<view class="example-body">
				<uni-combox emptyTips="这里啥都没有" placeholder="请选择所在城市"></uni-combox>
			</view>
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
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				city: ''
			}
		}
	}
</script>
```
> Style
```vue
<style lang="scss">
	.example-body {
		padding: 12px;
		background-color: #FFFFFF;
	}

	.result-box {
		text-align: center;
		padding: 20px 0px;
		font-size: 16px;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/combox/combox)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/combox/combox)
