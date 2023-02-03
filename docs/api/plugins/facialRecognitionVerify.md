### uni.startFacialRecognitionVerify(OBJECT)  
实人认证  

uni.startFacialRecognitionVerify是客户端API，App端使用实人认证功能需调用云端API获取certifyId，参考[开发指南](https://uniapp.dcloud.net.cn/uniCloud/frv/dev.html)

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.7.1+）|x|x|x|x|x|x|x|x|

**注意**  
* HBuilderX3.7.1+新增支持，App端需在“App模块配置”中勾选“FacialRecognitionVerify(实人认证)”  
* App端使用蚂蚁金服人脸认证SDK，需在隐私政策的三方SDK中添加实人认证功能描述，参考[详情](https://ask.dcloud.net.cn/article/39484#FacialRecognitionVerify)
* App-Android平台要求Android5（API Leavel 21）及以上系统  
* App-iOS平台要求iOS10及以上系统  
* 微信小程序端请参考[微信人脸核身接口能力](https://developers.weixin.qq.com/community/business/doc/000442d352c1202bd498ecb105c00d)  

#### OBJECT参数说明  

| 参数 | 类型 | 是否必传 | 支持平台 |描述 | 
|---|---|---|---|---|
| certifyId | String | 是 | App |认证流水号，由服务端根据接入的业务模式调用对应的初始化接口获取  |
| progressBarColor | String | 否  | App | 刷脸圈的颜色 |
| activityIndicatorColor | String | 否  | App-iOS | 网络等待菊花颜色 |
| progressBarBackgroundColor | String | 否  | App-Android | 刷脸圈的背景颜色 |
| quitAlertTitle | String | 否  | App-Android | 刷脸页退出对话框的标题 |
| quitAlertMessage | String | 否  | App-Android | 刷脸页退出对话框的内容 |
| timeoutAlertTitle | String | 否  | App-Android | 刷脸页超时对话框的标题 |
| timeoutAlertMessage | String | 否  | App-Android | 刷脸页超时对话框的内容 |
| failAlertTitle | String | 否  | App-Android | 刷脸页错误提示对话框的标题 |
| failAlertMessage | String | 否  | App-Android | 刷脸页错误提示对话框的内容 |
| title | String | 否  | App-Android | 刷脸圈的颜色 |
| success | Function | 否  | App | 成功回调 |
| fail | Function | 否  | App | 失败回调 |
| complete | Function | 否  | App | 完成回调 |

注意: 颜色字符串格式为“#RRGGBB”，RRGGBB为十六进制字符串，如红色("#FF0000")  

#### CALLBACK返回值

|参数|描述|
|---|---|
|errSubject	| 模块名称(uni-facialRecognitionVerify)|
|errCode|错误码(详情见下表)|
|errMsg|错误信息(详情见下表)|
|cause|SDK返回的原始数据 (certifyId不为空时返回)|

#### cause  

|参数|描述|
|---|---|
|code	| 原始错误码|
|message|原始错误信息|

#### 错误码  

|错误码|信息|描述|
|---|---|---|
|0|刷脸完成|实际结果需要通过服务端查询接口|
|10001|certifyId 不能为空 |参数 certifyId 为空|
|10010| 刷脸异常|刷脸异常,具体原因详见cause|
|10011|验证中断 |如用户主动退出、验证超时等,具体原因详见cause|
|10012|网络异常 |网络异常 |
|10013|刷脸验证失败 |实际结果需要通过服务端查询结果|
|10020|设备设置时间异常 |设备设置时间异常，仅iOS返回|

