## 打印日志
## print log

云函数内使用`console.log`、`console.info`、`console.warn`、`console.error`四种方式打印日志。
In the cloud function, use `console.log`, `console.info`, `console.warn`, `console.error` to print logs.

HBuilderX中查看日志的教程在 [快速上手章节](/uniCloud/quickstart?id=rundebug)
The tutorial for viewing logs in HBuilderX is in [Quick Start Chapter](/uniCloud/quickstart?id=rundebug)

云函数日志会在云端保存7天。
Cloud function logs will be stored in the cloud for 7 days.

自2022年10月25号之后新开通的服务空间默认关闭了云端日志（在腾讯云的计费模式下，日志是额外收费的），uniCloud web控制台即将提供手动开启腾讯云云函数日志及修改日志保存时长功能
After October 25, 2022, the cloud log is disabled by default in the newly opened service space (in the billing mode of Tencent Cloud, the log is an additional charge), and the uniCloud web console will provide manual opening of the Tencent Cloud cloud function log and modification log Save duration function