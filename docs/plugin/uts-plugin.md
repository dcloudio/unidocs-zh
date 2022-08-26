> HBuilderX 3.6+ 支持uts原生插件

## 1 UTS原生插件介绍
## 1 UTS native plugin introduction

### 1.1 什么是uts原生插件
### 1.1 What is uts native plugin

UTS原生插件 是用 [UTS语言](缺链接) 开发的App原生插件。

UTS语言编译到Android平台，会转为kotlin；编译到iOS平台，会转为swift。

所以UTS开发的插件，编译后也就是kotlin和swift开发的插件。

开发UTS插件不需要熟悉kotlin和swift的语言语法，因为使用的是基于ts的uts语法。但需要熟悉Android和iOS的系统API，否则无法调用原生能力。

![uts插件结构](https://native-res.dcloud.net.cn/images/uts/UTS%E7%BB%93%E6%9E%84%E7%A4%BA%E6%84%8F%E5%9B%BE1.png)
![uts plugin structure](https://native-res.dcloud.net.cn/images/uts/UTS%E7%BB%93%E6%9E%84%E7%A4%BA%E6%84%8F %E5%9B%BE1.png)

### 1.2 uts插件与uni原生语言插件的区别

在HBuilderX 3.6以前，uni-app在App侧只有一种原生插件，即用java或object-c开发的插件。

在uts推出后，原来的App原生插件，更名为 App原生语言插件。

不同的名字，代表它们需要开发者编写语言不同。但殊途同归，最后都编译为原生的二进制代码。

|-|原生语言插件|uts原生插件|
|-|-------|--------|
|开发语言|java/oc|uts|
|Development language|java/oc|uts|
|开发环境|Android studio/XCode|HBuilderX|
|Development Environment|Android studio/XCode|HBuilderX|
|打包方式|外挂aar 等产出物|编译时生成原生代码|
|调用方式|uni.requireNativePlugin()|普通的js直接import|

uts的优势：

1. 统一了编程语言（uts），一种语言开发所有平台，真正大前端。
2. 统一了开发工具（HBuilderX），免除搭建复杂的原生开发环境。
3. 插件封装中要理解的概念更少，传统原生语言插件需要在js和原生层处理通信，使用各种特殊转换，使用特殊语法导入，注意事项很多。uts统一为纯前端概念，简单清晰。
4. uts下前端和原生可以统一在HBuilderX中联调。而传统原生语言插件需要原生开发后打包，然后在js中调用，有问题再改原生，比较低效。


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

package.json为插件的清单文件，这里集成了整个UTS插件的配置信息，下面是一个完整的示例
```json
{
  "id": "uts-helloworld",
  "displayName": "UTS插件示例",
  "version": "0.1",
  "description": "UTS插件示例",
  "uni_modules": {
    "type": "uts",
    "uts": {
      "android": {
        "libs": [
          "xxx.aar"
        ],
        "dependencies": [{
          "id": "com.xxx.richtext:richtext",
          "source": "implementation 'com.xxx.richtext:richtext:3.0.7'"
        }],
        "minSdkVersion": 21
      },
      "ios": {
        "libs": [
          "xxx.a"
        ]
      },
      "dependencies": [
        "xxx.uts"
      ]
    }
  }
}
```



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

关于android开发UTS插件的更多细节说明，参考文档[todo]和[示例](缺地址)

注：HBuilderX的代码提示系统，支持在uts文件中对Android的原生API进行提示。

## 4 使用插件
## 4 Using plugins

### 4.1 引用UTS插件
### 4.1 Reference UTS plugin

虽然uts插件由uts语法开发，但前端引用插件并非一定需要ts，普通js即可。

下面介绍两种常见的引入方式
Two common introduction methods are described below.

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
Complete example project address:


