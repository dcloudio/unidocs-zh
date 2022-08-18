## 视频介绍
<a target="_blank" href="https://www.bilibili.com/video/BV17p4y1a71x?p=12">
    <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/71d310a5-ef69-4ca5-88c8-9a3abf8fb8e3.png" alt="腾讯课堂uniCloud视频教程" style="width: 70%;margin-bottom:26px;">
    <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/71d310a5-ef69-4ca5-88c8-9a3abf8fb8e3.png" alt="Tencent classroom uniCloud video tutorial" style="width: 70%;margin-bottom:26px;">
</a>

注：视频会有滞后问题，入门为主。最新的完整功能请看以下文档
Note: The video will have a lag problem, and the entry is the main one. Please see the following documents for the latest complete functions
## 简介
## Introduction
uni-starter是一个集成了大量商用项目常见功能的，云端一体应用快速开发基本项目模版。
uni-starter is a basic project template for rapid development of cloud-integrated applications that integrates common functions of a large number of commercial projects.

APP有很多通用的功能，比如登录注册、头像、设置、banner、... uni-starter将这些功能都已经集成好。
The APP has many common functions, such as login registration, avatar, settings, banner,... uni-starter has integrated these functions.

直接在`HBuilderx`新建项目选择`uni-starter`模板，即可在此基础上快速开发自己的特色业务。
Directly create a new project in `HBuilderx` and select the `uni-starter` template, and then you can quickly develop your own characteristic business on this basis.

有了`uni-starter`，再加上`schema2code`生成前端页面，一个简单应用就可以快速完成。
With `uni-starter`, coupled with `schema2code` to generate front-end pages, a simple application can be completed quickly.

如果说[uniCloud admin](https://uniapp.dcloud.io/uniCloud/admin)是管理端项目的基本项目模版，那么uni-starter则是用户端、尤其是移动端的基础项目模板。
If [uniCloud admin](https://uniapp.dcloud.io/uniCloud/admin) is the basic project template for admin projects, then uni-starter is the basic project template for users, especially mobile.

`uni-starter` + `uniCloud admin` 提供了用户端和管理端的基本项目模版，应用开发从未如此简单快捷！
`uni-starter` + `uniCloud admin` provides basic project templates on the client side and admin side, application development has never been easier and faster!

演示项目：[https://uni-starter.dcloud.net.cn](https://uni-starter.dcloud.net.cn)
Demo project: [https://uni-starter.dcloud.net.cn](https://uni-starter.dcloud.net.cn)

扫码体验：<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/0625ae17-1262-45cb-a713-cdbf02df5c0a.png" style="width: 120px;">
Scan code experience: <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/0625ae17-1262-45cb-a713-cdbf02df5c0a.png" style="width: 120px;">

下载地址：[https://ext.dcloud.net.cn/plugin?id=5057](https://ext.dcloud.net.cn/plugin?id=5057)
Download address: [https://ext.dcloud.net.cn/plugin?id=5057](https://ext.dcloud.net.cn/plugin?id=5057)

GitCode 仓库：[https://gitcode.net/dcloud/uni-starter](https://gitcode.net/dcloud/uni-starter)
GitCode repository: [https://gitcode.net/dcloud/uni-starter](https://gitcode.net/dcloud/uni-starter)


## uni-starter集成包括：
## uni-starter integration includes:
1. 用户管理：
1. User management:
	- 登录注册（用户名密码登录、手机号验证码登录、APP一键登录、微信登录、Apple登录、微信小程序登录）
	- Login and registration (username and password login, mobile phone number verification code login, APP one-key login, WeChat login, Apple login, WeChat applet login)
	- 修改密码、忘记密码、头像更换（集成图片裁剪）、昵称修改、积分查看、退出登录
	- Modify password, forget password, change avatar (integrated image cropping), modify nickname, check points, log out
2. 系统设置：
2. System Settings:
	- App更新（整包升级、wgt升级、强制升级，后台搭配uniCloud admin的升级中心插件管理）
	- App update (whole package upgrade, wgt upgrade, forced upgrade, with the upgrade center plugin management of uniCloud admin in the background)
	- 推送开关（app）、清除缓存（app）
	- Push switch (app), clear cache (app)
	- 指纹解锁（app）、人脸解锁（app）
	- Fingerprint unlock (app), face unlock (app)
	- 多语言切换
	- Multi-language switch
	- 账号注销
	- Account cancellation
3. 隐私权限：内置Android先弹出隐私协议对话框，然后再向用户申请设备权限
3. Privacy permission: The built-in Android first pops up the privacy agreement dialog box, and then applies to the user for device permission
4. 权限引导：当应用拒绝授权某些权限，但在后续使用中又需要这个权限；此时实现：引导用户可“一键跳转至系统设置”中开启。
4. Permission guidance: When the application refuses to authorize certain permissions, but this permission is required in subsequent use; at this time, it is realized: the user can be guided to “jump to system settings with one click” to enable it.
	- 而不是报错让用户自己去找解决方案（更好的用户体验）。
	- Instead of reporting errors and letting users find solutions themselves (better user experience).
	- 采用高内聚低耦合的设计结构，直接在应用启动时，应用拦截器中实现。免去在每个业务代码中处理这类问题，更优雅更方便。
	- The design structure of high cohesion and low coupling is adopted, which is directly implemented in the application interceptor when the application is started. It is more elegant and convenient to avoid dealing with such problems in each business code.
	- 已实现项目：摄像头、相册、获取GPS定位、网络2/3/4/5G和Wi-Fi。你可以参考这些实现，处理更多该类场景的处理。uni-starter也会持续更新完善。
	- Implemented projects: camera, photo album, GPS positioning, network 2/3/4/5G and Wi-Fi. You can refer to these implementations for more handling of such scenarios. uni-starter will also continue to be updated and improved.
5. 实用功能
5. Practical functions
	- 问题与反馈、关于、隐私政策、用户服务协议
	- Questions and Feedback, About, Privacy Policy, User Service Agreement
	- banner（后台搭配uniCloud admin的banner插件管理）
	- banner (managed with the banner plugin of uniCloud admin in the background)
	- 新闻的搜索、列表、详情、分享。通过clientDB实现，开发者直接修改定义的表名等参数，即可轻松改为自己的业务
	- Search, list, detail and share news. Implemented through clientDB, developers can easily change to their own business by directly modifying the defined table name and other parameters
	- 可覆盖原生层的分享菜单
	- Share menu that can override native layer
	- h5版在页面顶部（全局悬浮）引导用户点击下载App
	- The h5 version guides users to click to download the app at the top of the page (global suspension)
	- 营销裂变：点击“分销推荐”，生成带用户inviteCode参数的应用下载页（H5），一键分享到微信或微信朋友圈等。被邀请人打开下载页面点击下载，设备剪贴板的内容会被自动设置为邀请者的inviteCode。被邀请人下载app之后通过任何方式登录（含：注册并登录），uni-starter框架会自动获取设备剪切板中的inviteCode提交到服务端绑定关联关系。
	- Marketing fission: Click "Distribution Recommendation" to generate an application download page (H5) with the user's inviteCode parameter, and share it to WeChat or WeChat Moments with one click. When the invitee opens the download page and clicks download, the content of the device's clipboard will be automatically set to the inviter's inviteCode. After the invitee downloads the app and logs in by any means (including: registering and logging in), the uni-starter framework will automatically obtain the inviteCode in the device clipboard and submit it to the server-side binding association.
6. 更好的性能：首页采用nvue，fast编译模式，加快App端启动速度
6. Better performance: The home page adopts nvue, fast compilation mode to speed up the startup speed of the App
7. 内置拦截器：
7. Built-in interceptor:
	- 页面路由拦截，配置需强制登录的页面；打开时自动检测`token`若无效就自动跳转到登录页
	- 调用云函数（callFunction）拦截器，自动携带必要参数、自动处理响应体。详见8.自动完成1-2
8. 自动完成：
8. Autocomplete:
	- 分析uniCloud.callfunction和clientDB操作的响应体，判断code执行对应的操作如跳转到登录页，自动续期token
	- Analyze the response body of uniCloud.callfunction and clientDB operations, and determine that the code performs corresponding operations such as jumping to the login page and automatically renewing the token
	- 操作注册/登录操作自动获取客户端设备：push_clientid、imei、oaid、idfa新增/更新到数据表uni-id-device
	- Operation registration/login operation to automatically obtain client device: push_clientid, imei, oaid, idfa added/updated to the data table uni-id-device
	- 异常恢复处理：断网恢复后自动重连“因网络错误导致的”网络请求
	- Abnormal recovery processing: automatic reconnection of network requests "caused by network errors" after network disconnection recovery
	- 为迎合苹果App Store的规则，登录与分享功能项显示之前自动检测是否安装了对应客户端。比如：设备未安装微信则不显示微信快捷登录和微信分享选项
	- In order to meet the rules of the Apple App Store, it is automatically detected whether the corresponding client is installed before the login and sharing function items are displayed. For example: if the device does not have WeChat installed, the WeChat shortcut login and WeChat sharing options will not be displayed.

* 更多功能模块会不断更新，请持续关注本插件 
* More functional modules will be updated continuously, please continue to pay attention to this plugin

## 快速体验部署流程
## Quick experience deployment process
#### 1. 开通uniCloud
#### 1. Activate uniCloud
- 开通`uniCloud`：本项目是云端一体的，它的云端代码需要部署在uniCloud云服务空间里，需要开通uniCloud。在[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/)登录，按云厂商要求进行实名认证。
- Activate `uniCloud`: This project is integrated with the cloud, its cloud code needs to be deployed in the uniCloud cloud service space, and uniCloud needs to be activated. Log in at [https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/) and perform real-name authentication according to the requirements of the cloud manufacturer.
- 在uniCloud认证通过后，创建一个服务空间给本项目使用。选择阿里云或腾讯云均可，两种服务空间差异[详情](https://uniapp.dcloud.net.cn/uniCloud/price)
- After passing the uniCloud certification, create a service space for this project to use. You can choose Alibaba Cloud or Tencent Cloud, the two service spaces are different [Details](https://uniapp.dcloud.net.cn/uniCloud/price)

#### 2. 运行云服务空间初始化向导
#### 2. Run the cloud service space initialization wizard
<img style="width:61.8%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/472d8525-4e64-4a86-a77a-8c37c4379610.jpg" />
<img style="width:61.8%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/78b3f17c-cf70-4cdf-9ada-1796753ffeac.jpg" />
<img style="width:61.8%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/09916d79-4753-4baa-9b95-baa831f1a873.jpg" />

## 功能模块介绍
## Function module introduction
### 1.登录模块
### 1. Login module
|登录类型	|描述					|
|Login Type |Description |
|--			|--					|
|smsCode	|验证码登录			|
|smsCode |Verification Code Login |
|univerify	|读取手机SIM卡一键登录	|
|univerify |Read mobile phone SIM card one-click login |
|username	|账号密码登录			|
|username |Login with account and password |
|weixin		|微信登录				|
|weixin |WeChat Login |
|apple		|苹果登录				|
|apple |Apple Login |

配置文件：`项目根目录/uni-starter.config.js`
Configuration file: `Project root directory/uni-starter.config.js`
```js
{
	"router":{
		"login":["username","smsCode"]
	}
}
```

#### 启用登录方式
#### Enable login method
如上示例配置为：`["username","smsCode"]` 表示启用：验证码登录、账号密码登录。
The above example is configured as: `["username","smsCode"]` means enable: verification code login, account password login.

同理配置为：`["weixin","username","smsCode"]` 则表示启用：微信登录、验证码登录、账号密码登录。
Similarly, the configuration is: `["weixin","username","smsCode"]` to enable: WeChat login, verification code login, account password login.

总结：需要几项列举几项即可。
Summary: You need to list a few items.

#### 优先级
#### priority
在uni-starter框架中执行`uni.navigateTo({url: "/pages/ucenter/login-page/index/index"})`，会根据配置跳转到相应的登录页面。如果配置内容为：`["username","smsCode"]`会自动切换到"配置的第0项，也就是`username`类型的登录方式对应的页面”，即`账户登录`方式页面，路径：`/pages/ucenter/login-page/pwd-login/pwd-login`
Execute `uni.navigateTo({url: "/pages/ucenter/login-page/index/index"})` in the uni-starter framework, it will jump to the corresponding login page according to the configuration. If the configuration content is: `["username","smsCode"]`, it will automatically switch to "the 0th item of the configuration, which is the page corresponding to the login method of the `username` type", that is, the `account login` method page, path : `/pages/ucenter/login-page/pwd-login/pwd-login`

#### 平台差异性配置
#### Platform Difference Configuration
这里支持用[条件编译](https://uniapp.dcloud.io/platform?id=%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91)因此你可以配置在不同平台下拥有的登录方式。
There is support for [conditional compilation](https://uniapp.dcloud.io/platform?id=%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91) so you can Configure the login methods you have under different platforms.
如下配置，即表示仅在APP端启用“短信验证码登录”
The following configuration means that "SMS verification code login" is only enabled on the APP side
```js
"login": [
	"username","univerify","weixin","apple"
	// #ifdef APP-PLUS
		"smsCode",
	// #endif
]
```

#### 生效策略
#### Effective strategy
登录方式有如上5种，虽然你希望有几种登录方式就在配置中列举几种。但是有的登录方式可能因为设备环境问题而不被支持；
There are five login methods as above, although you want to have several login methods, just list several in the configuration. However, some login methods may not be supported due to device environment problems;
比如你正确地配置了微信登录，而用户的手机并没有安装微信，这样微信登录功能就无法使用。
For example, you have correctly configured WeChat login, but the user's mobile phone does not have WeChat installed, so the WeChat login function cannot be used.
并且如果出现这种情况你的app会被iOS的App Store拒绝上架。
And if this happens your app will be rejected by the iOS App Store.
所以在这里，我们的生效策略在检测：你是否有列举到某个配置项为前提的情况下，增加了检测当前环境是否支持，如果不支持会自动隐藏。
So here, our effective strategy is to detect whether you have listed a certain configuration item as a premise, and increase the detection of whether the current environment supports it. If it is not supported, it will be automatically hidden.

#### 在uni-app框架中配置：
#### Configuration in uni-app framework:
在应用模块：`manifest.json` App模块配置 --> OAuth（登录鉴权）--> 勾选并配置你所需要的模块
In the application module: `manifest.json` App module configuration --> OAuth (login authentication) --> Check and configure the modules you need
+ 一键登录：
+ One-click login:
	[开通配置](https://dev.dcloud.net.cn/#/pages/uniLogin/index)
	[Activation configuration](https://dev.dcloud.net.cn/#/pages/uniLogin/index)
	[使用指南](https://uniapp.dcloud.io/univerify)
	[Usage Guide](https://uniapp.dcloud.io/univerify)
+ [苹果登录集成指南](https://ask.dcloud.net.cn/article/36651) 
+ [Apple Login Integration Guide](https://ask.dcloud.net.cn/article/36651)
+ 短信登录：
+ SMS login:
>`uni-id-cf`文件路径：`/uniCloud-aliyun/cloudfunctions/uni-id-cf/index.js`
>`uni-id-cf` file path: `/uniCloud-aliyun/cloudfunctions/uni-id-cf/index.js`

	测试期间，为节约资源。统一虚拟短信验证码为：123456。正式使用注视掉`uni-id-cf`第339-344行即可
	During the test, in order to save resources. The unified virtual SMS verification code is: 123456. For official use, just look at lines 339-344 of `uni-id-cf`
	使用本功能需要在[DCloud开发者中心](https://dev.dcloud.net.cn/#/pages/sms/base)开通并充值
	To use this function, you need to activate and recharge in [DCloud Developer Center](https://dev.dcloud.net.cn/#/pages/sms/base)
	教程参考[短信服务开通指南](https://ask.dcloud.net.cn/article/37534)
	Tutorial reference[SMS service activation guide](https://ask.dcloud.net.cn/article/37534)
	修改短信注册/登录发生验证码的模板id，在`uni-id-cf`搜索 `const templateId = '11753'` 替换为自己申请的模板id
	Modify the template id of the verification code for SMS registration/login, search `const templateId = '11753'` in `uni-id-cf` and replace it with the template id you applied for

#### 服务端配置
#### server configuration
uni-starter服务端使用[uni-config-center](https://ext.dcloud.net.cn/plugin?id=4425)统一管理这些配置，
The uni-starter server uses [uni-config-center](https://ext.dcloud.net.cn/plugin?id=4425) to manage these configurations uniformly,
文件路径`/uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`
file path `/uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`
详情下文[目录结构](#id=catalogue) 和[uni-id配置说明](https://uniapp.dcloud.io/uniCloud/uni-id?id=configjson%e7%9a%84%e8%af%b4%e6%98%8e)
For details, see [Directory Structure](#id=catalogue) and [uni-id Configuration Instructions](https://uniapp.dcloud.io/uniCloud/uni-id?id=configjson%e7%9a%84%e8%af %b4%e6%98%8e)

### 2.路由拦截
### 2. Routing interception
#### 应用场景
#### Application scenarios
有些页面，限允许已经登录后用户才访问。
Some pages are only allowed to be accessed by users who have already logged in.
常规的做法是打开这类页面之前，检查（前端校验）uni_id_token的值是否有效,如果无效会自动跳转到登录页面。
The conventional practice is to check (front-end verification) whether the value of uni_id_token is valid before opening such pages, and if invalid, it will automatically jump to the login page.
而这样的页面有很多，入口也不少。面向过程的写法会产生大量的代码冗余，且不易维护。
And there are many such pages and many entrances. Procedure-oriented writing method will generate a lot of code redundancy, and it is not easy to maintain.
而uni-starter基于拦截器（`uni.addInterceptor`），提供了仅需简单配置即可实现的路由拦截功能。
The uni-starter is based on the interceptor (`uni.addInterceptor`), which provides a route interception function that can be implemented with simple configuration.
#### 配置方式
#### Configuration method
支持两种模式（二选一）
Support two modes (choose one of two)
##### 黑名单模式
##### Blacklist Mode
列举需要强制登录的页面完整路径（支持正则）
List the full path of the page that needs to be forced to log in (regular support is supported)
##### 白名单模式
##### Whitelist Mode
列举不需要强制登录即可访问的页面完整路径（支持正则）
List the full path of pages that can be accessed without forced login (regular support is supported)
#### 配置示例
#### Configuration example
配置文件：`项目根目录/uni-starter.config.js`
Configuration file: `Project root directory/uni-starter.config.js`

```js
"router": {
		"needLogin" : [
		 	{pattern:/^\/pages\/list.*/},	//支持正则表达式
				"/uni_modules/uni-news-favorite/pages/uni-news-favorite/list",
				"/uni_modules/uni-feedback/pages/uni-feedback/add"
		],
/*
	请注意上下，黑名单（needLogin）、白名单（visitor）两种配置模式二选一不可同时使用
*/
		"visitor" : [
			"/",//注意入口页必须直接写 "/"
			{"pattern":/^\/pages\/list.*/},	//支持正则表达式
			{"pattern":/^\/pages\/ucenter\/login-page.*/},
			"/pages/common/webview/webview",
			"/pages/grid/grid",
			"/pages/ucenter/ucenter",
			"/pages/ucenter/about/about",
			"/pages/ucenter/settings/settings"
		]
}
```

##### 优势：
##### Advantage:
传统的路由管理方式是对uni-app框架路由写法的二次封装，自定义的写法不支持ide的代码提示,且不优雅。
The traditional routing management method is a secondary encapsulation of the uni-app framework routing writing method. The custom writing method does not support the code prompt of IDE, and is not elegant.
另外不同插件作者封装不同的路由管理方式，这样做出来的插件与用户的项目结合时，路由写法不统一的差异需要去磨平。
In addition, different plug-in authors encapsulate different routing management methods. When the plug-in created in this way is combined with the user's project, the differences in routing writing methods need to be smoothed out.
为此`uni-starter`基于`uni.addInterceptor`(拦截器)实现路由管理。
To this end `uni-starter` implements route management based on `uni.addInterceptor` (interceptor).

##### 注意：
##### Notice:
- uni-starter的路由拦截，仅在调用路由API（navigateTo、redirectTo、reLaunch、switchTab）时触发。应用的首页是由系统自动打开，不会触发拦截器。首页需要强制登录才能访问的场景，不由路由控制。但不用担心，如果未登录的用户，打开了需要登录才能访问页面，必定会触发需要携带有效token才能访问的API。此时则会返回相应的响应体，uni-starter监测到token无效这类的响应体也会自动跳转到登录页（这种效果需要前后端都开发完成才体验到）。
- Routing interception of uni-starter, which is only triggered when the routing API (navigateTo, redirectTo, reLaunch, switchTab) is called. The home page of the application is automatically opened by the system and will not trigger the interceptor. Scenarios that require forced login to access the home page are not controlled by routing. But don't worry, if a user who is not logged in opens a page that requires login to access, it will definitely trigger an API that requires a valid token to access. At this time, the corresponding response body will be returned, and if the uni-starter detects that the token is invalid, the response body will also automatically jump to the login page (this effect requires the development of the front and back ends to be experienced).
- uni-starter框架不能将登录页`/pages/ucenter/login-page/index/index`设置为首页，否则由拦截器实现的路由管理将生效。
- The uni-starter framework cannot set the login page `/pages/ucenter/login-page/index/index` as the home page, otherwise the routing management implemented by the interceptor will take effect.
- 拦截器实现的路由控制，是在路由跳转未完成之前触发。路由切换方式（navigateTo、redirectTo、reLaunch、switchTab）URL参数必须使用绝对路径路
- The routing control implemented by the interceptor is triggered before the routing jump is completed. Route switching methods (navigateTo, redirectTo, reLaunch, switchTab) URL parameters must use absolute path routes

### 3.h5版在页面顶部引导用户`点击下载App`
### Version 3.h5 guides users to `click to download the app` at the top of the page
把h5端用户引流到APP端，是一个非常实用的功能。相对于h5，APP端有更高的用户留存和更好的产品体验。
It is a very practical function to divert users from the h5 end to the APP end. Compared with h5, APP has higher user retention and better product experience.
uni-starter集成了这个功能，你只需直接在`项目根目录/uni-starter.config.js`的"h5"->"openApp"中配置相关内容，即可开启全局悬浮的下载引导。
uni-starter integrates this function, you only need to configure the relevant content in "h5"->"openApp" of `project root directory/uni-starter.config.js` to enable the global suspension download guide.
这也是一个演示开发者如何在h5端做全局悬浮块的例子。你也可以在`/common/openApp.js`中修改他的样式等代码等，注意他只支持原生js语法。
This is also an example that demonstrates how developers can do global floating blocks on the h5 side. You can also modify his style and other codes in `/common/openApp.js`. Note that it only supports native js syntax.

### 4.分享模块
### 4. Sharing module
一个可覆盖原生层分享模块
An overridable native layer sharing module
- 应用配置：`manifest.json` App模块配置 --> Share --> 勾选并配置你所需要的模块
- Application configuration: `manifest.json` App module configuration --> Share --> Check and configure the modules you need
- 分享功能配置参数，随着应用的业务场景决定，在各场景调用的时候配置。参考uni-starter的`/pages/list/detail.vue`的`methods -> shareClick`
- Share function configuration parameters, which are determined according to the business scenario of the application and configured when each scenario is called. Refer to `methods -> shareClick` of `/pages/list/detail.vue` of uni-starter
- 更多`uni-share`的介绍 [详情](https://ext.dcloud.net.cn/plugin?id=4860)
- More `uni-share` introduction [Details](https://ext.dcloud.net.cn/plugin?id=4860)

### 5.升级中心相关
### 5. Upgrade center related
为了解决开发者维护多个 App 升级繁琐，重复逻辑过多，管理不便的问题，升级中心`uni-upgrade-center`应运而生。
In order to solve the problem that developers maintain multiple apps to upgrade tediously, too much repetitive logic, and inconvenient management, the upgrade center `uni-upgrade-center` came into being.
提供了简单、易用、统一的 App 管理、App 版本管理、安装包发布管理，升级检测更新管理。
Provides simple, easy-to-use and unified App management, App version management, installation package release management, and upgrade detection and update management.
- 升级中心分为两个部分：`uni-upgrade-center` Admin管理后台和`uni-upgrade-center - Admin`前台检测更新。
- The upgrade center is divided into two parts: `uni-upgrade-center` Admin management background and `uni-upgrade-center - Admin` foreground to detect updates.
- `uni-upgrade-center`的介绍 [详情](https://ext.dcloud.net.cn/plugin?id=4542)
- Introduction of `uni-upgrade-center` [Details](https://ext.dcloud.net.cn/plugin?id=4542)
- `uni-upgrade-center - Admin`的介绍 [详情](https://ext.dcloud.net.cn/plugin?id=4470)
- Introduction of `uni-upgrade-center - Admin` [Details](https://ext.dcloud.net.cn/plugin?id=4470)

### 6.意见反馈
### 6. Feedback
- 客户端[详情](https://ext.dcloud.net.cn/plugin?id=50)
- Client [Details](https://ext.dcloud.net.cn/plugin?id=50)
- admin端[详情](https://ext.dcloud.net.cn/plugin?id=4992)
- admin side [details](https://ext.dcloud.net.cn/plugin?id=4992)

### 7.指纹识别模块
### 7. Fingerprint recognition module
- `manifest.json` App模块配置 --> `Fingerprint`指纹识别
- `manifest.json` App module configuration --> `Fingerprint` fingerprint identification

### 8.消息推送模块
### 8. Message push module
- `manifest.json` App模块配置 --> `push`消息推送
- `manifest.json` App module configuration --> `push` message push

### 9.隐私政策弹框
### 9. Privacy Policy Popup
根据工业和信息化部关于开展APP侵害用户权益专项整治要求，App提交到应用市场必须满足以下条件：
According to the Ministry of Industry and Information Technology's special rectification requirements for APPs that infringe on user rights and interests, applications submitted to the application market must meet the following conditions:
- 应用启动运行时需弹出隐私政策协议，说明应用采集用户数据
- When the app starts and runs, a privacy policy agreement should pop up, indicating that the app collects user data
- 应用不能强制要求用户授予权限，即不能“不给权限不让用”
- Apps cannot force users to grant permissions, i.e. they cannot "don't give permissions, don't let them use them"
+ 如不希望应用启动时申请“读写手机存储”和“访问设备信息”权限，请参考：https://ask.dcloud.net.cn/article/36549
+ If you do not want to apply for "read and write mobile phone storage" and "access device information" permissions when the app starts, please refer to: https://ask.dcloud.net.cn/article/36549

配置弹出“隐私协议和政策”打开项目的manifest.json文件，切换到“源码视图”项
Configure the pop-up "Privacy Agreement and Policy" to open the manifest.json file of the project and switch to the "Source View" item
在`manifest.json` -> `app-plus` -> `privacy` 节点下添加 prompt节点
Add prompt node under `manifest.json` -> `app-plus` -> `privacy` node
```js
"privacy" : {
	"prompt" : "template",
	"template" : {
		"title" : "服务协议和隐私政策",
		"message" : "　　请你务必审慎阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了更好的向你提供服务，我们需要收集你的设备标识、操作日志等信息用于分析、优化应用性能。<br/>　　你可阅读<a href=\"https://ask.dcloud.net.cn/protocol.html\">《服务协议》</a>和<a href=\"https://ask.dcloud.net.cn/protocol.html\">《隐私政策》</a>了解详细信息。如果你同意，请点击下面按钮开始接受我们的服务。",
		"buttonAccept" : "同意",
		"buttonRefuse" : "暂不同意"
	}
}
```
- prompt
  字符串类型，必填，隐私政策提示框配置策略，可取值template、custom、none，默认值为none
  + template
     使用原生提示框模板，可自定义标题、内容已经按钮上的文本
     Use the native tooltip template to customize the title, content, and text on the button
  + custom
     自定义隐私政策提示框，uni-app项目中推荐使用nvue页面进行自定义，5+ APP使用html页面进行自定义
     Customize the privacy policy prompt box, it is recommended to use nvue pages for customization in the uni-app project, and 5+ APPs use html pages for customization
  + none
    不弹出隐私政策提示框
    Do not pop up the privacy policy prompt
- template
  json格式，可选，模板提示框上显示的内容
  json format, optional, the content displayed on the template prompt box
	+ title
	  模板提示框上的标题，默认为“服务协议和隐私政策”
	  The title on the template tooltip, the default is "Service Agreement and Privacy Policy"
	+ message
	  模板提示框上的内容，richtext类型字符串，支持a/font/br等节点，点击a链接会调用内置页面打开其href属性中链接地址。
	  The content on the template prompt box, the richtext type string, supports nodes such as a/font/br, and clicking the a link will call the built-in page to open the link address in its href attribute.
	  **注意：务必配置此提示内容，或参考上面示例内容并修改《服务协议》和《隐私政策》链接地址**
	  **Note: Be sure to configure this prompt, or refer to the above example content and modify the "Service Agreement" and "Privacy Policy" link address**
	+ buttonAccept
	  模板提示框上接受按钮的文本，默认值为“我知道了”
	  The text of the accept button on the template tooltip, the default is "I got it"
	+ buttonRefuse
	  模板提示框上拒绝按钮的文本，默认不显示此按钮
	  The text of the reject button on the template tooltip, this button is not displayed by default
	+ second
	  HBuilderX3.1.12+版本新增支持隐私提示框二次确认提示，用于配置二次确认提示框显示内容，message属性值不为空时弹出二次确认提示框
	  HBuilderX3.1.12+ version newly supports the second confirmation prompt of the privacy prompt box, which is used to configure the display content of the second confirmation prompt box. When the message attribute value is not empty, the second confirmation prompt box will pop up
		+ title 二次确认提示框上的标题
		+ title The title on the second confirmation prompt
		+ message 二次确认提示框上的内容，支持richtext类型字符串
		+ message The content on the second confirmation prompt box, supports richtext type strings
		+ buttonAccept 二次确认提示框上接受按钮的文本
		+ buttonAccept the text of the accept button on the second confirmation prompt box
		+ buttonRefuse 二次确认提示框上拒绝按钮的文本
		+ buttonRefuse the text of the reject button on the secondary confirmation prompt

> 更多Android平台隐私与政策提示框配置方法，[详情](https://ask.dcloud.net.cn/article/36937)
> More Android platform privacy and policy prompt box configuration methods, [details](https://ask.dcloud.net.cn/article/36937)

##### 注意：
##### Notice:
1. 最新的华为应用市场要求，隐私政策提示框上接受按钮的文本，必须为“同意”而不能是其他有歧义的文字。
1. The latest Huawei AppGallery requires that the text of the accept button on the privacy policy prompt box must be "Agree" instead of any other ambiguous text.
2. 配置后提交云端打包后生效。理论上绝大部分和`manifest.json`生效相关的配置均需要提交云打包后生效
2. After configuration, submit the cloud package to take effect. In theory, most of the configurations related to the `manifest.json` taking effect need to be submitted to the cloud package to take effect

### 10.拦截器改造后的uniCloud
### 10. UniCloud after the interceptor transformation
1. Debug，调试期间开启Debug。接口一旦fail就会弹出真实错误信息。否则将弹出，系统错误请稍后再试！
1. Debug, enable Debug during debugging. Once the interface fails, a real error message will pop up. Otherwise, it will pop up, system error, please try again later!
```js
	if(Debug){
		console.log(e);
		uni.showModal({
			content: JSON.stringify(e),
			showCancel: false
		});
	}
```
2. 断网自动重试，当callFunction为fail时检测是否因断网引起。如果是会提醒用户并且会在恢复网络之后自动重新发起请求
2. Automatically retry when the network is disconnected. When the callFunction is fail, it will detect whether it is caused by the disconnection of the network. If yes, the user will be reminded and the request will be automatically re-initiated after the network is restored
3. 常规的errCoder自动执行对应程序，如token无效/过期自动跳转到登录页面。
3. The conventional errCoder automatically executes the corresponding program, such as the token is invalid/expired and automatically jumps to the login page.
4. token自动续期。
4. The token is automatically renewed.

### 11.举例路由控制原理，深入了解拦截器的使用
### 11. Example of routing control principle, in-depth understanding of the use of interceptors
比如你希望在打开用户中心等页面之前，都检查一下该用户是否登录，否则就重定向到登录页面。使用拦截器你可以用以下写法在应用入口定义全局生效：
For example, you want to check whether the user is logged in before opening the user center and other pages, otherwise redirect to the login page. Using interceptors you can define global effects at the application entry point by writing:
	
```js
	//定义各个页面，这里为了演示uni-starter框架是把该定义写在全局配置uni-starter.config.js中
	//Define each page, here in order to demonstrate the uni-starter framework, the definition is written in the global configuration uni-starter.config.js
	let needLogin = ["/pages/ucenter/userinfo/userinfo", ... ] 
	
	uni.addInterceptor("navigateTo", {
		invoke(e) { // 调用前拦截
			//获取用户的token
			//Get the user's token
			const token = uni.getStorageSync('uni_id_token')
			//获取当前页面路径（即url去掉"?"和"?"后的参数）
			//Get the current page path (that is, the parameters after removing "?" and "?" from the url)
			const url = e.url.split('?')[0]
			//判断要打开的页面是否需要验证登录
			// Determine whether the page to be opened needs to verify the login
			if (needLogin.includes(url) && token == '') {
				uni.showToast({
					title: '该页面需要登录才能访问，请先登录',
					icon: 'none'
				})
				uni.navigateTo({
					url: "/pages/ucenter/login-page/index/index"
				})
				return false
			}
		},
		fail(err) { // 失败回调拦截 
			console.log(err);
		},
	})
```
- 而路由跳转方法不仅有`uni.navigateTo`还有`uni.redirectTo`,`uni.reLaunch`,`uni.switchTab`；
- The routing jump method includes not only `uni.navigateTo` but also `uni.redirectTo`, `uni.reLaunch`, `uni.switchTab`;
- 另外我们还希望控制直接跳转至哪种登录类型
- In addition we also want to control which login type to jump directly to
所以在uni-starter框架中我们这样定义：
So in the uni-starter framework we define it like this:
uni-starter/common/appInit.js 的第228-280行
Lines 228-280 of uni-starter/common/appInit.js
```js
	const {"router": {needLogin,login} } = uniStarterConfig //需要登录的页面
	let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
	list.forEach(item => { //用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
		uni.addInterceptor(item, {
			invoke(e) { // 调用前拦截
				//获取用户的token
				//Get the user's token
				const token = uni.getStorageSync('uni_id_token')
				//获取当前页面路径（即url去掉"?"和"?"后的参数）
				//Get the current page path (that is, the parameters after removing "?" and "?" from the url)
				const url = e.url.split('?')[0]
				//判断要打开的页面是否需要验证登录
				// Determine whether the page to be opened needs to verify the login
				if (needLogin.includes(url) && token == '') {
					uni.showToast({
						title: '该页面需要登录才能访问，请先登录',
						icon: 'none'
					})
					uni.navigateTo({
						url: "/pages/ucenter/login-page/index/index"
					})
					return false
				}
				//控制登录优先级
				//Control the login priority
				if (url == '/pages/ucenter/login-page/index/index') {
					//一键登录（univerify）、账号（username）、验证码登录（短信smsCode）
					//One-click login (univerify), account number (username), verification code login (SMS smsCode)
					if (login[0] == 'univerify') {
						if(e.url == url) { e.url += '?' } //添加参数之前判断是否带了`？`号如果没有就补上，因为当开发场景本身有参数的情况下是已经带了`？`号
						e.url += "univerify_first=true"
					} else if (login[0] == 'username') {
						e.url = "/pages/ucenter/login-page/pwd-login/pwd-login"
					}
				}
				return true
			},
			fail(err) { // 失败回调拦截 
				console.log(err);
			},
		})
	})
```

### 12.关于升级
### 12. About the upgrade
- 项目升级
- Project upgrade

	uni-starter遵循uni-app的插件模块化规范，即：[uni_modules](https://uniapp.dcloud.io/uni_modules) 。他是个项目类型的插件。在项目的根目录下有一个符合uni_modules规范的package.json文件，在这个文件右键-从插件市场更新即可更新该插件。
	uni-starter follows uni-app's plugin modularization specification, namely: [uni_modules](https://uniapp.dcloud.io/uni_modules). It is a project type plugin. There is a package.json file in the root directory of the project that conforms to the uni_modules specification. Right-click on this file and update from the plugin market to update the plugin.
	
- 插件升级
- Plugin upgrade

	非项目类型的uni_modules插件，是项目根目录下的uni_modules目录下。以插件ID为插件文件夹命名，在该目录右键也会看到“从插件市场更新”选项，点击即可更新该插件。
	Non-project-type uni_modules plugins are located in the uni_modules directory under the project root directory. Name the plug-in folder with the plug-in ID. Right-click in the directory and you will see the "Update from plug-in market" option. Click to update the plug-in.

### 13.多语言国际化
### 13. Multilingual internationalization
	uni-starter支持多语言国际化。默认开启，可以在`uni-starter.config.js`->`i18n`->`enable`中配置
	uni-starter supports multilingual internationalization. It is enabled by default and can be configured in `uni-starter.config.js`->`i18n`->`enable`
	如果你启用了多语言国际化需要先阅读：[uni-app多语言国际化](https://uniapp.dcloud.io/collocation/i18n?id=%e6%a1%86%e6%9e%b6%e5%86%85%e7%bd%ae%e7%bb%84%e4%bb%b6%e5%92%8capi%e5%9b%bd%e9%99%85%e5%8c%96)
	If you enable multilingual internationalization, you need to read first: [uni-app multilingual internationalization](https://uniapp.dcloud.io/collocation/i18n?id=%e6%a1%86%e6%9e%b6 %e5%86%85%e7%bd%ae%e7%bb%84%e4%bb%b6%e5%92%8capi%e5%9b%bd%e9%99%85%e5%8c%96)

### 14.微信登录自动获取头像
### 14. Wechat login to automatically obtain avatar
        当用户首次登录，且登录方式为微信登录时，会将微信的头像，设置为当前用户头像。注意：各家小程序平台，均要求在小程序管理后台配置小程序应用的联网服务器域名，否则无法联网。保存头像的过程是：先下载头像，再上传到云存储。请确认已正确配置download、uploadFile合法域名[详情](https://uniapp.dcloud.io/uniCloud/publish.html#useinmp)
        When a user logs in for the first time and the login method is WeChat login, the WeChat avatar will be set as the current user avatar. Note: Each applet platform requires the configuration of the network server domain name of the applet application in the applet management background, otherwise it will not be able to connect to the Internet. The process of saving the avatar is: first download the avatar, and then upload it to the cloud storage. Please confirm that the legitimate domain names of download and uploadFile have been configured correctly [Details](https://uniapp.dcloud.io/uniCloud/publish.html#useinmp)
	
## 应用启动时序介绍
## Application startup sequence introduction
文件路径： App.vue
File Path: App.vue
```js
	import initApp from '@/common/appInit.js';
	export default {
		onLaunch: function() {
			initApp();
		}
	}
```
onLaunch生命周期执行了
onLaunch lifecycle executed
1. 全局监听clientDB的err事件，
1. Globally monitor the err event of clientDB,
	- 判断是否为token过期失效等需要重新登录的问题。自动跳转到登录页面
	- Determine whether it is a problem that requires a re-login, such as token expiration. Automatically jump to the login page
	- 检测本地的token是否有效（存在且并未过期）否则跳转到登录页面
	- Check if the local token is valid (exist and not expired) otherwise jump to the login page
2. 预登录一键登录功能
2. Pre-login one-key login function
3. 执行了initApp()包含以下操作
3. Executed initApp() including the following operations
	1. 读取uni-starter.config并挂载到globalData的config下
	1. Read uni-starter.config and mount it under config of globalData
	2. 读取应用版本号，并存到globalData下
	2. Read the application version number and save it to globalData
	3. 检查是否有可更新的应用版本，决定是否启动在线更新版本
	3. Check whether there is an updateable version of the application and decide whether to start the online update version
	4. 监听设备的网络变化并以uni.showToast APi的方式提醒用户
	4. Monitor the network changes of the device and remind the user in the way of uni.showToast APi
	5. 使用[拦截器](https://uniapp.dcloud.io/api/interceptor?id=addinterceptor) 实现
	5. Use [Interceptor](https://uniapp.dcloud.io/api/interceptor?id=addinterceptor) to implement
		- 页面路由拦截，配置需强制登录的页面；打开时检测，如果token无效就自动跳转到登录页
		- Page routing interception, configure the page that needs to be forced to log in; detect when opening, and automatically jump to the login page if the token is invalid
		- 优雅实现：自动引导打开`选择图片`所需要的权限。当调用`uni.chooseImage`时检测到无权限自动开启引导。并不是在每次调用接口时处理这类问题，你可以参考该例子做更多该类场景的处理。uni-starter也会持续完善
		- Elegant implementation: Automatically guide the permissions required to open `select picture`. When calling `uni.chooseImage` it detects that there is no permission to automatically start the bootstrap. It is not to deal with this kind of problem every time the interface is called. You can refer to this example for more dealing with such scenarios. uni-starter will continue to improve


## 配置文件
## config file
uni-starter提供了`uni-starter.config.js`，可配置选择登录注册方式及优先级等，可指定该应用是否强制登录才能进入某个页面。配置项内容如下：
uni-starter provides `uni-starter.config.js`, which can be configured to select the login registration method and priority, etc., and can specify whether the application is forced to log in to enter a certain page. The configuration items are as follows:
```js
module.exports = {
	"h5": {
		"url": "https://static-76ce2c5e-31c7-4d81-8fcf-ed1541ecbc6e.bspapp.com", //	前端网页托管的域名
		 // 在h5端全局悬浮引导用户下载app的功能 更多自定义要求在/common/openApp.js中修改
		 // The function of guiding users to download the app in the global suspension on the h5 side. More customization requirements can be modified in /common/openApp.js
		"openApp": {
			//点击悬浮下载栏后打开的网页链接
			//Click the link to open the webpage after the download bar is suspended
			"openUrl": 'https://sj.qq.com/myapp/detail.htm?apkName=com.tencent.android.qqdownloader&info=6646FD239A6EBA9E2DEE5DFC7E18D867',
			//左侧显示的应用名称
			// The name of the application displayed on the left
			"appname": 'uni-starter',
			//应用的图标
			//app icon
			"logo": './static/logo.png',
		}
	},
	"mp": {
		"weixin": {
			//微信小程序原始id，微信小程序分享时
			//The original id of the WeChat applet, when the WeChat applet is shared
			"id": "gh_132465798"
		}
	},
	"router": {
		//配置需要路由拦截的页面地址，在打开这些页面之前会自动检查（无需联网）uni_id_token的值，如果token无效就自动跳转到登录页
		//Configure the page addresses that need to be intercepted by routing. Before opening these pages, the value of uni_id_token will be automatically checked (without networking), and if the token is invalid, it will automatically jump to the login page
		"needLogin": [
			"/pages/ucenter/userinfo/userinfo",
			"/uni_modules/uni-news-favorite/pages/uni-news-favorite/list",
		],
		"login": ["smsCode","univerify", "username", "weixin", "apple"],
		/* 
			这里会根据数组的第0项，决定登录方式的第一优先级是哪种登录方式。
			所有你希望拥有的登录方式这里都需要一一列举，未列举到的或设备环境不支持的登录方式将被隐藏。
			如果你需要在不同平台有不同的配置，直接用条件编译即可。
		*/
	},
	//关于应用
	//About the app
	"about": {
		//应用名称
		//Application Name
		"appName": "uni-starter",
		//应用logo
		//apply logo
		"logo": "/static/logo.png",
		//公司名称
		//Company Name
		"company": "数字天堂（北京）网络技术有限公司",
		//口号
		// slogan
		"slogan": "为开发而生",
		//政策协议
		// policy agreement
		"agreements": [{
				"title": "用户服务协议", //协议名称
				"url": "https://ask.dcloud.net.cn/protocol.html" //对应的网络链接
			},
			{
				"title": "隐私政策",
				"url": "https://ask.dcloud.net.cn/protocol.html"
			}
		],
		//应用的链接，用于分享到第三方平台和生成关于我们页的二维码
		//The link of the application, used to share to third-party platforms and generate a QR code for our page
		"download": "https://m3w.cn/uniapp"
	},
	//用于打开应用市场评分界面
	//Used to open the app market rating interface
	"marketId":{
		"ios":"id1417078253",
		"android":"123456"
	},
	//配置多语言国际化。i18n为英文单词 internationalization的首末字符i和n，18为中间的字符数 是“国际化”的简称
	//Configure multilingual internationalization. i18n is the first and last characters i and n of the English word internationalization, and 18 is the number of characters in the middle. It is the abbreviation of "internationalization"
	"i18n":{
		"enable":false //默认启用，国际化。如果你不想使用国际化相关功能，请改为false
	}
}
```

## 目录结构@catalogue
## Directory structure @catalogue
<pre style="color:#FFF;">
uni-starter
├─uniCloud-aliyun	
│	├─cloudfunctions 云函数目录
│ ├─cloudfunctions Cloud function directory
│	|	├─common 公共模块
│ | ├─common Common module
│	│	|	├─uni-config-center		uni-starter的服务端配置中心，项目所有云函数的配置在这里填写 <a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=4425">详情</a>
│ │ | ├─uni-config-center The server configuration center of uni-starter, the configuration of all cloud functions of the project fill in the <a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=4425">details</a> here
│	│	|	|	├─index.js			config-center入口文件
│ │ | | ├─index.js config-center entry file
│	│	|	|	└─uni-id			uni-id模块配置目录
│ │ | | └─uni-id uni-id module configuration directory
│	│	|	|		├─config.json	uni-id对应的配置数据：微信登录、一键登录、短信验证码登录等key都在这里填写<a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=4425">详情</a>
│ │ | | ├─config.json The configuration data corresponding to uni-id: WeChat login, one-key login, SMS verification code login and other keys are all filled in the <a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=4425">details</a> here
│	│	|	|		└─file.cert		uni-id依赖的配置文件,假如你使用微信发红包功能，需要的证书文件就是放到这里
│ │ | | └─file.cert The configuration file that uni-id depends on, if you use the WeChat red envelope function, the required certificate file is put here
│	|	|	└───uni-id				uni-id用户体系 <a target="_blank" href="https://uniapp.dcloud.io/uniCloud/uni-id-summary">详情</a>
│ | | └───uni-id uni-id user system <a target="_blank" href="https://uniapp.dcloud.io/uniCloud/uni-id-summary">details</a>
│	|	├─uni-analyse-searchhot		云端一体搜索模板依赖的云函数 <a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=3851">详情</a>
│ | ├─uni-analyse-searchhot <a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=3851">Details</a> of cloud functions that the cloud integrated search template depends on
│	|	└─uni-id-cf				用户中心云函数，实现用户注册、修改密码、发送验证码、快捷登录（微信、短信、账户、一键登录）
│ | └─uni-id-cf User center cloud function, realize user registration, password modification, sending verification code, quick login (WeChat, SMS, account, one-key login)
│	└──database						云数据目录
│ └──database cloud data directory
│		├─db_init.json				db_init.json初始化数据库文件，其中不再包含schema <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=db-init">详情</a>
│ ├─db_init.json db_init.json initializes the database file, which no longer contains schema <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=db-init">details</a>
│		├─opendb-app-versions.schema.json		应用版本，表结构文件
│ ├─opendb-app-versions.schema.json Application version, table structure file
│		├─opendb-banner.schema.json	        	横幅数据表，表结构文件
│ ├─opendb-banner.schema.json Banner data table, table structure file
│		├─opendb-feedback.schema.json	        意见反馈表，表结构文件
│ ├─opendb-feedback.schema.json Feedback form, table structure file
│		├─opendb-news-articles.schema.json	    新闻文章表，表结构文件
│ ├─opendb-news-articles.schema.json News article table, table structure file
│		├─opendb-news-categories.schema.json	新闻分类表，表结构文件
│ ├─opendb-news-categories.schema.json News category table, table structure file
│		├─opendb-news-comments.schema.json		新闻评论表，表结构文件
│ ├─opendb-news-comments.schema.json News comment table, table structure file
│		├─opendb-news-favorite.schema.json		新闻收藏表，表结构文件
│ ├─opendb-news-favorite.schema.json News favorite table, table structure file
│		├─opendb-search-hot.schema.json			热门搜索表，表结构文件
│ ├─opendb-search-hot.schema.json popular search table, table structure file
│		├─opendb-search-log.schema.json			搜索记录表，表结构文件
│ ├─opendb-search-log.schema.json search log table, table structure file
│		├─opendb-verify-codes.schema.json		验证码表，表结构文件
│ ├─opendb-verify-codes.schema.json Verification code table, table structure file
│		├─uni-id-log.schema.json	        	登录日志表，表结构文件
│ ├─uni-id-log.schema.json log log table, table structure file
│		├─uni-id-scores.schema.json	        	用户积分表，表结构文件
│ ├─uni-id-scores.schema.json User score table, table structure file
│		└─uni-id-users.schema.json	        	用户表，表结构文件
│ └─uni-id-users.schema.json User table, table structure file
├─pages										业务页面文件存放的目录
├─pages The directory where the business page files are stored
│	├─common						
│	│	└─webview							webview目录
│ │ └─webview webview directory
│	│		└─webview.vue					webview页面	用于实现跨端的web页面浏览
│ │ └─webview.vue webview page is used to realize cross-end web page browsing
│	├─grid
│	│	└─grid.vue	 						带宫格和banner的示例页面
│ │ └─grid.vue Example page with grid and banner
│	├─list
│	│	├─list.vue	 						新闻列表
│	│	├─search
│	│	│	└─search						云端一体搜索插件
│ │ │ └─search Cloud integrated search plugin
│	│	└─detail.vue						新闻详情
│ │ └─detail.vue News Details
│	├─ucenter
│	│	├─about								关于我们
│ │ ├─about about us
│	│	│	└─about
│	│	├─login-page						登录模块
│ │ ├─login-page login module
│	|	|	├─common						登录模块公共库
│ | | ├─common Login module public library
│	│	│	│	├─login-page.css			公共样式库
│ │ │ │ ├─login-page.css public style library
│	│	│	│	├─login-page.mixin.js		公共mixin
│ │ │ │ ├─login-page.mixin.js public mixin
│	│	│	│	└─loginSuccess.js			公共登录成功后操作
│ │ │ │ └─loginSuccess.js Public operation after successful login
│	|	|	├─index							短信验证码登录，手机号码输入页面
│ | | ├─index SMS verification code login, mobile phone number input page
│	|	|	├─phone-code					短信验证码登录，验证码输入页面
│ | | ├─phone-code SMS verification code login, verification code input page
│	|	|	├─pwd-login						账户密码登录
│ | | ├─pwd-login Account password login
│	|	|	├─pwd-retrieve					密码重置
│ | | ├─pwd-retrieve password reset
│	│	│	└─register						注册账户模块
│ │ │ └─register Register account module
│	│	│		├─validator.js
│	│	│		└─register.vue
│	│	├─read-news-log						新闻阅读记录
│ │ ├─read-news-log News reading record
│	│	│	└─read-news-log
│	│	├─settings						
│	│	│	├─dc-push
│	│	│	│	└─push.js					push权限操作SDK
│ │ │ │ └─push.js push permission operation SDK
│	│	│	└─settings.vue					app设置
│ │ │ └─settings.vue app settings
│	│	├─userinfo							用户个人信息
│ │ ├─userinfo User personal information
│	│	│	├─bind-mobile
│	│	│	│	└─bind-mobile.vue			绑定手机号码
│ │ │ │ └─bind-mobile.vue bind mobile number
│	│	│	├─limeClipper					图片裁剪插件,来源[limeClipper](https://ext.dcloud.net.cn/plugin?id=3594) @作者： 陌上华年
│ │ │ ├─limeClipper image cropping plugin, source [limeClipper](https://ext.dcloud.net.cn/plugin?id=3594) @Author: Moshang Huanian
│	│	│	│	├─images
│	│	│	│	│	├─photo.svg
│	│	│	│	│	└─rotate.svg
│	│	│	│	├─index.css
│	│	│	│	├─limeClipper.vue
│	│	│	│	├─README.md
│	│	│	│	└─utils.js
│	│	│	├─main.js
│	│	│	├─cropImage.vue	引用limeClipper的图片裁剪模块，为了方便二开可能会出现兼容`vue`与`nvue`，所以做成了`页面`而不是`组件`
│ │ │ ├─cropImage.vue refers to the image cropping module of limeClipper. In order to facilitate the second opening, it may be compatible with `vue` and `nvue`, so it is made a `page` instead of a `component`
│	│	│	└─userinfo.vue
│	|	└─ucenter.vue						用户中心
│ | └─ucenter.vue User Center
│	|
├─static	 						存放应用引用的本地静态资源（如图片、视频等）的目录，<b>注意：</b>静态资源只能存放于此
├─static The directory where the local static resources (such as pictures, videos, etc.) referenced by the application are stored. <b>Note:</b> static resources can only be stored here
├─uni_modules						存放[uni_module](/uni_modules)规范的插件。
├─uni_modules Stores plugins of the [uni_module](/uni_modules) specification.
├─uni_modules_tools					uni_modules插件上传辅助脚本 <a href="https://ext.dcloud.net.cn/plugin?id=5256">详情</a>。
├─uni_modules_tools uni_modules plugin upload auxiliary script <a href="https://ext.dcloud.net.cn/plugin?id=5256">details</a> .
├─main.js							Vue初始化入口文件
├─main.js Vue initialization entry file
├─App.vue							应用配置，用来配置App全局样式以及监听 <a href="/collocation/frame/lifecycle?id=应用生命周期">应用生命周期</a>
├─App.vue application configuration, used to configure the global style of the App and monitor <a href="/collocation/frame/lifecycle?id=%E5%BA%94%E7%94%A8%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">the application life cycle</a>
├─uni-starter.config				uni-starter的前端的配置文件，项目所有模块的配置在这里填写。详见该文件的代码注释。
├─uni-starter.config The front-end configuration file of uni-starter, the configuration of all modules of the project is filled in here. See the code comments in this file for details.
├─manifest.json	 					配置应用名称、appid、logo、版本等打包信息，<a href="/collocation/manifest">详见</a>
├─manifest.json Configure the packaging information such as the application name, appid, logo, version, etc. For details, <a href="/collocation/manifest">see</a>
└─pages.json						配置页面路由、导航条、选项卡等页面类信息，<a href="/collocation/pages">详见</a>
└─pages.json Configure page class information such as page routing, navigation bar, tabs, <a href="/collocation/pages">see</a>
<a href="/collocation/pages">└─pages.json</a> Configure page information such as page routing, navigation bar, tab, etc.
</pre>
完整的uni-app目录结构[详情](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)
Complete uni-app directory structure [details](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)

## 常见API示范
## Common API demonstration
1. 判断当前用户是否拥有某角色`uniIDHasRole` 演示页面：`/pages/grid/grid` [API文档详情：](https://uniapp.dcloud.io/api/global?id=uniidhasrole)
1. Determine whether the current user has a role `uniIDHasRole` Demo page: `/pages/grid/grid` [API documentation details:](https://uniapp.dcloud.io/api/global?id=uniidhasrole)
2. 指纹解锁、人脸解锁  演示页面：`/pages/ucenter/settings/settings` [API文档详情：](https://uniapp.dcloud.io/api/system/authentication)
2. Fingerprint unlock, face unlock Demo page: `/pages/ucenter/settings/settings` [API document details:](https://uniapp.dcloud.io/api/system/authentication)

## 注意事项
## Precautions
1. 真机运行需要制作自定义基座，制作后选择运行到自定义基座
1. You need to make a custom base for real machine operation. After making it, choose to run to the custom base.
2. 苹果登录的图标，需要满足苹果应用市场的审核规范请勿随便修改；如需修改请先阅读:[Sign in with Apple Button](https://appleid.apple.com/signinwithapple/button)
2. The icon of Apple login needs to meet the review specifications of the Apple App Market. Please do not modify it casually; if you need to modify it, please read: [Sign in with Apple Button](https://appleid.apple.com/signinwithapple/button)
3. 应用登录功能，默认不勾选同意隐私权限是响应安卓应用市场的规范；请勿修改该逻辑。
3. For the application login function, the consent to privacy permission is not checked by default to respond to the specifications of the Android application market; please do not modify this logic.

## FAQ：常见问题
##FAQ: Frequently Asked Questions
1. 提示“公共模块uni-id缺少配置信息”解决方案：在cloudfunctions右键‘上传所有云函数、公共模块及actions’之后，需要在cloudfunctions -> common -> uni-config-center 目录单独上传一次，右键‘上传公共模块’。
1. Prompt "common module uni-id lacks configuration information" solution: right click on cloudfunctions and 'upload all cloud functions, public modules and actions', you need to upload it separately in cloudfunctions -> common -> uni-config-center directory, Right click 'Upload Public Module'.
2. 本项目代码可以商用，无需为DCloud付费。但不能把本项目的代码改造用于非uni-app和uniCloud的技术体系。即，不能将后台改成php、java等其他后台，这将违反使用许可协议。
2. The code of this project can be used for commercial use, and there is no need to pay for DCloud. However, the code of this project cannot be used for non-uni-app and uniCloud technical systems. That is, the background cannot be changed to other backgrounds such as php, java, etc., which will violate the license agreement.

## 相关案例
## related case
[
	![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/dd4c366f-6165-46c0-8500-5a679d7e5463.jpg)
](https://ext.dcloud.net.cn/search?q=uni-starter)
（点击跳转到案例列表）
(click to jump to the case list)


## 第三方插件（感谢插件作者，排名不分前后）：
## Third-party plugins (thanks to the plugin authors, the rankings are in no particular order):
1. 图片裁剪 [limeClipper](https://ext.dcloud.net.cn/plugin?id=3594) @作者： 陌上华年
1. Image cropping [limeClipper](https://ext.dcloud.net.cn/plugin?id=3594) @Author: Moshanghuanian
2. 二维码生成 [Sansnn-uQRCode](https://ext.dcloud.net.cn/plugin?id=1287) @作者： 3snn
2. QR code generation [Sansnn-uQRCode](https://ext.dcloud.net.cn/plugin?id=1287) @Author: 3snn
3. clipboard.js [clipboard](https://clipboardjs.com/)