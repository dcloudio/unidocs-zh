### uni.onWindowResize(CALLBACK)
监听窗口尺寸变化事件
listen to window size change events

> 1.6.0 新增
> 1.6.0 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序	|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|
|App|H5|WeChat applet |Alipay applet|Baidu applet|ByteDance applet|Feishu applet|QQ applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√(nvue不支持)|√|√|x|x|x|√|√|
|√(nvue does not support)|√|√|x|x|x|√|√|

**CALLBACK 参数说明**
**CALLBACK parameter description**

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|size|Object|变化后的窗口的大小，单位为 px ，{windowWidth,windowHeight}|
| size| Object| The size of the changed window, in px, {windowWidth,windowHeight}|

**代码示例**
**Code example**

```javascript
const windowResizeCallback = (res) => {
  console.log('变化后的窗口宽度=' + res.size.windowWidth)
  console.log('变化后的窗口高度=' + res.size.windowHeight)
}
uni.onWindowResize(windowResizeCallback)
```

**TIPS**
- 如App端设置软键盘弹出方式为adjustResize ，则在键盘弹出时，会触发此事件。
- If the App side sets the soft keyboard pop-up mode to adjustResize, this event will be triggered when the keyboard pops up.
- 横竖屏切换时，会触发此事件。
- This event will be triggered when the screen is switched between portrait and landscape.

### uni.offWindowResize(CALLBACK)
取消监听窗口尺寸变化事件
Cancel listening to window size change events

> 1.6.0 新增
> 1.6.0 New

平台差异说明
Platform difference description

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet|Feishu applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|x|x|x|√|

**Tips**
- `CALLBACK`为调用`uni.onWindowResize`时传入的`CALLBACK`
- `CALLBACK` is the `CALLBACK` passed in when calling `uni.onWindowResize`

**代码示例**
**Code example**

```javascript
uni.offWindowResize(windowResizeCallback)
```
