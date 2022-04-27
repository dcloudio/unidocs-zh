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
		const res = uniCloud.callFunction({
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

_注：以上例子仅用于方便初学者理解。实质上对于简单的数据库操作，使用clientDB在前端直接操作数据库是更简单、代码更少的方案，[另见](/uniCloud/clientdb)_

总结下云对象带来的好处：
1. 更清晰的逻辑
2. 更精简的代码
3. 更少的协作成本（以及矛盾~）
4. 客户端调用时在ide里有完善的代码提示，方法参数均可提示。（传输json可没法在ide里提示）
5. 自动支持[uniCloud响应体规范](uniCloud/cf-functions.md?id=resformat)，方便错误拦截和统一处理

## 快速上手

### 创建云对象

云对象，其实是对云函数的封装。和创建云函数一样，在`uniCloud/cloudfunctions`目录右键新建云函数，选择云对象类型，输入云对象名称创建云对象，此处以云对象todo为例，创建的云对象包含一个`index.obj.js`。

![创建云对象](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1c2bff0e-3c93-4417-bc21-90a842c779af.jpg)

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

### 自动显示交互界面@auto-ui

> 新增于 HBuilderX 3.4.6，本次调整属于非兼容更新。

HBuilderX 3.4.6及更高版本，调用云对象的方法时，默认会自动显示交互/提示界面。

1. 在请求开始时显示loading，
2. 结束后隐藏loading
3. 如果请求报错，显示弹窗（可配置为显示Toast）

如需关闭此行为，请传入`customUI: true`

例：

```js
uniCloud.importObject('todo', {
	customUI: true // 取消自动展示的交互提示界面
})
```

关于交互/提示界面的完整配置如下：

**注意**

- 配置仅对当前`importObject`返回的云对象实例生效

```js
uniCloud.importObject('todo', {
	customUI: false, // 是否取消自动展示的交互界面。默认为false，配置为true时取消自动展示的交互提示界面，以下配置均不再生效
	loadingOptions: { // loading相关配置
		text: '加载中...', // 显示的loading内的提示文字。默认值为：加载中...
		mask: true // 是否使用透明遮罩，配置为true时不可点击页面其他内容。默认值为：true
	},
	errorOptions: { // 错误界面相关配置
		type: 'modal', // 错误信息展示方式，可取值：modal（弹框，默认）、toast（toast消息框）。默认值为：modal
		retry: false // 是否展示重试按钮，仅在type为modal时生效。用户点击重试按钮时将重新请求调用的方法，默认为false
	}
})
```

## 云对象的API@api

云对象作为云函数的一种，可以调用所有node的API和uniCloud的API。

uniCloud有众多API，另见：[uniCloud的API清单](uniCloud/cf-functions.html#unicloud-api%E5%88%97%E8%A1%A8)

与云函数入参时的`context`不同，云对象没有`context`。除上述API之外，云对象的this对象还有一批专用方法来获取当前请求的上下文信息。

### 获取客户端信息@get-client-info

**接口形式**

`this.getClientInfo()`

**示例：**

```js
module.exports = {
	add: function() {
		const clientInfo = this.getClientInfo()
		// clientInfo = {
		// 	os,
		// 	appId,
		// 	locale,
		// 	clientIP,
		// 	userAgent,
		// 	platform,
		// 	deviceId,
		// 	uniIdToken
		// }
	}
}
```

**返回值**

|参数名		|类型	|必备	|说明											|
|--			|--		|--		|--												|
|os			|string	|是		|客户端系统										|
|appId		|string	|是		|客户端DCloud AppId								|
|locale		|string	|是		|客户端语言										|
|clientIP	|string	|是		|客户端ip										|
|userAgent	|string	|是		|客户端ua										|
|platform	|string	|是		|客户端平台，app，mp-weixin等					|
|deviceId	|string	|是		|客户端deviceId，目前同getSystemInfo内的deviceId|
|uniIdToken	|string	|是		|客户端用户token								|

**注意**

- 与云函数内获取客户端platform稍有不同，云函数未拉齐vue2、vue3版本app平台的platform值，vue2为`app-plus`，vue3为`app`。云对象无论客户端是vue2还是vue3，在app平台获取的platform均为`app`。这一点在使用uni-id时需要特别注意，详情见：[uni-id文档 preferedAppPlatform](uniCloud/uni-id.md?id=prefered-app-platform)

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
		//     spaceId
		// }
	}
}
```

**返回值**

|参数名		|类型	|必备	|说明			|
|--			|--		|--		|--				|
|provider	|string	|是		|服务空间供应商	|
|spaceId	|string	|是		|服务空间Id		|

### 获取客户端token@get-uni-id-token

**接口形式**

`this.getUniIdToken()`

**示例**

```js
module.exports = {
	add: function(){
		const token = this.getUniIdToken()
	}
}
```

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

## 预处理与后处理@before-and-after

### 预处理 _before@before

云对象内可以创建一个特殊的方法_before，用来在调用常规方法之前进行预处理，一般用于拦截器、统一的身份验证、参数校验等。

以下示例的逻辑是，当客户端调用todo云对象的add方法时，会先执行_before方法中的逻辑，判断为add方法时校验了客户端token，校验失败则直接报错返回客户端，校验通过继续执行add方法。

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

## 云对象的返回值@return-value

客户端拿到云对象的响应结果后，会自动进行结果的处理。

- 如果是正常的结果（errCode为假值[0, false, null, undefined, ...]或者结果内不含errCode）则将结果直接返回
- 如果是报错的结果（errCode为真值）将结果内的errCode和errMsg组合为错误对象抛出
- 如果是其他云函数未捕获的错误，直接将错误码和错误信息组合成错误对象抛出

前端抛出的错误对象上有以下属性

|属性名		|类型				|是否必备	|说明													|
|--			|--					|--			|--														|
|errCode	|string&#124;number	|否			|错误码													|
|errMsg		|string				|否			|错误信息												|
|requestId	|string				|否			|当前请求的requestId									|
|detail		|Object				|否			|完成的错误响应（仅在响应符合uniCloud响应体规范时才有）	|

详见以下示例：

```js
// todo/index.obj.js
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

// 客户端代码
const todo = uniCloud.importObject('todo')
try {
	// 不传title、content，云函数返回错误的响应
	await todo.add()
} catch (e) {
	// e.errCode === 'INVALID_TODO'
	// e.errMsg === 'TODO标题或内容不可为空'
	// e.detail === {errCode: 'INVALID_TODO',errMsg: 'TODO标题或内容不可为空'}
	// e.requestId === 'xxxx'
}

try {
	const res = await todo.add('title demo', 'content demo')
	// res = {errCode: 0,errMsg: '创建成功'}
} catch (e) {}
```


## 调用云对象

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

### 跨服务空间调用云对象@call-by-cloud-cross-space

云端或者客户端均有uniCloud.init方法可以获取其他服务空间的uniCloud实例，使用此实例的importObject可以调用其他服务空间的云对象，参考：[](uniCloud/concepts/space.md?id=multi-space)

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


## 注意事项

- 云对象和云函数都在cloudfunctions目录下，但是不同于云函数，云对象的入口为`index.obj.js`，而云函数则是`index.js`。**为正确区分两者uniCloud做出了限制，云函数内不可存在index.obj.js，云对象内也不可存在index.js。**
- 所有`_`开头的方法都是私有方法，客户端不可访问
- 云对象也可以引用公共模块或者npm上的包，引用方式和云函数完全一致。

## 本地运行@run-local

`HBuilderX 2.4.8`之前，云对象目前无法直接本地运行，可以通过其他云函数调用本地云对象（在调用云对象的云函数右键本地运行），或者客户端调用本地云对象的方式来实现云对象的本地运行。

`HBuilderX 2.4.8`及之后版本，云对象可以直接运行。打开云对象下的js文件，按ctrl+r或点击运行菜单运行云对象。运行云对象之前需要先选择执行云对象的哪个方法，以及传递什么参数。

以下述云对象为例：

```js
module.exports = {
	login(username, password) {
		// ...
		return {
			errCode: 0
		}
	}
}

```

调用login方法，传递username及password参数，的运行参数配置如下：

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/db974aec-7975-45b7-bb64-24afd8a59213.jpg)

## 推荐最佳实践

uniCloud的服务器和客户端交互，有云函数、云对象、clientDB三种方式。

从云对象发布后，不再推荐使用传统云函数了。

如果是以数据库操作为主，则推荐使用clientDB，开发效率是最高的。

如果服务器端除了操作数据库外，还有复杂的、不宜公开在前端的逻辑，此时推荐使用云对象。