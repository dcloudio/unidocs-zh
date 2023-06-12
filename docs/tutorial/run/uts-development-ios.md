# iOS UTS扩展开发

> 版本要求: HBuilderX 3.6.9+

HBuilderX 3.6.9+，新增 uts插件 iOS平台 支持本地编译和真机运行，需要配置Xcode环境。

安装[uts扩展插件](#uts扩展插件)和[Xcode](#Xcode环境配置)后，您在本地修改uts插件iOS平台代码，即可在本地编译并真机运行到iOS设备，而无需再提交代码到云端制作自定义基座。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20221111172603.jpg" style="zoom: 45%" />

## uts扩展插件

当您运行带有uts插件的项目到`iOS真机设备`时，会自动安装【uts开发扩展 - iOS】插件，请务必安装。具体如下：

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/ios_uts%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6.jpg" style="zoom: 50%" />

## Xcode环境配置

本地真机运行 `uts插件` 目前需要`Xcode 13.2.1` 或更高版本。

你可以通过 `App Store` 或到[Apple 开发者官网上下载](https://developer.apple.com/xcode/downloads/ank)。这一步骤会同时安装 `Xcode IDE`、`Xcode` 的命令行工具和 `iOS` 模拟器。

如果是新下载Xcode后, 要打开一次，并确认Xcode的命令行工具如下图所示:

#### Xcode 的命令行工具

启动 `Xcode`，并在`Xcode | Settings(或者 Preferences) | Locations`菜单中检查一下是否装有某个版本的`Command Line Tools`。`Xcode` 的命令行工具中包含一些必须的工具，比如`git`等。

![Command Line Tools](https://native-res.dcloud.net.cn/images/uts/iOS/xcode_command_line_tool.jpeg)

请在使用uts插件真机运行 之前确保你本地的环境 如上图一样 准备完毕。