# UTS插件介绍
# UTS plugin introduction

## 1 介绍
## 1 Introduction

> HBuilderX 3.6+ 支持uts插件
> HBuilderX 3.6+ supports uts plugin

UTS插件开发官方QQ交流群：527828934 [点此加入](https://qm.qq.com/cgi-bin/qm/qr?k=3Z-cQCXGiTyThkrqufUNNw7TaJd2xEPb&jump_from=webapi&authKey=4UQdplol3kPLwlDfuSdYleE8JUHnJChC2+8HcuBavZq2q51iAkLdzT4Bupt4ZJZu)
Official QQ exchange group for UTS plug-in development: 527828934 [Click here to join](https://qm.qq.com/cgi-bin/qm/qr?k=3Z-cQCXGiTyThkrqufUNNw7TaJd2xEPb&jump_from=webapi&authKey=4UQdplol3kPLwlDfuSdYleE8JUHnJChC2+8HcuBavZiApt4ZqLd5)

### 什么是uts
### what is uts

uts，全称 uni type script，统一、强类型、脚本语言。
uts, full name uni type script, unified, strong type, scripting language.

它可以被编译为不同平台的编程语言，如：
It can be compiled into programming languages for different platforms, such as:

- web平台，编译为JavaScript
- web platform, compiled to JavaScript
- Android平台，编译为Kotlin
- Android platform, compiled to Kotlin
- iOS平台，编译为Swift（HX 3.6.7+ 版本支持）
- iOS platform, compiled to Swift (supported by HX 3.6.7+ version)

uts 采用了与 ts 基本一致的语法规范，支持绝大部分 ES6 API。
uts adopts the same syntax specification as ts and supports most ES6 APIs.

如需详细了解uts语法，另见[uts语法介绍](../tutorial/syntax-uts.md)
For details on uts syntax, see also [uts syntax introduction](../tutorial/syntax-uts.md)

### 什么是uts插件
### What is uts plugin

现有的 uni-app，仍以js引擎为主。但从HBuilderX 3.6开始，uni-app 支持 uts 插件（3.6支持vue3编译器，3.6.8支持vue2编译器）。
The existing uni-app is still based on js engine. But starting from HBuilderX 3.6, uni-app supports uts plugin (3.6 supports vue3 compiler, 3.6.8 supports vue2 compiler).

也就是 uts 的第一步不是完整开发一个独立的 app，而是作为 uni-app 的插件。后续 uts 会持续迭代，达到完整开发 app 的水平。
That is to say, the first step of uts is not to fully develop an independent app, but as a plug-in of uni-app. Subsequent uts will continue to iterate to reach the level of a fully developed app.

uts 插件编译到 app 平台时，在功能上相当于 uni-app 之前的 app 原生插件，也就是 Kotlin 和 Swift 开发的插件。
When the uts plugin is compiled into the app platform, it is functionally equivalent to the app native plugin before uni-app, that is, the plugin developed by Kotlin and Swift.

开发 uts 插件不需要熟悉 Kotlin 和 Swift 的语法，因为使用的是基于 ts 的语法。但需要熟悉 Android 和 iOS 的系统 API，否则无法调用原生能力。
Developing uts plugins does not require familiarity with Kotlin and Swift syntax, as ts-based syntax is used. But you need to be familiar with the system APIs of Android and iOS, otherwise you cannot call native capabilities.

![uts插件结构](https://native-res.dcloud.net.cn/images/uts/UTS%E7%BB%93%E6%9E%84%E7%A4%BA%E6%84%8F%E5%9B%BE1.png)
![uts plugin structure](https://native-res.dcloud.net.cn/images/uts/UTS%E7%BB%93%E6%9E%84%E7%A4%BA%E6%84%8F %E5%9B%BE1.png)

### uts插件与uni原生语言插件的区别
### The difference between uts plugin and uni native language plugin

在 HBuilderX 3.6 以前，uni-app 在 App 侧只有一种原生插件，即用 java 或 Objective-C 开发的插件。
Before HBuilderX 3.6, uni-app had only one native plug-in on the App side, that is, a plug-in developed with java or Objective-C.

在 uts 推出后，原来的 “App原生插件”，更名为 “App原生语言插件”。
After the launch of uts, the original "App native plug-in" was renamed "App native language plug-in".

不同的名字，代表它们需要开发者编写语言不同。但殊途同归，最后都编译为原生的二进制代码。
Different names mean that they require developers to write in different languages. But the same results are obtained, and they are finally compiled into native binary code.

|				|原生语言插件				|uts插件|
| |native language plugin | uts plugin|
|:------		|:-------					|:--------|
|开发语言		|java/oc					|uts|
|Development language | java/oc | uts|
|开发环境		|Android Studio/XCode		|HBuilderX|
|Development Environment | Android Studio/XCode | HBuilderX|
|打包方式		|外挂aar 等产出物			|编译时生成原生代码|
|Packaging method |Outputs such as plug-in aar |Generate native code when compiling|
|js层调用方式	|uni.requireNativePlugin()	|普通的js函数/对象，可以直接 import，支持摇树优化|
| js layer calling method | uni.requireNativePlugin() |Ordinary js functions/objects, can be directly imported, support tree-shaking optimization|

相对原生语言插件，uts插件的优势：

1. 统一了编程语言（uts），一种语言开发所有平台，真正大前端。
1. Unified programming language (uts), one language to develop all platforms, really big front-end.
2. 统一了开发工具（HBuilderX），免除搭建复杂的原生开发环境。
2. The development tool (HBuilderX) is unified, eliminating the need to build a complex native development environment.
3. 插件封装中要理解的概念更少。 传统原生语言插件需要在js和原生层处理通信，使用各种特殊转换，使用特殊语法导入，注意事项很多。**uts统一为纯前端概念，简单清晰。**
3. Fewer concepts to understand in plug-in packaging. Traditional native language plug-ins need to handle communication between js and the native layer, use various special conversions, and use special syntax imports. There are many things to pay attention to. **uts is unified into a pure front-end concept, which is simple and clear. **
4. uts 下前端和原生可以统一在 HBuilderX 中联调。而传统原生语言插件需要在多个开发工具间切换，联调复杂。
5. 插件市场的uts插件支持下载后自己固定版本。而付费的原生语言插件只能使用最新版。
6. 插件市场的uts付费插件支持源码版销售和源码版权保护机制。而付费的原生语言插件不支持源码版销售。

如果您是插件作者，可以了解更多uts插件和uni原生语言插件对插件作者的区别。[详见](https://uniapp.dcloud.net.cn/plugin/publish.html#utsdiff)

### uts插件和Native.js的区别
### Difference between uts plugin and Native.js

- [Native.js](../tutorial/native-js.md) 运行在js上，通过反射调用os api。功能和性能都不及真正的原生
- [Native.js](../tutorial/native-js.md) runs on js and calls os api through reflection. The functions and performance are not as good as the real native
- uts 在 app 上不运行在 js 引擎里，是真正的原生。
- uts does not run in the js engine on the app, it is truly native.


## 2 创建uts插件
## 2 Create uts plugin

### uts 插件目录结构
### uts plugin directory structure

在 uni-app 的项目工程下，提供了独立的目录 `utssdk`，来存放 uts 插件。
Under the uni-app project, a separate directory `utssdk` is provided to store uts plugins.

当然官方更推荐使用 [uni_modules](uni_modules.md) 方式，这是更好的包管理方案。
Of course, the official recommendation is to use [uni_modules](uni_modules.md), which is a better package management solution.

首先确保项目根目录存在 uni_modules 文件夹，如果不存在，需要手动创建一个。
First make sure that the uni_modules folder exists in the root directory of the project. If it does not exist, you need to create one manually.

![插件目录](https://native-res.dcloud.net.cn/images/uts/uni_modules.jpg)
![Plugin Directory](https://native-res.dcloud.net.cn/images/uts/uni_modules.jpg)

### 新建步骤拆解
### New step disassembly

右键点击`uni_modules`目录 -> 新建插件
Right click on the `uni_modules` directory -> New Plugin

![新建插件1](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin.jpg)
![New Plugin 1](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin.jpg)

选择类型 **uts插件**
Select type **uts plugin**

![新建插件2](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin2_1.jpg)
![New Plugin 2](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin2_1.jpg)

**为了避免和插件市场的其他插件冲突，建议起一个自己的插件前缀名称。**
**In order to avoid conflicts with other plugins in the plugin market, it is recommended to create your own plugin prefix name. **

uts插件目录结构
uts plugin directory structure

![新建插件3](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin3_1.jpg)
![New Plugin 3](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin3_1.jpg)


### package.json

package.json 为 uni_modules 插件配置清单文件，负责描述插件的基本配置。
package.json is the uni_modules plugin configuration manifest file, which is responsible for describing the basic configuration of the plugin.


```json
{
  "id": "uts-helloworld",
  "displayName": "uts插件示例",
  "version": "0.1",
  "description": "uts插件示例",
  "uni_modules": {
    
  }
}
```

上面是一个默认的清单文件示例,关于 package.json 更多描述[详见](uni_modules.md#package.json)
The above is a default manifest file example, more description about package.json [see](uni_modules.md#package.json)

### 插件的目录结构
### Plugin directory structure

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─common                          // 可跨端公用的uts代码。推荐，不强制
├─static                          // 静态资源
├─utssdk
│	├─app-android                 //Android平台目录
│	│	├─assets                  //Android原生assets资源目录，可选
│	│	├─libs                    //Android原生库目录，可选
│	│	├─res                     //Android原生res资源目录，可选
│	│	├─AndroidManifest.xml     //Android原生应用清单文件，可选
│	│	├─config.json             //Android原生配置文件
│	│	└─index.uts               //Android原生插件能力实现
│	├─app-ios                     //iOS平台目录
│	│	├─Frameworks              //iOS原生依赖的第三方 framework 依赖库存放目录，可选
│	│	├─Libs              	  //iOS原生依赖的第三方 .a 依赖库存放目录，可选
│	│	├─Resources               //iOS原生所依赖的资源文件存放目录，可选
│	│	├─info.plist              //iOS原生所需要添加到主 info.plist 文件中的配置文件，可选
│	│	├─UTS.entitlements        //iOS原生所需要添加到主工程 .entitlements 文件中的配置文件，可选
│	│	├─config.json             //iOS原生配置文件
│	│	└─index.uts               //iOS原生插件能力实现
│	├─web                         //web平台目录
│	│	└─index.uts
│	├─mp-alipay                   // 支付宝小程序平台，可选
│	├─mp-baidu                    // 百度小程序平台，可选
│	├─mp-jd                       // 京东小程序平台（仅限vue2），可选
│	├─mp-kuaishou                 // 快手小程序平台，可选
│	├─mp-lark                     // 飞书小程序平台，可选
│	├─mp-qq                       // QQ小程序平台，可选
│	├─mp-toutiao                  // 字节跳动小程序平台，可选
│	├─mp-weixin                   // 微信小程序平台，可选
│	├─mp-xhs                      // 小红书小程序平台（仅限vue2），可选
│	├─index.d.ts                  // 插件能力声明，可选
│	└─index.uts                   // 跨平台插件能力实现，可选
└─package.json                    // 插件清单文件
</code>
</pre>


根目录 index.uts 文件是程序主入口。如果插件根目录下没有 index.uts，则会在编译到不同平台时，寻找分平台的目录下的 index.uts 文件。
The index.uts file in the root directory is the main entry point of the program. If there is no index.uts in the root directory of the plug-in, it will look for the index.uts file in the sub-platform directory when compiling to different platforms.

比如编译到 app-android 平台时，如果 uts 插件根目录没有 index.uts，会寻找 utssdk/app-android/index.uts。如果也没有找到，会报错。
For example, when compiling to the app-android platform, if there is no index.uts in the root directory of the uts plugin, it will search for utssdk/app-android/index.uts. If it is not found, an error will be reported.

当同时存在分平台目录的 index.uts 和根目录 index.uts 时，会优先获取具体的分平台目录。
When both the index.uts of the sub-platform directory and the root directory index.uts exist, the specific sub-platform directory will be obtained first.

开发者有多种组织自己代码的方式：
Developers have several ways to organize their code:

1. 在插件根目录的 index.uts 中写条件编译代码。简单的业务一个文件搞定
1. Write conditional compilation code in index.uts in the root directory of the plugin. Simple business done with one file
2. 在插件根目录 index.uts 中写条件编译，import 分平台的文件
2. Write conditional compilation in the plug-in root directory index.uts, and import the files of different platforms
3. 不写根目录的 index.uts，直接在分平台目录写 index.uts。不跨端时，比如只做一个 Android 插件，这样写比较简单
3. Instead of writing index.uts in the root directory, write index.uts directly in the sub-platform directory. When not cross-terminal, such as only making an Android plug-in, it is relatively simple to write

index.d.ts 文件是对当前插件能力的**声明**，用于语法提示。它不是必写项。
The index.d.ts file is a **declaration** of the current plugin capabilities, used for syntax hints. It is not mandatory.

因为 uts 写好后，HBuilderX 可以自动识别 uts api 并进行语法提示。它更多的用于后续 uts 插件加密时给予语法提示。
Because after the uts is written, HBuilderX can automatically recognize the uts api and provide syntax prompts. It is more used to give syntax hints when the subsequent uts plugin encrypts.

如果不熟悉 d.ts，可以自行网上搜索，它属于 ts 标准技术。
If you are not familiar with d.ts, you can search online by yourself, it belongs to ts standard technology.

### App原生配置
### App native configuration

#### Android平台原生配置
#### Android platform native configuration

app-android 文件夹下存在Android平台原生配置，包括以下目录或文件
The native configuration of the Android platform exists in the app-android folder, including the following directories or files

|目录名/文件名			|用途									|
|directory name/file name |purpose |
|---					|---									|
|assets					|Android平台原生assets资源目录			|
|assets |Android platform native assets resource directory |
|libs					|Android平台原生引用的三方jar/aar目录		|
|libs |The third-party jar/aar directory natively referenced by the Android platform |
|res					|Android平台原生res资源目录				|
|res |Android platform native res resource directory |
|AndroidManifest.xml	|Android平台原生应用清单文件				|
|AndroidManifest.xml |Android platform native application manifest file |
|config.json			|Android平台下的配置文件					|
| config.json | Configuration file under Android platform |
|index.uts				|主入口，index.d.ts声明的能力在Android平台下的实现	|
| index.uts | The main entry, the realization of the capabilities declared by index.d.ts on the Android platform |


##### assets  
Android平台原生assets资源目录，建议只保存UTS插件内置的资源文件。
The native assets resource directory of the Android platform. It is recommended to save only the resource files built into the UTS plugin.

除了插件下有assets目录，项目下也有。注意2者的区别。
In addition to the assets directory under the plugin, there is also under the project. Note the difference between the two.
如果需要插件使用者配置（如三方SDK的授权文件），则插件作者应该在插件文档中告诉插件使用者，配置到项目的Android原生应用资源目录，而不是配置在插件目录下。[详见](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)
If plug-in user configuration (such as the authorization file of the third-party SDK) is required, the plug-in author should tell the plug-in user in the plug-in documentation that the configuration should be in the Android native application resource directory of the project instead of in the plug-in directory. [See details](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)

##### libs  
Android平台原生三方库目录，支持以下类型文件：
The Android platform's native third-party library directory supports the following types of files:
- jar 
- aar
- so库
- so library

如果封装三方原生sdk为uni-app插件，可以将sdk的jar/aar文件放到此目录，但因为多个uts插件引用相同三方原生sdk时可能会产生冲突，所以如果sdk支持仓储，建议优先使用仓储配置，而不是直接把jar等文件放在libs目录。仓储配置参考config.json的[dependencies](#dependencies)。  
If the third-party native SDK is packaged as a uni-app plug-in, you can put the jar/aar file of the SDK in this directory, but because multiple uts plug-ins may conflict when referencing the same third-party native SDK, so if the SDK supports storage, it is recommended to use it first Warehousing configuration, instead of directly placing jar and other files in the libs directory. For storage configuration, refer to [dependencies](#dependencies) of config.json.

如果使用的三方sdk包含了so库，保存到此目录时，需按Android的abi类型分目录保存。
If the third-party sdk used contains the so library, when saving to this directory, it needs to be saved in different directories according to the Android abi type.

关于libs目录的使用，可以参考 [Hello UTS](https://gitcode.net/dcloud/hello-uts/-/tree/master/uni_modules)
For the use of the libs directory, please refer to [Hello UTS](https://gitcode.net/dcloud/hello-uts/-/tree/master/uni_modules)



##### res  
Android平台原生res资源目录，建议只保存UTS插件内置的资源文件。
The native res resource directory of the Android platform, it is recommended to save only the resource files built into the UTS plug-in.

除了插件下有res目录，项目下也有。注意2者的区别。一般使用者的配置不放在插件下，而放在自己的项目下。项目下配置[详见](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)
In addition to the res directory under the plug-in, there is also under the project. Note the difference between the two. The configuration of general users is not placed under the plug-in, but under their own project. Configuration under the project [see details](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)


##### AndroidManifest.xml  
Android原生应用清单文件，建议只保存UTS插件内置的清单文件配置。
Android native application manifest file, it is recommended to save only the built-in manifest file configuration of the UTS plugin.

除了插件下有AndroidManifest.xml，项目下也有。注意2者的区别。一般使用者的配置不放在插件下，而放在自己的项目下。项目下配置[详见](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)
In addition to AndroidManifest.xml under the plugin, there is also under the project. Note the difference between the two. The configuration of general users is not placed under the plug-in, but under their own project. Configuration under the project [see details](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)

##### config.json
uts插件在Android平台的原生层配置文件，可以在其中配置依赖仓储等gradle相关内容。
The uts plugin is in the native layer configuration file of the Android platform, where you can configure gradle-related content such as dependency repositories.

```json
{
	// 使用NDK时支持的CPU类型，可选（打包时不要复制注释）
	// Supported CPU types when using NDK, optional (do not copy comments when packaging)
	"abis": [
	    "使用NDK时支持的cpu类型, 可取值armeabi-v7a|arm64-v8a|x86|x86_64"
	],
    // 依赖的仓储配置，可选，打包时会合并到原生工程的build.gradle中（打包时不要复制注释）
    // Dependent storage configuration, optional, will be merged into the build.gradle of the native project when packaging (do not copy comments when packaging)
	"dependencies": [
		"androidx.core:core-ktx:1.6.0",
		{
			"id": "com.xxx.richtext:richtext",
			"source": "implementation 'com.xxx.richtext:richtext:3.0.7'"
		}
	],
    // Android系统版本要求，最低Android 5.0（打包时不要复制注释）
    // Android system version requirements, minimum Android 5.0 (do not copy comments when packaging)
	"minSdkVersion": 21
}
```

- abis  
当插件使用了NDK开发的so库时配置，描述插件支持CPU类型。  
Configure when the plug-in uses the so library developed by NDK, and describe the CPU type supported by the plug-in.
可取值：armeabi-v7a、arm64-v8a、x86、x86_64
Possible values: armeabi-v7a, arm64-v8a, x86, x86_64

<a id="dependencies"/>

- dependencies  
配置插件依赖的仓储，云端打包时会合并到Android原生工程的build.gradle的  
Configure the storage that the plug-in depends on, which will be merged into the build.gradle of the Android native project when packaging in the cloud
数组类型，数组中的项可以是字符串类型或JSON对象  
Array type, the items in the array can be string type or JSON object
对于字符串类型项，将会作为`implementation`方式依赖添加到build.gradle中，上面示例中"androidx.core:core-ktx:1.6.0"将会添加以下配置  
For string type items, it will be added to build.gradle as an `implementation` method dependency. In the above example, "androidx.core:core-ktx:1.6.0" will add the following configuration
```
dependencies {
  implementation 'androidx.core:core-ktx:1.6.0'
}
```
对于JSON类型项，将会把source字段值作为gradle源码添加到build.gradle中，上面示例中"id": "com.xxx.richtext:richtext"项将会添加以下配置  
For JSON type items, the source field value will be added to build.gradle as the gradle source code, and the "id": "com.xxx.richtext:richtext" item in the above example will add the following configuration
```
dependencies {
  implementation 'com.xxx.richtext:richtext:3.0.7'
}
```


- minSdkVersion  
插件支持的Android最低版本，整数类型，取值范围为Android API Level
The minimum version of Android supported by the plug-in, integer type, the value range is Android API Level

默认uni-app最低支持版本为19，即Android4.4.2
The minimum supported version of the default uni-app is 19, namely Android4.4.2


**注意：**
**Notice:**

- Android平台原生配置需提交云端打包才能生效，真机运行时需使用[自定义基座](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)
- The native configuration of the Android platform needs to be submitted to the cloud for packaging to take effect, and the [custom base](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground) needs to be used when the real device is running

- HBuilderX 内置了android常见的依赖：内置依赖清单 ，开发者需要注意两点：
- HBuilderX has built-in android common dependencies: built-in dependency list, developers need to pay attention to two points:

    1 内置清单中涉及的依赖，无需手动添加，即可直接使用
    1 The dependencies involved in the built-in list can be used directly without adding them manually

    2 请勿通过 手动添加jar/aar 等方式引入相同的依赖，否则会因依赖冲突导致云打包失败。
    2 Do not introduce the same dependencies by manually adding jar/aar, otherwise cloud packaging will fail due to dependency conflicts.




#### iOS 平台原生配置
#### iOS platform native configuration

app-ios 文件夹下存在iOS平台原生配置，包括以下目录或文件
There are iOS platform native configurations under the app-ios folder, including the following directories or files

|目录名/文件名		|用途													|
|Directory Name/File Name |Purpose |
|:---				|:---													|
|Frameworks			|iOS平台插件需要引用的三方 framework 依赖库存放目录			|
|Libs				|iOS平台插件需要引用的三方 .a 依赖库存放目录			    |
|Resources			|iOS平台插件需要引用的资源文件存放目录						|
| Resources | The resource file storage directory that needs to be referenced by the iOS platform plug-in |
|Info.plist			|iOS平台插件需要添加到原生工程Info.plist中的配置文件			|
| Info.plist | The iOS platform plug-in needs to be added to the configuration file in the native project Info.plist |
|UTS.entitlements	|iOS平台插件需要添加到原生工程 entitlements 文件中的配置文件		|
| UTS.entitlements | The iOS platform plug-in needs to be added to the configuration file in the entitlements file of the native project |
|config.json		|iOS平台原生工程的配置文件									|
| config.json | Configuration file for iOS platform native projects |
|index.uts			|主入口，index.d.ts声明的能力在iOS平台下的实现				|
| index.uts |The main entry, the realization of the capabilities declared by index.d.ts on the iOS platform |

##### Frameworks 
iOS平台插件依赖的三方framework存放目录，支持以下类型文件：

- framework  
- xcframework

注意：目前支持静态库和动态库

##### Libs@ios-libs 
> HBuilder X 3.7.2+ 版本支持

iOS平台插件依赖的三方.a库存放目录，支持以下类型的.a库：

- 使用OC语言创建的.a库  
- 使用Swift语言创建的.a库

备注：有关OC及Swift创建的.a库的区别、.a库的使用方法和注意事项[详见](https://uniapp.dcloud.net.cn/plugin/uts-for-ios)

##### Resources
iOS平台原生资源目录，建议只保存uts插件内置的资源文件。云端打包时会将此目录下的所有文件添加到应用 main bundle 中。  
The native resource directory of the iOS platform, it is recommended to save only the resource files built into the uts plugin. All files in this directory will be added to the application main bundle when cloud packaging.

除了插件下有Resources目录，项目下也有。注意2者的区别。一般使用者的配置不放在插件下，而放在自己的项目下。项目下配置[详见](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6-bundle-resources)  
In addition to the Resources directory under the plug-in, there are also under the project. Note the difference between the two. The configuration of general users is not placed under the plug-in, but under their own project. Configuration under the project [see details](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#%E8%B5%84%E6%BA%90%E6%96%87%E4 %BB%B6-bundle-resources)

##### Info.plist
iOS平台原生 Info.plist 文件配置，云端打包时会将配置信息合并到原生工程的 Info.plist 中。
The native Info.plist file configuration of the iOS platform, the configuration information will be merged into the Info.plist of the native project when packaging in the cloud.

除了插件下有Info.plist，项目下也有。注意2者的区别。一般使用者的配置不放在插件下，而放在自己的项目下。项目下配置[详见](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-info-plist)
In addition to the Info.plist under the plug-in, there is also under the project. Note the difference between the two. The configuration of general users is not placed under the plug-in, but under their own project. Configuration under the project [see details](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4 %BB%B6-info-plist)

示例： 添加自定义字段 TencentLBSAPIKey 和 开启后台定位
Example: Add a custom field TencentLBSAPIKey and enable background positioning

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
	<key>TencentLBSAPIKey</key>
	<string>填写您申请的APIKey</string>
	<key>UIBackgroundModes</key>
	<array>
		<string>location</string>
	</array>
  </dict>
</plist>
```

##### UTS.entitlements
iOS平台原生 entitlements 文件配置，云端打包时会将配置信息合并到原生工程的 entitlements 配置文件中
The native entitlements file configuration of the iOS platform, the configuration information will be merged into the entitlements configuration file of the native project when the cloud is packaged

插件需要开启 capabilities 中的相关服务时需要配置 UTS.entitlements 文件
The UTS.entitlements file needs to be configured when the plug-in needs to enable related services in capabilities

示例：在 capabilities 中勾选 Access WiFi Information 项后对应的 UTS.entitlements 的配置
Example: The corresponding UTS.entitlements configuration after checking the Access WiFi Information item in capabilities

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>com.apple.developer.networking.wifi-info</key>
	<true/>
</dict>
</plist>
```

##### config.json
uts插件在iOS平台的其它原生配置文件，可以在其中配置依赖的系统库等信息  
Other native configuration files of the uts plugin on the iOS platform, where information such as dependent system libraries can be configured

```json
{
	"frameworks": [
		"可选，依赖的系统库(系统库有.framework和.tbd和.dylib类型)" 
	],
	"deploymentTarget": "9.0",   // 可选，插件支持的最低 iOS 版本  默认：9.0"
	"validArchitectures": [    // 可选，支持的 CPU 架构类型 默认：armv7、arm64
		"arm64"    // 支持多个值，可取值："arm64", "armv7"
	]
}
```

**注意：**
**Notice:**

- iOS 平台 uts 原生插件需提交云端打包才能生效，真机运行时需使用[自定义基座](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)
- The uts native plug-in of the iOS platform needs to be submitted to the cloud package to take effect, and the [custom base](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground) needs to be used when running on the real machine


## 3 开发uts插件
## 3 Develop uts plugin

### 3.1 获取电量插件示例
### 3.1 Example of getting power plug-in

以获取电量为例，介绍`uts`插件开发步骤
Take the battery as an example to introduce the development steps of the `uts` plug-in

**首先在 `uni_modules` 目录下新建名为 uni-getbatteryinfo 的 uts 插件**
**First create a new uts plugin named uni-getbatteryinfo in the `uni_modules` directory**

#### Android平台
#### Android platform


![OSAPI示例](https://native-res.dcloud.net.cn/images/uts/uts_osapi_demo_1.jpg)
![OSAPI example](https://native-res.dcloud.net.cn/images/uts/uts_osapi_demo_1.jpg)

在Android平台目录下，编辑index.uts，键入以下内容。
In the Android platform directory, edit index.uts and type the following.


```ts
// index.uts

// 引用android api
// refer to android api
import Context from "android.content.Context";
import BatteryManager from "android.os.BatteryManager";
import { UTSAndroid } from "io.dcloud.uts";

export function getBatteryCapacity(): string {
	// 获取android系统 application上下文
    const context = UTSAndroid.getAppContext();
    if (context != null) {
        const manager = context.getSystemService(
            Context.BATTERY_SERVICE
        ) as BatteryManager;
        const currentLevel: number = manager.getIntProperty(
            BatteryManager.BATTERY_PROPERTY_CAPACITY
        );
        return '' + currentLevel + '%';
    }
    return "0%";
}

```


至此，我们已经完成一个Android平台上获取电量的原生能力封装。
So far, we have completed the packaging of the native ability to obtain electricity on the Android platform.

我们可以在vue页面中这样使用它：

```ts

import getBatteryCapacity from "@/uni_modules/uts-getbatteryinfo";
console.log(getBatteryCapacity())

```


有些场景下，我们期望 将获取电量的能力封装为 异步的接口，我们可以使用下面的代码

```ts
import Context from "android.content.Context";
import BatteryManager from "android.os.BatteryManager";
import { UTSAndroid } from "io.dcloud.uts";


type GetBatteryInfoOptions = {
    success?: (res: object) => void
    fail?: (res: object) => void
    complete?: (res: object) => void
}

export default function getBatteryInfo(options: GetBatteryInfoOptions) {
    const context = UTSAndroid.getAppContext();
    if (context != null) {
        const manager = context.getSystemService(
            Context.BATTERY_SERVICE
        ) as BatteryManager;
        const level = manager.getIntProperty(
            BatteryManager.BATTERY_PROPERTY_CAPACITY
        );
        const res = {
            errCode: 0,
            errSubject: "uni-getBatteryInfo",
            errMsg: "getBatteryInfo:ok",
            level,
            isCharging: manager.isCharging()
        }
        options.success?.(res)
        options.complete?.(res)
    } else {
        const res = {
			errCode: 1001,
			errSubject: "uni-getBatteryInfo",
            errMsg: 'getBatteryInfo:fail getAppContext is null'
        }
        options.fail?.(res)
        options.complete?.(res)
    }
}
```


对应的使用代码需要调整为：

```ts
import getBatteryInfo from "@/uni_modules/uts-getbatteryinfo";

getBatteryInfo({
	success(res) {
		uni.showToast({
			title: "当前电量：" + res.level + '%',
			icon: 'none'
		});
	}
})

```


在下一节，我们将更加详细地介绍 前端如何使用这个插件。

注1：HBuilderX的代码提示系统，支持在uts文件中对Android的原生API进行提示

注2：`io.dcloud.uts.android`库介绍文档[见下](#iodcloudutsandroid)

特别提示：
Special Note:

**有android开发经验的开发者可以参考：[Android平台uts开发指南](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html)**
**Developers with experience in android development can refer to: [Android platform uts development guide](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html)**


#### iOS 平台
#### iOS platform

![](https://native-res.dcloud.net.cn/images/uts/iOS/getbatteryinfo1.png)

在 iOS 平台目录下，编辑 index.uts，键入以下内容
In the iOS platform directory, edit index.uts and type the following

```ts
// index.uts

// 引用 iOS 原生平台 api
// Reference iOS native platform api
import { UIDevice } from "UIKit";

/**
 * 定义 接口参数
 */
type GetBatteryInfoOptions = {
    success?: (res: UTSJSONObject) => void;
    fail?: (res: UTSJSONObject) => void;
    complete?: (res: UTSJSONObject) => void;
};

/**
 * 导出 获取电量方法 
 */
export default function getBatteryInfo(options: GetBatteryInfoOptions) {
	
	// 开启电量检测
	// Turn on power detection
	UIDevice.current.isBatteryMonitoringEnabled = true
	
	// 返回数据
	// return data
    const res = {
        errMsg: "getBatteryInfo:ok",
        level: Number(UIDevice.current.batteryLevel * 100),
        isCharging: UIDevice.current.batteryState == UIDevice.BatteryState.charging,
    };
    options.success?.(res);
    options.complete?.(res);
}
```

如果你想以同步接口的方式提供电量信息，代码可调整如下：

```ts
// index.uts

// 引用 iOS 原生平台 api
import { UIDevice } from "UIKit";

/**
 * 导出 获取电量方法 
 */
export default function getBatteryLevel():number {
	// 开启电量检测
	UIDevice.current.isBatteryMonitoringEnabled = true
	
	let level = Number(UIDevice.current.batteryLevel * 100)
	return level
}
```

至此，我们已经完成一个 iOS 平台上获取电量的原生能力封装。
So far, we have completed a native capability encapsulation for obtaining power on the iOS platform.


### 3.2 `uts`与`uni-app`环境数据交互说明
### 3.2 Explanation of interaction between `uts` and `uni-app` environment data


UTS向uni-app传值，支持下列类型：
UTS transfers values to uni-app, and supports the following types:


1 TS基本数据类型： number,string,boolean 等
1 TS basic data types: number, string, boolean, etc.
```ts
// 基础类型-Number
// Basic type - Number
export function getPluginVersionNum(): number{
	return 120
}
// 基础类型-string
// basic type - string
export function getPluginVersion(): string{
	return "1.2.0"
}
```

2 UTSJSONObjct 

```ts
// UTSJSONObjct 示例
// UTSJSONObjct example
export function getPluginVersion(): UTSJSONObject{
	
	var ret = {
		version: "1.2.0",
		versionNum: 120,
		pluginArray:["core","debug","network"]
	}
	return ret
}
```

3 JSONObject

```ts
// JSONObject 示例
// JSONObject example
export function getPluginVersion(): JSONObject{
	
	var retJson = new JSONObject()
	retJson["version"] = "1.2.0"
	retJson["versionNum"] = 120
	return retJson
}
```

uni-app向UTS环境传值，支持下列类型：
uni-app transfers values to the UTS environment, and supports the following types:

1 TS基本数据类型： number,string,boolean 等
1 TS basic data types: number, string, boolean, etc.
```ts
// 基础数据类型示例
// basic data type example
export function postUserInfo(name:string,age:number){
	console.log("name == " + name);
	console.log("age == " + age);
}
```

```js
// uni-app 调用代码
// uni-app calling code
postUserInfo("zhangsan",12);
```

2 type数据类型
2 type data type

```ts
// type 数据类型示例
// type data type example
export function postUserInfo(name:string,age:number){
	console.log("name == " + name);
	console.log("age == " + age);
}
```

```js
// uni-app 调用代码
// uni-app calling code
postUserInfo({
	name:"zhangsan",
	age:12
});
```


3 UTSJSONObjct

```ts
// UTSJSONObjct 数据类型示例
// Example of UTSJSONObjct data type
export function postUserInfo(user:UTSJSONObject){
	console.log(user);
}
```

```js
// uni-app 调用代码
// uni-app calling code
postUserInfo({
	name:"zhangsan",
	age:12,
	scoreInfo:{
		"语文":100,
		"数学":80,
	}
});

```


## 4 前端使用插件
## 4 Front-end using plugins

虽然uts插件由uts语法开发，但前端引用插件并不要求一定需要ts，普通js即可引用uts插件。
Although the uts plug-in is developed by uts syntax, the front-end reference plug-in does not necessarily require ts, and ordinary js can reference the uts plug-in.

下面介绍两种常见的引入方式
Two common introduction methods are described below.

 **泛型引用**
 **Generic reference**

作为一个对象全部import进来，然后通过点运算符调用这个对象的方法或属性。
All imported as an object, and then call the method or property of this object through the dot operator.

```js
// 先引用，全部导入，对象起名为UTSHello
// Reference first, import all, and name the object UTSHello
import * as UTSHello from "../../../uni_modules/uts-osapi";

// 然后使用UTSHello的方法
// Then use the method of UTSHello
UTSHello.getBatteryCapacity()
```

**特别注意**
**pay attention**

需要特别注意的是，import UTS插件时，只能到插件的根目录，不能直接引入到最终的文件
It is important to note that when importing a UTS plug-in, you can only go to the root directory of the plug-in, and cannot directly import it into the final file

```
// 正确的写法
// Correct spelling
import * as UTSHello from "../../../uni_modules/uts-osapi";

```
```
// 错误的写法
// wrong wording
import * as UTSHello from "../../../uni_modules/uts-osapi/index.uts";

```



**显性引用**
**Explicit references**

从可导出的选项里import 1个或多个（逗号分隔），然后直接使用导出的方法或属性。
Import 1 or more (comma-separated) from the exportable options, and then use the exported methods or properties directly.

```js
//先引用，导入指定方法或属性
//First reference, import the specified method or property
import {
  getBatteryCapacity
} from "../../../uni_modules/uts-osapi";

// 然后使用导入的方法
// then use the imported method
getBatteryCapacity()
```



关于电量这个插件，插件市场已经提供好了现成的插件，除了Android，还同时支持了web和小程序，可以去下载体验。[详见](https://ext.dcloud.net.cn/plugin?id=9295)
Regarding the plug-in of electricity, the plug-in market has already provided ready-made plug-ins. In addition to Android, it also supports web and MiniApp, which can be downloaded and experienced. [See details](https://ext.dcloud.net.cn/plugin?id=9295)

更多开发示例，可以参考 [HelloUTS](https://gitcode.net/dcloud/hello-uts)。
For more development examples, you can refer to [HelloUTS](https://gitcode.net/dcloud/hello-uts).

## 5 真机运行
## 5 Real machine running

### 5.1 UTS支持真机运行
### 5.1 UTS supports real machine operation

**uts虽然是原生代码，但同样具有真机运行功能**
**Although uts is a native code, it also has the function of running on a real machine**

若HBuilderX中没有`uts编译运行插件`，在第一次运行时会自动下载。
If there is no `uts compile and run plugin` in HBuilderX, it will be downloaded automatically when it is run for the first time.

#### Android平台
#### Android platform

- Android上，运行体验与uni-app基本无差异。一样可以热刷新，打印console.log。
- On Android, the running experience is basically the same as that of uni-app. It can also be hot refreshed, and the console.log can be printed.

#### iOS平台
#### iOS Platform

- HBuilderX 3.6.9以下版本，uts插件不支持热刷新，真机需提交云端打包生成[自定义基座](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)
- HBuilderX 3.6.9+，uts插件，支持本地编译和真机运行 [详情](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-ios.html)
- HBuilderX 3.6.9+, uts plug-in, supports local compilation and real machine operation [Details](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-ios.html)

### 5.2 自定义基座
### 5.2 Custom Dock

自定义基座支持uts插件。
Custom dock supports uts plugins.

#### Android平台  
#### Android platform
普通uts代码可以直接使用标准基座真机运行。但与原生插件一样，涉及以下场景，需要自定义基座后方能生效:
Ordinary uts codes can be directly run on a real machine with a standard base. However, like the native plug-in, the following scenarios are involved, and the base needs to be customized before it can take effect:

- 1 集成三方sdk
- 1 integrated third party sdk
- 2 新增资源(包括res/asset 等)
- 2 New resources (including res/asset, etc.)

总结来说，就是所有 涉及新增依赖/gralde配置/androidManifest.xml/资源 等标准基座不具备的能力时，需要自定义基座
To sum up, all the capabilities that standard docks do not have, such as new dependencies/gralde configuration/androidManifest.xml/resources, require a custom dock

#### iOS平台  
uts插件编译需要XCode环境，因此在mac电脑安装了XCode工具时支持直接使用标准基座真机运行。
在windows电脑或者mac电脑没有安装XCode工具时，需要提交云端打包生成自定义基座后才能调用uts插件。

### 5.3 debug断点调试
uts插件支持debug断点调试。

- [Android debug教程](/tutorial/debug/uni-uts-debug.md)
- [iOS debug教程](/tutorial/debug/uni-uts-debug-ios.md)

### 5.4 遗留问题

截止到HBuilderX 3.6.9 时遗留事项：
- Android平台不支持跨进程调试/日志打印，即 console.log 目前只能在当前进程生效，开发多进程应用时，暂时无法打印日志到控制台

遗留事项后续升级完善。
Remaining matters will be upgraded and improved later.


## 6 云端打包
## 6 Cloud Packaging

正常支持云端打包。但打包后uts编译为了纯原生二进制代码，不支持wgt热更新。  
Cloud packaging is normally supported. However, after packaging, uts is compiled into pure native binary code and does not support wgt hot update.



## 常见问题
## common problem

### 常见报错
### Common errors

- [plugin:vite:resolve] Failed toresolve entry for package "插件路径"

	HBuilderX 的最低要求为3.6.0，低于此版本无法import uts插件，编译时将报错。
	The minimum requirement of HBuilderX is 3.6.0. The uts plugin cannot be imported below this version, and an error will be reported when compiling.

- 文件查找失败：'uts插件路径'

    vue2项目使用 uts 插件的最低版本要求是HBuilderX 3.6.8，低于此版本，编译时将报错。
<!-- 
- UTSCallback 已过时

	HBuilderX 3.7.7开始，不再支持直接使用 UTSCallback 定义函数类型，当需要定义函数类型时，应定义为更具体的类型，如：`const callback:UTSCallback` 应调整为`const callback:()=>void`
	如果您使用的是插件市场三方uts插件，可以检查更新插件最新版本
-->	
### Float类型传参
### Float type parameter

android很多布局参数强制要求Float，但是ts中没有内置这种类型。可以使用下面的代码实现转换
Float is mandatory for many layout parameters in android, but there is no built-in type of this type in ts. The conversion can be achieved using the following code

```ts
let textSize =  30.0.toFloat();
```
### Long类型传参


```ts
let longVal =  1000.0.toLong()
```

### 异步任务
### Asynchronous tasks

目前UTS 还不支持使用promise执行异步任务，类似场景可以使用setTimeOut
At present, UTS does not support the use of promises to perform asynchronous tasks. Similar scenarios can use setTimeOut


### 匿名内部类
### Anonymous inner class

UTS目前还不支持匿名内部类的写法，在android中类似这样的场景
UTS currently does not support the writing of anonymous inner classes, which is similar to this scenario in android

```kotlin
getUniActivity()!!.runOnUiThread(Runnable(){
    // do something
});
```

需要声明一个实现类，再新建实例的方式实现，代码如下
You need to declare an implementation class, and then implement it by creating a new instance. The code is as follows

```js
class AddUIRunnable extends Runnable {
    override run():void {
		// do something
    }
};
let uiRunable = new AddUIRunnable();
getUniActivity()!.runOnUiThread(uiRunable)
```

### 泛型参数
### Generic parameters

android中UI相关的api，很多会要求泛型，目前uts中可以使用下面的代码实现
Many UI-related APIs in android will require generics. Currently, the following code can be used in uts.

```ts
let frameContent = decorView.findViewById<FrameLayout>(android.R.id.content)
let layoutParam = new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,ViewGroup.LayoutParams.WRAP_CONTENT);
```

### 函数参数默认值
### Function parameter default value

函数参数支持设置默认值，比如下面testName
Function parameters support setting default values, such as the following testName

```ts
function connectWifi(option: WifiConnectOption,testName :string = "zhangsan") 
```

### 访问JSON对象属性
### Access JSON object properties

`uts`环境中访问`JSON`对象的属性，不能用`user.age` 而要用 `user['age']`
To access the properties of the `JSON` object in the `uts` environment, you cannot use `user.age` but use `user['age']`

```ts

let jsonContent = "{'username':'zhangsan','age':12}"
let jsonObj = JSON.parse(jsonContent);
console.log("jsonObj['age']  == " + jsonObj['age'] );

```

## 路线图
## route map

uts是一个宏大工程，产品将分阶段发布。近期将陆续发布：
1. uts插件中可陆续使用uni的各种api，比如uni.request（已上线部分，还在持续补充）
2. 插件市场支持uts插件的加密和计费销售（已完成）
3. 全新uvue页面，纯原生的视图组件构成的页面
4. vue页面支持uts原生组件

最终，uts不再是uni-app的插件，而是应用的主体。（现在是以js为主，uts作为插件存在，主引擎仍然在v8或jscore里）
Ultimately, uts is no longer a plugin for uni-app, but the body of the app. (Now it is mainly js, uts exists as a plug-in, and the main engine is still in v8 or jscore)

那时，即便是最复杂的应用，比如微信，也可以使用uts来开发，毫无功能和性能的影响。
At that time, even the most complex applications, such as WeChat, could be developed using uts without any functional or performance impact.


## 示例项目
## Example project

DCloud提供了 Hello UTS示例，[详见](https://gitcode.net/dcloud/hello-uts)。
DCloud provides an example of Hello UTS, [see details](https://gitcode.net/dcloud/hello-uts).

插件市场提供了很多uts项目：
The plug-in market provides many uts projects:
- 电量获取封装插件，[详见](https://ext.dcloud.net.cn/plugin?id=9295)
- Power acquisition package plug-in, [see details](https://ext.dcloud.net.cn/plugin?id=9295)
- 截屏监听插件，[详见](https://ext.dcloud.net.cn/plugin?id=9897)
- Screenshot monitoring plug-in, [see details](https://ext.dcloud.net.cn/plugin?id=9897)

更多uts插件见：[https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate](https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate)
For more uts plugins, see: [https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate](https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate)
