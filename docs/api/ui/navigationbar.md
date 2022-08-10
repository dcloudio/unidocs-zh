### uni.setNavigationBarTitle(OBJECT)

动态设置当前页面的标题。
Set the title of the current page dynamically.

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|title|String|是|页面标题|
| title| String| Yes| Page title|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**示例**
**Example**

```javascript
uni.setNavigationBarTitle({
	title: '新的标题'
});
```

**注意**
**Notice**

- 如果需要在页面进入时设置标题，可以在`onReady`内执行，以避免被框架内的修改所覆盖。如果必须在`onShow`内执行需要延迟一小段时间
- If the title needs to be set when the page is entered, it can be done in the `onReady` to avoid being overwritten by changes within the frame. A short delay is required if execution must be performed within `onShow`


### uni.setNavigationBarColor(OBJECT)

设置页面导航条颜色。**如果需要进入页面就设置颜色，请延迟执行，防止被框架内设置颜色逻辑覆盖**
Set the color for the page navigation bar. **If the color needs to be set right after entering the page, please delay the execution to prevent it from being covered by the logic of setting the color in the frame**

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|x|√|√|√|√|√|

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
| Parameter| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|frontColor|String|是|前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000|App、H5、微信小程序、百度小程序、字节跳动小程序、QQ小程序、快手小程序、京东小程序|
|backgroundColor|String|是|背景颜色值，有效值为十六进制颜色||
| backgroundColor| String| Yes| Background color value, valid value is hexadecimal color| |
|animation|Object|否|动画效果，{duration,timingFunc}|微信小程序、百度小程序、QQ小程序、快手小程序、京东小程序|
|success|Function|否|接口调用成功的回调函数||
| success| Function| No| Callback function for successful interface calling| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**注意**
**Notice**
- Android 上的 backgroundColor 参数有限制，黑色大于 rgb(30,30,30), 白色小于 rgb(235,235,235)
- The backgroundColor parameter of Android is limited with black larger than rgb(30,30,30) and white smaller than rgb(235,235,235)
- 如果需要在页面进入时设置标题，可以在`onReady`内执行，以避免被框架内的修改所覆盖。如果必须在`onShow`内执行需要延迟一小段时间
- If the title needs to be set when the page is entered, it can be done in the `onReady` to avoid being overwritten by changes within the frame. A short delay is required if execution must be performed within `onShow`

**animation 结构**

|属性|类型|默认值|必填|说明|
|:-|:-|:-|:-|:-|
|duration|number|0|否|动画变化时间，单位 ms|
|timingFunc|String|'linear'|否|动画变化方式|

**animation.timingFunc 有效值**

|值|说明|
|:-|:-|
|linear|动画从头到尾的速度是相同的。|
|easeIn|动画以低速开始|
|easeOut|动画以低速结束。|
|easeInOut|动画以低速开始和结束。|

**success返回参数说明**
**Success return parameter description**

|参数名|类型|说明|
| Parameter name| Type| Instruction|
|:-|:-|:-|
|errMsg|String|调用结果|
| errMsg| String| Call result|

**示例**
**Example**

```javascript
uni.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#ff0000',
    animation: {
        duration: 400,
        timingFunc: 'easeIn'
    }
})
```

### uni.showNavigationBarLoading(OBJECT)

在当前页面显示导航条加载动画。
Display navigation bar loading animation on the current page.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|√|√|√|x|√|√|√|

App平台调用此API时会在屏幕中间悬浮显示loading
When the App platform calls this API, loading will be suspended in the middle of the screen

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|---|---|---|---|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**示例**
**Example**

```javascript
uni.showNavigationBarLoading()
```

### uni.hideNavigationBarLoading(OBJECT)

在当前页面隐藏导航条加载动画。
Hide the navigation bar and load animation on the current page.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|√|√|√|x|√|√|√|

App平台调用此API时会关闭屏幕中间悬浮显示的loading
When the App platform calls this API, loading suspended in the middle of the screen will be closed

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|---|---|---|---|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**示例**
**Example**

```javascript
uni.hideNavigationBarLoading()
```


### uni.hideHomeButton(OBJECT)

隐藏返回首页按钮。

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|x|1.48.0+|1.10.0+|x|√|


**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|---|---|---|---|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**示例**
**Example**

```javascript
uni.hideHomeButton()
```

**说明**
- 微信小程序自基础库版本2.8.3开始支持
- 当用户打开的小程序最底层页面是非首页时，默认展示“返回首页”按钮，开发者可在页面`onShow`中调用`hideHomeButton`进行隐藏。
