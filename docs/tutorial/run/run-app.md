
因手机差异较大，HBuilder并没有提供App的PC模拟器。不管uni-app的App端或5+App、wap2app，都需要连接真实的手机或专业模拟器来运行测试，称之为“真机运行”。

- 对于Android平台，HBuilder支持adb协议，在HBuilder运行的电脑上，可以使用usb线连接Android设备，也可以使用安装在电脑里的Android模拟器（包括google官方模拟器和三方模拟器）
- 对于iOS平台，HBuilder支持itunes协议，在HBuilder运行的电脑上，使用usb线连接iphone或ipad；如果是mac电脑，则可以连接xocde自带的iOS模拟器。如果是arm架构cpu，还可以直接启动真机运行基座。

真机运行的目的，是为了实现代码修改的热刷新，避免打包才能看到效果。在HBuilder中编辑代码，在手机上实时看到修改效果，并且可以在HBuilder控制台看到日志。

## 运行入口
通过HBuilder顶部运行菜单、或工具栏运行按钮、或快捷键，均可激活运行入口。

1. HBuilder顶部运行菜单
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/c4d3c057-40dc-4dea-9277-be1c33a252ed.png)

2. 工具栏运行按钮
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1f9bb269-0534-4562-ba90-a96c01a6f221.png)

可以按数字快速选择菜单项。比如按“4”选择“运行到Android App基座”。也可以按上下键然后回车选择。

相比于HBuilder顶部运行菜单，工具栏运行按钮下的运行菜单内容较少，只保留了最常见的运行。

3. 快捷键【Ctrl+r】

实际上激活了工具栏运行按钮。可继续搭配数字键，实现无鼠标快捷运行操作。

## 连接设备

点击运行到iOS或Android设备时，会弹出选择界面，需选择要连接的手机设备或模拟器。

- Android设备选择
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/51434ff0-fff6-4006-a1a0-9db800393d60.jpg)

- iOS设备选择
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/04b9d6fa-51f5-4ca7-8301-9200cbe935eb.jpg)

如果是Mac电脑安装xcode后，上面的界面会额外显示搜索框。因xcode的iOS模拟器非常多，有搜索框过滤会更高效。

如果电脑里安装有模拟器（Android模拟器需要先启动），HBuilder会直接检测到设备并显示在候选列表中。可以参考[如何安装模拟器](installSimulator.md)

如果是usb线连接手机或pad等设备，需要
1. 确保usb线的连接通畅（有些数据线质量不佳，需使用高电压usb端口或更换线）
2. 如果windows电脑连接iOS设备需电脑安装itunes，确保apple的mobile device服务开启、itunes可找到手机
3. 确认Android手机设置中`USB调试`模式已开启。这个设置一般在【设置】【开发者选项】里。有的手机在插上数据线后在push通知栏里也可以设置。注意不能设置为u盘模式，如果是充电模式则必须同时设置充电时`允许usb调试`。
4. 确保手机上点了同意授权按钮，以允许电脑像手机传输命令

这个过程可能有各种情况导致找不到手机设备，参考[真机运行常见问题](run-app-faq.md)

可以多设备运行，每个运行设备会在HBuilder底部控制台新开一个独立窗口，互不干扰。

但一个设备同时只能运行一个项目，不同的项目运行到相同手机只有最后一个项目生效。

## 运行流程

初次运行时会提示安装“真机运行插件”。

该插件内置“标准运行基座”，这个基座使用的是DCloud的包名、证书和三方SDK配置。如果要自定义，则需要使用[自定义运行基座](#customplayground)

在运行菜单中选择要运行的手机设备或模拟器，点击运行按钮，会执行如下流程：
1. uni-app编译（如果是5+App和wap2app则不需要编译）
2. 通过数据线给手机安装真机运行基座（需要手机屏幕高亮并在手机端点击允许）
3. 编译后的代码同步到手机设备上
4. 呼起手机端的真机运行基座，加载同步到手机的代码（iOS需手动启动）

运行成功后，HBuilder底部的控制台显示成功日志。此后修改代码会差量同步到手机上，手机程序会动态热刷。同时console.log代码会打印到控制台上，点击打印日志可以跳转到相关代码。

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/ac78ba4d-16c2-4ca0-8cf8-2c8bb7260052.jpg)

## 标准基座和自定义基座@customplayground

标准运行基座，是DCloud为方便开发者低门槛调试而提供的，这个基座使用的是DCloud的包名、证书和三方SDK配置。

在原生层不变的情况下，js等动态代码可以在运行基座上动态加载，实现热重载运行。

如果要自定义原生层，则需要走一遍iOS或Android的打包流程，由xcode或Android studio编译打包形成新的ipa或apk。

但打包后无法方便调试，不能热重载和显示控制台日志。所以HBuilder在打包时提供了一个特殊选项，打包“自定义运行基座”。

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/9429d3a0-2223-41a7-9914-73037ad85aa5.jpg)

> 打包App的入口在HBuilder顶部发行菜单，或快捷键【Ctrl+u】

自定义运行基座可以定制所有原生层变更。这些变更主要体现在manifest.json的配置中。包括但不限于
- app名称、图标、封面splash、包名、证书
- app模块变更、三方sdk配置（如微信、推送、地图、语音识别等三方sdk配置）、app原生插件
- app权限变更
- 其他manifest.json文档提到的需打包生效的配置

打包自定义运行基座后，HBuilder会自动将生成后的apk和ipa包存放在 项目目录/unpackage/debug目录下，文件名分别为`android_debug.apk`和`iOS_debug.ipa`。

一个项目只能生成一个自定义基座，多次生成只保留最后一次结果。

生成自定义基座后，在顶部运行菜单可以选择使用自定义运行基座：
![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20181228/9a4abc6fc3b72b2ede0393cfaab6a890.png)
<!-- 这个图在修改运行界面后要换掉 -->

勾上上述选择后，再执行前述运行流程，将使用自定义基座而不是标准基座来运行。

注意：自定义运行基座是测试版，不可直接商用（使用自定义运行基座覆盖安装apk不会更新应用资源，并且有toast警告）。正式发版时需要按正常打包方式重新打包。

### 离线打包生成自定义运行基座

可使用离线SDK打包生成自定义运行基座，生成后将apk和ipa包存放在项目目录/unpackage/debug目录下，文件名分别为android_debug.apk和iOS_debug.ipa。

- [Android平台离线生成自定义调试基座](https://ask.dcloud.net.cn/article/35482)
- [iOS平台离线生成自定义调试基座](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e5%a6%82%e4%bd%95%e7%94%a8%e7%a6%bb%e7%ba%bf%e6%89%93%e5%8c%85%e5%b7%a5%e7%a8%8b%e5%88%b6%e4%bd%9c%e8%87%aa%e5%ae%9a%e4%b9%89%e5%9f%ba%e5%ba%a7)