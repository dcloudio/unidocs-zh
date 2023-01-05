## App升级中心 uni-upgrade-center

### 概述

App升级中心 uni-upgrade-center，提供了 App 的版本更新服务。包括
- Android、iOS的完整App安装包升级和wgt资源包增量更新
- 后台管理系统，用于发布新版、设置升级策略

> 如果需要初次发布，而不是升级，另见产品 [uni-portal 统一发布页](uni-portal.md)

本产品具有如下特征：

- 开源、免费。由于uniCloud阿里云版目前免费，包括服务器和cdn均免费。

- 云端基于 [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/) 实现。后台管理是 [uni-admin](https://uniapp.dcloud.net.cn/uniCloud/admin.html) 框架的插件。

- 数据库遵循 [opendb](https://uniapp.dcloud.net.cn/uniCloud/opendb.html) 规范

### 为什么需要升级中心？

每个App开发者都要开发升级功能，这是巨大的社会资料浪费。DCloud推出 uni-upgrade-center，让应用开发更轻松、高效，让开发者专注于自己的业务。

### 使用

升级中心分为两个部分：`uni-upgrade-center Admin管理后台` 和 `uni-upgrade-center-app前台检测更新`。

#### uni-upgrade-center Admin 管理后台

> 在 uni-admin 1.9.3+ 中已作为内置插件。在应用管理新增应用后，即可在 `App升级中心` 发布该应用的版本

负责发布新版和管理历史版本的上下线。提供了如下功能：

- 云储存安装包CDN加速，使安装包下载的更快、更稳定

- 应用管理，对 App 的信息记录和应用版本管理

- 版本管理，可以发布新版，也可方便直观的对当前 App 历史版本以及线上发行版本进行查看、编辑和删除操作

- 版本发布信息管理，包括 更新标题，更新内容，版本号，静默更新，强制更新，灵活上线发行 的设置和修改

- 原生 App 安装包，发布 Apk 更新，用于 App 的整包更新，可设置是否强制更新

- wgt 资源包，发布 wgt 更新，用于 App 的热更新，可设置是否强制更新，静默更新

- App 管理列表及 App 版本记录列表搜索

**版本管理**

1. 在版本管理list的右上角点击`发布新版`，可以发布`原生App安装包`和`wgt资源包`。在左上角点击`下拉列表`，可以切换展示应用。

<div align="center">
<img src="https://web-assets.dcloud.net.cn/unidoc/zh/version_list_new.png" width="800"></img>
</div>

- 发布原生App安装包
	1. 在上传安装包界面填写此次发版信息

	<div align="center" >
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/publish_apk.jpg" width="600"></img>
	</div>

  1. `Android应用市场`
		- 此处会与 `新增应用` 时填写的 `Android应用市场` 信息保持同步。当在应用管理修改应用信息时，这里也会修改
		- 启用商店：当勾选某一商店启用时，在 `upgrade-center-app` 端会检测手机上是否有该应用市场
    		- 如果有，则会跳转至该应用商店进行 App 升级
    		- 如果都跳转失败，最后会使用填写的 `下载链接` 下载 apk 安装包升级
		- 优先级：检查更新时，按照优先级从大到小依次尝试跳转商店

	1. `下载链接/AppStore`
		- 可以选择手动上传一个文件到 `云存储`，会自动将地址填入该项
		- 也可以手动填写一个地址，就可以不用再上传文件
		- 如果是发布`苹果`版本，包地址则为 应用在`AppStore的链接`
		
	2. `强制更新`
		- 如果使用强制更新，App端接收到该字段后，App升级弹出框不可取消
		
	4. `上线发行`
		- 可设置当前包是否上线发行，只有已上线才会进行更新检测
		- 同时只可有一个线上发行版，线上发行不可更设为下线。未上线可以设为上线发行并自动替换当前线上发行版
		- 修改当前包为上线发行，自动替换当前线上发行版

	**注：版本号请填写以`.`分隔字符串，例如：`0.0.1`**
- 发布wgt资源包
	1. 大部分配置与发布 `原生App安装包` 一致

	<div align="center">
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/publish_wgt.png" width="400"></img>
	</div>

	2. `原生App最低版本`
		- 上次使用新Api或打包新模块的App版本
		- 如果此次打包wgt使用了`新的api`或者打包了`新的模块`，则在发布 `wgt资源包` 的时候，将此版本更新为本次版本
		
		- 如果已有正式版`wgt资源包`，则本次新增会自动带出

	3. `静默更新`
		- App升级时会在后台下载wgt包并自行安装。新功能在下次启动App时生效
		- **静默更新后不重启应用，可能会导致正在访问的应用的页面数据错乱，请谨慎使用！**

	**注：版本号请填写以`.`分隔字符串，例如：`0.0.1`**

- 发布完成页面

	<div align="center">
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/version_list_new2.png" width="800"></img>
	</div>

**Tips**
- `/uni_modules/uni-upgrade-center/pages/system/upgradecenter/version/add.vue`中有版本对比函数（compare）。
	- 使用多段式版本格式（如："3.0.0.0.0.1.0.1", "3.0.0.0.0.1"）。如果不满足对比规则，请自行修改。
- 删除应用会把该应用的所有版本记录同时删除
- 升级中心设计之初就支持iOS的wgt更新
- iOS的wgt更新肯定是违反apple政策的，注意事项：
	- 审核期间请不要弹窗升级
	- 升级完后尽量不要自行重启
	- 尽量使用静默更新
- 可以通过以下修改支持iOS的wgt更新：
	> \uni_modules\uni-upgrade-center\pages\mixin\version_add_detail_mixin.js
	> 
	> 将 `data` 中的 `enableiOSWgt` 属性设置为 `true` 即可


在插件市场安装（uni-admin 1.9.3+ 升级中心已作为内置插件，内置在uni-admin项目中），根据 readme 部署即可。[插件地址](https://ext.dcloud.net.cn/plugin?id=4470)

#### uni-upgrade-center-app 前台检测更新

负责前台检查升级更新。

<div align="left" style="display:flex;align-items:center;">
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/2.jpg" alt="官方升级弹框样式" width="250"></img>
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/update_app_store.png" alt="升级支持多商店" width="250"></img>
	<img style="margin-left:20px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/4.jpg" alt="使用uni.showModal自定义弹框" width="250"></img>
</div>

提供了如下功能：

- 基于`uni-upgrade-center`一键式检查更新，统一整包与 wgt 资源包更新

- 自行根据传参完成校验，判断此次更新使用哪种方式

- 一键式升级。弹框、下载、安装、是否强制重启等逻辑已集成

- 下载完成如果取消升级自动缓存安装包，下次进入判断是否符合安装条件，判断不通过则自动清除

- 美观，实用，可自定义扩展

- 美观，实用，可自定义扩展

在插件市场安装，根据 readme 部署即可。[插件地址](https://ext.dcloud.net.cn/plugin?id=4542)

**关于应用转让后升级中心（uni-upgrade-center）的使用问题** [详情](https://ask.dcloud.net.cn/article/40112)