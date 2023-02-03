#### uni.getAccountInfoSync()

获取当前帐号信息，可以返回小程序的Appid。如果使用了微信小程序的云端插件，还可以返回当前插件Appid、版本号。
Get the current account information and return the Appid of the MiniApp. If the cloud plug-in of the WeChat MiniApp is used, the current plug-in Appid and version number can also be returned.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|x|x|√|√|√|

**返回值**
**return value**

**Object**

帐号信息
account information

| 属性 | 类型 | 说明 |平台差异说明|
| Property | Type | Description |Platform Difference Description|
| --- | --- | --- |--- |
| miniProgram | Object| 小程序帐号信息 ||
| miniProgram | Object| MiniApp account information||
| plugin | Object | 插件帐号信息（仅在插件中调用时包含这一项） |京东、快手小程序不支持|
| plugin | Object | Plug-in account information (only included when called in the plug-in) |JD.com and Kuaishou MiniApp do not support|


**miniProgram 的结构**
**The structure of the miniProgram**

| 属性 | 类型 | 说明 |平台差异说明|
| Property | Type | Description |Platform Difference Description|
| --- | --- | --- |--- |
| appId | string | 小程序 appId ||
| appId | string | MiniApp appId ||
| envVersion| string | 小程序 当前环境版本：`develop`开发版、`trial`体验版、`release`正式版、`gray`灰度版（仅支付宝小程序支持） |京东小程序不支持|
| envVersion| string |The current environment version of the MiniApp: `develop` development version, `trial` trial version, `release` official version, `gray` grayscale version (only supported by Alipay MiniApp) |Jingdong MiniApp not support|
| version| string | 线上小程序版本号（仅在正式版小程序上支持） |京东小程序不支持|
| version| string | The version number of the online MiniApp(only supported on the official version of the MiniApp) | Jingdong MiniApp not support |


**plugin 的结构**
**plugin structure**

| 属性 | 类型 | 说明 |
| property | type | description |
| --- | --- | --- |
| appId | string | 插件 appId  |
| appId | string | plugin appId |
| version | string | 插件版本号 |
| version | string | Plugin version number |


**示例代码**
**Sample code**

```js
const accountInfo = uni.getAccountInfoSync();
console.log(accountInfo.miniProgram.appId); // 小程序 appId
console.log(accountInfo.plugin.appId); // 插件 appId
console.log(accountInfo.plugin.version); // 插件版本号， 'a.b.c' 这样的形式
```
