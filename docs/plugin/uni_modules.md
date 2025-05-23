# uni_modules

## 什么是 uni_modules

主流的语言/平台，都有自己包管理方案，js有npm、yarn或pnpm、Android有仓储、iOS有cocoapods、鸿蒙有ohpm、dart有pub。。。

uni-app是大一统开发，包括客户端和uniCloud服务器。在客户端部分包括web、Android、iOS、各家小程序。

在uni-app中可以调用npm库，可以调用Android仓储里的aar，可以调用iOS的cocoapods里framework，以及鸿蒙的ohpm。

甚至uts语言本身也可以编译为js、kotlin、swift、ArkTS。

那么uni-app的开发者，需要一个大一统的包管理方案，那就是`uni_modules`。

`uni_modules`是uni-app的包管理方案（HBuilderX 3.1.0+支持），它是一个海纳百川型的设计，
- 不管是js/uts库、组件、页面、uniCloud云函数、公共模块等的封装，甚至是整个项目，都可以封装成一个`uni_modules`。（类似Android的aar）
- 不管是npm、Android仓储、iOS的cocoapods、鸿蒙的ohpm，都可以纳入`uni_modules`中。

由于uni-app有自己的项目目录结构规范（uni-app[详见](../tutorial/project.md)、uni-app x[详见](https://doc.dcloud.net.cn/uni-app-x/project.html)），
所以你可以简单理解，把一个项目的这些工程目录都挪到了一个uni_modules下，打包成了一个模块，这里面只要符合uni-app规范的文件都可以放。

详细的uni_modules目录结构[见下](#dir)

### uni_modules的优势

1. uni_modules支持在[插件市场](https://ext.dcloud.net.cn/)计费销售。由DCloud提供商业插件的代码加密和版权保护。
2. HBuilderX提供了对`uni_modules`的便捷管理，可以对一个`uni_modules`点右键（如果是项目型`uni_modules`，是对根目录的package.json点右键），直接上传`uni_modules`、更新`uni_modules`、安装依赖。版本更新时还会给出新旧代码的详细对比。

与之前插件市场的普通插件相比，`uni_modules`有何优势？
1. 支持在HBuilderX里直接发布、更新、删除。而无需在web界面操作。
2. 支持依赖（在package.json中配置）
3. 插件文件位置统一。以往下载一个插件，不知道给工程下多少个目录写入了多少个文件，这种困惑不再存在。删除插件时也可以一处统一删除


有`node_modules`了，为何还发明一个`uni_modules`的轮子？
1. `node_modules` 不满足全平台包管理需求，无法容纳Android仓储、iOS的cocoapods、鸿蒙的ohpm。
2. `node_modules` 不满足云端一体的需求。uniCloud的云函数、公共模块、schema和前端部分，无法在`node_modules`模式下有效融合。很多组件是云端一体组件，即有客户端又有服务器，需要按uni-app的目录规范放置。
3. `uni_modules` 有付费和商业的插件，DCloud插件市场提供了版权保护。而`node_modules`不支持付费和版权保护。
4. `node_modules` 层层嵌套`node_modules`，造成数量惊人的文件数目。`uni_modules`支持依赖但不支持module嵌套，鼓励开发者优化包体积。当然这算差异，并非`uni_modules`的优势
5. `uni_modules` 在js支持的平台，也容纳了`node_modules`，没有排斥。

除了发布插件，`uni_modules`同时也是一种大型工程的模块分割方案。比如一个旅游应用，可以把机票、酒店、火车票、自由行等模块分拆成不同的`uni_modules`，由不同的部门来开发。

## 目录结构@dir

### 项目插件的uni_modules

`uni_modules`插件如果是项目类型的插件，只需要在项目的根目录下放一个符合`uni_modules`规范的package.json。

右键点击这个package.json，即可对这个项目插件进行更新、或发布到插件市场。

比如[uni-admin](https://ext.dcloud.net.cn/plugin?id=3268)、[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)，都可以通过这种方式更新。

### 非项目插件的uni_modules

如果是非项目类型的插件，比如组件、js sdk、页面模板、云函数，则需要放置在项目的`uni_modules`目录下。

此时`uni_modules`目录下的目录结构和uni-app的项目结构是一致的，如下：

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

**Tips**
- 插件目录不支持pages.json、App.vue/uvue、main.js/uts、manifest.json、uni.scss文件，如果需要插件使用者修改这些文件内容，请在插件文档(readme.md)中详细说明。
- 插件目录支持`pages_init.json`，可以方便注册页面到项目的pages.json中，[见下](?id=pages-init)
- 在插件内部引用资源、跳转页面时，请尽量使用相对路径。
- 插件内components目录同样支持easycom规范，插件使用者可以直接在项目中使用插件内符合easycom规范的组件，当项目或插件内存在easycom组件冲突，编译时会给予提示，您可以通过修改组件目录及组件文件名称来解决冲突问题。


在HBuilderX中，`uni_modules`下如果包含了uniCloud目录的内容，会被以引用的方式，显示到主项目根目录下的uniCloud中。此时文件前的图标左下角会显示一个快捷方式箭头。

如下图，项目中有一个`uni_modules`名为`uni-config-center`，它下面包含了名为`uni-config-center`的公共模块。所以在项目根目录的公共模块目录common下，也会多出一个`uni-config-center`。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni_modules.jpg)

HBuilderX 中打开配有引用图标指示的文件，会打开原始地址。

#### uts插件
在uni_modules的utssdk目录，可以放置uts插件。

**uts插件是非常重要的一种跨端插件**。它支持API插件和组件插件，可通过原生能力，封装后给uni-app(x)扩展API和组件。

在utssdk目录下，然后可以新建app-android、app-ios、app-harmony、web、mp-weixin等目录，每个目录下可以存放不同客户端平台的专用代码。

在app-android、app-ios、app-harmony目录，可以放置Android原生的aar、so库，iOS原生的framework，鸿蒙的har，也支持配置Android仓储、iOS的cocoapods、鸿蒙的ohpm。

在web和mp目录下，也支持放置npm库。

虽然utssdk目录下有这么多平台专用目录，但utssdk的根目录下可以放置一个`interface.uts`的声明。这个文件统一了不同平台的接口，把不同平台的原生能力，转换为统一的API或组件，给前端开发者使用。

这是非常重要的设计，这也是uni-app区别于其他跨平台工具的重要特色。

以获取电量的API为例，uni.getBatteryInfo()，在根目录的interface.uts中定义了api的对外暴露接口、定义统一的错误码，然后在各个客户端平台的目录中，实现电量获取这个API。

uni.getBatteryInfo的插件和源码详见：[https://ext.dcloud.net.cn/plugin?id=9295](https://ext.dcloud.net.cn/plugin?id=9295)

uts插件开发的详细指南见：[https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)

***注意事项***

使用 import 导入uts插件时，仅支持导入到插件根目录，不支持导入插件内部的文件。
```ts
// 正确的写法
import { test } from "@/uni_modules/uts-osapi";
// 错误的写法
import { test } from "@/uni_modules/uts-osapi/index.uts";
```

## HBuilderX中使用 uni_modules 插件
### 下载uni_modules插件
1. 在[插件市场](https://ext.dcloud.net.cn/)查找uni_modules插件
2. 在插件详情页,右侧会标明该插件是否支持uni_modules，点击`使用 HBuilderX 导入插件`
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/import_uni_modules.png)
3. 选择要导入的uni-app项目
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/import_uni_modules_dialog.png)

**Tips**
- uni_modules支持组件easycom，使用者可以直接使用插件内符合easycom规范的组件
- 其他资源，如图片，js等，在项目中可以直接按目录结构引入即可使用，如：
```js
import {test} from '@/uni_modules/xx-yy/js_sdk/test.js'
```
- 如果是加密插件，加密文件不支持单独对外导出，即：不能使用 import 语句直接导入插件内的某个加密文件（uts加密插件导入插件根目录即可）
- uni-app项目下uts插件不支持导入非utssdk以外的uts文件
- uts插件utssdk内的文件以及这些文件引入的非utssdk内的uts文件均不支持单独对外导出
- 如果要使用uni_modules中的页面，[见下](#pages-init)


### 安装uni_modules插件依赖
1. 导入插件时，HBuilderX会自动安装当前插件的所有三方依赖。
2. 您还可以在插件目录右键手动执行`安装插件三方依赖`
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/deps_uni_modules.png)
### 更新uni_modules插件
1. 可以通过插件目录右键`从插件市场更新`，来检查更新当前所使用的插件
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/check_uni_modules.png)
2. 对比插件，确认更新内容
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/compare_uni_modules.png)
### 卸载uni_modules插件
uni_modules插件目录是独立存在的，如果您不再需要该插件，可以直接删除该插件目录。

**Tips**
- 导入uni_modules规范插件需要使用 3.1.0 以上版本的 HBuilderX


## uni_modules的插件配置
如果你是插件作者，需要了解uni_modules的配置。如果是使用者，可无需关心本章节。

### package.json@package-json
package.json在每个`uni_modules`插件中都必须存在，包含了插件的基本信息。以下是package.json的详细配置说明。
其中有些配置仅发布到插件市场时需要，如果你做的uni_modules并不对外发布到插件市场，相关字段可忽略。
```json
{
    // 注意，不能直接拷贝本段代码到编辑器中，package.json 目前不支持注释。本段代码加的注释只是用于解释代码。
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
        },
        "treeShaking": { //摇树配置
            "app": {
                "android": true,  //Android平台需要摇树
                "ios": true, //iOS平台需要摇树
                "harmony": false  //鸿蒙平台不需要摇树
            },
            "web": false //Web平台不需要摇树
        }
    }
}
```

**Tips**
- 上述配置基于npm [package.json](https://docs.npmjs.com/cli/v6/configuring-npm/package-json)规范扩展，故标准的package.json属性也同样支持，比如可以通过files来控制要上传的插件包内容
- 插件市场分类标识（对应：package.json->dcloudext->type）

| 一级分类			| 二级分类				| type						|
| ---				| ---					| ---						|
| 前端组件			| 通用组件				| component-vue				|
| 前端组件			| 小程序组件			| component-mp				|
| JS SDK			| 通用 SDK				| sdk-js					|
| uts插件			| API插件				| uts						|
| uts插件			| uni-app兼容模式组件	| component-uts				|
| uts插件			| 标准模式组件	| uts-vue-component			|
| uni-app前端模板	| 前端页面模板			| uniapp-template-page		|
| uni-app前端模板	| uni-app前端项目模板	| uniapp-template-project	|
| uniCloud			| 云函数模板			| unicloud-template-function|
| uniCloud			| 云端一体页面模板		| unicloud-template-page	|
| uniCloud			| 云端一体项目模板		| unicloud-template-project	|
| uniCloud			| Admin插件				| unicloud-admin			|
| uniCloud			| DB Schema及验证函数	| unicloud-database			|


#### 摇树配置@treeShaking  

配置模块是否需要摇树：
- true 表示需要摇树，即项目的代码中使用了发布时才包含此模块
- false 表示不需要摇树，即项目的代码中没有使用也会包含此模块

默认值为true。

规范：
```json
{
  "uni_modules": {
    "treeShaking": boolean | Record<string,boolean|Record<string,boolean>>
  }
}
```

配置所有平台都不需要摇树：
```json
{
  "uni_modules": {
    "treeShaking": false
  }
}
```

按平台分别配置是否需要摇树：
```json
{
  "uni_modules": {
    "treeShaking": {
        "app": {
            "android": false,
            "ios": true,
            "harmony": false
        },
        "web": false
    }
  }
}
```


### uni_modules.config.json
`uni_modules.config.json`在项目根目录，可以配置插件更新后的触发脚本（通常用于执行自定义的自动化任务），插件uniCloud支持的服务空间。以下是`uni_modules.config.json`的详细配置说明
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
- 当项目内仅关联了一个服务空间，此时`uni_modules`插件内的uniCloud相关资源会自动归属至该服务空间，无需在uni_modules.config.json中配置uniCloud所属服务空间
- 当项目内关联了两个服务空间（阿里云和腾讯云同时存在）
  * 若未在uni_modules.config.json中配置平台，则上传该插件uniCloud资源时，会提示上传至选择哪个服务空间
  * 若已在uni_modules.config.json中配置平台，则上传时以配置为准，自动归属至指定的服务空间

### npmignore@npmignore

uni_modules插件发布到插件市场是通常需要忽略掉一些目录或文件，比如`unpackage`、`.hbuilderx`、`node_modules`等，这时可以通过npmignore文件来实现文件的忽略。

文件名：**.npmignore**，注意开头有个点。典型的npmignore文件内容如下：

```
.hbuilderx
unpackage
node_modules
package-lock.json
```

**注意**

- 项目根目录下的`.npmignore`对发布项目、插件模板生效。`uni_modules/插件Id/.npmignore`对发布插件生效

### pages_init页面注册@pages-init
> 新增于HBuilderX 3.5.0+

过去，插件作者提供页面类插件时，需要在文档中手动告知使用者在pages.json中注册哪些页面。如：

```json
{
  "pages":[{
    "path":"uni_modules/xx-yy/pages/demo/demo" // 按插件所在目录引入对应的页面
  }]
}
```

`pages_init.json`解决了这个烦恼。

当uni_modules插件根目录下存在`pages_init.json`文件，在插件导入工程时，会弹出一个合并页面路由的pages.json修改界面。插件使用者点击确认按钮即可完成插件页面向项目pages.json的注册。

示例插件：[问题反馈页面管理员端模板](https://ext.dcloud.net.cn/plugin?id=4992)

示例代码如下：
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

HBuilderX中合并路由界面效果图：
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/A8353295-395A-41A1-AF20-A012A2101079.png)

**注意**
- `pages_init.json`文件最终不会导入到工程中。
- `pages_init.json` 暂不支持带注释(包括：条件编译)。
- 如果HBuilderX版本低于3.5，或插件作者并没有提供`pages_init.json`，那么仍然需要手动编辑pages.json注册页面。

## 开发 uni_modules 插件
### 新建uni_modules目录
在uni-app项目根目录下，创建uni_modules目录，在HBuilderX中可以项目右键菜单中点击`新建uni_modules目录`

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/mkdir_uni_modules.png)

**Tips:**
- 如果是vue-cli项目，uni_modules目录，位于`src`下，即`src/uni_modules`

### 新建uni_modules插件
1. 在HBuilderX中uni_modules目录右键点击`新建uni_modules插件`

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/create_uni_modules.png)

2. 填写正确的插件ID，选择插件分类

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/create_uni_modules_dialog.png)

插件ID命名规范：
- 格式为：'作者ID-插件英文名称'，示例：'xx-yy'，其中作者ID和插件英文名称只能包含英文、数字
- 作者ID由插件作者自定义，不能使用'DCloud'、'uni'等关键字，长度要求至少2位字符
- 插件名称需直观表达插件的作用，例如：tag、button等

**Tips**
- `uni_modules`插件可以在package.json的`uni_modules->dependencies`节点配置三方依赖（依赖的插件也必须是`uni_modules`插件），如果是依赖了三方的npm插件，可以使用标准的dependencies节点配置。

通过 uni_modules->dependencies 配置三方`uni_modules`插件依赖
```json
{
  "id": "uni-badge",
  "displayName": "uni-badge 数字角标",
  "version": "1.2.2",
  "description": "数字角标（徽章）组件，在元素周围展示消息提醒，一般用于列表、九宫格、按钮等地方。",
  "uni_modules": {
    "dependencies": ["uni-scss"]
  }
}
```

### 发布到插件市场
当您的插件开发完毕，可以直接发布到[插件市场](https://ext.dcloud.net.cn/)供其他人免费或付费使用，插件市场提供了变现、评价等机制，优秀的插件作者可以做到月入数万元。

发布流程：

1. 在HBuilderX中插件目录右键点击`发布到插件市场`
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/upload_uni_modules.png)
2. 填写插件信息
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/upload_uni_modules_dialog.png)
**Tips**
- 如果需要发布为项目模板，请在项目根目录创建package.json，然后右键菜单发布到插件市场。
- 发布插件时，可以选择上传当前项目作为示例工程，完整的示例工程，可以方便用户快速上手。
### 修改插件基本信息
当您的插件发布到插件市场后，如果需要调整插件市场上的一些基本信息，比如插件中文名称，描述，关键词，readme.md等，可以直接在插件目录右键`修改插件基本信息`

1. 在HBuilderX中插件目录右键点击`修改插件基本信息`
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/update_uni_modules.png)
2. 修改插件基本信息
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/update_uni_modules_dialog.png)

### 发布新版本
当您的插件增加了新的功能或修复了Bug，需要发布新版本时，操作与第一次发布一样，可以直接在插件目录右键`发布到插件市场`

**Tips**
- 在发布窗口中填写的更新日志，会自动与根目录的changelog.md保持同步


## 已有插件迁移为 uni_modules 插件指南

1. 将插件内容迁移至您的uni-app示例项目根目录`uni_modules`下以插件ID命名的目录下，举例，若您已有的插件ID为`xx-yy`，则目录结构为：`uni_modules/xx-yy`
2. 运行自己的示例项目，验证插件迁移目录后，所有功能是否正常
 - 目录迁移，通常会遇到资源引用路径问题，尽可能将所有路径引用修改为相对路径
 - 如果插件带有uniCloud的云函数或数据库，迁移时，注意，插件目录内的uniCloud不能带有厂商后缀，您可以在发布插件时，指定插件支持的云服务商
 - 插件目录不支持pages.json、App.vue、main.js、manifest.json、uni.scss文件，如果需要插件使用者修改这些文件内容，请在插件文档(readme.md)中详细说明。
3. 当迁移后的所有插件功能均正常时，您就可以向插件市场发布新的支持uni_modules的插件版本（插件市场会同时保留您最后一个非uni_modules插件版本）
 - 在插件根目录创建package.json，您可以先简单的仅填写一个插件ID即可，其他信息可以通过发布窗口填写（会自动同步回package.json）
```json
{
  "id":"您的插件ID"
}
```
 - 插件文档，迁移至插件根目录的readme.md中
 - 右键package.json，点击`发布到插件市场`，选择分类，填写插件信息（尽可能与插件市场已有信息保持一致）
 - 发布成功后，您可以在插件市场的插件详情页右侧，查看到您的插件已同时提供了`uni_modules`版本和非`uni_modules`版本（仅保留最后一个非`uni_modules`版本）
 
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/ext_uni_modules.png)
