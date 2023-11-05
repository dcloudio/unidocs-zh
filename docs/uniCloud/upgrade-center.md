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

- 开源、免费。uniCloud阿里云版和支付宝云版都有免费空间。

- 云端基于 [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/) 实现。后台管理是 [uni-admin](https://uniapp.dcloud.net.cn/uniCloud/admin.html) 框架的插件。
- Cloud implementation is based on [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/). Background management is a plugin of the [uni-admin](https://uniapp.dcloud.net.cn/uniCloud/admin.html) framework.

- 数据库遵循 [opendb](https://uniapp.dcloud.net.cn/uniCloud/opendb.html) 规范
- The database follows the specification of [opendb](https://uniapp.dcloud.net.cn/uniCloud/opendb.html)
- **关于应用转让后升级中心（uni-upgrade-center）的使用问题** [详情](https://ask.dcloud.net.cn/article/40112)
- **About the use of the uni-upgrade- uni-upgrade-center after app transfer** [Details](https://ask.dcloud.net.cn/article/40112)

### 为什么需要升级中心？
### Why do I need an upgrade center?

每个App开发者都要开发升级功能，这是巨大的社会资料浪费。DCloud推出 uni-upgrade-center，让应用开发更轻松、高效，让开发者专注于自己的业务。
Every App developer has to develop an upgrade function, which is a huge waste of social data. DCloud launched uni-upgrade-center to make application development easier and more efficient, allowing developers to focus on their own business.

> 升级中心分为两个部分：[uni-upgrade-center Admin管理后台](https://ext.dcloud.net.cn/plugin?id=4470) 和 [uni-upgrade-center-app前台检测更新](https://ext.dcloud.net.cn/plugin?id=4542)。

### uni-upgrade-center Admin 管理后台@uni-upgrade-center-admin

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

#### 使用教程

**新建 uni-admin 项目**

1. 新建项目：`打开HBuilderX` -> `文件` -> `新建` -> `项目` -> `uni-app` 选择 `uniCloud admin`模板，键入一个名字，确定

2. 鼠标右键 `uniCloud 文件夹` 选择`关联云服务空间`和`运行云服务空间初始化向导`

**添加应用**
**Add App**

> 运行 uni-admin 到浏览器，在左侧菜单 `系统管理 -> 应用管理` 中新增应用后，即可在 `App升级中心` 发布该应用的版本 [详情](https://uniapp.dcloud.net.cn/uniCloud/admin.html#app-manager)


添加应用后，即可在应用管理列表中跳转至版本管理页面：

<div align="center">
<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/upgrade-center-jump.jpg" width="800"></img>
</div>

**版本管理**
**Version management**

1. 在版本管理列表页面右上角点击`发布新版`，可以发布`原生App安装包`和`wgt资源包`。在左上角点击`下拉列表`，可以切换展示应用。

<div align="center">
<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/version_list_new.png" width="800"></img>
</div>

- 发布原生App安装包
- Publish native App installation package
	1. 在上传安装包界面填写此次发版信息
	1. Fill in the release information on the upload installation package interface

	<div align="center" >
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/publish_apk.jpg" width="600"></img>
	</div>
	
	2. `版本号`：请填写以`.`分隔字符串，例如：`0.0.1`。在构建应用安装包时，`manifest.json` 中的 `应用版本名称` 也要是该格式。

  3. `Android应用市场`
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

	4. `下载链接/AppStore`
		- 可以选择手动上传一个文件到 `云存储`，会自动将地址填入该项
		- You can choose to manually upload a file to `cloud storage`, and the address will be automatically filled in this item
		- 也可以手动填写一个地址，就可以不用再上传文件
		- 如果是发布 `苹果` 版本，包地址则为应用的 `AppStore 链接`
		
	5. `强制更新`
		- 如果使用强制更新，App端的升级弹框将不可被关闭
		
	6. `上线发行`
		- 可设置当前包是否上线发行，只有已上线才会进行更新检测
		- You can set whether the current package is released online or not, and the update detection will only be performed if it is online
		- 同时只可有一个线上发行版，线上发行不可更设为下线。未上线可以设为上线发行并自动替换当前线上发行版
		- There can only be one online distribution at the same time, and online distribution cannot be changed to offline. Not online can be set as online release and automatically replace the current online release
		- 修改当前包为上线发行，自动替换当前线上发行版
		- Modify the current package to be released online, and automatically replace the current online release

- 发布wgt资源包
- Publish wgt resource pack
	1. 大部分配置与发布 `原生App安装包` 一致
	1. Most of the configuration is consistent with the release of the `native App installation package`

	<div align="center">
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/publish_wgt.png" width="400"></img>
	</div>

	2. `原生App最低版本`
		- 上次使用新api或打包新模块的pp版本
		- 如果此次打包的wgt使用了 `新的 api` 或者打包了 `新的模块` ，则在发布 `wgt资源包` 的时候，要将 `原生App最低版本` 填写为本次版本
		- 如果已有正式版 `wgt资源包` ，则会自动带出

	3. `静默更新`
	3. `Silent Update`
		- App升级时会在后台下载wgt包并自行安装。新功能在下次启动App时生效
		- When the app is upgraded, the wgt package will be downloaded in the background and installed by itself. The new function takes effect the next time the app is launched
		- **静默更新后不重启应用，可能会导致正在访问的应用的页面数据错乱，请谨慎使用！**
		- **Do not restart the app after silent update, which may cause the page data of the app you are visiting to be confused, please use it with caution! **

- 发布完成页面
- Post completion page

	<div align="center">
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/version_list_new2.png" width="800"></img>
	</div>

**Tips**
- `/uni_modules/uni-upgrade-center/pages/version/add.vue`中有版本对比函数（compare）。
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

### uni-upgrade-center-app 前台检测更新@uni-upgrade-center-app

负责前台检查升级更新。
Responsible for the front desk to check for upgrades and updates.

<div align="left" style="display:flex;align-items:center;">
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/upgrade_center_1.jpg" alt="官方升级弹框样式" width="250"></img>
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/update_app_store.png" alt="升级支持多商店" width="250"></img>
	<img style="margin-left:20px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/upgrade_center_3.jpg" alt="使用uni.showModal自定义弹框" width="250"></img>
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

**安装指引**
**Installation Guide**

1. 在插件市场打开本插件页面，在右侧点击`使用 HBuilderX 导入插件`，选择要导入的项目点击确定 [插件地址](https://ext.dcloud.net.cn/plugin?id=4542)

2. 创建 uniCloud 云开发环境

3. 绑定服务空间：
   - 插件版本 `>= 0.6.0`，依赖 `uni-admin 1.9.3+` 的 `uni-upgrade-center 云函数`，请和 uni-admin 项目关联同一个服务空间
   - Plugin version `>= 0.6.0`, depends on `uni-upgrade-center cloud function` of `uni-admin 1.9.3+`, please associate the same service space with the uni-admin project
   - 插件版本 `<= 0.6.0`，请绑定到一个已有的服务空间或者新建一个服务空间进行绑定
   - Plugin version `<= 0.6.0`, please bind to an existing service space or create a new service space for binding

4. 上传云函数：
   - 插件版本 `>= 0.6.0`，依赖 `uni-admin 1.9.3+` 的 `uni-upgrade-center 云函数`，插件不再单独提供云函数，可以跳过此步骤
   - The plug-in version `>= 0.6.0`, depends on the `uni-upgrade-center cloud function` of `uni-admin 1.9.3+`, the plug-in no longer provides cloud functions separately, you can skip this step
   - 插件版本 `<= 0.6.0`，找到`/uni_modules/uni-upgrade-center-app/uniCloud/cloudfunctions/check-version`，右键上传部署
   - Plugin version `<= 0.6.0`, find `/uni_modules/uni-upgrade-center-app/uniCloud/cloudfunctions/check-version`, right click to upload and deploy

5. 在`pages.json`中添加页面路径。**注：请不要设置为pages.json中第一项**
  
	```json
	"pages": [
			// ……其他页面配置
			// ...other page configuration
			{
				"path": "uni_modules/uni-upgrade-center-app/pages/upgrade-popup",
				"style": {
					"disableScroll": true,
					"app-plus": {
						"backgroundColorTop": "transparent",
						"background": "transparent",
						"titleNView": false,
						"scrollIndicator": false,
						"popGesture": "none",
						"animationType": "fade-in",
						"animationDuration": 200

					}
				}
			}
		]
	```
6. 将`@/uni_modules/uni-upgrade-center-app/utils/check-update.js` 使用 import 导入到需要用到的地方，调用一下即可：
   1. `import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update.js'`
   2. 默认使用当前绑定的服务空间，如果要请求其他服务空间，可以使用其他服务空间的 `callFunction`。[详情](https://uniapp.dcloud.io/uniCloud/cf-functions.html#call-by-function-cross-space)

7. 升级弹框可自行编写，也可以使用`uni.showModal`，或使用现有的升级弹框样式，如果不满足UI需求请自行替换资源文件。在`utils/check-update.js`中都有实例。

8. 使用wgt更新，打包前请务必将 manifest.json 中的版本名称修改为更高版本。

**更新下载安装`check-update.js`**
**Update download and install `check-update.js`**

> 该函数在utils目录下
> This function is in the utils directory

1. 如果是静默更新，则不会打开更新弹框，会在后台下载后安装，下次启动应用生效
1. If it is a silent update, the update pop-up box will not be opened, it will be downloaded and installed in the background, and the application will take effect next time you start the application

2. 如果是 iOS，则会直接打开AppStore的链接
2. If it is iOS, it will directly open the link of AppStore

3. 其他情况，会将检查更新云函数返回的结果保存在localStorage中，并跳转进入`upgrade-popup.vue`打开更新弹框
3. In other cases, the result returned by the check and update cloud function will be saved in localStorage, and jump to `upgrade-popup.vue` to open the update popup box

**Tips**

1. 检查更新云函数内部有版本对比函数（compare）。
1. Check and update the version comparison function (compare) inside the cloud function.
	- 使用多段式版本格式（如："3.0.0.0.0.1.0.1", "3.0.0.0.0.1"）。如果不满足对比规则，请自行修改。
	- Use the multi-segment version format (eg: "3.0.0.0.0.1.0.1", "3.0.0.0.0.1"). If you do not meet the comparison rules, please modify it yourself.
	- 如果修改，请将*pages/upgrade-popup.vue*中*compare*函数一并修改
	- If modified, please modify the *compare* function in *pages/upgrade-popup.vue* together

### 费用评测@upgrade-center-fee
### Fee Evaluation @upgrade-center-fee


近期，uniCloud阿里云版开始正式商用，部分开发者对基于uniCloud的`uni-upgrade-center`等云端一体业务，开始纠结，不清楚这些业务预计会花费多少钱，不清楚相比传统服务器而言，何种方案性价比更好。
Recently, the uniCloud Alibaba Cloud version has been officially commercialized. Some developers have begun to struggle with cloud-integrated services such as `uni-upgrade-center` based on uniCloud. , which solution is more cost-effective.

本文尝试算细账、算总账，以阿里云[按量计费](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)为例，详细预测`uni-upgrade-center`在不同用户规模下的资源消耗及对应费用，帮助大家明智选择，无忧开发。
This article tries to calculate the detailed accounts and the general ledger. Taking Alibaba Cloud [pay-as-you-go](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay) as an example, it predicts `uni-upgrade- postpay' in detail. center `The resource consumption and corresponding costs under different user scales help everyone choose wisely and develop without worry.

本文主要分为三个部分：
This article is mainly divided into three parts:
- `uni-upgrade-center`消耗的资源费用测算(云函数、云数据库、云存储、前端网页托管分别测算)
- Calculation of resource costs consumed by `uni-upgrade-center` (calculated separately for cloud functions, cloud databases, cloud storage, and front-end web hosting)
- `uni-upgrade-center`给你带来的收益
- Benefits of `uni-upgrade-center` for you
- 综合考虑，你该如何选择
- Comprehensive consideration, how should you choose

`uni-upgrade-center`升级中心涉及费用的部分主要分为：
The cost involved in `uni-upgrade-center`uni-upgrade-center is mainly divided into:
- 云函数：`uni-upgrade-center`云函数，将客户端版本和服务端最新版本进行对比，返回是否需升级的逻辑
- Cloud function: `uni-upgrade-center` cloud function, compare the client version with the latest version of the server, and return the logic of whether to upgrade
- 云数据库：`opendb-app-versions`表，存储版本信息
- Cloud database: `opendb-app-versions` table, storing version information
- 云存储：放置近期的升级包资源（apk/ipa/wgt）
- Cloud storage: place recent upgrade package resources (apk/ipa/wgt)
- 前端网站托管：部署`uni-admin`，管理员发布新版本
- Front-end website hosting: deploy `uni-admin`, the administrator releases a new version

接下来，我们对不同资源，分别进行费用评估。
Next, we conduct cost assessments for different resources.

#### 云函数
#### Cloud Functions

启用`uni-upgrade-center`升级中心后，你的App每次启动，会请求一次`uni-upgrade-center`云函数。
After enabling the `uni-upgrade-center`uni-upgrade-center, every time your app starts, it will request the `uni-upgrade-center` cloud function once.

我们按照uniCloud官网列出的[按量计费](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)规则，可以得出如下云函数资源消耗计算公式：
According to the [pay-as-you-go](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay) rules listed on the uniCloud official website, we can get the following cloud function resource consumption calculation formula:

`云函数费用 = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8`
`Cloud function cost = resource usage * 0.000110592 + number of calls * 0.0133 / 10000 + outbound traffic * 0.8`

其中：
in:
- 资源使用量 = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数
- Resource usage = cloud function memory (in G) * average execution time of a cloud function (in seconds) * number of calls
- 调用次数 = App日活 * 每日活用户平均每天启动App次数，因为App每次启动，均会执行检查更新逻辑
- Number of invocations = daily activity of the app * the average number of times the daily active user starts the app every day, because every time the app is started, the logic of checking and updating will be executed

我们假设如下数据模型：
We assume the following data model:

- 云函数内存：256M，即0.25G；注意云函数内存默认为512M，`uni-upgrade-center`云函数建议设置为256M
- Cloud function memory: 256M, which is 0.25G; note that the cloud function memory is 512M by default, and the `uni-upgrade-center` cloud function is recommended to be set to 256M
- 云函数平均单次执行时长：100毫秒，即0.1秒
- The average execution time of a cloud function: 100 milliseconds, or 0.1 seconds
- 每日活用户平均每天启动App次数：2次
- The average number of app launches per day by daily active users: 2 times
- 出网流量：0，升级中心无需链接外网
- Outgoing network traffic: 0, the uni-upgrade-center does not need to link to the external network

按照如上公式，你的App若有100个日活用户，其升级中心云函数每天的费用为：
According to the above formula, if your app has 100 daily active users, the daily fee for the uni-upgrade-center cloud function is:

```
云函数费用（天） = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
			  = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数 + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
			  = 0.25G * 0.1S * 100 * 2 * 0.000110592 + 100 * 2 * 0.0133/10000 + 0 
			  = 0.00081896（元）
```

即：你的App日活为100，使用`uni-upgrade-center`商业版后，对应云函数每天大概消耗0.00081896元。
That is: your App DAU is 100, and after using `uni-upgrade-center` commercial version, the corresponding cloud function consumes about 0.00081896 yuan per day.

据此，可计算其每月的费用为：0.00081896 * 30 = 0.0245688，即每月只需2分钱；
According to this, the monthly cost can be calculated as: 0.00081896 * 30 = 0.0245688, that is, only 2 cents per month;

同理，我们可推导出日活为1000、10000、10万的App，其升级中心云函数每月费用如下表：
In the same way, we can deduce that for apps with 1,000, 10,000, and 100,000 DAU, the monthly cost of the uni-upgrade-center cloud function is as follows:

|日活	|资源使用量计费（元）	|调用次数计费（元）	|出网流量计费（元）	|合计（元）		|
|daily activity |resource usage billing (yuan) |call times billing (yuan) |outbound traffic billing (yuan) |total (yuan) |
|:-:    |:-:            |:-:        |:-:        |:-:        |
|100	|0.0165888		|0.00798		|0				|0.0245688	|
|1000	|0.165888		|0.0798			|0				|0.245688	|
|10000	|1.65888		|0.798			|0				|2.45688	|
|100000	|16.5888		|7.98			|0				|24.5688	|

日活1000的App，云函数月度消耗才两毛五（0.25元），真是毛毛雨了。
For an app with a daily activity of 1,000, the monthly consumption of cloud functions is only 25 cents (0.25 yuan), which is really drizzle.

#### 云数据库
#### Cloud Database

按照[uniCloud官网](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)介绍，云数据库费用 = `容量费用 + 读操作次数费用 + 写操作次数费用`，其中：
According to [uniCloud official website](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay), cloud database fee = `capacity fee + read operation fee + write operation fee', where :

- 容量费用：数据库存储容量（单位为G） * 0.07
- Capacity fee: database storage capacity (in G) * 0.07
- 读操作次数费用：读操作次数（万次） * 0.015
- Fee for the number of read operations: number of read operations (10,000 times) * 0.015
- 写操作次数：写操作次数（万次） * 0.015；
- Number of write operations: number of write operations (thousands) * 0.015;

##### 容量费用
##### Capacity Fee

我们以`hello uni-app`为例，`opendb-app-versions`数据表中共存储30条升级记录，容量大小为8K。
Let's take `hello uni-app` as an example, the `opendb-app-versions` data table stores a total of 30 upgrade records, with a capacity of 8K.
据此可计算出`opendb-app-versions`表的日存储费用为：`8/1024/1024 * 0.07 = 0.000000534`
According to this, the daily storage cost of the `opendb-app-versions` table can be calculated as: `8/1024/1024 * 0.07 = 0.000000534`

> 容量计费单位是G，故需先将8K折算成M，再折算成G，故上述公式中连续除了两个1024
> The billing unit for capacity is G, so it is necessary to convert 8K into M first, and then into G, so the above formula excludes two consecutive 1024

1月按30天算，则月存储费用为`0.000000534 * 30 = 0.000016`，还不到1分钱，可忽略。
Calculated as 30 days in January, the monthly storage fee is `0.000000534 * 30 = 0.000016`, which is less than 1 cent and can be ignored.

注意：数据库容量仅跟发布版本多少有关系，跟日活用户无关。
Note: The database capacity is only related to the number of released versions, and has nothing to do with daily active users.

##### 读操作次数
##### Number of read operations

在uni升级中心业务中，云函数`uni-upgrade-center`每次执行，仅调用一次数据库读取（读取一次`opendb-app-versions`表），故数据库的读操作次数等同于云函数的`调用次数`，前文有过公式，云函数调用次数 = `App日活 * 每日活用户平均每天启动App次数`，每日活用户平均每天启动App次数我们假设为2次。
In the uni uni-upgrade-center business, each time the cloud function `uni-upgrade-center` is executed, only one database read is called (read the `opendb-app-versions` table once), so the number of database read operations is equal to the cloud function There is a formula for the `number of calls` in the previous article, the number of cloud function calls = `app daily activity * the average number of times the daily active user starts the app per day`, and the average number of times the daily active user starts the app per day is assumed to be 2 times.

我们即可推算，如果一个App的日活为100，则uni升级中心每日云数据库读操作次数费用计算如下：
We can calculate that if the daily activity of an app is 100, the daily cloud database read operation cost of the uni uni-upgrade-center is calculated as follows:

```
读操作次数费用 = 读操作次数（万次） * 0.015
			= 云函数调用次数（万次） * 0.015
			= App日活 * 每日活用户平均每天启动App次数 / 10000 * 0.015
			= 100 * 2 / 10000 * 0.015
			= 0.0003
```

1月按30天算，则每月云数据库读操作次数费用为`0.0003 * 30 = 0.009`，还不到1分钱。
Calculated as 30 days in January, the monthly cloud database read operation fee is `0.0003 * 30 = 0.009`, which is less than 1 cent.

同理，我们可推导出日活为1000、10000的App，其uni升级中心每月云数据库读操作次数费用为9分钱、9毛钱。
In the same way, we can deduce that for apps with 1,000 or 10,000 DAU, the uni uni-upgrade-center will cost 9 cents or 9 cents per month for the number of cloud database read operations.

##### 写操作次数
##### Number of write operations

`uni-upgrade-center`升级中心，写数据库操作很少；管理员仅在每次发布新版时，通过`uni-admin`向`opendb-app-versions`表插入一条新版本信息；用户端App每次启动检查升级，无需数据表的写入操作，故写操作次数可忽略为0；
The `uni-upgrade-center`uni-upgrade-center has very few database write operations; the administrator only inserts a new version information into the `opendb-app-versions` table through `uni-admin` every time a new version is released; the client App Every time you start to check and upgrade, there is no need to write the data table, so the number of write operations can be ignored as 0;

##### 小结
##### Summary

因为容量费和写操作次数费用均可忽略为0，根据公式：
Because both the capacity fee and the number of write operations can be ignored as 0, according to the formula:

```
云数据库费用 = 容量费（忽略为0） + 读操作费用 + 写操作费用（忽略为0） 
		   = 读操作费用
```

可推导，uni升级中心的云数据库计费主要是读操作次数计费，因此我们进一步得出如下预测：
It can be deduced that the cloud database billing of the uni uni-upgrade-center is mainly billing for the number of read operations, so we further draw the following predictions:

|日活	|容量费（元）	|读操作次数费用（元）	|写操作次数费用（元）	|合计（元）	|
|Daily Activity |Capacity Fee (Yuan) |Read Operation Fee (Yuan) |Write Operation Fee (Yuan) |Total (Yuan) |
|:-:    |:-:    |:-:            |:-:            |:-:    |
|100	|0		|0.009			|0				|0.009	|
|1000	|0		|0.09			|0				|0.09	|
|10000	|0		|0.9			|0				|0.9	|
|100000	|0		|9				|0				|9		|


#### 云存储
#### Cloud Storage

按照[uniCloud官网](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)介绍，云存储费用 = `容量费 + 下载操作次数计费点 + 上传操作次数计费点 + CDN流量费`。
According to [uniCloud official website](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay), cloud storage fee = `capacity fee + download operation times billing point + upload operation times billing points + CDN traffic fee`.

如果您的应用每次均上架到apple store或安卓各应用商店，升级时从应用商店下载安装，则云存储费用为0，因为使用的是应用商店的存储和CDN下载流量，本计费点测评章节可直接跳过。
If your app is uploaded to the Apple store or Android app stores every time, and downloaded and installed from the app store when upgrading, the cloud storage fee will be 0, because the storage and CDN download traffic of the app store are used, and this billing point is evaluated Chapters can be skipped directly.

> uni-upgrade-center 支持设置应用新版安装包下载地址为应用商店地址，这样就可以使用应用商店的存储和CDN，不消耗uniCloud的云存储资源。
> uni-upgrade-center supports setting the download address of the new version of the application installation package as the address of the application store, so that the storage and CDN of the application store can be used without consuming cloud storage resources of uniCloud.

现阶段，iOS平台均需上架apple store，我们可以忽略iOS平台的云存储消耗。
At this stage, all iOS platforms need to be put on the Apple store, and we can ignore the cloud storage consumption of the iOS platform.

如果您的安卓apk安装包及wgt差量升级包全部托管在uniCloud云存储中，我们也可以算算这笔账。
If your Android apk installation package and wgt differential upgrade package are all hosted in uniCloud cloud storage, we can also calculate this account.

##### 容量费
##### Capacity Fee

容量费主要是存储费用，我们可以定期将过期版本删除，从而节省容量费。
The capacity fee is mainly a storage fee, and we can periodically delete expired versions to save capacity fees.

假设我们在云存储中保留最近5个版本的文件，apk/wgt全部保留，大小假设分别为：40M、10M。
Suppose we keep the latest 5 versions of files in cloud storage, all apk/wgt are kept, and the sizes are assumed to be: 40M and 10M respectively.

>如前所言，ipa需上架apple store，不使用云存储，测评可忽略。
>As mentioned before, ipa needs to be put on the apple store, and cloud storage is not used, so the evaluation can be ignored.

则每天容量费用为：`5 * (40+10)/1024 * 0.0043 = 0.0010498`
Then the daily capacity fee is: `5 * (40+10)/1024 * 0.0043 = 0.0010498`

据此，可计算其每月30天的容量费用为：`0.0010498 * 30 = 0.031494`，即只需3分钱；
According to this, the capacity fee for 30 days per month can be calculated as: `0.0010498 * 30 = 0.031494`, that is, only 3 cents;

注意：云存储容量仅跟保留的历史升级包多少有关系，跟日活用户无关。
Note: The cloud storage capacity is only related to the number of historical upgrade packages retained, and has nothing to do with daily active users.

##### 下载操作次数计费点
##### Billing points for the number of download operations

下载操作次数计费点：仅触发文件下载时会触发，若无新版本下载，则不会触发。
Billing point for the number of download operations: it will only be triggered when the file download is triggered, and will not be triggered if there is no new version downloaded.

假设你的App日活为100、月活为1500，每月发一次版本；月活用户中，50%会选择升级到新版本，我们可计算下载次数为：`1500*50% = 750次`。
Assume that your app has 100 daily active users and 1500 monthly active users, and a version is released every month; 50% of the monthly active users will choose to upgrade to the new version. We can calculate the number of downloads as: `1500*50% = 750 times`.

而云存储的下载操作次数计费规则为：每万次0.01元，即每万次下载1分钱，750次下载远还不到1分钱，故下载操作计费点可直接忽略。
The billing rule for the number of download operations of cloud storage is: 0.01 yuan per 10,000 times, that is, 1 cent for every 10,000 downloads, and 750 downloads are far less than 1 cent, so the charging point for download operations can be directly ignored.

##### 上传操作次数计费点
##### Billing points for the number of upload operations

每次App发版，仅需管理员上传一次新的资源包，用户App端检查升级时，不涉及上传操作，故上传操作次数计费点亦可忽略。
Every time the app is released, the administrator only needs to upload a new resource package once. When the user checks and upgrades on the app side, no upload operation is involved, so the charging point for the number of upload operations can also be ignored.

##### CDN流量费
##### CDN traffic fee

CDN流量费：我们假设50%概率启用wgt资源包升级（升级包为10M），50%概率为整包升级；而整包升级中，20%为苹果用户（使用apple store流量），80%为安卓用户（升级包为40M）。
CDN traffic fee: We assume a 50% probability of enabling the wgt resource package upgrade (the upgrade package is 10M), and a 50% probability of upgrading the whole package; and in the whole package upgrade, 20% are Apple users (using apple store traffic), and 80% are Android users (the upgrade package is 40M).

则按照如上数据模型，日活为100的App，假期其月活为1500，而月活用户中，50%会选择升级到新版本，即750人选择升级，不同升级包消耗CDN流量如下：
According to the above data model, an app with a daily activity of 100 will have a monthly activity of 1500 during holidays, and 50% of the monthly active users will choose to upgrade to the new version, that is, 750 people will choose to upgrade. The CDN traffic consumed by different upgrade packages is as follows:
- wgt资源包CDN流量：750 * 50% * 10 / 1024 = 3.662G
- CDN traffic of wgt resource pack: 750 * 50% * 10 / 1024 = 3.662G
- 苹果整包升级CDN流量：使用apple store流量，uniCloud云存储流量为0
- Apple package upgrade CDN traffic: use apple store traffic, uniCloud cloud storage traffic is 0
- 安卓整包升级CDN流量：750 * 50% * 80% * 40 /1024 = 11.719G
- CDN traffic for Android package upgrade: 750 * 50% * 80% * 40 /1024 = 11.719G

即：日活为100的App，月度CDN流量为：`3.662 + 0 + 11.719 = 15.381G`，对应费用则为：`15.381 * 0.18 = 2.76858` （元）
That is: for an app with 100 daily active users, the monthly CDN traffic is: `3.662 + 0 + 11.719 = 15.381G`, and the corresponding fee is: `15.381 * 0.18 = 2.76858` (yuan)

同理，我们可推导出日活为1000的App，其升级中心云存储每月的CDN费用为27.6858元。
In the same way, we can deduce that for an App with 1000 DAU, the monthly CDN fee for its uni-upgrade-center cloud storage is 27.6858 yuan.

##### 和传统 OSS + CDN 对比
##### Comparison with traditional OSS + CDN

如果你不用`uni-upgrade-center`，选择如阿里云的传统`OSS + CDN` 方案，同样按量计费的情况下，1PB流量以内，传统CDN都没有价格优势；传统CDN每GB的起步价为0.24元，而uniCloud云存储CDN每GB的费用为0.18元。
If you don’t use `uni-upgrade-center`, choose Alibaba Cloud’s traditional `OSS + CDN` solution. In the same case of billing according to volume, traditional CDNs have no price advantage within 1PB of traffic; traditional CDNs start at a GB The price is 0.24 yuan, while the cost per GB of uniCloud cloud storage CDN is 0.18 yuan.

![](https://mp-8ca8132b-2139-4831-aff2-582d4c8385da.cdn.bspapp.com/cloudstorage/d9ff593a-fb54-43fd-a58e-bbcb3294a82c.jpg)

详见：[阿里云官网CDN定价详情](https://www.aliyun.com/price/product?spm=a2c4g.11186623.0.0.4a6f31c9cwW5vQ#/cdn/detail/cdn)
For details, see: [Alibaba Cloud official website CDN pricing details](https://www.aliyun.com/price/product?spm=a2c4g.11186623.0.0.4a6f31c9cwW5vQ#/cdn/detail/cdn)

1PB流量是什么概念？我们以每个安卓安装包为40M为例，需要 `1 * 1024 * 1024 * 1024 / 40 = 26843546`，即需要2600万人次安装包下载才能达到1PB流量，你可以评估一下你的App何时可以达到这个量级。
What is the concept of 1PB traffic? Let's take each Android installation package as an example of 40M, which requires `1 * 1024 * 1024 * 1024 / 40 = 26843546`, that is, 26 million downloads of the installation package are required to achieve 1PB traffic, you can evaluate when your App will be ready reach this level.

> 具体解释一下：1PB = 1024TB，1TB = 1024G，1G = 1024M，故上面公式连乘3个1024
> Explain in detail: 1PB = 1024TB, 1TB = 1024G, 1G = 1024M, so the above formula is multiplied by 3 1024

也有人说了，购买阿里云CDN资源包可以更便宜。确实，购买大额资源包会更便宜，但这个方案有两个缺点：
Some people also said that buying Alibaba Cloud CDN resource packages can be cheaper. It is true that it is cheaper to buy large resource packs, but this solution has two disadvantages:
- 这个资源包仅仅是CDN流量包，你还需要购买OSS回源流量包，而uniCloud直接将回源流量费用包在CDN费用之内了，无需额外购买回源流量。
- This resource package is only a CDN traffic package. You also need to purchase an OSS back-to-source traffic package, and uniCloud directly includes the back-to-source traffic fee in the CDN fee, and there is no need to purchase additional back-to-source traffic.
- 预付费，在业务发展不明朗的情况下，一次性投入太多钱；一旦业务失败，CDN资源包未消耗完毕，也不能退款，浪费资金；而按量计费则没有这个问题，真实用多少资源，就花多少钱；
- Prepayment, when the business development is uncertain, too much money is invested at one time; once the business fails, the CDN resource package is not consumed, and refunds cannot be made, which is a waste of money; while billing by volume does not have this problem, it is true How much resources are used, how much money is spent;

综合来看，uniCloud云存储相比传统云厂商的`OSS + CDN` 方案：
On the whole, uniCloud cloud storage compared with the `OSS + CDN` solution of traditional cloud vendors:
- 都选择按量计费，uniCloud版CDN默认0.18元更具价格优势；
- Both choose pay-as-you-go, and the uniCloud version CDN defaults to 0.18 yuan, which has a price advantage;
- 预付费方式，选购云厂商CDN资源包，需额外购买回源流量包，对普通开发者，特别是中小开发者，并不友好，此时依然是uniCloud按量计费的云存储更具性价比。
- The prepaid method, if you purchase a CDN resource package from a cloud vendor, you need to purchase an additional back-to-source traffic package, which is not friendly to ordinary developers, especially small and medium-sized developers. cost-effective.

#### 前端网页托管
#### Front-end web hosting

`uni-upgrade-center`需要和`uni-admin`配合使用，`uni-admin`需要部署在前端网页托管中。`uni-admin`主要是管理员使用，使用频次较少，流量也较低。
`uni-upgrade-center` needs to be used in conjunction with `uni-admin`, and `uni-admin` needs to be deployed in the front-end web hosting. `uni-admin` is mainly used by administrators, with less frequent use and lower traffic.

按照[uniCloud官网](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)介绍，前端网页托管费用 = `容量费 + 流量费`。
According to [uniCloud official website](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay), the front-end web hosting fee = `capacity fee + traffic fee`.

##### 容量费
##### Capacity Fee

`uni-admin`编译后为4.7M，按照官网每GB每天0.0043元的规则，`uni-admin`的月度容量费为：`4.7 / 1024 * 0.0043 * 30 = 0.00059`，不到1分钱，可忽略。
`uni-admin` is compiled to 4.7M. According to the rule of 0.0043 yuan per GB per day on the official website, the monthly capacity fee of `uni-admin` is: `4.7 / 1024 * 0.0043 * 30 = 0.00059`, which is less than 1 cent. Ignorable.

##### 流量费
##### traffic fee

管理员登录`uni-admin`，到升级中心管理页面浏览并发布新版，所需流量不超过3M，即使每月发布2次更新，流量费预估为：`3 / 1024 * 0.18 * 2 = 0.00105`，也不到1分钱，也可忽略。
The administrator logs in to `uni-admin`, browses and publishes new versions on the management page of the uni-upgrade-center, and the traffic required does not exceed 3M. Even if updates are released twice a month, the estimated traffic fee is: `3 / 1024 * 0.18 * 2 = 0.00105 `, less than 1 cent, can also be ignored.

#### 合并计算
#### Combine calculation

细项对比完了，我们来合并看看，使用uniCloud升级中心，到底需要花多少钱，相比传统自己研发升级逻辑、搭建升级中心，哪些地方都需要花钱，差异点在哪里？
After comparing the details, let’s take a look at how much it costs to use the uniCloud uni-upgrade-center. Compared with the traditional self-developed upgrade logic and building an uni-upgrade-center, where do you need to spend money? What are the differences?

不管是开发者自研的升级方案，还是`uni-upgrade-center`，存储+CDN的费用都是必需的，前文也将传统`OSS+CDN`和uniCloud云存储的性价比进行了对比，均按量计费的模式下，uniCloud更具性价比；以资源包方式购买传统CDN模式下，各有优劣。
Whether it is the upgrade solution developed by the developer or `uni-upgrade-center`, the cost of storage + CDN is required. The previous article also compared the cost performance of traditional `OSS+CDN` and uniCloud cloud storage, all according to In the mode of volume billing, uniCloud is more cost-effective; in the traditional CDN mode of purchasing resource packages, each has its own advantages and disadvantages.

既然两个方案，都绕不开云存储，那我们暂时抛开云存储对比，将其他各项按照日活用户规模罗列一下，看看`uni-upgrade-center`在其他维度所需费用。
Since the two solutions cannot bypass cloud storage, let's put aside the comparison of cloud storage for the time being, and list other items according to the number of daily active users to see the cost of `uni-upgrade-center` in other dimensions.

|日活	|云函数（元）		|云数据库（元）	|云存储（元）	|前端网页托管（元）	|合计（元）		|
|daily activity |cloud function (yuan) |cloud database (yuan) |cloud storage (yuan) |front-end web hosting (yuan) |total (yuan) |
|:-:    |:-:        |:-:    |:-:    |:-:        |:-: |
|100	|0.0245688	|0.009		|忽略	|0				|0.0335688	|
| 100 | 0.0245688 | 0.009 | ignore | 0 | 0.0335688 |
|1000	|0.245688	|0.09		|忽略	|0				|0.335688	|
| 1000 | 0.245688 | 0.09 | ignore | 0 | 0.335688 |
|10000	|2.45688	|0.9		|忽略	|0				|3.35688	|
| 10000 | 2.45688 | 0.9 | Ignored | 0 | 3.35688 |
|100000	|24.5688	|9			|忽略	|0				|33.5688	|
| 100000 | 24.5688 | 9 | Ignored | 0 | 33.5688 |

#### uni-upgrade-center 给你带来的收益
#### uni-upgrade-center benefits for you

使用`uni-upgrade-center`，免费获取、一键安装，你将获得：
Use `uni-upgrade-center`, free access, one-click installation, you will get:
- 经受大量App验证的、完备的检查升级逻辑，同时支持整包/资源包升级，支持静默升级，支持强制升级；
- Complete inspection and upgrade logic that has been verified by a large number of apps, and supports whole package/resource package upgrades, silent upgrades, and forced upgrades;
- 完备的管理功能，分平台发布新版、下线老版，关联应用商店，分渠道发布等。
- Complete management functions, release new version by platform, offline old version, associate application store, release by channel, etc.
- 代码开源，随意定制
- The code is open source and can be customized at will

如上功能，如果你使用传统模式自研，需要前后端配合开发，后端使用php/java做接口，前端发起Ajax请求，处理服务端的各种响应和错误码，处理升级弹窗提醒，这些功能做完善至少需要4个工作日。
For the above functions, if you use the traditional model for self-development, you need to cooperate with the front-end and back-end for development. The back-end uses php/java as the interface, the front-end initiates Ajax requests, handles various responses and error codes from the server, and handles upgrade pop-up reminders. These functions do Perfection takes at least 4 working days.

假设工程师月薪18K，社保等综合管理成本是薪资的1.4倍，则4个工作日的综合成本为：`18*1000*1.4/22 * 4 = 4582元`。
Assuming that the monthly salary of an engineer is 18K, and the comprehensive management costs such as social security are 1.4 times the salary, the comprehensive cost of 4 working days is: `18*1000*1.4/22 * 4 = 4582 yuan`.

#### 总结
#### Summarize

再次说回`uni-upgrade-center`，相比传统方式自研升级中心，存储+CDN的钱都是要花的，我们忽略它。
Let’s talk about `uni-upgrade-center` again. Compared with the traditional self-developed uni-upgrade-center, the money for storage + CDN will be spent, so we ignore it.

其它云函数、云数据库等，虽然看起来是额外增加的费用，但实际上你使用传统php/java自研升级逻辑，除了自研人力费用，后期也是需要消耗CPU、内存、带宽资源的，只是这些费用合并到虚拟机的整体租用成本中，你无法拆出来计算罢了。
Other cloud functions, cloud databases, etc. seem to be additional costs, but in fact, if you use the traditional php/java self-developed upgrade logic, in addition to self-developed labor costs, the later stage will also consume CPU, memory, and bandwidth resources. These costs are incorporated into the overall rental cost of the virtual machine, and you cannot separate them out for calculation.

再看回刚才的计算表，以1000日活用户来说，云函数、云数据库每月才多了0.34元，每年才多了4块钱（不考虑云存储CDN的情况下），一年多花4块钱，可以省掉自研的4500多元人工费用，可以让工程师将更多精力投入核心业务中。这5块钱的买卖，不划算吗？它不香吗？
Looking back at the calculation table just now, for 1,000 daily active users, the monthly increase of cloud functions and cloud databases is only 0.34 yuan, and the annual increase is only 4 yuan (not considering the cloud storage CDN), which costs more than one year 4 yuan, you can save more than 4,500 yuan in labor costs for self-development, and allow engineers to devote more energy to their core business. Isn't it a good deal for this 5 yuan deal? Isn't it fragrant?

|日活	|云函数（元）		|云数据库（元）	|云存储（元）	|前端网页托管（元）	|合计（元）		|
|daily activity |cloud function (yuan) |cloud database (yuan) |cloud storage (yuan) |front-end web hosting (yuan) |total (yuan) |
|:-:    |:-:        |:-:    |:-:    |:-:        |:-: |
|100	|0.0245688	|0.009		|忽略	|0				|0.0335688	|
| 100 | 0.0245688 | 0.009 | ignore | 0 | 0.0335688 |
|1000	|0.245688	|0.09		|忽略	|0				|0.335688	|
| 1000 | 0.245688 | 0.09 | ignore | 0 | 0.335688 |
|10000	|2.45688	|0.9		|忽略	|0				|3.35688	|
| 10000 | 2.45688 | 0.9 | Ignored | 0 | 3.35688 |
|100000	|24.5688	|9			|忽略	|0				|33.5688	|
| 100000 | 24.5688 | 9 | Ignored | 0 | 33.5688 |

不重复制造轮子，聚焦业务，快速验证模式，实现商业增长，才应该是聪明工程师的追求。
It should be the pursuit of smart engineers not to repeat manufacturing wheels, focus on business, quickly verify models, and achieve business growth.
