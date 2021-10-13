### getApp()

```getApp()``` 函数用于获取当前应用实例，一般用于获取globalData 。

**实例**

```javascript
const app = getApp()
console.log(app.globalData) 
```

**注意：**
- 不要在定义于 `App()` 内的函数中，或调用 `App` 前调用 `getApp()` ，可以通过 `this.$scope` 获取对应的app实例
- 通过 `getApp()` 获取实例之后，不要私自调用生命周期函数。
- v3模式加速了首页`nvue`的启动速度，当在首页`nvue`中使用`getApp()`不一定可以获取真正的`App`对象。对此v3版本提供了`const app = getApp({allowDefault: true})`用来获取原始的`App`对象，可以用来在首页对`globalData`等初始化

uni-app自带的web-view组件，是页面中新插入的一个子webview。获取该对象的方法见：[https://ask.dcloud.net.cn/article/35036](https://ask.dcloud.net.cn/article/35036)