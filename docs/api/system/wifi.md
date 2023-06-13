**Wi-Fi功能模块**

> App平台由 [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html) 实现，需下载插件：[uni-WiFi](https://ext.dcloud.net.cn/plugin?id=10337)

> uni ext api 需 HBuilderX 3.6.8+

> iOS平台获取Wi-Fi信息需要开启“Access WiFi information”能力登录苹果开发者网站，在“Certificates, Identifiers & Profiles”页面选择“Identifiers”中选择对应的App ID，确保开启“Access WiFi information”，保存后重新生成profile文件。

> iOS平台iOS13及以上系统，获取当前连接的Wi-Fi信息需要先获取系统定位权限，因此在iOS13及以上系统使用此接口时，会触发定位权限申请的弹窗。


其它平台开发方式暂未统一，使用时需注意用[条件编译](https://uniapp.dcloud.io/platform)调用不同平台的代码。

微信小程序平台实现参考：[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/wx.startWifi.html)

百度智能小程序平台实现参考：[规范详情](https://smartprogram.baidu.com/docs/develop/api/device_sys/wifi_rule/)

抖音小程序的wifi API参考：[规范详情](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/device/wi-fi/tt-get-connected-wifi/)


### uni.startWifi(OBJECT)

初始化Wi-Fi模块

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|---|----|----|---|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|


### uni.stopWifi(OBJECT)

关闭 Wi-Fi 模块

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|---|----|----|---|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|


### uni.getConnectedWifi(OBJECT)

获取已连接的 Wi-Fi 信息

**OBJECT 参数说明**

|属性		|类型		|默认值	|必填												|说明						|
|---		|----		|------	|----												|---						|
|partialInfo|boolean	|false	|否													|是否需要返回部分 Wi-Fi 信息|
|success	|function	|		|否													|接口调用成功的回调函数		|
|fail		|function	|		|否													|接口调用失败的回调函数		|
|complete	|function	|		|否													|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**

|参数|类型|说明|
|:-|:-|:-|
|wifi|WifiInfo|Wi-Fi 信息|


### uni.getWifiList(OBJECT)

请求获取 Wi-Fi 列表。wifiList 数据会在 onGetWifiList 注册的回调中返回。

**OBJECT 参数说明**

|属性|类型|必填|说明|
|---|----|----|---|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**平台差异说明**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### uni.onGetWifiList(CALLBACK)

监听获取到 Wi-Fi 列表数据事件。

**CALLBACK 参数说明**

获取到 Wi-Fi 列表数据事件的监听函数

**CALLBACK 返回参数**

|属性		|类型				|说明			|
|--			|---				|--				|
|wifiList	|Array<[WifiInfo](#WifiInfo)>	|Wi-Fi 列表数据	|

**平台差异说明**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### uni.offGetWifiList(CALLBACK)

移除获取到 Wi-Fi 列表数据事件的监听函数。

**CALLBACK 参数说明**

onGetWifiList 传入的监听函数。不传此参数则移除所有监听函数。

**平台差异说明**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### uni.connectWifi(OBJECT)

连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。

**OBJECT 参数说明**

|属性	|类型		|默认值		|必填	|说明	|最低版本											|
|---	|---		|---		|---	|---	|-----												|
|SSID	|string		|			|是		|Wi-Fi 设备 SSID|													|
|BSSID	|string		|			|否		|Wi-Fi 设备 BSSID|													|
|password	|string		|			|是		|Wi-Fi 设备密码|													|
|maunal	|boolean	|false		|否		|跳转到系统设置页进行连接|2.12.0												|
|partialInfo	|boolean	|false		|否		|是否需要返回部分 Wi-Fi 信息，仅安卓生效|2.22.0												|
|success	|function	|			|否		|接口调用成功的回调函数|													|
|fail	|function	|			|否		|接口调用失败的回调函数|													|
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|

**平台差异说明**

|App-Android|App-iOS|
|:-:|:-:|
|android10 以下版本支持直连，android 10以上，包括鸿蒙系统仅支持 maunal 手动链接|x|


### uni.onWifiConnected(CALLBACK)

监听连接上 Wi-Fi 的事件。

**CALLBACK 参数说明**

连接上 Wi-Fi 的事件的监听函数

**CALLBACK 返回参数**

|属性	|类型		|说明		|
|---	|---		|---		|
|wifi	|[WifiInfo](#WifiInfo)	|Wi-Fi 信息	|

**平台差异说明**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|

### uni.offWifiConnected(CALLBACK)

移除连接上 Wi-Fi 的事件的监听函数。

**CALLBACK 参数说明**

onWifiConnected 传入的监听函数。不传此参数则移除所有监听函数。

**平台差异说明**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### uni.onWifiConnectedWithPartialInfo(CALLBACK)

监听连接上 Wi-Fi 的事件。

**CALLBACK 参数说明**

连接上 Wi-Fi 的事件的监听函数

**CALLBACK 返回参数**

|属性	|类型		|说明		|
|---	|---		|---		|
|wifi	|[WifiInfo](#WifiInfo)	|只包含 SSID 属性的 WifiInfo 对象	|

**平台差异说明**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### uni.offWifiConnectedWithPartialInfo(CALLBACK)

移除连接上 Wi-Fi 的事件的监听函数。

**CALLBACK 参数说明**

onWifiConnectedWithPartialInfo 传入的监听函数。不传此参数则移除所有监听函数。

**平台差异说明**

|App-Android|App-iOS|
|:-:|:-:|
|√|x|


### WifiInfo

Wifi 信息

|属性	|类型		|说明		|
|---	|---		|---		|
|SSID	|string	|Wi-Fi 的 SSID	|
|BSSID	|string	|Wi-Fi 的 BSSID	|
|secure	|boolean|Wi-Fi 是否安全	|
|signalStrength	|number	|Wi-Fi 信号强度, 安卓取值 0 ～ 100|
|frequency	|number	|Wi-Fi 频段单位 MHz	|


### 错误码

|错误码	|错误信息					|说明																|
|---	|----						|------																|
|0		|ok							|正常																|
|12000	|not init					|未先调用 startWifi 接口											|
|12001	|system not support			|当前系统不支持相关能力												|
|12002	|password error Wi-Fi		|密码错误															|
|12005	|wifi not turned on			|Android 特有，未打开 Wi-Fi 开关									|
|12013	|wifi config may be expired	|系统保存的 Wi-Fi 配置过期，建议忘记 Wi-Fi 后重试，仅 Android 支持	|

### 参考
- [Android平台获取WIFI列表](https://ask.dcloud.net.cn/question/12113)  
- [iOS平台打开系统WIFI设置页面](https://ask.dcloud.net.cn/question/7797)  
