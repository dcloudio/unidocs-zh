因手机差异较大，HBuilder并没有提供App的模拟器。不管uni-app或5+App/wap2app项目，都需要连接真实的手机或手机模拟器来运行测试，称之为“真机运行”。
Due to the large differences in mobile phones, HBuilder does not provide an App simulator. Regardless of uni-app or 5+App/wap2app projects, you need to connect a real mobile phone or mobile phone emulator to run the test, which is called "real machine running".

- Android平台  
- Android platform
HBuilder支持adb协议，在HBuilder运行的电脑上，可以使用usb线连接Android设备，也可以使用安装在电脑上的Android模拟器（包括google官方模拟器，三方模拟器如“雷电”、“夜神”等）  
HBuilder supports the adb protocol. On the computer that HBuilder runs, you can use the usb cable to connect to the Android device, or you can use the Android emulator installed on the computer (including the official Google emulator, and third-party emulators such as "Thunderbolt" and "Night God"). Wait)  
- iOS平台  
- iOS platform
HBuilder支持itunes协议，在HBuilder运行的电脑上，使用usb线连接iPhone或iPad；如果是mac电脑，则可以连接XCode自带的iOS模拟器。如果是arm架构cpu，还可以直接启动真机运行基座。   
HBuilder supports the itunes protocol. On the computer running HBuilder, use a usb cable to connect to iPhone or iPad; if it is a mac computer, you can connect to the iOS simulator that comes with XCode. If it is an arm architecture cpu, you can also directly start the real machine to run the base.

真机运行的目的，是为了实现代码修改的热刷新，避免打包才能看到效果。在HBuilder中编辑代码，在手机上实时看到修改效果，并且可以在HBuilder控制台看到日志。
The purpose of running the real machine is to realize the hot refresh of code modification and avoid packaging to see the effect. Edit the code in HBuilder, see the modification effect in real time on the mobile phone, and you can see the log in the HBuilder console.


## 运行入口
## Run entry
通过HBuilder顶部运行菜单、或工具栏运行按钮、或快捷键，均可激活运行入口。
The run entry can be activated through the run menu at the top of HBuilder, the run button on the toolbar, or a shortcut key.

1. HBuilder顶部运行菜单  
1. HBuilder top run menu

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/menurunapp.png" style="zoom: 50%;" />

2. 工具栏运行按钮
2. Toolbar run button

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/toolbarrunmenuapp.png" style="zoom: 50%;" />

可以按数字快速选择菜单项。比如按“4”选择“运行到Android App基座”。也可以按上下键然后回车选择。
Menu items can be quickly selected by number. For example, press "4" to select "Run to Android App Dock". You can also press the up and down keys and then enter to select.

相比于HBuilder顶部运行菜单，工具栏运行按钮下的运行菜单内容较少，只保留了最常见的运行。
Compared with the run menu at the top of HBuilder, the run menu under the run button on the toolbar has less content, and only the most common runs are reserved.

3. 快捷键【Ctrl+r】  
3. Shortcut key【Ctrl+r】

实际上激活了工具栏运行按钮。可继续搭配数字键，实现无鼠标快捷运行操作。
Actually activates the toolbar run button. You can continue to match the number keys to achieve quick operation without a mouse.



## 连接设备
## connect device

点击运行到iOS或Android设备时，会弹出选择界面，需选择要连接的手机设备或模拟器。  
When you click Run to iOS or Android device, a selection interface will pop up, and you need to select the mobile device or emulator to be connected.

可以多设备运行，每个运行设备会在HBuilder底部控制台新开一个独立窗口，互不干扰。  
It can run on multiple devices, and each running device will open a new independent window in the console at the bottom of HBuilder without interfering with each other.
但一个设备同时只能运行一个项目，不同的项目运行到相同手机只有最后一个项目生效。
But a device can only run one project at the same time, and when different projects run to the same mobile phone, only the last project takes effect.

> 连接设备过程中如果找不到手机，可以尝试点击“刷新”按钮，如果还是无法找到手机请参考[真机运行常见问题](run-app-faq.md)
> If you can't find your phone during the process of connecting the device, you can try to click the "Refresh" button. If you still can't find your phone, please refer to [Real Phone Running FAQs](run-app-faq.md)

### Android设备选择  
### Android Device Selection

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/select-android.jpeg" style="zoom: 50%;" />

**注意事项**  
**Precautions**  
- 如果电脑里安装有模拟器（Android模拟器需要先启动），HBuilder会直接检测到设备并显示在候选列表中。可以参考[如何安装模拟器](installSimulator.md)  
- If there is an emulator installed on the computer (the Android emulator needs to be started first), HBuilder will directly detect the device and display it in the candidate list. You can refer to [How to install the simulator](installSimulator.md)
- 确认Android手机设置中`USB调试`模式已开启。通常在手机的【设置】【开发者选项】里，有的手机在插上数据线后在系统通知栏里也可以设置，注意不能设置为u盘模式，如果是充电模式则必须同时设置充电时`允许usb调试`。
- Make sure the `USB debugging` mode is turned on in the Android phone settings. Usually in the [Settings] [Developer Options] of the mobile phone, some mobile phones can also be set in the system notification bar after plugging in the data cable. Note that it cannot be set to U disk mode. If it is charging mode, you must set the charging time at the same time. `Allow usb debugging`.


### iOS设备选择@ios_device
### iOS device selection @ios_device

> HBuilderX中自带的标准真机运行基座使用DCloud向苹果申请的企业开发者证书签名，根据[苹果开发者企业计划许可协议](https://developer.apple.com/support/downloads/terms/apple-developer-enterprise-program/Apple-Developer-Enterprise-Program-License-Agreement-20220606-Chinese-Simplified.pdf)要求，使用企业开发者证书签名的App只允许企业员工内部使用，不允许企业外部人员安装使用。  
> The standard real machine running base that comes with HBuilderX is signed with the enterprise developer certificate applied by DCloud to Apple, according to the [Apple Developer Enterprise Program License Agreement](https://developer.apple.com/support/downloads/terms /apple-developer-enterprise-program/Apple-Developer-Enterprise-Program-License-Agreement-20220606-Chinese-Simplified.pdf) requires that apps signed with enterprise developer certificates are only allowed to be used internally by enterprise employees, not outside the enterprise personnel to install and use.
> 因收到苹果公司警告，自2022年9月14日起iOS真机设备不再支持使用标准真机运行基座，详情见论坛公告：[https://ask.dcloud.net.cn/article/40041](https://ask.dcloud.net.cn/article/40041)  
> Due to a warning from Apple, from September 14, 2022, real iOS devices will no longer support the use of a standard real machine running dock. For details, please refer to the forum announcement: [https://ask.dcloud.net.cn/article /40041](https://ask.dcloud.net.cn/article/40041)
> 在iOS真机设备上运行请向苹果申请证书制作[自定义基座](#customplayground)或者在Mac电脑使用[iOS模拟器](#ios_simulator)
> To run on a real iOS device, please apply for a certificate from Apple to make [custom dock](#customplayground) or use [iOS simulator](#ios_simulator) on a Mac computer

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/select-ios.jpeg" style="zoom: 50%;" />

**注意事项**  
**Precautions**  
- 确保usb线的连接通畅（有些数据线质量不佳，需使用高电压usb端口，如果无法识别时候请尝试更换数据线）  
- Make sure that the usb cable is connected smoothly (some data cables are of poor quality, you need to use a high-voltage usb port, if you can't recognize it, please try to replace the data cable)
- 如果windows电脑连接iOS设备需电脑安装iTunes软件，并确保apple的mobile device服务开启、iTunes可找到手机  
- If the Windows computer is connected to the iOS device, the computer needs to install the iTunes software, and ensure that the apple mobile device service is turned on and iTunes can find the phone
- 手机连接电脑后，确保在手机上弹出的“要信任此电脑吗？”提示框中点了“信任”按钮  
- After the phone is connected to the computer, make sure to click the "Trust" button in the "Do you want to trust this computer?" prompt box that pops up on the phone


<a id="ios_simulator"/>

如果是Mac电脑安装XCode后，“标准运行基座”支持使用iOS模拟器  
![](https://native-res.dcloud.net.cn/images/hx/run/ios-sim.png)  

点击后进入iOS模拟器选择界面  
![](https://native-res.dcloud.net.cn/images/hx/run/ios-sim-select.png)  

上面的界面会额外显示搜索框，因XCode的iOS模拟器非常多，可通过搜索框过滤快速选择需要使用的模拟器。  
The above interface will additionally display a search box, because there are many iOS simulators in XCode, you can quickly select the simulator you need to use by filtering through the search box.


## 运行
## run

初次运行时会提示安装“真机运行插件”。
When you run it for the first time, you will be prompted to install the "real machine running plug-in".

该插件内置“标准运行基座”，这个基座使用的是DCloud的包名、证书和三方SDK配置。如果要自定义，则需要使用[自定义运行基座](#customplayground)
The plugin has a built-in "Standard Run Dock", which uses DCloud's package name, certificate and third-party SDK configuration. If you want to customize, you need to use [custom playground](#customplayground)

在运行菜单中选择要运行的手机设备或模拟器，点击运行按钮，会执行如下流程：
Select the mobile device or simulator to run in the run menu, click the run button, and the following process will be performed:
1. uni-app项目编译（5+ App/Wap2App项目无需编译）  
1. uni-app project compilation (5+ App/Wap2App projects do not need to be compiled)
2. 通过数据线给手机安装真机运行基座（需要手机屏幕高亮并在手机端点击允许）  
2. Install the real machine running base on the mobile phone through the data cable (need to highlight the mobile phone screen and click Allow on the mobile phone)
3. 编译后的代码同步到手机设备上  
3. The compiled code is synchronized to the mobile device
4. 启动手机端的真机运行基座，加载同步到手机的代码（iPhone手机需手动点击桌面图标启动）  
4. Start the real machine running base on the mobile phone and load the code synchronized to the mobile phone (the iPhone needs to manually click the desktop icon to start it)

运行成功后，HBuilder底部的控制台显示成功日志。此后修改代码会差量同步到手机上，手机程序会动态热刷。同时console.log代码会打印到控制台上，点击打印日志可以跳转到相关代码。  
After running successfully, the console at the bottom of HBuilder displays the success log. Afterwards, the modified code will be synchronized to the mobile phone, and the mobile phone program will be dynamically refreshed. At the same time, the console.log code will be printed to the console, and you can jump to the relevant code by clicking Print Log.

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/run-app-console.jpg" style="zoom: 50%;" />

### 运行项目到iOS真机App自启动@ios-app-automatically-open
### Run the project to the iOS real machine App to start automatically @ios-app-automatically-open

> 目前仅支持MacOSX，不支持Windows
> Currently only supports MacOSX, not Windows

HBuilderX 3.7.0+版本，新增 运行App项目到iOS真机，运行成功后，手机上的App会自动打开。
HBuilderX 3.7.0+ version, newly added to run the App project to the real iOS device, after running successfully, the App on the phone will be opened automatically.

**如下图所示：**
**As shown below:**

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/ios_start.jpg" style="zoom: 50%;" />

**注意：** MacOSX需要安装跟iOS手机系统相匹配的Xcode版本。 比如iPhone手机系统是iOS 16.2，那么也需要安装支持iOS 16.2的Xcode版本。如果`/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/DeviceSupport`目录下不存在跟手机系统相匹配的`iOS Platforms`, 那么是无法自启动App的。请在手机端点击运行基座图标手动启动。
**Note:** MacOSX needs to install the Xcode version that matches the iOS phone system. For example, if the iPhone system is iOS 16.2, you also need to install an Xcode version that supports iOS 16.2. If there is no `iOS Platforms` that matches the mobile phone system in `/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/DeviceSupport` directory, then the App cannot be launched automatically. Please click the running dock icon on the mobile phone to start it manually.

使用如下命令，可以查看Xcode iOS Platforms数据。
Use the following command to view Xcode iOS Platforms data.

```shell
ls -lh  /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/DeviceSupport
```

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/ios-version.jpg" style="zoom: 45%;border: 1px solid #EEEEEE !important; border-radius: 20px;" />

MacOSX，如果无法自动启动App，请排查以下原因：
On MacOSX, if the App cannot be started automatically, please check the following reasons:
- iOS手机系统没有匹配Xcode版本
- The iOS phone system does not match the Xcode version
- 手机处于息屏状态
- The mobile phone is in the off-screen state
- 项目编译运行失败、或安装基座失败
- Failed to compile and run the project, or failed to install the base

## 标准基座@playground  
## Standard Pedestal @playground
标准运行基座，是DCloud为方便开发者低门槛调试而提供的，此基座App使用的是DCloud的包名、证书和三方SDK配置。
The standard operating base is provided by DCloud to facilitate the low-threshold debugging of developers. This base App uses DCloud's package name, certificate and third-party SDK configuration.

在原生层不变的情况下，js等动态代码可以在运行基座上动态加载，实现热重载运行。
Under the condition that the native layer remains unchanged, dynamic codes such as js can be dynamically loaded on the running base to realize hot reload operation.

**HBuilderX3.7.1版本调整标准基座支持的系统版本**  
**HBuilderX3.7.1 version adjusts the system version supported by the standard base**
- Android平台  
-Android platform
要求Android5（API Leavel 21）及以上系统，如需在Android4.4设备真机运行，请使用自定义基座。更多App支持的最低版本设置[参考文档](https://uniapp.dcloud.net.cn/tutorial/app-android-minsdkversion.html)
Requires Android5 (API Level 21) and above systems, if you want to run on Android4.4 devices, please use a custom dock. More minimum version settings supported by App [reference document](https://uniapp.dcloud.net.cn/tutorial/app-android-minsdkversion.html)
- iOS平台  
- iOS platform
要求iOS10及以上系统，如需在iOS9.*设备真机运行，请使用自定义基座。更多App支持的最低版本设置参考manifest.json的[deploymentTarget](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#ios)
Requires iOS10 and above. If you need to run on iOS9.* devices, please use a custom dock. For more minimum version settings supported by App, refer to [deploymentTarget] of manifest.json (https://uniapp.dcloud.net.cn/collocation/manifest-app.html#ios)

## 自定义基座@customplayground  
## Custom Pedestal @customplayground
如果要自定义原生层，则需要走一遍iOS或Android的打包流程，由XCode或Android studio编译打包生成ipa或apk安装包。
If you want to customize the native layer, you need to go through the packaging process of iOS or Android, and compile and package by XCode or Android studio to generate an ipa or apk installation package.

但打包后无法方便调试，不能热重载和显示控制台日志。所以HBuilder在打包时提供了一个特殊选项，打包“自定义运行基座”。
However, after packaging, it cannot be easily debugged, and cannot be hot reloaded and console logs displayed. So HBuilder provides a special option when packaging, packaging a "custom run base".

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/build-app-customplayground.jpg" style="zoom: 50%;" />

> 打包App的入口在HBuilder顶部发行菜单，或快捷键【Ctrl+u】
> The entry of the packaged App is in the release menu at the top of HBuilder, or the shortcut key [Ctrl+u]

自定义运行基座可以所有配置生效（主要是manifest.json的配置），包括：  
The custom runtime base can take effect with all configurations (mainly the configuration of manifest.json), including:
- App名称、图标、封面splash、包名、证书  
- App name, icon, cover splash, package name, certificate
- App模块配置、三方sdk配置（如微信、推送、地图、语音识别等三方sdk配置）
- App module configuration, third-party sdk configuration (such as WeChat, push, map, voice recognition, etc. third-party sdk configuration)
- App权限配置
- App permission configuration
- uni原生插件  
- uni native plugin
- 其他manifest.json文档提到的需打包生效的配置
- Configurations mentioned in other manifest.json documents that need to be packaged to take effect

打包自定义运行基座后，HBuilder会自动将生成后的apk和ipa包存放在 项目目录/unpackage/debug目录下，文件名分别为`android_debug.apk`和`iOS_debug.ipa`。
After packaging the custom runtime base, HBuilder will automatically store the generated apk and ipa packages in the project directory/unpackage/debug directory, and the file names are `android_debug.apk` and `iOS_debug.ipa` respectively.

一个项目只能生成一个自定义基座，多次生成只保留最后一次结果。
Only one custom pedestal can be generated for a project, and multiple generation only keeps the last result.

生成自定义基座后，在设备选择窗口，可以选择自定义基座，如下图所示：  
After generating a custom base, in the device selection window, you can select a custom base, as shown in the following figure:

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/hx_select_base.jpg" style="zoom: 50%;" />

注意：自定义运行基座是测试版，不可直接商用（使用自定义运行基座覆盖安装apk不会更新应用资源，并且有toast警告）。正式发版时需要按正常打包方式重新打包。
Note: The custom running base is a beta version and cannot be directly commercialized (using the custom running base to overwrite the installation of the apk will not update the application resources, and there is a toast warning). When the official version is released, it needs to be repackaged according to the normal packaging method.

> HBuilderX 3.7.13起，MacOSX系统，App项目，支持运行自定义基座到iOS模拟器。[参考文档](https://uniapp.dcloud.net.cn/tutorial/run/run-custom-base-ios-simulator.html)

## 离线打包生成自定义运行基座
## Offline packaging to generate a custom running base

可使用离线SDK打包生成自定义运行基座(不支持cli方式,将src拖拽到编辑器中，并重新识别项目类型)，生成后将apk和ipa包存放在项目目录/unpackage/debug目录下，文件名分别为android_debug.apk和iOS_debug.ipa。
You can use the offline SDK package to generate a custom running base (the cli method is not supported, drag and drop the src into the editor, and re-identify the project type), and store the apk and ipa packages in the project directory/unpackage/debug directory after generation , and the file names are android_debug.apk and iOS_debug.ipa respectively.

- [Android平台离线生成自定义调试基座](https://ask.dcloud.net.cn/article/35482)
- [Android platform generates custom debugging dock offline](https://ask.dcloud.net.cn/article/35482)
- [iOS平台离线生成自定义调试基座](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e5%a6%82%e4%bd%95%e7%94%a8%e7%a6%bb%e7%ba%bf%e6%89%93%e5%8c%85%e5%b7%a5%e7%a8%8b%e5%88%b6%e4%bd%9c%e8%87%aa%e5%ae%9a%e4%b9%89%e5%9f%ba%e5%ba%a7)


## 基座闪退获取日志

### android平台

**默认标准基座**闪退 可以查看手机存储根目录 `/Android/data/io.dcloud.HBuilder/logs/io.dcloud.HBuilder/crash/` 崩溃日志文件

**自定义基座**闪退 可以查看手机存储根目录 `/Android/data/packageName/logs/packageName/crash/` 崩溃日志文件

**packageName:** apk包名

apk包名是“uni.UNIB89CXX”，目录则为：`/Android/data/uni.UNIB89CXX/logs/uni.UNIB89CXX/crash/`

**注意不是所有崩溃都能捕获到并保存文件**