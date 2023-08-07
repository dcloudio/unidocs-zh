## Error

当运行时错误产生时，Error 对象会被抛出。Error 对象也可用于用户自定义的异常的基础对象。

### 实例属性

### message
错误消息。对于用户创建的 Error 对象，这是构造函数的第一个参数提供的字符串。

### 示例

```ts
try {
  throw new Error('Whoops!')
} catch (e) {
  console.error(e.message)
}
```
