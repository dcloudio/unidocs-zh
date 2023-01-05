## App升级中心 uni-upgrade-center
## App upgrade center uni-upgrade-center

### 概述
### Overview

App升级中心 uni-upgrade-center，提供了 App 的版本更新服务。包括
The app upgrade center uni-upgrade-center provides version update services for apps. include
- Android、iOS的完整App安装包升级和wgt资源包增量更新
- Complete App installation package upgrade for Android and iOS and incremental update of wgt resource package
- 后台管理系统，用于发布新版、设置升级策略
- Background management system for releasing new versions and setting upgrade strategies

> 如果需要初次发布，而不是升级，另见产品 [uni-portal 统一发布页](uni-portal.md)
> If an initial release is required, not an upgrade, see also the product [uni-portal unified release page](uni-portal.md)

本产品具有如下特征：
This product has the following features:

- 开源、免费。由于uniCloud阿里云版目前免费，包括服务器和cdn均免费。
- Open source and free. Since uniCloud Alibaba Cloud Edition is currently free, including the server and CDN are free.

- 云端基于 [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/) 实现。后台管理是 [uni-admin](https://uniapp.dcloud.net.cn/uniCloud/admin.html) 框架的插件。
- Cloud implementation is based on [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/). Background management is a plugin of the [uni-admin](https://uniapp.dcloud.net.cn/uniCloud/admin.html) framework.

- 数据库遵循 [opendb](https://uniapp.dcloud.net.cn/uniCloud/opendb.html) 规范
- The database follows the [opendb](https://uniapp.dcloud.net.cn/uniCloud/opendb.html) specification

### 为什么需要升级中心？
### Why do I need an upgrade center?

每个App开发者都要开发升级功能，这是巨大的社会资料浪费。DCloud推出 uni-upgrade-center，让应用开发更轻松、高效，让开发者专注于自己的业务。
Every App developer has to develop an upgrade function, which is a huge waste of social data. DCloud launched uni-upgrade-center to make application development easier and more efficient, allowing developers to focus on their own business.

### 使用
### use

升级中心分为两个部分：`uni-upgrade-center Admin管理后台` 和 `uni-upgrade-center-app前台检测更新`。
The upgrade center is divided into two parts: `uni-upgrade-center Admin management background` and `uni-upgrade-center-app foreground detection update`.

#### uni-upgrade-center Admin 管理后台
#### uni-upgrade-center Admin management background

> 在 uni-admin 1.9.3+ 中已作为内置插件。在应用管理新增应用后，即可在 `App升级中心` 发布该应用的版本
> Already available as a built-in plugin in uni-admin 1.9.3+. After adding an application in the application management, you can publish the version of the application in the `App Upgrade Center`

负责发布新版和管理历史版本的上下线。提供了如下功能：
Responsible for releasing new versions and managing the online and offline of historical versions. The following functions are provided:

- 云储存安装包CDN加速，使安装包下载的更快、更稳定
- CDN acceleration of cloud storage installation package, making installation package download faster and more stable

- 应用管理，对 App 的信息记录和应用版本管理
- Application management, information record of App and application version management

- 版本管理，可以发布新版，也可方便直观的对当前 App 历史版本以及线上发行版本进行查看、编辑和删除操作
- Version management, you can release a new version, and you can easily and intuitively view, edit and delete the current historical version of the app and the online version

- 版本发布信息管理，包括 更新标题，更新内容，版本号，静默更新，强制更新，灵活上线发行 的设置和修改
- Version release information management, including update title, update content, version number, silent update, forced update, and flexible online release settings and modifications

- 原生 App 安装包，发布 Apk 更新，用于 App 的整包更新，可设置是否强制更新
- Native App installation package, release Apk update, for the whole package update of App, can set whether to force the update

- wgt 资源包，发布 wgt 更新，用于 App 的热更新，可设置是否强制更新，静默更新
- wgt resource package, release wgt update, used for hot update of App, can set whether to force update, silent update

- App 管理列表及 App 版本记录列表搜索
- App management list and App version record list search

**版本管理**
**Version management**

1. 在版本管理list的右上角点击`发布新版`，可以发布`原生App安装包`和`wgt资源包`。在左上角点击`下拉列表`，可以切换展示应用。
1. Click `Release new version` in the upper right corner of the version management list to release the `Native App installation package` and `wgt resource package`. Click the `drop-down list` in the upper left corner to switch the display application.

<div align="center">
<img src="https://web-assets.dcloud.net.cn/unidoc/zh/version_list_new.png" width="800"></img>
</div>

- 发布原生App安装包
- Publish native App installation package
	1. 在上传安装包界面填写此次发版信息
	1. Fill in the release information on the upload installation package interface

	<div align="center" >
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/publish_apk.jpg" width="600"></img>
	</div>

  1. `Android应用市场`
  1. `Android App Market`
		- 此处会与 `新增应用` 时填写的 `Android应用市场` 信息保持同步。当在应用管理修改应用信息时，这里也会修改
		- It will be synchronized with the `Android App Market` information filled in when `Adding an app`. When the application information is modified in the application management, it will also be modified here
		- 启用商店：当勾选某一商店启用时，在 `upgrade-center-app` 端会检测手机上是否有该应用市场
		- Enable store: When a store is checked to enable, it will detect whether the app market exists on the phone on the `upgrade-center-app` side
    		- 如果有，则会跳转至该应用商店进行 App 升级
    		- If there is, it will jump to the app store to upgrade the app
    		- 如果都跳转失败，最后会使用填写的 `下载链接` 下载 apk 安装包升级
    		- If the jump fails, the `download link` will be used to download the apk installation package and upgrade
		- 优先级：检查更新时，按照优先级从大到小依次尝试跳转商店
		- Priority: When checking for updates, try to jump to the store in descending order of priority

	1. `下载链接/AppStore`
	1. `Download link/AppStore`
		- 可以选择手动上传一个文件到 `云存储`，会自动将地址填入该项
		- You can choose to manually upload a file to `cloud storage`, and the address will be automatically filled in this item
		- 也可以手动填写一个地址，就可以不用再上传文件
		- You can also fill in an address manually, so you don't have to upload files again
		- 如果是发布`苹果`版本，包地址则为 应用在`AppStore的链接`
		- If the `Apple` version is released, the package address will be the link of the application in the `AppStore`
		
	2. `强制更新`
	2. `Force update`
		- 如果使用强制更新，App端接收到该字段后，App升级弹出框不可取消
		- If forced update is used, after the app receives this field, the app update pop-up box cannot be canceled
		
	4. `上线发行`
	4. `Online Issue`
		- 可设置当前包是否上线发行，只有已上线才会进行更新检测
		- You can set whether the current package is released online or not, and the update detection will only be performed if it is online
		- 同时只可有一个线上发行版，线上发行不可更设为下线。未上线可以设为上线发行并自动替换当前线上发行版
		- There can only be one online distribution at the same time, and online distribution cannot be changed to offline. Not online can be set as online release and automatically replace the current online release
		- 修改当前包为上线发行，自动替换当前线上发行版
		- Modify the current package to be released online, and automatically replace the current online release

	**注：版本号请填写以`.`分隔字符串，例如：`0.0.1`**
	**Note: Please fill in a string separated by `.` for the version number, for example: `0.0.1`**
- 发布wgt资源包
- Publish wgt resource pack
	1. 大部分配置与发布 `原生App安装包` 一致
	1. Most of the configuration is consistent with the release of the `native App installation package`

	<div align="center">
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/publish_wgt.png" width="400"></img>
	</div>

	2. `原生App最低版本`
	2. `Minimum version of native app`
		- 上次使用新Api或打包新模块的App版本
		- App version that last used the new Api or packaged the new module
		- 如果此次打包wgt使用了`新的api`或者打包了`新的模块`，则在发布 `wgt资源包` 的时候，将此版本更新为本次版本
		- If the packaged wgt uses the `new api` or packaged the `new module`, then when the `wgt resource package` is released, update this version to this version
		
		- 如果已有正式版`wgt资源包`，则本次新增会自动带出
		- If there is an official version of `wgt resource pack`, this new addition will automatically bring it out

	3. `静默更新`
	3. `Silent Update`
		- App升级时会在后台下载wgt包并自行安装。新功能在下次启动App时生效
		- When the app is upgraded, the wgt package will be downloaded in the background and installed by itself. The new function takes effect the next time the app is launched
		- **静默更新后不重启应用，可能会导致正在访问的应用的页面数据错乱，请谨慎使用！**
		- **Do not restart the app after silent update, which may cause the page data of the app you are visiting to be confused, please use it with caution! **

	**注：版本号请填写以`.`分隔字符串，例如：`0.0.1`**
	**Note: Please fill in a string separated by `.` for the version number, for example: `0.0.1`**

- 发布完成页面
- Post completion page

	<div align="center">
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/version_list_new2.png" width="800"></img>
	</div>

**Tips**
- `/uni_modules/uni-upgrade-center/pages/system/upgradecenter/version/add.vue`中有版本对比函数（compare）。
- There is a version comparison function (compare) in `/uni_modules/uni-upgrade-center/pages/system/upgradecenter/version/add.vue`.
	- 使用多段式版本格式（如："3.0.0.0.0.1.0.1", "3.0.0.0.0.1"）。如果不满足对比规则，请自行修改。
	- Use multipart version format (eg: "3.0.0.0.0.1.0.1", "3.0.0.0.0.1"). If it does not meet the comparison rules, please modify it yourself.
- 删除应用会把该应用的所有版本记录同时删除
- Deleting an app will delete all version records of the app at the same time
- 升级中心设计之初就支持iOS的wgt更新
- The update center is designed to support wgt updates for iOS
- iOS的wgt更新肯定是违反apple政策的，注意事项：
- The wgt update of iOS is definitely against apple policy, matters needing attention:
	- 审核期间请不要弹窗升级
	- Please do not pop up the upgrade during the review period
	- 升级完后尽量不要自行重启
	- Try not to restart by yourself after the upgrade
	- 尽量使用静默更新
	- try to use silent updates
- 可以通过以下修改支持iOS的wgt更新：
- wgt updates for iOS can be supported with the following modifications:
	> \uni_modules\uni-upgrade-center\pages\mixin\version_add_detail_mixin.js
	> 
	> 将 `data` 中的 `enableiOSWgt` 属性设置为 `true` 即可
	> Set the `enableiOSWgt` property in `data` to `true`


在插件市场安装（uni-admin 1.9.3+ 升级中心已作为内置插件，内置在uni-admin项目中），根据 readme 部署即可。[插件地址](https://ext.dcloud.net.cn/plugin?id=4470)
Install it in the plug-in market (uni-admin 1.9.3+ upgrade center has been used as a built-in plug-in, built in the uni-admin project), and it can be deployed according to the readme. [Plugin address](https://ext.dcloud.net.cn/plugin?id=4470)

#### uni-upgrade-center-app 前台检测更新
#### uni-upgrade-center-app foreground detection update

负责前台检查升级更新。
Responsible for the front desk to check for upgrades and updates.

<div align="left" style="display:flex;align-items:center;">
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/2.jpg" alt="官方升级弹框样式" width="250"></img>
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/update_app_store.png" alt="升级支持多商店" width="250"></img>
	<img style="margin-left:20px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/4.jpg" alt="使用uni.showModal自定义弹框" width="250"></img>
</div>

提供了如下功能：
The following functions are provided:

- 基于`uni-upgrade-center`一键式检查更新，统一整包与 wgt 资源包更新
- One-click update check based on `uni-upgrade-center`, unified whole package and wgt resource package update

- 自行根据传参完成校验，判断此次更新使用哪种方式
- Complete the verification according to the parameters passed by yourself, and determine which method to use for this update

- 一键式升级。弹框、下载、安装、是否强制重启等逻辑已集成
- One-click upgrade. The logic of pop-up, download, installation, and whether to force restart has been integrated

- 下载完成如果取消升级自动缓存安装包，下次进入判断是否符合安装条件，判断不通过则自动清除
- If the download is complete, if you cancel the upgrade and automatically cache the installation package, the next time you enter it, you will judge whether it meets the installation conditions. If it is not passed, it will be automatically cleared.

- 美观，实用，可自定义扩展
- Beautiful, functional, customizable and extensible

- 美观，实用，可自定义扩展
- Beautiful, functional, customizable and extensible

在插件市场安装，根据 readme 部署即可。[插件地址](https://ext.dcloud.net.cn/plugin?id=4542)

**关于应用转让后升级中心（uni-upgrade-center）的使用问题** [详情](https://ask.dcloud.net.cn/article/40112)