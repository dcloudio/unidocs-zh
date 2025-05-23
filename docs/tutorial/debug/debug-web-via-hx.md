## HBuilderX 内置浏览器运行 web

打开 `uni-app` 项目的页面，点 HBuilderX 右上角的`预览`按钮，可以在内置浏览器里打开 Web 运行结果，也可以点右键打开控制台调试。

修改保存工程源码时，右边的浏览器内容可以自动刷新。

在 HBuilderX 控制台里，可以直接看到内置浏览器打印的日志。

点击日志，可以直接跳转到对应的代码处。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/consolelogjump.jpg)

注意浏览器控制台打印的日志无法转到代码，只有HBuilder控制台打印的才能转到代码。而运行到外部浏览器是没有这个功能的。只有HBuilder内置浏览器才可以。

## 同步断点@h5-debug-hx

HBuilder中有2种断点调试方案，一种是使用浏览器自带的调试控制台；一种是使用HBuilderX的调试控制台。

在HBuilderX内置浏览器中，可以使用HBuilderX内置浏览器的控制台。此时无需点击运行控制台的红色虫子按钮。

对源码点右键，可以同步断点到内置浏览器的调试工具，调试方法同chrome通行的用法。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/syncbreakpoint.jpg)

关于另一种使用HBuilderX的调试控制台的方案，[另见](/tutorial/debug/debug-web-via-chrome.md#h5-debug)