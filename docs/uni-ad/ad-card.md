## 卡券广告

### 简介

广告激励场景。

### 适用场景

![](https://web-ext-storage.dcloud.net.cn/uniad/ad-card-01.png)

![](https://web-ext-storage.dcloud.net.cn/uniad/ad-card-02.png)

![](https://web-ext-storage.dcloud.net.cn/uniad/ad-card-03.png)

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|3.4.8|x|x|x|x|x|x|x|x|


**开通配置广告**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)


**属性说明**

|属性名|类型|默认值|说明|平台差异|
|:-|:-|:-|:-|:-|
|adpid|String||uni-ad 广告位id，在[uni-ad官网](https://uniad.dcloud.net.cn/)申请广告位|微信小程序3.4.8+|
|@load|EventHandle||广告加载成功的回调||
|@error|EventHandle||广告加载失败的回调，event.detail = {errCode: }||
|@close|EventHandle||广告关闭的回调||


**接入代码**

```html
<ad adpid="" />
```



**错误码**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/uni-ad/ad-error-code.html)
