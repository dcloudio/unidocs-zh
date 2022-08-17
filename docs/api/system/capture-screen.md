### uni.onUserCaptureScreen(CALLBACK)

监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。
Monitor the user's active screen capture event. This event is triggered when the user uses the system screen capture button to capture the screen.
 
**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|√|√|√|

注：App没有内置截屏相关功能，可以在插件市场搜索相关插件，[详见](https://ext.dcloud.net.cn/search?q=%E6%88%AA%E5%B1%8F)
Note: App does not have built-in screenshot related functions, you can search for related plug-ins in the plug-in market, [see details](https://ext.dcloud.net.cn/search?q=%E6%88%AA%E5%B1%8F )

**CALLBACK返回参数：**
**CALLBACK return parameters:**

无
none

**代码示例**
**CODE EXAMPLE**

```javascript
uni.onUserCaptureScreen(function() {
    console.log('用户截屏了')
});
```

### uni.offUserCaptureScreen(function callback)

用户主动截屏事件。取消事件监听。
User active screenshot event. Cancel event listening.


**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|x|√|√|


**参数**
**parameter**

|属性	|	类型|说明|
|property|type|description|
|--	|--	|--	|
|回调函数|	Function|用户主动截屏事件的回调函数|
|Callback function| Function|Callback function for the user's active screen capture event|