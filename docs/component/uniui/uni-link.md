::: tip 组件名：uni-link
::: tip component name: uni-link
> 代码块： `uLink`
> Code block: `uLink`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-link)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-link)
:::

uni-link是一个外部网页超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。
uni-link is an external web page hyperlink component, copy the url in the applet, open an external browser in the app, and open a new web page on the h5 side.


## 介绍
## introduce
### 基本用法
### Basic usage

```html
<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
```

## API

### Link Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|
|href|String|-|链接地址|
|href|String|-|Link Address|
|text|String|-|显示文字|
|text|String|-|Display text|
|download|String |-|H5平台下载文件名|
|download|String |-|H5 platform download file name|
|showUnderLine|Boolean|true|是否显示下划线|
|showUnderLine|Boolean|true|whether to show underline|
|copyTips|String|已自动复制网址，请在手机浏览器里粘贴该网址|在小程序端复制链接时的提示语|
|copyTips|String|The URL has been copied automatically, please paste the URL in the mobile browser|Prompt when copying the link on the applet|
|color|String|#999999|链接文字颜色|
|color|String|#999999|Link text color|
|fontSize|String|14|链接文字大小，单位px|
|fontSize|String|14|Link text size, in px|


### Link Slots

|名称|说明|					
|Name|Description|
|:-:|:-:|						
|default|自定义内容，会覆盖原有的内容显示（仅 vue 支持）|
|default|Custom content will overwrite the original content display (only supported by vue)|



## 示例
## Example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-link) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-link) , select `Import example project using HBuilderX` on the right side of the page to experience the complete component example.
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
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/link/link)