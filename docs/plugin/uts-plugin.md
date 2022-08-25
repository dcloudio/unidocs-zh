
## 1 UTS原生插件介绍
## 1 UTS native plugin introduction

### 1.1 什么是uts原生插件
### 1.1 What is uts native plugin

UTS原生插件 是用UTS作为插件开发语言的一种新型插件形式。
UTS native plug-in is a new form of plug-in that uses UTS as the plug-in development language.


![uts插件结构](https://native-res.dcloud.net.cn/images/uts/UTS%E7%BB%93%E6%9E%84%E7%A4%BA%E6%84%8F%E5%9B%BE1.png)
![uts plugin structure](https://native-res.dcloud.net.cn/images/uts/UTS%E7%BB%93%E6%9E%84%E7%A4%BA%E6%84%8F %E5%9B%BE1.png)

### 1.2 uts原生插件与uni原生插件的区别
### 1.2 The difference between uts native plugin and uni native plugin

|-|传统原生插件|uts原生插件|
|-|Traditional native plugins|uts native plugins|
|-|-------|--------|
|开发语言|java/oc|uts|
|Development language|java/oc|uts|
|开发环境|Android studio/XCode|HBuilderX|
|Development Environment|Android studio/XCode|HBuilderX|
|打包方式|外挂aar 等产出物|编译时生成原生代码|
|Packaging method|External output such as plug-in aar|Generate native code when compiling|

优点：
advantage:

1  减少原生环境搭建环节，降低插件开发难度
1 Reduce the link of building the native environment and reduce the difficulty of plug-in development

2  进一步降低平台差异，一种语言开发两个平台插件
2 Further reduce platform differences, develop two platform plugins in one language

3  编译时生成原生代码，提高代码执行效率
3 Generate native code at compile time to improve code execution efficiency



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
package.json is the manifest file of the plugin, which integrates the configuration information of the entire UTS plugin. The following is a complete example
```
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


```
// index.uts

// 引用android api
// refer to android api
import Context from "android.content.Context";
import BatteryManager from "android.os.BatteryManager";
// 引用uts环境 api
// Refer to the uts environment api
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


关于android开发UTS插件的更多细节说明，参考文档[todo]
For more detailed instructions on developing UTS plugins for android, refer to the documentation [todo]



至此，我们已经完成一个android平台上获取电量的原生能力封装。
So far, we have completed the encapsulation of the native ability to obtain electricity on the android platform.

我们可以像使用普通js函数一样，使用getBatteryCapacity函数来获取设备电量
We can use the getBatteryCapacity function to get the power of the device just like a normal js function


## 4 使用插件
## 4 Using plugins

### 4.1 引用UTS插件
### 4.1 Reference UTS plugin

下面介绍两种常见的引入方式
Two common introduction methods are described below.


1 显性引用
1 Explicit reference

```
//引用
//reference
import {
  getBatteryCapacity,
} from "../../../uni_modules/uts-helloworld";

// 使用代码
// use code
getBatteryCapacity()
```
2 泛型引用
2 Generic references

```
// 引用
// reference
import * as UTSHello from "../../../uni_modules/uts-helloworld";
// 使用代码
// use code
UTSHello.getBatteryCapacity()
```


### 4.2 使用UTS插件
### 4.2 Using the UTS plugin

与普通的js函数无使用差异.
There is no difference in usage with ordinary js functions.

更多的使用示例，可以参考HelloUTS中入门章节
For more usage examples, please refer to the Getting Started chapter in HelloUTS

```
var capacity = getBatteryCapacity()
uni.showToast({
	title:"当前电量："+capacity,
	icon:'none'
});
```

## 5 测试
## 5 test

### 5.1 真机运行
### 5.1 Real machine operation

UTS原生插件与原来的插件调试没有差异，可以直接运行测试。
The UTS native plugin is no different from the original plugin debugging, and the test can be run directly.

需要注意的是，如果是涉及自定义信息，需要选择自定义基座运行
It should be noted that if it involves custom information, you need to select a custom base to run

### 5.2 云端打包
### 5.2 Cloud Packaging



### 5.3 示例项目
### 5.3 Example project

完整的示例项目地址：
Complete example project address:


