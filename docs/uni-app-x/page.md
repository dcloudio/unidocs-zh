# 页面简介

本文暂时只包括 `uni-app x` 支持的页面生命周期兼容性表格，详情另见 [页面](https://uniapp.dcloud.net.cn/tutorial/page.html)

## 页面生命周期

|  | 安卓系统版本 | 安卓 uni-app | 安卓 uni-app-x | iOS 系统版本 | iOS uni-app | iOS uni-app-x |
| :- | :- | :- | :- | :- | :- | :- |
| onInit | x | x | x | x | x | x |
| onLoad | 5.0 | √ | √ | 10.0 | √ | x |
| onShow | 5.0 | √ | √ | 10.0 | √ | x |
| onReady | 5.0 | √ | √ | 10.0 | √ | x |
| onHide | 5.0 | √ | √ | 10.0 | √ | x |
| onUnload | 5.0 | √ | √ | 10.0 | √ | x |
| onPullDownRefresh | 5.0 | √ | √ | 10.0 | √ | x |
| onReachBottom | 5.0 | √ | √ | 10.0 | √ | x |
| onShareAppMessage | x | x | x | x | x | x |
| onShareTimeline | x | x | x | x | x | x |
| onAddToFavorites | x | x | x | x | x | x |
| onPageScroll | 5.0 | √ | √ | 10.0 | √ | x |
| onResize | 5.0 | √ | √ | 10.0 | √ | x |
| onTabItemTap | 5.0 | √ | x | 10.0 | √ | x |
| onNavigationBarButtonTap | 5.0 | √ | x | 10.0 | √ | x |
| onBackPress | 5.0 | √ | √ | 10.0 | √ | x |
| onNavigationBarSearchInputChanged | 5.0 | √ | x | 10.0 | √ | x |
| onNavigationBarSearchInputConfirmed | 5.0 | √ | x | 10.0 | √ | x |
| onNavigationBarSearchInputClicked | 5.0 | √ | x | 10.0 | √ | x |