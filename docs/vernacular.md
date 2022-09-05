## 白话uni-app

本文适合对象：
1. 已经通过[uni-app官网](https://uniapp.dcloud.io)对产品概念有基本了解。
2. 熟悉h5，但对小程序、vue不了解

传统的h5只有1端，即浏览器。而uni-app可跨多端，虽仍属前端，与传统h5有不同。
如果你对h5比较了解，可通过本文快速了解uni-app。


### 网络模型的变化
以前网页大多是b/s，服务端代码混合在页面里；

现在是c/s，前后端分离，通过js api(类似ajax的uni.request)获取json数据，把数据绑定在界面上渲染。

### 文件类型变化
以前是.html文件，开发也是html，运行也是html。
现在是.vue文件，开发是vue，经过编译后，运行时已经变成了js文件。
现代前端开发，很少直接使用HTML，基本都是开发、编译、运行。所以uni-app有编译器、运行时的概念。

### 文件内代码架构的变化
以前一个html大节点，里面有script和style节点；

现在template是一级节点，用于写tag组件，script和style是并列的一级节点，也就是有3个一级节点。

以前
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
以前通过script src、link href引入外部的js和css；

现在是es6的写法，import引入外部的js模块(注意不是文件)或css

以前
```html
<script src="js/jquery-1.10.2.js" type="text/javascript"></script>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
```
现在
#### js要require进来，变成了对象。
在hello uni-app的common目录有一个工具类`util.js`，可以在hello uni-app中搜索这个例子查看。
```html
<script>
var util = require('../../../common/util.js');  //require这个js模块
var formatedPlayTime = util.formatTime(playTime); //调用js模块的方法
</script>
```
而在这个`util.js`里，要把之前的function封装为对象的方法
```js
function formatTime(time) {
	return time;//这里没写逻辑
}

module.exports = {
	formatTime: formatTime
}
```

当然还有一些高级的用法
```
var dateUtils = require('../../../common/util.js').dateUtils; //直接使用js模块的属性。在hello uni-app有示例
import * as echarts from '/components/echarts/echarts.simple.min.js'; //将js导入并重命名为echarts，然后使用echarts.来继续执行方法。在hello uni-app有示例
```

#### css外部文件导入
```html
<style>
	@import "./common/uni.css";
	
	.uni-hello-text{
		color:#7A7E83;
	}
</style>
```
全局样式，在根目录下的app.vue里写入，每个页面都会加载app.vue里的样式。

#### 另外，vue支持组件导入，可以更方便的封装一个包括界面、js、样式的库。
如下是导入一个角标的组件库，在页面上显示一个abc并且右上角有个数字角标1，[详见](http://ext.dcloud.net.cn/plugin?id=21)
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
```
//main.js
import pageHead from './components/page-head.vue' //导入
Vue.component('page-head', pageHead) //注册。注册后在每个vue的page页面里可以直接使用<page-head></page-head>组件。
```
上述的组件使用方式属于传统vue的概念。uni-app 2.7以后推出了更简单的组件使用技术[easycom](https://uniapp.dcloud.net.cn/collocation/pages?id=easycom)，无需引用和注册组件，直接在template区域使用组件即可。

### 组件/标签的变化
以前是html标签，比如`<div>`，现在是小程序组件，比如`<view>`。
那么`标签`和`组件`有什么区别，不都是用尖括号包围起来一段英文吗？
其实标签是老的概念，标签属于浏览器内置的东西。但组件，是可以自由扩展的。
类似你可以把一段js封装成函数或模块，你也可以把一个ui控件封装成一个组件。

`uni-app`参考小程序规范，提供了一批内置组件。

下为html标签和uni-app内置组件的映射表：
- div 改成 [view](https://uniapp.dcloud.io/component/view)
- span、font 改成 [text](https://uniapp.dcloud.io/component/text)
- a 改成 [navigator](https://uniapp.dcloud.io/component/navigator)
- img 改成 [image](https://uniapp.dcloud.io/component/image)
- [input](https://uniapp.dcloud.io/component/input) 仅仅是输入框。 原html规范中input不仅是输入框，还有radio、checkbox、时间、日期、文件选择功能。在uni-app和小程序规范中，input仅仅是输入框。其他功能uni-app有单独的组件或API：[radio组件](https://uniapp.dcloud.io/component/radio)、[checkbox组件](https://uniapp.dcloud.io/component/checkbox)、[时间选择](https://uniapp.dcloud.io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5%99%a8)、[日期选择](https://uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9%e5%99%a8)、[图片选择](https://uniapp.dcloud.io/api/media/image?id=chooseimage)、[视频选择](https://uniapp.dcloud.io/api/media/video?id=choosevideo)、[多媒体文件选择(含图片视频)](https://uniapp.dcloud.io/api/media/video?id=choosemedia)、[通用文件选择](https://uniapp.dcloud.io/api/media/file?id=choosefile)。
- [form](https://uniapp.dcloud.io/component/form)、[button](https://uniapp.dcloud.io/component/button)、[label](https://uniapp.dcloud.io/component/label)、[textarea](https://uniapp.dcloud.io/component/textarea)、[canvas](https://uniapp.dcloud.io/component/canvas)、[video](https://uniapp.dcloud.io/component/video) 这些还在。
- select 改成 [picker](https://uniapp.dcloud.io/component/picker)
- iframe 改成 [web-view](https://uniapp.dcloud.io/component/web-view)
- ul、li没有了，都用view替代。做列表一般使用[uList组件](https://ext.dcloud.net.cn/plugin?id=24)
- audio 不再推荐使用，改成api方式，[背景音频api文档](https://uniapp.dcloud.io/api/media/background-audio-manager?id=getbackgroundaudiomanager)
其实老的HTML标签也可以在uni-app里使用，uni-app编译器会在编译时把老标签转为新标签，比如把div编译成view。但不推荐这种用法，调试H5端时容易混乱。

**除了改动外，新增了一批手机端常用的新组件**
- scroll-view 	[可区域滚动视图容器](https://uniapp.dcloud.io/component/scroll-view)
- swiper	[可滑动区域视图容器](https://uniapp.dcloud.io/component/swiper)
- icon 	[图标](https://uniapp.dcloud.io/component/icon)
- rich-text 	[富文本（不可执行js，但可渲染各种文字格式和图片）](https://uniapp.dcloud.io/component/rich-text)
- progress 	[进度条](https://uniapp.dcloud.io/component/progress)
- slider 	[滑块指示器](https://uniapp.dcloud.io/component/slider)
- switch 	[开关选择器](https://uniapp.dcloud.io/component/switch)
- camera 	[相机](https://uniapp.dcloud.io/component/camera)
- live-player 	[直播](https://uniapp.dcloud.io/component/live-player)
- map 	[地图](https://uniapp.dcloud.io/component/map)
- cover-view	[可覆盖原生组件的视图容器](https://uniapp.dcloud.io/component/cover-view?id=cover-view)
	
	cover-view需要多强调几句，uni-app的非h5端的video、map、canvas、textarea是原生组件，层级高于其他组件。如需覆盖原生组件，则需要使用cover-view组件。详见[层级介绍](https://uniapp.dcloud.net.cn/component/native-component)

除了内置组件，还有很多开源的扩展组件，把常用操作都进行封装，DCloud建立了插件市场收录这些扩展组件，详见[插件市场](https://ext.dcloud.net.cn/)


### js的变化
js的变化，分为运行环境变化、数据绑定模式变化、api变化3部分。

- **运行环境从浏览器变成v8引擎**

标准js语法和api都支持，比如if、for、settimeout、indexOf等。

但浏览器专用的window、document、navigator、location对象，包括cookie等存储，只有在浏览器中才有，app和小程序都不支持。

可能有些人以为js等于浏览器里的js。其实js是ECMAScript组织管理的，浏览器中的js是w3c组织基于js规范补充了window、document、navigator、location等专用对象。

在uni-app的各个端中，除了h5端，其他端的js都运行在一个独立的v8引擎下，不是在浏览器中，所以浏览器的对象无法使用。如果你做过小程序开发，对此应当很了解。

这意味着依赖document的很多HTML的库，比如jquery无法使用。

当然app和小程序支持web-view组件，里面可以加载标准HTML，这种页面仍然支持浏览器专用对象window、document、navigator、location。

- **以前的dom操作，改成vue的MVVM模式**

现在前端趋势是去dom化，改用mvvm模式，更简洁的写法，大幅减少代码行数，同时差量渲染性能更好。

uni-app使用vue的数据绑定方式解决js和dom界面交互的问题。

如果你想改变某个dom元素的显示内容，比如一个view的显示文字：

以前是给view设id，然后js里通过选择器获取dom元素，进一步通过js进行赋值操作，修改dom元素的属性或值。

如下演示了一段代码，页面中有个显示的文字区和一个按钮，点击按钮后会修改文字区的值
	
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
在vue的设计中，这里存放着页面中需要绑定的数据，写在data里，才能被界面正确的绑定和渲染。
注意：uni-app的vue页面是vue的单文件组件规范，按照vue的定义只接受 function，必须用 return 包起来。

如果你学过小程序的数据绑定，但不了解vue，要注意：
- 小程序的数据绑定参考了vue，但自己修改了一些。在uni-app中只支持标准的vue，不支持小程序的数据绑定语法
- 小程序里的setData在uni-app里并不存在，因为vue是自动双向数据绑定的。直接通过赋值方式修改数据，如果数据绑定到界面上，界面会自动更新渲染


从上述示例，还可看出事件的写法变化。
- 以前，元素的事件是用onxxx=""，里面写一段js或引用function的name，比如上述代码中的`onclick="changetextvalue()"`
- 现在，需要在js的`export default {}` 里的 `methods: {}` 里写一个方法，然后在组件中使用`@click="changetextvalue()"`

在js中，与data和methods平级的，如上述示例代码中的`onload()`，称为生命周期。在普通vue页面里的生命周期叫页面生命周期。在项目根目录的app.vue文件中的生命周期叫应用生命周期。
除了`onload`，还有`onready`等很多生命周期，具体见[uni-app的生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle)

在高级用法里，vue支持给组件设ref（引用标记），这类似于之前html中给一个dom元素设id，然后在js中也可以用`this.$refs.xxx`来获取。如下：
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

因为uni-app的api是参考小程序的，所以和浏览器的js api有很多不同，如
1. alert,confirm 改成 [uni.showmodel](https://uniapp.dcloud.io/api/ui/prompt?id=showmodal)
2. ajax 改成 [uni.request](https://uniapp.dcloud.io/api/request/request)
3. cookie、session 没有了，local.storage 改成 [uni.storage](https://uniapp.dcloud.io/api/storage/storage?id=setstorage)

uni-app的js api还有很多，但基本就是小程序的api，把wx.xxx改为uni.xxx即可。[详见](https://uniapp.dcloud.io/api/README)

uni-app在不同的端，支持条件编译，无限制的使用各端独有的api，[详见条件编译](https://uniapp.dcloud.io/platform)


### css的变化
标准的css基本都是支持的。

选择器有2个变化：*选择器不支持；元素选择器里没有body，改为了page。微信小程序即是如此。
```css
page{
	
}
```

单位方面，px无法动态适应不同宽度的屏幕，rem无法用于nvue/weex。如果想使用根据屏幕宽度自适应的单位，推荐使用rpx，全端支持。 [尺寸单位文档](https://uniapp.dcloud.io/frame?id=%e5%b0%ba%e5%af%b8%e5%8d%95%e4%bd%8d)

uni-app推荐使用flex布局，这个布局思路和传统流式布局有点区别。但flex的特色在于，不管是什么技术都支持这种排版，web、小程序/快应用、weex/rn、原生的iOS、Android开发，全都支持flex。它是通吃所有端的新一代布局方案。相关教程请自行百度学习。

uni-app的vue文件里支持所有web排版方式，不管是流式还是flex。但nvue里，只支持flex，因为它在app端是使用原生排版引擎渲染的。

注意css里背景图和字体文件，尽量不要大于40k，因为会影响性能。在小程序端，如果要大于40k，需放到服务器侧远程引用或base64后引入，不能放到本地作为独立文件引用。

### 工程结构和页面管理
uni-app的工程结构有单独的要求，[详见](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)

每个可显示的页面，都必须在 [pages.json](https://uniapp.dcloud.io/collocation/pages) 中注册。如果你开发过小程序，那么pages.json类似app.json。如果你熟悉vue，这里没有vue的路由，都是在pages.json里管理。

原来工程的首页一般是index.html或default.html，是在web server里配的。而uni-app的首页，是在pages.json里配的，page节点下第一个页面就是首页。一般在/pages/xx的目录下。

app和小程序中，为了提升体验，页面提供了原生的导航栏和底部tabbar，注意这些配置是在pages.json中做，而不是在vue页面里创建，但点击事件的监听在显示的vue页面中做。

如果你熟悉小程序开发的话，对比变化如下：
- 原来app.json被一拆为二。页面管理，被挪入了uni-app的pages.json；非页面管理，挪入了manifest.json
- 原来的app.js和app.wxss被合并到了app.vue中

### 结语
最后，本文并非uni-app的完整教程，了解掌握uni-app，还需要认真过一遍uni-app的文档。

掌握好vue，也仍需要进一步去vue官网学习。或通过[uni-app专业视频培训课程](https://ke.qq.com/course/379043?from=800006421)，连同vue带uni-app一起学会。

根据腾讯课堂和职友集的数据，会vue的人，比不会vue的普通前端薪资高27%哦。

如果你熟悉小程序，但不熟悉vue的话，这里还有一篇文章总结的很好：[vue和微信小程序的区别、比较](https://segmentfault.com/a/1190000015684864)
