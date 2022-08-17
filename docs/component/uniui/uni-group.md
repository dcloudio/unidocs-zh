::: tip 组件名：uni-group
::: tip component name: uni-group
> 代码块： `uGroup`
> Code block: `uGroup`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-group)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-group)
:::

分组组件可用于将组件分组，添加间隔，以产生明显的区块。
Group Components can be used to group components, adding spacing, to produce distinct blocks.

## 介绍
## introduce
### 基本用法
### Basic usage


```html
<uni-group title="分组1" top="20">
    <view>分组1 的内容</view>
    <view>分组1 的内容</view>
</uni-group>

<uni-group title="分组2">
    <view>分组2 的内容</view>
    <view>分组2 的内容</view>
</uni-group>
```
## API
### Group Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|
|title|String|-|主标题|
|title|String|-|Main title|
|top|Number|-|分组间隔|
|top|Number|-|Group Interval|
|mode|String|''|模式 ，card 为卡片模式|
|mode|String|''|Mode , card is the card mode|


## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-group) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-group) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/group/group
> Template
``` html
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">分组组件可用于将组件分组，添加间隔，以产生明显的区块。</text>
		</uni-card>
		<uni-section title="基础分组" type="line">
			<uni-group>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
			<uni-group title="基本模式" margin-top="20">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
		</uni-section>
		<uni-section title="卡片分组" type="line">
			<uni-group mode="card">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>

			<uni-group title="card 模式" mode="card">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
		</uni-section>

	</view>
</template>
``` 
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/group/group)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/group/group)