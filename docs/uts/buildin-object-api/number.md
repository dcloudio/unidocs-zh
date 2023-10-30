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

### toInt()

<!-- UTSJSON.Number.toInt.description -->

<!-- UTSJSON.Number.toInt.param -->

<!-- UTSJSON.Number.toInt.returnValue -->

```ts
let a = 12
console.log(a.toInt());
// expected output: 12

// Int最大值2147483647,溢出了
let b = 2147483648
// expected output: -2147483648 
```

<!-- UTSJSON.Number.toInt.compatibility -->

### toFloat()

<!-- UTSJSON.Number.toFloat.description -->

<!-- UTSJSON.Number.toFloat.param -->

<!-- UTSJSON.Number.toFloat.returnValue -->

<!-- UTSJSON.Number.toFloat.compatibility -->

### toDouble()

<!-- UTSJSON.Number.toDouble.description -->

<!-- UTSJSON.Number.toDouble.param -->

<!-- UTSJSON.Number.toDouble.returnValue -->

<!-- UTSJSON.Number.toDouble.compatibility -->

### toUInt()

<!-- UTSJSON.Number.toUInt.description -->

<!-- UTSJSON.Number.toUInt.param -->

<!-- UTSJSON.Number.toUInt.returnValue -->

<!-- UTSJSON.Number.toUInt.compatibility -->

### toByte()

<!-- UTSJSON.Number.toByte.description -->

<!-- UTSJSON.Number.toByte.param -->

<!-- UTSJSON.Number.toByte.returnValue -->

```ts
let a = 12
console.log(a.toByte());
// expected output: 12
```

<!-- UTSJSON.Number.toByte.compatibility -->

### toLong()

<!-- UTSJSON.Number.toLong.description -->

<!-- UTSJSON.Number.toLong.param -->

<!-- UTSJSON.Number.toLong.returnValue -->

```ts
let a = 12
console.log(a.toLong());
// expected output: 12
```

<!-- UTSJSON.Number.toLong.compatibility -->

### toShort()

<!-- UTSJSON.Number.toShort.description -->

<!-- UTSJSON.Number.toShort.param -->

<!-- UTSJSON.Number.toShort.returnValue -->

<!-- UTSJSON.Number.toShort.compatibility -->

### toUShort()

<!-- UTSJSON.Number.toUShort.description -->

<!-- UTSJSON.Number.toUShort.param -->

<!-- UTSJSON.Number.toUShort.returnValue -->

<!-- UTSJSON.Number.toUShort.compatibility -->

### toULong()

<!-- UTSJSON.Number.toULong.description -->

<!-- UTSJSON.Number.toULong.param -->

<!-- UTSJSON.Number.toULong.returnValue -->

<!-- UTSJSON.Number.toULong.compatibility -->

### toInt64()

<!-- UTSJSON.Number.toInt64.description -->

<!-- UTSJSON.Number.toInt64.param -->

<!-- UTSJSON.Number.toInt64.returnValue -->

<!-- UTSJSON.Number.toInt64.compatibility -->

### toInt32()

<!-- UTSJSON.Number.toInt32.description -->

<!-- UTSJSON.Number.toInt32.param -->

<!-- UTSJSON.Number.toInt32.returnValue -->

<!-- UTSJSON.Number.toInt32.compatibility -->

### toInt16()

<!-- UTSJSON.Number.toInt16.description -->

<!-- UTSJSON.Number.toInt16.param -->

<!-- UTSJSON.Number.toInt16.returnValue -->

<!-- UTSJSON.Number.toInt16.compatibility -->

### toInt8()

<!-- UTSJSON.Number.toInt8.description -->

<!-- UTSJSON.Number.toInt8.param -->

<!-- UTSJSON.Number.toInt8.returnValue -->

<!-- UTSJSON.Number.toInt8.compatibility -->


### toUInt64()

<!-- UTSJSON.Number.toUInt64.description -->

<!-- UTSJSON.Number.toUInt64.param -->

<!-- UTSJSON.Number.toUInt64.returnValue -->

<!-- UTSJSON.Number.toUInt64.compatibility -->

### toUInt32()

<!-- UTSJSON.Number.toUInt32.description -->

<!-- UTSJSON.Number.toUInt32.param -->

<!-- UTSJSON.Number.toUInt32.returnValue -->

<!-- UTSJSON.Number.toUInt32.compatibility -->

### toUInt16()

<!-- UTSJSON.Number.toUInt16.description -->

<!-- UTSJSON.Number.toUInt16.param -->

<!-- UTSJSON.Number.toUInt16.returnValue -->

<!-- UTSJSON.Number.toUInt16.compatibility -->

### toUInt8()

<!-- UTSJSON.Number.toUInt8.description -->

<!-- UTSJSON.Number.toUInt8.param -->

<!-- UTSJSON.Number.toUInt8.returnValue -->

<!-- UTSJSON.Number.toUInt8.compatibility -->

## 静态方法

### from()

<!-- UTSJSON.Number.from.description -->

<!-- UTSJSON.Number.from.param -->

<!-- UTSJSON.Number.from.returnValue -->

<!-- UTSJSON.Number.from.compatibility -->

```ts
let a: Int = 12
let b = Number.from(a)
console.log(b);
// expected output: 12

```