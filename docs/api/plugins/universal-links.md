**一键生成iOS通用链接**
**One-click to generate iOS Universal Links**

### 背景介绍：
### Background introduction:

> Universal Link是苹果在WWDC 2015上提出的iOS 9的新特性之一。此特性类似于深层链接，并能够方便地通过打开一个Https链接来直接启动您的客户端应用(手机有安装App)。对比以往所使用的URLSheme, 这种新特性在实现web-app的无缝链接时,能够提供极佳的用户体验。
> Universal Link is one of the new features of iOS 9 proposed by Apple at WWDC 2015. This feature is similar to deep linking, and can easily launch your client application (the mobile phone has an installed app) by opening an Https link. Compared with the URLSheme used in the past, this new feature can provide an excellent user experience when implementing seamless web-app links.
> 使用前请阅读[苹果官方文档](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1)。
> Please read [Apple official documentation](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1 ).

> 由于苹果iOS 13系统版本安全升级，微信SDK1.8.6版本要求支持Universal Links方式跳转，以便进行合法性校验，提升安全性。更多详情请参考[微信官方说明](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)
> Due to the security upgrade of Apple's iOS 13 system version, the WeChat SDK 1.8.6 version is required to support the Universal Links method of jumping, so as to conduct legality verification and improve security. For more details, please refer to [WeChat Official Instructions](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)

大白话：以前你的APP要打开其他APP是[通过URLScheme](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.launchApplication)实现，后来苹果提出用Https链接来启动，手机上对应的app（已安装），更方便与web-app的无缝对接。微信响应了这个方案。所以大家开发的APP无论是微信登录、微信支付，还是微信分享等一切会跳转到微信，再跳回来的场景，需要提供这个链接。要不然你的应用打开了微信，微信就打不开你的应用。
In the vernacular: In the past, your APP had to open other APPs [through URLScheme](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.launchApplication). Later, Apple proposed to use Https links to Start, the corresponding app (already installed) on the mobile phone is more convenient to seamlessly connect with the web-app. WeChat responded to this plan. Therefore, the APP developed by everyone, whether it is WeChat login, WeChat payment, or WeChat sharing, etc., will jump to WeChat and then jump back to the scene, you need to provide this link. Otherwise, if your app opens WeChat, WeChat will not be able to open your app.

如果不配置通用链接，使用新版本HX提交云端打包会失败，提示以下错误信息：
If the universal link is not configured, the cloud package submission using the new version of HX will fail, and the following error message will be displayed:

``` javascript
Error code = -5000
Error message: 
Error: not set parameter 'UniversalLinks' @'oauth-weixin'
```

传统方式配置通用链接需要:
Configuring Universal Links the traditional way requires:

1. 在苹果开发者中心：开启Associated Domains服务
1. In the Apple Developer Center: Enable the Associated Domains service
2. 获取相关参数，手动创建apple-app-site-association文件
2. Obtain the relevant parameters and manually create the apple-app-site-association file
3. 部署apple-app-site-association文件到自己的云服务器，配置SSL证书解析域名
3. Deploy the apple-app-site-association file to your own cloud server and configure the SSL certificate to resolve the domain name
4. 然后手动在manifest.json中配置Associated Domains（域名）
4. Then manually configure Associated Domains in manifest.json
5. 粘贴通用链接到对应权限模块
5. Paste the universal link to the corresponding permission module
6. 在微信开放平台配置通用链接
6. Configure Universal Links on WeChat Open Platform

其中需要注意的细节较多，且调试起来困难繁琐，困扰了大量开发者。
There are many details that need to be paid attention to, and debugging is difficult and cumbersome, which has troubled a large number of developers.

现在通过HBuilderX（3.1.9版起）云打包，支持自动生成apple-app-site-association文件，并自动托管到：自带cdn、ssl等服务的“免费”的云服务空间[uniCloud的前端网页托管](https://uniapp.dcloud.io/uniCloud/hosting)，自动完成manifest.json中的相关配置。用自动化技术替代了，如上所示传统方式令人苦恼的（2-5）4个步骤；只需如下三步直接搞定通用链接。
Now through HBuilderX (version 3.1.9 onwards) cloud packaging, supports automatic generation of apple-app-site-association files, and automatically hosted to: "free" cloud service space with services such as cdn, ssl [uniCloud front-end webpage] Hosting](https://uniapp.dcloud.io/uniCloud/hosting), which automatically completes the relevant configuration in manifest.json. Replaced with automation technology, as shown above the traditional way of frustrating (2-5) 4 steps; just three steps below to get the universal link directly.


### 第一步：开启Associated Domains服务
### Step 1: Start the Associated Domains service

登录[苹果开发者网站](https://developer.apple.com/)，在“Certificates, Identifiers & Profiles”页面选择“Identifiers”中选择对应的App ID，确保开启Associated Domains服务
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/2eae9f97-2c4a-4dc8-97e8-e665b0c660e1.png)

**开启Associated Domains服务后需要重新生成profile文件，提交云端打包时使用**
**After enabling the Associated Domains service, you need to regenerate the profile file and use it when submitting the cloud package**

### 第二步骤 自动生成通用连接(Universal Links)
### Step 2 Automatically generate Universal Links
HBuilderX (3.2.0 版本起) 新增QQ互联和新浪微博开放平台的通用链接的设置。以微信模块为例,QQ与微博与之类似。
HBuilderX (starting from version 3.2.0) Added the settings of the universal link of QQ Internet and Sina Weibo open platform. Taking the WeChat module as an example, QQ and Weibo are similar.

打开项目的manifest.json文件，在“(App) SDK配置”项中的微信登录（微信分享、微信支付）下的“iOS平台通用链接（Universal Links）”中，
Open the manifest.json file of the project, and in the "(App) SDK Configuration" item under WeChat login (WeChat sharing, WeChat payment), under "iOS Platform Universal Links (Universal Links)",
点击如图所示【自动生成】
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/ea2b1e04-a858-4626-b3fa-bd4ddddd0c3b.jpg)

* 注意您必须先开通"uniCloud(阿里云版)云服务空间和开通前端网页托管"[点此查看开通教程](https://ask.dcloud.net.cn/article/38951),按提示完成操作即可。
* Note that you must first activate "uniCloud (Alibaba Cloud Edition) cloud service space and activate front-end web hosting" [Click here to view the activation tutorial](https://ask.dcloud.net.cn/article/38951), follow the prompts to complete Just do it.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/53e0141e-d2d4-496a-b0f2-2359005c0c4e.jpg)

* 注意：通用链接默认域名仅供测试使用，访问频次限制60次/分钟，请勿在正式发行的项目中使用。正式项目，务必绑定自己的域名（顶级域名，二级域名均可）
* Note: The default domain name of the universal link is only for testing, and the access frequency is limited to 60 times/min. Please do not use it in officially released projects. For official projects, be sure to bind your own domain name (top-level domain name, second-level domain name is acceptable)
* 如何绑定自己的域名详情：[https://uniapp.dcloud.io/uniCloud/hosting?id=domain](https://uniapp.dcloud.io/uniCloud/hosting?id=domain)
* How to bind your own domain name: [https://uniapp.dcloud.io/uniCloud/hosting?id=domain](https://uniapp.dcloud.io/uniCloud/hosting?id=domain)

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1e081fdd-27b2-4c0b-8985-7d59756ed313.jpg)

### 第三步：在第三方开放平台配置通用链接
### Step 3: Configure universal links on third-party open platforms

#### 微信
#### WeChat

打开微信[开放平台](https://open.weixin.qq.com/)，在“管理中心”页面的“移动应用”下找到已经申请的应用（没有申请应用请点击“创建移动应用”新建应用），点击“查看”打开应用详情页面。
Open WeChat [Open Platform](https://open.weixin.qq.com/), find the app you have applied for under "Mobile Apps" on the "Management Center" page (if you have not applied for an app, please click "Create Mobile App" to create a new one application), click View to open the application details page.
在“开发信息”栏后点击修改，在“iOS应用”下的“Universal Links”项中配置应用的通用链接，如下图所示：
![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20191008/e933f7ef8ff078bf05e28a24efee74bd.png)

#### QQ

打开QQ[开放平台](https://connect.qq.com/index.html)，在“管理中心”页面的“移动应用”下找到已经申请的应用（没有申请应用请点击“创建移动应用”新建应用），点击“查看”打开应用详情页面。
Open QQ [Open Platform](https://connect.qq.com/index.html), find the app you have applied for under "Mobile Apps" on the "Management Center" page (if you have not applied for an app, please click "Create Mobile App" Create a new application), click View to open the application details page.
在“开发信息”栏后点击修改，在“iOS应用”下的“Universal Links”项中配置应用的通用链接，如下图所示：
![](https://img-cdn-aliyun.dcloud.net.cn/client/ulink/QQ.jpeg)
* 注意：QQ开放平台在填写时 只需要填写到host,后边的path QQ会自动生成,比如 HBuilder中一键生成 ```https://static-fa42aa5f-xxxxxxx-xxxxxxxx.bspapp.com/qq_conn/11111233333/``` 只需要填写 ```https://static-fa42aa5f-xxxxxxx-xxxxxxxx.bspapp.com/```,具体请查看 [QQ 填写及校验universallinks](https://wiki.connect.qq.com/%E5%A1%AB%E5%86%99%E5%8F%8A%E6%A0%A1%E9%AA%8Cuniversallinks)
* Note: QQ open platform only needs to fill in the host when filling in, and the path QQ will be automatically generated, such as one-click generation in HBuilder https://static-fa42aa5f-xxxxxxx-xxxxxxxx.bspapp.com/qq_conn/ 11111233333/``` Only need to fill in ```https://static-fa42aa5f-xxxxxxx-xxxxxxxx.bspapp.com/```, please refer to [QQ fill and verify universallinks](https://wiki.connect .qq.com/%E5%A1%AB%E5%86%99%E5%8F%8A%E6%A0%A1%E9%AA%8Cuniversallinks)

#### 微博
#### Weibo

打开微博[开放平台](https://open.weibo.com/)，在“我的应用”下找到已经申请的应用，点击“查看”打开应用详情页面。
Open Weibo [Open Platform] (https://open.weibo.com/), find the app you have applied for under "My Apps", and click "View" to open the app details page.
在“应用信息”栏后点击修改，在“iOS应用”下的“Universal Links”项中配置应用的通用链接，如下图所示：![](https://img-cdn-aliyun.dcloud.net.cn/client/ulink/weibo.jpeg)
Click Modify after the "Application Information" column, and configure the universal link of the application in the "Universal Links" item under "iOS Application", as shown in the following figure: ![](https://img-cdn-aliyun.dcloud. net.cn/client/ulink/weibo.jpeg)

至此，就已经完成了通用链接的配置全过程，云打包后生效。
So far, the whole process of configuring the universal link has been completed, and it will take effect after the cloud is packaged.

### 其他相关
### Other related

#### 客户端处理通用链接。
#### Client handles Universal Links.

可通过5+ API的plus.runtime.launcher判断应用启动来源，如果其值为"uniLink"则表示通过通用链接启动应。这时可通过5+ API的plus.runtime.arguments获取启动参数，通用链接启动的情况将返回完整的通用链接地址。
The application startup source can be determined through the plus.runtime.launcher of the 5+ API. If its value is "uniLink", it means that the application is launched through the universal link. At this time, the startup parameters can be obtained through plus.runtime.arguments of the 5+ API, and the full universal link address will be returned when the universal link is started.
例：HBuilderX中自带的默认真机运行基座HBuilderX注册的通用链接:[https://demo.dcloud.net.cn/ulink/](https://demo.dcloud.net.cn/ulink/)
Example: The default real machine running base that comes with HBuilderX is registered with the universal link of HBuilderX: [https://demo.dcloud.net.cn/ulink/](https://demo.dcloud.net.cn/ulink/ )

#### 通用链接生成原理：
#### Universal link generation principle:

1. 选择云空间获取云空间的默认/自定义域名
1. Select Cloud Space to get the default/custom domain name of Cloud Space
2. 按提前制定的规范（uni-universallinks/DCloud appid）拼接URL
2. Concatenate URLs according to pre-made specifications (uni-universallinks/DCloud appid)
3. 根据现有参数自动生成通用链接相关参数到manifest.json
3. Automatically generate universal link related parameters to manifest.json based on existing parameters
4. 发起云打包时读取证书的profile文件生成apple-app-site-association并部署到前面选定的云空间根目录的.well-known目录下(请勿删除该文件，否则通用链接将失效)
4. When initiating cloud packaging, read the profile file of the certificate to generate apple-app-site-association and deploy it to the .well-known directory of the cloud space root directory selected earlier (do not delete this file, otherwise the universal link will become invalid )

##### 注意事项：
##### Precautions:

* 通用链接指向的路径可以为空，他只是一种信息传递方式。可以简单地理解为：通过解析URL的“/”后的参数到apple-app-site-association中找到指定的包名并唤醒对应的APP
* The path pointed to by the universal link can be empty, it is just a way of information transmission. It can be simply understood as: find the specified package name in apple-app-site-association by parsing the parameters after "/" of the URL and wake up the corresponding APP
* 通用链接内容保存在manifest.json中"云打包后生效"，被手机读取的时机是应用被安装的时候。如果你的通用链接内容有变化，你需要重新提交云打包，并重新安装一次应用才能生效
* The content of the universal link is saved in manifest.json "to take effect after cloud packaging", and the time when it is read by the mobile phone is when the application is installed. If your universal link content has changed, you need to resubmit the cloud package and reinstall the application to take effect
* 通用链接最终托管在服务端，如有变动注意缓存的清理，例如尝试重启手机等操作
* The universal link is finally hosted on the server, if there is any change, please pay attention to the cleaning of the cache, such as trying to restart the phone, etc.

> 如果你是本地离线打包或者由于某种原因你需要用传统的方式：私有化部署服务器来托管apple-app-site-association文件创建通用链接。你仍然可以通过手动配置manifest.json实现。详情：[https://ask.dcloud.net.cn/article/36393#unilink](https://ask.dcloud.net.cn/article/36393#unilink)
> If you are local offline packaging or for some reason you need to use the traditional way: private deployment server to host apple-app-site-association file to create universal links. You can still do this by manually configuring manifest.json. Details: [https://ask.dcloud.net.cn/article/36393#unilink](https://ask.dcloud.net.cn/article/36393#unilink)

#### 常见问题
#### common problem

1.为什么我打开通用链接提示：`The requested file was not found on this server.`
1. Why do I open the universal link prompt: `The requested file was not found on this server.`
1. Why do I open the universal link prompt: `The requested file was not found on this server.`
1. Why do I open the universal link prompt: `The requested file was not found on this server.`
1. Why do I open the universal link prompt: `The requested file was not found on this server.`

这是正常现象。通用链接并不要求是一个有效的路径，换句话说这个链接指向的目录允许为空。原理是访问这个链接时，iphone检测到当前域名为通用链接对应的域名，就读取域名服务器下的apple-app-site-association，然后根据域名后面的路径名称，验证并解析出要打开的app包名并唤醒对应的app。
this is normal phenomenon. Universal links are not required to be a valid path, in other words the directory pointed to by the link is allowed to be empty. The principle is that when accessing this link, the iphone detects that the current domain name is the domain name corresponding to the universal link, reads the apple-app-site-association under the domain name server, and then verifies and resolves the app to be opened according to the path name behind the domain name. package name and wake up the corresponding app.

2.如何验证通用链接已经生效，有什么表现或者测试方案
2. How to verify that the universal link has taken effect, what is the performance or test plan
2. How to verify that the universal link has taken effect, what is the performance or test plan
2. How to verify that the universal link has taken effect, what is the performance or test plan
2. How to verify that the universal link has taken effect, what is the performance or test plan

你可以将通用链接输入到iphone自带Safari浏览器中，下拉即可看到通用链接对应到应用名称和一个打开按钮，点击按钮即可直接在浏览器打开对应的APP。详情：[点此查看演示视频](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/4e920b86-0f67-45ac-81f6-6b97f87ff0ae.mp4)
You can enter the universal link into the Safari browser that comes with the iPhone. Pull down to see that the universal link corresponds to the application name and an open button. Click the button to open the corresponding APP directly in the browser. Details: [Click here to view the demo video](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/4e920b86-0f67-45ac-81f6-6b97f87ff0ae.mp4)
