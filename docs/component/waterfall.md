#### waterfall

app端nvue专用组件。
app side nvue specific component.

`<waterfall>` 组件是提供瀑布流布局的核心组件。瀑布流，又称瀑布流式布局，是比较流行的一种页面布局，视觉表现为参差不齐的多栏布局。随着页面滚动条向下滚动，这种布局还可以不断加载数据块并附加至当前尾部。
The `<waterfall>` component is the core component that provides the waterfall layout. Waterfall flow, also known as waterfall flow layout, is a relatively popular page layout, and the visual performance is a jagged multi-column layout. This layout also continuously loads chunks of data and appends to the current tail as the page scroll bar scrolls down.

在nvue中，使用普通view做瀑布流，无法实现复用和不可见渲染资源释放。使用`<waterfall>`组件且指定`cell`后，原生引擎会自动优化性能。
In nvue, using ordinary view as waterfall flow cannot achieve reuse and release of invisible rendering resources. After using the `<waterfall>` component and specifying `cell`, the native engine will automatically optimize the performance.

```html
<template>
  <waterfall column-count="2" column-width="auto">
    <cell v-for="num in lists" >
      <text>{{num}}</text>
    </cell>
  </waterfall>
</template>
<script>
  export default {
    data () {
      return {
        lists: ['A', 'B', 'C', 'D', 'E']
      }
    }
  }
</script>

<style></style>
```

#### 子组件
#### Sub-component

和 `<list>` 组件一样, `<waterfall>` 组件的子组件只能包括以下四种组件或是 fix 定位的组件，其他形式的组件将不能被正确渲染。
Similar to the `<list>` component, the sub-components of the `<waterfall>` component can only include the following four components or fixed components, and other forms of components will not be rendered correctly.

- `<cell>`：用于定义列表中的子列表项，类似于 HTML 中的 ul 之于 li。`<waterfall>` 会对 `<cell>` 进行高效的内存回收以达到更好的性能。
- `<cell>`: Used to define the sub-list items in the list, similar to the ul to li in HTML.`<waterfall>` Efficient memory reclamation will be performed on `<cell>` to achieve better performance.
- `<header>`：当 `<header>` 到达屏幕顶部时，吸附在屏幕顶部。
- `<header>`: When `<header>` reaches the top of the screen, it snaps to the top of the screen.
- `<refresh>`：用于给列表添加下拉刷新的功能。
- `<refresh>`: Used to add a pull-down refresh function to the list.
- `<loading>`：`<loading>` 用法与特性和 `<refresh>` 类似，用于给列表添加上拉加载更多的功能。
  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/app-nvue-component-waterfall-01.png" />

#### 属性
#### Attribute

- show-scrollbar : `[可选]` 可选值为 true/ false，默认值为 true。控制是否出现滚动条。
- show-scrollbar: The optional values of `[Optional]` are true/false, and the default value is true. Control whether scroll bars appear.
- column-count: `[可选]`描述瀑布流的列数
- column-count: `[Optional]` describes the number of columns in the waterfall flow
  - auto: 意味着列数是被其他属性所决定的(比如 column-width)
  - auto: It means that the number of columns is determined by other attributes (such as column-width)
  - `<integer>`: 最佳列数，column-width 和 column-count 都指定非0值， 则 column-count 代表最大列数。
  - `<integer>`: Optimal number of columns. If both column-width and column-count are specified as non-zero values, then column-count represents the maximum number of columns.
- column-width : `[可选]`描述瀑布流每一列的列宽
- column-width: `[Optional]` describes the column width of each column of the waterfall flow
  - `auto`: 意味着列宽是被其他属性所决定的(比如 column-count)
  - `auto`: means that the column width is determined by other attributes (such as column-count)
  - `<length>`: 最佳列宽，实际的列宽可能会更宽(需要填充剩余的空间)， 或者更窄(如果剩余空间比列宽还要小)。 该值必须大于0
  - `<length>`: optimal column width, the actual column width may be wider (need to fill the remaining space), or narrower (if the remaining space is smaller than the column width). The value must be greater than 0
- column-gap: `[可选]`列与列的间隙. 如果指定了 `normal` ，则对应 32.
- column-gap: `[optional]` the column-to-column gap. Corresponds to 32 if `normal` is specified.
- left-gap: `[可选]`左边cell和列表的间隙. 如果未指定 ，则对应 `0`
- left-gap: `[optional]` the gap between the left cell and the list. If not specified, it corresponds to `0`
- right-gap: `[可选]`右边cell和列表的间隙. 如果未指定，则对应 `0`
  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/app-nvue-component-waterfall-02.png" />
- always-scrollable-vertical : `[可选]` 可选值为 true/ false，默认值为 false，iOS 平台，内容不满一屏无法触发下拉刷新时需要设置为true，因为默认子视图高度不超过父视图高度的时候 waterfall 不能滑动
- always-scrollable-vertical : `[Optional]` The optional value is true/false, the default value is false, iOS platform, when the content is less than one screen and cannot trigger the pull-down refresh, it needs to be set to true, because the default subview height does not exceed The waterfall cannot slide when the parent view is high

其他支持的属性参见 `<list>` [组件属性部分](https://uniapp.dcloud.net.cn/component/list.html)
For other supported attributes, see `<list>` [component attribute section](https://uniapp.dcloud.net.cn/component/list.html)

#### 事件
#### event
支持所有[通用事件](https://uniapp.dcloud.net.cn/tutorial/nvue-event.html)：
All [Universal Events](https://uniapp.dcloud.net.cn/tutorial/nvue-event.html) are supported:

- click：用于监听点击事件。（例如：一般绑定于子组件之上触发跳转）。
- click: used to listen to click events. (For example: it is generally bound to sub-components to trigger a jump).
- longpress：用于监听长按事件（一般绑定于子组件之上例如：长按可删除）。
- longpress: used to listen to long-press events (generally bound to sub-components. For example, long press to delete).
- appear：用于监听子组件出现事件（一般绑定于子组件之上例如：监听最后一个元素出现，加载新的数据）
- appear: used to listen to the occurrence of sub-component events (generally bound to sub-components. For example, listen to the occurrence of the last element and load new data)
- disappear：用于监听子组件滑出屏幕事件（一般绑定于子组件之上）
- disappear: used to listen to the event that the child component slides out of the screen (generally bound to sub-components)

**注意**
**Notice**
- waterfall是区域滚动，不会触发页面滚动，无法触发pages.json配置的下拉刷新、页面触底onReachBottomDistance、titleNView的transparent透明渐变。
- waterfall runs in area scrolling, which will not trigger page scrolling, and cannot trigger the pull-down refresh configured by pages.json, onReachBottomDistance, and the transparent gradient of titleNView.
