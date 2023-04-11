# uni-cms

## 介绍

uni-cms是全端的、云端一体的开源CMS内容管理系统。

它提供了完善的内容管理，文章编辑、全端渲染。甚至还内置了付费内容看广告解锁和AI生成文章等功能。

即帮助开发者提高开发效率，更提高了内容生产效率和变现效率。

uni-cms包括管理端和用户端。

1. uni-cms：CMS管理端。属于uni-admin插件，用于管理文章分类、文档内容编辑等 [插件地址](https://ext.dcloud.net.cn/plugin?name=uni-cms)
2. uni-cms-article：CMS用户端。包含文章搜索、文章列表详情等页面，还有看广告解锁付费内容的功能 [插件地址](https://ext.dcloud.net.cn/plugin?name=uni-cms-article)

客户端插件之所以起名为 uni-cms-article 。是因为未来可能还会拓展 uni-cms-image、uni-cms-video 等插件，实现对富媒体内容的管理。

管理端截图：

![](https://web-assets.dcloud.net.cn/unidoc/zh/202303231717572.png)

![uni-cms](https://web-assets.dcloud.net.cn/unidoc/zh/202303231541517.png)

用户端截图：

<div style="display: flex; flex-basis: 10px">
<div style="margin-right: 10px;">
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/202303231658499.jpg" width="375"/>
</div>
<div style="margin-right: 10px;">
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/202303231657737.jpg" width="375" />
</div>
<div style="margin-right: 10px;">
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/202303231701150.jpg" width="375" />
</div>
</div>

## 功能亮点

- 开源免费，现成代码，直接上线运营
- 基于uniCloud，无需搭建服务器，无需关心服务器运维
- 内容支持多端渲染，包括小程序、H5、App等
- 内容支持安全检测，防止内容违规
- 支持观看激励视频广告后解锁全文功能，为开发者提供快速变现的高收益方式 [详见](#watch-ad-unlock-content)
- 内置AI生成文章等功能，调用uni-ai生成、润色、续写文章内容。详见 [uni-ai](uni-ai.md)

## 如何使用

> 使用方式简单，只需导入对应的插件至项目中即可。

#### 1. 安装uni-cms管理端插件

在插件市场中搜索[uni-cms](https://ext.dcloud.net.cn/plugin?name=uni-cms)，将插件导入至[uni-admin](admin.md)项目中。

如果还未使用过uni-admin，请先在HBuilderX新建项目时选择uni-admin项目。并需要了解[uni-admin](admin.md)的相关知识。

导入uni-cms后，运行启动uni-admin，在web管理后台，点击左侧菜单栏的菜单管理，添加内容管理菜单。

如下图所示：

![](https://web-assets.dcloud.net.cn/unidoc/zh/202303232139066.png)

导入后刷新页面，在uni-admin左侧菜单，可看到内容管理的菜单项，点击即可进入相关页面。

#### 2. 安装uni-cms-article用户端插件

管理端编辑的内容，在用户端呈现。注意管理端和用户端是两个项目，但是连接同一个服务空间。

在插件市场中搜索[uni-cms-article](https://ext.dcloud.net.cn/plugin?name=uni-cms-article)，将插件导入至uni-app项目中。

**注意**
-  uni-cms-article使用了[clientDB](clientdb.md)，其权限体系依赖[uni-id](uni-id-summary.md)。
- 如果您的项目不是[uni-starter](uni-starter.md)项目，或者不存在 `uni-id-pages`插件，请将`uni-id-pages`一同导入至项目中，要了解`uni-id-pages` [详见](/uniCloud/uni-id-pages.md)

#### 3. 多作者登录

如果您的cms内容管理涉及多名作者一起登录。有2种处理方式。

1. 作者属于内部员工或可控兼职人员。

首先作者们需要在uni-admin中注册账户。

然后系统管理员在uni-admin中新建一个文章作者角色。在 系统管理 - 角色管理 中操作，如下图所示：

![](https://web-assets.dcloud.net.cn/unidoc/zh/202303291731004.png)

然后系统管理员在 系统管理 - 用户管理 中，为已注册用户赋予作者角色。

2. 作者属于外部人员。

如果作者属于外部人员，比如合作的自媒体。则不适合让外部人员登录你的admin系统。

此时合适的做法是新建一个项目做为作者端。也就是整个cms大系统，分为管理端、读者端、作者端。

目前uni-cms没有提供独立的作者端。有需求的开发者需自行改造uni-cms插件。

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
    └── database                            // 数据库
        ├── uni-cms-articles.schema.ext.js  // 文章表schema扩展
        ├── uni-cms-articles.schema.json    // 文章表
        └── uni-cms-categories.schema.json  // 分类表
```

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
        ├── uni-cms-articles.schema.json    // 文章表
        ├── uni-cms-categories.schema.json  // 分类表
        └── uni-cms-unlock-record.schema.json   // 内容解锁记录表
```

### uni-cms 配置@uni-cms-config

> 云函数`uni-cms` `uni-cms-unlock-callback` 都使用同一个配置文件

配置文件路径为 `uni_modules/uni-config-center/common/uni-cms/config.js`, 用于配置uni-cms相关信息, 完整配置如下:
```json
{
  "clientAppIds": ["__UNI__XXXxx"], // 配置客户端appId
  "contentSecurity": { // 内容安全配置
    "allowCheckType": ["content", "image"] // 配置可检测的内容；可选值仅为 content 或 image，content 表示检测文字，image 表示检测图片
  },
  "adConfig": { // 广告解锁相关配置
    "securityKey": "Xxxxxxxxxxxxxxxxxxxxxxxxxx", // 广告位 Security key
    "watchAdUniqueType": "device" // 观看广告的唯一标识类型，可选值为 user 或者 device，user 表示用户唯一，device 表示设备唯一
  }
}
```


### uni-cms 云对象

#### 接口

| 接口名称   | 接口地址          | 接口描述                  |
|--------|---------------|-----------------------|
| 图片安全检测 | imageCheckSec | 对指定的图片进行安全检测，违规的图片将删除 |

### 富文本编辑器扩展

> 目前富文本编辑器支持H5, 微信小程序, App, 基于Quill.js, 详见https://quilljs.com/
> 
> 如果编辑器在微信小程序或App使用, 将不支持二次开发, 仅支持基本的富文本编辑功能
> 
> 如果需要二次开发, 将不能发布至微信小程序或者App, 否则会出现编辑器无法使用的情况

由于自定义了 toolbar 的配置, 所以需要在 `uni_modules/uni-cms/components/editor/web/formats` 目录下添加对应的格式文件, 例如 `image.js` 文件, 用于处理图片标签格式, 代码如下:
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

每一个格式或者模块都必须导出一个方法, 参数接收 `Quill` 对象, 该方法必须返回一个对象, 对象的 key 为格式或者模块的名称, value 为对应的格式或者模块, 例如:
```js
export default function (Quill) {
  return {
    'formats/image': ImageFormat
  }
}
```

在 `uni_modules/uni-cms/components/editor/web/index.js` 文件中引入`image.js`文件, 例如:
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

在 `uni_modules/uni-cms/components/editor/editor.vue` 中找到 toolbar H5的条件编译区块, 添加插入图片按钮, 例如:
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

> 使用观看广告解锁全文功能需要在uni-ad后台开通[激励视频广告](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)。
 
> 目前H5端不支持广告, 所以在H5端无法使用观看广告解锁全文功能

激励视频奖励解锁，也是基于uni-id的。

用户端截图如下：

<div style="display: flex; flex-basis: 10px">
<div style="margin-right: 10px;">
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/202303231701150.jpg" width="375" />
</div>
</div>

1. 在uni-ad后台开通[激励视频广告](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html), 开通步骤[详见](https://uniapp.dcloud.net.cn/uni-ad.html#start)
2. 在对应的广告位上配置激励视频回调，选择云函数回调，回调云函数为`uni-cms-unlock-callback`
3. 在 uni-AD Web 控制台，找到广告位，点击配置激励视频，展开当前广告位项，可看到生成的 `Security key`, 复制 `Security key`
4. 在 `uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center`目录中创建 `uni-cms/config.json` 配置文件, 配置文件如下:
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
- `clientAppIds` 为客户端appId, 用于校验客户端请求, 如不配置可能导致无法使用广告解锁功能, 需要与客户端配置的appId保持一致
- `securityKey` 为广告位的 `Security key`, 用于校验广告回调的合法性
- `watchAdUniqueType` 为观看广告的唯一标识类型, 可选值为 `user` 或者 `device`, `user` 表示用户唯一, `device` 表示设备唯一

5. 在 `uni_modules/uni-cms-article/components/pages/detail/detail.vue` 文件中找到 `data.adpId` 与 `data.watchAdUniqueType` 字段, 根据自己的广告位ID进行修改, 例如:
```js
{
  adpId: "000000000",
  watchAdUniqueType: "device"
}
```
6. 将云函数上传至云端, 在uni-admin中创建一篇文章, 并在ToolBar中添加”看广告解锁“功能, 即可运行测试

**解锁逻辑说明**

当用户再次浏览文章时, 将会查询文章时在uni-cms-articles schema 扩展库中验证用户是否已解锁, 已解锁的用户将会直接展示全文, 未解锁的用户将会展示解锁全文按钮。

用户点击解锁全文按钮后, 将会触发广告, 广告观看完毕后, 广告服务器会调用云函数`uni-cms-unlock-callback`,
云函数`uni-cms-unlock-callback`进行验证, 验证通过后, 为用户解锁内容。

**其他**

内置的广告为激励视频广告, 用户在观看完广告后将会解锁全文, 如果需要其他类型的广告, 
可以自行修改`uni_modules/uni-cms/components/render-article-detail/unlock-content.vue`文件中的代码

### 内容安全检测@content-security-check

内容安全功能由[uni-sec-check](https://ext.dcloud.net.cn/plugin?id=5460)提供，默认不开启。
`uni-sec-check`文档[详见](https://ext.dcloud.net.cn/plugin?id=5460)

注意：`uni-sec-check`模块依赖`uni-open-bridge`, 使用前需要在`uni-config-center`内添加`uni-id`配置，
具体配置参考[uni-sec-check文档](https://ext.dcloud.net.cn/plugin?id=5460)

uni-cms 会使用 uni-sec-check 检测用户输入的文字与上传的图片，如果检测到违规内容，内容将无法正常发布。

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

<input type="checkbox" checked disabled /> [内容安全](#content-security-check)

<input type="checkbox" disabled /> 支持大图、小图、多图排版

<input type="checkbox" disabled /> 内容分享

<input type="checkbox" disabled /> 支持 Markdown 编辑

<input type="checkbox" disabled /> 支持内容标签

<input type="checkbox" disabled /> 支持点赞

<input type="checkbox" disabled /> 支持评论

<input type="checkbox" disabled /> 支持收藏

<input type="checkbox" disabled /> 发布视频
