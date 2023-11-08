#### cell

app端nvue专用组件。它的重要价值在于告诉原生引擎，哪些部分是可重用的。
app side nvue specific component. Its important value lies in letting the native engine know which parts are reusable.

`<cell>` Cell 必须以一级子组件的形式存在于 `list recycler waterfall` 中。
`<cell>` cell must exist in `list recycler waterfall` as a first-level sub-component.

#### 子组件
#### Sub-component

Cell 支持添加任意类型的组件作为自己的子组件，但是请不要再内部添加滚动容器了。
Cell supports adding any type of component as its own sub-component, but please don't add scroll containers to the inner content.


#### 属性
#### Attribute

- keep-scroll-position boolean, 它控制插入单元格后是否保持最后一个滑动位置。
- keep-scroll-position boolean, which controls whether to keep the last scroll position after inserting a cell.

- insert-animation string, cell 的插入动画。当前只支持 `none` 和 `default`。
- insert-animation string, the insertion animation of cell. Currently, only `none` and `default` are supported.

- delete-animation string, cell 的删除动画。当前只支持 `none` 和 `default`。
- delete-animation string, the delete animation of cell. Currently, only `none` and `default` are supported.

- recycle boolean, 默认值 true。这个属性控制这个 Cell 的 view 和子 views 是否在列表滚动时进行回收，在 iOS 上通常必须指定为 true （因为默认为 true，所以一般不需要写这个属性），如果设置为 false，列表滚动时，页面会占用非常高的内存。Android上默认是true，设置为false可以防止Image和Text上数据重新绑定。
- recycle boolean, with true as default. This attribute controls whether the view and sub-views of this Cell are reused when the list is scrolled. It is normally specified as true on iOS (for the default is true, it is generally unnecessary to write this attribute). If it is set to false, the page will occupy very high memory as the list scrolls. On Android, the default is true, and setting it to false can prevent data rebinding on Image and Text.

- render-reverse-position boolean, 默认值 false。定义开始渲染的位置，需搭配list的属性`render-reverse`共同使用，单独配置不起作用。HBuilderX3.6.9+支持。
- render-reverse-position boolean, default false. Define the position to start rendering. It needs to be used together with the attribute `render-reverse` of the list. It will not work if configured alone. HBuilderX3.6.9+ support.

#### 样式
#### Style

- 通用样式. [详见](https://uniapp.dcloud.net.cn/tutorial/nvue-css.html)
- General style. [See details](https://uniapp.dcloud.net.cn/tutorial/nvue-css.html)

> TIP
> - 不要指定 `<cell>` 的 `flex` 值。Cell 的宽度是由它的父容器决定的，你也不需要指定它的高度。
> - Do not specify the `flex` value of `<cell>`. The width of Cell is determined by its parent container, and there is no need to specify its height.
> - Cell 的排版的位置是由父容器控制的，所以一般不要为其指定 `margin` 样式
> - The layout location of Cell is controlled by the parent container, so generally do not specify the `margin` style for it

#### 事件
#### Event

- 通用事件. [详见](https://uniapp.dcloud.net.cn/tutorial/nvue-event.html)
- Universal event. [See details](https://uniapp.dcloud.net.cn/tutorial/nvue-event.html)
