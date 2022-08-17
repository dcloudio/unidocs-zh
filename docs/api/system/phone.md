### uni.makePhoneCall(OBJECT)
拨打电话。
Dial number.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|phoneNumber|String|是|需要拨打的电话号码|
| phoneNumber| String| Yes| Phone number to call|
|success|Function|否|接口调用成功的回调|
| success| Function| No| Callback for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**示例**
**Example**

```javascript
uni.makePhoneCall({
	phoneNumber: '114' //仅为示例
});
```


注：App端关于电话短信的扩展文档
Note: App-side extended documentation on phone text messages
- Android需要在 manifest.json 增加权限 `<uses-permission android:name="android.permission.CALL_PHONE"/>`
- Android needs to add permission in manifest.json `<uses-permission android:name="android.permission.CALL_PHONE"/>`
- Android不弹出询问框直接拨打电话：[https://ask.dcloud.net.cn/question/4035](https://ask.dcloud.net.cn/question/4035)
- Android does not pop up a question box to make a call directly: [https://ask.dcloud.net.cn/question/4035](https://ask.dcloud.net.cn/question/4035)
- 发送短信：[http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
- Send SMS: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
- Android读取短信验证码：[http://ask.dcloud.net.cn/article/676](http://ask.dcloud.net.cn/article/676)
- Android reads SMS verification code: [http://ask.dcloud.net.cn/article/676](http://ask.dcloud.net.cn/article/676)
- Android遍历读取短信：[https://ask.dcloud.net.cn/article/12934](https://ask.dcloud.net.cn/article/12934)
- Android traverse to read SMS: [https://ask.dcloud.net.cn/article/12934](https://ask.dcloud.net.cn/article/12934)
注意需要赋予相关权限。
Note that you need to grant relevant permissions.
- 钉钉小程序端拨打电话，详见[https://open.dingtalk.com/document/orgapp-client/call-menu](https://open.dingtalk.com/document/orgapp-client/call-menu)
- Make a call from the DingTalk applet, see [https://open.dingtalk.com/document/orgapp-client/call-menu](https://open.dingtalk.com/document/orgapp-client/call -menu)

