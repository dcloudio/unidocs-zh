## sticky-header

<!-- UTSCOMJSON.sticky-header.description -->

<!-- UTSCOMJSON.sticky-header.attrubute -->

<!-- UTSCOMJSON.sticky-header.event -->

### sticky-header使用场景

+ 父元素滚动过程中，某个元素有固定到父元素顶部的需求

需求其实就是元素吸顶。可将需要吸顶元素放入sticky-header组件中，sticky-header组件作为父元素的子元素，放到吸顶元素原来的位置即可。

**示例：**

```html
<list-view id="list-view" style="flex: 1; background-color: #f5f5f5;">
	<sticky-header>
		//固定到父元素顶部的元素
		<text style="padding: 20px; background-color: #f5f5f5;">向上滑动页面，体验sticky-header吸顶效果。</text>
	</sticky-header>
	<list-item v-for="index in 20" :key="index" style="padding: 15px; margin: 5px 0;background-color: #fff;border-radius: 5px;">
		<text class="text">itme-content-{{index}}</text>
	</list-item>
</list-view>
```

<!-- UTSCOMJSON.sticky-header.example -->

<!-- UTSCOMJSON.sticky-header.compatibility -->

<!-- UTSCOMJSON.sticky-header.children -->

<!-- UTSCOMJSON.sticky-header.reference -->

## sticky-section

<!-- UTSCOMJSON.sticky-section.description -->

<!-- UTSCOMJSON.sticky-section.attrubute -->

<!-- UTSCOMJSON.sticky-section.event -->

### sticky-section使用场景

+ 父元素滚动过程中，多个元素有固定到父元素顶部的需求。

父元素中多个元素吸顶需要使用sticky-section组件。sticky-section组件作为sticky-header组件的父容器。sticky-section组件会控制子元素的滚动吸顶业务。sticky-section组件之间可通过push-pinned-header属性控制吸顶重叠时是否上推。

**示例：**

```html
<list-view id="list-view" style="flex: 1; background-color: #f5f5f5;">
	<sticky-section v-for="sectionId in 3" :id="sectionId" push-pinned-header=false>
		<sticky-header>
			<text style="padding: 20px; background-color: #f5f5f5;">sticky-header吸顶--{{sectionId}}</text>
		</sticky-header>
		<list-item v-for="index in 20" :key="index" style="padding: 15px; margin: 5px 0;background-color: #fff;border-radius: 5px;">
			<text class="text">itme-content-{{index}}</text>
		</list-item>
	</sticky-section>
</list-view>
```

**注意**

+ sticky-section组件支持存放多个sticky-header子组件，多个sticky-header滚动吸顶时，后一个sticky-header会停靠在前一个sticky-header的末尾处, 仅限于同一个sticky-section父容器。多个sticky-section吸顶停靠通过push-pinned-header控制。
+ sticky-section组件是虚拟组件不会真实渲染。仅支持padding属性控制位置。其他排版需求要交给子元素实现

<!-- UTSCOMJSON.sticky-section.example -->

<!-- UTSCOMJSON.sticky-section.compatibility -->

<!-- UTSCOMJSON.sticky-section.children -->

<!-- UTSCOMJSON.sticky-section.reference -->