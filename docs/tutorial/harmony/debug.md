# 运行和调试

> HBuilderX 版本需 ≥ 4.27

> [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e)

## 兼容性说明

1. 鸿蒙开发只支持Vue3，不支持Vue2、不支持plus、但支持nvue
2. nvue编译到鸿蒙后非原生渲染，而是与web一样渲染（自动注入一些默认样式进行兼容）
3. Vue3也支持选项式代码风格，参考[Vue2升Vue3指南](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html )

## 开发环境要求@env

- DevEco-Studio 5.0.3.400 以上 [下载地址](https://developer.huawei.com/consumer/cn/download/)
- 鸿蒙系统版本 API 12 以上 （DevEco-Studio有内置鸿蒙模拟器）
- HBuilderX-4.24+ [下载地址](https://www.dcloud.io/hbuilderx.html)

**Windows系统如使用模拟器则需要开启以下功能**

打开控制面板 - 程序与功能 - 开启以下功能

1. Hyper-V
2. Windows 虚拟机监控程序平台
3. 虚拟机平台

注意: 需要win10专业版或win11专业版才能开启以上功能，家庭版需先升级成专业版或企业版

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085210915b1knhu7l3u8.png)

### 启动鸿蒙模拟器@connectvirtually

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085379828ap3pkhhfmig.png)

如果没有登录华为账号，此时需要先登录，登录成功后看到如下页面

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200854641084hsm583p5jo.png)

选择模拟器型号，选第一个即可

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200855617759sfquhr1j0o.png)

安装完模拟器后，点击启动按钮启动模拟器

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200856058101582lbghgf8.png)

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085712493il2ep17ldg8.png)

启动模拟器成功后，如果提示需要先签名，则进行[配置签名](#signature)

### 连接鸿蒙真机@connectmobile

**注意：真机需要鸿蒙系统版本 API 12 以上**

打开鸿蒙手机开发者模式，开启USB调试，通过USB线连接电脑，在此处选择你的手机名称，再启动项目即可，如果提示需要先签名，则进行[配置签名](#signature)

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720091392422r91cpejpp7g.png)

### 配置签名@signature

**注意：配置签名需要先启动模拟器或连接真机后才能配置**

点击 DevEco-Studio 上方菜单 File - Project Structure... 

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720087126462d9133uo0hmg.png)

在弹出的窗体中选择 Project - Signing Configs 并打钩 Automatically generate signature，即可自动生成签名

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200873385940vk5oj9ihk.png)

依次点击 `Apply` 和 `OK` 使签名生效

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720259265552t0m33hs637.png)

生成的签名在文件 build-profile.json5 内

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/23185c32-0342-4ef0-a62d-e5432050a48d.png)

将它复制到你的 uni-app 项目根目录的 `harmony-configs/build-profile.json5` 的 signingConfigs 配置中

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1a2b004c-2b31-4a48-912e-b31ed4740449.png)

## 配置 HBuilderX settings.json@hbxsettings

打开HBuilderX，点击上方菜单 - 工具 - 设置，在出现的弹窗右侧窗体新增如下配置

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720092016399okjuod823f.png)

注意：值填你自己的 DevEco-Studio 启动路径

```js
"harmony.devTools.path" : "D:/Huawei/DevEco Studio"
```

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/171981598089431le57049d.png)

## 运行uni-app项目

1. HBuilderX 新建一个空白的 uniapp 项目，选vue3

2. 编译 uni-app 到鸿蒙

点击 HBuilderX 上方【运行】菜单 - 运行到手机或模拟器 - 运行到鸿蒙

![](https://web-ext-storage.dcloud.net.cn/unicloud/ext-storage/52a7f8f1-ea77-4733-b5f2-d92d20ff87cf.png)

3. 【首次运行】此时如果是第一次运行本项目会在项目根目录下生成harmony-configs目录用于存放鸿蒙配置文件

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/20240914151712.png)

4. 【首次运行】配置签名信息、包名到鸿蒙配置文件内

参考：[修改鸿蒙工程配置](https://uniapp.dcloud.net.cn/tutorial/run/run-app-harmony.html#configs)

5. 再次运行项目，选择目标设备

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/20240914152406.jpg)

## 条件编译@ifndef

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

## 权限配置@permission

部分API需要在配置文件显示声明权限才能调用，权限的配置文件路径为：`/harmony-configs/entry/src/main/module.json5`，配置节点为：`requestPermissions`，如下图所示

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/bfb249bd-30c0-4be4-b50e-e2695860507d.png)

具体请查看以下文档

1. [声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions-0000001820999665)
2. [基础权限列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-0000001820999669)
3. [受限权限列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-in-acl-0000001763952222)

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

暂不支持
 
### release模式进入使用了组合式api的页面报错`Cannot read property route of undefined`@q11

此问题由于arkTs的混淆Bug引发，即使进入到一个空的组合式api页面也会出现这个报错，已反馈给鸿蒙团队处理。

临时解决方案：在鸿蒙项目`entry/obfuscation-rules.txt`文件中增加一行`-disable-obfuscation`来禁用混淆。

### 1.3.7及以上模板在部分设备的模拟器上无法运行，报错`Install Failed: error: failed to install bundle`@q12

此问题是由于支付宝sdk兼容性造成的，目前只能删除支付宝sdk依赖，如下图所示操作，删除后需要点右上角的 Sync Now，并等待 Sync 结束

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/2020d045-c7d8-4b3a-ba21-d4f301900d00.png)

删除后还需要点右上角的 Sync Now，并等待 Sync 结束

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/908ef551-8605-4add-b68f-42aa497109b7.png)


