## renderjs
`renderjs`是一个运行在视图层的js。它比[WXS](/tutorial/miniprogram-subject.html#wxs)更加强大。它只支持app-vue和h5。

`renderjs`的主要作用有2个：
- 大幅降低逻辑层和视图层的通讯损耗，提供高性能视图交互能力
- 在视图层操作dom，运行for web的js库

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√(2.5.5+，仅支持vue)|√|x|x|x|x|x|

### 使用方式

设置 script 节点的 lang 为 renderjs
```html
<script module="test" lang="renderjs">
	export default {
		mounted() {
			// ...
		},
		methods: {
			// ...
		}
	}
</script>
```

### 示例

* [通过renderjs，在app和h5端使用完整的 `echarts`](https://ext.dcloud.net.cn/plugin?id=1207)

### 功能详解
- 大幅降低逻辑层和视图层的通讯损耗，提供高性能视图交互能力

逻辑层和视图层分离有很多好处，但也有一个副作用是在造成了两层之间通信阻塞。尤其是小程序和App的Android端阻塞问题影响了高性能应用的制作。

`renderjs`运行在视图层，可以直接操作视图层的元素，避免通信折损。

在hello uni-app的canvas示例中，App端使用了`renderjs`，由运行在视图层的`renderjs`直接操作视图层的canvas，实现了远超微信小程序的流畅canvas动画示例。具体在[hello uni-app](https://m3w.cn/uniapp)示例中体验，对比App端和小程序端的性能差异。

- 在视图层操作dom，运行for web的js库
官方不建议在uni-app里操作dom，但如果你不开发小程序，想使用一些操作了dom、window的库，其实可以使用`renderjs`来解决。

在app-vue环境下，视图层由webview渲染，而`renderjs`运行在视图层，自然可以操作dom和window。

这是一个基于`renderjs`运行echart完整版的示例：[renderjs版echart](https://ext.dcloud.net.cn/plugin?id=1207)

同理，`f2`、`threejs`等库都可以这么用。


### 注意事项

* 目前仅支持内联使用。
* 不要直接引用大型类库，推荐通过动态创建 script 方式引用。
* 可以使用 vue 组件的生命周期不可以使用 App、Page 的生命周期
* 视图层和逻辑层通讯方式与 [WXS](/tutorial/miniprogram-subject.html#wxs) 一致，另外可以通过 this.$ownerInstance 获取当前组件的 ComponentDescriptor 实例。
* 观测更新的数据在视图层可以直接访问到。
* APP 端视图层的页面引用资源的路径相对于根目录计算，例如：./static/test.js。
* APP 端可以使用 dom、bom API，不可直接访问逻辑层数据，不可以使用 uni 相关接口（如：uni.request）
* H5 端逻辑层和视图层实际运行在同一个环境中，相当于使用 mixin 方式，可以直接访问逻辑层数据。