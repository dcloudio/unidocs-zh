## uni.pageScrollTo(OBJECT)

将页面滚动到目标位置。可以指定滚动到具体的scrollTop数值，也可以指定滚动到某个元素的位置

## 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|华为快应用|360小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√(nvue不支持)|√|√|√|√|√|√|√|√|√|

<!-- UNIAPPAPIJSON.pageScrollTo.compatibility -->

## OBJECT参数说明

|参数名		|类型		|必填	|说明														|
|:-			|:-			|:-		|:-															|
|scrollTop	|Number		|否		|滚动到页面的目标位置（单位px）								|
|selector	|String		|否		|元素选择器，用于指定要滚动到的元素位置，App、H5、微信小程序2.7.3+ 、支付宝小程序1.20.0+支持|
|duration	|Number		|否		|滚动动画的时长，默认300ms，单位 ms							|
|success	|function	|否		|接口调用成功的回调函数										|
|fail		|function	|否		|接口调用失败的回调函数										|
|complete	|function	|否		|接口调用结束的回调函数（调用成功、失败都会执行）			|

<!-- UNIAPPAPIJSON.pageScrollTo.param -->

**selector 语法**

selector类似于 CSS 的选择器，但仅支持下列语法。

- ID选择器：#the-id
- class选择器（可以连续指定多个）：`.a-class.another-class`
- 子元素选择器：`.the-parent > .the-child`
- 后代选择器：`.the-ancestor .the-descendant`
- 跨自定义组件的后代选择器：`.the-ancestor >>> .the-descendant`
- 多选择器的并集：`#a-node, .some-other-nodes`

## uni-app x 注意事项

1. app-uvue支持的选择器较少，不支持ID选择器，[详见](https://doc.dcloud.net.cn/uni-app-x/css/#%E9%80%89%E6%8B%A9%E5%99%A8)
2. app-uvue的页面滚动，是由页面最外层的scroll-view模拟的，如果页面最外层不是scroll-view，无法使用本api。[详见](https://doc.dcloud.net.cn/uni-app-x/css/#pagescroll)
3. app-uvue的scroll-view滚动时，如需动画，则需要在scroll-view的属性中配置 `scroll-with-animation="true"`，[详见](/component/scroll-view.md)
4. scroll-view的滚动，设置其scrollTop即可。[详见](/component/scroll-view.md)

**示例**

```javascript
uni.pageScrollTo({
	scrollTop: 0,
	duration: 300
});
```
