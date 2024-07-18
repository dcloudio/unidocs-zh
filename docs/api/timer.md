# 定时器

## setTimeout(callback, delay, rest)

> HarmonyOS Next 支持

设定一个定时器。在定时到期以后执行注册的回调函数

**参数说明**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|callback|Function|是|回调函数|
|delay|Number|否|延迟的时间，函数的调用会在该延迟之后发生，单位 ms|
|rest|Any|否|param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数|

**返回值**

|返回值|类型|说明|
|:-|:-|:-|
|timeoutID|Number|定时器的编号，这个值可以传递给 [clearTimeout](/api/timer?id=cleartimeout) 来取消该定时|

## clearTimeout(timeoutID)

> HarmonyOS Next 支持

取消由 setTimeout 设置的定时器。

**参数说明**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|timeoutID|Number|是|要取消的定时器的 ID|

### 最佳实践

定时器应当在组件、页面销毁时候取消，否则该定时器将成为游离定时器，无法被回收销毁。

```html
<script lang="ts">
	let timer: ReturnType<typeof setTimeout> | null = null;
	export default {
		data() {
			return {};
		},
		methods: {
			onSetTimeout() {
				timer = setTimeout(() => {
					console.log("setTimeout");
				}, 1000);
			},
			clearTimer() {
				// clearTime
				if (timer) {
					clearTimeout(timer);
					timer = null;
				}
			},
		},
		beforeUnmount() {
			// clearTime
			this.clearTimer();
		},
	};
</script>
```

## setInterval(callback, delay, rest)

> HarmonyOS Next 支持

设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数

**参数说明**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|callback|Function|是|回调函数|
|delay|Number|否|执行回调函数之间的时间间隔，单位 ms|
|rest|Any|否|param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数|

**返回值**

|返回值|类型|说明|
|:-|:-|:-|
|intervalID|Number|定时器的编号，这个值可以传递给 [clearInterval](/api/timer?id=clearinterval) 来取消该定时|

**代码示例**

```js
this.timer = setInterval(() => {
	//TODO
}, 1000);
```

## clearInterval(intervalID)

> HarmonyOS Next 支持

取消由 setInterval 设置的定时器。

**参数说明**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|intervalID|Number|是|要取消的定时器的 ID|

### 最佳实践

```html
<script lang="ts">
	let timer: ReturnType<typeof setTimeout> | null = null;
	export default {
		data() {
			return {};
		},
		methods: {
			onSetTimeout() {
				timer = setInterval(() => {
					console.log("setInterval");
				}, 1000);
			},
			clearTimer() {
				// clearTime
				if (timer) {
					clearInterval(timer);
					timer = null;
				}
			},
		},
		beforeUnmount() {
			// clearTime
			this.clearTimer();
		},
	};
</script>
```

## 注意事项

- App 端返回的定时器编号可能为 String 类型，使用时无需主动转换为 Number 类型
- 定时器执行间隔并不等于定时器间隔，受很多因素影响，这属于 JS 执行问题，详见 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval)
