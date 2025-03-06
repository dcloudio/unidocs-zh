## uni.hideKeyboard()

隐藏软键盘

隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|x|√|√|√|√|1.0.4+|

<!-- UNIAPPAPIJSON.hideKeyboard.compatibility -->

## uni.onKeyboardHeightChange(CALLBACK) @onkeyboardheightchange

监听键盘高度变化

**平台差异说明**

|App|HarmonyOS Next|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 2.2.3+|HBuilderX 4.23|x|基础库2.7+|HBuilderX 3.6.8+|x|x|√|√|√|1.0.4+|

**参数**

function listener

键盘高度变化事件的监听函数

**参数**

Object res

|参数|类型|说明|
|:-|:-|:-|
|height|Number|键盘高度|

**示例代码**

```js
uni.onKeyboardHeightChange(res => {
  console.log(res.height)
})
```

## uni.offKeyboardHeightChange(CALLBACK) @offkeyboardheightchange

取消监听键盘高度变化事件

**平台差异说明**

|App|HarmonyOS Next|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 3.1.0+|HBuilderX 4.23|x|基础库2.9.2+|HBuilderX 3.6.8+|x|x|x|x|√|x|

**参数**

function listener

onKeyboardHeightChange 传入的监听函数。不传此参数则移除所有监听函数。


**示例代码**

```js
const listener = function (res) { console.log(res) }

uni.onKeyboardHeightChange(listener)
uni.offKeyboardHeightChange(listener) // 需传入与监听时同一个的函数对象
```

## uni.getSelectedTextRange(OBJECT) @getselectedtextrange

在input、textarea等focus之后，获取输入框的光标位置。注意：只有在focus的时候调用此接口才有效。目前仅支持 vue 页面，nvue 可以直接使用 weex 的 [getSelectionRange](https://weex.apache.org/zh/docs/components/input.html#getSelectionRange)。

**平台差异说明**

|App|HarmonyOS Next|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 2.8.12+|x|HBuilderX 2.8.12+|基础库 2.7.0+|x|x|x|x|√|x|1.0.4+|

**OBJECT 参数说明：**

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

**success 返回参数说明：**

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| start | Number | 输入框光标起始位置 |
| end | Number | 输入框光标结束位置 |

**示例代码**

```js
uni.getSelectedTextRange({
  success: res => {
    console.log('getSelectedTextRange res', res.start, res.end)
  }
})
```
