
### 使用代码块直接创建组件模板

为提升开发效率，HBuilderX将 ```uni-app``` 常用代码封装成了以 ```u``` 开头的代码块，如在 ```template``` 标签内输入 ```ulist``` 回车，会自动生成如下代码：

```html
<uni-list>
	<uni-list-item title="" note=""></uni-list-item>
	<uni-list-item title="" note=""></uni-list-item>
</uni-list>
```
注意需保障uni-list组件在项目的components目录下。比较简单的方式，是新建项目时，选 uni ui项目模板，在里面即可随便敲所有u开头的代码块。如果不是 uni ui项目模板，那么需要去插件市场手动把[uni ui组件](https://ext.dcloud.net.cn/plugin?id=55)下载到工程里。


代码块分为Tag代码块、JS代码块，如在 ```script``` 标签内输入 ```uShowToast``` 回车，会自动生成如下代码：

```js
uni.showToast({
	title: '',
	mask: false,
	duration: 1500
});
```

```uni-app```已支持代码块见下方列表。


#### Tag代码块

- uButton
- uCheckbox
- uGrid：宫格，需引用uni ui
- uList：列表，需引用uni ui
- uListMedia
- uRadio
- uSwiper
- ......

几乎各种组件不管是内置组件还是uni ui的组件，均已封装为代码块，在HBuilderX的vue代码template区域中敲u，代码助手会提示所有可见列表。也可在HBuilderX菜单工具-代码块设置-vue代码块的左侧列表查阅所有。

除组件外，其他常用代码块包括：

- viewfor：生成一段带有v-for循环结构的视图代码块
- vbase：生成一段基本的vue代码结构

#### JS代码块

##### uni api代码块
- uRequest
- uGetLocation
- uShowToast
- uShowLoading
- uHideLoading
- uShowModal
- uShowActionSheet
- uNavigateTo
- uNavigateBack
- uRedirectTo
- uStartPullDownRefresh
- uStopPullDownRefresh
- uLogin
- uShare
- uPay
- ......

几乎各种常用js api，均已封装为代码块，在HBuilderX的js代码中敲u，代码助手会提示所有可见列表。也可在HBuilderX菜单工具-代码块设置-js代码块的左侧列表查阅所有。

##### vue js代码块
- vImport：导入文件
- ed：export default
- vData：输出 data(){return{}}
- vMethod：输出 methods:{}
- vComponents：输出 components: {}

##### 其他常用js代码块
- iff：简单if
- forr：for循环结构体
- fori：for循环结构体并包含i
- funn：函数
- funa：匿名函数
- rt：return true
- clog：输出："console.log()"
- clogvar：增强的日志输出，可同时把变量的名字打印出来
- varcw：输出："var currentWebview = this.$scope.page.$getAppWebview()"
- ifios：iOS的平台判断
- ifAndroid：Android的平台判断

预置代码块不满足需求的话，可以自定义代码块，教程参考[https://ask.dcloud.net.cn/article/35924](https://ask.dcloud.net.cn/article/35924)

### 使用HBuilderX内置浏览器调试H5@h5-debug-hx

打开 ``uni-app`` 项目的页面，点HBuilderX右上角的预览按钮，可以在内置浏览器里打开H5运行结果，也可以点右键打开控制台调试。

修改保存工程源码时，右边的浏览器内容可以自动刷新。

在HBuilderX控制台里，可以直接看到内置浏览器打印的日志。

打开内置浏览器的控制台的 `Sources` 栏，可以给 js 打断点调试。

在 `Page` 下找到 `webpack` 里的工程目录，可直接找到对应的`vue`页面进行断点调试；或按 `Ctrl+P`搜文件名，进入页面调试；也可点击控制台的 `log` 信息，进入对应的页面进行调试。

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/56abde90-4f34-11eb-8a36-ebb87efcf8c0.png)

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/5762ab70-4f34-11eb-bdc1-8bd33eb6adaa.png)


`点击工具栏的运行 -> 运行到浏览器 -> 选择 Chrome`，也可将 `uni-app`运行到 浏览器，可参考 [运行uni-app](/quickstart?id=运行uni-app)。

### 使用各家小程序开发工具调试@mp-debug

``uni-app`` 运行到微信web开发者工具等小程序开发工具里，可在这些工具的控制台查看 ``console`` 信息，网络请求等信息等。

页面样式调试和一般的`web`项目一样，通过调试的箭头选中元素即可查看相应的节点和样式，如下图：

![uni-app](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/51d2b830-4f34-11eb-a16f-5b3e54966275.png)

调试 `js` 时需要切换到 `Sources` 栏，根据sourcemap，找到 `webpack` 里正确的目录，选中想要调试的那个页面的`js`，进行调试（如果`js`代码是压缩过的，点击右下角的{}可格式化代码），如下图：

![uni-app](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/52889ab0-4f34-11eb-b680-7980c8a877b8.png)

