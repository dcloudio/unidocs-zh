# app平台 uni-app 项目云端打包环境  

## Android平台云端打包环境  

> 使用 gradle 脚本编译  

### HBulder4.41及以上版本升级云端打包环境  
- Android 编译 SDK（compileSdk）： 35  
- Android 构建工具（buildToolsVersion）：35.0.0  
- Gradle：8.11.1  
- Android Gradle 插件（com.android.tools.build:gradle）：8.7.3  
- JDK：17 （[Amazon corretto 17.0.12.7.1](https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/what-is-corretto-17.html)）  

### HBuilder4.25及以上版本云端打包环境（不推荐使用）
- Android 编译 SDK（compileSdk）： 34  
- Android 构建工具（buildToolsVersion）：34.0.0  
- Gradle：8.5  
- Android Gradle 插件（com.android.tools.build:gradle）：8.2.2  
- JDK：17 （[Amazon corretto 17.0.12.7.1](https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/what-is-corretto-17.html)）  

### HBuilder4.24及以下版本云端打包环境（不推荐使用）
- Android 编译 SDK（compileSdk）： 33  
- Android 构建工具（buildToolsVersion） ：30.0.3  
- Gradle：7.6.3  
- Android Gradle 插件（com.android.tools.build:gradle）：4.2.0  
- JDK：11 （[Amazon corretto 11.0.24.8.1](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/what-is-corretto-11.html)）  

**注意**  
云端打包环境升级后可能导致某些 uni原生语言插件 无法兼容，如碰到无法兼容的问题请联系插件作者尽快升级支持，同时将在 [ask社区](https://ask.dcloud.net.cn/explore/) 反馈，我们也会跟进协助插件作者适配支持。


## iOS平台云端打包环境  

> 使用 XCode 的 xcodebuild 命令编译  

### HBuilderX4.41及以上版本云端打包环境
- XCode: 16.1  
- iOS SDK: 18.1  
- pod仓库：https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git  

### HBuilderX4.36及以下版本云端打包环境（不推荐使用）
- XCode：15.4  
- iOS SDK：17.5  
- pod仓库：https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git  

