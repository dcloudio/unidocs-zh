### uni.startFacialRecognitionVerify(OBJECT)  
实人认证  
real person authentication

uni.startFacialRecognitionVerify是客户端API，App端使用实人认证功能需调用云端API获取certifyId，参考[开发指南](https://uniapp.dcloud.net.cn/uniCloud/frv/dev.html)
uni.startFacialRecognitionVerify is a client-side API. To use the real-person authentication function on the App side, you need to call the cloud API to obtain the certifyId. Refer to [Development Guide](https://uniapp.dcloud.net.cn/uniCloud/frv/dev.html)

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.7.1+）|x|x|x|x|x|x|x|x|

**注意**  
**Notice**  
* HBuilderX3.7.1+新增支持，App端需在“App模块配置”中勾选“FacialRecognitionVerify(实人认证)”  
* HBuilderX3.7.1+ added support, the App side needs to check "FacialRecognitionVerify (real person authentication)" in the "App Module Configuration"
* App端使用蚂蚁金服人脸认证SDK，需在隐私政策的三方SDK中添加实人认证功能描述，参考[详情](https://ask.dcloud.net.cn/article/39484#FacialRecognitionVerify)
* When using the Ant Financial Face Authentication SDK on the app side, you need to add a description of the real person authentication function in the three-party SDK of the privacy policy, refer to [Details](https://ask.dcloud.net.cn/article/39484#FacialRecognitionVerify)
* App-Android平台要求Android5（API Leavel 21）及以上系统  
* App-Android platform requires Android5 (API Level 21) and above
* App-iOS平台要求iOS10及以上系统  
* App-iOS platform requires iOS10 and above
* 微信小程序端请参考[微信人脸核身接口能力](https://developers.weixin.qq.com/community/business/doc/000442d352c1202bd498ecb105c00d)  
* For the WeChat MiniApp, please refer to [WeChat face core body interface capability](https://developers.weixin.qq.com/community/business/doc/000442d352c1202bd498ecb105c00d)

#### OBJECT参数说明  
#### OBJECT parameter description

| 参数 | 类型 | 是否必传 | 支持平台 |描述 | 
| Parameter | Type | Required | Supported Platforms |Description |
|---|---|---|---|---|
| certifyId | String | 是 | App |认证流水号，由服务端根据接入的业务模式调用对应的初始化接口获取  |
| certifyId | String | Yes | App |Certification serial number, which is obtained by the server calling the corresponding initialization interface according to the connected business model |
| progressBarColor | String | 否  | App | 刷脸圈的颜色 |
| progressBarColor | String | No | App | The color of the face circle |
| activityIndicatorColor | String | 否  | App-iOS | 网络等待菊花颜色 |
| activityIndicatorColor | String | No | App-iOS | Network waiting chrysanthemum color |
| progressBarBackgroundColor | String | 否  | App-Android | 刷脸圈的背景颜色 |
| progressBarBackgroundColor | String | No | App-Android | The background color of the face bar |
| quitAlertTitle | String | 否  | App-Android | 刷脸页退出对话框的标题 |
| quitAlertTitle | String | No | App-Android | The title of the exit dialog box on the face swiping page |
| quitAlertMessage | String | 否  | App-Android | 刷脸页退出对话框的内容 |
| quitAlertMessage | String | No | App-Android | The content of the exit dialog box for swiping the face page |
| timeoutAlertTitle | String | 否  | App-Android | 刷脸页超时对话框的标题 |
| timeoutAlertTitle | String | No | App-Android | The title of the timeout dialog box for face swiping pages |
| timeoutAlertMessage | String | 否  | App-Android | 刷脸页超时对话框的内容 |
| timeoutAlertMessage | String | No | App-Android | The content of the timeout dialog box for face swiping pages |
| failAlertTitle | String | 否  | App-Android | 刷脸页错误提示对话框的标题 |
| failAlertTitle | String | No | App-Android | The title of the error prompt dialog box on the facial recognition page |
| failAlertMessage | String | 否  | App-Android | 刷脸页错误提示对话框的内容 |
| failAlertMessage | String | No | App-Android | The content of the error prompt dialog box on the facial recognition page |
| title | String | 否  | App-Android | 刷脸圈的标题 |
| title | String | No | App-Android |
| success | Function | 否  | App | 成功回调 |
| success | Function | No | App | Success callback |
| fail | Function | 否  | App | 失败回调 |
| fail | Function | No | App | Failure callback |
| complete | Function | 否  | App | 完成回调 |
| complete | Function | No | App | Complete callback |

注意: 颜色字符串格式为“#RRGGBB”，RRGGBB为十六进制字符串，如红色("#FF0000")  
Note: The color string format is "#RRGGBB", RRGGBB is a hexadecimal string, such as red ("#FF0000")

#### CALLBACK返回值
#### CALLBACK return value

|参数|描述|
|Parameters|Description|
|---|---|
|errSubject	| 模块名称(uni-facialRecognitionVerify)|
| errSubject | module name (uni-facialRecognitionVerify)|
|errCode|错误码(详情见下表)|
| errCode|Error code (see the table below for details)|
|errMsg|错误信息(详情见下表)|
| errMsg|Error message (see the table below for details)|
|cause|SDK返回的原始数据 (certifyId不为空时返回)|
| cause| Original data returned by SDK (returned when certifyId is not empty)|

#### cause  

|参数|描述|
|Parameters|Description|
|---|---|
|code	| 原始错误码|
| code | original error code|
|message|原始错误信息|
| message|Original error message|

#### 错误码  
#### error code  

|错误码|信息|描述|
|Error code|Information|Description|
|---|---|---|
|0|刷脸完成|实际结果需要通过服务端查询接口|
| 0|Face brushing completed|The actual result needs to be queried through the server-side interface|
|10001|certifyId 不能为空 |参数 certifyId 为空|
| 10001| certifyId cannot be empty |parameter certifyId is empty|
|10010| 刷脸异常|刷脸异常,具体原因详见cause|
| 10010| Abnormal facial recognition | Abnormal facial recognition, see cause for details |
|10011|验证中断 |如用户主动退出、验证超时等,具体原因详见cause|
| 10011|Authentication Interrupted |If the user voluntarily logs out, verification timeout, etc., see cause for details |
|10012|网络异常 |网络异常 |
| 10012|Network exception |Network exception |
|10013|刷脸验证失败 |实际结果需要通过服务端查询结果|
| 10013|Face verification failed |The actual result needs to be checked by the server|
|10020|设备设置时间异常 |设备设置时间异常，仅iOS返回|
| 10020|The device setting time is abnormal |The device setting time is abnormal, only returned by iOS|

