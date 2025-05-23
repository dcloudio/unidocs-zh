## uni.canIUse(String)
判断应用的 API，回调，参数，组件等是否在当前版本可用。

平台差异说明

|App|HarmonyOS Next|Web|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|HBuilder 4.23|√ (uni-app 3.4.13+)|√|√|√|√|√|√|√|

**String 参数说明**

使用 ``${API}.${method}.${param}.${options}`` 或者 ``${component}.${attribute}.${option}`` 方式来调用，例如：

- ``${API}`` 代表 API 名字
- ``${method}`` 代表调用方式，有效值为return, success, object, callback
- ``${param}`` 代表参数或者返回值
- ``${options}`` 代表参数的可选值
- ``${component}`` 代表组件名字
- ``${attribute}`` 代表组件属性
- ``${option}`` 代表组件属性的可选值

**示例**

```javascript
uni.canIUse('getSystemInfoSync.return.screenWidth');
uni.canIUse('getSystemInfo.success.screenWidth');
uni.canIUse('showToast.object.image');
uni.canIUse('request.object.method.GET');

uni.canIUse('live-player');
uni.canIUse('text.selectable');
uni.canIUse('button.open-type.contact');
```

**Tips**
- App、web 端暂不支持 ``${API}.${method}.${param}.${options}`` 方式调用，只支持 ``${API}``
- App、Web 端部分 API 实际未实现，具体结果以 API 页面实现表格为准