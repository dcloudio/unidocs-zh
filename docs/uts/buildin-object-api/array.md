# Array

Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。

## 实例属性


### length

<!-- UTSJSON.Array.length.description -->

<!-- UTSJSON.Array.length.param -->

<!-- UTSJSON.Array.length.returnValue -->

```ts
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);
// expected output: 4
```

<!-- UTSJSON.Array.length.compatibility -->

边界情况说明：

- 在不同平台上，数组的长度限制不同，超出限制会导致相应的错误或异常
  * 编译至 JavaScript 平台时，最大长度为 2^32 - 1，超出限制会报错：`Invalid array length`。
  * 编译至 Kotlin 平台时，最大长度受系统内存的限制，超出限制报错：`java.lang.OutOfMemoryError: Failed to allocate a allocation until OOM`。
  * 编译至 Swift 平台时，最大长度也受系统内存的限制，目前超出限制没有返回信息。


## 实例方法


### find(predicate, thisArg?)

<!-- UTSJSON.Array.find.description -->

<!-- UTSJSON.Array.find.param -->

<!-- UTSJSON.Array.find.returnValue -->

```ts
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element:number):boolean => element > 10);

console.log(found);
// expected output: 12

```

<!-- UTSJSON.Array.find.compatibility -->

### findIndex(predicate, thisArg?)

<!-- UTSJSON.Array.findIndex.description -->

<!-- UTSJSON.Array.findIndex.param -->

<!-- UTSJSON.Array.findIndex.returnValue -->

```ts
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element:number):boolean => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

```

<!-- UTSJSON.Array.findIndex.compatibility -->

### fill(value, start?, end?)

<!-- UTSJSON.Array.fill.description -->

<!-- UTSJSON.Array.fill.param -->

<!-- UTSJSON.Array.fill.returnValue -->

```ts
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

```

<!-- UTSJSON.Array.fill.compatibility -->

### copyWithin(target, start?, end?)

<!-- UTSJSON.Array.copyWithin.description -->

<!-- UTSJSON.Array.copyWithin.param -->

<!-- UTSJSON.Array.copyWithin.returnValue -->

```ts
const array1 = ['a', 'b', 'c', 'd', 'e'];
// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]
// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
```

<!-- UTSJSON.Array.copyWithin.compatibility -->

### pop()

<!-- UTSJSON.Array.pop.description -->

<!-- UTSJSON.Array.pop.param -->

<!-- UTSJSON.Array.pop.returnValue -->

```ts
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

```

<!-- UTSJSON.Array.pop.compatibility -->

### push(items)

<!-- UTSJSON.Array.push.description -->

<!-- UTSJSON.Array.push.param -->

<!-- UTSJSON.Array.push.returnValue -->

```ts
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

```

<!-- UTSJSON.Array.push.compatibility -->

### concat(items)

<!-- UTSJSON.Array.concat.description -->

<!-- UTSJSON.Array.concat.param -->

<!-- UTSJSON.Array.concat.returnValue -->

```ts
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

<!-- UTSJSON.Array.concat.compatibility -->

### concat(items)

<!-- UTSJSON.Array.concat_1.description -->

<!-- UTSJSON.Array.concat_1.param -->

<!-- UTSJSON.Array.concat_1.returnValue -->

<!-- UTSJSON.Array.concat_1.compatibility -->

### join(separator?)

<!-- UTSJSON.Array.join.description -->

<!-- UTSJSON.Array.join.param -->

<!-- UTSJSON.Array.join.returnValue -->

```ts
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

```

<!-- UTSJSON.Array.join.compatibility -->

### reverse()

<!-- UTSJSON.Array.reverse.description -->

<!-- UTSJSON.Array.reverse.param -->

<!-- UTSJSON.Array.reverse.returnValue -->

<!-- UTSJSON.Array.reverse.compatibility -->

### shift()

<!-- UTSJSON.Array.shift.description -->

<!-- UTSJSON.Array.shift.param -->

<!-- UTSJSON.Array.shift.returnValue -->

```ts
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

```

<!-- UTSJSON.Array.shift.compatibility -->

### slice(start?, end?)

<!-- UTSJSON.Array.slice.description -->

<!-- UTSJSON.Array.slice.param -->

<!-- UTSJSON.Array.slice.returnValue -->

```ts
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

<!-- UTSJSON.Array.slice.compatibility -->

### sort(compareFn?)

<!-- UTSJSON.Array.sort.description -->

<!-- UTSJSON.Array.sort.param -->

<!-- UTSJSON.Array.sort.returnValue -->

```ts
const array2 = [5, 1, 4, 2, 3];
array2.sort((a: number, b: number):number => a - b);
// expect(array2).toEqual([1, 2, 3, 4, 5]);
```

<!-- UTSJSON.Array.sort.compatibility -->

### splice(start, deleteCount, items)

<!-- UTSJSON.Array.splice.description -->

<!-- UTSJSON.Array.splice.param -->

<!-- UTSJSON.Array.splice.returnValue -->

```ts
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

<!-- UTSJSON.Array.splice.compatibility -->

### unshift(items)

<!-- UTSJSON.Array.unshift.description -->

<!-- UTSJSON.Array.unshift.param -->

<!-- UTSJSON.Array.unshift.returnValue -->

```ts
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```

<!-- UTSJSON.Array.unshift.compatibility -->

### indexOf(searchElement, fromIndex?)

<!-- UTSJSON.Array.indexOf.description -->

<!-- UTSJSON.Array.indexOf.param -->

<!-- UTSJSON.Array.indexOf.returnValue -->

```ts
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

```

<!-- UTSJSON.Array.indexOf.compatibility -->

### lastIndexOf(searchElement, fromIndex?)

<!-- UTSJSON.Array.lastIndexOf.description -->

<!-- UTSJSON.Array.lastIndexOf.param -->

<!-- UTSJSON.Array.lastIndexOf.returnValue -->

```ts
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
```

<!-- UTSJSON.Array.lastIndexOf.compatibility -->

### every(predicate, thisArg?)

<!-- UTSJSON.Array.every.description -->

<!-- UTSJSON.Array.every.param -->

<!-- UTSJSON.Array.every.returnValue -->

```ts
const isBelowThreshold = (currentValue:number):boolean => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// expected output: true
```

<!-- UTSJSON.Array.every.compatibility -->

### some(predicate, thisArg?)

<!-- UTSJSON.Array.some.description -->

<!-- UTSJSON.Array.some.param -->

<!-- UTSJSON.Array.some.returnValue -->


```ts
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element:number):boolean=> element % 2 == 0;

console.log(array.some(even));
// expected output: true
```

<!-- UTSJSON.Array.some.compatibility -->

### forEach(callbackfn, thisArg?)

<!-- UTSJSON.Array.forEach.description -->

<!-- UTSJSON.Array.forEach.param -->

<!-- UTSJSON.Array.forEach.returnValue -->

```ts
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"
```

<!-- UTSJSON.Array.forEach.compatibility -->

### map(callbackfn, thisArg?)

<!-- UTSJSON.Array.map.description -->

<!-- UTSJSON.Array.map.param -->

<!-- UTSJSON.Array.map.returnValue -->

```ts
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x:number):number => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```

<!-- UTSJSON.Array.map.compatibility -->

### filter(predicate, thisArg?)

<!-- UTSJSON.Array.filter.description -->

<!-- UTSJSON.Array.filter.param -->

<!-- UTSJSON.Array.filter.returnValue -->

```ts
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word:string):boolean => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```

<!-- UTSJSON.Array.filter.compatibility -->

### reduce(callbackfn)

<!-- UTSJSON.Array.reduce.description -->

<!-- UTSJSON.Array.reduce.param -->

<!-- UTSJSON.Array.reduce.returnValue -->

```ts
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue:number, currentValue:number):number => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

```

<!-- UTSJSON.Array.reduce.compatibility -->

### reduceRight(callbackfn)

<!-- UTSJSON.Array.reduceRight.description -->

<!-- UTSJSON.Array.reduceRight.param -->

<!-- UTSJSON.Array.reduceRight.returnValue -->

<!-- UTSJSON.Array.reduceRight.compatibility -->

### isArray(arg)

<!-- UTSJSON.Array.isArray.description -->

<!-- UTSJSON.Array.isArray.param -->

<!-- UTSJSON.Array.isArray.returnValue -->

```ts
console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false
```

<!-- UTSJSON.Array.isArray.compatibility -->

## 常见操作

- 创建数组
```ts
const fruits = ['Apple', 'Banana']
console.log(fruits.length)
```
- 通过索引访问数组元素
```ts
const first = fruits[0]
// Apple
const last = fruits[fruits.length - 1]
// Banana
```
- 遍历数组
```ts
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1
```
- 添加元素到数组的末尾
```ts
const newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
```
- 删除数组末尾的元素
```ts
const last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
```
- 删除数组头部元素
```ts
const first = fruits.shift() // remove Apple from the front
// ["Banana"]
```
- 添加元素到数组的头部
```ts
const newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
```
- 找出某个元素在数组中的索引
```ts
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]
const pos = fruits.indexOf('Banana')
// 1
```
- 通过索引删除某个元素
```ts
const removedItem = fruits.splice(pos, 1) // this is how to remove an item
// ["Strawberry", "Mango"]
```
- 从一个索引位置删除多个元素
```ts
const vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]
const pos = 1
const n = 2
const removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.
console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)
console.log(removedItems)
// ["Turnip", "Radish"]
```
- 复制一个数组
```ts
const shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]
```
### 访问数组元素

数组的索引是从 0 开始的，第一个元素的索引为 0，最后一个元素的索引等于该数组的 长度 减 1。

如果指定的索引是一个无效值，将会抛出 IndexOutOfBoundsException 异常

下面的写法是错误的，运行时会抛出 SyntaxError 异常，而原因则是使用了非法的属性名：

```ts
console.log(arr.0) // a syntax error
```
