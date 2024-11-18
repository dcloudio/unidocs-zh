# 概述

从 `HBuilderX 4.34` 版本开始，uni-app 支持 **鸿蒙元服务** 平台应用开发。

目前仅支持 Vue3 项目编译到鸿蒙元服务平台，Vue2 项目升级 Vue3 项目请参考：[vue2 项目迁移到 vue3](../migration-to-vue3.md)

欢迎加入 [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e) 进行交流。

## 前置准备

### 开发环境准备

- HBuilderX 4.34+ [下载地址](https://www.dcloud.io/hbuilderx.html)
- DevEco-Studio 5.0.5.200+ [下载地址](https://developer.huawei.com/consumer/cn/download/)

### 鸿蒙新手指引

鸿蒙元服务和鸿蒙应用开发流程相似，如果你是第一次安装鸿蒙 DevEco-Studio 和鸿蒙模拟器，可以参考 [uni-app 开发鸿蒙应用环境要求](../harmony/runbuild) 进行环境配置。

如果可以在模拟器、鸿蒙真机运行官方 Hello World 示例，说明相关环境、证书配置完成。

### 元服务 appid 注册

元服务的开发和上架需要使用元服务的包名 BundleName，包名的形式 `com.atomicservice.[你的应用包名]`。

如果还没有创建元服务，访问 [华为 AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myApp) 完成元服务应用的注册，得到相关包名。

## 运行与调试

在 HBuilderX 运行 uni-app 项目到元服务分成四个步骤：

1. 配置 `manifest.json` 文件。
2. 配置签名证书。
3. 配置权限模版。
4. 项目启动。

下面进行详细说明。

### 1. 配置 manifest.json 文件

项目运行需要配置元服务包名，打开项目根目录的 `mainefest.json` 填写 `鸿蒙元服务配置 - 应用包名`，结构类似 `com.atomicservice.[你的应用包名]`。

![ 配置 manifest.json 文件](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/f7a94969-59d3-42ad-84be-adf5bcadcd54.png)

### 2. 配置签名证书

项目运行到模拟器、真机需要配置签名证书。签名证书的配置和鸿蒙应用开发类似，请参考 [鸿蒙证书签名配置指南](../harmony/runbuild.md#signature) 进行证书签名。

项目根目录创建 `harmony-as-configs/build-profile.json5` 文件，将元服务原生项目中的 `build-profile.json5` 文件内容复制。

![配置签名证书](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/25329a0f-75bf-4812-8efc-3ada29e4ae23.png)

### 3. 配置权限模版

鸿蒙元服务需要获取使用特定的能力，比如元服务登录、震动、获取网络状态等原生提供的能力，需要配置权限模版。

项目根目录创建 `harmony-as-configs/entry/src/main/module.json5` 文件。将元服务原生项目中的 `entry/src/main/module.json5` 的内容复制填充。HBuilderX 在构建时候会识别替换相关文件。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/1206d3f5-5789-4856-b1e3-3928e6c01995.png)

具体的鸿蒙元服务权限列表可以参考 [鸿蒙对所有应用开放的权限清单](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/permissions-for-all-V5) 进行查询。

### 4. 项目启动

选择 `运行 - 运行到小程序模拟器 - 鸿蒙元服务`，在弹出的鸿蒙设置选择框中选择模拟器或者真机。

![运行鸿蒙元服务](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/48d95bfd-418d-4dfd-8715-b03c8d9841f1.png)

![选择模拟器](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/00014bd7-d578-4451-92d1-94f4cbbc52a3.png)


等待构建完成后，控制台提示：

> 安装成功
>
> 在鸿蒙设备上启动运行 .hap ...
>
> 运行成功

同时模拟器或者真机页面更新，即可进行元服务开发和运行。

## 发行与上架

鸿蒙元服务的上架，依赖上一步骤 **运行与调试** 的运行。

在 HBuilderX 中开发 uni-app 上架到鸿蒙元服务需要下面 4 个步骤：

1. 授权 DCloud 完成上架流程
2. 配置发行签名证书。
3. 应用打包。
4. 等待上架审批通知。

下面进行详细说明。

### 1. 授权 DCloud 完成上架流程

点击 [鸿蒙第三方授权链接](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/authorization?clientId=1553077832379297600&type=1) 打开下面页面：

第一步：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/f4f354d9-bfe0-4a75-aaa5-65ca66882316.png)

第二步：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/fd9c19a8-40e5-482f-a94c-b527cd8952f8.png)

选择你要上架的元服务，授权 DCloud 完成后续的上架流程。

### 1. 配置发行签名证书

开发调试期间的证书不可用于应用上架。元服务发布证书的申请流程和鸿蒙应用开发类似，访问 [鸿蒙发布元服务文档](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseservice-0000001946273965) 进行发布证书的获取。

### 2. 应用打包

在 HBuilderX 中选择 `发行 - 鸿蒙元服务`，进行元服务打包。等待打包完成，得到 app 后缀文件。



## 备注事项

### 发布报错 `hvigor ERROR: Invalid storeFile value. Make sure it is not null or empty. The file must be included`

构建时候证书缺少或者配置不对。参考 [鸿蒙发布元服务](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseservice-0000001946273965) 进行证书申请。

### 发行报错 hvigor ERROR: Unable to find the product 'release'.

调整 `build-profile.json5`


## 版本变更

HBuilderX 4.34 适配鸿蒙元服务
