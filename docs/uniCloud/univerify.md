## 一键登录@univerify
## One-click login @univerify

<!--
/// meta
keyword: 手机号
keyword: mobile phone number
-->

univerify 是DCloud 推出的一键登录产品，通过与运营商深度合作，实现APP用户无需输入帐号密码，即可使用本机手机号码自动登录的能力。
univerify is a one-click login product launched by DCloud. Through in-depth cooperation with operators, APP users can automatically log in using their mobile phone numbers without entering account passwords.

univerify是替代短信验证登录的下一代登录验证方式，能消除现有短信验证模式等待时间长、操作繁琐和容易泄露的痛点。
Univerify is a next-generation login verification method that replaces SMS verification login, which can eliminate the pain points of long waiting time, cumbersome operation and easy leakage of the existing SMS verification mode.

## 重要调整
## Important adjustments

### 云函数使用一键登录扩展库@extension
### Cloud functions use one-click login extension library @extension

自`HBuilderX 3.4.0`起，一键登录相关功能移至扩展库`uni-cloud-verify`内。在一段时间内无论开发者是否使用扩展库云函数都可以正常使用`uniCloud.getPhoneNumber`。预计于2022年3月初发布的HBuilderX内强制使用扩展库，即使用在此时间点后发布的HBuilderX上传云函数时如果没有指定使用`uni-cloud-verify`扩展库的云函数将无法调用uniCloud.getPhoneNumber接口。
Since `HBuilderX 3.4.0`, one-click login related functions have been moved to the extension library `uni-cloud-verify`. For some time, `uniCloud.getPhoneNumber` can be used normally regardless of whether the developer uses the extension library cloud function or not. The extension library is expected to be mandatory in HBuilderX released in early March 2022, that is, when uploading cloud functions using HBuilderX released after this time point, cloud functions that use the `uni-cloud-verify` extension library will not be able to call uniCloud. getPhoneNumber interface.

关于扩展库的说明见：[云函数扩展库](uniCloud/cf-functions.md?id=extension)
For the description of the extension library, see: [Cloud Function Extension Library](uniCloud/cf-functions.md?id=extension)

在云函数的package.json内添加`uni-cloud-verify`的引用即可为云函数启用此扩展，无需做其他调整，完整的package.json示例如下：
This extension can be enabled for cloud functions by adding a reference to `uni-cloud-verify` in the package.json of cloud functions without any other adjustments. The complete package.json example is as follows:

```js
{
	"name": "univerify",
	"extensions": {
		"uni-cloud-verify": {} // 启用uni-cloud-jql扩展，值为空对象即可
	}
}
```

## 客户端@client
## client@client

客户端如何使用一键登录请参考此文档：[univerify 使用指南](/univerify)
Please refer to this document for how to use one-click login on the client side: [univerify usage guide](/univerify)

## 云函数@cloud
## cloud function @cloud

> 自`HBuilderX 3.4.0`起云函数需启用uni-cloud-verify之后才可以调用getPhoneNumber接口，详细说明见：[云函数使用一键登录扩展库](#extension)
> Since `HBuilderX 3.4.0`, cloud functions need to enable uni-cloud-verify before calling the getPhoneNumber interface. For details, see: [Cloud functions use one-click login extension library](#extension)

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
The call form of the interface in the cloud function is as follows

```js
const res = await uniCloud.getPhoneNumber({
  provider: 'univerify',
  appid: '_UNI_ABCDEFG', // 替换成自己开通一键登录的应用的DCloud appid
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
```

**相关文档**
**Related documents**
- [uniCloud快速上手](https://uniapp.dcloud.net.cn/uniCloud/quickstart)
- [uniCloud Quick Start](https://uniapp.dcloud.net.cn/uniCloud/quickstart)
- [云函数URL化](https://uniapp.dcloud.net.cn/uniCloud/http)
- [Cloud function URLization](https://uniapp.dcloud.net.cn/uniCloud/http)

### uni-app项目
### uni-app project

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
exports.main = async function (event){
  const res = await uniCloud.getPhoneNumber({
    appid: '_UNI_ABCDEFG', // 替换成自己开通一键登录的应用的DCloud appid
  	provider: 'univerify',
  	apiKey: 'xxx', // 在开发者中心开通服务并获取apiKey
  	apiSecret: 'xxx', // 在开发者中心开通服务并获取apiSecret
  	access_token: event.access_token,
  	openid: event.openid
  })
  // 执行入库等操作，正常情况下不要把完整手机号返回给前端
  // Perform operations such as warehousing, under normal circumstances do not return the full mobile phone number to the front end
  return {
    code: 0,
    message: '获取手机号成功'
  }
}
```

**注意**
**Notice**

- 开发期间如果重新获取过appid需要重新编译uni-app项目
- If the appid is re-acquired during development, the uni-app project needs to be recompiled

### 5+项目
### 5+ projects

5+项目不可使用callFunction请求云函数，这时候可以使用云函数URL化让5+项目通过http请求的方式访问云函数
5+ projects cannot use callFunction to request cloud functions. In this case, you can use cloud function URLization to allow 5+ projects to access cloud functions through http requests.

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
// Cloud function, the following only shows the scenario where the client sends a request with a content-type of application/json using the post method
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
  // Perform operations such as warehousing, under normal circumstances do not return the full mobile phone number to the front end
  return {
    code: 0,
    message: '获取手机号成功'
  }
}
```

### 自有服务器调用
### Own server call

写法类似上面5+项目的云函数url化的方式，但是不同的是需要云函数返回手机号给自己服务器，这样就需要确保数据安全。
The writing method is similar to the urlization method of the cloud function of the above 5+ projects, but the difference is that the cloud function needs to return the mobile phone number to its own server, so that data security needs to be ensured.

下面以一个简单的例子演示如何使用签名验证请求是否合法
The following is a simple example to demonstrate how to use the signature to verify whether the request is legitimate

```js
// 以nodejs为例
// Take nodejs as an example
const crypto = require('crypto')

const secret = 'your-secret-string' // 自己的密钥不要直接使用示例值，且注意不要泄露
const hmac = crypto.createHmac('sha256', secret);

// 自有服务器生成签名，并以GET方式发送请求
// Generate signature by own server and send request in GET mode
const params = {
  access_token: 'xxx', // 客户端传到自己服务器的参数
  openid: 'xxx'
}
// 字母顺序排序后拼接签名串
// Concatenate the signature string after sorting alphabetically
const signStr = Object.keys(params).sort().map(key => {
  return `${key}=${params[key]}`
}).join('&')
hmac.update(signStr);
const sign = hmac.digest('hex')
// 最终请求如下链接，其中https://xxxx/xxx为云函数Url化地址
// The final request is as follows, where https://xxxx/xxx is the URL of the cloud function
// https://xxxx/xxx?access_token=xxx&openid=xxx&sign=${sign} 其中${sign}为上一步得到的sign值
// https://xxxx/xxx?access_token=xxx&openid=xxx&sign=${sign} where ${sign} is the sign value obtained in the previous step
```


```js
// 云函数验证签名，此示例中以接受GET请求为例作演示
// The cloud function verifies the signature. In this example, accepting a GET request is used as an example to demonstrate
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
  // Return the phone number to the server
  return res
}
```
