因手机差异较大，HBuilder并没有提供App的模拟器。不管uni-app或5+App/wap2app项目，都需要连接真实的手机或手机模拟器来运行测试，称之为“真机运行”。

- Android平台  
HBuilder支持adb协议，在HBuilder运行的电脑上，可以使用usb线连接Android设备，也可以使用安装在电脑上的Android模拟器（包括google官方模拟器，三方模拟器如“雷电”、“夜神”等）  
- iOS平台  
HBuilder支持itunes协议，在HBuilder运行的电脑上，使用usb线连接iPhone或iPad；如果是mac电脑，则可以连接XCode自带的iOS模拟器。如果是arm架构cpu，还可以直接启动真机运行基座。   

真机运行的目的，是为了实现代码修改的热刷新，避免打包才能看到效果。在HBuilder中编辑代码，在手机上实时看到修改效果，并且可以在HBuilder控制台看到日志。


## 运行入口
通过HBuilder顶部运行菜单、或工具栏运行按钮、或快捷键，均可激活运行入口。

1. HBuilder顶部运行菜单  

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/menurunapp.png" style="zoom: 50%;" />

2. 工具栏运行按钮

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/toolbarrunmenuapp.png" style="zoom: 50%;" />

可以按数字快速选择菜单项。比如按“4”选择“运行到Android App基座”。也可以按上下键然后回车选择。

相比于HBuilder顶部运行菜单，工具栏运行按钮下的运行菜单内容较少，只保留了最常见的运行。

3. 快捷键【Ctrl+r】  

实际上激活了工具栏运行按钮。可继续搭配数字键，实现无鼠标快捷运行操作。



## 连接设备

点击运行到iOS或Android设备时，会弹出选择界面，需选择要连接的手机设备或模拟器。  

可以多设备运行，每个运行设备会在HBuilder底部控制台新开一个独立窗口，互不干扰。  
但一个设备同时只能运行一个项目，不同的项目运行到相同手机只有最后一个项目生效。

> 连接设备过程中如果找不到手机，可以尝试点击“刷新”按钮，如果还是无法找到手机请参考[真机运行常见问题](run-app-faq.md)

### Android设备选择  

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/select-android.jpeg" style="zoom: 50%;" />

**注意事项**  
- 如果电脑里安装有模拟器（Android模拟器需要先启动），HBuilder会直接检测到设备并显示在候选列表中。可以参考[如何安装模拟器](installSimulator.md)  
- 确认Android手机设置中`USB调试`模式已开启。通常在手机的【设置】【开发者选项】里，有的手机在插上数据线后在系统通知栏里也可以设置，注意不能设置为u盘模式，如果是充电模式则必须同时设置充电时`允许usb调试`。


### iOS设备选择@ios_device

> HBuilderX中自带的标准真机运行基座使用DCloud向苹果申请的企业开发者证书签名，根据[苹果开发者企业计划许可协议](https://developer.apple.com/support/downloads/terms/apple-developer-enterprise-program/Apple-Developer-Enterprise-Program-License-Agreement-20220606-Chinese-Simplified.pdf)要求，使用企业开发者证书签名的App只允许企业员工内部使用，不允许企业外部人员安装使用。  
> 因收到苹果公司警告，自2022年9月14日起iOS真机设备不再支持使用标准真机运行基座，详情见论坛公告：[https://ask.dcloud.net.cn/article/40041](https://ask.dcloud.net.cn/article/40041)  
> 在iOS真机设备上运行请向苹果申请证书制作[自定义基座](#customplayground)或者在Mac电脑使用[iOS模拟器](#ios_simulator)

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/select-ios.jpeg" style="zoom: 50%;" />

**注意事项**  
- 确保usb线的连接通畅（有些数据线质量不佳，需使用高电压usb端口，如果无法识别时候请尝试更换数据线）  
- 如果windows电脑连接iOS设备需电脑安装iTunes软件，并确保apple的mobile device服务开启、iTunes可找到手机  
- 手机连接电脑后，确保在手机上弹出的“要信任此电脑吗？”提示框中点了“信任”按钮  


<a id="ios_simulator"/>

如果是Mac电脑安装XCode后，“标准运行基座”支持使用iOS模拟器  
![](https://native-res.dcloud.net.cn/images/hx/run/ios-sim.png)  

点击后进入iOS模拟器选择界面  
![](https://native-res.dcloud.net.cn/images/hx/run/ios-sim-select.png)  

上面的界面会额外显示搜索框，因XCode的iOS模拟器非常多，可通过搜索框过滤快速选择需要使用的模拟器。  


## 运行

初次运行时会提示安装“真机运行插件”。

该插件内置“标准运行基座”，这个基座使用的是DCloud的包名、证书和三方SDK配置。如果要自定义，则需要使用[自定义运行基座](#customplayground)

在运行菜单中选择要运行的手机设备或模拟器，点击运行按钮，会执行如下流程：
1. uni-app项目编译（5+ App/Wap2App项目无需编译）  
2. 通过数据线给手机安装真机运行基座（需要手机屏幕高亮并在手机端点击允许）  
3. 编译后的代码同步到手机设备上  
4. 启动手机端的真机运行基座，加载同步到手机的代码（iPhone手机需手动点击桌面图标启动）  

运行成功后，HBuilder底部的控制台显示成功日志。此后修改代码会差量同步到手机上，手机程序会动态热刷。同时console.log代码会打印到控制台上，点击打印日志可以跳转到相关代码。  

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/run-app-console.jpg" style="zoom: 50%;" />

### 运行项目到iOS真机App自启动@ios-app-automatically-open

> 目前仅支持MacOSX，不支持Windows

HBuilderX 3.6.17版本，新增 运行App项目到iOS真机，安装基座，App自动打开。

注意：MacOSX需要安装跟iOS手机系统相匹配的Xcode版本。 比如iPhone手机系统是iOS 16.2，那么也需要安装支持iOS 16.2的Xcode版本。

使用如下命令，可以查看Xcode iOS Platforms数据。

```shell
ls -lh  /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/DeviceSupport
```

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/ios-version.jpg" style="zoom: 45%;border: 1px solid #EEEEEE !important; border-radius: 20px;" />

## 标准基座和自定义基座@customplayground  

标准运行基座，是DCloud为方便开发者低门槛调试而提供的，此基座App使用的是DCloud的包名、证书和三方SDK配置。

在原生层不变的情况下，js等动态代码可以在运行基座上动态加载，实现热重载运行。

如果要自定义原生层，则需要走一遍iOS或Android的打包流程，由XCode或Android studio编译打包生成ipa或apk安装包。

但打包后无法方便调试，不能热重载和显示控制台日志。所以HBuilder在打包时提供了一个特殊选项，打包“自定义运行基座”。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/build-app-customplayground.jpg" style="zoom: 50%;" />

> 打包App的入口在HBuilder顶部发行菜单，或快捷键【Ctrl+u】

自定义运行基座可以所有配置生效（主要是manifest.json的配置），包括：  
- App名称、图标、封面splash、包名、证书  
- App模块配置、三方sdk配置（如微信、推送、地图、语音识别等三方sdk配置）
- App权限配置
- uni原生插件  
- 其他manifest.json文档提到的需打包生效的配置

打包自定义运行基座后，HBuilder会自动将生成后的apk和ipa包存放在 项目目录/unpackage/debug目录下，文件名分别为`android_debug.apk`和`iOS_debug.ipa`。

一个项目只能生成一个自定义基座，多次生成只保留最后一次结果。

生成自定义基座后，在设备选择窗口，可以选择自定义基座，如下图所示：  

<img src="https://img-cdn-tc.dcloud.net.cn/uploads/article/20181228/9a4abc6fc3b72b2ede0393cfaab6a890.png" style="zoom: 50%;" />

注意：自定义运行基座是测试版，不可直接商用（使用自定义运行基座覆盖安装apk不会更新应用资源，并且有toast警告）。正式发版时需要按正常打包方式重新打包。

## 离线打包生成自定义运行基座

可使用离线SDK打包生成自定义运行基座(不支持cli方式,将src拖拽到编辑器中，并重新识别项目类型)，生成后将apk和ipa包存放在项目目录/unpackage/debug目录下，文件名分别为android_debug.apk和iOS_debug.ipa。

- [Android平台离线生成自定义调试基座](https://ask.dcloud.net.cn/article/35482)
- [iOS平台离线生成自定义调试基座](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e5%a6%82%e4%bd%95%e7%94%a8%e7%a6%bb%e7%ba%bf%e6%89%93%e5%8c%85%e5%b7%a5%e7%a8%8b%e5%88%b6%e4%bd%9c%e8%87%aa%e5%ae%9a%e4%b9%89%e5%9f%ba%e5%ba%a7)
