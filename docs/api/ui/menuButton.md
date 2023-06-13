### getMenuButtonBoundingClientRect()

在小程序平台，如果原生导航栏被隐藏，仍然在右上角会有一个悬浮按钮，微信下也被称为胶囊按钮。本API用于获取小程序下该菜单按钮的布局位置信息，方便开发者布局顶部内容时避开该按钮。
On the Mini Program platform, if the native navigation bar is hidden, there will still be a floating button in the upper right corner, also known as the capsule button under WeChat. This API is used to obtain the layout position information of the menu button under the applet, which is convenient for developers to avoid the button when laying out the top content.

坐标信息以屏幕左上角为原点。
The coordinate information takes the upper left corner of the screen as the origin.

**平台差异说明**
**Platform Difference Description**

|App	|H5	|微信小程序	|支付宝小程序	|百度小程序	|抖音小程序|飞书小程序	|QQ小程序	|
|:-:	|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|:-:		|
|x		|x	|√			|√				|√			|√			|x|√			|

**返回值说明**
**Return value description**

|属性	  |类型	  |说明					      |
|property |type |description |
|:-:	  |:-:    |:-:		            |
|width	|number	|宽度，单位：px			  |
|width |number |Width, unit: px |
|height	|number	|高度，单位：px			  |
|height |number |Height, unit: px |
|top	  |number	|上边界坐标，单位：px	|
|top |number |Coordinate of the upper boundary, unit: px |
|right	|number	|右边界坐标，单位：px	|
|right |number |Right border coordinate, unit: px |
|bottom	|number	|下边界坐标，单位：px	|
|bottom |number |Bottom coordinate, unit: px |
|left	  |number	|左边界坐标，单位：px	|
|left |number | Left border coordinate, unit: px |

**示例**
**Example**

```javascript
  let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
```

**注意**
**Notice**

- 支付宝小程序：其逻辑与微信小程序不同，它提供了菜单点击后按钮的自定义功能，可以选择显示那些系统按钮，[规范详情](https://docs.alipay.com/mini/api/optionmenuitem)
- Alipay applet: its logic is different from the WeChat applet, it provides the custom function of the button after the menu is clicked, and you can choose to display those system buttons, [specification details](https://docs.alipay.com/mini/api /optionmenuitem)
