# uniMP激励视频广告

## 简介

通过App打开微信小程序播放广告

利用 uni-AD 多层调度策略动态调整渠道，在设备无广告时自动调整为其他广告渠道以增加广告填充率


## 开通流程

`uniMP激励视频广告` 属于增强广告类型，需要先开启增强广告

1. 确认应用已上架国内的任意应用市场(上架前需要提供软著), 微信开放平台需要已上架的应用下载地址
2. 登录微信开放平台 [https://open.weixin.qq.com/](https://open.weixin.qq.com/)
3. 在微信开放平台 `创建移动应用`，按照提示填写相关信息至完成。创建成功后会生成 `AppID`
4. 确认在微信开放平台创建的应用状态为 `已上架`

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-ad/uni-ad-unimp-open-weixin-status.png)

5. 登录 [uni-AD 广告联盟](https://uniad.dcloud.net.cn)，找到广告应用设置并点击 App增强广告 -> 申请开通uniMP激励视频广告

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-ad/uni-ad-unimp-web-console-on.png)

6. 必须开启[服务器回调](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#callback)，且响应正确的格式


提示
- 不支持通过监听广告组件的`@close`事件返回的 `isEnded` 属性判定用户是否看完广告，需要通过[服务器回调](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#callback)验证
- 已上架微信开放平台的应用可跳过上面 `1-4` 步骤
- iOS 在uni-AD后台配置通用链接后需要重新打包
- 未上架微信开放平台的应用通过 Scheme 跳转微信小程序，差异点如下:
1. 不支持从微信直接返回App，用户需要手动返回


服务器回调响应数据格式

返回 JSON 对象，且包含 `isValid: true`

```json
{
  "isValid": true
}
```


## 打包注意事项

- HBuilderX 3.7.13+
- 在项目的 manifest.json 界面配置，App模块配置 -> uniAd -> 勾选 `uniMP激励视频广告`

注意：`3.7.12` 之前的版本开启此功能需要整包更新，后续支持WGT热更新
