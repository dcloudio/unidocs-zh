# 什么是跨域
跨域是浏览器的专用概念，指js代码访问自己来源站点之外的站点。比如A站点网页中的js代码，请求了B站点的数据，就是跨域。
A和B要想被认为是同域，则必须有相同的协议（比如http和https就不行）、相同域名、和相同端口号（port）。

如果你是做App、小程序等非H5平台，是不涉及跨域问题的。
稍微例外的是iOS的wkWebview，在5+App，或uni-app的web-view组件及renderjs中，由于WKWebview限制也会产生跨域，这方面另见专题文章：[https://ask.dcloud.net.cn/article/36348](https://ask.dcloud.net.cn/article/36348)。uni-app在App的普通js代码不运行在Webview下，不存在跨域问题。

由于uni-app是标准的前后端分离模式，开发h5应用时如果前端代码和后端接口没有部署在同域服务器，就会被浏览器报跨域。

# 如果前端要callfunction连接unicloud云函数

在h5页面里callfunction会跨域，此时需在unicloud的web控制台配置域名白名单，被加白的域名可以跨域callfunction。详见：[https://doc.dcloud.net.cn/uniCloud/quickstart?id=useinh5](https://doc.dcloud.net.cn/uniCloud/quickstart?id=useinh5)

另外运行期间在HBuilderX的内置浏览器里是不存在跨域的。

# 如果前端要连接传统后台服务器

分部署时的跨域方案和调试时的跨域方案，具体见下：

## 部署时的跨域解决方案

- 方案1：最利索的，当然还是将前端代码和后端接口部署在同域的web服务器上
- 方案2：由后台服务器配置策略，设为允许跨域访问。

例如：前端页面部署在uniCloud的前端页面托管里，但是需要访问自己服务器的接口，这时候需要在服务端允许前端页面托管的域名跨域访问。不同的服务端框架允许跨域的配置不一样，这里不再一一列举仅以eggjs为例。

（1）安装egg-cors包

```shell
npm i egg-cors --save
```

（2）在plugin.js中设置开启cors

```js
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
```

（3）在config.default.js中配置

```js
config.security = {
  domainWhiteList: [ '前端网页托管的域名' ],
};
```

## 调试时的跨域解决方案
前端工程师调试时，运行起来的前端代码在uni-app自带的web服务器中，而不是部署在后台业务服务器上，此时就会遇到跨域。
除了协调后端配置允许跨域，其实也可以自己解决跨域问题。共3种方案可选。

### 方案1 使用HBuilderX内置浏览器

这个内置浏览器经过官方处理，不存在跨域问题，简单易用，推荐使用。（需HBuilderX 2.6以上）
在打开页面后，点HBuilderX右上角的预览，即可打开内部浏览器。或者在运行菜单里选择运行到内置浏览器也可以。
![](https://ask.dcloud.net.cn/uploads/article/20190721/601e3f94838c1623afe0c42a2355136c.png)

### 方案2 配置webpack-dev-server代理
下面是一篇比uni官网文档更详细的配置指南，这里就直接贴地址了：[https://juejin.im/post/5e43b2645188254902765766](https://juejin.im/post/5e43b2645188254902765766)

### 方案3 给浏览器安装跨域插件，禁止浏览器报跨域

> 本插件并非万能，请仔细阅读与学习浏览器安全策略相关知识，不懂这些知识在评论里瞎喷的，官方不会回复。

当我们使用谷歌浏览器调试ajax请求的时候可能会遇到这两个问题：

* 跨域资源共享 详见：[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* 跨源读取阻塞 详见：[CORB](https://www.chromestatus.com/feature/5629709824032768)

最常见的就是关于**跨域资源共享**的问题，也就是我们通常说的跨域。当我们本地服务器预览页面，使用ajax访问远程服务器的内容时就会请求失败，比如：本地预览的地址是：http://localhost:8080/，访问的接口地址是http://dcloud.io/api。

如果仅仅是为了本地预览，可以使用Chrome浏览器插件来协助调试。
**!!!** 本插件只能解决**简单请求**的跨域调试（[点击搜索什么是简单请求](https://www.baidu.com/s?wd=%E7%AE%80%E5%8D%95%E8%AF%B7%E6%B1%82&tn=84053098_3_dg&ie=utf-8)）。对于非简单请求的OPTION预检（[点击搜索什么是预检请求](https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=84053098_3_dg&wd=%E9%A2%84%E6%A3%80%E8%AF%B7%E6%B1%82&oq=OPTION%25E9%25A2%2584%25E6%25A3%2580&rsv_pq=a0831c7c0000a93c&rsv_t=0313nBZdJJqdOJUR7zNSs%2BMXe8O6I0B9hizxu4eiVIV%2BBy5DUc%2FsouJj%2BQH2dyTBn%2BfLQg&rqlang=cn&rsv_enter=1&inputT=2653&rsv_sug3=3&rsv_sug1=2&rsv_sug7=100&rsv_sug2=1&prefixsug=%25E9%25A2%2584%25E6%25A3%2580&rsp=1&rsv_sug4=2654)）以及线上服务器也有跨域需求的用户，可以[服务端配合解决](https://www.baidu.com/s?wd=%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%B7%A8%E5%9F%9F&tn=84053098_3_dg&ie=utf-8)。

#### Chrome插件名称：Allow-Control-Allow-Origin: *

#### 安装方式：
- 在线安装
>使用谷歌浏览器直接打开插件地址[https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)安装即可
- 离线安装
  >国内用户如果无法在线安装，可在本页面底部下载附件，离线安装
  1. 下载得到:Allow-Control-Allow-Origin.crx
  2. 点击浏览器右上角的菜单按钮打开谷歌浏览器的扩展管理页面
  3. 将下载的扩展插件拖入扩展管理页面

  ![](https://ask.dcloud.net.cn/uploads/article/20181120/29a90981041d78630895a124b123254d.png)

  ![](https://ask.dcloud.net.cn/uploads/article/20181120/c706b1b4247f8e14862c86040348d832.png)


#### 使用方式
1. 打开待调试的页面
2. 在扩展栏目找到安装的插件，点击打开插件配置
3. 输入想要进行跨域调试的接口的地址，点击添加即可

#### 注意事项
* 此插件适合本地调试使用，线上部署如果和接口不同域还需要服务端配合。
* 如果实际响应的内容与浏览器预期的内容有差异还可能被[CORB](https://www.chromestatus.com/feature/5629709824032768)策略所阻止。

#### firefox跨域插件
[firefox跨域插件(注意firefox的css兼容问题)](https://addons.mozilla.org/zh-CN/firefox/addon/access-control-allow-origin/)

## 其他历史问题
HBuilderX 2.3.0版在某些情况下会报跨域，请升级2.3.1+解决