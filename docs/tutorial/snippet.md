

为提升开发效率，HBuilderX将 `uni-app` 常用代码封装成了以 `u` 开头的代码块，如在 `template` 标签内输入 `ulist` 回车，会自动生成如下代码：
In order to improve development efficiency, HBuilderX encapsulates the common code of `uni-app` into code blocks starting with `u`. For example, enter `ulist` in the `template` tag and press Enter, the following code will be automatically generated:

```html
<uni-list>
	<uni-list-item title="" note=""></uni-list-item>
	<uni-list-item title="" note=""></uni-list-item>
</uni-list>
```

注意：需确保`uni-list`组件已保存在项目的`components`目录下。比较简单的方式，是新建项目时，选`uni-ui`项目模板，在里面即可随便敲所有u开头的代码块。如果你的项目不是`uni-ui`项目模板，那么你需要去插件市场手动把[uni ui组件](https://ext.dcloud.net.cn/plugin?id=55)下载到工程里。
Note: Make sure the `uni-list` component is saved in the `components` directory of the project. A simpler way is to select the `uni-ui` project template when creating a new project, and you can type all the code blocks starting with u in it. If your project is not a `uni-ui` project template, then you need to go to the plugin market to manually download [uni ui components](https://ext.dcloud.net.cn/plugin?id=55) into the project.


代码块分为`Tag`代码块、`JS`代码块，如在 `script` 标签内输入 `uShowToast` 回车，会自动生成如下代码：
Code blocks are divided into `Tag` code blocks and `JS` code blocks. If you enter `uShowToast` in the `script` tag and press Enter, the following code will be automatically generated:

```js
uni.showToast({
	title: '',
	mask: false,
	duration: 1500
});
```

`uni-app`已支持代码块见下方列表。
`uni-app` supports code blocks as listed below.


### Tag代码块
### Tag code block

- uButton
- uCheckbox
- uGrid：宫格，需引用uni ui
- uGrid: grid, need to refer to uni ui
- uList：列表，需引用uni ui
- uListMedia
- uRadio
- uSwiper
- ......

几乎各种组件不管是内置组件还是`uni-ui`的组件，均已封装为代码块；使用`HBuilderX`打开`uni-app`项目中的`.vue`文件，在`template`区域敲`u`，代码助手会提示所有可见代码块列表。
Almost all components, whether they are built-in components or `uni-ui` components, have been encapsulated as code blocks; use `HBuilderX` to open the `.vue` file in the `uni-app` project, and type ` in the `template` area u`, Code Assistant prompts for a list of all visible code blocks.

你也可以在HBuilderX菜单-工具-代码块设置-vue代码块的左侧列表查阅所有已支持的代码块。
You can also view all supported code blocks in the left list of HBuilderX menu - Tools - Code Block Settings - Vue Code Blocks.

除组件外，其他常用代码块包括：
In addition to components, other common code blocks include:

- viewfor：生成一段带有v-for循环结构的视图代码块
- viewfor: generate a view code block with v-for loop structure
- vbase：生成一段基本的vue代码结构
- vbase: generate a basic vue code structure

### JS代码块
### JS code block

#### uni api代码块
#### uni api code block
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

几乎各种常用js api，均已封装为代码块，在HBuilderX的js代码中敲u，代码助手会提示所有可见列表。也可在HBuilderX菜单-工具-代码块设置-js代码块的左侧列表查阅所有。
Almost all common js apis have been encapsulated as code blocks. Type u in the js code of HBuilderX, and the code assistant will prompt all visible lists. You can also view all of them in the left list of HBuilderX menu-tools-code block settings-js code block.

#### vue js代码块
#### vue js code block
- vImport：导入文件
- ed：export default
- vData：输出 data(){return{}}
- vData: output data(){return{}}
- vMethod：输出 methods:{}
- vMethod: Output methods:{}
- vComponents：输出 components: {}
- vComponents: output components: {}

#### 其他常用js代码块
#### Other common js code blocks
- iff：简单if
- iff: simple if
- forr：for循环结构体
- forr: for loop structure
- fori：for循环结构体并包含i
- fori: for loop structure and contains i
- funn：函数
- funn: function
- funa：匿名函数
- rt：return true
- clog：输出："console.log()"
- clog: output: "console.log ()"
- clogvar：增强的日志输出，可同时把变量的名字打印出来
- clogvar: enhanced log output, which can print out the names of variables at the same time
- varcw：输出："var currentWebview = this.$scope.page.$getAppWebview()"
- varcw: output: "var currentWebview = this.$scope.page.$getAppWebview()"
- ifios：iOS的平台判断
- ifios: platform judgment of iOS
- ifAndroid：Android的平台判断
- ifAndroid: platform judgment of Android

预置代码块不满足需求的话，可以自定义代码块，教程参考[https://ask.dcloud.net.cn/article/35924](https://ask.dcloud.net.cn/article/35924)
If the preset code block does not meet the requirements, you can customize the code block. Refer to the tutorial [https://ask.dcloud.net.cn/article/35924](https://ask.dcloud.net.cn/article/35924)


