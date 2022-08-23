
::: tip 组件名：uni-drawer
::: tip component name: uni-drawer
> 代码块： `uDrawer`
> Code block: `uDrawer`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-drawer)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-drawer)
:::

抽屉侧滑菜单。
Drawer side sliding menu.


## 介绍
## introduce
::: warning 注意事项
::: warning Notes
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
- `width` 属性仅在 `vue` 页面生效，`nvue` 页面因性能问题，不支持动态设置宽度，如需修改，请下载组件修改源码
- The `width` property only takes effect on the `vue` page. The `nvue` page does not support dynamic setting of width due to performance issues. If you need to modify it, please download the component modification source code
:::
### 基本用法
### Basic usage

```html
<template>
	<view>
		<button @click="showDrawer" type="primary">右侧弹出 显示Drawer</button>
		<uni-drawer ref="showRight" mode="right" :mask-click="false">
			<scroll-view style="height: 100%;" scroll-y="true">
				<button @click="closeDrawer" type="primary">关闭Drawer</button>
				<view v-for="item in 60" :key="item">可滚动内容 {{ item }}</view>
			</scroll-view>
		</uni-drawer>
	</view>
</template>

<script>
	export default {
		methods: {
			showDrawer() {
				this.$refs.showRight.open();
			},
			closeDrawer() {
				this.$refs.showRight.close();
			}

		}
	}
</script>
```

## API

### Drawer Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|
|mask|Boolean|true|是否显示遮罩|
|mask|Boolean|true|whether to display the mask|
|maskClick|Boolean|true	|点击遮罩是否可以关闭抽屉|
|maskClick|Boolean|true |Does the drawer close by clicking on the mask|
|mode|String|left|Drawer滑出位置，可选值：left（从左侧滑出）， right（从右侧滑出）|
|mode|String|left|Drawer slide out position, optional values: left (slide out from the left), right (slide out from the right)|
|width|Number|220|Drawer 宽度，仅vue页面设置生效|
|width|Number|220|Drawer width, only the vue page setting takes effect|


### Drawer Events

|事件名|说明|返回值|
|Event Name|Description|Return Value|
|:-:|:-:|:-:	|
|@change|抽屉状态发生变化触发事件|true：抽屉已经打开；false：抽屉已经关闭；	|
|@change|The state of the drawer changes and triggers the event|true: the drawer has been opened; false: the drawer has been closed; |

### Drawer Methods

|方法称名	|说明|参数|
|method name |description|parameters|
|:-:|:-:|:-:|
|open|打开抽屉	|-|
|open|Open the drawer |-|
|close	|关闭抽屉	|-|
|close |Close the drawer |-|


## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-drawer) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-drawer) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/drawer/drawer
> Template
``` html
<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面按钮即可显示导航菜单。</text>
		</uni-card>

		<uni-section title="左侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showLeft')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
					<view class="close">
						<button @click="closeDrawer('showLeft')"><text class="word-btn-white">关闭Drawer</text></button>
					</view>
				</uni-drawer>
			</view>
		</uni-section>

		<uni-section title="右侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showRight')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showRight" mode="right" :mask-click="false" @change="change($event,'showRight')">
					<view class="scroll-view">
						<scroll-view class="scroll-view-box" scroll-y="true">
							<view class="info">
								<text class="info-text">右侧遮罩只能通过按钮关闭，不能通过点击遮罩关闭</text>
							</view>
							<view class="close">
								<button @click="closeDrawer('showRight')"><text class="word-btn-white">关闭Drawer</text></button>
							</view>
							<view class="info-content" v-for="item in 100" :key="item">
								<text>可滚动内容 {{item}}</text>
							</view>
							<view class="close">
								<button  @click="closeDrawer('showRight')"><text class="word-btn-white">关闭Drawer</text></button>
							</view>
						</scroll-view>
					</view>
				</uni-drawer>
			</view>
		</uni-section>
	</view>
</template>
``` 
> Script
``` html
<script>
	export default {
		data() {
			return {
				showRight: false,
				showLeft: false
			}
		},
		methods: {
			confirm() {},
			// 打开窗口
			// open the window
			showDrawer(e) {
				this.$refs[e].open()
			},
			// 关闭窗口
			// close the window
			closeDrawer(e) {
				this.$refs[e].close()
			},
			// 抽屉状态发生变化触发
			// Triggered when the drawer state changes
			change(e, type) {
				console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
				this[type] = e
			}
		},
		onNavigationBarButtonTap(e) {
			if (this.showLeft) {
				this.$refs.showLeft.close()
			} else {
				this.$refs.showLeft.open()
			}
		},
		// app端拦截返回事件 ，仅app端生效
		// The app side intercepts the return event, only the app side takes effect
		onBackPress() {
			if (this.showRight || this.showLeft) {
				this.$refs.showLeft.close()
				this.$refs.showRight.close()
				return true
			}
		}
	}
</script>

``` 
> Style
``` html
<style lang="scss">
.example-body {
	padding: 10px;
}
.scroll-view {
	/* #ifndef APP-NVUE */
	width: 100%;
	height: 100%;
	/* #endif */
	flex:1
}
// 处理抽屉内容滚动
// handle scrolling of drawer content
.scroll-view-box {
	flex: 1;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
.info {
	padding: 15px;
	color: #666;
}

.info-text {
	font-size: 14px;
	color: #666;
}
.info-content {
	padding: 5px 15px;
}
.close {
	padding: 10px;
}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/drawer/drawer)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/drawer/drawer)