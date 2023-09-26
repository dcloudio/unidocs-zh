## uni.pageScrollTo(options) @pagescrollto

<!-- UTSAPIJSON.pageScrollTo.description -->

可以滚动到指定的scrollTop值处，也可以滚动到指定的目标元素处（通过css选择器selector）, 仅支持一级 class

app-uvue下，只有页面的根元素为scroll-view时，本API才生效。[详见](../css/readme.md#pagescroll)

<!-- UTSAPIJSON.pageScrollTo.param -->

`scrollTop` 和 `selector` 必须指定其中一个属性，否者触发 `fail` 回调

<!-- UTSAPIJSON.pageScrollTo.returnValue -->

<!-- UTSAPIJSON.pageScrollTo.example -->

<!-- UTSAPIJSON.pageScrollTo.compatibility -->

<!-- UTSAPIJSON.pageScrollTo.tutorial -->

**selector 语法**

selector类似于 CSS 的选择器，但仅支持下列语法。

- ID选择器：#the-id
- class选择器（可以连续指定多个）：`.a-class.another-class`
- 子元素选择器：`.the-parent > .the-child`
- 后代选择器：`.the-ancestor .the-descendant`
- 跨自定义组件的后代选择器：`.the-ancestor >>> .the-descendant`
- 多选择器的并集：`#a-node, .some-other-nodes`

## uni-app x 注意事项

1. app-uvue支持的选择器较少，不支持ID选择器，[详见](uni-app-x/css/README.md#选择器)
2. app-uvue的页面滚动，是由页面最外层的scroll-view模拟的，如果页面最外层不是scroll-view，无法使用本api。[详见](uni-app-x/css/README.md#pagescroll)
3. app-uvue的scroll-view滚动时，如需动画，则需要在scroll-view的属性中配置 `scroll-with-animation="true"`，[详见](component/scroll-view.md)
4. scroll-view的滚动，设置其scrollTop即可。[详见](component/scroll-view.md)

**示例**

```javascript
uni.pageScrollTo({
	scrollTop: 0,
	duration: 300
});
```

<!-- UTSAPIJSON.page-scroll-to.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->