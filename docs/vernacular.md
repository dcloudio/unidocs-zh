## 白话uni-app
## vernacular uni-app

本文适合对象：
This article is suitable for:
1. 已经通过[uni-app官网](https://uniapp.dcloud.io)对产品概念有基本了解。
1. Have a basic understanding of the product concept through [uni-app official website](https://uniapp.dcloud.io).
2. 熟悉h5，但对小程序、vue不了解
2. Familiar with h5, but not familiar with MiniApp and vue

传统的h5只有1端，即浏览器。而uni-app可跨多端，虽仍属前端，与传统h5有不同。
The traditional h5 has only one end, the browser. The uni-app can span multiple terminals, although it is still a front-end, which is different from the traditional h5.
如果你对h5比较了解，可通过本文快速了解uni-app。
If you are familiar with h5, you can quickly learn about uni-app through this article.


### 网络模型的变化
### Network model changes
以前网页大多是b/s，服务端代码混合在页面里；
In the past, most of the web pages were b/s, and the server-side code was mixed in the page;

现在是c/s，前后端分离，通过js api(类似ajax的uni.request)获取json数据，把数据绑定在界面上渲染。
Now it is c/s, the front and back ends are separated, json data is obtained through js api (similar to uni.request of ajax), and the data is bound to the interface for rendering.

### 文件类型变化
### File type change
以前是.html文件，开发也是html，运行也是html。
It used to be a .html file, the development was also html, and the operation was also html.
现在是.vue文件，开发是vue，经过编译后，运行时已经变成了js文件。
Now it is a .vue file, and the development is vue. After compilation, the runtime has become a js file.
现代前端开发，很少直接使用HTML，基本都是开发、编译、运行。所以uni-app有编译器、运行时的概念。
Modern front-end development rarely uses HTML directly, but basically develops, compiles, and runs. So uni-app has the concept of compiler and runtime.

### 文件内代码架构的变化
### Changes in the code structure in the file
以前一个html大节点，里面有script和style节点；
In the past, there was a large html node with script and style nodes in it;

现在template是一级节点，用于写tag组件，script和style是并列的一级节点，也就是有3个一级节点。
Now template is a first-level node, used to write tag components, script and style are parallel first-level nodes, that is, there are 3 first-level nodes.

以前
before
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
现在。这个叫[vue单文件组件规范sfc](https://cn.vuejs.org/v2/guide/single-file-components.html)
Now. This is called [vue single-file component specification sfc](https://cn.vuejs.org/v2/guide/single-file-components.html)
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
### External file reference method changes
以前通过script src、link href引入外部的js和css；
Previously introduced external js and css through script src and link href;

现在是es6的写法，import引入外部的js模块(注意不是文件)或css
Now it is written in es6, import introduces external js modules (not files) or css

以前
before
```html
<script src="js/jquery-1.10.2.js" type="text/javascript"></script>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
```
现在
Now
#### js要require进来，变成了对象。
#### js needs to be required and becomes an object.
在hello uni-app的common目录有一个工具类`util.js`，可以在hello uni-app中搜索这个例子查看。
There is a tool class `util.js` in the common directory of hello uni-app, you can search for this example in hello uni-app to view.
```html
<script>
var util = require('../../../common/util.js');  //require这个js模块
var formatedPlayTime = util.formatTime(playTime); //调用js模块的方法
</script>
```
而在这个`util.js`里，要把之前的function封装为对象的方法
In this `util.js`, the previous function should be encapsulated as an object method
```js
function formatTime(time) {
	return time;//这里没写逻辑
}

module.exports = {
	formatTime: formatTime
}
```

当然还有一些高级的用法
Of course there are some advanced usages
```
var dateUtils = require('../../../common/util.js').dateUtils; //直接使用js模块的属性。在hello uni-app有示例
import * as echarts from '/components/echarts/echarts.simple.min.js'; //将js导入并重命名为echarts，然后使用echarts.来继续执行方法。在hello uni-app有示例
```

#### css外部文件导入
#### css external file import
```html
<style>
	@import "./common/uni.css";
	
	.uni-hello-text{
		color:#7A7E83;
	}
</style>
```
全局样式，在根目录下的app.vue里写入，每个页面都会加载app.vue里的样式。
The global style is written in app.vue in the root directory, and each page will load the style in app.vue.

#### 另外，vue支持组件导入，可以更方便的封装一个包括界面、js、样式的库。
#### In addition, vue supports component import, which can more easily encapsulate a library including interface, js, and styles.
如下是导入一个角标的组件库，在页面上显示一个abc并且右上角有个数字角标1，[详见](http://ext.dcloud.net.cn/plugin?id=21)
The following is a component library that imports an angle label, which displays an abc on the page and has a digital angle label 1 in the upper right corner, [see details](http://ext.dcloud.net.cn/plugin?id=21)
```html
<template>
	<view>
		<uni-badge text="abc" :inverted="true"></uni-badge><!--3.使用组件-->
	</view>
</template>
<script>
	import uniBadge from "../../../components/uni-badge.vue";//1.导入组件（这步属于传统vue规范，但在uni-app的easycom下可以省略这步）
	export default {
		data() {
			return {
				
			}
		},
		components: {
			uniBadge //2.注册组件（这步属于传统vue规范，但在uni-app的easycom下可以省略这步）
		}
	}
</script>
```
如需要全局导入vue组件，即每个页面都可以直接使用而不用引用和注册的话，在项目根目录下的main.js里处理。如下是hello uni-app里的例子。
If you need to import vue components globally, that is, each page can be used directly without reference and registration, it is processed in main.js in the project root directory. The following is an example in hello uni-app.
```
//main.js
import pageHead from './components/page-head.vue' //导入
Vue.component('page-head', pageHead) //注册。注册后在每个vue的page页面里可以直接使用<page-head></page-head>组件。
```
上述的组件使用方式属于传统vue的概念。uni-app 2.7以后推出了更简单的组件使用技术[easycom](https://uniapp.dcloud.net.cn/collocation/pages?id=easycom)，无需引用和注册组件，直接在template区域使用组件即可。
The above-mentioned component usage methods belong to the concept of traditional vue. After uni-app 2.7, a simpler technology for using components was introduced [easycom](https://uniapp.dcloud.net.cn/collocation/pages?id=easycom), no need to reference and register components, and use components directly in the template area That's it.

### 组件/标签的变化
### Component/label changes
以前是html标签，比如`<div>`，现在是小程序组件，比如`<view>`。
Formerly html tags, such as `<div>`, are now MiniApp components, such as `<view>`.
那么`标签`和`组件`有什么区别，不都是用尖括号包围起来一段英文吗？
So what's the difference between `label` and `component`, aren't they all surrounded by angle brackets?
其实标签是老的概念，标签属于浏览器内置的东西。但组件，是可以自由扩展的。
In fact, the label is an old concept, and the label belongs to the built-in thing of the browser. Components, however, can be freely extended.
类似你可以把一段js封装成函数或模块，你也可以把一个ui控件封装成一个组件。
Similar to you can encapsulate a piece of js into a function or module, you can also encapsulate a ui control into a component.

`uni-app`参考小程序规范，提供了一批内置组件。
`uni-app` refers to the MiniApp specification and provides a set of built-in components.

下为html标签和uni-app内置组件的映射表：
The following is the mapping table of html tags and uni-app built-in components:
- div 改成 [view](https://uniapp.dcloud.io/component/view)
- div changed to [view](https://uniapp.dcloud.io/component/view)
- span、font 改成 [text](https://uniapp.dcloud.io/component/text)
- Change span and font to [text](https://uniapp.dcloud.io/component/text)
- a 改成 [navigator](https://uniapp.dcloud.io/component/navigator)
- a changed to [navigator](https://uniapp.dcloud.io/component/navigator)
- img 改成 [image](https://uniapp.dcloud.io/component/image)
- change img to [image](https://uniapp.dcloud.io/component/image)
- [input](https://uniapp.dcloud.io/component/input) 仅仅是输入框。 原html规范中input不仅是输入框，还有radio、checkbox、时间、日期、文件选择功能。在uni-app和小程序规范中，input仅仅是输入框。其他功能uni-app有单独的组件或API：[radio组件](https://uniapp.dcloud.io/component/radio)、[checkbox组件](https://uniapp.dcloud.io/component/checkbox)、[时间选择](https://uniapp.dcloud.io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5%99%a8)、[日期选择](https://uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9%e5%99%a8)、[图片选择](https://uniapp.dcloud.io/api/media/image?id=chooseimage)、[视频选择](https://uniapp.dcloud.io/api/media/video?id=choosevideo)、[多媒体文件选择(含图片视频)](https://uniapp.dcloud.io/api/media/video?id=choosemedia)、[通用文件选择](https://uniapp.dcloud.io/api/media/file?id=choosefile)。
- [input](https://uniapp.dcloud.io/component/input) is just an input box. In the original html specification, input is not only an input box, but also radio, checkbox, time, date, and file selection functions. In the uni-app and MiniApp specifications, input is just an input box. Other features uni-app has separate components or APIs: [radio component]( <a
href="https://uniapp.dcloud.io/component/radio)、[checkbox组件](https://uniapp.dcloud.io/component/checkbox)、[时间选择](https://uniapp.dcloud.io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5%99%a8)、[日期选择](https://uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9%e5%99%a8)、[图片选择](https://uniapp.dcloud.io/api/media/image?id=chooseimage)、[视频选择](https://uniapp.dcloud.io/api/media/video?id=choosevideo)、[多媒体文件选择(含图片视频)](https://uniapp.dcloud.io/api/media/video?id=choosemedia)、[通用文件选择](https://uniapp.dcloud.io/api/media/file?id=choosefile)。">https://uniapp.dcloud.io/component/radio), [checkbox component](https://uniapp.dcloud.io/component/checkbox ), [time selection](https://uniapp.dcloud.io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5% 99%a8), [date picker](https://uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9 %e5%99%a8), [image selection](https://uniapp.dcloud.io/api/media/image?id=chooseimage), [video selection](https://uniapp.dcloud.io/api /media/video?id=choosevideo), [Multimedia file selection (including pictures and videos)](https://uniapp.dcloud.io/api/media/video?id=choosemedia), [General file selection](https: //uniapp.dcloud.io/api/media/file?id=choosefile).</a>
href="https://uniapp.dcloud.io/component/radio), [checkbox component](https://uniapp.dcloud.io/component/checkbox), [time selection](https://uniapp.dcloud .io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5%99%a8), [date picker](https:// uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9%e5%99%a8), [image selection](https ://uniapp.dcloud.io/api/media/image?id=chooseimage), [video selection](https://uniapp.dcloud.io/api/media/video?id=choosevideo), [multimedia file selection (including pictures and videos)](https://uniapp.dcloud.io/api/media/video?id=choosemedia), [Universal file selection](https://uniapp.dcloud.io/api/media/file? id=choosefile).">https://uniapp.dcloud.io/component/radio), [checkbox component](https://uniapp.dcloud.io/component/checkbox ), [time selection](https:/ /uniapp.dcloud.io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5% 99%a8), [date picker]( https://uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9 %e5%99%a8), [image selection](https://uniapp.dcloud.io/api/media/image?id=chooseimage), [video selection](http s://uniapp.dcloud.io/api /media/video?id=choosevideo), [Multimedia file selection (including pictures and videos)](https://uniapp.dcloud.io/api/media/video?id =choosemedia), [General file selection](https://uniapp.dcloud.io/api/media/file?id=choosefile).</a>
- [form](https://uniapp.dcloud.io/component/form)、[button](https://uniapp.dcloud.io/component/button)、[label](https://uniapp.dcloud.io/component/label)、[textarea](https://uniapp.dcloud.io/component/textarea)、[canvas](https://uniapp.dcloud.io/component/canvas)、[video](https://uniapp.dcloud.io/component/video) 这些还在。
- [form](https://uniapp.dcloud.io/component/form), [button](https://uniapp.dcloud.io/component/button), [label](https://uniapp.dcloud .io/component/label), [textarea](https://uniapp.dcloud.io/component/textarea), [canvas](https://uniapp.dcloud.io/component/canvas), [video]( https://uniapp.dcloud.io/component/video) These are still there.
- select 改成 [picker](https://uniapp.dcloud.io/component/picker)
- select changed to [picker](https://uniapp.dcloud.io/component/picker)
- iframe 改成 [web-view](https://uniapp.dcloud.io/component/web-view)
- iframe changed to [web-view](https://uniapp.dcloud.io/component/web-view)
- ul、li没有了，都用view替代。做列表一般使用[uList组件](https://ext.dcloud.net.cn/plugin?id=24)
- ul and li are gone, they are replaced by view. To make a list, generally use [uList component](https://ext.dcloud.net.cn/plugin?id=24)
- audio 不再推荐使用，改成api方式，[背景音频api文档](https://uniapp.dcloud.io/api/media/background-audio-manager?id=getbackgroundaudiomanager)
- audio is no longer recommended, changed to api, [background audio api documentation](https://uniapp.dcloud.io/api/media/background-audio-manager?id=getbackgroundaudiomanager)
其实老的HTML标签也可以在uni-app里使用，uni-app编译器会在编译时把老标签转为新标签，比如把div编译成view。但不推荐这种用法，调试H5端时容易混乱。
In fact, old HTML tags can also be used in uni-app. The uni-app compiler will convert old tags into new tags during compilation, such as compiling div into view. But this usage is not recommended, it is easy to get confused when debugging the H5 side.

**除了改动外，新增了一批手机端常用的新组件**
**In addition to the changes, a number of new components commonly used on mobile phones have been added**
- scroll-view 	[可区域滚动视图容器](https://uniapp.dcloud.io/component/scroll-view)
- scroll-view [Regionable scroll view container](https://uniapp.dcloud.io/component/scroll-view)
- swiper	[可滑动区域视图容器](https://uniapp.dcloud.io/component/swiper)
- swiper [swipeable area view container](https://uniapp.dcloud.io/component/swiper)
- icon 	[图标](https://uniapp.dcloud.io/component/icon)
- icon [icon](https://uniapp.dcloud.io/component/icon)
- rich-text 	[富文本（不可执行js，但可渲染各种文字格式和图片）](https://uniapp.dcloud.io/component/rich-text)
- rich-text [rich text (not executable js, but can render various text formats and images)](https://uniapp.dcloud.io/component/rich-text)
- progress 	[进度条](https://uniapp.dcloud.io/component/progress)
- progress [progress bar](https://uniapp.dcloud.io/component/progress)
- slider 	[滑块指示器](https://uniapp.dcloud.io/component/slider)
- slider [slider indicator](https://uniapp.dcloud.io/component/slider)
- switch 	[开关选择器](https://uniapp.dcloud.io/component/switch)
- switch [switch selector](https://uniapp.dcloud.io/component/switch)
- camera 	[相机](https://uniapp.dcloud.io/component/camera)
- camera [camera](https://uniapp.dcloud.io/component/camera)
- live-player 	[直播](https://uniapp.dcloud.io/component/live-player)
- live-player [live](https://uniapp.dcloud.io/component/live-player)
- map 	[地图](https://uniapp.dcloud.io/component/map)
- map [map](https://uniapp.dcloud.io/component/map)
- cover-view	[可覆盖原生组件的视图容器](https://uniapp.dcloud.io/component/cover-view?id=cover-view)
- cover-view [a view container that covers native components](https://uniapp.dcloud.io/component/cover-view?id=cover-view)
	
	cover-view需要多强调几句，uni-app的非h5端的video、map、canvas、textarea是原生组件，层级高于其他组件。如需覆盖原生组件，则需要使用cover-view组件。详见[层级介绍](https://uniapp.dcloud.net.cn/component/native-component)
	Cover-view needs to be emphasized a few more words. The video, map, canvas, and textarea of the non-h5 end of uni-app are native components, and the level is higher than other components. To cover native components, you need to use the cover-view component. For details, see [Level Introduction](https://uniapp.dcloud.net.cn/component/native-component)

除了内置组件，还有很多开源的扩展组件，把常用操作都进行封装，DCloud建立了插件市场收录这些扩展组件，详见[插件市场](https://ext.dcloud.net.cn/)
In addition to built-in components, there are many open source extension components that encapsulate common operations. DCloud has established a plug-in market to include these extension components. For details, see [plug-in market](https://ext.dcloud.net.cn/)


### js的变化
### js changes
js的变化，分为运行环境变化、数据绑定模式变化、api变化3部分。
js changes are divided into three parts: operating environment changes, data binding mode changes, and api changes.

- **运行环境从浏览器变成v8引擎**
- **Running environment changed from browser to v8 engine**

标准js语法和api都支持，比如if、for、settimeout、indexOf等。
Standard js syntax and api are supported, such as if, for, settimeout, indexOf, etc.

但浏览器专用的window、document、navigator、location对象，包括cookie等存储，只有在浏览器中才有，app和小程序都不支持。
However, browser-specific window, document, navigator, and location objects, including cookie storage, are only available in browsers, and are not supported by apps and MiniApp.

可能有些人以为js等于浏览器里的js。其实js是ECMAScript组织管理的，浏览器中的js是w3c组织基于js规范补充了window、document、navigator、location等专用对象。
Some people may think that js is equivalent to js in the browser. In fact, js is managed by the ECMAScript organization, and the js in the browser is the w3c organization supplemented with special objects such as window, document, navigator, and location based on the js specification.

在uni-app的各个端中，除了h5端，其他端的js都运行在一个独立的v8引擎下，不是在浏览器中，所以浏览器的对象无法使用。如果你做过小程序开发，对此应当很了解。
In each end of uni-app, except for the h5 end, the js of the other end runs under an independent v8 engine, not in the browser, so the objects of the browser cannot be used. If you have done MiniApp development, you should know this very well.

这意味着依赖document的很多HTML的库，比如jquery无法使用。
This means that many HTML libraries that rely on document, such as jquery, cannot be used.

当然app和小程序支持web-view组件，里面可以加载标准HTML，这种页面仍然支持浏览器专用对象window、document、navigator、location。
Of course, apps and MiniApp support web-view components, which can load standard HTML. This kind of page still supports browser-specific objects window, document, navigator, and location.

- **以前的dom操作，改成vue的MVVM模式**
- **The previous dom operation is changed to the MVVM mode of vue**

现在前端趋势是去dom化，改用mvvm模式，更简洁的写法，大幅减少代码行数，同时差量渲染性能更好。
Now the front-end trend is to de-domize, switch to mvvm mode, write more concisely, greatly reduce the number of lines of code, and at the same time have better differential rendering performance.

uni-app使用vue的数据绑定方式解决js和dom界面交互的问题。
uni-app uses vue's data binding method to solve the problem of interaction between js and dom interface.

如果你想改变某个dom元素的显示内容，比如一个view的显示文字：
If you want to change the display content of a dom element, such as the display text of a view:

以前是给view设id，然后js里通过选择器获取dom元素，进一步通过js进行赋值操作，修改dom元素的属性或值。
In the past, the id was set for the view, and then the dom element was obtained through the selector in js, and the assignment operation was further performed through js to modify the attribute or value of the dom element.

如下演示了一段代码，页面中有个显示的文字区和一个按钮，点击按钮后会修改文字区的值
The following demonstrates a piece of code. There is a displayed text area and a button on the page. After clicking the button, the value of the text area will be modified.
	
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
	
现在的做法，是vue的绑定模式，给这个dom元素绑定一个js变量，在script中修改js变量的值，dom会自动变化，页面会自动更新渲染
The current practice is the binding mode of vue, bind a js variable to the dom element, modify the value of the js variable in the script, the dom will automatically change, and the page will automatically update and render
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

注意上述代码中的 `export default {}` 里的 `data(): {return { }}`。
Note the `data(): {return { }}` in `export default {}` in the above code.
在vue的设计中，这里存放着页面中需要绑定的数据，写在data里，才能被界面正确的绑定和渲染。
In the design of Vue, the data that needs to be bound in the page is stored here, and it can be correctly bound and rendered by the interface when it is written in the data.
注意：uni-app的vue页面是vue的单文件组件规范，按照vue的定义只接受 function，必须用 return 包起来。
Note: The vue page of uni-app is the single-file component specification of vue. According to the definition of vue, only functions are accepted and must be wrapped with return.

如果你学过小程序的数据绑定，但不了解vue，要注意：
If you have learned the data binding of MiniApp, but don't know vue, pay attention to:
- 小程序的数据绑定参考了vue，但自己修改了一些。在uni-app中只支持标准的vue，不支持小程序的数据绑定语法
- The data binding of the MiniApp refers to Vue, but I modified it myself. Only standard vue is supported in uni-app, data binding syntax of MiniApp is not supported
- 小程序里的setData在uni-app里并不存在，因为vue是自动双向数据绑定的。直接通过赋值方式修改数据，如果数据绑定到界面上，界面会自动更新渲染
-setData in MiniApp does not exist in uni-app, because vue is automatically two-way data binding. Modify the data directly by assignment, if the data is bound to the interface, the interface will automatically update the rendering


从上述示例，还可看出事件的写法变化。
From the above example, it can also be seen that the writing of events has changed.
- 以前，元素的事件是用onxxx=""，里面写一段js或引用function的name，比如上述代码中的`onclick="changetextvalue()"`
- In the past, the event of the element was onxxx="", and a js or the name of the reference function was written in it, such as `onclick="changetextvalue()"` in the above code
- 现在，需要在js的`export default {}` 里的 `methods: {}` 里写一个方法，然后在组件中使用`@click="changetextvalue()"`
- Now, you need to write a method in `methods: {}` in `export default {}` of js, and then use `@click="changetextvalue()"` in the component

在js中，与data和methods平级的，如上述示例代码中的`onload()`，称为生命周期。在普通vue页面里的生命周期叫页面生命周期。在项目根目录的app.vue文件中的生命周期叫应用生命周期。
In js, the level with data and methods, such as `onload()` in the above sample code, is called the life cycle. The life cycle in a normal vue page is called the page life cycle. The life cycle in the app.vue file in the project root directory is called the application life cycle.
除了`onload`，还有`onready`等很多生命周期，具体见[uni-app的生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle)
In addition to `onload`, there are many life cycles such as `onready`, see [uni-app life cycle](https://uniapp.dcloud.io/collocation/frame/lifecycle)

在高级用法里，vue支持给组件设ref（引用标记），这类似于之前html中给一个dom元素设id，然后在js中也可以用`this.$refs.xxx`来获取。如下：
In advanced usage, vue supports setting ref (reference mark) to components, which is similar to setting an id to a dom element in html, and then `this.$refs.xxx` can also be used to get it in js. as follows:
```html
<template>
  <view>
    <view ref="testview">11111</view>
    <button @click="getTest">获取test节点</button>
  </view>
</template>

<script>
export default {
  methods: {
    getTest() {
      console.log(this.$refs.testview)
    }
  }
};
</script>
```

- **js api的变化**
- **js api changes**

因为uni-app的api是参考小程序的，所以和浏览器的js api有很多不同，如
Because the api of uni-app refers to the MiniApp, it is very different from the js api of the browser, such as
1. alert,confirm 改成 [uni.showmodel](https://uniapp.dcloud.io/api/ui/prompt?id=showmodal)
1. Change alert, confirm to [uni.showmodel](https://uniapp.dcloud.io/api/ui/prompt?id=showmodal)
2. ajax 改成 [uni.request](https://uniapp.dcloud.io/api/request/request)
2. Change ajax to [uni.request](https://uniapp.dcloud.io/api/request/request)
3. cookie、session 没有了，local.storage 改成 [uni.storage](https://uniapp.dcloud.io/api/storage/storage?id=setstorage)
3. There are no cookies and sessions, and local.storage is changed to [uni.storage](https://uniapp.dcloud.io/api/storage/storage?id=setstorage)

uni-app的js api还有很多，但基本就是小程序的api，把wx.xxx改为uni.xxx即可。[详见](https://uniapp.dcloud.io/api/README)
There are many js apis of uni-app, but they are basically the apis of MiniApp. Just change wx.xxx to uni.xxx. [See details](https://uniapp.dcloud.io/api/README)

uni-app在不同的端，支持条件编译，无限制的使用各端独有的api，[详见条件编译](https://uniapp.dcloud.io/platform)
uni-app supports conditional compilation on different sides, and can use the unique api of each side without restriction, [see conditional compilation for details](https://uniapp.dcloud.io/platform)


### css的变化
### css changes
标准的css基本都是支持的。
Standard CSS is basically supported.

选择器有2个变化：*选择器不支持；元素选择器里没有body，改为了page。微信小程序即是如此。
The selector has 2 changes: * The selector is not supported; there is no body in the element selector, and it is changed to page. This is the case with WeChat MiniApp.
```css
page{
	
}
```

单位方面，px无法动态适应不同宽度的屏幕，rem无法用于nvue/weex。如果想使用根据屏幕宽度自适应的单位，推荐使用rpx，全端支持。 [尺寸单位文档](https://uniapp.dcloud.io/frame?id=%e5%b0%ba%e5%af%b8%e5%8d%95%e4%bd%8d)
In terms of units, px cannot dynamically adapt to screens of different widths, and rem cannot be used for nvue/weex. If you want to use a unit that adapts to the screen width, it is recommended to use rpx, which is fully supported. [Dimension Units Documentation](https://uniapp.dcloud.io/frame?id=%e5%b0%ba%e5%af%b8%e5%8d%95%e4%bd%8d)

uni-app推荐使用flex布局，这个布局思路和传统流式布局有点区别。但flex的特色在于，不管是什么技术都支持这种排版，web、小程序/快应用、weex/rn、原生的iOS、Android开发，全都支持flex。它是通吃所有端的新一代布局方案。相关教程请自行百度学习。
uni-app recommends using flex layout, which is a bit different from traditional flow layout. But the feature of flex is that no matter what technology supports this type of layout, web, MiniApp/ QuickApp, weex/rn, native iOS, and Android development all support flex. It is a new generation layout scheme that takes all ends. For related tutorials, please learn from Baidu.

uni-app的vue文件里支持所有web排版方式，不管是流式还是flex。但nvue里，只支持flex，因为它在app端是使用原生排版引擎渲染的。
uni-app's vue file supports all web layout methods, whether streaming or flex. But in nvue, only flex is supported because it is rendered using the native typesetting engine on the app side.

注意css里背景图和字体文件，尽量不要大于40k，因为会影响性能。在小程序端，如果要大于40k，需放到服务器侧远程引用或base64后引入，不能放到本地作为独立文件引用。
Pay attention to the background image and font file in css, try not to be larger than 40k, because it will affect the performance. On the MiniApp side, if it is larger than 40k, it needs to be placed in the server-side remote reference or imported after base64, and cannot be placed locally as an independent file reference.

### 工程结构和页面管理
### Project structure and page management
uni-app的工程结构有单独的要求，[详见](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)
The engineering structure of uni-app has separate requirements, [see details](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6 %9e%84)

每个可显示的页面，都必须在 [pages.json](https://uniapp.dcloud.io/collocation/pages) 中注册。如果你开发过小程序，那么pages.json类似app.json。如果你熟悉vue，这里没有vue的路由，都是在pages.json里管理。
Every displayable page must be registered in [pages.json](https://uniapp.dcloud.io/collocation/pages). If you have developed MiniApp, then pages.json is similar to app.json. If you are familiar with vue, there is no vue routing here, it is all managed in pages.json.

原来工程的首页一般是index.html或default.html，是在web server里配的。而uni-app的首页，是在pages.json里配的，page节点下第一个页面就是首页。一般在/pages/xx的目录下。
The homepage of the original project is generally index.html or default.html, which is configured in the web server. The home page of uni-app is configured in pages.json, and the first page under the page node is the home page. Usually in the /pages/xx directory.

app和小程序中，为了提升体验，页面提供了原生的导航栏和底部tabbar，注意这些配置是在pages.json中做，而不是在vue页面里创建，但点击事件的监听在显示的vue页面中做。
In the app and MiniApp, in order to improve the experience, the page provides a native navigation bar and bottom tabbar. Note that these configurations are done in pages.json, not in the vue page, but the click event listener is displayed on the vue page. do in.

如果你熟悉小程序开发的话，对比变化如下：
If you are familiar with MiniApp development, the comparison changes are as follows:
- 原来app.json被一拆为二。页面管理，被挪入了uni-app的pages.json；非页面管理，挪入了manifest.json
- The original app.json was split into two. Page management was moved into pages.json of uni-app; non-page management was moved into manifest.json
- 原来的app.js和app.wxss被合并到了app.vue中
- The original app.js and app.wxss were merged into app.vue

### 结语
### Conclusion
最后，本文并非uni-app的完整教程，了解掌握uni-app，还需要认真过一遍uni-app的文档。
Finally, this article is not a complete tutorial of uni-app. To understand and master uni-app, you need to go through the documentation of uni-app carefully.

掌握好vue，也仍需要进一步去vue官网学习。或通过[uni-app专业视频培训课程](https://ke.qq.com/course/379043?from=800006421)，连同vue带uni-app一起学会。
To master vue well, you still need to go to vue official website to learn further. Or through the [uni-app professional video training course](https://ke.qq.com/course/379043?from=800006421), learn together with vue and uni-app.

根据腾讯课堂和职友集的数据，会vue的人，比不会vue的普通前端薪资高27%哦。
According to the data of Tencent Classroom and Job Friend Collection, people who know Vue have a 27% higher salary than ordinary front-end people who do not know Vue.

如果你熟悉小程序，但不熟悉vue的话，这里还有一篇文章总结的很好：[vue和微信小程序的区别、比较](https://segmentfault.com/a/1190000015684864)
If you are familiar with MiniApp but not Vue, here is another article that sums it up well: [Differences and Comparisons between Vue and WeChat MiniApp](https://segmentfault.com/a/1190000015684864)
