#### recycle-list

app端nvue专用组件。
app side nvue specific component.

`<recycle-list>` 是一个新的列表容器，具有回收和复用的能力，可以大幅优化内存占用和渲染性能。它的性能比list组件更高，但写法受限制。它除了会释放不可见区域的渲染资源，在非渲染的数据结构上也有更多优化。
`<recycle-list>` is a new list container with the ability of recycling and reuse, which can greatly optimize memory usage and rendering perlistance. Its performance is higher than that of the list component, but its writing mode is limited. In addition to releasing the rendering resources in invisible areas, it also has more optimization on non-rendered data structures.

此组件自HBuilderX 2.2.6+起支持。
This component has been supported since HBuilderX 2.2.6+.

#### 子组件
#### Sub-component
`<recycle-list>` 只能使用 `<cell-slot>` 作为其直接子节点，使用其他节点无效。
`<recycle-list>` can only use `<cell-slot>` as its direct child node, and it is invalid to use other nodes.

#### cell-slot
`<cell-slot>` 代表的是列表每一项的模板，它只用来描述模板的结构，并不对应实际的节点。`<cell-slot>` 的个数只表示模板的种类数，真实列表项的个数是由数据决定的。
`<cell-slot>` represents the template of each item in the list. It is only used to describe the structure of the template and does not correspond to the actual node. `<cell-slot>` number indicates the number of template types only, and the number of real list items is determined by the data.

**注意**
**Notice**
- `<cell-slot>` 包含自定义组件时，在 Android 上有性能问题
- When `<cell-slot>` contains custom components, there are performance issues on Android
- recycle-list 是区域滚动，不会触发页面滚动，无法触发pages.json配置的下拉刷新、页面触底onReachBottomDistance、titleNView的transparent透明渐变。
- recycle-list runs in area scrolling, which will not trigger page scrolling, and cannot trigger the pull-down refresh configured by pages.json, onReachBottomDistance, and the transparent gradient of titleNView.


属性|说明
Properties | Description
:--|:--|
case|声明了当前模板的类型，只有和数据中的类型与当前类型匹配时才会渲染，语义和编程语言里的 case 一致。所有模板中最多只会匹配到一项，按照模板的顺序从上到下匹配，一旦匹配成功就不在继续匹配下一个。
case| declares the type of the current template, which will only be rendered if the type in the data matches the current type. The semantics are the same as the case in the programming language. Only one item will be matched at most in all templates, which will be matched from top to bottom in the order of the templates. Once the match is successful, the next one will not be matched.
default|表示当前模板为默认模板类型，不需要指定值。如果数据项没有匹配到任何 case 类型，则渲染带有 default 模板。如果存在多个 default，则只会使用第一个默认模板。
default| indicates that the current template is the default template type, and no value needs to be specified. If the data item does not match any case type, render with the default template. If multiple defaults exist, only the first default template will be used.
key|可选属性，用于指定列表数据中可以作为唯一标识的键值，可以优化渲染性能。
key|Optional attribute, used to specify a key value in the list data that can be used as a unique identifier, which can optimize rendering performance.

- warning 属性的省略 - 如果没写 `switch`，无论有没有写 `case` 或 `default`，都只使用第一个模板 - 在写了 `switch` 的情况下，`case` 和 `default` 必须写一个，否则该模板将会被忽略
- Omission of warning attribute - If `switch` is not written, no matter if `case` or `default` is written or not, only the first template is used - If `switch` is written, either `case` or `default` must be written, otherwise the template will be ignored


属性
Attribute

- for
在 `<recycle-list>` 添加 for 属性即可描述如何循环展开列表的数据，语法和 Vue 的 v-for 指令类似，但是它循环的是自己内部的子节点，并不是当前节点。写法：
Adding the for attribute to `<recycle-list>` can describe how to loop and expand the data in the list. The syntax is similar to the v-for instruction of Vue, but it loops its own internal child nodes, not the current node. Writing mode:
  - `alias in expression`
  - `(alias, index) in expression`
- switch
在 `<recycle-list>` 添加 switch 属性可以用来指定数据中用于区分子模板类型的字段名，语义和编程语言里的 switch 一致，配合 `<cell-slot>` 中的 case 和 default 属性一起使用。
Adding the switch attribute to `<recycle-list>` can specify the field name of the area molecular template type in the data. The semantics are consistent with the switch in the programming language, and it is used together with the case and default attributes in `<cell-slot>`.
如果省略了 switch 属性，则只会将第一个 `<cell-slot>` 视为模板，多余的模板将会被忽略。
If the switch attribute is omitted, only the first `<cell-slot>` will be regarded as a template, and the extra ones will be ignored.

```html
<recycle-list for="(item, i) in longList" switch="type">
  <cell-slot case="A">
    <text>- A {{i}} -</text>
  </cell-slot>
  <cell-slot case="B">
    <text>- B {{i}} -</text>
  </cell-slot>
</recycle-list>
```


注意：Android 平台目前仅支持放到 template 根节点，后续修复此问题
Note: The Android platform currently only supports placing it in the template root node, and this problem will be fixed in the future


可复用的组件
Reusable components

在 `<recycle-list>` 中使用的子组件也将被视为模板，在开发组件时给 `<template>` 标签添加 recyclable 属性，才可以用在 `<recycle-list>` 中。
Sub-components used in `<recycle-list>` will also be regarded as templates. When developing components, add recyclable attribute to `<template>` tags before they can be used in `<recycle-list>`.

```html
<template recyclable>
  <div>
    <text>...</text>
  </div>
</template>
<script>
  // ...
</script>
```

> 添加了 recyclable 属性并不会影响组件本身的功能，它仍然可以用在其他正常的组件里。
> Adding recyclable attribute will not affect the function of the component itself, and it can still be used in other normal components.

注意事项
Precautions
#### 属性和文本的绑定
#### Binding of attribute and text
绑定属性或者文本时，仅支持表达式，不支持函数调用，也不支持使用 filter，可以参考 Implementation.md#支持的表达式。
After binding to the attributes or text, only expressions are supported, but not for function call or filter. Please refer to the expressions supported by Implementation.md#.

例如，下列写法不可用：
For example, the following writing mode is not applicable:

```html
<div :prop="capitalize(card.title)">
  <text>{{ card.title | capitalize }}</text>
</div>
```
针对这种场景，推荐使用 computed 属性来实现。
For this scenario, it is recommended to use computed attribute to realize it.
因为模板的取值是由客户端实现的，而函数的定义在前端（filter 可以认为是在模板里调用函数的语法糖），如果每次取值都走一次通信的话，会大幅降低渲染性能。
Because the value of the template is realized by client, and the definition of the function is at the front end (filter can be regarded as the syntactic sugar for calling the function in the template), the rendering performance will be greatly reduced if each fetching needs one communication.

#### `<slot>`不可用
#### `<slot>` unavailable
`<cell-slot>` 的功能和 `<slot>` 有部分重叠，而且更为激进，在概念上有冲突，存在很多边界情况无法完全支持。不要在 `<cell-slot>` 及其子组件里使用 `<slot>`。
`<cell-slot>` is partially overlapped with `<slot>` in function, and is more radical. The two are in conceptual conflict and there are many boundary cases that cannot be fully supported. Do not use `<slot>` in `<cell-slot>` and its sub-components.

#### v-once 不会优化渲染性能
#### v-once will not optimize the rendering performance
和前端框架中的理解不同，客户端里要实现复用的逻辑，会标记模板节点的状态，添加了 v-once 能保证节点只渲染一次，但是并不一定能优化渲染性能，反而可能会拖慢客户端复用节点时的比对效率。
Different from the understanding in the front-end framework, in order to realize the reuse logic in client, the status of template nodes will be marked. Adding v-once can ensure that the nodes are rendered only once, but it may not optimize the rendering performance. It may slow down the comparison efficiency during reusing the nodes on the client.

#### 样式功能的限制
#### Limitations of style functionality
计划支持。目前版本里还不支持绑定样式类名（v-bind:class），原因和进展可以参考 #14。
Program support. At present, the binding style class name (v-bind:class) is not supported in current version. Please refer to #14 for reasons and progress.

#### 双向绑定
#### Two way binding
计划支持。v-model 还未调通，暂时不要使用。
Program support. v-model has not been established, and is unavailable now.

#### 子组件的限制
#### Limitations of child components
没有 Virtual DOM！ 使用在 `<recycle-list>` 中的组件没有 Virtual DOM！与 Virtual DOM 相关的功能也不支持。在开发过程中尽量只处理数据，不要操作生成后的节点。
There is no Virtual DOM! The component used in `<recycle-list>` does not have a Virtual DOM! Functions related Virtual DOM are also not supported. In the development process, try to process data only, and don't operate the generated nodes.

下列这些属性都不再有意义，请不要使用：
Please do not use the following attributes which no longer make sense:

- vm.$el
- vm.$refs.xxx
- vm.$vnode
- vm.#slots
- vm.#scopedSlots

`vm.$refs` 里的值可能是数组、子组件的实例、DOM 元素，在前端里比较常用，如果不支持，对 Weex 里的 `dom` 模块和 `animation` 模块的功能也有影响。
The values in `vm.$refs` may be arrays, instances of sub-components, DOM elements, which are commonly used in the front end. If they are not supported, it will also affect the functions of the `dom` module and `animation` module in Weex.

目前正在讨论技术方案，部分接口可能会重新设计，或者是在 `vm` 上透出专为 `<recycle-list>` 设计的接口。
Technical solutions are currently being discussed. Some interfaces may be redesigned, or an interface specifically designed for `<recycle-list>` may be revealed on `vm`.

组件的属性 目前子组件的属性不支持函数。（正在讨论实现方案）
Component attributes. Functions are not currently supported by the attributes of the subcomponents. (The implementation scheme is under discussion now)

```html
<sub-component :prop="item.xxx" />
```

因为子组件的属性值需要在前端和客户端之间传递，所以仅支持可序列化的值。`item.xxx` 的类型可以是对象、数组、字符串、数字、布尔值等，不支持函数。
Because the attribute values of the sub-components need to be passed between the front end and the client, only serializable values are supported. `item.xxx` types can be object, array, string, number, and Boolean value, etc. Functions are not supported.

生命周期的行为差异 由于列表的渲染存在回收机制，节点渲染与否也与用户的滚动行为有关，组件的生命周期行为会有一些不一致。
Behavior differences of life cycle. Due to the recycling mechanism of list rendering, whether the nodes are rendered or not is also related to the user's scrolling behavior, so there will be some inconsistencies in the life cycle behavior of components.

可回收长列表不会立即渲染所有节点，只有即将滚动到可视区域（以及可滚动的安全区域）内时才开始渲染，组件生命周期的语义没变，但是会延迟触发。
Long recyclable list will not render all nodes immediately. Only start rendering when it is about to scroll into the visible area (and the scrollable safe area). The semantics of the component life cycle will not change, but be triggered delayed.

假设有 100 条数据，一条数据了对应一个组件。渲染首屏时只能展示 8 条数据的节点，那就只有前 8 个组件被创建了，也只有前 8 个组件的生命周期被触发。
If there are 100 pieces of data, one piece of data will correspond to a component. When rendering the first screen, only 8 data nodes can be displayed. Namely, only the first 8 components are created and only their life cycles are triggered.

组件的 `beforeCreate` 和 `created` 也只有在组件即将创建和创建完成时才会触发
The `beforeCreate` and `created` of the component will only be triggered when the component is about to be created and created.
同理，组件的 `beforeMount` 和 `mounted` 也只有页面真正渲染到了该组件，在即将挂载和已经挂载时才会触发
Similarly, the `beforeMount` and `mounted` of a component will only be triggered when the page is actually rendered to the component, and will be triggered when it is about to be mounted or has been mounted.
组件的自定义事件
Component custom events
计划支持。`vm.$on`, `vm.$once`, `vm.$emit`, `vm.$off` 等功能还未完全调通，接口可用，但是行为可能有些差异（参数丢失），暂时不要使用。
Custom event plan support for components. `vm.$on` `vm.$once`, `vm.$emit`, `vm.$off` and other functions have not been fully tuned. The interface is available, but there may be some differences in behavior (missing required parameter), so do not use it temporarily.

#### 示例
#### Example
```html
<recycle-list for="(item, i) in longList" switch="type">
  <cell-slot case="A">
    <text>- A {{i}} -</text>
  </cell-slot>
  <cell-slot case="B">
    <text>- B {{i}} -</text>
  </cell-slot>
</recycle-list>
```
如果有如下数据：
If the following data is available:

```js
const longList = [
  { type: 'A' },
  { type: 'B' },
  { type: 'B' },
  { type: 'A' },
  { type: 'B' }
]
```

则会生成如下等价节点：
The following equivalent nodes are generated:

```html
<text>- A 0 -</text>
<text>- B 1 -</text>
<text>- B 2 -</text>
<text>- A 3 -</text>
<text>- B 4 -</text>
```

如果将模板合并成一个，也可以省略 `switch` 和 `case`，将例子进一步简化：
If the templates are merged into one, you can also omit `switch` and `case` to further simplify the example:

```html
<recycle-list for="(item, i) in longList">
  <cell-slot>
    <text>- {{item.type}} {{i}} -</text>
  </cell-slot>
</recycle-list>
```
