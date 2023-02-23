# 什么是跨域
# What is cross domain
跨域是浏览器的专用概念，指js代码访问自己来源站点之外的站点。比如A站点网页中的js代码，请求了B站点的数据，就是跨域。
Cross-domain is a browser-specific concept, which means that js code accesses sites other than its own origin site. For example, the js code in the webpage of site A requests the data of site B, which is cross-domain.
A和B要想被认为是同域，则必须有相同的协议（比如http和https就不行）、相同域名、和相同端口号（port）。
For A and B to be considered the same domain, they must have the same protocol (such as http and https not), the same domain name, and the same port number (port).

如果你是做App、小程序等非H5平台，是不涉及跨域问题的。
If you are working on non-H5 platforms such as apps and small programs, cross-domain issues are not involved.
稍微例外的是iOS的wkWebview，在5+App，或uni-app的web-view组件及renderjs中，由于WKWebview限制也会产生跨域，这方面另见专题文章：[https://ask.dcloud.net.cn/article/36348](https://ask.dcloud.net.cn/article/36348)。uni-app在App的普通js代码不运行在Webview下，不存在跨域问题。
A slight exception is wkWebview of iOS. In 5+App, or the web-view component of uni-app and renderjs, cross-domain will also occur due to the limitation of WKWebview. See also the special article in this regard: [https://ask.dcloud .net.cn/article/36348](https://ask.dcloud.net.cn/article/36348). The ordinary js code of uni-app in the App does not run under the Webview, and there is no cross-domain problem.

由于uni-app是标准的前后端分离模式，开发h5应用时如果前端代码和后端接口没有部署在同域服务器，就会被浏览器报跨域。
Since uni-app is a standard front-end and back-end separation mode, if the front-end code and back-end interface are not deployed on the same domain server when developing h5 applications, they will be reported by the browser to cross domains.

# 如果前端要callfunction连接unicloud云函数
# If the front end wants to call function to connect to unicloud cloud function

在h5页面里callfunction会跨域，此时需在unicloud的web控制台配置域名白名单，被加白的域名可以跨域callfunction。详见：[https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)
In the h5 page, the call function will be cross-domain. At this time, you need to configure the domain name whitelist in the web console of unicloud. The whitened domain name can be cross-domain call function. For details, see: [https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)

另外运行期间在HBuilderX的内置浏览器里是不存在跨域的。
In addition, there is no cross-domain in the built-in browser of HBuilderX during operation.

# 如果前端要连接传统后台服务器
# If the front end wants to connect to the traditional backend server

分部署时的跨域方案和调试时的跨域方案，具体见下：
The cross-domain solution during deployment and the cross-domain solution during debugging are as follows:

## 部署时的跨域解决方案
## Cross domain solution when deploying

- 方案1：最利索的，当然还是将前端代码和后端接口部署在同域的web服务器上
- Option 1: The most agile, of course, is to deploy the front-end code and back-end interface on the web server of the same domain
- 方案2：由后台服务器配置策略，设为允许跨域访问。
- Option 2: The background server configures the policy to allow cross-domain access.

例如：前端页面部署在uniCloud的前端页面托管里，但是需要访问自己服务器的接口，这时候需要在服务端允许前端页面托管的域名跨域访问。不同的服务端框架允许跨域的配置不一样，这里不再一一列举仅以eggjs为例。
For example, the front-end page is deployed in the front-end page hosting of uniCloud, but it needs to access the interface of its own server. At this time, it is necessary to allow cross-domain access of the domain name hosted by the front-end page on the server side. Different server-side frameworks allow different cross-domain configurations. We will not list them one by one here, but only take eggjs as an example.

（1）安装egg-cors包
(1) Install the egg-cors package

```shell
npm i egg-cors --save
```

（2）在plugin.js中设置开启cors
(2) Set up cors in plugin.js

```js
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
```

（3）在config.default.js中配置
(3) Configure in config.default.js

```js
config.security = {
  domainWhiteList: [ '前端网页托管的域名' ],
};
```

## 调试时的跨域解决方案
## Cross domain solution when debugging
前端工程师调试时，运行起来的前端代码在uni-app自带的web服务器中，而不是部署在后台业务服务器上，此时就会遇到跨域。
When the front-end engineer is debugging, the front-end code that runs is in the web server that comes with the uni-app, instead of being deployed on the back-end business server. At this time, cross-domain will be encountered.
除了协调后端配置允许跨域，其实也可以自己解决跨域问题。共3种方案可选。
In addition to coordinating the back-end configuration to allow cross-domain, you can actually solve the cross-domain problem yourself. A total of 3 options are available.

### 方案1 使用HBuilderX内置浏览器
### Option 1 Use HBuilderX built-in browser

这个内置浏览器经过官方处理，不存在跨域问题，简单易用，推荐使用。（需HBuilderX 2.6以上）
This built-in browser has been officially processed, there is no cross-domain problem, it is easy to use, and it is recommended to use. (Requires HBuilderX 2.6 or above)
在打开页面后，点HBuilderX右上角的预览，即可打开内部浏览器。或者在运行菜单里选择运行到内置浏览器也可以。
![](https://ask.dcloud.net.cn/uploads/article/20190721/601e3f94838c1623afe0c42a2355136c.png)

### 方案2 配置webpack-dev-server代理
### Scheme 2 Configure webpack-dev-server proxy
下面是一篇比uni官网文档更详细的配置指南，这里就直接贴地址了：[https://juejin.im/post/5e43b2645188254902765766](https://juejin.im/post/5e43b2645188254902765766)
The following is a more detailed configuration guide than the uni official website document. The address is directly posted here: [https://juejin.im/post/5e43b2645188254902765766](https://juejin.im/post/5e43b2645188254902765766)

### 方案3 给浏览器安装跨域插件，禁止浏览器报跨域
### Option 3 Install a cross-domain plug-in for the browser to prohibit the browser from reporting cross-domain

> 本插件并非万能，请仔细阅读与学习浏览器安全策略相关知识，不懂这些知识在评论里瞎喷的，官方不会回复。
> This plug-in is not a panacea, please read and learn the relevant knowledge of browser security policy carefully. If you don’t understand this knowledge and spray it in the comments, the official will not reply.

当我们使用谷歌浏览器调试ajax请求的时候可能会遇到这两个问题：
When we use Google Chrome to debug ajax requests, we may encounter these two problems:

* 跨域资源共享 详见：[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* Cross-domain resource sharing See: [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* 跨源读取阻塞 详见：[CORB](https://www.chromestatus.com/feature/5629709824032768)
* Cross-origin read blocking See: [CORB](https://www.chromestatus.com/feature/5629709824032768)

最常见的就是关于**跨域资源共享**的问题，也就是我们通常说的跨域。当我们本地服务器预览页面，使用ajax访问远程服务器的内容时就会请求失败，比如：本地预览的地址是：http://localhost:8080/，访问的接口地址是http://dcloud.io/api。
The most common one is about **cross-domain resource sharing**, which is what we usually call cross-domain. When we preview the page on the local server and use ajax to access the content of the remote server, the request will fail. For example, the address of the local preview is: http://localhost:8080/, and the interface address of the access is http://dcloud.io/ api.

如果仅仅是为了本地预览，可以使用Chrome浏览器插件来协助调试。
For local preview only, a Chrome browser plugin can be used to assist with debugging.
**!!!** 本插件只能解决**简单请求**的跨域调试（[点击搜索什么是简单请求](https://www.baidu.com/s?wd=%E7%AE%80%E5%8D%95%E8%AF%B7%E6%B1%82&tn=84053098_3_dg&ie=utf-8)）。对于非简单请求的OPTION预检（[点击搜索什么是预检请求](https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=84053098_3_dg&wd=%E9%A2%84%E6%A3%80%E8%AF%B7%E6%B1%82&oq=OPTION%25E9%25A2%2584%25E6%25A3%2580&rsv_pq=a0831c7c0000a93c&rsv_t=0313nBZdJJqdOJUR7zNSs%2BMXe8O6I0B9hizxu4eiVIV%2BBy5DUc%2FsouJj%2BQH2dyTBn%2BfLQg&rqlang=cn&rsv_enter=1&inputT=2653&rsv_sug3=3&rsv_sug1=2&rsv_sug7=100&rsv_sug2=1&prefixsug=%25E9%25A2%2584%25E6%25A3%2580&rsp=1&rsv_sug4=2654)）以及线上服务器也有跨域需求的用户，可以[服务端配合解决](https://www.baidu.com/s?wd=%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%B7%A8%E5%9F%9F&tn=84053098_3_dg&ie=utf-8)。
**!!!** This plugin can only solve the cross-domain debugging of **simple request** ([click to search what is a simple request](https://www.baidu.com/s?wd=%E7%AE %80%E5%8D%95%E8%AF%B7%E6%B1%82&tn=84053098_3_dg&ie=utf-8)). OPTION preflight for non-simple requests ([click to search what is a preflight request](https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=84053098_3_dg&wd=%E9%A2%84% E6%A3%80%E8%AF%B7%E6%B1%82&oq=OPTION%25E9%25A2%2584%25E6%25A3%2580&rsv_pq=a0831c7c0000a93c&rsv_t=0313nBZdJJqdOJUR7zNSs%2BMXe8O6I0B9hizxu4eiVIV%2BBy5DUc%2FsouJj%2BQH2dyTBn%2BfLQg&rqlang=cn&rsv_enter=1&inputT= 2653&rsv_sug3=3&rsv_sug1=2&rsv_sug7=100&rsv_sug2=1&prefixsug=%25E9%25A2%2584%25E6%25A3%2580&rsp=1&rsv_sug4=2654)) and users who also have cross-domain requirements on the online server can [the server cooperate to solve](https:/ /www.baidu.com/s?wd=%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%B7%A8%E5%9F%9F&tn=84053098_3_dg&ie=utf-8).

#### Chrome插件名称：Allow-Control-Allow-Origin: *
#### Chrome plugin name: Allow-Control-Allow-Origin: *

#### 安装方式：
#### Installation method:
- 在线安装
- Online installation
>使用谷歌浏览器直接打开插件地址[https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)安装即可
> Directly open the plugin address using Google Chrome [https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi](https://chrome.google.com/webstore/detail/allow -control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) can be installed
- 离线安装
- Offline installation
  >国内用户如果无法在线安装，可在本页面底部下载附件，离线安装
  >If domestic users cannot install online, they can download the attachment at the bottom of this page and install offline
  1. 下载得到:Allow-Control-Allow-Origin.crx
  1. Download: Allow-Control-Allow-Origin.crx
  2. 点击浏览器右上角的菜单按钮打开谷歌浏览器的扩展管理页面
  2. Click the menu button in the upper right corner of the browser to open the extension management page of Google Chrome
  3. 将下载的扩展插件拖入扩展管理页面
  3. Drag the downloaded extension into the extension management page

  ![](https://ask.dcloud.net.cn/uploads/article/20181120/29a90981041d78630895a124b123254d.png)

  ![](https://ask.dcloud.net.cn/uploads/article/20181120/c706b1b4247f8e14862c86040348d832.png)


#### 使用方式
#### How to use
1. 打开待调试的页面
1. Open the page to be debugged
2. 在扩展栏目找到安装的插件，点击打开插件配置
2. Find the installed plug-in in the extension column, click to open the plug-in configuration
3. 输入想要进行跨域调试的接口的地址，点击添加即可
3. Enter the address of the interface you want to perform cross-domain debugging, and click Add.

#### 注意事项
#### Precautions
* 此插件适合本地调试使用，线上部署如果和接口不同域还需要服务端配合。
* This plug-in is suitable for local debugging. If the online deployment is in a different domain from the interface, the server needs to cooperate.
* 如果实际响应的内容与浏览器预期的内容有差异还可能被[CORB](https://www.chromestatus.com/feature/5629709824032768)策略所阻止。
* If the content of the actual response is different from the content expected by the browser, it may also be blocked by the [CORB](https://www.chromestatus.com/feature/5629709824032768) policy.

#### firefox跨域插件
#### firefox cross domain plugin
[firefox跨域插件(注意firefox的css兼容问题)](https://addons.mozilla.org/zh-CN/firefox/addon/access-control-allow-origin/)
[firefox cross-domain plugin (pay attention to firefox css compatibility issues)](https://addons.mozilla.org/zh-CN/firefox/addon/access-control-allow-origin/)

## 其他历史问题
## Other historical issues
HBuilderX 2.3.0版在某些情况下会报跨域，请升级2.3.1+解决
HBuilderX version 2.3.0 will report cross-domain in some cases, please upgrade to 2.3.1+ to solve