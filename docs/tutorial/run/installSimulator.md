# 安装模拟器@Simulator

> Android模拟器在MacOSX、Windows上都可以安装；iOS模拟器只能在MacOSX上安装。

- [安装iOS模拟器](#ios)
- [安装Android模拟器](#android)
- [安装鸿蒙模拟器](#harmony)

## iOS模拟器@ios

MacOSX，安装ios模拟器，需要先安装[xcode](https://developer.apple.com/xcode/)；或在App store中搜索xcode完成安装。

xcode安装打开，按下快捷键`command+,`，打开`Preferences`窗口，如下图：

<img src="https://hx.dcloud.net.cn/static/snapshots/tutorial/macosx/iosSimulator.jpg" style="zoom: 50%" />

如上窗口，点击【Locations】，点击【Command Line Tools】

<img src="https://hx.dcloud.net.cn/static/snapshots/tutorial/macosx/xcodeCommandLineTools.jpg" style="zoom: 50%" />

### 运行App到iOS模拟器@run-app-ios-simulator

项目管理器，选中要运行的项目，点击工具栏 运行图标，如下图：

<img src="https://hx.dcloud.net.cn/static/snapshots/app/app_ios_simulator.jpg" style="zoom: 50%" />

运行app项目到iOS模拟器效果如下：

<img src="https://hx.dcloud.net.cn/static/snapshots/app/app_ios_simulator_run.jpg" style="zoom: 50%" />

### 运行App到iOS模拟器功能限制@ios-simulator-limit
iOS模拟器和真机使用不同的CPU架构，部分模块依赖的三方SDK没有包含模拟器或者对模拟器兼容不好，导致无法在模拟器上正常运行，目前已知无法在模拟上使用以下功能：

- 讯飞语音识别  
由于讯飞语音识别在新版本XCode编译后无法兼容iOS8.x模拟器，HBuilderX1.5及以上版本标准基座模拟器版本不再支持讯飞语音识别功能  
> 注意：2024年3月21日审计云端打包环境为XCode15.2，不再支持讯飞语音识别，推荐使用百度语音识别模块。

- 直播推流（live-pusher）  
直播推流功能是基于又拍云的推流SDK实现，又拍云的SDK不支持iOS模拟器，标准基座模拟器版本无法运行直播推流相关功能，请使用真机运行体验此功能。

### 运行App到iOS26模拟器，应用安装失败@ios-app-install-failed
在部分 `M系列芯片` 的MAC上，如果macos系统升级到了macos26及以上，xcode升到到了xcode26及以上时，运行App到iOS26模拟器时可能会出现应用安装失败的问题

- 表现：模拟器被拉起，但是应用安装失败，系统弹窗提示：‘HBuilder’需要更新，此App需要开发者更新以在此iOS版本上运行。
- 原因：自xcode26 和 iOS26起，xcode默认下载的模拟器包是 `arm64Only` 版本的，也就是仅支持arm64架构的应用，而 uni-app 以及 uni-app-x 的模拟器安装包 `仅支持 x86_64 架构`，架构不匹配导致安装失败。

解决方案：
1、删除现有安装的 iOS26 模拟器

- 删除方式：xcode -> Settings -> Components -> 选中iOS26模拟器右侧的按钮，点击删除

<img src="https://web-ext-storage.dcloud.net.cn/doc/uniapp/xcode_delete_simulator.png" style="zoom: 50%" />

删除后可以在终端执行命令 `xcrun simctl list runtimes` 查看是否还有 iOS26 模拟器，如果结果列有 Shutdown 等不可用的模拟器，则可以在终端执行命令 `xcrun simctl delete unavailable` 删除它们。


```js
== Devices ==
-- iOS 18.0 --
    iPhone 15 Pro Max (F4E8DFAE-...) (Shutdown)
-- Unavailable: com.apple.CoreSimulator.SimRuntime.iOS-18-0 (arm64Only) --
    iPhone 14 (ABC12345-...) (Shutdown) (unavailable, runtime profile not found)
```



2、安装新的 `universal` 格式的 iOS26 模拟器

- 安装方式： 在终端执行命令 `xcodebuild -downloadPlatform iOS -architectureVariant universal` 
- 命令执行后将在终端下载模拟器，该文件较大（10G），注意不要关闭终端。
- 执行上述安装命令后，如果终端提示 `No needed downloadables found for universal` 说明 `arm64Only` 格式的模拟器没有被删除成功，请先确保旧模拟器被成功删除。

新的模拟器下载成功后，重启 xcode 应用 和模拟器应用，重启 HX，将应用重新运行到模拟器，注意点击重新运行前请先点击更新模拟器列表。新的模拟器被拉起后，可以看到，应用能够被正常安装了。



## Android模拟器@android

市场上有很多成熟的Android模拟器，这里就不推荐了，自行搜索安装。

当然，Google官方也有自己的模拟器，您可以在[Android Studio](https://developer.android.com/studio/install)中安装不同版本的模拟器。

android studio模拟器如下图所示：

<img src="https://hx.dcloud.net.cn/static/snapshots/tutorial/macosx/androidSimulator.jpg" style="zoom: 50%" />

### 运行App到Android模拟器@run-app-android-emulator

Android模拟器启动后，HBuilderX会将其识别为名称为`emulator-xxxx`的Android手机，其中的xxxx为模拟器的id如下图：

<img src="https://hx.dcloud.net.cn/static/snapshots/app/Android-emulator.jpg" style="zoom: 50%" />

运行app项目到android模拟器效果如下：

<img src="https://hx.dcloud.net.cn/static/snapshots/app/Android-emulator-start.jpg" style="zoom: 50%" />

### 常见模拟器端口说明

HBuilderX是通过adb发现设备的，如果端口为5555到5585的模拟器启动后会自动出现在设备列表。其他端口模拟器需要在“设置-运行配置-Android运行配置-Android模拟器端口”配置你使用模拟器的端口，HBuilderX会自动连接。或通过命令行`adb connect 127.0.0.1:port`手动连接设备。
以下是对市面一些模拟器默认端口的汇总（经供参考，以实际端口为准）
| 模拟器						| 默认初始端口	|
|-------------------------	|--------------	|
| Android Studio AVD		| 5554			|
| BlueStacks 5 (5.22.51)	| 5555			|
| 雷电模拟器（9.1.41）			| 5554			|
| MuMu模拟器（4.1.24）		| 7555			|
| 夜神模拟器（7.0.6）			| 62001			|
| 逍遥模拟器（9.2.1）			| 21503			|
| 腾讯手游助手（6.0.13）		| 5554			|

## 鸿蒙模拟器@harmony

安装鸿蒙模拟器，需要先安装[DevEco-Studio](https://developer.huawei.com/consumer/cn/deveco-developer-suite/enabling/kit?currentPage=1&pageSize=100?ha_source=Dcloud&ha_sourceId=89000448)；

**Windows系统如使用模拟器则需要开启以下功能**

打开控制面板 - 程序与功能 - 开启以下功能

1. Hyper-V
2. Windows 虚拟机监控程序平台
3. 虚拟机平台

注意: 需要win10专业版或win11专业版才能开启以上功能，家庭版需先升级成专业版或企业版

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085210915b1knhu7l3u8.png)

### 运行App到鸿蒙模拟器@run-app-harmony-emulato

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085379828ap3pkhhfmig.png)

如果没有登录华为账号，此时需要先登录，登录成功后看到如下页面

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200854641084hsm583p5jo.png)

选择模拟器型号，选第一个即可

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200855617759sfquhr1j0o.png)

安装完模拟器后，点击启动按钮启动模拟器

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200856058101582lbghgf8.png)

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085712493il2ep17ldg8.png)

启动模拟器成功后，如果提示需要先签名（配置签名需要先启动模拟器后才能配置）

点击 DevEco-Studio 上方菜单 File - Project Structure... 

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720087126462d9133uo0hmg.png)

在弹出的窗体中选择 Project - Signing Configs 并打钩 Automatically generate signature，即可自动生成签名

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200873385940vk5oj9ihk.png)

最后依次点击 `Apply` 和 `OK` 使签名生效

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720259265552t0m33hs637.png)

