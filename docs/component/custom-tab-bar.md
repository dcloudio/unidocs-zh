#### custom-tab-bar

自定义tabBar组件。
Custom tabBar components.

在小程序和App端，为提升性能，在 `pages.json` 里配置固定的原生tabBar。但在H5端，这一设计并不会提升性能。
On the applet and app side, to improve performance, configure a fixed native tabBar in `pages.json`. But on the H5 side, this design does not improve performance.

同时，H5端尤其是PC宽屏，对tabBar的位置和样式有更灵活的需求，tabBar作为一级导航，更多的时候是在PC网页顶部而不是底部。
At the same time, H5 side, especially PC widescreen, has more flexible requirements for the location and style of tabBar. tabBar, as the first level navigation, is more often placed at the top of PC webpage than at the bottom.

自定义tabBar组件应需而生，它仍然读取 `pages.json` 里配置的tabBar信息，但这个组件可以自定义摆放的位置，可以灵活的配置各种css。
The custom tabBar component came into being as needed. It still reads the tabBar information configured in `pages.json`, but it can customize the location and configure various css flexibly.

该组件支持 ``pages.json`` 中 ``tabBar`` 相关配置（兼容性和 H5 保持一致）， 其中不支持 ``borderStyle`` 配置。
This component supports the related configuration of `tabBar` in `pages.json` (compatibility is consistent with H5), and the configuration of `borderStyle` is not supported.

该组件支持所有 ``tabBar`` 相关 API，例如设置 tab 徽标、显示红点、以及 switchTab 等。
This component supports all `tabBar` related APIs, such as setting the tab logo, displaying the red dot, and switchTab.

**平台兼容性**
**Platform compatibility**

__仅 H5 支持__，HBuilderX 2.9.9 + 。
__Only supported on the H5 side__，HBuilderX 2.9.9+.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|
| Attribute name| Type| Defaults| Instruction|
|:-|:-|:-|:-|
|direction|String|horizontal|选项的排列方向 可选值：horizontal，vertical|
| direction| String| horizontal| Arrangement direction of items, options include: horizontal, vertical|
|show-icon|Boolean|false|是否显示icon|
| show-icon| Boolean| false| Whether to display icon?|
|selected|Number|0|选中的tabBar选项索引值|
| selected| Number| 0| Checked tabBar option index value|
|onTabItemTap|EventHandle||点击事件，参数为Object，具体见下表|
| onTabItemTap| EventHandle| | Click the event with the parameter of Object. See the table below for details|

``onTabItemTap`` 参数说明：
Description of `onTabItemTap` parameter:

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|index|String|被点击tabItem的序号，从0开始|
| index| String| The serial number of the clicked tabItem, starting from 0|
|pagePath|String|被点击tabItem的页面路径|
| pagePath| String| The page path of the clicked tabItem|
|text|String|被点击tabItem的按钮文字|
| text| String| The buttom text of the clicked tabItem|

本组件无需配置 tabBar 的 list，每个 tabItem 仍然从 `pages.json` 中读取。避免多端编写重复代码。
This component does not need to configure the list of tabBar, each tabItem is still read from `pages.json`. Avoid writing the duplicated codes at multiple sides.

**示例**
**Example**

在`hello uni-app`中，在 topWindow 中放置自定义tabBar组件，将页面一级导航放置在网页顶部。
In `hello uni-app`, place a custom tabBar component in topWindow, and place the page-level navigation at the top of the page.

```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中的 top-window 查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the top-window of hello uni-app project -->
<template>
    <view>
        <custom-tab-bar direction="horizontal" :show-icon="false" :selected="selected" @onTabItemTap="onTabItemTap" />
    </view>
</template>
```

示例体验：使用PC浏览器打开[https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
Sample experience: Open [https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/) with PC browser

源码获取：HBuilderX 2.9.9+起新建uni-app项目，选择hello uni-app模板。
Obtain source code: build a new uni-app project with HBuilderX 2.9.9+ and above version, and select the hello uni-app template.

展现效果见下方截图：
See the screenshot below for display effect:

custom-tab-bar 水平布局（horizontal）：
custom-tab-bar horizontal layout (horizontal):

![uniapp](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/custom-tab-bar.png)

custom-tab-bar 竖直布局（vertical）：
custom-tab-bar vertical layout (vertical):

![uniapp](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/vertical.png)
