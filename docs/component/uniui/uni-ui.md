uni-ui是DCloud提供的一个跨端ui库，它是基于vue组件的、flex布局的、无dom的跨全端ui框架。

uni-ui不包括基础组件，**它是基础组件的补充**。

#### uni-ui产品特点

1、高性能

目前为止，在小程序和混合app领域，uni-ui是性能的标杆。

- 自动差量更新数据

虽然uni-app支持小程序自定义组件，所有小程序的ui库都可以用。但小程序自定义组件的ui库都需要使用setData手动更新数据，在大数据量时、或高频更新数据时，很容易产生性能问题。

而uni-ui属于vue组件，uni-app引擎底层自动diff更新数据。当然其实插件市场里众多vue组件都具备这个特点。

- 优化逻辑层和视图层通讯折损

非H5，不管是小程序还是App，不管是app的webview渲染还是原生渲染，全都是逻辑层和视图层分离的。这里就有一个逻辑层和视图层通讯的折损问题。
比如在视图层拖动一个可跟手的组件，由于通讯的损耗，用js监听很难做到实时跟手。

这时就需要使用css动画以及平台底层提供的wxs、bindingx等技术。不过这些技术都比较复杂，所以uni-ui里做了封装，在需要跟手式操作的ui组件，比如swiperaction列表项左滑菜单，就在底层使用了这些技术，实现了高性能的交互体验

- 背景停止

很多ui组件是会一直动的，比如轮播图、跑马灯。即便这个窗体被新窗体挡住，它在背景层仍然在消耗着硬件资源。在Android的webview版本为chrome66以上，背景操作ui会引发很严重的性能问题，造成前台界面明显卡顿。

而uni-ui的组件，会自动判断自己的显示状态，在组件不再可见时，不会再消耗硬件资源。

2、全端

uni-ui的组件都是多端自适应的，底层会抹平很多小程序平台的差异或bug。

比如导航栏navbar组件，会自动处理不同端的状态栏；
比如swiperaction组件，在app和微信小程序上会使用交互体验更好的wxs技术，但在不支持wxs的其他小程序端会使用js模拟类似效果。

uni-ui还支持nvue原生渲染。

uni-ui还支持pc等宽屏设备，可以通过PC浏览器访问[https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge](https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge)体验

3、风格扩展

uni-ui的默认风格是中型的，与uni-app基础组件风格一致。但它支持[uni.scss](https://uniapp.dcloud.io/collocation/uni-scss)，可以方便的扩展和切换应用的风格。

ui是一种需求非常发散的产品，DCloud官方也无意用uni-ui压制第三方ui插件的空间，但官方有义务在性能和跨端方面提供一个开源的标杆给大家。

我们欢迎更多优秀的ui组件出现，也欢迎更多人贡献uni-ui的主题风格，满足更多用户的需求。

4、与uniCloud协作

uni-ui里很多组件与uniCloud打通，可大幅提升开发效率

5、与uni统计自动集成实现免打点

uni统计是优秀的多端统计平台，见[tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)。

除了一张报表看全端，它的另一个重要特点是免打点。
比如使用uni-ui的navbar标题栏、收藏、购物车等组件，均可实现自动打点，统计页面标题等各种行为数据。
当然你也可以关闭uni统计，这不是强制的。

6、uni-ui符合全套DCloud组件规范

包括easycom、uni_module、datacom，全部遵循。

