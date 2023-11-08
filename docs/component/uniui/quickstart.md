uni-ui支持 HBuilderX直接新建项目模板、npm安装和单独导入个别组件等多种使用方式
uni-ui supports HBuilderX to directly create a new project template, npm installation and separate import of individual components, etc.


### 在HBuilderX 新建uni-app项目的模板中，选择uni-ui模板
### In the template of the new uni-app project in HBuilderX, select the uni-ui template
![HBuilderX内创建uni-ui项目](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/create-uni-ui-project.jpg)
![Create uni-ui project in HBuilderX](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/create-uni-ui-project.jpg)

由于uni-app独特的[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)技术，可以免引用、注册，直接使用各种符合规则的vue组件。
Due to the unique [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) technology of uni-app, you can directly use various Vue components that meet the rules without reference and registration.

在代码区键入`u`，拉出各种内置或uni-ui的组件列表，选择其中一个，即可使用该组件。
Type `u` in the code area, pull up a list of various built-in or uni-ui components, and select one to use the component.

光标放在组件名称上，按F1，可以查阅组件的文档。
Place the cursor on the component name and press F1 to view the component's documentation.

![uni-ui代码块](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-ui-snippet.jpg)
![uni-ui code block](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-ui-snippet.jpg)

### 通过 uni_modules 单独安装组件
### Install components individually via uni_modules
如果你没有创建uni-ui项目模板，也可以在你的工程里，通过 uni_modules 单独安装需要的某个组件。下表为uni-ui的扩展组件清单，点击每个组件在详情页面可以导入组件到项目下，导入后直接使用即可，无需import和注册。
If you have not created a uni-ui project template, you can also install a required component separately in your project through uni_modules. The following table is the list of extension components of uni-ui. Click each component on the details page to import the components to the project. After importing, you can use it directly without import and registration.

|组件名|组件说明|
|Component Name|Component Description|
|---|---|
|uni-badge|[数字角标](https://ext.dcloud.net.cn/plugin?name=uni-badge)|
|uni-badge|[digital badge](https://ext.dcloud.net.cn/plugin?name=uni-badge)|
|uni-calendar|[日历](https://ext.dcloud.net.cn/plugin?name=uni-calendar)|
|uni-calendar|[Calendar](https://ext.dcloud.net.cn/plugin?name=uni-calendar)|
|uni-card|[卡片](https://ext.dcloud.net.cn/plugin?name=uni-card)|
|uni-card|[card](https://ext.dcloud.net.cn/plugin?name=uni-card)|
|uni-collapse|[折叠面板](https://ext.dcloud.net.cn/plugin?name=uni-collapse)|
|uni-collapse|[Collapse Panel](https://ext.dcloud.net.cn/plugin?name=uni-collapse)|
|uni-combox|[组合框](https://ext.dcloud.net.cn/plugin?name=uni-combox)|
|uni-combox|[combo box](https://ext.dcloud.net.cn/plugin?name=uni-combox)|
|uni-countdown|[倒计时](https://ext.dcloud.net.cn/plugin?name=uni-countdown)|
|uni-countdown|[Countdown](https://ext.dcloud.net.cn/plugin?name=uni-countdown)|
|uni-data-checkbox|[数据选择器](https://ext.dcloud.net.cn/plugin?name=uni-data-checkbox)|
|uni-data-checkbox|[data selector](https://ext.dcloud.net.cn/plugin?name=uni-data-checkbox)|
|uni-data-picker|[数据驱动的picker选择器](https://ext.dcloud.net.cn/plugin?name=uni-data-picker)|
|uni-data-picker|[Data-driven picker picker](https://ext.dcloud.net.cn/plugin?name=uni-data-picker)|
|uni-dateformat|[日期格式化](https://ext.dcloud.net.cn/plugin?name=uni-dateformat)|
|uni-dateformat|[date format](https://ext.dcloud.net.cn/plugin?name=uni-dateformat)|
|uni-datetime-picker|[日期选择器](https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker)|
|uni-datetime-picker|[date picker](https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker)|
|uni-drawer|[抽屉](https://ext.dcloud.net.cn/plugin?name=uni-drawer)|
|uni-drawer|[Drawer](https://ext.dcloud.net.cn/plugin?name=uni-drawer)|
|uni-easyinput|[增强输入框](https://ext.dcloud.net.cn/plugin?name=uni-easyinput)|
|uni-easyinput|[Enhanced Input Box](https://ext.dcloud.net.cn/plugin?name=uni-easyinput)|
|uni-fab|[悬浮按钮](https://ext.dcloud.net.cn/plugin?name=uni-fab)|
|uni-fab|[floating button](https://ext.dcloud.net.cn/plugin?name=uni-fab)|
|uni-fav|[收藏按钮](https://ext.dcloud.net.cn/plugin?name=uni-fav)|
|uni-fav|[Favorite button](https://ext.dcloud.net.cn/plugin?name=uni-fav)|
|uni-file-picker|[文件选择上传](https://ext.dcloud.net.cn/plugin?name=uni-file-picker)|
|uni-file-picker|[File selection and upload](https://ext.dcloud.net.cn/plugin?name=uni-file-picker)|
|uni-forms|[表单](https://ext.dcloud.net.cn/plugin?name=uni-forms)|
|uni-forms|[Forms](https://ext.dcloud.net.cn/plugin?name=uni-forms)|
|uni-goods-nav|[商品导航](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav)|
|uni-goods-nav|[Commodities Navigation](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav)|
|uni-grid|[宫格](https://ext.dcloud.net.cn/plugin?name=uni-grid)|
|uni-grid|[Gongge](https://ext.dcloud.net.cn/plugin?name=uni-grid)|
|uni-group|[分组](https://ext.dcloud.net.cn/plugin?name=uni-group)|
|uni-group|[group](https://ext.dcloud.net.cn/plugin?name=uni-group)|
|uni-icons|[图标](https://ext.dcloud.net.cn/plugin?name=uni-icons)|
|uni-icons|[icon](https://ext.dcloud.net.cn/plugin?name=uni-icons)|
|uni-indexed-list|[索引列表](https://ext.dcloud.net.cn/plugin?name=uni-indexed-list)|
|uni-indexed-list|[indexed list](https://ext.dcloud.net.cn/plugin?name=uni-indexed-list)|
|uni-link|[超链接](https://ext.dcloud.net.cn/plugin?name=uni-link)|
|uni-link|[Hyperlink](https://ext.dcloud.net.cn/plugin?name=uni-link)|
|uni-list|[列表](https://ext.dcloud.net.cn/plugin?name=uni-list)|
|uni-list|[list](https://ext.dcloud.net.cn/plugin?name=uni-list)|
|uni-load-more|[加载更多](https://ext.dcloud.net.cn/plugin?name=uni-load-more)|
|uni-load-more|[Load More](https://ext.dcloud.net.cn/plugin?name=uni-load-more)|
|uni-nav-bar|[自定义导航栏](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar)|
|uni-nav-bar|[custom navigation bar](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar)|
|uni-notice-bar|[通告栏](https://ext.dcloud.net.cn/plugin?name=uni-notice-bar)|
|uni-notice-bar|[Notice Bar](https://ext.dcloud.net.cn/plugin?name=uni-notice-bar)|
|uni-number-box|[数字输入框](https://ext.dcloud.net.cn/plugin?name=uni-number-box)|
|uni-number-box|[number input box](https://ext.dcloud.net.cn/plugin?name=uni-number-box)|
|uni-pagination|[分页器](https://ext.dcloud.net.cn/plugin?name=uni-pagination)|
|uni-pagination|[Pagination](https://ext.dcloud.net.cn/plugin?name=uni-pagination)|
|uni-popup|[弹出层](https://ext.dcloud.net.cn/plugin?name=uni-popup)|
|uni-popup|[popup layer](https://ext.dcloud.net.cn/plugin?name=uni-popup)|
|uni-rate|[评分](https://ext.dcloud.net.cn/plugin?name=uni-rate)|
|uni-rate|[rating](https://ext.dcloud.net.cn/plugin?name=uni-rate)|
|uni-row|[布局-行](https://ext.dcloud.net.cn/plugin?name=uni-row)|
|uni-row|[layout-row](https://ext.dcloud.net.cn/plugin?name=uni-row)|
|uni-search-bar|[搜索栏](https://ext.dcloud.net.cn/plugin?name=uni-search-bar)|
|uni-search-bar|[search bar](https://ext.dcloud.net.cn/plugin?name=uni-search-bar)|
|uni-segmented-control|[分段器](https://ext.dcloud.net.cn/plugin?name=uni-segmented-control)|
|uni-segmented-control|[segmented-control](https://ext.dcloud.net.cn/plugin?name=uni-segmented-control)|
|uni-steps|[步骤条](https://ext.dcloud.net.cn/plugin?name=uni-steps)|
|uni-steps|[step bar](https://ext.dcloud.net.cn/plugin?name=uni-steps)|
|uni-swipe-action|[滑动操作](https://ext.dcloud.net.cn/plugin?name=uni-swipe-action)|
|uni-swipe-action|[Swipe Action](https://ext.dcloud.net.cn/plugin?name=uni-swipe-action)|
|uni-swiper-dot|[轮播图指示点](https://ext.dcloud.net.cn/plugin?name=uni-swiper-dot)|
|uni-swiper-dot|[Carousel indicator dot](https://ext.dcloud.net.cn/plugin?name=uni-swiper-dot)|
|uni-table|[表格](https://ext.dcloud.net.cn/plugin?name=uni-table)|
|uni-table|[table](https://ext.dcloud.net.cn/plugin?name=uni-table)|
|uni-tag|[标签](https://ext.dcloud.net.cn/plugin?name=uni-tag)|
|uni-tag|[tag](https://ext.dcloud.net.cn/plugin?name=uni-tag)|
|uni-title|[章节标题](https://ext.dcloud.net.cn/plugin?name=uni-title)|
|uni-title|[Chapter Title](https://ext.dcloud.net.cn/plugin?name=uni-title)|
|uni-transition|[过渡动画](https://ext.dcloud.net.cn/plugin?name=uni-transition)|
|uni-transition|[Transition Animation](https://ext.dcloud.net.cn/plugin?name=uni-transition)|


使用 `uni_modules` 方式安装组件库，可以直接通过插件市场导入，通过右键菜单快速更新组件，不需要引用、注册，直接在页面中使用 `uni-ui` 组件。[点击安装 uni-ui 组件库](https://ext.dcloud.net.cn/plugin?id=55)
Use the `uni_modules` method to install the component library, which can be imported directly through the plug-in market, and the components can be quickly updated through the right-click menu. No reference or registration is required, and the `uni-ui` component can be used directly in the page. [Click to install uni-ui component library](https://ext.dcloud.net.cn/plugin?id=55)

**注意：下载最新的组件目前仅支持 uni_modules ,非 uni_modules 版本最高支持到组件的1.2.10版本**
**Note: Downloading the latest components currently only supports uni_modules , and the non-uni_modules version supports up to the 1.2.10 version of the component**

如不能升级到 `uni_modules` 版本，可以使用 `uni_modules` 安装好对应组件，将组件拷贝到对应目录。
If you cannot upgrade to the `uni_modules` version, you can use `uni_modules` to install the corresponding components and copy the components to the corresponding directory.

例如需更新 `uni-list`和`uni-badge` ,将 `uni_modules>uni-list>components`和`uni_modules>uni-badege>components`下所有目录拷贝到如下目录即可：
For example, to update `uni-list` and `uni-badge`, copy all the directories under `uni_modules>uni-list>components` and `uni_modules>uni-badege>components` to the following directory:


**目录示例**
**Directory example**

```json
┌─components              组件目录
│  ├─uni-list             list 列表目录
│  │  └─uni-list.vue      list 组件文件
│  ├─uni-list-item        list-item 列表目录
│  │  └─uni-list-item.vue list 组件文件
│  ├─uni-badge         	  badge 角标目录
│  │  └─uni-badge.vue     badge 组件文件
│  └─ //....              更多组件文件
├─pages                   业务页面文件存放的目录
│  ├─index
│  │  └─index.vue         index示例页面
├─main.js                 Vue初始化入口文件
├─App.vue                 应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json           配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json              配置页

```

### 通过  `uni_modules` 导入全部组件
### Import all components via `uni_modules`
如果想一次把所有uni-ui组件导入到项目中，只需要导入一个 `uni-ui` 组件即可 [点击去导入](https://ext.dcloud.net.cn/plugin?id=55)。
If you want to import all uni-ui components into the project at once, you only need to import one `uni-ui` component [click to import](https://ext.dcloud.net.cn/plugin?id=55) .

如果没有自动导入其他组件，可以在 uni-ui 组件目录上右键选择 `安装三方插件依赖` 即可。
If other components are not automatically imported, you can right-click on the uni-ui component directory and select `Install third-party plug-in dependencies`.



### npm安装 
### npm install
在 `vue-cli` 项目中可以使用 `npm` 安装 `uni-ui` 库 ，或者直接在 `HBuilderX` 项目中使用 `npm` 。
You can use `npm` to install the `uni-ui` library in the `vue-cli` project, or use `npm` directly in the `HBuilderX` project.

> **注意**
> **Note**
> cli 项目默认是不编译 `node_modules` 下的组件的，导致条件编译等功能失效 ，导致组件异常
> The cli project does not compile the components under `node_modules` by default, resulting in the failure of functions such as conditional compilation, resulting in component exceptions
> 需要在根目录创建 `vue.config.js` 文件 ，增加 `@dcloudio/uni-ui` 包的编译即可正常
> ```javascript
> // vue.config.js
> module.exports = {
> 		transpileDependencies:['@dcloudio/uni-ui']
> }
> ```



**准备 sass**
**Prepare for sass**

`vue-cli` 项目请先安装 sass 及 sass-loader，如在 HBuliderX 中使用，可跳过此步。
For the `vue-cli` project, please install sass and sass-loader first. If you use it in HBuliderX, you can skip this step.

- 安装 sass
- install sass
```
 npm i sass -D   或   yarn add sass -D  
```

- 安装 sass-loader
- install sass-loader
```
npm i sass-loader@10.1.1 -D   或   yarn add sass-loader@10.1.1 -D
```

> 如果 `node` 版本小于 16 ，sass-loader 请使用低于 @11.0.0 的版本，[sass-loader@11.0.0 不支持 vue@2.6.12 ](https://stackoverflow.com/questions/66082397/typeerror-this-getoptions-is-not-a-function)
> If `node` version is less than 16, sass-loader please use a version lower than @11.0.0, [sass-loader@11.0.0 does not support vue@2.6.12](https://stackoverflow.com/questions/ 66082397/typeerror-this-getoptions-is-not-a-function)
> 如果 `node` 版本大于 16 ， `sass-loader` 建议使用 `v8.x` 版本
> If `node` version is greater than 16, `sass-loader` recommends `v8.x` version

**安装 uni-ui**
**Anso uni-ui**

```
npm i @dcloudio/uni-ui   或   yarn add @dcloudio/uni-ui
```



**配置easycom**
**Configure easycom**

使用 `npm` 安装好 `uni-ui` 之后，需要配置 `easycom` 规则，让 `npm` 安装的组件支持  `easycom`
After using `npm` to install `uni-ui`, you need to configure `easycom` rules, so that the components installed by `npm` support `easycom`

打开项目根目录下的 `pages.json` 并添加 `easycom` 节点：
Open `pages.json` in the project root directory and add the `easycom` node:

```javascript
// pages.json
{
	"easycom": {
		"autoscan": true,
		"custom": {
			// uni-ui 规则如下配置
			// uni-ui rules are configured as follows
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
		}
	},
	
	// 其他内容
	// Other content
	pages:[
		// ...
	]
}

```

在 ``template`` 中使用组件： 
Use components in ``template``:

```html
<uni-badge text="1"></uni-badge>
<uni-badge text="2" type="success" @click="bindClick"></uni-badge>
<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
```

 **注意**
 **Notice**
 - uni-ui 现在只推荐使用 `easycom` ，如自己引用组件，可能会出现组件找不到的问题
 - uni-ui now only recommends using `easycom` , if you refer to the component yourself, there may be a problem that the component cannot be found
 - 使用 npm 安装的组件，默认情况下 babel-loader 会忽略所有 node_modules 中的文件 ，导致条件编译失效，需要通过配置 `vue.config.js` 解决：
 - For components installed using npm, babel-loader will ignore all files in node_modules by default, which will cause conditional compilation to fail. It needs to be solved by configuring `vue.config.js`:
	 ```javascript
	 // 在根目录创建 vue.config.js 文件，并配置如下
	 // Create a vue.config.js file in the root directory and configure it as follows
	 module.exports = {
		transpileDependencies: ['@dcloudio/uni-ui']
	 }
	 // 如果是 vue3 + vite, 无需添加配置
	 // If it is vue3 + vite, no need to add configuration
	 ```
 - uni-ui 是uni-app内置组件的扩展。注意与web开发不同，uni-ui不包括基础组件，它是基础组件的补充。web开发中有的开发者习惯用一个ui库完成所有开发，但在uni-app体系中，推荐开发者首先使用性能更高的基础组件，然后按需引入必要的扩展组件。
 - uni-ui is an extension to the built-in components of uni-app. Note that unlike web development, uni-ui does not include base components, it is a complement to base components. Some developers in web development are accustomed to using a ui library to complete all development, but in the uni-app system, it is recommended that developers use basic components with higher performance first, and then introduce necessary extension components as needed.
 - `uni-ui` 不支持使用 `Vue.use()` 的方式安装
 - `uni-ui` does not support installing using `Vue.use()`
