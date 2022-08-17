
#### uni.getAccountInfoSync()

获取当前帐号信息，可以返回小程序的Appid。如果使用了微信小程序的云端插件，还可以反馈插件的id和版本
Get the current account information, you can return the Appid of the applet. If you use the cloud plug-in of WeChat applet, you can also feedback the id and version of the plug-in

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|√|√|√|

**返回值**
**return value**

**Object**

帐号信息
account information

| 属性 | 类型 | 说明 |
| property | type | description |
| --- | --- | --- |
| miniProgram | Object| 小程序帐号信息 |
| miniProgram | Object| Mini Program account information |
| plugin | Object | 插件帐号信息（仅在插件中调用时包含这一项） |
| plugin | Object | Plugin account information (only include this item when called in the plugin) |
| appName | string| 智能小程序名称 (仅百度小程序支持) |
| appName | string| Smart applet name (only supported by Baidu applet) |
| lastAppURL | string| 智能小程序最近一次打开的调起协议 (仅百度小程序支持) |
| lastAppURL | string| The last calling protocol of the smart applet opened (only supported by Baidu applet) |
| scheme | string| 调起协议的协议头 (仅百度小程序支持) |
| scheme | string| Call up the protocol header (only supported by Baidu applet) |


**miniProgram 的结构**
**The structure of the miniProgram**

| 属性 | 类型 | 说明 |
| property | type | description |
| --- | --- | --- |
| appId | string | 小程序 appId |
| appId | string | Mini Program appId |
| envVersion| string | 小程序 当前环境版本：`develop`、`trial`、`release` |
| envVersion| string | applet current environment version: `develop`, `trial`, `release` |
| version| string | 版本号 |
| version| string | version number |


**plugin 的结构**
**plugin structure**

| 属性 | 类型 | 说明 |
| property | type | description |
| --- | --- | --- |
| appId | string | 插件 appId (百度小程序不支持) |
| appId | string | Plugin appId (not supported by Baidu applet) |
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
