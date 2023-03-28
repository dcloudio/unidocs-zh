### cover-view
覆盖在原生组件上的文本视图。

app-vue和小程序框架，渲染引擎是webview的。但为了优化体验，部分组件如map、video、textarea、canvas通过原生控件实现，原生组件层级高于前端组件（类似flash层级高于div）。为了能正常覆盖原生组件，设计了cover-view。


**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|x|√|√|x|√|√|



支持的事件：`click`

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|scroll-top|number/string||设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效|支付宝小程序不支持|



**Tips**

- app-nvue所有组件均为原生渲染，不存在前端组件无法覆盖原生组件的问题。但为了保持多端兼容，nvue里也实现了`cover-view`，作用与普通`view`一样。
- 在App端，如果重度使用video和map，推荐使用nvue页面。
- cover-view 嵌套使用时，内部不可直接写文本节点，需要使用 cover-view 包裹。
- App端还可以使用plus.nativeObj.view绘制原生内容，参考:[uni-app中使用5+界面控件](https://ask.dcloud.net.cn/article/35036)、[plus.nativeObj.view规范](https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View)
- App端还提供了更灵活和强大的`subNvue`，参考[原生子窗体subNvue](/api/window/subNVues)
- 在 video 组件中使用时，若想在全屏模式下使用`cover-view`，只有在微信小程序、App端的nvue页面可实现。
- 微信小程序部分原生组件实现了同层渲染，在指定的基础库版本上，某些原生组件可无需使用`cover-view`覆盖，[详见](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)
- 百度小程序iOS端暂不支持一个页面有多个video时嵌套`cover-view`，[详见](https://smartprogram.baidu.com/docs/develop/component/view_cover-view/)。
- 支付宝小程序中 `cover-view` 不支持嵌套，[详见](https://opendocs.alipay.com/mini/component/cover-view)。
- 字节跳动小程序不需要`cover-view`，因其原生组件均实现了同层渲染。
- 360小程序不存在原生组件，无此概念。
- cover-view使用注意：京东小程序[详见](https://mp-docs.jd.com/doc/dev/component/548)、快手小程序[详见](https://mp.kuaishou.com/docs/develop/components/view/cover-view.html)、QQ小程序[详见](https://q.qq.com/wiki/develop/miniprogram/component/view-container/cover.html#cover-view) 。



**微信小程序的cover-view使用注意：**
- cover-view和cover-image的`aria-role`仅可设置为`button`，读屏模式下才可以点击，并朗读出“按钮”；为空时可以聚焦，但不可点击。
- 基础库 2.2.4 起支持 `touch` 相关事件，也可使用 `hover-class` 设置点击态。
- 基础库 2.1.0 起支持设置 `scale` `rotate` 的 css 样式，包括 `transition` 动画。
- 基础库 1.9.90 起 `cover-view` 支持 `overflow: scroll`，但不支持动态更新 `overflow`。
- 基础库 1.9.90 起最外层 `cover-view` 支持 `position: fixed`。
- 基础库 1.9.0 起支持插在 view 等标签下。在此之前只可嵌套在原生组件`map`、`video`、`canvas`、`camera`内，避免嵌套在其他组件内。
- 基础库 1.6.0 起支持css `transition`动画，`transition-property`只支持`transform (translateX, translateY)`与`opacity`。
- 基础库 1.6.0 起支持css `opacity`。
- 事件模型遵循冒泡模型，但不会冒泡到原生组件。
- 文本建议都套上`cover-view`标签，避免排版错误。
- 只支持基本的定位、布局、文本样式。不支持设置单边的`border`、`background-image`、`shadow`、`overflow: visible`等。
- 建议子节点不要溢出父节点。
- 支持使用 `z-index` 控制层级。
- 默认设置的样式有：`white-space: nowrap`; `line-height: 1.2`; `display: block`;
- 自定义组件嵌套 `cover-view` 时，自定义组件的 `slot` 及其父节点暂不支持通过 `wx:if` 控制显隐，否则会导致 `cover-view` 不显示。
