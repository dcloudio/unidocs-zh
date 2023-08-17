# 对象类型（Object Types）

UTS 语言支持使用对象字面量（Object Literal）声明类型，但不支持任意位置直接使用匿名对象类型，需要先为对象类型命名。

## 定义类型

使用 [type](./type-aliases.md) 关键字为对象类型命名，命名后可在其他位置使用此别名。

::: preview

> 支持的用法

```ts
type Person = {
    name: string
    age: number
}
 
function greet(person: Person) {
    // ...
}
```

> 未支持的用法

```ts
function greet(person: { name: string; age: number }) {
    // ...
}
```

:::

## 实例化

使用 [type](./type-aliases.md) 为对象类型命名实际上编译器会自动创建对应名称的 [Class](./class.md)，使用 `as` 关键字将对象字面量的值与类型相关联，编译器会自动创建对应类型的实例。

::: preview

> 正确的用法

```ts
greet({ name: 'Tom', age: 18 } as Person)
```

> 类型不匹配

```ts
greet({ name: 'Tom', age: 18 })
```

:::

## 嵌套限制

嵌套层级深的对象字面量需要手动展开逐一命名

::: preview

> 支持的用法

```ts
type PersonInfo = {
    age: number
}

type Person = {
    name: string
    info: PersonInfo
}

const person = {
    name: 'Tom',
    info: {
        age: 18
    } as PersonInfo
} as Person
```

> 未支持的用法

```ts
type Person = {
    name: string
    info: {
        age: number
    }
}
```

实例化的时候也需要逐级绑定类型

::: preview

> 支持的用法

```ts
const person = {
    name: 'Tom',
    info: {
        age: 18
    } as PersonInfo
} as Person
```

> 未支持的用法

```ts
const person = {
    name: 'Tom',
    info: {
        age: 18
    }
} as Person
```

## 匿名对象（Anonymous Object）@anonymous-object

UTS 语言虽然不支持匿名对象类型声明，但是支持匿名的对象字面量作为值使用。匿名的对象字面量作为值使用时，编译器会自动将其初始化为 [UTSJSONObject](./buildin-object-api/utsjsonobject.md) 类型的实例。

```ts
const person: UTSJSONObject = {
    name: 'Tom',
    age: 18,
}
```

```ts
function printName(obj: UTSJSONObject) {
    console.log(obj['name'])
}

printName({
    name: 'Tom',
    age: 18,
})
```
