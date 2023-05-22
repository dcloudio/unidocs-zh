### uni.getSystemSetting()
获取设备设置
Get device settings

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|钉钉小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|Dingding applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX (3.5.2+)|x|基础库 (2.20.1+)|x|x|x|x|x|x|x|
|HBuilderX (3.5.2+)|x|Base Library (2.20.1+)|x|x|x|x|x|x|x|


**返回参数说明**
**Return parameter description**

|属性|类型|说明|
|property|type|description|
|:-|:-|:-|
|bluetoothEnabled|boolean|蓝牙的系统开关。当值为 `false` 时，App端：有可能是配置不正确导致，此时会返回 `bluetoothError` 属性描述错误。|
|bluetoothEnabled|boolean|System switch for bluetooth. When the value is `false`, on the App side: it may be caused by incorrect configuration. In this case, the `bluetoothError` attribute description error will be returned. |
|bluetoothError|String|App端：Android平台没有权限或者iOS平台模块配置错误时返回字符串，否则不返回此属性。详情见下|
|bluetoothError|String|App: Returns a string when the Android platform does not have permission or the iOS platform module configuration is incorrect, otherwise this property is not returned. See below for details|
|locationEnabled|boolean|地理位置的系统开关。当值为 `false` 时，App端：Android平台是准确的；iOS平台有可能是配置不正确导致，此时会返回 `locationError` 属性描述错误.|
|locationEnabled|boolean|System switch for location. When the value is `false`, App side: Android platform is accurate; iOS platform may be caused by incorrect configuration, in this case, `locationError` property description error will be returned.|
|locationError|String|App端：Android平台不返回此属性；iOS平台模块配置错误时返回字符串，否则不返回此属性。详情见下|
|locationError|String|App: Android platform does not return this property; iOS platform module configuration error returns a string, otherwise this property is not returned. See below for details|
|wifiEnabled|boolean|Wi-Fi 的系统开关|
|wifiError|String|App端：Android平台没有权限时返回此属性；iOS平台不返回此属性；。详情见下|
|deviceOrientation|string|设备方向。`竖屏：portrait`，`横屏：landscape`|
|deviceOrientation|string|Device orientation. `Portrait: portrait`, `Landscape: landscape`|

**Tips**
- `bluetoothError`：
  - Android平台值为 `"Missing permissions required by BluetoothAdapter.isEnabled: android.permission.BLUETOOTH"` 表示没有 `android.permission.BLUETOOTH` 权限
  - The Android platform value is `"Missing permissions required by BluetoothAdapter.isEnabled: android.permission.BLUETOOTH"` means there is no `android.permission.BLUETOOTH` permission
  - iOS平台值为 `"Missing bluetooth module in manifest.json"` ，表示没有在 `manifest.json -> App模块配置` 中配置 `BlueTooth(低功耗蓝牙)` 模块
  - The iOS platform value is `"Missing bluetooth module in manifest.json"` , indicating that the `BlueTooth (Bluetooth Low Energy)` module is not configured in `manifest.json -> App Module Configuration`
- `locationError`：
  - Android平台不会返回此值；
  - The Android platform does not return this value;
  - iOS平台值为 `"Missing geolocation module in manifest.json"` 表示没有在 `manifest.json -> App模块配置` 中配置 `Geolocation(定位)` 模块
- `wifiError`
  - Android平台值为 `"Missing permissions required by WifiManager.isWifiEnabled: android.permission.ACCESS_WIFI_STATE"` 表示没有 `android.permission.ACCESS_WIFI_STATE` 权限
  - iOS平台不会返回此值；

**示例**
**Example**

```javascript
const systemSetting = uni.getSystemSetting()

console.log(systemSetting.bluetoothEnabled)
console.log(systemSetting.deviceOrientation)
console.log(systemSetting.locationEnabled)
console.log(systemSetting.wifiEnabled)
```
