### uni.hideKeyboard()

隐藏软键盘
hide soft keyboard

隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
Hide the displayed soft keyboard, and do nothing if the soft keyboard is not displayed.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|x|√|√|√|√|


### uni.onKeyboardHeightChange(CALLBACK) @onkeyboardheightchange

监听键盘高度变化
Monitor keyboard height changes

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 2.2.3+|x|基础库2.7+|HBuilderX 3.6.8+|x|x|√|√|√|
| HBuilderX 2.2.3+| x|Basic library 2.7+| HBuilderX 3.6.8+| x| x|√|√|√|

**参数**
**parameter**

function listener

键盘高度变化事件的监听函数
Listener function for keyboard height change event

**参数**
**parameter**

Object res

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|height|Number|键盘高度|
| height| Number|Keyboard height|

**示例代码**
**Example Code**

```js
uni.onKeyboardHeightChange(res => {
  console.log(res.height)
})
```

### uni.offKeyboardHeightChange(CALLBACK) @offkeyboardheightchange

取消监听键盘高度变化事件
Cancel listening to the keyboard height change event

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 3.1.0+|x|基础库2.9.2+|HBuilderX 3.6.8+|x|x|x|x|√|
| HBuilderX 3.1.0+| x|Basic library 2.9.2+| HBuilderX 3.6.8+| x| x| x| x|√|

**参数**
**parameter**

function listener

onKeyboardHeightChange 传入的监听函数。不传此参数则移除所有监听函数。
The listening function passed in by onKeyboardHeightChange. If this parameter is not passed, all listener functions will be removed.


**示例代码**
**Example Code**

```js
const listener = function (res) { console.log(res) }

uni.onKeyboardHeightChange(listener)
uni.offKeyboardHeightChange(listener) // 需传入与监听时同一个的函数对象
```

### uni.getSelectedTextRange(OBJECT) @getselectedtextrange

在input、textarea等focus之后，获取输入框的光标位置。注意：只有在focus的时候调用此接口才有效。目前仅支持 vue 页面，nvue 可以直接使用 weex 的 [getSelectionRange](https://weex.apache.org/zh/docs/components/input.html#getSelectionRange)。
After input, textarea, etc. focus, get the cursor position of the input box. Note: This interface is valid only when calling the focus. Currently only supports vue pages, nvue can directly use weex's [getSelectionRange](https://weex.apache.org/zh/docs/components/input.html#getSelectionRange).

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 2.8.12+|HBuilderX 2.8.12+|基础库 2.7.0+|x|x|x|x|√|x|
| HBuilderX 2.8.12+| HBuilderX 2.8.12+|Basic Library 2.7.0+| x| x| x| x|√| x|

**OBJECT 参数说明：**
**OBJECT parameter description:**

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
| parameter name | type | default value | required | description |
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function | | No | Callback function for successful interface call |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function | | No | The callback function of interface call failure |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function | | No | The callback function for the end of the interface call (it will be executed when the call succeeds or fails) |

**success 返回参数说明：**
**success return parameter description:**

| 属性 | 类型 | 说明 |
| Property | Type | Description |
| --- | --- | --- |
| start | Number | 输入框光标起始位置 |
| start | Number | The starting position of the cursor in the input box |
| end | Number | 输入框光标结束位置 |
| end | Number | End position of input box cursor |

**示例代码**
**Example Code**

```js
uni.getSelectedTextRange({
  success: res => {
    console.log('getSelectedTextRange res', res.start, res.end)
  }
})
```
