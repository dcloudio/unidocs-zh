# Chrome调试H5+的Android应用

> 注意本文档仅适用于 5+App应用。uni-app调试另见[https://uniapp.dcloud.io/tutorial/run-and-debug.html](https://uniapp.dcloud.io/tutorial/run-and-debug.html)

HBuilder对前端代码的调试方式有边改边看、真机运行、webkit remote debug真机调试3种。webkit remote debug其实是google、apple官方提供的服务，本文主要介绍google的chrome下如何调试Android手机上webview里运行的网页。
*系列文章目录导航：*
- [调试方式介绍一 边改边看](http://ask.dcloud.net.cn/article/483)
- [调试方式介绍二 真机运行](http://ask.dcloud.net.cn/article/484)
- [调试方式介绍三 webkit remote debug之Chrome调试Android手机]
- [调试方式介绍四 webkit remote debug之Safari调试iOS手机](http://ask.dcloud.net.cn/article/143)

## Chrome调试Android手机之概述

调试是软件开发过程中很重要的环节，它能帮助开发者快速的定位和解决开发过程中碰到的问题。对于HTML5的开发，大家都知道Chrome的DevTools工具有强大的功能和友好的用户体验，不仅能快速方便调试JavaScript、检查HTML页面DOM结构、实时同步更新元素CSS样式，还能跟踪分析页面资源加载性能等问题。对于移动平台的开发者来说，从Android4.4开始，也可以通过Chrome的DevTools工具连接设备对于应用进行调试。

调试效果如图所示：

![Android 调试效果图](http://www.dcloud.io/docs/a/adebug/1.1.png)

**软件要求**
- Android设备或模拟器的系统版本为4.4及以上；



## 真机调试环境
如果你有Android设备，并且系统是4.4以上版本，那么可以直接使用Chrome连接进行调试。

### 检测设备版本
打开系统“设置”-> “关于”，查看Android版本：

![](http://www.dcloud.io/docs/a/adebug/3.1.png)

Android版本必需是4.4及以上，否则无法进行应用调试。请参考“模拟器调试环境”章节使用模拟器进行应用调试。

### 显示开发者选项
Android设备默认“开发者选项”是隐藏的，需要打开“设置”-> “关于”页面，多次（7次）点击“版本号”项，返回到“设置”页面可显示“开发者选项”：

![](http://www.dcloud.io/docs/a/adebug/3.2.png)

点击“开发者选项”，打开“开发者选项”设置页面。

### 开启USB调试

![](http://www.dcloud.io/docs/a/adebug/3.3.png)

### 连接PC
Android设备通过USB数据线连接到PC，如果系统无法正确识别，则需要安装驱动，通常可到设备制造商的官方网站下载安装。也可使用第三方手机助手软件安装，如“360手机助手”、“应用宝”等。

PC识别到设备后，这时可通过HBuilder的真机运行功能进行连接并安装HBuilder应用。

## 使用HBuilder调试
在HBuilder最新版里，点运行菜单，或者HBuilderX的视图菜单，点里面的“打开Webview调试模式”。
确保手机连接正常、确保启动了可调试的app，那么右侧或底部会列出可调试的页面。点击调试/inspect即可打开chrome控制台进行调试。

**注意：chrome83起调整了协议。HBuilderX2.8起适配了新协议。如果你的chrome升级到83以上版本，需更新HBuilderX到2.8+才能正常使用**


================================================
**正常情况下，开发者阅读到此结束。后续文档是Android模拟器的安装教程和不使用HBuilder调试而使用chrome调试的教程**
================================================
================================================
## 附录：Android模拟器调试环境
如果你没有Android手机，又想调试Android应用，那么你需要安装Google官方的Android模拟器。
注意三方模拟器如genymotion、海马玩、Bluestacks蓝叠等模拟器只能真机运行，不能debug调试。

下文仅介绍Google官方模拟器的安装方法。由于Google经常更新，也建议开发者随时关注网上的其他更新教程。

如果没有Android4.4及以上版本设备，可以配置Android模拟器来调试。Android模拟器一直都以运行速度慢著称，其实官方已经提供解决方案使用Intel HAXM技术来加速，使得模拟器运行速度有大幅的提升。
**硬件要求**

- CPU支持Intel VT技术（AMD CPU无法使用HAXM加速）；
- 内存推荐4G；
- Window XP/Vista/7/8（32/64-bit），推荐Windows 7/8（64-bit）。

**网络要求**
使用Google的服务，不得不付出的代价就是要准备好翻墙工具。
模拟器安装更新和调试初始化时都必须翻墙。
**无条件翻墙的同学可以尝试修改本机host的方法来访问Google相关服务，host内容参考[google-hosts](https://github.com/txthinking/google-hosts/blob/master/hosts)，注意及时更新：）**

### ADT工具
配置模拟器调试环境需要安装ADT工具，如果已经配置过android开发环境，则可跳过此章节。

**下载ADT工具**

Android模拟器开发环境需通过ADT工具进行安装，这里不需要下载完整的ADT Bundle，使用独立ADT工具即可：
- 进入官网下载Android SDK Tools

![](http://www.dcloud.io/docs/a/adebug/2.1.1.1.png)

选择windows平台下的独立ADT插件安装包。

- 同意使用条款和条件

![](http://www.dcloud.io/docs/a/adebug/2.1.1.2.png)

点击下载按钮。

- 保存安装包
目前版本为22.6.2，保存到本地为：installer_r22.6.2-windows.exe。


**安装ADT工具**
- 双击运行保存的ADT安装文件（install_r22.6.2-windows.exe），开始安装

![](http://www.dcloud.io/docs/a/adebug/2.1.2.1.png)

选择下一步“Next”。

- 配置JDK环境
如果已经安装了JDK环境，则提示确认：

![](http://www.dcloud.io/docs/a/adebug/2.1.2.2.png)

直接选择下一步“Next”。
如果没有安装过JDK，则会提示没有找到：

![](http://www.dcloud.io/docs/a/adebug/2.1.2.3.png)

需安装JDK，并设置JAVA_HOME环境变量，完成后重新运行ADT安装文件。

- 选择用户

![](http://www.dcloud.io/docs/a/adebug/2.1.2.4.png)

选择默认值，仅当前用户使用即可，选择下一步“Next”。

- 选择安装目录

![](http://www.dcloud.io/docs/a/adebug/2.1.2.5.png)

选择非系统盘目录（如“D:\AndroidSDK”），确保有足够的磁盘空间安装SDK及模拟器文件（至少需要1G的空间）。选择下一步“Next”。

- 选择开始菜单目录

![](http://www.dcloud.io/docs/a/adebug/2.1.2.6.png)

保持默认值，选择下一步“Next”。

- 解压安装

![](http://www.dcloud.io/docs/a/adebug/2.1.2.7.png)

完成后，选择下一步“Next”：

![](http://www.dcloud.io/docs/a/adebug/2.1.2.8.png)

- 完成安装

![](http://www.dcloud.io/docs/a/adebug/2.1.2.9.png)

选择立即启动SDK管理器（Android SDK Manager），选择下一步“Next”，完成ADT工具的安装。
如未立即启动，可在Android SDK根目录（如“D:\AndroidSDK”），双击运行“SDK Manager.exe”程序。


### 下载SDK和模拟器
安装ADT工具后，启动SDK管理程序对各版本编译工具、SDK、模拟器、插件进行管理，如升级、安装、卸载等。如果已经下载了SDK和模拟器，可跳过此章节。
- 更新SDK列表
启动SDK管理程序后会自动获取最新的工具、SDK、模拟器及扩展插件列表。

![](http://www.dcloud.io/docs/a/adebug/2.2.1.png)

- 列表更新完成
更新完成后，显示日志：

![](http://www.dcloud.io/docs/a/adebug/2.2.2.png)

- 选择下载项
使用Intel HAXM加速模拟器，必须选择以下项下载：

| 目录 | 项	 | 用途 |
| :-------- | :--: | :--: |
| Tools | Android SDK Platform-tools | Android平台工具，基础组件 |
| Android 4.4.2（API19） | SDK Platform | Android4.4.2 SDK，模拟器基础组件 |
| Android 4.4.2（API19） | Intel x86 Atom System Image | Inter x86平台的Android4.4.2模拟器镜像文件 |
| Extras | Intel x86 Emulator Accelerator (HAXM installer) | Inter x86平台Android模拟器硬件加速程序 |

选择好下载项后，如下图所示：

![](http://www.dcloud.io/docs/a/adebug/2.2.3.png)

选择“Intall 4 Packages...”，开始下载安装。

- 接受许可协议

![](http://www.dcloud.io/docs/a/adebug/2.2.4.png)

分别选择右侧packages列表中的项后，选中“Accept License”接受许可协议。然后点击“Install”，开始下载。

- 开始下载

![](http://www.dcloud.io/docs/a/adebug/2.2.5.png)

由于SDK和模拟器镜像文件比较大，下载时间会比较长，而且国内访问google官方网站不太稳定，经常提示下载失败：

![](http://www.dcloud.io/docs/a/adebug/2.2.6.png)

关闭提示对话框，重新下载，或者**翻墙后再尝试下载**。


### 安装Intel X86HAXM
下载Intel X86 HAXM插件后，需要到下载目录运行安装程序进行安装，目录为： “%ADT安装目录%\extras\intel\Hardware_Accelerated_Execution_Manager\”。双击运行intelhaxm.exe进行安装，目前新版本为1.0.8，如果已经安装过低版本，建议升级。

- 开始安装

![](http://www.dcloud.io/docs/a/adebug/2.3.1.png)

选择下一步“Next”。

- 配置HAXM使用最大内存

![](http://www.dcloud.io/docs/a/adebug/2.3.2.png)
安装程序会自动计算推荐值，使用默认值，选择下一步“Next”。

- 确认配置

![](http://www.dcloud.io/docs/a/adebug/2.3.3.png)
选择下一步“Next”。

- 完成安装

![](http://www.dcloud.io/docs/a/adebug/2.3.4.png)


### 创建模拟器
ADT工具带Android模拟器管理程序（Android Virtual Device Manager），可在Android SDK根目录（如“D:\AndroidSDK”），双击运行“AVD Manager.exe”程序。

![](http://www.dcloud.io/docs/a/adebug/2.4.1.png)

由于没有创建过模拟器，在列表中显示无可用模拟器，点击“New...”开始新建模拟器。

- 新建模拟器

![](http://www.dcloud.io/docs/a/adebug/2.4.2.png)

| 项 | 说明 |
| :-------- | :-------- |
| AVD Name | 模拟器名称，根据爱好输入 |
| Device | 模拟设备，根据爱好选择，建议根据显示器分辨率来选择，大显示器选择则高分比率模拟器 |
| Target | 选择“Android 4.4.2 - API Level 19” |
| CPU/ABI | 选择“Intel Atom (x86)” |
| Skin | 模拟器皮肤，根据爱好选择，推荐选择WVGA800 |
| Front Camera | 前置摄像头，用不到就选“None”，模拟摄像头就选“Emulated”，使用PC的摄像头就选“WebCam0” |
| Back Camera | 后置摄像头，与前置摄像头选择类似 |
| Memory Options | 内存大小，根据PC内存大小设置，推荐RAM：512；Heap：64 |
| Internal Storage | 内部存储器大小，根据PC系统盘空间大小设置，推荐200M |
| SD Card | SD卡存储器大小，根据PC系统盘空间大小设置，推荐200M |

**注意务必设置好SD Card，否则无法真机运行。**
设置完成后，点击“OK”。

- 确认配置

![](http://www.dcloud.io/docs/a/adebug/2.4.3.png)

- 创建完成后在模拟器列表中显示

![](http://www.dcloud.io/docs/a/adebug/2.4.4.png)

### 启动模拟器
创建完模拟器，每次启动Android模拟器管理程序都能在列表中显示：

![](http://www.dcloud.io/docs/a/adebug/2.5.1.png)

- 启动模拟器

![](http://www.dcloud.io/docs/a/adebug/2.5.2.png)
选择“Android4.4.2”模拟器，点击“Start...”启动。

- 设置启动配置信息

![](http://www.dcloud.io/docs/a/adebug/2.5.3.png)

| 项 | 说明 |
| :-------- | :-------- |
| Scale Display to real size | 是否缩放到设置的模拟器分辨率，在PC分辨率低时使用 |
| Wipe user data | 是否擦除用户数据，重置模拟器时使用 |

点击“Launch”启动。

- 等待加载模拟器

![](http://www.dcloud.io/docs/a/adebug/2.5.4.png)

PC的配置决定速度，耐心等待模拟器的启动。

- 完成启动模拟器

![](http://www.dcloud.io/docs/a/adebug/2.5.5.png)

模拟器配置完毕，这时可通过HBuilder的真机运行功能进行连接，参考后面“应用调试”章节。


## 附录：使用chrome调试webview {#chromedebug}
配置完模拟器或真机调试环境后，可通过Chrome的DevTools工具快速调试HBuilder开发的移动应用。

### 安装HBuilder应用
启动HBuilder后会自动检测连接到PC上的设备（模拟器或真机），创建“移动App”后，可通过以下方式在设备上安装HBuilder应用进行调试：
运行的快捷键是Ctrl+R。也可以通过鼠标操作（注意下图中run in device的按钮在新版中已经不存在了，只需点击手机即可）
- 通过“运行”菜单启动

![](http://www.dcloud.io/docs/a/adebug/4.1.1.png)

- 通过工具栏启动

![](http://www.dcloud.io/docs/a/adebug/4.1.2.png)
设备上安装完HBuilder应用后，会同步应用资源并自动运行。


- 模拟器

![](http://www.dcloud.io/docs/a/adebug/4.1.3.png)

- 真机

![](http://www.dcloud.io/docs/a/adebug/4.1.4.png)
应用启动后则可通过Chrome的DevTools工具连接进行调试。


### 使用Chrome调试
我们推荐开发者直接使用HBuilder的调试，详见上文。这样可以免翻墙。
如果你不使用HBuilder的调试，而要自己使用chrome调试，可以看这里的教程，注意要翻墙。
**检测Chrome版本号**
Chrome 30及以上版本才支持Android设备调试，打开Chrome的关于页面查看：

![](http://www.dcloud.io/docs/a/adebug/4.2.1.png)
要求最低Chrome30以上版本，如果版本太低则需更新版本，推荐使用最新版本。

**打开设备检查页面**
在Chrome地址栏，输入“chrome://inspect”或通过“菜单”->“工具”->“检查设备”打开设备检查页面：

![](http://www.dcloud.io/docs/a/adebug/4.2.2.png)
DevTools工具会自动检测已连接设备运行的可调试页面列表，点击对应页面的“inspect”链接打开调试页面。
如果上图界面没有显示可调试的手机，请重新根据上文提到的方法检查手机的usb调试模式或驱动安装情况。同时注意Android4.4以下的手机无法调试，注意海马玩等模拟器无法调试。
如果上图界面有手机，但没有可调试的app，可能的原因如下：
1. 手机端需要调试的HBuilder基座或其他app并没有启动或没有运行任何html页面；
2. 要调试的app拒绝了调试请求。HBuilder调试基座是默认开放调试请求的，但云打包或本地打包的app默认是关闭调试请求的。云打包是在manifest里配置是否允许调试，具体请查询[manifest配置指南](http://ask.dcloud.net.cn/article/94)，本地打包也要配置debug="true"，具体需要看本地打包配置环境。

**点击"inspect"时，如果遇到启动了一个白屏界面，说明被墙了。因为此服务需要连接google的服务器**
一般情况下，只在第一次使用"inspect"时需要翻墙，以后会缓存在本地。
开发者可以使用三方翻墙服务，但注意并不是可以访问google.com就可以使用chrome调试，有些翻墙软件支持的dns并不全。关键是要ping通chrometophone.appspot.com（此url可能随google调整服务而变化）。

还有一个简单易行的方法是修改本机host。这里提供一些host清单。[https://github.com/racaljk/hosts](https://github.com/racaljk/hosts)，注意及时更新。于2016年7月25日亲测可行，注意此host文件涉及的国外域名很多，不需要的dns解析可以删除）
注意host文件修改在window下需要管理员权限，具体方法本文不讲述请自行百度。

**页面调试**
打开调试页面后DevTools会自动加载相关资源，调试页面操作方式与普通html调试页面完全一致。
- 在Elements下查看DOM结构

![](http://www.dcloud.io/docs/a/adebug/4.2.3.png)

选中DOM元素后，在设备上会高亮显示，右侧Styles下修改CSS属性可即时生效：

![](http://www.dcloud.io/docs/a/adebug/4.2.4.png)

- 在Sources下断点调试JavaScript

![](http://www.dcloud.io/docs/a/adebug/4.2.5.png)

按F5可重新加载页面，重新开始调试。

**注意：每个Webview在chrome候选调试列表里是不同的列表，需要单独点inspect。当你inspect WebviewA时，点击了一个按钮，打开了WebviewB，此时若要调试B，需要返回chrome://inspect/#devices页面，找到WebviewB，然后点inspect。**
