## 云对象

> 新增于 HBuilderX 3.4.0

云对象本质上是对云函数的封装，和传统方式通过callFunction调用云函数相比，云对象写法更简单，调用更清晰。另外云对象默认支持[uniCloud响应体规范](uniCloud/cf-functions.md?id=resformat)，对于满足规范的错误响应会在客户端自动抛出错误，开发者可以少写很多繁琐的判断。

以下面的云函数为例，对比一下云对象和传统云函数

**传统callFunction方式代码如下：**

```js
// 传统方式调用云函数-云函数代码
// 云函数名：user-center
// 云函数入口index.js内容如下
'use strict';
exports.main = async (event, context) => {
	const {
		method,
		params
	} = event
	switch(method) {
		case 'login': {
			const {
				username,
				password
			} = params
			// 简化演示逻辑，此处不演示token校验
			if(!username) {
				return {
					errCode: 'INVALID_USERNAME',
					errMsg: '用户名不正确'
				}
			}
			// ...省略其他逻辑
			return {
				errCode: 0,
				errMsg: '登录成功'
			}
		}
	}
	return {
		errCode: 'METHOD_NOT_FOUND',
		errMsg: `Method[${method}] not found`
	}
};

// 传统方式调用云函数-客户端代码
async function login () {
	try {
		const res = uniCloud.callFunction({
			name: 'user-center', 
			data: {
				method: 'login',
				params: {
					username: 'dc',
					password: '123456'
				}
			}
		})
		const {
			errCode,
			errMsg
		} = res.result
		if(errCode) {
			uni.showModal({
				title: '登录失败',
				content: errMsg,
				showCancel: false
			})
			return
		}
		uni.showToast({
			title: '登录成功'
		})
	} catch (e) {
		uni.showModal({
			title: '登录失败',
			content: e.message,
			showCancel: false
		})
	}
}
```

**使用云对象的写法如下：**

```js
// 使用云对象的写法-云对象代码
// 云对象名：user-center
// 云对象入口index.obj.js内容如下
module.exports = {
	login(username, password) {
		if (!username) {
			return {
				errCode: 'INVALID_USERNAME',
				errMsg: '用户名不正确'
			}
		}
		// ...登录逻辑
		return {
			errCode: 0,
			errMsg: '登录成功'
		}
	}
}

// 使用云对象的写法-客户端代码
const userCenter = uniCloud.importObject('user-center')
async function login () {
	try {
		const res = await userCenter.login('dc', '123456')
		uni.showToast({
			title: '登录成功'
		})
	} catch (e) {
		// 此形式响应符合uniCloud响应体规范中的错误响应，自动抛出此错误
		// {
		// 	errCode: 'INVALID_USERNAME',
		// 	errMsg: '用户名不正确'
		// }
		uni.showModal({
			title: '登录失败',
			content: e.errMsg,
			showCancel: false
		})
	}
}
```

可以看到大量的业务无关代码被简化掉，开发效率UP。此外通过`ObjectName.MethodName`的方式调用云函数和云端写法完全一致，心智负担大幅减小。请阅读以下内容深入了解云对象

## 规范

云对象和云函数都在cloudfunctions目录下，但是不同于云函数，云对象的入口为`index.obj.js`，而云函数则是`index.js`。**为正确区分两者uniCloud做出了限制，云函数内不可存在index.obj.js，云对象内也不可存在index.js。**一个标准的云对象入口应导出一个对象，如下:

对象内每个键值对是一个处理方法

```js
// user-center/index.obj.js
module.exports = {
	login: async function(username, password) { 
		console.log(username, password)
	} // login方法
}
```

云对象也可以引用公共模块或者npm上的包，引用方式和云函数完全一致。

### 客户端调用@call-by-client

客户端通过`uniCloud.importObject`方法获取云对象的实例。用法如下

```js
const userCenter = uniCloud.importObject('user-center')
const res = await userCenter.login('dc', '123456') // 传入参数 username 和 password，参数和云对象内的方法完全一致
```

### 云函数或云对象内调用@call-by-cloud

云函数或云对象内也可以调用同一服务空间内的云对象，用法和客户端调用云对象一致

```js
const userCenter = uniCloud.importObject('user-center')
const res = await userCenter.login('dc', '123456') // 传入参数 username 和 password，参数和云对象内的方法完全一致
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
const userCenter = mycloud.importObject('user-center')
const loginRes = await mycloud.login('dc', '123456')
```

### 云对象的返回值@return-value

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
// user-center/index.obj.js
module.exports = {
	login: async function(username, password) { 
		if(!username) {
			return {
				errCode: 'INVALID_USERNAME',
				errMsg: '登录失败'
			}
		}
		return {
			errCode: 0,
			errMsg: '登录成功'
		}
	}
}

// 客户端代码
const userCenter = uniCloud.importObject('user-center')
try {
	// 不传username，云函数返回错误的响应
	await userCenter.login()
} catch (e) {
	// e.errCode === 'INVALID_USERNAME'
	// e.errMsg === '登录失败'
	// e.detail === {errCode: 'INVALID_USERNAME',errMsg: '登录失败'}
	// e.requestId === 'xxxx'
}

try {
	const res = await userCenter.login('dc', '123456')
	// res = {errCode: 0,errMsg: '更新成功'}
} catch (e) {}
```

## 本地运行@run-local

云对象无法直接本地运行，可以通过其他云函数调用本地云对象（在调用云对象的云函数右键本地运行），或者客户端调用本地云对象的方式来实现云对象的本地运行。