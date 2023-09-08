# JSON

## 静态方法

### parse

JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的对象。可能返回值是： UTSJSONObject / UTSArray/ number,boolean 等基本数据类型


> 特别说明：  
> HBuilderX3.9.0统一为以上规范，在HBuilderX3.9.0之前版本 返回值只可能是 UTSJSONObject， 基本数据类型会转换失败

```ts
const json = `{"result":true, "count":42}`;
const obj = JSON.parse(json);

console.log(obj["count"]);
// expected output: 42

console.log(obj["result"]);
// expected output: true
```

**注意**

- JSON.parse 解析出来的对象，目前仅支持使用方括号[]访问
- 如果输入的字符串不是合法的json格式，则会返回 null

## 实例方法


### parse(text, reviver?)

<!-- UTSJSON.JSON.parse.description -->

<!-- UTSJSON.JSON.parse.param -->

<!-- UTSJSON.JSON.parse.returnValue -->

 ```ts
class Person {
    name:string = ""
    age:number = 0
}

// 带泛型的parse，这里的personObj 类型是 我们定义的`Persion`类
let personObj = JSON.parse<Person>('{"name":"zhangsan","age":12}')
// 不带泛型的parse，这里的jsonObj类型是通用的`UTSJSONObject`
let jsonObj = JSON.parse('{"name":"zhangsan","age":12}')
```

HBuilderX 3.9+，支持JSON.parse传入[泛型](../generics.md)。

与不带泛型的JSON.parse 相比，多了一个`<Persion>` 尖括号 用来指定返回类型。

相比不带泛型的`parse`函数，带泛型的 `parse`函数，会提高反序列数据的开发效率，明确的结构数据可以提升工程健壮度


<!-- UTSJSON.JSON.parse.compatibility -->

### stringify(value, replacer?, space?)

<!-- UTSJSON.JSON.stringify.description -->

<!-- UTSJSON.JSON.stringify.param -->

<!-- UTSJSON.JSON.stringify.returnValue -->

```ts
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([3, 'false', boolean]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""

```

<!-- UTSJSON.JSON.stringify.compatibility -->

### stringify(value, replacer?, space?)

<!-- UTSJSON.JSON.stringify_1.description -->

<!-- UTSJSON.JSON.stringify_1.param -->

<!-- UTSJSON.JSON.stringify_1.returnValue -->

<!-- UTSJSON.JSON.stringify_1.compatibility -->

### parseObject(text: string)

<!-- UTSJSON.JSON.parseObject.description -->

<!-- UTSJSON.JSON.parseObject.param -->

<!-- UTSJSON.JSON.parseObject.returnValue -->

<!-- UTSJSON.JSON.parseObject.compatibility -->

### parseObject\<T\>(text: string)

<!-- UTSJSON.JSON.parseObject_1.description -->

<!-- UTSJSON.JSON.parseObject_1.param -->

<!-- UTSJSON.JSON.parseObject_1.returnValue -->

<!-- UTSJSON.JSON.parseObject_1.compatibility -->

### parseArray(text: string)

<!-- UTSJSON.JSON.parseArray.description -->

<!-- UTSJSON.JSON.parseArray.param -->

<!-- UTSJSON.JSON.parseArray.returnValue -->

<!-- UTSJSON.JSON.parseArray.compatibility -->

### parseArray\<T\>(text: string)

<!-- UTSJSON.JSON.parseArray_1.description -->

<!-- UTSJSON.JSON.parseArray_1.param -->

<!-- UTSJSON.JSON.parseArray_1.returnValue -->

<!-- UTSJSON.JSON.parseArray_1.compatibility -->
