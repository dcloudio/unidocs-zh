## uts for iOS

本文旨在帮助 iOS 开发者，快速上手 UTS。
This article aims to help iOS developers get started with UTS quickly.

需要阅读者具备 iOS 原生应用开发经验。
Readers are required to have iOS native application development experience.

## 1 了解 UTS 插件是什么
## 1 Understanding what the UTS plugin is

UTS 插件是 uni-app 新型插件形式 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#)
UTS plug-in is a new plug-in form of uni-app [Details](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#)

对于 iOS 开发者来说，我们需要了解的是：
For iOS developers, what we need to know is:

1. 编译时：当我们在保存 UTS 源码文件时，IDE 会同步将其编译为对应的 swift 代码，并且会生成一个对应的插件 Framework 工程在编译出对应的`framework`依赖库
1. When compiling: When we save the UTS source code file, the IDE will simultaneously compile it into the corresponding swift code, and generate a corresponding plug-in Framework project to compile the corresponding `framework` dependent library
2. 运行时：在真机运行/云打包时，会将`framework`依赖库添加到打包工程生成最终的 ipa 包
2. Runtime: When running on the real machine or packaging in the cloud, the `framework` dependent library will be added to the packaging project to generate the final ipa package

## 2 掌握UTS语法
## 2 Master UTS grammar

### 2.1  对于掌握 swift 语言者
### 2.1 For those who master the swift language

因为 UTS 语法与 swift 较类似，建议快速阅读后，在实践中掌握 UTS 语法。[uts语法介绍](https://uniapp.dcloud.net.cn/tutorial/syntax-uts)。
Because UTS syntax is similar to swift, it is recommended to master UTS syntax in practice after a quick reading. [Introduction to uts grammar](https://uniapp.dcloud.net.cn/tutorial/syntax-uts).

### 2.2  对于仅掌握`objective-c`语言者
### 2.2 For those who only master the `objective-c` language

尽管开发 UTS 插件，并不要求一定掌握 swift，但是鉴于 UTS 目前在 iOS 平台上，会编译为 swift 源码，掌握 swift 语言，方便排查问题和复杂功能实现。
Although it is not required to master swift to develop UTS plug-ins, since UTS is currently on the iOS platform, it will be compiled into swift source code and master the swift language, which is convenient for troubleshooting and complex function implementation.

因此建议学习一下 swift 语法，推荐阅读
Therefore, it is recommended to learn swift syntax, and it is recommended to read

+ [swift 官方文档](https://docs.swift.org/swift-book/)
+ [swift official documentation](https://docs.swift.org/swift-book/)
+ [swift 中文版](https://swiftgg.gitbook.io/swift/)
+ [swift Chinese version](https://swiftgg.gitbook.io/swift/)

### 2.3 数据类型差异
### 2.3 Data Type Differences

UTS 和 swift 在数据类型上基本保持了一致，但是在部分场景下，还是会有差异，在此特别说明
UTS and swift are basically consistent in terms of data types, but in some scenarios, there are still differences, which are specifically explained here

原则上：  
In principle:  

**数据类型以 UTS 内置的类型为准， 各原生平台都会对其自动适配。**
**The data type is subject to the built-in type of UTS, and each native platform will automatically adapt to it. **

**当具体平台的 api 参数无法使用 UTS 类型兼容时，允许以对方明确要求的数据类型为准。**
**When the API parameters of a specific platform cannot be compatible with the UTS type, the data type explicitly required by the other party is allowed to prevail. **

-------------------------


#### 举例一： Int、Float、Double 和 Number
#### Example 1: Int, Float, Double and Number

UTS 中不存在 Int、Float、Double 类型开发者在开发过程中应该使用  Number 类型覆盖 iOS 平台上使用 Int、Float、Double 的场景
Int, Float, and Double types do not exist in UTS Developers should use the Number type to cover the scenarios where Int, Float, and Double are used on the iOS platform during the development process

但是当开发中需要重写系统方法或实现第三方依赖库的协议方法（delegate 方法）时，比如 API 明确要求参数为 Int 时，则需要写原生的类型 Int
However, when it is necessary to rewrite the system method or implement the protocol method (delegate method) of the third-party dependent library during development, for example, when the API explicitly requires the parameter to be Int, you need to write the native type Int

下面以一个协议方法为例，需要实现一个三方依赖库中定义的协议方法
Let's take a protocol method as an example. It is necessary to implement a protocol method defined in a three-party dependency library.

```swift
// swift 
// 此协议定义在其他三方 SDK 中
// This protocol is defined in other third-party SDKs
protocol TestProtocol {
   func addTwoInts(_ a: Int, _ b: Int) -> Int
}
```

我们在 UTS 中需要实现上面三方库中的协议方法时，由于参数和返回值类型都要求是 Int 类型，为了适应这种情况，UTS 允许开发者使用原生平台的数据类型 Int，来满足原生 API 对数据类型的要求：
When we need to implement the protocol method in the above three-party library in UTS, since the parameter and return value types are required to be of type Int, in order to adapt to this situation, UTS allows developers to use the data type Int of the native platform to meet the requirements of the native API. Data type requirements:

```ts
// UTS 中实现协议方法
// implement the protocol method in UTS
class TestClass implements TestProtocol {
	addTwoInts(a: Int, b: Int): Int {
		return a + b
	}
}
```

注意：UTS 中使用 `implements` 关键字表示遵循某个协议，下文会有详细说明
Note: The `implements` keyword is used in UTS to indicate compliance with a protocol, which will be described in detail below

## 3 iOS 原生环境配置
## 3 iOS native environment configuration

对于 iOS 项目来说，除了源码之外，还会涉及依赖，资源，工程配置等常见问题
For iOS projects, in addition to source code, it also involves common issues such as dependencies, resources, and project configuration

本章节将会介绍，UTS插件开发环境中如何配置这些属性
This chapter will introduce how to configure these properties in the UTS plug-in development environment

注意：
Notice:

+ 1 本章节内的实例代码均取自Hello UTS [项目地址](https://gitcode.net/dcloud/hello-uts)
+ 1 The example codes in this chapter are taken from Hello UTS [project address](https://gitcode.net/dcloud/hello-uts)
+ 2 本章节设计的配置，均需自定义基座后才能生效
+ 2 The configuration designed in this chapter will only take effect after customizing the base

### 3.1 配置 Info.plist
### 3.1 Configure Info.plist

当插件需要在原生工程 Info.plist 中添加配置项时，需要在插件的 app-ios 目录中创建 Info.plist 文件
When the plugin needs to add configuration items in the native project Info.plist, it needs to create the Info.plist file in the plugin's app-ios directory

以 hello uts 中的 uts-tencentgeolocation 腾讯定位插件中的配置文件为例:
Take the configuration file in the uts-tencentgeolocation Tencent location plugin in hello uts as an example:

示例文件在 hello uts 中的位置：
Example file location in hello uts:

`~/uni_modules/uts-tencentgeolocation/utssdk/app-ios/Info.plist`

此示例表示需要在 Info.plist 中配置 APIKey 及开启后台定位权限
This example indicates that you need to configure APIKey in Info.plist and enable background location permission

Info.plist 示例：
Info.plist example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
	<key>TencentLBSAPIKey</key>
	<string>您申请的APIKey</string>
	<key>UIBackgroundModes</key>
	<array>
		<string>location</string>
	</array>
  </dict>
</plist>
```

Info.plist 格式及配置规则与 iOS 工程中是一致的，云端打包时会将配置信息合并到原生工程的 Info.plist 中
The Info.plist format and configuration rules are consistent with the iOS project, and the configuration information will be merged into the native project's Info.plist when packaging in the cloud

### 3.2 配置 entitlements
### 3.2 Configure entitlements
> HBuilder X 3.6.11+ 版本支持
> HBuilder X 3.6.11+ version support

当插件需要开启 capabilities 中的相关服务时，需要在插件的 app-ios 目录中创建 UTS.entitlements 文件
When the plugin needs to enable related services in capabilities, it needs to create a UTS.entitlements file in the plugin's app-ios directory

比如需要在 capabilities 中勾选 Access WiFi Information 项，对应的 UTS.entitlements 的配置示例：
For example, you need to check the Access WiFi Information item in capabilities, and the corresponding configuration example of UTS.entitlements:

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

UTS.entitlements 格式及配置规则与 iOS 工程中是一致的，云端打包时会将配置信息合并到原生工程的 entitlements 配置文件中
The UTS.entitlements format and configuration rules are consistent with those in the iOS project, and the configuration information will be merged into the entitlements configuration file of the native project when packaging in the cloud

### 3.3 依赖资源文件
### 3.3 Dependent resource files

如果您的插件需要依赖资源文件比如图片，音频等，可将资源文件放到插件目录下  `~/utssdk/app-ios/Resources/`路径中
If your plug-in needs to rely on resource files such as pictures, audio, etc., you can put the resource files in the path `~/utssdk/app-ios/Resources/` under the plug-in directory

云端打包时会将此目录下的所有文件添加到应用 main bundle 中，建议只保存 uts 插件内置的资源文件。
All files in this directory will be added to the main bundle of the application when packaging in the cloud. It is recommended to save only the built-in resource files of the uts plugin.

### 3.4 依赖三方库
### 3.4 Relying on three-party libraries

uts 插件支持依赖三方库，目前支持 framework、xcframework(仅云打包支持)、.a库

#### 3.4.1 framework依赖库说明

需要将依赖的framework或者xcframework文件存放到插件目录下  `~/utssdk/app-ios/Framework/`路径中

云端打包时会将此目录中所有的依赖库添加到工程中，建议只存放与插件相关的依赖库
When packaging in the cloud, all dependent libraries in this directory will be added to the project. It is recommended to store only dependent libraries related to plug-ins

以 hello uts 中的 uts-tencentgeolocation 腾讯定位插件为例，本插件需要依赖腾讯定位库 `TencentLBS.framework`，则将依赖库存放到 `~/uni_modules/uts-tencentgeolocation/utssdk/app-ios/Framework/TencentLBS.framework` 位置即可
Take the uts-tencentgeolocation Tencent positioning plug-in in hello uts as an example. This plug-in needs to rely on the Tencent positioning library `TencentLBS.framework`, then put the dependent inventory in `~/uni_modules/uts-tencentgeolocation/utssdk/app-ios/Framework/ TencentLBS.framework` location is enough

#### 3.4.2 .a依赖库相关说明
##### 3.4.2.1 .a库存放的目录结构

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
└─Libs                         				// .a库存放目录
	├─MyStaticLibA                 			//A静态库（该库所有文件放在此文件夹内,OC库）
	│	├─libMyStaticLib.a                  //.a文件，必须
	│	├─MyStaticLib.h                    	//A.a库对应的头文件，必须
	│	├─MyClassA.h                     	//需要暴露的头文件A，可选
	│	└─MyClassB.h              		 	//需要暴露的头文件B，可选
	└─TestSwiftLibrary                      //B静态库（该库所有文件放在此文件夹内,Swift库）
		├─libTestSwiftLibrary.a             //.a文件，必须
		└─TestSwiftLibrary.swiftmodule      //.swiftmodule文件夹，必须
</code>
</pre>

注意：
- 将.a库的所有文件存放在一个文件夹内，多个.a库就创建多个文件夹；
- 未对某个.a库文件夹下的文件做递归查找，请不要将.a或.h文件嵌套在多层文件夹内，以免发生错误；

##### 3.4.2.2 .a库的使用说明

- OC语言创建的.a库在使用时无需import,可直接使用；
- Swift语言创建的.a库在使用前需要在uts文件中import；
- HBuilder X目前暂不支持.a库相关代码的语法提示；

##### 3.4.2.3 .a库的使用示例

- OC语言创建的.a库使用示例：

```ts
// uts
const aResult = ToolA.toolAMethod();
const bResult = ToolB.toolBMethod();
const libResult = TestLib.testLib();

const res = {
	aResult: aResult,
	bResult: bResult,
	libResult: libResult
};
options.success?.(res);
```

- Swift语言创建的.a库使用示例：

```ts
// uts
import { Tool, Manager, TestLibraryExa } from 'TestLibraryExa';

Manager.testManager();
Tool.testTool()
let lib = TestLibraryExa();
lib.test()
console.log(lib.version);
```

## 4 iOS 平台内置库 DCloudUTSFoundation
## 4 iOS platform built-in library DCloudUTSFoundation
> HBuilder X 3.6.11+ 版本支持
> HBuilder X 3.6.11+ version support

DCloudUTSFoundation 为框架内置库，所有 uts 插件都会依赖此基础库
DCloudUTSFoundation is a built-in library for the framework, and all uts plugins will depend on this basic library

DCloudUTSFoundation 会封装一些常用方法便于开发者直接调用
DCloudUTSFoundation will encapsulate some common methods for developers to call directly

使用时需要在 uts 文件中先导入 UTSiOS 类，所有方法都通过 UTSiOS 类调用
When using it, you need to import the UTSIOS class in the uts file first, and all methods are called through the UTSIOS class

```ts
// 从 DCloudUTSFoundation 依赖库中导入 UTSiOS 类
// Import UTSIOS class from DCloudUTSFoundation dependent library
import { UTSiOS } from "DCloudUTSFoundation"
```

### 4.1 getCurrentViewController(): UIViewController
> HBuilder X 3.6.11+ 版本支持
> HBuilder X 3.6.11+ version support

获取当前 app 显示的 UIViewController 实例
Get the UIViewController instance displayed by the current app

以 hello uts 中的 uts-alert 为例：
Take uts-alert in hello uts as an example:

示例文件在 hello uts 中的位置：
Example file location in hello uts:

`~/uni_modules/uts-alert/utssdk/app-ios/index.uts`

```ts
export function showAlert(title: string|null, message: string|null, result: (index: Number) => void) {
	// uts方法默认会在子线程中执行，涉及 UI 操作必须在主线程中运行，通过 DispatchQueue.main.async 方法可将代码在主线程中运行
	// The uts method will be executed in the sub-thread by default, and the UI operations involved must run in the main thread, and the code can be run in the main thread through the DispatchQueue.main.async method
	DispatchQueue.main.async(execute=():void => {
		
		// 初始化 UIAlertController 实例对象 alert
		// Initialize UIAlertController instance object alert
		let alert = new UIAlertController(title=title,message=message,preferredStyle=UIAlertController.Style.alert)
		
		// 创建 UIAlertAction 按钮
		// create UIAlertAction button
		let okAction = new UIAlertAction(title="确认", style=UIAlertAction.Style.default, handler=(action: UIAlertAction):void => {
			// 点击按钮的回调方法
			// callback method for clicking the button
			result(0)
		})
		
		// 创建 UIAlertAction 按钮
		// create UIAlertAction button
		let cancelAction = new UIAlertAction(title="取消", style=UIAlertAction.Style.cancel, handler=(action: UIAlertAction):void => {
			// 点击按钮的回调方法
			// callback method for clicking the button
			result(1)
		})
		
		// 将 UIAlertAction 添加到 alert 上
		// Add UIAlertAction to alert
		alert.addAction(okAction)
		alert.addAction(cancelAction)
		
		// 打开 alert 弹窗
		// Open the alert popup
		UTSiOS.getCurrentViewController().present(alert, animated= true)
	})
}
```


#### 4.2 colorWithString(value: string): UIColor
> HBuilder X 3.6.11+ 版本支持
> HBuilder X 3.6.11+ version support

将字符串色值转换为 UIColor
Convert string color value to UIColor

格式支持
format support

- 精简写法的十六进制 如：#f00
- Simplified hexadecimal such as: #f00
- 十六进制 如：#ff0000
- Hexadecimal eg: #ff0000
- RGB 如：rgb(255, 0, 0)
- RGB such as: rgb(255, 0, 0)
- RGBA 如:rgba(255, 0, 0, 0.5)
- RGBA such as: rgba(255, 0, 0, 0.5)
- 色值关键字，如： red
- Color value keywords, such as: red
   
示例
example
 
```ts
let bgColor = UTSiOS.colorWithString("#000000")
view.backgroundColor = bgColor
```

#### 4.3 getResourcePath(resourceName: string): string
> HBuilder X 3.6.11+ 版本支持
> HBuilder X 3.6.11+ version support

获取指定插件资源的运行期绝对路径
Get the runtime absolute path of the specified plugin resource

插架资源路径请传该资源在工程目录下的绝对路径
For the resource path of the socket, please pass the absolute path of the resource in the project directory
   
示例
example
 
```ts
const imagePath = UTSiOS.getResourcePath("/static/logo.png")
console.log(imagePath)
const image = new UIImage(contentsOfFile = imagePath)
/* imagePath: "/var/mobile/Containers/Data/Application/FA7080BA-3EF7-4C4E-B7C5-0332539B2964/Documents/Pandora/apps/__UNI__FB95CAB/www/static/logo.png" */

```

持续更新中
Continuously updating

## 5 swift 与 UTS 差异重点介绍 (持续更新)
## 5 Key differences between swift and UTS (continuously updated)

通过上面的章节的阅读。
Read through the chapters above.

至此我们认为你已经掌握了UTS语法，掌握了基本的 swift 语法，掌握了 UTS 对于 iOS 资源的支持。
So far we think you have mastered UTS syntax, basic swift syntax, and UTS support for iOS resources.

但是对于一个熟悉 iOS 开发的 swift 语言者来说，有很多常用的习惯发生了改变，我们会在这个章节特别指出，便于开发者加深认识。
But for a swift language user who is familiar with iOS development, there are many common habits that have changed, and we will specifically point out in this chapter, so that developers can deepen their understanding.


### 5.1 语法差异
### 5.1 Syntax differences

-------------------------------

#### 5.1.1  常量和变量
#### 5.1.1 Constants and variables

swift 中用 `let` 来声明常量，用 `var` 来声明变量
In swift, `let` is used to declare constants, and `var` is used to declare variables

```swift
// swift
var str = "abc" // 声明一个字符串变量
let str1 = "abc" // 声明一个字符串常量
```

`uts`中用 `const` 来声明常量，用 `let` 来声明变量
In `uts`, use `const` to declare constants, and `let` to declare variables

```ts
// swift
let str = "abc" // 声明一个字符串变量
const str1 = "abc" // 声明一个字符串常量
```

#### 5.1.2 可选类型
#### 5.1.2 Optional types

swift 中的可选类型定义为 `类型?`
Optional types in swift are defined as `type?`

```swift
// swift
var user: String? = nil
```

 uts 中可选类型的定义为 `类型 | null`
 Optional types in uts are defined as `type | null`

```ts
// uts
let user: string | null = null
```

uts 中也支持在变量名称后面加 ？表示可选类型，这是标准 ts 语法，但是这种写法在 uts 中不推荐使用，因为在 ts 中可选类型默认为 `undefined`类型，uts 中没有 `undefined` 类型
uts also supports adding ? Represents an optional type, which is the standard ts syntax, but this way of writing is not recommended in uts, because the optional type defaults to `undefined` type in ts, and there is no `undefined` type in uts

```ts
// uts
let user?:string = null
```

#### 5.1.3 调用构造方法
#### 5.1.3 Call the constructor

swift 中调用构造方法创建实例对象时不需要使用 `new` 关键字
There is no need to use the `new` keyword when calling the constructor to create an instance object in swift

```swift
var alert = UIAlertController()
```

uts 中调用构造方法实例化对象时需要在构造方法前加上 `new` 关键字
When calling the constructor in uts to instantiate an object, you need to add the `new` keyword before the constructor

```ts
var alert = new UIAlertController()
```


#### 5.1.4 函数参数标签
#### 5.1.4 Function parameter labels

在 swift 中方法参数存在标签时使用 `:` 连接在标签和参数值之间，在 uts 中需要使用 `=` 连接
When the method parameter has a label in swift, use `:` to connect between the label and the parameter value, and use `=` to connect in uts

示例
example

```swift
// swift
var alert = UIAlertController(title: "提示", message: "提示内容", preferredStyle: .alert);
```

 
```ts
// uts 中写法
// written in uts
let alert = new UIAlertController(title="提示", message="提示内容", preferredStyle=UIAlertController.Style.alert)
```

#### 5.1.5 枚举值
#### 5.1.5 Enumeration value

枚举在 swift 中可以忽略枚举类型直接简写 `.枚举值` ，在 uts 中不支持简写，需要完整的写出 `枚举类型.枚举值`
Enumerations can ignore the enumeration type and directly abbreviate `.enumeration value` in swift. UTS does not support abbreviation. You need to write `enumeration type.enumeration value` in its entirety
上面的示例中 swift 中最后一个参数 preferredStyle 的值可以简写为
In the above example, the value of the last parameter preferredStyle in swift can be abbreviated as

```swift
.alert
```

在 uts 中需要完整的写出 
in uts requires full write out

```ts
UIAlertController.Style.alert
```


#### 5.1.6 类继承
#### 5.1.6 Class Inheritance

swift 中定义子类继承父类时需要在子类名称后加上父类名称，中间以冒号`:`分隔
When defining a subclass in swift to inherit from the parent class, you need to add the parent class name after the subclass name, separated by a colon `:`

```swift
// swift
class Son: Father {
    
}
```

uts 中需要使用`extends`关键字代替冒号`:`
The `extends` keyword needs to be used instead of the colon `:` in uts

```ts
// uts
class Son extends Father {

}
```

#### 5.1.7 遵循协议方法
#### 5.1.7 Follow protocol methods

swift 中要让自定义类型遵循某个协议，在定义类型时，需要在类型名称后加上协议名称，中间以冒号`:`分隔。遵循多个协议时，各协议之间用逗号`,`分隔：
To make a custom type conform to a certain protocol in swift, when defining the type, you need to add the protocol name after the type name, separated by a colon `:`. When following multiple protocols, separate each protocol with a comma `,`:

```swift
class SomeClass: FirstProtocol, AnotherProtocol {

}
```

uts 中需要使用`implements`关键字代替冒号 `:`
The `implements` keyword needs to be used instead of the colon `:` in uts

```ts
class SomeClass implements FirstProtocol, AnotherProtocol {
	
}
```

#### 5.1.8 系统版本判断
#### 5.1.8 System version judgment

swift 中系统版本判断的方法
The method of judging the system version in swift

```swift
// swift
if #available(iOS 10.0, *) {
    
}
```

在 uts 中不支持这种语法可使用下面方式代替
This syntax is not supported in uts and can be replaced by the following

```ts
if (UIDevice.current.systemVersion >= "10.0") {
  
}
```

#### 5.1.9 闭包
#### 5.1.9 Closures

swift 中闭包可以简写
Closures in swift can be shortened

```swift
// swift 中最后一个参数如果是闭包称作为尾随闭包，可以忽略参数标签类型等简写为下面的方式
// If the last parameter in swift is a closure, it is called a trailing closure, which can be abbreviated as follows, regardless of the parameter label type
let action = UIAlertAction(title: "确认", style: .default) { action in
            
}
```

uts 中不支持简写语法，需要完整的写出闭包函数
Shorthand syntax is not supported in uts, and the closure function needs to be written completely

```ts
// uts 中 handler 对应的闭包函数必须写完整
// The closure function corresponding to the handler in uts must be written completely
let action = new UIAlertAction(title="确认", style=UIAlertAction.Style.default, handler=(action: UIAlertAction):void => {

})
```

#### 5.1.10 target-action 方法
#### 5.1.10 target-action method

uts 中调用原生中涉及 target-action 的方法时，比如给`UIButton`添加点击事件方法、注册通知中心事件方法时注意事项，
When calling native methods involving target-action in uts, such as adding click event methods to `UIButton` and registering notification center event methods, precautions,

1. 接口要求的 selector 通过 Selector("方法名字符串") 的方法构建
1. The selector required by the interface is constructed by the method of Selector("method name string")
2. 定义的回调方法需要添加 @objc 前缀
2. The defined callback method needs to be prefixed with @objc

下面以监听截屏事件为例：
The following is an example of listening to screen capture events:

示例文件在 hello uts 中的位置：
Example file location in hello uts:

`~/uni_modules/uts-screenshot-listener/utssdk/app-ios/index.uts`

```ts
// 注册监听截屏事件及回调方法
// Register to monitor screen capture events and callback methods
// target-action 回调方法需要通过 Selector("方法名") 构建
// The target-action callback method needs to be constructed by Selector("method name")
const method = Selector("userDidTakeScreenshot")
NotificationCenter.default.addObserver(this, selector = method, name = UIApplication.userDidTakeScreenshotNotification, object = null)

// 捕获截屏回调的方法
// method to capture screenshot callback
// target-action 的方法前需要添加 @objc 前缀
// The method of target-action needs to be prefixed with @objc
@objc static userDidTakeScreenshot() {
    const obj = new UTSJSONObject()
    // 回调
    // callback
    this.listener?.(obj)
}
```

#### 5.1.11 字典类型
#### 5.1.11 Dictionary type

swift 中的 Dictionary 类型，在 uts 中使用 Map 类型代替
Dictionary type in swift, use Map type in uts instead

```swift
// swift
var value: Dictionary<String,Any> = Dictionary()
value["name"] = "uts"
```

```ts
// uts
let map: Map<string,any> = new Map()
map.set("name","uts")
```
#### 5.1.12 覆写方法存在参数标签的兼容问题
#### 5.1.12 There is a compatibility problem with the parameter label in the override method
> HBuilder X 3.6.11+ 版本支持
> HBuilder X 3.6.11+ version support

当覆写系统方法，或实现三方SDK的协议方法时，一些方法可能会存在参数标签的情况
When overriding the system method or implementing the protocol method of the third-party SDK, some methods may have parameter labels

以 hello uts 中腾讯定位为例，监听位置变化时需要实现协议方法：
Taking Tencent positioning in hello uts as an example, the protocol method needs to be implemented when monitoring location changes:

 `tencentLBSLocationManager(_ manager: TencentLBSLocationManager, didUpdate location: TencentLBSLocation)`
 
 此方法第二个参数存在 `didUpdate` 参数标签
 The second parameter of this method has `didUpdate` parameter label

原生 swift 中的实现为
The implementation in native swift is

```swift
// swift
func tencentLBSLocationManager(_ manager: TencentLBSLocationManager, didUpdate location: TencentLBSLocation) {
        var response = LocationResponse();
        response.name = location.name;
        response.address = location.address;
        response.latitude = NSNumber(location.location.coordinate.latitude);
        response.longitude = NSNumber(location.location.coordinate.longitude);
        self.locationOptions?.success(response);
}
```

uts 中需要用注解语法 @argumentLabel("didUpdate") 来表示参数标签
In uts, the annotation syntax @argumentLabel("didUpdate") needs to be used to represent the parameter label

```ts
// 实现位置更新的 delegate 方法
// The delegate method that implements location updates
tencentLBSLocationManager(manager: TencentLBSLocationManager, @argumentLabel("didUpdate") location: TencentLBSLocation) {
		let response = new LocationResponse();
		response.name = location.name;
		response.address = location.address;
		response.latitude = Number(location.location.coordinate.latitude);
		response.longitude = Number(location.location.coordinate.longitude);
		this.locationOptions?.success(response)
}
```

示例文件在 hello uts 中的位置：
Example file location in hello uts:

`~/uni_modules/uts-tencentgeolocation/utssdk/app-ios/index.uts`

#### 5.1.13 异步方法
#### 5.1.13 Asynchronous methods

swift 标记某个函数或者方法是异步的，你可以在它的声明中的参数列表后边加上 `async` 关键字
Swift marks a function or method as asynchronous, you can add the `async` keyword after the parameter list in its declaration

```swift
// swift 
@available(iOS 13.0.0, *)
func testAsync(_ opts: AsyncOptions) async -> UTSJSONObject {
    if (opts.type == "success") {
        opts.success("success");
    }
     else {
        opts.fail("fail");
    }
    opts.complete("complete");
    return UTSJSONObject([
        "name": "testAsync"
    ]);
}
```

uts 中定义异步方法是在方法最前面加上 `async` 关键字
The definition of an asynchronous method in uts is to add the `async` keyword at the beginning of the method

```ts
// uts
async function testAsync(opts: AsyncOptions) {
  if (opts.type == "success") {
    opts.success("success");
  } else {
    opts.fail("fail");
  }
  opts.complete("complete");
  return { name: "testAsync" };
}
```

**需要注意：使用 async 定义异步方法只有 iOS 13+ 版本才支持，低版本调用会报错**
**Note: Using async to define an asynchronous method is only supported by iOS 13+ versions, and errors will be reported when calling in lower versions**

## 6  常见问题(持续更新)
## 6 Frequently Asked Questions (continuously updated)

### 6.1 如何在UTS环境中，获取当前 UIViewController 实例
### 6.1 How to get the current UIViewController instance in UTS environment

参考 Hello UTS 项目中的 uts-alert 插件
Refer to the uts-alert plugin in the Hello UTS project

路径:
path:
> ~/uni_modules/uts-alert/utssdk/app-ios/index.uts


### 6.2 如何在UTS环境中，操作 UI 线程
### 6.2 How to operate UI thread in UTS environment

```
DispatchQueue.main.async(execute=():void => {
	// 在主线程中可操作 UI
	// The UI can be operated in the main thread
})
```

参考Hello UTS项目中的 uts-toast 插件
Refer to the uts-toast plugin in the Hello UTS project

路径:
path:
> ~/uni_modules/uts-toast/utssdk/app-ios/index.uts



## 7  已知待解决问题(持续更新)
## 7 Known open issues (continuously updated)

### 7.1 语法提示问题
### 7.1 Syntax Tips

HBuilderX 目前写iOS uts 插件时部分语法提示会有缺失、参数类型不准确的问题，例如：
When HBuilderX currently writes iOS uts plugins, some grammatical hints will be missing and the parameter types will be inaccurate, for example:

- 类的构造方法目前只会提示一个，实际上可能会存在多个；
- The construction method of the class currently only prompts one, in fact there may be more than one;
- 缺失可选类型标识；
- Missing optional type identifier;
- 参数标签没有标记无法知道是否需要忽略参数标签；
- The parameter label is not marked and it is impossible to know whether to ignore the parameter label;
- 不支持导入包含有子模块的原生模块；
- 暂不支持.a依赖库的代码提示；

这些问题会在后续版本中优化
These issues will be optimized in subsequent versions

### 7.2 语法不兼容问题
### 7.2 Syntax incompatibility issues

#### 7.2.1 for 循环语法问题
#### 7.2.1 For loop syntax problem

- for in  循环目前有语法兼容问题
- for in loops currently have syntax compatibility issues
- for (int i = 0, i < array.length, i++)  方法目前有语法兼容问题
- The for (int i = 0, i < array.length, i++) method currently has syntax compatibility issues

### 7.3 类型兼容问题
### 7.3 Type Compatibility Issues

- 元组类型目前不支持

## 8 有关Swift语言创建的Framework和.a的Swift版本兼容性问题

- 由于高版本XCode编译的Swift语言Framework动态库、静态库、.a库在低版本XCode上无法编译通过，因此存在Swift版本兼容性问题;
- 目前打包机使用的XCode版本号是13.2.1，对应的Swift版本是5.5.2;
- 请在编译Swift相关Framework和.a库时选择和打包机相同或者更低版本的XCode;
- 选择比打包机更低版本XCode编译Swift库时请在Target->buildSettings设置Buid Libraries for Distribution 为Yes。