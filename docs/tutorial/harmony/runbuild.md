# 运行和发行

> HBuilderX 版本需 ≥ 4.24

> [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e)

## 兼容性说明

1. 鸿蒙开发只支持Vue3，不支持Vue2、不支持plus、但支持nvue
2. nvue编译到鸿蒙后非原生渲染，而是与web一样渲染（自动注入一些默认样式进行兼容）
3. Vue3也支持选项式代码风格，参考[Vue2升Vue3指南](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html )
4. HBuilderX 4.41+ 开始运行到鸿蒙设备时支持修改代码后热刷更新
5. HBuilderX 4.41+ 开始运行到鸿蒙设备时控制台显示的应用日志支持回源代码

## 开发环境要求@env

- HBuilderX 4.24+ [下载地址](https://www.dcloud.io/hbuilderx.html)
- DevEco-Studio [下载地址](https://developer.huawei.com/consumer/cn/download/)
  - HBuilderX 4.24+ 要求 DevEco-Studio 5.0.3.400+，HBuilderX 4.31+ 要求 DevEco-Studio 5.0.3.800+。
  - 鸿蒙系统版本 API 12 以上 （DevEco-Studio有内置鸿蒙模拟器）
- HBuilderX 4.31+ 构建的鸿蒙运行包不支持 x86_64 平台，会影响到 Windows 系统和部分 Mac 系统的鸿蒙模拟器无法使用，需使用真机调试
- **项目的路径不要太深，如果项目路径过长会导致编译失败，建议将项目放在盘符根目录下**

**Windows系统如使用模拟器则需要开启以下功能**

打开控制面板 - 程序与功能 - 开启以下功能

1. Hyper-V
2. Windows 虚拟机监控程序平台
3. 虚拟机平台

注意: 需要win10专业版或win11专业版才能开启以上功能，家庭版需先升级成专业版或企业版

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085210915b1knhu7l3u8.png)

### 调试运行的方式@run-mode

HBuilderX 4.24 版本开始支持【运行到鸿蒙】，具体的方式是开发者下载鸿蒙工程模板并创建独立的鸿蒙工程目录，
然后在 uni-app 项目中的 `manifest.json` 里面设置 `app-harmony.projectPath` 属性来指向这个鸿蒙工程目录，
uni-app 项目在编译时把编译产物输出到鸿蒙工程目录，然后调起 DevEco Studio 打开鸿蒙工程目录，由开发者手动完成后续的运行调试工作。

HBuilderX 4.27+ 开始已经把鸿蒙工程模板内置到 HBuilderX 中，【运行到鸿蒙】时自动创建鸿蒙工程目录，与 uni-app 项目的编译产物合并，
然后调用鸿蒙工具链完成打包和安装、运行等操作，同时从运行设备上收集输出的日志显示到 HBuilderX 的控制台。

新的内置模板的方式虽然在调试运行过程中不再调起 DevEco Studio，但一般来说仍然需要安装 DevEco Studio，因为：

1. 需要使用 DevEco Studio 提供的鸿蒙工具链来完成相关操作。
2. 启动鸿蒙模拟器这个操作只能在 DevEco Studio 中完成。
3. 调试运行时如果需要进行数字签名，可以在 DevEco Studio 中自动申请调试证书。

### 启动鸿蒙模拟器@connectvirtually

在 DevEco Studio 中打开任意一个项目（也可以新建一个空项目），然后在下图的位置进入设备管理器：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085379828ap3pkhhfmig.png)

如果没有登录华为账号，此时需要先登录，登录成功后看到如下页面

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200854641084hsm583p5jo.png)

选择模拟器型号，选第一个即可

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200855617759sfquhr1j0o.png)

安装完模拟器后，点击启动按钮启动模拟器

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200856058101582lbghgf8.png)

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085712493il2ep17ldg8.png)

### 连接鸿蒙真机@connectmobile

**注意：真机需要鸿蒙系统版本 API 12 以上**

打开鸿蒙手机开发者模式，开启USB调试，通过USB线连接电脑，在此处能看到对应的设备标识符则表示连接成功

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720091392422r91cpejpp7g.png)

### 证书签名配置指南@signature

**注意：配置签名需要先启动模拟器或连接真机后才能配置**

点击 DevEco-Studio 上方菜单 File - Project Structure...

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720087126462d9133uo0hmg.png)

**生成运行调试证书和签名**

在弹出的窗体中选择 Project - Signing Configs，并打钩 Automatically generate signature，即可自动生成签名

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200873385940vk5oj9ihk.png)

**使用发布证书生成发布用的签名**

需要先[申请发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-releasecert-0000001946273961)

在弹出的窗体中选择 Project - Signing Configs，并手动填写证书信息和密钥

依次点击 `Apply` 和 `OK` 使签名生效

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720259265552t0m33hs637.png)

如果是运行证书还是发布证书，生成的签名在文件 build-profile.json5 内

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/23185c32-0342-4ef0-a62d-e5432050a48d.png)

将它复制到你的 uni-app 项目根目录的 `harmony-configs/build-profile.json5` 的 signingConfigs 配置中

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1a2b004c-2b31-4a48-912e-b31ed4740449.png)

### 配置 HBuilderX settings.json@hbxsettings

打开HBuilderX，点击上方菜单 - 工具 - 设置，再点击 运行配置，在鸿蒙运行配置中设置 DevEco Studio 的路径

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/fe28df4f-a2e1-4c40-bba2-3e4b93ae1951.png)

## 运行uniapp项目到鸿蒙@run

1. HBuilderX 新建一个空白的 uni-app 项目，选vue3（也可使用已有的uni-app vue3项目）

2. 编译 uni-app 到鸿蒙

点击 HBuilderX 上方【运行】菜单 - 运行到手机或模拟器 - 运行到鸿蒙

![](https://web-ext-storage.dcloud.net.cn/unicloud/ext-storage/52a7f8f1-ea77-4733-b5f2-d92d20ff87cf.png)

3. 【首次运行】此时如果是第一次运行本项目会在项目根目录下生成harmony-configs目录用于存放鸿蒙配置文件

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/20240914151712.png)

4. 【首次运行】配置签名信息、包名到鸿蒙配置文件内

参考：[修改鸿蒙工程配置](https://uniapp.dcloud.net.cn/tutorial/run/run-app-harmony.html#configs)

5. 再次运行项目，选择目标设备

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/20240914152406.jpg)

## 发行鸿蒙应用到应用市场@publish

1. 使用hbx（4.28以上），点击【发行】- 【App-Harmony-本地打包】

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/c42f9a21-d782-41e3-9342-bfa3265cbc54.png)

项目第一次发行时，会出现如下提示

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/d6bee0ad-97b2-4d11-ba47-9e6b07d3698b.png)

2. 配置[签名](#signature)

3. 配置完签名后，再次点击【发行】- 【App-Harmony-本地打包】即可得到已签名的 `.app` 安装包文件

4. 最后还需参考鸿蒙官方文档发布鸿蒙应用到应用市场，详见[文档](https://developer.huawei.com/consumer/cn/doc/app/agc-help-releaseharmony-0000001933963166)

## 权限配置指南@permission

部分API需要在配置文件显示声明权限才能调用，权限的配置文件路径为：`/harmony-configs/entry/src/main/module.json5`，配置节点为：`requestPermissions`，如下图所示

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/bfb249bd-30c0-4be4-b50e-e2695860507d.png)

具体请查看以下文档

1. [声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/declare-permissions-V5)
2. [基础权限列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/permissions-for-all-V5)
3. [受限权限列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/restricted-permissions-V5)

## 更多配置指南@moreconfig

项目的根目录下有一个 `harmony-configs` 目录，每当执行跟鸿蒙相关的操作时，HX 都会检查这个目录，如果目录不存在则会自动创建。该目录中初始会存在几个常用的配置文件。

在执行运行或者发行到鸿蒙的操作过程中，HX 会根据内置模板生成一个鸿蒙工程目录（一般在 `unpackage` 目录下游），然后把 `harmony-configs` 目录下的所有内容都原样覆盖过去，
然后再调用鸿蒙的工具链进行编译打包等操作。

所以，`harmony-configs` 目录中的所有文件最终都会原样进入鸿蒙工程目录参与项目构建，所有需要对鸿蒙工程的定制化配置都可以写在这个目录下（注意：在 `manifest.json` 的【鸿蒙配置】中设置的选项将具有更高的优先级）。

关于 `harmony-configs` 目录的使用要遵守鸿蒙的技术规范，具体可参考 [鸿蒙官方文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/application-configuration-file-stage-V5)

## 注意事项@tips

1. 移植已有的 uni-app 项目源码时，如有其他 npm 依赖，请自行安装
2. 现阶段条件编译仅 APP-HARMONY、APP 可以命中鸿蒙平台
3. 每次HBuilderX改动源码后，DevEco-Studio 内需要点重新运行才能生效
4. 如果模拟器白屏了，尝试重启软件 DevEco-Studio，再重启项目
5. 如果模拟器无法连接了，尝试重启电脑
6. 在HBuilderX里运行后，需要再去鸿蒙 DevEco Studio里运行
7. 在HBuilderX里修改代码后，需要去鸿蒙 DevEco Studio里重新运行
8. 如果有多个uni-app项目要编译到鸿蒙，那么鸿蒙离线sdk需要放置多份，每个uni-app的manifest中配置不同的离线sdk地址，否则会冲突，鸿蒙设备上目前没有基座概念

## 常见问题@question

### 运行失败报错如 `Unexpected token (Note that you need plugins to import files that are not JavaScript)` 或 `Please make sure that the splash page has one and only one '@Entry' decorator`

请将 HBuilderX 项目向上层目录移动，直到运行成功。这是因为鸿蒙在编译 ArkTs 时，`.ets` 文件路径总长不能大于 255 个字符。

### 如何修改应用名称、图标、权限等信息@q1

参考鸿蒙官方文档：[应用/组件级配置](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/application-component-configuration-stage-V5)

### 应用图标资源规范@q2

为保证图标在系统内显示的一致性，应用预置的图标资源应满足以下要素：

- 图标资源必须为分层资源（一张前景图和一张背景图）
- 图标资源尺寸必须为1024*1024px
- 图标资源必须为为正方形图像，系统会为对应场景自动生成遮罩裁切

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/b0a3c063-02c4-47f3-a23e-5d04ad5c4293.png)

### 启动图资源规范@q3

启动页可以配置背景色代码（默认为#FFFFFF）和一张启动图，启动图没有尺寸要求，但建议为正方形logo图

### 如何进行条件编译@ifndef

仅 APP-HARMONY 和 APP 可以条件编译命中鸿蒙平台，APP-PLUS 不能命中中鸿蒙平台

```js
// #ifdef APP-HARMONY
console.log("仅鸿蒙会编译")
// #endif

// #ifndef APP-HARMONY
console.log("仅非鸿蒙会编译")
// #endif

// #ifdef APP
console.log("安卓、苹果、鸿蒙会编译，小程序和Web不会编译")
// #endif

// #ifndef APP
console.log("安卓、苹果、鸿蒙不会编译，小程序和Web会编译")
// #endif

// #ifdef APP-PLUS
console.log("安卓、苹果会编译，鸿蒙不会编译，小程序和Web也不会编译")
// #endif

// #ifndef APP-PLUS
console.log("安卓、苹果不会编译，鸿蒙会编译，小程序和Web也会编译")
// #endif
```

### 鸿蒙DevEco Studio如何开启热重载@q4

虽然鸿蒙官方文档提供了如何开启热重载，详见[文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-hot-reload-0000001527628941-V5)，但目前只能针对ets文件的修改进行热更，还无法针对uniapp打包的js文件进行热更。

### 如何查看console打印的日志@q5

目前编译到鸿蒙时，在uniapp页面通过console.log打印日志可以直接在 HBuilderX 查看

注意：在uniapp页面打印对象或数组时，需要 `JSON.stringify` ，如 `console.log("obj", JSON.stringify(obj))`

### 运行出现白屏或闪退怎么解决?@q6

首先尝试重新编译uniapp项目，并重启模拟器或真机，如果依然白屏或闪退，那可能是你项目中有用到了鸿蒙不支持的组件或者api，可以尝试pages.json进行代码二分法排查（删除一半页面如果正常了代表被删除的那一半页面中有造成白屏或闪退的页面）

### 模拟器已启动，但无法连接?@q7

确保[签名](#signature)没有问题的情况下，尝试重启电脑

### 报启动鸿蒙失败，请手动启动鸿蒙@q8

**Windows系统**

1. 确保路径是正确的

Windows系统快速复制路径方法

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1721024978448hkblu60vadg.png)

注意：复制后的 `\` 要改成 `/`

2. 如果步骤1操作完还是不行，请尝试

原路径后面添加 `/bin/devecostudio64.exe`，然后重启 HBuilderX

**Mac系统**

1. 确保路径是正确的

Mac系统快速复制路径方法

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/ee1f4941-3736-4df8-a35c-bb3929fb124f.png)

2. 如果步骤1操作完还是不行，请尝试

原路径后面添加 `/Contents/MacOS/devecostudio`，然后重启 HBuilderX

### 通过 app-plus:titleNView 配置页面右上角按钮未生效@q9

当前导航栏未支持，可以尝试关闭原生导航栏，使用自己的自定义导航栏组件实现。

### 鸿蒙支持uniPush推送吗?@q10

HBuilderX 4.31起支持uniPush推送，具体配置请参考[文档](https://uniapp.dcloud.net.cn/unipush-v2.html)

### release模式进入使用了组合式api的页面报错`Cannot read property route of undefined`@q11

此问题由于arkTs的混淆Bug引发，即使进入到一个空的组合式api页面也会出现这个报错，已反馈给鸿蒙团队处理。

临时解决方案：在鸿蒙项目`entry/obfuscation-rules.txt`文件中增加一行`-disable-obfuscation`来禁用混淆。

### 1.3.7及以上模板在部分设备的模拟器上无法运行，报错`Install Failed: error: failed to install bundle`@q12

> 此章节仅针对HBuilderX 4.29及之前版本，4.31及之后的版本暂不支持在x86_64平台的模拟器上运行。

此问题是由于支付宝sdk兼容性造成的，目前只能删除支付宝sdk依赖，如下图所示操作，删除后需要点右上角的 Sync Now，并等待 Sync 结束

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/2020d045-c7d8-4b3a-ba21-d4f301900d00.png)

删除后还需要点右上角的 Sync Now，并等待 Sync 结束

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/908ef551-8605-4add-b68f-42aa497109b7.png)

### harmony应用怎样调试？

可以参考鸿蒙的文档 [使用DevTools工具调试前端页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/web-debugging-with-devtools-V5) 进行处理。

在 uni-app 的开发模式 `setWebDebuggingAccess` 会自动开启，此步骤可以跳过。