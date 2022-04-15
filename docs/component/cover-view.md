### cover-view
覆盖在原生组件上的文本视图。

app-vue和小程序框架，渲染引擎是webview的。但为了优化体验，部分组件如map、video、textarea、canvas通过原生控件实现，原生组件层级高于前端组件（类似flash层级高于div）。为了能正常覆盖原生组件，设计了cover-view。


**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|x|√|√|x|√|√|

* app-nvue所有组件均为原生渲染，不存在前端组件无法覆盖原生组件的问题。但为了保持多端兼容，nvue里也实现了`cover-view`，作用于普通`view`一样。
* 微信小程序部分原生组件实现了同层渲染，在指定的基础库版本上，某些原生组件可无需使用`cover-view`覆盖，[详见](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)
* 字节跳动小程序不需要`cover-view`，因其原生组件均实现了同层渲染。
* 360小程序不存在原生组件，无此概念。
* cover-view 嵌套使用时，内部不可直接写文本节点，需要使用 cover-view 包裹。

支持的事件：`click`

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|scroll-top|number/string||设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效|微信小程序2.1.0、京东小程序|
