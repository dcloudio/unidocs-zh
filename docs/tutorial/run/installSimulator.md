# 安装模拟器@Simulator

> Android模拟器在MacOSX、Windows上都可以安装；iOS模拟器只能在MacOSX上安装。

- [安装iOS模拟器](/Tutorial/App/installSimulator?id=ios模拟器)
- [安装Android模拟器](/Tutorial/App/installSimulator?id=android模拟器)

## ios模拟器@ios

MacOSX，安装ios模拟器，需要先安装[xcode](https://developer.apple.com/xcode/)；或在App store中搜索xcode完成安装。

xcode安装打开，按下快捷键`command+,`，打开`Preferences`窗口，如下图：

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/macosx/iosSimulator.jpg)

如上窗口，点击【Locations】，点击【Command Line Tools】

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/macosx/xcodeCommandLineTools.jpg)

## 运行App到iOS模拟器@run-app-ios-simulator

项目管理器，选中要运行的项目，点击工具栏 运行图标，如下图：

![](https://hx.dcloud.net.cn/static/snapshots/app/app_ios_simulator.jpg)


运行app项目到iOS模拟器效果如下：

![](https://hx.dcloud.net.cn/static/snapshots/app/app_ios_simulator_run.jpg)

## Android模拟器@android

市场上有很多成熟的Android模拟器，这里就不推荐了。自行搜索安装。

当然，Google官方也有自己的模拟器，您可以在[Android Studio](https://developer.android.com/studio/install)中安装不同版本的模拟器。

android studio模拟器如下图所示：

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/macosx/androidSimulator.jpg)

## 运行App到Android模拟器@run-app-android-emulator

Android模拟器启动后，HBuilderX会将其识别为名称为`emulator-xxxx`的Android手机，其中的xxxx为模拟器的id如下图：

![](https://hx.dcloud.net.cn/static/snapshots/app/Android-emulator.jpg)

运行app项目到android模拟器效果如下：

![](https://hx.dcloud.net.cn/static/snapshots/app/Android-emulator-start.jpg)