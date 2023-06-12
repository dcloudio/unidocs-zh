
## 介绍
## Introduction

**Vue.js 是什么**
**What is Vue.js**

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。Vue 被设计为可以自底向上逐层应用。
Vue (pronounced /vjuː/, similar to view) is a progressive framework for building user interfaces. Vue is designed to be applied layer by layer from the bottom up.


Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。
Vue.js uses HTML-based template syntax, allowing developers to declaratively bind the DOM to the data of the underlying Vue instance. All Vue.js templates are legal HTML, so they can be parsed by browsers and HTML parsers that follow the specification.

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。
In the underlying implementation, Vue compiles the template into a virtual DOM rendering function. Combined with the response system, Vue can intelligently calculate how many components need to be re-rendered and minimize the number of DOM operations.

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统，只关注视图层，易于上手。所有东西都是响应式的。
The core of Vue.js is a system that allows the use of concise template syntax to declaratively render data into the DOM. It only focuses on the view layer and is easy to use. Everything is responsive.


我们提供了免费视频教程，在看此文档同时建议结合 [vue入门视频教程](https://learning.dcloud.io/#/?vid=0) ，帮助你更加快速掌握。
We provide a free video tutorial, while reading this document, we recommend that you combine [Vue Getting Started Video Tutorial](https://learning.dcloud.io/#/?vid=0) for a quicker grasp.



 **致谢**
 **Thanks**

本文大部分内容来源于vue官网，但结合 `uni-app` 做了部分调整，以更有利于开发者快速上手。感谢Vue团队！
Most of the content of this article comes from vue official website, but some adjustments have been made in conjunction with `uni-app` to make it easier for developers to get started quickly. Heartfelt thanks should be given to the Vue team!


## vue相比传统js的开发优势
## Vue development advantages over traditional js

在传统开发中，用原生的 JavaScript DOM 操作函数对 DOM 进行频繁操作的时候，浏览器要不停的渲染新的 DOM 树，导致页面看起来非常卡顿。
In traditional development, when the native JavaScript DOM manipulation function is used to frequently manipulate the DOM, the browser must constantly render the new DOM tree, causing the page to look very stuck.

vue 是单页面应用，使页面局部刷新，不用每次跳转页面都要请求所有数据和 DOM ，这样大大加快了访问速度和提升用户体验。
Vue is a single-page application, which makes the page partially refresh, without having to request all the data and DOM every time you jump to the page, which greatly speeds up the access speed and improves the user experience.



**vue的优势：**
**Advantages of Vue:**

- 轻量级渐进式框架
- Lightweight Progressive Framework
- 视图、数据和结构的分离
- Separation of view, data and structure
- 响应式双向数据绑定
- Responsive two-way data binding
- 组件化
- Componentization
- 虚拟DOM
- Virtual DOM
- 运行速度快，易于上手
- Runs fast and easy to get started
- 便于与第三方库或既有项目整合
- Easy to integrate with third-party libraries or existing projects



### 文件类型变化
### File type changes

- 以前是.html文件，开发也是html，运行也是html。
- It used to be .html files, development was also html, and running was also html.
- 现在是.vue文件，开发是vue，经过编译后，运行时已经变成了js文件。
- Now it is a .vue file, and development is a vue. After compilation, the runtime has become a js file.
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


- 现在 `template` 是一级节点，用于写tag组件， `script` 和 `style` 是并列的一级节点，也就是有3个一级节点。这个叫[vue单文件组件规范sfc](https://cn.vuejs.org/v2/guide/single-file-components.html)。
- Now `template`is a node for writing tag components, `script`and `style`is a node in parallel, that is, there are three-level node.

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
**js needs to come in and become an object** . 
在hello uni-app的 `common` 目录有一个工具类 `util.js` ，可以在hello uni-app中搜索这个例子查看。hello uni-app示例代码可从 [github](https://github.com/dcloudio/hello-uniapp) 获取。
There is a tool class `util.js` in the `common` directory of hello uni-app. You can search for this example in hello uni-app. Hello uni-app sample code is available from [github](https://github.com/dcloudio/hello-uniapp).


```html
	<script>  
		var util = require('../../../common/util.js');  //require这个js模块  
		var formatedPlayTime = util.formatTime(playTime); //调用js模块的方法  
	</script>
```

而在这个 `util.js` 里，要把之前的 `function` 封装为对象的方法
In this `util.js`, the prior should `function`method for encapsulating as an object

```js
	function formatTime(time) {  
		return time;//这里没写逻辑  
	}  
	module.exports = {  
		formatTime: formatTime  
	}
```


当然还有一些高级的用法
Of course, there are some advanced usages

```js
	// 直接使用js模块的属性。在hello uni-app有示例 
	// Directly use the properties of the js module. There are examples in hello uni-app
	var dateUtils = require('../../../common/util.js').dateUtils; 
	// 将js导入并重命名为echarts，然后使用echarts.来继续执行方法。在hello uni-app有示例 
	// Import js and rename it to echarts, then use echarts. to continue executing the method. There are examples in hello uni-app
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


**另外，vue支持组件导入，可以更方便的封装一个包括界面、js、样式的库**。[详见](/vue-components.md)
**In addition, Vue supports component import, which makes it easier to encapsulate a library that includes interface, js, and styles** [See](/vue-components.md).


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
	- The front end uses the [MVVM](short for Model-View-ViewModel) mode. Simply put, Model: represents the data model, View: only focuses on view UI processing, and ViewModel: only processes business and data. Its core is the VM in MVVM, which is the ViewModel. ViewModel is responsible for connecting View and Model to ensure the consistency of views and data. This lightweight architecture makes front-end development more efficient and convenient, greatly reducing the number of lines of code, and better differential rendering performance.
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



## 在 uni-app 中使用差异
## Use differences in uni-app

`uni-app` 在发布到H5时支持所有vue的语法；发布到App和小程序时，由于平台限制，无法实现全部vue语法，但 `uni-app` 仍是对vue语法支持度最高的跨端框架。
`uni-app` supports all vue syntaxes when it is published to H5; when publishing to apps and applets, due to platform limitations, all vue syntaxes cannot be implemented, but `uni-app` is still the cross-platform with the highest support for vue syntax. end frame.

相比Web平台， Vue.js 在 `uni-app` 中使用差异主要集中在两个方面：
Compared with the Web platform, the differences in the use of Vue.js in `uni-app` are mainly concentrated in two aspects:

- 新增：`uni-app` 除了支持 Vue 实例的组件生命周期，还拥有[应用生命周期](/collocation/App.html#applifecycle)及[页面的生命周期](/tutorial/page.html#lifecycle)。
- 受限：相比 Web 平台，在小程序和 App 端部分功能支持不完善，具体见[兼容性列表](/vue3-api)。





## 模板语法
## Template syntax



### 插值
### Interpolation

[观看本节视频讲解](https://learning.dcloud.io/#/?vid=5)
[Watch a free video course](https://learning.dcloud.io/#/?vid=5)

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

{{msg}}里的内容将会被替代为对应数据对象上msg的值。无论何时，绑定的数据对象上msg发生了改变，插值处的内容都会更新。
The content in {{msg}} will be replaced with the value of msg on the corresponding data object. Whenever the msg on the bound data object changes, the content at the interpolation point will be updated.




#### 使用 JavaScript 表达式
#### Using JavaScript Expressions


迄今为止，在我们的模板中，我们一直都只绑定简单的 `property` 键值。但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 `JavaScript` 表达式支持。
So far we’ve only been binding to simple property keys in our templates. But Vue.js actually supports the full power of JavaScript expressions inside all data bindings:

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
These expressions will be evaluated as JavaScript in the data scope of the owner Vue instance. One restriction is that each binding can only contain one single expression, so the following will NOT work:


```html
<template>
  <view>
    <!-- 这是语句，不是表达式 -->
    <!-- *** -->
    <view>{{ var a = 1 }}</view>
    <!-- 流控制也不会生效，请使用三元表达式 -->
    <!-- *** -->
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
> Template expressions are sandboxed and only have access to a whitelist of globals
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
> 
> 你不应该在模板表达式中试图访问用户定义的全局变量。
> You should not attempt to access user-defined globals in template expressions.




### 指令
### Directives


[观看本节视频讲解](https://learning.dcloud.io/#/?vid=6)
[Watch a free video course](https://learning.dcloud.io/#/?vid=6)

指令是带有 v- 前缀的特殊属性。
Directives are special attributes with the v- prefix.

- 指令属性的值预期是单个 JavaScript 表达式 (v-for 是例外情况)。
- The value of the directive attribute is expected to be a single JavaScript expression (v-for is an exception).
- 指令的作用是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
- The function of the instruction is that when the value of the expression changes, the collateral effect produced by it will act on the DOM responsively.
- 一些指令能够接收一个“参数”，在指令名称之后以冒号（ : ）表示。
- Some commands can receive a "parameter", which is indicated by a colon (:) after the command name.



#### v-bind

动态地绑定一个或多个属性，或一个组件 `prop` 到表达式。
Dynamically bind one or more attributes, or a component `prop`to the expression.

- v-bind缩写为‘ : ’
- v-bind is abbreviated as ':'
- 在绑定 `prop` 时，`prop` 必须在子组件中声明。
- In binding `prop`upon, `prop`it must be declared in the sub-assembly.
- 可以用修饰符指定不同的绑定类型。
- You can specify different binding types with modifiers.

```html
	<image v-bind:src="imgUrl"></image>
	<!-- 缩写 -->
	<!-- abbreviations -->
	<image :src="imgUrl"></image>
	
	<!-- prop 绑定。“prop”必须在 my-component 中声明。-->
	<!-- Prop binding. "Prop" must be declared in the my-component.-->
	<my-component :prop="someThing"></my-component>
	
	<button v-bind:disabled="isButtonDisabled">Button</button>
```

如果 `isButtonDisabled` 的值是 `null` 、`undefined` 或 `false` ，则 `disabled` 甚至不会被包含在渲染出来的 `button` 元素中。
If the `isButtonDisabled`values are `null`, `undefined`or `false`, it `disabled`will not even be included in the rendered `button`elements.


#### v-on


v-on 指令，它用于监听 DOM 事件。v-on缩写为‘ @ ’，下文简称为 @事件
The v-on instruction, which is used to monitor DOM events. v-on is abbreviated as'@'


```html
	<!-- 完整语法 -->
	<!-- Complete syntax -->
	<view v-on:click="doSomething">点击</view>	
	<!-- 缩写 -->
	<!-- abbreviations -->
	<view @click="doSomething">点击</view>
```


#### v-once

只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。
Only render elements and components once. Subsequent re-rendering, the element/component and all its child nodes will be treated as static content and skipped.

和前端框架中的理解不同，客户端里要实现复用的逻辑，会标记模板节点的状态，添加了 `v-once` 能保证节点只渲染一次，但是并不一定能优化渲染性能，反而可能会拖慢客户端复用节点时的比对效率。
Unlike front-end framework in understanding the client in order to achieve a logical multiplexing state flag template node will be added to the `v-once`guarantee rendering node only once, but not necessarily be able to optimize the rendering performance, but might slow down the client Comparison efficiency when multiplexing nodes.

>  h5、微信小程序均不支持
> h5, WeChat applet are not supported

```html
	<view v-once>This will never change: {{msg}}</view>
	<!-- 有子元素 -->
	<!-- A child element -->
	<view v-once>
		<text>comment</text>
		<text>{{msg}}</text>
	</view>
```


#### v-html

更新元素的 `innerHTML` 。
Update elements `innerHTML`.

- 注意：**内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译。**
- Note: The **content is inserted as normal HTML-it will not be compiled as a Vue template.**
- 如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代。
- If you try to use the v-html composite template, you can reconsider whether to replace it by using components.
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
					rawHtml: '<div style="text-align:center;background-color: #007AFF;"><div >我是内容</div><img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png"/></div>'
				}
			}
		}
	</script>
```




## data 属性
## data attribute

data 必须声明为返回一个初始数据对象的函数（注意函数内返回的数据对象不要直接引用函数外的对象）；否则页面关闭时，数据不会自动销毁，再次打开该页面时，会显示上次数据。
data must be declared as a function that returns an initial data object (note that the data object returned in the function should not directly reference objects outside the function); otherwise, the data will not be automatically destroyed when the page is closed, and the last data will be displayed when the page is opened again .

```js
	//正确用法，使用函数返回对象
	//Properly used, using a function to return an object
	data() {
		return {
			title: 'Hello'
		}
	}

	//错误写法，会导致再次打开页面时，显示上次数据
	//Incorrect notation that will cause the last data to be displayed when the page is reopened
	data: {
		title: 'Hello'
	}

	//错误写法，同样会导致多个组件实例对象数据相互影响
	//Incorrect notation can also result in multiple component instance object data influencing each other
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
## Class and Style binding


[观看本节视频讲解](https://learning.dcloud.io/#/?vid=7)
[Watch a free video course](https://learning.dcloud.io/#/?vid=7)

为节约性能，我们将 `Class` 与 `Style` 的表达式通过 `compiler` 硬编码到 `uni-app` 中，支持语法和转换效果见下：
To save performance, we hard-code the expressions of `Class` and `Style` into `uni-app` through `compiler`. The supported syntax and conversion effects are as follows:


### 对象语法
### Object syntax


可以传给 v-bind:class 一个对象，实现动态地切换 class。
An object can be passed to v-bind:class to switch classes dynamically.

也可以在对象中传入更多字段来动态切换多个 class。此外，v-bind:class 指令也可以与普通的 class 共存。
You can also pass in more fields in the object to dynamically switch multiple classes. In addition, the v-bind:class instruction can also coexist with ordinary classes.


```html
	<template>
		<view>
			<!-- class -->
			<view class="static" :class="{ active: isActive}">111</view>
			<view class="static" :class="{ active: isActive, 'text-danger': hasError }">222</view>
			<!-- style -->
			<view v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">333</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					isActive: true,
					hasError: false,
					activeColor:"green",
					fontSize:50
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
	}
	.text-danger{
		color: #DD524D;
	}
	</style>
```

渲染结果为
The rendering result is

```html
	<view class="static active"></view>
```

当 `isActive` 或者 `hasError` 变化时，class 列表将相应地更新。例如，如果 `hasError` 的值为 `true` ，class 列表将变为 `static active text-danger`。
When `isActive`or `hasError`changes, class list will be updated accordingly. For example, if `hasError`the value `true`, class list becomes `static active text-danger`.



### 数组语法
### Array syntax

可以把一个数组传给 v-bind:class，以应用一个 class 列表。
You can pass an array to v-bind:class to apply a class list.


```html
<template>
	<view>
		<!-- class -->
		<view class="static" :class="[activeClass,errorClass]">111</view>
		<view class="static" v-bind:class="[isActive ? activeClass : '', errorClass]">222</view><!-- 三元表达式 -->
		<view class="static" v-bind:class="[{ active: isActive }, errorClass]">333</view>
		<!-- style -->
		<view v-bind:style="[{ color: activeColor, fontSize: fontSize + 'px' }]">444</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				isActive: true,
				activeClass: 'active',
				errorClass: 'text-danger',
				activeColor:"green",
				fontSize:50
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


此外还可以用 `computed` 方法生成 `class` 或者 `style` 字符串，插入到页面中，举例说明：
Further it may also be used `computed`to generate a method `class`or a `style`string, inserted into the page, illustrated:


```html
  <template>
      <!-- 支持 -->
      <!-- support -->
      <view class="container" :class="computedClassStr"></view>
      <view class="container" :class="{active: isActive}"></view>
      <!-- 不支持 -->
      <!-- Does not support -->
      <view class="container" :class="computedClassObject"></view>
  </template>
  <script>
      export default {
          data () {
              return {
                  isActive: true
              }
          },
          computed: {
              computedClassStr () {
                  return this.isActive ? 'active' : ''
              },
              computedClassObject () {
                  return { active: this.isActive }
              }
          }
      }
  </script>
```





> 小程序端不支持 `classObject` 和 `styleObject` 语法。
> The applet does not support the `classObject` and `styleObject` syntax.

小程序端不支持示例：
The applet does not support examples:

```html
	<template>
		<view>
			<view :class="activeClass">hello uni-app</view>
			<view :style="styleObject">hello uni-app</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					activeClass: {
						'active': true,
						'text-danger': false
					},
					styleObject: {
						color: 'red',
						fontSize: '20px'
					}
				}
			}
		}
	</script>
	<style>
		.active {
			background-color: #007AFF;
		}
		.text-danger {
			font-size: 60rpx;
			color: #DD524D;
		}
	</style>
```

## 条件渲染@condition
## Conditional rendering


[观看本节视频讲解](https://learning.dcloud.io/#/?vid=8)
[Watch a free video course](https://learning.dcloud.io/#/?vid=8)


### v-if和v-else
### v-if and v-else

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 `truthy` 值的时候被渲染。
`v-if`Instructions are used to conditionally render a piece of content. This content will only return instruction in an expression `truthy`is rendered value of the time.
使用 `v-else` 指令来表示 v-if 的“else 块”。
Use `v-else`instructions represent the v-if "else block."

> 在 JavaScript 中，truthy（真值）指的是在布尔值上下文中，转换后的值为真的值。所有值都是真值，除非它们被定义为 假值（即除 false、0、""、null、undefined 和 NaN 以外皆为真值）。
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
`v-else-if`, As the name suggests, serves as the "else-if block" of v-if and can be used continuously:


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
Similarly `v-else`, `v-else-if`we must immediately bring `v-if`or `v-else-if`elements after.



### 条件渲染分组
### Conditional rendering grouping

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 `template` 元素当做不可见的包裹元素，并在上面使用 v-if。最终的渲染结果将不包含 `template` 元素。
Because `v-if`a command, so it must be added to an element. But what if you want to switch multiple elements? At this time it can be a `template`element as invisible package elements, and using v-if above. The final rendering results will not contain `template`elements.

```html
<template v-if="seen">
	<view>标题</view>
	<view>内容：现在你看到我了</view>
</template>
```



### v-show

`v-show` 是一个根据条件展示元素选项的指令 。用法大致和 `v-if` 一样：
`v-show`It is an instruction to display element options based on conditions. Usage and roughly `v-if`the same:

```html
	<view v-show="ok">Hello!</view>
```

不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 `CSS` 属性的 `display` 。
The difference is that elements with v-show will always be rendered and kept in the DOM. v-show simply switching element `CSS`attributes `display`.

> 注意，v-show 不支持 template 元素，也不支持 v-else。nvue 页面不支持 v-show。
> Note that v-show does not support template elements, nor does v-else. The nvue page does not support v-show.



### v-if 和 v-show 区别
### The difference between v-if and v-show

`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
`v-if` It is a "real" conditional rendering, because it will ensure that the event listeners and subcomponents in the conditional block are properly destroyed and rebuilt during the switching process.

`v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做，直到条件第一次变为真时，才会开始渲染条件块。
`v-if` It is also lazy: if the condition is false in the initial rendering, nothing is done, and the conditional block will not be rendered until the condition becomes true for the first time.

相比之下，`v-show` 就简单得多，不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换，来控制元素的显示和隐藏。
In contrast, `v-show`it is much simpler, no matter what the initial conditions are, the element will always be rendered, and it is simply switched based on CSS to control the display and hiding of the element.

**根据应用场景选择**
**Choose according to application scenarios**

- `v-if` 有更高的切换开销，如果在运行时条件很少改变，则使用 v-if 较好。
- `v-if` There is a higher switching overhead. If the conditions rarely change during runtime, it is better to use v-if.
- `v-show` 有更高的初始渲染开销。如果需要非常频繁地切换，则使用 v-show 较好。
- `v-show`There is a higher initial rendering overhead. If you need to switch very frequently, v-show is better.


**注意**
**note**

- 不推荐同时使用 `v-if` 和 `v-for`。
- Not recommended to use both `v-if`and `v-for`.
- 当 `v-if` 与 `v-for` 一起使用时，`v-for` 具有比 `v-if` 更高的优先级。
- When `v-if`and `v-for`when used together, `v-for`than `v-if`a higher priority.



## 列表渲染@listrendering
## List rendering

[观看本节视频讲解](https://learning.dcloud.io/#/?vid=9)
[Watch a free video course](https://learning.dcloud.io/#/?vid=9)


### 在 v-for 里使用数组
### Use arrays in v-for

v-for 指令可以实现基于一个数组来渲染一个列表。
The v-for instruction can render a list based on an array.

- `v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的别名。
- The v-for directive requires a special syntax in the form of item in items, where items is the source data array and item is an alias for the array element being iterated on.
	- 第一个参数 `item` 则是被迭代的数组元素的别名。
	- The first parameter `item`is the alias iterated array elements.
	- 第二个参数，即当前项的索引 `index` ，是可选的。
	- The second parameter, the index of the current item `index`, is optional.

```html
	<template>
		<view>
			<view v-for="(item, index) in items">
				{{ index }} - {{ item.message }}
			</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
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
result:

```html
	0 - Foo
	1 - Bar
```


### 在 v-for 里使用对象
### Use objects in v-for

你也可以用 v-for 来遍历一个对象的 `property`。
You can also use v-for to traverse an object `property`.

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
						publishedAt: '2020-04-10'
					}
				}
			}
		}
	</script>
```


结果：
result:

```html
	0.title: How to do lists in Vue,
	1.author: Jane Doe,
	2.publishedAt: 2020-04-10
```


### 列表渲染分组
### List rendering grouping

类似于 `v-if`，你也可以利用带有 `v-for` 的 `template` 来循环渲染一段包含多个元素的内容。比如：
Like `v-if`, you can also use with `v-for`the `template`cyclically render some content that contain multiple elements. such as:

```html
	<template v-for="item in items">
		<view>{{ item.message }}</view>
		<view class="divider" role="presentation"></view>
	</template>
```



### key

当 Vue 正在更新使用 `v-for` 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。
When using Vue being updated `v-for`when the list elements rendered, it defaults to "place update" strategy. If the order of the data items is changed, Vue will not move the DOM elements to match the order of the data items, but instead update each element in place and ensure that they are rendered correctly at each index position.

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 `input` 中的输入内容，`switch` 的选中状态），需要使用 `:key` 来指定列表中项目的唯一的标识符。
If the position of items in the list will dynamically change or new items added to the list, and you want the list of projects to maintain its own identity and status (such as `input`input content, `switch`the selected state), you need `:key`to specify a list of items The unique identifier.

`:key` 的值以两种形式提供
`:key` The value of is provided in two forms

- 使用 `v-for` 循环 `array` 中 `item` 的某个 `property`，该 `property` 的值需要是列表中唯一的字符串或数字，且不能动态改变。
- Use `v-for`cycles `array`in `item`a a `property`, the `property`value needs to be unique list number or string, and can not be changed dynamically.
- 使用 `v-for` 循环中 `item` 本身，这时需要 `item` 本身是一个唯一的字符串或者数字
- Use `v-for`cycle `item`itself, then the need `item`itself is a unique character string or a number

当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。
When the data change triggers the rendering layer to re-render, the components with keys will be corrected, and the framework will ensure that they are reordered, not recreated, to ensure that the components maintain their own state and improve the efficiency of the list rendering.

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
### Precautions

- 在H5平台 使用 v-for 循环整数时和其他平台存在差异，如 `v-for="(item, index) in 10"` 中，在H5平台 item 从 1 开始，其他平台 item 从 0 开始，可使用第二个参数 index 来保持一致。
- Differences and other platforms when the platforms H5 integer v-for loop, as `v-for="(item, index) in 10"`in, item 1 from the start, other platforms item from zero, the second parameter may be used in index H5 platform consistent.
- 在非H5平台 循环对象时不支持第三个参数，如 `v-for="(value, name, index) in object"` 中，index 参数是不支持的。
- The third parameter is not supported in the non-cyclic object H5 platform, such as `v-for="(value, name, index) in object"`in, index parameter is not supported.
- 小程序端数据为差量更新方式，由于小程序不支持删除对象属性，使用的设置值为 null 的方式替代，导致遍历时可能出现不符合预期的情况，需要自行过滤一下值为 null 的数据（[相关反馈](https://ask.dcloud.net.cn/question/103269)）。
- The data on the applet side is updated in a differential way. Since the applet does not support deleting object properties, the method of setting the value of null is used instead, which may cause unexpected situations during traversal. You need to filter the data with the value of null yourself. ([Related Feedback](https://ask.dcloud.net.cn/question/103269)).


### 在组件上使用 v-for
### Use v-for on components

在自定义组件上，你可以像在任何普通元素上一样使用 `v-for` 。
On the custom component, you can use it like any ordinary element `v-for`.

```html
	<my-component v-for="item in items" :key="item.id"></my-component>
```

**当在组件上使用 v-for 时，key是必须的。**
**When using v-for on the component, the key is required.**


## 事件处理器@eventhandler
## Event handler


[观看本节视频讲解](https://learning.dcloud.io/#/?vid=10)
[Watch a free video course](https://learning.dcloud.io/#/?vid=10)

### 监听事件
### Listen for events

可以用@事件监听 DOM 事件，并在触发时运行一些 `JavaScript` 代码。
You can listen to DOM events with v-on instruction, when triggered and run some `JavaScript`code.

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
### Event handling method

然而许多事件处理逻辑会更为复杂，所以直接把 `JavaScript` 代码写在@事件中是不可行的。因此@事件还可以接收一个需要调用的方法名称。
However, many event processing logic is more complex, so directly to the `JavaScript`code is written in the `v-on`instructions is not feasible. So `v-on`you can also receive the name of a method needs to be called.

示例：
Example:

```html
	<template>
		<view>
			<!-- `greet` 是在下面定义的方法名 -->
			<!-- 'greet' is the method name defined below -->
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
			// Define the methods in the 'methods' object
			methods: {
				greet(event){
					// `event` 是原生 DOM 事件
					// 'event' is a native DOM event
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
					// ***
					if (event) {
						//可访问 event.target等原生事件对象
						//***
					}
					uni.showToast({
						title: message
					});
				}
			}
		}
	</script>
```





### 事件修饰符
### Event modifier

修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 @事件对于触发的事件调用 `event.preventDefault()`：
The modifier is a special suffix specified by a period. It is used to indicate that an instruction should be bound in a special way. For example, `.prevent`modifier tells `v-on`instructions for event-triggered call `event.preventDefault()`:

@事件（v-on）提供了事件修饰符:
v-on provides event modifiers:

- `.stop`: 各平台均支持， 使用时会阻止事件冒泡，在非 H5 端同时也会阻止事件的默认行为
- `.stop`: Supported by all platforms, it will prevent the event from bubbling when used, and also prevent the default behavior of the event on the non-H5 side
- `.native`: 监听原生事件，各平台均支持
- `.native`: Monitor native events, only supported on H5 platform
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
> When using modifiers, the order is important; the corresponding codes will be generated in the same order. Therefore, with the `v-on:click.prevent.self`blocks all clicks, and `v-on:click.self.prevent`will only prevent clicks on the element itself.


**注意**
**note**

- 为兼容各端，事件需使用 **@** 的方式绑定，请勿使用小程序端的 `bind` 和 `catch` 进行事件绑定；也不能在 JS 中使用`event.preventDefault()`和`event.stopPropagation()`方法；
- To be compatible with all terminals, events need to be bound by **@**, please do not use `bind` and `catch` on the applet side for event binding; also cannot use `event.preventDefault()` in JS and `event.stopPropagation()` method;
- 若需要禁止蒙版下的页面滚动，可使用 `@touchmove.stop.prevent="moveHandle"`，`moveHandle` 可以用来处理 `touchmove` 的事件，也可以是一个空函数。
- If you need to scroll down the page prohibiting mask, use `@touchmove.stop.prevent="moveHandle"`, `moveHandle`processing can be used to `touchmove`events, but also can be an empty function.

```html
<view class="mask" @touchmove.stop.prevent="moveHandle"></view>
```

- 按键修饰符：`uni-app` 运行在手机端，没有键盘事件，所以不支持按键修饰符。
- Key modifier: `uni-app` Run on the mobile phone, with no keyboard event. So the key modifier is not supported.




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


## 表单控件绑定
## Form control binding

[观看本节视频讲解](https://learning.dcloud.io/#/?vid=11)
[Watch a free video course](https://learning.dcloud.io/#/?vid=11)


### v-model

你可以用 v-model 指令在表单 `input`、`textarea` 及 `select` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
You can form a v-model command `input`, `textarea`and `select`create a two-way data binding on the element. It will automatically select the correct method to update the element based on the control type. While some magic, but `v-model`in essence merely syntactic sugar. It is responsible for monitoring the user's input events to update the data, and perform some special processing on some extreme scenarios.

> v-model 会忽略所有表单元素的 `value`、`checked`、`selected` attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。
> v-model ignores all form elements `value`, `checked`, `selected`the initial value of the attribute data while always Vue instance as a data source. You should declare the initial value in the data option of the component via JavaScript.


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
### computed property

每一个计算属性都包含一个 `getter` 和一个 `setter` ，默认是利用 `getter` 来读取。所有 `getter` 和 `setter` 的 `this` 上下文自动地绑定为 Vue 实例。
Each contains a calculated attribute `getter`and a `setter`default is to use `getter`to read. All `getter`and `setter`the `this`context is automatically bound instance Vue.


#### 计算属性的 getter 
#### Getter of computed property


在模板中绑定表达式是非常便利的，但是它们实际上只用于简单的操作。在模板中放入太多的逻辑会让模板过重且难以维护。例如：
Binding expressions in templates is very convenient, but they are actually only used for simple operations. Putting too much logic in the template makes the template too heavy and difficult to maintain. E.g:


```html
	<view>
		{{ message.split('').reverse().join('') }}
	</view>
```

这里是想要显示变量 `message` 的翻转字符串。当你想要在模板中多包含此处的翻转字符串时，就会更加难以处理。
Here are the variables you want to display `message`flip string. When you want to include more inverted strings here in the template, it will be more difficult to handle.

所以，对于任何复杂逻辑，你都应当使用**计算属性**。
Therefore, for any complex logic, you should use **computed property** .



```html
	<template>
		<view>
			<view>Original message: "{{ message }}"</view>
			<view>Computed reversed message: "{{ reversedMessage }}"</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					message: 'Hello'
				}
			},
			computed: {
				// 计算属性的 getter
				// getter
				reversedMessage(){
				  return this.message.split('').reverse().join('')
				}
			}
		}
	</script>
```

结果：
result:

```html
	Original message: "Hello"
	Computed reversed message: "olleH"
```


你可以像绑定普通 `property` 一样在模板中绑定计算属性。
You can bind as ordinary `property`as calculated binding properties in the template.

Vue 知道 `reversedMessage` 依赖于 `message`，因此当 `message` 发生改变时，所有依赖 `reversedMessage` 的绑定也会更新。而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 `getter` 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。
Vue know `reversedMessage`rely on `message`, so when `message`change occurs, all dependent `reversedMessage`binding will be updated. And best of all is that we have to declaratively create this dependency: the calculation of property `getter`functions are no side effects (side effect), making it easier to test and understand.

计算属性还可以依赖多个 Vue 实例的数据，只要其中任一数据变化，计算属性就会重新执行，视图也会更新。
Calculated properties can also depend on the data of multiple Vue instances. As long as any of the data changes, the calculated properties will be re-executed and the view will be updated.



#### 计算属性的 setter
#### Setter of calculated property

在你需要时也可以提供一个 `setter` 函数， 当手动修改计算属性的值时，就会触发 `setter` 函数，执行一些自定义的操作。
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
We can achieve the same effect by calling methods in expressions:

```html
	<template>
		<view>
			<view>Reversed message: "{{ reversedMessage() }}"</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					message: 'Hello'
				}
			},
			methods: {
				reversedMessage(){
					return this.message.split('').reverse().join('')
				}
			}
		}
	</script>
```

可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是**计算属性是基于它们的响应式依赖进行缓存的**。
You can define the same function as a method instead of a calculated attribute. The final result of the two methods is indeed exactly the same. However, the difference is that **calculated attributes are cached based on their responsive dependencies** .

只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 `message` 还没有发生改变，多次访问 `reversedMessage` 计算属性会立即返回之前的计算结果，而不必再次执行函数。
They will be re-evaluated only when the related reactive dependencies change. This means that as long as `message`no change, many visits to `reversedMessage`the calculation results before the property will return immediately to calculate, without having to perform functions again.

这也同样意味着下面的计算属性将不再更新，因为 Date.now() 不是响应式依赖：
This also means that the following calculated properties will no longer be updated, because Date.now() is not a reactive dependency:

```js
	computed: {
		now(){
			return Date.now()
		}
	}
```


相比之下，每当触发重新渲染时，**调用方法将总会再次执行函数**。
In contrast, whenever a re-render is triggered, the **calling method will always execute the function again** .

我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 A。如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代。
Why do we need caching? Suppose we have a computational property A with a relatively large performance overhead, and it needs to traverse a huge array and do a lot of calculations. Then we may have other calculated properties that depend on A. If there is no cache, we will inevitably execute A's getter multiple times! If you do not want to have a cache, please use methods instead.



### 计算属性 vs 侦听属性
### Computed attributes vs. listening attributes


Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：**侦听属性**。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 `watch` 。然而，通常更好的做法是使用计算属性而不是命令式的 `watch` 回调。
Vue provides a more general way to observe and respond to data changes on Vue instances: **listening to properties** . When you have some data that needs to change with other data changes, you can easily abuse it `watch`. Often, however, a better practice is to use the calculation attribute rather than a command-style `watch`callback.

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
The above code is imperative and repetitive. Compare it with the version of the calculated attribute:

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


### 侦听器watch
### Listener watch

- 类型：{ [key: string]: string | Function | Object | Array }
- Type：{ [key: string]: string | Function | Object | Array }


- 一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 `$watch()` ，遍历 `watch` 对象的每一个 `property` 。
- For an object, the key is the expression to be observed, and the value is the corresponding callback function. The value can also be a method name, or an object containing options. Vue instance will be called upon instantiation `$watch()`, traversing `watch`each object `property`.



- 示例：
- Example:

```html
<template>
	<view>
		<input type="text" v-model="word">
	</view>
</template>
<script>
	export default {
		data() {
			return {
				word: 'word'
			}
		},
		watch: {
			// 使用watch来响应数据的变化
			// Watch is used to respond to changes in data
			word(newVal, oldVal) {
				console.log('最新值是：'+newVal,"原来的值是："+ oldVal);
			}
		},
	}
</script>
```


示例：
Example:

```html
<script>
	export default {
		data() {
			return {
				a: 1,
				b: 2,
				c: 3,
				d: 4,
				e: {
					f: {
						g: 5
					}
				}
			}
		},
		watch: {
			a: function(val, oldVal) {
				console.log('new: %s, old: %s', val, oldVal)
			},
			// 方法名
			// the method name
			b: 'someMethod',
			// 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
			// This callback is called whenever the property of any object being listened on changes, regardless of how deeply nested it is
			c: {
				handler: function(val, oldVal) { /* ... */ },
				deep: true
			},
			// 该回调将会在侦听开始之后被立即调用
			// This callback will be invoked immediately after the listening begins
			d: {
				handler: 'someMethod',
				immediate: true
			},
			// 你可以传入回调数组，它们会被逐一调用
			// You can pass in an array of callbacks, and they'll be called one by one
			e: [
				'handle1',
				function handle2(val, oldVal) { /* ... */ },
				{
					handler: function handle3(val, oldVal) { /* ... */ },
					/* ... */
				}
			],
			// watch vm.e.f's value: {g: 5}
			'e.f': function(val, oldVal) { /* ... */ }
		}
	}
</script>
```






