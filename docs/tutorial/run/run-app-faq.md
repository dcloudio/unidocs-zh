# 真机运行常见问题@run
<!--
keyword: 真机运行常见故障排查指南,无法连接Android手机,无法连接ios手机,检测不到手机,连接手机,连接真机,iTunes,adb,真机运行
-->

从在HBuilder/HBuilderX菜单里点真机运行，程序会执行如下几个步骤：

1. 手机硬件通过usb线连接到HBuilder所在电脑，此时可能因为`手机驱动`、usb口、数据线、手机硬件等多种问题造成连接失败。
2. HBuilderX通过adb或itunes服务检测手机。此时可能因为手机渠道、usb连接设置、adb设置或adb冲突、itunes设置造成检测不到。
3. HBuilderX安装调试基座到手机。此时可能因为手机禁止usb安装、Android手机没有sd卡、iOS手机没有信任证书而安装失败。
4. HBuilderX将ide中的代码同步到手机上并启动调试基座。这一步一般不会出问题。

可按如下步骤依次排查问题：

## 第1步 HX中没有运行到手机的菜单@noMenu

HBuilderX支持项目类型较多，只有`uni-app`、`5+app`、`wap2app`可以真机运行。它们都会在项目根目录下有个`manifest.json`文件（uni-cli项目会在src目录下有manifest.json）。

如果是web项目，不能运行到手机，只能运行到浏览器。

如果项目管理器显示项目图标的话，web项目前面的图标是W，5+app和wap2app的图标是A，uni-app的项目图标是方型U，uni-app x的项目图标是圆形U。

如果项目类型未能正确识别，可以对项目点右键 - 重新识别项目类型

## 第2步 电脑是否能检测到手机@check

OS的资源管理器，是否可以发现手机设备。如果插入usb线后电脑检测不到手机设备，那么hx也肯定检测不到。

此时遇到问题一般是：
1. 数据线不合格。有的数据线只能充电，不能发送数据。需要换线。
2. usb口电压不足或是坏口。需要换usb口，或配置一个带独立电源的usb hub。

usb和线的问题，可以通过交叉验证来排查具体的问题。

如果您使用的是模拟器，可以不关心usb口和数据线的问题。

Android11起支持无线adb，可不插线进行开发调试，插件市场有三方插件可用，[详见](https://ext.dcloud.net.cn/search?q=%E6%97%A0%E7%BA%BFadb&orderBy=Relevance&cat1=1)

老版的windows需要安装手机驱动。如果拒绝安装驱动，也无法检测到手机。安装`驱动精灵`或`360、腾讯的各种手机助手`或[华为手机助手](https://consumer.huawei.com/cn/support/content/zh-cn00731203/?ivk_sa=1024320u)可解决驱动安装问题。

如果在启动HBuilderX后才安装驱动连接上手机，可能需要重启HBuilderX。

- windows + iOS设备注意事项：
如果是windows电脑搭配iOS设备，需要安装itunes。有的电脑用iTools等三方软件也可以，但未对三方软件做系统性测试。

如果你的itunes也连不上你的iOS设备，那HBuilderX肯定也连不上。

有的电脑会停用 Apple Mobile Device Service，这是一个windows系统服务，停止后itunes也无法连接iOS设备。可以在 windows控制面板的服务中手动启动，也可以直接启动itunes，因为itunes启动后会自动启动 Apple Mobile Device Service。

Apple Mobile Device Service 服务启动后，需要重新插拔iOS设备才能检测到。

HBuilderX真机运行并不需要一直开着itunes。itunes仅用于验证手机与电脑是否可正常连接。

## 第3步 电脑与手机是否建立信任调试关系

### 3.1 Android设备信任

如果您的Android手机已开启`USB调试模式`，那么数据线连接好电脑和手机后，手机端会弹出确认框，询问是否同意该电脑调试本手机。点击同意进行授权。

如果手机未开启`USB调试模式`，那么按如下步骤开启。

Android手机的`设置`中，有一个`开发人员选项`。不同Rom的入口不一样，有的在 `系统`中，有的叫 `系统和更新` 或 `更多设置`

如果你找不到这个选项，那说明这个rom默认隐藏了该选项。此时需要上网查一下这个rom如何打开`开发人员选项`。

- 比如华为手机是在`设置`的`关于手机`里，连续点击7次`版本号`
- 小米手机是在`设置`的`我的设备`里，连续点击5次`OS版本`

连续点击打开开发人员选项后，返回到之前的`系统`或`系统和更新`或`更多设置`中找`开发人员选项`。

找到`开发人员选项`后，往下翻，有几个设置项：
- USB 调试：打开
- “仅充电”模式下允许ADB调试：打开
- ADB安装应用：允许。这个项目有点rom叫监控ADB安装应用，如果是这个概念，则需要选关闭监控。不然运行基座安装不到手机上。

以上设置完成后，如果数据线和电脑连接正常，那么手机端会弹出一个确认框：**是否允许该电脑调试本手机**。点击同意。并且最好是把始终同意该设备调试勾上。

如不小心拒绝，需要重插手机或重启电脑。

如未弹出询问框，可以拔线重插。

注意，Android5.0及以上系统，不要使用访客模式。这种模式下无法成功运行。

由于Android的开源性，不少国产Android rom的魔改造成兼容性问题：

- 部分手机如小米，还有usb安装应用的独立权限，需在手机上允许通过usb安装应用。不同rom的界面不一样，请自行搜索你的手机打开usb安装应用的方式。
- 如果是荣耀Magic UI系列手机，请参考 [华为荣耀Magic UI系列手机ADB连接手机方法](https://ask.dcloud.net.cn/article/40005)

### 3.2 iOS设备信任

iOS设备比较简单，数据线连接好电脑和手机后，手机端会弹出确认框，询问是否同意该电脑调试本手机。点击同意进行授权。

特别注意：Windows连接Android手机，一定要确保电脑已安装相应的手机驱动。

## 第4步 HBuilderX检测手机

在前述工作完成后，终于到了HBuilderX的环节了。

### 4.1 检测Android手机

HBuilderX自带一个ADB，用于调试Android手机。在HBuilderX的安装目录的`\plugins\launcher-tools\tools\adbs\adb.exe`

您也可以在HBuilderX的设置-运行设置中，选择其他的adb和端口。有些三方模拟器必须使用它自定义的端口才能连接。这需要查阅三方模拟器提供商的官方说明。

但如果您自定义了adb和端口，可能只能连接指定的模拟器。连接其他真机时可能无法识别，此时需要清空自定义设置。

当HBuilderX检测手机时，系统进程中会出现adb.exe。如果系统进程出现多个adb.exe，也可能还有其他名字，比如tadb.exe、kadb.exe，请把HBuilderX关闭，然后把进程里的相关adb进程都强制杀掉。

如果您在HBuilderX的运行界面检测不到手机，可以在cmd窗口里找到HBuilderX的安装目录的 \plugins\launcher-tools\tools\adbs\adb.exe，执行命令：`adb.exe devices`

这个命令就是google官方的检测手机的命令，如果这个命令拉出的device列表是空的，那么如下可能：
1. 前述步骤中有的未完成
2. 需使用管理员模式运行HBuilderX
3. 某些杀毒软件限制了HBuilderX的行为。此时需要在杀毒软件中给HBuilderX设置白名单。
4. HBuilderX版本太老，需要升级
5. HBuilderX的adb被其他adb抢占了。排查抢占问题的方式。[见下](#zhanyong)
6. HBuilderX的adb版本与手机要求不匹配。需更换adb版本。[见下](#adbver)

有时mac上不得不**修改adb_usb.ini**
1. 关于本机(指Mac系统的关于本机，非手机) --> 系统报告 -> usb  -> 你所连接的device --> 厂商ID或者供应商ID(Vendor ID)
2. 在终端执行如下命令：echo xxxxxx >> ~/.android/adb_usb.ini （“xxxxxx”为厂商ID或者供应商ID(Vendor ID)，有些系统下echo命令并不能正确写入文件，可在~/.android/目录下修改或新建adb_usb.ini添加xxxxxx），重启HBuilderX。

- Android 11部分手机真机运行文件同步失败的问题，请升级HBuilderX 到3.1.19+版本。

#### 4.1.2 adb占用问题@zhanyong

Android的`ADB服务`已经被大量软件滥用，除了各种手机助手自带adb，其他如QQ、搜狗输入法、暴风影音、酷狗音乐、阿里旺旺等众多软件都自带`adb`。

有些工具的`adb`版本低且独占手机通道，就会导致HBuilderX无法连接手机。
- 在任务管理器中找到`adb.exe`相关进程（包括`kadb.exe`等），在任务管理中右键该进程，打开文件位置，查看该进程是什么软件启动的。
- 禁止这些软件监听手机插入（一般在该软件的设置中）、禁止自动启动。
- 有些软件结束adb进程后又会自动启动，所以得将`adb.exe`文件重命名一下，实在不行卸载了这些流氓软件。
- 关闭所有手机助手及进程里各种`adb.exe`（包括`kadb.exe`等），再试。

如果你找不到被谁占用，则还可以使用如下方式检测，寻找幕后黑手：
1. 打开命令行窗口
2. 确认adb的启动进程：
  寻找端口是`5037`的`tcp连接`，在命令行中输入：`netstat -ano | findstr 5037`

  在输出结果中找到类似下面的一行：
  TCP    127.0.0.1:5037         0.0.0.0:0              **LISTENING**       **5816**
  *如果内容为空，可能是没有程序在占用adb端口。*

  或者使用 netstat -ano | findstr 5037>d:/1.txt 输出到文件中查找。
	
  根据查询结果确认端口为5037的连接被那个进程占用，结果中显示的“5816”表示占用adb端口的进程PID。

3. 根据进程的PID可以找到具体进程。

  在命令行中输入：`tasklist | findstr 5816`
  在输出结果中找到类似下面的一行：
  ```shell
  adb.exe                     5816 Console                 0      4,440 K
  ```
  adb.exe（名称一般不是adb.exe，以adb.exe举例）为启动的adb进程。
	
  或者手工在任务管理器中定位这个进程，打开任务管理器后，进入进程选项卡，如果列表里有PID，直接找；如果列表里没有PID，点菜单查看-选择列，勾上PID。

#### 4.1.2 ADB版本问题@adbver

如果以上方式仍然不行，还有一种可能是手机对adb的版本有特定要求（遇到一些魅族手机有此问题），此时需要更换HBuilder的adb版本。

HBuilder安装目录下带了多个版本的adb。

替换版本前，将默认版本的adb.exe备份下。然后把其他版的adb.exe拷贝出来替换主目录下的exe。

> 当然也可下载[Android SDK](https://developer.android.google.cn/)，将其中的adb替换HBuilderX自带的adb。

> 如果上面的方法还无法解决，菜单【帮助】【查看运行日志】，看下日志中存在什么相关的错误。
> 也可到[DCloud论坛](https://ask.dcloud.net.cn/)发帖。发帖时，详细说明操作系统信息、HBuilderX版本号、手机型号以及手机系统信息，并提供运行日志。


### 4.2 检测iOS手机

iOS设备连接比较简单，电脑安装itunes（或iTools），只要这些软件能连上iOS设备，HBuilderX就能连上。

#### 4.2.1 windows上iTunes注意事项@windows-download-itunes

[Windows 32位 iTunes][下载地址](https://pc.qq.com/detail/9/detail_609.html)、[所有版本的iTunes下载地址](https://mydown.yesky.com/pcsoft/445423/versions/)

[Windows 64位 iTunes][下载地址](https://pc.qq.com/detail/3/detail_2683.html)、[所有版本的iTunes下载地址](https://mydown.yesky.com/pcsoft/33491427/versions/)

- windows上iTunes请勿从`微软应用商店`下载；建议从如上地址下载iTunes；如果是第一次安装完iTunes，建议重新启动电脑
- 如果您的电脑是`64位`, 且HBuilderX的版本低于3.4.0，请下载`12.9.4.102`之前的iTunes
- 如果您的电脑是`32位`，请下载`12.9.4.102`之前的iTunes
- 不要用太老的iTunes版本，但有时iTunes最新版确实会有bug，如果不幸遇到，可以卸载干净后安装次新版

如果以上方案都无法解决，有可能是因为本地库与iTunes带的库冲突了，
一般是iTunes库目录（32位系统目录为：C:\Program Files\Common Files\Apple\Apple Application Support，64位系统目录为：C:\Program Files (x86)\Common Files\Apple\Apple Application Support）下的dll文件
和系统库目录（32位系统目录为：C:\WINDOWS\system32，64位系统目录为：C:\Windows\SysWOW64）下的dll重名，
可将iTunes库目录下的同名dll文件拷贝到系统库目录下，或者将系统目录下的同名dll文件重命名或删除，然后再重启HBuilder或者重试真机运行。

有时iTunes安装时依赖库会丢失，需要重装iTunes解决问题。

#### 4.2.2 iTunes无法检测到手机

iTunes无法检测到手机，iTunes弹窗提示：`iTunes 在您的电脑上检测到不兼容的蓝牙软件，可能无法正常运行`。

请禁用或更新某些蓝牙驱动。或参考[Apple 论坛解决方案](https://discussionschinese.apple.com/thread/140142495?page=2)

#### 4.2.3 Mac上连接iOS模拟器@mac-iOS-Simulator

1. Xcode必须安装在应用程序（Application）中
2. 首先确认Xcode（版本必须是6.0及以上版本）已安装并能正常启动模拟器
3. 如果仍然无法检测到，则打开Xcode，然后打开Xcode的 `Preferences --> Locations`，设置该界面中的 `Command Line Tools` 项，选择正确的`Xcode`版本即可

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/xcode_ios_simulator.png)

## 第5步 运行启动
HBuilderX的运行界面检测到手机后，可以点击运行。此后会继续进行：编译、安装基座到手机、同步应用代码和资源到基座、启动基座并运行应用。这些步骤仍然可能出错。
1. 编译
编译报错一般有错误提示，指示说明哪行代码有问题，导致编译报错。\n
如果编译报错没有回到代码，而是编译器内部报错了（报错文件指向uni-app cli目录或HBuilderX的插件目录），那么首先检查下是不是升级时编译器插件升级的有问题，可以在菜单工具-插件安装中卸载uni-app编译器插件，重新运行后会自动重现安装插件。如果编译器没有问题，可以在论坛或issues系统给报bug，提供复现项目。
2. 安装基座到手机
部分手机如小米，在通过adb安装基座时，会在手机端弹出一个带倒计时的询问框，**如果没有及时在手机端点同意安装，这个询问框会自动消失并视为拒绝安装**。这点很坑。所以必须注意及时观察手机屏幕的询问框，在倒计时结束前点同意。
3. 同步应用代码和资源到基座
基座是不包含开发者的代码的。基座被安装到手机后，下一步是同步开发者的代码和资源到手机端。\n
Android上是HBuilderX通过adb启动基座，然后基座与HBuilderX建立socket连接，通过socket把代码和资源同步到手机端。\n
如果基座没有自动启动，就需要手动在手机端点基座App启动。\n
如果HBuilderX在电脑端被防火墙拦截，不能与手机建立socket连接，也会导致无法同步资源。\n
注意有的情况HBuilderX报错资源同步失败，其实是手机基座安装、启动失败了，手机端没有回传正确的错误给HBuilderX。比如上一步中，小米手机上没有及时点同意安装基座的倒计时确认框。
4. 启动基座并运行应用
应用代码和资源同步到手机后，会自动启动基座并运行应用。以下情况无法自动启动，需要手动在手机端点基座App。
- window电脑无法自动启动iOS的应用
- 手机息屏

## 其它问题@other

#### Q1: 能检测到手机，但处于置灰状态无法点击

发生此情况一般为检测到手机后，中间因为其他软件连接断开了，需要重新插拔手机或重启HBuilderX。

#### Q2: 能检测到手机，但点HBuilder的真机运行，安装调试基座失败

1. 部分Android rom如小米有usb安装apk的权限，可能是关闭状态，此时需要在手机管家等设置里寻找usb安装apk的权限，将其打开。
2. 部分Android手机在usb安装apk时，会在手机界面上弹框，如果不能及时点弹框，会因为超时而安装失败。请注意手机屏幕的显示。
   当HBuilder控制台提示`“安装HBuilder基座App失败，请使用手机助手手动安装xxx\android_base.apk。”`时，基本都属于这种情况。
3. iOS版本偶发也会报错。同样需要根据提示手动安装iPhone_base.ipa。安装方式推荐itools，没有itools使用itunes也可以。
安装完毕后，会在手机上有一个HBuilder的应用。
以后再点真机运行，就可以把项目部署到手机上，然后手动点击HBuilder应用，就能看到项目的结果。

#### Q3: HBuilder控制台不输出日志问题的解决办法

参考[https://ask.dcloud.net.cn/article/1336](https://ask.dcloud.net.cn/article/1336)

#### Q4: Android手机真机运行提示应用安装成功，但是其实手机上并没有HBuilder或uni-app x基座应用

1. 确认USB调试模式是否打开。如果未打开，请打开USB调试模式重新运行真机调试。
2. 如果HBuilder已经检测到手机，可能存在与手机助手冲突的情况，请关闭所有的手机助手重新运行真机调试。
3. 利用手机助手手动安装android_base.apk到手机上，然后重新运行真机调试。

#### Q5: Android真机联调报文件操作Permission denied

请尝试以下方法解决：
1. 拔出数据线
2. 重新`打开USB调试模式`
3. 重新插上数据线，此时手机上可能需要授权确认，点击确认
4. 重新运行真机调试看看是否还有问题
5. 重启手机，再重新运行真机调试，看看问题是否解决
6. 如果还有问题，重新启动HBuilder，重复1-4步骤，再重新运行真机调试，看看问题是否解决
7. 如果问题仍然没有解决，则重新安装手机驱动：
   1）我的电脑---右键--属性--硬件---设备管理器--删除USB驱动
   2）打开手机助手重新安装驱动; 此时手机上可能需要授权确认，点击确认，然后再重新运行真机调试
8. 如果以上方案均无法解决，则有可能是手机root的时候，把sdcard目录的权限搞错了，导致无法真机运行，此时可以恢复出厂设置，或者重新root，或者刷机解决此问题

#### Q6: Android真机联调报：open '/dev/hwlog_switch' fail -1, 13. Permission denied

请尝试以下方法解决：

1. 参考 [https://ask.dcloud.net.cn/article/1336](https://ask.dcloud.net.cn/article/1336)
2. 拔插数据线重试
3. 重新打开USB调试模式重试
4. 重启手机重试
5. 重新启动HBuilder重试
6. 如果以上方案均无法解决，则有可能是手机root的时候，把sdcard目录的权限搞错了，导致无法真机运行，此时可以恢复出厂设置，或者重新root，或者刷机解决此问题


#### Q7: 为什么Android手机没有SDCard就不能真机调试？

Android没有root的手机只有SDCard才有权限。不过此SDCard并不是非得外插一张实体sd卡，是手机里一个叫SDCard的根目录。
如果是使用Android模拟器，在模拟器里可以配置SDCard是否存在及大小。

此情况已过期，目前正常手机都有SDCard目录。

#### Q8: 控制台显示手机应用已启动，但手机屏幕上没有出现？

Android手机第一次安装基座应用时，手机端大多有各种杀毒软件要检测一会才会放行，需要等一会。

#### Q9: 5+App运行后手机端一直在启动画面停留，不停转圈不能进入

这是应用的js代码的问题，启动画面的关闭是可配置的。参考 [https://ask.dcloud.net.cn/article/110](https://ask.dcloud.net.cn/article/110)


#### Q10: 为什么我电脑没有插iphone，但HBuilder检测到iOS设备？

iTunes支持wifi同步，如果iOS设备启动了wifi同步，电脑端的iTunes就可以检测到，进而HBuilder也可以检测到。

#### Q11: 真机运行成功启动，但手机端软件启动后显示的不是正在运行的项目。

这种情况是adb连接手机成功，但copy项目文件到手机上失败了。重新运行真机调试。
或者检查待运行工程的目录名文件名是不是有特殊符号或超长导致Android不识别。

#### Q12: 真机运行启动后显示HBuilder真机运行（log）界面 {#synchronous}

1. 重新运行真机调试尝试解决问题
2. Android设备可能存在与手机助手冲突的情况，请关闭所有的手机助手重新运行真机调试
3. 如果步骤2无法解决，请更换别的手机助手，重新运行真机调试尝试解决问题
4. 确认手机上HBuilder应用安装位置，如果手机上有外置sdcard，不要把HBuilder基座App安装在外置sdcard上，如果是安装在外置sdcard上，卸载外置sdcard上的HBuilder基座App，并在设置中将应用的默认安装位置不要设置为外置的sdcard上，或者将应用转移至手机内存或内置sdcard上，并重新运行真机调试

#### Q13: 使用genymotion模拟器真机运行，安装apk时报`INSTALL_FAILED_CPU_ABI_INCOMPATIBLE`

参见[genymotion模拟器报INSTALL_FAILED_CPU_ABI_INCOMPATIBLE的解决办法](https://blog.csdn.net/wjr2012/article/details/16359113)
其他模拟器的适配在论坛中搜索即可。

#### Q14: 如何通过wifi真机运行，不插数据线？

参考[https://ask.dcloud.net.cn/article/565](https://ask.dcloud.net.cn/article/565)

## HBuilderX Node真机运行常见问题@node

HBuilderX 3.5.3之后的版本，App真机运行 使用Node运行，不再依赖Java。

### 6.1 同步资源失败，未得到同步资源的授权，请停止运行后重新运行，并注意手机上的授权提示@failed-to-sync-resource

[](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/app_sync_resource_fail.jpeg)

**如果您遇到以下错误，请先查看基座类型：**

- 标准基座
- HBuilderX 云打包自定义基座
- 离线SDK Android Studio制作的自定义基座

> 如果以下解决方法，没有解决问题，请到 [Ask论坛](https://ask.dcloud.net.cn/)详细说明问题（需要包含操作系统、HBuilderX版本、项目信息、基座信息、手机信息、控制台截图等，详细的信息有助于我们排查问题）

**尝试以下解决方法**

- Android手机上，找到应用App，删除，重新运行。
- 关闭开发者模式，usb调试，重新打开试试。手机USB设置，各个选项尝试一下
- 如果是`离线SDK Android Studio制作的自定义基座`, 检查下是否缺少`implementation 'com.squareup.okhttp3:okhttp:3.12.12'`, `implementation 'com.squareup.okio:okio:1.15.0'`, 如果缺少请添加它们。
- 如果是`离线SDK Android Studio制作的自定义基座`, 可以尝试使用HBuilderX 云打包自定义基座，看下是否正常。
- 手机系统分身的原因。[具体详情参考](https://ask.dcloud.net.cn/question/161130)
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
