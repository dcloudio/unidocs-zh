
::: tip 组件名：uni-tag
::: tip component name: uni-tag
> 代码块： `uTag`
> Code block: `uTag`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-tag)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-tag)
:::

用于展示1个或多个文字标签，可点击切换选中、不选中的状态 。
It is used to display one or more text labels, which can be clicked to switch between selected and unselected states.

## 介绍
## introduce
### 基本用法
### Basic usage

在 ``template`` 中使用组件
Using components in ``template``
```html
<uni-tag text="标签"></uni-tag>
<uni-tag text="标签" type="error" :circle="true"></uni-tag>
<uni-tag text="标签" @click="bindClick"></uni-tag>
```

## API

### Tag Props

|属性名		|类型		|默认值	|说明																											|
|property name |type |default value |description |
|:-:			|:-:		|:-:		|:-:																											|
|text			|String	|-			|标签内容																										|
|text |String |- |label content |
|size			|String	|normal	|大小尺寸，可选值：normal、small																				|
|size |String |normal |Size size, optional values: normal, small |
|type			|String	|default|颜色类型，可选值：default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色)、royal(紫色)	|
|type |String |default|Color type, optional values: default (gray), primary (blue), success (green), warning (yellow), error (red), royal (purple) |
|disabled	|Boolean|false	|是否为禁用状态																									|
|disabled |Boolean|false |Disabled |
|inverted	|Boolean|false	|是否无需背景颜色（空心标签）																					|
|inverted |Boolean|false |Doesn't need background color (hollow label) |
|circle		|Boolean|false	|是否为圆角																										|
|circle |Boolean|false |Whether it is rounded|


### Tag Events

|事件称名		|说明							|返回值	|
|Event Name |Description |Return Value |
|:-:			|:-:							|:-:	|
|@click		|点击 Tag 触发事件	|-		|
|@click |Click on Tag to trigger event |- |



## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-tag) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-tag), select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/tag/tag
> Template
``` html
<template>
	<view class="container">
		<uni-card is-full>
			<text class="uni-h6">标签组件多用于商品分类、重点内容显示等场景。</text>
		</uni-card>

		<uni-section title="实心标签" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag text="标签" type="primary" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="success" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="warning" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="error" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" />
				</view>
			</view>
		</uni-section>

		<uni-section title="空心标签" subTitle="使用 inverted 属性显示空心表签" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="primary" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="success" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="warning" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" type="error" />
				</view>
				<view class="tag-view">
					<uni-tag :inverted="true" text="标签" />
				</view>
			</view>
		</uni-section>

		<uni-section title="标签尺寸" subTitle="使用 size 属性控制标签大小" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag text="标签" type="primary" size="normal" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="primary" size="small" />
				</view>
				<view class="tag-view">
					<uni-tag text="标签" type="primary" size="mini" />
				</view>
			</view>
		</uni-section>

		<uni-section title="圆角样式" subTitle="使用 circle 属性控制标签圆角" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :circle="true" text="标签" type="primary" />
				</view>
				<view class="tag-view">
					<uni-tag :circle="true" text="标签" type="primary" size="small" />
				</view>
				<view class="tag-view">
					<uni-tag :circle="true" text="标签" type="primary" size="mini" />
				</view>
			</view>
		</uni-section>

		<uni-section title="标记样式" subTitle="使用 mark 属性显示标记样式" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :mark="true" text="标签" type="primary" size="default" />
				</view>
				<view class="tag-view">
					<uni-tag :mark="true" text="标签" type="primary" size="small" />
				</view>
				<view class="tag-view">
					<uni-tag :mark="true" text="标签" type="primary" size="mini" />
				</view>
			</view>
		</uni-section>
		<uni-section title="不可点击状态" subTitle="使用 disabled 属性 显示禁用样式" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag disabled text="标签" type="primary" />
				</view>
			</view>
		</uni-section>

		<uni-section title="自定义样式" subTitle="使用 custom-style 属性自定义样式" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag text="自定义标签样式"
						custom-style="background-color: #4335d6; border-color: #4335d6; color: #fff;">
					</uni-tag>
				</view>
			</view>
		</uni-section>

		<uni-section title="点击事件" type="line" padding>
			<view class="example-body">
				<view class="tag-view">
					<uni-tag :type="type" text="标签" @click="setType" />
				</view>
				<view class="tag-view">
					<uni-tag :circle="true" :inverted="inverted" text="标签" type="primary" @click="setInverted" />
				</view>
			</view>
		</uni-section>
	</view>
</template>
```
> Script

```html
<script>
	export default {
		components: {},
		data() {
			return {
				type: "default",
				inverted: false,
			};
		},
		methods: {
			setType() {
				let types = ["default", "primary", "success", "warning", "error"];
				let index = types.indexOf(this.type);
				types.splice(index, 1);
				let randomIndex = Math.floor(Math.random() * 4);
				this.type = types[randomIndex];
			},
			setInverted() {
				this.inverted = !this.inverted;
			},
		},
	};
</script>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/tag/tag)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/tag/tag)