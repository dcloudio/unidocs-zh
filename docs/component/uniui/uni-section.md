
::: tip 组件名：uni-section
::: tip component name: uni-section
> 代码块： `uSection`
> Code block: `uSection`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-section)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-section)
:::

标题栏组件，主要用于文章、列表详情等标题展示。
The title bar component is mainly used for title display such as articles and list details.

## 介绍
## introduce

### 基本用法
### Basic usage

在 ``template`` 中使用组件
Using components in ``template``

```html
<uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>

<uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>

<uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
  <template v-slot:decoration>
    <view class="decoration"></view>
  </template>
</uni-section>

<uni-section class="mb-10" title="默认插槽" sub-title="副标题">默认插槽内容</uni-section>

<uni-section class="mb-10" title="主标题">
  <template v-slot:right>
    right slot
  </template>
</uni-section>
```

## 属性/方法
## properties/methods

### Section Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|
|type|String|-|装饰类型，可选值：line（竖线）、circle（圆形）、square（方形）|
|type|String|-|Decoration type, optional values: line (vertical line), circle (circle), square (square)|
|title|String|-|主标题|
|title|String|-|Main title|
|titleFontSize|String| 14px |主标题字体大小|
|titleFontSize|String| 14px |Main title font size|
|titleColor|String| #333 |主标题字体颜色|
|titleColor|String| #333 |Main title font color|
|subTitle|String|-|副标题|
|subTitle|String|-|Subtitle|
|subTitleFontSize|String| 12px |副标题字体大小|
|subTitleFontSize|String| 12px |Subtitle font size|
|subTitleColor|String| #999 |副标题字体颜色|
|subTitleColor|String| #999 |Subtitle font color|
|padding|Boolean/String| false |默认插槽容器的 padding 值，传入类型为 Boolean 时，设置为 10px 或 0|
|padding|Boolean/String| false |The padding value of the default slot container, when the incoming type is Boolean, set to 10px or 0|

### Section Events

|事件名|事件说明|返回参数|
|Event Name|Event Description|Return Parameters|
|:-:|:-:|:-:|
|@click	|点击 Section 触发事件| -|
|@click |Click on Section to trigger event| -|



## 示例
## example
::: warning 注意
::: warning attention
直接拷贝示例代码，无法运行 ，示例依赖了 `uni-scss` 组件。
Copying the sample code directly will not work. The sample relies on the `uni-scss` component.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-section) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-section) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::
:::preview https://hellouniapp.dcloud.net.cn/pages/extUI/section/section

```html
<template>
	<view class="uni-wrap">
			<view class="example-info">
				<text class="example-info-text"> uni-section 组件主要用于文章、列表详情等标题展示 </text>
			</view>
			<uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>
			<uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>
			<uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
        <template v-slot:decoration>
          <view class="decoration"></view>
        </template>
      </uni-section>
			<uni-section class="mb-10" title="默认插槽" sub-title="副标题" padding="0 0 5px 10px">默认插槽内容</uni-section>
			<uni-section class="mb-10" title="主标题">
				<template v-slot:right>
					right slot
				</template>
			</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onReady() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
  $uni-success: #18bc37 !default;

	.uni-wrap {
		flex-direction: column;
		/* #ifdef H5 */
		height: calc(100vh - 44px);
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		flex: 1;
	}

	.mb-10 {
		margin-bottom: 10px;
	}

  .decoration{
    width: 6px;
    height: 6px;
		margin-right: 4px;
    border-radius: 50%;
		background-color: $uni-success;
  }
</style>

:::
