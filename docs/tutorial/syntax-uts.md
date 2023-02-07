## UTS介绍
## Introduction to UTS

**uts 是什么**
**what is uts**

uts，全称 uni type script，是一门跨平台的、高性能的、强类型的现代编程语言。
uts, the full name of uni type script, is a cross-platform, high-performance, strongly typed modern programming language.

它可以被编译为不同平台的编程语言，如：
It can be compiled into programming languages for different platforms, such as:
- web平台，编译为JavaScript
- web platform, compiled to JavaScript
- Android平台，编译为Kotlin
- Android platform, compiled to Kotlin
- iOS平台，编译Swift
- iOS platform, compile Swift

uts 采用了与 ts 基本一致的语法规范，支持绝大部分 ES6 API。
uts adopts the same syntax specification as ts and supports most ES6 APIs.

但为了跨端，uts进行了一些约束和特定平台的增补。
But in order to cross-end, uts has some constraints and platform-specific additions.

过去在js引擎下运行支持的语法，大部分在uts的处理下也可以平滑的在kotlin和swift中使用。但有一些无法抹平，需要使用条件编译。和uni-app的条件编译类似，uts也支持条件编译。写在条件编译里的，可以调用平台特有的扩展语法。
In the past, most of the supported syntaxes that ran under the js engine can also be smoothly used in kotlin and swift under the processing of uts. But there are some that cannot be smoothed out and require the use of conditional compilation. Similar to the conditional compilation of uni-app, uts also supports conditional compilation. Written in conditional compilation, you can call platform-specific extended syntax.

本文是 uts 的基本语法介绍。如想了解 uni-app 下如何开发 uts插件，另见文档[https://uniapp.dcloud.net.cn/plugin/uts-plugin.html](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)。
This article is an introduction to the basic syntax of uts. If you want to know how to develop uts plug-ins under uni-app, see the document [https://uniapp.dcloud.net.cn/plugin/uts-plugin.html](https://uniapp.dcloud.net.cn/plugin /uts-plugin.html).


## 基本语法
## Basic syntax
### 声明
### Declaration

js是无类型的，TypeScript 的 type 就是类型的意思，给js加上了类型。它的类型定义方式是在变量名后面通过加冒号和类型来进行定义。
js is typeless, TypeScript's type means type, adding a type to js. Its type definition is defined by adding a colon and type after the variable name.

uts 中声明变量可以用 let 或 const，详见下。
Variables declared in uts can use let or const, see below for details.

#### 变量定义（let）
#### Variable definition (let)

声明一个可重新赋值的变量。语法 `let [变量名] : [类型] = 值;`。
Declare a reassignable variable. Syntax `let [variable name] : [type] = value;`.

> 相当于 TypeScript 中的 let，kotlin 中的 var
> Equivalent to let in TypeScript, var in kotlin

```ts
let str :string = "hello"; // 声明一个字符串变量
str = "hello world"; // 重新赋值
```

类型除了 string 之外，更多类型[见下](#基本类型)
In addition to string, more types [see below](#%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B)

#### 常量定义（const）
#### Constant definition (const)

声明一个只读常量，只能为其赋值一次。语法 `const [变量名] : [类型] = 值;`。
Declare a read-only constant that can only be assigned a value once. Syntax `const [variable name] : [type] = value;`.

> 相当于 TypeScript 中的 const, kotlin 中的 val
> Equivalent to const in TypeScript, val in kotlin

```ts
const str :string = "hello"; // 声明一个字符串变量
str = "hello world"; // 报错，不允许重新赋值
```

注意事项：
Precautions:

- 当前 uts 并未限制使用 var 来声明变量，但当使用 var 来声明变量时需要注意不同平台差异
- The current uts does not restrict the use of var to declare variables, but when using var to declare variables, you need to pay attention to the differences between different platforms
	* 编译至 JavaScript 平台时，等同于 JavaScript 平台的 var （存在变量提升现象）
	* When compiling to the JavaScript platform, it is equivalent to the var of the JavaScript platform (there is variable promotion phenomenon)
	* 编译至 Kotlin 平台时，等同于 Kotlin 平台的 var（允许重新赋值）
	* Equivalent to Kotlin's var (reassignment allowed) when compiling to the Kotlin platform
- 类型定义的冒号，左右可以有一个空格，也可以没有空格。`let str:string` 和 `let str : string` 和 `let str :string` 和 `let str: string` 都是合法的。
- The colon of the type definition can have a space on the left or right, or no space. `let str:string` and `let str : string` and `let str :string` and `let str: string` are both valid.
- 不支持 TypeScript 中的联合类型
- Union types in TypeScript are not supported

#### 变量命名规则
#### Variable Naming Rules

在 uts 中，使用变量名需要遵守一定的规则。
In uts, there are certain rules for using variable names.

-   变量名称可以包含数字和字母。
- Variable names can contain numbers and letters.
-   除了下划线 \_ 外，不能包含其他特殊字符，包括空格。
- Except for the underscore \_, no other special characters, including spaces, are allowed.
-   变量名不能以数字开头。
- Variable names cannot start with a number.

> 注意：与 TypeScript 不同的是，uts 不允许以 $ 开头命名变量
> Note: Unlike TypeScript, uts does not allow variables starting with $

#### 类型自动推导
#### Automatic type deduction

uts具备类型自动推导。在定义变量时如果直接赋值，而不使用冒号定义类型，也可以合法运行。
uts has automatic type deduction. If you assign a value directly when defining a variable without using a colon to define the type, it can also run legally.

如下2种写法都是合法的，两个变量都是string类型：
The following two ways of writing are legal, and both variables are of string type:

```ts
let s1 :string = "hello"; 
let s2 = "hello"; 
```

#### any类型
#### any type

如果定义变量时没有声明类型，也没有赋值。那么这个变量会被视为any类型。虽然可以使用，但uts中非常不建议这样使用。
If a variable is defined without a declared type, it is not assigned a value. Then this variable will be regarded as any type. Although it can be used, it is highly discouraged in uts.

```ts
let s;
s = "123"
console.log(s) // hello world
```

### 操作符
### operator

#### 赋值运算符(Assignment operators)
#### Assignment operators

| 名字                                              | 简写的操作符 | 含义        |
| name | shorthand operator | meaning |
| ------------------------------------------------- | ------------ | ----------- | ---------- |
| 赋值(Assignment)                                  | x = y        | x = y       |
| Assignment | x = y | x = y |
| 加法赋值(Addition assignment)                     | x += y       | x = x + y   |
| Addition assignment | x += y | x = x + y |
| 减法赋值(Subtraction assignment)                  | x -= y       | x = x - y   |
| Subtraction assignment | x -= y | x = x - y |
| 乘法赋值(Multiplication assignment)               | x \*= y      | x = x \* y  |
| Multiplication assignment | x \*= y | x = x \* y |
| 除法赋值(Division assignment)                     | x /= y       | x = x / y   |
| Division assignment | x /= y | x = x / y |
| 求余赋值(Remainder assignment)                    | x %= y       | x = x % y   |
| Remainder assignment | x %= y | x = x % y |
| 左移位赋值(Left shift assignment)                 | x <<= y      | x = x << y  |
| Left shift assignment | x <<= y | x = x << y |
| 右移位赋值(Right shift assignment)                | x >>= y      | x = x >> y  |
| Right shift assignment | x >>= y | x = x >> y |
| 无符号右移位赋值(Unsigned right shift assignment) | x >>>= y     | x = x >>> y |
| Unsigned right shift assignment | x >>>= y | x = x >>> y |
| 按位与赋值(Bitwise AND assignment)                | x &= y       | x = x & y   |
| Bitwise AND assignment | x &= y | x = x & y |
| 按位异或赋值(Bitwise XOR assignment)              | x ^= y       | x = x ^ y   |
| Bitwise XOR assignment | x ^= y | x = x ^ y |
| 按位或赋值(Bitwise OR assignment)                 | x \|= y      | x \|= y     | x = x \| y |
| Bitwise OR assignment | x \|= y | x \|= y | x = x \| y |

#### 比较运算符(Comparison operators)
#### Comparison operators

| 运算符                              | 描述                                        | 返回 true 的示例 |
| operator | description | examples that return true |
| ----------------------------------- | ------------------------------------------- | ---------------- |
| 等于 Equal (==)                     | 如果两边操作数相等时返回 true。             | var1==var2       |
| Equal to Equal (==) | Returns true if both operands are equal. | var1==var2 |
| 不等于 Not equal (!=)               | 如果两边操作数不相等时返回 true             | var1!=var2       |
| Not equal (!=) | Returns true if both operands are not equal | var1!=var2 |
| 全等 Strict equal (===)             | 两边操作数相等且类型相同时返回 true。       | var1===var2      |
| Congruent Strict equal (===) | Returns true if both operands are equal and of the same type. | var1===var2 |
| 不全等 Strict not equal (!==)       | 两边操作数不相等或类型不同时返回 true。     | var1!==var2      |
| Strict not equal (!==) | Returns true if both operands are not equal or of different types. | var1!==var2 |
| 大于 Greater than (>)               | 左边的操作数大于右边的操作数返回 true       | var1>var2        |
| Greater than (>) | The left operand is greater than the right operand returns true | var1>var2 |
| 大于等于 Greater than or equal (>=) | 左边的操作数大于或等于右边的操作数返回 true | var1>=var2       |
| Greater than or equal (>=) | The left operand is greater than or equal to the right operand returns true | var1>=var2 |
| 小于 Less than (<)                  | 左边的操作数小于右边的操作数返回 true       | var1<var2        |
| Less than (<) | The left operand is less than the right operand returns true | var1<var2 |
| 小于等于 Less than or equal (<=)    | 左边的操作数小于或等于右边的操作数返回 true | var1<=var2       |
| Less than or equal (<=) | Left operand less than or equal to right operand returns true | var1<=var2 |

#### 算数运算符(Arithmetic operators)
#### Arithmetic operators

| 运算符   | 范例 | 描述                                                                                                                                     |
| Operator | Example | Description |
| -------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 求余(%)  |      | 二元运算符. 返回相除之后的余数.                                                                                                          |
| Remainder (%) | | Binary operator. Returns the remainder after division. |
| 自增(++) |      | 一元运算符. 将操作数的值加一. 如果放在操作数前面 (++x), 则返回加一后的值; 如果放在操作数后面 (x++), 则返回操作数原值,然后再将操作数加一. |
| Increment (++) | | Unary operator. Increments the value of the operand by one. If placed before the operand (++x), returns the value after adding one; if placed after the operand (x++) , returns the original value of the operand, and then increments the operand by one. |
| 自减(--) |      | 一元运算符. 将操作数的值减一. 前后缀两种用法的返回值类似自增运算符.                                                                      |
| Decrement (--) | | Unary operator. Decrements the value of the operand by one. The return value of the two usages of prefix and suffix is similar to the increment operator. |

#### 位运算符(Bitwise operators)
#### Bitwise operators

| Operator                        | Usage   | Description                                                                                                      |
| ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| 按位与 AND                      | a & b   | 在 a,b 的位表示中，每一个对应的位都为 1 则返回 1， 否则返回 0.                                                   |
| Bitwise AND | a & b | In the bit representation of a,b, if each corresponding bit is 1, return 1, otherwise return 0. |
| 按位或 OR                       | a \| b  | 在 a,b 的位表示中，每一个对应的位，只要有一个为 1 则返回 1， 否则返回 0.                                         |
| Bitwise OR | a \| b | In the bit representation of a,b, if each corresponding bit is 1, it returns 1, otherwise it returns 0. |
| 按位异或 XOR                    | a ^ b   | 在 a,b 的位表示中，每一个对应的位，两个不相同则返回 1，相同则返回 0.                                             |
| Bitwise XOR | a ^ b | In the bit representation of a,b, for each corresponding bit, if the two are different, it returns 1, and if they are the same, it returns 0. |
| 按位非 NOT                      | ~ a     | 反转被操作数的位。                                                                                               |
| Bitwise NOT NOT | ~ a | Inverts the bits of the operand. |
| 左移 shift                      | a << b  | 将 a 的二进制串向左移动 b 位,右边移入 0.                                                                         |
| shift left | a << b | Shift the binary string of a to the left by b bits and to the right by 0. |
| 算术右移                        | a >> b  | 把 a 的二进制表示向右移动 b 位，丢弃被移出的所有位.(译注:算术右移左边空出的位是根据最高位是 0 和 1 来进行填充的) |
| Arithmetic right shift | a >> b | Shift the binary representation of a to the right by b bits, discarding all the shifted bits. ) |
| 无符号右移(左边空出位用 0 填充) | a >>> b | 把 a 的二进制表示向右移动 b 位，丢弃被移出的所有位，并把左边空出的位都填充为 0                                   |
| Unsigned right shift (left vacant bits are filled with 0s) | a >>> b | Shift the binary representation of a to the right by b bits, discarding all shifted bits, and filling the left vacant bits with 0s |

#### 逻辑运算符(Logical operators)
#### Logical operators

| 运算符       | 范例             | 描述     |
| Operator | Example | Description |
| ------------ | ---------------- | -------- |
| 逻辑与(&&)   | expr1 && expr2   | (逻辑与) |
| logical AND (&&) | expr1 && expr2 | (logical AND) |
| 逻辑或(\|\|) | expr1 \|\| expr2 | (逻辑或) |
| Logical OR (\|\|) | expr1 \|\| expr2 | (Logical OR) |
| 逻辑非(!)    | !expr            | (逻辑非) |
| Logical NOT (!) | !expr | (Logical NOT) |

#### 字符串运算符(String operators)
#### String operators

除了比较操作符，它可以在字符串值中使用，连接操作符（+）连接两个字符串值相连接，返回另一个字符串，它是两个操作数串的结合。
In addition to comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values, returning another string, which is the union of the two operand strings.

```ts
console.log("my " + "string"); // console logs the string "my string".
```

#### 条件（三元）运算符(Conditional operator)
#### Conditional operator

条件运算符是 uts 中唯一需要三个操作数的运算符。运算的结果根据给定条件在两个值中取其一。语法为：
The conditional operator is the only operator in uts that requires three operands. The result of the operation takes one of two values according to a given condition. The syntax is:

`条件 ? 值1 : 值2`
`condition ? value1 : value2`

```ts
const status = age >= 18 ? "adult" : "minor";
```

### 代码语句的分割
### Segmentation of code statements

uts的多个代码语句，可以以回车或分号分割。行尾的分号可以省略。如果写在一行，应以分号分割。
Multiple code statements of uts can be separated by carriage return or semicolon. The semicolon at the end of the line can be omitted. If written on one line, they should be separated by semicolons.

如下的代码都是合法的：
The following code is legal:

```ts
let a:number = 1 //行尾可以不加分号
let b:boolean = false; //行尾可以加分号
let c:number = 3 ; let d:number = 4 // 同行多语句需要用分号分割
```

## 数据类型
## type of data

### 布尔值（Boolean）
### Boolean

有 2 个值分别是：`true` 和 `false`。
There are 2 values: `true` and `false`.

### 数字（Number）
### Number

所有数字，包括整数或浮点数，包括正数负数。例如： 正整数 `42` 或者 浮点数 `3.14159` 或者 负数 `-1` 。
All numbers, integer or floating point, both positive and negative. For example: positive integer `42` or floating point `3.14159` or negative `-1`.

```ts
let a:number = 42
```

#### Kotlin 特有的数字类型
#### Kotlin-specific numeric types

- Byte, UByte
- Short, UShort
- Int, UInt
- Long, ULong
- Float
- Double

#### Swift 特有的数字类型
#### Swift-specific numeric types

- Int, UInt, Int8, UInt8, Int16, UInt16, Int32, UInt32, Int64, UInt64
- Float, Float16, Float32, Float64
- Double

**注意**
**Notice**

在 kotlin 和 swift 中，有些系统API或三方SDK的传入和返回强制约定了这些平台数字类型，此时无法使用 number。
In kotlin and swift, the input and return of some system APIs or third-party SDKs forcefully agree on these platform number types, and number cannot be used at this time.
这种情况下可以使用下面的方法，虽然可能会被编辑器报语法错误（后续HBuilderX会修复这类误报），但编译到 kotlin 和 swift 时是可用的。
In this case, the following method can be used. Although the editor may report syntax errors (subsequent HBuilderX will fix such false positives), it is available when compiling to kotlin and swift.

- 声明特定的平台数字类型
- Declare a platform-specific numeric type
 > 目前这些平台数字类型，声明类型时，与 number 不同的是，均为首字母大写
 > At present, these platform number types, when declaring the type, are different from number in that the first letter is capitalized

```ts

let a:Int = 3 //注意 Int 是首字母大写
let b:Int = 4
let c:Double  = a * 1.0 / b
```

- 在 kotlin(app-android) 下转换特定的平台数字类型
- Convert platform-specific numeric types under kotlin(app-android)
```ts
let a:Int = 3
a.toFloat() // 转换为 Float 类型，后续也将支持 new Float(a) 方式转换
a.toDouble() // 转换为 Double 类型，后续也将支持 new Double(a) 方式转换
```

- 在 swift(app-ios) 下转换特定的平台数字类型
- Convert specific platform number types under swift(app-ios)
```ts
let a:Int = 3
let b = new Double(a) // 将整型变量 a 转换为 Double 类型
```

### 字符串（String）
### String

字符串是一串表示文本值的字符序列，例如：`"hello world"`。
A string is a sequence of characters representing a text value, for example: `"hello world"`.

### 日期（Date）
### Date (Date)

日期对象表示日期，包括年月日时分秒等各种日期。详[见下](#Date)
A date object represents a date, including various dates such as year, month, day, hour, minute, and second. Details [see below](#Date)

### null

一个表明 null 值的特殊关键字。
A special keyword that indicates a null value.

有时需定义可为null的字符串，可以在类型描述中使用`|`操作符。
Sometimes you need to define a nullable string, you can use the `|` operator in the type description.
```ts
let user: string | null
```

> 注意：uts 编译为kotlin和swift时不支持 undefined。
> Note: undefined is not supported when compiling uts to kotlin and swift.

### Object类型
### Object type

对象（object）是指内存中的可以被标识符引用的一块区域，是一种引用类型。包括Array，Date，Map，Set，JSON等，uts 有一个内置对象的标准库。详[见下](#内置对象和api)。
Object (object) refers to an area in memory that can be referenced by an identifier, and is a type of reference. Including Array, Date, Map, Set, JSON, etc., uts has a standard library of built-in objects. Details [see below](#%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1%E5%92%8Capi).

### any类型
### any type

未定义类型，即任意类型。一般不推荐使用。
Undefined type, i.e. any type. Generally not recommended.

## 字面量
## literal

字面量是由语法表达式定义的常量；或，通过由一定字词组成的语词表达式定义的常量。
A literal is a constant defined by a grammatical expression; or, a constant defined by a lexical expression consisting of certain words.

在 uts 中，你可以使用各种字面量。这些字面量是按字面意思给出的固定的值，而不是变量
In uts, you can use various literals. These literals are fixed values given literally, not variables

### 数组字面量
### Array literals

数组字面值是一个封闭在方括号对 ([]) 中的包含有零个或多个表达式的列表，其中每个表达式代表数组的一个元素。当你使用数组字面值创建一个数组时，该数组将会以指定的值作为其元素进行初始化，而其长度被设定为元素的个数。
An array literal is a list of zero or more expressions enclosed in a pair of square brackets ([]), where each expression represents an element of the array. When you create an array using an array literal, the array is initialized with the specified value as its elements, and its length is set to the number of elements.

下面的示例用 3 个元素生成数组coffees，它的长度是 3。
The following example generates the array coffees with 3 elements and its length is 3.

```ts
const coffees = ["French Roast", "Colombian", "Kona"]
```

数组字面值同时也是数组对象。
Array literals are also array objects.

### 布尔字面量
### boolean literal

布尔类型有两种字面量：true和false。
The boolean type has two literals: true and false.

### 数字字面量
### Numeric literals

数字字面量包括多种基数的整数字面量和以 10 为基数的浮点数字面量
Numeric literals include integer literals in multiple bases and floating-point literals in base 10

#### 整数字面量
#### integer literals

整数可以用十进制（基数为 10）、十六进制（基数为 16）、二进制（基数为 2）表示。
Integers can be represented in decimal (base 10), hexadecimal (base 16), or binary (base 2).

- 十进制整数字面量由一串数字序列组成，且没有前缀 0。如：`0, 117, -345`
- Decimal integer literals consist of a sequence of numbers without a prefix of 0. For example: `0, 117, -345`

- 十六进制整数以 0x（或 0X）开头，可以包含数字（0-9）和字母 a~f 或 A~F。如：`0x1123, 0x00111 , -0xF1A7`
- Hexadecimal integers start with 0x (or 0X) and can contain numbers (0-9) and letters a~f or A~F. Such as: `0x1123, 0x00111 , -0xF1A7`

- 二进制整数以 0b（或 0B）开头，只能包含数字 0 和 1。如：`0b11, 0b0011 , -0b11`
- Binary integers start with 0b (or 0B) and can only contain the digits 0 and 1. For example: `0b11, 0b0011 , -0b11`

#### 浮点数字面量
#### floating point number literals

浮点数字面值可以有以下的组成部分：
A floating-point number literal can have the following components:

- 一个十进制整数，可以带正负号（即前缀“+”或“ - ”），
- a decimal integer, optionally signed (i.e. prefixed with "+" or "-"),
- 小数点（“.”），
- decimal point ("."),
- 小数部分（由一串十进制数表示），
- the fractional part (represented by a string of decimal digits),
- 指数部分。
- Index section.

指数部分以“e”或“E”开头，后面跟着一个整数，可以有正负号（即前缀“+”或“-”）。浮点数字面量至少有一位数字，而且必须带小数点或者“e”（大写“E”也可）。
The exponent part starts with "e" or "E", followed by an integer, which can be signed (i.e. prefixed with "+" or "-"). Floating-point literals have at least one digit, and must have a decimal point or "e" (or uppercase "E").

简言之，其语法是：
In short, its syntax is:

```
[(+|-)][digits][.digits][(E|e)[(+|-)]digits]
```

例如：
E.g:

```ts
3.14
-.2345789 // -0.23456789
-3.12e+12  // -3.12*10^12
.1e-23    // 0.1*10^(-23)=10^(-24)=1e-24
```

### RegExp字面量
### RegExp literal

正则表达式是字符被斜线围成的表达式。下面是一个正则表达式文字的一个例子。
Regular expressions are expressions in which characters are surrounded by slashes. Below is an example of a regular expression literal.

```ts
const re = /ab+c/;
```

### 字符串字面量
### String literals

字符串字面量是由双引号（"）对或单引号（'）括起来的零个或多个字符。字符串被限定在同种引号之间；也即，必须是成对单引号或成对双引号。下面的例子都是字符串字面值：
A string literal is zero or more characters enclosed in double quotation marks (") pairs or single quotation marks ('). Strings are bounded between quotation marks of the same kind; that is, they must be pairs of single quotation marks or single quotation marks ('). Double quotes. The following examples are all string literals:

```ts
"foo"
'bar'
"1234"
"one line \n another line"
"John's cat"
```

你可以在字符串字面值上使用字符串对象的所有方法，你也能用对字符串字面值使用类似 String.length 的属性：
You can use all the methods of string objects on string literals, and you can also use properties like String.length on string literals:

```ts
console.log("John's cat".length)
// 将打印字符串中的字符个数（包括空格）
// will print the number of characters in the string (including spaces)
// 结果为：10
// result is: 10
```

#### 模板字符串
#### template string

模板字面量 是允许嵌入表达式的字符串字面量。你可以使用多行字符串和字符串插值功能。也被称为“模板字符串”。
Template literals are string literals that allow embedded expressions. You can use multiline strings and string interpolation functions. Also known as "template strings".

```ts
// Basic literal string creation
`In uts '\n' is a line-feed.`

// Multiline strings
`In uts this is
 not legal.`

// String interpolation
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
```
#### 转义特殊字符
#### escape special characters

|字符	|意思		|
|character |meaning |
|--		|--			|
|`\b`	|退格符		|
|`\b` |Backspace |
|`\f`	|换页符		|
|`\f` |Form feed |
|`\n`	|换行符		|
|`\n` |Newline |
|`\r`	|回车符		|
|`\r` |carriage return |
|`\t`	|制表符		|
|`\t` |Tab |
|`\'`	|单引号		|
|`\'` |Single quotes |
|`\"`	|双引号		|
|`\"` |Double quotes |
|`\\`	|反斜杠字符	|
|`\\` | backslash character |

## 控制流程
## control flow

### 条件
### condition

#### If 语句
#### If statement

当一个逻辑条件为真，用 if 语句执行一个语句。当这个条件为假，使用可选择的 else 从句来执行这个语句。if 语句如下所示：
Use the if statement to execute a statement when a logical condition is true. When the condition is false, use the optional else clause to execute the statement. The if statement looks like this:

```ts
if (condition_1) {
    statement_1;
} else if (condition_2) {
    statement_2;
} else if (condition_n_1) {
    statement_n;
} else {
    statement_last;
}
```

> 注意：if 和 else if 中的条件表达式必须为布尔值
> Note: Conditional expressions in if and else if must be boolean

#### switch 语句
#### switch statement

switch 语句允许一个程序求一个表达式的值并且尝试去匹配表达式的值到一个 case 标签。如果匹配成功，这个程序执行相关的语句。switch 语句如下所示：
The switch statement allows a program to evaluate an expression and try to match the expression's value to a case label. If the match is successful, the program executes the associated statement. The switch statement looks like this:

```ts
switch (expression) {
   case label_1:
      statements_1
      [break;]
   case label_2:
      statements_2
      [break;]
   default:
      statements_def
      [break;]
}
```

程序首先查找一个与 expression 匹配的 case 语句，然后将控制权转移到该子句，执行相关的语句。如果没有匹配值， 程序会去找 default 语句，如果找到了，控制权转移到该子句，执行相关的语句。如果没有找到 default，程序会继续执行 switch 语句后面的语句。default 语句通常出现在 switch 语句里的最后面，当然这不是必须的。
The program first looks for a case statement that matches expression, then transfers control to that clause, executing the associated statement. If there is no match, the program looks for the default statement, and if it finds it, control transfers to that clause and the associated statement is executed. If no default is found, the program continues with the statement following the switch statement. The default statement usually appears at the end of the switch statement, although this is not required.

可选的 break 语句与每个 case 语句相关联， 保证在匹配的语句被执行后程序可以跳出 switch 并且继续执行 switch 后面的语句。如果 break 被忽略，则程序将继续执行 switch 语句中的下一条语句。
An optional break statement is associated with each case statement, ensuring that the program can break out of the switch after the matching statement has been executed and continue executing the statement following the switch. If break is ignored, the program will continue to the next statement in the switch statement.

#### 三元表达式
#### Ternary expressions

uts 支持使用三元表达式。一个条件后面会跟一个问号（?），如果条件为 true ，则问号后面的表达式 A 将会执行；表达式 A 后面跟着一个冒号（:），如果条件为 false ，则冒号后面的表达式 B 将会执行。本运算符经常作为 if 语句的简捷形式来使用。
uts supports the use of ternary expressions. A condition is followed by a question mark (?), if the condition is true, the expression A following the question mark will be executed; expression A is followed by a colon (:), if the condition is false, the expression B following the colon will be executed will execute. This operator is often used as a shorthand for an if statement.

```ts
function getFee(isMember: boolean): string {
    return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"
```

三元操作符是右结合的，也就是说你可以像这样把它链接起来， 和 if … else if … else if … else 链类似:
The ternary operator is right-associative, which means you can chain it like this, similar to an if … else if … else if … else chain:

```ts
function example(): string {
    return condition1
        ? value1
        : condition2
        ? value2
        : condition3
        ? value3
        : value4;
}

// Equivalent to:

function example(): string {
    if (condition1) {
        return value1;
    } else if (condition2) {
        return value2;
    } else if (condition3) {
        return value3;
    } else {
        return value4;
    }
}
```

### 循环
### loop

#### for

一个 for 循环会一直重复执行，直到指定的循环条件为 false。 一个 for 语句是这个样子的：
A for loop executes repeatedly until the specified loop condition is false. A for statement looks like this:

```ts
for ([initialExpression]; [condition]; [incrementExpression]) {
    statement;
}
```

当一个 for 循环执行的时候，会发生以下过程：
When a for loop executes, the following process occurs:

1. 如果有初始化表达式 initialExpression，它将被执行。这个表达式通常会初始化一个或多个循环计数器。
1. If there is an initialization expression initialExpression, it will be executed. This expression usually initializes one or more loop counters.
2. 计算 condition 表达式的值。如果 condition 的值是 true，循环中的语句会被执行。如果 condition 的值是 false，for 循环终止。如果 condition 表达式整个都被省略掉了，3. condition 的值会被认为是 true。
2. Evaluate the condition expression. If the value of condition is true, the statements in the loop will be executed. If the value of condition is false, the for loop terminates. If the condition expression is omitted entirely, 3. The value of condition will be considered true.
3. 循环中的 statement 被执行。如果需要执行多条语句，可以使用块（{ ... }）来包裹这些语句。
3. The statement in the loop is executed. If you need to execute multiple statements, you can use blocks ({ ... }) to wrap these statements.
4. 如果有更新表达式 incrementExpression，执行更新表达式。
4. If there is an update expression incrementExpression, execute the update expression.
5. 回到步骤 2。
5. Go back to step 2.

举例：
Example:

```ts
for (let i = 0; i < 10; i++) {
    //...
}
```
#### do...while

do...while 语句一直重复直到指定的条件求值得到假值（false）。 一个 do...while 语句看起来像这样：
The do...while statement repeats until the specified condition evaluates to false. A do...while statement looks like this:

```ts
do {
    statement;
} while (condition);
```

statement 在检查条件之前会执行一次。要执行多条语句（语句块），要使用块语句（{ ... }）包括起来。 如果 condition 为真（true），statement 将再次执行。 在每个执行的结尾会进行条件的检查。当 condition 为假（false），执行会停止并且把控制权交回给 do...while 后面的语句。
statement is executed once before checking the condition. To execute multiple statements (statement blocks), enclose them with block statements ({ ... }). If the condition is true, the statement will execute again. Conditional checks are performed at the end of each execution. When condition is false, execution stops and returns control to the statement following do...while.

举例：
Example:

```ts
let i = 0;
do {
    i += 1;
} while (i < 10);
```

#### while

一个 while 语句只要指定的条件求值为真（true）就会一直执行它的语句块。一个 while 语句看起来像这样：
A while statement executes its block as long as the specified condition evaluates to true. A while statement looks like this:

```ts
while (condition) {
    statement;
}
```

如果这个条件变为假，循环里的 statement 将会停止执行并把控制权交回给 while 语句后面的代码。
If this condition becomes false, the statement inside the loop will stop executing and return control to the code following the while statement.

条件检测会在每次 statement 执行之前发生。如果条件返回为真， statement 会被执行并紧接着再次测试条件。如果条件返回为假，执行将停止并把控制权交回给 while 后面的语句。
Condition testing occurs before each statement execution. If the condition returns true, the statement is executed and the condition is tested again immediately afterward. If the condition returns false, execution stops and returns control to the statement following the while.

要执行多条语句（语句块），要使用语句块 ({ ... }) 包括起来。
To execute multiple statements (statement blocks), enclose them with statement blocks ({ ... }).

举例：
Example:

```ts
let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}
```

#### break

使用 break 语句来终止循环，switch。
Use the break statement to terminate the loop, switch.

举例：
Example:

```ts
for (let i = 0; i < 10; i++) {
    if (i > 5) {
        break;
    }
}
let x = 0;
while (true) {
    x++;
    if (x > 5) {
        break;
    }
}
```

#### continue

使用 continue 语句来终止当前循环，并在下一次迭代时继续执行循环。
Use the continue statement to terminate the current loop and continue the loop on the next iteration.

举例：
Example:

```ts
for (let i = 0; i < 10; i++) {
    if (i > 5) {
        continue;
    }
}
let x = 0;
while (true) {
    x++;
    if (x > 5) {
        continue;
    }
}
```

### 异常
### exception

你可以用 throw 语句抛出一个异常并且用 try...catch 语句捕获处理它。
You can throw an exception with the throw statement and catch it with the try...catch statement.

使用 throw 表达式来抛出异常：
Use throw expressions to throw exceptions:

```ts
throw new Error("Hi There!");
```

使用 try……catch 表达式来捕获异常：
Use try...catch expressions to catch exceptions:

```ts

try {
    // 一些代码
    // some code
} catch (e: Error) {
    // 处理程序
    // handler
} finally {
    // 可选的 finally 块
    // optional finally block
}

```

## 函数（function）
## function

函数是编程语言常见的功能，它可以封装一批代码，对外接收参数，然后返回值。被封装的逻辑，可以被不同的其他代码调用，达到共同复用逻辑的目的。
A function is a common function in programming languages. It can encapsulate a batch of code, receive external parameters, and return a value. The encapsulated logic can be called by different other codes to achieve the purpose of common reuse logic.

函数用 function 关键字定义，后面跟着函数名和圆括号。
Functions are defined with the function keyword, followed by the function name and parentheses.

同时注意，定义函数涉及作用域。
Also note that defining functions involves scope.

### 定义函数
### define function

#### 普通函数声明
#### Ordinary function declaration

一个函数定义（也称为函数声明，或函数语句）由一系列在 function 关键字后的内容组成，依次为：
A function definition (also known as a function declaration, or a function statement) consists of a series of content after the function keyword, in order:

-   函数的名称。
- The name of the function.
-   函数参数列表，包围在括号中并由逗号分隔。
- A list of function arguments, enclosed in parentheses and separated by commas.
-   函数返回值类型。
- Function return value type.
-   定义函数的 uts 语句，用大括号{}括起来。
- A uts statement defining a function, enclosed in curly braces {}.

> 注意：函数必须明确标明返回值类型
> Note: The function must clearly indicate the return value type

例如，以下的代码定义了一个简单的函数。函数名为 add，有2个参数 x 和 y，都是 string类型，函数的返回值类型也是 string。
For example, the following code defines a simple function. The function name is add, there are two parameters x and y, both of type string, and the return value type of the function is also string.

函数的内容是将入参 x 和 y 相加，赋值给变量z，然后通过 return关键字返回z。
The content of the function is to add the input parameters x and y, assign it to the variable z, and then return z through the return keyword.

```ts
function add(x :string, y :string) :string {
    let z : string = x + " " + y
	return z;
}
```

#### 无返回值的函数定义（void）
#### Function definition with no return value (void)

如果这个函数不需要返回值，需要使用void关键字，同时函数内部末尾不需要return来返回内容。
If this function does not need to return a value, you need to use the void keyword, and at the same time, there is no need to return at the end of the function to return the content.

```ts
function add(x :string, y :string) :void {
    let z :string = x + " " + y
	console.log(z)
	// 不需要return
	// no need to return
}
```

#### 函数表达式和匿名函数定义
#### Function expressions and anonymous function definitions

虽然上面的函数声明在语法上是一个语句，但函数也可以由函数表达式创建。这样的函数可以是匿名的，它不必有一个名称。例如，函数 add 也可这样来定义：
While the function declaration above is syntactically a statement, functions can also be created from function expressions. Such a function can be anonymous, it doesn't have to have a name. For example, the function add could also be defined like this:

```ts
const add = function (x: string, y: string): string {
    return x + " " + y;
};
```

注意：
Notice:
- 通过表达式定义的函数必须使用return关键字返回内容。
- Functions defined by expressions must use the return keyword to return content.
- 函数表达式不支持使用函数名，比如`const add = function add(){}`是不允许的。
- Function expressions do not support the use of function names, such as `const add = function add(){}` is not allowed.

### 调用函数
### Call functions

定义一个函数并不会自动的执行它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。调用函数才会以给定的参数真正执行这些动作。
Defining a function does not automatically execute it. Defining a function is just a matter of giving the function a name and specifying what the function should do when called. Calling the function will actually perform the actions with the given parameters.

定义了函数 add 后，你可以如下这样调用它：
After defining the function add, you can call it like this:

```ts
function add(x :string, y :string) :string {
    let z :string = x + " " + y
	return z;
}
add("hello", "world"); // 调用add函数
```

上述语句通过提供参数 "hello" 和 "world" 来调用函数。
The above statement calls the function by providing the parameters "hello" and "world".

虽然调用了add函数，但并没有获取到返回值。如需要获取返回值，需要再赋值：
Although the add function was called, the return value was not obtained. If you need to get the return value, you need to reassign:
```ts
function add(x :string, y :string) :string {
	let z :string = x + " " + y
	return z;
}
let s :string = add("hello", "world");
console.log(s) // hello world
```

### 函数作用域
### function scope

在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的域的内部有定义。相对应的，一个函数可以访问定义在其范围内的任何变量和函数。
Variables defined inside a function cannot be accessed anywhere outside the function, because variables are only defined inside the function's domain. Correspondingly, a function can access any variable and function defined in its scope.

```ts
const hello :string = "hello";
const world :string = "world";

function add(): string {
	let s1 :string = "123";
    return hello + world; // 可以访问到 hello 和 world
}
```

#### 嵌套函数
#### Nested functions

你可以在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。它自身也形成了一个闭包。一个闭包是一个可以自己拥有独立的环境与变量的表达式（通常是函数）。
You can nest a function inside another function. Nested (inner) functions are private to their container (outer) functions. It also forms a closure itself. A closure is an expression (usually a function) that can have its own independent environment and variables.

既然嵌套函数是一个闭包，就意味着一个嵌套函数可以”继承“容器函数的参数和变量。换句话说，内部函数包含外部函数的作用域。
Since a nested function is a closure, it means that a nested function can "inherit" the parameters and variables of the container function. In other words, the inner function contains the scope of the outer function.

可以总结如下：
It can be summed up as follows:

-   内部函数只可以在外部函数中访问。
- Inner functions can only be accessed within outer functions.
-   内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量。
- The inner function forms a closure: it can access the parameters and variables of the outer function, but the outer function cannot use its parameters and variables.

举例：
Example:

```ts
function addSquares(a: number, b: number): number {
    function square(x: number): number {
        return x * x;
    }
    return square(a) + square(b);
}
addSquares(2, 3); // returns 13
addSquares(3, 4); // returns 25
addSquares(4, 5); // returns 41
```

#### 命名冲突
#### naming conflicts

当同一个闭包作用域下两个参数或者变量同名时，就会产生命名冲突。更近的作用域有更高的优先权，所以最近的优先级最高，最远的优先级最低。这就是作用域链。链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域。
A naming conflict occurs when two parameters or variables in the same closure scope have the same name. Closer scopes have higher precedence, so the closest has the highest priority and the farthest has the lowest. This is the scope chain. The first element of the chain is the innermost scope, and the last element is the outermost scope.

举例：
Example:

```ts
function outside(): (x: number) => number {
    let x = 5;
    const inside = function (x: number): number {
        return x * 2;
    };
    return inside;
}

outside()(10); // 返回值为 20 而不是 10
```

命名冲突发生在 return x 上，inside 的参数 x 和 outside 变量 x 发生了冲突。这里的作用链域是{inside, outside}。因此 inside 的 x 具有最高优先权，返回了 20（inside 的 x）而不是 10（outside 的 x）。
The naming conflict occurs on return x, the inside parameter x and the outside variable x conflict. The scope here is {inside, outside}. So inside x has the highest priority, returning 20 (inside x) instead of 10 (outside x).

### 闭包
### Closure

uts 允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。
uts allows function nesting, and inner functions can access all variables and functions defined in outer functions, and all variables and functions that outer functions can access.

但是，外部函数却不能够访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一定的安全性。
However, the outer function cannot access the variables and functions defined in the inner function. This provides some security to the variables of the inner function.

此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行时间长。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。
Also, since the inner function can access the scope of the outer function, when the inner function lifetime is longer than the outer function, the variables and functions defined in the outer function will have a longer lifetime than the inner function execution time. A closure is created when the inner function is accessed in some way by any of the outer function scopes.

举例：
Example:

```ts
const pet = function (name: string): () => string {
    //外部函数定义了一个变量"name"
    //The external function defines a variable "name"
    const getName = function (): string {
        //内部函数可以访问 外部函数定义的"name"
        //Inner function can access the "name" defined by the outer function
        return name;
    };
    //返回这个内部函数，从而将其暴露在外部函数作用域
    //Return this inner function, thereby exposing it in the outer function scope
    return getName;
};
const myPet = pet("Vivie");
myPet(); // 返回结果 "Vivie"
```
### 函数参数
### function parameters

#### 默认参数
#### default parameters

函数参数可以有默认值，当省略相应的参数时使用默认值。
Function parameters can have default values, which are used when the corresponding parameter is omitted.

```ts
function multiply(a:number, b:number = 1):number {
  return a*b;
}
multiply(5); // 5
```
### 箭头函数
### Arrow functions

箭头函数表达式（也称胖箭头函数）相比函数表达式具有较短的语法。箭头函数总是匿名的。
Arrow function expressions (also called fat arrow functions) have a shorter syntax than function expressions. Arrow functions are always anonymous.

```ts
const arr = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const a2 = arr.map(function (s): number {
    return s.length;
});
console.log(a2); // logs [ 8, 6, 7, 9 ]
const a3 = arr.map((s): number => s.length);
console.log(a3); // logs [ 8, 6, 7, 9 ]
```

## 类（class）
## class

uts 中使用关键字 class 声明类。
Classes are declared in uts using the keyword class.

类声明由类名以及由花括号包围的类体构成。
A class declaration consists of a class name followed by a class body surrounded by curly braces.

```ts
// 定义Person Class
// define Person Class
class Person {
	
}
```

### 基本概念
### basic concept

类是对象化的概念，有属性、方法、构造函数。
A class is an object-oriented concept with properties, methods, and constructors.
- 属性：是一个简单的值，可以是字符串、数字、布尔或另一个class。可以用 `对象.属性名` 的访问，也可以通过 `对象.属性名=xxx` 的方式赋值。
- Property: is a simple value that can be a string, number, boolean or another class. It can be accessed by `object.property name`, or assigned by `object.property name=xxx`.
- 方法：是一段代码的集合，有入参、有返回值（均可选）。可以用 `对象.方法名(参数)` 的方式访问。
- Method: It is a collection of a piece of code, with input parameters and return values (both are optional). It can be accessed by `object. method name (parameter)`.
- 构造函数：用于初始化实例。详[见下](#constructor)
- Constructor: Used to initialize an instance. Details [see below](#constructor)

下面的示例中，定义了一个 Person 的 class，它有一个属性 name，有一个构造函数 constructor（名称不可改），还有一个方法 getNameLength。
In the following example, a Person class is defined, which has an attribute name, a constructor function (name cannot be changed), and a method getNameLength.

```ts
// 定义Person Class
// define Person Class
class Person {
	name:string = ""; // 属性name
	constructor(newname:string) { // 构造函数，参数newname
		console.log("开始实例化"); 
		this.name = newname;
	}
	getNameLength():number{ // 方法getNameLength
		return this.name.length
	}
}
```

定义了class后，需要实例化（通过new关键字）。定义一个实例后，即可使用该实例对象的属性和方法。
After the class is defined, it needs to be instantiated (via the new keyword). Once an instance is defined, the properties and methods of the instance object are available.

一个class可以被多次实例化为不同的实例，互不影响。
A class can be instantiated multiple times as different instances without affecting each other.

```ts
//实例化上面定义的class并调用其属性方法
//Instantiate the class defined above and call its attribute method
let p = new Person("tom"); // 使用 new 关键字实例化对象时，会自动触发构造函数
console.log(p.name); // 访问p这个对象的属性name，返回值tom
console.log(p.getNameLength()); // 调用p这个对象的方法getNameLength，返回值3

let p2 = new Person("jerry"); // 使用 new 关键字再实例化一个新对象
console.log(p2.name); //jerry
console.log(p2.getNameLength()); //5


```

### 构造函数（constructor）@uts-constructor
### Constructor @uts-constructor

构造函数 constructor ，在创建新对象时（new的时候）会自动执行，用于初始化对象属性。
The constructor constructor is automatically executed when a new object is created (new), and is used to initialize object properties.

-   语法：
-   grammar:

```ts
constructor([arguments]) { ... }
```

-   描述：
-   describe:

你可以不写构造函数。如果没有显式指定构造函数，运行环境会自动添加默认的 constructor 方法。
You don't have to write a constructor. If no constructor is explicitly specified, the runtime will automatically add a default constructor method.

在一个类中只能有一个名为 “constructor” 的特殊方法。一个类中出现多次构造函数 (constructor)方法将会抛出一个 SyntaxError 错误。
There can be only one special method named "constructor" in a class. Multiple occurrences of a constructor method in a class will throw a SyntaxError .

-   示例：
- Example:

```ts
class Person {
	name:string = "";
	constructor(newname:string) {
		this.name = newname;
	}
}

let person = new Person("tom"); // 使用 new 关键字创建对象时，会自动触发构造函数
console.log(person.name); // tom
```

在一个构造函数中可以使用 super 关键字来调用一个父类的构造函数。这涉及继承的概念。如不了解继承可[见下](#extends)
You can use the super keyword in a constructor to call a superclass constructor. This involves the concept of inheritance. If you don't understand inheritance, you can [see below](#extends)
```ts
class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}
```

### 实例属性
### instance properties

class 有实例属性和静态属性。uts 中实例属性存在于类的每一个实例中。
class has instance attributes and static attributes. Instance attributes in uts exist on every instance of the class.

#### 声明实例属性
#### Declare instance properties

uts 可以在类中声明属性，默认可读，可写。
uts can declare properties in the class, which are readable and writable by default.

```ts
class Person {
	name:string = ""; // 声明实例属性name
	city:string = "beijing" // 声明实例属性city
	constructor(newname:string) {
		this.name = newname; // 在构造函数中对name重新赋值
	}
}

let person1 = new Person("tom"); // 使用 new 关键字创建对象时，会自动触发构造函数
console.log(person1.name); //tom
console.log(person1.city); //beijing
let person2 = new Person("jerry"); // 使用 new 关键字创建对象时，会自动触发构造函数
console.log(person2.name); //jerry
console.log(person2.city); //beijing
```

#### Getter 与 Setter
#### Getter and Setter

uts 支持通过 getters/setters 来截取对对象属性的访问。它可以理解为属性的读取/写入的拦截器。
uts supports intercepting access to object properties through getters/setters. It can be understood as an interceptor for reading/writing attributes.

下面的例子中，针对 person对象提供了name的get和set的拦截，paascode不正确时无法修改name的值。
In the following example, the get and set interception of name is provided for the person object, and the value of name cannot be modified when the paascode is incorrect.

```ts
const passcode = "secret passcode";
class Person {
	private _name: string = ""; // private是私有的，外部不能访问
	get name(): string { // 读取name会触发此拦截器
		console.log("start to get person.name");
		return this._name;
	}
	set name(newName: string) { // 给name赋值会触发此拦截器
		console.log("start to set person.name");
		if (passcode === "secret passcode") { // 校验是否有权修改name的值，这里的条件可以修改以方便测试
			this._name = newName;
		} else {
			console.log("Error: set person.name fail");
		}
	}
}
let p = new Person()
p.name = "tom" // 会打印"start to set person.name"
console.log(p.name); // 先打印"start to get person.name"，然后打印"tom"
```

#### readonly

uts 可以使用 readonly 关键字将属性设置为只读的。只读属性必须在声明时或构造函数里被初始化。
uts properties can be made read-only using the readonly keyword. Read-only properties must be initialized at declaration time or in the constructor.

```ts
class Person {
	readonly name: string;
	readonly age: number = 0;
	constructor (theName: string) {
		this.name = theName;
	}
}
let p = new Person("tom");
console.log(p.name);
p.name = "jerry"; // 错误! name 是只读的
p.age = 1 // 错误！ age 是只读的
```

但 readonly 更多是一种开发环境的语法校验。在运行时，该值往往可以改变。
But readonly is more of a syntax check for a development environment. At runtime, this value can often change.

### 静态属性（static）
### Static properties (static)

使用关键字 static 来将一个属性声明为静态属性。静态属性不会在实例中被调用，而只会被类本身调用。
Use the keyword static to declare a property as static. Static properties are not called on the instance, only by the class itself.

```ts
class Person {
	static age:number = 10; // age是静态属性。不能在实例p中访问，但可以通过类Person访问
	getAge():number{
		return Person.age
	}
}
console.log(Person.age); //10
let p = new Person(); //新建一个实例
console.log(p.age); //undefined
console.log(p.getAge()); //10
```

### 实例方法
### Instance Methods

uts 中实例方法存在于类的每一个实例中。
Instance methods in uts exist in every instance of the class.

#### 声明实例方法
#### Declare instance methods

uts 可以在类中声明实例方法。
uts can declare instance methods in a class.

下面定义一个通过高度乘以宽度计算面积的类。
The following defines a class that calculates the area by multiplying the height by the width.

```ts
class Rectangle {
    private height:number;
    private width:number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }
    calcArea(): number {
        return this.height * this.width;
    }
}
```

使用一个实例方法，以类实例调用它即可：
To use an instance method, call it on an instance of the class:

```ts
const square = new Rectangle(10, 10);
square.calcArea(); // 100
```

### 静态方法（static）
### Static method (static)

使用关键字 static 来将一个方法声明为静态方法。静态方法不会在实例中被调用，而只会被类本身调用。它们经常是工具函数，比如用来创建或者复制对象。
Use the keyword static to declare a method as static. Static methods are not called on the instance, but only by the class itself. They are often utility functions, such as to create or copy objects.

```ts
class ClassWithStaticMethod {
    static staticMethod(): string {
        return "static method has been called.";
    }
}
ClassWithStaticMethod.staticMethod(); // 不实例化，直接调用class的方法
```

### 继承（extends）@extends
### Inherit (extends) @extends

uts 允许使用继承来扩展现有的类。扩展的子类继承了父类的属性方法，但又可以添加自己独有的属性方法，以及复写父类定义的属性方法。
uts allows the use of inheritance to extend existing classes. The extended subclass inherits the attribute methods of the parent class, but can add its own unique attribute methods and override the attribute methods defined by the parent class.

被继承的类称为父类（也称为超类、基类），新扩展的类称为子类（也称为派生类）。
The inherited class is called the parent class (also called the super class, base class), and the newly extended class is called the subclass (also called the derived class).

比如定义了Person类存储人的基本信息，还可以定义一个Developer子类继承自Person类，在子类里追加Developer的独有信息。
For example, the Person class is defined to store the basic information of a person, and a Developer subclass can be defined to inherit from the Person class, and Developer's unique information can be added to the subclass.

-   语法：
-   grammar:

```ts
class ChildClass extends ParentClass { ... }
```

-   描述：
-   describe:

extends 关键字用来创建一个类的子类。
The extends keyword is used to create a subclass of a class.

-   示例：
- Example:

```ts
// 定义父类
// define the parent class
class Person {
	name:string = "";
	constructor(newname:string) {
		this.name = newname;
	}
}
// 定义子类
// define subclass
class Developer extends Person{
	likeLanguage:string = "ts"
}

let d = new Developer("tom"); // 实例化。由于子类没有声明和复写自己的构造函数，所以默认继承了父类的构造函数
console.log(d.name); // tom
console.log(d.likeLanguage); // ts
```

- 如果要控制父类中某些属性方法不被子类继承，可使用可见性修饰符（private、protected等），具体[见下](#modifier)
- If you want to control some attribute methods in the parent class from being inherited by subclasses, you can use visibility modifiers (private, protected, etc.), for details [see below](#modifier)
- 多重继承：子类还可以被孙类继承
- Multiple inheritance: subclasses can also be inherited by grandchildren

#### 覆盖方法（override）
#### override method (override)

覆盖，也称为复写、重写。在继承中，用于在子类中改写父类定义的方法或属性。
Coverage, also known as duplication, rewriting. In inheritance, it is used to override the methods or properties defined by the parent class in the subclass.

uts 对于可覆盖的成员以及覆盖后的成员需要显式修饰符override。
uts requires the explicit modifier override for overridable and overridden members.

```ts
class Polygon {
    name(): string {
        return "Polygon";
    }
}

class Square extends Polygon {
    override name(): string {
        return "Square";
    }
}
```

Square.name 函数上必须加上 override 修饰符。如果没写，编译器会报错。
The override modifier must be added to the Square.name function. If not written, the compiler will report an error.

#### 覆盖属性
#### Overriding properties

属性与方法的覆盖机制相同。父类中已声明的同名属性，在子类中重新声明必须以 override 开头，并且它们必须具有兼容的类型（都是字符串、或数字、布尔值等）。
Properties have the same overriding mechanism as methods. Properties with the same name that have been declared in the parent class must start with override in the subclass, and they must have compatible types (both are strings, or numbers, Boolean values, etc.).

```ts
class Shape {
     vertexCount: Int = 0
}

class Rectangle extends Shape {
    override  vertexCount = 4
}
```

#### 调用父类实现
#### Call parent class implementation

子类中的代码可以使用 super 关键字调用其父类的方法。不能跨级调用父类的父类（爷爷类）的方法。
Code in a subclass can call methods of its parent class using the super keyword. The method of the parent class (grandfather class) of the parent class cannot be called across levels.

```ts
class Rectangle {
    draw() {}
}
class FilledRectangle extends Rectangle {
    override draw() {
        super.draw();
    }
}

```


### 可见性修饰符@modifier
### visibility modifier @modifier

类的方法与属性都可以有可见性修饰符。
Both methods and properties of a class can have visibility modifiers.

在 uts 中有三个可见性修饰符：private、 protected、 和 public。 默认可见性是 public。
There are three visibility modifiers in uts: private, protected, and public. The default visibility is public.

#### public

在 uts 中可以自由的访问程序里定义的 public 成员，这也是 uts 的默认行为。
The public members defined in the program can be freely accessed in uts, which is also the default behavior of uts.

#### private

当成员被标记成 private 时，它就不能在声明它的类的外部访问。比如：
When a member is marked private, it cannot be accessed outside the class in which it is declared. for example:

```ts
class Person {
    private name: string = "Cat";
}

new Person().name; // 错误: 'name' 是私有的.
```

#### protected

protected 修饰符与 private 修饰符的行为很相似，但有一点不同，protected 成员在继承的派生类中仍然可以访问。比如：
The protected modifier behaves much like the private modifier, but with one difference, protected members are still accessible in inherited derived classes. for example:

```ts
class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch(): string {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
const howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
```

注意，我们不能在 Person 类外使用 name，但是我们仍然可以通过 Employee 类的实例方法访问，因为 Employee 是由 Person 派生而来的。
Note that we cannot use the name outside of the Person class, but we can still access it through the instance methods of the Employee class, since Employee is derived from Person.

## 模块
## module

uts 支持将程序拆分为可按需导入的单独模块，模块中可以导入和导出各种类型的变量，如函数，字符串，数字，布尔值，类等。
uts supports splitting programs into separate modules that can be imported on demand, where various types of variables can be imported and exported, such as functions, strings, numbers, booleans, classes, etc.

### 导出
### export

export 语句可以将一个文件中的函数，类等导出。比如：
The export statement can export functions, classes, etc. in a file. for example:

```ts
export const name: string = "square";
export function draw() {}
export default class Canvas {} // default 关键词支持默认导出
```

- 导出的函数声明与类声明必须要有名称。
- Exported function declarations and class declarations must have names.
- export 命令可以出现在模块的任何位置，但必需处于模块顶层。
- The export command can appear anywhere in the module, but must be at the top level of the module.
- 在一个文件中，export、import 可以有多个，export default 仅有一个。
- In a file, there can be multiple export and import, but only one export default.
- 通过 export 方式导出，在导入时要加{ }，export default 则不需要。
- Export by export, add { } when importing, export default is not required.

### 导入
### import

import 语句可以将另一个文件中的函数，类等导入到当前文件。比如：
The import statement can import functions, classes, etc. from another file into the current file. for example:

```ts
import { name as name1, draw } from "./canvas.uts" // 支持 as 语法做别名导入
import * as Utils from "./utils.uts" // Test 包含所有 export 的导出
import Canvas from "./canvas.uts" // 对应 export default 的导出
```

示例
Example

```ts
/*-----export [test.js]-----*/
export const name = 'test'
export function test(){
    console.log('test')
}
export default class Test{
    test(){
        console.log('Test.test')
    }
}
```

```ts
import { name } from './test.uts'
import * as testModule from './test.uts'
import Test from './test.uts'
console.log(name)
testModule.test()
const test = new Test()
test.test()
```

## 内置对象和API
## Built-in objects and APIs

uts 有一批内置对象。不管将 uts 编译为 js/kotlin/swfit，这些内置对象都可以跨平台使用。
uts has a collection of built-in objects. Regardless of compiling uts to js/kotlin/swfit, these built-in objects can be used cross-platform.

### console

#### debug
在控制台打印 debug 日志
print debug log in console
```ts
console.debug(msg1, msg2, msg3)
```
#### error
在控制台打印 error 日志
print error log in console
```ts
console.error(msg1, msg2, msg3)
```
#### info
在控制台打印 info 日志
print info log in console
```ts
console.info(msg1, msg2, msg3)
```
#### log
在控制台打印 log 日志
print log in console
```ts
console.log(msg1, msg2, msg3)
```
#### warn
在控制台打印 warn 日志
print warn log in console
```ts
console.warn(msg1, msg2, msg3)
```

### Array

Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。
Array objects are global objects used to construct arrays, which are higher-order objects similar to lists.

#### 实例属性
#### instance properties

#### length

数组中的元素个数
the number of elements in the array

```ts
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);
// expected output: 4
```

#### 实例方法
#### instance methods

#### concat

concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
The concat() method is used to combine two or more arrays. This method does not change the existing array, but returns a new array.

```ts
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

#### copyWithin

copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
The copyWithin() method shallowly copies part of an array to another location in the same array and returns it without changing the length of the original array.

```ts
const array1 = ['a', 'b', 'c', 'd', 'e'];
// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]
// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
```

#### every

every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
The every() method tests whether all elements in an array pass the test of a specified function. It returns a boolean value.

```ts
const isBelowThreshold = (currentValue:number):boolean => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// expected output: true
```

#### fill

fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
The fill() method fills all elements in an array from the start index to the end index with a fixed value. Termination index is not included.

```ts
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

```
#### filter

filter() 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。
The filter() method creates a new array containing all the elements of the test implemented by the provided function.

```ts
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word:string):boolean => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```
#### find

find() 方法返回数组中满足提供的测试函数的第一个元素的值。
The find() method returns the value of the first element in the array that satisfies the provided test function.

```ts
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element:number):boolean => element > 10);

console.log(found);
// expected output: 12

```

#### findIndex

findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
The findIndex() method returns the index of the first element in the array that satisfies the provided test function. Returns -1 if no corresponding element is found.

```ts
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element:number):boolean => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

```

#### flat

flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
The flat() method recursively traverses the array to a specified depth, and returns all elements combined with the elements in the traversed subarrays into a new array.

```ts
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

#### forEach

forEach() 方法对数组的每个元素执行一次给定的函数。
The forEach() method executes the given function once for each element of the array.

```ts
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"
```

#### includes

includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。
The includes() method is used to determine whether an array contains a specified value. According to the situation, it returns true if it contains, otherwise it returns false.

```ts
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

```

#### indexOf

indexOf() 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
The indexOf() method returns the first index in the array at which a given element can be found, or -1 if it does not exist.

```ts
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

```

#### join

join() 方法将一个数组的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
The join() method joins all elements of an array into a string and returns the string. If the array has only one item, then that item is returned without a delimiter.

```ts
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

```

#### lastIndexOf

lastIndexOf() 方法返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
The lastIndexOf() method returns the index of the last specified element in the array, or -1 if it does not exist. Search forward from the back of the array, starting at fromIndex.

```ts
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

```
#### map

map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
The map() method creates a new array consisting of the return value of calling the provided function once for each element in the original array.

```ts
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x:number):number => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```

#### pop

pop() 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。
The pop() method removes the last element from the array and returns the value of that element. This method changes the length of the array.

```ts
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

```

#### push

push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
The push() method adds one or more elements to the end of an array and returns the new length of the array.

```ts
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

```

#### reduce

reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
The reduce() method executes a reducer function you provide in order for each element in the array, each run of the reducer passes in the result of the previous element's calculation as a parameter, and finally aggregates its results into a single return value.

第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被作为初始值 initialValue，迭代器将从第二个元素开始执行（索引为 1 而不是 0）。
When the callback function is executed for the first time, there is no "last calculation result". If you want the callback function to execute from the element at index 0 of the array, you need to pass the initial value. Otherwise, the element at index 0 of the array will be used as initialValue, and the iterator will be executed from the second element (index 1 instead of 0).

```ts
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue:number, currentValue:number):number => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

```

#### shift

shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
The shift() method removes the first element from the array and returns the value of that element. This method changes the length of the array.

```ts
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

```

#### slice

slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
The slice() method returns a new array object that is a shallow copy of the original array determined by begin and end (including begin, but not end). The original array will not be altered.

```ts
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

#### some

some() 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值。
The some() method tests whether at least 1 element in the array passes the provided function test. It returns a value of type Boolean.

```ts
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element:number):boolean=> element % 2 == 0;

console.log(array.some(even));
// expected output: true
```

#### sort

sort() 方法对数组的元素进行排序，并返回数组。
The sort() method sorts the elements of an array and returns the array.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

#### splice

splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
The splice() method modifies an array by removing or replacing existing elements or adding new elements in place, and returns the modified contents as an array. This method changes the original array.

```ts
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

#### unshift

unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度（该方法修改原有数组）。
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array (this method modifies the original array).

```ts
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```

#### 常见操作
#### Common operations

- 创建数组
- create array
```ts
const fruits = ['Apple', 'Banana']
console.log(fruits.length)
```
- 通过索引访问数组元素
- access array elements by index
```ts
const first = fruits[0]
// Apple
const last = fruits[fruits.length - 1]
// Banana
```
- 遍历数组
- traverse the array
```ts
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1
```
- 添加元素到数组的末尾
- add element to the end of the array
```ts
const newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
```
- 删除数组末尾的元素
- delete the element at the end of the array
```ts
const last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
```
- 删除数组头部元素
- delete the head element of the array
```ts
const first = fruits.shift() // remove Apple from the front
// ["Banana"]
```
- 添加元素到数组的头部
- add elements to the head of the array
```ts
const newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
```
- 找出某个元素在数组中的索引
- find the index of an element in an array
```ts
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]
const pos = fruits.indexOf('Banana')
// 1
```
- 通过索引删除某个元素
- delete an element by index
```ts
const removedItem = fruits.splice(pos, 1) // this is how to remove an item
// ["Strawberry", "Mango"]
```
- 从一个索引位置删除多个元素
- remove multiple elements from an index position
```ts
const vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]
const pos = 1
const n = 2
const removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.
console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)
console.log(removedItems)
// ["Turnip", "Radish"]
```
- 复制一个数组
- copy an array
```ts
const shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]
```
#### 访问数组元素
#### access array elements

数组的索引是从 0 开始的，第一个元素的索引为 0，最后一个元素的索引等于该数组的 长度 减 1。
The index of the array is 0-based, the index of the first element is 0, and the index of the last element is equal to the length of the array minus 1.

如果指定的索引是一个无效值，将会抛出 IndexOutOfBoundsException 异常
If the specified index is an invalid value, an IndexOutOfBoundsException will be thrown

下面的写法是错误的，运行时会抛出 SyntaxError 异常，而原因则是使用了非法的属性名：
The following writing is wrong, and a SyntaxError exception will be thrown at runtime because of the use of an illegal property name:

```ts
console.log(arr.0) // a syntax error
```


### Date

创建一个 Date 实例，该实例呈现时间中的某个时刻。Date 对象则基于 Unix Time Stamp，即自 1970 年 1 月 1 日（UTC）起经过的毫秒数。
Create a Date instance that renders a moment in time. Date objects are based on the Unix Time Stamp, which is the number of milliseconds elapsed since January 1, 1970 (UTC).

#### 语法
#### grammar

```ts
new Date();
new Date(value);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

- 如果没有输入任何参数，则 Date 的构造器会依据系统设置的当前时间来创建一个 Date 对象。
- If no parameters are entered, the Date constructor will create a Date object based on the current time set by the system.
- 如果提供了至少两个参数，其余的参数均会默认设置为 1（如果没有指定 day 参数）或者 0（如果没有指定 day 以外的参数）。
- If at least two parameters are provided, the remaining parameters will default to 1 (if no day parameter is specified) or 0 (if no parameter other than day is specified).
- uts 的时间由世界标准时间（UTC）1970 年 1 月 1 日开始，用毫秒计时，一天由 86,400,000 毫秒组成。Date 对象的范围是 -100,000,000 天至 100,000,000 天（等效的毫秒值）。
- The time in uts is measured in milliseconds from January 1, 1970 UTC, and a day consists of 86,400,000 milliseconds. Date objects range from -100,000,000 days to 100,000,000 days (equivalent to millisecond values).
- 
#### 静态方法
#### now

表示自 UNIX 纪元开始（1970 年 1 月 1 日 00:00:00 (UTC)）到当前时间的毫秒数。
Represents the number of milliseconds since the beginning of the UNIX epoch (January 1, 1970 00:00:00 (UTC)) to the current time.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
// this example takes 2 seconds to run
const start = Date.now()
console.log('starting timer...')
// expected output: starting timer...
setTimeout(() => {
  const millis = Date.now() - start
  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`)
  // expected output: seconds elapsed = 2
}, 2000)
```

#### 实例方法
#### instance methods

#### getDate

根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从 1--31）。
Returns the day of the month (from 1--31) for a specified date object according to local time.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

#### getDay

根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。对于某个月中的第几天
Returns the day of the week for a specific date, according to local time, with 0 for Sunday. for the day of the month

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

#### getFullYear

根据本地时间返回指定日期的年份。
Returns the year of the specified date according to local time.

#### getHours

根据本地时间，返回一个指定的日期对象的小时。
Returns the hour of a specified date object according to local time.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

#### getMilliseconds

根据本地时间，返回一个指定的日期对象的毫秒数。
Returns the number of milliseconds for a specified date object according to local time.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

#### getMinutes

根据本地时间，返回一个指定的日期对象的分钟数。
Returns the number of minutes in a specified date object according to local time.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

#### getMonth

指定的日期对象的月份，为基于 0 的值（0 表示一年中的第一月）。
The month of the specified date object, as a 0-based value (0 represents the first month of the year).

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

#### getSeconds

根据本地时间，返回一个指定的日期对象的秒数。
Returns the number of seconds in a specified date object according to local time.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

#### getTime

返回一个时间的格林威治时间数值。
Returns the GMT value of a time.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

#### setDate

根据本地时间来指定一个日期对象的天数。
Specifies the number of days in a date object according to local time.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

#### setFullYear

根据本地时间为一个日期对象设置年份。
Sets the year for a date object based on local time.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

#### setHours

根据本地时间为一个日期对象设置小时数，返回从 1970-01-01 00:00:00 UTC 到更新后的 日期 对象实例所表示时间的毫秒数。
Sets the hour for a Date object according to local time, returning the number of milliseconds from 1970-01-01 00:00:00 UTC to the time represented by the updated Date object instance.

#### setMilliseconds

根据本地时间设置一个日期对象的豪秒数。
Sets the milliseconds of a date object according to local time.

#### setMinutes

根据本地时间为一个日期对象设置分钟数。
Sets the minutes for a date object according to local time.

#### setMonth

根据本地时间为一个日期对象设置月份。
Sets the month for a date object according to local time.

#### setSeconds

根据本地时间设置一个日期对象的秒数。
Sets the seconds for a date object according to local time.

#### setTime

以一个表示从 1970-1-1 00:00:00 UTC 计时的毫秒数为来为 Date 对象设置时间。
Sets the time for a Date object as a number of milliseconds representing the time since 1970-1-1 00:00:00 UTC.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

### Error

当运行时错误产生时，Error 对象会被抛出。Error 对象也可用于用户自定义的异常的基础对象。
The Error object is thrown when a runtime error occurs. Error objects can also be used as base objects for user-defined exceptions.

#### 实例属性
#### instance properties

#### message
错误消息。对于用户创建的 Error 对象，这是构造函数的第一个参数提供的字符串。
wrong information. For user-created Error objects, this is the string provided as the first parameter of the constructor.

#### 示例
#### Example

```ts
try {
  throw new Error('Whoops!')
} catch (e) {
  console.error(e.message)
}
```

### JSON

#### 静态方法
#### static methods

#### parse

JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 UTSJSONObject。
The JSON.parse() method is used to parse a JSON string and construct a UTSJSONObject described by the string.

```ts
const json = `{"result":true, "count":42}`;
const obj = JSON.parse(json);

console.log(obj["count"]);
// expected output: 42

console.log(obj["result"]);
// expected output: true
```

**注意**
**Notice**

- JSON.parse 解析出来的对象，目前仅支持使用方括号[]访问
- The object parsed by JSON.parse currently only supports access using square brackets []

#### stringify

JSON.stringify() 方法将一个 uts 对象或值转换为 JSON 字符串
The JSON.stringify() method converts a uts object or value to a JSON string

```ts
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([3, 'false', boolean]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""

```
### Map

Map 对象保存键值对。任何值（对象或者基本类型）都可以作为一个键或一个值。
Map objects hold key-value pairs. Any value (object or primitive type) can be a key or a value.

#### 实例属性
#### instance properties

#### size

返回 Map 对象的成员数量。
Returns the number of members of the Map object.

```ts
const map1 = new Map<string,string>();
map1.set('a', 'alpha');
map1.set('b', 'beta');
map1.set('g', 'gamma');
console.log(map1.size);
// expected output: 3

```

#### 实例方法
#### instance methods

#### clear

移除 Map 对象中的所有元素。
Removes all elements from the Map object.

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'baz');
map1.set(1, 'foo');
console.log(map1.size);
// expected output: 2
map1.clear();
console.log(map1.size);
// expected output: 0
```

##### delete

用于移除 Map 对象中指定的元素。
Used to remove the specified element in the Map object.

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');
console.log(map1.delete('bar'));
// expected result: true
// (true indicates successful removal)
console.log(map1.has('bar'));
// expected result: false
```

#### get

返回某个 Map 对象中的一个指定元素。
Returns a specified element in a Map object.

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// expected output: "foo"
```

#### has

返回一个布尔值，用来表明 Map 中是否存在指定元素。
Returns a boolean value indicating whether the specified element exists in the Map.

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');

console.log(map1.has('bar'));
// expected output: true

console.log(map1.has('baz'));
// expected output: false
```

#### set

添加或更新一个指定了键（key）和值（value）的（新）键值对。
Adds or updates a (new) key-value pair specifying a key and a value.

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// expected output: "foo"

console.log(map1.get('baz'));
// expected output: undefined
```

### Math

Math 是一个内置对象，它拥有一些数学常数属性和数学函数方法。
Math is a built-in object that has some properties of mathematical constants and methods of mathematical functions.

#### 实例属性
#### instance attributes

#### E

Math.E 属性表示自然对数的底数（或称为基数），e，约等于 2.718。
The Math.E property represents the base (or base) of natural logarithms, e, approximately equal to 2.718.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
function getNapier():number {
  return Math.E;
}
console.log(getNapier());
// expected output: 2.718281828459045
```

#### LN10

Math.LN10 属性表示 10 的自然对数，约为 2.302。
The Math.LN10 property represents the natural logarithm of 10, approximately 2.302.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
function getNatLog10():number {
  return Math.LN10;
}
console.log(getNatLog10());
// expected output: 2.302585092994046
```

#### LN2

Math.LN2 属性表示 2 的自然对数，约为 0.693。
The Math.LN2 property represents the natural logarithm of 2, which is approximately 0.693.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
function getNatLog2():number {
  return Math.LN2;
}
console.log(getNatLog2());
// expected output: 0.6931471805599453
```

#### LOG10E

Math.LOG10E 属性表示以 10 为底数，e 的对数，约为 0.434。
The Math.LOG10E property represents the base 10 logarithm of e, approximately 0.434.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
function getLog10e():number {
  return Math.LOG10E;
}
console.log(getLog10e());
// expected output: 0.4342944819032518
```

#### LOG2E

Math.LOG2E 属性表示以 2 为底数，e 的对数，约为 1.442。
The Math.LOG2E property represents the base 2 logarithm of e, approximately 1.442.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
function getLog2e():number {
  return Math.LOG2E;
}
console.log(getLog2e());
// expected output: 1.4426950408889634
```

#### PI

Math.PI 表示一个圆的周长与直径的比例，约为 3.14159。
Math.PI represents the ratio of a circle's circumference to its diameter, which is approximately 3.14159.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
function calculateCircumference (radius:number):number {
  return 2 * Math.PI * radius;
}
console.log(calculateCircumference(1));
// expected output: 6.283185307179586
```

#### SQRT1_2

Math.SQRT1_2 属性表示 1/2 的平方根，约为 0.707。
The Math.SQRT1_2 property represents the square root of 1/2, which is approximately 0.707.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
function getRoot1_2():number {
  return Math.SQRT1_2;
}
console.log(getRoot1_2());
// expected output: 0.7071067811865476
```

#### SQRT2

Math.SQRT2 属性表示 2 的平方根，约为 1.414。
The Math.SQRT2 property represents the square root of 2, approximately 1.414.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
function getRoot2():number {
  return Math.SQRT2;
}
console.log(getRoot2());
// expected output: 1.4142135623730951
```
#### 实例方法
#### Instance Methods

#### abs

Math.abs(x) 函数返回一个数字的绝对值。
The Math.abs(x) function returns the absolute value of a number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
function difference(a:number, b:number):number {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// expected output: 2

console.log(difference(5, 3));
// expected output: 2

console.log(difference(1.23456, 7.89012));
// expected output: 6.6555599999999995
```

#### acos

Math.acos() 返回一个数的反余弦值（单位为弧度）。
Math.acos() Returns the arccosine of a number in radians.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.acos(-1));
// expected output: 3.141592653589793

console.log(Math.acos(0));
// expected output: 1.5707963267948966

console.log(Math.acos(1));
// expected output: 0
```

#### acosh

Math.acosh() 函数返回一个数的反双曲余弦值。
The Math.acosh() function returns the inverse hyperbolic cosine of a number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.acosh(1));
// expected output: 0

console.log(Math.acosh(2));
// expected output: 1.3169578969248166

console.log(Math.acosh(2.5));
// expected output: 1.566799236972411
```

#### asin

Math.asin() 方法返回一个数值的反正弦（单位为弧度）。
The Math.asin() method returns the arcsine of a number in radians.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.asin(-1));
// expected output: -1.5707963267948966 (-pi/2)

console.log(Math.asin(0));
// expected output: 0

console.log(Math.asin(0.5));
// expected output: 0.5235987755982989

console.log(Math.asin(1));
// expected output: 1.570796326794897
```

#### asinh

Math.asinh() 返回一个数值的反双曲正弦值。
Math.asinh() Returns the inverse hyperbolic sine of a number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.asinh(1));
// expected output: 0.881373587019543

console.log(Math.asinh(0));
// expected output: 0

console.log(Math.asinh(-1));
// expected output: -0.881373587019543

console.log(Math.asinh(2));
// expected output: 1.4436354751788103
```

#### atan

Math.atan() 函数返回一个数值的反正切（以弧度为单位）。
The Math.atan() function returns the arctangent of a number in radians.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.atan(1));
// expected output: 0.7853981633974483

console.log(Math.atan(0));
// expected output: 0
```

#### atan2

Math.atan2() 返回从原点 (0,0) 到 (x,y) 点的线段与 x 轴正方向之间的平面角度 (弧度值)，也就是 Math.atan2(y,x)。
Math.atan2() returns the plane angle (in radians) between the line segment from the origin (0,0) to the point (x,y) and the positive x-axis, that is, Math.atan2(y,x).

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.atan2(90, 15));
// expected output: 1.4056476493802699

console.log(Math.atan2(15, 90));
// expected output: 0.16514867741462683
```

#### atanh

Math.atanh() 函数返回一个数值反双曲正切值。
The Math.atanh() function returns a numeric inverse hyperbolic tangent.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.atanh(0));
// expected output: 0

console.log(Math.atanh(0.5));
// expected output: 0.5493061443340548
```

#### cbrt

Math.cbrt() 函数返回任意数字的立方根。
The Math.cbrt() function returns the cube root of any number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.cbrt(-1));
// expected output: -1

console.log(Math.cbrt(0));
// expected output: 0

console.log(Math.cbrt(1));
// expected output: 1

console.log(Math.cbrt(2));
// expected output: 1.2599210498948732
```

#### ceil

Math.ceil() 函数总是四舍五入并返回大于等于给定数字的最小整数。
The Math.ceil() function always rounds up and returns the smallest integer greater than or equal to the given number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.ceil(0.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7

```

#### clz32

Math.clz32() 函数返回一个数字在转换成 32 无符号整形数字的二进制形式后，开头的 0 的个数。
The Math.clz32() function returns the number of leading zeros after a number is converted to the binary form of 32 unsigned integers.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.clz32(1));
// expected output: 31

console.log(Math.clz32(1000));
// expected output: 22

console.log(Math.clz32());
// expected output: 32

console.log(Math.clz32(3.5));
// expected output: 30

```

#### cos

Math.cos() 函数返回一个数值的余弦值。
The Math.cos() function returns the cosine of a number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.cos(0));
// expected output: 1

console.log(Math.cos(1));
// expected output: 0.5403023058681398
```

#### cosh

Math.cosh() 函数返回数值的双曲余弦函数。
The Math.cosh() function returns the hyperbolic cosine function of a number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.cosh(0));
// expected output: 1

console.log(Math.cosh(1));
// expected output: 1.5430806348152437

console.log(Math.cosh(-1));
// expected output: 1.5430806348152437
```

#### exp

Math.exp() 函数返回 e^x，x 表示参数，e 是欧拉常数（Euler's constant），自然对数的底数。
The Math.exp() function returns e^x, x represents the parameter, and e is Euler's constant (Euler's constant), the base of natural logarithms.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.exp(-1));
// expected output: 0.36787944117144233

console.log(Math.exp(0));
// expected output: 1

console.log(Math.exp(1));
// expected output: 2.718281828459045
```

#### expm1

Math.expm1() 函数返回 E^x - 1, 其中 x 是该函数的参数，E 是自然对数的底数 2.718281828459045。
The Math.expm1() function returns E^x - 1, where x is the argument to the function and E is the base of the natural logarithm 2.718281828459045.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.expm1(1));
// expected output: 1.7182818284590453

console.log(Math.expm1(-38));
// expected output: -1
```

#### floor

Math.floor() 函数总是返回小于等于一个给定数字的最大整数。

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6
```

#### fround

Math.fround() 可以将任意的数字转换为离它最近的单精度浮点数形式的数字。
Math.fround() converts any number to its nearest single-precision floating-point number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.fround(1.5));
// expected output: 1.5

console.log(Math.fround(1.337));
// expected output: 1.3370000123977661
```

#### hypot

Math.hypot() 函数返回所有参数的平方和的平方根。
The Math.hypot() function returns the square root of the sum of squares of all arguments.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.hypot(3, 4));
// expected output: 5

console.log(Math.hypot(5, 12));
// expected output: 13

console.log(Math.hypot(3, 4, 5));
// expected output: 7.0710678118654755

console.log(Math.hypot(-5));
// expected output: 5
```

#### imul

该函数将两个参数分别转换为 32 位整数，相乘后返回 32 位结果。
This function converts the two arguments to 32-bit integers and returns the 32-bit result when multiplied.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.imul(3, 4));
// expected output: 12

console.log(Math.imul(-5, 12));
// expected output: -60
```

#### log

Math.log() 函数返回一个数的自然对数。
The Math.log() function returns the natural logarithm of a number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.log(1));
// expected output: 0

console.log(Math.log(10));
// expected output: 2.302585092994046
```

#### log10

Math.log10() 函数返回一个数字以 10 为底的对数。
The Math.log10() function returns the base 10 logarithm of a number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.log10(10));
// expected output: 1

console.log(Math.log10(100));
// expected output: 2

console.log(Math.log10(1));
// expected output: 0
```

#### log1p

Math.log1p() 函数返回一个数字加 1 后的自然对数 (底为 E), 既log(x+1)。
The Math.log1p() function returns the natural logarithm (base E) of a number plus 1, which is log(x+1).

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.log1p(Math.E-1));
// expected output: 1

console.log(Math.log1p(0));
// expected output: 0
```

#### log2

Math.log2() 函数返回一个数字以 2 为底的对数。
The Math.log2() function returns the base 2 logarithm of a number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.log2(2));
// expected output: 1

console.log(Math.log2(1024));
// expected output: 10

console.log(Math.log2(1));
// expected output: 0
```

#### max

Math.max() 函数返回作为输入参数的最大数字。
The Math.max() function returns the largest number given as an input parameter.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1
```

#### min

Math.min() 函数返回作为输入参数的数字中最小的一个。
The Math.min() function returns the smallest of the numbers given as input parameters.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.min(2, 3, 1));
// expected output: 1

console.log(Math.min(-2, -3, -1));
// expected output: -3
```

#### pow

Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 base^exponent。
The Math.pow() function returns the base (base) raised to the power of the exponent (exponent), ie base^exponent.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.pow(7, 3));
// expected output: 343

console.log(Math.pow(4, 0.5));
// expected output: 2
```

#### random

Math.random() 函数返回一个浮点数，伪随机数在范围从0 到小于1。
The Math.random() function returns a floating-point number, a pseudo-random number in the range from 0 to less than 1.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
function getRandomInt(max:number):number {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// expected output: 0, 1 or 2

console.log(getRandomInt(1));
// expected output: 0

console.log(Math.random());
// expected output: a number from 0 to <1
```

#### round

Math.round() 函数返回一个数字四舍五入后最接近的整数。
The Math.round() function returns a number rounded to the nearest integer.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.round(20.49));
// expected output: 20

console.log(Math.round(20.5));
// expected output: 21

console.log(Math.random(-20.5));
// expected output: -20

console.log(Math.random(-20.51));
// expected output: -21
```

#### sign

Math.sign() 函数返回一个数字的符号，指示数字是正数，负数还是零。
The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative or zero.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.sign(3));
// expected output: 1

console.log(Math.sign(-3));
// expected output: -1

console.log(Math.sign(0));
// expected output: 0
```

#### sin

Math.sin() 函数返回一个数值的正弦值。
The Math.sin() function returns the sine of a number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.sin(0));
// expected output: 0

console.log(Math.sin(1));
// expected output: 0.8414709848078965
```

#### sinh

Math.sinh() 函数返回一个数字 (单位为角度) 的双曲正弦值。
The Math.sinh() function returns the hyperbolic sine of a number (in degrees).

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.sinh(0));
// expected output: 0

console.log(Math.sinh(1));
// expected output: 1.1752011936438014
```

#### sqrt

Math.sqrt() 函数返回一个数的平方根。
The Math.sqrt() function returns the square root of a number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
function calcHypotenuse(a:number, b:number):number {
  return (Math.sqrt((a * a) + (b * b)));
}

console.log(calcHypotenuse(3, 4));
// expected output: 5

console.log(calcHypotenuse(5, 12));
// expected output: 13

console.log(calcHypotenuse(0, 0));
// expected output: 0
```

#### tan

Math.tan() 方法返回一个数值的正切值。
The Math.tan() method returns the tangent of a number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.tan(0));
// expected output: 0

console.log(Math.tan(1));
// expected output: 1.5574077246549023
```

#### tanh

Math.tanh() 函数将会返回一个数的双曲正切函数值。
The Math.tanh() function will return the value of the hyperbolic tangent of a number.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.tanh(-1));
// Expected output: -0.7615941559557649

console.log(Math.tanh(0));
// Expected output: 0

console.log(Math.tanh(1));
// Expected output: 0.7615941559557649
```

#### trunc

Math.trunc() 方法会将数字的小数部分去掉，只保留整数部分。
The Math.trunc() method will remove the decimal part of the number and keep only the integer part.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(Math.trunc(13.37));
// Expected output: 13

console.log(Math.trunc(42.84));
// Expected output: 42

console.log(Math.trunc(0.123));
// Expected output: 0
```

### Number

Number 对象是经过封装的能让你处理数字值的对象。
Number objects are encapsulated objects that allow you to work with numeric values.

#### 实例方法
#### instance methods

#### toFixed

toFixed() 方法使用定点表示法来格式化一个数值。
The toFixed() method formats a number using fixed-point notation.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
function financial(x: Number): String {
  return x.toFixed(2);
}
console.log(financial(123.456));
// expected output: "123.46"
console.log(financial(0.004));
// expected output: "0.00"
```

### Set

Set 对象是值的集合，你可以按照插入的顺序迭代它的元素。Set 中的元素只会出现一次，即 Set 中的元素是唯一的。
A Set object is a collection of values, and you can iterate over its elements in the order they were inserted. The elements in the Set will only appear once, that is, the elements in the Set are unique.


#### 实例属性
#### instance properties

#### size

返回 Set 对象中元素的个数。
Returns the number of elements in the Set object.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const set1 = new Set<Any>();

set1.add(42);
set1.add('forty two');
set1.add('forty two');

console.log(set1.size);
// expected output: 2
```

#### 实例方法
#### instance methods

#### add

add() 方法用来向一个 Set 对象的末尾添加一个指定的值。
The add() method is used to add a specified value to the end of a Set object.

```ts
const set1 = new Set<number>();
set1.add(42);
set1.add(42);
set1.add(13);
set1.forEach((item)=>{
  console.log(item);
  // expected output: 42
  // expected output: 13  
})
```
#### clear

clear() 方法用来清空一个 Set 对象中的所有元素。
The clear() method is used to clear all elements in a Set object.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const set1 = new Set<any>();
set1.add(1);
set1.add('foo');
console.log(set1.size);
// expected output: 2
set1.clear();
console.log(set1.size);
// expected output: 0
```

##### delete

delete() 方法可以从一个 Set 对象中删除指定的元素。
The delete() method deletes the specified element from a Set object.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');
console.log(map1.delete('bar'));
// expected result: true
// (true indicates successful removal)
console.log(map1.has('bar'));
// expected result: false
```

#### forEach

forEach 方法会根据集合中元素的插入顺序，依次执行提供的回调函数。
The forEach method executes the provided callback function in sequence according to the insertion order of the elements in the collection.

```ts
const set1 = new Set<number>([42, 13]);
set1.forEach((item)=>{
  console.log(item);
  // expected output: 42
  // expected output: 13
})
```

#### has

has() 方法返回一个布尔值来指示对应的值 value 是否存在 Set 对象中。
The has() method returns a boolean value indicating whether the corresponding value value exists in the Set object.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const set1 = new Set<number>([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false
```

### String

String 全局对象是一个用于字符串或一个字符序列的构造函数。
The String global object is a constructor for strings or a sequence of characters.

字符串字面量采取以下形式：
String literals take the following form:

```ts
'string text'
"string text"
"中文/汉语"
"español"
"English "
"हिन्दी"
"العربية"
"português"
"বাংলা"
"русский"
"日本語"
"ਪੰਜਾਬੀ"
"한국어"
```

#### 实例属性
#### instance properties

#### length
length 属性表示一个字符串的长度。
The length property represents the length of a string.
```ts
const x = "Mozilla";
const empty = "";

console.log("Mozilla is " + x.length + " code units long");
/* "Mozilla is 7 code units long" */

console.log("The empty string is has a length of " + empty.length);
/* "The empty string is has a length of 0" */
```

#### 实例方法
#### instance methods

#### at

at() 方法接受一个整数值，并返回一个新的 String，该字符串由位于指定偏移量处的单个 UTF-16 码元组成。该方法允许正整数和负整数。负整数从字符串中的最后一个字符开始倒数。
The at() method accepts an integer value and returns a new String consisting of a single UTF-16 code unit at the specified offset. This method allows positive and negative integers. Negative integers count down from the last character in the string.

```ts
const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// expected output: "Using an index of 5 the character returned is u"
index = -4;
console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// expected output: "Using an index of -4 the character returned is d"
```

#### charAt

charAt() 方法从一个字符串中返回指定的字符。
The charAt() method returns the specified character from a string.

```ts
const anyString = "Brave new world";

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
// The character at index 0 is 'B'
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
// The character at index 1 is 'r'
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
// The character at index 2 is 'a'
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
// The character at index 3 is 'v'
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
// The character at index 4 is 'e'
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
// The character at index 999 is ''
```

#### charCodeAt

charCodeAt() 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元
The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index

```ts
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"
```

#### concat

concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
The concat() method concatenates one or more strings with the original string to form a new string and returns it.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.
```

#### endsWith

endsWith() 方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。
The endsWith() method is used to judge whether the current string "ends" with another given substring, and returns true or false according to the judgment result.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!'));
// expected output: true
console.log(str1.endsWith('best', 17));
// expected output: true
const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));
// expected output: false
```

#### includes

includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
The includes() method is used to determine whether a string is included in another string, and returns true or false according to the situation.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false
```
#### indexOf

indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。
The indexOf() method returns the index of the first occurrence of the specified value in the String object on which it was called, searching from fromIndex. Returns -1 if the value is not found.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"

```
#### padEnd

padEnd() 方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。
The padEnd() method pads the current string with a string (repeatedly if necessary), and returns a string of the specified length after padding. Padding starts from the end (right side) of the current string.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const str1 = 'Breaded Mushrooms';
console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"
const str2 = '200';
console.log(str2.padEnd(5));
// expected output: "200  "
```
#### padStart

padStart() 方法用另一个字符串填充当前字符串 (如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。
The padStart() method pads the current string with another string (repeated as many times as necessary) so that the resulting string reaches the given length. Padding starts from the left of the current string.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const str1 = '5';
console.log(str1.padStart(2, '0'));
// expected output: "05"
```
#### repeat

repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。
repeat() constructs and returns a new string containing the specified number of copies of the string concatenated together.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数 count 将会被自动转换成整数。
```

#### replace

replace() 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果pattern是字符串，则仅替换第一个匹配项。原字符串不会改变。
The replace() method returns a new string with some or all pattern matches replaced by the replacement value. The pattern can be a string or a regular expression, and the replacement value can be a string or a callback function to be called for each match. If pattern is a string, only the first match is replaced. The original string will not be changed.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

```
#### search

search() 方法执行正则表达式和 String 对象之间的一个搜索匹配。
The search() method performs a search match between the regular expression and the String object.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
// expected output: 43
console.log(paragraph[paragraph.search(regex)]);
// expected output: "."
```
#### slice

slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。
The slice() method extracts part of a string and returns a new string without changing the original string.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));
// expected output: "the lazy dog."
console.log(str.slice(4, 19));
// expected output: "quick brown fox"
```

#### split

split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。
The split() method splits a String object into an array of substrings using the specified delimiter string, and uses a specified split string to determine the position of each split.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"
const chars = str.split('');
console.log(chars[8]);
// expected output: "k"
```
#### toLowerCase

toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。
toLowerCase() converts the string value that calls this method to lowercase and returns it.

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
console.log('中文简体 zh-CN || zh-Hans'.toLowerCase());
// 中文简体 zh-cn || zh-hans
// Simplified Chinese zh-cn || zh-hans
​console.log( "ALPHABET".toLowerCase() );
// "alphabet"
```
#### toUpperCase

toUpperCase() 方法将调用该方法的字符串转为大写形式并返回（如果调用该方法的值不是字符串类型会被强制转换）。
The toUpperCase() method converts the string that calls this method to uppercase and returns it (if the method is called with a value other than a string, it will be coerced).

**平台差异说明**
**Platform Difference Description**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```

### 定时器
### Timer

#### setTimeout
设定一个定时器。在定时到期以后执行注册的回调函数
Set a timer. Execute the registered callback function after the timer expires
```ts
setTimeout(() => {
  console.log("Delayed for 1 second.")
}, 1000)
```
#### clearTimeout
取消由 setTimeout 设置的定时器。
Cancels the timer set by setTimeout.
```ts
const timer = setTimeout(() => {
  console.log("Delayed for 1 second.")
}, 1000)
clearTimeout(timer)
```
#### setInterval
设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数
Set a timer. Execute the registered callback function according to the specified period (in milliseconds)
```ts
setInterval(() => {
  console.log(Date.now())
}, 1000)
```
#### clearInterval
取消由 setInterval 设置的定时器。
Cancels the timer set by setInterval.
```ts
const timer = setInterval(() => {
  console.log(Date.now())
}, 1000)
clearInterval(timer)
```

## 关键词
## Key words

- `as` 
    * 用于类型转换。
    * is used for type conversion.
    * 为导入指定一个别名
    * Specify an alias for the import
- `break` 
    * 中止当前循环，switch语句，并把程序控制流转到紧接着被中止语句后面的语句。
    * Aborts the current loop, switch statement, and transfers program control to the statement immediately following the aborted statement.
- `case` 
    * 与 `switch` 搭配使用。
    * Used with `switch`.
- `catch` 
    * 与 `try` 搭配使用，捕获程序异常。
    * Use with `try` to catch program exceptions.
- `class` 
    * 声明创建一个新类。
    * declares to create a new class.
- `const` 
    * 声明一个常量，不能重新赋值。
    * declares a constant that cannot be reassigned.
- `continue` 
    * 声明终止当前循环或标记循环的当前迭代中的语句执行，并在下一次迭代时继续执行循环。
    * The statement terminates the execution of statements in the current loop or marks the current iteration of the loop, and continues execution of the loop on the next iteration.
- `debugger` 
    * 调用任何可用的调试功能，例如设置断点。 如果没有调试功能可用，则此语句不起作用。
    * Call any available debugging functions, such as setting breakpoints. This statement has no effect if no debugging functionality is available.
- `default` 
    * 与 `switch` 搭配，匹配不存在时做的事情，也可以用于 `export` 语句。
    * Pairs with `switch` to match what to do if it doesn't exist, and can also be used in `export` statements.
- `delete` 
    * 用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。（目前仅支持 `Javascript` 平台）
    * Used to delete a property of the object; if there is no reference to this property, it will eventually be released. (Currently only supports `Javascript` platform)
- `do` 
    * 创建一个执行指定语句的循环，直到condition值为 false。在执行statement 后检测condition，所以指定的statement至少执行一次。
    * Create a loop that executes the specified statement until the condition is false. The condition is checked after executing the statement, so the specified statement is executed at least once.
- `else` 
    * 与 `if` 搭配使用。
    * Used with `if`.
- `export` 
    * 用于模块导出。
    * for module export.
- `extends` 
    * 用于 `class` 继承。
    * for `class` inheritance.
- `finally` 
    * 与 `try-catch` 搭配使用。
    * Use with `try-catch`.
- `for` 
    * 创建一个循环，它包含了三个可选的表达式，这三个表达式被包围在圆括号之中，使用分号分隔，后跟一个用于在循环中执行的语句（通常是一个块语句）。
    * Creates a loop consisting of three optional expressions enclosed in parentheses, separated by semicolons, followed by a statement to execute in the loop (usually a block statement ).
- `function` 
    * 声明定义一个具有指定参数的函数。
    * The declaration defines a function with the specified parameters.
- `if` 
    * 当指定条件为真，if 语句会执行一段语句。如果条件为假，则执行另一段语句。
    * When the specified condition is true, the if statement will execute a statement. If the condition is false, execute another statement.
- `import` 
    * 用于导入由另一个模块导出的绑定。
    * is used to import bindings exported by another module.
- `in` 
    * 可在 for 循环中迭代对象。
    * Objects can be iterated over in a for loop.
- `instanceof` 
    * 检测一个值具有指定类型。
    * Checks that a value has the specified type.
- `new` 
    * 创建一个 `class` 实例。
    * Create a `class` instance.
- `return` 
    * 终止函数的执行，并返回一个指定的值给函数调用者。
    * Terminate the execution of the function and return a specified value to the function caller.
- `super` 
    * 用于访问和调用一个对象的父对象上的函数。
    * Used to access and call functions on an object's parent.
- `switch` 
    * 评估一个表达式，将表达式的值与case子句匹配，并执行与该情况相关联的语句。
    * Evaluates an expression, matches the value of the expression to a case clause, and executes the statement associated with that case.
- `this` 
    * 引用当前接收者。
    * Refers to the current recipient.
- `throw` 
    * 抛出一个异常。
    * throws an exception.
- `try` ]
    * 捕获一个异常。
    * Catch an exception.
- `typeof` 
    * 返回一个字符串，表示未经计算的操作数的类型。（目前仅支持 `Javascript` 平台）
    * Returns a string representing the type of the unevaluated operand. (Currently only supports `Javascript` platform)
- `var` 
    * 声明一个变量，不建议使用。
    * Declare a variable, deprecated.
- `void` 
    * 表示函数没有返回结果。
    * Indicates that the function did not return a result.
- `while` 
    * 在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。
    * Under the premise that a conditional expression is true, execute the specified piece of code in a loop, until the expression is not true to end the loop.
- `with` 
    * 扩展一个语句的作用域链。（目前仅支持 `Javascript` 平台）
    * Extends the scope chain of a statement. (Currently only supports `Javascript` platform)
- `yield` 
    * 用来暂停和恢复一个生成器函数。（目前仅支持 `Javascript` 平台）
    * Used to pause and resume a generator function. (Currently only supports `Javascript` platform)
- `enum`
- `implements`
- `interface`
- `let`
- `package`
- `private`
- `protected`
- `public`
- `static`
- `await`
- `abstract`
- `boolean`
- `byte`
- `char`
- `double`
- `final`
- `float`
- `goto`
- `int`
- `long`
- `native`
- `short`
- `synchronized`
- `transient`
- `volatile`

## 操作符
## operator

- `+`
    * 相加运算符 (+) 用于对两个操作数进行相加运算。
    * The addition operator (+) is used to add two operands.
- `+=`
    * 加法赋值操作符 (+=) 将右操作数的值添加到变量，并将结果分配给该变量。两个操作数的类型确定加法赋值运算符的行为。
    * The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable. The types of the two operands determine the behavior of the addition assignment operator.
- `=`
    * 简单赋值操作符 (=) 用于为变量赋值。赋值表达式本身的值为要赋值的值。
    * The simple assignment operator (=) is used to assign values to variables. The value of the assignment expression itself is the value to be assigned.
- `&`
    * 按位与运算符 (&) 在两个操作数对应的二进位都为 1 时，该位的结果值才为 1，否则为 0。
    * The bitwise AND operator (&) returns 1 only when the corresponding binary bits of both operands are 1, and 0 otherwise.
- `&=`
    * 按位与赋值运算符（＆=）表示两个操作数的二进制，对它们进行按位 AND 运算并将结果分配给变量。
    * The bitwise AND assignment operator (&=) represents the binary of two operands, performs a bitwise AND operation on them and assigns the result to a variable.
- `~`
    * 按位非运算符（~），反转操作数的位。
    * The bitwise NOT operator (~) reverses the bits of the operand.
- `|`
    * 按位或运算符（|），如果两位之一为 1 则设置每位为 1。
    * The bitwise OR operator (|) sets each bit to 1 if one of the two bits is 1.
- `|=`
    * 按位或赋值操作符 (|=) 使用二进制表示操作数，进行一次按位或操作并赋值。
    * The bitwise OR assignment operator (|=) uses binary representation of operands, performs a bitwise OR operation and assigns it.
- `^`
    * 按位异或运算符（^），如果两位只有一位为 1 则设置每位为 1。
    * Bitwise XOR operator (^), if only one of the two bits is 1, set each bit to 1.
- `^=`
    * 按位异或赋值操作符 (^=) 使用二进制表示操作数，进行一次按位异或操作并赋值。
    * The bitwise XOR assignment operator (^=) uses the binary representation of the operand, performs a bitwise XOR operation and assigns it.
- `?`
- `--`
    * 自减运算符 (--) 将它的操作数减一，然后返回操作数。
    * The decrement operator (--) decrements its operand by one and returns the operand.
- `/`
    * 除法运算符 (/) 计算了两个操作数的商，左边的数是被除数，右边的是除数。
    * The division operator (/) computes the quotient of two operands, the number on the left is the dividend and the number on the right is the divisor.
- `/=`
- `==`
- `>`
    * 当左边操作数大于右边的时候，大于 (>) 运算符返回true，否则返回false。
    * The greater than (>) operator returns true when the left operand is greater than the right, and false otherwise.
- `>=`
    * 当左边操作数大于等于右边的时候，大于等于 (>=) 运算符返回true，否则返回false。
    * The greater than or equal (>=) operator returns true when the left operand is greater than or equal to the right, and false otherwise.
- `++`
    * 自增运算符 (++) 将其操作数递增（加 1）并返回一个值。
    * The increment operator (++) increments (adds 1) its operand and returns a value.
- `!=`
- `<<`
    * 左移操作符 (<<) 将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零。
    * The left shift operator (<<) moves the first operand to the left by the specified number of digits, the excess digits on the left will be cleared, and the right will be filled with zeros.
- `<<=`
    * 左移赋值运算符 (<<=) 将变量向左移动指定数量的位，并将结果赋值给变量。
    * Left-shift assignment operator (<<=) Shifts a variable to the left by a specified number of bits and assigns the result to the variable.
- `<`
    * 当左边操作数小于右边的时候，小于 (<) 运算符返回true，否则返回false。
    * The less than (<) operator returns true when the left operand is less than the right, false otherwise.
- `<=`
    * 当左边操作数小于等于右边的时候，小于等于 (>=) 运算符返回true，否则返回false。
    * The less than or equal (>=) operator returns true when the left operand is less than or equal to the right, and false otherwise.
- `&&`
    * 逻辑与
    * Logical AND
- `&&=`
- `!`
- `??=`
- `||`
    * 逻辑或。
    * Logical OR.
- `||=`
    * 逻辑或赋值（x ||= y）运算仅在 x 为虚值时赋值。
    * The logical OR assignment (x ||= y) operation only assigns a value if x is imaginary.
- `*`
    * 乘法运算符 (*) 计算操作数的乘积。
    * The multiplication operator (*) computes the product of the operands.
- `*=`
- `??`
- `?.`
    * 可选链运算符（?.）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 运算符的功能类似于 . 链式运算符，不同之处在于，在引用为空 (nullish ) (null) 的情况下不会引起错误。
    * The optional chaining operator (?.) allows reading the value of a property located deep in a chain of connection objects without having to explicitly verify that every reference in the chain is valid. The ?. operator functions like the . chaining operator, except that it does not cause an error if the reference is null (nullish).
- `%`
    * 当一个操作数除以第二个操作数时，取余运算符（％）返回剩余的余数。它与被除数的符号保持一致。
    * The remainder operator (%) returns the remainder remaining when one operand is divided by the second. It is consistent with the sign of the dividend.
- `%=`
- `>>`
    * 右移操作符 (>>) 是将一个操作数按指定移动的位数向右移动，右边移出位被丢弃，左边移出的空位补符号位（最左边那位）。
    * The right shift operator (>>) shifts an operand to the right by the specified number of bits, the bits shifted from the right are discarded, and the empty bits shifted from the left are filled with the sign bit (the leftmost bit).
- `>>=`
    * 右移赋值运算符 (>>=) 将变量向右移动指定数量的位，并将结果赋值给变量。
    * Right-shift assignment operator (>>=) Shifts a variable to the right by a specified number of bits and assigns the result to the variable.
- `===`
- `!==`
- `-`
- `-=`
- `>>>`
    * 无符号右移运算符（>>>）（零填充右移）将第一个操作数向右移动指定（二进制）位数。
    * The unsigned right shift operator (>>>) (zero-padded right shift) shifts the first operand to the right by the specified (binary) number of places.
- `>>>=`


## 开发指南
## Development Guide

- [使用 uts 开发 uni-app 原生插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
- [Use uts to develop uni-app native plugin](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
- [Android平台uts开发指南](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html)
- [Android platform uts development guide](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html)


## 学习资料
## Learning materials

### JavaScript 开发者快速上手 uts
### JavaScript developers quickly get started with uts

JavaScript 是一门非常灵活的编程语言：
JavaScript is a very flexible programming language:

- 没有类型约束，一个变量可能初始化时是字符串，然后又被赋值为数字。
- Without type constraints, a variable may be initialized as a string and then assigned as a number.
- 因为隐式类型转换的存在，使得变量的类型很难在运行前就确定。
- Because of the existence of implicit type conversion, it is difficult to determine the type of the variable before running.
- 基于原型的面向对象编程，原型上的属性或方法可以在运行时被修改。
- Object-oriented programming based on prototype, properties or methods on the prototype can be modified at runtime.

这种灵活性，一方面使得 JavaScript 蓬勃发展，另一方面也让它的代码质量参差不齐，维护成本高。
This flexibility, on the one hand, allows JavaScript to flourish, on the other hand, it also makes its code quality uneven and expensive to maintain.

而 uts 的类型系统，可以在很大程度上弥补 JavaScript 的缺点。
The type system of uts can largely make up for the shortcomings of JavaScript.

**uts 是静态类型**
**uts is a static type**

类型系统按照「类型检查的时机」来分类，可以分为动态类型和静态类型。
The type system is classified according to the "timing of type checking", which can be divided into dynamic type and static type.

动态类型是指在运行时才会进行类型检查，这种语言的类型错误往往会导致运行时错误。JavaScript 是一门解释型语言，没有编译阶段，所以它是动态类型，以下这段代码在运行时才会报错：
Dynamic typing means that type checking happens at runtime, and type errors in this language often lead to runtime errors. JavaScript is an interpreted language, there is no compilation phase, so it is dynamically typed, and the following code will report an error at runtime:

```js
let foo = 1;
foo.split(' ');
// Uncaught TypeError: foo.split is not a function
// 运行时会报错（foo.split 不是一个函数），造成线上 bug
// An error will be reported at runtime (foo.split is not a function), causing an online bug
```

静态类型是指编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。uts 在编译阶段就会进行类型检查，所以 uts 是静态类型，这段 uts 代码在编译阶段就会报错了：
Static typing means that the type of each variable can be determined at the compile stage, and type errors in this language often lead to syntax errors. uts will perform type checking during the compilation phase, so uts is a static type, and this uts code will report an error during the compilation phase:

```ts
let foo = 1;
foo.split(' ');
// Property 'split' does not exist on type 'number'.
// 编译时会报错（数字没有 split 方法），无法通过编译
// An error will be reported when compiling (the number does not have a split method) and cannot be compiled
```

大部分 JavaScript 代码只需要经过少量的修改，增加类型批注，就可以变成 uts 代码，这跟 ts 非常接近。
Most JavaScript code can be turned into uts code with only a few modifications and type annotations, which is very close to ts.

举例：
Example:

```js
// js 求和两个数字
// js sums two numbers
function add(left, right) {
    return left + right;
}
```

补充类型批注后，即可变成 uts 代码
After adding type annotations, it can be turned into uts code

```ts
// uts 求和
// uts sum
function add(left: number, right: number): number {
    return left + right;
}
```

**hello uts**

目前我们可以通过[开发uts插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#_3-%E5%BC%80%E5%8F%91uts%E5%8E%9F%E7%94%9F%E6%8F%92%E4%BB%B6)来学习 uts。
At present, we can develop uts plugin through [Development uts plugin](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#_3-%E5%BC%80%E5%8F%91uts%E5%8E%9F %E7%94%9F%E6%8F%92%E4%BB%B6) to learn uts.


