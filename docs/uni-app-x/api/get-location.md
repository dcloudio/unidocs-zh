## uni.getLocation(options) @getlocation

<!-- UTSAPIJSON.getLocation.description -->

<!-- UTSAPIJSON.getLocation.param -->

<!-- UTSAPIJSON.getLocation.returnValue -->

<!-- UTSAPIJSON.getLocation.compatibility -->

### 注意

uni-app x的定位，默认是系统定位，system。

system的定位仅支持wgs84坐标系、不支持逆地址解析、且某些老型号国产Android机因gms问题不支持系统定位、国产Rom可能不支持高度信息。

如需更强的定位能力，需加载专业定位sdk。

真机运行基座不包含三方定位sdk。

三方定位sdk方面，暂不支持高德、百度，但支持腾讯定位。

可下载[腾讯定位插件](https://ext.dcloud.net.cn/plugin?id=14569)，在插件中配置key打包后生效。

上述腾讯定位插件属于[ext api插件](../../api/extapi.md)，引用到工程后，会覆盖uni.getLocation的实现，替换掉系统定位。

如需其他定位，请在插件市场搜索定位相关的uts插件。

不管系统定位、还是三方sdk定位，都有很多注意事项，包括gms、坐标系、隐私和权限等，请仔细阅读下面的参考链接。

<!-- UTSAPIJSON.getLocation.tutorial -->

<!-- UTSAPIJSON.get-location.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
