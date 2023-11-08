### movable-area

可拖动区域
draggable area

由于app和小程序的架构是逻辑层与视图层分离，使用js监听拖动时会引发逻辑层和视图层的频繁通讯，影响性能。为了方便高性能的实现拖动，平台特封装了`movable-area`组件。
Since the architecture of the app and applet is that the logic layer is separated from the view layer, using js to monitor and drag will cause frequent communication between the logic layer and the view layer, affecting performance. In order to facilitate high-performance dragging, the platform encapsulates the `movable-area` component.

`movable-area`指代可拖动的范围，在其中内嵌`movable-view`组件用于指示可拖动的区域。
`movable-area` refers to the draggable area, and the `movable-view` component is embedded in it to indicate the draggable area.

即手指/鼠标按住`movable-view`拖动或双指缩放，但拖不出`movable-area`规定的范围。
That is, finger/mouse hold down `movable-view` to drag or pinch to zoom, but cannot drag the range specified by `movable-area`.

当然也可以不拖动，而使用代码来触发`movable-view`在`movable-area`里的移动缩放。
Of course, instead of dragging, you can use code to trigger the move and zoom of `movable-view` in `movable-area`.

`movable-view`的规范另见[movable-view](/component/movable-view.html)。
See also [movable-view](/component/movable-view.html) for the specification of `movable-view`.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|x|√|√|√|√|√|

**属性说明**
**Property description**

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-|:-|:-|:-|
|scale-area|Boolean|false|当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 movable-area|
|scale-area|Boolean|false|When the movable-view inside is set to support two-finger zooming, setting this value can modify the effective area of the zoom gesture to the entire movable-area|

**注意：movable-area 必须设置 width 和 height 属性，不设置默认为 10px**
**Note: movable-area must set the width and height properties, if not set the default is 10px**
- movable-area app-nvue平台 暂不支持手势缩放，并且和滚动冲突。
- The movable-area app-nvue platform currently does not support gesture zooming and conflicts with scrolling.