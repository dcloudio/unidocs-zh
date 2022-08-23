## 开发期间打印日志
## Printing logs during development

云函数内使用`console.log`、`console.info`、`console.warn`、`console.error`四种方式打印日志。
In the cloud function, use `console.log`, `console.info`, `console.warn`, `console.error` to print logs.

HBuilderX中查看日志的教程在 [快速上手章节](/uniCloud/quickstart?id=rundebug)
The tutorial for viewing logs in HBuilderX is in [Quick Start Chapter](/uniCloud/quickstart?id=rundebug)

## 运行期记录日志，在web控制台查看
## Logging during runtime, view it in the web console

使用腾讯云时还可以使用以下接口打印日志，以uniCloud.logger方式打印的日志会保留30天，console方式打印的日志会保留7天。
When using Tencent Cloud, you can also use the following interfaces to print logs. Logs printed in uniCloud.logger mode will be retained for 30 days, and logs printed in console mode will be retained for 7 days.

使用阿里云时，两种方式都是只能保留7天。
When using Alibaba Cloud, both methods can only be reserved for 7 days.

可以在uniCloud的[web控制台](https://unicloud.dcloud.net.cn)查看云函数在云端运行的日志。云函数在本地运行的日志请在HBuilderX的控制台内查看。
You can view the logs of cloud functions running in the cloud in the [web console] of uniCloud (https://unicloud.dcloud.net.cn). Please view the log of the cloud function running locally in the HBuilderX console.

|接口									|描述											|
|Interface |Description |
|:-:									|:-:											|
|uniCloud.logger.log	|以 log 日志等级输出日志	|
|uniCloud.logger.log |Output logs at log log level |
|uniCloud.logger.info	|以 info 日志等级输出日志	|
|uniCloud.logger.info |Output logs at info log level |
|uniCloud.logger.warn	|以 warn 日志等级输出日志	|
|uniCloud.logger.warn |Output logs at warn log level |
|uniCloud.logger.error|以 error 日志等级输出日志|
|uniCloud.logger.error|Output logs at error log level|
