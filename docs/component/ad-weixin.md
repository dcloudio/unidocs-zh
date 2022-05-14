## uniAD支持微信小程序广告

3.4.10+ 支持


## 信息流广告(Banner)

微信小程序平台支持信息流(Banner)广告组件 `<ad unit-id=""></ad>`，由微信提供

uniAD 支持信息流(Banner)广告组件 `<ad adpid=""></ad>`，由uniAD提供

3.4.10 之前的版本`ad`组件运行到微信小程序使用微信提供的广告组件

3.4.10+ 以后的版本调整如下

1. 组件仅设置 `unit-id`，使用微信提供的ad组件，逻辑不变
2. 组件设置了 `adpid` 属性，被编译为 `uniad`，见下文的介绍
3. 组件设置了 `adpid` 和 `unit-id` 属性，被编译为 `uniad`，见下文的介绍

## uniad组件介绍

`uniad`是`uni-app`框架的内置的组件，`uniad`组件同时支持`uniAD`广告和微信原生广告，`adpid`优先级高于`unit-id`，如果没有开通`uniad`或网络失败则切换为微信的广告，这个过程会有3秒的延时

`uniad`组件依赖uniAD提供的微信小程序插件和腾讯提供的珊瑚广告插件

如果想在微信上仅使用微信的广告，App 或 Web 使用 uniAD 可使用条件编译

条件编译示例

```html
<!-- #ifdef MP-WEIXIN -->
<ad unit-id=""></ad>
<!-- #endif -->
<!-- #ifndef MP-WEIXIN -->
<ad adpid=""></ad>
<!-- #endif -->
```



新增支持激励视频广告和插屏广告

## 微信小程序激励视频广告

文档地址：[https://uniapp.dcloud.io/component/ad-rewarded-video](https://uniapp.dcloud.io/component/ad-rewarded-video)

## 微信小程序插屏广告

文档地址：[https://uniapp.dcloud.io/component/ad-interstitial](https://uniapp.dcloud.io/component/ad-interstitial)
