# 真机运行常见问题@run
# Real machine running FAQ @run
<!--
keyword: 真机运行常见故障排查指南,无法连接Android手机,无法连接ios手机,检测不到手机,连接手机,连接真机,iTunes,adb,真机运行
keyword: Troubleshooting guide for real machine operation, can't connect to Android phone, can't connect to ios phone, can't detect mobile phone, connect to mobile phone, connect to real machine, iTunes, adb, real machine operation
-->

> 关于真机运行，iOS: 首先请确保`iTunes`可以连接iPhone;
> Regarding running on the real device, iOS: first, please make sure that `iTunes` can connect to the iPhone;
> Android: 确定adb devices命令，可以检测到Android连接手机。
> Android: Determine the adb devices command, which can detect Android connected mobile phones.

> 如果仍有问题请查阅以下问题是否与自己遇到的情况相同!
> If you still have problems, please check whether the following problems are the same as yours!

**特别注意**：
**pay attention**:
- `iOS13真机运行，需要升级至HBuilderX 2.2.5+以上版本。`
- `iOS13 real machine running, need to upgrade to HBuilderX 2.2.5+ version. `
- itunes `12.10.9.3`版本，连接`ios 14+`的iphone手机，可能存在问题；请下载12.9.4.102之前的版本
- itunes `12.10.9.3` version, connected to `ios 14+` iphone, there may be problems; please download the version before 12.9.4.102
- Android 11部分手机真机运行文件同步失败的问题，HBuilderX 3.1.19已解决此问题，请升级HBuilderX 到3.1.19+版本。
- Some Android 11 mobile phones failed to synchronize files when running on real devices. HBuilderX 3.1.19 has solved this problem. Please upgrade HBuilderX to version 3.1.19+.
- HBuilderX，【设置 - 运行设置】，自定义过adb路径。如有自定义，请检查adb路径是否有效。如不确定，请清除。然后重启HBuilderX.
- HBuilderX, [Settings - Run Settings], customized adb path. If customized, check if the adb path is valid. If unsure, please clear. Then restart HBuilderX.
- 如果是华为荣耀Magic UI系列手机，检测不到手机，请参考 [华为荣耀Magic UI系列手机ADB连接手机方法](https://ask.dcloud.net.cn/article/40005)
- If it is a Huawei Honor Magic UI series mobile phone, but the mobile phone cannot be detected, please refer to [How to connect Huawei Honor Magic UI series mobile phones to ADB phones](https://ask.dcloud.net.cn/article/40005)

出现问题手机分析清楚问题在哪个环节。
When there is a problem, the mobile phone analyzes the problem clearly.
从在HBuilder/HBuilderX菜单里点真机运行，程序会执行如下几个步骤：
From the HBuilder/HBuilderX menu, click the real machine to run, the program will perform the following steps:

1. 手机硬件通过usb线连接到HBuilder所在电脑，此时可能因为`手机驱动`、usb口、数据线、手机硬件等多种问题造成连接失败。
1. The mobile phone hardware is connected to the computer where HBuilder is located through the usb cable. At this time, the connection may fail due to various problems such as the `mobile phone driver`, the usb port, the data cable, and the mobile phone hardware.
2. HBuilderX通过adb或itunes服务检测手机。此时可能因为手机渠道、usb连接设置、adb设置或adb冲突、itunes设置造成检测不到。
2. HBuilderX detects the mobile phone through adb or itunes service. At this time, it may not be detected due to mobile phone channels, usb connection settings, adb settings or adb conflicts, and itunes settings.
3. HBuilderX安装调试基座到手机。此时可能因为手机禁止usb安装、Android手机没有sd卡、iOS手机没有信任证书而安装失败。
3. HBuilderX installs the debugging base to the mobile phone. At this time, the installation may fail because the mobile phone prohibits usb installation, the Android mobile phone does not have an sd card, and the iOS mobile phone does not have a trust certificate.
4. HBuilderX将ide中的代码同步到手机上并启动调试基座。这一步一般不会出问题。
4. HBuilderX synchronizes the code in the ide to the phone and starts the debug base. This step is generally not a problem.


下面把各种常见FAQ列出，大家可按图索骥。
A variety of common FAQs are listed below, and you can follow the chart to find out.

## 1. 没有运行到手机的菜单@noMenu
## 1. Not running to the phone's menu @noMenu

> 真机运行只能运行App项目，选中App项目或将焦点放在将要运行的App项目的文件上
> The real machine can only run the App project, select the App project or focus on the file of the App project to be run

HBuilderX支持web项目和app项目，项目前面是有图标的，W表示web项目，A表示App项目。其中只有`App项目可以运行`。
HBuilderX supports web projects and app projects. There is an icon in front of the project, W represents the web project, and A represents the App project. where only `App project can run`.

HBuilderX支持项目类型较多，只有`uni-app`、`5+app`、`wap2app`可以真机运行。他们都会在项目根目录下有个`manifest.json`文件（uni-cli项目会在src目录下有manifest.json）。
HBuilderX supports many project types, only `uni-app`, `5+app`, `wap2app` can run on real machine. They will all have a `manifest.json` file in the project root directory (uni-cli projects will have a manifest.json in the src directory).

## 2. 检查手机设置@check
## 2. Check phone settings @check

特别注意：Windows连接Android手机，一定要确保电脑已安装相应的手机驱动。
Special attention: Windows is connected to an Android phone, and you must ensure that the computer has installed the corresponding phone driver.

1. 确保数据线或USB口正常，可替换不同的线或口来验证。
1. Make sure that the data cable or USB port is normal, you can replace a different cable or port to verify.
2. 确认Android手机设置中`USB调试`模式已开启。这个设置一般在【设置】【开发者选项】里。有的手机在插上数据线后在push通知栏里也可以设置。注意不能设置为u盘模式，如果是充电模式则必须同时设置充电时`允许usb调试`。
2. Make sure the `USB debugging` mode is enabled in the Android phone settings. This setting is generally in [Settings] [Developer Options]. Some mobile phones can also be set in the push notification bar after plugging in the data cable. Note that it cannot be set to U disk mode. If it is charging mode, you must also set `Allow usb debugging` during charging.
3. 如手机屏幕弹出需信任本计算机的询问，请`同意该授权`。并且最好是把始终同意该设备调试勾上。如不小心拒绝，需要重插手机或重启电脑。
3. If the mobile phone screen pops up a request to trust this computer, please `agree to the authorization`. And it's best to tick Always agree to this device debugging. If you accidentally refuse, you need to replug the phone or restart the computer.
4. Android5.0及以上系统，不要使用访客模式。这种模式下无法成功运行。
4. For Android 5.0 and above systems, do not use guest mode. It will not work successfully in this mode.
5. 部分手机如小米，有usb安装应用的权限设置，需在手机上允许通过usb安装应用。不同rom的界面不一样，请自行百度你的手机打开usb安装应用的方式。
5. Some mobile phones, such as Xiaomi, have permission settings for usb installation of applications, which need to be allowed on the mobile phone to install applications through usb. The interface of different roms is different, please Baidu your mobile phone to open the usb to install the application.
6. 如果是华为荣耀Magic UI系列手机，请参考 [华为荣耀Magic UI系列手机ADB连接手机方法](https://ask.dcloud.net.cn/article/40005)
6. If it is a Huawei Honor Magic UI series mobile phone, please refer to [How to connect Huawei Honor Magic UI series mobile phone ADB to the mobile phone](https://ask.dcloud.net.cn/article/40005)

## 3. Mac 连接手机/模拟器说明@macosx
## 3. Mac connection phone/emulator instructions @macosx

### 3.1 Mac: iOS真机@mac-iphone
### 3.1 Mac: iOS real machine @mac-iphone

1. 确认手机已通过数据线连接电脑
1. Make sure the phone is connected to the computer via a data cable
2. 确认Mac电脑能正常连接手机
2. Confirm that the Mac computer can connect to the mobile phone normally
3. 如手机屏幕弹出需信任本计算机的询问，请同意该授权
3. If the mobile phone screen pops up a request to trust this computer, please agree to the authorization

### 3.2 Mac: iOS模拟器@mac-iOS-Simulator
### 3.2 Mac: iOS Simulator @mac-iOS-Simulator

1. Xcode必须安装在应用程序（Application）中
1. Xcode must be installed in the application (Application)
2. 首先确认Xcode（版本必须是6.0及以上版本）已安装并能正常启动模拟器
2. First confirm that Xcode (version must be 6.0 and above) is installed and can start the simulator normally
3. 如果仍然无法检测到，则打开Xcode，然后打开Xcode的 `Preferences --> Locations`，设置该界面中的 `Command Line Tools` 项，选择正确的`Xcode`版本即可
3. If it still cannot be detected, open Xcode, then open Xcode's `Preferences --> Locations`, set the `Command Line Tools` item in the interface, and select the correct `Xcode` version.

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/xcode_ios_simulator.png)


### 3.2 Mac: 连接Android手机@mac-android
### 3.2 Mac: Connect Android phone @mac-android

- 特别注意：HBuilderX菜单【设置 - 运行设置】，如果自定义过adb路径，请检查adb路径是否有效，注意必须是有效的adb（通常程序名都是adb)。如不确定，清除掉试试。然后重启HBuilderX。
- Special attention: HBuilderX menu [Settings - Run Settings], if you have customized the adb path, please check whether the adb path is valid, and note that it must be a valid adb (usually the program name is adb). If unsure, try clearing it. Then restart HBuilderX.
- 如果是检测不到mumu等Android模拟器，HBuilderX菜单【设置 - 运行设置】,请检查配置的端口号。
- If the Android emulator such as mumu cannot be detected, please check the configured port number in the HBuilderX menu [Settings - Run Settings].
- 关闭HBuilderX，打开任务管理器，看下是否存在adb进程，如存在，请杀死所有adb进程。
- Close HBuilderX, open the task manager, and check if there is an adb process, if there is, please kill all adb processes.

1. 重启电脑重试，重启电脑通常能解决90%的问题。 
1. Restart the computer and try again, restarting the computer usually solves 90% of the problems.
2. 如重启HBuilderX仍然不行，请使用命令行(终端.app)，切换到HBuilderX自带的adb目录。
2. If restarting HBuilderX still fails, please use the command line (terminal.app) to switch to the adb directory that comes with HBuilderX.
3. HBuilderX正式版的adb目录位置：tools/adbs目录（MAC下为HBuilderX.app/Contents/tools/adbs目录）；HBuilderX Alpha版的adb目录位置：plugins/launcher/tools/adbs目录（MAC下为`/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs`目录）
3. The adb directory location of the official version of HBuilderX: tools/adbs directory (HBuilderX.app/Contents/tools/adbs directory under MAC); the adb directory location of HBuilderX Alpha version: plugins/launcher/tools/adbs directory (the `/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs` directory)
4. 在adbs目录下运行`./adb kill-server`重试。
4. Run `./adb kill-server` in the adbs directory to try again.

**修改adb_usb.ini**
**Modify adb_usb.ini**
1. 关于本机(指Mac系统的关于本机，非手机) --> 系统报告 -> usb  -> 你所连接的device --> 厂商ID或者供应商ID(Vendor ID)
1. About this machine (referring to Mac system about this machine, not a mobile phone) --> system report -> usb -> your connected device --> manufacturer ID or supplier ID (Vendor ID)
2. 在终端执行如下命令：echo xxxxxx >> ~/.android/adb_usb.ini （“xxxxxx”为厂商ID或者供应商ID(Vendor ID)，有些系统下echo命令并不能正确写入文件，可在~/.android/目录下修改或新建adb_usb.ini添加xxxxxx），重启HBuilderX。
2. Execute the following command on the terminal: echo xxxxxx >> ~/.android/adb_usb.ini ("xxxxxx" is the manufacturer ID or vendor ID (Vendor ID), the echo command cannot be written to the file correctly under some systems, you can find it in Modify or create adb_usb.ini in the ~/.android/ directory to add xxxxxx), restart HBuilderX.

> 如果上面的方法还无法解决，菜单【帮助】【查看运行日志】，看下日志中存在什么相关的错误。
> If the above methods still cannot solve the problem, go to the menu 【Help】【View Operation Log】, and check what related errors exist in the log.
> 也可到[DCloud论坛](https://ask.dcloud.net.cn/)发帖。发帖时，详细说明操作系统信息、HBuilderX版本号、手机型号以及手机系统信息，并提供运行日志。
> You can also post to [DCloud Forum](https://ask.dcloud.net.cn/). When posting, specify the operating system information, HBuilderX version number, mobile phone model, and mobile phone system information in detail, and provide running logs.

## 4. Windows 连接手机/模拟器说明@windows
## 4. Windows connection phone/emulator instructions @windows

### 4.1 Windows: 连接Android手机@windows-android
### 4.1 Windows: Connecting to an Android phone @windows-android

#### 4.1.1 驱动：
#### 4.1.1 Driver:

> 请确认已安装Android手机驱动。
> Make sure the Android phone driver is installed.

如果手机连接没有任何反应或提示驱动问题，可通过以下方式解决：
If there is no response from the mobile phone connection or a driver problem is prompted, you can solve it in the following ways:
  1. 安装`驱动精灵`类程序，通过它们来安装驱动
  1. Install the `Driver Wizard` programs and use them to install the driver
  2. 装驱动比较好的方式是使用各种手机助手，比如`360、腾讯的各种手机助手`，如果有问题，尝试升级助手的版本。
  2. The best way to install the driver is to use various mobile assistants, such as `360, Tencent's various mobile assistants`, if there is any problem, try to upgrade the version of the assistant.

#### 4.1.2 注意事项：
#### 4.1.2 Notes:

- 特别注意：HBuilderX菜单【设置 - 运行设置】，如果自定义过adb路径，请检查adb路径是否有效，注意必须是有效的adb（通常windows下，程序名都是adb.exe)。如不确定，清除掉试试。然后重启HBuilderX
- Special attention: HBuilderX menu [Settings - Run Settings], if you have customized the adb path, please check whether the adb path is valid, and note that it must be a valid adb (usually under windows, the program name is adb.exe). If unsure, try clearing it. Then restart HBuilderX
- 如果是检测不到夜神、mumu等Android模拟器，HBuilderX菜单【设置 - 运行设置】,请检查配置的端口号。
- If Android emulators such as Yeshen and mumu cannot be detected, please check the configured port number in the HBuilderX menu [Settings - Run Settings].
- 关闭HBuilderX，打开任务管理器，看下是否存在adb进程，如存在，请杀死所有adb进程。
- Close HBuilderX, open the task manager, and check if there is an adb process, if there is, please kill all adb processes.

1. 如果在启动HBuilderX后才安装驱动连接上手机，可能需要重启HBuilderX。
1. If the driver is installed and connected to the phone after HBuilderX is started, it may be necessary to restart HBuilderX.
2. 使用`管理员权限`运行HBuilderX。
2. Run HBuilderX with `administrator privileges`.
3. 关闭WebView调试模式，重启HBuilderX重试。
3. Turn off the WebView debug mode, restart HBuilderX and try again.
4. 如果其他软件可以连接手机，而HBuilderX无法检测到手机，可能是其他软件独占了Google的ADB服务通道。
4. If other software can connect to the mobile phone, but HBuilderX cannot detect the mobile phone, it may be that other software has exclusive access to Google's ADB service channel.
5. Android的`ADB服务`已经被大量软件滥用，除了各种手机助手自带adb，其他如QQ、搜狗输入法、暴风影音、酷狗音乐、阿里旺旺等众多软件都自带`adb`。有些工具的`adb`版本低且独占手机通道，就会导致HBuilderX无法连接手机。
5. Android's `ADB service` has been abused by a large number of software. In addition to various mobile phone assistants that come with adb, other software such as QQ, Sogou input method, Baofengyingyin, Kugou Music, Aliwangwang and many other software have their own `adb`. The version of `adb` of some tools is low and the mobile phone channel is exclusive, which will cause HBuilderX to fail to connect to the mobile phone.
6. 在任务管理器中找到`adb.exe`相关进程（包括`kadb.exe`等），在任务管理中右键该进程，打开文件位置，查看该进程是什么软件启动的。
6. Find the `adb.exe` related process (including `kadb.exe`, etc.) in the task manager, right-click the process in the task manager, open the file location, and check what software started the process.
7. 禁止这些软件监听手机插入（一般在该软件的设置中）、禁止自动启动。
7. It is forbidden for these software to monitor the insertion of the mobile phone (usually in the settings of the software) and prohibit automatic startup.
8. 有些软件结束adb进程后又会自动启动，所以得将`adb.exe`文件重命名一下，实在不行卸载了这些流氓软件。
8. Some software will start automatically after ending the adb process, so you have to rename the `adb.exe` file, it is impossible to uninstall these rogue software.
9. 关闭所有手机助手及进程里各种`adb.exe`（包括`kadb.exe`等），再试。
9. Close all mobile assistants and various `adb.exe` (including `kadb.exe`, etc.) in the process, and try again.
10. 如果是华为手机，下列各种方法都尝试后还不行，请安装[华为手机助手](https://consumer.huawei.com/cn/support/content/zh-cn00731203/?ivk_sa=1024320u)
10. If it is a Huawei mobile phone, if the following methods still fail, please install [Huawei Mobile Assistant](https://consumer.huawei.com/cn/support/content/zh-cn00731203/?ivk_sa=1024320u)
11. 如果是华为荣耀Magic UI系列手机，检测不到手机，请参考 [华为荣耀Magic UI系列手机ADB连接手机方法](https://ask.dcloud.net.cn/article/40005)
11. If it is a Huawei Honor Magic UI series mobile phone, but the mobile phone cannot be detected, please refer to [How to connect the Huawei Honor Magic UI series mobile phone to the mobile phone through ADB](https://ask.dcloud.net.cn/article/40005)

> 如果上面的方法还无法解决，菜单【帮助】【查看运行日志】，看下日志中存在什么相关的错误。
> If the above methods still cannot solve the problem, go to the menu 【Help】【View Operation Log】, and check what related errors exist in the log.
> 也可到[DCloud论坛](https://ask.dcloud.net.cn/)发帖。发帖时，详细说明操作系统信息、HBuilderX版本号、手机型号以及手机系统信息，并提供运行日志。
> You can also post to [DCloud Forum](https://ask.dcloud.net.cn/). When posting, specify the operating system information, HBuilderX version number, mobile phone model, and mobile phone system information in detail, and provide running logs.

#### 4.1.3 其它问题
#### 4.1.3 Other issues

如果以上方式仍然不行，还有一种可能是手机对adb的版本有特定要求（遇到一些魅族手机有此问题），此时需要更换HBuilder的adb版本。
If the above methods still fail, there is another possibility that the mobile phone has specific requirements for the adb version (some Meizu mobile phones have this problem), and the adb version of HBuilder needs to be replaced at this time.
- HBuilder安装目录下带了多个版本的adb。
- There are multiple versions of adb in the HBuilder installation directory.
- HBuilder的adb目录位置：tools/adbs目录（MAC下为HBuilder.app/Contents/tools/adbs目录）
- HBuilder's adb directory location: tools/adbs directory (HBuilder.app/Contents/tools/adbs directory under MAC)
- HBuilderX的adb目录位置：plugins/launcher/tools/adbs目录（MAC下为`/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs`目录）
- The location of the adb directory of HBuilderX: plugins/launcher/tools/adbs directory (the `/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs` directory under MAC)
替换版本前，将默认版本的adb.exe备份下。然后把1.0.31版的adb.exe拷贝出来替换主目录下的exe。
Before replacing the version, back up the default version of adb.exe. Then copy adb.exe version 1.0.31 to replace the exe in the main directory.

> 当然也可下载[Android SDK](https://developer.android.google.cn/)，将其中的adb替换HBuilderX自带的adb.
> Of course, you can also download [Android SDK](https://developer.android.google.cn/), and replace the adb in it with the adb that comes with HBuilderX.

#### 4.1.4 adb占用问题
#### 4.1.4 adb occupation problem

如果你找不到被谁占用，则还可以使用如下方式检测，寻找幕后黑手：
If you can't find who is occupied, you can also use the following methods to detect and find the culprit:
1. 打开命令行窗口
1. Open a command line window
2. 确认adb的启动进程：
2. Confirm the startup process of adb:
  寻找端口是`5037`的`tcp连接`，在命令行中输入：`netstat -ano | findstr 5037`
  To find a `tcp connection` with port `5037`, enter in the command line: `netstat -ano | findstr 5037`

  在输出结果中找到类似下面的一行：
  TCP    127.0.0.1:5037         0.0.0.0:0              **LISTENING**       **5816**
  *如果内容为空，可能是没有程序在占用adb端口。*
  *If the content is empty, there may be no program occupying the adb port. *

  或者使用 netstat -ano | findstr 5037>d:/1.txt 输出到文件中查找。
  Or use netstat -ano | findstr 5037>d:/1.txt output to the file to find.
  根据查询结果确认端口为5037的连接被那个进程占用，结果中显示的“5816”表示占用adb端口的进程PID。
  According to the query result, it is confirmed that the connection whose port is 5037 is occupied by that process. The "5816" displayed in the result indicates the PID of the process occupying the adb port.

3. 根据进程的PID可以找到具体进程。
3. The specific process can be found according to the PID of the process.

  在命令行中输入：`tasklist | findstr 5816`
  Type in the command line: `tasklist | findstr 5816`
  在输出结果中找到类似下面的一行：
  Find a line similar to the following in the output:
  ```shell
  adb.exe                     5816 Console                 0      4,440 K
  ```
  adb.exe（名称一般不是adb.exe，以adb.exe举例）为启动的adb进程。
  adb.exe (the name is generally not adb.exe, take adb.exe as an example) as the started adb process.
  或者手工在任务管理器中定位这个进程，打开任务管理器后，进入进程选项卡，如果列表里有PID，直接找；如果列表里没有PID，点菜单查看-选择列，勾上PID。
  Or manually locate the process in the task manager, open the task manager, go to the process tab, if there is a PID in the list, look for it directly; if there is no PID in the list, click the menu to view - select a column, and tick the PID.

### 4.2 Windows: 连接iOS手机@windows-ios
### 4.2 Windows: Connecting to an iOS phone @windows-ios

#### 4.2.1 iTunes下载说明@windows-download-itunes
#### 4.2.1 iTunes Download Instructions @windows-download-itunes

[Windows 32位 itunes][下载地址](https://pc.qq.com/detail/9/detail_609.html)、[所有版本的itunes下载地址](https://mydown.yesky.com/pcsoft/445423/versions/)
[Windows 32-bit itunes][download link](https://pc.qq.com/detail/9/detail_609.html), [all versions of itunes download link](https://mydown.yesky.com/pcsoft /445423/versions/)

[Windows 64位 itunes][下载地址](https://pc.qq.com/detail/3/detail_2683.html)、[所有版本的itunes下载地址](https://mydown.yesky.com/pcsoft/33491427/versions/)
[Windows 64-bit itunes][download link](https://pc.qq.com/detail/3/detail_2683.html), [all versions of itunes download link](https://mydown.yesky.com/pcsoft /33491427/versions/)

- 建议从如上地址下载iTunes；如果是第一次安装完itunes，建议重新启动电脑
- It is recommended to download iTunes from the above address; if it is the first time to install itunes, it is recommended to restart the computer
- itunes请勿从`微软应用商店`下载；
- do not download itunes from `Microsoft App Store`;
- 如果您的电脑是`64位`, 且HBuilderX的版本低于3.4.0，请下载`12.9.4.102`之前的iTunes.
- If your computer is `64-bit`, and the version of HBuilderX is lower than 3.4.0, please download iTunes before `12.9.4.102`.
- 如果您的电脑是`32位`，请下载`12.9.4.102`之前的iTunes.
- If your computer is `32bit`, please download iTunes before `12.9.4.102`.

**特别注意**：`如手机屏幕弹出需信任本计算机的询问，请同意该授权`
**Special attention**: `If the mobile phone screen pops up a request to trust this computer, please agree to the authorization`

#### 4.2.2 疑难排查@windows-itunes-question
#### 4.2.2 Troubleshooting @windows-itunes-question

1. itunes安装完成后，请确认itunes可以`正常`连接手机。如果itunes都无法连接手机，请先解决itunes连接手机问题。
1. After the itunes installation is complete, please confirm that itunes can connect to the phone `normally`. If itunes cannot connect to the phone, please solve the problem of itunes connecting to the phone first.
2. 如果以上方案都无法解决，有可能是因为本地库与iTunes带的库冲突了，一般是iTunes库目录（32位系统目录为：C:\Program Files\Common Files\Apple\Apple Application Support，64位系统目录为：C:\Program Files (x86)\Common Files\Apple\Apple Application Support）下的dll文件和系统库目录（32位系统目录为：C:\WINDOWS\system32，64位系统目录为：C:\Windows\SysWOW64）下的dll重名，可将iTunes库目录下的同名dll文件拷贝到系统库目录下，或者将系统目录下的同名dll文件重命名或删除，然后再重启HBuilder或者重试真机运行
2. If the above solutions cannot be solved, it may be because the local library conflicts with the library brought by iTunes, usually the iTunes library directory (32-bit system directory is: C:\Program Files\Common Files\Apple\Apple Application Support, The 64-bit system directory is: C:\Program Files (x86)\Common Files\Apple\Apple Application Support) under the dll file and system library directory (32-bit system directory is: C:\WINDOWS\system32, 64-bit system directory It is the same name as the dll under C:\Windows\SysWOW64), you can copy the dll file with the same name in the iTunes library directory to the system library directory, or rename or delete the dll file with the same name in the system directory, and then restart HBuilder Or retry the real machine to run
3. 有可能是iTunes安装时依赖库丢失，尝试重装iTunes解决问题
3. It is possible that the dependent library is missing when iTunes is installed, try reinstalling iTunes to solve the problem

#### 4.2.3 itunes无法检测到手机
#### 4.2.3 itunes cannot detect phone

itunes无法检测到手机，itunes弹窗提示：`iTunes 在您的电脑上检测到不兼容的蓝牙软件，可能无法正常运行`。
iTunes cannot detect the phone, and itunes pop-up window prompts: `iTunes has detected incompatible Bluetooth software on your computer and may not run properly`.

请禁用或更新某些蓝牙驱动。或参考[Apple 论坛解决方案](https://discussionschinese.apple.com/thread/140142495?page=2)
Please disable or update some bluetooth drivers. Or refer to [Apple forum solution](https://discussionschinese.apple.com/thread/140142495?page=2)


## 5. 其它问题@other
## 5. Other questions @other

#### Q1: 能检测到手机，但处于置灰状态无法点击
#### Q1: The mobile phone can be detected, but it is grayed out and cannot be clicked

发生此情况一般为检测到手机后，中间因为其他软件连接断开了，需要重新插拔手机或重启HBuilderX。
This situation usually occurs when the mobile phone is detected, and the connection of other software is disconnected in the middle, and the mobile phone needs to be re-plugged or restarted or HBuilderX needs to be restarted.

#### Q2: 能检测到手机，但点HBuilder的真机运行，安装调试基座失败
#### Q2: The mobile phone can be detected, but the real machine of HBuilder fails to install and debug the base

1. 部分Android rom如小米有usb安装apk的权限，可能是关闭状态，此时需要在手机管家等设置里寻找usb安装apk的权限，将其打开。
1. Some Android roms, such as Xiaomi, have the permission to install apk via usb, which may be turned off. In this case, you need to find the permission to install apk via usb in the settings such as the phone manager, and turn it on.
2. 部分Android手机在usb安装apk时，会在手机界面上弹框，如果不能及时点弹框，会因为超时而安装失败。请注意手机屏幕的显示。
2. Some Android phones will pop up a box on the phone interface when installing apk on the usb. If the popup box cannot be clicked in time, the installation will fail due to timeout. Please pay attention to the display of the mobile phone screen.
   当HBuilder控制台提示`“安装HBuilder基座App失败，请使用手机助手手动安装xxx\android_base.apk。”`时，基本都属于这种情况。
   When the HBuilder console prompts `"Failed to install the HBuilder base app, please use the mobile assistant to manually install xxx\android_base.apk."`, this is basically the case.
3. iOS版本偶发也会报错。同样需要根据提示手动安装iPhone_base.ipa。安装方式推荐itools，没有itools使用itunes也可以。
3. The iOS version occasionally reports an error. You also need to manually install iPhone_base.ipa according to the prompts. The installation method recommends itools, you can use itunes without itools.
安装完毕后，会在手机上有一个HBuilder的应用。
After installation, there will be an HBuilder application on the phone.
以后再点真机运行，就可以把项目部署到手机上，然后手动点击HBuilder应用，就能看到项目的结果。
After you click the real machine to run, you can deploy the project to the mobile phone, and then manually click the HBuilder application to see the results of the project.

#### Q3: HBuilder控制台不输出日志问题的解决办法
#### Q3: The solution to the problem that the HBuilder console does not output logs

参考[http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)
Reference [http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)

#### Q4: Android手机真机运行提示应用安装成功，但是其实手机上并没有HBuilder应用
#### Q4: When the Android phone runs on the real machine, it prompts that the app is installed successfully, but there is no HBuilder app on the phone.

1. 确认USB调试模式是否打开。如果未打开，请打开USB调试模式重新运行真机调试。
1. Make sure that the USB debugging mode is turned on. If it is not turned on, please turn on the USB debugging mode and run the real machine debugging again.
2. 如果HBuilder已经检测到手机，可能存在与手机助手冲突的情况，请关闭所有的手机助手重新运行真机调试。
2. If HBuilder has detected the mobile phone, there may be a conflict with the mobile assistant, please close all mobile assistants and re-run the real device debugging.
3. 利用手机助手手动安装android_base.apk到手机上，然后重新运行真机调试。
3. Use the mobile assistant to manually install android_base.apk to the mobile phone, and then re-run the real device debugging.

#### Q5: Android真机联调报文件操作Permission denied
#### Q5: Permission denied for Android real machine joint debugging report file operation

请尝试以下方法解决：
Please try the following solutions:
1. 拔出数据线
1. Unplug the data cable
2. 重新`打开USB调试模式`
2. Re-`turn on USB debugging mode`
3. 重新插上数据线，此时手机上可能需要授权确认，点击确认
3. Re-plug the data cable. At this time, authorization confirmation may be required on the mobile phone. Click OK.
4. 重新运行真机调试看看是否还有问题
4. Re-run the real machine debugging to see if there is any problem
5. 重启手机，再重新运行真机调试，看看问题是否解决
5. Restart the phone, and then re-run the real machine debugging to see if the problem is solved
6. 如果还有问题，重新启动HBuilder，重复1-4步骤，再重新运行真机调试，看看问题是否解决
6. If there is still a problem, restart HBuilder, repeat steps 1-4, and then re-run the real machine debugging to see if the problem is solved
7. 如果问题仍然没有解决，则重新安装手机驱动：
7. If the problem is still not resolved, reinstall the phone driver:
   1）我的电脑---右键--属性--硬件---设备管理器--删除USB驱动
   1) My Computer---Right Click---Properties---Hardware---Device Manager---Delete USB Driver
   2）打开手机助手重新安装驱动; 此时手机上可能需要授权确认，点击确认，然后再重新运行真机调试
   2) Open the mobile phone assistant and reinstall the driver; at this time, authorization confirmation may be required on the mobile phone, click confirm, and then re-run the real machine debugging
8. 如果以上方案均无法解决，则有可能是手机root的时候，把sdcard目录的权限搞错了，导致无法真机运行，此时可以恢复出厂设置，或者重新root，或者刷机解决此问题
8. If none of the above solutions can be solved, it may be that when the phone is rooted, the permissions of the sdcard directory are wrong, resulting in the inability to run on the real machine. At this time, you can restore the factory settings, or re-root, or brush the machine to solve this problem.

#### Q6: Android真机联调报：open '/dev/hwlog_switch' fail -1, 13. Permission denied
#### Q6: Android real machine joint debugging report: open '/dev/hwlog_switch' fail -1, 13. Permission denied

请尝试以下方法解决：
Please try the following solutions:

1. 参考 [http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)
1. Reference [http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)
2. 拔插数据线重试
2. Unplug the data cable and try again
3. 重新打开USB调试模式重试
3. Re-open the USB debugging mode and try again
4. 重启手机重试
4. Restart the phone and try again
5. 重新启动HBuilder重试
5. Restart HBuilder and try again
6. 如果以上方案均无法解决，则有可能是手机root的时候，把sdcard目录的权限搞错了，导致无法真机运行，此时可以恢复出厂设置，或者重新root，或者刷机解决此问题
6. If none of the above solutions can be solved, it may be that when the phone is rooted, the permissions of the sdcard directory are wrong, resulting in the inability to run on the real machine. At this time, you can restore the factory settings, or re-root, or brush the machine to solve this problem.


#### Q7: 为什么Android手机没有SDCard就不能真机调试？
#### Q7: Why can't the real device debug the Android phone without SDCard?

Android没有root的手机只有SDCard才有权限。不过此SDCard并不是非得外插一张实体sd卡，是手机里一个叫SDCard的根目录。
Android phones without root only have access to SDCard. However, this SDCard does not have to be inserted into a physical SD card, it is a root directory called SDCard in the mobile phone.
如果是使用Android模拟器，在模拟器里可以配置SDCard是否存在及大小。
If you are using an Android emulator, you can configure the existence and size of the SDCard in the emulator.
此情况已过期，目前正常手机都有SDCard目录。
This situation has expired, and normal mobile phones currently have SDCard directories.

#### Q8: 控制台显示手机应用已启动，但手机屏幕上没有出现？
#### Q8: The console shows that the mobile application has been launched, but it does not appear on the mobile screen?

Android手机第一次安装基座应用时，手机端大多有各种杀毒软件要检测一会才会放行，需要等一会。
When the base application is installed on an Android phone for the first time, most of the antivirus software on the mobile phone needs to be detected for a while before it is released, and it needs to wait for a while.

#### Q9: 5+App运行后手机端一直在启动画面停留，不停转圈不能进入
#### Q9: After the 5+App is running, the mobile terminal stays on the startup screen and cannot enter

这是应用的js代码的问题，启动画面的关闭是可配置的。参考 [http://ask.dcloud.net.cn/article/110](http://ask.dcloud.net.cn/article/110)
This is a problem with the js code of the app, the closing of the splash screen is configurable. Reference [http://ask.dcloud.net.cn/article/110](http://ask.dcloud.net.cn/article/110)


#### Q10: 为什么我电脑没有插iphone，但HBuilder检测到iOS设备？
#### Q10: Why is my iphone not plugged into my computer, but HBuilder detects an iOS device?

iTunes支持wifi同步，如果iOS设备启动了wifi同步，电脑端的iTunes就可以检测到，进而HBuilder也可以检测到。
iTunes supports wifi synchronization. If the iOS device starts wifi synchronization, iTunes on the computer can detect it, and then HBuilder can also detect it.

#### Q11: 真机运行成功启动，但手机端软件启动后显示的不是正在运行的项目。
#### Q11: The real machine is successfully started, but the software displayed on the mobile phone is not the running project after it is started.

这种情况是adb连接手机成功，但copy项目文件到手机上失败了。重新运行真机调试。
In this case, the adb connection to the mobile phone is successful, but the copying of the project file to the mobile phone fails. Rerun the real machine debugging.
或者检查待运行工程的目录名文件名是不是有特殊符号或超长导致Android不识别。
Or check whether the directory name and file name of the project to be run have special symbols or are too long to cause Android to not recognize them.

#### Q12: 真机运行启动后显示HBuilder真机运行（log）界面 {#synchronous}
#### Q12: After the real machine is started, the HBuilder real machine operation (log) interface is displayed {#synchronous}

1. 重新运行真机调试尝试解决问题
1. Re-run real device debugging to try to solve the problem
2. Android设备可能存在与手机助手冲突的情况，请关闭所有的手机助手重新运行真机调试
2. The Android device may conflict with the mobile assistant, please close all mobile assistants and re-run the real device to debug
3. 如果步骤2无法解决，请更换别的手机助手，重新运行真机调试尝试解决问题
3. If step 2 cannot solve the problem, please change to another mobile assistant, and re-run the real device debugging to try to solve the problem.
4. 确认手机上HBuilder应用安装位置，如果手机上有外置sdcard，不要把HBuilder基座App安装在外置sdcard上，如果是安装在外置sdcard上，卸载外置sdcard上的HBuilder基座App，并在设置中将应用的默认安装位置不要设置为外置的sdcard上，或者将应用转移至手机内存或内置sdcard上，并重新运行真机调试
4. Confirm the installation location of the HBuilder application on the mobile phone. If there is an external sdcard on the mobile phone, do not install the HBuilder base app on the external sdcard. If it is installed on the external sdcard, uninstall the HBuilder base app on the external sdcard, and Do not set the default installation location of the application to the external sdcard in the settings, or transfer the application to the phone memory or built-in sdcard, and re-run the real machine debugging

#### Q13: 使用genymotion模拟器真机运行，安装apk时报INSTALL_FAILED_CPU_ABI_INCOMPATIBLE
#### Q13: Use genymotion emulator to run on real machine, install apk and report INSTALL_FAILED_CPU_ABI_INCOMPATIBLE

参见[genymotion模拟器报INSTALL_FAILED_CPU_ABI_INCOMPATIBLE的解决办法](http://blog.csdn.net/wjr2012/article/details/16359113)
See [The solution to the genymotion simulator report INSTALL_FAILED_CPU_ABI_INCOMPATIBLE](http://blog.csdn.net/wjr2012/article/details/16359113)
其他模拟器的适配在论坛中搜索即可。
The adaptation of other simulators can be searched in the forum.

#### Q14: 如何通过wifi真机运行，不插数据线？
#### Q14: How to run the real machine through wifi without plugging in the data cable?

参考[http://ask.dcloud.net.cn/article/565](http://ask.dcloud.net.cn/article/565)
Refer to [http://ask.dcloud.net.cn/article/565](http://ask.dcloud.net.cn/article/565)

## 6. HBuilderX Node真机运行常见问题@node
## 6. HBuilderX Node real machine running FAQ @node

HBuilderX 3.5.3之后的版本，App真机运行 使用Node运行，不再依赖Java。
For versions after HBuilderX 3.5.3, the App runs on the real machine using Node and no longer depends on Java.

> 如果您在HBuilderX 3.5.3及之前的版本，运行项目到手机正常。HBuilderX 3.5.3之后的版本不正常，有可能是bug，请联系我们。
> If you are on HBuilderX 3.5.3 and earlier versions, run the project to the phone normally. Versions after HBuilderX 3.5.3 are abnormal, it may be a bug, please contact us.

### 6.1 同步资源失败，未得到同步资源的授权，请停止运行后重新运行，并注意手机上的授权提示@failed-to-sync-resource

[](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/app_sync_resource_fail.jpeg)

**如果您遇到以下错误，请先查看基座类型：**
**If you encounter the following errors, please check the dock type first:**

- 标准基座
- standard base
- HBuilderX 云打包自定义基座
- HBuilderX cloud packaging custom base
- 离线SDK Android Studio制作的自定义基座
- Custom dock made by offline SDK Android Studio

> 如果以下解决方法，没有解决问题，请到 [Ask论坛](https://ask.dcloud.net.cn/)详细说明问题（需要包含操作系统、HBuilderX版本、项目信息、基座信息、手机信息、控制台截图等，详细的信息有助于我们排查问题）
> If the following solutions do not solve the problem, please go to [Ask Forum](https://ask.dcloud.net.cn/) to explain the problem in detail (need to include operating system, HBuilderX version, project information, base information, mobile phone information, console screenshots, etc. Detailed information will help us troubleshoot the problem)

**尝试以下解决方法**
**Try the following workarounds**

- Android手机上，找到应用App，删除，重新运行。
- On the Android phone, find the app, delete it, and run it again.
- 关闭开发者模式，usb调试，重新打开试试。手机USB设置，各个选项尝试一下
- Turn off developer mode, usb debugging, and try again. Phone USB settings, try each option
- 如果是`离线SDK Android Studio制作的自定义基座`, 检查下是否缺少`implementation 'com.squareup.okhttp3:okhttp:3.12.12'`, `implementation 'com.squareup.okio:okio:1.15.0'`, 如果缺少请添加它们。
- If it is a custom base made by `offline SDK Android Studio`, check whether `implementation 'com.squareup.okhttp3:okhttp:3.12.12'`, `implementation 'com.squareup.okio:okio:1.15' are missing. 0'`, add them if missing.
- 如果是`离线SDK Android Studio制作的自定义基座`, 可以尝试使用HBuilderX 云打包自定义基座，看下是否正常。
- If it is a `custom base made by offline SDK Android Studio`, you can try to use HBuilderX cloud to package the custom base to see if it is normal.
- 手机系统分身的原因。[具体详情参考](https://ask.dcloud.net.cn/question/161130)
- The reason why the mobile phone system is duplicated. [Refer to specific details](https://ask.dcloud.net.cn/question/161130)
- 如果手机是华为鸿蒙系统，排查下是否是手机自身的原因，换个其它品牌手机试试，如小米、oppo。
- 更多参考下这个帖子 [详情](https://ask.dcloud.net.cn/question/154229)

### 6.2 连接mumu模拟器，一直卡在正在建立手机连接@mumu

**遇到mumu模拟器问题，请尝试以下解决方法**

- 首先，请确定运行基座是标准基座？还是自定义基座？如果标准基座异常，请使用自定义基座。如果自定义基座异常，标准基座正常，请重新制作自定义基座。
- 升级mumu模拟器试试。mumu模拟器android版本是6.0, 已经很老了。建议使用mumuX模拟器或其他模拟器。
- 建议使用Android Studio创建的模拟器，Android Studio可以创建各个版本的模拟器，[下载Android Studio](https://developer.android.google.cn/studio/)。或使用其它模拟器，如夜神模拟器。
- 运行到Android真机是否正常？如果真机正常，请使用Android真机进行测试。
- 重试上面的方法后，如果还无法解决，建议到论坛发帖，发帖时，请提供操作系统、HBuilderX版本、控制台错误截图、mumu模拟器信息。如果方便请在Ask帖子上附上QQ，以便我们联系您。[Ask论坛发帖](https://ask.dcloud.net.cn/explore/)

### 6.3 点击运行菜单没有反应@Clicking-the-run-menu-not-respond

某些情况下，如下图所示，点击菜单没有反应。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/app_run_menu.jpg" style="zoom: 50%;" />

- 如果替换过HBuilderX安装目录下的Node程序，请还原Node程序或重装HBuilderX。
- 如果之前`运行菜单点击响应正常`，`操作系统环境变量`更改Node变量后出错，请清除操作系统环境变量中配置的Node变量。
- 如果修改过`HBuilderX/plugins/launcher`下代码，请点击HBuilderX菜单【工具】【插件安装】，卸载重装App真机运行插件。
- HBuilderX菜单【帮助】【查看运行日志】，看下日志中相关错误，根据错误进行解决。