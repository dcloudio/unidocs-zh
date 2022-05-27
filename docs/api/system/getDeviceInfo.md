### uni.getDeviceInfo()

获取设备基础信息

|App|H5|微信小程序|支付宝小程序|字节跳动小程序|快手小程序|QQ小程序|百度小程序|京东小程序|钉钉小程序|飞书小程序|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|√ `(3.4.13+)`|√ `(3.4.13+)`|√ `(2.20.1+)`|x|x|x|x|x|x|x|x|

**返回参数说明**

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|deviceBrand|string|设备品牌。如：`apple`、`huawei`||
|deviceId|string|设备 id	。由 uni-app 框架生成并存储，清空 Storage 会导致改变||
|deviceModel|string|设备型号||
|deviceType|string|设备类型`phone`、`pad`、`pc`||
|brand|string|设备品牌||
|model|string|设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。||
|system|string|操作系统及版本||
|platform|string|客户端平台||
|deviceOrientation|string|设备方向 `竖屏 portrait`、`横屏 landscape`|`App、H5`|
|devicePixelRatio|string|设备像素比|`App、H5`|
|abi	|String|应用二进制接口类型（仅 Android 支持）|`仅微信小程序`|
|benchmarkLevel|Number|设备性能等级（仅 Android 支持）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）|`仅微信小程序`|