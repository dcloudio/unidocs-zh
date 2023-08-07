## 数据类型@data-type

强类型语言的特点，是数据类型要求严格。它带来2个好处：
1. 高性能：明确的类型有更大的优化空间，在iOS和Android等os上可以节省内存、提高运算速度；web端由于仍编译为js，不具有类型性能优化。
2. 安全的代码：强类型代码编写虽然没有弱类型自由，但类型检查、非空检查...各种检查可以提升代码的健壮性。

### 布尔值（Boolean）

布尔是简单的基础类型，只有2个值：`true` 和 `false`。

```ts
let a:boolean = true // 定义类型并赋值字面量
let b = false // 未显式声明类型，但根据字面量可自动推导为布尔类型
let c:boolean // 定义类型但定义时未赋值
c = true // 后续为变量赋值字面量
```

注意：
- 在js里，true == 1、 false == 0。但在其他强类型语言里，`1`和`0`是数字类型，无法和布尔类型相比较。
- 注意 boolean 不要简写成 bool

### 数字（Number）

在 ts 中，数字不区分整型和浮点，就是一个 number。但在 kotlin 和 swift 中，数字需要是一个确定类型，比如 Int、Float、Double，没有泛数字。

UTS 在iOS和Android平台上新增了 number 类型，拉齐了web端的实现，方便开发者写全端兼容代码，也降低web开发者使用 uts 的门槛。

number 是一个泛数字类型，包括整数或浮点数，包括正数负数。例如： 正整数 `42` 或者 浮点数 `3.14159` 或者 负数 `-1` 。

```ts
let a:number = 42       //a为number类型
let b:number = 3.14159  //b为number类型
let c = 42              //注意：目前版本推导c为Int类型，新版本将调整c为number类型
let d = 3.14159         //注意：目前版本推导d为float类型，新版本将调整d为number类型
```

- 编译到kotlin平台时，number 利用 kotlin的 `Number`抽象类实现
- 编译到swift平台时，number 利用 `NSNumber` 实现

#### 平台专有数字类型

除了 number 类型，UTS 在 Android 和 iOS 设备上，也可以使用 kotlin 和 swift 的专有数字类型。

日常开发使用 number 类型就可以。但是也有需要平台专有数字类型的场景：

1. 在 kotlin 和 swift 中，调用系统API或三方SDK的入参或返回值的类型，强制约定了平台专有数字类型。比如入参要求传入 Int，那么传入 number 会报错。比如方法返回了一个 Int，使用 number 类型的变量去接收，也会报错。
2. number 作为泛数字，性能还是弱于Int。在普通计算中无法体现出差异，但在千万次运算后，累计会产生毫秒级速度差异。

##### Kotlin 专有数字类型 @Kotlin

|类型名称|长度  |最小值       |最大值          |描述|
|:--     |:---  |:---         |:---           |:-- |
|Byte    |8bit  |-128         |127            |整型|
|UByte   |8bit  |0            |255            |整型|
|Short   |16bit |-32768       |32767          |整型|
|UShort  |16bit |0            |65535          |整型|
|Int     |32bit |-2147483648  |2147483647     |整型|
|UInt    |32bit |0            |4294967295     |整型|
|Long    |64bit |-9223372036854775808 |9223372036854775807     |整型|
|ULong   |64bit |0            |9223372036854775807 * 2 + 1     |整型|
|Float   |32bit |1.4E-45F     |3.4028235E38F                   |[浮点型](https://kotlinlang.org/docs/numbers.html#floating-point-types)|
|Double  |64bit |4.9E-324     | 1.7976931348623157E308         |[浮点型](https://kotlinlang.org/docs/numbers.html#floating-point-types)|

基本数据类型会有jvm编译魔法加持，kotlin 会把  Int / Double 等非空类型编译为 基本数据类型，Int? / Double? 等可为空的类型编译为 Integer等包装类型，享受不到编译优化加持。

如果涉及大量运算，建议开发者不要使用 Number、Int? ，要明确使用 Int等类型 [详情](https://kotlinlang.org/docs/numbers.html#numbers-representation-on-the-jvm)

##### Swift 专有的数字类型 @Swift

- Int, UInt, Int8, UInt8, Int16, UInt16, Int32, UInt32, Int64, UInt64
- Float, Float16, Float32, Float64
- Double

##### 专有数字类型的定义方式

使用下面的方法，虽然可能会被编辑器报语法错误（后续HBuilderX会修复这类误报），但编译到 kotlin 和 swift 运行是正常的。

- 声明特定的平台数字类型
 > 平台专有数字类型，均为首字母大写，注意与 number 首字母小写是不同的

```ts
let a:Int = 3 //注意 Int 是首字母大写
let b:Int = 4
let c:Double  = a * 1.0 / b
```

* 注意专有数字类型不能在web端和小程序端使用，如工程需兼容非App端，要把这些代码放入条件编译中；
* iOS和Android都有的类型，比如Int，编译后可跨2个平台；但如果使用了某平台专有的数字类型，比如swift的Int8，则此代码不能编译到Android，工程如需支持Android，则把这些代码写在条件编译中。

```ts
// #ifdef APP-IOS
let d:Int8 // Int8是swift平台专有类型
// #endif
```

这些专有类型定义后，可以使用kotlin和swift为其提供的各种方法，具体参考kotlin和swift的文档。

#### 字面量类型自动推导@autotypefornumber

具体值，比如`42`、`"abc"`，称之为[字面量](literal.md)

字面量可以直接用于赋值、传参，比如 `let a = 42`，就是把`42`这个数字字面量赋值给了a。

不管是 ts 、kotlin 还是 swift，都具备字面量自动推导类型的能力，为 a 自动推导合适的类型。

**目前版本中，在未显式声明类型的情况下使用数字字面量赋值、传参，由平台语言自动推导为相应的类型**

但不同平台，推导结果不一样。

- ts 中，a 被推导为 number
- kotlin 中，a 被推导为 Int
- swift 中，a 被推导为 Int

上述只是一个简单的示例，再看一个复杂的例子，`let a = 1/10`。

a 会被自动推导成什么类型？是Int、double、还是number？值是0还是0.1？在不同平台的差异更大。

在web端，a 的类型是 number，值是0.1，但在 kotlin 中，类型是 Int，值是0.

**为了统一各平台对字面量的自动推导规则，后续 uts 将接管和统一字面量类型推导。所有数字字面量、以及数字字面量组成的运算表达式，均默认推导为 number类型。**

未来，如您需要使用平台专有数字类型，需显式声明，如：
```ts
let c:Int = 42 //显式声明为Int

function test(score: Int): boolean {
	return (score>=60) 
}
test(c)
```

当您调用系统或三方SDK的方法时，如果这些方法的入参要求Int，您之前直接通过字面量赋值`let a = 42`，就是 Int，但未来会变成 number，
导致类型不匹配报错。所以强烈建议您现在就更改代码写法，不依赖kotlin和swift的字面量自动推导，直接显式声明类型，改为`let a:Int = 42`

#### 各种数字类型之间的转换

##### kotlin下转换数字类型

所有的Number 都支持下列方法进行转换（部分类库API使用java编写，其要求的java类型与下列kotlin类型完全一致，可以直接使用

- toByte(): Byte
- toShort(): Short
- toInt(): Int
- toLong(): Long
- toFloat(): Float
- toDouble(): Double

另外Number还具备下列函数进行整型的无符号转换，这部分API 在jvm上没有对应的原始数据类型，主要的使用场景是 色值处理等专业计算场景的`多平台拉齐`

- toUByte(): UByte
- toUShort(): UShort
- toUInt(): UInt
- toULong(): ULong

```ts
let a:Int = 3
a.toFloat() // 转换为 Float 类型，后续也将支持 new Float(a) 方式转换
a.toDouble() // 转换为 Double 类型，后续也将支持 new Double(a) 方式转换
```

<!-- TODO:缺少如何把专有类型转为number @杜庆泉 -->

##### swift下转换数字类型
```ts
// number转成特定类型
let num = 2
num.toInt() //将number 变量 num 转换为 Int 类型
num.toFloat() //将number 变量 num 转换为 float 类型
num.toInt64() // 将number 变量 num 转换为 Int64 类型

// 特定类型转成number
let f: Float = 5.0
let n = Number(f)

// 特定类型转成其他的特定类型
let a:Int = 3
let b = new Double(a) // 将整型变量 a 转换为 Double 类型
```

#### number的边界说明

- 在不同平台上，数值的范围限制不同，超出限制会导致相应的错误或异常
  * 编译至 JavaScript 平台时，数值范围为 ±1.7976931348623157e+308，超出范围会返回 `Infinity` 或 `-Infinity`。
  * 编译至 Kotlin 平台时，整型的数值范围为 -9223372036854775808 到 9223372036854775807，超出范围会报错：`The value is out of range‌`。浮点型的数值范围为 ±1.7976931348623157e+308，超出范围会返回 `Infinity` 或 `-Infinity`。平台专有数字类型范围 [详见](#Kotlin)。
  * 编译至 Swift 平台时，整型的数值范围为 -9223372036854775808 到 9223372036854775807，浮点型的数值范围为 ±1.7976931348623157e+308，超出范围会报错：`integer literal overflows when stored into 'NSNumber'`。平台专有数字类型范围 [详见](#Swift)

#### 更多API
number内置对象有不少API，[详见](buildin-object-api/number.md)

### 字符串（String） @string

字符串是一串表示文本值的字符序列，例如：`"hello world"`。

string在多平台均可良好兼容。

```ts
let s1:string = "abc"  //显式声明string类型并赋值
let s2 = "abc" // 根据字符串字面量"abc"，自动推导为string类型
let s3:string
s3 = "abc"
```

#### 平台专有字符串类型

- iOS 的 NSString

app-ios平台上原生有 NSString ，某些系统API或者三方库API可能使用NSString类型的字符串参数或者返回值。

定义NSString
```ts
let nstr = NSString(string="123") // 类型为NSString
```

可按照下面的方法在 string 和 NSString 之间转换：

- string 转 NSString
```ts
let str = "abcd" // 类型为string
// 方式一：
let nstr1 = NSString(string=str)  // 类型为NSString
// 方式二：
let nstr2 = str as NSString  // 类型为NSString
```

- NSString 转 string
```ts
let nstr3 = NSString(string="123") // 类型为NSString
// 方式一：
let str4 = String(nstr3)  // 类型为string
// 方式二：
let str5 = nstr3 as string  // 类型为string
```

边界情况说明：

- 在不同平台上，字符串的长度限制不同，超出限制会导致相应的错误或异常
  * 编译至 JavaScript 平台时，最大长度取决于 JavaScript 引擎，例如在 V8 中，最大长度为 2^30 - 25，超出限制会报错：`Invalid string length`；在 JSCore 中，最大长度为 2^31 - 1，超出限制会报错：`Out of memory __ERROR`。
  * 编译至 Kotlin 平台时，最大长度受系统内存的限制，超出限制会报错：`java.lang.OutOfMemoryError: char[] of length xxx would overflow`。
  * 编译至 Swift 平台时，最大长度也受系统内存的限制，超出限制目前没有返回信息。

### 日期（Date）@date

日期对象表示日期，包括年月日时分秒等各种日期。

```ts
const myDate = new Date()
console.log(myDate instanceof Date) // Date用typeof会返回object，需使用instanceof判断
const year:number = myDate.getFullYear()
```

[详见](buildin-object-api/date.md)


### 数组（Array）

Array，即数组，支持在单个变量名下存储多个元素，并具有执行常见数组操作的成员。

`js`和`swift`的Array，是可变长的泛型Array。

而在`kotlin`中，其自带的Array是不可变长的，即数组的length是固定的。只有ArrayList是可变长的。

为了拉齐实现，UTS补充了新的Array，替代kotlin的Array。它继承自kotlin的ArrayList，所以可以变长。

如果开发者需要使用原始的kotlin的不可变长的Array，需使用 `kotlin.Array`。

需要使用平台专有数组类型的场景，也是如下2种情况：
1. 某些系统API或三方原生SDK的入参或返回值强制指定了kotlin的原生数组类型。
2. uts新增的可动态变长的Array，在性能上不如固定length、不可变长的原始kotlin.Array。但也只有在巨大量的运算中才能体现出毫秒级的差异。

#### 定义数组

`UTS` 中 Array 有多种创建方式：

1. 字面量创建

```ts
let a1 = [1,2,3];//支持
let a2 = [1,'2',3];//支持

// 需要注意的是，字面量创建的数组，不支持出现空的缺省元素
let a3 = [1,,2,3];//不支持
```

2. 创建数组对象
```ts
let a1 = new Array(1,2,3);//支持
let a2 = new Array(1,'2',3);//支持
let a3 = Array(1,2,3);//支持
let a4 = Array(1,'2','3');//支持
```

3. 使用[]定义数组项的类型
```ts
const a1: string[] = ['a', 'b', 'c'];
```

4. 使用Array<>定义数组项的类型

```ts
const a1:Array<string> = ["uni-app", "uniCloud", "HBuilder"]
```

字面量创建的数组，在uts的老版本上，kotlin自动推导数组类型，可能会推导成intArray，而不是uts的array。建议显式声明类型。

typeof 一个 array 得到的是 object。需使用 Array.isArray 或 instanceof 来判断数组类型。

```ts
let a1 = [1,2,3]
console.log(Array.isArray(a1)) // 返回true
console.log(a1 instanceof Array) // 返回true
```

#### 遍历数组对象

使用foreach来实现数组的遍历

```ts
const array1: string[] = ['a', 'b', 'c'];
array1.forEach((element:string, index:number) => {
	console.log(element)
    console.log(array1[index]) //与上一行代码等价
});
// 打印结果是 a a b b c c
```

#### 平台专有数组类型

##### kotlin专有数组类型

- 专有数组类型清单
	* kotlin.collections.List
	* kotlin.Array
	* ...

- 专有数组类型定义方式

```ts

```

- 专有数组类型 转 Array


```ts
// kotlin.collections.List 转换 Array
let kotlinList= mutableListOf("hello","world")
let utsArr = Array.fromNative(kotlinList) 
```

```ts
// kotlin.Array 转换 Array
let kotlinArray = arrayOf("hello","world")
let utsArr = Array.fromNative(kotlinArray)
```

举个例子。如下代码向系统查询了有多少应用可以响应 `launcher`行为 ，返回的 resolveInfo 是一个 `List<ResolveInfo>`。

```ts
let packageManager = UTSAndroid.getUniActivity()!.getPackageManager();
let intent = new Intent(Intent.ACTION_MAIN);
intent.addCategory(Intent.CATEGORY_LAUNCHER);
// 查询当前设备上安装了几个launcher
let resolveInfo = packageManager.queryIntentActivities(intent,0);
```

可以将其先转换为UTS的Array对象再进行其他处理和操作

```ts
let launcherList = Array.fromNative(resolveInfo) 
console.log(clothing.length);
```

- Array 转 专有数组类型

```ts
let utsArr= ["hello","world"] //类型为Array

// Array 转换 kotlin.collections.List
let kotlinList = utsArr.toKotlinList()

// Array 转换 kotlin.Array
let kotlinArray = utsArr.toTypedArray()

```


##### swift专有数组类型

- 专有数组类型清单
	
- 专有数组类型定义方式

- 专有数组类型 转 Array

- Array 转 专有数组类型


#### 更多API

更多Array的API，[详见](https://uniapp.dcloud.net.cn/uts/buildin-object-api/array.html)


### any类型 @any

有时会遇到在编程阶段还不清楚类型的变量。这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。那么我们可以使用 `any` 类型来标记这些变量：

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

一个表明 null 值的特殊关键字。

uts 的类型系统可以消除来自代码空引用的危险。

许多编程语言中最常见的陷阱之一，就是访问空引用的成员会导致空引用异常。在 Java 中，这等同于 NullPointerException 或简称 NPE。

在 uts 中，类型系统能够区分一个引用可以容纳 null （可空引用）还是不能容纳（非空引用）。 例如，String 类型的常规变量不能容纳 null：

```ts
let a: string = "abc" // 默认情况下，常规初始化意味着非空
a = null // 编译错误
```

如果要允许为空，可以声明一个变量为可空字符串（写作 string | null）

```ts
let b: string | null = "abc" // 可以设置为空
b = null // ok
```

但这不代表 uts 支持广泛的联合类型。实际上目前仅有可为空才能这么写。

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
console.log(a.length) // s的属性可以直接调用，无需安全调用
console.log(b?.length) // b可能为null，null没有length属性，必须加?标记
```

如果 b 非空，就返回 b.length，否则返回 null，`b?.length`这个表达式的类型是 number | null。

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

### 其他

- 关于undefined

js中的 undefined类型表示变量被定义，但是未赋值或初始化。

uts 编译为kotlin和swift时不支持 undefined。即不允许变量未赋值。

每个有类型的变量都需要初始化或赋值。

- json

json 在 web 中是一个 object，不存在 json 这个基础类型。在 uts 中提供了内置的 UTSJSONObject 对象，[详见](buildin-object-api/json.md)
