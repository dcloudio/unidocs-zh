# 概述

> 鸿蒙元服务就是鸿蒙Next系统上的快应用、小程序。在鸿蒙Next系统上，不再支持快应用，对标产品即为鸿蒙快应用。

> 如果你是服务商、外包商，承诺短期可快速上架20个元服务，欢迎点此[联系我们](https://im.dcloud.net.cn/#/?business_type=harmony-reward)，我们可提供单独技术支持，以及帮助协调鸿蒙测试机。

从 `HBuilderX 4.34` 版本开始，uni-app 支持 **鸿蒙元服务** 平台应用开发。

欢迎加入 [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e) 进行交流。

::: warning 注意

- 目前仅支持 Vue3 项目编译到鸿蒙元服务平台，Vue2 项目升级 Vue3 项目请参考：[Vue2 项目迁移到 Vue3](../migration-to-vue3.md)。
- 目前仅支持鸿蒙真机，鸿蒙模拟器暂不支持，后续鸿蒙模拟器支持后会更新文档。[点击链接](https://consumer.huawei.com/cn/support/harmonyos/models-next/) 查看支持鸿蒙 Next 的机型清单。
:::

## 前置准备

### 开发环境准备

- HBuilderX 4.34+ [下载地址](https://www.dcloud.io/hbuilderx.html)
- DevEco-Studio 5.0.5.200+ [下载地址](https://developer.huawei.com/consumer/cn/download/)

目前 uni-app 开发元服务时，需要先在 DevEco-Studio 初始化元服务的环境，具体步骤如下：

 1. 确保 `hdc` 全局已注册，输入 `hdc -v` 有返回值。`hdc` 是用来和鸿蒙设备交互的命令行，如果打印出错，参考 [鸿蒙配置 HDC](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/hdc-V5) 文档进行配置。
 2. [点击下载自动脚本](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/HarmonyOS-AtomicService-ASCF-Tools-1126.rar)，下载压缩包并解压，并根据操作系统执行下面操作。

**Windows 系统**

1. 手机连接电脑后，确保 `hdc` 命令功能可用，即可右键管理员运行：`鸿蒙元服务ASCF-开发环境初始化（右键管理员运行）.bat`
2. 如果有新的手机，没有安装ASCF依赖库，需要手动运行：`鸿蒙元服务ASCF-手机安装依赖库.bat`

**Mac 系统**

打开终端，进入本工具解压后目录，`chmod +x *.sh` 赋予可执行权限：

1. 手机连接电脑后，确保hdc命令功能可用： `sudo bash ascf-init-env.sh` 。如果执行失败可以执行 `sudo node init-ascf.js all`
2. 如果有新的手机，没有安装ASCF依赖库，需要手动运行：`./ascf-init-phone.sh` 。如果执行失败可以执行 `node init-ascf.js hsp`

**注意**：当前仅支持ide默认安装路径，如果默认安装路径查找失败，请执行设置环境变量后重试。如果你是外置硬盘系统请注意仔细阅读。
windows系统：`set DEVECO_DIR="C:\Program Files\Huawei\DevEco Studio\bin"`
mac系统： `export DEVECO_DIR="/Applications/DevEco-Studio.app/Contents/tools"`。

<details>
<summary>脚本内执行了哪些操作？</summary>
<ul>
<li>判断当前系统，定位到 DevEco Studio 的安装目录</li>
<li>修改替换 `task-service.js` 文件和 `process-profile.js` 文件</li>
<li>下载安装 `com.huawei.hms.ascf` 基础框架</li>
<li>安装 `@atomicservice/ascf-toolkit` npm 依赖</li>
</ul>
<p>随着后续版本的更新，这些操作可能会发生变化</p>
</details>

### 元服务 appid 注册@register-app-id

元服务的开发和上架需要使用元服务的包名 BundleName，包名的形式 `com.atomicservice.[你的 APPID]`。

如果还没有创建元服务，访问 [华为 AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myApp) 完成元服务应用的注册，得到相关包名。方便进行签名证书的操作。

### 元服务上架备案（上架重要）

元服务上架需要提前做好备案，强烈建议注册元服务时候立刻开始备案流程，避免临上架才开始备案，耽误上架时间。参考 [App 备案相关注意事项](https://developer.huawei.com/consumer/cn/doc/app/50130-FAQ).

如果你的元服务需要应到登录、支付权限，也立即开始着手准备申请相关权限，参考 [华为支付服务开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/payment-preparations-V5)。

### 准备签名证书

初次运行元服务，需要配置好证书签名、权限设置等信息，第一次参与鸿蒙开发的新手请仔细阅读下面相关建议，否则可能会影响开发元服务。

如果你已经参与鸿蒙 App 开发，证书签名、权限配置会比较相似，配置过程可以参考 [证书签名配置指南](../harmony/runbuild#connectmobile) 进行环境配置。

签名证书分成两类：

- 面向一台鸿蒙设备的自动签名证书。签名过程比较简单，可用于调试，不能用于上架。
- 面向企业级协作的调试、发行证书。统一管理设备注册、权限管理等，调试证书可以用于开发，发行证书可以用于上架。

接下来文档会面向新手，详细介绍如何使用自动签名证书。发行证书会在文档下方的 **发行与上架** 部分进行介绍。

建议用户动手使用 DevEco Studio 编辑器创建元服务的原生项目（下面称原生工程），完成相关配置，以保证开发环境配置正确。

打开 DevEco Studio 编辑器，选择 `新建工程 - 元服务 AtomService - Empty Ability`，下面的截图来自 DevEco Studio：

![选择元服务 AtomService](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/6cf884be-d067-4fed-b3df-23ad74dcbc39.png)

选择 [已注册好的 AppID](#register-app-id)，创建鸿蒙元服务示例（下面称原生工程）。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/2e011c35-932c-48bf-9d06-0a93a1885259.png)

在编辑器的右上角点击`Project Structure...` 图标，勾选自动签名 Automatically generate signature。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/7eeda96c-4fc1-45d3-816b-2e23806d2e36.png)

**注意**：

- 也可以通过 `File - Project Structure...` 打开。
- 这种自动签名的方式只能用于运行与调试，需要发行上架时候请参考 **发行与上架** 章节修改签名文件。
- 签名操作需要连接鸿蒙真机设备。

这个时候点击 `Run - Run 'entry'` 或者编辑器顶部的小三角选择运行。如果可以运行成功官方的 Hello World 示例，说明相关环境、证书配置完成。

到这里前置工作就准备完成了。因为元服务还在开发迭代，下面补充相关注意事项。

### 签名文件、权限配置文件位置

请留意原生工程的两个文件比较特殊，后续 HBuilderX 编译运行需要这些文件：

1. 根目录 `build-profile.json5` - 证书签名参数等。后续元服务的开发运行、发布上架依赖此文件。
2. `entry/src/main/module.json5` - 项目权限配置、metadata 信息配置，元服务设置权限，比如访问网络、位置定位、手机震动等功能依赖此文件。具体的鸿蒙元服务权限列表可以参考 [鸿蒙对所有应用开放的权限清单](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/permissions-for-all-V5)。

## 运行与调试

在 HBuilderX 运行 uni-app 项目到元服务分成四个步骤：

1. 配置 `manifest.json` 文件
2. 配置 `build-profile.json5`
3. 配置 `module.json5`
4. 项目启动

下面进行详细说明。

### 1. 配置 manifest.json 文件

项目运行需要配置元服务包名，打开项目根目录的 `mainefest.json` 填写 `鸿蒙元服务配置 - 应用包名`，结构类似 `com.atomicservice.[你的AppID]`。

![配置 manifest.json 文件](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/f7a94969-59d3-42ad-84be-adf5bcadcd54.png)

### 2. 配置 `build-profile.json5`

需要配置签名证书，这里依赖 [准备签名证书](#准备签名证书) 部分。项目根目录创建 `harmony-mp-configs/build-profile.json5` 文件，将上文提到的原生空白项目中的 `build-profile.json5` 文件内容复制。

在文件中搜索 `useNormalizedOHMUrl` 将值设置为 false。

![配置签名证书](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/116bc7de-00e0-4250-ac78-508b2dfa803f.png)

### 3. 配置 `module.json5`

鸿蒙元服务需要获取使用特定的能力，比如元服务登录、震动、获取网络状态等原生提供的能力，需要配置权限模版。

项目根目录创建 `harmony-mp-configs/entry/src/main/module.json5` 文件。将上文提到的原生空白项目中的 `entry/src/main/module.json5` 的内容复制填充。HBuilderX 在构建时候会识别替换相关文件。

确保在 `module` 字段内，存在下面三个字段，如果不存在需要添加，不添加可能会让元服务运行闪退。

访问 [AGC 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myProject)，选择你的项目，在 **项目设置 - 常规** 页面中搜索 Client ID，匹配到的结果是下面需要到 `client_id`，这个参数会关联当前应用的相关权限，比如位置服务等。

```json
"srcEntry": "./ets/abilitystage/AbilityStage.ets",
"metadata": [
	{
		"name": "appgallery_privacy_hosted",
		"value": "1" 
	},
	{
		"name": "client_id",
		"value": "" // 填写实际的 client_id 
	}
],
"dependencies": [
	{
		"bundleName": "com.huawei.hms.ascf",
		"moduleName": "ascf",
		"versionCode": 100000
	}
]
```

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/62fbd174-5276-4a76-9ef7-26562e611533.png)

### 4. 运行鸿蒙元服务

选择 `运行 - 运行到小程序模拟器 - 鸿蒙元服务`，在弹出的鸿蒙设置选择框中选择鸿蒙真机。

![运行鸿蒙元服务](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/48d95bfd-418d-4dfd-8715-b03c8d9841f1.png)

![选择模拟器](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dc3e7683-5d44-40a9-920f-80aec53330dc.png)

构建流程完成后，控制台提示：

> 安装成功
>
> 在鸿蒙设备上启动运行 .hap ...
>
> 运行成功

同时真机页面更新，即可进行元服务开发和运行。

元服务的条件编译是 `MP-HARMONY`。

开发过程中遇到的问题，欢迎加入 [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e) 进行交流，有官方人员进行答疑和指导。

## 发行与上架

元服务上架需要授权 DCloud 作为服务商完成上架，这里介绍如何将元服务上架到鸿蒙应用市场。

### 上架前置准备

**注意**：目前上架元服务，部分应用信息需要在鸿蒙元服务后台填写，访问 [华为 AppGallery Connect 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/)，选择 **我的元服务**，选择对应的元服务 - 编辑。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/0cc21275-cb13-4a68-968b-24438a4b2d0d.png)

需要填写 4 处资料：

1. 设置 `应用上架 - 应用信息 - 应用分类标签` 填写应用分类标签，是为了下一步的内容分级做准备。
2. 填写 **内容分级** 表单。
3. 填写 **隐私声明**。
4. 同意并勾选 `版权信息 - 免责函` 选项。

填写完点击页面右上角的 **保存** 按钮，其他没有提到的数据无需填写，这一步骤作用是填写上架所需的特定数据。

### 发行与上架步骤

在 HBuilderX 中开发 uni-app 上架到鸿蒙元服务需要下面 4 个步骤：

1. 授权 DCloud 完成上架流程。
2. 配置发行签名证书。
3. 应用打包。
4. 完善上架资料

下面进行详细说明。

### 1. 授权 DCloud 完成上架流程

点击 [鸿蒙第三方授权链接](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/authorization?clientId=1553077832379297600&type=1) 打开下面页面：

第一步：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/f4f354d9-bfe0-4a75-aaa5-65ca66882316.png)

第二步：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/fd9c19a8-40e5-482f-a94c-b527cd8952f8.png)

选择你要上架的元服务，授权 DCloud 完成后续的上架流程。

### 2. 确认分享承诺

点击 [鸿蒙原生应用激励分享承诺函](https://developer.huawei.com/consumer/cn/verified/incentiveAuth)，如下图选择本次计划上架的应用（元服务），服务商字段搜索“数字天堂”并选择，勾选“我已阅读”，点击提交，完成激励分享。

![](https://web-ext-storage.dcloud.net.cn/doc/harmony-os-next/harmony-incentiveAuth.png)

**注意：必须完成分享承诺，才有机会拿到奖励金；**

### 3. 配置发行签名证书

开发调试期间的证书不可用于应用上架。元服务发布证书的申请流程和鸿蒙应用开发类似，访问 [鸿蒙发布元服务文档](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseservice-0000001946273965) 进行发布证书的获取。

**注意**：目前发布上架暂不支持多产物，意思是手动调整 `harmony-mp-configs/build-profile.json5`：

定位到 `app.signingConfigs[0]` 字段，修改 `material` 为发行证书路径。

### 4. 应用打包

在 HBuilderX 中选择 `发行 - 鸿蒙元服务`，进行元服务打包。等待打包完成，会提示上传完成。接下来到 DCloud开发者中心完善上架资料。

上传成功截图如下：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/a40b554b-2ba3-4a7b-8d2c-a9baa43e9bb7.png)

### 5. 完善上架资料

在上个步骤中，控制台在上传完成之后，提示打开 [DCloud 开发者中心](https://dev.dcloud.net.cn)。如果你是项目协作者账号登录，请切换为项目作者账号登录。

选择 `应用管理 - 我的应用 - 选择项目 APPID`，进入项目详情，选择 **各平台信息**，打开下面截图的页面，选择 **发布** 按钮。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/0dba9aa1-1a5f-4fea-86b0-35f7c9e691bd.png)

表单会默认填写部分元服务信息，请务必确定完成了 **上架前置准备** 要求内容。填写完成后选择 **提交审核** 按钮。

上架过程中遇到的问题，欢迎加入 [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e) 进行交流，有官方人员进行答疑和指导。

## 注意事项

### 启动元服务之后展示一个 Hello Wolrd 不是我设置的页面

如果你启动之后展示的是一个黑白界面展示了 Hello Wrold，说明 HBuilderX 提供的默认模版没有被修改，一般是自动化脚本没有成功执行，如果是 Mac 终端请务必注意：屏幕右上角会提示是否允许终端修改文件，一定要允许，才能保证自动化脚本执行成功。

### 如何修改元服务默认标题、图标、启动图等信息？

如果你开发过鸿蒙应用，会发现元服务工程和鸿蒙应用开发设置一致，配置文件同样遵循 module.json5 效果优先于 app.json5 ，参考 [鸿蒙应用组件配置文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/application-component-configuration-stage-V5)。推荐在组件级别进行配置。

打开 `entry/src/main/module.json5` ，定位到 `module.abilities[0]` 会找到下面几个字段：

- `description` 应用描述
- `icon` 应用图标
- `label` 应用标题
- `startWindowIcon` 应用启动图标，Splashscreen
- `startWindowBackground` 应用启动时候屏幕颜色

这里的取值一般是 `$media:xxx` 对应图片索引，`$string:xxx` `$color:xxx` 对应配置文件的值。通过文件配置，在项目 `harmony-mp-configs` 目录创建 `entry/src/main/resources/` 目录，并将原生工程相关配置复制过来。注意，`zh_CN` 大于 `base` 配置，优先修改 zh_CN 配置。

举例，下面是 `zh-CN/element/string.json` 中的内容，可以修改 `EntryAbility_label` 字段。
```json
{
  "string": [
    {
      "name": "module_desc",
      "value": "模块描述"
    },
    {
      "name": "EntryAbility_desc",
      "value": "description"
    },
    {
      "name": "EntryAbility_label",
      "value": "label"
    }
  ]
}
```

元服务图标必须在华为提供的标准图标底板上设计，参考 [生成元服务图标](https://developer.huawei.com/consumer/cn/doc/atomic-guides-V5/atomic-service-icon-generation-V5) 生成图标，否则会上架审核不通过。最终得到 216x216 的图标放置在 `harmony-mp-configs/entry/src/main/resources/base/media/app_icon.png` 路径内。

上架时候，这个图标文件也需要在 DCloud 管理后台进行配置。

### 发布报错 `hvigor ERROR: Invalid storeFile value. Make sure it is not null or empty. The file must be included`

如果发生在应用运行、发行阶段。可能是构建时候证书缺少或者配置不对。参考 [鸿蒙发布元服务](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseservice-0000001946273965) 进行证书申请。

### 发行报错 hvigor ERROR: Unable to find the product 'release'.

如果是发生应用发行阶段，可能是未填写完整的发布证书，需要调整 `build-profile.json5`。

### 发送网络请求报错、组件 web-view 渲染空白，不能展示网页

需要主动开启网络访问状态、并且需要设置网络白名单。

开启网络配置。修改 `harmony-mp-configs/entry/src/main/module.json5`，在 json 文件的添加，表明需要 `INTERNET` 权限。

```json
"requestPermissions": [
  {
    "name": "ohos.permission.INTERNET",
    "reason": "$string:app_name",
    "usedScene": {
      "abilities": ["FromAbility"],
      "when": "inuse"
    }
  }
]
```

还需要在配置网络访问白名单：

- 临时方案。进入手机 - 设置 - 系统 - 开发者选项（如果未开启 关于手机 - 软件版本连续点击开启） - 开发中元服务豁免管控，选择开启后，可以自由调试。
- 稳定方案。整理 web-view 需要用到的相关域名，进入[华为AppGallery Connect 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/) - 我的项目 - 开发管理 - 域名设置 - 服务器域名 - httpRequest 合法域名。按照提示进行填写。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/49323643-31f5-4f95-80b2-87157c9a06d5.png)

### 组件 打开 map 地图无法展示

Map 和相关定位需要 [华为AppGallery Connect 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/) 进行权限申请。具体可以参考 [鸿蒙 Map Kit 开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-config-agc-V5)，开通地图服务。

### API 登录 uni.login 获取 code 报错
<!-- client id -->

参考[鸿蒙 Account Kit 开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-config-permissions-V5#section132012717318) 设置相关权限，添加 scope 权限

### API 获取网络类型失败、手机震动不等效

需要 `GET_NETWORK_INFO` 和 `vibrate` 权限。具体的鸿蒙元服务权限列表可以参考 [鸿蒙对所有应用开放的权限清单](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/permissions-for-all-V5) 进行查询。按照 **配置权限模版** 章节进行配置。

### 组件 rich-text 渲染空白不展示

已知问题，等待元服务修复。动态更新 `rich-text` 的 `nodes` 数据时候，内容不会更新。可以临时通过给 rich-text 添加 v-if 控制显隐，在 nextTick 中动态切换生效。

### 组件 Image 选择本地图片不展示

已知问题，等待元服务修复。目前 `image` 组件不支持本地路径，可临时通过路径字符串展示、或者上传后提供远程 URL 规避。

### 运行报错 `failed to install bundle. code:9568296 error: install failed due to error bundle type`

模拟器或者真机上已经安装了当前 BundleName 的应用。可能是证书复用导致的错误，重新确认当前证书是元服务证书，而不是鸿蒙 App 的证书。

###  运行报错 `hvigor ERROR: SDK component missing. Please verify the integrity of your SDK.`

你可能声明了不兼容的字段，需要在 `harmony-mp-configs/build-profile.json5` 里面去掉 `app.products.*.compileSdkVersion` 属性。

### 运行运行闪退，但是没有报错

一般来说 `harmony-mp-configs/entry/src/main/module.json5` 配置文件有问题，导致运行失败，需要检查配置文件，如果配置文件没有问题，可以尝试删除文件，重新运行一下。

确保按照 `配置 module.json5` 章节添加了三个字段，请注意是 module **内部添加**，**不是**和 module 字段平级。

### 配置的 module.json5 注意事项

文件 `harmony-mp-configs/entry/src/main/module.json5` 会用来配置应用的一些应为，你可以参考 [鸿蒙 module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/module-configuration-file-V5) 进行学习和参考。

如果你已经在开发鸿蒙 App ，见到 module.json5会感觉比较熟悉，有几个属性需要特别注意：

- 需要 `module.installationFree` 设置为 true
- 需要设置 `module.srcEntry` `module.metadata` 和 `module.dependencies` 参考上一条问题。

### 鸿蒙元服务的条件编译怎么写？

`MP-HARMONY`，具体参考 [条件编译文档](https://uniapp.dcloud.net.cn/tutorial/platform.html)。

### 初次运行报错 `Failed to install the HAP or HSP`

参考文档顶部 **开发环境准备** 部分，请确认：

1. 真机是鸿蒙Next 真机，系统版本是 鸿蒙 5.0+。如果是鸿蒙 4.x 版本不属于鸿蒙 Next 系统，模拟器暂不支持。具体支持机型参考 [HarmonyOS NEXT 支持机型
](https://consumer.huawei.com/cn/support/harmonyos/models-next/)
2. 确定下载了自动化初始脚本，完成了脚本安装。控制台执行 `ascf -V` 有返回值。

### 分包 `The subpackage path name does not meet the requirements`

已知问题。目前线上的 ascf 依赖版本尚不支持分包路径中包含 `-` 等特殊符号，适配需要修改相关路径成 `_` 操作符，规避此问题，后续华为会解决该问题。
