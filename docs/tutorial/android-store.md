### 背景
### background

为有效治理App强制授权、过度索权、超范围收集个人信息等现象，落实《网络安全法》《消费者权益保护法》的要求，保障个人信息安全，2019年1月，中央网信办、工信部、公安部、市场监管总局等四部委发布了《关于开展App违法违规收集使用个人信息专项治理的公告》，在全国范围组织开展App违法违规收集使用个人信息专项治理，并陆续出台完善了《App违法违规收集使用个人信息行为认定方法》、《GB/T 35273-2020 信息安全技术 个人信息安全规范》等标准规范。
In order to effectively manage the phenomenon of compulsory authorization of apps, excessive claims, and collection of personal information beyond the scope, implement the requirements of the "Network Security Law" and the "Consumer Rights Protection Law" to ensure the security of personal information. In January 2019, the Central Network Information Office, The Ministry of Industry and Information Technology, the Ministry of Public Security, and the State Administration for Market Regulation and other four ministries and commissions issued the "Announcement on Carrying out the Special Governance of the Illegal Collection and Use of Personal Information by Apps", organized and carried out the special governance of the illegal collection and use of personal information by Apps nationwide, and successively issued and improved " Approval methods for illegal collection and use of personal information, GB/T 35273-2020 Information Security Technology Personal Information Security Specifications and other standards.

根据以上规范要求，各大应用市场都加强应用的检测，要求应用必须符合相关政策，否则应用将有被通报或下架的风险。
According to the above specification requirements, all major application markets have strengthened the detection of applications, requiring applications to comply with relevant policies, otherwise the application will be at risk of being notified or removed from the shelves.

### APP因合规问题无法上架
### APP cannot be launched due to compliance issues

请认真的阅读以下步骤来检测自己的APP！有效的解决上架问题
Please read the following steps carefully to test your APP! Effectively solve listing problems

+ APP不是由HbuilderX`3.6.1+`云打包生产的请抓紧时间升级到HbuilderX`3.6.1+`版本。重新打包！
+ APP is not packaged and produced by HbuilderX`3.6.1+` cloud, please hurry up and upgrade to HbuilderX`3.6.1+` version. Repack!
+ APP是离线打包请升级SDK到`3.6.1+`版本重新编辑打包！[下载地址](https://nativesupport.dcloud.net.cn/AppDocs/download/android)
+ APP is offline packaging, please upgrade the SDK to `3.6.1+` version and re-edit and package! [Download address](https://nativesupport.dcloud.net.cn/AppDocs/download/android)
+ 不要将自定义基座提交平台审核。调试模式下不会处理合规问题。需要注意！
+ Do not submit custom docks for platform review. Compliance issues are not handled in debug mode. requires attention!
+ APP没有配置隐私与政策提示框。请认真阅读[Android平台隐私与政策提示框配置方法](https://ask.dcloud.net.cn/article/36937)配置你APP的隐私弹窗。
+ The APP does not have a privacy and policy prompt box configured. Please read [Android platform privacy and policy prompt box configuration method](https://ask.dcloud.net.cn/article/36937) to configure your APP's privacy pop-up window.
+ 配置隐私弹窗时一定要配置使用`template`模式。否则无法上架应用市场。应用内部自己实现的隐私弹窗也不行。一定要使用uni提供的隐私弹窗并使用`template`模式切记！
+ Be sure to use `template` mode when configuring privacy popups. Otherwise, the application market will not be available. The privacy pop-up window implemented by the application itself does not work either. Be sure to use the privacy popup provided by uni and use the `template` mode remember!
  ```json
  //androidPrivacy.json
  {  
    "version": "1",    
    "prompt": "template",  
    "title": "服务协议和隐私政策",  
    "message": "..."
   }
  ```
+ 填写隐私协一定要结合实际使用的模块功能。填写相关隐私条款！不能含糊不清。模块收集了什么信息都要填写完整。否则影响上架！请参考当前文档中的`隐私政策注意事项`
+ Fill in the privacy agreement must be combined with the actual module function. Fill in the relevant privacy terms! Can't be vague. All information collected by the module must be filled in completely. Otherwise, it will affect the listing! Please refer to the `Privacy Policy Notice` in the current document
+ 查看是否集成uni原生插件。有些权限或是违规获取可能是uni原生插件引发的。建议使用排除法删除插件重新打包检测
+ Check if the uni native plugin is integrated. Some permissions or illegal acquisitions may be caused by uni native plugins. It is recommended to use the exclusion method to delete the plug-in and repackage the detection
+ 检查是否集成了fcm推送(包含unipush中的fcm)、google统计、google推送、google登录模块。由于这些模块都集成google的gms服务会提前获取android id导致无法在国内正常上架。打包时请在manifest.json配置中排除这些功能模块。
+ Check whether fcm push (including fcm in unipush), google statistics, google push, google login module is integrated. Since these modules are integrated with google's gms service, the android id will be obtained in advance, which will not be able to be put on the shelves normally in China. Please exclude these function modules in the manifest.json configuration when packaging.
+ APP都符合以上条件要求。上架依然失败！请向检测平台要求提供代码调用堆栈。请拿着堆栈信息去[ASK论坛](https://ask.dcloud.net.cn/explore/)发帖说明问题并@管理人员反馈
+ APP meets the above requirements. The listing still fails! Please provide the code call stack to the instrumentation platform. Please go to the [ASK Forum](https://ask.dcloud.net.cn/explore/) with the stack information to explain the problem and @administrator feedback

### 隐私政策注意事项
### Privacy Policy Notice

+ 必须确保应用存在《隐私政策》，在应用首次启动时弹出提示并取得用户同意。
+ Must ensure that the app has a "Privacy Policy", pop up a prompt and obtain user consent when the app is first launched.
+ 一定要配置使用`template`模式隐私与政策提示框 [详情参考](https://ask.dcloud.net.cn/article/36937)
+ Be sure to configure the privacy and policy prompt box using `template` mode [For details](https://ask.dcloud.net.cn/article/36937)
+ 必须在“隐私与政策”非常清楚、全面地说明（不要用可能收集、了解用户信息这种模糊不清晰的词语）收集用户个人信息的目的、方式和范围，用户个人信息包括但不限于mac地址、设备序列号、imei、imsi、软件安装列表、通讯录信息、短信信息等。
+ The purpose, method and scope of collecting user's personal information must be clearly and comprehensively explained in the "Privacy and Policy" (do not use vague and unclear words that may collect and understand user information). User personal information includes but is not limited to mac Address, device serial number, imei, imsi, software installation list, address book information, SMS information, etc.
+ 如果反馈说有违规获取敏感信息行为，请查看[Android平台各功能模块隐私合规协议](https://ask.dcloud.net.cn/article/39484)各功能模块隐私协议。如果你集成了相关模块就一定要写入到app的隐私协议中。
+ If you report that you have violated regulations to obtain sensitive information, please check the [Privacy Compliance Agreement of Each Functional Module of the Android Platform](https://ask.dcloud.net.cn/article/39484) Privacy Agreement of each functional module. If you integrate related modules, you must write it into the app's privacy agreement.
+ 必须在《隐私政策》中必告知用户您的应用基于DCloud uni-app(5+ App/Wap2App)开发，添加如下协议：
+ You must inform users in the "Privacy Policy" that your app is developed based on DCloud uni-app (5+ App/Wap2App), and add the following protocol:
  
  `我们的产品基于DCloud uni-app(5+ App/Wap2App)开发，应用运行期间需要收集您的设备唯一识别码（IMEI/android ID/DEVICE_ID/IDFA、SIM 卡 IMSI 信息、OAID）以提供统计分析服务，并通过应用启动数据及异常错误日志分析改进性能和用户体验，为用户提供更好的服务。`
  `Our product is developed based on DCloud uni-app (5+ App/Wap2App), during the running of the application, you need to collect your device unique identification code (IMEI/android ID/DEVICE_ID/IDFA, SIM card IMSI information, OAID) to provide statistical analysis Service, and improve performance and user experience through application startup data and exception error log analysis, to provide users with better services. `


### 常见问题
### common problem

#### 1、如何解决"强制、频繁、过度索取权限"问题
#### 1. How to solve the problem of "mandatory, frequent, and excessively requesting permissions"

对于权限问题，主要注意以下几个方面：
For permission issues, pay attention to the following aspects:

+ 应用中没有对应的服务或场景时，不要申请对应权限（例如没有使用到位置的服务时，不要申请定位权限）
+ When there is no corresponding service or scene in the application, do not apply for the corresponding permission (for example, do not apply for the location permission when the location service is not used)
+ 应用申请权限时，如果用户拒绝，不要直接退出APP无法使用。千万不要将应用启动时申请“读写手机存储”和“访问设备信息”权限设置为“always”，详情参考：[https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549)
+ When the application applies for permission, if the user refuses, do not directly exit the APP and cannot use it. Do not set the permissions for "read and write mobile phone storage" and "access device information" to "always" when the app is started. For details, please refer to: [https://ask.dcloud.net.cn/article/36549](https: //ask.dcloud.net.cn/article/36549)
+ 调用申请权限相关时，如果用户拒绝，非用户主动触发功能，不要重复调用API触发弹出申请权限窗口影响用户使用
+ When calling the application permission related, if the user refuses, the user does not actively trigger the function, do not repeatedly call the API to trigger the pop-up application permission window, which affects the user's use
+ 不要在页面生命周期onShow中调用可能触发权限提示框的API，如 [uni.getLocation](https://uniapp.dcloud.io/api/location/location?id=getlocation)、[uni.chooseImage](https://uniapp.dcloud.io/api/media/image?id=chooseimage)`等`。
+ Do not call APIs that may trigger the permission prompt box in the page life cycle onShow, such as [uni.getLocation](https://uniapp.dcloud.io/api/location/location?id=getlocation), [uni.chooseImage](https://uniapp.dcloud.io/api/media/image?id=chooseimage)`etc`.

#### 2、离线打包的apk！提交市场审核被报提前获取用户信息
#### 2. Offline packaged apk! Submit market review and be reported to obtain user information in advance

离线打包请使用3.6.1+版本的SDK。并配置uni-app的隐私协议弹窗。不要自行通过原生能力实现隐私弹窗，否则无法正常限制SDK内部获取用户信息逻辑。导致合规检测不合规！
For offline packaging, please use SDK version 3.6.1+. And configure the uni-app privacy agreement pop-up window. Do not implement the privacy pop-up window through native capabilities by yourself, otherwise the logic of obtaining user information inside the SDK will not be properly restricted. Resulting in non-compliance with compliance detection!

#### 3、如何解决“强制用户使用定向推送功能”问题
#### 3. How to solve the problem of "Forcing users to use the directed push function"

《隐私政策》中涉及到 “推荐”、“定制”、“个性化”等关键字改为“提供、展示、通知、发送、、、”等字眼，如果确实会涉及到个性化服务请在app的设置中增加个性化推送开关
In the "Privacy Policy", keywords such as "recommendation", "customization" and "personalization" are changed to "provide, display, notify, send,,," and other words. If it does involve personalized services, please use the app Add a personalized push switch in the settings

#### 4、如何解决 用户点击《隐私政策》“同意”前，APP和SDK不要进行任何行为，包括SDK不能初始化，APP或SDK不能收集用户信息（包括但不限于IMEI、IMSI、设备MAC地址、软件列表、设备序列号、androidID）
#### 4. How to solve the problem before the user clicks "Agree" in the "Privacy Policy", the APP and SDK should not do anything, including that the SDK cannot be initialized, and the APP or SDK cannot collect user information (including but not limited to IMEI, IMSI, device MAC address, software list, device serial number, androidID)

+ 请先确保APK是基于3.6.1+版本生产的！
+ Please make sure that the APK is produced based on version 3.6.1+!
+ 确保已配置使用“template”模式隐私与政策提示框！
+ Make sure the Privacy and Policy Toolbox is configured to use the "template" mode!
+ 隐私链接不能存在获取用户信息、定位信息等js代码。如有请去除！
+ Private links cannot exist js codes such as obtaining user information and positioning information. If so, please remove it!
+ 可以通过小米手机 系统是MIUI12设备。安装你的应用。然后查看`应用详情`-->`应用行为记录`是否在点击“同意”前有获取权限信息等情况。
+ Available through Xiaomi phone system is MIUI12 device. Install your app. Then check whether `App Details`-->`App Behavior Record` has obtained permission information before clicking "Agree".
+ 如果你 app 是离线打包请务必关闭调试开关，修改项目dcloud_control.xml中syncDebug为false
+ If your app is packaged offline, be sure to turn off the debug switch, and modify syncDebug in the project dcloud_control.xml to false
+ 以上都符合条件那就检测app是否集成三方SDK或者uni原生插件请咨询相关SDK提供方平台是否涉及有关合规问题。请更新SDK或找uni原生插件更新相关SDK合规操作。
+ If the above conditions are met, then check whether the app integrates a third-party SDK or a uni native plug-in. Please consult the relevant SDK provider platform for compliance issues. Please update the SDK or find uni native plugins to update related SDK compliance operations.
+ 都符合请重新提交平台检测。
+ All matches, please resubmit for platform testing.

#### 5、如何解决“用户不同意强制退出应用”问题
#### 5. How to solve the problem of "The user does not agree to force quit the application"

这个问题可能是隐私弹窗显示后，用户选择了“不同意”按钮后应用退出导致的。请按以下修改。
This problem may be caused by the user selecting the "Disagree" button after the privacy pop-up is displayed and the app exits. Please modify as follows.

+ 配置二次弹窗提示second，参考[https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
+ Configure the second pop-up prompt second, refer to [https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
+ 二次弹窗配置按钮信息为“同意并继续”和“退出应用”
+ Secondary pop-up window configuration button information is "Agree and Continue" and "Exit Application"

#### 6、离线打包集成三方SDK
#### 6. Offline packaging and integration of third-party SDK

如果重写了DCloudApplication，需要注意在Application初始化的三方SDK的合规操作。防止导致启动隐私弹窗前获取了用户信息无法上架
If you rewrite DCloudApplication, you need to pay attention to the compliance operation of the third-party SDK initialized in the Application. Prevent the user information obtained before the privacy pop-up window is activated and cannot be listed

#### 7、app上架应用市场，检测集成了广告被拒的解决方案
#### 7. The app is put on the application market, and the solution for detecting and integrating ads is rejected

+ 使用HX云打包时是否勾选了三方广告！如果勾选了请在隐私协议添加广告隐私说明。误勾选请去除并重新打包上架。
+ Check whether the third-party advertisement is checked when using HX cloud package! If checked, please add the advertising privacy statement to the privacy agreement. Please remove it and repackage it on the shelf if you tick it by mistake.
+ 离线打包检测是否集成了相关三方广告SDK！如果集成了请在隐私协议添加广告隐私说明。误集成请去除并重新编译apk上架。
+ Offline packaging to detect whether the relevant third-party advertising SDK is integrated! If integrated, please add an advertising privacy statement to the privacy agreement. Please remove and recompile the apk if it is wrongly integrated.

#### 8、应用没有勾选三方广告模块但是上架华为市场检测反馈集成了广告被拒
#### 8. The app did not check the third-party advertising module, but it was rejected when it was put on the Huawei Market.

+ 请使用HX3.6.1+重新打包
+ Please use HX3.6.1+ to repackage

#### 9、华为市场检测app在用户同意隐私政策前申请获取用户个人信息导致无法上架市场架
#### 9. The Huawei Market Detection app cannot be put on the market because it applies for obtaining the user's personal information before the user agrees to the privacy policy.

我们已经收到很多开发者反馈，其他应用市场都已上架成功。但华为检测时则上架被拒。猜测是华为应用市场提交新的apk检测后依然检测之前提交的apk，导致检测不通过的问题。
We have received a lot of feedback from developers, and other app markets have been successfully launched. However, when Huawei tested it, the listing was rejected. The guess is that Huawei AppGallery still detects the previously submitted apk after submitting the new apk test, resulting in the failure of the test.
这种情况请联系华为应用市场技术支持，告诉他新版本已经修改了，让华为应用市场重新检测审核。
In this case, please contact Huawei AppGallery technical support, tell him that the new version has been modified, and have Huawei AppGallery re-test and review.

#### 10、应用安装运行会弹出`通知授权`申请。并未集成相关功能怎么会有这样的弹窗申请呢？
#### 10. When the application is installed and run, a `Notification Authorization` application will pop up. How can there be such a pop-up window application without integrating related functions?

+ 如果你是VIVO手机设备则忽略即可。这是VIVO系统机制问题。非vivo应用市场安装的应用都会默认弹出通知授权弹窗。并非应用发起的授权。不会影响隐私政策
+ If you are a VIVO mobile device, just ignore it. This is a VIVO system mechanism problem. Apps not installed in the vivo app market will pop up a notification authorization pop-up window by default. Not app-initiated authorization. Does not affect the privacy policy
+ 检查集成的uni-app原生插件，可能是原生插件触发了权限申请。可以暂时去掉插件排查该问题。
+ Check the integrated uni-app native plugin, it may be that the native plugin triggers the permission request. You can temporarily remove the plugin to troubleshoot this problem.

#### 11、安卓应用漏洞引发无法上架问题
#### 11. The Android application vulnerability caused the problem of not being able to be listed

+ 请使用HX3.6.1+重新云打包
+ Please use HX3.6.1+ to repackage the cloud
+ 对apk进行加固。推荐使用腾讯云
+ Reinforce the apk. Tencent Cloud is recommended

[安全漏洞参考文档](https://ask.dcloud.net.cn/article/39020)
[Security Vulnerability Reference Document](https://ask.dcloud.net.cn/article/39020)

#### 12、您的应用存在获取用户的软件安装列表敏感信息行为
#### 12. Your application has the behavior of obtaining sensitive information of the user's software installation list

+ 请使用HX3.6.1+重新云打包
+ Please use HX3.6.1+ to repackage the cloud
+ 检查您的应用都使用了什么模块。然后查看[Android平台各功能模块隐私合规协议](https://ask.dcloud.net.cn/article/39484)文档相关协议。将协议补充道隐私协议中。切记不要只填写链接。明文说明获取了什么信息干什么用了都要说清楚。越清晰越好。
+ Check what modules your app uses. Then check the relevant agreements in the [Privacy Compliance Agreement of Each Functional Module of the Android Platform](https://ask.dcloud.net.cn/article/39484). Add the agreement to the privacy agreement. Remember not to just fill in the link. It is clear in plain text that what information is obtained and what it is used for. The clearer the better.

#### 13、应用存在不合理获取短信记录相关权限的行为
#### 13. There is an unreasonable behavior in the application to obtain relevant permissions for SMS records

+ 请使用HX3.6.1+打包
+ Please use HX3.6.1+ package
+ 查看是否使用了“Messaging”模块。Messaging会涉及短信相关权限。如果不需要请删除配置。
+ Check if the "Messaging" module is used. Messaging will involve SMS-related permissions. Delete the configuration if it is not needed.
+ 查看是否使用uni原生插件。可能是原生插件携带的权限。建议使用排除法删除插件在检测。
+ Check if uni native plugin is used. It may be the permissions carried by the native plugin. It is recommended to use the exclusion method to remove plugins during detection.

#### 14、您的应用在后台状态下获取了用户的MAC信息，且未在应用内的隐私政策
#### 14. Your app obtains the user's MAC information in the background state, and it is not in the in-app privacy policy

+ 查看是否集成了UniPush
+ Check if UniPush is integrated
+ 如果集成UniPush请更新个推隐私协议条款！重点是补充MAC信息描述[参考](https://ask.dcloud.net.cn/article/39484)
+ If you integrate UniPush, please update the terms of the Getui Privacy Agreement! The focus is to supplement the description of MAC information [Reference](https://ask.dcloud.net.cn/article/39484)
+ 没有集成UniPush请向检测平台获取java调用堆栈。拿到java调用堆栈在[ask论坛](https://ask.dcloud.net.cn/explore/)发帖咨询
+ If UniPush is not integrated, please obtain the java call stack from the testing platform. Get the java call stack and post a consultation on the [ask forum](https://ask.dcloud.net.cn/explore/)

#### 15、未经许可读取个人信息 获取ANDROID ID
#### 15. Read personal information without permission to obtain ANDROID ID

+ 检查是否集成了fcm推送(包含unipush中的fcm)、google统计、google推送、google登录模块。
+ Check whether fcm push (including fcm in unipush), google statistics, google push, google login module is integrated.
+ 如果集成了则不能国内上架！原因是集成这些模块会将google的GMS服务导入安装包中。启动会获取android id导致无法上架。
+ If it is integrated, it cannot be put on the domestic shelves! The reason is that integrating these modules will import Google's GMS service into the installation package. The startup will get the android id and it will not be listed.
+ 检查uni-app项目在manifest.json将上述模块去除重新打包上架
+ Check the uni-app project to remove the above modules in manifest.json and repackage them
+ 没有集成这些模块可以向检测平台获取调用堆栈。拿到java调用堆栈在[ask论坛](https://ask.dcloud.net.cn/explore/)发帖咨询
+ No integration of these modules to get the call stack from the instrumentation platform. Get the java call stack and post a consultation on the [ask forum](https://ask.dcloud.net.cn/explore/)

#### 16、离线打包自定义DCloudApplication，初始化其他三方SDK如何处理合规问题
#### 16. How to package custom DCloudApplication offline and initialize other third-party SDKs to deal with compliance issues

+ 我们推荐将三方SDK集成方式改为原生插件集成到离线打包中。通过UniAppHookProxy生命周期回调初始化SDK即可无需关心合规问题。
+ We recommend changing the third-party SDK integration method to native plug-in integration into offline packaging. By initializing the SDK through the UniAppHookProxy lifecycle callback, you don't need to care about compliance issues.
+ 如果开发者同学一定要在Application中初始化三方SDK。可以在Application的onCreate回调中添加初始化逻辑。但前提是需要在super.onCreate()之后调用。并使用SDK.isAgreePrivacy(Context)获取当前隐私协议状态特殊处理。
+ If you are a developer, you must initialize the third-party SDK in the Application. You can add initialization logic in the Application's onCreate callback. But the premise is that it needs to be called after super.onCreate(). And use SDK.isAgreePrivacy(Context) to get the current privacy agreement state special handling.
```
public class MyApplication extends DCloudApplication {
	@Override
	public void onCreate() {
		super.onCreate();
		if(SDK.isAgreePrivacy(getBaseContext())) {
			//正常初始化三方SDK
			//Initialize the third-party SDK normally
		} else {
			//初始化三方SDK提供规避隐私合规初始化函数 如果没有则不要初始化
			//Initialize the third-party SDK to provide an initialization function to avoid privacy compliance. If not, do not initialize
		}
	}
}
```

#### 17、请提供64位版本软件包后再提交审核
#### 17. Please provide the 64-bit version software package before submitting it for review

+ HBuilder项目打包需要配置勾选`arm64-v8a`,默认只会集成`armeabi-v7a`
![](https://native-res.dcloud.net.cn/uni-app/doc/app/android/stroe/qa17-1.png)

+ 如果有使用uni原生插件。需要查看插件是否支持`arm64-v8a`！是否支持请到插件详情页里查询。如果插件详情页里没有请咨询插件开发者提供信息或更换其他插件。
+ If using uni native plugin. Need to see if the plugin supports `arm64-v8a`! Please check the plugin details page if it is supported. If there is no plugin details page, please consult the plugin developer to provide information or replace other plugins.

#### 18、应用启动会主动申请`手机存储权限`、`访问设备信息权限`影响应用上架
#### 18. The application launch will actively apply for `mobile phone storage permission` and `access device information permission`, which will affect the application launch

+ 请阅读文档[Android平台应用启动时读写手机存储、访问设备信息(如IMEI)等权限策略](https://ask.dcloud.net.cn/article/36549)。配置`存储权限`及`访问设备信息权限`申请模式。可以配置`none`不申请。具体参考文档。
+ Please read the document [Permission policies for reading and writing mobile phone storage and accessing device information (such as IMEI) when Android platform applications are started](https://ask.dcloud.net.cn/article/36549). Configure the application mode for `storage permission` and `access device information permission`. `none` can be configured not to apply. Specific reference documents.
+ 配置`none`后在某些功能需要`手机存储权限`、`访问设备信息权限`也可以通过调用[requestPermissions](https://www.html5plus.org/doc/zh_cn/android.html#plus.android.requestPermissions)主动申请权限来支持后续业务逻辑。
+ After configuring `none`, some functions require `mobile phone storage permission` and `access device information permission`. You can also call [requestPermissions](https://www.html5plus.org/doc/zh_cn/android.html#plus .android.requestPermissions) to actively apply for permissions to support subsequent business logic.


#### 19、未同意隐私协议 chromium SDK提前通过GetConnectionInfo获取Wifi信息，MAC地址
#### 19. Not agreeing to the privacy agreement chromium SDK obtains Wifi information and MAC address through GetConnectionInfo in advance

+ 可以改androidPrivacy.json的hrefLoader配置 system 提供系统浏览器显示隐私条款修复问题 具体[参考文档](https://uniapp.dcloud.io/tutorial/app-privacy-android.html)
+ You can change the hrefLoader configuration of androidPrivacy.json system Provide system browser to display privacy terms and fix the problem Specific [Reference Document](https://uniapp.dcloud.io/tutorial/app-privacy-android.html)

#### 20、关于拒绝权限重复弹窗
#### 20. Repeated pop-up window about denying permission

HX3.6.1+版本 可以配置manifest.json配置checkPermissionDenied = true 校验已拒绝权限不再申请。(仅针对官方api主动权限申请行为，三方SDK、uni原生插件、plus.android.requestPermissions不受限制)
HX3.6.1+ version You can configure manifest.json to configure checkPermissionDenied = true to verify that the permission has been denied and no longer apply. (Only for the official api active permission application behavior, the third-party SDK, uni native plug-in, plus.android.requestPermissions are not restricted)
```
"app-plus": {
	...
	"checkPermissionDenied" : true,
}
```

#### 21、APP存在收集传感器行为
#### 21. The APP has the behavior of collecting sensors

+ 如果应用中有以下行为，请根据实际使用传感器的目的方式等补充好隐私政策并使用HX3.6.4+版本重新打包上架。
+ If there are any of the following behaviors in the app, please supplement the privacy policy according to the purpose of using the sensor and repackage it with HX3.6.4+ version.
  1. 使用了传感器相关API
  1. Using the sensor-related API
  2. 集成了地图定位相关模块
  2. Integrate map positioning related modules
  3. 使用了[plus.navigator.isSimulator](https://uniapp.dcloud.net.cn/tutorial/app-sec-api.html#issimulator)
  3. Use [plus.navigator.isSimulator](https://uniapp.dcloud.net.cn/tutorial/app-sec-api.html#issimulator)
+ 如果应用中没有上述行为，但上架应用市场反馈APP存在收集传感器行为，请使用HX3.6.4+版本重新打包上架。
+ If there is no above-mentioned behavior in the app, but the app market reports that the app has sensor collection behavior, please use the HX3.6.4+ version to repackage and put it on the shelf.

#### 22、小米上架，用户同意隐私政策前存在收集OAID的行为
#### 22. When Xiaomi is on the shelves, there is an act of collecting OAID before the user agrees to the privacy policy

+ 如果应用支持未同意模式运行，并且上架应用市场反馈用户同意隐私政策前存在收集OAID的行为，请补充好关于OAID的相关隐私政策并使用HX3.6.8+版本重新打包上架。
+ If the app supports non-consent mode, and the app market reports that the user has collected OAID before agreeing to the privacy policy, please supplement the relevant privacy policy about OAID and use the HX3.6.8+ version to repackage and put it on the shelf.

#### 23、应用启动时弹出权限申请
#### 23. Permission application pops up when the application starts

+ 参考[应用启动会主动申请手机存储权限、访问设备信息权限影响应用上架](https://uniapp.dcloud.net.cn/tutorial/android-store.html#_18%E3%80%81%E5%BA%94%E7%94%A8%E5%90%AF%E5%8A%A8%E4%BC%9A%E4%B8%BB%E5%8A%A8%E7%94%B3%E8%AF%B7%E6%89%8B%E6%9C%BA%E5%AD%98%E5%82%A8%E6%9D%83%E9%99%90%E3%80%81%E8%AE%BF%E9%97%AE%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF%E6%9D%83%E9%99%90%E5%BD%B1%E5%93%8D%E5%BA%94%E7%94%A8%E4%B8%8A%E6%9E%B6)进行配置。
+ Refer to [Application startup will actively apply for mobile phone storage permissions, access to device information permissions will affect the application store](https://uniapp.dcloud.net.cn/tutorial/android-store.html#_18%E3%80%81%E5 %BA%94%E7%94%A8%E5%90%AF%E5%8A%A8%E4%BC%9A%E4%B8%BB%E5%8A%A8%E7%94%B3%E8%AF %B7%E6%89%8B%E6%9C%BA%E5%AD%98%E5%82%A8%E6%9D%83%E9%99%90%E3%80%81%E8%AE%BF %E9%97%AE%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF%E6%9D%83%E9%99%90%E5%BD%B1%E5 %93%8D%E5%BA%94%E7%94%A8%E4%B8%8A%E6%9E%B6) for configuration.
+ 排查业务逻辑中是否有提前调用[plus.device.getInfo](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getInfo)等需要权限的API或主动调用[plus.android.requestPermissions](https://www.html5plus.org/doc/zh_cn/android.html#plus.android.requestPermissions)申请权限的情况，如果有则需要调整相关API的调用时机，触发相关业务场景时再调用，不要提前调用。
+ Check whether there is an API that requires permission such as [plus.device.getInfo](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getInfo) called in advance or actively called [ plus.android.requestPermissions](https://www.html5plus.org/doc/zh_cn/android.html#plus.android.requestPermissions) to apply for permission, if so, you need to adjust the timing of calling the relevant API to trigger the relevant business Call it in the scene, don't call it in advance.

#### 24、应用存在频繁自启动或关联启动的行为

+ 如果应用市场反馈的调用栈文件中有此信息`io.dcloud.xx.xx.xx.DownloadReceiver`，使用HBuilderX 3.6.18+ 重新打包提审即可。
+ 目前已知部分原生插件也同样有此隐私合规问题，开发者可根据调用栈文件中提供的信息大致判断出哪个原生插件有问题，这种情况需要联系插件作者进行整改。
+ 如果是非上述情况，可发帖或联系官方进行进一步排查。

#### 25、华为上架被拒，集成XX等SDK但未在隐私政策中明示
+ `com.netease`是由于`移动安全联盟OAID`使用了网易加固SDK导致的误报，3.7.6版本已调整`移动安全联盟OAID`版本以规避此问题，请使用HBuilderX 3.7.6重新打包上架。
+ 官方模块中集成的SDK，参考[Android平台各功能模块隐私合规协议](https://ask.dcloud.net.cn/article/39484)补充好相应的隐私政策。
  * `cn.com.chinatelecom`参考[天翼账号服务与隐私协议](https://e.189.cn/sdk/agreement/detail.do?hidetop=true)
  * `com.tencent.tauth`参考[QQ隐私协议](https://wiki.connect.qq.com/qq%e4%ba%92%e8%81%94sdk%e9%9a%90%e7%a7%81%e4%bf%9d%e6%8a%a4%e5%a3%b0%e6%98%8e)
  * `com.tencent.stat`如果是离线打包，删除qq_mta-sdk-1.6.2.jar即可
+ 原生插件中集成的SDK，参考插件文档补充好相应的隐私政策。

#### 看不懂文档不知道如何修改？
#### Can't understand the document and don't know how to modify it?

可开通付费技术服务 参考：[https://ask.dcloud.net.cn/article/13015](https://ask.dcloud.net.cn/article/13015)
Paid technical services can be activated. Reference: [https://ask.dcloud.net.cn/article/13015](https://ask.dcloud.net.cn/article/13015)


**各大应用市场上架合规审查细节可能存在差异，如果开发者碰到相关问题请及时反馈，我们会及时汇总整理供大家参考**
**There may be differences in the compliance review details of the major application markets. If developers encounter relevant problems, please give feedback in time, and we will summarize and organize them in time for your reference**


#### 相关参考
#### Related References
+ Android平台隐私与政策提示框配置方法：[https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
+ Android platform privacy and policy prompt box configuration method: [https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
+ Android平台应用启动时读写手机存储、访问设备信息(如IMEI)等权限策略及提示信息：[https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549)
+ Permission policies and prompt information such as reading and writing mobile phone storage and accessing device information (such as IMEI) when the Android platform application starts: [https://ask.dcloud.net.cn/article/36549](https://ask.dcloud .net.cn/article/36549)
+ Android平台配置权限参考：[https://ask.dcloud.net.cn/article/36982](https://ask.dcloud.net.cn/article/36982)
+ Android platform configuration permission reference: [https://ask.dcloud.net.cn/article/36982](https://ask.dcloud.net.cn/article/36982)