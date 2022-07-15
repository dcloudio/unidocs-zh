### uni.getAppAuthorizeSetting()
获取 APP 授权设置

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|钉钉小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 3.5.2+|x|基础库 2.20.1+|x|x|x|x|x|x|x|

**返回参数说明**

|属性|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|albumAuthorized|'authorized'/'denied'/'not determined'|允许使用相册的开关|App 端仅 iOS 有效|
|bluetoothAuthorized|'authorized'/'denied'/'not determined'|允许使用蓝牙的开关|App 端仅 iOS 有效|
|cameraAuthorized|'authorized'/'denied'/'not determined'|允许使用摄像头的开关||
|locationAuthorized|'authorized'/'denied'/'not determined'|允许使用定位的开关||
|locationReducedAccuracy|boolean|定位准确度。true 表示模糊定位，false 表示精确定位|App 端仅 iOS 有效|
|microphoneAuthorized|'authorized'/'denied'/'not determined'|允许使用麦克风的开关|
|notificationAuthorized|'authorized'/'denied'/'not determined'|允许通知的开关||
|notificationAlertAuthorized|'authorized'/'denied'/'not determined'|允许通知带有提醒的开关|App 端仅 iOS 有效|
|notificationBadgeAuthorized|'authorized'/'denied'/'not determined'|允许通知带有标记的开关|App 端仅 iOS 有效|
|notificationSoundAuthorized|'authorized'/'denied'/'not determined'|允许通知带有声音的开关|App 端仅 iOS 有效|
|phoneCalendarAuthorized|'authorized'/'denied'/'not determined'|允许读写日历的开关|App 端不支持|

**Tips：**

`'authorized'` 表示已经获得授权，无需再次请求授权；
`'denied'` 表示请求授权被拒绝，无法再次请求授权；（此情况需要引导用户打开系统设置，在设置页中打开权限）
`'non determined'` 表示尚未请求授权，会在App下一次调用系统相应权限时请求；（仅 iOS 会出现。此种情况下引导用户打开系统设置，不展示开关）

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
