App/小程序/网站做好后，如何告知你的用户？

你需要为自己的业务制作一个名片，名片上统一展现：App 的下载地址、小程序二维码、H5访问链接等，也就是“统一发布页”。

而你自己从头开发这么一个发行平台，需要考虑的事情太多了：

- 响应式布局，兼容PC/Mobile各种尺寸
- 微信/微博浏览器判断不同逻辑，右上角提示通过浏览器打开
- PC上制作二维码，方便用户直接扫码下载
- 如果小程序有多个版本，微信、支付宝、百度、QQ、快应用，那搞起来。。。

别急，有了`uni-portal`统一发布页，一切迎刃而解，10分钟内搞定所有。

眼见为实，`uni-app`官方示例的发布页就是基于`uni-portal`制作的，快速体验[hello uni-app发布页](https://hellouniapp.dcloud.net.cn/portal)。

`uni-portal`目前已内置在`uni-admin`项目中。

管理员在`uni-admin`的“应用管理”模块，创建应用并完善相关应用信息（如apk下载地址、小程序二维码）后，点击“发布页管理”，即可生成该应用的发布页。

`uni-portal` 统一发布页面是响应式的，兼容PC宽屏和手机窄屏。

- **PC宽屏**

  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-pc.png" style="max-width:800px !important"></img>

- **手机窄屏**

手机浏览器上，默认展示效果如下：

  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-mobile.png" style="max-width:400px !important"></img>

`uni-portal`统一发布页同时会识别当前浏览器环境，在微信等特殊浏览器上，自动提示“点击右上角菜单，在浏览器中打开”，效果如下：

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-mp.jpg" style="max-width:400px !important"></img>