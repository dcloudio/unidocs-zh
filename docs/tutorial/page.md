## 页面简介
## Page Introduction

uni-app项目中，一个页面就是一个符合`Vue SFC规范`的`.vue`文件或`.nvue`文件。
In a uni-app project, a page is a `.vue` file or `.nvue` file that conforms to the `Vue SFC specification`.

`.vue`页面和`.nvue`页面，均全平台支持，差异在于当uni-app发行到App平台时，`.vue`文件会使用webview进行渲染，`.nvue`会使用原生进行渲染，详见：[nvue原生渲染](/tutorial/nvue-outline)。
Both `.vue` pages and `.nvue` pages are supported by all platforms. The difference is that when uni-app is released to the App platform, the `.vue` file will be rendered using webview, and the `.nvue` will be rendered natively. See: [nvue native rendering](/tutorial/nvue-outline).

## 新建页面
## New page

`uni-app`中的页面，通常会保存在工程根目录下的`pages`目录下。
Pages in `uni-app` are usually stored in the `pages` directory in the project root directory.

每次新建页面，均需在`pages.json`中配置`pages`列表；未在`pages.json -> pages` 中配置的页面，`uni-app`会在编译阶段进行忽略。pages.json的完整配置参考：[全局文件](/collocation/pages)。
Every time you create a new page, you need to configure the `pages` list in `pages.json`; for pages that are not configured in `pages.json -> pages`, `uni-app` will be ignored in the compilation phase. The complete configuration reference of pages.json: [global file](/collocation/pages).

通过HBuilderX开发 `uni-app` 项目时，在 `uni-app` 项目上右键“新建页面”，HBuilderX会自动在`pages.json`中完成页面注册，开发更方便。
When developing a `uni-app` project through HBuilderX, right-click on the `uni-app` project and "New Page", HBuilderX will automatically complete the page registration in `pages.json`, making development more convenient.

同时，HBuilderX 还内置了常用的页面模板（如图文列表、商品列表等），选择这些模板，可以大幅提升你的开发效率。
At the same time, HBuilderX also has built-in common page templates (such as text lists, product lists, etc.). Choosing these templates can greatly improve your development efficiency.

<div>
<img src="https://web-assets.dcloud.net.cn/unidoc/zh/pages-add-02.png" style="max-width:450px"></img>
</div>

## 删除页面
## delete page

删除页面时，需做两件工作：
When you delete a page, you need to do two things:
- 删除`.vue`文件或`.nvue`文件
- delete `.vue` file or `.nvue` file
- 删除`pages.json -> pages`列表项中的配置
- Remove config in `pages.json -> pages` list item

## 应用首页
## Application Home

`uni-app`会将`pages.json -> pages`配置项中的第一个页面，作为当前工程的首页（启动页）。
`uni-app` will use the first page in the `pages.json -> pages` configuration item as the home page (startup page) of the current project.

## 页面生命周期 @lifecycle
## Page life cycle @lifecycle

``uni-app`` 支持如下页面生命周期函数：
`uni-app` supports the following page life cycle functions:

|函数名|说明|平台差异说明|最低版本|
| Function name| Instruction| Platform difference description| Minimum version|
|:-|:-|:-|:-|
|onInit|监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad|百度小程序|3.1.0+|
|onInit|Monitor page initialization, its parameters are the same as the onLoad parameter, which is the data passed on the previous page, the parameter type is Object (used for page parameter transfer), and the trigger time is earlier than onLoad|Baidu Mini Program|3.1.0+|
|onLoad|监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考[示例](/api/router?id=navigateto)|||
| onLoad| listen to the page loading, whose parameter is the data transferred from the previous page, and the parameter type is Object (used for page parameter transmission)), refer to[Example](/api/router?id=navigateto)| | |
|onShow|监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面|||
| onShow| listen to page display. Triggered every time a page appears on the screen, including clicking back from the lower level page to return to the current page| | |
|onReady|监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发|||
| onReady| The first rendering of the listening page is completed. Note that if the rendering speed is fast, it will be triggered before the page enters the animation.| | |
|onHide|监听页面隐藏|||
| onHide| listen to page hiding| | |
|onUnload|监听页面卸载|||
| onUnload| listen to page uninstall| | |
|onResize|监听窗口尺寸变化|App、微信小程序、快手小程序||
|onResize|Monitor window size changes|App, WeChat applet, Kuaishou applet||
|onPullDownRefresh|监听用户下拉动作，一般用于下拉刷新，参考[示例](api/ui/pulldown)|||
| onPullDownRefresh| listen to the user's pull-down action, which is generally used for pull-down refresh, refer to[Example](api/ui/pulldown)| | |
|onReachBottom|页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项|||
| onReachBottom| The event that a page scrolls to the bottom (not scroll-view to the bottom) is often used to pull down the data on the next page. See the precautions below for details| | |
|onTabItemTap|点击 tab 时触发，参数为Object，具体见下方注意事项|微信小程序、QQ小程序、支付宝小程序、百度小程序、H5、App、快手小程序、京东小程序||
|onTabItemTap| Triggered when the tab is clicked, the parameter is Object, see the following notes for details|WeChat applet, QQ applet, Alipay applet, Baidu applet, H5, App, Kuaishou applet, Jingdong applet||
|onShareAppMessage|用户点击右上角分享|微信小程序、QQ小程序、支付宝小程序、字节小程序、飞书小程序、快手小程序、京东小程序||
|onShareAppMessage|Users click on the upper right corner to share|WeChat applet, QQ applet, Alipay applet, byte applet, Feishu applet, Kuaishou applet, Jingdong applet||
|onPageScroll|监听页面滚动，参数为Object|nvue暂不支持||
| onPageScroll| Listen to page scrolling with the parameter of Object| not supported by nvue temporarily| |
|onNavigationBarButtonTap|监听原生标题栏按钮点击事件，参数为Object|App、H5||
| onNavigationBarButtonTap| Listen to the click event of native title bar button with the parameter of Object| App, H5| |
|onBackPress|监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack ；详细说明及使用：[onBackPress 详解](http://ask.dcloud.net.cn/article/35120)。支付宝小程序只有真机能触发，只能监听非navigateBack引起的返回，不可阻止默认行为。|app、H5、支付宝小程序||
|onBackPress|Monitor page return, return event = {from:backbutton, navigateBack} , backbutton means the source is the upper left back button or android return key; navigateBack means the source is uni.navigateBack; detailed description and usage: [onBackPress detailed](http ://ask.dcloud.net.cn/article/35120). The Alipay applet can only be triggered by real functions, and can only monitor the return caused by non-navigateBack, and cannot prevent the default behavior. |app, H5, Alipay applet||
|onNavigationBarSearchInputChanged|监听原生标题栏搜索输入框输入内容变化事件|App、H5|1.6.0|
| onNavigationBarSearchInputChanged| Listen to the input content change event of search input box of the native title bar| App, H5| 1.6.0|
|onNavigationBarSearchInputConfirmed|监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。|App、H5|1.6.0|
| onNavigationBarSearchInputConfirmed| Listen to the search event of search input box of the native title bar, which is triggered when the user clicks the "Search" button on the soft keyboard.| App, H5| 1.6.0|
|onNavigationBarSearchInputClicked|监听原生标题栏搜索输入框点击事件（pages.json 中的 searchInput 配置 disabled 为 true 时才会触发）|App、H5|1.6.0|
|onNavigationBarSearchInputClicked|Listen to the click event of the native title bar search input box (only triggered when the searchInput configuration in pages.json is disabled to true)|App, H5|1.6.0|
|onShareTimeline|监听用户点击右上角转发到朋友圈|微信小程序|2.8.1+|
| onShareTimeline|Monitor users click on the upper right corner to forward to Moments|WeChat MiniApp| 2.8.1+|
|onAddToFavorites|监听用户点击右上角收藏|微信小程序、QQ小程序|2.8.1+|
| onAddToFavorites|Monitor users click on the upper right corner to save|WeChat MiniApp, QQ MiniApp| 2.8.1+|

`onInit`使用注意
`onInit` use note
- 仅百度小程序基础库 3.260 以上支持 onInit 生命周期
- Only Baidu Mini Program base library 3.260 and above supports onInit life cycle
- 其他版本或平台可以同时使用 onLoad 生命周期进行兼容，注意避免重复执行相同逻辑
- Other versions or platforms can use the onLoad life cycle for compatibility at the same time, be careful to avoid repeating the same logic
- 不依赖页面传参的逻辑可以直接使用 created 生命周期替代
- The logic that does not depend on page parameters can be replaced directly by the created life cycle

`onReachBottom`使用注意
`onReachBottom` use attention
可在pages.json里定义具体页面底部的触发距离[onReachBottomDistance](/collocation/pages#globalstyle)，比如设为50，那么滚动页面到距离底部50px时，就会触发onReachBottom事件。
You can define the trigger distance at the bottom of a specific page in pages.json [onReachBottomDistance](/collocation/pages#globalstyle), for example, set it to 50, then when the page is scrolled to a distance of 50px from the bottom, the onReachBottom event will be triggered.

如使用scroll-view导致页面没有滚动，则触底事件不会被触发。scroll-view滚动到底部的事件请参考scroll-view的文档
If using scroll-view causes no scrolling in the page, the scrolling to the bottom event will not be triggered. Please refer to the documentation of scroll-view for the scrolling to the bottom event of scroll-view


`onPageScroll` （监听滚动、滚动监听、滚动事件）参数说明：
`onPageScroll` (scroll, scroll listener, scroll event) parameter description:

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|scrollTop|Number|页面在垂直方向已滚动的距离（单位px）|
| scrollTop| Number| The distance (in px) that the page has scrolled over vertically|

**注意**
**Notice**
- `onPageScroll`里不要写交互复杂的js，比如频繁修改页面。因为这个生命周期是在渲染层触发的，在非h5端，js是在逻辑层执行的，两层之间通信是有损耗的。如果在滚动过程中，频发触发两层之间的数据交换，可能会造成卡顿。
- Don not write js with complicated interactions in `onPageScroll`, such as frequently modifying pages. Since this life cycle is triggered in the rendering layer and on the non-h5 side, js is executed in the logical layer, and the communication between the two layers is lossy. If the data exchange between the two layers is frequently triggered during the rolling process, it may cause a lag.
- 如果想实现滚动时标题栏透明渐变，在App和H5下，可在pages.json中配置titleNView下的type为transparent，[参考](https://uniapp.dcloud.io/collocation/pages?id=app-titlenview)。
- If you want to realize the transparent gradient of title bar when scrolling, you can configure the type under titleNView as transparent in pages.json on App and H5 sides.[Refer to](https://uniapp.dcloud.io/collocation/pages?id=app-titlenview).
- 如果需要滚动吸顶固定某些元素，推荐使用css的粘性布局，参考[插件市场](https://ext.dcloud.net.cn/plugin?id=715)。插件市场也有其他js实现的吸顶插件，但性能不佳，需要时可自行搜索。
- If scrolling sticky is required to secure certain elements, it is recommended to use the sticky layout of css, refer to the [Plug-in market](https://ext.dcloud.net.cn/plugin?id=715). There are also other top-docking plug-ins based on js in the plug-in market but poor in performance. You can search by yourselves if necessary.
- 在App、微信小程序、H5中，也可以使用wxs监听滚动，[参考](https://uniapp.dcloud.io/tutorial/miniprogram-subject#wxs)；在app-nvue中，可以使用bindingx监听滚动，[参考](https://uniapp.dcloud.io/tutorial/nvue-api#nvue-里使用-bindingx)。
- In App, WeChat applet, H5, you can also use wxs to monitor scrolling, [Reference](https://uniapp.dcloud.io/tutorial/miniprogram-subject#wxs); in app-nvue, you can use bindingx Monitor scroll, [reference](https://uniapp.dcloud.io/tutorial/nvue-api#nvue-%E9%87%8C%E4%BD%BF%E7%94%A8-bindingx).
- `onBackPress`上不可使用`async`，会导致无法阻止默认返回
- `async` is not available on `onBackPress`, which will prevent the default return

```js
onPageScroll : function(e) { //nvue暂不支持滚动监听，可用bindingx代替
	console.log("滚动距离为：" + e.scrollTop);
},
```

`onTabItemTap` 返回的json对象说明：
Description of the json object returned by `onTabItemTap`:

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|index|Number|被点击tabItem的序号，从0开始|
| index| Number|The serial number of the clicked tabItem, starting from 0|
|pagePath|String|被点击tabItem的页面路径|
| pagePath| String| The page path of the clicked tabItem|
|text|String|被点击tabItem的按钮文字|
| text| String| The buttom text of the clicked tabItem|

**注意**
**Notice**
- onTabItemTap常用于点击当前tabitem，滚动或刷新当前页面。如果是点击不同的tabitem，一定会触发页面切换。
- onTabItemTap is often used to click the current tabitem and scroll or refresh the current page. If you click another tabitem, it will definitely trigger page switching.
- 如果想在App端实现点击某个tabitem不跳转页面，不能使用onTabItemTap，可以使用[plus.nativeObj.view](http://www.html5plus.org/doc/zh_cn/nativeobj.html)放一个区块盖住原先的tabitem，并拦截点击事件。
- If you want to click a tabitem on the App side without jumping to the page, you cannot use onTabItemTap, you can use [plus.nativeObj.view](http://www.html5plus.org/doc/zh_cn/nativeobj.html) to put a The block covers the original tabitem and intercepts click events.
- 支付宝小程序平台onTabItemTap表现为点击非当前tabitem后触发，因此不能用于实现点击返回顶部这种操作
- The onTabItemTap of the Alipay applet platform appears to be triggered after clicking on a non-current tabitem, so it cannot be used to realize the operation of clicking to return to the top

```js
onTabItemTap : function(e) {
	console.log(e);
	// e的返回格式为json对象： {"index":0,"text":"首页","pagePath":"pages/index/index"}
	// Return format of e is json object: {"index":0,"text":"Home page","pagePath":"pages/index/index"}
},
```

`onNavigationBarButtonTap` 参数说明：
`onNavigationBarButtonTap` parameter description:

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|index|Number|原生标题栏按钮数组的下标|
| index| Number| Subscript of native title bar button array|

```js
onNavigationBarButtonTap : function (e) {
	console.log(e);
	// e的返回格式为json对象：{"text":"测试","index":0}
	// The return format of e is a json object: {"text":"test","index":0}
}
```

`onBackPress` 回调参数对象说明：
Description of `onBackPress` callback parameter object:

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|from|String|触发返回行为的来源：'backbutton'——左上角导航栏按钮及安卓返回键；'navigateBack'——uni.navigateBack() 方法。**支付宝小程序端不支持返回此字段**|
|from|String|The source of triggering the return behavior: 'backbutton'——the upper left navigation bar button and Android back button; 'navigateBack'——uni.navigateBack() method. **Alipay applet does not support returning this field**|
```javascript
export default {
	data() {
		return {};
	},
	onBackPress(options) {
		console.log('from:' + options.from)
	}
}
```

**注意**
**Notice**

- nvue 页面weex编译模式支持的生命周期同weex，具体参考：[weex生命周期介绍](https://uniapp.dcloud.io/tutorial/nvue-outline?id=%e7%bc%96%e8%af%91%e6%a8%a1%e5%bc%8f)。
- The life cycle supported by the weex compilation mode of the nvue page is the same as that of weex. For details, please refer to: [Weex Life Cycle Introduction](https://uniapp.dcloud.io/tutorial/nvue-outline?id=%e7%bc%96%e8% af%91%e6%a8%a1%e5%bc%8f).
- 支付宝小程序真机可以监听到非`navigateBack`引发的返回事件（使用小程序开发工具时不会触发`onBackPress`），不可以阻止默认返回行为
- The real Alipay applet can monitor the return event not triggered by `navigateBack` (`onBackPress` will not be triggered when using the applet development tool), and cannot prevent the default return behavior

## 组件生命周期@componentlifecycle
## Component life cycle@componentlifecycle

`uni-app` 组件支持的生命周期，与vue标准组件的生命周期相同。这里没有页面级的onLoad等生命周期：
The `uni-app` component supports the same lifecycle as the vue standard components. There is no page-level onLoad and other life cycles here:

|函数名|说明|平台差异说明|最低版本|
| Function name| Instruction| Platform difference description| Minimum version|
|:-|:-|:-|:-|
|beforeCreate|在实例初始化之前被调用。[详见](https://v2.cn.vuejs.org/v2/api/#beforeCreate)|||
|beforeCreate| is called before the instance is initialized. [See details](https://v2.cn.vuejs.org/v2/api/#beforeCreate)|||
|created|在实例创建完成后被立即调用。[详见](https://v2.cn.vuejs.org/v2/api/#created)|||
|created|is called immediately after the instance is created. [See](https://v2.cn.vuejs.org/v2/api/#created)|||
|beforeMount|在挂载开始之前被调用。[详见](https://v2.cn.vuejs.org/v2/api/#beforeMount)|||
|beforeMount| is called before the mount starts. [See details](https://v2.cn.vuejs.org/v2/api/#beforeMount)|||
|mounted|挂载到实例上去之后调用。[详见](https://v2.cn.vuejs.org/v2/api/#mounted) 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用```$nextTick```[Vue官方文档](https://v2.cn.vuejs.org/v2/api/#vm-nextTick)|||
| mounted|Called after the instance is mounted. [See details](https://v2.cn.vuejs.org/v2/api/#mounted) Note: It is not sure that all subcomponents are mounted here, if you need to perform operations after subcomponents are fully mounted Use ```$nextTick```[Vue official document](https://v2.cn.vuejs.org/v2/api/#vm-nextTick)|||
|beforeUpdate|数据更新时调用，发生在虚拟 DOM 打补丁之前。[详见](https://v2.cn.vuejs.org/v2/api/#beforeUpdate)|仅H5平台支持||
| beforeUpdate| Called when the data is updated, before the virtual DOM is patched. [See details](https://v2.cn.vuejs.org/v2/api/#beforeUpdate)|Only supported by H5 platform||
|updated|由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。[详见](https://v2.cn.vuejs.org/v2/api/#updated)|仅H5平台支持||
|updated|This hook is called after the virtual DOM has been re-rendered and patched due to data changes. [See details](https://v2.cn.vuejs.org/v2/api/#updated)|Only supported by H5 platform||
|beforeDestroy|实例销毁之前调用。在这一步，实例仍然完全可用。[详见](https://v2.cn.vuejs.org/v2/api/#beforeDestroy)|||
|beforeDestroy|Called before the instance is destroyed. At this step, the instance is still fully available. [See details](https://v2.cn.vuejs.org/v2/api/#beforeDestroy)|||
|destroyed|Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。[详见](https://v2.cn.vuejs.org/v2/api/#destroyed)|||
| destroyed| Called when the Vue instance is destroyed. After calling, everything pointed to by the Vue instance will be unbound, all event listeners will be removed, and all child instances will be destroyed. [See details](https://v2.cn.vuejs.org/v2/api/#destroyed)|||

## 页面调用接口
## page call interface

### getApp()

```getApp()``` 函数用于获取当前应用实例，一般用于获取globalData 。
The ```getApp()``` function is used to get the current application instance, generally used to get globalData.

**实例**
**Instance**

```javascript
const app = getApp()
console.log(app.globalData)
```

**注意：**
**Notice:**
- 不要在定义于 `App()` 内的函数中，或调用 `App` 前调用 `getApp()` ，可以通过 `this.$scope` 获取对应的app实例
- Do not call `getApp()` in a function defined in `App()` or before calling `App`, you can get the corresponding app instance through `this.$scope`
- 通过 `getApp()` 获取实例之后，不要私自调用生命周期函数。
- After obtaining the instance through `getApp()`, do not call the life cycle function privately.
- 当在首页`nvue`中使用`getApp()`不一定可以获取真正的`App`对象。对此提供了`const app = getApp({allowDefault: true})`用来获取原始的`App`对象，可以用来在首页对`globalData`等初始化
- When you use `getApp()` in the home page `nvue`, you may not necessarily get the real `App` object. For this reason, `const app = getApp({allowDefault: true})` is provided to obtain the original `App` object, which can be used to initialize `globalData` etc. on the homepage

### getCurrentPages()

```getCurrentPages()``` 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。

**注意：** ``getCurrentPages()``仅用于展示页面栈的情况，请勿修改页面栈，以免造成页面状态错误。
**Note:** ``getCurrentPages()`` is only used to display the page stack, please do not modify the page stack to avoid page status errors.

每个页面实例的方法属性列表：
List of method properties for each page instance:

|方法|描述|平台说明|
|Methods|Description|Platform Description|
|---|---|---|
|page.$getAppWebview()|获取当前页面的webview对象实例|App|
|page.$getAppWebview()|Get the webview object instance of the current page |App|
|page.route|获取当前页面的路由|&nbsp;|
|page.route|Get the route of the current page|&nbsp;|

Tips：
* ``navigateTo``, ``redirectTo`` 只能打开非 tabBar 页面。
* ``navigateTo``, ``redirectTo`` can only open non-tabBar pages.
* ``switchTab`` 只能打开 ``tabBar`` 页面。
* ``switchTab`` can only open ``tabBar`` pages.
* ``reLaunch`` 可以打开任意页面。
* ``reLaunch`` can open any page.
* 页面底部的 ``tabBar`` 由页面决定，即只要是定义为 ``tabBar`` 的页面，底部都有 ``tabBar``。
* The ``tabBar`` at the bottom of the page is determined by the page, that is, as long as it is a page defined as ``tabBar``, there is a ``tabBar`` at the bottom.
* 不能在 ```App.vue``` 里面进行页面跳转。
* You cannot perform page jumps in ``App.vue````.

### $getAppWebview() @getappwebview

```uni-app``` 在 ```getCurrentPages()```获得的页面里内置了一个方法 ```$getAppWebview()``` 可以得到当前webview的对象实例，从而实现对 webview 更强大的控制。在 html5Plus 中，plus.webview具有强大的控制能力，可参考：[WebviewObject](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject)。
```uni-app``` There is a built-in method ```$getAppWebview()``` in the page obtained by ```getCurrentPages()```, which can get the object instance of the current webview, so as to realize the update of the webview. Powerful controls. In html5Plus, plus.webview has powerful control ability, please refer to: [WebviewObject](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject).

但`uni-app`框架有自己的窗口管理机制，请不要自己创建和销毁webview，如有需求覆盖子窗体上去，请使用[原生子窗体subNvue](/api/window/subNVues)。
But the `uni-app` framework has its own window management mechanism, please do not create and destroy the webview yourself. If you need to cover the sub-form, please use [native sub-form subNvue](/api/window/subNVues).

**注意：此方法仅 App 支持**
**Note: This method is only supported by App**

**示例：**
**Example:**

获取当前页面 webview 的对象实例
Get the object instance of the current page webview
```javascript
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {
    // #ifdef APP-PLUS
    const currentWebview = this.$scope.$getAppWebview(); //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
    currentWebview.setBounce({position:{top:'100px'},changeoffset:{top:'0px'}}); //动态重设bounce效果
    // #endif
  }
}
```

获取指定页面 webview 的对象实例
Get the object instance of the specified page webview

`getCurrentPages()`可以得到所有页面对象，然后根据数组，可以取指定的页面webview对象
`getCurrentPages()` can get all page objects, and then according to the array, you can get the specified page webview object
```javascript
var pages = getCurrentPages();
var page = pages[pages.length - 1];
// #ifdef APP-PLUS
var currentWebview = page.$getAppWebview();
console.log(currentWebview.id);//获得当前webview的id
console.log(currentWebview.isVisible());//查询当前webview是否可见
);
// #endif
```

uni-app自带的web-view组件，是页面中新插入的一个子webview。获取该对象的方法见：[https://ask.dcloud.net.cn/article/35036](https://ask.dcloud.net.cn/article/35036)
The web-view component that comes with uni-app is a newly inserted sub-webview in the page. For the method of obtaining this object, see: [https://ask.dcloud.net.cn/article/35036](https://ask.dcloud.net.cn/article/35036)

## 页面通讯
## page communication

### uni.$emit(eventName,OBJECT) @emit

触发全局的自定义事件。附加参数都会传给监听器回调。
Trigger a global custom event. Additional parameters are passed to the listener callback.

|属性		|类型	|描述				|
| Attribute| Type| Describe|
|---		|---	|---				|
|eventName	|String	|事件名				|
| eventName| String| Event name|
|OBJECT		|Object	|触发事件携带的附加参数	|
| OBJECT| Object| Additional parameters carried by triggering events|

**代码示例**
**Code example**
```javascript
	uni.$emit('update',{msg:'页面更新'})
```


### uni.$on(eventName,callback) @on

监听全局的自定义事件。事件可以由 uni.$emit 触发，回调函数会接收所有传入事件触发函数的额外参数。
Listen to global custom events. Events can be triggered by uni.$emit, and the callback function receives all the additional parameters of the incoming event trigger function.

|属性		|类型		|描述			|
| Attribute| Type| Describe|
|---		|---		|---			|
|eventName	|String		|事件名			|
| eventName| String| Event name|
|callback	|Function	|事件的回调函数	|
| callback| Function| Event callback function|


**代码示例**
**Code example**
```javascript
	uni.$on('update',function(data){
		console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
	})
```


### uni.$once(eventName,callback) @once

监听全局的自定义事件。事件可以由 uni.$emit 触发，但是只触发一次，在第一次触发之后移除监听器。
Listen to global custom events. Events can be triggered by uni.$emit, but only once. Remove the listener after the first trigger.

|属性		|类型		|描述			|
| Attribute| Type| Describe|
|---		|---		|---			|
|eventName	|String		|事件名			|
| eventName| String| Event name|
|callback	|Function	|事件的回调函数	|
| callback| Function| Event callback function|


**代码示例**
**Code example**
```javascript
	uni.$once('update',function(data){
		console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
	})
```

### uni.$off([eventName, callback]) @off

移除全局自定义事件监听器。
Remove the global custom event listener.

|属性		|类型			|描述			|
| Attribute| Type| Describe|
|---		|---			|---			|
|eventName	|Array＜String＞ |事件名			|
| eventName| Array＜String＞| Event name|
|callback	|Function		|事件的回调函数	|
| callback| Function| Event callback function|

**Tips**
- 如果没有提供参数，则移除所有的事件监听器；
- If no parameters are provided, remove all event listeners;
- 如果只提供了事件，则移除该事件所有的监听器；
- If only the event is provided, remove all listeners of the event;
- 如果同时提供了事件与回调，则只移除这个回调的监听器；
- If both event and callback are provided, only the listener of this callback will be removed;
- 提供的回调必须跟$on的回调为同一个才能移除这个回调的监听器；
- The provided callback must be the same one as the callback of $on to remove the listener of this callback;

**代码示例**
**Code example**

`$emit`、`$on`、`$off`常用于跨页面、跨组件通讯，这里为了方便演示放在同一个页面
`$emit`, `$on` and `$off` are commonly used for cross-page and cross-component communication, and are placed on the same page for easy demonstration

```html
	<template>
		<view class="content">
			<view class="data">
				<text>{{val}}</text>
			</view>
			<button type="primary" @click="comunicationOff">结束监听</button>
		</view>
	</template>

	<script>
		export default {
			data() {
				return {
					val: 0
				}
			},
			onLoad() {
				setInterval(()=>{
					uni.$emit('add', {
						data: 2
					})
				},1000)
				uni.$on('add', this.add)
			},
			methods: {
				comunicationOff() {
					uni.$off('add', this.add)
				},
				add(e) {
					this.val += e.data
				}
			}
		}
	</script>

	<style>
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.data {
			text-align: center;
			line-height: 40px;
			margin-top: 40px;
		}

		button {
			width: 200px;
			margin: 20px 0;
		}
	</style>

```


**注意事项**
**Precautions**
- uni.$emit、 uni.$on 、 uni.$once 、uni.$off 触发的事件都是 App 全局级别的，跨任意组件，页面，nvue，vue 等
- The events triggered by uni.$emit, uni.$on, uni.$once and uni.$off are all at the App global level, spanning arbitrary component, page, nvue, vue, etc.
- 使用时，注意及时销毁事件监听，比如，页面 onLoad 里边 uni.$on 注册监听，onUnload 里边 uni.$off 移除，或者一次性的事件，直接使用 uni.$once 监听
- When using, remember to destroy event listening to in time, for example, uni.$on registered listening to in the page onLoad, uni.$off removed in the page onUnload, or one-off events that use uni.$once to listen to directly

扩展阅读：
Further reading:

- [如何使用uni.$emit()和uni.$on() 进行页面间通讯](https://ask.dcloud.net.cn/article/36010)
- [How to use uni.$emit() and uni.$on() for inter-page communication](https://ask.dcloud.net.cn/article/36010)

## 路由
## Routing

`uni-app`页面路由为框架统一管理，开发者需要在[pages.json](/collocation/pages?id=pages)里配置每个路由页面的路径及页面样式。类似小程序在 app.json 中配置页面路由一样。所以 `uni-app` 的路由用法与 `Vue Router` 不同，如仍希望采用 `Vue Router` 方式管理路由，可在插件市场搜索 [Vue-Router](https://ext.dcloud.net.cn/search?q=vue-router)。
`uni-app` page routing is managed by the framework. Developers need to configure the path and page style of each routing page in [pages.json](/collocation/pages?id=pages). Similar to the applet configuring page routing in app.json. Therefore, the routing usage of `uni-app` is different from that of `Vue Router`. If you still want to use `Vue Router` to manage routing, you can search for [Vue-Router](https://ext.dcloud.net.cn /search?q=vue-router).

### 路由跳转
### Routing jump

`uni-app` 有两种页面路由跳转方式：使用[navigator](/component/navigator)组件跳转、调用[API](/api/router)跳转。
`uni-app` has two ways to jump to page routing: use [navigator](/component/navigator) component to jump, and call [API](/api/router) to jump.

## 页面栈
## page stack

框架以栈的形式管理当前所有页面， 当发生路由切换的时候，页面栈的表现如下：
The framework manages all current pages in the form of stack. When a route switch occurs, the page stack behaves as follows:

|路由方式|页面栈表现|触发时机|
|Routing mode|Page stack performance|Trigger timing|
|---|---|---|
|初始化|新页面入栈|uni-app 打开的第一个页面|
|Initialization|Pushing a new page into the stack|The first page opened by uni-app|
|打开新页面	|新页面入栈							|调用 API &nbsp; [uni.navigateTo](/api/router?id=navigateto) &nbsp;、使用组件 &nbsp;<a href="/component/navigator?id=navigator">&lt;navigator open-type="navigate"/&gt;</a>							|
| Open a new page| New page onto the stack| Call API [uni.navigateTo](/api/router?id=navigateto), use component <a href="/component/navigator?id=navigator">\<navigator open-type="navigate"/></a>|
|页面重定向	|当前页面出栈，新页面入栈			|调用 API  &nbsp; [uni.redirectTo](/api/router?id=redirectto) &nbsp;、使用组件&nbsp; <a href="/component/navigator?id=navigator">&lt;navigator open-type="redirectTo"/&gt;</a>							|
| Page redirection| The current page is out of the stack, and the new page is in the stack| Call API [uni.redirectTo](/api/router?id=redirectto), use component <a href="/component/navigator?id=navigator">\<navigator open-type="redirectTo"/></a>|
|页面返回	|页面不断出栈，直到目标返回页		|调用 API &nbsp;[uni.navigateBack](/api/router?id=navigateback) &nbsp; 、使用组件&nbsp;<a href="/component/navigator?id=navigator">&lt;navigator open-type="navigateBack"/&gt;</a>&nbsp;、用户按左上角返回按钮、安卓用户点击物理back按键	|
| Page return| The page is constantly popped until the target returns to the page| Call API [uni.navigateBack](/api/router?id=navigateback) , use component <a href="/component/navigator?id=navigator">\<navigator open-type="navigateBack"/></a>, user presses back button in the upper left corner, Android user presses back button|
|Tab 切换	|页面全部出栈，只留下新的 Tab 页面	|调用 API &nbsp;[uni.switchTab](/api/router?id=switchtab)&nbsp;  、使用组件&nbsp; <a href="/component/navigator?id=navigator">&lt;navigator open-type="switchTab"/&gt;</a>&nbsp; 、用户切换 Tab				|
| Tab switching| All the pages are out of the stack, leaving only the new Tab page| Call API [uni.switchTab](/api/router?id=switchtab), use component <a href="/component/navigator?id=navigator">\<navigator open-type="switchTab"/></a>, user switches Tab|
|重加载		|页面全部出栈，只留下新的页面		|调用 API &nbsp;[uni.reLaunch](/api/router?id=relaunch)&nbsp;  、使用组件 &nbsp;<a href="/component/navigator?id=navigator">&lt;navigator open-type="reLaunch"/&gt;</a>						|
| Reload| All the pages are out of the stack, leaving only the new page| Call API [uni.reLaunch](/api/router?id=relaunch), Use component <a href="/component/navigator?id=navigator">\<navigator open-type="reLaunch"/></a>|

## 页面代码规范介绍 @template-block
## Page code specification introduction @template-block

`uni-app` 支持在 template 模板中嵌套 `<template/>` 和 `<block/>`，用来进行 [列表渲染](/tutorial/vue-basics?id=listrendering) 和 [条件渲染](/tutorial/vue-basics?id=condition)。
`uni-app` supports nesting in template templates`<template/> ` and `<block/> `, for [listrendering](/tutorial/vue-basics?id=listrendering) and [conditional rendering](/tutorial/vue-basics?id=condition).

`<template/>` 和 `<block/>` 并不是一个组件，它们仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。
`<template/> ` and `<block/> ` is not a component, they are just a wrapper element that doesn&#39;t do any rendering on the page and only accepts control properties.

`<block/>` 在不同的平台表现存在一定差异，推荐统一使用 `<template/>`。
`<block/> ` There are some differences in the performance of different platforms, it is recommended to use it uniformly`<template/> `.

**代码示例**
**Code example**

```html
<template>
	<view>
		<template v-if="test">
			<view>test 为 true 时显示</view>
		</template>
		<template v-else>
			<view>test 为 false 时显示</view>
		</template>
	</view>
</template>
```

```html
<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view>{{item}} - {{index}}</view>
		</block>
	</view>
</template>
```

## nvue 开发与 vue 开发的常见区别
## Common differences between nvue development and vue development

基于原生引擎的渲染，虽然还是前端技术栈，但和 web 开发肯定是有区别的。
Rendering based on native engines, although it is still a front-end technology stack, is definitely different from web development.

1. nvue 页面控制显隐只可以使用`v-if`不可以使用`v-show`
1. Only `v-if` can be used to control the display and hide of nvue pages, not `v-show`
2. nvue 页面只能使用`flex`布局，不支持其他布局方式。页面开发前，首先想清楚这个页面的纵向内容有什么，哪些是要滚动的，然后每个纵向内容的横轴排布有什么，按 flex 布局设计好界面。
2. nvue pages can only use `flex` layout, other layout methods are not supported. Before developing a page, first figure out what the vertical content of this page has, which ones are to be scrolled, and then what is arranged on the horizontal axis of each vertical content, and design the interface according to the flex layout.
3. nvue 页面的布局排列方向默认为竖排（`column`），如需改变布局方向，可以在 `manifest.json` -> `app-plus` -> `nvue` -> `flex-direction` 节点下修改，仅在 uni-app 模式下生效。[详情](https://uniapp.dcloud.io/collocation/manifest?id=nvue)。
3. The layout direction of nvue pages is vertical (`column`) by default. To change the layout direction, you can go to `manifest.json` -> `app-plus` -> `nvue` -> `flex-direction` Modifications under the node only take effect in uni-app mode. [Details](https://uniapp.dcloud.io/collocation/manifest?id=nvue).
4. nvue 页面编译为 H5、小程序时，会做一件 css 默认值对齐的工作。因为 weex 渲染引擎只支持 flex，并且默认 flex 方向是垂直。而 H5 和小程序端，使用 web 渲染，默认不是 flex，并且设置`display:flex`后，它的 flex 方向默认是水平而不是垂直的。所以 nvue 编译为 H5、小程序时，会自动把页面默认布局设为 flex、方向为垂直。当然开发者手动设置后会覆盖默认设置。
4. When the nvue page is compiled into H5 and applet, it will do a work of aligning the default value of css. Because the weex rendering engine only supports flex, and the default flex direction is vertical. On the other hand, H5 and applet, which use web rendering, are not flex by default, and after setting `display:flex`, their flex direction is horizontal instead of vertical by default. Therefore, when nvue is compiled into H5 and applet, it will automatically set the default layout of the page to flex and the direction to be vertical. Of course, the default settings will be overwritten by the developer after manual settings.
5. 文字内容，必须、只能在`<text>`组件下。不能在`<div>`、`<view>`的`text`区域里直接写文字。否则即使渲染了，也无法绑定 js 里的变量。
5. The text content must and can only be in `<text> ` under Components. cannot be in `<div> `,`<view> Write text directly in the `text` area of ``. Otherwise, even if it is rendered, the variables in js cannot be bound.
6. 只有`text`标签可以设置字体大小，字体颜色。
6. Only the `text` tag can set the font size and font color.
7. 布局不能使用百分比、没有媒体查询。
7. Layouts cannot use percentages, no media queries.
8. nvue 切换横竖屏时可能导致样式出现问题，建议有 nvue 的页面锁定手机方向。
8. When nvue switches between landscape and portrait screens, it may cause style problems. It is recommended that pages with nvue lock the orientation of the phone.
9. 支持的 css 有限，不过并不影响布局出你需要的界面，`flex`还是非常强大的。[详见](/tutorial/nvue-css?id=flexbox)
9. The supported css is limited, but it does not affect the layout of the interface you need. `flex` is still very powerful. [See details](/tutorial/nvue-css?id=flexbox)
10. 不支持背景图。但可以使用`image`组件和层级来实现类似 web 中的背景效果。因为原生开发本身也没有 web 这种背景图概念
10. Background images are not supported. But you can use the `image` component and hierarchy to achieve background effects similar to those in the web. Because native development itself does not have the concept of web background image
11. css 选择器支持的比较少，只能使用 class 选择器。[详见](/tutorial/nvue-css)
11. CSS selectors are less supported, and only class selectors can be used. [See details](/tutorial/nvue-css)
12. nvue 的各组件在安卓端默认是透明的，如果不设置`background-color`，可能会导致出现重影的问题。
12. The components of nvue are transparent by default on the Android side. If `background-color` is not set, it may cause ghosting problems.
13. `class` 进行绑定时只支持数组语法。
13. `class` only supports array syntax when binding.
14. Android 端在一个页面内使用大量圆角边框会造成性能问题，尤其是多个角的样式还不一样的话更耗费性能。应避免这类使用。
14. Using a large number of rounded borders in a page on the Android side will cause performance problems, especially if the styles of multiple corners are not the same, it will cost more performance. Such use should be avoided.
15. nvue 页面没有`bounce`回弹效果，只有几个列表组件有`bounce`效果，包括 `list`、`recycle-list`、`waterfall`。
15. The nvue page has no `bounce` rebound effect, only a few list components have the `bounce` effect, including `list`, `recycle-list`, `waterfall`.
16. 原生开发没有页面滚动的概念，页面内容高过屏幕高度并不会自动滚动，只有部分组件可滚动（`list`、`waterfall`、`scroll-view/scroller`），要滚得内容需要套在可滚动组件下。这不符合前端开发的习惯，所以在 nvue 编译为 uni-app 模式时，给页面外层自动套了一个 `scroller`，页面内容过高会自动滚动。（组件不会套，页面有`recycle-list`时也不会套）。后续会提供配置，可以设置不自动套。
16. There is no concept of page scrolling in native development. The page content will not scroll automatically if it is higher than the screen height. Only some components can be scrolled (`list`, `waterfall`, `scroll-view/scroller`). Sleeve under the rollable assembly. This is not in line with the habit of front-end development, so when nvue is compiled into uni-app mode, a `scroller` is automatically placed on the outer layer of the page, and the page content is too high and it will scroll automatically. (Components will not be nested, nor will they be nested when the page has a `recycle-list`). The configuration will be provided later, and it can be set to not automatically set.
17. 在 App.vue 中定义的全局 js 变量不会在 nvue 页面生效。`globalData`和`vuex`是生效的。
17. Global js variables defined in App.vue will not take effect on nvue pages. `globalData` and `vuex` are in effect.
18. App.vue 中定义的全局 css，对 nvue 和 vue 页面同时生效。如果全局 css 中有些 css 在 nvue 下不支持，编译时控制台会报警，建议把这些不支持的 css 包裹在[条件编译](https://uniapp.dcloud.io/tutorial/platform)里，`APP-PLUS-NVUE`
18. The global css defined in App.vue takes effect on both nvue and vue pages. If some CSS in the global CSS is not supported under nvue, the console will alarm when compiling. It is recommended to wrap these unsupported CSS in [conditional compilation](https://uniapp.dcloud.io/tutorial/platform), ` APP-PLUS-NVUE`
19. 不能在 `style` 中引入字体文件，nvue 中字体图标的使用参考：[加载自定义字体](/tutorial/nvue-api?id=addrule)。如果是本地字体，可以用`plus.io`的 API 转换路径。
19. The font file cannot be imported in `style`. Reference for the use of font icons in nvue: [Load custom font](/tutorial/nvue-api?id=addrule). If it is a local font, you can use the `plus.io` API to convert the path.
20. 目前不支持在 nvue 页面使用 `typescript/ts`。
20. Currently using `typescript/ts` in nvue pages is not supported.
21. nvue 页面关闭原生导航栏时，想要模拟状态栏，可以[参考文章](https://ask.dcloud.net.cn/article/35111)。但是，仍然强烈建议在 nvue 页面使用原生导航栏。nvue 的渲染速度再快，也没有原生导航栏快。原生排版引擎解析`json`绘制原生导航栏耗时很少，而解析 nvue 的 js 绘制整个页面的耗时要大的多，尤其在新页面进入动画期间，对于复杂页面，没有原生导航栏会在动画期间产生整个屏幕的白屏或闪屏。
21. When the nvue page closes the native navigation bar, if you want to simulate the status bar, you can [refer to the article](https://ask.dcloud.net.cn/article/35111). However, it is still strongly recommended to use the native navigation bar in nvue pages. No matter how fast the rendering speed of nvue is, it is not as fast as the native navigation bar. It takes very little time for the native typesetting engine to parse `json` to draw the native navigation bar, but it takes much longer to parse the js of nvue to draw the entire page, especially when the new page enters the animation. For complex pages, there is no native navigation bar. Blank or flicker the entire screen during the animation.
