**本功能的主要作用是前端删除云存储的文件，并不推荐这种用法。**
**The main function of this function is to delete the files stored in the cloud at the front end, and this usage is not recommended. **

**本功能仅腾讯云支持**
**This function is only supported by Tencent Cloud**

腾讯云提供了一套自己的用户权限，这套系统和uni-id不同，不支持编程，不能用于业务系统的真实账户。仅用于云存储的前端管理。
Tencent Cloud provides a set of its own user permissions. This system is different from uni-id, does not support programming, and cannot be used for real accounts in business systems. Front-end management for cloud storage only.

在腾讯云的概念里，默认情况下所有用户都是通过匿名登录访问云存储的，自定义登录提供了在云端区分用户身份的能力。开启腾讯云自定义登录后，每个用户会在腾讯云的后台有一个身份标记，从前端上传文件到云存储时，腾讯云会自动给文件加入这个标记。如果同时在云存储权限配置里配置了仅创建者可写，则前端可以直接删除这个云存储，删除时腾讯云会自动校验文件上传者的userId和当前用户的userId一致时才允许删除。
In the Tencent Cloud concept, all users access cloud storage through anonymous login by default, and custom login provides the ability to distinguish user identities in the cloud. After enabling Tencent Cloud custom login, each user will have an identity tag in the background of Tencent Cloud. When uploading files from the front end to cloud storage, Tencent Cloud will automatically add this tag to the file. If only the creator is writable in the cloud storage permission configuration, the front-end can delete the cloud storage directly. When deleting, Tencent Cloud will automatically verify that the userId of the file uploader is the same as the current user's userId.

在微信小程序云的开发中，自定义登录还可以用于前端操作数据库。
In the development of WeChat applet cloud, custom login can also be used for front-end operation database.

但因为腾讯云提供的这套方案不够灵活和完善，uniCloud单独做了[uni-id](uni-id-summary.md)用于完善的账户体系，单独做了[clientDB](clientdb.md)，用于完善快捷的前端操作数据库。
However, because the solution provided by Tencent Cloud is not flexible and perfect, uniCloud has separately made [uni-id](uni-id-summary.md) for a complete account system, and made [clientDB](clientdb.md) separately. , which is used to improve the fast front-end operation database.

所以目前腾讯云的自定义登录功能，在uniCloud中的价值只剩下前端删除云存储。DCloud不建议开发者这么用，前端直传云存储不需要腾讯云自定义登录，而删除云存储，还是应该在云端进行。
Therefore, the value of Tencent Cloud's custom login function in uniCloud is only left to delete cloud storage at the front end. DCloud does not recommend developers to use it this way. Front-end direct cloud storage does not require Tencent Cloud custom login, and deletion of cloud storage should still be done in the cloud.

## 名词解释
## Glossary

- Ticket（票据）：由云函数调用`auth.createTicket`返回的票据，用于客户端使用票据进行登录操作
- Ticket: The ticket returned by the cloud function call `auth.createTicket`, which is used by the client to log in with the ticket
- 匿名登录：用户未进行登录操作的状态
- Anonymous login: the state where the user has not logged in
- 短期访问令牌：用户身份的凭证（access token），调用`signInWithTicket`或者`linkAndRetrieveDataWithTicket`之后会自动进行存储
- Short-term access token: User identity credentials (access token), which are automatically stored after calling `signInWithTicket` or `linkAndRetrieveDataWithTicket`


## 云函数接口
## Cloud function interface

### uniCloud.customAuth@cloud-custom-auth

**重要：自HBuilderX 2.9.12起，此接口由uniCloud.auth调整为uniCloud.customAuth，短时间内仍会兼容uniCloud.auth**
**Important: Since HBuilderX 2.9.12, this interface has been adjusted from uniCloud.auth to uniCloud.customAuth, and will still be compatible with uniCloud.auth in a short time**

获取登录对象
Get the login object

**示例代码**
**Sample code**

```js
const auth = uniCloud.customAuth()
```

### auth.createTicket@cloud-create-ticket

云端根据用户id创建票据用于客户端登录到对应的云厂商
The cloud creates a ticket based on the user id for the client to log in to the corresponding cloud vendor

**接口形式**
**Interface form**

```js
auth.createTicket(String uid, Object options)
```

**参数说明**
**Parameter Description**

|字段			|类型	|是否必填	|说明								|
|Field |Type |Required |Description |
|:-:			|:-:	|:-:		|:-:								|
|uid			|string	|是			|应用内的用户唯一id					|
|uid |string |yes |User unique id within the app |
|options.refresh|number	|否			|access_token的刷新时间，默认一小时	|
|options.refresh|number |No |Refresh time of access_token, default one hour |
|options.expire	|number	|否			|access_token的过期时间				|
|options.expire |number |no |expire time of access_token |

**示例代码**
**Sample code**

```js
let uid = '123456';

const ticket = uniCloud.customAuth().createTicket(uid, {
  refresh: 10 * 60 * 1000 // 每十分钟刷新一次登录态， 默认为一小时
});
```

### auth.getUserInfo@cloud-get-user-info

任何方式登录成功后，可以调用 `getUserInfo` 获得用户的身份信息。
After successful login in any way, you can call `getUserInfo` to get the user's identity information.

**响应参数**
**Response parameters**

|字段			|类型	|是否必备	|说明							|
|Field |Type |Required |Description |
|:-:			|:-:	|:-:		|:-:							|
|uid			|string	|是			|用户在云厂商的唯一ID			|
|uid |string |Yes |User's unique ID in the cloud vendor |
|customUserId	|string	|否			|用户使用自定义登录传入的用户Id	|
|customUserId |string |No |UserId passed in by user using custom login |

**示例代码**
**Sample code**

```js
const {
	uid,
	customUserId
} = await auth.getUserInfo()
```

## 客户端接口
## client interface

### uniCloud.customAuth@custom-auth

**重要：自HBuilderX 2.9.12起，此接口由uniCloud.auth调整为uniCloud.customAuth，短时间内仍会兼容uniCloud.auth**
**Important: Since HBuilderX 2.9.12, this interface has been adjusted from uniCloud.auth to uniCloud.customAuth, and will still be compatible with uniCloud.auth in a short time**

获取登录对象
Get the login object

**示例代码**
**Sample code**

```js
const auth = uniCloud.customAuth()
```

<!-- ## auth.signInAnonymously()

进行匿名登录，详细描述参考[匿名登录](#匿名登录)
For anonymous login, please refer to [Anonymous Login](#%E5%8C%BF%E5%90%8D%E7%99%BB%E5%BD%95)

**示例代码**
**Sample code**

```js
const auth = uniCloud.customAuth()
auth.signInAnonymously()
``` -->

### auth.signInWithTicket@signinwithticket

使用云函数接口createTicket返回的票据进行登录，详细描述参考[登录流程](#cloudtoken)

**示例代码**

```js
auth.signInWithTicket('YourTicket').then(() => {
    // 获取用户信息
    // get user information
    return auth.getUserInfo()
  })
  .then(userInfo => {
    //...
  })
```

### auth.getLoginState@get-login-state

开发者可以通过 `getLoginState()` 来获取当前的登录状态，调用 `getLoginState()` 后，SDK 会识别本地是否有登录状态，如果有，则会尝试刷新登录状态，若刷新登录状态成功，则会返回新的登录状态，否则返回 `undefined`。

**示例代码**

```js
auth.getLoginState().then(loginState => {
  if (loginState) {
    // 登录态有效
    // login status is valid
  } else {
    // 没有登录态，或者登录态已经失效
    // There is no login status, or the login status has expired
  }
})
```

### auth.getUserInfo@get-user-info

任何方式登录成功后，可以调用 `getUserInfo` 获得用户的身份信息。

**响应参数**

|字段			|类型	|是否必备	|说明							|
|:-:			|:-:	|:-:		|:-:							|
|uid			|string	|是			|用户在云厂商的唯一ID			|
|customUserId	|string	|否			|用户使用自定义登录传入的用户Id	|

**示例代码**

```js
auth.signInWithTicket('YourTicket').then(() => {
    // 获取用户信息
    // get user information
    return auth.getUserInfo()
  })
  .then(userInfo => {
    //...
  })
```

## 登录流程@cloudtoken

`uniCloud`允许开发者使用特定的登录凭据`Ticket`对用户进行身份认证。开发者可以使用`服务端 SDK`来创建`Ticket`，并且将`Ticket`传入到应用内，然后调用`signInWithTicket()`获得登录态。

### 第一步：获取私钥文件

登录uniCloud控制台[uniCloud控制台](http://unicloud.dcloud.net.cn/)，在`自定义登录`中，点击“生成并下载”

**注意：重复生成私钥会使之前生成的私钥失效，并导致用户登录状态失效**

![uniCloud下载私钥](https://web-assets.dcloud.net.cn/unidoc/zh/custom-login-secret.jpg)

### 第二步：使用云函数创建登录凭据

获取私钥文件（`credentials.json`）之后，放在需要生成`Ticket`的云函数内`index.js`同级即可

`服务端 SDK`内置了生成`Ticket`的接口，开发者需要提供一个自定义的`customUserId`作为用户的**唯一身份标识**。`Ticket`有效期为**5分钟**，过期则失效。

每个用户的`customUserId`不能相同，每次用户重新登录时，原有的登录态将会失效。

**Ticket一般在验证了用户名密码成功之后下发**

```js
let customUserId = '123456';

const ticket = uniCloud.customAuth().createTicket(customUserId, {
  refresh: 10 * 60 * 1000 // 每十分钟刷新一次登录态， 默认为一小时
  refresh: 10 * 60 * 1000 // Refresh the login status every ten minutes, the default is one hour
});
// 然后把 ticket 发送给客户端
// then send the ticket to the client
```

### 第三步：客户端上使用Ticket登录

创建`Ticket`之后，开发者应将`Ticket`发送至客户端，然后使用`客户端SDK`提供的 `signInWithTicket()` 登录`uniCloud`：

```js
auth.signInWithTicket(ticket).then(() => {
  // 登录成功
  // login successful
})
```


## 匿名登录
uniCloud允许开发者使用匿名登录的方式进行静默授权，可以避免强制登录。在匿名状态下可正常的调用uniCloud的资源，开发者同时可以配合安全规则针对匿名用户制定对应的访问限制。

#### 匿名用户重新登录

匿名用户如果要重新使用开发者提供的身份登录，可以调用`auth.signInWithTicket`来进行。[参考](#signinwithticket)

#### 匿名用户转化为正式用户
目前uniCloud支持将匿名用户转化为正式用户，此转正用户将会继承匿名用户在云端创建的资源，流程如下：
1. 首先需要按照[登录流程](#cloudtoken)搭建获取自定义登录凭证`ticket`的服务；
2. 客户端请求接口获取自定义登录凭证`ticket`。**请注意**，此`ticket`必须未注册过uniCloud，换句话说，匿名用户只能转化为新的uniCloud用户；
3. 客户端调用`auth.linkAndRetrieveDataWithTicket`API，如下：
```js
// 调用此API之前需先请求接口获取到ticket
// Before calling this API, you need to request the interface to get the ticket
auth.linkAndRetrieveDataWithTicket(ticket).then(res => {
  // 转正成功
  // transfer successfully
}).catch(err => {
  // 转正失败会抛出错误
  // If the forwarding fails, an error will be thrown
});
```

## 登录授权相关事件及钩子函数

### Event: 'loginStateExpire'

当登录态失效时，会触发这个事件，开发者可以在这个事件回调内，尝试重新登录 uniCloud。

```js
auth.onLoginStateExpire(() => {
  // 尝试重新登录
  // try to log in again
});
```

### Event: 'refreshAccessToken'

JS SDK 会在登录态生效期间，自动刷新和维护短期访问令牌（access token），每次成功刷新时会触发此事件。

对于两种登录态并存（uniCloud、自身业务登录态）的应用，这个事件可以用于同步登录态之间的状态。

```js
auth.onAccessTokenRefreshed(() => {
  // 此时 uniCloud 短期访问令牌已经刷新，可以尝试刷新自身业务的登录态
  // At this time, the uniCloud short-term access token has been refreshed, and you can try to refresh the login status of your own business
})
```

### Auth.shouldRefreshAccessToken(callback)

`shouldRefreshAccessToken` 接收一个 `callback` 函数，并且会在刷新短期访问令牌前调用此 `callback` 函数，根据返回值决定是否要刷新短期访问令牌。

对于两种登录态并存（uniCloud、自身业务登录态）的应用，可以在 `callback` 内判断自身业务登录态是否失效，从而决定是否续期 uniCloud 的短期访问令牌。

```js
auth.shouldRefreshAccessToken(() => {
  if (/* 自身业务登录态还有效 */) {
  if (/* own business login status is still valid */) {
    return true;
  } else {
    return false;
  }
});
```

