iOS有UIWebview和WKWebview两种webview。从iOS13开始苹果将UIWebview列为过期API。
iOS has two webviews, UIWebview and WKWebview. Since iOS13, Apple has listed UIWebview as an outdated API.

**2020年4月起App Store将不再接受使用UIWebView的新App上架、2020年12月起将不再接受使用UIWebView的App更新。**
**App Store will no longer accept new apps using UIWebView from April 2020, and app updates using UIWebView will no longer be accepted from December 2020. **

从HBuilderX 2.2.5起，iOS上默认均已经是WKWebview，除非开发者手动在代码中指定要用UIWebview，否则实际渲染的页面都是在WKWebview里渲染的。
Since HBuilderX 2.2.5, the default is WKWebview on iOS. Unless the developer manually specifies to use UIWebview in the code, the actual rendered pages are all rendered in WKWebview.
不过，虽然实际页面是WKWebview渲染的，但App底层引擎源码里仍然有UIWebview的可选引用。Appstore的机审会发现二进制代码中包括对UIWebview的引用，从而引发告警。
However, although the actual page is rendered by WKWebview, there is still an optional reference to UIWebview in the source code of the underlying engine of the App. The Appstore's machine review found that the binary code included a reference to UIWebview, which caused an alert.
从HBuilderX 2.6.6起，uiWebview从基础引擎中移除，变成可选模块（manifest里选择）。机审也没有提示了。
From HBuilderX 2.6.6, uiWebview is removed from the base engine and becomes an optional module (selected in the manifest). There was no hint from the inspection.

老HBuilder和HBuilderX 2.2.5之前的版本，App端策略如下：
For the old HBuilder and HBuilderX versions before 2.2.5, the App-side strategy is as follows:
- 5+ APP（含wap2app）
- 5+ APP (including wap2app)
默认为UIWebview。
Default is UIWebview.
- uni-app
vue页面中web-view组件默认使用UIWebview，nvue页面中web-view组件使用WKWebview。
The web-view component in the vue page uses UIWebview by default, and the web-view component in the nvue page uses WKWebview.

**HBuilderX 2.2.5+版本已将iOS上所有webview的默认内核由UIWebview调整为WKWebview。**
**HBuilderX 2.2.5+ version has adjusted the default kernel of all webviews on iOS from UIWebview to WKWebview. **

<a id="uiwebview"/>

**HBuilderX 2.6.6+版本已将iOS中所有UIWebview代码从基础引擎中摘除，独立为UIWebview模块，如继续使用UIWebview则需在manifest中勾选使用UIWebview模块**
**HBuilderX 2.6.6+ version has removed all UIWebview code in iOS from the basic engine, and is a separate UIWebview module. If you continue to use UIWebview, you need to check the use of UIWebview module in the manifest**


### 配置使用UIWebview模块  
### Configure to use UIWebview module
打开项目的manifest.json文件，在“App模块配置”中勾选“iOS UIWebview”：
![](https://native-res.dcloud.net.cn/images/uniapp/ios/uiwebview-manifest.png)

**提示**  
**hint**  
> 使用UIWebview模块提交云端打包后才能生效，真机运行调试时请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)  
> Use UIWebview module to submit cloud package to take effect, please use [custom base] when running and debugging on real machine (http://ask.dcloud.net.cn/article/35115)
> 使用UIWebview模块后应用无法通过App Store审核  
> App fails App Store review after using UIWebview module
> 本地离线打包请参考：[配置UIWebview模块](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/uiwebview)
> For local offline packaging, please refer to: [Configure UIWebview Module](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/uiwebview)


### 使用UIWebview
### Using UIWebview

#### 5+App（含wap2app）如何切换iOS默认使用UIWebview或WKWebview内核？
#### 5+App (including wap2app) how to switch iOS to use UIWebview or WKWebview kernel by default?
HBuilderX 2.2.5以前的版本，iOS上webview的默认为UIWebview，HBuilderX2.2.5及以后的版本默认改为WKWebview。
Before HBuilderX 2.2.5, the default webview on iOS is UIWebview, and HBuilderX 2.2.5 and later versions default to WKWebview.
如果要修改默认值，可在manifest.json中配置。
If you want to modify the default value, you can configure it in manifest.json.
在manifest.json文件源码视图中设置plus -> kernel -> ios 的值为 "WKWebview"或"UIWebview"：
In the manifest.json file source view, set the value of plus -> kernel -> ios to "WKWebview" or "UIWebview":
```json
	"plus": {
		"kernel": {
			"ios": "UIWebview"    //或者 "WKWebview"
		},
		// ...
	}
```

#### uni-app 如何配置web-view组件默认使用UIWebview或WKWebview内核？
#### uni-app How to configure web-view components to use UIWebview or WKWebview core by default?
HBuilderX 2.2.5以前的版本，iOS上vue页面中web-view组件或调用5+ API创建的Webview窗口默认为UIWebview，HBuilderX2.2.5及以后的版本默认改为WKWebview。
Before HBuilderX 2.2.5, the web-view component in the vue page on iOS or the Webview window created by calling 5+ API defaults to UIWebview, and HBuilderX 2.2.5 and later versions default to WKWebview.
如果要修改默认值，可在manifest.json中配置。
If you want to modify the default value, you can configure it in manifest.json.
在manifest.json文件源码视图中设置 app-plus -> kernel -> ios 的值为 "WKWebview"或"UIWebview"：
In the manifest.json file source view, set the value of app-plus -> kernel -> ios to "WKWebview" or "UIWebview":
```json
	"app-plus": {
		"kernel": {
			"ios": "UIWebview"    //或者 "WKWebview"
		},
		// ...
	}
```
**nvue页面中的web-view组件强制使用WKWebview，不可配置**
**The web-view component in the nvue page is forced to use WKWebview, which is not configurable**

#### 如何使用5+ API（plus.webview.create）创建Webview窗口时指定使用UIWebview或WKWebview内核？
#### How to specify to use UIWebview or WKWebview kernel when creating Webview window using 5+ API (plus.webview.create)?
创建Webvie窗口时可通过kernel属性指定内核，如下：
When creating a Webvie window, you can specify the kernel through the kernel property, as follows:
```javascript
// 通过kernel属性指定Webview的内核
// Specify the kernel of the Webview through the kernel property
var w = plus.webview.create('https://xxx.xxx.xxx', 'id', {
    'kernel': 'UIWebview'       //或者'WKWebview'
});
```
更多规范参考5+ API的 [WebviewStyles](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyles)
For more specifications, refer to [WebviewStyles] of the 5+ API (https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyles)


### 使用WKWebview的影响 
### Impact of using WKWebview
**使用WKWebview替换UIWebview将会影响以下功能：**
**Replacing UIWebview with WKWebview will affect the following functionality:**
- 更严格的跨域访问限制
- Stricter cross-domain access restrictions
WKWebview认为本地html通过js访问网络及本地文件都算跨域访问（这种情况UIWebview不是跨域），跨域时访问网络资源使用5+ API（plus.net）来替换xmlhttp等传统ajax写法；ajax也不能访问本地文件，需使用5+ API（plus.io）读取本地文件，后者有个单独文章可参考：[https://ask.dcloud.net.cn/article/36858](https://ask.dcloud.net.cn/article/36858)。
WKWebview believes that local html access to the network and local files through js is considered cross-domain access (in this case UIWebview is not cross-domain), when accessing network resources across domains, use 5+ API (plus.net) to replace traditional ajax writing methods such as xmlhttp; ajax You cannot access local files either. You need to use 5+ API (plus.io) to read local files. The latter has a separate article for reference: [https://ask.dcloud.net.cn/article/36858](https: //ask.dcloud.net.cn/article/36858).
使用exif.js等三方库可能涉及跨目录的本地图片下载请求，图像方向获取和旋转Plus有专门的API，无需使用js库做。
The use of third-party libraries such as exif.js may involve cross-directory local image download requests. Plus, there are special APIs for image orientation acquisition and rotation, and there is no need to use js libraries.
- 由于WKWebview不支持跨域访问，标准的xhr或jq的ajax，都无法跨域。mui框架中网络请求判断为跨域访问会自动调用5+ API（plus.net），如果在mui.plusReady触发前调用，因为5+ API没有准备好会报“Script error.filename:lineno:0”错误，这时必须保证mui的网络请求在mui.plusReady后调用，或者直接改用plus.net写法。
- Since WKWebview does not support cross-domain access, standard xhr or jq ajax cannot cross-domain. In the mui framework, if the network request is judged as cross-domain access, the 5+ API (plus.net) will be automatically called. If it is called before mui.plusReady is triggered, it will report "Script error.filename:lineno:0" because the 5+ API is not ready. Error, at this time, it must be ensured that the network request of mui is called after mui.plusReady, or the plus.net writing method is directly used.
- WKWebview下canvas也有跨域问题，比如canvas.toDataURL。
- The canvas under WKWebview also has cross-domain issues, such as canvas.toDataURL.
如果canvas使用网络图像遇到跨域问题，需要服务端设置图像的响应头：Access-Control-Allow-Origin
If canvas encounters cross-origin problems using network images, the server needs to set the response header of the image: Access-Control-Allow-Origin
如果canvas使用本地图像遇到跨域问题，可以使用plus接口将图像转换为base64再使用，相关插件：https://ext.dcloud.net.cn/plugin?id=123
If canvas uses local images and encounters cross-domain problems, you can use the plus interface to convert the images to base64 and use them. Related plugins: https://ext.dcloud.net.cn/plugin?id=123
- iOS手机内存不足时，如果是UIWebview的应用，系统会整体回收这个App，现象是在重新打开已打开过的App时App整体重启。而WKWebview则是单个页面回收，这带来的坏处就是内存不足时，会单个页面白屏。详见[https://ask.dcloud.net.cn/article/35913](https://ask.dcloud.net.cn/article/35913)。uni-app不涉及此问题，如果是5+App，方式1是在manifest切回UIWebview，暂时UIWebview还可以上架，只是会收到警告。方式2时监听白屏事件，自行恢复页面：[https://ask.dcloud.net.cn/article/36540](https://ask.dcloud.net.cn/article/36540)
- When the memory of the iOS phone is insufficient, if it is an application of UIWebview, the system will recycle the app as a whole. The WKWebview is a single page recycling, the disadvantage of this is that when the memory is insufficient, a single page white screen will be displayed. For details, see [https://ask.dcloud.net.cn/article/35913](https://ask.dcloud.net.cn/article/35913). uni-app does not involve this problem. If it is 5+App, method 1 is to switch back to UIWebview in the manifest. For the time being, UIWebview can still be put on the shelves, but you will receive a warning. In mode 2, monitor the white screen event and restore the page by itself: [https://ask.dcloud.net.cn/article/36540](https://ask.dcloud.net.cn/article/36540)
- iOS8、9上的WKWebview不支持websql，iOS10恢复支持
- WKWebview on iOS8, 9 does not support websql, iOS10 restores support
- 不支持plus.navigator.setCookie
- does not support plus.navigator.setCookie
- 不支持webview的overrideresource方法
- The overrideresource method of webview is not supported
- wk第一次渲染速度略慢于uiwebview；
- The first rendering speed of wk is slightly slower than uiwebview;
- 由于资源拦截的API overrideresource 无法再使用，5+ APP（含wap2app）项目中，云打包时的js原生混淆功能会失效。如果要使用js原生混淆必须使用UIWebview。uni-app有单独的原生js加密方案，因为uni-app的js不运行在webview里，而是在独立的jscore里，所以不受影响。
- Because the API overrideresource for resource interception can no longer be used, in 5+ APP (including wap2app) projects, the js native obfuscation function during cloud packaging will be invalid. If you want to use js native obfuscation, you must use UIWebview. uni-app has a separate native js encryption scheme, because uni-app's js does not run in webview, but in independent jscore, so it is not affected.

但WKWebview的好处是：节省内存；滚动时懒加载的图片也可以实时渲染，而uiwebview在滚动停止后懒加载的图片才能显示。
But the advantages of WKWebview are: save memory; lazy-loaded pictures can also be rendered in real time when scrolling, while uiwebview can only display lazy-loaded pictures after scrolling stops.

如果同时在一个app里使用ui和wk两种webview，注意2种webview之间的cookie、localstorage、session不共享，但plus.storage是共享的。
If you use both ui and wk webviews in an app at the same time, note that cookies, localstorage, and sessions between the two webviews are not shared, but plus.storage is shared.


### uni-app中Webview的使用注意
### Notes on the use of Webview in uni-app
uni-app的js运行在独立的jscore中，而不是Webview中，不存在跨域问题。
The js of uni-app runs in independent jscore, not in Webview, so there is no cross-domain problem.
uni-app的渲染层，在iOS下是强制wkwebview。如果你编写了renderjs代码，在渲染层执行js，则同样会遇到跨域问题。此时尽量把与跨域相关的操作放到普通的js逻辑层操作。
The rendering layer of uni-app is mandatory wkwebview under iOS. If you write renderjs code and execute js in the rendering layer, you will also encounter cross-domain problems. At this time, try to put the operations related to cross-domain into the ordinary js logic layer operation.
除了渲染层，还有一个web-view组件的问题要注意：
In addition to the rendering layer, there is another issue with web-view components to be aware of:

- uni-app的vue页面的web-view组件，从HBuilderX 2.2.5+起是WKWebview，之前版本默认是UIWebview
- The web-view component of the vue page of uni-app is WKWebview since HBuilderX 2.2.5+, and the default is UIWebview in previous versions
- uni-app的非自定义组件模式的js逻辑层，在HBuilderX 2.2.5之前是UIWebview。升级到HBuilderX2.3+后可能导致网络跨域问题，`fail{"statusCode":0,"errMsg":"request:fail abort"}`。不过非自定义组件已于2019年11月1日起停止支持。
- js logic layer of non-custom component mode of uni-app, UIWebview before HBuilderX 2.2.5. After upgrading to HBuilderX2.3+, it may cause network cross-domain problems, `fail{"statusCode":0,"errMsg":"request:fail abort"}`. However, non-custom components have been discontinued from November 1, 2019.

如果需要调整uni-app下web-view组件的渲染内核设置，将manifest.json源码视图的app-plus -> kernel -> ios 的值设为 UIWebview。
If you need to adjust the rendering kernel settings of the web-view component under uni-app, set the value of app-plus -> kernel -> ios in the manifest.json source view to UIWebview.

#### uni-app的nvue页面问题
#### uni-app's nvue page problem
nvue页面不使用webview渲染，但其中的web-view组件说明如下。
The nvue page is not rendered using webview, but the web-view component in it is described below.
- nvue的weex 组件模式
- nvue's weex component mode
weex模式下的web-view组件是weex自己实现的，它目前仍然使用UIWebview。官方会追踪weex的升级。
The web-view component in weex mode is implemented by weex itself, and it still uses UIWebview. The official will track the upgrade of weex.
- nvue的uni-app组件模式
- nvue's uni-app component mode
web-view组件使用WKWebview。不可修改为uiWebview。
The web-view component uses WKWebview. Cannot be modified to uiWebview.


### 三方SDK中UIWebview的使用
### The use of UIWebview in the third-party SDK
目前如下SDK中仍然使用了UIWebview，不管是5+App还是uni-app。
At present, UIWebview is still used in the following SDK, whether it is 5+App or uni-app.
- DCloud开屏广告
- DCloud opening advertisement
HBuilderX 2.2.5版之前，点击广告打开的内置网页仍然使用UIWebview加载
Before HBuilderX version 2.2.5, the built-in web page opened by clicking on the ad was still loaded using UIWebview
HBuilderX 2.2.5+版本已调整改为WKWebview。
HBuilderX 2.2.5+ version has been adjusted to WKWebview.
- 支付宝
- Alipay
HBuilderX 2.6.10版本之前，支付宝SDK为15.5.7版本，包含了UIWebview
Before HBuilderX version 2.6.10, Alipay SDK was version 15.5.7, including UIWebview
HBuilderX 2.6.10+版本已更新支付宝SDK为15.7.4，没有使用UIWebview
HBuilderX 2.6.10+ version has updated Alipay SDK to 15.7.4, without using UIWebview
- 微信登录、分享、支付
- WeChat login, sharing, payment
HBuilderX 2.6.6+版本已更新微信SDK为1.8.6.2版本，没有使用UIWebview。
HBuilderX 2.6.6+ version has updated WeChat SDK to version 1.8.6.2, without using UIWebview.
注意微信登录支付的SDK升级后，会强制要求通用链接。另见文档：[https://ask.dcloud.net.cn/article/36445](https://ask.dcloud.net.cn/article/36445)
Note that after the SDK for WeChat login payment is upgraded, a universal link will be mandatory. See also the documentation: [https://ask.dcloud.net.cn/article/36445](https://ask.dcloud.net.cn/article/36445)
- 微博登录、分享
- Weibo login and share
HBuilderX 2.6.10版本之前，微博SDK为3.2.5版本，包含了UIWebview
Before HBuilderX version 2.6.10, the Weibo SDK was version 3.2.5, including UIWebview
HBuilderX 2.6.10+版本已更新微博SDK为3.2.7版本，没有使用UIWebview
HBuilderX 2.6.10+ version has updated Weibo SDK to version 3.2.7, without using UIWebview
- QQ登录、分享
- QQ login and share
HBuilderX 2.3.4+版本已更新QQSDK为3.3.6，没有使用UIWebview。
HBuilderX 2.3.4+ version has updated QQSDK to 3.3.6, without using UIWebview.
- 小米登录
- Xiaomi login
小米官方SDK中使用了UIWebview，如果提交appstore建议不要使用小米登录
Xiaomi official SDK uses UIWebview, if you submit appstore, it is recommended not to use Xiaomi to log in

**5+App开发者建议直接升级为uni-app，一劳永逸，不会有跨域、白屏和无法加密等各种问题。**
**5+App developers recommend to directly upgrade to uni-app, once and for all, there will be no problems such as cross-domain, white screen and inability to encrypt. **


### 注意事项
### Precautions
如果没有配置使用“iOS UIWebview”模块，提交App Store，仍然被提示含有UIWebview，那么请检查你的app是否使用了其他原生插件。
If you are not configured to use the "iOS UIWebview" module and submit to the App Store, you are still prompted to include UIWebview, then please check whether your app uses other native plugins.
一般或者是配置错误，或者是三方原生插件造成。、
Generally, it is either a configuration error or a third-party native plug-in. ,
