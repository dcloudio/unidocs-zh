# Number


Number 对象是经过封装的能让你处理数字值的对象。

## 实例方法


### toFixed(fractionDigits?)

<!-- UTSJSON.Number.toFixed.description -->

<!-- UTSJSON.Number.toFixed.param -->

<!-- UTSJSON.Number.toFixed.returnValue -->

```ts
function financial(x: Number): String {
  return x.toFixed(2);
}
console.log(financial(123.456));
// expected output: "123.46"
console.log(financial(0.004));
// expected output: "0.00"
```

<!-- UTSJSON.Number.toFixed.compatibility -->

### toByte()

toByte() 方法将当前的Number数据转换为Byte表示，如果超出Byte最大值表示范围，会得到溢出后余数表示

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
let a = 12
console.log(a.toByte());
// expected output: 12
```


### toInt()

toInt() 方法将当前的Number数据转换为Int表示，如果超出Int最大值表示范围，会得到溢出后余数表示

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
let a = 12
console.log(a.toInt());
// expected output: 12

// Int最大值2147483647,溢出了
let b = 2147483648
// expected output: -2147483648 
```

### toLong()

toLong() 方法将当前的Number数据转换为Long表示，如果超出Long最大值表示范围，会得到溢出后余数表示

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
let a = 12
console.log(a.toLong());
// expected output: 12
```
