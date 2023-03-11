# uni-pay 2

> 本文档适用于`uni-pay 2.0.0`及以上版本，需 HBuilderX 3.6.5 及以上版本。旧版本文档请访问：[uni-pay 1.x 文档](unipay.md)

## 简介@introduction
## Introduction @introduction

支付，重要的变现手段，但开发复杂。在不同端，对接微信支付、支付宝等渠道，前端后端都要写不少代码。
Payment is an important means of realization, but its development is complicated. At different ends, a lot of code has to be written on the front end and back end to connect to WeChat payment, Alipay and other channels.

涉及金额可不是小事，生成业务订单、获取收银台、发起支付、支付状态查询、支付异步回调、失败处理、发起退款、退款状态查询、支付统计...众多环节，代码量多，出错率高。
The amount involved is not a trivial matter, generating business orders, obtaining the cash register, initiating payment, payment status query, payment asynchronous callback, failure processing, initiating refund, refund status query, payment statistics... many links, a lot of code, and errors High rate.

为什么不能有一个开源的、高质量的项目？即可以避免大家重复开发，又可以安心使用，不担心自己从头写产生Bug。
Why can't there be an open source, high-quality project? It can avoid repeated development, and you can use it with peace of mind, without worrying about writing bugs from scratch.

`uni-pay`应需而生。
`uni-pay` was born out of necessity.

之前`uni-pay 1.x`版本，仅是一个公共模块，它让开发者无需研究支付宝、微信等支付平台的后端开发、无需为它们编写不同代码，拿来即用，屏蔽差异。
The previous `uni-pay 1.x` version is only a public module, which allows developers to use it immediately without studying the back-end development of Alipay, WeChat and other payment platforms, and without writing different codes for them.

但开发者还是需要自己编写前端页面和云函数，还是有一定的开发难度和工作量的，特别对于新手来说，门槛高、易出错。
However, developers still need to write front-end pages and cloud functions by themselves, and there is still a certain degree of difficulty and workload in development. Especially for novices, the threshold is high and error-prone.

`uni-pay 2.0` 起，补充了前端页面和云对象，让开发者开箱即用。
Starting from `uni-pay 2.0`, front-end pages and cloud objects are supplemented, allowing developers to use it out of the box.

**注意：`uni-pay 2` 仍内置了uni-pay公共模块，向下兼容`uni-pay 1.x`，即从`uni-pay 1.x`可以一键升级到`uni-pay 2.x`，且不会对你的老项目造成影响。**
**Note: `uni-pay 2` still has a built-in uni-pay public module, which is backward compatible with `uni-pay 1.x`, that is, one-click upgrade from `uni-pay 1.x` to `uni-pay 2.x`, and will not affect your old projects. **

开发者在项目中引入 `uni-pay` 后，微信支付、支付宝支付等功能无需自己再开发。由于源码的开放性和层次结构清晰，有二次开发需求也很方便调整。
After the developer introduces `uni-pay` into the project, functions such as WeChat payment and Alipay payment do not need to be developed by themselves. Due to the openness and clear hierarchical structure of the source code, it is also very convenient to adjust if there are secondary development needs.

> 插件市场地址：[https://ext.dcloud.net.cn/plugin?name=uni-pay](https://ext.dcloud.net.cn/plugin?name=uni-pay)
> Plug-in market address: [https://ext.dcloud.net.cn/plugin?name=uni-pay](https://ext.dcloud.net.cn/plugin?name=uni-pay)

> 代码仓库地址：[https://gitcode.net/dcloud/uni-pay.git](https://gitcode.net/dcloud/uni-pay.git)

**线上体验地址**
**Online experience address**

注意：线上体验地址用的是阿里云免费版，免费版请求次数有限，如请求失败为正常现象，可直接导入示例项目绑定自己的空间体验。
Note: The online experience address uses the free version of Alibaba Cloud, and the number of requests for the free version is limited. If the request fails, it is normal, and you can directly import the sample project to bind your own space experience.

![](https://web-assets.dcloud.net.cn/unidoc/zh/https___hellounipay.dcloud.net.cn_.png)

`uni-pay` 的功能包括：
The functions of `uni-pay` include:

- 页面
- page
	+ 支付收银台组件（让用户选择付款渠道） [组件详情](#uni-pay-component)
	+ Payment cash register component (let users choose payment channels) [Component Details](#uni-pay-component)
	+ 支付成功结果页（可配置uni-ad广告，增加开发者收益）[uni-AD 广告联盟](https://uniad.dcloud.net.cn/login)
	+ Successful payment result page (uni-ad advertisement can be configured to increase developer revenue) [uni-AD advertising network](https://uniad.dcloud.net.cn/login)

- 云对象（[uni-pay-co](#uni-pay-co)）
- Cloud object ([uni-pay-co](#uni-pay-co))
	+ 微信支付
	+ WeChat payment
		+ 微信APP支付 
		+ WeChat APP payment
		+ 微信小程序支付
		+ WeChat MiniApp Payment
		+ 微信公众号支付
		+ WeChat official account payment
		+ 微信手机外部浏览器H5支付
		+ WeChat mobile phone external browser H5 payment
		+ 微信PC扫码支付
		+ WeChat PC scan code payment
	+ 支付宝支付
	+ Alipay payment
		+ 支付宝APP支付 
		+ Alipay APP payment
		+ 支付宝小程序支付
		+ Alipay MiniApp payment
		+ 支付宝手机外部浏览器H5支付（支持在微信APP的H5页面中使用支付宝支付）
		+ Alipay mobile phone external browser H5 payment (support Alipay payment in the H5 page of WeChat APP)
		+ 支付宝PC扫码支付
		+ Alipay PC scan code payment
	+ 通用接口
	+ common interface
		+ 支付异步回调
		+ payment asynchronous callback
		+ 查询订单
		+ Query order
		+ 发起退款
		+ initiate a refund
		+ 查询退款
		+ Check Refund
		+ 关闭订单
		+ close order
		+ 获取当前支持的支付方式
		+ Get the currently supported payment methods
		+ 获取当前支付用户的openid
		+ Get the openid of the current paying user
	+ ios内购支付
- 支付统计（内置于uni-admin的支付统计中）
	+ 收款趋势
	+ 转换漏斗分析
	+ 价值用户排行
	+ 订单明细

## uni-pay组成@catalogue
## uni-pay composition @catalogue

uni-pay云端一体模板，包含前端页面、云对象、云端公共模块、uni-config-center配置、opendb数据表等内容。以及内置于uni-admin的支付统计报表。

### uni-pay的uni_modules
### uni_modules for uni-pay
uni-pay的[uni_modules](../plugin/uni_modules.md)中包含了前端页面、云对象和公共模块，目录结构如下：
[uni_modules](../plugin/uni_modules.md) of uni-pay contains front-end pages, cloud objects and public modules. The directory structure is as follows:

```
├─uni_modules                                         存放[uni_module](/uni_modules)规范的插件。
│    ├─其他module
│    └─uni-pay
│        ├─uniCloud
│        │    └─cloudfunctions                        云函数目录
│        │        ├─common                            云端公共模块目录
│        │            └─uni-pay                       uni-pay公共模块
│        │        └─uni-pay-co                        集成调用uni-pay方法的云对象
│        │            ├─common                        公用逻辑
│        │            ├─config                        配置
│        │            │  └─permission.js              调用接口所需的权限配置
│        │            ├─dao                           数据库操作相关API
│        │            ├─lang                          国际化目录
│        │            ├─lib                           基础功能（不建议修改此目录下文件）
│        │            │  ├─alipay.js                  支付宝平台相关API
│        │            │  ├─common.js                  一些通用API
│        │            │  ├─crypto.js                  跨云函数通信加解密API
│        │            │  ├─qrcode.js                  云端生成二维码的插件（来自于npm i qrcode的压缩版）
│        │            │  ├─wxpay.js                   微信支付平台相关API
│        │            ├─middleware                    中间件
│        │            ├─notify                        异步通知逻辑（你自己的异步通知逻辑写在这里）
│        │            └─service                       云对象方法的服务实现
│        ├─components                                 组件目录
│        │    └─uni-pay                               uni-pay收银台弹窗组件
│        │        └─uni-pay.vue
│        ├─js_sdk                                     js sdk目录
│        │    └─js_sdk.js                             
│        ├─pages                                      页面目录
│        │    └─success
│        │        └─success.js                        支付成功结果页
│        ├─static                                     静态资源目录
│        ├─changelog.md                               更新日志
│        ├─package.json                               包管理文件
│        └─readme.md                                  插件自述文件
```

完整的uni-app项目目录结构[另见](https://uniapp.dcloud.net.cn/frame?id=%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
Complete uni-app project directory structure [see also](https://uniapp.dcloud.net.cn/frame?id=%E7%9B%AE%E5%BD%95%E7%BB%93%E6% 9E%84)

### uni-pay的uni-config-center配置
### uni-config-center configuration of uni-pay

支付配置不在插件目录中，统一存放在 `uniCloud/cloudfunctions/common/uni-config-center/uni-pay/config.js` [查看支付配置介绍](#config)
The payment configuration is not in the plugin directory, it is stored in `uniCloud/cloudfunctions/common/uni-config-center/uni-pay/config.js` [View payment configuration introduction](#config)

### uni-pay的opendb数据表@database
### uni-pay opendb data table @database

支付插件需要创建以下表后才能正常运行，可以右键执行插件自带的 `db_init.json` 的初始化数据库功能来创建表。
The payment plug-in needs to create the following tables before it can run normally. You can right-click to execute the `db_init.json` function of initializing the database that comes with the plug-in to create the table.

- 支付订单表 [uni-pay-orders](https://gitee.com/dcloud/opendb/blob/master/collection/uni-pay-orders/collection.json)
- Payment Order Form [uni-pay-orders](https://gitee.com/dcloud/opendb/blob/master/collection/uni-pay-orders/collection.json)

## 示例项目运行教程@rundemo
## Example project running tutorial @rundemo

在对接自己的项目之前，建议先跑通示例项目，能跑通示例项目，代表你的配置和证书一定是正确的，然后再将`uni-pay`集成到你自己的项目中。
Before docking your own project, it is recommended to run through the sample project first. If you can run through the sample project, it means that your configuration and certificate must be correct, and then integrate `uni-pay` into your own project.

1. 从插件市场导入`uni-pay`示例项目。[前往插件市场](https://ext.dcloud.net.cn/plugin?name=uni-pay)
1. Import the `uni-pay` sample project from the plug-in market. [Go to the plug-in market](https://ext.dcloud.net.cn/plugin?name=uni-pay)

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-9.png)

2. 打开`uni-pay`配置文件，配置文件地址: `uniCloud/cloudfunctions/common/uni-config-center/uni-pay/config.js` [查看支付配置介绍](#config)
2. Open `uni-pay` configuration file, configuration file address: `uniCloud/cloudfunctions/common/uni-config-center/uni-pay/config.js` [View payment configuration introduction](#config)
3. 上传公共模块 `uni-config-center`（右键，上传公共模块，每次修改了支付配置，都需要重新上传此模块才会生效）
3. Upload the public module `uni-config-center` (right click, upload the public module, every time you modify the payment configuration, you need to re-upload this module to take effect)
4. 上传公共模块 `uni-pay`（右键，上传公共模块）
4. Upload public module `uni-pay` (right click, upload public module)
5. 上传云对象 `uni-pay-co`（右键，上传部署。当然对uniCloud目录点右键批量上传也可以）
5. Upload the cloud object `uni-pay-co` (right click, upload and deploy. Of course, right click on the uniCloud directory to upload in batches)
6. 数据库初始化
6. Database initialization

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-28.png)

7. 运行启动项目，**在HBuilderX的运行控制台里选择使用云端云函数环境**
7. Run the startup project, **Choose to use the cloud function environment in the HBuilderX console**

**注意：测试支付回调必须选择云端云函数环境**

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-29.png)

8. 前端页面里点击唤起收银台支付，如果可以正常支付，代表示例项目运行成功，可以开始对接自己的项目了。 [对接自己项目](#install)
8. Click on the front-end page to invoke the payment at the cashier. If the payment can be made normally, it means that the sample project has run successfully, and you can start docking your own project. [Docking own project](#install)

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-30.png)

## uni-pay的config-center配置@config
## config-center configuration of uni-pay @config

开发者在微信和支付宝的支付后台，需要申请开通支付服务，成功后会得到各种凭据，这些凭据要配置在uni-pay的配置中。
Developers need to apply to activate payment services in the payment background of WeChat and Alipay, and will get various credentials after success, and these credentials must be configured in the configuration of uni-pay.

配置文件在 `uniCloud/cloudfunctions/common/uni-config-center/uni-pay/config.js`
The configuration file is in `uniCloud/cloudfunctions/common/uni-config-center/uni-pay/config.js`

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-3.png)

### 完整支付配置示例@config-demo
### Complete payment configuration example @config-demo

这里是微信、支付宝全平台支付配置样例。如果只使用部分支付方式，后续有专门的分渠道章节。
Here are WeChat and Alipay full platform payment configuration samples. If only some payment methods are used, there will be a dedicated sub-channel chapter later.

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	// Uniform - payment callback address, the format is "service space ID":"URL address"
	"notifyUrl": {
		// 测试环境服务空间-支付回调地址
		"mp-b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://fc-mp-b267e273-19a7-4288-99c7-f6f27f9c5b77.next.bspapp.com/uni-pay-co",
		// 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
		"mp-499e2a37-0c77-418a-82aa-3e5820ecb057": "https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co",
	},
	"notifyKey":"5FB2CD73C7B53918728417C50762E6D45FB2CD73C7B53918728417C50762E6D4", // 跨云函数通信时的加密密钥，建议手动改下，不要使用默认的密钥，长度保持在64位以上即可
	// 微信支付相关
	// WeChat payment related
	"wxpay": {
		"enable": true, // 是否启用微信支付
		// 微信 - 小程序支付
		// WeChat- MiniApp payment
		"mp": {
			"appId": "", // 小程序的appid
			"secret": "", // 小程序的secret
			"mchId": "", // 商户id
			"key": "", // v2的api key
			"pfx": fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
			"v3Key": "", // v3的api key
			"appCertPath": path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
			"appPrivateKeyPath": path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
			"version": 2, // 启用支付的版本 2代表v2版本 3 代表v3版本
		},
		// 微信 - APP支付
		// WeChat - APP payment
		"app": {
			"appId": "", // app开放平台下的应用的appid
			"secret": "", // app开放平台下的应用的secret
			"mchId": "", // 商户id
			"key": "", // v2的api key
			"pfx": fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
			"v3Key": "", // v3的api key
			"appCertPath": path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
			"appPrivateKeyPath": path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
			"version": 2, // 启用支付的版本 2代表v2版本 3 代表v3版本
		},
		// 微信 - 扫码支付
		// WeChat - scan code to pay
		"native": {
			"appId": "", // 可以是小程序或公众号或app开放平台下的应用的任意一个appid
			"secret": "", // secret
			"mchId": "", // 商户id
			"key": "", // v2的api key
			"pfx": fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
			"v3Key": "", // v3的api key
			"appCertPath": path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
			"appPrivateKeyPath": path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
			"version": 2, // 启用支付的版本 2代表v2版本 3 代表v3版本
		},
		// 微信 - 公众号支付
		// WeChat - official account payment
		"jsapi": {
			"appId": "", // 公众号的appid
			"secret": "", // 公众号的secret
			"mchId": "", // 商户id
			"key": "", // v2的api key
			"pfx": fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
			"v3Key": "", // v3的api key
			"appCertPath": path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
			"appPrivateKeyPath": path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
			"version": 2, // 启用支付的版本 2代表v2版本 3 代表v3版本
		},
		// 微信 - 手机外部浏览器H5支付
		// WeChat - mobile phone external browser H5 payment
		"mweb": {
			"appId": "", // 可以是小程序或公众号或app开放平台下的应用的任意一个appid
			"secret": "", // secret
			"mchId": "", // 商户id
			"key": "", // v2的api key
			"pfx": fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
			"v3Key": "", // v3的api key
			"appCertPath": path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
			"appPrivateKeyPath": path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
			"version": 2, // 启用支付的版本 2代表v2版本 3 代表v3版本
			// 场景信息，必填
			// scene information, required
			"sceneInfo": {
				"h5_info": {
					"type": "Wap", // 此值固定Wap
					"wap_url": "", // 你的H5首页地址，必须和你发起支付的页面的域名一致。
					"wap_name": "", // 你的H5网站名称
				}
			}
		},
	},
	// 支付宝相关（证书记得选java版本）
	// Alipay related (remember to choose the java version of the certificate)
	"alipay": {
		"enable": true, // 是否启用支付宝支付
		// 支付宝 - 小程序支付配置
		// Alipay- MiniApp payment configuration
		"mp": {
			"appId": "", // 支付宝小程序appid
			"privateKey": "", // 支付宝商户私钥
			"appCertPath": path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
			"alipayPublicCertPath": path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
			"alipayRootCertPath": path.join(__dirname, 'alipay/alipayRootCert.crt'), // 支付宝根证书路径
		},
		// 支付宝 - APP支付配置
		// Alipay - APP payment configuration
		"app": {
			"appId": "", // 支付宝开放平台下应用的appid
			"privateKey": "", // 支付宝商户私钥
			"appCertPath": path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
			"alipayPublicCertPath": path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
			"alipayRootCertPath": path.join(__dirname, 'alipay/alipayRootCert.crt'), // 支付宝根证书路径
		},
		// 支付宝 - H5支付配置（包含：网站二维码、手机H5，需申请支付宝当面付接口权限）
		// Alipay - H5 payment configuration (including: website QR code, mobile phone H5, need to apply for Alipay face-to-face payment interface permission)
		"native": {
			"appId": "", // 支付宝开放平台下应用的appid
			"privateKey": "", // 支付宝商户私钥
			"appCertPath": path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
			"alipayPublicCertPath": path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
			"alipayRootCertPath": path.join(__dirname, 'alipay/alipayRootCert.crt'), // 支付宝根证书路径
		}
	},
	// ios内购相关
	// ios in-app purchase related
	"appleiap" :{
		// ios内购支付
		// ios in-app purchase payment
		"app": {
			"password": "", // App 专用共享密钥，App 专用共享密钥是用于接收此 App 自动续期订阅收据的唯一代码。如果您要将此 App 转让给其他开发者或不想公开主共享密钥，建议使用 App 专用共享密钥。非自动续订场景不需要此参数
			"timeout": 10000, // 请求超时时间，单位：毫秒
			"sandbox": false, // 是否是沙箱环境（本地调试ios走的是沙箱环境，故要设置为true，正式发布后，需要设置为false）
		}
	}
}
```

如果你对支付配置中各参数如何获取有疑问，请点击[获取支付配置帮助](#get-config-help)
If you have any questions about how to obtain the parameters in the payment configuration, please click [Get payment configuration help](#get-config-help)

**注意**
**Notice**

微信支付同时支持V2版本和V3版本
WeChat Pay supports both V2 and V3 versions

以微信小程序支付为例
Take WeChat MiniApp payment as an example

**V2版本**
**V2 version**

```js
"mp": {
	"appId": "", // 小程序的appid
	"secret": "", // 小程序的secret
	"mchId": "", // 商户id
	"key": "", // v2的api key
	"pfx": fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
	"version": 2, // 启用支付的版本 2代表v2版本 3 代表v3版本
},
```

**V3版本**
**V3 version**

```js
"mp": {
	"appId": "", // 小程序的appid
	"secret": "", // 小程序的secret
	"mchId": "", // 商户id
	"v3Key": "", // v3的api key
	"appCertPath": path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
	"appPrivateKeyPath": path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
	"version": 3, // 启用支付的版本 2代表v2版本 3 代表v3版本
},
```

当然你也可以全部配置了，这样可以方便自由切换V2和V3
Of course, you can also configure all of them, so that you can easily switch between V2 and V3

```js
"mp": {
	"appId": "", // 小程序的appid
	"secret": "", // 小程序的secret
	"mchId": "", // 商户id
	"key": "", // v2的api key
	"pfx": fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
	"v3Key": "", // v3的api key
	"appCertPath": path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
	"appPrivateKeyPath": path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
	"version": 2, // 启用支付的版本 2代表v2版本 3 代表v3版本
},
```

### 支付回调配置@config-notify
### Payment callback configuration @config-notify

对应支付配置的节点是 `notifyUrl`
The node corresponding to the payment configuration is `notifyUrl`

**示例**
**example**

```js
// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
// Uniform - payment callback address, the format is "service space ID":"URL address"
"notifyUrl": {
	// 测试环境服务空间-支付回调地址
	"mp-b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://fc-mp-b267e273-19a7-4288-99c7-f6f27f9c5b77.next.bspapp.com/uni-pay-co",
	// 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
	"mp-499e2a37-0c77-418a-82aa-3e5820ecb057": "https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co",
},
```

格式为 "服务空间ID": "URL化地址"
The format is "Service Space ID": "URLized Address"

**服务空间ID如何获取？**
**How to obtain the service space ID? **

[点击此处进入服务空间列表](https://unicloud.dcloud.net.cn/home)，找到你项目用的服务空间，复制其服务空间ID
[Click here to enter the service space list](https://unicloud.dcloud.net.cn/home), find the service space used by your project, and copy its service space ID

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-4.png)

**URL化地址如何获取？**
**How to obtain the URL address? **

[点击此处进入服务空间列表](https://unicloud.dcloud.net.cn/home)，找到你项目用的服务空间，点击服务空间名称进入空间详情页，点击左侧菜单【云函数/云对象】- 点击【uni-pay-co】云对象右侧的【详情】按钮
[Click here to enter the service space list](https://unicloud.dcloud.net.cn/home), find the service space used by your project, click the service space name to enter the space details page, and click the left menu [Cloud Function/ Cloud Object] - Click the [Details] button on the right side of the [uni-pay-co] cloud object

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-5.png)

进入详情后，点下面的【复制路径】，复制的内容就是【URL化地址】
After entering the details, click [Copy Path] below, and the copied content is [URL Address]

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-6.png)

### 分渠道支付配置示例@config-part
### Sub-channel payment configuration example @config-part

上面的配置样例是微信和支付宝全端配置样例。如果只使用一种支付场景，比如微信公众号里的微信支付，可以看下面章节的分渠道支付配置样例。
The configuration sample above is a full-terminal configuration sample of WeChat and Alipay. If you only use one payment scenario, such as WeChat payment in the WeChat official account, you can see the sub-channel payment configuration example in the following chapters.

#### 微信APP支付@config-wxpay-app
#### WeChat APP payment @config-wxpay-app

对应支付配置的节点是 `wxpay.app`
The node corresponding to the payment configuration is `wxpay.app`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	// Uniform - payment callback address, the format is "service space ID":"URL address"
	"notifyUrl": {
		// 测试环境服务空间-支付回调地址
		"mp-b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://fc-mp-b267e273-19a7-4288-99c7-f6f27f9c5b77.next.bspapp.com/uni-pay-co",
		// 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
		"mp-499e2a37-0c77-418a-82aa-3e5820ecb057": "https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co",
	},
	// 微信支付相关
	// WeChat payment related
	"wxpay": {
		"enable": true, // 是否启用微信支付
		// 微信 - APP支付
		// WeChat - APP payment
		"app": {
			"appId": "", // app开放平台下的应用的appid
			"secret": "", // app开放平台下的应用的secret
			"mchId": "", // 商户id
			"key": "", // v2的api key
			"pfx": fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
			"v3Key": "", // v3的api key
			"appCertPath": path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
			"appPrivateKeyPath": path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
			"version": 2, // 启用支付的版本 2代表v2版本 3 代表v3版本
		},
	},
}
```

#### 微信小程序支付@config-wxpay-mp
#### WeChat MiniApp Payment @config-wxpay-mp

对应支付配置的节点是 `wxpay.mp`
The node corresponding to the payment configuration is `wxpay.mp`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	// Uniform - payment callback address, the format is "service space ID":"URL address"
	"notifyUrl": {
		// 测试环境服务空间-支付回调地址
		"mp-b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://fc-mp-b267e273-19a7-4288-99c7-f6f27f9c5b77.next.bspapp.com/uni-pay-co",
		// 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
		"mp-499e2a37-0c77-418a-82aa-3e5820ecb057": "https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co",
	},
	// 微信支付相关
	// WeChat payment related
	"wxpay": {
		"enable": true, // 是否启用微信支付
		// 微信 - 小程序支付
		// WeChat- MiniApp payment
		"mp": {
			"appId": "", // 小程序的appid
			"secret": "", // 小程序的secret
			"mchId": "", // 商户id
			"key": "", // v2的api key
			"pfx": fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
			"v3Key": "", // v3的api key
			"appCertPath": path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
			"appPrivateKeyPath": path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
			"version": 2, // 启用支付的版本 2代表v2版本 3 代表v3版本
		},
	},
}
```

#### 微信公众号支付@config-wxpay-jsapi
#### WeChat official account payment @config-wxpay-jsapi

对应支付配置的节点是 `wxpay.jsapi`
The node corresponding to the payment configuration is `wxpay.jsapi`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	// Uniform - payment callback address, the format is "service space ID":"URL address"
	"notifyUrl": {
		// 测试环境服务空间-支付回调地址
		"mp-b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://fc-mp-b267e273-19a7-4288-99c7-f6f27f9c5b77.next.bspapp.com/uni-pay-co",
		// 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
		"mp-499e2a37-0c77-418a-82aa-3e5820ecb057": "https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co",
	},
	// 微信支付相关
	// WeChat payment related
	"wxpay": {
		"enable": true, // 是否启用微信支付
		// 微信 - 公众号支付
		// WeChat - official account payment
		"jsapi": {
			"appId": "", // 公众号的appid
			"secret": "", // 公众号的secret
			"mchId": "", // 商户id
			"key": "", // v2的api key
			"pfx": fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
			"v3Key": "", // v3的api key
			"appCertPath": path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
			"appPrivateKeyPath": path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
			"version": 2, // 启用支付的版本 2代表v2版本 3 代表v3版本
		},
	},
}
```

#### 微信手机外部浏览器H5支付@config-wxpay-mweb
#### WeChat mobile phone external browser H5 payment @config-wxpay-mweb

对应支付配置的节点是 `wxpay.mweb`
The node corresponding to the payment configuration is `wxpay.mweb`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	// Uniform - payment callback address, the format is "service space ID":"URL address"
	"notifyUrl": {
		// 测试环境服务空间-支付回调地址
		"mp-b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://fc-mp-b267e273-19a7-4288-99c7-f6f27f9c5b77.next.bspapp.com/uni-pay-co",
		// 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
		"mp-499e2a37-0c77-418a-82aa-3e5820ecb057": "https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co",
	},
	// 微信支付相关
	// WeChat payment related
	"wxpay": {
		"enable": true, // 是否启用微信支付
		// 微信 - 手机外部浏览器H5支付
		// WeChat - mobile phone external browser H5 payment
		"mweb": {
			"appId": "", // 可以是小程序或公众号或app开放平台下的应用的任意一个appid
			"secret": "", // secret
			"mchId": "", // 商户id
			"key": "", // v2的api key
			"pfx": fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
			"v3Key": "", // v3的api key
			"appCertPath": path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
			"appPrivateKeyPath": path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
			"version": 2, // 启用支付的版本 2代表v2版本 3 代表v3版本
			// 场景信息，必填
			// scene information, required
			"sceneInfo": {
				"h5_info": {
					"type": "Wap", // 此值固定Wap
					"wap_url": "", // 你的H5首页地址，必须和你发起支付的页面的域名一致。
					"wap_name": "", // 你的H5网站名称
				}
			}
		},
	},
}
```

#### 微信PC扫码支付@config-wxpay-native
#### WeChat PC scan code payment @config-wxpay-native

对应支付配置的节点是 `wxpay.native`
The node corresponding to the payment configuration is `wxpay.native`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	// Uniform - payment callback address, the format is "service space ID":"URL address"
	"notifyUrl": {
		// 测试环境服务空间-支付回调地址
		"mp-b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://fc-mp-b267e273-19a7-4288-99c7-f6f27f9c5b77.next.bspapp.com/uni-pay-co",
		// 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
		"mp-499e2a37-0c77-418a-82aa-3e5820ecb057": "https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co",
	},
	// 微信支付相关
	// WeChat payment related
	"wxpay": {
		"enable": true, // 是否启用微信支付
		// 微信 - 扫码支付
		// WeChat - scan code to pay
		"native": {
			"appId": "", // 可以是小程序或公众号或app开放平台下的应用的任意一个appid
			"secret": "", // secret
			"mchId": "", // 商户id
			"key": "", // v2的api key
			"pfx": fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
			"v3Key": "", // v3的api key
			"appCertPath": path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
			"appPrivateKeyPath": path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
			"version": 2, // 启用支付的版本 2代表v2版本 3 代表v3版本
		},
	},
}
```

#### 支付宝APP支付@config-alipay-app
#### Alipay APP payment @config-alipay-app

对应支付配置的节点是 `alipay.app`
The node corresponding to the payment configuration is `alipay.app`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	// Uniform - payment callback address, the format is "service space ID":"URL address"
	"notifyUrl": {
		// 测试环境服务空间-支付回调地址
		"mp-b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://fc-mp-b267e273-19a7-4288-99c7-f6f27f9c5b77.next.bspapp.com/uni-pay-co",
		// 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
		"mp-499e2a37-0c77-418a-82aa-3e5820ecb057": "https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co",
	},
	// 支付宝相关（证书记得选java版本）
	// Alipay related (remember to choose the java version of the certificate)
	"alipay": {
		"enable": true, // 是否启用支付宝支付
		// 支付宝 - APP支付配置
		// Alipay - APP payment configuration
		"app": {
			"appId": "", // 支付宝开放平台下应用的appid
			"privateKey": "", // 支付宝商户私钥
			"appCertPath": path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
			"alipayPublicCertPath": path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
			"alipayRootCertPath": path.join(__dirname, 'alipay/alipayRootCert.crt'), // 支付宝根证书路径
		},
	}
}
```

#### 支付宝小程序支付@config-alipay-mp
#### Alipay MiniApp payment @config-alipay-mp

对应支付配置的节点是 `alipay.mp`
The node corresponding to the payment configuration is `alipay.mp`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	// Uniform - payment callback address, the format is "service space ID":"URL address"
	"notifyUrl": {
		// 测试环境服务空间-支付回调地址
		"mp-b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://fc-mp-b267e273-19a7-4288-99c7-f6f27f9c5b77.next.bspapp.com/uni-pay-co",
		// 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
		"mp-499e2a37-0c77-418a-82aa-3e5820ecb057": "https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co",
	},
	// 支付宝相关（证书记得选java版本）
	// Alipay related (remember to choose the java version of the certificate)
	"alipay": {
		"enable": true, // 是否启用支付宝支付
		// 支付宝 - 小程序支付配置
		// Alipay- MiniApp payment configuration
		"mp": {
			"appId": "", // 支付宝小程序appid
			"privateKey": "", // 支付宝商户私钥
			"appCertPath": path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
			"alipayPublicCertPath": path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
			"alipayRootCertPath": path.join(__dirname, 'alipay/alipayRootCert.crt'), // 支付宝根证书路径
		},
	}
}
```

#### 支付宝手机外部浏览器H5支付@config-alipay-native-h5
#### Alipay mobile phone external browser H5 payment @config-alipay-native-h5

对应支付配置的节点是 `alipay.native`（和PC扫码配置节点一样）
The node corresponding to the payment configuration is `alipay.native` (same as the PC scan code configuration node)

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	// Uniform - payment callback address, the format is "service space ID":"URL address"
	"notifyUrl": {
		// 测试环境服务空间-支付回调地址
		"mp-b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://fc-mp-b267e273-19a7-4288-99c7-f6f27f9c5b77.next.bspapp.com/uni-pay-co",
		// 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
		"mp-499e2a37-0c77-418a-82aa-3e5820ecb057": "https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co",
	},
	// 支付宝相关（证书记得选java版本）
	// Alipay related (remember to choose the java version of the certificate)
	"alipay": {
		"enable": true, // 是否启用支付宝支付
		// 支付宝 - H5支付配置（包含：网站二维码、手机H5，需申请支付宝当面付接口权限）
		// Alipay - H5 payment configuration (including: website QR code, mobile phone H5, need to apply for Alipay face-to-face payment interface permission)
		"native": {
			"appId": "", // 支付宝开放平台下应用的appid
			"privateKey": "", // 支付宝商户私钥
			"appCertPath": path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
			"alipayPublicCertPath": path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
			"alipayRootCertPath": path.join(__dirname, 'alipay/alipayRootCert.crt'), // 支付宝根证书路径
		}
	}
}
```

#### 支付宝PC扫码支付@config-alipay-native-pc
#### Alipay PC scan code payment @config-alipay-native-pc

对应支付配置的节点是 `alipay.native`
The node corresponding to the payment configuration is `alipay.native`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	// Uniform - payment callback address, the format is "service space ID":"URL address"
	"notifyUrl": {
		// 测试环境服务空间-支付回调地址
		"mp-b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://fc-mp-b267e273-19a7-4288-99c7-f6f27f9c5b77.next.bspapp.com/uni-pay-co",
		// 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
		"mp-499e2a37-0c77-418a-82aa-3e5820ecb057": "https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co",
	},
	// 支付宝相关（证书记得选java版本）
	// Alipay related (remember to choose the java version of the certificate)
	"alipay": {
		"enable": true, // 是否启用支付宝支付
		// 支付宝 - H5支付配置（包含：网站二维码、手机H5，需申请支付宝当面付接口权限）
		// Alipay - H5 payment configuration (including: website QR code, mobile phone H5, need to apply for Alipay face-to-face payment interface permission)
		"native": {
			"appId": "", // 支付宝开放平台下应用的appid
			"privateKey": "", // 支付宝商户私钥
			"appCertPath": path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
			"alipayPublicCertPath": path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
			"alipayRootCertPath": path.join(__dirname, 'alipay/alipayRootCert.crt'), // 支付宝根证书路径
		}
	}
}
```


#### ios内购支付@config-appleiap-app
#### ios in-app purchase payment @config-appleiap-app

对应支付配置的节点是 `appleiap.app`
The node corresponding to the payment configuration is `appleiap.app`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	// Uniform - payment callback address, the format is "service space ID":"URL address"
	"notifyUrl": {
		// 测试环境服务空间-支付回调地址
		"mp-b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://fc-mp-b267e273-19a7-4288-99c7-f6f27f9c5b77.next.bspapp.com/uni-pay-co",
		// 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
		"mp-499e2a37-0c77-418a-82aa-3e5820ecb057": "https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co",
	},
	// ios内购相关
	// ios in-app purchase related
	"appleiap" :{
		// ios内购支付
		// ios in-app purchase payment
		"app": {
			"password": "", // App 专用共享密钥，App 专用共享密钥是用于接收此 App 自动续期订阅收据的唯一代码。如果您要将此 App 转让给其他开发者或不想公开主共享密钥，建议使用 App 专用共享密钥。非自动续订场景不需要此参数
			"timeout": 10000, // 请求超时时间，单位：毫秒
			"sandbox": false, // 是否是沙箱环境（本地调试ios走的是沙箱环境，故要设置为true，正式发布后，需要设置为false）
		}
	}
}
```

## 集成到自己项目的教程@install
## Tutorials integrated into your own project @install

在对接自己的项目之前，建议先[跑通示例项目](#rundemo)，能跑通示例项目，代表你的配置和证书一定是正确的，然后再将`uni-pay`集成到你自己的项目中。
Before docking your own project, it is recommended to [run through the sample project](#rundemo), if you can run through the sample project, it means that your configuration and certificate must be correct, and then integrate `uni-pay` into your own project.

### 安装插件
### Install the plugin

1. 从插件市场导入`uni-pay`插件到你自己的项目。[前往插件市场](https://ext.dcloud.net.cn/plugin?name=uni-pay)
1. Import the `uni-pay` plug-in from the plug-in market to your own project. [Go to the plug-in market](https://ext.dcloud.net.cn/plugin?name=uni-pay)

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-10.png)

2. 复制你刚运行的示例项目中的`uni-pay`配置文件，配置文件地址: `uniCloud/cloudfunctions/common/uni-config-center/uni-pay/config.js`到你的项目中 [查看支付配置介绍](#config)
2. Copy the `uni-pay` configuration file in the sample project you just ran, configuration file address: `uniCloud/cloudfunctions/common/uni-config-center/uni-pay/config.js` to your project[ View payment configuration introduction](#config)

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-3.png)

3. 上传公共模块 `uni-config-center`（右键，上传公共模块，每次修改了支付配置，都需要重新上传此模块才会生效）
3. Upload the public module `uni-config-center` (right click, upload the public module, every time you modify the payment configuration, you need to re-upload this module to take effect)
4. 上传公共模块 `uni-pay`（右键，上传公共模块）
4. Upload public module `uni-pay` (right click, upload public module)
5. 上传云对象 `uni-pay-co`（右键，上传部署）
5. Upload the cloud object `uni-pay-co` (right click, upload deployment)
6. 数据库初始化
6. Database initialization

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-28.png)

7. 项目根目录`pages.json`添加`subPackages`分包页面配置（如果页面已自动配置，则可无视此步骤）
7. Add `subPackages` subpackage page configuration to the project root directory `pages.json` (if the page has been automatically configured, you can ignore this step)
```js
"pages": [
	...你的页面
],
"subPackages": [
	{
		"root": "uni_modules/uni-pay/pages",
		"pages": [
			{
				"path": "success/success",
				"style": {
					"navigationBarTitleText": "支付成功",
					"backgroundColor": "#F8F8F8"
				}
			},
			{
				"path": "ad-interactive-webview/ad-interactive-webview",
				"style": {
					"navigationBarTitleText": "ad",
					"backgroundColor": "#F8F8F8"
				}
			}
		]
	}
],
```
8. 安装完成
8. The installation is complete

### 前端页面集成@quickly-pages
### Front-end page integration @quickly-pages

打开你需要进行支付的页面，一般是业务订单提交之后的页面来展现收银台。
Open the page where you need to make payment, usually the page after the business order is submitted to display the cash register.

1. 该页面在 `template` 内放一个 `uni-pay` 组件标签，声明ref，然后调用组件的API。如下
1. The page puts a `uni-pay` component tag in the `template`, declares the ref, and then calls the API of the component. as follows

```html
<template>
	<view>
		<button @click="open">唤起收银台支付</button>
		<uni-pay ref="uniPay"></uni-pay>
	</view>
</template>

```

2. 在script中编写代码，点击付款时执行方法：
2. Write the code in the script, and execute the method when the payment is clicked:

```html
<script>
	export default {
		data() {
			return {
				total_fee: 1, // 支付金额，单位分 100 = 1元
				order_no: "", // 业务系统订单号（即你自己业务系统的订单表的订单号）
				out_trade_no: "", // 插件支付单号
				description: "测试订单", // 支付描述
				type: "test", // 支付回调类型 如 recharge 代表余额充值 goods 代表商品订单（可自定义，任意英文单词都可以，只要你在 uni-pay-co/notify/目录下创建对应的 xxx.js文件进行编写对应的回调逻辑即可）
				custom:{
					a: "a",
					b: 1
				}
			}
		},
		methods: {
			/**
			 * 发起支付（唤起收银台，如果只有一种支付方式，则收银台不会弹出来，会直接使用此支付方式）
			 * 在调用此api前，你应该先创建自己的业务系统订单，并获得订单号 order_no，把order_no当参数传给此api，而示例中为了简化跟支付插件无关的代码，这里直接已时间戳生成了order_no
			 */
			open() {
				this.order_no = `test`+Date.now(); // 模拟生成订单号
				this.out_trade_no = `${this.order_no}-1`; // 模拟生成插件支付单号
				// 打开支付收银台
				// Open the payment cashier
				this.$refs.uniPay.open({
					total_fee: this.total_fee, // 支付金额，单位分 100 = 1元
					order_no: this.order_no, // 业务系统订单号（即你自己业务系统的订单表的订单号）
					out_trade_no: this.out_trade_no, // 插件支付单号
					description: this.description, // 支付描述
					type: this.type, // 支付回调类型
					custom: this.custom, // 自定义数据
				});
			}
		}
	}
</script>
```

### 云端支付回调集成@notify
### Cloud payment callback integration @notify

当用户支付成功后，我们要给用户增加余额或者给业务订单标记支付成功，这些通过异步回调通知来实现的。
When the user's payment is successful, we need to increase the balance of the user or mark the payment success of the business order, which is realized through asynchronous callback notification.

**提示：异步回调通知写在 `uni-pay-co/notify` 目录下，在此目录新建2个js文件，分别为 `recharge.js`、`goods.js` 文件，同时复制以下代码要你新建的2个js文件里。**
**Tips: The asynchronous callback notification is written in the `uni-pay-co/notify` directory, create two js files in this directory, namely `recharge.js` and `goods.js` files, and copy the following code to In the 2 js files you created. **

代码如下
code show as below

```js
'use strict';
/**
 * 此处建议只改下订单状态，保证能及时返回给第三方支付服务器成功状态
 * 限制4秒内必须执行完全部的异步回调逻辑，建议将消息发送、返佣、业绩结算等业务逻辑异步处理（如用定时任务去处理这些异步逻辑）
 */
module.exports = async (obj) => {
	let user_order_success = true;
	let { data = {} } = obj;
	let {
		order_no,
		out_trade_no,
		total_fee
	} = data; // uni-pay-orders 表内的数据均可获取到

	// 此处写你自己的支付成功逻辑开始-----------------------------------------------------------
	// Write your own payment success logic here to start -------------------------------------- ---------------------
	// 有三种方式
	// There are three ways
	// 方式一：直接写数据库操作
	// Method 1: Directly write to the database operation
	// 方式二：使用 await uniCloud.callFunction 调用其他云函数
	// Method 2: use await uniCloud.callFunction to call other cloud functions
	// 方式三：使用 await uniCloud.httpclient.request 调用http接口地址
	// Method 3: Use await uniCloud.httpclient.request to call the http interface address

	// 此处写你自己的支付成功逻辑结束-----------------------------------------------------------
	// Write your own payment success logic here end -------------------------------------- ---------------------
	// user_order_success =  true 代表你自己的逻辑处理成功 返回 false 代表你自己的处理逻辑失败。
	// user_order_success = true means your own logic processing is successful, return false means your own processing logic failed.
	return user_order_success;
};
```

**注意**
**Notice**

为什么要你自己创建.js文件，而不是插件默认给你创建好，这是因为后面当插件更新时，你写的代码会被插件更新的代码覆盖（一键合并功能），因此只要插件这里没有文件（而是你自己新建的文件），那么插件更新时，不会覆盖你自己新建的文件内的代码。
Why do you need to create the .js file yourself instead of the plugin creating it for you by default? This is because when the plugin is updated later, the code you write will be overwritten by the updated code of the plugin (one-click merge function), so as long as the plugin is not here file (but your own newly created file), then when the plug-in is updated, it will not overwrite the code in your own newly created file.

其中
in

- `recharge.js` 内可以写余额充值相关的回调逻辑
- Callback logic related to balance recharge can be written in `recharge.js`
- `goods.js` 内可以写商品订单付款成功后的回调逻辑
- In `goods.js`, you can write the callback logic after the payment of the product order is successful

最终调用哪个回调逻辑是根据你创建支付订单时，`type` 参数填的什么，`type` 如果填 `recharge` 则支付成功后就会执行 `recharge.js` 内的代码逻辑。
Which callback logic to call finally depends on what you fill in the `type` parameter when you create a payment order. If `type` is filled with `recharge`, the code logic in `recharge.js` will be executed after the payment is successful.

即前端调用支付时传的 `type` 参数
That is, the `type` parameter passed when the front end calls payment

```js
// 打开支付收银台
// Open the payment cashier
this.$refs.uniPay.open({
	type: "recharge", // 支付回调类型 recharge 代表余额充值（当然你可以自己自定义）
});
```

**注意：每次修改都需要重新上传云对象`uni-pay-co`**
**Note: Every modification needs to re-upload the cloud object `uni-pay-co`**

#### 业务在uniCloud上
#### Business is on uniCloud

如果你的业务在uniCloud上，那么可以使用方式一或方式二进行编写自定义回调逻辑。
If your business is on uniCloud, you can use method 1 or method 2 to write custom callback logic.

**方式一：直接写数据库操作**
**Method 1: Directly write database operation**

适用场景：简单数据库操作场景
Applicable scenarios: simple database operation scenarios

以给用户充值余额为例，代码如下
Take recharging the user's balance as an example, the code is as follows

```js
'use strict';
/**
 * 此处建议只改下订单状态，保证能及时返回给第三方支付服务器成功状态
 * 限制4秒内必须执行完全部的异步回调逻辑，建议将消息发送、返佣、业绩结算等业务逻辑异步处理（如用定时任务去处理这些异步逻辑）
 */
module.exports = async (obj) => {
	let user_order_success = true;
	let { data = {} } = obj;
	let {
		order_no,
		out_trade_no,
		total_fee,
		custom = {}
	} = data; // uni-pay-orders 表内的数据均可获取到

	// 此处写你自己的支付成功逻辑开始-----------------------------------------------------------
	// Write your own payment success logic here to start -------------------------------------- ---------------------
	// 方式一：直接写数据库操作
	// Method 1: Directly write to the database operation
	// 此处只是简单演示下，实际数据库语句会更复杂一点。
	// Here is just a simple demonstration, the actual database statement will be more complicated.
	const db = uniCloud.database();
	const _ = db.command;
	let res = await db.collection("uni-id-users").doc(custom.user_id).update({
	  balance: _.inc(custom.recharge_balance)
	});
	if (res && res.updated) {
		user_order_success = true; // 通知插件我的自定义回调逻辑执行成功
	} else {
		user_order_success = false; // 通知插件我的自定义回调逻辑执行失败
	}
	// 此处写你自己的支付成功逻辑结束-----------------------------------------------------------
	// Write your own payment success logic here end -------------------------------------- ---------------------
	return user_order_success;
};
```

**方式二：直接调用其他云函数或云对象**
**Method 2: Call other cloud functions or cloud objects directly**

适用场景：业务较为复杂，需写在其他云函数或云对象里的场景。
Applicable scenarios: scenarios where the business is complex and needs to be written in other cloud functions or cloud objects.

调用其他云函数示例代码如下
The sample code for calling other cloud functions is as follows

```js
'use strict';
/**
 * 此处建议只改下订单状态，保证能及时返回给第三方支付服务器成功状态
 * 限制4秒内必须执行完全部的异步回调逻辑，建议将消息发送、返佣、业绩结算等业务逻辑异步处理（如用定时任务去处理这些异步逻辑）
 */
const payCrypto = require('../libs/crypto.js'); // 获取加密服务
module.exports = async (obj) => {
	let user_order_success = true;
	let { data = {} } = obj;
	let {
		order_no,
		out_trade_no,
		total_fee
	} = data; // uni-pay-orders 表内的数据均可获取到

	// 此处写你自己的支付成功逻辑开始-----------------------------------------------------------
	// Write your own payment success logic here to start -------------------------------------- ---------------------
	// 方式二安全模式一（加密）
	// Mode 2 Security mode 1 (encryption)
	let encrypted = payCrypto.aes.encrypt({
		data: data, // 待加密的原文
	});
	
	await uniCloud.callFunction({
		name: "你的云函数名称",
		data: {
			encrypted, // 传输加密数据（通过payCrypto.aes.decrypt解密）
		},
	});
	// 解密示例
	// let decrypted = payCrypto.aes.decrypt({
	// 	data: encrypted, // 待解密的原文
	// });

	/*
		// 方式二安全模式二（只传一个订单号 out_trade_no，你自己的回调里查数据库表 uni-pay-orders 判断 status是否等于1来判断是否真的支付了）
		// Mode 2 Security mode 2 (only pass an order number out_trade_no, check the database table uni-pay-orders in your own callback to determine whether the status is equal to 1 to determine whether it is really paid)
		await uniCloud.callFunction({
			name: "你的云函数名称",
			data: {
				out_trade_no, // 支付插件订单号
			},
		});
	*/
	
	// 此处写你自己的支付成功逻辑结束-----------------------------------------------------------
	// Write your own payment success logic here end -------------------------------------- ---------------------
	// user_order_success =  true 代表你自己的逻辑处理成功 返回 false 代表你自己的处理逻辑失败。
	// user_order_success = true means your own logic processing is successful, return false means your own processing logic failed.
	return user_order_success;
};
```

调用其他云对象示例代码如下
The sample code for calling other cloud objects is as follows

```js
'use strict';
/**
 * 此处建议只改下订单状态，保证能及时返回给第三方支付服务器成功状态
 * 限制4秒内必须执行完全部的异步回调逻辑，建议将消息发送、返佣、业绩结算等业务逻辑异步处理（如用定时任务去处理这些异步逻辑）
 */
const payCrypto = require('../libs/crypto.js'); // 获取加密服务
module.exports = async (obj) => {
	let user_order_success = true;
	let { data = {} } = obj;
	let {
		order_no,
		out_trade_no,
		total_fee
	} = data; // uni-pay-orders 表内的数据均可获取到

	// 此处写你自己的支付成功逻辑开始-----------------------------------------------------------
	// Write your own payment success logic here to start -------------------------------------- ---------------------
	// 方式二安全模式一（加密）
	// Mode 2 Security mode 1 (encryption)
	let encrypted = payCrypto.aes.encrypt({
		data: data, // 待加密的原文
	});
	const cloudObject = uniCloud.importObject('你的云对象名称');
	await cloudObject.rechargeBalance(encrypted); // 传输加密数据（通过payCrypto.aes.decrypt解密）
	
	// 解密示例
	// let decrypted = payCrypto.aes.decrypt({
	// 	data: encrypted, // 待解密的原文
	// });
	
	
	/*
		// 方式二安全模式二（只传一个订单号 out_trade_no，你自己的回调里查数据库表 uni-pay-orders 判断 status是否等于1来判断是否真的支付了）
		// Mode 2 Security mode 2 (only pass an order number out_trade_no, check the database table uni-pay-orders in your own callback to determine whether the status is equal to 1 to determine whether it is really paid)
		const cloudObject = uniCloud.importObject('你的云对象名称');
		await cloudObject.rechargeBalance(out_trade_no);
	*/
	
	// 此处写你自己的支付成功逻辑结束-----------------------------------------------------------
	// Write your own payment success logic here end -------------------------------------- ---------------------
	// user_order_success =  true 代表你自己的逻辑处理成功 返回 false 代表你自己的处理逻辑失败。
	// user_order_success = true means your own logic processing is successful, return false means your own processing logic failed.
	return user_order_success;
};
```


#### 业务不在uniCloud上
#### Business is not on uniCloud

如果你的业务不在uniCloud上，如java或php写的后端服务，uni-pay也可以满足你的支付需求，你只需要使用回调方式三的http接口形式调用你自己系统的回调接口即可。
If your business is not on uniCloud, such as back-end services written in java or php, uni-pay can also meet your payment needs. You only need to call the callback interface of your own system in the form of the http interface of callback method 3.

**方式三：使用 await uniCloud.httpclient.request 调用外部http接口**
**Method 3: Use await uniCloud.httpclient.request to call the external http interface**

适用场景：业务不在uniCloud上。
Applicable scenario: The business is not on uniCloud.

示例代码如下
The sample code is as follows

```js
'use strict';
/**
 * 此处建议只改下订单状态，保证能及时返回给第三方支付服务器成功状态
 * 限制4秒内必须执行完全部的异步回调逻辑，建议将消息发送、返佣、业绩结算等业务逻辑异步处理（如用定时任务去处理这些异步逻辑）
 */
module.exports = async (obj) => {
	let user_order_success = true;
	let { data = {} } = obj;
	let {
		order_no,
		out_trade_no,
		total_fee
	} = data; // uni-pay-orders 表内的数据均可获取到

	// 此处写你自己的支付成功逻辑开始-----------------------------------------------------------
	// Write your own payment success logic here to start -------------------------------------- ---------------------
	// 有三种方式
	// There are three ways
	// 方式三：使用 await uniCloud.httpclient.request 调用http接口地址
	// Method 3: Use await uniCloud.httpclient.request to call the http interface address
	
	// 方式三安全模式一（加密）
	// Mode 3 Security mode 1 (encryption)
	let encrypted = payCrypto.aes.encrypt({
		data: data, // 待加密的原文
	});
	await uniCloud.httpclient.request("你的服务器接口请求地址", {
		method: "POST",
		data: {
			encrypted, // 传输加密数据（服务端你再自己解密）
		},
	});
	
	/*
		// 方式三安全模式二（只传一个订单号 out_trade_no，你自己的回调里执行url请求来请求 uni-pay-co 云对象的 getOrder 接口来判断订单是否真的支付了）
		// Method 3 Security Mode 2 (only pass an order number out_trade_no, execute the url request in your own callback to request the getOrder interface of the uni-pay-co cloud object to determine whether the order is actually paid)
		await uniCloud.httpclient.request("你的服务器接口请求地址", {
			method: "POST",
			data: {
				out_trade_no, // 支付插件订单号
			},
		});
	*/

	// 此处写你自己的支付成功逻辑结束-----------------------------------------------------------
	// Write your own payment success logic here end -------------------------------------- ---------------------
	// user_order_success =  true 代表你自己的逻辑处理成功 返回 false 代表你自己的处理逻辑失败。
	// user_order_success = true means your own logic processing is successful, return false means your own processing logic failed.
	return user_order_success;
};
```

### 运行启动
### Run start

运行你的项目，进行支付的体验和测试。
Run your project, experience and test payment.

## uni-pay组件介绍@uni-pay-component
## uni-pay component introduction @uni-pay-component

#### 组件属性
#### Component properties

| 属性名          | 说明                           | 类型    | 默认值  | 可选值 |
| property name | description | type | default value | optional values |
|-----------------|-------------------------------|---------|--------|-------|
| adpid           | uni-ad的广告位ID，若填写，则会在支付成功结果页展示广告（可以增加开发者广告收益）  | string | -  | - |
| adpid | uni-ad's ad slot ID, if filled in, the ad will be displayed on the successful payment result page (it can increase the developer's advertising revenue) | string | - | - |
| returnUrl       | 支付成功后，用户点击【查看订单】按钮时跳转的页面地址，如果不填写此属性，则没有【查看订单】按钮 | string  | - | -  |
| returnUrl | After the payment is successful, the user clicks the [View Order] button to jump to the page address. If this attribute is not filled, there will be no [View Order] button | string | - | - |
| mainColor       | 支付结果页主色调，默认支付宝小程序为#108ee9，其他端均为#01be6e | string | #01be6e | 见下  |
| mainColor | The main color of the payment result page, the default Alipay MiniApp is #108ee9, and all other ends are #01be6e | string | #01be6e | See below|
| mode            | 收银台模式，插件会自动识别，也可手动传参，mobile 手机模式 pc 电脑模式  | string  | 自动识别 | mobile、pc | 
| mode | cash register mode, the plug-in will automatically identify, or manually pass parameters, mobile phone mode pc computer mode | string | automatic identification | mobile, pc |
| logo            | 当mode为PC时，展示的logo | string | /static/logo.png | -  |
| logo | When the mode is PC, the displayed logo | string | /static/logo.png | - |
| height          | 收银台高度  | string | 70vh | - |
| height | cash register height | string | 70vh | - |

**mainColor值参考：**
**mainColor value reference:**

- 绿色系 #01be6e 
- Green line #01be6e
- 蓝色系 #108ee9 
- Blue line #108ee9
- 咖啡色 #816a4e 
- Brown #816a4e
- 粉红 #fe4070 
- pink #fe4070
- 橙黄 #ffac0c 
- orange #ffac0c
- 橘黄 #ff7100
- Orange #ff7100
- 其他 可自定义
- Other customizable

#### 组件事件
#### Component Events

| 事件名       | 说明                |  参数  |
| Event Name | Description | Parameters |
|-------------|---------------------|--------|
| success     | 支付成功的回调       |  res  | 
| success | Callback for successful payment | res |
| cancel      | 支付取消的回调       |  res  |
| cancel | callback for payment cancellation | res |
| fail        | 支付失败的回调       |  res  | 
| fail | Callback for payment failure | res |
| create      | 创建支付订单时的回调（此时用户还未支付）  | res | 
| create | Callback when creating a payment order (the user has not paid yet) | res |

#### 组件方法
#### Component Methods

通过 `let res = await this.$refs.uniPay.xxx();` 方式调用，详情调用方式参考下方的【前端完整示例代码】
It is called by `let res = await this.$refs.uniPay.xxx();`. For details, please refer to the [Complete front-end sample code] below.

| 方法名                    | 说明                | 
| method name | description |
|---------------------------|---------------------|
| open                      | 发起支付 - 打开支付收银台弹窗    [查看详情](#create-order) |
| open | Initiate payment - Open the pop-up window of the payment cashier [View details](#create-order) |
| createOrder               | 直接发起支付（无收银台） [查看详情](#create-order) |
| createOrder | Initiate payment directly (no cashier) [View Details](#create-order) |
| getOrder                  | 查询订单     [查看详情](#get-order) |
| getOrder | Query Order [View Details](#get-order) |
| refund                    | 发起退款（此接口需要权限才可以访问）  [查看详情](#refund) |
| refund | Initiate a refund (this interface requires permission to access) [View Details](#refund) |
| getRefund                 | 查询退款  [查看详情](#get-refund) | 
| getRefund | Query Refund [View Details](#get-refund) |
| closeOrder                | 关闭订单  [查看详情](#close-order) |
| closeOrder | Close Order [View Details](#close-order) |
| getPayProviderFromCloud   | 获取支持的支付供应商  [查看详情](#get-pay-provider-from-cloud) |
| getPayProviderFromCloud | Get supported payment providers [View Details](#get-pay-provider-from-cloud) |
| getProviderAppId          | 获取支付配置内的appid（主要用于获取微信公众号的appid，用以获取code） [查看详情](#get-provider-appid) |
| getProviderAppId | Get the appid in the payment configuration (mainly used to get the appid of the WeChat official account to get the code) [View Details](#get-provider-appid) |
| getOpenid                 | 根据code获取openid （主要用于微信公众号code换取openid） [查看详情](#get-openid) |
| getOpenid | Get openid according to the code (mainly used for WeChat official account code exchange for openid) [View details](#get-openid) |

**前端完整示例代码**
**Complete front-end sample code**

```html
<template>
	<view class="app">
		<view>
			<view class="label">支付单号：</view>
			<view><input v-model="out_trade_no" /></view>
		</view>
		<view>
			<view class="label">支付金额（单位分，100=1元）：</view>
			<view><input v-model.number="total_fee" /></view>
		</view>
		<button @click="open">唤起收银台支付</button>
		<view class="tips">支付前，让用户自己选择微信还是支付宝</view>
		<!-- #ifdef MP-WEIXIN || H5 || APP -->
		<button @click="createOrder('wxpay')">直接发起微信支付</button>
		<!-- #endif -->
		<!-- #ifdef MP-ALIPAY || H5 || APP -->
		<button @click="createOrder('alipay')">直接发起支付宝支付</button>
		<!-- #endif -->
		
		<button @click="createQRcode('wxpay')">生成独立支付二维码</button>
		<view class="tips">用于把生成的二维码放到自己写的页面中（组件不会弹窗，请从日志中查看二维码base64值）</view>
		
		<button @click="getOrder">查询支付状态</button>
		<!--
		<button @click="refund">发起退款</button>
		<view class="tips">发起退款需要admin权限，本示例未对接登录功能</view>
		<button @click="getRefund">查询退款状态</button>
		<button @click="closeOrder">关闭订单</button>
		-->
		<!-- #ifdef H5 -->
		<button v-if="h5Env === 'h5-weixin'" @click="getWeiXinJsCode('snsapi_base')">公众号获取openid示例</button>
		<!-- #endif -->
		<!-- 统一支付组件 -->
		<!-- Unified payment component -->
		<uni-pay ref="uniPay" :adpid="adpid" return-url="/pages/order-detail/order-detail" logo="/static/logo.png" @success="onSuccess" @create="onCreate"></uni-pay>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				total_fee: 1, // 支付金额，单位分 100 = 1元
				order_no: "", // 业务系统订单号（即你自己业务系统的订单表的订单号）
				out_trade_no: "", // 插件支付单号
				description: "测试订单", // 支付描述
				type: "test", // 支付回调类型 如 recharge 代表余额充值 goods 代表商品订单（可自定义，任意英文单词都可以，只要你在 uni-pay-co/notify/目录下创建对应的 xxx.js文件进行编写对应的回调逻辑即可）
				//qr_code: true, // 是否强制使用扫码支付
				//qr_code: true, // Whether to force the use of scan code payment
				openid:"", // 微信公众号需要
				custom:{
					a: "a",
					b: 1
				},
				adpid: "1000000001", // uni-ad的广告位id
			}
		},
		onLoad(options={}) {
			if (options.code && options.state) {
				// 获取微信公众号的openid
				// Get the openid of the WeChat official account
				setTimeout(() => {
					this.getOpenid({
						provider: "wxpay",
						code: options.code
					});
				}, 300);
			}
		},
		methods: {
			/**
			 * 发起支付（唤起收银台，如果只有一种支付方式，则收银台不会弹出来，会直接使用此支付方式）
			 * 在调用此api前，你应该先创建自己的业务系统订单，并获得订单号 order_no，把order_no当参数传给此api，而示例中为了简化跟支付插件无关的代码，这里直接已时间戳生成了order_no
			 */
			open() {
				this.order_no = `test`+Date.now();
				this.out_trade_no = `${this.order_no}-1`;
				// 打开支付收银台
				// Open the payment cashier
				this.$refs.uniPay.open({
					total_fee: this.total_fee, // 支付金额，单位分 100 = 1元
					order_no: this.order_no, // 业务系统订单号（即你自己业务系统的订单表的订单号）
					out_trade_no: this.out_trade_no, // 插件支付单号
					description: this.description, // 支付描述
					type: this.type, // 支付回调类型
					qr_code: this.qr_code, // 是否强制使用扫码支付
					openid: this.openid, // 微信公众号需要
					custom: this.custom, // 自定义数据
				});
			},
			/**
			 * 发起支付（不唤起收银台，手动指定支付方式）
			 * 在调用此api前，你应该先创建自己的业务系统订单，并获得订单号 order_no，把order_no当参数传给此api，而示例中为了简化跟支付插件无关的代码，这里直接已时间戳生成了order_no
			 */
			createOrder(provider){
				this.order_no = `test`+Date.now();
				this.out_trade_no = `${this.order_no}-1`;
				// 发起支付
				// initiate payment
				this.$refs.uniPay.createOrder({
					provider: provider, // 支付供应商
					total_fee: this.total_fee, // 支付金额，单位分 100 = 1元
					order_no: this.order_no, // 业务系统订单号（即你自己业务系统的订单表的订单号）
					out_trade_no: this.out_trade_no, // 插件支付单号
					description: this.description, // 支付描述
					type: this.type, // 支付回调类型
					qr_code: this.qr_code, // 是否强制使用扫码支付
					openid: this.openid, // 微信公众号需要
					custom: this.custom, // 自定义数据
				});
			},
			/**
			 * 生成支付独立二维码（只返回支付二维码）
			 * 在调用此api前，你应该先创建自己的业务系统订单，并获得订单号 order_no，把order_no当参数传给此api，而示例中为了简化跟支付插件无关的代码，这里直接已时间戳生成了order_no
			 */
			createQRcode(provider){
				this.order_no = `test`+Date.now();
				this.out_trade_no = `${this.order_no}-1`;
				// 发起支付
				// initiate payment
				this.$refs.uniPay.createOrder({
					provider: provider, // 支付供应商
					total_fee: this.total_fee, // 支付金额，单位分 100 = 1元
					order_no: this.order_no, // 业务系统订单号（即你自己业务系统的订单表的订单号）
					out_trade_no: this.out_trade_no, // 插件支付单号
					description: this.description, // 支付描述
					type: this.type, // 支付回调类型
					qr_code: true, // 是否强制使用扫码支付
					cancel_popup: true, // 配合qr_code:true使用，是否只生成支付二维码，没有二维码弹窗
					openid: this.openid, // 微信公众号需要
					custom: this.custom, // 自定义数据
				});
			},
			// 查询支付状态
			// query payment status
			async getOrder() {
				let res = await this.$refs.uniPay.getOrder({
					out_trade_no: this.out_trade_no, // 插件支付单号
					await_notify: true
				});
				if (res) {
					let obj = {
						"-1": "已关闭",
						"1": "已支付",
						"0": "未支付",
						"2": "已部分退款",
						"3": "已全额退款"
					};
					uni.showToast({
						title: obj[res.status] || res.errMsg,
						icon: "none"
					});
				}
			},
			// 发起退款
			// initiate a refund
			async refund() {
				let res = await this.$refs.uniPay.refund({
					out_trade_no: this.out_trade_no, // 插件支付单号
				});
				if (res) {
					uni.showToast({
						title: res.errMsg,
						icon: "none"
					});
				}
			},
			// 查询退款状态
			// Query refund status
			async getRefund() {
				let res = await this.$refs.uniPay.getRefund({
					out_trade_no: this.out_trade_no, // 插件支付单号
				});
				if (res) {
					uni.showModal({
						content: res.errMsg,
						showCancel: false
					});
				}
			},
			// 关闭订单
			// close the order
			async closeOrder() {
				let res = await this.$refs.uniPay.closeOrder({
					out_trade_no: this.out_trade_no, // 插件支付单号
				});
				if (res) {
					uni.showModal({
						content: res.errMsg,
						showCancel: false
					});
				}
			},
			// 获取公众号code
			// Get official account code
			async getWeiXinJsCode(scope="snsapi_base") {
				let res = await this.$refs.uniPay.getProviderAppId({
					provider: "wxpay",
					provider_pay_type: "jsapi"
				});
				if (res.appid) {
					let appid = res.appid;
					let redirect_uri = window.location.href.split("?")[0];
					let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=STATE#wechat_redirect`;
					window.location.href = url;
				}
				
			},
			// 获取公众号openid
			// Get the official account openid
			async getOpenid(data) {
				let res = await this.$refs.uniPay.getOpenid(data);
				if (res) {
					this.openid = res.openid;
					uni.showToast({
						title: "已获取到openid，可以开始支付",
						icon: "none"
					});
				}
			},
			// 监听事件 - 支付订单创建成功（此时用户还未支付）
			// Listen to the event - the payment order is successfully created (the user has not paid at this time)
			onCreate(res){
				console.log('create: ', res);
				// 如果只是想生成支付二维码，不需要组件自带的弹窗，则在这里可以获取到支付二维码 qr_code_image
				// If you just want to generate a payment QR code and do not need the pop-up window that comes with the component, you can get the payment QR code here qr_code_image
			},
			// 监听事件 - 支付成功
			// listen event - payment successful
			onSuccess(res){
				console.log('success: ', res);
				if (res.user_order_success) {
					// 代表用户已付款，且你自己写的回调成功并正确执行了
					// On behalf of the user has paid, and the callback written by you is successful and executed correctly
					
				} else {
					// 代表用户已付款，但你自己写的回调执行成功（通常是因为你的回调代码有问题）
					// Represents that the user has paid, but the callback you wrote yourself executed successfully (usually because of a problem with your callback code)
	
				}
			}
		}, 
		computed: {
			h5Env(){
				// #ifdef H5
				let ua = window.navigator.userAgent.toLowerCase();
				if (ua.match(/MicroMessenger/i) == 'micromessenger' && (ua.match(/miniprogram/i) == 'miniprogram')) {
					// 微信小程序
					// WeChat MiniApp
					return "mp-weixin";
				}
				if (ua.match(/MicroMessenger/i) == 'micromessenger') {
					// 微信公众号
					// WeChat public account
					return "h5-weixin";
				}
				if (ua.match(/alipay/i) == 'alipay' && ua.match(/miniprogram/i) == 'miniprogram') {
					return "mp-alipay";
				}
				if (ua.match(/alipay/i) == 'alipay') {
					return "h5-alipay";
				}
				// 外部 H5
				// external H5
				return "h5";
				// #endif
			}
		},
	}
</script>

<style lang="scss" scoped>
	.app{
		padding: 30rpx;
	}
	input {
		border: 1px solid #f3f3f3;
		padding: 10rpx;
	}

	button {
		margin-top: 20rpx;
	}
	
	.label{
		margin: 10rpx 0;
	}
	
	.tips{
		margin-top: 20rpx;
		font-size: 24rpx;
		color: #565656;
	}
	
</style>

```

## 云对象（uni-pay-co）介绍@uni-pay-co
## Cloud object (uni-pay-co) introduction @uni-pay-co

### 目录结构@cloudobject-catalogue
### Catalog structure @cloudobject-catalogue

```
├─common                  公用逻辑
├─config                  配置
│  └─permission.js             调用接口所需的权限配置
├─dao                     数据库相关API
├─lang                    国际化目录
├─lib                     基础功能，不建议修改此目录下文件
│  ├─alipay.js                支付宝平台相关API
│  ├─common.js                一些通用API
│  ├─qrcode.js                云端生成二维码的插件（来自于npm i qrcode的压缩版）
│  └─wxpay.js                 微信支付平台相关API
├─middleware              中间件
├─notify                  异步通知逻辑（你自己的异步通知逻辑写在这里）
└─service                 分模块存放的云对象方法的服务实现
```

### 公共响应参数@co-public-response
### Public response parameters @co-public-response

`uni-pay-co` 所有api返回值均满足[uniCloud响应体规范](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)
`uni-pay-co` All api return values meet the [uniCloud response body specification](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)

返回值示例
return value example

```js
{
	errCode: 0, // 错误码，详见错误码列表
	errMsg: '', // 错误信息，uni-pay-co会自动根据客户端语言对错误信息进行国际化
	// ...其余参数
	// ...the rest of the parameters
}
```

## API列表@api
## API list @api

uni-pay前端组件和uni-pay-co云对象的方法是一样的。通常情况下，前端直接调用uni-pay组件内的方法即可（组件内会自动调用云对象内的API，无需再手动调用云对象内的API）
The method of uni-pay front-end component and uni-pay-co cloud object is the same. Usually, the front end can directly call the method in the uni-pay component (the component will automatically call the API in the cloud object, no need to manually call the API in the cloud object)

以下是介绍这些api。
The following is an introduction to these APIs.

| API             | 说明                | 
| API | Description |
|-----------------|---------------------|
| uniPayCo.createOrder     | 创建支付 [查看详情](#create-order)  |
| uniPayCo.createOrder | Create Payment [View Details](#create-order) |
| uniPayCo.getOrder        | 查询订单 [查看详情](#get-order)      |
| uniPayCo.getOrder | Query Order [View Details](#get-order) |
| uniPayCo.refund      | 发起退款（此接口需要权限才可以访问） [查看详情](#refund)  | 
| uniPayCo.refund | Initiate a refund (this interface requires permission to access) [View Details](#refund) |
| uniPayCo.getRefund      | 查询退款   [查看详情](#get-refund)| 
| uniPayCo.getRefund | Query Refund [View Details](#get-refund)|
| uniPayCo.closeOrder      | 关闭订单 [查看详情](#close-order)  | 
| uniPayCo.closeOrder | Close Order [View Details](#close-order) |
| uniPayCo.getPayProviderFromCloud      | 获取支持的支付供应商  [查看详情](#get-pay-provider-from-cloud) | 
| uniPayCo.getPayProviderFromCloud | Get supported payment providers [View Details](#get-pay-provider-from-cloud) |
| uniPayCo.getProviderAppId      | 获取支付配置内的appid（主要用于获取微信公众号的appid，用以获取code） [查看详情](#get-provider-appid)  | 
| uniPayCo.getProviderAppId | Get the appid in the payment configuration (mainly used to get the appid of the WeChat official account to get the code) [View Details](#get-provider-appid) |
| uniPayCo.getOpenid      | 根据code获取openid （主要用于微信公众号code换取openid） [查看详情](#get-openid) |
| uniPayCo.getOpenid | Obtain openid according to code (mainly used for WeChat official account code exchange for openid) [View details](#get-openid) |

### 创建支付@create-order
### Create payment @create-order

**支付组件方法形式（收银台弹窗模式）（推荐）**
**Payment component method form (cash register pop-up window mode) (recommended)**

`open`和`createOrder`参数是一致的，唯一区别是`open`会打开收银台，而`createOrder`不带收银台，直接调用支付。
The parameters of `open` and `createOrder` are the same, the only difference is that `open` will open the cashier, while `createOrder` does not have a cashier, and directly calls the payment.

`open`如果只有一种支付方式，比如微信小程序内只能用微信支付，则不会弹收银台，而是直接调用支付。
`open` If there is only one payment method, for example, in the WeChat MiniApp, only WeChat payment can be used, the cash register will not pop up, but the payment will be called directly.

```js
this.$refs.uniPay.open({
	total_fee: 1, // 支付金额，单位分 100 = 1元
	type: "recharge", // 支付回调类型
	order_no: "20221027011000101001010", // 业务系统订单号
	out_trade_no: "2022102701100010100101001", // 插件支付单号
	description: "uniCloud个人版包月套餐", // 支付描述
});
```

**直接跳收银台页面模式（推荐）**
**Skip directly to the cashier page mode (recommended)**

与弹窗模式的区别是：跳页面模式是通过 `uni.navigateTo` 直接跳到收银台页面，而弹窗模式是在原页面弹出收银台。
The difference from the pop-up mode is: the jump page mode is to jump directly to the cashier page through `uni.navigateTo`, while the pop-up mode is to pop up the cashier on the original page.

```js
let options = {
	total_fee: 1, // 支付金额，单位分 100 = 1元
	type: "recharge", // 支付回调类型
	order_no: "20221027011000101001010", // 业务系统订单号
	out_trade_no: "2022102701100010100101001", // 插件支付单号
	description: "uniCloud个人版包月套餐", // 支付描述
};
let optionsStr = encodeURI(JSON.stringify(options));
uni.navigateTo({
	url:`/uni_modules/uni-pay/pages/pay-desk/pay-desk?options=${optionsStr}`
});
```

收银台页面源码在 `/uni_modules/uni-pay/pages/pay-desk/pay-desk` 中
The cash register page source code is in `/uni_modules/uni-pay/pages/pay-desk/pay-desk`

如果你想要自定义收银台样式，建议复制该页面到你的项目pages目录，如`/pages/pay-desk/pay-desk`，然后在复制的页面上进行修改样式，同时跳转到自定义收银台的代码如下：
If you want to customize the cashier style, it is recommended to copy this page to your project pages directory, such as `/pages/pay-desk/pay-desk`, then modify the style on the copied page, and jump to the self The code to define the cash register is as follows:
```js
let options = {
	total_fee: 1, // 支付金额，单位分 100 = 1元
	type: "recharge", // 支付回调类型
	order_no: "20221027011000101001010", // 业务系统订单号
	out_trade_no: "2022102701100010100101001", // 插件支付单号
	description: "uniCloud个人版包月套餐", // 支付描述
};
let optionsStr = encodeURI(JSON.stringify(options));
uni.navigateTo({
	url:`/pages/pay-desk/pay-desk?options=${optionsStr}`
});
```

**支付组件方法形式（不带收银台）**
**Payment Component Method Form (Without Cashier)**

不带收银台时，provider参数为必传项，代表支付供应商
When there is no cash register, the provider parameter is a mandatory item, representing the payment provider

```js
this.$refs.uniPay.createOrder({
	provider: "wxpay", // 支付供应商
	total_fee: 1, // 支付金额，单位分 100 = 1元
	type: "recharge", // 支付回调类型
	order_no: "20221027011000101001010", // 业务系统订单号
	out_trade_no: "2022102701100010100101001", // 插件支付单号
	description: "uniCloud个人版包月套餐", // 支付描述
});
```

**云对象接口形式**
**Cloud Object Interface Form**

```js
await uniIdCo.createOrder({
  provider: "wxpay", // 支付供应商
  total_fee: 1, // 支付金额，单位分 100 = 1元
	type: "recharge", // 支付回调类型
  order_no: "20221027011000101001010", // 业务系统订单号
  out_trade_no: "2022102701100010100101001", // 插件支付单号
  description: "uniCloud个人版包月套餐", // 支付描述
});
```

**参数说明**
**Parameter Description**
			
| 参数名          | 类型     | 必填 |             说明          |
| parameter name | type | required | description |
|-----------------|---------|------|---------------------------|
| provider        | string  |  是  |  支付供应商 如 wxpay alipay   |
| provider | string | yes | payment provider such as wxpay alipay |
| total_fee       | int     |  是  |  订单总金额，单位为分，100等于1元   |
| total_fee | int | Yes | The total amount of the order, in cents, 100 is equal to 1 yuan |
| type            | string  |  是  |  订单类型 goods：订单付款 recharge：余额充值付款 vip：vip充值付款 等等，可自定义，主要用于判断走哪个回调逻辑（如商品付款和余额充值的回调逻辑肯定是不一样的） | 
| type | string | Yes| Order type goods: order payment recharge: balance recharge payment vip: vip recharge payment, etc., can be customized, mainly used to determine which callback logic to use (such as the callback logic of product payment and balance recharge must be different) |
| order_no        | string  |  是  |  业务系统订单号 建议控制在20-28位(不可以是24位,24位在阿里云空间可能会有问题)(可重复,代表1个业务订单会有多次付款的情况)   |
| order_no | string | Yes | The order number of the business system is recommended to be controlled within 20-28 digits (not 24 digits, 24 digits may cause problems in Alibaba Cloud space) (repeatable, representing multiple payments for one business order situation) |
| out_trade_no    | string  |  否  |  支付插件订单号（需控制唯一，不传则由插件自动生成）   | 
| out_trade_no | string | No | Payment plug-in order number (need to be unique, otherwise it will be automatically generated by the plug-in) |
| description     | string  |  否  |  支付描述，如：uniCloud个人版包月套餐   | 
| description | string | No | Payment description, such as: uniCloud Personal Edition monthly package |
| qr_code         | boolean |  否  |  若设置为 true 则强制开启二维码支付模式   | 
| qr_code | boolean | No | If set to true, the QR code payment mode will be forced to open |
| openid          | string  |  否  |  发起支付的用户openid（微信公众号支付必填，小程序支付等插件会自动获取，无需填写  | 
| openid | string | No| The openid of the user who initiated the payment (WeChat official account payment is required, and plug-ins such as MiniApp payment will automatically obtain it, no need to fill in|
| custom          | object  |  否  | 自定义参数（不会发送给第三方支付服务器）     | 
| custom | object | No | Custom parameters (will not be sent to the third-party payment server) |
| other           | object  |  否  |  其他请求参数（会发送给第三方支付服务器）   | 
| other | object | No | Other request parameters (will be sent to the third-party payment server) |

**返回值**
**return value**

| 参数名          | 类型     |              说明          |
| parameter name | type | description |
|-----------------|---------|---------------------------|
| order           | object  |  用于发起支付的订单信息   |
| order | object | order information for initiating payment |
| order_no       | string     |  本次交易的订单号，等于你一开始传的order_no的值  |
| order_no | string | The order number of this transaction is equal to the value of order_no you passed at the beginning |
| out_trade_no      | string  |  本次交易的支付插件订单号  |
| out_trade_no | string | payment plugin order number for this transaction |
| provider      | string  |  本次交易的支付供应商  |
| provider | string | payment provider for this transaction |
| provider_pay_type      | string  |  本次交易的支付供应商的支付类型  |
| provider_pay_type | string | The payment type of the payment provider for this transaction |
| qr_code      | boolean  |  本次交易的是否是扫码支付模式  |
| qr_code | boolean | Whether this transaction is a scan code payment mode |
| qr_code_image      | string  |  如果是扫码支付，会返回此字段，代表二维码的base64值  |
| qr_code_image | string | If it is a scan code payment, this field will be returned, representing the base64 value of the QR code |

**特别注意（一定要看）**
**Special attention (must see)**

在调用此api前，你应该先创建自己的业务系统订单，并获得订单号 `order_no`，再把 `order_no` 当参数传给此api。
Before calling this api, you should first create your own business system order and get the order number `order_no`, and then pass `order_no` as a parameter to this api.

整个逻辑是这样的：
The whole logic is like this:

**以用户购买商品付款为例**
**Taking the example of user payment for purchasing goods**

- 1、前端用户登录（非本插件功能）
- 1. Front-end user login (not a function of this plugin)
- 2、前端用户购买商品并下单，云端生成你自己写的业务系统商品订单信息，并返回订单号 `order_no` 给前端（非本插件功能）
- 2. The front-end user purchases and places an order, and the cloud generates your own business system product order information, and returns the order number `order_no` to the front-end (not a function of this plug-in)
- 3、用上一步云端返回的 `order_no` 调用插件的[创建支付](#create-order)API（type参数的值写 `goods`），发起真正的支付功能（本插件功能）
- 3. Use the `order_no` returned by the cloud in the previous step to call the plug-in [create payment](#create-order) API (write `goods` for the value of the type parameter) to initiate the real payment function (this plug-in function)
- 4、用户支付成功后，云端接收第三方支付发过来的异步回调请求，云端校验请求合法性后，执行商品付款成功异步回调逻辑（即执行 `goods` 回调），同时标记订单为已付款（本插件功能）
- 4. After the user's payment is successful, the cloud receives the asynchronous callback request sent by the third-party payment. After the cloud verifies the legitimacy of the request, it executes the asynchronous callback logic of the product payment success (i.e. executes the `goods` callback), and marks the order as paid (This plug-in function)
- 5、前端监听到付款成功事件，跳转到支付成功页，并展示广告（本插件功能）
- 5. The front end listens to the payment success event, jumps to the payment success page, and displays the advertisement (this plug-in function)
- 6、用户点击查看订单，跳转到你自己写的业务系统商品订单详情页（本插件功能）
- 6. The user clicks to view the order and jumps to the product order details page of the business system written by yourself (this plug-in function)
- 7、完成
- 7. Finished

**以用户充值余额为例**
**Taking the user's recharge balance as an example**

- 1、前端用户登录（非本插件功能）
- 1. Front-end user login (not a function of this plugin)
- 2、前端用户提交充值余额的数量，云端生成你自己写的业务系统充值订单信息，并返回订单号 `order_no` 给前端（非本插件功能）
- 2. The front-end user submits the amount of the recharge balance, and the cloud generates the recharge order information of the business system written by yourself, and returns the order number `order_no` to the front-end (not the function of this plug-in)
- 3、用上一步云端返回的 `order_no` 调用插件的[创建支付](#create-order)API（type参数的值写 `recharge`），发起真正的支付功能（本插件功能）
- 3. Use the `order_no` returned by the cloud in the previous step to call the plug-in [create payment](#create-order) API (write `recharge` for the value of the type parameter) to initiate the real payment function (this plug-in function)
- 4、用户支付成功后，云端接收第三方支付发过来的异步回调请求，云端校验请求合法性后，执行余额充值付款成功异步回调逻辑（即执行 `recharge` 回调），同时标记订单为已付款（本插件功能）
- 4. After the user's payment is successful, the cloud receives the asynchronous callback request sent by the third-party payment. After the cloud verifies the legitimacy of the request, it executes the asynchronous callback logic of balance recharge payment success (i.e. executes `recharge` callback), and marks the order as completed Payment (this plugin function)
- 5、前端监听到付款成功事件，跳转到支付成功页，并展示广告（本插件功能）
- 5. The front end listens to the payment success event, jumps to the payment success page, and displays the advertisement (this plug-in function)
- 6、用户点击查看订单，跳转到你自己写的业务系统充值订单详情页（本插件功能）
- 6. The user clicks to view the order, and jumps to the recharge order details page of the business system written by yourself (this plug-in function)
- 7、完成
- 7. Finished

### 查询订单@get-order
### Query order @get-order

**支付组件方法形式（推荐）**
**Payment Component Method Form (recommended)**

```js
await this.$refs.uniPay.getOrder({
	out_trade_no: "2022102701100010100101001", // 插件支付单号
	await_notify: true, // 是否需要等待异步通知执行完成，若为了响应速度，可以设置为false，若需要等待异步回调执行完成，则设置为true
});
```

**云对象接口形式**
**Cloud Object Interface Form**

```js
await uniIdCo.getOrder({
  out_trade_no: "2022102701100010100101001", // 插件支付单号
  await_notify: true, // 是否需要等待异步通知执行完成，若为了响应速度，可以设置为false，若需要等待异步回调执行完成，则设置为true
});
```

**参数说明**
**Parameter Description**
			
| 参数名          | 类型     | 必填 |             说明          |
| parameter name | type | required | description |
|-----------------|---------|------|---------------------------|
| out_trade_no    | string  |  out_trade_no、transaction_id 二选一  |  插件订单号   |
| out_trade_no | string | choose one of out_trade_no and transaction_id | plug-in order number |
| transaction_id  | string  |  out_trade_no、transaction_id 二选一  |  第三方支付交易单号   |
| transaction_id | string | choose one of out_trade_no and transaction_id | third-party payment transaction number |
| await_notify    | boolean |  否  | 默认为false，是否需要等待异步通知执行完成，若为了响应速度，可以设置为false，若需要等待异步回调执行完成，则设置为true | 
| await_notify | boolean | No | The default is false, whether to wait for the completion of the asynchronous notification, if it is for the response speed, it can be set to false, if it is necessary to wait for the completion of the asynchronous callback, set it to true |

**await_notify = true 适合什么场景？**
What scenario is **await_notify = true suitable for? **

当你下一个页面展示的数据需要依赖支付异步回调内的逻辑执行完成后才可以展示时，需要设置为true。
When the data displayed on your next page needs to be displayed after the logic execution in the payment asynchronous callback is completed, it needs to be set to true.

**await_notify = false 适合什么场景？**
What scenario is **await_notify = false suitable for? **

当你下一个页面展示的数据不需要依赖支付异步回调内的逻辑执行完成后才可以展示时，可以设置为false，设置为false可以加快响应速度。
When the data displayed on your next page does not need to be displayed after the logic execution in the payment asynchronous callback is completed, you can set it to false. Setting it to false can speed up the response.

**返回值**
**return value**

| 参数名          | 类型     |              说明          |
| parameter name | type | description |
|-----------------|---------|---------------------------|
| has_paid           | boolean  |  标记用户是否已付款成功（此参数只能表示用户确实付款了，但系统的异步回调逻辑可能还未执行完成）   |
| has_paid | boolean | Marks whether the user has paid successfully (this parameter can only indicate that the user has indeed paid, but the asynchronous callback logic of the system may not be executed yet) |
| user_order_success      | boolean  | 用户异步通知逻辑是否全部执行完成，且无异常（建议前端通过此参数是否为true来判断是否支付成功）  |
| user_order_success | boolean | Whether the user asynchronous notification logic has been executed completely without exception (it is recommended that the front end judge whether the payment is successful or not by whether this parameter is true) |
| out_trade_no      | string  |  支付插件订单号  |
| out_trade_no | string | payment plugin order number |
| transaction_id      | string  |  第三方支付交易单号（只有付款成功的才会返回）  |
| transaction_id | string | Third-party payment transaction number (returned only if the payment is successful) |
| status      | int  |  当前支付订单状态 -1：已关闭 0：未支付 1：已支付 2：已部分退款 3：已全额退款  |
| status | int | current payment order status -1: closed 0: not paid 1: paid 2: partially refunded 3: fully refunded |
| pay_order      | object  |  支付订单完整信息 |
| pay_order | object | Complete information of the payment order |

### 发起退款@refund
### Initiate a refund @refund

**注意**
**Notice**

发起退款默认需要admin权限（基于uni-id用户体系登录），否则会报权限不足或缺少token。[查看uni-id介绍](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html)
Initiating a refund requires admin authority by default (login based on the uni-id user system), otherwise it will report insufficient authority or lack of token. [View uni-id introduction](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html)

当然，你也可以修改`uni-pay-co/config/permission.js`这个文件内的权限规则。
Of course, you can also modify the permission rules in the `uni-pay-co/config/permission.js` file.

**支付组件方法形式（推荐）**
**Payment Component Method Form (recommended)**

```js
await this.$refs.uniPay.refund({
	out_trade_no: "2022102701100010100101001", // 插件支付单号
});
```

**云对象接口形式**
**Cloud Object Interface Form**

```js
await uniIdCo.refund({
  out_trade_no: "2022102701100010100101001", // 插件支付单号
});
```

**参数说明**
**Parameter Description**
			
| 参数名          | 类型     | 必填 |             说明          |
| parameter name | type | required | description |
|-----------------|---------|------|---------------------------|
| out_trade_no    | string  |  out_trade_no、out_refund_no 二选一  |  插件订单号   |
| out_trade_no | string | choose one of out_trade_no and out_refund_no | plugin order number |
| out_refund_no  | string  |  out_trade_no、out_refund_no 二选一  |  插件退款订单号   |
| out_refund_no | string | out_trade_no, out_refund_no choose one | plug-in refund order number |
| refund_desc    | string |  否  | 退款描述 | 
| refund_desc | string | no | refund description |
| refund_fee    | int |  否  | 退款金，单位分 100 = 1元 | 
| refund_fee | int | No | refund fee, unit points 100 = 1 yuan |

**返回值**
**return value**

| 参数名          | 类型     |              说明          |
| parameter name | type | description |
|-----------------|---------|---------------------------|
| result           | object  |  第三方供应商返回的结果   |
| result | object | the result returned by the third-party provider |

### 查询退款@get-refund
### Query Refund @get-refund

**支付组件方法形式（推荐）**
**Payment Component Method Form (recommended)**

```js
await this.$refs.uniPay.getRefund({
	out_trade_no: "2022102701100010100101001", // 插件支付单号
});
```

**云对象接口形式**
**Cloud Object Interface Form**

```js
await uniIdCo.getRefund({
  out_trade_no: "2022102701100010100101001", // 插件支付单号
});
```

**参数说明**
**Parameter Description**
			
| 参数名          | 类型     | 必填 |             说明          |
| parameter name | type | required | description |
|-----------------|---------|------|---------------------------|
| out_trade_no    | string  |  是 |  插件订单号   |
| out_trade_no | string | yes | plugin order number |

**参数说明**
**Parameter Description**
			
| 参数名          | 类型     | 必填 |             说明          |
| parameter name | type | required | description |
|-----------------|---------|------|---------------------------|
| out_trade_no    | string  |  out_trade_no、out_refund_no 二选一  |  插件订单号   |
| out_trade_no | string | choose one of out_trade_no and out_refund_no | plugin order number |
| out_refund_no  | string  |  out_trade_no、out_refund_no 二选一  |  插件退款订单号   |
| out_refund_no | string | out_trade_no, out_refund_no choose one | plug-in refund order number |
| refund_desc    | string |  否  | 退款描述 | 
| refund_desc | string | no | refund description |
| refund_fee    | int |  否  | 退款金，单位分 100 = 1元 | 
| refund_fee | int | No | refund fee, unit points 100 = 1 yuan |

**返回值**
**return value**

| 参数名          | 类型     |              说明          |
| parameter name | type | description |
|-----------------|---------|---------------------------|
| result           | object  |  第三方供应商返回的结果   |
| result | object | the result returned by the third-party provider |
| pay_order           | object  |  支付订单信息   |
| pay_order | object | payment order information |

### 关闭订单@close-order
### Close order @close-order

一般情况下，无需调用此方法去主动关闭订单（订单若未支付，则会在一段时间后自动关闭），但你有需要主动关闭订单的场景时，可以使用此api来主动关闭订单。（只有未支付的订单才可以主动关闭）
Under normal circumstances, there is no need to call this method to actively close the order (if the order is not paid, it will be automatically closed after a period of time), but when you need to actively close the order, you can use this API to actively close the order. (Only unpaid orders can be actively closed)

**支付组件方法形式（推荐）**
**Payment Component Method Form (recommended)**

```js
await this.$refs.uniPay.closeOrder({
	out_trade_no: "2022102701100010100101001", // 插件支付单号
});
```

**云对象接口形式**
**Cloud Object Interface Form**

```js
await uniIdCo.closeOrder({
  out_trade_no: "2022102701100010100101001", // 插件支付单号
});
```

**参数说明**
**Parameter Description**
			
| 参数名          | 类型     | 必填 |             说明          |
| parameter name | type | required | description |
|-----------------|---------|------|---------------------------|
| out_trade_no    | string  |  是 |  插件订单号   |
| out_trade_no | string | yes | plugin order number |

**返回值**
**return value**

| 参数名          | 类型     |              说明          |
| parameter name | type | description |
|-----------------|---------|---------------------------|
| result           | object  |  第三方供应商返回的结果   |
| result | object | the result returned by the third-party provider |

### 获取支持的支付供应商@get-pay-provider-from-cloud
### Get supported payment providers @get-pay-provider-from-cloud

一般情况下，无需调用此api，`uni-pay` 组件内部已自动调用此api。
Under normal circumstances, there is no need to call this api, the `uni-pay` component has automatically called this api.

**支付组件方法形式（推荐）**
**Payment Component Method Form (recommended)**

```js
await this.$refs.uniPay.getPayProviderFromCloud();
```

**云对象接口形式**
**Cloud Object Interface Form**

```js
await uniIdCo.getPayProviderFromCloud();
```

**参数说明**
**Parameter Description**

该API无参数
The API has no parameters

**返回值**
**return value**

| 参数名          | 类型     |              说明          |
| parameter name | type | description |
|-----------------|---------|---------------------------|
| wxpay           | boolean  |  是否支持微信支付   |
| wxpay | boolean | Whether to support WeChat payment |
| alipay          | boolean  |  是否支持支付宝支付   |
| alipay | boolean | Whether to support Alipay payment |
| provider        | array&lt;string&gt; |  支持哪些支付供应商，如["wxpay","alipay"]   |
| provider | array&lt;string&gt; | Which payment providers are supported, such as ["wxpay","alipay"] |

### 获取支付配置内的appid@get-provider-appid
### Get the appid in the payment configuration@get-provider-appid

```js
await this.$refs.uniPay.getProviderAppId({
	provider: "wxpay",
	provider_pay_type: "jsapi",
});
```

**云对象接口形式**
**Cloud Object Interface Form**
```js
await uniIdCo.getProviderAppId({
  provider: "wxpay",
  provider_pay_type: "jsapi",
});
```

**参数说明**
**Parameter Description**
			
| 参数名          | 类型     | 必填 |             说明          |
| parameter name | type | required | description |
|-----------------|---------|------|---------------------------|
| provider        | string  |  是  |  支付供应商 如 wxpay alipay  |
| provider | string | yes | payment provider such as wxpay alipay |
| provider_pay_type  | string  |  是  |  支付供应商 如 jsapi  |
| provider_pay_type | string | yes | payment provider such as jsapi |

**返回值**
**return value**

| 参数名          | 类型     |              说明          |
| parameter name | type | description |
|-----------------|---------|---------------------------|
| appid           | string  |  appid   |

### 根据code获取openid@get-openid
### Obtain openid@get-openid according to the code

一般用于微信公众号根据网页授权回调返回的code获取用户openid
Generally used for WeChat official account to obtain user openid according to the code returned by the webpage authorization callback

**注意**
**Notice**

小程序不需要调用此方法，组件内部已自动静默获取openid
The MiniApp does not need to call this method, the openid has been automatically and silently obtained inside the component

```js
await this.$refs.uniPay.getOpenid({
	provider: "wxpay",
	code: options.code
});
```

**云对象接口形式**
**Cloud Object Interface Form**

```js
await uniIdCo.getOpenid({
  provider: "wxpay",
  code: options.code
});
```

**参数说明**
**Parameter Description**
			
| 参数名          | 类型     | 必填 |             说明          |
| parameter name | type | required | description |
|-----------------|---------|------|---------------------------|
| provider        | string  |  是  |  支付供应商 如 wxpay alipay  |
| provider | string | yes | payment provider such as wxpay alipay |
| code            | string  |  是  |  微信公众号网页授权回调返回的code  |
| code | string | yes | the code returned by the WeChat official account web page authorization callback |

**返回值**
**return value**

| 参数名          | 类型     |              说明          |
| parameter name | type | description |
|-----------------|---------|---------------------------|
| openid           | string  |  openid   |


### ios内购支付@appleiap
### ios in-app purchase payment @appleiap

**概述**
**Overview**

IAP 全称：In-App Purchase，是指苹果 App Store 的应用内购买，是苹果为 App 内购买虚拟商品或服务提供的一套交易系统。
The full name of IAP: In-App Purchase, refers to the in-app purchase of the Apple App Store, which is a set of transaction system provided by Apple for in-app purchase of virtual goods or services.

适用范围：在 App 内需要付费使用的产品功能或虚拟商品/服务，如游戏道具、电子书、音乐、视频、订阅会员、App的高级功能等需要使用 IAP，而在 App 内购买实体商品（如淘宝购买手机）或者不在 App 内使用的虚拟商品（如充话费）或服务（如滴滴叫车）则不适用于 IAP。
Scope of application: Product functions or virtual goods/services that require payment in the app, such as game props, e-books, music, videos, subscription members, advanced functions of the app, etc. need to use IAP, while purchasing physical goods in the app (such as Taobao to buy mobile phones) or virtual goods (such as recharge) or services that are not used in the App (such as Didi hailing a car) are not applicable to IAP.

简而言之，苹果规定：适用范围内的虚拟商品或服务，必须使用 IAP 进行购买支付，不允许使用支付宝、微信支付等其它第三方支付方式（包括Apple Pay），也不允许以任何方式（包括跳出App、提示文案等）引导用户通过应用外部渠道购买。
In short, Apple stipulates that for virtual goods or services within the scope of application, IAP must be used for purchase and payment. Alipay, WeChat payment and other third-party payment methods (including Apple Pay) are not allowed, nor are any methods ( Including jumping out of the app, prompt copy, etc.) to guide users to purchase through external channels of the app.

**示例代码**
**Example Code**

注意：只能使用uni-pay支付组件发起
Note: Only use the uni-pay payment component to initiate

```js
// 发起ios内购支付
// Initiate ios in-app purchase payment
this.$refs.uniPay.createOrder({
	provider: "appleiap", // 支付供应商（这里固定未appleiap，代表ios内购支付）
	order_no: "20221027011000101001010", // 业务系统订单号
	out_trade_no: "2022102701100010100101001", // 插件支付单号
	type: "appleiap", // 支付回调类型（可自定义，建议填写appleiap）
	productid: "io_dcloud_hellouniapp_pay_like6", // ios内购产品id（仅ios内购生效）
	// 自定义数据
	// custom data
	custom: {}
});
```
 
[点击查看ios内购注意事项](#tips-appleiap)
[Click to view ios in-app purchase notes](#tips-appleiap)

完整ios内购支付示例代码
Complete ios in-app purchase payment sample code

```html
<template>
	<view class="content">
		<view class="uni-list">
			<radio-group @change="applePriceChange">
				<label class="uni-list-cell" v-for="(item, index) in productList" :key="index">
					<radio :value="item.productid" :checked="item.checked" />
					<view class="price">{{item.title}} {{item.price}}元</view>
				</label>
			</radio-group>
		</view>
		<view class="uni-padding-wrap">
			<button class="btn-pay" @click="createOrder" :loading="loading" :disabled="disabled">立即支付</button>
		</view>
		
		<!-- 统一支付组件 -->
		<!-- Unified payment component -->
		<uni-pay ref="uniPay" :debug="true" :adpid="adpid" return-url="/pages/order-detail/order-detail" @mounted="onMounted" @success="onSuccess"></uni-pay>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_no: "", // 业务系统订单号（即你自己业务系统的订单表的订单号）
				out_trade_no: "", // 插件支付单号
				adpid: "1000000001", // uni-ad的广告位id
				
				loading: false, // 支付按钮是否在loading中
				disabled: true, // 支付按钮是否禁用
				productid: "", // 用户选择的商品id
				// 出售的ios内购商品列表
				// List of ios in-app purchase items for sale
				productList: [
					{
						"description": "为DCloud提供的免费软件进行赞助",
						"price": 1,
						"productid": "io_dcloud_hellouniapp_pay_like1",
						"title": "赞赏"
					},
					{
						"description": "为DCloud提供的免费软件进行赞助",
						"price": 6,
						"productid": "io_dcloud_hellouniapp_pay_like6",
						"title": "赞赏"
					}
				],
			}
		},
		onLoad: function() {
			
		},
		onShow() {
			if (this.$refs.uniPay && this.$refs.uniPay.appleiapRestore) {
				// ios内购支付漏单重试
				// ios in-app purchase payment missed order retry
				this.$refs.uniPay.appleiapRestore();
			}
		},
		onUnload() {},
		methods: {
			// 支付组件加载完毕后执行
			// Execute after the payment component is loaded
			onMounted(insideData){
				this.init();
			},
			// 初始化
			// initialization
			async init() {
				this.productList[0].checked = true;
				this.productid = this.productList[0].productid;
				this.disabled = false;
				if (this.$refs.uniPay && this.$refs.uniPay.appleiapRestore) {
					// ios内购支付漏单重试
					// ios in-app purchase payment missed order retry
					this.$refs.uniPay.appleiapRestore();
				}
			},
			/**
			 * 发起支付
			 * 在调用此api前，你应该先创建自己的业务系统订单，并获得订单号 order_no，把order_no当参数传给此api，而示例中为了简化跟支付插件无关的代码，这里直接已时间戳生成了order_no
			 */
			createOrder(){
				this.order_no = `test`+Date.now();
				this.out_trade_no = this.order_no;
				// 发起支付
				// initiate payment
				this.$refs.uniPay.createOrder({
					provider: "appleiap", // 支付供应商（这里固定未appleiap，代表ios内购支付）
					order_no: this.order_no, // 业务系统订单号（即你自己业务系统的订单表的订单号）
					out_trade_no: this.out_trade_no, // 插件支付单号
					type: "appleiap", // 支付回调类型（可自定义，建议填写appleiap）
					productid: this.productid, // ios内购产品id（仅ios内购生效）
					// 自定义数据
					// custom data
					custom: {}
				});
			},
			// 监听事件 - 支付成功
			// listen event - payment successful
			onSuccess(res){
				console.log('success: ', res);
				if (res.user_order_success) {
					// 代表用户已付款，且你自己写的回调成功并正确执行了
					// On behalf of the user has paid, and the callback written by you is successful and executed correctly
					
				} else {
					// 代表用户已付款，但你自己写的回调执行失败（通常是因为你的回调代码有问题）
					// Represents that the user has paid, but the callback you wrote yourself failed to execute (usually because of a problem with your callback code)
				
				}
			},
			
			// 监听-多选框选中的值改变
			// Listen - the selected value of the multi-select box changes
			applePriceChange(e) {
				this.productid = e.detail.value;
			},
		}
	}
</script>

<style>
	.content {
		padding: 15px;
	}

	button {
		background-color: #007aff;
		color: #ffffff;
	}

	.uni-list-cell {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px;
		border-bottom: 1px solid #eee;
	}

	.price {
		margin-left: 10px;
	}

	.btn-pay {
		margin-top: 30px;
	}
</style>

```

## 支付统计@pay-stat
## Payment Statistics @pay-stat

`uni-pay`基于`uni统计2.0`新增了支付统计。为您赋能数字化运营。
`uni-pay` adds payment statistics based on `uni-statistics 2.0`. Empowering digital operations for you.

### 接入支付统计
### Access payment statistics

`uni-admin 2.2.0`即以上版本已内置支付统计，菜单位置为`uni统计 / 支付统计`
`uni-admin 2.2.0` and above versions have built-in payment statistics, and the menu location is `uni statistics / payment statistics`

如果你当前使用的是旧版`uni-admin`，则需要先更新到新版`uni-admin`（右键admin项目根目录`package.json`，从插件市场更新，注意合并时的文件对比，如果不对比直接合并会覆盖你之前写的代码）
If you are currently using the old version of `uni-admin`, you need to update to the new version of `uni-admin` first (right-click `package. Contrasted with direct merging which overwrites your previously written code)

同时新建一个空的json文件，复制下面的内容到新建的json文件中，最后去`uniCloud控制台`的`opendb-admin-menus`表手动导入json文件
At the same time, create an empty json file, copy the following content into the newly created json file, and finally go to the `opendb-admin-menus` table of `uniCloud console` to manually import the json file

```json
{"menu_id": "uni-stat-pay","name": "支付统计","icon": "uni-icons-circle","url": "","sort": 2122,"parent_id": "uni-stat","permission": [],"enable": true,"create_date": 1667386977981}
{"menu_id": "uni-stat-pay-overview","name": "概况","icon": "","url": "/pages/uni-stat/pay-order/overview/overview","sort": 21221,"parent_id": "uni-stat-pay","permission": [],"enable": true,"create_date": 1667387038602}
{"menu_id": "uni-stat-pay-funnel","name": "漏斗分析","icon": "","url": "/pages/uni-stat/pay-order/funnel/funnel","sort": 21222,"parent_id": "uni-stat-pay","permission": [],"enable": true,"create_date": 1668430092890}
{"menu_id": "uni-stat-pay-ranking","name": "价值用户排行","icon": "","url": "/pages/uni-stat/pay-order/ranking/ranking","sort": 21223,"parent_id": "uni-stat-pay","permission": [],"enable": true,"create_date": 1668430128302}
```

### 收款趋势
### Payment trend

![](https://web-assets.dcloud.net.cn/unidoc/zh/%E6%94%AF%E4%BB%98%E7%BB%9F%E8%AE%A101.png)

**概况**
**Overview**

在`概况`栏目中可以直观的看到今日、昨日、前日、本周、本月、本季度、本年度、累计数据。
In the `Overview` column, you can intuitively see the data of today, yesterday, the day before yesterday, this week, this month, this quarter, this year, and the cumulative data.

![](https://web-assets.dcloud.net.cn/unidoc/zh/%E6%94%AF%E4%BB%98%E7%BB%9F%E8%AE%A101-01.png)

**名词解释：**
**Glossary:**

- 下单金额（GMV）：统计时间内，下单金额（包含未支付订单和退款订单）。
- Order Amount (GMV): The order amount (including unpaid orders and refunded orders) within the statistics period.
- 收款金额（GPV）：统计时间内，成功支付的订单金额（包含退款订单）。
- Payment Amount (GPV): The amount of orders successfully paid (including refunded orders) within the statistics period.
- 退款金额：统计时间内，发生退款的金额。
- Refund Amount: The amount of refunds that occurred within the statistics period.
- 实收金额：实收金额=收款金额-退款金额
- Actual received amount: actual received amount = received amount - refund amount


**今日数据**
**Today's data**

在`今日数据`栏目中可以看到更多今日统计数据。
You can see more today's statistics in the `Statistics of the day` column.

![](https://web-assets.dcloud.net.cn/unidoc/zh/%E6%94%AF%E4%BB%98%E7%BB%9F%E8%AE%A101-02.png)

**名词解释：**
**Glossary:**

- 订单金额：
- order amount:
	+ 下单：今日下单金额（包含未支付订单和退款订单）。
	+ Order: Today's order amount (including unpaid orders and refunded orders).
	+ 收款：今日成功支付的订单金额（包含退款订单）。
	+ Collection: The amount of orders successfully paid today (including refunded orders).
	+ 退款：今日发生退款的金额。
	+ Refunds: The amount of refunds that occurred today.
- 订单数量：
- quantity of order:
	+ 下单：今日成功下单的订单笔数（包含未支付订单和退款订单）。
	+ Orders: The number of orders successfully placed today (including unpaid orders and refunded orders).
	+ 收款：今日成功支付的订单数（包含退款订单）。
	+ Receipts: The number of orders successfully paid today (including refunded orders).
	+ 退款：今日发生退款的订单数。
	+ Refunds: The number of orders refunded today.
- 用户数量：
- amount of users:
	+ 下单：今日成功下单的客户数（包含未支付订单和退款订单）。
	+ Orders: The number of customers who successfully placed orders today (including unpaid orders and refunded orders).
	+ 收款：今日成功支付的用户数（包含退款订单）。
	+ Receipts: The number of users who have successfully paid today (including refund orders).
	+ 退款：今日发生退款的用户数。
	+ Refunds: The number of users who received refunds today.
- 设备数量：
- Equipment Quantity:
	+ 下单：今日成功下单的设备数（包含未支付订单和退款订单）。
	+ Orders: The number of devices successfully placed today (including unpaid orders and refunded orders).
	+ 收款：今日成功支付的设备数（包含退款订单）。
	+ Receipts: The number of devices successfully paid for today (including refunded orders).
	+ 退款：今日发生退款的设备数。
	+ Refunds: The number of devices for which refunds occurred today.

**趋势图**
**Trend**

在`趋势图`栏目中以`天维度`、`月维度`、`季维度`、`年维度`进行趋势统计。可以直观的看到收入的增长趋势。
In the column of `Trend Chart`, carry out trend statistics by `Day Dimension`, `Month Dimension`, `Quarter Dimension`, `Year Dimension`. You can intuitively see the growth trend of income.

![](https://web-assets.dcloud.net.cn/unidoc/zh/%E6%94%AF%E4%BB%98%E7%BB%9F%E8%AE%A101-03.png)

### 转换漏斗分析
### Conversion Funnel Analysis

可以为您分析指定时间段的支付转化率，同时展示支付转化率趋势图。
It can analyze the payment conversion rate of the specified time period for you, and display the payment conversion rate trend graph at the same time.

![](https://web-assets.dcloud.net.cn/unidoc/zh/%E6%94%AF%E4%BB%98%E7%BB%9F%E8%AE%A102.png)

**名词解释：**
**Glossary:**

- 活跃设备数：包含未登录和已登录的用户数量
- Number of active devices: including the number of users who are not logged in and logged in
- 活跃用户数：登录用户的数量
- Number of active users: the number of logged-in users
- 支付用户数：至少有一笔成功支付订单的用户
- Number of payment users: users who have at least one successful payment order
- 用户转化率：用户转化率=活跃用户数/活跃设备数
- User conversion rate: User conversion rate = number of active users/number of active devices
- 支付转化率：支付转化率=支付用户数/活跃用户数
- Payment conversion rate: payment conversion rate = number of paying users/number of active users

### 价值用户排行
### Value User Ranking

可以为您快速筛选高价值用户，高复购率用户。
It can quickly screen high-value users and users with high repurchase rate for you.

![](https://web-assets.dcloud.net.cn/unidoc/zh/%E6%94%AF%E4%BB%98%E7%BB%9F%E8%AE%A103.png)

### 订单明细
### Order Details

可以搜索、查看订单详情
Can search and view order details

![](https://web-assets.dcloud.net.cn/unidoc/zh/%E6%94%AF%E4%BB%98%E7%BB%9F%E8%AE%A104.png)


## 注意事项@tips
## Precautions @tips

### 微信公众号@tips-wxpay-jsapi
### WeChat public account @tips-wxpay-jsapi

h5的路由模式必须配置为 `history`，因为微信公众号登录的回调地址不支持 `hash` 模式。
The routing mode of h5 must be configured as `history`, because the callback address of WeChat official account login does not support `hash` mode.

同时微信公众号开发调试比较麻烦，麻烦在于网页授权需要添加域名白名单，用localhost或用ip访问本地是无法获取到微信的code的，这样也就无法获取openid，导致无法支付。
At the same time, the development and debugging of the WeChat official account is more troublesome. The trouble is that the domain name whitelist needs to be added for web page authorization. If you use localhost or ip to access the local area, you cannot obtain the WeChat code, so you cannot obtain the openid, resulting in payment failure.

操作步骤
Steps

- 1、手机和电脑连接在同一个局域网（路由器WiFi下）
- 1. The mobile phone and the computer are connected to the same LAN (under the router WiFi)
- 2、查看自己电脑的局域网ip地址，比如为192.168.1.8
- 2. Check the LAN ip address of your computer, such as 192.168.1.8
- 3、假设你的线上域名是（必须要有自己的域名）www.abc.com 则设置 test.abc.com 先解析到你的前端托管域名上（为了让微信验证域名通过，因为验证域名时，需要上传微信指定的文件到你的前端托管）。
- 3. Assuming that your online domain name is (you must have your own domain name) www.abc.com, then set test.abc.com to resolve to your front-end hosting domain name first (in order to allow WeChat to verify the domain name, because the verification domain name , you need to upload the files specified by WeChat to your front-end hosting).
- 4、进入公众号后台，设置与开发 -> 公众号设置 -> 设置网页授权域名，添加 test.abc.com
- 4. Enter the background of the official account, set and develop -> official account settings -> set the authorized domain name of the webpage, add test.abc.com
- 5、成功添加后，再重新设置 test.abc.com 解析到你电脑的局域网ip，如192.168.1.8
- 5. After successful addition, reset test.abc.com to resolve to your computer's LAN ip, such as 192.168.1.8
- 6、过一段时间（大概20分钟后，更换域名解析生效需要时间，这20分钟内千万不要再去访问http://test.abc.com）
- 6. After a period of time (about 20 minutes later, it will take time to change the domain name resolution to take effect, so please do not visit http://test.abc.com again within 20 minutes)
- 7、20分钟后，访问 http://test.abc.com 此时就等于访问了 http://192.168.1.8，这样你的手机就用 http://test.abc.com 来访问你的项目
- 7. After 20 minutes, visiting http://test.abc.com is equivalent to visiting http://192.168.1.8, so your mobile phone will use http://test.abc.com to visit your project
- 8、可以正常获取到openid了，就可以正常进行本地微信公众号支付测试了（不然每次都要上传到服务器测试）。
- 8. Once the openid can be obtained normally, the payment test of the local WeChat official account can be performed normally (otherwise, it needs to be uploaded to the server for testing every time).

当用自定义域名时，还需要在项目根目录添加 `vue.config.js` 文件，内容如下：
When using a custom domain name, you also need to add a `vue.config.js` file in the project root directory, the content is as follows:

```js
module.exports = {
	devServer: {
		disableHostCheck: true, // 忽略域名检查
		port: 80, // 设置80端口为项目启动端口
	}
}
```

### 微信小程序@tips-wxpay-mp
### WeChat MiniApp@tips-wxpay-mp

微信小程序支付除了配置uni-pay的支付配置外，还需要配置 `manifest.json` 内的 微信小程序appid，如下图所示。
In addition to configuring the payment configuration of uni-pay for WeChat MiniApp payment, you also need to configure the WeChat MiniApp appid in `manifest.json`, as shown in the figure below.

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-7.png)

如果报如下错误，请点[这里](#question-mp-weixin-domain)
If the following error is reported, please click [here](#question-mp-weixin-domain)

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-32.png)

### APP支付@tips-app
### APP payment @tips-app

APP支付除了配置uni-pay的支付配置外，还需要打包时添加支付模块，如下图所示。
In addition to configuring the payment configuration of uni-pay for APP payment, it is also necessary to add a payment module when packaging, as shown in the figure below.

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-8.png)

同时，还需要打自定义基座（包名需要和开放平台下填写的一致），且你在开放平台下的这个应用必须通过审核才可以。（比如微信开放平台下的APP应用显示通过审核才可以）
At the same time, you also need to create a custom base (the package name needs to be the same as that filled in under the open platform), and your application under the open platform must pass the review. (For example, the APP application under the WeChat open platform only shows that it has passed the review)

### ios内购支付@tips-appleiap
### ios in-app purchase payment @tips-appleiap

1. ios内购支付需勾选App模块配置中的Apple应用内支付
1. For ios in-app purchase payment, you need to check the Apple in-app payment in the App module configuration
2. 需要打ios自定义基座
2. Need to play ios custom dock
3. 需要注册ios开发者账号，且交了年费（688元/年）
3. You need to register an ios developer account and pay an annual fee (688 yuan/year)
4. 需要在ios开发者平台添加内购商品，并获得商品id
4. It is necessary to add in-app purchase products on the ios developer platform and obtain the product id
5. ios沙箱测试时，需要先在ios开发者平台添加沙箱测试账号，同时你的测试手机上需要登录ios沙箱账号
5. When testing in the ios sandbox, you need to add a sandbox test account on the ios developer platform first, and you need to log in to the ios sandbox account on your test phone
6. 目前hbx版本热刷新会导致ios支付无法正常调用，因此每次修改完代码保存后，需要先关闭手机App，然后hbx重启项目，再打开手机app。（后面HBX会修复此问题）
6. At present, the hot refresh of the hbx version will cause the ios payment to fail to be called normally. Therefore, after saving the code every time, you need to close the mobile app first, then restart the project in hbx, and then open the mobile app. (HBX will fix this problem later)

## 全局错误码@errorcode
## Global error code @errorcode
	
| 错误模块 |    错误码    |             说明          |
| Error Module | Error Code | Description |
|---------|-------------|---------------------------|
| uni-pay |    50403    | 当前登录用户的角色权限不足 |
| uni-pay | 50403 | The current login user has insufficient role permissions |
| uni-pay |    51001    | 支付单号（out_trade_no）不能为空 |
| uni-pay | 51001 | Payment order number (out_trade_no) cannot be empty |
| uni-pay |    51002    | code不能为空 |
| uni-pay | 51002 | code cannot be empty |
| uni-pay |    51003    | 订单号（order_no）不能为空 |
| uni-pay | 51003 | The order number (order_no) cannot be empty |
| uni-pay |    51004    | 回调类型（type）不能为空，如设置为goods代表商品订单 |
| uni-pay | 51004 | The callback type (type) cannot be empty, such as setting goods to represent a commodity order |
| uni-pay |    51005    | 支付金额（total_fee）必须为正整数（>0的整数）（注意：100=1元） |
| uni-pay | 51005 | The payment amount (total_fee) must be a positive integer (integer > 0) (Note: 100=1 yuan) |
| uni-pay |    51006    | 支付描述（description）不能为空 |
| uni-pay | 51006 | Payment description (description) cannot be empty |
| uni-pay |    51007    | 支付供应商（provider）不能为空 |
| uni-pay | 51007 | payment provider (provider) cannot be empty |
| uni-pay |    51008    | 未获取到 clientInfo |
| uni-pay | 51008 | ClientInfo not obtained |
| uni-pay |    51009    | 未获取到 cloudInfo |
| uni-pay | 51009 | cloudInfo not obtained |
| uni-pay |    52001    | 查询的支付订单不存在 |
| uni-pay | 52001 | The queried payment order does not exist |
| uni-pay |    52002    | 未配置正确的异步回调URL |
| uni-pay | 52002 | The correct asynchronous callback URL is not configured |
| uni-pay |    53001    | 获取支付信息失败（具体信息以控制台打印的日志为准） |
| uni-pay | 53001 | Failed to obtain payment information (for specific information, refer to the log printed on the console) |
| uni-pay |    53002    | 退款失败（具体信息以控制台打印的日志为准） |
| uni-pay | 53002 | Refund failed (for specific information, please refer to the log printed on the console) |
| uni-pay |    53003    | 查询退款信息失败（具体信息以控制台打印的日志为准）  |
| uni-pay | 53003 | Failed to query refund information (for specific information, please refer to the log printed on the console) |
| uni-pay |    53004    | 关闭订单失败（具体信息以控制台打印的日志为准）  |
| uni-pay | 53004 | Failed to close the order (for details, please refer to the log printed on the console) |
| uni-pay |    53005    | 证书错误，请检查支付证书 |
| uni-pay | 53005 | Certificate error, please check the payment certificate |

返回值示例
return value example

```json
{
	"errMsg": "支付单号（out_trade_no）不能为空",
	"errCode": 51001,
	"errSubject": "uni-pay"
}
```

## 常见问题@question
## FAQ @question

### 老项目如何升级到uni-pay 2
### How to upgrade old projects to uni-pay 2

`uni-pay 2` 仍内置了uni-pay公共模块，向下兼容`uni-pay 1.x`，即从`uni-pay 1.x`可以一键升级到`uni-pay 2.x`，且不会对你的老项目造成影响。
`uni-pay 2` still has a built-in uni-pay public module, which is backward compatible with `uni-pay 1.x`, that is, one-click upgrade from `uni-pay 1.x` to `uni-pay 2.x` , and will not affect your old projects.

### 发起支付时报数据库表不存在
### When the payment is initiated, the database table does not exist

支付插件需要创建支付相关的表后才能正常运行。[查看相关的数据库表](#database)
The payment plugin needs to create payment-related tables before it can work properly. [View related database tables](#database)

### 支付账号如何申请
### How to apply for a payment account

本插件对接的支付渠道是微信和支付宝官方渠道
The payment channel connected to this plug-in is the official channel of WeChat and Alipay

**微信支付**
**WeChat payment**

申请地址 [https://pay.weixin.qq.com/index.php/apply/applyment_home/guide_normal](https://pay.weixin.qq.com/index.php/apply/applyment_home/guide_normal)
Application address [https://pay.weixin.qq.com/index.php/apply/applyment_home/guide_normal](https://pay.weixin.qq.com/index.php/apply/applyment_home/guide_normal)

申请指引 [https://pay.weixin.qq.com/static/applyment_guide/applyment_index.shtml](https://pay.weixin.qq.com/static/applyment_guide/applyment_index.shtml)
Application Guide [https://pay.weixin.qq.com/static/applyment_guide/applyment_index.shtml](https://pay.weixin.qq.com/static/applyment_guide/applyment_index.shtml)

**支付宝**
**Alipay**

申请地址 [https://open.alipay.com](https://open.alipay.com)
Application address [https://open.alipay.com](https://open.alipay.com)

申请指引 [https://opendocs.alipay.com/common/02asmu](https://opendocs.alipay.com/common/02asmu)
Application Guidelines [https://opendocs.alipay.com/common/02asmu](https://opendocs.alipay.com/common/02asmu)

**注意**
**Notice**

支付账号申请需要企业资质（个体工商户也可以，但不可以是个人资质，需要有营业执照，银行对公账户）。
The application for a payment account requires enterprise qualifications (individual industrial and commercial households are also allowed, but personal qualifications are not allowed, business licenses and bank corporate accounts are required).

### 如何获得插件需要的密钥参数@get-config-help
### How to get the key parameters required by the plugin @get-config-help

**微信支付**
**WeChat payment**

[微信支付参数和证书生成教程](https://docs.qq.com/doc/DWUpGTW1kSUdpZGF5)
[WeChat payment parameters and certificate generation tutorial](https://docs.qq.com/doc/DWUpGTW1kSUdpZGF5)

- pfx：微信支付v2需要用到的证书，是一个后缀名为`.p12`的文件，如果你的`.p12`文件不是`apiclient_cert.p12`，则将它改名成`apiclient_cert.p12`，并复制到 `uni-config-center/uni-pay/wxpay/` 目录下
- pfx: The certificate needed for WeChat payment v2 is a file with the suffix `.p12`, if your `.p12` file is not `apiclient_cert.p12`, then rename it to `apiclient_cert.p12`, And copy it to `uni-config-center/uni-pay/wxpay/` directory
- appCertPath：微信支付v3需要用到的证书，是一个名为`apiclient_cert.pem`的文件，将它复制到 `uni-config-center/uni-pay/wxpay/` 目录下
- appCertPath: The certificate needed for WeChat payment v3 is a file named `apiclient_cert.pem`, copy it to the `uni-config-center/uni-pay/wxpay/` directory
- appPrivateKeyPath：微信支付v3需要用到的证书，是一个名为`apiclient_key.pem`的文件，将它复制到 `uni-config-center/uni-pay/wxpay/` 目录下
- appPrivateKeyPath: The certificate needed for WeChat Pay v3 is a file named `apiclient_key.pem`, copy it to the `uni-config-center/uni-pay/wxpay/` directory

**支付宝**
**Alipay**

[支付宝支付证书生成教程](https://docs.qq.com/doc/DWVBlVkZ1Z21SZFpS)
[Alipay Payment Certificate Generation Tutorial](https://docs.qq.com/doc/DWVBlVkZ1Z21SZFpS)

- privateKey：支付宝商户私钥
- privateKey: Alipay merchant private key
- appCertPath：支付宝商户公钥路径，是一个后缀名为`appCertPublicKey.crt`的文件，将它复制到 `uni-config-center/uni-pay/alipay/` 目录下
- appCertPath: Alipay merchant public key path, which is a file with the suffix `appCertPublicKey.crt`, copy it to the `uni-config-center/uni-pay/alipay/` directory
- alipayPublicCertPath：支付宝商户公钥路径，是一个后缀名为`alipayCertPublicKey_RSA2.crt`的文件，将它复制到 `uni-config-center/uni-pay/alipay/` 目录下
- alipayPublicCertPath: Alipay merchant public key path, which is a file with the suffix `alipayCertPublicKey_RSA2.crt`, copy it to the `uni-config-center/uni-pay/alipay/` directory
- alipayRootCertPath：支付宝根证书路径，是一个后缀名为`alipayRootCert.crt`的文件，将它复制到 `uni-config-center/uni-pay/alipay/` 目录下
- alipayRootCertPath: Alipay root certificate path, which is a file with the suffix `alipayRootCert.crt`, copy it to the `uni-config-center/uni-pay/alipay/` directory

### 微信小程序真机报fail url not in domain list错误@question-mp-weixin-domain
### Wechat MiniApp real machine reports fail url not in domain list error @question-mp-weixin-domain

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-32.png)

这是由于云开发的域名没有添加到微信小程序域名白名单导致的，需要去微信小程序后台，添加以下域名到微信小程序域名白名单
This is because the domain name developed by the cloud has not been added to the domain name whitelist of the WeChat MiniApp. You need to go to the background of the WeChat MiniApp and add the following domain names to the domain name whitelist of the WeChat MiniApp.

```
https://api.next.bspapp.com;https://api.bspapp.com;https://tcb-api.tencentcloudapi.com;
```

![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-pay-31.png)

**添加完域名后，一定要重启微信开发者工具，然后去手机微信里删除最近使用的小程序（这一步很关键），最后重新扫二维码进入小程序。**
**After adding the domain name, be sure to restart the WeChat developer tools, then delete the recently used MiniApp in the mobile phone WeChat (this step is critical), and finally scan the QR code to enter the MiniApp. **
