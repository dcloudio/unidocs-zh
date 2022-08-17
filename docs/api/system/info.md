<md-translatedByGoogle />
### 系统信息的概念
### The concept of system information

uni-app提供了异步(`uni.getSystemInfo`)和同步(`uni.getSystemInfoSync`)的2个API获取系统信息。
uni-app provides two APIs to obtain system information, asynchronous (`uni.getSystemInfo`) and synchronous (`uni.getSystemInfoSync`).

系统信息返回的内容非常多，各操作系统、各家小程序、各浏览器对它们的定义也不相同。uni-app里重新梳理了这些概念，同时为了向下兼容也保留了这些平台原来的概念，但不推荐使用。
The system information returns a lot of content, and each operating system, each applet, and each browser have different definitions for them. These concepts are reorganized in uni-app, and the original concepts of these platforms are also retained for backward compatibility, but they are not recommended.

按照运行环境层级排序，从底层向上，uni-app有6个概念：
Sorted according to the operating environment level, from the bottom to the top, uni-app has 6 concepts:
- `device`：运行应用的设备，如iphone、huawei
- `device`: the device running the application, such as iphone, huawei
- `os`：设备的操作系统，如 ios、andriod、windows、mac、linux
- `os`: the operating system of the device, such as ios, andriod, windows, mac, linux
- `rom`：基于操作系统的定制，Android系统特有概念，如miui、鸿蒙
- `rom`: customization based on operating system, unique concepts of Android system, such as miui, Hongmeng
- `host`：运行应用的宿主程序，即OS和应用之间的运行环境，如浏览器、微信等小程序宿主、集成uniMPSDK的App。uni-app直接开发的app没有host概念
- `host`: The host program that runs the application, that is, the operating environment between the OS and the application, such as browsers, WeChat and other applet hosts, and apps that integrate uniMPSDK. The app developed directly by uni-app has no concept of host
- `uni`：uni-app框架相关的信息，如uni-app框架的编译器版本、运行时版本
- `uni`: information related to the uni-app framework, such as the compiler version and runtime version of the uni-app framework
- `app`：开发者的应用相关的信息，如应用名称、版本
- `app`: information related to the developer's application, such as application name, version

### uni.getSystemInfo(OBJECT)
异步获取系统信息
Get system information asynchronously

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|是|接口调用成功的回调|
| success| Function| Yes| Callback for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

#### success 返回参数说明
#### success Return parameter description

|参数分类	|参数|说明			|App平台值域		|Web平台值域		|小程序平台值域	|备注	|uni框架最低版本要求	|
|Parameter Classification |Parameters |Description |App Platform Value Domain |Web Platform Value Domain |Mini Program Platform Value Domain |Remarks |Uni Framework Minimum Version Requirements |
|:-			|:-|:-|:-|:-|:-|:-|:-|
|device |deviceId			|设备 id	。由 uni-app 框架生成并存储，清空 Storage 会导致改变||||||
|device |deviceId |device id . Generated and stored by the uni-app framework, clearing the Storage will result in changes ||||||
|			|deviceType			|设备类型。如`phone`、`pad`、`pc`、`unknow`		|[详见](#tips)|`phone`、`pad`、`pc`、`unknow`|`phone`、`pad`、`pc`||uni-app 3.4.10+|
| |deviceType |The device type. Such as `phone`, `pad`, `pc`, `unknow` | [see details](#tips)|`phone`, `pad`, `pc`, `unknow`|`phone`, `pad`, `pc`||uni-app 3.4.10+|
| |deviceType |The device type. Such as `phone`, `pad`, `pc`, `unknow` | [see details](#tips)|`phone`, `pad`, `pc`, `unknow`|`phone`, `pad`, `pc`||uni-app 3.4.10+|
| |deviceType |The device type. Such as `phone`, `pad`, `pc`, `unknow` | [see details](#tips)|`phone`, `pad`, `pc`, `unknow`|`phone`, `pad`, `pc`||uni-app 3.4.10+|
| |deviceType |The device type. Such as `phone`, `pad`, `pc`, `unknow` | [see details](#tips)|`phone`, `pad`, `pc`, `unknow`|`phone`, `pad`, `pc`||uni-app 3.4.10+|
|			|deviceBrand		|设备品牌。如：`apple`、`huawei`		||不支持	|||uni-app 3.4.10+|
| |deviceBrand |The device brand. For example: `apple`, `huawei` ||Not supported |||uni-app 3.4.10+|
| |deviceBrand |The device brand. For example: `apple`, `huawei` ||Not supported |||uni-app 3.4.10+|
| |deviceBrand |The device brand. For example: `apple`, `huawei` ||Not supported |||uni-app 3.4.10+|
| |deviceBrand |The device brand. For example: `apple`, `huawei` ||Not supported |||uni-app 3.4.10+|
|			|deviceModel		|设备型号		||部分设备无法获取	|||uni-app 3.4.10+|
| |deviceModel |Device model ||Some devices cannot be obtained |||uni-app 3.4.10+|
| |deviceModel |Device model ||Some devices cannot be obtained |||uni-app 3.4.10+|
| |deviceModel |Device model ||Some devices cannot be obtained |||uni-app 3.4.10+|
| |deviceModel |Device model ||Some devices cannot be obtained |||uni-app 3.4.10+|
|			|deviceOrientation		|设备方向		|`竖屏 portrait`、`横屏 landscape`|`竖屏 portrait`、`横屏 landscape`|`竖屏 portrait`、`横屏 landscape`。仅微信百度小程序支持||uni-app 3.4.13+|
| |deviceOrientation |Device Orientation |`Portrait portrait`, `Landscape landscape`|`Portrait portrait`, `Landscape landscape`|`Portrait portrait`, `Landscape landscape`. Only WeChat and Baidu applet support||uni-app 3.4.13+|
| |deviceOrientation |Device Orientation |`Portrait portrait`, `Landscape landscape`|`Portrait portrait`, `Landscape landscape`|`Portrait portrait`, `Landscape landscape`. Only WeChat and Baidu applet support||uni-app 3.4.13+|
| |deviceOrientation |Device Orientation |`Portrait portrait`, `Landscape landscape`|`Portrait portrait`, `Landscape landscape`|`Portrait portrait`, `Landscape landscape`. Only WeChat and Baidu applet support||uni-app 3.4.13+|
| |deviceOrientation |Device Orientation |`Portrait portrait`, `Landscape landscape`|`Portrait portrait`, `Landscape landscape`|`Portrait portrait`, `Landscape landscape`. Only WeChat and Baidu applet support||uni-app 3.4.13+|
|			|devicePixelRatio		|设备像素比		||	|||uni-app 3.4.13+|
| |devicePixelRatio |Device pixel ratio || |||uni-app 3.4.13+|
| |devicePixelRatio |Device pixel ratio || |||uni-app 3.4.13+|
| |devicePixelRatio |Device pixel ratio || |||uni-app 3.4.13+|
| |devicePixelRatio |Device pixel ratio || |||uni-app 3.4.13+|
|os		|osName|系统名称|ios、android|ios、android、windows、macos、linux|ios、android、windows、macos||uni-app 3.4.10+|
|os |osName|System Name|ios, android|ios, android, windows, macos, linux|ios, android, windows, macos||uni-app 3.4.10+|
|			|osVersion			|操作系统版本。如 ios 版本，andriod 版本|||||uni-app 3.4.10+|
| |osVersion | Operating system version. Such as ios version, andriod version|||||uni-app 3.4.10+|
| |osVersion | Operating system version. Such as ios version, andriod version|||||uni-app 3.4.10+|
| |osVersion | Operating system version. Such as ios version, andriod version|||||uni-app 3.4.10+|
| |osVersion | Operating system version. Such as ios version, andriod version|||||uni-app 3.4.10+|
|			|osLanguage			|操作系统语言[详见](#tips)|Android仅支持主语言+地区：`zh-CN 中文简体`、iOS支持主语言+次语言+地区`zh-Hans-CN 中文简体` |与浏览器语言一致	|不支持	|	|uni-app 3.4.10+|
| |osLanguage |OS language [see details](#tips)|Android only supports primary language + region: `zh-CN Chinese Simplified`, iOS supports primary language + secondary language + region `zh-Hans-CN Chinese Simplified` |Same as browser language |Not supported | |uni-app 3.4.10+|
| |osLanguage |OS language [see details](#tips)|Android only supports primary language + region: `zh-CN Chinese Simplified`, iOS supports primary language + secondary language + region `zh-Hans-CN Chinese Simplified` |Same as browser language |Not supported | |uni-app 3.4.10+|
| |osLanguage |OS language [see details](#tips)|Android only supports primary language + region: `zh-CN Chinese Simplified`, iOS supports primary language + secondary language + region `zh-Hans-CN Chinese Simplified` |Same as browser language |Not supported | |uni-app 3.4.10+|
| |osLanguage |OS language [see details](#tips)|Android only supports primary language + region: `zh-CN Chinese Simplified`, iOS supports primary language + secondary language + region `zh-Hans-CN Chinese Simplified` |Same as browser language |Not supported | |uni-app 3.4.10+|
|			|osTheme			|操作系统主题			|light、dark。iOS平台只有将应用主题设置为跟随系统时才能获取到系统的主题|不支持	|不支持	||uni-app 3.4.10+|
| |osTheme |OS Theme |light, dark. The iOS platform can get the system theme only when the app theme is set to follow the system|Does not support |Does not support ||uni-app 3.4.10+|
| |osTheme |OS Theme |light, dark. The iOS platform can get the system theme only when the app theme is set to follow the system|Does not support |Does not support ||uni-app 3.4.10+|
| |osTheme |OS Theme |light, dark. The iOS platform can only get the system theme when the app theme is set to follow the system|Not supported |Not supported ||uni-app 3.4.10+|
| |osTheme |OS Theme |light, dark. The iOS platform can get the system theme only when the app theme is set to follow the system|Not supported |Not supported ||uni-app 3.4.10+|
|			|osAndroidAPILevel | Android 系统API库的版本。详情参考[Android 官方文档](https://developer.android.google.cn/guide/topics/manifest/uses-sdk-element?hl=en#ApiLevels)|`仅 Android 支持`|不支持|不支持||uni-app 3.4.10+|
| |osAndroidAPILevel | The version of the Android system API library. For details, please refer to [Android Official Documentation](https://developer.android.google.cn/guide/topics/manifest/uses-sdk-element?hl=en#ApiLevels)|`Only supported by Android`|Not supported|Not supported ||uni-app 3.4.10+|
| |osAndroidAPILevel | The version of the Android system API library. For details, please refer to [Android Official Documentation](https://developer.android.google.cn/guide/topics/manifest/uses-sdk-element?hl=en#ApiLevels)|`Only supported by Android`|Not supported|Not supported ||uni-app 3.4.10+|
| |osAndroidAPILevel | The version of the Android system API library. For details, please refer to [Android Official Documentation](https://developer.android.google.cn/guide/topics/manifest/uses-sdk-element?hl=en#ApiLevels)|`Only supported by Android`|Not supported|Not supported ||uni-app 3.4.10+|
| |osAndroidAPILevel | The version of the Android system API library. For details, please refer to [Android Official Documentation](https://developer.android.google.cn/guide/topics/manifest/uses-sdk-element?hl=en#ApiLevels)|`Only supported by Android`|Not supported|Not supported ||uni-app 3.4.10+|
|rom	|romName			|rom 名称|Android 部分机型获取不到值，[详见](#romname)。iOS 不支持|不支持|不支持||uni-app 3.4.13+|
|rom |romName |rom name|Some Android models cannot get the value, [see details](#romname). iOS Not Supported|Not Supported|Not Supported||uni-app 3.4.13+|
|			|romVersion			|rom 版本|Android 部分机型获取不到值，[详见](#romname)。iOS 不支持|不支持|不支持||uni-app 3.4.13+|
| |romVersion |rom version|Some Android models cannot get the value, [see details](#romname). iOS Not Supported|Not Supported|Not Supported||uni-app 3.4.13+|
| |romVersion |rom version|Some Android models cannot get the value, [see details](#romname). iOS Not Supported|Not Supported|Not Supported||uni-app 3.4.13+|
| |romVersion |rom version|Some Android models cannot get the value, [see details](#romname). iOS Not Supported|Not Supported|Not Supported||uni-app 3.4.13+|
| |romVersion |rom version|Some Android models cannot get the value, [see details](#romname). iOS Not Supported|Not Supported|Not Supported||uni-app 3.4.13+|
|browser	|browserName		|浏览器名称或App的webview名称|chrome(android)、wkwebview(ios)、x5webview(app打包x5引擎)|chrome、edge、safari、firefox	|不支持||uni-app 3.4.10+|
|browser |browserName |Browser name or App webview name|chrome(android), wkwebview(ios), x5webview(app packaging x5 engine)|chrome, edge, safari, firefox |Not supported||uni-app 3.4.10 +|
|			|browserVersion		|浏览器版本、webview 版本|||不支持			||uni-app 3.4.10+|
| |browserVersion |Browser version, webview version|||Not supported ||uni-app 3.4.10+|
| |browserVersion |Browser version, webview version|||Not supported ||uni-app 3.4.10+|
| |browserVersion |Browser version, webview version|||Not supported ||uni-app 3.4.10+|
| |browserVersion |Browser version, webview version|||Not supported ||uni-app 3.4.10+|
|host	|hostName			|小程序宿主或uniMPSDK的集成宿主名称，如：`WeChat`、`FeiShu`|仅 UniMPSDK 支持	|不支持|[详见](#hostname)|微信小程序真机运行才有真值|uni-app 3.4.10+|
|host |hostName |The name of the applet host or the integrated host of uniMPSDK, such as: `WeChat`, `FeiShu`|Only supported by UniMPSDK |Not supported|[For details](#hostname)|WeChat applet can only run on real machine value|uni-app 3.4.10+|
|			|hostVersion		|宿主版本。如：微信版本号|仅 UniMPSDK 支持	|不支持|小程序宿主版本||uni-app 3.4.10+|
| |hostVersion |Host version. Such as: WeChat version number|only supported by UniMPSDK|not supported|mini program host version||uni-app 3.4.10+|
| |hostVersion |Host version. Such as: WeChat version number|only supported by UniMPSDK|not supported|mini program host version||uni-app 3.4.10+|
| |hostVersion |Host version. Such as: WeChat version number|only supported by UniMPSDK|not supported|mini program host version||uni-app 3.4.10+|
| |hostVersion |Host version. Such as: WeChat version number|only supported by UniMPSDK|not supported|mini program host version||uni-app 3.4.10+|
|			|hostLanguage		|宿主语言|仅 UniMPSDK 支持	|不支持|小程序宿主语言||uni-app 3.4.10+|
| |hostLanguage |Host Language|Supported by UniMPSDK only |Not Supported|Mini Program Host Language||uni-app 3.4.10+|
| |hostLanguage |Host Language|Supported by UniMPSDK only |Not Supported|Mini Program Host Language||uni-app 3.4.10+|
| |hostLanguage |Host Language|Supported by UniMPSDK only |Not Supported|Mini Program Host Language||uni-app 3.4.10+|
| |hostLanguage |Host Language|Supported by UniMPSDK only |Not Supported|Mini Program Host Language||uni-app 3.4.10+|
|			|hostTheme			|宿主主题|`light`、`dark`。仅 UniMPSDK 支持	|不支持|`light`、`dark`。前提是微信小程序全局配置"darkmode":true时才能获取||uni-app 3.4.10+|
| |hostTheme |HostTheme|`light`, `dark`. Only supported by UniMPSDK |Not supported| `light`, `dark`. The premise is that the WeChat applet is globally configured with "darkmode": true to obtain ||uni-app 3.4.10+|
| |hostTheme |HostTheme|`light`, `dark`. Only supported by UniMPSDK |Not supported| `light`, `dark`. The premise is that the WeChat applet is globally configured with "darkmode": true to obtain ||uni-app 3.4.10+|
| |hostTheme |HostTheme|`light`, `dark`. Only supported by UniMPSDK |Not supported| `light`, `dark`. The premise is that the WeChat applet is globally configured with "darkmode": true to obtain ||uni-app 3.4.10+|
| |hostTheme |HostTheme|`light`, `dark`. Only supported by UniMPSDK |Not supported| `light`, `dark`. The premise is that the WeChat applet is globally configured with "darkmode": true to obtain ||uni-app 3.4.10+|
|			|hostFontSizeSetting	|用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px|不支持|不支持|微信小程序、支付宝小程序、百度小程序、QQ小程序、字节小程序(2.53.0+)||uni-app 3.4.13+|
| |hostFontSizeSetting |User font size setting. The setting in "I-Settings-General-Font Size" shall prevail, unit: px|Not supported|Not supported|WeChat applet, Alipay applet, Baidu applet, QQ applet, byte applet (2.53. 0+)||uni-app 3.4.13+|
| |hostFontSizeSetting |User font size setting. The setting in "I-Settings-General-Font Size" shall prevail, unit: px|Not supported|Not supported|WeChat applet, Alipay applet, Baidu applet, QQ applet, byte applet (2.53. 0+)||uni-app 3.4.13+|
| |hostFontSizeSetting |User font size setting. The setting in "I-Settings-General-Font Size" shall prevail, unit: px|Not supported|Not supported|WeChat applet, Alipay applet, Baidu applet, QQ applet, byte applet (2.53. 0+)||uni-app 3.4.13+|
| |hostFontSizeSetting |User font size setting. The setting in "I-Settings-General-Font Size" shall prevail, unit: px|Not supported|Not supported|WeChat applet, Alipay applet, Baidu applet, QQ applet, byte applet (2.53. 0+)||uni-app 3.4.13+|
|			|hostPackageName	|小程序宿主包名|仅 UniMPSDK 支持	|不支持|不支持||uni-app 3.4.10+|
| |hostPackageName |Applet host package name|Supported only by UniMPSDK |Not supported|Not supported||uni-app 3.4.10+|
| |hostPackageName |Applet host package name|Supported only by UniMPSDK |Not supported|Not supported||uni-app 3.4.10+|
| |hostPackageName |Applet host package name|Supported only by UniMPSDK |Not supported|Not supported||uni-app 3.4.10+|
| |hostPackageName |Applet host package name|Supported only by UniMPSDK |Not supported|Not supported||uni-app 3.4.10+|
|			|hostSDKVersion	|uni小程序SDK版本、小程序客户端基础库版本|仅 UniMPSDK 支持	|不支持|||uni-app 3.4.13+|
| |hostSDKVersion |uni applet SDK version, applet client base library version|only supported by UniMPSDK |not supported|||uni-app 3.4.13+|
| |hostSDKVersion |uni applet SDK version, applet client base library version|only supported by UniMPSDK |not supported|||uni-app 3.4.13+|
| |hostSDKVersion |uni applet SDK version, applet client base library version|only supported by UniMPSDK |not supported|||uni-app 3.4.13+|
| |hostSDKVersion |uni applet SDK version, applet client base library version|only supported by UniMPSDK |not supported|||uni-app 3.4.13+|
|uni-app框架	|uniPlatform		|uni-app 运行平台，与条件编译平台相同。[详见](#uniplatform) |app|`web`或`h5`|各家小程序，如`mp-weixin`||uni-app 3.4.10+|
|uni-app framework |uniPlatform |uni-app runs on the same platform as the conditional compilation platform. [See details](#uniplatform) |app|`web` or `h5`| various small programs, such as `mp-weixin`||uni-app 3.4.10+|
|			|uniCompileVersion	|uni 编译器版本号。[详见](#uniplatform)|`3.4.10`、`3.2.9` 等|`3.4.10`、`3.2.9` 等|`3.4.10`、`3.2.9` 等||uni-app 3.4.10+|
| |uniCompileVersion |uni compiler version number. [See details](#uniplatform)|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.||uni -app 3.4.10+|
| |uniCompileVersion |uni compiler version number. [See details](#uniplatform)|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.||uni -app 3.4.10+|
| |uniCompileVersion |uni compiler version number. [See details](#uniplatform)|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.||uni -app 3.4.10+|
| |uniCompileVersion |uni compiler version number. [See details](#uniplatform)|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.||uni -app 3.4.10+|
|			|uniRuntimeVersion	|uni 运行时版本。[详见](#uniplatform)|`3.4.10`、`3.2.9` 等|`3.4.10`、`3.2.9` 等|`3.4.10`、`3.2.9` 等||uni-app 3.4.10+|
| |uniRuntimeVersion |uni runtime version. [See details](#uniplatform)|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.||uni -app 3.4.10+|
| |uniRuntimeVersion |uni runtime version. [See details](#uniplatform)|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.||uni -app 3.4.10+|
| |uniRuntimeVersion |uni runtime version. [See details](#uniplatform)|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.||uni -app 3.4.10+|
| |uniRuntimeVersion |uni runtime version. [See details](#uniplatform)|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.|`3.4.10`, `3.2.9`, etc.||uni -app 3.4.10+|
|app	|appId|`manifest` 中应用appid，即DCloud appid。			|||||uni-app 3.4.10+|
|app |appId| The application appid in the `manifest` is the DCloud appid. |||||uni-app 3.4.10+|
|			|appName			|`manifest` 中应用名称	||||和`字节跳动小程序`字段冲突，`字节跳动小程序`原字段与`hostName`一致|uni-app 3.4.10+|
| |appName |The application name in `manifest` |||| conflicts with the `ByteDance applet` field, the original field of `ByteDance applet` is consistent with `hostName`|uni-app 3.4.10+|
| |appName | The application name in `manifest` |||| conflicts with the field of `ByteDance applet`, the original field of `ByteDance applet` is consistent with `hostName`|uni-app 3.4.10+|
| |appName | The application name in `manifest` |||| conflicts with the `ByteDance applet` field, the original field of `ByteDance applet` is consistent with `hostName`|uni-app 3.4.10+|
| |appName | The application name in `manifest` |||| conflicts with the field of `ByteDance applet`, the original field of `ByteDance applet` is consistent with `hostName`|uni-app 3.4.10+|
|			|appVersion			|`manifest` 中应用版本名称。		|||||uni-app 3.4.10+|
| |appVersion | The name of the app version in the `manifest`. |||||uni-app 3.4.10+|
| |appVersion | The name of the app version in the `manifest`. |||||uni-app 3.4.10+|
| |appVersion | The name of the app version in the `manifest`. |||||uni-app 3.4.10+|
| |appVersion | The name of the app version in the `manifest`. |||||uni-app 3.4.10+|
|			|appVersionCode		|`manifest` 中应用版本名号。		|||||uni-app 3.4.10+|
| |appVersionCode | The app version name in the `manifest`. |||||uni-app 3.4.10+|
| |appVersionCode | The app version name in the `manifest`. |||||uni-app 3.4.10+|
| |appVersionCode | The app version name in the `manifest`. |||||uni-app 3.4.10+|
| |appVersionCode | The app version name in the `manifest`. |||||uni-app 3.4.10+|
|			|appWgtVersion		|应用资源（wgt）的版本名称。		|||||uni-app 3.4.15+|
| |appWgtVersion | The version name of the app resource (wgt). |||||uni-app 3.4.15+|
| |appWgtVersion | The version name of the app resource (wgt). |||||uni-app 3.4.15+|
| |appWgtVersion | The version name of the app resource (wgt). |||||uni-app 3.4.15+|
| |appWgtVersion | The version name of the app resource (wgt). |||||uni-app 3.4.15+|
|			|appLanguage		|应用设置的语言|`en`、`zh-Hans`、`zh-Hant`、`fr`、`es`|`en`、`zh-Hans`、`zh-Hant`、`fr`、`es`|`en`、`zh-Hans`、`zh-Hant`、`fr`、`es`||uni-app 3.4.13+|
| |appLanguage |Language for app settings|`en`, `zh-Hans`, `zh-Hant`, `fr`, `es`| `en`, `zh-Hans`, `zh-Hant`, ` fr`, `es`|`en`, `zh-Hans`, `zh-Hant`, `fr`, `es`||uni-app 3.4.13+|
| |appLanguage |Language for app settings|`en`, `zh-Hans`, `zh-Hant`, `fr`, `es`| `en`, `zh-Hans`, `zh-Hant`, ` fr`, `es`|`en`, `zh-Hans`, `zh-Hant`, `fr`, `es`||uni-app 3.4.13+|
| |appLanguage |Language for app settings|`en`, `zh-Hans`, `zh-Hant`, `fr`, `es`| `en`, `zh-Hans`, `zh-Hant`, ` fr`, `es`|`en`, `zh-Hans`, `zh-Hant`, `fr`, `es`||uni-app 3.4.13+|
| |appLanguage |Language for app settings|`en`, `zh-Hans`, `zh-Hant`, `fr`, `es`| `en`, `zh-Hans`, `zh-Hant`, ` fr`, `es`|`en`, `zh-Hans`, `zh-Hant`, `fr`, `es`||uni-app 3.4.13+|
|其他	 |ua| userAgent标识	|||不支持		||uni-app 3.4.10+|
|Other |ua| userAgent ID |||Not supported ||uni-app 3.4.10+|
|			|screenWidth		|屏幕宽度|||||		|
| |screenWidth |Screen width||||| |
| |screenWidth |Screen width||||| |
| |screenWidth |Screen width||||| |
| |screenWidth |Screen width||||| |
|			|screenHeight		|屏幕高度		|||||		|
| |screenHeight |Screen Height ||||| |
| |screenHeight |Screen Height ||||| |
| |screenHeight |Screen Height ||||| |
| |screenHeight |Screen Height ||||| |
|			|windowWidth		|可使用窗口宽度	|||||		|
| |windowWidth |Available window width ||||| |
| |windowWidth |Available window width ||||| |
| |windowWidth |Available window width ||||| |
| |windowWidth |Available window width ||||| |
|			|windowHeight		|可使用窗口高度	|||||		|
| |windowHeight |Available window height ||||| |
| |windowHeight |Available window height ||||| |
| |windowHeight |Available window height ||||| |
| |windowHeight |Available window height ||||| |
|			|windowTop			|可使用窗口的顶部位置	|||||		|
| |windowTop |The top position of the available window ||||| |
| |windowTop |The top position of the available window ||||| |
| |windowTop |The top position of the available window ||||| |
| |windowTop |The top position of the available window ||||| |
|			|windowBottom		|可使用窗口的底部位置	|||||		|
| |windowBottom |The bottom position of the window can be used ||||| |
| |windowBottom |The bottom position of the window can be used ||||| |
| |windowBottom |The bottom position of the window can be used ||||| |
| |windowBottom |The bottom position of the window can be used ||||| |
|			|statusBarHeight	|手机状态栏的高度||||||		
| |statusBarHeight |The height of the mobile phone status bar||||||
| |statusBarHeight |The height of the mobile phone status bar||||||
| |statusBarHeight |The height of the mobile phone status bar||||||
| |statusBarHeight |The height of the mobile phone status bar||||||
|			|safeArea			|在竖屏正方向下的安全区域。由于此属性理解和使用比较困难，更推荐使用 safeAreaInsets 属性。[详见](#safearea)|||微信、百度（开发者工具暂不支持，真机有效）、字节跳动、飞书、快手小程序、华为快应用|||	
| |safeArea |The safe area in the positive direction of the vertical screen. Since this property is difficult to understand and use, it is more recommended to use the safeAreaInsets property. [See details](#safearea)|||WeChat, Baidu (developer tools are not supported for the time being, but valid for real devices), ByteDance, Feishu, Kuaishou Mini Program, Huawei Quick App|||
| |safeArea |The safe area in the positive direction of the vertical screen. Since this property is difficult to understand and use, it is more recommended to use the safeAreaInsets property. [See details](#safearea)|||WeChat, Baidu (developer tools are not supported for the time being, but valid for real devices), ByteDance, Feishu, Kuaishou Mini Program, Huawei Quick App|||
| |safeArea |The safe area in the positive direction of the vertical screen. Since this property is difficult to understand and use, it is more recommended to use the safeAreaInsets property. [See details](#safearea)|||WeChat, Baidu (developer tools are not supported for the time being, but valid for real devices), ByteDance, Feishu, Kuaishou Mini Program, Huawei Quick App|||
| |safeArea |The safe area in the positive direction of the vertical screen. Since this property is difficult to understand and use, it is more recommended to use the safeAreaInsets property. [See details](#safearea)|||WeChat, Baidu (developer tools are not supported for the time being, but valid for real devices), ByteDance, Feishu, Kuaishou Mini Program, Huawei Quick App|||
|			|safeAreaInsets		|在竖屏正方向下的安全区域插入位置。与小程序定义的 safeArea 用途相同，但是规范参考 iOS 平台的 [safeAreaInsets](https://developer.apple.com/documentation/uikit/uiview/2891103-safeareainsets) 更利于理解和使用。[详见](#safearea)|||微信、百度（开发者工具暂不支持，真机有效）、字节跳动、飞书、快手小程序、华为快应用||uni-app 2.5.3+|
| |safeAreaInsets |Inset positions in the safe area in the positive direction of vertical screen. It has the same purpose as the safeArea defined by the applet, but the specification refers to [safeAreaInsets](https://developer.apple.com/documentation/uikit/uiview/2891103-safeareainssets) of the iOS platform for better understanding and use. [See details](#safearea)|||WeChat, Baidu (developer tools are not supported for now, but valid on real devices), ByteDance, Feishu, Kuaishou Mini Program, Huawei Quick App||uni-app 2.5.3+ |
| |safeAreaInsets |Inset positions in the safe area in the positive direction of vertical screen. It has the same purpose as the safeArea defined by the applet, but the specification refers to [safeAreaInsets](https://developer.apple.com/documentation/uikit/uiview/2891103-safeareainssets) of the iOS platform for better understanding and use. [See details](#safearea)|||WeChat, Baidu (developer tools are not supported for now, but valid on real devices), ByteDance, Feishu, Kuaishou Mini Program, Huawei Quick App||uni-app 2.5.3+ |
| |safeAreaInsets |Inset positions in the safe area in the positive direction of vertical screen. It has the same purpose as the safeArea defined by the applet, but the specification refers to the [safeAreaInsets](https://developer.apple.com/documentation/uikit/uiview/2891103-safeareainsets) of the iOS platform for better understanding and use. [See details](#safearea)|||WeChat, Baidu (developer tools are not supported for now, real machine is valid), ByteDance, Feishu, Kuaishou Mini Program, Huawei Quick App||uni-app 2.5.3+ |
| |safeAreaInsets |Inset positions in the safe area in the positive direction of vertical screen. It has the same purpose as the safeArea defined by the applet, but the specification refers to the [safeAreaInsets](https://developer.apple.com/documentation/uikit/uiview/2891103-safeareainsets) of the iOS platform for better understanding and use. [See details](#safearea)|||WeChat, Baidu (developer tools are not supported for now, real machine is valid), ByteDance, Feishu, Kuaishou Mini Program, Huawei Quick App||uni-app 2.5.3+ |

#### 某些小程序特殊的返回参数
#### Some applet special return parameters

|参数|说明|平台差异说明|
| Parameter| Instruction| Platform difference description|
|:-|:-|:-|
|benchmarkLevel|设备性能等级。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）|微信小程序Android版、QQ小程序Android版|
|benchmarkLevel|The device performance level. The value is: -2 or 0 (the device cannot run mini games), -1 (the performance is unknown), >=1 (the device performance value, the higher the value, the better the device performance, currently the highest is less than 50) | WeChat Mini Programs for Android, QQ Mini Programs for Android|
|batteryLevel	|	剩余电量百分比（仅 iOS 有效）	|微信小程序|
|batteryLevel | Remaining battery percentage (only valid for iOS) |WeChat applet|
|currentBattery|当前电量百分比|支付宝小程序|
|currentBattery|Current battery percentage|Alipay applet|
|navigationBarHeight|导航栏的高度|百度小程序|
|navigationBarHeight|Height of the navigation bar|Baidu applet|
|titleBarHeight|标题栏高度|支付宝小程序|
|titleBarHeight|Title bar height|Alipay applet|
|albumAuthorized	|	允许微信使用相册的开关（仅 iOS 有效）	|微信小程序|
|albumAuthorized | The switch to allow WeChat to use albums (only valid for iOS) |WeChat applet|
|cameraAuthorized	|	允许微信使用摄像头的开关	|微信小程序|
|cameraAuthorized | The switch that allows WeChat to use the camera | WeChat applet|
|locationAuthorized	|	允许微信使用定位的开关	|微信小程序|
|locationAuthorized | A switch that allows WeChat to use location |WeChat applet|
|microphoneAuthorized	|	允许微信使用麦克风的开关	|微信小程序|
|microphoneAuthorized | A switch that allows WeChat to use the microphone |WeChat applet|
|notificationAuthorized	|	允许微信通知的开关	|微信小程序|
|notificationAuthorized | Switch to allow WeChat notifications |WeChat applet|
|notificationAlertAuthorized	|	允许微信通知带有提醒的开关（仅 iOS 有效）	|微信小程序|
|notificationAlertAuthorized | Switch to allow WeChat notifications with reminders (iOS only) |WeChat applet|
|notificationBadgeAuthorized	|	允许微信通知带有标记的开关（仅 iOS 有效）	|微信小程序|
|notificationBadgeAuthorized |Allow WeChat notifications with badged switch (iOS only) |WeChat applet|
|notificationSoundAuthorized	|	允许微信通知带有声音的开关（仅 iOS 有效）	|微信小程序|
|notificationSoundAuthorized | Switch to allow WeChat notifications with sound (only available on iOS) |WeChat applet|
|bluetoothEnabled	|	蓝牙的系统开关	|微信小程序|
|bluetoothEnabled | Bluetooth system switch |WeChat applet|
|locationEnabled	|	地理位置的系统开关	|微信小程序|
|locationEnabled | System switch for geographic location |WeChat applet|
|wifiEnabled	|	Wi-Fi 的系统开关	|微信小程序|
|wifiEnabled | Wi-Fi system switch |WeChat applet|
|cacheLocation|上一次缓存的位置信息|百度小程序(安卓端最低基础库版本 3.40.4 ；iOS 最低支持版本 3.70.2)|
|cacheLocation|Last cached location information|Baidu applet (minimum basic library version 3.40.4 for Android; minimum supported version 3.70.2 for iOS)|
|storage|设备磁盘容量|支付宝小程序|
|storage|Device Disk Capacity|Alipay Mini Program|

#### 不推荐使用的返回参数，仅为向下兼容保留
#### Deprecated return parameter, reserved for backward compatibility only

|参数|说明|平台差异说明|
| Parameter| Instruction| Platform difference description|
|:-|:-|:-|
|pixelRatio			|设备像素比		||
|pixelRatio |Device pixel ratio ||
|brand|设备品牌。uni-app 3.4.10+ 后该字段为全小写，可能要做兼容处理|App、微信小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序|
|brand|Equipment brand. After uni-app 3.4.10+, this field is all lowercase, and compatibility processing may be required|App, WeChat applet, Baidu applet, ByteDance applet, Feishu applet, QQ applet|
|model|设备型号|全平台支持。Web 端部分设备无法获取具体型号|
|model|Device Model|Full Platform Support. Some devices on the web side cannot obtain the specific model|
|system|操作系统名称及版本，如Android 10||
| system| Name and version of operating system, such as Android 10| |
|language|应用设置的语言||
| language| App settings language| |
|version|引擎版本号|Web不支持|
|version|Engine version number|Not supported by Web|
|platform|客户端平台，值域为：`ios`、`android`、`mac（3.1.10+）`、`windows（3.1.10+）`、`linux（3.1.10+）`||
| platform| Client platform, the value range is: `ios`, `android`, `mac（3.1.10+）`, `windows（3.1.10+）`, `linux（3.1.10+）`| |
|host|宿主平台|百度小程序|
|host|Host Platform|Baidu Mini Program|
|SDKVersion|客户端基础库版本|支付宝小程序和Web不支持|
|SDKVersion|Client base library version|Alipay applet and Web are not supported|
|swanNativeVersion|宿主平台版本号|百度小程序|
|swanNativeVersion|Host platform version number|Baidu applet|
|app|当前运行的客户端|支付宝小程序|
|app|Currently running client|Alipay applet|
|AppPlatform|App平台|QQ小程序|
|AppPlatform|App Platform|QQ Mini Program|
|fontSizeSetting|用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px|微信小程序、支付宝小程序、百度小程序、QQ小程序、字节小程序(2.53.0+)|
|fontSizeSetting|User font size setting. The setting in "I-Settings-General-Font Size" shall prevail, unit: px|WeChat applet, Alipay applet, Baidu applet, QQ applet, byte applet (2.53.0+)|


#### uniPlatform 返回值说明 @uniplatform
#### uniPlatform Return value description @uniplatform

|值|生效条件|
|value|valid condition|
|:-|:-|
|app|App|
|web|Web|
|mp-weixin|微信小程序|
|mp-weixin|WeChat Mini Program|
|mp-alipay|支付宝小程序|
|mp-alipay|Alipay Mini Program|
|mp-baidu|百度小程序|
|mp-baidu|Baidu Mini Program|
|mp-toutiao|字节跳动小程序|
|mp-toutiao|ByteDance Mini Program|
|mp-lark|飞书小程序|
|mp-lark|Feishu Mini Program|
|mp-qq|QQ小程序|
|mp-qq|QQ Mini Program|
|mp-kuaishou|快手小程序|
|mp-kuaishou|Kaishou Mini Program|
|mp-jd|京东小程序|
|mp-jd|JD Mini Program|
|mp-360|360小程序|
|mp-360|360 applet|
|quickapp-webview|快应用通用(包含联盟、华为)|
|quickapp-webview|Quick App Universal (including Alliance, Huawei)|
|quickapp-webview-union|快应用联盟|
|quickapp-webview-union|Quick App Union|
|quickapp-webview-huawei|快应用华为|
|quickapp-webview-huawei|Quick App Huawei|

`uniCompileVersion`编译器版本 和 `uniRuntimeVersion`运行时版本，正常情况应该是一样的值，即uni-app的版本。
`uniCompileVersion` compiler version and `uniRuntimeVersion` runtime version, normally should be the same value, that is, the version of uni-app.

如果使用HBuilder自带的uni-app开发，该值即等同于HBuilder的版本；如果使用单独的uni-app cli开发，则等同于cli版本。
If you use the uni-app that comes with HBuilder to develop, this value is equivalent to the version of HBuilder; if you use a separate uni-app cli to develop, it is equivalent to the cli version.

但在App平台，`uniCompileVersion` 和 `uniRuntimeVersion` 在某些情况的值会不一样：
But on the App platform, the values of `uniCompileVersion` and `uniRuntimeVersion` will be different in some cases:
- App云打包选择了不匹配的打包机版本，比如HBuilder版本较老，云端已经没有对应打包机，此时打包后`uniCompileVersion`会小于`uniRuntimeVersion`
- App cloud packaging selects a packager version that does not match. For example, the version of HBuilder is older, and the cloud has no corresponding packager. At this time, after packaging, `uniCompileVersion` will be smaller than `uniRuntimeVersion`
- App离线打包，使用了不匹配的离线SDK
- The App is packaged offline and uses a mismatched offline SDK
- App wgt升级，即手机上安装的App是老版的`uniRuntimeVersion`，wgt的新版使用了不同版本的HBuilder或uni-app cli版本，并且实施了应用资源升级
- App wgt upgrade, that is, the app installed on the mobile phone is the old version of `uniRuntimeVersion`, the new version of wgt uses a different version of HBuilder or uni-app cli version, and the application resource upgrade is implemented

#### romName 返回值说明 @romname
#### romName Return value description @romname

|值|解释|
|value|explanation|
|:-|:-|
|MIUI|小米|
|MIUI|Xiaomi|
|EMUI|华为|
|EMUI|Huawei|
|HarmonyOS|华为鸿蒙|
|HarmonyOS|Huawei Hongmeng|
|Magic OS|荣耀|
|ColorOS|oppo|
|Funtouch OS|vivo|
|FLymeOS|魅族|
|FLymeOS|Meizu|
|SmartisanOS|锤子|
|SmartisanOS|Hammer|

注意：不同rom的版本号规则不同，比如`MIUI`版本号是`V130`，而`HarmonyOS`的版本号是`2.0.0`
Note: The version number rules of different roms are different, for example, the version number of `MIUI` is `V130`, while the version number of `HarmonyOS` is `2.0.0`

#### hostName 返回值说明 @hostname
#### hostName Return value description @hostname

|值|解释|
|value|explanation|
|:-|:-|
|WeChat|微信|
|WeChat|WeChat|
|wxwork|微信企业版|
|wxwork|WeChat Enterprise Edition|
|[百度宿主平台枚举值列表](https://smartprogram.baidu.com/docs/develop/api/device_sys/hostlist/)|百度|
|[Baidu host platform enumeration value list](https://smartprogram.baidu.com/docs/develop/api/device_sys/hostlist/)|Baidu|
|alipay|支付宝|
|alipay|Alipay|
|amap|高德|
|amap|Amap|
|DINGTALK|钉钉|
|DINGTALK|DingTalk|
|UC|UC浏览器|
|UC|UC Browser|
|QUARK|夸克浏览器|
|QUARK|Quark Browser|
|AK|阿里健康|
|AK|Ali Health|
|YK|优酷|
|YK|Youku|
|[字节宿主平台枚举值列表](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/device/system-information/tt-get-system-info/#appname-%E8%AF%B4%E6%98%8E)|字节跳动系列|
|qq|QQ|
|KUAISHOU|快手|
|KUAISHOU|

#### safeArea 返回值说明 @safearea
#### safeArea Return value description @safearea

|参数	|类型	|说明		|
|parameter |type |description |
|:-		|:-			|:-			|
|left	|Number	|安全区域左上角横坐标			|
| left| Number| Abscissa of upper left corner in safety area|
|right	|Number	|安全区域右下角横坐标			|
| right| Number| Abscissa of lower right corner in safety area|
|top	|Number	|安全区域左上角纵坐标			|
| top| Number| Ordinate of upper left corner in safety area|
|bottom	|Number	|安全区域右下角纵坐标			|
| bottom| Number| Ordinate of lower right corner in safety area|
|width	|Number	|安全区域的宽度，单位逻辑像素	|
| width| Number| Width of safe area, in logical pixel|
|height	|Number	|安全区域的高度，单位逻辑像素	|
| height| Number| Height of safe area, in logical pixel|

**safeAreaInsets 的结构**
**Sstructure of safeAreaInsets**

|参数	|类型	|说明		|
|parameter |type |description |
|:-		|:-			|:-			|
|left	|Number	|安全区域左侧插入位置			|
| left| Number| Insert position of left side in safety area|
|right	|Number	|安全区域右侧插入位置			|
| right| Number| Insert position of right side in safety area|
|top	|Number	|安全区顶部插入位置			|
| top| Number| Insert location at the top of the safety zone|
|bottom	|Number	|安全区域底部插入位置			|
| bottom| Number| Insert position of bottom side in safety area|

#### language 返回值说明
#### language Return value description

language的国际规范是`BCP47规范`，分为三段，主语言-次语言-地区。例如`zh-Hans-CN`，表示 中文-简体-中国大陆
The international specification of language is the `BCP47 specification`, which is divided into three sections, main language-sub-language-region. For example `zh-Hans-CN`, means Chinese-Simplified-Mainland China

但除了主语言外，后两者均可省略。在不同平台，它们的省略规则也不相同。
But in addition to the main language, the latter two can be omitted. On different platforms, their omission rules are also different.

- app-ios，不省略，返回`zh-Hans-CN`
- app-ios, if not omitted, returns `zh-Hans-CN`
- app-android、web、微信小程序，省略次语言，返回`zh-CN`
- app-android, web, WeChat applet, omit secondary language, return `zh-CN`
- uni-app框架和应用的多语言，以及支付宝小程序，则用`zh-Hans`来表示简体中文
- uni-app framework and multi-language applications, as well as Alipay applet, use `zh-Hans` to represent Simplified Chinese

所以获取语言后，不能直接字符串比较，需要拆段比较，npm上也有专门做`BCP47语言规范`比较的库。
Therefore, after obtaining the language, you cannot directly compare strings, and you need to compare segments. There is also a library dedicated to `BCP47 language specification` comparison on npm.

#### deviceId 返回值说明
#### deviceId return value description

Web、小程序、iOS，属于对用户隐私保护比较严格的平台，在这些平台很难获取有效的设备唯一标记。
The Web, Mini Programs, and iOS are platforms with stricter privacy protections for users, and it is difficult to obtain an effective unique device tag on these platforms.

Android也已经改进用户隐私保护。在极老的手机上可以无限制获取imei，在次老的手机上，获取imei等隐私信息时需要弹框让用户授权。新的Android手机（Android10以上）已经彻底无法获取imei了。
Android has also improved user privacy protections. On very old mobile phones, you can obtain imei unlimitedly. On second-old mobile phones, you need a pop-up box to ask the user to authorize when obtaining private information such as imei. New Android phones (above Android 10) are completely unable to obtain imei.

所以标记设备，大多只能依靠本地存储一个随机数来标记。
Therefore, most of the marking devices can only be marked by locally storing a random number.

deviceId，在`app-android`平台，会根据优先使用imei、mac（仅在用户已授权的情况下，如果发现需要授权或未授权，则跳过此步骤），如果没有获取到就使用随机生成的标识。其他平台是直接使用随机生成的标识。
deviceId, on the `app-android` platform, it will use imei and mac according to the priority (only if the user has authorized, if it is found that authorization is required or unauthorized, this step will be skipped), if it is not obtained, it will be randomly generated 's identity. Other platforms simply use randomly generated logos.

当使用本地存贮的随机数时，发生以下情况将导致deviceId失效：
When using locally stored random numbers, the following conditions will cause the deviceId to become invalid:
- 卸载App
- Uninstall App
- Android上重置App数据
- Reset App data on Android
- 浏览器清空缓存或开启隐私模式，
- Browser clear cache or turn on privacy mode,

app下需要广告追踪的场景，在iOS上可以使用[idfa](https://ask.dcloud.net.cn/article/36107)、部分国产Android手机可以使用[OAID](http://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID)
For scenarios that require ad tracking under the app, you can use [idfa](https://ask.dcloud.net.cn/article/36107) on iOS and [OAID](http://www. html5plus.org/doc/en_us/device.html#plus.device.getOAID)

#### deviceModel 返回值说明
#### deviceModel return value description
uni-app 3.5.1+ 版本规范了 deviceModel 返回值，例如之前返回 `iPhone11ProMax` 新版本返回值为 `iPhone 11 Pro Max`，各设备型号[参考规范](https://www.theiphonewiki.com/wiki/Models) 中 Generation 对应的值
The uni-app version 3.5.1+ standardizes the return value of deviceModel, for example, the return value of `iPhone11ProMax` is returned before, and the return value of the new version is `iPhone 11 Pro Max`, each device model [reference specification](https://www.theiphonewiki.com/ wiki/Models) in the value corresponding to Generation

注意：新机型刚推出一段时间会显示 Unknown，官方会尽快进行适配。
Note: The new model will display Unknown for a while, and the official will adapt it as soon as possible.

#### 其他注意 @tips
#### Other Notes @tips
- `deviceType`：
  - `app-ios` 只支持 `phone`、`pad`。
  - `app-ios` only supports `phone`, `pad`.
  - `app-android` 支持 `phone`、`pad`、`tv`、`car`、`watch`、`vr`、`appliance`、`undefined`、`unknown`，关于各个类型的更详细解释参考[Android官方文档](https://developer.android.com/guide/)。
  - `app-android` supports `phone`, `pad`, `tv`, `car`, `watch`, `vr`, `appliance`, `undefined`, `unknown`, more detailed explanation about each type Refer to [Android official documentation](https://developer.android.com/guide/).
  - 其中，`app-android` 平台下 `pad` 类型的判断，在国产pad等非google官方设备上并不一定准确。如果有需要开发者可自行根据型号或屏幕大小判断。uni-app框架源码中判断`pad`的java代码如下，供参考：
  - Among them, the judgment of the `pad` type under the `app-android` platform is not necessarily accurate on non-Google official devices such as domestic pads. If necessary, developers can judge by themselves according to the model or screen size. The java code for judging `pad` in the uni-app framework source code is as follows, for reference:

	```java
	public static boolean isTablet(Context context) {
		return (context.getResources().getConfiguration().screenLayout & Configuration.SCREENLAYOUT_SIZE_MASK) >= Configuration.SCREENLAYOUT_SIZE_LARGE;
	}
	```
- `osTheme`：`app-ios` 只有将应用主题设置为跟随系统时才能获取到系统的主题。小程序也有类似限制。
- `osTheme`: `app-ios` can get the system theme only when the app theme is set to follow the system. Applets have similar restrictions.
- 屏幕高度 = 原生NavigationBar高度（含状态栏高度）+ 可使用窗口高度 + 原生TabBar高度
- Screen height = native NavigationBar height (including status bar height) + available window height + native TabBar height
- windowHeight不包含NavigationBar和TabBar的高度
- windowHeight does not include the heights of NavigationBar and TabBar
- Web端，windowTop等于NavigationBar高度，windowBottom等于TabBar高度
- On the web side, windowTop is equal to the height of the NavigationBar, and windowBottom is equal to the height of the TabBar
- App端，windowTop等于透明状态NavigationBar高度，windowBottom等于透明状态TabBar高度
- For App, windowTop is equal to the height of  NavigationBar in transparent state and windowBottom is equal to the height of TabBar in transparent state
- 高度相关信息，要放在 onReady 里获取。太早取不到。
- Highly related information should be obtained in onReady. Too early to get it.


本API在其他小程序的文档链接：
Links to the documentation of this API in other Mini Programs:
- [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoAsync.html)
- [WeChat Mini Program](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoAsync.html)
- [支付宝小程序](https://opendocs.alipay.com/mini/api/system-info)
- [Alipay Mini Program](https://opendocs.alipay.com/mini/api/system-info)
- [百度小程序](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfoSync/)
- [Baidu Mini Program](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfoSync/)
- [字节小程序](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/device/system-information/tt-get-system-info-sync/)
- [Bytedance applet](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/device/system-information/tt-get-system-info-sync/)
- [飞书小程序](https://open.feishu.cn/document/uYjL24iN/uQjNx4CN2EjL0YTM)
- [Feishu Mini Program](https://open.feishu.cn/document/uYjL24iN/uQjNx4CN2EjL0YTM)
- [QQ小程序](https://q.qq.com/wiki/develop/game/API/basic/system.html#qq-getsysteminfo)
- [QQ applet](https://q.qq.com/wiki/develop/game/API/basic/system.html#qq-getsysteminfo)
- [快手小程序](https://mp.kuaishou.com/docs/develop/api-next/basic/system/ks.getSystemInfoSync.html#systeminfo)
- [Kaishou Mini Program](https://mp.kuaishou.com/docs/develop/api-next/basic/system/ks.getSystemInfoSync.html#systeminfo)
- [京东小程序](https://mp-docs.jd.com/api/equipment/system.html)
- [Jingdong Mini Program](https://mp-docs.jd.com/api/equipment/system.html)
- [华为快应用](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-systeminfo-0000001126227753)
- [Huawei Quick App](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-systeminfo-0000001126227753)

#### 示例 @getsysteminfo-new-fields
#### Example @getsysteminfo-new-fields

调用代码示例
Example of calling code
```javascript
uni.getSystemInfo({
	success: function (res) {
		console.log(res.appName)
	}
});
```

在不同平台 getSystemInfo 的返回值（表格较长，可缩放页面后拖动横向滚动条）
The return value of getSystemInfo on different platforms (the table is long, and the horizontal scroll bar can be dragged after zooming the page)

> 标明 `-` 的都为 undefined，其他值都与所列出项相同
> Anything marked `-` is undefined, other values are the same as listed

|字段名称|App-Android|App-iOS|h5|Android uniMPsdk|iOS uniMPsdk|mp-weixin|mp-alipay|mp-baidu|mp-toutiao|
|Field Name|App-Android|App-iOS|h5|Android uniMPsdk|iOS uniMPsdk|mp-weixin|mp-alipay|mp-baidu|mp-toutiao|
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
Synchronous interface to get system information. `Call parameters and return values as above getSystemInfo`.


> 设备信息内容多且复杂，欢迎开发者测试更多环境设备并编辑本文档参与贡献。
> The content of device information is large and complex. Developers are welcome to test more environment devices and edit this document to contribute.