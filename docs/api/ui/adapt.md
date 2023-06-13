## 窗口样式相关的 API
## Window style related APIs

在web上，宽屏界面会出现topWindow、LeftWindow、RightWindow，相关概念详见[宽屏适配指南](../../tutorial/adapt.md)
On the web, topWindow, LeftWindow, and RightWindow will appear on the widescreen interface. For related concepts, see [Widescreen Adaptation Guide](../../tutorial/adapt.md)

本文档列出这些window相关API。
This document lists these window-related APIs.

获取对应窗口的样式，返回一个 css 属性值对象;
Get the style of the corresponding window and return a css attribute value object;
设置对应窗口的样式，传入一个 css 属性值对象
Set the style of the corresponding window and pass in a css attribute value object

### uni.getTopWindowStyle()

获取 topWindow 的样式
Get the style of topWindow

> 3.1.0 新增
> 3.1.0 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|x|x|

**代码示例**
**Code example**

```javascript
uni.getTopWindowStyle()
```

### uni.getLeftWindowStyle()

获取 leftWindow 的样式
Get the style of leftWindow

> 3.1.0 新增
> 3.1.0 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|x|x|

**代码示例**
**Code example**

```javascript
uni.getLeftWindowStyle()
```

### uni.getRightWindowStyle()

获取 rightWindow 的样式
Get the style of rightWindow

> 3.1.0 新增
> 3.1.0 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|x|x|

**代码示例**
**Code example**

```javascript
uni.getRightWindowStyle()
```

### uni.setTopWindowStyle(OBJECT)

设置 topWindow 的样式
Set the style of topWindow

> 3.0.5 新增
> 3.0.5 New

**OBJECT 参数说明**
**OBJECT parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|---|---|---|
|OBJECT|Object|css 样式对象，需写驼峰css属性 ，{height: '100px', backgroundColor: 'red'}|
| OBJECT| Object| Css style object. Camel css attribute is required to write, {height: '100px', backgroundColor: 'red'}|

**代码示例**
**Code example**

```javascript
uni.setTopWindowStyle({
    height: '100px', 
    backgroundColor: 'red'
})
```

### uni.setLeftWindowStyle(OBJECT)

设置 leftWindow 的样式
Set the style of leftWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|---|---|---|
|OBJECT|Object|css 样式对象，需写驼峰css属性 ，{width: '500px', backgroundColor: 'blue'}|
| OBJECT| Object| Css style object. Camel css attribute is required to write, {width: '500px', backgroundColor: 'blue'}|

**代码示例**
**Code example**

```javascript
uni.setLeftWindowStyle({
    width: '500px', 
    backgroundColor: 'blue'
})
```

### uni.setRightWindowStyle(OBJECT)

设置 rightWindow 的样式
Set the style of rightWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|---|---|---|
|OBJECT|Object|css 样式对象，需写驼峰css属性 ，{width: '500px', backgroundColor: 'blue'}|
| OBJECT| Object| Css style object. Camel css attribute is required to write, {width: '500px', backgroundColor: 'blue'}|

**代码示例**
**Code example**

```javascript
uni.setRightWindowStyle({
    width: '500px', 
    backgroundColor: 'blue'
})
```

<!-- 
## 显示或隐藏窗口的 API
## API to show or hide the window

显示或隐藏对应的窗口
Show or hide the corresponding window

### uni.showTopWindow()

显示 topWindow
show topWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|

**代码示例**
**Code example**

```javascript
uni.showTopWindow()
```

### uni.showLeftWindow()

显示 leftWindow
show leftWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|

**代码示例**
**Code example**

```javascript
uni.showLeftWindow()
```

### uni.showRightWindow()

显示 rightWindow
show rightWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|

**代码示例**
**Code example**

```javascript
uni.showRightWindow()
```

### uni.hideTopWindow()

隐藏 topWindow
hide topWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|

**代码示例**
**Code example**

```javascript
uni.hideTopWindow()
```

### uni.hideLeftWindow()

隐藏 leftWindow
hide leftWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|

**代码示例**
**Code example**

```javascript
uni.hideLeftWindow()
```

### uni.hideRightWindow()

隐藏 rightWindow
hide rightWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|

**代码示例**
**Code example**

```javascript
uni.hideRightWindow()
``` 
-->
