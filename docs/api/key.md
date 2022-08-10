### uni.hideKeyboard()

隐藏软键盘
Hide soft keyboard

隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
Hide the displayed soft keyboard. If not displayed, no action occurs.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|x|√|√|√|√|


### uni.onKeyboardHeightChange(CALLBACK) @onkeyboardheightchange

监听键盘高度变化
listen to keyboard height changes

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 2.2.3+|x|基础库2.7+|x|x|x|√|√|√|

**CALLBACK 返回参数**
**CALLBACK return parameter**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|height|Number|键盘高度|
| height| Number| Keyboard height|

**示例代码**
**Sample code**

```js
uni.onKeyboardHeightChange(res => {
  console.log(res.height)
})
```

### uni.offKeyboardHeightChange(CALLBACK) @offkeyboardheightchange

取消监听键盘高度变化事件
Cancel listening to the height variation event of the keyboard

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 3.1.0+|x|基础库2.9.2+|x|x|x|x|x|√|

**示例代码**
**Sample code**

```js
uni.offKeyboardHeightChange(callback)
```

### uni.getSelectedTextRange(OBJECT) @getselectedtextrange

在input、textarea等focus之后，获取输入框的光标位置。注意：只有在focus的时候调用此接口才有效。目前仅支持 vue 页面，nvue 可以直接使用 weex 的 [getSelectionRange](https://weex.apache.org/zh/docs/components/input.html#getSelectionRange)。
Get the cursor position of the input box after focusing on input or textarea, etc. Note: This interface is valid only if being called at focus. Currently, only vue pages are supported, and nvue can use weex's [getSelectionRange](https://weex.apache.org/zh/docs/components/input.html#getSelectionRange).

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 2.8.12+|HBuilderX 2.8.12+|基础库 2.7.0+|x|x|x|x|√|x|

**OBJECT 参数说明：**
**OBJECT parameter description:**

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
| Parameter name| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明：**
**Success return parameter description:**

| 属性 | 类型 | 说明 |
| Attribute| Type| Instruction|
| --- | --- | --- |
| start | Number | 输入框光标起始位置 |
| start| Number| Initial position of the cursor in the input box|
| end | Number | 输入框光标结束位置 |
| end| Number| End position of the cursor in the input box|

**示例代码**
**Sample code**

```js
uni.getSelectedTextRange({
  success: res => {
    console.log('getSelectedTextRange res', res.start, res.end)
  }
})
```
