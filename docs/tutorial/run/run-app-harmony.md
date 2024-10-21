# 鸿蒙的运行和发行功能

## 准备工作

HX 里面有两个专门与鸿蒙相关的功能入口：

1. 【运行】菜单里的【运行到鸿蒙】
2. 【发行】菜单里的【App-Harmony-本地打包】

点击这些功能时，HX 首先会检查 `Settings.json` 里面配置的 `harmony.devTools.path`（应该是指向 DevEco Studio 或 Command Line Tools 的安装目录），
如果尚未配置，HX 会尝试自动检测电脑上安装的 DevEco Studio 并写入这个配置。

只有正确配置了这个选项，后续的功能才能正常执行。

## 执行过程

在一个 uni-app 项目中点击鸿蒙的运行或发行菜单后，HX 在完成对 uni-app 项目的编译后，会根据内置的鸿蒙工程模板在 `unpackage` 目录下游准备好一个鸿蒙工程目录，
并把 `harmony-configs` 目录下的所有文件覆盖到这里，再把编译产物按要求组装到这里，然后再调用鸿蒙工具链对这个鸿蒙工程目录进行构建、打包、签名等操作。
如果是运行的话，会把生成的 `.hap` 安装到选定的鸿蒙设备上并启动运行，如果是发行则最终生成 `.app` 安装包。

## 配置@configs

项目的根目录下有一个 `harmony-configs` 目录，每当执行跟鸿蒙相关的操作时，HX 都会检查这个目录，如果目录不存在则会自动创建。
新版本（4.29+）还会检查与 HX 当前版本的内置鸿蒙工程模板是否匹配，如果版本不匹配（比如 HX 升级到新版本时）则会提示用户把需要更新的内容合并到目录中。

所有属于鸿蒙工程的配置调整，都可以写在 `harmony-configs` 目录下，具体内容可以参照鸿蒙的相关文档。其中常用内容有：

- 应用包名

    在 `harmony-configs/AppScrope/app.json5` 中修改 `app.bundleName`

    注意：HX 4.31+ 同时支持在项目的 `manifest.json` 里面以图形界面修改鸿蒙配置（包括包名），如果在那里做了设置，将优先于 `harmony-configs/AppScrope/app.json5` 里面的 `app.bundleName`。

- 运行权限

    在 `harmony-configs/entry/src/main/module.json5` 中修改 `module.requestPermissions`

- 数字签名证书相关信息

    在 `harmony-configs/build-profile.json5` 中修改 `app.signingConfigs`

    具体操作方法请参考 [关于数字签名证书的配置](#signing)

## 调试运行时可能遇到的问题及处理方法

### 报错 `依赖包与运行设备不兼容`@install-parse-native-so-failed

在 x86_64 平台（绝大多数 Windows 系统和部分 MacOS 系统）上使用【运行到鸿蒙】并选择了模拟器作为运行设备的时候，可能会遇到这个报错。
这是由于默认配置里面依赖了支付宝SDK，而这个包不支持运行在 x86_64 平台的模拟器上，所以在打包后安装到模拟器设备时会报错。
出现这种情况时，如果并不需要这个依赖，可以修改 `harmony-configs/oh-package.json5` 文件，在 `dependencies` 里面删除 `@cashier_alipay/cashiersdk` 就行了；
如果确实需要，那就只能改用真机设备来运行了。

### 报错 `运行所需的权限没有签名授权`@permissions-failed

这是由于默认配置里面声明申请了一些权限，其中包含受限权限（需要白名单授权的 ACL 权限），这就要求安装包必须用具备足够权限授权的数字证书进行签名，否则无法安装到设备上。

- `ohos.permission.WRITE_IMAGEVIDEO`
- `ohos.permission.WRITE_CONTACTS`
- `ohos.permission.READ_PASTEBOARD`

如果业务代码里面并没有实际使用到这些权限，一个简单的办法就是修改 `harmony-configs/entry/src/main/module.json5` 文件，
删除 `module.requestPermissions` 数组里面涉及这三项的内容，重新运行即可：

如果确实需要这里的某些权限，那就需要申请一个调试证书，并配置到 `harmony-configs/build-profile.json5` 文件的 `app.signingConfigs` 中。
这里要注意，如果是通过 DevEco Studio 来自动申请证书（开启 `Automatically generate signature` 选项），拿到的调试证书会自动支持 ACL 权限；
如果是手动申请调试证书的话，需要在添加 profile 的时候勾选相应的受限权限。

### 报错 `配置的 bundleName 与签名证书不符`@bundle-name-mismatch

如果配置了签名证书，打包之后会进行签名，但如果项目中配置的 `bundleName` 与签名证书申请时所填报的 `bundleName` 不符，就会报这个错。
可以修改 `harmony-configs/AppScrope/app.json5` 文件中 `app.bundleName` 为签名证书申请时所填的应用包名，
也可以根据配置的 `bundleName` 重新申请证书。

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

### 报错 `安装超时，设备没有响应`@install-timeout

有记录显示，在 Windows 系统下，运行到鸿蒙时如果选择模拟器作为运行设备，可能会出现超时的情况，原因尚不清楚，有可能与模拟器系统里存在以前安装的相同包名的应用有关，
如遇这种情况，可以尝试手工在模拟器里面删除旧的应用然后重试。

## 关于数字签名证书的配置@signing

### 调试用的数字签名证书@signing-debug

参考 [申请调试证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugcert-0000001914263178)

在使用模拟器进行调试运行的时候，一般是不需要做数字签名的，但如果是用真机进行调试运行，或者业务代码用到了 ACL 权限，那么就需要申请并配置一个**调试证书**用于数字签名。

数字签名证书需要配置到 `harmony-configs/build-profile.json5` 中，这个文件等同于一个普通的鸿蒙工程中对应的文件。

为了便于操作，可以用 DevEco Studio 创建一个简单的鸿蒙工程（注意设置好正确的应用包名 `bundleName`），在里面完成申请证书的操作，
具体方法可参考 [自动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-signing-V5#section18815157237)，
然后把 `build-profile.json5` 文件中 `app.signingConfigs` 的内容复制到 `harmony-configs/build-profile.json5` 中。

通过 DevEco Studio 申请得到的证书，缺省会保存到电脑的用户目录下，在 Windows 系统中一般是 `%USERPROFILE%\.ohos\config`，在 Mac 系统中一般是 `~/.ohos/config`。
配置信息中包含的三个文件缺省都是采用绝对路径来表示，也可以把这些文件移到 `harmony-configs` 目录下，这样就可以使用相对路径来表示，相对于 `harmony-configs` 目录。
如果要移动证书文件的位置，需注意跟这三个文件一起的还有一个名为 `material` 的目录，也要一起移动。

### 发布用的数字签名证书@signing-release

参考 [申请发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-releasecert-0000001946273961)

在发行安装包的时候，一定需要配置一个**发布证书**，否则只能拿到一个未签名的安装包，是无法实际使用的。

在 `app.signingConfigs` 中配置发布用的证书时一定要注意把 `name` 属性设置为 `"release"`，如果设置为 `"default"` 的话将仅用于调试运行。

### 手动申请证书@signing-manual

如果是手动申请的证书（发布证书只能手动申请），也需要在 DevEco Studio 里面配置给一个鸿蒙工程，这样才能得到一个完整的 `signingConfigs` 配置项（里面的 `storePassword` 和 `keyPassword`
是加密格式的，并不是手动申请证书时填写的密码原文），然后复制到 `harmony-configs/build-profile.json5` 中。
