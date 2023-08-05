# JSON

## 静态方法

### parse

JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 UTSJSONObject。

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

<!-- UTSJSON.JSON.parse.returValue -->

 ```ts
class Persion {
    var name =""
    var age = 0
}

// 带泛型的parse，这里的personObj 类型是 我们定义的`Persion`类
let personObj = JSON.parse<Persion>('{"name":"zhangsan","age":12}')
// 不带泛型的parse，这里的jsonObj类型是通用的`UTSJSONObject`
let jsonObj = JSON.parse('{"name":"zhangsan","age":12}')
```

与不带泛型的JSON.parse 相比，多了一个`<Persion>` 尖括号 用来指定返回类型。

在这个示例中，看上去好像也不是很有用。太简单了。我们可以扩展一下

```ts
let userArrayArray = JSON.parse<Array<Persion>>('[{"name":"zhangsan","age":12},{"name":"lisi","age":13}]')
```
 
我们得到了一个Person数组，甚至我们还可以把Person 扩展到几百条属性，或者在其中嵌套更多层数据结构，

总结：带泛型的 `parse`函数，会提高我们反序列数据的开发效率，明确的结构数据可以提升工程健壮度，推荐使用


<!-- UTSJSON.JSON.parse.compatibility -->

### stringify(value, replacer?, space?)

<!-- UTSJSON.JSON.stringify.description -->

<!-- UTSJSON.JSON.stringify.param -->

<!-- UTSJSON.JSON.stringify.returValue -->

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

<!-- UTSJSON.JSON.stringify_1.returValue -->

<!-- UTSJSON.JSON.stringify_1.compatibility -->