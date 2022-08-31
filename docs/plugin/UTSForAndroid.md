## 1 UTS插件介绍
## 1 UTS plugin introduction

### 1.1 什么是UTS插件
### 1.1 What is a UTS plugin

> UTS原生插件 是用 UTS语言 开发的App原生插件。
> UTS native plugin is an App native plugin developed in UTS language.

> UTS语言编译到Android平台，会转为kotlin；编译到iOS平台，会转为swift。
> UTS language compiled to the Android platform will be converted to kotlin; compiled to the iOS platform, it will be converted to swift.

简单来说，
simply put,

UTS插件 = 使用HX + typescript 开发插件
UTS plugins = develop plugins using HX + typescript

取代原有的java + android studio
Replace the original java + android studio

### 2.1 UTS插件相比Android插件的优势
### 2.1 Advantages of UTS plugin compared to Android plugin


	
#### 更高的开发效率
#### Higher development efficiency
	
	日常在解答插件开发者问题时，经常会遇到开发者提问："开发过程中，原生插件和uni代码如何调试?"
	When answering the questions of plug-in developers on a daily basis, developers often ask questions: "How to debug native plug-ins and uni codes during the development process?"
	
	uni原生插件在这点上做的并不好，如果出现问题，需要频繁切换开发环境。
	The uni native plug-in is not good at this point. If there is a problem, you need to switch the development environment frequently.
	
	UTS插件，完美的解决了这个痛点，全链路 HX + JS/TS开发，一站式调试。
	UTS plug-in perfectly solves this pain point, full-link HX + JS/TS development, one-stop debugging.

#### 更好的通用性
#### better versatility

	UTS插件天生具备跨平台基因。使用UTS开发插件多个平台的兼容成本远远低于原生开发
	UTS plugins are inherently cross-platform. The compatibility cost of using UTS to develop plugins for multiple platforms is much lower than native development
	
#### 较高的运行效率
#### Higher operating efficiency
	
	虽然UTS插件是基于ts/JS语言开发。但是实时会编译成kotlin代码。
	Although UTS plugins are developed based on ts/JS language. But it will be compiled into kotlin code in real time.
	
	最终的apk中也是以.class字节码的形式。
	The final apk is also in the form of .class bytecode.
	
	相比原生插件，在插件通信性能会有一定的提升。
	Compared with native plugins, the communication performance of plugins will be improved to a certain extent.


## 2 Android上手必备
## 2 Android Essentials

### 2.1 UTS插件介绍
### 2.1 Introduction to UTS plugin

需要了解UTS插件  [UTS开发官方文档](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
Need to know about UTS plugin [UTS development official documentation](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)

	
### 2.1 UTS语言部分
### 2.1 UTS language part

需要掌握uts语言  [UTS语法文档]()
Need to master uts language [UTS grammar document]()


### 2.2 Android 知识部分
### 2.2 Android Knowledge Section

需要具备基本的Android开发知识 [Android 开发官方文档](https://developer.android.com/)
Basic Android development knowledge is required [Android Development Official Documentation](https://developer.android.com/)


## 3 Android常用API
## 3 Android common API


### getAppContext

获取当前应用Application上下文，对应android平台上的application context
Get the application context of the current application, corresponding to the application context on the android platform
```
fun getAppContext():Context?
```

### getUniActivity

获取当前应用宿主activity示例，当前Uni-APP 应用实例的宿主activity
Get the current application host activity example, the host activity of the current Uni-APP application instance
```
fun getAppContext():Context?
```

### getResourcePath(resourceName:String)

获取指定插件资源 的运行期绝对路径
Get the runtime absolute path of the specified plugin resource
```
fun getResourcePath(resourceName:String):String
```

比如，插件A使用到了一张图片,开发期间 存放位置为
For example, plugin A uses a picture, and the storage location during development is
> ni_modules/test-uts-static/static/logo.png

程序运行期间，需要获取到此资源，可以使用 
During the running of the program, you need to obtain this resource, you can use
 
```
getResourcePath("uni_modules/test-uts-static/static/logo.png")
```

得到文件运行时路径: 
Get the file runtime path:

> /storage/emulated/0/Android/data/io.dcloud.HBuilder/apps/__UNI__3732623/www/uni_modules/test-uts-static/static/logo.png


### onAppActivityPause

容器的宿主activity onPause时触发
Triggered when the container's host activity is onPause

### onAppActivityResume

容器的宿主activity onResume时触发
Fired when the container's host activity is onResume

### onAppActivityDestroy

容器的宿主activity onDestroy时触发
Triggered when the container's host activity is onDestroy

### onAppActivityBack

容器的宿主activity 回退物理按键点击时触发
Fired when the container's host activity rolls back the physical button click


## 4 常见问题
## 4 Frequently Asked Questions


### Float类型传参
### Float type parameter

android很多布局参数强制要求Float,但是ts中没有内置这种类型。可以使用下面的代码实现转换
Float is mandatory for many layout parameters in android, but there is no built-in type of this type in ts. The conversion can be achieved using the following code

```
let textSize =  30.0.toFloat();
```

### 泛型参数
### Generic parameters

android中UI相关的api,很多会要求泛型，目前UTS支持用as关键字强转，满足类似的场景
Many UI-related APIs in android require generics. Currently, UTS supports forced conversion with the as keyword to meet similar scenarios.

```
let frameContent = decorView.findViewById(android.R.id.content) as FrameLayout
```

