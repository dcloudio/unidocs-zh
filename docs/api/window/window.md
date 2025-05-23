## getCurrentPages()

```getCurrentPages()``` 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。

<!-- UNIAPPAPIJSON.getCurrentPages.compatibility -->

**注意：** ``getCurrentPages()``仅用于展示页面栈的情况，请勿修改页面栈，以免造成页面状态错误。

每个页面实例的方法属性列表：

|方法|描述|平台说明|
|---|---|---|
|page.$getAppWebview()|获取当前页面的webview对象实例|App|
|page.$vm|当前页面的 Vue 实例||
|page.route|获取当前页面的路由|&nbsp;|

**注意：**
* ``navigateTo``, ``redirectTo`` 只能打开非 tabBar 页面。
* ``switchTab`` 只能打开 ``tabBar`` 页面。
* ``reLaunch`` 可以打开任意页面。
* 页面底部的 ``tabBar`` 由页面决定，即只要是定义为 ``tabBar`` 的页面，底部都有 ``tabBar``。
* 不能在首页 ```onReady``` 之前进行页面跳转。
* 使用`选项式 API` 时，不可创建 `route` 响应式变量，否则会覆盖当前 `page 实例` 的 `route` 属性。

## $getAppWebview()

```uni-app``` 在 ```getCurrentPages()```获得的页面里内置了一个方法 ```$getAppWebview()``` 可以得到当前webview的对象实例，从而实现对 webview 更强大的控制。在 html5Plus 中，plus.webview具有强大的控制能力，可参考：[WebviewObject](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject)。

但`uni-app`框架有自己的窗口管理机制，请不要自己创建和销毁webview，如有需求覆盖子窗体上去，请使用[原生子窗体subNvue](/api/window/subNVues)。

**注意：此方法仅 App-Vue 支持**

**示例：**

获取当前页面 webview 的对象实例
```javascript
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {
    // #ifdef APP-PLUS
    const currentWebview = this.$scope.$getAppWebview(); //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
    currentWebview.setBounce({position:{top:'100px'},changeoffset:{top:'0px'}}); //动态重设bounce效果
    // #endif
  }
}
```

获取指定页面 webview 的对象实例

`getCurrentPages()`可以得到所有页面对象，然后根据数组，可以取指定的页面webview对象
```javascript
var pages = getCurrentPages();
var page = pages[pages.length - 1];
// #ifdef APP-PLUS
var currentWebview = page.$getAppWebview();
console.log(currentWebview.id);//获得当前webview的id
console.log(currentWebview.isVisible());//查询当前webview是否可见
// #endif
```

uni-app自带的web-view组件，是页面中新插入的一个子webview。获取该对象的方法见：[https://ask.dcloud.net.cn/article/35036](https://ask.dcloud.net.cn/article/35036)


## $vm

当前页面的 Vue 实例

通过页面的 Vue 实例可以获取页面的数据、调用页面上的方法以及监听页面的生命周期等

```js
const page = getCurrentPages()[0];
const vm = page.$vm;
// 监听生命周期，小程序端部分其他生命周期需在页面选项中配置过才可生效
vm.$on('hook:onHide', () => {
  console.log('onHide');
});
// 获取页面数据
console.log(vm.$data.title);
// 调用页面方法
vm.test()
```
