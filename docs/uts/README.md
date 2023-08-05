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

### 现状说明 

uts是一门语言。目前DCloud还未发布基于uts的ui开发框架。所以现阶段使用uts开发ui是不方便的（就像没有组件和css，拿js开发界面，还不能跨端）。

现阶段uts适合的场景是开发uni-app的原生插件。因为uts可以直接调用Android和iOS的原生API或jar等库。

很快DCloud会推出基于uts的跨平台响应式ui框架`uvue`，届时开发者可使用vue语法、uni-app的组件和api，来开发纯原生应用，因为它们都被编译为kotlin和swift，不再有js和webview。未来大概的写法参考[hello uni-app x](https://gitcode.net/dcloud/hello-uni-app-x) （此项目还未正式发布，公开版的HBuilderX不能编译此项目，仅供参考写法）

本文是 uts 的基本语法介绍。如想了解 uni-app 下如何开发 uts插件，另见文档[https://uniapp.dcloud.net.cn/plugin/uts-plugin.html](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)。


## 基本语法
### 声明

js是无类型的，TypeScript 的 type 就是类型的意思，给js加上了类型。它的类型定义方式是在变量名后面通过加冒号和类型来进行定义。

uts 中声明变量可以用 let 或 const，详见下。

#### 变量定义（let）

声明一个可重新赋值的变量。语法 `let [变量名] : [类型] = 值;`。

> 相当于 TypeScript 中的 let、kotlin 中的 var、swift 中的 var。

```ts
let str :string = "hello"; // 声明一个字符串变量
str = "hello world"; // 重新赋值
```

类型除了 string 之外，更多类型[见下](#基本类型)

#### 常量定义（const）

声明一个只读常量，只能为其赋值一次。语法 `const [变量名] : [类型] = 值;`。

> 相当于 TypeScript 中的 const、kotlin 中的 val、swift 中的 let。

```ts
const str :string = "hello"; // 声明一个字符串变量
str = "hello world"; // 报错，不允许重新赋值
```

注意事项：

- 当前 uts 并未限制使用 var 来声明变量，但除非你知道你在做什么，否则不要轻易使用它，因为有不同平台差异：
	* 编译至 JavaScript 平台时，等同于 JavaScript 平台的 var （存在变量提升现象）
	* 编译至 Kotlin 平台时，等同于 Kotlin 平台的 var（允许重新赋值）
- swift 中 let 是定义常量，而 uts 和 ts 中，let 是定义变量。注意勿混淆。
- 类型定义的冒号，左右可以有一个空格，也可以没有空格。`let str:string` 和 `let str : string` 和 `let str :string` 和 `let str: string` 都是合法的。
- 不支持 TypeScript 中的联合类型

#### 变量命名规则

在 uts 中，使用变量名需要遵守一定的规则。

-   变量名称可以包含数字和字母。
-   除了下划线 \_ 外，不能包含其他特殊字符，包括空格。
-   变量名不能以数字开头。

> 注意：与 TypeScript 不同的是，uts 不允许以 $ 开头命名变量

#### 类型自动推导

对于传统编译型语言来说（java,C等），声明一个变量的同时，开发者必须声明这个变量的类型，以便于申请内存空间。
```java
// 一个名为a的 Int类型数据变量
Int a = 12
```

现代语言（ts、kotlin、swift）中，都具备类型自动推导的功能。

即：如果开发者声明变量的同时，进行了初始化赋值。那么编译器可以根据赋值的字面量，自动推导出变量类型，不必开发者显示声明。即降低了出错的可能，也降低了开发者的心智负担

例如如下 kotlin 代码

```kotlin
// 开发者不必描述 a的类型，编译器会自动将 12 编译为一个Int类型数据变量
var a = 12
```

uts 同样具备类型自动推导。在定义变量时如果直接赋值字面量，而不使用冒号定义类型，也可以合法运行。

如下2种写法都是合法的，两个变量都是string类型：

```ts
let s1 :string = "hello"; 
let s2 = "hello"; 
```

目前 uts 未对字面量赋值类型推导做统一处理，编译到 kotlin 和 swift 时，由这2个语言自行做类型推导。但 kotlin 和 swift 的自动推导，在某些地方有细节差异。后续 uts 将统一字面量自动类型推导，详见 [字面量](literal.md)

#### 代码语句的分割

uts的多个代码语句，以回车或分号分割。

多行时行尾的分号可以省略。如果写在一行，应以分号分割。

如下的代码都是合法的：

```ts
let a:number = 1 //行尾可以不加分号
let b:boolean = false; //行尾可以加分号
let c:number = 3 ; let d:number = 4 // 同行多语句需要用分号分割
```

