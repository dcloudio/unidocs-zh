### tabBar 使用高斯模糊效果
<a id="tabbar"/>

HBuilderX 从 2.4.4 版本开始，uni-app iOS 端 TabBar 支持高斯模糊效果（毛玻璃效果）。
HBuilderX 从 3.4.10 版本开始，uni-app Android 端 TabBar 支持高斯模糊效果（毛玻璃效果）。

下面介绍一下如何使用高斯模糊效果，和一些注意事项。

**效果**  
![](https://native-res.dcloud.net.cn/images/uniapp/blureffect/demo.png)


**示例 demo 地址** [https://github.com/dcloudio/BlurEffectDemo](https://github.com/dcloudio/BlurEffectDemo)  （点进去了，记得 star 一波）

#### 实现原理
实现原理很简单，启用高斯模糊效果后，页面会变高（增加 tabBar 的高度），页面布局会延伸到 tabBar 下面，框架会在 tabBar 上自动添加一个高斯模糊效果的视图，然后透过这个视图看下面的内容就会看到模糊的效果。

**使用高斯模糊效果需要注意：**

- 启用高斯模糊效果后，不建议设置 tabBar 的 backgroundColor，如果非要设置的话需要使用 `rgba` 设置透明度，否则看不到模糊效果；
- 由于页面高度发生了变化，因此在页面布局上需要有一些注意事项（很简单），下面会说明 `vue` 及 `nvue` 页面如何适配；并会提供一个 demo，供大家参考；
- 启用高斯模糊效果后不要动态设置 tabBar 的隐藏，不然会影响页面布局；
- 为了方便开发者适配多平台，框架已经提供了获取 tabBar 高度的方法，并会根据不同平台返回不同的值 `windowBottom`；使用方法如下

	``` js
	// vue中直接在 css 中使用
	.fixed1{
		position: fixed;
		left: 0;
		bottom: var(--window-bottom);
	}
	
	// nvue 不支持css的写法，请使用 js 方法 获取
	uni.getSystemInfoSync().windowBottom
	```

#### 启用高斯模糊效果

首先需要在 `manifest.json` 的 `app-plus`节点下添加 `safearea` 的配置，`bottom` 的 `offset` 设置为 `none`，这样平台会自动处理 iPhoneX 等全面屏机型的高度适配，不然在全面屏机型上可能会出现页面被遮挡的问题

``` json
// manifest.json
"app-plus": {
	...
	"safearea" : {
		 "bottom" : {
		      "offset" : "none"
		 }
	}
	...
}
```

然后在 `pages.json` 中添加 `tabBar` 的配置信息，并配置 `blurEffect` 值

``` json
{
	...
	...
	
	"tabBar": {
		"blurEffect":"extralight",
		"color": "#999999",
		"borderStyle": "#000000",
		// 注意：启用高斯模糊效果后不建议设置backgroundColor，如果需要设置的需要使用 rgba 设置透明度，不然看不到模糊效果
		// "backgroundColor": "rgba(0,255,51,0.3)",
		"spacing": "5px",
		"height": "50px",
		"selectedColor": "#0062cc",
		"list": [
		{
		    "text" : "HELLO",
		    "iconPath" : "static/ic_tabbar_home_nor.png",
		    "selectedIconPath" : "static/ic_tabbar_home_sel.png",
			"pagePath": "pages/index/index"
		},
		{
		    "text" : "WORLD",
		    "iconPath" : "static/ic_tabbar_group_nor.png",
		    "selectedIconPath" : "static/ic_tabbar_group_sel.png",
			"pagePath": "pages/index/page"
		}]
	}
}

```

blurEffect 对应的就是高斯模糊的配置，可取值： 

- "dark" - 暗风格模糊，对应iOS原生UIBlurEffectStyleDark效果；
- "extralight" - 高亮风格模糊，对应iOS原生UIBlurEffectStyleExtraLight效果； 
- "light" - 亮风格模糊，对应iOS原生UIBlurEffectStyleLight效果； 
- "none" - 无模糊效果。

##### vue 页面适配

- 添加占位视图：由于页面高度变高了，页面会被 tabBar 挡住，所以需要在页面最下面添加一个占位视图，高度设置为 tabBar 的高度，这样页面的元素就不会被 tabBar 挡住了（启用高斯模糊效果，框架会自动处理滚动条底部的偏移不会被tabBar遮挡）；
- 绝对定位注意事项：同样因为页面高度变化了，绝对定位的视图需要考虑 tabBar 的遮挡问题，例如想要一个 view 固定在页面最底部，需要设置 bottom 值为 tabBar 的高度即可；

示例（源码请参考示例工程的 index.vue）

``` vue
<template>
	<view class="content">
		<image v-for="index in 3" :key='index' src="../../static/test.png" style="width: 750rpx; height: 1136rpx;" mode="scaleToFill"></image>
		<!-- 在页面最下方添加占位视图，高度等于 tabBar 的高度 -->
		<view class="edgeInsetBottom"></view>
		<!-- 绝对定位的视图需要考虑 tabBar 遮挡的问题，bottom 应该加上 tabBar 的高度 -->
		<view class="fixedView"></view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				tabbarHeight:0
			}
		},
		onReady() {
			// 获取 tabBar 的高度
			this.tabbarHeight = uni.getSystemInfoSync().windowBottom;
		}
	}
</script>
<style>
	.content {
		background-color: #FFFFFF;
		line-height: 0;
	}
	
	.edgeInsetBottom {
		width: 750rpx;
height: var(--window-bottom);
		background-color: #FFFFFF;
	}
	
	.fixedView{
		position: fixed;
		width: 750rpx;
		height: 30px;
		background-color: #4CD964;
		bottom: var(--window-bottom);
	}
</style>
```

##### nvue 页面适配
> 因为 nvue 页面为纯原生布局，当启用毛玻璃效果后，原生端框架可以自动调整滚动视图的 contentInset bottom 值，相当于在页面最底部，偏移出 tabbar 的高度，这样页面原有的元素就不会被遮挡，滚动条的位置也会自动处理。注：偏移出的位置显示的是滚动视图的背影颜色；

- 滚动视图添加 adjustBottom="true"：只有添加了 adjustBottom="true" 框架才会自动调整滚动视图的 contentInset bottom 值，**这里有一点需要注意**，如果你的页面整体是滚动的，那么需要你的页面**根节点为滚动视图**然后添加 adjustBottom="true"，如果页面部分是可以滚动的，那就在页面最下面的滚动视图添加 adjustBottom="true" 属性；（技巧就是会被 tabBar 遮挡住的滚动视图添加属性）
- 绝对定位注意事项：跟vue页面一样，绝对定位的视图需要考虑 tabBar 的遮挡问题，例如想要一个 view 固定在页面最底部，需要设置 bottom 值为 tabBar 的高度即可；

示例

``` vue
<template>
	<!-- 页面根节点为滚动视图，并添加 adjustBottom="true" -->
	<scroll-view class="content" scroll-y="true" adjustBottom="true">
		<image v-for="index in 3" :key='index' src="../../static/test.png" style="width: 750rpx; height: 1136rpx;" mode="scaleToFill"></image>
		<!-- 绝对定位的视图需要考虑 tabBar 遮挡的问题，bottom 应该加上 tabBar 的高度 -->
		<view class="fixedView" :style="{ bottom : tabbarHeight + 'px'}"></view>
	</scroll-view>
</template>
<script>
	export default {
		data() {
			return {
				tabbarHeight: 0
			}
		},
		onReady() {
			// 获取 tabBar 的高度
			this.tabbarHeight = uni.getSystemInfoSync().windowBottom;
		}
	}
</script>
<style>
	.content {
		background-color: #FFFFFF;
		line-height: 0;
	}

	.fixedView{
		position: fixed;
		width: 750rpx;
		height: 30px;
		background-color: #4CD964;
	}
</style>
```


<a id="navigationbar"/>

### navigation-bar 使用高斯模糊效果  
HBuilderX 从 2.4.4 版本开始，uni-app iOS 端 navigationBar 支持高斯模糊效果（毛玻璃效果）。
HBuilderX 从 3.4.10 版本开始，uni-app Android 端 navigationBar 支持高斯模糊效果（毛玻璃效果）。

#### 使用方法  
页面 style --> app-plus --> titleNView中添加 `blurEffect` 属性启用高斯模糊效果

- "dark" - 暗风格模糊，对应iOS原生UIBlurEffectStyleDark效果；
- "extralight" - 高亮风格模糊，对应iOS原生UIBlurEffectStyleExtraLight效果； 
- "light" - 亮风格模糊，对应iOS原生UIBlurEffectStyleLight效果； 
- "none" - 无模糊效果。

示例

``` json
{
	"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "vue",
				"app-plus":{
					"bounce":"vertical",
					"titleNView": {
						"blurEffect":"extralight",
						"backgroundColor": "#00ffffff",
						"type" : "float"
					}
				}
			}
		}
}
```

注意：backgroundColor需要设置带有透明度颜色才能看到高斯模糊效果。不设置backgroundColor也无法看到高斯模糊效果！


<a id="view"/>

### nvue view组件使用高斯模糊效果  
HBuilderX 从 2.4.8+ 版本开始，IOS 端 nvue view组件支持高斯模糊效果（毛玻璃效果）。

**效果**  
![](https://native-res.dcloud.net.cn/images/uniapp/blureffect/nvue.png)

#### 使用方法  
在 view 组件中添加 `blurEffect` 属性启用高斯模糊效果，取值同 TabBar

- "dark" - 暗风格模糊，对应iOS原生UIBlurEffectStyleDark效果；
- "extralight" - 高亮风格模糊，对应iOS原生UIBlurEffectStyleExtraLight效果； 
- "light" - 亮风格模糊，对应iOS原生UIBlurEffectStyleLight效果； 
- "none" - 无模糊效果。

**注意事项**  
- 启用高斯模糊效果后，不建议设置 background-color，如果非要设置的话需要使用 `rgba` 设置透明度，否则看不到模糊效果；
- 启用高斯模糊效果后相当于 view 组件对应的视图变成了毛玻璃，透过 view 看下面的内容会有模糊效果， view 上添加的视图不受影响；

示例  
``` vue
<template>
	<view class="container">
		<image src="../../static/3.jpg" class="img" mode="aspectFill"></image>
		<view class="blur" blurEffect="light">
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>
<style>
	.container{
		flex: 1;
	}
	.img {
		flex: 1;
	}
	
	.blur{
		position: fixed;
		top: 300rpx;
		bottom: 300rpx;
		left: 20px;
		right: 20px;
		/* background-color: rgba(152,245,255,0.3); */
	}
</style>
```

