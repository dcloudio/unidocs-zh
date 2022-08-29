> HBuilderX 3.6+ 支持uts原生插件
> HBuilderX 3.6+ supports uts native plugin

## 1 UTS原生插件介绍
## 1 UTS native plugin introduction

### 1.1 什么是uts原生插件
### 1.1 What is uts native plugin

UTS原生插件 是用 [UTS语言](缺链接) 开发的App原生插件。
UTS native plugin is an App native plugin developed in [UTS language](missing link).

UTS语言编译到Android平台，会转为kotlin；编译到iOS平台，会转为swift。
UTS language compiled to the Android platform will be converted to kotlin; compiled to the iOS platform, it will be converted to swift.

**所以UTS开发的插件，编译后也就是kotlin和swift开发的插件。**
**So the plug-ins developed by UTS, after compilation, are the plug-ins developed by kotlin and swift. **

开发UTS插件不需要熟悉kotlin和swift的语言语法，因为使用的是基于ts的uts语法。但需要熟悉Android和iOS的系统API，否则无法调用原生能力。
The development of UTS plugins does not require familiarity with the language syntax of kotlin and swift, because the ts-based uts syntax is used. However, you need to be familiar with the system APIs of Android and iOS, otherwise you cannot call native capabilities.

![uts插件结构](https://native-res.dcloud.net.cn/images/uts/UTS%E7%BB%93%E6%9E%84%E7%A4%BA%E6%84%8F%E5%9B%BE1.png)
![uts plugin structure](https://native-res.dcloud.net.cn/images/uts/UTS%E7%BB%93%E6%9E%84%E7%A4%BA%E6%84%8F %E5%9B%BE1.png)

### 1.2 uts插件与uni原生语言插件的区别
### 1.2 The difference between uts plugin and uni native language plugin

在HBuilderX 3.6以前，uni-app在App侧只有一种原生插件，即用java或object-c开发的插件。
Before HBuilderX 3.6, uni-app had only one native plug-in on the App side, that is, a plug-in developed with java or object-c.

在uts推出后，原来的App原生插件，更名为 App原生语言插件。
After the launch of uts, the original App native plugin was renamed the App native language plugin.

不同的名字，代表它们需要开发者编写语言不同。但殊途同归，最后都编译为原生的二进制代码。
Different names mean that they require developers to write in different languages. But the same results are obtained, and they are finally compiled into native binary code.

|-|原生语言插件|uts原生插件|
|-|Native language plugin|uts native plugin|
|-|-------|--------|
|开发语言|java/oc|uts|
|Development language|java/oc|uts|
|开发环境|Android studio/XCode|HBuilderX|
|Development Environment|Android studio/XCode|HBuilderX|
|打包方式|外挂aar 等产出物|编译时生成原生代码|
|Packaging method|External output such as plug-in aar|Generate native code when compiling|
|调用方式|uni.requireNativePlugin()|普通的js函数/对象，可以直接使用|
|Call method|uni.requireNativePlugin()|Ordinary js function/object, you can use it directly|

uts插件的优势：
Advantages of uts plugin:

1. 统一了编程语言（UTS），一种语言开发所有平台，真正大前端。
1. Unified programming language (UTS), one language to develop all platforms, really big front-end.
2. 统一了开发工具（HBuilderX），免除搭建复杂的原生开发环境。
2. The development tool (HBuilderX) is unified, eliminating the need to build a complex native development environment.
3. 插件封装中要理解的概念更少。 传统原生语言插件需要在js和原生层处理通信，使用各种特殊转换，使用特殊语法导入，注意事项很多。**uts统一为纯前端概念，简单清晰。**
3. There are fewer concepts to understand in plugin packaging. Traditional native language plug-ins need to handle communication at the js and native layers, use various special transformations, import using special syntax, and have many precautions. **uts is unified as a pure front-end concept, simple and clear. **
4. uts下前端和原生可以统一在HBuilderX中联调。而传统原生语言插件需要原生开发后打包，然后在js中调用，有问题再改原生，比较低效。
4. The front-end and native under uts can be jointly debugged in HBuilderX. The traditional native language plug-ins need to be packaged after native development, and then called in js. If there is a problem, then change the native language, which is relatively inefficient.


## 2 创建UTS插件
## 2 Create UTS plugin

### 2.1 UTS插件目录结构
### 2.1 UTS plugin directory structure

首先确保项目根目录存在uni_modules文件夹 [关于uni_modules的详细说明](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#%E4%BB%80%E4%B9%88%E6%98%AF-uni-modules)
First make sure that the uni_modules folder exists in the project root directory [detailed instructions on uni_modules](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#%E4%BB%80%E4%B9%88%E6% 98%AF-uni-modules)

如果不存在，需要手动创建一个。
If it doesn't exist, you need to create one manually.

![插件目录](https://native-res.dcloud.net.cn/images/uts/uni_modules.jpg)
![Plugin Directory](https://native-res.dcloud.net.cn/images/uts/uni_modules.jpg)

### 2.2 新建步骤拆解
### 2.2 New step disassembly

选中`uni_modules`目录 -- 右键 -- 新建插件
Select the `uni_modules` directory -- right click -- create a new plugin

![新建插件1](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin.jpg)
![New Plugin 1](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin.jpg)

选择 **UTS原生插件**
Select **UTS Native Plugin**

![新建插件2](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin2.jpg)
![New Plugin 2](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin2.jpg)

UTS插件目录结构
UTS plugin directory structure

![新建插件3](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin3.jpg)
![New Plugin 3](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin3.jpg)


### 2.3 清单文件package.json
### 2.3 Manifest file package.json

package.json为插件的清单文件，这里集成了整个UTS插件的配置信息，下面是一个简单的示例
package.json is the manifest file of the plug-in, which integrates the configuration information of the entire UTS plug-in. The following is a simple example


```json
{
  "id": "uts-helloworld",
  "displayName": "UTS插件示例",
  "version": "0.1",
  "description": "UTS插件示例",
  "uni_modules": {
    
  }
}
```

[关于package.json的更多说明](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#package-json)
[More instructions on package.json](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#package-json)


### 2.4 插件的平台实现
### 2.4 Platform implementation of plugins

一个UTS插件，代表的应该是**Uni标准下的一种扩展能力**
A UTS plug-in should represent an extension capability under the **Uni standard**

插件目录下：
Under the plugin directory:
 
index.d.ts文件是对当前插件能力的**声明**
The index.d.ts file is a **declaration** of the current plugin capabilities

index.uts文件是对当前插件能力的**实现**
The index.uts file is an **implementation** of the current plugin capabilities

针对一些通用的功能，可以用过插件根目录下 index.uts实现
For some common functions, you can use index.uts in the root directory of the plugin to achieve


但是类似获取电量等原生强相关的场景，不同的平台有不同的语法和API差异。

因此我们设计了 app-android、app-ios 等目录，用以存放不同的平台的能力实现


```
插件标识  
  - utssdk
  	+ app-android //Android平台目录
  	  * index.uts
  	  * config.json
  	+ app-ios //ios平台目录
  	  * index.uts
  	  * config.json
  	+ web //web 平台目录
	  * index.uts
  	+ mp-xxx  // 其他平台，待实现
  - common
  - static
  - package.json
  - index.d.ts  // 插件能力声明
  - index.uts   // 插件能力实现
```




下面以 android 平台为例，介绍平台目录的使用。
The following takes the android platform as an example to introduce the use of the platform directory.


app-android 文件夹下存在下面两个文件

|---|---|
|文件名|用途|
|filename|purpose|
|index.uts|index.d.ts声明的能力在Android平台下的实现|
|index.uts|index.d.ts to declare the ability to realize under the Android platform|
|config.json|Android平台下的配置文件|
|config.json|Configuration file under Android platform|
 



下面是一个config.json 实例，这里的格式与原有的 package.json保持一致的。[关于package.json的更多说明](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#package-json)
The following is an example of config.json, the format here is consistent with the original package.json. [More instructions on package.json](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#package-json)

```json
{
         // 依赖某些arr
         // depend on some arr
	"libs": [
	  "xxx.aar"
	],
        // 依赖某些gradle配置
        // Depends on some gradle configuration
	"dependencies": [{
	  "id": "com.xxx.richtext:richtext",
	  "source": "implementation 'com.xxx.richtext:richtext:3.0.7'"
	}],
        // Android系统版本要求，最低Android 5.0
        // Android system version requirements, minimum Android 5.0
	"minSdkVersion": 21
},
```



*注意:当同时存在平台目录的index.uts和 根目录index.uts时，会优先获取具体的平台目录*
*Note: When the index.uts of the platform directory and the index.uts of the root directory exist at the same time, the specific platform directory will be obtained first*


## 3 开发UTS原生插件
## 3 Develop UTS native plugin

以android平台获取电量为例，介绍UTS原生插件开发步骤
Taking the android platform to obtain electricity as an example, this paper introduces the development steps of UTS native plug-in

![OSAPI示例](https://native-res.dcloud.net.cn/images/uts/uts_osapi_demo.jpg)
![OSAPI example](https://native-res.dcloud.net.cn/images/uts/uts_osapi_demo.jpg)

在android平台目录下，编辑index.uts,键入以下内容
In the android platform directory, edit index.uts and type the following


```ts
// index.uts

// 引用android api
// refer to android api
import Context from "android.content.Context";
import BatteryManager from "android.os.BatteryManager";
// 引用uts环境库
// Refer to the uts environment library
import { getAppContext } from "io.dcloud.uts.android";

export function getBatteryCapacity(): string {
	// 获取android系统 application上下文
	// Get the android system application context
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


至此，我们已经完成一个android平台上获取电量的原生能力封装。
So far, we have completed the encapsulation of the native ability to obtain electricity on the android platform.

在下一节，将介绍插件的使用，可以像使用普通js函数一样，使用getBatteryCapacity函数来获取设备电量。
In the next section, we will introduce the use of plug-ins. You can use the getBatteryCapacity function to get the device battery like a normal js function.

关于android开发UTS插件的更多细节说明，参考文档[todo]和[示例](缺地址)
For more detailed instructions on developing UTS plugins for android, refer to the documents [todo] and [example](missing address)

注：HBuilderX的代码提示系统，支持在uts文件中对Android的原生API进行提示。
Note: HBuilderX's code prompt system supports prompting Android's native API in the uts file.

## 4 使用插件
## 4 Using plugins

### 4.1 引用UTS插件
### 4.1 Reference UTS plugin

虽然uts插件由uts语法开发，但前端引用插件并非一定需要ts，普通js即可。
Although the uts plugin is developed by the uts syntax, the front-end reference plugin does not necessarily require ts, just ordinary js.

下面介绍两种常见的引入方式
Two common introduction methods are described below.

 **泛型引用**
 **Generic reference**

作为一个对象全部import进来，然后通过点运算符调用这个对象的方法或属性。
All imported as an object, and then call the method or property of this object through the dot operator.

```js
// 先引用，全部导入，对象起名为UTSHello
// Reference first, import all, and name the object UTSHello
import * as UTSHello from "../../../uni_modules/uts-helloworld";

// 然后使用UTSHello的方法
// Then use the method of UTSHello
UTSHello.getBatteryCapacity()
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
} from "../../../uni_modules/uts-helloworld";

// 然后使用导入的方法
// then use the imported method
getBatteryCapacity()
```


更多使用示例，可以参考示例插件 [HelloUTS](缺地址) 。
For more usage examples, please refer to the example plugin [HelloUTS](missing address).

## 5 真机运行
## 5 Real machine running

### 5.1 注意事项

正常支持真机运行


**uts虽然是原生代码，但同样具有真机运行功能。**

若HBuilderX中没有`uts编译运行插件`，在第一次运行时会自动下载。
If there is no `uts compile and run plugin` in HBuilderX, it will be downloaded automatically when it is run for the first time.

在Android上，运行体验与uni-app基本无差异。一样可以热刷新，打印console.log。
On Android, the running experience is basically the same as uni-app. You can also hot refresh and print console.log.


### 5.2 自定义基座

同之前的uni-app。如果涉及微信支付等自定义manifest信息，需要选择自定义基座运行。自定义基座也支持uts插件。

### 5.3 真机运行遗留问题

目前遗留，后续发版支持事项：
The current legacy, the follow-up release support matters:
- 目前还不能debug uts源码
- Currently unable to debug uts source code
- iOS版目前还未发布
- iOS version is not yet released


## 6 云端打包
## 6 Cloud Packaging

正常支持云端打包。
Cloud packaging is normally supported.

**注意，虽然uts在真机运行时支持热刷，但打包后uts编译为了纯原生二进制代码，不支持wgt热更新。**


## 7 示例项目
## 7 Example project

完整的示例项目地址：
Complete example project address:


