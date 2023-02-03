### uni.onMemoryWarning(CALLBACK)

监听内存不足告警事件。
Listen for out-of-memory warning events.

当 iOS/Android 向小程序进程发出内存警告时，触发该事件。Android 下有告警等级划分，iOS 无等级划分。
This event is triggered when iOS/Android issues a memory warning to the MiniApp process. There is an alarm level division under Android, but there is no level division under iOS.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|Android 3.6.9+、iOS 3.6.11+|x|√|√|√|x|√|√|√|

> 本 API 是 [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html)，需下载插件：[https://ext.dcloud.net.cn/plugin?id=10071](https://ext.dcloud.net.cn/plugin?id=10071)
> This API is [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html), you need to download the plug-in: [https://ext.dcloud.net.cn/plugin?id= 10071](https://ext.dcloud.net.cn/plugin?id=10071)

**CALLBACK返回参数：**
**CALLBACK return parameter:**

|参数名|类型|说明|
|parameter name|type|description|
|---|---|---|
|level|Number|仅 Android 有该字段，对应系统内存告警等级宏定义|
| level| Number|Only Android has this field, which corresponds to the system memory alarm level macro definition|

**level 的合法值**
**Legal values for level**

|值|对应的Android告警值|说明|
|Value|Corresponding Android alarm value|Description|
|---|---|---|
|5|TRIM_MEMORY_RUNNING_MODERATE|进程在后台LRU列表的中间；释放内存可以帮助系统保持列表中稍后运行的其他进程，以获得更好的整体性能。|
| 5| TRIM_MEMORY_RUNNING_MODERATE|The process is in the middle of the background LRU list; freeing memory can help the system keep other processes running later in the list for better overall performance. |
|10|TRIM_MEMORY_RUNNING_LOW|该进程不是可消耗的后台进程，但设备内存不足|
| 10| TRIM_MEMORY_RUNNING_LOW|The process is not a consumable background process, but the device is low on memory|
|15|TRIM_MEMORY_RUNNING_CRITICAL|该进程不是可消耗的后台进程，但设备运行的内存极低，即将无法保持任何后台进程运行。|
| 15| TRIM_MEMORY_RUNNING_CRITICAL|The process is not a consumable background process, but the device is running very low on memory and is about to be unable to keep any background processes running. |

**代码示例**
**code example**

```javascript
const callback = function (res) {
 console.log(res,'onMemoryWarningReceive');
}
uni.onMemoryWarning(callback);
```

### uni.offMemoryWarning(CALLBACK)

取消监听内存不足告警事件。不传入 callback 则取消所有监听。
Cancel listening to insufficient memory warning events. If no callback is passed in, all listeners will be cancelled.


**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|x|x|√|√|


|属性	|	类型|说明|
|Property|Type|Description|
|--	|--	|--	|
|	回调函数|	Function|内存不足告警事件的回调函数|
| Callback function| Function|Callback function for low memory alarm event|

**代码示例**
**code example**

```javascript
const callback = function (res) {
 console.log(res);
}
uni.onMemoryWarning(callback);
// 和 onMemoryWarning 传入同一个函数即可
// Just pass in the same function as onMemoryWarning
uni.offMemoryWarning(callback);
```
**Tips**
- `CALLBACK`为调用`uni.onMemoryWarning`时传入的`CALLBACK`
- `CALLBACK` is the `CALLBACK` passed in when calling `uni.onMemoryWarning`

