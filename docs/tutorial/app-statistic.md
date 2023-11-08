App端统计模块封装了市场上主流的三方移动App统计SDK，提供JS API统一调用统计功能。
The app-side statistics module encapsulates the mainstream three-party mobile app statistics SDK in the market, and provides the JS API unified call statistics function.

|项目类型|API|
|Project Type|API|
|:-|:-|
|uni-app|uni-app暂时没有封装统计API，建议使用[uni统计](https://tongji.dcloud.io/)|
|5+ App|[plus.statistic.*](https://www.html5plus.org/doc/zh_cn/statistic.html)

注意：打包时勾选三方统计模块后会自动统计应用日活、启动次数等数据，统计API是为了扩展自定义统计数据时使用。
Note: After checking the three-party statistics module when packaging, it will automatically count data such as daily activities and startup times of the application. The statistics API is used to expand custom statistics.

**uni-app自带uni统计，无需使用三方统计。三方统计增加包体积且无法做到自带的免埋点采集行为数据。详见：[https://tongji.dcloud.io/](https://tongji.dcloud.io/)**
**uni-app comes with uni statistics, no need to use third-party statistics. The third-party statistics increase the package volume and cannot achieve the built-in buried-free point collection behavior data. For details, see: [https://tongji.dcloud.io/](https://tongji.dcloud.io/)**

使用统计功能需在项目manifest.json的“App模块配置”中勾选“Statistic(统计)”，并根据项目实际情况勾选使用的三方统计平台：
![](https://native-res.dcloud.net.cn/images/uniapp/statistic/moudules.png)

> 提示：统计模块参数配置需提交云端打包后才能生效，真机运行调试时请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)
> Tip: The parameter configuration of the statistics module can only take effect after submitting the cloud package. Please use the [custom base] when running and debugging the real machine (http://ask.dcloud.net.cn/article/35115)


支持的三方统计平台：
Supported third-party statistical platforms:
- [友盟统计](https://uniapp.dcloud.io/app-statistic-umeng)  
- [Umeng Statistics](https://uniapp.dcloud.io/app-statistic-umeng)
- [Google统计](https://uniapp.dcloud.io/app-statistic-google)  
- [Google Statistics](https://uniapp.dcloud.io/app-statistic-google)
HBuilderX3.3.7+版本支持
HBuilderX3.3.7+ version support

