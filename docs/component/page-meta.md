## page-meta

页面属性配置节点，用于指定页面的一些属性、监听页面事件。可部分替代pages.json的功能。

从微信基础库2.9.0开始，新增了`page-meta`组件，它是一个特殊的标签，有点类似html里的header标签。页面的背景色、原生导航栏的参数，都可以写在`page-meta`里。HBuilderX 2.6.3+ 支持了这个组件，并且全平台都实现了。

从某种意义讲，`page-meta`对pages.json有一定替代作用，可以让页面的配置和页面内容代码写在一个vue文件中。它还可以实现通过变量绑定来控制页面配置。但它的性能不如pages.json的配置，在新页面加载时，渲染速度还是pages.json方式的写法更快。

`page-meta`只能是页面内的第一个节点。可以配合 [navigation-bar](https://uniapp.dcloud.io/component/navigation-bar) 组件一同使用。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√ 2.6.3+|2.6.3+|√ 2.9.0+|√|√|√|x|√|x|x|x|

<!-- UNIAPPCOMJSON.page-meta.compatibility -->

从HBuilderX 2.6.3起，编译到所有平台均支持`page-meta`，但编译到微信时，受微信基础库版本限制；编译到其他平台不受平台版本限制。

**属性说明**

|属性|类型|默认值|必填|说明|版本要求/平台差异说明|
|:-|:-|:-|:-|:-|:-|
|background-text-style|string||否|下拉背景字体、loading 图的样式，仅支持 dark 和 light|微信基础库 2.9.0|
|background-color|string||否|窗口的背景色，必须为十六进制颜色值|微信基础库 2.9.0|
|background-color-top|string||否|顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持|微信基础库 2.9.0|
|background-color-bottom|string||否|底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持|微信基础库 2.9.0|
|scroll-top|string|""|否|滚动位置，可以使用 px 或者 rpx 为单位，在被设置时，页面会滚动到对应位置|微信基础库 2.9.0、H5 3.7.0、App-vue 3.7.0|
|scroll-duration|number|300|否|滚动动画时长|微信基础库 2.9.0|
|page-style|string|""|否|页面根节点样式，页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点|微信基础库 2.9.0|
|root-font-size|string|""|否|页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 1rem 等于这个字体大小|微信基础库 2.9.0|
|enable-pull-down-refresh|Boolean|""|否|是否开启下拉刷新|App 2.6.7|
|@resize|eventhandle||否|页面尺寸变化时会触发 resize 事件， event.detail = { size: { windowWidth, windowHeight } }|微信基础库 2.9.0|
|@scroll|eventhandle||否|页面滚动时会触发 scroll 事件， event.detail = { scrollTop }|微信基础库 2.9.0|
|@scrolldone|eventhandle||否|如果通过改变 scroll-top 属性来使页面滚动，页面滚动结束后会触发 scrolldone 事件|微信基础库 2.9.0|


**注意**
- `<page-meta>` 目前支持的配置仅为上表所列，并不支持所有 page.json 的配置
- `<page-meta>` 与 pages.json 的设置相冲突时，会覆盖 page.json 的配置

#### head标签@head

> 新增于`HBuilderX 3.3.0`

vue3 下还可以在`page-meta`内使用浏览器原生 head 标签，**此用法仅 vue3 版本 ssr 可用**，方便在 编译为 ssr 时进行 seo 优化。

```html
<template>
  <page-meta
    :background-text-style="bgTextStyle"
    :background-color="bgColor"
    :background-color-top="bgColorTop"
    :background-color-bottom="bgColorBottom"
    :scroll-top="scrollTop"
    page-style="color: green"
    root-font-size="16px"
  >
		<head> // 仅vue3 ssr支持，此节点下的元素会被拷贝到h5页面的head标签下，可以利用此特性进行seo优化
			<meta name="keyword" :content="title" />
		</head>
  </page-meta>
  <view class="content">
  </view>
</template>

<script>
  export default {
    data() {
      return {
				keyword: '',
      }
    },
		serverPrefetch(){ // 仅vue3版本支持
			this.keyword = "ServerKeyword"
		},
    onLoad() {
    },
    methods: {
    }
  }
</script>
```


#### 示例代码

```html
<template>
  <page-meta
    :background-text-style="bgTextStyle"
    :background-color="bgColor"
    :background-color-top="bgColorTop"
    :background-color-bottom="bgColorBottom"
    :scroll-top="scrollTop"
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
        bgTextStyle: 'dark',
        scrollTop: '200rpx',
        bgColor: '#ff0000',
        bgColorTop: '#00ff00',
        bgColorBottom: '#0000ff',
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
