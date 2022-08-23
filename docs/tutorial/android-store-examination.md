# 隐私协议自查指南
# Privacy Policy Self-Check Guide
## 背景
## background

为有效治理App强制授权、过度索权、超范围收集个人信息等现象，落实《网络安全法》《消费者权益保护法》的要求，保障个人信息安全，2019年1月，中央网信办、工信部、公安部、市场监管总局等四部委发布了《关于开展App违法违规收集使用个人信息专项治理的公告》，在全国范围组织开展App违法违规收集使用个人信息专项治理，并陆续出台完善了《App违法违规收集使用个人信息行为认定方法》、《GB/T 35273-2020 信息安全技术 个人信息安全规范》等标准规范。
In order to effectively manage the phenomenon of compulsory authorization of apps, excessive claims, and collection of personal information beyond the scope, implement the requirements of the "Cybersecurity Law" and the "Consumer Rights Protection Law" to ensure the security of personal information. In January 2019, the Central Cyberspace Administration of China, The Ministry of Industry and Information Technology, the Ministry of Public Security, and the State Administration for Market Regulation and other four ministries and commissions issued the "Announcement on Carrying out the Special Governance of the Illegal Collection and Use of Personal Information by Apps", organized and carried out the special governance of the illegal collection and use of personal information by Apps nationwide, and successively issued and improved " Approval methods for illegal collection and use of personal information, GB/T 35273-2020 Information Security Technology Personal Information Security Specifications and other standards.
根据以上规范要求，各大应用市场都加强应用的检测，要求应用必须符合相关政策，否则应用将有被通报或下架的风险。
According to the above specifications, all major application markets have strengthened the detection of applications, requiring that applications must comply with relevant policies, otherwise the applications will be at risk of being notified or removed from the shelves.

为了帮助开发者同学避免合规风险，提供隐私协议自查指南。开发者可以按照以下顺序自查：
In order to help developers avoid compliance risks, a privacy protocol self-inspection guide is provided. Developers can check themselves in the following order:

#### 1、[升级最新版本HbuilderX或离线打包SDK](#update)
#### 1. [Upgrade the latest version of HbuilderX or offline package SDK](#update)
#### 2、[隐私弹窗配置检测](#check)
#### 2. [Privacy pop-up configuration detection](#check)
#### 3、[隐私政策展示内容](#content)
#### 3. [Privacy Policy Display Content](#content)
#### 4、[查看uni-app(5+ App/Wap2App)集成功能模块补充隐私协议](#feature)
#### 4. [View uni-app (5+ App/Wap2App) integrated function module supplementary privacy agreement](#feature)

<a id="update"></a>
## 一、根据自身APP生产环境选择最新版本HbuilderX或SDK
## 1. Select the latest version of HbuilderX or SDK according to your own APP production environment

|打包方式		|推荐版本			|下载地址
|Packaging |Recommended Version |Download
|----			|----				|----
|HbuilderX打包	|`HbuilderX3.2.15+`	|【[HbuilderX下载地址](https://www.dcloud.io/hbuilderx.html)】
|HbuilderX packaging |`HbuilderX3.2.15+` |[[HbuilderX download address](https://www.dcloud.io/hbuilderx.html)]
|离线打包      	|`3.2.15+`         	|【[离线打包SDK下载地址](https://nativesupport.dcloud.net.cn/AppDocs/download/android)】
|Offline packaging |`3.2.15+` |[[Offline packaging SDK download address](https://nativesupport.dcloud.net.cn/AppDocs/download/android)]

<a id="check"></a>
## 二、隐私弹窗配置检测
## 2. Privacy pop-up configuration detection

#### 1 .检查uni-app项目目录下是否含有androidPrivacy.json文件 没有请查[参考文档](https://ask.dcloud.net.cn/article/36937)添加配置！
#### 1. Check whether there is an androidPrivacy.json file in the uni-app project directory. If not, please check the [Reference Document](https://ask.dcloud.net.cn/article/36937) to add the configuration!
#### 2 .查看androidPrivacy.json文件中`prompt`配置值域是不是`template`。[参考文档](https://ask.dcloud.net.cn/article/36937)
#### 2. Check whether the `prompt` configuration value field in the androidPrivacy.json file is `template`. [Reference document](https://ask.dcloud.net.cn/article/36937)
		```
		//androidPrivacy.json  
		{    
		"version": "1",      
		"prompt": "template",    
		"title": "服务协议和隐私政策",    
		"message": "..."  
		}
		```

<a id="content"></a>
## 三、隐私政策展示内容
## 3. Privacy Policy Display Content

### 务必在APP《隐私政策》中必告知用户您的应用基于DCloud uni-app(5+ App/Wap2App)开发
### Be sure to inform users in the APP "Privacy Policy" that your app is developed based on DCloud uni-app (5+ App/Wap2App)

请在《隐私政策》填写如下信息:
Please fill in the following information in the "Privacy Policy":

`我们的产品基于DCloud uni-app(5+ App/Wap2App)开发，应用运行期间需要收集您的设备唯一识别码（IMEI/android ID/DEVICE_ID/IDFA、SIM 卡 IMSI 信息）以提供统计分析服务，并通过应用启动数据及异常错误日志分析改进性能和用户体验，为用户提供更好的服务。`
`Our products are developed based on DCloud uni-app (5+ App/Wap2App). During the running of the application, you need to collect your device unique identification code (IMEI/android ID/DEVICE_ID/IDFA, SIM card IMSI information) to provide statistical analysis services, And improve performance and user experience through application startup data and abnormal error log analysis to provide users with better services. `

### 集成其他功能模块涉及隐私政策
### Integrating other functional modules involves privacy policy

App隐私政策“第三方共享信息”条款部分中披露的SDK收集使用个人信息目录清单，应向用户明示当前SDK收集使用个人信息的目的、方式和范围，并正确透出相关平台隐私协议链接，条款内容可参考以下方式，并在法律法规的范围内征得最终用户同意：
The catalog list of personal information collected and used by the SDK disclosed in the "Third-Party Information Sharing" clause of the App Privacy Policy should clearly indicate to the user the purpose, method and scope of the current SDK's collection and use of personal information, and correctly disclose the relevant platform privacy agreement link, terms The content can refer to the following methods, and obtain the consent of the end user within the scope of laws and regulations:

#### 方式一 以文字方式向用户列示：
#### Method 1 List to the user in text:

**使用SDK名称:** 个推·消息推送
**Use SDK name:** a push message push

**使用目的:** 消息推送（请根据具体使用目的填写）
**Purpose of use:** Push message (please fill in according to the specific purpose of use)

**使用的权限:**
**Permissions used:**
```
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
android.permission.READ_PHONE_STATE
android.permission.VIBRATE
android.permission.GET_TASKS
```

**涉及个人信息:** 设备信息（IMEI、ANDROID_ID、DEVICE_ID、IMSI）、应用已安装列表、网络信息
**Involving personal information:** Device information (IMEI, ANDROID_ID, DEVICE_ID, IMSI), application installed list, network information

**隐私权政策链接:** [http://docs.getui.com/privacy](http://docs.getui.com/privacy)
***
#### 方式二 以表格方式向用户呈现：
#### Method 2 Present to the user in a form:

<table style="word-break:break-all">
  <tr>
    <th style="width:10%">SDK名称</th>
    <th style="width:10%">SDK name</th>
    <th style="width:10%">包名信息</th>
    <th style="width:10%">package name information</th>
	<th style="width:15%">使用目的</th>
	<th style="width:15%">purpose of usage</th>
	<th style="width:30%">使用的权限</th>
	<th style="width:30%">Permission to use</th>
	<th style="width:20%">涉及个人信息</th>
	<th style="width:20%">involving personal information</th>
	<th style="width:10%">隐私权政策链接</th>
	<th style="width:10%">Privacy Policy Link</th>
  </tr>
  <tr>
    <td>个推·消息推送</td>
    <td>com.igexin</td>
	<td>消息推送(请根据具体使用目的填写)</td>
	<td style="font-size:12px">
		android.permission.ACCESS_NETWORK_STATE<br>
		android.permission.ACCESS_WIFI_STATE<br>
		android.permission.READ_PHONE_STATE<br>
		android.permission.VIBRATE<br>
		android.permission.GET_TASKS
	</td>
	<td>设备信息（IMEI、ANDROID_ID、DEVICE_ID、IMSI）、应用已安装列表、网络信息</td>
	<td><a href="http://docs.getui.com/privacy" target="_blank">http://docs.getui.com/privacy</a></td>
  </tr>
</table>

<a id="feature"></a>
## 四、查看uni-app(5+ App/Wap2App)集成模块补充隐私协议
## 4. View uni-app (5+ App/Wap2App) integrated module supplementary privacy agreement

#### 查看uni-app(5+ App/Wap2App)应用功能模块
#### View uni-app (5+ App/Wap2App) application function module

使用HBuilder X查看manifest.json的`App模块配置`,查看勾选了哪些模块配置。 根据配置的模块查看[Android平台各功能模块隐私合规协议](https://ask.dcloud.net.cn/article/39484)补充隐私合规协议到你的《隐私政策》中。
Use HBuilder X to view the `App module configuration` of manifest.json to see which module configurations are checked. Check the [Privacy Compliance Agreement of Each Functional Module of the Android Platform](https://ask.dcloud.net.cn/article/39484) according to the configured modules and supplement the privacy compliance agreement to your Privacy Policy.

#### 查看uni-app(5+ App/Wap2App)应用权限配置
#### View uni-app (5+ App/Wap2App) application permission configuration

使用HBuilder X查看manifest.json的`App权限配置`,查看勾选了那些权限配置。各功能模块用了哪些权限可查看文档[Android平台云端打包权限配置](https://ask.dcloud.net.cn/article/36982),不需要的权限请及时删除以免上架被拒！
Use HBuilder X to view the `App permission configuration` of manifest.json to see which permission configurations are checked. See the document [Android Platform Cloud Packaging Permission Configuration](https://ask.dcloud.net.cn/article/36982) which permissions are used by each functional module. Please delete unnecessary permissions in time to avoid rejection!

### 离线打包
### Offline packaging

#### 三方sdk隐私合规
#### Three-party sdk privacy compliance
离线打包目前仅支持配置uni-app(5+ App/Wap2App)提供的隐私弹窗。自定义原生写的隐私弹窗是无法规避隐私协议问题的。
Offline packaging currently only supports the configuration of privacy pop-ups provided by uni-app (5+ App/Wap2App). Custom natively written privacy pop-ups cannot avoid privacy protocol issues.

集成的是离线打包SDK提供的依赖库 根据实际模块划分查看[Android平台各功能模块隐私合规协议](https://ask.dcloud.net.cn/article/39484)补充《隐私政策》协议即可。
The integration is the dependency library provided by the offline packaging SDK. View the [Privacy Compliance Agreement of Each Functional Module of the Android Platform](https://ask.dcloud.net.cn/article/39484) according to the actual module division. The supplementary "Privacy Policy" agreement is Can.

如果是宿主自己集成的三方SDK：
If it is a third-party SDK integrated by the host itself:
+ 去三方平台获取隐私协议信息。补充到《隐私政策》中。
+ Go to the third-party platform to obtain privacy agreement information. Supplement to the Privacy Policy.
+ 调用SDK提供的API方法。SDK.isAgreePrivacy获取隐私协议状态。调用三方SDK的初始化逻辑。
+ Call API methods provided by SDK. SDK.isAgreePrivacy gets the privacy agreement status. Call the initialization logic of the third-party SDK.

#### App权限配置
#### App permissions configuration

原生项目APP模块查看`AndroidManifest.xml`,根据实际情况检查App所需权限。
View `AndroidManifest.xml` in the APP module of the native project, and check the permissions required by the App according to the actual situation.
各功能模块用了哪些权限可查看文档[Android平台云端打包权限配置](https://ask.dcloud.net.cn/article/36982),不需要的权限请及时删除以免上架被拒！
What permissions are used by each functional module can be viewed in the document [Android Platform Cloud Packaging Permission Configuration](https://ask.dcloud.net.cn/article/36982). Please delete unnecessary permissions in time to avoid rejection!

### uni原生插件
### uni native plugin

1、如果App集成了uni原生插件 需要注意插件文档是否涉及到用户隐私获取或敏感权限。相应的要将合规协议补充到《隐私政策》中。
1、If the app integrates uni native plugins, you need to pay attention to whether the plugin documentation involves user privacy acquisition or sensitive permissions. Accordingly, the compliance agreement should be supplemented to the "Privacy Policy".

2、uni原生插件可能会获取用户隐私获取或敏感权限。导致用户的App无法上架。这种情况宿主无法排查。可以使用排除法。将插件删除重新检测。
2、The uni native plugin may obtain user privacy or sensitive permissions. As a result, the user's App cannot be launched. In this case, the host cannot check. Exclusion can be used. Delete the plugin and check again.