#### 什么是符号表
符号表是内存地址与源码文件名、函数名称、行号的映射表。符号表通常包括以下信息：
```
<内存起始地址><内存结束地址><源码函数名称>[<源码文件名称:源码行号>]
```
应用正式发布后二进制代码中不再包含源码信息，应用发生异常（Crash）时可以捕获异常发生时的堆栈信息，但这些信息使用内存地址表示，这时候可以通过符号表进行解析还原成源码堆栈信息，从而方便开发者定位并解决异常问题。


#### 什么是dsym文件
iOS平台中，dSYM文件是指具有调试信息的目标文件，存储着源码文件名、函数名、行号等信息，与可执行文件中的函数内存地址一一对应。
XCode中发布生成xcarchive文件默认包含dysm文件，通常为：xxxx.app.dSYM，其中xxxx为应用程序的包名，如下所示：

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/client/doc/ios/dsym-xcarchive.png)

dSYM文件内容为：

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/client/doc/ios/dsym-content.png)


#### dsym文件的用途
当应用发布上线后，无法在XCode中直观看到应用崩溃的错误，这时需要分析 crash report 文件，iOS设备中会有日志文件保存每个应用崩溃时的函数内存地址，通过 XCode 的 Organizer 可以将 iOS 设备中的 DeviceLog 导出成 crash 文件，这时就可以通过函数内存地址在 dsym 文件中查找到对应的函数名称和源码文件名。

多数统计平台都会捕获应用崩溃错误时的函数内存地址并提交到统计服务器，为了更好的分析崩溃日志，也需要 dysm 文件来查找到崩溃的函数名称和源码文件名称。
因此统计平台也需要开发者上传 dsym 文件。


##### HBuilderX中云端打包配置生成符号表文件

> HBuilderX3.2.23+版本新增支持云端打包支持生成iOS符号表 dsym 文件

在HBuilderX中云端打包打开项目的manifest.json文件，在“App常用其它设置”界面中的勾选“生成iOS符号表（dsym）文件”：

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/client/doc/ios/dsym-hx.png)

保存后提交云端。

云端打包成功后会在HBuilderX控制台输出 dsym 文件下载地址：

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/client/doc/ios/dsym-download.png)

#### 注意事项
- 下载文件格式为zip，解压后可获得 dsym 文件
- 生成符号表 dsym 文件需要消耗云端打包CDN资源，使用此功能需单独计费
- 生成的 dsym 文件下载地址有效期为两天，过期后自动删除，无法恢复，生成后请尽快下载到本地备份

