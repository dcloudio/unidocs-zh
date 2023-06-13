#### uni.getAccountInfoSync()

获取当前帐号信息，可以返回小程序的Appid。如果使用了微信小程序的云端插件，还可以返回当前插件Appid、版本号。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|x|x|√|√|√|

**返回值**

**Object**

帐号信息

| 属性 | 类型 | 说明 |平台差异说明|
| --- | --- | --- |--- |
| miniProgram | Object| 小程序帐号信息 ||
| plugin | Object | 插件帐号信息（仅在插件中调用时包含这一项） |京东、快手小程序不支持|


**miniProgram 的结构**

| 属性 | 类型 | 说明 |平台差异说明|
| --- | --- | --- |--- |
| appId | string | 小程序 appId ||
| envVersion| string | 小程序 当前环境版本：`develop`开发版、`trial`体验版、`release`正式版、`gray`灰度版（仅支付宝小程序支持） |京东小程序不支持|
| version| string | 线上小程序版本号（仅在正式版小程序上支持） |京东小程序不支持|


**plugin 的结构**

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| appId | string | 插件 appId  |
| version | string | 插件版本号 |


**示例代码**

```js
const accountInfo = uni.getAccountInfoSync();
console.log(accountInfo.miniProgram.appId); // 小程序 appId
console.log(accountInfo.plugin.appId); // 插件 appId
console.log(accountInfo.plugin.version); // 插件版本号， 'a.b.c' 这样的形式
```
