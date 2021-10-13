每个端有每个端的特点，有的能被抹平，有的不可能被抹平。

注意：跨端，不是把web的习惯迁移到全平台。而是按照uni的写法，然后全平台使用。

### H5正常但App异常的可能性
1. css异常：

- 不支持的选择器

非H5端不支持*选择器；

body的元素选择器请改为page，同样，div和ul和li等改为view、span和font改为text、a改为navigator、img改为image...

- 组件和页面样式相互影响

非H5端默认并未启用 scoped，如需要隔离组件样式可以在 style 标签增加 scoped 属性，H5端为了隔离页面间的样式默认启用了 scoped

- webview浏览器兼容性

vue页面在App端，默认是被系统的webview渲染的（不是手机自带浏览器，是rom的webview），在较老的手机上，比如Android4.4、5.0或iOS8，很多css是不支持的，所以不要使用太新的css，会导致界面异常。

注意这不意味着不能使用flex，Android4.4也支持flex，只是不要使用太新的css。

可以找Android4.4手机或使用pc模拟器实际测试下，大多数国产Android模拟器都是4.4或5.0。

从 uni-app 2.5.3 起，Android端支持引入腾讯x5浏览器内核，可以抹平低端Android的浏览器兼容性问题，[详见x5使用指南](https://ask.dcloud.net.cn/article/36806)

如果你的H5界面正常，而Android低端机App界面异常，且App没有使用x5引擎，那基本就可以判定是因为css兼容性。

app端nvue页面，不存在浏览器兼容问题，它自带一个统一的原生渲染引擎，不依赖webview。

Android4.4对应的webview是chrome37。各端浏览器内核的详情查阅，参考：[关于手机webview内核、默认浏览器的区别和兼容性](https://ask.dcloud.net.cn/article/1318)

- 原生组件层级问题
H5没有原生组件概念问题，非H5端有原生组件并引发了原生组件层级高于前端组件的概念，要遮挡video、map等原生组件，请使用cover-view组件。

2. 使用了非H5端不支持的API
App的js运行在jscore下而不是浏览器里，没有浏览器专用的js对象，比如document、xmlhttp、cookie、window、location、navigator、localstorage、websql、indexdb、webgl等对象。

如果你的代码没有直接使用这些，那很可能是引入的三方库使用了这些。如果是后者，去[插件市场](https://ext.dcloud.net.cn/)搜索替代方案。要知道非H5端的js是运行在一个独立的js core或v8下，并不是运行在浏览器里。

从HBuilderX 2.6起，App端新增了renderjs，这是一种运行在视图层的js，vue页面通过renderjs可以操作浏览器对象，进而可以让基于浏览器的库直接在uni-app的App端运行，诸如echart、threejs，详见：[https://uniapp.dcloud.io/frame?id=renderjs](https://uniapp.dcloud.io/frame?id=renderjs)

3. 使用了非H5端不支持的vue语法，[详见](/vue-components)
4. 不要在引用组件的地方在组件属性上直接写 style="xx"，要在组件内部写样式
5. `url(//alicdn.net)`等路径，改为`url(https://alicdn.net)`，因为在App端//是file协议
6. 很多人在H5端联网时使用本地测试服务地址(localhost或127.0.0.1)，这样的联网地址手机App端是无法访问的，请使用手机可访问的IP进行联网

### App正常，但H5异常的可能性
2. App端使用了App特有的API和功能，比如subNVue、原生插件等


### App正常，H5异常的可能性
1. 代码中使用了App端特有的subNVue、原生插件等功能

### App(v2)与App(v3)差异说明

1. App(v2)默认template中使用了未定义或未初始化的数据，运行不会报错，且不影响后续节点渲染。App(v3)运行时，会直接告警，并报错（标准的vue渲染逻辑，同H5），且影响后续节点数据的渲染，错误信息通常显示为`undefined is not an object, evaluating(xxx.xxx.xxx)`
2. App(v2)默认隔离组件样式（组件间样式不会互相影响），App(v3)版本默认不隔离。目前发现开发者v2升级v3反馈的样式问题大多由此导致，v3版本将于`2.6.14-alpha`进行调整默认隔离组件间样式。

### 使用 Vue.js 的注意

1. `uni-app` 基于`Vue 2.0`实现，开发者需注意Vue 1.0 -> 2.0 的使用差异，详见[从 Vue 1.x 迁移](https://cn.vuejs.org/v2/guide/migration.html)
2. data 属性必须声明为返回一个初始数据对象的函数；否则页面关闭时，数据不会自动销毁，再次打开该页面时，会显示上次数据
  	
    ```javascript
  	//正确用法，使用函数返回对象
  	data() {
  		return {
  			title: 'Hello'
  		}
  	}
  	//错误写法，会导致再次打开页面时，显示上次数据
  	data: {
  		title: 'Hello'
  	}
  	```
3. 开发者需按`Vue 2.0`的写法实现数据绑定，不支持`Vue 1.0`的数据绑定写法，故如下写法不支持：
	
	```javascript
	  <view id="item-{{id}}"></view>	
	```
	需修改为：
	```javascript
	<view v-bind:id="'item-' + id "></view>	
	```
 
### 区别于传统 web 开发的注意
你之前可能习惯自由的web开发，但uni-app有很多限制。
当然限制是为了在框架层更好的优化用户体验，所以uni-app的体验要优于web。
并且这些限制只是写法的限制，并不影响功能。
请仔细阅读本节。
1. JS注意
	- 非H5端，不能使用浏览器自带对象，比如document、window、localstorage、cookie等，更不能使用jquery等依赖这些浏览器对象的框架。因为App端不支持这些对象。
	- 没有这些浏览器自带对象并不影响业务开发，uni提供的api足够完成业务。
	- uni的api在编译到web平台运行时，其实也会转为浏览器的js api。
  - App端若要使用操作window、document的库，需要通过renderjs来实现。
2. Tag注意
	- uni-app的tag，和HTML的tag不一样，比如div要改成view，span要改成text、a要改成navigator。
	- 出于降低h5应用向uni-app迁移成本的考虑，写成div、span也可以运行在app上，但仍然建议养成新习惯。
3. Css注意
	- 虽然大部分css样式app中都可以支持，但推荐使用flex布局模型，这种布局更灵活高效且支持更多平台(比如nvue、快应用只支持flex布局)
	- 单位方面，uni-app默认为rpx。这是一种可跨端的通用单位 [详见](/frame?id=%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)
4. 工程目录注意
	- 每个要显示的页面，都要放到pages目录下，新建一个页面所在的目录，然后放同名目录的vue文件，比如project/pages/lista/lista.vue，并且在pages.json里配置。
	- 自定义组件，放到component目录
	- 静态资源如图片，固定放到static目录下。这是webpack、mpvue的规则
5. 数据绑定方式的注意
	- ```uni-app``` 基于```Vue 2.0```实现，开发者需注意Vue 1.0 -> 2.0 的使用差异，详见[从 Vue 1.x 迁移](https://cn.vuejs.org/v2/guide/migration.html)
	- 
6. 每个页面支持使用原生title，首页支持使用原生底部tab，这些是要在pages.json里配置，这些并不是vue页面的一部分。当然vue里的js api也可以动态修改原生title
6. 虽然使用vue，但在app里，不是spa而是mpa
7. 位置坐标系统一为国测局坐标系gcj02，这种坐标系可以被多端支持。

### H5 开发注意

* H5 发布到服务器注意：
    1. 配置发行后的路径（发行在网站根目录可不配置），比如发行网站路径是 www.xxx.com/html5，在 `manifest.json` 文件内编辑 h5 节点，router 下增加 base 属性为 html5
<div>
<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/9f026b20-4f3c-11eb-b680-7980c8a877b8.png" width="500">
</div>
    2. 点击菜单 发行-> H5
    3. 在当下项目下的 ``unpackage/dist/build/h5`` 目录找到出的资源，部署服务器（或者使用本地服务器预览），如需部署到相对路径（支持本地file协议打开）参考：https://ask.dcloud.net.cn/article/37432。

* 引用第三方 js 的方式：
    1. 通过 npm 引入（通过条件编译，只有是 h5 平台才 import 相应的库）
    2. 在 `manifest.json` 文件编辑 h5 节点的 template 属性，填写 html 模版路径，在 html 模版里面可以使用 script 的方式引入三方的 js，如下示例是加了百度统计的 html 模板部分代码，模版全部代码可参考：[自定义模板](/collocation/manifest?id=h5-template)
```
...
<body>
            <noscript>
                <strong>Please enable JavaScript to continue.</strong>
            </noscript>
            <div id="app"></div>
            <!-- built files will be auto injected -->
            <script>
                var _hmt = _hmt || [];
                (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?xxxxxx";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                })();
            </script>
</body>
...
```

* H5 版 `uni-app` 全支持 `vue` 语法，所以可能造成部分写法在 H5 端生效，在 App 端不生效。

* H5 校验了更严格的 ``vue`` 语法，有些写法不规范会报警，比如： `data` 后面写对象会报警，必须写 `function`；不能修改 `props` 的值；组件最外层 `template` 节点下不允许包含多个节点等。

* 编译为 H5 版后生成的是单页应用（SPA）。

* 如果遇到跨域造成js无法联网，注意网络请求（request、uploadFile、downloadFile等）在浏览器存在跨域限制，解决方案有详见：[https://ask.dcloud.net.cn/article/35267](https://ask.dcloud.net.cn/article/35267)

* APP 的导航栏和 `tabbar` 均是原生控件，元素区域坐标是不包含原生导航栏和 `tabbar` 的；而 H5 里导航栏和 `tabbar` 是 div 模拟实现的，所以元素坐标会包含导航栏和tabbar的高度。为了优雅的解决多端高度定位问题，`uni-app` 新增了2个css变量：`--window-top` 和 `--window-bottom`，这代表了页面的内容区域距离顶部和底部的距离。举个实例，如果你想在原生`tabbar` 上方悬浮一个菜单，之前写 `bottom:0`。这样的写法编译到 h5 后，这个菜单会和 `tabbar` 重叠，位于屏幕底部。而改为使用 `bottom:var(--window-bottom)`，则不管在 app 下还是在h5下，这个菜单都是悬浮在 `tabbar` 上浮的。这就避免了写条件编译代码。当然仍然也可以使用 H5 的条件编译处理界面的不同。

* CSS 內使用 `vh` 单位的时候注意 `100vh` 包含导航栏，使用时需要减去导航栏和 `tabBar` 高度，部分浏览器还包含浏览器操作栏高度，使用时请注意。

* 正常支持 `rpx`，`px` 是真实物理像素。暂不支持通过设 `manifest.json` 的 `"transformPx" : true`，把 px 当动态单位使用。

* 使用罗盘、地理位置、加速计等相关接口需要使用 https 协议，本地预览（localhost）可以使用 http 协议。

* PC 端 Chrome 浏览器模拟器设备测试的时候，获取位置 API 需要连接谷歌服务器。

* 组件内（页面除外）不支持 `onLoad`、`onShow` 等页面生命周期。

* 为避免和内置组件冲突，自定义组件请加上前缀（但不能是 u 和 uni）。比如可使用的自定义组件名称：`my-view`、`m-input`、`we-icon`，例如不可使用的自定义组件名称：`u-view`、`uni-input`，如果已有项目使用了可能造成冲突的名称，请修改名称。
