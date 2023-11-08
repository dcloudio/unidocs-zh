## 一键登录@univerify
## One-click login @univerify

<!--
/// meta
keyword: 手机号
keyword: mobile phone number
-->

`univerify` 是DCloud 推出的一键登录产品，通过与运营商深度合作，实现APP用户无需输入帐号密码，即可使用本机手机号码自动登录的能力。
`univerify` is a one-click login product launched by DCloud. Through in-depth cooperation with operators, APP users can automatically log in with their mobile phone numbers without entering account passwords.

`univerify`是替代短信验证登录的下一代登录验证方式，能消除现有短信验证模式等待时间长、操作繁琐和容易泄露的痛点。
`univerify` is a next-generation login verification method that replaces SMS verification login. It can eliminate the pain points of the existing SMS verification mode, such as long waiting time, cumbersome operation, and easy leakage.

>  注意：一键登录必须是手机使用流量的前提下才能获取到手机号码，用Wi-Fi联网时无法获取到手机号码，同时如果是双卡手机，获取到的手机号码是默认移动数据的那个手机卡的号码。
> Note: One-click login must be based on the premise of using mobile data to obtain the mobile phone number. The mobile phone number cannot be obtained when connecting to the Wi-Fi network. At the same time, if it is a dual-card mobile phone, the obtained mobile phone number is the one with the default mobile data SIM card number.

## 重要调整
## Important adjustments

### 云函数使用一键登录扩展库@extension
### Cloud function uses one-click login extension library @extension

自`HBuilderX 3.4.0`起，一键登录相关功能移至扩展库`uni-cloud-verify`内。在一段时间内无论开发者是否使用扩展库云函数都可以正常使用`uniCloud.getPhoneNumber`。HBuilderX 3.4.0及之后的版本上传云函数时如果没有指定使用`uni-cloud-verify`扩展库的云函数将无法调用uniCloud.getPhoneNumber接口。
Since `HBuilderX 3.4.0`, one-click login related functions have been moved to the extension library `uni-cloud-verify`. For a period of time, regardless of whether the developer uses the extension library cloud function, `uniCloud.getPhoneNumber` can be used normally. HBuilderX 3.4.0 and later versions cannot call the uniCloud.getPhoneNumber interface if the cloud function that uses the `uni-cloud-verify` extension library is not specified when uploading the cloud function.

关于扩展库的说明见：[云函数扩展库](uniCloud/cf-functions.md?id=extension)
For instructions on the extension library, see: [Cloud function extension library](uniCloud/cf-functions.md?id=extension)

在云函数的package.json内添加`uni-cloud-verify`的引用即可为云函数启用此扩展，无需做其他调整，完整的package.json示例如下：
Add the reference of `uni-cloud-verify` in the package.json of the cloud function to enable this extension for the cloud function without any other adjustments. The complete package.json example is as follows:

```js
{
	"name": "univerify",
	"extensions": {
		"uni-cloud-verify": {} // 启用一键登录扩展，值为空对象即可
	}
}
```

## 客户端@client
## client @client

客户端如何使用一键登录请参考此文档：[univerify 使用指南](/univerify)
Please refer to this document for how to use one-click login on the client side: [univerify User Guide](/univerify)

## 云函数@cloud
## cloud function @cloud

> 自`HBuilderX 3.4.0`起云函数需启用uni-cloud-verify之后才可以调用getPhoneNumber接口，详细说明见：[云函数使用一键登录扩展库](#extension)
> Since `HBuilderX 3.4.0`, the cloud function needs to enable uni-cloud-verify before calling the getPhoneNumber interface. For details, see:[Cloud function uses one-key login extension library](#extension)

客户端调用一键登录接口会获取如下结果
When the client calls the one-click login interface, the following results will be obtained

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
Use the `openid` and `access_token` in the above results to call the interface in the `cloud function` to obtain the mobile phone number

云函数内接口调用形式如下
The interface call form of the cloud function is as follows

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
**Related documents**
- [uniCloud快速上手](https://uniapp.dcloud.net.cn/uniCloud/quickstart)
- [uniCloud Quick Start](https://uniapp.dcloud.net.cn/uniCloud/quickstart)
- [云函数URL化](https://uniapp.dcloud.net.cn/uniCloud/http)
- [URLization of cloud functions](https://uniapp.dcloud.net.cn/uniCloud/http)

### uni-app项目@uni-app

如果开发uni-app项目可以使用callFunction的方式调用云函数
If you develop a uni-app project, you can use callFunction to call cloud functions

```js
// 客户端
// client
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
  // handle errors
})

// 云函数
// cloud function
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
  // Perform operations such as warehousing. Under normal circumstances, do not return the complete mobile phone number to the front end
  return {
    code: 0,
    message: '获取手机号成功'
  }
}
```

**注意**
**Notice**

- 开发期间如果重新获取过appid需要重新编译uni-app项目
- If the appid is reacquired during development, the uni-app project needs to be recompiled

### 5+项目
### 5+ items

5+项目不可使用callFunction请求云函数，这时候可以使用云函数URL化让5+项目通过http请求的方式访问云函数
5+ projects cannot use callFunction to request cloud functions. At this time, cloud function URLs can be used to allow 5+ projects to access cloud functions through http requests.

```js
// 客户端
// client
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
// cloud function, the following only shows the scenario where the client uses the post method to send a request with content-type application/json
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
  // Perform operations such as warehousing. Under normal circumstances, do not return the complete mobile phone number to the front end
  return {
    code: 0,
    message: '获取手机号成功'
  }
}
```

### 自有服务器调用
### own server call

写法类似上面5+项目的云函数url化的方式，但是不同的是需要云函数返回手机号给自己服务器，这样就需要确保数据安全。
The writing method is similar to the urlization method of the cloud function of the above 5+ projects, but the difference is that the cloud function needs to return the mobile phone number to its own server, so that data security needs to be ensured.

下面以一个简单的例子演示如何使用签名验证请求是否合法
The following is a simple example to demonstrate how to use the signature to verify whether the request is legal

```js
// 以nodejs为例
// Take nodejs as an example
const crypto = require('crypto')

const secret = 'your-secret-string' // 自己的密钥不要直接使用示例值，且注意不要泄露
const hmac = crypto.createHmac('sha256', secret);

// 自有服务器生成签名，并以GET方式发送请求
// Self-owned server generates a signature and sends the request in GET mode
const params = {
  access_token: 'xxx', // 客户端传到自己服务器的参数
  openid: 'xxx'
}
// 字母顺序排序后拼接签名串
// concatenate the signature string after alphabetical sorting
const signStr = Object.keys(params).sort().map(key => {
  return `${key}=${params[key]}`
}).join('&')
hmac.update(signStr);
const sign = hmac.digest('hex')
// 最终请求如下链接，其中https://xxxx/xxx为云函数Url化地址
// The final request is the following link, where https://xxxx/xxx is the Url address of the cloud function
// https://xxxx/xxx?access_token=xxx&openid=xxx&sign=${sign} 其中${sign}为上一步得到的sign值
// https://xxxx/xxx?access_token=xxx&openid=xxx&sign=${sign} where ${sign} is the sign value obtained in the previous step
```


```js
// 云函数验证签名，此示例中以接受GET请求为例作演示
// The cloud function verifies the signature. In this example, accepting the GET request is taken as an example for demonstration
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
  // Return the phone number to the own server
  return res
}
```


### 一键登录费用说明@unilogin-fee
### One-click login fee description @unilogin-fee

- 0.02元/次，失败不计费。
- 0.02 yuan/time, failure will not be charged.

实际使用中需要依赖`uniCloud`云服务，这方面费用如下：在使用阿里云正式版后，每次一键登陆请求大约需要消耗uniCloud费用0.0000139元，几乎可以忽略不计。也可以粗略认为每次使用一键登陆的成本为0.0200139元/次。费用计算规则如下：
In actual use, you need to rely on the `uniCloud` cloud service, and the costs are as follows: After using the official version of Alibaba Cloud, each one-click login request will consume about 0.0000139 yuan in uniCloud, which is almost negligible. It can also be roughly considered that the cost of using one-key login every time is 0.0200139 yuan/time. The fee calculation rules are as follows:

`一键登录`业务涉及费用的部分主要是云函数/云对象的使用量、调用次数、和出网流量(如：使用自定义的云函数/云对象来获取手机号)。
The part of the `one-click login` business that involves expenses is mainly the usage of cloud functions/cloud objects, the number of calls, and the outbound traffic (for example: using a custom cloud function/cloud object to obtain a mobile phone number).
接下来，我们对不同资源，分别进行费用评估。
Next, we conduct cost assessments for different resources.

我们按照uniCloud官网列出的[按量计费](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)规则，可以简单得出如下公式：
According to the [pay-as-you-go](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay) rules listed on the uniCloud official website, we can simply get the following formula:

`云函数/云对象费用 = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8`
`Cloud function/cloud object cost = resource usage * 0.000110592 + number of calls * 0.0133 / 10000 + outbound traffic * 0.8`

其中：
in:
- 资源使用量 = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数
- Resource usage = cloud function memory (in G) * average execution time of a cloud function (in seconds) * number of calls
- 调用次数 = 一键登录调用次数
- Number of calls = number of one-click login calls


我们假设如下数据模型：
We assume the following data model:

- 云函数内存：512M，即0.5G （云函数内存默认为512M，用户可以自定义设置，最低可设置为128M。如果您仅使用一键登录，没有其他复杂业务，那么内存设为128M可以进一步的降低费用）
- Cloud function memory: 512M, which is 0.5G (the cloud function memory is 512M by default, and the user can customize the setting, and the minimum can be set to 128M. If you only use one-key login and no other complicated business, then the memory can be set to 128M for further reduced cost of
- 云函数平均单次执行时长：200毫秒，即0.2秒
- The average execution time of a cloud function: 200 milliseconds, or 0.2 seconds
- 一键登录业务平均每日调用次数：10000次
- One-click login service average daily calls: 10,000 times
- 出网流量：单次请求 2 KB
- Outbound traffic: 2 KB for a single request

按照如上公式，其`一键登录`业务云函数每天的费用为：
According to the above formula, the daily cost of the `one-click login` business cloud function is:

```
云函数费用（天） = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
			  = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数 + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
			  = 0.5G * 0.2S * 10000 * 0.000110592 + 10000 * 0.0133/10000 + 10000 * 2 * 0.8 / (1024 * 1024) 
			  = 0.110592 + 0.0133 + 0.0152587890625
			  = 0.1391507890625（元）
			  ≈ 0.139（元）
```

结论：如果你的`一键登录`业务平均每天获取手机号次数为10000次，使用阿里云正式版云服务空间后，对应云函数每天大概消耗0.139元，对比之前的一键登录费用，平均每次调用多花0.0000139元，几乎可忽略不计。
Conclusion: If your "one-click login" business obtains mobile phone numbers 10,000 times on average per day, after using the official cloud service space of Alibaba Cloud, the corresponding cloud function will consume about 0.139 yuan per day. Compared with the previous one-click login fee, the average per Each call costs 0.0000139 yuan more, which is almost negligible.


很明显一键登陆是比短信验证码更便宜的用户身份验证方式。
Obviously, one-click login is a cheaper user authentication method than SMS verification codes.
