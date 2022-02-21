## 云对象

> 新增于 HBuilderX 3.4.0

云对象本质上是对云函数的封装，和传统方式通过callFunction调用云函数相比，云对象写法更简单，调用更清晰。另外云对象默认支持[uniCloud响应体规范](uniCloud/cf-functions.md?id=resformat)，对于满足规范的错误响应会在客户端自动抛出错误，开发者可以少写很多罗里吧嗦的判断。

以多action云函数为例，对比一下云对象和传统云函数

**传统callFunction方式代码如下：**

```js
// 传统方式调用云函数-云函数代码
// 云函数名：user-center
// 云函数入口index.js内容如下
'use strict';
exports.main = async (event, context) => {
	const {
		action,
		params
	} = event
	switch(action) {
		case 'updateUser': {
			const {
				nickname,
				age
			} = params
			// 简化演示逻辑，此处不演示token校验
			if(!nickname) {
				return {
					errCode: 'INVALID_NICKNAME',
					errMsg: '昵称不正确'
				}
			}
			return {
				errCode: 0,
				errMsg: '更新成功'
			}
		}
	}
	return {
		errCode: 'ACTION_NOT_FOUND',
		errMsg: `action[action] not found`
	}
};

// 传统方式调用云函数-客户端代码
async function updateUser () {
	try {
		const res = uniCloud.callFunction({
			name: 'user-center', 
			data: {
				action: 'updateUser',
				params: {
					nickname: 'dc',
					age: 10
				}
			}
		})
		const {
			errCode,
			errMsg
		} = res.result
		if(errCode) {
			uni.showModal({
				title: '更新失败',
				content: errMsg,
				showCancel: false
			})
			return
		}
		uni.showToast({
			title: '更新成功'
		})
	} catch (e) {
		uni.showModal({
			title: '更新失败',
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
	updateUser(nickname, age) {
		if (!nickname) {
			return {
				errCode: 'INVALID_NICKNAME',
				errMsg: '昵称不正确'
			}
		}
		return {
			errCode: 0,
			errMsg: '更新成功'
		}
	}
}

// 使用云对象的写法-客户端代码
const userCenter = uniCloud.importObject('user-center')
async function updateUser () {
	try {
		const res = await userCenter.updateUser('dc', 10)
		uni.showToast({
			title: '更新成功'
		})
	} catch (e) {
		// 此形式响应符合uniCloud响应体规范中的错误响应，自动抛出此错误
		// {
		// 	errCode: 'INVALID_NICKNAME',
		// 	errMsg: '昵称不正确'
		// }
		uni.showModal({
			title: '更新失败',
			content: e.errMsg,
			showCancel: false
		})
	}
}
```

可以看到大量的业务无关代码被简化掉，开发效率UP。此外通过`ObjectName.ActionName`的方式调用云函数和云端写法完全一致，心智负担大幅减小。请阅读以下内容深入了解云对象

## 规范

云对象和云函数都在cloudfunctions目录下，但是不同于云函数，云对象的入口为`index.obj.js`，而云函数则是`index.js`。**为正确区分两者uniCloud做出了限制，云函数内不可存在index.obj.js，云对象内也不可存在index.js。**一个标准的云对象入口应导出一个对象，如下:

对象内每个键值对是一个action

```js
// user-center/index.obj.js
module.exports = {
	updateUser: async function(nickname, age) { 
		console.log(nickname, age)
	} // action updateUser
}
```

云对象也可以引用公共模块或者npm上的包，引用方式和云函数完全一致。

### 客户端调用@call-by-client

客户端通过`uniCloud.importObject`方法获取云对象的实例。用法如下

```js
const userCenter = uniCloud.importObject('user-center')
const res = await userCenter.updateUser('dc', 10) // 传入参数 nickname 和 age，参数和云对象内的action完全一致
```

### 客户端调用返回值@return-value

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
	updateUser: async function(nickname, age) { 
		if(!nickname) {
			return {
				errCode: 'INVALID_NICKNAME',
				errMsg: '更新失败'
			}
		}
		return {
			errCode: 0,
			errMsg: '更新成功'
		}
	}
}

// 客户端代码
const userCenter = uniCloud.importObject('user-center')
try {
	// 不传username，云函数返回错误的响应
	await userCenter.updateUser()
} catch (e) {
	// e.errCode === 'INVALID_NICKNAME'
	// e.errMsg === '更新失败'
	// e.detail === {errCode: 'INVALID_NICKNAME',errMsg: '更新失败'}
	// e.requestId === 'xxxx'
}

try {
	const res = await userCenter.updateUser('dc', 10)
	// res = {errCode: 0,errMsg: '更新成功'}
} catch (e) {}
```

