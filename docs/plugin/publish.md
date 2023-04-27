DCloud有活跃的插件市场，[https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/)，并提供了变现、评价等机制。
DCloud has an active plugin market, [https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/), and provides mechanisms such as monetization and evaluation.
欢迎开发者为插件市场提供插件。
Developers are welcome to provide plugins for the plugin marketplace.
很多优秀的插件作者，可以做到每月销售数万元的插件。（只有uniCloud插件和原生插件支持付费，其他类型插件不能设价格）
Many excellent plug-in authors can sell tens of thousands of plug-ins every month. (Only uniCloud plug-ins and native plug-ins support payment, other types of plug-ins cannot set prices)

插件作者制作插件时，需注意以下几点：
When creating plugins, plugin authors should pay attention to the following points:
- 前端建议使用scss预处理并引用[uni.scss](https://github.com/dcloudio/uni-ui/blob/master/uni.scss)中的变量定义，保持各插件风格统一，方便插件使用者通过搭积木的方式开发整体风格一致的App
- It is recommended to use scss preprocessing on the front end and refer to the variable definitions in [uni.scss](https://github.com/dcloudio/uni-ui/blob/master/uni.scss) to keep the style of each plugin uniform and facilitate plugins Users develop apps with the same overall style by building blocks
- 遵循插件目录规范，其中比较重要的是确定插件ID，详细解释下方。
- Follow the plugin directory specification, the most important of which is to determine the plugin ID, which is explained in detail below.
- 插件包中不需要包含 unpackage 目录
- The plugin package does not need to include the unpackage directory
- 插件包中不应该包含版本控制相关文件和目录，如 .git，.svn 等。
- The plugin package should not contain version control related files and directories such as .git, .svn, etc.

插件ID（原“插件使用名称”）命名规范：
Plugin ID (original "plugin usage name") naming convention:
1. 格式为：'作者ID-插件名称'，示例：'xiaoming-tag'，其中作者ID和插件名称只能包含英文、数字
1. The format is: 'author ID-plugin name', example: 'xiaoming-tag', where author ID and plugin name can only contain English and numbers
2. 作者ID由插件作者自定义，不能使用'DCloud'、'uni'等关键字，长度要求至少2位字符
2. The author ID is customized by the plugin author. Keywords such as 'DCloud' and 'uni' cannot be used. The length must be at least 2 characters.
3. 插件名称需直观表达插件的作用，例如：tag、button等
3. The plug-in name needs to express the function of the plug-in intuitively, such as: tag, button, etc.


从HBuilderX 3.1起，新增 `uni_modules`，它是uni生态的重要模块化方案。详情另见：[https://uniapp.dcloud.net.cn/uni_modules](https://uniapp.dcloud.net.cn/uni_modules)
Since HBuilderX 3.1, `uni_modules` has been added, which is an important modular solution for the uni ecosystem. For details, see: [https://uniapp.dcloud.net.cn/uni_modules](https://uniapp.dcloud.net.cn/uni_modules)

插件市场分多种插件：
The plugin market is divided into various plugins:

## 前端组件
## front-end components

我们以小明开发的tag组件（插件ID为：xiaoming-tag）为例，上传插件市场时，目录结构要求如下：
Let's take the tag component developed by Xiaoming (plugin ID: xiaoming-tag) as an example, when uploading the plugin market, the directory structure requirements are as follows:

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-01.png)

为保证代码简洁，上传插件时仅需包含必需的文件及目录。
In order to keep the code concise, only the necessary files and directories need to be included when uploading the plugin.

若组件依赖三方组件，则需将三方组件一起打包上传；假设"xiaoming-tag"依赖小红开发的icon组件（xiaohong-icon），则发布"xiaoming-tag"插件时，目录结构要求如下：
If the component depends on the third-party components, the three-party components need to be packaged and uploaded together; if "xiaoming-tag" depends on the icon component (xiaohong-icon) developed by Xiaohong, when publishing the "xiaoming-tag" plugin, the directory structure requirements are as follows:

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-02.png)

Tips：
- 通用组件、nvue组件、目录结构要求相同
- Common components, nvue components, and directory structure requirements are the same
- 小程序组件的一级目录，名字需从 components 变更为 wxcomponents ，其它结构要求相同
- The first-level directory of the applet component, the name needs to be changed from components to wxcomponents , other structure requirements are the same
- 不能包含根目录的 manifest.json、pages.json、App.vue、main.js 等文件
- Cannot include manifest.json, pages.json, App.vue, main.js and other files in the root directory

## uni-app前端模板
## uni-app front-end template

### vue/nvue 页面模板
### vue/nvue page template

我们以小明开发的设置模板（xiaoming-setting）为例，上传插件市场时，目录结构要求如下：
Let's take the setting template (xiaoming-setting) developed by Xiaoming as an example. When uploading the plugin market, the directory structure requirements are as follows:

![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-03.png)

若页面模板依赖其它组件，则需将依赖组件一起打包；假设"xiaoming-setting"依赖小红开发的list组件（xiaohong-list），则发布"xiaoming-setting"页面模板时，目录结构要求如下：
![](http://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/ext-dev-04.png)

HBuilderX 3.5.0+ 支持插件导入工程时，支持合并页面路由到项目的 pages.json。[详见](uni_modules.md?id=pages-init)
When HBuilderX 3.5.0+ supports plug-ins to import projects, it supports to merge pages and route them to the project's pages.json. [See details](uni_modules.md?id=pages-init)

Tips：
- vue 页面模板和 nvue 页面模板目录结构要求相同。
- Vue page template and nvue page template directory structure requirements are the same.
- 页面模板打包时需要包含 manifest.json、pages.json 等文件。
- When packaging a page template, you need to include manifest.json, pages.json and other files.

### uni-app前端项目模板
### uni-app front-end project template

项目模板无特殊要求，注意满足 uni-app 项目目录结构要求即可，[详情](https://uniapp.dcloud.io/frame?id=%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
Tips：
- 项目模板打包时不需要包含 `unpackage` 目录；
- The `unpackage` directory does not need to be included when the project template is packaged;
- 项目模板打包时需要包含 manifest.json 文件。manifest.json 里不允许有 appid，包括 DCloud appid 或微信等三方 appid；
- The manifest.json file needs to be included when the project template is packaged. Appid is not allowed in manifest.json, including third-party appid such as DCloud appid or WeChat;
- 如果模板中包含 uniCloud 相关的云函数目录，如 cloudfunctions-aliyun、cloudfunctions-tcb，请选择“uniCloud”->“前后一体项目模板”。如果不使用云函数功能，则应该从插件包中删除 cloudfunctions 相关目录。
- If the template contains uniCloud-related cloud function directories, such as cloudfunctions-aliyun and cloudfunctions-tcb, please select "uniCloud" -> "Integrated Project Template". If you don't use cloud functions, you should remove the cloudfunctions related directory from the plugin package.

## JS SDK

开发JS SDK时，对目录结构无特殊要求，仅需将js文件命名为插件ID即可，例如：xiaoming-md5.js
When developing the JS SDK, there is no special requirement for the directory structure, just name the js file as the plugin ID, for example: xiaoming-md5.js

Tips：
- 不能包含根目录的 manifest.json、pages.json、App.vue、main.js 等文件
- Cannot include manifest.json, pages.json, App.vue, main.js and other files in the root directory

## UTS插件@uts

uts插件开发详见[插件开发文档](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)，这里主要说明uts付费插件发布的注意事项。

uts付费插件分为`普通授权版`及`源码授权版`，两种付费方式区别[详见说明文档](https://uniapp.dcloud.net.cn/plugin/plugin-ext-introduction.html#payment)。

如需发布付费插件，在设置价格后上传，DCloud插件市场会自动加密插件中的所有uts文件。当插件用户试用插件时，无法查阅这些加密的源码。uts插件试用只能用于打包自定义基座，不能用于正式发布。

如果插件用户购买了`普通授权版`，也看不到这些加密文件的源码，提交云打包时，会在云端验证并解密文件进行打包。

如果插件作者上传插件时，同时提供了源码授权版，且插件使用者购买了源码授权版，才能拿到插件的所有源码。

若插件作者提供了源码授权版，需及时注意合同待签通知。当意向买方在电子合同签名后，DCloud会短信通知插件作者，提醒插件作者也对该电子合同进行签名。

Tips：
- uts加密插件只支持传统打包，打包最低需要HBuilderX 3.7.2或以上版本



## 原生SDK
## Native SDK
原生SDK，即uni原生插件，需使用Andorid/iOS原生环境开发实现，请参考以下教程：
Native SDK, that is, uni native plug-in, needs to be developed and implemented in the Andorid/iOS native environment. Please refer to the following tutorials:
- [uni原生插件开发指南](https://nativesupport.dcloud.net.cn/NativePlugin/README)
- [uni native plugin development guide](https://nativesupport.dcloud.net.cn/NativePlugin/README)
- [Android平台uni原生插件开发](http://nativesupport.dcloud.net.cn/NativePlugin/course/android)
- [Android platform uni native plug-in development] (http://nativesupport.dcloud.net.cn/NativePlugin/course/android)
- [iOS平台uni原生插件开发](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios)
- [iOS platform uni native plugin development](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios)

压缩包格式要求：打开zip后根目录需为插件id目录，二级目录是ios、android子目录及package.json，详情参考[uni原生插件包格式](https://nativesupport.dcloud.net.cn/NativePlugin/course/package)
Compressed package format requirements: After opening the zip, the root directory must be the plugin id directory, and the secondary directory is the ios, android subdirectory and package.json. For details, refer to [uni native plugin package format](https://nativesupport.dcloud.net. cn/NativePlugin/course/package)


## HBuilderX插件
## HBuilderX plugin
HBuilderX插件是安装在HBuilderX工具里的。是编辑器的插件，不是手机App的插件。详细开发教程见：[http://hx.dcloud.net.cn/](http://hx.dcloud.net.cn/)
The HBuilderX plugin is installed in the HBuilderX tool. It is a plug-in for the editor, not a plug-in for the mobile app. For detailed development tutorials, see: [http://hx.dcloud.net.cn/](http://hx.dcloud.net.cn/)

## uniCloud
### 云函数模板
### Cloud function template
云函数模板对文件命名没有特殊要求，但制作插件压缩包时，需要注意以下几点：
Cloud function templates have no special requirements for file naming, but when creating a plug-in zip package, you need to pay attention to the following points:
- 当模板中包含一个或多个云函数时，不能只在插件中放入云函数目录，而需要完整的从项目根目录开始。如uniCloud/cloudfunctions/cf123。uniCloud可以接受-aliyun或-tcb 后缀（阿里云和腾讯云这两个目录也可以同时存在）；
- When the template contains one or more cloud functions, you cannot just put the cloud function directory in the plug-in, but need to start from the project root directory completely. Such as uniCloud/cloudfunctions/cf123. uniCloud can accept -aliyun or -tcb suffix (the two directories of Aliyun and Tencent Cloud can also exist at the same time);
- 云函数有效的入口文件为 index.js，插件包中必须包含至少一个以此命名的文件。
- The valid entry file for cloud functions is index.js, and the plugin package must contain at least one file named after this.
- 涉及账户管理的话，请使用[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)
- For account management, please use [uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)

如果上传付费云函数插件，则必须选择要加密的云函数，否则插件试用者可以通过试用流程无限期使用你的插件而不需要付费。
If you upload a paid cloud function plugin, you must select the cloud function you want to encrypt, otherwise plugin trial users can use your plugin indefinitely through the trial process without paying.

定义加密云函数，为了与uni_modules统一规范，废弃原encryptlist.json，需在插件根目录下添加package.json，在uni_modules-> encrypt中配置需要加密的文件，如：
Define the encrypted cloud function. In order to unify the standard with uni_modules and discard the original encryptlist.json, you need to add package.json to the root directory of the plugin, and configure the files to be encrypted in uni_modules->encrypt, such as:

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
The js files of cloud functions and public modules under uniCloud/cloudfunctions can be flexibly configured in the encrypt array, which is more flexible than configuring the entire cloud function or public module in the original encryptlist.json file.

定义好要加密的云函数内容后，上传插件，DCloud插件市场会自动加密这些云函数。
After defining the cloud function content to be encrypted, upload the plug-in, and the DCloud plug-in market will automatically encrypt these cloud functions.
当插件用户试用插件时，无法查阅这些云函数的源码，并且只有在试用期内（一般是7天内），这些加密云函数才能在他部署的服务空间上运行，过了试用期这些云函数将自动失效。
When the plug-in user tries the plug-in, he cannot view the source code of these cloud functions, and only during the trial period (usually 7 days), these encrypted cloud functions can be run on the service space he deployed. After the trial period, these cloud functions will be Automatically lapse.

即便插件用户购买了插件的普通授权版，也看不到这些加密云函数的源码，但这些云函数可以正常运行在他购买时绑定的服务空间上。且无法上传到其他服务空间。
Even if the plug-in user purchases the normal authorized version of the plug-in, he cannot see the source code of these encrypted cloud functions, but these cloud functions can run normally on the service space bound when he purchased them. and cannot be uploaded to other service spaces.

如果插件作者上传插件时，同时提供了源码授权版，且插件使用者购买了源码授权版，才能拿到插件的所有源码。
If the author of the plug-in uploads the plug-in, and the authorized version of the source code is provided at the same time, and the user of the plug-in has purchased the authorized version of the source code, all the source code of the plug-in can be obtained.

若插件作者提供了源码授权版，需及时注意合同待签通知。当意向买方在电子合同签名后，DCloud会短信通知插件作者，提醒插件作者也对该电子合同进行签名。
If the plug-in author provides an authorized version of the source code, it is necessary to pay attention to the notice of pending contract signing in time. When the intended buyer signs the electronic contract, DCloud will notify the plug-in author via SMS, reminding the plug-in author to also sign the electronic contract.

关于普通授权版和源码授权版的区别，详见：[https://ask.dcloud.net.cn/article/38040](https://ask.dcloud.net.cn/article/38040)
For the difference between the ordinary authorized version and the source code authorized version, please refer to: [https://ask.dcloud.net.cn/article/38040](https://ask.dcloud.net.cn/article/38040)

> 从HBuilderX 3.2.0版本开始，当发布云端一体项目模板或云端一体页面模板的付费插件时，前端js文件也支持加密了，设置方式与云函数类似，在uni_modules->encrypt中定义文件路径，如：
> Starting from HBuilderX 3.2.0, when a paid plug-in for cloud-integrated project template or cloud-integrated page template is released, the front-end js file also supports encryption. The setting method is similar to the cloud function. Define the file path in uni_modules->encrypt, like:

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
**Currently, only the js file encryption of paid plug-ins is supported, vue and nvue files cannot be encrypted, and the core business logic is recommended to be written in js. **
**如果发布云端一体项目且包含uni_modules时，则不会加密uni_modules目录下的文件，uni_modules下应该做为独立插件发布，分别进行加密配置。**
**If the cloud-integrated project is published and includes uni_modules, the files in the uni_modules directory will not be encrypted. The uni_modules directory should be published as an independent plug-in, and encryption configuration should be performed separately. **

> 如果你的插件配置包含涉密信息，希望保护这些配置不被上传参考：[uni_modules插件上传辅助脚本示例](https://ext.dcloud.net.cn/plugin?id=5256)
> If your plugin configuration contains confidential information, you want to protect these configurations from uploading. Reference: [uni_modules plugin upload auxiliary script example](https://ext.dcloud.net.cn/plugin?id=5256)

### 云端一体页面模板
### Cloud integrated page template
云端一体页面模板，如果非`uni_modules`，则为单页面模板，只能放一个页面。如果是`uni_modules`，可以放任意数量页面。
Cloud integrated page template, if not `uni_modules`, it is a single-page template, and only one page can be placed. In the case of `uni_modules`, any number of pages can be placed.

为了防止导入时与项目现有代码冲突，需注意以下几点命名规范：
In order to prevent conflicts with the existing code of the project when importing, pay attention to the following naming conventions:
- 必须包含云函数相关目录（uniCloud/cloudfunctions），可以包含js_sdk、pages、components、static等目录
- Must include cloud function related directories (uniCloud/cloudfunctions), can include js_sdk, pages, components, static and other directories
- 云函数、公共模块命名需要包含“-”，即有插件ID前缀。
- The name of cloud functions and public modules needs to contain "-", that is, there is a plugin ID prefix.
- js_sdk、components、static等目录下的子目录及文件命名需要包含“-”
- Subdirectories and file names under js_sdk, components, static and other directories need to contain "-"
- 不能包含根目录的 manifest.json、App.vue、main.js 等文件
- Cannot include manifest.json, App.vue, main.js and other files in the root directory
- 如需注册页面到项目的pages.json中，参考[uni_modules文档](uni_modules.md?id=pages-init)
- To register pages into the project's pages.json, refer to [uni_modules documentation](uni_modules.md?id=pages-init)
 
### 前后一体项目模板
### Front and back project template
与uni-app前端项目模板目录结构基本一致，但是必须包含uniCloud相关目录（uniCloud-aliyun、uniCloud-tcb）
It is basically the same as the uni-app front-end project template directory structure, but must include uniCloud related directories (uniCloud-aliyun, uniCloud-tcb)

### uniCloud admin 插件
### uniCloud admin plugin

在使用[uniCloud admin基础框架](https://ext.dcloud.net.cn/plugin?id=3268)后，可以进一步集成插件作者写好的admin插件，以丰富自己的admin系统的功能。
After using the [uniCloud admin basic framework](https://ext.dcloud.net.cn/plugin?id=3268), you can further integrate the admin plugin written by the plugin author to enrich the functions of your own admin system.
插件作者也可以按此文档提交插件，在插件市场的上传发布页面选择``uniCloud`` 分类的 ``Admin 插件`` 。
Plugin authors can also submit plugins according to this document, and select ``Admin Plugins`` in the ``uniCloud`` category on the upload and release page of the Plugin Marketplace.

因文档较长，请单独参阅：[uniCloud admin插件开发指南](https://uniapp.dcloud.net.cn/uniCloud/admin?id=admin-%e6%8f%92%e4%bb%b6%e5%bc%80%e5%8f%91)
Due to the long document, please refer to: [uniCloud admin Plugin Development Guide](https://uniapp.dcloud.net.cn/uniCloud/admin?id=admin-%e6%8f%92%e4%bb%b6% e5%bc%80%e5%8f%91)

### DB Schema及验证函数
### DB Schema and validation functions
主要用于提交数据表schema及校验函数，所以必须包含uniCloud-aliyun/database 或 uniCloud-tcb/database目录
It is mainly used to submit data table schema and verification function, so it must include uniCloud-aliyun/database or uniCloud-tcb/database directory

## pages_init
文档已迁移至[uni_modules文档](uni_modules.md?id=pages-init)
Documentation migrated to [uni_modules documentation](uni_modules.md?id=pages-init)

## 注意
## Notice
- uni-app原生SDK及web项目两个分类下插件发布后需要审核才会生效。
- Plug-ins under the two categories of uni-app native SDK and web projects need to be reviewed before they take effect.
- 插件不能自行下架，如需下架请发邮件到service@dcloud.io。
- The plugin cannot be removed by itself. If you want to remove it, please send an email to service@dcloud.io.

**注意压缩包为标准zip格式，不要把rar等其他格式改名为zip**
**Note that the compressed package is in standard zip format, do not rename other formats such as rar to zip**