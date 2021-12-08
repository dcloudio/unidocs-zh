# uni-app自动化测试@about

uni-app提供了一批[API](/collocation/auto/api)，这些API可以操控uni-app应用，包括运行、跳转页面、触发点击等，并可以获取页面元素状态、进行截图，从而实现对uni-app项目进行自动化测试的目的。

本功能使用到了业内常见的测试库如jest（MIT协议）。

推荐使用方式：研发提交源码到版本库后，持续集成系统自动拉取源码，自动运行自动化测试。

## 特性@features
开发者可以利用[API](/collocation/auto/api)做以下事情：

* 控制跳转到指定页面
* 获取页面数据
* 获取页面元素状态
* 触发元素绑定事件
* 调用 uni 对象上任意接口

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|快手小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√(ios仅支持模拟器)|√|√|x|x|x|x|x|x|

## CLI

如果您想在`终端命令行`进行自动化测试、或使用持续集成进行测试，请使用uni-app [CLI](https://uniapp.dcloud.net.cn/quickstart?id=_2-通过vue-cli命令行) 工程，[CLI项目自动化测试教程](/collocation/auto/uniapp-cli-project)

## HBuilderX自动化测试插件@descriptions

为了方便大家在HBuilderX内，进行uni-app自动化测试，开发了 [HBuilderX uni-app自动化测试插件](https://ext.dcloud.net.cn/plugin?id=5708)。

插件支持在HBuilderX内对`uni-app普通项目`、`CLI项目`进行自动化测试。

插件简化了测试环境安装、测试用例创建、测试运行、测试设备选择等步骤。[插件使用文档](/collocation/auto/hbuilderx-extension/index)

