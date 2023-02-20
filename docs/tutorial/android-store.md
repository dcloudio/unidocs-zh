### 背景

为有效治理App强制授权、过度索权、超范围收集个人信息等现象，落实《网络安全法》《消费者权益保护法》的要求，保障个人信息安全，2019年1月，中央网信办、工信部、公安部、市场监管总局等四部委发布了《关于开展App违法违规收集使用个人信息专项治理的公告》，在全国范围组织开展App违法违规收集使用个人信息专项治理，并陆续出台完善了《App违法违规收集使用个人信息行为认定方法》、《GB/T 35273-2020 信息安全技术 个人信息安全规范》等标准规范。

根据以上规范要求，各大应用市场都加强应用的检测，要求应用必须符合相关政策，否则应用将有被通报或下架的风险。

### APP因合规问题无法上架

请认真的阅读以下步骤来检测自己的APP！有效的解决上架问题

+ APP不是由HbuilderX`3.6.1+`云打包生产的请抓紧时间升级到HbuilderX`3.6.1+`版本。重新打包！
+ APP是离线打包请升级SDK到`3.6.1+`版本重新编辑打包！[下载地址](https://nativesupport.dcloud.net.cn/AppDocs/download/android)
+ 不要将自定义基座提交平台审核。调试模式下不会处理合规问题。需要注意！
+ APP没有配置隐私与政策提示框。请认真阅读[Android平台隐私与政策提示框配置方法](https://ask.dcloud.net.cn/article/36937)配置你APP的隐私弹窗。
+ 配置隐私弹窗时一定要配置使用`template`模式。否则无法上架应用市场。应用内部自己实现的隐私弹窗也不行。一定要使用uni提供的隐私弹窗并使用`template`模式切记！
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
+ 查看是否集成uni原生插件。有些权限或是违规获取可能是uni原生插件引发的。建议使用排除法删除插件重新打包检测
+ 检查是否集成了fcm推送(包含unipush中的fcm)、google统计、google推送、google登录模块。由于这些模块都集成google的gms服务会提前获取android id导致无法在国内正常上架。打包时请在manifest.json配置中排除这些功能模块。
+ APP都符合以上条件要求。上架依然失败！请向检测平台要求提供代码调用堆栈。请拿着堆栈信息去[ASK论坛](https://ask.dcloud.net.cn/explore/)发帖说明问题并@管理人员反馈

### 隐私政策注意事项

+ 必须确保应用存在《隐私政策》，在应用首次启动时弹出提示并取得用户同意。
+ 一定要配置使用`template`模式隐私与政策提示框 [详情参考](https://ask.dcloud.net.cn/article/36937)
+ 必须在“隐私与政策”非常清楚、全面地说明（不要用可能收集、了解用户信息这种模糊不清晰的词语）收集用户个人信息的目的、方式和范围，用户个人信息包括但不限于mac地址、设备序列号、imei、imsi、软件安装列表、通讯录信息、短信信息等。
+ 如果反馈说有违规获取敏感信息行为，请查看[Android平台各功能模块隐私合规协议](https://ask.dcloud.net.cn/article/39484)各功能模块隐私协议。如果你集成了相关模块就一定要写入到app的隐私协议中。
+ 必须在《隐私政策》中必告知用户您的应用基于DCloud uni-app(5+ App/Wap2App)开发，添加如下协议：
  
  `我们的产品基于DCloud uni-app(5+ App/Wap2App)开发，应用运行期间需要收集您的设备唯一识别码（IMEI/android ID/DEVICE_ID/IDFA、SIM 卡 IMSI 信息、OAID）以提供统计分析服务，并通过应用启动数据及异常错误日志分析改进性能和用户体验，为用户提供更好的服务。`


### 常见问题

#### 1、如何解决"强制、频繁、过度索取权限"问题

对于权限问题，主要注意以下几个方面：

+ 应用中没有对应的服务或场景时，不要申请对应权限（例如没有使用到位置的服务时，不要申请定位权限）
+ 应用申请权限时，如果用户拒绝，不要直接退出APP无法使用。千万不要将应用启动时申请“读写手机存储”和“访问设备信息”权限设置为“always”，详情参考：[https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549)
+ 调用申请权限相关时，如果用户拒绝，非用户主动触发功能，不要重复调用API触发弹出申请权限窗口影响用户使用
+ 不要在页面生命周期onShow中调用可能触发权限提示框的API，如 [uni.getLocation](https://uniapp.dcloud.io/api/location/location?id=getlocation)、[uni.chooseImage](https://uniapp.dcloud.io/api/media/image?id=chooseimage)`等`。

#### 2、离线打包的apk！提交市场审核被报提前获取用户信息

离线打包请使用3.6.1+版本的SDK。并配置uni-app的隐私协议弹窗。不要自行通过原生能力实现隐私弹窗，否则无法正常限制SDK内部获取用户信息逻辑。导致合规检测不合规！

#### 3、如何解决“强制用户使用定向推送功能”问题

《隐私政策》中涉及到 “推荐”、“定制”、“个性化”等关键字改为“提供、展示、通知、发送、、、”等字眼，如果确实会涉及到个性化服务请在app的设置中增加个性化推送开关

#### 4、如何解决 用户点击《隐私政策》“同意”前，APP和SDK不要进行任何行为，包括SDK不能初始化，APP或SDK不能收集用户信息（包括但不限于IMEI、IMSI、设备MAC地址、软件列表、设备序列号、androidID）

+ 请先确保APK是基于3.6.1+版本生产的！
+ 确保已配置使用“template”模式隐私与政策提示框！
+ 隐私链接不能存在获取用户信息、定位信息等js代码。如有请去除！
+ 可以通过小米手机 系统是MIUI12设备。安装你的应用。然后查看`应用详情`-->`应用行为记录`是否在点击“同意”前有获取权限信息等情况。
+ 如果你 app 是离线打包请务必关闭调试开关，修改项目dcloud_control.xml中syncDebug为false
+ 以上都符合条件那就检测app是否集成三方SDK或者uni原生插件请咨询相关SDK提供方平台是否涉及有关合规问题。请更新SDK或找uni原生插件更新相关SDK合规操作。
+ 都符合请重新提交平台检测。

#### 5、如何解决“用户不同意强制退出应用”问题

这个问题可能是隐私弹窗显示后，用户选择了“不同意”按钮后应用退出导致的。请按以下修改。

+ 配置二次弹窗提示second，参考[https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
+ 二次弹窗配置按钮信息为“同意并继续”和“退出应用”

#### 6、离线打包集成三方SDK

如果重写了DCloudApplication，需要注意在Application初始化的三方SDK的合规操作。防止导致启动隐私弹窗前获取了用户信息无法上架

#### 7、app上架应用市场，检测集成了广告被拒的解决方案

+ 使用HX云打包时是否勾选了三方广告！如果勾选了请在隐私协议添加广告隐私说明。误勾选请去除并重新打包上架。
+ 离线打包检测是否集成了相关三方广告SDK！如果集成了请在隐私协议添加广告隐私说明。误集成请去除并重新编译apk上架。

#### 8、应用没有勾选三方广告模块但是上架华为市场检测反馈集成了广告被拒

+ 请使用HX3.6.1+重新打包

#### 9、华为市场检测app在用户同意隐私政策前申请获取用户个人信息导致无法上架市场架

我们已经收到很多开发者反馈，其他应用市场都已上架成功。但华为检测时则上架被拒。猜测是华为应用市场提交新的apk检测后依然检测之前提交的apk，导致检测不通过的问题。
这种情况请联系华为应用市场技术支持，告诉他新版本已经修改了，让华为应用市场重新检测审核。

#### 10、应用安装运行会弹出`通知授权`申请。并未集成相关功能怎么会有这样的弹窗申请呢？

+ 如果你是VIVO手机设备则忽略即可。这是VIVO系统机制问题。非vivo应用市场安装的应用都会默认弹出通知授权弹窗。并非应用发起的授权。不会影响隐私政策
+ 检查集成的uni-app原生插件，可能是原生插件触发了权限申请。可以暂时去掉插件排查该问题。

#### 11、安卓应用漏洞引发无法上架问题

+ 请使用HX3.6.1+重新云打包
+ 对apk进行加固。推荐使用腾讯云

[安全漏洞参考文档](https://ask.dcloud.net.cn/article/39020)

#### 12、您的应用存在获取用户的软件安装列表敏感信息行为

+ 请使用HX3.6.1+重新云打包
+ 检查您的应用都使用了什么模块。然后查看[Android平台各功能模块隐私合规协议](https://ask.dcloud.net.cn/article/39484)文档相关协议。将协议补充道隐私协议中。切记不要只填写链接。明文说明获取了什么信息干什么用了都要说清楚。越清晰越好。

#### 13、应用存在不合理获取短信记录相关权限的行为

+ 请使用HX3.6.1+打包
+ 查看是否使用了“Messaging”模块。Messaging会涉及短信相关权限。如果不需要请删除配置。
+ 查看是否使用uni原生插件。可能是原生插件携带的权限。建议使用排除法删除插件在检测。

#### 14、您的应用在后台状态下获取了用户的MAC信息，且未在应用内的隐私政策

+ 查看是否集成了UniPush
+ 如果集成UniPush请更新个推隐私协议条款！重点是补充MAC信息描述[参考](https://ask.dcloud.net.cn/article/39484)
+ 没有集成UniPush请向检测平台获取java调用堆栈。拿到java调用堆栈在[ask论坛](https://ask.dcloud.net.cn/explore/)发帖咨询

#### 15、未经许可读取个人信息 获取ANDROID ID

+ 检查是否集成了fcm推送(包含unipush中的fcm)、google统计、google推送、google登录模块。
+ 如果集成了则不能国内上架！原因是集成这些模块会将google的GMS服务导入安装包中。启动会获取android id导致无法上架。
+ 检查uni-app项目在manifest.json将上述模块去除重新打包上架
+ 没有集成这些模块可以向检测平台获取调用堆栈。拿到java调用堆栈在[ask论坛](https://ask.dcloud.net.cn/explore/)发帖咨询

#### 16、离线打包自定义DCloudApplication，初始化其他三方SDK如何处理合规问题

+ 我们推荐将三方SDK集成方式改为原生插件集成到离线打包中。通过UniAppHookProxy生命周期回调初始化SDK即可无需关心合规问题。
+ 如果开发者同学一定要在Application中初始化三方SDK。可以在Application的onCreate回调中添加初始化逻辑。但前提是需要在super.onCreate()之后调用。并使用SDK.isAgreePrivacy(Context)获取当前隐私协议状态特殊处理。
```
public class MyApplication extends DCloudApplication {
	@Override
	public void onCreate() {
		super.onCreate();
		if(SDK.isAgreePrivacy(getBaseContext())) {
			//正常初始化三方SDK
		} else {
			//初始化三方SDK提供规避隐私合规初始化函数 如果没有则不要初始化
		}
	}
}
```

#### 17、请提供64位版本软件包后再提交审核

+ HBuilder项目打包需要配置勾选`arm64-v8a`,默认只会集成`armeabi-v7a`
![](https://native-res.dcloud.net.cn/uni-app/doc/app/android/stroe/qa17-1.png)

+ 如果有使用uni原生插件。需要查看插件是否支持`arm64-v8a`！是否支持请到插件详情页里查询。如果插件详情页里没有请咨询插件开发者提供信息或更换其他插件。

#### 18、应用启动会主动申请`手机存储权限`、`访问设备信息权限`影响应用上架

+ 请阅读文档[Android平台应用启动时读写手机存储、访问设备信息(如IMEI)等权限策略](https://ask.dcloud.net.cn/article/36549)。配置`存储权限`及`访问设备信息权限`申请模式。可以配置`none`不申请。具体参考文档。
+ 配置`none`后在某些功能需要`手机存储权限`、`访问设备信息权限`也可以通过调用[requestPermissions](https://www.html5plus.org/doc/zh_cn/android.html#plus.android.requestPermissions)主动申请权限来支持后续业务逻辑。


#### 19、未同意隐私协议 chromium SDK提前通过GetConnectionInfo获取Wifi信息，MAC地址

+ 可以改androidPrivacy.json的hrefLoader配置 system 提供系统浏览器显示隐私条款修复问题 具体[参考文档](https://uniapp.dcloud.io/tutorial/app-privacy-android.html)

#### 20、关于拒绝权限重复弹窗

HX3.6.1+版本 可以配置manifest.json配置checkPermissionDenied = true 校验已拒绝权限不再申请。(仅针对官方api主动权限申请行为，三方SDK、uni原生插件、plus.android.requestPermissions不受限制)
```
"app-plus": {
	...
	"checkPermissionDenied" : true,
}
```

#### 21、APP存在收集传感器行为

+ 如果应用中有以下行为，请根据实际使用传感器的目的方式等补充好隐私政策并使用HX3.6.4+版本重新打包上架。
  1. 使用了传感器相关API
  2. 集成了地图定位相关模块
  3. 使用了[plus.navigator.isSimulator](https://uniapp.dcloud.net.cn/tutorial/app-sec-api.html#issimulator)
+ 如果应用中没有上述行为，但上架应用市场反馈APP存在收集传感器行为，请使用HX3.6.4+版本重新打包上架。

#### 22、小米上架，用户同意隐私政策前存在收集OAID的行为

+ 如果应用支持未同意模式运行，并且上架应用市场反馈用户同意隐私政策前存在收集OAID的行为，请补充好关于OAID的相关隐私政策并使用HX3.6.8+版本重新打包上架。

#### 23、应用启动时弹出权限申请

+ 参考[应用启动会主动申请手机存储权限、访问设备信息权限影响应用上架](https://uniapp.dcloud.net.cn/tutorial/android-store.html#_18%E3%80%81%E5%BA%94%E7%94%A8%E5%90%AF%E5%8A%A8%E4%BC%9A%E4%B8%BB%E5%8A%A8%E7%94%B3%E8%AF%B7%E6%89%8B%E6%9C%BA%E5%AD%98%E5%82%A8%E6%9D%83%E9%99%90%E3%80%81%E8%AE%BF%E9%97%AE%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF%E6%9D%83%E9%99%90%E5%BD%B1%E5%93%8D%E5%BA%94%E7%94%A8%E4%B8%8A%E6%9E%B6)进行配置。
+ 排查业务逻辑中是否有提前调用[plus.device.getInfo](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getInfo)等需要权限的API或主动调用[plus.android.requestPermissions](https://www.html5plus.org/doc/zh_cn/android.html#plus.android.requestPermissions)申请权限的情况，如果有则需要调整相关API的调用时机，触发相关业务场景时再调用，不要提前调用。

#### 24、应用存在频繁自启动或关联启动的行为

+ 如果应用市场反馈的调用栈文件中有此信息`io.dcloud.xx.xx.xx.DownloadReceiver`，使用HBuilderX 3.6.18+ 重新打包提审即可。
+ 目前已知部分原生插件也同样有此隐私合规问题，开发者可根据调用栈文件中提供的信息大致判断出哪个原生插件有问题，这种情况需要联系插件作者进行整改。
+ 如果是非上述情况，可发帖或联系官方进行进一步排查。

#### 看不懂文档不知道如何修改？

可开通付费技术服务 参考：[https://ask.dcloud.net.cn/article/13015](https://ask.dcloud.net.cn/article/13015)


**各大应用市场上架合规审查细节可能存在差异，如果开发者碰到相关问题请及时反馈，我们会及时汇总整理供大家参考**


#### 相关参考
+ Android平台隐私与政策提示框配置方法：[https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
+ Android平台应用启动时读写手机存储、访问设备信息(如IMEI)等权限策略及提示信息：[https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549)
+ Android平台配置权限参考：[https://ask.dcloud.net.cn/article/36982](https://ask.dcloud.net.cn/article/36982)