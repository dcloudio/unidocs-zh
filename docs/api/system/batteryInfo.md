### uni.getBatteryInfo(OBJECT)

获取设备电量
Get device power

> 本 API 是 [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html)，需下载插件：[getBatteryInfo](https://ext.dcloud.net.cn/plugin?id=9295)
> This API is [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html), you need to download the plug-in: [getBatteryInfo](https://ext.dcloud.net.cn/plugin ?id=9295)

> uni ext api 需 HBuilderX 3.6.8+
> uni ext api requires HBuilderX 3.6.8+

> iOS 运行需要打自定义基座
> iOS requires a custom dock

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|x|x|√|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter Name|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
| success| Function|No|Callback for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|level|Number|设备电量，范围 1 - 100|
| level| Number|Equipment level, range 1 - 100|
|isCharging|Boolean|是否正在充电中|
| isCharging| Boolean|Whether it is charging|

**示例代码**
**Example Code**

```js
uni.getBatteryInfo({
  success: (res) => {
    console.log(res)
  }
})
```
