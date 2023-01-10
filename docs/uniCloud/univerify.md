## 一键登录@univerify

<!--
/// meta
keyword: 手机号
-->

`univerify` 是DCloud 推出的一键登录产品，通过与运营商深度合作，实现APP用户无需输入帐号密码，即可使用本机手机号码自动登录的能力。

`univerify`是替代短信验证登录的下一代登录验证方式，能消除现有短信验证模式等待时间长、操作繁琐和容易泄露的痛点。

>  注意：一键登录必须是手机使用流量的前提下才能获取到手机号码，用Wi-Fi联网时无法获取到手机号码，同时如果是双卡手机，获取到的手机号码是默认移动数据的那个手机卡的号码。

## 重要调整

### 云函数使用一键登录扩展库@extension

自`HBuilderX 3.4.0`起，一键登录相关功能移至扩展库`uni-cloud-verify`内。在一段时间内无论开发者是否使用扩展库云函数都可以正常使用`uniCloud.getPhoneNumber`。HBuilderX 3.4.0及之后的版本上传云函数时如果没有指定使用`uni-cloud-verify`扩展库的云函数将无法调用uniCloud.getPhoneNumber接口。

关于扩展库的说明见：[云函数扩展库](uniCloud/cf-functions.md?id=extension)

在云函数的package.json内添加`uni-cloud-verify`的引用即可为云函数启用此扩展，无需做其他调整，完整的package.json示例如下：

```js
{
	"name": "univerify",
	"extensions": {
		"uni-cloud-verify": {} // 启用一键登录扩展，值为空对象即可
	}
}
```

## 客户端@client

客户端如何使用一键登录请参考此文档：[univerify 使用指南](/univerify)

## 云函数@cloud

> 自`HBuilderX 3.4.0`起云函数需启用uni-cloud-verify之后才可以调用getPhoneNumber接口，详细说明见：[云函数使用一键登录扩展库](#extension)

客户端调用一键登录接口会获取如下结果

```js
{  
    "target": {  
        "id": "univerify",  
        "description": "一键登录",  
        "authResult": {  
            "openid": "xxx",  
            "access_token": "xxx"  
        }  
    }  
}  
```

使用上面结果中的`openid`和`access_token`即可在`云函数`内调用接口获取手机号

云函数内接口调用形式如下

```js
exports.main = async function(event, context){
  const res = await uniCloud.getPhoneNumber({
    provider: 'univerify',
    appid: context.APPID, // 客户端callFunction时携带的AppId信息
    apiKey: 'xxx', // 在开发者中心开通服务并获取apiKey
    apiSecret: 'xxx', // 在开发者中心开通服务并获取apiSecret
    access_token: event.access_token,
    openid: event.openid
  })
  // res形式如下
  // {
  //   code: 0,
  //   message: '',
  //   phoneNumber: '138xxxxxxxx'
  // }
}
```

**相关文档**
- [uniCloud快速上手](https://uniapp.dcloud.net.cn/uniCloud/quickstart)
- [云函数URL化](https://uniapp.dcloud.net.cn/uniCloud/http)

### uni-app项目

如果开发uni-app项目可以使用callFunction的方式调用云函数

```js
// 客户端
uniCloud.callFunction({
  name: 'xxx', // 你的云函数名称
  data: {
    access_token: 'xxx', // 客户端一键登录接口返回的access_token
    openid: 'xxx' // 客户端一键登录接口返回的openid
  }
}).then(res => {
  // res.result = {
  //   code: '',
  //   message: ''
  // }
}).catch(err=>{
  // 处理错误
})

// 云函数
exports.main = async function (event, context){
  const res = await uniCloud.getPhoneNumber({
    appid: context.APPID, // 客户端callFunction时携带的AppId信息
  	provider: 'univerify',
  	apiKey: 'xxx', // 在开发者中心开通服务并获取apiKey
  	apiSecret: 'xxx', // 在开发者中心开通服务并获取apiSecret
  	access_token: event.access_token,
  	openid: event.openid
  })
  // 执行入库等操作，正常情况下不要把完整手机号返回给前端
  return {
    code: 0,
    message: '获取手机号成功'
  }
}
```

**注意**

- 开发期间如果重新获取过appid需要重新编译uni-app项目

### 5+项目

5+项目不可使用callFunction请求云函数，这时候可以使用云函数URL化让5+项目通过http请求的方式访问云函数

```js
// 客户端
const xhr = new plus.net.XMLHttpRequest();
xhr.onload = function(e) {
  const {
    code,
    message
  } = JSON.parse(xhr.responseText)
}
xhr.open( "POST", "https://xxx" ); // url应为云函数Url化之后的地址，可以在uniCloud web控制台云函数详情页面看到
xhr.setRequestHeader('Content-Type','application/json');
xhr.send(JSON.stringify({
  access_token: 'xxx', // 客户端一键登录接口返回的access_token
  openid: 'xxx' // 客户端一键登录接口返回的openid
}));
  
// 云函数，下面仅展示客户端使用post方式发送content-type为application/json请求的场景
exports.main = async function(event){
  let body = event.body
  if(event.isBase64Encoded) {
    body = Buffer.from(body,'base64')
  }
  const {
    access_token,
    openid
  } = JSON.parse(body)
  const res = await uniCloud.getPhoneNumber({
    provider: 'univerify',
    appid: 'xxx', // DCloud appid
    apiKey: 'xxx', // 在开发者中心开通服务并获取apiKey
    apiSecret: 'xxx', // 在开发者中心开通服务并获取apiSecret
    access_token: access_token,
    openid: openid
  })
  // 执行入库等操作，正常情况下不要把完整手机号返回给前端
  return {
    code: 0,
    message: '获取手机号成功'
  }
}
```

### 自有服务器调用

写法类似上面5+项目的云函数url化的方式，但是不同的是需要云函数返回手机号给自己服务器，这样就需要确保数据安全。

下面以一个简单的例子演示如何使用签名验证请求是否合法

```js
// 以nodejs为例
const crypto = require('crypto')

const secret = 'your-secret-string' // 自己的密钥不要直接使用示例值，且注意不要泄露
const hmac = crypto.createHmac('sha256', secret);

// 自有服务器生成签名，并以GET方式发送请求
const params = {
  access_token: 'xxx', // 客户端传到自己服务器的参数
  openid: 'xxx'
}
// 字母顺序排序后拼接签名串
const signStr = Object.keys(params).sort().map(key => {
  return `${key}=${params[key]}`
}).join('&')
hmac.update(signStr);
const sign = hmac.digest('hex')
// 最终请求如下链接，其中https://xxxx/xxx为云函数Url化地址
// https://xxxx/xxx?access_token=xxx&openid=xxx&sign=${sign} 其中${sign}为上一步得到的sign值
```


```js
// 云函数验证签名，此示例中以接受GET请求为例作演示
const crypto = require('crypto')
exports.main = async function (event){
  
  const secret = 'your-secret-string' // 自己的密钥不要直接使用示例值，且注意不要泄露
  const hmac = crypto.createHmac('sha256', secret);
  
  let params = event.queryStringParameters
  const sign = params.sign
  delete params.sign
  const signStr = Object.keys(params).sort().map(key => {
    return `${key}=${params[key]}`
  }).join('&')
  
  hmac.update(signStr);
  
  if(sign!==hmac.digest('hex')){
    throw new Error('非法访问')
  }
  
  const {
    access_token,
    openid
  } = params
  const res = await uniCloud.getPhoneNumber({
  	provider: 'univerify',
    appid: 'xxx', // DCloud appid
  	apiKey: 'xxx', // 在开发者中心开通服务并获取apiKey
  	apiSecret: 'xxx', // 在开发者中心开通服务并获取apiSecret
  	access_token: access_token,
  	openid: openid
  })
  // 返回手机号给自己服务器
  return res
}
```


### 一键登录费用说明@unilogin-fee

- 0.02元/次，失败不计费。

实际使用中需要依赖`uniCloud`云服务，这方面费用如下：在使用阿里云正式版后，每次一键登陆请求大约需要消耗uniCloud费用0.0000139元，几乎可以忽略不计。也可以粗略认为每次使用一键登陆的成本为0.0200139元/次。费用计算规则如下：

`一键登录`业务涉及费用的部分主要是云函数/云对象的使用量、调用次数、和出网流量(如：使用自定义的云函数/云对象来获取手机号)。
接下来，我们对不同资源，分别进行费用评估。

我们按照uniCloud官网列出的[按量计费](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)规则，可以简单得出如下公式：

`云函数/云对象费用 = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8`

其中：
- 资源使用量 = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数
- 调用次数 = 一键登录调用次数


我们假设如下数据模型：

- 云函数内存：512M，即0.5G （云函数内存默认为512M，用户可以自定义设置，最低可设置为128M。如果您仅使用一键登录，没有其他复杂业务，那么内存设为128M可以进一步的降低费用）
- 云函数平均单次执行时长：200毫秒，即0.2秒
- 一键登录业务平均每日调用次数：10000次
- 出网流量：单次请求 2 KB

按照如上公式，其`一键登录`业务云函数每天的费用为：

```
云函数费用（天） = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
			  = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数 + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
			  = 0.5G * 0.2S * 10000 * 0.000110592 + 10000 * 0.0133/10000 + 10000 * 2 * 0.8 / (1024 * 1024) 
			  = 0.110592 + 0.0133 + 0.0152587890625
			  = 0.1391507890625（元）
			  ≈ 0.139（元）
```

结论：如果你的`一键登录`业务平均每天获取手机号次数为10000次，使用阿里云正式版云服务空间后，对应云函数每天大概消耗0.139元，对比之前的一键登录费用，平均每次调用多花0.0000139元，几乎可忽略不计。


很明显一键登陆是比短信验证码更便宜的用户身份验证方式。
