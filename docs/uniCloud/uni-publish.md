# uni-publish 统一发布页

### 为什么需要uni-publish 统一发布页？

App/小程序/网站做好后，如何告知你的用户？

你需要开发App的下载页、小程序二维码的展示页面，这些内容最好汇总在统一入口，也就是发行平台。

自己从头开发这么一个发行平台，需要考虑的事情太多了：
- 响应式布局，兼容PC/Mobile各种尺寸
- 微信/微博浏览器判断不同逻辑，右上角提示通过浏览器打开
- PC上制作二维码，方便用户直接扫码下载
- 如果小程序有多个版本，微信、支付宝、百度、QQ、快应用，那搞起来。。。

别急，有了`uni-publish 统一发布页`，一切迎刃而解，10分钟内搞定所有。

### 概述

`uni-publish 统一发布页`分为管理端和用户端两个插件：

- 管理端：作为`uni-admin`的插件，通过表单的形式，在线录入App安装包下载地址、上传小程序二维码；插件地址为：[https://ext.dcloud.net.cn/plugin?id=6690](https://ext.dcloud.net.cn/plugin?id=6690)
- 用户端：将App下载/小程序二维码展示/H5链接等信息统一展示，智能判断运行环境，给出引导（如微信浏览器下，右上角提示通过浏览器打开），插件地址为：[https://ext.dcloud.net.cn/plugin?id=6860](https://ext.dcloud.net.cn/plugin?id=6860)

`uni-publish 统一发布页`具有如下特征：

- 基于 `uni-app` & `uniCloud` 实现
- 数据库设计遵循 [opendb 规范](opendb.md)
- 管理端遵循 [uni-admin 插件规范](/uniCloud/admin)，可直接导入 `Admin` 项目中

### 使用

统一发布门户分为两个部分：`uni-publish 统一发布页 - 管理端` 和 `uni-publish 统一发布页 - 用户端`

> 前台展示页面需要使用前端托管或部署到服务器

#### uni-publish 统一发布页 - 管理端

负责应用发布信息的管理。

<div align="left">
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-manager-list.png" alt="统一发布门户管理" width="800"></img>
</div>

提供了如下功能：

- 云储存安装包 CDN 加速，使安装包下载的更快、更稳定

- 应用发布，填写 App 发布信息，可选发布与暂存

- 应用发布管理，包括对 更新标题，版本内容，App 下载信息，小程序上架信息，H5 等灵活修改，实时线上更新

- 与 `升级中心` 的数据联动

在插件市场安装，根据 readme 部署即可。[插件地址](https://ext.dcloud.net.cn/plugin?id=6690)

#### uni-publish 统一发布页 - 用户端

负责对所填写应用发布信息的展示与正确引导下载方式。

<div align="left" style="display:flex;align-items:center;">
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-pc.png" height="400"></img>
	<img style="margin-left:20px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-mobile.png" height="400"></img>
	<img style="margin-left:20px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-app-desc.png" height="400"></img>
	<img style="margin-left:20px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-portal-mp.jpg" height="400"></img>
</div>


提供了如下功能：

- 基于 `uni-publish 统一发布页 - 管理端` 填写数据，实时请求展示 App 上线详情信息

- 自由组合展示顺序

- 自动判断浏览器环境进行提示

- 实时生成当前页面、应用下载二维码，方便手机扫码访问、下载

- 多版本灵活展示，多平台适配

> 注：https://m3w.cn/uniapp 将会在三个月之后关闭。

在插件市场安装，根据 readme 部署即可。[插件地址](https://ext.dcloud.net.cn/plugin?id=6691)
