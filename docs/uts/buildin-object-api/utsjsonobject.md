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
### getAny(key): any | null

<!-- UTSJSON.UTSJSONObject.getAny.description -->

<!-- UTSJSON.UTSJSONObject.getAny.param -->

<!-- UTSJSON.UTSJSONObject.getAny.returnValue -->

<!-- UTSJSON.UTSJSONObject.getAny.compatibility -->

### getBoolean(key): boolean | null

<!-- UTSJSON.UTSJSONObject.getBoolean.description -->

<!-- UTSJSON.UTSJSONObject.getBoolean.param -->

<!-- UTSJSON.UTSJSONObject.getBoolean.returnValue -->

<!-- UTSJSON.UTSJSONObject.getBoolean.compatibility -->

### getNumber(key): number | null

<!-- UTSJSON.UTSJSONObject.getNumber.description -->

<!-- UTSJSON.UTSJSONObject.getNumber.param -->

<!-- UTSJSON.UTSJSONObject.getNumber.returnValue -->

<!-- UTSJSON.UTSJSONObject.getNumber.compatibility -->

### getString(key): string | null

<!-- UTSJSON.UTSJSONObject.getString.description -->

<!-- UTSJSON.UTSJSONObject.getString.param -->

<!-- UTSJSON.UTSJSONObject.getString.returnValue -->

<!-- UTSJSON.UTSJSONObject.getString.compatibility -->

### getJSON(key): UTSJSONObject | null	

<!-- UTSJSON.UTSJSONObject.getJSON.description -->

<!-- UTSJSON.UTSJSONObject.getJSON.param -->

<!-- UTSJSON.UTSJSONObject.getJSON.returnValue -->

<!-- UTSJSON.UTSJSONObject.getJSON.compatibility -->

### getArray(key): Array<any> | null	

<!-- UTSJSON.UTSJSONObject.getArray.description -->

<!-- UTSJSON.UTSJSONObject.getArray.param -->

<!-- UTSJSON.UTSJSONObject.getArray.returnValue -->

<!-- UTSJSON.UTSJSONObject.getArray.compatibility -->

### getArray(key): Array<T> | null	

<!-- UTSJSON.UTSJSONObject.getArray_1.description -->

<!-- UTSJSON.UTSJSONObject.getArray_1.param -->

<!-- UTSJSON.UTSJSONObject.getArray_1.returnValue -->

<!-- UTSJSON.UTSJSONObject.getArray_1.compatibility -->

这个方法用来获取指定元素类型的数组

```uts

let obj = JSON.parseObject('{"name":"tom","tag":["student","user"]}')

// 这里得到是 Array<*> 
let noGenericArray = obj!.getArray("tag")
console.log(noGenericArray)

// 这里得到是 Array<string> 
let genericArray = obj!.getArray<string>("tag")
console.log(genericArray)

```

### toMap(): Map<string, any>	

<!-- UTSJSON.UTSJSONObject.toMap.description -->

<!-- UTSJSON.UTSJSONObject.toMap.param -->

<!-- UTSJSON.UTSJSONObject.toMap.returnValue -->

```ts
person.toMap().forEach((value, key) => {
    console.log(key)
    console.log(value)
})
```

<!-- UTSJSON.UTSJSONObject.toMap.compatibility -->
