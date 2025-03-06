uni-app在App侧的原生扩展插件，支持使用java、object-c等原生语言编写。

从HBuilderX 3.6起，新增支持了使用uts来开发原生插件。文档另见[uts插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)

为了和uts插件区别，之前的`App原生插件`，改名为`App原生语言插件`。

本文为`App原生语言插件`的开发文档。

### uni.requireNativePlugin(PluginName)

引入 App 原生语言插件。

平台差异说明：App

自 HBuilderX 1.4 版本起，uni-app 支持引入原生插件，使用方式如下：

```js
	const PluginName = uni.requireNativePlugin(PluginName); // PluginName 为原生插件名称
```

不管是vue文件还是nvue文件，都是这个API。


### 内置原生插件
内置原生插件,uni-app已默认集成，支持直接在内置基座运行。

仅在nvue页面，支持引入BindingX，animation， DOM.addRule等。

在vue页面，支持引入clipboard，storage，stream，deviceInfo等。



使用方式：可通过```uni.requireNativePlugin```直接使用。

示例：

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




非内置原生插件，分为 [本地插件](/plugin/native-plugin.md#本地插件-非内置原生插件) 和 [云端插件](/plugin/native-plugin.md#云端插件-非内置原生插件) 。集成原生插件后，需要提交云端打包或制作自定义基座运行才会生效。

### 本地插件(非内置原生插件)

**本地插件**，是uni-app项目nativeplugins目录(目录不存在则创建)下的原生插件。

##### 第一步：获取本地原生插件

- 方式一：插件市场下载免费uni-app原生插件

可以登录[uni原生插件市场](https://ext.dcloud.net.cn/?cat1=5&cat2=51)，在免费的插件详情页中点击“下载for离线打包”下载原生插件（zip格式），解压到HBuilderX的uni-app项目下的“nativeplugins”目录（如不存在则创建），以下是“DCloud-RichAlert”插件举例，它的下载地址是：[https://ext.dcloud.net.cn/plugin?id=36](https://ext.dcloud.net.cn/plugin?id=36)

下载解压后目录结构如下：

<img width="600px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/nativePlugin-1.png" />


- 方式二：开发者自己开发uni-app原生插件

原生插件开发完成后按指定格式压缩为zip包，参考[uni-app原生插件格式说明文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/package)。
按上图的格式配置到uni-app项目下的“nativeplugins”目录。



##### 第二步：配置本地原生插件

在manifest.json -> App原生插件配置 -> 选择本地插件 -> 选择需要打包生效的插件 -> 保存后提交云端打包生效。

<img width="600px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/nativePlugin-2.png" />

##### 第三步：开发调试本地原生插件
在vue页面或nvue页面引入这个原生插件。

使用uni.requireNativePlugin的api，参数为插件的id。
```js
	const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert')
```

##### 第四步：打包发布
使用自定义基座开发调试本地原生插件后，不可直接将自定义基座apk作为正式版发布。
应该重新提交云端打包（不能勾选“自定义基座”）生成正式版本。




### 云端插件(非内置原生插件)

**云端插件**，已经在插件市场绑定或购买的插件，无需下载插件到工程中，云打包时会直接合并打包原生插件到APP中。（试用插件只能在自定义基座中使用）



##### 第一步：购买或下载uni-app原生插件
使用前需先登录[uni原生插件市场](https://ext.dcloud.net.cn/?cat1=5&cat2=51)，在插件详情页中购买，免费插件也可以在插件市场0元购。购买后才能够云端打包使用插件。
> 购买插件时请选择正确的appid，以及绑定正确包名


##### 第二步：使用自定义基座打包uni原生插件 （注：请使用真机运行自定义基座）
在manifest.json -> App原生插件配置 -> 选择云端插件 -> 选择需要打包的插件 -> 保存后提交云端打包生效。

<img width="600px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/nativePlugin-3.png" />


##### 第三步：开发调试uni-app原生插件
在vue页面或nvue页面引入这个原生插件。

使用uni.requireNativePlugin的api，参数为插件的id。

1.在页面引入原生插件，uni.requireNativePlugin 使用后返回一个对象：

```js
const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert')
```
2.使用原生插件

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
使用自定义基座开发调试uni-app原生插件后，不可直接将自定义基座apk作为正式版发布。
应该重新提交云端打包（不能勾选“自定义基座”）生成正式版本。



#### 注意事项
1.可以在 插件市场 查看更多插件，如需开发uni原生插件请参考 [uni原生插件开发文档](https://nativesupport.dcloud.net.cn/NativePlugin/README)。
2.如果插件需要传递文件路径，则需要传手机文件的绝对路径，可使用 5+ [IO模块](http://www.html5plus.org/doc/zh_cn/io.html) 的相关 API 得到文件的绝对路径。
