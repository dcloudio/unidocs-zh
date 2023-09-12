## list-view

<!-- UTSCOMJSON.list-view.description -->

在App中，基于recycle-view的list，才能实现长列表的资源自动回收，以保障列表加载很多项目时，屏幕外的资源被有效回收。list-view就是基于recycle-view的list组件。

每个list由1个父组件list-view及若干子组件list-item构成。

在list-item上使用v-for指令循环list-item，自动会回收屏幕外的列表项资源。

list-view和scroll-view都是滚动组件，list适用于长列表场景，其他场景适用于scroll-view。

<!-- UTSCOMJSON.list-view.attrubute -->

<!-- UTSCOMJSON.list-view.event -->

<!-- UTSCOMJSON.list-view.compatibility -->

<!-- UTSCOMJSON.list-view.reference -->


## list-item

<!-- UTSCOMJSON.list-item.description -->

<!-- UTSCOMJSON.list-item.attrubute -->

<!-- UTSCOMJSON.list-item.event -->

<!-- UTSCOMJSON.list-item.compatibility -->

<!-- UTSCOMJSON.list-item.reference -->

## 示例代码

- 联网联表：[https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/list-news/list-news.uvue](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/list-news/list-news.uvue)
- 可左右滑动的多个列表：[https://gitcode.net/dcloud/hello-uni-app-x/-/tree/master/pages/template/long-list](https://gitcode.net/dcloud/hello-uni-app-x/-/tree/master/pages/template/long-list)

## Bug&Tips

- 暂不支持reverse，目前还不能开发im那样的倒序列表
- 多列瀑布流是另外的组件，后续会提供