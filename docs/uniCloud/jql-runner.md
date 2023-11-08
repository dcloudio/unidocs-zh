## HBuilderX的JQL数据库管理器
## JQL database manager for HBuilderX

为方便开发者调试查询语句，`HBuilderX 3.1.5`起内置了JQL查询调试器。用法如下
In order to facilitate developers to debug query statements, `HBuilderX 3.1.5` has built-in JQL query debugger. The usage is as follows

1. 在`uniCloud/database`目录右键选择`新建JQL数据库管理`（HBuilderX创建项目时勾选uniCloud会自带一个jql文件，直接使用自带的jql文件也可以）
1. Right-click in the `uniCloud/database` directory and select `New JQL Database Management` (when HBuilderX creates a project, checking uniCloud will bring a jql file, you can directly use the built-in jql file)
2. 在jql文件内写上自己的语句
2. Write your own statement in the jql file
3. 使用工具栏上的运行按钮运行（快捷键：Ctrl+R 或 F5）即可
3. Use the run button on the toolbar to run (shortcut key: Ctrl+R or F5)

<div align=center>
  <img style="max-width:750px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/jql-runner.jpg"/>
</div>


**注意**
**Notice**

- 编写clientDB的js API（也支持常规js语法，比如var），可以对云数据库进行增删改查操作。不支持uniCloud-db组件写法
- Write clientDB's js API (also supports regular js syntax, such as var), which can add, delete, modify, and query cloud databases. UniCloud-db component writing is not supported
- 可以全部运行，也可以选中部分代码运行。点击工具栏上的运行按钮或者按下【F5】键运行代码
- You can run all of them, or you can select part of the code to run. Click the Run button on the toolbar or press the [F5] key to run the code
- 如果文档中存在多条JQL语句，只有最后一条语句生效
- If there are multiple JQL statements in the document, only the last statement takes effect
- 如果混写了普通js，最后一条语句需是数据库操作语句
- If you mix common js, the last statement must be a database operation statement
- 此处代码运行不受DB Schema的权限控制，移植代码到实际业务中注意在schema中配好permission
- The operation of the code here is not controlled by the permissions of the DB Schema. When porting the code to the actual business, pay attention to configuring the permissions in the schema.
- 不支持clientDB的action
- does not support clientDB actions
- 数据库查询有最大返回条数限制，详见：[limit](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=limit)
- Database query has a maximum number of returned items, see: [limit](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=limit)
- 详细JQL语法，请参考：[JQL](uniCloud/jql.md)
- For detailed JQL syntax, please refer to: [JQL](uniCloud/jql.md)