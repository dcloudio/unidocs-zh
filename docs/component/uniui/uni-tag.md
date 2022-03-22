
::: tip 组件名：uni-tag
> 代码块： `uTag`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-tag)
:::

用于展示1个或多个文字标签，可点击切换选中、不选中的状态 。

## 介绍
### 基本用法

在 ``template`` 中使用组件
```html
<uni-tag text="标签"></uni-tag>
<uni-tag text="标签" type="error" :circle="true"></uni-tag>
<uni-tag text="标签" @click="bindClick"></uni-tag>
```

## API

### Tag Props

|属性名		|类型		|默认值	|说明																											|
|:-:			|:-:		|:-:		|:-:																											|
|text			|String	|-			|标签内容																										|
|size			|String	|normal	|大小尺寸，可选值：normal、small																				|
|type			|String	|default|颜色类型，可选值：default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色)、royal(紫色)	|
|disabled	|Boolean|false	|是否为禁用状态																									|
|inverted	|Boolean|false	|是否无需背景颜色（空心标签）																					|
|circle		|Boolean|false	|是否为圆角																										|


### Tag Events

|事件称名		|说明							|返回值	|
|:-:			|:-:							|:-:	|
|@click		|点击 Tag 触发事件	|-		|



## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-tag) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
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