## 云对象

> 新增于 HBuilderX 3.4.0

云对象本质上是对云函数的封装，和传统方式通过callFunction调用云函数相比，云对象写法更简单，调用更清晰。另外云对象默认支持[uniCloud响应体规范](uniCloud/cf-functions.md?id=resformat)，对于满足规范的错误响应会在客户端自动抛出错误，开发者可以少写很多繁琐的判断。

以下面的云函数为例，对比一下云对象和传统云函数

**传统callFunction方式代码如下：**

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

**使用云对象的写法如下：**

```js
// 使用云对象的写法-云对象代码
// 云对象名：todo
// 云对象入口index.obj.js内容如下
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

// 使用云对象的写法-客户端代码
const todo = uniCloud.importObject('todo')
async function addTodo () {
	try {
		const res = await todo.add('title demo', 'content demo')
		uni.showToast({
			title: '创建成功'
		})
	} catch (e) {
		// 此形式响应符合uniCloud响应体规范中的错误响应，自动抛出此错误
		// {
		// 	errCode: 'INVALID_TODO',
		// 	errMsg: 'TODO标题或内容不可为空'
		// }
		uni.showModal({
			title: '创建失败',
			content: e.errMsg,
			showCancel: false
		})
	}
}
```

可以看到大量的业务无关代码被简化掉，开发效率UP。此外通过`ObjectName.MethodName`的方式调用云函数和云端写法完全一致，心智负担大幅减小。请阅读以下内容深入了解云对象

## 快速上手

### 创建云对象

和创建云函数一样，在`cloudfunctions`目录右键即可输入云对象名称创建云对象，此处以云对象todo为例，创建的云对象包含一个`index.obj.js`。内容如下

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
		// ...其他逻辑
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

## 云对象的API@api

云对象的方法内可以通过this上的一些接口获取一些信息

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

云对象内可以创建一个特殊的方法_after用来在调用方法之前进行一些额外的操作

请看以下示例：

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

云对象内可以创建一个特殊的方法_after用来处理本次调用方法的返回结果或者抛出的错误

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

云对象无法直接本地运行，可以通过其他云函数调用本地云对象（在调用云对象的云函数右键本地运行），或者客户端调用本地云对象的方式来实现云对象的本地运行。