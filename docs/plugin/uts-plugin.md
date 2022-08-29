> HBuilderX 3.6+ 支持uts原生插件

## 1 UTS原生插件介绍

### 1.1 什么是uts原生插件

UTS原生插件 是用 [UTS语言](缺链接) 开发的App原生插件。

UTS语言编译到Android平台，会转为kotlin；编译到iOS平台，会转为swift。

**所以UTS开发的插件，编译后也就是kotlin和swift开发的插件。**

开发UTS插件不需要熟悉kotlin和swift的语言语法，因为使用的是基于ts的uts语法。但需要熟悉Android和iOS的系统API，否则无法调用原生能力。

![uts插件结构](https://native-res.dcloud.net.cn/images/uts/UTS%E7%BB%93%E6%9E%84%E7%A4%BA%E6%84%8F%E5%9B%BE1.png)

### 1.2 uts插件与uni原生语言插件的区别

在HBuilderX 3.6以前，uni-app在App侧只有一种原生插件，即用java或object-c开发的插件。

在uts推出后，原来的App原生插件，更名为 App原生语言插件。

不同的名字，代表它们需要开发者编写语言不同。但殊途同归，最后都编译为原生的二进制代码。

|-|原生语言插件|uts原生插件|
|-|-------|--------|
|开发语言|java/oc|uts|
|开发环境|Android studio/XCode|HBuilderX|
|打包方式|外挂aar 等产出物|编译时生成原生代码|
|调用方式|uni.requireNativePlugin()|普通的js函数/对象，可以直接使用|

uts插件的优势：

1. 统一了编程语言（UTS），一种语言开发所有平台，真正大前端。
2. 统一了开发工具（HBuilderX），免除搭建复杂的原生开发环境。
3. 插件封装中要理解的概念更少。 传统原生语言插件需要在js和原生层处理通信，使用各种特殊转换，使用特殊语法导入，注意事项很多。**uts统一为纯前端概念，简单清晰。**
4. uts下前端和原生可以统一在HBuilderX中联调。而传统原生语言插件需要原生开发后打包，然后在js中调用，有问题再改原生，比较低效。


## 2 创建UTS插件

### 2.1 UTS插件目录结构

首先确保项目根目录存在uni_modules文件夹 [关于uni_modules的详细说明](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#%E4%BB%80%E4%B9%88%E6%98%AF-uni-modules)

如果不存在，需要手动创建一个。

![插件目录](https://native-res.dcloud.net.cn/images/uts/uni_modules.jpg)

### 2.2 新建步骤拆解

选中`uni_modules`目录 -- 右键 -- 新建插件

![新建插件1](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin.jpg)

选择 **UTS原生插件**

![新建插件2](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin2.jpg)

UTS插件目录结构

![新建插件3](https://native-res.dcloud.net.cn/images/uts/new_uts_plugin3.jpg)


### 2.3 清单文件package.json

package.json为插件的清单文件，这里集成了整个UTS插件的配置信息，下面是一个简单的示例


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


### 2.4 插件的平台实现

一个UTS插件，代表的应该是**Uni标准下的一种扩展能力**

插件目录下：
 
index.d.ts文件是对当前插件能力的**声明**

index.uts文件是对当前插件能力的**实现**

针对一些通用的功能，可以用过插件根目录下 index.uts实现即可。


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


app-android 文件夹下存在两个文件

|文件名|用途|
|index.uts|index.d.ts声明的能力在Android平台下的实现|
|config.json|Android平台下的配置文件|
 



下面是一个config.json 实例，这里的格式与原有的 package.json保持一致的。[关于package.json的更多说明](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#package-json)

```json
{
         // 依赖某些arr
	"libs": [
	  "xxx.aar"
	],
        // 依赖某些gradle配置
	"dependencies": [{
	  "id": "com.xxx.richtext:richtext",
	  "source": "implementation 'com.xxx.richtext:richtext:3.0.7'"
	}],
        // Android系统版本要求，最低Android 5.0
	"minSdkVersion": 21
},
```



*注意:当同时存在平台目录的index.uts和 根目录index.uts时，会优先获取具体的平台目录*


## 3 开发UTS原生插件

以android平台获取电量为例，介绍UTS原生插件开发步骤

![OSAPI示例](https://native-res.dcloud.net.cn/images/uts/uts_osapi_demo.jpg)

在android平台目录下，编辑index.uts,键入以下内容


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


至此，我们已经完成一个android平台上获取电量的原生能力封装。

在下一节，将介绍插件的使用，可以像使用普通js函数一样，使用getBatteryCapacity函数来获取设备电量。

关于android开发UTS插件的更多细节说明，参考文档[todo]和[示例](缺地址)

注：HBuilderX的代码提示系统，支持在uts文件中对Android的原生API进行提示。

## 4 使用插件

### 4.1 引用UTS插件

虽然uts插件由uts语法开发，但前端引用插件并非一定需要ts，普通js即可。

下面介绍两种常见的引入方式

1.泛型引用

作为一个对象全部import进来，然后通过点运算符调用这个对象的方法或属性。

```js
// 先引用，全部导入，对象起名为UTSHello
import * as UTSHello from "../../../uni_modules/uts-helloworld";

// 然后使用UTSHello的方法
UTSHello.getBatteryCapacity()
```


2.显性引用

从可导出的选项里import 1个或多个（逗号分隔），然后直接使用导出的方法或属性。

```js
//先引用，导入指定方法或属性
import {
  getBatteryCapacity
} from "../../../uni_modules/uts-helloworld";

// 然后使用导入的方法
getBatteryCapacity()
```

更多使用示例，可以参考示例插件 [HelloUTS](缺地址) 。

## 5 真机运行

uts虽然是原生代码，但同样具有真机运行功能。

若HBuilderX中没有`uts编译运行插件`，在第一次运行时会自动下载。

在Android上，运行体验与uni-app基本无差异。一样可以热刷新，打印console.log。

目前遗留，后续发版支持事项：
- 目前还不能debug uts源码
- iOS版目前还未发布

关于自定义基座，同之前的uni-app。如果涉及微信支付等自定义manifest信息，需要选择自定义基座运行。自定义基座也支持uts插件。

## 6 云端打包

正常支持云端打包。

但注意，虽然uts在真机运行时支持热刷，但打包后uts编译为了纯原生二进制代码，不支持wgt热更新。

<!-- 提供了Androidmanifest.xml -->

## 7 示例项目

完整的示例项目地址：


