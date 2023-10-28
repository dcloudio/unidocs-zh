## list-view

<!-- UTSCOMJSON.list-view.description -->

在App中，基于recycle-view的list，才能实现长列表的资源自动回收，以保障列表加载很多项目时，屏幕外的资源被有效回收。list-view就是基于recycle-view的list组件。

每个list由1个父组件list-view及若干子组件list-item构成。仅有有限子组件可识别，[见下](#children-tags)

list-view和scroll-view都是滚动组件，list适用于长列表场景，其他场景适用于scroll-view。

list-view支持通过子组件sticky-header处理吸顶的场景。

<!-- UTSCOMJSON.list-view.attrubute -->

<!-- UTSCOMJSON.list-view.event -->

<!-- UTSCOMJSON.list-view.example -->

### 自定义下拉刷新样式

list-view组件有默认的下拉刷新样式，如果想自定义，则需使用自定义下拉刷新。

1. 设置`refresher-default-style`属性为 none 不使用默认样式
2. 设置 list-item 定义自定义下拉刷新元素并声明为 `slot="refresher"`，需要设置刷新元素宽高信息否则可能无法正常显示！
   ```html
   <template>
   	<list-view refresher-default-style="none" :refresher-enabled="true" :refresher-triggered="refresherTriggered"
   			 @refresherpulling="onRefresherpulling" @refresherrefresh="onRefresherrefresh" 
   			 @refresherrestore="onRefresherrestore" style="flex:1" >
   
   		<list-item v-for="i in 10" class="content-item">
   			<text class="text">item-{{i}}</text>
   		</list-item>
   		
   		<!-- 自定义下拉刷新元素 -->
   		<list-item slot="refresher" class="refresh-box">
   			<text class="tip-text">{{text[state]}}</text>
   		</list-item>
   	</list-view>
   </template>
   ```
3. 通过组件提供的refresherpulling、refresherrefresh、refresherrestore、refresherabort下拉刷新事件调整自定义下拉刷新元素！实现预期效果

**注意：** 
+ 3.93版本开始支持
+ 目前自定义下拉刷新元素不支持放在list-view的首个子元素位置上。可能无法正常显示


<!-- UTSCOMJSON.list-view.compatibility -->

<!-- UTSCOMJSON.list-view.children -->

<!-- UTSCOMJSON.list-view.reference -->

## list-item

<!-- UTSCOMJSON.list-item.description -->

<!-- UTSCOMJSON.list-item.attrubute -->

### list-item复用机制

+ type属性定义list-item组件类型。不赋值type属性默认值为0，每一个type类型都会有对应的list-item组件缓存池。
+ list-view组件加载list-item组件时，会优先查询对应type缓存池是否存在可复用的list-item组件。有则复用没有则创建新的list-item组件。
+ list-item组件被滑动出屏幕则会优先添加到对应类型的list-item缓存池，每个类型缓存最大5个（不同平台缓存最大值不固定），如果缓存池已满则进行组件销毁！
+ 部分list-item组件存在子元素个数差异或排版差异时。请尽可能的配置不同的type，这样可以规避获取相同type类型的list-item组件后。由于子元素差异导致list-item无法正常复用问题。具体可参考示例：

	```html
	<template>
	  <view class="content">
		<list-view ref="listView" class="list" :scroll-y="true">
		  <list-item v-for="(item,index) in list" :key="index" class="content-item1" type=1>
			<text class="text">title-{{item}}</text>
			<text class="text">content-{{item}}</text>
		  </list-item>
		  <list-item v-for="(item,index) in list" :key="index" class="content-item2" type=2>
		  	<image class="image" src ="/static/test-image/logo.png"></image>
		  </list-item>
		  <list-item type=3>
			<text class="loading">{{text}}</text>
		  </list-item>
		</list-view>
	  </view>
	</template>
	```
	示例中有三种类型的list-item组件。如果都不赋值type，list-item组件滑动出屏幕后都归类到type=0的缓存池。当触发list-item组件重新加载时，获取type=0的缓存池的组件，获取到的list-item组件可能是两个text子组件也可能是一个image子组件或一个text子组件，底层复用判断时则认为该情况异常不复用，重新创建新的list-item组件！复用失败未能优化性能。正确的方式则是不同的类型设置不同的type。加载时则会获取对应type类型缓存池中的list-item组件实现复用。

<!-- UTSCOMJSON.list-item.event -->

<!-- UTSCOMJSON.list-item.example -->

<!-- UTSCOMJSON.list-item.compatibility -->

<!-- UTSCOMJSON.list-item.children -->

<!-- UTSCOMJSON.list-item.reference -->

## 示例代码

- 联网联表：[https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/list-news/list-news.uvue](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/list-news/list-news.uvue)
- 可左右滑动的多个列表：[https://gitcode.net/dcloud/hello-uni-app-x/-/tree/master/pages/template/long-list](https://gitcode.net/dcloud/hello-uni-app-x/-/tree/master/pages/template/long-list)

## sticky-header

<!-- UTSCOMJSON.sticky-header.description -->

<!-- UTSCOMJSON.sticky-header.attrubute -->

<!-- UTSCOMJSON.sticky-header.event -->

<!-- UTSCOMJSON.sticky-header.example -->

<!-- UTSCOMJSON.sticky-header.compatibility -->

<!-- UTSCOMJSON.sticky-header.children -->

<!-- UTSCOMJSON.sticky-header.reference -->


### Bug & Tips@tips

- 暂不支持reverse，目前还不能开发im那样的倒序列表
- 多列瀑布流是另外的组件，后续会提供
