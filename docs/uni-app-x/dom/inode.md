## INode

| 属性										| 说明										|
|--------------------------------------		|--------------------------					|
| [style](#style)							| 组件样式列表对象，参考[CSSStyleDeclaration](cssstyle.md)|


| 方法										| 说明										|
|--------------------------------------		|--------------------------					|
| [setAttribute](#setAttribute)				| 设置组件的某个属性值							|
| [getAttribute](#getAttribute)				| 获取组件指定的属性值							|
| [getDrawableContext](#getAttribute)		| 获取组件的绘制对象							|


### style@style  

组件的CSS样式列表对象，只读属性。可以通过其 setProperty 方法更新组件的样式。  

```ts
node.style;
```


### setAttribute(name, value)@setAttribute

设置指定组件上的某个属性值。如果设置的属性已经存在，则更新该属性值；否则使用指定的名称和值添加一个新的属性。

```ts
INode.setAttribute(name:string, value:any|null):void
```

**参数说明**

| 参数	| 类型		| 说明		|
|-------|--------	|------		|
| name	| string	| 属性名称	|
| value	| any		| 属性的值	|

**返回值**

无


### getAttribute(attributeName)@getAttribute

获取元素指定的属性值，如果指定的属性不存在则返回null。

```ts
INode.getAttribute(attributeName:string):any?
```

**参数说明**

| 参数			| 类型		| 说明		|
|---------------|--------	|------		|
| attributeName	| string	| 属性名称	|

**返回值**

| 类型	| 说明				|
|------	|----------			|
| Any?	| 属性值，可为null	|


### getDrawableContext()@getDrawableContext

获取组件的绘制对象，仅uvue页面中的 `view` 组件支持，其它组件不支持则返回null。

```ts
INode.getDrawableContext():DrawableContext|null
```

**返回值**

| 类型	| 说明				|
|------	|----------			|
| [DrawableContext](drawablecontext.md)	| 绘制对象，可能为null	|

