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
|result		|Object			|云函数中代码return的返回结果												|
|requestId	|String			|云函数请求序列号，用于错误排查，可以在uniCloud web控制台的云函数日志中查到	|
|header		|Object			|服务器header信息														|
|errCode	|Number或String	|服务器错误码															|
|success	|bool			|执行是否成功															|

注意：

- HBuilderX本地运行云函数时不返回`header`，需要在云端运行云函数才会返回
- callFunction内部会使用uni.request来发送请求，如果有对uni.request写拦截器务必准确区分要拦截的内容

返回格式，下文有详细解读 [详见](?id=returnformat)

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

假使客户端代码调用云函数`hellocf`，并传递了`{a:1,b:2}`的数据，
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
	let c = event.a + event.b
	return {
		sum: c
	} // 通过return返回结果给客户端
}
```

云函数的传入参数有两个，一个是`event`对象，一个是`context`对象。
- `event`指的是触发云函数的事件。当客户端调用云函数时，`event`就是客户端调用云函数时传入的参数。
- `context` 对象包含了本次请求的上下文，包括客户端的ip、ua、appId等信息，以及云函数的环境情况、调用来源source等信息。

### event对象

event对象，可以理解为客户端上行参数中的json对象。在使用`uni-id`且登录成功后，会自动多添加了一个`uniIdToken`属性。

可以通过 `event.uniIdToken` 获取 uni-id 的 token，如下：

```js
'use strict';
exports.main = async (event, context) => {
  let token = event.uniIdToken // 客户端uni-id token
}
```

所以开发者需注意，自己上行的参数对象不要包含uniIdToken属性，避免同名冲突。

**入参的体积限制**

云函数上行的参数内容不能传太大。

- 阿里云event大小不可超过1MB
- 腾讯云event大小不可超过5MB

### context对象@context

- `context` 对象包含了本次请求的上下文，包括客户端的ip、ua、appId等信息，以及云函数的环境情况、调用来源source等信息。

context对象的属性清单如下：

|属性名称					|类型	|说明																									|
|--							|--		|--																										|
|SPACEINFO					|object	|服务空间信息																							|
|&nbsp;&#124;- spaceId		|string	|服务空间id																								|
|&nbsp;&#124;- provider		|string	|服务空间供应商：aliyun&#124;tencent																	|
|&nbsp;&#124;- useOldSpaceId		|boolean	|当前获取的服务空间id是否为迁移前的服务空间id，新增于`HBuilderX 3.6.13`															|
|SOURCE						|string	|云函数调用来源 [详见](?id=context-source)																|
|FUNCTION_NAME				|string	|获取云函数名称																							|
|FUNCTION_TYPE				|string	|获取云函数类型，对于云函数来说，这里一定会返回`cloudfunction`，新增于HBuilderX 3.5.1。					|
|CLIENTIP					|string	|客户端IP。如果调用来源是其他服务器，会返回调用方的ip													|
|CLIENTUA					|string	|客户端userAgent。注意非本地运行环境下客户端getSystemInfoSync也会获取ua参数并上传给云函数，但是云函数会从http请求头里面获取ua而不是clientInfo里面的ua				|
|uniIdToken					|string	|客户端uni-id token字符串，新增于HBuilderX 3.5.1。														|
|requestId					|string	|当前请求id，新增于HBuilderX 3.5.5。														|

除了上述属性，如果是uni-app客户端通过callfunction访问云函数，那么context还会追加一批客户端信息。
- HBuilderX 3.4.9前，context 添加了一批大写属性，如APPID、OS。
- HBuilderX 3.4.9起，context 的属性包括前端API `uni.getSystemInfo` 的所有属性。比如appId、osName，均以驼峰方式命名。这些属性较多，且可能跟随前端API更新而变化，具体详见 [uni.getSystemInfo](/api/system/info.html#getsysteminfo)

为了保持向下兼容，新版并没有去掉老版那些大写属性的客户端信息，但文档标注为以废弃。对于新版HBuilderX用户而言，请使用 `uni.getSystemInfo` 返回的驼峰属性。

HBuilderX 3.4.9起，context 的属性还可以打印出`channel`和`scene`，即App的渠道包标记和小程序场景值。但这个功能属于未完成功能，开发者暂不使用这2个属性，后续会升级完善。目前如开发者需要这2个属性，请自行在客户端使用[uni.getLaunchOptionsSync](/api/getLaunchOptionsSync.html#getlaunchoptionssync)上传。

示例：

```js
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
  //...
  //context中可获取客户端调用的上下文
  let clientIP = context.CLIENTIP // 客户端ip信息
  let spaceInfo = context.SPACEINFO // 当前环境信息 {spaceId:'xxx',provider:'tencent'}
  let source = context.SOURCE // 云函数调用来源
  // 以下属性只有使用uni-app以callFunction方式调用才能获取，即context.SOURCE=="client"，调用方不是uni-app客户端则没有相应数据
  let appid = context.appId // manifest.json中配置的appid
  let deviceId = context.deviceId // 客户端标识，新增于HBuilderX 3.1.0，同uni-app客户端getSystemInfo接口获取的deviceId
	//... //其它业务代码
}
```


#### 获取云函数调用来源@context-source

context.SOURCE，返回云函数调用来源，它的值域为：

|取值		|解释								|
|--			|--									|
|client		|客户端callFunction方式调用			|
|http		|云函数url化方式调用				|
|timing		|定时触发器调用						|
|function	|由其他云函数callFunction调用		|
|server		|由uniCloud管理端调用，HBuilderX里上传并运行|

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


**注意事项**
- 客户端上报的信息在理论上存在被篡改可能，实际业务中应验证前端传来的数据的合法性
- `context.PLATFORM`的取值，有 `app` 和 `app-plus` 两种情况。
	* uni-app的vue3版本取值为`app`
	* vue2版本，在uni-app 3.4.9之前，取值为 `app-plus`，uni-app 3.4.9起，该值修改为了`app`

除了CLIENTIP外，其他客户端信息只有使用uni-app客户端以callFunction方式调用才能获取。如果云函数url化后被uni-app通过request调用，也没有客户端信息。

在云函数URL化的场景无法获取客户端平台信息，可以在调用依赖客户端平台的接口接口之前（推荐在云函数入口）通过修改context.PLATFORM手动传入客户端平台信息供其他插件（如：uni-id）使用

例：

```js
exports.main = async (event, context) => {
	context.PLATFORM = 'app'
}
```

## 云函数的返回格式@returnformat

普通云函数返回给客户端的是json格式数据。返回结果包裹在result下。

前端发起callFunction到云端接收参数并响应，然后反馈前端，前端接收，完整流程代码如下：

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
	"errCode": 0,
	"errMsg": "",
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

注意：HBuilderX本地运行云函数时，如果没有系统错误，则只返回`result`，其他需要在云端运行云函数才会返回。

- errCode为0时，success也是true。
	* 表示云函数在系统层面没有运行错误。可以正常返回result。前端callFunction会进入success回调
	* 如果开发者的业务有报错，可以在 result 里返回 errCode 和 errMsg。
- errCode不为0时，success为false。
	* 表示云函数在系统层面报错了，比如联网失败、云函数超时、内存超限等错误。前端callFunction会进入fail回调
	* 发生系统错误时 result 里无法正常返回业务错误。errCode不为0时，还会返回errMsg。
- requestId是云函数的请求id，线上运行时，可以在uniCloud web控制台的云函数日志中查看运行日志。
- header是云厂商的一些信息，阿里云和腾讯云不同，上面示例代码是阿里云的header。

**uniCloud响应体规范**

为了方便统一拦截错误，推荐开发者使用 [uniCloud响应体规范](cf-functions.md?id=resformat)

业务报错时，在 result 里返回 errCode 和 errMsg。如下：

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

## 在云函数中使用cookie

详见：[url化场景下使用cookie](http.md#cookie)

