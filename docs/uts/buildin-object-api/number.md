## Number

Number 对象是经过封装的能让你处理数字值的对象。

### 实例方法

### toFixed

toFixed() 方法使用定点表示法来格式化一个数值。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
function financial(x: Number): String {
  return x.toFixed(2);
}
console.log(financial(123.456));
// expected output: "123.46"
console.log(financial(0.004));
// expected output: "0.00"
```
