## 1 UTS插件介绍

### 1.1 什么是UTS插件

> UTS原生插件 是用 UTS语言 开发的App原生插件。

> UTS语言编译到Android平台，会转为kotlin；编译到iOS平台，会转为swift。

简单来说，

UTS插件 = 使用HX + typescript 开发插件

取代原有的java + android studio

### 2.1 UTS插件相比Android插件的优势


	
#### 更高的开发效率
	
	日常在解答插件开发者问题时，经常会遇到开发者提问："开发过程中，原生插件和uni代码如何调试?"
	
	uni原生插件在这点上做的并不好，如果出现问题，需要频繁切换开发环境。
	
	UTS插件，完美的解决了这个痛点，全链路 HX + JS/TS开发，一站式调试。

#### 更好的通用性

	UTS插件天生具备跨平台基因。使用UTS开发插件多个平台的兼容成本远远低于原生开发
	
#### 较高的运行效率
	
	虽然UTS插件是基于ts/JS语言开发。但是实时会编译成kotlin代码。
	
	最终的apk中也是以.class字节码的形式。
	
	相比原生插件，在插件通信性能会有一定的提升。


## 2 Android上手必备

### 2.1 UTS插件介绍

需要了解UTS插件  [UTS开发官方文档](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)

	
### 2.1 UTS语言部分

需要掌握uts语言  [UTS语法文档]()


### 2.2 Android 知识部分

需要具备基本的Android开发知识 [Android 开发官方文档](https://developer.android.com/)


## 3 Android常用API


### getAppContext

获取当前应用Application上下文，对应android平台上的application context
```
fun getAppContext():Context?
```

### getUniActivity

获取当前应用宿主activity示例，当前Uni-APP 应用实例的宿主activity
```
fun getAppContext():Context?
```

### getResourcePath(resourceName:String)

获取指定插件资源 的运行期绝对路径
```
fun getResourcePath(resourceName:String):String
```

比如，插件A使用到了一张图片,开发期间 存放位置为
> ni_modules/test-uts-static/static/logo.png

程序运行期间，需要获取到此资源，可以使用 
 
```
getResourcePath("uni_modules/test-uts-static/static/logo.png")
```

得到文件运行时路径: 

> /storage/emulated/0/Android/data/io.dcloud.HBuilder/apps/__UNI__3732623/www/uni_modules/test-uts-static/static/logo.png


### onAppActivityPause

容器的宿主activity onPause时触发

### onAppActivityResume

容器的宿主activity onResume时触发

### onAppActivityDestroy

容器的宿主activity onDestroy时触发

### onAppActivityBack

容器的宿主activity 回退物理按键点击时触发


## 4 常见问题


### Float类型传参

android很多布局参数强制要求Float,但是ts中没有内置这种类型。可以使用下面的代码实现转换

```
let textSize =  30.0.toFloat();
```

### 泛型参数

android中UI相关的api,很多都要去泛型，目前UTS支持用as关键字强转，满足类似的场景

```
let frameContent = decorView.findViewById(android.R.id.content) as FrameLayout
```

