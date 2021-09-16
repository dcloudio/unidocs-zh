

|Vue.config.devtools	| Configure whether to allow vue-devtools inspection.  [details](https://cn.vuejs.org/v2/api/#devtools) 	|√	| x	| 只在Web环境下支持		|
| Vue.config.ignoredElements       | Vue must ignore the custom elements outside the Vue's [details](https://vuejs.org/v2/api/#ignoredElements) |√	| √	| 强烈不推荐，会覆盖uni-app框架配置的内置组件		|






| Vue.extend     | Use the basic Vue constructor to create a "subclass" [details](https://vuejs.org/v2/api/#Vue-extend) |√	|√		|不可作为组件使用	|
|Vue.compile	| Compiles a template string into a render function. Only available in the full build.[details](https://cn.vuejs.org/v2/api/#Vue-compile)	|√	| x	| uni-app使用的vue是只包含运行时的版本	|





|mounted	| Called after the instance has been mounted. [details](https://cn.vuejs.org/v2/api/#mounted) 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTick	[详情](https://cn.vuejs.org/v2/api/#Vue-nextTick)	|√	| √		| 




| vm.$parent              | Parent instance, if the current instance of any [details](https://vuejs.org/v2/api/#vm-parent) |√	|√	| H5端 `view`、`text` 等内置标签是以 Vue 组件方式实现，`$parent` 会获取这些到内置组件，导致的问题是 `this.$parent` 与其他平台不一致，解决方式是使用 `this.$parent.$parent` 获取或自定义组件根节点由 `view` 改为 `div`|
| vm.$refs                | An object that holds the [details](https://vuejs.org/v2/api/#vm-refs) of all DOM elements and component instances that have registered ref attribute |√	| √	| 非H5端只能用于获取自定义组件，不能用于获取内置组件实例（如：view、text）		|











| ref                | ref is used to reference the element or sub-component registration information [details](https://vuejs.org/v2/api/#ref) |√	| √	|非 H5 平台只能获取 vue 组件实例不能获取到内置组件实例|









### 2. 如何设置全局的数据和全局的方法

uni-app 内置了 [Vuex](https://uniapp.dcloud.io/vue-vuex) ，在app里的使用，可参考 `hello-uniapp` ` store/index.js`。





