# uni-cms

## 介绍

uni-cms是全端的、云端一体的开源CMS内容管理系统。

它提供了完善的内容管理，文章编辑、全端渲染。甚至还内置了付费内容看广告解锁和AI生成文章等功能。

即帮助开发者提高开发效率，更提高了内容生产效率和变现效率。

uni-cms包括管理端和用户端。

1. [uni-cms](https://ext.dcloud.net.cn/plugin?name=uni-cms)：CMS管理端。属于uni-admin插件，用于管理文章分类、文档内容编辑等，提供了广告解锁符和ai生成文章的功能 [插件地址](https://ext.dcloud.net.cn/plugin?name=uni-cms)
2. [uni-cms-article](https://ext.dcloud.net.cn/plugin?name=uni-cms-article)：CMS用户端。包含文章搜索、文章列表详情等页面，还有看广告解锁付费内容的功能 [插件地址](https://ext.dcloud.net.cn/plugin?name=uni-cms-article)

客户端插件之所以起名为 uni-cms-article 。是因为未来可能还会拓展 uni-cms-image、uni-cms-video 等插件，实现对富媒体内容的管理。

需求建议、bug反馈请点击加入[uni-cms交流群]反馈与交流。

## 产品亮点

- 开源免费，现成代码，直接上线运营
- 基于uniCloud，serverless，无需复杂的服务器部署，无需关心服务器运维
- 内容支持多端渲染，包括小程序、Web、App等
- 支持内容安全检测，防止内容违规
- 支持观看激励视频广告后解锁全文功能，帮助开发者快速变现。并且uni-ad特别提供了高于业内平均水平的cpm，是开发者创富良机。[详见](#watch-ad-unlock-content)
- 内置AI生成文章等功能，调用`uni-ai`生成、润色、续写文章内容。此功能需HBuilderX 3.7.13+。详见 [uni-ai](uni-ai.md)

总结一下就是：
- 代码有了
- 服务器有了
- 内容有了（uni-ai生成）
- 变现方式有了
- 合规满足了

万事俱备，就等你来运营了！

演示体验系统：

- 管理端：[https://hellouniadmin.dcloud.net.cn/](https://hellouniadmin.dcloud.net.cn/)
- 客户端（小程序）扫码查看

![](https://web-assets.dcloud.net.cn/unidoc/zh/202304121203155.jpg)

#### 管理端截图：

![](https://web-assets.dcloud.net.cn/unidoc/zh/202304120145412.png)

![](https://web-assets.dcloud.net.cn/unidoc/zh/202304231921964.png)

#### 用户端截图：

<div style="display: flex; flex-basis: 10px">
<div style="margin-right: 10px;">
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/202304120144625.png" width="375"/>
</div>
<div style="margin-right: 10px;">
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/202304120139988.png" width="375" />
</div>
<div style="margin-right: 10px;">
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/202304120139209.png" width="375" />
</div>
</div>

## 功能介绍

### 文章管理

支持文章保存草稿、发布、编辑、下架、删除、阅读量统计等功能。

创建文章时支持保存为草稿或者直接发布，当保存为草稿时，文章可以再次编辑，直到文章发布成功。
已发布的文章可以编辑，但是编辑后需要更新文章，才能生效。
当已发布的文章出现侵权或者一些原因需要隐藏时，可在文章列表中对该篇文章进行下架操作，下架后的文章将不会在前端展示，同时文章状态会变为“草稿”状态。

阅读量统计（PV）：每次打开文章详情页，都会向后端发送请求，在schema扩展中（uni-cms-articles.schema.ext.js）会对文章的阅读量进行加一统计。

### 观看广告解锁全文

> 使用观看广告解锁全文功能需要在uni-ad后台开通[激励视频广告](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)。
> 
> 目前H5端不支持广告，所以在H5端无法使用观看广告解锁全文功能

观看广告解锁全文功能，是uni-cms的核心功能之一。它可以帮助开发者快速变现，提高内容生产效率。

如何开通使用广告功能，请[参考](#watch-ad-unlock-content)。

用户端截图如下：

<div style="display: flex; flex-basis: 10px">
<div style="margin-right: 10px;">
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/202304120139209.png" width="375" />
</div>
</div>

## 如何使用

> 使用方式简单，只需导入对应的插件至项目中即可。

#### 1. 安装uni-cms管理端插件

在插件市场中找到[uni-cms](https://ext.dcloud.net.cn/plugin?name=uni-cms)，将插件导入至[uni-admin](admin.md)项目中。

如果还未使用过uni-admin，请先在HBuilderX新建项目时选择uni-admin项目。并需要了解[uni-admin](admin.md)的相关知识。

导入uni-cms后，运行启动uni-admin，在web管理后台，点击左侧菜单栏的菜单管理，添加“内容管理”菜单。

如下图所示：

![](https://web-assets.dcloud.net.cn/unidoc/zh/202303232139066.png)

导入后刷新页面，在uni-admin左侧菜单，可看到内容管理的菜单项，点击即可进入相关页面。

#### 2. 安装uni-cms-article用户端插件

管理端编辑的内容，在用户端呈现。注意管理端和用户端是两个项目，但是连接同一个服务空间。

在插件市场中找到[uni-cms-article](https://ext.dcloud.net.cn/plugin?name=uni-cms-article)，将插件导入至uni-app用户端项目中。

**注意**

- 如果您的项目单独使用`uni-cms-article`，需要在`unCloud/database`目录上点击“创建Schema”来创建`uni-cms-articles`与`uni-cms-categories`表后运行项目。
- uni-cms-article使用了[clientDB](clientdb.md)，其权限体系依赖[uni-id](uni-id-summary.md)。
- 如果您的项目需要账户体系，需将`uni-id-pages`插件导入至项目中，要了解`uni-id-pages` [详见](/uniCloud/uni-id-pages.md)。如果您使用了[uni-starter](uni-starter.md)项目，那么其已经内置了 `uni-id-pages`插件。

#### 3. 多作者登录

如果您的cms内容管理涉及多名作者登录。有2种处理方式。

1. 作者属于内部员工或可控兼职人员。

首先作者们需要在uni-admin中注册账户。

然后系统管理员在uni-admin中新建一个文章作者角色。在 系统管理 - 角色管理 中操作，如下图所示：

![](https://web-assets.dcloud.net.cn/unidoc/zh/202304171157570.png)

然后系统管理员在 系统管理 - 用户管理 中，为已注册用户赋予作者角色。

2. 作者属于外部人员。

如果作者属于外部人员，比如合作的自媒体。则不适合让外部人员登录你的admin系统。

此时合适的做法是新建一个项目做为作者端。也就是整个cms大系统，分为管理端、读者端、作者端。

目前uni-cms没有提供独立的作者端。有需求的开发者需自行改造uni-cms插件。

#### 4. AI 功能开通与使用

> AI功能基于 `uni-ai-chat` 实现，`uni-ai-chat` 文档请参考[uni-ai-chat](https://uniapp.dcloud.net.cn/uniCloud/uni-ai-chat.html)。
> 
> `uni-ai-chat` 支持 stream 流式响应，stream 流式响应基于 `uni-push2.0` 实现，`uni-push2.0` 文档请参考[uni-push](https://uniapp.dcloud.net.cn/unipush-v2.html)。

如果开通了 uni-push 后将默认使用 stream 流式响应返回 AI 结果，如果未开通 uni-push 将使用普通响应返回 AI 结果。

**开通 uni-push2.0 步骤**

1. 在[开发者中心](https://dev.dcloud.net.cn)对当前应用开通 uni-push2.0，并关联服务空间。

![](https://web-assets.dcloud.net.cn/unidoc/zh/202304181604585.png)

2. 在项目的 manifest.json 文件中根据您相应平台选择开通 uniPush2.0，以下截图为开通Web平台的uniPush2.0。

![](https://web-assets.dcloud.net.cn/unidoc/zh/202304181607019.png)

3. 内置的 un-im 属于精简版IM，使用前需要在 App.vue 文件内对 uni-im 进行初始化操作，具体代码如下：

::: warning 注意
uni-cms版本大于等于1.0.4时，无需在App.vue内初始化uni-im，uni-cms已经内置了初始化操作。
:::

```html
<script>
	//1. 导入统一身份信息管理模块
	import uniIdPagesInit from '@/uni_modules/uni-id-pages/init.js';
	//2. 导入uniIm的Utils工具类
	import uniImUtils from '@/uni_modules/uni-cms/components/ai/common/utils.js';
	export default {
		onLaunch: async function() {
			console.log('App Launch');
			//3. 初始化uni身份信息管理模块
			uniIdPagesInit();
			//4. 初始化uniIm
			uniImUtils.init();
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>
```

4. 运行项目，体验AI功能。

![](https://web-assets.dcloud.net.cn/unidoc/zh/202304271726981.png)

**注意**

- 由于 AI 消息需要通过 uni-push 来下发，本地运行的项目可能收不到 AI 的消息，建议上传部署后再进行测试或体验。

## 二次开发

> 如果目前的 uni-CMS 不能满足你的需求，你可以基于 uni-CMS 进行二次开发。

### 目录结构说明

#### uni-cms 管理端
```text
uni-cms                             // uni-cms 插件
├── common                          // 公共文件
│   ├── font                        // 字体文件
│   │   └── editor-iconfont.ttf     // 富文本编辑器的 toolbar 的 icon 字体文件
│   ├── load-script.js              // 加载第三方脚本
│   ├── style                       // 样式文件
│   │   ├── article-detail.scss     // 文章详情页样式
│   │   └── editor-icon.css         // 富文本编辑器 toolbar icon 样式
│   ├── translate-content.js        // 转换富文本编辑器 Quill Delta格式兼容微信小程序
│   └── validator                   // 表单验证
│       ├── uni-cms-articles.js     // 文章表单验证
│       └── uni-cms-categories.js   // 分类表单验证
├── components                      // 组件
│   ├── ai                          // uni-ai组件
│   │   ├── chat.nvue               // 聊天组件
│   │   ├── common
│   │   │   ├── appEvent.js
│   │   │   ├── initIndexDB.js
│   │   │   ├── md5.js
│   │   │   ├── sqlite.js
│   │   │   ├── timestampToString.js
│   │   │   └── utils.js
│   │   ├── components
│   │   │   ├── uni-im-control
│   │   │   │   └── uni-im-control.vue
│   │   │   ├── uni-im-icons
│   │   │   │   ├── uni-im-icons.ttf
│   │   │   │   └── uni-im-icons.vue
│   │   │   ├── uni-im-msg
│   │   │   │   ├── html-parser.js
│   │   │   │   └── uni-im-msg.vue
│   │   │   └── uni-im-msg-list
│   │   │       ├── components
│   │   │       │   ├── uni-im-list
│   │   │       │   │   └── uni-im-list.vue
│   │   │       │   └── uni-im-list-item
│   │   │       │       └── uni-im-list-item.vue
│   │   │       └── uni-im-msg-list.vue
│   │   ├── lib
│   │   │   ├── MsgManager.js
│   │   │   ├── createObservable.js
│   │   │   └── main.js
│   │   └── static
│   │       ├── avatarUrl.png
│   │       ├── iconfont.css
│   │       ├── iconfont.ttf
│   │       ├── qrCode.png
│   │       └── sound-ing.gif
│   └── editor                      // 富文本编辑器 (兼容H5, 微信小程序, App, 基于Quill, 详见https://quilljs.com/)
│       ├── app.scss                
│       ├── editor.vue              // 富文本编辑器组件
│       ├── h5.scss
│       ├── tools                   // 富文本编辑器工具栏
│       │   ├── align.vue           // 对齐
│       │   ├── background.vue      // 背景颜色
│       │   ├── base.vue            // 基础工具
│       │   ├── bold.vue            // 加粗
│       │   ├── color-picker.vue    // 颜色选择器
│       │   ├── color.vue           // 字体颜色
│       │   ├── format-clear.vue    // 清除格式
│       │   ├── header.vue          // 标题
│       │   ├── hr.vue              // 分割线
│       │   ├── image.vue           // 图片
│       │   ├── italic.vue          // 斜体
│       │   ├── letter-space.vue    // 字间距
│       │   ├── line-height.vue     // 行高
│       │   ├── line-indent.vue     // 缩进
│       │   ├── link.vue            // 超链接
│       │   ├── list.vue            // 列表
│       │   ├── redo.vue            // 重做
│       │   ├── space-both.vue      // 两端对齐
│       │   ├── strike.vue          // 删除线
│       │   ├── underline.vue       // 下划线
│       │   ├── undo.vue            // 撤销
│       │   └── unlock-content.vue  // 解锁全文
│       └── web                     // 富文本编辑器web端 (微信小程序与App使用内置的editor组件)
│           ├── editor.vue          // 富文本编辑器组件
│           ├── formats             // 富文本编辑器格式
│           │   ├── align.js        // 对齐
│           │   ├── box.js          // 背景颜色
│           │   ├── divider.css     // 分割线样式
│           │   ├── divider.js      // 分割线
│           │   ├── font.js         // 字体
│           │   ├── image.js        // 图片
│           │   ├── index.js        // 富文本编辑器格式入口
│           │   ├── link.js         // 超链接
│           │   ├── list.js         // 列表
│           │   ├── text.js         // 文本
│           │   ├── unlock-content.css  // 解锁全文样式
│           │   └── unlock-content.js   // 解锁全文
│           └── modules
│               ├── clipboard.js    // 剪切板
│               ├── image-extend.js // 图片扩展
│               ├── image-uploading.css // 图片上传样式
│               └── index.js    // 富文本编辑器模块入口
├── menu.json                    // 菜单初始化配置
├── package.json
├── changelog.md
├── readme.md
├── pages                   // 页面   
│   ├── article             // 文章
│   │   ├── add             // 添加文章
│   │   │   └── add.vue
│   │   ├── edit            // 编辑文章
│   │   │   └── edit.vue
│   │   └── list            // 文章列表
│   │       └── list.vue
│   └── categories          // 分类
│       ├── add             // 添加分类
│       │   └── add.vue
│       ├── edit            // 编辑分类
│       │   └── edit.vue
│       └── list            // 分类列表
│           └── list.vue
└── uniCloud                // 云函数
    ├── cloudfunctions       
    │   ├── uni-cms-co          // uni-cms 云对象
    │   │   ├── index.obj.js    // 云对象入口
    │   │   ├── package.json
    │   │   └── utils.js        // uni-cms云对象工具
    │   └── uni-im-co           // uni-im 云对象
    │       ├── index.obj.js    // 云对象入口
    │       └── package.json    
    └── database                // 数据库
        ├── db_init.json        // 数据库初始化配置，初始化uni-ai用户
        ├── uni-cms-articles.schema.ext.js          // uni-cms-articles 云函数扩展
        ├── uni-cms-articles.schema.json            // uni-cms-articles 数据库表
        ├── uni-cms-categories.schema.json          // uni-cms-categories 数据库表
        ├── uni-im-conversation.schema.ext.js       // uni-im-conversation 云函数扩展
        ├── uni-im-conversation.schema.json         // uni-im-conversation 数据库表
        ├── uni-im-friend.schema.json               // uni-im-friend 数据库表
        ├── uni-im-group-member.schema.json         // uni-im-group-member 数据库表
        ├── uni-im-group.schema.json                // uni-im-group 数据库表
        ├── uni-im-msg.schema.ext.js                // uni-im-msg 云函数扩展
        ├── uni-im-msg.schema.json                  // uni-im-msg 数据库表
        └── uni-im-notification.schema.json         // uni-im-notification 数据库表
```

**数据库表说明**

- `uni-cms-articles` cms文章表，schema 结构[详见](https://gitee.com/dcloud/opendb/tree/master/collection/uni-cms-articles)
- `uni-cms-categories` cms分类表，schema 结构[详见](https://gitee.com/dcloud/opendb/tree/master/collection/uni-cms-categories)
- `uni-im-conversation` im会话表，schema 结构[详见](https://gitee.com/dcloud/opendb/tree/master/collection/uni-im-conversation)
- `uni-im-friend` im好友表，schema 结构[详见](https://gitee.com/dcloud/opendb/tree/master/collection/uni-im-friend)
- `uni-im-group-member` im群成员表
- `uni-im-group` im群表
- `uni-im-msg` im消息表，schema 结构[详见](https://gitee.com/dcloud/opendb/tree/master/collection/uni-im-msg)

#### uni-cms-article 用户端插件
```text
uni-cms-article                             // uni-cms-article 插件
├── changelog.md
├── common                                  // 公共文件
│   └── publish-time.js                     // 格式化发布时间
├── components                              // 组件
│   └── render-article-detail               // 渲染文章详情
│       ├── index.vue                       // 渲染文章详情组件
│       └── unlock-content.vue              // 解锁全文组件
├── package.json
├── pages                                   // 页面
│   ├── detail                              // 文章详情
│   │   └── detail.vue
│   ├── list                                // 文章列表
│   │   └── list.nvue   
│   ├── search                              // 搜索
│   │   └── search.nvue
│   └── webview                             // 加载文章详情中的外链
│       └── webview.vue
├── pages_init.json                         // 页面初始化配置
├── readme.md
└── uniCloud                                // 云函数
    ├── cloudfunctions                      // 云函数
    │   └── uni-cms-unlock-callback         // 内容解锁回调
    │       └── index.js
    └── database                            // 数据库
        ├── db_init.json                    // 数据库初始化配置
        └── uni-cms-unlock-record.schema.json   // 内容解锁记录表
```

**数据表说明**

- `uni-cms-unlock-record` 内容解锁记录表，schema 结构[详见](https://gitee.com/dcloud/opendb/tree/master/collection/uni-cms-unlock-record)

### schema 扩展说明

#### uni-cms-articles.ext.js

> 负责处理与创建、更新和读取文章相关的各种逻辑

主要功能如下：

在创建（beforeCreate）和更新（beforeUpdate）文章之前，检测文章的标题、摘要、内容和封面图片是否包含敏感信息。若包含敏感信息，则抛出错误，提示用户修改。

在读取文章（afterRead）时，根据用户的阅读情况更新文章的阅读次数（view_count）。同时处理文章内容的解锁逻辑。如果文章包含解锁内容，根据用户的登录状态和解锁记录返回相应的内容。

代码中还包含一些辅助函数：

`checkContentSec`：检测文本内容是否包含敏感信息。

`checkImageSec`：检测图片是否违规。

`checkContentSecurityEnable`：检查内容安全开关是否启用。

`safeRequire`：安全地引入模块，如果模块不存在，则抛出错误。

### uni-cms 配置@uni-cms-config

uni-cms的云端的配置文件统一使用[uni-config-center](uni-config-center.md)。

> 云函数`uni-cms`、`uni-cms-unlock-callback` 都使用同一个配置文件

新建配置文件，路径为 `uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-cms/config.json`，用于配置uni-cms相关信息，完整配置如下:

```json
{
  "clientAppIds": ["__UNI__XXXxx"], // 配置用户端appId，目前用于看广告解锁全文，可配置多个appId。
  "contentSecurity": { // 内容安全配置
    "allowCheckType": ["content", "image"] // 配置可检测的内容；可选值仅为 content 或 image，content 表示检测文字，image 表示检测图片
  },
  "adConfig": { // 广告解锁相关配置
    "securityKey": "Xxxxxxxxxxxxxxxxxxxxxxxxxx", // 广告位 Security key
    "watchAdUniqueType": "device" // 观看广告的唯一标识类型，可选值为 user 或者 device，user 表示用户唯一，device 表示设备唯一
  }
}
```

**说明**
- contentSecurity内容安全，即配置uni-cms是否开启、以及对什么内容类型开启安全检测。详[见下](#content-security-check)
- adConfig为广告配置。如需使用看广告解锁全文，需配置该内容。详[见下](#watch-ad-unlock-content)
	* `watchAdUniqueType` 为 `device` 时，表示按设备解锁。同一设备只需观看一次广告，如果该设备观看过广告已解锁该文章，再次浏览该文章将无需再观看广告。如果应用的本机缓存被清理，则解锁失效。
	* `watchAdUniqueType` 为 `user` 时，表示按用户解锁。此用户为uni-id用户，如果该用户已解锁该文章，再次浏览该文章将无需再观看广告。按用户解锁，需应用中加载uni-id-pages插件。

### 相关云函数

#### uni-cms-co

> 管理端云对象，提供内容安全检测服务

**接口**

| 接口名称   | 接口地址          | 接口描述                  |
|--------|---------------|-----------------------|
| 图片安全检测 | imageCheckSec | 对指定的图片进行安全检测，违规的图片将删除 |

#### uni-cms-unlock-callback

> 客户端云函数，用于看广告解锁内容后的回调

### 富文本编辑器插件扩展

> 目前富文本编辑器支持Web、微信小程序、App。不支持其他平台。底层基于Quill.js，详见https://quilljs.com/
> 
> 如果编辑器在微信小程序或App使用，将不支持插件扩展，仅支持基本的富文本编辑功能
> 
> 如果需要开发插件，将不能发布至微信小程序或者App，否则会出现编辑器无法使用的情况

:::warning 多端不一致表现说明

Web端：支持插件开发，支持所有Quill.js的功能

小程序端/App端：不支持插件开发，仅支持基本的富文本编辑功能，超链接插入将被转换为MarkDown格式，如插入广告解锁ToolBar，将会转会为图片，但不影响前端正常渲染，仅需编辑时注意

:::

**例子：添加图片格式**

由于自定义了 toolbar 的配置，所以需要在 `uni_modules/uni-cms/components/editor/web/formats` 目录下添加对应的格式文件，例如 `image.js` 文件，用于处理图片标签格式，代码如下:

```js
const ATTRIBUTES = [
  'alt',
  'height',
  'width',
  'data-custom',
  'class',
  'data-local'
]

export default function (Quill) {
  const Image = Quill.import('formats/image')

  class ExtendImageFormat extends Image {
    static formats (domNode) {
      return ATTRIBUTES.reduce(function (formats, attribute) {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute)
        }
        return formats
      }, {})
    }

    static sanitize (url) {
      return url
    }

    format (name, value) {
      if (ATTRIBUTES.indexOf(name) > -1) {
        if (value) {
          this.domNode.setAttribute(name, value)
        } else {
          this.domNode.removeAttribute(name)
        }
      } else {
        super.format(name, value)
      }
    }
  }

  return {
    'formats/image': ExtendImageFormat
  }
}
```

每一个格式或者模块都必须导出一个方法, 参数接收 `Quill` 对象，该方法必须返回一个对象，对象的 key 为格式或者模块的名称，value 为对应的格式或者模块，例如:
```js
export default function (Quill) {
  return {
    'formats/image': ImageFormat
  }
}
```

在 `uni_modules/uni-cms/components/editor/web/index.js` 文件中引入`image.js`文件，例如:
```js
import image from './image'

export function register (Quill) {
	const formats = {
		image,
	}
	const options = {}
	Object.values(formats).forEach(value => Object.assign(options, value(Quill)))
	Quill.register(options, true)
}
```

在 `uni_modules/uni-cms/components/editor/editor.vue` 中找到 toolbar H5的条件编译区块，添加插入图片按钮，例如:
```vue
<template>
  <view @click="insertImage">
    <uni-icons type="image" size="50rpx"></uni-icons>
  </view>
</template>

<script>
export default {
    methods: {
        insertImage () {
          this.editorCtx.insertImage({
            src: "https://xxxxx",
            alt: "图片",
          })
        }
    }
}
</script>
```

### 观看广告解锁全文@watch-ad-unlock-content

1. 在uni-ad后台([https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/))开通[激励视频广告](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)，开通步骤[详见](https://uniapp.dcloud.net.cn/uni-ad.html#start)
2. 新建激励视频广告位，在对应的广告位上配置激励视频云回调，选择同账户下uni-cms部署的uniCloud服务空间，配置回调云函数为`uni-cms-unlock-callback`

![](https://web-assets.dcloud.net.cn/unidoc/zh/202304121447261.png)

3. 在 uni-AD Web 控制台，找到广告位，点击配置激励视频，展开当前广告位项，可看到生成的 `Security key` 与`adp id`，复制 `Security key` 与 `adp id`

![](https://web-assets.dcloud.net.cn/unidoc/zh/202304121448549.png) 

4. 在 `uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center`目录中创建 `uni-cms/config.json` 配置文件，配置文件如下:
```json
{
  "clientAppIds": ["__UNI__XXXxx"],
    "adConfig": {
        "securityKey": "xxxxxxxxxxxxxxxxxxxxx",
        "watchAdUniqueType": "device"
    }
}
``` 

**注意**

- `clientAppIds` 为客户端appId，用于校验客户端请求，如不配置可能导致无法使用广告解锁功能，需要与客户端配置的appId保持一致
- `securityKey` 为广告位的 `Security key`，用于校验广告回调的合法性
- `watchAdUniqueType` 为观看广告的唯一标识类型，可选值为 `user` 或者 `device`，`user` 表示用户唯一，`device` 表示设备唯一
* `watchAdUniqueType` 为 `device` 时，表示按设备解锁。同一设备只需观看一次广告，如果该设备观看过广告已解锁该文章，再次浏览该文章将无需再观看广告。如果应用的本机缓存被清理，则解锁失效。
* `watchAdUniqueType` 为 `user` 时，表示按用户解锁。此用户为uni-id用户，如果该用户已解锁该文章，再次浏览该文章将无需再观看广告。按用户解锁，需应用中加载uni-id-pages插件。

5. 在 `uni_modules/uni-cms-article/pages/detail/detail.vue` 文件中找到 `data.adpId` 与 `data.watchAdUniqueType` 字段，根据自己的广告位ID进行修改，例如:
```js
{
  adpId: "000000000",
  watchAdUniqueType: "device" //注意前端也需要配置解锁方式，是按设备解锁还是按uni-id的用户解锁。
}
```

![](https://web-assets.dcloud.net.cn/unidoc/zh/202304121449714.png)

6. 对uni-cms管理端项目下的uniCloud目录点右键，将云函数、配置、数据库、数据库扩展js都上传至云端
7. 运行uni-admin项目，在内容管理中新建一篇文章，在指定内容后，点击ToolBar的”看广告解锁“功能，添加解锁符，保存文章。
8. 运行uni-cms-article用户端，浏览文章，看广告解锁。

**解锁逻辑说明**

1. 当用户端浏览文章时，查询文章详情会触发在`uni-cms-articles.schema.ext.js`（schema扩展库）中定义的数据库读取触发器，在这段js中验证用户/设备是否已解锁，已解锁的用户将会直接展示全文，未解锁的用户将会展示解锁全文按钮。

2. 用户点击解锁全文按钮后，将会弹出激励视频广告，
- 2.1 广告播放完毕后（界面会显示播放完毕倒计时）
	广告服务器会通知开发者的uniCloud服务空间的云函数`uni-cms-unlock-callback`，云函数`uni-cms-unlock-callback`进行验证，验证通过后，为用户解锁内容，保存在`uni-cms-unlock-record`数据表中，使用字段`unique_id`来标记用户已解锁。
- 2.2 无广告没有播放完毕，被用户提前关闭，则不会回调到云函数。

**其他**

- 内置的广告为激励视频广告，用户在观看完广告后将会解锁全文，如果需要其他类型的广告，可以自行修改`uni_modules/uni-cms/components/render-article-detail/unlock-content.vue`文件中的代码。
- 如果暂时不需要广告解锁功能，可以在`uni_modules/uni-cms-article/components/render-article-detail/index.vue`文件中注释或者删除`unlockContent`组件。

### 内容安全检测@content-security-check

文章内容对外发布时，需避免发布内容包含违法内容。否则轻则导致应用下架，重则承担刑事责任。

所以需在发布前调用三方的内容验证接口，如果内容涉及敏感词或者不合规的图片，则接口会提示异常。

内容安全功能由[uni-sec-check](https://ext.dcloud.net.cn/plugin?id=5460)提供，默认未开启。

注意：`uni-sec-check`模块使用了微信的内容安全接口，所以依赖`uni-open-bridge`管理微信凭据，使用前需要在`uni-config-center`内添加`uni-id`配置，
具体配置参考[uni-sec-check文档](https://ext.dcloud.net.cn/plugin?id=5460)

如开启了uni-cms的内容安全校验，会在发布前使用 uni-sec-check 检测用户输入的文字与上传的图片，如果检测到违规内容，内容将无法发布。

您可以根据自己需求开启或关闭内容安全检测，在 `uni-cms` 云端配置文件中配置 `contentSecurity` 字段，例如:

```javascript
// 开启
{
  "contentSecurity": {
    "allowCheckType": ["content", "image"] // 可选值仅为 content 或 image；content 表示检测文字，image 表示检测图片
  }
}
```

```javascript
// 关闭
{
  "contentSecurity": false
}
```

**说明**

- `allowCheckType`存在`content`值时；内容安全将会对文章标题、文章内容、文章摘要进行检测。
- `allowCheckType`存在`image`值时；内容安全将会对上传的封面图片、文章内容中的图片进行检测。
- 详细的`uni-cms`配置文件参考[uni-cms配置](#uni-cms-config)

## 后续计划

<input type="checkbox" disabled /> 增加更多列表页模板，包括顶部分类、列表大图、小图、多图样式

<input type="checkbox" disabled /> 内容分享

<input type="checkbox" disabled /> 支持 Markdown 编辑

<input type="checkbox" disabled /> 支持内容标签

<input type="checkbox" disabled /> 支持点赞

<input type="checkbox" disabled /> 支持评论

<input type="checkbox" disabled /> 支持收藏

<input type="checkbox" disabled /> 发布视频
