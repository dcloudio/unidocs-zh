## CSSStyleDeclaration  
CSSStyleDeclaration表示一个CSS 声明块对象，它是一个 CSS 属性键值对的集合。它暴露了样式信息和各种与样式相关的方法和属性。


| 方法										| 说明										|
|--------------------------------------		|--------------------------					|
| [setProperty](#setProperty)				| 设置CSS的某个样式值							|
| [getPropertyValue](#getPropertyValue)		| 获取CSS的某个样式值							|


### setProperty(name, value)@setProperty

对CSS指定样式设置一个新值。

```ts
CSSStyleDeclaration.setProperty(name:string, value:any):void
```

**参数说明**

| 参数	| 类型		| 说明		|
|-------|--------	|------		|
| name	| string	| CSS样式名称|
| value	| any		| CSS样式值	|

**返回值**

无


### getPropertyValue(property)@getPropertyValue

获取CSS指定的样式值，如果指定的样式不存在则返回null。

```ts
CSSStyleDeclaration.getPropertyValue(property:string):any?
```

**参数说明**

| 参数			| 类型		| 说明		|
|---------------|--------	|------		|
| property		| string	| CSS样式名称|

**返回值**

| 类型	| 说明				|
|------	|----------			|
| any	| CSS样式值，可能为null	|
