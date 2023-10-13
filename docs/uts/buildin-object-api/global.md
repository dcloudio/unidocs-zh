# Global


## 实例方法


### parseInt(string, radix?)

<!-- UTSJSON.Global.parseInt.description -->

<!-- UTSJSON.Global.parseInt.param -->

<!-- UTSJSON.Global.parseInt.returnValue -->

<!-- UTSJSON.Global.parseInt.compatibility -->

**注意**

- 该方法仅支持对 string 类型的解析，传入其他类型会编译报错。字符串开头的空白符将会被忽略。
- radix 参数可不传，默认值为 10。但是不可传入 null, 传入 null 会编译报错。
- radix 小于 2 或大于 36，或第一个非空格字符不能转换为数字将返回 NAN。第一个非空格字符不能转换为数字是指在指定的 radix 下，第一个非空字符不能转成数字，示例如下：

```ts
const a = parseInt("a"); // 结果为 NAN
const b = parseInt("a", 16) // 结果为 10 (原因：16进制下 a 是合法字符)
const c = parseInt("546", 2) // 结果为 NAN (原因：除了“0、1”外，其他数字都不是有效二进制数字)

```

- 有关 radix 缺省（ radix 为 0 或者未指定）时的自动推导：
	+ 如果输入的 string 以 0x 或 0X（一个 0，后面是小写或大写的 X）开头，那么 radix 被假定为 16，字符串的其余部分被当做十六进制数去解析。
	+ 如果输入的 string 以任何其他值开头，radix 是 10 (十进制)。
- 如果 parseInt 遇到的字符不是指定 radix 参数中的数字，它将忽略该字符以及所有后续字符，并返回到该点为止已解析的整数值。parseInt 将数字截断为整数值。允许前导和尾随空格。
- 某些数字在其字符串表示形式中使用 e 字符（例如 6.022×23 表示 6.022e23 ），因此当对非常大或非常小的数字使用数字时，使用 parseInt 截断数字将产生意外结果。如：parseInt("6.022e23") == 6。

> 特别注意：
> 当要解析的字符串表示的数字很大（超过最大的整数 9223372036854775807 ）时，将以科学计数法进行表示，此时会丢失精度（ iOS 和 Android 结果一致，和 JS 结果相比有误差）。（此特性将在 HBuilderX 3.93+ 生效，HBuilderX 3.92 及以下版本可表示的数字的最大值为最大的 Int 值，iOS 平台为 9223372036854775807，Android 平台 为 2147483647，超过此值 iOS 下出现整型溢出，Android 下会返回 NAN ）。


### parseFloat(string)

<!-- UTSJSON.Global.parseFloat.description -->

<!-- UTSJSON.Global.parseFloat.param -->

<!-- UTSJSON.Global.parseFloat.returnValue -->

<!-- UTSJSON.Global.parseFloat.compatibility -->

- 注意： 该方法仅支持对 string 类型的解析，传入其他类型会编译报错。

### isNaN(number)

<!-- UTSJSON.Global.isNaN.description -->

<!-- UTSJSON.Global.isNaN.param -->

<!-- UTSJSON.Global.isNaN.returnValue -->

<!-- UTSJSON.Global.isNaN.compatibility -->

### isFinite(number)

<!-- UTSJSON.Global.isFinite.description -->

<!-- UTSJSON.Global.isFinite.param -->

<!-- UTSJSON.Global.isFinite.returnValue -->

<!-- UTSJSON.Global.isFinite.compatibility -->

### decodeURI(encodedURI)

<!-- UTSJSON.Global.decodeURI.description -->

<!-- UTSJSON.Global.decodeURI.param -->

<!-- UTSJSON.Global.decodeURI.returnValue -->

<!-- UTSJSON.Global.decodeURI.compatibility -->

### decodeURIComponent(encodedURIComponent)

<!-- UTSJSON.Global.decodeURIComponent.description -->

<!-- UTSJSON.Global.decodeURIComponent.param -->

<!-- UTSJSON.Global.decodeURIComponent.returnValue -->

<!-- UTSJSON.Global.decodeURIComponent.compatibility -->

### encodeURI(uri)

<!-- UTSJSON.Global.encodeURI.description -->

<!-- UTSJSON.Global.encodeURI.param -->

<!-- UTSJSON.Global.encodeURI.returnValue -->

<!-- UTSJSON.Global.encodeURI.compatibility -->

### encodeURIComponent(uriComponent)

<!-- UTSJSON.Global.encodeURIComponent.description -->

<!-- UTSJSON.Global.encodeURIComponent.param -->

<!-- UTSJSON.Global.encodeURIComponent.returnValue -->

<!-- UTSJSON.Global.encodeURIComponent.compatibility -->