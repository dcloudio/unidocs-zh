## App升级中心 uni-upgrade-center

### 概述

App升级中心 uni-upgrade-center，提供了 App 的版本更新服务。包括
- Android、iOS的完整App安装包升级和wgt资源包增量更新
- 后台管理系统，用于发布新版、设置升级策略

> 如果需要初次发布，而不是升级，另见产品 [uni-portal 统一发布页](uni-portal.md)

本产品具有如下特征：

- 开源、免费。uniCloud阿里云版和支付宝云版都有免费空间。

- 云端基于 [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/) 实现。后台管理是 [uni-admin](https://uniapp.dcloud.net.cn/uniCloud/admin.html) 框架的插件。

- 数据库遵循 [opendb](https://uniapp.dcloud.net.cn/uniCloud/opendb.html) 规范
- **关于应用转让后升级中心（uni-upgrade-center）的使用问题** [详情](https://ask.dcloud.net.cn/article/40112)

从 uni-upgrade-center xx（```注意别漏了这里！！！！```） 版本起，开始支持uni-app x。

为了一套代码同时兼容uni-app和uni-app x，升级中心改为了ts代码。如果开发者的项目下未使用ts，那么需要增加ts编译。HBuilderX项目会自动加载ts编译器，cli项目则需要自己手动配置。

### 为什么需要升级中心？

每个App开发者都要开发升级功能，这是巨大的社会资料浪费。DCloud推出 uni-upgrade-center，让应用开发更轻松、高效，让开发者专注于自己的业务。

> 升级中心分为两个部分：[uni-upgrade-center Admin管理后台](https://ext.dcloud.net.cn/plugin?id=4470) 和 [uni-upgrade-center-app前台检测更新](https://ext.dcloud.net.cn/plugin?id=4542)。

### uni-upgrade-center Admin 管理后台@uni-upgrade-center-admin

负责发布新版和管理历史版本的上下线。提供了如下功能：

- 云储存安装包CDN加速，使安装包下载的更快、更稳定

- 应用管理，对 App 的信息记录和应用版本管理

- 版本管理，可以发布新版，也可方便直观的对当前 App 历史版本以及线上发行版本进行查看、编辑和删除操作

- 版本发布信息管理，包括 更新标题，更新内容，版本号，静默更新，强制更新，灵活上线发行 的设置和修改

- 原生 App 安装包，发布 Apk 更新，用于 App 的整包更新，可设置是否强制更新

- wgt 资源包，发布 wgt 更新，用于 App 的热更新，可设置是否强制更新，静默更新（uni-app x的app-Android由于编译为纯原生，没有wgt包，无法热更新）

- App 管理列表及 App 版本记录列表搜索

#### 使用教程

**新建 uni-admin 项目**

1. 新建项目：`打开HBuilderX` -> `文件` -> `新建` -> `项目` -> `uni-app` 选择 `uniCloud admin`模板，键入一个名字，确定

2. 鼠标右键 `uniCloud 文件夹` 选择`关联云服务空间`和`运行云服务空间初始化向导`

**添加应用**

> 运行 uni-admin 到浏览器，在左侧菜单 `系统管理 -> 应用管理` 中新增应用后，即可在 `App升级中心` 发布该应用的版本 [详情](https://uniapp.dcloud.net.cn/uniCloud/admin.html#app-manager)


添加应用后，即可在应用管理列表中跳转至版本管理页面：

<div align="center">
<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/upgrade-center-jump.jpg" width="800"></img>
</div>

**版本管理**

1. 在版本管理列表页面右上角点击`发布新版`，可以发布`原生App安装包`和`wgt资源包`。在左上角点击`下拉列表`，可以切换展示应用。

<div align="center">
<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/version_list_new.png" width="800"></img>
</div>

- 发布原生App安装包
	1. 在上传安装包界面填写此次发版信息

	<div align="center" >
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/publish_apk.jpg" width="600"></img>
	</div>

	2. `版本号`：请填写以`.`分隔字符串，例如：`0.0.1`。在构建应用安装包时，`manifest.json` 中的 `应用版本名称` 也要是该格式。

  3. `Android应用市场`
		- 此处会与 `新增应用` 时填写的 `Android应用市场` 信息保持同步。当在应用管理修改应用信息时，这里也会修改
		- 启用商店：当勾选某一商店启用时，在 `upgrade-center-app` 端会检测手机上是否有该应用市场
    		- 如果有，则会跳转至该应用商店进行 App 升级
    		- 如果都跳转失败，最后会使用填写的 `下载链接` 下载 apk 安装包升级
		- 优先级：检查更新时，按照优先级从大到小依次尝试跳转商店

	4. `下载链接/AppStore`
		- 可以选择手动上传一个文件到 `云存储`，会自动将地址填入该项
		- 也可以手动填写一个地址，就可以不用再上传文件
		- 如果是发布 `苹果` 版本，包地址则为应用的 `AppStore 链接`

	5. `强制更新`
		- 如果使用强制更新，App端的升级弹框将不可被关闭

	6. `上线发行`
		- 可设置当前包是否上线发行，只有已上线才会进行更新检测
		- 同时只可有一个线上发行版，线上发行不可更设为下线。未上线可以设为上线发行并自动替换当前线上发行版
		- 修改当前包为上线发行，自动替换当前线上发行版

- 发布wgt资源包
	1. 大部分配置与发布 `原生App安装包` 一致

	<div align="center">
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/publish_wgt.png" width="400"></img>
	</div>

	2. `原生App最低版本`
		- 上次使用新api或打包新模块的pp版本
		- 如果此次打包的wgt使用了 `新的 api` 或者打包了 `新的模块` ，则在发布 `wgt资源包` 的时候，要将 `原生App最低版本` 填写为本次版本
		- 如果已有正式版 `wgt资源包` ，则会自动带出

	3. `静默更新`
		- App升级时会在后台下载wgt包并自行安装。新功能在下次启动App时生效
		- **静默更新后不重启应用，可能会导致正在访问的应用的页面数据错乱，请谨慎使用！**

- 发布完成页面

	<div align="center">
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/version_list_new2.png" width="800"></img>
	</div>

**Tips**
- `/uni_modules/uni-upgrade-center/pages/version/add.vue`中有版本对比函数（compare）。
	- 使用多段式版本格式（如："3.0.0.0.0.1.0.1", "3.0.0.0.0.1"）。如果不满足对比规则，请自行修改。
- 删除应用会把该应用的所有版本记录同时删除
- iOS的Appstore是禁止热更新的。本产品的iOS热更新功能，主要是为企业用户设计的。如果您在Appstore公开市场使用热更新，需要自己承担政策风险。
- 可以通过以下修改支持iOS的wgt更新：
	> \uni_modules\uni-upgrade-center\pages\mixin\version_add_detail_mixin.js
	>
	> 将 `data` 中的 `enableiOSWgt` 属性设置为 `true` 即可

### uni-upgrade-center-app 前台检测更新@uni-upgrade-center-app

除了管理端，升级中心还包括客户端。负责前台检查升级更新，弹出提示框，下载和安装新版。

<div align="left" style="display:flex;align-items:center;">
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/upgrade_center_1.jpg" alt="官方升级弹框样式" width="250"></img>
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/update_app_store.png" alt="升级支持多商店" width="250"></img>
	<img style="margin-left:20px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/upgrade_center_3.jpg" alt="使用uni.showModal自定义弹框" width="250"></img>
</div>

提供了如下功能：

- 基于`uni-upgrade-center`一站式检查更新，统一整包与 wgt 资源包更新

- 自行根据传参完成校验，判断此次更新使用哪种方式

- 弹框、下载、安装、是否强制重启等逻辑已集成

- 下载完成如被用户取消升级，自动缓存安装包，下次进入判断是否符合安装条件，判断通过会复用已下载的包进行安装；判断不通过则自动清除

- 弹框美观，可自定义ui


**安装指引**

1. 在插件市场打开本插件页面，在右侧点击`使用 HBuilderX 导入插件`，选择要导入的项目点击确定 [插件地址](https://ext.dcloud.net.cn/plugin?id=4542)

2. 创建 uniCloud 云开发环境

3. 绑定服务空间：
   - 插件版本 `>= 0.6.0`，依赖 `uni-admin 1.9.3+` 的 `uni-upgrade-center 云函数`，请和 uni-admin 项目关联同一个服务空间
   - 插件版本 `<= 0.6.0`，请绑定到一个已有的服务空间或者新建一个服务空间进行绑定

4. 上传云函数：
   - 插件版本 `>= 0.6.0`，依赖 `uni-admin 1.9.3+` 的 `uni-upgrade-center 云函数`，插件不再单独提供云函数，可以跳过此步骤
   - 插件版本 `<= 0.6.0`，找到`/uni_modules/uni-upgrade-center-app/uniCloud/cloudfunctions/check-version`，右键上传部署

5. 如果是uni-app，需在`pages.json`中添加页面路径。**注：请不要设置为pages.json中第一项**。如果是uni-app x，无需此步骤。

	因为弹出框，在uni-app上，为了盖住tabbar、导航栏以及vue页面上的原生元素，使用了背景透明的独立页面。而uni-app x下使用的是组件。

	```json
	"pages": [
			// ……其他页面配置
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

> 该函数在utils目录下

1. 如果是静默更新，则不会打开更新弹框，会在后台下载后安装，下次启动应用生效

2. 如果是 iOS，则会直接打开AppStore的链接

3. 其他情况，会将检查更新云函数返回的结果保存在localStorage中，并跳转进入`upgrade-popup.vue`打开更新弹框

**Tips**

1. 检查更新云函数内部有版本对比函数（compare）。
	- 使用多段式版本格式（如："3.0.0.0.0.1.0.1", "3.0.0.0.0.1"）。如果不满足对比规则，请自行修改。
	- 如果修改，请将*pages/upgrade-popup.vue*中*compare*函数一并修改

#### 兼容 uni-app x @uni-upgrade-center-app-uni-app-x

> 安装方式同上

**使用指引**

1. 升级中心在 uni-app x 端是 easycom 弹窗组件，在需要显示升级弹窗的页面直接使用组件即可

	> 注意组件的 `ref` 属性

	```html
	<!-- 该组件的 @close 方法，会在关闭弹窗的时候调用 -->
	<uni-upgrade-center-app ref="upgradePopup" @close="upgradePopupClose" />
	```

2. 在 `script` 标签顶部引入 `checkVersion` 方法

	```js
	import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update'
	```

3. 在需要调用的地方执行 `checkUpdate` 方法，比如在 `onReady` 生命周期中（注：因为是组件所以一定要保证页面加载完毕）：

	```html
	<template>
		<view>
			<!-- 页面其他内容 -->
			<uni-upgrade-center-app ref="upgradePopup" @close="upgradePopupClose" />
		</view>
	</template>
	<script>
		import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update'
		// ...
		export default {
			// ...
			onReady() {
				// 此处的 UniUpgradeCenterAppComponentPublicInstance 类型是 easycom 组件使用约定，详见：https://uniapp.dcloud.net.cn/uni-app-x/component/#method-easycom
				// 此处的 upgradePopup 要和组件的 ref 属性一致
				checkUpdate(this.$refs['upgradePopup'] as UniUpgradeCenterAppComponentPublicInstance)
			}
			// ...
		}
	</script>
	```

4. 第 3 步使用是打开页面就检查更新，如果有更新就出弹窗。也可以在任何地方使用，或者该用其他方式调用

### 费用评测@upgrade-center-fee


使用升级中心，涉及uniCloud的付费问题，那么相比于自己搭服务器，使用uniCloud的费用到底合不合适。这里帮开发者算下账。

以阿里云[按量计费](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)为例，预测下`uni-upgrade-center`在不同用户规模下的资源消耗及对应费用，帮助大家明智选择。

本文主要分为三个部分：
- `uni-upgrade-center`消耗的资源费用测算(云函数、云数据库、云存储、前端网页托管分别测算)
- `uni-upgrade-center`给你带来的收益
- 综合考虑，你该如何选择

`uni-upgrade-center`升级中心涉及费用的部分主要分为：
- 云函数：`uni-upgrade-center`云函数，将客户端版本和服务端最新版本进行对比，返回是否需升级的逻辑
- 云数据库：`opendb-app-versions`表，存储版本信息
- 云存储：放置近期的升级包资源（apk/ipa/wgt）
- 前端网站托管：部署`uni-admin`，管理员发布新版本

接下来，我们对不同资源，分别进行费用评估。

#### 云函数

启用`uni-upgrade-center`升级中心后，你的App每次启动，会请求一次`uni-upgrade-center`云函数。

我们按照uniCloud官网列出的[按量计费](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)规则，可以得出如下云函数资源消耗计算公式：

`云函数费用 = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8`

其中：
- 资源使用量 = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数
- 调用次数 = App日活 * 每日活用户平均每天启动App次数，因为App每次启动，均会执行检查更新逻辑

我们假设如下数据模型：

- 云函数内存：256M，即0.25G；注意云函数内存默认为512M，`uni-upgrade-center`云函数建议设置为256M
- 云函数平均单次执行时长：100毫秒，即0.1秒
- 每日活用户平均每天启动App次数：2次
- 出网流量：0，升级中心无需链接外网

按照如上公式，你的App若有100个日活用户，其升级中心云函数每天的费用为：

```
云函数费用（天） = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
			  = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数 + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
			  = 0.25G * 0.1S * 100 * 2 * 0.000110592 + 100 * 2 * 0.0133/10000 + 0
			  = 0.00081896（元）
```

即：你的App日活为100，使用`uni-upgrade-center`商业版后，对应云函数每天大概消耗0.00081896元。

据此，可计算其每月的费用为：0.00081896 * 30 = 0.0245688，即每月只需2分钱；

同理，我们可推导出日活为1000、10000、10万的App，其升级中心云函数每月费用如下表：

|日活	|资源使用量计费（元）	|调用次数计费（元）	|出网流量计费（元）	|合计（元）		|
|:-:    |:-:            |:-:        |:-:        |:-:        |
|100	|0.0165888		|0.00798		|0				|0.0245688	|
|1000	|0.165888		|0.0798			|0				|0.245688	|
|10000	|1.65888		|0.798			|0				|2.45688	|
|100000	|16.5888		|7.98			|0				|24.5688	|

日活1000的App，云函数月度消耗才两毛五（0.25元），真是毛毛雨了。

#### 云数据库

按照[uniCloud官网](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)介绍，云数据库费用 = `容量费用 + 读操作次数费用 + 写操作次数费用`，其中：

- 容量费用：数据库存储容量（单位为G） * 0.07
- 读操作次数费用：读操作次数（万次） * 0.015
- 写操作次数：写操作次数（万次） * 0.015；

##### 容量费用

我们以`hello uni-app`为例，`opendb-app-versions`数据表中共存储30条升级记录，容量大小为8K。
据此可计算出`opendb-app-versions`表的日存储费用为：`8/1024/1024 * 0.07 = 0.000000534`

> 容量计费单位是G，故需先将8K折算成M，再折算成G，故上述公式中连续除了两个1024

1月按30天算，则月存储费用为`0.000000534 * 30 = 0.000016`，还不到1分钱，可忽略。

注意：数据库容量仅跟发布版本多少有关系，跟日活用户无关。

##### 读操作次数

在uni升级中心业务中，云函数`uni-upgrade-center`每次执行，仅调用一次数据库读取（读取一次`opendb-app-versions`表），故数据库的读操作次数等同于云函数的`调用次数`，前文有过公式，云函数调用次数 = `App日活 * 每日活用户平均每天启动App次数`，每日活用户平均每天启动App次数我们假设为2次。

我们即可推算，如果一个App的日活为100，则uni升级中心每日云数据库读操作次数费用计算如下：

```
读操作次数费用 = 读操作次数（万次） * 0.015
			= 云函数调用次数（万次） * 0.015
			= App日活 * 每日活用户平均每天启动App次数 / 10000 * 0.015
			= 100 * 2 / 10000 * 0.015
			= 0.0003
```

1月按30天算，则每月云数据库读操作次数费用为`0.0003 * 30 = 0.009`，还不到1分钱。

同理，我们可推导出日活为1000、10000的App，其uni升级中心每月云数据库读操作次数费用为9分钱、9毛钱。

##### 写操作次数

`uni-upgrade-center`升级中心，写数据库操作很少；管理员仅在每次发布新版时，通过`uni-admin`向`opendb-app-versions`表插入一条新版本信息；用户端App每次启动检查升级，无需数据表的写入操作，故写操作次数可忽略为0；

##### 小结

因为容量费和写操作次数费用均可忽略为0，根据公式：

```
云数据库费用 = 容量费（忽略为0） + 读操作费用 + 写操作费用（忽略为0）
		   = 读操作费用
```

可推导，uni升级中心的云数据库计费主要是读操作次数计费，因此我们进一步得出如下预测：

|日活	|容量费（元）	|读操作次数费用（元）	|写操作次数费用（元）	|合计（元）	|
|:-:    |:-:    |:-:            |:-:            |:-:    |
|100	|0		|0.009			|0				|0.009	|
|1000	|0		|0.09			|0				|0.09	|
|10000	|0		|0.9			|0				|0.9	|
|100000	|0		|9				|0				|9		|


#### 云存储

按照[uniCloud官网](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)介绍，云存储费用 = `容量费 + 下载操作次数计费点 + 上传操作次数计费点 + CDN流量费`。

如果您的应用每次均上架到apple store或安卓各应用商店，升级时从应用商店下载安装，则云存储费用为0，因为使用的是应用商店的存储和CDN下载流量，本计费点测评章节可直接跳过。

> uni-upgrade-center 支持设置应用新版安装包下载地址为应用商店地址，这样就可以使用应用商店的存储和CDN，不消耗uniCloud的云存储资源。

现阶段，iOS平台均需上架apple store，我们可以忽略iOS平台的云存储消耗。

如果您的安卓apk安装包及wgt差量升级包全部托管在uniCloud云存储中，我们也可以算算这笔账。

##### 容量费

容量费主要是存储费用，我们可以定期将过期版本删除，从而节省容量费。

假设我们在云存储中保留最近5个版本的文件，apk/wgt全部保留，大小假设分别为：40M、10M。

>如前所言，ipa需上架apple store，不使用云存储，测评可忽略。

则每天容量费用为：`5 * (40+10)/1024 * 0.0043 = 0.0010498`

据此，可计算其每月30天的容量费用为：`0.0010498 * 30 = 0.031494`，即只需3分钱；

注意：云存储容量仅跟保留的历史升级包多少有关系，跟日活用户无关。

##### 下载操作次数计费点

下载操作次数计费点：仅触发文件下载时会触发，若无新版本下载，则不会触发。

假设你的App日活为100、月活为1500，每月发一次版本；月活用户中，50%会选择升级到新版本，我们可计算下载次数为：`1500*50% = 750次`。

而云存储的下载操作次数计费规则为：每万次0.01元，即每万次下载1分钱，750次下载远还不到1分钱，故下载操作计费点可直接忽略。

##### 上传操作次数计费点

每次App发版，仅需管理员上传一次新的资源包，用户App端检查升级时，不涉及上传操作，故上传操作次数计费点亦可忽略。

##### CDN流量费

CDN流量费：我们假设50%概率启用wgt资源包升级（升级包为10M），50%概率为整包升级；而整包升级中，20%为苹果用户（使用apple store流量），80%为安卓用户（升级包为40M）。

则按照如上数据模型，日活为100的App，假期其月活为1500，而月活用户中，50%会选择升级到新版本，即750人选择升级，不同升级包消耗CDN流量如下：
- wgt资源包CDN流量：750 * 50% * 10 / 1024 = 3.662G
- 苹果整包升级CDN流量：使用apple store流量，uniCloud云存储流量为0
- 安卓整包升级CDN流量：750 * 50% * 80% * 40 /1024 = 11.719G

即：日活为100的App，月度CDN流量为：`3.662 + 0 + 11.719 = 15.381G`，对应费用则为：`15.381 * 0.18 = 2.76858` （元）

同理，我们可推导出日活为1000的App，其升级中心云存储每月的CDN费用为27.6858元。

##### 和传统 OSS + CDN 对比

如果你不用`uni-upgrade-center`，选择如阿里云的传统`OSS + CDN` 方案，同样按量计费的情况下，1PB流量以内，传统CDN都没有价格优势；传统CDN每GB的起步价为0.24元，而uniCloud云存储CDN每GB的费用为0.18元。

![](https://mp-8ca8132b-2139-4831-aff2-582d4c8385da.cdn.bspapp.com/cloudstorage/d9ff593a-fb54-43fd-a58e-bbcb3294a82c.jpg)

详见：[阿里云官网CDN定价详情](https://www.aliyun.com/price/product?spm=a2c4g.11186623.0.0.4a6f31c9cwW5vQ#/cdn/detail/cdn)

1PB流量是什么概念？我们以每个安卓安装包为40M为例，需要 `1 * 1024 * 1024 * 1024 / 40 = 26843546`，即需要2600万人次安装包下载才能达到1PB流量，你可以评估一下你的App何时可以达到这个量级。

> 具体解释一下：1PB = 1024TB，1TB = 1024G，1G = 1024M，故上面公式连乘3个1024

也有人说了，购买阿里云CDN资源包可以更便宜。确实，购买大额资源包会更便宜，但这个方案有两个缺点：
- 这个资源包仅仅是CDN流量包，你还需要购买OSS回源流量包，而uniCloud直接将回源流量费用包在CDN费用之内了，无需额外购买回源流量。
- 预付费，在业务发展不明朗的情况下，一次性投入太多钱；一旦业务失败，CDN资源包未消耗完毕，也不能退款，浪费资金；而按量计费则没有这个问题，真实用多少资源，就花多少钱；

综合来看，uniCloud云存储相比传统云厂商的`OSS + CDN` 方案：
- 都选择按量计费，uniCloud版CDN默认0.18元更具价格优势；
- 预付费方式，选购云厂商CDN资源包，需额外购买回源流量包，对普通开发者，特别是中小开发者，并不友好，此时依然是uniCloud按量计费的云存储更具性价比。

#### 前端网页托管

`uni-upgrade-center`需要和`uni-admin`配合使用，`uni-admin`需要部署在前端网页托管中。`uni-admin`主要是管理员使用，使用频次较少，流量也较低。

按照[uniCloud官网](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)介绍，前端网页托管费用 = `容量费 + 流量费`。

##### 容量费

`uni-admin`编译后为4.7M，按照官网每GB每天0.0043元的规则，`uni-admin`的月度容量费为：`4.7 / 1024 * 0.0043 * 30 = 0.00059`，不到1分钱，可忽略。

##### 流量费

管理员登录`uni-admin`，到升级中心管理页面浏览并发布新版，所需流量不超过3M，即使每月发布2次更新，流量费预估为：`3 / 1024 * 0.18 * 2 = 0.00105`，也不到1分钱，也可忽略。

#### 合并计算

细项对比完了，我们来合并看看，使用uniCloud升级中心，到底需要花多少钱，相比传统自己研发升级逻辑、搭建升级中心，哪些地方都需要花钱，差异点在哪里？

不管是开发者自研的升级方案，还是`uni-upgrade-center`，存储+CDN的费用都是必需的，前文也将传统`OSS+CDN`和uniCloud云存储的性价比进行了对比，均按量计费的模式下，uniCloud更具性价比；以资源包方式购买传统CDN模式下，各有优劣。

既然两个方案，都绕不开云存储，那我们暂时抛开云存储对比，将其他各项按照日活用户规模罗列一下，看看`uni-upgrade-center`在其他维度所需费用。

|日活	|云函数（元）		|云数据库（元）	|云存储（元）	|前端网页托管（元）	|合计（元）		|
|:-:    |:-:        |:-:    |:-:    |:-:        |:-: |
|100	|0.0245688	|0.009		|忽略	|0				|0.0335688	|
|1000	|0.245688	|0.09		|忽略	|0				|0.335688	|
|10000	|2.45688	|0.9		|忽略	|0				|3.35688	|
|100000	|24.5688	|9			|忽略	|0				|33.5688	|

#### uni-upgrade-center 给你带来的收益

使用`uni-upgrade-center`，免费获取、一键安装，你将获得：
- 经受大量App验证的、完备的检查升级逻辑，同时支持整包/资源包升级，支持静默升级，支持强制升级；
- 完备的管理功能，分平台发布新版、下线老版，关联应用商店，分渠道发布等。
- 代码开源，随意定制

如上功能，如果你使用传统模式自研，需要前后端配合开发，后端使用php/java做接口，前端发起Ajax请求，处理服务端的各种响应和错误码，处理升级弹窗提醒，这些功能做完善至少需要4个工作日。

假设工程师月薪18K，社保等综合管理成本是薪资的1.4倍，则4个工作日的综合成本为：`18*1000*1.4/22 * 4 = 4582元`。

#### 总结

再次说回`uni-upgrade-center`，相比传统方式自研升级中心，存储+CDN的钱都是要花的，我们忽略它。

其它云函数、云数据库等，虽然看起来是额外增加的费用，但实际上你使用传统php/java自研升级逻辑，除了自研人力费用，后期也是需要消耗CPU、内存、带宽资源的，只是这些费用合并到虚拟机的整体租用成本中，你无法拆出来计算罢了。

再看回刚才的计算表，以1000日活用户来说，云函数、云数据库每月才多了0.34元，每年才多了4块钱（不考虑云存储CDN的情况下），一年多花4块钱，可以省掉自研的4500多元人工费用，可以让工程师将更多精力投入核心业务中。这5块钱的买卖，不划算吗？它不香吗？

|日活	|云函数（元）		|云数据库（元）	|云存储（元）	|前端网页托管（元）	|合计（元）		|
|:-:    |:-:        |:-:    |:-:    |:-:        |:-: |
|100	|0.0245688	|0.009		|忽略	|0				|0.0335688	|
|1000	|0.245688	|0.09		|忽略	|0				|0.335688	|
|10000	|2.45688	|0.9		|忽略	|0				|3.35688	|
|100000	|24.5688	|9			|忽略	|0				|33.5688	|

不重复制造轮子，聚焦业务，快速验证模式，实现商业增长，才应该是聪明工程师的追求。
