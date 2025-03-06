## uni.setTabBarItem(OBJECT)

动态设置 tabBar 某一项的内容

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√（钉钉小程序不支持）|√|√|√|√|√|x|

<!-- UNIAPPAPIJSON.setTabBarItem.compatibility -->

**OBJECT参数说明：**

|属性|类型|默认值|必填|说明|平台差异|
|:-|:-|:-|:-|:-|:-|
|index|number||是|tabBar 的哪一项，从左边算起||
|text|String||否|tab 上的按钮文字||
|iconPath|String||否|图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 position 为 top 时，此参数无效。微信小程序 2.7.0+、支付宝小程序支持网络图片，其他平台暂不支持网络图片||
|selectedIconPath|String||否|选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 position 为 top 时，此参数无效||
|pagePath|String||否|页面绝对路径，必须在 [pages](/collocation/pages?id=pages) 中先定义，被替换掉的 pagePath 不会变成普通页面（仍然需要使用 uni.switchTab 跳转）|App（2.8.4+）、H5（2.8.4+）|
|visible|Boolean|true|否|该项是否显示|App（3.2.10+）、H5（3.2.10+）|
|iconfont|Object||否|字体图标，优先级高于 iconPath|App（3.4.4+）|
|success|Funtion||否|接口调用成功的回调函数||
|fail|Funtion||否|接口调用失败的回调函数||
|complete|Funtion||否|接口调用结束的回调函数（调用成功、失败都会执行）||

**iconfont参数说明：**

|属性|类型|说明|
|:-|:-|:-|
|text|String|字库 Unicode 码|
|selectedText|String|选中后字库 Unicode 码|
|fontSize|String|字体图标字号(px)|
|color|String|字体图标颜色|
|selectedColor|String|字体图标选中颜色|

<!-- UNIAPPAPIJSON.setTabBarItem.param -->

**示例代码**

```js
uni.setTabBarItem({
  index: 0,
  text: 'text',
  iconPath: '/path/to/iconPath',
  selectedIconPath: '/path/to/selectedIconPath'
})
```

注意: 设置 `iconfont` 属性时，pages.json `iconfontSrc` 需要指定字体文件，参考下面的配置

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

<!-- UNIAPPAPIJSON.setTabBarItem.tutorial -->

## uni.setTabBarStyle(OBJECT)

动态设置 tabBar 的整体样式

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|x|

<!-- UNIAPPAPIJSON.setTabBarStyle.compatibility -->

**OBJECT参数说明：**

|属性|类型|默认值|必填|说明|
|:-|:-|:-|:-|:-|
|color|String||否|tab 上的文字默认颜色，HexColor|
|selectedColor|String||否|tab 上的文字选中时的颜色，HexColor|
|backgroundColor|String||否|tab 的背景色，HexColor|
|backgroundImage|String||否|图片背景。支持设置本地图片或创建线性渐变如，优先级高于 backgroundColor，仅 App 2.7.1+ 支持|
|backgroundRepeat|String||否|背景图平铺方式。repeat：背景图片在垂直方向和水平方向平铺；repeat-x：背景图片在水平方向平铺，垂直方向拉伸；repeat-y：背景图片在垂直方向平铺，水平方向拉伸；no-repeat：背景图片在垂直方向和水平方向都拉伸。 默认使用 no-repeat。仅 App 2.7.1+ 支持|
|borderStyle|String||否|tabBar上边框的颜色， 仅支持 black/white，black对应颜色rgba(0,0,0,0.33)，white对应颜色rgba(255,255,255,0.33)。|
|midButton|Object||否|中间按钮 仅在 list 项为偶数时有效 [详情](https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar)。HBuilderX 3.6.9+|
|success|Funtion||否|接口调用成功的回调函数|
|fail|Funtion||否|接口调用失败的回调函数|
|complete|Funtion||否|接口调用结束的回调函数（调用成功、失败都会执行）|

<!-- UNIAPPAPIJSON.setTabBarStyle.param -->

**backgroundImage创建线性渐变说明**

`backgroundImage: linear-gradient(to top, #a80077, #66ff00);`

目前暂不支持 radial-gradient（径向渐变）。

目前只支持两种颜色的渐变，渐变方向如下：

- to right：从左向右渐变
- to left：从右向左渐变
- to bottom：从上到下渐变
- to top：从下到上渐变
- to bottom right：从左上角到右下角
- to top left：从右下角到左上角

**示例代码**

```js
uni.setTabBarStyle({
  color: '#FF0000',
  selectedColor: '#00FF00',
  backgroundColor: '#0000FF',
  borderStyle: 'white'
})
```

<!-- UNIAPPAPIJSON.setTabBarStyle.tutorial -->

## uni.hideTabBar(OBJECT)

隐藏 tabBar

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|√|

<!-- UNIAPPAPIJSON.hideTabBar.compatibility -->

**OBJECT参数说明：**

|属性|类型|默认值|必填|说明|
|:-|:-|:-|:-|:-|
|animation|boolean|false|否|是否需要动画效果，仅微信小程序、支付宝小程序、百度小程序、抖音小程序、飞书小程序、QQ小程序、快手小程序、京东小程序支持|
|success|Funtion||否|接口调用成功的回调函数|
|fail|Funtion||否|接口调用失败的回调函数|
|complete|Funtion||否|接口调用结束的回调函数（调用成功、失败都会执行）|

<!-- UNIAPPAPIJSON.hideTabBar.param -->

<!-- UNIAPPAPIJSON.hideTabBar.tutorial -->

## uni.showTabBar(OBJECT)

显示 tabBar

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|√|

<!-- UNIAPPAPIJSON.showTabBar.compatibility -->

**OBJECT参数说明：**

|属性|类型|默认值|必填|说明|
|:-|:-|:-|:-|:-|
|animation|boolean|false|否|是否需要动画效果，仅微信小程序、支付宝小程序、百度小程序、抖音小程序、飞书小程序、QQ小程序、快手小程序、京东小程序支持|
|success|Funtion||否|接口调用成功的回调函数|
|fail|Funtion||否|接口调用失败的回调函数|
|complete|Funtion||否|接口调用结束的回调函数（调用成功、失败都会执行）|

<!-- UNIAPPAPIJSON.showTabBar.param -->

<!-- UNIAPPAPIJSON.showTabBar.tutorial -->

## uni.setTabBarBadge(OBJECT)
为 tabBar 某一项的右上角添加文本。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|√|

<!-- UNIAPPAPIJSON.setTabBarBadge.compatibility -->

**OBJECT参数说明：**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|index|Number|是|tabBar的哪一项，从左边算起|
|text|String|是|显示的文本，不超过 3 个半角字符|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

<!-- UNIAPPAPIJSON.setTabBarBadge.param -->

**示例代码**

```javascript
uni.setTabBarBadge({
  index: 0,
  text: '1'
})
```

<!-- UNIAPPAPIJSON.setTabBarBadge.tutorial -->

## uni.removeTabBarBadge(OBJECT)
移除 tabBar 某一项右上角的文本。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|√|

<!-- UNIAPPAPIJSON.removeTabBarBadge.compatibility -->

**OBJECT参数说明：**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|index|Number|是|tabBar的哪一项，从左边算起|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|


<!-- UNIAPPAPIJSON.removeTabBarBadge.param -->

<!-- UNIAPPAPIJSON.removeTabBarBadge.tutorial -->

## uni.showTabBarRedDot(OBJECT)
显示 tabBar 某一项的右上角的红点。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|x|

<!-- UNIAPPAPIJSON.showTabBarRedDot.compatibility -->

**OBJECT参数说明：**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|index|Number|是|tabBar的哪一项，从左边算起|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

<!-- UNIAPPAPIJSON.showTabBarRedDot.param -->

<!-- UNIAPPAPIJSON.showTabBarRedDot.tutorial -->

## uni.hideTabBarRedDot(OBJECT)
隐藏 tabBar 某一项的右上角的红点。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|x|

<!-- UNIAPPAPIJSON.hideTabBarRedDot.compatibility -->

**OBJECT参数说明：**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|index|Number|是|tabBar的哪一项，从左边算起|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

<!-- UNIAPPAPIJSON.hideTabBarRedDot.param -->

<!-- UNIAPPAPIJSON.hideTabBarRedDot.tutorial -->

## uni.onTabBarMidButtonTap(CALLBACK)
监听中间按钮的点击事件

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（HBuilderX 2.3.4+）|√|x|x|x|x|x|x|x|x|

<!-- UNIAPPAPIJSON.onTabBarMidButtonTap.compatibility -->

**Tip**
- tabbar是原生的，层级高于前端元素
- [uni-app插件市场](https://ext.dcloud.net.cn/search?q=%E5%BA%95%E9%83%A8%E5%9B%BE%E6%A0%87%E8%8F%9C%E5%8D%95)有封装的前端tabbar，但性能不如原生tabbar
- 如果想要一个中间带+号的tabbar，在HBuilderX中新建uni-app项目、选择 底部选项卡 模板
- 以上大部分操作 tabbar 的 API 需要在 tabbar 渲染后才能使用，避免在 tabbar 未初始化前使用
