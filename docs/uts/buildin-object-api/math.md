
## Math

Math 是一个内置对象，它拥有一些数学常数属性和数学函数方法。

### 实例属性

### E

Math.E 属性表示自然对数的底数（或称为基数），e，约等于 2.718。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
function getNapier():number {
  return Math.E;
}
console.log(getNapier());
// expected output: 2.718281828459045
```

### LN10

Math.LN10 属性表示 10 的自然对数，约为 2.302。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
function getNatLog10():number {
  return Math.LN10;
}
console.log(getNatLog10());
// expected output: 2.302585092994046
```

### LN2

Math.LN2 属性表示 2 的自然对数，约为 0.693。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
function getNatLog2():number {
  return Math.LN2;
}
console.log(getNatLog2());
// expected output: 0.6931471805599453
```

### LOG10E

Math.LOG10E 属性表示以 10 为底数，e 的对数，约为 0.434。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
function getLog10e():number {
  return Math.LOG10E;
}
console.log(getLog10e());
// expected output: 0.4342944819032518
```

### LOG2E

Math.LOG2E 属性表示以 2 为底数，e 的对数，约为 1.442。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
function getLog2e():number {
  return Math.LOG2E;
}
console.log(getLog2e());
// expected output: 1.4426950408889634
```

### PI

Math.PI 表示一个圆的周长与直径的比例，约为 3.14159。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
function calculateCircumference (radius:number):number {
  return 2 * Math.PI * radius;
}
console.log(calculateCircumference(1));
// expected output: 6.283185307179586
```

### SQRT1_2

Math.SQRT1_2 属性表示 1/2 的平方根，约为 0.707。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
function getRoot1_2():number {
  return Math.SQRT1_2;
}
console.log(getRoot1_2());
// expected output: 0.7071067811865476
```

### SQRT2

Math.SQRT2 属性表示 2 的平方根，约为 1.414。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
function getRoot2():number {
  return Math.SQRT2;
}
console.log(getRoot2());
// expected output: 1.4142135623730951
```
### 实例方法

### abs

Math.abs(x) 函数返回一个数字的绝对值。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

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

### acos

Math.acos() 返回一个数的反余弦值（单位为弧度）。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.acos(-1));
// expected output: 3.141592653589793

console.log(Math.acos(0));
// expected output: 1.5707963267948966

console.log(Math.acos(1));
// expected output: 0
```

### acosh

Math.acosh() 函数返回一个数的反双曲余弦值。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.acosh(1));
// expected output: 0

console.log(Math.acosh(2));
// expected output: 1.3169578969248166

console.log(Math.acosh(2.5));
// expected output: 1.566799236972411
```

### asin

Math.asin() 方法返回一个数值的反正弦（单位为弧度）。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.asin(-1));
// expected output: -1.5707963267948966 (-pi/2)

console.log(Math.asin(0));
// expected output: 0

console.log(Math.asin(0.5));
// expected output: 0.5235987755982989

console.log(Math.asin(1));
// expected output: 1.5707963267948966
```

### asinh

Math.asinh() 返回一个数值的反双曲正弦值。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

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

### atan

Math.atan() 函数返回一个数值的反正切（以弧度为单位）。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.atan(1));
// expected output: 0.7853981633974483

console.log(Math.atan(0));
// expected output: 0
```

### atan2

Math.atan2() 返回从原点 (0,0) 到 (x,y) 点的线段与 x 轴正方向之间的平面角度 (弧度值)，也就是 Math.atan2(y,x)。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.atan2(90, 15));
// expected output: 1.4056476493802699

console.log(Math.atan2(15, 90));
// expected output: 0.16514867741462683
```

### atanh

Math.atanh() 函数返回一个数值反双曲正切值。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.atanh(0));
// expected output: 0

console.log(Math.atanh(0.5));
// expected output: 0.5493061443340548
```

### cbrt

Math.cbrt() 函数返回任意数字的立方根。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

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

### ceil

Math.ceil() 函数总是四舍五入并返回大于等于给定数字的最小整数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

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

### clz32

Math.clz32() 函数返回一个数字在转换成 32 无符号整形数字的二进制形式后，开头的 0 的个数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

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

### cos

Math.cos() 函数返回一个数值的余弦值。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.cos(0));
// expected output: 1

console.log(Math.cos(1));
// expected output: 0.5403023058681398
```

### cosh

Math.cosh() 函数返回数值的双曲余弦函数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.cosh(0));
// expected output: 1

console.log(Math.cosh(1));
// expected output: 1.5430806348152437

console.log(Math.cosh(-1));
// expected output: 1.5430806348152437
```

### exp

Math.exp() 函数返回 e^x，x 表示参数，e 是欧拉常数（Euler's constant），自然对数的底数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.exp(-1));
// expected output: 0.36787944117144233

console.log(Math.exp(0));
// expected output: 1

console.log(Math.exp(1));
// expected output: 2.718281828459045
```

### expm1

Math.expm1() 函数返回 E^x - 1, 其中 x 是该函数的参数，E 是自然对数的底数 2.718281828459045。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.expm1(1));
// expected output: 1.718281828459045

console.log(Math.expm1(-38));
// expected output: -1
```

### floor

Math.floor() 函数总是返回小于等于一个给定数字的最大整数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

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

### fround

Math.fround() 可以将任意的数字转换为离它最近的单精度浮点数形式的数字。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|x|

```ts
console.log(Math.fround(1.5));
// expected output: 1.5

console.log(Math.fround(1.337));
// expected output: 1.3370000123977661
```

### hypot

Math.hypot() 函数返回所有参数的平方和的平方根。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|√ `(3.7.1+)`|

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

### imul

该函数将两个参数分别转换为 32 位整数，相乘后返回 32 位结果。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|√ `(3.7.1+)`|

```ts
console.log(Math.imul(3, 4));
// expected output: 12

console.log(Math.imul(-5, 12));
// expected output: -60
```

### log

Math.log() 函数返回一个数的自然对数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.log(1));
// expected output: 0

console.log(Math.log(10));
// expected output: 2.302585092994046
```

### log10

Math.log10() 函数返回一个数字以 10 为底的对数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.log10(10));
// expected output: 1

console.log(Math.log10(100));
// expected output: 2

console.log(Math.log10(1));
// expected output: 0
```

### log1p

Math.log1p() 函数返回一个数字加 1 后的自然对数 (底为 E), 既log(x+1)。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.log1p(Math.E-1));
// expected output: 1

console.log(Math.log1p(0));
// expected output: 0
```

### log2

Math.log2() 函数返回一个数字以 2 为底的对数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.log2(2));
// expected output: 1

console.log(Math.log2(1024));
// expected output: 10

console.log(Math.log2(1));
// expected output: 0
```

### max

Math.max() 函数返回作为输入参数的最大数字。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1
```

### min

Math.min() 函数返回作为输入参数的数字中最小的一个。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.min(2, 3, 1));
// expected output: 1

console.log(Math.min(-2, -3, -1));
// expected output: -3
```

### pow

Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 base^exponent。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.pow(7, 3));
// expected output: 343

console.log(Math.pow(4, 0.5));
// expected output: 2
```

### random

Math.random() 函数返回一个浮点数，伪随机数在范围从0 到小于1。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

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

### round

Math.round() 函数返回一个数字四舍五入后最接近的整数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.round(20.49));
// expected output: 20

console.log(Math.round(20.5));
// expected output: 21

console.log(Math.round(-20.5));
// expected output: -20

console.log(Math.round(-20.51));
// expected output: -21
```

### sign

Math.sign() 函数返回一个数字的符号，分别是 1、-1、0，代表的各是正数、负数、零。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.sign(3));
// expected output: 1

console.log(Math.sign(-3));
// expected output: -1

console.log(Math.sign(0));
// expected output: 0
```

### sin

Math.sin() 函数返回一个数值的正弦值。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.sin(0));
// expected output: 0

console.log(Math.sin(1));
// expected output: 0.8414709848078965
```

### sinh

Math.sinh() 函数返回一个数字 (单位为角度) 的双曲正弦值。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.sinh(0));
// expected output: 0

console.log(Math.sinh(1));
// expected output: 1.1752011936438014
```

### sqrt

Math.sqrt() 函数返回一个数的平方根。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

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

### tan

Math.tan() 方法返回一个数值的正切值。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.tan(0));
// expected output: 0

console.log(Math.tan(1));
// expected output: 1.5574077246549023
```

### tanh

Math.tanh() 函数将会返回一个数的双曲正切函数值。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.tanh(-1));
// Expected output: -0.7615941559557649

console.log(Math.tanh(0));
// Expected output: 0

console.log(Math.tanh(1));
// Expected output: 0.7615941559557649
```

### trunc

Math.trunc() 方法会将数字的小数部分去掉，只保留整数部分。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.7.1+)`|

```ts
console.log(Math.trunc(13.37));
// Expected output: 13

console.log(Math.trunc(42.84));
// Expected output: 42

console.log(Math.trunc(0.123));
// Expected output: 0
```
