#### page-meta

页面属性配置节点，用于指定页面的一些属性、监听页面事件。可部分替代pages.json的功能。

它是一个特殊的标签，有点类似html里的header标签。页面的背景色、原生导航栏的参数，都可以写在`page-meta`里。HBuilderX 2.6.3+ 支持了这个组件，并且全平台都实现了。

从某种意义讲，`page-meta`对pages.json有一定替代作用，可以让页面的配置和页面内容代码写在一个vue文件中。它还可以实现通过变量绑定来控制页面配置。但它的性能不如pages.json的配置，在新页面加载时，渲染速度还是pages.json方式的写法更快。

`page-meta`只能是页面内的第一个节点。可以配合 [navigation-bar](https://uniapp.dcloud.io/component/navigation-bar) 组件一同使用。

**平台差异说明**

|App|H5|
|:-:|:-:|
|√ 2.6.3+|2.6.3+|

从HBuilderX 2.6.3起，编译到所有平台均支持`page-meta`。

**属性说明**

|属性|类型|默认值|必填|说明|版本要求
|:-|:-|:-|:-|:-|:-|
|page-style|string|""|否|页面根节点样式，页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点|H5 2.6.7、App-vue 2.6.7|
|root-font-size|string|""|否|页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 1rem 等于这个字体大小|H5 2.6.7、App-vue 2.6.7|
|enable-pull-down-refresh|Boolean|""|否|是否开启下拉刷新|App 2.6.7|


**注意**
- `<page-meta>` 目前支持的配置仅为上表所列，并不支持所有 page.json 的配置
- `<page-meta>` 与 pages.json 的设置相冲突时，会覆盖 page.json 的配置


#### 示例代码

```
<template>
  <page-meta
    page-style="color: green"
    root-font-size="16px"
  >
    <navigation-bar
      :title="nbTitle"
      :loading="nbLoading"
      :front-color="nbFrontColor"
      :background-color="nbBackgroundColor"
    />
  </page-meta>
  <view class="content">
  </view>
</template>

<script>
  export default {
    data() {
      return {
        nbTitle: '标题',
        nbLoading: false,
        nbFrontColor: '#000000',
        nbBackgroundColor: '#ffffff'
      }
    },
    onLoad() {
    },
    methods: {
    }
  }
</script>
```
