# Map

Map 对象保存键值对。任何值（对象或者基本类型）都可以作为一个键或一个值。

## 实例属性


### size

<!-- UTSJSON.Map.size.description -->

<!-- UTSJSON.Map.size.param -->

<!-- UTSJSON.Map.size.returnValue -->

```ts
const map1 = new Map<string,string>();
map1.set('a', 'alpha');
map1.set('b', 'beta');
map1.set('g', 'gamma');
console.log(map1.size);
// expected output: 3

```

<!-- UTSJSON.Map.size.compatibility -->


## 实例方法


### clear()

<!-- UTSJSON.Map.clear.description -->

<!-- UTSJSON.Map.clear.param -->

<!-- UTSJSON.Map.clear.returnValue -->

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'baz');
map1.set(1, 'foo');
console.log(map1.size);
// expected output: 2
map1.clear();
console.log(map1.size);
// expected output: 0
```

<!-- UTSJSON.Map.clear.compatibility -->

### delete(key)

<!-- UTSJSON.Map.delete.description -->

<!-- UTSJSON.Map.delete.param -->

<!-- UTSJSON.Map.delete.returnValue -->

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');
console.log(map1.delete('bar'));
// expected result: true
// (true indicates successful removal)
console.log(map1.has('bar'));
// expected result: false
```

<!-- UTSJSON.Map.delete.compatibility -->

### forEach(callbackfn, thisArg?)

<!-- UTSJSON.Map.forEach.description -->

<!-- UTSJSON.Map.forEach.param -->

<!-- UTSJSON.Map.forEach.returnValue -->

<!-- UTSJSON.Map.forEach.compatibility -->

### get(key)

<!-- UTSJSON.Map.get.description -->

<!-- UTSJSON.Map.get.param -->

<!-- UTSJSON.Map.get.returnValue -->

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// expected output: "foo"
```

<!-- UTSJSON.Map.get.compatibility -->

### has(key)

<!-- UTSJSON.Map.has.description -->

<!-- UTSJSON.Map.has.param -->

<!-- UTSJSON.Map.has.returnValue -->

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');

console.log(map1.has('bar'));
// expected output: true

console.log(map1.has('baz'));
// expected output: false
```

<!-- UTSJSON.Map.has.compatibility -->

### set(key, value)

<!-- UTSJSON.Map.set.description -->

<!-- UTSJSON.Map.set.param -->

<!-- UTSJSON.Map.set.returnValue -->

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// expected output: "foo"

console.log(map1.get('baz'));
// expected output: null
```

<!-- UTSJSON.Map.set.compatibility -->

## 常见操作

- 创建map
```ts
let map = new Map<string,any>()
map.put("name","zhangsan")
map.put("age",12)
//Map(2) {"name":"zhangsan","age":12} 
console.log(map)
```
- 通过key访问map元素
```ts
let map = new Map<string,any>()
map.put("name","zhangsan")
map.put("age",12)
let nameVal = map['name']
//zhangsan
console.log(nameVal)
```
- 遍历map
```ts
let map = new Map<string,any>()
map.put("name","zhangsan")
map.put("age",12)
map.forEach(function(key:string,value:any){
    console.log(key)
    console.log(value)
})
```
