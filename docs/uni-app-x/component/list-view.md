## list-view

<!-- UTSCOMJSON.list-view.description -->

在App中，基于recycle-view的list，才能实现长列表的资源自动回收，以保障列表加载很多项目时，屏幕外的资源被有效回收。list-view就是基于recycle-view的list组件。

每个list由1个父组件list-view及若干子组件list-item构成。

在list-item上使用v-for指令循环list-item，自动会回收屏幕外的列表项资源。

list-view和scroll-view都是滚动组件，list适用于长列表场景，其他场景适用于scroll-view。

注意: list-view仅识别list-item组件其他组件无法识别不能正常显示

<!-- UTSCOMJSON.list-view.attrubute -->

<!-- UTSCOMJSON.list-view.event -->

<!-- UTSCOMJSON.list-view.example -->

<!-- UTSCOMJSON.list-view.compatibility -->

<!-- UTSCOMJSON.list-view.children -->

<!-- UTSCOMJSON.list-view.reference -->


## list-item

<!-- UTSCOMJSON.list-item.description -->

<!-- UTSCOMJSON.list-item.attrubute -->

### list-item复用机制

type属性定义list-item组件类型。每一个type类型都会有对应的list-item组件缓存池，当list-view组件滚动触发加载list-item组件时，会优先查询对应type缓存池是否存在可复用的list-item组件。有则复用没有则创建新的list-item组件。
当list-item组件被滚动出屏幕则会优先添加到对应类型的list-item缓存池，每个类型缓存最大5个（不同平台缓存最大值不固定），如果缓存池已满则进行组件销毁！减少不必要的内存占用。

<!-- UTSCOMJSON.list-item.event -->

<!-- UTSCOMJSON.list-item.example -->

<!-- UTSCOMJSON.list-item.compatibility -->

<!-- UTSCOMJSON.list-item.children -->

<!-- UTSCOMJSON.list-item.reference -->

## 示例代码

- 联网联表：[https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/list-news/list-news.uvue](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/list-news/list-news.uvue)
- 可左右滑动的多个列表：[https://gitcode.net/dcloud/hello-uni-app-x/-/tree/master/pages/template/long-list](https://gitcode.net/dcloud/hello-uni-app-x/-/tree/master/pages/template/long-list)

## Bug&Tips

- 暂不支持reverse，目前还不能开发im那样的倒序列表
- list的下拉刷新样式暂不支持自定义
- 多列瀑布流是另外的组件，后续会提供
