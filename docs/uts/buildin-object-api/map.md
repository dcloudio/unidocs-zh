## Map

Map 对象保存键值对。任何值（对象或者基本类型）都可以作为一个键或一个值。

### 实例属性

### size

返回 Map 对象的成员数量。

```ts
const map1 = new Map<string,string>();
map1.set('a', 'alpha');
map1.set('b', 'beta');
map1.set('g', 'gamma');
console.log(map1.size);
// expected output: 3

```

### 实例方法

### clear

移除 Map 对象中的所有元素。

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

#### delete

用于移除 Map 对象中指定的元素。

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');
console.log(map1.delete('bar'));
// expected result: true
// (true indicates successful removal)
console.log(map1.has('bar'));
// expected result: false
```

### get

返回某个 Map 对象中的一个指定元素。

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// expected output: "foo"
```

### has

返回一个布尔值，用来表明 Map 中是否存在指定元素。

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');

console.log(map1.has('bar'));
// expected output: true

console.log(map1.has('baz'));
// expected output: false
```

### set

添加或更新一个指定了键（key）和值（value）的（新）键值对。

```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// expected output: "foo"

console.log(map1.get('baz'));
// expected output: null
```
