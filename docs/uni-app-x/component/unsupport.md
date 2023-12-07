# 不支持的组件及替代方案

uni-app x在App端还有一批组件未与uni-app js引擎版拉齐。有的在排期中，有的提供了替代方案，有的需开发者自行开发插件。

- ad：正在补充
- movable-view：没有ui层和逻辑层的通信阻塞，开发者可自己写代码拖动view。hello uni-app x中有[示例代码](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/dev/pages/component/general-event/touch-event.uvue)
- picker：可改用[picker-view](picker-view.md)
- canvas：目前没有完整的canvas组件，但
	* 每个view，都提供了[draw API](../dom/drawablecontext.md)，可以高性能的画各种形状、写字。
	* 关于截图，无需像webview那样通过canvas中转，view直接提供截图方案，[takesnapshot](dom/element.md#takesnapshot)。
	* 使用web-view中的canvas也是一种方案，uvue页面里的web-view组件可以和uvue页面里的uts代码双向通信。比如生成二维码，可以由web-view组件来渲染，复用web生态的库。
	* 当然二维码在插件市场也有现成的[插件](https://ext.dcloud.net.cn/search?q=%E4%BA%8C%E7%BB%B4%E7%A0%81&uni-appx=1)
	* 后期uvue中也会补充正式的canvas组件
- waterfall/grid-view：会补充
- editor：用web-view来加载
- map：
	* 开发uts组件
	* 或使用web-view中的地图
- live-pusher：需开发uts组件
- label：用view加事件来替代