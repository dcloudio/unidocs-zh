近期收到开发者反馈将uni-app/5+ App项目打包Android平台App提交到腾讯云、百度云、爱加密等安全平台检测出存在漏洞风险，对于反馈的漏洞风险问题我们一直在持续跟进并积极寻找解决方案修复。

首先我们需要理解漏洞风险并不代表真实存在安全漏洞，比如[WebView远程代码执行漏洞](#webview-jsinterface)，仅在Android4.2及以下版本系统存在，目前HBuilderX发现App最低要求版本Android4.4；比如[Activity、Service、Receiver等组件导出风险](#export)，有些功能依赖的组件必须设置为导出，实际上并不存在安全问题。而安全平台会把所有可能存在的漏洞或风险都列出来，很多安全问题都可能是误报或夸大了安全漏洞的隐患。

**因此对于存在漏洞风险问题的基本解决方案是使用`APK加固`，推荐[uni安全加固](/tutorial/app-security.md)其背后支持对接多个加固服务商，包括腾讯云和蚂蚁小程序云**

如果加固还不能解决问题，或者安全平台要求加固前进行检测，请在[官方论坛ask](https://ask.dcloud.net.cn/explore/)发帖反馈，添加话题为“安全漏洞”、“安全检测”，上传完整安全检测报告及检测的apk文件。


### 安全漏洞风险问题的处理原则
**对于反馈的安全漏洞问题我们会根据风险等级，优先解决高风险和中风险问题**
对于低风险问题，理论上不会影响应用的安全质量，因此通常情况下不会解决低风险安全漏洞问题。

首先我们需要判断风险漏洞是哪些代码引起的，可以通过安全检测报告中漏洞详情中的`漏洞代码`类名进行判断，如果是以"io.dcloud"开头则表示是DCloud的代码，如下：
![](https://native-res.dcloud.net.cn/images/uniapp/security/android/dcloud.png)
如果是以其它字符开头，则表示是三方SDK或uni原生插件的代码，如下：
![](https://native-res.dcloud.net.cn/images/uniapp/security/android/third.png)

- DCloud代码的问题
这类问题我们会尽快处理解决，或提供相关配置
- 三方SDK代码的问题
由于没有三方SDK源码，我们无法修改三方SDK的风险漏洞，建议根据实际情况选择是否使用对应功能模块来规避。同时也需要开发者积极反馈到相关平台提供修复漏洞风险问题的SDK，我们会关注三方SDK的更新，并及时更新对应功能模块。
- uni原生插件代码的问题
uni原生插件源码有插件作者维护，需要联系插件作者解决


#### HBuilderX3.1.14版本修复安全相关问题
- 修复已知`WebView File域同源策略绕过漏洞`问题
- 修复已知`Android平台WebView控件跨域访问高危漏洞`问题
- 修复已知`Webview绕过证书校验漏洞`问题 需配置后生效
- 修复已知`Android主机名\证书弱校验风险`问题 需配置后生效



### 常见的安全漏洞风险的解决方案

以下是一些常见的风险漏洞处理方案


<a id="web_untrustedca"/>

#### Webview绕过证书校验漏洞 及 Android主机名\证书弱校验风险
**修复方案**
HBuilderX3.1.14+版本新增untrustedca节点配置是否允许使用非受信证书。
在项目manifest.json中"app-plus"->"ssl"节点下配置"untrustedca"为"refuse"，示例如下：
``` json
 "app-plus": {  //5+ App项目对应节点名称为"plus"
        "ssl": {
            "untrustedca": "refuse"
        },
        // ...
    }

```

untrustedca属性值域说明：
- "accept"
接受此非受信证书，继续访问；
- "refuse"
拒绝此非受信证书，停止访问；
- "warning"
弹出警告提示框提醒用户，由用户确定是否继续访问，仅针对webview内部请求。


#### Activity、Service、Receiver等组件导出风险@export
**风险描述**
APP的Activity、Service、Receiver等组件可以在AndroidManifest.xml中通过配置属性android:exported设置
为私有（false）或公有（true），设置为公有时则认为组件对外导出，可以被其它任何程序的任何组件访问。导出的组件可能被第三方App恶意调用，可能返回隐私信息给恶意应用，造成数据泄露；可能导致应用崩溃，造成拒绝服务等漏洞。

**修复方案**
HBuilderX3.1.14+版本已经将DCloud管理的代码中所有不需要被外部访问的组件都设置为私有（即android:exported属性值设置为false），仅将需要被外部访问的组件，如App入口Activity（io.dcloud.PandoraEntry）设置为公有。

另外需要注意，一些三方SDK因为功能需要会将其组件设置为对外导出，如下：
- 微信SDK
使用微信分享、登录、支付模块时，因SDK功能需要会设置WXEntryActivity、WXPayEntryActivity等组件对外导出
- 个推SDK
UniPush模块用到个推SDK，内部功能涉及到CustomGTService、PushReceiver、GActivity、NotificationServic等组件都要求对外导出


#### 应用签名未校验风险
**风险描述**
签名证书是对App开发者身份的唯一标识，如果程序未对签名证书进行校验，可能被反编译后进行二次打包使用其它签名证书重新签名。如重新签名的App可以正常启动，则可能导致App被仿冒盗版，影响其合法收入，甚至可能被添加钓鱼代码、病毒代码、恶意代码，导致用户敏感信息泄露或者恶意攻击。

**修复方案**
对APK进行加固，推荐[uni安全加固](/tutorial/app-security.md)其背后支持对接多个加固服务商，包括腾讯云和蚂蚁小程序云。

#### APK可被反编译后取得源代码风险
**风险描述**
说的打包为App的原生APK可以被反编译获取Java源代码。

**修复方案**
对APK进行加固，推荐[uni安全加固](/tutorial/app-security.md)其背后支持对接多个加固服务商，包括腾讯云和蚂蚁小程序云。

#### WebView远程代码执行漏洞  @webview-jsinterface
**风险描述**
用该漏洞可以根据客户端能力实现远程任意代码执行攻击。 WebView 远程代码执行漏洞触发前提条件：
1. 使用addJavascriptInterface方法注册可供JavaScript调用的Java对象
2. 使用WebView加载外部网页或者本地网页
3. Android系统版本低于4.2。

**修复方案**
HBuilderX发布到App的Android平台最低支持Android4.4，即minSdkVersion大于等于19。也就是说Android4.4及以上版本并不存在此漏洞，如果你的项目配置了minSdkVersion低于19，则请参考[https://ask.dcloud.net.cn/article/193](https://ask.dcloud.net.cn/article/193)修改。


#### 密钥硬编码漏洞
**风险描述**
应用程序在加解密时，使用硬编码在程序中的密钥，攻击者通过反编译拿到密钥可以轻易解密APP通信数据

**修复方案**
HBuilderX3.1.14+版本已修复此问题，在内部逻辑中使用的密钥全部做了混淆加密处理。

#### SO文件破解风险漏洞
**风险描述**
SO文件为APK中包含的动态链接库文件，Android利用NDK技术将C/C++语言实现的核心代码编译为SO库文件供Java层调用。SO文件被破解可能导致应用的核心功能代码和算法泄露。攻击者利用核心功能与算法可轻易抓取到客户端的敏感数据，并对其解密，导致用户的隐私泄露或直接财产损失

**修复方案**
对APK中的SO文件进行加固保护,推荐[uni安全加固](/tutorial/app-security.md)其背后支持对接多个加固服务商，包括腾讯云和蚂蚁小程序云。

#### Strandhogg漏洞
**风险描述**
StrandHogg之所以独特，是因为它无需进行植根即可启用复杂的攻击，它利用Android的多任务系统中的一个弱点来实施强大的攻击，使恶意应用程序可以伪装成该设备上的任何其他应用程序。此漏洞利用基于一个称为“ taskAffinity”的Android控件设置，该控件允许任何应用程序（包括恶意应用程序）自由地采用其所需的多任务处理系统中的任何身份。

**修复方案**
该漏洞已于2020.4.1的安全补丁中修复(涵盖Android 8.0 / 8.1 / 9.0+)。由于已经通过系统补丁封堵。理论上该漏洞不会对高版本系统的手机设备构成威胁。
而app客户端开发并没有彻底规避该漏洞的方案。各检测平台推荐配置`android:taskAffinity=“”`，但仅是临时方案。但该方案会导致应用运行到android11+系统设备时任务堆栈窗口变成两个的问题。
由于`android:taskAffinity=“”`配置存在bug！所以我们并不会默认这样配置。但为开发者提供的云打包配置选项。由开发者决定是否配置临时封堵该漏洞。具体如下：
+ 请使用HX3.3.10+版本。根据app类型在项目的manifest.json中配置`hasTaskAffinity`。true表示配置`android:taskAffinity=“”`，false不配置。默认为false
+ **uni-app** 请按如下配置填写到项目的manifest.json中。
```
 "app-plus" : {
	 "distribute" : {
		 "android" : {
			 ...
			 ...
			 "hasTaskAffinity": true
		 }
	 }
 }
```
+ **5+/web2app** 请按如下配置填写到项目的manifest.json中。
```
"plus" : {
	"distribute" : {
		"google" : {
			...
			...
			"hasTaskAffinity": true
		}
	}
}
```

#### 未配置网络安全属性漏洞
**风险描述**
从Nougat(Android 7) 一个名为“Network Security Configuration'的新安全功能也随之而来。如果应用程序的 SDK高于或等于24，则只有系统证书才会被信任。Android Network Security Configuration 功能提供了一个简单的层，用来保护应用程序在未加密的明文中意外传输的敏感数据。可以针对特定域和特定应用配置这些设置。如缺少networkSecurityConfig 特性，应用程序将使用系统默认安全配置，致使应用程序在不安全的定制 ROM 上运行时可能遭受恶意网络攻击。

**修复方案**

+ 根据Android平台[网络安全配置文档](https://developer.android.google.cn/training/articles/security-config?hl=zh-cn)生成`network_security_config.xml`配置文件
+ 通过HBuilderX实现networkSecurityConfig配置！参考[Android原生应用清单文件和资源文档](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html)
	+ 将`network_security_config.xml`文件拷贝到应用资源`nativeResources\android\res\xml`目录下
	+ 配置`AndroidManifest.xml`中application节点！添加networkSecurityConfig属性配置。配置参考如下：
		```
		<application android:networkSecurityConfig="@xml/network_security_config"
		                        ... >
		            ...
		</application>
		```
