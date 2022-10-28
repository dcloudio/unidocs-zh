## 1 uts插件介绍

> HBuilderX 3.6+ 支持uts插件

### 什么是uts

uts，全称 uni type script，是一门跨平台的、高性能的、强类型的现代编程语言。

它可以被编译为不同平台的编程语言，如：

- web平台，编译为JavaScript
- Android平台，编译为Kotlin
- iOS平台，编译为Swift（HX 3.6.7+ 版本支持）

uts 采用了与 ts 基本一致的语法规范，支持绝大部分 ES6 API。

如需详细了解uts语法，另见[uts语法介绍](../tutorial/syntax-uts.md)

### 什么是uts插件

现有的 uni-app，仍以js引擎为主。但从HBuilderX 3.6开始，uni-app 支持 uts 插件（暂时仅支持vue3编译器，后续补充vue2）。

也就是 uts 的第一步不是完整开发一个独立的 app，而是作为 uni-app 的插件。后续 uts 会持续迭代，达到完整开发 app 的水平。

uts 插件编译到 app 平台时，在功能上相当于 uni-app 之前的 app 原生插件，也就是 Kotlin 和 Swift 开发的插件。

开发 uts 插件不需要熟悉 Kotlin 和 Swift 的语法，因为使用的是基于 ts 的语法。但需要熟悉 Android 和 iOS 的系统 API，否则无法调用原生能力。

![uts插件结构](https://native-res.dcloud.net.cn/images/uts/UTS%E7%BB%93%E6%9E%84%E7%A4%BA%E6%84%8F%E5%9B%BE1.png)

### uts插件与uni原生语言插件的区别

在 HBuilderX 3.6 以前，uni-app 在 App 侧只有一种原生插件，即用 java 或 Objective-C 开发的插件。

在 uts 推出后，原来的 “App原生插件”，更名为 “App原生语言插件”。

不同的名字，代表它们需要开发者编写语言不同。但殊途同归，最后都编译为原生的二进制代码。

|				|原生语言插件				|uts插件|
|:------		|:-------					|:--------|
|开发语言		|java/oc					|uts|
|开发环境		|Android Studio/XCode		|HBuilderX|
|打包方式		|外挂aar 等产出物			|编译时生成原生代码|
|js层调用方式	|uni.requireNativePlugin()	|普通的js函数/对象，可以直接 import|

相当于原生语言插件，uts插件的优势：

1. 统一了编程语言（uts），一种语言开发所有平台，真正大前端。
2. 统一了开发工具（HBuilderX），免除搭建复杂的原生开发环境。
3. 插件封装中要理解的概念更少。 传统原生语言插件需要在js和原生层处理通信，使用各种特殊转换，使用特殊语法导入，注意事项很多。**uts统一为纯前端概念，简单清晰。**
4. uts 下前端和原生可以统一在 HBuilderX 中联调。而传统原生语言插件需要在多个开发工具间切换，联调复杂。

但当前的 uts 插件的完善度还没有达到原生语言插件的水平，虽然会陆续升级解决，但明示如下：

1. uts 插件只支持 vue3 编译器，还不支持 vue2
2. uts 插件无法封装 nvue 页面组件
3. uts 插件还无法在插件市场计费销售

### uts插件和Native.js的区别

- [Native.js](../tutorial/native-js.md) 运行在js上，通过反射调用os api。功能和性能都不及真正的原生
- uts 在 app 上不运行在 js 引擎里，是真正的原生。


## 2 创建uts插件

### uts 插件目录结构

在 uni-app 的项目工程下，提供了独立的目录 `utssdk`，来存放 uts 插件。

当然官方更推荐使用 [uni_modules](uni_modules.md) 方式，这是更好的包管理方案。

首先确保项目根目录存在 uni_modules 文件夹，如果不存在，需要手动创建一个。

![插件目录](https://native-res.dcloud.net.cn/images/uts/uni_modules.jpg)

### 新建步骤拆解

右键点击`uni_modules`目录 -> 新建插件

![新建插件1](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin.jpg)

选择类型 **uts原生插件**

![新建插件2](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin2_1.jpg)

**为了避免和插件市场的其他插件冲突，建议起一个自己的插件前缀名称。**

uts插件目录结构

![新建插件3](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin3_1.jpg)


### package.json

package.json 为 uni_modules 插件配置清单文件，负责描述插件的基本配置。


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

### 插件的目录结构

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
│	│	└─index.uts
│	├─app-ios                     //iOS 平台目录
│	│	├─Frameworks              //iOS 插件依赖的第三方 framework 依赖库存放目录，可选
│	│	├─Resources               //iOS 插件所依赖的资源文件存放目录，可选
│	│	├─info.plist              //iOS 插件所需要添加到主 info.plist 文件中的配置文件，可选
│	│	├─config.json             //iOS 插件配置文件
│	│	└─index.uts
│	├─web                         //web平台目录
│	│	└─index.uts
│	└─mp-xxx                      // 其他平台目录
├─package.json                    // 插件清单文件
├─index.d.ts                      // 插件能力声明，可选
└─index.uts                       // 插件能力实现
</code>
</pre>


根目录 index.uts 文件是程序主入口。如果插件根目录下没有 index.uts，则会在编译到不同平台时，寻找分平台的目录下的 index.uts 文件。

比如编译到 app-android 平台时，如果 uts 插件根目录没有 index.uts，会寻找 utssdk/app-android/index.uts。如果也没有找到，会报错。

当同时存在分平台目录的 index.uts 和根目录 index.uts 时，会优先获取具体的分平台目录。

开发者有多种组织自己代码的方式：

1. 在插件根目录的 index.uts 中写条件编译代码。简单的业务一个文件搞定
2. 在插件根目录 index.uts 中写条件编译，import 分平台的文件
3. 不写根目录的 index.uts，直接在分平台目录写 index.uts。不跨端时，比如只做一个 Android 插件，这样写比较简单

index.d.ts 文件是对当前插件能力的**声明**，用于语法提示。它不是必写项。

因为 uts 写好后，HBuilderX 可以自动识别 uts api 并进行语法提示。它更多的用于后续 uts 插件加密时给予语法提示。

如果不熟悉 d.ts，可以自行网上搜索，它属于 ts 标准技术。

### App原生配置

#### Android平台原生配置

app-android 文件夹下存在Android平台原生配置，包括以下目录或文件

|目录名/文件名			|用途									|
|---					|---									|
|assets					|Android平台原生assets资源目录			|
|libs					|Android平台原生引用的三方jar/aar目录		|
|res					|Android平台原生res资源目录				|
|AndroidManifest.xml	|Android平台原生应用清单文件				|
|config.json			|Android平台下的配置文件					|
|index.uts				|主入口，index.d.ts声明的能力在Android平台下的实现	|


##### assets  
Android平台原生assets资源目录，建议只保存UTS插件内置的资源文件。

除了插件下有assets目录，项目下也有。注意2者的区别。
如果需要插件使用者配置（如三方SDK的授权文件），则插件作者应该在插件文档中告诉插件使用者，配置到项目的Android原生应用资源目录，而不是配置在插件目录下。[详见](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)

##### libs  
Android平台原生三方库目录，支持以下类型文件：
- jar 
- aar
- so库

如果封装三方原生sdk为uni-app插件，可以将sdk的jar/aar文件放到此目录，但因为多个uts插件引用相同三方原生sdk时可能会产生冲突，所以如果sdk支持仓储，建议优先使用仓储配置，而不是直接把jar等文件放在libs目录。仓储配置参考config.json的[dependencies](#dependencies)。  

如果使用的三方sdk包含了so库，保存到此目录时，需按Android的abi类型分目录保存。

关于libs目录的使用，可以参考 [Hello UTS](https://gitcode.net/dcloud/hello-uts/-/tree/master/uni_modules)

> 遗留事项: HBuilderX3.6.2版本对libs目录使用还不完善，[详见](#tempnotice)

##### res  
Android平台原生res资源目录，建议只保存UTS插件内置的资源文件。

除了插件下有res目录，项目下也有。注意2者的区别。一般使用者的配置不放在插件下，而放在自己的项目下。项目下配置[详见](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)

注意：截止到HBuilderX3.6.2，uts插件无法使用res。图片资源建议放在assets目录。

##### AndroidManifest.xml  
Android原生应用清单文件，建议只保存UTS插件内置的清单文件配置。

除了插件下有AndroidManifest.xml，项目下也有。注意2者的区别。一般使用者的配置不放在插件下，而放在自己的项目下。项目下配置[详见](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)

##### config.json
uts插件在Android平台的原生层配置文件，可以在其中配置依赖仓储等gradle相关内容。

```json
{
	// 使用NDK时支持的CPU类型，可选（打包时不要复制注释）
	"abis": [
	    "使用NDK时支持的cpu类型, 可取值armeabi-v7a|arm64-v8a|x86|x86_64"
	],
    // 依赖的仓储配置，可选，打包时会合并到原生工程的build.gradle中（打包时不要复制注释）
	"dependencies": [
		"androidx.core:core-ktx:1.6.0",
		{
			"id": "com.xxx.richtext:richtext",
			"source": "implementation 'com.xxx.richtext:richtext:3.0.7'"
		}
	],
    // Android系统版本要求，最低Android 5.0（打包时不要复制注释）
	"minSdkVersion": 21
}
```

- abis  
当插件使用了NDK开发的so库时配置，描述插件支持CPU类型。  
可取值：armeabi-v7a、arm64-v8a、x86、x86_64

<a id="dependencies"/>

- dependencies  
配置插件依赖的仓储，云端打包时会合并到Android原生工程的build.gradle的  
数组类型，数组中的项可以是字符串类型或JSON对象  
对于字符串类型项，将会作为`implementation`方式依赖添加到build.gradle中，上面示例中"androidx.core:core-ktx:1.6.0"将会添加以下配置  
```
dependencies {
  implementation 'androidx.core:core-ktx:1.6.0'
}
```
对于JSON类型项，将会把source字段值作为gradle源码添加到build.gradle中，上面示例中"id": "com.xxx.richtext:richtext"项将会添加以下配置  
```
dependencies {
  implementation 'com.xxx.richtext:richtext:3.0.7'
}
```

> 遗留事项: HBuilderX3.6.1版本对dependencies配置支持还不完善，[详见](#tempnotice)

- minSdkVersion  
插件支持的Android最低版本，整数类型，取值范围为Android API Level  
默认uni-app最低支持版本为19，即Android4.3.3


**注意：**

- Android平台原生配置需提交云端打包才能生效，真机运行时需使用[自定义基座](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)

##### 三方依赖临时注意事项@tempnotice

截止到HBuilderX 3.6.7版本，关于原生依赖的处理有部分不完善，需要注意以下事项：

+ config.json 目前还不支持配置仓库依赖，需要将gradle配置的库手动下载后，放置在libs目录，使用手动添加的方式集成

+ 内置依赖需要手动添加的问题在HX3.6.7 已修复。开发者在使用列表中的依赖时，需要注意两点：

   1  真机运行时，不需要添加列表中的依赖，即可直接引用相关类

   2  请勿通过 手动添加jar/aar 等方式引入相同的依赖，否则会因依赖冲突导致云打包失败。

	
[内置依赖清单](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html#_3-4-%E5%A2%9E%E5%8A%A0libs%E4%BE%9D%E8%B5%96%E8%B5%84%E6%BA%90)

这些遗留事项会尽快升级完善。

#### iOS 平台原生配置

app-ios 文件夹下存在 iOS 平台原生配置，包括以下目录或文件

|目录名/文件名	|用途|
|:---|:---|
| Frameworks |iOS 插件需要引用的三方 framework 依赖库存放目录|
| Resources |iOS 插件需要引用的资源文件存放目录|
| info.plist|iOS 插件需要添加到原生工程 info.plist 中的配置文件|
| config.json| iOS 原生工程的配置文件|
|index.uts| 主入口，index.d.ts 声明的能力在 iOS 平台下的实现|

##### Frameworks 

如果 uts 插件需要依赖三方库，需要将三方依赖库存放到 Frameworks 目录中，注意：目前仅支持 .framework 依赖库

##### Resources

如果 uts 插件需要依赖资源文件，需要将资源文件存放到 Resources 目录中，打包时会将 Resources 目录中的所有文件添加到应用 main bundle 中

##### info.plist

如果 uts 插件需要在原生工程的 info.plist 中添加配置，则需要在插件工程中添加 info.plist 配置文件添加插件所需要的配置项，打包时会将配置信息同步到原生工程的 info.plist 中

示例： 添加位置权限描述信息 和 开启后台定位

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>NSLocationAlwaysUsageDescription</key>
	<string>访问位置权限</string>
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>使用期间获取位置权限</string>
	<key>TencentLBSAPIKey</key>
	<string>LZTBZ-77PCJ-HJAFN-KWXJ2-H357V-DJBK4</string>
	<key>UIBackgroundModes</key>
	<array>
		<string>location</string>
	</array>
  </dict>
</plist>
```

##### config.json

uts 插件在 iOS 平台的原生层配置文件，可以在其中配置依赖的系统库等配置信息 

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

- iOS 平台 uts 原生插件需提交云端打包才能生效，真机运行时需使用[自定义基座](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)

## 3 开发uts原生插件

以获取电量为例，介绍uts原生插件开发步骤

**首先在 uni_modules 目录下新建名为 uni-getbatteryinfo 的 uts 插件**

### Android平台


![OSAPI示例](https://native-res.dcloud.net.cn/images/uts/uts_osapi_demo_1.jpg)

在Android平台目录下，编辑index.uts，键入以下内容。


```ts
// index.uts

// 引用android api
import Context from "android.content.Context";
import BatteryManager from "android.os.BatteryManager";
// 引用uts环境库
import { getAppContext } from "io.dcloud.uts.android";

export function getBatteryCapacity(): string {
	// 获取android系统 application上下文
    const context = getAppContext();
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

`io.dcloud.uts.android`库介绍文档[见下](#iodcloudutsandroid)

至此，我们已经完成一个Android平台上获取电量的原生能力封装。

在下一节，将介绍前端如何使用这个插件。

注：HBuilderX的代码提示系统，支持在uts文件中对Android的原生API进行提示。


特别提示：

**有android开发经验的开发者可以参考：[Android开发者uts快速上手指南](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html)**


### iOS 平台

![](https://native-res.dcloud.net.cn/images/uts/iOS/getbatteryinfo1.png)

在 iOS 平台目录下，编辑 index.uts，键入以下内容

```ts
// index.uts

// 引用 iOS 原生平台 api
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
	UIDevice.current.isBatteryMonitoringEnabled = true
	
	// 返回数据
    const res = {
        errMsg: "getBatteryInfo:ok",
        level: Number(UIDevice.current.batteryLevel * 100),
        isCharging: UIDevice.current.batteryState == UIDevice.BatteryState.charging,
    };
    options.success?.(res);
    options.complete?.(res);
}
```

至此，我们已经完成一个 iOS 平台上获取电量的原生能力封装。

## 4 前端使用插件

虽然uts插件由uts语法开发，但前端引用插件并不要求一定需要ts，普通js即可引用uts插件。

下面介绍两种常见的引入方式

 **泛型引用**

作为一个对象全部import进来，然后通过点运算符调用这个对象的方法或属性。

```js
// 先引用，全部导入，对象起名为UTSHello
import * as UTSHello from "../../../uni_modules/uts-osapi";

// 然后使用UTSHello的方法
UTSHello.getBatteryCapacity()
```


**显性引用**

从可导出的选项里import 1个或多个（逗号分隔），然后直接使用导出的方法或属性。

```js
//先引用，导入指定方法或属性
import {
  getBatteryCapacity
} from "../../../uni_modules/uts-osapi";

// 然后使用导入的方法
getBatteryCapacity()
```

关于电量这个插件，插件市场已经提供好了现成的插件，除了Android，还同时支持了web和小程序，可以去下载体验。[详见](https://ext.dcloud.net.cn/plugin?id=9295)

更多开发示例，可以参考 [HelloUTS](https://gitcode.net/dcloud/hello-uts)。

## 5 真机运行

### 5.1 UTS支持真机运行

**uts虽然是原生代码，但同样具有真机运行功能**

若HBuilderX中没有`uts编译运行插件`，在第一次运行时会自动下载。

在Android上，运行体验与uni-app基本无差异。一样可以热刷新，打印console.log。

**注意：**

- iOS 平台 uts 插件需提交云端打包才能生效，真机运行时需使用[自定义基座](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)

### 5.2 自定义基座

自定义基座也支持uts插件。

与原生插件一样,涉及以下场景,需要自定义基座后方能生效:

- 1 集成三方sdk
- 2 新增资源(包括res/asset 等)

总结来说，就是所有 涉及新增依赖/gralde配置/androidManifest.xml/资源 等标准基座不具备的能力时，需要自定义基座


### 5.3 遗留问题

截止到HBuilderX 3.6.2 时遗留事项：
- 不能debug断点uts源码
- uts插件还不支持远程仓库依赖，目前添加插件的配置方法参考 [这个章节](#tempnotice)
- uts插件无法使用res。图片资源建议放在assets目录。

遗留事项后续升级完善。

## 6 云端打包

正常支持云端打包。

注意：虽然uts在真机运行时支持热刷，但打包后uts编译为了纯原生二进制代码，不支持wgt热更新。

打包若包含了已经内置的依赖库，则需注意参考 [这个章节](#tempnotice)

## uni-app的Android内置库@iodcloudutsandroid

在uts里，Android的所有api都可以访问。同时DCloud提供了`io.dcloud.uts.android`库，方便开发者快速获取android 上下文环境


### 1 application 上下文相关



#### 1.1 getAppContext

HX 3.6.3+ 版本支持


```ts
import { getAppContext } from "io.dcloud.uts.android";
```

用法说明：获取当前应用Application上下文，对应android平台 Context.getApplicationContext 函数实现

Android开发场景中，调用应用级别的资源/能力，需要使用此上下文。更多用法，参考[Android官方文档](https://developer.android.google.cn/docs)


```ts
// [示例]获取asset下的音频，并且播放
let assetManager = getAppContext()!.getAssets();
let afd = assetManager.openFd("free.mp3");
let mediaPlayer = new MediaPlayer();
mediaPlayer.setDataSource(afd.getFileDescriptor(),afd.getStartOffset(), afd.getLength());
mediaPlayer.prepare();
mediaPlayer.start();
```


#### 1.2 getResourcePath(resourceName:String)

HX 3.6.3+ 版本支持


```ts
import { getResourcePath } from "io.dcloud.uts.android";
```

获取指定插件资源的运行期绝对路径
 
```ts
// [示例]获取指定资源路径
// 得到文件运行时路径: `/storage/emulated/0/Android/data/io.dcloud.HBuilder/apps/__UNI__3732623/www/uni_modules/test-uts-static/static/logo.png`
getResourcePath("uni_modules/test-uts-static/static/logo.png")

```

#### 1.3 onAppTrimMemory

HX 3.6.8+ 版本支持

```ts
import { onAppTrimMemory } from "io.dcloud.uts.android";
```

App 内存不足时，系统回调函数 对应原生的API: onTrimMemory

```ts
onAppTrimMemory((level:Number) => {
	let eventName = "onAppTrimMemory - " + level;
	console.log(eventName);
});
```

### 1.4 onAppConfigChange

HX 3.6.8+ 版本支持

```ts
import { onAppConfigChange } from "io.dcloud.uts.android";
```

App 配置发生变化时触发，比如横竖屏切换 对应原生的API: onConfigurationChanged

```ts
onAppConfigChange((ret:UTSJSONObject) => {
	let eventName = "onAppConfigChange - " + JSON.stringify(ret);
	console.log(eventName);
});
```


特别说明：除了本章节列出的函数外，android环境下 application 其他上下文方法都可以通过 getAppContext()!.xxx()的方式实现

比如获取app缓存目录：

```
getAppContext()!.getExternalCacheDir()!.getPath()
```


### 2.2 Activity 上下文



#### 2.1 getUniActivity

HX 3.6.3+ 版本支持

```ts
import { getUniActivity } from "io.dcloud.uts.android";
```

获取当前插件所属的activity实例，对应android平台 getActivity 函数实现

Android开发场景中，调用活动的级别的资源/能力，需要使用此上下文。更多用法，参考[Android官方文档](https://developer.android.google.cn/docs)

```ts
// [示例]获取当前activity顶层容器
let frameContent = decorView.findViewById<FrameLayout>(android.R.id.content)
```

#### 2.2 onAppActivityPause

HX 3.6.3+ 版本支持

```ts
import { onAppActivityPause } from "io.dcloud.uts.android";
```

App的activity onPause时触发

```ts
onAppActivityPause(() => {
    let eventName = "onAppActivityPause - " + Date.now();
    console.log(eventName);
});
```

#### 2.3 onAppActivityResume

HX 3.6.3+ 版本支持

```ts
import { onAppActivityResume } from "io.dcloud.uts.android";
```

App的activity onResume时触发

```ts
onAppActivityResume(() => {
     let eventName = "onAppActivityResume - " + Date.now();
     console.log(eventName);
});
```

#### 2.4 onAppActivityDestroy

HX 3.6.3+ 版本支持

```ts
import { onAppActivityDestroy } from "io.dcloud.uts.android";
```

App 的 activity onDestroy时触发

```ts
onAppActivityDestroy(() => {
     let eventName = "onAppActivityDestroy- " + Date.now();
     console.log(eventName);
});
```

#### 2.5 onAppActivityBack

HX 3.6.3+ 版本支持

```ts
import { onAppActivityBack } from "io.dcloud.uts.android";
```

App 的 activity 回退物理按键点击时触发

```ts
onAppActivityBack(() => {
     let eventName = "onAppActivityBack- " + Date.now();
     console.log(eventName);
});

```

#### 2.6 onAppActivityResult

HX 3.6.8+ 版本支持

```ts
import { onAppActivityResult } from "io.dcloud.uts.android";
```

App 的 activity 启动其他activity的回调结果监听 对应原生的 onActivityResult

```ts
onAppActivityResult((requestCode: Int, resultCode: Int, data?: Intent) => {
	let eventName = "onAppActivityResult  -  requestCode:" + requestCode + " -resultCode:"+resultCode + " -data:"+JSON.stringify(data);
    console.log(eventName);
});
```



#### 2.7 onAppActivityRequestPermissionsResult

HX 3.6.3+ 版本支持

```ts
import { onAppActivityRequestPermissionsResult } from "io.dcloud.uts.android";
```

App 的 activity 获得权限请求结果的回调

```ts
onAppActivityRequestPermissionsResult((requestCode: number,
                                                     permissions: MutableList<string>,
                                                     grantResults: MutableList<number>) => {
		
		console.log(grantResults);
		console.log(permissions);   
		console.log(requestCode);
	});

//发起定位权限申请
ActivityCompat.requestPermissions(getUniActivity()!,
	    arrayOf(Manifest.permission.ACCESS_COARSE_LOCATION), 1001);

```


特别说明：除了本章节列出的函数外，android环境下 activity 其他上下文方法都可以通过 getUniActivity()!.xxx()的方式实现

比如获取当前activity的顶层View容器

```
getUniActivity()!.getWindow().getDecorView();
```


## 常见问题

### 常见报错

- [plugin:vite:resolve] Failed toresolve entry for package "插件路径"
	HBuilderX 的最低要求为3.6.0，低于此版本无法import uts插件，编译时将报错。

- 文件查找失败：'uts插件路径'
    目前暂未支持 vue2，vue2 的uni-app项目无法import uts插件，编译时将报错。

### Float类型传参

android很多布局参数强制要求Float，但是ts中没有内置这种类型。可以使用下面的代码实现转换

```ts
let textSize =  30.0.toFloat();
```

### 匿名内部类

UTS目前还不支持匿名内部类的写法，在android中类似这样的场景

```kotlin
getUniActivity()!!.runOnUiThread(Runnable(){
    // do something
});
```

需要声明一个实现类，再新建实例的方式实现，代码如下

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

android中UI相关的api，很多会要求泛型，目前uts中可以使用下面的代码实现

```ts
let frameContent = decorView.findViewById<FrameLayout>(android.R.id.content)
let layoutParam = new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,ViewGroup.LayoutParams.WRAP_CONTENT);
```

## 路线图

uts是一个宏大工程，产品将分阶段发布。近期将陆续发布：
1. iOS热刷新
2. 支持vue2编译器
3. debug
4. UI操作能力
5. 插件市场支持uts插件的加密和计费销售

最终，uts不再是uni-app的插件，而是应用的主体。（现在是以js为主，uts作为插件存在，主引擎仍然在v8或jscore里）

那时，即便是最复杂的应用，比如微信，也可以使用uts来开发，毫无功能和性能的影响。


## 示例项目

DCloud提供了 Hello UTS示例，[详见](https://gitcode.net/dcloud/hello-uts)。

插件市场提供了一个跨Android、web、微信小程序的电量获取封装插件，[详见](https://ext.dcloud.net.cn/plugin?id=9295)
