uni-app在App侧的原生扩展插件，支持使用java、object-c等原生语言编写。
The native extension plug-in of uni-app on the App side supports writing in native languages such as java and object-c.

从HBuilderX 3.6起，新增支持了使用uts来开发原生插件。文档另见[uts插件](uts-plugin.md)
Since HBuilderX 3.6, the use of uts to develop native plugins has been added. Documentation see also [uts plugin](uts-plugin.md)

为了和uts插件区别，之前的`App原生插件`，改名为`App原生语言插件`。
In order to distinguish it from the uts plugin, the previous `App native plugin` has been renamed to the `App native language plugin`.

本文为`App原生语言插件`的开发文档。
This article is the development document of `App native language plugin`.

### uni.requireNativePlugin(PluginName)

引入 App 原生语言插件。
Introduce the App native language plugin.

平台差异说明：App
Platform difference description: App

自 HBuilderX 1.4 版本起，uni-app 支持引入原生插件，使用方式如下：
Since HBuilderX version 1.4, uni-app supports the introduction of native plugins, which are used as follows:

```js 
	const PluginName = uni.requireNativePlugin(PluginName); // PluginName 为原生插件名称
```

不管是vue文件还是nvue文件，都是这个API。
Both vue and nvue files use the same API.


### 内置原生插件
### Built-in native plug-ins
内置原生插件,uni-app已默认集成，支持直接在内置基座运行。
The internally native plug-ins have been integrated by default in uni-app, and can run directly on the internal base.

仅在nvue页面，支持引入BindingX，animation， DOM.addRule等。
Solely for nvue pages, the introduction of BindingX, animation, DOM.addRule and so on is supported.

在vue页面，支持引入clipboard，storage，stream，deviceInfo等。
For vue pages, the introduction of clipboard, storage, stream, deviceInfo and so on is supported.



使用方式：可通过```uni.requireNativePlugin```直接使用。
Usage: It can be used directly through `uni.requireNativePlugin`.

示例：
Example:

``` html
	<template>
		<view>
			<text class="my-iconfont">&#xe85c;</text>	
		</view>
	</template>
	<script>
		export default{
			beforeCreate() {
				const domModule = uni.requireNativePlugin('dom')
				domModule.addRule('fontFace', {
					'fontFamily': "myIconfont",
					'src': "url('http://at.alicdn.com/t/font_2234252_v3hj1klw6k9.ttf')"
				});
			}
		}
	</script>
	<style>
		.my-iconfont {
			font-family:myIconfont;
			font-size:60rpx;
			color: #00AAFF;
		}
	</style>
```




非内置原生插件，分为 [本地插件](/api/extend/native-plugin?id=本地插件非内置原生插件) 和 [云端插件](/api/extend/native-plugin?id=云端插件非内置原生插件) 。集成原生插件后，需要提交云端打包或制作自定义基座运行才会生效。
Non-built-in native plug-ins are divided into [Local plug-ins](/api/extend/native-plugin?id=%E6%9C%AC%E5%9C%B0%E6%8F%92%E4%BB%B6%E9%9D%9E%E5%86%85%E7%BD%AE%E5%8E%9F%E7%94%9F%E6%8F%92%E4%BB%B6) and [Cloud plug-ins](/api/extend/native-plugin?id=%E4%BA%91%E7%AB%AF%E6%8F%92%E4%BB%B6%E9%9D%9E%E5%86%85%E7%BD%AE%E5%8E%9F%E7%94%9F%E6%8F%92%E4%BB%B6). After integrating the native plug-ins, you need to submit to cloud side for packaging or make a custom base to take effect.

### 本地插件(非内置原生插件)
### Local plug-ins (non-internal native plug-ins)

**本地插件**，是uni-app项目nativeplugins目录(目录不存在则创建)下的原生插件。
**Local plug-in** is a native plug-in under the nativeplugins directory (created if the directory does not exist) of the uni-app project.

##### 第一步：获取本地原生插件
##### Step 1: Get local native plug-ins.

- 方式一：插件市场下载免费uni-app原生插件
- Method 1: Download the free uni-app native plug-ins for the plug-in market

可以登录[uni原生插件市场](https://ext.dcloud.net.cn/?cat1=5&cat2=51)，在免费的插件详情页中点击“下载for离线打包”下载原生插件（zip格式），解压到HBuilderX的uni-app项目下的“nativeplugins”目录（如不存在则创建），以下是“DCloud-RichAlert”插件举例，它的下载地址是：[https://ext.dcloud.net.cn/plugin?id=36](https://ext.dcloud.net.cn/plugin?id=36)
You can log in to the [uni native plugin market] (https://ext.dcloud.net.cn/?cat1=5&cat2=51), and click "Download for offline packaging" on the free plugin details page to download the native plugin (zip format) , extract it to the "nativeplugins" directory under the uni-app project of HBuilderX (create it if it does not exist), the following is an example of the "DCloud-RichAlert" plugin, its download address is: [https://ext.dcloud.net. cn/plugin?id=36](https://ext.dcloud.net.cn/plugin?id=36)

下载解压后目录结构如下：
The directory structure after downloading and decompressing is as follows:

<img width="600px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/nativePlugin-1.png" />


- 方式二：开发者自己开发uni-app原生插件
- Method 2: Develop the native uni-app plug-ins by the developers.

原生插件开发完成后按指定格式压缩为zip包，参考[uni-app原生插件格式说明文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/package)。
After the native plug-in is developed, it is compressed into a zip package in the specified format. Refer to [Format description document of the uni-app native plug-in](https://nativesupport.dcloud.net.cn/NativePlugin/course/package).
按上图的格式配置到uni-app项目下的“nativeplugins”目录。
Configure them under the "nativeplugins" directory of the uni-app project according to the format shown above.



##### 第二步：配置本地原生插件
##### Step 2: Configure the local native plug-in

在manifest.json -> App原生插件配置 -> 选择本地插件 -> 选择需要打包生效的插件 -> 保存后提交云端打包生效。
Follow "manifest.json -> App native plug-in configuration -> select local plug-in -> select plug-in to be packaged and taken effect-> save", and submit to the cloud side for packaging and taking effect.

<img width="600px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/nativePlugin-2.png" />

##### 第三步：开发调试本地原生插件
##### Step 3: Develop and debug the local native plug-ins.
在vue页面或nvue页面引入这个原生插件。
Introduce this native plug-in in vue page or nvue page.

使用uni.requireNativePlugin的api，参数为插件的id。
Use the API of uni.requireNativePlugin, with the parameter set as the id of the plug-in.
```js 
	const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert')
```

##### 第四步：打包发布
##### Step 4: Package and release
使用自定义基座开发调试本地原生插件后，不可直接将自定义基座apk作为正式版发布。
After developing and debugging the local native plug-in on the custom base, the custom base apk cannot be directly released as the final version. 
应该重新提交云端打包（不能勾选“自定义基座”）生成正式版本。
You should resubmit to the cloud side for packaging (the "Custom Base" should be unchecked) to generate the final version.




### 云端插件(非内置原生插件)
### Cloud side plug-in (non-internal native plug-in)

**云端插件**，已经在插件市场绑定或购买的插件，无需下载插件到工程中，云打包时会直接合并打包原生插件到APP中。（试用插件只能在自定义基座中使用）
**Cloud plug-in** refers to a plug-in that has been bound or purchased in the plug-in market. It does not need to be downloaded into the project, and the native plug-ins will be directly merged and packaged into the APP when cloud packaging. (The trial plug-ins can only be used on custom bases)



##### 第一步：购买或下载uni-app原生插件
##### Step 1: purchase or download the native uni-app plug-ins.
使用前需先登录[uni原生插件市场](https://ext.dcloud.net.cn/?cat1=5&cat2=51)，在插件详情页中购买，免费插件也可以在插件市场0元购。购买后才能够云端打包使用插件。
Log in to the [uni native plug-in market](https://ext.dcloud.net.cn/?cat1=5&cat2=51) before using it and purchase it from the plug-in details page. Free plug-ins can also be purchased at 0 yuan in the plug-in market. Plug-ins can only be packaged for use in the cloud side after purchasing.
> 购买插件时请选择正确的appid，以及绑定正确包名
> Please select the correct appid and bind the correct package name when purchasing the plug-ins.


##### 第二步：使用自定义基座打包uni原生插件 （注：请使用真机运行自定义基座）
##### Step 2: Package the uni native plug-ins with the custom base (Note: please use the mobile App Playground to run the custom base)
在manifest.json -> App原生插件配置 -> 选择云端插件 -> 选择需要打包的插件 -> 保存后提交云端打包生效。
Follow "manifest.json -> App native plug-in configuration -> select cloud plug-in -> select plug-in to be packaged -> save", and submit to the cloud side for packaging and taking effect.

<img width="600px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/nativePlugin-3.png" />


##### 第三步：开发调试uni-app原生插件
##### Step 3: Develop and debug the native uni-app plug-ins.
在vue页面或nvue页面引入这个原生插件。
Introduce this native plug-in in vue page or nvue page.

使用uni.requireNativePlugin的api，参数为插件的id。
Use the API of uni.requireNativePlugin, with the parameter set as the id of the plug-in.

1. 在页面引入原生插件，uni.requireNativePlugin 使用后返回一个对象：
1. Introduce a native plug-in to the page, and uni.requireNativePlugin returns an object after use:

```js
const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert')
```
2. 使用原生插件
2. Use native plugins

```js
	dcRichAlert.show({
		position: 'bottom',
		title: "提示信息",
		titleColor: '#FF0000',
		content: "<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",
		contentAlign: 'left',
		checkBox: {
			title: '不再提示',
			isSelected: true
		},
		buttons: [{
			title: '取消'
		}, {
			title: '否'
		}, {
			title: '确认',
			titleColor: '#3F51B5'
		}]
	}, result => {
		console.log(result)
	});
```




##### 第四步：打包发布
##### Step 4: Package and release
使用自定义基座开发调试uni-app原生插件后，不可直接将自定义基座apk作为正式版发布。
After developing and debugging the uni-app native plug-in on the custom base, the custom base apk cannot be directly released as the final version.
应该重新提交云端打包（不能勾选“自定义基座”）生成正式版本。
You should resubmit to the cloud side for packaging (the "Custom Base" should be unchecked) to generate the final version.
  


#### 注意事项
#### Precautions
1. 可以在 插件市场 查看更多插件，如需开发uni原生插件请参考 [uni原生插件开发文档](https://nativesupport.dcloud.net.cn/NativePlugin/README)。
1. You can view more plugins in the plugin market. If you need to develop uni native plugins, please refer to [uni native plugin development documentation](https://nativesupport.dcloud.net.cn/NativePlugin/README).
2. 如果插件需要传递文件路径，则需要传手机文件的绝对路径，可使用 5+ [IO模块](http://www.html5plus.org/doc/zh_cn/io.html) 的相关 API 得到文件的绝对路径。
2. If the plugin needs to pass the file path, it needs to pass the absolute path of the mobile phone file. You can use the relevant API of 5+ [IO module](http://www.html5plus.org/doc/zh_cn/io.html) to get the file absolute path.
