# 类型兼容性

由于 UTS 语言最终会转换为 kotlin、swift 等语言，UTS 语言中的接口也更接近 kotlin 中的接口或 swift 中的协议，在类型兼容性判断时与 TS 语言的结构类型系统有着明显的区别：

- TS：如果两个类型的内部结构相似（具有相同的属性和方法），那么它们被认为是兼容的，即使它们的名称不同。
- UTS：依赖于类型的显式声明，必需是同一个类型或者存在显式的继承/实现关系。

```ts
interface IPerson {
    name: string
    printName(): void
}

class Person implements IPerson {
    constructor(public name: string) {}
    printName(): void {
        console.log(this.name)
    }
}

class Person1 {
    constructor(public name: string) {}
    printName(): void {
        console.log(this.name)
    }
}

type PersonObject = {
    name: string
    printName(): void
}

class Person2 extends Person {}

const person: IPerson = new Person('Tom') // 正确，Person 实现自 IPerson

const person1: Person = new Person1('Tom') // 错误，Person 与 Person1 无关只是结构相同

const person2: Person = new Person2('Tom') // 正确，Person2 继承自 Person

const person3: IPerson = {
    name: 'Tom',
    printName: function () {
        console.log(this.name)
    }
} as PersonObject // 错误，PersonObject 类型与 IPerson 无关只是结构相同
```
