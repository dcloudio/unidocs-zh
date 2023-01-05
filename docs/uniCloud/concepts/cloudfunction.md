云函数即在云端（服务器端）运行的函数。

从 HBuilderX 3.4起，新增了云函数的扩展版，云对象。

开发者无需购买、搭建服务器，只需编写代码并部署到云端即可在客户端（App/Web/小程序等）调用，同时云函数之间也可互相调用。

一个云函数的写法与一个在本地定义的 `JavaScript` 方法无异，代码运行在云端 `Node.js` 中。当云函数被客户端调用时，定义的代码会被放在 `Node.js` 运行环境中执行。

开发者可以如在 `Node.js` 环境中使用 `JavaScript` 一样在云函数中进行网络请求等操作，也可以使用 node_modules。

但 DCloud提供了 uniCloud对象 内置在云函数/云对象中，开发者使用更多的是 uniCloud 的 api，不了解 node 不影响开发。


HBuilderX 3.0起版本，在`uniCloud/cloudfunctions`目录右键创建云函数，如下：

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/createFun-a.jpg"/>
</div>

在HBuilderX 3.4起，上述界面更新为 新建云函数/云对象。

云对象本质是对云函数的一种封装，可以对象化的方式使用云服务。

HBuilderX 3.0之前版本，项目下没有`uniCloud`目录，直接在`cloudfunctions`目录上右键、新建云函数

云函数修改后，可以本地运行。只有上传到云端，方可在云端生效。

更多云函数介绍参考[规范](uniCloud/cf-functions)。
