## 数据类型@data-type

### 布尔值（Boolean）

有 2 个值分别是：`true` 和 `false`。

### 数字（Number）

所有数字，包括整数或浮点数，包括正数负数。例如： 正整数 `42` 或者 浮点数 `3.14159` 或者 负数 `-1` 。

```ts
let a:number = 42
```

#### Kotlin 特有的数字类型 @Kotlin

- Byte, UByte
- Short, UShort
- Int, UInt
- Long, ULong
- Float
- Double

#### Swift 特有的数字类型 @Swift

- Int, UInt, Int8, UInt8, Int16, UInt16, Int32, UInt32, Int64, UInt64
- Float, Float16, Float32, Float64
- Double

**注意**

在 kotlin 和 swift 中，有些系统API或三方SDK的传入和返回强制约定了这些平台数字类型，此时无法使用 number。
这种情况下可以使用下面的方法，虽然可能会被编辑器报语法错误（后续HBuilderX会修复这类误报），但编译到 kotlin 和 swift 时是可用的。

- 声明特定的平台数字类型
 > 目前这些平台数字类型，声明类型时，与 number 不同的是，均为首字母大写

```ts

let a:Int = 3 //注意 Int 是首字母大写
let b:Int = 4
let c:Double  = a * 1.0 / b
```

- 在 kotlin(app-android) 下转换特定的平台数字类型
```ts
let a:Int = 3
a.toFloat() // 转换为 Float 类型，后续也将支持 new Float(a) 方式转换
a.toDouble() // 转换为 Double 类型，后续也将支持 new Double(a) 方式转换
```

- 在 swift(app-ios) 下转换特定的平台数字类型
```ts
let a:Int = 3
let b = new Double(a) // 将整型变量 a 转换为 Double 类型
```
边界情况说明：

- 在不同平台上，数值的范围限制不同，超出限制会导致相应的错误或异常
  * 编译至 JavaScript 平台时，最大值为 1.7976931348623157e+308，最小值为 -1.7976931348623157e+308，超出限制会返回 `Infinity` 或 `-Infinity`。
  * 编译至 Kotlin 平台时，最大值为 9223372036854775807，最小值为 -9223372036854775808，超出限制会报错：`The value is out of range‌`。
  * 编译至 Swift 平台时，最大值 9223372036854775807，最小值 -9223372036854775808，超出限制会报错：`integer literal overflows when stored into Int`。

### 字符串（String） @String

字符串是一串表示文本值的字符序列，例如：`"hello world"`。

边界情况说明：

- 在不同平台上，字符串的长度限制不同，超出限制会导致相应的错误或异常
  * 编译至 JavaScript 平台时，最大长度取决于 JavaScript 引擎，例如在 V8 中，最大长度为 2^30 - 25，超出限制会报错：`Invalid string length`；在 JSCore 中，最大长度为 2^31 - 1，超出限制会报错：`Out of memory __ERROR`。
  * 编译至 Kotlin 平台时，最大长度受系统内存的限制，超出限制会报错：`java.lang.OutOfMemoryError: char[] of length xxx would overflow`。
  * 编译至 Swift 平台时，最大长度也受系统内存的限制，超出限制目前没有返回信息。

### 日期（Date）@date

日期对象表示日期，包括年月日时分秒等各种日期。详[见下](#Date)

### null

一个表明 null 值的特殊关键字。

有时需定义可为null的字符串，可以在类型描述中使用`|`操作符。
```ts
let user: string | null
```

> 注意：uts 编译为kotlin和swift时不支持 undefined。

### Object类型 @object

对象（object）是指内存中的可以被标识符引用的一块区域，是一种引用类型。包括Array，Date，Map，Set，JSON等，uts 有一个内置对象的标准库。详[见下](#内置对象和api)。

### any类型 @any

如果定义变量时没有声明类型，也没有赋值。那么这个变量会被视为any类型。虽然可以使用，但uts中非常不建议这样使用。

```ts
let s;
s = "123"
console.log(s) // hello world
```
