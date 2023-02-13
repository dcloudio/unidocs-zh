## 使用场景

云函数/云对象URL化 是 uniCloud 为开发者提供的 HTTP 访问服务，让开发者可以通过 HTTP URL 方式访问到云函数或云对象。

- 场景1：比如App端微信支付，需要配服务器回调地址，此时需要一个HTTP URL。
- 场景2：非uni-app开发的系统，想要连接uniCloud，读写数据，也需要通过HTTP URL方式访问。

url化后需要注意以下几点

- 安全：为了保障业务安全性，开发者需在代码中做好权限控制和安全防护，避免未授权访问触发敏感操作。
- 计费：云函数开启了URL化后，如果遇到大量恶意访问，消耗云函数资源，开发者可以将云函数访问地址设置为空即可停止 HTTP 访问支持。

> 云函数自上线就支持URL化。云对象的URL化需HBuilderX 3.5.2+。下文除非特别提到云对象，否则云函数通指普通云函数和云对象。

本文档主要指导您如何在uniCloud web控制台管理和使用云函数URL化。

**使用限制**

- 腾讯云免费服务空间最多只支持配置10个云函数URL化地址

## 操作步骤@steps

### 设置云函数 HTTP 访问地址@set-path

1. 登录[uniCloud后台](https://unicloud.dcloud.net.cn/)，选择服务空间。
2. 单击左侧菜单栏【云函数】，进入云函数页面。
3. 点击需要配置的云函数的【详情】按钮，配置访问路径。

<img style="max-width:800px;height:auto;" src="https://web-assets.dcloud.net.cn/unidoc/zh/funPath.jpg"></img>

如果配置某云函数路径为`/test`，实际访问`/test`、`/test/a`、`/test/b`都会执行此云函数，在云函数内可以使用`event.path`区分访问来源

**注意**

- 阿里云使用默认域名时，在浏览器访问url化地址会触发下载。绑定自定义域名则无此问题

### 绑定自定义域名@custom-domain

**2021年5月25日起腾讯云绑定域名CNAME记录值由默认域名调整为腾讯云给定的`CNAME域名`，已经绑定正常使用的域名无需调整**

1. 单击左侧菜单栏【云函数】，进入云函数页面。
2. 单击【云函数域名绑定】，在弹出的配置窗口中进行配置。

<img style="max-width:800px;height:auto;" src="https://web-assets.dcloud.net.cn/unidoc/zh/unicloud-function-http-domain.jpg"></img>

上一步中填写域名证书且绑定成功后会返回一个`CNAME域名`，将绑定的域名配置CNAME记录值为此`CNAME域名`即可

**注意**

- 每个服务空间最多绑定1个自定义域名
- uniCloud提供默认域名供体验和测试该特性
- 需要注意的是绑定的域名必须已经备案
- 腾讯云单个服务空间可支持QPS收服务空间QPS限制，参考：[套餐资源](price.md#tencent-package)
- 阿里云单个服务空间可支持被访问的最大 QPS 为1000（具体频次受函数并发限制）
- 阿里云默认域名可支持被访问的最大 QPS 为100，推荐您绑定自定义域名以获取更大的访问频次
- 阿里云绑定自定义域名要求此域名在阿里云保留备案信息，参考：[新增备案信息](https://help.aliyun.com/document_detail/36926.html)

如需要更高的QPS支持，请发邮件到service@dcloud.io申请。若您还没有SSL证书，点此[快速获取](https://cloud.tencent.com/act/cps/redirect?redirect=33848&cps_key=c858f748f10419214b870236b5bb94c6)

**关于证书内容与私钥**

申请证书时通常会有下载选项，下载到证书之后找到对应Nginx的证书（包含一个crt文件和一个key文件或者一个pem文件和一个key文件），以文本形式打开crt/pem文件即可看到证书内容，同样的key文件对应着私钥。其他情况请查阅证书颁发者文档。

例：

在腾讯云申请的ssl证书包含一个crt文件和一个key文件，crt的文本内容为证书内容，key文件的内容为私钥

在阿里云申请的ssl证书包含一个pem文件和一个key文件，pem的文本内容为证书内容，key文件的内容为私钥

## 普通云函数@cf-url

### 通过 HTTP URL 方式访问云函数@request-url

通过`https://${云函数Url化域名}/${path}`直接访问函数，其中`${path}`是配置的函数触发路径或其子路径。

### 云函数的入参@input

使用 HTTP 访问云函数时，HTTP 请求会被转化为特殊的结构体，称之为**集成请求**，结构如下：

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

使用GET请求`https://${云函数Url化域名}/${functionPath}?a=1&b=2`，云函数接收到的`event`为

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

```js
// 以uni.request为例
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

参考：[url化返回值](#output)


## 云对象使用url化@cloudobject

云对象使用url化配置仍需按照上文的操作步骤来，参考：[url化操作步骤](#steps)

### 通过 HTTP URL 方式访问云对象@request-co-url

调用url化的云对象时，以`url化路径/云对象方法名`形式的链接访问云对象的方法。例如：云对象配置的触发路径是`/todo`，调用`/todo/addTodo`即会触发云对象的addTodo方法。方法区分大小写且不可含`/`。

2022年11月11日之前，访问路径只能以方法名结尾，在此时间之后调整为，允许使用多段路径访问云对象方法。仍以上述配置为例，`/todo/addTodo/self`和`/todo/addTodo/group`都会调用云对象的addTodo方法。

### 云对象入参@input

url内query部分会被转换成云对象方法的入参。以下面的todo云对象为例

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

需要注意的是自url内解析出的参数均为字符串类型。

**注意**

- url化方式调用云对象时，`_before`和`_after`均正常执行
- 如果需要获取其他方式传入云对象的参数（如：post一个json内容到云对象），请使用[this.getHttpInfo](cloud-obj.md#get-http-info)获取

### 云对象url化返回值

参考：[url化返回值](#output)

## url化返回值@output

云函数、云对象可以返回`string`、`object`、`number`等类型的数据，或者返回 [集成响应](#Integrationresponse)，uniCloud会将返回值转化为正常的 HTTP 响应。

### 返回字符串或数字

云函数返回字符串，那么：
```js
exports.main = function() {
    return 'hello gateway'
}
```

最终 HTTP 响应为：
```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: text/plain; charset=utf-8
content-length: 13

hello gateway
```

### 返回 Object

返回的`Object`会被转换为 JSON，同时 HTTP 响应的`content-type`会被设置为 `application/json`：

```js
exports.main = function() {
    return {
        foo: 'bar'
    }
}
```

最终 HTTP 响应为：
```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: application/json; charset=utf-8
content-length: 13

{"foo":"bar"}
```

### 返回集成响应@Integrationresponse

云函数可以返回如下这样特殊结构的**集成响应**，来自由地控制响应体：

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

#### 使用集成响应返回HTML

将`content-type`设置为`text/html`，即可在`body`中返回 HTML，会被浏览器自动解析：

**阿里云默认域名无法返回html并在浏览器中展示，只可以触发下载（无法修改Content-Disposition）。绑定自定义域名无此限制**

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
```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: text/html; charset=utf-8
content-length: 14

<h1>Hello</h1>
```

#### 使用集成响应返回 JS 文件

将`content-type`设置为`application/javascript`，即可在`body`中返回 JavaScript 文件：

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
```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: application/javascript; charset=utf-8
content-length: 21

console.log("Hello!")
```

#### 使用集成响应返回二进制文件

如果返回体是诸如图片、音视频这样的二进制文件，那么可以将`isBase64Encoded`设置为`true`，并且将二进制文件内容转为 Base64 编码的字符串，例如：

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

```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: image/png
content-length: 9897

<binary payload...>
```

#### 返回不同的状态码

如需重定向或返回4xx，5xx等自定义状态码等，可以使用如下方式

**注意：阿里云默认域名不支持在返回的header里面使用location，绑定自定义域名能正常使用**

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

在某些场景下，cookie依然占有重要地位，例如在云函数URL化的情况下，获取客户端的状态

在云函数中使用cookie需要依赖cookie库[npm页面地址](http://https://www.npmjs.com/package/cookie)，可以通过`npm install cookie` 安装

**普通云函数示例**

```js
'use strict';
//引入cookie
const cookie = require('cookie')
exports.main = async (event, context) => {
	const cookieData = cookie.parse(event.headers.cookie || '')
	//设置cookie到客户端
	const cookieOptions = {
		//具体参数请查阅 https://www.npmjs.com/package/cookie
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

```js
'use strict';
//引入cookie
const cookie = require('cookie')
module.exports = {
  addTodo: function () {
    const httpInfo = this.getHttpInfo()
    const cookieData = cookie.parse(httpInfo.headers.cookie || '')
    //设置cookie到客户端
    const cookieOptions = {
    	//具体参数请查阅 https://www.npmjs.com/package/cookie
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

- 阿里云目前请求与响应有如下限制
  + 请求Body大小限制，不能超过1MB。
  + 响应Body大小限制，不能超过1MB。
- 腾讯云目前请求与响应有如下限制
  + 请求Body大小限制，文本不能超过100KB，二进制不能超过20MB。
  + 响应Body大小限制，不能超过6MB。
- url化场景下，path（云函数event.path、云对象httpInfo.path）表示以配置的url化路径为根路径的访问路径。以配置`/test`为云函数url化路径，访问`/test/a/b/c`时path为`/a/b/c`
- 在URL化的场景无法获取客户端平台等信息，但是可以获取客户端IP、客户端userAgent
- 接收到的post请求的请求体可能是被转成base64的，如果是这样需要进行一次转化。
    以接收text/xml格式的post请求为例
    ```js
    // 云函数
    exports.main = function(event) {
        let body = event.body
        if(event.isBase64Encoded){
            body = Buffer.from(body, 'base64').toString('utf8') // 将base64格式的xml内容转为xml字符串
        }
    }

    // 云对象
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
