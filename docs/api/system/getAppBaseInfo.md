### uni.getAppBaseInfo()

获取微信 APP 基础信息
Get the basic information of WeChat APP

|App|H5|微信小程序|支付宝小程序|抖音小程序|快手小程序|QQ小程序|百度小程序|京东小程序|钉钉小程序|飞书小程序|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|√ `(3.4.13+)`|√ `(3.4.13+)`|√ `(2.20.1+)`|x|x|x|x|x|x|x|x|

**返回参数说明**
**Return parameter description**

|参数名|类型|说明|平台差异说明|
|Parameter Name|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|appId|string|`manifest.json` 中应用appid，即DCloud appid。	||
|appId|string| The application appid in the `manifest.json`, that is, the DCloud appid. ||
|appName|string|`manifest.json` 中应用名称	||
|appName|string|App name in `manifest.json` ||
|appVersion|string|`manifest.json` 中应用版本名称。||
|appVersion|string| The app version name in `manifest.json`. ||
|appVersionCode|string|`manifest.json` 中应用版本名号。||
|appVersionCode|string| The app version name in `manifest.json`. ||
|appLanguage|string|应用设置的语言`en`、`zh-Hans`、`zh-Hant`、`fr`、`es`|`App`、`H5`|
|appLanguage|string|Language for application settings `en`, `zh-Hans`, `zh-Hant`, `fr`, `es`|`App`, `H5`|
|appWgtVersion|string|应用资源（wgt）的版本名称。	|App 3.5.5+|
|appWgtVersion|string|Version name of the app resource (wgt). |App 3.5.5+|
|hostLanguage|string|小程序宿主语言|`App 仅 UNIMPSDK 支持`、`H5 不支持`|
|hostLanguage|string|Mini Program Host Language|`App only supports UNIMPSDK`, `H5 does not support`|
|hostVersion|string|App、小程序宿主版本。如：微信版本号|`App 仅 UNIMPSDK 支持`、`H5 不支持`|
|hostVersion|string|App, applet host version. For example: WeChat version number|`App only supports UNIMPSDK`, `H5 does not support`|
|hostName|string|小程序宿主名称|`App 仅 UNIMPSDK 支持`、`H5 不支持`|
|hostName|string|mini program host name|`App is only supported by UNIMPSDK`, `H5 is not supported`|
|hostPackageName|string|小程序宿主包名|`仅 UNIMPSDK 支持`|
|hostPackageName|string|mini program host package name|`only supported by UNIMPSDK`|
|hostSDKVersion|string|uni小程序SDK版本、小程序客户端基础库版本|`App 仅 UNIMPSDK 支持`、`H5 不支持`|
|hostSDKVersion|string|uni applet SDK version, applet client base library version|`App only supports UNIMPSDK`, `H5 does not support`|
|hostTheme|string|系统当前主题，取值为light或dark。微信小程序全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏）|`App 仅 UNIMPSDK 支持`、`H5 不支持`|
|hostTheme|string|The current theme of the system, the value is light or dark. The WeChat applet can only be obtained when "darkmode" is globally configured: true, otherwise it is undefined (mini games are not supported)|`App only supports UNIMPSDK`, `H5 does not support`|
|hostFontSizeSetting|string|用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px|`仅 小程序 支持`|
|hostFontSizeSetting|string|User font size setting. The setting in "I-Settings-General-Font Size" shall prevail, unit: px|`Only applet supports`|

小程序特殊的返回参数
applet special return parameters

|参数名|类型|说明|平台差异说明|
|Parameter Name|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|SDKVersion|string|客户端基础库版本|`仅微信小程序`|
|SDKVersion|string|Client base library version|`WeChat applet only`|
|enableDebug|boolean|是否已打开调试。可通过右上角菜单或 wx.setEnableDebug 打开调试|`仅微信小程序`|
|enableDebug|boolean| Whether debugging is turned on. You can enable debugging through the upper right menu or wx.setEnableDebug|`WeChat applet only`|
|host|Object|当前小程序运行的宿主环境|`仅微信小程序`|
|host|Object|The current host environment where the applet is running|`Only WeChat applet`|
|theme|string|系统当前主题，取值为light或dark，全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏）|`仅微信小程序`|
|theme|string|The current theme of the system, the value is light or dark, it can only be obtained when the global configuration "darkmode": true, otherwise it is undefined (mini games are not supported)|`Only WeChat applet`|

不推荐使用的返回参数，仅为向下兼容保留
Deprecated return parameter, reserved for backward compatibility only

|参数名|类型|说明|平台差异说明|
|Parameter Name|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|language|string|应用设置的语言|`H5 不支持`|
|language|string|The language set by the application|`H5 does not support`|
|version|string|引擎版本号、微信版本号||
|version|string|Engine version number, WeChat version number||