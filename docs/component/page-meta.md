#### page-meta

页面属性配置节点，用于指定页面的一些属性、监听页面事件。可部分替代pages.json的功能。
The page attribute configuration node, used to specify some page attributes and listen to page events. It can partially replace the functions of pages.json.

从微信基础库2.9.0开始，新增了`page-meta`组件，它是一个特殊的标签，有点类似html里的header标签。页面的背景色、原生导航栏的参数，都可以写在`page-meta`里。HBuilderX 2.6.3+ 支持了这个组件，并且全平台都实现了。
Starting from WeChat base library 2.9.0, the `page-meta` component has been added, which is a special tag, similar to the header tag in html. The background color of the page and the parameters of the native navigation bar can be written in `page-meta`. HBuilderX 2.6.3+ supports this component and implements it on all platforms.

从某种意义讲，`page-meta`对pages.json有一定替代作用，可以让页面的配置和页面内容代码写在一个vue文件中。它还可以实现通过变量绑定来控制页面配置。但它的性能不如pages.json的配置，在新页面加载时，渲染速度还是pages.json方式的写法更快。
In a sense, `page-meta` has a certain substitution effect on pages.json, allowing the page configuration and page content code to be written in a vue file. It can also realize the control of page configuration through variable binding. However, its performance is not as good as that of pages.json, when a new page is loaded, the rendering speed with the writing mode of pages.json is faster.

`page-meta`只能是页面内的第一个节点。可以配合 [navigation-bar](https://uniapp.dcloud.io/component/navigation-bar) 组件一同使用。
`page-meta` can only be the first node in the page. It can be used with the [navigation-bar](https://uniapp.dcloud.io/component/navigation-bar) component.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet|Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√ 2.6.3+|2.6.3+|√ 2.9.0+|√|√|√|x|√|x|x|

从HBuilderX 2.6.3起，编译到所有平台均支持`page-meta`，但编译到微信时，受微信基础库版本限制；编译到其他平台不受平台版本限制。
From HBuilderX 2.6.3, `page-meta` is supported on all platforms when compiled, but when compiled to WeChat, it is limited by the version of the basic library of WeChat; compiled to other platforms, it is not limited by the platform version.

**属性说明**
**Attribute description**

|属性|类型|默认值|必填|说明|版本要求/平台差异说明|
|Properties|Type|Default Value|Required|Description|Version Requirements/Platform Difference Description|
|:-|:-|:-|:-|:-|:-|
|background-text-style|string||否|下拉背景字体、loading 图的样式，仅支持 dark 和 light|微信基础库 2.9.0|
|background-text-style|string||No|Drop-down background font, loading image style, only supports dark and light|WeChat Basic Library 2.9.0|
|background-color|string||否|窗口的背景色，必须为十六进制颜色值|微信基础库 2.9.0|
|background-color|string||No|The background color of the window, must be a hexadecimal color value|WeChat Basic Library 2.9.0|
|background-color-top|string||否|顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持|微信基础库 2.9.0|
|background-color-top|string||No|The background color of the top window, must be a hexadecimal color value, only supported by iOS|WeChat Basic Library 2.9.0|
|background-color-bottom|string||否|底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持|微信基础库 2.9.0|
| background-color-bottom| string||No|The background color of the bottom window must be a hexadecimal color value, only supported by iOS|WeChat Basic Library 2.9.0|
|scroll-top|string|""|否|滚动位置，可以使用 px 或者 rpx 为单位，在被设置时，页面会滚动到对应位置|微信基础库 2.9.0、H5 3.7.0、App-vue 3.7.0|
| scroll-top| string|""|No|Scroll position, you can use px or rpx as the unit, when set, the page will scroll to the corresponding position|WeChat base library 2.9.0, H5 3.7.0, App-vue 3.7.0|
|scroll-duration|number|300|否|滚动动画时长|微信基础库 2.9.0|
|scroll-duration|number|300|No|Scrolling Animation Duration|WeChat Basic Library 2.9.0|
|page-style|string|""|否|页面根节点样式，页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点|微信基础库 2.9.0、H5 2.6.7、App-vue 2.6.7|
|page-style|string|""|No|The style of the page root node, the page root node is the ancestor node of all page nodes, which is equivalent to the body node in HTML|WeChat Basic Library 2.9.0, H5 2.6.7, App- vue 2.6.7|
|root-font-size|string|""|否|页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 1rem 等于这个字体大小|微信基础库 2.9.0、H5 2.6.7、App-vue 2.6.7|
|root-font-size|string|""|No|The root font size of the page, all rem units in the page, will use this font size as a reference value, that is, 1rem is equal to this font size|WeChat Basic Library 2.9.0, H5 2.6.7, App-vue 2.6.7|
|enable-pull-down-refresh|Boolean|""|否|是否开启下拉刷新|App 2.6.7|
| enable-pull-down-refresh| Boolean| ""| No| Whether to enable pull-down refresh?| App 2.6.7|
|@resize|eventhandle||否|页面尺寸变化时会触发 resize 事件， event.detail = { size: { windowWidth, windowHeight } }|微信基础库 2.9.0|
|@resize|eventhandle||No|The resize event will be triggered when the page size changes, event.detail = { size: { windowWidth, windowHeight } }|WeChat Basic Library 2.9.0|
|@scroll|eventhandle||否|页面滚动时会触发 scroll 事件， event.detail = { scrollTop }|微信基础库 2.9.0|
|@scroll|eventhandle||No|The scroll event will be triggered when the page is scrolled, event.detail = { scrollTop }|WeChat Basic Library 2.9.0|
|@scrolldone|eventhandle||否|如果通过改变 scroll-top 属性来使页面滚动，页面滚动结束后会触发 scrolldone 事件|微信基础库 2.9.0|
|@scrolldone|eventhandle||No|If the page is scrolled by changing the scroll-top property, the scrolldone event will be triggered after the page scrolling ends|WeChat Basic Library 2.9.0|


**注意**
**Notice**
- `<page-meta>` 目前支持的配置仅为上表所列，并不支持所有 page.json 的配置
- `<page-meta>` currently supports only the configurations listed in the table above, and does not support all page.json configurations
- `<page-meta>` 与 pages.json 的设置相冲突时，会覆盖 page.json 的配置
- When `<page-meta>` conflicts with the settings of pages.json, the settings of page.json will be overwritten

#### head标签@head
#### head tag @head

> 新增于`HBuilderX 3.3.0`
> Added in `HBuilderX 3.3.0`

vue3 下还可以在`page-meta`内使用浏览器原生 head 标签，**此用法仅 vue3 版本 ssr 可用**，方便在 编译为 ssr 时进行 seo 优化。
Under vue3, you can also use the browser's native head tag in `page-meta`. **This usage is only available in vue3 version ssr**, which is convenient for seo optimization when compiling to ssr.

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
#### Sample code

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
