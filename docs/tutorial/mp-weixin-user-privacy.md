## 微信小程序隐私协议开发指南


涉及处理用户个人信息的小程序开发者，需通过弹窗等明显方式提示用户阅读隐私政策等收集使用规则。

为规范开发者的用户个人信息处理行为，保障用户合法权益，微信要求开发者主动同步微信当前用户已阅读并同意小程序的隐私政策等收集使用规则，方可调用微信提供的隐私接口。


**2023.08.22更新**

以下指南中涉及的 [getPrivacySetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/privacy/wx.getPrivacySetting.html)、[onNeedPrivacyAuthorization](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/privacy/wx.onNeedPrivacyAuthorization.html)、[requirePrivacyAuthorize](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/privacy/wx.requirePrivacyAuthorize.html) 等接口目前可以正常接入调试。调试说明：

- 在 2023年9月15号之前，在 app.json 中配置 `__usePrivacyCheck__: true` 后，会启用隐私相关功能，如果不配置或者配置为 false 则不会启用。

- 在 2023年9月15号之后，不论 app.json 中是否有配置 `__usePrivacyCheck__`，隐私相关功能都会启用。

> 从基础库 2.32.3 开始支持，低于 2.32.3 版本的基础库未集成隐私相关功能，也不会拦截隐私接口调用。


**2023.09.14更新**

隐私相关功能启用时间延期至 2023年10月17日。

- 在 2023年10月17日之前，在 app.json 中配置 __usePrivacyCheck__: true 后，会启用隐私相关功能，如果不配置或者配置为 false 则不会启用。

- 在 2023年10月17日之后，不论 app.json 中是否有配置 __usePrivacyCheck__，隐私相关功能都会启用。

新增官方隐私授权弹窗功能，相关功能参考[小程序隐私协议开发指南](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html)。


在uni-app编译后的 app.json 文件中配置：`__usePrivacyCheck__: true`，启用隐私相关功能。

