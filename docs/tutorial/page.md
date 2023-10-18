## 页面简介

uni-app项目中，一个页面就是一个符合`Vue SFC规范`的 vue 文件。

- 在 uni-app js 引擎版中，后缀名是`.vue`文件或`.nvue`文件。
	这些页面均全平台支持，差异在于当 uni-app 发行到App平台时，`.vue`文件会使用webview进行渲染，`.nvue`会使用原生进行渲染，详见：[nvue原生渲染](/tutorial/nvue-outline)。
	
	一个页面可以同时存在vue和nvue，在[pages.json](../collocation/pages.md)的路由注册中不包含页面文件名后缀，同一个页面可以对应2个文件名。重名时优先级如下：
	- 在非app平台，先使用vue，忽略nvue
	- 在app平台，使用nvue，忽略vue

- 在 uni-app x 中，后缀名是`.uvue`文件

	uni-app x 中没有js引擎和webview，不支持和vue页面并存。
	
	uni-app x 在app-android上，每个页面都是一个全屏activity，不支持透明。

## 新建页面

`uni-app`中的页面，默认保存在工程根目录下的`pages`目录下。

每次新建页面，均需在`pages.json`中配置`pages`列表；未在`pages.json -> pages` 中注册的页面，`uni-app`会在编译阶段进行忽略。pages.json的完整配置参考：[页面配置](../collocation/pages.md)。

通过HBuilderX开发 `uni-app` 项目时，在 `uni-app` 项目上右键“新建页面”，HBuilderX会自动在`pages.json`中完成页面注册，开发更方便。

同时，HBuilderX 还内置了常用的页面模板（如图文列表、商品列表等），选择这些模板，可以大幅提升你的开发效率。

<div>
<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/pages-add-02.png" style="max-width:450px"></img>
</div>

新建页面时，可以选择`是否创建同名目录`。创建目录的意义在于，
- 如果你的页面较复杂，需要拆分多个附属的js、css、组件等文件，则使用目录归纳比较合适。
- 如果只有一个页面文件，大可不必多放一层目录。

## 删除页面

删除页面时，需做两件工作：
- 删除`.vue`文件、`.nvue`、`.uvue`文件
- 删除`pages.json -> pages`列表项中的配置 （如使用HBuilderX删除页面，会在状态栏提醒删除pages.json对应内容，点击后会打开pages.json并定位到相关配置项）

页面改名同理。

## pages.json

pages.json是工程的页面管理配置文件，包括：页面路由注册、页面参数配置（原生标题栏、下拉刷新...）、首页tabbar等众多功能。

其篇幅较长，另见 [pages.json](../collocation/pages.md)

## 应用首页

`pages.json -> pages`配置项中的第一个页面，作为当前工程的首页（启动页）。

```json
{
	"pages": [
		{
			"path": "pages/index/index", //名字叫不叫index无所谓，位置在第一个，就是首页
			"style": {
				"navigationBarTitleText": "首页" //页面标题
			}
		},
		{
			"path": "pages/my",
			"style": {
				"navigationBarTitleText": "我的"
			}
		},
	]
}
```

## 页面内容构成

uni-app 页面基于 vue 规范。一个页面内，有3个根节点标签 `<template>`、`<script>`、`<style>`，分别是模板组件区、脚本区、样式区。

```html
<template>
	<view class="content">
		<button @click="buttonClick">{{title}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "Hello world", // 定义绑定在页面上的data数据
			}
		},
		onLoad() {
			// 页面启动的生命周期，这里编写页面加载时的逻辑
		},
		methods: {
			buttonClick: function () {
				console.log("按钮被点了")
			},
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

### template模板区

template中文名为`模板`，它类似html的标签。但有2个区别：
1. html中script和style是html的二级节点。但在vue文件中，template、script、style这3个是平级关系。
2. html中写的是web标签，但vue的template中写的全都是vue组件，每个组件支持属性、事件、vue指令，还可以绑定vue的data数据。

在vue2中，template的二级节点只能有一个节点，一般是在一个根view下继续写页面组件（如上示例代码）。

但在vue3中，template可以有多个二级节点，省去一个层级，如下：
```html
<template>
	<view>
		<text>标题</text>
	</view>
	<scroll-view>
		
	</scroll-view>
</template>
```

可以在manifest中切换使用vue2还是vue3（uni-app x中只支持vue3）

### script脚本区

script中编写脚本，可以通过lang属性指定脚本语言。

- 在vue和nvue中，默认是js，可以指定ts。
- 在uvue中，仅支持uts，不管script的lang属性写成什么，都按uts编译。

```html
<script lang="ts">
</script>
```

在vue的选项式（option）规范中，script下包含`export default {}`。（除了选项式，还有[组合式](vue3-composition-api.md)）

页面级的代码大多写在`export default {}`中。写在里面的代码，会随着页面关闭而关闭。

#### export default 外的代码

先来介绍写在`export default {}`外面的代码，一般有几种情况：
1. import三方js/ts模块
2. import非easycom的组件（一般组件推荐使用[easycom](../collocation/pages.md#easycom)，无需导入注册）
3. 在ts/uts中，对data的类型进行type定义
4. 定义作用域更大的变量

```html
<script lang="ts">
	const TAB_OFFSET = 1; // 外层静态变量不会跟随页面关闭而回收
	import charts from 'charts.ts'; // 导入外部js/ts模块
	import swiperPage from 'swiper-page.vue'; //导入非easycom的组件
	type GroupType = {
		id : number,
		title : string
	} // 在ts中，为下面data数据的 groupList 定义类型
	export default {
		components: {
		    swiperPage
		}, // 注册非easycom组件
		data() {
			return {
				groupList: [
					{ id: 1, title: "第一组" },
					{ id: 2, title: "第二组" },
				] as GroupType[], // 为数据groupList定义ts类型
			}
		},
		onLoad() {},
		methods: {}
	}
</script>
```

开发者应谨慎编写`export default {}`外面的代码，这里的代码有2个注意事项：
1. 在应用启动时执行。也就是这里的代码执行时机是应用启动、而不是页面加载。如果这里的代码写的太复杂，会影响应用启动速度和内存占用。
2. 不跟随页面关闭而回收。在外层的静态变量不会跟随页面关闭而回收。


#### export default 里的代码
`export default {}` 里的内容，是页面的主要逻辑代码。包括几部分：
1. data：template模板中需要使用的数据。具体[另见](vue-basics.md#data)
2. 页面生命周期：如页面加载、隐藏、关闭，具体[见下](#lifecycle)
3. methods方法，如按钮点击、屏幕滚动

如下页面代码的逻辑是：
1. 在data中定义了`title`，初始值是"点我"
2. 在页面中放置了一个button组件，按钮文字区使用`{{}}`模板写法，里面写`title`，把data里的`title`绑定到按钮的文字区，即按钮的初始文字是"点我"
3. 按钮的点击事件`@click`，指向了methods里的一个方法`buttonClick`，点击按钮即触发这个方法的执行
4. buttonClick方法里通过`this.title`的方式，访问data数据，并重新赋值为"被点了"。由于vue中data和界面是双向绑定，修改data中的`title`后，因为按钮文字绑定了`title`，会自动更新按钮的文字。

整体效果就是，刚开始按钮文字是"点我"，点一下后按钮文字变成了"被点了"

```html
<template>
	<view>
		<button @click="buttonClick">{{title}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "点我", // 定义绑定在页面上的data数据
				// 多个data在这里继续定义。逗号分隔
			}
		},
		onLoad() {
			// 页面启动的生命周期，这里编写页面加载时的逻辑
		},
		// 多个页面生命周期监听，在这里继续写。逗号分隔
		methods: {
			buttonClick: function () {
				this.title = "被点了"
			},
			// 多个方法，在这里继续写。逗号分隔
		}
	}
</script>
```

本章节为页面代码介绍，并非vue教程，了解data数据需[详见](vue-basics.md#data)

### style样式区

style的写法与web的css基本相同。

如果页面是nvue或uvue，使用原生渲染而不是webview渲染，那么它们支持的css是有限的。

详见[css文档](syntax-css.md)

## 页面生命周期@lifecycle

``uni-app`` 页面除支持 Vue 组件生命周期外还支持下方页面生命周期函数，当以组合式 API 使用时，在 Vue2 和 Vue3 中存在一定区别，请分别参考：[Vue2 组合式 API 使用文档](/tutorial/vue-composition-api.html) 和 [Vue3 组合式 API 使用文档](/tutorial/vue3-composition-api.html)。

|函数名|说明|平台差异说明|最低版本|
|:-|:-|:-|:-|
|onInit|监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad|百度小程序|3.1.0+|
|onLoad|监听页面加载，该钩子被调用时，响应式数据、计算属性、方法、侦听器、props、slots 已设置完成，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考[示例](/api/router?id=navigateto)。|||
|onShow|监听页面显示，页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面|||
|onReady|监听页面初次渲染完成，此时组件已挂载完成，DOM 树($el)已可用，注意如果渲染速度快，会在页面进入动画完成前触发|||
|onHide|监听页面隐藏|||
|onUnload|监听页面卸载|||
|onResize|监听窗口尺寸变化|App、微信小程序、快手小程序||
|onPullDownRefresh|监听用户下拉动作，一般用于下拉刷新，参考[示例](api/ui/pulldown)|||
|onReachBottom|页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项|||
|onTabItemTap|点击 tab 时触发，参数为Object，具体见下方注意事项|微信小程序、QQ小程序、支付宝小程序、百度小程序、H5、App、快手小程序、京东小程序||
|onShareAppMessage|用户点击右上角分享|微信小程序、QQ小程序、支付宝小程序、抖音小程序、飞书小程序、快手小程序、京东小程序||
|onPageScroll|监听页面滚动，参数为Object|nvue不支持||
|onNavigationBarButtonTap|监听原生标题栏按钮点击事件，参数为Object|App、H5||
|onBackPress|监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack；[详见](#onbackpress)|app、H5、支付宝小程序||
|onNavigationBarSearchInputChanged|监听原生标题栏搜索输入框输入内容变化事件|App、H5|1.6.0|
|onNavigationBarSearchInputConfirmed|监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。|App、H5|1.6.0|
|onNavigationBarSearchInputClicked|监听原生标题栏搜索输入框点击事件（pages.json 中的 searchInput 配置 disabled 为 true 时才会触发）|App、H5|1.6.0|
|onShareTimeline|监听用户点击右上角转发到朋友圈|微信小程序|2.8.1+|
|onAddToFavorites|监听用户点击右上角收藏|微信小程序、QQ小程序|2.8.1+|

### 页面加载时序介绍@timeline

接下来我们介绍onLoad、onReady、onShow的先后关系，页面加载的详细流程。

1. uni-app框架，首先根据pages.json的配置，创建页面

所以原生导航栏是最快显示的。页面背景色也应该在这里配置。

2.根据页面template里的组件，创建dom。

这里的dom创建仅包含第一批处理的静态dom。对于通过js/uts更新data然后通过v-for再创建的列表数据，不在第一批处理。

要注意一个页面静态dom元素过多，会影响页面加载速度。在uni-app x Android版本上，可能会阻碍页面进入的转场动画。
因为此时，页面转场动画还没有启动。

3. 触发onLoad

此时页面还未显示，没有开始进入的转场动画，页面dom还不存在。

所以这里不能直接操作dom（可以修改data，因为vue框架会等待dom准备后再更新界面）；在 app-uvue 中获取当前的activity拿到的是老页面的activity，只能通过页面栈获取activity。

onLoad比较适合的操作是：接受上页的参数，联网取数据，更新data。

手机都是多核的，uni.request或云开发联网，在子线程运行，不会干扰UI线程的入场动画，并行处理可以更快的拿到数据、渲染界面。

但onLoad里不适合进行大量同步耗时运算，因为此时转场动画还没开始。

尤其uni-app x 在 Android上，onLoad里的代码（除了联网和加载图片）默认是在UI线程运行的，大量同步耗时计算很容易卡住页面动画不启动。除非开发者显式指定在其他线程运行。

4. 转场动画开始

新页面开始进入的转场动画，动画默认耗时300ms，可以在路由API中调节时长。

5. 页面onReady

第2步创建dom是虚拟dom，dom创建后需要经历一段时间，UI层才能完成了页面上真实元素的创建，即触发了onReady。

onReady后，页面元素就可以自由操作了，比如ref获取节点。同时首批界面也渲染了。

注意：onReady和转场动画开始、结束之间，没有必然的先后顺序，完全取决于dom的数量和复杂度。

如果元素排版和渲染够快，转场动画刚开始就渲染好了；

大多情况下，转场动画走几格就看到了首批渲染内容；

如果元素排版和渲染过慢，转场动画结束都没有内容，就会造成白屏。

联网进程从onLoad起就在异步获取数据更新data，如果服务器速度够快，第二批数据也可能在转场动画结束前渲染。

6. 转场动画结束

再次强调，5和6的先后顺序不一定，取决于首批dom渲染的速度。

### 页面加载常见问题@pagefaq

了解了页面加载时序原理，我们就知道如何避免页面加载常见的问题：

- 优化白屏的方法：
1. 页面dom太多，注意有的组件写的不好，会拖累整体页面。uni-app x 里减少dom数量的策略，[详见](../uni-app-x/performance.md)
2. 联网不要在onReady里，那样太慢了，在onLoad里早点联网
3. 在pages.json里配置原生导航栏和背景色
4. 有的页面template内容非常少，整页就是一个需要联网加载的列表，这会造成虽然首批dom飞快渲染了，但页面其实还是白的，联网后才能显示字和图。
	此时需要在template里做一些简单占位组件，比如loading组件、骨架屏，让本地先显示一些内容。

- 卡住动画不启动的原因：
1. 页面dom太多，注意有的组件写的不好，会拖累整体页面。uni-app x 里减少dom数量的策略，[详见](../uni-app-x/performance.md)
2. onLoad里执行了耗时的同步计算

### onShow和onHide

注意页面显示，是一个会重复触发的事件。

a页面刚进入时，会触发a页面的onShow。

当a跳转到b页面时，a会触发onHide，而b会触发onShow。

但当b被关闭时，b会触发onUnload，此时a再次显示出现，会再次触发onShow。

在tabbar页面（指pages.json里配置的tabbar），不同tab页面互相切换时，会触发各自的onShow和onHide。


### onInit

**注意**

- 仅百度小程序基础库 3.260 以上支持 onInit 生命周期
- 其他版本或平台可以同时使用 onLoad 生命周期进行兼容，注意避免重复执行相同逻辑
- 不依赖页面传参的逻辑可以直接使用 created 生命周期替代

### onLoad

**注意**

- `uni-app x android` 平台，如需获取 [activity 实例](plugin/uts-for-android.md#activity)，此时当前页面的 `activity 实例`并未创建完成，会获取到上一个页面的 `activity 实例`（首页会获取应用默认的 `activity 实例`）。如需获取当前页面的 `activity 实例`，应在 `onShow` 或 `onReady` 生命周期中获取。

### onReachBottom

可在pages.json里定义具体页面底部的触发距离[onReachBottomDistance](/collocation/pages#globalstyle)，

比如设为50，那么滚动页面到距离底部50px时，就会触发onReachBottom事件。

如使用scroll-view导致页面没有滚动，则触底事件不会被触发。scroll-view滚动到底部的事件请参考scroll-view的文档。

### onPageScroll

**参数说明**

|属性|类型|说明|
|---|---|---|
|scrollTop|Number|页面在垂直方向已滚动的距离（单位px）|
```js
onPageScroll : function(e) { //nvue暂不支持滚动监听，可用bindingx代替
	console.log("滚动距离为：" + e.scrollTop);
},
```

**注意**

- `onPageScroll`里不要写交互复杂的js，比如频繁修改页面。因为这个生命周期是在渲染层触发的，在非h5端，js是在逻辑层执行的，两层之间通信是有损耗的。如果在滚动过程中，频发触发两层之间的数据交换，可能会造成卡顿。（uvue在app端无此限制）
- 在webview渲染时，比如app-vue、微信小程序、H5中，也可以使用wxs监听滚动，[参考](https://uniapp.dcloud.io/tutorial/miniprogram-subject#wxs)；在app-nvue中，可以使用bindingx监听滚动，[参考](https://uniapp.dcloud.io/tutorial/nvue-api#nvue-里使用-bindingx)。
- 如果想实现滚动时标题栏透明渐变，在App和H5下，可在pages.json中配置titleNView下的type为transparent，[参考](https://uniapp.dcloud.io/collocation/pages?id=app-titlenview)。(uni-app x不支持)
- 如果需要滚动吸顶固定某些元素，推荐使用css的粘性布局，参考[插件市场](https://ext.dcloud.net.cn/plugin?id=715)。插件市场也有其他js实现的吸顶插件，但性能不佳，需要时可自行搜索。（uni-app x可自由在uts中设置固定位置）


### onBackPress

**参数说明**

|属性|类型|说明|
|---|---|---|
|from|String|触发返回行为的来源：'backbutton'——左上角导航栏按钮及安卓返回键；'navigateBack'——uni.navigateBack() 方法。**支付宝小程序端不支持返回此字段**|
```javascript
export default {
	onBackPress(options) {
		console.log('from:' + options.from)
	}
}
```

**注意**

- `onBackPress`上不可使用`async`，会导致无法阻止默认返回
- 支付宝小程序只有真机可以监听到非`navigateBack`引发的返回事件（使用小程序开发工具时不会触发`onBackPress`），不可以阻止默认返回行为

详细说明及使用：[onBackPress 详解](http://ask.dcloud.net.cn/article/35120)

### onTabItemTap

**参数说明**

|属性|类型|说明|
|---|---|---|
|index|Number|被点击tabItem的序号，从0开始|
|pagePath|String|被点击tabItem的页面路径|
|text|String|被点击tabItem的按钮文字|

```js
onTabItemTap : function(e) {
	console.log(e);
	// e的返回格式为json对象： {"index":0,"text":"首页","pagePath":"pages/index/index"}
},
```

**注意**

- onTabItemTap常用于点击当前tabitem，滚动或刷新当前页面。如果是点击不同的tabitem，一定会触发页面切换。
- 如果想在App端实现点击某个tabitem不跳转页面，不能使用onTabItemTap，可以使用[plus.nativeObj.view](http://www.html5plus.org/doc/zh_cn/nativeobj.html)放一个区块盖住原先的tabitem，并拦截点击事件。
- 支付宝小程序平台onTabItemTap表现为点击非当前tabitem后触发，因此不能用于实现点击返回顶部这种操作

### onNavigationBarButtonTap

**参数说明**

|属性|类型|说明|
|---|---|---|
|index|Number|原生标题栏按钮数组的下标|

```js
onNavigationBarButtonTap : function (e) {
	console.log(e);
	// e的返回格式为json对象：{"text":"测试","index":0}
}
```

**注意**

- nvue 页面weex编译模式支持的生命周期同weex，具体参考：[weex生命周期介绍](https://uniapp.dcloud.io/tutorial/nvue-outline?id=%e7%bc%96%e8%af%91%e6%a8%a1%e5%bc%8f)。

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

```getApp()``` 函数用于获取当前应用实例，一般用于获取globalData。也可通过应用实例调用 `App.vue methods` 中定义的方法。

**实例**

```javascript
const app = getApp()
console.log(app.globalData)
app.doSomething() // 调用 App.vue methods 中的 doSomething 方法
```

**注意：**
- 不要在定义于 `App()` 内的函数中，或调用 `App` 前调用 `getApp()` ，可以通过 `this.$scope` 获取对应的app实例
- 通过 `getApp()` 获取实例之后，不要私自调用生命周期函数。
- 当在首页`nvue`中使用`getApp()`不一定可以获取真正的`App`对象。对此提供了`const app = getApp({allowDefault: true})`用来获取原始的`App`对象，可以用来在首页对`globalData`等初始化

### getCurrentPages()

```getCurrentPages()``` 函数用于获取当前[页面栈](#页面栈)的实例，以数组形式按栈的顺序给出，数组中的元素为页面实例，第一个元素为首页，最后一个元素为当前页面。

每个页面实例的方法属性列表：

|方法|描述|平台说明|
|---|---|---|
|page.$getAppWebview()|获取当前页面的webview对象实例|App|
|page.route|获取当前页面的路由|&nbsp;|

**注意：**\
``getCurrentPages()``仅用于展示页面栈的情况，请勿修改页面栈，以免造成页面状态错误。\
页面关闭时，对应页面实例会在页面栈中删除。

Tips：
* ``navigateTo``, ``redirectTo`` 只能打开非 tabBar 页面。
* ``switchTab`` 只能打开 ``tabBar`` 页面。
* ``reLaunch`` 可以打开任意页面。
* 页面底部的 ``tabBar`` 由页面决定，即只要是定义为 ``tabBar`` 的页面，底部都有 ``tabBar``。
* 不能在首页 ```onReady``` 之前进行页面跳转。

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

**注意**：

页面返回时会自动关闭 loading 及 toast, modal 及 actionSheet 不会自动关闭。\
页面关闭时，只是销毁了页面实例，未完成的网络请求、计时器等副作用需开发者自行处理。

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
