<md-translatedByGoogle />
### scroll-view

可滚动视图区域。用于区域滚动。
Scrollable view area. Used for zone scrolling.

需注意在webview渲染的页面中，区域滚动的性能不及页面滚动。
Please note that in the page rendered by webview, the performance of area scrolling is not superior to page scrolling.

**属性说明**
**Attribute description**

|属性名					|类型		|默认值	|说明																							|平台差异说明	|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-						|:-			|:-		|:-																								|:-			|
|scroll-x				|Boolean	|false	|允许横向滚动																					|			|
| scroll-x| Boolean| false| Horizontal scrolling is allowed| |
|scroll-y				|Boolean	|false	|允许纵向滚动																					|			|
| scroll-y| Boolean| false| Vertical scrolling is allowed| |
|upper-threshold		|Number/String		|50		|距顶部/左边多远时（单位px），触发 scrolltoupper 事件											|			|
|upper-threshold |Number/String |50 |How far from the top/left (unit px), trigger the scrolltoupper event | |
|lower-threshold		|Number/String		|50		|距底部/右边多远时（单位px），触发 scrolltolower 事件											|			|
|lower-threshold |Number/String |50 |How far from the bottom/right (unit px), the scrolltolower event is triggered | |
|scroll-top				|Number/String		|		|设置竖向滚动条位置																				|			|
|scroll-top |Number/String | |Set vertical scroll bar position | |
|scroll-left			|Number/String		|		|设置横向滚动条位置																				|			|
|scroll-left |Number/String | |Set horizontal scroll bar position | |
|scroll-into-view		|String		|		|值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素				|			|
| scroll-into-view| String| | The value should be a child element id (id cannot start with a number). If the scrollable direction is set, it scrolls to the element in that direction| |
|scroll-with-animation	|Boolean	|false	|在设置滚动条位置时使用动画过渡																	|			|
| scroll-with-animation| Boolean| false| Use animation to transition when setting scroll bar location| |
|enable-back-to-top		|Boolean	|false	|iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向								|app-nvue，微信小程序	|
|enable-back-to-top |Boolean |false |When iOS clicks the top status bar, Android double-clicks the title bar, the scroll bar returns to the top, only supports vertical |app-nvue, WeChat applet |
|show-scrollbar         |Boolean	|false	|控制是否出现滚动条| App-nvue 2.1.5+ |
| show-scrollbar| Boolean| false| Control whether scroll bars appear| App-nvue 2.1.5+|
|refresher-enabled		|Boolean	|false	|开启自定义下拉刷新|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-enabled |Boolean |false |Enable custom pull-down refresh|H5, app-vue 2.5.12+, WeChat Mini Program Basic Library 2.10.1+|
|refresher-threshold	|Number		|45		|设置自定义下拉刷新阈值|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-threshold |Number |45 |Set custom pull-down refresh threshold|H5, app-vue 2.5.12+, WeChat Mini Program Basic Library 2.10.1+|
|refresher-default-style|String		|"black"|设置自定义下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-default-style|String |"black"|Set the default style of custom pull-down refresh, support setting black, white, none, none means not to use the default style|H5, app-vue 2.5.12+, WeChat applet basics Libraries 2.10.1+|
|refresher-background	|String		|"#FFF" |设置自定义下拉刷新区域背景颜色|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-background |String |"#FFF" |Set the background color of the custom pull-down refresh area|H5, app-vue 2.5.12+, WeChat Mini Program Basic Library 2.10.1+|
|refresher-triggered	|Boolean	|false	|设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-triggered |Boolean |false |Set the current pull-down refresh status, true means pull-down refresh has been triggered, false means pull-down refresh has not been triggered |H5, app-vue 2.5.12+, WeChat Mini Program Basic Library 2.10.1+ |
|enable-flex|Boolean|false|启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点。|微信小程序 2.7.3|
|enable-flex|Boolean|false|Enable flexbox layout. When enabled, the current node declares display: flex and it becomes a flex container and acts on its child nodes. |WeChat Mini Program 2.7.3|
|scroll-anchoring|Boolean|false|开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性。|微信小程序 2.8.2|
|scroll-anchoring|Boolean|false|Enable the scroll anchoring feature, that is, control the scroll position to not shake with the content change. It only takes effect under iOS. For Android, you can refer to the CSS overflow-anchor property. |WeChat Mini Program 2.8.2|
|@scrolltoupper			|EventHandle|		|滚动到顶部/左边，会触发 scrolltoupper 事件														|			|
| @scrolltoupper| EventHandle| | Scrolling to the top/left will trigger scrolltoupper event| |
|@scrolltolower			|EventHandle|		|滚动到底部/右边，会触发 scrolltolower 事件														|			|
| @scrolltolower| EventHandle| | Scrolling to the bottom/right will trigger scrolltolower event| |
|@scroll				|EventHandle|		|滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}	|&nbsp;|
| @scroll| EventHandle| | Triggered when scrolling, event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}|  |
|@refresherpulling		|EventHandle|		|自定义下拉刷新控件被下拉|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|@refresherpulling |EventHandle| |The custom pull-down refresh control is pulled down|H5, app-vue 2.5.12+, WeChat Mini Program Basic Library 2.10.1+|
|@refresherrefresh		|EventHandle|		|自定义下拉刷新被触发|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|@refresherrefresh |EventHandle| |Custom pull-down refresh is triggered|H5, app-vue 2.5.12+, WeChat applet basic library 2.10.1+|
|@refresherrestore		|EventHandle|		|自定义下拉刷新被复位|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|@refresherrestore |EventHandle| |Custom pull-down refresh is reset|H5, app-vue 2.5.12+, WeChat Mini Program Basic Library 2.10.1+|
|@refresherabort		|EventHandle|		|自定义下拉刷新被中止|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|@refresherabort |EventHandle| |Custom pull-down refresh is aborted|H5, app-vue 2.5.12+, WeChat Mini Program Basic Library 2.10.1+|

使用竖向滚动时，需要给 ``<scroll-view>`` 一个固定高度，通过 css 设置 height；使用横向滚动时，需要给``<scroll-view>``添加``white-space: nowrap;``样式。
When using vertical scrolling, you need to give `<scroll-view>` a fixed height and set the height through css; When using horizontal scrolling, you need to add the style of `white-space: nowrap;` to `<scroll-view>`.
 
**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/scroll-view/scroll-view)
**Example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/scroll-view/scroll-view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.

::: preview https://hellouniapp.dcloud.net.cn/pages/component/scroll-view/scroll-view
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
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
				// Solve the problem that the view layer is out of sync
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
### Custom pull down to refresh

注意自定义下拉刷新的性能不及pages.json中配置的原生下拉刷新。
Note that the performance of custom pull-down refresh is not superior to the native pull-down refresh configured in pages.json.

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
 
**Tips**

- APP-vue和小程序中，请勿在 scroll-view 中使用 map、video 等原生组件。小程序中 scroll-view 中也不要使用 canvas、textarea 原生组件。更新：微信基础库2.4.4起支持了原生组件在 scroll-view、swiper、movable-view 中的使用。app-nvue无此限制。
- In APP-vue and applets, do not use native components such as map and video in scroll-view. Also do not use canvas and textarea native components in the scroll-view of the applet. Update: Wechat Basic Library 2.4.4 supports the use of native components in scroll-view, swiper, and movable-view. app-nvue does not have this limitation.
- scroll-view 不适合放长列表，有性能问题。长列表滚动和下拉刷新，应该使用原生导航栏搭配页面级的滚动和下拉刷新实现。包括在app-nvue页面，长列表应该使用list而不是scroll-view。
- scroll-view is not suitable for  long lists, or otherwise perlistance problems would occur. Long list scrolling and pull-down refreshing should be realized by using native navigation bar with page-level scrolling and pull-down refreshing. Long list should use list instead of scroll-view even on app-nvue pages.
- scroll-into-view 的优先级高于 scroll-top。
- scroll-into-view has a higher priority than scroll-top.
- scroll-view是区域滚动，不会触发页面滚动，无法触发pages.json配置的下拉刷新、页面触底onReachBottomDistance、titleNView的transparent透明渐变。
- scroll-view runs in area scrolling, which will not trigger page scrolling, and cannot trigger the pull-down refresh configured by pages.json, onReachBottomDistance, and the transparent gradient of titleNView.
- 若要使用下拉刷新，建议使用页面的滚动，而不是 scroll-view 。插件市场有前端模拟的基于scroll-view的下拉刷新，但性能不佳。如必需使用前端下拉刷新，推荐使用基于wxs的下拉刷新，性能会比基于js监听方式更高。
- To use pull-down refresh, it is recommended to use page scrolling instead of scroll-view. There is a scroll-view-based pull-down refresh based on the front-end analog available in the plug-in market, but with poor performance. If front-end pull-down refresh is necessary, pull-down refresh based on wxs is recommended, whose performance is higher than that based on js listening to.
- 如果遇到scroll-top、scroll-left、refresher-triggered属性设置不生效的问题参考：[组件属性设置不生效解决办法](/tutorial/vue-api?id=componentsolutions)
- If you encounter the problem that scroll-top, scroll-left, refresher-triggered property settings do not take effect, please refer to: [Component property settings do not take effect solution](/tutorial/vue-api?id=componentsolutions)
- scroll-view的滚动条设置，可通过css的-webkit-scrollbar自定义，包括隐藏滚动条。（app-nvue无此css）
- Scroll bar settings of scroll-view can be customized by -webkit-scrollbar of css, including hiding scroll bar. (app-nvue does not have this css)
