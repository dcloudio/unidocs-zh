### uni.onLocationChange(FUNCTION CALLBACK)

监听实时地理位置变化事件，需结合 `uni.startLocationUpdate` 或 `uni.startLocationUpdateBackground` 使用。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.6.8+）|√（3.6.8+）|√|x|√|√|x|√|x|

**FUNCTION CALLBACK 参数**

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|latitude|Number|纬度，范围为 -90~90，负数表示南纬。||
|longitude|Number|经度，范围为 -180~180，负数表示西经。||
|speed|Number|速度 (m/s)|H5不支持|
|accuracy|number|位置的精确度||
|altitude|number|高度 (m)|H5不支持|
|verticalAccuracy|number|垂直精度 (m)|抖音小程序、快手小程序 Android 无法获取，返回 0|
|horizontalAccuracy|number|水平精度 (m)|抖音小程序不支持|
|city|string|定位到的城市信息|百度小程序、抖音小程序（iOS 不支持）|
|cityCode|String|城市编码|百度小程序||street|String|街道名称
|city|String|城市名称|百度小程序|
country|String|国家|百度小程序|
countryCode|String|国家代码|百度小程序|
province|String|省份|百度小程序|
streetNumber|String|街道号码|百度小程序|
district|String|区|百度小程序|
isFullAccuracy|Boolean|是不是精确定位信息|百度小程序|
altitudeAccuracy|Number|海拔的精确度信息|App|

**注意**
- 该方法会持续监听地理位置信息的变化，建议在不需要监听地理位置信息变化后，直接调用 `uni.stopLocationUpdate` 方法取消监听。
- `微信小程序`若使用该接口，需要在 app.json 中进行声明，否则将无法正常使用该接口，[详情](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html)
- `抖音小程序`调用此 API 需要申请高精度权限，具体信息见[高精度定位运营规范](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/operation/platform-capabilities/high-progress-targeting/gaojingdu/)。

**示例**

```javascript
uni.onLocationChange(function (res) {
	console.log('纬度：' + res.latitude);
	console.log('经度：' + res.longitude);
});
```
### uni.offLocationChange(FUNCTION CALLBACK)

关闭监听实时位置变化，前后台都停止消息接收。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.6.8+）|√（3.6.8+）|√|x|√|√|x|√|x|

**注意：App端及H5端callback参数为必填。**

**FUNCTION CALLBACK 参数**

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|latitude|number|纬度，范围 [-90, 90]，负数表示南纬|快手小程序|
|longitude|number|经度，范围 [-180, 180]，负数表示西经|快手小程序|
|speed|number|速度 (m/s)|快手小程序|
|accuracy|number|位置的精确度|快手小程序|
|altitude|number|高度 (m)|快手小程序|
|verticalAccuracy|number|垂直精度 (m)（Android 无法获取，返回 0）|快手小程序|
|horizontalAccuracy|number|水平精度 (m)|快手小程序|

### uni.onLocationChangeError(FUNCTION CALLBACK)

监听持续定位接口返回失败时触发。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.6.8+）|√（3.6.8+）|√|x|x|√|x|x|x|

**FUNCTION CALLBACK 参数**

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|errCode|Number|错误|微信小程序|
|errMsg|String|错误信息|抖音小程序|

### uni.offLocationChangeError(FUNCTION CALLBACK)

取消注册位置更新错误回调。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.6.8+）|√（3.6.8+）|√|x|x|√|x|x|x|

**注意：App端及H5端callback参数为必填。**

**FUNCTION CALLBACK 参数**

无返回值。

### uni.startLocationUpdate(OBJECT)

开启小程序进入前台时接收位置消息。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.6.8+）|√（3.6.8+）|√|x|√|√|x|√|x|

**OBJECT 参数**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-:|
|type|String|否|指定坐标系类型，可以是 wgs84 或 gcj02|微信小程序、抖音小程序|
|success|Function|否|接口调用成功的回调函数||
|fail|Function|否|接口调用失败的回调函数||
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）||
|needFullAccuracy|Boolean|否|针对 iOS14/Android12 及以上的新特性，其他情况本参数忽略。默认情况宿主是精确定位就返回精确定位信息。传入 true 会强制使用精确定位信息，iOS14/Android12 及以上如果没有精确定位权限，会弹出精确定位授权弹框。|百度小程序|


**示例**

```javascript
uni.startLocationUpdate({
  success: res => console.log('开启小程序接收位置消息成功'),
  fail: err => console.error('开启小程序接收位置消息失败：', err),
  complete: msg => console.log('调用开启小程序接收位置消息 API 完成')
});
```

### uni.stopLocationUpdate(OBJECT)

关闭监听实时位置变化，前后台都停止消息接收。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.6.8+）|√（3.6.8+）|√|x|√|√|x|√|x|

**OBJECT 参数**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-:|
|success|Function|否|接口调用成功的回调函数||
|fail|Function|否|接口调用失败的回调函数||
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）||

### uni.startLocationUpdateBackground(OBJECT)

开始监听实时地理位置信息变化事件，小程序进入前后台时均接收实时地理位置信息。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|x|x|x|√|x|

**OBJECT 参数**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-:|
|type|String|否|指定坐标系类型，可以是 wgs84 或 gcj02|微信小程序、抖音小程序|
|success|Function|否|接口调用成功的回调函数||
|fail|Function|否|接口调用失败的回调函数||
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）||


### 三方定位和地图服务收费说明

使用三方定位或者地图服务，需向服务提供商（如：高德地图、百度地图、腾讯地图、谷歌地图）申请商业授权和缴纳费用（5万/年）。

DCloud为开发者争取了福利，可优惠获取高德的商业授权。如有需求请发邮件到`bd@dcloud.io`（注明你的公司名称、应用介绍、HBuilder账户）；你也可以直接通过`uni-im`发起在线咨询，在线咨询地址：[DCloud地图服务专员](https://im.dcloud.net.cn/#/?user_id=b9839630-a479-11ea-b772-0f6ad6cf835c)。

详见：[https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic](https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic)
