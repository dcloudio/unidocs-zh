## 初始化uniCloud实例@init-unicloud

文档已迁移至：[一个应用访问多个服务空间](https://uniapp.dcloud.net.cn/uniCloud/concepts/space?id=%e4%b8%80%e4%b8%aa%e5%ba%94%e7%94%a8%e8%ae%bf%e9%97%ae%e5%a4%9a%e4%b8%aa%e6%9c%8d%e5%8a%a1%e7%a9%ba%e9%97%b4)

## 获取其他服务空间的database@init-db

> HBuilderX 3.2.11及更高版本支持客户端初始化其他服务空间database实例，此前仅腾讯云云函数环境支持。阿里云云函数环境不支持此用法。

调用`uniCloud.database()`时可以传入对应的服务空间信息（参数同uniCloud.init，参考:[uniCloud.init](uniCloud/init.md?id=init-unicloud)）来获取指定服务空间的database实例。

**示例**

```js
const db = uniCloud.database({
  provider: 'tencent',
  spaceId: 'xxx'
})

db.collection('uni-id-users').get()
```

**参数说明**

|参数名			|类型	|必填	|默认值						|说明																					|
|:-:			|:-:	|:-:	|:-:						|:-:																					|
|provider		|String	|是		|-							|aliyun、tencent																		|
|spaceId		|String	|是		|-							|服务空间ID，**注意是服务空间ID，不是服务空间名称**										|
|clientSecret	|String	|是		|-							|仅阿里云支持，可以在[uniCloud控制台](https://unicloud.dcloud.net.cn)服务空间列表中查看	|
|endpoint		|String	|否		|`https://api.bspapp.com`	|服务空间地址，仅阿里云侧支持															|
