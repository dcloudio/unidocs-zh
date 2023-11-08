# 微信小程序云迁移uniCloud
# WeChat applet cloud migration uniCloud

## 概念澄清
## Concept clarification

uniCloud，可以自选阿里云和腾讯云的serverless。类似于uni-app屏蔽了各家小程序的端侧差异，uniCloud也屏蔽了微信小程序云开发和支付宝小程序云开发的差异。
uniCloud, you can choose the serverless of Alibaba Cloud and Tencent Cloud. Similar to uni-app, which shields the end-to-end differences of various mini-programs, uniCloud also shields the differences between WeChat mini-program cloud development and Alipay mini-program cloud development.

也就是说，uniCloud选择腾讯云时，和微信小程序云开发，连的是一套云服务，都是腾讯云官方提供的。
That is to say, when uniCloud chooses Tencent Cloud, it is connected with WeChat applet cloud development, which is a set of cloud services, which are officially provided by Tencent Cloud.

虽然硬件相同，包括API也很相似，但uniCloud和微信云开发仍然有一些软件层面的差异。
Although the hardware is the same, including the API, there are still some software-level differences between uniCloud and WeChat cloud development.

uniCloud去掉了微信云开发的一些功能，添加了更多功能。以及在生态配套上差别也比较大。
uniCloud removes some functions developed by WeChat Cloud and adds more functions. And the difference in ecological support is also relatively large.

## 优劣对比
## Compare the pros and cons

|				|微信云开发																	|uniCloud																																																|
| |WeChat Cloud Development |uniCloud |
|--				|--																			|--																																																		|
|跨端			|只有微信小程序(虽可用其他工具变相开发H5、QQ小程序，但端不够全也难以保持一致性)					|全端。App、web、各家小程序快应用全支持																																									|
|Cross-end |Only WeChat applet (although other tools can be used to develop H5 and QQ applet in disguise, but the end is not complete and it is difficult to maintain consistency) |full end. App, web, and various small program quick applications are fully supported |
|跨云			|只支持腾讯云。为其编写的云函数不能运行在其他云平台							|阿里云、腾讯云均支持，方便互相切换。对其他云也持开放态度																																				|
|Cross Cloud |Only Tencent Cloud is supported. Cloud functions written for it cannot run on other cloud platforms | Alibaba Cloud and Tencent Cloud are both supported for easy switching. Open to other clouds too |
|定价			|													|选用uniCloud腾讯云版与微信云开发价格相同。DCloud只是获取腾讯云的返点，而不是加价售卖。如选用uniCloud阿里云版，则比微信云开发更便宜[详见](price.md)																																	|
|Pricing | |The price of using uniCloud Tencent Cloud Edition is the same as that of WeChat Cloud. DCloud just gets rebates from Tencent Cloud, not a price increase. If you choose uniCloud Aliyun version, it is cheaper than WeChat cloud development [see details](price.md) |
|前端操作数据库	|使用微信的账户权限而不是应用的账户权限，无法编程，不能有效控制数据权限安全。客户端js sdk体积大，影响性能	|完善的[clientDB](https://uniapp.dcloud.io/uniCloud/clientdb)模块，使用应用自己的用户权限体系，可灵活编程，安全可靠控制权限																				|
|Front-end operation database |Using WeChat account permissions instead of application account permissions, cannot program, and cannot effectively control data permission security. The client-side js sdk is bulky and affects performance | Perfect [clientDB](https://uniapp.dcloud.io/uniCloud/clientdb) module, using the application's own user permission system, flexible programming, safe and reliable control permissions |
|数据库schema	|不支持																		|完善的数据库[schema](https://uniapp.dcloud.io/uniCloud/schema)设计，自带权限验证和数据合法性验证																										|
|Database schema |Not supported |Perfect database [schema](https://uniapp.dcloud.io/uniCloud/schema) design, with its own permission verification and data legitimacy verification |
|数据库查询语法	|MongoDB语法。学习门槛高、写法复杂，尤其联表查询很难用							|除了MongoDB语法外，支持JQL语法，大幅降低学习门槛，减少数据库操作的代码量，快速完成复杂查询																												|
|Database query syntax |MongoDB syntax. The learning threshold is high and the writing method is complicated, especially the join table query is difficult to use | In addition to the MongoDB syntax, JQL syntax is supported, which greatly reduces the learning threshold, reduces the amount of code for database operations, and quickly completes complex queries |
|开发工具		|微信小程序工具，编码体验欠佳												|通用编程工具HBuilderX，高效操作完善，插件体系开放																																						|
|Development tools |WeChat applet tool, poor coding experience |General programming tool HBuilderX, efficient operation and perfect, open plug-in system |
|前端数据库watch	|支持。权限按微信账户体系执行 |有更强大的免费的websocket服务[详情查看](https://uniapp.dcloud.io/unipush-v2.html)|
|Frontend database watch |Supported. Permissions are implemented according to the WeChat account system | There is a more powerful free websocket service [View details](https://uniapp.dcloud.io/unipush-v2.html)|
|opendb			|无																			|开放的数据库规范，众多价值，[详情](opendb.md)																																	|
|opendb |none |open database specification, many values, [details](opendb.md) |
|账户服务		|仅微信登录，但鉴权更简单														|[uni-id](uni-id-summary.md)支持应用自己的账户体系，手机号或email，内置短信验证码和app端一键登录，支持微信、支付宝等三方登录，支持权限、角色、社交裂变等众多功能					|
|Account Service |Only WeChat login, but the authentication is simpler |[uni-id](uni-id-summary.md) supports the application of its own account system, mobile phone number or email, built-in SMS verification code and one-click login on the app side , support WeChat, Alipay and other three-party login, support permissions, roles, social fission and many other functions |
|admin系统		|不自带																		|自带开源[uniCloud admin](https://uniapp.dcloud.io/uniCloud/admin)系统，大小屏自适配，自带用户、角色、权限功能，还有更多[插件](https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate)拿来即用	|
|admin system |Does not come with |With open source [uniCloud admin](https://uniapp.dcloud.io/uniCloud/admin) system, self-adaptive to large and small screens, comes with user, role, permission functions, and more Multiple [plugins](https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate) ready to use |
|支付			|仅微信支付，但鉴权更简单														|[uniPay](https://uniapp.dcloud.io/uniCloud/unipay)，跨端统一支付																																		|
|Payment |Only WeChat Pay, but the authentication is simpler |[uniPay](https://uniapp.dcloud.io/uniCloud/unipay), cross-end unified payment |
|cms			|支持。但前端部分跨端不足													|支持。前端跨端、[管理端](https://ext.dcloud.net.cn/plugin?id=3543)开源																																	|
|cms |Support. But the front-end part lacks cross-end | support. Front-end cross-end, [management end](https://ext.dcloud.net.cn/plugin?id=3543) open source |
|插件生态		|腾讯云开发了部分插件															|丰富的插件生态，包含腾讯云为uniCloud开发的插件，众多现成项目模块，[详情](https://ext.dcloud.net.cn/?cat1=7&orderBy=UpdatedDate)																		|
|Plugin Ecology |Tencent Cloud has developed some plugins | Rich plugin ecology, including plugins developed by Tencent Cloud for uniCloud, many ready-made project modules, [Details](https://ext.dcloud.net.cn/?cat1=7&orderBy =UpdatedDate) |

上述差异，总结来看，uniCloud更开放、生态更丰富、开发效率更高。
The above differences, in conclusion, uniCloud is more open, ecologically richer, and more efficient in development.

开发效率之所以高的原因，包括clientDB、JQL、HBuilderX这些对效率起很大影响的重要功能和工具，也包括大量现成的轮子拿来就用。详见：[2021了，让我们把开发效率提升10倍吧！](https://mp.weixin.qq.com/s/d3y3pQqC_SMm3938_i2qNw)
The reasons for the high development efficiency include important functions and tools such as clientDB, JQL, and HBuilderX that have a great impact on efficiency, as well as a large number of ready-made wheels. For details, see: [2021, let's increase the development efficiency by 10 times! ](https://mp.weixin.qq.com/s/d3y3pQqC_SMm3938_i2qNw)

## 技术迁移指南
## Technical Migration Guide

如果已经开发了微信小程序，想迁移到uniCloud，下面提供云函数和数据库部分的技术迁移指南。
If you have already developed WeChat Mini Programs and want to migrate to uniCloud, the following provides technical migration guidelines for cloud functions and databases.

### 云函数迁移指南
### Cloud Function Migration Guide

#### 对接微信登录
#### Docking WeChat login

uniCloud可以使用uni-id更简单的接入微信小程序登录。参考[uni-id](uni-id-summary.md)
uniCloud can use uni-id to log in to WeChat applet more easily. Reference[uni-id](uni-id-summary.md)

不同于微信云开发中的直接获取openid，uni-id提供的登录接口会在数据库的uni-id-users表内添加用户记录。
Different from directly obtaining openid in WeChat cloud development, the login interface provided by uni-id will add user records in the uni-id-users table of the database.

如果要控制云存储的权限可以使用自定义登录，[uniCloud腾讯云自定义登录](https://uniapp.dcloud.net.cn/uniCloud/authentication)
If you want to control the permissions of cloud storage, you can use custom login, [uniCloud Tencent Cloud Custom Login](https://uniapp.dcloud.net.cn/uniCloud/authentication)

#### 对接微信支付
#### Docking WeChat payment

uniCloud提供了uniPay来实现支付功能，同时支持微信和支付宝[unipay文档](https://uniapp.dcloud.net.cn/uniCloud/unipay)
uniCloud provides uniPay to realize payment function, and supports WeChat and Alipay [unipay document](https://uniapp.dcloud.net.cn/uniCloud/unipay)

老的微信云开发+原生小程序的代码是这样：
The code of the old WeChat cloud development + native applet is as follows:
```js
// 云函数部分的代码
// The code of the cloud function part
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  const res = await cloud.cloudPay.unifiedOrder({
    "body" : "商品描述",
    "outTradeNo" : "商户订单号",
    "spbillCreateIp" : "127.0.0.1",
    "totalFee" : 1,
	// 用于接收支付异步通知的云函数所在的服务空间ID和云函数名
	// Service space ID and cloud function name where the cloud function used to receive payment asynchronous notifications is located
    "envId": "test-f0b102",
    "functionName": "pay_cb"
  })
  return res
}

// 小程序部分的代码
// code of the applet part
wx.cloud.callFunction({
  name: '函数名',
  data: {
    // ...
  },
  success: res => {
    const payment = res.result.payment
    wx.requestPayment({
      ...payment,
      success (res) {
        console.log('pay success', res)
      },
      fail (res) {
        console.error('pay fail', err)
      }
    })
  },
  fail: console.error,
})
```

迁移到uniCloud + uni-app体系，代码改成这样：
Migrating to the uniCloud + uni-app system, the code is changed to this:

```js
// 云函数部分的代码
// The code of the cloud function part
const unipayIns = unipay.initWeixin({
  appId: 'your appId',
  mchId: 'your mchId',
  key: 'you parterner key',
  // pfx: fs.readFileSync('/path/to/your/pfxfile'), // p12文件路径，使用微信退款时需要，需要注意的是务必使用绝对路径
  // pfx: fs.readFileSync('/path/to/your/pfxfile'), // p12 file path, it is required when using WeChat refund, it should be noted that absolute path must be used
})


exports.main = async (event, context) => {
	const res = await unipayIns.getOrderInfo({
		openid: 'user openid',
		body: '商品描述',
		outTradeNo: '商户订单号',
		totalFee: 1, // 金额，单位分
		notifyUrl: 'https://xxx.xx' // 支付结果通知地址
	})
  return res
}

// 客户端部分的代码
// code for the client part
uniCloud.callFunction({
	name: '云函数名',
	data: {
		// ...
	},
	success(res) {
		uni.requestPayment({
			provider: 'wxpay',
			...res.result.orderInfo
			success (res) {
			  console.log('pay success', res)
			},
			fail (res) {
			  console.error('pay fail', err)
			}
		})
	}
})
```

**注意**
**Notice**

- uniPay和微信小程序的CloudPay接口很相似，需要注意的是uniPay接收的参数都是驼峰形式的，输出的参数也都是驼峰形式的。微信小程序的CloudPay有些接口是驼峰形式参数有些是蛇形参数
- uniPay is very similar to the CloudPay interface of the WeChat applet. It should be noted that the parameters received by uniPay are all in camel case, and the output parameters are also in camel case. Some interfaces of CloudPay of WeChat applet are hump-shaped parameters and some are snake-shaped parameters

#### 临时CDN
#### Temporary CDN

临时CDN主要用于解决需要传输大文件到云函数的场景，使用uniCloud时可以通过先上传到云存储再传递fileID给云函数的方式实现
Temporary CDN is mainly used to solve scenarios that need to transfer large files to cloud functions. When using uniCloud, it can be achieved by uploading to cloud storage first and then passing the fileID to cloud functions.

微信云开发写法：
WeChat cloud development writing method:
```js
wx.cloud.callFunction({
  name: 'test',
  data: {
    filePathDemo: wx.cloud.CDN({
      type: 'filePath',
      filePath: 'xxxxxxxx',
    })
  },
})
```

uniCloud写法：
uniCloud writing:
```js
uniCloud.uploadFile({
	filePath: filePath,
	cloudPath: 'a.jpg'
}).then(res => {
	const fileID = res.fileID
	uniCloud.callFunction({
		name: 'test',
		data: {
			filePathDemo: fileID
		}
	})
})
```

#### 微信开放接口
#### WeChat open interface

使用微信开放接口的场景可以替换为[mp-cloud-openapi](https://ext.dcloud.net.cn/plugin?id=1810)来实现。用法基本和微信云开发一致
Scenarios using the WeChat open interface can be replaced with [mp-cloud-openapi](https://ext.dcloud.net.cn/plugin?id=1810). The usage is basically the same as WeChat cloud development

微信云开发写法：
WeChat cloud development writing method:
```js
const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxacode.createQRCode({
        path: 'page/index/index',
        width: 430
      })
    return result
  } catch (err) {
    return err
  }
}
```

uniCloud写法：
uniCloud writing:
```js
// mp-cloud-openapi，地址：https://ext.dcloud.net.cn/plugin?id=1810
// mp-cloud-openapi, address: https://ext.dcloud.net.cn/plugin?id=1810
const openapi = require('mp-cloud-openapi')
const openapiWeixin = openapi.initWeixin({
  appId: 'appId',
  secret: 'secret'
})
exports.main = async (event, context) => {
  try {
    const result = await openapiWeixin.wxacode.createQRCode({
        path: 'page/index/index',
        width: 430
      })
    return result
  } catch (err) {
    return err
  }
}
```

### 数据库迁移指南
### Database Migration Guide

#### 数据导出导入
#### Data export and import

微信小程序云开发的控制台可以导出json数据，这个格式与uniCloud相同，可以将导出文件直接在uniCloud的web控制台操作导入。
The console developed by WeChat Mini Program Cloud can export json data. This format is the same as that of uniCloud. The export file can be imported directly from the web console of uniCloud.

#### 新增与更新数据的写法
#### How to add and update data

微信小程序云开发add、update、set操作时参数比uniCloud多了一层data **从微信小程序云开发迁移时最需要注意的事项**
Wechat applet cloud development add, update, set operation parameters have one more layer of data than uniCloud **The most important things to pay attention to when migrating from WeChat applet cloud development**

微信云开发写法：
WeChat cloud development writing method:
```js
const res = await db.collection('todos').doc('todo-id').add({
  data: {
    description: "learn cloud database",
    done: false
  }
})
```

uniCloud写法：
uniCloud writing:
```js
const res = await db.collection('todos').doc('todo-id').add({
  description: "learn cloud database",
  done: false
})
```

#### 客户端操作数据库
#### Client operation database

uniCloud内也支持客户端操作数据库（下面成为clientDB），但是与微信云开发稍有不同。主要有以下两点
UniCloud also supports client-side operation of the database (hereinafter referred to as clientDB), but it is slightly different from WeChat cloud development. There are two main points

- 权限依赖于uni-id
- permissions depend on uni-id
- 需要在表结构的permission里面配置权限，可以配置字段级的权限
- You need to configure permissions in the permissions of the table structure, you can configure field-level permissions

另外clientDB支持以下扩展能力
In addition clientDB supports the following extension capabilities

- 数据校验能力，参考：[DB schema](https://uniapp.dcloud.net.cn/uniCloud/schema)
- Data verification capability, refer to: [DB schema](https://uniapp.dcloud.net.cn/uniCloud/schema)
- 在数据库操作前/后执行额外操作，参考：[action](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action)
- Perform additional actions before/after database operations, refer to: [action](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action)
- 更加简单的查询方式，参考：[JQL](jql.md)
- For a simpler query method, refer to: [JQL](jql.md)
