### uni.getEnterOptionsSync()

获取启动时的参数。
Get the parameters at startup.

注意：各平台在启动时，参数获取存在差异，详细如下：
Note: There are differences in parameter acquisition when each platform is started. The details are as follows:
- App平台：返回值与App.onLaunch的回调参数一致；
- App platform: the return value is consistent with the callback parameter of App.onLaunch;
- Web平台：返回值与App.onLaunch的回调参数一致，不同Vue版本支持情况有差异：
- Web platform: The return value is the same as the callback parameter of App.onLaunch, and the support of different Vue versions is different:
	* `vue3`项目：uni-app 3.2.13+ 支持；
	* `vue3` project: uni-app 3.2.13+ support;
	* `vue2`项目：uni-app 3.5.1+ 支持。
	* `vue2` project: uni-app 3.5.1+ support.
- 小程序平台：如果当前小程序是冷启动，则返回值与 App.onLaunch 的回调参数一致；如果当前是热启动，则返回值与 App.onShow 一致。关于微信小程序冷启动热启动的概念，[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html)
- Mini Program Platform: If the current Mini Program is cold start, the return value is consistent with the callback parameter of App.onLaunch; if the current Mini Program is hot start, the return value is consistent with App.onShow. For the concept of cold start and warm start of WeChat mini programs, [see details](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html)

**平台兼容性说明**
**Platform Compatibility Notes**

|App|web|微信小程序|支付宝小程序|抖音小程序|快手小程序|QQ小程序|百度小程序|京东小程序|钉钉小程序|飞书小程序|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|√ `(3.4.10+)`|√ `(3.5.1+)`|√|√|√|√|x|x|x|x|x|

**返回参数说明**
**Return parameter description**

|参数名|类型|说明|平台差异说明|
|Parameter Name|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|path|String|启动的路径(代码包路径)|其他平台均支持，`抖音小程序(1.12.0+)`|
|scene|Number|启动时的场景值，具体值含义请查看各平台文档说明。App、web端恒为 1001。|其他平台均支持，`抖音小程序(1.12.0+)`|
|query|Object|启动时的 query 参数|其他平台均支持，`抖音小程序(1.12.0+)`|
|referrerInfo|Object|来源信息。如果没有则返回 `{}`|其他平台均支持，`抖音小程序(1.15.0+)`|
|channel|String|如果应用没有设置渠道标识，则返回空字符串。取值如下|`仅 App 支持`|
|channel|String| Returns an empty string if the app does not set a channel ID. The values are as follows |`Only App supports`|
|launcher|String|应用启动来源。取值如下|`仅 App 支持`|
|launcher|String|Application launcher source. The values are as follows |`Only App supports`|
|forwardMaterials|Array\<Object\>|打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数|`微信小程序`|
|forwardMaterials|Array\<Object\> |The opened file information array, this parameter will only be carried when opened from the chat material scene (scene is 1173)|`WeChat applet`|
|chatType|number|打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数|`仅微信小程序`|
|chatType|number|The opened file information array, this parameter is only carried when opened from the chat material scene (scene is 1173)|`Only WeChat applet`|
|apiCategory|string|API 类别|`仅微信小程序(2.20.0+)`|
|showFrom|number|唤起小程序的方式，目前取值固定为 10，表示通过 schema 唤起|`仅抖音小程序(1.90.0+)`|
|mode|'default' \| 'halfPage'|启动小程序的模式|`仅快手小程序`|
|mode|'default' \| 'halfPage'|Mode to start the applet|`Only Kuaishou applet`|

**Object referrerInfo**

|属性|类型|说明|平台差异说明|
|Properties|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|appId|String|来源小程序 appId |其他平台均支持，`抖音小程序(1.15.0+)`|
|extraData|Object|来源小程序传过来的数据。|其他平台均支持，`抖音小程序(1.15.0+)`|

**channel 取值**
**channel value**
> 默认提供 `7`  个渠道（`Google`、`360`、`小米`、`华为`、`应用宝`、`vivo`、`oppo`），更多可以在`manifest.json`文件中【源码视图】进行配置，[详情](https://ask.dcloud.net.cn/article/35974)
> Provides `7` channels by default (`Google`, `360`, `Xiaomi`, `Huawei`, `Apppo`, `vivo`, `oppo`), more can be found in the `manifest.json` file [Source view] to configure, [details](https://ask.dcloud.net.cn/article/35974)

| 默认渠道     | 渠道标识ID |
| Default Channel | Channel ID |
| ------------ | -------- |
| GooglePlay   | google   |
| 应用宝       | yyb      |
| App Store | yyb |
| 360应用市场  | 360      |
| 360 App Market | 360 |
| 华为应用商店 | huawei   |
| Huawei App Store | huawei |
| 小米应用商店 | xiaomi   |
| Xiaomi App Store | xiaomi |
| vivo应用商店 | vivo|
| vivo App Store | vivo|
| oppo应用商店 |  oppo  |
| oppo app store | oppo |

**launcher 取值**
**launcher value**

| 值     | 说明 |
| value | description |
| ------------ | -------- |
| default   | 默认启动方式，通常表示应用列表启动（360手助中搜索启动）   |
| default | The default startup mode, usually means the application list startup (search startup in 360 Assistant) |
| scheme       | 通过urlscheme方式触发启动      |
| scheme | Trigger startup by urlscheme |
| push  | 通过点击系统通知方式触发启动      |
| push | Trigger startup by clicking on the system notification |
| uniLink |  通过通用链接（universal link）启动应用  |
| uniLink | Launch app via universal link |
| miniProgram |  通过微信小程序启动应用  |
| miniProgram | Launch the app via WeChat Mini Program |
| shortcut | 通过快捷方式启动，iOS平台表示通过3D Touch快捷方式，Android平台表示通过桌面快捷方式启动   |
| shortcut | Launch via shortcut, iOS platform means via 3D Touch shortcut, Android platform means via desktop shortcut |
| barcode | 通过二维码扫描启动|
| barcode | Start by scanning a QR code |