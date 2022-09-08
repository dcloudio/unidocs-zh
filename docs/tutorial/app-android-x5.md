>  腾讯TBS x5内核仅支持Android平台；iOS只能使用自带的WKWebview/UIWebview

以下说明中的“腾讯TBS x5内核“精简为“x5内核”。
集成x5内核说明：
 1. 首先需要升级到HBuilderX2.5.3 版本或更高  
 2. 按以下说明配置项目的manifest.json，然后提交云打包或使用[自定义基座](http://ask.dcloud.net.cn/article/35115)生效  

集成x5内核后哪些页面会由x5内核渲染？  
1. 所有plus.webview.create创建的webview  
2. uni-app中所有vue页面  
3. uni-app中的web-view组件  

### 配置使用X5内核  
打开项目的manifest.json文件，在“App模块配置”中勾选“Android X5 Webview(腾讯TBS)”：
![](https://native-res.dcloud.net.cn/images/uniapp/android/x5-manifest.png)

**提示**  
> 使用X5内核模块提交云端打包后才能生效，真机运行调试时请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)  
> [CPU类型配置](https://uniapp.dcloud.io/tutorial/app-android-abifilters)不支持“x86”，建议仅配置“armeabi-v7a” 否则可能无法正常使用X5内核  
> HBuilderX3.0.7+版本[CPU类型配置](https://uniapp.dcloud.io/tutorial/app-android-abifilters)开始支持“arm64-v8a”  
> 本地离线打包请参考：[X5 Webview 配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/x5)  
> uni小程序SDK请参考：[unimp小程序集成x5教程](https://nativesupport.dcloud.net.cn/UniMPDocs/UseModule/android/x5)


<a id="mattersNeedingAttention"></a>

### X5内核能解决什么问题：

1. x5适配了rom的自定义主题字体，与原生字体保持一致。不会出现一个界面部分字体为原生字体、部分字体为webview字体的问题。之前系统webview在部分手机上不能适配rom自定义主题的字体。（注意：部分设备可能需要重新系统或不支持自定义主题字体）
2. 系统的webview有浏览器兼容问题，低端Android的webview有很多新语法都不支持。使用x5可以拉齐webview内核。对于5+App和wap2app，可以全部拉齐。对于uni-app，由于uni-app自带js引擎，在js和组件层面本身就不存在浏览器兼容问题，只有vue页面的css涉及浏览器兼容问题。如果你想使用比如sticky等新css语法，此时可通过x5拉齐。如果开发者比较注意，不使用太新的语法的话，其实此时x5在这方面没有用处  
3. x5内核自带的video实现强于html的video，支持视频格式更多。（这个只能用于5+app和wap2app的html里的自带video，以及uni-app的web-view组件里的video。uni-app默认的video组件本身就是原生的，和x5无关）  
4. 远程web页面防劫持是x5内核的一大亮点  

### 验证是否使用x5以及x5版本号的方法
- 3.4.14+以上的HBuilderX，使用 [uni.getSystemInfo](https://uniapp.dcloud.io/api/system/info.html) ，看返回的 browserName 和 browserVersion
- 低版本HBuilderX 使用 `plus.navigator.getUserAgent()`

x5内核的UserAgent如下：
```
Mozilla/5.0 (Linux; Android 11; PEXM00 Build/RKQ1.201217.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045738
```

注意需打包后测试，至少需要自定义基座。

### X5内核的注意事项

1. 由于x5使用动态热更新加载x5内核。在Google Play审核是不允许的，所以无法提交Google Play  
2. x5不支持在PC模拟器上运行，一切真机为主 
3. x5内核对webview嵌套支持的不友好。使用x5渲染的页面尽量不要使用webview嵌套（父子页面等）容易出现动画卡顿等现象  
4. 因x5加载内核机制问题，云打包APK第一次安装运行可能x5还没有下载，此时不是x5内核渲染页面，而是系统webview渲染页面。但x5下载完毕后，杀掉进程重新运行，就会使用x5内核渲染页面  
5. 并非所有手机都有x5内核，当手机端没有时x5内核时，App启动后会先下载内核，在x5加载成功前，调用webview仍然是系统webview  
6. html5 嵌入iframe视频fixed定位会导致应用闪退  
7. 部分系统(华为)修改字体后不会重启系统。导致x5页面不能够立即更换字体库重新进行渲染。需要杀掉进程重新启动应用（back退出应用无效）才可以重置字体库进行页面渲染  
8. APK本身已经集成了X5才能通过wgt升级。如果apk本身没集成X5则不可以通过WGT升级支持X5。需要改为APK升级！  
9. 可通过plus.navigator.getUserAgent判断UA中是否包含MQQBrowser关键字判断当前webview是否为X5渲染。 HX2.6.16+支持  
10. x5内核渲染页面的滚动条。会随着页面内容的长短显示滚动滑块。可按住滚动滑块拖动实现快速滚动。与普通webview滚动条有差异  


### x5内核自更新  

x5内核存在自更新机制。所以可能存在历史版本升级了x5内核导致的兼容性问题。集成的同学需要注意！


### 适配问题  
目前已知 TBS45738版本更新后会导致 uniapp vue页面的input组件adjust-position=false失效！使用x5内核的同学请知晓尽快适配，可以改为nvue或不适用x5内核。

### 汇总x5浏览器内核加载失败问题

+  周五周六（18:00-21:00）服务器维护不支持下载
+  不支持X86设备
+  频繁下载x5浏览器内核的IP会被限流下载
+ 非wifi环境需要配置`allowDownloadWithoutWiFi`为true开启下载
+  离线打包debug环境下，可会导致下载失败

### 非WiFi情况下载X5浏览器内核

manifest.json 配置webView节点
+ 5+app 放在plus节点
+ uni-app 放在app-plus节点

**示例：**
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