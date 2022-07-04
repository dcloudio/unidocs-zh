## 数据库@db

### 日期对象@date-obj

#### 腾讯云和阿里云云函数的差异

腾讯云和阿里云在日期处理方面的差异主要体现在对ISOString格式的日期字符串（例：`2022-07-01T02:50:11.142Z`）入库时。腾讯云在入库时不会进行特殊处理，会以字符串形式存储此字符串，阿里云会将此格式字符串转为日期对象存储。以下代码比较容易理解此问题

```js
// 云函数代码
'use strict';
const db = uniCloud.database()
function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
}
exports.main = async (event, context) => {
  const addRes = await db.collection('date-test').add({
    dateStr: '2022-07-01T02:50:11.142Z',
    dateObj: new Date()
  })
  const getRes = await db.collection('date-test').doc(addRes.id).get()
  const {
    dateStr,
    dateObj
  } = getRes.data[0]
  console.log(getType(dateStr)) // 腾讯云：string，阿里云：date
  console.log(getType(dateObj)) // 腾讯云：date，阿里云：date
  return {}
};
```

#### 腾讯云和阿里云web控制台的差异

同为日期对象，在web控制台腾讯云和阿里云展示的格式并不一致。以上述代码中的dateObj字段为例

腾讯云会展示为如下格式：

```js
{
	"dateObj": {
		"$date":1656424298294
	}
}
```

阿里云会展示为如下格式：

```js
{
	"dateObj": "2022-07-01T03:17:39.226Z" // 阿里云在web控制台展示为字符串，但实际底层存储的是日期对象
}
```

#### clientDB

clientDB在存储日期字符串及日期对象时和使用的云厂商表现一致。但是在取出日期对象时会得到ISOString格式的字符串

```js
// 客户端代码
const db = uniCloud.database()
async function test() {
	const getRes = await db.collection('date-test').get()
	const dateObj = getRes.result.data[0].dateObj // "2022-07-01T03:17:39.226Z"
}

test()
```


## 云函数@cloudfunction

### 异步行为@async-process

阿里云、腾讯云nodejs8在云函数return之后其余逻辑会被冻结不再执行。腾讯云nodejs12表现恰好相反，云函数return之后还会等待其余逻辑执行后才会将此云函数实例空闲出来。详情见：[keepRunningAfterReturn](uniCloud/cf-functions.md?id=keep-running)