#### uni-app选型评估常见问题

**uni-app 有哪些已上线的成功案例？**

uni-app是当今主流的开发框架，DCloud有800万开发者，uni统计手机端月活10亿，阿里、腾讯、字节跳动、美团、京东、vivo都在用，案例参考[uni-app 应用案例](http://uniapp.dcloud.io/case)

**uni-app收费吗？**

`uni-app` 是免费并且属于Apache2.0开源协议的产品。DCloud官方承诺无论HBuilderX、uni-app，面向全球程序员永久免费。大家可以放心使用。

DCloud的盈利方式在帮助开发者进行流量变现（uni-AD）和提供有价值的云服务（uniCloud）上，而不在开发工具收费上。

**跨端会造成功能受限制吗？**

`uni-app`在跨平台的过程中，不牺牲平台特色，不限制平台的能力使用。

应用开发中，90%的常规开发，比如界面组件、联网等api，`uni-app`封装为可跨多端的API。

而各个端的特色功能，`uni-app`引入[条件编译](http://uniapp.dcloud.io/platform)。可以优雅的在一个项目里调用不同平台的特色能力。有很多原生sdk，在App时难免涉及，这些都可以正常的在`uni-app`框架下使用。

下图是`uni-app`产品功能框架图，`uni-app`在保持uni规范跨平台的前提下，还可实现每个平台特有的平台能力。

![](//img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-app-frame-0310.png)

在做H5时，H5所有的api都可以使用；而输出到App时，原生渲染引擎、原生sdk集成和混写都支持，使得原生的所有api都可以使用。

同时注意，条件编译不同于代码里if逻辑判断。条件编译块里的代码或指定的文件，只有在特定平台才会被编译进去，不会把不能用的其他平台代码混在一个包里。如果大量使用if判断，会增大体积和影响性能，而条件编译则没有这些问题，减少包体积，减少互相的干扰。

**uni-app的手机端用户体验如何？**

`uni-app`打包成App后，支持webview渲染和weex原生渲染这2种引擎，可以任由开发者切换使用。原生渲染方式，是DCloud改造了`weex`引擎，在原生渲染引擎上实现了uni-app的组件和API。

由于有丰富的插件市场，使得`uni-app`拥有更庞大的应用生态。

**只开发App，需要uni-app吗？**

`uni-app`是更好的跨平台开发框架，开发一次iOS、Android都有了。体验好、开发效率高。

<!-- `uni-app`在App侧可以使用weex引擎渲染，性能体验高于其他Hybrid框架。 -->

`uni-app`在App端，基于能力层/渲染层分离的架构设计（见下图），渲染层是webview和weex二选一，能力调用都是共同的api，比如蓝牙、扫码等能力；也就是weex被内置到`uni-app`中，并且被强化了。

![](https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/frame_app.png)

过去weex有个很大的问题是api太少，开发时必须iOS、Android原生和前端3拨团队协作开发，实际上react native也如此，因为他们的核心只是高性能渲染器。

uni-app提供了大量的扩展api解决了这个问题，并且发展了成熟多样的插件生态，大多数App的开发不再需要原生介入了，从而把跨平台开发省成本这个核心目的落地了。

`uni-app`的插件市场里有非常多的ui库、组件、模板，可以大幅提升开发效率。

相比纯原生开发，`uni-app`体验可商用，也不会限制功能调用，但开发效率和开发成本更优于原生开发。

如果你已经有了原生App，那么可以局部使用`uni-app`。

**uni-app是多端写在一个项目统一升级维护，还是每个端不同的项目，只复用部分代码**

`uni-app`是多端写在一个基础项目下，差异使用条件编译来管理。

这有个巨大的好处是一套工程代码，升级时可多端同时更新。

如果把不同端的项目分开，那么维护升级时非常麻烦，无法方便同步升级。

**uni-app 学习成本高吗？基于什么技术栈？**

`uni-app`简单来说是 `Vue`的语法 + API，没有太多额外学习成本。

没学过vue的同学，也不用掌握vue的全部，只需了解vue基础语法、虚拟dom、数据绑定、组件、vuex，其他如路由、loader 不用学，cli、node.js、webpack也不需要学。

**uni-app 开发体验如何？支持现代前端开发流程吗？**

`uni-app` 积极拥抱社区现有的现代开发流程，包括但不限于：

- 内置了webpack
- NPM 包管理系统，详见[参考](http://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
- es6+ 语法（发布时会自动编译为es5），详见[参考](http://uniapp.dcloud.io/frame?id=es6-%E6%94%AF%E6%8C%81)
- 各种预处理器（less、scss、stylus、typescript）
- uni-app的官方ide：HBuilderX，在vue、json、markdown、代码提示、操作效率上，有非常明显的优势，可帮助开发者大幅提高工作效率
- uni-app同时也提供了cli方式，可使用其他开发工具如vscode开发，当然开发效率不如HBuilderX。对比详见[https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)


**uni-app 生态开放性如何？能否直接利用现有前端社区资源？**

`uni-app` 提供了开放性的生态：

- 丰富的插件市场为开发者提供数千款现成的轮子，[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
- App和H5提供了renderjs，使得浏览器专用的库也可以在App和H5里使用，[参考](https://uniapp.dcloud.io/frame?id=renderjs)
- 支持 NPM 包管理系统，[参考](http://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
- 支持原生插件，见插件市场：[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)



**uni-app 支持的手机版本最低到多少？**

Android4.4、iOS9是官方会保障兼容的。
要知道Android4.4已经是2013年发布的手机了，正常用户不会还在用这么久远的手机。

**uni-app成熟度高吗？**

`uni-app`在2018年夏天推出，目前版本成熟，生态资源丰富，是当今主流的开发框架，案例众多，手机端引擎月活已经突破10亿！


**uni-app的社区活跃吗？**

`uni-app`问答社区每天新增数百个帖子。

插件市场内容也非常丰富，各种轮子方便可用。[https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/)，并且很多轮子的uni-app版。

基于`uni-app`的三方培训也很多。腾讯课堂官方亲自为uni-app制作了课程，各大培训网站均有uni-app的培训课程。


**App打包必须上传DCloud云端吗？代码会泄露吗？**

代码可以云打包，也可以离线打包。

使用云打包时有两种模式：
1. 安心打包
安心打包不会上传开发者的证书、代码，[详见](https://ask.dcloud.net.cn/article/37979)。
2. 传统云打包
传统云打包仅适合没有mac电脑但需要打iOS包的开发者。在这种情况下，代码和证书会上传到DCloud的mac打包服务器，但打包后立即删除，DCloud不会持久化保存。

DCloud是一家遵纪守法的公司，不会做损害自己名誉的事情。之所以提供云打包，是方便不熟悉原生的前端工程师直接生成App安装包。包括让没有mac电脑的工程师也可以打出iOS的包。

**DCloud提供哪些技术支持？碰到框架bug影响业务怎么办？**

`uni-app` 的github上的dev分支是频繁更新的，可随时修复bug。并且作为开源产品，开发者也可以修改源码。
`uni-app` 的app引擎，支持原生扩展，只要你会原生扩展，就不怕app引擎有限制，大不了自己补一个原生插件进去。

开发者碰到问题，可以到[github](https://github.com/dcloudio/uni-app)提交issue。
