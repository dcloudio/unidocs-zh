**一键生成iOS通用链接**
**One-click generation of iOS universal link**

### 背景介绍：
### Background introduction:

> Universal Link是苹果在WWDC 2015上提出的iOS 9的新特性之一。此特性类似于深层链接，并能够方便地通过打开一个Https链接来直接启动您的客户端应用(手机有安装App)。对比以往所使用的URLSheme, 这种新特性在实现web-app的无缝链接时,能够提供极佳的用户体验。
> Universal Link is one of the new features of iOS 9 proposed by Apple on WWDC 2015. This feature is similar to a deep link, and it is convenient to directly launch your client application (the phone has the App installed) by opening an HTTPS link. Compared with the URLSheme used in the past, this new feature can provide an excellent user experience when realizing the seamless link of web-app.
> 使用前请阅读[苹果官方文档](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1)。
> Please read [Apple Official Documentation](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1 before use ).

> 由于苹果iOS 13系统版本安全升级，微信SDK1.8.6版本要求支持Universal Links方式跳转，以便进行合法性校验，提升安全性。更多详情请参考[微信官方说明](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)
> Due to the security upgrade of Apple’s iOS 13 system version, WeChat SDK version 1.8.6 requires the support of Universal Links jumps for legality verification and improved security. For more details, please refer to [WeChat official instructions](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)

大白话：以前你的APP要打开其他APP是[通过URLScheme](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.launchApplication)实现，后来苹果提出用Https链接来启动，手机上对应的app（已安装），更方便与web-app的无缝对接。微信响应了这个方案。所以大家开发的APP无论是微信登录、微信支付，还是微信分享等一切会跳转到微信，再跳回来的场景，需要提供这个链接。要不然你的应用打开了微信，微信就打不开你的应用。
Vernacular: In the past, your APP opened other APPs [through URLScheme](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.launchApplication), and later Apple proposed to use Https links to Start, the corresponding app (installed) on the mobile phone is more convenient for seamless connection with web-app. WeChat responded to this proposal. Therefore, whether the APP you develop is WeChat login, WeChat payment, or WeChat sharing, etc., everything will jump to WeChat and then jump back, you need to provide this link. Otherwise, if your application opens WeChat, WeChat will not be able to open your application.

如果不配置通用链接，使用新版本HX提交云端打包会失败，提示以下错误信息：
If you do not configure a universal link, using the new version of HX to submit cloud packaging will fail, prompting the following error message:

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
2. Obtain relevant parameters and manually create the apple-app-site-association file
3. 部署apple-app-site-association文件到自己的云服务器，配置SSL证书解析域名
3. Deploy the apple-app-site-association file to your own cloud server, configure the SSL certificate to resolve the domain name
4. 然后手动在manifest.json中配置Associated Domains（域名）
4. Then manually configure Associated Domains (domain name) in manifest.json
5. 粘贴通用链接到对应权限模块
5. Paste the universal link to the corresponding permission module
6. 在微信开放平台配置通用链接
6. Configure a universal link on the WeChat open platform

其中需要注意的细节较多，且调试起来困难繁琐，困扰了大量开发者。
There are many details that need to be paid attention to, and it is difficult and cumbersome to debug, which has troubled a large number of developers.

现在通过HBuilderX（3.1.9版起）云打包，支持自动生成apple-app-site-association文件，并自动托管到：自带cdn、ssl等服务的“免费”的云服务空间[uniCloud的前端网页托管](https://uniapp.dcloud.io/uniCloud/hosting)，自动完成manifest.json中的相关配置。用自动化技术替代了，如上所示传统方式令人苦恼的（2-5）4个步骤；只需如下三步直接搞定通用链接。
Now through HBuilderX (from version 3.1.9) cloud packaging, it supports automatic generation of apple-app-site-association files, and automatically hosts them to: "free" cloud service space with CDN, ssl and other services [uniCloud's front-end webpage Hosting](https://uniapp.dcloud.io/uniCloud/hosting), automatically complete the relevant configuration in manifest.json. Replaced by automation technology, the 4 steps (2-5) of the traditional way as shown above are distressing; only the following three steps are needed to directly get the universal link.


### 第一步：开启Associated Domains服务
### Step 1: Open the Associated Domains service

登录[苹果开发者网站](https://developer.apple.com/)，在“Certificates, Identifiers & Profiles”页面选择“Identifiers”中选择对应的App ID，确保开启Associated Domains服务
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/ulink1.png)

**开启Associated Domains服务后需要重新生成profile文件，提交云端打包时使用**
**After enabling the Associated Domains service, you need to regenerate the profile file, which is used when submitting to the cloud for packaging**

### 第二步骤 自动生成通用连接(Universal Links)
### The second step is to automatically generate Universal Links (Universal Links)
HBuilderX (3.2.0 版本起) 新增QQ互联和新浪微博开放平台的通用链接的设置。以微信模块为例,QQ与微博与之类似。
HBuilderX (starting from version 3.2.0) has added the setting of general link of QQ Internet and Sina Weibo open platform. Taking the WeChat module as an example, QQ and Weibo are similar.

打开项目的manifest.json文件，在“(App) SDK配置”项中的微信登录（微信分享、微信支付）下的“iOS平台通用链接（Universal Links）”中，
Open the manifest.json file of the project, in the "iOS Platform Universal Links (Universal Links)" under the WeChat Login (WeChat Sharing, WeChat Payment) in the "(App) SDK Configuration" item,
点击如图所示【自动生成】
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E7%94%9F%E6%88%90%E9%80%9A%E7%94%A8%E9%93%BE%E6%8E%A5%E6%95%99%E7%A8%8B1.jpg)

* 注意您必须先开通"uniCloud(阿里云版)云服务空间和开通前端网页托管"[点此查看开通教程](https://ask.dcloud.net.cn/article/38951),按提示完成操作即可。
* Note that you must first open "uniCloud (Aliyun version) cloud service space and open front-end web page hosting" [click here to view the opening tutorial](https://ask.dcloud.net.cn/article/38951), follow the prompts to complete Just operate.

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E7%94%9F%E6%88%90%E9%80%9A%E7%94%A8%E9%93%BE%E6%8E%A5%E6%95%99%E7%A8%8B2.jpg)

* 注意：通用链接默认域名仅供测试使用，访问频次限制60次/分钟，请勿在正式发行的项目中使用。正式项目，务必绑定自己的域名（顶级域名，二级域名均可）
* Note: The default domain name of the universal link is only for testing use, and the access frequency is limited to 60 times per minute. Please do not use it in officially released projects. For formal projects, be sure to bind your own domain name (top-level domain name and second-level domain name are acceptable)
* 如何绑定自己的域名详情：[https://uniapp.dcloud.io/uniCloud/hosting?id=domain](https://uniapp.dcloud.io/uniCloud/hosting?id=domain)
* How to bind your own domain name details: [https://uniapp.dcloud.io/uniCloud/hosting?id=domain](https://uniapp.dcloud.io/uniCloud/hosting?id=domain)

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E9%85%8D%E7%BD%AE%E9%80%9A%E7%94%A8%E9%93%BE%E6%8E%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D.jpg)

### 第三步：在第三方开放平台配置通用链接
### Step 3: Configure universal links on third-party open platforms

#### 微信
#### WeChat

打开微信[开放平台](https://open.weixin.qq.com/)，在“管理中心”页面的“移动应用”下找到已经申请的应用（没有申请应用请点击“创建移动应用”新建应用），点击“查看”打开应用详情页面。
Open WeChat [Open Platform](https://open.weixin.qq.com/), and find the application that has been applied under "Mobile Application" on the "Management Center" page (if you have not applied for an application, please click "Create Mobile Application" to create a new one) application), click "View" to open the application details page.
在“开发信息”栏后点击修改，在“iOS应用”下的“Universal Links”项中配置应用的通用链接，如下图所示：
![](https://ask.dcloud.net.cn/uploads/article/20191008/e933f7ef8ff078bf05e28a24efee74bd.png)

#### QQ

打开QQ[开放平台](https://connect.qq.com/index.html)，在“管理中心”页面的“移动应用”下找到已经申请的应用（没有申请应用请点击“创建移动应用”新建应用），点击“查看”打开应用详情页面。
Open QQ[Open Platform](https://connect.qq.com/index.html), find the application that has been applied under "Mobile Application" on the "Management Center" page (if you have not applied for an application, please click "Create Mobile Application" Create a new application), click "View" to open the application details page.
在“开发信息”栏后点击修改，在“iOS应用”下的“Universal Links”项中配置应用的通用链接，如下图所示：
![](https://img-cdn-aliyun.dcloud.net.cn/client/ulink/QQ.jpeg)
* 注意：QQ开放平台在填写时 只需要填写到host,后边的path QQ会自动生成,比如 HBuilder中一键生成 ```https://static-fa42aa5f-xxxxxxx-xxxxxxxx.bspapp.com/qq_conn/11111233333/``` 只需要填写 ```https://static-fa42aa5f-xxxxxxx-xxxxxxxx.bspapp.com/```,具体请查看 [QQ 填写及校验universallinks](https://wiki.connect.qq.com/%E5%A1%AB%E5%86%99%E5%8F%8A%E6%A0%A1%E9%AA%8Cuniversallinks)
* Note: When filling in the QQ open platform, you only need to fill in the host, and the subsequent path QQ will be automatically generated, such as one-click generation in HBuilder```https://static-fa42aa5f-xxxxxxx-xxxxxxxx.bspapp.com/qq_conn/ 11111233333/``` Only need to fill in ```https://static-fa42aa5f-xxxxxxx-xxxxxxxx.bspapp.com/```, for details, please check [QQ filling and verification universallinks](https://wiki.connect .qq.com/%E5%A1%AB%E5%86%99%E5%8F%8A%E6%A0%A1%E9%AA%8Cuniversallinks)

#### 微博
#### Weibo

打开微博[开放平台](https://open.weibo.com/)，在“我的应用”下找到已经申请的应用，点击“查看”打开应用详情页面。
Open Weibo [Open Platform](https://open.weibo.com/), find the applied application under "My Applications", and click "View" to open the application details page.
在“应用信息”栏后点击修改，在“iOS应用”下的“Universal Links”项中配置应用的通用链接，如下图所示：![](https://img-cdn-aliyun.dcloud.net.cn/client/ulink/weibo.jpeg)
Click Modify after the "Application Information" column, and configure the universal link of the application in the "Universal Links" item under "iOS Application", as shown in the following figure: ![](https://img-cdn-aliyun.dcloud. net.cn/client/ulink/weibo.jpeg)

至此，就已经完成了通用链接的配置全过程，云打包后生效。
So far, the whole process of configuring the universal link has been completed, and it will take effect after cloud packaging.

### 其他相关
### Other related

#### 云资源消耗说明
#### Cloud Resource Consumption Description

托管通用链接所资源消耗的云服务器资源量非常小，文件小于0.5kb，仅你的iOS版App在：安装、登录、分享、支付时才会被联网请求（且设备会缓存通用链接的文件内容，缓存有效期内不会再次联网请求）。而阿里云正式版-开发者版（免费版）的前端网页托管，免费额度为：1GB/月；普通项目的服务空间，如果仅托管“通用链接”使用免费版也够用。
The amount of cloud server resources consumed by hosting universal links is very small, and the file is less than 0.5kb. Only your iOS app will be requested by the Internet when installing, logging in, sharing, and paying (and the device will cache the file content of the universal link , there will be no further network requests within the validity period of the cache). The free quota for the front-end web page hosting of Alibaba Cloud Official Edition-Developer Edition (free edition) is: 1GB/month; the service space for ordinary projects, if only the "universal link" is hosted, the free edition is also sufficient.

#### 通用链接迁移指南
#### Universal Links Migration Guide

阿里云公测版即将下线，需要将通用链接文件迁移到新的正式版服务空间的用户参考以下步骤：
The public beta version of Alibaba Cloud is about to go offline. Users who need to migrate the universal link file to the new official version service space can refer to the following steps:

> uniCloud阿里云正式版-付费版，支持“一键迁移”（即将上线）可省略步骤3和4
> uniCloud Alibaba Cloud official version - paid version, supports "one-click migration" (coming soon) and steps 3 and 4 can be omitted

1. 解绑域名与旧服务空间的绑定关系
1. Unbind the binding relationship between the domain name and the old service space

	在[uniCloud web控制台](https://unicloud.dcloud.net.cn/)打开旧的服务空间 -> 前端网页托管 -> 参数配置 -> 域名信息 配置网站域名 -> 点击删除
	Open the old service space in [uniCloud web console](https://unicloud.dcloud.net.cn/) -> front-end web page hosting -> parameter configuration -> domain name information configure website domain name -> click delete

2. 绑定域名到新服务空间  
2. Bind the domain name to the new service space

	在[uniCloud web控制台](https://unicloud.dcloud.net.cn/)打开新服务空间 -> 前端网页托管 -> 参数配置 -> 域名信息 配置网站域名 -> 添加域名(添加后CNAME的值不会马上出现，需要过一会后点击右上角的刷新按钮，直至出现) -> 解析域名
	Open a new service space in [uniCloud web console](https://unicloud.dcloud.net.cn/) -> front-end web page hosting -> parameter configuration -> domain name information configuration website domain name -> add domain name (CNAME after adding The value will not appear immediately, it takes a while to click the refresh button in the upper right corner until it appears) -> resolve the domain name

3. 指定要生成通用链接的服务空间  
3. Designate the service space to generate the universal link

	在HBuilderX中点击项目的 manifest.json -> App模块配置 OAuth（登录鉴权）-> 微信登录（其他模块同理），点击自动生成 -> 选择“新开通的服务空间“ -> 下一步 -> 自定义域名 -> 完成
	Click the manifest.json of the project in HBuilderX -> App module configuration OAuth (login authentication) -> WeChat login (the same applies to other modules), click Auto Generate -> select "Newly opened service space" -> Next -> Next -> Custom Domain Name -> Done

4. 自动生成与部署
4. Automatic generation and deployment
	
	直接提交云打包即可。注意：提交云打包，只是为了触发：“生成新的通用文件并自动部署到新服务空间”，用户的客户端无需更新。
	Just submit the cloud package directly. Note: Submitting cloud packaging is just to trigger: "generate new common files and automatically deploy to new service space", and the user's client does not need to be updated.

#### 客户端处理通用链接。
#### The client handles universal links.

可通过5+ API的plus.runtime.launcher判断应用启动来源，如果其值为"uniLink"则表示通过通用链接启动应。这时可通过5+ API的plus.runtime.arguments获取启动参数，通用链接启动的情况将返回完整的通用链接地址。
You can use the plus.runtime.launcher of the 5+ API to determine the source of the application launch. If the value is "uniLink", it means that the application is launched through a universal link. At this time, the startup parameters can be obtained through plus.runtime.arguments of the 5+ API. When the universal link is activated, the complete universal link address will be returned.
例：HBuilderX中自带的默认真机运行基座HBuilderX注册的通用链接:[https://demo.dcloud.net.cn/ulink/](https://demo.dcloud.net.cn/ulink/)
Example: The default real machine running base in HBuilderX is a universal link for HBuilderX registration: [https://demo.dcloud.net.cn/ulink/](https://demo.dcloud.net.cn/ulink/ )

#### 通用链接生成原理：
#### Universal link generation principle:

1. 选择云空间获取云空间的默认/自定义域名
1. Select the cloud space to get the default/custom domain name of the cloud space
2. 按提前制定的规范（uni-universallinks/DCloud appid）拼接URL
2. Concatenate URLs according to pre-established specifications (uni-universallinks/DCloud appid)
3. 根据现有参数自动生成通用链接相关参数到manifest.json
3. Automatically generate universal link related parameters to manifest.json based on existing parameters
4. 发起云打包时读取证书的profile文件生成apple-app-site-association并部署到前面选定的云空间根目录的.well-known目录下(请勿删除该文件，否则通用链接将失效)
4. When initiating cloud packaging, read the profile file of the certificate to generate apple-app-site-association and deploy it to the .well-known directory of the previously selected cloud space root directory (do not delete this file, otherwise the universal link will be invalid )

##### 注意事项：
##### Precautions:

* 通用链接指向的路径可以为空，他只是一种信息传递方式。可以简单地理解为：通过解析URL的“/”后的参数到apple-app-site-association中找到指定的包名并唤醒对应的APP
* The path pointed to by the universal link can be empty, it is just a way of information transmission. It can be simply understood as: find the specified package name in apple-app-site-association by parsing the parameters after the "/" of the URL and wake up the corresponding APP
* 通用链接内容保存在manifest.json中"云打包后生效"，被手机读取的时机是应用被安装的时候。如果你的通用链接内容有变化，你需要重新提交云打包，并重新安装一次应用才能生效
* The content of the universal link is saved in the manifest.json and "takes effect after cloud packaging", and the time to be read by the mobile phone is when the application is installed. If the content of your universal link changes, you need to resubmit the cloud package and reinstall the app to take effect
* 通用链接最终托管在服务端，如有变动注意缓存的清理，例如尝试重启手机等操作
* The universal link is finally hosted on the server. If there is any change, pay attention to clearing the cache, such as trying to restart the phone and other operations

> 如果你是本地离线打包或者由于某种原因你需要用传统的方式：私有化部署服务器来托管apple-app-site-association文件创建通用链接。你仍然可以通过手动配置manifest.json实现。详情：[https://ask.dcloud.net.cn/article/36393#unilink](https://ask.dcloud.net.cn/article/36393#unilink)
> If you are packaging offline locally or for some reason you need to use the traditional way: privatize the deployment server to host the apple-app-site-association file and create a universal link. You can still configure manifest.json manually. Details: [https://ask.dcloud.net.cn/article/36393#unilink](https://ask.dcloud.net.cn/article/36393#unilink)

#### 常见问题
#### common problem

1.为什么我打开通用链接提示：`The requested file was not found on this server.`
1. Why do I open the universal link prompt: `The requested file was not found on this server.`

这是正常现象。通用链接并不要求是一个有效的路径，换句话说这个链接指向的目录允许为空。原理是访问这个链接时，iphone检测到当前域名为通用链接对应的域名，就读取域名服务器下的apple-app-site-association，然后根据域名后面的路径名称，验证并解析出要打开的app包名并唤醒对应的app。
it `s just normal. A universal link does not require a valid path, in other words, the directory pointed to by this link is allowed to be empty. The principle is that when accessing this link, the iPhone detects that the current domain name is the domain name corresponding to the universal link, reads the apple-app-site-association under the domain name server, and then verifies and resolves the app to be opened according to the path name behind the domain name Package name and wake up the corresponding app.

2.如何验证通用链接已经生效，有什么表现或者测试方案
2. How to verify that the universal link has taken effect, what performance or test plan

你可以将通用链接输入到iphone自带Safari浏览器中，下拉即可看到通用链接对应到应用名称和一个打开按钮，点击按钮即可直接在浏览器打开对应的APP。详情：[点此查看演示视频](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E9%80%9A%E7%94%A8%E9%93%BE%E6%8E%A5%E6%BC%94%E7%A4%BA%E8%A7%86%E9%A2%91.mp4)


3.使用微信登录、分享、支付等功能时，用户非首次调起微信，仍然出现二次跳转app  

微信SDK要求通用链接apple-app-site-association文件中 path不能带query参数，且末尾必须添加通配符*号。如下: 

```
{
    "applinks": {
        "apps": [],
        "details": [
            {
                "appID":"8ARUHGUQNH.com.AppSample",
                "paths": [ "/AppSample/*"]
            }
        ]
    }
}

```