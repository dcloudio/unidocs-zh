### 组件的概念
### The concept of components
组件是现代开发的重要里程碑。组件重构了分工模型，让大量的轮子出现，让开发者可以拿来轮子直接用，大幅提升了整个产业的效率。
Components are an important milestone in modern development. The component reconstructs the division of labor model, allowing a large number of wheels to appear, allowing developers to use the wheels directly, greatly improving the efficiency of the entire industry.

uni-app是有[内置组件](https://uniapp.dcloud.io/component/README)的。这和web开发不一样。
uni-app has [built-in components](https://uniapp.dcloud.io/component/README). This is not the same as web development.
web开发基本上不用基础组件，都是找一个三方ui库，全套组件都包含。那是因为html的基础组件默认样式不适配手机风格。
Basically, web development does not require basic components, and is all looking for a third-party ui library, which includes a full set of components. That's because the default style of html's basic components does not adapt to the mobile phone style.
但uni-app体系不是这样，内置组件就是为手机优化的。
But this is not the case with the uni-app system, the built-in components are optimized for mobile phones.

但内置组件只能满足基础需求，更多场景，需要扩展组件。
However, the built-in components can only meet the basic needs, and more scenarios require extended components.
扩展组件是基于内置组件的二次封装，从性能上来讲，扩展组件的性能略低于内置组件，所以开发者切勿抛弃内置组件，直接全套用三方UI组件库。
The extension component is a secondary encapsulation based on the built-in component. In terms of performance, the performance of the extension component is slightly lower than that of the built-in component. Therefore, developers should not abandon the built-in component and directly use the third-party UI component library.

uni-app的[插件市场](https://ext.dcloud.net.cn/)，有很多扩展组件，有的是单独的，有的是成套的。
[Plugin Market] (https://ext.dcloud.net.cn/) of uni-app, there are many extension components, some are separate, some are complete sets.
有些开发者喜欢成套的组件，但注意成套扩展组件也不可能覆盖所有需求，很多场景还是需要单独下载专业组件。
Some developers like the complete set of components, but note that the complete set of extension components may not cover all needs, and many scenarios still need to download professional components separately.


### 扩展组件的选择
### Selection of extension components

众多扩展组件如何选择？我们首先要搞清楚组件的分类。
How to choose among the many extension components? We must first figure out the classification of components.
组件分2大类：1、vue组件（文件后缀为vue）；2、小程序自定义组件（文件后缀为wxml或其他小程序平台特有后缀名称）
Components are divided into two categories: 1. Vue components (the file suffix is vue); 2. Mini Program custom components (the file suffix is wxml or other small program platform-specific suffix names)
- vue组件又分为2个细项：only for web、全端兼容
- The vue component is divided into 2 sub-items: only for web, full end compatibility
- 小程序组件又分为：微信/QQ小程序组件、阿里小程序组件、百度小程序组件、字节跳动小程序组件。
- The applet components are further divided into: WeChat/QQ applet components, Ali applet components, Baidu applet components, and ByteDance applet components.
这些组件uni-app都支持，但受组件本身技术特点限制，在不同端有不一样的支持度。
These components are all supported by uni-app, but due to the technical characteristics of the components themselves, there are different degrees of support at different ends.
下面这张表格，可以清楚的表达不同类型的组件的兼容性。
The following table can clearly express the compatibility of different types of components.

![扩展组件的选择](https://ask.dcloud.net.cn/uploads/article/20200422/2b0f69a305534929951ef7b1bea847e6.jpg)

从表格中可以很明显看出，更推荐使用的是全端兼容的uni规范组件。
It is obvious from the table that it is more recommended to use fully end compatible uni specification components.

很多人容易搞错2个问题：
Many people are prone to make two mistakes:
1. 同样是vue组件，only for web的和全端的有什么区别？
1. The same is a vue component, what is the difference between only for web and full-end?
传统的vue组件，比如elementUI，都是only for web的，里面有大量dom和window对象操作。但小程序和App是没有dom这些api的，自然无法跨端使用。
Traditional vue components, such as elementUI, are only for web, and there are a lot of dom and window object operations in it. However, Mini Programs and Apps do not have APIs such as dom, and naturally cannot be used across terminals.
想要跨端，其实也不难，做一套无dom的vue组件即可。官方的uni-ui即是如此。还有众多开发者在插件市场提交了更多这种类型的库。
If you want to cross-end, it is actually not difficult, just make a set of DOM-free vue components. This is the case with the official uni-ui. There are many more developers submitting more libraries of this type in the plugin marketplace.
2. vant是分web版和weapp版的，千万别搞混
2. vant is divided into web version and weapp version, don't confuse it
vant的web版操作了dom，所以只能用于web端；而vant weapp是微信小程序组件规范，可以用于微信、App、H5；vant自身并没有提供全端可用的无dom vue组件。
The web version of vant operates on the dom, so it can only be used on the web side; while vant weapp is a WeChat applet component specification, which can be used for WeChat, App, and H5; vant itself does not provide a dom-free vue component that is available on all sides.


除了兼容性，在性能和生态完善度层面，不同类型组件有什么差别？
In addition to compatibility, what are the differences between different types of components in terms of performance and ecological integrity?
1. 性能：
1. Performance:
- vue组件性能好于小程序自定义组件。这是因为uni-app在底层对vue数据更新使用了自动差量更新的机制。而小程序自定义组件，默认的setData写法是没有差量数据更新的，需要写代码手动实现差量更新才能达到相同性能。
- The performance of the vue component is better than that of the applet custom component. This is because uni-app uses an automatic differential update mechanism for vue data updates at the bottom. For small program custom components, the default setData writing method is that there is no differential data update, and you need to write code to manually implement differential update to achieve the same performance.
2. 生态完善度
2. Ecological perfection
- 首先除了微信小程序，其他几个平台的小程序几乎是没有三方组件和模板生态的。开发其他端小程序，得靠uni-app的生态
- First of all, except for WeChat Mini Programs, there are almost no third-party components and template ecosystems for Mini Programs on other platforms. The development of other small programs depends on the ecology of uni-app
- 再说微信小程序生态，之前在微信小程序平台上一些有名的库（比如wxParse、wx-Echart），实际上在性能、功能、技术支持上，大多做的不如uni-app生态下的新库好。而vant、iview的weapp版，其性能也均不如uni ui。
- Speaking of WeChat applet ecology, some well-known libraries (such as wxParse, wx-Echart) on the WeChat applet platform before, in fact, in terms of performance, functions, and technical support, most of them are not as good as the new libraries under the uni-app ecosystem it is good. And the weapp version of vant and iview, its performance is not as good as uni ui.
3. 其他指标
3. Other indicators
- vue doc：HBuilderX支持[vue doc](https://hx.dcloud.net.cn/Tutorial/Language/vuedoc)，组件作者在vue组件源码里编写vue doc，可以让组件使用者写代码时得到良好的代码提示。
- vue doc: HBuilderX supports [vue doc](https://hx.dcloud.net.cn/Tutorial/Language/vuedoc), component authors write vue doc in the vue component source code, so that component users can get the Good code hints.
- easycom：uni-app支持[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)，可以大幅简化组件的使用
- easycom: uni-app supports [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom), which can greatly simplify the use of components
- nvue支持：如果开发App，可能会涉及到nvue原生渲染页面，这种渲染方式支持的css有限，此时就要甄别组件是否兼容nvue。
- nvue support: If you develop an app, it may involve nvue's native rendering of pages. This rendering method supports limited CSS. At this time, it is necessary to check whether the components are compatible with nvue.

再来看看各种成套UI的优劣分析
Let’s take a look at the advantages and disadvantages of various complete sets of UI
#### uni ui
DCloud官方出了一套扩展组件，即[uni-ui](https://uniapp.dcloud.io/component/uniui/uni-ui)
DCloud officially released a set of extension components, namely [uni-ui](https://uniapp.dcloud.io/component/uniui/uni-ui)
这些扩展组件支持单个组件从插件市场下载，也支持[npm引入](https://ext.dcloud.net.cn/plugin?id=55)uni ui，当然更方便的是在HBuilderX新建项目时直接选择`uni ui项目模板`
These extension components support downloading a single component from the plugin market, and also support [npm import](https://ext.dcloud.net.cn/plugin?id=55) uni ui, of course, it is more convenient to directly create a new project in HBuilderX Select `uni ui project template`
uni ui有如下优势：
uni ui has the following advantages:
1. 优化逻辑层和视图层的通信折损：非H5端的各个平台，包括App和各种小程序，其逻辑层和视图层是分离的，两层之间通信交互会有折损，导致诸如跟手滑动不流畅。uni ui在底层会利用wxs等技术，把适当的js代码运行在视图层，减少通信折损，保证诸如swiperAction左滑菜单等跟手操作流畅顺滑
1. Optimize the communication loss between the logic layer and the view layer: each platform on the non-H5 side, including apps and various small programs, the logic layer and the view layer are separated, and the communication interaction between the two layers will be compromised, resulting in such as The sliding with the hand is not smooth. uni ui will use wxs and other technologies at the bottom layer to run the appropriate js code in the view layer, reduce communication loss, and ensure smooth and smooth follow-up operations such as swiperAction left sliding menu
2. 自动差量diff数据：在uni-app下，开发App和小程序，不需要手动setData，底层自动会差量更新数据。但如果使用了小程序组件，则需要按小程序的setData方式来更新数据，很难做到自动diff更新数据。
2. Automatic differential diff data: Under uni-app, when developing apps and small programs, you do not need to manually setData, and the underlying layer will automatically update the data differentially. However, if the applet component is used, the data needs to be updated according to the setData method of the applet, and it is difficult to automatically diff update the data.
3. 背景停止：很多ui组件是会一直动的，比如轮播图、跑马灯。即便这个窗体被新窗体挡住，它在背景层仍然在消耗着硬件资源。在Android的webview版本为chrome66以上，背景操作ui会引发很严重的性能问题，造成前台界面明显卡顿。而uni ui的组件，会自动判断自己的显示状态，在组件不再可见时，不会再做动画消耗硬件资源。
3. Background stop: Many UI components will keep moving, such as carousel and marquee. Even if the window is blocked by the new window, it is still consuming hardware resources on the background layer. When the Android webview version is chrome66 or higher, the background operation of the UI will cause serious performance problems, causing the front-end interface to be obviously stuck. The uni ui component will automatically determine its own display state, and when the component is no longer visible, it will not consume hardware resources by doing animations.
4. 纯vue语法：uni ui的引用、开发都是纯vue方式。而小程序组件的引用注册、开发都是小程序语法，两种语法混合在一个工程，写的也不舒服，维护也麻烦。
4. Pure vue syntax: The reference and development of uni ui are all pure vue methods. The reference registration and development of the applet components are all applet syntax. The two syntaxes are mixed in one project, which is uncomfortable to write and troublesome to maintain.
5. 与[uni统计](https://tongji.dcloud.net.cn)自动整合：比如使用uni ui的导航栏组件，就不需要写统计的自定义事件来触发页面标题上报。uni统计会自动识别导航栏组件的标题。类似的，收藏组件、购物车组件，都可以免打点直接使用。
5. Automatic integration with [uni statistics] (https://tongji.dcloud.net.cn): For example, if you use the navigation bar component of uni ui, you do not need to write custom events for statistics to trigger page title reporting. uni stats automatically recognizes the title of the navbar component. Similarly, the collection component and the shopping cart component can be used directly without management.
6. uni ui兼容Android 4.4等低端机webview，没有浏览器兼容问题。
6. uni ui is compatible with low-end webviews such as Android 4.4, and there is no browser compatibility problem.
7. uni ui支持nvue：App端，uni-app同时支持webview渲染和原生渲染，而uni ui是可以一套代码同时支持webview渲染和原生渲染的。为了兼容原生渲染，uni ui也做到了纯flex布局。
7. uni ui supports nvue: On the App side, uni-app supports both webview rendering and native rendering, while uni ui can support both webview rendering and native rendering with a set of code. In order to be compatible with native rendering, uni ui also implements pure flex layout.
8. uni ui内置vue doc，使用组件时有良好的代码提示
8. uni ui has built-in vue doc, good code hints when using components
9. 支持[easycom](https://uniapp.dcloud.net.cn/collocation/pages?id=easycom)规范，使用非常简单
9. Support [easycom](https://uniapp.dcloud.net.cn/collocation/pages?id=easycom) specification, very easy to use
10. 支持[datacom规范](https://uniapp.dcloud.net.cn/component/datacom)，云端一体全部封装掉
10. Support [datacom specification](https://uniapp.dcloud.net.cn/component/datacom), all cloud integration is packaged
11. 支持[uni_module规范](https://uniapp.dcloud.net.cn/uni_modules)，方便插件的更新
11. Support [uni_module specification](https://uniapp.dcloud.net.cn/uni_modules), which is convenient for plug-in update

推荐在HBuilderX新建项目时，直接选择uni ui项目模板，然后在代码里直接敲u，所有组件都拉出来，不用引用、不用注册，直接就用。
![](https://ask.dcloud.net.cn/uploads/article/20200424/dc948a41cd85a418e84cde325c055a75.jpg)
![](http://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-ui-snippet.jpg)

#### 插件市场更多组件
#### Plugin Market more components
插件市场，[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)，有各种玲琅满目的组件、模板。
The plugin market, [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn), has various components and templates.
其中成套的全端兼容ui库包括：
The complete set of full-end compatible ui libraries include:
- [uViewUI](https://www.uviewui.com)：整合了非常多组件，功能丰富、文档清晰，但不支持nvue(2.x已支持nvue)
- [uViewUI](https://www.uviewui.com): It integrates a lot of components, with rich functions and clear documentation, but does not support nvue (2.x already supports nvue)
- [colorUI css库](http://ext.dcloud.net.cn/plugin?id=239)：颜值很高，css库而非组件
- [colorUI css library](http://ext.dcloud.net.cn/plugin?id=239): The appearance is very high, the css library is not a component
- [unify UI](https://ext.dcloud.net.cn/plugin?id=2251)：全端支持的组件库，侧重nvue（商城已下架）
- [unify UI](https://ext.dcloud.net.cn/plugin?id=2251): A fully supported component library, focusing on nvue (the mall has been removed)
- [mypUI](https://ext.dcloud.net.cn/plugin?id=2190)：全端支持的组件库，侧重nvue
- [mypUI](https://ext.dcloud.net.cn/plugin?id=2190): A full-end supported component library, focusing on nvue
- [ThorUI组件库](https://ext.dcloud.net.cn/plugin?id=556)
- [ThorUI Component Library](https://ext.dcloud.net.cn/plugin?id=556)
- [graceUI商业库](http://grace.hcoder.net/)
- [graceUI commercial library](http://grace.hcoder.net/)



### 其他
### other
- 如果你仍坚持使用微信小程序的自定义组件ui，插件市场也有很多vant weapp版的集成示例[https://ext.dcloud.net.cn/search?q=vant](https://ext.dcloud.net.cn/search?q=vant)。同时要注意，小程序自定义组件的性能不如vue组件。
- If you still insist on using the custom component ui of WeChat applet, there are also many integration examples of vant weapp version in the plugin market [https://ext.dcloud.net.cn/search?q=vant](https://ext .dcloud.net.cn/search?q=vant). At the same time, it should be noted that the performance of the applet custom component is not as good as the vue component.
- 如果你的nvue文件使用weex编译模式，也支持weex ui。三方商业ui库有graceUI weex版。但weex编译模式属于被淘汰技术，不再提供技术支持，nvue开发请使用uni-app编译模式。
- If your nvue file uses weex compilation mode, weex ui is also supported. The third-party commercial ui library has the graceUI weex version. However, the weex compilation mode is an outdated technology and no technical support is provided. For nvue development, please use the uni-app compilation mode.

综上，官方对组件的使用建议是：
In summary, the official recommendations for the use of components are:
1. 首先使用内置组件
1. Use built-in components first
2. 然后使用uni ui扩展组件
2. Then use the uni ui extension component
3. 其他需求依靠插件市场其他组件灵活补充
3. Other needs are flexibly supplemented by other components in the plug-in market