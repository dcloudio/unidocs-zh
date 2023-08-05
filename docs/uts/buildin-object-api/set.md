# Set

Set 对象是值的集合，你可以按照插入的顺序迭代它的元素。Set 中的元素只会出现一次，即 Set 中的元素是唯一的。

## 实例属性


### size

<!-- UTSJSON.Set.size.description -->

<!-- UTSJSON.Set.size.param -->

<!-- UTSJSON.Set.size.returValue -->
```ts
const set1 = new Set<Any>();

set1.add(42);
set1.add('forty two');
set1.add('forty two');

console.log(set1.size);
// expected output: 2
```
<!-- UTSJSON.Set.size.compatibility -->


## 实例方法


### add(value)

<!-- UTSJSON.Set.add.description -->

<!-- UTSJSON.Set.add.param -->

<!-- UTSJSON.Set.add.returValue -->

```ts
const set1 = new Set<number>();
set1.add(42);
set1.add(42);
set1.add(13);
set1.forEach((item)=>{
  console.log(item);
  // expected output: 42
  // expected output: 13  
})
```
<!-- UTSJSON.Set.add.compatibility -->

### clear()

<!-- UTSJSON.Set.clear.description -->

<!-- UTSJSON.Set.clear.param -->

<!-- UTSJSON.Set.clear.returValue -->
```ts
const set1 = new Set<any>();
set1.add(1);
set1.add('foo');
console.log(set1.size);
// expected output: 2
set1.clear();
console.log(set1.size);
// expected output: 0
```
<!-- UTSJSON.Set.clear.compatibility -->

### delete(value)

<!-- UTSJSON.Set.delete.description -->

<!-- UTSJSON.Set.delete.param -->

<!-- UTSJSON.Set.delete.returValue -->
```ts
const map1 = new Map<string,string>();
map1.set('bar', 'foo');
console.log(map1.delete('bar'));
// expected result: true
// (true indicates successful removal)
console.log(map1.has('bar'));
// expected result: false
```
<!-- UTSJSON.Set.delete.compatibility -->

### forEach(callbackfn, thisArg?)

<!-- UTSJSON.Set.forEach.description -->

<!-- UTSJSON.Set.forEach.param -->

<!-- UTSJSON.Set.forEach.returValue -->
```ts
const set1 = new Set<number>([42, 13]);
set1.forEach((item)=>{
  console.log(item);
  // expected output: 42
  // expected output: 13
})
```
<!-- UTSJSON.Set.forEach.compatibility -->

### has(value)

<!-- UTSJSON.Set.has.description -->

<!-- UTSJSON.Set.has.param -->

<!-- UTSJSON.Set.has.returValue -->

```ts
const set1 = new Set<number>([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false
```
<!-- UTSJSON.Set.has.compatibility -->