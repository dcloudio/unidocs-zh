> 新增于HBuilderX x.x.x

IP防刷功能旨在防范短时间内大量相同ip请求导致云函数或数据库无法及时响应。此功能包含两个子功能：IP黑名单、IP访问频率控制。

## 启用IP防刷功能

- 服务空间内开通了redis
- 在uniCloud web控制台开启相关功能：[uniCloud web控制台](https://unicloud.dcloud.net.cn/)

**注意**

- 此功能对clientDB生效
- 仅启用了redis扩展、jql扩展（jql扩展依赖了redis扩展）的云函数才会有防刷功能。
- 仅在客户端调用云函数时才会启用IP防刷功能。url化、定时触发、云函数调用云函数均不触发此功能

## IP黑名单@ip-black-list

IP黑名单是用来完全阻止设定的IP或IP网段（cidr规范）访问云函数或clientDB的功能。

【图片待补充】

被封禁IP访问云函数及clientDB时会收到错误响应，错误码为：`ACCESS_DENIED`，错误信息为：`Access denied`

```js
try {
	await uniCloud.callFunction({
		name: 'test',
		data: {}
	})
} catch (e) {
	// e.errCode === 'ACCESS_DENIED'
}
```

### IP网段规则

通常书写IPv4地址时会将IPv4地址写成由点分割的四段数字，每段取值范围为0-255。IP网段则是由IP加掩码位数组成的字符串，用于表示一个IP区间。

以`192.168.12.1/20`为例，要计算其表示的IP区间可以先将四段IP转为二进制（每段不足8位的往前补0）`11000000.10101000.00001100.00000001`，掩码位数20则表示经过此规则转化后的IP只要前20位和`192.168.12.1`转换后相同则此IP在`192.168.12.1/20`这个IP网段内。即IP区间为`11000000.10101000.00000000.00000000`(192.168.0.0) - `11000000.10101000.00001111.11111111`(192.168.15.255)

### 黑名单用到的Redis key

开发者配置的黑名单会以Set类型存储在redis内，其key为：`unicloud:ip-black-list:set`

### 注意事项

- 切换开关状态会更新所有依赖或间接依赖redis扩展的云函数及clientDB
- 一个区域内的多个用户可能拥有同一IP

## IP访问频率控制@ip-freq

IP访问频率控制用于限制单个IP访问云函数的频率。如图所示，开发者可以配置`${duration}秒内请求超过${limit}次，则将会临时封禁${blockTime}秒`。

就客户端体验来说这个配置表示，**任意连续**duration秒内访问均不可超过limit次，否则将会临时封禁blockTime秒。对于有相关开发经验的开发者来说应该很容易看出这就是一个漏桶算法的实现。

- blockTime配置为0时超出限制也不会进行封禁，只是拒绝请求。
- duration或limit配置为0时将不再限制访问频率，但是已被临时封禁的用户依然需要等到解封后才可以访问

【图片待补充】

访问频率过高的用户及由于访问频率过高被临时封禁的用户访问云函数及clientDB时会收到错误响应，错误码为：`OPERATION_TOO_FREQUENT`，错误信息为：`Operation is too frequent, please try again later`

```js
try {
	await uniCloud.callFunction({
		name: 'test',
		data: {}
	})
} catch (e) {
	// e.errCode === 'OPERATION_TOO_FREQUENT'
}
```

### IP访问频率控制用到的Redis key

**访问频率控制配置**

开发者配置的duration、limit、blockTime三个参数以hash类型存储在redis内，key为：`unicloud:ip-freq-config:hash`。

结构如下：

```js
{
	"duration": 10, // 单位秒
	"limit": 10, // 10（duration）秒内允许访问10次
	"blockTime": 1800 // 超限后封禁1800秒
}
```

**IP频率控制信息**

IP频率控制信息的以hash类型存储在redis内，key为：`unicloud:ip-info:${ip}:hash`其中${ip}表示客户端的ip

结构示例如下：

```js
{
	"bucket": 20, // 剩余访问次数，最大为配置的limit，最小为 0，以上面的访问频率控制配置为例
	"lastTime": 1656399171851 // 上次剩余访问次数变动的时间
}
```

**临时封禁信息**

临时封禁信息以string类型存储在redis内，key为：`unicloud:ip-blocked:${ip}:string`其中${ip}表示客户端的ip

其值为临时封禁开始的时间戳

### 注意事项

- 切换开关状态会更新所有依赖或间接依赖redis扩展的云函数及clientDB
- 一个区域内的多个用户可能拥有同一IP