> 注意：uni-pay2.0 插件市场还未发布，即将发布，敬请期待！
> 本文档适用于`uni-pay 2.0.0`及以上版本，需 HBuilderX 3.6.5 及以上版本。旧版本文档请访问：[uni-pay 1.x 文档](unipay.md)

# uni-pay 2.x

## 简介@introduction

大部分应用，都要开发支付功能，如微信支付、支付宝支付，其中包含发起支付、支付状态查询、支付异步回调、发起退款、退款状态查询、支付统计等众多功能，从前端到后端都需要。

为什么不能有一个开源的通用项目，避免大家的重复开发呢？

`uni-pay`应需而生。

之前版本的`uni-pay 1.x`仅仅只是一个公共模块，它为`uniCloud`开发者提供了简单、易用、统一的支付能力封装。让开发者无需研究支付宝、微信等支付平台的后端开发、无需为它们编写不同代码，拿来即用，屏蔽差异。

但开发者还是需要自己编写云函数或云对象，来对接`uni-pay`公共模块的接口，因此还是有一定的开发难度和工作量的，特别对于新手来说，门槛还是太高了。

那么到底有没有更方便的开发方式，做到开发者连云对象、页面都不需要写，你只需要在前端放一个支付组件就能完成支付的整个流程呢？

答案是有的，所以 `uni-pay 2.x` 诞生了。

**注意：`uni-pay 2.x`向下兼容`uni-pay 1.x`，即从`uni-pay 1.x`可以一键升级到`uni-pay 2.x`，且不会对你的老项目造成影响。**

开发者在项目中引入 `uni-pay` 后，微信支付、支付宝支付等功能无需自己再开发。由于源码的开放性和层次结构清晰，有二次开发需求也很方便调整。

> 插件市场地址：[https://ext.dcloud.net.cn/plugin?name=uni-pay](https://ext.dcloud.net.cn/plugin?name=uni-pay)

`uni-pay` 的功能包括：

- 页面
	+ 支付收银台弹窗组件 [组件详情](#uni-pay-component)
	+ 支付成功结果页（可配置uni-ad广告，增加开发者收益）[uni-AD 广告联盟](https://uniad.dcloud.net.cn/login)

- 云对象（[uni-pay-co](#uni-pay-co)）
	+ 微信支付
		+ 微信APP支付 
		+ 微信小程序支付
		+ 微信公众号支付
		+ 微信手机外部浏览器H5支付
		+ 微信PC扫码支付
	+ 支付宝支付
		+ 支付宝APP支付 
		+ 支付宝小程序支付
		+ 支付宝手机外部浏览器H5支付（支持在微信APP的H5页面中使用支付宝支付）
		+ 支付宝PC扫码支付
	+ 通用接口
		+ 支付异步回调
		+ 查询订单
		+ 发起退款
		+ 查询退款
		+ 关闭订单
		+ 获取当前支持的支付方式
		+ 获取当前支付用户的openid
	+ 支付统计（未上线，敬请期待）
		+ 概况
		+ 漏斗分析
		+ 价值用户排行
		+ 订单明细

## 目录结构@catalogue

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

完整的uni-app目录结构[详情查看](https://uniapp.dcloud.net.cn/frame?id=%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)

## 示例项目运行教程@rundemo

在对接自己的项目之前，建议先跑通示例项目，能跑通示例项目，代表你的配置和证书一定是正确的，然后再将`uni-pay`集成到你自己的项目中。

**示例项目运行步骤**

* 1、从插件市场导入`uni-pay`示例项目。[前往插件市场](https://ext.dcloud.net.cn/plugin?name=uni-pay)

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/ea3b48ad-6b97-4d36-b569-8fb360afbf3e.png)

* 2、打开`uni-pay`配置文件，配置文件地址: `uniCloud/cloudfunctions/common/uni-config-center/uni-pay/config.js` [查看支付配置介绍](#config)

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/59d5f656-bac8-4504-9584-719e17d1a52a.png)

* 3、上传公共模块 `uni-config-center`（右键，上传公共模块，每次修改了支付配置，都需要重新上传此模块才会生效）
* 4、上传公共模块 `uni-pay`（右键，上传公共模块）
* 5、上传云对象 `uni-pay-co`（右键，上传部署）
* 6、启动项目，点击唤起收银台支付，如果可以正常支付，代表示例项目运行成功，可以开始对接自己的项目了。 [对接自己项目](#install)

## 配置@config

### 完整支付配置示例@config-demo

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	"notifyUrl": {
		// 本地开发环境-支付回调地址
		"b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://b267e273-19a7-4288-99c7-f6f27f9c5b77.bspapp.com/uni-pay-co",
		// 线上正式环境-支付回调地址
		"499e2a37-0c77-418a-82aa-3e5820ecb057": "https://499e2a37-0c77-418a-82aa-3e5820ecb057.bspapp.com/uni-pay-co",
	},
	"notifyKey":"5FB2CD73C7B53918728417C50762E6D45FB2CD73C7B53918728417C50762E6D4", // 跨云函数通信时的加密密钥，建议手动改下，不要使用默认的密钥，长度保持在64位以上即可
	// 微信支付相关
	"wxpay": {
		"enable": true, // 是否启用微信支付
		// 微信 - 小程序支付
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
	"alipay": {
		"enable": true, // 是否启用支付宝支付
		// 支付宝 - 小程序支付配置
		"mp": {
			"appId": "", // 支付宝小程序appid
			"privateKey": "", // 支付宝商户私钥
			"appCertPath": path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
			"alipayPublicCertPath": path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
			"alipayRootCertPath": path.join(__dirname, 'alipay/alipayRootCert.crt'), // 支付宝根证书路径
		},
		// 支付宝 - APP支付配置
		"app": {
			"appId": "", // 支付宝开放平台下应用的appid
			"privateKey": "", // 支付宝商户私钥
			"appCertPath": path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
			"alipayPublicCertPath": path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
			"alipayRootCertPath": path.join(__dirname, 'alipay/alipayRootCert.crt'), // 支付宝根证书路径
		},
		// 支付宝 - H5支付配置（包含：网站二维码、手机H5，需申请支付宝当面付接口权限）
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

如果你对支付配置中各参数如何获取有疑问，请点击[获取支付配置帮助](#get-config-help)

**注意**

微信支付同时支持V2版本和V3版本

以微信小程序支付为例

**V2版本**

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

对应支付配置的节点是 `notifyUrl`

**示例**

```js
// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
"notifyUrl": {
	// 本地开发环境-支付回调地址
	"b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://b267e273-19a7-4288-99c7-f6f27f9c5b77.bspapp.com/uni-pay-co",
	// 线上正式环境-支付回调地址
	"499e2a37-0c77-418a-82aa-3e5820ecb057": "https://499e2a37-0c77-418a-82aa-3e5820ecb057.bspapp.com/uni-pay-co",
},
```

格式为 "服务空间ID": "URL化地址"

**服务空间ID如何获取？**

[点击此处进入服务空间列表](https://unicloud.dcloud.net.cn/home)，找到你项目用的服务空间，复制其服务空间ID

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/2bcfdc2d-3273-448a-a767-b590967032c7.png)

**URL化地址如何获取？**

[点击此处进入服务空间列表](https://unicloud.dcloud.net.cn/home)，找到你项目用的服务空间，点击服务空间名称进入空间详情页，点击左侧菜单【云函数/云对象】- 点击【uni-pay-co】云对象右侧的【详情】按钮

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/6d620a14-81f0-4ded-9a82-8ccf635908c4.png)

进入详情后，点下面的【复制路径】，复制的内容就是【URL化地址】

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/70e629bb-7a8a-401b-aaed-204bcaf17087.png)

### 只配置部分支付示例@config-part

#### 微信APP支付@config-wxpay-app

对应支付配置的节点是 `wxpay.app`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	"notifyUrl": {
		// 本地开发环境-支付回调地址
		"b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://b267e273-19a7-4288-99c7-f6f27f9c5b77.bspapp.com/uni-pay-co",
		// 线上正式环境-支付回调地址
		"499e2a37-0c77-418a-82aa-3e5820ecb057": "https://499e2a37-0c77-418a-82aa-3e5820ecb057.bspapp.com/uni-pay-co",
	},
	// 微信支付相关
	"wxpay": {
		"enable": true, // 是否启用微信支付
		// 微信 - APP支付
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

对应支付配置的节点是 `wxpay.mp`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	"notifyUrl": {
		// 本地开发环境-支付回调地址
		"b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://b267e273-19a7-4288-99c7-f6f27f9c5b77.bspapp.com/uni-pay-co",
		// 线上正式环境-支付回调地址
		"499e2a37-0c77-418a-82aa-3e5820ecb057": "https://499e2a37-0c77-418a-82aa-3e5820ecb057.bspapp.com/uni-pay-co",
	},
	// 微信支付相关
	"wxpay": {
		"enable": true, // 是否启用微信支付
		// 微信 - 小程序支付
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

对应支付配置的节点是 `wxpay.jsapi`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	"notifyUrl": {
		// 本地开发环境-支付回调地址
		"b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://b267e273-19a7-4288-99c7-f6f27f9c5b77.bspapp.com/uni-pay-co",
		// 线上正式环境-支付回调地址
		"499e2a37-0c77-418a-82aa-3e5820ecb057": "https://499e2a37-0c77-418a-82aa-3e5820ecb057.bspapp.com/uni-pay-co",
	},
	// 微信支付相关
	"wxpay": {
		"enable": true, // 是否启用微信支付
		// 微信 - 公众号支付
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

对应支付配置的节点是 `wxpay.mweb`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	"notifyUrl": {
		// 本地开发环境-支付回调地址
		"b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://b267e273-19a7-4288-99c7-f6f27f9c5b77.bspapp.com/uni-pay-co",
		// 线上正式环境-支付回调地址
		"499e2a37-0c77-418a-82aa-3e5820ecb057": "https://499e2a37-0c77-418a-82aa-3e5820ecb057.bspapp.com/uni-pay-co",
	},
	// 微信支付相关
	"wxpay": {
		"enable": true, // 是否启用微信支付
		// 微信 - 手机外部浏览器H5支付
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

对应支付配置的节点是 `wxpay.native`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	"notifyUrl": {
		// 本地开发环境-支付回调地址
		"b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://b267e273-19a7-4288-99c7-f6f27f9c5b77.bspapp.com/uni-pay-co",
		// 线上正式环境-支付回调地址
		"499e2a37-0c77-418a-82aa-3e5820ecb057": "https://499e2a37-0c77-418a-82aa-3e5820ecb057.bspapp.com/uni-pay-co",
	},
	// 微信支付相关
	"wxpay": {
		"enable": true, // 是否启用微信支付
		// 微信 - 扫码支付
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

对应支付配置的节点是 `alipay.app`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	"notifyUrl": {
		// 本地开发环境-支付回调地址
		"b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://b267e273-19a7-4288-99c7-f6f27f9c5b77.bspapp.com/uni-pay-co",
		// 线上正式环境-支付回调地址
		"499e2a37-0c77-418a-82aa-3e5820ecb057": "https://499e2a37-0c77-418a-82aa-3e5820ecb057.bspapp.com/uni-pay-co",
	},
	// 支付宝相关（证书记得选java版本）
	"alipay": {
		"enable": true, // 是否启用支付宝支付
		// 支付宝 - APP支付配置
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

对应支付配置的节点是 `alipay.mp`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	"notifyUrl": {
		// 本地开发环境-支付回调地址
		"b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://b267e273-19a7-4288-99c7-f6f27f9c5b77.bspapp.com/uni-pay-co",
		// 线上正式环境-支付回调地址
		"499e2a37-0c77-418a-82aa-3e5820ecb057": "https://499e2a37-0c77-418a-82aa-3e5820ecb057.bspapp.com/uni-pay-co",
	},
	// 支付宝相关（证书记得选java版本）
	"alipay": {
		"enable": true, // 是否启用支付宝支付
		// 支付宝 - 小程序支付配置
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

对应支付配置的节点是 `alipay.native`（和PC扫码配置节点一样）

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	"notifyUrl": {
		// 本地开发环境-支付回调地址
		"b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://b267e273-19a7-4288-99c7-f6f27f9c5b77.bspapp.com/uni-pay-co",
		// 线上正式环境-支付回调地址
		"499e2a37-0c77-418a-82aa-3e5820ecb057": "https://499e2a37-0c77-418a-82aa-3e5820ecb057.bspapp.com/uni-pay-co",
	},
	// 支付宝相关（证书记得选java版本）
	"alipay": {
		"enable": true, // 是否启用支付宝支付
		// 支付宝 - H5支付配置（包含：网站二维码、手机H5，需申请支付宝当面付接口权限）
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

对应支付配置的节点是 `alipay.native`

```js
const fs = require('fs');
const path = require('path')
module.exports = {
	// 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
	"notifyUrl": {
		// 本地开发环境-支付回调地址
		"b267e273-19a7-4288-99c7-f6f27f9c5b77": "https://b267e273-19a7-4288-99c7-f6f27f9c5b77.bspapp.com/uni-pay-co",
		// 线上正式环境-支付回调地址
		"499e2a37-0c77-418a-82aa-3e5820ecb057": "https://499e2a37-0c77-418a-82aa-3e5820ecb057.bspapp.com/uni-pay-co",
	},
	// 支付宝相关（证书记得选java版本）
	"alipay": {
		"enable": true, // 是否启用支付宝支付
		// 支付宝 - H5支付配置（包含：网站二维码、手机H5，需申请支付宝当面付接口权限）
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


## 安装到自己项目教程@install

在对接自己的项目之前，建议先[跑通示例项目](#rundemo)，能跑通示例项目，代表你的配置和证书一定是正确的，然后再将`uni-pay`集成到你自己的项目中。

**安装步骤**

* 1、从插件市场导入`uni-pay`插件到你自己的项目。[前往插件市场](https://ext.dcloud.net.cn/plugin?name=uni-pay)

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/88b4e923-9015-4469-800c-0ff4881e9aae.png)

* 2、复制你刚运行的示例项目中的`uni-pay`配置文件，配置文件地址: `uniCloud/cloudfunctions/common/uni-config-center/uni-pay/config.js`到你的项目中 [查看支付配置介绍](#config)

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/59d5f656-bac8-4504-9584-719e17d1a52a.png)

* 3、上传公共模块 `uni-config-center`（右键，上传公共模块，每次修改了支付配置，都需要重新上传此模块才会生效）
* 4、上传公共模块 `uni-pay`（右键，上传公共模块）
* 5、上传云对象 `uni-pay-co`（右键，上传部署）
* 6、安装完成

## 快速上手 - 前端@quickly-pages

前端调用支付时，只需要在 `template` 内放一个 `uni-pay` 组件标签即可，如下

```html
	<uni-pay ref="uniPay"></uni-pay>
```

### uni-pay组件@uni-pay-component

**属性**

| 属性名          | 说明                           | 类型    | 默认值  | 可选值 |
|-----------------|-------------------------------|---------|--------|-------|
| adpid           | uni-ad的广告位ID，若填写，则会在支付成功结果页展示广告（可以增加开发者广告收益）  | string | -  | - |
| returnUrl       | 支付成功后，用户点击【查看订单】按钮时跳转的页面地址，如果不填写此属性，则没有【查看订单】按钮 | string  | - | -  |
| mainColor       | 支付结果页主色调，默认支付宝小程序为#108ee9，其他端均为#01be6e | string | #01be6e | 见下  |
| mode            | 收银台模式，可选 mobile 手机模式 pc 电脑模式 | string  | mobile | mobile、pc |
| logo            | 当mode为PC时，展示的logo | string | /static/logo.png | -  |

**mainColor值参考：**
- 绿色系 #01be6e 
- 蓝色系 #108ee9 
- 咖啡色 #816a4e 
- 粉红 #fe4070 
- 橙黄 #ffac0c 
- 橘黄 #ff7100
- 其他 可自定义

**事件**

| 事件名       | 说明                |  参数  |
|-------------|---------------------|--------|
| success     | 支付成功的回调       |  res  | 
| cancel      | 支付取消的回调       |  res  |
| fail        | 支付失败的回调       |  res  | 
| create      | 创建支付订单时的回调（此时用户还未支付）  | res | 

**方法**

通过 `let res = await this.$refs.uniPay.xxx();` 方式调用，详情调用方式参考下方的【前端完整示例代码】

| 方法名                    | 说明                | 
|---------------------------|---------------------|
| open                      | 发起支付 - 打开支付收银台弹窗    [查看详情](#create-order) |
| createOrder               | 直接发起支付（无收银台） [查看详情](#create-order) |
| getOrder                  | 查询订单     [查看详情](#get-order) |
| refund                    | 发起退款（此接口需要权限才可以访问）  [查看详情](#refund) |
| getRefund                 | 查询退款  [查看详情](#get-refund) | 
| closeOrder                | 关闭订单  [查看详情](#close-order) |
| getPayProviderFromCloud   | 获取支持的支付供应商  [查看详情](#get-pay-provider-from-cloud) |
| getProviderAppId          | 获取支付配置内的appid（主要用于获取微信公众号的appid，用以获取code） [查看详情](#get-provider-appid) |
| getOpenid                 | 根据code获取openid （主要用于微信公众号code换取openid） [查看详情](#get-openid) |

**前端完整示例代码**

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
		<uni-pay ref="uniPay" :mode="mode" :adpid="adpid" return-url="/pages/order-detail/order-detail" logo="/static/logo.png" @success="onSuccess" @create="onCreate"></uni-pay>
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
				count: 1,
				openid:"", // 微信公众号需要
				custom:{
					user_id: "001"
				},
				mode:"mobile",
				adpid: "1000000001", // uni-ad的广告位id
			}
		},
		onLoad(options={}) {
			if (options.code && options.state) {
				// 获取微信公众号的openid
				setTimeout(() => {
					this.getOpenid({
						provider: "wxpay",
						code: options.code
					});
				}, 300);
			}
			this.mode = uni.getSystemInfoSync().deviceType !== "pc" ? "mobile" : "pc";
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
			onCreate(res){
				console.log('create: ', res);
				// 如果只是想生成支付二维码，不需要组件自带的弹窗，则在这里可以获取到支付二维码 qr_code_image
			},
			// 监听事件 - 支付成功
			onSuccess(res){
				console.log('success: ', res);
				if (res.user_order_success) {
					// 代表用户已付款，且你自己写的回调成功并正确执行了
					
				} else {
					// 代表用户已付款，但你自己写的回调执行成功（通常是因为你的回调代码有问题）
	
				}
			}
		}, 
		computed: {
			h5Env(){
				// #ifdef H5
				let ua = window.navigator.userAgent.toLowerCase();
				if (ua.match(/MicroMessenger/i) == 'micromessenger' && (ua.match(/miniprogram/i) == 'miniprogram')) {
					// 微信小程序
					return "mp-weixin";
				}
				if (ua.match(/MicroMessenger/i) == 'micromessenger') {
					// 微信公众号
					return "h5-weixin";
				}
				if (ua.match(/alipay/i) == 'alipay' && ua.match(/miniprogram/i) == 'miniprogram') {
					return "mp-alipay";
				}
				if (ua.match(/alipay/i) == 'alipay') {
					return "h5-alipay";
				}
				// 外部 H5
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

## 快速上手 - 云对象（uni-pay-co）@uni-pay-co

### 目录结构@cloudobject-catalogue

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

`uni-pay-co` 所有api返回值均满足[uniCloud响应体规范](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)

返回值示例

```js
{
	errCode: 0, // 错误码，详见错误码列表
	errMsg: '', // 错误信息，uni-pay-co会自动根据客户端语言对错误信息进行国际化
	// ...其余参数
}
```

## API列表@api

通常情况下，直接调用uni-pay组件内的方法即可（组件内会自动调用云对象内的API，无需再手动调用云对象内的API，以下是介绍这些api）

| API             | 说明                | 
|-----------------|---------------------|
| uniPayCo.createOrder     | 创建支付 [查看详情](#create-order)  |
| uniPayCo.getOrder        | 查询订单 [查看详情](#get-order)      |
| uniPayCo.refund      | 发起退款（此接口需要权限才可以访问） [查看详情](#refund)  | 
| uniPayCo.getRefund      | 查询退款   [查看详情](#get-refund)| 
| uniPayCo.closeOrder      | 关闭订单 [查看详情](#close-order)  | 
| uniPayCo.getPayProviderFromCloud      | 获取支持的支付供应商  [查看详情](#get-pay-provider-from-cloud) | 
| uniPayCo.getProviderAppId      | 获取支付配置内的appid（主要用于获取微信公众号的appid，用以获取code） [查看详情](#get-provider-appid)  | 
| uniPayCo.getOpenid      | 根据code获取openid （主要用于微信公众号code换取openid） [查看详情](#get-openid) |

### 创建支付@create-order

**支付组件方法形式（带收银台）（推荐）**

```js
this.$refs.uniPay.open({
	provider: "wxpay", // 支付供应商
	total_fee: 1, // 支付金额，单位分 100 = 1元
	type: "recharge", // 支付回调类型
	order_no: "20221027011000101001010", // 业务系统订单号
	out_trade_no: "2022102701100010100101001", // 插件支付单号
	description: "uniCloud个人版包月套餐", // 支付描述
});
```

**支付组件方法形式（不带收银台）**

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
			
| 参数名          | 类型     | 必填 |             说明          |
|-----------------|---------|------|---------------------------|
| provider        | string  |  是  |  支付供应商 如 wxpay alipay   |
| total_fee       | int     |  是  |  订单总金额，单位为分，100等于1元   |
| type            | string  |  是  |  订单类型 goods：订单付款 recharge：余额充值付款 vip：vip充值付款 等等，可自定义，主要用于判断走哪个回调逻辑（如商品付款和余额充值的回调逻辑肯定是不一样的） | 
| order_no        | string  |  是  |  业务系统订单号 建议控制在20-28位(不可以是24位,24位在阿里云空间可能会有问题)(可重复,代表1个业务订单会有多次付款的情况)   |
| out_trade_no    | string  |  否  |  支付插件订单号（需控制唯一，不传则由插件自动生成）   | 
| description     | string  |  否  |  支付描述，如：uniCloud个人版包月套餐   | 
| qr_code         | boolean |  否  |  若设置为 true 则强制开启二维码支付模式   | 
| openid          | string  |  否  |  发起支付的用户openid（微信公众号支付必填，小程序支付等插件会自动获取，无需填写  | 
| custom          | object  |  否  | 自定义参数（不会发送给第三方支付服务器）     | 
| other           | object  |  否  |  其他请求参数（会发送给第三方支付服务器）   | 

**返回值**

| 参数名          | 类型     |              说明          |
|-----------------|---------|---------------------------|
| order           | object  |  用于发起支付的订单信息   |
| order_no       | string     |  本次交易的订单号，等于你一开始传的order_no的值  |
| out_trade_no      | string  |  本次交易的支付插件订单号  |
| provider      | string  |  本次交易的支付供应商  |
| provider_pay_type      | string  |  本次交易的支付供应商的支付类型  |
| qr_code      | boolean  |  本次交易的是否是扫码支付模式  |
| qr_code_image      | string  |  如果是扫码支付，会返回此字段，代表二维码的base64值  |

**特别注意（一定要看）**

在调用此api前，你应该先创建自己的业务系统订单，并获得订单号 `order_no`，再把 `order_no` 当参数传给此api。

整个逻辑是这样的：

**以用户购买商品付款为例**

- 1、前端用户登录（非本插件功能）
- 2、前端用户购买商品并下单，云端生成你自己写的业务系统商品订单信息，并返回订单号 `order_no` 给前端（非本插件功能）
- 3、用上一步云端返回的 `order_no` 调用插件的[创建支付](#create-order)API（type参数的值写 `goods`），发起真正的支付功能（本插件功能）
- 4、用户支付成功后，云端接收第三方支付发过来的异步回调请求，云端校验请求合法性后，执行商品付款成功异步回调逻辑（即执行 `goods` 回调），同时标记订单为已付款（本插件功能）
- 5、前端监听到付款成功事件，跳转到支付成功页，并展示广告（本插件功能）
- 6、用户点击查看订单，跳转到你自己写的业务系统商品订单详情页（本插件功能）
- 7、完成

**以用户充值余额为例**

- 1、前端用户登录（非本插件功能）
- 2、前端用户提交充值余额的数量，云端生成你自己写的业务系统充值订单信息，并返回订单号 `order_no` 给前端（非本插件功能）
- 3、用上一步云端返回的 `order_no` 调用插件的[创建支付](#create-order)API（type参数的值写 `recharge`），发起真正的支付功能（本插件功能）
- 4、用户支付成功后，云端接收第三方支付发过来的异步回调请求，云端校验请求合法性后，执行余额充值付款成功异步回调逻辑（即执行 `recharge` 回调），同时标记订单为已付款（本插件功能）
- 5、前端监听到付款成功事件，跳转到支付成功页，并展示广告（本插件功能）
- 6、用户点击查看订单，跳转到你自己写的业务系统充值订单详情页（本插件功能）
- 7、完成

### 查询订单@get-order

**支付组件方法形式（推荐）**

```js
await this.$refs.uniPay.getOrder({
	out_trade_no: "2022102701100010100101001", // 插件支付单号
	await_notify: true, // 是否需要等待异步通知执行完成，若为了响应速度，可以设置为false，若需要等待异步回调执行完成，则设置为true
});
```

**云对象接口形式**

```js
await uniIdCo.getOrder({
  out_trade_no: "2022102701100010100101001", // 插件支付单号
  await_notify: true, // 是否需要等待异步通知执行完成，若为了响应速度，可以设置为false，若需要等待异步回调执行完成，则设置为true
});
```

**参数说明**
			
| 参数名          | 类型     | 必填 |             说明          |
|-----------------|---------|------|---------------------------|
| out_trade_no    | string  |  out_trade_no、transaction_id 二选一  |  插件订单号   |
| transaction_id  | string  |  out_trade_no、transaction_id 二选一  |  第三方支付交易单号   |
| await_notify    | boolean |  否  | 默认为false，是否需要等待异步通知执行完成，若为了响应速度，可以设置为false，若需要等待异步回调执行完成，则设置为true | 

**await_notify = true 适合什么场景？**

当你下一个页面展示的数据需要依赖支付异步回调内的逻辑执行完成后才可以展示时，需要设置为true。

**await_notify = false 适合什么场景？**

当你下一个页面展示的数据不需要依赖支付异步回调内的逻辑执行完成后才可以展示时，可以设置为false，设置为false可以加快响应速度。

**返回值**

| 参数名          | 类型     |              说明          |
|-----------------|---------|---------------------------|
| has_paid           | boolean  |  标记用户是否已付款成功（此参数只能表示用户确实付款了，但系统的异步回调逻辑可能还未执行完成）   |
| user_order_success      | boolean  | 用户异步通知逻辑是否全部执行完成，且无异常（建议前端通过此参数是否为true来判断是否支付成功）  |
| out_trade_no      | string  |  支付插件订单号  |
| transaction_id      | string  |  第三方支付交易单号（只有付款成功的才会返回）  |
| status      | int  |  当前支付订单状态 -1：已关闭 0：未支付 1：已支付 2：已部分退款 3：已全额退款  |
| pay_order      | object  |  支付订单完整信息 |

### 发起退款@refund

**支付组件方法形式（推荐）**

```js
await this.$refs.uniPay.refund({
	out_trade_no: "2022102701100010100101001", // 插件支付单号
});
```

**云对象接口形式**

```js
await uniIdCo.refund({
  out_trade_no: "2022102701100010100101001", // 插件支付单号
});
```

**参数说明**
			
| 参数名          | 类型     | 必填 |             说明          |
|-----------------|---------|------|---------------------------|
| out_trade_no    | string  |  out_trade_no、out_refund_no 二选一  |  插件订单号   |
| out_refund_no  | string  |  out_trade_no、out_refund_no 二选一  |  插件退款订单号   |
| refund_desc    | string |  否  | 退款描述 | 
| refund_fee    | int |  否  | 退款金，单位分 100 = 1元 | 

**返回值**

| 参数名          | 类型     |              说明          |
|-----------------|---------|---------------------------|
| result           | object  |  第三方供应商返回的结果   |

### 查询退款@get-refund

**支付组件方法形式（推荐）**

```js
await this.$refs.uniPay.getRefund({
	out_trade_no: "2022102701100010100101001", // 插件支付单号
});
```

**云对象接口形式**

```js
await uniIdCo.getRefund({
  out_trade_no: "2022102701100010100101001", // 插件支付单号
});
```

**参数说明**
			
| 参数名          | 类型     | 必填 |             说明          |
|-----------------|---------|------|---------------------------|
| out_trade_no    | string  |  是 |  插件订单号   |

**参数说明**
			
| 参数名          | 类型     | 必填 |             说明          |
|-----------------|---------|------|---------------------------|
| out_trade_no    | string  |  out_trade_no、out_refund_no 二选一  |  插件订单号   |
| out_refund_no  | string  |  out_trade_no、out_refund_no 二选一  |  插件退款订单号   |
| refund_desc    | string |  否  | 退款描述 | 
| refund_fee    | int |  否  | 退款金，单位分 100 = 1元 | 

**返回值**

| 参数名          | 类型     |              说明          |
|-----------------|---------|---------------------------|
| result           | object  |  第三方供应商返回的结果   |
| pay_order           | object  |  支付订单信息   |

### 关闭订单@close-order

一般情况下，无需调用此方法去主动关闭订单（订单若未支付，则会在一段时间后自动关闭），但你有需要主动关闭订单的场景时，可以使用此api来主动关闭订单。（只有未支付的订单才可以主动关闭）

**支付组件方法形式（推荐）**

```js
await this.$refs.uniPay.closeOrder({
	out_trade_no: "2022102701100010100101001", // 插件支付单号
});
```

**云对象接口形式**

```js
await uniIdCo.closeOrder({
  out_trade_no: "2022102701100010100101001", // 插件支付单号
});
```

**参数说明**
			
| 参数名          | 类型     | 必填 |             说明          |
|-----------------|---------|------|---------------------------|
| out_trade_no    | string  |  是 |  插件订单号   |

**返回值**

| 参数名          | 类型     |              说明          |
|-----------------|---------|---------------------------|
| result           | object  |  第三方供应商返回的结果   |

### 获取支持的支付供应商@get-pay-provider-from-cloud

一般情况下，无需调用此api，`uni-pay` 组件内部已自动调用此api。

**支付组件方法形式（推荐）**

```js
await this.$refs.uniPay.getPayProviderFromCloud();
```

**云对象接口形式**

```js
await uniIdCo.getPayProviderFromCloud();
```

**参数说明**

该API无参数

**返回值**

| 参数名          | 类型     |              说明          |
|-----------------|---------|---------------------------|
| wxpay           | boolean  |  是否支持微信支付   |
| alipay          | boolean  |  是否支持支付宝支付   |
| provider        | array&lt;string&gt; |  支持哪些支付供应商，如["wxpay","alipay"]   |

### 获取支付配置内的appid@get-provider-appid

```js
await this.$refs.uniPay.getProviderAppId({
	provider: "wxpay",
	provider_pay_type: "jsapi",
});
```

**云对象接口形式**
```js
await uniIdCo.getProviderAppId({
  provider: "wxpay",
  provider_pay_type: "jsapi",
});
```

**参数说明**
			
| 参数名          | 类型     | 必填 |             说明          |
|-----------------|---------|------|---------------------------|
| provider        | string  |  是  |  支付供应商 如 wxpay alipay  |
| provider_pay_type  | string  |  是  |  支付供应商 如 jsapi  |

**返回值**

| 参数名          | 类型     |              说明          |
|-----------------|---------|---------------------------|
| appid           | string  |  appid   |

### 根据code获取openid@get-openid

一般用于微信公众号根据网页授权回调返回的code获取用户openid

**注意**

小程序不需要调用此方法，组件内部已自动静默获取openid

```js
await this.$refs.uniPay.getOpenid({
	provider: "wxpay",
	code: options.code
});
```

**云对象接口形式**

```js
await uniIdCo.getOpenid({
  provider: "wxpay",
  code: options.code
});
```

**参数说明**
			
| 参数名          | 类型     | 必填 |             说明          |
|-----------------|---------|------|---------------------------|
| provider        | string  |  是  |  支付供应商 如 wxpay alipay  |
| code            | string  |  是  |  微信公众号网页授权回调返回的code  |

**返回值**

| 参数名          | 类型     |              说明          |
|-----------------|---------|---------------------------|
| openid           | string  |  openid   |

## 支付成功异步回调通知@notify

当用户支付成功后，我们要给用户增加余额或者给业务订单标记支付成功，这些通过异步回调通知来实现的。

**提示：异步回调通知写在 `uni-pay-co/notify` 目录下，在此目录新建2个js文件，分别为 `recharge.js`、`goods.js` 文件，同时复制以下代码要你新建的2个js文件里。**

**注意**

为什么要你自己创建.js文件，而不是插件默认给你创建好，这是因为后面当插件更新时，你写的代码会被插件更新的代码覆盖（一键合并功能），因此只要插件这里没有文件（而是你自己新建的文件），那么插件更新时，不会覆盖你自己新建的文件内的代码。

```js
'use strict';
/**
 * 此处建议只改下订单状态，保证能及时返回给第三方支付服务器成功状态
 * 且where条件可以增加判断服务器推送过来的金额和订单表中订单需支付金额是否一致
 * 将消息发送、返佣、业绩结算等业务逻辑异步处理(写入异步任务队列表)
 * 如开启定时器每隔5秒触发一次，处理订单
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
	// 有三种方式
	// 方式一：直接写数据库操作
	// 方式二：使用 await uniCloud.callFunction 调用其他云函数
	// 方式三：使用 await uniCloud.httpclient.request 调用http接口地址

	// 此处写你自己的支付成功逻辑结束-----------------------------------------------------------
	// user_order_success =  true 代表你自己的逻辑处理成功 返回 false 代表你自己的处理逻辑失败。
	return user_order_success;
};
```

其中 

- `recharge.js` 内可以写余额充值相关的回调逻辑
- `goods.js` 内可以写商品订单付款成功后的回调逻辑

最终调用哪个回调逻辑是根据你创建支付订单时，`type` 参数填的什么，`type` 如果填 `recharge` 则支付成功后就会执行 `recharge.js` 内的代码逻辑。

即前端调用支付时的这个 `type` 参数

```js
// 打开支付收银台
this.$refs.uniPay.open({
	type: "recharge", // 支付回调类型 recharge 代表余额充值（当然你可以自己自定义）
});
```

**注意：每次修改都需要重新上传云对象`uni-pay-co`**

## 注意事项@tips

### 微信公众号@tips-wxpay-jsapi

h5的路由模式必须配置为 `history`，因为微信公众号登录的回调地址不支持 `hash` 模式。

同时微信公众号开发调试比较麻烦，麻烦在于网页授权需要添加域名白名单，用localhost或用ip访问本地是无法获取到微信的code的，这样也就无法获取openid，导致无法支付。

操作步骤

- 1、手机和电脑连接在同一个局域网（路由器WiFi下）
- 2、查看自己电脑的局域网ip地址，比如为192.168.1.8
- 3、假设你的线上域名是（必须要有自己的域名）www.abc.com 则设置 test.abc.com 先解析到你的前端托管域名上（为了让微信验证域名通过，因为验证域名时，需要上传微信指定的文件到你的前端托管）。
- 4、进入公众号后台，设置与开发 -> 公众号设置 -> 设置网页授权域名，添加 test.abc.com
- 5、成功添加后，再重新设置 test.abc.com 解析到你电脑的局域网ip，如192.168.1.8
- 6、过一段时间（大概20分钟后，更换域名解析生效需要时间，这20分钟内千万不要再去访问http://test.abc.com）
- 7、20分钟后，访问 http://test.abc.com 此时就等于访问了 http://192.168.1.8，这样你的手机就用 http://test.abc.com 来访问你的项目
- 8、可以正常获取到openid了，就可以正常进行本地微信公众号支付测试了（不然每次都要上传到服务器测试）。

当用自定义域名时，还需要在项目根目录添加 `vue.config.js` 文件，内容如下：

```js
module.exports = {
	devServer: {
		disableHostCheck: true, // 忽略域名检查
		port: 80, // 设置80端口为项目启动端口
	}
}
```

### 微信小程序@tips-wxpay-mp

微信小程序支付除了配置uni-pay的支付配置外，还需要配置 `manifest.json` 内的 微信小程序appid，如下图所示。

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/0baa997a-36ce-4f43-b07d-beeabe50768f.png)

### APP支付@tips-app

APP支付除了配置uni-pay的支付配置外，还需要打包时添加支付模块，如下图所示。

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/47faf380-37ab-435a-be18-7ca66723aaff.png)

同时，还需要打自定义基座（包名需要和开放平台下填写的一致），且你在开放平台下的这个应用必须通过审核才可以。（比如微信开放平台下的APP应用显示通过审核才可以）

## 数据库表@database

支付插件需要创建以下表后才能正常运行，可以右键执行插件自带的 `db_init.json` 的初始化数据库功能来创建表。

- 支付订单表 [uni-pay-orders](https://gitee.com/dcloud/opendb/blob/master/collection/uni-pay-orders/collection.json)

## 全局错误码@errorcode
	
| 错误模块 |    错误码    |             说明          |
|---------|-------------|---------------------------|
| uni-pay |    50403    | 当前登录用户的角色权限不足 |
| uni-pay |    51001    | 支付单号（out_trade_no）不能为空 |
| uni-pay |    51002    | code不能为空 |
| uni-pay |    51003    | 订单号（order_no）不能为空 |
| uni-pay |    51004    | 回调类型（type）不能为空，如设置为goods代表商品订单 |
| uni-pay |    51005    | 支付金额（total_fee）必须为正整数（>0的整数）（注意：100=1元） |
| uni-pay |    51006    | 支付描述（description）不能为空 |
| uni-pay |    51007    | 支付供应商（provider）不能为空 |
| uni-pay |    51008    | 未获取到 clientInfo |
| uni-pay |    51009    | 未获取到 cloudInfo |
| uni-pay |    52001    | 查询的支付订单不存在 |
| uni-pay |    52002    | 未配置正确的异步回调URL |
| uni-pay |    53001    | 获取支付信息失败（具体信息以控制台打印的日志为准） |
| uni-pay |    53002    | 退款失败（具体信息以控制台打印的日志为准） |
| uni-pay |    53003    | 查询退款信息失败（具体信息以控制台打印的日志为准）  |
| uni-pay |    53004    | 关闭订单失败（具体信息以控制台打印的日志为准）  |
| uni-pay |    53005    | 证书错误，请检查支付证书 |

返回值示例

```json
{
	"errMsg": "支付单号（out_trade_no）不能为空",
	"errCode": 51001,
	"errSubject": "uni-pay"
}
```

## 常见问题@question

### 发起支付时报数据库表不存在？

支付插件需要创建支付相关的表后才能正常运行。[查看相关的数据库表](#database)

### 支付账号如何申请?

本插件对接的支付渠道是微信和支付宝官方渠道

**微信支付**

申请地址 [https://pay.weixin.qq.com/index.php/apply/applyment_home/guide_normal](https://pay.weixin.qq.com/index.php/apply/applyment_home/guide_normal)

申请指引 [https://pay.weixin.qq.com/static/applyment_guide/applyment_index.shtml](https://pay.weixin.qq.com/static/applyment_guide/applyment_index.shtml)

**支付宝**

申请地址 [https://open.alipay.com](https://open.alipay.com)

申请指引 [https://opendocs.alipay.com/common/02asmu](https://opendocs.alipay.com/common/02asmu)

**注意**

支付账号申请需要企业资质（个体工商户也可以，但不可以是个人资质，需要有营业执照，银行对公账户）。

### 如何获得插件需要的密钥参数@get-config-help

#### 微信支付@get-wxpay-config-help

[微信支付参数和证书生成教程](https://docs.qq.com/doc/DWUpGTW1kSUdpZGF5)

- pfx：微信支付v2需要用到的证书，是一个后缀名为`.p12`的文件，如果你的`.p12`文件不是`apiclient_cert.p12`，则将它改名成`apiclient_cert.p12`，并复制到 `uni-config-center/uni-pay/wxpay/` 目录下
- appCertPath：微信支付v3需要用到的证书，是一个名为`apiclient_cert.pem`的文件，将它复制到 `uni-config-center/uni-pay/wxpay/` 目录下
- appPrivateKeyPath：微信支付v3需要用到的证书，是一个名为`apiclient_key.pem`的文件，将它复制到 `uni-config-center/uni-pay/wxpay/` 目录下

#### 支付宝@get-alipay-config-help

[支付宝支付证书生成教程](https://docs.qq.com/doc/DWVBlVkZ1Z21SZFpS)

- privateKey：支付宝商户私钥
- appCertPath：支付宝商户公钥路径，是一个后缀名为`appCertPublicKey.crt`的文件，将它复制到 `uni-config-center/uni-pay/alipay/` 目录下
- alipayPublicCertPath：支付宝商户公钥路径，是一个后缀名为`alipayCertPublicKey_RSA2.crt`的文件，将它复制到 `uni-config-center/uni-pay/alipay/` 目录下
- alipayRootCertPath：支付宝根证书路径，是一个后缀名为`alipayRootCert.crt`的文件，将它复制到 `uni-config-center/uni-pay/alipay/` 目录下