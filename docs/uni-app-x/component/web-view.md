## web-view

<!-- UTSCOMJSON.web-view.description -->

<!-- UTSCOMJSON.web-view.attrubute -->

<!-- UTSCOMJSON.web-view.event -->

<!-- UTSCOMJSON.web-view.compatibility -->

<!-- UTSCOMJSON.web-view.reference -->

### 上下文对象API

web-view的操作api为[uni.createWebviewContext()](../api/createwebviewcontext.md)。

给web-view组件设一个id属性，将id的值传入uni.createWebviewContext()，即可得到web-view组件的上下文对象，进一步可使用`.evalJS()`、`.reload()`等方法。