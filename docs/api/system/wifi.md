**Wi-Fi功能模块**
**Wi-Fi function module**

> App平台由 [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html) 实现，需下载插件：[uni-WiFi](https://ext.dcloud.net.cn/plugin?id=10337)
> The App platform is implemented by [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html), you need to download the plug-in: [uni-WiFi](https://ext.dcloud.net. cn/plugin?id=10337)

> uni ext api 需 HBuilderX 3.6.8+
> uni ext api requires HBuilderX 3.6.8+


其它平台开发方式暂未统一，使用时需注意用[条件编译](https://uniapp.dcloud.io/platform)调用不同平台的代码。
The development methods of other platforms are not yet unified. When using it, you should pay attention to using [conditional compilation](https://uniapp.dcloud.io/platform) to call codes of different platforms.

微信小程序平台实现参考：[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/wx.startWifi.html)
WeChat Mini Program Platform Implementation Reference: [Specification Details](https://developers.weixin.qq.com/miniprogram/dev/api/wx.startWifi.html)

百度智能小程序平台实现参考：[规范详情](https://smartprogram.baidu.com/docs/develop/api/device_sys/wifi_rule/)
Baidu Smart Mini Program Platform Implementation Reference: [Specification Details](https://smartprogram.baidu.com/docs/develop/api/device_sys/wifi_rule/)

字节跳动小程序的wifi API参考：[规范详情](https://developer.toutiao.com/dev/cn/mini-app/develop/api/device/wi-fi/getconnectedwifi)
Wifi API reference of ByteDance Mini Program: [Specification Details](https://developer.toutiao.com/dev/cn/mini-app/develop/api/device/wi-fi/getconnectedwifi)


### uni.startWifi(OBJECT)

初始化Wi-Fi模块
Initialize the Wi-Fi module

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter Name|Type|Required|Description|
|---|----|----|---|
|success|function|否|接口调用成功的回调函数|
| success| function|No|Callback function for successful interface call|
|fail|function|否|接口调用失败的回调函数|
| fail| function|No|Callback function for interface call failure|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|


### uni.stopWifi(OBJECT)

关闭 Wi-Fi 模块
Turn off the Wi-Fi module

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter Name|Type|Required|Description|
|---|----|----|---|
|success|function|否|接口调用成功的回调函数|
| success| function|No|Callback function for successful interface call|
|fail|function|否|接口调用失败的回调函数|
| fail| function|No|Callback function for interface call failure|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|


### uni.getConnectedWifi(OBJECT)

获取已连接的 Wi-Fi 信息
Get connected Wi-Fi information

**OBJECT 参数说明**
**OBJECT parameter description**

|属性		|类型		|默认值	|必填												|说明						|
|Property |Type |Default Value |Required |Description |
|---		|----		|------	|----												|---						|
|partialInfo|boolean	|false	|否													|是否需要返回部分 Wi-Fi 信息|
| partialInfo| boolean | false |No |Whether partial Wi-Fi information should be returned|
|success	|function	|		|否													|接口调用成功的回调函数		|
| success | function | |No |Callback function for successful interface call |
|fail		|function	|		|否													|接口调用失败的回调函数		|
| fail | function | |No |Callback function for interface call failure |
|complete	|function	|		|否													|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete | function | |No |The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|wifi|WifiInfo|Wi-Fi 信息|
| wifi| WifiInfo| Wi-Fi Information|


### uni.getWifiList(OBJECT)

请求获取 Wi-Fi 列表。wifiList 数据会在 onGetWifiList 注册的回调中返回。
Request a Wi-Fi list. The wifiList data will be returned in the callback registered by onGetWifiList.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|---|----|----|---|
|success|function|否|接口调用成功的回调函数|
| success| function|No|Callback function for successful interface call|
|fail|function|否|接口调用失败的回调函数|
| fail| function|No|Callback function for interface call failure|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**平台差异说明**
**Platform Difference Description**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### uni.onGetWifiList(CALLBACK)

监听获取到 Wi-Fi 列表数据事件。
Listen to the event of getting Wi-Fi list data.

**CALLBACK 参数说明**
**CALLBACK parameter description**

获取到 Wi-Fi 列表数据事件的监听函数
Obtain the listener function of the Wi-Fi list data event

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性		|类型				|说明			|
|Property |Type |Description |
|--			|---				|--				|
|wifiList	|Array<[WifiInfo](#WifiInfo)>	|Wi-Fi 列表数据	|
| wifiList | Array<[WifiInfo](#WifiInfo)> | Wi-Fi list data |

**平台差异说明**
**Platform Difference Description**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### uni.offGetWifiList(CALLBACK)

移除获取到 Wi-Fi 列表数据事件的监听函数。
Remove the listener function for getting the Wi-Fi list data event.

**CALLBACK 参数说明**
**CALLBACK parameter description**

onGetWifiList 传入的监听函数。不传此参数则移除所有监听函数。
The listener function passed in by onGetWifiList. If this parameter is not passed, all listener functions will be removed.

**平台差异说明**
**Platform Difference Description**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### uni.connectWifi(OBJECT)

连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。
Connect to Wi-Fi. If the Wi-Fi information is known, you can directly use this interface to connect.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性	|类型		|默认值		|必填	|说明	|最低版本											|
|Property |Type |Default |Required |Description |Minimum Version|
|---	|---		|---		|---	|---	|-----												|
|SSID	|string		|			|是		|Wi-Fi 设备 SSID|													|
| SSID | string | | yes | Wi-Fi device SSID | |
|BSSID	|string		|			|否		|Wi-Fi 设备 BSSID|													|
| BSSID | string | |No | Wi-Fi Device BSSID| |
|password	|string		|			|是		|Wi-Fi 设备密码|													|
| password | string | | yes | Wi-Fi device password | |
|maunal	|boolean	|false		|否		|跳转到系统设置页进行连接|2.12.0												|
| maunal | boolean | false | no | jump to the system settings page to connect | 2.12.0 |
|partialInfo	|boolean	|false		|否		|是否需要返回部分 Wi-Fi 信息，仅安卓生效|2.22.0												|
| partialInfo | boolean | false | No | Whether to return partial Wi-Fi information, only valid for Android | 2.22.0 |
|success	|function	|			|否		|接口调用成功的回调函数|													|
| success | function | |No |Callback function for successful interface call| |
|fail	|function	|			|否		|接口调用失败的回调函数|													|
| fail | function | |No |Callback function for interface call failure| |
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
| complete | function | |No |The callback function for the end of the interface call (it will be executed when the call succeeds or fails) |

**平台差异说明**
**Platform Difference Description**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### uni.onWifiConnected(CALLBACK)

监听连接上 Wi-Fi 的事件。
Listen for Wi-Fi connected events.

**CALLBACK 参数说明**
**CALLBACK parameter description**

连接上 Wi-Fi 的事件的监听函数
Listener function for events connected to Wi-Fi

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性	|类型		|说明		|
|Property |Type |Description |
|---	|---		|---		|
|wifi	|[WifiInfo](#WifiInfo)	|Wi-Fi 信息	|
| wifi |[WifiInfo](#WifiInfo) | Wi-Fi Information |

**平台差异说明**
**Platform Difference Description**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|

### uni.offWifiConnected(CALLBACK)

移除连接上 Wi-Fi 的事件的监听函数。
Remove the listener function for events connected to Wi-Fi.

**CALLBACK 参数说明**
**CALLBACK parameter description**

onWifiConnected 传入的监听函数。不传此参数则移除所有监听函数。
onWifiConnected incoming listener function. If this parameter is not passed, all listener functions will be removed.

**平台差异说明**
**Platform Difference Description**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### uni.onWifiConnectedWithPartialInfo(CALLBACK)

监听连接上 Wi-Fi 的事件。
Listen for Wi-Fi connected events.

**CALLBACK 参数说明**
**CALLBACK parameter description**

连接上 Wi-Fi 的事件的监听函数
Listener function for events connected to Wi-Fi

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性	|类型		|说明		|
|Property |Type |Description |
|---	|---		|---		|
|wifi	|[WifiInfo](#WifiInfo)	|只包含 SSID 属性的 WifiInfo 对象	|
| wifi |[WifiInfo](#WifiInfo) |A WifiInfo object containing only SSID properties|

**平台差异说明**
**Platform Difference Description**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### uni.offWifiConnectedWithPartialInfo(CALLBACK)

移除连接上 Wi-Fi 的事件的监听函数。
Remove the listener function for events connected to Wi-Fi.

**CALLBACK 参数说明**
**CALLBACK parameter description**

onWifiConnectedWithPartialInfo 传入的监听函数。不传此参数则移除所有监听函数。
onWifiConnectedWithPartialInfo The listener function passed in. If this parameter is not passed, all listener functions will be removed.

**平台差异说明**
**Platform Difference Description**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### WifiInfo

Wifi 信息
WiFi information

|属性	|类型		|说明		|
|Property |Type |Description |
|---	|---		|---		|
|SSID	|string	|Wi-Fi 的 SSID	|
| SSID | string | SSID for Wi-Fi |
|BSSID	|string	|Wi-Fi 的 BSSID	|
| BSSID | string | BSSID for Wi-Fi |
|secure	|boolean|Wi-Fi 是否安全	|
| secure | boolean| Is the Wi-Fi secure |
|signalStrength	|number	|Wi-Fi 信号强度, 安卓取值 0 ～ 100|
| signalStrength | number | Wi-Fi signal strength, Android value 0 ~ 100|
|frequency	|number	|Wi-Fi 频段单位 MHz	|
| frequency | number | Wi-Fi frequency band unit MHz |


### 错误码
### error code

|错误码	|错误信息					|说明																|
|Error code |Error message |Description |
|---	|----						|------																|
|0		|ok							|正常																|
| 0 | ok | normal |
|12000	|not init					|未先调用 startWifi 接口											|
| 12000 | not init | did not call the startWifi interface first |
|12001	|system not support			|当前系统不支持相关能力												|
| 12001 | system not support | The current system does not support the relevant capabilities |
|12002	|password error Wi-Fi		|密码错误															|
| 12002 | password error Wi-Fi | password error |
|12005	|wifi not turned on			|Android 特有，未打开 Wi-Fi 开关									|
| 12005 | wifi not turned on | Android specific, Wi-Fi switch not turned on |
|12013	|wifi config may be expired	|系统保存的 Wi-Fi 配置过期，建议忘记 Wi-Fi 后重试，仅 Android 支持	|
| 12013 | wifi config may be expired |The Wi-Fi configuration saved by the system has expired. It is recommended to forget the Wi-Fi and try again. Only Android supports |

### 参考
### refer to
- [Android平台获取WIFI列表](https://ask.dcloud.net.cn/question/12113)  
- [Android platform to obtain WIFI list](https://ask.dcloud.net.cn/question/12113)
- [iOS平台打开系统WIFI设置页面](https://ask.dcloud.net.cn/question/7797)  
- [Open system WIFI setting page on iOS platform](https://ask.dcloud.net.cn/question/7797)
