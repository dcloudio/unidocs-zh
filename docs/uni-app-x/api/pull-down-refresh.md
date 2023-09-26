## uni.stopPullDownRefresh() @stoppulldownrefresh

<!-- UTSAPIJSON.stopPullDownRefresh.description -->

使用：
1. 首先pages.json里配置了页面可下拉刷新`"enablePullDownRefresh": true`
2. 当用户下拉页面时触发页面生命周期`onPullDownRefresh`
3. 在合适的时机（如联网刷新数据结束），调用本API`uni.stopPullDownRefresh()`，结束下拉刷新状态

本API仅负责页面下拉刷新。如使用组件下拉刷新，另见scroll-view、list-view等组件的文档。

<!-- UTSAPIJSON.stopPullDownRefresh.param -->

<!-- UTSAPIJSON.stopPullDownRefresh.returnValue -->

<!-- UTSAPIJSON.stopPullDownRefresh.example -->

<!-- UTSAPIJSON.stopPullDownRefresh.compatibility -->

<!-- UTSAPIJSON.stopPullDownRefresh.tutorial -->

<!-- UTSAPIJSON.pull-down-refresh.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->