# Math

Math 是一个内置对象，它拥有一些数学常数属性和数学函数方法。

## 实例属性


### E

<!-- UTSJSON.Math.E.description -->

<!-- UTSJSON.Math.E.param -->

<!-- UTSJSON.Math.E.returnValue -->

```ts
function getNapier():number {
  return Math.E;
}
console.log(getNapier());
// expected output: 2.718281828459045
```

<!-- UTSJSON.Math.E.compatibility -->

### LN10

<!-- UTSJSON.Math.LN10.description -->

<!-- UTSJSON.Math.LN10.param -->

<!-- UTSJSON.Math.LN10.returnValue -->


```ts
function getNatLog10():number {
  return Math.LN10;
}
console.log(getNatLog10());
// expected output: 2.302585092994046
```

<!-- UTSJSON.Math.LN10.compatibility -->

### LN2

<!-- UTSJSON.Math.LN2.description -->

<!-- UTSJSON.Math.LN2.param -->

<!-- UTSJSON.Math.LN2.returnValue -->

```ts
function getNatLog2():number {
  return Math.LN2;
}
console.log(getNatLog2());
// expected output: 0.6931471805599453
```

<!-- UTSJSON.Math.LN2.compatibility -->

### LOG2E

<!-- UTSJSON.Math.LOG2E.description -->

<!-- UTSJSON.Math.LOG2E.param -->

<!-- UTSJSON.Math.LOG2E.returnValue -->

```ts
function getLog2e():number {
  return Math.LOG2E;
}
console.log(getLog2e());
// expected output: 1.4426950408889634
```

<!-- UTSJSON.Math.LOG2E.compatibility -->

### LOG10E

<!-- UTSJSON.Math.LOG10E.description -->

<!-- UTSJSON.Math.LOG10E.param -->

<!-- UTSJSON.Math.LOG10E.returnValue -->

```ts
function getLog10e():number {
  return Math.LOG10E;
}
console.log(getLog10e());
// expected output: 0.4342944819032518
```

<!-- UTSJSON.Math.LOG10E.compatibility -->

### PI

<!-- UTSJSON.Math.PI.description -->

<!-- UTSJSON.Math.PI.param -->

<!-- UTSJSON.Math.PI.returnValue -->

```ts
function calculateCircumference (radius:number):number {
  return 2 * Math.PI * radius;
}
console.log(calculateCircumference(1));
// expected output: 6.283185307179586
```

<!-- UTSJSON.Math.PI.compatibility -->

### SQRT1_2

<!-- UTSJSON.Math.SQRT1_2.description -->

<!-- UTSJSON.Math.SQRT1_2.param -->

<!-- UTSJSON.Math.SQRT1_2.returnValue -->

```ts
function getRoot1_2():number {
  return Math.SQRT1_2;
}
console.log(getRoot1_2());
// expected output: 0.7071067811865476
```

<!-- UTSJSON.Math.SQRT1_2.compatibility -->

### SQRT2

<!-- UTSJSON.Math.SQRT2.description -->

<!-- UTSJSON.Math.SQRT2.param -->

<!-- UTSJSON.Math.SQRT2.returnValue -->

```ts
function getRoot2():number {
  return Math.SQRT2;
}
console.log(getRoot2());
// expected output: 1.4142135623730951
```

<!-- UTSJSON.Math.SQRT2.compatibility -->


## 实例方法


### clz32(x)

<!-- UTSJSON.Math.clz32.description -->

<!-- UTSJSON.Math.clz32.param -->

<!-- UTSJSON.Math.clz32.returnValue -->

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

<!-- UTSJSON.Math.clz32.compatibility -->

### sign(x)

<!-- UTSJSON.Math.sign.description -->

<!-- UTSJSON.Math.sign.param -->

<!-- UTSJSON.Math.sign.returnValue -->

```ts
console.log(Math.sign(3));
// expected output: 1

console.log(Math.sign(-3));
// expected output: -1

console.log(Math.sign(0));
// expected output: 0
```
<!-- UTSJSON.Math.sign.compatibility -->

### log10(x)

<!-- UTSJSON.Math.log10.description -->

<!-- UTSJSON.Math.log10.param -->

<!-- UTSJSON.Math.log10.returnValue -->

```ts
console.log(Math.log10(10));
// expected output: 1

console.log(Math.log10(100));
// expected output: 2

console.log(Math.log10(1));
// expected output: 0
```
<!-- UTSJSON.Math.log10.compatibility -->

### log2(x)

<!-- UTSJSON.Math.log2.description -->

<!-- UTSJSON.Math.log2.param -->

<!-- UTSJSON.Math.log2.returnValue -->
```ts
console.log(Math.log2(2));
// expected output: 1

console.log(Math.log2(1024));
// expected output: 10

console.log(Math.log2(1));
// expected output: 0
```
<!-- UTSJSON.Math.log2.compatibility -->

### log1p(x)

<!-- UTSJSON.Math.log1p.description -->

<!-- UTSJSON.Math.log1p.param -->

<!-- UTSJSON.Math.log1p.returnValue -->
```ts
console.log(Math.log1p(Math.E-1));
// expected output: 1

console.log(Math.log1p(0));
// expected output: 0
```
<!-- UTSJSON.Math.log1p.compatibility -->

### expm1(x)

<!-- UTSJSON.Math.expm1.description -->

<!-- UTSJSON.Math.expm1.param -->

<!-- UTSJSON.Math.expm1.returnValue -->
```ts
console.log(Math.expm1(1));
// expected output: 1.718281828459045

console.log(Math.expm1(-38));
// expected output: -1
```
<!-- UTSJSON.Math.expm1.compatibility -->

### cosh(x)

<!-- UTSJSON.Math.cosh.description -->

<!-- UTSJSON.Math.cosh.param -->

<!-- UTSJSON.Math.cosh.returnValue -->
```ts
console.log(Math.cosh(0));
// expected output: 1

console.log(Math.cosh(1));
// expected output: 1.5430806348152437

console.log(Math.cosh(-1));
// expected output: 1.5430806348152437
```
<!-- UTSJSON.Math.cosh.compatibility -->

### sinh(x)

<!-- UTSJSON.Math.sinh.description -->

<!-- UTSJSON.Math.sinh.param -->

<!-- UTSJSON.Math.sinh.returnValue -->

```ts
console.log(Math.sinh(0));
// expected output: 0

console.log(Math.sinh(1));
// expected output: 1.1752011936438014
```
<!-- UTSJSON.Math.sinh.compatibility -->

### tanh(x)

<!-- UTSJSON.Math.tanh.description -->

<!-- UTSJSON.Math.tanh.param -->

<!-- UTSJSON.Math.tanh.returnValue -->
```ts
console.log(Math.tanh(-1));
// Expected output: -0.7615941559557649

console.log(Math.tanh(0));
// Expected output: 0

console.log(Math.tanh(1));
// Expected output: 0.7615941559557649
```
<!-- UTSJSON.Math.tanh.compatibility -->

### acosh(x)

<!-- UTSJSON.Math.acosh.description -->

<!-- UTSJSON.Math.acosh.param -->

<!-- UTSJSON.Math.acosh.returnValue -->

```ts
console.log(Math.acosh(1));
// expected output: 0

console.log(Math.acosh(2));
// expected output: 1.3169578969248166

console.log(Math.acosh(2.5));
// expected output: 1.566799236972411
```

<!-- UTSJSON.Math.acosh.compatibility -->

### asinh(x)

<!-- UTSJSON.Math.asinh.description -->

<!-- UTSJSON.Math.asinh.param -->

<!-- UTSJSON.Math.asinh.returnValue -->

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

<!-- UTSJSON.Math.asinh.compatibility -->

### atanh(x)

<!-- UTSJSON.Math.atanh.description -->

<!-- UTSJSON.Math.atanh.param -->

<!-- UTSJSON.Math.atanh.returnValue -->
```ts
console.log(Math.atanh(0));
// expected output: 0

console.log(Math.atanh(0.5));
// expected output: 0.5493061443340548
```
<!-- UTSJSON.Math.atanh.compatibility -->

### trunc(x)

<!-- UTSJSON.Math.trunc.description -->

<!-- UTSJSON.Math.trunc.param -->

<!-- UTSJSON.Math.trunc.returnValue -->
```ts
console.log(Math.trunc(13.37));
// Expected output: 13

console.log(Math.trunc(42.84));
// Expected output: 42

console.log(Math.trunc(0.123));
// Expected output: 0
```
<!-- UTSJSON.Math.trunc.compatibility -->

### fround(x)

<!-- UTSJSON.Math.fround.description -->

<!-- UTSJSON.Math.fround.param -->

<!-- UTSJSON.Math.fround.returnValue -->
```ts
console.log(Math.fround(1.5));
// expected output: 1.5

console.log(Math.fround(1.337));
// expected output: 1.3370000123977661
```
<!-- UTSJSON.Math.fround.compatibility -->

### abs(x)

<!-- UTSJSON.Math.abs.description -->

<!-- UTSJSON.Math.abs.param -->

<!-- UTSJSON.Math.abs.returnValue -->

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

<!-- UTSJSON.Math.abs.compatibility -->

### acos(x)

<!-- UTSJSON.Math.acos.description -->

<!-- UTSJSON.Math.acos.param -->

<!-- UTSJSON.Math.acos.returnValue -->

```ts
console.log(Math.acos(-1));
// expected output: 3.141592653589793

console.log(Math.acos(0));
// expected output: 1.5707963267948966

console.log(Math.acos(1));
// expected output: 0
```


<!-- UTSJSON.Math.acos.compatibility -->

### asin(x)

<!-- UTSJSON.Math.asin.description -->

<!-- UTSJSON.Math.asin.param -->

<!-- UTSJSON.Math.asin.returnValue -->

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

<!-- UTSJSON.Math.asin.compatibility -->

### atan(x)

<!-- UTSJSON.Math.atan.description -->

<!-- UTSJSON.Math.atan.param -->

<!-- UTSJSON.Math.atan.returnValue -->

```ts
console.log(Math.atan(1));
// expected output: 0.7853981633974483

console.log(Math.atan(0));
// expected output: 0
```
<!-- UTSJSON.Math.atan.compatibility -->

### atan2(y, x)

<!-- UTSJSON.Math.atan2.description -->

<!-- UTSJSON.Math.atan2.param -->

<!-- UTSJSON.Math.atan2.returnValue -->

```ts
console.log(Math.atan2(90, 15));
// expected output: 1.4056476493802699

console.log(Math.atan2(15, 90));
// expected output: 0.16514867741462683
```
<!-- UTSJSON.Math.atan2.compatibility -->

### ceil(x)

<!-- UTSJSON.Math.ceil.description -->

<!-- UTSJSON.Math.ceil.param -->

<!-- UTSJSON.Math.ceil.returnValue -->

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

<!-- UTSJSON.Math.ceil.compatibility -->

### cos(x)

<!-- UTSJSON.Math.cos.description -->

<!-- UTSJSON.Math.cos.param -->

<!-- UTSJSON.Math.cos.returnValue -->
```ts
console.log(Math.cos(0));
// expected output: 1

console.log(Math.cos(1));
// expected output: 0.5403023058681398
```
<!-- UTSJSON.Math.cos.compatibility -->

### exp(x)

<!-- UTSJSON.Math.exp.description -->

<!-- UTSJSON.Math.exp.param -->

<!-- UTSJSON.Math.exp.returnValue -->

```ts
console.log(Math.exp(-1));
// expected output: 0.36787944117144233

console.log(Math.exp(0));
// expected output: 1

console.log(Math.exp(1));
// expected output: 2.718281828459045
```
<!-- UTSJSON.Math.exp.compatibility -->

### floor(x)

<!-- UTSJSON.Math.floor.description -->

<!-- UTSJSON.Math.floor.param -->

<!-- UTSJSON.Math.floor.returnValue -->
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
<!-- UTSJSON.Math.floor.compatibility -->

### log(x)

<!-- UTSJSON.Math.log.description -->

<!-- UTSJSON.Math.log.param -->

<!-- UTSJSON.Math.log.returnValue -->

```ts
console.log(Math.log(1));
// expected output: 0

console.log(Math.log(10));
// expected output: 2.302585092994046
```
<!-- UTSJSON.Math.log.compatibility -->

### max(values)

<!-- UTSJSON.Math.max.description -->

<!-- UTSJSON.Math.max.param -->

<!-- UTSJSON.Math.max.returnValue -->
```ts
console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1
```
<!-- UTSJSON.Math.max.compatibility -->

### min(values)

<!-- UTSJSON.Math.min.description -->

<!-- UTSJSON.Math.min.param -->

<!-- UTSJSON.Math.min.returnValue -->
```ts
console.log(Math.min(2, 3, 1));
// expected output: 1

console.log(Math.min(-2, -3, -1));
// expected output: -3
```
<!-- UTSJSON.Math.min.compatibility -->

### pow(x, y)

<!-- UTSJSON.Math.pow.description -->

<!-- UTSJSON.Math.pow.param -->

<!-- UTSJSON.Math.pow.returnValue -->
```ts
console.log(Math.pow(7, 3));
// expected output: 343

console.log(Math.pow(4, 0.5));
// expected output: 2
```
<!-- UTSJSON.Math.pow.compatibility -->

### random()

<!-- UTSJSON.Math.random.description -->

<!-- UTSJSON.Math.random.param -->

<!-- UTSJSON.Math.random.returnValue -->
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
<!-- UTSJSON.Math.random.compatibility -->

### round(x)

<!-- UTSJSON.Math.round.description -->

<!-- UTSJSON.Math.round.param -->

<!-- UTSJSON.Math.round.returnValue -->
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

<!-- UTSJSON.Math.round.compatibility -->

### sin(x)

<!-- UTSJSON.Math.sin.description -->

<!-- UTSJSON.Math.sin.param -->

<!-- UTSJSON.Math.sin.returnValue -->

```ts
console.log(Math.sin(0));
// expected output: 0

console.log(Math.sin(1));
// expected output: 0.8414709848078965
```
<!-- UTSJSON.Math.sin.compatibility -->

### sqrt(x)

<!-- UTSJSON.Math.sqrt.description -->

<!-- UTSJSON.Math.sqrt.param -->

<!-- UTSJSON.Math.sqrt.returnValue -->
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
<!-- UTSJSON.Math.sqrt.compatibility -->

### tan(x)

<!-- UTSJSON.Math.tan.description -->

<!-- UTSJSON.Math.tan.param -->

<!-- UTSJSON.Math.tan.returnValue -->
```ts
console.log(Math.tan(0));
// expected output: 0

console.log(Math.tan(1));
// expected output: 1.5574077246549023
```
<!-- UTSJSON.Math.tan.compatibility -->