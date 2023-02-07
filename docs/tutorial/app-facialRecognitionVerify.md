使用实人认证功能需要在项目manifest.json的"App模块配置"中勾选"FacialRecognitionVerify(实人认证)"
![](https://native-res.dcloud.net.cn/images/uniapp/facialRecognitionVerify/68C3B72D-E281-4ED3-9B34-91AE9BB1B9F6.png)

## 调起实人认证
```js
uni.startFacialRecognitionVerify(Object params)
```

**params参数说明**

| 参数						| 类型	| 是否必传	| 支持平台	|描述															|
|---						|---	|---		|---		|---															|
| certifyId					| String| 是		| 安卓、iOS	|认证流水号，由服务端根据接入的业务模式调用对应的初始化接口获取	|
| progressBarColor			| String| 否		| 安卓、iOS	| 刷脸圈的颜色													|
| activityIndicatorColor	| String| 否		| iOS		| 网络等待菊花颜色												|
| progressBarBackgroundColor| String| 否		| 安卓		| 刷脸圈的背景颜色												|
| quitAlertTitle			| String| 否		| 安卓		| 刷脸页退出对话框的标题										|
| quitAlertMessage			| String| 否		| 安卓		| 刷脸页退出对话框的内容										|
| timeoutAlertTitle			| String| 否		| 安卓		| 刷脸页超时对话框的标题										|
| timeoutAlertMessage		| String| 否		| 安卓		| 刷脸页超时对话框的内容										|
| failAlertTitle			| String| 否		| 安卓		| 刷脸页错误提示对话框的标题									|
| failAlertMessage			| String| 否		| 安卓		| 刷脸页错误提示对话框的内容									|
| title						| String| 否		| 安卓		| 刷脸圈的颜色													|
| success					| String| 否		| 安卓、iOS	| 成功回调														|
| fail						| String| 否		| 安卓、iOS	| 失败回调														|
| complete					| String| 否		| 安卓、iOS	| 完成回调														|


**注意**  
HBuilderX3.7.1+新增支持，Android平台要求Android5（API Leavel 21）及以上系统，iOS平台要求iOS10及以上系统  
颜色字符串格式为“#RRGGBB”，RRGGBB为十六进制字符串，如红色("#FF0000")      
获取certifyId参考[开发指南](https://uniapp.dcloud.net.cn/uniCloud/frv/dev.html)  
详细API参考[实人认证API](https://uniapp.dcloud.net.cn/api/plugins/facialRecognitionVerify.html#startfacialrecognitionverify)

## 设置自定义UI资源(仅iOS)
iOS不支持通过参数的方式修改刷脸页的提示文案，但可以通过自定义bundle文件的方式修改提示内容以及国际化信息

[APBToygerFacade.bundle文件下载](https://native-res.dcloud.net.cn/uni-app/file/APBToygerFacade.zip)

首先需要下载APBToygerFacade.bundle文件，可通过修改APBToygerFacade.bundle中的内容自定义多语言文案，如 zh-Hans.strings 代表中文文案，en.strings 代表英文文案，内容格式为 "APBToygerFacade:xxxA"="xxxB"，xxxA 为目标修改文案，xxxB 为修改后的文案，示例内容如下：
```
"APBToygerFacade:xxxA"="xxxB";
"APBToygerFacade:当前设备不支持刷脸"="当前设备不支持刷脸";
"APBToygerFacade:拿起手机眨眨眼"="拿起手机，眨眨眼";
"APBToygerFacade:再试一次"="再试一次";
"APBToygerFacade:无法启动相机"="无法打开相机";
"APBToygerFacade:网络不给力"="网络异常";
```

此处文案修改后需要完整测试回归 UI 以及文案变化影响，以免影响用户体验。修改后的bundle文件配到项目根目录的 nativeResources -> ios -> Resources 路径下后打包即可，详情参照[iOS原生应用配置文件和资源](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html) 





