## RegExp

RegExp 对象用于将文本与一个模式匹配。

### 实例属性

### dotAll

dotAll 属性表明是否在正则表达式中一起使用"s"修饰符。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
const regex1 = new RegExp('foo', 's');

console.log(regex1.dotAll);
// expected output: true

const regex2 = new RegExp('bar');

console.log(regex2.dotAll);
// expected output: false
```

### flags

flags 属性属性返回一个字符串，由当前正则表达式对象的标志组成。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
console.log(/foo/ig.flags);
// expected output: "gi"

console.log(/bar/myu.flags);
// expected output: "muy"
```

### global

global 属性表明正则表达式是否使用了 "g" 标志。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
var regex = new RegExp("foo", "g")

console.log(regex.global) // true
// expected output: "muy"
```

### hasIndices

hasIndices 属性指示 "d" 标志是否与正则表达式一起使用。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
const regex1 = new RegExp('foo', 'd');

console.log(regex1.hasIndices);
// expected output: true

const regex2 = new RegExp('bar');

console.log(regex2.hasIndices);
// expected output: false
```

### lastIndex

lastIndex 是正则表达式的一个可读可写的整型属性，用来指定下一次匹配的起始索引。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
const regex1 = new RegExp('foo', 'g');
const str1 = 'table football, foosball';

regex1.test(str1);

console.log(regex1.lastIndex);
// expected output: 9

regex1.test(str1);

console.log(regex1.lastIndex);
// expected output: 19
```

### multiline

multiline 属性表明正则表达式是否使用了 "m" 标志。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
var regex = new RegExp("foo", "m");

console.log(regex.multiline);
// expected output: true
```

### source

source 属性返回一个值为当前正则表达式对象的模式文本的字符串，该字符串不会包含正则字面量两边的斜杠以及任何的标志字符。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
const regex1 = /fooBar/ig;

console.log(regex1.source);
// expected output: "fooBar"

console.log(new RegExp().source);
// expected output: "(?:)"
```

### sticky

sticky 属性反映了搜索是否具有粘性（仅从正则表达式的 lastIndex 属性表示的索引处搜索）。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
const str1 = 'table football';
const regex1 = new RegExp('foo', 'y');

regex1.lastIndex = 6;

console.log(regex1.sticky);
// expected output: true

console.log(regex1.test(str1));
// expected output: true

console.log(regex1.test(str1));
// expected output: false
```

### unicode

unicode 属性表明正则表达式带有"u" 标志。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|x|x|

```ts
var regex = new RegExp('\u{61}', 'u');

console.log(regex.unicode);
// expected output: true
```
### 实例方法

### exec

exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。

```ts
const regex1 = RegExp('foo*', 'g');
const str1 = 'table football, foosball';
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
}
```

### test

test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。

```ts
const str = 'table football';

const regex = new RegExp('foo*');
const globalRegex = new RegExp('foo*', 'g');

console.log(regex.test(str));
// expected output: true

console.log(globalRegex.lastIndex);
// expected output: 0

console.log(globalRegex.test(str));
// expected output: true

console.log(globalRegex.lastIndex);
// expected output: 9

console.log(globalRegex.test(str));
// expected output: false
```

### toString

toString() 返回一个表示该正则表达式的字符串。

```ts
console.log(new RegExp('a+b+c'));
// expected output: /a+b+c/

console.log(new RegExp('a+b+c').toString());
// expected output: "/a+b+c/"

console.log(new RegExp('bar', 'g').toString());
// expected output: "/bar/g"

console.log(new RegExp('\n', 'g').toString());
// expected output (if your browser supports escaping): "/\n/g"

console.log(new RegExp('\\n', 'g').toString());
// expected output: "/\n/g"
```
