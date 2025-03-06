实人认证提供核验终端操作者的真实身份，包含活体检测和人脸对比等生物识别技术，可快速校验自然人的真实身份。

- App平台端详细文档需另见：[业务介绍](https://doc.dcloud.net.cn/uniCloud/frv/intro.html)、[开发指南](https://doc.dcloud.net.cn/uniCloud/frv/dev.html)
- 微信小程序端业务开发流程，请参考[微信人脸核身接口能力](https://developers.weixin.qq.com/community/business/doc/000442d352c1202bd498ecb105c00d)
- App HarmonyOS Next 上运行时暂时不支持将 `工程根目录->build-profile.json5->app.products.buildOption.strictMode.caseSensitiveCheck` 配置为 `true`


## uni.getFacialRecognitionMetaInfo()

uni.getFacialRecognitionMetaInfo是客户端API，获取实人认证设备信息，用于uniCloud云函数[getCertifyId](https://doc.dcloud.net.cn/uniCloud/frv/dev.html#get-certify-id)获取certifyId。

App端API规范参考：[详情](https://doc.dcloud.net.cn/uniCloud/frv/dev.html#get-meta-info)

**平台说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.7.4+）|x|x|x|x|x|x|x|x|x|

<!-- UNIAPPAPIJSON.getFacialRecognitionMetaInfo.compatibility -->

## uni.startFacialRecognitionVerify(OBJECT)
实人认证

uni.startFacialRecognitionVerify是客户端API，在App端打开刷脸认证界面。

App端API规范参考：[详情](https://doc.dcloud.net.cn/uniCloud/frv/dev.html#start-frv)

**平台说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.7.4+）|x|√|x|x|x|x|x|x|x|

<!-- UNIAPPAPIJSON.startFacialRecognitionVerify.compatibility -->
