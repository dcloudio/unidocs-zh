<md-translatedByGoogle />
### cover-view
覆盖在原生组件上的文本视图。
Text view covered on native component.

app-vue和小程序框架，渲染引擎是webview的。但为了优化体验，部分组件如map、video、textarea、canvas通过原生控件实现，原生组件层级高于前端组件（类似flash层级高于div）。为了能正常覆盖原生组件，设计了cover-view。
app-vue and applet framework, the rendering engine is webview. However, in order to optimize the experience, some components such as map, video, textarea, and canvas are implemented through native controls, and the native component level is higher than the front-end component (similar to the flash level higher than the div). In order to cover native components normally, cover-view is designed.


**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Quick application|360 applet|Kuishou applet|JD applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|x|√|√|x|√|√|

* app-nvue所有组件均为原生渲染，不存在前端组件无法覆盖原生组件的问题。但为了保持多端兼容，nvue里也实现了`cover-view`，作用于普通`view`一样。
* All components of app-nvue are native rendering, and there should be no such problem that front-end components cannot cover the native components. However, in order to maintain multi-terminal compatibility, `cover-view` is also implemented in nvue, which acts the same as a normal `view`.
* 微信小程序部分原生组件实现了同层渲染，在指定的基础库版本上，某些原生组件可无需使用`cover-view`覆盖，[详见](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)
* Some native components of WeChat Mini Programs implement the same layer rendering. On the specified base library version, some native components can be covered without using `cover-view`, [see details](https://developers.weixin.qq. com/miniprogram/dev/component/native-component.html)
* 字节跳动小程序不需要`cover-view`，因其原生组件均实现了同层渲染。
* The ByteDance applet does not need `cover-view`, because its native components all achieve the same layer rendering.
* 360小程序不存在原生组件，无此概念。
* 360 applet does not have native components, and there is no such concept.
* cover-view 嵌套使用时，内部不可直接写文本节点，需要使用 cover-view 包裹。
* When cover-view is nested, text nodes cannot be directly written inside, and cover-view needs to be used to wrap it.

支持的事件：`click`
Supported events: `click`

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|scroll-top|number/string||设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效|微信小程序2.1.0、京东小程序|
|scroll-top|number/string||Set the top scroll offset, which only takes effect when overflow-y: scroll is set to become a scrolling element|WeChat applet 2.1.0, Jingdong applet|
