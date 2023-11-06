## 简介@intro

云函数是运行在云端的 `JavaScript` 代码，是基于 `Node.js` 的扩展。

在常规的 `Node API` 基础上，uniCloud的云函数环境内置了`uniCloud`对象，这个对象内置了网络、数据库等各种API。开发者未学习过 `Node.js` 也没有关系，只需要看uniCloud的文档，掌握这个`uniCloud`对象的API即可。

每个云函数是一个js包，在云函数被调用时，由 serverless 调度系统分配硬件资源启动一个 node 环境来运行这个云函数。

在HBuilderX中可以新建云函数（HBuilderX 3.4 同时可以新建云对象）。
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/createFun-a.jpg)

每个云函数是一个目录，其中普通云函数有`index.js`入口文件，云对象的入口文件则是`index.obj.js`。

一个最简单的云函数只需要这个入口js文件，在里面编写代码即可。当然也可以在这个js中require该云函数目录下的其他js、json文件。

云函数的配置文件和 npm规范 相同，在云函数目录下可新建一个 package.json 来存放配置。uniCloud云函数扩展了 package.json，增加了一些特有的配置项。[详见](/uniCloud/cf-functions?id=packagejson)

云函数启动后实例会保留一段时间（如15分钟），超过保留期后若该云函数一直没有被再调用，那这个实例会被释放。所以云函数有冷启动的概念。不过由于js实例的启动要比php和java更快，所以js更适合serverless方式。

**注意事项**
- 云函数内使用commonjs规范，不可使用import、export，参考：[commonjs模块](http://nodejs.cn/api/modules.html#modules_modules_commonjs_modules)
- 不同项目使用同一个服务空间时，不可使用同名云函数。同名云函数会相互覆盖。
- 在HBuilderX创建云函数时，如果新云函数与服务器上已存在同名云函数，会用新函数覆盖。所以应先选择从服务空间下载云函数。
- 单个云函数大小限制为10M（包含`node_modules`），过大的云函数影响运行性能，也会增加计费的gbs。同时支付宝小程序云与腾讯云支持在云端安装`node_modules`，此时不占用云函数体积。
- uniCloud的阿里云版与支付宝小程序云版，暂不可使用相对路径读取文件（比如`fs.readFileSync('./info.txt')`），可以使用绝对路径`fs.readFileSync(path.resolve(__dirname,'./info.txt'))`

## 云函数的分类

云函数有若干子概念，包括 普通云函数、云对象、公共模块、clientDB的action云函数、uniCloud扩展库。

- 云函数：通过传统json接口方式和客户端通信，客户端使用`uniCloud.callfunction("")`调用云函数
- 云对象：是通过前端导入对象来操作的，客户端使用`uniCloud.importObject("")`导入云对象。详见[云对象](/uniCloud/cloud-obj)
- 公共模块：用于不同的云函数/云对象，抽取和共享相同代码，详见[公共模块文档](/uniCloud/cf-functions?id=公共模块)
- action云函数（不推荐使用）：为了弥补clientDB客户端直接操作数据库的局限而设计的，详见[clientDB action文档](/uniCloud/clientdb?id=action)。从HBuilderX 3.6.11开始，推荐使用[数据库触发器](jql-schema-ext.md)替代action云函数。
- uniCloud扩展库：为了裁剪和控制云函数体积而设计的，一些不太常用的功能比如Redis，独立为可选扩展库，避免增大每个云函数的体积，详见[uniCloud扩展库](/uniCloud/cf-functions?id=扩展库)

HBuilderX中uniCloud项目的云函数均在项目的`uniCloud/cloudfunctions`目录下，目录结构如下：

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
|——— cloudfunctions               云函数目录
|   │───common                    云函数公用模块目录 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/cf-common">详情</a>
|   |   └──hello-common           云函数公用模块
|   |      │──index.js            公用模块代码
|   |      └──package.json        公用模块package.json
|   │───uni-clientDB-actions      （推荐用数据库触发器替代action云函数）
|   │      └──new_action.js       clientDB action代码 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action">详情</a>
|   │───function-name             云函数目录
|   │     │──index.js             云函数代码
|   │     └──package.json         包含云函数的配置信息，如url化、定时设置、可用内存等内容 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=packagejson">详情</a>
|   └───object-name               云对象目录
|         │──index.obj.js         云对象代码
|         └──package.json         包含云对象的配置信息，可用内存等内容 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=packagejson">详情</a>
	</code>
</pre>

## 客户端和云函数的通信@clientcallfunction

uni-app客户端和传统服务器通信时，使用`uni.request`的ajax请求方式。uniCloud下不再使用它，有更好的云端一体的通信方式。

uniCloud体系里，客户端和服务端的云函数通信，有4种方式：

|			|传统的restful方式|callfunction方式|云对象方式|clientDB方式|
|:-:|:-:|:-:|:-:|:-:|
|简述		|通过配置[云函数URL化](/uniCloud/http)，把云函数转为传统的http链接	|云函数默认并不自带http链接|把callfunction的函数式调用，升级为模块化的对象调用|客户端直接操作云数据库|
|前端调用方式|传统ajax|uni-app客户端通过`uniCloud.callFunction(functionname)`来调用云函数|uni-app客户端通过`uniCloud.importObject(objectname)`导入一个云对象，直接使用这个对象的方法	|uni-app客户端通过`<uniCloud-db>`组件或`uniCloud.database()` API来访问uniCloud数据库。也支持搭配action云函数追加服务器逻辑	|
|适用场景	|http链接需要自己注册域名。如果前端是uni-app，则不推荐使用URL化。如果是非uni-app的系统需要访问云函数，只能使用URL化	|相比云函数URL，callfunction更加安全、更serverless，不暴露域名和ip，不怕攻击，也无需注册域名|uni-app 3.4起支持。相比callfunction方式。代码更加精简、逻辑更加清晰、开发更加高效	|如果uni-app前端发起的服务器请求目的主要是查询或操作数据库，则推荐使用clientDB方式|

云函数是uniCloud的基础，本质上 clientDB 和 云对象 都是建立在云函数上针对特定场景的优化。
- clientDB针对的场景是数据库操作，它优化了可以不写或少写服务器代码
- 云对象针对的场景是非数据库操作或不宜前端暴露的数据库操作时，和uni-app客户端的通信方式。它优化了代码结构，更精简、简单


### clientDB方式

**直观体验代码示例**

clientDB分API方式和组件方式，此处使用API方式来演示
```js
// 客户端js直接操作云数据库，查询list表的数据。无需服务器代码
const db = uniCloud.database() // 获取云数据库的引用
db.collection('list').get()
  .then((res)=>{
    // res 为数据库查询结果
  }).catch((err)=>{
    console.log(err); 
  })
```

由于篇幅较长，学习clientDB需另见文档[clientDB](clientdb.md)

- clientDB适用的情况：

如果客户端使用uni-app开发，且向uniCloud服务空间的请求主要是为了操作云数据库（无论增删改查），那么推荐使用clientDB方式，由uni-app客户端直接操作云数据库。

如果操作数据库的同时，还需要同时执行一些云端逻辑：HBuilderX 3.6.11以前使用action云函数；从HBuilderX 3.6.11开始，推荐使用[数据库触发器](jql-schema-ext.md)替代action云函数。

- clientDB不适用的情况：

1. 请求不操作云数据库，比如向外部web系统发请求、操作redis、删除云文件等；
2. 操作的云数据库请求不希望暴露在前端；
3. 数据库表和字段数量多而接口数量少。给每个数据配置权限的工作量超过了控制少数接口权限的工作量；
4. 权限体系非常复杂，除了用户和管理员外还有较多其他权限条件或动态权限。此时在schema.json/schema.ext.js中编写代码的复杂度超过了写接口。

### 云对象方式

云对象和clientDB最大的区别，是云对象把数据库操作（以及其他逻辑）封装在云对象的方法里面。

它无法像clientDB那样无需开发服务器代码，它仍需在客户端和云端分别写代码。但它的应用场景不受限制。上文中不适用clientDB的情况，都可以使用云对象解决。

**直观体验代码示例**

云端云对象代码，云对象名称：testco，有一个sum方法

```js
module.exports = {
	sum(a, b) {
		// 此处省略a和b的有效性校验
		return a + b
	}
}
```

然后在客户端的js中，import这个testco对象，调用它的sum方法

```js
const testco = uniCloud.importObject('testco') //第一步导入云对象
async function sum () { //注意方法或生命周期需使用async异步方式
	try {
		const res = await testco.sum(1,2) //导入云对象后就可以直接调用该对象的方法了，注意使用异步await
		console.log(res) // 结果是3
	} catch (e) {
		console.log(e)
	}
}
```

由于篇幅较长，学习云对象需另见文档[云对象](cloud-obj.md)

clientDB和云对象可以混合使用：
1. 比如官方提供了[uni-id-pages](uni-id-pages.md)，是基于云对象的登录注册系统，开发者可以导出这个插件处理账户体系，然后剩余的业务如果不算复杂，就可以使用clientDB搞定。
2. 一个业务的用户端和admin端也可以是不同的技术栈。比如业务端有复杂的动态权限，而管理端只有一个admin管理员使用，那么admin端使用[schema2code](schema2code.md)会非常高效，而这些技术都基于clientDB。

### 普通云函数callFunction方式

- 普通云函数适用的情况：

在HBuilderX 3.5.2之前，需要URL化和定时运行时，只能使用普通云函数；在HBuilderX 3.5.2+，云对象也支持了URL化和定时运行。

官方不推荐开发者使用云函数，有相关需求推荐使用云对象替代云函数。

目前官方还未提供基于云对象的router模式的框架，有相关需求可以使用三方框架。

**直观体验代码示例**

```js
// 客户端发起调用云函数hellocf，并传入data数据
uniCloud.callFunction({
	name: 'hellocf',
	data: {a:1,b:2}
}).then((res) => {
	console.log(res.result) // 结果是 {sum: 3}
}).catch((err) => {
	console.error(err)
})
```

```js
// 云函数hellocf的代码，接收到客户端传递的data，并对其中a和b相加返回给客户端
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	//此处省略event.a和event.b的有效性校验
	//返回数据给客户端
	return {sum : event.a + event.b}
};

```

由于篇幅较长，需另见文档[云函数callfunction方式](/uniCloud/cf-callfunction)

### 云函数URL化方式

可以让云函数/云对象生成一个HTTP URL。这样非uni-app应用，可以通过ajax请求和云函数/云对象通信。

在 uniCloud Web控制台进行URL化配置。

由于篇幅较长，需另见文档[云函数URL化](http.md)。


### 云函数请求中的中间状态通知通道

云函数在执行期间可以将中间状态发送给客户端，详情参考：[云函数请求中的中间状态通知通道](sse-channel.md)


### uniCloud响应体规范@resformat

`uniCloud响应体规范`（uniCloud response format），是DCloud制定的、服务器给客户端返回json数据的一种建议格式。

云对象、clientDB、uni-id公共模块均支持此规范。

**由来**

uniCloud服务器给客户端返回的数据格式一般是json，但json的格式具体是什么没有约定。比如返回错误码，是叫`code`还是叫`errCode`？错误内容是`message`还是`errMsg`？内容的国际化如何处理？

如果没有一套统一的格式，在客户端将无法编写有效的网络拦截器，无法统一处理错误。

另外，如果不同的插件，云端返回的数据格式千差万别，那使用者整合这些插件也会非常麻烦。国际化更无法落地。

为此DCloud推出了`uniCloud响应体规范`。

为了与uni-app前端的API错误回调风格统一，uniCloud响应体规范定义的云端返回信息（尤其是报错时）应包含`errCode`和`errMsg`。

#### HBuilderX 3.6.10及之后版本的错误规范

错误规范继承自[uni错误规范](/tutorial/err-spec.md)

#### HBuilderX 3.6.10之前版本的错误规范

```json
// 失败返回值
{
  "errCode": 'uni-id-account-banned',
  "errMsg": '账号被禁用'
}
```

- errCode

errCode在成功时应返回数字`0`,失败时应返回一个以插件id开头的“字符串”，每个单词以连字符（`-`）分割。做出这样的规定是为了防止不同插件之间出现重复错误码

以`'uni-id-account-banned'`错误码为例，`uni-id`为插件id，`account-banned`为错误缩写。

如果业务开发的代码并不发布插件市场，那么为了避免下载了一个市场的插件产生冲突，推荐使用不包含“-”的字符串来做errCode（插件市场的所有插件ID必须包含“-”）。

后续uniCloud会提供自动根据errCode对errMsg进行国际化处理的功能，开发者仅需保证云函数返回值满足`uniCloud响应体规范`即可。

- errMsg

errMsg用于存放具体错误信息，包括展示给开发者、终端用户的错误信息

#### 请求成功的响应

除此之外响应体规范还包含`newToken`字段，用于token的自动续期（云对象接收含有newToken的响应后会自动更新storage内存储的`uni_id_token`及`uni_id_token_expired`，此行为新增于`HBuilderX 3.4.13`）。开发者一般无需关心此数据，uni-app客户端和云端uni-id之间会自动管理token及续期。

`uniCloud响应体`示例如下：

```json
// 成功返回值
{
  "errCode": 0,
  "errMsg": '登录成功',
  "uid": 'xxx', // 其他信息
  "newToken": { // 用于下发新token给客户端
	  "token": 'xxx',
	  "tokenExpired": 'xxx'
  }
}
```

HBuilderX内使用代码块`returnu`可以快速输入以下代码（`HBuilderX 3.4.0`及以上版本）: 

```js
return {
	errSubject: '', // HBuilderX 3.6.10新增
	errCode: 0,
	errMsg: ''
}
```

## uniCloud API列表

云函数支持 js 和 nodejs 的标准API，如`console.log()`、`setTimeout()`，另见[nodejs官网](https://nodejs.org/en/docs/)。nodejs版本，详见[云函数运行环境](?id=runtime)

除了标准API外，云函数环境中内置了`uniCloud`对象，扩展了一批新API，实际开发中更常用的是uniCloud的扩展API。见下：

|API						|描述																																			|
|--							|--																																				|
|uniCloud.database()		|云数据库对象 [详情](uniCloud/cf-database.md)																									|
|uniCloud.databaseJQL()		|云函数中使用JQL语法操作数据库 [详见](uniCloud/jql-cloud.md)，需添加扩展库																			|
|uniCloud.redis()			|使用redis [详见](uniCloud/redis.md)，需添加扩展库																							
|uniCloud.uploadFile()		|云函数上传文件到云存储 [详情](uniCloud/storage?id=clouduploadfile)																				|
|uniCloud.downloadFile()	|云函数下载云存储的文件到云函数运行环境 [详情](uniCloud/storage?id=clouddownloadfile)															|
|uniCloud.deleteFile()		|云函数删除云存储的文件 [详情](uniCloud/storage?id=clouddeletefile)																				|
|uniCloud.getTempFileURL()	|获取云存储文件的临时路径 [详情](uniCloud/storage?id=cloudgettempfileurl)																		|
|uniCloud.customAuth()		|使用云厂商自定义登录，仅腾讯云支持[详情](uniCloud/authentication.md?id=cloud-custom-auth)														|
|uniCloud.callFunction()	|云函数/云对象中调用另一个云函数 [见下](#callbyfunction)	|
|uniCloud.importObject()	|云函数/云对象中调用另一个云对象 [详情](cloud-obj.md?id=call-by-cloud)	|
|uniCloud.httpclient		|云函数中通过http访问其他系统 [见下](#httpclient)																		|
|uniCloud.httpProxyForEip	|使用云厂商代理访问http服务（阿里云的解决微信需要固定IP的方案），仅阿里云云端环境支持 [详见](#aliyun-eip)，新增于`HBuilderX 3.5.5`|
|uniCloud.sendSms()			|发送短信，需添加扩展库 [详见](uniCloud/send-sms.md)																											|
|uniCloud.getPhoneNumber()	|获取一键登录手机号，需添加扩展库 [详见](uniCloud/univerify.md?id=cloud)																						|
|uniCloud.init()			|获取指定服务空间的uniCloud实例 [详见](uniCloud/concepts/space.md?id=multi-space)														|
|uniCloud.logger			|云函数中打印日志到[uniCloud web控制台](https://unicloud.dcloud.net.cn/)的日志系统（非HBuilderX控制台）[详情](rundebug.md?id=uniCloudlogger)															|
|uniCloud.getRequestList	|获取当前云函数实例内正在处理的请求Id列表 [详见](#get-request-list)，新增于`HBuilderX 3.5.5`|
|uniCloud.getClientInfos	|获取当前云函数实例内正在处理的请求对应的客户端信息列表 [详见](#get-client-infos)，新增于`HBuilderX 3.5.5`|
|uniCloud.getCloudInfos		|获取当前云函数实例内正在处理的请求对应的云端信息列表 [详见](#get-cloud-infos)，新增于`HBuilderX 3.5.5`|

## 错误对象@uni-cloud-error

云函数调用uniCloud接口时（包括请求云函数、云对象、云存储等）可能存在抛出错误的场景，此时会抛出uniCloud标准的错误对象（以下记为uniCloudError），uniCloudError包含以下属性

|属性		|类型	|必备	|说明												|
|--			|--		|--		|--													|
|errCode	|string	|是		|错误码												|
|errMsg		|string	|是		|错误信息											|
|requestId	|string	|否		|请求Id，用于排查错误								|
|detail		|object	|否		|仅云对象主动返回错误对应的响应体规范时会有此属性	|

另外uniCloudError对象上还有code属性和message属性，两者均不推荐使用。

## 访问数据库

云函数中支持访问本服务空间下的、或经授权的其他服务空间下的，数据库。

- 使用 JQL 语法操作数据库，另见[文档](uniCloud/jql-cloud.md)
- 使用 MongoDB 语法操作数据库，另见[文档](uniCloud/cf-database.md)

## 访问其他HTTP服务@httpclient

### uniCloud.httpclient.request@unicloud-httpclient-request

云函数中如需要请求其他http服务，则使用`uniCloud.httpclient`。无需额外依赖，就可以请求任何 HTTP 和 HTTPS 协议的 Web 服务。`uniCloud.httpclient`返回的是一个[urllib实例](https://github.com/node-modules/urllib)。

**uniCloud.httpclient.request(URL,requestOptions)**

**requestOptions参数说明**

|参数名							|类型																																																				|是否必填	|默认值	|说明																																																																																			|
|----								|----																																																				|----			|----		|----																																																																																			|
|method							|String																																																			| -				|GET		|HTTP 请求方法, 默认为：GET. 可选值： GET, POST, DELETE, PUT																																																							|
|data								|Object																																																			| -				|-			|发送的数据																																																																																|
|dataAsQueryString	|Boolean																																																		| -				|true		|是否强制转换data为queryString																																																																						|
|content						|String &#124; Buffer																																												| -				|-			|手动设置请求的payload，设置后会忽略data																																																																	|
|stream							|ReadStream																																																	|-				|-			|发送请求正文的可读数据流																																																																									|
|writeStream				|WriteStream																																																|-				|-			|接受响应数据的可写数据流																																																																									|
|consumeWriteStream	|Boolean																																																		|-				|true		|是否等待 writeStream 完全写完才算响应全部接收完毕																																																												|
|files							|Array&lt;ReadStream&#124;Buffer&#124;String&gt; &#124; Object &#124; ReadStream &#124; Buffer &#124; String| -				|-			|上传的文件，设置后将会使用 multipart/form-data 格式。如果未设置method，将会自动将method设置为POST																																				|
|contentType				|String																																																			| -				|-			|上传数据的格式，设为`json`会自动在`header`内设置`Content-Type: application/json`																																													|
|nestedQuerystring	|Boolean																																																		| -				|-			|转换data为queryString时默认不支持嵌套Object，此选项设置为true则支持转换嵌套Object																																												|
|dataType						|String																																																			| -				|-			|返回的数据格式，可选值为 'json'（返回数据转为JSON），'text'（返回数据转为字符串）， ''（返回数据不做处理，默认值）																												|
|fixJSONCtlChars		|Boolean																																																		|-				|false	|在JSON.parse之前处理响应结果中的控制字符（Control Character）																																																						|
|headers						|Object																																																			| -				|-			|请求头																																																																																		|
|timeout						|Number &#124; Array																																												| -				|5000			|超时时间设置。设置为数组时第一项为请求超时，第二项为返回超时。设置为数字时相当于同时设置请求超时和返回超时，即`timeout:3000`效果等于`timeouut:[3000,3000]`								|
|auth								|String																																																			|-				|-			|简单登录授权（Basic Authentication）参数，必须按照 `user:password` 格式设置																																															|
|digestAuth					|String																																																			|-				|-			|摘要登录授权（Digest Authentication）参数，必须按照 `user:password` 格式设置																																															|
|agent							|[http.Agent](https://nodejs.org/api/http.html#http_class_http_agent)																				|-				|-			|http代理，如不使用可设为false																																																																						|
|httpsAgent					|[https.Agent](https://nodejs.org/api/https.html#https_class_https_agent)																		|-				|-			|https代理，如不使用可设为false																																																																						|
|ca									|String&#124;Buffer&#124;Array																																							|-				|-			|证书内容																																																																																	|
|rejectUnauthorized	|Boolean																																																		|-				|true		|是否在证书不受信任时返回错误																																																																							|
|pfx								|String&#124;Buffer																																													|-				|-			|包含了私钥, 证书和CA certs, 一般是 PFX 或者 PKCS12 格式																																																									|
|key								|String&#124;Buffer																																													|-				|-			|PEF格式的服务器的私钥																																																																										|
|cert								|String&#124;Buffer																																													|-				|-			|PEM格式的服务器证书密钥																																																																									|
|passphrase					|String																																																			|-				|-			|私钥或pfx密码的字符串																																																																										|
|ciphers						|String																																																			|-				|-			|使用或排除的cipher																																																																												|
|secureProtocol			|String																																																			|-				|-			|SSL 使用的方法，例如，`SSLv3_method` 强制 SSL 版本为3。																																																									|
|followRedirect			|Boolean																																																		|-				|false	|收到3xx响应时是否自动重定向																																																																							|
|maxRedirects				|Number																																																			|-				|10			|最高重定向次数																																																																														|
|formatRedirectUrl	|Function																																																		|-				|-			|手动格式化url																																																																														|
|beforeRequest			|Function																																																		|-				|-			|请求发送前的钩子																																																																													|
|streaming					|Boolean																																																		|-				|false	|是否直接返回响应流，开启 streaming 之后，HttpClient 会在拿到响应对象 res 之后马上返回， 此时 result.headers 和 result.status 已经可以读取到，只是没有读取 data 数据而已。|
|gzip								|Boolean																																																		|-				|false	|是否支持 gzip 响应格式。开启 gzip 之后，HttpClient 将自动设置 Accept-Encoding: gzip 请求头， 并且会自动解压带 Content-Encoding: gzip 响应头的数据。											|
|timing							|Boolean																																																		|-				|false	|是否开启请求各阶段的时间测量																																																																							|
|enableProxy				|Boolean																																																		|-				|false	|是否启用代理																																																																															|
|proxy							|String																																																			|-				|null		| 代理地址																																																																																|
|lookup							|Function																																																		|-				|-			|自定义DNS查询函数																																																																												|
|checkAddress				|Function																																																		|-				|-			|校验请求地址																																																																															|
|trace							|Boolean																																																		|-				|false	|是否启用捕获堆栈																																																																													|

**注意**

默认情况下request接口不会处理返回的数据，即不传`dataType`参数时会返回buffer类型的数据，如需自动解析json格式的返回结果，需要将`dataType`设置为`"json"`

**示例代码**

```js
const res = await uniCloud.httpclient.request(apiUrl, {
    method: 'POST',
    data: {
      test: 'testValue'
    },
    contentType: 'json', // 指定以application/json发送data内的数据
    dataType: 'json' // 指定返回值为json格式，自动进行parse
  })
console.log(res)
```

返回数据结构如下

```js
{
	"data": {"name": "DCloud"}, // 响应内容
	"status": 200, // 状态码
	"headers": { // 响应头，仅作示例，不同服务器返回的有差异
		"date": "Tue, 29 Dec 2020 08:10:30 GMT",
		"content-type": "application/json",
		"content-length": "276",
		"connection": "keep-alive",
		"server": "gunicorn/19.9.0",
		"access-control-allow-origin": "*",
		"access-control-allow-credentials": "true"
	}
}

```


### uniCloud.request@unicloud-request

> 新增于HBuilderX 3.8.10

为简化http请求的调用uniCloud新增了`uni.request`调用方法类似的http请求接口`uniCloud.request`。

**参数说明**

|属性					|类型											|必填	|默认值	|说明																																					|
|:-						|:-												|:-		|:-			|:-																																						|
|url					|String										|是		|				|服务器接口地址																																|
|data					|Object/String/ArrayBuffer|否		|				|请求的参数																																		|
|header				|Object										|否		|				|请求头																																				|
|method				|String										|否		|GET		|请求方法，GET、POST、DELETE、PUT																							|
|timeout			|Number										|否		|60000	|超时时间，单位 ms																														|
|dataType			|String										|否		|json		|如果设为 json，会对返回的数据进行一次 JSON.parse，responseType非text时不生效	|
|responseType	|String										|否		|text		|设置响应的数据类型。合法值：text、buffer																			|
|sslVerify		|Boolean									|否		|true		|验证 ssl 证书																																|

**返回值说明**

|属性				|类型											|必备	|说明									|
|:-					|:-												|:-		|:-										|
|statusCode	|number										|是		|开发者服务器接口地址	|
|data				|Object/String/ArrayBuffer|是		|响应结果							|
|header			|Object										|是		|响应头								|

**代码示例**

```js
const res = await uniCloud.request({
  url: 'https://example.com'
})
console.log(res.statusCode)
console.log(res.data)
```

### 发送formdata类型数据

实际业务中常有使用云函数发送formdata类型数据的需求，比如微信小程序提供的一些服务端接口（图片内容安全检测、识别图片二维码等），可以参考以下示例进行发送

```js
'use strict';
const fs = require('fs')
const path = require('path')
const FormData = require('form-data'); // 此form-data需要使用npm安装，地址：https://www.npmjs.com/package/form-data
exports.main = async (event, context) => {
  const form = new FormData()
  form.append('media', fs.readFileSync(path.resolve(__dirname, './test.jpg')), { // 为方便演示此处直接使用云函数目录下的test.jpg文件
    filename: 'test.jpg',
    contentType: 'image/jpeg'
  });
  form.append('otherParam', 'otherParam content');
  const res = await uniCloud.httpclient.request('https://httpbin.org/post', {
    method: 'POST',
    content: form.getBuffer(), // 请求内容
    headers: form.getHeaders(), // 请求头
    dataType: 'json' // 此处指定为json表示将此请求的返回值解析为json
  })
  return res
};

```

## 访问其他websocket服务@websocket-client

云函数无法作为websocket服务器使用，如有相关需求可以尝试使用uni-push 2.0实现，参考：[uni-push 2.0](uni-push/introduction.md)。

本章节内容介绍云函数如何作为websocket客户端使用。为简化调用方式uniCloud新增了`uni.connectSocket`方法类似的接口`uniCloud.connectSocket`。

**参数说明**

|参数名		|类型								|必填	|说明						|
|:-				|:-									|:-		|:-							|
|url			|String							|是		|服务器接口地址	|
|header		|Object							|否		|请求头					|
|protocols|Array&lt;String&gt;|否		|子协议数组			|

**返回值说明**

调用此接口返回SocketTask对象，见下一章节介绍

### SocketTask@socket-task


#### SocketTask.onMessage(CALLBACK)

监听 WebSocket 接受到服务器的消息事件

**回调函数**

WebSocket 接受到服务器的消息事件的回调函数

**回调函数中的参数**

|属性	|类型								|说明							|
|:-		|:-									|:-								|
|data	|String/Buffer	|服务器返回的消息	|

#### SocketTask.send(OBJECT)

通过 WebSocket 连接发送数据

**参数**

|属性	|类型								|是否必填	|说明						|
|:-		|:-									|:-				|:-							|
|data	|String/Buffer	|是				|需要发送的内容	|

#### SocketTask.close(OBJECT)

关闭 WebSocket 连接

**参数**

|属性		|类型		|默认值										|是否必填	|说明																										|
|:-			|:-			|:-												|:-				|:-																											|
|code		|Number	|1000（表示正常关闭连接）	|否				|一个数字值表示关闭连接的状态号，表示连接被关闭的原因。	|
|reason	|String	|													|否				|一个可读的字符串，表示连接被关闭的原因。								|

#### SocketTask.onOpen(CALLBACK)

监听 WebSocket 连接打开事件

**回调函数**

WebSocket 连接打开事件的回调函数

**回调函数中的参数**

|属性	|类型								|说明							|
|:-		|:-									|:-								|
|data	|String/ArrayBuffer	|服务器返回的消息	|

#### SocketTask.onClose(CALLBACK)

监听 WebSocket 连接关闭事件

**回调函数**

WebSocket 连接关闭事件的回调函数

**回调函数中的参数**

|属性		|类型		|说明																										|
|:-			|:-			|:-																											|
|code		|number	|一个数字值表示关闭连接的状态号，表示连接被关闭的原因。	|
|reason	|string	|一个可读的字符串，表示连接被关闭的原因。								|

#### SocketTask.onError(CALLBACK)

监听 WebSocket 错误事件

**回调函数**

WebSocket 错误事件的回调函数

**回调函数中的参数**

|属性		|类型		|说明			|
|:-			|:-			|:-				|
|errMsg	|String	|错误信息	|


### 示例@socket-example

以下云函数示例代码，从websocket服务器获取消息拼接后返回给客户端，如果遇到错误会抛出错误

```js
'use strict';
exports.main = async (event, context) => {
  const socketTask = uniCloud.connectSocket({
    url: 'wss://xxx.com'
  })
  socketTask.onOpen(async () => {
    await socketTask.send({
      data: 'send some data to server'
    })
    console.log('send data complete')
  })
  const SOCKET_TIMEOUT = 10000

  let error
  let result = ''
  socketTask.onMessage(({
    data
  } = {}) => {
    console.log('message data: ', data);
    result += data
    if (data === '[DONE]') {
      socketTask.close()
    }
  })
  socketTask.onError(function(err) {
    console.log('error', err)
    error = err
  })
  let isClosed = false
  const timeout = setTimeout(() => {
    if (isClosed) {
      return
    }
    error = new Error('socket timeout')
    socketTask.close()
  }, SOCKET_TIMEOUT)
  return new Promise((resolve, reject) => {
    socketTask.onClose(function(...args) {
      isClosed = true
      clearTimeout(timeout)
      console.log('close', ...args)
      if (error) {
        reject(error)
      } else {
        resolve({
          result
        })
      }
    })
  })
};
```


## 请求和环境API

由于存在[单实例多并发](#concurrency)的情况，实例级的uniCloud对象，和每个请求request是一对多的关系。

这也造成了与请求相关的上下文，比如客户端信息，需要通过请求来获取。

为了更好的管理请求和请求相关的上下文，uniCloud提供了下面一批API。

### 获取请求id列表@get-request-list

**示例**

```js
uniCloud.getRequestList()
// 返回值：['3228166e-3c17-4d58-9707-xxxxxxxx']
```

如没有配置[单实例多并发](#concurrency)，数组里只会返回一项内容。配置后可能会多项，正在并发的所有请求的requestId都会返回。

当返回多项时，在uniCloud对象上无法明确当前请求是数组中的哪一个。所以提供了其他方法来获取当前请求：
- 云对象通过`this.getUniCloudRequestId()`。[详情](cloud-obj.md#get-request-id)
- 云函数通过函数自带参数context。[详情](cf-callfunction.md#context)

### 获取客户端信息列表#get-client-infos

同理，考虑到单实例多并发，`uniCloud.getClientInfos()`获取客户端信息也是一个数组。

```js
const clientInfos = uniCloud.getClientInfos() 
```

返回值
```js
clientInfos = [{
  appId: '__UNI_xxxxx',
  requestId: '3228166e-3c17-4d58-9707-xxxxxxxx'
  // ...
}]
```

如未开启单实例多并发，那么数组只有1项。单实例多并发场景下返回正在并发的所有请求的客户端信息列表。

**返回值**

getClientInfos返回的信息，是在客户端的[uni.getSystemInfo](/api/system/info.md#getsysteminfo)的基础之上，增加了一些额外的信息。

除了`getSystemInfo`返回字段外，还包含以下信息

|属性名		|类型		|说明																																																																					|
|--				|--			|--																																																																						|
|requestId|string	|请求Id，可以使用此字段筛选出当前请求的客户端信息																																															|
|clientIP	|string	|客户端ip																																																																			|
|userAgent|string	|客户端ua，注意非本地运行环境下客户端getSystemInfoSync也会获取ua参数并上传给云对象，但是云对象会从http请求头里面获取ua而不是clientInfo里面的ua|
|source		|string	|调用来源，返回值见下。																																																												|
|scene		|string	|场景值。客户端[uni.getLaunchOptionsSync](/api/getLaunchOptionsSync.md#getlaunchoptionssync)返回的scene参数，													|

云函数调用来源source，它的值域为：

| 取值			     | 说明													    |
|-----------|--------------------|
| client		  | uni-app客户端导入云对象调用	 |
| function	 | 由其他云函数或云对象调用			    |
| http			   | 云对象URL化后通过http访问调用 |
| timing		  | 定时任务调用云对象						    |
| server		  | 云函数右键"上传并运行"						   |

**注意事项**

- 客户端上报的信息在理论上存在被篡改可能，实际业务中应验证前端传来的数据的合法性
- 除了clientIP外，其他客户端信息只有使用uni-app客户端以callFunction或者importObject方式访问云函数或云对象时才有
- 云对象与云函数内获取客户端platform稍有不同，云函数未拉齐vue2、vue3版本app平台的platform值，vue2为`app-plus`，vue3为`app`。云对象无论客户端是vue2还是vue3，在app平台获取的platform均为`app`。这一点在使用uni-id时需要特别注意，详情见：[uni-id文档 preferedAppPlatform](uniCloud/uni-id.md?id=prefered-app-platform)

除了`uniCloud.getClientInfos()`API，在云函数context和云对象this中，也可以直接获取当前客户端信息。
- 云对象通过`this.getClientInfo()`。[详情](cloud-obj.md#get-client-info)
- 云函数通过函数自带参数context。[详情](cf-callfunction.md#context)

### 获取云端信息@get-cloud-infos

同上，为了兼容并发场景，获取云端信息`uniCloud.getCloudInfos()`返回的也是数组。

**示例**

```js
const cloudInfos = uniCloud.getCloudInfos() 
cloudInfos = [{
  provider: 'aliyun',
  spaceId: 'xxxxx',
  functionName: 'xxx',
  functionType: 'xxxx',
  requestId: '3228166e-3c17-4d58-9707-xxxxxxxx'
}]
```

**返回值**

| 参数名			        | 类型	     | 必备	 | 说明													                                       |
|---------------|---------|-----|-------------------------------------------------------|
| provider		    | string	 | 是		 | 服务空间供应商，支付宝小程序云：`alipay`，阿里云为：`aliyun`，腾讯云为：`tencent` |
| spaceId		     | string	 | 是		 | 服务空间Id												                                    |
| functionName	 | string	 | 是		 | 云函数名称												                                     |
| functionType	 | string	 | 是		 | 云对象为`cloudobject`、云函数为`cloudfunction`			              |
| requestId		   | string	 | 是		 | 请求Id，可以使用此字段筛选出当前请求的云端信息			                           |

除了`uniCloud.getCloudInfos()`API，在云函数context和云对象this中，也可以直接获取当前请求的云端信息。
- 云对象通过`this.getCloudInfo()`。[详情](cloud-obj.md#get-cloud-info)
- 云函数通过函数自带参数context。[详情](cf-callfunction.md#context)


上述3个API，都因为单实例多并发而被设计成数组方式。实际上，大多数开发者并不使用单实例多并发。

在不考虑单实例多并发时，也可以直接使用uniCloud的getRequestList、getClientInfos、getCloudInfos方法中第一个数组项。

或者在云对象的this和云函数的context里获取相关上下文信息也可以。


## 扩展库@extension

uniCloud的api中，有些api对应的实现，其代码体积较大，且这些功能并不是每一个云函数都会使用。为了方便开发者控制云函数的体积，设计了`uniCloud扩展库`的概念。

开发者可以对云函数目录点右键，管理公共模块和扩展库依赖，在其中选择要加载的扩展库。这个可视化界面对应的数据在云函数目录下的 package.json 内的`extensions`字段下。

注意：未引用扩展库的，使用uniCloud相应api时会报错。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uniPush-glkzk.jpg)

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uniPush-kzk.jpg)

**目前支持的扩展库如下**

- JQL扩展库[uni-cloud-jql]：用于在云函数内使用JQL语法操作数据库，详见：[JQL扩展库](uniCloud/jql-cloud.md)
- redis扩展库[uni-cloud-redis]：云函数内使用redis，详见：[redis扩展库](uniCloud/redis.md)
- 发送短信扩展[uni-cloud-sms]：云函数中发送短信，详见：[sms扩展](uniCloud/send-sms?id=extension)
- 一键登录与实人认证扩展[uni-cloud-verify]：手机App调用运营商一键登录服务时，云函数中获取到真实手机号， 详见：[一键登录扩展库](uniCloud/univerify?id=extension)。核验终端操作者的真实身份，详见：[uni实人认证](frv/intro.md)
- 统一推送服务扩展库[uni-cloud-push]：云函数内使用uni-push，详见：[统一推送服务扩展库](uniCloud/uni-cloud-push/api.md)

以下是一个开启了redis扩展库的云函数package.json示例，注意此文件不支持注释，下方示例中的注释仅为演示

```js
{
  "name": "add-article",
  "version": "1.0.0",
  "description": "新增文章",
  "main": "index.js",
	"extensions": {
		"uni-cloud-redis": {} // 配置为空对象即可，后续如有扩展参数会在此处配置
	}
}
```

## 公共模块@common

云函数支持公共模块。多个云函数/云对象的共享部分，可以抽离为公共模块，然后被多个云函数引用。由于篇幅较长，[详见](uniCloud/cf-common)

## 使用npm

云函数的运行环境是 `Node.js`，因此我们可以使用 `npm` 安装第三方依赖。

注意：阿里云目前仅支持全量上传云函数（整个`node_modules`文件夹全部上传，会在上传前自动在本地安装依赖，不会直接使用云函数目录下的node_modules），因此提醒开发者精简依赖，否则可能会每次上传时间很慢，影响开发体验。并且太大的npm库影响云函数的运行性能。

腾讯云会在上传云函数后自动安装需要的npm依赖。

Tips:
- 目前每个云函数上传包大小限制为10M。如果npm包很大，阿里云的整体上传机制会无法满足需求。此时只能选择腾讯云，交给腾讯云自动安装依赖。


## 云函数/云对象中调用云函数@callbyfunction

### 调用三方云函数或云对象

用法同客户端调用云函数，仍然是`uniCloud.callfunction`，但不支持callback形式。

**请求参数**

|字段			|类型			|必填	|说明					|
|---			|---			|---	|---					|
|name			|String		|是		|云函数名称。	|
|data			|Object		|否		|云函数参数。	|

**响应参数**

|字段			|类型		|必备	|说明												|
|---			|---		|---	|---												|
|errCode	|String	|否		|状态码，操作成功则不返回。	|
|errMsg		|String	|否		|错误描述。									|
|result		|Object	|否		|云函数执行结果。						|
|requestId|String	|否		|请求序列号，用于错误排查。	|

**示例代码**

```javascript
let callFunctionResult = await uniCloud.callFunction({
    name: "test",
    data: { a: 1 }
})
```

**注意**

由于调用方不是uni-app客户端，云函数的context、云对象的this.getClientInfo等API无法获取客户端信息，包括 uni-id-token。

可以在云函数互调时手动传递 token ，或者校验调用来源（source）为云函数（function）时不验证用户 token。

云函数/云对象互相调用时调用方会通过公网访问被调用方，访问速度不如直接将逻辑放在调用方执行。使用前请确保你确实需要此功能。

`HBuilderX 3.4.0`版本之前**云函数右键本地运行时**，里面的代码再次callFunction会调用云端的云函数而不是本地云函数，此bug后续版本已修复。

### 云函数递归调用自身@recurrence

除了调用三方云函数，事实上云函数还可以递归调用自己。

当一个云函数实例的资源不能满足需求，或超时时间不够用时。比如要给10万个用户发送短信，而短信发送接口一次调用最多支持50个手机号码，这样最少需要调用2000次接口才能完成；而一个云函数实例完成不了2000次接口的调用。这种场景就可以使用云函数递归调用，分解任务实现。

示例代码如下：

```js
// 当前云函数名称 send-sms-cf
'use strict';
const db = uniCloud.database();
const dbCmd = db.command
const userTable = db.collection('uni-id-users')
exports.main = async (event, context) => {
	//执行业务逻辑
	let res = await sendSms(event.before_id)
	if (res.errCode) {
		return res
	}else{
		// 如果没有报错，就让当前云函数 调用当前云函数（云对象同理）。注意：这里是异步的
		uniCloud.callFunction({
			name: 'send-sms-cf',
			data: {
				before_id: res.before_id
			}
		}).catch(e=>{
			console.log(e.message);
		}).then(e=>{
			console.log(e.result);
		})
		
		// 等待500毫秒，给一个请求发出去的时间
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(res)
			}, 500)
		})
	}

	async function sendSms(before_id) {
		console.log('before_id',before_id);
		let where = {
			phone: dbCmd.exists(true),
			//..这里可以写你自己的其他条件，如超过多久没登录的用户 last_login_date < Date.now() - 3600*24*...
		}
		if(before_id){
			//高性能分页查询，以上一次查询的最后一条数据的id被起始id
			where._id = dbCmd.gt(before_id)
		}
		
		let res = await userTable.where(where)
			.limit(50)
			.orderBy("_id", "asc")
			.get()

		if (!res.data.length) {
			return {
				errCode: 'sendSms-invalid',
				errMsg: '结束，没有符合条件的接收者'
			}
		}
		let phoneList = res.data.map(item => item.phone)
		let sendSmsRes = await uniCloud.sendSms({
			phoneList,
			appid: '__UNI__xxxxxxx',
			smsKey: '****************',
			smsSecret: '****************',
			templateId: '100**', // 请替换为自己申请的模板id
			data: {
				text1: 'xxx',
				text2: 'xxx'
			}
		})
		if (sendSmsRes.errCode) {
			return sendSmsRes
		}
		return {
			errCode: 0,
			before_id: res.data[res.data.length - 1]._id
		}
	}
};
```

注意：如果不小心把递归云函数写成死循环，就把云函数的内容全部删除，重新上传覆盖即可


### 云函数内访问其他服务空间@call-by-function-cross-space

> 仅支付宝小程序云与腾讯云支持

在支付宝小程序云与腾讯云服务空间的云函数内支持获取**同账号**下其他服务空间的uniCloud实例，参考：[一个应用访问多个服务空间](uniCloud/concepts/space.md?id=multi-space)，并使用此实例调用对应服务空间的云函数。

```javascript
//开发者创建了多个服务空间，则需手动初始化。注意这是前端代码，不是云函数代码
const myCloud = uniCloud.init({
  provider: 'tencent',
  spaceId: 'xxxx-yyy'
});
//通过uniCloud实例调用云开发的API
myCloud.callFunction()
myCloud.uploadFile()
```

**注意**

- 连接本地云函数调试时，如果存在跨服务空间调用，则callFunction会使用云端云函数

## serverless环境说明@runtime

serverless是动态分配计算资源的，由此会引发的出一批特有概念：冷启动、实例、并发请求、无状态、伪全局变量。

### 云函数冷启动、热启动@launchtype

基于云函数按需执行的特点, 函数在不被触发的时候, 计算资源是不被激活的。

当一个云函数初次被触发时，其完整过程如下：

1. severless实例化计算实例
2. 加载函数代码
3. 启动 node
4. 执行云函数代码

函数被调用时，执行这些完整步骤的过程称作`冷启动`, 冷启动的耗时一般在一秒左右。 

一个云函数实例冷启动后，serverless调度中心会保留这个实例一定时间。在实例保留期间，客户端再次请求云函数，不会触发冷启动，速度会更快。实例的详细定义[见下](#instance)

云函数实例和执行进程都被复用的情况下称之为`热启动`, 热启动性能要好非常多，因为它只有一个步骤：
1. 执行云函数代码

如果一个云函数实例长时间没有被再次调用，则该计算实例会被**回收**；后续再次调用该云函数时，就会再次触发云函数的**冷启动**。

不同云厂商的函数实例回收时间不同：
- 支付宝小程序云：60秒
- 阿里云：15分钟内没有第二次访问的云函数，就会被回收
- 腾讯云：30分钟

直观的体验表现为：隔了很久不用的云函数，第一次用就会比较慢，然后立即访问第二次，则很快，毫秒级响应。

注：冷启动虽慢但也不会超过1.5秒，如超过1.5秒应该是云函数写的有问题或网络有问题。

三家云厂商仍然在优化冷启动问题。目前给开发者的建议是：
1. 使用clientDB可以减少遇到冷启动问题的概率
2. 非高频访问的云函数，合并到高频云函数中。也有的开发者使用单路由方式编写云函数，即在一个云函数中通过路由处理实现了整个应用的所有后台逻辑。参考[插件](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&cat1=7&orderBy=UpdatedDate)。
3. 非高频访问的云函数，可以通过定时任务持续运行它（注意阿里云公测版的定时任务最短周期大于资源回收周期）
4. 支付宝小程序云与阿里云支持配置云函数的单实例多并发，请参考：[单实例多并发](cf-functions.md?id=concurrency)

### 实例与请求@instance

`实例`，指云函数的一个执行环境，可以简单的理解为一个node进程。

每次客户端发起`请求`（request）时，serverless的调度中心会查看已启动、且空闲的实例，分配一个实例来接收这个请求。如果没有空闲实例，则新起一个实例。

新起一个实例需要一定时间，也即上文说的冷启动问题。详见[冷启动](#launchtype)

一个实例启动后，一般在1秒内就会完成请求，但serverless调度中心会保留这个实例一定时间（时间见上一节）。在实例保留期间，客户端再次请求云函数，不会触发冷启动。

也就是说，**在实例保留期间，1个实例会接受多个客户端请求。**

所以要注意`实例`和`请求`不是一对一关系。

`请求`（request），指一次连接云函数的网络请求。不同请求有不同的上下文信息（比如客户端UA）。

所以想要获取客户端信息，一定注意不是在实例的全局对象上获取，而是需要在请求的上下文中获取。[详见]()

在uniCloud阿里云版与支付宝小程序版中还提供了1个实例的多并发请求配置，即同一时间多个请求可以并发执行。
也就是同一时间的请求发到云函数时，没有配置单实例多并发会新开一个云函数实例，配置了单实例多并发则不会新开实例，在一个实例中增加并发。
详见[单实例多并发](#concurrency)。

一个云函数，可以同时存在多个实例。比如cf1云函数，如未配置单实例多并发，10个请求同时达到云函数，就会开10个实例。

不管开了多少实例，云函数的计费是按请求计费的。实例响应请求后到保留期结束之间，如果不发生新请求是不会计费的。

### 云函数的无状态和全局变量@state-less

因为实例可能第一次启动，也可能已经启动，所以云函数中的js全局变量其实是伪全局变量。也就是**云函数是无状态的**。

在云对象中，写在`module.exports = {}`之前，云函数写在`exports.main = async (event, context) => {}`之前的变量定义，是伪全局变量。

它们在实例有效期内的多次请求中会复用。

以如下代码为例，`count`作为全局变量，当多次调用该云函数时，可能会出现变量累加的情况。

- 云对象示例
```js
let count = 0;
module.exports = {
	methoda() {
		return count++
	}
}
```

- 云函数示例

```javascript
let count = 0;
exports.main = async (event, context) => {
	return count++
}
```

上面2个示例中，实例未复用时，也就是冷启动时，count的值每次都是0；若实例被复用，则可能返回1、2、3等各种意外情况。

当然，可以用这个方法来获知一个实例被重用了多少次请求。

**require由于存在缓存，也存在同样的问题。尽量不要直接修改require返回的内容。**

**uniCloud全局对象也是跨请求的，与请求相关的内容不应该挂载到uniCloud全局对象上。**

**正确的全局变量，应该使用如下方案：**
- uni-config-center：静态全局变量可以使用uni提供的配置中心。[详见](uni-config-center.md)
- redis：动态全局变量使用redis。[详见](redis-introduction.md)

### 请求的上下文

由于上节提到的，uniCloud全局对象是实例级的、跨请求的，1个实例内uniCloud只会在冷启动时进行一次初始化。

所以与请求相关的上下文，比如客户端信息，需要通过请求来获取。

为了让开发者清晰的了解实例和请求的关系，uniCloud提供了如下方案。

1. 通过uniCloud.getRequestList()，可以获得当前实例的请求id列表
每个请求，都有一个requestId，在运行回调里、云端日志里都有体现。
```js
uniCloud.getRequestList()
// 返回值：['3228166e-3c17-4d58-9707-xxxxxxxx']
```
	
	- 如果未配置阿里云的单实例多并发，getRequestList()返回的数组里面只有一项，即只能拿到当前的请求id。
	- 如果配置了阿里云的单实例多并发，当并发发生时，这个列表就会返回多项，当前并发的每个requestId都在里面。

2. uniCloud.getClientInfos()，可以返回当前所有请求的客户端信息。
该方法返回一个数组，当前每个并发执行中的请求的客户端信息都在里面。
```json
[
  {
    "appId": "__UNI_xxxxx",
    "requestId": "3228166e-3c17-4d58-9707-xxxxxxxx"
    // ...
  }
]
```

	- 如果未配置阿里云的单实例多并发，getRequestList()返回的数组里面只有一项，即只能拿到当前的请求id。
	- 如果配置了阿里云的单实例多并发，当并发发生时，这个列表就会返回多项，当前并发的每个requestId都在里面。

3. 

如果是uniCloud私有云，
如果想获取与请求相关的信息，比如这次请求的客户端UA，或云函数环境信息，无法直接在uniCloud全局对象中获取。


云函数入口入参包含一个event和一个context，这两个参数和请求相关，每次有新请求到云函数实例时就会有一个新的event对象和一个新的context对象

云对象的this和event、context类似，每个请求都对应一个单独的this。

### 单实例多并发@concurrency

> 仅支付宝小程序云与阿里云支持

默认情况下云函数仅支持单实例单并发，即同一时间一个实例仅可为一个请求服务（不同请求同一时间访问会被分派到不同实例进行处理）。不过在uniCloud web控制台中，阿里云可以通过修改云函数单实例并发度，可以修改云函数同一时间最多能处理多少请求。

假设同时有3个请求需要处理：

当实例并发度设置为1时，需要创建3个实例来处理这3个请求，每个实例分别处理1个请求。而每开启一个实例都会引发云函数冷启动；

当云函数的实例并发度设置为10时（即1个实例可以同时处理10个请求），只需要创建1个实例就能处理这3个请求。这样后面2个并发请求不会有因云函数实例创建带来的冷启动问题。

相关文档：[云函数实例及部分变量说明](#instance) 、[云函数的无状态](#state-less)

**开启方式**

云函数详情页面配置单实例并发度即可，支持1-100之间的数值

**效果**

- 有效减少并发请求时云函数冷启动次数
  
**使用注意**

- 虽然支付宝小程序云与阿里云云函数支持配置多并发，但在高并发下异步请求排队效果未必好于新开一个实例。尤其是并发操作数据库性能不佳。**一般情况下不要设置过大的并发度，可以自己针对业务代码测试比较下是否启用并发或并发数配成多少**
- 云函数内存使用量会随着并发量增大而增加，过大的内存可能导致OOM
- 注意云函数是有超时时间的。设置过大的单实例多并发可能会导致实例底层网络请求排队从而导致请求超时，
- 如果并发的不同请求对全局变量同时进行读写会污染全局变量，可能会导致意想不到的后果，详见[全局变量](#state-less)

**适用场景**

|场景									|适用性	|理由																	|
|:-:									|:-:	|:-:																	|
|函数中有较多时间在等待下游服务的响应	|适用	|等待响应一般不消耗资源，在一个实例内并发处理可以节省费用。				|
|函数中有共享状态且不能并发访问			|不适用	|例如全局变量，多请求并发执行修改共享状态可能会导致错误。				|
|单个请求的执行要消耗大量CPU及内存资源	|不适用	|多请求并发执行会造成资源争抢，可能会导致内存不足（OOM）或者延时增加。	|

**关于旧版本uni-id公共模块的特殊说明**

旧版本uni-id公共模块指uni-id-common推出之前的版本。[详见](uni-id.md)

```js
// 开启单实例多并发前的uni-id用法
const uniID = require('uni-id')
exports.main = async function(event, context) {
  const res = uniID.login({
    // ...一些参数
  })
  return res
}

// 由于uni-id默认会从一个内置全局变量上获取客户端平台信息，不同请求会修改此全局变量可能造成混乱，开启单实例多并发后需要将uni-id修改为如下写法
let uniID = require('uni-id')
exports.main = async function(event, context) {
  let uniIDIns = uniID.createInstance({ // 创建uni-id实例，其上方法同uniID
    context: context // 传入context防止不同请求互相影响
    // config: {} // 完整uni-id配置信息，使用config.json进行配置时无需传此参数
  })
  const res = uniIDIns.login({
    // ...一些参数
  })
  return res
}
```

不同于旧版uni-id公共模块，新版uni-id-common不可直接require后使用，必须使用createInstance方法

**进阶**

开启单实例多并发后的全局变量复用并非一定是坏的结果，如果你很了解此行为，也可以对此进行有效的利用

例：[ip-filter](https://ext.dcloud.net.cn/plugin?id=4619)中就利用云函数全局缓存一些ip访问信息来限制单ip访问频率，可以下载示例项目体验一下

受单实例多并发的影响，云函数全局存放与本次请求有关的信息会造成混乱。因此uniCloud提供了根据当前requestId获取客户端信息和云端信息。参考以下文档

- [云函数获取当前requestId](cf-callfunction.md#context)
- [云对象获取当前requestId](cloud-obj.md#get-request-id)
- [获取当前云函数实例正在处理的请求对应的requestId列表](#get-request-list)
- [获取当前云函数实例正在处理的请求对应的客户端信息列表](#get-client-infos)
- [获取当前云函数实例正在处理的请求对应的云端信息列表](#get-cloud-infos)


### 临时存储空间

云函数是运行在云端的代码，运行环境由云服务器弹性调配，这是和传统`Node.js`应用很大的区别。

换言之，云函数每次执行的宿主环境（可简单理解为虚拟机或服务器硬件）可能相同，也可能不同，因此传统`Node.js`开发中将部分信息存储本地硬盘或内存的方案就不再适合。

所以，不建议使用node的fs文件系统相关的API。建议通过云数据库、云存储、redis的方案替代。

### 云函数中的异步行为

书写云函数时应注意`async`、`await`的使用，`nodejs`有内置模块`util`可以将符合`error-first`形式`callback`的函数转换为`promise`形式，[详情参考](https://nodejs.org/api/util.html#util_util_promisify_original)，比如以下示例：

```js
const {
	promisify
} = require('util')

let testCallback = {
	value: 'testCallbackValue',
	echo: function(num, callback) {
		setTimeout(() => {
      // 第一个参数为error，第二个为返回值
			callback(null, `${this.value}:${num}`)
		}, 2000)
	}
}

exports.main = async function() {
  // num=2，不传入callback参数，callback会自动作为回调函数处理
	let val = await promisify(testCallback.echo).call(testCallback, 2)
	console.log(val)
	return val
}

```

如果想在云函数内使用回调形式可以让云函数返回一个promise，如以下示例：

```js
exports.main = async function() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('some return value')
		}, 1000)
	})
}
```


### return的策略@return

- 阿里云 return 之后云函数立即终止，逻辑不会继续执行，包括 settimeout 或其他异步操作都会立即终止。
- 腾讯云 node8 return 之后也不会继续执行，但 node12 可以配置是否继续执行
- HBuilderX 本地运行
	* 不通过客户端发起，直接本地运行云函数/云对象，return 之后还可以执行300ms
	* 通过客户端连接本地云函数/云对象，return 之后可以继续执行

**腾讯云因为按 GBS 对云函数计费，在 node12 时，尤其要注意，如果未有效终止云函数，会一直计费**

### node版本
云函数运行在 node 环境中。可以使用 node api `process.version` 获取 node 版本。

- uniCloud 支付宝小程序云默认是 nodejs18, 也可以在 package.json 中选择 nodejs16
- uniCloud 阿里云默认是 node8.17.0，也可以在 package.json 中选择 node12
- uniCloud 腾讯云默认是 node8.9.4，也可以在 package.json 中选择 node12
- HBuilderX 本地运行环境使用的是 HBuilderX 自带的 node 版本，目前为 node16。在 package.json 选择 node版本 只云端生效，且只在第一次上传云函数时生效。

**注意**
- 本地开发一旦使用了 node12 的专用 api，上传云函数时必须在package.json里手动配置选择 node12 的运行环境。
	之所以没有在云端默认统一使用 node12，是因为腾讯云 node12 的 return 策略有一些特殊情况，[见下](?id=return)。
- 运行环境在云端云函数创建时设定，不可通过更新云函数来修改。
	也就是第一次上传云函数的时候，package.json里配了什么，就是什么。如果需要修改node环境，需先删除云端云函数，重新上传。

node版本可以在云函数的package.json文件的`cloudfunction-config->runtime`字段进行配置，详情参考：[云函数package.json](uniCloud/cf-functions.md?id=packagejson)


### 时区

云端的云函数中使用的时区是 `UTC+0`，而不是 `UTC+8`，在云函数中使用时间时需特别注意。

云函数在HBuilderX本地运行时，时区则是电脑的时区，很可能是 `UTC+8`。建议统一使用时间戳，可以规避时区问题。

## 云函数配置

云函数除了代码，还有配置。在[uniCloud web控制台](https://unicloud.dcloud.net.cn/)可以配置；在HBuilderX项目中，云函数根目录的`package.json`也是存放配置的地方。

### 运行内存@memory

云函数运行内存为单个云函数实例使用的内存。

支付宝小程序云云函数默认运行内存512MB，阿里云正式版默认512MB，腾讯云云函数默认运行内存大小为256MB

计算云函数GBs资源消耗时腾讯云会以此内存*运行时间（100ms为阶梯向上取整）得到消耗量。阿里云会以实际运行时间计算GBs，不会按100ms阶梯向上取整

::: warning 注意
阿里云一般场景（比如包含数据库访问时）不建议将内存配置为128MB。如果开发起见遇到数据库响应缓慢，在排除索引等因素的影响后可以检查下是不是云函数内存配置为了128MB，如果是建议调整为256MB
:::

### 超时时间@timeout

支付宝小程序云定时任务触发最大支持3小时超时时间，非定时触发时超时时间为3分钟，客户端请求云函数如果超出3分钟云函数断开连接后会停止运行。

阿里云定时任务触发最大支持600秒超时时间，非定时触发时超时时间为2分钟，客户端请求云函数如果超出60秒云函数断开连接后会停止运行。

腾讯云定时任务触发最大支持900秒超时时间。非定时触发时超时时间为30秒，客户端请求云函数时如果超出30秒云函数断开链接后会继续运行，最大能运行到配置的超时时间。

如果超时时间仍然不够用，可以参考云函数递归调用，连续执行多个云函数处理一个任务[详情查看](uniCloud/cf-functions.md?id=recurrence)

### 固定出口IP@eip

#### 腾讯云@tencent-eip

serverless默认是没有固定的服务器IP的，因为有很多服务器资源在后台供随时调用，每次调用到哪个服务器、哪个ip都不固定。

但一些三方系统，要求配置固定ip白名单，比如微信公众号的js sdk，此时只能提供固定ip地址。

腾讯云的收费版，提供了云函数的固定出口ip，在uniCloud [Web控制台](https://unicloud.dcloud.net.cn)，创建付费的腾讯云服务空间，选择一个云函数，在云函数的详情界面可以开启固定出口ip。开启后界面上会显示可用的固定ip。拿着这个ip去需要固定ip的界面（如微信公众号管理界面）配置即可。

**注意**

- 如果你是免费版升配到付费版，开启`固定IP`功能后，会导致付费版到期无法自动降级到免费版，请注意按时续费

腾讯云原本的设计是同一个服务空间内所有开启固定出口IP的云函数使用的是同一个IP。但是对于开通vpc的云函数无法和未开通vpc的函数共用同一个出口ip。具体使用中有以下表现

- 开通redis扩展的云函数和未开通redis扩展的云函数会分配不同的ip
- 如果一个云函数已经开通固定出口ip，再关联redis扩展库时固定ip会发生变化

建议已开通redis的服务空间先将云函数关联redis扩展再开通固定出口IP，**2022年7月20日起新上传的云函数会默认开启vpc功能，如需旧云函数和新云函数保持一致可以把旧云函数关联redis扩展后上传一次，注意这样操作会改变旧云函数的固定出口IP**

#### 阿里云@aliyun-eip

> 新增于 HBuilderX 3.5.5

uniCloud.httpProxyForEip ，其原理是通过代理请求获得固定出口IP的能力。IP为轮转不固定，因此三方服务要求使用白名单时开发者需要将代理服务器可能的IP均加入到白名单中，见下方代理服务器列表。此外对于代理的域名有限制，当前仅持`weixin.qq.com`泛域名。若开发者有其他域名代理需求，发送邮件到service@dcloud.io申请，邮件模板参考：[申请解除限制邮件模板](price.md#apply-email-template)。

**代理服务器IP列表**

```
47.92.132.2
47.92.152.34
47.92.87.58
47.92.207.183
8.142.185.204
```

如需在获取微信公众号access_token场景使用，请将上述ip配置到`微信公众平台 -> 基本配置 -> IP白名单`内，相关链接：[微信公众平台](https://mp.weixin.qq.com/)

#### 支付宝小程序云@alipay-eip

> 暂未支持

##### 发送Get请求@http-proxy-get

**用法**

```js
uniCloud.httpProxyForEip.get(url: String, params?: Object)
```

**示例**

```js
await uniCloud.httpProxyForEip.get(
  'https://api.weixin.qq.com/cgi-bin/token',
  {
    grant_type: 'client_credential', 
    appid: 'xxxx',
    secret: 'xxxx'
  }
)
```

##### 发送POST请求携带表单数据@http-proxy-post-form

注意，此接口以`application/x-www-form-urlencoded`格式发送数据而不是`multipart/form-data`

**用法**

```js
uniCloud.httpProxyForEip.postForm(url: String, data?: Object, headers?: Object)
```

**示例**

```js
uniCloud.httpProxyForEip.postForm(    
  'https://www.example.com/search',
  {
    q: 'nodejs',
    cat: '1001'
  }
)
```

##### 发送POST请求携带JSON数据@http-proxy-post-json

以`application/json`格式post数据

**用法**

```js
uniCloud.httpProxyForEip.postJson(url: String, json?: Object, headers?: Object)
```

**示例**

```js
uniCloud.httpProxyForEip.postJson(    
  'https://www.example.com/search',
  {
    q: 'nodejs',
    cat: '1001'
  }
)
```

##### POST通用数据@http-proxy-post

**用法**

```js
uniCloud.httpProxyForEip.post(url: String, text?: String, headers?: Object)
```

**示例**

```js
uniCloud.httpProxyForEip.post(    
  'https://www.example.com/search',
  'abcdefg',
  {
    "Content-Type": "text/plain"
  }
)
```

**注意**

- 不支持发送multipart格式的内容
- 代理请求超时时间为5秒
- 上述接口支持本地运行


## 云函数package.json@packagejson

HBuilderX 3.0版本之前，package.json只是一个标准的package.json，安装依赖或公共模块才需要。HBuilderX 3.0及以上版本，package.json也可以用来配置云函数。

uniCloud web控制台提供了很多云函数的设置，比如内存大小、url化、定时触发等，从HBuilderX 3.0起，在云函数的package.json里也可以编写这些设置。

开发者在本地编写云函数的设置，上传云函数，这些设置会自动在云端生效。（本地不生效）

在云端设置了非默认参数后，HBuilderX下载云函数到本地时，也会自动把设置项放入package.json中下载下来。

package.json是一个标准json文件，不可带注释。下面是一个package.json示例。

```json
{
  "name": "add-article",
  "version": "1.0.0",
  "description": "新增文章",
  "main": "index.js",
  "dependencies": {
    // 云函数的依赖，包括公共模块及自行安装的npm依赖
  },
	"extensions": {
		// 云函数使用的扩展库
	},
  "cloudfunction-config": {
		"memorySize": 256,
		"timeout": 5,
		"triggers": [{
				"name": "myTrigger",
				"type": "timer",
				"config": "0 0 2 1 * * *"
		}],
		"path": "",
		"runtime": "Nodejs8" 
	}
}
```

### cloudfunction-config@cloudfunction-config

其中cloudfunction-config字段是云函数配置，支持的配置如下

```js
{
  "concurrency": 10, // 单个云函数实例最大并发量，不配置的情况下默认是1
  "memorySize": 256, // 函数的最大可用内存，单位MB，可选值： 128|256|512|1024|2048，默认值256，阿里云正式版默认512
  "timeout": 5, // 函数的超时时间，单位秒，默认值5。最长为60秒，阿里云在定时触发时最长可以是600秒
  // triggers 字段是触发器数组，目前仅支持一个触发器，即数组只能填写一个，不可添加多个
  "triggers": [{ // 阿里云腾讯云均为此形式，请阅读下方说明
      // name: 触发器的名字，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger，name不对阿里云生效
      "name": "myTrigger",
      // type: 触发器类型，目前仅支持 timer (即 定时触发器)，type不对阿里云生效
      "type": "timer",
      // config: 触发器配置，在定时触发器下，config 格式为 cron 表达式，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger。使用阿里云时会自动忽略最后一位，即代表年份的一位在阿里云不生效
      "config": "0 0 2 1 * * *"
  }],
  // 云函数Url化path部分
  "path": "",
  "runtime": "", // nodejs版本，可选Nodejs8、Nodejs12，默认：Nodejs8
  "keepRunningAfterReturn": true // 是否在云函数return之后继续执行，仅腾讯云nodejs12生效，详情见下方说明
}
```

**使用腾讯云Nodejs12版本时，务必仔细阅读此文档：[keepRunningAfterReturn](#keep-running)**

#### 定时任务triggers@triggers

支付宝小程序云与阿里云定时触发的cron表达式不支持代表年的第七位，但是在package.json内配置时仍需将第七位设置为*。

**在web控制台配置trigger请参考：[定时触发](uniCloud/trigger.md)**

package.json内统一了支付宝小程序云、腾讯云、阿里云三家厂商的配置，三个平台都需要配置为如下形式

```js
{
	"name": "myTrigger",
	"type": "timer",
	"config": "0 0 2 1 * * *"
}
```

#### keepRunningAfterReturn@keep-running

> 新增于HBuilderX 3.5.1

阿里云、腾讯云nodejs8在云函数return之后其余逻辑会被冻结不再执行。腾讯云nodejs12表现恰好相反，云函数return之后还会等待其余逻辑执行后才会将此云函数实例空闲出来。

以下面的代码为例

```js
exports.main = async function(event, context) {
	setTimeout(()=>{
	  console.log('delay 5 seconds')
	}, 5000)
	return {}
}
```

如果此云函数运行在阿里云或腾讯云nodejs8，setTimeout里面的console.log不会在本次云函数调用执行，但是可能在云函数实例再次被复用时继续执行。

如果此云函数运行在腾讯云nodejs12，setTimeout里面的console.log会在本次云函数调用内，同样的本次云函数**计费时间（与云函数GBs指标相关）**也会按照最终执行完成的时间计算（5000ms+return耗时）。但是前端无需等待5秒即可收到响应。注意：如果有未断开的长连接（例如：redis连接）会导致云函数一直运行到配置的超时时间

当在云函数package.json内的cloudfunction-config内配置了`keepRunningAfterReturn: false`时，可以改变腾讯云nodejs12的表现，云函数return之后将不再继续执行，未断开的长连接也不会增加云函数实际运行时间，云函数return后长连接也不会被中断，简单来说其表现和腾讯云nodejs8一致。

**在云函数中发送网络请求**

将上述示例中的setTimeout换成网络请求、调用其他云函数或数据库请求同理，如果在阿里云或腾讯云nodejs8直接return会导致网络请求可能无法发送（即使成功发送也是在下一次云函数实例被复用的时候），这是与传统开发不太一样的地方。

```js
exports.main = async function(event, context) {
	uniCloud.callFunction({ 
    name: 'test',
    data: {}
  })
	return {} // callFunction后不等待直接return时无法调用到test云函数
}
```

**腾讯云nodejs12使用redis**

由于redis需要和服务器建立连接，此连接会阻止云函数结束执行。如果没有云函数return之后还需要继续执行的需求，可以简单的在`cloudfunction-config`内配置`keepRunningAfterReturn: false`。这样redis的连接并不会中断，下次请求来时依然可以使用之前建立的连接。

如果需要return之后继续执行，那么需要在使用完毕后断开redis连接，调用`redis.quit()`方法即可断开连接。需要注意的是断开连接后之前建立的连接将不再可用，下个请求到来时需要使用`uniCloud.redis()`方法重新建立连接。

**如未按照上述说明进行操作，redis连接将会一直占用云函数实例，导致云厂商持续计算云函数执行时间，可能会导致消耗大量云资源而产生额外费用**

**务必确定自己已理解此文档内容，因未按照文档说明使用导致的额外计费DCloud不承担任何责任**

### 注意事项

- 插件作者在发布插件时，如果云函数有特殊设置，应该放入package.json中，然后发布到插件市场。这样就不用再通过说明文档一步一步引导用户去配置云函数定时触发器、内存、url化路径等
- 在web控制台修改云函数配置后，通过HBuilderX的下载云函数菜单会在package.json内添加修改后的云函数配置
- 上传云函数时，如果项目下的package.json内包含云函数配置会同时进行云函数的配置更新
- package.json只有云端部署才生效，本地运行不生效。
- cloudfunction-config不可删除云端配置。例：云端已配置triggers（定时触发器），删除cloudfunction-config内的trigger不会删掉云端的定时触发器
- runtime参数（nodejs版本）仅可在创建云函数时生效，不可修改


### 云函数的数量、体积、冷启动的平衡

鉴于：
- 每个服务空间的云函数数量是有限的，支付宝小程序云是499个，阿里云是48个，腾讯云是149个，[详见](price.md)
- 每个云函数的体积限制是10M（含node_modules）
- 云函数有冷启动问题

基于以上情况，对开发模式有如下建议：

1. 一般不建议使用体积较大、依赖较深的node_modules。多使用DCloud官方或插件市场提供的库。
2. 优先使用clientDB，不占用云函数数量，也不用编写服务器代码。
3. 对云对象或云函数做适当的合并和拆解。
	- 低频且对用户体验影响较大的操作不建议独立使用云函数，合并到高频云函数中。
	- 控制好单个云函数体积，有的开发者喜欢使用[单路由云函数](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&orderBy=WeekDownload&cat1=7)，整个服务空间就一个云函数。这也得根据实际情况，如果云函数体积超过6M也还是建议分拆。
	- 用户体系方面，官方已经提供uni-id-co云对象，再搭配clientDB，常规业务就够了。有特殊需求可以再适度补若干云对象。不太会发生云函数数量不足的情况。
4. 必要时可以使用多个服务空间，跨服务空间使用

## cloudfunctions_init（已废弃）

`HBuilderX 2.9`版本，`uniCloud`提供了`cloudfunctions_init.json`来方便开发者快速进行云函数的初始化操作。

**注意：HBuilderX 3.0.0版本起不再使用cloudfunctions_init.json来初始化云函数。改为使用在云函数目录下通过package.json进行配置，具体见上个章节**

详细调整如下：

不再使用cloudfunctions_init.json，内容被分散到每个云函数的package.json的`cloudfunction-config`字段下

package.json是一个标准json文件，不可带注释。下面是一个package.json示例

```json
{
  "name": "add-article",
  "version": "1.0.0",
  "description": "新增文章",
  "main": "index.js",
  "dependencies": {
    
  },
  "cloudfunction-config": {
      "memorySize": 256,
      "timeout": 5,
      "triggers": [{
          "name": "myTrigger",
          "type": "timer",
          "config": "0 0 2 1 * * *"
      }],
      "path": ""
    }
}
```

cloudfunction-config说明如下

```js
{
  "memorySize": 256, // 函数的最大可用内存，单位MB，可选值： 128|256|512|1024|2048，默认值256，阿里云正式版默认512
  "timeout": 5, // 函数的超时时间，单位秒，默认值5。最长为60秒，阿里云在定时触发时最长可以是600秒
  // triggers 字段是触发器数组，目前仅支持一个触发器，即数组只能填写一个，不可添加多个
  "triggers": [{
      // name: 触发器的名字，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger，name不对阿里云生效
      "name": "myTrigger",
      // type: 触发器类型，目前仅支持 timer (即 定时触发器)，type不对阿里云生效
      "type": "timer",
      // config: 触发器配置，在定时触发器下，config 格式为 cron 表达式，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger。使用阿里云时会自动忽略最后一位，即代表年份的一位在阿里云不生效
      "config": "0 0 2 1 * * *"
  }],
  // 云函数Url化path部分
  "path": ""
}
```

**HBuilderX 3.0.0之前版本，请继续阅读下面文档**

**使用方式**
- 在`cloudfucntions`目录右键即可创建`cloudfunctions_init.json`，
- 编写好json内容，在`cloudfunctions_init.json`上右键初始化云函数配置。

**cloudfunctions_init.json形式如下**

```json
{
    "fun-name": { // 云函数名称
        "memorySize": 256, // 函数的最大可用内存，单位MB，可选值： 128|256|512|1024|2048，默认值256，阿里云正式版默认512
        "timeout": 5, // 函数的超时时间，单位秒，默认值5。
        // triggers 字段是触发器数组，目前仅支持一个触发器，即数组只能填写一个，不可添加多个
        "triggers": [{
            // name: 触发器的名字，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger，name不对阿里云生效
            "name": "myTrigger",
            // type: 触发器类型，目前仅支持 timer (即 定时触发器)，type不对阿里云生效
            "type": "timer",
            // config: 触发器配置，在定时触发器下，config 格式为 cron 表达式，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger。使用阿里云时会自动忽略最后一位，即代表年份的一位在阿里云不生效
            "config": "0 0 2 1 * * *"
        }],
        // 云函数Url化path部分
        "path": ""
    }
}

```
