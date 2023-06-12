
::: tip 组件名：uni-swiper-dot
> 代码块： `uSwiperDot`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-swiper-dot)
:::

自定义轮播图指示点

## 介绍
::: warning 注意事项
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
- 本组件依赖 `swiper` 组件,请与`swiper`组件配合使用
- `width` 与 `height` 如非必要，请勿设置过大，或者过小
- `swiper-item` 尽量控制在一定数量之内，否则指示点可能会超出屏幕
- 暂不支持垂直方向的指示点
:::
### 基本用法

在 ``template`` 中的使用

```html
<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
	<swiper class="swiper-box" @change="change">
		<swiper-item v-for="(item ,index) in info" :key="index">
			<view class="swiper-item">
				{{item.content}}
			</view>
		</swiper-item>
	</swiper>
</uni-swiper-dot>
```

```javascript
export default {
	data() {
		return {
			info: [{
				content: '内容 A'
			}, {
				content: '内容 B'
			}, {
				content: '内容 C'
			}],
			current: 0,
			mode: 'round',
		}
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		}
	}
}
```

## API

### SwiperDot Props 

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|current|Number	|0|当前指示点索引，必须是通过 `swiper` 的 `change` 事件获取到的 `e.detail.current`|
|mode|String|default|指示点的类型，可选值：default 、round 、nav	 、 indexes|
|field|String|-| mode 为 nav 时，显示的内容字段（mode = nav 时必填）|
|info|Array	|-|轮播图的数据，通过数组长度决定指示点个数|
|dotsStyles	|Object	|-|指示点样式|

#### dotsStyles Options

|属性名|类型	|默认值|说明|
|:-:|:-:|:-:|:-:|
|width|Number| 8|指示点宽度 **在 mode = nav、mode = indexes 时不生效**|
|bottom|Number	| 10|指示点距 `swiper` 底部的高度|
|color|Color	| '#fff'|指示点前景色，**只在 mode = nav ，mode = indexes 时生效**	|
|backgroundColor|Color	| 'rgba(0, 0, 0, .3)'|未选择指示点背景色|
|border|Border	| '1px rgba(0, 0, 0, .3) solid'	|未选择指示点边框样式|
|selectedBackgroundColor|Color	| '#333'|已选择指示点背景色，**在 mode = nav 时不生效**|
|selectedBorder|Border	| '1px rgba(0, 0, 0, .9) solid'	|已选择指示点边框样式，**在 mode = nav 时不生效**|

## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-swiper-dot) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/swiper-dot/swiper-dot
> Template
``` html
<template>
	<view class="content">
		<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="info" :current="current" :mode="mode"
			:dots-styles="dotsStyles" field="content">
			<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
				<swiper-item v-for="(item, index) in 3" :key="index">
					<view class="swiper-item" :class="'swiper-item' + index">
						<text style="color: #fff; font-size: 32px;">{{index+1}}</text>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<uni-section title="模式选择" type="line">
			<view class="example-body">
				<view :class="{ active: modeIndex === 0 }" class="example-body-item" @click="selectMode('default', 0)">
					<text class="example-body-item-text">default</text></view>
				<view :class="{ active: modeIndex === 1 }" class="example-body-item" @click="selectMode('dot', 1)"><text
						class="example-body-item-text">dot</text></view>
				<view :class="{ active: modeIndex === 2 }" class="example-body-item" @click="selectMode('round', 2)">
					<text class="example-body-item-text">round</text></view>
				<view :class="{ active: modeIndex === 3 }" class="example-body-item" @click="selectMode('nav', 3)"><text
						class="example-body-item-text">nav</text></view>
				<view :class="{ active: modeIndex === 4 }" class="example-body-item" @click="selectMode('indexes', 4)">
					<text class="example-body-item-text">indexes</text></view>
			</view>
		</uni-section>

		<uni-section title="颜色样式选择" type="line">
			<view class="example-body">
				<template v-if="mode !== 'nav'">
					<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index"
						class="example-body-item" @click="selectStyle(index)">
						<view :style="{ 'background-color': item.selectedBackgroundColor, border: item.selectedBorder }"
							class="example-body-dots" />
						<view :style="{ 'background-color': item.backgroundColor, border: item.border }"
							class="example-body-dots" />
						<view :style="{ 'background-color': item.backgroundColor, border: item.border }"
							class="example-body-dots" />
					</view>
				</template>
				<template v-if="mode === 'nav'">
					<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index"
						:style="{ 'background-color': item.selectedBackgroundColor }" class="example-body-item"
						@click="selectStyle(index)">
						<text class="example-body-item-text" :style="{ color: item.color }">内容</text>
					</view>
				</template>
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
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
						content: '内容 C'
					}
				],
				dotStyle: [{
						backgroundColor: 'rgba(0, 0, 0, .3)',
						border: '1px rgba(0, 0, 0, .3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
						selectedBorder: '1px rgba(0, 0, 0, .9) solid'
					},
					{
						backgroundColor: 'rgba(255, 90, 95,0.3)',
						border: '1px rgba(255, 90, 95,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
						selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
					},
					{
						backgroundColor: 'rgba(83, 200, 249,0.3)',
						border: '1px rgba(83, 200, 249,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
						selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
					}
				],
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				mode: 'default',
				dotsStyles: {},
				swiperDotIndex: 0
			}
		},
		onLoad() {},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
			selectStyle(index) {
				this.dotsStyles = this.dotStyle[index]
				this.styleIndex = index
			},
			selectMode(mode, index) {
				this.mode = mode
				this.modeIndex = index
				this.styleIndex = -1
				this.dotsStyles = this.dotStyle[0]
			},
			clickItem(e) {
				this.swiperDotIndex = e
			},
			onBanner(index) {
				console.log(22222, index);
			}
		}
	}
</script>
```
> Style
```html
<style lang="scss">
	.swiper-box {
		height: 200px;
	}

	.swiper-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 200px;
		color: #fff;
	}

	.swiper-item0 {
		background-color: #cee1fd;
	}

	.swiper-item1 {
		background-color: #b2cef7;
	}

	.swiper-item2 {
		background-color: #cee1fd;
	}

	.image {
		width: 750rpx;
	}

	/* #ifndef APP-NVUE */
	::v-deep .image img {
		-webkit-user-drag: none;
		-khtml-user-drag: none;
		-moz-user-drag: none;
		-o-user-drag: none;
		user-drag: none;
	}

	/* #endif */

	@media screen and (min-width: 500px) {
		.uni-swiper-dot-box {
			width: 400px;
			margin: 0 auto;
			margin-top: 8px;
		}

		.image {
			width: 100%;
		}
	}

	.uni-bg-red {
		background-color: #ff5a5f;
	}

	.uni-bg-green {
		background-color: #09bb07;
	}

	.uni-bg-blue {
		background-color: #007aff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 20rpx;
	}

	.example-body-item {

		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 15rpx;
		padding: 15rpx;
		height: 60rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		padding: 0 15rpx;
		/* #endif */
		flex: 1;
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		border-radius: 5px;
	}

	.example-body-item-text {
		font-size: 28rpx;
		color: #333;
	}

	.example-body-dots {
		width: 16rpx;
		height: 16rpx;
		border-radius: 50px;
		background-color: #333333;
		margin-left: 10rpx;
	}

	.active {
		border-style: solid;
		border-color: #007aff;
		border-width: 1px;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/swiper-dot/swiper-dot)