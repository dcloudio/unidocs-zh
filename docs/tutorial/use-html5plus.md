`uni-app` App 端内置 [HTML5+](https://www.html5plus.org/doc/) 引擎，让 js 可以直接调用丰富的原生能力。
The `uni-app` App has a built-in [HTML5+](https://www.html5plus.org/doc/) engine, allowing js to directly call rich native capabilities.

#### 条件编译调用 HTML5+
#### Conditional compilation calls HTML5+

小程序及 H5 等平台是没有 HTML5+ 扩展规范的，因此在 `uni-app` 调用 HTML5+ 的扩展规范时，需要注意使用条件编译。否则运行到h5、小程序等平台会出现 `plus is not defined`错误。
Platforms such as Applet and H5 do not have HTML5+ extension specification, so when `uni-app` calls HTML5+ extension specification, you need to pay attention to using conditional compilation. Otherwise, the `plus is not defined` error will appear when running to h5, applet and other platforms.

```javascript
// #ifdef APP-PLUS
var appid = plus.runtime.appid;
console.log('应用的 appid 为：' + appid);
// #endif
```

#### `uni-app`不需要 `plus ready`
#### `uni-app` does not need `plus ready`
在html中使用plus的api，需要等待plus ready。
To use the plus api in html, you need to wait for plus ready.
而`uni-app`不需要等，可以直接使用。而且如果你调用plus ready，反而不会触发。
And `uni-app` does not need to wait and can be used directly. And if you call plus ready, it will not trigger.


#### `uni-app` 中的事件监听
#### Event listeners in `uni-app`

在普通的 H5+ 项目中，需要使用 `document.addEventListener` 监听原生扩展的事件。
In ordinary H5+ projects, you need to use `document.addEventListener` to listen to native extension events.

 `uni-app` 中，没有 document。可以使用 `plus.globalEvent.addEventListener` 来实现。
 In `uni-app`, there is no document. This can be done using `plus.globalEvent.addEventListener`.

```javascript
// #ifdef APP-PLUS
// 监听新意图事件
// Listen for new intent events
plus.globalEvent.addEventListener('newintent', function(){});
// #endif
```

同理，在 `uni-app` 中使用 Native.js 时，一些 Native.js 中对于原生事件的监听同样需要按照上面的方法去实现。
Similarly, when using Native.js in `uni-app`, some native event monitoring in Native.js also needs to be implemented according to the above method.
