## 应用配置
## Application Config

`config` 是一个包含了 `Vue` 应用全局配置的对象。你可以在应用挂载前修改其以下 `property`：
Every Vue application exposes a config object that contains the configuration settings for that application:

```js
const app = Vue.createApp({})

app.config = {...}
```



|应用配置|描述	|H5		|App端|微信小程序  |说明	|
|App Configuration|Description |H5 |App Terminal|WeChat Mini Program |Description |
|--	|--	|--	|--	|--	|--	|
|errorHandler	|指定一个处理函数，来处理组件渲染方法执行期间以及侦听器抛出的未捕获错误。[详情](https://v3.cn.vuejs.org/api/application-config.html#errorhandler)	|√	|√	| √	||
|errorHandler |Specifies a handler function to handle uncaught errors thrown during the execution of the component's render method and by the listener. [Details](https://v3.cn.vuejs.org/api/application-config.html#errorhandler) |√ |√ | √ ||
|warnHandler	|为 `Vue` 的运行时警告指定一个自定义处理函数。[详情](https://v3.cn.vuejs.org/api/application-config.html#warnhandler)	|√	|√	| √	||
|warnHandler | Specify a custom handler for `Vue`'s runtime warnings. [Details](https://v3.cn.vuejs.org/api/application-config.html#warnhandler) |√ |√ | √ ||
|globalProperties	|添加可以在应用程序内的任何组件实例中访问的全局 `property`。[详情](https://v3.cn.vuejs.org/api/application-config.html#globalproperties)	|√	|√	| √	||
|globalProperties |Adds a global `property` that can be accessed in any component instance within the application. [Details](https://v3.cn.vuejs.org/api/application-config.html#globalproperties) |√ |√ | √ ||
|isCustomElement	|指定一个方法，用来识别在 `Vue` 之外定义的自定义元素。[详情](https://v3.cn.vuejs.org/api/application-config.html#iscustomelement)	|√	|√	| √	||
|isCustomElement |Specifies a method to identify custom elements defined outside of `Vue`. [Details](https://v3.cn.vuejs.org/api/application-config.html#iscustomelement) |√ |√ | √ ||
|optionMergeStrategies	|为自定义选项定义合并策略。[详情](https://v3.cn.vuejs.org/api/application-config.html#optionmergestrategies)	|√	|√	| √	||
|optionMergeStrategies |Define merge strategies for custom options. [Details](https://v3.cn.vuejs.org/api/application-config.html#optionmergestrategies) |√ |√ | √ ||
|performance|设置为 `true` 以在浏览器开发工具的 `performance/timeline` 面板中启用对组件初始化、编译、渲染和更新的性能追踪。[详情](https://v3.cn.vuejs.org/api/application-config.html#performance)	|√	|x	| x|只在Web环境下支持|
|performance| Set to `true` to enable performance tracking of component initialization, compilation, rendering and updates in the `performance/timeline` panel of the browser dev tools. [Details](https://v3.cn.vuejs.org/api/application-config.html#performance) |√ |x | x|Only supported in Web environment|



## 应用 API
## Application API

在 Vue 3 中，改变全局 `Vue` 行为的 `API` 现在被移动到了由新的 `createApp` 方法所创建的应用实例上。此外，现在它们的影响仅限于该特定应用实例：
In Vue 3, APIs that globally mutate Vue's behavior are now moved to application instances created by the new `createApp` method. In addition, their effects are now scoped to that specific application's instance:

```js
import { createApp } from 'vue'

const app = createApp({})
```


调用 `createApp` 返回一个应用实例。该实例提供了一个应用上下文。应用实例挂载的整个组件树共享相同的上下文，该上下文提供了之前在 `Vue 2.x` 中“全局”的配置。
Calling `createApp` returns an application instance. This instance provides an application context. The entire component tree mounted by the application instance share the same context, which provides the configurations that were previously "global" in `Vue 2.x`.

另外，由于 `createApp` 方法返回应用实例本身，因此可以在其后链式调用其它方法，这些方法可以在以下部分中找到。
In addition, since the `createApp` method returns the application instance itself, you can chain other methods after it which can be found in the following sections.


|应用 API|描述	|H5		|App端|微信小程序  |说明 |
|--	|--	|--	|--	|--	|-- |
|component	|注册或检索全局组件。[详情](https://v3.cn.vuejs.org/api/application-api.html#component)	|√	|√	| √	||
|config	|包含应用配置的对象。[详情](https://v3.cn.vuejs.org/api/application-api.html#config)	|√	|√	| √	||
|directive	|注册或检索全局指令。[详情](https://v3.cn.vuejs.org/api/application-api.html#directive)	|√	|√	|x	||
|mixin	|在整个应用范围内应用混入。[详情](https://v3.cn.vuejs.org/api/application-api.html#mixin)	|√	|√	| √	|nvue 页面暂不支持 |
|provide|设置一个可以被注入到应用范围内所有组件中的值。[详情](https://v3.cn.vuejs.org/api/application-api.html#provide)	|√	|√	| √	||
|use|安装 `Vue.js` 插件。[详情](https://v3.cn.vuejs.org/api/application-api.html#use)	|√	|√	| √	||



## 全局 API
## Global API

|全局 API|描述	|H5		|App端|微信小程序  |
|Global API|Description |H5 |App |WeChat Mini Program |
|--	|--	|--	|--	|--	|
|createApp	|返回一个提供应用上下文的应用实例。应用实例挂载的整个组件树共享同一个上下文。[详情](https://v3.cn.vuejs.org/api/global-api.html#createapp)	|√	|√	| √	|
|createApp |Returns an application instance that provides the application context. The entire component tree mounted by an application instance shares the same context. [Details](https://v3.cn.vuejs.org/api/global-api.html#createapp) |√ |√ | √ |
|h	|返回一个”虚拟节点“，通常缩写为 `VNode`：一个普通对象，其中包含向 `Vue` 描述它应在页面上渲染哪种节点的信息，包括所有子节点的描述。[详情](https://v3.cn.vuejs.org/api/global-api.html#h)	|√	|x	| x	|
|h | Returns a "virtual node", often abbreviated `VNode`: a plain object that contains information describing to `Vue` what kind of node it should render on the page, including descriptions of all child nodes. [Details](https://v3.cn.vuejs.org/api/global-api.html#h) |√ |x | x |
|defineComponent	|从实现上看，`defineComponent` 只返回传递给它的对象。但是，就类型而言，返回的值有一个合成类型的构造函数，用于手动渲染函数、`TSX` 和 `IDE` 工具支持。[详情](https://v3.cn.vuejs.org/api/global-api.html#definecomponent)	|√	|x	| x	|
|defineComponent |By implementation, `defineComponent` only returns the object passed to it. However, in terms of type, the returned value has a synthetic type constructor for manual rendering functions, `TSX` and `IDE` tool support. [Details](https://v3.cn.vuejs.org/api/global-api.html#definecomponent) |√ |x | x |
|defineAsyncComponent	|创建一个只有在需要时才会加载的异步组件。[详情](https://v3.cn.vuejs.org/api/global-api.html#defineasynccomponent)	|√	|x	| x	|
|defineAsyncComponent |Creates an asynchronous component that is loaded only when needed. [Details](https://v3.cn.vuejs.org/api/global-api.html#defineasynccomponent) |√ |x | x |
|resolveComponent	|如果在当前应用实例中可用，则允许按名称解析 `component`。返回一个 `Component`。[详情](https://v3.cn.vuejs.org/api/global-api.html#resolvecomponent)	|√	|x	| x	|
|resolveComponent | Allows `component` to be resolved by name if available in the current application instance. Returns a `Component`. [Details](https://v3.cn.vuejs.org/api/global-api.html#resolvecomponent) |√ |x | x |
|resolveDynamicComponent|允许使用与 `component :is=""` 相同的机制来解析一个 `component`。[详情](https://v3.cn.vuejs.org/api/global-api.html#resolvedynamiccomponent)	|√	|x	| x	|
|resolveDynamicComponent| allows to resolve a `component` using the same mechanism as `component :is=""`. [Details](https://v3.cn.vuejs.org/api/global-api.html#resolvedynamiccomponent) |√ |x | x |
|resolveDirective|如果在当前应用实例中可用，则允许通过其名称解析一个 `directive`。返回一个 `Directive`。[详情](https://v3.cn.vuejs.org/api/global-api.html#resolvedirective)	|√	|x	| x	|
|resolveDirective|Allows a `directive` to be resolved by its name if available in the current application instance. Returns a `Directive`. [Details](https://v3.cn.vuejs.org/api/global-api.html#resolvedirective) |√ |x | x |
|withDirectives|允许将指令应用于 `VNode`。返回一个包含应用指令的 `VNode`。[详情](https://v3.cn.vuejs.org/api/global-api.html#withdirectives)	|√	|x	| x	|
|withDirectives| allows directives to be applied to a `VNode`. Returns a `VNode` containing application instructions. [Details](https://v3.cn.vuejs.org/api/global-api.html#withdirectives) |√ |x | x |
|createRenderer|createRenderer 函数接受两个泛型参数： `HostNode` 和 `HostElement`，对应于宿主环境中的 `Node` 和 `Element` 类型。[详情](https://v3.cn.vuejs.org/api/global-api.html#createrenderer)	|√	|x| x	|
|createRenderer|createRenderer function accepts two generic parameters: `HostNode` and `HostElement`, corresponding to the `Node` and `Element` types in the host environment. [Details](https://v3.cn.vuejs.org/api/global-api.html#createrenderer) |√ |x| x |
|nextTick|将回调推迟到下一个 `DOM` 更新周期之后执行。在更改了一些数据以等待 `DOM` 更新后立即使用它。[详情](https://v3.cn.vuejs.org/api/global-api.html#nexttick)	|√	| x	| x	|
|nextTick| Defer callback execution until after the next `DOM` update cycle. Use it immediately after changing some data to wait for `DOM` to update. [Details](https://v3.cn.vuejs.org/api/global-api.html#nexttick) |√ | x | x |




## 选项/Data
## Options/Data


|Data|描述	|H5		|App端|微信小程序  |
|Data|Description |H5 |App |WeChat Mini Program |
|--	|--	|--	|--	|--	|
|data	|返回组件实例的 `data` 对象的函数。[详情](https://v3.cn.vuejs.org/api/options-data.html)	|√	|√	| √	|
|data |A function that returns the `data` object of the component instance. [Details](https://v3.cn.vuejs.org/api/options-data.html) |√ |√ | √ |
|props	|`props` 可以是数组或对象，用于接收来自父组件的数据。[详情](https://v3.cn.vuejs.org/api/options-data.html#props)	|√	|√	| √	|
|props | `props` can be an array or an object to receive data from the parent component. [Details](https://v3.cn.vuejs.org/api/options-data.html#props) |√ |√ | √ |
|computed	|计算属性将被混入到组件实例中。所有 `getter` 和 `setter` 的 `this` 上下文自动地绑定为组件实例。[详情](https://v3.cn.vuejs.org/api/options-data.html#computed)	|√	|√	| √	|
|computed |The computed property will be mixed into the component instance. The `this` context of all `getters` and `setter`s is automatically bound to the component instance. [Details](https://v3.cn.vuejs.org/api/options-data.html#computed) |√ |√ | √ |
|methods	|methods 将被混入到组件实例中。可以直接通过 `VM` 实例访问这些方法，或者在指令表达式中使用。方法中的 `this` 自动绑定为组件实例。[详情](https://v3.cn.vuejs.org/api/options-data.html#methods)	|√	|√	| √	|
|methods |methods will be mixed into the component instance. These methods can be accessed directly through the `VM` instance, or used in instruction expressions. `this` in a method is automatically bound to the component instance. [Details](https://v3.cn.vuejs.org/api/options-data.html#methods) |√ |√ | √ |
|watch	|一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。[详情](https://v3.cn.vuejs.org/api/options-data.html#watch)	|√	|√	| √	|
|watch |An object, the key is the expression to watch, and the value is the corresponding callback function. The value can also be a method name, or an object containing options. [Details](https://v3.cn.vuejs.org/api/options-data.html#watch) |√ |√ | √ |
|emits|emits 可以是数组或对象，从组件触发自定义事件，`emits` 可以是简单的数组，或者对象作为替代，允许配置和事件验证。[详情](https://v3.cn.vuejs.org/api/options-data.html#emits)	|√	|√	| √	|
|emits|emits can be an array or object to fire custom events from the component, `emits` can be a simple array, or an object instead, allowing configuration and event validation. [Details](https://v3.cn.vuejs.org/api/options-data.html#emits) |√ |√ | √ |


## 选项/DOM
## Options/DOM


|DOM|描述	|H5		|App端|微信小程序  |说明	|
|DOM|Description |H5 |App |WeChat Mini Program |Description |
|--	|--	|--	|--	|--	|--	|
|template	|一个字符串模板作为 `component` 实例的标识使用。[详情](https://v3.cn.vuejs.org/api/options-dom.html#template)	|√	|x	| x		|uni-app使用的vue是只包含运行时的版本		|
|template |A string template to use as the identifier for the `component` instance. [Details](https://v3.cn.vuejs.org/api/options-dom.html#template) |√ |x | x |The vue used by uni-app is the version that only contains runtime |
|render	|字符串模板的另一种选择，允许你充分利用 `JavaScript` 的编程功能。[详情](https://v3.cn.vuejs.org/api/options-dom.html#render)	|√	| x	| x		|	-	|
|render | An alternative to string templates, allowing you to take full advantage of the programming capabilities of `JavaScript`. [Details](https://v3.cn.vuejs.org/api/options-dom.html#render) |√ | x | x | - |



## 选项/生命周期钩子
## Options/Lifecycle hooks


|生命周期钩子|描述	|H5		|App端|微信小程序  |
|Lifecycle hooks|Description |H5 |App terminal|WeChat applet |
|--	|--	|--	|--	|--	|
|beforeCreate	|在实例初始化之后，数据观测` (data observer) `和 `event/watcher` 事件配置之前被调用。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforecreate)	|√	|√	| √	|
|beforeCreate |Called after instance initialization, before data observer and event/watcher event configuration. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforecreate) |√ |√ | √ |
|created	|在实例创建完成后被立即调用。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#created)	|√	|√	| √	|
|created |Called immediately after the instance is created. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#created) |√ |√ | √ |
|beforeMount	|在挂载开始之前被调用：相关的 `render` 函数首次被调用。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforemount)	|√	|√	| √	|
|beforeMount |Called before the mount starts: the associated `render` function is called for the first time. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforemount) |√ |√ | √ |
|mounted	|实例被挂载后调用，这时 `Vue.createApp({}).mount()` 被新创建的 `vm.$el` 替换了。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#mounted)	|√	|√	| √	|
|mounted |Called after the instance is mounted, when `Vue.createApp({}).mount()` is replaced by the newly created `vm.$el`. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#mounted) |√ |√ | √ |
|beforeUpdate	|数据更新时调用，发生在虚拟 `DOM` 打补丁之前。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforeupdate)	|√	|√	| √	|
|beforeUpdate | Called when data is updated, before the virtual `DOM` is patched. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforeupdate) |√ |√ | √ |
|updated|由于数据更改导致的虚拟 `DOM` 重新渲染和打补丁，在这之后会调用该钩子。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#updated)	|√	|√	| √	|
|updated|This hook is called after the virtual `DOM` is re-rendered and patched due to data changes. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#updated) |√ |√ | √ |
|activated|被 `keep-alive` 缓存的组件激活时调用。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#activated)	|√	|√	| x	|
|activated| Called when a component cached by `keep-alive` is activated. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#activated) |√ |√ | x |
|deactivated|被 `keep-alive` 缓存的组件停用时调用。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#deactivated)	|√	|√	| x	|
|deactivated| Called when a component cached by `keep-alive` is deactivated. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#deactivated) |√ |√ | x |
|beforeUnmount|在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforeunmount)	|√	|√	| √	|
|beforeUnmount| Called before the component instance is unmounted. At this stage, the instance is still completely normal. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforeunmount) |√ |√ | √ |
|unmounted|卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#unmounted)	|√	|√	| √	|
|unmounted|Called after the component instance is unmounted. When this hook is called, all directives of the component instance are unbound, all event listeners are removed, and all child component instances are unloaded. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#unmounted) |√ |√ | √ |
|errorCaptured	|当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#errorcaptured)	|√	|√	| √	|
|errorCaptured |Called when an error from a descendant component is captured. This hook receives three parameters: the error object, the component instance where the error occurred, and a string containing information about the source of the error. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#errorcaptured) |√ |√ | √ |
|renderTracked	|跟踪虚拟 `DOM` 重新渲染时调用。钩子接收 `debugger event` 作为参数。此事件告诉你哪个操作跟踪了组件以及该操作的目标对象和键。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#rendertracked)	|√	|√	| √	|
|renderTracked | Called when the tracked virtual `DOM` is re-rendered. The hook receives `debugger event` as a parameter. This event tells you which action tracked the component and the target object and key for that action. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#rendertracked) |√ |√ | √ |
|renderTriggered	|当虚拟 `DOM` 重新渲染为 `triggered.Similarly` 为`renderTracked`，接收 `debugger event` 作为参数。此事件告诉你是什么操作触发了重新渲染，以及该操作的目标对象和键。[详情](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#rendertriggered)	|√	|√	| √	|
|renderTriggered |When the virtual `DOM` is re-rendered to `triggered.Similarly` to `renderTracked`, receive a `debugger event` as a parameter. This event tells you what action triggered the re-render, and the target object and key for that action. [Details](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#rendertriggered) |√ |√ | √ |


## 选项/资源
## Options/Assets


|资源|描述	|H5		|App端|微信小程序  |
|Resources|Description |H5 |App Terminal|WeChat Mini Program |
|--	|--	|--	|--	|--	|
|directives	|包含组件实例可用指令的哈希表。[详情](https://v3.cn.vuejs.org/api/options-assets.html#directives)	|√	|√	|x	|
|directives | A hash table containing the directives available to the component instance. [Details](https://v3.cn.vuejs.org/api/options-assets.html#directives) |√ |√ |x |
|components	|包含组件实例可用组件的哈希表。[详情](https://v3.cn.vuejs.org/api/options-assets.html#components)	|√	|√	| √	|
|components | Contains a hash table of components available for a component instance. [Details](https://v3.cn.vuejs.org/api/options-assets.html#components) |√ |√ | √ |


## 选项/组合
## Options/Composition


|组合|描述	|H5		|App端|微信小程序  |
|Combination|Description |H5 |App Terminal|WeChat Mini Program |
|--	|--	|--	|--	|--	|
|mixins	|接收一个混入对象的数组。这些混入对象可以像正常的实例对象一样包含实例选项，这些选项将会被合并到最终的选项中，使用特定的选项合并逻辑。[详情](https://v3.cn.vuejs.org/api/options-composition.html#mixins)	|√	|√	| √	|
|mixins |Receives an array of mixin objects. These mixins can contain instance options just like normal instance objects, and these options will be merged into the final option, using specific option merge logic. [Details](https://v3.cn.vuejs.org/api/options-composition.html#mixins) |√ |√ | √ |
|extends	|允许声明扩展另一个组件 (可以是一个简单的选项对象或构造函数)。这主要是为了便于扩展单文件组件。[详情](https://v3.cn.vuejs.org/api/options-composition.html#extends)	|√	|√	| √	|
|extends | allows a declaration to extend another component (can be a simple options object or a constructor). This is mainly to facilitate extending single-file components. [Details](https://v3.cn.vuejs.org/api/options-composition.html#extends) |√ |√ | √ |
|provide / inject	|这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。[详情](https://v3.cn.vuejs.org/api/options-composition.html#provide-inject)	|√	|√	| √	|
|provide / inject |The pair of options needs to be used together to allow an ancestor component to inject a dependency into all its descendants, no matter how deep the component hierarchy is, and it will always take effect as long as the upstream and downstream relationships are established. [Details](https://v3.cn.vuejs.org/api/options-composition.html#provide-inject) |√ |√ | √ |
|setup	|`setup` 函数是一个新的组件选项。它作为在组件内部使用组合式 `API` 的入口点。[详情](https://v3.cn.vuejs.org/api/options-composition.html#setup)	|√	|√	| √	|
|setup | The `setup` function is a new component option. It acts as an entry point for using the composition `API` inside the component. [Details](https://v3.cn.vuejs.org/api/options-composition.html#setup) |√ |√ | √ |



## 选项/杂项
## Options/Misc


|杂项|描述	|H5		|App端|微信小程序  |
|Miscellaneous|Description |H5 |App Terminal|WeChat Mini Program |
|--	|--	|--	|--	|--	|
|name	|允许组件模板递归地调用自身。注意，组件在全局用 `Vue.createApp({}).component({})` 注册时，全局 `ID` 自动作为组件的 `name`。[详情](https://v3.cn.vuejs.org/api/options-misc.html#name)	|√	|√	| √	|
|name | allows the component template to call itself recursively. Note that when a component is registered globally with `Vue.createApp({}).component({})`, the global `ID` is automatically used as the component's `name`. [Details](https://v3.cn.vuejs.org/api/options-misc.html#name) |√ |√ | √ |
|delimiters	|设置用于模板内文本插入的分隔符。[详情](https://v3.cn.vuejs.org/api/options-misc.html#delimiters)	|√	|x	| x	|
|delimiters | Sets the delimiters used for text insertion within templates. [Details](https://v3.cn.vuejs.org/api/options-misc.html#delimiters) |√ |x | x |
|inheritAttrs	|默认情况下父作用域的不被认作 `props` 的 `attribute` 绑定 (`attribute bindings`) 将会“回退”且作为普通的 `HTML attribute` 应用在子组件的根元素上。当撰写包裹一个目标元素或另一个组件的组件时，通过设置 `inheritAttrs` 到 `false`，这些默认行为将会被去掉。[详情](https://v3.cn.vuejs.org/api/options-misc.html#inheritattrs)	|√	|√	| x	|
|inheritAttrs |By default parent-scoped `attribute` bindings (`attribute bindings`) that are not considered `props` will "fall back" and be applied to the root element of child components as normal `HTML attributes` superior. By setting `inheritAttrs` to `false` when writing components that wrap a target element or another component, these default behaviors will be removed. [Details](https://v3.cn.vuejs.org/api/options-misc.html#inheritattrs) |√ |√ | x |



## 实例 property
## Instance Properties


|实例 property|描述	|H5		|App端|微信小程序  |说明	|
|Instance property|Description |H5 |App |WeChat applet |Description |
|--	|--	|--	|--	|--	|--	|
|$data	|组件实例观察的数据对象。组件实例代理了对其 `data` 对象 `property` 的访问。[详情](https://v3.cn.vuejs.org/api/instance-properties.html#data)	|√	|√	| √	||
|$data |The data object observed by the component instance. A component instance proxies access to its `data` object `property`. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#data) |√ |√ | √ ||
|$props	|当前组件接收到的 `props` 对象。组件实例代理了对其 `props` 对象 `property` 的访问。[详情](https://v3.cn.vuejs.org/api/instance-properties.html#props)	|√	|√	| √	||
|$props | The `props` object received by the current component. A component instance proxies access to its `props` object `property`. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#props) |√ |√ | √ ||
|$el	|组件实例使用的根 `DOM` 元素。[详情](https://v3.cn.vuejs.org/api/instance-properties.html#el)	|√	|	x| 	x||
|$el | The root `DOM` element used by the component instance. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#el) |√ | x| x||
|$options	|用于当前组件实例的初始化选项。需要在选项中包含自定义 `property` 时会有用处。[详情](https://v3.cn.vuejs.org/api/instance-properties.html#options)	|√	|√	| √	||
|$options |Init options for the current component instance. Useful when you need to include custom `property` in options. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#options) |√ |√ | √ ||
|$parent	|父实例，如果当前实例有的话。[详情](https://v3.cn.vuejs.org/api/instance-properties.html#parent)	|√	|√	| √	|H5端 `view`、`text` 等内置标签是以 `Vue` 组件方式实现，`$parent` 会获取这些到内置组件，导致的问题是 `this.$parent` 与其他平台不一致，解决方式是使用 `this.$parent.$parent` 获取或自定义组件根节点由 `view` 改为 `div`|
|$parent | Parent instance, if the current instance has one. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#parent) |√ |√ | √ |The built-in tags such as `view` and `text` on the H5 side are `Vue` Component implementation, `$parent` will get these to built-in components, the problem is that `this.$parent` is inconsistent with other platforms, the solution is to use `this.$parent.$parent` to get or customize the root node of the component Changed from `view` to `div`|
|$root	|当前组件树的根组件实例。如果当前实例没有父实例，此实例将会是其自己。[详情](https://v3.cn.vuejs.org/api/instance-properties.html#root)	|√	|√	| √	||
|$slots	|用来访问被插槽分发的内容。每个具名插槽有其相应的 `property` (例如：`v-slot:foo` 中的内容将会在 `this.$slots.foo` 中被找到)。[详情](https://v3.cn.vuejs.org/api/instance-properties.html#slots)	|√	|√	| √	||
|$refs	|一个对象，持有注册过 `ref attribute` 的所有 `DOM` 元素和组件实例。[详情](https://v3.cn.vuejs.org/api/instance-properties.html#refs)	|√	|√	| √|非H5端只能用于获取自定义组件，不能用于获取内置组件实例（如：`view`、`text`），`uni-app x` 内置组件绑定 `ref` 会返回组件根节点的引用。|
|$attrs	|包含了父作用域中不作为组件 `props` 或自定义事件。[详情](https://v3.cn.vuejs.org/api/instance-properties.html#attrs)	|√	|√	| x	|-|
|$attrs | Contains `props` or custom events that are not part of the parent scope. [Details](https://v3.cn.vuejs.org/api/instance-properties.html#attrs) |√ |√ | x |-|


## 实例方法
## Instance Methods

|实例方法|描述	|H5		|App端|微信小程序  |
|Instance method|Description |H5 |App terminal|WeChat applet |
|--	|--	|--	|--	|--	|
|$watch	|侦听组件实例上的响应式 `property` 或函数计算结果的变化。[详情](https://v3.cn.vuejs.org/api/instance-methods.html#watch)	|√	|√	| √	|
|$watch |Listen to changes in reactive `property` or function evaluation results on component instances. [Details](https://v3.cn.vuejs.org/api/instance-methods.html#watch) |√ |√ | √ |
|$emit	|触发当前实例上的事件。附加参数都会传给监听器回调。[详情](https://v3.cn.vuejs.org/api/instance-methods.html#emit)	|√	|√	| √	|
|$emit |Trigger an event on the current instance. Additional parameters are passed to the listener callback. [Details](https://v3.cn.vuejs.org/api/instance-methods.html#emit) |√ |√ | √ |
|$forceUpdate	|迫使组件实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。[详情](https://v3.cn.vuejs.org/api/instance-methods.html#forceupdate)	|√	|√	| √	|
|$forceUpdate | Forces the component instance to re-render. Note that it only affects the instance itself and subcomponents that insert the contents of the slot, not all subcomponents. [Details](https://v3.cn.vuejs.org/api/instance-methods.html#forceupdate) |√ |√ | √ |
|$nextTick	|将回调延迟到下次 `DOM` 更新循环之后执行。在修改数据之后立即使用它，然后等待 `DOM` 更新。[详情](https://v3.cn.vuejs.org/api/instance-methods.html#nexttick)	|√	|√	| √	|
|$nextTick | Delay callback execution until after the next `DOM` update loop. Use it immediately after modifying the data, then wait for the `DOM` to update. [Details](https://v3.cn.vuejs.org/api/instance-methods.html#nexttick) |√ |√ | √ |




## 指令
## Directives

|Vue 指令		|描述						|H5		|App端|微信小程序  |说明	|
|Vue Directive |Description |H5 |App |WeChat Mini Program |Description |
| --				| --						| --	|--		|--			| --	|
|v-text	| 更新元素的 `textContent`。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-text) 	|√	|√	| x		|		|
| v-text | Update the `textContent` of the element. [Details](https://v3.cn.vuejs.org/api/directives.html#v-text) |√ |√ | x | |
|v-html	| 更新元素的 `innerHTML`。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-html) 	|√	| √	| √		|微信小程序会被转成 `rich-text`		|
| v-html | Update the `innerHTML` of an element. [Details](https://v3.cn.vuejs.org/api/directives.html#v-html) |√ | √ | √ |WeChat MiniApp will be converted into `rich-text` |
|v-show	| 根据表达式的真假值，切换元素的 `display CSS property`。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-show) 	|√	| √	| √		|		|
|v-show | Toggles the element's `display CSS property` based on the true or false value of the expression. [Details](https://v3.cn.vuejs.org/api/directives.html#v-show) |√ | √ | √ | |
|v-if	| 根据表达式的真假值来有条件地渲染元素。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-if) 	|√	| √	| √		|		|
|v-if | Conditionally render elements based on the true or false value of an expression. [Details](https://v3.cn.vuejs.org/api/directives.html#v-if) |√ | √ | √ | |
|v-else	| 为 `v-if` 或者 `v-else-if` 添加`“else 块”`。[详情](https://v3.cn.vuejs.org/api/directives.html#v-else) 	|√	| √	| √		|		|
|v-else | Adds `"else block"` for `v-if` or `v-else-if`. [Details](https://v3.cn.vuejs.org/api/directives.html#v-else) |√ | √ | √ | |
|v-else-if| 表示 `v-if` 的`“else if 块”`。可以链式调用。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-else-if) 	|√	| √	| √		|		|
|v-else-if| means the `“else if block”` of `v-if`. Can be chained. [Details](https://v3.cn.vuejs.org/api/directives.html#v-else-if) |√ | √ | √ | |
|v-for	| 基于源数据多次渲染元素或模板块。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-for) 	|√	| √	| √		|		|
|v-for | Renders an element or template block multiple times based on source data. [Details](https://v3.cn.vuejs.org/api/directives.html#v-for) |√ | √ | √ | |
|v-on	| 绑定事件监听器。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-on) 	|√	| √	| √		|		|
|v-on | Bind event listener. [Details](https://v3.cn.vuejs.org/api/directives.html#v-on) |√ | √ | √ | |
|v-bind	| 动态地绑定一个或多个 `attribute`，或一个组件 `prop` 到表达式。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-bind) 	|√	| √	| √		||
|v-bind | Dynamically bind one or more `attribute`s, or a component `prop` to an expression. [Details](https://v3.cn.vuejs.org/api/directives.html#v-bind) |√ | √ | √ ||
|v-model| 在表单控件或者组件上创建双向绑定。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-model) 	|√	| √	| √		|		|
|v-model| Creates two-way bindings on form controls or components. [Details](https://v3.cn.vuejs.org/api/directives.html#v-model) |√ | √ | √ | |
|v-slot	| 提供具名插槽或需要接收 `prop` 的插槽。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-slot) 	|√	| √	| √		| 	|
|v-slot | Provides a named slot or a slot that needs to receive `prop`. [Details](https://v3.cn.vuejs.org/api/directives.html#v-slot) |√ | √ | √ | |
|v-pre	| 跳过这个元素和它的子元素的编译过程。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-pre) 	|√	| √	| x		|		|
|v-pre | Skips compilation of this element and its children. [Details](https://v3.cn.vuejs.org/api/directives.html#v-pre) |√ | √ | x | |
|v-cloak| 这个指令保持在元素上直到关联组件实例结束编译。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-cloak) 	|√	| x	| x		|		|
|v-cloak| This directive remains on the element until the associated component instance finishes compiling. [Details](https://v3.cn.vuejs.org/api/directives.html#v-cloak) |√ | x | x | |
|v-once	| 只渲染元素和组件一次。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-once) 	|√	| √	| x		| 	|
|v-once | Render elements and components only once. [Details](https://v3.cn.vuejs.org/api/directives.html#v-once) |√ | √ | x | |
|v-is	| 在 `DOM` 内模板使用时，模板受原生 `HTML` 解析规则的约束。 [详情](https://v3.cn.vuejs.org/api/directives.html#v-is) 	|√	| x	| x		| -	|
|v-Yes | Templates are subject to native `HTML` parsing rules when used within `DOM` templates. [Details](https://v3.cn.vuejs.org/api/directives.html#v-is) |√ | x | x | - |



## 特殊属性
## Special Attributes

|特殊属性		|描述						|H5		|App端|微信小程序  |说明	|
|Special Properties |Description |H5 |App |WeChat Mini Program |Description |
| --				| --						| --	|--		|--			| --	|
|key	| `key` 的特殊 `attribute` 主要用在 `Vue` 的虚拟 `DOM` 算法，在新旧 `nodes` 对比时辨识 `VNodes`。 [详情](https://v3.cn.vuejs.org/api/special-attributes.html#key) 	|√	| √	| √		|	|
|key | The special `attribute` of `key` is mainly used in `Vue`'s virtual `DOM` algorithm to identify `VNodes` when comparing old and new `nodes`. [Details](https://v3.cn.vuejs.org/api/special-attributes.html#key) |√ | √ | √ | |
|ref	| ref 被用来给元素或子组件注册引用信息。 [详情](https://v3.cn.vuejs.org/api/special-attributes.html#ref) 	|√	| √	| √		|非 H5 平台只能获取 `vue` 组件实例不能获取到内置组件实例|
|ref | ref is used to register references to elements or subcomponents. [Details](https://v3.cn.vuejs.org/api/special-attributes.html#ref) |√ | √ | √ |Non-H5 platform can only get `vue` component instance but cannot get built-in component instance |
|is	| 使用[动态组件](https://v3.cn.vuejs.org/guide/component-dynamic-async.html)。 [详情](https://v3.cn.vuejs.org/api/special-attributes.html#is) 	|√	| √	| x		|	-	|
|Yes | Use [Dynamic Components](https://v3.cn.vuejs.org/guide/component-dynamic-async.html). [Details](https://v3.cn.vuejs.org/api/special-attributes.html#is) |√ | √ | x | - |



## 内置组件
## Built-In Components

|内置组件		|描述						|H5		|App端|微信小程序  |
|Built-in components |Description |H5 |App |WeChat applet |
| --				| --						| --	|--		|--			| 
|component	| 渲染一个“元组件”为动态组件。依 `is` 的值，来决定哪个组件被渲染。 [详情](https://cn.vuejs.org/api/built-in-special-elements.html#component) 	|√	| √	| x		|		|
|transition	| 作为单个元素/组件的过渡效果。 [详情](https://v3.cn.vuejs.org/api/built-in-components.html#transition) 	|√	| x	| x		|		|
|transition | Transition effect as a single element/component. [Details](https://v3.cn.vuejs.org/api/built-in-components.html#transition) |√ | x | x | |
|transition-group	| 作为多个元素/组件的过渡效果。 [详情](https://v3.cn.vuejs.org/api/built-in-components.html#transition-group) 	|√	| x	| x		|		|
|transition-group | As a transition effect for multiple elements/components. [Details](https://v3.cn.vuejs.org/api/built-in-components.html#transition-group) |√ | x | x | |
|keep-alive	| 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们，主要用于保留组件状态或避免重新渲染。 [详情](https://v3.cn.vuejs.org/api/built-in-components.html#keep-alive) 	|√	|x	| x		|		|	
|keep-alive | When wrapping dynamic components, inactive component instances are cached instead of destroying them, mainly to preserve component state or avoid re-rendering. [Details](https://v3.cn.vuejs.org/api/built-in-components.html#keep-alive) |√ |x | x | |
|slot	| 作为组件模板之中的内容分发插槽。`slot` 元素自身将被替换。 [详情](https://v3.cn.vuejs.org/api/built-in-components.html#slot) 	|√	| √	| √		|		|
|slot | Distribute slots as content in component templates. The `slot` element itself will be replaced. [Details](https://v3.cn.vuejs.org/api/built-in-components.html#slot) |√ | √ | √ | |
|teleport	| 将模板的一部分移动到 `DOM` 中 `Vue app` 之外的其他位置。 [详情](https://v3.cn.vuejs.org/api/built-in-components.html#teleport) 	|√	| x	| x		|	-	|
|teleport | Move part of the template to a different location in the `DOM` than the `Vue app`. [Details](https://v3.cn.vuejs.org/api/built-in-components.html#teleport) |√ | x | x | - |






## 响应性 API
## Reactivity API

### 响应性基础 API
### Basic Reactivity APIs

|响应性基础 API|描述	|H5		|App端|微信小程序  |
|Responsive Basic API|Description |H5 |App Terminal|WeChat Mini Program |
|--	|--	|--	|--	|--	|
|reactive	|返回对象的响应式副本。[详情](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive)	|√	|√	| √	|
|reactive |Returns a reactive copy of the object. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive) |√ |√ | √ |
|readonly	|获取一个对象 (响应式或纯对象) 或 `ref` 并返回原始代理的只读代理。[详情](https://v3.cn.vuejs.org/api/basic-reactivity.html#readonly)	|√	|√	| √	|
|readonly | Takes an object (reactive or plain) or `ref` and returns a read-only proxy for the original proxy. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#readonly) |√ |√ | √ |
|isProxy	|检查对象是 `reactive` 还是 `readonly`创建的代理。[详情](https://v3.cn.vuejs.org/api/basic-reactivity.html#isproxy)	|√	|√	| √	|
|isProxy |Checks whether the object is a `reactive` or `readonly` created proxy. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#isproxy) |√ |√ | √ |
|isReactive	|检查对象是否是 `reactive`创建的响应式 `proxy`。[详情](https://v3.cn.vuejs.org/api/basic-reactivity.html#isreactive)	|√	|√	| √	|
|isReactive |Checks if the object is a reactive `proxy` created by `reactive`. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#isreactive) |√ |√ | √ |
|isReadonly	|检查对象是否是由`readonly`创建的只读代理。[详情](https://v3.cn.vuejs.org/api/basic-reactivity.html#isreadonly)	|√	|√	| √	|
|isReadonly | Checks if the object is a read-only proxy created by `readonly`. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#isreadonly) |√ |√ | √ |
|toRaw	|返回 `reactive` 或 `readonly` 代理的原始对象。[详情](https://v3.cn.vuejs.org/api/basic-reactivity.html#toraw)	|√	|√	| √	|
|toRaw | Returns the raw object of the `reactive` or `readonly` proxy. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#toraw) |√ |√ | √ |
|markRaw	|标记一个对象，使其永远不会转换为代理。返回对象本身。[详情](https://v3.cn.vuejs.org/api/basic-reactivity.html#markraw)	|√	|√	| √	|
|markRaw | Marks an object so that it will never be converted to a proxy. Return the object itself. [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#markraw) |√ |√ | √ |
|shallowReactive	|创建一个响应式代理，该代理跟踪其自身 `property` 的响应性，但不执行嵌套对象的深度响应式转换 (暴露原始值)。[详情](https://v3.cn.vuejs.org/api/basic-reactivity.html#shallowreactive)	|√	|√	| √	|
|shallowReactive |Creates a reactive proxy that tracks the reactivity of its own `property`, but does not perform deep reactive transformations of nested objects (exposing primitive values). [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#shallowreactive) |√ |√ | √ |
|shallowReadonly	|创建一个代理，使其自身的 `property` 为只读，但不执行嵌套对象的深度只读转换 (暴露原始值)。[详情](https://v3.cn.vuejs.org/api/basic-reactivity.html#shallowreadonly)	|√	|√	| √	|
|shallowReadonly |Creates a proxy that makes its own `property` read-only, but does not perform deep read-only conversions of nested objects (exposing primitive values). [Details](https://v3.cn.vuejs.org/api/basic-reactivity.html#shallowreadonly) |√ |√ | √ |




### Refs

|Refs|描述	|H5		|App端|微信小程序  |
|Refs|Description |H5 |App Terminal|WeChat Mini Program |
|--	|--	|--	|--	|--	|
|ref	|接受一个内部值并返回一个响应式且可变的 `ref` 对象。`ref` 对象具有指向内部值的单个 property `.value`。[详情](https://v3.cn.vuejs.org/api/refs-api.html#ref)	|√	|√	| √	|
|ref | Takes an internal value and returns a reactive and mutable `ref` object. `ref` objects have a single property `.value` that points to the internal value. [Details](https://v3.cn.vuejs.org/api/refs-api.html#ref) |√ |√ | √ |
|unref	|如果参数为 `ref`，则返回内部值，否则返回参数本身。这是 `val = isRef(val) ? val.value : val`。[详情](https://v3.cn.vuejs.org/api/refs-api.html#unref)	|√	|√	| √	|
|unref | Returns the internal value if the argument is `ref`, otherwise returns the argument itself. This is `val = isRef(val) ? val.value : val`. [Details](https://v3.cn.vuejs.org/api/refs-api.html#unref) |√ |√ | √ |
|toRef	|可以用来为源响应式对象上的 `property` 性创建一个 `ref`。然后可以将 `ref` 传递出去，从而保持对其源 `property` 的响应式连接。[详情](https://v3.cn.vuejs.org/api/refs-api.html#toref)	|√	|√	| √	|
|toRef | can be used to create a `ref` for a `property` property on the source reactive object. The `ref` can then be passed out, maintaining a reactive connection to its source `property`. [Details](https://v3.cn.vuejs.org/api/refs-api.html#toref) |√ |√ | √ |
|toRefs	|将响应式对象转换为普通对象，其中结果对象的每个 `property` 都是指向原始对象相应 `property` 的`ref`。[详情](https://v3.cn.vuejs.org/api/refs-api.html#torefs)	|√	|√	| √	|
|toRefs | Converts a reactive object to a normal object, where each `property` of the resulting object is a `ref` pointing to the corresponding `property` of the original object. [Details](https://v3.cn.vuejs.org/api/refs-api.html#torefs) |√ |√ | √ |
|isRef	|检查值是否为`ref`对象[详情](https://v3.cn.vuejs.org/api/refs-api.html#isref)	|√	|√	| √	|
|isRef | Check if the value is a `ref` object [details](https://v3.cn.vuejs.org/api/refs-api.html#isref) |√ |√ | √ |
|customRef	|创建一个自定义的 `ref`，并对其依赖项跟踪和更新触发进行显式控制。[详情](https://v3.cn.vuejs.org/api/refs-api.html#customref)	|√	|√	| √	|
|customRef |Create a custom `ref` with explicit control over its dependency tracking and update triggering. [Details](https://v3.cn.vuejs.org/api/refs-api.html#customref) |√ |√ | √ |
|shallowRef	|创建一个 `ref`，它跟踪自己的 `.value` 更改，但不会使其值成为响应式的。[详情](https://v3.cn.vuejs.org/api/refs-api.html#shallowref)	|√	|√	| √	|
|shallowRef |Creates a `ref` that tracks its own `.value` changes, but does not make its value responsive. [Details](https://v3.cn.vuejs.org/api/refs-api.html#shallowref) |√ |√ | √ |
|triggerRef	|手动执行与 `shallowRef` 关联的任何效果。[详情](https://v3.cn.vuejs.org/api/refs-api.html#triggerref)	|√	|√	| √	|
|triggerRef | Manually execute any effects associated with `shallowRef`. [Details](https://v3.cn.vuejs.org/api/refs-api.html#triggerref) |√ |√ | √ |



### Computed 与 watch
### Computed and watch

|Computed 与 watch|描述	|H5		|App端|微信小程序  |
|Computed and watch|Description |H5 |App |WeChat Mini Program |
|--	|--	|--	|--	|--	|
|computed	|使用 `getter` 函数，并为从 `getter` 返回的值返回一个不变的响应式 `ref` 对象。[详情](https://v3.cn.vuejs.org/api/computed-watch-api.html#computed)	|√	|√	| √	|
|computed |Use the `getter` function and return an immutable reactive `ref` object for the value returned from the `getter`. [Details](https://v3.cn.vuejs.org/api/computed-watch-api.html#computed) |√ |√ | √ |
|watchEffect	|在响应式地跟踪其依赖项时立即运行一个函数，并在更改依赖项时重新运行它。[详情](https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect)	|√	|√	| √	|
|watchEffect | Runs a function as soon as its dependencies are tracked reactively, and re-runs it when dependencies are changed. [Details](https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect) |√ |√ | √ |
|watch	|`watch` API 与选项式 API `this.$watch` (以及相应的 `watch` 选项) 完全等效。`watch` 需要侦听特定的 `data` 源，并在单独的回调函数中副作用。[详情](https://v3.cn.vuejs.org/api/computed-watch-api.html#watch)	|√	|√	| √	|
|watch | The `watch` API is exactly equivalent to the option API `this.$watch` (and the corresponding `watch` option). `watch` needs to listen to a specific `data` source and has side effects in a separate callback function. [Details](https://v3.cn.vuejs.org/api/computed-watch-api.html#watch) |√ |√ | √ |




## 组合式 API
## Composition API

|组合式 API|描述	|H5		|App端|微信小程序  |
|Combined API|Description |H5 |App Terminal|WeChat Mini Program |
|--	|--	|--	|--	|--	|
|setup	|一个组件选项，在创建组件之前执行，一旦 `props` 被解析，并作为组合式 `API` 的入口点。[详情](https://v3.cn.vuejs.org/api/composition-api.html#setup)	|√	|√	| √	|
|setup |A component option that is executed before the component is created, once the `props` are resolved, and serves as the entry point to the composite `API`. [Details](https://v3.cn.vuejs.org/api/composition-api.html#setup) |√ |√ | √ |
|生命周期钩子	|可以使用直接导入的 `onX` 函数注册生命周期钩子。[详情](https://v3.cn.vuejs.org/api/composition-api.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)	|√	|√	| √	|
|Lifecycle Hooks |Lifecycle hooks can be registered using the directly imported `onX` function. [Details](https://v3.cn.vuejs.org/api/composition-api.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9 %92%A9%E5%AD%90) |√ |√ | √ |
|Provide / Inject	|provide 和 inject 启用依赖注入。只有在使用当前活动实例的 `setup()` 期间才能调用这两者。[详情](https://v3.cn.vuejs.org/api/composition-api.html#provide-inject)	|√	|√	| √	|
|Provide / Inject |provide and inject enable dependency injection. Both can only be called during `setup()` using the currently active instance. [Details](https://v3.cn.vuejs.org/api/composition-api.html#provide-inject) |√ |√ | √ |
|getCurrentInstance	|允许访问对高级使用或库创建者有用的内部组件实例。[详情](https://v3.cn.vuejs.org/api/composition-api.html#getcurrentinstance)	|√	|√	| √	|
|getCurrentInstance | Allows access to internal component instances useful for advanced use or library creators. [Details](https://v3.cn.vuejs.org/api/composition-api.html#getcurrentinstance) |√ |√ | √ |




## 全局变量
## Global variable

实现全局变量的方式需要遵循 `Vue` 单文件模式的开发规范。详细参考：[uni-app全局变量的几种实现方式](https://ask.dcloud.net.cn/article/35021)。
The way to implement global variables needs to follow the development specifications of Vue single file mode.


## 其他配置
## Other configuration

Vue 组件编译到小程序平台的时候会编译为对应平台的组件，部分小程序平台支持 options 选项（具体选项参考对应小程序平台文档的自定义组件部分），一般情况默认即可，如有特殊需求可在 Vue 组件中增加 options 属性。

|属性|类型|默认值|描述|平台兼容性|
|--|--|--|--|--|
|multipleSlots|Boolean|true|在组件定义时的选项中启动多slot支持||
|styleIsolation|String|apply-shared|组件样式隔离方式，具体配置选项参见：[组件样式隔离](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB)|微信小程序|
|addGlobalClass|Boolean|true|~~这个选项等价于设置 styleIsolation: apply-shared ，但设置了 styleIsolation 选项后这个选项会失效~~|微信小程序|
|virtualHost|Boolean|false|将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等，而是希望自定义组件内部的第一层节点能够响应 flex 布局或者样式由自定义组件本身完全决定，启用后可以通过 [mergeVirtualHostAttributes](/collocation/manifest.html#mp-weixin) 合并合并组件虚拟节点外层属性|微信小程序、支付宝小程序（默认值为 true）|

```js
export default {
  props: ['data'],
  data(){ return { } },
  options: {
    virtualHost: true
  }
}
```



## 常见问题
## Common problem

### 1. 如何获取上个页面传递的数据
### 1. How to get the data passed on the previous page

在 `onLoad` 里得到，`onLoad` 的参数是其他页面打开当前页面所传递的数据。
Obtained in onLoad, the parameter of onLoad is the data passed by other pages to open the current page.


### 2. 如何设置全局的数据和全局的方法
### 2. How to set global data and global methods

`uni-app` 内置了 [Vuex](https://uniapp.dcloud.io/tutorial/vue-vuex) ，在`app`里的使用，可参考 `hello-uniapp` ` store/index.js`。
`uni-app` has built-in [Vuex](https://uniapp.dcloud.io/tutorial/vue-vuex), for use in `app`, please refer to `hello-uniapp` `store/index.js` .


```javaScript
	//store.js
	import {createStore} from 'vuex'
	const store = createStore({
		state: {...},
		mutations: {...},
		actions: {...}
	})
	export default store

	//main.js
	import App from './App'
	import {createSSRApp} from 'vue'
	import store from './store'
	export function createApp() {
		const app = createSSRApp(App)
		app.use(store)
		return {
			app
		}
	}

	//test.vue 使用时：
	//test.vue When using:
	import {mapState,mapMutations} from 'vuex'
```



### 3. 如何捕获 app 的 onError
### 3. How to catch onError of app

由于 `onError` 并不是完整意义的生命周期，所以只提供一个捕获错误的方法，在 `app` 的根组件上添加名为 `onError` 的回调函数即可。如下：
Since `onError` is not a complete life cycle, only a method of catching errors is provided, and a callback function named onError can be added to the root component of the app. as follows:

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


### 4. 组件属性设置不生效解决办法
### 4. Component property settings do not take effect

当重复设置某些属性为相同的值时，不会同步到`view`层。 例如：每次将`scroll-view`组件的`scroll-top`属性值设置为0，只有第一次能顺利返回顶部。 这和`props`的单向数据流特性有关，组件内部`scroll-top`的实际值改动后，其绑定的属性并不会一同变化。
When some properties are repeatedly set to the same value, they are not synchronized to the View layer. For example, every time you set the scroll-top property of a `scroll-view` component to 0, it only gets back to the top the first time. This is due to the props unidirectional data flow feature. When the actual value of scroll top inside the component changes, the binding properties do not change with it.

解决办法有两种（以`scroll-view`组件为例）：
There are two solutions (take the `scroll-view` component as an example):

1. 监听`scroll`事件，记录组件内部变化的值，在设置新值之前先设置为记录的当前值
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


