::: tip 组件名：uni-search-bar
> 代码块： `uSearchBar`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-search-bar)
:::

搜索栏组件

## 介绍 
### 基本用法

```html
<!-- 基本用法 -->
<uni-search-bar @confirm="search" @input="input" ></uni-search-bar>

<!-- v-model 用法 -->
<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input" @cancel="cancel" @change="change" @clear="clear"></uni-search-bar>

<!-- 自定义Placeholder -->
<uni-search-bar placeholder="自定placeholder" @confirm="search"></uni-search-bar>

<!-- 设置圆角 -->
<uni-search-bar :radius="100" @confirm="search"></uni-search-bar>
```

## API
### SearchBar Props

|属性名|类型	|默认值	|说明|
|:-:|:-:|:-:|:-:|
|value/v-model	|StringNumber	|	|搜索栏绑定值|
|placeholder|String	|搜索	|搜索栏Placeholder|
|radius|Number	|10		|搜索栏圆角，单位px|
|clearButton|String	|auto	|是否显示清除按钮，可选值`always`-一直显示、`auto`-输入框不为空时显示、`none`-一直不显示	|
|cancelButton|String|auto	|是否显示取消按钮，可选值`always`-一直显示、`auto`-输入框不为空时显示、`none`-一直不显示	|
|cancelText|String	|取消|取消按钮的文字|
|bgColor|String	|#F8F8F8|输入框背景颜色|
|maxlength|Number|100|输入最大长度|
|focus|Boolean	|false	||


### SearchBar Events

|事件称名|说明|返回参数|
|:-:|:-:|:-:|
|@confirm|uniSearchBar 的输入框 confirm 事件，返回参数为uniSearchBar的value	|e={value:Number}	|
|@input|uniSearchBar 的 value 改变时触发事件，返回参数为uniSearchBar的value|e=value	|
|@cancel|点击取消按钮时触发事件，返回参数为uniSearchBar的value|e={value:Number}	|
|@clear|点击清除按钮时触发事件，返回参数为uniSearchBar的value|e={value:Number}	|
|@focus|input 获取焦点时触发事件，返回参数为uniSearchBar的value|e={value:Number}	|
|@blur|input 失去焦点时触发事件，返回参数为uniSearchBar的value|e={value:Number}	|

### 替换 icon 的 slot 插槽

|插槽称名|说明|
|:-:|:-:|
|searchIcon	|替换组件的搜索图标|
|clearIcon	|替换组件的清除图标|

```html
<!-- 替换组件的搜索图标 -->
<uni-search-bar placeholder="自定义searchIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
	<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
</uni-search-bar>

<!-- 替换组件的清除图标 -->
<uni-search-bar placeholder="自定义clearIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
	<view slot="clearIcon" style="color: #999999" >X</view>
</uni-search-bar>

```
## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-search-bar) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
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