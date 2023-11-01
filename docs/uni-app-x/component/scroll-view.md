## scroll-view

<!-- UTSCOMJSON.scroll-view.description -->

<!-- UTSCOMJSON.scroll-view.attrubute -->

<!-- UTSCOMJSON.scroll-view.event -->

<!-- UTSCOMJSON.scroll-view.example -->

### 自定义下拉刷新样式

1. 设置`refresher-default-style`属性为 none 不使用默认样式
2. 自定义下拉刷新元素必须要声明为 slot="refresher"，需要设置刷新元素宽高信息否则可能无法正常显示！
3. 通过组件提供的refresherpulling、refresherrefresh、refresherrestore、refresherabort下拉刷新事件调整自定义下拉刷新元素！实现预期效果

**注意：** 目前自定义下拉刷新元素不支持放在scroll-view的首个子元素位置上。可能无法正常显示

```vue
<scroll-view refresher-default-style="none" :refresher-enabled="true" :refresher-triggered="refresherTriggered"
			 @refresherpulling="onRefresherpulling" @refresherrefresh="onRefresherrefresh" 
			 @refresherrestore="onRefresherrestore" style="flex:1" >
			 
		<view v-for="i in 20" class="content-item">
			<text class="text">item-{{i}}</text>
		</view>
		
		<!-- 自定义下拉刷新元素 -->
		<view slot="refresher" class="refresh-box">
			<text class="tip-text">{{text[state]}}</text>
		</view>
		
</scroll-view>
```

**具体代码请参考：**[自定义下拉刷新样式示例](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/component/scroll-view/scroll-view-custom-refresher-props.uvue)

### nested-scroll嵌套滚动协商

嵌套滚动是原生才有的概念，web没有。

它是指父子2个滚动容器嵌套，在滚动时可以互相协商，控制父容器怎么滚、子容器怎么滚。

1. 通过在子滚动容器设置`custom-nested-scroll = true`，开启与父组件实现嵌套滚动协商。仅list-view、scroll-view组件支持与父组件嵌套滚动协商。

下面的示例代码，在一个scroll-view中嵌套了一个list-view。在list-view上设置了custom-nested-scroll="true"。

```html
<scroll-view style="height: 100%;" scroll-y="true" rebound ="false" nested-scroll-child="listview" @startnestedscroll="onStartNestedScroll" @nestedprescroll="onNestedPreScroll"
	@stopnestedscroll="onStopNestedScroll">
		...
		<view style="height: 100px;">停靠视图</view>
		<list-view id="listview"  class="child-scroll" scroll-y="true" custom-nested-scroll="true">
			...
		</list-view>
</scroll-view>
```

2. 子组件准备滚动时会触发父组件的`startnestedscroll`事件。父组件响应`startnestedscroll`事件return ture则表示与子组件建立嵌套滚动协商。
```ts
onStartNestedScroll(event: StartNestedScrollEvent): Boolean {
	//开启与子组件建立嵌套滚动协商
	return true
}
```
3. 当建立嵌套滚动协商后，子组件滚动时父组件会持续收到`nestedprescroll`事件，这个事件的含义是嵌套滚动即将发生。
事件中会返回NestedPreScrollEvent子组件将要滚动的数据。
4. 父组件执行NestedPreScrollEvent.consumed(x,y)函数，告知子组件本次`nestedprescroll`事件deltaX、deltaY各消耗多少，即父组件要消费掉多少滚动距离。
子组件将执行差值后的deltaX、deltaY滚动距离，也就是剩余的滚动余量留给子组件。
```ts
onNestedPreScroll(event: NestedPreScrollEvent) {
	var deltaY = event.deltaY
	var deltaX = event.deltaX
	...
	if() {
		//告知子组件deltaX、deltaY各消耗多少
		event.consumed(x, y)
	}
}
```
5. 父组件配置`nested-scroll-child`后，父组件惯性滚动时会让`nested-scroll-child`配置的子元素进行滚动。从而触发`nestedprescroll`协商处理滚动事件
6. 滚动行为停止后会触发`stopnestedscroll`事件

**注意：**
+ 仅Android平台支持嵌套滚动协商
+ 嵌套滚动协商仅支持竖向滚动，横向滚动不支持
+ nested-scroll-child设置的元素必须配置custom-nested-scroll = true，否则配置无效。

**具体代码请参考：**[nested-scroll嵌套滚动示例](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/template/long-list/long-list.uvue)

<!-- UTSCOMJSON.scroll-view.compatibility -->

<!-- UTSCOMJSON.scroll-view.children -->

<!-- UTSCOMJSON.scroll-view.reference -->

