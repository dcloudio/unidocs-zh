## 使用各家小程序开发工具调试@mp-debug
## Debugging @mp-debug using various applet development tools

`uni-app` 运行到微信、阿里等平台的小程序开发者工具时，可在这些工具的控制台查看 `console` 信息，网络请求等信息等。
When `uni-app` runs to the applet developer tools of WeChat, Ali and other platforms, you can view the `console` information, network request and other information in the console of these tools.

页面样式调试和一般的`web`项目一样，通过调试的箭头选中元素即可查看相应的节点和样式，如下图：
The page style debugging is the same as the general `web` project. You can view the corresponding nodes and styles by selecting the element through the debugging arrow, as shown below:

![uni-app](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/debug1.png)

调试 `js` 时需要切换到 `Sources` 栏，根据 sourcemap，找到 `webpack` 里正确的目录，选中想要调试的那个页面的`js`，进行调试（如果`js`代码是压缩过的，点击右下角的{}可格式化代码），如下图：
When debugging `js`, you need to switch to the `Sources` column, find the correct directory in `webpack` according to the sourcemap, select the `js` of the page you want to debug, and debug (if the `js` code is compressed, Click {} in the lower right corner to format the code), as shown below:

![uni-app](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/debug2.png)