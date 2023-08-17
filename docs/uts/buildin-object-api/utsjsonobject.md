# UTSJSONObject

UTSJSONObject 是 UTS 语言的内置类型，主要用来操作[匿名对象](../object.md#anonymous-object)

## 创建实例

UTSJSONObject 对象的实例目前主要通过两种方式来创建：

* 通过[对象字面量](../literal.md#object-literal)

```ts
const person: UTSJSONObject = {
    name: 'Tom',
    printName: () => {
      // ...
    }
}
```

* 通过 JSON 字符串

```ts
const person: UTSJSONObject = JSON.parse('{"name":"Tom"}')
```

## 实例方法

### get(key: string): any | null

返回指定键对应的值，如果对象中不存在此键则返回 null。

```ts
const name: string = person.get('name') as string
```

get 方法可以简化为使用下标运算符 `[]` 访问

```ts
const name: string = person['name'] as string
```

### set(key: string, value: any | null)

增加或更新指定键对应的值。

```ts
person.set('name', 'Tom')
```

set 方法可以简化为使用下标运算符 `[]` 赋值

```ts
person['name'] = 'Tom'
```

### toMap(): Map<string, any>

将当前 UTSJSONObject 实例转换为 Map 实例。

```ts
person.toMap().forEach((key: string, value: any) => {
    console.log(key)
    console.log(value)
})
```
