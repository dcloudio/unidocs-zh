uni-ui是DCloud提供的一个跨端ui库，它是基于vue组件的、flex布局的、无dom的跨全端ui框架。
uni-ui is a cross-end UI library provided by DCloud. It is a cross-end UI framework based on vue components, flex layout, and no dom.

uni-ui不包括基础组件，**它是基础组件的补充**。
uni-ui does not include the base component, it is a complement to the base component.

#### uni-ui产品特点
#### uni-ui product features

1. 高性能
1. High performance

目前为止，在小程序和混合app领域，uni-ui是性能的标杆。
So far, uni-ui is the benchmark for performance in small programs and hybrid apps.

- 自动差量更新数据
- Automatic delta update data

虽然uni-app支持小程序自定义组件，所有小程序的ui库都可以用。但小程序自定义组件的ui库都需要使用setData手动更新数据，在大数据量时、或高频更新数据时，很容易产生性能问题。
Although uni-app supports applet custom components, all applet ui libraries can be used. However, the ui library of the custom component of the applet needs to use setData to manually update the data. When the amount of data is large, or when the data is updated frequently, it is easy to cause performance problems.

而uni-ui属于vue组件，uni-app引擎底层自动diff更新数据。当然其实插件市场里众多vue组件都具备这个特点。
And uni-ui belongs to the vue component, and the bottom layer of the uni-app engine automatically diff updates the data. Of course, many vue components in the plugin market have this feature.

- 优化逻辑层和视图层通讯折损
- Optimize the communication loss of logic layer and view layer

非H5，不管是小程序还是App，不管是app的webview渲染还是原生渲染，全都是逻辑层和视图层分离的。这里就有一个逻辑层和视图层通讯的折损问题。
Non-H5, whether it is a small program or an app, whether it is an app's webview rendering or native rendering, all are separated from the logic layer and the view layer. There is a loss of communication between the logic layer and the view layer.
比如在视图层拖动一个可跟手的组件，由于通讯的损耗，用js监听很难做到实时跟手。
For example, dragging a followable component in the view layer, due to the loss of communication, it is difficult to follow the follower in real time with js monitoring.

这时就需要使用css动画以及平台底层提供的wxs、bindingx等技术。不过这些技术都比较复杂，所以uni-ui里做了封装，在需要跟手式操作的ui组件，比如swiperaction列表项左滑菜单，就在底层使用了这些技术，实现了高性能的交互体验
At this time, you need to use css animation and technologies such as wxs and bindingx provided by the bottom layer of the platform. However, these technologies are relatively complex, so they are encapsulated in uni-ui, and these technologies are used at the bottom layer for ui components that need to be operated manually, such as the left sliding menu of swiperaction list items, to achieve a high-performance interactive experience.

- 背景停止
- background stop

很多ui组件是会一直动的，比如轮播图、跑马灯。即便这个窗体被新窗体挡住，它在背景层仍然在消耗着硬件资源。在Android的webview版本为chrome66以上，背景操作ui会引发很严重的性能问题，造成前台界面明显卡顿。
Many ui components are always moving, such as carousels and marquees. Even if the window is blocked by the new window, it is still consuming hardware resources on the background layer. When the Android webview version is chrome66 or higher, the background operation of the UI will cause serious performance problems, causing the front-end interface to be obviously stuck.

而uni-ui的组件，会自动判断自己的显示状态，在组件不再可见时，不会再消耗硬件资源。
The uni-ui component will automatically determine its own display state, and will not consume hardware resources when the component is no longer visible.

2、全端
2、 Full end

uni-ui的组件都是多端自适应的，底层会抹平很多小程序平台的差异或bug。
The components of uni-ui are multi-terminal adaptive, and the bottom layer will smooth out the differences or bugs of many small program platforms.

比如导航栏navbar组件，会自动处理不同端的状态栏；
For example, the navigation bar navbar component will automatically handle the status bar on different sides;
比如swiperaction组件，在app和微信小程序上会使用交互体验更好的wxs技术，但在不支持wxs的其他小程序端会使用js模拟类似效果。
For example, the swiperaction component will use the wxs technology with better interactive experience on the app and WeChat applet, but will use js to simulate similar effects on other applet terminals that do not support wxs.

uni-ui还支持nvue原生渲染。
uni-ui also supports nvue native rendering.

uni-ui还支持pc等宽屏设备，可以通过PC浏览器访问[https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge](https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge)体验
uni-ui also supports widescreen devices such as pc, which can be accessed through a PC browser [https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge](https://hellouniapp.dcloud.net.cn/ pages/extUI/badge/badge) experience

3、风格扩展
3、Style extension

uni-ui的默认风格是中型的，与uni-app基础组件风格一致。但它支持[uni.scss](https://uniapp.dcloud.io/collocation/uni-scss)，可以方便的扩展和切换应用的风格。
The default style of uni-ui is medium, which is consistent with the style of the uni-app base components. But it supports [uni.scss](https://uniapp.dcloud.io/collocation/uni-scss), which can easily extend and switch the style of the application.

ui是一种需求非常发散的产品，DCloud官方也无意用uni-ui压制第三方ui插件的空间，但官方有义务在性能和跨端方面提供一个开源的标杆给大家。
ui is a product with very divergent demands, and DCloud officials have no intention to use uni-ui to suppress the space for third-party ui plug-ins, but the official is obliged to provide an open source benchmark for everyone in terms of performance and cross-end.

我们欢迎更多优秀的ui组件出现，也欢迎更多人贡献uni-ui的主题风格，满足更多用户的需求。
We welcome more excellent ui components to appear, and welcome more people to contribute uni-ui theme styles to meet the needs of more users.

4、与uniCloud协作
4、Collaborate with uniCloud

uni-ui里很多组件与uniCloud打通，可大幅提升开发效率
Many components in uni-ui are connected with uniCloud, which can greatly improve development efficiency

5、与uni统计自动集成实现免打点
5、Automatic integration with uni statistics to achieve free management

uni统计是优秀的多端统计平台，见[tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)。
Uni Statistics is an excellent multi-terminal statistical platform, see [tongji.dcloud.net.cn](https://tongji.dcloud.net.cn).

除了一张报表看全端，它的另一个重要特点是免打点。
In addition to seeing the full end of a report, another important feature of it is that it is free of RBI.
比如使用uni-ui的navbar标题栏、收藏、购物车等组件，均可实现自动打点，统计页面标题等各种行为数据。
For example, using uni-ui's navbar title bar, collection, shopping cart and other components, can realize automatic management, statistical page title and other behavior data.
当然你也可以关闭uni统计，这不是强制的。
Of course you can also turn off uni statistics, this is not mandatory.

6、uni-ui符合全套DCloud组件规范
6、uni-ui complies with the full set of DCloud component specifications

包括easycom、uni_module、datacom，全部遵循。
Including easycom, uni_module, datacom, all follow.

