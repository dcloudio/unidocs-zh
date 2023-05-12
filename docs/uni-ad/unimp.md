# uniMP激励视频广告

## 简介

通过App打开微信小程序播放激励视频广告

为了给开发者提供更高价格的广告，uni-ad 推出了高阶游戏广告预算。目前这种广告主预算只支持激励视频广告位

利用 uni-ad 多层调度策略动态调整渠道，在设备无广告时自动调整为其他广告渠道以增加广告填充率

<video controls src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-ad/uni-ad-unimp.mp4" style="max-width: 100%; max-height: 70vh;"></video>

## 开通流程

`uniMP激励视频广告` 支持已上架微信开放平台的应用和未上架的应用:

1. 已上架微信开放平台的应用需要填写微信开放平台应用的 AppID，iOS平台需要填写通用链接
2. 未上架微信开放平台的应用不需要填写微信开放平台应用的 AppID 和 iOS通用链接，且不支持以下功能
  - 跳转微信打开广告前有微信的二次确认框。
  - 不支持从微信直接返回App，用户需要手动返回。

上架微信开放平台的流程如下:

1. 确认应用已上架国内的任意应用市场(上架前需要提供软著), 微信开放平台需要已上架的应用下载地址
2. 登录微信开放平台 [https://open.weixin.qq.com/](https://open.weixin.qq.com/)
3. 在微信开放平台 `创建移动应用`，按照提示填写相关信息至完成。创建成功后会生成 `AppID`
4. 确认在微信开放平台创建的应用状态为 `已上架`

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-ad/uni-ad-unimp-open-weixin-status.png)


开通步骤

1. 登录 [uni-ad 广告联盟](https://uniad.dcloud.net.cn)，找到广告应用设置并点击 App广告 -> uni-ad自营 -> 申请开通

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-ad/uni-ad-unimp-web-console-on.png)

- iOS 平台需要配置通用链接，配置通用链接后需要重新打包, [详情](https://uniapp.dcloud.net.cn/api/plugins/universal-links.html)

2. 在广告位列表中点击新建广告位

3. 必须开启[服务器回调](https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html#callback)，且响应正确的格式


提示
- 通过监听广告组件的`@close`事件返回的 `isEnded` 属性通知服务器用户是否看完广告，这种做法是不安全的，因为可以被攻击者模拟请求发送到服务器，造成没有看广告的假象。uniMP激励视频广告不在支持此方式，仅支持安全的[服务器回调](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#callback)验证


服务器回调响应数据格式

返回 JSON 对象，且包含 `isValid: true`

```json
{
  "isValid": true
}
```

## 5+ App

5+ App 支持 `uniMP激励视频广告`，开通流程和 `uni-app` 一致，同时也需要开启服务器回调，开通服务器回调时填写业务服务器HTTP地址即可


## Q&A

Q: 为什么通过uni-ad接入跳转微信而不是开发者自行接入

A: uni-ad 多层调度策略动态调整渠道，在检测微信无广告时自动在一定时间整为其他广告渠道，不在跳转到微信，提示用户体验及增加广告填充率


## 打包注意事项

- HBuilderX 3.7.13+
- 在项目的 manifest.json 界面配置，App模块配置 -> uni-ad -> 勾选 `uniMP激励视频广告`

注意：`3.7.12` 之前的版本首次开启此功能需要整包更新，`3.7.12`之后版本支持WGT热更新
