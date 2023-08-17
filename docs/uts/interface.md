# 接口（interface）@interface

接口提供了一种约定，用于确保对象的属性和方法遵循特定的模式。接口只能包含抽象的声明，不能包含具体的实现。接口本身不能被实例化，它可以被类所采用，以提供具体的实现。

接口使用关键字 `interface` 声明。

```ts
interface IPerson {
  name: string;
  printName(): void;
}
```

## 接口继承

接口可以继承一个或多个接口：

```ts
class IPerson1 extends IPerson {}
```

## 实现接口

类可以实现一个或多个接口：

```ts
class Person implements IPerson {
  constructor(public name: string) {}
  printName() {
    console.log(this.name);
  }
}
```
