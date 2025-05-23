# API

## Uni 测试框架 API

### program

program 是uni-automator自动注入的全局对象


#### 方法

##### program.pageStack

获取页面堆栈。

`program.pageStack(): Promise<Page[]> `


##### program.navigateTo

保留当前页面，跳转到应用内的某个页面，同 `uni.navigateTo`。

`program.navigateTo(url: string): Promise<Page>`


|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|url|string|是|-|需要跳转的应用内非 tabBar 的页面的路径|

示例代码：

```js
  const page = await program.navigateTo('/pages/index/index')
  console.log(page.path)// -> 'page/index/index'
```



##### program.redirectTo

关闭当前页面，跳转到应用内的某个页面，同 `uni.redirectTo`。

`program.redirectTo(url: string): Promise<Page>`

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|url|string|是|-|需要跳转的应用内非 tabBar 的页面的路径|


##### program.navigateBack

关闭当前页面，返回上一页面或多级页面，同 `uni.navigateBack`。


`program.navigateBack(): Promise<Page>`



##### program.reLaunch

关闭所有页面，打开到应用内的某个页面，同 `uni.reLaunch`。

`program.reLaunch(url: string): Promise<Page>`


|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|url|string|是|-|需要跳转的应用内页面路径|


##### program.switchTab

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，同 `uni.switchTab`。


`program.switchTab(url: string): Promise<Page>`


|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|url|string|是|-|需要跳转的 tabBar 页面的路径|


##### program.currentPage

获取当前页面。

`program.currentPage(): Promise<Page>`


##### program.systemInfo

获取系统信息，同 `uni.getSystemInfo`。


`program.systemInfo(): Promise<Object>`


示例代码：

```js
	const systemInfo = await program.systemInfo()
	if (systemInfo.uniPlatform === 'devtools') {
		// Do something
	}
```



##### program.pageScrollTo

将页面滚动到目标位置，同 `uni.pageScrollTo`。


`program.pageScrollTo(scrollTop: number): Promise<void>`


|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|scrollTop|number|是|-|滚动到页面的目标位置，单位 px|

示例代码：

```js
   const page = await program.currentPage()
   await program.pageScrollTo(20)
   console.log(await page.scrollTop())
```




##### program.callUniMethod

调用 uni 对象上的指定方法。


`program.callUniMethod(method: string, ...args: any[]): Promise<any>`


|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要调用的方法名|
|...args|`array<any>`|否|-|方法参数|

调用异步方法时无需传入 success 及 fail 回调函数。

示例代码：

```js
	await program.callUniMethod('setStorage', {
	  key: 'test',
	  data: '123456'
	})
	const data = await program.callUniMethod('getStorageSync', 'test')
	console.log(data) // -> '123456'
```



##### program.screenshot

对当前页面截图。\
微信小程序只有开发者工具模拟器支持，客户端无法使用。

`program.screenshot(options?: Object): Promise<string | void>`


|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|options|Object|否|-|截图选项|

如果不传 options，该方法返回图片数据的 base64 编码。

options 字段定义如下：

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|path|string|是|-|图片保存路径|


```js
	it('screenshot', async () => {
		await program.screenshot({
			path: "static/screenshot.png" // 默认项目根目录
		})
	});
```



##### program.mockUniMethod

覆盖 uni 对象上指定方法的调用结果。

利用该接口，你可以很方便地直接指定 `uni.chooseLocation` 等调用系统组件的返回结果。


`program.mockUniMethod(method: string, result: any): Promise<void> `


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要覆盖的方法名|
|result|any|是|-|指定调用结果|


`program.mockUniMethod(method: string, fn: Function | string, ...args: any[]): Promise<void>`

参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要覆盖的方法名|
|fn|Function string|是|-|处理返回函数|
|...args|`array<any>`|否|-|传入参数|


> fn 同 program.evaluate 的 appFunction 参数一样，无法使用闭包来引用外部变量。此外，你还可以在方法内使用 this.origin 来调用原始方法。


示例代码：

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

  // 更改 getSystemInfo 中的 platform 字段
	await program.mockUniMethod(
		'getSystemInfo',
		function(obj, platform) {
			return new Promise(resolve => {
				// origin 指向原始方法
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


##### program.restoreUniMethod

重置 uni 指定方法，消除 mockUniMethod 调用的影响。

`program.restoreUniMethod(method: string): Promise<void>`


|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要覆盖的方法名|


示例代码:

```js
	console.log(await program.callUniMethod('getStorageSync', 'test')) // -> ''
	await program.mockUniMethod('getStorageSync', 'mockValue')
	console.log(await program.callUniMethod('getStorageSync', 'test')) // -> 'mockValue'
	await program.restoreUniMethod('getStorageSync')
	console.log(await program.callUniMethod('getStorageSync', 'test')) // -> ''
```



##### program.evaluate

注入代码片段并返回执行结果。（仅微信小程序支持）

`program.evaluate(appFunction: Function | string, ...args: any[]): Promise<any>`

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|appFunction|Function string|是|-|代码片段|
|...args|`array<any>`|否|-|执行时传入参数|

> appFunction 最终会被序列化传递到开发者工具，因此你无法在函数中利用闭包来引用外部变量。也就是说，传递 function () {} 函数事实上等同于传递其字符串。

示例代码：

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



##### program.testAccounts

获取多账号调试中已添加的用户列表。（仅微信小程序支持）


`program.testAccounts(): Promise<Account[]>`

Account 字段定义如下：


|字段|类型|说明|
|:-:|:-:|:-:|
|nickName|string|用户昵称|
|openid|string|账号 openid|

示例代码：

```js
	const testAccounts = await program.testAccounts()
	for (let i = 0, len = testAccounts.length; i < len; i++) {
		const miniProgram = await automator.launch({
			projectPath: 'path/to/project',
			account: testAccounts[i].openid
		})
		// 控制多个用户登录的不同小程序
	}
```


##### program.exposeFunction

在全局暴露方法，供小程序侧调用测试脚本中的方法（仅微信小程序支持）


`program.exposeFunction(name: string, bindingFunction: Function): Promise<void>`


|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|name|string|是|-|全局方法名|
|bindingFunction|Function|是|-|脚本方法|

> 你可以利用该方法来监听事件，不支持在小程序侧获取调用结果。


示例代码：

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





### Page

Page 模块提供了控制页面的方法。

#### 属性

##### page.path

页面路径。

`page.path: string`

##### page.query

页面参数。
`page.query: Object`


#### 方法

##### page.$

获取页面元素。

`page.$(selector: string): Promise<Element>`

参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|selector|string|是|-|选择器(id、class、元素选择器)|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(element.tagName) // 'view'
```


##### page.$$

获取页面元素数组。

`page.$$(selector: string): Promise<Element[]>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|selector|string|是|-|选择器(id、class、元素选择器)|

该方法跟 $ 一样均无法选择自定义组件内的元素，请使用 element.$。

示例代码：
```js
  const page = await program.currentPage()
  const elements = await page.$$('.list-text')
  console.log(elements.length)
```

##### page.waitFor

等待直到指定条件成立。

`page.waitFor(condition: string | number | Function): Promise<void>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|condition|string number Function|是|-|等待条件|


如果条件是 `string` 类型，那么该参数会被当成选择器，当该选择器选中元素个数不为零时，结束等待。

如果条件是 `number` 类型，那么该参数会被当成超时时长，当经过指定时间后，结束等待。

如果条件是 `Function` 类型，那么该参数会被当成断言函数，当该函数返回真值时，结束等待。


示例代码：
```js
  const page = await program.currentPage()
  await page.waitFor(5000) // 等待 5 秒
  await page.waitFor('picker') // 等待页面中出现 picker 元素
  await page.waitFor(async () => {
    return (await page.$$('picker')).length > 5
  }) // 等待页面中 picker 元素数量大于 5
```

##### page.data

获取页面渲染数据, 即`选项式 API data` 中返回的数据和`组合式 API defineExpose` 暴露的数据。\
**注意：** `uni-app x` Android 端暂不支持获取 `defineExpose` 暴露的 `ref` 数据。

`page.data(path?: string): Promise<Object>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|path|string|否|-|数据路径|

示例代码：
```js
  const page = await program.currentPage()
  console.log(await page.data('list'))
```


##### page.setData

设置页面渲染数据。

`page.setData(data: Object): Promise<void>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|data|Object|是|-|要改变的数据|

示例代码：
```js
  const page = await program.currentPage()
  await page.setData({
    text: 'changed data'
  })
```


##### page.size

获取页面大小。

`page.size(): Promise<Object>`


返回值说明

|字段|类型|说明|
|:-:|:-:|:-:|
|width|number|页面可滚动宽度|
|height|number|页面可滚动高度|


示例代码：
```js
  const page = await program.currentPage()
  const { width, height } = await page.size()
  console.log(width, height)
```


#### page.scrollTop

获取页面滚动位置。

`page.scrollTop(): Promise<number>`


示例代码：
```js
  const page = await program.currentPage()
  await program.pageScrollTo(20)
  console.log(await page.scrollTop())
```


##### page.callMethod

调用页面指定方法。

`page.callMethod(method: string, ...args: any[]): Promise<any>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要调用的方法名|
|...args|array|否|-|方法参数|


示例代码：
```js
  const page = await program.currentPage()
  await page.callMethod('onShareAppMessage')
```



### Element
Element 模块提供了控制页面元素的方法。

#### 属性

##### element.tagName

标签名，小写。

`element.tagName: string`


#### 方法

##### element.$

在元素范围内获取元素。

`element.$(selector: string): Promise<Element>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|selector|string|是|-|选择器(id、class、元素选择器)|

示例代码：
```js
  const page = await program.currentPage()
  let element = await page.$('.index-hd')
  element = await element.$('.index-desc')
  console.log(await element.text())
```


##### element.$$

在元素范围内获取元素数组。

`element.$$(selector: string): Promise<Element[]>`


参数说明

|字段|类型|必填	|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|selector|string|是|-|选择器(id、class、元素选择器)|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('.index-bd')
  const elements = await element.$$('.list-text')
  console.log(await elements[0].text())
```


##### element.size

获取元素大小。

`element.size(): Promise<Object>`


返回值说明

|字段|类型|说明|
|:-:|:-:|:-:|
|width|number|元素宽度|
|height|number|元素高度|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('.index-bd')
  const { width, height } = await element.size()
  console.log(width, height)
```


##### element.offset

获取元素绝对位置。

`element.offset(): Promise<Object>`


返回值说明

|字段|类型|说明|
|:-:|:-:|:-:|
|left|number|左上角x坐标，单位：px|
|top|number|左上角y坐标，单位：px|

坐标信息以页面左上角为原点。


示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('.index-bd')
  const { left, top } = await element.offset()
  console.log(left, top)
```


##### element.text

获取元素文本。

`element.text(): Promise<string>`


示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(await element.text())
```


##### element.attribute

获取元素特性。

`element.attribute(name: string): Promise<string>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|name|string|是|-|特性名|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('.logo')
  console.log(await element.attribute('src')) // -> 'static/logo.png'
```


##### element.property

获取元素属性。

`element.property(name: string): Promise<any>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|name|string|是|-|属性名|

`element.property` 与 `element.attribute` 主要区别如下：

`element.attribute` 获取的是标签上的值，因此它的返回类型一定是字符串，element.property 则不一定。

`element.attribute` 可以获取到 class 和 id 之类的值，element.property 不行。

`element.property` 可以获取到文档里对应组件列举的大部分属性值，比如表单 input 等组件的 value 值。


示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('input')
  console.log(await element.property('value'))
```


##### element.html

获取元素 HTML。

`element.html(): Promise<string>`


##### element.outerHtml

同 html，只是会获取到元素本身。

`element.outerHtml(): Promise<string>`


示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(await element.html())
  console.log(await element.outerHtml())
```


##### element.value

获取元素值。

`element.value(): Promise<string>`


示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('.input')
  console.log(await element.value())
```


##### element.style

获取元素样式值。

`element.style(name: string): Promise<string>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|name|string|是|-|样式名|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(await element.style('color')) // -> 'rgb(128, 128, 128)'
```


##### element.tap

点击元素。

`element.tap(): Promise<void>`


示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('.list-item-hd')
  await element.tap()
```


##### element.longpress

长按元素。

`element.longpress(): Promise<void>`


##### element.touchstart

手指开始触摸元素。

`element.touchstart(options: Object): Promise<void>`


options 字段定义如下：

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|touches|array|是|-|触摸事件，当前停留在屏幕中的触摸点信息的数组|
|changedTouches|array|是|-|触摸事件，当前变化的触摸点信息的数组|


##### element.touchmove

手指触摸元素后移动。

`element.touchmove(options: Object): Promise<void>`

options 字段同 touchstart。


##### element.touchend

手指结束触摸元素。

`element.touchend(options: Object): Promise<void>`

options 字段同 touchstart。


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


##### element.trigger

触发元素事件。

`element.trigger(type: string, detail?: Object): Promise<void>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|type|string|是|-|触发事件类型|
|detail|Object|否|-|触发事件时传递的 detail 值|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('picker')
  await element.trigger('change', { value: 1 })
```
该方法无法改变组件状态，仅触发响应方法，也无法触发用户操作事件，即 `tap`，`longpress` 等事件，请使用对应的其它方法调用。


##### element.input

输入文本，仅 input、textarea 组件可以使用。

`element.input(value: string): Promise<void>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|value|string|是|-|需要输入的文本|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('input')
  await element.input('test')
```


##### element.callMethod

调用组件实例指定方法，仅自定义组件可以使用。

`element.callMethod(method: string, ...args: any[]): Promise<any>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要调用的方法名|
|...args|array|否|-|方法参数|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('set-tab-bar')
  await element.callMethod('navigateBack')
```


##### element.data

获取组件实例渲染数据，即`选项式 API data` 中返回的数据和`组合式 API defineExpose` 暴露的数据，仅自定义组件可以使用。\
**注意：** `uni-app x` Android 端暂不支持获取 `defineExpose` 暴露的 `ref` 数据。

`element.data(path?: string): Promise<Object>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|path|string|否|-|数据路径|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('set-tab-bar')
  console.log(await element.data('hasSetTabBarBadge'))
```


##### element.setData

设置组件实例渲染数据，仅自定义组件可以使用。

`element.setData(data: Object): Promise<void>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|data|Object|是|-|要改变的数据|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('set-tab-bar')
  await page.setData({
    hasSetTabBarBadge: true
  })
```


##### element.callContextMethod

调用上下文 Context 对象方法，仅 video 组件可以使用。

`element.callContextMethod(method: string, ...args: any[]): Promise<any>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要调用的方法名|
|...args|array|否|-|方法参数|

video 组件必须设置了 id 才能使用。

```js
  const page = await program.currentPage()
  const element = await page.$('video')
  await element.callContextMethod('play')
```


##### element.scrollWidth

获取滚动宽度，仅 scroll-view 组件可以使用。

`element.scrollWidth(): Promise<number>`


##### element.scrollHeight

获取滚动高度，仅 scroll-view 组件可以使用。

`element.scrollHeight(): Promise<number>`


##### element.scrollTo

滚动到指定位置，仅 scroll-view 组件可以使用。

`element.scrollTo(x: number, y: number): Promise<void>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|x|number|是|-|横向滚动位置|
|y|number|是|-|纵向滚动位置|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('scroll-view')
  const y = (await element.scrollHeight()) - 50
  await element.scrollTo(0, y)
```


##### element.swipeTo

滑动到指定滑块，仅 swiper 组件可以使用。

`element.swipeTo(index: number): Promise<void>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|index|number|是|-|目标滑块的 index|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('swiper')
  await element.swipeTo(2)
```


##### element.moveTo

移动视图容器，仅 movable-view 组件可以使用。

`element.moveTo(x: number, y: number): Promise<void>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|x|number|是|-|x 轴方向的偏移|
|y|number|是|-|y 轴方向的偏移|

示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('movable-view')
  await element.moveTo(40, 40)
```


##### element.slideTo

滑动到指定数值，仅 slider 组件可以使用。

`element.slideTo(value: number): Promise<void>`


参数说明

|字段|类型|必填|默认值|说明|
|:-:|:-:|:-:|:-:|:-:|
|value|number|是|-|要设置的值|


示例代码：
```js
  const page = await program.currentPage()
  const element = await page.$('slider')
  await element.slideTo(10)
```


### 平台差异

#### program(全局对象)

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

#### Page

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

#### Element
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
|data							|√				|√			|√	|√					|√					|√					|获取组件实例渲染数据，仅自定义组件可以使用|
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


#### 测试平台判断
```js
if (process.env.UNI_PLATFORM === "h5") {}
if (process.env.UNI_PLATFORM === "app-plus") {}
if (process.env.UNI_PLATFORM === "mp-weixin") {}
if (process.env.UNI_PLATFORM === "mp-baidu") {}
```
## Jest API

### 常用的匹配器

最简单测试一个值的方法是使用精确匹配的方法。

```
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```
在上面的代码中，`expect (2 + 2)` 返回了一个"预期"的对象。 你通常不会对这些期望对象调用过多的匹配器。 在此代码中，`.toBe(4)` 是匹配器。 当 Jest 运行时，它会跟踪所有失败的匹配器，以便它可以为你打印出很好的错误消息。

`toBe` 使用 `Object.is` 来进行精准匹配的测试。 如果要检查对象的值，请使用 `toEqual`:

```
test('对象赋值', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```

`toEqual` 递归检查对象或数组的每个字段。

**Notice:**\
`toEqual` 会忽略具有未定义属性、未定义数组项、数组稀疏或对象类型不匹配的对象键。 要考虑这些，请改用 `toStrictEqual`。

您还可以使用与匹配相反的 `not` 来进行测试：

```
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

### 真值

代码中的 `undefined`, `null` 和 `false` 有不同含义，若你在测试时不想区分他们，可以用真值判断。 Jest 提供 `helpers` 供你使用。

- `toBeNull` 只匹配 `null`
- `toBeUndefined` 只匹配 `undefined`
- `toBeDefined` 与 `toBeUndefined` 相反
- `toBeTruthy` 匹配任何 `if` 语句为真
- `toBeFalsy` 匹配任何 `if` 语句为假

例如：
```
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```

### 数字

大多数的比较数字有等价的匹配器。
```
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```
更多 Jest API 参考[文档](https://jestjs.io)