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

离线打包请使用3.2.15+版本的SDK。并配置uniapp的隐私协议弹窗。不要自行通过原生能力实现隐私弹窗，否则无法正常限制SDK内部获取用户信息逻辑。导致合规检测不合规！
For offline packaging, please use SDK version 3.2.15+. And configure uniapp's privacy agreement pop-up window. Do not implement the privacy pop-up window through native capabilities by yourself, otherwise the logic of obtaining user information inside the SDK will not be properly restricted. Resulting in non-compliance with compliance detection!

#### 3、如何解决“强制用户使用定向推送功能”问题
#### 3. How to solve the problem of "Forcing users to use the directed push function"

《隐私政策》中涉及到 “推荐”、“定制”、“个性化”等关键字改为“提供、展示、通知、发送、、、”等字眼，如果确实会涉及到个性化服务请在app的设置中增加个性化推送开关
In the "Privacy Policy", keywords such as "recommendation", "customization" and "personalization" are changed to "provide, display, notify, send,,," and other words. If it does involve personalized services, please use the app Add a personalized push switch in the settings

#### 4、如何解决 用户点击《隐私政策》“同意”前，APP和SDK不要进行任何行为，包括SDK不能初始化，APP或SDK不能收集用户信息（包括但不限于IMEI、IMSI、设备MAC地址、软件列表、设备序列号、androidID）
#### 4. How to solve the problem before the user clicks "Agree" in the "Privacy Policy", the APP and SDK should not do anything, including that the SDK cannot be initialized, and the APP or SDK cannot collect user information (including but not limited to IMEI, IMSI, device MAC address, software list, device serial number, androidID)

+ 请先确保APK是基于3.2.15+版本生产的！
+ Please make sure that the APK is produced based on version 3.2.15+!
+ 确保已配置使用“template”模式隐私与政策提示框！
+ Make sure the Privacy and Policy Toolbox is configured to use the "template" mode!
+ 隐私链接不能存在获取用户信息、定位信息等js代码。如有请去除！
+ Private links cannot exist js codes such as obtaining user information and positioning information. If so, please remove it!
+ 可以通过小米手机 系统是MIUI12设备。安装你的应用。然后查看`应用详情`-->`应用行为记录`是否在点击“同意”前有获取权限信息等情况。
+ Available through Xiaomi phone system is MIUI12 device. Install your app. Then check whether `App Details`-->`App Behavior Record` has obtained permission information before clicking "Agree".
+ 如果你 app 是离线打包请务必关闭调试开关，修改项目dcloud_control.xml中syncDebug为false
+ If your app is packaged offline, be sure to turn off the debug switch, and modify syncDebug in the project dcloud_control.xml to false
+ 以上都符合条件那就检测app是否集成三方SDK或者uni原生插件请咨询相关SDK提供方平台是否涉及有关合规问题。请更新SDK或找uni原生插件更新相关SDK合规操作。
+ If the above conditions are met, then check whether the app integrates a third-party SDK or uni native plug-in. Please consult the relevant SDK provider platform for compliance issues. Please update the SDK or find uni native plugins to update related SDK compliance operations.
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

+ 请使用HX3.2.15+重新打包
+ Please use HX3.2.15+ to repackage

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
+ 检查集成的uniapp原生插件，可能是原生插件触发了权限申请。可以暂时去掉插件排查该问题。
+ Check the integrated uniapp native plugin, it may be that the native plugin triggers the permission request. You can temporarily remove the plugin to troubleshoot this problem.

#### 11、安卓应用漏洞引发无法上架问题
#### 11. The Android application vulnerability caused the problem of not being able to be listed

+ 请使用HX3.2.15+重新云打包
+ Please use HX3.2.15+ to repackage the cloud
+ 对apk进行加固。推荐使用腾讯云
+ Reinforce the apk. Tencent Cloud is recommended

[安全漏洞参考文档](https://ask.dcloud.net.cn/article/39020)
[Security Vulnerability Reference Document](https://ask.dcloud.net.cn/article/39020)

#### 12、您的应用存在获取用户的软件安装列表敏感信息行为
#### 12. Your application has the behavior of obtaining sensitive information of the user's software installation list

+ 请使用HX3.2.15+重新云打包
+ Please use HX3.2.15+ to repackage the cloud
+ 检查您的应用都使用了什么模块。然后查看[Android平台各功能模块隐私合规协议](https://ask.dcloud.net.cn/article/39484)文档相关协议。将协议补充道隐私协议中。切记不要只填写链接。明文说明获取了什么信息干什么用了都要说清楚。越清晰越好。
+ Check what modules your app uses. Then check the relevant agreements in the [Privacy Compliance Agreement of Each Functional Module of the Android Platform](https://ask.dcloud.net.cn/article/39484). Add the agreement to the privacy agreement. Remember not to just fill in the link. It is clear in plain text that what information is obtained and what it is used for. The clearer the better.

#### 13、应用存在不合理获取短信记录相关权限的行为
#### 13. There is an unreasonable behavior in the application to obtain relevant permissions for SMS records

+ 请使用HX3.2.15+打包
+ Please use HX3.2.15+ package
+ 查看是否使用了“Messaging”模块。Messaging会涉及短信相关权限。如果不需要请删除配置。
+ Check if the "Messaging" module is used. Messaging will involve SMS-related permissions. Delete the configuration if it is not needed.
+ 查看是否使用uni原生插件。可能是原生插件携带的权限。建议使用排除法删除插件在检测。
+ Check if uni native plugin is used. It may be the permissions carried by the native plugin. It is recommended to use the exclusion method to remove plugins during detection.

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