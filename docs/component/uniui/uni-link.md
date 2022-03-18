::: tip 组件名：uni-link
> 代码块： `uLink`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-link)
:::

uni-link是一个外部网页超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。


## 介绍
### 基本用法

```html
<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
```

## API

### Link Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|href|String|-|链接地址|
|text|String|-|显示文字|
|download|String |-|H5平台下载文件名|
|showUnderLine|Boolean|true|是否显示下划线|
|copyTips|String|已自动复制网址，请在手机浏览器里粘贴该网址|在小程序端复制链接时的提示语|
|color|String|#999999|链接文字颜色|
|fontSize|String|14|链接文字大小，单位px|


### Link Slots

|名称|说明|					
|:-:|:-:|						
|default|自定义内容，会覆盖原有的内容显示（仅 vue 支持）|



## 示例
::: danger 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-link) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/link/link
> Template
``` html
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。</text>
		</uni-card>
		<uni-section title="基本示例" subTitle="打开外部连接" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
		</uni-section>
		<uni-section title="自定义颜色" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" color="#007BFF"></uni-link>
		</uni-section>
		<uni-section title="自定义下划线" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false">
			</uni-link>
		</uni-section>
		<uni-section title="自定义字体大小" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false"
				font-size="20"></uni-link>
		</uni-section>
		<uni-section title="自定义插槽" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false"
				color="red">点击跳转</uni-link>
		</uni-section>
	</view>
</template>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/link/link)