# 真机运行常见问题@run
<!--
keyword: 真机运行常见故障排查指南,无法连接Android手机,无法连接ios手机,检测不到手机,连接手机,连接真机,iTunes,adb,真机运行
-->

> 关于真机运行，iOS: 首先请确保`iTunes`可以连接iPhone;
> Android: 确定adb devices命令，可以检测到Android连接手机。

> 如果仍有问题请查阅以下问题是否与自己遇到的情况相同!

**特别注意**：
- `iOS13真机运行，需要升级至HBuilderX 2.2.5+以上版本。`
- itunes `12.10.9.3`版本，连接`ios 14+`的iphone手机，可能存在问题；请下载12.9.4.102之前的版本
- Android 11部分手机真机运行文件同步失败的问题，HBuilderX 3.1.19已解决此问题，请升级HBuilderX 到3.1.19+版本。
- HBuilderX，【设置 - 运行设置】，自定义过adb路径。如有自定义，请检查adb路径是否有效。如不确定，请清除。然后重启HBuilderX.
- 如果是华为荣耀Magic UI系列手机，检测不到手机，请参考 [华为荣耀Magic UI系列手机ADB连接手机方法](https://ask.dcloud.net.cn/article/40005)

出现问题手机分析清楚问题在哪个环节。
从在HBuilder/HBuilderX菜单里点真机运行，程序会执行如下几个步骤：

1. 手机硬件通过usb线连接到HBuilder所在电脑，此时可能因为`手机驱动`、usb口、数据线、手机硬件等多种问题造成连接失败。
2. HBuilderX通过adb或itunes服务检测手机。此时可能因为手机渠道、usb连接设置、adb设置或adb冲突、itunes设置造成检测不到。
3. HBuilderX安装调试基座到手机。此时可能因为手机禁止usb安装、Android手机没有sd卡、iOS手机没有信任证书而安装失败。
4. HBuilderX将ide中的代码同步到手机上并启动调试基座。这一步一般不会出问题。


下面把各种常见FAQ列出，大家可按图索骥。

## 1. 没有运行到手机的菜单@noMenu

> 真机运行只能运行App项目，选中App项目或将焦点放在将要运行的App项目的文件上

HBuilderX支持web项目和app项目，项目前面是有图标的，W表示web项目，A表示App项目。其中只有`App项目可以运行`。

HBuilderX支持项目类型较多，只有`uni-app`、`5+app`、`wap2app`可以真机运行。他们都会在项目根目录下有个`manifest.json`文件（uni-cli项目会在src目录下有manifest.json）。

## 2. 检查手机设置@check

特别注意：Windows连接Android手机，一定要确保电脑已安装相应的手机驱动。

1. 确保数据线或USB口正常，可替换不同的线或口来验证。
2. 确认Android手机设置中`USB调试`模式已开启。这个设置一般在【设置】【开发者选项】里。有的手机在插上数据线后在push通知栏里也可以设置。注意不能设置为u盘模式，如果是充电模式则必须同时设置充电时`允许usb调试`。
3. 如手机屏幕弹出需信任本计算机的询问，请`同意该授权`。并且最好是把始终同意该设备调试勾上。如不小心拒绝，需要重插手机或重启电脑。
4. Android5.0及以上系统，不要使用访客模式。这种模式下无法成功运行。
5. 部分手机如小米，有usb安装应用的权限设置，需在手机上允许通过usb安装应用。不同rom的界面不一样，请自行百度你的手机打开usb安装应用的方式。
6. 如果是华为荣耀Magic UI系列手机，请参考 [华为荣耀Magic UI系列手机ADB连接手机方法](https://ask.dcloud.net.cn/article/40005)

## 3. Mac 连接手机/模拟器说明@macosx

### 3.1 Mac: iOS真机@mac-iphone

1. 确认手机已通过数据线连接电脑
2. 确认Mac电脑能正常连接手机
3. 如手机屏幕弹出需信任本计算机的询问，请同意该授权

### 3.2 Mac: iOS模拟器@mac-iOS-Simulator

1. Xcode必须安装在应用程序（Application）中
2. 首先确认Xcode（版本必须是6.0及以上版本）已安装并能正常启动模拟器
3. 如果仍然无法检测到，则打开Xcode，然后打开Xcode的 `Preferences --> Locations`，设置该界面中的 `Command Line Tools` 项，选择正确的`Xcode`版本即可

![](https://web-assets.dcloud.net.cn/unidoc/zh/xcode_ios_simulator.png)


### 3.2 Mac: 连接Android手机@mac-android

- 特别注意：HBuilderX菜单【设置 - 运行设置】，如果自定义过adb路径，请检查adb路径是否有效，注意必须是有效的adb（通常程序名都是adb)。如不确定，清除掉试试。然后重启HBuilderX。
- 如果是检测不到mumu等Android模拟器，HBuilderX菜单【设置 - 运行设置】,请检查配置的端口号。
- 关闭HBuilderX，打开任务管理器，看下是否存在adb进程，如存在，请杀死所有adb进程。

1. 重启电脑重试，重启电脑通常能解决90%的问题。 
2. 如重启HBuilderX仍然不行，请使用命令行(终端.app)，切换到HBuilderX自带的adb目录。
3. HBuilderX正式版的adb目录位置：tools/adbs目录（MAC下为HBuilderX.app/Contents/tools/adbs目录）；HBuilderX Alpha版的adb目录位置：plugins/launcher/tools/adbs目录（MAC下为`/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs`目录）
4. 在adbs目录下运行`./adb kill-server`重试。

**修改adb_usb.ini**
1. 关于本机(指Mac系统的关于本机，非手机) --> 系统报告 -> usb  -> 你所连接的device --> 厂商ID或者供应商ID(Vendor ID)
2. 在终端执行如下命令：echo xxxxxx >> ~/.android/adb_usb.ini （“xxxxxx”为厂商ID或者供应商ID(Vendor ID)，有些系统下echo命令并不能正确写入文件，可在~/.android/目录下修改或新建adb_usb.ini添加xxxxxx），重启HBuilderX。

> 如果上面的方法还无法解决，菜单【帮助】【查看运行日志】，看下日志中存在什么相关的错误。
> 也可到[DCloud论坛](https://ask.dcloud.net.cn/)发帖。发帖时，详细说明操作系统信息、HBuilderX版本号、手机型号以及手机系统信息，并提供运行日志。

## 4. Windows 连接手机/模拟器说明@windows

### 4.1 Windows: 连接Android手机@windows-android

#### 4.1.1 驱动：

> 请确认已安装Android手机驱动。

如果手机连接没有任何反应或提示驱动问题，可通过以下方式解决：
  1. 安装`驱动精灵`类程序，通过它们来安装驱动
  2. 装驱动比较好的方式是使用各种手机助手，比如`360、腾讯的各种手机助手`，如果有问题，尝试升级助手的版本。

#### 4.1.2 注意事项：

- 特别注意：HBuilderX菜单【设置 - 运行设置】，如果自定义过adb路径，请检查adb路径是否有效，注意必须是有效的adb（通常windows下，程序名都是adb.exe)。如不确定，清除掉试试。然后重启HBuilderX
- 如果是检测不到夜神、mumu等Android模拟器，HBuilderX菜单【设置 - 运行设置】,请检查配置的端口号。
- 关闭HBuilderX，打开任务管理器，看下是否存在adb进程，如存在，请杀死所有adb进程。

1. 如果在启动HBuilderX后才安装驱动连接上手机，可能需要重启HBuilderX。
2. 使用`管理员权限`运行HBuilderX。
3. 关闭WebView调试模式，重启HBuilderX重试。
4. 如果其他软件可以连接手机，而HBuilderX无法检测到手机，可能是其他软件独占了Google的ADB服务通道。
5. Android的`ADB服务`已经被大量软件滥用，除了各种手机助手自带adb，其他如QQ、搜狗输入法、暴风影音、酷狗音乐、阿里旺旺等众多软件都自带`adb`。有些工具的`adb`版本低且独占手机通道，就会导致HBuilderX无法连接手机。
6. 在任务管理器中找到`adb.exe`相关进程（包括`kadb.exe`等），在任务管理中右键该进程，打开文件位置，查看该进程是什么软件启动的。
7. 禁止这些软件监听手机插入（一般在该软件的设置中）、禁止自动启动。
8. 有些软件结束adb进程后又会自动启动，所以得将`adb.exe`文件重命名一下，实在不行卸载了这些流氓软件。
9. 关闭所有手机助手及进程里各种`adb.exe`（包括`kadb.exe`等），再试。
10. 如果是华为手机，下列各种方法都尝试后还不行，请安装[华为手机助手](https://consumer.huawei.com/cn/support/content/zh-cn00731203/?ivk_sa=1024320u)
11. 如果是华为荣耀Magic UI系列手机，检测不到手机，请参考 [华为荣耀Magic UI系列手机ADB连接手机方法](https://ask.dcloud.net.cn/article/40005)

> 如果上面的方法还无法解决，菜单【帮助】【查看运行日志】，看下日志中存在什么相关的错误。
> 也可到[DCloud论坛](https://ask.dcloud.net.cn/)发帖。发帖时，详细说明操作系统信息、HBuilderX版本号、手机型号以及手机系统信息，并提供运行日志。

#### 4.1.3 其它问题

如果以上方式仍然不行，还有一种可能是手机对adb的版本有特定要求（遇到一些魅族手机有此问题），此时需要更换HBuilder的adb版本。
- HBuilder安装目录下带了多个版本的adb。
- HBuilder的adb目录位置：tools/adbs目录（MAC下为HBuilder.app/Contents/tools/adbs目录）
- HBuilderX的adb目录位置：plugins/launcher/tools/adbs目录（MAC下为`/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs`目录）
替换版本前，将默认版本的adb.exe备份下。然后把1.0.31版的adb.exe拷贝出来替换主目录下的exe。

> 当然也可下载[Android SDK](https://developer.android.google.cn/)，将其中的adb替换HBuilderX自带的adb.

#### 4.1.4 adb占用问题

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

### 4.2 Windows: 连接iOS手机@windows-ios

#### 4.2.1 iTunes下载说明@windows-download-itunes

[Windows 32位 itunes][下载地址](https://pc.qq.com/detail/9/detail_609.html)、[所有版本的itunes下载地址](https://mydown.yesky.com/pcsoft/445423/versions/)

[Windows 64位 itunes][下载地址](https://pc.qq.com/detail/3/detail_2683.html)、[所有版本的itunes下载地址](https://mydown.yesky.com/pcsoft/33491427/versions/)

- 建议从如上地址下载iTunes；如果是第一次安装完itunes，建议重新启动电脑
- itunes请勿从`微软应用商店`下载；
- 如果您的电脑是`64位`, 且HBuilderX的版本低于3.4.0，请下载`12.9.4.102`之前的iTunes.
- 如果您的电脑是`32位`，请下载`12.9.4.102`之前的iTunes.

**特别注意**：`如手机屏幕弹出需信任本计算机的询问，请同意该授权`

#### 4.2.2 疑难排查@windows-itunes-question

1. itunes安装完成后，请确认itunes可以`正常`连接手机。如果itunes都无法连接手机，请先解决itunes连接手机问题。
2. 如果以上方案都无法解决，有可能是因为本地库与iTunes带的库冲突了，一般是iTunes库目录（32位系统目录为：C:\Program Files\Common Files\Apple\Apple Application Support，64位系统目录为：C:\Program Files (x86)\Common Files\Apple\Apple Application Support）下的dll文件和系统库目录（32位系统目录为：C:\WINDOWS\system32，64位系统目录为：C:\Windows\SysWOW64）下的dll重名，可将iTunes库目录下的同名dll文件拷贝到系统库目录下，或者将系统目录下的同名dll文件重命名或删除，然后再重启HBuilder或者重试真机运行
3. 有可能是iTunes安装时依赖库丢失，尝试重装iTunes解决问题

#### 4.2.3 itunes无法检测到手机

itunes无法检测到手机，itunes弹窗提示：`iTunes 在您的电脑上检测到不兼容的蓝牙软件，可能无法正常运行`。

请禁用或更新某些蓝牙驱动。或参考[Apple 论坛解决方案](https://discussionschinese.apple.com/thread/140142495?page=2)


## 5. 其它问题@other

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

参考[http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)

#### Q4: Android手机真机运行提示应用安装成功，但是其实手机上并没有HBuilder应用

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

1. 参考 [http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)
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

这是应用的js代码的问题，启动画面的关闭是可配置的。参考 [http://ask.dcloud.net.cn/article/110](http://ask.dcloud.net.cn/article/110)


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

#### Q13: 使用genymotion模拟器真机运行，安装apk时报INSTALL_FAILED_CPU_ABI_INCOMPATIBLE

参见[genymotion模拟器报INSTALL_FAILED_CPU_ABI_INCOMPATIBLE的解决办法](http://blog.csdn.net/wjr2012/article/details/16359113)
其他模拟器的适配在论坛中搜索即可。

#### Q14: 如何通过wifi真机运行，不插数据线？

参考[http://ask.dcloud.net.cn/article/565](http://ask.dcloud.net.cn/article/565)

## 6. HBuilderX Node真机运行常见问题@node

HBuilderX 3.5.3之后的版本，App真机运行 使用Node运行，不再依赖Java。

> 如果您在HBuilderX 3.5.3及之前的版本，运行项目到手机正常。HBuilderX 3.5.3之后的版本不正常，有可能是bug，请联系我们。

### 6.1 同步资源失败，未得到同步资源的授权，请停止运行后重新运行，并注意手机上的授权提示@failed-to-sync-resource

[](https://web-assets.dcloud.net.cn/unidoc/zh/app_sync_resource_fail.jpeg)

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

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/app_run_menu.jpg" style="zoom: 50%;" />

- 如果替换过HBuilderX安装目录下的Node程序，请还原Node程序或重装HBuilderX。
- 如果之前`运行菜单点击响应正常`，`操作系统环境变量`更改Node变量后出错，请清除操作系统环境变量中配置的Node变量。
- 如果修改过`HBuilderX/plugins/launcher`下代码，请点击HBuilderX菜单【工具】【插件安装】，卸载重装App真机运行插件。
- HBuilderX菜单【帮助】【查看运行日志】，看下日志中相关错误，根据错误进行解决。