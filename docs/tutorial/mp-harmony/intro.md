# 概述

从 `HBuilderX 4.34` 版本开始，uni-app 支持 **鸿蒙元服务** 平台应用开发。

欢迎加入 [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e) 进行交流。

::: warning 注意

- 目前仅支持 Vue3 项目编译到鸿蒙元服务平台，Vue2 项目升级 Vue3 项目请参考：[Vue2 项目迁移到 Vue3](../migration-to-vue3.md)。
- 目前仅支持鸿蒙真机，鸿蒙模拟器暂不支持，后续鸿蒙模拟器支持后会更新文档。
:::

## 前置准备

### 开发环境准备

- HBuilderX 4.34+ [下载地址](https://www.dcloud.io/hbuilderx.html)
- DevEco-Studio 5.0.5.200+ [下载地址](https://developer.huawei.com/consumer/cn/download/)

### 元服务 appid 注册@register-app-id

元服务的开发和上架需要使用元服务的包名 BundleName，包名的形式 `com.atomicservice.[你的 APPID]`。

如果还没有创建元服务，访问 [华为 AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myApp) 完成元服务应用的注册，得到相关包名。方便进行签名证书的操作。

### 准备签名证书

初次运行元服务，需要配置好证书签名、权限设置等信息，第一次参与鸿蒙开发的新手请仔细阅读下面相关建议，否则可能会影响开发元服务。

如果你已经参与鸿蒙 App 开发，证书签名、权限配置会比较相似，配置过程可以参考 [证书签名配置指南](../harmony/runbuild#connectmobile) 进行环境配置。

签名证书分成两类：

- 面向一台鸿蒙设备的自动签名证书。比较简单，不能用于上架。
- 面向企业级协作的调试、发行证书。统一管理设备注册、权限管理等，调试证书可以用于开发，发行证书可以用于上架。

接下来文档会面向新手，详细介绍如何使用自动签名证书。发行证书会在文档下方的 **发行与上架** 部分进行介绍。

建议用户动手使用 DevEco Studio 编辑器创建元服务的原生项目（下面称原生工程），完成相关配置，以保证开发环境配置正确。

打开 DevEco Studio 编辑器，选择 `新建工程 - 元服务 AtomService - Empty Ability`，下面的截图来自 DevEco Studio：

![选择元服务 AtomService](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/6cf884be-d067-4fed-b3df-23ad74dcbc39.png)

选择 [已注册好的 AppID](#register-app-id)，创建鸿蒙元服务示例（下面称原生工程）。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/2e011c35-932c-48bf-9d06-0a93a1885259.png)

在编辑器的右上角点击`Project Structure...` 图标，勾选自动签名 Automatically generate signature。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/7eeda96c-4fc1-45d3-816b-2e23806d2e36.png)

注意：

- 也可以通过 `File - Project Stucture...` 打开。
- 这种自动签名的方式只能用于运行与调试，需要发行上架时候请参考 **发行与上架** 章节修改签名文件。
- 签名操作需要连接鸿蒙真机设备。

这个时候点击 `Run - Run 'entry'` 或者编辑器顶部的小三角选择运行。如果可以运行成功官方的 Hello World 示例，说明相关环境、证书配置完成。

到这里前置工作就准备完成了。因为元服务还在开发迭代，下面补充相关注意事项。

### 补充：签名文件、权限配置文件位置

请留意原生工程的两个文件比较特殊，后续 HBuilderX 编译运行需要这些文件：

1. 根目录 `build-profile.json5` - 证书签名参数等。后续元服务的开发运行、发布上架依赖此文件。
2. `entry/src/main/module.json5` - 项目权限配置、metadata 信息配置，元服务设置权限，比如访问网络、位置定位、手机震动等功能依赖此文件。

### 补充：主动安装元服务依赖

元服务在编译过程中，依赖鸿蒙提供的 `@atomicservice/ascf-toolkit` npm 包，请确保已全局安装成功，安装命令如下：

```shell
npm install -g @atomicservice/ascf-toolkit --registry=https://registry.npmmirror.com
```

这一步骤是为了规避下载 npm 失败，导致编译失败。

### 补充：DevEco-Studio 5.0.5.200 临时修复错误

在 DevEco-Studio 5.0.5.200 版本中，运行元服务需要手动修改两个文件，后续等待 DevEco-Studio 修复此问题，在升级之前，目前需要手动修复。后续文档也会持续跟踪此问题。

首先打开 DevEco-Studio 安装目录。

1. 修改 process-profile.js 文件，位置定位 `tools/hvigor/hvigor-ohos-plugin/src/tasks/process-profile.js`

这是一个压缩混淆的文件，请备份后小心修改。

搜索 `e.module.dependencies=this._dependencies,` 替换为 `/* e.module.dependencies=this._dependencies, */`

也就是手动注释这一行代码。

2. 修改 task-service.js，位置定位 `tools/hvigor/hvigor-ohos-plugin/src/tasks/service/task-service.js`

这是一个压缩混淆的文件，请备份后小心修改。

搜索 ```does not exist oh_modules.`);``` 替换为 ```does not exist oh_modules.`);if(!o){return;}```

也就是追加了一行 `if(!o){return;}` 代码。

修改完这两个文件，重启 DevEco 编辑器后生效。请注意这是临时兼容方案，后续 DevEco 会升级解决。

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

需要配置签名证书，这里依赖 [准备签名证书](#准备签名证书) 部分。项目根目录创建 `harmony-mp-configs/build-profile.json5` 文件，将元服务原生项目中的 `build-profile.json5` 文件内容复制。

![配置签名证书](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/6991974b-52d2-4bdc-85fa-d93887b887e8.png)

### 3. 配置 `module.json5`

鸿蒙元服务需要获取使用特定的能力，比如元服务登录、震动、获取网络状态等原生提供的能力，需要配置权限模版。

项目根目录创建 `harmony-mp-configs/entry/src/main/module.json5` 文件。将元服务原生项目中的 `entry/src/main/module.json5` 的内容复制填充。HBuilderX 在构建时候会识别替换相关文件。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/1206d3f5-5789-4856-b1e3-3928e6c01995.png)

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

开发过程中遇到的问题，欢迎加入 [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e) 进行交流。

## 发行与上架

元服务上架需要授权 DCloud 作为服务商完成上架，这里介绍如何将元服务上架到鸿蒙应用市场。

### 上架前置准备

注意：目前上架元服务，部分应用信息需要在鸿蒙元服务后台填写，访问 [华为 AppGallery Connect 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/)，选择 **我的元服务**，选择对应的元服务 - 编辑。

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

### 2. 配置发行签名证书

开发调试期间的证书不可用于应用上架。元服务发布证书的申请流程和鸿蒙应用开发类似，访问 [鸿蒙发布元服务文档](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseservice-0000001946273965) 进行发布证书的获取。

调整 `harmony-mp-configs/build-profile.json5`：

1. 补充 `app.signingConfigs` 字段，添加发布证书相关信息
2. 补充 `app.products` 字段，添加 name 为 `release` 的字段
3. 调整 `modules[0].targets[0].applyToProducts` 添加 `release` 字段

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/2e8f1326-8b1a-49af-ba8e-6b9db3b7b212.png)

### 3. 应用打包

在 HBuilderX 中选择 `发行 - 鸿蒙元服务`，进行元服务打包。等待打包完成，会提示上传完成。接下来到 DCloud开发者中心完善上架资料。

上传成功截图如下：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/a40b554b-2ba3-4a7b-8d2c-a9baa43e9bb7.png)

### 4. 完善上架资料

在上个步骤中，控制台在上传完成之后，提示打开 [DCloud 开发者中心](https://dev.dcloud.net.cn)。如果你是项目协作者账号登录，请切换为项目作者账号登录。

选择 `应用管理 - 我的应用 - 选择项目 APPID`，进入项目详情，选择 **各平台信息**，打开下面截图的页面，选择 **发布** 按钮。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/0dba9aa1-1a5f-4fea-86b0-35f7c9e691bd.png)

表单会默认填写部分元服务信息，请务必确定完成了 **上架前置准备** 要求内容。填写完成后选择 **提交审核** 按钮。

## 注意事项

### 发布报错 `hvigor ERROR: Invalid storeFile value. Make sure it is not null or empty. The file must be included`

如果发生在应用运行、发行阶段。可能是构建时候证书缺少或者配置不对。参考 [鸿蒙发布元服务](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseservice-0000001946273965) 进行证书申请。

### 发行报错 hvigor ERROR: Unable to find the product 'release'.

如果是发生应用发行阶段，可能是未填写完整的发布证书，需要调整 `build-profile.json5`。

### 组件 打开 web-view 渲染空白，不能展示网页

WebView 需要设置网络白名单。

- 临时方案。进入手机 - 设置 - 系统 - 开发者选项（如果未开启 关于手机 - 软件版本连续点击开启） - 开发中元服务豁免管控，选择开启后，可以自由调试 web-view
- 稳定方案。整理 web-view 需要用到的相关域名，进入[华为AppGallery Connect 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/) - 我的项目 - 开发管理 - 域名设置 - 服务器域名 - httpRequest 合法域名。按照提示进行填写。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/49323643-31f5-4f95-80b2-87157c9a06d5.png)

### 组件 打开 map 地图无法展示

Map 和相关定位需要 [华为AppGallery Connect 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/) 进行权限申请。具体可以参考 [鸿蒙 Map Kit 开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-config-agc-V5)，开通地图服务。

### API 登录 uni.login 获取 code 报错
<!-- client id -->

参考[鸿蒙 Account Kit 开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-config-permissions-V5#section132012717318) 设置相关权限，添加 scope 权限

### API 获取网络类型失败、手机震动不等效

<!-- client id -->
需要 `GET_NETWORK_INFO` 和 `vibrate` 权限。具体的鸿蒙元服务权限列表可以参考 [鸿蒙对所有应用开放的权限清单](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/permissions-for-all-V5) 进行查询。按照 **配置权限模版** 章节进行配置。

### 组件 rich-text 渲染空白不展示

已知问题，等待元服务修复。动态更新 `rich-text` 的 `nodes` 数据时候，内容不会更新。可以临时通过给 rich-text 添加 v-if 控制显隐，在 nextTick 中动态切换生效。

### 组件 Image 选择本地图片不展示

已知问题，等待元服务修复。目前 `image` 组件不支持本地路径，可临时通过路径字符串展示、或者上传后提供远程 URL 规避。

### 运行报错 `failed to install bundle. code:9568296 error: install failed due to error bundle type`

模拟器或者真机上已经安装了当前 BundleName 的应用。可能是证书复用导致的错误，重新确认当前证书是元服务证书，而不是鸿蒙 App 的证书。
