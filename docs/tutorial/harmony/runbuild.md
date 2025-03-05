# 运行和发行

> [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e)

## 兼容性说明@compatibility

- HBuilderX 4.24+ 开始支持运行到鸿蒙平台
- 鸿蒙开发只支持Vue3、不支持Vue2，不支持plus、但支持nvue
- nvue编译到鸿蒙后非原生渲染，而是与web一样渲染（自动注入一些默认样式进行兼容）
- Vue3也支持选项式代码风格，参考[Vue2升Vue3指南](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
- HBuilderX 4.31+ 构建的鸿蒙运行包不支持 x86_64 平台，会影响到 Windows 系统和部分 Mac 系统的鸿蒙模拟器无法使用，需使用真机调试
- HBuilderX 4.41+ 开始运行到鸿蒙设备时支持修改代码后热刷更新
- HBuilderX 4.41+ 开始运行到鸿蒙设备时控制台显示的应用日志支持回源代码
- HBuilderX 4.43+ 开始支持将 `mainfest.json` 里面配置的应用版本名称/应用版本号（`versionName`/`versionCode`）应用于鸿蒙平台，且优先于 `harmony-configs/AppScope/app.json5` 中的设置

## 开发环境要求@env

- HBuilderX 4.24+ [下载地址](https://www.dcloud.io/hbuilderx.html)
- DevEco Studio [下载地址](https://developer.huawei.com/consumer/cn/download/)
  - HBuilderX 4.24+ 要求 DevEco Studio 5.0.3.400+，HBuilderX 4.31+ 要求 DevEco Studio 5.0.3.800+。
  - 鸿蒙系统版本 API 12 以上 （DevEco Studio有内置鸿蒙模拟器）
- 如果没有符合兼容性要求的模拟器，就需要有真机作为运行设备
- **项目的路径不要太深，如果项目路径过长会导致编译失败，建议将项目放在盘符根目录下。也不要包含中文、空格和其它特殊字符。**

### 调试运行的方式@run-mode

HBuilderX 4.24 版本开始支持【运行到鸿蒙】，具体的方式是开发者下载鸿蒙工程模板并创建独立的鸿蒙工程目录，
然后在 uni-app 项目中的 `manifest.json` 里面设置 `app-harmony.projectPath` 属性来指向这个鸿蒙工程目录，
uni-app 项目在编译时把编译产物输出到鸿蒙工程目录，然后调起 DevEco Studio 打开鸿蒙工程目录，由开发者手动完成后续的运行调试工作。

HBuilderX 4.27+ 开始已经把鸿蒙工程模板内置到 HBuilderX 中，【运行到鸿蒙】时自动创建鸿蒙工程目录，与 uni-app 项目的编译产物合并，
然后调用鸿蒙工具链完成打包和安装、运行等操作，同时从运行设备上收集输出的日志显示到 HBuilderX 的控制台。

新的内置模板的方式虽然在调试运行过程中不再调起 DevEco Studio，但一般来说仍然需要安装 DevEco Studio，因为：

1. HBuilderX 需要使用 DevEco Studio 提供的鸿蒙工具链来完成相关操作。
2. 启动鸿蒙模拟器这个操作只能在 DevEco Studio 中完成。
3. 调试运行时如果需要进行数字签名，可以在 DevEco Studio 中自动申请调试证书。

### 启动鸿蒙模拟器@connectvirtually

在 DevEco Studio 中打开任意一个项目（也可以新建一个空项目），然后在下图的位置进入设备管理器：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085379828ap3pkhhfmig.png)#{.zooming style="max-height:200px"}

如果没有登录华为账号，此时需要先登录，登录成功后看到如下页面

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200854641084hsm583p5jo.png)#{.zooming style="max-height:200px"}

选择模拟器型号，选第一个即可

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200855617759sfquhr1j0o.png)#{.zooming style="max-height:200px"}

安装完模拟器后，点击启动按钮启动模拟器

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200856058101582lbghgf8.png)#{.zooming style="max-height:200px"}
![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085712493il2ep17ldg8.png)#{.zooming style="max-height:200px"}

### 连接鸿蒙真机@connectmobile

**注意：真机需要鸿蒙系统版本 API 12 以上**

打开鸿蒙手机开发者模式，开启USB调试，通过USB线连接电脑，在此处能看到对应的设备标识符则表示连接成功

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720091392422r91cpejpp7g.png)#{.zooming style="max-height:200px"}

## 配置 HBuilderX settings.json@hbxsettings

打开HBuilderX，点击上方菜单 - 工具 - 设置，再点击 运行配置，在鸿蒙运行配置中设置 DevEco Studio 的安装路径。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/0c206e8a-868f-49de-8ca2-e7a2d2b768a8.png)#{.zooming style="max-height:200px"}

## 运行 uni-app 项目到鸿蒙@run

1. HBuilderX 新建一个空白的 uni-app 项目，选vue3（也可使用已有的uni-app vue3项目）

2. 编译 uni-app 到鸿蒙

点击 HBuilderX 上方【运行】菜单 - 运行到手机或模拟器 - 运行到鸿蒙

![](https://web-ext-storage.dcloud.net.cn/unicloud/ext-storage/52a7f8f1-ea77-4733-b5f2-d92d20ff87cf.png)#{.zooming style="max-height:200px"}

3. 【首次运行】第一次运行本项目时会在项目根目录下生成 `harmony-configs` 目录用于存放鸿蒙配置文件

参考：[更多配置指南](#configs)

4. 选择运行设备

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/20240914152406.jpg)#{.zooming style="max-height:200px"}

5. 【首次运行之后】配置签名证书资料

参考：[证书签名配置指南](#signing)

## 证书签名配置指南@signing

数字签名证书需要配置到 `harmony-configs/build-profile.json5` 中，这个文件等同于一个普通的鸿蒙工程中对应的文件。

申请证书的操作要在 DevEco Studio 中完成，如果是自己在华为的 AppGallery Connect 网站上手动申请证书，也需要 DevEco Studio 配合才能最终得到所需的 `build-profile.json5` 文件。

DevEco Studio 且须先打开一个鸿蒙工程才可进行证书相关的操作，建议先执行一次【运行到鸿蒙】，然后在项目的 `unpackage` 目录下找到临时生成的鸿蒙工程目录，
在 DevEco Studio 里面打开后再进行后面的操作。
如果是自己在 DevEco Studio 里面独立创建一个新的鸿蒙工程，虽然也可以用于申请证书，但需注意以下几点：

1. 由于证书资料中包含应用的包名，所以在这个鸿蒙工程中设置的应用包名应该与将要开发的 uni-app 应用项目中设置的鸿蒙应用包名（在 `manifest.json` 中设置）相一致，这样申请到的证书资料才会有效；

2. 这个鸿蒙工程的根目录中的 `build-profile.json5` 文件中的内容应该与 HBuilderX 自动生成的鸿蒙工程中的对应文件保持一致，否则在后续操作中可能产生异常。

3. 如果有用到 ACL 权限，需在 `entry/src/main/module.json5` 中声明，这样获得的证书中才能包含相关的授权。参考 [权限配置指南](#permission)

完成申请证书的操作之后，把这个鸿蒙工程中的 `build-profile.json5` 文件复制到 uni-app 项目的 `harmony-configs/build-profile.json5` 即可。

### 打开证书配置对话框@signing-dialog

点击 DevEco Studio 上方菜单 File - Project Structure...

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720087126462d9133uo0hmg.png)#{.zooming style="max-height:200px"}

### 调试用的数字签名证书@signing-debug

在使用模拟器进行调试运行的时候，一般是不需要做数字签名的，但如果是用真机进行调试运行，或者业务代码用到了 ACL 权限，那么就需要申请并配置一个**调试证书**用于数字签名。

参考 [申请调试证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugcert-0000001914263178)

在对话框中选择 Project - Signing Configs，并勾选 Automatically generate signature，即可自动生成签名证书资料

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200873385940vk5oj9ihk.png)#{.zooming style="max-height:200px"}

参考 [自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-signing-V5#section18815157237)

通过 DevEco Studio 自动申请得到的证书，缺省会保存到电脑的用户目录下，在 Windows 系统中一般是 `%USERPROFILE%\.ohos\config`，在 Mac 系统中一般是 `~/.ohos/config`。
配置信息中包含的三个文件缺省都是采用绝对路径来表示，也可以把这些文件移到 `harmony-configs` 目录下，这样就可以使用相对路径来表示，相对于 `harmony-configs` 目录。
如果要移动证书文件的位置，需注意跟这三个文件一起的还有一个名为 `material` 的目录，也要一起移动。

也可以在对话框中填写手动申请到的证书，填写的时候注意三个文件要在同一个目录。

完成以上操作后，鸿蒙工程中的 `build-profile.json5` 文件就包含了完整的调试证书配置信息（在 `app.signingConfigs` 数组里，`name` 属性的值是 `"default"`）。

### 发布用的数字签名证书@signing-release

在发行安装包的时候，一定需要配置一个**发布证书**，否则只能拿到一个未签名的安装包，是无法实际使用的。

发布证书只能手动申请，申请完成后把拿到的相关资料文件填写到 DevEco Studio 里面，填写的时候注意三个文件要在同一个目录。

参考 [申请发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-releasecert-0000001946273961)

在对话框中选择 Project - Signing Configs，不要勾选 Automatically generate signature，创建一个名为 `release` 的配置项。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/8ab460c4-33c0-465e-9704-10d6bb935448.png)#{.zooming style="max-height:200px"}

完成以上操作后，鸿蒙工程中的 `build-profile.json5` 文件就包含了完整的发布证书配置信息（在 `app.signingConfigs` 数组里，`name` 属性的值是 `"release"`）。

### 把生成的证书配置信息拷贝到 uni-app 项目中@signing-profile

无论是调试证书还是发布证书，生成的证书资料信息都在鸿蒙工程根目录下的 `build-profile.json5` 文件中，把这个文件复制到 uni-app 项目的 `harmony-configs/build-profile.json5` 即可。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1a2b004c-2b31-4a48-912e-b31ed4740449.png)#{.zooming style="max-height:200px"}

## 发行鸿蒙应用到应用市场@publish

1. 使用 HBuilderX 4.28+，点击【发行】-【App-Harmony-本地打包】

    ![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/c42f9a21-d782-41e3-9342-bfa3265cbc54.png)#{.zooming style="max-height:200px"}

    如果项目中没有 `harmony-configs` 目录，此时会自动生成。

2. 如果日志窗口提示没有配置签名证书资料，则去 [配置发布证书的资料](#signing-release)

3. 配置完证书资料后，再次点击【发行】- 【App-Harmony-本地打包】即可得到已签名的 `.app` 安装包文件

4. 最后还需参考鸿蒙官方文档发布鸿蒙应用到应用市场，详见[文档](https://developer.huawei.com/consumer/cn/doc/app/agc-help-releaseharmony-0000001933963166)

## 权限配置指南@permission

部分API需要在配置文件显示声明权限才能调用，权限的配置文件路径为：`/harmony-configs/entry/src/main/module.json5`，配置节点为：`requestPermissions`，如下图所示

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/bfb249bd-30c0-4be4-b50e-e2695860507d.png)#{.zooming style="max-height:200px"}

具体请查看以下文档

1. [声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/declare-permissions-V5)
2. [基础权限列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/permissions-for-all-V5)
3. [受限权限列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/restricted-permissions-V5)

## 更多配置指南@configs

HBuilderX 支持把 `manifest.json` 里面的一些配置项传递给鸿蒙工程，打开这个文件，下面这些配置项与鸿蒙相关：

### 基础配置@config-basic

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/da24a937-cb3e-4afb-b8c6-604b31b3fb3d.png)#{.zooming style="max-height:200px"}

目前这里的应用名称、应用版本名称、应用版本号将传递给鸿蒙工程使用。

### 鸿蒙App配置@config-app-harmony

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/245d9e69-055e-402a-8e71-634443f359df.png)#{.zooming style="max-height:200px"}

这里的配置是专用于传递给鸿蒙工程使用。

以上的配置项有可能随着 HBuilderX 的升级而有所增加，其优先级高于后面所述的 `harmony-configs` 目录。如果这些仍没有满足需求，则可以自行在 `harmony-configs` 目录中进行配置。

### 使用 `harmony-configs` 配置目录@config-dir

项目的根目录下有一个 `harmony-configs` 目录，每当执行跟鸿蒙相关的操作时，HBuilderX 都会检查这个目录，如果目录不存在则会自动创建。
HBuilderX 早期版本所创建目录初始会存在几个常用的配置文件，4.36+ 版本该目录初始为空。

在执行运行或者发行到鸿蒙的操作过程中，HBuilderX 会根据内置模板生成一个鸿蒙工程目录（一般在 `unpackage` 目录下游），然后把 `harmony-configs` 目录下的所有内容都原样覆盖过去，
然后再调用鸿蒙的工具链进行编译打包等操作。

所以，`harmony-configs` 目录中的所有文件最终都会原样进入鸿蒙工程目录参与项目构建，所有需要对鸿蒙工程的定制化配置都可以写在这个目录下。

**注意**：在 `manifest.json` 支持的鸿蒙相关的配置项将具有更高的优先级。

**注意**：`harmony-configs` 目录下应该**仅放置必要的文件**，多余的文件有可能对鸿蒙工具链的执行产生意外的干扰，导致项目无法正常编译打包。

**注意**：当升级 HBuilderX 到新版本之后，由于其内置的鸿蒙工程模板有可能调整，导致与旧版本的配置文件产生不兼容的情况，所以如果以前正常的项目在升级后出现打包错误的话，
建议清空 `harmony-configs` 目录的原有内容（注意做好备份），再删除 `unpackage` 目录，重新运行之后再按需要逐步恢复 `harmony-configs` 里面应有的配置。

关于 `harmony-configs` 目录的使用要遵守鸿蒙的技术规范，具体可参考 [鸿蒙官方文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/application-configuration-file-stage-V5)

经常会用到的配置文件有：

- `harmony-configs/build-profile.json5`

    其中的 `app.signingConfigs` 用于设置数字签名资料，参见 [证书签名配置指南](#signing)

- `harmony-configs/entry/src/main/module.json5`

    修改其中的 `module.requestPermissions` 来设置运行权限，参见 [权限配置指南](#permission)

- `harmony-configs/AppScrope/app.json5`

    其中的 `app.bundleName` 用于设置应用包名。
    HX 4.31+ 已经支持在项目的 `manifest.json` 里面以图形界面修改应用包名，如果在那里做了设置，将优先于这里的设置。

    其中的 `app.versionName` 和 `app.versionCode` 用于设置应用版本名称和版本号。
    HX 4.43+ 已经支持使用项目的 `manifest.json` 里面的应用版本名称和版本号，将优先于这里的设置。

    一般而言，新版本已经不再需要 `harmony-configs/AppScrope/app.json5` 文件了。

## 注意事项@tips

1. 移植已有的 uni-app 项目源码时，如有其他 npm 依赖，请自行安装
2. 现阶段条件编译仅 APP-HARMONY、APP 可以命中鸿蒙平台
3. HBuilderX 4.27 以前的版本，在 HBuilderX 里运行后，需要再去鸿蒙 DevEco Studio 里运行；在 HBuilderX 中改动源码后，需要在 DevEco Studio 内点重新运行才能生效
4. 如果模拟器白屏了，尝试重启软件 DevEco Studio，再重启项目
5. 如果模拟器无法连接了，尝试重启电脑

## 常见问题@question

### 如何修改应用名称、版本、图标、权限等信息@q1

manifest.json 里面已经支持一些应用配置项，未直接支持的可以通过 `harmony-configs` 来设置，详情参见 [更多配置指南](#configs)。

同时可以参考鸿蒙官方文档：[应用/组件级配置](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/application-component-configuration-stage-V5)

### 应用图标资源规范@q2

为保证图标在系统内显示的一致性，应用预置的图标资源应满足以下要素：

- 图标资源必须为分层资源（一张前景图和一张背景图）
- 图标资源尺寸必须为1024*1024px
- 图标资源必须为为正方形图像，系统会为对应场景自动生成遮罩裁切

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/b0a3c063-02c4-47f3-a23e-5d04ad5c4293.png)#{.zooming style="max-height:200px"}

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

HBuilderX 4.27 以前的版本需要在 DevEco Studio 中运行由 uni-app 项目生成的鸿蒙工程，虽然鸿蒙官方文档提供了如何开启热重载，详见[文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-hot-reload-0000001527628941-V5)，
但目前只能针对 ets 文件的修改进行热更，还无法针对 uni-app 打包的 js 文件进行热更。

HBuilderX 4.27+ 支持直接运行到鸿蒙设备，修改源代码之后需重新调用鸿蒙工具链编译打包，并重新安装到鸿蒙设备上运行，不支持热重载。

HBuilderX 4.41+ 支持热重载，但跟具体修改的代码文件有关，如果进行了无法热重载的修改，会自动重新安装整个应用并重新运行。

### 如何查看console打印的日志@q5

运行到鸿蒙时，在 uni-app 页面通过 console.log 打印日志可以直接在 HBuilderX 查看。

HBuilderX 4.41+ 在真机运行时需要连接到与主机电脑相同的局域网才能正确接收到日志。

注意：在 UTS 代码里面打印对象或数组时，需要 `JSON.stringify` 才能正确显示内容，如 `console.log("obj", JSON.stringify(obj))`

### 运行到鸿蒙时不显示日志@no-log-output

HBuilderX 早期版本使用鸿蒙工具链中的 hilog 来收集日志并显示，可能因为设备连接问题或者鸿蒙系统版本升级调整等原因导致日志收集不到。

HBuilderX 4.41+ 在真机运行时需要连接到与主机电脑相同的局域网才能正确接收到日志。

另外，HBuilderX 4.41+ 在控制台工具条中增加了“显示原生日志”的选项，开启后可以看到更多的日志内容。

作为一个应急处理方案，可以打开一个命令行窗口，执行命令 `hdc shell hilog -T JSAPP` 来直接从连接的鸿蒙设备查看日志。

### 运行出现白屏或闪退怎么解决?@q6

如果配置了 `harmony-configs/build-profile.json5` 文件，请确认里面的 `app.products`设置了 `"useNormalizedOHMUrl": true`。

如果不是上述的原因，最常见的情况就是使用了不支持的组件或者 API，请逐个排查所使用的组件和 API 是否已经兼容了鸿蒙平台，
可以尝试对 `pages.json` 进行代码二分法排查（删除一半页面如果正常了代表被删除的那一半页面中有造成白屏或闪退的页面）。

### 模拟器已启动，但无法连接?@q7

确保[签名证书资料](#signing)没有问题的情况下，尝试重启电脑

### 报启动鸿蒙失败，请手动启动鸿蒙@q8

此问题仅会在 HBuilderX 4.27 以前的版本存在，因为编译 uni-app 代码完成之后需要调起 DevEco Studio 来运行鸿蒙工程。

请用下面的方法确保设置的 DevEco Studio 安装路径是正确的，重新设置之后请重启 HBuilderX。

**Windows系统**

1. 确保路径是正确的

Windows系统快速复制路径方法

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1721024978448hkblu60vadg.png)#{.zooming style="max-height:200px"}

注意：复制后的 `\` 要改成 `/`

2. 如果步骤1操作完还是不行，请尝试

原路径后面添加 `/bin/devecostudio64.exe`，然后重启 HBuilderX

**Mac系统**

1. 确保路径是正确的

Mac系统快速复制路径方法

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/ee1f4941-3736-4df8-a35c-bb3929fb124f.png)#{.zooming style="max-height:200px"}

2. 如果步骤1操作完还是不行，请尝试

原路径后面添加 `/Contents/MacOS/devecostudio`，然后重启 HBuilderX

### 通过 app-plus:titleNView 配置页面右上角按钮未生效@q9

当前导航栏未支持，可以尝试关闭原生导航栏，使用自己的自定义导航栏组件实现。

### 鸿蒙支持uniPush推送吗?@q10

HBuilderX 4.31起支持uniPush推送，具体配置请参考[文档](https://uniapp.dcloud.net.cn/unipush-v2.html)

### release模式进入使用了组合式api的页面报错`Cannot read property route of undefined`@q11

此问题由于arkTs的混淆Bug引发，即使进入到一个空的组合式api页面也会出现这个报错，已反馈给鸿蒙团队处理。

临时解决方案：在鸿蒙项目`entry/obfuscation-rules.txt`文件中增加一行`-disable-obfuscation`来禁用混淆。

### 在部分设备的模拟器上无法运行，报错`依赖包与运行设备不兼容 Install Failed: error: failed to install bundle`@install-parse-native-so-failed

> 此章节仅针对HBuilderX 4.29及之前版本，4.31及之后的版本暂不支持在x86_64平台的模拟器上运行。

在 x86_64 平台（绝大多数 Windows 系统和部分 MacOS 系统）上使用【运行到鸿蒙】并选择了模拟器作为运行设备的时候，可能会遇到这个报错。

这是由于 HBuilderX 4.29 及之前版本在默认配置里面依赖了支付宝SDK，而这个包不支持运行在 x86_64 平台的模拟器上，所以在打包后安装到模拟器设备时会报错。

出现这种情况时，如果并不需要这个依赖，可以修改 `harmony-configs/oh-package.json5` 文件，在 `dependencies` 里面删除 `@cashier_alipay/cashiersdk` 就行了；
如果确实需要，那就只能改用真机设备来运行了。

### harmony应用怎样调试？@q13

目前 HBuilderX 尚不支持断点方式对运行于鸿蒙设备上的 uni-app 应用进行调试，必要时可借助 DevEco Studio 在鸿蒙工程层面进行调试。

HBuilderX 4.27+ 开始不再自动调起 DevEco Studio，需要手动调起 DevEco Studio 打开由 HBuilderX 自动生成的鸿蒙工程目录，
该目录可以在 `unpackage` 目录下找到，一般是在类似 `unpackage/debug/app-harmony-xxx` 的位置，如果是 cli 项目的话则是在 `dist` 目录下。

可以参考鸿蒙的文档 [使用DevTools工具调试前端页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/web-debugging-with-devtools-V5) 进行处理。

在 uni-app 的开发模式 `setWebDebuggingAccess` 会自动开启，此步骤可以跳过。

### Windows 系统中如何使用模拟器@q14

首先，HBuilderX 4.31+ 构建的鸿蒙运行包依赖于运行设备中的 JSVM，由于兼容性限制目前尚不能运行于 x86_64 平台的模拟器，所以绝大部分 Windows 系统用户无法使用鸿蒙模拟器。

**在满足兼容性要求的前提下，如果要在 Windows 系统如使用模拟器则需要开启以下功能**

打开控制面板 - 程序与功能 - 开启以下功能

1. Hyper-V
2. Windows 虚拟机监控程序平台
3. 虚拟机平台

注意: 需要win10专业版或win11专业版才能开启以上功能，家庭版需先升级成专业版或企业版

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085210915b1knhu7l3u8.png)#{.zooming style="max-height:200px"}

### cli 项目运行到鸿蒙时运行起来的是空项目@cli-compiler-outdated

cli 项目的 uni-app 编译器是跟随项目配置的，跟 HBuilderX 的版本并不直接相关，如果是以前创建的 cli 项目，可能因为关联的编译器版本太低而出现此现象。

建议升级 cli 项目的编译器版本，参考 [更新编译器的版本](https://uniapp.dcloud.net.cn/quickstart-cli.html#cliversion)

### 点击“运行到鸿蒙”之后没有反应，或者提示打包失败，没有其它提示@no-harmony-build

删除 `harmony-configs` 目录（如果目录里有自己修改过的内容请先做好备份），再删除 `unpackage` 目录，然后重试。

### 报错如 `EPERM: operation not permitted, copyfile ...`@file-readonly

源代码中有资源文件（比如图片）带有只读属性，导致再次打包的时候鸿蒙工具链删除失败报错。找到有问题的文件去掉只读属性，再删除 `unpackage` 目录，重试即可。

### 报错如 `hvigor ERROR: Tools execution failed`@tools-execution-failed

HBuilderX 在打包的时候会调用鸿蒙的工具链，其中用到了 java 程序，这种问题一般是因为 java 程序版本不匹配导致的。
早期版本是优先使用环境变量 PATH 里面能找到的 java 程序，临时的解决办法是在 PATH 环境变量里去掉 java 程序的路径，再重新启动 HBuilderX。
HBuilderX 4.31+ 会优先使用鸿蒙工具链自带的 java 程序，就不会是这个原因了。

检查电脑上安装的 java 版本，可能是版本过低。建议卸载 java 或者在 PATH 环境变量里去掉 java 的路径。
新版本（4.31+）已调整为优先使用鸿蒙工具链自带的 java 就不会受这个影响了。

### 报错如 `Unexpected token (Note that you need plugins to import files that are not JavaScript)` 或 `Please make sure that the splash page has one and only one '@Entry' decorator`@long-path

鸿蒙工具链运行时要求所涉及到的文件的路径总长度不能超过 255 个字符。请尝试把 uni-app 项目的目录位置改到一个比较短的路径下，可能会避开这个问题。

### 报错如 `...HBuilderX\plugins\node\npm.cmd install,pnpm execute failed` 或 `network request to https://registry.npmjs.org/pnpm failed`@install-pnpm-failed

鸿蒙工具链在首次运行的时候需要安装一些依赖的工具，且此操作只能在 DevEco Studio 中才能正确执行，方法是在 DevEco Studio 里面随便创建一个工程然后构建运行一下即可。

如果在 DevEco Studio 里面也报了同样的错误，则可以尝试自行设置 npm 的镜像源来解决问题，比如设置环境变量 `NPM_CONFIG_REGISTRY=https://registry.npmmirror.com` 使用境内的镜像源。

### 报错如 `hvigor ERROR: Schema validate failed`@schema-validate-failed

可能是使用的 DevEco Studio 版本过低，要求 5.0.3.800+。

也可能是自行配置的 `harmony-configs/build-profile.json5` 文件里面有错误，导致 DevEco Studio 无法正确解析。
请参考 [文档](#config-dir) 的方法确保配置正确。

### 报错 `运行所需的权限没有签名授权`@permissions-failed

参考 [权限配置指南](#permission)

这是由于默认配置里面声明申请了一些权限，其中包含受限权限（需要白名单授权的 ACL 权限），这就要求安装包必须用具备足够权限授权的数字证书进行签名，否则无法安装到设备上。

目前已知的 ACL 权限包括：

  - `ohos.permission.WRITE_IMAGEVIDEO`
  - `ohos.permission.WRITE_CONTACTS`
  - `ohos.permission.READ_PASTEBOARD`

如果业务代码里面并没有实际使用到这些权限，一个简单的办法就是修改 `harmony-configs/entry/src/main/module.json5` 文件，
删除 `module.requestPermissions` 数组里面涉及这三项的内容，重新运行即可。
**注：从 HX 4.31+ 开始默认配置中已经不再包含 ACL 权限，如果需要的话请自行修改 `harmony-configs/entry/src/main/module.json5` 文件添加权限声明。**

如果确实需要这里的某些权限，那就需要申请一个调试证书，并配置到 `harmony-configs/build-profile.json5` 文件的 `app.signingConfigs` 中。
具体请参考 [调试用的数字签名证书](#signing-debug)

### 报错 `配置的 bundleName 与签名证书不符`@bundle-name-mismatch

如果配置了签名证书，打包之后会进行签名，但如果项目中配置的 `bundleName` 与签名证书申请时所填报的 `bundleName` 不符，就会报这个错。
可以修改 `harmony-configs/AppScrope/app.json5` 文件中 `app.bundleName` 为签名证书申请时所填的应用包名，
也可以根据配置的 `bundleName` 重新申请证书。

**注：从 HX 4.31+ 开始应该在项目的 manifest.json 文件的【鸿蒙App配置】中设置【包名】。**

### 报错 `签名验证失败`@signature-verification-failed

当运行到鸿蒙时，在把打包后的 `.hap` 安装到设备上时，可能会遇到这个报错。
一个常见的原因是当前使用的设备没有添加到签名用的 profile 文件中，要解决这个问题，
首先要 [注册调试设备](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-device-0000001946142249)，
然后 [申请调试Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugprofile-0000001914423102)
或修改已有的 profile 文件并重新下载。

### 报错 `没有签名无法安装`@no-signature-file

当运行到鸿蒙时，如果选择真机为运行设备，则必须配置好数字签名证书，否则无法安装到真机上。

### 报错 `签名不一致`@sign-info-inconsistent

当运行到鸿蒙时，所使用的签名证书与鸿蒙设备中已安装的应用不一致，此时无法覆盖安装。请先手动删除已安装的应用。

### 报错 `运行设备未信任授权给调试设备`@device-unauthorized

当运行到鸿蒙真机时，需要在手机上信任授权给调试设备（当前运行 HBuilderX 的电脑），如果没有信任授权，则电脑无法安装应用到手机上，就会报这个错。

重新连接手机到电脑，在弹出提示框的时候选择信任并授权。必要时可以进入手机的【开发者选项】重新设置。

### 报错 `安装超时，设备没有响应`@install-timeout

有记录显示，在 Windows 系统下，运行到鸿蒙时如果选择模拟器作为运行设备，可能会出现超时的情况，原因尚不清楚，有可能与模拟器系统里存在以前安装的相同包名的应用有关，
如遇这种情况，可以尝试手工在模拟器里面删除旧的应用然后重试。

### 报错 `检测到App真机运行插件出现破损`@launcher-damaged

由于未知原因导致【App真机运行】插件出现破损，需要重新安装。
请在 HX 主菜单中选择【工具>插件安装】，找到【App真机运行】插件并点击卸载，然后在主菜单中选择【运行>运行到手机或模拟器>下载真机运行插件】重新安装。
如果安装过【App真机运行(uni-app x)】插件，需要先卸载掉，否则无法卸载【App真机运行】插件。

### 报错 `未正确配置鸿蒙应用的包名`@bundlename-incorrect

应该在 `manifest.json` 的【鸿蒙配置】中设置正确的包名，具体要求请参考 [配置应用包名](https://developer.huawei.com/consumer/cn/doc/app/agc-help-createharmonyapp-0000001945392297)

### HBuilder X 升级至 `4.51` 后报错 `owns a higher api version or a higher sdkReleaseType compared to current compilation process.`

需要在工程级的 `build-profile.json5` 的 `products` 字段（如果有多项都要配置）中配置 `compatibleSdkVersionStage: "beta6"` 后重新运行 [鸿蒙文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-hvigor-build-profile-V5)

### 报错 `没有连接到正在运行的应用，热更新失败，请尝试重新运行以建立连接`@hmr-failed

在把 uni-app 项目运行到鸿蒙设备上以后，修改代码后会触发差量编译，然后会对鸿蒙设备中运行的应用执行热更新操作。在某些情况下有可能出现此种报错。

首先确认在鸿蒙设备里确实已经运行了应用，然后尝试在 HBuilderX 里面重新运行到鸿蒙看是否能解决问题。

在某些电脑环境下，存在一种偶发的情况也会导致出现此种报错，原因尚不完全清楚，重启 hdc server 可以解决问题。
hdc 是安装 DevEco Studio 时自带的鸿蒙工具链中的一个重要工具，正常情况下它的安装位置在：

- Windows 环境下为 `<DevEco Studio安装目录>\sdk\default\openharmony\toolchains\hdc.exe`
- Mac 环境下为 `<DevEco Studio安装目录>/Contents/sdk/default/openharmony/toolchains/hdc`

在命令行中执行 `hdc kill -r` 命令以重启 hdc server，然后在 HBuilderX 里面重新运行到鸿蒙即可。
