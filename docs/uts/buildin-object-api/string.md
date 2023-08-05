# String

String 全局对象是一个用于字符串或一个字符序列的构造函数。

字符串字面量采取以下形式：

```ts
'string text'
"string text"
"中文/汉语"
"español"
"English "
"हिन्दी"
"العربية"
"português"
"বাংলা"
"русский"
"日本語"
"ਪੰਜਾਬੀ"
"한국어"
```

## 实例属性


### length

<!-- UTSJSON.String.length.description -->

<!-- UTSJSON.String.length.param -->

<!-- UTSJSON.String.length.returValue -->

```ts
const x = "Mozilla";
const empty = "";

console.log("Mozilla is " + x.length + " code units long");
/* "Mozilla is 7 code units long" */

console.log("The empty string is has a length of " + empty.length);
/* "The empty string is has a length of 0" */
```

<!-- UTSJSON.String.length.compatibility -->


## 实例方法

### includes(searchString, position?)

<!-- UTSJSON.String.includes.description -->

<!-- UTSJSON.String.includes.param -->

<!-- UTSJSON.String.includes.returValue -->

```ts
const str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false
```

<!-- UTSJSON.String.includes.compatibility -->

### endsWith(searchString, endPosition?)

<!-- UTSJSON.String.endsWith.description -->

<!-- UTSJSON.String.endsWith.param -->

<!-- UTSJSON.String.endsWith.returValue -->

```ts
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!'));
// expected output: true
console.log(str1.endsWith('best', 17));
// expected output: true
const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));
// expected output: false
```

<!-- UTSJSON.String.endsWith.compatibility -->

### repeat(count)

<!-- UTSJSON.String.repeat.description -->

<!-- UTSJSON.String.repeat.param -->

<!-- UTSJSON.String.repeat.returValue -->

```ts
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数 count 将会被自动转换成整数。
```

<!-- UTSJSON.String.repeat.compatibility -->

### startsWith(searchString, position?)

<!-- UTSJSON.String.startsWith.description -->

<!-- UTSJSON.String.startsWith.param -->

<!-- UTSJSON.String.startsWith.returValue -->

<!-- UTSJSON.String.startsWith.compatibility -->

### at(index)

<!-- UTSJSON.String.at.description -->

<!-- UTSJSON.String.at.param -->

<!-- UTSJSON.String.at.returValue -->

```ts
const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// expected output: "Using an index of 5 the character returned is u"
index = -4;
console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// expected output: "Using an index of -4 the character returned is d"
```

<!-- UTSJSON.String.at.compatibility -->

### charAt(pos)

<!-- UTSJSON.String.charAt.description -->

<!-- UTSJSON.String.charAt.param -->

<!-- UTSJSON.String.charAt.returValue -->

```ts
const anyString = "Brave new world";

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
// The character at index 0 is 'B'
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
// The character at index 1 is 'r'
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
// The character at index 2 is 'a'
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
// The character at index 3 is 'v'
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
// The character at index 4 is 'e'
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
// The character at index 999 is ''
```

<!-- UTSJSON.String.charAt.compatibility -->

### charCodeAt(index)

<!-- UTSJSON.String.charCodeAt.description -->

<!-- UTSJSON.String.charCodeAt.param -->

<!-- UTSJSON.String.charCodeAt.returValue -->

```ts
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"
```

<!-- UTSJSON.String.charCodeAt.compatibility -->

### concat(strings)

<!-- UTSJSON.String.concat.description -->

<!-- UTSJSON.String.concat.param -->

<!-- UTSJSON.String.concat.returValue -->

```ts
let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.
```

<!-- UTSJSON.String.concat.compatibility -->

### indexOf(searchString, position?)

<!-- UTSJSON.String.indexOf.description -->

<!-- UTSJSON.String.indexOf.param -->

<!-- UTSJSON.String.indexOf.returValue -->

```ts
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"

```

<!-- UTSJSON.String.indexOf.compatibility -->

### padEnd

padEnd() 方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const str1 = 'Breaded Mushrooms';
console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"
const str2 = '200';
console.log(str2.padEnd(5));
// expected output: "200  "
```
### padStart

padStart() 方法用另一个字符串填充当前字符串 (如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
const str1 = '5';
console.log(str1.padStart(2, '0'));
// expected output: "05"
```

### lastIndexOf(searchString, position?)

<!-- UTSJSON.String.lastIndexOf.description -->

<!-- UTSJSON.String.lastIndexOf.param -->

<!-- UTSJSON.String.lastIndexOf.returValue -->

<!-- UTSJSON.String.lastIndexOf.compatibility -->

### replace(searchValue, replaceValue)

<!-- UTSJSON.String.replace.description -->

<!-- UTSJSON.String.replace.param -->

<!-- UTSJSON.String.replace.returValue -->

```ts
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

```

<!-- UTSJSON.String.replace.compatibility -->

### replace(searchValue, replacer)

<!-- UTSJSON.String.replace_1.description -->

<!-- UTSJSON.String.replace_1.param -->

<!-- UTSJSON.String.replace_1.returValue -->

<!-- UTSJSON.String.replace_1.compatibility -->

### search(regexp)

<!-- UTSJSON.String.search.description -->

<!-- UTSJSON.String.search.param -->

<!-- UTSJSON.String.search.returValue -->

```ts
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
// expected output: 43
console.log(paragraph[paragraph.search(regex)]);
// expected output: "."
```

<!-- UTSJSON.String.search.compatibility -->

### slice(start?, end?)

<!-- UTSJSON.String.slice.description -->

<!-- UTSJSON.String.slice.param -->

<!-- UTSJSON.String.slice.returValue -->

```ts
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));
// expected output: "the lazy dog."
console.log(str.slice(4, 19));
// expected output: "quick brown fox"
```

<!-- UTSJSON.String.slice.compatibility -->

### split(separator, limit?)

<!-- UTSJSON.String.split.description -->

<!-- UTSJSON.String.split.param -->

<!-- UTSJSON.String.split.returValue -->

```ts
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"
const chars = str.split('');
console.log(chars[8]);
// expected output: "k"
```

<!-- UTSJSON.String.split.compatibility -->

### substring(start, end?)

<!-- UTSJSON.String.substring.description -->

<!-- UTSJSON.String.substring.param -->

<!-- UTSJSON.String.substring.returValue -->

<!-- UTSJSON.String.substring.compatibility -->

### toLowerCase()

<!-- UTSJSON.String.toLowerCase.description -->

<!-- UTSJSON.String.toLowerCase.param -->

<!-- UTSJSON.String.toLowerCase.returValue -->

```ts
console.log('中文简体 zh-CN || zh-Hans'.toLowerCase());
// 中文简体 zh-cn || zh-hans
​console.log( "ALPHABET".toLowerCase() );
// "alphabet"
```

<!-- UTSJSON.String.toLowerCase.compatibility -->

### toUpperCase()

<!-- UTSJSON.String.toUpperCase.description -->

<!-- UTSJSON.String.toUpperCase.param -->

<!-- UTSJSON.String.toUpperCase.returValue -->

```ts
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```

<!-- UTSJSON.String.toUpperCase.compatibility -->

### trim()

<!-- UTSJSON.String.trim.description -->

<!-- UTSJSON.String.trim.param -->

<!-- UTSJSON.String.trim.returValue -->

<!-- UTSJSON.String.trim.compatibility -->