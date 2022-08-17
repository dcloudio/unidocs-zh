<md-translatedByGoogle />


::: tip 组件名：uni-collapse
::: tip component name: uni-collapse
> 代码块： `uCollapse`
> Code block: `uCollapse`
> 
> 关联组件：`uni-collapse-item`、`uni-icons`。
> Associated components: `uni-collapse-item`, `uni-icons`.

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-collapse)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-collapse)
:::

折叠面板用来折叠/显示过长的内容或者是列表。通常是在多内容分类项使用，折叠不重要的内容，显示重要内容。点击可以展开折叠部分。
Accordion panels are used to collapse/display long content or lists. It is usually used in multi-content classification items to collapse unimportant content and display important content. Click to expand the collapsed section.

## 介绍
## introduce
::: warning 注意事项
::: warning Notes
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
- 组件需要依赖 `sass` 插件 ，请自行手动安装
- The component needs to depend on the `sass` plugin, please install it manually
- `App` 端默认关闭组件动画 ，因为 `height` 动画开销比较大，会导致页面卡顿，请酌情使用动画
- The `App` side turns off the component animation by default, because the `height` animation cost is relatively large, which will cause the page to freeze, please use animation as appropriate
- 如在使用组件过程从发现卡顿严重，请尝试停用组件动画，问题原因如上
- If it is found that the freeze is serious during the use of the component, please try to disable the component animation. The cause of the problem is as above
- 在小程序端组件内容发生变化，需要手动调用 resize() 方法，手动更新几点信息，避免出现内容错位
- When the content of the component on the applet side changes, you need to manually call the resize() method to manually update some information to avoid content misalignment
- 如需自定义组件默认边框颜色等，请使用插槽自定义内容并合理使用 `border ` 和 `title-border` 属性
- To customize the default border color of the component, etc., use the slot to customize the content and use the `border` and `title-border` properties appropriately
- uni-collapse-item 仅支持嵌套使用，请勿单独使用
- uni-collapse-item only supports nested use, do not use it alone
- 组件支持 nvue ，需要在 `manifest.json > app-plus` 节点下配置 `"nvueStyleCompiler" : "uni-app"` 
- The component supports nvue, you need to configure `"nvueStyleCompiler" : "uni-app"` under the `manifest.json > app-plus` node
:::
### 基本用法
### Basic usage

使用 `title` 属性指定面板显示内容 
Use the `title` attribute to specify what the panel should display

使用 `open` 属性默认打开当前面板
Use the `open` property to open the current panel by default

使用 `disabled` 属性禁用面板
Use the `disabled` property to disable panels


```html
<uni-collapse>
	<uni-collapse-item title="默认开启" :open="true">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="折叠内容">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="禁用状态" disabled>
		<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

### 手风琴效果
### Accordion effect

使用 `accordion` 属性，可以仅打开一个面板并关闭其他已经打开的面板，效果类似手风琴
Using the `accordion` property, you can open only one panel and close other panels that are already open, similar to an accordion

设置 `accordion` 属性时，`open` 属性则生效在最后一个组件
When setting the `accordion` property, the `open` property takes effect on the last component

```html
<uni-collapse accordion>
	<uni-collapse-item title="手风琴效果">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="手风琴效果">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item title="禁用状态" disabled>
		<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

### 动态设置折叠面板打开状态
### Dynamically set the open state of the accordion panel

使用 `v-model` 属性，动态设置面板的显示状态
Use the `v-model` property to dynamically set the display state of the panel

使用 `name` 属性设置每个面板的唯一标识，如不设置使用默认索引，从字符串 `"0"` 开始记数
Use the `name` property to set the unique identifier of each panel, if not set use the default index, start counting from the string `"0"`

**注意**
**Notice**

- 如果 `accordion` 属性为 `true` 则 `v-model` 类型为 `String`
- if `accordion` property is `true` then `v-model` is of type `String`
- 如果 `accordion` 属性为 `false` 则 `v-model` 类型为 `Array`
- if `accordion` property is `false` then `v-model` is of type `Array`
- 请注意 `v-model` 属性与 `open` 属性请勿一起使用 ，建议只使用 `v-model`
- Please note that `v-model` attribute and `open` attribute should not be used together, it is recommended to use only `v-model`


::: preview
> Template
```html
<uni-collapse v-model="value">
	<uni-collapse-item name="key1" title="默认开启">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item name="key2" title="默认开启">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item name="key3" title="默认不开启">
			<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```
> Script

```js
export default {
	data(){
		return {
			value:['key1','key2'],
			// 如果设置了 accordion 属性，则使用 string 类型
			// value:'key1'
		}
	}
}
```

:::

### 使用动画
### Using animation

使用 `show-animation` 属性开启或关闭面板折叠动画，默认动画开启
Use the `show-animation` property to turn on or off the panel collapse animation, the default animation is on

**注意**
**Notice**

- `App` 端默认关闭组件动画 ，因为 height 动画开销比较大，会导致页面卡顿，请酌情使用动画，如出现明显卡顿，尝试关闭动画
- The `App` side closes the component animation by default, because the height animation cost is relatively large, which will cause the page to freeze. Please use the animation as appropriate. If there is obvious lag, try to close the animation


```html
<uni-collapse>
	<uni-collapse-item :show-animation="true" title="开启动画">
		<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item :show-animation="true"  title="开启动画">
			<text>折叠内容</text>
	</uni-collapse-item>
	<uni-collapse-item :show-animation="false"  title="不开启动画">
			<text>折叠内容</text>
	</uni-collapse-item>
</uni-collapse>
```

### 配置图片
### Configure image

使用 `thumb` 配置图片地址， 可在面板左侧显示一个图片
Use `thumb` to configure the image address to display an image on the left side of the panel

如需显示更多内容，如图标等，请见下方自定义插槽的说明
To display more content, such as icons, etc., see the description of custom slots below

```html
<uni-collapse>
	<uni-collapse-item title="标题文字"
		thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
		<view class="content">
			<text class="text">折叠内容主体，可自定义内容及样式</text>
		</view>
	</uni-collapse-item>
</uni-collapse>
```

### 自定义插槽
### Custom Slots

如果需要自定义面板显示，可以使用 `title` 插槽达成完全自定义。下面是一个使用 `uni-list` 的列表示例，需要引入 `uni-list` 组件
If you need to customize the panel display, you can use the `title` slot for full customization. The following is an example of a list using `uni-list`, which requires the introduction of the `uni-list` component

```html
<uni-collapse>
	<!-- 因为list默认带一条分隔线，所以使用 titleBorder="none" 取消面板的分隔线 -->
	<!-- Because the list has a separator by default, use titleBorder="none" to cancel the panel's separator -->
	<uni-collapse-item title-border="none" :border="false">
		<template v-slot:title>
			<uni-list>
				<uni-list-item title="标题使用自定义标题插槽" :show-extra-icon="true" :extra-icon="extraIcon">
				</uni-list-item>
			</uni-list>
		</template>
		<view class="content">
			<text class="text">折叠内容主体，可自定义内容及样式</text>
		</view>
	</uni-collapse-item>
</uni-collapse>
```

**注意**
**Notice**

- 在折叠面板组件中使用list时，在 App-Nvue 下请勿单独使用 uni-list-item，会导致组件无法正常显示，其他平台不做限制
- When using list in the accordion panel component, do not use uni-list-item alone under App-Nvue, it will cause the component to not display properly, and other platforms do not impose restrictions
- 在默认插槽里使用 uni-list 组件与上方示例一样，直接写在默认插槽里即可
- Using the uni-list component in the default slot is the same as the above example, just write it directly in the default slot



## API

### Collapse Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|
|value/v-model|String/Array|-|当前激活面板改变时触发(如果是手风琴模式，参数类型为string，否则为array)|
|value/v-model|String/Array|-|Triggered when the active panel changes (if it is accordion mode, the parameter type is string, otherwise it is array)|
|accordion|Boolean|false|是否开启手风琴效果	|
|accordion|Boolean|false|Whether to enable the accordion effect|

### Collapse Event

|事件称名|说明|返回值|
|Event Name|Description|Return Value|
|:-:|:-:|:-:|
|@change|切换面板时触发	|切换面板时触发，如果是手风琴模式，返回类型为string，否则为array|
|@change|Triggered when switching panels |Triggered when switching panels, if it is accordion mode, the return type is string, otherwise it is array|

### Collapse Methods

|方法名称|说明|
|Method Name|Description|
|:-:|:-:|
|resize	|更新当前列表高度|
|resize |Update the current list height|


::: warning 提示
::: warning prompt
- resize 方法解决动态添加数据，带动画的折叠面板高度不更新的问题
- The resize method solves the problem of dynamically adding data, and the height of the collapsed panel with animation does not update
- 需要在数据渲染完毕之后使用 `resize` 方法。推荐在 `this.$nextTick()` 中使用
- The `resize` method needs to be used after the data has been rendered. Recommended for `this.$nextTick()`
- 当前只有小程序端需要调用此方法，H5\App 端已经做了处理，不需要手动更新高度
- Currently only the applet side needs to call this method, the H5\App side has already processed it, and there is no need to manually update the height
:::

**示例：**
**Example:**
::: preview
> Template
```vue
<template>
	<view>
		<uni-collapse ref="collapse" v-model="value">
			<uni-collapse-item title="默认开启" >
				<view class="content">
					<text class="text">{{content}}</text>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="折叠内容">
				<view class="content">
					<text class="text">折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段文字。再次点击标题，折叠内容。</text>
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<button class="button" type="primary" @click="add">动态修改内容</button>
	</view>
</template>

```
> Script
```vue
<script>
	export default {
		data() {
			return {
				value:['0'],
				content: '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。',
			}
		},
		methods: {
			add() {
				if (this.content.length > 35) {
					this.content = '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。'
				} else {
					this.content = '折叠内容主体，这是一段比较长内容。通过点击按钮修改后内容后，使组件高度发生变化，在次点击按钮恢复之前的内容和高度。'
				}
				// TODO 小程序中不支持自动更新 ，需要手动resize 更新组件高度
				// #ifdef MP
				this.$nextTick(() => {
					this.$refs.collapse.resize()
				})
				// #endif
			}
		}
	}
</script>
```
:::

### CollapseItem Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|
|title|String|-|标题文字|
|title|String|-|title text|
|thumb|String|-|标题左侧缩略图|
|thumb|String|-|title left thumbnail|
|disabled|Boolean|false|是否禁用|
|disabled|Boolean|false|Disabled|
|open|Boolean|false|是否展开面板|
|open|Boolean|false|Whether to expand the panel|
|show-animation|Boolean|false|开启动画|
|show-animation|Boolean|false|Enable animation|
|border|Boolean|true|折叠面板内容分隔线|
|border|Boolean|true|Collapse panel content divider|
|title-border|String|auto|折叠面板标题分隔线可选值见下方 **TitleBorder Params**|
|title-border|String|auto|The optional value of the title divider of the accordion panel is shown below **TitleBorder Params**|
|show-arrow|Boolean|true|是否显示右侧箭头|
|show-arrow|Boolean|true|Show right arrow|

#### TitleBorder Params

|参数名|说明|
|Parameter name|Description|
|:-:|:-:|
|auto|分隔线自动显示|
|auto|Separator lines are displayed automatically|
|none|不显示分隔线|
|none|Do not display dividers|
|show|一直显示分隔线|
|show|Always show the divider|

### Collapse Slots

|插槽名|说明|
|Slot Name|Description|
|:-:| :-:|
|default|默认插槽|
|default|default slot|
|title|面板标题插槽，如使用此插槽禁用样式效果将失效|
|title|Panel title slot, if you use this slot to disable the style effect, it will be invalid|



## 示例
## Example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-collapse) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-collapse) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/collapse/collapse
> Template
```vue
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">折叠面板用来折叠/显示过长的内容或者是列表。通常是在多内容分类项使用，折叠不重要的内容，显示重要内容。点击可以展开折叠部分。</text>
		</uni-card>
		<uni-section title="基础用法" type="line">
			<uni-collapse ref="collapse" v-model="value" @change="change">
				<uni-collapse-item title="默认开启" >
					<view class="content">
						<text class="text">{{content}}</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="折叠内容">
					<view class="content">
						<text class="text">折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段文字。再次点击标题，折叠内容。</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="禁用状态" disabled>
					<view class="content">
						<text class="text">禁用状态内容主体，页面上是看不到这段话的。</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>

		<button class="button" type="primary" @click="add">动态修改内容</button>
		<!-- TODO app 端默认不使用动画，app在使用高度动画的时候会有性能开销问题，所以应该要酌情使用 -->
		<!-- The TODO app side does not use animation by default. When the app uses high animation, there will be performance overhead problems, so it should be used as appropriate -->
		<uni-section title="使用动画效果" type="line">
			<uni-collapse >
				<uni-collapse-item title="使用动画" :show-animation="true">
					<view class="content">
						<text class="text">默认开启组件动画，使用动画效果折叠内容会有一个从上到下的动画。</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="不使用动画" :show-animation="false">
					<view class="content">
						<text class="text">设置 show-animation="false",关闭当前组件动画效果。</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>
		<uni-section title="手风琴效果（只会保留一个的打开状态）" type="line">
			<uni-collapse  accordion v-model="accordionVal" @change="change">
				<uni-collapse-item title="手风琴效果">
					<view class="content">
						<text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="手风琴效果">
					<view class="content">
						<text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="手风琴效果">
					<view class="content">
						<text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>

		<uni-section title="配置图片" type="line">
			<uni-collapse>
				<uni-collapse-item title="标题文字"
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
					<view class="content">
						<text class="text">折叠内容主体，可自定义内容及样式</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="标题文字"
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
					<view class="content">
						<text class="text">折叠内容主体，可自定义内容及样式</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>

		<uni-section title="使用插槽" type="line">
			<uni-collapse>
				<uni-collapse-item titleBorder="none">
					<template v-slot:title>
						<uni-list>
							<uni-list-item title="标题使用自定义标题插槽" :show-extra-icon="true" :extra-icon="extraIcon">
							</uni-list-item>
						</uni-list>
					</template>
					<view class="content">
						<text class="text">折叠内容主体，可自定义内容及样式</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="折叠内容使用 uni-list 组件">
					<uni-list>
						<uni-list-item title="列表文字"></uni-list-item>
						<uni-list-item :disabled="true" title="列表文字" note="列表禁用状态"></uni-list-item>
						<uni-list-item title="列表右侧显示 switch" :show-switch="true"></uni-list-item>
						<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon" title="列表左侧带扩展图标"></uni-list-item>
						<uni-list-item title="列表左侧带略缩图" note="列表描述信息"
							thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
							thumb-size="lg" rightText="右侧文字" showArrow></uni-list-item>
						<uni-list-item title="开启点击反馈" clickable showArrow @click="onClick"></uni-list-item>
					</uni-list>
				</uni-collapse-item>
			</uni-collapse>
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
				value:['0'],
				accordionVal:'1',
				content: '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。',
				extraIcon: {
					color: '#4cd964',
					size: '26',
					type: 'image'
				},
			}
		},
		methods: {
			add() {
				if (this.content.length > 35) {
					this.content = '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。'
				} else {
					this.content = '折叠内容主体，这是一段比较长内容。通过点击按钮修改后内容后，使组件高度发生变化，在次点击按钮恢复之前的内容和高度。'
				}
				// TODO 小程序中不支持自动更新 ，需要手动resize 更新组件高度
				// #ifdef MP
				this.$nextTick(() => {
					this.$refs.collapse.resize()
				})
				// #endif
			},
			onClick(e) {
				uni.showToast({
					title: '列表被点击'
				})
			},
			change(e) {
				console.log(e);
			}
		}
	}
</script>
```
> Style
```vue
<style lang="scss">
	.example-body {
		flex-direction: column;
		flex: 1;
	}

	.content {
		padding: 15px;
	}

	.text {
		font-size: 14px;
		color: #666;
		line-height: 20px;
	}

	.button {
		// margin-top: 10px;
		margin: 10px;
		margin-bottom: 0;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/collapse/collapse)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/collapse/collapse)
