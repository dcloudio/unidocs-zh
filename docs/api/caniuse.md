
### uni.canIUse(String)
判断应用的 API，回调，参数，组件等是否在当前版本可用。
Determine whether the application's API, callbacks, parameters, components, etc. are available in the current version.

平台差异说明
Platform Difference Description

|App|Web|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√ (uni-app 3.4.13+)|√|√|√|√|√|

**String 参数说明**
**String parameter description**

使用 ``${API}.${method}.${param}.${options}`` 或者 ``${component}.${attribute}.${option}`` 方式来调用，例如：
Use ``${API}.${method}.${param}.${options}`` or ``${component}.${attribute}.${option}`` to call, for example:

- ``${API}`` 代表 API 名字
- ``${API}`` represents the API name
- ``${method}`` 代表调用方式，有效值为return, success, object, callback
- ``${method}`` represents the calling method, valid values are return, success, object, callback
- ``${param}`` 代表参数或者返回值
- ``${param}`` represents a parameter or return value
- ``${options}`` 代表参数的可选值
- ``${options}`` represents the optional value of the parameter
- ``${component}`` 代表组件名字
- ``${component}`` represents the component name
- ``${attribute}`` 代表组件属性
- ``${attribute}`` represents component attributes
- ``${option}`` 代表组件属性的可选值
- ``${option}`` represents the optional value of the component property

**示例**
**Example**

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
- App and web terminal do not support ``${API}.${method}.${param}.${options}`` call, only ``${API}``