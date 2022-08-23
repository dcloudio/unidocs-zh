# Chrome调试H5+的Android应用
# Chrome to debug H5+ Android applications

> 注意本文档仅适用于 5+App应用。uni-app调试另见[https://uniapp.dcloud.io/tutorial/run-and-debug.html](https://uniapp.dcloud.io/tutorial/run-and-debug.html)
> Note that this document only applies to 5+Apps. uni-app debugging see also [https://uniapp.dcloud.io/tutorial/run-and-debug.html](https://uniapp.dcloud.io/tutorial/run-and-debug.html)

HBuilder对前端代码的调试方式有边改边看、真机运行、webkit remote debug真机调试3种。webkit remote debug其实是google、apple官方提供的服务，本文主要介绍google的chrome下如何调试Android手机上webview里运行的网页。
There are three ways to debug the front-end code in HBuilder: watching while changing, running on real machine, and webkit remote debug debugging on real machine. The webkit remote debug is actually a service provided by google and apple. This article mainly introduces how to debug the web page running in the webview on the Android phone under the chrome of google.
*系列文章目录导航：*
*Series Article Directory Navigation:*
- [调试方式介绍一 边改边看](http://ask.dcloud.net.cn/article/483)
- [Introduction to debugging methods while changing them](http://ask.dcloud.net.cn/article/483)
- [调试方式介绍二 真机运行](http://ask.dcloud.net.cn/article/484)
- [Introduction to Debugging Mode 2 Real Machine Operation](http://ask.dcloud.net.cn/article/484)
- [调试方式介绍三 webkit remote debug之Chrome调试Android手机]
- [Introduction to three webkit remote debug debugging methods: Chrome debug Android phone]
- [调试方式介绍四 webkit remote debug之Safari调试iOS手机](http://ask.dcloud.net.cn/article/143)
- [Introduction to four webkit remote debug Safari debugging iOS mobile phone](http://ask.dcloud.net.cn/article/143)

## Chrome调试Android手机之概述
## Overview of Chrome debugging Android phone

调试是软件开发过程中很重要的环节，它能帮助开发者快速的定位和解决开发过程中碰到的问题。对于HTML5的开发，大家都知道Chrome的DevTools工具有强大的功能和友好的用户体验，不仅能快速方便调试JavaScript、检查HTML页面DOM结构、实时同步更新元素CSS样式，还能跟踪分析页面资源加载性能等问题。对于移动平台的开发者来说，从Android4.4开始，也可以通过Chrome的DevTools工具连接设备对于应用进行调试。
Debugging is a very important link in the software development process, which can help developers quickly locate and solve problems encountered in the development process. For HTML5 development, we all know that Chrome's DevTools has powerful functions and a friendly user experience. It can not only quickly and easily debug JavaScript, check the DOM structure of HTML pages, update CSS styles of elements synchronously in real time, but also track and analyze page resource loading performance. And other issues. For developers of mobile platforms, starting from Android 4.4, you can also use Chrome's DevTools to connect devices to debug applications.

调试效果如图所示：
The debugging effect is shown in the figure:

![Android 调试效果图](http://www.dcloud.io/docs/a/adebug/1.1.png)
![Android debugging renderings](http://www.dcloud.io/docs/a/adebug/1.1.png)

**软件要求**
**Software Requirements**
- Android设备或模拟器的系统版本为4.4及以上；
- The system version of the Android device or emulator is 4.4 and above;



## 真机调试环境
## Real machine debugging environment
如果你有Android设备，并且系统是4.4以上版本，那么可以直接使用Chrome连接进行调试。
If you have an Android device and the system is version 4.4 or above, you can directly use the Chrome connection to debug.

### 检测设备版本
### Detect device version
打开系统“设置”-> “关于”，查看Android版本：
Open the system "Settings" -> "About" to check the Android version:

![](http://www.dcloud.io/docs/a/adebug/3.1.png)

Android版本必需是4.4及以上，否则无法进行应用调试。请参考“模拟器调试环境”章节使用模拟器进行应用调试。
The Android version must be 4.4 and above, otherwise application debugging cannot be performed. Please refer to the "Emulator Debugging Environment" chapter to use the emulator to debug applications.

### 显示开发者选项
### Show developer options
Android设备默认“开发者选项”是隐藏的，需要打开“设置”-> “关于”页面，多次（7次）点击“版本号”项，返回到“设置”页面可显示“开发者选项”：
The default "Developer Options" on Android devices is hidden, you need to open the "Settings" -> "About" page, click the "Version Number" item several times (7 times), and return to the "Settings" page to display the "Developer Options" :

![](http://www.dcloud.io/docs/a/adebug/3.2.png)

点击“开发者选项”，打开“开发者选项”设置页面。
Click "Developer Options" to open the "Developer Options" settings page.

### 开启USB调试
### Enable USB debugging

![](http://www.dcloud.io/docs/a/adebug/3.3.png)

### 连接PC
### Connect to PC
Android设备通过USB数据线连接到PC，如果系统无法正确识别，则需要安装驱动，通常可到设备制造商的官方网站下载安装。也可使用第三方手机助手软件安装，如“360手机助手”、“应用宝”等。
The Android device is connected to the PC through a USB data cable. If the system cannot recognize it correctly, a driver needs to be installed, which can usually be downloaded and installed from the official website of the device manufacturer. You can also use third-party mobile assistant software to install, such as "360 Mobile Assistant", "App Store" and so on.

PC识别到设备后，这时可通过HBuilder的真机运行功能进行连接并安装HBuilder应用。
After the PC recognizes the device, it can connect and install the HBuilder application through the real machine running function of HBuilder.

## 使用HBuilder调试
## Debugging with HBuilder
在HBuilder最新版里，点运行菜单，或者HBuilderX的视图菜单，点里面的“打开Webview调试模式”。
In the latest version of HBuilder, click the Run menu, or the View menu of HBuilderX, and click "Open Webview Debugging Mode".
确保手机连接正常、确保启动了可调试的app，那么右侧或底部会列出可调试的页面。点击调试/inspect即可打开chrome控制台进行调试。
Make sure the phone is connected properly, make sure the debuggable app is launched, then the debuggable page will be listed on the right or bottom. Click debug/inspect to open the chrome console for debugging.

**注意：chrome83起调整了协议。HBuilderX2.8起适配了新协议。如果你的chrome升级到83以上版本，需更新HBuilderX到2.8+才能正常使用**
**Note: The protocol has been adjusted since chrome83. HBuilderX2.8 adapts to the new protocol. If your chrome is upgraded to version 83 or above, you need to update HBuilderX to 2.8+ for normal use**


================================================
**正常情况下，开发者阅读到此结束。后续文档是Android模拟器的安装教程和不使用HBuilder调试而使用chrome调试的教程**
**Under normal circumstances, the developer reads this to the end. The follow-up documents are the installation tutorial of the Android emulator and the tutorial of debugging with chrome without debugging with HBuilder**
================================================
================================================
## 附录：Android模拟器调试环境
## Appendix: Android Emulator Debugging Environment
如果你没有Android手机，又想调试Android应用，那么你需要安装Google官方的Android模拟器。
If you don't have an Android phone and want to debug Android applications, then you need to install Google's official Android emulator.
注意三方模拟器如genymotion、海马玩、Bluestacks蓝叠等模拟器只能真机运行，不能debug调试。
Note that the third-party simulators such as genymotion, hippocampus, Bluestacks and other simulators can only run on real machines and cannot be debugged.

下文仅介绍Google官方模拟器的安装方法。由于Google经常更新，也建议开发者随时关注网上的其他更新教程。
The following only introduces the installation method of Google's official emulator. Since Google updates frequently, developers are also advised to keep an eye on other updated tutorials online.

如果没有Android4.4及以上版本设备，可以配置Android模拟器来调试。Android模拟器一直都以运行速度慢著称，其实官方已经提供解决方案使用Intel HAXM技术来加速，使得模拟器运行速度有大幅的提升。
If there is no Android 4.4 and above device, you can configure the Android emulator to debug. The Android emulator has always been known for its slow running speed. In fact, the official solution has been provided to use Intel HAXM technology to accelerate, which greatly improves the running speed of the emulator.
**硬件要求**
**Hardware requirements**

- CPU支持Intel VT技术（AMD CPU无法使用HAXM加速）；
- CPU supports Intel VT technology (AMD CPU cannot use HAXM acceleration);
- 内存推荐4G；
- Recommended 4G memory;
- Window XP/Vista/7/8（32/64-bit），推荐Windows 7/8（64-bit）。
- Window XP/Vista/7/8 (32/64-bit), Windows 7/8 (64-bit) recommended.

**网络要求**
**Network Requirements**
使用Google的服务，不得不付出的代价就是要准备好翻墙工具。
The price you have to pay for using Google's services is to be prepared with tools to circumvent the wall.
模拟器安装更新和调试初始化时都必须翻墙。
The simulator must be over the wall when installing updates and debugging initialization.
**无条件翻墙的同学可以尝试修改本机host的方法来访问Google相关服务，host内容参考[google-hosts](https://github.com/txthinking/google-hosts/blob/master/hosts)，注意及时更新：）**
**Students who are unconditional over the wall can try to modify the local host method to access Google related services. For the host content, refer to [google-hosts](https://github.com/txthinking/google-hosts/blob/master/hosts) , pay attention to timely update :)**

### ADT工具
### ADT Tools
配置模拟器调试环境需要安装ADT工具，如果已经配置过android开发环境，则可跳过此章节。
To configure the emulator debugging environment, you need to install the ADT tool. If you have already configured the android development environment, you can skip this chapter.

**下载ADT工具**
**Download ADT Tools**

Android模拟器开发环境需通过ADT工具进行安装，这里不需要下载完整的ADT Bundle，使用独立ADT工具即可：
The Android emulator development environment needs to be installed through the ADT tool. There is no need to download the complete ADT Bundle here, just use the independent ADT tool:
- 进入官网下载Android SDK Tools
- Go to the official website to download Android SDK Tools

![](http://www.dcloud.io/docs/a/adebug/2.1.1.1.png)

选择windows平台下的独立ADT插件安装包。
Select the independent ADT plug-in installation package under the Windows platform.

- 同意使用条款和条件
- Agree to terms and conditions of use

![](http://www.dcloud.io/docs/a/adebug/2.1.1.2.png)

点击下载按钮。
Click the download button.

- 保存安装包
- save the installation package
目前版本为22.6.2，保存到本地为：installer_r22.6.2-windows.exe。
The current version is 22.6.2, which is saved locally as: installer_r22.6.2-windows.exe.


**安装ADT工具**
**Install ADT Tools**
- 双击运行保存的ADT安装文件（install_r22.6.2-windows.exe），开始安装
- Double-click to run the saved ADT installation file (install_r22.6.2-windows.exe) to start the installation

![](http://www.dcloud.io/docs/a/adebug/2.1.2.1.png)

选择下一步“Next”。
Select the next step "Next".

- 配置JDK环境
- Configure JDK environment
如果已经安装了JDK环境，则提示确认：
If the JDK environment is already installed, you will be prompted to confirm:

![](http://www.dcloud.io/docs/a/adebug/2.1.2.2.png)

直接选择下一步“Next”。
Directly select the next step "Next".
如果没有安装过JDK，则会提示没有找到：
If the JDK has not been installed, it will prompt that it is not found:

![](http://www.dcloud.io/docs/a/adebug/2.1.2.3.png)

需安装JDK，并设置JAVA_HOME环境变量，完成后重新运行ADT安装文件。
You need to install JDK, set the JAVA_HOME environment variable, and re-run the ADT installation file after completion.

- 选择用户
- select user

![](http://www.dcloud.io/docs/a/adebug/2.1.2.4.png)

选择默认值，仅当前用户使用即可，选择下一步“Next”。
Select the default value, only the current user can use it, and select the next step "Next".

- 选择安装目录
- Select installation directory

![](http://www.dcloud.io/docs/a/adebug/2.1.2.5.png)

选择非系统盘目录（如“D:\AndroidSDK”），确保有足够的磁盘空间安装SDK及模拟器文件（至少需要1G的空间）。选择下一步“Next”。
Select a non-system disk directory (such as "D:\AndroidSDK"), and ensure that there is enough disk space to install SDK and emulator files (at least 1G of space is required). Select the next step "Next".

- 选择开始菜单目录
- Select start menu directory

![](http://www.dcloud.io/docs/a/adebug/2.1.2.6.png)

保持默认值，选择下一步“Next”。
Keep the default values and select Next.

- 解压安装
- Unzip installation

![](http://www.dcloud.io/docs/a/adebug/2.1.2.7.png)

完成后，选择下一步“Next”：
When done, select the next step "Next":

![](http://www.dcloud.io/docs/a/adebug/2.1.2.8.png)

- 完成安装
- finish installation

![](http://www.dcloud.io/docs/a/adebug/2.1.2.9.png)

选择立即启动SDK管理器（Android SDK Manager），选择下一步“Next”，完成ADT工具的安装。
Select to start the SDK Manager (Android SDK Manager) immediately, and select the next step "Next" to complete the installation of the ADT tool.
如未立即启动，可在Android SDK根目录（如“D:\AndroidSDK”），双击运行“SDK Manager.exe”程序。
If it does not start immediately, you can double-click to run the "SDK Manager.exe" program in the root directory of the Android SDK (such as "D:\AndroidSDK").


### 下载SDK和模拟器
### Download SDK and emulator
安装ADT工具后，启动SDK管理程序对各版本编译工具、SDK、模拟器、插件进行管理，如升级、安装、卸载等。如果已经下载了SDK和模拟器，可跳过此章节。
After installing the ADT tool, start the SDK management program to manage the compilation tools, SDKs, simulators, and plug-ins of each version, such as upgrade, installation, and uninstallation. If you have already downloaded the SDK and emulator, you can skip this chapter.
- 更新SDK列表
- Update SDK list
启动SDK管理程序后会自动获取最新的工具、SDK、模拟器及扩展插件列表。
After starting the SDK management program, it will automatically obtain the latest list of tools, SDKs, simulators and extension plug-ins.

![](http://www.dcloud.io/docs/a/adebug/2.2.1.png)

- 列表更新完成
- List update complete
更新完成后，显示日志：
After the update is complete, the log is displayed:

![](http://www.dcloud.io/docs/a/adebug/2.2.2.png)

- 选择下载项
- Select download items
使用Intel HAXM加速模拟器，必须选择以下项下载：
To use the Intel HAXM accelerated emulator, the following must be selected to download:

| 目录 | 项	 | 用途 |
| Contents | Items | Purpose |
| :-------- | :--: | :--: |
| Tools | Android SDK Platform-tools | Android平台工具，基础组件 |
| Tools | Android SDK Platform-tools | Android platform tools, basic components |
| Android 4.4.2（API19） | SDK Platform | Android4.4.2 SDK，模拟器基础组件 |
| Android 4.4.2 (API19) | SDK Platform | Android4.4.2 SDK, Emulator Basic Components |
| Android 4.4.2（API19） | Intel x86 Atom System Image | Inter x86平台的Android4.4.2模拟器镜像文件 |
| Android 4.4.2 (API19) | Intel x86 Atom System Image | Android4.4.2 emulator image file for Inter x86 platform |
| Extras | Intel x86 Emulator Accelerator (HAXM installer) | Inter x86平台Android模拟器硬件加速程序 |
| Extras | Intel x86 Emulator Accelerator (HAXM installer) | Inter x86 Platform Android Emulator Hardware Accelerator |

选择好下载项后，如下图所示：
After selecting the download item, as shown in the following figure:

![](http://www.dcloud.io/docs/a/adebug/2.2.3.png)

选择“Intall 4 Packages...”，开始下载安装。
Select "Intall 4 Packages..." to start the download and installation.

- 接受许可协议
- Accept the license agreement

![](http://www.dcloud.io/docs/a/adebug/2.2.4.png)

分别选择右侧packages列表中的项后，选中“Accept License”接受许可协议。然后点击“Install”，开始下载。
After selecting the items in the packages list on the right, select "Accept License" to accept the license agreement. Then click "Install" to start the download.

- 开始下载
- start download

![](http://www.dcloud.io/docs/a/adebug/2.2.5.png)

由于SDK和模拟器镜像文件比较大，下载时间会比较长，而且国内访问google官方网站不太稳定，经常提示下载失败：
Because the SDK and simulator image files are relatively large, the download time will be relatively long, and the domestic access to the google official website is not stable, and the download failure is often prompted:

![](http://www.dcloud.io/docs/a/adebug/2.2.6.png)

关闭提示对话框，重新下载，或者**翻墙后再尝试下载**。
Close the prompt dialog and download again, or **over the wall and try to download**.


### 安装Intel X86HAXM
### Install Intel X86HAXM
下载Intel X86 HAXM插件后，需要到下载目录运行安装程序进行安装，目录为： “%ADT安装目录%\extras\intel\Hardware_Accelerated_Execution_Manager\”。双击运行intelhaxm.exe进行安装，目前新版本为1.0.8，如果已经安装过低版本，建议升级。
After downloading the Intel X86 HAXM plug-in, you need to run the installation program to the download directory to install it. The directory is: "%ADT installation directory%\extras\intel\Hardware_Accelerated_Execution_Manager\". Double-click to run intelhaxm.exe to install, the current new version is 1.0.8, if you have installed a lower version, it is recommended to upgrade.

- 开始安装
- start installation

![](http://www.dcloud.io/docs/a/adebug/2.3.1.png)

选择下一步“Next”。
Select the next step "Next".

- 配置HAXM使用最大内存
- Configure HAXM to use max memory

![](http://www.dcloud.io/docs/a/adebug/2.3.2.png)
安装程序会自动计算推荐值，使用默认值，选择下一步“Next”。
The installer will automatically calculate the recommended values, use the default values and select Next.

- 确认配置
- Confirm configuration

![](http://www.dcloud.io/docs/a/adebug/2.3.3.png)
选择下一步“Next”。
Select the next step "Next".

- 完成安装
- finish installation

![](http://www.dcloud.io/docs/a/adebug/2.3.4.png)


### 创建模拟器
### Create emulator
ADT工具带Android模拟器管理程序（Android Virtual Device Manager），可在Android SDK根目录（如“D:\AndroidSDK”），双击运行“AVD Manager.exe”程序。
The ADT tool comes with the Android emulator management program (Android Virtual Device Manager), which can be double-clicked to run the "AVD Manager.exe" program in the root directory of the Android SDK (such as "D:\AndroidSDK").

![](http://www.dcloud.io/docs/a/adebug/2.4.1.png)

由于没有创建过模拟器，在列表中显示无可用模拟器，点击“New...”开始新建模拟器。
Since no emulator has been created, no emulator is available in the list, click "New..." to start a new emulator.

- 新建模拟器
- New simulator

![](http://www.dcloud.io/docs/a/adebug/2.4.2.png)

| 项 | 说明 |
| Item | Description |
| :-------- | :-------- |
| AVD Name | 模拟器名称，根据爱好输入 |
| AVD Name | Emulator name, input according to your preference |
| Device | 模拟设备，根据爱好选择，建议根据显示器分辨率来选择，大显示器选择则高分比率模拟器 |
| Device | Simulate device, choose according to your hobbies, it is recommended to choose according to the display resolution, if you choose a large display, a high score ratio simulator |
| Target | 选择“Android 4.4.2 - API Level 19” |
| Target | Select "Android 4.4.2 - API Level 19" |
| CPU/ABI | 选择“Intel Atom (x86)” |
| CPU/ABI | Select "Intel Atom (x86)" |
| Skin | 模拟器皮肤，根据爱好选择，推荐选择WVGA800 |
| Skin | Simulator skin, choose according to your hobbies, WVGA800 is recommended |
| Front Camera | 前置摄像头，用不到就选“None”，模拟摄像头就选“Emulated”，使用PC的摄像头就选“WebCam0” |
| Front Camera | For the front camera, select "None" if it is not used, select "Emulated" for analog camera, and select "WebCam0" for PC camera |
| Back Camera | 后置摄像头，与前置摄像头选择类似 |
| Back Camera | The rear camera, similar to the front camera selection |
| Memory Options | 内存大小，根据PC内存大小设置，推荐RAM：512；Heap：64 |
| Memory Options | Memory size, set according to PC memory size, recommended RAM: 512; Heap: 64 |
| Internal Storage | 内部存储器大小，根据PC系统盘空间大小设置，推荐200M |
| Internal Storage | The size of the internal memory, set according to the size of the PC system disk space, 200M is recommended |
| SD Card | SD卡存储器大小，根据PC系统盘空间大小设置，推荐200M |
| SD Card | SD card storage size, set according to the size of the PC system disk space, 200M is recommended |

**注意务必设置好SD Card，否则无法真机运行。**
**Be sure to set up the SD Card, otherwise it will not work on the real machine. **
设置完成后，点击“OK”。
After the setting is complete, click "OK".

- 确认配置
- Confirm configuration

![](http://www.dcloud.io/docs/a/adebug/2.4.3.png)

- 创建完成后在模拟器列表中显示
- Show in simulator list after creation

![](http://www.dcloud.io/docs/a/adebug/2.4.4.png)

### 启动模拟器
### Start the emulator
创建完模拟器，每次启动Android模拟器管理程序都能在列表中显示：
After creating the emulator, it can be displayed in the list every time you start the Android Emulator Manager:

![](http://www.dcloud.io/docs/a/adebug/2.5.1.png)

- 启动模拟器
- start the emulator

![](http://www.dcloud.io/docs/a/adebug/2.5.2.png)
选择“Android4.4.2”模拟器，点击“Start...”启动。
Select "Android4.4.2" emulator, click "Start..." to start.

- 设置启动配置信息
- Set startup configuration information

![](http://www.dcloud.io/docs/a/adebug/2.5.3.png)

| 项 | 说明 |
| Item | Description |
| :-------- | :-------- |
| Scale Display to real size | 是否缩放到设置的模拟器分辨率，在PC分辨率低时使用 |
| Scale Display to real size | Whether to scale to the set emulator resolution, used when the PC resolution is low |
| Wipe user data | 是否擦除用户数据，重置模拟器时使用 |
| Wipe user data | Whether to wipe user data, used when resetting the simulator |

点击“Launch”启动。
Click "Launch" to start.

- 等待加载模拟器
- Wait for the emulator to load

![](http://www.dcloud.io/docs/a/adebug/2.5.4.png)

PC的配置决定速度，耐心等待模拟器的启动。
The configuration of the PC determines the speed, patiently wait for the emulator to start.

- 完成启动模拟器
- Finished launching the emulator

![](http://www.dcloud.io/docs/a/adebug/2.5.5.png)

模拟器配置完毕，这时可通过HBuilder的真机运行功能进行连接，参考后面“应用调试”章节。
After the simulator is configured, you can connect it through the real machine running function of HBuilder. Please refer to the "Application Debugging" chapter below.


## 附录：使用chrome调试webview {#chromedebug}
## Addendum: Debug webview with chrome {#chromedebug}
配置完模拟器或真机调试环境后，可通过Chrome的DevTools工具快速调试HBuilder开发的移动应用。
After configuring the emulator or real machine debugging environment, you can quickly debug the mobile application developed by HBuilder through Chrome's DevTools tool.

### 安装HBuilder应用
### Install HBuilder application
启动HBuilder后会自动检测连接到PC上的设备（模拟器或真机），创建“移动App”后，可通过以下方式在设备上安装HBuilder应用进行调试：
After starting HBuilder, the device (simulator or real machine) connected to the PC will be automatically detected. After creating a "mobile app", you can install the HBuilder application on the device for debugging in the following ways:
运行的快捷键是Ctrl+R。也可以通过鼠标操作（注意下图中run in device的按钮在新版中已经不存在了，只需点击手机即可）
The shortcut key to run is Ctrl+R. It can also be operated with the mouse (note that the button of run in device in the picture below no longer exists in the new version, just click on the phone)
- 通过“运行”菜单启动
- Launch via the "Run" menu

![](http://www.dcloud.io/docs/a/adebug/4.1.1.png)

- 通过工具栏启动
- Launch via toolbar

![](http://www.dcloud.io/docs/a/adebug/4.1.2.png)
设备上安装完HBuilder应用后，会同步应用资源并自动运行。
After the HBuilder application is installed on the device, the application resources will be synchronized and run automatically.


- 模拟器
- Simulator

![](http://www.dcloud.io/docs/a/adebug/4.1.3.png)

- 真机
- real machine

![](http://www.dcloud.io/docs/a/adebug/4.1.4.png)
应用启动后则可通过Chrome的DevTools工具连接进行调试。
After the application is launched, it can be debugged through Chrome's DevTools tool connection.


### 使用Chrome调试
### Debugging with Chrome
我们推荐开发者直接使用HBuilder的调试，详见上文。这样可以免翻墙。
We recommend developers to use HBuilder directly for debugging, see above for details. This can avoid overturning the wall.
如果你不使用HBuilder的调试，而要自己使用chrome调试，可以看这里的教程，注意要翻墙。
If you don't use HBuilder's debugging, but want to use chrome debugging yourself, you can read the tutorial here, pay attention to overcoming the wall.
**检测Chrome版本号**
**Detect Chrome version number**
Chrome 30及以上版本才支持Android设备调试，打开Chrome的关于页面查看：
Only Chrome 30 and above versions support Android device debugging. Open Chrome's About page to view:

![](http://www.dcloud.io/docs/a/adebug/4.2.1.png)
要求最低Chrome30以上版本，如果版本太低则需更新版本，推荐使用最新版本。
A minimum version of Chrome 30 or above is required. If the version is too low, an updated version is required. The latest version is recommended.

**打开设备检查页面**
**Open Device Check Page**
在Chrome地址栏，输入“chrome://inspect”或通过“菜单”->“工具”->“检查设备”打开设备检查页面：
In the Chrome address bar, enter "chrome://inspect" or open the device inspection page via "Menu" -> "Tools" -> "Inspect Device":

![](http://www.dcloud.io/docs/a/adebug/4.2.2.png)
DevTools工具会自动检测已连接设备运行的可调试页面列表，点击对应页面的“inspect”链接打开调试页面。
The DevTools tool will automatically detect the list of debuggable pages running on the connected device, and click the "inspect" link of the corresponding page to open the debug page.
如果上图界面没有显示可调试的手机，请重新根据上文提到的方法检查手机的usb调试模式或驱动安装情况。同时注意Android4.4以下的手机无法调试，注意海马玩等模拟器无法调试。
If the above interface does not display a debuggable phone, please re-check the phone's usb debugging mode or driver installation according to the methods mentioned above. At the same time, note that mobile phones below Android 4.4 cannot be debugged, and that emulators such as hippocampus cannot be debugged.
如果上图界面有手机，但没有可调试的app，可能的原因如下：
If there is a mobile phone in the interface above, but there is no debuggable app, the possible reasons are as follows:
1. 手机端需要调试的HBuilder基座或其他app并没有启动或没有运行任何html页面；
1. The HBuilder base or other app that needs to be debugged on the mobile phone does not start or run any html page;
2. 要调试的app拒绝了调试请求。HBuilder调试基座是默认开放调试请求的，但云打包或本地打包的app默认是关闭调试请求的。云打包是在manifest里配置是否允许调试，具体请查询[manifest配置指南](http://ask.dcloud.net.cn/article/94)，本地打包也要配置debug="true"，具体需要看本地打包配置环境。
2. The app to be debugged rejected the debug request. The HBuilder debug base opens debug requests by default, but for cloud packaged or locally packaged apps, debug requests are closed by default. Cloud packaging is to configure whether debugging is allowed in the manifest. For details, please refer to the [manifest configuration guide](http://ask.dcloud.net.cn/article/94). The local packaging should also be configured with debug="true". See the local packaging configuration environment.

**点击"inspect"时，如果遇到启动了一个白屏界面，说明被墙了。因为此服务需要连接google的服务器**
**When you click "inspect", if you encounter a white screen interface, it means you are blocked. Because this service needs to connect to google's server**
一般情况下，只在第一次使用"inspect"时需要翻墙，以后会缓存在本地。
In general, you only need to overturn the wall when you use "inspect" for the first time, and it will be cached locally in the future.
开发者可以使用三方翻墙服务，但注意并不是可以访问google.com就可以使用chrome调试，有些翻墙软件支持的dns并不全。关键是要ping通chrometophone.appspot.com（此url可能随google调整服务而变化）。
Developers can use three-party circumvention services, but note that it is not possible to use chrome to debug by visiting google.com, and some circumvention software does not support all DNS. The key is to ping chrometophone.appspot.com (this url may change as google tweaks the service).

还有一个简单易行的方法是修改本机host。这里提供一些host清单。[https://github.com/racaljk/hosts](https://github.com/racaljk/hosts)，注意及时更新。于2016年7月25日亲测可行，注意此host文件涉及的国外域名很多，不需要的dns解析可以删除）
Another simple and easy way is to modify the local host. Here are some host lists. [https://github.com/racaljk/hosts](https://github.com/racaljk/hosts), please update in time. It is feasible to test on July 25, 2016. Note that there are many foreign domain names involved in this host file, and unnecessary DNS resolution can be deleted)
注意host文件修改在window下需要管理员权限，具体方法本文不讲述请自行百度。
Note that the modification of the host file requires administrator privileges under the window. The specific method is not described in this article, please Baidu.

**页面调试**
**Page debugging**
打开调试页面后DevTools会自动加载相关资源，调试页面操作方式与普通html调试页面完全一致。
After the debug page is opened, DevTools will automatically load related resources, and the operation mode of the debug page is exactly the same as that of the normal html debug page.
- 在Elements下查看DOM结构
- View DOM structure under Elements

![](http://www.dcloud.io/docs/a/adebug/4.2.3.png)

选中DOM元素后，在设备上会高亮显示，右侧Styles下修改CSS属性可即时生效：
After the DOM element is selected, it will be highlighted on the device. Modifying the CSS properties under Styles on the right will take effect immediately:

![](http://www.dcloud.io/docs/a/adebug/4.2.4.png)

- 在Sources下断点调试JavaScript
- Debug JavaScript with breakpoints under Sources

![](http://www.dcloud.io/docs/a/adebug/4.2.5.png)

按F5可重新加载页面，重新开始调试。
Press F5 to reload the page and start debugging again.

**注意：每个Webview在chrome候选调试列表里是不同的列表，需要单独点inspect。当你inspect WebviewA时，点击了一个按钮，打开了WebviewB，此时若要调试B，需要返回chrome://inspect/#devices页面，找到WebviewB，然后点inspect。**
**Note: Each Webview is a different list in the chrome candidate debugging list and needs to be inspected separately. When you inspect WebviewA, click a button to open WebviewB. To debug B, you need to go back to chrome://inspect/#devices%E9%A1%B5%E9%9D%A2, find WebviewB, and click inspect. **
