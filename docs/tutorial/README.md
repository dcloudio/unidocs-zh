# uni-app组成和跨端原理

## 基本语言和开发规范
uni-app代码编写，基本语言包括js、vue、css。以及ts、scss等css预编译器。

在app端，还支持原生渲染的[nvue](nvue-outline.md)，以及可以编译为kotlin和swift的[uts](syntax-uts.md)。

DCloud还提供了使用js编写服务器代码的uniCloud云引擎。所以只需掌握js，你可以开发web、Android、iOS、各家小程序以及服务器等全栈应用。

为了实现多端兼容，综合考虑编译速度、运行性能等因素，```uni-app``` 约定了如下开发规范：
In order to achieve multi-terminal compatibility, considering factors such as compilation speed and running performance, ``uni-app``` stipulates the following development specifications:

- 页面文件遵循 [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)，即每个页面是一个.vue文件
- 组件标签靠近小程序规范，详见[uni-app 组件规范](/component/)
- 接口能力（JS API）靠近小程序规范，但需将前缀 `wx`、`my` 等替换为 `uni`，详见[uni-app接口规范](/api/)
- 数据绑定及事件处理同 `Vue.js` 规范，同时补充了App及页面的生命周期
- 如需兼容app-nvue平台，建议使用flex布局进行开发

uni-app分`编译器`和`运行时（runtime）`。uni-app能实现一套代码、多端运行，是通过这2部分配合完成的。

编译器将开发者的代码进行编译，编译的输出物由各个终端的runtime进行解析，每个平台（Web、Android App、iOS App、各家小程序）都有各自的runtime。

## 编译器
- 编译器运行在电脑开发环境。一般是内置在HBuilderX工具中，也可以使用独立的cli版。
- 开发者按uni-app规范编写代码，由编译器将开发者的代码编译生成每个平台支持的特有代码
	* 在web平台，将.vue文件编译为js代码。与普通的vue cli项目类似
	* 在微信小程序平台，编译器将.vue文件拆分生成wxml、wxss、js等代码
	* 在app平台，将.vue文件编译为js代码。进一步，如果涉及uts代码：
		+ 在Android平台，将.uts文件编译为kotlin代码
		+ 在iOS平台，将.uts文件编译为swift代码
- 编译器分vue2版和vue3版
	* vue2版：基于wepback实现
	* vue3版：基于Vite实现。性能更快
- 编译器支持条件编译，即可以指定某部分代码只编译到特定的终端平台。从而将公用和个性化融合在一个工程中。
```js
// #ifdef  App
console.log("这段代码只有在App平台才会被编译进去。非App平台编译后没有这段代码")
// #endif
```

更多编译器介绍参见：[编译器](compiler.md)

## 运行时（runtime）
runtime不是运行在电脑开发环境，而是运行在真正的终端上。

uni-app在每个平台（Web、Android App、iOS App、各家小程序）都有各自的runtime。这是一个比较庞大的工程。
- 在小程序端，uni-app的runtime，主要是一个小程序版的vue runtime，页面路由、组件、api等方面基本都是转义。
- 在web端，uni-app的runtime相比普通的vue项目，多了一套ui库、页面路由框架、和uni对象（即常见API封装）
- 在App端，uni-app的runtime更复杂，可以先简单理解为DCloud也有一套小程序引擎，打包app时将开发者的代码和DCloud的小程序打包成了apk或ipa。当然，事实上DCloud确实有小程序引擎产品，供原生应用实现小程序化，[详见](https://nativesupport.dcloud.net.cn/README)

uni-app runtime包括3部分：基础框架、组件、API。
1. 基础框架：
	* 包括语法、数据驱动、全局文件、应用管理、页面管理、js引擎、渲染和排版引擎等
	* 在web和小程序上，不需要uni-app提供js引擎和排版引擎，直接使用浏览器和小程序的即可。但app上需要uni-app提供
	* App的js引擎：App-Android上，uni-app的js引擎是v8，App-iOS是jscore
	* App的渲染引擎：同时提供了2套渲染引擎，`.vue`页面文件由webview渲染，原理与小程序相同；`.nvue`页面文件由原生渲染，原理与react native相同。开发者可以根据需要自主选择渲染引擎。
2. 组件：
	* runtime中包括的组件只有基础组件，如`<view>`、`<button>`等。扩展组件不包含在uni-app的runtime中，而是下载到用户的项目代码中。
	* 为了降低开发者的学习成本，uni-app的组件命名规范与小程序基本相同。
	* 这几十个组件不管在哪个平台，已被处理为均有一致表现。
	* 在小程序端，基础组件会直接转义为小程序自己的组件。在小程序的runtime中不占体积。
	* 在web和android、iOS端，这几十个组件都在uni-app的runtime中，会占用一定体积，相当于内置了一套ui库。
	* 组件的扩展：
		- 有了几十个基础组件，大多数扩展组件也都是基于这些基础组件封装的。比如官方提供的扩展ui库`uni ui`。
		- 在web平台，for web的各种ui库（如elementUI）也可以使用，但这些库由于操作了dom，无法跨端在app和小程序中使用。
		- 在App平台，uni-app也支持使用原生编程语言来自行扩展原生组件，比如原生的地图、ar等。
		- uni-app同时支持将微信自定义组件运行到微信小程序、web、app这3个平台。
3. API：
	* uni-app runtime内置了大量常见的、跨端的 [API](../api/README.md)，比如联网(uni.request)、读取存储(uni.getStorage)
	* 同时uni-app不限制各端原生平台的API调用。开发者可以在uni-app框架中无限制的调用该平台所有能使用的API。即，在小程序平台，小程序的所有API都可以使用；在web平台，浏览器的所有API都可使用；在iOS和Android平台，os的所有API都可以使用。
	* 也就是说，使用uni-app的标准API，可以跨端使用。但对于不跨端的部分，仍可以调用该端的专有API。由于常见的API都已经被封装内置，所以日常开发时，开发者只需关注uni标准API，当需要调用特色端能力时在条件编译里编写特色API调用代码。
	* [ext API](../api/extapi.md)：web和app的runtime体积不小，如果把小程序的所有API等内置进去会让开发者的最终应用体积变大。所以有部分不常用的API被剥离为ext API。虽然仍然是uni.开头，但需要单独下载插件到项目下
	* 小程序平台：uni对象会转为小程序的自有对象，比如在微信小程序平台，编写uni.request等同于wx.request。那么所有wx.的API都可以这样使用。
	* web平台：window、dom等浏览器专用API仍可以使用
	* app平台：除了uni.的API，还可以使用[plus.的API](https://www.html5plus.org/doc/h5p.html)、[Native.js](native-js.md)，以及通过uts编写原生插件，或者使用java和objectC编写原生插件。这些原生插件调用os的API并封装给js使用。
	* 由于历史沿革，DCloud在开发app时有：5+App、wap2app、uni-app等3种模式。这3种方式的runtime在底层能力上是公用的，所有uni-app可以调用5+（也就是plus.xxx）的API。虽然都可以使用5+的系统能力，但uni-app的逻辑层运行在js层，渲染层是webview和原生nvue双选。而5+不区分逻辑层和渲染层，全部运行在webview里，在性能上5+不及uni-app。

DCloud还提供了[插件市场](https://ext.dcloud.net.cn/)，大多数用得着的组件和API都已经有现成的插件。

### 逻辑层和渲染层分离

在web平台，逻辑层（js）和渲染层（html、css），都运行在统一的webview里。

但在小程序和app端，逻辑层和渲染层被分离了。

分离的核心原因是性能。过去很多开发者吐槽基于webview的app性能不佳，很大原因是js运算和界面渲染抢资源导致的卡顿。

不管小程序还是app，逻辑层都独立为了单独的js引擎，渲染层仍然是webview（app上也支持纯原生渲染）。

所以注意小程序和app的逻辑层都不支持浏览器专用的window、dom等API。app只能在渲染层操作window、dom，即[renderjs](renderjs.md)。

关于逻辑层和渲染层分离带来的注意事项，请[详读](https://uniapp.dcloud.net.cn/tutorial/performance.html)
