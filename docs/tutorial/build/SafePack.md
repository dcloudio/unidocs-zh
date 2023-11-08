# 安心打包使用指南
# Safe packing guide

<!--
keyword: 安心打包
keyword: Pack with peace of mind
-->

过去，App云端打包时需要将应用代码、打包证书等提交到DCloud云端打包机，在云端打包机的原生开发环境中生成安装包apk/ipa。
In the past, when an App was packaged in the cloud, it was necessary to submit the application code, packaging certificate, etc. to the DCloud cloud packager, and the installation package apk/ipa was generated in the cloud packager's native development environment.
DCloud云端服务器虽然不会保存开发者应用代码和证书等信息，但开发者可能还是不放心，或者担心在网络传输过程中可能存在拦截泄漏的风险。
Although the DCloud cloud server does not save the developer's application code and certificate and other information, the developer may still be worried or worry about the risk of interception and leakage during network transmission.

而离线打包，不但不方便，还有2个重要功能无法使用：
Offline packaging is not only inconvenient, but also has two important functions that cannot be used:
1. 原生混淆，保护js代码（因为秘钥的安全问题，离线打包无法使用）
1. Native obfuscation to protect js code (because of the security of the secret key, offline packaging cannot be used)
2. 插件市场的付费原生插件（因为插件版权问题，离线打包无法使用）
2. Paid native plug-ins in the plug-in market (due to plug-in copyright issues, offline packaging cannot be used)

> HBuilderX2.9.9版本新增Android平台**安心打包**功能，不再提交应用代码及打包证书到云端服务器，同时也减轻云端打包机压力，缩短高峰期云端打包等待时间。
> HBuilderX 2.9.9 version adds the Android platform **safe packaging** function, no longer submit application code and packaging certificate to the cloud server, but also reduce the pressure on the cloud packager and shorten the cloud packaging waiting time during peak hours.
> HBuilderX3.0.7版本新增iOS平台支持**安心打包**功能（仅支持MacOS）
> HBuilderX3.0.7 version adds iOS platform support **safe packaging** function (only supports MacOS)


## 安心打包原理
## Safe packaging principle

- 首次打包
- first packing
  1. HBuilderX会提交App的模块配置信息到云端，在云端打包机生成原生代码包（不包含应用代码、证书信息）
  1. HBuilderX will submit the module configuration information of the App to the cloud, and generate the native code package (excluding application code and certificate information) in the cloud packager
  2. HBuilderX下载原生代码包，在本地电脑上将应用代码添加到原生代码包中，生成未签名安装包
  2. HBuilderX downloads the native code package, adds the application code to the native code package on the local computer, and generates an unsigned installation package
  3. 缓存原生代码包，用于下次打包复用
  3. Cache the native code package for the next package reuse
  4. 在本地电脑上使用打包证书对未签名安装包进行签名操作，生成安装包
  4. Use the packaging certificate to sign the unsigned installation package on the local computer and generate the installation package
- 非首次打包
- Not first time packing
  1. HBuilderX判断缓存的原生代码包是否可以复用，如果没有修改App模块配置或影响原生代码包配置操作继续下一步，否则转`首次打包`流程，以下情况也会触发`首次打包`流程：
  1. HBuilderX determines whether the cached native code package can be reused. If the App module configuration is not modified or the native code package configuration operation is not affected, continue to the next step. Otherwise, go to the `first package` process. The following conditions will also trigger the `first package` process:
    + 使用了uni原生插件，本地无法判断原生插件是否更新了，因此项目中只要包含uni原生插件都会走`首次打包`流程
    + The uni native plugin is used, and it is impossible to determine whether the native plugin has been updated locally, so as long as the uni native plugin is included in the project, it will go through the `first packaging` process
    + HBuilderX更新，本地缓存原生代码包需要更新，需要走`首次打包`流程生成新版本原生代码包
    + HBuilderX update, the local cache native code package needs to be updated, you need to go through the `first packaging` process to generate a new version of the native code package
  2. 将修改后的应用代码添加到原生代码包中，生成未签名安装包
  2. Add the modified application code to the native code package to generate an unsigned installation package
  3. 在本地电脑上使用打包证书对未签名安装包进行签名操作，生成安装包
  3. Use the packaging certificate to sign the unsigned installation package on the local computer to generate the installation package

因为大多数打包，并不改动原生部分（主要是manifest.json），只修改前端代码。此时将无需从云端打包机下载原生包，打包速度会非常快。
Because most packages do not change the native part (mainly manifest.json), only the front-end code is modified. At this point, there is no need to download the native package from the cloud packager, and the packaging speed will be very fast.

## 安心打包优势
## Peace of mind packaging advantages

- 更安全：打包时不提交应用代码、证书等信息
- More secure: do not submit application code, certificate and other information when packaging
- 更快速：非首次打包时不用提交云端打包机排队等待，本地直接出包
- Faster: no need to submit the cloud packer to wait in line when not packing for the first time, and the package will be delivered directly locally
- 省流量：减少了打包时提交打包资源，非首次打包时不用下载原生代码包
- Save traffic: reduce the submission of packaging resources when packaging, and do not need to download the native code package when not packaging for the first time
- 更便宜：除非使用了体积很大的本地原生插件，否则将难以突破40M的免费打包体积阀值。开发者和DCloud的成本双下降
- Cheaper: Unless you use a large native plug-in, it will be difficult to break the 40M free package size threshold. Costs for developers and DCloud drop

## 使用安心打包
## Pack with peace of mind
新版本HBuilderX云端打包时无需额外操作，默认会勾选“安心打包”，如下图所示：
The new version of HBuilderX does not require additional operations when packaging in the cloud. By default, "Packaging with peace of mind" will be checked, as shown in the following figure:

![](https://hx.dcloud.net.cn/static/snapshots/app/pack/pack_app_safe.png)

如果没有安装安心打包插件，会弹出以下提示框，点击“安装”继续
If the Anxin package plug-in is not installed, the following prompt box will pop up, click "Install" to continue

![](https://hx.dcloud.net.cn/static/snapshots/app/pack/pack_app_safe_box.png)

插件安装完成后需重新点击“打包”按钮提交打包
After the plugin is installed, you need to click the "Package" button again to submit the package.

**打包完成后自动保存到项目的"unpackage/release/apk/"目录**
**Automatically save to the "unpackage/release/apk/" directory of the project after packaging**

如果清空了这个目录，那么下次打包将执行首次打包逻辑。
If this directory is cleared, the next packaging will execute the first packaging logic.

## 注意事项
## Precautions
- Windows环境：仅Android平台支持安心打包，iOS暂不支持；MacOSX环境：Android和ios都支持安心打包。
- Windows environment: only Android platform supports peace of mind packaging, iOS does not support it; MacOSX environment: Android and ios support peace of mind packaging.
- 自定义调试基座不支持安心打包
- Custom debug bases do not support peace of mind packaging
- 使用DCloud老版证书不支持安心打包
- Using DCloud old certificate does not support peace of mind packaging
- 使用原生混淆时，配置的待加密js文件需要提交到云端打包机（打包完成后自动清除这些js）
- When using native obfuscation, the configured js files to be encrypted need to be submitted to the cloud packager (these js files are automatically cleared after the package is completed)
- 安心打包并非纯离线打包，虽然证书和前端代码不再提交云端打包机，但项目的manifest中的模块配置、本地原生插件、原生混淆配置的前端文件，仍需提交才能出包
- Anxin packaging is not purely offline packaging. Although the certificate and front-end code are no longer submitted to the cloud packager, the module configuration, local native plug-ins, and front-end files of native obfuscation configuration in the project's manifest still need to be submitted before the package can be released.
- iOS平台安心打包无法兼容swift，如果uni原生插件使用swift开发，提交appstore提示“ITMS-90426: Invalid Swift Support - The SwiftSupport folder is missing. Rebuild your app using the current public (GM) version of Xcode and resubmit it.”错误时，请改用传统打包
- Anxin packaging for iOS platform is not compatible with swift. If the uni native plugin is developed with swift, submit the appstore prompt "ITMS-90426: Invalid Swift Support - The SwiftSupport folder is missing. Rebuild your app using the current public (GM) version of Xcode and resubmit it." error, use traditional packaging instead

## FAQ
- 安心打包是否有免费打包次数限制？
- Is there a limit to the number of free packages that can be packaged with peace of mind?
  打包次数限制是为了避免部分开发者过多占用云端打包资源而增加的限流措施，在使用`安心打包`时，由`非首次打包`机制生成的安装包由于不占用云端打包资源，所以不会占用**云端免费打包次数**，也可以理解为`安心打包`的`非首次打包`无打包次数限制。
  The limit on the number of packages is a current-limiting measure to prevent some developers from occupying too many cloud packaging resources. When using 'Safe Packaging', the installation package generated by the 'non-first-time packaging' mechanism does not occupy cloud packaging resources, so it will not be used. It will occupy the **free package times in the cloud**, which can also be understood as the `non-first package` of `safety package` without the limit on the number of packages.


## `Android 安心打包问题汇总`
## `Summary of Android peace of mind packaging issues`

### Q1: Windows：控制台提示打包成功，相应目录下没有apk文件
### Q1: Windows: The console prompts that the packaging is successful, and there is no apk file in the corresponding directory

**问题：** 某些用户反馈，windows电脑，控制台提示Android安心打包成功，进入相应目录(unpackage/release/apk)，目录下找不到apk文件
**Question:** Some users have reported that the Windows computer and the console prompt that Android Anxin has been packaged successfully, enter the corresponding directory (unpackage/release/apk), and the apk file cannot be found in the directory.
**原因** ：unpackage/release/apk目录，没有写入权限，移动apk文件失败了。
**Cause**: Unpackage/release/apk directory, no write permission, failed to move apk file.

**解决方法**
**Solution:**
1. 赋予unpackage/release/apk目录写入权限
1. Grant write permission to the unpackage/release/apk directory
2. 重启电脑试试
2. Restart the computer and try

### Q2: fakeLogOpen(/dev/log_crash) failed

某些情况下，首次提交安心打包，您可能会遇到下列错误：
In some cases, when submitting a peace of mind package for the first time, you may encounter the following errors:
```
[Error] W: fakeLogOpen(/dev/log_crash) failed
[Error] W: fakeLogOpen(/dev/log_stats) failed
[Error] W: fakeLogOpen(/dev/log_stats) failed
[Info] I: Copying libs... (/lib)
[Info] I: Building apk file...
[Info] I: Copying unknown files/dir...
[Info] I: Built apk...
[Error] Apk tool compile package to apk failed
[Info] 制作结果：Failed. Reason:
```

** 解决方法：** 重新提交安心打包
** Workaround: ** Resubmit peace of mind

### Q3: 启动图.9.png格式问题
### Q3: Problems with startup image.9.png format

错误日志中，出现如下日志：
In the error log, the following log appears:
```
[Error] W: ERROR: 9-patch image C:\xxxxx\res\drawable-hdpi\splash.9.png malformed.
[Error] W: No marked region found along edge.
[Error] W: Found along top edge.
```

** 原因：**  ` 启动图xxx.9.png`不是`有效9.png`图片，格式错误导致。
** Reason: ** `Startup image xxx.9.png` is not a `valid 9.png` image, which is caused by a format error.
** 解决方法：** 重新生成有效的`9.png图片`
** Workaround: ** Regenerate a valid `9.png image`

** 备注：**  部分用户可能会提问，同样.9.png项目，为什么传统打包成功，安心打包失败呢？因为：安心打包校验机制更为严格。
** Remarks: ** Some users may ask questions. For the same .9.png project, why does the traditional package succeed and the peace package fails? Because: Anxin packaging and verification mechanism is more strict.
** 文档：**  [.9.png图片相关文档](https://ask.dcloud.net.cn/article/35527)
** Documents:** [.9.png image related documents](https://ask.dcloud.net.cn/article/35527)

### Q4: Error occurred during initialization of VM

错误日志中，出现如下日志：
In the error log, the following log appears:
```
[Info] Error occurred during initialization of VM
[Info] Could not reserve enough space for 1048576KB object heap
[Error] 制作结果：Failed.    Reason:
```
** 解决方法：**
** Solution:**
1. 找到安心打包插件(app-safe-pack)目录下app-safe-pack.ini文件
1. Find the app-safe-pack.ini file in the app-safe-pack directory
2. 将文件内容里-Xmx1024M修改为-Xmx512M
2. Change the file content from -Xmx1024M to -Xmx512M
3. 重新提交打包
3. Resubmit packaging

** 备注：**  HBuilderX 3.1.10及以上版本生效
** Remarks: ** HBuilderX 3.1.10 and above versions take effect

## `ios 安心打包问题汇总`
## `Summary of ios peace of mind packaging issues`

### Q1: 打包失败，签名失败errSecInternalComponent错误
### Q1: Packaging failed, signature failed errSecInternalComponent error

错误日志中，出现如下日志：
In the error log, the following log appears:
```
[Error] HBuilder.xcarchive/Payload/HBuilder.app: replacing existing signature
[Error] Warning: unable to build chain to self-signed root for signer  "xxxxxxxxxx“”
[Error] HBuilder.xcarchive/Payload/HBuilder.app: errSecInternalComponent
```

** 原因：**  可能是用户手动点击安装了证书导致打包签名失败。
**Cause:** It may be that the user manually clicks to install the certificate, which causes the package signature to fail.

** 解决方法：** 打开钥匙串访问删除相关用户手动安装的证书后重新打包（下图仅供参考，需开发者判断哪些证书是手动安装的证书）。
** Solution: ** Open Keychain Access, delete the certificates manually installed by relevant users, and then repackage them (the figure below is for reference only, and developers need to determine which certificates are manually installed certificates).

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/iossafepackcertinstall.jpeg)



## 安心打包问题反馈
## Feedback on packaging problems with peace of mind

如果您遇到安心打包问题，且无法解决，请加QQ群827137391。
If you encounter peace of mind packaging problems and cannot solve it, please add QQ group 827137391.

进群需要提供`操作系统`和`HBuilderX版本号`信息，提问请提交`错误日志`或`截图`。
To enter the group, you need to provide the information of `operating system` and `HBuilderX version number`. For questions, please submit `error log` or `screenshot`.

本群仅限反馈安心打包问题，请勿发布无关信息。
This group is only for feedback on peace of mind packaging issues, please do not publish irrelevant information.
