## uts for iOS

本文旨在帮助 iOS 开发者，快速上手 UTS。

需要阅读者具备 iOS 原生应用开发经验。

## 1 了解 UTS 插件是什么

UTS 插件是 uni-app 新型插件形式 [详情](/plugin/uts-plugin)

对于 iOS 开发者来说，我们需要了解的是：

1. 编译时：当我们在保存 UTS 源码文件时，IDE 会同步将其编译为对应的 swift 代码，并且会生成一个对应的插件 Framework 工程在编译出对应的`framework`依赖库
2. 运行时：在真机运行/云打包时，会将`framework`依赖库添加到打包工程生成最终的 ipa 包

## 2 掌握UTS语法

### 2.1  对于掌握 swift 语言者

因为 UTS 语法与 swift 较类似，建议快速阅读后，在实践中掌握 UTS 语法。[uts语法介绍](/uts/)。

### 2.2  对于仅掌握`objective-c`语言者

尽管开发 UTS 插件，并不要求一定掌握 swift，但是鉴于 UTS 目前在 iOS 平台上，会编译为 swift 源码，掌握 swift 语言，方便排查问题和复杂功能实现。

因此建议学习一下 swift 语法，推荐阅读

+ [swift 官方文档](https://docs.swift.org/swift-book/)
+ [swift 中文版](https://swiftgg.gitbook.io/swift/)

### 2.3 数据类型差异

UTS 和 swift 在数据类型上基本保持了一致，但是在部分场景下，还是会有差异，在此特别说明

原则上：  

**数据类型以 UTS 内置的类型为准， 各原生平台都会对其自动适配。**

**当具体平台的 api 参数无法使用 UTS 类型兼容时，允许以对方明确要求的数据类型为准。**

-------------------------


#### 举例一： Int、Float、Double 和 Number

UTS 中不存在 Int、Float、Double 类型开发者在开发过程中应该使用  Number 类型覆盖 iOS 平台上使用 Int、Float、Double 的场景

但是当开发中需要重写系统方法或实现第三方依赖库的协议方法（delegate 方法）时，比如 API 明确要求参数为 Int 时，则需要写原生的类型 Int

下面以一个协议方法为例，需要实现一个三方依赖库中定义的协议方法

```swift
// swift 
// 此协议定义在其他三方 SDK 中
protocol TestProtocol {
   func addTwoInts(_ a: Int, _ b: Int) -> Int
}
```

我们在 UTS 中需要实现上面三方库中的协议方法时，由于参数和返回值类型都要求是 Int 类型，为了适应这种情况，UTS 允许开发者使用原生平台的数据类型 Int，来满足原生 API 对数据类型的要求：

```ts
// UTS 中实现协议方法
class TestClass implements TestProtocol {
	addTwoInts(a: Int, b: Int): Int {
		return a + b
	}
}
```

注意：UTS 中使用 `implements` 关键字表示遵循某个协议，下文会有详细说明

## 3 iOS 原生环境配置

对于 iOS 项目来说，除了源码之外，还会涉及依赖，资源，工程配置等常见问题

本章节将会介绍，UTS插件开发环境中如何配置这些属性

注意：

+ 1 本章节内的实例代码均取自Hello UTS [项目地址](https://gitcode.net/dcloud/hello-uts)
+ 2 本章节设计的配置，均需自定义基座后才能生效

### 3.1 配置 Info.plist

当插件需要在原生工程 Info.plist 中添加配置项时，需要在插件的 app-ios 目录中创建 Info.plist 文件

以 hello uts 中的 uts-tencentgeolocation 腾讯定位插件中的配置文件为例:

示例文件在 hello uts 中的位置：

`~/uni_modules/uts-tencentgeolocation/utssdk/app-ios/Info.plist`

此示例表示需要在 Info.plist 中配置 APIKey 及开启后台定位权限

Info.plist 示例：

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

### 3.2 配置 entitlements
> HBuilder X 3.6.11+ 版本支持

当插件需要开启 capabilities 中的相关服务时，需要在插件的 app-ios 目录中创建 UTS.entitlements 文件

比如需要在 capabilities 中勾选 Access WiFi Information 项，对应的 UTS.entitlements 的配置示例：

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

### 3.3 依赖资源文件

如果您的插件需要依赖资源文件比如图片，音频等，可将资源文件放到插件目录下  `~/utssdk/app-ios/Resources/`路径中

云端打包时会将此目录下的所有文件添加到应用 main bundle 中，建议只保存 uts 插件内置的资源文件。

### 3.4 依赖三方库

uts 插件支持依赖三方库，目前支持 framework、xcframework(仅云打包支持)、.a库

#### 3.4.1 framework依赖库说明

需要将依赖的framework或者xcframework文件存放到插件目录下  `~/utssdk/app-ios/Frameworks/`路径中

云端打包时会将此目录中所有的依赖库添加到工程中，建议只存放与插件相关的依赖库

以 hello uts 中的 uts-tencentgeolocation 腾讯定位插件为例，本插件需要依赖腾讯定位库 `TencentLBS.framework`，则将依赖库存放到 `~/uni_modules/uts-tencentgeolocation/utssdk/app-ios/Framework/TencentLBS.framework` 位置即可

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
> HBuilder X 3.6.11+ 版本支持

DCloudUTSFoundation 为框架内置库，所有 uts 插件都会依赖此基础库

DCloudUTSFoundation 会封装一些常用方法便于开发者直接调用

使用时需要在 uts 文件中先导入 UTSiOS 类，所有方法都通过 UTSiOS 类调用

```ts
// 从 DCloudUTSFoundation 依赖库中导入 UTSiOS 类
import { UTSiOS } from "DCloudUTSFoundation"
```

### 4.1 getCurrentViewController(): UIViewController
> HBuilder X 3.6.11+ 版本支持

获取当前 app 显示的 UIViewController 实例

以 hello uts 中的 uts-alert 为例：

示例文件在 hello uts 中的位置：

`~/uni_modules/uts-alert/utssdk/app-ios/index.uts`

```ts
export function showAlert(title: string|null, message: string|null, result: (index: Number) => void) {
	// uts方法默认会在子线程中执行，涉及 UI 操作必须在主线程中运行，通过 DispatchQueue.main.async 方法可将代码在主线程中运行
	DispatchQueue.main.async(execute=():void => {
		
		// 初始化 UIAlertController 实例对象 alert
		let alert = new UIAlertController(title=title,message=message,preferredStyle=UIAlertController.Style.alert)
		
		// 创建 UIAlertAction 按钮
		let okAction = new UIAlertAction(title="确认", style=UIAlertAction.Style.default, handler=(action: UIAlertAction):void => {
			// 点击按钮的回调方法
			result(0)
		})
		
		// 创建 UIAlertAction 按钮
		let cancelAction = new UIAlertAction(title="取消", style=UIAlertAction.Style.cancel, handler=(action: UIAlertAction):void => {
			// 点击按钮的回调方法
			result(1)
		})
		
		// 将 UIAlertAction 添加到 alert 上
		alert.addAction(okAction)
		alert.addAction(cancelAction)
		
		// 打开 alert 弹窗
		UTSiOS.getCurrentViewController().present(alert, animated= true)
	})
}
```


#### 4.2 colorWithString(value: string): UIColor
> HBuilder X 3.6.11+ 版本支持

将字符串色值转换为 UIColor

格式支持

- 精简写法的十六进制 如：#f00
- 十六进制 如：#ff0000
- RGB 如：rgb(255, 0, 0)
- RGBA 如:rgba(255, 0, 0, 0.5)
- 色值关键字，如： red
   
示例
 
```ts
let bgColor = UTSiOS.colorWithString("#000000")
view.backgroundColor = bgColor
```

#### 4.3 getResourcePath(resourceName: string): string
> HBuilder X 3.6.11+ 版本支持

获取指定插件资源的运行期绝对路径

插架资源路径请传该资源在工程目录下的绝对路径
   
示例
 
```ts
const imagePath = UTSiOS.getResourcePath("/static/logo.png")
console.log(imagePath)
const image = new UIImage(contentsOfFile = imagePath)
/* imagePath: "/var/mobile/Containers/Data/Application/FA7080BA-3EF7-4C4E-B7C5-0332539B2964/Documents/Pandora/apps/__UNI__FB95CAB/www/static/logo.png" */

```

持续更新中

## 5 swift 与 UTS 差异重点介绍 (持续更新)

通过上面的章节的阅读。

至此我们认为你已经掌握了UTS语法，掌握了基本的 swift 语法，掌握了 UTS 对于 iOS 资源的支持。

但是对于一个熟悉 iOS 开发的 swift 语言者来说，有很多常用的习惯发生了改变，我们会在这个章节特别指出，便于开发者加深认识。


### 5.1 语法差异

-------------------------------

#### 5.1.1  常量和变量

swift 中用 `let` 来声明常量，用 `var` 来声明变量

```swift
// swift
var str = "abc" // 声明一个字符串变量
let str1 = "abc" // 声明一个字符串常量
```

`uts`中用 `const` 来声明常量，用 `let` 来声明变量

```ts
// swift
let str = "abc" // 声明一个字符串变量
const str1 = "abc" // 声明一个字符串常量
```

#### 5.1.2 可选类型

swift 中的可选类型定义为 `类型?`

```swift
// swift
var user: String? = nil
```

 uts 中可选类型的定义为 `类型 | null`

```ts
// uts
let user: string | null = null
```

#### 5.1.3 调用构造方法

swift 中调用构造方法创建实例对象时不需要使用 `new` 关键字

```swift
var alert = UIAlertController()
```

uts 中调用构造方法实例化对象时需要在构造方法前加上 `new` 关键字

```ts
var alert = new UIAlertController()
```


#### 5.1.4 函数参数

在 swift 中参数名称使用 `:` 连接参数值，在 uts 中需要使用 `=` 连接

示例

```swift
// swift
var alert = UIAlertController(title: "提示", message: "提示内容", preferredStyle: .alert);
```

 
```ts
// uts 中写法
let alert = new UIAlertController(title="提示", message="提示内容", preferredStyle=UIAlertController.Style.alert)
```

#### 5.1.5 枚举值

枚举在 swift 中可以忽略枚举类型直接简写 `.枚举值` ，在 uts 中不支持简写，需要完整的写出 `枚举类型.枚举值`
上面的示例中 swift 中最后一个参数 preferredStyle 的值可以简写为

```swift
.alert
```

在 uts 中需要完整的写出 

```ts
UIAlertController.Style.alert
```


#### 5.1.6 类继承

swift 中定义子类继承父类时需要在子类名称后加上父类名称，中间以冒号`:`分隔

```swift
// swift
class Son: Father {
    
}
```

uts 中需要使用`extends`关键字代替冒号`:`

```ts
// uts
class Son extends Father {

}
```

#### 5.1.7 遵循协议方法

swift 中要让自定义类型遵循某个协议，在定义类型时，需要在类型名称后加上协议名称，中间以冒号`:`分隔。遵循多个协议时，各协议之间用逗号`,`分隔：

```swift
class SomeClass: FirstProtocol, AnotherProtocol {

}
```

uts 中需要使用`implements`关键字代替冒号 `:`

```ts
class SomeClass implements FirstProtocol, AnotherProtocol {
	
}
```

#### 5.1.8 系统版本判断

swift 中系统版本判断的方法

```swift
// swift
if #available(iOS 10.0, *) {
    
}
```

在 uts 中不支持这种语法可使用下面方式代替

```ts
if (UTSiOS.available("iOS 10.0, *")) {

}
```

#### 5.1.9 闭包

swift 中闭包可以简写

```swift
// swift 中最后一个参数如果是闭包称作为尾随闭包，可以忽略参数标签类型等简写为下面的方式
let action = UIAlertAction(title: "确认", style: .default) { action in
            
}
```

uts 中不支持简写语法，需要完整的写出闭包函数

```ts
// uts 中 handler 对应的闭包函数必须写完整
let action = new UIAlertAction(title="确认", style=UIAlertAction.Style.default, handler=(action: UIAlertAction):void => {

})
```

#### 5.1.10 target-action 方法

uts 中调用原生中涉及 target-action 的方法时，比如给`UIButton`添加点击事件方法、注册通知中心事件方法时注意事项，

1. 接口要求的 selector 通过 Selector("方法名字符串") 的方法构建
2. 定义的回调方法需要添加 @objc 前缀

下面以监听截屏事件为例：

示例文件在 hello uts 中的位置：

`~/uni_modules/uts-screenshot-listener/utssdk/app-ios/index.uts`

```ts
// 注册监听截屏事件及回调方法
// target-action 回调方法需要通过 Selector("方法名") 构建
const method = Selector("userDidTakeScreenshot")
NotificationCenter.default.addObserver(this, selector = method, name = UIApplication.userDidTakeScreenshotNotification, object = null)

// 捕获截屏回调的方法
// target-action 的方法前需要添加 @objc 前缀
@objc static userDidTakeScreenshot() {
    const obj = new UTSJSONObject()
    // 回调
    this.listener?.(obj)
}
```

#### 5.1.11 字典类型

swift 中的 Dictionary 类型，在 uts 中使用 Map 类型代替

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
#### 5.1.12 参数标签的兼容问题
> HBuilder X 3.6.11+ 版本支持

当覆写系统方法，或实现三方SDK的协议方法时，一些方法可能会存在参数标签的情况

以 hello uts 中腾讯定位为例，监听位置变化时需要实现协议方法：

 `tencentLBSLocationManager(_ manager: TencentLBSLocationManager, didUpdate location: TencentLBSLocation)`
 
 此方法第二个参数存在 `didUpdate` 参数标签

原生 swift 中的实现为

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

```ts
// uts
// 实现位置更新的 delegate 方法
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

`~/uni_modules/uts-tencentgeolocation/utssdk/app-ios/index.uts`

#### 5.1.12.1 无参数标签

只写参数名称的参数，编译后会在参数前默认增加 `_` 来忽略参数标签（如上面的示例，第一个参数 manager，这种方式能兼容绝大多数方法，尤其是Swift 调用 OC 方法），但是有些参数没有参数标签，默认添加 `_` 的行为会和原生方法定义不一致，这种情况需要定义一个空的参数标签来解决 `@argumentLabel("didUpdate")` 

以高德定位 SDK 的代理方法为例：第三个参数 reGeocode 只有参数名称，没有参数标签

```swift
// swift
func amapLocationManager(_ manager: AMapLocationManager!, didUpdate location: CLLocation!, reGeocode: AMapLocationReGeocode!)
```

uts 实现此方法时，需要给 reGeocode 参数添加一个空的参数标签

```ts
// uts
amapLocationManager(manager : AMapLocationManager, @argumentLabel("didUpdate") location : CLLocation, @argumentLabel("") reGeocode : AMapLocationReGeocode) {

}
```

#### 5.1.13 异步方法

swift 标记某个函数或者方法是异步的，你可以在它的声明中的参数列表后边加上 `async` 关键字

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


#### 5.1.14 try catch @try

swift中try有以下三种方式:

以JSON反序列化为例

1. 使用try (注意：要和do {} catch {} 一起使用，捕获可能的异常)

```swift
// swift 
	do{
		let dict = try JSONSerialization.jsonObject(with: d, options: [])
		print(dict)
	}catch{
	   // catch 中默认提供error信息, 当序列化不成功是, 返回error
		print(error)
	}

```

2. 使用try? 如果能发序列化成功，就返回成功的值，不能成功就返回nil

```swift
// swift 
// 注意：dict是个可选值
	let dict = try? JSONSerialization.jsonObject(with: data, options: [])

```

3. 使用try! 强行try,如果不能反序列化成功，会造成应用闪退, 如果能序列化成功，就返回成功的值，注意该值是个可选值。

```swift
// swift 
// 注意：dict是个可选值
	let dict = try! JSONSerialization.jsonObject(with: data, options: [])

```

为了满足Swift上述语法，UTS使用特殊语法来支持，以上三种写法分别对应为：

1. try

```ts
// uts
try {
	let dict = UTSiOS.try(JSONSerialization.jsonObject(with = data, options = []))
}catch (e) {
	console.log(e)
}
```
2. try?

```ts
// uts
UTSiOS.try(JSONSerialization.jsonObject(with = data, options = []), "?" )

```
3. try!

```ts
// uts
UTSiOS.try(JSONSerialization.jsonObject(with = data, options = []), "!" )

```

## 6  常见问题(持续更新)

### 6.1 如何在UTS环境中，获取当前 UIViewController 实例

参考 Hello UTS 项目中的 uts-alert 插件

路径:
> ~/uni_modules/uts-alert/utssdk/app-ios/index.uts


### 6.2 如何在UTS环境中，操作 UI 线程

```
DispatchQueue.main.async(execute=():void => {
	// 在主线程中可操作 UI
})
```

参考Hello UTS项目中的 uts-toast 插件

路径:
> ~/uni_modules/uts-toast/utssdk/app-ios/index.uts



## 7  已知待解决问题(持续更新)

### 7.1 语法提示问题

HBuilderX 目前写iOS uts 插件时部分语法提示会有缺失、参数类型不准确的问题，例如：

- 类的构造方法目前只会提示一个，实际上可能会存在多个；
- 缺失可选类型标识；
- 参数标签没有标记无法知道是否需要忽略参数标签；
- 不支持导入包含有子模块的原生模块；
- 暂不支持.a依赖库的代码提示；

这些问题会在后续版本中优化

### 7.2 语法不兼容问题

#### 7.2.1 for 循环语法问题

- for in  循环目前有语法兼容问题
- for (int i = 0, i < array.length, i++)  方法目前有语法兼容问题

### 7.3 类型兼容问题

- 元组类型目前不支持

## 8 有关Swift语言创建的Framework和.a的Swift版本兼容性问题

- 由于高版本XCode编译的Swift语言Framework动态库、静态库、.a库在低版本XCode上无法编译通过，因此存在Swift版本兼容性问题;
- 目前打包机使用的XCode版本号是13.2.1，对应的Swift版本是5.5.2;
- 请在编译Swift相关Framework和.a库时选择和打包机相同或者更低版本的XCode;
- 选择比打包机更低版本XCode编译Swift库时请在Target->buildSettings设置Buid Libraries for Distribution 为Yes。