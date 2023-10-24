## 云对象

> 新增于 HBuilderX 3.4.0

## 背景和优势

20年前，restful接口开发开始流行，服务器编写接口，客户端调用接口，传输json。

现在，替代restful的新模式来了。

云对象，服务器编写API，客户端调用API，不再开发传输json的接口。思路更清晰、代码更精简。

比如服务端编写一个云对象todo，该对象有add、get、remove、update等方法。客户端的js则可以直接import这个todo云对象，直接调用add等方法。

服务器示例代码如下：

HBuilderX中在uniCloud/cloudfunctions目录新建云函数，选择类型为云对象，起名为todo。打开云对象入口index.obj.js，添加一个add方法。

```js
// 云对象名：todo
module.exports = {
	add(title, content) {
		title = title.trim()
		content = content.trim()
		if(!title || !content) {
			return {
				errCode: 'INVALID_TODO',
				errMsg: 'TODO标题或内容不可为空'
			}
		}
		// ...其他逻辑
		return {
			errCode: 0,
			errMsg: '创建成功'
		}
	}
}
```

然后在客户端的js中，import这个todo对象，调用它的add方法

```js
const todo = uniCloud.importObject('todo') //第一步导入云对象
async function addTodo () {
	try {
		const res = await todo.add('title demo', 'content demo') //导入云对象后就可以直接调用该对象的方法了，注意使用异步await
		uni.showToast({
			title: '创建成功'
		})
	} catch (e) {
		// 符合uniCloud响应体规范 https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=resformat，自动抛出此错误 
		uni.showModal({
			title: '创建失败',
			content: e.errMsg,
			showCancel: false
		})
	}
}
```

可以看到云对象的代码非常清晰，代码行数也只有33行。

而同样的逻辑，使用传统的接口方式则需要更多代码，见下：

```js
// 传统方式调用云函数-云函数代码
// 云函数名：todo
// 云函数入口index.js内容如下
'use strict';
exports.main = async (event, context) => {
	const {
		method,
		params
	} = event
	switch(method) {
		case 'add': {
			let {
				title,
				content
			} = params
			title = title.trim()
			content = content.trim()
			if(!title || !content) {
				return {
					errCode: 'INVALID_TODO',
					errMsg: 'TODO标题或内容不可为空'
				}
			}
			// ...省略其他逻辑
			return {
				errCode: 0,
				errMsg: '创建成功'
			}
		}
	}
	return {
		errCode: 'METHOD_NOT_FOUND',
		errMsg: `Method[${method}] not found`
	}
};

// 传统方式调用云函数-客户端代码
async function addToDo () {
	try {
		const res = await uniCloud.callFunction({
			name: 'todo', 
			data: {
				method: 'add',
				params: {
					title: 'title demo',
					content: 'content demo'
				}
			}
		})
		const {
			errCode,
			errMsg
		} = res.result
		if(errCode) {
			uni.showModal({
				title: '创建失败',
				content: errMsg,
				showCancel: false
			})
			return
		}
		uni.showToast({
			title: '创建成功'
		})
	} catch (e) {
		uni.showModal({
			title: '创建失败',
			content: e.message,
			showCancel: false
		})
	}
}
```

以上传统开发需要68行代码，对比云对象的33行代码，不但工作量大，而且逻辑也不如云对象清晰。

_注：以上例子仅用于方便初学者理解。实际开发中对于简单的数据库操作，使用[clientDB](/uniCloud/clientdb)在前端直接操作数据库是更简单、代码更少的方案，都不需要写云端代码。

总结下云对象带来的好处：
1. 更清晰的逻辑
2. 更精简的代码
3. 更少的协作成本（以及矛盾~）
4. 客户端调用时在ide里有完善的代码提示，方法参数均可提示。（传输json可没法在ide里提示）
5. 默认支持[uniCloud响应体规范](uniCloud/cf-functions.md?id=resformat)，方便错误拦截和统一处理


## 快速上手

### 创建云对象

云对象，其实是对云函数的封装。和创建云函数一样，在`uniCloud/cloudfunctions`目录右键新建云函数，选择云对象类型，输入云对象名称创建云对象，此处以云对象todo为例，创建的云对象包含一个`index.obj.js`。

![创建云对象](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-cloud-object-new.jpg)

一个空的云对象内容如下

```js
// cloudfunctions/todo/index.obj.js
module.exports = {
	
}
```

默认云对象模板是不包含任何方法的，我们为此对象添加一个add方法作为示例。

```js
// cloudfunctions/todo/index.obj.js
module.exports = {
	add: function(title = '', content = '') {
		title = title.trim()
		content = content.trim()
		if(!title || !content) {
			return {
				errCode: 'INVALID_TODO',
				errMsg: 'TODO标题或内容不可为空'
			}
		}
		// ...其他逻辑，如操作todo数据表添加数据
		return {
			errCode: 0,
			errMsg: '创建成功'
		}
	}
}
```

至此云对象todo已经有了一个可以访问的方法了。接下来看如何使用客户端调用此云对象内的方法

### 客户端调用

客户端通过`uniCloud.importObject`方法获取云对象的实例，并可以通过此实例调用云对象内的方法。用法如下

```js
const todo = uniCloud.importObject('todo')
const res = await todo.add('title demo', 'content demo')
```

通过代码块`cco`可以快捷的输入以下代码：

```js
const todo = uniCloud.importObject('todo')
```

实际业务中需要考虑错误捕获，调用方式有两种：

1. try catch
```js
const todo = uniCloud.importObject('todo')
try {
	const res = await todo.add('title demo', 'content demo') //导入云对象后就可以直接调用该对象的方法了，注意使用异步await
	console.log(res)
} catch (e) {
	console.log(e.errCode)
	console.log(e.errMsg)
}
```

2. then catch(promise写法)
```js
const todo = uniCloud.importObject('todo')
todo.add('title demo', 'content demo').then(res => {
	console.log(res)
}).catch(e => {
	console.log(e.errCode)
	console.log(e.errMsg)
})
```

**importObject参数说明**

```js
interface ImportObjectOptions {
  /**
   * 是否移除自动展示的ui
   */
  customUI?: boolean;
  /**
   * loading界面配置
   */
  loadingOptions?: ImportObjectLoadingOptions;
  /**
   * 错误提示配置
   */
  errorOptions?: ImportObjectErrorOptions;
  /**
   * 使用安全网络的方法及安全网络类型
   */
  secretMethods?: Record<string, keyof typeof SECRET_TYPE>;
  /**
   * 转化云对象内未捕获的错误或客户端网络错误
   */
  parseSystemError?: (params: ParseSystemErrorParams) => Promise<ParsedSystemError> | ParsedSystemError;
}
```


## 云对象的API@api

云对象作为云函数的一种，可以调用所有node的API和uniCloud的API。

uniCloud有众多API，另见：[uniCloud的API清单](uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8)

除上述API之外，云对象的this对象还有一批专用方法来获取当前请求的上下文信息。

与云函数入参时的`context`不同，云对象没有`context`。它通过this对象挂载的几个内置方法来获取上下文信息。请注意开发者避免在this上挂载同名方法。

### 获取客户端信息@get-client-info

> HBuilderX 3.4.9起此接口可获取所有客户端`getSystemInfo`返回的客户端信息，完整字段列表参考：[getSystemInfo](https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfo)

**接口形式**

`this.getClientInfo()`

**示例：**

```js
module.exports = {
	add: function() {
		const clientInfo = this.getClientInfo()
		// clientInfo = {
		// 	clientIP,
		// 	appId,
		// 	deviceId,
		// 	source,
		// 	//... 其他getSystemInfoSync返回值
		// }
	}
}
```

**返回值**

getClientInfo返回的信息，是在客户端的[uni.getSystemInfo](https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfo)的基础之上，增加了一些额外的信息。

除了`getSystemInfo`返回字段外，还包含以下信息

|属性名		|类型	|说明																											|
|--			|--		|--																												|
|clientIP	|string	|客户端ip																										|
|userAgent|string|客户端ua，注意非本地运行环境下客户端getSystemInfoSync也会获取ua参数并上传给云对象，但是云对象会从http请求头里面获取ua而不是clientInfo里面的ua	|
|source		|string	|调用来源，返回值见下。`HBuilderX 3.5.1+`								|
|requestId|string	|请求id。`HBuilderX 3.5.1+`								|
|scene		|string	|场景值。客户端[uni.getLaunchOptionsSync](/api/getLaunchOptionsSync.html#getlaunchoptionssync)返回的scene参数，新增于`HBuilderX 3.5.1`	|

getClientInfo().source，返回云函数调用来源，它的值域为：

|取值		|说明								|
|--			|--									|
|client		|uni-app客户端导入云对象调用			|
|function	|由其他云函数或云对象调用		|
|http	|云对象URL化后通过http访问调用 `HBuilderX 3.5.2+`		|
|timing	|定时任务调用云对象 `HBuilderX 3.5.2+`		|
|server	|云函数上传并运行	|


**注意事项**
- 客户端上报的信息在理论上存在被篡改可能，实际业务中应验证前端传来的数据的合法性
- 除了clientIP外，其他客户端信息只有使用uni-app客户端以云对象的方式调用才能获取
- 云对象与云函数内获取客户端platform稍有不同，云函数未拉齐vue2、vue3版本app平台的platform值，vue2为`app-plus`，vue3为`app`。云对象无论客户端是vue2还是vue3，在app平台获取的platform均为`app`。这一点在使用uni-id时需要特别注意，详情见：[uni-id文档 preferedAppPlatform](uniCloud/uni-id.md?id=prefered-app-platform)

### 获取云端信息@get-cloud-info

**接口形式**

`this.getCloudInfo()`

**示例**

```js
module.exports = {
	add: function(){
		const cloudInfo = this.getCloudInfo()
		// cloudInfo = {
		//     provider,
		//     spaceId,
		//     functionName,
		//     functionType,
		// }
	}
}
```

**返回值**

|参数名				|类型		|必备	| 说明																										                                   |
|--						|--			|--		|----------------------------------------------------------------|
|provider			|string	|是		| 服务空间供应商，支付宝小程序云为：`alipay`，阿里云为：`aliyun`，腾讯云为：`tencent`         |
|spaceId			|string	|是		| 服务空间Id																							                                  |
|useOldSpaceId|boolean|是		| 当前获取的服务空间id是否为迁移前的服务空间id，新增于`HBuilderX 3.6.13`																 |
|functionName	|string	|是		| 云对象名称，新增于`HBuilderX 3.5.1`										                           |
|functionType	|string	|是		| 云对象此值固定为`cloudobject`，新增于`HBuilderX 3.5.1`	                    |

### 获取客户端token@get-uni-id-token

云对象自动管理`uni-id`的token。开发者无需手动管理。如果不了解`uni-id`，请[参考](/uniCloud/uni-id-summary)

**接口形式**

`this.getUniIdToken()`

**示例**

```js
module.exports = {
	add: function(){
		const token = this.getUniIdToken()
		if(!token) {
			// 登录状态无效
		}
	}
}
```

获取的token是一个加密的字符串，如需解开token，拿到用户的uid、role、permission，则需要导入 uni-id-common 公共模块调用 checkToken 方法。[详见](uni-id-common.md#checktoken)

### 获取当前调用的方法名@get-method-name

本方法主要用于在`_before`等拦截器方法里，判断客户端上传的信息进行处理，比如发现客户端调用的是a方法时，执行一段特殊逻辑。详见下文的[预处理](uniCloud/cloud-obj?id=before-and-after)。

**接口形式**

`this.getMethodName()`

**示例**

```js
module.exports = {
	_before: function() { // _before的用法请看后续章节
		const methodName = this.getMethodName() // add
	}
}
```

### 获取当前参数列表@get-params

在云对象的普通方法里，参数可以直接获取。本方法主要用于在_`_before`等拦截器方法里，判断客户端上传的信息进行处理。详见下文的[预处理](uniCloud/cloud-obj?id=before-and-after)。

**接口形式**

`this.getParams()`

**示例**

```js
module.exports = {
	_before: function() { // _before的用法请看后续章节
		const params = this.getParams() // ['title demo', 'content demo']
	}
}
```

### 获取当前请求id@get-request-id

**接口形式**

`this.getUniCloudRequestId()`

**示例**

```js
module.exports = {
	_after: function(error, result) {
		if(error) {
			const requestId = this.getUniCloudRequestId()
			// log(requestId, error) 出错时记录日志，log方法需自行实现
		}
	}
}
```

### 获取url化时的http信息@get-http-info

> 新增于HBuilderX 3.5.2

仅可在云对象url化时使用，如何使用云对象的url化请参考：[云对象url化](#http-trigger)

**接口形式**

`this.getHttpInfo()`

**示例**

```js
module.exports = {
	_before: function() { // _before的用法请看后续章节
		const httpInfo = this.getHttpInfo()
	}
}
```

httpInfo为集成请求格式的对象，结构如下

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

**注意**

- httpInfo.path表示以配置的url化路径为根路径的访问路径。以配置`/test`为云对象url化路径，访问`/test/a/b/c`时path为`/a/b/c`

**示例**

使用GET请求`https://${云对象Url化域名}/${触发路径}/${云对象方法名}?a=1&b=2`，云对象接收到的`event`为

```js
{
    path: '/${云对象方法名}',
    httpMethod: 'GET',
    headers: {HTTP请求头},
    queryStringParameters: {a: "1", b: "2"},
    isBase64Encoded: false
}
```


使用POST请求`https://${云对象Url化域名}/${触发路径}/${云对象方法名}`，云对象接收到的`event.body`为请求发送的数据，**uni.request默认content-type为application/json**

```js
// 以uni.request为例
uni.request({
  method: 'POST',
  url: 'https://${云对象Url化域名}/${触发路径}/${云对象方法名}',
  data: {
    a: 1,
    b: 2
  },
  success(res) {
    console.log(res);
  }
})

// 云对象的httpInfo
{
    path: '/${云对象方法名}',
    httpMethod: 'POST',
    headers: {
    	...
    	"content-type": 'application/json'
    },
    isBase64Encoded: false,
    body: '{"a":1,"b":2}', // 注意此处可能是base64，需要根据isBase64Encoded判断
}
```


## 内置特殊方法@before-and-after

注意：所有`_`开头的方法都是私有方法，客户端不可访问。也就是客户端调用云对象时不能调用_开头的方法。

目前有3个内置特殊方法：`_before`、`_after`、`_timing`

### 预处理 _before@before

云对象内可以创建一个特殊的方法`_before`，用来在调用常规方法之前进行预处理，一般用于拦截器、统一的身份验证、参数校验等。

以下示例的逻辑是，当客户端调用todo云对象的add方法时，会先执行`_before`方法中的逻辑，判断为add方法时校验了客户端token，校验失败则直接报错返回客户端，校验通过继续执行add方法。

```js
// todo/index.obj.js
module.exports = {
	_before: function(){
		const methodName = this.getMethodName()
		if(methodName === 'add' && !this.getUniIdToken()) {
			throw new Error('token不存在')
		}
	},
	add: function(title = '', content = '') {
		return {
			errCode: 0,
			errMsg: '创建成功'
		}
	}
}
```

### 后处理 _after@after

与预处理`_before`对应的是后处理`_after`。云对象内可以创建一个特殊的方法`_after`用来再加工处理本次调用方法的返回结果或者抛出的错误

请看以下示例：

```js
// todo/index.obj.js
module.exports = {
	_before: function(){
		this.startTime = Date.now() // 在before内记录开始时间并在this上挂载，以供后续流程使用
	},
	add: function(title = '', content = '') {
		if(title === 'abc') {
			throw new Error('abc不是一个合法的todo标题')
		}
		return {
			errCode: 0,
			errMsg: '创建成功'
		}
	},
	_after(error, result) {
		if(error) {
			throw error // 如果方法抛出错误，也直接抛出不处理
		}
		result.timeCost = Date.now() - this.startTime
		return result
	}
}
```

### 定时运行 _timing

> 新增于HBuilderX 3.5.2

在 uniCloud web控制台可以配置定时任务。给一个云对象配置后，将定时执行该云对象的内置方法 `_timing`

详细用法参考：[云对象使用定时触发](trigger.md#cloudobject)

## 云对象的返回值@return-value

云对象返回给客户端的数据，包括正常数据和错误对象。

理论上，开发者可以使用任意方式返回正确状态下的数据格式，返回字符串、json对象都可以。

但在错误处理时，推荐使用[uniCloud响应体规范](uniCloud/cf-functions.md?id=resformat)，以方便客户端统一拦截错误。

在云对象内部报错时，比如方法名错误等非开发者代码返回的错误，会自动使用[uniCloud响应体规范](uniCloud/cf-functions.md?id=resformat)抛出错误对象。

开发者代码在主动报错时，比如参数校验错误，由于不能直接写入错误对象（e），则需要按照[uniCloud响应体规范](uniCloud/cf-functions.md?id=resformat)在返回的json对象中加入`errCode`和`errMsg`。

uni-app框架在拿到云对象的响应结果后，会识别其中是否包含`errCode`和`errMsg`，然后自动创建报错对象（e），策略如下：

- 如果是正常的结果（errCode为假值[0, false, null, undefined, ...]或者结果内不含errCode），不抛出错误对象（e）
- 如果是报错的结果（errCode为真值）将结果内的errCode和errMsg组合为错误对象（e）抛出
- 如果是其他云函数未捕获的错误，直接将错误码和错误信息组合成错误对象（e）抛出

也就是说，开发者的前端代码调用云对象时，需要try catch或者then catch。不报错时，在`try`里或`then()`的`res`里直接返回结果，报错时在`catch (e) {}`里拿到错误对象e。

不管是系统错误（如网络问题、云函数超时问题），还是开发者业务上的反馈错误，都如此，都是在 `catch` 中捕获错误。

客户端抛出的错误对象（e）有以下属性

|属性名		|类型				|是否必备	|说明													|
|--			|--					|--			|--														|
|errCode	|string&#124;number	|否			|错误码													|
|errMsg		|string				|否			|错误信息												|
|requestId	|string				|否			|当前请求的requestId。本地调试无此值，需在服务空间运行		|
|detail		|Object				|否			|完整的错误响应（仅在响应符合uniCloud响应体规范时才有）	|



详见以下示例：

```js
// 云对象代码 todo/index.obj.js
module.exports = {
	add: async function(title = '', content = '') { 
		title = title.trim()
		content = content.trim()
		if(!title || !content) {
			return {
				errCode: 'INVALID_TODO',
				errMsg: 'TODO标题或内容不可为空'
			}
		}
		// ...其他逻辑
		return {
			errCode: 0,
			errMsg: '创建成功'
		}
	}
}
```

```js
// 客户端代码
const todo = uniCloud.importObject('todo')

// 不传title、content，云函数返回错误的响应
try {
	await todo.add()
} catch (e) {
	// e.errCode === 'INVALID_TODO'
	// e.errMsg === 'TODO标题或内容不可为空'
	// e.detail === {errCode: 'INVALID_TODO',errMsg: 'TODO标题或内容不可为空'}
	// e.requestId === 'xxxx'
}

// 传入正确的title、content，云函数返回原始响应
try {
	const res = await todo.add('title demo', 'content demo')
	// res = {errCode: 0,errMsg: '创建成功'}
} catch (e) {}
```

**注意**
- js错误对象不是json，直接console.log(e)，只能得到被toString()后的errMsg。而不是一个展开的json结构。所以需要分别打印e对象的子属性。


## 云对象的多种调用方式

### 客户端调用@call-by-client

客户端通过`uniCloud.importObject`方法获取云对象的实例。用法如下

```js
const todo = uniCloud.importObject('todo')
const res = await todo.add('title demo', 'content demo')
```

### 云函数或云对象内调用@call-by-cloud

云函数或云对象内也可以调用同一服务空间内的云对象，用法和客户端调用云对象一致

```js
const todo = uniCloud.importObject('todo')
const res = await todo.add('title demo', 'content demo')
```

### 定时触发@timing-trigger

> 新增于HBuilderX 3.5.2

详细用法参考：[云对象使用定时触发](trigger.md#cloudobject)

### url化@http-trigger

> 新增于HBuilderX 3.5.2

当需要外部系统访问云对象时，可以把云对象封装成一个HTTP的URL。详细用法参考：[云对象使用url化](http.md#cloudobject)

### 跨服务空间调用云对象@call-by-cloud-cross-space

云端或者客户端均有uniCloud.init方法可以获取其他服务空间的uniCloud实例，使用此实例的importObject可以调用其他服务空间的云对象，[参考](uniCloud/concepts/space.md?id=multi-space)

客户端无论腾讯阿里均支持。云端`uniCloud.init`方法仅腾讯云支持，且仅能获取同账号下的腾讯云服务空间的uniCloud实例。

**示例代码**

```js
const mycloud = uniCloud.init({
	provider: 'tencent',
	spaceId: 'xxx'
})
const todo = mycloud.importObject('todo')
const res = await todo.add('title demo', 'content demo')
```

**注意**
- 上述示例代码，在实际开发中均应该使用 try catch 或 then catch 处理错误捕获

### 云对象多个方法共享逻辑@call-internal-method

一个云对象导出的不同方法之间不能互相调用。比如下面示例中 tryAddTodo 方法内部无法调用 addTodo 方法。

只能将多个方法共享的逻辑放到云对象导出的对象外部来供云对象的方法调用。例如下面抽离公共函数 pureAddTodo ：

```js
// todo.obj.js
// 方法前的async是根据自己的业务来的，不是必须async

async function pureAddTodo(title, content) {
	// ...add todo 逻辑
}

module.exports = {
	async tryAddTodo() {
		try {
			return addTodo(title, content) // 一定会失败。只能调用 pureAddTodo 这样的非导出方法。
		} catch (e) {
			return {
				errCode: 'add-todo-failed'
			}
		}
	},
	async addTodo(title, content) {
		return pureAddTodo(title, content)
	}
}
```

### 云对象的接收参数的体积上限
- 支付宝小程序云接收参数大小不可超过6MB
- 阿里云接收参数大小不可超过1MB
- 腾讯云接收参数大小不可超过5MB

由于传输层还有上下文环境信息，所以开发者给云对象发送参数时需注意控制参数体积


## 自动显示交互界面@auto-ui

> 新增于 HBuilderX 3.4.6，本次调整属于非兼容更新。

背景：每次写客户端联网的代码时，开发者都免不了重复写一堆代码：先调用loading等待框，联网结束后再关闭loading，如果服务器异常则弹出提示。

从HBuilderX 3.4.6起，调用云对象的方法时，默认会自动显示交互/提示界面。

1. 在请求联网开始时显示loading等待框，
2. 结束后隐藏loading
3. 如果请求报错，显示弹窗（也可配置为显示Toast）

如果默认显示的UI不符合你的需求，你可以通过配置自定义一些交互内容，也可以直接关闭自动显示的交互界面。

- 如需关闭自动显示的UI，请在客户端导入云对象时传入参数`customUI: true`

例：

```js
uniCloud.importObject('todo', {
	customUI: true // 取消自动展示的交互提示界面
})
```

- 如需自定义默认显示的UI，配置如下：

```js
uniCloud.importObject('todo', {
	customUI: false, // 是否取消自动展示的交互界面。默认为false，配置为true时取消自动展示的交互提示界面，以下配置均不再生效
	loadingOptions: { // loading相关配置
		title: '加载中...', // 显示的loading内的提示文字。默认值为：加载中...
		mask: true // 是否使用透明遮罩，配置为true时不可点击页面其他内容。默认值为：true
	},
	errorOptions: { // 错误界面相关配置
		type: 'modal', // 错误信息展示方式，可取值：modal（弹框，默认）、toast（toast消息框）。默认值为：modal
		retry: false // 是否展示重试按钮，仅在type为modal时生效。用户点击重试按钮时将重新请求调用的方法，默认为false
	},
  parseSystemError({ // 转化云对象内未捕获的错误，或客户端网络错误
    objectName, // 云对象名
    methodName, // 方法名
    params, // 调用方法时传的参数，注意params是一个数组
    errCode, // 请求返回的错误码
    errMsg // 请求返回的错误信息
  } = {}){
    return {
      errMsg: '系统错误，请稍后再试' // 用于展示的错误信息
    }
  }
})
```

**注意**
1. 配置仅对当前`importObject`返回的云对象实例生效
2. 本功能仅对客户端调用云对象生效。在云函数或云对象中调用云对象不生效


## 本地运行@run-local

文档移至：[云对象本地运行](rundebug.md#run-obj-param)

## jsdoc+语法提示

HBuilderX中所有js方法都支持jsdoc+的语法提示系统。

在方法的开头通过`/**`输入特定格式的注释，在调用这个云对象的方法时就可以看到参数提示。

```js
/**
 * method1方法描述
 * @param {string} param1 参数1描述
 * @returns {object} 返回值描述
 */
method1(param1) {
	if (!param1) {
		return {
			errCode: 'PARAM_IS_NULL',
			errMsg: '参数不能为空'
		}
	}
	return {
		param1 //请根据实际需要返回值
	}
}
```

调用该方法时可以看到代码提示：
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/cloudobjjsdoc1.jpg)

## 在云对象中使用cookie

详见：[url化场景下使用cookie](http.md#cookie)

## 注意事项

- 云对象和云函数都在cloudfunctions目录下，但是不同于云函数，云对象的入口为`index.obj.js`，而云函数则是`index.js`。**为正确区分两者uniCloud做出了限制，云函数内不可存在index.obj.js，云对象内也不可存在index.js。**
- 所有`_`开头的方法都是私有方法，客户端不可访问
- 云对象也可以引用公共模块或者npm上的包，引用方式和云函数一致。
- 云对象的导出的方法不可以是箭头函数，导出箭头函数会导致`this`指向不正确

## 复杂示例

DCloud官方开发了 `uni-id-co`，这是一个较为复杂的云对象，用于搭配 [uni-id-pages](https://ext.dcloud.net.cn/plugin?id=8577) 实现云端一体的用户注册登录等功能。该代码开源，可以参考。

## 推荐最佳实践

uniCloud的服务器和客户端交互，有云函数、云对象、clientDB三种方式。

从云对象发布后，不再推荐使用传统云函数了。

如果是以数据库操作为主，则推荐使用clientDB，开发效率是最高的。

如果服务器端不操作数据库外，或者还有复杂的、不宜公开在前端的逻辑，此时推荐使用云对象。

