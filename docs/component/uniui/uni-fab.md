
::: tip 组件名：uni-fab
::: tip component name: uni-fab
> 代码块： `uFab`
> Code block: `uFab`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-fab)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-fab)
:::

点击可展开一个图形按钮菜单
Click to expand a graphical button menu


## 介绍
## introduce
::: warning 注意事项
::: warning Notes
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
- 不建议动态修改属性，可能会耗损部分性能。
- Dynamically modifying properties is not recommended, as some performance may be lost.
- 展开菜单暂不支持字体图标，使用图片路径时建议使用绝对路径，相对路径可能会有问题。
- The expansion menu does not support font icons at the moment. It is recommended to use absolute paths when using image paths. Relative paths may have problems.
- 选中状态要通过自己控制，如果不希望有选中状态，不处理 `active` 即可。 
- The selected state must be controlled by yourself. If you do not want to have a selected state, just do not process `active`.
- 展开菜单建议最多显示四个，如果过多对于小屏手机可能会超出屏幕。
- It is recommended to display up to four in the expanded menu, if too many may exceed the screen for small screen phones.
:::

### 基本用法
### Basic usage

在 `template` 中使用组件
Using components in `template`

```html
<template>
	<view>
		<uni-fab
			:pattern="pattern"
			:content="content"
			:horizontal="horizontal"
			:vertical="vertical"
			:direction="direction"
			@trigger="trigger"
		></uni-fab>
	</view>
</template>
```


## API

### Fab Props

|属性名|类型| 默认值| 说明|
|property name|type|default value|description|
|:-:| :-:| :-:| :-:|
|pattern| Object| -| 可选样式配置项|
|pattern| Object| -| Optional style configuration item|
|horizontal| String| 'left'| 水平对齐方式。`left`:左对齐，`right`：右对齐|
|horizontal| String| 'left'| Horizontal alignment. `left`: left-aligned, `right`: right-aligned |
|vertical| String| 'bottom'| 垂直对齐方式。`bottom`:下对齐，`top`：上对齐|
|vertical| String| 'bottom'| Vertical alignment. `bottom`: bottom alignment, `top`: top alignment|
|direction	| String| 'horizontal'| 展开菜单显示方式。`horizontal`:水平显示，`vertical`：垂直显示	|
|direction | String| 'horizontal'| Expand how the menu is displayed. `horizontal`: display horizontally, `vertical`: display vertically |
|popMenu| Boolean| true| 是否使用弹出菜单|
|popMenu| Boolean| true| Whether to use popup menu|
|content| Array| -| 展开菜单内容配置项|
|content| Array| -| Expand menu content configuration items|



**pattern配置项：**
**pattern configuration item:**

|参数|类型	| 默认值	|说明|
|parameters|type|default value|description|
|:-:|:-:| :-:| :-:|
|color| String	| #3c3e49| 文字默认颜色|
|color| String | #3c3e49| Default color of text|
|selectedColor| String	| #007AFF| 文字选中时的颜色|
|selectedColor| String | #007AFF| Color when text is selected|
|backgroundColor| String| #ffffff| 背景色|
|backgroundColor| String| #ffffff| Background Color|
|buttonColor| String| #3c3e49| 按钮背景色|
|buttonColor| String| #3c3e49| Button background color|

**content配置项：**
**content configuration item:**

|  参数|类型	| 说明|
| Parameters | Type | Description |
| :-:|  :-:| :-:| :-:|
| iconPath| String| 图片路径|
| iconPath| String| Image path|
| selectedIconPath| String	| 选中后图片路径|
| selectedIconPath| String | Selected image path|
| text| String	| 文字|
| text| String | Character|
| active| Boolean| 是否选中当前	|
| active| Boolean| Whether to select the current |

### Fab Events

|  参数|类型| 说明|
| Parameters | Type | Description |
| :-:|  :-:| :-:|
| @trigger	| Function	| 展开菜单点击事件，返回点击信息|
| @trigger | Function | Expand menu click event, return click information |
| @fabClick	| Function	| 悬浮按钮点击事件				|
| @fabClick | Function | Floating button click event |



## 示例
## Example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-fab) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-fab) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/fab/fab
> Template
``` html
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-ui 规范颜色色板，通过内置样式快速指定元素前景和背景色。</text>
		</uni-card>

		<uni-section title="基本功能" subTitle="点击按钮,切换 fab 不同状态" type="line">
			<view class="warp">
				<button class="button" type="primary" @click="switchBtn(0)">切换菜单方向({{ directionStr }})</button>
				<button class="button" type="primary" @click="switchBtn('left', 'bottom')">左下角显示</button>
				<button class="button" type="primary" @click="switchBtn('right', 'bottom')">右下角显示</button>
				<button class="button" type="primary" @click="switchBtn('left', 'top')">左上角显示</button>
				<button class="button" type="primary" @click="switchBtn('left', 'top')">左上角显示</button>
				<button class="button" type="primary" @click="switchBtn('right', 'top')">右上角显示</button>
				<button class="button" type="primary" @click="switchColor">修改颜色</button>
			</view>
		</uni-section>
		<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
			:direction="direction" @trigger="trigger" @fabClick="fabClick" />
	</view>
</template>
``` 

> Script
``` html
<script>
	export default {
		components: {},
		data() {
			return {
				title: 'uni-fab',
				directionStr: '垂直',
				horizontal: 'left',
				vertical: 'bottom',
				direction: 'horizontal',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF',
					iconColor: '#fff'
				},
				is_color_type: false,
				content: [{
						iconPath: '/static/image.png',
						selectedIconPath: '/static/image-active.png',
						text: '相册',
						active: false
					},
					{
						iconPath: '/static/home.png',
						selectedIconPath: '/static/home-active.png',
						text: '首页',
						active: false
					},
					{
						iconPath: '/static/star.png',
						selectedIconPath: '/static/star-active.png',
						text: '收藏',
						active: false
					}
				]
			}
		},
		onBackPress() {
			if (this.$refs.fab.isShow) {
				this.$refs.fab.close()
				return true
			}
			return false
		},
		methods: {
			trigger(e) {
				console.log(e)
				this.content[e.index].active = !e.item.active
				uni.showModal({
					title: '提示',
					content: `您${this.content[e.index].active ? '选中了' : '取消了'}${e.item.text}`,
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定')
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			fabClick() {
				uni.showToast({
					title: '点击了悬浮按钮',
					icon: 'none'
				})
			},
			switchBtn(hor, ver) {
				if (hor === 0) {
					this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal'
					this.directionStr = this.direction === 'horizontal' ? '垂直' : '水平'
				} else {
					this.horizontal = hor
					this.vertical = ver
				}
				this.$forceUpdate()
			},
			switchColor() {
				this.is_color_type = !this.is_color_type
				if (this.is_color_type) {
					this.pattern.iconColor = '#aaa'
					this.pattern.buttonColor = '#fff'
				} else {
					this.pattern.iconColor = '#fff'
					this.pattern.buttonColor = '#007AFF'
				}
			}
		}
	}
</script>
``` 
> Style
``` html
<style lang="scss">
	.warp {
		padding: 10px;
	}

	.button {
		margin-bottom: 10px;
	}
</style>

```
:::


[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/fab/fab)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/fab/fab)