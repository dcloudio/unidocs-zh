# uni-app x 插件生态

`uni-app x`积极拥抱社区，创建了开放、兼容的插件系统。

uni插件市场，[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)，是uni-app x官方插件生态集中地。支持前端组件、uts sdk、页面模板、项目模板、uts插件等多种类型。

请注意尽量在官方市场寻找插件，npm等三方市场没有uni-app兼容性描述，很容易下载到无法跨平台的、仅适配web的插件。

uni-app需要兼容多个平台，在统一和个性化之间，uni-app的设计原则一直是：把常用的部分uni化，不常用的各平台特色不限制使用，都可以在条件编译里调用。

- 编译到web时
	可调用浏览器的所有api，可使用web生态的各种库，包括npm。
	
- 编译到Android时
	可调用Android os的所有api，可使用所有适配Android的sdk，包括使用gradle仓储。
	
在编译到Android时，如需使用web生态的内容，有2种方式：
1. 在uni-app x的 web-view 组件里使用web库。uni-app x提供了web-view组件内的js和uts通信的机制。或者集成一个v8/quickjs等库来调用js生态的内容。
2. 把for web的ts库适配为uts库。目前npm上很多流行库已经是ts编写的了，稍加适配即可兼容uts。

在插件市场中，勾选搜索栏下方的 uni-app x 的 checkbox，即可浏览适配了uni-app x的插件。

插件市场的uts插件分类，适用于原生能力的封装。uts插件在uni-app和uni-app x中都支持，并且支持计费。