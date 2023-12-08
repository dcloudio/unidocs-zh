# vue

uni-app x的vue规范，按照vue3规范实现，但目前不支持setup组合式写法，仅支持option选项式写法。

本文暂时只包括兼容性表格，vue功能详情另见 [vue3概述](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#)、[Vue3 API](https://uniapp.dcloud.net.cn/tutorial/vue3-api.html)。

uni-app x中vue的用法，有单独的示例应用：[hello uvue](https://gitcode.net/dcloud/hello-uvue)。这里都是可以跑通的使用样例代码。

## 全局 API兼容性

### 应用实例 @app-instance

<!-- VUEJSON.application.compatibility -->

**注意：**
- **app.use:** `app.use` 支持通过对象字面量、函数及 `definePlugin` 方式定义插件。\
支持传递插件参数，当传递插件参数时，`app` 的类型需要指定为 `VueApp`。
```ts
// main.uts
export function createApp() {
  const app = createSSRApp(App)

  // 通过对象字面量方式注册插件
  app.use({
    install(app) {
      app.config.globalProperties.plugin1 = "plugin1"
    }
  })

  // 通过函数方式注册插件
  app.use(function (app) {
    app.config.globalProperties.plugin2 = "plugin2"
  })

  // 通过 definePlugin + 对象字面量方式注册插件
  const plugin3= definePlugin({
    install(app) {
      app.config.globalProperties.plugin3 = "plugin3"
    }
  })
  app.use(plugin3)

  // 通过 definePlugin + 函数方式注册插件
  const plugin4= definePlugin(function (app) {
    app.config.globalProperties.plugin4 = "plugin4"
  })
  app.use(plugin4)

  // 注册插件时传递参数
  // 注意：当传递插件参数时，app 的类型需要指定为 VueApp
  app.use(function (app: VueApp, arg1:string, arg2:string) {
	  app.config.globalProperties.plugin5 = `${arg1}-${arg2}`
  }, "arg1", "arg2");
}
```
- **app.config.globalProperties:** 请注意，`globalProperties` 是一个保留关键字，因此在项目中请勿声明名为 `globalProperties` 的变量。\
在向 `globalProperties` 注册方法时，请使用直接函数表达式方式进行赋值。不支持先声明函数，再将其注册到 `globalProperties` 上的方式。同时，注册的函数一旦被赋值，不允许进行修改。

### 通用

<!-- VUEJSON.general.compatibility -->
## 响应式兼容性

### 响应式: 核心

<!-- VUEJSON.reactivity_core.compatibility -->
### 响应式: 工具

<!-- VUEJSON.reactivity_utilities.compatibility -->
### 响应式: 进阶

<!-- VUEJSON.reactivity_advanced.compatibility -->

### [函数 event 参数的类型](uni-app-x/tutorial/codegap.md#function-event-argument-type)

### 指令 @directives

<!-- VUEJSON.directives.compatibility -->

**注意：**
- **v-html:** 在 `App-android` 平台，`v-html` 指令通过编译为 [rich-text](uni-app-x/component/rich-text.md) 组件实现。因此，`v-html` 指令的内容必须是 `rich-text` 支持的格式, 并且要遵循标签嵌套规则，例如， `swiper` 标签内只允许嵌套 `swiper-item` 标签。\
同时，受限于 `rich-text` 组件不支持 `class` 样式，`v-html` 指令中同样不支持 `class` 样式。\
绑定 `v-html` 的标签内的内容会被忽略，`v-html` 指令的内容会编译为 `rich-text` 组件渲染为该标签的子节点。

### 事件处理

- [事件修饰符](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6) 只支持 `stop` 和 `once`。

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

## 应用生命周期
uni-app x 新增了 [onLastPageBackPress](collocation/App.md#applifecycle) 和 [onExit](collocation/App.md#applifecycle) 应用级生命周期，Android退出应用逻辑写在app.uvue里，新建项目的模板自动包含相关代码。如需修改退出逻辑，请直接修改相关代码。

## 组件

- [props](../component/README.md#props)
- [自定义事件](../component/README.md#自定义事件)
- [计算属性和侦听器](../component/README.md#计算属性和侦听器)
- [作用域插槽的类型](../component/README.md#作用域插槽的类型)
- [监听页面生命周期](../component/README.md#监听页面生命周期)
- [vue 与 uvue 不同文件后缀的优先级](../component/README.md#priority)

<!-- VUEJSON.components.compatibility -->
### 特殊元素 @special-elements

<!-- VUEJSON.special_elements.compatibility -->

- App 端，如需页面级滚动，根节点必须是 `scroll-view` 标签。

### 特殊 Attributes @special-attributes

<!-- VUEJSON.special_attributes.compatibility -->

### 生命周期选项 @lifecycle-options

<!-- VUEJSON.options_lifecycle.compatibility -->

## 插件

暂不支持vue插件，比如pinia、vuex、i18n、router。简单的状态管理可以参考文档[全局变量和状态管理](../tutorial/store.md)。

## 选项式 API兼容性

### 状态选项


<!-- VUEJSON.options_state.compatibility -->
### 渲染选项 @rendering-options


<!-- VUEJSON.options_rendering.compatibility -->

### 组合选项 @composition-options


<!-- VUEJSON.options_composition.compatibility -->

**注意：**
- **inject:** 当使用 `inject` 声明从上层提供方注入的属性时，支持两种写法：字符串数组和对象。推荐使用对象写法，因为当使用数组方法时，类型会被推导为 `any | null` 类型。\
使用对象写法时，额外增加 `type` 属性用于标记类型。如果注入的属性类型不是基础数据类型，需要通过 `PropType` 来标记类型。
```ts
export default {
  inject: {
    provideString: {
      type: String,
      default: 'default provide string value'
    },
    provideObject: {
      type: Object as PropType<UTSJSONObject>
    },
    provideMap: {
      type: Object as PropType<Map<string, string>>,
      default: (): Map<string, string> => {
        return new Map<string, string>([['key', 'default provide map value']])
      }
    }
  }
}
```
- **mixins:** `mixins` 仅支持通过字面量对象方式和 `defineMixin` 函数方式定义。
```ts
const mixin1 = defineMixin({
  onLoad() {
    console.log('mixin1 onLoad')
  }
})
export default {
  mixins: [
    mixin1,
    {
      data() {
        return {
          mixin2: 'mixin2'
        }
      }
    }
  ]
}
```
同名属性会被覆盖，同名生命周期会依次执行。

同名属性的优先级如下：
- 在 `app.mixin` 内嵌入的 mixin < 在 `app.mixin` 中声明的 mixin < 在 `page.mixin` 内嵌入的 mixin < 在 `page.mixin` 中声明的 mixin < 在 `component.mixin` 内嵌入的 mixin < 在 `component.mixin` 中声明的 mixin

同名生命周期的执行顺序如下：
1. 在 `app.mixin` 内嵌入的 mixin
2. 在 `app.mixin` 中声明的 mixin
3. 在 `page.mixin` 内嵌入的 mixin
4. 在 `page.mixin` 中声明的 mixin
5. 在 `component.mixin` 内嵌入的 mixin
6. 在 `component.mixin` 中声明的 mixin

### 其他杂项


<!-- VUEJSON.options_misc.compatibility -->
### 组件实例 @component-instance


<!-- VUEJSON.component_instance.compatibility -->

## 进阶 API兼容性

### 渲染函数


<!-- VUEJSON.render_function.compatibility -->

<!-- ## Bug & Tips@tips -->
