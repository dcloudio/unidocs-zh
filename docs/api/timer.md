## setTimeout(callback, delay, rest)

设定一个定时器。在定时到期以后执行注册的回调函数
Set a timer. Execute the registered callback function after the timer timeout

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|callback|Function|是|回调函数|
| callback| Function| Yes| Callback function|
|delay|Number|否|延迟的时间，函数的调用会在该延迟之后发生，单位 ms|
| delay| Number| No| Delayed time, after which the function call will occur, in ms|
|rest|Any|否|param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数|
| rest| Any| No| param1, param2, ..., paramN and other additional parameters will be passed to the callback function as parameters|


**返回值**
**Return value**

|返回值|类型|说明|
| Return value| Type| Instruction|
|:-|:-|:-|
|timeoutID|Number|定时器的编号，这个值可以传递给 [clearTimeout](/api/timer?id=cleartimeout) 来取消该定时|
| timeoutID| Number| The number of the timer, which can be passed to [clearTimeout](/api/timer?id=cleartimeout) to cancel the timing|

## clearTimeout(timeoutID)

取消由 setTimeout 设置的定时器。
Cancel the timer set by setTimeout.

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|timeoutID|Number|是|要取消的定时器的 ID|
| timeoutID| Number| Yes| ID of the timer to cancel|


## setInterval(callback, delay, rest)
设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数
Set a timer. Executes the registered callback function at the specified period (in ms)

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|callback|Function|是|回调函数|
| callback| Function| Yes| Callback function|
|delay|Number|否|执行回调函数之间的时间间隔，单位 ms|
|delay|Number|No|Time interval between executing the callback function, in ms|
|rest|Any|否|param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数|
| rest| Any| No| param1, param2, ..., paramN and other additional parameters will be passed to the callback function as parameters|


**返回值**
**Return value**

|返回值|类型|说明|
| Return value| Type| Instruction|
|:-|:-|:-|
|intervalID|Number|定时器的编号，这个值可以传递给 [clearInterval](/api/timer?id=clearinterval) 来取消该定时|
| intervalID| Number| The number of the timer, which can be passed to [clearInterval](/api/timer?id=clearinterval) to cancel the timing|

**代码示例**
**CODE EXAMPLE**
```
this.timer = setInterval(() => {
    //TODO 
}, 1000);
```

## clearInterval(intervalID)

取消由 setInterval 设置的定时器。
Cancel the timer set by setInterval.

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|intervalID|Number|是|要取消的定时器的 ID|
| intervalID| Number| Yes| ID of the timer to cancel|

## 注意事项
## Precautions
* App 端返回的定时器编号可能为 String 类型，使用时无需主动转换为 Number 类型
* The timer number returned by the App side may be of String type, so it is not necessary to actively convert to Number type when using it