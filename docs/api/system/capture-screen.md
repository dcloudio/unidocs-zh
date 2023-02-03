### uni.onUserCaptureScreen(CALLBACK)

监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。
Listen to the user's active screen capture event. This event is triggered when the user uses the system screen capture button to capture a screen.
 
**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|

> 在 App 平台本 API 是 [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html)，需下载插件：[uni-usercapturescreen](https://ext.dcloud.net.cn/plugin?name=uni-usercapturescreen)
> On the App platform, this API is [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html), you need to download the plug-in: [uni-usercapturescreen](https://ext.dcloud. net.cn/plugin?name=uni-usercapturescreen)

**CALLBACK返回参数：**
**CALLBACK return parameter:**

无
none

**代码示例**
**code example**

```javascript
uni.onUserCaptureScreen(function() {
    console.log('用户截屏了')
});
```

**注意**
**Notice**

Android的截屏监听原理是监听相册中截屏目录的文件新增，需赋予App本地文件读取权限。
The principle of Android's screen capture monitoring is to monitor the addition of files in the screen capture directory in the album, and the App needs to be given the local file read permission.

### uni.offUserCaptureScreen(function callback)

用户主动截屏事件。取消事件监听。
The event that the user takes a screenshot. Cancel event listening.


**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|x|√|√|

> 在 App 平台本 API 是 [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html)，需下载插件：[uni-usercapturescreen](https://ext.dcloud.net.cn/plugin?name=uni-usercapturescreen)
> On the App platform, this API is [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html), you need to download the plug-in: [uni-usercapturescreen](https://ext.dcloud. net.cn/plugin?name=uni-usercapturescreen)

**参数**
**parameter**

|属性	|	类型|说明|
|Property|Type|Description|
|--	|--	|--	|
|回调函数|	Function|用户主动截屏事件的回调函数|
|Callback function| Function|Callback function for user active screen capture event|
