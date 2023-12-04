## UTS 介绍

**uts 是什么**

uts，全称 uni type script，是一门跨平台的、高性能的、强类型的现代编程语言。

它可以被编译为不同平台的编程语言，如：
- web平台，编译为JavaScript
- Android平台，编译为Kotlin
- iOS平台，编译Swift

uts 采用了与 ts 基本一致的语法规范，支持绝大部分 ES6 API。

但为了跨端，uts进行了一些约束和特定平台的增补。

过去在js引擎下运行支持的语法，大部分在uts的处理下也可以平滑的在kotlin和swift中使用。但有一些无法抹平，需要使用条件编译。和uni-app的条件编译类似，uts也支持条件编译。写在条件编译里的，可以调用平台特有的扩展语法。

### 用途和关系

uts是一门语言。也仅是一门语言，不包含ui框架。

uvue是DCloud提供的跨平台的、基于vue语法的ui框架。

uts相当于js，uvue相当于html和css。它们类似于v8和webkit的关系、类似于dart和flutter的关系。

uts这门语言，有2个用途：

1. 开发uni-app 和 uni-app x 的原生扩展插件：因为uts可以调用所有原生能力。
2. uts和uvue一起组合，开发原生级的项目，也就是 uni-app x 项目

从HBuilderX 3.9起，支持uni-app x项目。

uni-app x 开发App时，输出的是纯原生的App（Android上就是kotlin的app），里面没有js引擎和webview。详见[uni-app x](../uni-app-x/)

也就是说，uts可以在uni-app中使用，也可以在uni-app x中使用。

- 在uni-app中，主编程语言是js。uts可以开发原生插件，包括API插件和组件插件。
- 在uni-app x中，主编程语言是uts。不管是应用逻辑还是扩展插件，均使用uts编程，没有js。

如果插件作者，开发了uts插件，也可以同时在uni-app和uni-app x中使用。比如这2个uts插件：
- 电量：[https://ext.dcloud.net.cn/plugin?id=9295](https://ext.dcloud.net.cn/plugin?id=9295)
- lottie组件：[https://ext.dcloud.net.cn/plugin?id=10674](https://ext.dcloud.net.cn/plugin?id=10674)

这2个uts插件，一个是api插件，一个是组件插件，它们同时兼容uni-app和uni-app x。

本文是 uts 的基本语法介绍。
- 想了解 uni-app 下如何开发 uts插件，另见文档[https://uniapp.dcloud.net.cn/plugin/uts-plugin.html](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
- 想了解 uni-app x，另见文档[https://uniapp.dcloud.net.cn/uni-app-x/](https://uniapp.dcloud.net.cn/uni-app-x/)


## 类型声明

js是无类型的，TypeScript 的 type 就是类型的意思，给js加上了类型。它的类型定义方式是在变量名后面通过加冒号和类型来进行定义。

uts 中声明变量可以用 let 或 const，详见下。

### 变量定义（let）

声明一个可重新赋值的变量。语法 `let [变量名] : [类型] = 值;`。

> 相当于 TypeScript 中的 let、kotlin 中的 var、swift 中的 var。

```ts
let str :string = "hello"; // 声明一个字符串变量
str = "hello world"; // 重新赋值
```

类型除了 string 之外，更多类型见[数据类型](data-type.md)

### 常量定义（const）

声明一个只读常量，只能为其赋值一次。语法 `const [变量名] : [类型] = 值;`。

> 相当于 TypeScript 中的 const、kotlin 中的 val、swift 中的 let。

```ts
const str :string = "hello"; // 声明一个字符串常量
str = "hello world"; // 报错，不允许重新赋值
```

注意事项：

- 当前 uts 并未限制使用 `var` 来声明变量，但除非你知道你在做什么，否则不要轻易使用它，因为有不同平台差异：
	* 编译至 JavaScript 平台时，等同于 JavaScript 平台的 var 。存在变量提升现象，具体参考 [var和let的区别](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#%E5%A3%B0%E6%98%8E)
	* 编译至 Kotlin 平台时，等同于 Kotlin 平台的 var（允许重新赋值）
- swift 中 let 是定义常量，而 uts 和 ts 中，let 是定义变量。注意勿混淆。
- 类型定义的冒号，左右可以有一个空格，也可以没有空格。`let str:string` 和 `let str : string` 和 `let str :string` 和 `let str: string` 都是合法的。

### 变量命名规则

在 uts 中，使用变量名需要遵守一定的规则。

-   变量名称可以包含数字和字母。
-   除了下划线 \_ 外，不能包含其他特殊字符，包括空格。
-   变量名不能以数字开头。

> 注意：与 TypeScript 不同的是，uts 不允许以 $ 开头命名变量

### 方法参数及返回值类型定义

方法的参数、返回值，也通过冒号定义。

如下示例，方法test，有一个参数score，是number类型，方法返回值类型为boolean类型。

```ts
function test(score: number): boolean {
	return (score>=60) 
}
test(61) // 返回true
```

方法无返回值时，使用`:void`。

```ts
function add(x :string, y :string) :void {
    let z :string = x + " " + y
	console.log(z)
	// 不需要return
}
```

函数另有详细文档，详见：[函数](function.md)

### vue data类型定义

vue 选项式开发时，冒号被用于赋值，无法通过let、const和冒号来定义data数据的类型。

此时可以使用[字面量](literal.md)赋值自动推导；也可以使用 `as` 关键字来显式声明类型。

```html
<script lang="uts">
	export default {
		data() {
			const date = new Date()
			return {
				s1 : "abc", // 根据字面量推导为string
				n1 : 0 as number, // 这里其实可以根据字面量自动推导，as number写不写都行
				n2, // 不合法，必须指定类型
				n3 as number, // 不合法，uts不支持undefined，必须通过冒号初始化赋值，哪怕赋值为null，见下
				n4 : null as number | null // 合法。定义为可为null的数字，初始值是null，但在使用n4前必须为其赋值数字。（number | null）是一个或的写法，前后顺序没有关系。uts的联合类型只支持 |null 。
				year: date.getFullYear() as number, // 在data里，目前无法通过变量类型推导data项的类型，需使用 as 显式声明类型为number
			}
		}
	}
</script>
```

上述示例仅在 uni-app x 的uvue页面生效。uni-app js引擎版，不支持在页面里写uts代码，只支持在uts插件里写uts代码。

### 类型自动推导

现代语言（ts、kotlin、swift），都具备自动识别[字面量](literal.md)，进行类型推导的功能。

即：如果开发者声明变量的同时，进行了初始化赋值。那么编译器可以根据赋值的[字面量](literal.md)，自动推导出变量类型，不必开发者显式声明。

在定义变量时如果直接赋值[字面量](literal.md)，而不使用冒号声明类型，也可以合法运行。

如下2种写法都是合法的，两个变量都是string类型：

```ts
// 以下每组写法是等价的
let s1 = "hello" // 根据字面量 "hello"，自动推导为string类型
let s2 : string = "hello"
let s3 : string
s3 = "hello"

let b1 = true // 根据字面量 true，自动推导为boolean类型
let b2 : boolean = true

// 以上为字符串和布尔的字面量类型自动推导，数字和数组也支持字面量类型推导，但规则比较复杂，需另见文档

```

在HBuilderX 3.9以前， uts 未对字面量赋值类型推导做统一处理，编译到 kotlin 和 swift 时，由这2个语言自行做类型推导。

但 kotlin 和 swift 的自动推导，在某些地方有细节差异。尤其是[数字字面量](data-type.md#autotypefornumber)和[数组字面量](data-type.md#autotypeforarray)。在这2个场景下，建议显式声明类型，不使用自动推导。

```ts
// 显式声明数字和数组类型
let n1:number = 1
let n2 = 1 as number
let n3:Int = 1
let a1:Array<string> = ["uni-app", "uniCloud", "HBuilder"]
let a1:Array<number> = [1,2,3,4]
```

HBuilderX 3.9+， uts 统一了字面量自动类型推导。

建议插件作者，除了boolean和string外，其他包括数字和数组在内的类型，尽量不使用字面量自动类型推导，而是显式声明类型。避免 uts 统一自动类型推导时引发的向下兼容问题。

### 类型判断

判断类型，有好几种方案：[typeof](operator.md#typeof)、[instanceof](operator.md#instanceof)、[isArray](buildin-object-api/array.md#isarray)。

使用 typeof 可以判断布尔值、数字、字符串、函数。
```ts
typeof(true) == "boolean"
typeof("abc") == "string"

let n1 : number = 1
typeof(n1) == "number"
```

但如果使用 typeof 验证数组，会发现返回的类型值是"object"，这与浏览器是相同的逻辑。

如果想验证数组类型，需要使用如下方法：
```ts
const a1 = ["uni-app", "uniCloud", "HBuilder"]
console.log(Array.isArray(a1)) // 返回true
console.log(a1 instanceof Array) // 返回true
```

instanceof，除了验证数组，还可以验证类型，但注意它返回的不是具体类型，还是根据入参的一个boolean值。

```ts
let myDate = new Date();
console.log(myDate instanceof Date) // 返回true

uni.request({
	url: 'https://abc',
	success: (data) => {
		if (data.statusCode == 200) {
			const result = data.data as UTSJSONObject
			console.log(result instanceof UTSJSONObject) //返回true
		}
	},
	fail: () => {
		console.log('fail');
	}
});
```

详见：[typeof](operator.md#typeof)、[instanceof](operator.md#instanceof)

### 安全调用

js没有类型检查。而uts和ts都有严格的类型检查。

对于可为null的类型，调用时需要加问号，否则编译器会报错。

```ts
const s: string | null = null // s为一个可为null的字符串
console.log(s?.length) //除非前面已经给s赋值，否则调用s的方法和属性必须加?
```

安全调用有很多细节，详见[null类型](data-type.md#null类型)

### 代码语句的分割

uts的多个代码语句，以回车或分号分割。

多行时行尾的分号可以省略。如果写在一行，应以分号分割。

如下的代码都是合法的：

```ts
let a:number = 1 //行尾可以不加分号
let b:boolean = false; //行尾可以加分号
let c:number = 3 ; let d:number = 4 // 同行多语句需要用分号分割
```

