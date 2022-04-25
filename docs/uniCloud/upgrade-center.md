# App升级中心 uni-upgrade-center

### 概述

App升级中心 uni-upgrade-center，提供了 App 的版本更新服务。包括
- Android、iOS的完整App安装包升级和wgt资源包增量更新
- 后台管理系统，用于发布新版、设置升级策略

> 如果需要初次发布，而不是升级，另见产品[uni-portal 统一发布页](https://ext.dcloud.net.cn/plugin?id=7100)

本产品具有如下特征：

- 开源、免费。由于uniCloud阿里云版目前免费，包括服务器和cdn均免费。

- 云端基于 [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/) 实现。后台管理是 [uni-admin](https://uniapp.dcloud.net.cn/uniCloud/admin.html) 框架的插件。

- 数据库遵循 [opendb](https://uniapp.dcloud.net.cn/uniCloud/opendb.html) 规范

### 为什么需要升级中心？

每个App开发者都要开发升级功能，这是巨大的社会资料浪费。DCloud推出 uni-upgrade-center，让应用开发更轻松、高效，让开发者专注于自己的业务。

### 使用

升级中心分为两个部分：`uni-upgrade-center Admin管理后台`和`uni-upgrade-center-app前台检测更新`。

#### uni-upgrade-center Admin 管理后台

负责发布新版和管理历史版本的上下线。

<div align="left">
	<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/c80f143d-a05b-493b-9db0-e87398a180b8.png" alt="发布完成页面" width="800"></img>
</div>

提供了如下功能：

- 云储存安装包CDN加速，使安装包下载的更快、更稳定

- 应用管理，对 App 的信息记录和应用版本管理

- 版本管理，可以发布新版，也可方便直观的对当前 App 历史版本以及线上发行版本进行查看、编辑和删除操作

- 版本发布信息管理，包括 更新标题，更新内容，版本号，静默更新，强制更新，灵活上线发行 的设置和修改

- 原生 App 安装包，发布 Apk 更新，用于 App 的整包更新，可设置是否强制更新

- wgt 资源包，发布 wgt 更新，用于 App 的热更新，可设置是否强制更新，静默更新

- App 管理列表及 App 版本记录列表搜索

在插件市场安装，根据 readme 部署即可。[插件地址](https://ext.dcloud.net.cn/plugin?id=4470)

#### uni-upgrade-center-app 前台检测更新

负责前台检查升级更新。

<div align="left" style="display:flex;align-items:center;">
	<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/b47b89ad-1b81-45db-8115-d246fb5ca906.jpg" alt="官方升级弹框样式" width="250"></img>
	<img style="margin-left:20px;" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/9e2d38af-90e5-47fb-8a18-d2a76e7ae2b4.jpg" alt="使用uni.showModal自定义弹框" width="250"></img>
</div>

提供了如下功能：

- 基于`uni-upgrade-center`一键式检查更新，统一整包与 wgt 资源包更新

- 自行根据传参完成校验，判断此次更新使用哪种方式

- 一键式升级。弹框、下载、安装、是否强制重启等逻辑已集成

- 下载完成如果取消升级自动缓存安装包，下次进入判断是否符合安装条件，判断不通过则自动清除

- 美观，实用，可自定义扩展

在插件市场安装，根据 readme 部署即可。[插件地址](https://ext.dcloud.net.cn/plugin?id=4542)
