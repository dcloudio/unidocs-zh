## uts for Android

本文旨在帮助Android开发者，快速上手UTS。

需要阅读者具备Android原生应用开发经验。


## 1 了解UTS插件是什么

`UTS插件`是`uni-app`新型插件形式，拥有跨平台，高效率，易调试等优点。[详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#)

对于Android开发者来说，我们需要了解的是：

1. 编译时：当我们在保存`UTS`源码文件时，IDE会同步将其编译为对应的Kotlin代码。
2. 运行时：在真机运行/云打包时，这些编译后的kotlin源码也会成为apk的一部分

## 2 掌握UTS语法

### 2.1  对于掌握kotlin语言者

因为UTS语法与kotlin很类似，建议快速阅读后，在实践中掌握这UTS语法。[uts语法介绍](https://uniapp.dcloud.net.cn/tutorial/syntax-uts)。

### 2.2  对于仅掌握java语言者

与js相比，uts的语法和java更加类似。但是依然存在较大的差异，需要详细阅读2.3语法部分。

尽管开发UTS插件，并不要求一定掌握kotlin，但是鉴于`UTS`目前在android平台上，会编译为kotlin源码。学会kotlin语言，方便排查问题和复杂功能实现。

因此建议学习一下kotlin语法。

+ kotlin [https://kotlinlang.org/](https://kotlinlang.org/)

+ kotlin for android [https://developer.android.com/kotlin](https://developer.android.com/kotlin)

### 2.3 数据类型差异

虽然 UTS 和 koltin 在数据类型上基本保持了一致，但是在部分场景下，还是会有差异，在此特别说明

原则上：  

**数据类型以UTS 内置的类型为准， 各原生平台都会对其自动适配。**

**但是 UTS本身是跨平台语言，当具体平台的api 有明确要求时，需要以对方明确要求的数据类型为准。**

-------------------------


#### 举例一： Int 和Number

默认情况下`UTS` 开发者可以使用 `Number` 覆盖`android` 平台上使用 `Int`的场景。

但是当开发者重写  `Service` 组件`onStartCommand` 方法时，`Android` API要求 明确要求后两个参数 必须为Int

 
原生开发环境中，应该这样写：

 ```kotlin
 override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {
	return super.onStartCommand(intent, flags, startId);
 }
 ```


 标准的TS环境中，只有`Number`类型而没有`Int`类型

 为了适应这种情况，UTS 允许开发者使用原生平台的数据类型Int，来满足原生API对数据类型的要求：

```ts
 override onStartCommand(intent:Intent ,flags:Int ,startId:Int):Int {
	return super.onStartCommand(intent, flags, startId);
 }
```




#### 举例二：`MutableList`
 
`MutableList`是`android`平台 特有的数据类型，一般场景下，可以使用UTS中内置类型 `Array` 替代

但是在 调用`onAppActivityRequestPermissionsResult` 函数监听权限申请结果时，明确要求使用此类型的参数

在原生环境中，应该这样写：

```kotlin

onAppActivityRequestPermissionsResult(fun(requestCode: Number, permissions: MutableList<String>, grantResults: MutableList<Number>){
      
});
```


标准的TS环境中，没有`MutableList`类型，与之相近的数据类型是 `Array`

为了适应这种情况，UTS 允许开发者使用原生平台的数据类型`MutableList`，来满足原生平台API对数据类型的要求：

```ts
onAppActivityRequestPermissionsResult((requestCode: number,permissions: MutableList<string>,grantResults: MutableList<number>) => {
	
});

```

### 2.4 线程环境差异

UTS环境中，默认是没有线程概念的。 代码默认执行在uts 单独的线程池中。

如果需要执行异步任务，建议通过内置函数`setTimeOut`执行

```ts
console.log("这里是UTS默认线程 :"  + Thread.currentThread().getName())
setTimeOut(function(){
	console.log("这里是异步任务线程 :"  + Thread.currentThread().getName())
},1000)
```

如果是android原生api 需要部分代码必须执行在UI线程，则需要通过原生api进行操作：

```ts
class AddUIRunnable extends Runnable {
	override run():void {
		// do something
		console.log("这里是android平台主线程 :"  + Thread.currentThread().getName())
    }
};
let uiRunable = new AddUIRunnable();
getUniActivity()!.runOnUiThread(uiRunable)
```


## 3 Android原生环境配置

对于Android项目来说，除了源码之外，还会涉及依赖，资源，配置等常见问题

本章节将会介绍，UTS插件开发环境中如何配置这些属性

注意：

+ 1 本章节内的实例代码均取自Hello UTS [项目地址](https://gitcode.net/dcloud/hello-uts)
+ 2 本章节设计的配置，均需自定义基座后才能生效
+ 3 R文件的自动生成，已经在HBuilder X 3.6.9 版本支持，请使用最新版本开发

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

除了这里列出的layout、values目录外，还支持anim等所有android标准资源目录


**需要注意的是：如果res资源中使用了 android appcompat库内置的资源，需要在config.json中添加下面的配置：**

```json
{
	"dependencies": [
		"androidx.appcompat:appcompat:1.0.0"
	]
}


```

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

截止 HBuilder 3.8.2 版本内置了以下依赖

开发者在使用列表中的依赖时，需要注意两点：

+  真机运行时，不需要添加列表中的依赖，即可直接引用相关类
+  请勿通过 手动添加jar/aar 等方式引入相同的依赖，否则会因依赖冲突导致云打包失败。

```gradle
+--- my-imageloader.jar
+--- my-nineoldandroids-2.4.0.jar
+--- zip4j-2.8.0.jar
+--- com.github.getActivity:XXPermissions:18.0@jar
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


## 4 Android内置库@iodcloudutsandroid

在uts里，Android的所有api都可以访问。

但Android开发中经常要复写application和activity，uni-app主引擎已经复写了相关类。所以想要操作application和activity，需要调用uni-app引擎封装的API。

这些api在`io.dcloud.uts`库下 UTSAndroid对象，具体见下。

### 4.1 application 上下文相关

#### 4.1.1 getAppContext

> HBuilderX 3.6.3+


```ts
import { UTSAndroid } from "io.dcloud.uts";
```

用法说明：获取当前应用Application上下文，对应android平台 Context.getApplicationContext 函数实现

Android开发场景中，调用应用级别的资源/能力，需要使用此上下文。更多用法，参考[Android官方文档](https://developer.android.google.cn/docs)


```ts
// [示例]获取asset下的音频，并且播放
let assetManager = UTSAndroid.getAppContext()!.getAssets();
let afd = assetManager.openFd("free.mp3");
let mediaPlayer = new MediaPlayer();
mediaPlayer.setDataSource(afd.getFileDescriptor(),afd.getStartOffset(), afd.getLength());
mediaPlayer.prepare();
mediaPlayer.start();
```

** 与Application的转换 **

UTSAndroid.getAppContext() 默认返回的是 实现了 `Context`抽象类的`Application` 对象

部分场景，明确需要 `Application` 对象，那么直接强制类型转换即可

```ts
import Application from 'android.app.Application'


val app = UTSAndroid.getAppContext() as Application
console.log(app)
```


#### 4.1.2 getResourcePath(resourceName:String)

> HBuilderX 3.6.3+


```ts
import { UTSAndroid } from "io.dcloud.uts";
```

获取指定插件资源的运行期绝对路径
 
```ts
// [示例]获取指定资源路径
// 得到文件运行时路径: `/storage/emulated/0/Android/data/io.dcloud.HBuilder/apps/__UNI__3732623/www/uni_modules/test-uts-static/static/logo.png`
UTSAndroid.getResourcePath("uni_modules/test-uts-static/static/logo.png")

```

#### 4.1.3 onAppTrimMemory / offAppTrimMemory

##### onAppTrimMemory

> HBuilderX 3.6.11+


App 内存不足时，系统回调函数 对应原生的API: onTrimMemory

```ts
UTSAndroid.onAppTrimMemory((level:Number) => {
	let eventName = "onAppTrimMemory - " + level;
	console.log(eventName);
});
```

##### offAppTrimMemory

> HBuilderX 3.6.11+


onAppTrimMemory 对应的反注册函数

如果传入的函数可为空，如果为空，则视为移除所有监听

```ts
// 移除所有监听
UTSAndroid.offAppTrimMemory()
// 移除指定监听
UTSAndroid.offAppTrimMemory((level:Number) => {
	
});
```


#### 4.1.4 onAppConfigChange / offAppConfigChange

##### onAppConfigChange

> HBuilderX 3.6.1+


App 配置发生变化时触发，比如横竖屏切换 对应原生的API: onConfigurationChanged

```ts
UTSAndroid.onAppConfigChange((ret:UTSJSONObject) => {
	let eventName = "onAppConfigChange - " + JSON.stringify(ret);
	console.log(eventName);
});
```

##### offAppConfigChange


与onAppConfigChange 对应的反注册函数

如果传入的函数可为空，如果为空，则视为移除所有监听

```ts
// 移除所有监听
UTSAndroid.offAppConfigChange();
// 移除指定监听
UTSAndroid.offAppConfigChange(function(ret){

});
```


--------------------------------


特别说明：除了本章节列出的函数外，android环境下 application 其他上下文方法都可以通过 getAppContext()!.xxx()的方式实现

比如获取app缓存目录：

```
UTSAndroid.getAppContext()!.getExternalCacheDir()!.getPath()
```


### 4.2 Activity 上下文

#### 4.2.1 getUniActivity

> HBuilderX 3.6.11+


获取当前插件所属的activity实例，对应android平台 getActivity 函数实现

Android开发场景中，调用活动的级别的资源/能力，需要使用此上下文。更多用法，参考[Android官方文档](https://developer.android.google.cn/docs)

```ts
// [示例]获取当前activity顶层容器
let decorView = UTSAndroid.getUniActivity()!.window.decorView;
let frameContent = decorView.findViewById<FrameLayout>(android.R.id.content)
```

#### 4.2.2 onAppActivityPause / offAppActivityPause

##### onAppActivityPause

> HBuilderX 3.6.3+


App的activity onPause时触发

```ts
UTSAndroid.onAppActivityPause(() => {
    let eventName = "onAppActivityPause - " + Date.now();
    console.log(eventName);
});
```

##### offAppActivityPause

> HBuilderX 3.6.9+

onAppActivityPause 对应的反注册函数

如果传入的函数可为空，如果为空，则视为移除所有监听


```ts
// 移除全部监听
UTSAndroid.offAppActivityPause();
// 移除指定监听
UTSAndroid.offAppActivityPause(() => {
});
```



#### 4.2.3 onAppActivityResume / offAppActivityResume

##### onAppActivityResume

> HBuilderX 3.6.3+



App的activity onResume时触发

```ts
UTSAndroid.onAppActivityResume(() => {
     let eventName = "onAppActivityResume - " + Date.now();
     console.log(eventName);
});
```

##### offAppActivityResume

> HBuilderX 3.6.9+

onAppActivityResume 对应的反注册函数

如果传入的函数可为空，如果为空，则视为移除所有监听


```ts
// 移除全部监听
UTSAndroid.onAppActivityResume();
// 移除指定监听
UTSAndroid.onAppActivityResume(() => {
});
```



#### 4.2.4 onAppActivityDestroy / offAppActivityDestroy

##### onAppActivityDestroy

> HBuilderX 3.6.3+


App 的 activity onDestroy时触发

```ts
UTSAndroid.onAppActivityDestroy(() => {
     let eventName = "onAppActivityDestroy- " + Date.now();
     console.log(eventName);
});
```

##### offAppActivityDestroy

> HBuilderX 3.6.9+

onAppActivityDestroy 对应的反注册函数

如果传入的函数可为空，如果为空，则视为移除所有监听


```ts
// 移除全部监听
UTSAndroid.offAppActivityDestroy();
// 移除指定监听
UTSAndroid.offAppActivityDestroy(() => {
});
```



#### 4.2.5 onAppActivityBack / offAppActivityBack

##### onAppActivityBack

> HBuilderX 3.6.3+


App 的 activity 回退物理按键点击时触发

```ts
UTSAndroid.onAppActivityBack(() => {
     let eventName = "onAppActivityBack- " + Date.now();
     console.log(eventName);
});

```

##### offAppActivityBack

> HBuilderX 3.6.9+

onAppActivityBack 对应的反注册函数

如果传入的函数可为空，如果为空，则视为移除所有监听


```ts
// 移除全部监听
UTSAndroid.offAppActivityBack();
// 移除指定监听
UTSAndroid.offAppActivityBack(() => {
});
```



#### 4.2.6 onAppActivityResult / offAppActivityResult

##### onAppActivityResult

> HBuilderX 3.6.8+

App 的 activity 启动其他activity的回调结果监听 对应原生的 onActivityResult

```ts
UTSAndroid.onAppActivityResult((requestCode: Int, resultCode: Int, data?: Intent) => {
	let eventName = "onAppActivityResult  -  requestCode:" + requestCode + " -resultCode:"+resultCode + " -data:"+JSON.stringify(data);
    console.log(eventName);
});
```

##### offAppActivityResult

> HBuilderX 3.6.9+

onAppActivityResult 对应的反注册函数

如果传入的函数可为空，如果为空，则视为移除所有监听


```ts
// 移除全部监听
UTSAndroid.offAppActivityResult();
// 移除指定监听
UTSAndroid.offAppActivityResult(() => {
});
```


#### 4.2.7 onAppActivityRequestPermissionsResult / offAppActivityRequestPermissionsResult

##### onAppActivityRequestPermissionsResult

> HBuilderX 3.6.3+


App 的 activity 获得权限请求结果的回调

```ts
UTSAndroid.onAppActivityRequestPermissionsResult((requestCode: number,
                                                     permissions: MutableList<string>,
                                                     grantResults: MutableList<number>) => {
		
		console.log(grantResults);
		console.log(permissions);   
		console.log(requestCode);
	});

//发起定位权限申请
ActivityCompat.requestPermissions(getUniActivity()!,
	    arrayOf(Manifest.permission.ACCESS_COARSE_LOCATION), 1001);

```

##### offAppActivityRequestPermissionsResult

> HBuilderX 3.6.9+

onAppActivityRequestPermissionsResult 对应的反注册函数

如果传入的函数可为空，如果为空，则视为移除所有监听


```ts
// 移除全部监听
UTSAndroid.offAppActivityRequestPermissionsResult();
// 移除指定监听
UTSAndroid.offAppActivityRequestPermissionsResult(() => {
});

-----------------------------


特别说明：除了本章节列出的函数外，android环境下 activity 其他上下文方法都可以通过 getUniActivity()!.xxx()的方式实现

比如获取当前activity的顶层View容器

```ts
UTSAndroid.getUniActivity()!.getWindow().getDecorView();
```

### 4.3 UTS插件开发中Activity生命周期注意事项

即使在android原生开发中，应用的生命周期管理也是十分重要的。 [android生命周期](https://developer.android.com/guide/components/activities/activity-lifecycle?hl=zh_cn)

UTS环境中对原生的生命周期进行了封装和简化，用户不需要关心 除了activity 以外的更多原生细节。

只需要了解本章节中列出的 activity相关生命周期即可。即 在UTS环境中 开发者可以认为 activity 的生命周期 就是应用的生命周期。 

其中最为常见的场景，要数`onAppActivityDestroy`中释放系统资源了：


举个例子，以Hello UTS  [用户截屏插件](https://ext.dcloud.net.cn/plugin?id=9897)为例。

在注册监听回调时，添加了下列代码。 
```
UTSAndroid.onAppActivityDestroy(function(){
	screenOB?.stopWatching()
	screenOB = null
})
```

这段代码的意思是当宿主activity被销毁时，主动回收屏幕监听的FileObserver

这是因为除了正常的用户注册/注册 之外，还存在一种情况：用户没有反注册，便关闭了应用。   此时FileObserver 并没有被反注册回收。就会导致应用关闭后继续持有上一个uni-app js引擎实例的引用，从而导致下一次启动时出现引擎回调找不到的情况。



开发者在开发UTS插件时，如果遇到了类似使用系统组件的情况，也需要特别关注资源释放情况。


### 4.4 系统权限管理

HBuilder X 3.8.2版本之后支持

系统权限管理使用了 https://github.com/getActivity/XXPermissions 工具库

如果开发者使用了相同依赖，可能打包冲突。需要修改为 complileOnly 或者 修改为本章节内置API



##### 4.4.1 requestSystemPermission

请求系统权限,对应的两个参数：
1  请求的权限列表
2  请求结果回调

```ts
let permissionWifi:string[] = mutableListOf("android.permission.ACCESS_FINE_LOCATION","android.permission.ACCESS_FINE_LOCATION");
UTSAndroid.requestSystemPermission(UTSAndroid.getUniActivity()!,permissionWifi,function(allRight:boolean,grantedList:string[]){
		if(allRight){
			// 用户同意了全部权限
		}else{
			// 用户仅同意了 grantedList中的权限
		}
	},function(doNotAskAgain:boolean,grantedList:string[]){
		// 用户拒绝了部分权限，仅允许了grantedList中的权限
		if(doNotAskAgain){
			// 用户拒绝了权限，并且选择不再询问
		}
	})
```

##### 4.4.2 gotoSystemPermissionActivity

跳转至系统设置权限设置界面，一般是用户选择了不再继续询问选项后

```
var permissionWifi: MutableList<String> = mutableListOf("android.permission.ACCESS_FINE_LOCATION", "android.permission.ACCESS_FINE_LOCATION");
UTSAndroid.gotoSystemPermissionActivity(UTSAndroid.getUniActivity()!!,permissionWifi)
```


##### 4.4.3 getSystemPermissionDenied

判断权限是否已经被用户禁止

```ts
var permissionWifi: MutableList<String> = mutableListOf("android.permission.ACCESS_FINE_LOCATION", "android.permission.ACCESS_FINE_LOCATION");
val denied = UTSAndroid.getSystemPermissionDenied(UTSAndroid.getUniActivity()!!, permissionWifi)
// 执行结果
[android.permission.ACCESS_FINE_LOCATION, android.permission.ACCESS_FINE_LOCATION]
```

##### 4.4.4 checkSystemPermissionGranted

判断权限是否已经被用户授予

```ts
var permissionWifi: MutableList<String> = mutableListOf("android.permission.ACCESS_FINE_LOCATION", "android.permission.ACCESS_FINE_LOCATION");
val grant = UTSAndroid.checkSystemPermissionGranted (UTSAndroid.getUniActivity()!!, permissionWifi)
// 执行结果
false
```

## 5 Kotlin与UTS差异重点介绍 (持续更新)

通过上面的章节的阅读。

至此我们认为你已经掌握了UTS语法，掌握了基本的Kotlin语法，掌握了UTS对于android资源的支持。

但是对于一个熟悉android开发的kotlin语言者来说，有很多常用的习惯发生了改变，我们会在这个章节特别指出，便于开发者加深认识。


### 5.1 语法差异

-------------------------------

#### 5.1.1 可为空的语法标识

kotlin中可为空的语法统一为类型后加`?`，以下面的代码为例

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

#### 5.1.2  let和var

`kotlin`中 可变变量修饰为 `var`、`val`。 区别在于 val 不可变，var可变。

`uts`中对应`var`的变量类型为 `var/let`

推荐使用`let` 因为只会在作用域内生效，需要慎用`var`，因为它具备有更大的作用范围


#### 5.1.3 方法定义

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
 
```ts
 // 全局方法
 function startListener():void{
	 
 }
```

#### 5.1.4 extends

`kotlin`中的: 继承操作符，需要用`extends`取代

|语法|kotlin|uts|
|---|-------|---|
|继承类|:|extends|
|实现type接口|:|extends|
|实现接口|:|implements|


```kotlin
class MediaContentObserver : ContentObserver {
}
```


```ts
class MediaContentObserver extends ContentObserver {
}
```

#### 5.1.5 非空断言

kotlin中的非空断言是`!!`，ts中是一个`!`

```ts
user!.sayHello();
```

```kotlin
user!!.sayHello();
```


#### 5.1.6 快速调用父类实现


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


#### 5.1.7 匿名内部类

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

#### 5.1.8 可为空函数调用


有一种特殊场景，我们需要定义一些可为空的函数变量，比如下面的 success,fail：

```ts
type Option = {
	success?: (res: object) => void;
	fail?: (res: object) => void;
};

```


这个时候我们需要这样调用

```ts
options.success?.(res)
```

这样的调用方式在kotlin中是非法的，属于TS中的特有语法，需要特别注意。


#### 5.1.9 一个类只能有一个构造函数

在`Kotlin`/`java`中允许一个函数有多个构造器，但是UTS中是不被允许的



#### 5.1.10 界面跳转写法

android开发中场景的 intent跳转需要传入 目标界面的class对象，目前UTS中仅支持一种写法

```ts
let intent = new Intent(getUniActivity(),DemoActivity().javaClass);
getUniActivity()!.startActivity(intent);
```

#### 5.1.11 指定double数据类型

某些场景下开发者需要获得 指定double数据类型的数据

开发者下意识的写法可能是：
```ts
// 这样是错误的
let a:Int =3
let b:Int =4
let c:Double  = a/b
```

但是Android原生环境中，数据类型的精度是向下兼容的，如果想要获得一个double类型，必须要有一个double类型参与运算：

```ts
// 这样才是正确的
let a:Int =3
let b:Int =4
let c:Double  = a * 1.0 / b
```


---------------------------------

### 5.2 警告优化

下面的内容不会影响功能使用，但是在UTS环境中，有合适的解决办法

#### 5.2.1 java lang包的引入问题

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


#### 5.2.2 `UTS` 不建议使用 快捷构造

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

#### 5.2.3 `UTS` 中下划线前缀的变量，有屏蔽未使用警告的含义

```ts
// IDE会提示 name,status,desc 变量未使用
onStatusUpdate(name:string, status:Int, desc:string){
	
}

// 不会警告变量未使用
onStatusUpdate(_name:string, _status:Int, _desc:string){
	
}
```


## 6  常见问题(持续更新)

### 6.1 如何在UTS环境中，新建一个`activity`？

参考Hello UTS项目中的uts-nativepage插件

路径:
> ~\uni_modules\uts-nativepage


### 6.2 如何在UTS环境中，新建一个`service`？

参考Hello UTS项目中的uts-nativepage插件

路径:
> ~\uni_modules\uts-nativepage

### 6.3 如何在UTS环境中，新建一个`Thread`？

简单示例
```ts
class CustomThread extends Thread{
	
	constructor(){
		super();
	}
	
	override run(){
		Thread.sleep(1000)
		console.log("CustomThread = " + Thread.currentThread().getName())
	}
}
```

完整示例参考Hello UTS项目中的uts-nativepage插件

路径:
> ~\uni_modules\uts-nativepage


### 6.4 如果我要实现一个官方已有的三方SDK功能，比如微信支付，如何处理？

因为android中，每个UTS插件都对应一个gradle 子项目，所以类似的情况不能简单复用 自定义基座中的官方依赖。

需要：  **不要勾选官方的依赖，然后在uts插件中，按照文档配置依赖**

### 6.5 UTSCallback 和 UTSJSONObject 是什么？

UTSCallback 和 UTSJSONObject 是UTS内置专门用于UTS环境和前端交互的特定类型。

uni环境与UTS环境交互时，除了基本数据类型之外，涉及function的需要使用UTSCallback替代，涉及复杂对象object需要用UTSJSONObject 替代


### 6.6 如何生成android平台Array对象

UTS环境中，默认的数组写法[] / Array()  对应到 android平台的数据结构是 `MutableList`

理论上来说 `MutableList`确实更加灵活强大，但是部分android 平台api 明确要求了 Array格式的数据(比如请求权限)

类似场景下，我们就要使用 toTypedArray() 函数进行转换，以便将`MutableList` 转换为对应的`Array`

```typescript

// 得到一个MutableList
let permissionArray :String[] = []
// 得到一个Array
console.log(permissionArray.toTypedArray())
```

另外还存在一种特殊情况，即开发者 在UTS中使用了 `kotlin`编写的依赖，这个时候情况稍微复杂些

与`UTS`中只有一种 数组结构相比，`kotlin`中的数组结构要多很多，比如 `IntArray`,`Array`,`MutableList`等,

对于情况，开发者需要注意两点：


1  UTS具备类型推导功能，调用第三方依赖是不需要声明类型

```
// 建议的写法
let a:IntArray = xxx.getInfo()

// 这样是没必要的，如果一定要这样写，必须要明确了解到kotlin依赖返回的数据结构，否能可能会因为类型错误，导致编译报错
let a:IntArray = xxx.getInfo()


```

2  各种数组类型的转换说明

```
// IntArray 转 MutableList
val a = intArrayOf(1,2,3)
val b = a.toMutableList()


// MutableList 转 Array<Int>
val c = b.toTypedArray()

// Array<Int> 转 IntArray
val d = c.toIntArray()


```






### 6.7 如何生成byte[]对象

在java平台中，二进制操作一般采用字节数组实现。 

UTS在android平台编译后的语言为Kotlin,对应的语法对象是ByteArray.

使用这个类不需要额外引入包，直接运行即可

下面是一个简单的示例

```
let byteTest = new ByteArray(5)
console.log(byteTest)
```

### 6.8 如何向UTS环境中传递数组参数

在 uni-app 1.0 平台，js环境与原生环境的交互都是经过js引擎桥接

js引擎除了 string,number,boolean 等基本数据结构外，仅支持JSONObject,JSONArray两种。 

+ JSONObject 比较常见，基本所有的接口参数都会 对应一个uts中定义的 type 类
+ JSONArray 一般在uts中采用Array数组来承接

下面是一个Array的使用示例：

```
// UTS插件，声明数组参数
export function callWithoutParam(filterArray : Array<string>,success: () => void) {
	console.log(filterArray)
	success();
	return { name: "doSthWithCallback" };
}

```

```js
// 前端传递数组参数
UTSHello.callWithoutParam(
	["system","optionB"]
	,
	()=>{
		uni.showToast({
			title:'成功调用',
			icon:'none'
		});
	}
);
```


### 6.9 编译报错：unresolved reference R （R资源无法识别）

UTS插件支持使用android的原生资源，比如动画，布局，字符串等。 [详细说明](!https://uniapp.dcloud.net.cn/plugin/uts-for-android.html#_3-1-%E9%85%8D%E7%BD%AEandroidmanifest-xml)


如果提示 R资源无法找到:unresolved reference R

1 需要排查资源是否符合android原生格式

2 检查R资源引入的包名是否正确，参考hello uts nativepage插件

```
import R from 'io.dcloud.uni_modules.uts_nativepage.R';
```



## 7  已知待解决问题(持续更新)

### 7.1 结构入参 boolean 参数默认为true

当以type 结构体为参数时，其内部boolean字段 默认值为false，不支持指定。

### 7.2 目前尚不支持 Math内置

HBuilderX 3.7.1 版本已支持

### 7.3 目前尚不支持 8.x 版本gradle

建议先使用7.X版本，这个问题后续会处理

