# `uni-app x 并未发布，本文档为内部使用`

# uni-app x 是什么？

uni-app x，是下一代 uni-app，是一个跨平台应用开发引擎。

在App端，uni-app x 在iOS编译为swift、在Android编译为kotlin。没有使用js引擎、webview，完全达到了原生应用的功能、性能。

uni-app x 是一个庞大的工程，它包括uts语言、uvue渲染引擎、uni的组件和API、以及扩展机制。

## 1. uts语言

uts 全称 uni type script，是一门跨平台的、高性能的、强类型的现代编程语言。它在不同平台，会被编译为不同平台的native语言，如：

> * web/小程序平台，编译为JavaScript
> * Android平台，编译为Kotlin
> * iOS平台，编译Swift

uts和ts很相似，但为了跨端，uts进行了一些约束和特定平台的增补。详见 [uts语言介绍](https://uniapp.dcloud.net.cn/uts/)

开发者在 uni-app x 中，不能编写js，因为 uni-app x 中不自带js引擎。需使用uts，实现跨端的同时保证最佳性能。

## 2. uvue渲染引擎

uts替代的是js，而uvue替代的就是html和css。或者如果你了解flutter的话，也可以理解为uts对标dart，而uvue对标flutter。

uvue是一套基于uts的、兼容vue语法的、跨iOS和Android的、原生渲染引擎。

uvue渲染引擎包括原生版的vue框架（组件、数据绑定...）、跨平台基础ui、css引擎。

有了uvue，开发者就可以使用vue语法写一套页面，编译为高性能的纯原生界面。

在过去的跨平台方案中，逻辑层和ui层的通信始终是痛点。

> * 所以在webview渲染时，增加了renderjs、wxs等技术
> * 所以在nvue渲染时，增加了bindingX技术
> * 所以在skyline渲染时，增加了worklet技术

但这些补丁技术都不治根。过去只有flutter解决了dart和ui层的通信问题，但dart和原生层通信也还是有延时。

在 uni-app x 中，App端只有1种编程语言（Android里是kotlin），再也没有通信问题。

对于原生应用开发者而言，uvue提供了更快捷、更舒服的界面开发方式，并且不降低性能。

在 uni-app x 中，项目的页面和组件，后缀名都是uvue。而uvue文件里的script，也只能写uts。

一个uvue页面的例子：
```html
<template>
	<view class="content">
		<button @click="buttonClick">{{title}}</button>
	</view>
</template>

<script> //这里只能写uts
	export default {
		data() {
			return {
				title: "Hello world"
			}
		},
		onLoad() {
			console.log('onLoad')
		},
		methods: {
			buttonClick: function () {
				uni.showModal({
					"showCancel": false,
					"content": "点了按钮"
				})
			}
		}
	}
</script>

<style>
	.content {
		width: 750rpx;
		background-color: white;
	}
</style>

```

> 上述页面没有涉及uts不允许的动态类型，也没有涉及uvue不支持的css，所以它实际上和uni-app js版的vue页面没有区别。

uvue支持的vue语法，是按vue3实现的，但一期uvue不支持setup。详见[vue语法]()

uvue支持的css语法，是web的子集，类似于nvue的css。仅支持flex布局。但也足以布局出需要的界面。详见[css语法]()

以上约束特指App端的uvue引擎。如果把uvue页面编译到小程序和web平台，它的script仍然会被编译为js、它的样式遵循web的样式定义。

## 3. uni的组件

uni-app x 一期，只包括基本的组件和API。

剩余的组件和API，如开发者急用，可自行开发，或者委托插件作者提供相关插件。

目前支持的组件清单：
- [x] view
- [x] scroll-view
- [x] swiper
- [x] text
- [x] image
- [x] button
- [x] input
- [x] textarea
- [x] list
- [x] checkbox
- [x] radio
- [x] switch
- [x] slider
- [x] picker-view
- [x] progress
- [x] webview
- [x] video 暂不支持全屏后放置子组件
- [x] animation-view // 已有uts插件

不支持的组件及替代方案
- movable-view：没有ui层和逻辑层的通信阻塞，开发者可自己写uts拖动view
- picker：可改用picker-view
- canvas：目前没有完整的canvas组件，但每个view，都提供了draw API，可以高性能的画各种形状、贴图、写字。关于截图，无需像webview那样通过canvas中转。view会直接提供截图方案。当然后期会补充完整canvas
- waterfall/grid-view：会补充
- uniCloud-db：会补充
- ad：会补充
- rich-text：可改用web-view渲染；也可以拼接多个text、image组件。
- editor：只能用web-view来加载
- map：需开发uts组件。或使用web-view中的地图
- live-pusher：需开发uts组件
- form
- label


## 4. uni的API

uni-app js引擎版，支持 plus API 和 weex API。但 uni-app x 中，不再支持这些API。

uni自带API，如下为目前支持的清单。

### 基础
* [x] getApp         
* [x] getCurrentPages
* [x] uni.$emit
* [x] uni.$on
* [x] uni.$once
* [x] uni.$off

### 路由
* [x] getApp                  
* [x] getCurrentPages         
* [x] uni.navigateTo          
* [x] uni.redirectTo          
* [x] uni.reLaunch            
* [x] uni.switchTab           
* [x] uni.navigateBack        
* [x] uni.getLaunchOptionsSync
* 不再支持navigationbar和tabbar的很多修改API，如需修改请自定义导航栏。在uni-app x，导航栏仅为方便而存在，没有之前性能优化的意义
* [x] uni.setNavigationBarColor
* [x] uni.hideTabBar
* [x] uni.showTabBar
* [x] uni.setTabBarBadge
* [x] uni.removeTabBarBadge
* [x] uni.showTabBarRedDot
* [x] uni.hideTabBarRedDot
* [x] uni.setTabBarItem
* [x] uni.setTabBarStyle

### 界面
* [x] uni.showToast
* [x] uni.hideToast
* [x] uni.showLoading
* [x] uni.hideLoading
* [x] uni.showModal
* [x] uni.showActionSheet
* [x] uni.pageScrollTo
* [x] uni.loadFontFace
* [x] uni.previewImage		
* [x] uni.closePreviewImage	
* [x] uni.startPullDownRefresh
* [x] uni.stopPullDownRefresh

### 组件
* [x] uni.createVideoContext
* [x] uni.createSelectorQuery

### 网络
* [x] uni.request			
* [x] uni.uploadFile		
* [x] uni.downloadFile		
* [x] uni.getNetworkType	
* [x] uni-websocket的一系列API

### 存储
* [x] uni-storage的一系列API

### 定位
* [x] uni.getLocation 一期仅支持腾讯定位

### 媒体
* [x] uni.chooseImage
* [x] uni.saveImageToPhotosAlbum

### 设备
* [x] uni.getSystemInfo			
* [x] uni.getSystemInfoSync		
* [x] uni.getDeviceInfo			
* [x] uni.getWindowInfo
* [x] uni.getAppBaseInfo
* [x] uni.getSystemSetting
* [x] uni.getAppAuthorizeSetting	
* [x] uni-getbatteryinfo	//已有uts插件
* [x] uni-memeorywarning	//已有uts插件
* [x] uni-wifi	//已有uts插件
* [x] uni-usercapturescreen	//已有uts插件

### 性能
* [x] uni.getPerformance

## 5. 全局文件
- manifest.json 仅支持基本的名称图标配置，暂未支持splash
- AndroidManifest.xml 与原生开发相同
- pages.json 不支持app-plus的内容
- uni.scss 正常支持。但注意uvue仅能使用[css子集](css/README.md)

## 6. 插件兼容

插件市场的uts插件，不管是API插件还是组件，均可同时在 uni-app js引擎版 和 uni-app x 上运行。

这里已经有不少插件：[https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate](https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate)

uni-app js版的“App原生语言插件”无法在 uni-app x 中运行。

前端插件里，可兼容uts前端插件、可兼容uvue组件，即script是uts，style符合uvue的css。

# 自动化测试
uni-app x 从源头重视产品质量，第一个版本就支持自动化测试。并为uni-app x产品编写了数万行自动化测试例代码。

uni-app x 的自动化测试方案和 uni-app js版相同，自动化测试脚本使用js编写（注意不是uts）。整个自动化测试环境，运行在电脑端。

开发者可以为自己的app编写好自动化测试，以提升自己的产品质量。

uni-app 的自动化测试教程详见：[https://uniapp.dcloud.net.cn/worktile/auto/quick-start.html](https://uniapp.dcloud.net.cn/worktile/auto/quick-start.html)

# 一期范围

除上述文档中声明已经完成的，还有如下需要注意：

- 全端支持：一期只有Android。对于其他平台，开发者可将uvue文件后缀改为vue或nvue，如果没有写Android专有代码，那么也可以使用uni-app js引擎版编译到其他平台，包括iOS App、web及各家小程序。尤其在app-iOS上，由于设备性能本就优秀，所以nvue的方案的性能也足够满足挑剔的开发者。后期官方会提供更完善的 uni-app x的全端支持。
- uvue语法：虽然uvue是按vue3实现的，但一期uvue不支持setup，只支持选项式。
- 一期不支持：横屏切换、暗黑模式、自定义转场、多语言、无障碍
- 一期不支持：云开发（已在开发中）、uni-ad。另外包括微信、支付宝、个推等三方sdk封装一期均未启动
- 一期不支持国际区账户创建和打包uni-app x，仅大陆区开发者账户可用。

欢迎去[需求墙](https://vote.dcloud.net.cn/)投票，告诉我们你的需求优先级。

# 历史老项目兼容指南

## uni-app js版老项目迁移指南
1. 首先检查你的老项目里使用的uni组件、api、三方插件、三方库，在uni-app x上是否支持。
2. 对于不支持的，需要自己写uni-app x的插件或去插件市场找替代兼容插件。如果写调用原生的uts代码，需要你了解原生的api。
3. 对于css，如果你之前使用nvue的css，那边迁移到uni-app x在样式上改动很小。如果之前是vue的css，那么需要改为flex布局，以及仅使用uvue支持的css来布局界面。
4. 对于script，如果你之前使用ts，那么改造成本会很低。如果使用js，那需要改造成uts，差别最大的就是补类型，没法再使用弱类型了。
5. 组件的写法基本没有差别，只需注意uni-app x初期支持的组件不全

您可以先把Android版迁移到uni-app x上，iOS维持原先方案。由于iphone设备性能的优势，uni-app js版的性能应该也可以满足大多数需求。

官方近期会提供把[uni小程序sdk](https://nativesupport.dcloud.net.cn/#)集成到uni-app x的方案。届时你的uni-app js版老项目可以作为uni-app x新项目的一个小程序来使用。

## 原生/rn/flutter页面兼容指南

之前已经有原生/rn/flutter页面，希望渐进式的迁移到uni-app x架构，该怎么搞？

uni-app x 毕竟是原生应用，内嵌flutter、rn这些没有任何问题，包括调用其他原生写的界面也可以。把之前的页面封装为[uts插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)，云打包就可以用。

至于把 uni-app x 作为一个sdk内嵌到其他原生应用中，还在评估中。

# FAQ
- uni-app x 支持uvue页面和vue页面混写吗？
仅支持uvue页面。后期考虑中。历史vue页面也可以通过 uni小程序sdk 嵌入到uni-app x中。

- uni-app x 的app端能离线打包吗？
初期不能，后期会提供

- uni-app x 能热更新吗？
开发期间可以热刷，但打包后不能热更新。开发者可自行封装原生的插件动态加载方案。

- uni-app x 能使用npm库吗？
uni-app x 的app端里没有js引擎，不能使用js库。除非npm上有uts的库。

当然把ts的库改造成uts的库并不难，如果ts库没有使用uts不支持的web专用语法，那么可以直接使用。

uni-app x编译到web和小程序时，所有js库仍然可用。

- uni-app x 会搞插件大赛吗？
会。很快启动，鼓励大家做基于uts和uvue的插件。

- uni-app x 能调用所有原生API吗？
可以。在app端，kotlin和swift能调的，uts就能调。

- uni-app x 能集成原生sdk吗？
可以，通过uts插件，[https://uniapp.dcloud.net.cn/plugin/uts-plugin.html](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)

- uvue页面里的script可以直接调用原生代码吗？还是必须封装成uni_modules方式的uts原生插件？
uvue的script里写的就是uts，uts就可以直接调原生代码。无所谓它在`uni_modules`里还是外。但如果是大段的原生代码调用，还是推荐封装为独立的`uni_modules`。

- uni-app x 的开发只能用HBuilderX吗？
是的。为三方ide做插件是一个投资大且充满不确定性的事情，官方有限精力会聚焦在自身产品优化上。

- uni-app x 支持最低的Android版本多少？
Android 5+。Android4.4可能也可以运行，但官方发版前不会对4.4测试。

- 未来 uni-app js引擎版还维护吗？
维护。服务js开发者仍然是DCloud的重点。但nvue和5+将不再维护。

并非所有应用都需要达到微信、抖音的性能，js引擎版如能满足你的性能需求，那继续使用js引擎版。

未来vue页面也会支持uts组件。无论js引擎版还是x版，都支持uts插件生态，未来的原生扩展api和插件会是复用的。

包括官方的组件和API也会复用，比如电量API[uni.getbatteryinfo](https://ext.dcloud.net.cn/plugin?id=9295)，和[lottie组件](https://ext.dcloud.net.cn/plugin?id=10674)，它们使用uts开发，在 uni-app js引擎版和x版上，调用的都是一套代码。
