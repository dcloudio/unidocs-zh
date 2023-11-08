云函数即在云端（服务器端）运行的函数。
Cloud functions are functions that run in the cloud (server side).

从 HBuilderX 3.4起，新增了云函数的扩展版，云对象。
From HBuilderX 3.4, an extended version of cloud functions, cloud objects, has been added.

开发者无需购买、搭建服务器，只需编写代码并部署到云端即可在客户端（App/Web/小程序等）调用，同时云函数之间也可互相调用。
Developers do not need to purchase or build a server. They only need to write code and deploy it to the cloud to call it on the client (App/Web/Applet, etc.). At the same time, cloud functions can also call each other.

一个云函数的写法与一个在本地定义的 `JavaScript` 方法无异，代码运行在云端 `Node.js` 中。当云函数被客户端调用时，定义的代码会被放在 `Node.js` 运行环境中执行。
A cloud function is written in the same way as a locally defined `JavaScript` method, and the code runs in the cloud `Node.js`. When the cloud function is called by the client, the defined code will be executed in the `Node.js` runtime environment.

开发者可以如在 `Node.js` 环境中使用 `JavaScript` 一样在云函数中进行网络请求等操作，也可以使用 node_modules。
Developers can perform network requests and other operations in cloud functions as in the `Node.js` environment using `JavaScript`, or they can use node_modules.

但 DCloud提供了 uniCloud对象 内置在云函数/云对象中，开发者使用更多的是 uniCloud 的 api，不了解 node 不影响开发。
However, DCloud provides uniCloud objects built into cloud functions/cloud objects. Developers use more of the uniCloud api. Not knowing node does not affect development.


HBuilderX 3.0起版本，在`uniCloud/cloudfunctions`目录右键创建云函数，如下：
Starting from HBuilderX 3.0, right-click in the `uniCloud/cloudfunctions` directory to create a cloud function, as follows:

<div align=center>
  <img style="max-width:750px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/createFun-a.jpg"/>
</div>

在HBuilderX 3.4起，上述界面更新为 新建云函数/云对象。
Starting from HBuilderX 3.4, the above interface is updated to create a new cloud function/cloud object.

云对象本质是对云函数的一种封装，可以对象化的方式使用云服务。
Cloud objects are essentially a kind of encapsulation of cloud functions, and cloud services can be used in an object-oriented way.

HBuilderX 3.0之前版本，项目下没有`uniCloud`目录，直接在`cloudfunctions`目录上右键、新建云函数
Before HBuilderX 3.0, there is no `uniCloud` directory under the project, directly right-click on the `cloudfunctions` directory and create a new cloud function

云函数修改后，可以本地运行。只有上传到云端，方可在云端生效。
After the cloud function is modified, it can be run locally. Only upload to the cloud to take effect in the cloud.

更多云函数介绍参考[规范](uniCloud/cf-functions)。
For more cloud function introductions, refer to [Specification](uniCloud/cf-functions).
