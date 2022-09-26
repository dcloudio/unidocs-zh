## 写在最前

本文旨在 引导Android开发者，快速上手UTS插件开发

需要阅读者具备Android原生应用开发经验。


## 1 了解UTS插件是什么


`UTS插件`是最新发布的`uni-app`新型插件形式，拥有跨平台，高效率，易调试等优点

[更多介绍看这里](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#)



对于Android开发者来说，我们需要了解的是

1 编译时：当我们在保存`UTS`源码文件时，IDE会同步将其编译为对应的Kotlin代码。

2 运行时：在真机运行/云打包时，这些编译后的kotlin源码也会成为apk的一部分



## 2 掌握UTS语法


开发UTS插件的第一步是掌握UTS语法


### 2.1  对于掌握kotlin语言者

因为UTS语法与kotlin很类似，可以从2.4 章节 开始阅读。

建议快速阅读后，在实践中掌握这UTS语法。


### 2.2  对于仅掌握java语言者


与js相比,uts的语法和java更加类似。

但是依然存在较大的差异，需要详细阅读2.3语法部分。


尽管开发UTS插件，并不要求一定掌握kotlin，但是鉴于`UTS`目前在android平台上，会编译为kotlin源码。

学习kotlin语言，方便排查问题和复杂功能实现

因此建议学习一下2.3 章节 kotlin语法



### 2.3 kotlin 语法部分

建议掌握kotlin语法，可以参考下面的文档

+ kotlin [文档](https://kotlinlang.org/)

+ kotlin for android[文档](https://developer.android.com/kotlin)


### 2.4 UTS语法部分

uts，全称 uni type script，是一门跨平台的、高性能的、强类型的现代编程语言。


> 它可以被编译为不同平台的编程语言，如：
> 
> web平台，编译为JavaScript
> 
> Android平台，编译为Kotlin
> 
> iOS平台，编译Swift（暂未发布）
> 
> uts 采用了与 ts 基本一致的语法规范，支持绝大部分 ES6 API。


uts语法详细介绍：[uts语法介绍](https://uniapp.dcloud.net.cn/tutorial/syntax-uts)


## 3 Android原生环境配置 （目前版本暂不支持）


对于Android项目来说，除了源码之外，还会涉及依赖，资源，配置等常见问题

本章节将会介绍，UTS插件开发环境中如何配置这些属性


注意：

+ 1 本章节内的实例代码均取自Hello UTS项目
+ 2 本章节设计的配置，均需自定义基座后才能生效



### 3.1 配置AndroidManifest.xml


以hello UTS中的native-page插件中的配置文件为例:

示例文件在hello uts中的位置：

~\uni_modules\uts-nativepage\utssdk\app-android\AndroidManifest.xml

AndroidManifest.xml示例：

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools" 
  // 配置包名
  package="io.dcloud.uni_modules.uts_nativepage">
   // 配置权限
   <!--创建前台服务权限-->
   <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />

    <application>
	   // 配置service / activity
	   <service android:name="uts.sdk.modules.utsNativepage.ForeService"  />
       <activity android:name="uts.sdk.modules.utsNativepage.DemoActivity"></activity>
    </application>
</manifest>

```


AndroidManifest.xml配置规则与android中的规则是一致的。


特别提示：

每一个UTS插件对应android项目中的一个 lib module.

与你在android studio中手动输入包名不同的是，如果你没有手动包名，HX会按照下面的规则默认生成一个：

```
uts插件默认包名规则：

如果是根目录utssdk下的uts插件
	包名：uts.sdk.(插件ID转驼峰)
如果是uni_modules目录下的uts插件
	包名：uts.sdk.modules.(插件ID转驼峰)


举例：
uni-getbatteryinfo -> uts.sdk.modules.uniGetbatteryinfo;
uts-nativepage  ->  uts.sdk.modules.utsNativepage
```

### 3.2 配置res资源


![](https://native-res.dcloud.net.cn/images/uts/forAndroid/uts_android_res_folder.jpg)


示例文件在hello uts中的位置：

~\uni_modules\uts-nativepage\utssdk\app-android\res 


除了这里列出的layout,values目录外，还支持anim等所有android标准资源目录


### 3.3 配置asset资源

以hello UTS中的uts-advance插件为例。

示例文件在hello uts中的位置：

~\uni_modules\uts-advance\utssdk\app-android\assets

![](https://native-res.dcloud.net.cn/images/uts/forAndroid/uts_android_assets_folder.jpg)

### 3.4 增加libs依赖资源

以Hello UTS项目下的uts-tencentgeolocation 插件为例

![](https://native-res.dcloud.net.cn/images/uts/forAndroid/uts_android_libs_folder.jpg)


示例文件在hello uts中的位置：

~\uni_modules\uts-tencentgeolocation\utssdk\app-android\libs 



## 4 语法差异重点介绍 (持续更新)

通过上面的章节的阅读。

至此我们认为你已经掌握了UTS语法，掌握了基本的Kotlin语法，掌握了UTS对于android资源的支持。

但是对于一个熟悉android开发的kotlin语言者来说，有很多常用的语法发生了改变，我们会在这个章节特别指出,便于开发者加深认识。


### 4.1 可为空的语法标识

kotlin中可为空的语法统一为类型后加`?`,已下面的代码为例

```ts
// 一个可为空的字符串变量，变量名为user
var user:String? = null
```

但是ts中分两种情况，如果是全局变量，可为空，需要这样写

```ts
let user:string | null
```

如果是成员变量，与kotlin类似，但是区别在于?写在变量后，而非类型后
```ts
let user?:string
```

### 4.2  let和var

`kotlin`中 可变变量修饰为 `var`、`val`。 区别在于 val 不可变，var可变。

`uts`中对应`var`的变量类型为 `var/let`

推荐使用`let` 因为只会在作用域内生效,需要慎用`var`，因为它具备有更大的作用范围


### 4.3 extends

`kotlin`中的: 继承操作符，需要用`extends`取代

|语法|kotlin|uts|
|---|-------|---|
|继承类|:|extends|
|实现接口|:|extends|


```kotlin
class MediaContentObserver : ContentObserver {
}
```


```ts
class MediaContentObserver extends ContentObserver {
}
```

### 4.4 非空断言

kotlin中的非空断言是`!!`，ts中是一个`!`

```ts
user!.sayHello();
```

```kotlin
user!!.sayHello();
```

### 4.5 方法定义

方法定义 `kotlin`里的方法只有一种定义方式

```kotlin
 fun startListener():void{
	 
 }
```
uts中，需要区分全局方法、成员方法

```ts
 // 成员方法
 startListener():void{
	 
 }
```
 
```uts
 // 全局方法方法
 function startListener():void{
	 
 }
```

### 4.6 快速调用父类实现


```ts
//ts 中快速实现super
constructor() : super() {
}
	
```

```kotlin
//kotlin 中快速实现super
constructor (){
	super();
}
```


### 4.7 匿名内部类

`kotlin中`可以使用匿名内部类

```kotlin
// kotlin 新建事件监听
user.setListener(Listener(){
	//todo
});
```



目前版本UTS还不支持匿名内部类，需要显性的声明再新建

```ts
// 声明一个新的类，实现Listener
class MyListener extends Listener{
	// todo
}
// 新建实例
let myListener = new MyListener();
user.setListener(myListener);
```



## 5  常见问题(持续更新)

### 5.1 如何在UTS环境中，新建一个`activity`？

参考Hello UTS项目中的uts-nativepage插件

路径:
> ~\uni_modules\uts-nativepage


### 5.2 如何在UTS环境中，新建一个`service`？

参考Hello UTS项目中的uts-nativepage插件

路径:
> ~\uni_modules\uts-nativepage

