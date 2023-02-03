### uni.setTabBarItem(OBJECT)

动态设置 tabBar 某一项的内容
Dynamically set the content of a tabBar item

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√（钉钉小程序不支持）|√|√|√|√|√|
|√|√|√|√ (DingTalk MiniApp not supported)|√|√|√|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|属性|类型|默认值|必填|说明|平台差异|
|Attribute|Type|Default|Required|Description|Platform Difference|
|:-|:-|:-|:-|:-|:-|
|index|number||是|tabBar 的哪一项，从左边算起||
| index| number|| which item of | tabBar, counting from the left||
|text|String||否|tab 上的按钮文字||
| text| String||No| button text on the tab||
|iconPath|String||否|图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 position 为 top 时，此参数无效。微信小程序 2.7.0+、支付宝小程序支持网络图片，其他平台暂不支持网络图片||
| iconPath| String||No|Image path, the icon size is limited to 40kb, and the recommended size is 81px * 81px. When the position is top, this parameter is invalid. WeChat MiniApp 2.7.0+, Alipay MiniApp support network pictures, other platforms do not support network pictures||
|selectedIconPath|String||否|选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 position 为 top 时，此参数无效||
| selectedIconPath| String||No|The image path when selected, the icon size is limited to 40kb, the recommended size is 81px * 81px, when the position is top, this parameter is invalid||
|pagePath|String||否|页面绝对路径，必须在 [pages](/collocation/pages?id=pages) 中先定义，被替换掉的 pagePath 不会变成普通页面（仍然需要使用 uni.switchTab 跳转）|App（2.8.4+）、H5（2.8.4+）|
| pagePath| String||No|The absolute path of the page must be defined first in [pages](/collocation/pages?id=pages), the replaced pagePath will not become a normal page (you still need to use uni.switchTab to jump Transfer)| App (2.8.4+), H5 (2.8.4+)|
|visible|Boolean|true|否|该项是否显示|App（3.2.10+）、H5（3.2.10+）|
| visible| Boolean| true|No|Whether the item is displayed| App (3.2.10+), H5 (3.2.10+)|
|iconfont|Object||否|字体图标，优先级高于 iconPath|App（3.4.4+）|
| iconfont | Object | | No | Font icon, priority is higher than iconPath | App (3.4.4+) |
|success|Funtion||否|接口调用成功的回调函数||
| success| Function||No|Callback function for successful interface call||
|fail|Funtion||否|接口调用失败的回调函数||
| fail| Function||No|Callback function for interface call failure||
|complete|Funtion||否|接口调用结束的回调函数（调用成功、失败都会执行）||
| complete| Function||No|The callback function of the end of the interface call (it will be executed when the call succeeds or fails)||

**iconfont参数说明：**
**iconfont parameter description:**

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|text|String|字库 Unicode 码|
| text| String|Font Unicode code|
|selectedText|String|选中后字库 Unicode 码|
| selectedText| String|Unicode code of selected font|
|fontSize|String|字体图标字号(px)|
| fontSize| String|Font icon font size (px)|
|color|String|字体图标颜色|
| color| String|font icon color|
|selectedColor|String|字体图标选中颜色|
| selectedColor| String| font icon selected color|


**示例代码**
**Example Code**

```js
uni.setTabBarItem({
  index: 0,
  text: 'text',
  iconPath: '/path/to/iconPath',
  selectedIconPath: '/path/to/selectedIconPath'
})
```

注意: 设置 `iconfont` 属性时，pages.json `iconfontSrc` 需要指定字体文件，参考下面的配置
Note: When setting the `iconfont` property, the pages.json `iconfontSrc` needs to specify the font file, refer to the configuration below

```json
// pages.json
{
  "tabBar": {
    "iconfontSrc":"static/iconfont.ttf",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "Tab1",
        "iconfont": {
          "text": "\ue102",
          "selectedText": "\ue103",
          "fontSize": "17px",
          "color": "#000000",
          "selectedColor": "#0000ff"
        }
      }
    ]
  }
}
```

### uni.setTabBarStyle(OBJECT)

动态设置 tabBar 的整体样式
Dynamically set the overall style of tabBar

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default|Required|Description|
|:-|:-|:-|:-|:-|
|color|String||否|tab 上的文字默认颜色，HexColor|
| color| String||No| The default color of the text on the tab, HexColor|
|selectedColor|String||否|tab 上的文字选中时的颜色，HexColor|
| selectedColor| String||No| The color of the selected text on the tab, HexColor|
|backgroundColor|String||否|tab 的背景色，HexColor|
| backgroundColor| String||No| background color of tab, HexColor|
|backgroundImage|String||否|图片背景。支持设置本地图片或创建线性渐变如，优先级高于 backgroundColor，仅 App 2.7.1+ 支持|
| backgroundImage | String | | No | The image background. Support setting local images or creating linear gradients such as, priority is higher than backgroundColor, only supported by App 2.7.1+|
|backgroundRepeat|String||否|背景图平铺方式。repeat：背景图片在垂直方向和水平方向平铺；repeat-x：背景图片在水平方向平铺，垂直方向拉伸；repeat-y：背景图片在垂直方向平铺，水平方向拉伸；no-repeat：背景图片在垂直方向和水平方向都拉伸。 默认使用 no-repeat。仅 App 2.7.1+ 支持|
| backgroundRepeat| String||No| The tiling method of the background image. repeat: the background image is tiled vertically and horizontally; repeat-x: the background image is tiled horizontally, stretched vertically; repeat-y: the background image is tiled vertically, stretched horizontally; no-repeat : The background image is stretched both vertically and horizontally. By default no-repeat is used. Only supported by App 2.7.1+|
|borderStyle|String||否|tabBar上边框的颜色， 仅支持 black/white|
| borderStyle| String||No| The color of the border on the tabBar, only support black/white|
|midButton|Object||否|中间按钮 仅在 list 项为偶数时有效 [详情](https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar)。HBuilderX 3.6.9+|
| midButton| Object||No|The middle button is only valid when the list item is even [Details](https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar). HBuilderX 3.6.9+|
|success|Funtion||否|接口调用成功的回调函数|
| success| Function||No|Callback function for successful interface call|
|fail|Funtion||否|接口调用失败的回调函数|
| fail| Function||No|Callback function for interface call failure|
|complete|Funtion||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function||No|The callback function of the end of the interface call (it will be executed when the call succeeds or fails)|

**backgroundImage创建线性渐变说明**
**backgroundImage creates a linear gradient description**

`backgroundImage: linear-gradient(to top, #a80077, #66ff00);`

目前暂不支持 radial-gradient（径向渐变）。
Radial-gradient is currently not supported.

目前只支持两种颜色的渐变，渐变方向如下：
Currently only supports gradients of two colors, and the gradient direction is as follows:

- to right：从左向右渐变
- to right: Gradient from left to right
- to left：从右向左渐变
- to left: Gradient from right to left
- to bottom：从上到下渐变
- to bottom: Gradient from top to bottom
- to top：从下到上渐变
- to top: Gradient from bottom to top
- to bottom right：从左上角到右下角
- to bottom right: from the upper left corner to the lower right corner
- to top left：从右下角到左上角
- to top left: from the bottom right corner to the top left corner

**示例代码**
**Example Code**

```js
uni.setTabBarStyle({
  color: '#FF0000',
  selectedColor: '#00FF00',
  backgroundColor: '#0000FF',
  borderStyle: 'white'
})
```

### uni.hideTabBar(OBJECT)

隐藏 tabBar
hide tabBar

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default|Required|Description|
|:-|:-|:-|:-|:-|
|animation|boolean|false|否|是否需要动画效果，仅微信小程序、支付宝小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、快手小程序、京东小程序支持|
| animation| boolean| false|No|Whether animation effects are required, only supported by WeChat MiniApp, Alipay MiniApp, Baidu MiniApp, ByteDance MiniApp Programs, Feishu Mini MiniApp, QQ MiniApp, Kuaishou MiniApp, and Jingdong MiniApp|
|success|Funtion||否|接口调用成功的回调函数|
| success| Function||No|Callback function for successful interface call|
|fail|Funtion||否|接口调用失败的回调函数|
| fail| Function||No|Callback function for interface call failure|
|complete|Funtion||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function||No|The callback function of the end of the interface call (it will be executed when the call succeeds or fails)|

### uni.showTabBar(OBJECT)

显示 tabBar
show tabBar

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default|Required|Description|
|:-|:-|:-|:-|:-|
|animation|boolean|false|否|是否需要动画效果，仅微信小程序、支付宝小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、快手小程序、京东小程序支持|
| animation| boolean| false|No|Whether animation effects are required, only supported by WeChat MiniApp, Alipay MiniApp, Baidu MiniApp, ByteDance MiniApp Programs, Feishu Mini MiniApp, QQ MiniApp, Kuaishou MiniApp, and Jingdong MiniApp|
|success|Funtion||否|接口调用成功的回调函数|
| success| Function||No|Callback function for successful interface call|
|fail|Funtion||否|接口调用失败的回调函数|
| fail| Function||No|Callback function for interface call failure|
|complete|Funtion||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function||No|The callback function of the end of the interface call (it will be executed when the call succeeds or fails)|

### uni.setTabBarBadge(OBJECT)
为 tabBar 某一项的右上角添加文本。
Add text to the upper right corner of an item in the tabBar.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|index|Number|是|tabBar的哪一项，从左边算起|
| index| Number| which item of | tabBar, counting from the left|
|text|String|是|显示的文本，不超过 3 个半角字符|
| text| String| Yes | the displayed text, no more than 3 half-width characters|
|success|Function|否|接口调用成功的回调函数|
| success| Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**示例代码**
**Example Code**

```javascript
uni.setTabBarBadge({
  index: 0,
  text: '1'
})
```

### uni.removeTabBarBadge(OBJECT)
移除 tabBar 某一项右上角的文本。
Remove the text in the upper right corner of an item in the tabBar.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|index|Number|是|tabBar的哪一项，从左边算起|
| index| Number| which item of | tabBar, counting from the left|
|success|Function|否|接口调用成功的回调函数|
| success| Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

### uni.showTabBarRedDot(OBJECT)
显示 tabBar 某一项的右上角的红点。
Displays a red dot in the upper right corner of an item in the tabBar.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|index|Number|是|tabBar的哪一项，从左边算起|
| index| Number| which item of | tabBar, counting from the left|
|success|Function|否|接口调用成功的回调函数|
| success| Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

### uni.hideTabBarRedDot(OBJECT)
隐藏 tabBar 某一项的右上角的红点。
Hide the red dot in the upper right corner of an item in the tabBar.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|index|Number|是|tabBar的哪一项，从左边算起|
| index| Number| which item of | tabBar, counting from the left|
|success|Function|否|接口调用成功的回调函数|
| success| Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

### uni.onTabBarMidButtonTap(CALLBACK)
监听中间按钮的点击事件
Listen to the click event of the middle button

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（HBuilderX 2.3.4+）|√|x|x|x|x|x|x|x|


**Tip**
- tabbar是原生的，层级高于前端元素
- tabbar is native, higher level than the front element
- [uni-app插件市场](https://ext.dcloud.net.cn/search?q=%E5%BA%95%E9%83%A8%E5%9B%BE%E6%A0%87%E8%8F%9C%E5%8D%95)有封装的前端tabbar，但性能不如原生tabbar
- [uni-app plug-in market](https://ext.dcloud.net.cn/search?q=%E5%BA%95%E9%83%A8%E5%9B%BE%E6%A0%87% E8%8F%9C%E5%8D%95) There is a packaged front-end tabbar, but the performance is not as good as the original tabbar
- 如果想要一个中间带+号的tabbar，在HBuilderX中新建uni-app项目、选择 底部选项卡 模板
- If you want a tabbar with a + sign in the middle, create a new uni-app project in HBuilderX and select the bottom tab template
- 以上大部分操作 tabbar 的 API 需要在 tabbar 渲染后才能使用，避免在 tabbar 未初始化前使用
- Most of the above APIs that operate the tabbar need to be used after the tabbar is rendered, and avoid using it before the tabbar is not initialized
