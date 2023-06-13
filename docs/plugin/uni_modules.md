# uni_modules

### 什么是 uni_modules
### What is uni_modules
`uni_modules`是uni-app的插件模块化规范（HBuilderX 3.1.0+支持），通常是对一组js sdk、组件、页面、uniCloud云函数、公共模块等的封装，用于嵌入到uni-app项目中使用，也支持直接封装为项目模板。
`uni_modules` is the plug-in modular specification of uni-app (supported by HBuilderRX 3.1.0+), which is usually the encapsulation of a group of js sdk, components, pages, uniCloud cloud functions, public modules, etc. It is used for embedding in uni-app projects, and also supports direct encapsulation as project templates.

插件开发者，可以像开发uni-app项目一样编写一个`uni_modules`插件，并在HBuilderX中直接上传至[插件市场](https://ext.dcloud.net.cn/)。
Plug-in developers can write a `uni_modules` plug-in just like developing a uni-app project, and upload it directly to the [plug-in market](https://ext.dcloud.net.cn/) in HBuilderX.

插件使用者，可以在[插件市场](https://ext.dcloud.net.cn/)查找符合自己需求的`uni_modules`插件，使用HBuilderX 3.1.0+直接导入到自己的uni-app项目中。后续还可以在HBuilderX中直接点右键升级插件。
Plug-in users can find the `uni_modules` plugin that meets their needs in [Plugin Market](https://ext.dcloud.net.cn/), and use HBuilderX 3.1.0+ to directly import it into their uni-app project. You can also directly right-click in HBuilderX to upgrade the plug-in later.

相对于普通的插件，`uni_modules`插件拥有更强的独立性，拥有独立的目录结构，可以更加方便的发布，更新，卸载（HBuilderX 3.1.0+对`uni_modules`插件提供了右键菜单，支持发布，更新，安装依赖等）
Compared with ordinary plug-ins, the `uni_modules` plug-in has stronger independence and independent directory structure, and can be released, updated and uninstalled more conveniently (HBuilderX 3.1.0+ provides a right-click menu for the `uni_modules` plug-in, and supports publishing, updating, installation dependency, etc.)

相对于node_modules（node.js模块），`uni_modules`的三方依赖安装时默认最新版本，插件均直接安装在`uni_modules`目录下，不做嵌套，当然，如果开发者希望固定某个版本的依赖，可以将该三方依赖包含到自己的插件包内。
Compared with node_modules (node.js module), the third party dependency of `uni_modules` defaults to the latest version during installation. Plug-ins are directly installed in the `uni_modules` directory without nesting. Of course, if developers want to fix a version of dependencies, they can include the third-party dependencies in their plug-in packages.

为什么有了`node_modules`，还需要再发明一个`uni_modules`的轮子？
Why do we need to invent another `uni_modules` wheel after having `node_modules`?
1. `node_modules` 不满足云端一体的需求。uniCloud的云函数、公共模块、schema和前端的各种js_sdk、组件、页面、项目，无法在`node_modules`模式下有效融合。
1. `node_modules` does not meet the needs of cloud integration. UniCloud's cloud functions, public modules, schema and various js_sdk, components, pages and projects in the front end cannot be effectively integrated in the `node_modules` mode.
2. `uni_modules`有付费和商业的插件，DCloud插件市场提供了版权保护。而`node_modules`不支持付费和版权保护。
2. `uni_modules` is provided in the form of paid and commercial plug-ins, and the DCloud plug-in market provides copyright protection. But `node_modules` does not support payment and copyright protection.
3. `node_modules` 是开发者友好而影响终端用户性能的模式。开发者为了省事，层层嵌套`node_modules`，造成数量惊人的文件数目。`uni_modules`不支持module嵌套，鼓励开发者优化包体积
3. `node_modules` is a developer-friendly mode that affects the performance of end users. To save trouble, developers nested `node_modules` layer by layer, resulting in an astonishing number of files. `uni_modules` Module nesting is not supported, and developers are encouraged to optimize package’s size
4. `uni_modules`鼓励开发者总是使用最新版。并在HBuilderX中提供了版本内容对比工具
4. `uni_modules` encourages developers to always use the latest version. And tools for version content comparison are provided in HBuilderX
5. `uni_modules`里也支持放置`node_modules`，没有强行排斥。
5. `node_modules` placing is also supported in `uni_modules`, without forced rejection.

与之前插件市场的普通插件相比，`uni_modules`有何优势？
What are the advantages of `uni_modules` compared with ordinary plugins in the plugin market?
1. 支持在HBuilderX里直接发布、更新、删除
1. Support direct release, update and deletion in HBuilderX
2. 支持依赖（在package.json中配置）
2. Support dependencies (configured in package.json)
3. 插件文件位置统一，不会造成下载一个插件，不知道给工程下多少个目录写入了多少个文件。删除插件时也可以一点删除
3. If the location of the plug-in file is uniform, it will not cause the problem of downloading a plug-in but not knowing how many files are written to the number of directories under the project. When deleting the plug-in, you can delete it with one click

### 目录结构
### Directory structure

#### 项目插件的uni_modules
#### uni_modules for project plugins

`uni_modules`插件如果是项目类型的插件，只需要在项目的根目录下放一个符合`uni_modules`规范的package.json。
If the `uni_modules` plugin is a project type plugin, you only need to put a package.json that conforms to the `uni_modules` specification in the root directory of the project.

右键点击这个package.json，即可对这个项目插件进行更新、或发布到插件市场。
Right-click on the package.json to update the project plugin or publish it to the plugin marketplace.

比如[uni-admin](https://ext.dcloud.net.cn/plugin?id=3268)、[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)，都可以通过这种方式更新。
For example [uni-admin](https://ext.dcloud.net.cn/plugin?id=3268), [uni-starter](https://ext.dcloud.net.cn/plugin?id=5057) , can be updated in this way.

#### 非项目插件的uni_modules
#### uni_modules for non-project plugins

如果是非项目类型的插件，比如组件、js sdk、页面模板、云函数，则需要放置在项目的`uni_modules`目录下。
If it is a plug-in of non-project type, such as component, js sdk, page template and cloud function, it needs to be placed in the `uni_modules` directory of the project.

此时`uni_modules`目录下的目录结构和uni-app的项目结构是一致的，如下：
At this time, the directory structure under the `uni_modules` directory is the same as the project structure of uni-app, as follows:

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
uni_modules                                项目根目录下
└── [plugin_id] // 插件 ID
    ├── uniCloud                           插件内的uniCloud内容会被虚拟合并到项目根目录的uniCloud中（注意：插件内的uniCloud目录，没有-aliyun,-tcb后缀）
    ├── components                         符合vue组件规范的uni-app组件目录，支持easycom规范
    ├── utssdk                             存放uts插件
    ├── hybrid                             存放本地网页的目录，<a href="/component/web-view">详见</a>
    ├── pages                              业务页面文件存放的目录 
    ├── static                             存放应用引用静态资源（如图片、视频等）的目录，<b>注意：</b>静态资源只能存放于此
    ├── wxcomponents                       存放小程序组件的目录，<a href="/frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81">详见</a>
    ├── license.md                         插件使用协议说明
    ├── package.json                       插件配置，必选(除此之外均`可选`)                          
    ├── readme.md                          插件文档
    ├── changelog.md                       插件更新日志
    ├── menu.json                          如果是uniCloud admin插件，可以通过menu.json注册动态菜单，<a href="/uniCloud/admin?id=admin-%e6%8f%92%e4%bb%b6%e5%bc%80%e5%8f%91">详见 menu.json 配置</a>
	</code>
</pre>

也就是`uni_modules`目录下相当于复制一遍uni-app的项目结构。
That is, the `uni_modules` directory is equivalent to duplicating the project structure of uni-app.

**Tips**
- 插件目录不支持pages.json、App.vue、main.js、manifest.json、uni.scss文件，如果需要插件使用者修改这些文件内容，请在插件文档(readme.md)中详细说明。
- Files of pages.json, App.vue, main.js, manifest.json and uni.scss are not supported in the plug-in directory. If plug-in users need to modify the contents of these files, please elaborate in detail in the plug-in document (readme.md).
- 插件目录支持`pages_init.json`，可以方便注册页面到项目的pages.json中，[见下](?id=pages-init)
- The plugin directory supports `pages_init.json`, which can easily register pages to the project's pages.json, [see below](?id=pages-init)
- 在插件内部引用资源、跳转页面时，请尽量使用相对路径。
- When referencing resources or jumping pages inside plug-ins, please use relative paths as much as possible.
- 插件内components目录同样支持easycom规范，插件使用者可以直接在项目中使用插件内符合easycom规范的组件，当项目或插件内存在easycom组件冲突，编译时会给予提示，您可以通过修改组件目录及组件文件名称来解决冲突问题。
- The components directory in the plug-in also supports easycom specification. Plugin users can directly use the components meeting the easycom specification in the plug-in in the project. When there is an easycom component conflict in the project or plug-in, a prompt will be given during compilation and you can resolve the conflict by modifying the component directory and component file name.


在HBuilderX中，`uni_modules`下如果包含了uniCloud目录的内容，会被以引用的方式，显示到主项目根目录下的uniCloud中。此时文件前的图标左下角会显示一个快捷方式箭头。
In HBuilderX, if `uni_modules` contains the contents of the uniCloud directory, it will be displayed in uniCloud in the root directory of the main project by way of reference. A shortcut arrow will appear in the lower left corner of the icon in front of the file.

如下图，项目中有一个`uni_modules`名为`uni-config-center`，它下面包含了名为`uni-config-center`的公共模块。所以在项目根目录的公共模块目录common下，也会多出一个`uni-config-center`。
As shown in the figure below, there is a `uni_modules` named `uni-config-center` in the project, which contains a public module named `uni-config-center`. Therefore, under the common module directory common in the project root directory, there will also be an additional `uni-config-center`.

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni_modules.jpg)

HBuilderX 中打开配有引用图标指示的文件，会打开原始地址。
Opening a file indicated by a reference icon in HBuilderX will open the original address.

### 使用 uni_modules 插件
### Use uni_modules plug-in
#### 下载uni_modules插件
#### Download uni_modules plugin
1. 在[插件市场](https://ext.dcloud.net.cn/)查找uni_modules插件
1. Find the uni_modules plugin in [Plugin Market](https://ext.dcloud.net.cn/)
2. 在插件详情页,右侧会标明该插件是否支持uni_modules，点击`使用 HBuilderX 导入插件`
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/import_uni_modules.png)
3. 选择要导入的uni-app项目
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/import_uni_modules_dialog.png)

**Tips**
- uni_modules支持组件easycom，使用者可以直接使用插件内符合easycom规范的组件
- uni_modules supports the component easycom, and users can directly use the components meeting the easycom specification in the plug-in
- 其他资源，如图片，js等，在项目中可以直接按目录结构引入即可使用，如：
- Other resources, such as images and js, can be directly introduced and used according to the directory structure in the project. For example:
```js
import {test} from '@/uni_modules/xx-yy/js_sdk/test.js'
```

- 如果要使用uni_modules中的页面，[见下](#pages-init)
- If you want to use pages from uni_modules, [see below](#pages-init)


#### 安装uni_modules插件依赖
#### Install uni_modules plug-in dependencies
1. 导入插件时，HBuilderX会自动安装当前插件的所有三方依赖。
1. When importing a plug-in, HBuilderX will automatically install all third-party dependencies of the current plug-in.
2. 您还可以在插件目录右键手动执行`安装插件三方依赖`
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/deps_uni_modules.png)
#### 更新uni_modules插件
#### Update uni_modules plug-in
1. 可以通过插件目录右键`从插件市场更新`，来检查更新当前所使用的插件
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/check_uni_modules.png)
2. 对比插件，确认更新内容
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/compare_uni_modules.png)
#### 卸载uni_modules插件
#### Uninstall uni_modules plug-in
uni_modules插件目录是独立存在的，如果您不再需要该插件，可以直接删除该插件目录。
The uni_modules plug-in directory is standalone. If you no longer need the plug-in, you can delete it directly.

**Tips**
- 导入uni_modules规范插件需要使用 3.1.0 以上版本的 HBuilderX
- Importing the uni_modules specification plug-in requires HBuilderX 3.1.0+


### 配置
### configuration
#### package.json@package-json

package.json在每个`uni_modules`插件中都必须存在，包含了插件的基本信息。以下是package.json的详细配置说明
package.json must exist in every `uni_modules` plug-in and contains the basic information of plug-ins. The following is a detailed configuration description of package.json
```json
{
    // 注意，不能直接拷贝本段代码到编辑器中，package.json 目前不支持注释。本段代码加的注释只是用于解释代码。
    //Note that you cannot directly copy this code into the editor, and package.json currently does not support comments. The comments added in this paragraph are only used to explain the code.
    "id": "作者ID-插件英文名称", // 必填，插件ID，格式为：'作者ID-插件英文名称'，例如：'xx-yy'，其中作者ID和插件名称只能包含英文、数字，作者ID不能使用'DCloud'、'uni'等关键字
    "displayName": "插件显示名称", // 必填，用于展示在插件市场的显示名称
    "version": "1.0.0", // 必填，插件版本
    "description": "插件描述", // 必填，插件描述
    "keywords": [], // 必填，插件标签关键词，最多5个
    "repository": "github:user/repo", // 仓库地址
    "engines": { // HBuilderX/cli 最低兼容版本
        "HBuilderX": "^3.1.0"
    },
    "dcloudext": { // DCloud插件市场配置
      "category": ["前端组件", "通用组件"], // 可选（HBuilderX低于3.6.0时必填）， 插件市场分类
      "type": "component-vue", // 必填（HBuilderX 3.6.0 以上支持），插件市场分类标识，分类标识可以参考下边列出的表格
      "sale": { // 销售 （目前仅限uniCloud类插件）
          "regular": { // 普通授权版价格，单位为元，如果为免费插件，设置普通授权版价格为 0 即可。
              "price": "0.00"
          },
          "sourcecode": { // 源码授权版价格，单位为元
              "price": "0.00"
          }
      },
      "contact": { // 插件作者 QQ，方便管理员审核时与作者快速沟通。
          "qq": ""
      },
      "declaration": { // 隐私、权限及商业化声明
          "ads": "", //  必填，本插件是否包含广告，如包含需详细说明广告表达方式、展示频率，请如实填写，如不包含，可填“无”
          "data": "", // 必填，本插件采集的数据、发送的服务器地址、以及数据用途说明，请如实填写，如不采集任何数据，可填写“插件不采集任何数据”，如果使用的三方SDK需要采集数据，可填写“插件使用的 XX SDK会采集数据，详情可参考：https://other-sdk.com/"
          "permissions": "" // 必填，本插件需要申请的系统权限列表，请如实填写，如不需要任何权限，可填“无”
      },
      "npmurl":"" // npm 地址
    },
    "uni_modules": { // uni_modules配置
        "scripts": {
            "init": "node scripts/init.js" // 新增于 HBuilderX 3.6.7，初次安装此插件时执行，如果一次安装多个插件及依赖会在所有插件安装完毕执行
        },
        "dependencies": [], // 依赖的 uni_modules 插件ID列表
        "encrypt": [ // 配置云函数，公共模块，clientDB Action加密
            "uniCloud/cloudfunctions/uni-admin/controller/permission.js" // 注意这里是真实的文件路径，uni_modules下的uniCloud不带-aliyun、-tcb后缀，但是项目根目录下的uniCloud是带有后缀的
        ],
        "platforms": { // 平台兼容性：y 表示 Yes，支持；n 表示 No，不支持；u 表示 Unknown，不确定；默认为 u
            "cloud": { // 云端平台兼容性
                "tcb": "y",
                "aliyun": "y"
            },
            "client": { // 前端平台兼容性
                "App": {
                    "app-vue": "y",
                    "app-nvue": "n"
                },
                "H5-mobile": {
                    "Safari": { // 当需要指定最小版本才支持时，可以配置minVersion
                        "minVersion": "14.0.2"
                    },
                    "Android Browser": "y",
                    "微信浏览器(Android)": "u",
                    "QQ浏览器(Android)": "u"
                },
                "H5-pc": {
                    "Chrome": "y",
                    "IE": "u",
                    "Edge": "u",
                    "Firefox": "u",
                    "Safari": "u"
                },
                "小程序": {
                    "微信": "y",
                    "阿里": "y",
                    "百度": "y",
                    "抖音": "y",
                    "QQ": "y"
                },
                "快应用": {
                    "华为": "u",
                    "联盟": "u"
                }
            }
        }
    }
}
```
**Tips**
- 上述配置基于npm [package.json](https://docs.npmjs.com/cli/v6/configuring-npm/package-json)规范扩展，故标准的package.json属性也同样支持，比如可以通过files来控制要上传的插件包内容
- The above configuration is based on the npm [package.json](https://docs.npmjs.com/cli/v6/configuring-npm/package-json) specification extension, so the standard package.json attributes are also supported, for example, through files to control the content of the plugin package to be uploaded
- 插件市场分类标识（对应：package.json->dcloudext->type）
- Plug-in market classification identification (corresponding: package.json->dcloudext->type)

| 一级分类			| 二级分类				| type						|
| Primary classification | Secondary classification | type |
| ---				| ---					| ---						|
| 前端组件			| 通用组件				| component-vue				|
| Front-end components | Common components | component-vue |
| 前端组件			| 小程序组件			| component-mp				|
| front-end components | MiniApp components | component-mp |
| JS SDK			| 通用 SDK				| sdk-js					|
| JS SDK | Universal SDK | sdk-js |
| uts插件			| uts插件				| uts						|
| uts plugin | uts plugin | uts |
| uni-app前端模板	| 前端页面模板			| uniapp-template-page		|
| uni-app front-end template | front-end page template | uniapp-template-page |
| uni-app前端模板	| uni-app前端项目模板	| uniapp-template-project	|
| uni-app front-end template | uni-app front-end project template | uniapp-template-project |
| uniCloud			| 云函数模板			| unicloud-template-function|
| uniCloud | cloud function template | unicloud-template-function|
| uniCloud			| 云端一体页面模板		| unicloud-template-page	|
| uniCloud | Cloud One Page Template | unicloud-template-page |
| uniCloud			| 云端一体项目模板		| unicloud-template-project	|
| uniCloud | Cloud-integrated project template | unicloud-template-project |
| uniCloud			| Admin插件				| unicloud-admin			|
| uniCloud | Admin plugin | unicloud-admin |
| uniCloud			| DB Schema及验证函数	| unicloud-database			|
| uniCloud | DB Schema and validation functions | unicloud-database |



#### uni_modules.config.json
`uni_modules.config.json`在项目根目录，可以配置插件更新后的触发脚本（通常用于执行自定义的自动化任务），插件uniCloud支持的服务空间。以下是`uni_modules.config.json`的详细配置说明
`uni_modules.config.json` In the root directory of the project,  you can configure the trigger script updated by the plug-in (usually used to perform customized automation tasks) and the service space supported by the plug-in uniCloud. The following is a detailed configuration description of `uni_modules.config.json`
```json
{
	"scripts": {
		"postupdate": "node scripts/upgrade.js", // 更新插件后执行该脚本，可从process.env.UNI_MODULES_ID获取当前被更新的插件ID，如果存在多个，以,隔开
		"preupload": "node scripts/preupload.js", // 上传插件之前执行该脚本，可从process.env.UNI_MODULES_ID获取当前被更新的插件ID，如果存在多个，以,隔开
		"postupload": "node scripts/postupload.js" // 上传插件之后(无论上传成功还是失败)执行该脚本，可从process.env.UNI_MODULES_ID获取当前被更新的插件ID，如果存在多个，以,隔开
	},
	"uni_modules": {
		"uni-id": { // 插件ID
			"uniCloud": ["aliyun", "tcb"] // 当项目同时存在aliyun，tcb时可手动指定该插件所属的服务空间
		}
	}
}
```

**Tips**
- 当项目内仅关联了一个服务空间，此时uni_modules插件内的uniCloud相关资源会自动归属至该服务空间，无需在uni_modules.config.json中配置uniCloud所属服务空间
- When only one service space is associated with the project, the uniCloud-related resources in the uni_modules plugin will be automatically attributed to this service space, so there is no need to configure the service space to which uniCloud belongs in uni_modules.config.json
- 当项目内关联了两个服务空间（阿里云和腾讯云同时存在）
- When there are two service spaces in the project (Alibaba Cloud and Tencent Cloud exist at the same time)
  * 若未在uni_modules.config.json中配置平台，则上传该插件uniCloud资源时，会提示上传至选择哪个服务空间
  * If the platform is not configured in uni_modules.config.json, then when uploading the uniCloud resources of this plug-in, you will be prompted to select which service space to upload to
  * 若已在uni_modules.config.json中配置平台，则上传时以配置为准，自动归属至指定的服务空间
  * If the platform has been configured in uni_modules.config.json, the configuration will prevail when uploading and it will be automatically attributed to the specified service space

#### npmignore@npmignore

uni_modules插件发布到插件市场是通常需要忽略掉一些目录或文件，比如`unpackage`、`.hbuilderx`、`node_modules`等，这时可以通过npmignore文件来实现文件的忽略。
When uni_modules plug-in is released to plug-in market, it is usually necessary to ignore some directories or files, such as `unpackage`, `.hbuilderx`, `node_modules` and so on, then the file can be ignored by npmignore file.

文件名：**.npmignore**，注意开头有个点。典型的npmignore文件内容如下：
File name: **.npmignore**. Note that there is a dot at the beginning. Contents of a typical npmignore file are as follows:

```
.hbuilderx
unpackage
node_modules
package-lock.json
```

**注意**
**Notice**

- 项目根目录下的`.npmignore`对发布项目、插件模板生效。`uni_modules/插件Id/.npmignore`对发布插件生效
- The `.npmignore` in the project root directory is effective for publishing projects and plug-in templates. `uni_modules/Plug-in Id/.npmignore` Effective for published plug-ins

#### pages_init页面注册@pages-init
#### pages_init page registration @pages-init
> 新增于HBuilderX 3.5.0+
> Added in HBuilderX 3.5.0+

过去，插件作者提供页面类插件时，需要在文档中手动告知使用者在pages.json中注册哪些页面。如：
In the past, when plugin authors provided page class plugins, they needed to manually inform users in the documentation which pages to register in pages.json. like:

```json
{
  "pages":[{
    "path":"uni_modules/xx-yy/pages/demo/demo" // 按插件所在目录引入对应的页面
  }]
}
```

`pages_init.json`解决了这个烦恼。
`pages_init.json` solves this annoyance.

当uni_modules插件根目录下存在`pages_init.json`文件，在插件导入工程时，会弹出一个合并页面路由的pages.json修改界面。插件使用者点击确认按钮即可完成插件页面向项目pages.json的注册。
When the `pages_init.json` file exists in the root directory of the uni_modules plugin, when the plugin imports the project, a pages.json modification interface for merging page routes will pop up. Plug-in users click the Confirm button to complete the registration of the plug-in page to the project pages.json.

示例插件：[问题反馈页面管理员端模板](https://ext.dcloud.net.cn/plugin?id=4992)
Example plugin: [Problem Feedback Page Admin Template](https://ext.dcloud.net.cn/plugin?id=4992)

示例代码如下：
The sample code is as follows:
```json
{
    "pages": [{
            "path": "uni_modules/uni-feedback-admin/pages/uni-feedback-admin/add",
            "style": {
                "navigationBarTitleText": "新增"
            }
        },
        {
            "path": "uni_modules/uni-feedback-admin/pages/uni-feedback-admin/edit",
            "style": {
                "navigationBarTitleText": "编辑"
            }
        },
        {
            "path": "uni_modules/uni-feedback-admin/pages/uni-feedback-admin/list",
            "style": {
                "navigationBarTitleText": "列表"
            }
        }
    ]
}
```

完整的pages参数[详情查看](https://uniapp.dcloud.io/collocation/pages.html#pages)
Complete pages parameters [details view](https://uniapp.dcloud.io/collocation/pages.html#pages)

HBuilderX中合并路由界面效果图：
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/A8353295-395A-41A1-AF20-A012A2101079.png)

**注意**
**Notice**
- `pages_init.json`文件最终不会导入到工程中。
- The `pages_init.json` file will not eventually be imported into the project.
- `pages_init.json` 暂不支持带注释(包括：条件编译)。
- `pages_init.json` does not support annotations (including: conditional compilation).
- 如果HBuilderX版本低于3.5，或插件作者并没有提供`pages_init.json`，那么仍然需要手动编辑pages.json注册页面。
- If the HBuilderX version is lower than 3.5, or the plugin author does not provide `pages_init.json`, you still need to manually edit the pages.json registration page.

### 开发 uni_modules 插件
### Develop uni_modules plug-in
#### 新建uni_modules目录
#### Create new uni_modules directory
在uni-app项目根目录下，创建uni_modules目录，在HBuilderX中可以项目右键菜单中点击`新建uni_modules目录`
In the root directory of the uni-app project, create the uni_modules directory, and you can click `Create uni_modules directory` on the right-click menu of the project.

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/mkdir_uni_modules.png)

**Tips:**
- 如果是vue-cli项目，uni_modules目录，位于`src`下，即`src/uni_modules`
- In case of vue-cli project, the uni_modules directory is located under `src`, which is `src/uni_modules`

#### 新建uni_modules插件
#### Create uni_modules plug-in
1. 在HBuilderX中uni_modules目录右键点击`新建uni_modules插件`
1. Right-click the uni_modules directory in HBuilderX `Create uni_modules plug-in`

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/create_uni_modules.png)

2. 填写正确的插件ID，选择插件分类
2. Fill in the correct plug-in ID and select the plug-in classification

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/create_uni_modules_dialog.png)

插件ID命名规范：
Plugin ID naming specification:
- 格式为：'作者ID-插件英文名称'，示例：'xx-yy'，其中作者ID和插件英文名称只能包含英文、数字
- In the format of: 'Author ID - English name of plug-in'. For example, xx-yy, where the author ID and English name of plug-in can only contain English and numbers
- 作者ID由插件作者自定义，不能使用'DCloud'、'uni'等关键字，长度要求至少2位字符
- Author ID is defined by the plug-in author, and cannot use 'DCloud', 'uni' and other keywords. Its length is required at least 2 characters
- 插件名称需直观表达插件的作用，例如：tag、button等
- The plug-in name should visually express the function of the plug-in. For example: tag, button, etc.

**Tips**
- `uni_modules`插件可以在package.json的`uni_modules->dependencies`节点配置三方依赖（依赖的插件也必须是`uni_modules`插件），如果是依赖了三方的npm插件，可以使用标准的dependencies节点配置。
- The `uni_modules` plug-in can be configured with three-party dependencies in the `uni_modules->dependencies` node of package.json (the dependent plug-in must also be the `uni_modules` plug-in). If it is an npm plug-in that relies on three parties, you can use the standard dependencies node configuration.

#### 发布到插件市场
#### Release to plug-in market
当您的插件开发完毕，可以直接发布到[插件市场](https://ext.dcloud.net.cn/)供其他人免费或付费使用，插件市场提供了变现、评价等机制，优秀的插件作者，可以做到月入好几万。
When your plug-in is developed, you can publish it directly to the [plug-in market](https://ext.dcloud.net.cn/) for free or paid use by others. The plug-in market provides mechanisms such as realization and evaluation. Excellent plug-in authors can earn tens of thousands of dollars a month.

发布流程：
Release process:

1. 在HBuilderX中插件目录右键点击`发布到插件市场`
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/upload_uni_modules.png)
2. 填写插件信息
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/upload_uni_modules_dialog.png)
**Tips**
- 如果需要发布为项目模板，请在项目根目录创建package.json，然后右键菜单发布到插件市场。
- If you need to release it as a project template, please create package.json in the root directory of the project, and then right-click the menu to release to the plug-in market.
- 发布插件时，可以选择上传当前项目作为示例工程，完整的示例工程，可以方便用户快速上手。
- When releasing the plug-ins, you can choose to upload the current project as an example project. A complete example project helps users get started quickly.
#### 修改插件基本信息
#### Modify plug-in basic information
当您的插件发布到插件市场后，如果需要调整插件市场上的一些基本信息，比如插件中文名称，描述，关键词，readme.md等，可以直接在插件目录右键`修改插件基本信息`
When your plug-in is released to the plug-in market, if you need to adjust some basic information in the plug-in market, such as Chinese name, description, keywords, and readme.md, you can right-click the `Modify the plug-in basic information` directly in the plug-in directory.

1. 在HBuilderX中插件目录右键点击`修改插件基本信息`
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/update_uni_modules.png)
2. 修改插件基本信息
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/update_uni_modules_dialog.png)

#### 发布新版本
#### Release new version
当您的插件增加了新的功能或修复了Bug，需要发布新版本时，操作与第一次发布一样，可以直接在插件目录右键`发布到插件市场`
When your plug-in has added new functions or fixed bugs, and a new version needs to be released, the operation is the same as that of the first release, and you can right-click the `Release to plug-in market` directly in the plug-in directory.

**Tips**
- 在发布窗口中填写的更新日志，会自动与根目录的changelog.md保持同步
- The update log filled in the releasing window will automatically be synchronized with changelog.md in the root directory


### 已有插件迁移为 uni_modules 插件指南
### Guide to migrating existing plugins to uni_modules plug-ins

1. 将插件内容迁移至您的uni-app示例项目根目录`uni_modules`下以插件ID命名的目录下，举例，若您已有的插件ID为`xx-yy`，则目录结构为：`uni_modules/xx-yy`
1. Migrate the plug-in content to the directory named after the plug-in ID under the root directory of your uni-app sample project `uni_modules`. For example, if your existing plug-in ID is `xx-yy`, the directory structure is: `uni_modules/xx-yy`
2. 运行自己的示例项目，验证插件迁移目录后，所有功能是否正常
2. Run your own sample project to verify that if all functions are normal after the plug-in migrates to the directory
 - 目录迁移，通常会遇到资源引用路径问题，尽可能将所有路径引用修改为相对路径
 - When migrating directories, you will usually encounter problems with resource reference paths. So all path references should be modified as relative paths as much as possible.
 - 如果插件带有uniCloud的云函数或数据库，迁移时，注意，插件目录内的uniCloud不能带有厂商后缀，您可以在发布插件时，指定插件支持的云服务商
 - If the plug-in has a cloud function or database of uniCloud, please note that uniCloud in the plug-in directory cannot have suffixes of the vendor when migrating. You can specify the cloud service provider supported by the plug-in when releasing the plug-in.
 - 插件目录不支持pages.json、App.vue、main.js、manifest.json、uni.scss文件，如果需要插件使用者修改这些文件内容，请在插件文档(readme.md)中详细说明。
 - Files of pages.json, App.vue, main.js, manifest.json and uni.scss are not supported in the plug-in directory. If plug-in users need to modify the contents of these files, please elaborate in detail in the plug-in document (readme.md).
3. 当迁移后的所有插件功能均正常时，您就可以向插件市场发布新的支持uni_modules的插件版本（插件市场会同时保留您最后一个非uni_modules插件版本）
3. When all the functions of the migrated plug-ins are normal, you can release a new version of the plug-in that supports uni_modules to the plug-in market (the plug-in market will keep your last version of the non-uni_modules plug-in at the same time)
 - 在插件根目录创建package.json，您可以先简单的仅填写一个插件ID即可，其他信息可以通过发布窗口填写（会自动同步回package.json）
 - Create package.json in the root directory of plug-in, you can simply fill in one plug-in ID temporarily, and fill in other information through the release window (it will be automatically synchronized back to package.json)
```json
{
  "id":"您的插件ID"
}
```
 - 插件文档，迁移至插件根目录的readme.md中
 - Plug-in document, migrate to readme.md in the root directory of plug-in
 - 右键package.json，点击`发布到插件市场`，选择分类，填写插件信息（尽可能与插件市场已有信息保持一致）
 - Right-click package.json and click `Release to plug-in market`, select the classification, and fill in the plug-in information (consistent with the existing information in the plug-in market as much as possible)
 - 发布成功后，您可以在插件市场的插件详情页右侧，查看到您的插件已同时提供了`uni_modules`版本和非`uni_modules`版本（仅保留最后一个非`uni_modules`版本）
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/ext_uni_modules.png)
