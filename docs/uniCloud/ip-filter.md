> 仅本地调试时需HBuilderX 3.5.4+。云端无版本限制，在uniCloud web控制台打开ip防刷即可
> HBuilderX 3.5.4+ is required for local debugging only. There is no version limit in the cloud, just turn on ip anti-brush in the uniCloud web console

IP防刷功能旨在阻止某些ip的访问和防范短时间内大量相同ip请求导致云函数或数据库无法及时响应。
The IP anti-brush function is designed to prevent access to certain IPs and prevent cloud functions or databases from being unable to respond in time due to a large number of requests for the same IP in a short period of time.

虽然uniCloud是serverless，云函数很难被打垮。但
While uniCloud is serverless, cloud functions are hard to beat. but
1. 如果攻击者持续攻击运行耗时久的云函数，因云厂商根据GBS计费，会给开发者造成经济损失。需要在尽可能短的时间阻断云函数运行
1. If attackers continue to attack long-running cloud functions, the cloud vendors will be billed according to GBS, which will cause economic losses to developers. It is necessary to block the cloud function operation in the shortest possible time
2. 如果攻击访问大量数据库操作的云函数，会造成数据库整体性能下降，拖累正常用户对数据库的读写
2. If the cloud functions that access a large number of database operations are attacked, the overall performance of the database will be degraded, which will hinder normal users from reading and writing the database.

不管是开发者被ddos攻击，还是因为发放奖励、促销或激励视频广告导致被刷单、刷激励，都应该开通`ip防刷`功能。
Whether the developer is attacked by ddos, or is swiped or swiped for incentives due to issuing rewards, promotions or rewarded video ads, the `ip anti-swiping` function should be enabled.

IP防刷包含两个子功能：
IP Anti-Brush contains two sub-functions:
- IP黑名单：手动拉黑某些ip。
- IP blacklist: Manually block certain IPs.
- IP访问频率控制：根据相同ip访问云函数的频次自动拉黑某些ip一段时间。
- IP access frequency control: automatically block certain IPs for a period of time according to the frequency of accessing cloud functions from the same IP.

**注意**
**Notice**

- IP防刷功能相关的逻辑也是在云函数内执行的，因此在拒绝IP请求时也会消耗最小计费单元（配置的内存*100ms）的GBs
- The logic related to the IP anti-brush function is also executed in the cloud function, so when rejecting the IP request, it will also consume GBs of the minimum billing unit (configured memory * 100ms)

## 启用IP防刷功能
## Enable IP anti-brush function

1. 服务空间内开通了redis
1. Open redis in the service space
2. 在uniCloud web控制台左侧导航开启ip防刷：[uniCloud web控制台](https://unicloud.dcloud.net.cn/)
2. Navigate to the left side of the uniCloud web console to enable IP anti-swipe: [uniCloud web console](https://unicloud.dcloud.net.cn/)

### 生效范围
### Effective range
在完成上2步的服务空间中，在如下范围内支持ip防刷：
In the service space after completing the previous two steps, ip anti-brush is supported in the following ranges:

1. 启用了redis扩展或jql扩展（jql扩展依赖了redis扩展）的云函数/云对象才会有防刷功能。未加载相关扩展库的云函数不生效。
1. Cloud functions/cloud objects with redis extension or jql extension enabled (jql extension depends on redis extension) will have the anti-swipe function. Cloud functions that do not load related extension libraries do not take effect.
2. clientDB，即客户端直接发起的数据库请求也生效。
2. clientDB, that is, the database request directly initiated by the client also takes effect.
3. 仅在客户端调用云函数/云对象时才会启用IP防刷功能。URL化、定时触发、云函数调用云函数均不触发此功能
3. The IP anti-swipe function will only be enabled when the client calls cloud functions/cloud objects. URLization, timing triggering, and cloud function calling cloud functions do not trigger this function

需要redis的原因是被拉黑的IP需要存在redis内，其key为：`unicloud:ip-black-list:set`。
The reason for needing redis is that the blocked IP needs to exist in redis, and its key is: `unicloud:ip-black-list:set`.
如果这些信息存在MongoDB中其实没有防刷的意义，而redis作为内存数据库，访问速度极快且不按照访问次数计费，是最佳方案。
If this information exists in MongoDB, there is no meaning of anti-brush, and redis, as an in-memory database, has extremely fast access speed and does not charge according to the number of visits, which is the best solution.

## IP黑名单@ip-black-list
## IP blacklist @ip-black-list

IP黑名单是用来完全阻止设定的IP或IP网段（cidr规范）访问云函数或clientDB的功能。
IP blacklist is used to completely block the set IP or IP network segment (cidr specification) from accessing cloud functions or clientDB.

![black list](https://web-assets.dcloud.net.cn/unidoc/zh/ip-black-list.jpg)

被封禁IP访问云函数及clientDB时会收到错误响应，错误码为：`ACCESS_DENIED`，错误信息为：`Access denied`
The blocked IP will receive an error response when accessing cloud functions and clientDB, the error code is: `ACCESS_DENIED`, and the error message is: `Access denied`

```js
// 云函数
// cloud function
const res = await uniCloud.callFunction({
  name: 'test',
  data: {}
})
// res.result = {
//   errCode: 'ACCESS_DENIED',
//   errMsg: 'Access denied'
// }

// 对于云对象而言，上述返回结果符合响应体规范因为会转化为错误抛出
// For cloud objects, the above return result conforms to the response body specification because it will be converted into an error thrown
const obj = uniCloud.importObject('obj')
try {
  const res = await obj.test()
} catch (e) {
  // e.errCode = 'ACCESS_DENIED'
  // e.errMsg = 'Access denied'
}
```

### IP网段规则
### IP segment rules

通常书写IPv4地址时会将IPv4地址写成由点分割的四段数字，每段取值范围为0-255。IP网段则是由IP加掩码位数组成的字符串，用于表示一个IP区间。
Usually, when writing an IPv4 address, the IPv4 address is written as four segments of numbers separated by dots, and each segment ranges from 0 to 255. An IP network segment is a string consisting of IP plus mask digits, which is used to represent an IP range.

以`192.168.12.1/20`为例，要计算其表示的IP区间可以先将四段IP转为二进制（每段不足8位的往前补0）`11000000.10101000.00001100.00000001`，掩码位数20则表示经过此规则转化后的IP只要前20位和`192.168.12.1`转换后相同则此IP在`192.168.12.1/20`这个IP网段内。即IP区间为`11000000.10101000.00000000.00000000`(192.168.0.0) - `11000000.10101000.00001111.11111111`(192.168.15.255)
Taking `192.168.12.1/20` as an example, to calculate the IP range represented by it, you can first convert the four segments of IP into binary (add 0 to the front if each segment is less than 8 bits) `11000000.10101000.00001100.00000001`, the number of mask bits is 20 It means that as long as the first 20 digits of the IP converted by this rule are the same as `192.168.12.1` after conversion, the IP is in the `192.168.12.1/20` IP network segment. That is, the IP range is `11000000.10101000.00000000.00000000`(192.168.0.0) - `11000000.10101000.00001111.11111111`(192.168.15.255)

### 黑名单用到的Redis key
### Redis key used in blacklist

开发者配置的黑名单会以Set类型存储在redis内，其key为：`unicloud:ip-black-list:set`
The blacklist configured by the developer will be stored in redis in the Set type, and its key is: `unicloud:ip-black-list:set`

### 注意事项
### Precautions

- 切换开关状态会更新所有依赖或间接依赖redis扩展的云函数及clientDB
- Toggle the state of the switch will update all cloud functions and clientDB that depend on or indirectly depend on redis extensions
- 一个区域内的多个用户可能拥有同一IP
- Multiple users within a zone may have the same IP

## IP访问频率控制@ip-freq
## IP access frequency control @ip-freq

IP访问频率控制用于限制单个IP访问云函数的频率。如图所示，开发者可以配置`${duration}秒内请求超过${limit}次，则将会临时封禁${blockTime}秒`。
IP access frequency control is used to limit the frequency of a single IP's access to cloud functions. As shown in the figure, developers can configure `${duration} seconds to request more than ${limit} times, which will temporarily block ${blockTime} seconds`.

就客户端体验来说这个配置表示，**任意连续**duration秒内访问均不可超过limit次，否则将会临时封禁blockTime秒。对于有相关开发经验的开发者来说应该很容易看出这就是一个漏桶算法的实现。
As far as the client experience is concerned, this configuration means that **any continuous** duration seconds cannot access more than the limit times, otherwise it will be temporarily banned for blockTime seconds. It should be easy for developers with relevant development experience to see that this is the implementation of a leaky bucket algorithm.

- blockTime配置为0时超出限制也不会进行封禁，只是拒绝请求。
- When the blockTime is set to 0, the limit will not be blocked, but the request will be rejected.
- duration或limit配置为0时将不再限制访问频率，但是已被临时封禁的用户依然需要等到解封后才可以访问
- When the duration or limit is set to 0, the access frequency will no longer be restricted, but users who have been temporarily banned still need to wait until they are unblocked before they can access

![frequency limit](https://web-assets.dcloud.net.cn/unidoc/zh/ip-freq-limit.jpg)

访问频率过高的用户及由于访问频率过高被临时封禁的用户访问云函数及clientDB时会收到错误响应，错误码为：`OPERATION_TOO_FREQUENT`，错误信息为：`Operation is too frequent, please try again later`
Users with high access frequency and users who are temporarily banned due to high access frequency will receive an error response when accessing cloud functions and clientDB. The error code is: `OPERATION_TOO_FREQUEENT`, and the error message is: `Operation is too frequent, please try again later`

```js
// 云函数
// cloud function
const res = await uniCloud.callFunction({
  name: 'test',
  data: {}
})
// res.result = {
//   errCode: 'OPERATION_TOO_FREQUENT',
//   errMsg: 'Operation is too frequent, please try again later'
// }

// 对于云对象而言，上述返回结果符合响应体规范因为会转化为错误抛出
// For cloud objects, the above return result conforms to the response body specification because it will be converted into an error thrown
const obj = uniCloud.importObject('obj')
try {
  const res = await obj.test()
} catch (e) {
  // e.errCode = 'OPERATION_TOO_FREQUENT'
  // e.errMsg = 'Operation is too frequent, please try again later'
}
```

### IP访问频率控制用到的Redis key
### Redis key used for IP access frequency control

**访问频率控制配置**
**Access Frequency Control Configuration**

开发者配置的duration、limit、blockTime三个参数以hash类型存储在redis内，key为：`unicloud:ip-freq-config:hash`。
The three parameters of duration, limit, and blockTime configured by the developer are stored in redis in hash type, and the key is: `unicloud:ip-freq-config:hash`.

结构如下：
The structure is as follows:

```js
{
	"duration": 10, // 单位秒
	"limit": 10, // 10（duration）秒内允许访问10次
	"blockTime": 1800 // 超限后封禁1800秒
}
```

**IP频率控制信息**
**IP Frequency Control Information**

IP频率控制信息的以hash类型存储在redis内，key为：`unicloud:ip-info:${ip}:hash`其中${ip}表示客户端的ip
The IP frequency control information is stored in redis in the hash type, and the key is: `unicloud:ip-info:${ip}:hash` where ${ip} represents the ip of the client

结构示例如下：
An example of the structure is as follows:

```js
{
	"bucket": 20, // 剩余访问次数，最大为配置的limit，最小为 0，以上面的访问频率控制配置为例
	"lastTime": 1656399171851 // 上次剩余访问次数变动的时间
}
```

**临时封禁信息**
**Temporary ban information**

临时封禁信息以string类型存储在redis内，key为：`unicloud:ip-blocked:${ip}:string`其中${ip}表示客户端的ip
Temporary blocking information is stored in redis in string type, and the key is: `unicloud:ip-blocked:${ip}:string` where ${ip} represents the client's ip

其值为临时封禁开始的时间戳
Its value is the timestamp when the temporary ban started

### 注意事项
### Precautions

- 切换开关状态会更新所有依赖或间接依赖redis扩展的云函数及clientDB
- Toggle the state of the switch will update all cloud functions and clientDB that depend on or indirectly depend on redis extensions
- 一个区域内的多个用户可能拥有同一IP
- Multiple users within a zone may have the same IP
- 本地调试期间如果开启或关闭了IP防刷功能，应停止所有客户端等待5秒重新运行才可生效
- If the IP anti-brush function is turned on or off during local debugging, stop all clients and wait for 5 seconds to re-run before it takes effect