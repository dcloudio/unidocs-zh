## 开发期间打印日志

云函数内使用`console.log`、`console.info`、`console.warn`、`console.error`四种方式打印日志。

HBuilderX中查看日志的教程在 [快速上手章节](/uniCloud/quickstart?id=rundebug)

## 运行期记录日志，在web控制台查看

使用腾讯云时还可以使用以下接口打印日志，以uniCloud.logger方式打印的日志会保留30天，console方式打印的日志会保留7天。

使用阿里云时，两种方式都是只能保留7天。

可以在uniCloud的[web控制台](https://unicloud.dcloud.net.cn)查看云函数在云端运行的日志。云函数在本地运行的日志请在HBuilderX的控制台内查看。

|接口									|描述											|
|:-:									|:-:											|
|uniCloud.logger.log	|以 log 日志等级输出日志	|
|uniCloud.logger.info	|以 info 日志等级输出日志	|
|uniCloud.logger.warn	|以 warn 日志等级输出日志	|
|uniCloud.logger.error|以 error 日志等级输出日志|
