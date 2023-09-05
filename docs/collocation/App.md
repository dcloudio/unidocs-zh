# App.vue/App.uvue

`App.vue/uvue`是uni-app的主组件。uni-app js引擎版是app.vue。uni-app x是app.uvue。以下出现的`app.vue`一般泛指包含了`app.uvue`

所有页面都是在`App.vue`下进行切换的，是应用入口文件。但`App.vue`本身不是页面，这里不能编写视图元素，也就是没有`<template>`。

这个文件的作用包括：监听应用生命周期、配置全局样式、配置全局的存储globalData

应用生命周期仅可在`App.vue`中监听，在页面监听无效。
The application life cycle can only be listened to in `App.vue`, and listening to on the page is invalid.

## 应用生命周期@applifecycle
## Application Lifecycle @applifecycle

``uni-app`` 支持如下应用生命周期函数：
`uni-app` supports the following application life cycle functions:

|函数名|说明|平台兼容|
|:-|:-|:-|
|onLaunch|当``uni-app`` 初始化完成时触发（全局只触发一次）||
|onShow|当 ``uni-app`` 启动，或从后台进入前台显示||
|onHide|当 ``uni-app`` 从前台进入后台||
|onError|当 ``uni-app`` 报错时触发|app-uvue 不支持|
|onUniNViewMessage|对 ``nvue`` 页面发送的数据进行监听，可参考 [nvue 向 vue 通讯](https://uniapp.dcloud.io/tutorial/nvue-api?id=communication)|app-uvue 不支持|
|onUnhandledRejection|对未处理的 Promise 拒绝事件监听函数（2.8.1+ app-uvue 暂不支持）|app-uvue 不支持|
|onPageNotFound|页面不存在监听函数|app-uvue 不支持|
|onThemeChange|监听系统主题变化|app-uvue 不支持|
|onLastPageBackPress|最后一个页面按下Android back键，常用于自定义退出|app-uvue-android 3.9+|
|onExit|监听应用退出|app-uvue-android 3.9+|

**示例代码**
**Sample code**
```html
<script>
	// 只能在App.vue里监听应用的生命周期
	// Only monitor the application life cycle in App.vue
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
```

**注意**
**Notice**
- **应用生命周期仅可在`App.vue`中监听，在其它页面监听无效**。
- 以组合式 API 使用时，在 Vue2 和 Vue3 中存在一定区别，请分别参考：[Vue2 组合式 API 使用文档](/tutorial/vue-composition-api.html) 和 [Vue3 组合式 API 使用文档](/tutorial/vue3-composition-api.html)。
- 应用启动参数，可以在API `uni.getLaunchOptionsSync`获取，[详见](https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html#getlaunchoptionssync)
- onlaunch里进行页面跳转，如遇白屏报错，请参考[https://ask.dcloud.net.cn/article/35942](https://ask.dcloud.net.cn/article/35942)
- Page jump can be performed in onlaunch. In case of a white screen error, please refer to [https://ask.dcloud.net.cn/article/35942](https://ask.dcloud.net.cn/article/35942)
- `App.vue` 不能写模板
- `App.vue` cannot write template
- onPageNotFound 页面实际上已经打开了（比如通过分享卡片、小程序码）且发现页面不存在，才会触发，api 跳转不存在的页面不会触发（如 uni.navigateTo）
- The onPageNotFound page has actually been opened (for example, by sharing the card, the applet code) and it is found that the page does not exist, and the page will not be triggered if the api jumps to a page that does not exist (such as uni.navigateTo)

## globalData

小程序有globalData，这是一种简单的全局变量机制。这套机制在uni-app里也可以使用，并且全端通用（uni-app x不支持）。

当然vue框架的全局变量，另有其他方式定义。

**以下是 App.vue 中定义globalData的相关配置：**
**The following is the relevant configuration of defining globalData in App.vue:**

```html
<script>  
    export default {  
        globalData: {  
            text: 'text'  
        }
    }  
</script>  
```

js中操作globalData的方式如下：
`getApp().globalData.text = 'test'`

在应用onLaunch时，getApp对象还未获取，暂时可以使用this.globalData获取globalData。
While applying onLaunch, the getApp object has not been obtained yet, so you can use this.globalData to obtain globalData temporarily.

如果需要把globalData的数据绑定到页面上，可在页面的onShow页面生命周期里进行变量重赋值。
If you need to bind the data of globalData to the page, you can reassign variables in the life cycle of the onShow page of the page.

nvue的weex编译模式中使用globalData的话，由于weex生命周期不支持onShow，但熟悉5+的话，可利用监听webview的addEventListener show事件实现onShow效果，或者直接使用weex生命周期中的beforeCreate。但建议开发者使用uni-app编译模式，而不是weex编译模式。
If globalData is used in nvue's weex compilation mode, since the weex life cycle does not support onShow, but if you are familiar with 5+, you can use the addEventListener show event of listening to the webview to achieve the onShow effect, or directly use the beforeCreate in the weex life cycle. But it is recommended that developers use the uni-app compilation mode instead of the weex compilation mode.

globalData是简单的全局变量，如果使用状态管理，请使用`vuex`（main.js中定义）
globalData is a simple global variable. If you use state management, please use `vuex` (defined in main.js)

## 全局样式

在`App.vue`中，可以定义一些全局通用样式，例如需要加一个通用的背景色，首屏页面渲染的动画等都可以写在App.vue中。
In `App.vue`, you can define some global common styles. For example, if you need to add a common background color, the animation rendered on the first page can be written in App.vue.

注意如果工程下同时有vue和nvue文件，全局样式的所有css会应用于所有文件，而nvue支持的css有限，编译器会在控制台报警，提示某些css无法在nvue中支持。此时需要把nvue不支持的css写在单独的条件编译里。如：
Please note that if there are both vue and nvue files under the project, all css of global style will be applied to all files, while the compiler will give an alarm at the console as the css supported by nvue is limited, indicating that some css cannot be supported in nvue. At this time, css not supported by nvue needs to be written in a separate conditional compilation. For example:
```html
<style>
    /* #ifndef APP-PLUS-NVUE */
    @import './common/uni.css';
    /* #endif*/
</style>
```
