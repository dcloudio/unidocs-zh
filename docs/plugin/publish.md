# 制作和发布插件指南

DCloud有活跃的插件市场，[https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/)，并提供了计价销售、广告解锁、赞助、评价等机制。

## 为什么提交插件

- 写出通用的功能模块时，可以分享给其他有相同需求的人。人人贡献、人人受益。
- 通过赞赏、广告分成、计费销售，收获物质回报。
- 通过插件下载量、评星、排行，收获荣誉。

很多优秀的插件作者，可以做到每月销售数万元的插件。（只有uniCloud插件和App原生或uts插件支持付费，其他类型插件不能设价格）

了解插件变现的详细信息，另见文档[插件变现](sell.md)

## 插件制作注意

uni插件其实是uni-app项目下一部分代码，但提交时注意：

- 遵循插件目录规范，其中比较重要的是确定插件ID，详细解释下方。
- 插件包中不应该包含 unpackage 目录，最好也不包含 node_modules 目录。
- 插件包中不应该包含版本控制相关文件和目录，如 .git，.svn 等。
- 前端建议使用scss预处理并引用[uni.scss](https://github.com/dcloudio/uni-ui/blob/master/uni.scss)中的变量定义，保持各插件风格统一，方便插件使用者通过搭积木的方式开发整体风格一致的App

插件ID命名规范：
1. 格式为：'作者ID-插件英文名称'，示例：'xiaoming-abc'，其中作者ID和插件名称只能包含英文、数字
2. 作者ID由插件作者自定义，不能使用'DCloud'、'uni'等关键字，长度要求至少2位字符
3. 插件名称需直观表达插件的作用，例如：eshop、button等


从HBuilderX 3.1起，新增 `uni_modules`，它是uni生态的重要模块化方案。详情另见：[https://uniapp.dcloud.net.cn/uni_modules](https://uniapp.dcloud.net.cn/uni_modules)

自`uni_modules`发布后，建议插件作者首先在自己的项目下建一个`uni_modules`，在本地开发调试没问题后，对`uni_modules`下你的插件目录点右键，提交发布到插件市场。

插件市场分多种插件，分类介绍如下：

## 前端组件@components

前端组件指uni-app前端使用vue/nvue/wxml等技术开发的、用于页面内嵌的组件。它又进一步细分为vue组件、uvue组件、nvue组件、小程序自定义组件。这个分类不包含uts原生组件。

我们以小明开发的tag组件（插件ID为：xiaoming-tag）为例，上传插件市场时，目录结构要求如下：

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-01.png)

为保证代码简洁，上传插件时仅需包含必需的文件及目录。

若组件依赖三方组件，则需将三方组件一起打包上传；假设"xiaoming-tag"依赖小红开发的icon组件（xiaohong-icon），则发布"xiaoming-tag"插件时，目录结构要求如下：

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-02.png)

Tips：
- 通用组件、nvue组件、目录结构要求相同
- 小程序组件的一级目录，名字需从 components 变更为 wxcomponents ，其它结构要求相同
- 组件不能包含根目录的 manifest.json、pages.json、App.vue、main.js 等文件

### 付费前端插件@components-pay

插件市场很早就支持原生插件和uniCloud云插件的加密保护。但前端插件，比如ui库，尤其是可编译到web和小程序的插件，由于其载体的特殊开放性，很难做知识产权保护。

HBuilderX 4.19起，DCloud提供了一种云编译的手段来解决前端插件的知识产权保护问题。

插件作者设置加密后，插件使用者下载到的插件是加密后的版本。在运行、发行对前端代码编译时，uni-app x的编译器会将加密插件发送到DCloud的云编译服务器进行编译，将编译结果混入本地编译工程。从而实现插件使用者可以使用插件但无法获取插件源码的效果。这种云编译仅在第一次进行，云编译一次后会有缓存。

当然插件使用者可以获取到编译后的代码，但就像uni-app (x)编译后的代码非常难懂，更不会有人去改一样，这种方式虽然不严谨但大体上还是有效保护的了前端插件作者的知识产权。

这个过程不会把插件使用者的项目源码整体发送到DCloud服务器，云编译和解密的仅包括加密插件。

插件市场所有加密付费的插件，均有普通授权和源码授权两种版本。如果购买了源码授权，插件作者可以得到插件的完整源码，此时不再发送插件源码到云编译服务器。

不管是`普通授权版`还是`源码授权版`，都是绑定唯一的appid和包名。如购买者更换了这2个信息中的一个，需要重新购买授权。注意参考插件购买协议。

通过开发工具、编译器、运行时的整体配合，DCloud给前端插件作者提供了以往不存在的、更为优秀的知识产权保护方案。包括源码授权版，DCloud也会检查盗版行为。

目前前端插件加密，仅支持uni-app x下uni_modules形式的、符合 [easycom](https://uniapp.dcloud.net.cn/component/#easycom) 规范的组件。插件可在全平台加密，包括web端、app端。

如需发布付费插件，可对插件设置`普通授权版`及`源码授权版`的价格。DCloud插件市场会**自动加密付费插件中所有vue、uvue、uts、js、ts文件（除pages、hybrid、static目录外）**。

HBuilderX发布插件界面暂未支持前端组件价格设置，插件作者可在插件package.json中手动配置价格后提交发布，后续ui上将支持前端组件价格设置。
配置方式参考[uni_modules配置](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#package-json)，在package.json`dcloudext`下添加`sale`销售信息。

前端组件付费插件支持试用，当插件用户试用插件时，无法查阅这些加密的源码。插件试用只能用于本地运行或打包自定义基座，不能用于正式发布。

如果插件用户购买了普通授权版，也看不到这些加密文件的源码，运行或打包时，会提交到云端进行验证、解密及编译。

前端组件付费插件开发注意事项：
- 目前仅支持`uni-app x`项目，不支持`uni-app`项目，且最低需要HBuilderX 4.19+
- 不支持混搭`utssdk`目录、不支持页面加密、仅支持符合 [easycom](https://uniapp.dcloud.net.cn/component/#easycom) 规范的组件。可通过依赖的方式配置其他插件（目前仅支持依赖同样加密的插件）。
- 插件需要对外导出方法、类型等内容时，需要在插件根目录 index.uts 做导出，使用者不能直接引入插件内部的文件
- 加密组件属性的代码提示配置在发布时云端会自动生成，[点此查看配置说明](./components-config.md)
- 前端组件付费插件使用时会单独上传至云端独立编译（此时不会包含项目内的其他内容），所以插件不能引入项目内其他目录资源，此类需求，可以通过API让插件使用者传入对应的数据
- app-android 平台，不支持导出 vue 的 plugin 和 mixin

前端组件付费插件使用注意事项：
- 当项目包含前端付费插件时，首次运行或发行到指定平台时，会触发付费插件在该平台的云端编译，此时需要您的电脑处于联网状态，且您登录的HBuilderX账号需要具备使用该插件的权限（购买、试用、协作等），一旦云端编译成功，后续将使用本地缓存，如果更新了的插件版本、HBuilderX版本或运行时勾选了清除缓存，会再次触发云端编译。
- 不支持直接引入插件内部的文件，仅支持导入插件根目录

	* 正确的引入方式：`import { test } from '@/uni_modules/test-components' // 需要插件作者在 index.uts 中 导出 test`
	* 错误的引入方式：`import { test } from '@/uni_modules/test-components/test.uts'`

## uni-app前端模板

### vue/nvue 页面模板

我们以小明开发的设置模板（xiaoming-setting）为例，上传插件市场时，目录结构要求如下：

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-03.png)

若页面模板依赖其它组件，则需将依赖组件一起打包；假设"xiaoming-setting"依赖小红开发的list组件（xiaohong-list），则发布"xiaoming-setting"页面模板时，目录结构要求如下：
![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-04.png)

当然依赖管理，可以使用`uni_modules`，在你的`uni_modules`目录下的package.json中配置依赖另一个`uni_modules`，此时就不用再包含其他插件的源码，但这种做法无法锁定版本，会在使用者下载你的插件时自动安装最新的依赖。

如果你的页面，需要在下载时被注册到使用者的项目的pages.json中，从HBuilderX 3.5.0+ 插件导入工程时，支持合并页面路由到项目的 pages.json。[详见](uni_modules.md?id=pages-init)

Tips：
- vue 页面模板和 nvue 页面模板目录结构要求相同。
- 页面模板打包时需要包含 manifest.json、pages.json 等文件。

### uni-app前端项目模板

项目模板无特殊要求，注意满足 uni-app 项目目录结构要求即可，[详情](https://uniapp.dcloud.io/frame?id=%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
Tips：
- 项目模板打包时不需要包含 `unpackage` 目录；
- 项目模板打包时需要包含 manifest.json 文件。manifest.json 里不允许有 appid，包括 DCloud appid 或微信等三方 appid；
- 如果模板中包含 uniCloud 相关的云函数目录，如 uniCloud-aliyun、uniCloud-tcb，请选择“uniCloud”->“前后一体项目模板”。如果不使用云函数功能，则应该从插件包中删除 uniCloud 相关目录。

## JS SDK

开发JS SDK时，对目录结构无特殊要求，仅需将js文件命名为插件ID即可，例如：xiaoming-md5.js

Tips：
- 不能包含根目录的 manifest.json、pages.json、App.vue、main.js 等文件

如果是非`uni_modules`的js sdk，使用者下载后会被下载到使用者项目根目录下的`js_sdk`目录

## UTS插件@uts

uts插件开发详见[插件开发文档](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)，这里主要说明uts付费插件发布的注意事项。

uts付费插件分为`普通授权版`及`源码授权版`，两种付费方式区别[详见说明文档](https://uniapp.dcloud.net.cn/plugin/plugin-ext-introduction.html#payment)。

如需发布付费插件，可对插件设置`普通授权版`及`源码授权版`的价格。DCloud插件市场会对付费插件自动加密，付费插件加密规则：

- 加密除 interface.uts 之外的所有uts文件
- 加密utssdk/app-android及utssdk/app-ios目录下的java、kt、swift等混编文件

当插件用户试用插件时，无法查阅这些加密的源码。uts插件试用只能用于打包自定义基座，不能用于正式发布。

如果插件用户购买了`普通授权版`，也看不到这些加密文件的源码，提交云打包时，会在云端验证并解密文件进行打包。

如果插件作者上传插件时，设置了提供源码授权版，且插件使用者购买了源码授权版，才能下载到插件的源码。

不管是`普通授权版`还是`源码授权版`，都是绑定唯一的appid和包名。如购买者更换了这2个信息中的一个，需要重新购买授权。

Tips：
- uts加密插件只支持云端传统打包，不支持离线打包、也不支持安心打包。打包最低需要HBuilderX 3.7.2+
- 一般提交的uts插件仅包含uts源码，不建议包含三方sdk，如jar，这些应该配成仓储。

### uts插件和App原生语言插件的区别@utsdiff
uts插件和App原生插件在功能上是重叠的，都是原生扩展uni-app的能力。

从uts插件发布后，DCloud建议插件作者开发uts插件，替代老的原生插件。

它们之间有如下具体差别：
- uts开发和使用更加简单、清晰、小巧
- uts插件更新免审核，无需等待DCloud管理员审核上架
- uts插件天然支持多版本，插件作者更新后，使用者可以不更新，可以仍然使用之前下载到本地的老版插件
- uts插件支持源码版计费，可以卖更高的价格，相关版权由DCloud进行保护，防止盗版和侵权。并且很多使用者确实有源码需求，担心三方SDK有不可控的代码。

目前uni-app的ext api全部基于uts实现，一些内置api如弹框也已经改成uts实现。虽然对于开发者而言这些并非需要下载的插件，但其实本质是内置于runtime的uts插件。未来uni-app的所有官方api都会改为uts实现。uts的开发体验会优化到最佳。而原生语言插件只会修改较严重的bug。

在未来，uts插件将同时支持下一代的uni-app的uvue，以及现有的vue、nvue。而app原生语言插件只支持这一代的uni-app，无法支持uvue。

包括uts组件，也将支持vue页面。而原生语言插件的组件模式不会支持vue页面，只支持nvue页面。

注意uts插件目前还不支持离线打包，不过插件市场销售的原生语言插件也不支持离线打包。建议有个性化打包需求的开发者使用HBuilderX的[cli](https://hx.dcloud.net.cn/cli/README)来处理自动化打包。

FAQ：
- 为什么原生插件需要审核，且很慢，而uts插件免审核？
因为uts插件，提交的是源码，可控。而原生插件提交给DCloud的是编译后的文件，需要人工审核。实际上uniCloud插件也是免审核的，也是同样的代码，只有提交的是源码，都是免审的。

## App原生语言插件

App原生语言插件，需使用Andorid/iOS原生环境开发实现，请参考以下教程：
- [uni原生插件开发指南](https://nativesupport.dcloud.net.cn/NativePlugin/README)
- [Android平台uni原生插件开发](http://nativesupport.dcloud.net.cn/NativePlugin/course/android)
- [iOS平台uni原生插件开发](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios)

压缩包格式要求：打开zip后根目录需为插件id目录，二级目录是ios、android子目录及package.json，详情参考[uni原生插件包格式](https://nativesupport.dcloud.net.cn/NativePlugin/course/package)

从uts插件发布后，DCloud建议插件作者开发uts插件，替代老的原生插件。原因[见上](#utsdiff)。

## HBuilderX插件

HBuilderX插件是安装在HBuilderX工具里的。是编辑器的插件，不是手机App的插件。详细开发教程见：[http://hx.dcloud.net.cn/](http://hx.dcloud.net.cn/)

## uniCloud
### 云函数模板
云函数模板对文件命名没有特殊要求，但制作插件压缩包时，需要注意以下几点：
- 当模板中包含一个或多个云函数时，不能只在插件中放入云函数目录，而需要完整的从项目根目录开始。如uniCloud/cloudfunctions/cf123。uniCloud可以接受-aliyun或-tcb 后缀（阿里云和腾讯云这两个目录也可以同时存在）；
- 云函数有效的入口文件为 index.js，插件包中必须包含至少一个以此命名的文件。
- 涉及账户管理的话，请使用[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)

如果上传付费云函数插件，则必须选择要加密的云函数，否则插件试用者可以通过试用流程无限期使用你的插件而不需要付费。

定义加密云函数，为了与uni_modules统一规范，废弃原encryptlist.json，需在插件根目录下添加package.json，在uni_modules-> encrypt中配置需要加密的文件，如：

```json
{
	"uni_modules": {
		"encrypt": [ // 配置要加密的文件，为插件包中真实存在且相对根目录的文件路径，需注意uniCloud目录的后缀需与项目一致
			"uniCloud-aliyun/cloudfunctions/function/index.js"
		],
	}
}
```
encrypt数组中可灵活配置uniCloud/cloudfunctions下云函数及公共模块的js文件，与原encryptlist.json文件配置整个云函数或公共模块相比更加灵活。

定义好要加密的云函数内容后，上传插件，DCloud插件市场会自动加密这些云函数。
当插件用户试用插件时，无法查阅这些云函数的源码，并且只有在试用期内（一般是7天内），这些加密云函数才能在他部署的服务空间上运行，过了试用期这些云函数将自动失效。

即便插件用户购买了插件的普通授权版，也看不到这些加密云函数的源码，但这些云函数可以正常运行在他购买时绑定的服务空间上。且无法上传到其他服务空间。

如果插件作者上传插件时，同时提供了源码授权版，且插件使用者购买了源码授权版，才能拿到插件的所有源码。

关于普通授权版和源码授权版的区别，详见：[https://ask.dcloud.net.cn/article/38040](https://ask.dcloud.net.cn/article/38040)

> 从HBuilderX 3.2.0版本开始，当发布云端一体项目模板或云端一体页面模板的付费插件时，前端js文件也支持加密了，设置方式与云函数类似，在uni_modules->encrypt中定义文件路径，如：

```json
{
	"uni_modules": {
		"encrypt": [
			"js_sdk/index.js",
			"components/demo/demo.js"
		],
	}
}
```
**目前只支持付费插件的js文件加密，vue及nvue文件无法加密，业务核心逻辑建议写到js中。**
**如果发布云端一体项目且包含`uni_modules`时，则不会加密`uni_modules`目录下的文件，`uni_modules`下应该做为独立插件发布，分别进行加密配置。**

> 如果你的插件配置包含涉密信息，希望保护这些配置不被上传参考：[uni_modules插件上传辅助脚本示例](https://ext.dcloud.net.cn/plugin?id=5256)

### 云端一体页面模板
云端一体页面模板，如果非`uni_modules`，则为单页面模板，只能放一个页面。如果是`uni_modules`，可以放任意数量页面。

为了防止导入时与项目现有代码冲突，需注意以下几点命名规范：
- 必须包含云函数相关目录（uniCloud/cloudfunctions），可以包含js_sdk、pages、components、static等目录
- 云函数、公共模块命名需要包含“-”，即有插件ID前缀。
- js_sdk、components、static等目录下的子目录及文件命名需要包含“-”
- 不能包含根目录的 manifest.json、App.vue、main.js 等文件
- 如需注册页面到项目的pages.json中，参考[uni_modules文档](uni_modules.md?id=pages-init)

### 前后一体项目模板
与uni-app前端项目模板目录结构基本一致，但是必须包含uniCloud相关目录（uniCloud-aliyun、uniCloud-tcb）

### uniCloud admin 插件

在使用[uniCloud admin基础框架](https://ext.dcloud.net.cn/plugin?id=3268)后，可以进一步集成插件作者写好的admin插件，以丰富自己的admin系统的功能。
插件作者也可以按此文档提交插件，在插件市场的上传发布页面选择``uniCloud`` 分类的 ``Admin 插件`` 。

因文档较长，请单独参阅：[uniCloud admin插件开发指南](https://doc.dcloud.net.cn/uniCloud/admin?id=admin-%e6%8f%92%e4%bb%b6%e5%bc%80%e5%8f%91)

### DB Schema及验证函数
主要用于提交数据表schema及校验函数，所以必须包含uniCloud-aliyun/database 或 uniCloud-tcb/database目录

## pages_init
文档已迁移至[uni_modules文档](uni_modules.md?id=pages-init)

## 注意
- uni-app原生SDK及web项目两个分类下插件发布后需要审核才会生效。
- 插件不能自行下架，如需下架请发邮件到service@dcloud.io。您也可以把插件标题改为“已废弃”，DCloud管理员会及时审核处理。

**如果是非uni_modules插件，那么自己压缩的压缩包注意为标准zip格式，不要使用非主流的压缩软件、不要把rar等其他格式文件的后缀名改名为zip**
