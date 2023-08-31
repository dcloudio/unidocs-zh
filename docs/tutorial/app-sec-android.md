近期收到开发者反馈将uni-app/5+ App项目打包Android平台App提交到腾讯云、百度云、爱加密等安全平台检测出存在漏洞风险，对于反馈的漏洞风险问题我们一直在持续跟进并积极寻找解决方案修复。
Recently, we received feedback from developers that the uni-app/5+ App project was packaged as an Android platform App and submitted to security platforms such as Tencent Cloud, Baidu Cloud, and Ai Encryption. The vulnerability risk was detected. We have been continuously following up on the feedback vulnerability risk. And actively looking for solutions to fix.

首先我们需要理解漏洞风险并不代表真实存在安全漏洞，比如[WebView远程代码执行漏洞](#webview_jsinterface)，仅在Android4.2及以下版本系统存在，目前HBuilderX发现App最低要求版本Android4.4；比如[Activity、Service、Receiver等组件导出风险](#export)，有些功能依赖的组件必须设置为导出，实际上并不存在安全问题。而安全平台会把所有可能存在的漏洞或风险都列出来，很多安全问题都可能是误报或夸大了安全漏洞的隐患。
First of all, we need to understand that the vulnerability risk does not mean that there is a real security vulnerability, such as [WebView remote code execution vulnerability](#webview_jsinterface), which only exists in Android4.2 and below versions. At present, HBuilderX found that the minimum required version of the App is Android4.4; for example [Export risk of Activity, Service, Receiver and other components](#export), some function-dependent components must be set to be exported, in fact, there is no security problem. The security platform will list all possible vulnerabilities or risks, and many security issues may be false positives or exaggerated hidden dangers of security vulnerabilities.

**因此对于存在漏洞风险问题的基本解决方案是使用`APK加固`，推荐[uni安全加固](https://dev.dcloud.net.cn/uni_modules/uni-trade/pages/account/account?pcd=tcb_app_csdn_serv)其背后支持对接多个加固服务商，包括腾讯云和蚂蚁小程序云**

如果加固还不能解决问题，或者安全平台要求加固前进行检测，请在[官方论坛ask](https://ask.dcloud.net.cn/explore/)发帖反馈，添加话题为“安全漏洞”、“安全检测”，上传完整安全检测报告及检测的apk文件。
If the hardening still cannot solve the problem, or the security platform requires testing before hardening, please post feedback on the [official forum ask](https://ask.dcloud.net.cn/explore/), and add the topics as "Security Vulnerability", "Security Test", upload the complete security test report and the tested apk file.


### 安全漏洞风险问题的处理原则
### Handling principles of security vulnerability risk issues
**对于反馈的安全漏洞问题我们会根据风险等级，优先解决高风险和中风险问题**  
**For the feedback of security vulnerabilities, we will give priority to solving high-risk and medium-risk problems according to the risk level**
对于低风险问题，理论上不会影响应用的安全质量，因此通常情况下不会解决低风险安全漏洞问题。
For low-risk issues, in theory, the security quality of the application will not be affected, so low-risk security vulnerabilities are usually not addressed.

首先我们需要判断风险漏洞是哪些代码引起的，可以通过安全检测报告中漏洞详情中的`漏洞代码`类名进行判断，如果是以"io.dcloud"开头则表示是DCloud的代码，如下：
![](https://native-res.dcloud.net.cn/images/uniapp/security/android/dcloud.png)
如果是以其它字符开头，则表示是三方SDK或uni原生插件的代码，如下：
![](https://native-res.dcloud.net.cn/images/uniapp/security/android/third.png)

- DCloud代码的问题  
- Problems with DCloud code
这类问题我们会尽快处理解决，或提供相关配置
We will solve such problems as soon as possible, or provide relevant configuration
- 三方SDK代码的问题  
- Problems with 3rd party SDK code
由于没有三方SDK源码，我们无法修改三方SDK的风险漏洞，建议根据实际情况选择是否使用对应功能模块来规避。同时也需要开发者积极反馈到相关平台提供修复漏洞风险问题的SDK，我们会关注三方SDK的更新，并及时更新对应功能模块。
Since there is no source code of the third-party SDK, we cannot modify the risks and vulnerabilities of the third-party SDK. It is recommended to choose whether to use the corresponding function module to avoid it according to the actual situation. At the same time, developers are also required to actively feedback to relevant platforms to provide SDKs to fix vulnerability risks. We will pay attention to the updates of the third-party SDKs and update the corresponding functional modules in time.
- uni原生插件代码的问题  
- Problems with uni native plugin code
uni原生插件源码有插件作者维护，需要联系插件作者解决
The source code of the uni native plug-in is maintained by the plug-in author, and you need to contact the plug-in author to solve it


#### HBuilderX3.1.14版本修复安全相关问题
#### HBuilderX 3.1.14 version fixes security related issues
- 修复已知`WebView File域同源策略绕过漏洞`问题
- Fixed known `WebView File Domain Same Origin Policy Bypass Vulnerability` issue
- 修复已知`Android平台WebView控件跨域访问高危漏洞`问题
- Fixed the known `Android platform WebView control cross-domain access high-risk vulnerability` problem
- 修复已知`Webview绕过证书校验漏洞`问题 需配置后生效
- Fixed the known `Webview bypass certificate verification vulnerability` problem, it needs to be configured to take effect
- 修复已知`Android主机名\证书弱校验风险`问题 需配置后生效
- Fixed the known `Android hostname\certificate weak verification risk` problem, which needs to be configured to take effect



### 常见的安全漏洞风险的解决方案
### Solutions to common security breach risks

以下是一些常见的风险漏洞处理方案
The following are some common risk vulnerability solutions


<a id="web_untrustedca"/>

#### Webview绕过证书校验漏洞 及 Android主机名\证书弱校验风险
#### Webview bypass certificate verification vulnerability and Android hostname\certificate weak verification risk
**修复方案**  
**Repair plan**
HBuilderX3.1.14+版本新增untrustedca节点配置是否允许使用非受信证书。
HBuilderX 3.1.14+ version adds untrustedca node configuration whether to allow the use of untrusted certificates.
在项目manifest.json中"app-plus"->"ssl"节点下配置"untrustedca"为"refuse"，示例如下：
In the project manifest.json, configure "untrustedca" as "refuse" under the "app-plus"->"ssl" node. The example is as follows:
``` json
 "app-plus": {  //5+ App项目对应节点名称为"plus"  
        "ssl": {  
            "untrustedca": "refuse"  
        },  
        // ...  
    }

```

untrustedca属性值域说明：
Untrustedca attribute value range description:
- "accept"  
接受此非受信证书，继续访问；
Accept this untrusted certificate to continue access;
- "refuse"  
拒绝此非受信证书，停止访问；
Reject this untrusted certificate and stop access;
- "warning"  
弹出警告提示框提醒用户，由用户确定是否继续访问，仅针对webview内部请求。
A warning prompt box pops up to remind the user that it is up to the user to determine whether to continue the access, only for internal webview requests.


<a id="export"/>

#### Activity、Service、Receiver等组件导出风险  
#### Activity, Service, Receiver and other components export risks
**风险描述**  
**Risk description**
APP的Activity、Service、Receiver等组件可以在AndroidManifest.xml中通过配置属性android:exported设置
APP's Activity, Service, Receiver and other components can be set in AndroidManifest.xml through the configuration attribute android:exported
为私有（false）或公有（true），设置为公有时则认为组件对外导出，可以被其它任何程序的任何组件访问。导出的组件可能被第三方App恶意调用，可能返回隐私信息给恶意应用，造成数据泄露；可能导致应用崩溃，造成拒绝服务等漏洞。
It is private (false) or public (true). When it is set to public, the component is considered to be exported and can be accessed by any component of any other program. The exported components may be maliciously called by third-party apps, may return private information to malicious apps, and cause data leakage; may cause app crashes, resulting in denial of service and other vulnerabilities.

**修复方案**  
**Repair plan**
HBuilderX3.1.14+版本已经将DCloud管理的代码中所有不需要被外部访问的组件都设置为私有（即android:exported属性值设置为false），仅将需要被外部访问的组件，如App入口Activity（io.dcloud.PandoraEntry）设置为公有。
HBuilderX 3.1.14+ has set all the components in the code managed by DCloud that do not need to be accessed externally as private (that is, the android:exported attribute value is set to false), and only the components that need to be accessed externally, such as the App entry Activity ( io.dcloud.PandoraEntry) is set to public.

另外需要注意，一些三方SDK因为功能需要会将其组件设置为对外导出，如下：
In addition, it should be noted that some third-party SDKs will set their components to be exported because of their functions, as follows:
- 微信SDK  
- WeChat SDK
使用微信分享、登录、支付模块时，因SDK功能需要会设置WXEntryActivity、WXPayEntryActivity等组件对外导出
When using WeChat sharing, login, and payment modules, components such as WXEntryActivity and WXPayEntryActivity will be set to be exported due to SDK functions.
- 个推SDK  
- Gentui SDK
UniPush模块用到个推SDK，内部功能涉及到CustomGTService、PushReceiver、GActivity、NotificationServic等组件都要求对外导出
The UniPush module uses a push SDK, and the internal functions involve components such as CustomGTService, PushReceiver, GActivity, and NotificationServic, which all require external export.

> 提示：如果您的项目因为三方SDK组件存在导出风险而无法通过安全检测则只能不使用相关的模块
> Tip: If your project fails the security check due to the export risk of the third-party SDK components, you can only use the related modules


#### 应用签名未校验风险  
#### Application signature unverified risk
**风险描述**  
**Risk description**
签名证书是对App开发者身份的唯一标识，如果程序未对签名证书进行校验，可能被反编译后进行二次打包使用其它签名证书重新签名。如重新签名的App可以正常启动，则可能导致App被仿冒盗版，影响其合法收入，甚至可能被添加钓鱼代码、病毒代码、恶意代码，导致用户敏感信息泄露或者恶意攻击。
The signature certificate is the only identifier for the identity of the app developer. If the program does not verify the signature certificate, it may be decompiled and repackaged and re-signed with another signature certificate. If the re-signed app can be started normally, it may cause the app to be counterfeited and pirated, affecting its legitimate income, and may even be added with phishing code, virus code, and malicious code, resulting in the leakage of user sensitive information or malicious attacks.

**修复方案**  
**Repair plan**
HBuilderX3.0.0+版本新增[plus.navigator.getSignature](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)方法获取Android平台签名证书的SHA-1指纹信息，在应用启动或运行时进行校验判断。
HBuilderX3.0.0+ version adds [plus.navigator.getSignature](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature) method to obtain the SHA-1 fingerprint of the Android platform signature certificate information, and verify the judgment when the application starts or runs.

可以在应用运行期间定时校验，以下是uni-app项目在App.vue的应用生命周期[onLaunch](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)中进行校验，示例如下：
It can be checked regularly during the running of the application. The following is the application life cycle of the uni-app project in App.vue [onLaunch](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba% 94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f), for example:
``` js
  onLaunch: function(inf) {
      console.log('App Launch');
// #ifdef APP-PLUS
      // 签名证书指纹检验
      // signature certificate fingerprint verification
      var sha1 = 'baad093a82829fb432a7b28cb4ccf0e9f37dae58';  //修改为自己应用签名证书SHA-1值，是全小写并且中间不包含“:”符号
      if(sha1!=plus.navigator.getSignature()){
        //证书不对时退出应用
        //Exit the application if the certificate is incorrect
        plus.runtime.quit();
      }
// #endif
  }

```

> 提示：为了防止js检验代码被反编译篡改，建议将签名校验代码放到独立js文件中并配置[js/nvue文件原生混淆加密](app-sec-confusion)，或者使用apk加固处理
> Tip: In order to prevent the js verification code from being decompiled and tampered with, it is recommended to put the signature verification code in a separate js file and configure [js/nvue file native confusion encryption](app-sec-confusion), or use apk for reinforcement processing


#### APK可被反编译后取得源代码风险  
#### APK can be decompiled to obtain source code risk
**风险描述**  
**Risk description**
说的打包为App的原生APK可以被反编译获取Java源代码。
The native APK packaged as an App can be decompiled to obtain the Java source code.

**修复方案**  
**Repair plan**
对APK进行加固，推荐使用腾讯加固平台。
To reinforce the APK, it is recommended to use the Tencent reinforcement platform.


<a id="webview_jsinterface"/>

#### WebView远程代码执行漏洞  
#### WebView Remote Code Execution Vulnerability
**风险描述**  
**Risk description**
用该漏洞可以根据客户端能力实现远程任意代码执行攻击。 WebView 远程代码执行漏洞触发前提条件：
This vulnerability can be used to achieve remote arbitrary code execution attacks based on client capabilities. WebView remote code execution vulnerability triggering prerequisites:
1. 使用addJavascriptInterface方法注册可供JavaScript调用的Java对象
1. Use the addJavascriptInterface method to register a Java object that can be called by JavaScript
2. 使用WebView加载外部网页或者本地网页
2. Use WebView to load external web pages or local web pages
3. Android系统版本低于4.2。
3. The Android system version is lower than 4.2.

**修复方案**  
**Repair plan**
HBuilderX发布到App的Android平台最低支持Android4.4，即minSdkVersion大于等于19。也就是说Android4.4及以上版本并不存在此漏洞，如果你的项目配置了minSdkVersion低于19，则请参考[https://ask.dcloud.net.cn/article/193](https://ask.dcloud.net.cn/article/193)修改。
The Android platform that HBuilderX publishes to the App supports at least Android 4.4, that is, minSdkVersion is greater than or equal to 19. That is to say, this vulnerability does not exist in Android4.4 and above. If your project is configured with minSdkVersion lower than 19, please refer to [https://ask.dcloud.net.cn/article/193](https:/ /ask.dcloud.net.cn/article/193) modified.


#### 密钥硬编码漏洞
#### Key Hardcoding Vulnerability
**风险描述**  
**Risk description**
应用程序在加解密时，使用硬编码在程序中的密钥，攻击者通过反编译拿到密钥可以轻易解密APP通信数据
When the application encrypts and decrypts, it uses the key hard-coded in the program. The attacker can easily decrypt the APP communication data by obtaining the key through decompilation.

**修复方案**  
**Repair plan**
HBuilderX3.1.14+版本已修复此问题，在内部逻辑中使用的密钥全部做了混淆加密处理。
This problem has been fixed in HBuilderX 3.1.14+ version, and all the keys used in the internal logic have been obfuscated and encrypted.

#### SO文件破解风险漏洞
#### SO file crack risk vulnerability
**风险描述**  
**Risk description**
SO文件为APK中包含的动态链接库文件，Android利用NDK技术将C/C++语言实现的核心代码编译为SO库文件供Java层调用。SO文件被破解可能导致应用的核心功能代码和算法泄露。攻击者利用核心功能与算法可轻易抓取到客户端的敏感数据，并对其解密，导致用户的隐私泄露或直接财产损失
The SO file is the dynamic link library file contained in the APK. Android uses the NDK technology to compile the core code implemented by the C/C++ language into the SO library file for the Java layer to call. The cracked SO file may lead to the disclosure of the core functional codes and algorithms of the application. Using core functions and algorithms, attackers can easily capture sensitive client data and decrypt it, resulting in user privacy leakage or direct property loss

**修复方案**  
**Repair plan**
建议使用专业安全加固平台对APK中的SO文件进行加固保护
It is recommended to use a professional security hardening platform to harden and protect the SO file in the APK

#### Strandhogg漏洞
#### Strandhogg exploit
**风险描述**  
**Risk description**
StrandHogg之所以独特，是因为它无需进行植根即可启用复杂的攻击，它利用Android的多任务系统中的一个弱点来实施强大的攻击，使恶意应用程序可以伪装成该设备上的任何其他应用程序。此漏洞利用基于一个称为“ taskAffinity”的Android控件设置，该控件允许任何应用程序（包括恶意应用程序）自由地采用其所需的多任务处理系统中的任何身份。
What makes StrandHogg unique is that it doesn't require rooting to enable sophisticated attacks, it exploits a weakness in Android's multitasking system to carry out a powerful attack that allows malicious apps to masquerade as any other app on the device program. The exploit is based on an Android control called "taskAffinity" that allows any application, including malicious applications, to freely adopt any identity it desires in the multitasking system.

**修复方案**  
**Repair plan**
该漏洞已于2020.4.1的安全补丁中修复(涵盖Android 8.0 / 8.1 / 9.0+)。由于已经通过系统补丁封堵。理论上该漏洞不会对高版本系统的手机设备构成威胁。  
The vulnerability has been fixed in the 2020.4.1 security patch (covering Android 8.0/8.1/9.0+). Because it has been blocked by the system patch. In theory, this vulnerability will not pose a threat to mobile devices with higher version systems.
而app客户端开发并没有彻底规避该漏洞的方案。各检测平台推荐配置`android:taskAffinity=“”`，但仅是临时方案。但该方案会导致应用运行到android11+系统设备时任务堆栈窗口变成两个的问题。  
However, there is no solution to completely circumvent this vulnerability in app client development. It is recommended to configure `android:taskAffinity=""` for each testing platform, but it is only a temporary solution. However, this solution will cause the problem that the task stack window becomes two when the application runs to the android11+ system device.
由于`android:taskAffinity=“”`配置存在bug！所以我们并不会默认这样配置。但为开发者提供的云打包配置选项。由开发者决定是否配置临时封堵该漏洞。具体如下：
Due to a bug in the `android:taskAffinity=""` configuration! So we don't configure it this way by default. But there are cloud packaging configuration options for developers. It is up to the developer to decide whether to temporarily block the vulnerability. details as follows:
+ 请使用HX3.3.10+版本。根据app类型在项目的manifest.json中配置`hasTaskAffinity`。true表示配置`android:taskAffinity=“”`，false不配置。默认为false
+ Please use HX3.3.10+ version. Configure `hasTaskAffinity` in the project's manifest.json according to the app type. true means to configure `android:taskAffinity=""`, false not to configure. Default is false
+ **uni-app** 请按如下配置填写到项目的manifest.json中。
+ **uni-app** Please fill in the manifest.json of the project as follows.
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
+ **5+/web2app** Please fill in the manifest.json of the project as follows.
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
