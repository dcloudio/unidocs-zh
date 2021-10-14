
Weex provide the ability to let events trigger action, like starting a JavaScript when a user click on a component. Below are the common event attributes that can be added to weex components to define event actions.

### Event penetration

> The principle of native event delivery under Android and iOS is different, only for iOS here.

When a parent view has multiple peer views, iOS will select the highest level View to respond to the event, and the underlying view event will never be responded.

Weex add attribute `eventPenetrationEnabled` to `<div>` component. When the value is `true`(default would be `false`), the view's children views still respond to the event normally, while the view itself will not respond to the event, but pass the event to the lower level View.


### View interactivity

Weex add attribute `userInteractionEnabled` to `<div>` component. When the value is `false`(default would be `true`), neither the view nor its children views respond to the event. The event is passed to the lower layer View.

**longpress**

If a `longpress` event is bound to a component, the event will be triggered when user long press on it.

**event object**


|key			|value		|备注																|
|--				|--				|--																	|
|type			|longpress|																		|
|target		|					|The target component where the event is triggered							|
|timestamp|					|Timestamp when event is triggered	|


**Appear**

If a appear event is bound to a component inside a scrollable container, the event will be triggered when the component comes to be visible.

**event object**

|key		|value					|notes							|
|--			|--						|--								|
|type		|appear					|								|
|target		|						|The target component where the event is triggered		|
|timestamp	|						|Timestamp when event is triggered|
|direction	| ```up```or ```down```	|The direction in which the scroller is scrolling.		|


**Disappear**

If a `disappear` event is bound to a component inside a scrollable container, the event will be triggered when the component scrolls out of viewport and disappears from your sight.

**event object**

|key			|value									|备注														|
|--				|--											|--															|
|type			|disappear							|																|
|target		|												|The target component where the event is triggered	|
|timestamp|												|Timestamp when event is triggered|
|direction| ```up```or ```down```	|The direction in which the scroller is scrolling. Could be `up` or `down`				|




