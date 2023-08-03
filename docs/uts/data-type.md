## 数据类型@data-type

### 布尔值（Boolean）

布尔是简单的基础类型，只有2个值分别是：`true` 和 `false`。在全平台没有差异。

```ts
let a:boolean = true
let b = false
```

### 数字（Number）

在web中，数字不区分整型和浮点。但在kotlin和swift中，数字需要是一个确定类型，比如Int、Float、Double，没有泛数字。

UTS 在iOS和Android平台上新增了 number 类型，拉齐了web端的实现，方便开发者写全端兼容代码。

number是一个泛数字类型，包括整数或浮点数，包括正数负数。例如： 正整数 `42` 或者 浮点数 `3.14159` 或者 负数 `-1` 。

```ts
// 以下都是number类型
let a:number = 42
let b:number = 3.14159
let c = 42
let d = 3.14159
```

注意：UTS中 number 是默认数字类型，书写的字面量如果没有特别指定类型会自动识别为 number。

除了 number，UTS 在Android和iOS设备上，也可以使用kotlin和swift的专用数字类型：

#### Kotlin 特有的数字类型 @Kotlin

kotlin 本身支持下列数据类型 

|类型名称|长度  |最小值       |最大值          |描述|
|:--     |:---  |:---         |:---           |:-- |
|Byte    |8bit  |-128         |127            |与byte类似|
|UByte   |8bit  |0            |255            |与byte类似|
|Short   |16bit |-32768       |32767          |与byte类似|
|UShort  |16bit |0            |65535          |与byte类似|
|Int     |32bit |-2147483648  |2147483647     |与byte类似|
|UInt    |32bit |0            |4294967295     |与byte类似|
|Long    |64bit |-9223372036854775808 |9223372036854775807     |与byte类似|
|ULong   |64bit |0            |9223372036854775807 * 2 + 1     |与byte类似|
|Float   |32bit |1.4E-45F     |3.4028235E38F                   |与byte类似|
|Double  |64bit |4.9E-324     | 1.7976931348623157E308         |与byte类似|


**特有数字类型的使用场景**

大多数场景下，开发者使用 字面量（即Number类型）就可以满足需要，但是也有需要特有数字类型的场景。

1. 在 kotlin 和 swift 中，有些系统API或三方SDK的入参或返回值的类型，强制约定了平台特有数字类型，此时无法使用number。
2. number 作为泛数字，性能还是弱于Int。在普通计算中无法体现出差异，但在千万次运算后，累计会产生毫秒级速度差异。


#### Swift 特有的数字类型 @Swift

- Int, UInt, Int8, UInt8, Int16, UInt16, Int32, UInt32, Int64, UInt64
- Float, Float16, Float32, Float64
- Double

**特有数字类型的使用场景**

大多数场景下，开发者使用 字面量（即Number类型）就可以满足需要，但是也有需要特有数字类型的场景。

1. 在 kotlin 和 swift 中，有些系统API或三方SDK的入参或返回值的类型，强制约定了平台特有数字类型，此时无法使用number。
2. number 作为泛数字，性能还是弱于Int。在普通计算中无法体现出差异，但在千万次运算后，累计会产生毫秒级速度差异。

当需要特有数字类型时，UTS中可以直接定义<!--，也可以通过number类型转换为特有数字类型。-->

可以使用下面的方法，虽然可能会被编辑器报语法错误（后续HBuilderX会修复这类误报），但编译到 kotlin 和 swift 时是可用的。

- 声明特定的平台数字类型
 > 目前这些特有数字类型，声明类型时，与 number 不同的是，均为首字母大写

```ts

let a:Int = 3 //注意 Int 是首字母大写
let b:Int = 4
let c:Double  = a * 1.0 / b
```

* 注意这些特有数字类型不能在web端和小程序端使用，如工程需兼容非App端，要把这些代码放入条件编译中；
* iOS和Android都有的类型，比如Int，编译后可跨2个平台；但如果使用了某平台专有的数字类型，比如swift的Int8，则此代码不能编译到Android，工程如需支持Android，则把这些代码写在条件编译中。

这些特有类型定义后，可以使用kotlin和swift为其提供的各种方法，具体参考kotlin和swift的文档。

- 在 kotlin(app-android) 下转换特定的平台数字类型
```ts
let a:Int = 3
a.toFloat() // 转换为 Float 类型，后续也将支持 new Float(a) 方式转换
a.toDouble() // 转换为 Double 类型，后续也将支持 new Double(a) 方式转换
```

- 在 swift(app-ios) 下转换特定的平台数字类型
```ts
// number转成特定类型
let num = 2
num.toInt() //将number 变量 num 转换为 Int 类型
num.toFloat() //将number 变量 num 转换为 float 类型
num.toInt64() // 将number 变量 num 转换为 Int64 类型

// 特定类型转成其他的特定类型
let a:Int = 3
let b = new Double(a) // 将整型变量 a 转换为 Double 类型
```

<!-- #### number和特有数字类型互转 -->

#### 边界情况说明：

- 在不同平台上，数值的范围限制不同，超出限制会导致相应的错误或异常
  * 编译至 JavaScript 平台时，最大值为 1.7976931348623157e+308，最小值为 -1.7976931348623157e+308，超出限制会返回 `Infinity` 或 `-Infinity`。
  * 编译至 Kotlin 平台时，最大值为 9223372036854775807，最小值为 -9223372036854775808，超出限制会报错：`The value is out of range‌`。
  * 编译至 Swift 平台时，最大值 9223372036854775807，最小值 -9223372036854775808，超出限制会报错：`integer literal overflows when stored into Int`。

#### 更多API
number内置对象还有一些API，[详见](buildin-object-api/number.md)

### 字符串（String） @String

字符串是一串表示文本值的字符序列，例如：`"hello world"`。

边界情况说明：

- 在不同平台上，字符串的长度限制不同，超出限制会导致相应的错误或异常
  * 编译至 JavaScript 平台时，最大长度取决于 JavaScript 引擎，例如在 V8 中，最大长度为 2^30 - 25，超出限制会报错：`Invalid string length`；在 JSCore 中，最大长度为 2^31 - 1，超出限制会报错：`Out of memory __ERROR`。
  * 编译至 Kotlin 平台时，最大长度受系统内存的限制，超出限制会报错：`java.lang.OutOfMemoryError: char[] of length xxx would overflow`。
  * 编译至 Swift 平台时，最大长度也受系统内存的限制，超出限制目前没有返回信息。

### 日期（Date）@date

日期对象表示日期，包括年月日时分秒等各种日期。[详见](buildin-object-api/date.md)

### null

一个表明 null 值的特殊关键字。

有时需定义可为null的字符串，可以在类型描述中使用`|`操作符。

```ts
let user: string | null
```

> 注意：uts 编译为kotlin和swift时不支持 undefined。每个有类型的变量都需要初始化或赋值。

### 数组（Array）

Array，即数组，支持在单个变量名下存储多个元素，并具有执行常见数组操作的成员。

js和swift的array，是可变长的泛型array。

而在kotlin中，其自带的array是不可变长的，length是固定的。只有arrayList是可变长的。

为了拉齐实现，UTS补充了新的Array，替代kotlin的array。它继承自kotlin的ArrayList，所以可以变长。

如果开发者需要使用原始的kotlin的不可变长的array，需使用 kotlin.array。

需要使用 kotlin.array 的场景和特有数字类型一样：
1. 某些系统API或三方原生SDK的入参或返回值强制指定了kotlin的array。
2. uts新增的可动态变长的array，在性能上不如固定length、不可变长的原始kotlin.array。但也只有在巨大量的运算中才能体现出毫秒级的差异。

#### 创建一个数组对象

`UTS`中数组的创建有两种方式：

1. 字面量创建

```ts
let a = [1,2,3];//支持
let a = [1,'2',3];//支持

// 需要注意的是，字面量创建的数组，不支持出现空的缺省元素
let a = [1,,2,3];//不支持
```

2. 创建数组对象
```ts
let a = new Array(1,2,3);//支持
let a = new Array(1,'2',3);//支持
let a = Array(1,2,3);//支持
let a = Array(1,'2','3');//支持
```

#### 遍历数组对象

在UTS语言中，推荐使用foreach来实现数组的遍历

```ts
const array1: string[] = ['a', 'b', 'c'];
array1.forEach((element:string, index:number) => {
    console.log(array1[index])
});
```

#### 更多API

更多Array的API，[详见](https://uniapp.dcloud.net.cn/uts/buildin-object-api/array.html)

#### kotlin平台的 Array 特性

<!-- 在kotlin平台上，Array 的具体实现类为： `io.dcloud.uts.UTSArray` -->

UTS 的 Array 拉齐了各个平台 Array 的功能和定义，可以满足大多数场景需要，但是在涉及与 系统API/三方sdk 交互部分，因为 系统API/三方sdk 是基于 java/kotlin 开发，因此调用时直接使用 UTS 的 Array 会产生类型不一致的错误。

举个例子：

```ts
let packageManager = UTSAndroid.getUniActivity()!.getPackageManager();
let intent = new Intent(Intent.ACTION_MAIN);
intent.addCategory(Intent.CATEGORY_LAUNCHER);
// 查询当前设备上安装了几个launcher
let resolveInfo = packageManager.queryIntentActivities(intent,0);
```

上面的代码向系统查询了有多少应用可以响应 `launcher`行为 ，返回的 resolveInfo 是一个 `List<ResolveInfo>`。

这种情况下，我们建议的做法是将其先转换为UTS的Array对象再进行其他处理和操作

```ts
let launcherList = UTSArray.fromNative(resolveInfo) 
console.log(clothing.length);
```

下面汇总了常用的转换场景和代码：

##### 1 我有一个UTSArray 需要转换为其他类型

```ts
let utsArr= ["hello","world"]

// UTSArray 转换 kotlin.collections.List
let kotlinList = utsArr.toKotlinList()

// UTSArray 转换 kotlin.Array
let kotlinArray = utsArr.toTypedArray()

```

##### 2 我有一个原生类数组类型 需要转成成UTS的Array

```ts
// kotlin.collections.List 转换 UTSArray
let utsArr= mutableListOf("hello","world")
let kotlinList = UTSArray.fromNative(utsArr) 
```

```ts
// kotlin.Array 转换 UTSArray
let utsArr= arrayOf("hello","world")
let kotlinList = UTSArray.fromNative(utsArr)
```


### Object类型 @object

对象（object）是指内存中的可以被标识符引用的一块区域，是一种引用类型。包括Array，Date，Map，Set，JSON等。

### any类型 @any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any 类型来标记这些变量：

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：

```ts
let list: any[] = [1, true, "free"];
list[1] = 100;
```

### null类型 @null

uts 的类型系统可以消除来自代码空引用的危险。

许多编程语言中最常见的陷阱之一，就是访问空引用的成员会导致空引用异常。在 Java 中，这等同于 NullPointerException 或简称 NPE。

在 uts 中，类型系统能够区分一个引用可以容纳 null （可空引用）还是不能容纳（非空引用）。 例如，String 类型的常规变量不能容纳 null：

```ts
let a: string = "abc" // 默认情况下，常规初始化意味着非空
a = null // 编译错误
```

如果要允许为空，可以声明一个变量为可空字符串（写作 string | null）：

```ts
let b: string | null = "abc" // 可以设置为空
b = null // ok
```

现在，如果你调用 a 的方法或者访问它的属性，它保证不会导致 NPE，这样你就可以放心地使用：

```ts
const l = a.length
```

但是如果你想访问 b 的同一个属性，那么这是不安全的，并且编译器会报告一个错误：

```ts
const l = b.length // 错误：变量“b”可能为空
```

但是，还是需要访问该属性，对吧？有几种方式可以做到。


#### 在条件中检测 null

首先，你可以显式检测 b 是否为 null：

```ts
if (b != null) {
  console.log(b.length)
}
```

编译器会跟踪所执行检测的信息，并允许你在 if 内部调用 length。

#### 安全的调用

访问可空变量的属性的第二种选择是使用安全调用操作符 ?.：

```ts
const a = "uts"
const b: string | null = null
console.log(b?.length)
console.log(a?.length) // 无需安全调用
```

如果 b 非空，就返回 b.length，否则返回 null，这个表达式的类型是 number | null。

安全调用在链式调用中很有用。例如，一个员工 Bob 可能会（或者不会）分配给一个部门。 可能有另外一个员工是该部门的负责人。获取 Bob 所在部门负责人（如果有的话）的名字， 写作：

```ts
bob?.department?.head?.name
```

如果任意一个属性（环节）为 null，这个链式调用就会返回 null。

#### 空值合并

空值合并运算符（??）是一个逻辑运算符，当左侧的操作数为 null 时，返回其右侧操作数，否则返回左侧操作数。

```ts
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
```

#### 非空断言

非空断言运算符（!）将任何值转换为非空类型。可以写 b! ，这会返回一个非空的 b 值（例如：在我们示例中的 String）或者如果 b 为 null，就会抛出一个异常。

```ts
const l = b!.length
```
