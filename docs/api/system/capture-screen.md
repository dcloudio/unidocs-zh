### uni.onUserCaptureScreen(CALLBACK)

监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。
 
**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|

> 在 App 平台本 API 是 [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html)，需下载插件：[uni-usercapturescreen](https://ext.dcloud.net.cn/plugin?name=uni-usercapturescreen)
> 需要HBuilder X 3.7.7+版本

**CALLBACK返回参数：**

| 属性	|	类型		| 说明								|
| --	| --		| --								|
| path	| string	| 截屏文件路径，仅App-Android平台支持	|

**代码示例**

```javascript
uni.onUserCaptureScreen(function() {
    console.log('用户截屏了')
});
```

**注意**

Android的截屏监听原理是监听相册中截屏目录的文件新增，需赋予App本地文件读取权限。

### uni.offUserCaptureScreen(function callback)

用户主动截屏事件。取消事件监听。


**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|x|√|√|

> 在 App 平台本 API 是 [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html)，需下载插件：[uni-usercapturescreen](https://ext.dcloud.net.cn/plugin?name=uni-usercapturescreen)
> 需要HBuilder X 3.7.7+版本

**参数**

|属性	|	类型|说明|
|--	|--	|--	|
|回调函数|	Function|用户主动截屏事件的回调函数|


### uni.setUserCaptureScreen(OBJECT)

开启/关闭防截屏


**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|x|x|x|x|x|x|x|

> 在 App 平台本 API 是 [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html)，需下载插件：[uni-usercapturescreen](https://ext.dcloud.net.cn/plugin?name=uni-usercapturescreen)
> 需要HBuilder X 3.7.7+版本

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|enable|Boolean|是|是否允许用户截屏，ture: 允许用户截屏, false: 不允许用户截屏，防止用户截屏到应用页面内容|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**返回参数说明**

|参数|类型|说明|
|:-|:-|:-|
|errCode|Number|调用结果|
|errMsg|String|调用结果描述|
|errSubject|String|调用模块|

**注意**

+ iOS平台该API在iOS 13.0及以上系统支持,在iOS 13.0以下系统调用该API会返回12001:system not support的错误。
+ 因iOS 15.1系统bug，在该系统上调用此API会返回12010:system internal error的错误。
+ Android平台在某些页面暂不支持（如：图片选择、图片预览、一键登录等页面以及App原生插件内部原生页面）。


**代码示例**

```javascript
uni.setUserCaptureScreen({
    enable: false,
    success: (res) => {
        console.log("setUserCaptureScreen success: " + JSON.stringify(res));
    },
    fail: (res) => {
        console.log("setUserCaptureScreen fail: " + JSON.stringify(res));
    },
    complete: (res) => {
        console.log("setUserCaptureScreen complete: " + JSON.stringify(res));
    }
});
```

### 错误码

|错误码	|错误信息					|说明																|
|---	|----						|------															|
|12001	|system not support			|当前系统不支持相关能力												|
|12010	|system internal error		|系统错误 														|