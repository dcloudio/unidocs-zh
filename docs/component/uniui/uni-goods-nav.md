::: tip 组件名：uni-goods-nav
::: tip component name: uni-goods-nav
> 代码块： `uGoodsNav`
> Code block: `uGoodsNav`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav)
:::

商品加入购物车，立即购买
Add product to cart, buy now

## 介绍
## introduce
### 基本用法
### Basic usage

```html
<template>
	<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
</template>
<script>

export default {
	data () {
	  return {
	    options: [{
			icon: 'headphones',
			text: '客服'
		}, {
			icon: 'shop',
			text: '店铺',
			info: 2,
			infoBackgroundColor:'#007aff',
			infoColor:"red"
		}, {
			icon: 'cart',
			text: '购物车',
			info: 2
		}],
	    buttonGroup: [{
	      text: '加入购物车',
	      backgroundColor: '#ff0000',
	      color: '#fff'
	    },
	    {
	      text: '立即购买',
	      backgroundColor: '#ffa200',
	      color: '#fff'
	    }
	    ]
	  }
	},
	methods: {
	  onClick (e) {
	    uni.showToast({
	      title: `点击${e.content.text}`,
	      icon: 'none'
	    })
	  },
	  buttonClick (e) {
	    console.log(e)
	    this.options[2].info++
	  }
	}
}
</script>
```

## API

### GoodsNav Props

|属性名		|类型	|默认值	|说明			|
|property name |type |default value |description |
|:-:		|:-:	|:-:	|:-:			|
|options	|Array	|-		|组件参数		|
|options |Array |- |Component Parameters |
|buttonGroup|Array	|-		|组件按钮组参数	|
|buttonGroup|Array |- |Component button group parameters |
|fill		|Boolean|false	|按钮是否平铺	|
|fill |Boolean|false |Whether the button is tiled |


**options 参数说明：**
**options parameter description:**

|属性名				|类型	|默认值	|说明													|
|property name |type |default value |description |
|:-:				|:-:	|:-:	|:-:													|
|text				|String	|-		|显示文字												    |
|text |String |- |Display text |
|icon				|String	|		|图标，[参考](https://ext.dcloud.net.cn/plugin?id=28)	    |
|icon |String | |icon, [reference](https://ext.dcloud.net.cn/plugin?id=28) |
|info				|Number	|0		|右上角数字角标											|
|info |Number |0 |Number in the upper right corner |
|infoBackgroundColor|String	|#ff0000|角标背景色												|
|infoBackgroundColor|String |#ff0000|Corner background color |
|infoColor			|String	|#fff	|角标前景色												|
|infoColor |String |#fff |Corner Foreground Color |

**buttonGroup 参数说明：**
**buttonGroup parameter description:**

|属性名				|类型	|默认值	|说明		|
|property name |type |default value |description |
|:-:				|:-:	|:-:	|:-:		|
|text				|String	|-		|按钮文字		|
|text |String |- |Button Text |
|backgroundColor	|String	|-		|按钮背景色	|
|backgroundColor |String |- |Button background color |
|color				|String	|-		|字体颜色		|
|color |String |- |Font Color |

### GoodsNav Events

|事件名			|说明				|返回值				|
|Event Name |Description |Return Value |
|:-:			|:-:				|:-:				|
|@click			|左侧点击事件			|e = {index,content}|
|@click |left click event |e = {index,content}|
|@buttonClick	|右侧按钮组点击事件	|e = {index,content}|
|@buttonClick |Right button group click event |e = {index,content}|



## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/goods-nav/goods-nav
> Template
``` html
<template>
	<view class="uni-container">
		<uni-card is-full>
			<text class="uni-h6"> uni-goods-nav 组件主要用于电商类应用底部导航，可自定义加入购物车，购买等操作</text>
		</uni-card>
		<uni-section title="基础用法" type="line">
			<uni-goods-nav @click="onClick" />
		</uni-section>
		<uni-section title="自定义用法" type="line">
			<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup" @click="onClick"
				@buttonClick="buttonClick" />
			<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup1" @click="onClick"
				@buttonClick="buttonClick" style="margin-top: 20px;" />
		</uni-section>
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
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
				options: [{
					icon: 'chat',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "#f5f5f5"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
						color: '#fff'
					}
				],
				customButtonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #1E83FF, #0053B8)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #60F3FF, #088FEB)',
						color: '#fff'
					}
				],
				customButtonGroup1: [{
					text: '立即购买',
					backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
					color: '#fff'
				}]
			}
		},
		onLoad() {},
		methods: {
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>
``` 

> Style
``` html
<style lang="scss">
	.example-body {
		padding: 0;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/goods-nav/goods-nav)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/goods-nav/goods-nav)