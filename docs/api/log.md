### console
向控制台打印日志信息。
Output the log information to the console.
### debug
向控制台打印 debug 日志
Output the debug log to the console

注：App 端 debug 方法等同于 log 方法。
Note: Debug method on the App side is equivalent to the log method.
### log
向控制台打印 log 日志
Output the log to the console
### info
向控制台打印 info 日志
Output the info log to the console
### warn
向控制台打印 warn 日志
Output the warn log to the console
### error
向控制台打印 error 日志
Output the error log to the console

**注意：**
**Notice:**

- 不同平台对于 console 方法的支持存在差异，建议在开发过程中只使用文档中提到的方法。
- There are differences in supporting console methods of different platforms. In the development process, only to use the methods mentioned in this document is recommended.
- HBuilderX中有2个重要的代码块，敲`clog`：可直接输出`console.log()`；敲`clogv`：可输出`console.log(": " + );`，并且出现双光标，方便把变量名称和值同时打印出来。
- There are two important code blocks in HBuilderX. Knock `clog` to directly output `console.log()`; Knock `clogv` to output `console.log(": " + );`, and double cursors appear, which is convenient for printing variable names and values simultaneously.
