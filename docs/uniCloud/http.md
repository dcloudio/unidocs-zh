## 使用场景
## scenes to be used

云函数/云对象URL化 是 uniCloud 为开发者提供的 HTTP 访问服务，让开发者可以通过 HTTP URL 方式访问到云函数或云对象。
Cloud function/cloud object URLization is an HTTP access service provided by uniCloud for developers, allowing developers to access cloud functions or cloud objects through HTTP URLs.

- 场景1：比如App端微信支付，需要配服务器回调地址，此时需要一个HTTP URL。
- Scenario 1: For example, WeChat payment on the App side needs to be configured with a server callback address. In this case, an HTTP URL is required.
- 场景2：非uni-app开发的系统，想要连接uniCloud，读写数据，也需要通过HTTP URL方式访问。
- Scenario 2: For a system not developed by uni-app, if you want to connect to uniCloud and read and write data, you also need to access it through HTTP URL.

url化后需要注意以下几点
The following points need to be paid attention to after urlization

- 安全：为了保障业务安全性，开发者需在代码中做好权限控制和安全防护，避免未授权访问触发敏感操作。
- Security: To ensure business security, developers need to implement permission control and security protection in the code to prevent unauthorized access from triggering sensitive operations.
- 计费：云函数开启了URL化后，如果遇到大量恶意访问，消耗云函数资源，开发者可以将云函数访问地址设置为空即可停止 HTTP 访问支持。
- Billing: After the cloud function has URLization enabled, if a large number of malicious accesses are encountered and cloud function resources are consumed, the developer can set the cloud function access address to empty to stop HTTP access support.

> 云函数自上线就支持URL化。云对象的URL化需HBuilderX 3.5.2+。下文除非特别提到云对象，否则云函数通指普通云函数和云对象。
> The cloud function supports URLization since its launch. URLization of cloud objects requires HBuilderX 3.5.2+. Hereinafter, unless cloud objects are specifically mentioned, cloud functions generally refer to common cloud functions and cloud objects.

本文档主要指导您如何在uniCloud web控制台管理和使用云函数URL化。
This document mainly guides you how to manage and use cloud function URLization in the uniCloud web console.

**使用限制**
**Usage Restrictions**

- 腾讯云免费服务空间最多只支持配置10个云函数URL化地址
- Tencent Cloud free service space only supports configuration of up to 10 cloud function URL addresses

## 操作步骤@steps
## Operation steps @steps

### 设置云函数 HTTP 访问地址@set-path
### Set cloud function HTTP access address @set-path

1. 登录[uniCloud后台](https://unicloud.dcloud.net.cn/)，选择服务空间。
1. Log in to [uniCloud background](https://unicloud.dcloud.net.cn/), and select the service space.
2. 单击左侧菜单栏【云函数】，进入云函数页面。
2. Click [Cloud Function] on the left menu bar to enter the cloud function page.
3. 点击需要配置的云函数的【详情】按钮，配置访问路径。
3. Click the [Details] button of the cloud function to be configured to configure the access path.

<img style="max-width:800px;height:auto;" src="https://web-assets.dcloud.net.cn/unidoc/zh/funPath.jpg"></img>

如果配置某云函数路径为`/test`，实际访问`/test`、`/test/a`、`/test/b`都会执行此云函数，在云函数内可以使用`event.path`区分访问来源
If the path of a cloud function is configured as `/test`, the actual access to `/test`, `/test/a`, `/test/b` will execute the cloud function, which can be distinguished by `event.path` in the cloud function access source

**注意**
**Notice**

- 阿里云使用默认域名时，在浏览器访问url化地址会触发下载。绑定自定义域名则无此问题
- When Alibaba Cloud uses the default domain name, accessing the urlized address in the browser will trigger the download. Binding a custom domain name does not have this problem

### 绑定自定义域名@custom-domain
### Bind custom domain name @custom-domain

**2021年5月25日起腾讯云绑定域名CNAME记录值由默认域名调整为腾讯云给定的`CNAME域名`，已经绑定正常使用的域名无需调整**
**From May 25, 2021, the value of the CNAME record of the domain name bound to Tencent Cloud will be adjusted from the default domain name to the `CNAME domain name' given by Tencent Cloud. The domain name that has been bound to normal use does not need to be adjusted**

1. 单击左侧菜单栏【云函数】，进入云函数页面。
1. Click [Cloud Function] on the left menu bar to enter the cloud function page.
2. 单击【云函数域名绑定】，在弹出的配置窗口中进行配置。
2. Click [Cloud Function Domain Name Binding] to configure in the pop-up configuration window.

<img style="max-width:800px;height:auto;" src="https://web-assets.dcloud.net.cn/unidoc/zh/unicloud-function-http-domain.jpg"></img>

上一步中填写域名证书且绑定成功后会返回一个`CNAME域名`，将绑定的域名配置CNAME记录值为此`CNAME域名`即可
After filling in the domain name certificate in the previous step and the binding is successful, a `CNAME domain name` will be returned. Set the CNAME record value of the bound domain name to this `CNAME domain name`.

**注意**
**Notice**

- 每个服务空间最多绑定1个自定义域名
- Each service space can be bound with at most 1 custom domain name
- uniCloud提供默认域名供体验和测试该特性
- uniCloud provides a default domain name for experience and testing of this feature
- 需要注意的是绑定的域名必须已经备案
- It should be noted that the bound domain name must have been filed
- 腾讯云单个服务空间可支持QPS收服务空间QPS限制，参考：[套餐资源](price.md#tencent-package)
- A single service space of Tencent Cloud can support QPS to receive the QPS limit of the service space, refer to: [Package Resources](price.md#tencent-package)
- 阿里云单个服务空间可支持被访问的最大 QPS 为1000（具体频次受函数并发限制）
- 阿里云绑定自定义域名要求此域名在阿里云保留备案信息，参考：[新增备案信息](https://help.aliyun.com/document_detail/36926.html)
- Alibaba Cloud binds a custom domain name to require the domain name to retain filing information in Alibaba Cloud, refer to: [Add filing information](https://help.aliyun.com/document_detail/36926.html)

如需要更高的QPS支持，请发邮件到service@dcloud.io申请，邮件模板参考：[申请解除限制邮件模板](price.md#apply-email-template)。若您还没有SSL证书，点此[快速获取](https://cloud.tencent.com/act/cps/redirect?redirect=33848&cps_key=c858f748f10419214b870236b5bb94c6)

**关于证书内容与私钥**
**About certificate content and private key**

申请证书时通常会有下载选项，下载到证书之后找到对应Nginx的证书（包含一个crt文件和一个key文件或者一个pem文件和一个key文件），以文本形式打开crt/pem文件即可看到证书内容，同样的key文件对应着私钥。其他情况请查阅证书颁发者文档。
When applying for a certificate, there is usually a download option. After downloading the certificate, find the certificate corresponding to Nginx (including a crt file and a key file or a pem file and a key file), and open the crt/pem file in text form to see the certificate. content, the same key file corresponds to the private key. Consult the certificate issuer documentation for other cases.

例：
example:

在腾讯云申请的ssl证书包含一个crt文件和一个key文件，crt的文本内容为证书内容，key文件的内容为私钥
The ssl certificate applied for in Tencent Cloud contains a crt file and a key file. The text content of the crt is the certificate content, and the content of the key file is the private key.

在阿里云申请的ssl证书包含一个pem文件和一个key文件，pem的文本内容为证书内容，key文件的内容为私钥
The ssl certificate applied for on Alibaba Cloud contains a pem file and a key file. The text content of the pem is the content of the certificate, and the content of the key file is the private key.

## 普通云函数@cf-url
## Common cloud function @cf-url

### 通过 HTTP URL 方式访问云函数@request-url
### Access cloud functions via HTTP URL @request-url

通过`https://${云函数Url化域名}/${path}`直接访问函数，其中`${path}`是配置的函数触发路径或其子路径。
Directly access the function through `https://${cloud function Urlized domain name}/${path}`, where `${path}` is the configured function trigger path or its sub-path.

### 云函数的入参@input
### Cloud function input parameters @input

使用 HTTP 访问云函数时，HTTP 请求会被转化为特殊的结构体，称之为**集成请求**，结构如下：
When using HTTP to access cloud functions, the HTTP request will be converted into a special structure, called **integration request**, the structure is as follows:

```js
{
    path: 'HTTP请求路径，如 /hello',
    httpMethod: 'HTTP请求方法，如 GET',
    headers: {HTTP请求头},
    queryStringParameters: {HTTP请求的Query，键值对形式},
    body: 'HTTP请求体',
    isBase64Encoded: 'true or false，表示body是否为Base64编码'
}
```

下面是一个示例：
Here is an example:
```js
{
    path: '/',
    httpMethod: 'GET',
    headers: {
        'host': 'xxx.example.com',
        'connection': 'close',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8'
    },
    isBase64Encoded: false,
    body: ''
}
```


**示例**
**Example**

使用GET请求`https://${云函数Url化域名}/${functionPath}?a=1&b=2`，云函数接收到的`event`为
Use GET to request `https://${cloud function Urlized domain name}/${functionPath}?a=1&b=2`, the `event` received by cloud function is

```js
{
    path: '/',
    httpMethod: 'GET',
    headers: {HTTP请求头},
    queryStringParameters: {a: "1", b: "2"},
    isBase64Encoded: false
}
```


使用POST请求`https://${云函数Url化域名}/${functionPath}`，云函数接收到的`event.body`为请求发送的数据，**uni.request默认content-type为application/json**
Use POST request `https://${cloud function Urlized domain name}/${functionPath}`, the `event.body` received by cloud function is the data sent by the request, **uni.request default content-type is application /json**

```js
// 以uni.request为例
// Take uni.request as an example
uni.request({
  method: 'POST',
  url: 'https://${云函数Url化域名}/${functionPath}',
  data: {
    a: 1,
    b: 2
  },
  success(res) {
    console.log(res);
  }
})

// 云函数收到的event为, 注意如果直接return此格式数据可能会被作为集成响应处理，参考下面的集成响应文档
// The event received by the cloud function is, note that if the data in this format is directly returned, it may be processed as an integrated response, refer to the integrated response document below
{
    path: '/',
    httpMethod: 'POST',
    headers: {
    	...
    	"content-type": 'application/json'
    },
    isBase64Encoded: false,
    body: '{"a":1,"b":2}', // 注意此处可能是base64，需要根据isBase64Encoded判断
}
```

### 云函数url化返回值
### Cloud function urlize return value

参考：[url化返回值](#output)
Reference: [urlized return value](#output)


## 云对象使用url化@cloudobject
## Cloud objects use urlized @cloudobject

云对象使用url化配置仍需按照上文的操作步骤来，参考：[url化操作步骤](#steps)
The cloud object configuration using url still needs to follow the above steps, please refer to: [url operation steps](#steps)

### 通过 HTTP URL 方式访问云对象@request-co-url
### Access cloud objects via HTTP URL @request-co-url

调用url化的云对象时，以`url化路径/云对象方法名`形式的链接访问云对象的方法。例如：云对象配置的触发路径是`/todo`，调用`/todo/addTodo`即会触发云对象的addTodo方法。方法区分大小写且不可含`/`。
When invoking a urlified cloud object, access the cloud object's method with a link in the form of `url_path/cloud_object_method_name`. For example, the trigger path of the cloud object configuration is `/todo`, and calling `/todo/addTodo` will trigger the addTodo method of the cloud object. Methods are case-sensitive and cannot contain `/`.

2022年11月11日之前，访问路径只能以方法名结尾，在此时间之后调整为，允许使用多段路径访问云对象方法。仍以上述配置为例，`/todo/addTodo/self`和`/todo/addTodo/group`都会调用云对象的addTodo方法。
Before November 11, 2022, the access path can only end with the method name. After this time, it will be adjusted to allow the use of multi-segment paths to access cloud object methods. Still taking the above configuration as an example, both `/todo/addTodo/self` and `/todo/addTodo/group` will call the addTodo method of the cloud object.

### 云对象入参@input
### Cloud object input parameter @input

url内query部分会被转换成云对象方法的入参。以下面的todo云对象为例
The query part in the url will be converted into the input parameter of the cloud object method. Take the following todo cloud object as an example

```js
module.exports = {
	addTodo: function(params) { 
		console.log(params)
        return {
            errCode: 0
        }
	}
}
```

如果通过`https://xxx.com/todo/addTodo?title=todo-title&content=todo-content`调用云对象，todo方法内的console.log会输出以下内容`{title: 'todo-title', content: 'todo-content'}`
If the cloud object is called via `https://xxx.com/todo/addTodo?title=todo-title&content=todo-content`, the console.log inside the todo method will output the following `{title: 'todo-title', content: 'todo-content'}`

需要注意的是自url内解析出的参数均为字符串类型。
It should be noted that the parameters parsed from the url are all string types.

**注意**
**Notice**

- url化方式调用云对象时，`_before`和`_after`均正常执行
- `_before` and `_after` are executed normally when the cloud object is called by urlization
- 如果需要获取其他方式传入云对象的参数（如：post一个json内容到云对象），请使用[this.getHttpInfo](cloud-obj.md#get-http-info)获取
- If you need to get the parameters passed to the cloud object in other ways (eg: post a json content to the cloud object), please use [this.getHttpInfo](cloud-obj.md#get-http-info) to get it

### 云对象url化返回值
### Cloud object urlized return value

参考：[url化返回值](#output)
Reference: [urlized return value](#output)

## url化返回值@output
## urlized return value @output

云函数、云对象可以返回`string`、`object`、`number`等类型的数据，或者返回 [集成响应](#Integrationresponse)，uniCloud会将返回值转化为正常的 HTTP 响应。
Cloud functions and cloud objects can return `string`, `object`, `number` and other types of data, or return [Integration response](#Integrationresponse), uniCloud will convert the return value into a normal HTTP response.

### 返回字符串或数字
### return string or number

云函数返回字符串，那么：
Cloud functions return strings, then:
```js
exports.main = function() {
    return 'hello gateway'
}
```

最终 HTTP 响应为：
The final HTTP response is:
```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: text/plain; charset=utf-8
content-length: 13

hello gateway
```

### 返回 Object
### return Object

返回的`Object`会被转换为 JSON，同时 HTTP 响应的`content-type`会被设置为 `application/json`：
The returned `Object` will be converted to JSON, and the `content-type` of the HTTP response will be set to `application/json`:

```js
exports.main = function() {
    return {
        foo: 'bar'
    }
}
```

最终 HTTP 响应为：
The final HTTP response is:
```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: application/json; charset=utf-8
content-length: 13

{"foo":"bar"}
```

### 返回集成响应@Integrationresponse
### Return integration response @Integrationresponse

云函数可以返回如下这样特殊结构的**集成响应**，来自由地控制响应体：
Cloud functions can return an integrated response with a special structure like the following, to freely control the response body:

```json
{
    "mpserverlessComposedResponse": true, // 使用阿里云返回集成响应是需要此字段为true
    "isBase64Encoded": true|false,
    "statusCode": httpStatusCode,
    "headers": { "headerName": "headerValue", ... },
    "body": "..."
}
```

**headers内可以返回传统服务器的所有响应头，包括Set-Cookie、Content-Type等**
**Headers can return all response headers of traditional servers, including Set-Cookie, Content-Type, etc.**

#### 使用集成响应返回HTML
#### Return HTML with integrated response

将`content-type`设置为`text/html`，即可在`body`中返回 HTML，会被浏览器自动解析：
Set `content-type` to `text/html` to return HTML in `body`, which will be automatically parsed by the browser:

**阿里云默认域名无法返回html并在浏览器中展示，只可以触发下载（无法修改Content-Disposition）。绑定自定义域名无此限制**
**Alibaba Cloud's default domain name cannot return html and display it in the browser, it can only trigger download (the Content-Disposition cannot be modified). There is no such restriction for binding a custom domain name**

```js
{
    mpserverlessComposedResponse: true, // 使用阿里云返回集成响应是需要此字段为true
    statusCode: 200,
    headers: {
        'content-type': 'text/html'
    },
    body: '<h1>Hello</h1>'
}
```

最终 HTTP 响应为：
The final HTTP response is:
```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: text/html; charset=utf-8
content-length: 14

<h1>Hello</h1>
```

#### 使用集成响应返回 JS 文件
#### Return JS file with integrated response

将`content-type`设置为`application/javascript`，即可在`body`中返回 JavaScript 文件：
JavaScript files can be returned in `body` by setting `content-type` to `application/javascript`:

```js
{
    mpserverlessComposedResponse: true, // 使用阿里云返回集成响应是需要此字段为true
    statusCode: 200,
    headers: {
        'content-type': 'application/javascript'
    },
    body: 'console.log("Hello!")'
}
```

最终 HTTP 响应为：
The final HTTP response is:
```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: application/javascript; charset=utf-8
content-length: 21

console.log("Hello!")
```

#### 使用集成响应返回二进制文件
#### Return binary with integrated response

如果返回体是诸如图片、音视频这样的二进制文件，那么可以将`isBase64Encoded`设置为`true`，并且将二进制文件内容转为 Base64 编码的字符串，例如：
If the return body is a binary file such as image, audio and video, you can set `isBase64Encoded` to `true`, and convert the binary file content to a Base64 encoded string, for example:

```js
{
    mpserverlessComposedResponse: true, // 使用阿里云返回集成响应是需要此字段为true
    isBase64Encoded: true,
    statusCode: 200,
    headers: {
        'content-type': 'image/png'
    },
    body: 'iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAY...'
}
```

最终 HTTP 响应为一张 PNG 图片：
The final HTTP response is a PNG image:

```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: image/png
content-length: 9897

<binary payload...>
```

#### 返回不同的状态码
#### return different status codes

如需重定向或返回4xx，5xx等自定义状态码等，可以使用如下方式
To redirect or return custom status codes such as 4xx, 5xx, etc., you can use the following methods

**注意：阿里云默认域名不支持在返回的header里面使用location，绑定自定义域名能正常使用**
**Note: The default domain name of Alibaba Cloud does not support the use of location in the returned header, and binding a custom domain name can be used normally**

```js
{
    mpserverlessComposedResponse: false, // 使用阿里云返回集成响应是需要此字段为true
    isBase64Encoded: false,
    statusCode: 301,
    headers: {
        'location': 'http://www.baidu.com'
    }
}
```

## 处理cookie@cookie
## Handling cookies@cookie

在某些场景下，cookie依然占有重要地位，例如在云函数URL化的情况下，获取客户端的状态
In some scenarios, cookies still play an important role, for example, in the case of URLization of cloud functions, to obtain the status of the client

在云函数中使用cookie需要依赖cookie库[npm页面地址](http://https://www.npmjs.com/package/cookie)，可以通过`npm install cookie` 安装
Using cookies in cloud functions needs to rely on the cookie library [npm page address](http://https://www.npmjs.com/package/cookie), which can be installed through `npm install cookie`

**普通云函数示例**
**Example of normal cloud function**

```js
'use strict';
//引入cookie
//Introduce cookies
const cookie = require('cookie')
exports.main = async (event, context) => {
	const cookieData = cookie.parse(event.headers.cookie || '')
	//设置cookie到客户端
	//Set the cookie to the client
	const cookieOptions = {
		//具体参数请查阅 https://www.npmjs.com/package/cookie
		//Please refer to https://www.npmjs.com/package/cookie for specific parameters
		maxAge: 60 * 60 * 24 * 7,//一周
		path:"/"
	}
	const setCookieData = cookie.serialize('app', 'appName', cookieOptions)
	return {
		statusCode: 200,
		headers: {
				'content-type': '返回数据类型',
				'set-cookie': setCookieData // 在headers内返回set-cookie用于设置客户端cookie
		},
		body: '返回数据'
	}
};
```

**云对象示例**
**Cloud Object Example**

```js
'use strict';
//引入cookie
//Introduce cookies
const cookie = require('cookie')
module.exports = {
  addTodo: function () {
    const httpInfo = this.getHttpInfo()
    const cookieData = cookie.parse(httpInfo.headers.cookie || '')
    //设置cookie到客户端
    //Set the cookie to the client
    const cookieOptions = {
    	//具体参数请查阅 https://www.npmjs.com/package/cookie
    	    //Please refer to https://www.npmjs.com/package/cookie for specific parameters
    	maxAge: 60 * 60 * 24 * 7,//一周
    	path:"/"
    }
    const setCookieData = cookie.serialize('app', 'appName', cookieOptions)
    return {
    	statusCode: 200,
    	headers: {
    			'content-type': '返回数据类型',
    			'set-cookie': setCookieData // 在headers内返回set-cookie用于设置客户端cookie
    	},
    	body: '返回数据'
    }
  }
};

```



## 注意事项@tips
## Notes @tips

- 阿里云目前请求与响应有如下限制
- Alibaba Cloud currently has the following restrictions on requests and responses
  + 请求Body大小限制，不能超过1MB。
  + Request Body size limit, which cannot exceed 1MB.
  + 响应Body大小限制，不能超过1MB。
  + Respond to the body size limit, which cannot exceed 1MB.
- 腾讯云目前请求与响应有如下限制
- Tencent Cloud currently has the following restrictions on requests and responses
  + 请求Body大小限制，文本不能超过100KB，二进制不能超过20MB。
  + Request Body size limit, text cannot exceed 100KB, and binary cannot exceed 20MB.
  + 响应Body大小限制，不能超过6MB。
  + Respond to the Body size limit, which cannot exceed 6MB.
- url化场景下，path（云函数event.path、云对象httpInfo.path）表示以配置的url化路径为根路径的访问路径。以配置`/test`为云函数url化路径，访问`/test/a/b/c`时path为`/a/b/c`
- In the urlization scenario, path (cloud function event.path, cloud object httpInfo.path) indicates the access path with the configured urlization path as the root path. To configure `/test` as the cloud function url path, when accessing `/test/a/b/c`, the path is `/a/b/c`
- 在URL化的场景无法获取客户端平台等信息，但是可以获取客户端IP、客户端userAgent
- In URLized scenarios, information such as client platform cannot be obtained, but client IP and client userAgent can be obtained.
- 接收到的post请求的请求体可能是被转成base64的，如果是这样需要进行一次转化。
- The request body of the received post request may be converted to base64, if so, a conversion is required.
    以接收text/xml格式的post请求为例
    Take receiving post requests in text/xml format as an example
    ```js
    // 云函数
    // cloud function
    exports.main = function(event) {
        let body = event.body
        if(event.isBase64Encoded){
            body = Buffer.from(body, 'base64').toString('utf8') // 将base64格式的xml内容转为xml字符串
        }
    }

    // 云对象
    // cloud object
    module.exports = {
        addTodo: function() {
            let httpInfo = this.getHttpInfo()
            let body = httpInfo.body
            if(httpInfo.isBase64Encoded){
                body = Buffer.from(body, 'base64').toString('utf8') // 将base64格式的xml内容转为xml字符串
            }
        }
    }
    ```
