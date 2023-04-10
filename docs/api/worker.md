#### Worker

目前需分平台编写
Currently needs to be compiled by platform

- 微信小程序：[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/worker/wx.createWorker.html)
- WeChat Mini Program: [Specification Details](https://developers.weixin.qq.com/miniprogram/dev/api/worker/wx.createWorker.html)
- 支付宝小程序：[规范详情](https://opendocs.alipay.com/mini/api/worker)
- 字节跳动小程序：[规范详情](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/worker/tt-create-worker)
- QQ小程序：[规范详情](https://q.qq.com/wiki/develop/miniprogram/API/worker/worker.html)
- QQ Mini Program: [Specification Details](https://q.qq.com/wiki/develop/miniprogram/API/worker/worker.html)
- H5：标准H5的worker仍然可以使用
- App：
  * App的js是在独立的jscore运行的，如果需要在另一个线程运行js，可以使用web-view组件或renderjs，这样的js运行在webview里，和jscore里的js是两个线程。但注意多个webview之间的js是一个进程，使用webview里的js时注意会影响视图层的渲染。
  * App's js runs in an independent jscore. If you need to run js in another thread, you can use the web-view component or renderjs. Such js runs in webview, and the js in jscore is two threads. But note that the js between multiple webviews is a process, and when using the js in the webview, it will affect the rendering of the view layer.
  * 另外插件市场也有原生插件用于多线程，[详见](https://ext.dcloud.net.cn/search?q=%E5%A4%9A%E7%BA%BF%E7%A8%8B)
  * In addition, the plug-in market also has native plug-ins for multi-threading, [see](https://ext.dcloud.net.cn/search?q=%E5%A4%9A%E7%BA%BF%E7%A8% 8B)
