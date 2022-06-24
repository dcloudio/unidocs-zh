# 安心打包使用指南

<!--
keyword: 安心打包
-->

过去，App云端打包时需要将应用代码、打包证书等提交到DCloud云端打包机，在云端打包机的原生开发环境中生成安装包apk/ipa。
DCloud云端服务器虽然不会保存开发者应用代码和证书等信息，但开发者可能还是不放心，或者担心在网络传输过程中可能存在拦截泄漏的风险。

而离线打包，不但不方便，还有2个重要功能无法使用：
1. 原生混淆，保护js代码（因为秘钥的安全问题，离线打包无法使用）
2. 插件市场的付费原生插件（因为插件版权问题，离线打包无法使用）

> HBuilderX2.9.9版本新增Android平台**安心打包**功能，不再提交应用代码及打包证书到云端服务器，同时也减轻云端打包机压力，缩短高峰期云端打包等待时间。
> HBuilderX3.0.7版本新增iOS平台支持**安心打包**功能（仅支持MacOS）


## 安心打包原理

- 首次打包
  1. HBuilderX会提交App的模块配置信息到云端，在云端打包机生成原生代码包（不包含应用代码、证书信息）
  2. HBuilderX下载原生代码包，在本地电脑上将应用代码添加到原生代码包中，生成未签名安装包
  3. 缓存原生代码包，用于下次打包复用
  4. 在本地电脑上使用打包证书对未签名安装包进行签名操作，生成安装包
- 非首次打包
  1. HBuilderX判断缓存的原生代码包是否可以复用，如果没有修改App模块配置或影响原生代码包配置操作继续下一步，否则转`首次打包`流程，以下情况也会触发`首次打包`流程：
    + 使用了uni原生插件，本地无法判断原生插件是否更新了，因此项目中只要包含uni原生插件都会走`首次打包`流程
    + HBuilderX更新，本地缓存原生代码包需要更新，需要走`首次打包`流程生成新版本原生代码包
  2. 将修改后的应用代码添加到原生代码包中，生成未签名安装包
  3. 在本地电脑上使用打包证书对未签名安装包进行签名操作，生成安装包

因为大多数打包，并不改动原生部分（主要是manifest.json），只修改前端代码。此时将无需从云端打包机下载原生包，打包速度会非常快。

## 安心打包优势

- 更安全：打包时不提交应用代码、证书等信息
- 更快速：非首次打包时不用提交云端打包机排队等待，本地直接出包
- 省流量：减少了打包时提交打包资源，非首次打包时不用下载原生代码包
- 更便宜：除非使用了体积很大的本地原生插件，否则将难以突破40M的免费打包体积阀值。开发者和DCloud的成本双下降

## 使用安心打包
新版本HBuilderX云端打包时无需额外操作，默认会勾选“安心打包”，如下图所示：

![](https://hx.dcloud.net.cn/static/snapshots/app/pack/pack_app_safe.png)

如果没有安装安心打包插件，会弹出以下提示框，点击“安装”继续

![](https://hx.dcloud.net.cn/static/snapshots/app/pack/pack_app_safe_box.png)

插件安装完成后需重新点击“打包”按钮提交打包

**打包完成后自动保存到项目的"unpackage/release/apk/"目录**

如果清空了这个目录，那么下次打包将执行首次打包逻辑。

## 注意事项
- Windows环境：仅Android平台支持安心打包，iOS暂不支持；MacOSX环境：Android和ios都支持安心打包。
- 自定义调试基座不支持安心打包
- 使用DCloud老版证书不支持安心打包
- 使用原生混淆时，配置的待加密js文件需要提交到云端打包机（打包完成后自动清除这些js）
- 安心打包并非纯离线打包，虽然证书和前端代码不再提交云端打包机，但项目的manifest中的模块配置、本地原生插件、原生混淆配置的前端文件，仍需提交才能出包
- iOS平台安心打包无法兼容swift，如果uni原生插件使用swift开发，提交appstore提示“ITMS-90426: Invalid Swift Support - The SwiftSupport folder is missing. Rebuild your app using the current public (GM) version of Xcode and resubmit it.”错误时，请改用传统打包

## FAQ
- 安心打包是否有免费打包次数限制？
  打包次数限制是为了避免部分开发者过多占用云端打包资源而增加的限流措施，在使用`安心打包`时，由`非首次打包`机制生成的安装包由于不占用云端打包资源，所以不会占用**云端免费打包次数**，也可以理解为`安心打包`的`非首次打包`无打包次数限制。


## `Android 安心打包问题汇总`

### Q1: Windows：控制台提示打包成功，相应目录下没有apk文件

** 问题：** 某些用户反馈，windows电脑，控制台提示Android安心打包成功，进入相应目录(unpackage/release/apk)，目录下找不到apk文件
** 原因** ：unpackage/release/apk目录，没有写入权限，移动apk文件失败了。

** 解决方法：**
1. 赋予unpackage/release/apk目录写入权限
2. 重启电脑试试

### Q2: fakeLogOpen(/dev/log_crash) failed

某些情况下，首次提交安心打包，您可能会遇到下列错误：
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

### Q3: 启动图.9.png格式问题

错误日志中，出现如下日志：
```
[Error] W: ERROR: 9-patch image C:\xxxxx\res\drawable-hdpi\splash.9.png malformed.
[Error] W: No marked region found along edge.
[Error] W: Found along top edge.
```

** 原因：**  ` 启动图xxx.9.png`不是`有效9.png`图片，格式错误导致。
** 解决方法：** 重新生成有效的`9.png图片`

** 备注：**  部分用户可能会提问，同样.9.png项目，为什么传统打包成功，安心打包失败呢？因为：安心打包校验机制更为严格。
** 文档：**  [.9.png图片相关文档](https://ask.dcloud.net.cn/article/35527)

### Q4: Error occurred during initialization of VM

错误日志中，出现如下日志：
```
[Info] Error occurred during initialization of VM
[Info] Could not reserve enough space for 1048576KB object heap
[Error] 制作结果：Failed.    Reason:
```
** 解决方法：**
1. 找到安心打包插件(app-safe-pack)目录下app-safe-pack.ini文件
2. 将文件内容里-Xmx1024M修改为-Xmx512M
3. 重新提交打包

** 备注：**  HBuilderX 3.1.10及以上版本生效

## `ios 安心打包问题汇总`

### Q1: 打包失败，签名失败errSecInternalComponent错误

错误日志中，出现如下日志：
```
[Error] HBuilder.xcarchive/Payload/HBuilder.app: replacing existing signature
[Error] Warning: unable to build chain to self-signed root for signer  "xxxxxxxxxx“”
[Error] HBuilder.xcarchive/Payload/HBuilder.app: errSecInternalComponent
```

** 原因：**  可能是用户手动点击安装了证书导致打包签名失败。

** 解决方法：** 打开钥匙串访问删除相关用户手动安装的证书后重新打包（下图仅供参考，需开发者判断哪些证书是手动安装的证书）。

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/iossafepackcertinstall.jpeg)



## 安心打包问题反馈

如果您遇到安心打包问题，且无法解决，请加QQ群827137391。

进群需要提供`操作系统`和`HBuilderX版本号`信息，提问请提交`错误日志`或`截图`。

本群仅限反馈安心打包问题，请勿发布无关信息。
