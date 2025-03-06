## uni.getEnterOptionsSync()

获取启动时的参数。

注意：各平台在启动时，参数获取存在差异，详细如下：
- App平台：返回值与App.onLaunch的回调参数一致；
- Web平台：返回值与App.onLaunch的回调参数一致，不同Vue版本支持情况有差异：
	* `vue3`项目：uni-app 3.2.13+ 支持；
	* `vue2`项目：uni-app 3.5.1+ 支持。
- 小程序平台：如果当前小程序是冷启动，则返回值与 App.onLaunch 的回调参数一致；如果当前是热启动，则返回值与 App.onShow 一致。关于微信小程序冷启动热启动的概念，[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html)

**平台兼容性说明**

|App|web|微信小程序|支付宝小程序|抖音小程序|快手小程序|QQ小程序|百度小程序|京东小程序|钉钉小程序|飞书小程序|元服务|小红书小程序|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-:|:-:|
|√ `(3.4.10+)`|√ `(3.5.1+)`|√|√|√|√|x|x|x|x|x|√|√|

<!-- UNIAPPAPIJSON.getEnterOptionsSync.compatibility -->

**返回参数说明**

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|path|String|启动的路径(代码包路径)||
|scene|Number|启动时的场景值，具体值含义请查看各平台文档说明。App、web端恒为 1001。||
|query|Object|启动时的 query 参数||
|referrerInfo|Object|来源信息。如果没有则返回 `{}`||
|channel|String|如果应用没有设置渠道标识，则返回空字符串。取值如下|`仅 App 支持`|
|launcher|String|应用启动来源。取值如下|`仅 App 支持`|
|forwardMaterials|Array\<Object\>|打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数|`微信小程序`|
|chatType|number|打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数|`仅微信小程序`|
|apiCategory|string|API 类别|`仅微信小程序(2.20.0+)`|
|showFrom|number|唤起小程序的方式，目前取值固定为 10，表示通过 schema 唤起|`仅抖音小程序(1.90.0+)`|
|mode|'default' \| 'halfPage'|启动小程序的模式|`仅快手小程序`|

**Object referrerInfo**

|属性|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|appId|String|来源小程序 appId |其他平台均支持，`抖音小程序(1.15.0+)`|
|extraData|Object|来源小程序传过来的数据。|其他平台均支持，`抖音小程序(1.15.0+)`|

**channel 取值**
> 默认提供 `7`  个渠道（`Google`、`360`、`小米`、`华为`、`应用宝`、`vivo`、`oppo`），更多可以在`manifest.json`文件中【源码视图】进行配置，[详情](https://ask.dcloud.net.cn/article/35974)

| 默认渠道     | 渠道标识ID |
| ------------ | -------- |
| GooglePlay   | google   |
| 应用宝       | yyb      |
| 360应用市场  | 360      |
| 华为应用商店 | huawei   |
| 小米应用商店 | xiaomi   |
| vivo应用商店 | vivo|
| oppo应用商店 |  oppo  |

**launcher 取值**

| 值     | 说明 |
| ------------ | -------- |
| default   | 默认启动方式，通常表示应用列表启动（360手助中搜索启动）   |
| scheme       | 通过urlscheme方式触发启动      |
| push  | 通过点击系统通知方式触发启动      |
| uniLink |  通过通用链接（universal link）启动应用  |
| miniProgram |  通过微信小程序启动应用  |
| shortcut | 通过快捷方式启动，iOS平台表示通过3D Touch快捷方式，Android平台表示通过桌面快捷方式启动   |
| barcode | 通过二维码扫描启动|
