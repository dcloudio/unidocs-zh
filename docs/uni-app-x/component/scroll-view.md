## scroll-view

<!-- UTSCOMJSON.scroll-view.description -->

<!-- UTSCOMJSON.scroll-view.attrubute -->

<!-- UTSCOMJSON.scroll-view.event -->

<!-- UTSCOMJSON.scroll-view.example -->

### 自定义下拉刷新样式

1. 设置`refresher-default-style`属性为 none 不使用默认样式
2. 自定义下拉刷新元素必须要声明为 slot="refresher"
3. 通过组件提供的refresherpulling、refresherrefresh、refresherrestore、refresherabort下拉刷新事件调整自定义下拉刷新元素！实现预期效果

**注意：** 目前自定义下拉刷新元素不支持放在scroll-view的首个子元素位置上。可能无法正常显示

```uts
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

<!-- UTSCOMJSON.scroll-view.compatibility -->

<!-- UTSCOMJSON.scroll-view.reference -->

