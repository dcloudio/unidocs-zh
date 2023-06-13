### uni.onMemoryWarning(CALLBACK)

监听内存不足告警事件。

当 iOS/Android 向小程序进程发出内存警告时，触发该事件。Android 下有告警等级划分，iOS 无等级划分。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Android 3.6.9+、iOS 3.6.11+|x|√|√|√|x|√|√|√|

> 本 API 是 [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html)，需下载插件：[https://ext.dcloud.net.cn/plugin?id=10071](https://ext.dcloud.net.cn/plugin?id=10071)

**CALLBACK返回参数：**

|参数名|类型|说明|
|---|---|---|
|level|Number|仅 Android 有该字段，对应系统内存告警等级宏定义|

**level 的合法值**

|值|对应的Android告警值|说明|
|---|---|---|
|5|TRIM_MEMORY_RUNNING_MODERATE|进程在后台LRU列表的中间；释放内存可以帮助系统保持列表中稍后运行的其他进程，以获得更好的整体性能。|
|10|TRIM_MEMORY_RUNNING_LOW|该进程不是可消耗的后台进程，但设备内存不足|
|15|TRIM_MEMORY_RUNNING_CRITICAL|该进程不是可消耗的后台进程，但设备运行的内存极低，即将无法保持任何后台进程运行。|

**代码示例**

```javascript
const callback = function (res) {
 console.log(res,'onMemoryWarningReceive');
}
uni.onMemoryWarning(callback);
```

### uni.offMemoryWarning(CALLBACK)

取消监听内存不足告警事件。不传入 callback 则取消所有监听。


**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|x|x|√|√|


|属性	|	类型|说明|
|--	|--	|--	|
|	回调函数|	Function|内存不足告警事件的回调函数|

**代码示例**

```javascript
const callback = function (res) {
 console.log(res);
}
uni.onMemoryWarning(callback);
// 和 onMemoryWarning 传入同一个函数即可
uni.offMemoryWarning(callback);
```
**Tips**
- `CALLBACK`为调用`uni.onMemoryWarning`时传入的`CALLBACK`

