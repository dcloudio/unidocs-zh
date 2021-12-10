## 云函数内使用JQL

> 新增于HBuilderX 3.3.1版本

HBuilderX 3.3.1之前JQL只能在clientDB及JQL数据库管理里面使用，此次更新为云函数带来了JQL语法，云函数内也可以享受便捷的数据库操作语句编写。

关于JQL语法及其他注意事项请参考此文档：[JQL数据库操作](uniCloud/jql.md)

## 为云函数启用jql扩展库@use-in-function

需要开发者手动在云函数的package.json内添加云函数的扩展库。（如果云函数目录下没有package.json，可以通过在云函数目录下执行`npm init -y`来生成）

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

```js
// 简单的使用示例
'use strict';
exports.main = async (event, context) => {
	const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云函数的event和context，必传
		event,
		context 
	})
	const bookQueryRes = dbJQL.collection('book').where("name=='三国演义'").get() // 直接执行数据库操作
	return {
		bookQueryRes
	}
};
```

上述示例中jql扩展将会使用event内带有的uniIdToken对应的用户作为执行数据库操作的用户，如需指定执行当前数据库操作的用户请使用`setUser`方法

例：

```js
'use strict';
exports.main = async (event, context) => {
	const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云函数的event和context，必传
		event,
		context
	})
	dbJQL.setUser({ // 指定后续执行操作的用户信息
		uid: 'user-id', // 建议此处使用真实uid
		role: ['admin'], // 指定当前执行用户的角色为admin
		permission: []
	})
	const bookQueryRes = dbJQL.collection('book').where("name=='三国演义'").get() // 直接执行数据库操作
	return {
		bookQueryRes
	}
};
```

**注意**

- 启用了JQL扩展的云函数暂不可本地调试，后续会提供支持
- JQL扩展依赖`uni-id`公共模块
- 由于此扩展会将`schema`、`action`、`validateFunction`带到模块内，如果你的上述文件较多会大幅增大云函数体积，因此启用此扩展的云函数**冷启动**时间会稍长，建议不要为太多云函数启用此扩展