## 页面简介

uni-app项目中，一个页面就是一个符合`Vue SFC规范`的`.vue`文件或`.nvue`文件。

`.vue`页面和`.nvue`页面，均全平台支持，差异在于当uni-app发行到App平台时，`.vue`文件会使用webview进行渲染，`.nvue`会使用原生进行渲染，详见：[nvue原生渲染](/tutorial/nvue-outline)。

## 新建页面

`uni-app`中的页面，通常会保存在工程根目录下的`pages`目录下。

每次新建页面，均需在`pages.json`中配置`pages`列表；未在`pages.json -> pages` 中配置的页面，`uni-app`会在编译阶段进行忽略。pages.json的完整配置参考：[全局文件](/collocation/pages)。

通过HBuilderX开发 `uni-app` 项目时，在 `uni-app` 项目上右键“新建页面”，HBuilderX会自动在`pages.json`中完成页面注册，开发更方便。

同时，HBuilderX 还内置了常用的页面模板（如图文列表、商品列表等），选择这些模板，可以大幅提升你的开发效率。

<div>
<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/pages-add-02.png" style="max-width:450px"></img>
</div>

## 删除页面

删除页面时，需做两件工作：
- 删除`.vue`文件或`.nvue`文件
- 删除`pages.json -> pages`列表项中的配置

## 应用首页

`uni-app`会将`pages.json -> pages`配置项中的第一个页面，作为当前工程的首页（启动页）。

## 页面生命周期 @lifecycle

``uni-app`` 页面除支持 Vue 组件生命周期外还支持下方页面生命周期函数，当以组合式 API 使用时，在 Vue2 和 Vue3 中存在一定区别，请分别参考：[Vue2 组合式 API 使用文档](/tutorial/vue-composition-api.html) 和 [Vue3 组合式 API 使用文档](/tutorial/vue3-composition-api.html)。

|函数名|说明|平台差异说明|最低版本|
|:-|:-|:-|:-|
|onInit|监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad|百度小程序|3.1.0+|
|onLoad|监听页面加载，该钩子被调用时，响应式数据、计算属性、方法、侦听器、props、slots 已设置完成，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考[示例](/api/router?id=navigateto)|||
|onShow|监听页面显示，页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面|||
|onReady|监听页面初次渲染完成，此时组件已挂载完成，DOM 树($el)已可用，注意如果渲染速度快，会在页面进入动画完成前触发|||
|onHide|监听页面隐藏|||
|onUnload|监听页面卸载|||
|onResize|监听窗口尺寸变化|App、微信小程序、快手小程序||
|onPullDownRefresh|监听用户下拉动作，一般用于下拉刷新，参考[示例](api/ui/pulldown)|||
|onReachBottom|页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项|||
|onTabItemTap|点击 tab 时触发，参数为Object，具体见下方注意事项|微信小程序、QQ小程序、支付宝小程序、百度小程序、H5、App、快手小程序、京东小程序||
|onShareAppMessage|用户点击右上角分享|微信小程序、QQ小程序、支付宝小程序、字节小程序、飞书小程序、快手小程序、京东小程序||
|onPageScroll|监听页面滚动，参数为Object|nvue暂不支持||
|onNavigationBarButtonTap|监听原生标题栏按钮点击事件，参数为Object|App、H5||
|onBackPress|监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack ；详细说明及使用：[onBackPress 详解](http://ask.dcloud.net.cn/article/35120)。支付宝小程序只有真机能触发，只能监听非navigateBack引起的返回，不可阻止默认行为。|app、H5、支付宝小程序||
|onNavigationBarSearchInputChanged|监听原生标题栏搜索输入框输入内容变化事件|App、H5|1.6.0|
|onNavigationBarSearchInputConfirmed|监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。|App、H5|1.6.0|
|onNavigationBarSearchInputClicked|监听原生标题栏搜索输入框点击事件（pages.json 中的 searchInput 配置 disabled 为 true 时才会触发）|App、H5|1.6.0|
|onShareTimeline|监听用户点击右上角转发到朋友圈|微信小程序|2.8.1+|
|onAddToFavorites|监听用户点击右上角收藏|微信小程序、QQ小程序|2.8.1+|

`onInit`使用注意
- 仅百度小程序基础库 3.260 以上支持 onInit 生命周期
- 其他版本或平台可以同时使用 onLoad 生命周期进行兼容，注意避免重复执行相同逻辑
- 不依赖页面传参的逻辑可以直接使用 created 生命周期替代

`onReachBottom`使用注意
可在pages.json里定义具体页面底部的触发距离[onReachBottomDistance](/collocation/pages#globalstyle)，比如设为50，那么滚动页面到距离底部50px时，就会触发onReachBottom事件。

如使用scroll-view导致页面没有滚动，则触底事件不会被触发。scroll-view滚动到底部的事件请参考scroll-view的文档


`onPageScroll` （监听滚动、滚动监听、滚动事件）参数说明：

|属性|类型|说明|
|---|---|---|
|scrollTop|Number|页面在垂直方向已滚动的距离（单位px）|

**注意**
- `onPageScroll`里不要写交互复杂的js，比如频繁修改页面。因为这个生命周期是在渲染层触发的，在非h5端，js是在逻辑层执行的，两层之间通信是有损耗的。如果在滚动过程中，频发触发两层之间的数据交换，可能会造成卡顿。
- 如果想实现滚动时标题栏透明渐变，在App和H5下，可在pages.json中配置titleNView下的type为transparent，[参考](https://uniapp.dcloud.io/collocation/pages?id=app-titlenview)。
- 如果需要滚动吸顶固定某些元素，推荐使用css的粘性布局，参考[插件市场](https://ext.dcloud.net.cn/plugin?id=715)。插件市场也有其他js实现的吸顶插件，但性能不佳，需要时可自行搜索。
- 在App、微信小程序、H5中，也可以使用wxs监听滚动，[参考](https://uniapp.dcloud.io/tutorial/miniprogram-subject#wxs)；在app-nvue中，可以使用bindingx监听滚动，[参考](https://uniapp.dcloud.io/tutorial/nvue-api#nvue-里使用-bindingx)。
- `onBackPress`上不可使用`async`，会导致无法阻止默认返回

```js
onPageScroll : function(e) { //nvue暂不支持滚动监听，可用bindingx代替
	console.log("滚动距离为：" + e.scrollTop);
},
```

`onTabItemTap` 返回的json对象说明：

|属性|类型|说明|
|---|---|---|
|index|Number|被点击tabItem的序号，从0开始|
|pagePath|String|被点击tabItem的页面路径|
|text|String|被点击tabItem的按钮文字|

**注意**
- onTabItemTap常用于点击当前tabitem，滚动或刷新当前页面。如果是点击不同的tabitem，一定会触发页面切换。
- 如果想在App端实现点击某个tabitem不跳转页面，不能使用onTabItemTap，可以使用[plus.nativeObj.view](http://www.html5plus.org/doc/zh_cn/nativeobj.html)放一个区块盖住原先的tabitem，并拦截点击事件。
- 支付宝小程序平台onTabItemTap表现为点击非当前tabitem后触发，因此不能用于实现点击返回顶部这种操作

```js
onTabItemTap : function(e) {
	console.log(e);
	// e的返回格式为json对象： {"index":0,"text":"首页","pagePath":"pages/index/index"}
},
```

`onNavigationBarButtonTap` 参数说明：

|属性|类型|说明|
|---|---|---|
|index|Number|原生标题栏按钮数组的下标|

```js
onNavigationBarButtonTap : function (e) {
	console.log(e);
	// e的返回格式为json对象：{"text":"测试","index":0}
}
```

`onBackPress` 回调参数对象说明：

|属性|类型|说明|
|---|---|---|
|from|String|触发返回行为的来源：'backbutton'——左上角导航栏按钮及安卓返回键；'navigateBack'——uni.navigateBack() 方法。**支付宝小程序端不支持返回此字段**|
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

- nvue 页面weex编译模式支持的生命周期同weex，具体参考：[weex生命周期介绍](https://uniapp.dcloud.io/tutorial/nvue-outline?id=%e7%bc%96%e8%af%91%e6%a8%a1%e5%bc%8f)。
- 支付宝小程序真机可以监听到非`navigateBack`引发的返回事件（使用小程序开发工具时不会触发`onBackPress`），不可以阻止默认返回行为

## 组件生命周期@componentlifecycle

`uni-app` 组件支持的生命周期，与vue标准组件的生命周期相同。这里没有页面级的onLoad等生命周期：

|函数名|说明|平台差异说明|最低版本|
|:-|:-|:-|:-|
|beforeCreate|在实例初始化之前被调用。[详见](https://v2.cn.vuejs.org/v2/api/#beforeCreate)|||
|created|在实例创建完成后被立即调用。[详见](https://v2.cn.vuejs.org/v2/api/#created)|||
|beforeMount|在挂载开始之前被调用。[详见](https://v2.cn.vuejs.org/v2/api/#beforeMount)|||
|mounted|挂载到实例上去之后调用。[详见](https://v2.cn.vuejs.org/v2/api/#mounted) 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用```$nextTick```[Vue官方文档](https://v2.cn.vuejs.org/v2/api/#vm-nextTick)|||
|beforeUpdate|数据更新时调用，发生在虚拟 DOM 打补丁之前。[详见](https://v2.cn.vuejs.org/v2/api/#beforeUpdate)|仅H5平台支持||
|updated|由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。[详见](https://v2.cn.vuejs.org/v2/api/#updated)|仅H5平台支持||
|beforeDestroy|实例销毁之前调用。在这一步，实例仍然完全可用。[详见](https://v2.cn.vuejs.org/v2/api/#beforeDestroy)|||
|destroyed|Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。[详见](https://v2.cn.vuejs.org/v2/api/#destroyed)|||

## 页面调用接口

### getApp()

```getApp()``` 函数用于获取当前应用实例，一般用于获取globalData 。

**实例**

```javascript
const app = getApp()
console.log(app.globalData)
```

**注意：**
- 不要在定义于 `App()` 内的函数中，或调用 `App` 前调用 `getApp()` ，可以通过 `this.$scope` 获取对应的app实例
- 通过 `getApp()` 获取实例之后，不要私自调用生命周期函数。
- 当在首页`nvue`中使用`getApp()`不一定可以获取真正的`App`对象。对此提供了`const app = getApp({allowDefault: true})`用来获取原始的`App`对象，可以用来在首页对`globalData`等初始化

### getCurrentPages()

```getCurrentPages()``` 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。

**注意：** ``getCurrentPages()``仅用于展示页面栈的情况，请勿修改页面栈，以免造成页面状态错误。

每个页面实例的方法属性列表：

|方法|描述|平台说明|
|---|---|---|
|page.$getAppWebview()|获取当前页面的webview对象实例|App|
|page.route|获取当前页面的路由|&nbsp;|

Tips：
* ``navigateTo``, ``redirectTo`` 只能打开非 tabBar 页面。
* ``switchTab`` 只能打开 ``tabBar`` 页面。
* ``reLaunch`` 可以打开任意页面。
* 页面底部的 ``tabBar`` 由页面决定，即只要是定义为 ``tabBar`` 的页面，底部都有 ``tabBar``。
* 不能在 ```App.vue``` 里面进行页面跳转。

### $getAppWebview() @getappwebview

```uni-app``` 在 ```getCurrentPages()```获得的页面里内置了一个方法 ```$getAppWebview()``` 可以得到当前webview的对象实例，从而实现对 webview 更强大的控制。在 html5Plus 中，plus.webview具有强大的控制能力，可参考：[WebviewObject](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject)。

但`uni-app`框架有自己的窗口管理机制，请不要自己创建和销毁webview，如有需求覆盖子窗体上去，请使用[原生子窗体subNvue](/api/window/subNVues)。

**注意：此方法仅 App 支持**

**示例：**

获取当前页面 webview 的对象实例
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

`getCurrentPages()`可以得到所有页面对象，然后根据数组，可以取指定的页面webview对象
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

## 页面通讯

### uni.$emit(eventName,OBJECT) @emit

触发全局的自定义事件。附加参数都会传给监听器回调。

|属性		|类型	|描述				|
|---		|---	|---				|
|eventName	|String	|事件名				|
|OBJECT		|Object	|触发事件携带的附加参数	|

**代码示例**
```javascript
	uni.$emit('update',{msg:'页面更新'})
```


### uni.$on(eventName,callback) @on

监听全局的自定义事件。事件可以由 uni.$emit 触发，回调函数会接收所有传入事件触发函数的额外参数。

|属性		|类型		|描述			|
|---		|---		|---			|
|eventName	|String		|事件名			|
|callback	|Function	|事件的回调函数	|


**代码示例**
```javascript
	uni.$on('update',function(data){
		console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
	})
```


### uni.$once(eventName,callback) @once

监听全局的自定义事件。事件可以由 uni.$emit 触发，但是只触发一次，在第一次触发之后移除监听器。

|属性		|类型		|描述			|
|---		|---		|---			|
|eventName	|String		|事件名			|
|callback	|Function	|事件的回调函数	|


**代码示例**
```javascript
	uni.$once('update',function(data){
		console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
	})
```

### uni.$off([eventName, callback]) @off

移除全局自定义事件监听器。

|属性		|类型			|描述			|
|---		|---			|---			|
|eventName	|Array＜String＞ |事件名			|
|callback	|Function		|事件的回调函数	|

**Tips**
- 如果没有提供参数，则移除所有的事件监听器；
- 如果只提供了事件，则移除该事件所有的监听器；
- 如果同时提供了事件与回调，则只移除这个回调的监听器；
- 提供的回调必须跟$on的回调为同一个才能移除这个回调的监听器；

**代码示例**

`$emit`、`$on`、`$off`常用于跨页面、跨组件通讯，这里为了方便演示放在同一个页面

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
- uni.$emit、 uni.$on 、 uni.$once 、uni.$off 触发的事件都是 App 全局级别的，跨任意组件，页面，nvue，vue 等
- 使用时，注意及时销毁事件监听，比如，页面 onLoad 里边 uni.$on 注册监听，onUnload 里边 uni.$off 移除，或者一次性的事件，直接使用 uni.$once 监听

扩展阅读：

- [如何使用uni.$emit()和uni.$on() 进行页面间通讯](https://ask.dcloud.net.cn/article/36010)

## 路由

`uni-app`页面路由为框架统一管理，开发者需要在[pages.json](/collocation/pages?id=pages)里配置每个路由页面的路径及页面样式。类似小程序在 app.json 中配置页面路由一样。所以 `uni-app` 的路由用法与 `Vue Router` 不同，如仍希望采用 `Vue Router` 方式管理路由，可在插件市场搜索 [Vue-Router](https://ext.dcloud.net.cn/search?q=vue-router)。

### 路由跳转

`uni-app` 有两种页面路由跳转方式：使用[navigator](/component/navigator)组件跳转、调用[API](/api/router)跳转。

## 页面栈

框架以栈的形式管理当前所有页面， 当发生路由切换的时候，页面栈的表现如下：

|路由方式|页面栈表现|触发时机|
|---|---|---|
|初始化|新页面入栈|uni-app 打开的第一个页面|
|打开新页面	|新页面入栈							|调用 API &nbsp; [uni.navigateTo](/api/router?id=navigateto) &nbsp;、使用组件 &nbsp;<a href="/component/navigator?id=navigator">&lt;navigator open-type="navigate"/&gt;</a>							|
|页面重定向	|当前页面出栈，新页面入栈			|调用 API  &nbsp; [uni.redirectTo](/api/router?id=redirectto) &nbsp;、使用组件&nbsp; <a href="/component/navigator?id=navigator">&lt;navigator open-type="redirectTo"/&gt;</a>							|
|页面返回	|页面不断出栈，直到目标返回页		|调用 API &nbsp;[uni.navigateBack](/api/router?id=navigateback) &nbsp; 、使用组件&nbsp;<a href="/component/navigator?id=navigator">&lt;navigator open-type="navigateBack"/&gt;</a>&nbsp;、用户按左上角返回按钮、安卓用户点击物理back按键	|
|Tab 切换	|页面全部出栈，只留下新的 Tab 页面	|调用 API &nbsp;[uni.switchTab](/api/router?id=switchtab)&nbsp;  、使用组件&nbsp; <a href="/component/navigator?id=navigator">&lt;navigator open-type="switchTab"/&gt;</a>&nbsp; 、用户切换 Tab				|
|重加载		|页面全部出栈，只留下新的页面		|调用 API &nbsp;[uni.reLaunch](/api/router?id=relaunch)&nbsp;  、使用组件 &nbsp;<a href="/component/navigator?id=navigator">&lt;navigator open-type="reLaunch"/&gt;</a>						|

## 页面代码规范介绍 @template-block

`uni-app` 支持在 template 模板中嵌套 `<template/>` 和 `<block/>`，用来进行 [列表渲染](/tutorial/vue-basics?id=listrendering) 和 [条件渲染](/tutorial/vue-basics?id=condition)。

`<template/>` 和 `<block/>` 并不是一个组件，它们仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。

`<block/>` 在不同的平台表现存在一定差异，推荐统一使用 `<template/>`。

**代码示例**

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

基于原生引擎的渲染，虽然还是前端技术栈，但和 web 开发肯定是有区别的。

1. nvue 页面控制显隐只可以使用`v-if`不可以使用`v-show`
2. nvue 页面只能使用`flex`布局，不支持其他布局方式。页面开发前，首先想清楚这个页面的纵向内容有什么，哪些是要滚动的，然后每个纵向内容的横轴排布有什么，按 flex 布局设计好界面。
3. nvue 页面的布局排列方向默认为竖排（`column`），如需改变布局方向，可以在 `manifest.json` -> `app-plus` -> `nvue` -> `flex-direction` 节点下修改，仅在 uni-app 模式下生效。[详情](https://uniapp.dcloud.io/collocation/manifest?id=nvue)。
4. nvue 页面编译为 H5、小程序时，会做一件 css 默认值对齐的工作。因为 weex 渲染引擎只支持 flex，并且默认 flex 方向是垂直。而 H5 和小程序端，使用 web 渲染，默认不是 flex，并且设置`display:flex`后，它的 flex 方向默认是水平而不是垂直的。所以 nvue 编译为 H5、小程序时，会自动把页面默认布局设为 flex、方向为垂直。当然开发者手动设置后会覆盖默认设置。
5. 文字内容，必须、只能在`<text>`组件下。不能在`<div>`、`<view>`的`text`区域里直接写文字。否则即使渲染了，也无法绑定 js 里的变量。
6. 只有`text`标签可以设置字体大小，字体颜色。
7. 布局不能使用百分比、没有媒体查询。
8. nvue 切换横竖屏时可能导致样式出现问题，建议有 nvue 的页面锁定手机方向。
9. 支持的 css 有限，不过并不影响布局出你需要的界面，`flex`还是非常强大的。[详见](/tutorial/nvue-css?id=flexbox)
10. 不支持背景图。但可以使用`image`组件和层级来实现类似 web 中的背景效果。因为原生开发本身也没有 web 这种背景图概念
11. css 选择器支持的比较少，只能使用 class 选择器。[详见](/tutorial/nvue-css)
12. nvue 的各组件在安卓端默认是透明的，如果不设置`background-color`，可能会导致出现重影的问题。
13. `class` 进行绑定时只支持数组语法。
14. Android 端在一个页面内使用大量圆角边框会造成性能问题，尤其是多个角的样式还不一样的话更耗费性能。应避免这类使用。
15. nvue 页面没有`bounce`回弹效果，只有几个列表组件有`bounce`效果，包括 `list`、`recycle-list`、`waterfall`。
16. 原生开发没有页面滚动的概念，页面内容高过屏幕高度并不会自动滚动，只有部分组件可滚动（`list`、`waterfall`、`scroll-view/scroller`），要滚得内容需要套在可滚动组件下。这不符合前端开发的习惯，所以在 nvue 编译为 uni-app 模式时，给页面外层自动套了一个 `scroller`，页面内容过高会自动滚动。（组件不会套，页面有`recycle-list`时也不会套）。后续会提供配置，可以设置不自动套。
17. 在 App.vue 中定义的全局 js 变量不会在 nvue 页面生效。`globalData`和`vuex`是生效的。
18. App.vue 中定义的全局 css，对 nvue 和 vue 页面同时生效。如果全局 css 中有些 css 在 nvue 下不支持，编译时控制台会报警，建议把这些不支持的 css 包裹在[条件编译](https://uniapp.dcloud.io/tutorial/platform)里，`APP-PLUS-NVUE`
19. 不能在 `style` 中引入字体文件，nvue 中字体图标的使用参考：[加载自定义字体](/tutorial/nvue-api?id=addrule)。如果是本地字体，可以用`plus.io`的 API 转换路径。
20. 目前不支持在 nvue 页面使用 `typescript/ts`。
21. nvue 页面关闭原生导航栏时，想要模拟状态栏，可以[参考文章](https://ask.dcloud.net.cn/article/35111)。但是，仍然强烈建议在 nvue 页面使用原生导航栏。nvue 的渲染速度再快，也没有原生导航栏快。原生排版引擎解析`json`绘制原生导航栏耗时很少，而解析 nvue 的 js 绘制整个页面的耗时要大的多，尤其在新页面进入动画期间，对于复杂页面，没有原生导航栏会在动画期间产生整个屏幕的白屏或闪屏。
