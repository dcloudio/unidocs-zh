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