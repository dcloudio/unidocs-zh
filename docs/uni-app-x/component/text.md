<!-- UTSCOMJSON.text.name -->

<!-- UTSCOMJSON.text.description -->

在app-uvue和app-nvue中，文本只能写在text中，而不能写在view的text区域。

虽然app-uvue中写在view的text区域的文字，也会被编译器自动包裹一层text组件，看起来也可以使用。但这样会造成无法修改该text文字的样式，详见uvue的[样式不继承](../uni-app-x/css/readme.md#stylenoextends)章节

<!-- UTSCOMJSON.text.attrubute -->

<!-- UTSCOMJSON.text.compatibility -->

## 子组件

text组件在web浏览器渲染（含浏览器、小程序webview渲染模式、app-vue）和uvue中，可以并只能嵌套text组件。

在nvue中，text组件不能嵌套。

<!-- UTSCOMJSON.text.reference -->

