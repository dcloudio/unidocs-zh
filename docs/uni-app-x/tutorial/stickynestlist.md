# 复杂列表开发指南

常见app有很多复杂列表交互效果。本文由浅入深的进行讲解。

## 长列表需要使用list-view的recycle机制

uni-app x的滚动视图组件有scroll-view和list-view。scroll-view比较灵活，但没有recycle复用机制。

当列表较长时，需要recycle机制。比如列表有1000个item，它们结构相同仅数据不同，但屏幕上其实只能显示20个item。

此时如使用scroll-view，1000个item加载后，所有列表项目占用的内存、渲染资源加起来会很高。

实际上手机OS提供了的回收机制，使用list-view来加载这10000个item，仅屏幕可视范围及附近的item占用渲染资源，在滚动在其他item位置时，仅仅是更新这些item的数据。

在列表项目中包含大图时，recycle的效果更加明显。当然，我们在开发中要极力避免在列表中使用大图，每个item里的图片推荐不超过100k。

另外注意list-item里的组件数量，它是dom元素的放大器。每个list-item里的dom数量多一点，页面性能就很容易被拖垮。

比如很多列表有评星，如果使用一个5个view的评星组件，那每个list-item都会多5个view，列表一长dom数量会惊人。\
在hello uni-app x的复杂长列表示例中，评星没有使用任何自定义组件，只是一个text组件里面使用字体图标放了5个字符，极大减少组件数量。[详见](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/long-list/long-list-page.uvue)

## 列表的左右滑动swiper@swiper
Android App常见的一种列表效果，是顶部有一个tab，可以左右滑动切换不同的列表。也就是swiper-list。

此时页面结构如下：顶部一个tab组件，下面是一个swiper组件，每个swiper-item中放入一个list-view。

这个效果，在hello uni-app x有几个例子：
- [tab为下划线方式的swiper](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/swiper-list/swiper-list.uvue)
- [tab为字体放大方式的swiper](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/swiper-list2/swiper-list2.uvue)
上面2个是比较简单的样例，没有实际放入数据的列表。

下面2个例子是实际放入数据的swiper-list，但这2个列表除了所有滑动，还加入了吸顶和nested嵌套。这些后面章节会详细讲述。
- [表头吸顶的可左右滑动长列表](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/long-list2/long-list2.uvue)
- [顶部搜索框随时下移的可左右滑动长列表](https://gitcode.net/dcloud/hello-uni-app-x/-/tree/master/pages/template/long-list)

## 吸顶sticky@sticky
吸顶，在web里是一个css属性，但相比原生不太灵活。

在uni-app x中吸顶有3种做法。

### 1. 监听滚动事件，调用element的transform，设置一个view的top始终固定在一个位置，不跟随滚动。从而实现吸顶效果。

得益于uni-app x的app-android版没有通信性能问题，上述做法也可以流畅实现。

源码见：[scroll-view吸顶](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/scroll-sticky/scroll-sticky.uvue)

### 2. 使用sticky-header组件

上面那种始终固定top的做法，在scroll-view里可以实现，但在list-view里有问题。因为list-view底层是Android的recycle-view，有一些特殊限制。

在list-view中，吸顶需要使用[sticky-header组件](../component/sticky-header.md)。

sticky-header组件是list-view的一级子组件，在这个吸顶组件中放入内容，该组件滚动到列表顶部时将不再继续向上滚动、固定在列表顶端；但向下滚动时可以自由滚动，甚至滚动出屏幕之外。

源码见：[列表到详情](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/list-news/list-news.uvue)

上述页面中，整个页面就是一个list-view，包括顶部的banner、中间的表头和下面的list-item。中间的表头放在sticky-header组件中以实现吸顶效果。

sticky-header还有一个配套组件sticky-section，组合它们可以实现分段吸顶，比如通讯录的字母分段吸顶或多店铺购物车的分段吸顶。

### 3. 吸顶的第三种方式：嵌套滚动

scroll-view作为父容器时，可以和子滚动容器（子scroll-view或子list-view）进行嵌套，并且可以协商嵌套滚动的逻辑。

这种方式，当子容器滚动时，可以通知父容器：现在要滚动了，你打算怎么处理，是跟着一起滚、还是滚动一点、还是不动。

如果父的逻辑是滚动到一定条件后就不再滚动了，那么感受上达到了吸顶的效果。但其实代码逻辑并不是吸顶。

源码见：[顶部搜索框随时下移的可左右滑动长列表](https://gitcode.net/dcloud/hello-uni-app-x/-/tree/master/pages/template/long-list)

本章节主要是讲述吸顶的做法，具体的嵌套滚动详述见下一章节。

## 嵌套滚动nested@nested

嵌套滚动，nested，是手机os原生提供的一种强大能力。在较小的屏幕空间里，可以充分编程实现某些内容的显示和滚出屏幕外。

scroll-view作为父容器时，可以和子滚动容器（子scroll-view或子list-view）进行嵌套，并且可以协商嵌套滚动的逻辑。

这块有详情教程，本文就不再重复。[详见](../component/scroll-view.md#nested)

以下2个都是嵌套滚动的示例。在可左右滑动的列表中，由于list-view被嵌入swiper中，想在父容器实现复杂效果，大多要使用嵌套滚动。
- [表头吸顶的可左右滑动长列表](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/long-list2/long-list2.uvue)
- [顶部搜索框随时下移的可左右滑动长列表](https://gitcode.net/dcloud/hello-uni-app-x/-/tree/master/pages/template/long-list)