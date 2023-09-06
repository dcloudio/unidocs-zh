## uni.getSystemInfo(options) @getsysteminfo

<!-- UTSAPIJSON.getSystemInfo.description -->

uni-app 提供了异步(`uni.getSystemInfo`)和同步(`uni.getSystemInfoSync`)的2个API获取系统信息。

按照运行环境层级排序，从底层向上，systemInfo有6个概念：
- `device`：运行应用的设备，如iphone、huawei
- `os`：设备的操作系统，如 ios、andriod、windows、mac、linux
- `rom`：基于操作系统的定制，Android系统特有概念，如miui、鸿蒙
- `host`：运行应用的宿主程序，即OS和应用之间的运行环境，如浏览器、微信等小程序宿主、集成uniMPSDK的App。uni-app直接开发的app没有host概念
- `uni`：uni-app框架相关的信息，如uni-app框架的编译器版本、运行时版本
- `app`：开发者的应用相关的信息，如应用名称、版本

[详见](https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfo)

<!-- UTSAPIJSON.getSystemInfo.param -->

<!-- UTSAPIJSON.getSystemInfo.returnValue -->

<!-- UTSAPIJSON.getSystemInfo.compatibility -->

<!-- UTSAPIJSON.getSystemInfo.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->