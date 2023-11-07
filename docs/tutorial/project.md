## 工程简介

一个 uni-app 工程，就是一个 Vue 项目，你可以通过 HBuilderX 或 cli 方式快速创建 uni-app 工程，详见：[快速上手](/quickstart-hx.html)。

## 目录结构

一个uni-app工程，默认包含如下目录及文件：

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─uniCloud              云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见<a href="https://uniapp.dcloud.io/uniCloud/quickstart?structure&id=structure">uniCloud</a>）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─utssdk                存放uts文件
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，<b>注意：</b>静态资源都应存放于此目录
├─uni_modules           存放[uni_module](/uni_modules)。
├─platforms             存放各平台专用页面的目录，<a href="/tutorial/platform?id=%E6%95%B4%E4%BD%93%E7%9B%AE%E5%BD%95%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91">详见</a>
├─nativeplugins         App原生语言插件 <a href="https://nativesupport.dcloud.net.cn/NativePlugin/README">详见</a>
├─nativeResources       App端原生资源目录
│  ├─android            Android原生资源目录 <a href="https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android">详见</a>
|  └─ios                iOS原生资源目录 <a href="https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6-bundle-resources">详见</a>
├─hybrid                App端存放本地html文件的目录，<a href="/component/web-view">详见</a>
├─wxcomponents          存放小程序组件的目录，<a href="/tutorial/miniprogram-subject?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81">详见</a>
├─unpackage             非工程代码，一般存放运行或发行的编译结果
├─AndroidManifest.xml   Android原生应用清单文件 <a href="https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android">详见</a>
├─Info.plist            iOS原生应用配置文件 <a href="https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios">详见</a>
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 <a href="/collocation/App#应用生命周期">应用生命周期</a>
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，<a href="/collocation/manifest">详见</a>
├─pages.json            配置页面路由、导航条、选项卡等页面类信息，<a href="/collocation/pages">详见</a>
└─uni.scss              这里是uni-app内置的常用样式变量
	</code>
</pre>

**Tips**
- HbuilderX 1.9.0+ 支持在根目录创建 `ext.json`、`sitemap.json` 等小程序需要的文件。


### static目录
为什么需要static这样的目录？

uni-app编译器根据pages.json扫描需要编译的页面，并根据页面引入的js、css合并打包文件。\
对于本地的图片、字体、视频、文件等资源，如果可以直接识别，那么也会把这些资源文件打包进去，但如果这些资源以变量的方式引用，
比如：```<image :src="url"></image>```，甚至可能有更复杂的函数计算，此时编译器无法分析。\

那么有了static目录，编译器就会把这个目录整体复制到最终编译包内。这样只要运行时确实能获取到这个图片，就可以显示。

当然这也带来一个注意事项，如果static里有一些没有使用的废文件，也会被打包到编译包里，造成体积变大。

另外注意，static目录支持特殊的平台子目录，比如web、app、mp-weixin等，这些目录存放专有平台的文件，这些平台的文件在打包其他平台时不会被包含。详见[条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#static-%E7%9B%AE%E5%BD%95%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)

非 `static` 目录下的文件（vue组件、js、css 等）只有被引用时，才会被打包编译。

`css`、`less/scss` 等资源不要放在 `static` 目录下，建议这些公用的资源放在自建的 `common` 目录下。