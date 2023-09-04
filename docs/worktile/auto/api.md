
# API

## program

program 是uni-automator自动注入的全局对象
program is the global object automatically injected by uni-automator


### 方法
### method

#### program.pageStack

获取页面堆栈。
Get the page stack.

`program.pageStack(): Promise<Page[]> `


#### program.navigateTo

保留当前页面，跳转到应用内的某个页面，同 `uni.navigateTo`。
Keep the current page and jump to a page in the app, same as `uni.navigateTo`.

`program.navigateTo(url: string): Promise<Page>`


|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|url|string|是|-|需要跳转的应用内非 tabBar 的页面的路径|
|url|string| is |-|The path of the non-tabBar page in the application to be jumped|

示例代码：
Sample code:

```js
  const page = await program.navigateTo('/pages/index/index')
  console.log(page.path)// -> 'page/index/index'
```



#### program.redirectTo

关闭当前页面，跳转到应用内的某个页面，同 `uni.redirectTo`。
Close the current page and jump to a page in the application, same as `uni.redirectTo`.

`program.redirectTo(url: string): Promise<Page>`

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|url|string|是|-|需要跳转的应用内非 tabBar 的页面的路径|
|url|string| is |-|The path of the non-tabBar page in the application to be jumped|


#### program.navigateBack

关闭当前页面，返回上一页面或多级页面，同 `uni.navigateBack`。
Close the current page and return to the previous page or multi-level pages, same as `uni.navigateBack`.


`program.navigateBack(): Promise<Page>`



#### program.reLaunch

关闭所有页面，打开到应用内的某个页面，同 `uni.reLaunch`。
Close all pages, open to a page within the app, same as `uni.reLaunch`.

`program.reLaunch(url: string): Promise<Page>`


|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|url|string|是|-|需要跳转的应用内页面路径|
|url|string|is |-|the in-app page path to jump to|


#### program.switchTab

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，同 `uni.switchTab`。
Jump to the tabBar page and close all other non-tabBar pages, same as `uni.switchTab`.


`program.switchTab(url: string): Promise<Page>`


|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|url|string|是|-|需要跳转的 tabBar 页面的路径|
|url|string|is |-|path of the tabBar page to jump to|


#### program.currentPage

获取当前页面。
Get the current page.

`program.currentPage(): Promise<Page>`


#### program.systemInfo

获取系统信息，同 `uni.getSystemInfo`。
Get system information, same as `uni.getSystemInfo`.


`program.systemInfo(): Promise<Object>`


示例代码：
Sample code:

```js
	const systemInfo = await program.systemInfo()
	if (systemInfo.uniPlatform === 'devtools') {
		// Do something
	}
```



#### program.pageScrollTo

将页面滚动到目标位置，同 `uni.pageScrollTo`。
Scroll the page to the target position, same as `uni.pageScrollTo`.


`program.pageScrollTo(scrollTop: number): Promise<void>`


|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|scrollTop|number|是|-|滚动到页面的目标位置，单位 px|
|scrollTop|number| is |-| scroll to the target position of the page, in px|

示例代码：
Sample code:

```js
   const page = await program.currentPage()
   await program.pageScrollTo(20)
   console.log(await page.scrollTop())
```




#### program.callUniMethod

调用 uni 对象上的指定方法。
Call the specified method on the uni object.


`program.callUniMethod(method: string, ...args: any[]): Promise<any>`


|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要调用的方法名|
| method| string| Yes| \-| Name of the method to be called|
|...args|`array<any>`|否|-|方法参数|
|...args|`array<any>`|no|-|method arguments|

调用异步方法时无需传入 success 及 fail 回调函数。
There is no need to pass in the success and fail callback functions when calling an asynchronous method.

示例代码：
Sample code:

```js
	await program.callUniMethod('setStorage', {
	  key: 'test',
	  data: '123456'
	})
	const data = await program.callUniMethod('getStorageSync', 'test')
	console.log(data) // -> '123456'
```



#### program.screenshot

对当前页面截图，目前只有开发者工具模拟器支持，客户端无法使用。
The screenshot of the current page is currently only supported by the developer tool simulator, and the client cannot use it.

`program.screenshot(options?: Object): Promise<string | void>`


|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|options|Object|否|-|截图选项|
|options|Object|No|-|Screenshot Options|

如果不传 options，该方法返回图片数据的 base64 编码。
If options are not passed, this method returns the base64 encoding of the image data.

options 字段定义如下：
The field of options is defined as follows:

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|path|string|是|-|图片保存路径|
|path|string|Yes|-|image save path|


```js
	it('screenshot', async () => {
		await program.screenshot({
			path: "static/screenshot.png" // 默认项目根目录
		})
	});
```



#### program.mockUniMethod

覆盖 uni 对象上指定方法的调用结果。
Overrides the result of the invocation of the specified method on the uni object.

利用该接口，你可以很方便地直接指定 `uni.chooseLocation` 等调用系统组件的返回结果。
Using this interface, you can easily and directly specify the return result of calling system components such as `uni.chooseLocation`.


`program.mockUniMethod(method: string, result: any): Promise<void> `


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要覆盖的方法名|
|method|string| Yes |-|name of method to override|
|result|any|是|-|指定调用结果|
|result|any|Yes |-|specifies the result of the call|


`program.mockUniMethod(method: string, fn: Function | string, ...args: any[]): Promise<void>`

参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要覆盖的方法名|
|method|string| Yes |-|name of method to override|
|fn|Function string|是|-|处理返回函数|
|fn|Function string| Yes |-|processing return function|
|...args|`array<any>`|否|-|传入参数|
|...args|`array<any>`|No|-|Incoming Arguments|


> fn 同 program.evaluate 的 appFunction 参数一样，无法使用闭包来引用外部变量。此外，你还可以在方法内使用 this.origin 来调用原始方法。
> fn Like the appFunction parameter of program.evaluate, closures cannot be used to refer to external variables. Also, you can use this.origin inside a method to call the original method.


示例代码：
Sample code:

```js
	await program.mockUniMethod('showModal', {
		confirm: true,
		cancel: false
	})

	await program.mockUniMethod(
		'getStorageSync',
		function(key, defVal) {
			if (key === 'name') return 'redhoodsu'
			if (key === 'sex') return 'male'
			return defVal
		},
		'unknown',
  )
  // 调用 uni.getStorageSync('name') 返回 'redhoodsu'
  // calling uni.getStorageSync('name') returns 'redhoodsu'

  // 更改 getSystemInfo 中的 platform 字段
  // Change the platform field in getSystemInfo
	await program.mockUniMethod(
		'getSystemInfo',
		function(obj, platform) {
			return new Promise(resolve => {
				// origin 指向原始方法
				// origin points to the original method
				this.origin({
					success(res) {
						res.platform = platform
						resolve(res)
					},
				})
			})
		},
		'test',
	)
```


#### program.restoreUniMethod

重置 uni 指定方法，消除 mockUniMethod 调用的影响。
Resets the uni-specified method, removing the effects of the mockUniMethod call.

`program.restoreUniMethod(method: string): Promise<void>`


|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要覆盖的方法名|
|method|string| Yes |-|name of method to override|


示例代码:
Sample code:

```js
	console.log(await program.callUniMethod('getStorageSync', 'test')) // -> ''
	await program.mockUniMethod('getStorageSync', 'mockValue')
	console.log(await program.callUniMethod('getStorageSync', 'test')) // -> 'mockValue'
	await program.restoreUniMethod('getStorageSync')
	console.log(await program.callUniMethod('getStorageSync', 'test')) // -> ''
```



#### program.evaluate

注入代码片段并返回执行结果。（仅微信小程序支持）
Inject code snippets and return execution results. (Only supported by WeChat applet)

`program.evaluate(appFunction: Function | string, ...args: any[]): Promise<any>`

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|appFunction|Function string|是|-|代码片段|
|appFunction|Function string|Yes|-|code snippet|
|...args|`array<any>`|否|-|执行时传入参数|
|...args|`array<any>`|No|-|Parameters passed during execution|

> appFunction 最终会被序列化传递到开发者工具，因此你无法在函数中利用闭包来引用外部变量。也就是说，传递 function () {} 函数事实上等同于传递其字符串。
> appFunction will eventually be serialized to the developer tools, so you can't use closures in functions to reference external variables. That is, passing a function () {} function is effectively equivalent to passing its string.

示例代码：
Sample code:

```js
	let systemInfo = await program.evaluate(() => {
		return new Promise(resolve => {
			uni.getSystemInfo({
				success(result) {
					resolve(result)
				}
			})
		})
	})
	systemInfo = await program.evaluate(() => {
		return uni.getSystemInfoSync()
	})
	console.log(systemInfo)
	await program.evaluate(key => {
		uni.setStorageSync(key, 'test')
	}, 'test')
	const hasLogin = await program.evaluate(() => getApp().globalData.hasLogin)
	console.log(hasLogin)
```



#### program.testAccounts

获取多账号调试中已添加的用户列表。（仅微信小程序支持）
Get the list of users added in multi-account debugging. (Only supported by WeChat applet)


`program.testAccounts(): Promise<Account[]>`

Account 字段定义如下：
The Account field is defined as follows:


|字段|类型|说明|
| Field| Type| Instruction|
|:-:|:-:|:-:|
|nickName|string|用户昵称|
|nickName|string|User Nickname|
|openid|string|账号 openid|
|openid|string|account openid|

示例代码：
Sample code:

```js
	const testAccounts = await program.testAccounts()
	for (let i = 0, len = testAccounts.length; i < len; i++) {
		const miniProgram = await automator.launch({
			projectPath: 'path/to/project',
			account: testAccounts[i].openid
		})
		// 控制多个用户登录的不同小程序
		// Different applets that control multiple user logins
	}
```


#### program.exposeFunction

在全局暴露方法，供小程序侧调用测试脚本中的方法（仅微信小程序支持）
Expose the method globally for the applet side to call the method in the test script (only supported by WeChat applet)


`program.exposeFunction(name: string, bindingFunction: Function): Promise<void>`


|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|name|string|是|-|全局方法名|
|name|string| Yes |-|global method name|
|bindingFunction|Function|是|-|脚本方法|
|bindingFunction|Function|Yes|-|script method|

> 你可以利用该方法来监听事件，不支持在小程序侧获取调用结果。
> You can use this method to monitor events, but it is not supported to obtain the call result on the applet side.


示例代码：
Sample code:

```js
	await program.exposeFunction('onAppShow', options => {
		// Do something... 
	})
	await program.evaluate(function() {
		uni.onAppShow(function(options) {
			onAppShow(options)
		})
	})
```





## Page

Page 模块提供了控制页面的方法。
Page module provides methods to control pages.

### 属性
### Attributes

#### page.path

页面路径。
Page path.

`page.path: string`

#### page.query

页面参数。
`page.query: Object`


### 方法
### method

#### page.$

获取页面元素。
Get the page element.

`page.$(selector: string): Promise<Element>`

参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|selector|string|是|-|选择器|
| selector| string| Yes| \-| Selector|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(element.tagName) // 'view'
```


#### page.$$

获取页面元素数组。
Get an array of page elements.

`page.$$(selector: string): Promise<Element[]>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|selector|string|是|-|选择器|
| selector| string| Yes| \-| Selector|

该方法跟 $ 一样均无法选择自定义组件内的元素，请使用 element.$。
Neither this method nor $ can select elements in custom components. Please use element.$.

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const elements = await page.$$('.list-text')
  console.log(elements.length)
```

#### page.waitFor

等待直到指定条件成立。
Wait until the specified conditions are met.

`page.waitFor(condition: string | number | Function): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|condition|string number Function|是|-|等待条件|
| condition| string number Function| Yes| \-| Waiting condition|


如果条件是 `string` 类型，那么该参数会被当成选择器，当该选择器选中元素个数不为零时，结束等待。
If the condition is of type `string`, then this parameter will be regarded as a selector. When the number of elements selected by this selector is not zero, the waiting will end.

如果条件是 `number` 类型，那么该参数会被当成超时时长，当经过指定时间后，结束等待。
If the condition is of type `number`, then this parameter will be regarded as the timeout period. When the specified time has passed, the waiting will end.

如果条件是 `Function` 类型，那么该参数会被当成断言函数，当该函数返回真值时，结束等待。
If the condition is of type `Function`, then the parameter will be treated as an assertion function. When the function returns a true value, the waiting will end.


示例代码：
Sample code:
```js
  const page = await program.currentPage()
  await page.waitFor(5000) // 等待 5 秒
  await page.waitFor('picker') // 等待页面中出现 picker 元素
  await page.waitFor(async () => {
    return (await page.$$('picker')).length > 5
  }) // 等待页面中 picker 元素数量大于 5
```

#### page.data

获取页面渲染数据。
Get the page rendering data.

`page.data(path?: string): Promise<Object>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|path|string|否|-|数据路径|
| path| string| No| \-| Data path|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  console.log(await page.data('list'))
```


#### page.setData

设置页面渲染数据。
Set the page rendering data.

`page.setData(data: Object): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|data|Object|是|-|要改变的数据|
| data| Object| Yes| \-| Data to be changed|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  await page.setData({
    text: 'changed data'
  })
```


#### page.size

获取页面大小。
Get the page size.

`page.size(): Promise<Object>`


返回值说明
Returned value description

|字段|类型|说明|
| Field| Type| Instruction|
|:-:|:-:|:-:|
|width|number|页面可滚动宽度|
| width| number| Page scrollable width|
|height|number|页面可滚动高度|
| height| number| Page scrollable height|


示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const { width, height } = await page.size()
  console.log(width, height)
```


#### page.scrollTop

获取页面滚动位置。
Get the scroll position of the page.

`page.scrollTop(): Promise<number>`


示例代码：
Sample code:
```js
  const page = await program.currentPage()
  await program.pageScrollTo(20)
  console.log(await page.scrollTop())
```


#### page.callMethod

调用页面指定方法。
Call the page specified method.

`page.callMethod(method: string, ...args: any[]): Promise<any>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要调用的方法名|
| method| string| Yes| \-| Name of the method to be called|
|...args|array|否|-|方法参数|
| ...args| array| No| \-| Method parameter|


示例代码：
Sample code:
```js
  const page = await program.currentPage()
  await page.callMethod('onShareAppMessage')
```



## Element
Element 模块提供了控制页面元素的方法。
The Element module provides methods to control page elements.

### 属性
### Attributes

#### element.tagName

标签名，小写。
Tag name, lowercase.

`element.tagName: string`


### 方法
### method

#### element.$

在元素范围内获取元素。
Get the element within the element range.

`element.$(selector: string): Promise<Element>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|selector|string|是|-|选择器|
| selector| string| Yes| \-| Selector|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  let element = await page.$('.index-hd')
  element = await element.$('.index-desc')
  console.log(await element.text())
```


#### element.$$

在元素范围内获取元素数组。
Get the element array within the element range.

`element.$$(selector: string): Promise<Element[]>`


参数说明
Parameter Description

|字段|类型|必填	|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|selector|string|是|-|选择器|
| selector| string| Yes| \-| Selector|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('.index-bd')
  const elements = await element.$$('.list-text')
  console.log(await elements[0].text())
```


#### element.size

获取元素大小。
Get the element size.

`element.size(): Promise<Object>`


返回值说明
Returned value description

|字段|类型|说明|
| Field| Type| Instruction|
|:-:|:-:|:-:|
|width|number|元素宽度|
| width| number| Element width|
|height|number|元素高度|
| height| number| Element height|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('.index-bd')
  const { width, height } = await element.size()
  console.log(width, height)
```


#### element.offset

获取元素绝对位置。
Get the absolute position of the element.

`element.offset(): Promise<Object>`


返回值说明
Returned value description

|字段|类型|说明|
| Field| Type| Instruction|
|:-:|:-:|:-:|
|left|number|左上角x坐标，单位：px|
| left| number| X coordinate in the upper left corner, in px|
|top|number|左上角y坐标，单位：px|
| top| number| y coordinate in the upper left corner, in px|

坐标信息以页面左上角为原点。
The coordinate information is based on the upper left corner of the page as the origin.


示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('.index-bd')
  const { left top } = await element.offset()
  console.log(left, top)
```


#### element.text

获取元素文本。
Get the element text.

`element.text(): Promise<string>`


示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(await element.text())
```


#### element.attribute

获取元素特性。
Get element properties.

`element.attribute(name: string): Promise<string>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|name|string|是|-|特性名|
| name| string| Yes| \-| Feature name|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('.logo')
  console.log(await element.attribute('src')) // -> 'static/logo.png'
```


#### element.property

获取元素属性。
Get element attributes.

`element.property(name: string): Promise<any>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|name|string|是|-|属性名|
| name| string| Yes| \-| Attribute name|

`element.property` 与 `element.attribute` 主要区别如下：
The main differences between `element.property` and `element.attribute` are as follows:

`element.attribute` 获取的是标签上的值，因此它的返回类型一定是字符串，element.property 则不一定。
`element.attribute` gets the value on the label, so its return type must be a string, but element.property is not necessarily.

`element.attribute` 可以获取到 class 和 id 之类的值，element.property 不行。
`element.attribute` can get values such as class and id, but element.property cannot.

`element.property` 可以获取到文档里对应组件列举的大部分属性值，比如表单 input 等组件的 value 值。
`element.property` can get most of the attribute values listed by the corresponding components in the document, such as the value of components such as form input.


示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('input')
  console.log(await element.property('value'))
```


#### element.html

获取元素 HTML。
Get the element HTML.

`element.html(): Promise<string>`


#### element.outerHtml

同 html，只是会获取到元素本身。
Same as html, except that the element itself will be obtained.

`element.outerHtml(): Promise<string>`


示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(await element.html())
  console.log(await element.outerHtml())
```


#### element.value

获取元素值。
Get the element value.

`element.value(): Promise<string>`


示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('.input')
  console.log(await element.value())
```


#### element.style

获取元素样式值。
Get the element style value.

`element.style(name: string): Promise<string>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|name|string|是|-|样式名|
| name| string| Yes| \-| Style name|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(await element.style('color')) // -> 'rgb(128, 128, 128)'
```


#### element.tap

点击元素。
Click element.

`element.tap(): Promise<void>`


示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('.list-item-hd')
  await element.tap()
```


#### element.longpress

长按元素。
Long press the element.

`element.longpress(): Promise<void>`


#### element.touchstart

手指开始触摸元素。
Start touching the element with your finger.

`element.touchstart(options: Object): Promise<void>`


options 字段定义如下：
The field of options is defined as follows:

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|touches|array|是|-|触摸事件，当前停留在屏幕中的触摸点信息的数组|
| touches| array| Yes| \-| Touch event, an array of information about the touch points that are currently staying on the screen|
|changedTouches|array|是|-|触摸事件，当前变化的触摸点信息的数组|
| changedTouches| array| Yes| \-| Touch events, an array of information about the touch points that are currently changing|


#### element.touchmove

手指触摸元素后移动。
Move after the finger touches the element.

`element.touchmove(options: Object): Promise<void>`

options 字段同 touchstart。
The field of options is the same as touchstart.


#### element.touchend

手指结束触摸元素。
End touching the element with your finger.

`element.touchend(options: Object): Promise<void>`

options 字段同 touchstart。
The field of options is the same as touchstart.


```js
  const page = await program.currentPage()
  const element = await page.$('.touch')
  await element.touchstart({
    touches: [
      {
        identifier: 1,
        pageX: 500,
        pageY: 500
      }
    ],
    changedTouches: [
      {
        identifier: 1,
        pageX: 500,
        pageY: 500
      }
    ]
  })
  await element.touchend({
    touches: [],
    changedTouches: [
      {
        identifier: 1,
        pageX: 500,
        pageY: 500
      }
    ]
  })
```


#### element.trigger

触发元素事件。
Trigger element events.

`element.trigger(type: string, detail?: Object): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|type|string|是|-|触发事件类型|
| type| string| Yes| \-| Trigger event type|
|detail|Object|否|-|触发事件时传递的 detail 值|
| detail| Object| No| \-| The detail value passed when the event is triggered.|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('picker')
  await element.trigger('change', { value: 1 })
```
该方法无法改变组件状态，仅触发响应方法，也无法触发用户操作事件，即 `tap`，`longpress` 等事件，请使用对应的其它方法调用。
This method only triggers the response method, and can neither change the component state nor trigger user action events, namely `tap`, `longpress` and other events. Please call with other corresponding methods.


#### element.input

输入文本，仅 input、textarea 组件可以使用。
Enter the text, only available for the input and textarea components.

`element.input(value: string): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|value|string|是|-|需要输入的文本|
| value| string| Yes| \-| Text to be entered|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('input')
  await element.input('test')
```


#### element.callMethod

调用组件实例指定方法，仅自定义组件可以使用。
Call the specified method of component instance, only available for the custom components.

`element.callMethod(method: string, ...args: any[]): Promise<any>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要调用的方法名|
| method| string| Yes| \-| Name of the method to be called|
|...args|array|否|-|方法参数|
| ...args| array| No| \-| Method parameter|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('set-tab-bar')
  await element.callMethod('navigateBack')
```


#### element.data

获取组件实例渲染数据，仅自定义组件可以使用。
Get rendering data of component instance, only available for the custom components.

`element.data(path?: string): Promise<Object>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|path|string|否|-|数据路径|
| path| string| No| \-| Data path|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('set-tab-bar')
  console.log(await element.data('hasSetTabBarBadge'))
```


#### element.setData

设置组件实例渲染数据，仅自定义组件可以使用。
Set rendering data of component instance, only available for the custom components.

`element.setData(data: Object): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|data|Object|是|-|要改变的数据|
| data| Object| Yes| \-| Data to be changed|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('set-tab-bar')
  await page.setData({
    hasSetTabBarBadge: true
  })
```


#### element.callContextMethod

调用上下文 Context 对象方法，仅 video 组件可以使用。
Call the Context object method, only available for the video component.

`element.callContextMethod(method: string, ...args: any[]): Promise<any>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要调用的方法名|
| method| string| Yes| \-| Name of the method to be called|
|...args|array|否|-|方法参数|
| ...args| array| No| \-| Method parameter|

video 组件必须设置了 id 才能使用。
video component is only available for those having set the id's.

```js
  const page = await program.currentPage()
  const element = await page.$('video')
  await element.callContextMethod('play')
```


#### element.scrollWidth

获取滚动宽度，仅 scroll-view 组件可以使用。
Get the scroll width, only available for the scroll-view component.

`element.scrollWidth(): Promise<number>`


#### element.scrollHeight

获取滚动高度，仅 scroll-view 组件可以使用。
Get the scroll height, only available for the scroll-view component.

`element.scrollHeight(): Promise<number>`


#### element.scrollTo

滚动到指定位置，仅 scroll-view 组件可以使用。
Scroll to the specified location, only available for the scroll-view component.

`element.scrollTo(x: number, y: number): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|x|number|是|-|横向滚动位置|
| x| number| Yes| \-| Horizontal scroll location|
|y|number|是|-|纵向滚动位置|
| y| number| Yes| \-| Vertical scroll location|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('scroll-view')
  const y = (await element.scrollHeight()) - 50
  await element.scrollTo(0, y)
```


#### element.swipeTo

滑动到指定滑块，仅 swiper 组件可以使用。
Slide the slider to the specified position, only available for the swiper component.

`element.swipeTo(index: number): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|index|number|是|-|目标滑块的 index|
| index| number| Yes| \-| index of the target slider|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('swiper')
  await element.swipeTo(2)
```


#### element.moveTo

移动视图容器，仅 movable-view 组件可以使用。
Move the view container, only available for the movable-view component.

`element.moveTo(x: number, y: number): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|x|number|是|-|x 轴方向的偏移|
| x| number| Yes| \-| Offset in the x-axis direction|
|y|number|是|-|y 轴方向的偏移|
| y| number| Yes| \-| Offset in the y-axis direction|

示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('movable-view')
  await element.moveTo(40, 40)
```


#### element.slideTo

滑动到指定数值，仅 slider 组件可以使用。
Slide to the specified value, only available for the slider component.

`element.slideTo(value: number): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|value|number|是|-|要设置的值|
| value| number| Yes| \-| Value to be set|


示例代码：
Sample code:
```js
  const page = await program.currentPage()
  const element = await page.$('slider')
  await element.slideTo(10)
```


## 平台差异
## Platform differences

### program(全局对象)
### program (global object)

|方法							|APP-NVUE	|APP-VUE|H5	|微信小程序	|百度小程序	|uni-app x	|说明																																|
|--								|--				|--			|--	|--					|--					|--					|--																																	|
|pageStack				|√				|√			|√	|√					|√					|√					|获取小程序页面堆栈																									|
|navigateTo				|√				|√			|√	|√					|√					|√					|保留当前页面，跳转到应用内的某个页面，同`uni.navigateTo`						|
|redirectTo				|√				|√			|√	|√					|√					|√					|关闭当前页面，跳转到应用内的某个页面，同`uni.redirectTo`						|
|navigateBack			|√				|√			|√	|√					|√					|√					|关闭当前页面，返回上一页面，同`uni.navigateBack`										|
|reLaunch					|√				|√			|√	|√					|√					|√					|关闭所有页面，打开到应用内的某个页面，同`uni.reLaunch`							|
|switchTab				|√				|√			|√	|√					|√					|√					|跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，同`uni.switchTab`|
|currentPage			|√				|√			|√	|√					|√					|√					|获取当前页面																												|
|systemInfo				|√				|√			|√	|√					|√					|√					|获取系统信息，同`uni.getSystemInfo`																|
|pageScrollTo			|x				|√			|√	|√					|√					|√					|将页面滚动到目标位置，同`uni.pageScrollTo`													|
|callUniMethod		|√				|√			|√	|√					|√					|√					|调用 uni 对象上的指定方法																					|
|screenshot				|√				|√			|√	|√					|x					|√					|对当前页面截图，目前只有开发者工具模拟器支持，客户端无法使用				|
|mockUniMethod		|√				|√			|√	|√					|√					|x					|覆盖 uni 对象上指定方法的调用结果																	|
|restoreUniMethod	|√				|√			|√	|√					|√					|x					|重置 uni 指定方法，消除 mockUniMethod 调用的影响										|
|testAccounts			|x				|x			|x	|√					|x					|x					|获取多账号调试中已添加的用户列表																		|
|evaluate					|x				|x			|x	|√					|x					|x					|注入代码片段并返回执行结果																					|
|exposeFunction		|x				|x			|x	|√					|x					|x					|在全局暴露方法，供小程序侧调用测试脚本中的方法											|

### Page

|属性	|APP-NVUE	|APP-VUE|H5	|微信小程序	|百度小程序	|uni-app x	|说明			|
|--		|--				|--			|--	|--					|--					|--					|--				|
|path	|√				|√			|√	|√					|√					|√					|页面路径	|
|query|√				|√			|√	|√					|√					|√					|页面参数	|

|方法				|APP-NVUE	|APP-VUE|H5	|微信小程序	|百度小程序	|uni-app x	|说明												|
|--					|--				|--			|--	|--					|--					|--					|--													|
|$					|√				|√			|√	|√					|√					|√					|获取页面元素								|
|$$					|√				|√			|√	|√					|√					|√					|获取页面元素数组						|
|waitFor		|√				|√			|√	|√					|√					|√					|等待直到指定条件成立				|
|data				|√				|√			|√	|√					|√					|√					|获取页面渲染数据						|
|setData		|√				|√			|√	|√					|√					|√					|设置页面渲染数据						|
|size				|√				|√			|√	|√					|√					|√					|获取页面大小(width,height)	|
|scrollTop	|√				|√			|√	|√					|√					|√					|获取页面滚动位置						|
|callMethod	|√				|√			|√	|√					|√					|√					|调用页面指定方法，uni-app x args 仅支持一个参数	|

### Element
|属性		|APP-NVUE	|APP-VUE|H5	|微信小程序	|百度小程序	|uni-app x	|说明					|
|--			|--				|--			|--	|--					|--					|--					|--						|
|tagName|√				|√			|√	|√					|√					|√					|标签名，小写	|

|方法							|APP-NVUE	|APP-VUE|H5	|微信小程序	|百度小程序	|uni-app x	|说明																								|
|--								|--				|--			|--	|--					|--					|--					|--																									|
|$								|√				|√			|√	|√					|√					|√					|在元素范围内获取元素																|
|$$								|√				|√			|√	|√					|√					|√					|在元素范围内获取元素数组														|
|size							|√				|√			|√	|√					|√					|√					|获取元素大小(width,height)													|
|offset						|√				|√			|√	|√					|√					|√					|获取元素绝对位置(left,top)													|
|text							|√				|√			|√	|√					|√					|√					|获取元素文本																				|
|attribute				|√				|√			|√	|√					|√					|√					|获取元素特性																				|
|style						|√				|√			|√	|√					|√					|√					|获取元素样式值																			|
|tap							|√				|√			|√	|√					|√					|√					|点击元素																						|
|value						|√				|√			|√	|√					|√					|√					|获取元素值																					|
|callMethod				|√				|√			|√	|√					|√					|√					|调用组件实例指定方法，仅自定义组件可以使用，uni-app x args 仅支持一个参数|
|html							|√				|√			|√	|√					|√					|x					|获取元素 HTML																			|
|outerHtml				|√				|√			|√	|√					|√					|x					|同 html，只是会获取到元素本身											|
|data							|√				|√			|√	|√					|√					|√					|获取组件实例渲染数据，仅自定义组件可以使用，uni-app x 暂不支持 path|
|setData					|√				|√			|√	|√					|√					|√					|设置组件实例渲染数据，仅自定义组件可以使用					|
|property					|√				|√			|√	|√					|x					|√					|获取元素属性																				|
|touchstart				|√				|√			|√	|√					|x					|√					|手指开始触摸元素																		|
|touchmove				|√				|√			|√	|√					|x					|√					|手指触摸元素后移动																	|
|touchend					|√				|√			|√	|√					|x					|√					|手指结束触摸元素																		|
|longpress				|√				|√			|√	|√					|x					|√					|长按																				|
|trigger					|√				|√			|√	|√					|x					|x					|触发元素事件																				|
|input						|√				|√			|√	|√					|x					|√					|输入文本，仅 input、textarea 组件可以使用					|
|callContextMethod|x				|x			|x	|√					|x					|x					|调用上下文 Context 对象方法，仅 video 组件可以使用	|
|scrollWidth			|x				|√			|√	|√					|x					|√					|获取滚动宽度，仅 scroll-view 组件可以使用					|
|scrollHeight			|x				|√			|√	|√					|x					|√					|获取滚动高度，仅 scroll-view 组件可以使用					|
|scrollTo					|x				|√			|√	|√					|x					|√					|滚动到指定位置，仅 scroll-view 组件可以使用				|
|swipeTo					|√				|√			|√	|√					|x					|x					|滑动到指定滑块，仅 swiper 组件可以使用							|
|moveTo						|√				|√			|√	|√					|x					|x					|移动视图容器，仅 movable-view 组件可以使用					|
|slideTo					|√				|√			|√	|√					|x					|x					|滑动到指定数值，仅 slider 组件可以使用							|


### 测试平台判断
### Test platform judgment
```js
if (process.env.UNI_PLATFORM === "h5") {}
if (process.env.UNI_PLATFORM === "app-plus") {}
if (process.env.UNI_PLATFORM === "mp-weixin") {}
if (process.env.UNI_PLATFORM === "mp-baidu") {}
```
