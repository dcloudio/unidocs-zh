### 系统信息的概念

uni-app提供了异步(`uni.getSystemInfo`)和同步(`uni.getSystemInfoSync`)的2个API获取系统信息。

系统信息返回的内容非常多，各操作系统、各家小程序、各浏览器对它们的定义也不相同。uni-app里重新梳理了这些概念，同时为了向下兼容也保留了这些平台原来的概念，但不推荐使用。

按照运行环境层级排序，从底层向上，uni-app有6个概念：
- `device`：运行应用的设备，如iphone、huawei
- `os`：设备的操作系统，如 ios、andriod、windows、mac、linux
- `rom`：基于操作系统的定制，Android系统特有概念，如miui、鸿蒙
- `host`：运行应用的宿主程序，即OS和应用之间的运行环境，如浏览器、微信等小程序宿主、集成uniMPSDK的App。uni-app直接开发的app没有host概念
- `uni`：uni-app框架相关的信息，如uni-app框架的编译器版本、运行时版本
- `app`：开发者的应用相关的信息，如应用名称、版本

### uni.getSystemInfo(OBJECT)
异步获取系统信息

**OBJECT 参数说明：**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|是|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

#### success 返回参数说明

|参数分类	|参数|说明			|App平台值域		|Web平台值域		|小程序平台值域	|备注	|uni框架最低版本要求	|
|:-			|:-|:-|:-|:-|:-|:-|:-|
|device |deviceId			|设备 id	。由 uni-app 框架生成并存储，清空 Storage 会导致改变||||||
|			|deviceType			|设备类型。如`phone`、`pad`、`pc`、`unknow`		|[详见](#tips)|`phone`、`pad`、`pc`、`unknow`|`phone`、`pad`、`pc`||uni-app 3.4.10+|
|			|deviceBrand		|设备品牌。如：`apple`、`huawei`		||不支持	|||uni-app 3.4.10+|
|			|deviceModel		|设备型号		||部分设备无法获取	|||uni-app 3.4.10+|
|			|deviceOrientation		|设备方向		|`竖屏 portrait`、`横屏 landscape`|`竖屏 portrait`、`横屏 landscape`|`竖屏 portrait`、`横屏 landscape`。仅微信百度小程序支持||uni-app 3.4.13+|
|			|devicePixelRatio		|设备像素比		||	|||uni-app 3.4.13+|
|os		|osName|系统名称|ios、android|ios、android、windows、macos、linux|ios、android、windows、macos||uni-app 3.4.10+|
|			|osVersion			|操作系统版本。如 ios 版本，andriod 版本|||||uni-app 3.4.10+|
|			|osLanguage			|操作系统语言[详见](#tips)|Android仅支持主语言+地区：`zh-CN 中文简体`、iOS支持主语言+次语言+地区`zh-Hans-CN 中文简体` |与浏览器语言一致	|不支持	|	|uni-app 3.4.10+|
|			|osTheme			|操作系统主题			|light、dark。iOS平台只有将应用主题设置为跟随系统时才能获取到系统的主题|不支持	|不支持	||uni-app 3.4.10+|
|			|osAndroidAPILevel | Android 系统API库的版本。详情参考[Android 官方文档](https://developer.android.google.cn/guide/topics/manifest/uses-sdk-element?hl=en#ApiLevels)|`仅 Android 支持`|不支持|不支持||uni-app 3.4.10+|
|rom	|romName			|rom 名称|Android 部分机型获取不到值，[详见](#romname)。iOS 不支持|不支持|不支持||uni-app 3.4.13+|
|			|romVersion			|rom 版本|Android 部分机型获取不到值，[详见](#romname)。iOS 不支持|不支持|不支持||uni-app 3.4.13+|
|browser	|browserName		|浏览器名称或App的webview名称|chrome(android)、wkwebview(ios)、x5webview(app打包x5引擎)|chrome、edge、safari、firefox	|不支持||uni-app 3.4.10+|
|			|browserVersion		|浏览器版本、webview 版本|||不支持			||uni-app 3.4.10+|
|host	|hostName			|小程序宿主或uniMPSDK的集成宿主名称，如：`WeChat`、`FeiShu`|仅 UniMPSDK 支持	|不支持|[详见](#hostname)|微信小程序真机运行才有真值|uni-app 3.4.10+|
|			|hostVersion		|宿主版本。如：微信版本号|仅 UniMPSDK 支持	|不支持|小程序宿主版本||uni-app 3.4.10+|
|			|hostLanguage		|宿主语言|仅 UniMPSDK 支持	|不支持|小程序宿主语言||uni-app 3.4.10+|
|			|hostTheme			|宿主主题|`light`、`dark`。仅 UniMPSDK 支持	|不支持|`light`、`dark`。前提是微信小程序全局配置"darkmode":true时才能获取||uni-app 3.4.10+|
|			|hostFontSizeSetting	|用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px|不支持|不支持|微信小程序、支付宝小程序、百度小程序、QQ小程序、字节小程序(2.53.0+)||uni-app 3.4.13+|
|			|hostPackageName	|小程序宿主包名|仅 UniMPSDK 支持	|不支持|不支持||uni-app 3.4.10+|
|			|hostSDKVersion	|uni小程序SDK版本、小程序客户端基础库版本|仅 UniMPSDK 支持	|不支持|||uni-app 3.4.13+|
|uni-app框架	|uniPlatform		|uni-app 运行平台，与条件编译平台相同。[详见](#uniplatform) |app|`web`或`h5`|各家小程序，如`mp-weixin`||uni-app 3.4.10+|
|			|uniCompileVersion	|uni 编译器版本号。[详见](#uniplatform)|`3.4.10`、`3.2.9` 等|`3.4.10`、`3.2.9` 等|`3.4.10`、`3.2.9` 等||uni-app 3.4.10+|
|			|uniRuntimeVersion	|uni 运行时版本。[详见](#uniplatform)|`3.4.10`、`3.2.9` 等|`3.4.10`、`3.2.9` 等|`3.4.10`、`3.2.9` 等||uni-app 3.4.10+|
|app	|appId|`manifest` 中应用appid，即DCloud appid。			|||||uni-app 3.4.10+|
|			|appName			|`manifest` 中应用名称	||||和`字节跳动小程序`字段冲突，`字节跳动小程序`原字段与`hostName`一致|uni-app 3.4.10+|
|			|appVersion			|`manifest` 中应用版本名称。		|||||uni-app 3.4.10+|
|			|appVersionCode		|`manifest` 中应用版本名号。		|||||uni-app 3.4.10+|
|			|appWgtVersion		|应用资源（wgt）的版本名称。		|||||uni-app 3.4.15+|
|			|appLanguage		|应用设置的语言|`en`、`zh-Hans`、`zh-Hant`、`fr`、`es`|`en`、`zh-Hans`、`zh-Hant`、`fr`、`es`|`en`、`zh-Hans`、`zh-Hant`、`fr`、`es`||uni-app 3.4.13+|
|其他	 |ua| userAgent标识	|||不支持		||uni-app 3.4.10+|
|			|screenWidth		|屏幕宽度|||||		|
|			|screenHeight		|屏幕高度		|||||		|
|			|windowWidth		|可使用窗口宽度	|||||		|
|			|windowHeight		|可使用窗口高度	|||||		|
|			|windowTop			|可使用窗口的顶部位置	|||||		|
|			|windowBottom		|可使用窗口的底部位置	|||||		|
|			|statusBarHeight	|手机状态栏的高度||||||		
|			|safeArea			|在竖屏正方向下的安全区域。由于此属性理解和使用比较困难，更推荐使用 safeAreaInsets 属性。[详见](#safearea)|||微信、百度（开发者工具暂不支持，真机有效）、字节跳动、飞书、支付宝（iOS真机）、快手、QQ小程序、华为快应用|||	
|			|safeAreaInsets		|在竖屏正方向下的安全区域插入位置。与小程序定义的 safeArea 用途相同，但是规范参考 iOS 平台的 [safeAreaInsets](https://developer.apple.com/documentation/uikit/uiview/2891103-safeareainsets) 更利于理解和使用。[详见](#safearea)|||微信、百度（开发者工具暂不支持，真机有效）、字节跳动、飞书、支付宝小程序（iOS真机）、华为快应用||uni-app 2.5.3+|

#### 某些小程序特殊的返回参数

|参数|说明|平台差异说明|
|:-|:-|:-|
|benchmarkLevel|设备性能等级。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）|微信小程序Android版、QQ小程序Android版|
|batteryLevel	|	剩余电量百分比（仅 iOS 有效）	|微信小程序|
|currentBattery|当前电量百分比|支付宝小程序|
|navigationBarHeight|导航栏的高度|百度小程序|
|titleBarHeight|标题栏高度|支付宝小程序|
|albumAuthorized	|	允许微信使用相册的开关（仅 iOS 有效）	|微信小程序|
|cameraAuthorized	|	允许微信使用摄像头的开关	|微信小程序|
|locationAuthorized	|	允许微信使用定位的开关	|微信小程序|
|microphoneAuthorized	|	允许微信使用麦克风的开关	|微信小程序|
|notificationAuthorized	|	允许微信通知的开关	|微信小程序|
|notificationAlertAuthorized	|	允许微信通知带有提醒的开关（仅 iOS 有效）	|微信小程序|
|notificationBadgeAuthorized	|	允许微信通知带有标记的开关（仅 iOS 有效）	|微信小程序|
|notificationSoundAuthorized	|	允许微信通知带有声音的开关（仅 iOS 有效）	|微信小程序|
|bluetoothEnabled	|	蓝牙的系统开关	|微信小程序|
|locationEnabled	|	地理位置的系统开关	|微信小程序|
|wifiEnabled	|	Wi-Fi 的系统开关	|微信小程序|
|cacheLocation|上一次缓存的位置信息|百度小程序(安卓端最低基础库版本 3.40.4 ；iOS 最低支持版本 3.70.2)|
|storage|设备磁盘容量|支付宝小程序|

#### 不推荐使用的返回参数，仅为向下兼容保留

|参数|说明|平台差异说明|
|:-|:-|:-|
|pixelRatio			|设备像素比		||
|brand|设备品牌。uni-app 3.4.10+ 后该字段为全小写，可能要做兼容处理|App、微信小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序|
|model|设备型号|全平台支持。Web 端部分设备无法获取具体型号|
|system|操作系统名称及版本，如Android 10||
|language|应用设置的语言||
|version|引擎版本号|Web不支持|
|platform|客户端平台，值域为：`ios`、`android`、`mac（3.1.10+）`、`windows（3.1.10+）`、`linux（3.1.10+）`||
|host|宿主平台|百度小程序|
|SDKVersion|客户端基础库版本|支付宝小程序和Web不支持|
|swanNativeVersion|宿主平台版本号|百度小程序|
|app|当前运行的客户端|支付宝小程序|
|AppPlatform|App平台|QQ小程序|
|fontSizeSetting|用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px|微信小程序、支付宝小程序、百度小程序、QQ小程序、字节小程序(2.53.0+)|


#### uniPlatform 返回值说明 @uniplatform

|值|生效条件|
|:-|:-|
|app|App|
|web|Web|
|mp-weixin|微信小程序|
|mp-alipay|支付宝小程序|
|mp-baidu|百度小程序|
|mp-toutiao|字节跳动小程序|
|mp-lark|飞书小程序|
|mp-qq|QQ小程序|
|mp-kuaishou|快手小程序|
|mp-jd|京东小程序|
|mp-360|360小程序|
|quickapp-webview|快应用通用(包含联盟、华为)|
|quickapp-webview-union|快应用联盟|
|quickapp-webview-huawei|快应用华为|

`uniCompileVersion`编译器版本 和 `uniRuntimeVersion`运行时版本，正常情况应该是一样的值，即uni-app的版本。

如果使用HBuilder自带的uni-app开发，该值即等同于HBuilder的版本；如果使用单独的uni-app cli开发，则等同于cli版本。

但在App平台，`uniCompileVersion` 和 `uniRuntimeVersion` 在某些情况的值会不一样：
- App云打包选择了不匹配的打包机版本，比如HBuilder版本较老，云端已经没有对应打包机，此时打包后`uniCompileVersion`会小于`uniRuntimeVersion`
- App离线打包，使用了不匹配的离线SDK
- App wgt升级，即手机上安装的App是老版的`uniRuntimeVersion`，wgt的新版使用了不同版本的HBuilder或uni-app cli版本，并且实施了应用资源升级

#### romName 返回值说明 @romname

|值|解释|
|:-|:-|
|MIUI|小米|
|EMUI|华为|
|HarmonyOS|华为鸿蒙|
|Magic OS|荣耀|
|ColorOS|oppo|
|Funtouch OS|vivo|
|FLymeOS|魅族|
|SmartisanOS|锤子|

注意：不同rom的版本号规则不同，比如`MIUI`版本号是`V130`，而`HarmonyOS`的版本号是`2.0.0`

#### hostName 返回值说明 @hostname

|值|解释|
|:-|:-|
|WeChat|微信|
|wxwork|微信企业版|
|[百度宿主平台枚举值列表](https://smartprogram.baidu.com/docs/develop/api/device_sys/hostlist/)|百度|
|alipay|支付宝|
|amap|高德|
|DINGTALK|钉钉|
|UC|UC浏览器|
|QUARK|夸克浏览器|
|AK|阿里健康|
|YK|优酷|
|[字节宿主平台枚举值列表](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/device/system-information/tt-get-system-info/#appname-%E8%AF%B4%E6%98%8E)|字节跳动系列|
|qq|QQ|
|KUAISHOU|快手|

#### safeArea 返回值说明 @safearea

|参数	|类型	|说明		|
|:-		|:-			|:-			|
|left	|Number	|安全区域左上角横坐标			|
|right	|Number	|安全区域右下角横坐标			|
|top	|Number	|安全区域左上角纵坐标			|
|bottom	|Number	|安全区域右下角纵坐标			|
|width	|Number	|安全区域的宽度，单位逻辑像素	|
|height	|Number	|安全区域的高度，单位逻辑像素	|

**safeAreaInsets 的结构**

|参数	|类型	|说明		|
|:-		|:-			|:-			|
|left	|Number	|安全区域左侧插入位置			|
|right	|Number	|安全区域右侧插入位置			|
|top	|Number	|安全区顶部插入位置			|
|bottom	|Number	|安全区域底部插入位置			|

#### language 返回值说明

language的国际规范是`BCP47规范`，分为三段，主语言-次语言-地区。例如`zh-Hans-CN`，表示 中文-简体-中国大陆

但除了主语言外，后两者均可省略。在不同平台，它们的省略规则也不相同。

- app-ios，不省略，返回`zh-Hans-CN`
- app-android、web、微信小程序，省略次语言，返回`zh-CN`
- uni-app框架和应用的多语言，以及支付宝小程序，则用`zh-Hans`来表示简体中文

所以获取语言后，不能直接字符串比较，需要拆段比较，npm上也有专门做`BCP47语言规范`比较的库。

#### deviceId 返回值说明

Web、小程序、iOS，属于对用户隐私保护比较严格的平台，在这些平台很难获取有效的设备唯一标记。

Android也已经改进用户隐私保护。在极老的手机上可以无限制获取imei，在次老的手机上，获取imei等隐私信息时需要弹框让用户授权。新的Android手机（Android10以上）已经彻底无法获取imei了。

所以标记设备，大多只能依靠本地存储一个随机数来标记。

deviceId，在`app-android`平台，会根据优先使用imei、mac（仅在用户已授权的情况下，如果发现需要授权或未授权，则跳过此步骤），如果没有获取到就使用随机生成的标识。其他平台是直接使用随机生成的标识。

当使用本地存贮的随机数时，发生以下情况将导致deviceId失效：
- 卸载App
- Android上重置App数据
- 浏览器清空缓存或开启隐私模式，

app下需要广告追踪的场景，在iOS上可以使用[idfa](https://ask.dcloud.net.cn/article/36107)、部分国产Android手机可以使用[OAID](http://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID)

#### deviceModel 返回值说明
uni-app 3.5.1+ 版本规范了 deviceModel 返回值，例如之前返回 `iPhone11ProMax` 新版本返回值为 `iPhone 11 Pro Max`，各设备型号[参考规范](https://www.theiphonewiki.com/wiki/Models) 中 Generation 对应的值

注意：新机型刚推出一段时间会显示 Unknown，官方会尽快进行适配。

#### 其他注意 @tips
- `deviceType`：
  - `app-ios` 只支持 `phone`、`pad`。
  - `app-android` 支持 `phone`、`pad`、`tv`、`car`、`watch`、`vr`、`appliance`、`undefined`、`unknown`，关于各个类型的更详细解释参考[Android官方文档](https://developer.android.com/guide/)。
  - 其中，`app-android` 平台下 `pad` 类型的判断，在国产pad等非google官方设备上并不一定准确。如果有需要开发者可自行根据型号或屏幕大小判断。uni-app框架源码中判断`pad`的java代码如下，供参考：

	```java
	public static boolean isTablet(Context context) {
		return (context.getResources().getConfiguration().screenLayout & Configuration.SCREENLAYOUT_SIZE_MASK) >= Configuration.SCREENLAYOUT_SIZE_LARGE;
	}
	```
- `osTheme`：`app-ios` 只有将应用主题设置为跟随系统时才能获取到系统的主题。小程序也有类似限制。
- 屏幕高度 = 原生NavigationBar高度（含状态栏高度）+ 可使用窗口高度 + 原生TabBar高度
- windowHeight不包含NavigationBar和TabBar的高度
- Web端，windowTop等于NavigationBar高度，windowBottom等于TabBar高度
- App端，windowTop等于透明状态NavigationBar高度，windowBottom等于透明状态TabBar高度
- 高度相关信息，要放在 onReady 里获取。太早取不到。


本API在其他小程序的文档链接：
- [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoAsync.html)
- [支付宝小程序](https://opendocs.alipay.com/mini/api/system-info)
- [百度小程序](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfoSync/)
- [字节小程序](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/device/system-information/tt-get-system-info-sync/)
- [飞书小程序](https://open.feishu.cn/document/uYjL24iN/uQjNx4CN2EjL0YTM)
- [QQ小程序](https://q.qq.com/wiki/develop/game/API/basic/system.html#qq-getsysteminfo)
- [快手小程序](https://mp.kuaishou.com/docs/develop/api-next/basic/system/ks.getSystemInfoSync.html#systeminfo)
- [京东小程序](https://mp-docs.jd.com/api/equipment/system.html)
- [华为快应用](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-systeminfo-0000001126227753)

#### 示例 @getsysteminfo-new-fields

调用代码示例
```javascript
uni.getSystemInfo({
	success: function (res) {
		console.log(res.appName)
	}
});
```

在不同平台 getSystemInfo 的返回值（表格较长，可缩放页面后拖动横向滚动条）

> 标明 `-` 的都为 undefined，其他值都与所列出项相同

|字段名称|App-Android|App-iOS|h5|Android uniMPsdk|iOS uniMPsdk|mp-weixin|mp-alipay|mp-baidu|mp-toutiao|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|appId|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|
|appName|test|test|test|test|test|test|test|test|test|
|appVersion|1.0.0|1.0.0|1.0.0|1.0.0|1.0.0|1.0.0|1.0.0|1.0.0|1.0.0|
|appVersionCode|100|100|100|100|100|100|100|100|100|
|appLanguage|zh-Hans|zh-Hans|zh-Hans|zh-Hans|zh-Hans|zh-Hans|zh-Hans|zh-Hans|zh-Hans|
|browserName|chrome|wkwebview|safari|chrome|wkwebview|-|-|-|-|
|browserVersion|96.0.4664.104|13.4.13|13.0.3|88.0.4324.93|15.4|-|-|-|-|
|deviceId|d3db0944da20f333|F791564F-853B-47B6-8CB8-27FF59315059|16518284854447835016|c7eafa7ed8774c0d|F791564F-853B-47B6-8CB8-27FF59315059|1652178285720384773|16536215804846585135|1653359639811213582|16538995501084056633|
|deviceBrand|xiaomi|apple|-|huawei|apple|iphone|iphone|iphone|apple|
|deviceModel|Mi10Pro|iPhone13ProMax|iPhone|MXW-AN00|iPhoneSimulator|iPhone6/7/8Plus|iPhone14,3|iPhone6/7/8|iPhone6|
|deviceType|phone|phone|phone|phone|phone|phone|phone|phone|phone|
|deviceOrientation|portrait|portrait|portrait|portrait|portrait|portrait|-|portrait|-|
|devicePixelRatio|2.5687501430511475|3|2|3|3|3|3|2|2|
|hostName|-|-|safari|MPLauncherV3|uniMPDemo|WeChat、wxwork|alipay、amap、DINGTALK、UC、QUARK、AK、YK|baiduboxapp 等[百度宿主平台枚举值列表](https://smartprogram.baidu.com/docs/develop/api/device_sys/hostlist/)|Douyin、Toutiao、news_article_lite、live_stream、XiGua、PPX|
|hostVersion|-|-|13.0.3|1.0|1.0.0|8.0.5|10.2.23|2.45.0|6.6.3|
|hostLanguage|-|-|zh-CN|zh-CN|zh-Hans-CN|zh-CN|zh-CN|zh-CN|
|hostTheme|-|-|-|light|light|-|-|-|-|
|hostPackageName|-|-|-|com.example.mplauncherv3|io.dcloud.hellounimp|-|-|-|-|
|hostSDKVersion|-|-|-|3.4.13|3.4.13|2.24.2|2.7.6|3.450.16|2.49.0|
|osName|android|ios|ios|android|ios|ios|ios|ios|ios|
|osVersion|12|15.5|13.2.3|10|15.4|10.0.1|15.5|15.5|10.0.1|
|osLanguage|zh-CN|zh-Hans-CN|-|zh-CN|zh-Hans-CN|-|-|-|-|
|osTheme|light|light|-|light|light|-|-|-|-|
|osAndroidAPILevel|31|-|-|29|-|-|-|-|-|-|
|romName|MIUI|-|-|HarmonyOS|-|-|-|-|-|
|romVersion|V130|-|-|2.0.0|-|-|-|-|-|
|uniPlatform|app|app|web|app|app|mp-weixin|mp-alipay|mp-baidu|mp-toutiao|
|uniCompileVersion|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|
|uniRuntimeVersion|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|


### uni.getSystemInfoSync()

获取系统信息的同步接口。`调用参数和返回值同上getSystemInfo`。


> 设备信息内容多且复杂，欢迎开发者测试更多环境设备并编辑本文档参与贡献。
