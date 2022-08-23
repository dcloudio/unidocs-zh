HBuilderX2.3.0开始云端打包支持配置XCode中的Capabilities，在XCode中可给工程添加设置Capabilities，如图所示：  
![](https://native-res.dcloud.net.cn/images/uniapp/ios/xcode-capabilities.png)

配置后，会更新XCode工程的.entitlements和Info.plist文件，可将以上文件内容转换为json格式数据配置到manifest.json文件中，使得HBuilderX云端打包工程设置相应的Capabilities。
After configuration, the .entitlements and Info.plist files of the XCode project will be updated. The content of the above files can be converted into json format data and configured in the manifest.json file, so that the HBuilderX cloud packaging project can set the corresponding Capabilities.

打开项目的manifest.json文件，在源码视图中进行配置  
Open the manifest.json file of the project and configure it in the source view
- 5  APP项目  
- 5 APP items
  在"plus" -> "distribute" -> "apple"添加"capabilities"节点  
  Add "capabilities" node in "plus" -> "distribute" -> "apple"
- uni-app项目  
- uni-app project
  在"app-plus" -> "distribute" -> "ios"添加"capabilities"节点  
  Add "capabilities" node in "app-plus" -> "distribute" -> "ios"

```js
	"capabilities": {
		"entitlements": {	// 合并到工程entitlements文件的数据（json格式）
		},
		"plists": {			// 合并到工程Info.plist文件的数据（json格式）
		}
	},
```
其中entitlements数据（json）将转换成XCode工程中entitlements文件的数据（字典格式）
The entitlements data (json) will be converted into the data (dictionary format) of the entitlements file in the XCode project
plists节点数据将转换成XCode工程中Info.plist文件的数据（字典格式）
The plists node data will be converted into the data of the Info.plist file in the XCode project (dictionary format)


<a id="unilink"/>

### 通用链接（Universal Link）
### Universal Link

**为了简化配置使用通用链接，推荐使用UniCloud快速生成通用链接，详情参考：[一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links)**  
**In order to simplify the configuration and use universal links, it is recommended to use UniCloud to quickly generate universal links. For details, please refer to: [Generate iOS Universal Links with One Click](https://uniapp.dcloud.io/api/plugins/universal-links)**

Universal Link是苹果在WWDC 2015上提出的iOS 9的新特性之一。此特性类似于深层链接，并能够方便地通过打开一个Https链接来直接启动您的客户端应用(手机有安装App)。对比起以往所使用的URL Sheme, 这种新特性在实现web-app的无缝链接时能够提供极佳的用户体验。
Universal Link is one of the new features of iOS 9 that Apple presented at WWDC 2015. This feature is similar to deep linking, and can easily launch your client application (the mobile phone has an installed app) by opening an Https link. Compared with the URL Sheme used in the past, this new feature can provide an excellent user experience when implementing seamless web-app links.
使用前请阅读[苹果官方文档](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1)  
Please read [Apple's official documentation](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1) before use
**使用通用链接（Universal Link）必须要有域名，下面的配置中将要用到**
**Using Universal Link (Universal Link) must have a domain name, which will be used in the following configuration**

#### 第一步：开启Associated Domains服务
#### Step 1: Open the Associated Domains service
登录苹果开发者网站，在“Certificates, Identifiers & Profiles”页面选择“Identifiers”中选择对应的App ID，确保开启Associated Domains服务  
![](https://native-res.dcloud.net.cn/images/uniapp/ios/apple-capabilities.png)

**开启Associated Domains服务后需要重新生成profile文件，提交云端打包时使用**
**After enabling the Associated Domains service, you need to regenerate the profile file and use it when submitting the cloud package**

<a id="associatedDomains"/>

#### 第二步：配置Associated Domains（域名）
#### Step 2: Configure Associated Domains

**使用HBuilderX可视化界面配置**  
**Configuration using HBuilderX visual interface**
打开项目的manifest.json文件，切换到“App常用其它设置”项，在“iOS设置”下的“关联域（Associated Domains）”中进行配置：  
![](https://native-res.dcloud.net.cn/images/uniapp/ios/hx-ass-domains.png)

**使用HBuilderX源码视图配置**  
**Use HBuilderX source view configuration**
打开项目的manifest.json文件，切换到“源码视图”项，在uni-app项目在"app-plus" -> "distribute" -> "ios" -> "capabilities" -> "entitlements"节点下添加"com.apple.developer.associated-domains"字段，字段值为字符串数组，每个字符串为要关联的域名：  
Open the manifest.json file of the project, switch to the "Source View" item, and add it under the "app-plus" -> "distribute" -> "ios" -> "capabilities" -> "entitlements" node in the uni-app project "com.apple.developer.associated-domains" field, the field value is an array of strings, each string is the domain name to be associated:
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
** where demo.dcloud.net.cn is the domain name of the application universal link (do not include path here), please modify it to the domain name to be used by your own application**

> 5+ App项目源码视图配置节点为："plus" -> "distribute" -> "apple" -> "capabilities" -> "entitlements"
> 5+ App project source view configuration nodes are: "plus" -> "distribute" -> "apple" -> "capabilities" -> "entitlements"

保存后提交云端打包生效。
After saving, submit the cloud package to take effect.

**本地离线打包配置**  
**Local offline packaging configuration**
在原生XCode工程中配置通用链接域名（使用HBuilderX云端打包跳过）  
![](https://native-res.dcloud.net.cn/images/uniapp/ios/xcode-ass-domains1.png)  

![](https://native-res.dcloud.net.cn/images/uniapp/ios/xcode-ass-domains2.png)  

**HBuilderX中自带的默认真机运行基座HBuilderX注册的通用链接为：https://demo.dcloud.net.cn/ulink/**
**The general link for HBuilderX registration on the default real machine running base that comes with HBuilderX is: https://demo.dcloud.net.cn/ulink/**

#### 第三步：服务器配置apple-app-site-association文件
#### Step 3: Server configuration apple-app-site-association file
需要在上面域名对应的服务器上放apple-app-site-association文件。
You need to put the apple-app-site-association file on the server corresponding to the above domain name.
apple-app-site-association文件配置如下：
The apple-app-site-association file is configured as follows:
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
must correspond to an empty array
- appID
由前缀和ID两部分组成,可以登录苹果开发者网站，在“Certificates, Identifiers & Profiles”页面选择“Identifiers”中选择对应的App ID查看
It consists of a prefix and an ID. You can log in to the Apple developer website and select the corresponding App ID in the "Identifiers" page of the "Certificates, Identifiers & Profiles" page to view
- paths
对应域名中的path，用于过滤可以跳转到App的链接，支持通配符*，?以及NOT进行匹配，匹配的优先级是从左至右依次降低
The path in the corresponding domain name is used to filter the links that can jump to the App. Wildcards *, ? and NOT are supported for matching. The matching priority is descended from left to right.

**注意：不要直接拷贝使用上面的示例，必须根据自己应用的配置修改**  
**Note: Do not copy and use the above example directly, you must modify it according to the configuration of your own application**
把配置好的apple-app-site-association文件上传到你自己的服务器，确保通过https://demo.dcloud.net.cn/.well-known/apple-app-site-association可访问。  
Upload the configured apple-app-site-association file to your own server and make sure it is accessible via https://demo.dcloud.net.cn/.well-known/apple-app-site-association.

**其中demo.dcloud.net.cn为上面配置的域名**  
**Where demo.dcloud.net.cn is the domain name configured above**
应用安装后会通过访问上面的url向系统注册应用的通用链接。
After the application is installed, it will register the universal link of the application with the system by visiting the above url.

> 推荐方案：将apple-app-site-association文件部署到，免费的阿里云版unicloud的 [前端网页托管](https://uniapp.dcloud.io/uniCloud/hosting?id=%e7%ae%80%e4%bb%8b) 
> Recommended solution: Deploy the apple-app-site-association file to the free Aliyun version of unicloud's [front-end web hosting](https://uniapp.dcloud.io/uniCloud/hosting?id=%e7%ae% 80%e4%bb%8b)

### 客户端处理通用链接
### Client Handling Universal Links
可通过5+ API的[plus.runtime.launcher](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.launcher)判断应用启动来源，如果其值为"uniLink"则表示通过通用链接启动应。
The application startup source can be judged through the [plus.runtime.launcher](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.launcher) of the 5+ API, if its value is "uniLink" It means to start the application through the universal link.
这时可通过5+ API的[plus.runtime.arguments](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.arguments)获取启动参数，通用链接启动的情况将返回完整的通用链接地址。
At this time, the startup parameters can be obtained through [plus.runtime.arguments](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.arguments) of the 5+ API. Returns the full Universal Link address.

### 注意事项
### Precautions
- apple-app-site-association文件不需要.json后缀
- apple-app-site-association files do not need .json suffix
- 对apple-app-site-association文件的请求仅在App第一次启动时进行，如果此时网络连接出了问题apple会缓存请求，等有网的时候再去请求，如果没有请求此文件通用连接会失效
- The request for the apple-app-site-association file is only made when the app is launched for the first time. If there is a problem with the network connection at this time, Apple will cache the request, and then request it when there is a network connection. If the file is not requested, it is common connection will fail
- iOS 9.2开始，在相同的domain内Universal Links不生效，必须要跨域才生效
- Starting from iOS 9.2, Universal Links does not take effect within the same domain, it must be cross-domain to take effect

