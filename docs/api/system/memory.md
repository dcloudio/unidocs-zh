<md-translatedByGoogle />
### uni.onMemoryWarning(CALLBACK)

监听内存不足告警事件。
Listen for out-of-memory alarm events.

当 iOS/Android 向小程序进程发出内存警告时，触发该事件。Android 下有告警等级划分，iOS 无等级划分。
This event is fired when iOS/Android issues a memory warning to the applet process. There are alarm levels for Android, but no level for iOS.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|x|√|√|√|

**CALLBACK返回参数：**
**CALLBACK return parameters:**

|参数名|类型|说明|
|parameter name|type|description|
|---|---|---|
|level|Number|仅 Android 有该字段，对应系统内存告警等级宏定义|
|level|Number|Only Android has this field, corresponding to the macro definition of system memory alarm level|

**level 的合法值**
**legal values for level**

|值|说明|
|value|description|
|---|---|
|5|TRIM_MEMORY_RUNNING_MODERATE|
|10|TRIM_MEMORY_RUNNING_LOW|
|15|TRIM_MEMORY_RUNNING_CRITICAL|

**代码示例**
**CODE EXAMPLE**

```javascript
uni.onMemoryWarning(function () {
  console.log('onMemoryWarningReceive')
})
```

### uni.offMemoryWarning(CALLBACK)

取消监听内存不足告警事件。不传入 callback 则取消所有监听。
Cancel the monitoring of the low-memory alarm event. If no callback is passed, all listeners will be cancelled.


**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|x|x|√|√|


**参数**
**parameter**

|属性	|	类型|说明|
|property|type|description|
|--	|--	|--	|
|	回调函数|	Function|内存不足告警事件的回调函数|
| Callback function| Function|Callback function for low memory alarm event|


