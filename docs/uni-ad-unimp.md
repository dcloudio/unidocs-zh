# uniMP激励视频广告

## 简介

通过App打开微信小程序播放激励视频广告

为了给开发者提供更高价格的广告，uniAD 推出了高阶游戏广告预算。目前这种广告主预算只支持激励视频广告位

利用 uni-AD 多层调度策略动态调整渠道，在设备无广告时自动调整为其他广告渠道以增加广告填充率

<video controls src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-ad/uni-ad-unimp.mp4" style="max-width: 100%;"></video>

## 开通流程

`uniMP激励视频广告` 属于增强广告类型，需要先开启增强广告

`uniMP激励视频广告` 支持已上架微信开放平台的应用和未上架的应用，两者差异点如下

1. 未上架微信开放平台的应用跳转微信打开广告前有微信的二次确认框
2. 不支持从微信直接返回App，用户需要手动返回

满足上架微信开放平台的应用通过下面的流程上架微信开放平台

1. 确认应用已上架国内的任意应用市场(上架前需要提供软著), 微信开放平台需要已上架的应用下载地址
2. 登录微信开放平台 [https://open.weixin.qq.com/](https://open.weixin.qq.com/)
3. 在微信开放平台 `创建移动应用`，按照提示填写相关信息至完成。创建成功后会生成 `AppID`
4. 确认在微信开放平台创建的应用状态为 `已上架`

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-ad/uni-ad-unimp-open-weixin-status.png)


开通步骤

1. 登录 [uni-AD 广告联盟](https://uniad.dcloud.net.cn)，找到广告应用设置并点击 App增强广告(未开通过增强广告的应用开通后可看到此选项) -> 申请开通uniMP激励视频广告

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-ad/uni-ad-unimp-web-console-on.png)

2. 必须开启[服务器回调](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#callback)，且响应正确的格式


提示
- 通过监听广告组件的`@close`事件返回的 `isEnded` 属性通知服务器用户是否看完广告，这种做法是不安全的，因为可以被攻击者模拟请求发送到服务器，造成没有看广告的假象。uniMP激励视频广告不在支持此方式，仅支持安全的[服务器回调](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#callback)验证
- iOS 在uni-AD后台配置通用链接后需要重新打包


服务器回调响应数据格式

返回 JSON 对象，且包含 `isValid: true`

```json
{
  "isValid": true
}
```

## Q&A

Q: 为什么通过uniAD接入跳转微信而不是开发者自行接入

A: uni-AD 多层调度策略动态调整渠道，在检测微信无广告时自动在一定时间整为其他广告渠道，不在跳转到微信，提示用户体验及增加广告填充率


## 打包注意事项

- HBuilderX 3.7.13+
- 在项目的 manifest.json 界面配置，App模块配置 -> uniAd -> 勾选 `uniMP激励视频广告`

注意：`3.7.12` 之前的版本开启此功能需要整包更新，后续支持WGT热更新
