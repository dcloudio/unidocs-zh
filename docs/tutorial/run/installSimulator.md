# 安装模拟器@Simulator
# Install simulator @Simulator

> Android模拟器在MacOSX、Windows上都可以安装；iOS模拟器只能在MacOSX上安装。
> The Android emulator can be installed on both MacOSX and Windows; the iOS emulator can only be installed on MacOSX.

- [安装iOS模拟器](#ios)
- [Install iOS Simulator](#ios)
- [安装Android模拟器](#android)
- [Install Android Emulator](#android)

## ios模拟器@ios
## ios simulator @ios

MacOSX，安装ios模拟器，需要先安装[xcode](https://developer.apple.com/xcode/)；或在App store中搜索xcode完成安装。
MacOSX, to install the ios simulator, you need to install [xcode](https://developer.apple.com/xcode/); or search for xcode in the App store to complete the installation.

xcode安装打开，按下快捷键`command+,`，打开`Preferences`窗口，如下图：
Open the xcode installation, press the shortcut key `command+,` to open the `Preferences` window, as shown below:

<img src="https://hx.dcloud.net.cn/static/snapshots/tutorial/macosx/iosSimulator.jpg" style="zoom: 50%" />

如上窗口，点击【Locations】，点击【Command Line Tools】
In the above window, click [Locations], click [Command Line Tools]

<img src="https://hx.dcloud.net.cn/static/snapshots/tutorial/macosx/xcodeCommandLineTools.jpg" style="zoom: 50%" />

## 运行App到iOS模拟器@run-app-ios-simulator
## Run App to iOS Simulator @run-app-ios-simulator

项目管理器，选中要运行的项目，点击工具栏 运行图标，如下图：
Project Manager, select the project to be run, click the run icon on the toolbar, as shown below:

<img src="https://hx.dcloud.net.cn/static/snapshots/app/app_ios_simulator.jpg" style="zoom: 50%" />

运行app项目到iOS模拟器效果如下：
The effect of running the app project to the iOS simulator is as follows:

<img src="https://hx.dcloud.net.cn/static/snapshots/app/app_ios_simulator_run.jpg" style="zoom: 50%" />

### 运行到iOS模拟器功能限制@ios-simulator-limit
iOS模拟器和真机使用不同的CPU架构，部分模块依赖的三方SDK没有包含模拟器或者对模拟器兼容不好，导致无法在模拟器上正常运行，目前已知无法在模拟上使用以下功能：

- 讯飞语音识别  
由于讯飞语音识别在新版本XCode编译后无法兼容iOS8.x模拟器，HBuilderX1.5及以上版本标准基座模拟器版本不再支持讯飞语音识别功能  
> 注意：2024年3月21日审计云端打包环境为XCode15.2，不再支持讯飞语音识别，推荐使用百度语音识别模块。

- 直播推流（live-pusher）  
直播推流功能是基于又拍云的推流SDK实现，又拍云的SDK不支持iOS模拟器，标准基座模拟器版本无法运行直播推流相关功能，请使用真机运行体验此功能。

## Android模拟器@android
## Android emulator @android

市场上有很多成熟的Android模拟器，这里就不推荐了。自行搜索安装。
There are many full-fledged Android emulators on the market, so I won't recommend them here. Search and install by yourself.

当然，Google官方也有自己的模拟器，您可以在[Android Studio](https://developer.android.com/studio/install)中安装不同版本的模拟器。
Of course, Google officially has its own emulator, you can install different versions of the emulator in [Android Studio](https://developer.android.com/studio/install).

android studio模拟器如下图所示：
The android studio emulator is shown below:

<img src="https://hx.dcloud.net.cn/static/snapshots/tutorial/macosx/androidSimulator.jpg" style="zoom: 50%" />

## 运行App到Android模拟器@run-app-android-emulator
## Run the App to the Android emulator @run-app-android-emulator

Android模拟器启动后，HBuilderX会将其识别为名称为`emulator-xxxx`的Android手机，其中的xxxx为模拟器的id如下图：
After the Android emulator is started, HBuilderX will recognize it as an Android phone named `emulator-xxxx`, where xxxx is the id of the emulator as shown below:

<img src="https://hx.dcloud.net.cn/static/snapshots/app/Android-emulator.jpg" style="zoom: 50%" />

运行app项目到android模拟器效果如下：
The effect of running the app project to the android emulator is as follows:

<img src="https://hx.dcloud.net.cn/static/snapshots/app/Android-emulator-start.jpg" style="zoom: 50%" />

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

