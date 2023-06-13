### uni.getAppAuthorizeSetting()
获取 APP 授权设置

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|钉钉小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX (3.5.2+)|x|基础库 (2.20.1+)|x|x|x|x|x|x|x|

**返回参数说明**

|属性|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|albumAuthorized|'authorized'/'denied'/'not determined'|允许使用相册的开关|App 端仅 iOS 支持|
|bluetoothAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许使用蓝牙的开关|App 端仅 iOS 支持|
|cameraAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许使用摄像头的开关||
|locationAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许使用定位的开关||
|locationAccuracy|String|定位准确度。`"reduced"` 表示模糊定位；`"full"` 表示精准定位；`"unsupported"` 表示不支持|App 端仅 iOS 支持|
|microphoneAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许使用麦克风的开关|
|notificationAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许通知的开关||
|notificationAlertAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许通知带有提醒的开关|App 端仅 iOS（10.0+）支持|
|notificationBadgeAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许通知带有标记的开关|App 端仅 iOS（10.0+）支持|
|notificationSoundAuthorized|'authorized'/'denied'/'not determined'/'config error'|允许通知带有声音的开关|App 端仅 iOS（10.0+）支持|
|phoneCalendarAuthorized|'authorized'/'denied'/'not determined'|允许读写日历的开关|App 端不支持|

> App 端需要获取更多权限状态可参考插件: [App权限判断和提示](https://ext.dcloud.net.cn/plugin?id=594)

#### 不推荐使用的返回参数，仅为兼容保留
|locationReducedAccuracy|boolean|模糊定位。true 表示模糊定位，false 表示精确定位 |App 端仅 iOS 支持|

**Tips：**

- `'authorized'`：表示已经获得授权，无需再次请求授权；
- `'denied'`：表示请求授权被拒绝，无法再次请求授权；（此情况需要引导用户打开系统设置，在设置页中打开权限）
- `'not determined'`：表示尚未请求授权，会在App下一次调用系统相应权限时请求；（仅 iOS 会出现。此种情况下引导用户打开系统设置，不展示开关）
- `'config error'`：只有在 App 端时返回
  - bluetoothAuthorized：
    - Android平台不会返回 `config error`
    - iOS平台：表示没有在 `manifest.json -> App模块配置` 中配置 `BlueTooth(低功耗蓝牙)` 模块
  - cameraAuthorized：
    - Android平台：表示没有授予 `android.permission.CAMERA` 权限
    - iOS平台不会返回 `config error`
  - locationAuthorized：
    - Android平台：表示没有授予 `android.permission.ACCESS_COARSE_LOCATION` 权限
    - iOS平台：表示没有在 `manifest.json -> App模块配置` 中配置 `Geolocation(定位)` 模块
  - microphoneAuthorized：
    - Android平台：表示没有授予 `android.permission.RECORD_AUDIO` 权限
    - iOS平台不会返回 `config error`
  - notificationAuthorized、notificationAlertAuthorized、notificationBadgeAuthorized、notificationSoundAuthorized：
    - Android平台不支持
    - iOS平台：表示没有在 `manifest.json -> App模块配置` 中配置 `Push(推送)` 模块

**示例**

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
