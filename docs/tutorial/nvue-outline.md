## 介绍

`uni-app` App 端内置了一个基于 weex 改进的原生渲染引擎，提供了原生渲染能力。

在 App 端，如果使用 vue 页面，则使用 webview 渲染；如果使用 nvue 页面(native vue 的缩写)，则使用原生渲染。一个 App 中可以同时使用两种页面，比如首页使用 nvue，二级页使用 vue 页面，hello uni-app 示例就是如此。

虽然 nvue 也可以多端编译，输出 H5 和小程序，但 nvue 的 css 写法受限，所以如果你不开发 App，那么不需要使用 nvue。

以往的 weex ，有个很大的问题是它只是一个高性能的渲染器，没有足够的 API 能力（比如各种 push sdk 集成、蓝牙等能力调用），使得开发时非常依赖原生工程师协作，开发者本来想节约成本，结果需要前端、iOS、Android 3 拨人开发，适得其反。 nvue 解决了这个问题，让前端工程师可以直接开发完整 App，并提供丰富的插件生态和云打包。这些组合方案，帮助开发者切实的提高效率、降低成本。

同时`uni-app`扩展了 weex 原生渲染引擎的很多排版能力，修复了很多 bug。比如

- Android 端良好支持边框阴影，[详情](/tutorial/nvue-css?id=android-box-shadow)
- iOS 端支持高斯模糊，<a href="https://ask.dcloud.net.cn/article/36617#view" target="_blank">详情</a>
- 可实现区域滚动长列表+左右拖动列表+吸顶的复杂排版效果
- 优化圆角边框绘制性能
- 扩展了更多的 css

## 适用场景

nvue 的组件和 API 写法与 vue 页面一致，其内置组件还比 vue 页面内置组件增加了更多，[详见](https://uniapp.dcloud.io/component/list)。

如果你熟悉 weex 或 react native 开发，那么 nvue 是你的更优选择，能切实提升你的开发效率，降低成本。

如果你是 web 前端，不熟悉原生排版，那么建议你仍然以使用 vue 页面为主，在 App 端某些 vue 页面表现不佳的场景下使用 nvue 作为强化补充。这些场景如下：

1. 需要高性能的区域长列表或瀑布流滚动。webview 的页面级长列表滚动是没有性能问题的（就是滚动条覆盖 webview 整体高度），但页面中某个区域做长列表滚动，则需要使用 nvue 的`list`、`recycle-list`、`waterfall`等组件([详见](https://uniapp.dcloud.io/component/list))。这些组件的性能要高于 vue 页面里的区域滚动组件`scroll-view`。
2. 复杂高性能的自定义下拉刷新。uni-app 的 pages.json 里可以配置原生下拉刷新，但引擎内置的下拉刷新样式只有雪花和 circle 圈 2 种样式。如果你需要自己做复杂的下拉刷新，推荐使用 nvue 的 refresh 组件。当然[插件市场](https://ext.dcloud.net.cn/search?q=%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0)里也有很多 vue 下的自定义下拉刷新插件，只要是基于 renderjs 或 wxs 的，性能也可以商用，只是没有 nvue 的`refresh`组件更极致。
3. 左右拖动的长列表。在 webview 里，通过`swiper`+`scroll-view`实现左右拖动的长列表，前端模拟下拉刷新，这套方案的性能不好。此时推荐使用 nvue，比如新建 uni-app 项目时的[新闻示例模板](https://ext.dcloud.net.cn/plugin?id=103)，就采用了 nvue，切换很流畅。
4. 实现区域滚动长列表+左右拖动列表+吸顶的复杂排版效果，效果可参考 hello uni-app 模板里的`swiper-list`。[详见](https://ext.dcloud.net.cn/plugin?id=2128)
5. 如需要将软键盘右下角按钮文字改为“发送”，则需要使用 nvue。比如聊天场景，除了软键盘右下角的按钮文字处理外，还涉及聊天记录区域长列表滚动，适合 nvue 来做。
6. 解决前端控件无法覆盖原生控件的层级问题。当你使用`map`、`video`、`live-pusher`等原生组件时，会发现前端写的`view`等组件无法覆盖原生组件，层级问题处理比较麻烦，此时使用 nvue 更好。或者在 vue 页面上也可以覆盖一个 subnvue（一种非全屏的 nvue 页面覆盖在 webview 上），以解决 App 上的原生控件层级问题。[详见](https://uniapp.dcloud.io/component/native-component)
7. 如深度使用`map`组件，建议使用 nvue。除了层级问题，App 端 nvue 文件的 map 功能更完善，和小程序拉齐度更高，多端一致性更好。
8. 如深度使用`video`，建议使用 nvue。比如如下 2 个场景：video 内嵌到 swiper 中，以实现抖音式视频滑动切换，例子见[插件市场](https://ext.dcloud.net.cn/search?q=%E4%BB%BF%E6%8A%96%E9%9F%B3)；nvue 的视频全屏后，通过`cover-view`实现内容覆盖，比如增加文字标题、分享按钮。
9. 直播推流：nvue 下有`live-pusher`组件，和小程序对齐，功能更完善，也没有层级问题。
10. 对 App 启动速度要求极致化。App 端如果首页使用 nvue 且在 manifest 里配置 fast 模式，那么 App 的启动速度可以控制在 1 秒左右。而使用 vue 页面的话，App 的启动速度一般是 3 秒起，取决于你的代码性能和体积。

但注意，在某些场景下，nvue 不如 vue 页面，如下：

1. `canvas`。nvue 的 canvas 性能不高，尤其是 Android App 平台，所以这个组件干脆没有内置，而是需要单独引入。操作 canvas 动画，最高性能的方式是使用 vue 页面的 renderjs 技术，在 hello uni-app 里的 canvas 示例就是如此。
2. 动态横竖屏。nvue 页面的 css 不支持媒体查询，所以横竖屏动态切换、动态适配屏幕是很困难的。

## 纯原生渲染模式

uni-app 在 App 端，支持 vue 页面和 nvue 页面混搭、互相跳转。也支持纯 nvue 原生渲染。

启用纯原生渲染模式，可以减少 App 端的包体积、减少使用时的内存占用。因为 webview 渲染模式的相关模块将被移除。

在 manifest.json 源码视图的`"app-plus"`下配置`"renderer":"native"`，即代表 App 端启用纯原生渲染模式。此时 pages.json 注册的 vue 页面将被忽略，vue 组件也将被原生渲染引擎来渲染。

如果不指定该值，默认是不启动纯原生渲染的。

```javascript
	// manifest.json
	{
	   // ...
		// App平台特有配置
	   "app-plus": {
	      "renderer": "native", //App端纯原生渲染模式
	   }
	}
```

## 编译模式

**weex 编译模式和 uni-app 编译模式**

如你之前是 weex 开发者，可以继续查阅本章节，否则可以跳过看下一节[快速上手](#快速上手)。

weex 的组件和 JS API，与 uni-app 不同。uni-app 与微信小程序相同。

考虑到 weex 用户的迁移，uni-app 也支持 weex 的代码写法。在 manifest.json 中可以配置使用**weex 编译模式**或**uni-app 编译模式**。选择 weex 编译模式时将不支持 uni-app 的组件和 jsapi，需要开发者参考 weex 官方文档的写法来写代码。 比如 weex 编译模式用`<div>`。uni-app 编译模式则使用`<view>`。

一般情况建议使用`uni-app`模式，除非历史 weex 代码较多，需要逐步过渡。同时注意 weex 编译模式的切换是项目级的，不支持同项目下某个 nvue 页面使用 weex 模式，另一个 nvue 页面使用 uni-app 模式。

|          | weex 编译模式                       | uni-app 编译模式                     |
| -------- | ----------------------------------- | ------------------------------------ |
| 平台     | 仅 App                              | 所有端，包含小程序和 H5              |
| 组件     | weex 组件如 div                     | uni-app 组件如 view                  |
| 生命周期 | 只支持 weex 生命周期                | 支持所有 uni-app 生命周期            |
| JS API   | weex API、uni API、Plus API         | weex API、uni API、Plus API          |
| 单位     | 750px 是屏幕宽度，wx 是固定像素单位 | 750rpx 是屏幕宽度，px 是固定像素单位 |
| 全局样式 | 手动引入                            | app.vue 的样式即为全局样式           |
| 页面滚动 | 必须给页面套或组件                  | 默认支持页面滚动                     |

在 manifest.json 中修改 2 种编译模式，`manifest.json` -> `app-plus` -> `nvueCompiler` 切换编译模式。

`nvueCompiler` 有两个值：

- weex
- uni-app

```javascript
	// manifest.json
	{
		// ...
		// App平台特有配置
		"app-plus": {
			"nvueCompiler":"uni-app" //是否启用 uni-app 模式
		}
	}
```

在 `manifest.json` 配置文件中，HBuilderX2.4 之前版本，默认值为 `weex` 模式，HBuilderX2.4+版本默认值改为 `uni-app` 模式。

weex 编译模式不支持 `onNavigationBarButtonTap` 生命周期函数的写法。在 nvue 中监听原生标题栏按钮点击事件，详见：[uni.onNavigationBarButtonTap](https://uniapp.dcloud.net.cn/tutorial/page#lifecycle)。

weex 编译模式不支持 onShow 生命周期，但熟悉 5+的话，可利用监听 webview 的`addEventListener` show 事件实现 onShow 效果。

weex 编译模式不支持`vuex`。

nvue 的页面跳转，与 weex 不同，仍然遵循 uni-app 的路由模型。vue 页面和 nvue 页面之间不管怎么跳转，都遵循这个模型。包括 nvue 页面跳向 nvue 页面。每个页面都需要在 pages.json 中注册，调用 uni-app 的 [路由 API](https://uniapp.dcloud.net.cn/api/router) 进行跳转。

原生开发没有页面滚动的概念，页面内容高过屏幕高度时，内容并不会自动滚动；只有将页面内容放在`list`、`waterfall`、`scroll-view/scroller`这几个组件下内容才可滚动。这不符合前端开发的习惯，所以在 nvue 编译为 `uni-app`模式时，`uni-app`框架会给 nvue 页面外层自动嵌套一个 `scroller`，从而实现页面内容的自动滚动。

注意：

- `uni-app`框架仅对 nvue 页面嵌套`scroller`容器，不会给组件自动套`scroller`容器；
- 若 nvue 页面有`recycle-list`组件时，`uni-app`框架也不会自动给页面嵌套`scroller`容器
- 若你不希望自动嵌套`scroller`容器，可在`pages.json`中通过如下配置进行关闭：

```javascript
{
    "path": "",
    "style": {
        "disableScroll": true // 不嵌套 scroller
    }
}
```

weex 编译模式下支持使用 weex ui ，例子[详见](https://ext.dcloud.net.cn/plugin?id=442)。但相比 uni-app 插件市场及官方[uni ui](https://ext.dcloud.net.cn/plugin?id=55)而言，weex 语法的组件生态还是比较欠缺的。

**HBuilderX 3.1.0+ 开始支持新的样式编译模式**

- weex 编译模式：老模式，样式支持与普通 weex 相同
- uni-app 编译模式：新模式，在 weex 原有样式基础上支持组合选择器（相邻兄弟选择器、普通兄弟选择器、子选择器、后代选择器）[详见](https://ask.dcloud.net.cn/article/38751)

```js
  // manifest.json
  {
      // ...
      // App平台特有配置
      "app-plus":  {
          "nvueStyleCompiler": "uni-app"
      }
  }
```

## 快速上手

### 1.新建 nvue 页面

在 HBuilderX 的 `uni-app` 项目中，新建页面，弹出界面右上角可以选择是建立`vue`页面还是`nvue`页面，或者 2 个同时建。

不管是 vue 页面还是 nvue 页面，都需要在`pages.json`中注册。如果在 HBuilderX 中新建页面是会自动注册的，如果使用其他编辑器，则需要自行在 pages.json 里注册。

如果一个页面路由下同时有 vue 页面和 nvue 页面，即出现同名的 vue 和 nvue 文件。那么在 App 端，会仅使用 nvue 页面，同名的 vue 文件将不会被编译到 App 端。而在非 App 端，会优先使用 vue 页面。

如果不同名，只有 nvue 页面，则在非 app 端，只有 uni-app 编译模式的 nvue 文件才会编译。

### 2.开发 nvue 页面

`nvue` 页面结构同 `vue`, 由 `template`、`style`、`script` 构成。

- template： 模板写法、数据绑定同 vue。组件支持 2 种模式，
  - weex 组件，同 weex 写法，参考：[weex 内置组件](http://emas.weex.io/zh/docs/components/a.html)；
  - uni-app 组件，同 uni-app 写法。
  - App 端 nvue 专用组件，详见[https://uniapp.dcloud.io/component/barcode](https://uniapp.dcloud.io/component/barcode)。
- style：由于采用原生渲染，**并非所有浏览器的 css 均支持，布局模型只支持 flex 布局**，虽然不会造成某些界面布局无法实现，但写法要注意。详见：[样式](/tutorial/nvue-css)
- script：写法同 vue，并支持 3 种 API：
  - nvue API ：仅支持 App 端，uni-app 编译模式也可使用。使用前需先引入对应模块，参考：[模块引入 API](/tutorial/nvue-api)
  - uni API：[https://uniapp.dcloud.io/api/README](https://uniapp.dcloud.io/api/README)
  - plus API：仅支持 App 端。[http://www.html5plus.org/doc/h5p.html](http://www.html5plus.org/doc/h5p.html)

### 3.调试 nvue 页面

HBuilderX 内置了 weex 调试工具的强化版，包括审查界面元素、看 log、debug 打断点，[详见](https://uniapp.dcloud.io/tutorial/snippet#app-debug)

## render-whole

在 HBuilder X 3.1.0 起版本，nvue 新增 `render-whole`属性，类型`Boolean`。

- 设置 render-whole="true"时，视图层将组件以及子组件的信息结构一次性和原生层通讯，通过整个节点的重绘提升了排版渲染性能。
- 设置 render-whole="false"时，视图层将以子节点一个接着一个和原生层通讯再重绘。总体的渲染时间可能更久。

默认启用`render-whole`为`true`的组件列表

- `text`
- `cell`
- `header`
- `cell-slot`
- `recycle-list`

**使用**

```html
<swiper :render-whole="true"></swiper>
```

**演示**

> 此演示在 Android 5.1 版本手机上的效果，高版本手机效果没有这么明显

<img style="width:300px;" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/29c0c580-55ab-11eb-a16f-5b3e54966275.gif"></img>

示例工程[点击下载](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/d5adb160-55af-11eb-bd01-97bc1429a9ff.zip)

## iOS 平台下拉组件 refresh 组件注意问题

iOS 平台默认情况下滚动容器组件（如`list`、`waterfall`组件）内容不足时，由于没有撑满容器的可视区域会导致无法上下滚动，此时无法操作下拉刷新功能，无法触发`refresh`组件的`@refresh`、`@pullingdown`事件。 此时可在容器组件中配置`alwaysScrollableVertical`属性值为`true`来设置支持上下滚动，支持下拉刷新操作。

##### 用法

```html
<list class="scroll-v list" enableBackToTop="true" scroll-y alwaysScrollableVertical="true">
	<refresh class="refresh" @refresh="onrefresh()" @pullingdown="onpullingdown">
		<!-- refresh content -->
	</refresh>
	<cell v-for="(newsitem,index) in list" :key="newsitem.id">
		<!-- cell content -->
	</cell>
</list>
```

> Android 平台不存在此问题
