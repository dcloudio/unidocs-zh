# API概述

uni-app x项目的uts代码中可以使用很多API。包括：

- uts的api [详见](../../uts/buildin-object-api/global.md)
- 全局api，前面不需要加`uni.`。如`getApp`
- uni.xxx的内置api。见左侧
- uniCloud.xxx的内置api。见左侧
- dom的api [详见](dom/README.md)
- vue的api [详见](../../tutorial/vue3-api.md)
- 原生api
	
	由于uts可以直接调用Android和iOS的api，所以os和三方sdk的能力都可以在uts中调用。如下：

```vue
<script>
	import Build from 'android.os.Build';
	export default {
		onLoad() {
			console.log(Build.MODEL); //调用原生对象，返回手机型号
			console.log(uni.getSystemInfoSync().deviceModel); //调用uni API，返回手机型号。与上一行返回值相同
		}
	}
</script>
```

上面的示例，在页面启动时打印了2行日志，显示手机型号。

- uni.getSystemInfoSync，是uni的api
- import的Build，是Android os的api

可以看出，在uni-app x里，可以直接调用os的能力，不受限制，语法是uts的语法，但需要了解什么功能在原生里是哪个api。

使用`uni.getSystemInfoSync`则比较简单，看uni的文档即可，且可跨平台。

其实，[uni.getSystemInfoSync](https://gitcode.net/dcloud/uni-api/-/blob/master/uni_modules/uni-getSystemInfo/utssdk/app-android/index.uts) 的内部实现就是一个uts模块，底层使用了一样的代码，也是import了android.os.Build。

大多数uni.的api，都是uts开发的，它们会陆续开源在[uni-api](https://gitcode.net/dcloud/uni-api)。

插件市场也有很多做好的uts插件，方便开发者拿来即用。[uts插件](https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate)

虽然上述页面可以直接调用原生能力，但一般原生能力建议封装为[uni_modules](../../plugin/uni_modules.md)形式的[uts插件](../../plugin/uts-plugin.md)。这样方便共享、方便跨平台。

uni-app x 中不再支持plus和weex的API。过于plus api中一些常用的api，在uni-app x中进行了替换增补。
- plus.runtime.quit => [uni.exit](./exit.md)
- plus.runtime.install => [uni.installApk](./install-apk.md)
- plus.runtime.openURL
  暂未封装API，但可以直接使用如下代码调用。
```vue
<template>
	<view>
		<button @click="openSchema('https://uniapp.dcloud.io/uni-app-x')">使用浏览器打开指定URL</button>
		<button @click="openSchema('market://details?id=com.tencent.mm')">使用应用商店打开指定App</button>
	</view>
</template>
<script>
	import Intent from 'android.content.Intent';
	import Uri from 'android.net.Uri';
	export default {
		data() {
			return {}
		},
		methods: {
			openSchema(url : string) {
				const context = UTSAndroid.getUniActivity()!;
				const uri = Uri.parse(url)
				const intent = new Intent(Intent.ACTION_VIEW, uri)
				intent.setData(uri);
				context.startActivity(intent);
			}
		}
	}
</script>
```
  