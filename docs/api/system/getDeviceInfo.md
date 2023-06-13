### uni.getDeviceInfo()

获取设备基础信息

|App|H5|微信小程序|支付宝小程序|抖音小程序|快手小程序|QQ小程序|百度小程序|京东小程序|钉钉小程序|飞书小程序|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|√ `(3.4.13+)`|√ `(3.4.13+)`|√ `(2.20.1+)`|x|x|x|x|x|x|x|x|

**返回参数说明**

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|deviceBrand|string|设备品牌。如：`apple`、`huawei`|`H5 不支持`|
|deviceId|string|设备 id	。由 uni-app 框架生成并存储，清空 Storage 会导致改变||
|deviceModel|string|设备型号||
|deviceType|string|设备类型`phone`、`pad`、`pc`||
|deviceOrientation|string|设备方向 `竖屏 portrait`、`横屏 landscape`|`App、H5`。微信小程序请使用 `(getSystemInfo Api)[/api/system/info.html]` 获取|
|devicePixelRatio|string|设备像素比|`App、H5`。微信小程序请使用 `(getSystemInfo Api)[/api/system/info.html]` 获取|
|system|string|操作系统及版本||
|platform|客户端平台||

小程序特殊的返回参数

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|abi	|String|应用二进制接口类型（仅 Android 支持）|`仅微信小程序`|
|benchmarkLevel|Number|设备性能等级（仅 Android 支持）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）|`仅微信小程序`|

不推荐使用的返回参数，仅为向下兼容保留

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|brand|string|设备品牌|`H5 不支持`|
|model|string|设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。||

**Tips**
- `deviceId`：`android 平台` 根据优先使用imei、mac，如果没有获取到就使用随机生成的标识。`ios 平台` 是直接使用随机生成的标识