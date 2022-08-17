# uniCloud客户端sdk
# uniCloud client sdk

uniCloud分为客户端和云端两部分，有些接口名称相同，参数也相近，在此列举客户端sdk内可以使用的接口/属性，避免混淆
uniCloud is divided into two parts: the client and the cloud. Some interfaces have the same name and similar parameters. Here are the interfaces/properties that can be used in the client sdk to avoid confusion.


## API

客户端API列表
List of Client APIs

|API							|描述																			|
|API |Description |
|--								|--																				|
|uniCloud.importObject()		|获取云对象引用以调用云对象接口 [详情](cloud-obj.md)					|
|uniCloud.importObject() |Get the cloud object reference to call the cloud object interface [Details](cloud-obj.md) |
|uniCloud.callFunction()		|客户端调用云函数 [详情](cf-functions.md#clientcallfunction)		|
|uniCloud.callFunction() |The client calls cloud functions [Details](cf-functions.md#clientcallfunction) |
|uniCloud.database()			|客户端访问云数据库，获取云数据库对象引用 [详情](clientdb.md)			|
|uniCloud.database() |The client accesses the cloud database and obtains the object reference of the cloud database [Details](clientdb.md) |
|uniCloud.uploadFile()			|客户端直接上传文件到云存储 [详情](storage.md#uploadfile)			|
|uniCloud.uploadFile() | Client uploads files directly to cloud storage [Details](storage.md#uploadfile) |
|uniCloud.getTempFileURL()		|客户端获取云存储文件的临时路径 [详情](storage.md#gettempfileurl)	|
|uniCloud.getTempFileURL() |The client gets the temporary path of the cloud storage file [Details](storage.md#gettempfileurl) |
|uniCloud.chooseAndUploadFile()	|客户端选择文件并上传 [详情](storage.md#chooseanduploadfile)		|
|uniCloud.chooseAndUploadFile() |The client selects a file and uploads it [Details](storage.md#chooseanduploadfile) |
|uniCloud.getCurrentUserInfo()	|获取当前用户信息 [详情](#client-getcurrentuserinfo)							|
|uniCloud.getCurrentUserInfo() |Get current user information [Details](#client-getcurrentuserinfo) |
|uniCloud.init()				|同时使用多个服务空间时初始化额外服务空间 [详情](init.md)				|
|uniCloud.init() |Initialize additional service space when using multiple service spaces at the same time [Details](init.md) |
|uniCloud.addInterceptor()		|新增拦截器 [详情](#add-interceptor)											|
|uniCloud.addInterceptor() |Add Interceptor [Details](#add-interceptor) |
|uniCloud.removeInterceptor()	|移除拦截器 [详情](#remove-interceptor)											|
|uniCloud.removeInterceptor() |Remove the interceptor [Details](#remove-interceptor) |
|uniCloud.onResponse()			|监听服务端（云函数、云对象、clientDB）响应 [详情](#on-response)				|
|uniCloud.onResponse() |Listen to the server (cloud function, cloud object, clientDB) response [Details](#on-response) |
|uniCloud.offResponse()			|移除监听服务端（云函数、云对象、clientDB）响应 [详情](#off-response)			|
|uniCloud.offResponse() |Remove the response from the monitoring server (cloud function, cloud object, clientDB) [Details](#off-response) |
|uniCloud.onNeedLogin()			|监听需要登录事件 [详情](#on-need-login)										|
|uniCloud.onNeedLogin() |Listen for login required events [Details](#on-need-login) |
|uniCloud.offNeedLogin()		|移除监听需要登录事件 [详情](#off-need-login)									|
|uniCloud.offNeedLogin() |Remove the need to log in event [Details](#off-need-login) |
|uniCloud.onRefreshToken()		|监听token更新事件 [详情](#on-refresh-token)									|
|uniCloud.onRefreshToken() |Listen to the token update event [Details](#on-refresh-token) |
|uniCloud.offRefreshToken()		|移除监听token更新事件 [详情](#off-refresh-token)								|
|uniCloud.offRefreshToken() |Remove listening for token update events [Details](#off-refresh-token) |

### 获取当前用户信息getCurrentUserInfo@client-getcurrentuserinfo
### Get current user information getCurrentUserInfo@client-getcurrentuserinfo

> HBuilderX 3.1.0+

解析客户端token获取用户信息。常用于在前端判断当前登录的用户状态和用户权限，比如根据不同的权限显示隐藏某些按钮。
Parse the client token to obtain user information. It is often used to judge the current logged-in user status and user permissions on the front end, such as displaying and hiding certain buttons according to different permissions.

**注意**
**Notice**

- 此接口不会发送网络请求，**此接口仅仅是客户端接口，不校验token的合法性以及是否过期**
- This interface will not send network requests, **This interface is only a client interface, does not verify the validity of the token and whether it has expired**
- 需要搭配uni-id使用并要求客户端必须将token存储在storage内的`uni_id_token`内
- It needs to be used with uni-id and requires the client to store the token in `uni_id_token` in storage
- 如需获取role、permission需要将角色权限缓存在token内，此功能自uni-id 3.0.0 或 uni-id-common中默认开启
- To obtain role and permission, you need to cache role permissions in the token. This function is enabled by default in uni-id 3.0.0 or uni-id-common

用法：`uniCloud.getCurrentUserInfo()`
Usage: `uniCloud.getCurrentUserInfo()`

该方法为同步方法。
This method is a synchronous method.

**响应参数**
**Response parameters**

| 字段			| 类型	| 说明									|
| Field | Type | Description |
| ---			| ---	| ---									|
| uid			| Number|当前用户uid							|
| uid | Number | current user uid |
| role			| Array	|用户角色列表。admin用户返回["admin"]	|
| role | Array | List of user roles. admin user returns ["admin"] |
| permission	| Array	|用户权限列表。注意admin角色此数组为空	|
|permission|Array|A list of user permissions. Note that the admin role this array is empty |
| tokenExpired	| Number|token过期时间							|
| tokenExpired | Number| token expiration time |

未能获取用户信息时返回以下结果
The following results are returned when the user information cannot be obtained

```js
{
  uid: null,
  role: [],
  permission: [],
  tokenExpired: 0
}
```

**示例**
```js
console.log(uniCloud.getCurrentUserInfo().role.indexOf('admin')>-1); // 如果是admin用户的话，打印结果为true
console.log(uniCloud.getCurrentUserInfo().role.indexOf('admin')>-1); // If it is an admin user, the print result is true
```

### 新增拦截器@add-interceptor

> 新增于HBuilderX 3.1.20

接口形式：`uniCloud.addInterceptor(String apiName, Object interceptorMap)`

**平台兼容性**

|阿里云	|腾讯云	|
|----		|----		|
|√			|√			|


**入参说明**

| 字段					| 类型	| 必填| 说明																												|
| ---						| ---		| ---	| ---																													|
| apiName				| string| 是	| 要拦截的Api名称，可选值：callFunction、database、uploadFile	|
| interceptorMap| object| 是	| 要添加的拦截器																							|

**interceptorMap参数说明**

|参数名		|类型			|必填	|默认值	|说明					|平台差异说明	|
|---			|---			|---	|---		|---					|---					|
|invoke		|Function	|否		|				|拦截前触发		|							|
|success	|Function	|否		|				|成功回调拦截	|							|
|fail			|Function	|否		|				|失败回调拦截	|							|
|complete	|Function	|否		|				|完成回调拦截	|							|

示例

```js
uniCloud.addInterceptor('callFunction', {
  invoke(param) {
    // param为拦截Api的参数 例 {name: 'functionName', data: {'functionParam1': 1, 'functionParam2': 2}}
    // param is the parameter for intercepting Api Example {name: 'functionName', data: {'functionParam1': 1, 'functionParam2': 2}}
    // 此处返回错误可终止api执行
    // Return an error here to terminate the api execution
  },
  success(res) {
    // res为callFunction的返回值，此处可以对返回值进行修改
    // res is the return value of callFunction, the return value can be modified here
  },
  fail(err) {
    // err为callFunction抛出的错误
    // err is the error thrown by callFunction
  },
  complete(res){
    // complete内res为上面的res或err
    // The res in complete is the res or err above
  }
})
```

### 移除拦截器@remove-interceptor

> 新增于HBuilderX 3.1.20

接口形式：`uniCloud.removeInterceptor(String apiName, Object interceptorMap)`

**入参说明**

| 字段					| 类型	| 必填| 说明																												|
| ---						| ---		| ---	| ---																													|
| apiName				| string| 是	| 要拦截的Api名称，可选值：callFunction、database、uploadFile	|
| interceptorMap| object| 是	| 要移除的拦截器，选填，不传递此参数时移除此Api所有拦截器			|

**interceptorMap参数说明**

|参数名		|类型			|必填	|默认值	|说明					|平台差异说明	|
|---			|---			|---	|---		|---					|---					|
|invoke		|Function	|否		|				|拦截前触发		|							|
|success	|Function	|否		|				|成功回调拦截	|							|
|fail			|Function	|否		|				|失败回调拦截	|							|
|complete	|Function	|否		|				|完成回调拦截	|							|

**注意：**

- 要移除的拦截器内方法需和添加的方法一致才可以移除，详情见下方示例

```js
// 错误用法，无法移除invoke拦截器
// Wrong usage, cannot remove invoke interceptor
uniCloud.addInterceptor('callFunction', {
  invoke(param) {
    console.log('callFunction invoked, with param:',param)
  }
})
uniCloud.removeInterceptor('callFunction', {
  invoke(param) {
    console.log('callFunction invoked, with param:',param)
  }
})

// 正确用法
// correct usage
function invokeInterceptor(param) {
  console.log('callFunction invoked, with param:',param)
}
uniCloud.addInterceptor('callFunction', {
  invoke: invokeInterceptor
})
uniCloud.removeInterceptor('callFunction', {
  invoke: invokeInterceptor
})
```

### 监听云端响应@on-response

> 新增于HBuilderX 3.4.13

用于监听云函数、云对象、clientDB的请求响应

代码示例：

```js
uniCloud.onResponse(function(event) {
	// event格式见下方说明
	// event format see below
})
```

**响应格式**

```js
interface OnResponseEvent {
	type: 'cloudobject' | 'cloudfunctions' | 'clientdb',
	content: {} // content同云对象方法、云函数、clientDB请求的返回结果或错误对象
	content: {} // content is the same as cloud object method, cloud function, return result of clientDB request or error object
}
```

**以调用云对象方法为例**

```js
uniCloud.onResponse(function(e){
	console.log(e)
})
const todo = uniCloud.importObject('todo')
const res = await to.add('todo title', 'todo content')
```

上述代码中打印的e格式如下

```js
// 成功响应
// successful response
e = {
	type: 'cloudobject',
	content: { // content内容和上方代码块中的res一致
	content: { // content content is the same as res in the above code block
		errCode: 0
	}
}

// 失败响应
// fail response
e = {
	type: 'cloudobject',
	content: {
		errCode: 'invalid-todo-title',
		errMsg: 'xxx'
	}
}
```

可以通过判断content内是否有真值的errCode判断是失败还是成功的响应

```js
uniCloud.onResponse(function(e){
	if(e.content.errCode) {
		console.log('请求出错')
		console.log('Request error')
	}
})
```

### 移除云端响应的监听@off-response

> 新增于HBuilderX 3.4.13

用于移除onResponse添加的监听器

**注意**

- 要移除的监听内方法需和添加的方法一致才可以移除，详情见下方示例

```js
// 错误用法，无法移除监听
// Wrong usage, can't remove listener
uniCloud.onResponse(function(e) {
	console.log(e)
})
uniCloud.offResponse(function(e) {
	console.log(e)
})

// 正确用法
// correct usage
function logResponse(e) {
	console.log(e)
}
uniCloud.onResponse(logResponse)
uniCloud.offResponse(logResponse)
```


### 监听需要登录事件@on-need-login

> 新增于HBuilderX 3.5.0

用于监听客户端需要登录事件，此接口需要搭配uniIdRouter使用，参考：[uniIdRouter](uni-id-summary.md#uni-id-router)

代码示例：

```js
uniCloud.onNeedLogin(function(event) {
	// event格式见下方说明
	// event format see below
})
```

**响应格式**

```js
interface OnNeedLoginEvent {
	errCode: number | string,
	errMsg: string,
	uniIdRedirectUrl: string // 触发onNeedLogin页面前的页面地址（包含路径和参数的完整页面地址）
	uniIdRedirectUrl: string // The page address before the onNeedLogin page is triggered (the full page address including the path and parameters)
}
```

**注意**

- 开发者自定监听onNeedLogin事件后，uniIdRouter的自动跳转登录页面功能会禁用，由开发者在`onNeedLogin`内自行处理跳转

### 移除需要登录事件的监听@off-need-login

> 新增于HBuilderX 3.5.0

**注意**

- 要移除的监听内方法需和添加的方法一致才可以移除，详情见下方示例

```js
// 错误用法，无法移除监听
// Wrong usage, can't remove listener
uniCloud.onNeedLogin(function(e) {
	console.log(e)
})
uniCloud.offNeedLogin(function(e) {
	console.log(e)
})

// 正确用法
// correct usage
function log(e) {
	console.log(e)
}
uniCloud.onNeedLogin(log)
uniCloud.offNeedLogin(log)
```


### 监听token刷新事件@on-refresh-token

> 新增于HBuilderX 3.5.0

用于监听客户端token刷新事件，包括云对象返回newToken时自动更新token及clientDB自动更新token，注意uni-id-co登录返回的token也会触发此事件

代码示例：

```js
uniCloud.onRefreshToken(function(event) {
	// event格式见下方说明
	// event format see below
})
```

**响应格式**

```js
interface OnRefreshTokenEvent {
	token: string,
	tokenExpired: number
}
```

**注意**

- 开发者自定监听onNeedLogin事件后，uniIdRouter的自动跳转登录页面功能会禁用，由开发者在`onNeedLogin`内自行处理跳转

### 移除需要登录事件的监听@off-need-login

> 新增于HBuilderX 3.5.0

**注意**

- 要移除的监听内方法需和添加的方法一致才可以移除，详情见下方示例

```js
// 错误用法，无法移除监听
// Wrong usage, can't remove listener
uniCloud.onNeedLogin(function(e) {
	console.log(e)
})
uniCloud.offNeedLogin(function(e) {
	console.log(e)
})

// 正确用法
// correct usage
function log(e) {
	console.log(e)
}
uniCloud.onNeedLogin(log)
uniCloud.offNeedLogin(log)
```

## 属性

### 获取当前uniCloud实例的服务商

用法：`uniCloud.config.provider`

访问此属性会返回`tencent`、`aliyun`分别代表腾讯云和阿里云

## 错误对象@uni-cloud-error

客户端请求云端时（包括请求云函数、云对象、clientDB、云存储等）可能存在抛出错误的场景，此时会抛出uniCloud标准的错误对象（以下记为uniCloudError），uniCloudError包含以下属性

|属性		|类型	|必备	|说明												|
|--			|--		|--		|--													|
|errCode	|string	|是		|错误码												|
|errMsg		|string	|是		|错误信息											|
|requestId	|string	|否		|请求Id，用于排查错误								|
|detail		|object	|否		|仅云对象主动返回错误对应的响应体规范时会有此属性	|

另外uniCloudError对象上还有code属性和message属性，两者均不推荐使用。
