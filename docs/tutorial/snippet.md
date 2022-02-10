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
- varcw：输出："var currentWebview = this.$mp.page.$getAppWebview()"
- ifios：iOS的平台判断
- ifAndroid：Android的平台判断

预置代码块不满足需求的话，可以自定义代码块，教程参考[https://ask.dcloud.net.cn/article/35924](https://ask.dcloud.net.cn/article/35924)

### 更多技巧
- [如何调试](/tutorial/run-and-debug.html#h5-debug-hx)