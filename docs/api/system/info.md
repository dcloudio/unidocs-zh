### 系统信息的概念

uni-app提供了同步(`uni.getSystemInfo`)和异步(`uni.getSystemInfoSync`)的2个API获取系统信息。

系统信息返回的内容非常多，各操作系统、各家小程序、各浏览器对它们的定义也不相同。uni-app里重新梳理了这些概念，同时为了向下兼容也保留了这些平台原来的概念，但不推荐使用。

按照运行环境层级排序，从底层向上，共有6个概念：
- `device`：运行应用的设备，如iphone、huawei
- `os`：运行应用的操作系统，如 ios、andriod、windows、mac、linux
- `rom`：Android系统特有概念，如miui、鸿蒙
- `host`：运行应用的宿主程序，即OS和应用之间的运行环境，如浏览器、微信、集成uniMPSDK的App
- `uni`：uni-app框架相关的信息，如uni-app框架版本
- `app`：开发者的应用相关的信息，如app版本

### uni.getSystemInfo(OBJECT)
异步获取系统信息

**OBJECT 参数说明：**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|是|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数分类	|参数				|说明																		|App平台值域		|Web平台值域		|小程序平台值域	|平台差异说明	|uni框架版本要求	|
|:-			|:-					|:-																			|:-				|:-				|:-				|:-				|:-				|
|device		|deviceId			|设备 id	。由 uni-app 框架生成并存储，清空 Storage 会导致改变					|				|				|				|				|				|
|			|deviceType			|设备类型												|`phone`、`pad`、`tv`、`car`|`phone`、`pad`、`pc`|`phone`、`pad`、`pc`|				|`uni-app (3.4.10+)`	|
|			|deviceBrand		|设备品牌。如：`apple`、`huawei`												|				|不支持	|				|				|`uni-app (3.4.10+)`	|
|			|deviceModel		|设备型号																	|				|部分设备无法获取	|				|				|`uni-app (3.4.10+)`	|
|			|devicePixelRatio		|设备像素比																	|				|	|				|				|`uni-app (3.4.13+)`	|
|			|deviceOrientation		|设备方向																	|`竖屏 portrait`、`横屏 landscape`|`竖屏 portrait`、`横屏 landscape`|`竖屏 portrait`、`横屏 landscape`|小程序端仅`微信小程序`、`百度小程序`支持|`uni-app (3.4.13+)`	|
|os			|osName				|系统名称|ios、android|ios、android、windows、macos、linux|ios、android、windows、macos|				|`uni-app (3.4.10+)`|
|			|osVersion			|操作系统版本。如 ios 版本，andriod 版本|				|				|				|				|`uni-app (3.4.10+)`										|
|			|osLanguage			|操作系统语言														|`zh-CN 中文简体`、`zh-TW 中文繁体`、`en-US English`、`bo-CN 藏文`、`ug-CN 维吾尔语`等 |与浏览器语言一致	|不支持	|	|`uni-app (3.4.10+)`										|
|			|osTheme			|操作系统主题。													|light、dark|不支持			|不支持	|				|`uni-app (3.4.10+)`
|browser	|browserName		|浏览器名称或App平台系统webview名称|系统 webview 名称，x5webview、wkwebview、chrome	|chrome、edge、safari、firefox	|不支持||`uni-app (3.4.10+)`|
|			|browserVersion		|浏览器版本、webview 版本|				|				|不支持			|				|`uni-app (3.4.10+)`|
|host		|hostName			|App、小程序宿主名称，如：`WeChat`、`FeiShu`				|仅 UniMPSDK 支持	|不支持|[取值如下](#hostname)|微信小程序真机运行才有真值|`uni-app (3.4.10+)`				|
|			|hostVersion		|App、小程序宿主版本。如：微信版本号|仅 UniMPSDK 支持	|不支持|小程序宿主版本|				|`uni-app (3.4.10+)`				|
|			|hostLanguage		|App、小程序宿主语言|仅 UniMPSDK 支持	|不支持|小程序宿主语言|				|`uni-app (3.4.10+)`				|
|			|hostTheme			|App 主题、小程序端为系统当前主题|`light`、`dark`。仅 UniMPSDK 支持	|不支持|`light`、`dark`|仅微信小程序全局配置"darkmode":true时才能获取|`uni-app (3.4.10+)`	|
|			|hostPackageName	|小程序宿主包名。仅 App 支持|仅 UniMPSDK 支持	|不支持|不支持|				|`uni-app (3.4.10+)`|
|			|hostSDKVersion	|uni小程序SDK版本、小程序客户端基础库版本|仅 UniMPSDK 支持	|不支持||				|`uni-app (3.4.13+)`|
|			|hostFontSizeSetting	|用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px|不支持|不支持||微信小程序、支付宝小程序、百度小程序、QQ小程序、字节小程序(2.53.0+)|`uni-app (3.4.13+)`|
|uni-app框架	|uniPlatform		|uni-app 运行平台。[取值见下](#uniplatform) |-|-|-|				|`uni-app (3.4.10+)`|
|			|uniCompileVersion	|uni 编译器版本号|`3.4.10`、`3.2.9` 等|`3.4.10`、`3.2.9` 等|`3.4.10`、`3.2.9` 等|				|`uni-app (3.4.10+)`|
|			|uniRuntimeVersion	|uni 运行时版本|`3.4.10`、`3.2.9` 等|`3.4.10`、`3.2.9` 等|`3.4.10`、`3.2.9` 等|				|`uni-app (3.4.10+)`|
|app		|appId				|`manifest.json` 中应用appid，即DCloud appid。								|				|				|				|				|`uni-app (3.4.10+)`|
|			|appName			|`manifest.json` 中应用名称	|				|				|				|和`字节跳动小程序`字段冲突，`字节跳动小程序`原字段与`hostName`一致|`uni-app (3.4.10+)`|
|			|appVersion			|`manifest.json` 中应用版本名称。												|				|				|				|				|`uni-app (3.4.10+)`|
|			|appVersionCode		|`manifest.json` 中应用版本名号。												|				|				|				|				|`uni-app (3.4.10+)`|
|			|appLanguage		|应用设置的语言|`en`、`zh-Hans`、`zh-Hant`、`fr`、`es`|`en`、`zh-Hans`、`zh-Hant`、`fr`、`es`|`en`、`zh-Hans`、`zh-Hant`、`fr`、`es`||`uni-app (3.4.13+)`|
|rom		|romName			|rom 名称|Android 部分机型获取不到值，[取值如下](#romname)。iOS 不支持|不支持|不支持|				|`uni-app (3.4.13+)`										|
|			|romVersion			|rom 版本|Android 部分机型获取不到值，[取值如下](#romname)。iOS 不支持|不支持|不支持|				|`uni-app (3.4.13+)`										|
|其他		|ua					| userAgent标识																|				|				|不支持		|				|`uni-app (3.4.10+)`		|
|			|screenWidth		|屏幕宽度|				|				|				|				|							|
|			|screenHeight		|屏幕高度																	|				|				|				|				|							|
|			|windowWidth		|可使用窗口宽度																|				|				|				|				|							|
|			|windowHeight		|可使用窗口高度																|				|				|				|				|							|
|			|windowTop			|可使用窗口的顶部位置	|				|				|				|				|							|
|			|windowBottom		|可使用窗口的底部位置	|				|				|				|				|							|
|			|statusBarHeight	|手机状态栏的高度|														|				|				|				|				|							
|			|safeArea			|在竖屏正方向下的安全区域|App、Web、微信小程序|														|				|				|				|	
|			|safeAreaInsets		|在竖屏正方向下的安全区域插入位置（2.5.3+）|App、Web、微信小程序|||||

某些小程序特殊的返回参数

|参数|说明|平台差异说明|
|:-|:-|:-|
|benchmarkLevel|设备性能等级。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）|微信小程序Android版、QQ小程序Android版|
|batteryLevel	|	剩余电量百分比（仅 iOS 有效）	|微信小程序|
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
|cacheLocation|上一次缓存的位置信息|百度小程序|
|navigationBarHeight|导航栏的高度|百度小程序|
|titleBarHeight|标题栏高度|支付宝小程序|
|storage|设备磁盘容量|支付宝小程序|
|currentBattery|当前电量百分比|支付宝小程序|

不推荐使用的返回参数，仅为向下兼容保留

|参数|说明|平台差异说明|
|:-|:-|:-|
|pixelRatio			|设备像素比																	|				|
|brand|设备品牌|App、微信小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序|
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

**Tips**
- 屏幕高度 = 原生NavigationBar高度（含状态栏高度）+ 可使用窗口高度 + 原生TabBar高度
- windowHeight不包含NavigationBar和TabBar的高度
- Web端，windowTop等于NavigationBar高度，windowBottom等于TabBar高度
- App端，windowTop等于透明状态NavigationBar高度，windowBottom等于透明状态TabBar高度
- 高度相关信息，要放在 onReady 里获取
- `deviceId`：`android 平台` 根据优先使用imei、mac，如果没有获取到就使用随机生成的标识。`ios 平台` 是直接使用随机生成的标识

**safeArea 的结构**

|参数	|类型	|说明							|
|:-		|:-								|:-								|
|left	|Number	|安全区域左上角横坐标			|
|right	|Number	|安全区域右下角横坐标			|
|top	|Number	|安全区域左上角纵坐标			|
|bottom	|Number	|安全区域右下角纵坐标			|
|width	|Number	|安全区域的宽度，单位逻辑像素	|
|height	|Number	|安全区域的高度，单位逻辑像素	|

**safeAreaInsets 的结构**

|参数	|类型	|说明							|
|:-		|:-								|:-								|
|left	|Number	|安全区域左侧插入位置			|
|right	|Number	|安全区域右侧插入位置			|
|top	|Number	|安全区顶部插入位置			|
|bottom	|Number	|安全区域底部插入位置			|

#### uniPlatform 取值 @uniplatform

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

#### hostName 取值 @hostname

|值|生效条件|
|:-|:-|
|qq|QQ|
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
|KUAISHOU|快手|

#### romName 取值 @romname

|值|生效条件|
|:-|:-|
|MIUI|小米|
|EMUI、HarmonyOS|华为|
|Magic OS|荣耀|
|FLymeOS|魅族|
|SmartisanOS|锤子|
|ColorOS|oppo|
|Funtouch OS|vivo|

**示例**

```javascript
uni.getSystemInfo({
	success: function (res) {
		console.log(res.model);
		console.log(res.pixelRatio);
		console.log(res.windowWidth);
		console.log(res.windowHeight);
		console.log(res.language);
		console.log(res.version);
		console.log(res.platform);
	}
});
```

### uni.getSystemInfoSync()
获取系统信息的同步接口。`返回值同上getSystemInfo`。

**示例**

```javascript
try {
	const res = uni.getSystemInfoSync();
	console.log(res.model);
	console.log(res.pixelRatio);
	console.log(res.windowWidth);
	console.log(res.windowHeight);
	console.log(res.language);
	console.log(res.version);
	console.log(res.platform);
} catch (e) {
	// error
}
```


**获取设备标记**

Web、小程序、iOS，属于对用户隐私保护比较严格的平台，在这些平台很难获取有效的设备唯一标记。

Android已经改进用户隐私保护，在很多新手机上，获取imei等信息时需要弹框让用户授权。而Android10已经无法获取imei了。

- Web平台：
常用的方式是uv，即在uni.storage里存一个随机数，本质是存在浏览器的localstorage里。将随机数发给服务器，进行用户身份识别和统计。当然如果用户浏览器清空了localstorage、更换了浏览器、或使用隐私模式，那么就统计数据就会有误差。
- 小程序平台：
小程序也可以采用与Web类似的方式，在uni.storage里存一个随机数。如果想获取用户的微信唯一ID，也可以弹框请求用户授权。
- App iOS平台：
iOS并不提供imei的获取API，可通过[plus.device.getInfo](http://www.html5plus.org/doc/zh_cn/device.html#plus.device.getInfo) 可以获得设备的唯一标识（uuid），这个id其实也是一种随机数概念，类似于h5的uv计算，卸载app重装会发生变化；

iOS还有一个叫`idfa`的广告识别符，可通过Native.js获取，详见：[idfa介绍](https://ask.dcloud.net.cn/article/36107)。
- App Android平台：
Android也可以使用UUID，同iOS。

Android10以下可以得到imei，在[plus.device.getInfo](http://www.html5plus.org/doc/zh_cn/device.html#plus.device.getInfo) 可以获得设备的国际移动设备身份码（imei）。注意很多新手机在获取imei时会弹框要求用户授权。

Android10以上，部分国产手机支持OAID，详见[匿名设备标识符（OAID）](http://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID)

`plus.device.getInfo`的API是从HBuilderX 2.0.3+开始提供的，老版需使用plus.devide.uuid或plus.device.imei。

### getSysteInfo 新增字段取值示例

> 标明 `-` 的都为 undefined，其他值都与所列出项相同

|字段名称|App-Android|App-iOS|h5|Android uniMPsdk|iOS uniMPsdk|mp-weixin|mp-alipay|mp-baidu|mp-toutiao|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|appId|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|__UNI__8BB4001|
|appLanguage|zh-Hans|zh-Hans|zh-Hans|zh-Hans|zh-Hans|zh-Hans|zh-Hans|zh-Hans|zh-Hans|
|appName|test|test|test|test|test|test|test|test|test|
|appVersion|1.0.0|1.0.0|1.0.0|1.0.0|1.0.0|1.0.0|1.0.0|1.0.0|1.0.0|
|appVersionCode|100|100|100|100|100|100|100|100|100|
|browserName|chrome|wkwebview|safari|chrome|wkwebview|-|-|-|-|
|browserVersion|96.0.4664.104|13.4.13|13.0.3|88.0.4324.93|15.4|-|-|-|-|
|deviceBrand|xiaomi|apple|-|huawei|apple|iphone|iphone|iphone|apple|
|deviceId|d3db0944da20f333|F791564F-853B-47B6-8CB8-27FF59315059|16518284854447835016|c7eafa7ed8774c0d|F791564F-853B-47B6-8CB8-27FF59315059|1652178285720384773|16536215804846585135|1653359639811213582|16538995501084056633|
|deviceModel|Mi10Pro|iPhone13ProMax|iPhone|MXW-AN00|iPhoneSimulator|iPhone6/7/8Plus|iPhone14,3|iPhone6/7/8|iPhone6|
|deviceOrientation|portrait|portrait|portrait|portrait|portrait|portrait|-|portrait|-|
|devicePixelRatio|2.5687501430511475|3|2|3|3|3|3|2|2|
|deviceType|phone|phone|phone|phone|phone|phone|phone|phone|phone|
|hostLanguage|-|-|-|zh-CN|zh-Hans-CN|zh-Hans|zh-CN|zh-CN|
|hostName|-|-|-|MPLauncherV3|uniMPDemo|WeChat、wxwork|alipay、amap、DINGTALK、UC、QUARK、AK、YK|baiduboxapp 等[百度宿主平台枚举值列表](https://smartprogram.baidu.com/docs/develop/api/device_sys/hostlist/)|Douyin、Toutiao、news_article_lite、live_stream、XiGua、PPX|
|hostPackageName|-|-|-|com.example.mplauncherv3|io.dcloud.hellounimp|-|-|-|-|
|hostSDKVersion|-|-|-|3.4.13|3.4.13|2.24.2|2.7.6|3.450.16|2.49.0|
|hostTheme|-|-|-|light|light|-|-|-|-|
|hostVersion|-|-|-|1.0|1.0.0|8.0.5|10.2.23|2.45.0|6.6.3|
|osAndroidAPILevel|31|-|-|29|-|-|-|-|-|-|
|osLanguage|zh-CN|zh-Hans-CN|-|zh-CN|zh-Hans-CN|-|-|-|-|
|osName|android|ios|ios|android|ios|ios|ios|ios|ios|
|osTheme|light|light|-|light|light|-|-|-|-|
|osVersion|12|15.5|13.2.3|10|15.4|10.0.1|15.5|15.5|10.0.1|
|romName|MIUI|-|-|HarmonyOS|-|-|-|-|-|
|romVersion|V130|-|-|2.0.0|-|-|-|-|-|
|uniPlatform|app|app|web|app|app|mp-weixin|mp-alipay|mp-baidu|mp-toutiao|
|uniCompileVersion|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|
|uniRuntimeVersion|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|3.4.13|

### uni.canIUse(String)
判断应用的 API，回调，参数，组件等是否在当前版本可用。

平台差异说明

|App|Web|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|

**String 参数说明**

使用 ``${API}.${method}.${param}.${options}`` 或者 ``${component}.${attribute}.${option}`` 方式来调用，例如：

- ``${API}`` 代表 API 名字
- ``${method}`` 代表调用方式，有效值为return, success, object, callback
- ``${param}`` 代表参数或者返回值
- ``${options}`` 代表参数的可选值
- ``${component}`` 代表组件名字
- ``${attribute}`` 代表组件属性
- ``${option}`` 代表组件属性的可选值

**示例**

```javascript
uni.canIUse('getSystemInfoSync.return.screenWidth');
uni.canIUse('getSystemInfo.success.screenWidth');
uni.canIUse('showToast.object.image');
uni.canIUse('request.object.method.GET');

uni.canIUse('live-player');
uni.canIUse('text.selectable');
uni.canIUse('button.open-type.contact');
```
