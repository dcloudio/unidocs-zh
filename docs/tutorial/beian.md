## 域名备案

> 购买域名，委托代理备案服务等[点此前往](https://market.aliyun.com/agents/yscdcloud#J_3368608030%5D)

需要进行域名备案的场景：
- 云函数绑定自定义域名
- 发布H5站点
- App备案：App备案需要填写App后端服务器域名，且该域名需提前备案
- 开通扩展存储

如果你有自己的云服务器，则按照云厂商的备案指引，自助备案即可。

云厂商为满足管局要求，进行域名备案时，会要求关联有固定IP的服务器。而Serverless是按需启动的云函数，没有固定IP，在域名备案时就会比较尴尬。

为帮助广大Serverless开发者，DCloud联合支付宝云，推出了[备案码业务](https://doc.dcloud.net.cn/uniCloud/price.html#备案码)，你只需要通过支付宝云开通服务空间，且消费少量金额，即可获赠一个备案码，通过该备案码，你就可以在[阿里云备案系统](https://beian.aliyun.com/)快速完成域名备案。

**uniCloud域名备案：**
- 如果你已经有备案过的域名，直接解析过来即可。
- 如果你要新注册域名，前往[开发者商店](https://market.aliyun.com/agents/yscdcloud)购买，同时域名如果想绑定空间，需要先进行域名备案。
  - 若域名需要绑定在阿里云空间或支付宝云空间，则去阿里云官网备案，备案时需要准备一个备案码，可以通过上方所述获取支付宝云[备案码](https://doc.dcloud.net.cn/uniCloud/price.html#备案码) 。
  - 如果域名绑定在腾讯云空间，则只能在腾讯云买一台最便宜的服务器来备案。



*注意：支付宝云的备案码，仅限阿里云备案系统使用。*

关于支付宝云的备案码问题，欢迎扫码加入官方钉钉交流群：

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloud/1699427250281.png" width="300" />





## App备案

各大云厂商均已提供显著的App备案入口及详细的App备案教程，选择自己App后端服务所在的云厂商，按照操作指引提交相关资料即可。


**APP备案流程**


> 注意：**APP备案的前提是先进行域名备案**，关于域名备案，请参考上一章节。
> 
> App备案需要填写App后端服务器域名，该域名持有人需和App备案主体保持一致。


1. 前往[阿里云官网APP备案](https://wanwang.aliyun.com/qualificationrec/bazszl)
2. 填写相关信息以及备案码，其中域名填写你自己的域名(即使你的域名没在APP内使用也可以,但必须是跟APP同一个主体)，不需要填写uniCloud相关的域名
3. 提交等待审核通过


参考：
- [阿里云：App备案快速入门](https://wanwang.aliyun.com/qualificationrec/bazszl)
- [腾讯云：如何快速备案您的网站或App](https://cloud.tencent.com/document/product/243/39038)


> 若您不熟悉App备案，需要技术指导、加急办理或三方代办服务，可到服务市场寻求帮助，[点此前往](https://market.aliyun.com/agents/yscdcloud#J_3668019490)

## 小程序备案

开发者自行到各家小程序管理控制台上传相关信息，即可完成，不涉及域名及固定IP等要素。

**参考资料：**

- [微信小程序备案操作指引](https://developers.weixin.qq.com/miniprogram/product/record/record_guidelines.html)
- [支付宝小程序备案操作指引](https://opendocs.alipay.com/mini/0apy22?pathHash=2cd5467d)
- [抖音小程序ICP备案指引](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/operation/settle/ICPFiling/ICPintroduce)
- [百度小程序备案指引](https://smartprogram.baidu.com/docs/introduction/register_filings/)
- [京东小程序备案流程](https://mp-docs.jd.com/doc/operation/beian/2300)
- [快手小程序备案流程](https://mp.kuaishou.com/docs/operate/specification/icp/guide.html)

> 若您不熟悉小程序备案流程，需要技术指导、加急办理或三方代办服务，可到服务市场寻求帮助，[点此前往](https://market.aliyun.com/agents/yscdcloud#J_3668019490)

## FAQ

- Q：APP备案如何获取公钥、签名MD5等特征信息？
- A：参考[App特征信息的获取方法](https://help.aliyun.com/zh/icp-filing/fill-in-app-feature-information)或使用[App解析包工具](https://www.yimenapp.com/developer/cert_analyse_upload.cshtml)。
