# uniCloud客户端sdk

uniCloud分为客户端和云端两部分，有些接口名称相同，参数也相近，在此列举客户端sdk内可以使用的接口/属性，避免混淆


## API

客户端API列表

|API							|描述																			|
|--								|--																				|
|uniCloud.importObject()		|获取云对象引用以调用云对象接口 [详情](cloud-obj.md)					|
|uniCloud.callFunction()		|客户端调用云函数 [详情](cf-functions.md#clientcallfunction)		|
|uniCloud.database()			|客户端访问云数据库，获取云数据库对象引用 [详情](clientdb.md)			|
|uniCloud.uploadFile()			|客户端直接上传文件到云存储 [详情](storage.md#uploadfile)			|
|uniCloud.getTempFileURL()		|客户端获取云存储文件的临时路径 [详情](storage.md#gettempfileurl)	|
|uniCloud.chooseAndUploadFile()	|客户端选择文件并上传 [详情](storage.md#chooseanduploadfile)		|
|uniCloud.getCurrentUserInfo()	|获取当前用户信息 [详情](#client-getcurrentuserinfo)							|
|uniCloud.init()				|同时使用多个服务空间时初始化额外服务空间 [详情](init.md)				|
|uniCloud.addInterceptor()		|新增拦截器 [详情](#add-interceptor)											|
|uniCloud.removeInterceptor()	|移除拦截器 [详情](#remove-interceptor)											|
|uniCloud.interceptObject()	|拦截云对象请求 [详情](#intercept-object)											|
|uniCloud.onResponse()			|监听服务端（云函数、云对象、clientDB）响应 [详情](#on-response)				|
|uniCloud.offResponse()			|移除监听服务端（云函数、云对象、clientDB）响应 [详情](#off-response)			|
|uniCloud.onNeedLogin()			|监听需要登录事件 [详情](#on-need-login)										|
|uniCloud.offNeedLogin()		|移除监听需要登录事件 [详情](#off-need-login)									|
|uniCloud.onRefreshToken()		|监听token更新事件 [详情](#on-refresh-token)									|
|uniCloud.offRefreshToken()		|移除监听token更新事件 [详情](#off-refresh-token)								|
|uniCloud.initSecureNetworkByWeixin()		|在微信小程序安全网络请求发送之前与云函数握手 [详情](#init-secure-network-by-weixin)								|
|uniCloud.getFileInfo()		|阿里云迁移服务空间到商用版时，使用公测版云存储链接获取商用版云存储链接 [详情](storage.md#get-file-info)								|

### 获取当前用户信息getCurrentUserInfo@client-getcurrentuserinfo

> HBuilderX 3.1.0+

解析客户端token获取用户信息。常用于在前端判断当前登录的用户状态和用户权限，比如根据不同的权限显示隐藏某些按钮。

**注意**

- 此接口不会发送网络请求，**此接口仅仅是客户端接口，不校验token的合法性以及是否过期**
- 需要搭配uni-id使用并要求客户端必须将token存储在storage内的`uni_id_token`内
- 如需获取role、permission需要将角色权限缓存在token内，此功能自uni-id 3.0.0 或 uni-id-common中默认开启

用法：`uniCloud.getCurrentUserInfo()`

该方法为同步方法。

**响应参数**

| 字段			| 类型	| 说明									|
| ---			| ---	| ---									|
| uid			| Number|当前用户uid							|
| role			| Array	|用户角色列表。admin用户返回["admin"]	|
| permission	| Array	|用户权限列表。注意admin角色此数组为空	|
| tokenExpired	| Number|token过期时间							|

未能获取用户信息时返回以下结果

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
```

### 新增拦截器@add-interceptor

> 新增于HBuilderX 3.1.20

接口形式：`uniCloud.addInterceptor(String apiName, Object interceptor)`

**平台兼容性**

|阿里云	|腾讯云	|
|----		|----		|
|√			|√			|


**入参说明**

| 字段					| 类型	| 必填| 说明																												|
| ---						| ---		| ---	| ---																													|
| apiName				| string| 是	| 要拦截的Api名称，可选值：callFunction、database、uploadFile	|
| interceptor| object| 是	| 要添加的拦截器																							|

**interceptor参数说明**

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
    // 此处返回错误可终止api执行
  },
  success(res) {
    // res为callFunction的返回值，此处可以对返回值进行修改
  },
  fail(err) {
    // err为callFunction抛出的错误
  },
  complete(res){
    // complete内res为上面的res或err
  }
})
```

### 移除拦截器@remove-interceptor

> 新增于HBuilderX 3.1.20

接口形式：`uniCloud.removeInterceptor(String apiName, Object interceptor)`

**入参说明**

| 字段					| 类型	| 必填| 说明																												|
| ---						| ---		| ---	| ---																													|
| apiName				| string| 是	| 要拦截的Api名称，可选值：callFunction、database、uploadFile	|
| interceptor| object| 是	| 要移除的拦截器，选填，不传递此参数时移除此Api所有拦截器			|

**interceptor参数说明**

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

### 拦截云对象请求@intercept-object

> 新增于HBuilderX 3.5.5

接口形式：`uniCloud.interceptObject(Object interceptor)`

**interceptor参数说明**

|参数名		|类型			|必填	|默认值	|说明					|平台差异说明	|
|---			|---			|---	|---		|---					|---					|
|invoke		|Function	|否		|				|拦截前触发		|							|
|success	|Function	|否		|				|成功回调拦截	|							|
|fail			|Function	|否		|				|失败回调拦截	|							|
|complete	|Function	|否		|				|完成回调拦截	|							|

**invoke**拦截器内将会收到以下形式的参数

```js
{
  objectName: "", // 云对象名称
  methodName: "", // 云对象的方法名称
  params: [] // 参数列表
}
```

**success**拦截器内将会收到以下形式的参数

```js
{
  objectName: "", // 云对象名称
  methodName: "", // 云对象的方法名称
  params: [], // 参数列表
  result: {} // 云对象响应结果
}
```

**fail**拦截器内将会收到以下形式的参数

```js
{
  objectName: "", // 云对象名称
  methodName: "", // 云对象的方法名称
  params: [], // 参数列表
  error: new Error() // 错误对象
}
```

**complete**拦截器内将会收到success或fail拦截器相同的参数，具体以云函数是否执行成功为准

### 监听云端响应@on-response

> 新增于HBuilderX 3.4.13

用于监听云函数、云对象、clientDB的请求响应

代码示例：

```js
uniCloud.onResponse(function(event) {
	// event格式见下方说明
})
```

**响应格式**

```js
interface OnResponseEvent {
	type: 'cloudobject' | 'cloudfunction' | 'clientdb',
	content: {} // content同云对象方法、云函数、clientDB请求的返回结果或错误对象
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
e = {
	type: 'cloudobject',
	content: { // content内容和上方代码块中的res一致
		errCode: 0
	}
}

// 失败响应
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
uniCloud.onResponse(function(e) {
	console.log(e)
})
uniCloud.offResponse(function(e) {
	console.log(e)
})

// 正确用法
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
})
```

**响应格式**

```js
interface OnNeedLoginEvent {
	errCode: number | string,
	errMsg: string,
	uniIdRedirectUrl: string // 触发onNeedLogin页面前的页面地址（包含路径和参数的完整页面地址）
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
uniCloud.onNeedLogin(function(e) {
	console.log(e)
})
uniCloud.offNeedLogin(function(e) {
	console.log(e)
})

// 正确用法
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

### 移除token刷新事件的监听@off-refresh-token

> 新增于HBuilderX 3.5.0

**注意**

- 要移除的监听内方法需和添加的方法一致才可以移除，详情见下方示例

```js
// 错误用法，无法移除监听
uniCloud.onRefreshToken(function(e) {
	console.log(e)
})
uniCloud.offRefreshToken(function(e) {
	console.log(e)
})

// 正确用法
function log(e) {
	console.log(e)
}
uniCloud.onRefreshToken(log)
uniCloud.offRefreshToken(log)
```

### 微信小程序安全网络初始化@init-secure-network-by-weixin

> 新增于 3.6.8

安全网络相关文档请参考：[安全网络](secure-network.md)

**参数**

|参数							|类型		|必填	|默认值	|说明																																																																																																																|
|---							|---		|---	|---		|---																																																																																																																|
|callLoginByWeixin|boolean|否		|false	|是否在安全网络初始化同时执行一次uni-id-co的微信登录，配置为false时不进行微信登录仅调用uni-id-co的secureNetworkHandshakeByWeixin方法进行握手																																												|
|openid						|string	|否		|-			|新增于HBuilderX 3.7.7，传入此参数后此方法内部不再调用uni-id-co的任何方法，此时需要由开发者自行实现一些凭据的存储逻辑，详情参考：[不使用uni-id-pages时如何使用微信小程序安全网络](secure-network.md#mp-weixin-without-uni-id-pages)	|

**示例**

```js
// App.vue
<script>
  export default {
    onLaunch: async function() {
      // #ifdef MP-WEIXIN
      const res = await uniCloud.initSecureNetworkByWeixin({
        callLoginByWeixin: true
      })
      console.log('initSecureNetworkByWeixin', res);
      // #endif
      console.log('App Launch')
    }
  }
</script>

<style>
</style>
```

**注意**

- 发送安全网络请求前uniCloud客户端sdk会判断是否完成初始化，如未完成会等待完成后再发送安全网络请求。
- 需要确保安全网络请求在此方法调用后执行

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
