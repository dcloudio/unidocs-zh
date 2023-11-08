
```Weex``` 提供了通过事件触发动作的能力，例如在用户点击组件时执行 ```JavaScript```。
```Weex``` provides the ability to trigger actions through events, such as executing ```JavaScript``` when the user clicks on a component.
下面列出了可被添加到 ```Weex``` 组件上以定义事件动作的属性：
Below are the common event attributes that can be added to weex components to define event actions.

### 事件穿透
### Event penetration

> Android和iOS下原生事件传递机制不同，这里仅针对iOS
> The principle of native event delivery under Android and iOS is different, only for iOS here.

当一个父View存在多个同级子View时，由于iOS会选择层级最高的View来响应事件，底层的View的事件永远都不会响应。
When a parent view has multiple peer views, iOS will select the highest level View to respond to the event, and the underlying view event will never be responded.

Weex在```view```组件中增加了```eventPenetrationEnabled```属性，当值为true（默认为false）时，View的子View仍能正常响应事件，但View自身将不会响应事件。
Weex add attribute `eventPenetrationEnabled` to `<div>` component. When the value is `true`(default would be `false`), the view's children views still respond to the event normally, while the view itself will not respond to the event, but pass the event to the lower level View.


### View交互性
### View interactivity

> 仅iOS支持
> iOS only

Weex在```view```组件中增加了```userInteractionEnabled```属性，当值为false（默认为true）时，View及其子View均不响应事件，事件向下层View传递。
Weex add attribute `userInteractionEnabled` to `<div>` component. When the value is `false`(default would be `true`), neither the view nor its children views respond to the event. The event is passed to the lower layer View.

**longpress**

如果一个组件被绑定了 longpress 事件，那么当用户长按这个组件时，该事件将会被触发。
If a `longpress` event is bound to a component, the event will be triggered when user long press on it.

**事件对象**
**event object**


|key			|value		|备注																|
| key| value| Remark|
|--				|--				|--																	|
|type			|longpress|																		|
|target		|					|触发长按事件的目标组件							|
| target| | The target component where the event is triggered|
|timestamp|					|长按事件触发时的时间戳(不支持 H5)	|
| timestamp| | Timestamp when event is triggered|


**Appear**

如果一个位于某个可滚动区域内的组件被绑定了 appear 事件，那么当这个组件的状态变为在屏幕上可见时，该事件将被触发。
If a appear event is bound to a component inside a scrollable container, the event will be triggered when the component comes to be visible.

**事件对象**
**event object**

|key		|value					|备注							|
| key| value| notes|
|--			|--						|--								|
|type		|appear					|								|
|target		|						|触发 Appear 事件的组件对象		|
| target| | The target component where the event is triggered|
|timestamp	|						|事件被触发时的时间戳(不支持 H5)|
| timestamp| | Timestamp when event is triggered|
|direction	| ```up```或 ```down```	|触发事件时屏幕的滚动方向		|
| direction| `up`or `down`| The direction in which the scroller is scrolling.|


**Disappear**

如果一个位于某个可滚动区域内的组件被绑定了 ```disappear``` 事件，那么当这个组件被滑出屏幕变为不可见状态时，该事件将被触发。
If a `disappear` event is bound to a component inside a scrollable container, the event will be triggered when the component scrolls out of viewport and disappears from your sight.

**事件对象**
**event object**

|key			|value									|备注														|
| key| value| Remark|
|--				|--											|--															|
|type			|disappear							|																|
|target		|												|触发 Disappear 事件的组件对象	|
| target| | The target component where the event is triggered|
|timestamp|												|事件被触发时的时间戳(不支持 H5)|
| timestamp| | Timestamp when event is triggered|
|direction| ```up```或 ```down```	|触发事件时屏幕的滚动方向				|
| direction| `up`or `down`| The direction in which the scroller is scrolling. Could be `up` or `down`|




