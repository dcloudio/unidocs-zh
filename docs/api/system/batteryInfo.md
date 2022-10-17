#### uni.getBatteryInfo(OBJECT)

获取设备电量

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√[由uts插件支持](https://ext.dcloud.net.cn/plugin?id=9295)|√[由uts插件支持](https://ext.dcloud.net.cn/plugin?id=9295)|√[由uts插件支持](https://ext.dcloud.net.cn/plugin?id=9295)|[规范详情](https://docs.alipay.com/mini/api/nrnziy)|[规范详情](https://smartprogram.baidu.com/docs/develop/api/device_battery/#swan-getBatteryInfo/)|x|x|[规范详情](https://q.qq.com/wiki/develop/miniprogram/API/equipment/ibeacon_battery.html)|x|x|

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**

|参数|类型|说明|
|:-|:-|:-|
|level|Number|设备电量，范围 1 - 100|
|isCharging|Boolean|是否正在充电中|
