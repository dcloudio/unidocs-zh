::: tip 组件名：uni-search-bar
::: tip component name: uni-search-bar
> 代码块： `uSearchBar`
> Code block: `uSearchBar`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-search-bar)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-search-bar)
:::

搜索栏组件
search bar component

## 介绍 
## introduce 
### 基本用法
### Basic usage

```html
<!-- 基本用法 -->
<!-- Basic usage -->
<uni-search-bar @confirm="search" @input="input" ></uni-search-bar>

<!-- v-model 用法 -->
<!-- v-model usage -->
<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input" @cancel="cancel" @change="change" @clear="clear"></uni-search-bar>

<!-- 自定义Placeholder -->
<!-- Custom Placeholder -->
<uni-search-bar placeholder="自定placeholder" @confirm="search"></uni-search-bar>

<!-- 设置圆角 -->
<!-- Set rounded corners -->
<uni-search-bar :radius="100" @confirm="search"></uni-search-bar>
```

## API
### SearchBar Props

|属性名|类型	|默认值	|说明|
|property name|type |default value |description|
|:-:|:-:|:-:|:-:|
|value/v-model	|StringNumber	|	|搜索栏绑定值|
|value/v-model |StringNumber | |Search bar binding value|
|placeholder|String	|搜索	|搜索栏Placeholder|
|placeholder|String |Search |Search Bar Placeholder|
|radius|Number	|10		|搜索栏圆角，单位px|
|radius|Number |10 |Search bar rounded corners, in px|
|clearButton|String	|auto	|是否显示清除按钮，可选值`always`-一直显示、`auto`-输入框不为空时显示、`none`-一直不显示	|
|clearButton|String |auto |Whether to display the clear button, the optional value is `always` - always display, `auto` - display when the input box is not empty, `none` - never display |
|cancelButton|String|auto	|是否显示取消按钮，可选值`always`-一直显示、`auto`-输入框不为空时显示、`none`-一直不显示	|
|cancelButton|String|auto |Whether to display the cancel button, the optional values `always` - always display, `auto` - display when the input box is not empty, `none` - never display |
|cancelText|String	|取消|取消按钮的文字|
|cancelText|String |Cancel|Cancel button text|
|bgColor|String	|#F8F8F8|输入框背景颜色|
|bgColor|String |#F8F8F8|Input box background color|
|maxlength|Number|100|输入最大长度|
|focus|Boolean	|false	||


### SearchBar Events

|事件称名|说明|返回参数|
|Event name|Description|Return parameter|
|:-:|:-:|:-:|
|@confirm|uniSearchBar 的输入框 confirm 事件，返回参数为uniSearchBar的value	|e={value:Number}	|
|@confirm|The input box of uniSearchBar confirm event, the return parameter is the value of uniSearchBar |e={value:Number} |
|@input|uniSearchBar 的 value 改变时触发事件，返回参数为uniSearchBar的value|e=value	|
|@input|The value of uniSearchBar triggers an event when the value changes, and the return parameter is the value of uniSearchBar|e=value |
|@cancel|点击取消按钮时触发事件，返回参数为uniSearchBar的value|e={value:Number}	|
|@cancel|The event is triggered when the cancel button is clicked, and the return parameter is the value of uniSearchBar|e={value:Number} |
|@clear|点击清除按钮时触发事件，返回参数为uniSearchBar的value|e={value:Number}	|
|@clear|The event is triggered when the clear button is clicked, and the return parameter is value|e={value:Number} of uniSearchBar |
|@focus|input 获取焦点时触发事件，返回参数为uniSearchBar的value|e={value:Number}	|
|@focus|input triggers an event when the focus is obtained, and the return parameter is value|e={value:Number} of uniSearchBar |
|@blur|input 失去焦点时触发事件，返回参数为uniSearchBar的value|e={value:Number}	|
|@blur|input triggers an event when it loses focus, the return parameter is value|e={value:Number} of uniSearchBar |

### 替换 icon 的 slot 插槽
### Replace the slot slot of the icon

|插槽称名|说明|
|Slot Name|Description|
|:-:|:-:|
|searchIcon	|替换组件的搜索图标|
|searchIcon |Replaces the component's search icon|
|clearIcon	|替换组件的清除图标|
|clearIcon |Replaces the component's clear icon|

```html
<!-- 替换组件的搜索图标 -->
<!-- Replaces the component's search icon -->
<uni-search-bar placeholder="自定义searchIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
	<template v-slot:searchIcon>
		<uni-icons  color="#999999" size="18" type="home" />
	</template>
</uni-search-bar>

<!-- 替换组件的清除图标 -->
<!-- Replaces the component's clear icon -->
<uni-search-bar placeholder="自定义clearIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
	
	<template v-slot:clearIcon>
		<view style="color: #999999" >X</view>
	</template>
</uni-search-bar>

```
## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-search-bar) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-search-bar) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/search-bar/search-bar
> Template
``` html
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">搜索栏组件，通常用于搜索商品、文章等。</text>
		</uni-card>

		<uni-section title="基本用法" type="line">
			<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
				@cancel="cancel" @clear="clear">
			</uni-search-bar>
			<view class="search-result">
				<text class="search-result-text">当前输入为：{{ searchValue }}</text>
			</view>

		</uni-section>

		<uni-section title="自定义样式" subTitle="使用 bgColor 属性自定义背景色" type="line">
			<uni-search-bar placeholder="自定义背景色" bgColor="#EEEEEE" @confirm="search" />
		</uni-section>
		<uni-section title="自定义icon" type="line">
			<uni-search-bar placeholder="自定义searchIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
				<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
			</uni-search-bar>
		</uni-section>
		<uni-section title="控制清除/取消按钮" subTitle="使用 clearButton 属性设置清除按钮" type="line">
			<uni-search-bar radius="5" placeholder="一直显示" clearButton="always" cancelButton="always" @confirm="search"
				@cancel="cancel" />
			<uni-search-bar class="uni-mt-10" radius="5" placeholder="自动显示隐藏" clearButton="auto" cancelButton="none" @confirm="search" />
			<uni-search-bar class="uni-mt-10" radius="100" placeholder="一直不显示" clearButton="none" cancelButton="none" @confirm="search" />
		</uni-section>
	</view>
</template>
```
> Script

```html
<script>
	export default {
		data() {
			return {
				searchValue: '123123'
			}
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				console.log('----input:', res)
			},
			clear(res) {
				uni.showToast({
					title: 'clear事件，清除值为：' + res.value,
					icon: 'none'
				})
			},
			blur(res) {
				uni.showToast({
					title: 'blur事件，输入值为：' + res.value,
					icon: 'none'
				})
			},
			focus(e) {
				uni.showToast({
					title: 'focus事件，输出值为：' + e.value,
					icon: 'none'
				})
			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			}
		},
		onBackPress() {
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
		}
	}
</script>
```
> Style
```html
<style lang="scss">

	.search-result {
		padding-top: 10px;
		padding-bottom: 20px;
		text-align: center;
	}

	.search-result-text {
		text-align: center;
		font-size: 14px;
		color:#666;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 0px;
	}

	.uni-mt-10 {
		margin-top: 10px;
	}
</style>

```
:::
[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/search-bar/search-bar)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/search-bar/search-bar)