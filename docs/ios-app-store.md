#### App Store上架

>再次说明：uni-app并不是简单的使用Webview套壳，Webview仅负责vue页面的UI渲染，nvue页面则完全由原生UI渲染，业务逻辑代码是运行在独立的JS引擎（JSCore）中，并且封装了很多JS API调用原生能力（OC代码实现），完全可以上架苹果应用市场。

苹果App Store上架审核规范比较细，提交审核前建议仔细阅读苹果官方[App Store审核指南](https://developer.apple.com/cn/app-store/review/guidelines/)。

需要注意以下问题：
- 应用功能不能过于简单
- 应用功能不能跟已经上架的应用相似，就是不能做马甲包

**使用广告标识（IDFA）相关说明：**[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)

**UIWebview API 已废弃：**[https://ask.dcloud.net.cn/article/36348](https://ask.dcloud.net.cn/article/36348)