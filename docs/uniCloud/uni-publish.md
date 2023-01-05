# uni-publish 统一发布页
# uni-publish Uni-publish page

### 为什么需要uni-publish 统一发布页？
### Why do you need a uni-publish unified publishing page?

App/小程序/网站做好后，如何告知你的用户？
After the app/mini program/website is ready, how do you inform your users?

你需要开发App的下载页、小程序二维码的展示页面，这些内容最好汇总在统一入口，也就是发行平台。
You need to develop the download page of the app and the display page of the QR code of the applet. It is best to summarize these contents in the unified entrance, that is, the distribution platform.

自己从头开发这么一个发行平台，需要考虑的事情太多了：
To develop such a distribution platform from scratch, there are too many things to consider:
- 响应式布局，兼容PC/Mobile各种尺寸
- Responsive layout, compatible with various sizes of PC/Mobile
- 微信/微博浏览器判断不同逻辑，右上角提示通过浏览器打开
- Wechat/Weibo browsers judge different logics, and the upper right corner prompts to open through the browser
- PC上制作二维码，方便用户直接扫码下载
- Make a QR code on the PC, which is convenient for users to scan the code to download directly
- 如果小程序有多个版本，微信、支付宝、百度、QQ、快应用，那搞起来。。。
- If there are multiple versions of the applet, WeChat, Alipay, Baidu, QQ, and Kuaishou, let's do it. . .

别急，有了`uni-publish 统一发布页`，一切迎刃而解，10分钟内搞定所有。
Don't worry, with the `uni-publish unified publishing page`, everything can be solved easily, and everything can be done within 10 minutes.

### 概述
### Overview

`uni-publish 统一发布页`分为管理端和用户端两个插件：
The `uni-publish unified publishing page` is divided into two plugins: management side and user side:

- 管理端：作为`uni-admin`的插件，通过表单的形式，在线录入App安装包下载地址、上传小程序二维码；插件地址为：[https://ext.dcloud.net.cn/plugin?id=6690](https://ext.dcloud.net.cn/plugin?id=6690)
- Management terminal: As a plug-in of `uni-admin`, you can enter the download address of the App installation package and upload the QR code of the applet online in the form of a form; the plug-in address is: [https://ext.dcloud.net.cn/ plugin?id=6690](https://ext.dcloud.net.cn/plugin?id=6690)
- 用户端：将App下载/小程序二维码展示/H5链接等信息统一展示，智能判断运行环境，给出引导（如微信浏览器下，右上角提示通过浏览器打开），插件地址为：[https://ext.dcloud.net.cn/plugin?id=6860](https://ext.dcloud.net.cn/plugin?id=6860)
- Client side: unified display of App download/mini program QR code display/H5 link and other information, intelligently judge the operating environment, and give guidance (for example, under WeChat browser, the upper right corner prompts to open through the browser), the plug-in address is: [https://ext.dcloud.net.cn/plugin?id=6860](https://ext.dcloud.net.cn/plugin?id=6860)

`uni-publish 统一发布页`具有如下特征：
The `uni-publish unified publishing page` has the following characteristics:

- 基于 `uni-app` & `uniCloud` 实现
- Implemented based on `uni-app` & `uniCloud`
- 数据库设计遵循 [opendb 规范](opendb.md)
- Database design follows [opendb specification](opendb.md)
- 管理端遵循 [uni-admin 插件规范](/uniCloud/admin)，可直接导入 `Admin` 项目中
- The management side follows the [uni-admin plug-in specification](/uniCloud/admin), which can be directly imported into the `Admin` project

### 使用
### use

统一发布门户分为两个部分：`uni-publish 统一发布页 - 管理端` 和 `uni-publish 统一发布页 - 用户端`
The unified publishing portal is divided into two parts: `uni-publish unified publishing page - management side` and `uni-publish unified publishing page - user side`

> 前台展示页面需要使用前端托管或部署到服务器
> The front-end display page needs to be hosted or deployed to the server using the front-end

#### uni-publish 统一发布页 - 管理端
#### uni-publish unified publishing page - management side

负责应用发布信息的管理。
Responsible for the management of application publishing information.

<div align="left">
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-manager-list.png" alt="统一发布门户管理" width="800"></img>
</div>

提供了如下功能：
The following functions are provided:

- 云储存安装包 CDN 加速，使安装包下载的更快、更稳定
- CDN acceleration of cloud storage installation package, making installation package download faster and more stable

- 应用发布，填写 App 发布信息，可选发布与暂存
- App release, fill in the app release information, optional release and staging

- 应用发布管理，包括对 更新标题，版本内容，App 下载信息，小程序上架信息，H5 等灵活修改，实时线上更新
- Application release management, including flexible modification of update title, version content, App download information, applet listing information, H5, etc., and real-time online update

- 与 `升级中心` 的数据联动
- Data linkage with `Upgrade Center`

在插件市场安装，根据 readme 部署即可。[插件地址](https://ext.dcloud.net.cn/plugin?id=6690)
Install it in the plugin market and deploy it according to the readme. [Plugin address](https://ext.dcloud.net.cn/plugin?id=6690)

#### uni-publish 统一发布页 - 用户端
#### uni-publish Uni-publish page - client

负责对所填写应用发布信息的展示与正确引导下载方式。
Responsible for displaying the application release information filled in and correctly guiding the download method.

<div align="left" style="display:flex;align-items:center;">
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-pc.png" height="400"></img>
	<img style="margin-left:20px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-mobile.png" height="400"></img>
	<img style="margin-left:20px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-app-desc.png" height="400"></img>
	<img style="margin-left:20px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-mp.jpg" height="400"></img>
</div>


提供了如下功能：
The following functions are provided:

- 基于 `uni-publish 统一发布页 - 管理端` 填写数据，实时请求展示 App 上线详情信息
- Based on the `uni-publish unified publishing page - management terminal` fill in the data and request to display the details of the App launch in real time

- 自由组合展示顺序
- Free combination display order

- 自动判断浏览器环境进行提示
- Automatically determine the browser environment for prompting

- 实时生成当前页面、应用下载二维码，方便手机扫码访问、下载
- Generate QR code for current page and application download in real time, which is convenient for mobile phone scan code access and download

- 多版本灵活展示，多平台适配
- Multi-version flexible display, multi-platform adaptation

> 注：https://m3w.cn/uniapp 将会在三个月之后关闭。
> Note: https://m3w.cn/uniapp will be closed after three months.

在插件市场安装，根据 readme 部署即可。[插件地址](https://ext.dcloud.net.cn/plugin?id=6691)
Install it in the plugin market and deploy it according to the readme. [Plugin address](https://ext.dcloud.net.cn/plugin?id=6691)
