## 全局函数

### setTimeout
设定一个定时器。在定时到期以后执行注册的回调函数
```ts
setTimeout(() => {
  console.log("Delayed for 1 second.")
}, 1000)
```
### clearTimeout
取消由 setTimeout 设置的定时器。
```ts
const timer = setTimeout(() => {
  console.log("Delayed for 1 second.")
}, 1000)
clearTimeout(timer)
```
### setInterval
设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数
```ts
setInterval(() => {
  console.log(Date.now())
}, 1000)
```
### clearInterval
取消由 setInterval 设置的定时器。
```ts
const timer = setInterval(() => {
  console.log(Date.now())
}, 1000)
clearInterval(timer)
```
注意：暂不支持在变量没有定义完成（赋值的过程中）就访问。比如：需要在setInterval内执行clearInterval。  
例如：
  ```ts
  let index = 0;
  let interval : number = setInterval(() => {
    index ++
    if (index > 3) {
      clearInterval(interval)
    }
  }, 6)
  ```
暂时需要使用如下写法（后续会优化抹平）：
  ```ts
  let index = 0;
  let interval : number = 0;
  interval = setInterval(() => {
    index ++
    if (index > 3) {
      clearInterval(interval)
    }
  }, 6)
  ```
