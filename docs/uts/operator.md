# 操作符@operator

## 赋值运算符(Assignment operators)@Assignment-operators

| 名字                                              | 简写的操作符 | 含义        |
| ------------------------------------------------- | ------------ | ----------- |
| 赋值(Assignment)                                  | x = y        | x = y       |
| 加法赋值(Addition assignment)                     | x += y       | x = x + y   |
| 减法赋值(Subtraction assignment)                  | x -= y       | x = x - y   |
| 乘法赋值(Multiplication assignment)               | x \*= y      | x = x \* y  |
| 除法赋值(Division assignment)                     | x /= y       | x = x / y   |
| 求余赋值(Remainder assignment)                    | x %= y       | x = x % y   |
| 左移位赋值(Left shift assignment)                 | x <<= y      | x = x << y  |
| 右移位赋值(Right shift assignment)                | x >>= y      | x = x >> y  |
| 无符号右移位赋值(Unsigned right shift assignment) | x >>>= y     | x = x >>> y |
| 按位与赋值(Bitwise AND assignment)                | x &= y       | x = x & y   |
| 按位异或赋值(Bitwise XOR assignment)              | x ^= y       | x = x ^ y   |
| 按位或赋值(Bitwise OR assignment)                 | x \|= y      | x = x \| y    |

## 比较运算符(comparison operators)@Comparison-operators

| 运算符                              | 描述                                        | 返回 true 的示例 |
| ----------------------------------- | ------------------------------------------- | ---------------- |
| 等于 Equal (==)                     | 如果两边操作数相等时返回 true。             | var1==var2       |
| 不等于 Not equal (!=)               | 如果两边操作数不相等时返回 true             | var1!=var2       |
| 引用相等 Reference equal (===)             | 两边操作数指向同一个对象返回 true。       | var1===var2      |
| 引用不等 Reference not equal (!==)       | 两边操作数不指向同一个对象时返回 true。     | var1!==var2      |
| 大于 Greater than (>)               | 左边的操作数大于右边的操作数返回 true       | var1>var2        |
| 大于等于 Greater than or equal (>=) | 左边的操作数大于或等于右边的操作数返回 true | var1>=var2       |
| 小于 Less than (<)                  | 左边的操作数小于右边的操作数返回 true       | var1<var2        |
| 小于等于 Less than or equal (<=)    | 左边的操作数小于或等于右边的操作数返回 true | var1<=var2       |

## 算数运算符(Arithmetic operators)@Arithmetic-operators

| 运算符   | 范例 | 描述                                                                                                                                     |
| -------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 求余(%)  |      | 二元运算符. 返回相除之后的余数.                                                                                                          |
| 自增(++) |      | 一元运算符. 将操作数的值加一. 如果放在操作数前面 (++x), 则返回加一后的值; 如果放在操作数后面 (x++), 则返回操作数原值,然后再将操作数加一. |
| 自减(--) |      | 一元运算符. 将操作数的值减一. 前后缀两种用法的返回值类似自增运算符.  
| 加(+)  |      | 二元运算符. 将两个数相加.                                                                                                          |
| 减(-) |      | 二元运算符. 将两个数相减. |
| 乘(*) |      | 二元运算符. 将两个数相乘.                                                                    |
| 除(/) |      | 二元运算符. 将两个数相除.                                                                    |

## 位运算符(Bitwise operators)@Bitwise-operators

| Operator                        | Usage   | Description                                                                                                      |
| ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| 按位与 AND                      | a & b   | 在 a,b 的位表示中，每一个对应的位都为 1 则返回 1， 否则返回 0.                                                   |
| 按位或 OR                       | a \| b  | 在 a,b 的位表示中，每一个对应的位，只要有一个为 1 则返回 1， 否则返回 0.                                         |
| 按位异或 XOR                    | a ^ b   | 在 a,b 的位表示中，每一个对应的位，两个不相同则返回 1，相同则返回 0.                                             |
| 按位非 NOT                      | ~ a     | 反转被操作数的位。                                                                                               |
| 左移 shift                      | a << b  | 将 a 的二进制串向左移动 b 位,右边移入 0.                                                                         |
| 算术右移                        | a >> b  | 把 a 的二进制表示向右移动 b 位，丢弃被移出的所有位.(译注:算术右移左边空出的位是根据最高位是 0 和 1 来进行填充的) |
| 无符号右移(左边空出位用 0 填充) | a >>> b | 把 a 的二进制表示向右移动 b 位，丢弃被移出的所有位，并把左边空出的位都填充为 0                                   |

## 逻辑运算符(Logical operators)@Logical-operators

| 运算符       | 范例             | 描述     |
| ------------ | ---------------- | -------- |
| 逻辑与(&&)   | expr1 && expr2   | (逻辑与) |
| 逻辑或(\|\|) | expr1 \|\| expr2 | (逻辑或) |
| 逻辑非(!)    | !expr            | (逻辑非) |

## 字符串运算符(String operators)@String-operators

除了比较操作符，它可以在字符串值中使用，连接操作符（+）连接两个字符串值相连接，返回另一个字符串，它是两个操作数串的结合。

```ts
console.log("my " + "string"); // console logs the string "my string".
```
**注意**

在iOS平台，连接操作符（+）目前仅支持字符串的连接，即+操作符前后都必须是字符串类型。

## 条件（三元）运算符(Conditional operator) @Conditional-operator

条件运算符是 uts 中唯一需要三个操作数的运算符。运算的结果根据给定条件在两个值中取其一。语法为：

`条件 ? 值1 : 值2`

```ts
const status = age >= 18 ? "adult" : "minor";
```

## 操作符列表

- `+`
    * 相加运算符 (+) 用于对两个操作数进行相加运算。
- `+=`
    * 加法赋值操作符 (+=) 将右操作数的值添加到变量，并将结果分配给该变量。两个操作数的类型确定加法赋值运算符的行为。
- `=`
    * 简单赋值操作符 (=) 用于为变量赋值。赋值表达式本身的值为要赋值的值。
- `&`
    * 按位与运算符 (&) 在两个操作数对应的二进位都为 1 时，该位的结果值才为 1，否则为 0。
- `&=`
    * 按位与赋值运算符（＆=）表示两个操作数的二进制，对它们进行按位 AND 运算并将结果分配给变量。
- `~`
    * 按位非运算符（~），反转操作数的位。
- `|`
    * 按位或运算符（|），如果两位之一为 1 则设置每位为 1。
- `|=`
    * 按位或赋值操作符 (|=) 使用二进制表示操作数，进行一次按位或操作并赋值。
- `^`
    * 按位异或运算符（^），如果两位只有一位为 1 则设置每位为 1。
- `^=`
    * 按位异或赋值操作符 (^=) 使用二进制表示操作数，进行一次按位异或操作并赋值。
- `?`
- `--`
    * 自减运算符 (--) 将它的操作数减一，然后返回操作数。
- `/`
    * 除法运算符 (/) 计算了两个操作数的商，左边的数是被除数，右边的是除数。
- `/=`
- `==`
- `>`
    * 当左边操作数大于右边的时候，大于 (>) 运算符返回true，否则返回false。
- `>=`
    * 当左边操作数大于等于右边的时候，大于等于 (>=) 运算符返回true，否则返回false。
- `++`
    * 自增运算符 (++) 将其操作数递增（加 1）并返回一个值。
- `!=`
- `<<`
    * 左移操作符 (<<) 将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零。
- `<<=`
    * 左移赋值运算符 (<<=) 将变量向左移动指定数量的位，并将结果赋值给变量。
- `<`
    * 当左边操作数小于右边的时候，小于 (<) 运算符返回true，否则返回false。
- `<=`
    * 当左边操作数小于等于右边的时候，小于等于 (>=) 运算符返回true，否则返回false。
- `&&`
    * 逻辑与
- `&&=`
- `!`
- `??=`
- `||`
    * 逻辑或。
- `||=`
    * 逻辑或赋值（x ||= y）运算仅在 x 为虚值时赋值。
- `*`
    * 乘法运算符 (*) 计算操作数的乘积。
- `*=`
- `??`
- `?.`
    * 可选链运算符（?.）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 运算符的功能类似于 . 链式运算符，不同之处在于，在引用为空 (nullish ) (null) 的情况下不会引起错误。
- `%`
    * 当一个操作数除以第二个操作数时，取余运算符（％）返回剩余的余数。它与被除数的符号保持一致。
- `%=`
- `>>`
    * 右移操作符 (>>) 是将一个操作数按指定移动的位数向右移动，右边移出位被丢弃，左边移出的空位补符号位（最左边那位）。
- `>>=`
    * 右移赋值运算符 (>>=) 将变量向右移动指定数量的位，并将结果赋值给变量。
- `===`
    * 当两边操作数指向同一个对象时，引用相等 (===) 运算符返回true。对于运行时表示为原生类型的值（例如 Int），引用相等 (===)等价于相等（==）。
- `!==`
    * 当两边操作数不指向同一个对象时，引用不等 (!==) 运算符返回true。
- `-`
- `-=`
- `>>>`
    * 无符号右移运算符（>>>）（零填充右移）将第一个操作数向右移动指定（二进制）位数。
- `>>>=`


## 算数运算符的跨数字类型注意@arithmeticdifftype

uts 中算数运算符在大部分场景下和 ts 中的行为一致，但是在有字面量或者是平台专有数字类型参与运算时，不同平台可能会有不同的表现。
算数运算符 + - * / % 行为一致，下表以 + 和 / 为例列出了各种场景下的详细差异。

- 其中 number 是指 number 类型的变量，字面量是指数字字面量，变量是指平台专有数字类型的变量
- 运算符 / 在 字面量 / 字面量场景下, 结果为 number.

| 场景                                 | 示例                                           | Kottlin 结果                   |  Swift 结果 							  |
| ----------------------------------- | -------------------------------------------   | ------------------------------ |------------------------------------------|
| number + number                      | number + number            				  | 结果为 number                   |结果为 number				              |
| number + 字面量 #{rowspan=2}| number + 1                                   | 结果为 number                   |结果为 number 						 	  |
| number + 3.14      						  | 结果为 number                   |结果为 number 							  |
| number + 变量 #{rowspan=4}| let a: Int = 1; number + a     			  | 结果为 number      			   |结果为 number 						   	  |
| let b: Double = 1;  number + b       		  | 结果为 number        		   |结果为 number 						      |
| let c: Long = 1; number + c 				  | 结果为 number       			   |Swift 中无 Long 							  |
| let d: Int64 = 1; number+ d      			  | kottlin 中无 Int64      		   |结果为 number							  |
| 字面量 + number #{rowspan=2}| 1 + number 								  | 结果为 number                   |结果为 number 							  |
| 3.14 + number 								  | 结果为 number                   |结果为 number 							  |
| 变量 + number #{rowspan=4}| let a: Int = 1; a + number 				  | 结果为 number                   |编译失败，需要用 (a as number) + number 	  |
| let b: Double = 1; b + number 				  | 结果为 number                   |编译失败，需要用 (b as number) + number	  |
| let c: Long = 1;  c + number  				  | 结果为 number                   |Swift 中无 Long 	  						  |
| let d: Int64 = 1; d + number 				  | kottlin 中无 Int64              |编译失败，需要用 (d as number) + number	  |
| 字面量 + 字面量 #{rowspan=3}| 1 + 1 				  						  | 结果为 2 Int                    |结果为2 Int                          	  |
| 1 + 3.14 				  					  | 结果为4.14 Double               |结果为4.14 Double	  					  |
| 1.0 + 3.14  				                  | 结果为4.14 Double               |结果为4.14 Double 	 					  |
| 字面量 / 字面量   			           | 1 / 10 				  					  | 无明确类型时为 0.1 number，有类型时遵守类型约定|无明确类型时为 0.1 number，有类型时遵守类型约定|
| 专有类型变量 / 字面量 #{rowspan=2}| let a: Int = 2; a / 10				  		  | 结果为 0 Int                    |结果为0 Int                          	  |
| let a: Int = 2; a / 10.0 				  	  | 结果为 0.2 Double               |编译失败，Int / Double 不合法 需使用 a / Int(10.0)	|
| 专有类型变量 + 字面量 #{rowspan=2}| let a: Int = 2; a + 10				  		  | 结果为 12 Int                   |结果为12 Int                          	  |
| let a: Int = 2; a + 3.14 				  	  | 结果为 5.14 Double              |编译失败, 需要 a + Int(3.14) = 5	          |
| 相同的专有类型变量相加 #{rowspan=2}| let a: Int = 1; let b: Int = 2; a + b		  | 结果为 3 Int                    |结果为3 Int                          	  |
| let a: Double = 1.0; let b: Double = 2.0; a + b | 结果为 3.0 Double            |结果为 3.0 Double	          			  |
| 不同的专有类型变量相加 #{rowspan=2}| let a: Int = 1; let b: Float = 3.14.toFloat(); a + b	  | 结果为4.14, Float   |编译失败，不同类型变量不能操作                 |
| let a: Float = 1.0.toFloat(); let b: Double = 3.14; a + b| 结果为4.14，Double |编译失败，不同类型变量不能操作          		  |

## 比较运算符的跨数字类型注意@comparisondifftype

uts 中比较运算符在大部分场景下和 ts 中的行为一致，但是在有字面量或者是平台专有数字类型参与比较操作时，不同平台可能会有不同的表现。

### 比较运算符 > >= < <=

比较运算符 > >= < <= 行为一致，下表以 > 为例列出了各种场景下的详细差异。

- 其中 number 是指 number 类型的变量，字面量是指数字字面量，变量是指平台专有数字类型的变量

| 场景                                 | 示例                                           | Kottlin 结果                   |  Swift 结果 							  |
| -----------------------------------  | -------------------------------------------   | ------------------------------ |-----------------------------------------|
| number > number                      | number > number            				  | 结果为 true or false            |结果为 true or false  				      |
| number > 字面量                       | number > 1                                   | 结果为 true or false            |结果为 true or false 					  |
| number > 变量                         | let a: Int = 1; number > a     			  | 结果为 true or false      	   |结果为 true or false 					  |
| 字面量 > number				       | 3.14 > number 								  | 结果为 true or false            |结果为 true or false 					  |
| 变量 > number				           | let a: Int = 1; a > number 				  | 结果为 true or false            |结果为 true or false  	  				  |
| 字面量 > 字面量   			           | 3.14 > 1 				  					  | 结果为 true                     |结果为 true                          	  |
| 专有类型变量 > 字面量                   | let a: Int = 2; a > 3.14				  	  | 结果为 false                    |结果为 false                          	  |
| 相同的专有类型变量比较                   | let a: Int = 2; let b: Int = 1; a > b		  | 结果为 true                     |结果为 true                         	      |
| 不同的专有类型变量比较                   | let a: Int = 1; let b: Float = 3.14.toFloat(); a > b	  | 结果为false         |编译失败，不同类型变量不能比较                 |


### 比较运算符 == != === !==


| 场景                                  | 示例                                           | Kottlin 结果                   |  Swift 结果 							  |
| ------------------------------------ | -------------------------------------------   | ------------------------------ |------------------------------------------|
| number == number (!= === !== 行为相同) | number == number            				  | 值相同就true                     |值相同就true				                  |
| number == 字面量 (!= === !== 行为相同)  | number == 1                                 | 值相同就true                     |值相同就true 						 	  |
| number == 变量 (!= === !== 行为相同)   | let a: Int = 1; number == a     			  | 值相同就true      			   |值相同就true 						   	      |
| 字面量 == number (!= === !== 行为相同) | 1 == number 								  | 值相同就true                     |值相同就true 							  |
| 变量 == number	 (!= === !== 行为相同)  | let a: Int = 1; a == number 				  | 值相同就true                    |值相同就true 	  							  |
| 字面量 == 字面量  (!= 行为相同)		   | 1 == 1 	（相同类型）			  		      | 值相同就true                    |值相同就true                          	  |
|   				      			   | 1 == 3.14 (不同类型)				  			  | 编译失败，不支持比较               |值相同就为true	  					  |
| 字面量 === 字面量  (!== 行为相同)		   | 1 === 1 	（相同类型）			  			  | 值相同就true                     |编译失败，=== 和 !== 只能用于引用类型比较      |
|   				      			   | 1 === 3.14 (不同类型)				  			  | 编译失败，不支持比较               |编译失败，=== 和 !== 只能用于引用类型比较	  |
| 专有类型变量 == 字面量 (!= 行为相同)     | let a: Int = 2; a == 10	 （相同类型）			  | 值相同就true                     |值相同就true                          	  |
|   				      			   | let a: Int = 2; a == 3.14 （不同类型）		  | 编译失败，不支持比较              |值相同就true	                               |
| 专有类型变量 === 字面量 (!== 行为相同)     | let a: Int = 2; a === 10	 （相同类型）		  | 值相同就true                     |编译失败，=== 和 !== 只能用于引用类型比较       |
|   				      			   | let a: Int = 2; a === 3.14 （不同类型）		  | 编译失败，不支持比较              |编译失败，=== 和 !== 只能用于引用类型比较	       |
| String  == String (!= 行为相同)        | "a" == "a"		 							   | 结果为 true                   |结果为 true                          	  |
| String  === String (!=== 行为相同)  	| "a" === "a" 									| 结果为 true                  |编译失败，不能比较	          			  |
| Array  == Array (!= 行为相同)        | [1] == [1]	 							   | 结果为 false                   |结果为 true,数组类型相同，元素相同就为true     |
| Array  === Array (!=== 行为相同)  	| [1] === [1] 									| 结果为 false                  |编译失败，不能比较	          			  |

## 展开语法...

> HBuilderX 3.9+

展开语法可以在函数调用/数组构造时，将数组表达式在语法层面展开。展开语法使用 `...` 操作符表示。

### 构造字面量数组

没有展开语法的时候，只能组合使用 push, splice, concat 等方法，来将已有数组元素变成新数组的一部分。有了展开语法，通过字面量方式，构造新数组会变得更简单、更优雅：

```ts
const array1 = ['a', 'b']
const array2 = ['c', ...array1, 'd'] //把array1的内容组合赋值给array2
```

### 在函数调用时使用展开语法

如果想将数组元素迭代为函数[剩余参数](./function.md#剩余参数)，也可以使用 `...` 操作符。

```ts
fn('a', ...['b', 'c'])
```

尤其是列表加载场景，从服务器取到一批新数组，就可以使用`...`快捷的追加到之前的data数组中。

假使uvue的data中定义了一个dataList数组，服务器返回了res，res.data是合法的数组，那么就可以把新数组快捷的追加到dataList数组中。

```ts
this.dataList.push(...res.data)
```


### 剩余参数

剩余语法 (Rest syntax) 看起来和展开语法完全相同，不同点在于，剩余参数用于解构数组和对象。

从某种意义上说，剩余语法与展开语法是相反的：展开语法将数组展开为其中的各个元素，而剩余语法则是将多个元素收集起来并“凝聚”为单个元素。请参考：[剩余参数](./function.md#剩余参数)。

## 类型断言as@as

类型可能不明确、不唯一时，可以使用类型断言操作符 `as` 来为值指定类型。

常见于 any 类型的明确、字面量的明确，也可以用于可为空 `|null` 类型的明确。

```ts
const a: any = 'a'
a as string // as之后a就可以当做string直接使用了

const a: string | null = 'a'
a as string // 正常
```

当一个字面量可能成为多种类型时，可以通过as来明确具体类型。
```ts
// 数字字面量可以被指定为任何相容的数字类型
1.0 as Double
1.0 as number

// 对象字面量也可以as为USTJSONObject或某个type
{"id":1} as UTSJSONObject

type t = {
	id:number
}
{"id":1} as t
```

只允许将类型as为具体或更不具体的类型，不能强制转换两个不可能兼容的类型：

```ts
const a: string = 'a'

a as any // 正确
a as string // 正确
a as number // 错误
```

USTJSONObject和type不相容，无法互相as。应该在初始的字面量或JSON.parse环节就决定好类型。

类型断言会在运行时进行，如果无法强制转换，类型断言运算符会引发异常：

```ts
const a: string | null = 'a'
a as string // 正常

a = null
a as string // 异常
```

以上代码中当值为 `null` 的时，强制转换为 `string` 会引发异常。为了让这样的代码用于可空值，请在类型断言的右侧使用可空类型：

```ts
a as string ｜ null // 正常
```

当 as 操作符的左侧为[对象字面量](./literal.md#object-literal)时，编译器会进行[特殊处理](./object.md#实例化)：自动创建类型对应的实例。

```ts
{ name: 'Tom', printName: function () { } } as Person
```

另外：当 `as` 用在[模块](./module.md)导入时，它和类型断言无关，其功能为[指定别名](./module.md#指定别名)。

## typeof实例类型获取@typeof

使用 `typeof` 运算符获取一个实例对象的类型，返回表示类型的字符串。  

| 类型                						 			 | 结果             | 
| ------------------------------------------------------ | ---------------- | 
| null                						 			 | "object"         | 
| boolean     		  						 			 | "boolean"        | 
| number       		  						 			 | "number"         | 
| string       		  						 			 | "string"         | 
| function     		  						 			 | "function"       | 
| 平台专有数字类型: Int, Float, Double, Long ... 			 | "Int","Float","Double","Long" ... |
| 其他任何对象(包含但不限于：Date, Array, Map, UTSJSONObject) | "object"         | 

> 特别说明：  
> HBuilderX3.9.0统一为以上规范，在HBuilderX3.9.0之前版本平台专有数字类型变量使用typeof操作符获取的值为"number"  

为了与web保持一致，typeof除了布尔、数字、字符串、函数外，全部返回object。如需判断object范围内的具体类型，需另见[instanceof](#instanceof)

用法示例：

```ts
let a = 10.0  //自动推断为number类型
let b: Double = 3.14
let c: Int = 2

typeof a == "number" //true
typeof b == "Double" //true 
typeof c == "Int" //true

// string
let str = "hello uts"
typeof str == "string" //true

//boolean
let ret = true 
typeof ret == "boolean" //true

//function
function fn(obj: string) {
  if (obj instanceof String) {
    // ...
  }
}

typeof fn == "function" //true
typeof Math.sign == "function" //true

//object
let obj = {
	"x": 1,
	"y": 2
}

typeof obj == "object" // true

typeof null == "object" //true
typeof [1, 2, 3] == "object" //true

```

**注意**  
`typeof` 运算符的参数只能是实例对象，不能是类型，如下操作是错误用法：
```ts
type MyType = {
    name:string
}
typeof MyType   //报错  
```

`typeof` 运算返回值一定是字符串，不会返回 TypeScript 类型，这与TypeScript存在差异：
```ts
type MyType = {
    name:string
}
let my:MyType = {name:"abc"}
type NewType = typeof my;   //报错
```

**特殊情况**  
在Android平台，将 number 类型赋值给 any 类型变量时，会根据数值将类型转变为实际平台专有数字类型，使用 typeof 获取此 any 类型变量将会返回实际平台专有数字类型。

```ts
let a = 10.0    //自动推断为number类型
let b: Double = 3.14
let c: any = a
let d: any = b

typeof a == "number" //true
typeof b == "Double" //true 
typeof d == "Double" //true

// 在 iOS 平台上
typeof c == "number" //true

// 在Android平台上变量c会根据数据实际数值转换为平台专有数字类型Double  
typeof c == "number" //false 真实返回的是 "Double"

```

在Android平台，如果类型（或class）存在伴生对象（companion object）时，可以使用`typeof`运算符，返回的值为object，但不推荐这么使用

```ts
typeof Double   //在Android平台Double有伴生对象可以正常运行，实际值为object；在iOS平台报错
```


## instanceof实例类型判断@instanceof

使用 `instanceof` 运算符执行运行时检查，以标识对象是否符合给定类型。

| 类型                						 			 								| 结果             | 
| ------------------------------------------------------------------------------------ 	| ---------------- | 
| Boolean                						 		 								| 编译报错，不支持    | 
| Number     		  						 			 								| 编译报错，不支持    | 
| String       		  						 			 								| 编译报错，不支持    | 
| 平台专有数字类型: Int, Float, Double, Long ... 			 								| true or false    |
| typeof 结果为 "object" 的类型(包含但不限于：Date, Array, Map, UTSJSONObject, 自定义类型)	| true or false    | 

> 特别说明：  
> HBuilderX3.9.0 使用 `instaceof` 对 Boolean, Number, String 类型的实例进行判断会编译报错，请使用 `typeof` 。在HBuilderX3.9.0之前版本可正常使用 `instaceof` 对上述类型的判断。


```ts
function fn(obj: any) {
  if (obj instanceof Date) {
    // ...
  }
}
```

包含[泛型](./generics.md)的类型，不能缺省泛型信息。如不需要判断具体的泛型类型，可以使用 `unknown` 表示任意泛型类型：

```ts
function fn(obj: any) {
  if (obj instanceof Map<unknown, unknown>) {
    // ...
  }
}
```

已经可以明确判断类型兼容性时无需使用 `instanceof` 在运行时进行判断，编译阶段会检查出这种情况会报错或者警告：

```ts
function fn(obj: Date) {
  if (obj instanceof Date) {
    // ...
  }
}
```

对于数字类型，`instanceof` 细化了判断逻辑，除了能判断是否是 number, 还能判断是否是 Int Float Double Int64 Long ... 等所有平台专有数字类型。

```ts

let a: Double = 3.14
let b: Int = 2

a instanceof Double //true
b instanceof Int //true 

```

## await

await 操作符用于等待一个 [Promise](./buildin-object-api/promise.md) 兑现并获取它兑现之后的值。它只能在[异步函数](./function.md#async)中使用。

在 HBuilderX 3.93 以下的版本或者 iOS 平台，await 不能与 [Promise](./buildin-object-api/promise.md) 一同使用，请分别参考：[安卓 异步函数](../plugin/uts-for-android.md#_6-11-synchronized-lock-等线程同步概念-在uts里怎么写)、[iOS 异步函数](../plugin/uts-for-ios.md#_5-1-13-异步方法)。

```ts
async function test(): Promise<string> {
  return await Promise.resolve('hello world');
}
```