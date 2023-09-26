# uni版本说明

本文梳理了DCloud的HBuilderX、uni-app、uniCloud等产品的版本概念。这里的uni-app包含了uni-app x。

HBuilderX有正式版、alpha版、dev版。

dev版仅限受邀内测，对外开放的版本仅包含alpha和release正式版。

DCloud在每次更新发版时，随着HBuilderX的升级，会一起发布uni-app的本地运行插件、uniCloud的本地运行插件。并且会同时升级app的云打包机。

默认情况下，它们的版本号是一样的。

## 版本命名方式@type

在HBuilderX 3.9以前，采用的是3段式版本号规则，大版本、小版本、补丁版本，如3.8.12。

这个版本号，在uni-app中使用[uni.getSystemInfo](https://uniapp.dcloud.net.cn/api/system/info.html)可以获得。具体属性是`uniRuntimeVersion`和`uniCompileVersion`，类型是字符串。

在HBuilderX界面显示时，还会在末尾再增加一段发版日期，如3.8.12.20230817。上述api不会返回末段日期。

但是这种多段式字符串类型的版本号，不方便做比较。获取到`uniRuntimeVersion`后，需要再分割三段后分别比较。

并且字符串3段式中，3.9的下一个版本可以是3.10。这个情况又容易被误解，因为3.10很可能被误解为3.1，它和3.9到底谁大就容易混淆。

所以从HBuilderX 3.9起，取消了字符串三段式版本，改为了数字方式，如3.91。具体规则：
- 小数点后面保留2位。
- 小数点之前代表大版本。小数点后第1位小数代表小版本，第2位小数代表补丁版本。
- 补丁版本可能不存在，即第2位小数是0，此时可以简写，去掉数字末尾的0。比如3.90就是3.9。
- 数字逢十进一，不存在某位数大于9的情况。比如3.99之后，还想发一个补丁版本，只能发成4.0。

基于向下兼容的考虑，`uniRuntimeVersion`和`uniCompileVersion`仍然是字符串。

但在uni-app x的[uni.getAppBaseInfo](https://uniapp.dcloud.net.cn/uni-app-x/api/getappbaseinfo.html)和[uni.getSystemInfo](https://uniapp.dcloud.net.cn/uni-app-x/api/getsysteminfo.html)中，
返回值新增了2个属性，`uniCompileVersionCode`和`uniRuntimeVersionCode`，这2个是数字类型，可以直接用于比较。

另外，从HBuilderX 3.9起，条件编译也可以按版本号来编译，比如低版本编译成这样、高版本编译成另一个样子。这种条件编译也可以直接使用比较运算符来比较了。[详见](platform.md#uniVersion)

## 编译器、运行时、打包机的版本差异

uni-app有编译器和运行时，它们之前的版本在某些情况可能不一样，所以有`uniCompileVersion`和`uniRuntimeVersion`的区别，分别表示编译器版本和运行时版本。

如果正常使用HBuilderX 最新版进行云打包，不会出现不一致的情况。但开发者的需求较多，比如cli创建项目、在其他ide中开发、离线打包，就会造成DCloud无法控制的版本差异。

比如用3.91的编译器编译代码后运行在3.92的运行时上。

DCloud无法保障这些交叉版本互相之间的兼容性，虽然有可能正常使用，但DCloud采取的策略是："发现编译器和运行时版本不匹配，就会弹框报警"。

发生告警不代表一定不能运行，只不过需要开发者自行对稳定性做保障。只要开发者自测后发现你的应用可以正常使用，就可以在manifest里配置关闭告警。[详见](https://ask.dcloud.net.cn/article/id-35627)

还有一个经常遇到的误报是：“我的HBuilderX已经是最新版了，升级日志里提到的已解决问题，为什么没有仍然存在？”，其实有的是因为cli项目下编译器是旧的、有的是因为本地打包的sdk是旧的，有的是因为自定义基座的版本是旧的。

那么何时会产生差异？

### cli方式创建项目造成的差异

当使用HBuilderX创建项目时，uni-app的编译器在HBuilderX目录的plugin下，跟随HBuilderX升级而同步，并且对所有HBuilderX创建的项目生效。

当使用cli创建项目时，uni-app的编译器在项目下。cli是否升级，是开发者自主决定的。

即便是ide仍然使用HBuilderX，HBuilderX不管怎么升级都不会影响编译器版本。你需要在项目下手动npm update来升级编译器。

以及如果你想要安装less、scss等预编译器，也需要自己npm安装在项目下，而不是在HBuilderX的插件管理里安装。

### wgt热更新造成的差异

wgt升级意味着编译wgt的HBuilderX版本和手机端已经存在的包的版本可能不匹配。

比如你使用HBuilderX 3.91 开发了第一版应用，并把安装包推给了你的手机用户，那么这些包的`uniRuntimeVersion`就是3.91。

后续你升级HBuilderX 为3.92，编译了下一版的wgt和apk，那么

- 编译为apk时，新的apk里`uniCompileVersion`和`uniRuntimeVersion`都是3.92
- 编译为wgt时，此时不存在客户端，仅有前端资源包，wgt的`uniCompileVersion`是3.92

如果要把`uniCompileVersion`是3.92的wgt包，热更新给`uniRuntimeVersion`为3.91的老用户，这些用户的客户端引擎没有升级，仅仅是前端资源热更新，就会因为3.92和3.91不匹配，默认就会弹框报警。

此时需要你提前测好新的wgt在老版客户端引擎上的兼容性，测试没问题时才能热更新，并在manifest里配置取消弹框。

如果测试有问题，且在前端层面无法处理，那就不能使用wgt更新，需要整包更新。或者回退HBuilderX版本，使用老版来编译wgt。

### 离线打包造成的差异

离线sdk是独立于HBuilderX的下载的，每个sdk都有版本号。其实就是`uniRuntimeVersion`。

而HBuilderX的版本决定了`uniCompileVersion`，如果HBuilderX编译的wgt和离线sdk的这2个版本不匹配，也会弹框报警。

解决方案同上，或者保持版本一致性，或者自己测试发现兼容性没有问题，然后在manifest配置忽略报警。

### 自定义基座造成的差异

如果你使用自定义基座，该基座的apk是在项目下的unpackage目录中的。每次升级HBuilderX时，之前制作的自定义基座是不会跟随HBuilderX升级的，升级HBuilderX后你需要重新制作新版自定义基座。

## 云打包机的引擎版本说明

HBuilderX已经有几百个版本了，因资源有限，不可能都每个版本都提供云打包机。

HBuilderX Alpha，只有1套云打包机，不管你的HBuilderX alpha版本多少，对应的打包机一定是最新的alpha版的客户端引擎。

HBuilderX正式版，有2套打包机，一个是最新正式版，一个是次新正式版。

中间的紧急更新版本没有独立打包机。

举个例子：

HBuilderX 有3.8.7、3.8.12、3.90、3.91这几个正式版。

那么当前可用的打包机有3.8.12和3.91这2台。（即每个小版本的最后一个版本，版本号分为大版本、小版本、补丁版本）

除了这2个HBuilderX版本外，其他版本的云打包都指向最新的3.91版对应的打包机。

即，除了正式版的次新版还有一个对应打包机，其他正式版均指向正式版的最新版打包机。

### 版本列表

下面提供 `uni-app` 开发中各产品的版本对应表：
<iframe src="https://dev.dcloud.net.cn/product/versions/view" width="100%" height="500px" frameborder="0" scrolling="no" style="border: 1px solid #eee; border-radius: 4px;"> </iframe>


想避免版本兼容问题，还是推荐使用HBuilderX完成一切工作，包括创建项目、运行编译、云打包app。
因为在这套体系里，官方会对很多常见的问题做出提醒和引导，减少问题的概率。随着HBuilderX的升级，uni-app编译器、真机运行基座、云打包引擎都会升级。