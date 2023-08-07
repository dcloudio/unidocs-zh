# RegExp

RegExp 对象用于将文本与一个模式匹配。

## 实例属性


### flags

<!-- UTSJSON.RegExp.flags.description -->

<!-- UTSJSON.RegExp.flags.param -->

<!-- UTSJSON.RegExp.flags.returnValue -->
```ts
console.log(/foo/ig.flags);
// expected output: "gi"

console.log(/bar/myu.flags);
// expected output: "muy"
```
<!-- UTSJSON.RegExp.flags.compatibility -->

### source

<!-- UTSJSON.RegExp.source.description -->

<!-- UTSJSON.RegExp.source.param -->

<!-- UTSJSON.RegExp.source.returnValue -->
```ts
const regex1 = /fooBar/ig;

console.log(regex1.source);
// expected output: "fooBar"

console.log(new RegExp().source);
// expected output: "(?:)"
```
<!-- UTSJSON.RegExp.source.compatibility -->

### global

<!-- UTSJSON.RegExp.global.description -->

<!-- UTSJSON.RegExp.global.param -->

<!-- UTSJSON.RegExp.global.returnValue -->
```ts
var regex = new RegExp("foo", "g")

console.log(regex.global) // true
// expected output: "muy"
```
<!-- UTSJSON.RegExp.global.compatibility -->

### ignoreCase

<!-- UTSJSON.RegExp.ignoreCase.description -->

<!-- UTSJSON.RegExp.ignoreCase.param -->

<!-- UTSJSON.RegExp.ignoreCase.returnValue -->

<!-- UTSJSON.RegExp.ignoreCase.compatibility -->

### multiline

<!-- UTSJSON.RegExp.multiline.description -->

<!-- UTSJSON.RegExp.multiline.param -->

<!-- UTSJSON.RegExp.multiline.returnValue -->

```ts
var regex = new RegExp("foo", "m");

console.log(regex.multiline);
// expected output: true
```
<!-- UTSJSON.RegExp.multiline.compatibility -->

### lastIndex

<!-- UTSJSON.RegExp.lastIndex.description -->

<!-- UTSJSON.RegExp.lastIndex.param -->

<!-- UTSJSON.RegExp.lastIndex.returnValue -->
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
<!-- UTSJSON.RegExp.lastIndex.compatibility -->


## 实例方法


### exec(string)

<!-- UTSJSON.RegExp.exec.description -->

<!-- UTSJSON.RegExp.exec.param -->

<!-- UTSJSON.RegExp.exec.returnValue -->
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
<!-- UTSJSON.RegExp.exec.compatibility -->

### test(string)

<!-- UTSJSON.RegExp.test.description -->

<!-- UTSJSON.RegExp.test.param -->

<!-- UTSJSON.RegExp.test.returnValue -->
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
<!-- UTSJSON.RegExp.test.compatibility -->