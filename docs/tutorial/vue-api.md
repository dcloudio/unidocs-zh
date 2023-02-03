
## 全局配置
## Global configuration

|Vue 全局配置		|描述						|H5		|App端|小程序  |说明	|
|Vue Global Configuration |Description |H5 |App |Mini Program |Description |
| --				| --						| --	|--		|--			| --	|
|Vue.config.silent	| 取消 Vue 所有的日志与警告 [详情](https://v2.cn.vuejs.org/v2/api/#silent)	|√	|√	| √		|		|
|Vue.config.silent | Cancel all Vue logs and warnings [Details](https://v2.cn.vuejs.org/v2/api/#silent) |√ |√ | √ | |
|Vue.config.optionMergeStrategies	| 自定义合并策略的选项 [详情](https://v2.cn.vuejs.org/v2/api/#optionMergeStrategies)	|√	| √	| √		|		|
|Vue.config.optionMergeStrategies | Options for custom merge strategies [Details](https://v2.cn.vuejs.org/v2/api/#optionMergeStrategies) |√ | √ | √ | |
|Vue.config.devtools	| 配置是否允许 vue-devtools 检查代码 [详情](https://v2.cn.vuejs.org/v2/api/#devtools) 	|√	| x	| x		|只在Web环境下支持		|
|Vue.config.devtools | Configure whether to allow vue-devtools to check code [details](https://v2.cn.vuejs.org/v2/api/#devtools) |√ | x | x |Only in web environment Support |
|Vue.config.errorHandler	| 指定组件的渲染和观察期间未捕获错误的处理函数 [详情](https://v2.cn.vuejs.org/v2/api/#errorHandler) 	|√	|√	| √		|		|
|Vue.config.errorHandler | Specifies the handler for uncaught errors during rendering and observation of the component [Details](https://v2.cn.vuejs.org/v2/api/#errorHandler) |√ |√ | √ | |
|Vue.config.warnHandler	| 为 Vue 的运行时警告赋予一个自定义处理函数 [详情](https://v2.cn.vuejs.org/v2/api/#warnHandler) 	|√	| √	| √		|		|
|Vue.config.warnHandler | Assign a custom handler to Vue's runtime warnings [Details](https://v2.cn.vuejs.org/v2/api/#warnHandler) |√ | √ | √ | |
|Vue.config.ignoredElements	| 须使 Vue 忽略在 Vue 之外的自定义元素 [详情](https://v2.cn.vuejs.org/v2/api/#ignoredElements) 	|√	| √	| √		|强烈不推荐，会覆盖uni-app框架配置的内置组件		|
|Vue.config.ignoredElements | Must make Vue ignore custom elements outside Vue [details](https://v2.cn.vuejs.org/v2/api/#ignoredElements) |√ | √ | √ |strong Not recommended, will override built-in components configured by the uni-app framework |
|Vue.config.keyCodes	| 给 v-on 自定义键位别名 [详情](https://v2.cn.vuejs.org/v2/api/#keyCodes)	|√	| x	| x		|		|
|Vue.config.keyCodes | Customize key aliases for v-on [Details](https://v2.cn.vuejs.org/v2/api/#keyCodes) |√ | x | x | |
|Vue.config.performance	| 设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪 [详情](https://v2.cn.vuejs.org/v2/api/#performance)	|√	|x	| x		|只在Web环境下支持	|
|Vue.config.performance | Set to true to enable performance tracking of component initialization, compilation, rendering, and patching in the browser dev tools' performance/timeline panel [details](https://v2.cn.vuejs .org/v2/api/#performance) |√ |x | x |Only supported in web environment |
|Vue.config.productionTip	| 设置为 false 以阻止 vue 在启动时生成生产提示 [详情](https://v2.cn.vuejs.org/v2/api/#productionTip)	|√	| √	| √		|	-	|
|Vue.config.productionTip | Set to false to prevent vue from generating production tips on startup [details](https://v2.cn.vuejs.org/v2/api/#productionTip) |√ | √ | √ | - |




## 全局 API
## Global API

|Vue 全局 API	|描述	|H5	|App端|小程序	|说明				|
|Vue Global API |Description |H5 |App-side |Mini Program |Description |
| --			| --	| --|--		|--			| --				|
|Vue.extend		| 使用基础 Vue 构造器，创建一个“子类” [详情](https://v2.cn.vuejs.org/v2/api/#Vue-extend)	|√	|√		| x			|不可作为组件使用	|
|Vue.extend | Use the base Vue constructor to create a "subclass" [Details](https://v2.cn.vuejs.org/v2/api/#Vue-extend) |√ |√ | x |No Use as a component |
|Vue.nextTick	| 在下次 DOM 更新循环结束之后执行延迟回调 [详情](https://v2.cn.vuejs.org/v2/api/#Vue-nextTick)	|√	| x		| x			|	|
|Vue.nextTick | Execute delayed callback after the end of the next DOM update loop [details](https://v2.cn.vuejs.org/v2/api/#Vue-nextTick) |√ | x | x | |
|Vue.set		| 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新 [详情](https://v2.cn.vuejs.org/v2/api/#Vue-set)|√	| √|√	|		|
|Vue.set | Add a property to the responsive object, and make sure this new property is also responsive and triggers view updates [details](https://v2.cn.vuejs.org/v2/api/# Vue-set)|√ | √|√ | |
|Vue.delete	| 删除对象的 property。如果对象是响应式的，确保删除能触发更新视图 [详情](https://v2.cn.vuejs.org/v2/api/#Vue-delete)		|√	| √		| √	| |
|Vue.delete | Delete a property of an object. If the object is reactive, make sure the delete triggers an update view [Details](https://v2.cn.vuejs.org/v2/api/#Vue-delete) |√ | √ | √ | |
|Vue.directive	| 注册或获取全局指令 [详情](https://v2.cn.vuejs.org/v2/api/#Vue-directive)|√	|√		| x			|	|
|Vue.directive | Register or get global directive [Details](https://v2.cn.vuejs.org/v2/api/#Vue-directive)|√ |√ | x | |
|Vue.filter		| 注册或获取全局过滤器 [详情](https://v2.cn.vuejs.org/v2/api/#Vue-filter)|√	|√		| x		| |
|Vue.filter | Register or get global filter [Details](https://v2.cn.vuejs.org/v2/api/#Vue-filter)|√ |√ | x | |
|Vue.component	| 注册或获取全局组件。注册还会自动使用给定的 id 设置组件的名称 [详情](https://v2.cn.vuejs.org/v2/api/#Vue-component)	|√	| √		| √	| |
|Vue.component | Register or get a global component. Registration also automatically sets the name of the component with the given id [details](https://v2.cn.vuejs.org/v2/api/#Vue-component) |√ | √ | √ | |
|Vue.use		| 安装 Vue.js 插件 [详情](https://v2.cn.vuejs.org/v2/api/#Vue-use)	|√	| √		| √		|		|
|Vue.use | Install Vue.js plugin [Details](https://v2.cn.vuejs.org/v2/api/#Vue-use) |√ | √ | √ | |
|Vue.mixin		| 全局注册一个混入，影响注册之后所有创建的每个 Vue 实例 [详情](https://v2.cn.vuejs.org/v2/api/#Vue-mixin)	|√	|√		| √		|	|
|Vue.mixin | Register a mixin globally, affecting every Vue instance created after registration [Details](https://v2.cn.vuejs.org/v2/api/#Vue-mixin) |√ |√ | √ | |
|Vue.version	| 提供字符串形式的 Vue 安装版本号 [详情](https://v2.cn.vuejs.org/v2/api/#Vue-version)	|√	| √		| √		|	|
|Vue.version | Provide the Vue installation version number in string form [Details](https://v2.cn.vuejs.org/v2/api/#Vue-version) |√ | √ | √ | |
|Vue.compile	| 将一个模板字符串编译成 render 函数。只在完整版时可用。[详情](https://v2.cn.vuejs.org/v2/api/#Vue-compile)	|√	| x	| x	|uni-app使用的vue是只包含运行时的版本	|
|Vue.compile | Compile a template string into a render function. Only available in the full version. [Details](https://v2.cn.vuejs.org/v2/api/#Vue-compile) |√ | x | x | Vue used by uni-app is the version that only contains runtime |



## 选项
## Options

|Vue 选项		|描述						|H5		|App端|小程序  |说明	|
|Vue Options |Description |H5 |App |Mini Program |Description |
| --				| --						| --	|--		|--			| --	|
|data	| Vue 实例的数据对象 [详情](https://v2.cn.vuejs.org/v2/api/#data) 	|√	|√	| √		|		|
|data | The data object of the Vue instance [Details](https://v2.cn.vuejs.org/v2/api/#data) |√ |√ | √ | |
|props	| props 可以是数组或对象，用于接收来自父组件的数据 [详情](https://v2.cn.vuejs.org/v2/api/#props) 	|√	|√	| √		| |
|props | props can be an array or an object to receive data from the parent component [Details](https://v2.cn.vuejs.org/v2/api/#props) |√ |√ | √ | |
|propsData	| 创建实例时传递 props。主要作用是方便测试 [详情](https://v2.cn.vuejs.org/v2/api/#propsData) 	|√	| √	| √		|		|
|propsData | Pass props when creating an instance. The main function is to facilitate testing [Details](https://v2.cn.vuejs.org/v2/api/#propsData) |√ | √ | √ | |
|computed	| 计算属性将被混入到 Vue 实例中 [详情](https://v2.cn.vuejs.org/v2/api/#computed) 	|√	| √	| √		|		|
|computed | Computed properties will be mixed into the Vue instance [Details](https://v2.cn.vuejs.org/v2/api/#computed) |√ | √ | √ | |
|methods	| methods 将被混入到 Vue 实例中 [详情](https://v2.cn.vuejs.org/v2/api/#methods) 	|√	| √	| √		|		|
|methods | methods will be mixed into the Vue instance [Details](https://v2.cn.vuejs.org/v2/api/#methods) |√ | √ | √ | |
|watch	| 一个对象，键是需要观察的表达式，值是对应回调函数 [详情](https://v2.cn.vuejs.org/v2/api/#watch) 	|√	| √	| √		|		|
|watch | An object, the key is the expression to be observed, and the value is the corresponding callback function [Details](https://v2.cn.vuejs.org/v2/api/#watch) |√ | √ | √ | |
|el	| 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标 [详情](https://v2.cn.vuejs.org/v2/api/#el) 	|√	| x	| x		|		|
|el | Provide an existing DOM element on the page as the mount target of the Vue instance [Details](https://v2.cn.vuejs.org/v2/api/#el) |√ | x | x | |
|template	| 一个字符串模板作为 Vue 实例的标识使用 [详情](https://v2.cn.vuejs.org/v2/api/#template) 	|√	| x	| x		|uni-app使用的vue是只包含运行时的版本		|
|template | A string template is used as the identifier of a Vue instance [details](https://v2.cn.vuejs.org/v2/api/#template) |√ | x | x |The vue used by uni-app is Include runtime version only |
|render	| 字符串模板的代替方案，该渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode。[详情](https://v2.cn.vuejs.org/v2/api/#render) 	|√	| x	| x		|		|
|render | An alternative to string templates, the render function accepts a createElement method as the first argument to create the VNode. [Details](https://v2.cn.vuejs.org/v2/api/#render) |√ | x | x | |
|renderError	| 当 render 函数遭遇错误时，提供另外一种渲染输出，只在开发者环境下工作 [详情](https://v2.cn.vuejs.org/v2/api/#renderError) 	|√	| x	| x		|		|
|renderError | When the render function encounters an error, another rendering output is provided, which only works in the developer environment [Details](https://v2.cn.vuejs.org/v2/api/#renderError) |√ | x | x | |
|directives	| 包含 Vue 实例可用指令的哈希表 [详情](https://v2.cn.vuejs.org/v2/api/#directives) 	|√	| √	| x		|		|
|directives | Hash table containing directives available to Vue instance [details](https://v2.cn.vuejs.org/v2/api/#directives) |√ | √ | x | |
|filters	| 包含 Vue 实例可用过滤器的哈希表 [详情](https://v2.cn.vuejs.org/v2/api/#filters) 	|√	| √	| √		| |
|filters | Hash table containing available filters for Vue instances [details](https://v2.cn.vuejs.org/v2/api/#filters) |√ | √ | √ | |
|components	| 包含 Vue 实例可用组件的哈希表 [详情](https://v2.cn.vuejs.org/v2/api/#components) 	|√	| √	| √		|		|
|components | A hash table containing the components available for a Vue instance [details](https://v2.cn.vuejs.org/v2/api/#components) |√ | √ | √ | |
|parent	| 指定已创建的实例之父实例，在两者之间建立父子关系 [详情](https://v2.cn.vuejs.org/v2/api/#parent) 	|√	| √	| √		|不推荐		|
|parent | Specifies the parent instance of the created instance and establishes a parent-child relationship between the two [Details](https://v2.cn.vuejs.org/v2/api/#parent) |√ | √ | √ | Not recommended |
|mixins	|  选项接收一个混入对象的数组 [详情](https://v2.cn.vuejs.org/v2/api/#mixins) 	|√	| √	| √		|		|
|mixins | option to receive an array of mixin objects [details](https://v2.cn.vuejs.org/v2/api/#mixins) |√ | √ | √ | |
|extends	| 允许声明扩展另一个组件 [详情](https://v2.cn.vuejs.org/v2/api/#extends) 	|√	| √	| √		|		|
|extends | Allows declarations to extend another component [Details](https://v2.cn.vuejs.org/v2/api/#extends) |√ | √ | √ | |
|provide/inject	| 允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效 [详情](https://v2.cn.vuejs.org/v2/api/#provide-inject) 	|√	|√	| √		| |
|provide/inject | Allows an ancestor component to inject a dependency into all its descendants, no matter how deep the component level is, and it will always take effect when its upstream and downstream relationships are established [details](https://v2.cn.vuejs .org/v2/api/#provide-inject) |√ |√ | √ | |
|name	| 允许组件模板递归地调用自身 [详情](https://v2.cn.vuejs.org/v2/api/#name) 	|√	| √	| √		| |
|name | Allow component template to call itself recursively [Details](https://v2.cn.vuejs.org/v2/api/#name) |√ | √ | √ | |
|delimiters	| 改变纯文本插入分隔符 [详情](https://v2.cn.vuejs.org/v2/api/#delimiters) 	|√	|x	| x		|		|
|delimiters | Change the delimiter for plain text insertion [details](https://v2.cn.vuejs.org/v2/api/#delimiters) |√ |x | x | |
|functional	| 使组件无状态 (没有 data) 和无实例 (没有 this 上下文) [详情](https://v2.cn.vuejs.org/v2/api/#functional) 	|√	| x	| x		|		|
|functional | Make a component stateless (no data) and instanceless (no this context) [Details](https://v2.cn.vuejs.org/v2/api/#functional) |√ | x | x | |
|model	| 允许一个自定义组件在使用 v-model 时定制 prop 和 event [详情](https://v2.cn.vuejs.org/v2/api/#model) 	|√	|√	| x		|		|
|model | Allows a custom component to customize props and events when using v-model [Details](https://v2.cn.vuejs.org/v2/api/#model) |√ |√ | x | |
|inheritAttrs	| inheritAttrs属性默认值为true，表示允许组件的根节点继承$attrs包含的属性 [详情](https://v2.cn.vuejs.org/v2/api/#inheritAttrs) 	|√	|√	| x		|		|
|inheritAttrs | The default value of the inheritAttrs attribute is true, which means that the root node of the component is allowed to inherit the attributes contained in $attrs [Details](https://v2.cn.vuejs.org/v2/api/#inheritAttrs) |√ |√ | x | |
|comments	| 当设为 true 时，将会保留且渲染模板中的 HTML 注释 [详情](https://v2.cn.vuejs.org/v2/api/#comments) 	|√	| x	| x		|	-	|
|comments | When set to true, HTML comments in the template will be preserved and rendered [details](https://v2.cn.vuejs.org/v2/api/#comments) |√ | x | x | - |





## 生命周期
## Lifecycle Hooks


|生命周期钩子	|描述	|H5	|App端|小程序	|说明				|
|Lifecycle hooks |Description |H5 |App-side |Mini Programs |Description |
| --			| --	| --|--		|--			| --				|
|beforeCreate		| 在实例初始化之后被调用 [详情](https://v2.cn.vuejs.org/v2/api/#beforeCreate)	|√	|√		| √			|	|
|beforeCreate | Called after instance initialization [Details](https://v2.cn.vuejs.org/v2/api/#beforeCreate) |√ |√ | √ | |
|created	| 在实例创建完成后被立即调用 [详情](https://v2.cn.vuejs.org/v2/api/#created)	|√	| √		| √			|	|
|created | Called immediately after the instance is created [Details](https://v2.cn.vuejs.org/v2/api/#created) |√ | √ | √ | |
|beforeMount		| 在挂载开始之前被调用 [详情](https://v2.cn.vuejs.org/v2/api/#beforeMount)|√	| √|√	|		|
|beforeMount | Called before the mount starts [Details](https://v2.cn.vuejs.org/v2/api/#beforeMount)|√ | √|√ | |
|mounted	| 挂载到实例上去之后调用 [详情](https://v2.cn.vuejs.org/v2/api/#mounted) 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTick	[详情](https://v2.cn.vuejs.org/v2/api/#Vue-nextTick)	|√	| √		| √	| |
|mounted | Call [Details](https://v2.cn.vuejs.org/v2/api/#mounted) after it is mounted on the instance After the component is fully mounted, you can use $nextTick [Details](https://v2.cn.vuejs.org/v2/api/#Vue-nextTick) |√ | √ | √ | |
|beforeUpdate	| 数据更新时调用，发生在虚拟 DOM 打补丁之前 [详情](https://v2.cn.vuejs.org/v2/api/#beforeUpdate)|√	|√		| √			|	|
|beforeUpdate | Called when data is updated, before the virtual DOM is patched [Details](https://v2.cn.vuejs.org/v2/api/#beforeUpdate)|√ |√ | √ | |
|updated		| 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子 [详情](https://v2.cn.vuejs.org/v2/api/#updated)|√	|√		| √		|	|
|updated | This hook will be called after the virtual DOM is re-rendered and patched due to data changes [Details](https://v2.cn.vuejs.org/v2/api/#updated)|√ |√ | √ | |
|activated	| 被 keep-alive 缓存的组件激活时调用 [详情](https://v2.cn.vuejs.org/v2/api/#activated)	|√	| √		| x	| |
|activated | Called when a component cached by keep-alive is activated [Details](https://v2.cn.vuejs.org/v2/api/#activated) |√ | √ | x | |
|deactivated		| 被 keep-alive 缓存的组件停用时调用 [详情](https://v2.cn.vuejs.org/v2/api/#deactivated)	|√	| √		| x		|		|
|deactivated | Called when a component cached by keep-alive is deactivated [Details](https://v2.cn.vuejs.org/v2/api/#deactivated) |√ | √ | x | |
|beforeDestroy		| 实例销毁之前调用。在这一步，实例仍然完全可用 [详情](https://v2.cn.vuejs.org/v2/api/#beforeDestroy)	|√	|√		| √		|	|
|beforeDestroy | Called before the instance is destroyed. At this step, the instance is still fully available [Details](https://v2.cn.vuejs.org/v2/api/#beforeDestroy) |√ |√ | √ | |
|destroyed	| Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁 [详情](https://v2.cn.vuejs.org/v2/api/#destroyed)	|√	| √		| √		|	|
|destroyed | Called after the Vue instance is destroyed. After the call, everything indicated by the Vue instance will be unbound, all event listeners will be removed, and all child instances will be destroyed [details](https://v2.cn.vuejs.org/v2/ api/#destroyed) |√ | √ | √ | |
|errorCaptured	| 当捕获一个来自子孙组件的错误时被调用 [详情](https://v2.cn.vuejs.org/v2/api/#errorCaptured)	|√	| √	| √	| -	|
|errorCaptured | Called when an error from a descendant component is captured [Details](https://v2.cn.vuejs.org/v2/api/#errorCaptured) |√ | √ | √ | - |




## 实例属性
## Instance attributes



|Vue 实例属性		|描述						|H5		|App端|小程序  |说明	|
|Vue instance properties |Description |H5 |App-side |Mini Program |Description |
| --				| --						| --	|--		|--			| --	|
|vm.$data	| Vue 实例观察的数据对象 [详情](https://v2.cn.vuejs.org/v2/api/#vm-data) 	|√	| √	| √		|		|
|vm.$data | Data object observed by Vue instance [Details](https://v2.cn.vuejs.org/v2/api/#vm-data) |√ | √ | √ | |
|vm.$props	| 当前组件接收到的 props 对象 [详情](https://v2.cn.vuejs.org/v2/api/#vm-props) 	|√	| √	| √		|		|
|vm.$props | The props object received by the current component [Details](https://v2.cn.vuejs.org/v2/api/#vm-props) |√ | √ | √ | |
|vm.$el	| Vue 实例使用的根 DOM 元素 [详情](https://v2.cn.vuejs.org/v2/api/#vm-el) 	|√	| x	| x		|		|
|vm.$el | The root DOM element used by the Vue instance [details](https://v2.cn.vuejs.org/v2/api/#vm-el) |√ | x | x | |
|vm.$options	| 用于当前 Vue 实例的初始化选项 [详情](https://v2.cn.vuejs.org/v2/api/#vm-options) 	|√	| √	| √		|		|
|vm.$options | Initialization options for the current Vue instance [Details](https://v2.cn.vuejs.org/v2/api/#vm-options) |√ | √ | √ | |
|vm.$parent	| 父实例，如果当前实例有的话 [详情](https://v2.cn.vuejs.org/v2/api/#vm-parent) 	|√	|√	| √		|H5端 `view`、`text` 等内置标签是以 Vue 组件方式实现，`$parent` 会获取这些到内置组件，导致的问题是 `this.$parent` 与其他平台不一致，解决方式是使用 `this.$parent.$parent` 获取或自定义组件根节点由 `view` 改为 `div`|
|vm.$parent | Parent instance, if the current instance exists [details](https://v2.cn.vuejs.org/v2/api/#vm-parent) |√ |√ | √ |H5 end` View`, `text` and other built-in tags are implemented in Vue components, `$parent` will get these to the built-in components, the problem is that `this.$parent` is inconsistent with other platforms, the solution is to use `this.$ parent.$parent` Get or customize the root node of the component from `view` to `div`|
|vm.$root	| 当前组件树的根 Vue 实例 [详情](https://v2.cn.vuejs.org/v2/api/#vm-root) 	|√	| √	| √		|		|
|vm.$root | The root Vue instance of the current component tree [Details](https://v2.cn.vuejs.org/v2/api/#vm-root) |√ | √ | √ | |
|vm.$children	| 当前实例的直接子组件 [详情](https://v2.cn.vuejs.org/v2/api/#vm-children) 	|√	| √	| √		|H5端 `view`、`text` 等内置标签是以 Vue 组件方式实现，`$children` 会获取到这些内置组件，导致的问题是 `this.$children` 与其他平台不一致，解决方式是使用 `this.$children.$children` 获取或自定义组件根节点由 `view` 改为 `div`|
|vm.$children | The direct child component of the current instance [details](https://v2.cn.vuejs.org/v2/api/#vm-children) |√ | √ | √ |H5 side `view`, Built-in tags such as `text` are implemented as Vue components, and `$children` will get these built-in components. The problem is that `this.$children` is inconsistent with other platforms. The solution is to use `this.$children.$ children` Get or customize the component root node from `view` to `div`|
|vm.$slots	| 用来访问被插槽分发的内容 [详情](https://v2.cn.vuejs.org/v2/api/#vm-slots) 	|√	| x	| √		| |
|vm.$slots | Used to access content distributed by slots [Details](https://v2.cn.vuejs.org/v2/api/#vm-slots) |√ | x | √ | |
|vm.$scopedSlots	| 用来访问作用域插槽 [详情](https://v2.cn.vuejs.org/v2/api/#vm-scopedSlots) 	|√	| √	| √		| |
|vm.$scopedSlots | Used to access scoped Slots [details](https://v2.cn.vuejs.org/v2/api/#vm-scopedSlots) |√ | √ | √ | |
|vm.$refs	| 一个对象，持有注册过 ref attribute 的所有 DOM 元素和组件实例[详情](https://v2.cn.vuejs.org/v2/api/#vm-refs) 	|√	| √	| √		|非H5端只能用于获取自定义组件，不能用于获取内置组件实例（如：view、text）		|
|vm.$refs | An object that holds all DOM elements and component instances registered with the ref attribute [Details](https://v2.cn.vuejs.org/v2/api/#vm-refs) |√ | √ | √ |Non-H5 terminal can only be used to obtain custom components, not to obtain built-in component instances (such as: view, text) |
|vm.$isServer	| 当前 Vue 实例是否运行于服务器 [详情](https://v2.cn.vuejs.org/v2/api/#vm-isServer) 	|√	| √	| x		|App端总是返回false		|
|vm.$isServer | Whether the current Vue instance is running on the server [Details](https://v2.cn.vuejs.org/v2/api/#vm-isServer) |√ | √ | x |App always returns false |
|vm.$attrs	| 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 [详情](https://v2.cn.vuejs.org/v2/api/#vm-attrs) 	|√	| √	| x		|		|
|vm.$attrs | Contains attribute bindings that are not recognized (and obtained) as props in the parent scope [details](https://v2.cn.vuejs.org/v2/api/#vm-attrs) |√ | √ | x | |
|vm.$listeners	| 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器 [详情](https://v2.cn.vuejs.org/v2/api/#vm-listeners) 	|√	| √	| x		|	-	|
|vm.$listeners | Contains the v-on event listeners in the parent scope (without the .native decorator) [details](https://v2.cn.vuejs.org/v2/api/#vm -listeners) |√ | √ | x | - |





## 实例方法
## Instance method



|实例方法		|描述						|H5		|App端|小程序  |说明	|
|Instance Method |Description |H5 |App |Mini Program |Description |
| --				| --						| --	|--		|--			| --	|
|vm.$watch()	| 观察 Vue 实例上的一个表达式或者一个函数计算结果的变化 [详情](https://v2.cn.vuejs.org/v2/api/#vm-watch) 	|√	|√	| √		|		|
|vm.$watch() | Watch the changes of an expression or a function calculation result on a Vue instance [Details](https://v2.cn.vuejs.org/v2/api/#vm-watch) |√ |√ | √ | |
|vm.$set()	| 这是全局 Vue.set 的别名 [详情](https://v2.cn.vuejs.org/v2/api/#vm-set) 	|√	| √	| √		|		|
|vm.$set() | This is an alias for the global Vue.set [Details](https://v2.cn.vuejs.org/v2/api/#vm-set) |√ | √ | √ | |
|vm.$delete()	| 这是全局 Vue.delete 的别名 [详情](https://v2.cn.vuejs.org/v2/api/#vm-delete) 	|√	| √	| √		|		|
|vm.$delete() | This is an alias for global Vue.delete [Details](https://v2.cn.vuejs.org/v2/api/#vm-delete) |√ | √ | √ | |
|vm.$on()	| 监听当前实例上的自定义事件 [详情](https://v2.cn.vuejs.org/v2/api/#vm-on) 	|√	| √	| √		|		|
|vm.$on() | Monitor custom events on the current instance [Details](https://v2.cn.vuejs.org/v2/api/#vm-on) |√ | √ | √ | |
|vm.$once()	| 监听一个自定义事件，但是只触发一次 [详情](https://v2.cn.vuejs.org/v2/api/#vm-once) 	|√	|√	| √		|		|
|vm.$once() | Listen to a custom event, but only trigger once [Details](https://v2.cn.vuejs.org/v2/api/#vm-once) |√ |√ | √ | |
|vm.$off()	| 移除自定义事件监听器 [详情](https://v2.cn.vuejs.org/v2/api/#vm-off) 	|√	| √	| √		|		|
|vm.$off() | Remove custom event listener [Details](https://v2.cn.vuejs.org/v2/api/#vm-off) |√ | √ | √ | |
|vm.$emit()	| 触发当前实例上的事件 [详情](https://v2.cn.vuejs.org/v2/api/#vm-emit) 	|√	| √	| √		|		|
|vm.$emit() | Trigger an event on the current instance [Details](https://v2.cn.vuejs.org/v2/api/#vm-emit) |√ | √ | √ | |
|vm.$mount()	| 手动地挂载一个未挂载的实例 [详情](https://v2.cn.vuejs.org/v2/api/#vm-mount) 	|√	| x	| x		|		|
|vm.$mount() | Manually mount an unmounted instance [details](https://v2.cn.vuejs.org/v2/api/#vm-mount) |√ | x | x | |
|vm.$forceUpdate()	| 迫使 Vue 实例重新渲染 [详情](https://v2.cn.vuejs.org/v2/api/#vm-forceUpdate) 	|√	| √	| √		|		|
|vm.$forceUpdate() | Force Vue instance to re-render [details](https://v2.cn.vuejs.org/v2/api/#vm-forceUpdate) |√ | √ | √ | |
|vm.$nextTick()	| 将回调延迟到下次 DOM 更新循环之后执行 [详情](https://v2.cn.vuejs.org/v2/api/#vm-nextTick) 	|√	| √	| √		|		|
|vm.$nextTick() | Delay the callback until after the next DOM update loop [Details](https://v2.cn.vuejs.org/v2/api/#vm-nextTick) |√ | √ | √ | |
|vm.$destroy()	| 完全销毁一个实例 [详情](https://v2.cn.vuejs.org/v2/api/#vm-destroy) 	|√	| √	| √		|	-	|
|vm.$destroy() | Completely destroy an instance [Details](https://v2.cn.vuejs.org/v2/api/#vm-destroy) |√ | √ | √ | - |





## 模板指令
## Template directive



|Vue 指令		|描述						|H5		|App端|小程序  |说明	|
|Vue Directive |Description |H5 |App |Mini Program |Description |
| --				| --						| --	|--		|--			| --	|
|v-text	| 更新元素的 textContent [详情](https://v2.cn.vuejs.org/v2/api/#v-text) 	|√	|√	| √		|		|
|v-text | Update element's textContent [details](https://v2.cn.vuejs.org/v2/api/#v-text) |√ |√ | √ | |
|v-html	| 更新元素的 innerHTML [详情](https://v2.cn.vuejs.org/v2/api/#v-html) 	|√	| √	| x		|微信小程序会被转成 `rich-text`		|
|v-html | Update the innerHTML of the element [Details](https://v2.cn.vuejs.org/v2/api/#v-html) |√ | √ | x |WeChat MiniApp will be converted to `rich -text` |
|v-show	| 根据表达式之真假值，切换元素的 display CSS属性 [详情](https://v2.cn.vuejs.org/v2/api/#v-show) 	|√	| √	| √		|		|
|v-show | Switch the display CSS property of an element according to the true or false value of the expression [Details](https://v2.cn.vuejs.org/v2/api/#v-show) |√ | √ | √ | |
|v-if	| 根据表达式的值的 truthiness 来有条件地渲染元素 [详情](https://v2.cn.vuejs.org/v2/api/#v-if) 	|√	| √	| √		|		|
|v-if | Conditionally render elements based on the truthiness of the value of the expression [details](https://v2.cn.vuejs.org/v2/api/#v-if) |√ | √ | √ | |
|v-else	| 为 v-if 或者 v-else-if 添加“else 块” [详情](https://v2.cn.vuejs.org/v2/api/#v-else) 	|√	| √	| √		|		|
|v-else | Add "else block" to v-if or v-else-if [Details](https://v2.cn.vuejs.org/v2/api/#v-else) |√ | √ | √ | |
|v-else-if| 表示 v-if 的“else if 块”。可以链式调用 [详情](https://v2.cn.vuejs.org/v2/api/#v-else-if) 	|√	| √	| √		|		|
|v-else-if| means the "else if block" of v-if. Can be chained [Details](https://v2.cn.vuejs.org/v2/api/#v-else-if) |√ | √ | √ | |
|v-for	| 基于源数据多次渲染元素或模板块 [详情](https://v2.cn.vuejs.org/v2/api/#v-for) 	|√	| √	| √		|		|
|v-for | Rendering elements or template blocks multiple times based on source data [Details](https://v2.cn.vuejs.org/v2/api/#v-for) |√ | √ | √ | |
|v-on	| 绑定事件监听器 [详情](https://v2.cn.vuejs.org/v2/api/#v-on) 	|√	| √	| √		|		|
|v-on | Binding event listeners [Details](https://v2.cn.vuejs.org/v2/api/#v-on) |√ | √ | √ | |
|v-bind	| 动态地绑定一个或多个 attribute，或一个组件 prop 到表达式 [详情](https://v2.cn.vuejs.org/v2/api/#v-bind) 	|√	| √	| √		| |
|v-bind | Dynamically bind one or more attributes, or a component prop to an expression [Details](https://v2.cn.vuejs.org/v2/api/#v-bind) |√ | √ | √ | |
|v-model| 在表单控件或者组件上创建双向绑定 [详情](https://v2.cn.vuejs.org/v2/api/#v-model) 	|√	| √	| √		|		|
|v-model| Create two-way binding on form controls or components [Details](https://v2.cn.vuejs.org/v2/api/#v-model) |√ | √ | √ | |
|v-pre	| 跳过这个元素和它的子元素的编译过程 [详情](https://v2.cn.vuejs.org/v2/api/#v-pre) 	|√	| √	| x		|		|
|v-pre | Skip the compilation process of this element and its child elements [Details](https://v2.cn.vuejs.org/v2/api/#v-pre) |√ | √ | x | |
|v-cloak| 这个指令保持在元素上直到关联实例结束编译 [详情](https://v2.cn.vuejs.org/v2/api/#v-cloak) 	|√	| x	| x		|		|
|v-cloak| This directive remains on the element until the associated instance finishes compiling [Details](https://v2.cn.vuejs.org/v2/api/#v-cloak) |√ | x | x | |
|v-once	| 只渲染元素和组件一次 [详情](https://v2.cn.vuejs.org/v2/api/#v-once) 	|√	| √	| x		| -	|
|v-once | Render elements and components only once [Details](https://v2.cn.vuejs.org/v2/api/#v-once) |√ | √ | x | - |




## 特殊属性
## Special attributes


|特殊属性		|描述						|H5		|App端|小程序  |说明	|
|Special Properties |Description |H5 |App |Mini Program |Description |
| --				| --						| --	|--		|--			| --	|
|key	| 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes [详情](https://v2.cn.vuejs.org/v2/api/#key) 	|√	| √	| √		| |
|key | Mainly used in Vue's virtual DOM algorithm to identify VNodes when comparing old and new nodes [Details](https://v2.cn.vuejs.org/v2/api/#key) |√ | √ | √ | |
|ref	| ref 被用来给元素或子组件注册引用信息 [详情](https://v2.cn.vuejs.org/v2/api/#ref) 	|√	| √	| √		|非 H5 平台只能获取 vue 组件实例不能获取到内置组件实例|
| ref | ref is used to register reference information for elements or subcomponents [Details](https://v2.cn.vuejs.org/v2/api/#ref) |√ | √ | √ |Only for non-H5 platforms Obtaining a vue component instance cannot obtain a built-in component instance|
|is	| 用于动态组件且基于 DOM 内模板的限制来工作 [详情](https://v2.cn.vuejs.org/v2/api/#is) 	|√	| √ (需传入 String 类型) | x		|	-	|
| Yes | is used for dynamic components and works based on the restrictions of templates in the DOM [Details](https://v2.cn.vuejs.org/v2/api/#is) |√ | √ (need to pass in String type) |x|-|






## 内置组件
## Built-in components


|内置组件		|描述						|H5		|App端|小程序  |说明	|
|Built-in Components |Description |H5 |App |Mini Programs |Description |
| --				| --						| --	|--		|--			| --	|
|component	| 渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染 [详情](https://v2.cn.vuejs.org/v2/api/#component) 	|√	| √	| x		|		|
|component | Renders a "meta-component" as a dynamic component. Determine which component is rendered according to the value of is [Details](https://v2.cn.vuejs.org/v2/api/#component) |√ | √ | x | |
|transition	| 作为单个元素/组件的过渡效果 [详情](https://v2.cn.vuejs.org/v2/api/#transition) 	|√	| x	| x		|		|
|transition | Transition effect as a single element/component [Details](https://v2.cn.vuejs.org/v2/api/#transition) |√ | x | x | |
|transition-group	| 作为多个元素/组件的过渡效果 [详情](https://v2.cn.vuejs.org/v2/api/#transition-group) 	|√	| x	| x		|		|
|transition-group | Transition effects as multiple elements/components [Details](https://v2.cn.vuejs.org/v2/api/#transition-group) |√ | x | x | |
|keep-alive	| 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们 [详情](https://v2.cn.vuejs.org/v2/api/#keep-alive) 	|√	|x	| x		|		|
|keep-alive | When wrapping dynamic components, inactive component instances are cached instead of destroying them [Details](https://v2.cn.vuejs.org/v2/api/#keep-alive) |√ | x | x | |
|slot	| 作为组件模板之中的内容分发插槽 [详情](https://v2.cn.vuejs.org/v2/api/#slot) 	|√	| √	| √		|	-	|
|slot | As a content distribution slot in a component template [Details](https://v2.cn.vuejs.org/v2/api/#slot) |√ | √ | √ | - |
|template	| 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性 [详情](https://uniapp.dcloud.io/component/vue-component?id=template) 	|√	| √	| √		|	-	|
|template | is not a component, it is just a wrapper element, it will not do any rendering in the page, it only accepts control properties [details](https://uniapp.dcloud.io/component/vue-component?id= template) |√ | √ | √ | - |




## 全局变量
## Global variable

实现全局变量的方式需要遵循 Vue 单文件模式的开发规范。详细参考：[uni-app全局变量的几种实现方式](https://ask.dcloud.net.cn/article/35021)。
The way to implement global variables needs to follow the development specifications of Vue single file mode.


## 其他配置
## Other configuration

Vue 组件编译到小程序平台的时候会编译为对应平台的组件，部分小程序平台支持 options 选项（具体选项参考对应小程序平台文档的自定义组件部分），一般情况默认即可，如有特殊需求可在 Vue 组件中增加 options 属性。
When Vue components are compiled to the applet platform, they will be compiled into components of the corresponding platform. Some applet platforms support the options option (for specific options, please refer to the custom components section of the corresponding applet platform documentation). Generally, the default can be used, if there are special requirements The options property can be added to the Vue component.

```js
export default {
  props: ['data'],
  data(){ return { } },
  options: {
    // 微信小程序中 options 选项
    // options option in WeChat applet
    multipleSlots: true, //  在组件定义时的选项中启动多slot支持，默认启用
    styleIsolation: "isolated",  //  启动样式隔离。当使用页面自定义组件，希望父组件影响子组件样式时可能需要配置。具体配置选项参见：微信小程序自定义组件的样式
    addGlobalClass: true, //  表示页面样式将影响到自定义组件，但自定义组件中指定的样式不会影响页面。这个选项等价于设置 styleIsolation: apply-shared
    virtualHost: true,  //  将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等，而是希望自定义组件内部的第一层节点能够响应 flex 布局或者样式由自定义组件本身完全决定
  }
}
```



## 常见问题
## Common problem

### 1. 如何获取上个页面传递的数据
### 1. How to get the data passed on the previous page

在 onLoad 里得到，onLoad 的参数是其他页面打开当前页面所传递的数据。
Obtained in onLoad, the parameter of onLoad is the data passed by other pages to open the current page.


### 2. 如何设置全局的数据和全局的方法
### 2. How to set global data and global methods

uni-app 内置了 [Vuex](https://uniapp.dcloud.io/vue-vuex) ，在app里的使用，可参考 `hello-uniapp` ` store/index.js`。
uni-app has built-in [Vuex](https://uniapp.dcloud.io/vue-vuex). For use in the app, please refer to `hello-uniapp` ` store/index.js`.


```javaScript
	//store.js
	import Vue from 'vue'
	import Vuex from 'vuex'
	Vue.use(Vuex)
	const store = new Vuex.Store({
		state: {...},
		mutations: {...},
		actions: {...}
	})

	export default store

	//main.js
	...
	import store from './store'
	Vue.prototype.$store = store
	const app = new Vue({
		store,...
	})
	...

	//test.vue 使用时：
	//test.vue When using:
	import {mapState,mapMutations} from 'vuex'
```



### 3. 如何捕获 app 的 onError
### 3. How to catch onError of app

由于 onError 并不是完整意义的生命周期，所以只提供一个捕获错误的方法，在 app 的根组件上添加名为 onError 的回调函数即可。如下：
Since onError is not a complete life cycle, only a method of catching errors is provided, and a callback function named onError can be added to the root component of the app. as follows:

```javaScript
	export default {
	   // 只有 app 才会有 onLaunch 的生命周期
		// Only apps have an onLaunch lifecycle
		onLaunch () {
		   // ...
		},

		// 捕获 app error
		// capture app error
		onError (err) {
		   console.log(err)
		}
	}
```


### 4. 组件属性设置不生效解决办法@componentsolutions
### 4. Component property settings do not take effect

当重复设置某些属性为相同的值时，不会同步到view层。 例如：每次将scroll-view组件的scroll-top属性值设置为0，只有第一次能顺利返回顶部。 这和props的单向数据流特性有关，组件内部scroll-top的实际值改动后，其绑定的属性并不会一同变化。
When some properties are repeatedly set to the same value, they are not synchronized to the View layer. For example, every time you set the `scroll-top` property of a `scroll-view` component to 0, it only gets back to the top the first time. This is due to the props unidirectional data flow feature. When the actual value of scroll top inside the component changes, the binding properties do not change with it.

解决办法有两种（以scroll-view组件为例）：
There are two solutions (take the `scroll-view` component as an example):

1. 监听scroll事件，记录组件内部变化的值，在设置新值之前先设置为记录的当前值
1. Monitor the scroll event, record the value of the internal change of the component, and set the current value of the record before setting the new value



```html
	<scroll-view scroll-y="true" :scroll-top="scrollTop" @scroll="scroll"></scroll-view>
```


```javaScript
export default {
    data() {
        return {
            scrollTop: 0,
            old: {
                scrollTop: 0
            }
        }
    },
    methods: {
        scroll: function(e) {
            this.old.scrollTop = e.detail.scrollTop
        },
        goTop: function(e) {
            this.scrollTop = this.old.scrollTop
            this.$nextTick(function() {
                this.scrollTop = 0
            });
        }
    }
}

```

2. 监听scroll事件，获取组件内部变化的值，实时更新其绑定值
2. Monitor the scroll event, get the value of the internal change of the component, and update its binding value in real time

```html
	<scroll-view scroll-y="true" :scroll-top="scrollTop" @scroll="scroll"></scroll-view>
```


```js
	export default {
		data() {
			return {
				scrollTop: 0,
			}
		},
		methods: {
			scroll: function(e) {
				// 如果使用此方法，请自行增加防抖处理
				// If you use this method, please add debounce by yourself
				this.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = 0
			}
		}
	}
```


第二种解决方式在某些组件可能造成抖动，**推荐第一种解决方式**。
The second solution may cause jitter in some components, and the **first solution is recommended** .
