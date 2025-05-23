# iOS平台Capabilities配置  

在XCode中可给工程添加设置Capabilities，如图所示：  
![](https://native-res.dcloud.net.cn/images/uniapp/ios/xcode-capabilities.png)

配置后，会更新XCode工程的.entitlements和Info.plist文件，此文章介绍如何在HBuilderX中配置iOS平台的Capabilities。

## HBuilderX4.18及以上版本

**注意：uni-app x 项目只支持此方式配置** 

将 XCode 工程中的 .entitlements 文件中的内容配置到 `iOS原生应用配置文件和资源` 的 `UniApp.entitlements` 文件，详情参考：[配置文件UniApp.entitlements](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#entitlements)  

将 XCode 工程中的 Info.plist 文件中的内容配置到 `iOS原生应用配置文件和资源` 的 `Info.plist` 文件，详情参考：[配置文件 Info.plist](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#infoplist)  



## HBuilderX4.18以前版本
将XCode工程中的 .entitlements 和 Info.plist 文件中的内容转换为json格式数据配置到manifest.json文件中，使得HBuilderX云端打包工程设置相应的Capabilities。

打开项目的manifest.json文件，在源码视图中进行配置  
- 5  APP项目  
  在"plus" -> "distribute" -> "apple"添加"capabilities"节点  
- uni-app项目  
  在"app-plus" -> "distribute" -> "ios"添加"capabilities"节点  

```js
	"capabilities": {
		"entitlements": {	// 合并到工程entitlements文件的数据（json格式）
		},
		"plists": {			// 合并到工程Info.plist文件的数据（json格式）
		}
	},
```
其中entitlements数据（json）将转换成XCode工程中entitlements文件的数据（字典格式）
plists节点数据将转换成XCode工程中Info.plist文件的数据（字典格式）


<a id="unilink"/>

## 通用链接（Universal Link）配置教程

**为了简化配置使用通用链接，推荐使用UniCloud快速生成通用链接，详情参考：[一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links)**  

Universal Link是苹果在WWDC 2015上提出的iOS 9的新特性之一。此特性类似于深层链接，并能够方便地通过打开一个Https链接来直接启动您的客户端应用(手机有安装App)。对比起以往所使用的URL Sheme, 这种新特性在实现web-app的无缝链接时能够提供极佳的用户体验。
使用前请阅读[苹果官方文档](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1)  
**使用通用链接（Universal Link）必须要有域名，下面的配置中将要用到**

### 第一步：开启Associated Domains服务
登录苹果开发者网站，在“Certificates, Identifiers & Profiles”页面选择“Identifiers”中选择对应的App ID，确保开启Associated Domains服务  
![](https://native-res.dcloud.net.cn/images/uniapp/ios/apple-capabilities.png)

**开启Associated Domains服务后需要重新生成profile文件，提交云端打包时使用**

<a id="associatedDomains"/>

### 第二步：配置Associated Domains（域名）

#### uni-app/5+ App项目  
**使用HBuilderX可视化界面配置**  
打开项目的manifest.json文件，切换到“App常用其它设置”项，在“iOS设置”下的“关联域（Associated Domains）”中进行配置：  
![](https://native-res.dcloud.net.cn/images/uniapp/ios/hx-ass-domains.png)

**使用HBuilderX源码视图配置**  
打开项目的manifest.json文件，切换到“源码视图”项，在uni-app项目在"app-plus" -> "distribute" -> "ios" -> "capabilities" -> "entitlements"节点下添加"com.apple.developer.associated-domains"字段，字段值为字符串数组，每个字符串为要关联的域名：  
```json
	"capabilities": {
		"entitlements": {
			"com.apple.developer.associated-domains": [
				"applinks:demo.dcloud.net.cn"
			]
		}
	}
```
**其中demo.dcloud.net.cn是应用通用链接的域名（这里不要包含path），请修改为自己应用要使用的域名**

> 5+ App项目源码视图配置节点为："plus" -> "distribute" -> "apple" -> "capabilities" -> "entitlements"

保存后提交云端打包生效。

#### uni-app x项目  
uni-app x项目不再支持maniest.json中配置，需在项目下创建 "nativeResources" -> "ios" 目录，添加`UniApp.entitlements`文件配置。  
详情参考：[https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#domains](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#domains)


**本地离线打包配置**  
在原生XCode工程中配置通用链接域名（使用HBuilderX云端打包跳过）  
![](https://native-res.dcloud.net.cn/images/uniapp/ios/xcode-ass-domains1.png)  

![](https://native-res.dcloud.net.cn/images/uniapp/ios/xcode-ass-domains2.png)  

**HBuilderX中自带的默认真机运行基座HBuilderX注册的通用链接为：https://demo.dcloud.net.cn/ulink/**

### 第三步：服务器配置apple-app-site-association文件
需要在上面域名对应的服务器上放apple-app-site-association文件。
apple-app-site-association文件配置如下：
```javascript
{
    "applinks": {
        "apps": [],
        "details": [
            {
                "appID": "G56NU654TV.io.dcloud.HBuilder",
                "paths": [ "/ulink/*"]
            }
        ]
    }
}
```
- apps
必须对应一个空的数组
- appID
由前缀和ID两部分组成,可以登录苹果开发者网站，在“Certificates, Identifiers & Profiles”页面选择“Identifiers”中选择对应的App ID查看
- paths
对应域名中的path，用于过滤可以跳转到App的链接，支持通配符*，?以及NOT进行匹配，匹配的优先级是从左至右依次降低

**注意：不要直接拷贝使用上面的示例，必须根据自己应用的配置修改**  
把配置好的apple-app-site-association文件上传到你自己的服务器，确保通过https://demo.dcloud.net.cn/.well-known/apple-app-site-association可访问。  

**其中demo.dcloud.net.cn为上面配置的域名**  
应用安装后会通过访问上面的url向系统注册应用的通用链接。

> 推荐方案：将apple-app-site-association文件部署到，免费的阿里云版unicloud的 [前端网页托管](https://uniapp.dcloud.io/uniCloud/hosting?id=%e7%ae%80%e4%bb%8b) 

### app端处理通用链接

#### uni-app/5+ App项目  
可通过5+ API的[plus.runtime.launcher](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.launcher)判断应用启动来源，如果其值为"uniLink"则表示通过通用链接启动应。
这时可通过5+ API的[plus.runtime.arguments](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.arguments)获取启动参数，通用链接启动的情况将返回完整的通用链接地址。

#### uni-app x项目  
在 App.uvue 文件的应用生命周期 [onLaunch](https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#onlaunch) 和 [onShow](https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#onshow) 回调参数中可通过 appLink 属性获取通用链接地址。

也可以通过 API： [uni.getLaunchOptionsSync](https://doc.dcloud.net.cn/uni-app-x/api/launch.html) 和 [uni.getEnterOptionsSync](https://doc.dcloud.net.cn/uni-app-x/api/launch.html#getenteroptionssync) 返回值中的 appLink 属性获取通用链接地址。


### 注意事项
- apple-app-site-association文件不需要.json后缀
- 对apple-app-site-association文件的请求仅在App第一次启动时进行，如果此时网络连接出了问题apple会缓存请求，等有网的时候再去请求，如果没有请求此文件通用连接会失效
- iOS 9.2开始，在相同的domain内Universal Links不生效，必须要跨域才生效

