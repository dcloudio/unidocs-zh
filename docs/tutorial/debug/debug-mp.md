## 使用各家小程序开发工具调试@mp-debug

`uni-app` 运行到微信、阿里等平台的小程序开发者工具时，可在这些工具的控制台查看 `console` 信息，网络请求等信息等。

页面样式调试和一般的`web`项目一样，通过调试的箭头选中元素即可查看相应的节点和样式，如下图：

![uni-app](https://web-assets.dcloud.net.cn/unidoc/zh/debug1.png)

调试 `js` 时需要切换到 `Sources` 栏，根据 sourcemap，找到 `webpack` 里正确的目录，选中想要调试的那个页面的`js`，进行调试（如果`js`代码是压缩过的，点击右下角的{}可格式化代码），如下图：

![uni-app](https://web-assets.dcloud.net.cn/unidoc/zh/debug2.png)