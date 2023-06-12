App/小程序/网站做好后，如何告知你的用户？
After the app/mini program/website is ready, how do you inform your users?

你需要为自己的业务制作一个名片，名片上统一展现：App 的下载地址、小程序二维码、H5访问链接等，也就是“统一发布页”。
You need to make a business card for your business, and the business card is displayed uniformly: the download address of the app, the QR code of the applet, the H5 access link, etc., that is, the "unified release page".

而你自己从头开发这么一个发行平台，需要考虑的事情太多了：
And when you develop such a distribution platform from scratch, there are too many things to consider:

- 响应式布局，兼容PC/Mobile各种尺寸
- Responsive layout, compatible with various sizes of PC/Mobile
- 微信/微博浏览器判断不同逻辑，右上角提示通过浏览器打开
- Wechat/Weibo browsers judge different logics, and the upper right corner prompts to open through the browser
- PC上制作二维码，方便用户直接扫码下载
- Make a QR code on the PC, which is convenient for users to scan the code to download directly
- 如果小程序有多个版本，微信、支付宝、百度、QQ、快应用，那搞起来。。。
- If there are multiple versions of the applet, WeChat, Alipay, Baidu, QQ, and Kuaishou, let's do it. . .

别急，有了`uni-portal`统一发布页，一切迎刃而解，10分钟内搞定所有。
Don't worry, with the `uni-portal` unified release page, everything can be solved within 10 minutes.

眼见为实，`uni-app`官方示例的发布页就是基于`uni-portal`制作的，快速体验[hello uni-app发布页](https://hellouniapp.dcloud.net.cn/portal)。
Seeing is believing, the release page of the official example of `uni-app` is based on `uni-portal`. Quickly experience the [hello uni-app release page](https://hellouniapp.dcloud.net.cn/portal).

`uni-portal`目前已内置在`uni-admin`项目中。
`uni-portal` is currently built into the `uni-admin` project.

管理员在`uni-admin`的“应用管理”模块，创建应用并完善相关应用信息（如apk下载地址、小程序二维码）后，点击“发布页管理”，即可生成该应用的发布页。
After the administrator creates an application and completes the relevant application information (such as apk download address, applet QR code) in the "Application Management" module of `uni-admin`, click "Release Page Management" to generate the release of the application Page.

`uni-portal` 统一发布页面是响应式的，兼容PC宽屏和手机窄屏。
The `uni-portal` unified publishing page is responsive, compatible with PC widescreen and mobile narrowscreen.

- **PC宽屏**
- **PC widescreen**

  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-portal-pc.png" style="max-width:800px !important"></img>

- **手机窄屏**
- **Narrow screen for mobile phones**

手机浏览器上，默认展示效果如下：
On mobile browsers, the default display effect is as follows:

  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-portal-mobile.png" style="max-width:400px !important"></img>

`uni-portal`统一发布页同时会识别当前浏览器环境，在微信等特殊浏览器上，自动提示“点击右上角菜单，在浏览器中打开”，效果如下：
The `uni-portal` unified publishing page will also recognize the current browser environment. On special browsers such as WeChat, it will automatically prompt "click the menu in the upper right corner to open in the browser", the effect is as follows:

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-portal-mp.jpg" style="max-width:400px !important"></img>