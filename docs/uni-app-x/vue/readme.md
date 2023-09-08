# vue

## template

- App 端，如需页面级滚动，根节点必须是 `scroll-view` 标签。

### [函数 event 参数的类型](uni-app-x/tutorial/codegap.md#function-event-argument-type)

### 指令

- [v-once](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#v-once) 不支持
- [v-html](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#v-html) 不支持

### 事件处理

- [事件修饰符](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6) 不支持

## script

- 仅支持 `export default {}` 方式定义组件。
- `data` 仅支持函数返回对象字面量方式。
```ts
<script lang="uts">
	export default {
		data() {
			return {
				// 必须写这里
			}
		}
	}
</script>
```

## 组件

- [props](uni-app-x/component/README.md#props)
- [自定义事件](uni-app-x/component/README.md#自定义事件)
- [计算属性和侦听器](uni-app-x/component/README.md#计算属性和侦听器)
- [作用域插槽的类型](uni-app-x/component/README.md#作用域插槽的类型)
- [监听页面生命周期](uni-app-x/component/README.md#监听页面生命周期)
- [vue 与 uvue 不同文件后缀的优先级](uni-app-x/component/README.md#priority)

## 应用生命周期
uni-app x 新增了 [onLastPageBackPress](collocation/App.md#applifecycle) 和 [onExit](collocation/App.md#applifecycle) 应用级生命周期，Android退出应用逻辑写在app.uvue里，新建项目的模板自动包含相关代码。如需修改退出逻辑，请直接修改相关代码。

## 插件

暂不支持vue插件，比如pinia、vuex、i18n、router。简单的状态管理可以参考文档[全局变量和状态管理](uni-app-x/tutorial/store.md)。

还有一些支持差异，在左侧文档点开后搜索“uni-app x”可见。
