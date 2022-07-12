## 使用 HBuilderX 内置浏览器调试 H5@h5-debug-hx

打开 `uni-app` 项目的页面，点 HBuilderX 右上角的预览按钮，可以在内置浏览器里打开 H5 运行结果，也可以点右键打开控制台调试。

修改保存工程源码时，右边的浏览器内容可以自动刷新。

在 HBuilderX 控制台里，可以直接看到内置浏览器打印的日志。

打开内置浏览器的控制台的 `Sources` 栏，可以给 js 打断点调试。

在 `Page` 下找到 `webpack` 里的工程目录，可直接找到对应的`vue`页面进行断点调试；或按 `Ctrl+P`搜文件名，进入页面调试；也可点击控制台的 `log` 信息，进入对应的页面进行调试。

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/56abde90-4f34-11eb-8a36-ebb87efcf8c0.png)

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/5762ab70-4f34-11eb-bdc1-8bd33eb6adaa.png)

`点击工具栏的运行 -> 运行到浏览器 -> 选择 Chrome`，也可将 `uni-app`运行到 浏览器，可参考 [运行 uni-app](/quickstart?id=运行uni-app)。