
::: tip 组件名：uni-fav
::: tip component name: uni-fav
> 代码块： `uFav`
> Code block: `uFav`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-fav)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-fav)
:::

用于收藏功能，可点击切换选中、不选中的状态。
For the collection function, you can click to switch the selected and unselected states.

## 介绍
## introduce
### 基本用法
### Basic usage
```html
<uni-fav :checked="checked" @click="onClick"/>
<uni-fav :checked="checked" class="favBtn" circle="true" bgColor="#dd524d" bgColorChecked="#007aff" @click="onClick"/>
```

## API

### Fav Props

|属性名				|类型	|默认值												|说明				|
|property name |type |default value |description |
|:-:				|:-:	|:-:												|:-:				|
|star				|Boolean|true												|按钮是否带星星		|
|star |Boolean|true |Does the button have a star |
|bgColor			|String	|#eeeeee											|未收藏时的背景色	|
|bgColor |String |#eeeeee |Background color when not bookmarked |
|bgColorChecked	|String	|#007aff											|已收藏时的背景色	|
|bgColorChecked |String |#007aff |Background color when bookmarked |
|fgColor			|String	|#666666											|未收藏时的文字颜色	|
|fgColor |String |#666666 |Text color when not bookmarked |
|fgColorChecked	|String	|#FFFFFF											|已收藏时的文字颜色	|
|fgColorChecked |String |#FFFFFF |Text color when bookmarked |
|circle				|Boolean|false												|是否为圆角			|
|circle |Boolean|false |Whether it is rounded|
|checked			|Boolean|false												|是否为已收藏		|
|checked |Boolean|false |Is it Favorite |
|contentText		|Object	|```{contentDefault: '收藏',contentFav: '已收藏'}```|收藏按钮文字		|
|contentText |Object |```{contentDefault: 'Favorite',contentFav: 'Favorite'}```|Favorite button text |


### Fav Events

|事件称名	|说明					|返回值	|
|Event Name |Description |Return Value |
|:-:		|:-:					|:-:	|
|click		|点击 fav按钮 触发事件	|-		|
|click |Click the fav button to trigger the event |- |



## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-fav) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-fav), select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/fav/fav
> Template
``` html
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">用于收藏功能，可点击切换选中、不选中的状态。</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<view class="example-body">
				<uni-fav :checked="checkList[0]" class="favBtn" @click="favClick(0)" />
				<uni-fav :checked="checkList[1]" :star="false" class="favBtn" @click="favClick(1)" />
				<uni-fav :checked="checkList[2]" class="favBtn" :circle="true" bg-color="#dd524d"
					bg-color-checked="#007aff" fg-color="#ffffff" fg-color-checked="#ffffff" @click="favClick(2)" />
				<uni-fav :checked="checkList[3]" class="favBtn" bg-color="#f8f8f8" bg-color-checked="#eeeeee"
					fg-color="#333333" fg-color-checked="#333333" @click="favClick(3)" />
			</view>
		</uni-section>

		<uni-section title="自定义文字" type="line">
			<view class="example-body">
				<uni-fav :checked="checkList[4]" :content-text="contentText" @click="favClick(4)" />
			</view>
		</uni-section>

		<uni-section title="在自定义导航栏使用" type="line">
			<uni-nav-bar style="width: 100%;" :fixed="false" left-icon="arrowleft" title="标题" color="#333333"
				background-color="#FFFFFF">
				<template v-slot:right>
					<uni-fav :checked="checkList[5]" :circle="true" @click="favClick(5)" />
				</template>
			</uni-nav-bar>
		</uni-section>
		<view class="example-body example-body-fullWidth">

		</view>
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
				checkList: [false, false, false, false, false, false],
				contentText: {
					contentDefault: '追番',
					contentFav: '已追番'
				}
			}
		},
		methods: {
			favClick(index) {
				this.checkList[index] = !this.checkList[index]
				console.log(this.checkList[index]);
				this.$forceUpdate()
			}
		}
	}
</script>
``` 
> Style
``` html
<style lang="scss">
	.example-body {
		display: flex;
		padding: 10px 15px;
	}

	/* #ifdef MP-ALIPAY */
	.uni-fav {
		margin-left: 20rpx;
	}

	/* #endif */


	.favBtn {
		margin: 0 20rpx 20rpx 0;
	}


	.example-body-fullWidth {
		padding: 32rpx 0;
	}

	.example-body-first {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: flex-start;
	}

	.favBtn-nav {
		// left:-50rpx;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/fav/fav)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/fav/fav)