# API概述

uni-app x项目的uts代码中可以使用很多API。包括：

- uts的api [详见](/uts/buildin-object-api/global.md)
- 全局api，前面不需要加`uni.`。如`getApp`
- uni.xxx的内置api。见左侧
- uniCloud.xxx的内置api。见左侧
- dom的api [详见](dom/README.md)
- vue的api [详见](/tutorial/vue3-api.md)
- 原生api
	* 由于uts可以直接调用Android和iOS的api，所以os和三方sdk的能力都可以在uts中调用。
	* 一般原生能力建议封装为[uni_modules](/plugin/uni_modules.md)形式的[uts插件](/plugin/uts-plugin.md)。