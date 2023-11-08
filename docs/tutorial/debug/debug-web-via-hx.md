## HBuilderX 内置浏览器运行 web
## HBuilderX built-in browser to run web

打开 `uni-app` 项目的页面，点 HBuilderX 右上角的`预览`按钮，可以在内置浏览器里打开 Web 运行结果，也可以点右键打开控制台调试。
Open the `uni-app` project page, click the `Preview` button in the upper right corner of HBuilderX, you can open the web running result in the built-in browser, or you can right-click to open the console debugging.

修改保存工程源码时，右边的浏览器内容可以自动刷新。
When modifying and saving the project source code, the content of the browser on the right can be automatically refreshed.

在 HBuilderX 控制台里，可以直接看到内置浏览器打印的日志。
In the HBuilderX console, you can directly see the logs printed by the built-in browser.

点击日志，可以直接跳转到对应的代码处。
Click the log to jump directly to the corresponding code.

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/consolelogjump.jpg)

注意浏览器控制台打印的日志无法转到代码，只有HBuilder控制台打印的才能转到代码。而运行到外部浏览器是没有这个功能的。只有HBuilder内置浏览器才可以。
Note that the log printed by the browser console cannot be transferred to the code, only the log printed by the HBuilder console can be transferred to the code. Running to an external browser does not have this feature. Only HBuilder built-in browser can.

## 同步断点@h5-debug-hx
## Synchronous breakpoints @h5-debug-hx

HBuilder中有2种断点调试方案，一种是使用浏览器自带的调试控制台；一种是使用HBuilderX的调试控制台。
There are two breakpoint debugging solutions in HBuilder, one is to use the debugging console that comes with the browser; the other is to use the debugging console of HBuilderX.

在HBuilderX内置浏览器中，可以使用HBuilderX内置浏览器的控制台。此时无需点击运行控制台的红色虫子按钮。
In the HBuilderX built-in browser, the console of the HBuilderX built-in browser can be used. No need to hit the red bug button that runs the console at this point.

对源码点右键，可以同步断点到内置浏览器的调试工具，调试方法同chrome通行的用法。
Right-click on the source code, you can synchronize the breakpoint to the debugging tool of the built-in browser, and the debugging method is the same as the common usage of chrome.

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/syncbreakpoint.jpg)

关于另一种使用HBuilderX的调试控制台的方案，[另见](h5-debug.md)
For another solution using HBuilderX's debug console, [see also](h5-debug.md)