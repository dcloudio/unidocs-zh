
::: tip 组件名：uni-combox
> 代码块： `uCombox`

 [点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-combox)
:::

组合框组件，一般用于可以选择也可以输入的表单项。



## 介绍
::: danger 注意
- 因 nvue 框架限制 ，组件暂不支持nvue
:::
### 基本用法

在 ``template`` 中使用组件
```html
<uni-combox label="所在城市" :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
```


## API

### Combox Props

|属性名		|类型			|默认值		|说明								|
|:-:		|:-:			|:-:		|:-:								|
|label		|String			|-			|标签文字							|
|value		|String			|-			|combox的值							|
|labelWidth	|String			|auto		|标签宽度，有单位字符串，如:'100px'	|
|placeholder|String			|-			|输入框占位符						|
|candidates	|Array/String	|[]			|候选字段							|
|emptyTips	|String			|无匹配项	|无匹配项时的提示语					|

### Combox Events

|事件称名	|说明					|返回值												|
|:-:		|:-:					|:-:													|
|@input	|combox输入事件	|返回combox值|

## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-combox) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
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
