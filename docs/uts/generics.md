# 泛型（Generics）

UTS 支持泛型（Generics）特性，允许您编写更通用、可重用的代码，同时提高类型安全性。

## 定义泛型

泛型使用尖括号 `<>` 声明一个或多个泛型参数。

## 泛型函数

泛型函数的泛型参数定义在函数参数的圆括号之前。

```ts
function test<T>(arg: T): T {
  return arg
}

const str: string = test<string>('a')

const num: number = test<number>(1)
```

## 泛型类

泛型类的泛型参数定义在类名之后。

```ts
class Test<T> {
  value: T
  constructor (value: T) {
    this.value = value
  }
}

const test1: Test<string> = new Test<string>('a')
const str1: string = test1.value

const test2: Test<number> = new Test<number>(1)
const num1: number = test2.value
```

## 泛型接口

泛型接口与泛型类相似，泛型参数定义在接口名之后。

```ts
interface ITest<T> {
  value: T
}

class TestImpl<T> implements ITest<T> {
  value: T
}
```

## 泛型推断

当泛型参数类型与函数的参数类型相关时，泛型参数能够根据函数参数类型自动推断，此时可以省略泛型参数。

```ts
const str1 = test<string>('a')
const str2 = test('a')
```

## 泛型约束

可以使用 `extends` 关键字来限制泛型参数的类型范围。

```ts
function testArray<T extends Array<string>>(arg: T): T {
  return arg
}
```

使用其他泛型类型时，如果不需要限制泛型参数的类型可以使用 `unknown` 关键字表示。

```ts
function testArray<T extends Array<unknown>>(arg: T): T {
  return arg
}
```

## 使用限制

泛型类型不可以作为值使用。

> HBuilderX 3.9.0+ 支持通过特殊方式将泛型类型作为值使用：给方法通过`<>`的方式传入一个参数类型，方法可以根据传入来动态决定返回类型，也就是方法的返回值具有多种类型的可能。
>
> 这个未开放的泛型用法最常用的是在request api里，[详见](../uni-app-x/tutorial/request.md)