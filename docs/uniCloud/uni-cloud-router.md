# uni-cloud-router

> 基于 koa 风格的 uniCloud 云函数路由库，同时支持 uniCloud 客户端及 URL 化访问
> UniCloud cloud function routing library based on koa style, supports both uniCloud client and URL access

源码仓库：[https://gitee.com/dcloud/uni-cloud-router](https://gitee.com/dcloud/uni-cloud-router)
Source code repository: [https://gitee.com/dcloud/uni-cloud-router](https://gitee.com/dcloud/uni-cloud-router)

## 云函数端
## Cloud function side

### 安装
### Install

**从插件市场导入**
**Imported from Plugin Market**

1. 访问插件市场[uni-cloud-router](https://ext.dcloud.net.cn/plugin?id=3660)，点击右侧使用HBuilderX导入插件
1. Visit the plugin market [uni-cloud-router](https://ext.dcloud.net.cn/plugin?id=3660), click on the right to import the plugin using HBuilderX
2. 在要使用uni-cloud-router的云函数目录（例：uniCloud/cloudfunctions/router）右键点击`管理公共模块依赖`，选择uni-cloud-router并确定
2. Right-click `Manage Common Module Dependencies` in the cloud function directory where you want to use uni-cloud-router (for example: uniCloud/cloudfunctions/router), select uni-cloud-router and confirm

**使用npm安装**
**Install using npm**

```bash
npm install --save uni-cloud-router
```

## 介绍
## introduce

### 目录结构
### Directory Structure

```bash
├── package.json
├── index.js // 云函数入口文件
├── config.js // 用于配置 router 应用根目录、中间件等
├── controller // 用于解析用户的输入，处理后返回相应的结果
|   ├── user.js
├── service (可选) //用于编写业务逻辑层，建议使用
|   ├── user.js
```

### 快速开始
### Quick start

为了快速上手，提供了一个简单的 demo 示例，以创建是一个 `hello-uni-cloud-router` 云函数为例，演示如何通过 `uni-cloud-router` 组织代码：
In order to get started quickly, a simple demo example is provided, taking creating a `hello-uni-cloud-router` cloud function as an example, to demonstrate how to organize code through `uni-cloud-router`:

**1.添加入口文件**
**1. Add entry file**

```js
// index.js (通常无需改动)做
// index.js (usually without changes) do
const Router = require("uni-cloud-router").Router; // 引入 Router
const router = new Router(require("./config.js")); // 根据 config 初始化 Router
exports.main = async (event, context) => {
  return router.serve(event, context); // 由 Router 接管云函数
};
```

**2.添加配置文件**
**2. Add configuration file**

```js
// config.js
module.exports = {
  debug: true, // 调试模式时，将返回 stack 错误堆栈
  baseDir: __dirname, // 必选，应用根目录
  middleware: [], // 自定义中间件
};
```

**3.在 controller 文件夹下创建一个 hello.js**
**3. Create a hello.js in the controller folder**

创建一个 controller
create a controller

```js
const { Controller } = require("uni-cloud-router");
module.exports = class HelloController extends Controller {
  sayHello() {
    return this.service.hello.sayHello();
  }
};
```

**4.在 service 文件夹下创建一个 hello.js**
**4. Create a hello.js in the service folder**

创建一个 service
create a service

```js
const { Service } = require("uni-cloud-router");
module.exports = class HelloService extends Service {
  sayHello() {
    return {
      data: "welcome to uni-cloud-router!",
    };
  }
};
```

到这里，已创建好了是一个 `hello-uni-cloud-router` 云函数（注意：需上传云函数后，前端才能访问)。
At this point, a `hello-uni-cloud-router` cloud function has been created (note: the front-end can only be accessed after uploading the cloud function).

**5.在页面里调用云函数**
**5. Call the cloud function in the page**

在页面中通过callFunction访问 hello（controller）下 sayHello：
In the page, access sayHello under hello (controller) through callFunction:

```js
sayHello() {
  uniCloud.callFunction({
		name: 'hello-uni-cloud-router',
		data: {
			action: 'hello/sayHello',
			data: {}
		}
  })
  .then(res => {
    this.title = res.data
  });
}
```

以上代码仅作为示例，建议点击右侧【使用 HBuilderX 导入示例项目】尝试。
The above code is only an example, it is recommended to click [Import sample project using HBuilderX] on the right to try.

## 深入学习
## Deep learning

### 控制器（Controller）
### Controller

负责解析用户的输入，处理后返回相应的结果。
It is responsible for parsing the user's input and returning the corresponding result after processing.

推荐 Controller 层主要对用户的请求参数进行处理（校验、转换），然后调用对应的 service 方法处理业务，得到业务结果后封装并返回：
It is recommended that the Controller layer mainly process (check and convert) the user's request parameters, and then call the corresponding service method to process the business, encapsulate and return the business result after obtaining the business result:

1. 获取用户传递过来的请求参数。
1. Get the request parameters passed by the user.
2. 校验、组装参数。
2. Check and assemble parameters.
3. 调用 Service 进行业务处理，必要时处理转换 Service 的返回结果，让它适应用户的需求。
3. Call the Service for business processing, and if necessary, process and convert the returned result of the Service to adapt it to the needs of the user.
4. 将结果响应给用户。
4. Respond to the user with the result.

#### 如何编写 Controller
#### How to write Controller

所有的 Controller 文件都必须放在 `controller` 目录下，可以支持多级目录，访问的时候可以通过目录名级联访问。
All Controller files must be placed in the `controller` directory, which can support multi-level directories, and can be accessed by cascading directory names when accessing.

```js
// controller/post.js
const Controller = require("uni-cloud-router").Controller;
// 必须继承 Controller 类
// Must inherit from Controller class
module.exports = class PostController extends Controller {
  async create() {
    const { ctx, service } = this;
    // 校验参数，注意：uni-cloud-router本身不包含validate方法，此方法需要由用户自行实现建议在中间件挂载
    // Verify parameters, note: uni-cloud-router itself does not contain a validate method, this method needs to be implemented by the user. It is recommended to mount it in the middleware
    ctx.validate({
      title: { type: "string" },
      content: { type: "string" },
    });
    // 组装参数，ctx.auth.uid是由用户自己的auth中间件挂载到ctx上的
    // Assembly parameters, ctx.auth.uid is mounted on ctx by the user's own auth middleware
    const author = ctx.auth.uid;
    const post = Object.assign(ctx.data, { author });
    // 调用 Service 进行业务处理
    // Call Service for business processing
    return service.post.create(post);
  }
};
```

定义的 Controller 类，会在每一个请求访问时实例化一个全新的对象，会有下面几个属性挂在 `this` 上。
The defined Controller class will instantiate a brand new object every time an access request is made, and the following properties will be attached to `this`.

- `this.ctx`：当前请求的上下文对象的实例，通过它我们可以拿到各种便捷属性和方法。
- `this.ctx`: The instance of the context object of the current request, through which we can get various convenient properties and methods.
- `this.service`：应用定义的 service，通过它我们可以访问到抽象出的业务层，等同于 `this.ctx.service`。
- `this.service`: The service defined by the application, through which we can access the abstracted business layer, which is equivalent to `this.ctx.service`.
- `this.db`：等同于 `uniCloud.database()`。
- `this.db`: equivalent to `uniCloud.database()`.
- `this.curl`：等同于 `uniCloud.httpclient.request`。
- `this.curl`: equivalent to `uniCloud.httpclient.request`.
- `this.throw`：抛出异常信息，等同于 `this.ctx.throw`。
- `this.throw`: throw exception information, equivalent to `this.ctx.throw`.

#### 获取请求参数
#### Get request parameters

通过在 Controller 上绑定的 Context 实例的 data 属性，获取请求发送过来的参数
Obtain the parameters sent by the request through the data attribute of the Context instance bound on the Controller

```js
class PostController extends Controller {
  async listPosts() {
    const data = this.ctx.data;
    // {
    //   username: 'demo',
    //   password: 'demo',
    // }
  }
}
```

#### 调用 Service
#### call Service

通过 Service 层进行业务逻辑的封装，不仅能提高代码的复用性，同时可以让业务逻辑更好测试。
The encapsulation of business logic through the Service layer can not only improve the reusability of the code, but also allow the business logic to be better tested.

Controller 中可以调用任何一个 Service 上的任何方法，同时 Service 是懒加载的，只有当访问到它的时候才会去实例化它。
The Controller can call any method on any Service, and the Service is lazy loaded, and it will be instantiated only when it is accessed.

```js
class PostController extends Controller {
  async create() {
    const { ctx, service } = this;
    const author = ctx.auth.uid;
    const post = Object.assign(ctx.data, { author });
    // 调用 service 进行业务处理
    // Call service for business processing
    return service.post.create(post);
  }
}
```

Service 的具体写法，请查看 [Service](#服务service) 章节。
For the specific writing of Service, please refer to the [Service](#%E6%9C%8D%E5%8A%A1service) chapter.

#### 定制 URL 化返回的状态码
#### Customize the status code returned by URLization

```js
class PostController extends Controller {
  async create() {
    // 设置状态码为 201
    // set the status code to 201
    this.ctx.status = 201; // 仅当使用 HTTP/HTTPS 请求时生效
  }
}
```

#### 定制 URL 化返回响应头
#### Customized URL-based response headers

```js
class PostController extends Controller {
  async create() {
    this.ctx.headers = {
			'location': 'http://www.baidu.com'
		}
  }
}
```

**注意**
**Notice**

- 响应头内各个字段请使用全小写，例：'Content-Type' ×，'content-type' √
- Please use all lowercase for each field in the response header, for example: 'Content-Type' ×, 'content-type' √

#### URL 化返回响应体@url-binary
#### URLized return response body @url-binary

```js
// 返回javascript内容
// return javascript content
class GetController extends Controller {
  async create() {
    ctx.headers = {'content-type':'application/javascript'}
    ctx.body = 'console.log("abc")'
  }
}
```

```js
// 返回图片
// return image
class GetController extends Controller {
  async create() {
    ctx.isBase64Encoded = true
    ctx.headers = {'content-type': 'image/png'}
    ctx.body = '图片Buffer对应的base64内容'
  }
}
```

### Cookie的使用
### Use of cookies

在某些场景下，cookie依然占有重要地位，例如在云函数URL化的情况下，获取客户端的状态
In some scenarios, cookies still play an important role, for example, in the case of URLization of cloud functions, to obtain the status of the client

在云函数中使用cookie需要依赖cookie库[npm页面地址](http://https://www.npmjs.com/package/cookie)，可以通过`npm install cookie` 安装
Using cookies in cloud functions needs to rely on the cookie library [npm page address](http://https://www.npmjs.com/package/cookie), which can be installed through `npm install cookie`

```js
'use strict';

//引入cookie
//Introduce cookies
const cookie = require('cookie')

module.exports = class Instance extends Controller 
{
    async foo(ctx)
    {
	//event为客户端上传的参数
	//event is the parameter uploaded by the client
	//如果客户端有cookie，则cookie回随请求携带至服务端，放置在ctx.event.headers.cookie中,假设 cookie为“[jwt=自加密base64; app=uniCloud]”
	//If the client has a cookie, the cookie will be carried to the server with the request and placed in ctx.event.headers.cookie, assuming the cookie is "[jwt=self-encrypting base64; app=uniCloud]"
	console.log('event : ', ctx.event)
    
        //解析cookie
        //parse the cookie
        const cookieData = cookie.parse( ctx.event.headers.cookie||'' )
        console.log(cookieData)//输出结果为：{jwt:"自加密base64", app:"uniCloud" }

        //设置cookie到客户端
        //Set the cookie to the client

        const cookieOptions = {
            //具体参数请查阅 https://www.npmjs.com/package/cookie
            //Please refer to https://www.npmjs.com/package/cookie for specific parameters
            maxAge: 60 * 60 * 24 * 7,//一周
            path:"/"
        }
        const setCookieData = cookie.serialize('app', 'appName', cookieOptions)
        ctx.headers['set-cookie'] = setCookieData
        

        //...其他操作
        //...other operations
    }
	
};

```


### 服务（Service）
### Service

业务逻辑封装的一个抽象层，有以下几个好处：
An abstraction layer for business logic encapsulation, which has the following benefits:

- 保持 Controller 中的逻辑更加简洁。
- Keep logic in Controller more concise.
- 保持业务逻辑的独立性，抽象出来的 Service 可以被多个 Controller 重复调用。
- To maintain the independence of business logic, the abstracted Service can be called repeatedly by multiple Controllers.
- 将逻辑和展现分离，更容易编写测试用例。
- Separation of logic and presentation makes it easier to write test cases.

#### 使用场景
#### scenes to be used

- 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
- Processing of complex data, for example, the information to be displayed needs to be obtained from the database, and must be calculated by certain rules before it can be returned to the user for display. Or after the calculation is completed, update to the database.
- 第三方服务的调用，比如 微信模板消息推送 等。
- Invocation of third-party services, such as WeChat template message push, etc.

#### 如何编写 Service
#### How to write Service

所有的 Service 文件都必须放在 `service` 目录下，可以支持多级目录，访问的时候可以通过目录名级联访问。
All Service files must be placed in the `service` directory, which can support multi-level directories, and can be accessed by cascading directory names when accessing.

```js
// service/post.js
const Service = require("uni-cloud-router").Service;
// 必须继承 Service
// must inherit from Service
module.exports = class PostService extends Service {
  async create(data) {
    return this.db.add(data);
  }
};
```

定义的 Service 类是懒加载的，只有当访问到它的时候才会去实例化它，会有下面几个属性挂在 `this` 上。
The defined Service class is lazy loaded, it will be instantiated only when it is accessed, and there will be the following properties hanging on `this`.

- `this.ctx`：当前请求的上下文对象的实例，通过它我们可以拿到各种便捷属性和方法。
- `this.ctx`: The instance of the context object of the current request, through which we can get various convenient properties and methods.
- `this.service`：应用定义的 service，通过它我们可以访问到抽象出的业务层，等同于 `this.ctx.service`。
- `this.service`: The service defined by the application, through which we can access the abstracted business layer, which is equivalent to `this.ctx.service`.
- `this.db`：等同于 `uniCloud.database()`。
- `this.db`: equivalent to `uniCloud.database()`.
- `this.curl`：等同于 `uniCloud.httpclient.request`。
- `this.curl`: equivalent to `uniCloud.httpclient.request`.
- `this.throw`：抛出异常信息，等同于 `this.ctx.throw`。
- `this.throw`: throw exception information, equivalent to `this.ctx.throw`.

#### 使用 Service
#### Using Service

[在 Controller 中调用 Service](#调用-service)
[Calling Service in Controller](#%E8%B0%83%E7%94%A8-service)

### 中间件（Middleware）
### Middleware

在路由请求前，后添加处理逻辑，实现一些特定功能，如：用户登录，权限校验等
Add processing logic before and after routing requests to implement some specific functions, such as: user login, permission verification, etc.

#### 开发中间件
#### Development middleware

与 koa 保持一致，参考：[koa 中间件](https://demopark.github.io/koa-docs-Zh-CN/guide.html)
Consistent with koa, reference: [koa middleware](https://demopark.github.io/koa-docs-Zh-CN/guide.html)

```js
// middleware/auth.js
const uniID = require("uni-id");
module.exports = () => {
  // 返回中间件函数
  // return middleware function
  return async function auth(ctx, next) {
    // 校验 token
    // check token
    const auth = await uniID.checkToken(ctx.event.uniIdToken);
    if (auth.code) {
      // 校验失败，抛出错误信息
      // Failed to verify, throw error message
      throw { code: auth.code, message: auth.message };
    }
    ctx.auth = auth; // 设置当前请求的 auth 对象
    await next(); // 执行后续中间件
  };
};
```

示例：
Example:

- [云函数URL化 中间件](https://github.com/fxy060608/uni-cloud-router/blob/master/src/middleware/http/index.ts)
- [ip拦截中间件](https://ext.dcloud.net.cn/plugin?id=4619)
- [ip interception middleware](https://ext.dcloud.net.cn/plugin?id=4619)

#### 使用中间件
#### Using middleware

1. 通过 config.js 配置
1. Configure via config.js

```js
const auth = require('./middleware/auth.js') // 引入 auth 中间件
module.exports = {
  debug: true, // 调试模式时，将返回 stack 错误堆栈
  baseDir: __dirname, // 指定应用根目录
  middleware: [
    [
      //数组格式，第一个元素为中间件，第二个元素为中间件生效规则配置
      //Array format, the first element is the middleware, and the second element is the middleware effective rule configuration
      auth(), // 注册中间件
      { enable: true, ignore: /\/login$/ }, // 配置当前中间件生效规则，该规则表示以`/login`结尾的路由不会执行 auth 中间件校验 token
    ],
  ],
}
```

2. 中间件配置项
2. Middleware configuration items

- enable 控制中间件是否开启。
- enable controls whether the middleware is enabled.
- match 设置只有符合某些规则的请求才会经过这个中间件。
- match Set only requests that match certain rules will go through this middleware.

  支持类型：
  Support type:

  - 字符串：当参数为字符串类型时，配置的是一个 action 前缀，所有以该字符串作为前缀的 action 都会匹配上。
  - String: When the parameter is a string type, an action prefix is configured, and all actions prefixed with this string will match.
  - 正则：当参数为正则时，直接匹配满足正则验证的 action。
  - Regular: When the parameter is regular, directly match the action that satisfies the regular verification.
  - 函数：当参数为一个函数时，会将请求上下文传递给这个函数，根据函数结果（true/false）来判断是否匹配。
  - Function: When the parameter is a function, the request context will be passed to the function, and the match will be determined according to the function result (true/false).
  - 数组：可以由字符串，正则，函数组成，任意一个匹配到即可
  - Array: It can be composed of strings, regular expressions, and functions, and any one of them can be matched

- ignore 设置符合某些规则的请求不经过这个中间件。
- ignore Set requests that match certain rules to not go through this middleware.

  支持类型：同 match
  Support type: same as match

### Context

Context 是一个请求级别的对象，在每一次收到用户请求时，会实例化一个 Context 对象，这个对象封装了这次用户请求的信息，并提供了许多便捷的方法来获取请求参数或者设置响应信息。框架会将所有的 Service 挂载到 Context 实例上
Context is a request-level object. Every time a user request is received, a Context object will be instantiated. This object encapsulates the information requested by the user and provides many convenient methods to obtain request parameters or set response information. . The framework will mount all Services to the Context instance

#### 获取方式
#### method of obtaining

最常见的 Context 实例获取方式是在 [Middleware](#中间件middleware), [Controller](#控制器controller) 以及 [Service](#服务service) 中。
The most common way to get Context instance is in [Middleware](#%E4%B8%AD%E9%97%B4%E4%BB%B6middleware), [Controller](#%E6%8E%A7%E5%88% B6%E5%99%A8controller) and [Service](#%E6%9C%8D%E5%8A%A1service).

```js
// 在 Controller 中通过 this.ctx 获取 Context 实例
// Get the Context instance through this.ctx in the Controller
module.exports = class UserController extends Controller {
  async login() {
    const data = this.ctx.data // 从 Context 实例上获取请求参数
  }
}
```

```js
// 在 Service 中通过 this.ctx 获取 Context 实例
// Get the Context instance in Service through this.ctx
module.exports = class PostService extends Service {
  async create(data) {
    const auth = this.ctx.auth // 从 Context 实例上获取 auth(需要启用 uni-id 中间件)
  }
}
```

```js
// 在 Middleware 中通过 ctx 参数获取 Context 实例
// Get the Context instance through the ctx parameter in Middleware
module.exports = (options) => {
  // 返回中间件函数
  // return middleware function
  return async function auth(ctx, next) {
    const data = ctx.data // 从 Context 实例上获取请求参数
    await next()
  }
}
```

### 客户端使用云函数@use-in-client
### Client uses cloud functions @use-in-client

#### 发送请求
#### send request

```js
// 使用 uniCloud 访问
// use uniCloud access
uniCloud.callFunction({
  name: 'router', // 要调用的云函数名称
  data: {
    action: 'user/login', // 路由地址，对应 controller 下 user.js 的 login 方法
    // 参数列表
    // parameter list
    data: {
      // controller 通过 this.ctx.data 获取
      // controller gets through this.ctx.data
      username: 'demo',
      password: 'demo',
    },
  },
})
```

```js
// 使用 URL 化 request 访问
// use URLized request access
uni.request({
  url: 'xxxxx/router/user/login', // 路由地址，对应 controller 下 user.js 的 login 方法
  data: {
    // controller 通过 this.ctx.data 获取
    // controller gets through this.ctx.data
    username: 'demo',
    password: 'demo',
  },
})
```

#### 返回结果
#### return result

```js
{
  "code": "", // 异常 code，如："INVOKE_FUNCTION_FAILED"
  "message": "", // 异常信息
  "stack": "" // 当 config.js 中配置 debug 为 true 时，返回发生异常的堆栈信息
  // 其他信息
  // other information
}
```

