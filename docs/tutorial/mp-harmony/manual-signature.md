# 鸿蒙元服务配置签名证书

在 HBuilderX 4.81 之前，uni-app 开发鸿蒙元服务，需要手动配置签名证书，本文介绍如何配置签名证书。

> 目前 HBuilderX 已经提供了鸿蒙应用、鸿蒙元服务的可视化签名配置方案，推荐在 manifest.json 中进行一键配置。

## 鸿蒙元服务证书签名配置

接下来文档会面向新手，详细介绍如何使用自动签名证书。

打开 DevEco Studio 编辑器，选择 `新建工程 - 元服务 AtomService - Empty Ability`，下面的截图来自 DevEco Studio：

![选择元服务 AtomService](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/6cf884be-d067-4fed-b3df-23ad74dcbc39.png)

选择 [已注册好的 AppID](#register-app-id)，创建鸿蒙元服务示例（下面称原生工程）。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/2e011c35-932c-48bf-9d06-0a93a1885259.png)

在编辑器的右上角点击`Project Structure...` 图标，勾选自动签名 Automatically generate signature。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/7eeda96c-4fc1-45d3-816b-2e23806d2e36.png)

**注意**：

- 也可以通过 `File - Project Structure...` 打开。
- 这种自动签名的方式只能用于运行与调试，需要发行上架时候请参考 **发行与上架** 章节修改签名文件。
- 签名操作需要连接鸿蒙设备。

这个时候点击 `Run - Run 'entry'` 或者编辑器顶部的小三角选择运行。如果可以运行成功官方的 Hello World 示例，说明相关环境、证书配置完成。

## 配置 HBuilderX 工程

配置 `build-profile.json5`

需要配置签名证书，项目根目录创建 `harmony-mp-configs/build-profile.json5` 文件。

考虑到新手用户不熟悉配置，建议下载 [这个模版](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/build-profile.json5) 修改，只替换签名 `signingConfigs`部分，其他配置项不要修改。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dac3b26f-7db8-415b-9df6-43e5964043ab.png)
