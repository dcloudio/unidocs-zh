## 介绍
## introduce

**uts 是什么**
**what is uts**

uts 是一门跨平台的、高性能的、强类型的现代编程语言。它可以被翻译为不同平台的原生编程语言。如：JavaScript、Kotlin、Swift 等。
uts is a cross-platform, high-performance, strongly-typed modern programming language. It can be translated into native programming languages of different platforms. Such as: JavaScript, Kotlin, Swift, etc.

uts 采用了与 ts 基本一致的语法规范，支持绝大部分 ES6 API。因此前端工程师可以快速的掌握 uts 开发
uts adopts the same syntax specification as ts and supports most ES6 APIs. Therefore, front-end engineers can quickly master uts development

## 快速入门
## Quick start
### 基本语法
### Basic syntax
#### 声明
#### Declaration

uts 有两种声明方式
There are two ways to declare uts

1. let

    声明一个可重新赋值的变量。语法 `let [变量名] : [类型] = 值;`。
    Declare a reassignable variable. Syntax `let [variable name] : [type] = value;`.

    > 相当于 TypeScript 中的 let，kotlin 中的 var
    > Equivalent to let in TypeScript, var in kotlin

```ts
let str = "hello"; // 声明一个字符串变量
str = "hello world"; // 重新赋值
```

2. const

    声明一个只读常量，只能为其赋值一次。语法 `const [变量名] : [类型] = 值;`。
    Declare a read-only constant that can only be assigned a value once. Syntax `const [variable name] : [type] = value;`.

    > 相当于 TypeScript 中的 const, kotlin 中的 val
    > Equivalent to const in TypeScript, val in kotlin

```ts
const str = "hello"; // 声明一个字符串变量
str = "hello world"; // 报错，不允许重新赋值
```

#### 变量
#### variables

在 uts 中，使用变量名需要遵守一定的规则。
In uts, there are certain rules for using variable names.

-   变量名称可以包含数字和字母。
- Variable names can contain numbers and letters.

-   除了下划线 \_ 外，不能包含其他特殊字符，包括空格。
- Except underscore \_, cannot contain other special characters, including spaces.

-   变量名不能以数字开头。
- Variable names cannot start with a number.

> 注意：与 TypeScript 不同的是，uts 不允许以 $ 开头命名变量
> Note: Unlike TypeScript, uts does not allow variables starting with $

#### 操作符
#### operator

##### 赋值运算符(Assignment operators)
##### Assignment operators

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

##### 比较运算符(Comparison operators)
##### Comparison operators

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

##### 算数运算符(Arithmetic operators)
##### Arithmetic operators

| 运算符   | 范例 | 描述                                                                                                                                     |
| Operator | Example | Description |
| -------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 求余(%)  |      | 二元运算符. 返回相除之后的余数.                                                                                                          |
| Remainder (%) | | Binary operator. Returns the remainder after division. |
| 自增(++) |      | 一元运算符. 将操作数的值加一. 如果放在操作数前面 (++x), 则返回加一后的值; 如果放在操作数后面 (x++), 则返回操作数原值,然后再将操作数加一. |
| Increment (++) | | Unary operator. Increments the value of the operand by one. If placed before the operand (++x), returns the value after adding one; if placed after the operand (x++) , returns the original value of the operand, and then increments the operand by one. |
| 自减(--) |      | 一元运算符. 将操作数的值减一. 前后缀两种用法的返回值类似自增运算符.                                                                      |
| Decrement (--) | | Unary operator. Decrements the value of the operand by one. The return value of the two usages of prefix and suffix is similar to the increment operator. |

##### 位运算符(Bitwise operators)
##### Bitwise operators

| Operator                        | Usage   | Description                                                                                                      |
| ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| 按位与 AND                      | a & b   | 在 a,b 的位表示中，每一个对应的位都为 1 则返回 1， 否则返回 0.                                                   |
| Bitwise AND | a & b | In the bit representation of a,b, if each corresponding bit is 1, it returns 1, otherwise it returns 0. |
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

##### 逻辑运算符(Logical operators)
##### Logical operators

| 运算符       | 范例             | 描述     |
| Operator | Example | Description |
| ------------ | ---------------- | -------- |
| 逻辑与(&&)   | expr1 && expr2   | (逻辑与) |
| logical AND (&&) | expr1 && expr2 | (logical AND) |
| 逻辑或(\|\|) | expr1 \|\| expr2 | (逻辑或) |
| Logical OR (\|\|) | expr1 \|\| expr2 | (Logical OR) |
| 逻辑非(!)    | !expr            | (逻辑非) |
| Logical NOT (!) | !expr | (Logical NOT) |

##### 字符串运算符(String operators)
##### String operators

除了比较操作符，它可以在字符串值中使用，连接操作符（+）连接两个字符串值相连接，返回另一个字符串，它是两个操作数串的结合。
In addition to comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values, returning another string, which is the union of the two operand strings.

```ts
console.log("my " + "string"); // console logs the string "my string".
```

##### 条件（三元）运算符(Conditional operator)
##### Conditional operator

条件运算符是 uts 中唯一需要三个操作数的运算符。运算的结果根据给定条件在两个值中取其一。语法为：
The conditional operator is the only operator in uts that requires three operands. The result of the operation takes one of two values according to a given condition. The syntax is:

`条件 ? 值1 : 值2`
`condition ? value1 : value2`

```ts
const status = age >= 18 ? "adult" : "minor";
```

### 基本类型
### basic type

#### 布尔值（Boolean）
#### Boolean

    有 2 个值分别是：true 和 false。
    There are 2 values: true and false.

#### 数字（Number）
#### Number

    整数或浮点数，例如： 42 或者 3.14159。
    Integer or floating point number, for example: 42 or 3.14159.

#### 字符串（String）
#### String

    字符串是一串表示文本值的字符序列，例如："hello" 。
    A string is a sequence of characters representing a text value, for example: "hello".

#### null

    一个表明 null 值的特殊关键字。
    A special keyword that indicates a null value.

### 字面量
### literal

字面量是由语法表达式定义的常量；或，通过由一定字词组成的语词表达式定义的常量
A literal is a constant defined by a syntactic expression; or, a constant defined by a lexical expression consisting of certain words

在 uts 中，你可以使用各种字面量。这些字面量是按字面意思给出的固定的值，而不是变量
In uts, you can use various literals. These literals are fixed values given literally, not variables

#### 数组字面量
#### Array literals

数组字面值是一个封闭在方括号对 ([]) 中的包含有零个或多个表达式的列表，其中每个表达式代表数组的一个元素。当你使用数组字面值创建一个数组时，该数组将会以指定的值作为其元素进行初始化，而其长度被设定为元素的个数。
An array literal is a list of zero or more expressions enclosed in a pair of square brackets ([]), where each expression represents an element of the array. When you create an array using an array literal, the array is initialized with the specified value as its elements, and its length is set to the number of elements.

下面的示例用 3 个元素生成数组coffees，它的长度是 3。
The following example generates the array coffees with 3 elements and its length is 3.

```ts
const coffees = ["French Roast", "Colombian", "Kona"]
const a=[3]
console.log(a.length) // 1
console.log(a[0]) // 3
```

数组字面值同时也是数组对象。
Array literals are also array objects.

#### 布尔字面量
#### boolean literal

布尔类型有两种字面量：true和false。
The boolean type has two literals: true and false.

#### 数字字面量
#### Numeric literals

数字字面量包括多种基数的整数字面量和以 10 为基数的浮点数字面量
Numeric literals include integer literals in multiple bases and floating-point literals in base 10

##### 整数字面量
##### integer literals

整数可以用十进制（基数为 10）、十六进制（基数为 16）、二进制（基数为 2）表示。
Integers can be represented in decimal (base 10), hexadecimal (base 16), or binary (base 2).

- 十进制整数字面量由一串数字序列组成，且没有前缀 0。如：`0, 117, -345`
- Decimal integer literals consist of a sequence of numbers without a prefix of 0. For example: `0, 117, -345`

- 十六进制整数以 0x（或 0X）开头，可以包含数字（0-9）和字母 a~f 或 A~F。如：`0x1123, 0x00111 , -0xF1A7`
- Hexadecimal integers start with 0x (or 0X) and can contain numbers (0-9) and letters a~f or A~F. Such as: `0x1123, 0x00111 , -0xF1A7`

- 二进制整数以 0b（或 0B）开头，只能包含数字 0 和 1。如：`0b11, 0b0011 , -0b11`
- Binary integers start with 0b (or 0B) and can only contain the digits 0 and 1. For example: `0b11, 0b0011 , -0b11`

##### 浮点数字面量
##### floating point number literals

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

#### RegExp字面量
#### RegExp literal

正则表达式是字符被斜线围成的表达式。下面是一个正则表达式文字的一个例子。
Regular expressions are expressions in which characters are surrounded by slashes. Below is an example of a regular expression literal.

```ts
const re = /ab+c/;
```

#### 字符串字面量
#### String literals

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

##### 模板字符串
##### template string

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
##### 转义特殊字符
##### escape special characters

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

### 控制流程
### Control flow

#### 条件
#### condition

##### If 语句
##### If Statement

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

##### switch 语句
##### switch statement

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

##### 三元表达式
##### Ternary expressions

uts 支持使用三元表达式。一个条件后面会跟一个问号（?），如果条件为 true ，则问号后面的表达式 A 将会执行；表达式 A 后面跟着一个冒号（:），如果条件为 false ，则冒号后面的表达式 B 将会执行。本运算符经常作为 if 语句的简捷形式来使用。
uts supports the use of ternary expressions. A condition is followed by a question mark (?), if the condition is true, the expression A after the question mark will be executed; expression A is followed by a colon (:), if the condition is false, the expression B after the colon is executed will execute. This operator is often used as a shorthand for an if statement.

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

#### 循环
#### loop

##### for

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
##### do...while

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

##### while

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

##### break

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

##### continue

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

#### 异常
#### exception

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

### 函数
### functions

函数是 uts 中的基本组件之一。 一个函数是 uts 过程 — 一组执行任务或计算值的语句。要使用一个函数，你必须将其定义在你希望调用它的作用域内。
Functions are one of the basic components in uts. A function is a uts procedure — a set of statements that perform a task or compute a value. To use a function, you must define it in the scope where you wish to call it.

一个 uts 函数用 function 关键字定义，后面跟着函数名和圆括号。
A uts function is defined with the function keyword followed by the function name and parentheses.

#### 定义函数
#### define function

##### 函数声明
##### function declaration

一个函数定义（也称为函数声明，或函数语句）由一系列的 function 关键字组成，依次为：
A function definition (also called a function declaration, or function statement) consists of a series of function keywords, in order:

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

例如，以下的代码定义了一个简单的 add 函数：
For example, the following code defines a simple add function:

```ts
function add(x: string, y: string): string {
    return x + y;
}
```

##### 函数表达式
##### function expressions

虽然上面的函数声明在语法上是一个语句，但函数也可以由函数表达式创建。这样的函数可以是匿名的；它不必有一个名称。例如，函数 add 也可这样来定义：
Although the function declaration above is syntactically a statement, functions can also be created from function expressions. Such a function can be anonymous; it does not have to have a name. For example, the function add can also be defined like this:

```ts
const add = function (x: string, y: string): string {
    return x + y;
};
```

> 注意：函数表达式不支持使用函数名，比如`const add = function add(){}`是不允许的。
> Note: Function expressions do not support the use of function names, e.g. `const add = function add(){}` is not allowed.

#### 调用函数
#### Call functions

定义一个函数并不会自动的执行它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。调用函数才会以给定的参数真正执行这些动作。例如，一旦你定义了函数 add，你可以如下这样调用它：
Defining a function does not automatically execute it. Defining a function simply gives the function a name and specifies what the function should do when it is called. Only when the function is called will actually perform these actions with the given parameters. For example, once you have defined the function add, you can call it like this:

```ts
add("hello", "world");
```

上述语句通过提供参数 "hello" 和 "world" 来调用函数。函数执行完它的语句会返回值 "hello world"。
The above statement calls the function by providing the parameters "hello" and "world". The function returns the value "hello world" when it finishes executing its statement.

#### 函数作用域
#### function scope

在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的域的内部有定义。相对应的，一个函数可以访问定义在其范围内的任何变量和函数。
Variables defined inside a function cannot be accessed anywhere outside the function, because variables are only defined inside the function's domain. Correspondingly, a function can access any variable and function defined in its scope.

```ts
const hello = "hello";
const world = "world";

function add(): string {
    return hello + world; // 可以访问到 hello 和 world
}
```

##### 嵌套函数
##### Nested functions

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

##### 命名冲突
##### Naming conflict

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

#### 闭包
#### Closure

闭包是 uts 中最强大的特性之一。uts 允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。
Closures are one of the most powerful features in uts. uts allows function nesting, and the inner function can access all variables and functions defined in the outer function, and all variables and functions that the outer function can access.

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
#### 函数参数
#### function parameters

##### 默认参数
##### Default parameters

函数参数可以有默认值，当省略相应的参数时使用默认值。
Function parameters can have default values, which are used when the corresponding parameter is omitted.

```ts
function multiply(a:number, b:number = 1):number {
  return a*b;
}
multiply(5); // 5
```
#### 箭头函数
#### Arrow functions

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

### 类
### kind

uts 中使用关键字 class 声明类
Use the keyword class to declare a class in uts

```ts
class Person {
    /*……*/
}
```

类声明由类名以及由花括号包围的类体构成。
A class declaration consists of a class name and a class body surrounded by curly braces.

#### 构造函数
#### Constructor

constructor 是一种用于创建和初始化 class 创建的对象的特殊方法。
The constructor is a special method used to create and initialize objects created by a class.

-   语法：
-   grammar:

```ts
constructor([arguments]) { ... }
```

-   描述：
-   describe:

在一个类中只能有一个名为 “constructor” 的特殊方法。 一个类中出现多次构造函数 (constructor)方法将会抛出一个 SyntaxError 错误。
There can only be one special method named "constructor" in a class. Multiple occurrences of constructor methods in a class will throw a SyntaxError.

在一个构造方法中可以使用 super 关键字来调用一个父类的构造方法。
The super keyword can be used in a constructor to call the constructor of a superclass.

如果没有显式指定构造方法，则会添加默认的 constructor 方法。
If no constructor is explicitly specified, a default constructor method is added.

如果不指定一个构造函数(constructor)方法, 则使用一个默认的构造函数(constructor)。
If you do not specify a constructor method, a default constructor is used.

-   示例：
- Example:

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

#### 继承
#### Inheritance

uts 允许使用继承来扩展现有的类。
uts allows the use of inheritance to extend existing classes.

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
class Polygon {}

class Square extends Polygon {}
```

##### 覆盖方法
##### Override methods

uts 对于可覆盖的成员以及覆盖后的成员需要显式修饰符：
uts requires explicit modifiers for overridable and overridden members:

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
The override modifier must be added to the Square.name function. If it is not written, the compiler will report an error.

##### 覆盖属性
##### Override Properties

属性与方法的覆盖机制相同。在超类中声明然后在派生类中重新声明的属性必须以 override 开头，并且它们必须具有兼容的类型。
Properties have the same overriding mechanism as methods. Properties declared in a superclass and then redeclared in a derived class must start with override and they must have compatible types.

```ts
 class Shape {
     vertexCount: Int = 0
}

class Rectangle extends Shape {
    override  vertexCount = 4
}
```

##### 调用超类实现
##### calling superclass implementation

派生类中的代码可以使用 super 关键字调用其超类的函数实现：
Code in a derived class can call its superclass's function implementation using the super keyword:

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

#### 实例属性
#### instance properties

uts 中实例属性存在于类的每一个实例中。
Instance attributes in uts exist in every instance of the class.

##### 声明实例属性
##### Declare instance properties

uts 可以在类中声明属性，默认可读，可写。
uts can declare properties in the class, which are readable and writable by default.

```ts
class Address {
    city: String = "beijing";
}
```

使用一个实例属性，以类实例引用它即可：
Use an instance property to reference it as a class instance:

```ts
function copyAddress(address: Address): Address {
    const result = new Address();
    result.city = address.city; // 访问 city 属性
    return result;
}
```

##### Getter 与 Setter
##### Getter and Setter

uts 支持通过 getters/setters 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
uts supports intercepting access to object members through getters/setters. It helps you effectively control access to object members.

```ts
const passcode = "secret passcode";
class Employee {
    private _fullName: string = "";

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode === "secret passcode") {
            this._fullName = newName;
        } else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
```

##### readonly

uts 可以使用 readonly 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
uts properties can be made read-only using the readonly keyword. Read-only properties must be initialized at declaration or in the constructor.

```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```

#### 静态属性
#### static properties

使用关键字 static 来将一个属性声明为静态属性。静态属性不会在实例中被调用，而只会被类本身调用。
Use the keyword static to declare a property as static. Static properties are not called on the instance, only by the class itself.

```ts
class ClassWithStaticField {
    static staticField = "static field";
}

console.log(ClassWithStaticField.staticField);
```

#### 实例方法
#### instance methods

uts 中实例方法存在于类的每一个实例中。
Instance methods in uts exist in every instance of the class.

##### 声明实例方法
##### Declare instance methods

uts 可以在类中声明实例方法。
uts can declare instance methods in a class.

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
square.calcArea();
```

#### 静态方法
#### static methods

使用关键字 static 来将一个方法声明为静态方法。静态方法不会在实例中被调用，而只会被类本身调用。它们经常是工具函数，比如用来创建或者复制对象。
Use the keyword static to declare a method as static. Static methods are not called on the instance, but only by the class itself. They are often utility functions, such as to create or copy objects.

```ts
class ClassWithStaticMethod {
    static staticMethod(): string {
        return "static method has been called.";
    }
}
ClassWithStaticMethod.staticMethod();
```

#### 可见性修饰符
#### visibility modifiers

类的方法与属性都可以有可见性修饰符。
Both methods and properties of a class can have visibility modifiers.

在 uts 中有三个可见性修饰符：private、 protected、 和 public。 默认可见性是 public。
There are three visibility modifiers in uts: private, protected, and public. The default visibility is public.

##### public

在 uts 中可以自由的访问程序里定义的 public 成员，这也是 uts 的默认行为。
The public members defined in the program can be freely accessed in uts, which is also the default behavior of uts.

##### private

当成员被标记成 private 时，它就不能在声明它的类的外部访问。比如：
When a member is marked private, it cannot be accessed outside the class in which it is declared. for example:

```ts
class Cat {
    private name: string = "Cat";
}

new Cat().name; // 错误: 'name' 是私有的.
```

##### protected

protected 修饰符与 private 修饰符的行为很相似，但有一点不同，protected 成员在派生类中仍然可以访问。比如：
The protected modifier behaves similarly to the private modifier, with one difference, protected members are still accessible in derived classes. for example:

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

### 模块
### Modules

uts 支持将程序拆分为可按需导入的单独模块，模块中可以导入和导出各种类型的变量，如函数，字符串，数字，布尔值，类等。
uts supports splitting programs into separate modules that can be imported on demand, where various types of variables can be imported and exported, such as functions, strings, numbers, booleans, classes, etc.

#### 导出
#### export

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

#### 导入
#### import

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

### 内置对象
### Built-in objects
#### Array

Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。
Array objects are global objects used to construct arrays, which are higher-order objects similar to lists.

##### 实例属性
##### Instance Properties

###### length

数组中的元素个数
the number of elements in the array

##### 实例方法
##### Instance Methods

###### concat

用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
Used to combine two or more arrays. This method does not change the existing array but returns a new array

###### copyWithin

浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度
Shallow copy part of an array to another location in the same array and return it without changing the length of the original array

###### every

测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值
Tests whether all elements in an array pass the test of a specified function. it returns a boolean

###### fill

用一个固定值填充一个数组中从起始索引到终止索引内的全部元素
Fills all elements from the start index to the end index in an array with a fixed value

###### filter

创建一个新数组，其包含通过所提供函数实现的测试的所有元素
Creates a new array containing all elements of the test implemented by the provided function

###### find

返回数组中满足提供的测试函数的第一个元素的值
Returns the value of the first element in the array that satisfies the provided test function

###### findIndex

返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1
Returns the index of the first element in the array that satisfies the provided test function. Returns -1 if the corresponding element is not found

###### flat

按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
Recursively traverses the array at a specified depth, and returns all elements and elements in the traversed subarrays into a new array.

###### flatMap

使用映射函数映射每个元素，然后将结果压缩成一个新数组
Map each element using a map function, then compress the result into a new array

###### forEach

对数组的每个元素执行一次给定的函数
Executes the given function once for each element of the array

###### includes

判断一个数组是否包含一个指定的值，如果包含则返回 true，否则返回 false
Checks whether an array contains a specified value, returns true if it does, false otherwise

###### indexOf

返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回 -1
Returns the first index in the array at which a given element can be found, or -1 if it does not exist

###### join

将一个数组的所有元素连接成一个字符串并返回这个字符串
Concatenates all elements of an array into a string and returns the string

###### lastIndexOf

返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1
Returns the index of the last element in the array for the specified element, or -1 if it does not exist

###### map

返回一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值
Returns a new array whose result is that each element in the array is the return value after calling the provided function once

###### pop

从数组中删除最后一个元素，并返回该元素的值
Remove the last element from the array and return the value of that element

###### push

将一个或多个元素添加到数组的末尾，并返回该数组的新长度
Adds one or more elements to the end of an array and returns the new length of the array

###### reduce

对数组中的每个元素执行一个由您提供的 reducer 函数（升序执行），将其结果汇总为单个返回值
Executes a reducer function (executed in ascending order) provided by you on each element in the array, aggregating its results into a single return value

###### reduceRight

接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值
Takes a function as an accumulator and each value of the array (from right to left) reduces it to a single value

###### shift

从数组中删除第一个元素，并返回该元素的值
Remove the first element from the array and return the value of that element

###### slice

提取源数组的一部分并返回一个新数组
Extract a portion of the source array and return a new array

###### some

测试数组中是不是至少有一个元素通过了被提供的函数测试
Tests whether at least one element in the array passes the provided function test

###### splice

通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容
Modify the array by removing or replacing existing elements or adding new elements in place, and return the modified contents as an array

###### unshift

将一个或多个元素添加到数组的头部，并返回该数组的新长度
Adds one or more elements to the head of an array and returns the new length of the array

##### 常见操作
##### Common operations

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
##### 访问数组元素
##### access array elements

数组的索引是从 0 开始的，第一个元素的索引为 0，最后一个元素的索引等于该数组的 长度 减 1。
The index of the array is 0-based, the index of the first element is 0, and the index of the last element is equal to the length of the array minus 1.

如果指定的索引是一个无效值，将会抛出 IndexOutOfBoundsException 异常
If the specified index is an invalid value, an IndexOutOfBoundsException will be thrown

下面的写法是错误的，运行时会抛出 SyntaxError 异常，而原因则是使用了非法的属性名：
The following writing is wrong, and a SyntaxError exception will be thrown at runtime because of the use of an illegal property name:

```ts
console.log(arr.0) // a syntax error
```

#### Date
#### Error
#### JSON
#### Map
#### Promise
#### RegExp
#### Set

## 学习资料
## Learning materials

### JavaScript 开发者快速上手 uts
### JavaScript developers quickly get started with uts
### Android 开发者快速上手 uts
### Android developers quickly get started with uts