每个端有每个端的特点，有的能被抹平，有的不可能被抹平。
Each end has its own characteristics, some can be smoothed, and some cannot be smoothed.

注意：跨端，不是把web的习惯迁移到全平台。而是按照uni的写法，然后全平台使用。
Note: cross-end, not to migrate the web habits to the whole platform. Instead, it is written according to uni, and then used on all platforms.

### H5正常但App异常的可能性
### H5 is normal but App is abnormal
1. css异常：
1. css exception:

- 不支持的选择器
- unsupported selector

非H5端不支持*选择器；
Non-H5 end does not support * selector;

body的元素选择器请改为page，同样，div和ul和li等改为view、span和font改为text、a改为navigator、img改为image...
Please change the element selector of body to page, similarly, change div, ul and li to view, span and font to text, a to navigator, img to image...

- 组件和页面样式相互影响
- Components and page styles interact with each other

非H5端默认并未启用 scoped，如需要隔离组件样式可以在 style 标签增加 scoped 属性，H5端为了隔离页面间的样式默认启用了 scoped
The non-H5 side does not enable scoped by default. If you need to isolate the component style, you can add the scoped attribute to the style tag. The H5 side enables scoped by default in order to isolate the styles between pages.

- webview浏览器兼容性
- webview browser compatibility

vue页面在App端，默认是被系统的webview渲染的（不是手机自带浏览器，是rom的webview），在较老的手机上，比如Android4.4、5.0或iOS8，很多css是不支持的，所以不要使用太新的css，会导致界面异常。
The vue page is on the App side, and it is rendered by the system's webview by default (not the mobile phone's own browser, but the rom's webview). On older mobile phones, such as Android4.4, 5.0 or iOS8, many css are not supported , so don't use too new css, it will cause abnormal interface.

注意这不意味着不能使用flex，Android4.4也支持flex，只是不要使用太新的css。
Note that this does not mean that flex cannot be used, Android4.4 also supports flex, just don't use too new css.

可以找Android4.4手机或使用pc模拟器实际测试下，大多数国产Android模拟器都是4.4或5.0。
You can find an Android 4.4 mobile phone or use a pc emulator to actually test it. Most domestic Android emulators are 4.4 or 5.0.

从 uni-app 2.5.3 起，Android端支持引入腾讯x5浏览器内核，可以抹平低端Android的浏览器兼容性问题，[详见x5使用指南](https://ask.dcloud.net.cn/article/36806)
Starting from uni-app 2.5.3, the Android side supports the introduction of the Tencent x5 browser kernel, which can smooth out the browser compatibility issues of low-end Android, [see the x5 user guide for details](https://ask.dcloud.net. cn/article/36806)

小程序不存在浏览器兼容问题，它自带了一个很大的Webview。所以如果你的H5和小程序界面正常，而Android低端机App界面异常，且App没有使用x5引擎，那基本就可以判定是因为css兼容性。
The MiniApp does not have browser compatibility issues, and it comes with a large Webview. So if your H5 and MiniApp interfaces are normal, but the Android low-end app interface is abnormal, and the app does not use the x5 engine, it can basically be determined that it is because of css compatibility.

app端nvue页面，不存在浏览器兼容问题，它自带一个统一的原生渲染引擎，不依赖webview。
The nvue page on the app side does not have browser compatibility issues. It comes with a unified native rendering engine and does not rely on webview.

Android4.4对应的webview是chrome37。各端浏览器内核的详情查阅，参考：[关于手机webview内核、默认浏览器、各家小程序的渲染层浏览器的区别和兼容性](https://ask.dcloud.net.cn/article/1318)
The webview corresponding to Android4.4 is chrome37. For details of the browser kernels at each end, refer to: [About the difference and compatibility of mobile phone webview kernel, default browser, and rendering layer browsers of various MiniApp](https://ask.dcloud.net.cn/article/1318)

- 原生组件层级问题
- Native component level issues
H5没有原生组件概念问题，非H5端有原生组件并引发了原生组件层级高于前端组件的概念，要遮挡video、map等原生组件，请使用cover-view组件。
H5 does not have a problem with the concept of native components. There are native components on the non-H5 side, which leads to the concept that the level of native components is higher than that of front-end components. To block native components such as video and map, please use cover-view components.

2. 使用了非H5端不支持的API
2. APIs that are not supported by non-H5 terminals are used
小程序和App的js运行在jscore下而不是浏览器里，没有浏览器专用的js对象，比如document、xmlhttp、cookie、window、location、navigator、localstorage、websql、indexdb、webgl等对象。
The js of MiniApp and apps runs under jscore instead of browsers. There are no browser-specific js objects, such as document, xmlhttp, cookie, window, location, navigator, localstorage, websql, indexdb, webgl and other objects.

如果你的代码没有直接使用这些，那很可能是引入的三方库使用了这些。如果是后者，去[插件市场](https://ext.dcloud.net.cn/)搜索替代方案。要知道非H5端的js是运行在一个独立的js core或v8下，并不是运行在浏览器里。
If your code does not use these directly, it is likely that the imported third-party library uses these. If it is the latter, go to the [plug-in market](https://ext.dcloud.net.cn/) to search for alternatives. You should know that the js on the non-H5 side runs under an independent js core or v8, not in the browser.

从HBuilderX 2.6起，App端新增了renderjs，这是一种运行在视图层的js，vue页面通过renderjs可以操作浏览器对象，进而可以让基于浏览器的库直接在uni-app的App端运行，诸如echart、threejs，详见：[renderjs](https://uniapp.dcloud.io/tutorial/renderjs)
From HBuilderX 2.6, renderjs has been added on the App side, which is a js running in the view layer. Vue pages can operate browser objects through renderjs, and then allow browser-based libraries to run directly on the App side of uni-app , such as echart, threejs, see: [renderjs](https://uniapp.dcloud.io/tutorial/renderjs)

1. 使用了非H5端不支持的vue语法，受小程序自定义组件限制的写法，[详见](/tutorial/vue-components)
1. Use the vue syntax that is not supported by non-H5 terminals, and the writing method is limited by the custom components of the MiniApp. [For details, see](/tutorial/vue-components)
2. 不要在引用组件的地方在组件属性上直接写 style="xx"，要在组件内部写样式
2. Do not write style="xx" directly on the component attribute where the component is referenced, but write the style inside the component
3. `url(//alicdn.net)`等路径，改为`url(https://alicdn.net)`，因为在App端//是file协议
3. Change paths such as `url(//alicdn.net)` to `url(https://alicdn.net)`, because // on the App side is a file protocol
4. 很多人在H5端联网时使用本地测试服务地址(localhost或127.0.0.1)，这样的联网地址手机App端是无法访问的，请使用手机可访问的IP进行联网
4. Many people use the local test service address (localhost or 127.0.0.1) when connecting to the Internet on the H5 side. Such a network address cannot be accessed by the mobile App. Please use the accessible IP of the mobile phone to connect to the Internet.

### H5正常但小程序异常的可能性
### H5 is normal but the possibility of abnormal MiniApp
1. 同上
1. Same as above
2. v-html在h5和app-vue均支持，但小程序不支持
2. v-html is supported in both h5 and app-vue, but not in MiniApp
3. 小程序要求连接的网址都要配白名单
3. The MiniApp requires that the connected URLs must be equipped with a whitelist

### 小程序正常但App异常的可能性
###The possibility that the MiniApp is normal but the App is abnormal
vue页面在App端的渲染引擎默认是系统webview（不是手机自带浏览器，是rom的webview），在较老的手机上，比如Android4.4、5.0或iOS8，一些新出的css语法是不支持的。注意这不意味着不能使用flex，Android4.4也支持flex，只是不要使用太新的css。可以找Android4.4手机或使用pc模拟器实际测试下，大多数国产Android模拟器都是4.4或5.0。
The rendering engine of Vue pages on the App side defaults to the system webview (not the mobile phone's own browser, but the rom's webview). On older mobile phones, such as Android4.4, 5.0 or iOS8, some new css syntax is not supported of. Note that this does not mean that flex cannot be used, Android4.4 also supports flex, just don't use too new css. You can find an Android 4.4 mobile phone or use a pc emulator to actually test it. Most domestic Android emulators are 4.4 or 5.0.

小程序不存在浏览器兼容问题，它内置了几十M自己的定制webview。所以如果你的H5和小程序界面正常，而App界面异常，大多是因为css兼容性。
The MiniApp does not have browser compatibility issues, and it has dozens of built-in custom webviews of its own. So if your H5 and MiniApp interfaces are normal, but the App interface is abnormal, it is mostly because of css compatibility.

解决这类问题：
Solve problems like this:
1. 放弃老款手机支持
1. Drop support for older phones
2. 不用使用太新的css语法，可以在caniuse查询
2. You don’t need to use too new css syntax, you can query it in caniuse
3. 从 uni-app 2.5.3 起，Android端支持引入腾讯x5浏览器内核，可以抹平低端Android的浏览器兼容性问题，[详见x5使用指南](https://ask.dcloud.net.cn/article/36806)
3. Starting from uni-app 2.5.3, the Android side supports the introduction of the Tencent x5 browser kernel, which can smooth out the browser compatibility issues of low-end Android, [see x5 user guide for details](https://ask.dcloud. net.cn/article/36806)

### 小程序或App正常，但H5异常的可能性
### The MiniApp or App is normal, but the possibility of abnormal H5
1. 在 uni-app 2.4.7 以前，H5端不支持微信小程序自定义组件，即 wxcomponents 下的组件，此时可能产生兼容问题。从 2.4.7 起，H5也支持微信自定义组件，不再存在这这方面兼容问题。
1. Before uni-app 2.4.7, the H5 side did not support the custom components of WeChat MiniApp, that is, the components under wxcomponents, which may cause compatibility problems at this time. From 2.4.7 onwards, H5 also supports WeChat custom components, and there is no longer any compatibility issues in this area.
2. App端使用了App特有的API和功能，比如plus、Native.js、subNVue、原生插件等
2. The App side uses App-specific APIs and functions, such as plus, Native.js, subNVue, native plug-ins, etc.
3. 使用了小程序专用的功能，比如微信卡券、小程序插件、微信小程序云开发。对于云开发，建议使用可跨端的uniCloud。
3. The functions dedicated to MiniApp are used, such as WeChat coupons, MiniApp plug-ins, and WeChat MiniApp cloud development. For cloud development, it is recommended to use uniCloud, which can be used across terminals.


### App正常，小程序、H5异常的可能性
### App is normal, MiniApp, H5 abnormal possibility
1. 代码中使用了App端特有的plus、Native.js、subNVue、原生插件等功能
1. App-specific plus, Native.js, subNVue, native plug-ins and other functions are used in the code

### 使用 Vue.js 的注意
### Notes on using Vue.js

1. `uni-app` 基于`Vue 2.0`实现，开发者需注意Vue 1.0 -> 2.0 的使用差异，详见[从 Vue 1.x 迁移](https://cn.vuejs.org/v2/guide/migration.html)
1. `uni-app` is implemented based on `Vue 2.0`. Developers should pay attention to the usage differences of Vue 1.0 -> 2.0. For details, see [Migration from Vue 1.x](https://cn.vuejs.org/v2/ guide/migration.html)
2. data 属性必须声明为返回一个初始数据对象的函数；否则页面关闭时，数据不会自动销毁，再次打开该页面时，会显示上次数据
2. The data attribute must be declared as a function that returns an initial data object; otherwise, when the page is closed, the data will not be automatically destroyed, and when the page is opened again, the last data will be displayed
  	
    ```javascript
  	//正确用法，使用函数返回对象
  	//Correct usage, use function to return object
  	data() {
  		return {
  			title: 'Hello'
  		}
  	}
  	//错误写法，会导致再次打开页面时，显示上次数据
  	//Incorrect writing will cause the last data to be displayed when the page is opened again
  	data: {
  		title: 'Hello'
  	}
  	```
3. 在微信小程序端，`uni-app` 将数据绑定功能委托给`Vue`，开发者需按`Vue 2.0`的写法实现数据绑定，不支持微信小程序的数据绑定写法，故如下写法不支持：
3. On the WeChat MiniApp side, `uni-app` entrusts the data binding function to `Vue`, and developers need to implement data binding according to `Vue 2.0`, which does not support the data binding method of WeChat MiniApp. Therefore, the following writing is not supported:
	
	```vue
	  <view id="item-{{id}}"></view>	
	```
	需修改为：
	Need to be changed to:
	```vue
	<view v-bind:id="'item-' + id "></view>	
	```
 
### 区别于传统 web 开发的注意
### Differences from traditional web development
你之前可能习惯自由的web开发，但目前各家小程序都有很多限制。
You may have been used to free web development before, but currently there are many restrictions on various MiniApp.
当然限制是为了在框架层更好的优化用户体验，所以小程序的体验要优于web。
Of course, the limitation is to better optimize the user experience at the framework layer, so the experience of MiniApp is better than that of web.
并且这些限制只是写法的限制，并不影响功能。
And these restrictions are only limitations of writing, and do not affect the function.
如果你做过微信小程序开发，对这些限制应该已经很了解了。如果没有做过小程序，请仔细阅读本节。
If you have done WeChat MiniApp development, you should already be familiar with these limitations. If you have never done a MiniApp, please read this section carefully.
1. JS注意
1. JS note
	- 非H5端，不能使用浏览器自带对象，比如document、window、localstorage、cookie等，更不能使用jquery等依赖这些浏览器对象的框架。因为各家小程序快应用都不支持这些对象。
	- For non-H5 clients, you cannot use the browser's own objects, such as document, window, localstorage, cookie, etc., and you cannot use jquery and other frameworks that rely on these browser objects. Because the QuickApp of various MiniApp do not support these objects.
	- 没有这些浏览器自带对象并不影响业务开发，uni提供的api足够完成业务。
	- The absence of these browser-built objects does not affect business development, and the API provided by uni is sufficient to complete the business.
	- uni的api在编译到web平台运行时，其实也会转为浏览器的js api。
	- When uni's api is compiled to run on the web platform, it will actually be converted to the browser's js api.
  - App端若要使用操作window、document的库，需要通过renderjs来实现。
  - If you want to use the library for operating window and document on the App side, you need to implement it through renderjs.
	- uni的api是多端可用的。在条件编译区，每个平台的专有api也可以使用，比如wx.、plus.等api可以分别在微信下和app下使用。
	- uni's api is available on multiple terminals. In the conditional compilation area, the proprietary APIs of each platform can also be used, such as wx., plus. APIs can be used under WeChat and app respectively.
	- 出于降低小程序向uni-app迁移成本的考虑，wx的api在app里也可以直接运行，比如写wx.request和uni.request是一样的，但仍然建议仅在微信的条件编译区使用wx的api。
	- In order to reduce the cost of migrating MiniApp to uni-app, the API of wx can also be run directly in the app. For example, writing wx.request and uni.request is the same, but it is still recommended to use it only in the conditional compilation area of WeChat APIs of wx.
2. Tag注意
2. Tag attention
	- uni-app的tag同小程序的tag，和HTML的tag不一样，比如div要改成view，span要改成text、a要改成navigator。
	- The uni-app tag is the same as the MiniApp tag, and different from the HTML tag. For example, div should be changed to view, span should be changed to text, and a should be changed to navigator.
	- 出于降低h5应用向uni-app迁移成本的考虑，写成div、span也可以运行在app和小程序上，因为uni-app编译器会把这些HTML标签编译为小程序标签。但仍然建议养成新习惯。
	- In order to reduce the cost of migrating h5 applications to uni-app, writing divs and spans can also run on apps and MiniApp, because the uni-app compiler will compile these HTML tags into MiniApp tags. But it is still recommended to form a new habit.
3. Css注意
3. Css note
	- 虽然大部分css样式在微信小程序和app中都可以支持，但推荐使用flex布局模型，这种布局更灵活高效且支持更多平台(比如nvue、快应用只支持flex布局)
	- Although most css styles can be supported in WeChat MiniApp and apps, it is recommended to use the flex layout model, which is more flexible and efficient and supports more platforms (such as nvue and QuickApp only support flex layout)
	- 单位方面，uni-app默认为rpx。这是一种可跨端的通用单位 [详见](/tutorial/syntax-css#尺寸单位)
	- In terms of units, uni-app defaults to rpx. This is a universal unit that can be crossed [see](/tutorial/syntax-css#%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)
4. 工程目录注意
4. Project catalog attention
	- 页面文件：放到`pages`目录下；推荐方案：新建一个页面目录，然后创建一个目录同名的`.vue`文件，如`/pages/list/list.vue`，接着在`pages.json`里完成注册。这与小程序的策略相同。
	- Page file: put it in the `pages` directory; recommended solution: create a new page directory, and then create a `.vue` file with the same name as the directory, such as `/pages/list/list.vue`, and then add it to `pages.json ` to complete the registration. This is the same strategy as for MiniApp.
	- 自定义组件：放到`component`目录
	- Custom components: Put them in the `component` directory
	- 静态资源：如图片，固定放到`static`目录下。这是`webpack`的规则
	- Static resources: such as pictures, fixedly placed in the `static` directory. Here are the rules for `webpack`
5. 数据绑定方式的注意
5. Attention to the data binding method
	- ```uni-app``` 基于```Vue 2.0```实现，开发者需注意Vue 1.0 -> 2.0 的使用差异，详见[从 Vue 1.x 迁移](https://cn.vuejs.org/v2/guide/migration.html)
	- ```uni-app``` is implemented based on ```Vue 2.0```, developers should pay attention to the usage differences of Vue 1.0 -> 2.0, see [Migration from Vue 1.x](https://cn .vuejs.org/v2/guide/migration.html)
6. 每个页面支持使用原生title，首页支持使用原生底部tab，这些是要在pages.json里配置，这些并不是vue页面的一部分。当然vue里的js api也可以动态修改原生title
6. Each page supports the use of native titles, and the home page supports the use of native bottom tabs. These must be configured in pages.json, and these are not part of the vue page. Of course, the js api in vue can also dynamically modify the native title
7. 虽然使用vue，但在app和小程序里，不是spa而是mpa
7. Although Vue is used, in apps and MiniApp, it is not spa but mpa
8. 位置坐标系统一为国测局坐标系gcj02，这种坐标系可以被多端支持。老版5+的百度定位和百度地图使用的是百度私有坐标系bd09ll，这种坐标系需要转换。新版uni-app里的百度地图已经默认改为gcj02。高德地图不受影响，一直是gcj02
8. The first position coordinate system is the national survey bureau coordinate system gcj02, which can be supported by multiple terminals. The Baidu positioning and Baidu map of the old version 5+ use Baidu's private coordinate system bd09ll, and this coordinate system needs to be converted. The Baidu map in the new version of uni-app has been changed to gcj02 by default. Gaode map is not affected, it has always been gcj02

### H5 开发注意
### H5 Development Notice

* H5 发布到服务器注意：
* H5 published to the server Note:
    1. 配置发行后的路径（发行在网站根目录可不配置），比如发行网站路径是 www.xxx.com/html5，在 `manifest.json` 文件内编辑 h5 节点，router 下增加 base 属性为 html5
    1. Configure the post-publishing path (publishing in the root directory of the website is not required), for example, the path of the posting website is www.xxx.com/html5, edit the h5 node in the `manifest.json` file, and add the base attribute under the router to html5
<div>
<img src="https://web-assets.dcloud.net.cn/unidoc/zh/html5-a.png" width="500">
</div>
    2. 点击菜单 发行-> H5
    2. Click the menu Release -> H5
    3. 在当下项目下的 ``unpackage/dist/build/h5`` 目录找到出的资源，部署服务器（或者使用本地服务器预览），如需部署到相对路径（支持本地file协议打开）参考：https://ask.dcloud.net.cn/article/37432。
    3. Find the resources in the ``unpackage/dist/build/h5`` directory under the current project, deploy the server (or use the local server to preview), if you need to deploy to a relative path (support local file protocol opening), refer to:https http://ask.dcloud.net.cn/article/37432.

* 引用第三方 js 的方式：
* Ways to reference third-party js:
    1. 通过 npm 引入（通过条件编译，只有是 h5 平台才 import 相应的库）
    1. Import through npm (through conditional compilation, only the h5 platform will import the corresponding library)
    2. 在 `manifest.json` 文件编辑 h5 节点的 template 属性，填写 html 模版路径，在 html 模版里面可以使用 script 的方式引入三方的 js，如下示例是加了百度统计的 html 模板部分代码，模版全部代码可参考：[自定义模板](/collocation/manifest?id=h5-template)
    2. Edit the template attribute of the h5 node in the `manifest.json` file, fill in the html template path, and use the script method to import three-party js in the html template. The following example is part of the code of the html template with Baidu statistics added, and the template is all The code can refer to: [custom template](/collocation/manifest?id=h5-template)
```html
<!-- ... -->
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
<!-- ... -->
```

* H5 版 `uni-app` 全支持 `vue` 语法，所以可能造成部分写法在 H5 端生效，在小程序或 App 端不生效。
* The H5 version of `uni-app` fully supports `vue` syntax, so some writing methods may take effect on the H5 side, but not on the MiniApp or App side.

* H5 校验了更严格的 ``vue`` 语法，有些写法不规范会报警，比如： `data` 后面写对象会报警，必须写 `function`；不能修改 `props` 的值；组件最外层 `template` 节点下不允许包含多个节点等。
* H5 has verified the stricter ``vue`` grammar, and some irregularities will cause an alarm, for example: an object written after `data` will cause an alarm, and `function` must be written; the value of `props` cannot be modified; the outermost part of the component Multiple nodes etc. are not allowed under the layer `template` node.

* 编译为 H5 版后生成的是单页应用（SPA）。
* What is generated after compiling to H5 version is a single page application (SPA).

* 如果遇到跨域造成js无法联网，注意网络请求（request、uploadFile、downloadFile等）在浏览器存在跨域限制，解决方案有详见：[https://ask.dcloud.net.cn/article/35267](https://ask.dcloud.net.cn/article/35267)
* If js cannot be connected to the Internet due to cross-domain, please note that network requests (request, uploadFile, downloadFile, etc.) have cross-domain restrictions in the browser. For solutions, see: [https://ask.dcloud.net.cn/article /35267](https://ask.dcloud.net.cn/article/35267)

* APP 和小程序的导航栏和 `tabbar` 均是原生控件，元素区域坐标是不包含原生导航栏和 `tabbar` 的；而 H5 里导航栏和 `tabbar` 是 div 模拟实现的，所以元素坐标会包含导航栏和tabbar的高度。为了优雅的解决多端高度定位问题，`uni-app` 新增了2个css变量：`--window-top` 和 `--window-bottom`，这代表了页面的内容区域距离顶部和底部的距离。举个实例，如果你想在原生`tabbar` 上方悬浮一个菜单，之前写 `bottom:0`。这样的写法编译到 h5 后，这个菜单会和 `tabbar` 重叠，位于屏幕底部。而改为使用 `bottom:var(--window-bottom)`，则不管在 app 下还是在h5下，这个菜单都是悬浮在 `tabbar` 上浮的。这就避免了写条件编译代码。当然仍然也可以使用 H5 的条件编译处理界面的不同。
* The navigation bar and `tabbar` of APP and MiniApp are native controls, and the coordinates of the element area do not include the native navigation bar and `tabbar`; while the navigation bar and `tabbar` in H5 are realized by div simulation, so the element coordinates Will include the height of the navbar and tabbar. In order to elegantly solve the multi-terminal height positioning problem, `uni-app` adds 2 new css variables: `--window-top` and `--window-bottom`, which represent the distance between the top and bottom of the content area of the page distance. For example, if you want to float a menu above the native `tabbar`, write `bottom:0` before. After such writing is compiled into h5, this menu will overlap with `tabbar` and be located at the bottom of the screen. Instead, use `bottom:var(--window-bottom)`, no matter under the app or under h5, the menu will be suspended above the `tabbar`. This avoids writing conditionally compiled code. Of course, you can still use H5's conditional compilation to deal with the difference in the interface.

* CSS 內使用 `vh` 单位的时候注意 `100vh` 包含导航栏，使用时需要减去导航栏和 `tabBar` 高度，部分浏览器还包含浏览器操作栏高度，使用时请注意。
* Note that `100vh` includes the navigation bar when using the `vh` unit in CSS. When using it, you need to subtract the height of the navigation bar and `tabBar`. Some browsers also include the height of the browser action bar. Please pay attention when using it.

* 正常支持 `rpx`，`px` 是真实物理像素。暂不支持通过设 `manifest.json` 的 `"transformPx" : true`，把 px 当动态单位使用。
* Normal support `rpx`, `px` is real physical pixel. It is not supported to use px as a dynamic unit by setting `"transformPx": true` in `manifest.json`.

* 使用罗盘、地理位置、加速计等相关接口需要使用 https 协议，本地预览（localhost）可以使用 http 协议。
* Use the compass, geographic location, accelerometer and other related interfaces to use the https protocol, and the local preview (localhost) can use the http protocol.

* PC 端 Chrome 浏览器模拟器设备测试的时候，获取位置 API 需要连接谷歌服务器。
* When testing on the Chrome browser emulator device on the PC side, the location API needs to be connected to the Google server.

* 组件内（页面除外）不支持 `onLoad`、`onShow` 等页面生命周期。
* Page life cycles such as `onLoad`, `onShow`, etc. are not supported in components (except pages).

* 为避免和内置组件冲突，自定义组件请加上前缀（但不能是 u 和 uni）。比如可使用的自定义组件名称：`my-view`、`m-input`、`we-icon`，例如不可使用的自定义组件名称：`u-view`、`uni-input`，如果已有项目使用了可能造成冲突的名称，请修改名称，另外微信小程序下自定义组件名称不能以 wx 开头。
* To avoid conflicts with built-in components, please add prefixes to custom components (but not u and uni). For example, the names of custom components that can be used: `my-view`, `m-input`, `we-icon`, such as the names of custom components that cannot be used: `u-view`, `uni-input`, if already Some projects use names that may cause conflicts. Please modify the names. In addition, the names of custom components under WeChat MiniApp cannot start with wx.

### 小程序开发注意@mp
### MiniApp development attention @mp

#### 各家小程序实现机制不同，可能存在的平台兼容问题
#### Different MiniApp have different implementation mechanisms, and there may be platform compatibility issues

1. 浏览器内核差异
1. Browser kernel differences

各家小程序的浏览器内核不同，可能会造成css兼容性问题，更多细节参考：[https://ask.dcloud.net.cn/article/1318](https://ask.dcloud.net.cn/article/1318)
The browser kernels of various MiniApp are different, which may cause css compatibility issues. For more details, refer to: [https://ask.dcloud.net.cn/article/1318](https://ask.dcloud.net.cn/article/1318)

2. 自定义组件渲染差异
2. Custom component rendering differences

微信（可以使用[virtualHost](/tutorial/vue-api.html#%E5%85%B6%E4%BB%96%E9%85%8D%E7%BD%AE)配置）/QQ/百度/字节跳动这四家小程序，自定义组件在渲染时会比App/H5端多一级节点，在写样式时需要注意：
WeChat (can be configured using [virtualHost](/tutorial/vue-api.html#%E5%85%B6%E4%BB%96%E9%85%8D%E7%BD%AE))/QQ/Baidu/zi For these four MiniApp, the custom component will have one more node than the App/H5 side when rendering, so you need to pay attention when writing the style:

* 使用`flex`布局时，直接给自定义组件的父元素设置为`display:flex`不能影响到自定义组件内部的根节点，需要设置当前自定义组件为`display:flex`才可以。
* When using `flex` layout, directly setting the parent element of the custom component to `display:flex` will not affect the root node inside the custom component, you need to set the current custom component to `display:flex`.
* 在自定义组件内部设置根元素高度为100%，不能撑满自定义组件父元素。需要同时设置当前自定义组件高度为100%才可以。
* Set the root element height to 100% inside the custom component, which cannot fill the parent element of the custom component. It is necessary to set the height of the current custom component to 100% at the same time.

支付宝小程序默认启用了[virtualHost](/tutorial/vue-api.html#%E5%85%B6%E4%BB%96%E9%85%8D%E7%BD%AE)配置不会插入节点，一般不存在如上问题。

#### vendor.js 过大的处理方式
#### Vendor.js too large processing method

小程序工具提示`vendor.js`过大，已经跳过es6向es5转换。这个转换问题本身不用理会，因为`vendor.js`已经是es5的了。
The MiniApp tool prompts that `vendor.js` is too large, and the conversion from es6 to es5 has been skipped. The conversion problem itself is ignored, because `vendor.js` is already es5.

关于体积控制，参考如下：
For volume control, refer to the following:

- 使用运行时代码压缩
- use runtime code compression
  + `HBuilderX`创建的项目勾选`运行-->运行到小程序模拟器-->运行时是否压缩代码`
  + For the project created by `HBuilderX`, check `Run-->Run to MiniApp Simulator-->Whether to compress the code at runtime`
  + `cli`创建的项目可以在`package.json`中添加参数`--minimize`，示例：`"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch --minimize"`
  + The project created by `cli` can add the parameter `--minimize` in `package.json`, example: `"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli- service uni-build --watch --minimize"`
- 使用分包优化，[关于分包优化的说明](/collocation/manifest?id=关于分包优化的说明)
- Use subpackage optimization, [Description about subpackage optimization](/collocation/manifest?id=%E5%85%B3%E4%BA%8E%E5%88%86%E5%8C%85%E4%BC %98%E5%8C%96%E7%9A%84%E8%AF%B4%E6%98%8E)

#### 各家小程序开发工具下载地址
#### Various MiniApp development tools download address

* [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)
* [WeChat Developer Tools](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)
* [支付宝开发者工具](https://docs.alipay.com/mini/ide/download)
* [Alipay Developer Tools](https://docs.alipay.com/mini/ide/download)
* [百度开发者工具](https://smartprogram.baidu.com/docs/introduction/tool/)
* [Baidu Developer Tools](https://smartprogram.baidu.com/docs/introduction/tool/)
* [字节跳动开发者工具](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/changelog/update-log/)
* [ByteDance Developer Tools](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/changelog/update-log/)
* [飞书开发者工具](https://open.feishu.cn/document/uYjL24iN/ucDOzYjL3gzM24yN4MjN)
* [Feishu Developer Tools](https://open.feishu.cn/document/uYjL24iN/ucDOzYjL3gzM24yN4MjN)

#### 各家小程序更新日志列表
#### Update log list of various MiniApp

* [微信小程序更新日志](https://developers.weixin.qq.com/miniprogram/dev/framework/release/)
* [WeChat MiniApp update log](https://developers.weixin.qq.com/miniprogram/dev/framework/release/)
* [支付宝小程序更新日志](https://opendocs.alipay.com/mini/01iolt)
* [Alipay MiniApp update log](https://opendocs.alipay.com/mini/01iolt)
* [百度小程序更新日志](https://smartprogram.baidu.com/docs/develop/swan/swanchangelog/)
* [Baidu MiniApp Update Log](https://smartprogram.baidu.com/docs/develop/swan/swanchangelog/)
* [字节跳动小程序更新日志](https://developer.toutiao.com/dev/cn/mini-app/develop/basic-library/update-log)
* [ByteDance MiniApp update log](https://developer.toutiao.com/dev/cn/mini-app/develop/basic-library/update-log)
* [飞书小程序更新日志](https://open.feishu.cn/document/uYjL24iN/uATM0YjLwEDN24CMxQjN)
* [Feishu MiniApp update log](https://open.feishu.cn/document/uYjL24iN/uATM0YjLwEDN24CMxQjN)

#### 微信小程序开发注意
#### WeChat MiniApp Development Attention

- 建议关注[微信小程序当前bug列表](https://developers.weixin.qq.com/community/develop/issueList?type=%E4%BF%AE%E5%A4%8D%E4%B8%AD&block=bug)，对已知Bug，想办法避让。
- It is recommended to pay attention to [WeChat MiniApp Current Bug List](https://developers.weixin.qq.com/community/develop/issueList?type=%E4%BF%AE%E5%A4%8D%E4%B8%AD&block=bug), find ways to avoid known bugs.

#### 支付宝小程序开发注意
#### Pay attention to Alipay MiniApp development

* `showLoading` 是不透传的，也就是说 `loading` 显示的时候无法点击页面内容。
* `showLoading` is opaque, that is to say, the page content cannot be clicked when `loading` is displayed.
* 文件名或文件夹名中不允许出现 `@` 符号。
* The `@` symbol is not allowed in file or folder names.
* 网络请求返回的数据会严格按照 `dataType` 进行处理，如果不符合规范则会抛出错误，而不是按照原格式返回。
* The data returned by the network request will be processed strictly according to `dataType`, if it does not meet the specifications, an error will be thrown instead of being returned in the original format.
* `canvas` 组件的标识是 `id`，而不是 `canvas-id`。目前还未进行处理，所以需要主动添加 id 属性。
* The `canvas` component is identified by `id`, not `canvas-id`. It has not been processed yet, so it is necessary to actively add the id attribute.
* 目前测试的结果，导航栏只有设置背景颜色为 #FFF(FFF) 时才会变成黑色文字。
* As a result of the current test, the navigation bar will turn into black text only when the background color is set to #FFF(FFF).
* 支付宝小程序的导航栏是支持透明渐变效果的，后面会提供相关的配置。
* The navigation bar of the Alipay MiniApp supports transparent gradient effects, and related configurations will be provided later.
* 使用伪元素做边框时，高度值不能用 `1rpx`，需要直接用 `1px`。
* When using a pseudo-element as a border, the height value cannot use `1rpx`, you need to use `1px` directly.
* 不支持 ECharts。
* ECharts are not supported.
* 支付功能模拟不了，需要真机测试。
* The payment function cannot be simulated and needs to be tested on a real device.

#### 百度小程序开发注意
#### Baidu MiniApp development attention

* 不支持属性选择器。
* Attribute selectors are not supported.
* 不支持 `scoped`。
* `scoped` is not supported.
* login / getUserInfo /支付等功能在模拟器（开发工具）上不能模拟。
* Functions such as login / getUserInfo / payment cannot be simulated on the emulator (development tool).
* `map` 组件在开发工具上预览效果不对，但是手机上是对的。
* The preview of `map` component is not correct on developer tool, but it is correct on mobile phone.
* `getSystemInfo` 获取到的 `windowHeight` 在模拟器中值不正确，真机预览是正确的。
* The value of `windowHeight` obtained by `getSystemInfo` is incorrect in the simulator, but the real device preview is correct.
* `v-if` 和 `v-for` 不可在同一标签下同时使用。
* `v-if` and `v-for` cannot be used together under the same tag.
* 页面中引入自定义组件时，渲染的结果中外层会有一个 `template` 标签，这会导致部分选择器对应的样式匹配不上。
* When a custom component is introduced into the page, there will be a `template` tag in the outer layer of the rendered result, which will cause the styles corresponding to some selectors to not match.

#### 360小程序开发注意 @mp-360
#### 360 MiniApp development attention @mp-360
* HBuilderX 2.7.6+ 版支持
* Supported by HBuilderX version 2.7.6+
* 默认为H5平台组件，如果需要360平台组件请使用 <se-...></se-...>，例如 `<se-video></se-video>`
* The default is H5 platform components, if you need 360 platform components, please use <se-...></se-...>, such as `<se-video></se-video>`
* `<se-...></se-...>` 为360平台专有组件，不能跨平台，需要条件编译 `mp-360`
* `<se-...></se-...>` is a proprietary component of the 360 platform, which cannot be cross-platform, and requires conditional compilation of `mp-360`
pages 配置
pages configuration
```json
{
	//...
	"globalStyle": {
		"mp-360": {
			"navigationStyle": "custom" // 去掉uni-app header，使用360小程序header
		}
	}
	//...
}
```
[360小程序文档](https://mp.360.cn/doc/miniprogram/dev/#/)
[360 MiniApp Documentation](https://mp.360.cn/doc/miniprogram/dev/#/)



#### 快应用开发注意@quickapp
#### QuickApp development attention @quickapp
* HBuilderX 2.7.12+ 版支持
* Supported by HBuilderX version 2.7.12+

##### quickapp-webview
- 目前仅vivo oppo支持
- Currently only supported by vivo oppo
- 最小平台版本支持需要 1063
- Minimum platform version support requires 1063
- 暂不支持 canvas 组件
- Canvas component is not supported yet

##### quickapp-webview-huawei
- Huawei QuickApp IDE 最低版本 2.5.2 （已知该版本工具有个bug：不支持项目名称中包含空格）
- The minimum version of Huawei QuickApp IDE is 2.5.2 (it is known that this version of the tool has a bug: it does not support spaces in the project name)
- 最小平台版本支持需要 1070
- Minimum platform version support requires 1070
- 暂不支持 `uni.login(OBJECT)`，暂时使用条件编译，参考文档 [https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwaccount](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwaccount)
- Does not support `uni.login(OBJECT)` temporarily, use conditional compilation for the time being, refer to the document [https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwaccount]( https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwaccount)
- 暂不支持 支付，支付依赖`uni.login(OBJECT)`
- Payment is not supported yet, payment depends on `uni.login(OBJECT)`
- 页面有滚动条时 canvas 组件不会跟随页面滚动
- When the page has a scroll bar, the canvas component will not scroll with the page
- rich-text 组件某些情况下显示异常
- The rich-text component displays abnormally in some cases


##### sign 证书配置
##### sign certificate configuration
sign放到项目根目录，编译后自动拷贝到 .quickapp/sign，每次编译完成时会删除.quickapp，避免证书丢失
sign is placed in the root directory of the project, automatically copied to .quickapp/sign after compilation, and .quickapp will be deleted each time the compilation is completed to avoid loss of certificates
