# uniMP激励视频广告

HBuilderX 3.7.13+支持

## 简介

通过App打开微信小程序播放广告

利用 uni-AD 多层调度策略动态调整渠道，在设备无广告时自动调整为其他广告渠道以增加广告填充率


## 打开方式

1. 通过 App 接入微信SDK并打开微信小程序播放广告
2. 通过 Scheme 打开微信小程序播放广告

SDK和Scheme的差异

1. SDK 跳转微信小程序的过程中用户几乎无感，且支持从微信直接返回App
2. Scheme 跳转微信小程序前需要用户确认后打开，不支持从微信直接返回App，需要用户切换应用返回


## 开通流程

### SDK方式

1. 登录微信开放平台 [https://open.weixin.qq.com/](https://open.weixin.qq.com/)
2. 在微信开放平台 `创建移动应用`，按照提示填写相关信息至完成。创建成功后会生成 `AppID`
3. 确认在微信开放平台创建的应用状态为`已上架`
4. 登录 [uni-AD 广告联盟](https://uniad.dcloud.net.cn)，在App增强广告项下申请

提示：已接入微信分享、登录、支付、任意微信API可跳过上面 `1-3` 步骤


### Scheme方式

1. 登录 [uni-AD 广告联盟](https://uniad.dcloud.net.cn)，在App增强广告项下申请

## 打包注意事项

- HBuilderX 3.7.13+
- 在项目的 manifest.json 界面配置，App模块配置 -> uniAd -> 勾选 `uniMP激励视频广告`

注意：首次开启此功能需要整包更新，不支持WGT热更新
