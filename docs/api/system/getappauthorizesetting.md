### uni.getAppAuthorizeSetting()
获取 APP 授权设置
Get APP authorization settings

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|钉钉小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX (3.5.2+)|x|基础库 (2.20.1+)|x|x|x|x|x|x|x|
|HBuilderX (3.5.2+)|x|Base Library (2.20.1+)|x|x|x|x|x|x|x|

**返回参数说明**
**Return parameter description**

|属性|类型|说明|平台差异说明|
|Properties|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|albumAuthorized|'authorized'/'denied'/'not determined'|允许使用相册的开关|App 端仅 iOS 支持|
|albumAuthorized|'authorized'/'denied'/'not determined'|Album switch|Album only iOS support|
|bluetoothAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许使用蓝牙的开关|App 端仅 iOS 支持|
|bluetoothAuthorized|'authorized'/'denied'/'not determined'/'config error'|The switch that allows the use of Bluetooth|App only supports iOS|
|cameraAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许使用摄像头的开关||
|cameraAuthorized|'authorized'/'denied'/'not determined'/'config error'|Switch to allow camera use||
|locationAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许使用定位的开关||
|locationAuthorized|'authorized'/'denied'/'not determined'/'config error'|Located switch allowed||
|locationAccuracy|String|定位准确度。`"reduced"` 表示模糊定位；`"full"` 表示精准定位；`"unsupported"` 表示不支持|App 端仅 iOS 支持|
|locationAccuracy|String|Location accuracy. `"reduced"` means fuzzy positioning; `"full"` means precise positioning; `"unsupported"` means not supported|Only iOS supports on the App side|
|microphoneAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许使用麦克风的开关|
|microphoneAuthorized|'authorized'/'denied'/'not determined'/'config error'|Switch to allow microphone use|
|notificationAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许通知的开关||
|notificationAuthorized|'authorized'/'denied'/'not determined'/'config error'|Allow notification switch||
|notificationAlertAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许通知带有提醒的开关|App 端仅 iOS（10.0+）支持|
|notificationAlertAuthorized|'authorized'/'denied'/'not determined'/'config error'|Allow notification switch with reminder|App side only supported by iOS (10.0+)|
|notificationBadgeAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许通知带有标记的开关|App 端仅 iOS（10.0+）支持|
|notificationBadgeAuthorized|'authorized'/'denied'/'not determined'/'config error'|Allow notification of flagged switches|App-side only supported on iOS (10.0+)|
|notificationSoundAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许通知带有声音的开关|App 端仅 iOS（10.0+）支持|
|notificationSoundAuthorized|'authorized'/'denied'/'not determined'/'config error'|Allow notifications with sound switch|App side only supported by iOS (10.0+)|
|phoneCalendarAuthorized|'authorized'/'denied'/'not determined'|允许读写日历的开关|App 端不支持|
|phoneCalendarAuthorized|'authorized'/'denied'/'not determined'|The switch that allows reading and writing the calendar|Not supported on the App side|

> App 端需要获取更多权限状态可参考插件: [App权限判断和提示](https://ext.dcloud.net.cn/plugin?id=594)
> If the App needs to obtain more permission status, please refer to the plugin: [App Permission Judgment and Tips](https://ext.dcloud.net.cn/plugin?id=594)

#### 不推荐使用的返回参数，仅为兼容保留
#### Deprecated return parameter, reserved for compatibility only
|locationReducedAccuracy|boolean|模糊定位。true 表示模糊定位，false 表示精确定位 |App 端仅 iOS 支持|
|locationReducedAccuracy|boolean|Ambiguous location. true means fuzzy positioning, false means precise positioning |App only supports iOS|

**Tips：**

- `'authorized'`：表示已经获得授权，无需再次请求授权；
- `'authorized'`: indicates that authorization has been obtained, and there is no need to request authorization again;
- `'denied'`：表示请求授权被拒绝，无法再次请求授权；（此情况需要引导用户打开系统设置，在设置页中打开权限）
- `'denied'`: Indicates that the request for authorization has been rejected and cannot be requested for authorization again; (in this case, the user needs to be guided to open the system settings and open the permissions in the settings page)
- `'not determined'`：表示尚未请求授权，会在App下一次调用系统相应权限时请求；（仅 iOS 会出现。此种情况下引导用户打开系统设置，不展示开关）
- `'not determined'`: Indicates that authorization has not been requested, and will be requested the next time the App calls the corresponding permission of the system; (only iOS will appear. In this case, guide the user to open the system settings, and do not display the switch)
- `'config error'`：只有在 App 端时返回
- `'config error'`: only returned on the App side
  - bluetoothAuthorized：
    - Android平台不会返回 `config error`
    - Android platform will not return `config error`
    - iOS平台：表示没有在 `manifest.json -> App模块配置` 中配置 `BlueTooth(低功耗蓝牙)` 模块
    - iOS platform: indicates that the `BlueTooth (Bluetooth Low Energy)` module is not configured in `manifest.json -> App module configuration`
  - cameraAuthorized：
    - Android平台：表示没有授予 `android.permission.CAMERA` 权限
    - Android platform: indicates that the `android.permission.CAMERA` permission is not granted
    - iOS平台不会返回 `config error`
    - iOS platform will not return `config error`
  - locationAuthorized：
    - Android平台：表示没有授予 `android.permission.ACCESS_COARSE_LOCATION` 权限
    - Android platform: indicates that the `android.permission.ACCESS_COARSE_LOCATION` permission is not granted
    - iOS平台：表示没有在 `manifest.json -> App模块配置` 中配置 `Geolocation(定位)` 模块
    - iOS platform: indicates that the `Geolocation (location)` module is not configured in `manifest.json -> App module configuration`
  - microphoneAuthorized：
    - Android平台：表示没有授予 `android.permission.RECORD_AUDIO` 权限
    - Android platform: indicates that the `android.permission.RECORD_AUDIO` permission is not granted
    - iOS平台不会返回 `config error`
    - iOS platform will not return `config error`
  - notificationAuthorized、notificationAlertAuthorized、notificationBadgeAuthorized、notificationSoundAuthorized：
    - Android平台不支持
    - Android platform not supported
    - iOS平台：表示没有在 `manifest.json -> App模块配置` 中配置 `Push(推送)` 模块
    - iOS platform: Indicates that the `Push' module is not configured in `manifest.json -> App module configuration`

**示例**
**Example**

```javascript
const appAuthorizeSetting = uni.getAppAuthorizeSetting()

console.log(appAuthorizeSetting.albumAuthorized)
console.log(appAuthorizeSetting.bluetoothAuthorized)
console.log(appAuthorizeSetting.cameraAuthorized)
console.log(appAuthorizeSetting.locationAuthorized)
console.log(appAuthorizeSetting.locationReducedAccuracy)
console.log(appAuthorizeSetting.microphoneAuthorized)
console.log(appAuthorizeSetting.notificationAlertAuthorized)
console.log(appAuthorizeSetting.notificationAuthorized)
console.log(appAuthorizeSetting.notificationBadgeAuthorized)
console.log(appAuthorizeSetting.notificationSoundAuthorized)
console.log(appAuthorizeSetting.phoneCalendarAuthorized)
```
