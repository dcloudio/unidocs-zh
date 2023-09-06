# API概述

uni-app x支持的API包括：
- uts的api [详见](/uts/buildin-object-api/global.md)
- uni.xxx的内置api。见左侧
- uniCloud.xxx的内置api。见左侧
- Dom的api [详见](dom/README.md)
- 原生API
	* 由于uts可以直接调用Android和iOS的API，所以os和三方sdk的能力都可以在uts中调用。
	* 一般原生能力建议封装为[uni_modules](/plugin/uni_modules.md)形式的[uts插件](/plugin/uts-plugin.md)。