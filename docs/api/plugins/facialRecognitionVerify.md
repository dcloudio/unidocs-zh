实人认证提供核验终端操作者的真实身份，包含活体检测和人脸对比等生物识别技术，可快速校验自然人的真实身份。

App平台端详细文档需另见：[业务介绍](/uniCloud/frv/intro.md)、[开发指南](/uniCloud/frv/dev.md)  
微信小程序端业务开发流程，请参考[微信人脸核身接口能力](https://developers.weixin.qq.com/community/business/doc/000442d352c1202bd498ecb105c00d)  


### uni.getFacialRecognitionMetaInfo()  

uni.getFacialRecognitionMetaInfo是客户端API，获取实人认证设备信息，用于uniCloud云函数[getCertifyId](https://uniapp.dcloud.net.cn/uniCloud/frv/dev.html#get-certify-id)获取certifyId。

App端API规范参考：[详情](/uniCloud/frv/dev.md#get-meta-info) 

**平台说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.7.4+）|x|x|x|x|x|x|x|x|

### uni.startFacialRecognitionVerify(OBJECT)  
实人认证  
real person authentication

uni.startFacialRecognitionVerify是客户端API，在App端打开刷脸认证界面。  

App端API规范参考：[详情](/uniCloud/frv/dev.md#start-frv)  

**平台说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.7.4+）|x|√|x|x|x|x|x|x|

