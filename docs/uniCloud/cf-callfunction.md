**普通云函数**

callFunction方式云函数，也称之为普通云函数。

uni-app的前端代码，不再执行`uni.request`联网，而是通过`uniCloud.callFunction`调用云函数。

callFunction方式避免了服务器提供域名，不暴露固定ip，减少被攻击的风险。

- 对于uni-app前端而言，使用云对象会比使用callFunction云函数方式更为简单清晰。
- 但对于非uni-app前端调用的场景，比如5+App、外部应用、服务器要调用云函数，或者uniCloud定时任务，此时不适合使用云对象，还是需要云函数。

`uniCloud.callFunction`可以在uni-app前端执行，也可以在uniCloud云函数中执行。也就是前端和云端都可以调用另一个云函数。

`callFunction`方法的参数和返回值如下：

## callFunction方法

`uniCloud.callFunction`需要一个json对象作为参数，其中包含2个字段

|字段	|类型	|必填	|说明		|
|:-:	|:-:	|:-:	|:-:		|
|name	|String	|是		|云函数名称|
|data	|Object	|否		|客户端需要传递的参数|

**返回json**

|字段		|类型			|说明																	|
|:-:		|:-:			|:-:																	|
|result		|Object			|云函数返回结果															|
|requestId	|String			|云函数请求序列号，用于错误排查，可以在uniCloud web控制台的云函数日志中查到	|
|header		|Object			|服务器header信息														|
|errCode	|Number或String	|服务器错误码															|
|success	|bool			|执行是否成功															|

注意：HBuilderX本地运行云函数时只返回result，其他需要在云端运行云函数才会返回

**前端示例代码**

假使云服务空间有一个云函数名为“hellocf”，那么前端可以通过如下方式调用这个云函数

```javascript
// promise方式
uniCloud.callFunction({
    name: 'hellocf',
    data: { a: 1 }
  })
  .then(res => {});

// callback方式
uniCloud.callFunction({
	name: 'hellocf',
	data: { a: 1 },
	success(){},
	fail(){},
	complete(){}
});
```

## 云函数的入参

客户端callFunction调用云函数时，云函数通过入参接收客户端数据，通过头信息上下文获取客户端信息，经过业务逻辑处理后给客户端返回结果。

假使客户端代码调用云函数hellocf，并传递了{a:1,b:2}的数据，
```js
// 客户端调用云函数并传递参数
uniCloud.callFunction({
    name: 'hellocf',
    data: {a:1,b:2}
  })
  .then(res => {});
```

那么云函数侧的代码如下，将传入的两个参数求和并返回客户端：
```js
// hellocf云函数index.js入口文件代码
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	return {
		sum:event.a + event.b
	} // 通过return返回结果给客户端
}
```

云函数的传入参数有两个，一个是`event`对象，一个是`context`对象。
- `event`指的是触发云函数的事件。当客户端调用云函数时，`event`就是客户端调用云函数时传入的参数。
- `context` 对象包含了本次请求的上下文，包括客户端的操作系统（`os`）、运行平台（`platform`）、应用信息（`appid`）

如下是一个示例：

```js
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
  //...
  //context中可获取客户端调用的上下文
  let clientIP = context.CLIENTIP // 客户端ip信息
  let clientUA = context.CLIENTUA // 客户端user-agent
  let spaceInfo = context.SPACEINFO // 当前环境信息 {spaceId:'xxx',provider:'tencent'}
  // 以下四个属性只有使用uni-app以callFunction方式调用才能获取，调用方不是uni-app客户端则没有相应数据
  let os = context.OS //客户端操作系统，返回值：android、ios	等
  let platform = context.PLATFORM //运行平台，返回值为 mp-weixin、app-plus等。注意：vue3版本uni-app将app-plus修改为了app，此处为保证旧版本兼容性未进行统一，推荐后续在业务中都使用app作为客户端标识
  let appid = context.APPID // manifest.json中配置的appid
  let deviceId = context.DEVICEID // 客户端标识，新增于HBuilderX 3.1.0，同uni-app客户端getSystemInfo接口获取的deviceId
	//... //其它业务代码
}
```

**注意：下面所有的“客户端”均是相对于云函数而言，如果你使用自己的服务器调用云函数，此时客户端是指你的服务器**

### 获取用户token@client-token

如果客户端在storage内存储了uni_id_token，在使用callFunction请求云函数时会自动将此token传递到云端，云端可以通过以下方式获取：

```js
'use strict';
exports.main = async (event, context) => {
  let token = event.uniIdToken // 客户端uni-id token
}
```

### 获取客户端IP@clientip

```js
'use strict';
exports.main = async (event, context) => {
  let clientIP = context.CLIENTIP // 客户端ip信息
}
```

### 获取客户端user-agent@client-user-agent

```js
'use strict';
exports.main = async (event, context) => {
  let clientUA = context.CLIENTUA // 客户端user-agent信息
}
```

### 获取服务空间信息@context-space-info

```js
'use strict';
exports.main = async (event, context) => {
  let spaceInfo = context.SPACEINFO // 当前环境信息 {spaceId:'xxx',provider:'tencent'}
}
```

### 获取云函数调用来源@context-source

```js
'use strict';
exports.main = async (event, context) => {
  let source = context.SOURCE // 当前云函数被何种方式调用
  // client   客户端callFunction方式调用
  // http     云函数url化方式调用
  // timing   定时触发器调用
  // server   由管理端调用，HBuilderX里上传并运行
  // function 由其他云函数callFunction调用
}
```

### 其他客户端信息@client-info

> HBuilderX 3.4.9起，可以获取所有客户端`getSystemInfo`返回的客户端信息，详细字段列表参考：[getSystemInfo](https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfo)

```js
'use strict';
exports.main = async (event, context) => {
  let os = context.OS //客户端操作系统，返回值：android、ios	等
  let platform = context.PLATFORM //运行平台，返回值为 mp-weixin、app等。注意老版曾使用app-plus，具体见下
  let appid = context.APPID // manifest.json中配置的appid
  let deviceId = context.DEVICEID // 客户端标识，新增于HBuilderX 3.1.0，同uni-app客户端getSystemInfo接口获取的deviceId
}
```


**注意事项**
- 客户端上报的信息在理论上存在被篡改可能，实际业务中应验证前端传来的数据的合法性
- `context.PLATFORM`的取值，有 `app` 和 `app-plus` 两种情况。
	* uni-app的vue3版本取值为`app`
	* vue2版本，在uni-app 3.4.9之前，取值为 `app-plus`，uni-app 3.4.9起，该值修改为了`app`
- 阿里云event大小不可超过1MB，腾讯云event大小不可超过6MB


客户端信息只有使用uni-app客户端以callFunction方式调用才能获取，由客户端传递到云函数。如果云函数url化后被uni-app通过request调用，也没有客户端信息。

在云函数URL化的场景无法获取客户端平台信息，可以在调用依赖客户端平台的接口接口之前（推荐在云函数入口）通过修改context.PLATFORM手动传入客户端平台信息供其他插件（如：uni-id）使用

例：

```js
exports.main = async (event, context) => {
	context.PLATFORM = 'app-plus'
}
```

## 云函数的返回格式

普通云函数返回给客户端的是json格式数据。返回结果包裹在result下。

前端发起callFunction到云端接收参数并响应，然后反馈前端，然后前端接收参数的完整流程代码如下：

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
	//返回数据给客户端
	return {sum : event.a + event.b}
};

```

那么客户端得到的res结构如下
```json
{
	"errCode": 0
	"header": {
		"access-control-expose-headers": "Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version"
		"content-disposition": "attachment"
		"content-length": "38"
		"content-type": "application/json"
		"date": "Sat, 25 Jun 2022 19:28:34 GMT"
		"x-fc-code-checksum": "92066386860027743"
		"x-fc-instance-id": "c-62b761c4-5a85e238b3ce404c817d"
		"x-fc-invocation-duration": "23"
		"x-fc-invocation-service-version": "LATEST"
		"x-fc-max-memory-usage": "66.61"
		"x-fc-request-id": "80854b93-b0c7-43ab-ab16-9ee9f77ff41e"
		"x-serverless-request-id": "ac1403831656185314624173902"
		"x-serverless-runtime-version": "1.2.2"
	}
	"requestId": "ac1403831656185314624173902"
	"result": {sum: 3}
	"success": true
}
```

其中`result`是开发者云函数代码返回的数据，其余是云平台返回的。

注意：HBuilderX本地运行云函数时只返回`result`，其他需要在云端运行云函数才会返回。

**uniCloud响应体规范**

为了方便统一拦截错误，推荐开发者使用`uniCloud响应体规范`，[详见](uniCloud/cf-functions.md?id=resformat)

如果按照uniCloud响应体规范，那么云函数代码应该修正为return信息补充errCode和errMsg。如下：
```js
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	if (!event.a) {
		return {errCode : 1,errMsg : "参数a不能为空"}
	}
	if (!event.b) {
		return {errCode : 2,errMsg : "参数b不能为空"}
	}
	const c = event.a + event.b
	if (isNaN(c)) {
		return {errCode : 3,errMsg : "参数a和b无法求和"}
	}
	//返回数据给客户端
	return {sum:c,errCode : 1,errMsg : "0"}
};
```
