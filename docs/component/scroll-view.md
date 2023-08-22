# scroll-view

可滚动视图区域。用于区域滚动。

需注意在webview渲染的页面中，区域滚动的性能不及页面滚动。

## 属性说明

|属性名					|类型		|默认值	|说明																							|平台差异说明	|
|:-						|:-			|:-		|:-																								|:-			|
|scroll-x				|Boolean	|false	|允许横向滚动																					|			|
|scroll-y				|Boolean	|false	|允许纵向滚动																					|			|
|upper-threshold		|Number/String		|50		|距顶部/左边多远时（单位px），触发 scrolltoupper 事件											|			|
|lower-threshold		|Number/String		|50		|距底部/右边多远时（单位px），触发 scrolltolower 事件											|			|
|scroll-top				|Number/String		|		|设置竖向滚动条位置																				|			|
|scroll-left			|Number/String		|		|设置横向滚动条位置																				|			|
|scroll-into-view		|String		|		|值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素				|			|
|scroll-with-animation	|Boolean	|false	|在设置滚动条位置时使用动画过渡																	|			|
|enable-back-to-top		|Boolean	|false	|iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向								|app-nvue，微信小程序	|
|show-scrollbar         |Boolean	|false	|控制是否出现滚动条| App-nvue 2.1.5+ |
|refresher-enabled		|Boolean	|false	|开启自定义下拉刷新|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-threshold	|Number		|45		|设置自定义下拉刷新阈值|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-default-style|String		|"black"|设置自定义下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-background	|String		|"#FFF" |设置自定义下拉刷新区域背景颜色|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-triggered	|Boolean	|false	|设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|enable-flex|Boolean|false|启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点。|微信小程序 2.7.3|
|scroll-anchoring|Boolean|false|开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性。|微信小程序 2.8.2|
|@scrolltoupper			|EventHandle|		|滚动到顶部/左边，会触发 scrolltoupper 事件														|			|
|@scrolltolower			|EventHandle|		|滚动到底部/右边，会触发 scrolltolower 事件														|			|
|@scroll				|EventHandle|		|滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}	|&nbsp;|
|@refresherpulling		|EventHandle|		|自定义下拉刷新控件被下拉|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|@refresherrefresh		|EventHandle|		|自定义下拉刷新被触发|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|@refresherrestore		|EventHandle|		|自定义下拉刷新被复位|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|@refresherabort		|EventHandle|		|自定义下拉刷新被中止|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|

使用竖向滚动时，需要给 ``<scroll-view>`` 一个固定高度，通过 css 设置 height；使用横向滚动时，需要给``<scroll-view>``添加``white-space: nowrap;``样式。
 
## 示例

[查看演示](https://hellouniapp.dcloud.net.cn/pages/component/scroll-view/scroll-view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。

::: preview https://hellouniapp.dcloud.net.cn/pages/component/scroll-view/scroll-view
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				Vertical Scroll
				<text>\n纵向滚动</text>
			</view>
			<view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view @tap="goTop" class="uni-link uni-center uni-common-mt">
				点击这里返回顶部
			</view>
		
			<view class="uni-title uni-common-mt">
				Horizontal Scroll
				<text>\n横向滚动</text>
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view class="uni-common-pb"></view>
		</view>
	</view>
</template>
```
> Script
```vue
<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>
```
> Style
```vue
<style>
	.scroll-Y {
		height: 300rpx;
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
</style>
```

:::

### 自定义下拉刷新

注意，在webview渲染时，自定义下拉刷新的性能不及pages.json中配置的原生下拉刷新。

::: preview
> Template
```vue
<template>
    <view>
        <scroll-view style="height: 300px;" scroll-y="true" refresher-enabled="true" :refresher-triggered="triggered"
            :refresher-threshold="100" refresher-background="lightgreen" @refresherpulling="onPulling"
            @refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort"></scroll-view>
    </view>
</template>
```

> Script
```vue
<script>
    export default {
        data() {
            return {
                triggered: false
            }
        },
        onLoad() {
            this._freshing = false;
            setTimeout(() => {
                this.triggered = true;
            }, 1000)
        },
        methods: {
            onPulling(e) {
                console.log("onpulling", e);
            },
            onRefresh() {
                if (this._freshing) return;
                this._freshing = true;
                setTimeout(() => {
                    this.triggered = false;
                    this._freshing = false;
                }, 3000)
            },
            onRestore() {
                this.triggered = 'restore'; // 需要重置
                console.log("onRestore");
            },
            onAbort() {
                console.log("onAbort");
            }
        }
    }
</script>

```
:::
 
## webview中使用scroll-view的注意@webviewtips

- 原生组件嵌套问题
	* APP-vue，scroll-view 中避免使用 map、video 等原生组件。
	* 微信基础库2.4.4起支持了原生组件在 scroll-view、swiper、movable-view 中的使用。但并非所有小程序都支持，需具体查询各家小程序webview是否实现了同层渲染。
- 长列表性能问题
	* scroll-view 不适合放长列表，有性能问题。webview渲染时，建议改用webview的页面滚动；app-nvue需使用list组件；app-uvue需使用list-view组件。
	* 如果您一定要在webview中实现区域长列表，建议使用三方如better-scroll组件，或者插件市场搜索 [虚拟列表](https://ext.dcloud.net.cn/search?q=%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8)，这些专业组件实现了dom复用，即便列表很长也不会创建很多dom。
- 下拉刷新问题
	* webview渲染时，建议使用页面级的原生下拉刷新，性能更好。如一定要在webview中自定义下拉刷新，建议插件市场搜索[虚拟列表](https://ext.dcloud.net.cn/search?q=%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0)，这些专业组件使用wxs、renderjs等技术避免通信阻塞。
- scroll-view是区域滚动，不会触发页面滚动，无法触发pages.json配置的下拉刷新、页面触底onReachBottomDistance、titleNView的transparent透明渐变。但在app-uvue下，scroll-view如果是页面顶级节点，则等同于页面滚动。[详见](../uni-app-x/css/readme.md#pagescroll)
- webview渲染时，scroll-view的滚动条设置，可通过css的-webkit-scrollbar自定义，包括隐藏滚动条。

在app-uvue中，其实没有页面级滚动，scroll-view也不存在原生组件层级、下拉刷新性能问题。但app-uvue里使用长列表，请务必使用list-view组件，这个组件内置了recycle-view机制，不管列表多长，都可以通过回收不显示的列表来保证高性能。[详见](list-view.md)

## 其他注意事项
- scroll-into-view 的优先级高于 scroll-top。
- 如果遇到scroll-top、scroll-left、refresher-triggered属性设置不生效的问题参考：[组件属性设置不生效解决办法](/tutorial/vue-api?id=componentsolutions)
