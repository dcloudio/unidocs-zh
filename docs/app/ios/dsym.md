## 概述
## Overview

### 什么是符号表
### What is a symbol table
符号表是内存地址与源码文件名、函数名称、行号的映射表。符号表通常包括以下信息：
The symbol table is a mapping table between memory addresses and source file names, function names, and line numbers. The symbol table usually includes the following information:
```
<内存起始地址><内存结束地址><源码函数名称>[<源码文件名称:源码行号>]
```
应用正式发布后二进制代码中不再包含源码信息，应用发生异常（Crash）时可以捕获异常发生时的堆栈信息，但这些信息使用内存地址表示，这时候可以通过符号表进行解析还原成源码堆栈信息，从而方便开发者定位并解决异常问题。
After the application is officially released, the binary code no longer contains the source code information. When the application crashes (crash), the stack information when the exception occurs can be captured, but the information is represented by the memory address. At this time, it can be parsed and restored to the source code stack information through the symbol table. , so as to facilitate developers to locate and solve abnormal problems.


### 什么是dsym文件
### What is a dsym file
iOS平台中，dSYM文件是指具有调试信息的目标文件，存储着源码文件名、函数名、行号等信息，与可执行文件中的函数内存地址一一对应。
On the iOS platform, a dSYM file refers to an object file with debugging information, which stores source file name, function name, line number, and other information, and corresponds to the function memory address in the executable file one-to-one.
XCode中发布生成xcarchive文件默认包含dysm文件，通常为：xxxx.app.dSYM，其中xxxx为应用程序的包名，如下所示：
The xcarchive file published in XCode contains the dysm file by default, usually: xxxx.app.dSYM, where xxxx is the package name of the application, as shown below:

![](https://img-cdn-aliyun.dcloud.net.cn/client/doc/ios/dsym-xcarchive.png)

dSYM文件内容为：
The contents of the dSYM file are:

![](https://img-cdn-aliyun.dcloud.net.cn/client/doc/ios/dsym-content.png)


### dsym文件的用途
### Purpose of dsym file
当应用发布上线后，无法在XCode中直观看到应用崩溃的错误，这时需要分析 crash report 文件，iOS设备中会有日志文件保存每个应用崩溃时的函数内存地址，通过 XCode 的 Organizer 可以将 iOS 设备中的 DeviceLog 导出成 crash 文件，这时就可以通过函数内存地址在 dsym 文件中查找到对应的函数名称和源码文件名。
When the application is released online, the application crash error cannot be visually seen in XCode. At this time, the crash report file needs to be analyzed. There will be a log file in the iOS device to save the function memory address when each application crashes. The DeviceLog in the iOS device is exported as a crash file. At this time, the corresponding function name and source code file name can be found in the dsym file through the function memory address.

多数统计平台都会捕获应用崩溃错误时的函数内存地址并提交到统计服务器，为了更好的分析崩溃日志，也需要 dysm 文件来查找到崩溃的函数名称和源码文件名称。
Most statistics platforms will capture the function memory address when the application crashes and submit it to the statistics server. In order to better analyze the crash log, the dysm file is also required to find the crashed function name and source file name.
因此统计平台也需要开发者上传 dsym 文件。
Therefore, the statistical platform also requires developers to upload dsym files.


## HBuilderX中云端打包配置生成符号表文件
## The cloud package configuration in HBuilderX generates the symbol table file

> HBuilderX3.2.23+版本新增支持云端打包支持生成iOS符号表 dsym 文件
> HBuilderX3.2.23+ version adds support for cloud packaging to generate iOS symbol table dsym files

在HBuilderX中云端打包打开项目的manifest.json文件，在“App常用其它设置”界面中的勾选“生成iOS符号表（dsym）文件”：
Open the manifest.json file of the project in the cloud package in HBuilderX, and check the "Generate iOS symbol table (dsym) file" in the "App common other settings" interface:

![](https://img-cdn-aliyun.dcloud.net.cn/client/doc/ios/dsym-hx.png)

保存后提交云端。
Submit to the cloud after saving.

云端打包成功后会在HBuilderX控制台输出 dsym 文件下载地址：
After the cloud package is successful, the dsym file download address will be output in the HBuilderX console:

![](https://img-cdn-aliyun.dcloud.net.cn/client/doc/ios/dsym-download.png)

### 注意事项
### Precautions
- 下载文件格式为zip，解压后可获得 dsym 文件
- The download file format is zip, and the dsym file can be obtained after decompression
- 生成符号表 dsym 文件需要消耗云端打包CDN资源，使用此功能需单独计费
- The generation of the symbol table dsym file needs to consume the cloud package CDN resources, and the use of this function requires separate billing
- 生成的 dsym 文件下载地址有效期为两天，过期后自动删除，无法恢复，生成后请尽快下载到本地备份
- The generated dsym file download address is valid for two days. After expiration, it is automatically deleted and cannot be restored. Please download it to a local backup as soon as possible after it is generated.

