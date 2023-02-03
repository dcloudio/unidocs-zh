### uni.getLocale()

获取当前设置的语言
Get the currently set language

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|华为快应用|360小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Huawei Quick App|360 applet|JD applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.2.5+|3.2.5+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|

如果当前应用设置过语言，会获取到之前设置的语言，未设置时会返回根据系统语言类型自动选择的语言。
If the current application has set the language, it will get the previously set language, and if it is not set, it will return to the language automatically selected according to the system language type.

### uni.setLocale(locale)

设置当前语言
Set current language

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|华为快应用|360小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Huawei Quick App|360 applet|JD applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.2.5+|3.2.5+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|

仅可设置为框架内置语言与[自定义扩展的语言](/tutorial/i18n.html#uni-framework)，遵循 BCP47 规范。
Can only be set to the framework built-in language and [custom extended language](/tutorial/i18n.html#uni-framework), following the BCP47 specification.

**参数说明**
**Parameter Description**

|参数名|类型|必填|
| Parameter name| Type| Required|
|:-|:-|:-|
|locale|String|是|
| locale| String| Yes|

### uni.onLocaleChange(callback)

用于监听应用语言切换
Used to listen to the application language switching

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|华为快应用|360小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Huawei Quick App|360 applet|JD applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.2.7+|3.2.7+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|3.4.14+|

**callback返回参数说明**
**Description of callback return parameter**

|参数名|类型|说明|
| Parameter name| Type| Instruction|
|:-|:-|:-|
|locale|String|当前语言|
| locale| String| Current language|

### 注意事项
### Precautions

* 组件和接口显示会根据设置的语言环境自动切换，未支持的系统语言环境会显示为英文。
* Display of components and interfaces will automatically switch according to the set language environment, and the unsupported system language environment will be displayed in English.
* App-Android、App-iOS 平台修改系统语言后会重启应用。
* App-Android, App-iOS platform will restart the application after modifying the system language.
* App-Android 平台设置新的语言后会自动重启应用。
* App-Android platform will automatically restart the app after setting a new language.
* 框架内置如下语言，如需自定义内容或增加其他语言参考：[自定义国际化内容](https://uniapp.dcloud.io/collocation/i18n?id=uni-framework)。
* The following languages are built into the framework. If you need to customize the content or add other language references: [Customize internationalized content](https://uniapp.dcloud.io/collocation/i18n?id=uni-framework).
  * 英语 en
  * en
  * 中文简体 zh-Hans
  * Simplified Chinese zh-Hans
  * 繁体 zh-Hant
  * Traditional Chinese zh-Hant
  * 法语 fr
  * fr
  * 西班牙语 es
  * es
* 在 [manifest.json](/collocation/manifest) -> locale 可以配置应用的默认语言。
* The default language of the application can be configured in [manifest.json](/collocation/manifest) -> locale.
* 仅 3.1.5 - 3.2.4 版本会自动使用 vue-i18n 内配置的语言。
* Only versions 3.1.5 - 3.2.4 will automatically use the language configured in vue-i18n.
* 在小程序平台仅影响用户业务层（vue-i18n）的语言配置，不能影响小程序原生组件和接口的语言。
* On the MiniApp platform, it only affects the language configuration of the user's business layer (vue-i18n), and cannot affect the language of the MiniApp's native components and interfaces.