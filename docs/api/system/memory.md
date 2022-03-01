### uni.onMemoryWarning(CALLBACK)

监听内存不足告警事件。

当 iOS/Android 向小程序进程发出内存警告时，触发该事件。Android 下有告警等级划分，iOS 无等级划分。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|x|√|√|√|

**CALLBACK返回参数：**

|参数名|类型|说明|
|---|---|---|
|level|Number|仅 Android 有该字段，对应系统内存告警等级宏定义|

**level 的合法值**

|值|说明|
|---|---|
|5|TRIM_MEMORY_RUNNING_MODERATE|
|10|TRIM_MEMORY_RUNNING_LOW|
|15|TRIM_MEMORY_RUNNING_CRITICAL|

**代码示例**

```javascript
uni.onMemoryWarning(function () {
  console.log('onMemoryWarningReceive')
})
```

### uni.offMemoryWarning(CALLBACK)

取消监听内存不足告警事件。不传入 callback 则取消所有监听。


**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|x|x|√|√|


**参数**

|属性	|	类型|说明|
|--	|--	|--	|
|	回调函数|	Function|内存不足告警事件的回调函数|


