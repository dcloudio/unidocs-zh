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


---------------------------------

### 2.5 数据类型差异

虽然 UTS 和 koltin 在数据类型上基本保持了一致，但是在部分场景下，还是会有差异，在此特别说明

原则上：  

**数据类型以UTS 内置的类型为准， 各原生平台都会对其自动适配。**

**但是 UTS本身是跨平台语言，当具体平台的api 有明确要求时，需要以对方明确要求的数据类型为准。**

-------------------------


#### 举例一： Int 和Number

默认情况下`UTS` 开发者可以使用 `Number` 覆盖`android` 平台上的 int场景。

但是当开发者重写 `Android`平台 `Service` 组件`onStartCommand` 方法时，必须明确指定接收参数为 Int，以满足`Android`平台API要求

 


 在标准的UTS环境中，其实只有`Number`类型而没有`Int`，理想的情况应该是这样写：
```ts
 override onStartCommand(intent:Intent ,flags:Number ,startId:Number):Number {
	 return super.onStartCommand(intent, flags, startId);
 }
```

但是因为 `onStartCommand` 是`android` 提供的api 并且明确指定数据类型 `flags`和`startId` 需要是Int类型,
因此我们需要违背`UTS`数据类型，以满足`android`平台数据类型的需要：

 ```ts
 override onStartCommand(intent:Intent ,flags:Int ,startId:Int):Int {
	 return super.onStartCommand(intent, flags, startId);
 }
 ```

最后转换成的下面的`Kotlin`代码：
 
 ```kotlin
 override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {
	 return super.onStartCommand(intent, flags, startId);
 }
 ```


#### 举例二：`MutableList`
 
`MutableList`是`android`平台 特有的数据类型，一般场景下，可以使用UTS中内置类型 `Array` 替代

但是在`android`平台 响应权限申请结果时，必须要以此为类型


在标准的UTS环境中，是没有`MutableList`类型的，与之相近的数据类型是 `Array`,所以理想的情况应该是这样写：

```ts
onAppActivityRequestPermissionsResult((requestCode: number,permissions: Array<string>,grantResults: Array<number>) => {
		// 权限申请结果
});

```

但是因为 `onAppActivityRequestPermissionsResult`函数是 `android`平台内置的函数，且明确要求了 `permissions`和`grantResults` 字段必须是 `MutableList` 类型。因此我们需要这样写：

```ts
onAppActivityRequestPermissionsResult((requestCode: number,permissions: MutableList<string>,grantResults: MutableList<number>) => {
		// 权限申请结果
});

```
编译后的kotlin代码是这样的：

```kotlin

onAppActivityRequestPermissionsResult(fun(requestCode: Number, permissions: MutableList<String>, grantResults: MutableList<Number>){
      
});
```

## 3 Android原生环境配置 （目前版本暂不支持）


对于Android项目来说，除了源码之外，还会涉及依赖，资源，配置等常见问题

本章节将会介绍，UTS插件开发环境中如何配置这些属性


注意：

+ 1 本章节内的实例代码均取自Hello UTS [项目地址](https://gitcode.net/dcloud/hello-uts)
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


![目录结构](https://native-res.dcloud.net.cn/images/uts/forAndroid/uts_android_assets_folder.jpg)


关键代码:

```ts
// 获取asset管理器
let assetManager = getAppContext()!.getAssets();
// 加载free.mp3 资源
let afd = assetManager.openFd("free.mp3");
// 使用android 自带的媒体组件进行播放
let mediaPlayer = new MediaPlayer();
mediaPlayer.setDataSource(afd.getFileDescriptor(),afd.getStartOffset(), afd.getLength());
mediaPlayer.prepare();
mediaPlayer.start();
```

完整的代码在hello uts中的位置：

~\uni_modules\uts-advance\utssdk\app-android\assets






### 3.4 增加libs依赖资源

以Hello UTS项目下的uts-tencentgeolocation 插件为例

![](https://native-res.dcloud.net.cn/images/uts/forAndroid/uts_android_libs_folder.jpg)


示例文件在hello uts中的位置：

~\uni_modules\uts-tencentgeolocation\utssdk\app-android\libs 

------

HX3.6.7 版本内置了以下依赖

开发者在使用列表中的依赖时，需要注意两点：

+  真机运行时，不需要添加列表中的依赖，即可直接引用相关类
+  请勿通过 手动添加jar/aar 等方式引入相同的依赖，否则会因依赖冲突导致云打包失败。

```gradle
+--- my-imageloader.jar
+--- my-nineoldandroids-2.4.0.jar
+--- zip4j-2.8.0.jar
+--- uts-runtime-jvm-1.0.jar
+--- android-gif-drawable-release@1.2.23.aar
+--- msa_mdid_1.0.13.aar
+--- breakpad-build-release.aar
+--- androidx.multidex:multidex:2.0.0@aar
+--- androidx.recyclerview:recyclerview:1.0.0@aar
+--- androidx.legacy:legacy-support-v4:1.0.0@aar
+--- androidx.appcompat:appcompat:1.0.0@aar
+--- com.github.bumptech.glide:glide:4.9.0@aar
+--- com.alibaba:fastjson:1.1.46.android@jar
+--- androidx.fragment:fragment:1.0.0@aar
+--- androidx.vectordrawable:vectordrawable-animated:1.0.0@aar
+--- androidx.legacy:legacy-support-core-ui:1.0.0@aar
+--- androidx.media:media:1.0.0@aar
+--- androidx.legacy:legacy-support-core-utils:1.0.0@aar
+--- androidx.vectordrawable:vectordrawable:1.0.0@aar
+--- androidx.viewpager:viewpager:1.0.0@aar
+--- androidx.coordinatorlayout:coordinatorlayout:1.0.0@aar
+--- androidx.drawerlayout:drawerlayout:1.0.0@aar
+--- androidx.slidingpanelayout:slidingpanelayout:1.0.0@aar
+--- androidx.customview:customview:1.0.0@aar
+--- androidx.swiperefreshlayout:swiperefreshlayout:1.0.0@aar
+--- androidx.asynclayoutinflater:asynclayoutinflater:1.0.0@aar
+--- androidx.loader:loader:1.0.0@aar
+--- androidx.core:core:1.0.0@aar
+--- androidx.versionedparcelable:versionedparcelable:1.0.0@aar
+--- androidx.collection:collection:1.0.0@jar
+--- androidx.cursoradapter:cursoradapter:1.0.0@aar
+--- com.github.bumptech.glide:gifdecoder:4.9.0@aar
+--- androidx.lifecycle:lifecycle-runtime:2.0.0@aar
+--- androidx.interpolator:interpolator:1.0.0@aar
+--- androidx.documentfile:documentfile:1.0.0@aar
+--- androidx.localbroadcastmanager:localbroadcastmanager:1.0.0@aar
+--- androidx.print:print:1.0.0@aar
+--- androidx.lifecycle:lifecycle-viewmodel:2.0.0@aar
+--- androidx.lifecycle:lifecycle-livedata:2.0.0@aar
+--- androidx.lifecycle:lifecycle-livedata-core:2.0.0@aar
+--- androidx.lifecycle:lifecycle-common:2.0.0@jar
+--- androidx.arch.core:core-runtime:2.0.0@aar
+--- androidx.arch.core:core-common:2.0.0@jar
+--- androidx.annotation:annotation:1.0.0@jar
+--- com.github.bumptech.glide:disklrucache:4.9.0@jar
\--- com.github.bumptech.glide:annotations:4.9.0@jar


```


## 4 Kotlin与UTS差异重点介绍 (持续更新)

通过上面的章节的阅读。

至此我们认为你已经掌握了UTS语法，掌握了基本的Kotlin语法，掌握了UTS对于android资源的支持。

但是对于一个熟悉android开发的kotlin语言者来说，有很多常用的习惯发生了改变，我们会在这个章节特别指出,便于开发者加深认识。


### 4.1 语法差异

-------------------------------

#### 4.1.1 可为空的语法标识

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

#### 4.1.2  let和var

`kotlin`中 可变变量修饰为 `var`、`val`。 区别在于 val 不可变，var可变。

`uts`中对应`var`的变量类型为 `var/let`

推荐使用`let` 因为只会在作用域内生效,需要慎用`var`，因为它具备有更大的作用范围


#### 4.1.3 方法定义

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


#### 4.1.4 extends

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




#### 4.1.5 非空断言

kotlin中的非空断言是`!!`，ts中是一个`!`

```ts
user!.sayHello();
```

```kotlin
user!!.sayHello();
```


#### 4.1.6 快速调用父类实现


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


#### 4.1.7 匿名内部类

`kotlin`中可以使用匿名内部类

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

---------------------------------

### 4.2 警告优化

下面的内容不会影响功能使用，但是在UTS环境中，有合适的解决办法

#### 4.2.1 java lang包的引入问题

`kotlin` 或者`java` 中java.lang.*是被特殊处理的，可以直接使用而不需要引入。

```kotlin
// 获取当前时间戳
System.currentTimeMillis()
```


UTS环境中，lang包没有被特殊对待，需要手动引入。

```ts
// 手动引入lang包下的类
import System from 'java.lang.System';

// 获取当前时间戳
System.currentTimeMillis()
```


#### 4.2.2 `UTS` 不建议使用 快捷构造

`kotlin`  中 支持通过()的方式，快速实现无参构造器的声明

```kotlin
// 获取当前时间戳
class ScreenReceiver extends BroadcastReceiver(){
  
}
```


UTS环境中，不建议这样做（虽然目前这样做不会影响编译），建议使用手动声明无参构造

```ts
class ScreenReceiver extends BroadcastReceiver{
	
	constructor (){
		super();
	}

}
```

#### 4.2.3 `UTS` 中下划线前缀的变量，有屏蔽未使用警告的含义

```uts
// IDE会提示 name,status,desc 变量未使用
onStatusUpdate(name:string, status:Int, desc:string){
	
}


// 不会警告变量未使用
onStatusUpdate(_name:string, _status:Int, _desc:string){
	
}
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

