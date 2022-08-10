### uni.getNetworkType(OBJECT)
获取网络类型。
Get the network type.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|是|接口调用成功，返回网络类型 networkType|
| success| Function| Yes| Interface was successfully called. Return the network type networkType|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明**
**success return parameter description**

|参数|说明|
| Parameter| Instruction|
|:-|:-|
|networkType|网络类型|
| networkType| Network type|

**networkType 有效值**
**networkType valid value**

|值|说明|平台差异说明|
| Value| Instruction| Platform difference description|
|:-|:-|:-|
|wifi|wifi 网络||
| wifi| Wifi network| |
|2g|2g 网络||
| 2g| 2g network| |
|3g|3g 网络||
| 3g| 3g network| |
|4g|4g 网络||
| 4g| 4g network| |
|5g|5g 网络||
| 5g| 5g network| |
|ethernet|有线网络|App|
| ethernet| Wired network| App|
|unknown|Android 下不常见的网络类型||
| unknown| Unusual network types under Android| |
|none|无网络|&nbsp;|
| none| Wireless network|  |

**示例**
**Example**

```javascript
uni.getNetworkType({
	success: function (res) {
		console.log(res.networkType);
	}
});
```

### uni.onNetworkStatusChange(CALLBACK)
监听网络状态变化。可使用`uni.offNetworkStatusChange`取消监听。
listening to network status change. You can use `uni.offNetworkStatusChange` to cancel listening to.

**CALLBACK 返回参数**
**CALLBACK return parameter**

|参数|类型|说明|平台差异说明|
| Parameter| Type| Instruction| Platform difference description|
|:-|:-|:-|:-|
|isConnected|Boolean|当前是否有网络连接|字节跳动小程序不支持|
|networkType|String|网络类型|&nbsp;|
| networkType| String| Network type|  |

**示例**
**Example**

```javascript
uni.onNetworkStatusChange(function (res) {
	console.log(res.isConnected);
	console.log(res.networkType);
});
```

### uni.offNetworkStatusChange(CALLBACK)
取消监听网络状态变化。
Cancel listening to network status change.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 3.0.1+|HBuilderX 3.0.1+|基础库 2.9.3+|x|x|x|x|√|x|

**Tips**
- `CALLBACK`必须为调用`uni.onNetworkStatusChange`时传入的`CALLBACK`
- `CALLBACK` must be the `CALLBACK` passed in when calling `uni.onNetworkStatusChange`

例如：
E.g.:
```
var CALLBACK = function(res) {
    // ...这里写你的业务逻辑
    //... Write your business logic here
}
uni.offNetworkStatusChange(CALLBACK)
uni.onNetworkStatusChange(CALLBACK);
```