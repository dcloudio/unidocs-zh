DCloud有活跃的插件市场，[https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/)，并提供了变现、评价等机制。
欢迎开发者为插件市场提供插件。
很多优秀的插件作者，可以做到每月销售数万元的插件。（只有uniCloud插件和原生插件支持付费，其他类型插件不能设价格）

插件作者制作插件时，需注意以下几点：
- 前端建议使用scss预处理并引用[uni.scss](https://github.com/dcloudio/uni-ui/blob/master/uni.scss)中的变量定义，保持各插件风格统一，方便插件使用者通过搭积木的方式开发整体风格一致的App
- 遵循插件目录规范，其中比较重要的是确定插件ID，详细解释下方。
- 插件包中不需要包含 unpackage 目录
- 插件包中不应该包含版本控制相关文件和目录，如 .git，.svn 等。

插件ID（原“插件使用名称”）命名规范：
1. 格式为：'作者ID-插件名称'，示例：'xiaoming-tag'，其中作者ID和插件名称只能包含英文、数字
2. 作者ID由插件作者自定义，不能使用'DCloud'、'uni'等关键字，长度要求至少2位字符
3. 插件名称需直观表达插件的作用，例如：tag、button等


从HBuilderX 3.1起，新增 `uni_modules`，它是uni生态的重要模块化方案。详情另见：[https://uniapp.dcloud.net.cn/uni_modules](https://uniapp.dcloud.net.cn/uni_modules)

插件市场分多种插件：

## 前端组件

我们以小明开发的tag组件（插件ID为：xiaoming-tag）为例，上传插件市场时，目录结构要求如下：

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-01.png)

为保证代码简洁，上传插件时仅需包含必需的文件及目录。

若组件依赖三方组件，则需将三方组件一起打包上传；假设"xiaoming-tag"依赖小红开发的icon组件（xiaohong-icon），则发布"xiaoming-tag"插件时，目录结构要求如下：

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-02.png)

Tips：
- 通用组件、nvue组件、目录结构要求相同
- 小程序组件的一级目录，名字需从 components 变更为 wxcomponents ，其它结构要求相同
- 不能包含根目录的 manifest.json、pages.json、App.vue、main.js 等文件

## uni-app前端模板

### vue/nvue 页面模板

我们以小明开发的设置模板（xiaoming-setting）为例，上传插件市场时，目录结构要求如下：

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-03.png)

若页面模板依赖其它组件，则需将依赖组件一起打包；假设"xiaoming-setting"依赖小红开发的list组件（xiaohong-list），则发布"xiaoming-setting"页面模板时，目录结构要求如下：
![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-04.png)

HBuilderX 3.5.0+ 支持插件导入工程时，支持合并页面路由到项目的 pages.json。[详见](uni_modules.md?id=pages-init)

Tips：
- vue 页面模板和 nvue 页面模板目录结构要求相同。
- 页面模板打包时需要包含 manifest.json、pages.json 等文件。

### uni-app前端项目模板

项目模板无特殊要求，注意满足 uni-app 项目目录结构要求即可，[详情](https://uniapp.dcloud.io/frame?id=%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
Tips：
- 项目模板打包时不需要包含 `unpackage` 目录；
- 项目模板打包时需要包含 manifest.json 文件。manifest.json 里不允许有 appid，包括 DCloud appid 或微信等三方 appid；
- 如果模板中包含 uniCloud 相关的云函数目录，如 cloudfunctions-aliyun、cloudfunctions-tcb，请选择“uniCloud”->“前后一体项目模板”。如果不使用云函数功能，则应该从插件包中删除 cloudfunctions 相关目录。

## JS SDK

开发JS SDK时，对目录结构无特殊要求，仅需将js文件命名为插件ID即可，例如：xiaoming-md5.js

Tips：
- 不能包含根目录的 manifest.json、pages.json、App.vue、main.js 等文件

## UTS插件@uts

uts插件开发详见[插件开发文档](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)，这里主要说明uts付费插件发布的注意事项。

uts付费插件分为`普通授权版`及`源码授权版`，两种付费方式区别[详见说明文档](https://uniapp.dcloud.net.cn/plugin/plugin-ext-introduction.html#payment)。

如需发布付费插件，可对插件设置`普通授权版`及`源码授权版`的价格。DCloud插件市场会**自动加密付费插件中的所有uts文件**。

当插件用户试用插件时，无法查阅这些加密的源码。uts插件试用只能用于打包自定义基座，不能用于正式发布。

如果插件用户购买了`普通授权版`，也看不到这些加密文件的源码，提交云打包时，会在云端验证并解密文件进行打包。

如果插件作者上传插件时，同时提供了源码授权版，且插件使用者购买了源码授权版，才能拿到插件的所有源码。

若插件作者提供了源码授权版，需及时注意合同待签通知。当意向买方在电子合同签名后，DCloud会短信通知插件作者，提醒插件作者也对该电子合同进行签名。

Tips：
- uts加密插件只支持传统打包，打包最低需要HBuilderX 3.7.2或以上版本



## 原生SDK
原生SDK，即uni原生插件，需使用Andorid/iOS原生环境开发实现，请参考以下教程：
- [uni原生插件开发指南](https://nativesupport.dcloud.net.cn/NativePlugin/README)
- [Android平台uni原生插件开发](http://nativesupport.dcloud.net.cn/NativePlugin/course/android)
- [iOS平台uni原生插件开发](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios)

压缩包格式要求：打开zip后根目录需为插件id目录，二级目录是ios、android子目录及package.json，详情参考[uni原生插件包格式](https://nativesupport.dcloud.net.cn/NativePlugin/course/package)


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

若插件作者提供了源码授权版，需及时注意合同待签通知。当意向买方在电子合同签名后，DCloud会短信通知插件作者，提醒插件作者也对该电子合同进行签名。

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
**如果发布云端一体项目且包含uni_modules时，则不会加密uni_modules目录下的文件，uni_modules下应该做为独立插件发布，分别进行加密配置。**

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

因文档较长，请单独参阅：[uniCloud admin插件开发指南](https://uniapp.dcloud.net.cn/uniCloud/admin?id=admin-%e6%8f%92%e4%bb%b6%e5%bc%80%e5%8f%91)

### DB Schema及验证函数
主要用于提交数据表schema及校验函数，所以必须包含uniCloud-aliyun/database 或 uniCloud-tcb/database目录

## pages_init
文档已迁移至[uni_modules文档](uni_modules.md?id=pages-init)

## 注意
- uni-app原生SDK及web项目两个分类下插件发布后需要审核才会生效。
- 插件不能自行下架，如需下架请发邮件到service@dcloud.io。

**注意压缩包为标准zip格式，不要把rar等其他格式改名为zip**