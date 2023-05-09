**一键生成iOS通用链接**

### 背景介绍：

> Universal Link是苹果在WWDC 2015上提出的iOS 9的新特性之一。此特性类似于深层链接，并能够方便地通过打开一个Https链接来直接启动您的客户端应用(手机有安装App)。对比以往所使用的URLSheme, 这种新特性在实现web-app的无缝链接时,能够提供极佳的用户体验。
> 使用前请阅读[苹果官方文档](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1)。

> 由于苹果iOS 13系统版本安全升级，微信SDK1.8.6版本要求支持Universal Links方式跳转，以便进行合法性校验，提升安全性。更多详情请参考[微信官方说明](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)

大白话：以前你的APP要打开其他APP是[通过URLScheme](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.launchApplication)实现，后来苹果提出用Https链接来启动，手机上对应的app（已安装），更方便与web-app的无缝对接。微信响应了这个方案。所以大家开发的APP无论是微信登录、微信支付，还是微信分享等一切会跳转到微信，再跳回来的场景，需要提供这个链接。要不然你的应用打开了微信，微信就打不开你的应用。

如果不配置通用链接，使用新版本HX提交云端打包会失败，提示以下错误信息：

``` javascript
Error code = -5000
Error message: 
Error: not set parameter 'UniversalLinks' @'oauth-weixin'
```

传统方式配置通用链接需要:

1. 在苹果开发者中心：开启Associated Domains服务
2. 获取相关参数，手动创建apple-app-site-association文件
3. 部署apple-app-site-association文件到自己的云服务器，配置SSL证书解析域名
4. 然后手动在manifest.json中配置Associated Domains（域名）
5. 粘贴通用链接到对应权限模块
6. 在微信开放平台配置通用链接

其中需要注意的细节较多，且调试起来困难繁琐，困扰了大量开发者。

现在通过HBuilderX（3.1.9版起）云打包，支持自动生成apple-app-site-association文件，并自动托管到：自带cdn、ssl等服务的“免费”的云服务空间[uniCloud的前端网页托管](https://uniapp.dcloud.io/uniCloud/hosting)，自动完成manifest.json中的相关配置。用自动化技术替代了，如上所示传统方式令人苦恼的（2-5）4个步骤；只需如下三步直接搞定通用链接。


### 第一步：开启Associated Domains服务

登录[苹果开发者网站](https://developer.apple.com/)，在“Certificates, Identifiers & Profiles”页面选择“Identifiers”中选择对应的App ID，确保开启Associated Domains服务
![](https://web-assets.dcloud.net.cn/unidoc/zh/ulink1.png)

**开启Associated Domains服务后需要重新生成profile文件，提交云端打包时使用**

### 第二步骤 自动生成通用连接(Universal Links)
HBuilderX (3.2.0 版本起) 新增QQ互联和新浪微博开放平台的通用链接的设置。以微信模块为例,QQ与微博与之类似。

打开项目的manifest.json文件，在“(App) SDK配置”项中的微信登录（微信分享、微信支付）下的“iOS平台通用链接（Universal Links）”中，
点击如图所示【自动生成】
![](https://web-assets.dcloud.net.cn/unidoc/zh/%E7%94%9F%E6%88%90%E9%80%9A%E7%94%A8%E9%93%BE%E6%8E%A5%E6%95%99%E7%A8%8B1.jpg)

* 注意您必须先开通"uniCloud(阿里云版)云服务空间和开通前端网页托管"[点此查看开通教程](https://ask.dcloud.net.cn/article/38951),按提示完成操作即可。

![](https://web-assets.dcloud.net.cn/unidoc/zh/%E7%94%9F%E6%88%90%E9%80%9A%E7%94%A8%E9%93%BE%E6%8E%A5%E6%95%99%E7%A8%8B2.jpg)

* 注意：通用链接默认域名仅供测试使用，访问频次限制60次/分钟，请勿在正式发行的项目中使用。正式项目，务必绑定自己的域名（顶级域名，二级域名均可）
* 如何绑定自己的域名详情：[https://uniapp.dcloud.io/uniCloud/hosting?id=domain](https://uniapp.dcloud.io/uniCloud/hosting?id=domain)

![](https://web-assets.dcloud.net.cn/unidoc/zh/%E9%85%8D%E7%BD%AE%E9%80%9A%E7%94%A8%E9%93%BE%E6%8E%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D.jpg)

### 第三步：在第三方开放平台配置通用链接

#### 微信

打开微信[开放平台](https://open.weixin.qq.com/)，在“管理中心”页面的“移动应用”下找到已经申请的应用（没有申请应用请点击“创建移动应用”新建应用），点击“查看”打开应用详情页面。
在“开发信息”栏后点击修改，在“iOS应用”下的“Universal Links”项中配置应用的通用链接，如下图所示：
![](https://ask.dcloud.net.cn/uploads/article/20191008/e933f7ef8ff078bf05e28a24efee74bd.png)

#### QQ

打开QQ[开放平台](https://connect.qq.com/index.html)，在“管理中心”页面的“移动应用”下找到已经申请的应用（没有申请应用请点击“创建移动应用”新建应用），点击“查看”打开应用详情页面。
在“开发信息”栏后点击修改，在“iOS应用”下的“Universal Links”项中配置应用的通用链接，如下图所示：
![](https://img-cdn-aliyun.dcloud.net.cn/client/ulink/QQ.jpeg)
* 注意：QQ开放平台在填写时 只需要填写到host,后边的path QQ会自动生成,比如 HBuilder中一键生成 ```https://static-fa42aa5f-xxxxxxx-xxxxxxxx.bspapp.com/qq_conn/11111233333/``` 只需要填写 ```https://static-fa42aa5f-xxxxxxx-xxxxxxxx.bspapp.com/```,具体请查看 [QQ 填写及校验universallinks](https://wiki.connect.qq.com/%E5%A1%AB%E5%86%99%E5%8F%8A%E6%A0%A1%E9%AA%8Cuniversallinks)

#### 微博

打开微博[开放平台](https://open.weibo.com/)，在“我的应用”下找到已经申请的应用，点击“查看”打开应用详情页面。
在“应用信息”栏后点击修改，在“iOS应用”下的“Universal Links”项中配置应用的通用链接，如下图所示：![](https://img-cdn-aliyun.dcloud.net.cn/client/ulink/weibo.jpeg)

至此，就已经完成了通用链接的配置全过程，云打包后生效。

### 其他相关

#### 云资源消耗说明

托管通用链接所资源消耗的云服务器资源量非常小，文件小于0.5kb，仅你的iOS版App在：安装、登录、分享、支付时才会被联网请求（且设备会缓存通用链接的文件内容，缓存有效期内不会再次联网请求）。而阿里云正式版-开发者版（免费版）的前端网页托管，免费额度为：1GB/月；普通项目的服务空间，如果仅托管“通用链接”使用免费版也够用。

#### 通用链接迁移指南

阿里云公测版即将下线，需要将通用链接文件迁移到新的正式版服务空间的用户参考以下步骤：

> uniCloud阿里云正式版-付费版，支持“一键迁移”（即将上线）可省略步骤3和4

1. 解绑域名与旧服务空间的绑定关系

	在[uniCloud web控制台](https://unicloud.dcloud.net.cn/)打开旧的服务空间 -> 前端网页托管 -> 参数配置 -> 域名信息 配置网站域名 -> 点击删除

2. 绑定域名到新服务空间  

	在[uniCloud web控制台](https://unicloud.dcloud.net.cn/)打开新服务空间 -> 前端网页托管 -> 参数配置 -> 域名信息 配置网站域名 -> 添加域名(添加后CNAME的值不会马上出现，需要过一会后点击右上角的刷新按钮，直至出现) -> 解析域名

3. 指定要生成通用链接的服务空间  

	在HBuilderX中点击项目的 manifest.json -> App模块配置 OAuth（登录鉴权）-> 微信登录（其他模块同理），点击自动生成 -> 选择“新开通的服务空间“ -> 下一步 -> 自定义域名 -> 完成

4. 自动生成与部署
	
	直接提交云打包即可。注意：提交云打包，只是为了触发：“生成新的通用文件并自动部署到新服务空间”，用户的客户端无需更新。

#### 客户端处理通用链接。

可通过5+ API的plus.runtime.launcher判断应用启动来源，如果其值为"uniLink"则表示通过通用链接启动应。这时可通过5+ API的plus.runtime.arguments获取启动参数，通用链接启动的情况将返回完整的通用链接地址。
例：HBuilderX中自带的默认真机运行基座HBuilderX注册的通用链接:[https://demo.dcloud.net.cn/ulink/](https://demo.dcloud.net.cn/ulink/)

#### 通用链接生成原理：

1. 选择云空间获取云空间的默认/自定义域名
2. 按提前制定的规范（uni-universallinks/DCloud appid）拼接URL
3. 根据现有参数自动生成通用链接相关参数到manifest.json
4. 发起云打包时读取证书的profile文件生成apple-app-site-association并部署到前面选定的云空间根目录的.well-known目录下(请勿删除该文件，否则通用链接将失效)

##### 注意事项：

* 通用链接指向的路径可以为空，他只是一种信息传递方式。可以简单地理解为：通过解析URL的“/”后的参数到apple-app-site-association中找到指定的包名并唤醒对应的APP
* 通用链接内容保存在manifest.json中"云打包后生效"，被手机读取的时机是应用被安装的时候。如果你的通用链接内容有变化，你需要重新提交云打包，并重新安装一次应用才能生效
* 通用链接最终托管在服务端，如有变动注意缓存的清理，例如尝试重启手机等操作

> 如果你是本地离线打包或者由于某种原因你需要用传统的方式：私有化部署服务器来托管apple-app-site-association文件创建通用链接。你仍然可以通过手动配置manifest.json实现。详情：[https://ask.dcloud.net.cn/article/36393#unilink](https://ask.dcloud.net.cn/article/36393#unilink)

#### 常见问题

1.为什么我打开通用链接提示：`The requested file was not found on this server.`

这是正常现象。通用链接并不要求是一个有效的路径，换句话说这个链接指向的目录允许为空。原理是访问这个链接时，iphone检测到当前域名为通用链接对应的域名，就读取域名服务器下的apple-app-site-association，然后根据域名后面的路径名称，验证并解析出要打开的app包名并唤醒对应的app。

2.如何验证通用链接已经生效，有什么表现或者测试方案

你可以将通用链接输入到iphone自带Safari浏览器中，下拉即可看到通用链接对应到应用名称和一个打开按钮，点击按钮即可直接在浏览器打开对应的APP。详情：[点此查看演示视频](https://web-assets.dcloud.net.cn/unidoc/zh/%E9%80%9A%E7%94%A8%E9%93%BE%E6%8E%A5%E6%BC%94%E7%A4%BA%E8%A7%86%E9%A2%91.mp4)


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