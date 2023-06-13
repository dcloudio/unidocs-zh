### uni.onWindowResize(CALLBACK)
监听窗口尺寸变化事件

> 1.6.0 新增

**平台差异说明**

|App|H5|微信小程序	|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|x|x|x|√|√|

**CALLBACK 参数说明**

|属性|类型|说明|
|---|---|---|
|size|Object|变化后的窗口的大小，单位为 px ，{windowWidth,windowHeight}|

**代码示例**

```javascript
const windowResizeCallback = (res) => {
  console.log('变化后的窗口宽度=' + res.size.windowWidth)
  console.log('变化后的窗口高度=' + res.size.windowHeight)
}
uni.onWindowResize(windowResizeCallback)
```

**TIPS**
- 如App端设置软键盘弹出方式为adjustResize ，则在键盘弹出时，会触发此事件。
- 横竖屏切换时，会触发此事件。

### uni.offWindowResize(CALLBACK)
取消监听窗口尺寸变化事件

> 1.6.0 新增

平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|x|x|x|√|

**Tips**
- `CALLBACK`为调用`uni.onWindowResize`时传入的`CALLBACK`

**代码示例**

```javascript
uni.offWindowResize(windowResizeCallback)
```
