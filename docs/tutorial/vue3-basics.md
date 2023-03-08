## 介绍
## Introduction


> 已经了解 Vue2，只想了解 Vue3 新功能可以参阅[vue3新功能](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E6%A6%82%E8%A7%88)！
> Already know Vue2, just want to know the new features of Vue3, you can refer to [vue3 new features](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E6%A6%82%E8%A7% 88)!
>  
> 已经有 Vue2 项目，需要适配 Vue3 的可参阅[vue2 项目迁移 vue3](https://uniapp.dcloud.io/tutorial/migration-to-vue3)！
> If you already have a Vue2 project and need to adapt to Vue3, please refer to [vue2 project migration vue3](https://uniapp.dcloud.io/tutorial/migration-to-vue3)!



**Vue.js 是什么**
**What is Vue.js?**

Vue (读音 /vjuː/，类似于 `view`) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，`Vue` 被设计为可以自底向上逐层应用。
Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.


`Vue.js` 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 `DOM` 的系统，**只关注视图层，易于上手**。所有东西都是响应式的。
The core of `Vue.js` is a system that allows the use of concise template syntax to declaratively render data into `DOM`. **Focus on the view layer only, quick start**. Everything is responsive.


 **致谢**
 **Thanks**

本文大部分内容来源于[vue3中文文档官网](https://v3.cn.vuejs.org/guide/introduction.html#vue-js-%E6%98%AF%E4%BB%80%E4%B9%88)，但结合 `uni-app` 做了部分调整，以更有利于开发者快速上手。感谢Vue团队！
Most of the content of this article comes from [vue3 Chinese document official website](https://v3.cn.vuejs.org/guide/introduction.html#vue-js-%E6%98%AF%E4%BB%80%E4%B9%88), but some adjustments have been made in combination with `uni-app` to make it easier for developers to get started quickly. Thanks to the Vue team!

## vue的优势
## Advantages of vue

在传统开发中，用原生的 JavaScript DOM 操作函数对 DOM 进行频繁操作的时候，浏览器要不停的渲染新的 DOM 树，导致页面看起来非常卡顿。
In traditional development, when the native JavaScript DOM manipulation function is used to frequently manipulate the DOM, the browser must constantly render the new DOM tree, causing the page to look very stuck.

vue 是单页面应用，使页面局部刷新，不用每次跳转页面都要请求所有数据和 DOM ，这样大大加快了访问速度和提升用户体验。
Vue is a single-page application, which makes the page partially refresh, without having to request all the data and DOM every time you jump to the page, which greatly speeds up the access speed and improves the user experience.

**vue的优势：**
**Advantages of vue:**

- 轻量级：几十K的体积
- Lightweight: dozens of kilobytes in size
- 界面与逻辑分离，与html接近的概念和写法
- The interface and logic are separated, and the concept and writing method are close to html
- 响应式双向数据绑定，更新数据时无需再写代码更新界面，反之亦然。
- Responsive two-way data binding, no need to write code to update the interface when updating data, and vice versa.
- 组件化，可方便协作。方便造轮子，也就自然有大量轮子可用
- Componentization for easy collaboration. It is convenient to make wheels, so there are naturally a lot of wheels available
- 虚拟DOM，比大多数手写操作dom的代码都更高效
- Virtual DOM, more efficient than most handwritten codes that manipulate dom
- 易于上手，设计直观、文档丰富
- Easy to use, intuitive design, rich documentation

**vue3相比vue2的优势：**
**Advantages of vue3 compared to vue2:**

- 响应式系统提升
- Responsive system improvement
- 更快，性能比Vue2快1.2~2倍(diff方法优化、静态提升、时间侦听器缓存、[ssr渲染](https://uniapp.dcloud.io/tutorial/ssr))
- Faster, performance is 1.2~2 times faster than Vue2 (diff method optimization, static boost, time listener cache, [ssr rendering](https://uniapp.dcloud.io/tutorial/ssr))
- 更小，按需编译，体积比Vue2更小
- Smaller, compiled on demand, smaller than Vue2
- 组合式API，提供更灵活的写法，也易于吸引react开发者
- Combined API, providing more flexible writing methods, and easy to attract react developers
- 加强TypeScript支持
- Enhanced TypeScript support

## 白话uni-app
## Vernacular uni-app

如果你了解html、js，那么本章节将让你快速了解uni-app和它们的差异。
If you know html, js, then this chapter will let you quickly understand uni-app and their differences.

### 文件类型变化
### File type changes

- 以前是.html文件，开发也是html，运行也是html。
- It used to be a .html file, development is also html, and operation is also html.
- 现在每个页面是一个.vue文件，开发是vue，但经过编译后，运行时已经变成了js文件（如果是uts则可能编译成kotlin、swift）。
- Now each page is a .vue file, and the development is vue, but after compilation, it has become a js file at runtime (if it is uts, it may be compiled into kotlin, swift).
- 现代前端开发，很少直接使用HTML，基本都是开发、编译、运行。所以 `uni-app` 有编译器、运行时的概念。
- Modern front-end development rarely uses HTML directly, but basically develops, compiles, and runs. So 'uni-app' has the concept of compiler, runtime.

### 文件内代码架构的变化
### Changes in the code structure within the file

- 以前一个 `html` 大节点，里面有 `script` 和 `style` 节点；
- Before a `html`large node, there `script`and `style`nodes;

```html
	<!DOCTYPE html>  
	<html>  
		<head>  
			<meta charset="utf-8" />  
			<title></title>  
			<script type="text/javascript">  
			</script>  
			<style type="text/css">  
			</style>  
		</head>  
		<body>  
		</body>  
	</html>
```


- 现在 `template` 是一级节点，用于写tag组件， `script` 和 `style` 是并列的一级节点，也就是有3个一级节点。这个叫[vue单文件组件规范sfc](vue3-components.md)。
- Now `template` is a first-level node, used to write tag components, `script` and `style` are parallel first-level nodes, that is, there are 3 first-level nodes. This is called [vue single file component specification sfc](vue3-components.md).

```html
	<template>  
		<view>  
		注意必须有一个view，且只能有一个根view。所有内容写在这个view下面。  
		</view>  
	</template>  
	<script>  
		export default {  
		}  
	</script>  
	<style>  
	</style>
```


### 外部文件引用方式变化
### Changes in the way external files are cited

- 以前通过script src、link href引入外部的js和css；
- In the past, external js and css were introduced through script src and link href;

```html
	<script src="js/jquery-1.10.2.js" type="text/javascript"></script>  
	<link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
```


- 现在是es6的写法， `import` 引入外部的js模块(注意不是文件)或css；
- Now it is written in es6, `import`import external js module (note that it is not a file) or css;

**js要require进来，变成了对象**。
**js needs to require to come in and become an object**.

在hello uni-app的 `common` 目录有一个工具类 `util.js` ，可以在hello uni-app中搜索这个例子查看。hello uni-app示例代码可从 [github](https://github.com/dcloudio/hello-uniapp) 获取。
There is a tool class `util.js` in the `common` directory of hello uni-app. You can search for this example in hello uni-app. Hello uni-app sample code is available from [github](https://github.com/dcloudio/hello-uniapp).


```html
	<script>  
		var util = require('../../../common/util.js');  //require这个js模块  
		var formatedPlayTime = util.formatTime(playTime); //调用js模块的方法  
	</script>
```

而在这个 `util.js` 里，要把之前的 `function` 封装为模块（module）的方法并导出（exports）。只有被导出的方法和属性才能被外部调用，不导出的属于模块内部函数和变量。这是es6的模块规范。
And in this `util.js`, the previous `function` should be packaged as a module method and exported (exports). Only exported methods and properties can be called externally, and those not exported belong to internal functions and variables of the module. This is the module specification for es6.

```js
	function formatTime(time) {  
		return time;//这里没写逻辑  
	}  
	module.exports = {  
		formatTime: formatTime  
	}
```


当然还有一些高级的用法，比如在导出时可以重命名
Of course, there are some advanced usages, such as renaming when exporting

```js
	// 直接使用js模块的属性。在hello uni-app有示例 
	// Directly use the properties of the js module. There are examples in hello uni-app
	var dateUtils = require('../../../common/util.js').dateUtils; 
	// 将js导入并重命名为echarts，然后使用echarts.来继续执行方法。在hello uni-app有示例
	// Import and rename js to echarts, and then use echarts to continue executing the method. There are examples in hello uni-app
	import * as echarts from '/components/echarts/echarts.simple.min.js'; 
```

**css外部文件导入**。全局样式，在根目录下的 `app.vue` 里写入，每个页面都会加载 `app.vue` 里的样式。
**css external file import**. Global styles are written in `app.vue` in the root directory, and every page will load the styles in `app.vue`.


```html
	<style>  
		@import "./common/uni.css";  
		.uni-hello-text{  
			color:#7A7E83;  
		}  
	</style>
```


**另外，vue支持组件导入，可以更方便的封装一个包括界面、js、样式的库**。[详见](vue3-components.md)
**In addition, vue supports component import, which can more conveniently encapsulate a library including interface, js, and styles**. [See details](vue3-components.md)


### 组件/标签的变化
### Component/label changes

以前是html标签，比如 `<div>` ，现在是小程序组件，比如 `<view>` 。
It used to be html tags like `<div> ` , now applet components like `<view> ` .

那么标签和组件有什么区别，不都是用尖括号包围起来一段英文吗？
So what is the difference between a label and a component, isn't it all surrounded by angle brackets in English?
- 其实标签是老的概念，标签属于浏览器内置的东西。
- In fact, tags are an old concept. Tags are built-in browsers.
- 但组件，是可以自由扩展的。类似你可以把一段js封装成函数或模块，你也可以把一个ui控件封装成一个组件。
- But the components can be freely expanded. Similarly, you can encapsulate a piece of js into a function or module, and you can also encapsulate a ui control into a component.

`uni-app` 参考小程序规范，提供了一批[内置组件](https://uniapp.dcloud.io/component/README)。
`uni-app` refers to the applet specification and provides a batch of [built-in components](https://uniapp.dcloud.io/component/README).


### js的变化
### js changes

- 以前script里随便写js变量和function
- In the past, just write js variables and functions in the script
```html
<script type="text/javascript">  
	var a; 
	function funa () {  
		  
	}
</script> 
```

- 现在script里默认有export default，在里面写data、事件和method
- Now the script has export default by default, write data, events and methods in it

	* 写在 `export default {` 前面的变量，是页面内部的全局变量，可以在各种方法里使用。
	* The variables written in front of `export default {` are global variables inside the page and can be used in various methods.
	* `export default {}` 里是一个大json，data、生命周期、method都需要用逗号分隔。
	* `export default {}` is a large json, and data, life cycle, and method need to be separated by commas.
	* data -> return 里，编写可以绑定在页面template模板里的变量，页面组件的text里绑定data数据使用{{}}，比如下面例子中的`textvalue`。而下面的globalvar就不能在模板里绑定使用。在HBuilderX中，敲vdata代码块，可以快捷生成data的代码结构。
	* In data -> return, write variables that can be bound in the page template, and use {{}} to bind data data in the text of the page component, such as `textvalue` in the following example. The following globalvar cannot be bound and used in the template. In HBuilderX, typing the vdata code block can quickly generate the code structure of data.
	* 页面的生命周期/事件，如下面的`onLoad`，和data平级。
	* Page life cycle/events, such as `onLoad` below, are at the same level as data.
	* 模板里要调用的方法，都需要写在`methods`下面。每个方法也需要用逗号分隔。不需要再使用`function`声明，只要写在`methods`下的函数，都可以在template里调用。同样，HBuilderX里敲`vmethods`代码块，也可以生成相应结构。
	* The methods to be called in the template need to be written under `methods`. Each method also needs to be separated by a comma. There is no need to use the `function` statement, as long as the function written under `methods` can be called in the template. Similarly, typing the `vmethods` code block in HBuilderX can also generate the corresponding structure.

```html
<template>  
		<view>  
			<text>{{textvalue}}</text><!-- 这里演示了组件值的绑定 -->
			<button :type="buttontype" @click="changetextvalue()">修改为789</button><!-- 这里演示了属性和事件的绑定 -->
		</view>  
	</template> 
<script>
	var globalvar = 1
	function globalfun(){}
	export default {  
		data() {  
			return {  
				textvalue:"123",  
				buttontype:"primary"  
			};  
		},  
		onLoad() {  
			globalvar = 2
			globalfun()
			this.textvalue="456"//这里修改textvalue的值
		},  
		methods: {  
			changetextvalue() {  
				this.textvalue="789"//这里修改textvalue的值
			}  
		}  
	}  
</script>
```

在上述例子中，传统写法的定义的变量globalvar和函数globalfun，可以在`export default { }`里使用，但无法在模板里直接绑定和调用。模板里只能绑定data里的变量、调用methods里的方法。
In the above example, the variable globalvar and function globalfun defined in the traditional way can be used in `export default { }`, but they cannot be directly bound and called in the template. Templates can only bind variables in data and call methods in methods.

- 以前的 DOM 操作，如果你想改变某个 DOM 元素的显示内容，比如一个view的显示文字：给view设id，然后js里通过选择器获取 DOM 元素，进一步通过js进行赋值操作，修改 DOM 元素的属性或值。
- In the previous DOM operation, if you want to change the display content of a DOM element, such as the display text of a view: set the id to the view, then get the DOM element through the selector in js, and then perform assignment operations through js to modify the DOM element Attribute or value.

```html
	<html>  
		<head>  
			<script type="text/javascript">  
				document.addEventListener("DOMContentLoaded",function () {  
					document.getElementById("spana").innerText="456"  
				})  
				function changetextvalue () {  
					document.getElementById("spana").innerText="789"  
				}  
			</script>  
		</head>  
		<body>  
			<span id="spana">123</span>  
			<button type="button" onclick="changetextvalue()">修改为789</button>  
		</body>  
	</html>  
```


- 现在的做法，是vue的绑定模式，给这个 DOM 元素绑定一个js变量，在script中修改js变量的值，DOM 会自动变化，页面会自动更新渲染。
- The current practice is the binding mode of vue, bind a js variable to this DOM element, modify the value of the js variable in the script, the DOM will automatically change, and the page will automatically update the rendering.
	- 前端改用 [MVVM](https://baike.baidu.com/item/MVVM/96310?fr=aladdin) (Model-View-ViewModel的简写)模式，简单来说，Model:代表数据模型，View:只专注视图UI处理，ViewModel:只处理业务和数据。它的核心是 MVVM 中的 VM，也就是 ViewModel。 ViewModel负责连接 View 和 Model，保证视图和数据的一致性，这种轻量级的架构让前端开发更加高效、便捷，大幅减少代码行数，同时差量渲染性能更好。
	- The front end uses the [MVVM](https://baike.baidu.com/item/MVVM/96310?fr=aladdin) (short for Model-View-ViewModel) mode. Simply put, Model: represents the data model, View: only focuses on view UI processing, and ViewModel: only processes business and data. Its core is the VM in MVVM, which is the ViewModel. ViewModel is responsible for connecting View and Model to ensure the consistency of views and data. This lightweight architecture makes front-end development more efficient and convenient, greatly reducing the number of lines of code, and better differential rendering performance.
	- `uni-app` 使用vue的数据绑定方式解决js和 DOM 界面交互的问题。
	- `uni-app` solves the problem of interaction between js and DOM interface by using data binding method of vue.


```html
	<template>  
		<view>  
			<text>{{textvalue}}</text><!-- 这里演示了组件值的绑定 -->  
			<button :type="buttontype" @click="changetextvalue()">修改为789</button><!-- 这里演示了属性和事件的绑定 -->  
		</view>  
	</template>  
	<script>  
		export default {  
			data() {  
				return {  
					textvalue:"123",  
					buttontype:"primary"  
				};  
			},  
			onLoad() {  
				this.textvalue="456"//这里修改textvalue的值，其实123都来不及显示就变成了456  
			},  
			methods: {  
				changetextvalue() {  
					this.textvalue="789"//这里修改textvalue的值，页面自动刷新为789  
				}  
			}  
		}  
	</script>
```


- 以前在是html的tag里用一个属性`onclick`来写点击事件
- In the past, an attribute `onclick` was used in the html tag to write the click event
- 现在是使用`@click`（其实是`v-on:click`的缩写，在uni-app里基本都使用缩写）调用methods里的方法。
- Now use `@click` (actually the abbreviation of `v-on:click`, which is basically used in uni-app) to call the method in methods.

## 在 uni-app 中使用vue的差异
## Differences of using vue in uni-app

`uni-app` 在发布到H5时支持所有vue的语法；发布到App和小程序时，由于平台限制，无法实现全部vue语法，但 `uni-app` 仍是对vue语法支持度最高的跨端框架。
`uni-app` supports all vue syntaxes when it is published to H5; when it is published to apps and applets, due to platform limitations, all vue syntaxes cannot be implemented, but `uni-app` is still the cross-platform with the highest support for vue syntax. end frame.

相比Web平台， Vue.js 在 `uni-app` 中使用差异主要集中在两个方面：
Compared with the Web platform, the differences in the use of Vue.js in `uni-app` are mainly concentrated in two aspects:

- 新增：`uni-app` 除了支持 Vue 实例的组件生命周期，还拥有[应用生命周期](/collocation/App.html#applifecycle)及[页面的生命周期](/tutorial/page.html#lifecycle)。
- 受限：相比 Web 平台，在小程序和 App 端部分功能支持不完善，具体见[兼容性列表](/vue3-api)。

[uni-app 项目支持 vue 3.0介绍，及升级指南](https://ask.dcloud.net.cn/article/37834)
[Introduction and upgrade guide for uni-app project support vue 3.0](https://ask.dcloud.net.cn/article/37834)

`uni-app` 项目对 vue 3.0 的支持版本情况如下：
The vue 3.0 version supported by `uni-app` project is as follows:

- Web平台：支持。
- Web platform: support.
- 小程序平台：`HBuilderX 3.3.3+` 编译器改为 `vite`，之前版本的编译器为`webpack`。
- MiniApp platform: `HBuilderX 3.3.3+` compiler is changed to `vite`, the compiler of the previous version is `webpack`.
- App 平台：`uni-app 3.2.5+`支持。`HBuilderX 3.3.13` 起 `nvue`编译器升级为`vite`。
- App platform: supported by `uni-app 3.2.5+`. From `HBuilderX 3.3.13`, the `nvue` compiler is upgraded to `vite`.

**注意事项**
**Precautions**

- vue3 响应式基于 `Proxy` 实现，不支持`iOS9`和`ie11`。
- vue3 responsive is based on `Proxy` implementation, and does not support `iOS9` and `ie11`.
- 暂不支持新增的 `Teleport`,`Suspense` 组件。
- The newly added `Teleport`,`Suspense` components are not supported temporarily.
- 目前 `HBuilderX 3.2` 起已预置，之前的版本只能使用cli方式。
- It has been preset for `HBuilderX 3.2`+, and the previous version can only use cli mode.


## 模板语法
## Template syntax

`Vue.js` 使用了基于 `HTML` 的模板语法，允许开发者声明式地将 `DOM` 绑定至底层组件实例的数据。
Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance's data. 
所有 `Vue.js` 的模板都是合法的 `HTML`，所以能被遵循规范的浏览器和 `HTML` 解析器解析。
All Vue.js templates are valid HTML that can be parsed by spec-compliant browsers and HTML parsers.

在底层的实现上，`Vue` 将模板编译成虚拟 `DOM` 渲染函数。结合响应性系统，`Vue` 能够智能地计算出最少需要重新渲染多少组件，并把 `DOM` 操作次数减到最少。
Under the hood, Vue compiles the templates into Virtual DOM render functions. Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.


### 插值
### Interpolations

#### 文本
#### Text

数据绑定最常见的形式就是文本插值：
The most common form of data binding is text interpolation:

```html
	<template>
		<view>
			<view>Message: {{ msg }}</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					msg: 'Hello Vue!'
				}
			}
		}
	</script>
```

`msg`里的内容将会被替代为对应数据对象上msg的值。无论何时，绑定的数据对象上msg发生了改变，插值处的内容都会更新。
The content in `msg` will be replaced with the value of msg on the corresponding data object. Whenever the msg on the bound data object changes, the content at the interpolation point will be updated.


#### 使用 JavaScript 表达式
#### Using JavaScript Expressions


迄今为止，在我们的模板中，我们一直都只绑定简单的 `property` 键值。但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 `JavaScript` 表达式支持。
So far we've only been binding to simple property keys in our templates. But Vue.js actually supports the full power of JavaScript expressions inside all data bindings:

**示例一**
**Example**

```html
	<template>
		 <view>
			<view>{{ number + 1 }}</view>
			<view>{{ ok ? 'YES' : 'NO' }}</view>
			<!-- 把一个字符串分割成字符串数组,颠倒其元素的顺序,把数组中的所有元素放入一个字符串 -->
			<!-- Split a string into a string array, reverse the order of the elements, and put all the elements in the array into a string -->
			<view>{{ message.split('').reverse().join('') }}</view>
		 </view>
	</template>
	<script>
	  export default {
		 data() {
			return {
			  number:1,
			  ok:true,
			  message: 'Hello Vue!'
			}
		 }
	  }
	</script>
```


**示例二**
**Example**

```html
	<template>
	  <view>
			<view v-for="(item,index) in 10">
			<!-- 通过%运算符求余数，实现隔行换色的效果 -->
			<!-- Calculate the remainder through the % operator to achieve the effect of zebra list -->
			<view :class="'list-' + index%2">{{index%2}}</view>
		 </view>
	  </view>
	</template>
	<script>
	  export default {
		 data() {
			return { }
		 }
	  }
	</script>
	<style>
	  .list-0{
		 background-color: #aaaaff;
	  }
	  .list-1{
		 background-color: #ffaa7f;
	  }
	</style>
```


这些表达式会在所属 Vue 实例的数据作用域下作为 `JavaScript` 被解析。有个限制就是，每个绑定都只能包含单个表达式，所以下面的例子都不会生效。
These expressions will be evaluated as JavaScript in the data scope of the current active instance. One restriction is that each binding can only contain one single expression, so the following will NOT work:

**错误示例**
**Error example**
```html
	<template>
	  <view>
		 <!-- 这是语句，不是表达式 -->
		 <!-- this is a statement, not an expression: -->
		 <view>{{ var a = 1 }}</view>
		 <!-- 流控制也不会生效，请使用三元表达式 -->
		 <!-- flow control won't work either, use ternary expressions -->
		 <view>{{ if (ok) { return message } }}</view>
	  </view>
	</template>
	<script>
	  export default {
		 data() {
			return {
			  ok:true,
			  message: 'Hello Vue!'
			}
		 }
	  }
	</script>
```




> 模板表达式都被放在沙盒中，只能访问**全局变量的一个白名单**：
> Template expressions are sandboxed and only have access to a restricted list of globals:
> - `Infinity`
> - `undefined`
> - `NaN`
> - `isFinite`
> - `isNaN`
> - `parseFloat`
> - `parseInt`
> - `decodeURI`
> - `decodeURIComponent`
> - `encodeURI`
> - `encodeURIComponent`
> - `Math`
> - `Number`
> - `Date`
> - `Array`
> - `Object`
> - `Boolean`
> - `String`
> - `RegExp`
> - `Map`
> - `Set`
> - `JSON`
> - `Intl`
> - `BigInt`
> 
> 你不应该在模板表达式中试图访问用户定义的全局变量。
> You should not attempt to access user defined globals in template expressions.



### 指令
### Directives

指令是带有 v- 前缀的特殊属性。
Directives are special attributes with the v- prefix. 

- 指令属性的值预期是**单个 `JavaScript` 表达式** (`v-for` 和 `v-on` 是例外情况，稍后我们再讨论)。
- Directive attribute values are expected to be a **single JavaScript expression** (with the exception of v-for and v-on, which will be discussed later). 
- 指令的作用是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 `DOM` 。
- A directive's job is to reactively apply side effects to the `DOM` when the value of its expression changes. 
- 一些指令能够接收一个“参数”，在指令名称之后以冒号（ : ）表示。
- Some directives can take an "argument", denoted by a colon after the directive name. 


#### v-bind

动态地绑定一个或多个属性，`v-bind`缩写为‘ : ’，可以用于响应式地更新 `HTML attribute`：
To dynamically bind one or more attributes, `v-bind` is abbreviated to ` : ', and can be used to update `HTML attributes` responsively:

```html
	<!-- 完整语法 -->
	<!-- full -->
	<image v-bind:src="imgUrl"></image>
	<!-- 缩写 -->
	<!-- short -->
	<image :src="imgUrl"></image>
	
	<button v-bind:disabled="isButtonDisabled">Button</button>
```

在这里 `src` 是参数，告知 `v-bind` 指令将该元素的 `src` attribute 与表达式 `imgUrl` 的值绑定。
Here src is the argument, which tells the v-bind directive to bind the element's src attribute to the value of the expression url.

如果 `isButtonDisabled` 的值是 `null` 或 `undefined`，则 `disabled` attribute 甚至不会被包含在渲染出来的 `button` 元素中。
The disabled attribute will be included if isButtonDisabled has a truthy value. It will also be included if the value is an empty string, maintaining consistency with `<button disabled="">`. For other falsy values the attribute will be omitted.


#### v-on

v-on 指令，它用于监听 `DOM` 事件。v-on缩写为‘ @ ’，下文简称为 `@事件`
v-on directive, which listens to DOM events。v-on is abbreviated as '@':

```html
	<!-- 完整语法 -->
	<!-- full -->
	<view v-on:click="doSomething">点击</view>	
	<!-- 缩写 -->
	<!-- short -->
	<view @click="doSomething">点击</view>
```


#### v-once

只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。
Render the element and component once only. On subsequent re-renders, the element/component and all its children will be treated as static content and skipped. This can be used to optimize update performance.

和前端框架中的理解不同，客户端里要实现复用的逻辑，会标记模板节点的状态，添加了 `v-once` 能保证节点只渲染一次，但是并不一定能优化渲染性能，反而可能会拖慢客户端复用节点时的比对效率。
Unlike front-end framework in understanding the client in order to achieve a logical multiplexing state flag template node will be added to the `v-once`guarantee rendering node only once, but not necessarily be able to optimize the rendering performance, but might slow down the client Comparison efficiency when multiplexing nodes.

>  h5、微信小程序均不支持
> h5, WeChat applet are not supported

```html
	<!-- 单个元素 -->
	<!-- A single element -->
	<view v-once>This will never change: {{msg}}</view>
	<!-- 有子元素 -->
	<!-- Contains child elements -->
	<view v-once>
		<text>comment</text>
		<text>{{msg}}</text>
	</view>
```


#### v-html

更新元素的 [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) 。
Updates the element's [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) .

- 注意：**内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译。**
- Note that the contents are inserted as plain HTML - they will not be compiled as Vue templates. 
- 如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代。
- If you find yourself trying to compose templates using v-html, try to rethink the solution by using components instead.
- App端和H5端支持 `v-html` ，微信小程序会被转为 `rich-text`，其他端不支持 `v-html` 。
- App side and H5 side support `v-html` , WeChat applet will be converted to `rich-text`, other side does not support `v-html` .


跨端的富文本处理方案详见：[https://ask.dcloud.net.cn/article/35772](https://ask.dcloud.net.cn/article/35772)
Cross-end rich text processing scheme can be found in: [https://ask.dcloud.net.cn/article/35772](https://ask.dcloud.net.cn/article/35772)

```html
	<template>
		<view>
			<view v-html="rawHtml"></view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					rawHtml: '<div style="text-align:center;background-color: #007AFF;"><div >我是内容</div><img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png"/></div>'
				}
			}
		}
	</script>
```



## Data 选项
## Data options

`data` 选项已标准化为只接受**返回一个初始数据对象的函数**（注意函数内返回的数据对象不要直接引用函数外的对象）；否则页面关闭时，数据不会自动销毁，再次打开该页面时，会显示上次数据。
The `data` option has been standardized to only accept  **a function that returns an initial data object** (note that the data object returned in the function should not directly refer to the object outside the function); Otherwise, when the page is closed, the data will not be destroyed automatically. When the page is opened again, the last data will be displayed.

```js
	//正确用法，使用函数返回对象
	//Correct usage, use function to return object
	data() {
		return {
			title: 'Hello'
		}
	}

	//错误写法，会导致再次打开页面时，显示上次数据
	//Wrong writing will cause the last data to be displayed when the page is opened again
	data: {
		title: 'Hello'
	}

	//错误写法，同样会导致多个组件实例对象数据相互影响
	//Error writing, which will also lead to mutual influence of object data of multiple component instances.
	const obj = {
		title: 'Hello'
	}
	data() {
		return {
			obj
		}
	}
```



## Class 与 Style 绑定
## Class and Style Bindings


### 绑定 HTML Class
### Binding HTML Classes


**对象语法**
**Object Syntax**


我们可以传给 `:class` (`v-bind:class` 的简写) 一个对象，实现动态地切换 `class`。
We can pass an object to :class (short for v-bind:class) to dynamically toggle classes:

也可以在对象中传入更多字段来动态切换多个 `class`。此外，`v-bind:class` 指令也可以与普通的 `class` 共存。
You can have multiple classes toggled by having more fields in the object. In addition, the `:class` directive can also co-exist with the plain class attribute. So given the following template:


```html
	<template>
		<view>
			<view class="static" :class="{ active: isActive}">hello uni-app</view>
			<view class="static" :class="{ active: isActive, 'text-danger': hasError }">hello uni-app</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					isActive: true,
					hasError: false
				}
			}
		}
	</script>
	<style>
	.static{
		color: #2C405A;
	}
	.active{
		background-color: #007AFF;
		font-size:30px;
	}
	.text-danger{
		color: #DD524D;
	}
	</style>
```

渲染结果为
It will render:

```html
	<view class="static active"></view>
```

当 `isActive` 或者 `hasError` 变化时，class 列表将相应地更新。例如，如果 `hasError` 的值为 `true` ，class 列表将变为 `static active text-danger`。
When `isActive` or `hasError` changes, the class list will be updated accordingly. For example, if `hasError` becomes true, the class list will become `"static active text-danger"`.



**数组语法**
**Array Syntax**

可以把一个数组传给 `v-bind:class`，以应用一个 `class` 列表。
We can pass an array to `:class` to apply a list of classes:

```html
	<template>
		 <view>
			<view :class="[activeClass,errorClass]">hello uni-app</view>
		 </view>
	</template>
	<script>
		 export default {
			  data() {
					return {
						 activeClass: 'active',
						 errorClass: 'text-danger'
					}
			  }
		 }
	</script>
	<style>
		.active{
			background-color: #007AFF;
		}
		.text-danger{
			font-size:60rpx;
			color:#DD524D;
		}
	</style>
```


渲染的结果为：
Which will render:

```html
	<view class="active text-danger"></view>
```

如果你想根据条件切换列表中的 class，可以使用三元表达式：
If you would like to also toggle a class in the list conditionally, you can do it with a ternary expression:


```html
	<view :class="[isActive ? activeClass : '', errorClass]"></view>
```


这样写将始终添加 `errorClass`，但是只有在 `isActive` 为 `truthy` 时才添加 `activeClass`。
This will always apply errorClass, but activeClass will only be applied when isActive is truthy.

> 在 `JavaScript` 中，`truthy`（真值）指的是在布尔值上下文中，转换后的值为真的值。所有值都是真值，除非它们被定义为 假值（即除 `false`、0、""、`null`、`undefined` 和 `NaN` 以外皆为真值）。
> In JavaScript, truthy means that the converted value is true in the context of Boolean values. All values are true values unless they are defined as false values (that is, all true values except false, 0, "", null, undefined, and NaN).


不过，当有多个条件 class 时这样写有些繁琐。所以在数组语法中也可以使用对象语法：
However, this can be a bit verbose if you have multiple conditional classes. That's why it's also possible to use the object syntax inside array syntax:

```html
	<template>
		<view>
			<view class="static" :class="[{ active: isActive }, errorClass]">hello uni-app</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					isActive: true,
					errorClass: 'text-danger'
				}
			}
		}
	</script>
	<style>
		.static{
			font-size:30rpx;
		}
		.active{
			background-color: #007AFF;
		}
		.text-danger{
			font-size:60rpx;
			color:#DD524D;
		}
	</style>
```

**注意：以:style=""这样的方式设置px像素值，其值为实际像素，不会被编译器转换。**
**Note: Set the px pixel value in the way: style="". The value is the actual pixel and will not be converted by the compiler.**


此外还可以用计算属性 `computed` 方法生成 `class` 或者 `style` 字符串，插入到页面中，举例说明：
Further it may also be used `computed`to generate a method `class`or a `style`string, inserted into the page, illustrated:

```html
	<template>
		<view>
			<view class="container" :class="computedClassStr">hello uni-app</view>
			<view class="container" :class="{active: isActive}">hello uni-app</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					isActive: true
				}
			},
			computed: {
				computedClassStr() {
					return this.isActive ? 'active' : ''
				}
			}
		}
	</script>
	<style>
		.active {
			background-color: #007AFF;
			font-size:30px;
		}
	</style>
```



### 绑定内联样式
### Binding Inline Styles

**对象语法**
**Object Syntax**

`:style` 的对象语法十分直观——看着非常像 CSS，但其实是一个 `JavaScript` 对象。CSS property 名可以用驼峰式 (`camelCase`) 或短横线分隔 (`kebab-case`，记得用引号括起来) 来命名：
The object syntax for `:style` is intuitive - it looks very CSS-like, but is actually a `JavaScript` object. CSS property names can be named using camelCase (`camelCase`) or dash-separated (`kebab-case`, remember to enclose them in quotes):

```html
	<template>
		<view :style="{ color: activeColor, fontSize: fontSize + 'px' }">hello uni-app</view>
	</template>
	<script>
		export default {
			data() {
				return {
					activeColor: 'red',
					fontSize: 30
				}
			}
		}
	</script>
```


直接绑定到一个样式对象通常更好，这会让模板更清晰：
It is often a good idea to bind to a style object directly so that the template is cleaner:

```html
	<template>
		<view :style="styleObject">hello uni-app</view>
	</template>
	<script>
		export default {
			data() {
				return {
					styleObject: {
					  color: 'red',
					  fontSize: '13px'
					}
				}
			}
		}
	</script>
```

同样的，对象语法常常结合返回对象的计算属性使用。
Again, the object syntax is often used in conjunction with computed properties that return objects.


**数组语法**
**Array Syntax**

`:style` 的数组语法可以将多个样式对象应用到同一个元素上：
The array syntax for `:style` allows you to apply multiple style objects to the same element:

```html
	<template>
		<view>
			<view :style="[baseStyles, overridingStyles]">hello uni-app</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					baseStyles: {
						color: 'green',
						fontSize: '30px'
					},
					overridingStyles: {
						'font-weight': 'bold'
					}
				}
			}
		}
	</script>
```


**自动添加前缀**
**Auto-prefixing**

在 `:style` 中使用需要 (浏览器引擎前缀) 	[vendor prefixesa](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) 的 `CSS property` 时，如 `transform`，`Vue` 将自动侦测并添加相应的前缀。
When you use a CSS property that requires a [vendor prefixesa](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) (opens new window)in `:style`, Vue will automatically add the appropriate prefix. Vue does this by checking at runtime to see which style properties are supported in the current browser. If the browser doesn't support a particular property then various prefixed variants will be tested to try to find one that is supported.



**多重值**
**Multiple Values**

可以为 `style` 绑定中的 `property` 提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：
You can provide an array of multiple (prefixed) values to a style property, for example:

```html
	<view :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></view>
```

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 `flexbox`，那么就只会渲染 `display: flex`。
This will only render the last value in the array which the browser supports. In this example, it will render `display: flex` for browsers that support the unprefixed version of `flexbox`.


## 条件渲染
## Conditional Rendering

### v-if和v-else
### v-if and v-else

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 `truthy` 值的时候被渲染。
The directive v-if is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value.
使用 `v-else` 指令来表示 `v-if` 的“else 块”。
Use the `v-else` directive to indicate an "else block" for `v-if`:
`v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。
A `v-else` element must immediately follow a `v-if` or a `v-else-if` element - otherwise it will not be recognized.

> 在 `JavaScript` 中，`truthy`（真值）指的是在布尔值上下文中，转换后的值为真的值。所有值都是真值，除非它们被定义为 假值（即除 `false`、0、""、`null`、`undefined` 和 `NaN` 以外皆为真值）。
> In JavaScript, truthy means that the converted value is true in the context of Boolean values. All values are true values unless they are defined as false values (that is, all true values except false, 0, "", null, undefined, and NaN).

```html
	<template>
		<view>
			<view v-if="seen">现在你看到我了</view>
			<view v-else>你看不到我了</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					seen: true
				}
			}
		}
	</script>
```


`v-else-if`，顾名思义，充当 v-if 的“else-if 块”，可以连续使用：
The `v-else-if`, as the name suggests, serves as an "else if block" for `v-if`. It can also be chained multiple times:


```html
	<template>
		<view>
			<view v-if="type === 'A'">
				A
			</view>
			<view v-else-if="type === 'B'">
				B
			</view>
			<view v-else-if="type === 'C'">
				C
			</view>
			<view v-else>
				Not A/B/C
			</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					type:'B'
				}
			}
		}
	</script>
```

类似于 `v-else` ，`v-else-if` 也必须紧跟在带 `v-if` 或者 `v-else-if` 的元素之后。
Similar to `v-else`, a `v-else-if` element must immediately follow a `v-if` or a `v-else-if` element.


### 条件渲染分组
### Conditional rendering grouping

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？
Because v-if is a directive, it has to be attached to a single element. But what if we want to toggle more than one element? 

此时可以把一个 `template` 元素当做不可见的包裹元素，并在上面使用 `v-if`。最终的渲染结果将不包含 `template` 元素。
In this case we can use v-if on a `<template>` element, which serves as an invisible wrapper. The final rendered result will not include the `<template>` element.


```html
	<template v-if="seen">
		<view>标题</view>
		<view>内容：现在你看到我了</view>
	</template>
```


### v-show

另一个用于根据条件展示元素的选项是 `v-show` 指令。用法大致一样：
Another option for conditionally displaying an element is the `v-show` directive. The usage is largely the same:

```html
	<view v-show="ok">Hello!</view>
```

不同的是带有 `v-show` 的元素始终会被渲染并保留在 `DOM` 中。`v-show` 只是简单地切换元素的 `CSS` 属性的 `display` 。
The difference is that an element with `v-show` will always be rendered and remain in the DOM; `v-show` only toggles the display CSS property of the element.

> 注意，v-show 不支持 template 元素，也不支持 v-else。nvue 页面不支持 v-show。
> v-show doesn't support the `<template>` element, nor does it work with v-else


### v-if 和 v-show 区别
### v-if vs v-show


`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
`v-if` is "real" conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.

`v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
`v-if` is also lazy: if the condition is false on initial render, it will not do anything - the conditional block won't be rendered until the condition becomes true for the first time.

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换，来控制元素的显示和隐藏。
In comparison, `v-show` is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.

**根据应用场景选择**
**Choose according to application scenarios**

- `v-if` 有更高的切换开销，如果在运行时条件很少改变，则使用 v-if 较好。
- `v-if` There is a higher switching overhead. If the conditions rarely change during runtime, it is better to use v-if.
- `v-show` 有更高的初始渲染开销。如果需要非常频繁地切换，则使用 v-show 较好。
- `v-show`There is a higher initial rendering overhead. If you need to switch very frequently, v-show is better.


**注意**
**Note**

- 不推荐同时使用 `v-if` 和 `v-for`。
- Not recommended to use both `v-if`and `v-for`.
- 当 `v-if` 与 `v-for` 一起使用时，**`v-if` 具有比 `v-for` 更高的优先级**。
- When `v-if`and `v-for`when used together, `v-if`than `v-for`a higher priority.


## 列表渲染
## List Rendering

### 在 v-for 里使用数组
### v-for with an Array

v-for 指令可以实现基于一个数组来渲染一个列表。
The v-for directive to render a list of items based on an array.

- `v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的别名。
- The v-for directive requires a special syntax in the form of item in items, where items is the source data array and item is an alias for the array element being iterated on.
	- 在 v-for 块中，我们可以访问所有父作用域的 `property`
	- Inside `v-for` blocks we have full access to parent scope properties.
	- 第一个参数 `item` 则是被迭代的数组元素的别名。
	- The first parameter `item`is the alias iterated array elements.
	- 第二个参数，即当前项的索引 `index` ，是可选的。
	- The second parameter, the index of the current item `index`, is optional.

```html
	<template>
		<view>
			<view v-for="(item, index) in items">
				 {{ parentMessage }} - {{ index }} - {{ item.message }}
			</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					parentMessage: 'Parent',
					items: [
						{ message: 'Foo' },
						{ message: 'Bar' }
					]
				}
			}
		}
	</script>
```

结果：
Result:

```html
	Parent - 0 - Foo
	Parent - 1 - Bar
```


### 在 v-for 里使用对象
### v-for with an Object

你也可以用 v-for 来遍历一个对象的 `property`。
You can also use v-for to iterate through the properties of an object.

- 第一个参数 `value` 是被迭代的对象元素的属性值。
- The first parameter `value`is an alias iterated array elements.
- 第二个参数为 `property` 名称 (也就是键名)。
- The second parameter is the `property`name (that is, the key name).
- 第三个参数作为索引。
- The third parameter serves as an index.

```html
	<template>
		<view>
			<view v-for="(value, name, index) in object">
				 {{ index }}. {{ name }}: {{ value }}
			</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					object: {
						title: 'How to do lists in Vue',
						author: 'Jane Doe',
						publishedAt: '2021-05-10'
					}
				}
			}
		}
	</script>
```


结果：
Result:

```html
	0.title: How to do lists in Vue,
	1.author: Jane Doe,
	2.publishedAt: 2021-05-10
```


> 在遍历对象时，会按 `Object.keys()` 的结果遍历，但是不能保证它在不同 `JavaScript` 引擎下的结果都一致。
> When iterating over an object, the order is based on the enumeration order of `Object.keys()`, which isn't guaranteed to be consistent across `JavaScript` engine implementations.


### 列表渲染分组
### List rendering group

类似于 `v-if`，你也可以利用带有 `v-for` 的 `template` 来循环渲染一段包含多个元素的内容。比如：
Similar to template `v-if`, you can also use a `<template>` tag with v-for to render a block of multiple elements. For example:

```html
	<template v-for="item in items">
		<view>{{ item.message }}</view>
		<view class="divider" role="presentation"></view>
	</template>
```


### 维护状态
### Maintaining State


当 `Vue` 正在更新使用 `v-for` 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，`Vue` 将不会移动 `DOM` 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。
When Vue is updating a list of elements rendered with `v-for`, by default it uses an "in-place patch" strategy. If the order of the data items has changed, instead of moving the DOM elements to match the order of the items, Vue will patch each element in-place and make sure it reflects what should be rendered at that particular index.


这个默认的模式是高效的，但是**只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出**。
This default mode is efficient, but **only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values)**.


为了给 `Vue` 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` attribute：
To give Vue a hint so that it can track each node's identity, and thus reuse and reorder existing elements, you need to provide a unique `key` attribute for each item:

```html
	<view v-for="item in items" :key="item.id">
	  <!-- content -->
	</view>
```

建议尽可能在使用 `v-for` 时提供 `key` attribute，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。
It is recommended to provide a key attribute with v-for whenever possible, unless the iterated DOM content is simple, or you are intentionally relying on the default behavior for performance gains.

- 如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。
- Without keys, Vue uses an algorithm that minimizes element movement and tries to patch/reuse elements of the same type in-place as much as possible. 
- 而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除/销毁 key 不存在的元素。
- With keys, it will reorder elements based on the order change of keys, and elements with keys that are no longer present will always be removed/destroyed.
- 有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。
- Children of the same common parent must have unique keys. Duplicate keys will cause render errors.

> 不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。
> Don't use non-primitive values like objects and arrays as v-for keys. Use string or numeric values instead.
> 
> 如不提供 :key，会报一个 `warning`， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。
> If you do not provide: key, one will be reported `warning`. If you know that the list is static or you don't need to pay attention to its order, you can choose to ignore it.

示例：
Example:

```html
	<template>
		<view>
			<!-- array 中 item 的某个 property -->
			<!-- Some property of item in Array -->
			<view v-for="(item,index) in objectArray" :key="item.id">
				{{index +':'+ item.name}}
			</view>
			<!-- item 本身是一个唯一的字符串或者数字时，可以使用 item 本身 -->
			<!-- When item itself is a unique string or number, we can use item itself -->
			<view v-for="(item,index) in stringArray" :key="item">
				{{index +':'+ item}}
			</view>
		</view>
	</template>
	<script>
	export default {
		data () {
			return {
				objectArray:[{
					id:0,
					name:'li ming'
				},{
					id:1,
					name:'wang peng'
				}],
				stringArray:['a','b','c']
			}
		}
	}
	</script>
```


### 注意事项
### Note

- 在H5平台 使用 v-for 循环整数时和其他平台存在差异，如 `v-for="(item, index) in 10"` 中，在H5平台 item 从 1 开始，其他平台 item 从 0 开始，可使用第二个参数 index 来保持一致。
- Differences and other platforms when the platforms H5 integer v-for loop, as `v-for="(item, index) in 10"`in, item 1 from the start, other platforms item from zero, the second parameter may be used in index H5 platform consistent.
- 在非H5平台 循环对象时不支持第三个参数，如 `v-for="(value, name, index) in object"` 中，index 参数是不支持的。
- The third parameter is not supported in the non-cyclic object H5 platform, such as `v-for="(value, name, index) in object"`in, index parameter is not supported.
- 小程序端数据为差量更新方式，由于小程序不支持删除对象属性，使用的设置值为 null 的方式替代，导致遍历时可能出现不符合预期的情况，需要自行过滤一下值为 null 的数据（[相关反馈](https://ask.dcloud.net.cn/question/103269)）。
- The data on the applet side is updated in a differential way. Since the applet does not support deleting object properties, the method of setting the value of null is used instead, which may cause unexpected situations during traversal. You need to filter the data with the value of null yourself. ([Related Feedback](https://ask.dcloud.net.cn/question/103269)).



### 结合 `<template v-for>`
### Integrate `<template v-for>`

在`Vue3`中，`key` 则应该被设置在 `<template>` 标签上
In `Vue3`, `key` should be set on the `<template>` tag

```html
	<template v-for="item in list" :key="item.id">
		<view>...</view>
		<text>...</text>
	</template>
```


类似地，当使用 `<template v-for>` 时存在使用 `v-if` 的子节点，`key` 应改为设置在 `<template>` 标签上。
Similarly, if there are child nodes that use `v-if` when using `<template v-for>`, `key` should be set on the `<template>` tag instead.

```html
	<template v-for="item in list" :key="item.id">
		<view v-if="item.isVisible">...</view>
		<view v-else>...</view>
	</template>
```




### 在组件上使用 v-for
### Use v-for on components

在自定义组件上，你可以像在任何普通元素上一样使用 `v-for` 。
On the custom component, you can use it like any ordinary element `v-for`.

```html
	<my-component v-for="item in items" :key="item.id"></my-component>
```

**当在组件上使用 v-for 时，key是必须的。**
**When using v-for on the component, the key is required.**



### v-for 与 v-if 一同使用
### v-if with v-for

> 不推荐在同一元素上使用 v-if 和 v-for
> Note that it's not recommended to use v-if and v-for together.

当它们处于同一节点，**`v-if` 的优先级比 `v-for` 更高**，这意味着 `v-if` 将没有权限访问 `v-for` 里的变量：
When they exist on the same node, `v-if` has a higher priority than `v-for`. That means the `v-if` condition will not have access to variables from the scope of the `v-for`:


```html
	<!-- 这将引发错误，因为未在实例上定义属性“todo” -->
	<!-- This will throw an error because property "todo" is not defined on instance. -->
	<view v-for="todo in todos" v-if="!todo.isComplete">
	  {{ todo }}
	</view>
```


可以把 `v-for` 移动到 `template` 标签中来修正：
This can be fixed by moving v-for to a wrapping `<template>` tag:

```html
	<template v-for="todo in todos">
	  <view v-if="!todo.isComplete">
		 {{ todo }}
	  </view>
	</template>
```



## 事件处理
## Event Handling


### 监听事件
### Listening to Events

我们可以使用 `v-on` 指令 (通常缩写为 @ 符号，下文简称为：@事件) 来监听 DOM 事件，并在触发事件时执行一些 `JavaScript`。
We can use the `v-on` directive (often abbreviated to the @ symbol, hereinafter referred to as: @event) to listen to DOM events and execute some `JavaScript` when the event is triggered.

用法为 `v-on:click="methodName"` 或使用快捷方式 `@click="methodName"` （uni-app里一般都使用@缩写方式）
The usage is `v-on:click="methodName"` or use the shortcut `@click="methodName"` (the @ abbreviation method is generally used in uni-app)

指令的值，字符串里直接写js。比如下面的`counter += 1`就是一段js。
The value of the command, directly write js in the string. For example, `counter += 1` below is a piece of js.

```html
	<template>
		<view>
			<button @click="counter += 1">Add 1</button>
			<text>The button above has been clicked {{ counter }} times.</text>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					counter:0
				}
			}
		}
	</script>
```


### 事件处理方法
### Method Event Handlers

然而许多事件处理逻辑会更为复杂，所以直接把 `JavaScript` 代码写在组件属性值里是不可行的。因此@事件还可以接收一个需要调用的方法名称。
However, many event handling logic will be more complex, so it is not feasible to directly write `JavaScript` code in component property values. So @event can also receive a method name that needs to be called.

示例：
Example:

```html
	<template>
		<view>
			<!-- `greet` 是在下面定义的方法名 -->
			<!-- `greet` is the name of a method defined below -->
			<button @click="greet">Greet</button>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					name: 'Vue.js'
				}
			},
			// 在 `methods` 对象中定义方法
			// `this` inside methods points to the current active instance
			methods: {
				greet(event){
					// `event` 是原生 DOM 事件
					// `event` is the native DOM event
					console.log(event);
					uni.showToast({
						title: 'Hello ' + this.name + '!'
					});
				}
			}
		}
	</script>
```



### 内联处理器中的方法
### Methods in Inline Handlers

除了直接绑定到一个方法，也可以在内联 `JavaScript` 语句中调用方法：
Instead of binding directly to a method name, we can also use methods in an inline JavaScript statement:


```html
	<template>
		<view>
			<button @click="say('hi')">Say hi</button>
			<button @click="say('what')">Say what</button>
		</view>
	</template>
	<script>
		export default {
			methods: {
				say(message) {
					uni.showToast({
						title: message
					});
				}
			}
		}
	</script>
```

有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 `$event` 把它传入方法：
Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special `$event` variable:

```html
	<template>
		<view>
			<button @click="warn('Form cannot be submitted yet.', $event)">
			  Submit
			</button>
		</view>
	</template>
	<script>
		export default {
			methods: {
				warn(message, event) {
					// 现在我们可以访问原生事件对象
					// now we have access to the native event
					if (event) {
						//可访问 event.target等原生事件对象
						//You can access native event objects such as event.target
						console.log("event: ",event);
					}
					uni.showToast({
						title: message
					});
				}
			}
		}
	</script>
```


### 多事件处理器
### Multiple Event Handlers

事件处理程序中可以有多个方法，这些方法由逗号运算符分隔：
You can have multiple methods in an event handler separated by a comma operator like this:

```html
	<template>
		<view>
			<!-- 这两个 one() 和 two() 将执行按钮点击事件 -->
			<!-- both one() and two() will execute on button click -->
			<button @click="one($event), two($event)">
			  Submit
			</button>
		</view>
	</template>
	<script>
		export default {
			methods: {
				one(event) {
					// first handler logic...
					console.log("event1: ",event);
				},
				two(event) {
					// second handler logic...
					console.log("event2: ",event);
				}
			}
		}
	</script>
```


### 事件修饰符
### Event Modifiers

修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 @事件对于触发的事件调用 `event.preventDefault()`：
The modifier is a special suffix specified by a period. It is used to indicate that an instruction should be bound in a special way. For example, `.prevent`modifier tells `v-on`instructions for event-triggered call `event.preventDefault()`:

@事件（v-on）提供了事件修饰符:
v-on provides event modifiers:

- `.stop`: 各平台均支持， 使用时会阻止事件冒泡，在非 H5 端同时也会阻止事件的默认行为
- `.stop`: Supported by all platforms, it will prevent the event from bubbling when used, and also prevent the default behavior of the event on the non-H5 side
- `.prevent`: 仅在 H5 平台支持
- `.prevent`: Only supported on H5 platform
- `.capture`: 仅在 H5 平台支持
- `.capture`: Only supported on H5 platform
- `.self`: 仅在 H5 平台支持
- `.self`: Only supported on H5 platform
- `.once`: 仅在 H5 平台支持
- `.once`: Only supported on H5 platform
- `.passive`: 仅在 H5 平台支持
- `.passive`: Only supported on H5 platform


```html
	<!-- 阻止单击事件继续传播 -->
	<!-- Prevents the click event from propagating further -->
	<view @click.stop="doThis"></view>
```


> 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `@click.prevent.self` 会阻止所有的点击，而 `@click.self.prevent` 只会阻止对元素自身的点击。
> Order matters when using modifiers because the relevant code is generated in the same order. Therefore using @click.prevent.self will prevent all clicks while @click.self.prevent will only prevent clicks on the element itself.


**注意**
**Note**

- 为兼容各端，事件需使用 **@** 的方式绑定，请勿使用小程序端的 `bind` 和 `catch` 进行事件绑定；也不能在 JS 中使用`event.preventDefault()`和`event.stopPropagation()`方法；
- To be compatible with all terminals, events need to be bound by **@**, please do not use `bind` and `catch` on the applet side for event binding; also cannot use `event.preventDefault()` in JS and `event.stopPropagation()` method;
- 若需要禁止蒙版下的页面滚动，可使用 `@touchmove.stop.prevent="moveHandle"`，`moveHandle` 可以用来处理 `touchmove` 的事件，也可以是一个空函数。
- If you need to scroll down the page prohibiting mask, use `@touchmove.stop.prevent="moveHandle"`, `moveHandle`processing can be used to `touchmove`events, but also can be an empty function.

```html
	<view class="mask" @touchmove.stop.prevent="moveHandle"></view>
```

- 按键修饰符：`uni-app` 运行在手机端，没有键盘事件，所以不支持按键修饰符。
- Key modifier: `uni-app` Run on the mobile phone, with no keyboard event. So the key modifier is not supported.


**使用 v-on 或 @ 有几个好处**
**there are several benefits in using v-on or @:**

1. 扫一眼 `template` 模板便能轻松定位在 `JavaScript` 代码里对应的方法。
1. A glance at the `template` template can easily locate the corresponding method in the `JavaScript` code.

2. 因为你无须在 `JavaScript` 里手动绑定事件，你的 `ViewModel` 代码可以是非常纯粹的逻辑，和 `DOM` 完全解耦，更易于测试。
2. Since you don't have to manually attach event listeners in JS, your `ViewModel` code can be pure logic and DOM-free. This makes it easier to test.

3. 当一个 `ViewModel` 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。
3. When a `ViewModel` is destroyed, all event listeners are automatically removed. You don't need to worry about cleaning it up yourself.


### 事件映射表
### Event mapping table

```js
// 事件映射表，左侧为 WEB 事件，右侧为 ``uni-app`` 对应事件
//Event mapping table, with WEB events on the left and corresponding events of ``uni-app``` on the right
	{
		click: 'tap',
		touchstart: 'touchstart',
		touchmove: 'touchmove',
		touchcancel: 'touchcancel',
		touchend: 'touchend',
		tap: 'tap',
		longtap: 'longtap', //推荐使用longpress代替
		input: 'input',
		change: 'change',
		submit: 'submit',
		blur: 'blur',
		focus: 'focus',
		reset: 'reset',
		confirm: 'confirm',
		columnchange: 'columnchange',
		linechange: 'linechange',
		error: 'error',
		scrolltoupper: 'scrolltoupper',
		scrolltolower: 'scrolltolower',
		scroll: 'scroll'
	}
```




## 表单输入绑定
## Form Input Bindings


### v-model

你可以用 v-model 指令在表单 `input`、`textarea` 及 `select` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
You can use the `v-model` directive to create two-way data bindings on form `input`, `textarea`, and `select` elements. It automatically picks the correct way to update the element based on the input type. Although a bit magical, `v-model` is essentially syntax sugar for updating data on user input events, plus special care for some edge cases.

> v-model 会忽略所有表单元素的 `value`、`checked`、`selected` attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。
> v-model will ignore the initial `value`, `checked` or `selected` attributes found on any form elements. It will always treat the current active instance data as the source of truth. You should declare the initial value on the JavaScript side, inside the data option of your component.

在下面的示例中，输入框通过`v-model`绑定了`message`，用户在输入框里输入内容时，这个内容会实施赋值给`message`。当然在代码里为`message`赋值也会实时同步到界面上input里。这就是双向绑定。
In the following example, the input box is bound to `message` through `v-model`, and when the user enters content in the input box, the content will be assigned to `message`. Of course, assigning a value to `message` in the code will also be synchronized to the input on the interface in real time. This is two-way binding.

```html
	<template>
		<view>
			<input v-model="message" placeholder="edit me">
			<text>Message is: {{ message }}</text>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					message:""
				}
			}
		}
	</script>
```



### uni-app表单组件
### uni-app form component

建议开发过程中直接使用 `uni-app`：[表单组件](https://uniapp.dcloud.io/component/button)。
It is recommended to use `uni-app`: [Form component](https://uniapp.dcloud.io/component/button) directly in the development process.

##### 用法示例：
##### Usage examples:

- H5 的 `select` 标签用 `picker` 组件进行代替
- The `select` tag on the H5 side is replaced with the `picker` component

```html
	<template>
		<view>
			<picker @change="bindPickerChange" :value="index" :range="array">
				<view class="picker">
					当前选择：{{array[index]}}
				</view>
			</picker>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					index: 0,
					array: ['A', 'B', 'C']
				}
			},
			methods: {
				bindPickerChange(e) {
					console.log(e)
					this.index = e.detail.value
				}
			}
		}
	</script>
```

- 表单元素 `radio` 用 `radio-group` 组件进行代替
- Form element `radio` is replaced with `radio-group` component

```html
	<template>
		<view>
			<radio-group class="radio-group" @change="radioChange">
				<label class="radio" v-for="(item, index) in items" :key="item.name">
					<radio :value="item.name" :checked="item.checked" /> {{item.value}}
				</label>
			</radio-group>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					items: [{
							name: 'USA',
							value: '美国'
						},
						{
							name: 'CHN',
							value: '中国',
							checked: 'true'
						},
						{
							name: 'BRA',
							value: '巴西'
						},
						{
							name: 'JPN',
							value: '日本'
						},
						{
							name: 'ENG',
							value: '英国'
						},
						{
							name: 'TUR',
							value: '法国'
						}
					]
				}
			},
			methods: {
				radioChange(e) {
					console.log('radio发生change事件，携带value值为：', e.target.value)
				}
			}
		}
	</script>
```



## 计算属性和侦听器
## Computed Properties and Watchers

### 计算属性computed
### Computed Properties

每一个计算属性都包含一个 `getter` 函数和一个 `setter`函数 ，默认是利用 `getter` 函数来读取。所有 `getter` 和 `setter` 函数的 `this` 上下文自动地绑定为 Vue 实例。
Each computed property contains a `getter` function and a `setter` function, which is read by default using the `getter` function. The `this` context of all `getter` and `setter` functions is automatically bound to the Vue instance.


#### 计算属性的 getter 
#### Getter of Calculated attribute


模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如，有一个嵌套数组对象：
In-template expressions are very convenient, but they are meant for simple operations. Putting too much logic in your templates can make them bloated and hard to maintain. For example, if we have an object with a nested array:

```js
	data() {
		return {
			author: {
				name: 'John Doe',
				books: [
					'Vue 2 - Advanced Guide',
					'Vue 3 - Basic Guide',
					'Vue 4 - The Mystery'
				]
			}
		}
	}
```


我们想根据 author 是否已经有一些书来显示不同的消息，可以使用模板内的表达式
We want to display different messages depending on whether the author already has some books, we can use the expression in the template


```html
	<view>
		<view>Has published books:</view>
		<view>{{ author.books.length > 0 ? 'Yes' : 'No' }}</view>
	</view>
```

此时，模板不再是简单的和声明性的。你必须先看一下它，然后才能意识到它执行的计算取决于 author.books。如果要在模板中多次包含此计算，则问题会变得更糟。
At this point, the template is no longer simple and declarative. You have to look at it for a second before realizing that it performs a calculation depending on `author.books`. The problem is made worse when you want to include this calculation in your template more than once.

所以，对于任何包含响应式数据的复杂逻辑，你都应该使用**计算属性**。
That's why for complex logic that includes reactive data, you should use a **computed property**.


**使用计算属性的例子**
**Example using computed properties**

```html
	<template>
		<view>
			<view>OHas published books:</view>
			<view>{{ publishedBooksMessage }}</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					author: {
						name: 'John Doe',
						books: [
							'Vue 2 - Advanced Guide',
							'Vue 3 - Basic Guide',
							'Vue 4 - The Mystery'
						]
					}
				}
			},
			computed: {
				// 计算属性的 getter
				// a computed getter
				publishedBooksMessage() {
					// `this` points to the vm instance
					return this.author.books.length > 0 ? 'Yes' : 'No'
				}
			}
		}
	</script>
```


这里声明了一个计算属性 `publishedBooksMessage`。
Here we have declared a computed property `publishedBooksMessage`.

尝试更改应用程序 `data` 中 `books` 数组的值，你将看到 `publishedBooksMessage` 如何相应地更改。
Try to change the value of books array in the application data and you will see how `publishedBooksMessage` is changing accordingly.

你可以像普通属性一样将数据绑定到模板中的计算属性。Vue 知道 `publishedBookMessage` 依赖于 `author.books`，因此当 `author.books` 发生改变时，所有依赖 `publishedBookMessage` 绑定也会更新。而且最妙的是我们已经声明的方式创建了这个依赖关系：计算属性的 getter 函数没有副作用，这使得更易于测试和理解。
You can data-bind to computed properties in templates just like a normal property. Vue is aware that `publishedBooksMessage` depends on `author.books`, so it will update any bindings that depend on `publishedBooksMessage` when `author.books` changes. And the best part is that we've created this dependency relationship declaratively: the computed getter function has no side effects, which makes it easier to test and understand.

计算属性还可以依赖多个 Vue 实例的数据，只要其中任一数据变化，计算属性就会重新执行，视图也会更新。
Computed properties can also depend on the data of multiple Vue instances. As long as any of the data changes, the calculated properties will be re-executed and the view will be updated.



#### 计算属性的 setter
#### Setter of computed property

计算属性默认只有 `getter`，不过在需要时你也可以提供一个 `setter`， 当手动修改计算属性的值时，就会触发 `setter` 函数，执行一些自定义的操作。
When you need it can also provide a `setter`function, when manually modify the calculated value of the property, it will trigger `setter`function, perform some custom actions.

```html
	<template>
		<view>
			<view>{{ fullName }}</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					firstName: 'Foo',
					lastName: 'Bar'
				}
			},
			computed: {
				fullName: {
					// getter
					get(){
						return this.firstName + ' ' + this.lastName
					},
					// setter
					set(newValue){
						var names = newValue.split(' ')
						this.firstName = names[0]
						this.lastName = names[names.length - 1]
					}
				}
			}
		}
	</script>
```

现在再运行 `fullName = 'John Doe'` 时，`setter` 会被调用，`firstName` 和 `lastName` 也会相应地被更新。
Now run `fullName = 'John Doe'`time, `setter`will be called `firstName`and `lastName`will be updated accordingly.


#### getter与setter区别
#### The difference between getter and setter

- get：通过设置get方法可以得到fullName的新值。
- get: The new value of fullName can be obtained by setting the get method.
- set：通过set的方法，设置一个值（newValue）来改变fullName相关联的值，引起fullName重新的计算，相应的页面上fullName也会发生改变成新的内容。
- set: Set a value (newValue) to change the value associated with fullName through the set method, causing the fullName to be recalculated, and the fullName on the corresponding page will also be changed to new content.



### 计算属性缓存 vs 方法
### Computed Caching vs Methods

我们可以通过在表达式中调用方法来达到同样的效果：
We can achieve the same result by invoking a method in the expression:

```html
	<template>
		<view>
			<view>{{ calculateBooksMessage() }}</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					author: {
						name: 'John Doe',
						books: [
							'Vue 2 - Advanced Guide',
							'Vue 3 - Basic Guide',
							'Vue 4 - The Mystery'
						]
					}
				}
			},
			methods: {
				calculateBooksMessage() {
				   return this.author.books.length > 0 ? 'Yes' : 'No'
				}
			}
		}
	</script>
```

我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是**计算属性是基于它们的反应依赖关系缓存的**。
Instead of a computed property, we can define the same function as a method. For the end result, the two approaches are indeed exactly the same. However, the difference is that **computed properties are cached based on their reactive dependencies**. 

计算属性只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 `author.books` 还没有发生改变，多次访问 `publishedBookMessage` 计算属性会立即返回之前的计算结果，而不必再次执行函数。
A computed property will only re-evaluate when some of its reactive dependencies have changed. This means as long as `author.books` has not changed, multiple access to the `publishedBooksMessage` computed property will immediately return the previously computed result without having to run the function again.

这也同样意味着下面的计算属性将不再更新，因为 `Date.now ()` 不是响应式依赖：
This also means the following computed property will never update, because `Date.now()` is not a reactive dependency:

```js
	computed: {
		now(){
			return Date.now()
		}
	}
```


相比之下，每当触发重新渲染时，**调用方法将总会再次执行函数**。
In comparison, a method invocation will always run the function whenever a re-render happens.


我们为什么需要缓存？
Why do we need caching?

假设我们有一个性能开销比较大的计算属性 `list`，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 `list`。如果没有缓存，我们将不可避免的多次执行 `list` 的 `getter`！如果你不希望有缓存，请用 `method` 来替代。
Imagine we have an expensive computed property `list`, which requires looping through a huge array and doing a lot of computations. Then we may have other computed properties that in turn depend on `list`. Without caching, we would be executing list’s `getter` many more times than necessary! In cases where you do not want caching, use a `method` instead.




### 侦听器watch
### Watchers

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 `Vue` 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
While computed properties are more appropriate in most cases, there are times when a custom watcher is necessary. That's why Vue provides a more generic way to react to data changes through the watch option. This is most useful when you want to perform asynchronous or expensive operations in response to changing data.

当你有一些数据需要随着其它数据变动而变动时，就可以使用`Watch`来监听他们之间的变化。
When you have some data that needs to change with other data changes, you can use `Watch` to listen to the changes between them.

一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。
An object where keys are reactive properties to watch — examples include data or computed properties — and values are the corresponding callbacks. The value can also be a string of a method name, or an Object that contains additional options. 
`Vue` 实例将会在实例化时调用 `$watch()` ，遍历 `watch` 对象的每一个 `property` 。
The `Vue` instance will call `$watch()` when it is instantiated, and traverse each `property` of the `watch` object.



#### 监听变量的值变化
#### listen to value change of variables

示例：
Example:

```html
	<template>
		<view>
			<input type="number" v-model="a" style="border: red solid 1px;" />
			<input type="number" v-model="b" style="border: red solid 1px;" />
			<view>总和：{{sum}}</view>
			<button type="default" @click="add">求和</button>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					a:1,
					b:1,
					sum: ""
				}
			},
			watch: {
				//使用watch来响应数据的变化，第一个参数为newVal新值，第二个参数oldVal为旧值
				//Use watch to respond to data changes, the first parameter is the new value of newVal, and the second parameter oldVal is the old value
				a: function(newVal, oldVal) {
					console.log("a--newVal: ", newVal, "a--oldVal: ",oldVal);
				},
				b: function(newVal, oldVal) {
					console.log("b--newVal: ", newVal, "b--oldVal: ",oldVal);
				}
			},
			methods: {
				add() {
					this.sum = parseInt(this.a) + parseInt(this.b)
				}
			}
		}
	</script>
```


以上示例有个问题，就是页面刚加载时，因为没有变化，所以不会执行。下面用`immediate`来解决。
One problem with the above example is that it will not be executed when the page is just being loaded because there is no change. Use `immediate` to solve the following problems.

#### 选项：immediate
#### Option: immediate

在选项参数中指定 `immediate: true` 将立即以表达式的当前值触发回调：
Passing in `immediate: true` in the option will trigger the callback immediately with the current value of the expression:

`watch`方法默认就是`handler`，而当`immediate:true`时，就会先执行`handler`方法。
The `watch` method defaults to `handler`, and when `immediate:true`, the `handler` method will be executed first.


```html
	<template>
		<view>
			<input type="number" v-model="a" style="border: red solid 1px;" />
			<input type="number" v-model="b" style="border: red solid 1px;" />
			<view>总和：{{sum}}</view>
			<button type="default" @click="add">求和</button>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					a:1,
					b:1,
					sum: ""
				}
			},
			watch: {
				a: {
					handler(newVal, oldVal) {
						console.log("a------: ", newVal, oldVal);
					},
					immediate: true//初始化绑定时就会执行handler方法
				},
				b: {
					handler(newVal, oldVal) {
						console.log("b------: ", newVal, oldVal);
					},
					immediate: true//初始化绑定时就会执行handler方法
				}
			},
			methods: {
				add() {
					this.sum = parseInt(this.a) + parseInt(this.b)
				}
			}
		}
	</script>
```



#### 选项：deep
#### Option: deep

为了发现对象内部值的变化，可以在选项参数中指定 `deep: true` 。深度监听一个对象整体的变化（即监听对象所有属性值的变化），注意监听数组的变更不需要这么做。
To also detect nested value changes inside Objects, you need to pass in `deep: true` in the options argument. This option also can be used to watch array mutations.


```html
	<template>
		<view>
			<input type="number" v-model="obj.a" style="border: red solid 1px;" />
			<input type="number" v-model="obj.b" style="border: red solid 1px;" />
			<view>总和：{{sum}}</view>
			<button type="default" @click="add">求和</button>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					obj: {
						a: 1,
						b: 1,
					},
					sum:""
				}
			},
			watch: {
				obj: {
					handler(newVal, oldVal) {
						console.log('obj-newVal:' + JSON.stringify(newVal), 'obj-oldVal:' + JSON.stringify(oldVal), );
					},
					deep: true//对象中任一属性值发生变化，都会触发handler方法
				}
			},
			methods: {
				add() {
					this.sum = parseInt(this.obj.a) + parseInt(this.obj.b)
				}
			}
		}
	</script>
```


#### 监听对象中单个属性
#### listen to the single attribute in an object

如果不想监听 `obj` 中其他值，只想监听 `obj.a` 的值的变化，可以写成字符串形式监听。
If you don't want to listen to other values in `obj`, just want to listen to the change of the value of `obj.a`, you can write it as a string to listen.

```js
	export default {
		data() {
			return {
				obj: {
					a: 1,
					b: 1,
				}
			}
		},
		watch: {
			"obj.a": {//监听obj对象中的单个属性值的变化
				handler(newVal, oldVal) {
					console.log('obj-newVal:' + newVal, 'obj-oldVal:' + oldVal);
				}
			}
		}
	}
```



### 计算属性 vs 侦听属性
### Computed vs Watched Property

`Vue` 提供了一种更通用的方式来观察和响应 `Vue` 实例上的数据变动：**侦听属性**。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 `watch` 。然而，通常更好的做法是使用计算属性而不是命令式的 `watch` 回调。
Vue does provide a more generic way to observe and react to data changes on a current active instance: **watch properties**. When you have some data that needs to change based on some other data, it is tempting to overuse watch. However, it is often a better idea to use a computed property rather than an imperative watch callback. Consider this example:


```js
	export default {
		data() {
			return {
				firstName: 'Foo',
				lastName: 'Bar',
				fullName: 'Foo Bar'
			}
		},
		watch: {
			firstName: function(val) {
				this.fullName = val + ' ' + this.lastName
			},
			lastName: function(val) {
				this.fullName = this.firstName + ' ' + val
			}
		}
	}
```

上面代码是命令式且重复的。将它与计算属性的版本进行比较：
The above code is imperative and repetitive. Compare it with a computed property version:


```js
	export default {
		data() {
			return {
				firstName: 'Foo',
				lastName: 'Bar'
			}
		},
		computed: {
		    fullName(){
				return this.firstName + ' ' + this.lastName
		    }
		}
	}
```
