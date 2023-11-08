**普通云函数**
**Ordinary cloud function**

callFunction方式云函数，也称之为普通云函数。
CallFunction method cloud function, also known as ordinary cloud function.

uni-app的前端代码，不再执行`uni.request`联网，而是通过`uniCloud.callFunction`调用云函数。
The front-end code of uni-app no longer executes `uni.request` for networking, but calls cloud functions through `uniCloud.callFunction`.

callFunction方式避免了服务器提供域名，不暴露固定ip，减少被攻击的风险。
The callFunction method avoids the server providing the domain name, does not expose the fixed IP, and reduces the risk of being attacked.

- 对于uni-app前端而言，使用云对象会比使用callFunction云函数方式更为简单清晰。
- For the uni-app front end, using cloud objects is simpler and clearer than using callFunction cloud functions.
- 但对于非uni-app前端调用的场景，比如5+App、外部应用、服务器要调用云函数，或者uniCloud定时任务，此时不适合使用云对象，还是需要云函数。
- But for non-uni-app front-end calling scenarios, such as 5+Apps, external applications, and servers that need to call cloud functions, or uniCloud scheduled tasks, cloud objects are not suitable for use at this time, and cloud functions are still required.

`uniCloud.callFunction`可以在uni-app前端执行，也可以在uniCloud云函数中执行。也就是前端和云端都可以调用另一个云函数。
`uniCloud.callFunction` can be executed in the uni-app frontend or in the uniCloud cloud function. That is, both the front end and the cloud can call another cloud function.

`callFunction`方法的参数和返回值如下：
The parameters and return values of the `callFunction` method are as follows:

## callFunction方法
## callFunction method

`uniCloud.callFunction`需要一个json对象作为参数，其中包含2个字段
`uniCloud.callFunction` expects a json object as parameter with 2 fields

|字段	|类型	|必填	|说明		|
|Fields |Type |Required |Description |
|:-:	|:-:	|:-:	|:-:		|
|name	|String	|是		|云函数名称|
|name |String |yes |cloud function name|
|data	|Object	|否		|客户端需要传递的参数|
|data |Object |No |Parameters that the client needs to pass|

**返回json**
**return json**

|字段		|类型			|说明																	|
|Field |Type |Description |
|:-:		|:-:			|:-:																	|
|result		|Object			|云函数中代码return的返回结果												|
|result |Object |The return result of the code return in the cloud function |
|requestId	|String			|云函数请求序列号，用于错误排查，可以在uniCloud web控制台的云函数日志中查到	|
|requestId |String |The serial number of the cloud function request, which is used for troubleshooting, which can be found in the cloud function log in the uniCloud web console |
|header		|Object			|服务器header信息														|
|header |Object |Server header information |
|errCode	|Number或String	|服务器错误码															|
|errCode |Number or String |Server Error Code |
|success	|bool			|执行是否成功															|
|success |bool |Whether the execution is successful |

注意：
Notice:

- HBuilderX本地运行云函数时不返回`header`，需要在云端运行云函数才会返回
- HBuilderX does not return `header` when running cloud functions locally, it needs to run cloud functions on the cloud to return
- callFunction内部会使用uni.request来发送请求，如果有对uni.request写拦截器务必准确区分要拦截的内容
- CallFunction will use uni.request to send requests internally. If there is an interceptor for uni.request, be sure to accurately distinguish the content to be intercepted

返回格式，下文有详细解读 [详见](?id=returnformat)
The return format is explained in detail below [see details](?id=returnformat)

**前端示例代码**
**Front-end sample code**

假使云服务空间有一个云函数名为“hellocf”，那么前端可以通过如下方式调用这个云函数
If the cloud service space has a cloud function named "hellocf", the front end can call this cloud function as follows

```javascript
// promise方式
// promise method
uniCloud.callFunction({
    name: 'hellocf',
    data: { a: 1 }
  })
  .then(res => {});

// callback方式
//callback method
uniCloud.callFunction({
	name: 'hellocf',
	data: { a: 1 },
	success(){},
	fail(){},
	complete(){}
});
```

## 云函数的入参
## Input parameters of cloud function

客户端callFunction调用云函数时，云函数通过入参接收客户端数据，通过头信息上下文获取客户端信息，经过业务逻辑处理后给客户端返回结果。
When the client callFunction calls the cloud function, the cloud function receives the client data through the input parameters, obtains the client information through the header information context, and returns the result to the client after business logic processing.

假使客户端代码调用云函数`hellocf`，并传递了`{a:1,b:2}`的数据，
Suppose the client code calls the cloud function `hellocf` and passes the data of `{a:1,b:2}`,
```js
// 客户端调用云函数并传递参数
// The client calls the cloud function and passes the parameters
uniCloud.callFunction({
    name: 'hellocf',
    data: {a:1,b:2}
  })
  .then(res => {});
```

那么云函数侧的代码如下，将传入的两个参数求和并返回客户端：
Then the code on the cloud function side is as follows, summing the two incoming parameters and returning it to the client:
```js
// hellocf云函数index.js入口文件代码
// hellocf cloud function index.js entry file code
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//event is the parameter uploaded by the client
	let c = event.a + event.b
	return {
		sum: c
	} // 通过return返回结果给客户端
}
```

云函数的传入参数有两个，一个是`event`对象，一个是`context`对象。
The cloud function has two incoming parameters, one is the `event` object and the other is the `context` object.
- `event`指的是触发云函数的事件。当客户端调用云函数时，`event`就是客户端调用云函数时传入的参数。
- `event` refers to the event that triggers the cloud function. When the client calls the cloud function, `event` is the parameter passed in when the client calls the cloud function.
- `context` 对象包含了本次请求的上下文，包括客户端的ip、ua、appId等信息，以及云函数的环境情况、调用来源source等信息。
- The `context` object contains the context of the request, including the client's ip, ua, appId, and other information, as well as the cloud function's environment, calling source, and other information.

### event对象
### event object

event对象，可以理解为客户端上行参数中的json对象。在使用`uni-id`且登录成功后，会自动多添加了一个`uniIdToken`属性。
The event object can be understood as the json object in the upstream parameters of the client. After using `uni-id` and logging in successfully, an additional `uniIdToken` attribute is automatically added.

可以通过 `event.uniIdToken` 获取 uni-id 的 token，如下：
The uni-id token can be obtained through `event.uniIdToken`, as follows:

```js
'use strict';
exports.main = async (event, context) => {
  let token = event.uniIdToken // 客户端uni-id token
}
```

所以开发者需注意，自己上行的参数对象不要包含uniIdToken属性，避免同名冲突。
Therefore, developers should pay attention not to include the uniIdToken attribute in their upstream parameter objects to avoid conflicts with the same name.

**入参的体积限制**
**The volume limit of the input parameters**

云函数上行的参数内容不能传太大。
The parameter content of the cloud function upstream cannot be too large.

- 支付宝小程序云接收参数大小不可超过6MB
- 阿里云event大小不可超过1MB
- Alibaba Cloud event size cannot exceed 1MB
- 腾讯云event大小不可超过5MB
- Tencent Cloud event size cannot exceed 5MB

### context对象@context
### context object @context

- `context` 对象包含了本次请求的上下文，包括客户端的ip、ua、appId等信息，以及云函数的环境情况、调用来源source等信息。
- The `context` object contains the context of the request, including the client's ip, ua, appId and other information, as well as the cloud function's environment, calling source, and other information.

context对象的属性清单如下：
The list of properties of the context object is as follows:

|属性名称					|类型	| 说明																									                                                                          |
|--							|--		|------------------------------------------------------------------------------------------------------|
|SPACEINFO					|object	| 服务空间信息																							                                                                        |
|&nbsp;&#124;- spaceId		|string	| 服务空间id																								                                                                       |
|&nbsp;&#124;- provider		|string	| 服务空间供应商：alipay&#124;aliyun&#124;tencent																	                                                   |
|&nbsp;&#124;- useOldSpaceId		|boolean	| 当前获取的服务空间id是否为迁移前的服务空间id，新增于`HBuilderX 3.6.13`															                                        |
|SOURCE						|string	| 云函数调用来源 [详见](?id=context-source)																                                                     |
|FUNCTION_NAME				|string	| 获取云函数名称																							                                                                       |
|FUNCTION_TYPE				|string	| 获取云函数类型，对于云函数来说，这里一定会返回`cloudfunction`，新增于HBuilderX 3.5.1。					                                      |
|CLIENTIP					|string	| 客户端IP。如果调用来源是其他服务器，会返回调用方的ip													                                                            |
|CLIENTUA					|string	| 客户端userAgent。注意非本地运行环境下客户端getSystemInfoSync也会获取ua参数并上传给云函数，但是云函数会从http请求头里面获取ua而不是clientInfo里面的ua				 |
|uniIdToken					|string	| 客户端uni-id token字符串，新增于HBuilderX 3.5.1。														                                                 |
|requestId					|string	| 当前请求id，新增于HBuilderX 3.5.5。														                                                             |

除了上述属性，如果是uni-app客户端通过callfunction访问云函数，那么context还会追加一批客户端信息。
In addition to the above properties, if the uni-app client accesses the cloud function through callfunction, the context will also append a batch of client information.
- HBuilderX 3.4.9前，context 添加了一批大写属性，如APPID、OS。
- Before HBuilderX 3.4.9, context added a batch of uppercase attributes, such as APPID, OS.
- HBuilderX 3.4.9起，context 的属性包括前端API `uni.getSystemInfo` 的所有属性。比如appId、osName，均以驼峰方式命名。这些属性较多，且可能跟随前端API更新而变化，具体详见 [uni.getSystemInfo](/api/system/info.html#getsysteminfo)
- Since HBuilderX 3.4.9, the properties of context include all properties of front-end API `uni.getSystemInfo`. For example, appId and osName are named in camel case. These properties are many and may change with the front-end API update. For details, see [uni.getSystemInfo](/api/system/info.html#getsysteminfo)

为了保持向下兼容，新版并没有去掉老版那些大写属性的客户端信息，但文档标注为以废弃。对于新版HBuilderX用户而言，请使用 `uni.getSystemInfo` 返回的驼峰属性。
In order to maintain backward compatibility, the new version does not remove the client information of the uppercase attributes of the old version, but the document is marked as obsolete. For users of newer versions of HBuilderX, please use the camelCase property returned by `uni.getSystemInfo`.

HBuilderX 3.4.9起，context 的属性还可以打印出`channel`和`scene`，即App的渠道包标记和小程序场景值。但这个功能属于未完成功能，开发者暂不使用这2个属性，后续会升级完善。目前如开发者需要这2个属性，请自行在客户端使用[uni.getLaunchOptionsSync](/api/getLaunchOptionsSync.html#getlaunchoptionssync)上传。

示例：
Example:

```js
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
  //...
  //context中可获取客户端调用的上下文
  //The context of the client call can be obtained in the context
  let clientIP = context.CLIENTIP // 客户端ip信息
  let spaceInfo = context.SPACEINFO // 当前环境信息 {spaceId:'xxx',provider:'tencent'}
  let source = context.SOURCE // 云函数调用来源
  // 以下属性只有使用uni-app以callFunction方式调用才能获取，即context.SOURCE=="client"，调用方不是uni-app客户端则没有相应数据
  // The following properties can only be obtained by using uni-app to call with callFunction, that is, context.SOURCE=="client", if the caller is not a uni-app client, there is no corresponding data
  let appid = context.appId // manifest.json中配置的appid
  let deviceId = context.deviceId // 客户端标识，新增于HBuilderX 3.1.0，同uni-app客户端getSystemInfo接口获取的deviceId
	//... //其它业务代码
	//... //Other business code
}
```


#### 获取云函数调用来源@context-source
#### Get cloud function call source @context-source

context.SOURCE，返回云函数调用来源，它的值域为：
context.SOURCE, returns the source of the cloud function call, its value range is:

|取值		|解释								|
|value |explain |
|--			|--									|
|client		|客户端callFunction方式调用			|
|client |Client callFunction method |
|http		|云函数url化方式调用				|
|http |Cloud function url call |
|timing		|定时触发器调用						|
|timing |Timed trigger call |
|function	|由其他云函数callFunction调用		|
|function |Called by other cloud function callFunction |
|server		|由uniCloud管理端调用，HBuilderX里上传并运行|
|server |Called by the uniCloud management terminal, uploaded and run in HBuilderX|

```js
'use strict';
exports.main = async (event, context) => {
  let source = context.SOURCE // 当前云函数被何种方式调用
  // client   客户端callFunction方式调用
  // client client callFunction method call
  // http     云函数url化方式调用
  // http cloud function url call
  // timing   定时触发器调用
  // timing timing trigger call
  // server   由管理端调用，HBuilderX里上传并运行
  // server is called by the management side, uploaded and run in HBuilderX
  // function 由其他云函数callFunction调用
  // function is called by other cloud function callFunction
}
```


**注意事项**
**Precautions**
- 客户端上报的信息在理论上存在被篡改可能，实际业务中应验证前端传来的数据的合法性
- The information reported by the client may be tampered in theory, and the legality of the data sent from the front end should be verified in actual business
- `context.PLATFORM`的取值，有 `app` 和 `app-plus` 两种情况。
- The value of `context.PLATFORM` has two cases: `app` and `app-plus`.
	* uni-app的vue3版本取值为`app`
	* The value of the vue3 version of uni-app is `app`
	* vue2版本，在uni-app 3.4.9之前，取值为 `app-plus`，uni-app 3.4.9起，该值修改为了`app`
	* vue2 version, before uni-app 3.4.9, the value is `app-plus`, after uni-app 3.4.9, the value is changed to `app`

除了CLIENTIP外，其他客户端信息只有使用uni-app客户端以callFunction方式调用才能获取。如果云函数url化后被uni-app通过request调用，也没有客户端信息。
Except CLIENTIP, other client information can only be obtained by calling the uni-app client with callFunction. If the cloud function is urlized and called by uni-app through request, there is no client information.

在云函数URL化的场景无法获取客户端平台信息，可以在调用依赖客户端平台的接口接口之前（推荐在云函数入口）通过修改context.PLATFORM手动传入客户端平台信息供其他插件（如：uni-id）使用
In the scenario where the cloud function is URLized, the client platform information cannot be obtained. Before calling the interface interface that depends on the client platform (recommended at the cloud function entry), the client platform information can be manually passed in by modifying context.PLATFORM for other plugins (such as: uni-id) use

例：
example:

```js
exports.main = async (event, context) => {
	context.PLATFORM = 'app'
}
```

## 云函数的返回格式@returnformat
## Cloud function return format @returnformat

普通云函数返回给客户端的是json格式数据。返回结果包裹在result下。
Common cloud functions return data in json format to the client. The return result is wrapped under result.

前端发起callFunction到云端接收参数并响应，然后反馈前端，前端接收，完整流程代码如下：
The front-end initiates callFunction to the cloud to receive parameters and respond, and then feed back to the front-end, and the front-end receives it. The complete process code is as follows:

```js
// 客户端发起调用云函数hellocf，并传入data数据
// The client initiates a call to the cloud function hellocf and passes in the data
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
// The code of the cloud function hellocf receives the data passed by the client, and adds a and b to the client
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//event is the parameter uploaded by the client
	console.log('event : ', event)
	//返回数据给客户端
	//return data to client
	return {sum : event.a + event.b}
};

```

那么客户端得到的res结构如下
Then the res structure obtained by the client is as follows
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
Among them, `result` is the data returned by the developer's cloud function code, and the rest are returned by the cloud platform.

注意：HBuilderX本地运行云函数时，如果没有系统错误，则只返回`result`，其他需要在云端运行云函数才会返回。
Note: When HBuilderX runs the cloud function locally, if there is no system error, only `result` will be returned, and other cloud functions will be returned only if the cloud function needs to be run in the cloud.

- errCode为0时，success也是true。
- When errCode is 0, success is also true.
	* 表示云函数在系统层面没有运行错误。可以正常返回result。前端callFunction会进入success回调
	* Indicates that the cloud function has no operating errors at the system level. The result can be returned normally. The front-end callFunction will enter the success callback
	* 如果开发者的业务有报错，可以在 result 里返回 errCode 和 errMsg。
	* If there is an error in the developer's business, errCode and errMsg can be returned in the result.
- errCode不为0时，success为false。
- When errCode is not 0, success is false.
	* 表示云函数在系统层面报错了，比如联网失败、云函数超时、内存超限等错误。前端callFunction会进入fail回调
	* Indicates that the cloud function reported errors at the system level, such as failure to connect to the network, cloud function timeout, and memory overrun. The front-end callFunction will enter the fail callback
	* 发生系统错误时 result 里无法正常返回业务错误。errCode不为0时，还会返回errMsg。
	* When a system error occurs, a business error cannot be returned normally in result. When errCode is not 0, errMsg will also be returned.
- requestId是云函数的请求id，线上运行时，可以在uniCloud web控制台的云函数日志中查看运行日志。
- requestId is the request ID of the cloud function. When running online, you can view the running log in the cloud function log in the uniCloud web console.
- header是云厂商的一些信息，阿里云和腾讯云不同，上面示例代码是阿里云的header。
- The header is some information about the cloud vendor. Alibaba Cloud is different from Tencent Cloud. The example code above is the header of Alibaba Cloud.

**uniCloud响应体规范**
**uniCloud response body specification**

为了方便统一拦截错误，推荐开发者使用 [uniCloud响应体规范](cf-functions.md?id=resformat)
In order to facilitate unified interception of errors, it is recommended that developers use [uniCloud response body specification](cf-functions.md?id=resformat)

业务报错时，在 result 里返回 errCode 和 errMsg。如下：
When a business error is reported, errCode and errMsg are returned in result. as follows:

```js
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//event is the parameter uploaded by the client
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
	//return data to client
	return {sum:c,errCode : 1,errMsg : "0"}
};
```

## 在云函数中使用cookie
## Using cookies in cloud functions

详见：[url化场景下使用cookie](http.md#cookie)
For details, see: [Using cookies in url-based scenarios](http.md#cookie)

