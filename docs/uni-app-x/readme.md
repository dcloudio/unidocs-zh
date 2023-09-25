# uni-app x 是什么？

uni-app x，是下一代 uni-app，是一个跨平台应用开发引擎。

在App端，uni-app x 在iOS编译为swift、在Android编译为kotlin。没有使用js引擎、webview，完全达到了原生应用的功能、性能。

uni-app x需HBuilderX3.9起支持，该版本处于公测状态，需单独邀请下载。正式版和alpha用户暂时无法升级到3.9。

可以下载打包后的[hello uni-app x](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/hello-uniapp-x.apk)的apk来体验。

uni-app x 是一个庞大的工程，它包括uts语言、uvue渲染引擎、uni的组件和API、以及扩展机制。

<div class="quick">
  <div style="margin-top: 20px;justify-content: space-around;">
    <a
      href="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-x/hello-uniappx.apk"
      target="_blank"
      style="display: flex; align-items: center;flex-direction: column;margin: 0 5px 20px;width:160px;"
      one-link-mark="yes"
    >
      <div class="barcode-img-box">
        <img
          src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-x/hello-uniappx-apkqrcode.png"
          width="160"
          loading="lazy"
        />
      </div>
      <b>hello uni-app x</b>
    </a>
  </div>
</div>

## 1. uts语言

uts 全称 uni type script，是一门跨平台的、高性能的、强类型的现代编程语言。它在不同平台，会被编译为不同平台的native语言，如：

> * web/小程序平台，编译为JavaScript
> * Android平台，编译为Kotlin
> * iOS平台，编译Swift

uts和ts很相似，但为了跨端，uts进行了一些约束和特定平台的增补。详见 [uts语言介绍](../uts/README.md)

开发者在 uni-app x 中，不能编写js，因为 uni-app x 中不自带js引擎。需使用uts，实现跨端的同时保证最佳性能。

## 2. uvue渲染引擎

uts替代的是js，而uvue替代的就是html和css。或者如果你了解flutter的话，也可以理解为uts类似dart，而uvue类似flutter。

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

在 uni-app x 中，项目的页面和组件，后缀名都是uvue。而uvue文件里的script，发布到App时也只能写uts。

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

uvue支持的vue语法，是按vue3实现的，但一期uvue不支持setup。详见[vue语法](vue/README.md)

uvue支持的css语法，是web的子集，类似于nvue的css。仅支持flex布局。但也足以布局出需要的界面。详见[css语法](uni-app-x/css/README.md)

以上约束特指App端的uvue引擎。如果把uvue页面编译到小程序和web平台，它的script仍然会被编译为js，web的样式也都可以使用。

更多示例代码参考：[hello uni-app x](https://gitcode.net/dcloud/hello-uni-app-x)

## 3. uni的组件

uni-app x 一期，只包括常用的组件和API。

剩余的组件和API，如开发者急用，可自行开发，或者委托插件作者提供相关插件。

目前支持的组件清单：
- [x] view
- [x] scroll-view
- [x] list-view
- [x] swiper
- [x] text
- [x] image
- [x] rich-text
- [x] button
- [x] input
- [x] textarea
- [x] checkbox
- [x] radio
- [x] switch
- [x] slider
- [x] picker-view
- [x] navigator
- [x] progress
- [x] webview
- [x] video
- [x] animation-view // 已有uts插件

不支持的组件及替代方案
- movable-view：没有ui层和逻辑层的通信阻塞，开发者可自己写uts拖动view
- picker：可改用picker-view
- canvas：目前没有完整的canvas组件，但每个view，都提供了[draw API](dom/drawablecontext.md)，可以高性能的画各种形状、贴图、写字。关于截图，无需像webview那样通过canvas中转。view会直接提供截图方案。当然后期会补充完整canvas
- waterfall/grid-view：会补充
- uniCloud-db：会补充
- ad：会补充
- editor：用web-view来加载
- map：需开发uts组件。或使用web-view中的地图
- live-pusher：需开发uts组件
- form
- label

## 4. API

uni-app js引擎版，支持 plus API 和 weex API。但 uni-app x 中，不再支持这些API。

uni-app x支持的API包括：

- uts的api [详见](/uts/buildin-object-api/global.md)
- 全局api，前面不需要加`uni.`。如`getApp`
- uni.xxx的内置api。数量较多，详见左侧列表。
- uniCloud.xxx的内置api。见左侧。
- dom的api [详见](dom/README.md)
- 原生api
	
	由于uts可以直接调用Android和iOS的api，所以os和三方sdk的能力都可以在uts中调用。如下：

```vue
<script>
	import Build from 'android.os.Build';
	export default {
		onLoad() {
			console.log(Build.MODEL); //调用原生对象，返回手机型号
			console.log(uni.getSystemInfoSync().deviceModel); //调用uni API，返回手机型号。与上一行返回值相同
		}
	}
</script>
```

上面的示例，在页面启动时打印了2行日志，显示手机型号。

- uni.getSystemInfoSync，是uni的api
- import的Build，是Android os的api

在uni-app x里，可以直接调用os的能力，不受限制，语法是uts的语法，但需要了解什么功能在原生里是哪个api。

使用`uni.getSystemInfoSync`则比较简单，看uni的文档即可，且可跨平台。

其实，`uni.getSystemInfoSync`的内部实现就是一个uts模块，底层使用了一样的代码。

uni.的api，大多是uts开发的，它们会陆续开源在[uni-api](https://gitcode.net/dcloud/uni-api)。

插件市场也有很多做好的uts插件，方便开发者拿来即用。[uts插件](https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate)

## 5. vue语法
- uvue是按vue3规范实现的，但一期uvue不支持setup，只支持选项式
- 目前也不支持vue插件，比如pinia、vuex、i18n、router。简单的状态管理可以参考文档[全局变量和状态管理](uni-app-x/tutorial/store.md)

[详情](./vue/README.md)

## 6. 全局文件
- manifest.json 仅支持基本的名称图标配置，暂未支持splash，但uni-app x项目打包后启动速度飞快，没有splash也无所谓。[详见](manifest.md)
- AndroidManifest.xml 与原生开发相同。注意Android权限配置在这里配置，而不是在manifest.json中 [详见](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html)
- app.uvue 不支持globaldata。[详见](../collocation/App.md)
- pages.json 不支持app-plus的内容。[详见](../collocation/pages.md)
- uni.scss 正常支持。但注意uvue仅能使用[css子集](css/README.md)

## 7. 插件生态

uni-app x编译到web和小程序时，所有js库仍然可用。但在App平台，由于没有js引擎，所以无法使用js生态，包括npm。

uni-app x App平台的插件生态来源于：
1. 原生生态。比如上述示例代码中获取手机型号。以及各种原生sdk的直接调用。
2. ts生态的迁移。很多js库是ts编写的，如果没有使用uts不支持的语法，ts代码就可以使用。如果略有不同，也可以稍加改造ts以适配uts。

[uni插件市场](https://ext.dcloud.net.cn/)是插件的聚集地，这里有2种插件适用于uni-app x。
1. uts插件
uts插件封装原生能力，包括os能力或三方sdk。可以做API插件，也可以做组件插件。

uts插件可同时在 uni-app js引擎版 和 uni-app x 的app平台上运行。

uts插件分类直达：[https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate](https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate)

uni-app js版的“App原生语言插件”无法在 uni-app x 中运行。

2. 前端插件

uvue组件、uts sdk、uni-app x前端页面/项目模板。这些前端代码仍然使用uni-app x的vue、uts、css来开发。

后续DCloud会提供uni-app x编译为web，届时这些插件也可以适配到uni-app js引擎版的全端。

uts插件分类直达：[https://ext.dcloud.net.cn/search?fePlatform=1&fePlatform2=34&type=UpdatedDate](https://ext.dcloud.net.cn/search?fePlatform=1&fePlatform2=34&type=UpdatedDate)


一般情况下，原生库的能力是大于js库的。不太可能有一个功能必须使用js库才能使用。比如md5，js有库，原生也有库，调用一个jar也很方便。

实际上，常见的加密、md5等库，插件市场已经有uts版本。[详见](https://ext.dcloud.net.cn/search?q=%E5%8A%A0%E5%AF%86&orderBy=Relevance&cat1=8&cat2=81)

如果你一定要使用某个js库，还有一个办法是在uni-app x里的web-view组件，让其运行js并返回值给uts代码。

## 一期范围

除上述文档中声明已经完成的，还有如下需要注意：

- 全端支持：一期只有Android。虽然uts语言支持swift，可以写原生插件，但iOS版的uvue还未开发完毕。对于iOS或其他小程序、web平台，开发者可将uvue文件后缀改为vue或nvue，如果没有写Android专有代码，那么也可以使用uni-app js引擎版编译到其他平台，包括iOS App、web及各家小程序。尤其在app-iOS上，由于设备性能本就优秀，所以js的方案的性能也足够满足很多开发者。后期官方会提供更完善的 uni-app x的全端支持。
- 一期不支持：横屏切换、暗黑模式、自定义路由、多语言、无障碍
- 一期不支持：uni-ad。另外包括微信、支付宝、个推、地图等三方sdk封装官方均未启动
- 一期不支持国际区账户创建和打包uni-app x，仅大陆区开发者账户可用。

欢迎去[需求墙](https://vote.dcloud.net.cn/#/?name=uni-app%20x)投票，告诉我们你的需求优先级。

## 自动化测试
uni-app x 从源头重视产品质量，第一个版本就支持自动化测试。并为uni-app x产品编写了数万行自动化测试例代码。

uni-app x 的自动化测试方案和 uni-app js版相同，自动化测试脚本使用js编写（注意不是uts）。整个自动化测试环境，运行在电脑端。

开发者可以为自己的app编写好自动化测试，以提升自己的产品质量。

uni-app 的自动化测试教程详见：[https://uniapp.dcloud.net.cn/worktile/auto/quick-start.html](https://uniapp.dcloud.net.cn/worktile/auto/quick-start.html)

## 历史老项目兼容指南

### uni-app js版老项目迁移指南
1. 首先检查你的老项目里使用的uni组件、api、三方插件、三方库，在uni-app x上是否支持。
2. 对于不支持的，需要自己写uni-app x的插件或去插件市场找替代兼容插件。如果写调用原生的uts代码，需要你了解原生的api。
3. 对于css，如果你之前使用nvue的css，那边迁移到uni-app x在样式上改动很小。如果之前是vue的css，那么需要改为flex布局，以及仅使用uvue支持的css来布局界面。
4. 对于script，如果你之前使用ts，那么改造成本会很低。如果使用js，那需要改造成uts，差别最大的就是补类型，没法再使用弱类型了。
5. 组件的写法基本没有差别，只需注意uni-app x初期支持的组件不全

您可以先把Android版迁移到uni-app x上，iOS维持原先方案。由于iphone设备性能的优势，uni-app js版的性能应该也可以满足大多数需求。

官方近期会提供把[uni小程序sdk](https://nativesupport.dcloud.net.cn/#)集成到uni-app x的方案。届时你的uni-app js版老项目可以作为uni-app x新项目的一个小程序来使用。

### 原生/rn/flutter页面兼容指南

之前已经有原生/rn/flutter页面，希望渐进式的迁移到uni-app x架构，该怎么搞？

uni-app x 毕竟是原生应用，内嵌flutter、rn这些没有任何问题，包括调用其他原生写的界面也可以。把之前的页面封装为[uts插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)，云打包就可以用。

插件市场已经有内嵌flutter的uts版本。[详见](https://ext.dcloud.net.cn/search?q=flutter&orderBy=Relevance&cat1=8)

至于把 uni-app x 作为一个sdk内嵌到其他原生应用中，还在评估中。

## FAQ
- uni-app x 支持uvue页面和vue页面混写吗？
仅支持uvue页面。历史vue页面可以通过 uni小程序sdk 嵌入到uni-app x中。

- uni-app x 的app端能离线打包吗？
初期不能，后期会提供

- uni-app x 能热更新吗？
开发期间可以热刷，但打包后不能热更新。开发者可自行封装原生的插件动态加载方案。

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
Android 5+

- uni-app x开源吗？
uni-app x的组件和API实现都会开源，会陆续发布在项目[uni-component](https://gitcode.net/dcloud/uni-component)和[uni-api](https://gitcode.net/dcloud/uni-api)下。\
开发者可以了解组件和API的实现，直接修改或优化源码，修改后的代码以[ext api](../api/extapi.md)或组件的方式下载到项目中，即可实现在本项目中替换掉官方组件和API。

- 未来 uni-app js引擎版还维护吗？
维护。服务js开发者仍然是DCloud的重点。但nvue和5+将不再维护。

并非所有应用都需要达到微信、抖音的性能，js引擎版如能满足你的性能需求，那继续使用js引擎版。

未来vue页面也会支持uts组件。无论js引擎版还是x版，都支持uts插件生态，未来的原生扩展api和插件会是复用的。

包括官方的组件和API也会复用，比如电量API[uni.getbatteryinfo](https://ext.dcloud.net.cn/plugin?id=9295)，和[lottie组件](https://ext.dcloud.net.cn/plugin?id=10674)，它们使用uts开发，在 uni-app js引擎版和x版上，调用的都是一套代码。
所以不必担心官方精力不足，顾此失彼。
