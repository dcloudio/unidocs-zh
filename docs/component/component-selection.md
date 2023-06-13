### 组件的概念
组件是现代开发的重要里程碑。组件重构了分工模型，让大量的轮子出现，让开发者可以拿来轮子直接用，大幅提升了整个产业的效率。

uni-app是有[内置组件](https://uniapp.dcloud.io/component/README)的。这和web开发不一样。
web开发基本上不用基础组件，都是找一个三方ui库，全套组件都包含。那是因为html的基础组件默认样式不适配手机风格。
但uni-app体系不是这样，内置组件就是为手机优化的。

但内置组件只能满足基础需求，更多场景，需要扩展组件。
扩展组件是基于内置组件的二次封装，从性能上来讲，扩展组件的性能略低于内置组件，所以开发者切勿抛弃内置组件，直接全套用三方UI组件库。

uni-app的[插件市场](https://ext.dcloud.net.cn/)，有很多扩展组件，有的是单独的，有的是成套的。
有些开发者喜欢成套的组件，但注意成套扩展组件也不可能覆盖所有需求，很多场景还是需要单独下载专业组件。


### 扩展组件的选择

众多扩展组件如何选择？我们首先要搞清楚组件的分类。
组件分2大类：1、vue组件（文件后缀为vue）；2、小程序自定义组件（文件后缀为wxml或其他小程序平台特有后缀名称）
- vue组件又分为2个细项：only for web、全端兼容
- 小程序组件又分为：微信/QQ小程序组件、阿里小程序组件、百度小程序组件、抖音小程序组件。
这些组件uni-app都支持，但受组件本身技术特点限制，在不同端有不一样的支持度。
下面这张表格，可以清楚的表达不同类型的组件的兼容性。

![扩展组件的选择](https://ask.dcloud.net.cn/uploads/article/20200422/2b0f69a305534929951ef7b1bea847e6.jpg)

从表格中可以很明显看出，更推荐使用的是全端兼容的uni规范组件。

很多人容易搞错2个问题：
1. 同样是vue组件，only for web的和全端的有什么区别？
传统的vue组件，比如elementUI，都是only for web的，里面有大量dom和window对象操作。但小程序和App是没有dom这些api的，自然无法跨端使用。
想要跨端，其实也不难，做一套无dom的vue组件即可。官方的uni-ui即是如此。还有众多开发者在插件市场提交了更多这种类型的库。
2. vant是分web版和weapp版的，千万别搞混
vant的web版操作了dom，所以只能用于web端；而vant weapp是微信小程序组件规范，可以用于微信、App、H5；vant自身并没有提供全端可用的无dom vue组件。


除了兼容性，在性能和生态完善度层面，不同类型组件有什么差别？
1. 性能：
- vue组件性能好于小程序自定义组件。这是因为uni-app在底层对vue数据更新使用了自动差量更新的机制。而小程序自定义组件，默认的setData写法是没有差量数据更新的，需要写代码手动实现差量更新才能达到相同性能。
2. 生态完善度
- 首先除了微信小程序，其他几个平台的小程序几乎是没有三方组件和模板生态的。开发其他端小程序，得靠uni-app的生态
- 再说微信小程序生态，之前在微信小程序平台上一些有名的库（比如wxParse、wx-Echart），实际上在性能、功能、技术支持上，大多做的不如uni-app生态下的新库好。而vant、iview的weapp版，其性能也均不如uni ui。
3. 其他指标
- vue doc：HBuilderX支持[vue doc](https://hx.dcloud.net.cn/Tutorial/Language/vuedoc)，组件作者在vue组件源码里编写vue doc，可以让组件使用者写代码时得到良好的代码提示。
- easycom：uni-app支持[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)，可以大幅简化组件的使用
- nvue支持：如果开发App，可能会涉及到nvue原生渲染页面，这种渲染方式支持的css有限，此时就要甄别组件是否兼容nvue。

再来看看各种成套UI的优劣分析
#### uni ui
DCloud官方出了一套扩展组件，即[uni-ui](https://uniapp.dcloud.io/component/uniui/uni-ui)
这些扩展组件支持单个组件从插件市场下载，也支持[npm引入](https://ext.dcloud.net.cn/plugin?id=55)uni ui，当然更方便的是在HBuilderX新建项目时直接选择`uni ui项目模板`
uni ui有如下优势：
1. 优化逻辑层和视图层的通信折损：非H5端的各个平台，包括App和各种小程序，其逻辑层和视图层是分离的，两层之间通信交互会有折损，导致诸如跟手滑动不流畅。uni ui在底层会利用wxs等技术，把适当的js代码运行在视图层，减少通信折损，保证诸如swiperAction左滑菜单等跟手操作流畅顺滑
2. 自动差量diff数据：在uni-app下，开发App和小程序，不需要手动setData，底层自动会差量更新数据。但如果使用了小程序组件，则需要按小程序的setData方式来更新数据，很难做到自动diff更新数据。
3. 背景停止：很多ui组件是会一直动的，比如轮播图、跑马灯。即便这个窗体被新窗体挡住，它在背景层仍然在消耗着硬件资源。在Android的webview版本为chrome66以上，背景操作ui会引发很严重的性能问题，造成前台界面明显卡顿。而uni ui的组件，会自动判断自己的显示状态，在组件不再可见时，不会再做动画消耗硬件资源。
4. 纯vue语法：uni ui的引用、开发都是纯vue方式。而小程序组件的引用注册、开发都是小程序语法，两种语法混合在一个工程，写的也不舒服，维护也麻烦。
5. 与[uni统计](https://tongji.dcloud.net.cn)自动整合：比如使用uni ui的导航栏组件，就不需要写统计的自定义事件来触发页面标题上报。uni统计会自动识别导航栏组件的标题。类似的，收藏组件、购物车组件，都可以免打点直接使用。
6. uni ui兼容Android 4.4等低端机webview，没有浏览器兼容问题。
7. uni ui支持nvue：App端，uni-app同时支持webview渲染和原生渲染，而uni ui是可以一套代码同时支持webview渲染和原生渲染的。为了兼容原生渲染，uni ui也做到了纯flex布局。
8. uni ui内置vue doc，使用组件时有良好的代码提示
9. 支持[easycom](https://uniapp.dcloud.net.cn/collocation/pages?id=easycom)规范，使用非常简单
10. 支持[datacom规范](https://uniapp.dcloud.net.cn/component/datacom)，云端一体全部封装掉
11. 支持[uni_module规范](https://uniapp.dcloud.net.cn/uni_modules)，方便插件的更新

推荐在HBuilderX新建项目时，直接选择uni ui项目模板，然后在代码里直接敲u，所有组件都拉出来，不用引用、不用注册，直接就用。
![](https://ask.dcloud.net.cn/uploads/article/20200424/dc948a41cd85a418e84cde325c055a75.jpg)
![](http://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-ui-snippet.jpg)

#### 插件市场更多组件
插件市场，[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)，有各种玲琅满目的组件、模板。
其中成套的全端兼容ui库包括：
- [uViewUI](https://www.uviewui.com)：整合了非常多组件，功能丰富、文档清晰，但不支持nvue(2.x已支持nvue)
- [colorUI css库](http://ext.dcloud.net.cn/plugin?id=239)：颜值很高，css库而非组件
- [unify UI](https://ext.dcloud.net.cn/plugin?id=2251)：全端支持的组件库，侧重nvue（商城已下架）
- [mypUI](https://ext.dcloud.net.cn/plugin?id=2190)：全端支持的组件库，侧重nvue
- [ThorUI组件库](https://ext.dcloud.net.cn/plugin?id=556)
- [graceUI商业库](http://grace.hcoder.net/)



### 其他
- 如果你仍坚持使用微信小程序的自定义组件ui，插件市场也有很多vant weapp版的集成示例[https://ext.dcloud.net.cn/search?q=vant](https://ext.dcloud.net.cn/search?q=vant)。同时要注意，小程序自定义组件的性能不如vue组件。
- 如果你的nvue文件使用weex编译模式，也支持weex ui。三方商业ui库有graceUI weex版。但weex编译模式属于被淘汰技术，不再提供技术支持，nvue开发请使用uni-app编译模式。

综上，官方对组件的使用建议是：
1. 首先使用内置组件
2. 然后使用uni ui扩展组件
3. 其他需求依靠插件市场其他组件灵活补充