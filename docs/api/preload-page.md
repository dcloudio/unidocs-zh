#### uni.preloadPage(OBJECT)

预加载页面，是一种性能优化技术。被预载的页面，在打开时速度更快。
Page pre-loading is a performance optimization technology. The preloaded pages can be opened faster.

**平台差异说明**
**Platform difference description**

|App-nvue|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|
|App-nvue|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√(2.7.12+)|√(2.7.12+)|x|x|x|x|x|


|属性|类型|必填|说明|
| Attribute| Type| Required| Instruction|
|:-:|:-:|:-:|:-:|
|url|string|是|预加载页面url|
|success|Function|否|预加载成功完成回调|
|fail|Function|否|预加载失败回调|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|


#### H5 平台
#### H5 platform

预加载 /pages/test/test 对应的js文件，不执行页面预渲染逻辑
Preload the js file corresponding to /pages/test/test without executing the page pre-rendering logic
```js
uni.preloadPage({url: "/pages/test/test"});
```

#### App-nvue 平台
#### App-nvue platform

预加载nvue页面 /pages/test/test
Preload nvue page /pages/test/test
```js
uni.preloadPage({url: "/pages/test/test"});
```

注意事项
Precautions
1. App平台仅支持预加载 nvue 页面，执行页面预渲染，预载时触发生命周期 `onLoad`，`onReady`，不触发 `onShow`
1. App platform only supports preloading nvue pages, performing page pre-rendering, and triggering life cycles `onLoad` and `onReady` without triggering `onShow`
2. 打开新页面时，url 完全相同（包含参数）时，优先使用预加载页面，触发生命周期 onShow
2. When a new page is opened with exactly same url (including parameters), the preloaded page is preferentially used, triggering the life cycle onShow
3. tabbar页面，仅支持预加载尚未显示过的页面，否则返回 fail，提示 already exists
3. The tabbar page only supports preloading pages that have not yet been displayed, otherwise it will return fail, prompting already exists
4. 同一时间，相同 url 仅 preloadPage 一次
4. preloadPage is applied to the same url only once at a time
5. 当同一个预载页面已被打开(在路由栈)，再次打开相同url时，不再使用该预加载页面，而是打开新的非预载页面
5. If the same preloaded page was opened (in the routing stack), and when the same url is opened again, a new non-preloaded page will be opened other than the preloaded page
6. `uni.reLanuch`, `uni.switchTab`, `uni.navigateBack`(含Android返回键) 切换页面时，预加载页面不会被销毁，仅触发生命周期 `onHide`
6. When switching the pages of `uni.reLanuch`, `uni.switchTab` and `uni.navigateBack` (including Android return key), the preloaded pages will not be destroyed, and the life cycle `onHide` will be triggered only
7. 在预载页面使用 `uni.redirectTo` 时，预加载页面会被销毁，触发生命周期 `onUnload`
7. When using `uni.redirectTo` on the preloaded page, the preload page will be destroyed, triggering the life cycle `onUnload`

示例
Example
```js
uni.preloadPage({url: "/pages/test/test"}); // 预加载 /pages/test/test 页面（仅触发onLoad，onReady)
uni.navigateTo({url: "/pages/test/test"}); // url匹配，跳转预加载页面（仅触发onShow)
uni.navigateTo({url: "/pages/test/test?a=b"}); // url不匹配，正常打开新页面
```

HBuilderX 2.7.12+的hello uni-app，在navigator示例和uni ui的日历示例中增加了页面预载示例。
hello uni-app of HBuilderX 2.7.12+ adds a page preload example to the navigator example and the calendar example of uni ui.

#### uni.unPreloadPage(OBJECT)

取消预载页面。
Cancel the preload page.

1. 仅App-nvue支持
1. Only supported in App-nvue
2. 当预载页面未被打开时，使用 `unPreloadPage`时会销毁该页面，触发生命周期 `onUnload`
2. When the preloaded page is not opened, the page will be destroyed when using `unPreloadPage`, and the life cycle `onUnload` will be triggered
3. 当预载页面已被打开时，使用 `unPreloadPage`时不销毁该页面，但该预加载页面不再继续存在，会随着路由变化而销毁
3. When the preloaded page has been opened, the page will not be destroyed when using `unPreloadPage`. However, the preloaded page will no longer exist and will be destroyed as the route changes
