### uni.openSetting(OBJECT)

调起客户端小程序设置界面，返回用户设置的操作结果。
Call up the client applet setting interface and return the operation result set by the user.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|√|√|√|

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|---|---|---|---|---|
|success|function|否|接口调用成功的回调函数|
|success|function|No|Callback function for successful interface call|
|fail|function|否|接口调用失败的回调函数|
|fail|function|No|Callback function for interface call failure|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function|No|The callback function for the end of the interface call (the call will be executed if the call succeeds or fails)|

**success 返回参数**
**success return parameter**

|属性|类型|说明|
|property|type|description|
|---|---|---|
|authSetting|Object|用户授权结果，其中 key 为 [scope](/api/other/authorize?id=scope-列表) 值，value 为 Boolean 值，表示用户是否允许授权|
|authSetting|Object|User authorization result, where key is [scope](/api/other/authorize?id=scope-%E5%88%97%E8%A1%A8) value, value is Boolean value, indicating whether the user is Allow Authorization|

**代码示例**
**CODE EXAMPLE**

```javascript
uni.openSetting({
  success(res) {
    console.log(res.authSetting)
  }
});
```

### uni.getSetting(OBJECT)
获取用户的当前设置。
Get the user's current settings.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|√|√|√|

|属性|类型|默认值|必填|说明|
|property|type|default value|required|description|
|---|---|---|---|---|
|withSubscriptions|Boolean|false |否|是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。 **（微信小程序 2.10.1 支持）**|
|withSubscriptions|Boolean|false |No| Whether to obtain the subscription status of the user's subscription messages at the same time, the default is not to obtain. Note: withSubscriptions will only return subscription messages for which the user has checked the "Always keep above, never ask again" option in the Subscriptions panel. **(Wechat applet 2.10.1 support)**|
|success|function||否|接口调用成功的回调函数|
|success|function||No|Callback function for successful interface call|
|fail|function||否|接口调用失败的回调函数|
|fail|function||No|Callback function for interface call failure|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function||No|The callback function for the end of the interface call (the call will be executed if the call succeeds or fails)|


**success 返回参数**
**success return parameter**

|属性|类型|说明|
|property|type|description|
|---|---|---|
|authSetting|Object|用户授权结果，其中 key 为 [scope](/api/other/authorize?id=scope-列表) 值，value 为 Boolean 值，表示用户是否允许授权|
|authSetting|Object|User authorization result, where key is [scope](/api/other/authorize?id=scope-%E5%88%97%E8%A1%A8) value, value is Boolean value, indicating whether the user is Allow Authorization|
|subscriptionsSetting|SubscriptionsSetting|用户订阅消息设置，接口参数`withSubscriptions`值为`true`时才会返回。**（微信小程序 2.10.1 支持）**|
|subscriptionsSetting|SubscriptionsSetting|User subscription message settings, only returned when the interface parameter `withSubscriptions` value is `true`. **(Wechat applet 2.10.1 support)**|

#### 示例代码
#### Sample code
```js
uni.getSetting({
   success(res) {
      console.log(res.authSetting)
   }
})
```
