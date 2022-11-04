#### cell

app端nvue专用组件。它的重要价值在于告诉原生引擎，哪些部分是可重用的。

`<cell>` Cell 必须以一级子组件的形式存在于 `list recycler waterfall` 中。

#### 子组件

Cell 支持添加任意类型的组件作为自己的子组件，但是请不要再内部添加滚动容器了。


#### 属性

- keep-scroll-position boolean, 它控制插入单元格后是否保持最后一个滑动位置。

- insert-animation string, cell 的插入动画。当前只支持 `none` 和 `default`。

- delete-animation string, cell 的删除动画。当前只支持 `none` 和 `default`。

- recycle boolean, 默认值 true。这个属性控制这个 Cell 的 view 和子 views 是否在列表滚动时进行回收，在 iOS 上通常必须指定为 true （因为默认为 true，所以一般不需要写这个属性），如果设置为 false，列表滚动时，页面会占用非常高的内存。Android上默认是true，设置为false可以防止Image和Text上数据重新绑定。

- render-reverse-position boolean, 默认值 false。定义开始渲染的位置，需搭配list的属性`render-reverse`共同使用，单独配置不起作用。HBuilderX3.6.9+支持。

#### 样式

- 通用样式. [详见](https://uniapp.dcloud.net.cn/tutorial/nvue-css.html)

> TIP
> - 不要指定 `<cell>` 的 `flex` 值。Cell 的宽度是由它的父容器决定的，你也不需要指定它的高度。
> - Cell 的排版的位置是由父容器控制的，所以一般不要为其指定 `margin` 样式

#### 事件

- 通用事件. [详见](https://uniapp.dcloud.net.cn/tutorial/nvue-event.html)
