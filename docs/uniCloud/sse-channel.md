# 云函数请求中的中间状态通知通道

> 新增于HBuilderX 3.8.0

云函数在执行长时间任务时客户端无法获取云端任务执行状态，用户无法确定云函数是否还在正常执行，有些用户可能直接放弃等待刷新页面重新执行，从而导致浪费了更多的云函数资源。因此在此场景下需要一个云函数通知客户端发送执行状态或中间结果的通道。

在常规web开发时可以使用server sent event将结果分段返回，客户端自行组装最终结果。但是小程序端并不支持server sent event，因此我们基于uni-push实现了这个替代方案。

使用此功能前需要先开通uni-push 2.0，参考文档：[uni-push 2.0](unipush-v2.md)

## 客户端API@client-api

:::warning 注意
云函数向客户端发送消息时会使用push发送如下格式数据，如果项目中有监听push消息请勿错误的处理此类消息。相关文档请参考：[客户端监听推送消息](../unipush-v2.md#listener)

```js
{
  channel: 'UNI_CLOUD_SSE',
  action: 'message' | 'end',
  seqId: number,
  messageId: number,
  message: any
}
```

开发者使用push时可以忽略此类型消息

```js
function getType(val) {
  return Object.prototype.toString.call(val).slice(8,-1).toLowerCase()
}
uni.onPushMessage((res) => {
  const payload = res && res.data && res.data.payload
  if(getType(payload)==='object' && payload.channel === 'UNI_CLOUD_SSE'){
    // 收到云函数请求中的中间状态通知通道消息，忽略处理此类消息
    return
  }
})
```

:::

### 创建通道@create-sse-channel

用法：`const channel = uniCloud.SSEChannel()`

**示例**

```js
export default {
  data() {},
  onLoad() {},
  methods: {
    async testSSE() {
      const channel = new uniCloud.SSEChannel() // 创建消息通道
      channel.on('message', (message) => { // 监听message事件
        console.log('on message', message);
      })
      channel.on('end', (message) => { // 监听end事件，如果云端执行end时传了message，会在客户端end事件内收到传递的消息
        console.log('on end', message);
      })
      await channel.open() // 等待通道开启
      const res = await uniCloud.callFunction({
        name: 'massive-task',
        data: {
          channel: channel // 调用云函数时传入通道对象
        }
      })
    }
  }
}
```

### 开启通道@channel-open

用于开启消息通道。

用法：`await channel.open()`

:::warning 注意
注意通道一定要在open之后再传给云函数

此方法在vue3版本发行时会报错，可以先使用vue2发行项目，如果需要发行vue3项目时使用请联系QQ 2292434668。后续会发布HBuilderX更新修复此问题
:::

### 关闭通道@channel-close

用于关闭消息通道，关闭后将不会收到message和end事件

用法：`channel.close()`

### 通道开启事件@channel-event-open

用法：`channel.on('open', () => { console.log('消息通道开启了') })`

### 通道消息事件@channel-event-message

用法：`channel.on('message', (message) => { console.log('收到消息：', message) })`

### 通道消息结束事件@channel-event-end

用法：`channel.on('end', (message) => { console.log('收到end事件，携带消息：', message) })`

### 通道错误事件@channel-event-error

用法：`channel.on('error', (err) => { console.error('收到错误：', err) })`

### 通道关闭事件@channel-event-close

用法：`channel.on('close', () => { console.error('消息通道关闭') })`

在收到消息结束事件、错误事件及开发者主动调用close方法后会触发close事件

### 事件监听与移除监听@client-listener

事件监听可以通过`on`或`addListener`方法，事件移除需要使用`off`或`removeListener`方法。另外还有`removeAllListener`方法用于移除指定事件的所有监听器。


```js
function onMessage(message){
  console.log('收到消息：', message)
}

channel.on('message', onMessage) // 为message事件增加监听器
channel.addListener('message', onMessage) // 为message事件增加监听器
channel.off('message', onMessage) // 移除message事件指定监听器
channel.removeListener('message', onMessage) // 移除message事件指定监听器
channel.removeAllListener('message') // 移除message事件的所有监听器
```

:::warning 注意
监听事件和移除事件传入的方法必须是同一个才可以移除指定的监听器，以下为一个正确示例和一个错误示例
:::

```js
// 可以正常移除监听的示例
function onMessage(message){
  console.log('收到消息：', message)
}
channel.on('message', onMessage)
channel.off('message', onMessage)
```

```js
// 无法正常移除监听的示例
channel.on('message', function(message){
  console.log('收到消息：', message)
})
channel.off('message', function(message){
  console.log('收到消息：', message)
})
```

## 云函数API@cloud-api

### 反序列化消息通道@cloud-deserialize-channel

用法：`const channel = uniCloud.deserializeSSEChannel(event.channel)`

参数中的event.channel是客户端在callFunction时传递的消息通道对象

### 写入消息@cloud-channel-write

用法：`await channel.write(message)`

### 结束消息通道@cloud-channel-end

用法：`await channel.end(message)`

end方法内message可以不传

## 示例@example

云函数示例

```js
// 客户端代码
export default {
  data() {},
  onLoad() {},
  methods: {
    async testSSE() {
      const channel = new uniCloud.SSEChannel() // 创建消息通道
      channel.on('message', (message) => { // 监听message事件
        console.log('on message', message);
      })
      channel.on('end', (message) => { // 监听end事件，如果云端执行end时传了message，会在客户端end事件内收到传递的消息
        console.log('on end', message);
      })
      await channel.open() // 等待通道开启
      const res = await uniCloud.callFunction({
        name: 'massive-task',
        data: {
          channel: channel // 调用云函数时传入通道对象
        }
      })
    }
  }
}
```

```js
// 云函数massive-task代码
exports.main = async (event, context) => {
  const channel = uniCloud.deserializeSSEChannel(event.channel)
  await channel.write({
    a: 1
  })
  await channel.write({
    a: 2
  })
  await channel.write({
    a: 3
  })
  await channel.write({
    a: 4
  })
  await channel.end({
    a: 5
  })
  return {}
};
```

云对象示例

```js
// 客户端代码
export default {
  data() {},
  onLoad() {},
  methods: {
    async testSSE() {
      const channel = new uniCloud.SSEChannel() // 创建消息通道
      channel.on('message', (message) => { // 监听message事件
        console.log('on message', message);
      })
      channel.on('end', (message) => { // 监听end事件，如果云端执行end时传了message，会在客户端end事件内收到传递的消息
        console.log('on end', message);
      })
      await channel.open() // 等待通道开启
      const massiveTaskObj = uniCloud.importObject('massive-task-obj')
      const res = await massiveTaskObj.excuteTask({
        channel: channel // 调用云对象时传入通道对象
      })
    }
  }
}
```

```js
// 云对象massive-task-obj代码
module.exports = {
  excuteTask(param) {
    const channel = uniCloud.deserializeSSEChannel(param.channel)
    await channel.write({
      a: 1
    })
    await channel.write({
      a: 2
    })
    await channel.write({
      a: 3
    })
    await channel.write({
      a: 4
    })
    await channel.end({
      a: 5
    })
    return {}
  }
}
```

上述云函数/云对象示例客户端会依次收到message事件和end事件，客户端打印日志如下

```text
on message {a: 1}
on message {a: 2}
on message {a: 3}
on message {a: 4}
on end {a: 5}
```