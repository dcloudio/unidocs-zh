## 简介@intro
## Introduction @intro

云函数是运行在云端的 `JavaScript` 代码，是基于 `Node.js` 的扩展。
A cloud function is a `JavaScript` code that runs on the cloud and is an extension based on `Node.js`.

在常规的 `Node API` 基础上，uniCloud的云函数环境内置了`uniCloud`对象，这个对象内置了网络、数据库等各种API。开发者未学习过 `Node.js` 也没有关系，只需要看uniCloud的文档，掌握这个`uniCloud`对象的API即可。
On the basis of the conventional `Node API`, uniCloud's cloud function environment has a built-in `uniCloud` object, which has built-in various APIs such as network and database. It doesn't matter if the developer has not learned `Node.js`, just read the uniCloud documentation and master the API of the `uniCloud` object.

每个云函数是一个js包，在云函数被调用时，由 serverless 调度系统分配硬件资源启动一个 node 环境来运行这个云函数。
Each cloud function is a js package. When the cloud function is called, the serverless scheduling system allocates hardware resources to start a node environment to run the cloud function.

在HBuilderX中可以新建云函数（HBuilderX 3.4 同时可以新建云对象）。
![](https://web-assets.dcloud.net.cn/unidoc/zh/createFun-a.jpg)

每个云函数是一个目录，其中普通云函数有`index.js`入口文件，云对象的入口文件则是`index.obj.js`。
Each cloud function is a directory, in which common cloud functions have an `index.js` entry file, and cloud object entry files are `index.obj.js`.

一个最简单的云函数只需要这个入口js文件，在里面编写代码即可。当然也可以在这个js中require该云函数目录下的其他js、json文件。
The simplest cloud function only needs this entry js file, and you can write code in it. Of course, you can also require other js and json files in the cloud function directory in this js.

云函数的配置文件和 npm规范 相同，在云函数目录下可新建一个 package.json 来存放配置。uniCloud云函数扩展了 package.json，增加了一些特有的配置项。[详见](/uniCloud/cf-functions?id=packagejson)
The configuration file of the cloud function is the same as the npm specification, and a package.json can be created in the cloud function directory to store the configuration. uniCloud cloud function extends package.json and adds some unique configuration items. [See details](/uniCloud/cf-functions?id=packagejson)

云函数启动后实例会保留一段时间（如15分钟），超过保留期后若该云函数一直没有被再调用，那这个实例会被释放。所以云函数有冷启动的概念。不过由于js实例的启动要比php和java更快，所以js更适合serverless方式。
After the cloud function is started, the instance will be retained for a period of time (such as 15 minutes). If the cloud function has not been called again after the retention period expires, the instance will be released. So cloud functions have the concept of cold start. However, since the startup of js instances is faster than php and java, js is more suitable for serverless methods.

**注意事项**
**Precautions**
- 云函数内使用commonjs规范，不可使用import、export，参考：[commonjs模块](http://nodejs.cn/api/modules.html#modules_modules_commonjs_modules)
- The commonjs specification is used in the cloud function, import and export cannot be used, refer to: [commonjs module](http://nodejs.cn/api/modules.html#modules_modules_commonjs_modules)
- 不同项目使用同一个服务空间时，不可使用同名云函数。同名云函数会相互覆盖。
- When different projects use the same service space, cloud functions with the same name cannot be used. Cloud functions with the same name override each other.
- 在HBuilderX创建云函数时，如果新云函数与服务器上已存在同名云函数，会用新函数覆盖。所以应先选择从服务空间下载云函数。
- When creating a cloud function in HBuilderX, if the new cloud function has the same name as the cloud function on the server, it will be overwritten with the new function. Therefore, you should choose to download cloud functions from the service space first.
- 单个云函数大小限制为10M（包含`node_modules`），过大的云函数影响运行性能，也会增加计费的gbs。同时腾讯云支持在云端安装`node_modules`，此时不占用云函数体积。
- The size of a single cloud function is limited to 10M (including `node_modules`). Too large a cloud function will affect the running performance and increase the billing gbs. At the same time, Tencent Cloud supports installing `node_modules` on the cloud, which does not occupy the volume of cloud functions.
- uniCloud的阿里云版，暂不可使用相对路径读取文件（比如`fs.readFileSync('./info.txt')`），可以使用绝对路径`fs.readFileSync(path.resolve(__dirname,'./info.txt'))`
- For the Aliyun version of uniCloud, you cannot use relative paths to read files (such as `fs.readFileSync('./info.txt')`), you can use absolute paths `fs.readFileSync(path.resolve(__dirname,'. /info.txt'))`

## 云函数的分类
## Classification of cloud functions

云函数有若干子概念，包括 普通云函数、云对象、公共模块、clientDB的action云函数、uniCloud扩展库。
Cloud functions have several sub-concepts, including common cloud functions, cloud objects, public modules, action cloud functions of clientDB, and uniCloud extension library.

- 云函数：通过传统json接口方式和客户端通信，客户端使用`uniCloud.callfunction("")`调用云函数
- Cloud function: communicate with the client through the traditional json interface, and the client uses `uniCloud.callfunction("")` to call the cloud function
- 云对象：是通过前端导入对象来操作的，客户端使用`uniCloud.importObject("")`导入云对象。详见[云对象](/uniCloud/cloud-obj)
- Cloud object: It is operated by importing objects through the front end, and the client uses `uniCloud.importObject("")` to import cloud objects. For details, see [Cloud Object](/uniCloud/cloud-obj)
- 公共模块：用于不同的云函数/云对象，抽取和共享相同代码，详见[公共模块文档](/uniCloud/cf-functions?id=公共模块)
- Common module: used for different cloud functions/cloud objects, extracting and sharing the same code, see [public module document](/uniCloud/cf-functions?id=%E5%85%AC%E5%85%B1% E6%A8%A1%E5%9D%97)
- action云函数（不推荐使用）：为了弥补clientDB客户端直接操作数据库的局限而设计的，详见[clientDB action文档](/uniCloud/clientdb?id=action)。从HBuilderX 3.6.11开始，推荐使用[数据库触发器](jql-schema-ext.md)替代action云函数。
- action cloud function (not recommended): designed to make up for the limitations of the clientDB client directly operating the database, see [clientDB action documentation](/uniCloud/clientdb?id=action) for details. Starting from HBuilderX 3.6.11, it is recommended to use [database trigger](jql-schema-ext.md) instead of action cloud function.
- uniCloud扩展库：为了裁剪和控制云函数体积而设计的，一些不太常用的功能比如Redis，独立为可选扩展库，避免增大每个云函数的体积，详见[uniCloud扩展库](/uniCloud/cf-functions?id=扩展库)
- uniCloud extension library: designed to cut and control the volume of cloud functions, some less commonly used functions such as Redis, are independent optional extension libraries to avoid increasing the volume of each cloud function, see [uniCloud extension library]( /uniCloud/cf-functions?id=%E6%89%A9%E5%B1%95%E5%BA%93)

HBuilderX中uniCloud项目的云函数均在项目的`uniCloud/cloudfunctions`目录下，目录结构如下：
The cloud functions of the uniCloud project in HBuilderX are all in the `uniCloud/cloudfunctions` directory of the project, and the directory structure is as follows:

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
|——— cloudfunctions               云函数目录
|   │───common                    云函数公用模块目录 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/cf-common">详情</a>
|   |   └──hello-common           云函数公用模块
|   |      │──index.js            公用模块代码
|   |      └──package.json        公用模块package.json
|   │───uni-clientDB-actions      （推荐用数据库触发器替代action云函数）
|   │      └──new_action.js       clientDB action代码 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action">详情</a>
|   │───function-name             云函数目录
|   │     │──index.js             云函数代码
|   │     └──package.json         包含云函数的配置信息，如url化、定时设置、可用内存等内容 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=packagejson">详情</a>
|   └───object-name               云对象目录
|         │──index.obj.js         云对象代码
|         └──package.json         包含云对象的配置信息，可用内存等内容 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=packagejson">详情</a>
	</code>
</pre>

## 客户端和云函数的通信@clientcallfunction
## Communication between client and cloud function @clientcallfunction

uni-app客户端和传统服务器通信时，使用`uni.request`的ajax请求方式。uniCloud下不再使用它，有更好的云端一体的通信方式。
When the uni-app client communicates with the traditional server, the ajax request method of `uni.request` is used. It is no longer used under uniCloud, and there is a better cloud-integrated communication method.

uniCloud体系里，客户端和服务端的云函数通信，有4种方式：
In the uniCloud system, there are four ways for the cloud function communication between the client and the server:

|			|传统的restful方式|callfunction方式|云对象方式|clientDB方式|
| |Traditional restful method|callfunction method|cloud object method|clientDB method|
|:-:|:-:|:-:|:-:|:-:|
|简述		|通过配置[云函数URL化](/uniCloud/http)，把云函数转为传统的http链接	|云函数默认并不自带http链接|把callfunction的函数式调用，升级为模块化的对象调用|客户端直接操作云数据库|
|Brief |By configuring [cloud function URL](/uniCloud/http), the cloud function is converted into a traditional http link |The cloud function does not come with an http link by default|Upgrade the functional call of the call function to a modular Object call|client directly operates the cloud database|
|前端调用方式|传统ajax|uni-app客户端通过`uniCloud.callFunction(functionname)`来调用云函数|uni-app客户端通过`uniCloud.importObject(objectname)`导入一个云对象，直接使用这个对象的方法	|uni-app客户端通过`<uniCloud-db>`组件或`uniCloud.database()` API来访问uniCloud数据库。也支持搭配action云函数追加服务器逻辑	|
|Front-end calling method|Traditional ajax| The uni-app client calls the cloud function through `uniCloud.callFunction(functionname)`| The uni-app client imports a cloud object through `uniCloud.importObject(objectname)`, and uses this object directly Method | The uni-app client accesses the uniCloud database through `<uniCloud-db>` component or `uniCloud.database()` API. It also supports adding server logic with action cloud functions |
|适用场景	|http链接需要自己注册域名。如果前端是uni-app，则不推荐使用URL化。如果是非uni-app的系统需要访问云函数，只能使用URL化	|相比云函数URL，callfunction更加安全、更serverless，不暴露域名和ip，不怕攻击，也无需注册域名|uni-app 3.4起支持。相比callfunction方式。代码更加精简、逻辑更加清晰、开发更加高效	|如果uni-app前端发起的服务器请求目的主要是查询或操作数据库，则推荐使用clientDB方式|
|Applicable Scenarios | You need to register your own domain name for http links. URLification is deprecated if the front end is a uni-app. If a non-uni-app system needs to access cloud functions, it can only be URLized |Compared with cloud function URLs, callfunction is more secure and serverless, does not expose domain names and IPs, is not afraid of attacks, and does not need to register domain names| uni-app 3.4 onwards support. Compared to the call function way. The code is more streamlined, the logic is clearer, and the development is more efficient |If the server request initiated by the uni-app front end is mainly for querying or operating the database, it is recommended to use the clientDB method|

云函数是uniCloud的基础，本质上 clientDB 和 云对象 都是建立在云函数上针对特定场景的优化。
Cloud functions are the foundation of uniCloud. In essence, clientDB and cloud objects are optimized for specific scenarios based on cloud functions.
- clientDB针对的场景是数据库操作，它优化了可以不写或少写服务器代码
- The scenario targeted by clientDB is database operation, which optimizes the need to write less or no server code
- 云对象针对的场景是非数据库操作或不宜前端暴露的数据库操作时，和uni-app客户端的通信方式。它优化了代码结构，更精简、简单
- The scene targeted by the cloud object is the communication method with the uni-app client for non-database operations or database operations that are not suitable for front-end exposure. It optimizes the code structure, making it more streamlined and simple


### clientDB方式
### clientDB mode

**直观体验代码示例**
**Visual experience code example**

clientDB分API方式和组件方式，此处使用API方式来演示
clientDB is divided into API mode and component mode, and the API mode is used here to demonstrate
```js
// 客户端js直接操作云数据库，查询list表的数据。无需服务器代码
// The client js directly operates the cloud database and queries the data in the list table. No server code required
const db = uniCloud.database() // 获取云数据库的引用
db.collection('list').get()
  .then((res)=>{
    // res 为数据库查询结果
    // res is the database query result
  }).catch((err)=>{
    console.log(err); 
  })
```

由于篇幅较长，学习clientDB需另见文档[clientDB](clientdb.md)
Due to the length of the article, please refer to the document [clientDB](clientdb.md) to learn clientDB

- clientDB适用的情况：
- When clientDB is applicable:

如果客户端使用uni-app开发，且向uniCloud服务空间的请求主要是为了操作云数据库（无论增删改查），那么推荐使用clientDB方式，由uni-app客户端直接操作云数据库。
If the client uses uni-app development, and the request to the uniCloud service space is mainly for operating the cloud database (regardless of adding, deleting, modifying and checking), then it is recommended to use the clientDB method, and the uni-app client directly operates the cloud database.

如果操作数据库的同时，还需要同时执行一些云端逻辑：HBuilderX 3.6.11以前使用action云函数；从HBuilderX 3.6.11开始，推荐使用[数据库触发器](jql-schema-ext.md)替代action云函数。
If you need to execute some cloud logic while operating the database: HBuilderX 3.6.11 used the action cloud function; starting from HBuilderX 3.6.11, it is recommended to use [database trigger](jql-schema-ext.md) instead of the action cloud function.

- clientDB不适用的情况：
- Situations where clientDB is not applicable:

1. 请求不操作云数据库，比如向外部web系统发请求、操作redis、删除云文件等；
1. Request not to operate the cloud database, such as sending requests to external web systems, operating redis, deleting cloud files, etc.;
2. 操作的云数据库请求不希望暴露在前端；
2. The operating cloud database request does not want to be exposed on the front end;
3. 数据库表和字段数量多而接口数量少。给每个数据配置权限的工作量超过了控制少数接口权限的工作量；
3. The number of database tables and fields is large and the number of interfaces is small. The workload of configuring permissions for each data exceeds the workload of controlling a few interface permissions;
4. 权限体系非常复杂，除了用户和管理员外还有较多其他权限条件或动态权限。此时在schema.json/schema.ext.js中编写代码的复杂度超过了写接口。
4. The permission system is very complicated, and there are many other permission conditions or dynamic permissions besides users and administrators. At this time, the complexity of writing code in schema.json/schema.ext.js exceeds that of writing interfaces.

### 云对象方式
### Cloud Object Mode

云对象和clientDB最大的区别，是云对象把数据库操作（以及其他逻辑）封装在云对象的方法里面。
The biggest difference between cloud objects and clientDB is that cloud objects encapsulate database operations (and other logic) in cloud object methods.

它无法像clientDB那样无需开发服务器代码，它仍需在客户端和云端分别写代码。但它的应用场景不受限制。上文中不适用clientDB的情况，都可以使用云对象解决。
It does not need to develop server code like clientDB, it still needs to write code separately on the client and the cloud. But its application scenarios are not limited. The above situations where clientDB is not applicable can be solved by using cloud objects.

**直观体验代码示例**
**Visual experience code example**

云端云对象代码，云对象名称：testco，有一个sum方法
Cloud cloud object code, cloud object name: testco, has a sum method

```js
module.exports = {
	sum(a, b) {
		// 此处省略a和b的有效性校验
		// The validity check of a and b is omitted here
		return a + b
	}
}
```

然后在客户端的js中，import这个testco对象，调用它的sum方法
Then in the js of the client, import the testco object and call its sum method

```js
const testco = uniCloud.importObject('testco') //第一步导入云对象
async function sum () { //注意方法或生命周期需使用async异步方式
	try {
		const res = await testco.sum(1,2) //导入云对象后就可以直接调用该对象的方法了，注意使用异步await
		console.log(res) // 结果是3
	} catch (e) {
		console.log(e)
	}
}
```

由于篇幅较长，学习云对象需另见文档[云对象](cloud-obj.md)
Due to the length of the article, please refer to the document [Cloud Object](cloud-obj.md) for learning cloud objects

clientDB和云对象可以混合使用：
clientDB and cloud objects can be mixed:
1. 比如官方提供了[uni-id-pages](uni-id-pages.md)，是基于云对象的登录注册系统，开发者可以导出这个插件处理账户体系，然后剩余的业务如果不算复杂，就可以使用clientDB搞定。
1. For example, [uni-id-pages](uni-id-pages.md) is officially provided, which is a login and registration system based on cloud objects. Developers can export this plug-in to process the account system, and then the remaining business is not complicated. , you can use clientDB to get it done.
2. 一个业务的用户端和admin端也可以是不同的技术栈。比如业务端有复杂的动态权限，而管理端只有一个admin管理员使用，那么admin端使用[schema2code](schema2code.md)会非常高效，而这些技术都基于clientDB。
2. The user end and admin end of a business can also be different technology stacks. For example, the business side has complex dynamic permissions, and the management side is only used by an admin administrator, then it will be very efficient to use [schema2code](schema2code.md) on the admin side, and these technologies are all based on clientDB.

### 普通云函数callFunction方式
### Common cloud function callFunction method

- 普通云函数适用的情况：
- Situations where ordinary cloud functions are applicable:

在HBuilderX 3.5.2之前，需要URL化和定时运行时，只能使用普通云函数；在HBuilderX 3.5.2+，云对象也支持了URL化和定时运行。
Before HBuilderX 3.5.2, only ordinary cloud functions can be used when URLization and scheduled operation are required; in HBuilderX 3.5.2+, cloud objects also support URLization and scheduled operation.

官方不推荐开发者使用云函数，有相关需求推荐使用云对象替代云函数。
Officially, developers are not recommended to use cloud functions. If there are related needs, it is recommended to use cloud objects instead of cloud functions.

目前官方还未提供基于云对象的router模式的框架，有相关需求可以使用三方框架。
At present, the official framework of the router mode based on cloud objects has not been provided, and a third-party framework can be used if there are related needs.

**直观体验代码示例**
**Visual experience code example**

```js
// 客户端发起调用云函数hellocf，并传入data数据
// The client initiates a call to the cloud function hellocf and passes in data
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
// The code of the cloud function hellocf receives the data passed by the client, adds a and b and returns it to the client
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//event is the parameter uploaded by the client
	console.log('event : ', event)
	//此处省略event.a和event.b的有效性校验
	//The validity check of event.a and event.b is omitted here
	//返回数据给客户端
	//return data to client
	return {sum : event.a + event.b}
};

```

由于篇幅较长，需另见文档[云函数callfunction方式](/uniCloud/cf-callfunction)
Due to the long space, please refer to the document [Cloud function call function method](/uniCloud/cf-call function)

### 云函数URL化方式
### Cloud function URL method

可以让云函数/云对象生成一个HTTP URL。这样非uni-app应用，可以通过ajax请求和云函数/云对象通信。
It is possible to have a cloud function/cloud object generate an HTTP URL. In this way, non-uni-app applications can communicate with cloud functions/cloud objects through ajax requests.

在 uniCloud Web控制台进行URL化配置。
Perform URLization configuration on the uniCloud web console.

由于篇幅较长，需另见文档[云函数URL化](http.md)。
Due to the length of the document, please refer to the document [URLization of cloud functions](http.md).


### uniCloud响应体规范@resformat
### uniCloud response body specification @resformat

`uniCloud响应体规范`（uniCloud response format），是DCloud制定的、服务器给客户端返回json数据的一种建议格式。
`uniCloud response body specification` (uniCloud response format) is a suggested format formulated by DCloud for the server to return json data to the client.

云对象、clientDB、uni-id公共模块均支持此规范。
Cloud objects, clientDB, and uni-id public modules all support this specification.

**由来**
**origin**

uniCloud服务器给客户端返回的数据格式一般是json，但json的格式具体是什么没有约定。比如返回错误码，是叫`code`还是叫`errCode`？错误内容是`message`还是`errMsg`？内容的国际化如何处理？
The data format returned by the uniCloud server to the client is generally json, but there is no agreement on the specific format of json. For example, when returning an error code, is it called `code` or `errCode`? Is the error content `message` or `errMsg`? How is internationalization of content handled?

如果没有一套统一的格式，在客户端将无法编写有效的网络拦截器，无法统一处理错误。
Without a unified format, effective network interceptors cannot be written on the client side, and errors cannot be handled uniformly.

另外，如果不同的插件，云端返回的数据格式千差万别，那使用者整合这些插件也会非常麻烦。国际化更无法落地。
In addition, if the data format returned by the cloud varies greatly with different plug-ins, it will be very troublesome for users to integrate these plug-ins. Internationalization is even more impossible to land.

为此DCloud推出了`uniCloud响应体规范`。
For this reason, DCloud has launched the `uniCloud response body specification`.

为了与uni-app前端的API错误回调风格统一，uniCloud响应体规范定义的云端返回信息（尤其是报错时）应包含`errCode`和`errMsg`。
In order to be unified with the API error callback style of the uni-app front end, the cloud return information (especially when an error is reported) defined by the uniCloud response body specification should include `errCode` and `errMsg`.

#### HBuilderX 3.6.10及之后版本的错误规范
#### Error specifications for HBuilderX 3.6.10 and later versions

错误规范继承自[uni错误规范](/tutorial/err-spec.md)
The error specification is inherited from [uni error specification](/tutorial/err-spec.md)

#### HBuilderX 3.6.10之前版本的错误规范
#### Error specifications for versions prior to HBuilderX 3.6.10

```json
// 失败返回值
// return value on failure
{
  "errCode": 'uni-id-account-banned',
  "errMsg": '账号被禁用'
}
```

- errCode

errCode在成功时应返回数字`0`,失败时应返回一个以插件id开头的“字符串”，每个单词以连字符（`-`）分割。做出这样的规定是为了防止不同插件之间出现重复错误码
errCode should return the number `0` on success, and a "string" starting with the plugin id on failure, each word separated by a hyphen (`-`). This provision is made to prevent duplication of error codes between different plugins

以`'uni-id-account-banned'`错误码为例，`uni-id`为插件id，`account-banned`为错误缩写。
Take `'uni-id-account-banned'` error code as an example, `uni-id` is the plugin id, and `account-banned` is the error abbreviation.

如果业务开发的代码并不发布插件市场，那么为了避免下载了一个市场的插件产生冲突，推荐使用不包含“-”的字符串来做errCode（插件市场的所有插件ID必须包含“-”）。
If the business development code does not publish the plug-in market, in order to avoid conflicts when downloading a plug-in in a market, it is recommended to use a string that does not contain "-" as the errCode (all plug-in IDs in the plug-in market must contain "-").

后续uniCloud会提供自动根据errCode对errMsg进行国际化处理的功能，开发者仅需保证云函数返回值满足`uniCloud响应体规范`即可。
In the future, uniCloud will provide the function of automatically internationalizing errMsg according to errCode. Developers only need to ensure that the return value of the cloud function meets the `uniCloud response body specification`.

- errMsg

errMsg用于存放具体错误信息，包括展示给开发者、终端用户的错误信息
errMsg is used to store specific error messages, including error messages displayed to developers and end users

#### 请求成功的响应
#### request successful response

除此之外响应体规范还包含`newToken`字段，用于token的自动续期（云对象接收含有newToken的响应后会自动更新storage内存储的`uni_id_token`及`uni_id_token_expired`，此行为新增于`HBuilderX 3.4.13`）。开发者一般无需关心此数据，uni-app客户端和云端uni-id之间会自动管理token及续期。
In addition, the response body specification also includes the `newToken` field, which is used for the automatic renewal of the token (the cloud object will automatically update the `uni_id_token` and `uni_id_token_expired` stored in the storage after receiving the response containing the newToken, this behavior is added in `HBuilderX 3.4.13`). Developers generally do not need to care about this data, the token and renewal will be automatically managed between the uni-app client and the cloud uni-id.

`uniCloud响应体`示例如下：
An example of `uniCloud response body` is as follows:

```json
// 成功返回值
// successful return value
{
  "errCode": 0,
  "errMsg": '登录成功',
  "uid": 'xxx', // 其他信息
  "newToken": { // 用于下发新token给客户端
	  "token": 'xxx',
	  "tokenExpired": 'xxx'
  }
}
```

HBuilderX内使用代码块`returnu`可以快速输入以下代码（`HBuilderX 3.4.0`及以上版本）: 
Use the code block `returnu` in HBuilderX to quickly enter the following code (`HBuilderX 3.4.0` and above):

```js
return {
	errSubject: '', // HBuilderX 3.6.10新增
	errCode: 0,
	errMsg: ''
}
```

## uniCloud API列表
## uniCloud API list

云函数支持 js 和 nodejs 的标准API，如`console.log()`、`setTimeout()`，另见[nodejs官网](https://nodejs.org/en/docs/)。nodejs版本，详见[云函数运行环境](?id=runtime)
Cloud Function supports standard APIs of js and nodejs, such as `console.log()`, `setTimeout()`, see also [nodejs official website](https://nodejs.org/en/docs/). Nodejs version, see [Cloud Function Runtime Environment](?id=runtime) for details

除了标准API外，云函数环境中内置了`uniCloud`对象，扩展了一批新API，实际开发中更常用的是uniCloud的扩展API。见下：
In addition to the standard API, the `uniCloud` object is built into the cloud function environment, which expands a batch of new APIs. In actual development, the extended API of uniCloud is more commonly used. See below:

|API						|描述																																			|
| API | Description |
|--							|--																																				|
|uniCloud.database()		|云数据库对象 [详情](uniCloud/cf-database.md)																									|
| uniCloud.database() |Cloud database object [Details](uniCloud/cf-database.md) |
|uniCloud.databaseJQL()		|云函数中使用JQL语法操作数据库 [详见](uniCloud/jql-cloud.md)，需添加扩展库																			|
| uniCloud.databaseJQL() |Use JQL syntax to operate the database in the cloud function [For details, see](uniCloud/jql-cloud.md), you need to add an extended library |
|uniCloud.redis()			|使用redis [详见](uniCloud/redis.md)，需添加扩展库																							
| uniCloud.redis() | Use redis [see details](uniCloud/redis.md), need to add extension library
|uniCloud.uploadFile()		|云函数上传文件到云存储 [详情](uniCloud/storage?id=clouduploadfile)																				|
| uniCloud.uploadFile() |Cloud function to upload files to cloud storage [details](uniCloud/storage?id=clouduploadfile) |
|uniCloud.downloadFile()	|云函数下载云存储的文件到云函数运行环境 [详情](uniCloud/storage?id=clouddownloadfile)															|
| uniCloud.downloadFile() | The cloud function downloads the cloud storage file to the cloud function operating environment [Details](uniCloud/storage?id=clouddownloadfile) |
|uniCloud.deleteFile()		|云函数删除云存储的文件 [详情](uniCloud/storage?id=clouddeletefile)																				|
| uniCloud.deleteFile() |Cloud function to delete cloud storage files [details](uniCloud/storage?id=clouddeletefile) |
|uniCloud.getTempFileURL()	|获取云存储文件的临时路径 [详情](uniCloud/storage?id=cloudgettempfileurl)																		|
| uniCloud.getTempFileURL() | Get the temporary path of the cloud storage file [Details](uniCloud/storage?id=cloudgettempfileurl) |
|uniCloud.customAuth()		|使用云厂商自定义登录，仅腾讯云支持[详情](uniCloud/authentication.md?id=cloud-custom-auth)														|
| uniCloud.customAuth() | Use cloud vendor custom login, only Tencent Cloud supports [Details](uniCloud/authentication.md?id=cloud-custom-auth) |
|uniCloud.callFunction()	|云函数/云对象中调用另一个云函数 [见下](#callbyfunction)	|
| uniCloud.callFunction() | Call another cloud function from a cloud function/cloud object [see below](#callbyfunction) |
|uniCloud.importObject()	|云函数/云对象中调用另一个云对象 [详情](cloud-obj.md?id=call-by-cloud)	|
| uniCloud.importObject() | Call another cloud object in a cloud function/cloud object [Details](cloud-obj.md?id=call-by-cloud) |
|uniCloud.httpclient		|云函数中通过http访问其他系统 [见下](#httpclient)																		|
| uniCloud.httpclient |Access other systems through http in the cloud function [see below](#httpclient) |
|uniCloud.httpProxyForEip	|使用云厂商代理访问http服务（阿里云的解决微信需要固定IP的方案），仅阿里云云端环境支持 [详见](#aliyun-eip)，新增于`HBuilderX 3.5.5`|
| uniCloud.httpProxyForEip | Use the cloud vendor proxy to access http services (Alibaba Cloud's solution to WeChat needs fixed IP), only Alibaba Cloud cloud environment supports [see details](#aliyun-eip), added in `HBuilderX 3.5.5 `|
|uniCloud.sendSms()			|发送短信，需添加扩展库 [详见](uniCloud/send-sms.md)																											|
| uniCloud.sendSms() | To send a text message, you need to add an extension library [see details](uniCloud/send-sms.md) |
|uniCloud.getPhoneNumber()	|获取一键登录手机号，需添加扩展库 [详见](uniCloud/univerify.md?id=cloud)																						|
| uniCloud.getPhoneNumber() | To obtain a mobile phone number for one-click login, you need to add an extension library [see details](uniCloud/univerify.md?id=cloud) |
|uniCloud.init()			|获取指定服务空间的uniCloud实例 [详见](uniCloud/concepts/space.md?id=multi-space)														|
| uniCloud.init() | Get the uniCloud instance of the specified service space [see details](uniCloud/concepts/space.md?id=multi-space) |
|uniCloud.logger			|云函数中打印日志到[uniCloud web控制台](https://unicloud.dcloud.net.cn/)的日志系统（非HBuilderX控制台）[详情](rundebug.md?id=uniCloudlogger)															|
| uniCloud.logger | Print logs in the cloud function to the log system of [uniCloud web console](https://unicloud.dcloud.net.cn/) (not HBuilderX console) [details](rundebug.md?id= uniCloudlogger) |
|uniCloud.getRequestList	|获取当前云函数实例内正在处理的请求Id列表 [详见](#get-request-list)，新增于`HBuilderX 3.5.5`|
| uniCloud.getRequestList |Get the list of request IDs being processed in the current cloud function instance [see details](#get-request-list), added in `HBuilderX 3.5.5`|
|uniCloud.getClientInfos	|获取当前云函数实例内正在处理的请求对应的客户端信息列表 [详见](#get-client-infos)，新增于`HBuilderX 3.5.5`|
| uniCloud.getClientInfos | Get the list of client information corresponding to the request being processed in the current cloud function instance [see](#get-client-infos), added in `HBuilderX 3.5.5`|
|uniCloud.getCloudInfos		|获取当前云函数实例内正在处理的请求对应的云端信息列表 [详见](#get-cloud-infos)，新增于`HBuilderX 3.5.5`|
| uniCloud.getCloudInfos |Get the list of cloud information corresponding to the request being processed in the current cloud function instance [see details](#get-cloud-infos), added in `HBuilderX 3.5.5`|

## 错误对象@uni-cloud-error
## Error object @uni-cloud-error

云函数调用uniCloud接口时（包括请求云函数、云对象、云存储等）可能存在抛出错误的场景，此时会抛出uniCloud标准的错误对象（以下记为uniCloudError），uniCloudError包含以下属性
When cloud functions call uniCloud interfaces (including requesting cloud functions, cloud objects, cloud storage, etc.), there may be scenarios where errors are thrown. At this time, uniCloud standard error objects (hereinafter referred to as uniCloudError) will be thrown. uniCloudError contains the following attributes

|属性		|类型	|必备	|说明												|
|Property |Type |Required |Description |
|--			|--		|--		|--													|
|errCode	|string	|是		|错误码												|
| errCode | string | yes | error code |
|errMsg		|string	|是		|错误信息											|
| errMsg | string | yes | error message |
|requestId	|string	|否		|请求Id，用于排查错误								|
| requestId | string |No |Request Id, used for troubleshooting |
|detail		|object	|否		|仅云对象主动返回错误对应的响应体规范时会有此属性	|
| detail | object |No |This attribute will only exist when the cloud object actively returns the response body specification corresponding to the error |

另外uniCloudError对象上还有code属性和message属性，两者均不推荐使用。
In addition, there are code attribute and message attribute on the uniCloudError object, both of which are not recommended.

## 访问数据库
## access the database

云函数中支持访问本服务空间下的、或经授权的其他服务空间下的，数据库。
Cloud functions support access to databases under this service space or other authorized service spaces.

- 使用 JQL 语法操作数据库，另见[文档](uniCloud/jql-cloud.md)
- Operate the database using JQL syntax, see also [documentation](uniCloud/jql-cloud.md)
- 使用 MongoDB 语法操作数据库，另见[文档](uniCloud/cf-database.md)
- Use MongoDB syntax to operate the database, see also [documentation](uniCloud/cf-database.md)

## 访问其他HTTP服务@httpclient
## Access other HTTP services @httpclient

云函数中如需要请求其他http服务，则使用`uniCloud.httpclient`。无需额外依赖，就可以请求任何 HTTP 和 HTTPS 协议的 Web 服务。`uniCloud.httpclient`返回的是一个[urllib实例](https://github.com/node-modules/urllib)。
If you need to request other http services in the cloud function, use `uniCloud.httpclient`. Any HTTP and HTTPS protocol web service can be requested without additional dependencies. `uniCloud.httpclient` returns a [urllib instance](https://github.com/node-modules/urllib).

**uniCloud.httpclient.request(URL,requestOptions)**

**requestOptions参数说明**
**requestOptions parameter description**

|参数名							|类型																																																				|是否必填	|默认值	|说明																																																																																			|
|Parameter name |Type |Required |Default value |Description |
|----								|----																																																				|----			|----		|----																																																																																			|
|method							|String																																																			| -				|GET		|HTTP 请求方法, 默认为：GET. 可选值： GET, POST, DELETE, PUT																																																							|
| method | String | - | GET | HTTP request method, default: GET. Possible values: GET, POST, DELETE, PUT |
|data								|Object																																																			| -				|-			|发送的数据																																																																																|
| data | Object | - |- |Sent data |
|dataAsQueryString	|Boolean																																																		| -				|true		|是否强制转换data为queryString																																																																						|
| dataAsQueryString | Boolean | - | true | Whether to forcibly convert data to queryString |
|content						|String &#124; Buffer																																												| -				|-			|手动设置请求的payload，设置后会忽略data																																																																	|
| content | String &#124; Buffer | - |- | Manually set the payload of the request, and the data will be ignored after setting |
|stream							|ReadStream																																																	|-				|-			|发送请求正文的可读数据流																																																																									|
| stream | ReadStream |- |- | A readable data stream to send the request body |
|writeStream				|WriteStream																																																|-				|-			|接受响应数据的可写数据流																																																																									|
| writeStream | WriteStream |- |- | A writable data stream that accepts response data |
|consumeWriteStream	|Boolean																																																		|-				|true		|是否等待 writeStream 完全写完才算响应全部接收完毕																																																												|
| consumeWriteStream | Boolean |- | true |Whether to wait for the writeStream to be completely written before the response is completely received |
|files							|Array&lt;ReadStream&#124;Buffer&#124;String&gt; &#124; Object &#124; ReadStream &#124; Buffer &#124; String| -				|-			|上传的文件，设置后将会使用 multipart/form-data 格式。如果未设置method，将会自动将method设置为POST																																				|
| files | Array&lt;ReadStream&#124;Buffer&#124;String&gt; &#124; Object &#124; ReadStream &#124; Buffer &#124; String| - |- |The uploaded file will use multipart after setting /form-data format. If the method is not set, the method will be automatically set to POST |
|contentType				|String																																																			| -				|-			|上传数据的格式，设为`json`会自动在`header`内设置`Content-Type: application/json`																																													|
| contentType | String | - |- |The format of the uploaded data, if it is set to `json`, it will automatically set `Content-Type: application/json` in the `header` |
|nestedQuerystring	|Boolean																																																		| -				|-			|转换data为queryString时默认不支持嵌套Object，此选项设置为true则支持转换嵌套Object																																												|
| nestedQuerystring | Boolean | - |- | When converting data to queryString, nested Objects are not supported by default. If this option is set to true, nested Objects are supported |
|dataType						|String																																																			| -				|-			|返回的数据格式，可选值为 'json'（返回数据转为JSON），'text'（返回数据转为字符串）， ''（返回数据不做处理，默认值）																												|
| dataType | String | - |- | Returned data format, optional values are 'json' (returned data is converted to JSON), 'text' (returned data is converted to string), '' (returned data is not processed, default) |
|fixJSONCtlChars		|Boolean																																																		|-				|false	|在JSON.parse之前处理响应结果中的控制字符（Control Character）																																																						|
| fixJSONCtlChars | Boolean |- | false | Process Control Characters in response results before JSON.parse |
|headers						|Object																																																			| -				|-			|请求头																																																																																		|
| headers | Object | - |- | request headers |
|timeout						|Number &#124; Array																																												| -				|5000			|超时时间设置。设置为数组时第一项为请求超时，第二项为返回超时。设置为数字时相当于同时设置请求超时和返回超时，即`timeout:3000`效果等于`timeouut:[3000,3000]`								|
| timeout | Number &#124; Array | - | 5000 | Timeout setting. When set as an array, the first item is the request timeout, and the second item is the return timeout. When set to a number, it is equivalent to setting the request timeout and return timeout at the same time, that is, the effect of `timeout:3000` is equal to `timeouut:[3000,3000]` |
|auth								|String																																																			|-				|-			|简单登录授权（Basic Authentication）参数，必须按照 `user:password` 格式设置																																															|
| auth | String |- |- |Basic Authentication parameter, which must be set in `user:password` format |
|digestAuth					|String																																																			|-				|-			|摘要登录授权（Digest Authentication）参数，必须按照 `user:password` 格式设置																																															|
| digestAuth | String |- |- |Digest Authentication parameter, which must be set in `user:password` format |
|agent							|[http.Agent](https://nodejs.org/api/http.html#http_class_http_agent)																				|-				|-			|http代理，如不使用可设为false																																																																						|
| agent |[http.Agent](https://nodejs.org/api/http.html#http_class_http_agent) |- |- | http agent, if not used, set to false |
|httpsAgent					|[https.Agent](https://nodejs.org/api/https.html#https_class_https_agent)																		|-				|-			|https代理，如不使用可设为false																																																																						|
| httpsAgent |[https.Agent](https://nodejs.org/api/https.html#https_class_https_agent) |- |- | https agent, if not used, it can be set to false |
|ca									|String&#124;Buffer&#124;Array																																							|-				|-			|证书内容																																																																																	|
| ca | String&#124;Buffer&#124;Array |- |- |Certificate content |
|rejectUnauthorized	|Boolean																																																		|-				|true		|是否在证书不受信任时返回错误																																																																							|
| rejectUnauthorized | Boolean |- | true | Whether to return an error when the certificate is not trusted |
|pfx								|String&#124;Buffer																																													|-				|-			|包含了私钥, 证书和CA certs, 一般是 PFX 或者 PKCS12 格式																																																									|
| pfx | String&#124;Buffer |- |- |Includes private key, certificate and CA certs, usually in PFX or PKCS12 format |
|key								|String&#124;Buffer																																													|-				|-			|PEF格式的服务器的私钥																																																																										|
| key | String&#124;Buffer |- |- | server's private key in PEF format |
|cert								|String&#124;Buffer																																													|-				|-			|PEM格式的服务器证书密钥																																																																									|
| cert | String&#124;Buffer |- |- | server certificate key in PEM format |
|passphrase					|String																																																			|-				|-			|私钥或pfx密码的字符串																																																																										|
| passphrase | String |- |- | String of private key or pfx passphrase |
|ciphers						|String																																																			|-				|-			|使用或排除的cipher																																																																												|
| ciphers | String |- |- | ciphers to use or exclude |
|secureProtocol			|String																																																			|-				|-			|SSL 使用的方法，例如，`SSLv3_method` 强制 SSL 版本为3。																																																									|
| secureProtocol | String |- |- | The method to use for SSL, eg `SSLv3_method` forces SSL version to 3. |
|followRedirect			|Boolean																																																		|-				|false	|收到3xx响应时是否自动重定向																																																																							|
| followRedirect | Boolean |- | false | Whether to automatically redirect when a 3xx response is received |
|maxRedirects				|Number																																																			|-				|10			|最高重定向次数																																																																														|
| maxRedirects | Number |- | 10 | Maximum number of redirects |
|formatRedirectUrl	|Function																																																		|-				|-			|手动格式化url																																																																														|
| formatRedirectUrl | Function |- |- |Manually format url |
|beforeRequest			|Function																																																		|-				|-			|请求发送前的钩子																																																																													|
| beforeRequest | Function |- |- |Hook before request sending |
|streaming					|Boolean																																																		|-				|false	|是否直接返回响应流，开启 streaming 之后，HttpClient 会在拿到响应对象 res 之后马上返回， 此时 result.headers 和 result.status 已经可以读取到，只是没有读取 data 数据而已。|
| streaming | Boolean |- | false |Whether to return the response stream directly. After streaming is enabled, HttpClient will return immediately after getting the response object res. At this time, result.headers and result.status can be read, but not read data data only. |
|gzip								|Boolean																																																		|-				|false	|是否支持 gzip 响应格式。开启 gzip 之后，HttpClient 将自动设置 Accept-Encoding: gzip 请求头， 并且会自动解压带 Content-Encoding: gzip 响应头的数据。											|
| gzip | Boolean |- | false | Whether to support gzip response format. After enabling gzip, HttpClient will automatically set the Accept-Encoding: gzip request header, and will automatically decompress the data with the Content-Encoding: gzip response header. |
|timing							|Boolean																																																		|-				|false	|是否开启请求各阶段的时间测量																																																																							|
| timing | Boolean |- | false |Whether to enable the time measurement of each phase of the request |
|enableProxy				|Boolean																																																		|-				|false	|是否启用代理																																																																															|
| enableProxy | Boolean |- | false | Whether to enable proxy |
|proxy							|String																																																			|-				|null		| 代理地址																																																																																|
| proxy | String |- | null | proxy address |
|lookup							|Function																																																		|-				|-			|自定义DNS查询函数																																																																												|
| lookup | Function |- |- |Custom DNS query function |
|checkAddress				|Function																																																		|-				|-			|校验请求地址																																																																															|
| checkAddress | Function |- |- |Check request address |
|trace							|Boolean																																																		|-				|false	|是否启用捕获堆栈																																																																													|
|trace|Boolean|-|false|whether to enable capture stack|

**注意**
**Notice**

默认情况下request接口不会处理返回的数据，即不传`dataType`参数时会返回buffer类型的数据，如需自动解析json格式的返回结果，需要将`dataType`设置为`"json"`
By default, the request interface will not process the returned data, that is, if the `dataType` parameter is not passed, the data of the buffer type will be returned. If you want to automatically parse the returned result in json format, you need to set `dataType` to `"json"`

**示例代码**
**Example Code**

```js
const res = await uniCloud.httpclient.request(apiUrl, {
    method: 'POST',
    data: {
      test: 'testValue'
    },
    contentType: 'json', // 指定以application/json发送data内的数据
    dataType: 'json' // 指定返回值为json格式，自动进行parse
  })
console.log(res)
```

返回数据结构如下
The returned data structure is as follows

```js
{
	"data": {"name": "DCloud"}, // 响应内容
	"status": 200, // 状态码
	"headers": { // 响应头，仅作示例，不同服务器返回的有差异
		"date": "Tue, 29 Dec 2020 08:10:30 GMT",
		"content-type": "application/json",
		"content-length": "276",
		"connection": "keep-alive",
		"server": "gunicorn/19.9.0",
		"access-control-allow-origin": "*",
		"access-control-allow-credentials": "true"
	}
}

```

### 发送formdata类型数据
### Send formdata type data

实际业务中常有使用云函数发送formdata类型数据的需求，比如微信小程序提供的一些服务端接口（图片内容安全检测、识别图片二维码等），可以参考以下示例进行发送
In actual business, there is often a need to use cloud functions to send formdata type data, such as some server interfaces provided by WeChat MiniApp(picture content security detection, recognition of picture QR codes, etc.), you can refer to the following examples to send

```js
'use strict';
const fs = require('fs')
const path = require('path')
const FormData = require('form-data'); // 此form-data需要使用npm安装，地址：https://www.npmjs.com/package/form-data
exports.main = async (event, context) => {
  const form = new FormData()
  form.append('media', fs.readFileSync(path.resolve(__dirname, './test.jpg')), { // 为方便演示此处直接使用云函数目录下的test.jpg文件
    filename: 'test.jpg',
    contentType: 'image/jpeg'
  });
  form.append('otherParam', 'otherParam content');
  const res = await uniCloud.httpclient.request('https://httpbin.org/post', {
    method: 'POST',
    content: form.getBuffer(), // 请求内容
    headers: form.getHeaders(), // 请求头
    dataType: 'json' // 此处指定为json表示将此请求的返回值解析为json
  })
  return res
};

```

## 请求和环境API
## Request and Environment API

由于存在[单实例多并发](#concurrency)的情况，实例级的uniCloud对象，和每个请求request是一对多的关系。
Due to the existence of [single instance with multiple concurrency](#concurrency), the instance-level uniCloud object has a one-to-many relationship with each request.

这也造成了与请求相关的上下文，比如客户端信息，需要通过请求来获取。
This also causes the context related to the request, such as client information, to be obtained through the request.

为了更好的管理请求和请求相关的上下文，uniCloud提供了下面一批API。
In order to better manage requests and request-related contexts, uniCloud provides the following batch of APIs.

### 获取请求id列表@get-request-list
### Get request id list @get-request-list

**示例**
**example**

```js
uniCloud.getRequestList()
// 返回值：['3228166e-3c17-4d58-9707-xxxxxxxx']
// Return value: ['3228166e-3c17-4d58-9707-xxxxxxxx']
```

如没有配置[单实例多并发](#concurrency)，数组里只会返回一项内容。配置后可能会多项，正在并发的所有请求的requestId都会返回。
If [Single Instance Multiple Concurrency](#concurrency) is not configured, only one item will be returned in the array. After configuration, there may be multiple items, and the requestId of all concurrent requests will be returned.

当返回多项时，在uniCloud对象上无法明确当前请求是数组中的哪一个。所以提供了其他方法来获取当前请求：
When multiple items are returned, it is not clear which one in the array the current request is on the uniCloud object. So other methods are provided to get the current request:
- 云对象通过`this.getUniCloudRequestId()`。[详情](cloud-obj.md#get-request-id)
- Cloud object via `this.getUniCloudRequestId()`. [Details](cloud-obj.md#get-request-id)
- 云函数通过函数自带参数context。[详情](cf-callfunction.md#context)
- The cloud function uses the function's own parameter context. [Details](cf-callfunction.md#context)

### 获取客户端信息列表#get-client-infos
### Get client information list #get-client-infos

同理，考虑到单实例多并发，`uniCloud.getClientInfos()`获取客户端信息也是一个数组。
Similarly, considering multiple concurrency of a single instance, `uniCloud.getClientInfos()` obtains client information is also an array.

```js
const clientInfos = uniCloud.getClientInfos() 
```

返回值
return value
```js
clientInfos = [{
  appId: '__UNI_xxxxx',
  requestId: '3228166e-3c17-4d58-9707-xxxxxxxx'
  // ...
}]
```

如未开启单实例多并发，那么数组只有1项。单实例多并发场景下返回正在并发的所有请求的客户端信息列表。
If single-instance multi-concurrency is not enabled, the array has only one item. In a single-instance multi-concurrency scenario, return a list of client information for all concurrent requests.

**返回值**
**return value**

getClientInfos返回的信息，是在客户端的[uni.getSystemInfo](/api/system/info.md#getsysteminfo)的基础之上，增加了一些额外的信息。
The information returned by getClientInfos is based on the client's [uni.getSystemInfo](/api/system/info.md#getsysteminfo), with some additional information added.

除了`getSystemInfo`返回字段外，还包含以下信息
In addition to the fields returned by `getSystemInfo`, the following information is also included

|属性名		|类型		|说明																																																																					|
|Property Name |Type |Description |
|--				|--			|--																																																																						|
|requestId|string	|请求Id，可以使用此字段筛选出当前请求的客户端信息																																															|
| requestId| string |Request Id, you can use this field to filter out the client information of the current request |
|clientIP	|string	|客户端ip																																																																			|
| clientIP | string |client ip |
|userAgent|string	|客户端ua，注意非本地运行环境下客户端getSystemInfoSync也会获取ua参数并上传给云对象，但是云对象会从http请求头里面获取ua而不是clientInfo里面的ua|
| userAgent| string |client ua, note that the client getSystemInfoSync in non-local operating environment will also obtain the ua parameter and upload it to the cloud object, but the cloud object will obtain ua from the http request header instead of the ua in clientInfo|
|source		|string	|调用来源，返回值见下。																																																												|
| source | string | The source of the call, see the return value below. |
|scene		|string	|场景值。客户端[uni.getLaunchOptionsSync](/api/plugins/getLaunchOptionsSync.md#getlaunchoptionssync)返回的scene参数，													|
| scene | string | Scene value. The scene parameter returned by the client [uni.getLaunchOptionsSync](/api/plugins/getLaunchOptionsSync.md#getlaunchoptionssync), |

云函数调用来源source，它的值域为：
Cloud function call source source, its value range is:

|取值			|说明													|
|Value |Description |
|--				|--														|
|client		|uni-app客户端导入云对象调用	|
| client | uni-app client import cloud object call |
|function	|由其他云函数或云对象调用			|
| function | called by other cloud functions or cloud objects |
|http			|云对象URL化后通过http访问调用|
| http | After the cloud object is URLized, it is called through http access |
|timing		|定时任务调用云对象						|
| timing | a scheduled task calls a cloud object |

**注意事项**
**Precautions**

- 客户端上报的信息在理论上存在被篡改可能，实际业务中应验证前端传来的数据的合法性
- In theory, the information reported by the client may be tampered with. In actual business, the legality of the data sent by the front end should be verified
- 除了clientIP外，其他客户端信息只有使用uni-app客户端以callFunction或者importObject方式访问云函数或云对象时才有
- In addition to clientIP, other client information is available only when using the uni-app client to access cloud functions or cloud objects in the way of callFunction or importObject
- 云对象与云函数内获取客户端platform稍有不同，云函数未拉齐vue2、vue3版本app平台的platform值，vue2为`app-plus`，vue3为`app`。云对象无论客户端是vue2还是vue3，在app平台获取的platform均为`app`。这一点在使用uni-id时需要特别注意，详情见：[uni-id文档 preferedAppPlatform](uniCloud/uni-id.md?id=prefered-app-platform)
- The cloud object is slightly different from the client platform obtained in the cloud function. The cloud function does not align the platform values of the vue2 and vue3 versions of the app platform. Vue2 is `app-plus`, and vue3 is `app`. Regardless of whether the client of the cloud object is vue2 or vue3, the platform obtained on the app platform is `app`. This point requires special attention when using uni-id. For details, see: [uni-id document preferredAppPlatform](uniCloud/uni-id.md?id=preferred-app-platform)

除了`uniCloud.getClientInfos()`API，在云函数context和云对象this中，也可以直接获取当前客户端信息。
In addition to `uniCloud.getClientInfos()` API, the current client information can also be obtained directly in the cloud function context and cloud object this.
- 云对象通过`this.getClientInfo()`。[详情](cloud-obj.md#get-client-info)
- Cloud objects via `this.getClientInfo()`. [Details](cloud-obj.md#get-client-info)
- 云函数通过函数自带参数context。[详情](cf-callfunction.md#context)
- The cloud function uses the function's own parameter context. [Details](cf-callfunction.md#context)

### 获取云端信息@get-cloud-infos
### Get cloud information @get-cloud-infos

同上，为了兼容并发场景，获取云端信息`uniCloud.getCloudInfos()`返回的也是数组。
As above, in order to be compatible with concurrent scenarios, getting cloud information `uniCloud.getCloudInfos()` also returns an array.

**示例**
**example**

```js
const cloudInfos = uniCloud.getCloudInfos() 
cloudInfos = [{
  provider: 'aliyun',
  spaceId: 'xxxxx',
  functionName: 'xxx',
  functionType: 'xxxx',
  requestId: '3228166e-3c17-4d58-9707-xxxxxxxx'
}]
```

**返回值**
**return value**

|参数名			|类型	|必备	|说明													|
|Parameter name |Type |Required |Description |
|--				|--		|--		|--														|
|provider		|string	|是		|服务空间供应商，阿里云为：`aliyun`，腾讯云为：`tencent`|
| provider | string | yes | service space provider, Alibaba Cloud: `aliyun`, Tencent Cloud: `tencent`|
|spaceId		|string	|是		|服务空间Id												|
| spaceId | string | yes | service space Id |
|functionName	|string	|是		|云函数名称												|
| functionName | string | yes | cloud function name |
|functionType	|string	|是		|云对象为`cloudobject`、云函数为`cloudfunction`			|
| functionType | string | yes | cloud object is `cloudobject`, cloud function is `cloudfunction` |
|requestId		|string	|是		|请求Id，可以使用此字段筛选出当前请求的云端信息			|
| requestId | string |Yes |Request Id, you can use this field to filter out the cloud information currently requested |

除了`uniCloud.getCloudInfos()`API，在云函数context和云对象this中，也可以直接获取当前请求的云端信息。
In addition to `uniCloud.getCloudInfos()` API, in the cloud function context and cloud object this, you can also directly get the cloud information of the current request.
- 云对象通过`this.getCloudInfo()`。[详情](cloud-obj.md#get-cloud-info)
- Cloud objects via `this.getCloudInfo()`. [Details](cloud-obj.md#get-cloud-info)
- 云函数通过函数自带参数context。[详情](cf-callfunction.md#context)
- The cloud function uses the function's own parameter context. [Details](cf-callfunction.md#context)


上述3个API，都因为单实例多并发而被设计成数组方式。实际上，大多数开发者并不使用单实例多并发。
The above three APIs are all designed as arrays because of the multiple concurrency of a single instance. In fact, most developers do not use single-instance multi-concurrency.

在不考虑单实例多并发时，也可以直接使用uniCloud的getRequestList、getClientInfos、getCloudInfos方法中第一个数组项。
When multiple concurrency of a single instance is not considered, you can also directly use the first array item in the getRequestList, getClientInfos, and getCloudInfos methods of uniCloud.

或者在云对象的this和云函数的context里获取相关上下文信息也可以。
Or you can obtain relevant context information in the this of the cloud object and the context of the cloud function.


## 扩展库@extension
## Extension library @extension

uniCloud的api中，有些api对应的实现，其代码体积较大，且这些功能并不是每一个云函数都会使用。为了方便开发者控制云函数的体积，设计了`uniCloud扩展库`的概念。
Among the APIs of uniCloud, the corresponding implementations of some APIs have a large code size, and these functions are not used by every cloud function. In order to facilitate developers to control the volume of cloud functions, the concept of `uniCloud extension library` is designed.

开发者可以对云函数目录点右键，管理公共模块和扩展库依赖，在其中选择要加载的扩展库。这个可视化界面对应的数据在云函数目录下的 package.json 内的`extensions`字段下。
Developers can right-click the cloud function directory to manage public modules and extension library dependencies, and select the extension library to be loaded. The data corresponding to this visual interface is under the `extensions` field in package.json in the cloud function directory.

注意：未引用扩展库的，使用uniCloud相应api时会报错。
Note: If the extension library is not referenced, an error will be reported when using the corresponding API of uniCloud.


**目前支持的扩展库如下**
**Currently supported extension libraries are as follows**

- JQL扩展库[uni-cloud-jql]：用于在云函数内使用JQL语法操作数据库，详见：[JQL扩展库](uniCloud/jql-cloud.md)
- JQL extension library [uni-cloud-jql]: used to use JQL syntax to operate the database in the cloud function, see: [JQL extension library](uniCloud/jql-cloud.md)
- redis扩展库[uni-cloud-redis]：云函数内使用redis，详见：[redis扩展库](uniCloud/redis.md)
- redis extension library [uni-cloud-redis]: use redis in cloud functions, see: [redis extension library](uniCloud/redis.md)
- 发送短信扩展[uni-cloud-sms]：云函数中发送短信，详见：[sms扩展](uniCloud/send-sms?id=extension)
- Send SMS extension [uni-cloud-sms]: send SMS in the cloud function, see: [sms extension](uniCloud/send-sms?id=extension)
- 一键登录API扩展[uni-cloud-verify]：手机App调用运营商一键登录服务时，云函数中获取到真实手机号， 详见：[一键登录扩展库](uniCloud/univerify?id=extension)
- One-key login API extension [uni-cloud-verify]: When the mobile app calls the operator's one-key login service, the real mobile phone number is obtained in the cloud function. For details, see: [One-key login extension library](uniCloud/univerify?id =extension)
- 统一推送服务扩展库[uni-cloud-push]：云函数内使用uni-push，详见：[uniCloud/uni-cloud-push/api]
- Unified push service extension library [uni-cloud-push]: use uni-push in cloud functions, see: [uniCloud/uni-cloud-push/api] for details

以下是一个开启了redis扩展库的云函数package.json示例，注意此文件不支持注释，下方示例中的注释仅为演示
The following is an example of cloud function package.json with the redis extension library enabled. Note that this file does not support comments, and the comments in the example below are for demonstration only

```js
{
  "name": "add-article",
  "version": "1.0.0",
  "description": "新增文章",
  "main": "index.js",
	"extensions": {
		"uni-cloud-redis": {} // 配置为空对象即可，后续如有扩展参数会在此处配置
	}
}
```

## 公共模块@common
## Common module @common

云函数支持公共模块。多个云函数/云对象的共享部分，可以抽离为公共模块，然后被多个云函数引用。由于篇幅较长，[详见](uniCloud/cf-common)
Cloud functions support public modules. The shared parts of multiple cloud functions/cloud objects can be separated into common modules, and then referenced by multiple cloud functions. Due to the length of the article, [see details](uniCloud/cf-common)

## 使用npm
## use npm

云函数的运行环境是 `Node.js`，因此我们可以使用 `npm` 安装第三方依赖。
The running environment of cloud functions is `Node.js`, so we can use `npm` to install third-party dependencies.

注意：阿里云目前仅支持全量上传云函数（整个`node_modules`文件夹全部上传，会在上传前自动在本地安装依赖，不会直接使用云函数目录下的node_modules），因此提醒开发者精简依赖，否则可能会每次上传时间很慢，影响开发体验。并且太大的npm库影响云函数的运行性能。
Note: Alibaba Cloud currently only supports full upload of cloud functions (the entire `node_modules` folder is uploaded, and dependencies will be automatically installed locally before uploading, and node_modules in the cloud function directory will not be directly used), so developers are reminded to simplify dependencies. Otherwise, the upload time may be very slow each time, affecting the development experience. And a too large npm library affects the running performance of cloud functions.

腾讯云会在上传云函数后自动安装需要的npm依赖。
Tencent Cloud will automatically install the required npm dependencies after uploading the cloud function.

Tips:
- 目前每个云函数上传包大小限制为10M。如果npm包很大，阿里云的整体上传机制会无法满足需求。此时只能选择腾讯云，交给腾讯云自动安装依赖。
- Currently, the upload package size of each cloud function is limited to 10M. If the npm package is large, Alibaba Cloud's overall upload mechanism will not be able to meet the demand. At this time, you can only choose Tencent Cloud, and let Tencent Cloud automatically install dependencies.


## 云函数/云对象中调用云函数@callbyfunction
## Call cloud function in cloud function/cloud object @callbyfunction

### 调用三方云函数或云对象
### Call three-party cloud functions or cloud objects

用法同客户端调用云函数，仍然是`uniCloud.callfunction`，但不支持callback形式。
The usage is the same as that of the client to call the cloud function, which is still `uniCloud.callfunction`, but does not support the callback form.

**请求参数**
**Request parameters**

|字段			|类型			|必填	|说明					|
|Field |Type |Required |Description |
|---			|---			|---	|---					|
|name			|String		|是		|云函数名称。	|
| name | String | Yes | Cloud function name. |
|data			|Object		|否		|云函数参数。	|
| data | Object | No | Cloud function parameters. |

**响应参数**
**Response parameters**

|字段			|类型		|必备	|说明												|
|Field |Type |Required |Description |
|---			|---		|---	|---												|
|errCode	|String	|否		|状态码，操作成功则不返回。	|
| errCode | String |No |Status code, if the operation is successful, it will not be returned. |
|errMsg		|String	|否		|错误描述。									|
| errMsg | String | No | Error description. |
|result		|Object	|否		|云函数执行结果。						|
| result | Object |No |The execution result of the cloud function. |
|requestId|String	|否		|请求序列号，用于错误排查。	|
| requestId| String |No |Request serial number, used for troubleshooting. |

**示例代码**
**Example Code**

```javascript
let callFunctionResult = await uniCloud.callFunction({
    name: "test",
    data: { a: 1 }
})
```

**注意**
**Notice**

由于调用方不是uni-app客户端，云函数的context、云对象的this.getClientInfo等API无法获取客户端信息，包括 uni-id-token。
Since the caller is not a uni-app client, APIs such as the context of cloud functions and this.getClientInfo of cloud objects cannot obtain client information, including uni-id-token.

可以在云函数互调时手动传递 token ，或者校验调用来源（source）为云函数（function）时不验证用户 token。
You can manually pass the token when interchanging cloud functions, or do not verify the user token when verifying that the call source (source) is a cloud function (function).

云函数/云对象互相调用时调用方会通过公网访问被调用方，访问速度不如直接将逻辑放在调用方执行。使用前请确保你确实需要此功能。
When cloud functions/cloud objects call each other, the caller will access the callee through the public network, and the access speed is not as good as directly executing the logic on the caller. Please make sure you really need this feature before using it.

`HBuilderX 3.4.0`版本之前**云函数右键本地运行时**，里面的代码再次callFunction会调用云端的云函数而不是本地云函数，此bug后续版本已修复。
Before the `HBuilderX 3.4.0` version **when the cloud function is right-clicked to run locally**, the code inside callFunction will call the cloud function in the cloud instead of the local cloud function. This bug has been fixed in subsequent versions.

### 云函数递归调用自身@recurrence
### The cloud function calls itself recursively @recurrence

除了调用三方云函数，事实上云函数还可以递归调用自己。
In addition to calling third-party cloud functions, in fact cloud functions can also call themselves recursively.

当一个云函数实例的资源不能满足需求，或超时时间不够用时。比如要给10万个用户发送短信，而短信发送接口一次调用最多支持50个手机号码，这样最少需要调用2000次接口才能完成；而一个云函数实例完成不了2000次接口的调用。这种场景就可以使用云函数递归调用，分解任务实现。
When the resources of a cloud function instance cannot meet the demand, or the timeout period is not enough. For example, if you want to send SMS to 100,000 users, and the SMS sending interface supports up to 50 mobile phone numbers at a time, you need to call the interface at least 2,000 times to complete; and a cloud function instance cannot complete 2,000 interface calls. This scenario can be realized by recursively calling cloud functions and decomposing tasks.

示例代码如下：
The sample code is as follows:

```js
// 当前云函数名称 send-sms-cf
// Current cloud function name send-sms-cf
'use strict';
const db = uniCloud.database();
const dbCmd = db.command
const userTable = db.collection('uni-id-users')
exports.main = async (event, context) => {
	//执行业务逻辑
	//execute business logic
	let res = await sendSms(event.before_id)
	if (res.errCode) {
		return res
	}else{
		// 如果没有报错，就让当前云函数 调用当前云函数（云对象同理）。注意：这里是异步的
		// If no error is reported, let the current cloud function call the current cloud function (the cloud object is the same). Note: this is asynchronous
		uniCloud.callFunction({
			name: 'send-sms-cf',
			data: {
				before_id: res.before_id
			}
		}).catch(e=>{
			console.log(e.message);
		}).then(e=>{
			console.log(e.result);
		})
		
		// 等待500毫秒，给一个请求发出去的时间
		// Wait for 500 milliseconds, giving time for a request to be sent out
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(res)
			}, 500)
		})
	}

	async function sendSms(before_id) {
		console.log('before_id',before_id);
		let where = {
			phone: dbCmd.exists(true),
			//..这里可以写你自己的其他条件，如超过多久没登录的用户 last_login_date < Date.now() - 3600*24*...
			//.. Here you can write your own other conditions, such as users who have not logged in for a long time last_login_date < Date.now() - 3600*24*...
		}
		if(before_id){
			//高性能分页查询，以上一次查询的最后一条数据的id被起始id
			//High-performance paging query, the id of the last piece of data in the previous query is replaced by the starting id
			where._id = dbCmd.gt(before_id)
		}
		
		let res = await userTable.where(where)
			.limit(50)
			.orderBy("_id", "asc")
			.get()

		if (!res.data.length) {
			return {
				errCode: 'sendSms-invalid',
				errMsg: '结束，没有符合条件的接收者'
			}
		}
		let phoneList = res.data.map(item => item.phone)
		let sendSmsRes = await uniCloud.sendSms({
			phoneList,
			appid: '__UNI__xxxxxxx',
			smsKey: '****************',
			smsSecret: '****************',
			templateId: '100**', // 请替换为自己申请的模板id
			data: {
				text1: 'xxx',
				text2: 'xxx'
			}
		})
		if (sendSmsRes.errCode) {
			return sendSmsRes
		}
		return {
			errCode: 0,
			before_id: res.data[res.data.length - 1]._id
		}
	}
};
```

注意：如果不小心把递归云函数写成死循环，就把云函数的内容全部删除，重新上传覆盖即可
Note: If you accidentally write the recursive cloud function into an infinite loop, delete all the content of the cloud function, and upload it again to overwrite it


### 云函数内访问其他服务空间@call-by-function-cross-space
### Access other service spaces within the cloud function @call-by-function-cross-space

> 仅腾讯云支持
> Only supported by Tencent Cloud

在腾讯云服务空间的云函数内支持获取**同账号**下其他服务空间的uniCloud实例，参考：[一个应用访问多个服务空间](uniCloud/concepts/space.md?id=multi-space)，并使用此实例调用对应服务空间的云函数。
In the cloud function of Tencent Cloud service space, it is supported to obtain uniCloud instances of other service spaces under **same account**, refer to: [A single application accesses multiple service spaces](uniCloud/concepts/space.md?id=multi-space ), and use this instance to call the cloud function corresponding to the service space.

```javascript
//开发者创建了多个服务空间，则需手动初始化。注意这是前端代码，不是云函数代码
//The developer has created multiple service spaces, which need to be initialized manually. Note that this is the front-end code, not the cloud function code
const myCloud = uniCloud.init({
  provider: 'tencent',
  spaceId: 'xxxx-yyy'
});
//通过uniCloud实例调用云开发的API
//Call the API developed by the cloud through the uniCloud instance
myCloud.callFunction()
myCloud.uploadFile()
```

**注意**
**Notice**

- 连接本地云函数调试时，如果存在跨服务空间调用，则callFunction会使用云端云函数
- When connecting to the local cloud function for debugging, if there is a cross-service space call, the callFunction will use the cloud function

## serverless环境说明@runtime
## serverless environment description @runtime

serverless是动态分配计算资源的，由此会引发的出一批特有概念：冷启动、实例、并发请求、无状态、伪全局变量。
Serverless dynamically allocates computing resources, which leads to a number of unique concepts: cold start, instances, concurrent requests, stateless, and pseudo-global variables.

### 云函数冷启动、热启动@launchtype
### Cloud function cold start, hot start @launchtype

基于云函数按需执行的特点, 函数在不被触发的时候, 计算资源是不被激活的。
Based on the on-demand execution characteristics of cloud functions, when the function is not triggered, computing resources are not activated.

当一个云函数初次被触发时，其完整过程如下：
When a cloud function is triggered for the first time, its complete process is as follows:

1. severless实例化计算实例
1. Serverless instantiate computing instance
2. 加载函数代码
2. Load function code
3. 启动 node
3. Start node
4. 执行云函数代码
4. Execute the cloud function code

函数被调用时，执行这些完整步骤的过程称作`冷启动`, 冷启动的耗时一般在一秒左右。 
When the function is called, the process of performing these complete steps is called `cold start`, and the cold start usually takes about one second.

一个云函数实例冷启动后，serverless调度中心会保留这个实例一定时间。在实例保留期间，客户端再次请求云函数，不会触发冷启动，速度会更快。实例的详细定义[见下](#instance)
After a cloud function instance is cold-started, the serverless scheduling center will keep the instance for a certain period of time. During the instance reservation period, the client requests the cloud function again, which will not trigger a cold start, and the speed will be faster. Detailed definition of an instance [see below](#instance)

云函数实例和执行进程都被复用的情况下称之为`热启动`, 热启动性能要好非常多，因为它只有一个步骤：
When both the cloud function instance and the execution process are reused, it is called "hot start". The performance of hot start is much better because it has only one step:
1. 执行云函数代码
1. Execute the cloud function code

如果一个云函数实例长时间没有被再次调用，则该计算实例会被**回收**；后续再次调用该云函数时，就会再次触发云函数的**冷启动**。
If a cloud function instance has not been called again for a long time, the computing instance will be **recycled**; when the cloud function is called again later, the **cold start** of the cloud function will be triggered again.

不同云厂商的函数实例回收时间不同：
The recovery time of function instances of different cloud vendors is different:
- 阿里云：15分钟内没有第二次访问的云函数，就会被回收
- Alibaba Cloud: Cloud functions that are not accessed a second time within 15 minutes will be recycled
- 腾讯云：30分钟
- Tencent Cloud: 30 minutes

直观的体验表现为：隔了很久不用的云函数，第一次用就会比较慢，然后立即访问第二次，则很快，毫秒级响应。
The intuitive experience is as follows: a cloud function that has not been used for a long time will be slow for the first time, and then accessed immediately for the second time, it will be very fast, with a millisecond-level response.

注：冷启动虽慢但也不会超过1.5秒，如超过1.5秒应该是云函数写的有问题或网络有问题。
Note: Although the cold start is slow, it will not exceed 1.5 seconds. If it exceeds 1.5 seconds, there should be a problem with the writing of the cloud function or a problem with the network.

两家云厂商仍然在优化冷启动问题。目前给开发者的建议是：
The two cloud vendors are still optimizing the cold start problem. The current advice to developers is to:
1. 使用clientDB可以减少遇到冷启动问题的概率
1. Using clientDB can reduce the probability of encountering cold start problems
2. 非高频访问的云函数，合并到高频云函数中。也有的开发者使用单路由方式编写云函数，即在一个云函数中通过路由处理实现了整个应用的所有后台逻辑。参考[插件](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&cat1=7&orderBy=UpdatedDate)。
3. 非高频访问的云函数，可以通过定时任务持续运行它（注意阿里云公测版的定时任务最短周期大于资源回收周期）
3. For non-frequently accessed cloud functions, you can continue to run them through scheduled tasks (note that the shortest period of scheduled tasks in the public beta version of Alibaba Cloud is greater than the resource recovery period)
4. 阿里云支持配置云函数的单实例多并发，请参考：[单实例多并发](cf-functions.md?id=concurrency)

### 实例与请求@instance
### Instance and request @instance

`实例`，指云函数的一个执行环境，可以简单的理解为一个node进程。
`Instance` refers to an execution environment of cloud functions, which can be simply understood as a node process.

每次客户端发起`请求`（request）时，serverless的调度中心会查看已启动、且空闲的实例，分配一个实例来接收这个请求。如果没有空闲实例，则新起一个实例。
Every time a client initiates a request, the serverless scheduling center will check the started and idle instances and assign an instance to receive the request. If there is no idle instance, a new instance is created.

新起一个实例需要一定时间，也即上文说的冷启动问题。详见[冷启动](#launchtype)
It takes a certain amount of time to start a new instance, which is the cold start problem mentioned above. See [cold start](#launchtype) for details

一个实例启动后，一般在1秒内就会完成请求，但serverless调度中心会保留这个实例一定时间（时间见上一节）。在实例保留期间，客户端再次请求云函数，不会触发冷启动。
After an instance is started, the request is usually completed within 1 second, but the serverless scheduling center will reserve the instance for a certain period of time (see the previous section for the time). During the instance reservation period, if the client requests the cloud function again, a cold start will not be triggered.

也就是说，**在实例保留期间，1个实例会接受多个客户端请求。**
That is to say, during the instance reservation period, 1 instance will accept multiple client requests. **

所以要注意`实例`和`请求`不是一对一关系。
So be aware that `instance` and `request` are not a one-to-one relationship.

`请求`（request），指一次连接云函数的网络请求。不同请求有不同的上下文信息（比如客户端UA）。
`Request` (request) refers to a network request to connect to a cloud function. Different requests have different context information (such as client UA).

所以想要获取客户端信息，一定注意不是在实例的全局对象上获取，而是需要在请求的上下文中获取。[详见]()
Therefore, if you want to obtain client information, you must pay attention not to obtain it on the global object of the instance, but to obtain it in the context of the request. [see details]()

在uniCloud阿里云版，阿里云还提供了1个实例的多并发请求配置，即同一时间多个请求可以并发执行。
In the uniCloud Alibaba Cloud version, Alibaba Cloud also provides multiple concurrent request configurations for one instance, that is, multiple requests can be executed concurrently at the same time.
也就是同一时间的请求发到云函数时，没有配置单实例多并发会新开一个云函数实例，配置了单实例多并发则不会新开实例，在一个实例中增加并发。
That is, when a request is sent to the cloud function at the same time, a new cloud function instance will be opened if the single-instance multi-concurrency is not configured, and a new instance will not be opened if the single-instance multi-concurrency is configured, and the concurrency will be increased in an instance.
详见[单实例多并发](#concurrency)。
See [Single instance with multiple concurrency](#concurrency) for details.

一个云函数，可以同时存在多个实例。比如cf1云函数，如未配置单实例多并发，10个请求同时达到云函数，就会开10个实例。
A cloud function can have multiple instances at the same time. For example, if the cf1 cloud function is not configured with multiple concurrent instances, and 10 requests reach the cloud function at the same time, 10 instances will be opened.

不管开了多少实例，云函数的计费是按请求计费的。实例响应请求后到保留期结束之间，如果不发生新请求是不会计费的。
No matter how many instances are opened, the billing of the cloud function is billed according to the request. From the time the instance responds to the request to the end of the retention period, if there is no new request, it will not be billed.

### 云函数的无状态和全局变量@state-less
### Cloud function's stateless and global variables @state-less

因为实例可能第一次启动，也可能已经启动，所以云函数中的js全局变量其实是伪全局变量。也就是**云函数是无状态的**。
Because the instance may be started for the first time, or it may have already been started, the js global variable in the cloud function is actually a pseudo-global variable. That is, **cloud functions are stateless**.

在云对象中，写在`module.exports = {}`之前，云函数写在`exports.main = async (event, context) => {}`之前的变量定义，是伪全局变量。
In cloud objects, variable definitions written before `module.exports = {}` and cloud functions written before `exports.main = async (event, context) => {}` are pseudo-global variables.

它们在实例有效期内的多次请求中会复用。
They are reused across multiple requests over the lifetime of the instance.

以如下代码为例，`count`作为全局变量，当多次调用该云函数时，可能会出现变量累加的情况。
Take the following code as an example, `count` is a global variable, when the cloud function is called multiple times, variables may accumulate.

- 云对象示例
- Cloud object example
```js
let count = 0;
module.exports = {
	methoda() {
		return count++
	}
}
```

- 云函数示例
- Cloud function example

```javascript
let count = 0;
exports.main = async (event, context) => {
	return count++
}
```

上面2个示例中，实例未复用时，也就是冷启动时，count的值每次都是0；若实例被复用，则可能返回1、2、3等各种意外情况。
In the above two examples, when the instance is not reused, that is, when the instance is cold started, the value of count is 0 every time; if the instance is reused, it may return 1, 2, 3 and other unexpected situations.

当然，可以用这个方法来获知一个实例被重用了多少次请求。
Of course, you can use this method to know how many requests an instance has been reused.

**require由于存在缓存，也存在同样的问题。尽量不要直接修改require返回的内容。**
**require also has the same problem due to the existence of cache. Try not to directly modify the content returned by require. **

**uniCloud全局对象也是跨请求的，与请求相关的内容不应该挂载到uniCloud全局对象上。**
**The uniCloud global object is also cross-request, and the content related to the request should not be mounted on the uniCloud global object. **

**正确的全局变量，应该使用如下方案：**
**The correct global variable should use the following scheme:**
- uni-config-center：静态全局变量可以使用uni提供的配置中心。[详见](uni-config-center.md)
- uni-config-center: Static global variables can use the configuration center provided by uni. [See details](uni-config-center.md)
- redis：动态全局变量使用redis。[详见](redis-introduction.md)
- redis: Dynamic global variables use redis. [See details](redis-introduction.md)

### 请求的上下文
### Request context

由于上节提到的，uniCloud全局对象是实例级的、跨请求的，1个实例内uniCloud只会在冷启动时进行一次初始化。
As mentioned in the previous section, uniCloud global objects are instance-level and cross-request, and uniCloud in an instance will only be initialized once when it is cold started.

所以与请求相关的上下文，比如客户端信息，需要通过请求来获取。
So the context related to the request, such as client information, needs to be obtained through the request.

为了让开发者清晰的了解实例和请求的关系，uniCloud提供了如下方案。
In order for developers to clearly understand the relationship between instances and requests, uniCloud provides the following solutions.

1. 通过uniCloud.getRequestList()，可以获得当前实例的请求id列表
1. Through uniCloud.getRequestList(), you can get the request id list of the current instance
每个请求，都有一个requestId，在运行回调里、云端日志里都有体现。
Each request has a requestId, which is reflected in the running callback and cloud logs.
```js
uniCloud.getRequestList()
// 返回值：['3228166e-3c17-4d58-9707-xxxxxxxx']
// Return value: ['3228166e-3c17-4d58-9707-xxxxxxxx']
```
	
	- 如果未配置阿里云的单实例多并发，getRequestList()返回的数组里面只有一项，即只能拿到当前的请求id。
	- If Alibaba Cloud's single-instance multi-concurrency is not configured, there is only one item in the array returned by getRequestList(), that is, only the current request id can be obtained.
	- 如果配置了阿里云的单实例多并发，当并发发生时，这个列表就会返回多项，当前并发的每个requestId都在里面。
	- If Alibaba Cloud's single-instance multi-concurrency is configured, when concurrency occurs, this list will return multiple items, and each requestId that is currently concurrent is included.

2. uniCloud.getClientInfos()，可以返回当前所有请求的客户端信息。
2. uniCloud.getClientInfos(), which can return the client information of all current requests.
该方法返回一个数组，当前每个并发执行中的请求的客户端信息都在里面。
This method returns an array, which contains the client information of each concurrently executing request.
```json
[
  {
    "appId": "__UNI_xxxxx",
    "requestId": "3228166e-3c17-4d58-9707-xxxxxxxx"
    // ...
  }
]
```

	- 如果未配置阿里云的单实例多并发，getRequestList()返回的数组里面只有一项，即只能拿到当前的请求id。
	- If Alibaba Cloud's single-instance multi-concurrency is not configured, there is only one item in the array returned by getRequestList(), that is, only the current request id can be obtained.
	- 如果配置了阿里云的单实例多并发，当并发发生时，这个列表就会返回多项，当前并发的每个requestId都在里面。
	- If Alibaba Cloud's single-instance multi-concurrency is configured, when concurrency occurs, this list will return multiple items, and each requestId that is currently concurrent is included.

3. 

如果是uniCloud私有云，
If it is a uniCloud private cloud,
如果想获取与请求相关的信息，比如这次请求的客户端UA，或云函数环境信息，无法直接在uniCloud全局对象中获取。
If you want to obtain information related to the request, such as the client UA of this request, or cloud function environment information, you cannot directly obtain it from the uniCloud global object.


云函数入口入参包含一个event和一个context，这两个参数和请求相关，每次有新请求到云函数实例时就会有一个新的event对象和一个新的context对象
The entry parameters of the cloud function include an event and a context. These two parameters are related to the request. Every time there is a new request to the cloud function instance, there will be a new event object and a new context object.

云对象的this和event、context类似，每个请求都对应一个单独的this。
The this of cloud objects is similar to event and context, and each request corresponds to a separate this.

### 单实例多并发@concurrency
### Single instance with multiple concurrency @concurrency

> 仅阿里云支持
> Only supported by Alibaba Cloud

默认情况下云函数仅支持单实例单并发，即同一时间一个实例仅可为一个请求服务（不同请求同一时间访问会被分派到不同实例进行处理）。不过在uniCloud web控制台中，阿里云可以通过修改云函数单实例并发度，可以修改云函数同一时间最多能处理多少请求。
By default, cloud functions only support single-instance single-concurrency, that is, one instance can only serve one request at a time (different requests at the same time will be assigned to different instances for processing). However, in the uniCloud web console, Alibaba Cloud can modify the maximum number of requests that the cloud function can handle at the same time by modifying the concurrency of a single instance of the cloud function.

假设同时有3个请求需要处理：
Suppose there are 3 requests to be processed at the same time:

当实例并发度设置为1时，需要创建3个实例来处理这3个请求，每个实例分别处理1个请求。而每开启一个实例都会引发云函数冷启动；
When the instance concurrency is set to 1, 3 instances need to be created to handle the 3 requests, and each instance handles 1 request respectively. And every time an instance is opened, it will trigger a cold start of the cloud function;

当云函数的实例并发度设置为10时（即1个实例可以同时处理10个请求），只需要创建1个实例就能处理这3个请求。这样后面2个并发请求不会有因云函数实例创建带来的冷启动问题。
When the instance concurrency of the cloud function is set to 10 (that is, one instance can handle 10 requests at the same time), only one instance needs to be created to handle the three requests. In this way, the next two concurrent requests will not have the cold start problem caused by the creation of cloud function instances.

相关文档：[云函数实例及部分变量说明](#instance) 、[云函数的无状态](#state-less)
Related documents: [Cloud function instance and some variable description](#instance), [Cloud function stateless](#state-less)

**开启方式**
**Open method**

云函数详情页面配置单实例并发度即可，支持1-100之间的数值
You only need to configure the concurrency of a single instance on the cloud function details page, and the value between 1-100 is supported

**效果**
**Effect**

- 有效减少并发请求时云函数冷启动次数
- Effectively reduce the number of cloud function cold starts during concurrent requests
  
**使用注意**
**Usage Caution**

- 虽然阿里云云函数支持配置多并发，但在高并发下异步请求排队效果未必好于新开一个实例。尤其是并发操作数据库性能不佳。**一般情况下不要设置过大的并发度，可以自己针对业务代码测试比较下是否启用并发或并发数配成多少**
- Although Alibaba Cloud functions support multiple concurrency configurations, the queuing effect of asynchronous requests under high concurrency may not be better than opening a new instance. Especially the concurrent operation database performance is not good. **Under normal circumstances, do not set too large concurrency, you can test and compare whether concurrency is enabled or how many concurrency numbers are matched against the business code**
- 云函数内存使用量会随着并发量增大而增加，过大的内存可能导致OOM
- The memory usage of cloud functions will increase as the concurrency increases, and excessive memory may lead to OOM
- 注意云函数是有超时时间的。设置过大的单实例多并发可能会导致实例底层网络请求排队从而导致请求超时，
- Note that cloud functions have timeouts. Setting too large a single instance with multiple concurrency may cause the underlying network requests of the instance to queue up, resulting in request timeouts.
- 如果并发的不同请求对全局变量同时进行读写会污染全局变量，可能会导致意想不到的后果，详见[全局变量](#state-less)
- If different concurrent requests read and write global variables at the same time, the global variables will be polluted, which may lead to unexpected consequences. For details, see [Global Variables](#state-less)

**适用场景**
**Applicable scene**

|场景									|适用性	|理由																	|
|Scenario |Applicability |Justification |
|:-:									|:-:	|:-:																	|
|函数中有较多时间在等待下游服务的响应	|适用	|等待响应一般不消耗资源，在一个实例内并发处理可以节省费用。				|
|There is a lot of time in the function waiting for the response from the downstream service |Applicable |Waiting for the response generally does not consume resources, and concurrent processing in one instance can save costs. |
|函数中有共享状态且不能并发访问			|不适用	|例如全局变量，多请求并发执行修改共享状态可能会导致错误。				|
|There is a shared state in the function and cannot be accessed concurrently |Not applicable |For example, global variables, concurrent execution of multiple requests to modify the shared state may cause errors. |
|单个请求的执行要消耗大量CPU及内存资源	|不适用	|多请求并发执行会造成资源争抢，可能会导致内存不足（OOM）或者延时增加。	|
|The execution of a single request consumes a lot of CPU and memory resources |Not applicable |Concurrent execution of multiple requests will cause resource contention, which may lead to out-of-memory (OOM) or increased delay. |

**关于旧版本uni-id公共模块的特殊说明**
**Special note about the old version of uni-id public module**

旧版本uni-id公共模块指uni-id-common推出之前的版本。[详见](uni-id.md)
The old version of uni-id common module refers to the version before uni-id-common was released. [See details](uni-id.md)

```js
// 开启单实例多并发前的uni-id用法
// Enable the usage of uni-id before multi-concurrency of single instance
const uniID = require('uni-id')
exports.main = async function(event, context) {
  const res = uniID.login({
    // ...一些参数
    // ...some parameters
  })
  return res
}

// 由于uni-id默认会从一个内置全局变量上获取客户端平台信息，不同请求会修改此全局变量可能造成混乱，开启单实例多并发后需要将uni-id修改为如下写法
// Since uni-id will obtain client platform information from a built-in global variable by default, different requests will modify this global variable, which may cause confusion. After enabling multiple concurrency of a single instance, you need to modify uni-id to the following
let uniID = require('uni-id')
exports.main = async function(event, context) {
  let uniIDIns = uniID.createInstance({ // 创建uni-id实例，其上方法同uniID
    context: context // 传入context防止不同请求互相影响
    // config: {} // 完整uni-id配置信息，使用config.json进行配置时无需传此参数
    // config: {} // Complete uni-id configuration information, no need to pass this parameter when using config.json for configuration
  })
  const res = uniIDIns.login({
    // ...一些参数
    // ...some parameters
  })
  return res
}
```

不同于旧版uni-id公共模块，新版uni-id-common不可直接require后使用，必须使用createInstance方法
Different from the old version of uni-id public module, the new version of uni-id-common cannot be used directly after require, and the createInstance method must be used

**进阶**
**Advanced**

开启单实例多并发后的全局变量复用并非一定是坏的结果，如果你很了解此行为，也可以对此进行有效的利用
The reuse of global variables after multiple concurrency of single instance is enabled is not necessarily a bad result. If you understand this behavior well, you can also make effective use of it

例：[ip-filter](https://ext.dcloud.net.cn/plugin?id=4619)中就利用云函数全局缓存一些ip访问信息来限制单ip访问频率，可以下载示例项目体验一下
Example: [ip-filter](https://ext.dcloud.net.cn/plugin?id=4619) uses cloud functions to globally cache some ip access information to limit the frequency of single ip access. You can download the sample project to experience it

受单实例多并发的影响，云函数全局存放与本次请求有关的信息会造成混乱。因此uniCloud提供了根据当前requestId获取客户端信息和云端信息。参考以下文档
Affected by the multi-concurrency of a single instance, the global storage of information related to this request by the cloud function will cause confusion. Therefore, uniCloud provides access to client information and cloud information based on the current requestId. Refer to the following documents

- [云函数获取当前requestId](cf-callfunction.md#context)
- [Cloud function gets the current requestId](cf-callfunction.md#context)
- [云对象获取当前requestId](cloud-obj.md#get-request-id)
- [cloud object get current requestId](cloud-obj.md#get-request-id)
- [获取当前云函数实例正在处理的请求对应的requestId列表](#get-request-list)
- [Get the requestId list corresponding to the request being processed by the current cloud function instance](#get-request-list)
- [获取当前云函数实例正在处理的请求对应的客户端信息列表](#get-client-infos)
- [Get the client information list corresponding to the request being processed by the current cloud function instance](#get-client-infos)
- [获取当前云函数实例正在处理的请求对应的云端信息列表](#get-cloud-infos)
- [Get the cloud information list corresponding to the request being processed by the current cloud function instance](#get-cloud-infos)


### 临时存储空间
### Temporary storage space

云函数是运行在云端的代码，运行环境由云服务器弹性调配，这是和传统`Node.js`应用很大的区别。
Cloud functions are codes that run on the cloud, and the operating environment is elastically deployed by cloud servers, which is very different from traditional `Node.js` applications.

换言之，云函数每次执行的宿主环境（可简单理解为虚拟机或服务器硬件）可能相同，也可能不同，因此传统`Node.js`开发中将部分信息存储本地硬盘或内存的方案就不再适合。
In other words, the host environment (which can be simply understood as a virtual machine or server hardware) for each execution of a cloud function may be the same or different, so the traditional `Node.js` development method of storing part of the information on the local hard disk or memory is no longer Suitable.

所以，不建议使用node的fs文件系统相关的API。建议通过云数据库、云存储、redis的方案替代。
Therefore, it is not recommended to use node's fs file system related API. It is recommended to replace it with cloud database, cloud storage, and redis solutions.

### 云函数中的异步行为
### Asynchronous behavior in cloud functions

书写云函数时应注意`async`、`await`的使用，`nodejs`有内置模块`util`可以将符合`error-first`形式`callback`的函数转换为`promise`形式，[详情参考](https://nodejs.org/api/util.html#util_util_promisify_original)，比如以下示例：
When writing cloud functions, you should pay attention to the use of `async` and `await`. `nodejs` has a built-in module `util` that can convert functions that conform to `error-first` form `callback` into `promise` form. [Details](https://nodejs.org/api/util.html#util_util_promisify_original), such as the following example:

```js
const {
	promisify
} = require('util')

let testCallback = {
	value: 'testCallbackValue',
	echo: function(num, callback) {
		setTimeout(() => {
      // 第一个参数为error，第二个为返回值
      // The first parameter is error, the second is the return value
			callback(null, `${this.value}:${num}`)
		}, 2000)
	}
}

exports.main = async function() {
  // num=2，不传入callback参数，callback会自动作为回调函数处理
  // num=2, do not pass in the callback parameter, the callback will be automatically processed as a callback function
	let val = await promisify(testCallback.echo).call(testCallback, 2)
	console.log(val)
	return val
}

```

如果想在云函数内使用回调形式可以让云函数返回一个promise，如以下示例：
If you want to use the callback form in the cloud function, you can let the cloud function return a promise, as in the following example:

```js
exports.main = async function() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('some return value')
		}, 1000)
	})
}
```


### return的策略@return
### return strategy @return

- 阿里云 return 之后云函数立即终止，逻辑不会继续执行，包括 settimeout 或其他异步操作都会立即终止。
- After Alibaba Cloud returns, the cloud function will be terminated immediately, and the logic will not continue to execute, including settimeout or other asynchronous operations will be terminated immediately.
- 腾讯云 node8 return 之后也不会继续执行，但 node12 可以配置是否继续执行
- Tencent Cloud node8 will not continue to execute after return, but node12 can configure whether to continue to execute
- HBuilderX 本地运行
- HBuilderX running locally
	* 不通过客户端发起，直接本地运行云函数/云对象，return 之后还可以执行300ms
	* Do not initiate through the client, directly run the cloud function/cloud object locally, and can execute 300ms after return
	* 通过客户端连接本地云函数/云对象，return 之后可以继续执行
	* Connect to the local cloud function/cloud object through the client, and the execution can continue after return

**腾讯云因为按 GBS 对云函数计费，在 node12 时，尤其要注意，如果未有效终止云函数，会一直计费**
**Because Tencent Cloud bills cloud functions by GBS, especially when using node12, you must pay special attention. If the cloud function is not effectively terminated, it will continue to be billed**

### node版本
### node version
云函数运行在 node 环境中。可以使用 node api `process.version` 获取 node 版本。
Cloud functions run in the node environment. The node version can be obtained using the node api `process.version`.

- uniCloud 阿里云默认是 node8.17.0，也可以在 package.json 中选择 node12
- uniCloud Alibaba Cloud is node8.17.0 by default, you can also choose node12 in package.json
- uniCloud 腾讯云默认是 node8.9.4，也可以在 package.json 中选择 node12
- uniCloud Tencent Cloud is node8.9.4 by default, you can also choose node12 in package.json
- HBuilderX 本地运行环境使用的是 HBuilderX 自带的 node 版本，目前为 node12。在 package.json 选择 node版本 只云端生效，且只在第一次上传云函数时生效。
- The local operating environment of HBuilderX uses the node version that comes with HBuilderX, which is currently node12. The node version selected in package.json will only take effect on the cloud, and it will only take effect when the cloud function is uploaded for the first time.

**注意**
**Notice**
- 本地开发一旦使用了 node12 的专用 api，上传云函数时必须在package.json里手动配置选择 node12 的运行环境。
- Once the local development uses the dedicated API of node12, you must manually configure and select the operating environment of node12 in package.json when uploading cloud functions.
	之所以没有在云端默认统一使用 node12，是因为腾讯云 node12 的 return 策略有一些特殊情况，[见下](?id=return)。
	The reason why node12 is not uniformly used by default in the cloud is because the return policy of Tencent Cloud node12 has some special circumstances, [see below](?id=return).
- 运行环境在云端云函数创建时设定，不可通过更新云函数来修改。
- The operating environment is set when the cloud function is created on the cloud, and cannot be modified by updating the cloud function.
	也就是第一次上传云函数的时候，package.json里配了什么，就是什么。如果需要修改node环境，需先删除云端云函数，重新上传。
	That is, when the cloud function is uploaded for the first time, what is configured in package.json is what it is. If you need to modify the node environment, you need to delete the cloud function first and upload it again.

node版本可以在云函数的package.json文件的`cloudfunction-config->runtime`字段进行配置，详情参考：[云函数package.json](uniCloud/cf-functions.md?id=packagejson)
The node version can be configured in the `cloudfunction-config->runtime` field of the cloud function's package.json file. For details, refer to: [cloud function package.json](uniCloud/cf-functions.md?id=packagejson)


### 时区
### Time zone

云端的云函数中使用的时区是 `UTC+0`，而不是 `UTC+8`，在云函数中使用时间时需特别注意。
The time zone used in cloud functions on the cloud is `UTC+0` instead of `UTC+8`, so special attention should be paid when using time in cloud functions.

云函数在HBuilderX本地运行时，时区则是电脑的时区，很可能是 `UTC+8`。建议统一使用时间戳，可以规避时区问题。
When the cloud function is running locally in HBuilderX, the time zone is the time zone of the computer, probably `UTC+8`. It is recommended to use timestamps uniformly to avoid time zone issues.

## 云函数配置
## Cloud function configuration

云函数除了代码，还有配置。在uniCloud web控制台可以配置；在HBuilderX项目中，云函数根目录的`package.json`也是存放配置的地方。
In addition to code, cloud functions also have configuration. It can be configured in the uniCloud web console; in the HBuilderX project, `package.json` in the cloud function root directory is also where the configuration is stored.

### 运行内存@memory
### Running memory @memory

云函数运行内存为单个云函数实例使用的内存。

腾讯云云函数默认运行内存大小为256MB，阿里云正式版默认512MB

计算云函数GBs资源消耗时腾讯云会以此内存*运行时间（100ms为阶梯向上取整）得到消耗量。阿里云会以实际运行时间计算GBs，不会按100ms阶梯向上取整

::: warning 注意
阿里云一般场景（比如包含数据库访问时）不建议将内存配置为128MB。如果开发起见遇到数据库响应缓慢，在排除索引等因素的影响后可以检查下是不是云函数内存配置为了128MB，如果是建议调整为256MB
:::

### 超时时间@timeout
### Timeout @timeout

阿里云定时任务触发最大支持600秒超时时间，非定时触发时超时时间为40秒。

腾讯云定时任务触发最大支持900秒超时时间。非定时触发时超时时间为30秒。

如果超时时间仍然不够用，可以参考云函数递归调用，连续执行多个云函数处理一个任务[详情查看](uniCloud/cf-functions.md?id=recurrence)
If the timeout is still not enough, you can refer to the recursive call of cloud functions to execute multiple cloud functions in succession to process a task [View details](uniCloud/cf-functions.md?id=recurrence)

### 固定出口IP@eip
### Fixed export IP@eip

#### 腾讯云@tencent-eip
#### Tencent Cloud @tencent-eip

serverless默认是没有固定的服务器IP的，因为有很多服务器资源在后台供随时调用，每次调用到哪个服务器、哪个ip都不固定。
Serverless does not have a fixed server IP by default, because there are many server resources in the background for calling at any time, and which server or IP is not fixed each time it is called.

但一些三方系统，要求配置固定ip白名单，比如微信公众号的js sdk，此时只能提供固定ip地址。
However, some third-party systems require the configuration of a fixed ip whitelist, such as the js sdk of the WeChat public account, which can only provide fixed ip addresses at this time.

腾讯云的收费版，提供了云函数的固定出口ip，在uniCloud [Web控制台](https://unicloud.dcloud.net.cn)，创建付费的腾讯云服务空间，选择一个云函数，在云函数的详情界面可以开启固定出口ip。开启后界面上会显示可用的固定ip。拿着这个ip去需要固定ip的界面（如微信公众号管理界面）配置即可。
The paid version of Tencent Cloud provides a fixed export ip for cloud functions. In uniCloud [Web console](https://unicloud.dcloud.net.cn), create a paid Tencent Cloud service space, select a cloud function, and click On the details interface of the cloud function, you can enable the fixed export ip. After opening, the available fixed IP will be displayed on the interface. Just take this ip to the interface that needs a fixed ip (such as the WeChat official account management interface) to configure.

**注意**
**Notice**

- 如果你是免费版升配到付费版，开启`固定IP`功能后，会导致付费版到期无法自动降级到免费版，请注意按时续费
- If you are upgrading from the free version to the paid version, after the `fixed IP` function is turned on, the paid version will not be automatically downgraded to the free version when it expires, please pay attention to renew on time

腾讯云原本的设计是同一个服务空间内所有开启固定出口IP的云函数使用的是同一个IP。但是对于开通vpc的云函数无法和未开通vpc的函数共用同一个出口ip。具体使用中有以下表现
The original design of Tencent Cloud is that all cloud functions with fixed egress IPs in the same service space use the same IP. However, the cloud function with vpc enabled cannot share the same egress ip with the function without vpc enabled. The specific use has the following performance

- 开通redis扩展的云函数和未开通redis扩展的云函数会分配不同的ip
- Cloud functions with redis extension enabled and cloud functions without redis extension will be assigned different ip
- 如果一个云函数已经开通固定出口ip，再关联redis扩展库时固定ip会发生变化
- If a cloud function has opened a fixed export ip, the fixed ip will change when it is associated with the redis extension library

建议已开通redis的服务空间先将云函数关联redis扩展再开通固定出口IP，**2022年7月20日起新上传的云函数会默认开启vpc功能，如需旧云函数和新云函数保持一致可以把旧云函数关联redis扩展后上传一次，注意这样操作会改变旧云函数的固定出口IP**
It is recommended that the redis service space that has been opened should first be associated with the cloud function to redis and then open a fixed export IP. **From July 20, 2022, the newly uploaded cloud function will enable the vpc function by default. If you need to keep the old cloud function and the new cloud function It is consistent that you can associate the old cloud function with redis and upload it once. Note that this operation will change the fixed exit IP of the old cloud function**

#### 阿里云@aliyun-eip
#### Aliyun@aliyun-eip

> 新增于 HBuilderX 3.5.5
> Added in HBuilderX 3.5.5

uniCloud.httpProxyForEip ，其原理是通过代理请求获得固定出口IP的能力。IP为轮转不固定，因此三方服务要求使用白名单时开发者需要将代理服务器可能的IP均加入到白名单中，见下方代理服务器列表。此外对于代理的域名有限制，当前仅持`weixin.qq.com`泛域名。若开发者有其他域名代理需求，发送邮件到service@dcloud.io申请，邮件模板参考：[申请解除限制邮件模板](price.md#apply-email-template)。

**代理服务器IP列表**

```
47.92.132.2
47.92.152.34
47.92.87.58
47.92.207.183
8.142.185.204
```

如需在获取微信公众号access_token场景使用，请将上述ip配置到`微信公众平台 -> 基本配置 -> IP白名单`内，相关链接：[微信公众平台](https://mp.weixin.qq.com/)
If you want to use it in the scenario of obtaining the access_token of the WeChat public account, please configure the above ip to `WeChat public platform -> Basic configuration -> IP whitelist`, related links: [WeChat public platform](https://mp.weixin. qq.com/)

##### 发送Get请求@http-proxy-get
##### Send Get request @http-proxy-get

**用法**
**usage**

```js
uniCloud.httpProxyForEip.get(url: String, params?: Object)
```

**示例**
**example**

```js
await uniCloud.httpProxyForEip.get(
  'https://api.weixin.qq.com/cgi-bin/token',
  {
    grant_type: 'client_credential', 
    appid: 'xxxx',
    secret: 'xxxx'
  }
)
```

##### 发送POST请求携带表单数据@http-proxy-post-form
##### Send POST request to carry form data @http-proxy-post-form

注意，此接口以`application/x-www-form-urlencoded`格式发送数据而不是`multipart/form-data`
Note that this interface sends data in `application/x-www-form-urlencoded` format instead of `multipart/form-data`

**用法**
**usage**

```js
uniCloud.httpProxyForEip.postForm(url: String, data?: Object, headers?: Object)
```

**示例**
**example**

```js
uniCloud.httpProxyForEip.postForm(    
  'https://www.example.com/search',
  {
    q: 'nodejs',
    cat: '1001'
  }
)
```

##### 发送POST请求携带JSON数据@http-proxy-post-json
##### Send POST request with JSON data @http-proxy-post-json

以`application/json`格式post数据
post data in `application/json` format

**用法**
**usage**

```js
uniCloud.httpProxyForEip.postJson(url: String, json?: Object, headers?: Object)
```

**示例**
**example**

```js
uniCloud.httpProxyForEip.postJson(    
  'https://www.example.com/search',
  {
    q: 'nodejs',
    cat: '1001'
  }
)
```

##### POST通用数据@http-proxy-post
##### POST general data @http-proxy-post

**用法**
**usage**

```js
uniCloud.httpProxyForEip.post(url: String, text?: String, headers?: Object)
```

**示例**
**example**

```js
uniCloud.httpProxyForEip.post(    
  'https://www.example.com/search',
  'abcdefg',
  {
    "Content-Type": "text/plain"
  }
)
```

**注意**
**Notice**

- 不支持发送multipart格式的内容
- Does not support sending content in multipart format
- 代理请求超时时间为5秒
- Proxy request timeout is 5 seconds
- 上述接口支持本地运行
- The above interfaces support local operation


## 云函数package.json@packagejson
## cloud function package.json@packagejson

HBuilderX 3.0版本之前，package.json只是一个标准的package.json，安装依赖或公共模块才需要。HBuilderX 3.0及以上版本，package.json也可以用来配置云函数。
Before HBuilderX version 3.0, package.json was just a standard package.json, which was required only for installing dependencies or public modules. For HBuilderX 3.0 and above, package.json can also be used to configure cloud functions.

uniCloud web控制台提供了很多云函数的设置，比如内存大小、url化、定时触发等，从HBuilderX 3.0起，在云函数的package.json里也可以编写这些设置。
The uniCloud web console provides many cloud function settings, such as memory size, urlization, timing trigger, etc. From HBuilderX 3.0 onwards, these settings can also be written in the cloud function's package.json.

开发者在本地编写云函数的设置，上传云函数，这些设置会自动在云端生效。（本地不生效）
Developers write cloud function settings locally and upload cloud functions, and these settings will automatically take effect on the cloud. (Does not work locally)

在云端设置了非默认参数后，HBuilderX下载云函数到本地时，也会自动把设置项放入package.json中下载下来。
After setting non-default parameters in the cloud, when HBuilderX downloads the cloud function to the local, it will also automatically put the setting items into package.json and download it.

package.json是一个标准json文件，不可带注释。下面是一个package.json示例。
package.json is a standard json file and cannot be commented. Below is an example package.json.

```json
{
  "name": "add-article",
  "version": "1.0.0",
  "description": "新增文章",
  "main": "index.js",
  "dependencies": {
    // 云函数的依赖，包括公共模块及自行安装的npm依赖
    // Cloud function dependencies, including public modules and self-installed npm dependencies
  },
	"extensions": {
		// 云函数使用的扩展库
		// Extended library used by cloud functions
	},
  "cloudfunction-config": {
		"memorySize": 256,
		"timeout": 5,
		"triggers": [{
				"name": "myTrigger",
				"type": "timer",
				"config": "0 0 2 1 * * *"
		}],
		"path": "",
		"runtime": "Nodejs8" 
	}
}
```

### cloudfunction-config@cloudfunction-config

其中cloudfunction-config字段是云函数配置，支持的配置如下
Among them, the cloudfunction-config field is the cloud function configuration, and the supported configurations are as follows

```js
{
  "concurrency": 10, // 单个云函数实例最大并发量，不配置的情况下默认是1
  "memorySize": 256, // 函数的最大可用内存，单位MB，可选值： 128|256|512|1024|2048，默认值256，阿里云正式版默认512
  "timeout": 5, // 函数的超时时间，单位秒，默认值5。最长为60秒，阿里云在定时触发时最长可以是600秒
  // triggers 字段是触发器数组，目前仅支持一个触发器，即数组只能填写一个，不可添加多个
  // The triggers field is an array of triggers. Currently, only one trigger is supported, that is, only one array can be filled in, and multiple ones cannot be added
  "triggers": [{ // 阿里云腾讯云均为此形式，请阅读下方说明
      // name: 触发器的名字，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger，name不对阿里云生效
      // name: The name of the trigger, see https://uniapp.dcloud.net.cn/uniCloud/trigger for the rules, name does not take effect for Alibaba Cloud
      "name": "myTrigger",
      // type: 触发器类型，目前仅支持 timer (即 定时触发器)，type不对阿里云生效
      // type: trigger type, currently only supports timer (i.e. timing trigger), type does not take effect for Alibaba Cloud
      "type": "timer",
      // config: 触发器配置，在定时触发器下，config 格式为 cron 表达式，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger。使用阿里云时会自动忽略最后一位，即代表年份的一位在阿里云不生效
      // config: trigger configuration, under the timing trigger, the config format is a cron expression, see https://uniapp.dcloud.net.cn/uniCloud/trigger for the rules. When using Alibaba Cloud, the last digit will be automatically ignored, that is, the digit representing the year will not take effect in Alibaba Cloud
      "config": "0 0 2 1 * * *"
  }],
  // 云函数Url化path部分
  "path": "",
  "runtime": "", // nodejs版本，可选Nodejs8、Nodejs12，默认：Nodejs8
  "keepRunningAfterReturn": true // 是否在云函数return之后继续执行，仅腾讯云nodejs12生效，详情见下方说明
}
```

**使用腾讯云Nodejs12版本时，务必仔细阅读此文档：[keepRunningAfterReturn](#keep-running)**
**When using Tencent Cloud Nodejs12 version, be sure to read this document carefully: [keepRunningAfterReturn](#keep-running)**

#### 定时任务triggers@triggers
#### Timing task triggers@triggers

阿里云定时触发的cron表达式不支持代表年的第七位，但是在package.json内配置时仍需将第七位设置为*。
The cron expression triggered periodically by Alibaba Cloud does not support the seventh digit of the year, but the seventh digit must still be set to * when configuring in package.json.

**在web控制台配置trigger请参考：[定时触发](uniCloud/trigger.md)**
**Please refer to:[Tiger Trigger](uniCloud/trigger.md)** to configure the trigger on the web console.**

package.json内统一了腾讯阿里的配置，两个平台都需要配置为如下形式
The configuration of Tencent and Ali is unified in package.json, and both platforms need to be configured as follows

```js
{
	"name": "myTrigger",
	"type": "timer",
	"config": "0 0 2 1 * * *"
}
```

#### keepRunningAfterReturn@keep-running

> 新增于HBuilderX 3.5.1
> Added in HBuilderX 3.5.1

阿里云、腾讯云nodejs8在云函数return之后其余逻辑会被冻结不再执行。腾讯云nodejs12表现恰好相反，云函数return之后还会等待其余逻辑执行后才会将此云函数实例空闲出来。
Alibaba Cloud and Tencent Cloud nodejs8 will freeze the rest of the logic after the cloud function returns. The behavior of Tencent Cloud nodejs12 is just the opposite. After the cloud function returns, it will wait for the rest of the logic to be executed before the cloud function instance will be free.

以下面的代码为例
Take the following code as an example

```js
exports.main = async function(event, context) {
	setTimeout(()=>{
	  console.log('delay 5 seconds')
	}, 5000)
	return {}
}
```

如果此云函数运行在阿里云或腾讯云nodejs8，setTimeout里面的console.log不会在本次云函数调用执行，但是可能在云函数实例再次被复用时继续执行。
If the cloud function runs on Alibaba Cloud or Tencent Cloud nodejs8, the console.log in setTimeout will not be executed when the cloud function is called, but may continue to execute when the cloud function instance is reused again.

如果此云函数运行在腾讯云nodejs12，setTimeout里面的console.log会在本次云函数调用内，同样的本次云函数**计费时间（与云函数GBs指标相关）**也会按照最终执行完成的时间计算（5000ms+return耗时）。但是前端无需等待5秒即可收到响应。注意：如果有未断开的长连接（例如：redis连接）会导致云函数一直运行到配置的超时时间
If this cloud function runs on Tencent Cloud nodejs12, the console.log in setTimeout will be included in this cloud function call, and the same cloud function **billing time (related to the cloud function GBs indicator)** will also be calculated according to the final Completion time calculation (5000ms+return time-consuming). But the frontend doesn't need to wait 5 seconds for the response. Note: If there is a long connection (for example: redis connection) that has not been disconnected, it will cause the cloud function to run until the configured timeout period

当在云函数package.json内的cloudfunction-config内配置了`keepRunningAfterReturn: false`时，可以改变腾讯云nodejs12的表现，云函数return之后将不再继续执行，未断开的长连接也不会增加云函数实际运行时间，云函数return后长连接也不会被中断，简单来说其表现和腾讯云nodejs8一致。
When `keepRunningAfterReturn: false` is configured in the cloudfunction-config in the cloud function package.json, the performance of Tencent Cloud nodejs12 can be changed, and the execution of the cloud function will not continue after the return, and the undisconnected long connection will not increase The actual running time of the cloud function, and the long connection will not be interrupted after the cloud function returns. Simply put, its performance is consistent with Tencent Cloud nodejs8.

**在云函数中发送网络请求**
**Send network request in cloud function**

将上述示例中的setTimeout换成网络请求、调用其他云函数或数据库请求同理，如果在阿里云或腾讯云nodejs8直接return会导致网络请求可能无法发送（即使成功发送也是在下一次云函数实例被复用的时候），这是与传统开发不太一样的地方。
Replace the setTimeout in the above example with a network request, and call other cloud functions or database requests. In the same way, if you return directly on Alibaba Cloud or Tencent Cloud nodejs8, the network request may not be sent (even if it is successfully sent, it will be the next time the cloud function instance is resumed. When used), this is different from traditional development.

```js
exports.main = async function(event, context) {
	uniCloud.callFunction({ 
    name: 'test',
    data: {}
  })
	return {} // callFunction后不等待直接return时无法调用到test云函数
}
```

**腾讯云nodejs12使用redis**
**Tencent cloud nodejs12 uses redis**

由于redis需要和服务器建立连接，此连接会阻止云函数结束执行。如果没有云函数return之后还需要继续执行的需求，可以简单的在`cloudfunction-config`内配置`keepRunningAfterReturn: false`。这样redis的连接并不会中断，下次请求来时依然可以使用之前建立的连接。
Since redis needs to establish a connection with the server, this connection will prevent the cloud function from finishing execution. If there is no need to continue execution after the cloud function returns, you can simply configure `keepRunningAfterReturn: false` in `cloudfunction-config`. In this way, the redis connection will not be interrupted, and the previously established connection can still be used when the next request comes.

如果需要return之后继续执行，那么需要在使用完毕后断开redis连接，调用`redis.quit()`方法即可断开连接。需要注意的是断开连接后之前建立的连接将不再可用，下个请求到来时需要使用`uniCloud.redis()`方法重新建立连接。
If you need to continue execution after return, you need to disconnect the redis connection after use, and call the `redis.quit()` method to disconnect. It should be noted that after the connection is disconnected, the previously established connection will no longer be available, and the `uniCloud.redis()` method needs to be used to re-establish the connection when the next request comes.

**如未按照上述说明进行操作，redis连接将会一直占用云函数实例，导致云厂商持续计算云函数执行时间，可能会导致消耗大量云资源而产生额外费用**
**If the above instructions are not followed, the redis connection will always occupy the cloud function instance, causing the cloud provider to continuously calculate the execution time of the cloud function, which may result in the consumption of a large amount of cloud resources and additional costs**

**务必确定自己已理解此文档内容，因未按照文档说明使用导致的额外计费DCloud不承担任何责任**
**Be sure to make sure that you have understood the content of this document, and DCloud will not be responsible for any additional billing caused by failure to follow the instructions in the document**

### 注意事项
### Precautions

- 插件作者在发布插件时，如果云函数有特殊设置，应该放入package.json中，然后发布到插件市场。这样就不用再通过说明文档一步一步引导用户去配置云函数定时触发器、内存、url化路径等
- When the plug-in author releases the plug-in, if the cloud function has special settings, it should be put into package.json and then published to the plug-in market. In this way, there is no need to guide users step by step through the documentation to configure cloud function timing triggers, memory, urlization paths, etc.
- 在web控制台修改云函数配置后，通过HBuilderX的下载云函数菜单会在package.json内添加修改后的云函数配置
- After modifying the cloud function configuration in the web console, the modified cloud function configuration will be added to package.json through the download cloud function menu of HBuilderX
- 上传云函数时，如果项目下的package.json内包含云函数配置会同时进行云函数的配置更新
- When uploading the cloud function, if the package.json under the project contains the cloud function configuration, the cloud function configuration will be updated at the same time
- package.json只有云端部署才生效，本地运行不生效。
- package.json is valid only for cloud deployment, not for local operation.
- cloudfunction-config不可删除云端配置。例：云端已配置triggers（定时触发器），删除cloudfunction-config内的trigger不会删掉云端的定时触发器
- cloudfunction-config cannot delete the cloud configuration. Example: triggers (timing triggers) have been configured in the cloud, deleting the trigger in cloudfunction-config will not delete the timing triggers in the cloud
- runtime参数（nodejs版本）仅可在创建云函数时生效，不可修改
- The runtime parameter (nodejs version) can only take effect when creating a cloud function and cannot be modified


### 云函数的数量、体积、冷启动的平衡
### The number, volume, and cold start balance of cloud functions

鉴于：
- 每个服务空间的云函数数量是有限的，阿里云是48个，腾讯云是149个，[详见](price.md)
- 每个云函数的体积限制是10M（含node_modules）
- The volume limit of each cloud function is 10M (including node_modules)
- 云函数有冷启动问题
- Cloud function has cold start problem

基于以上情况，对开发模式有如下建议：
Based on the above situation, the following suggestions are made for the development model:

1. 一般不建议使用体积较大、依赖较深的node_modules。多使用DCloud官方或插件市场提供的库。
1. It is generally not recommended to use node_modules with large size and deep dependencies. Use more libraries provided by DCloud official or plug-in market.
2. 优先使用clientDB，不占用云函数数量，也不用编写服务器代码。
2. Prioritize the use of clientDB, which does not occupy the number of cloud functions and does not need to write server code.
3. 对云对象或云函数做适当的合并和拆解。
3. Properly merge and disassemble cloud objects or cloud functions.
	- 低频且对用户体验影响较大的操作不建议独立使用云函数，合并到高频云函数中。
	- It is not recommended to use cloud functions independently for operations that are low-frequency and have a great impact on user experience, and are merged into high-frequency cloud functions.
	- 控制好单个云函数体积，有的开发者喜欢使用[单路由云函数](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&orderBy=WeekDownload&cat1=7)，整个服务空间就一个云函数。这也得根据实际情况，如果云函数体积超过6M也还是建议分拆。
	- Control the volume of a single cloud function. Some developers like to use [single route cloud function](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&orderBy= WeekDownload&cat1=7), the entire service space is a cloud function. This also depends on the actual situation. If the volume of the cloud function exceeds 6M, it is still recommended to split it.
	- 用户体系方面，官方已经提供uni-id-co云对象，再搭配clientDB，常规业务就够了。有特殊需求可以再适度补若干云对象。不太会发生云函数数量不足的情况。
	- In terms of user system, the official uni-id-co cloud object has been provided, and with clientDB, conventional business is enough. If there are special needs, some cloud objects can be added moderately. It is unlikely that the number of cloud functions will be insufficient.
4. 必要时可以使用多个服务空间，跨服务空间使用
4. Multiple service spaces can be used when necessary, and can be used across service spaces

## cloudfunctions_init（已废弃）
## cloudfunctions_init (deprecated)

`HBuilderX 2.9`版本，`uniCloud`提供了`cloudfunctions_init.json`来方便开发者快速进行云函数的初始化操作。
`HBuilderX 2.9` version, `uniCloud` provides `cloudfunctions_init.json` to facilitate developers to quickly initialize cloud functions.

**注意：HBuilderX 3.0.0版本起不再使用cloudfunctions_init.json来初始化云函数。改为使用在云函数目录下通过package.json进行配置，具体见上个章节**
**Note: HBuilderX version 3.0.0 no longer uses cloudfunctions_init.json to initialize cloud functions. Instead, configure it through package.json in the cloud function directory, see the previous chapter for details**

详细调整如下：
The detailed adjustments are as follows:

不再使用cloudfunctions_init.json，内容被分散到每个云函数的package.json的`cloudfunction-config`字段下
Cloudfunctions_init.json is no longer used, and the content is distributed to the `cloudfunction-config` field of each cloud function's package.json

package.json是一个标准json文件，不可带注释。下面是一个package.json示例
package.json is a standard json file and cannot be commented. Below is an example package.json

```json
{
  "name": "add-article",
  "version": "1.0.0",
  "description": "新增文章",
  "main": "index.js",
  "dependencies": {
    
  },
  "cloudfunction-config": {
      "memorySize": 256,
      "timeout": 5,
      "triggers": [{
          "name": "myTrigger",
          "type": "timer",
          "config": "0 0 2 1 * * *"
      }],
      "path": ""
    }
}
```

cloudfunction-config说明如下
The description of cloudfunction-config is as follows

```js
{
  "memorySize": 256, // 函数的最大可用内存，单位MB，可选值： 128|256|512|1024|2048，默认值256，阿里云正式版默认512
  "timeout": 5, // 函数的超时时间，单位秒，默认值5。最长为60秒，阿里云在定时触发时最长可以是600秒
  // triggers 字段是触发器数组，目前仅支持一个触发器，即数组只能填写一个，不可添加多个
  // The triggers field is an array of triggers. Currently, only one trigger is supported, that is, only one array can be filled in, and multiple ones cannot be added
  "triggers": [{
      // name: 触发器的名字，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger，name不对阿里云生效
      // name: The name of the trigger, see https://uniapp.dcloud.net.cn/uniCloud/trigger for the rules, name does not take effect for Alibaba Cloud
      "name": "myTrigger",
      // type: 触发器类型，目前仅支持 timer (即 定时触发器)，type不对阿里云生效
      // type: trigger type, currently only supports timer (i.e. timing trigger), type does not take effect for Alibaba Cloud
      "type": "timer",
      // config: 触发器配置，在定时触发器下，config 格式为 cron 表达式，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger。使用阿里云时会自动忽略最后一位，即代表年份的一位在阿里云不生效
      // config: trigger configuration, under the timing trigger, the config format is a cron expression, see https://uniapp.dcloud.net.cn/uniCloud/trigger for the rules. When using Alibaba Cloud, the last digit will be automatically ignored, that is, the digit representing the year will not take effect in Alibaba Cloud
      "config": "0 0 2 1 * * *"
  }],
  // 云函数Url化path部分
  "path": ""
}
```

**HBuilderX 3.0.0之前版本，请继续阅读下面文档**
**For versions before HBuilderX 3.0.0, please continue to read the following documents**

**使用方式**
**How to use**
- 在`cloudfucntions`目录右键即可创建`cloudfunctions_init.json`，
- Right click on the `cloudfucntions` directory to create `cloudfunctions_init.json`,
- 编写好json内容，在`cloudfunctions_init.json`上右键初始化云函数配置。
- After writing the json content, right-click on `cloudfunctions_init.json` to initialize the cloud function configuration.

**cloudfunctions_init.json形式如下**
**cloudfunctions_init.json format is as follows**

```json
{
    "fun-name": { // 云函数名称
        "memorySize": 256, // 函数的最大可用内存，单位MB，可选值： 128|256|512|1024|2048，默认值256，阿里云正式版默认512
        "timeout": 5, // 函数的超时时间，单位秒，默认值5。
        // triggers 字段是触发器数组，目前仅支持一个触发器，即数组只能填写一个，不可添加多个
        // The triggers field is an array of triggers. Currently, only one trigger is supported, that is, only one array can be filled in, and multiple ones cannot be added
        "triggers": [{
            // name: 触发器的名字，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger，name不对阿里云生效
            // name: The name of the trigger, see https://uniapp.dcloud.net.cn/uniCloud/trigger for the rules, name does not take effect for Alibaba Cloud
            "name": "myTrigger",
            // type: 触发器类型，目前仅支持 timer (即 定时触发器)，type不对阿里云生效
            // type: trigger type, currently only supports timer (i.e. timing trigger), type does not take effect for Alibaba Cloud
            "type": "timer",
            // config: 触发器配置，在定时触发器下，config 格式为 cron 表达式，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger。使用阿里云时会自动忽略最后一位，即代表年份的一位在阿里云不生效
            // config: trigger configuration, under the timing trigger, the config format is a cron expression, see https://uniapp.dcloud.net.cn/uniCloud/trigger for the rules. When using Alibaba Cloud, the last digit will be automatically ignored, that is, the digit representing the year will not take effect in Alibaba Cloud
            "config": "0 0 2 1 * * *"
        }],
        // 云函数Url化path部分
        "path": ""
    }
}

```
