>  腾讯TBS x5内核仅支持Android平台；iOS只能使用自带的WKWebview/UIWebview
> Tencent TBS x5 kernel only supports Android platform; iOS can only use its own WKWebview/UIWebview

以下说明中的“腾讯TBS x5内核“精简为“x5内核”。
The "Tencent TBS x5 kernel" in the following instructions is shortened to "x5 kernel".
集成x5内核说明：
Integrated x5 core description:
 1. 首先需要升级到HBuilderX2.5.3 版本或更高  
 1. First, you need to upgrade to HBuilderX 2.5.3 or higher
 2. 按以下说明配置项目的manifest.json，然后提交云打包或使用[自定义基座](http://ask.dcloud.net.cn/article/35115)生效  
 2. Configure the manifest.json of the project according to the following instructions, and then submit the cloud package or use [Custom Dock](http://ask.dcloud.net.cn/article/35115) to take effect

集成x5内核后哪些页面会由x5内核渲染？  
Which pages will be rendered by the x5 core after integrating the x5 core?
1. 所有plus.webview.create创建的webview  
1. All webviews created by plus.webview.create
2. uni-app中所有vue页面  
2. All vue pages in uni-app
3. uni-app中的web-view组件  
3. The web-view component in uni-app

### 配置使用X5内核  
### Configure to use X5 kernel
打开项目的manifest.json文件，在“App模块配置”中勾选“Android X5 Webview(腾讯TBS)”：
![](https://native-res.dcloud.net.cn/images/uniapp/android/x5-manifest.png)

**提示**  
**hint**  
> 使用X5内核模块提交云端打包后才能生效，真机运行调试时请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)  
> It will take effect after submitting the cloud package using the X5 kernel module. Please use the [custom base] when running and debugging the real machine (http://ask.dcloud.net.cn/article/35115)
> [CPU类型配置](https://uniapp.dcloud.io/tutorial/app-android-abifilters)不支持“x86”，建议仅配置“armeabi-v7a” 否则可能无法正常使用X5内核  
> [CPU type configuration](https://uniapp.dcloud.io/tutorial/app-android-abifilters) does not support "x86", it is recommended to configure only "armeabi-v7a", otherwise the X5 kernel may not be used normally
> HBuilderX3.0.7+版本[CPU类型配置](https://uniapp.dcloud.io/tutorial/app-android-abifilters)开始支持“arm64-v8a”  
> HBuilderX 3.0.7+ version [CPU type configuration](https://uniapp.dcloud.io/tutorial/app-android-abifilters) starts to support "arm64-v8a"
> 本地离线打包请参考：[X5 Webview 配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/x5)  
> For local offline packaging, please refer to: [X5 Webview Configuration](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/x5)
> uni小程序SDK请参考：[unimp小程序集成x5教程](https://nativesupport.dcloud.net.cn/UniMPDocs/UseModule/android/x5)
> For the uni applet SDK, please refer to: [unimp applet integration x5 tutorial](https://nativesupport.dcloud.net.cn/UniMPDocs/UseModule/android/x5)


<a id="mattersNeedingAttention"></a>

### X5内核能解决什么问题：
### What problems can the X5 kernel solve:

1. x5适配了rom的自定义主题字体，与原生字体保持一致。不会出现一个界面部分字体为原生字体、部分字体为webview字体的问题。之前系统webview在部分手机上不能适配rom自定义主题的字体。（注意：部分设备可能需要重新系统或不支持自定义主题字体）
1. The x5 is adapted to the custom theme font of rom, which is consistent with the native font. There will not be a problem that some fonts of the interface are native fonts and some fonts are webview fonts. Previously, the system webview could not adapt to the font of the rom custom theme on some mobile phones. (Note: Some devices may require a system reboot or do not support custom theme fonts)
2. 系统的webview有浏览器兼容问题，低端Android的webview有很多新语法都不支持。使用x5可以拉齐webview内核。对于5+App和wap2app，可以全部拉齐。对于uni-app，由于uni-app自带js引擎，在js和组件层面本身就不存在浏览器兼容问题，只有vue页面的css涉及浏览器兼容问题。如果你想使用比如sticky等新css语法，此时可通过x5拉齐。如果开发者比较注意，不使用太新的语法的话，其实此时x5在这方面没有用处  
2. The system webview has browser compatibility issues, and the low-end Android webview has many new syntaxes that are not supported. Using x5 you can snap the webview kernel. For 5+App and wap2app, all can be flushed. For uni-app, since uni-app comes with its own js engine, there is no browser compatibility problem at the js and component level itself, only the css of the vue page involves browser compatibility issues. If you want to use new css syntax such as sticky, you can use x5 lashing at this time. If the developer pays more attention and does not use too new syntax, in fact, x5 is useless in this regard at this time
3. x5内核自带的video实现强于html的video，支持视频格式更多。（这个只能用于5+app和wap2app的html里的自带video，以及uni-app的web-view组件里的video。uni-app默认的video组件本身就是原生的，和x5无关）  
3. The video implementation of the x5 kernel is stronger than the html video, and supports more video formats. (This can only be used for the built-in video in the html of 5+app and wap2app, and the video in the web-view component of uni-app. The default video component of uni-app itself is native and has nothing to do with x5)
4. 远程web页面防劫持是x5内核的一大亮点  
4. Anti-hijacking of remote web pages is a highlight of the x5 kernel

### 验证是否使用x5以及x5版本号的方法
### How to verify whether x5 and x5 version number are used
- 3.4.14+以上的HBuilderX，使用 [uni.getSystemInfo](https://uniapp.dcloud.io/api/system/info.html) ，看返回的 browserName 和 browserVersion
- For HBuilderX 3.4.14+, use [uni.getSystemInfo](https://uniapp.dcloud.io/api/system/info.html) to see the returned browserName and browserVersion
- 低版本HBuilderX 使用 `plus.navigator.getUserAgent()`
- Lower versions of HBuilderX use `plus.navigator.getUserAgent()`

x5内核的UserAgent如下：
The UserAgent of the x5 kernel is as follows:
```
Mozilla/5.0 (Linux; Android 11; PEXM00 Build/RKQ1.201217.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045738
```

注意需打包后测试，至少需要自定义基座。
Note that it needs to be tested after packaging, at least a custom base is required.

### X5内核的注意事项
### X5 Kernel Notes

1. 由于x5使用动态热更新加载x5内核。在Google Play审核是不允许的，所以无法提交Google Play  
1. Since x5 uses dynamic hot update to load x5 kernel. Review on Google Play is not allowed, so can't submit to Google Play
2. x5不支持在PC模拟器上运行，一切真机为主 
2. x5 does not support running on PC emulators, everything is based on real machines
3. x5内核对webview嵌套支持的不友好。使用x5渲染的页面尽量不要使用webview嵌套（父子页面等）容易出现动画卡顿等现象  
3. The x5 kernel is not friendly to webview nesting support. Try not to use webview nesting (parent-child pages, etc.) for pages rendered by x5, which are prone to animation stuck and other phenomena
4. 因x5加载内核机制问题，云打包APK第一次安装运行可能x5还没有下载，此时不是x5内核渲染页面，而是系统webview渲染页面。但x5下载完毕后，杀掉进程重新运行，就会使用x5内核渲染页面  
4. Due to the problem of the x5 loading kernel mechanism, the first time the cloud packaged APK is installed and run, the x5 may not be downloaded. At this time, the page is not rendered by the x5 kernel, but the system webview renders the page. But after the x5 download is complete, kill the process and run it again, the page will be rendered using the x5 kernel
5. 并非所有手机都有x5内核，当手机端没有时x5内核时，App启动后会先下载内核，在x5加载成功前，调用webview仍然是系统webview  
5. Not all mobile phones have the x5 kernel. When the mobile phone does not have the x5 kernel, the app will download the kernel first after the app is started. Before the x5 is loaded successfully, the system webview is still used to call the webview.
6. html5 嵌入iframe视频fixed定位会导致应用闪退  
6. html5 embedded iframe video fixed positioning will cause the application to crash
7. 部分系统(华为)修改字体后不会重启系统。导致x5页面不能够立即更换字体库重新进行渲染。需要杀掉进程重新启动应用（back退出应用无效）才可以重置字体库进行页面渲染  
7. Some systems (Huawei) will not restart the system after modifying the font. As a result, the x5 page cannot immediately replace the font library and re-render. You need to kill the process and restart the application (back exiting the application is invalid) to reset the font library for page rendering
8. APK本身已经集成了X5才能通过wgt升级。如果apk本身没集成X5则不可以通过WGT升级支持X5。需要改为APK升级！  
8. The APK itself has integrated X5 to be able to upgrade through wgt. If the apk itself does not integrate X5, it cannot support X5 through WGT upgrade. Need to change to APK upgrade!
9. 可通过plus.navigator.getUserAgent判断UA中是否包含MQQBrowser关键字判断当前webview是否为X5渲染。 HX2.6.16+支持  
9. You can use plus.navigator.getUserAgent to determine whether the UA contains the MQQBrowser keyword to determine whether the current webview is rendered by X5. HX2.6.16+ support
10. x5内核渲染页面的滚动条。会随着页面内容的长短显示滚动滑块。可按住滚动滑块拖动实现快速滚动。与普通webview滚动条有差异  
10. The scroll bar of the x5 kernel renders the page. A scrolling slider is displayed with the length of the page content. You can hold down the scroll slider and drag for fast scrolling. There is a difference with the normal webview scroll bar


### x5内核自更新  
### x5 kernel self-update

x5内核存在自更新机制。所以可能存在历史版本升级了x5内核导致的兼容性问题。集成的同学需要注意！
The x5 kernel has a self-update mechanism. Therefore, there may be compatibility issues caused by the historical version upgrading the x5 kernel. Integrated students need to pay attention!


### 适配问题  
### Adaptation problem
目前已知 TBS45738版本更新后会导致 uniapp vue页面的input组件adjust-position=false失效！使用x5内核的同学请知晓尽快适配，可以改为nvue或不适用x5内核。
It is currently known that after the TBS45738 version is updated, the input component adjust-position=false of the uniapp vue page will become invalid! Students who use the x5 kernel, please know to adapt as soon as possible, you can change to nvue or not apply the x5 kernel.

### 汇总x5浏览器内核加载失败问题
### Summary of x5 browser kernel loading failure problems

+  周五周六（18:00-21:00）服务器维护不支持下载
+ Friday and Saturday (18:00-21:00) server maintenance does not support download
+  不支持X86设备
+ Does not support X86 devices
+  频繁下载x5浏览器内核的IP会被限流下载
+ Frequent download of the IP of the x5 browser kernel will be limited to download
+  非wifi环境需要配置`allowDownloadWithoutWiFi`为true开启下载
+ Non-wifi environment needs to configure `allowDownloadWithoutWiFi` to true to enable download
+  离线打包debug环境下，可会导致下载失败
+ In the offline package debug environment, the download may fail

### 非WiFi情况下载X5浏览器内核
### Download X5 browser kernel in non-WiFi situation

manifest.json 配置webView节点
manifest.json configures the webView node
+ 5+app 放在plus节点
+ 5+app on the plus node
+ uni-app 放在app-plus节点
+ uni-app is placed on the app-plus node

**示例：**
**Example:**
```
app-plus {
	...
	...
	"webView": {// 3.5.0 + 仅Android支持
	    "x5": { // 此属性需要勾选 Android X5 Webview 模块，详细参见下面的说明
	        "timeOut": 3000, // 超时时间
	        "showTipsWithoutWifi": true, // 是否在非WiFi网络环境时，显示用户确认下载x5内核的弹窗。默认值false
	        "allowDownloadWithoutWiFi": false // 是否允许用户在非WiFi网络时进行x5内核的下载。默认值false（如果为true，就不会显示用户确认的弹窗。）
	    }
	}
}

```