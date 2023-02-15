## 云函数内使用JQL

> 新增于HBuilderX 3.3.1版本

对于不适合在前端暴露的数据库操作，过去只能在云函数中使用传统MongoDB语法。此次更新让云函数也可以使用 JQL 来操作数据库。

相比于传统 MongoDB语法，JQL 为云函数带来如下价值：

1. JQL 优化了联表查询、Tree查询、虚拟表查询等，比 MongoDB语法更易用
2. 支持 DB Schema，包括各种值域约束和权限校验。无需再开发接口的权限和数据合法性验证代码

本文主要讲解云函数中如何使用 JQL 。详细的 JQL 语法另见文档：[JQL数据库操作](uniCloud/jql.md)

## 为云函数添加jql扩展库

JQL 操作的引擎代码体积不小，考虑到有的云函数并不操作数据库或不使用JQL，所以相关功能被剥离在`uni-cloud-jql`扩展库中。

HBuilderX 3.4起，新建云函数/云对象，**默认加载**`uni-cloud-jql`扩展库。对于老云函数，也可以对云函数点右键 -> 管理公共模块或扩展库依赖 -> 选择`uni-cloud-jql`

HBuilderX 3.4以前的开发者，需要在云函数的package.json内手动添加扩展库。（如果云函数目录下没有package.json，可以通过在云函数目录下执行`npm init -y`来生成）

下面是一个开启了jql扩展库的云函数的package.json示例，**注意不可有注释，以下文件内容中的注释仅为说明，如果拷贝此文件，切记去除注释**

```js
{
	"name": "jql-test",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"extensions": {
		"uni-cloud-jql": {} // 配置为此云函数开启jql扩展库，值为空对象留作后续追加参数，暂无内容
	},
	"author": ""
}
```

对于确定在云函数/云对象中不需要使用 JQL 扩展库的，请对云函数右键，取消`uni-cloud-jql`扩展库。这样可以减少云函数体积，提高性能。

## 云函数中使用@use-in-function

`uniCloud.databaseForJQL`方法，传入客户端信息，就可以得到一个JQL数据库操作对象。

```js
// 简单的使用示例
'use strict';
exports.main = async (event, context) => {
	const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云函数的event和context，必传
		event,
		context 
	})
	const bookQueryRes = await dbJQL.collection('book').where("name=='三国演义'").get() // 直接执行数据库操作
	return {
		bookQueryRes
	}
};
```

## 云对象中使用@use-in-object

> 新增于 HBuilderX 3.4.10

云对象中无法获取`event`和`context`，为方便在云对象中使用jql扩展，自HBuilderX 3.4.10起，`uniCloud.databaseForJQL`方法接收云对象`clientInfo`作为参数

**示例**

```js
module.exports = {
	addTodo (title, content) {
		const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云对象的clientInfo
			clientInfo: this.getClientInfo()
		})
	}
}
```


## setUser指定用户身份

上述示例中，jql扩展使用的是客户端的身份，准确的说是客户端的uniIdToken对应的用户作为执行数据库操作的用户。

如需在云函数/云对象中指定执行其他用户身份，需使用`setUser`方法

setUser方法的参数是一个对象，可传入uni-id的uid、role、permission，组合生效。

例：

```js
'use strict';
exports.main = async (event, context) => {
	const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云函数的event和context
		event,
		context
	})
	dbJQL.setUser({ // 指定后续执行操作的用户信息，此虚拟用户将同时拥有传入的uid、role、permission
		uid: 'user-id', // 用户id
		role: ['admin'], // 指定当前执行用户的角色为admin。如果只希望指定为admin身份，可以删除uid和permission字段
		permission: [] // 用户权限
	})
	const bookQueryRes = await dbJQL.collection('book').where("name=='三国演义'").get() // 直接执行数据库操作
	return {
		bookQueryRes
	}
};
```


## 与clientDB的差异

虽然都使用 JQL，但云端和客户端还是有一点区别

- clientDB无论如何不可访问password类型字段，不管schema的权限如何，这类数据不传输到客户端。云函数内可以访问password类型字段，但受schema配置的权限约束。
- clientDB有action云函数的概念，为了弥补客户端操作数据库的不足。云函数没有再使用action的必要了。

## 注意事项

- JQL扩展依赖`uni-id-common`公共模块、redis扩展库
- 启用了JQL扩展的云函数在本地调试时会自动使用本地schema、action、validateFunction以及uni-id公共模块
- 由于此扩展会将`schema`、`action`、`validateFunction`带到模块内，如果你的上述文件较多会大幅增大云函数体积，因此启用此扩展的云函数**冷启动**时间会稍长，建议不要为太多云函数启用此扩展
