# uni-CMS

## 介绍

uni-CMS是基于uniCloud开发的uni-admin插件，可用于快速搭建CMS内容管理系统。
客户端可使用 uni-cms-article 插件进行内容展示，无需开发，即可在多端展示内容。
![](https://web-assets.dcloud.net.cn/unidoc/zh/202303231717572.png)
![uni-cms](https://web-assets.dcloud.net.cn/unidoc/zh/202303231541517.png)

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

- 基于uniCloud开发，无需搭建服务器，即可快速上线
- 内容支持多端渲染，如小程序、H5、App等
- 文章支持观看广告后解锁全文功能，为开发者提供一种新的收益方式 [详见](#watch-ad-unlock-content)

## CMS组成

CMS包含管理端与客户端，以下是CMS的组成部分：

1. uni-cms：CMS管理端; 属于uni-admin插件，用于管理文章、分类等内容 [插件地址](https://ext.dcloud.net.cn/plugin?name=uni-cms)
2. uni-cms-article：CMS客户端; 包含文章搜索、文章详情页面等页面，用于展示文章内容 [插件地址](https://ext.dcloud.net.cn/plugin?name=uni-cms-article)

## 如何使用

> 使用方式简单，只需导入对应的插件至项目中即可。

#### 1. 安装uni-cms管理端插件

在插件市场中搜索[uni-cms](https://ext.dcloud.net.cn/plugin?name=uni-cms)，将插件导入至uni-admin项目中，如已有uni-admin可忽略。
导入uni-cms后，打开uni-admin管理后台，点击左侧菜单栏的菜单管理，添加内容管理菜单。
如下图所示：

![](https://web-assets.dcloud.net.cn/unidoc/zh/202303232139066.png)

#### 2. 安装uni-cms-article客户端插件

> uni-cms-article仅适用于uni-app项目并且使用了uni-id用户体系的项目。

在插件市场中搜索[uni-cms-article](https://ext.dcloud.net.cn/plugin?name=uni-cms-article)，将插件导入至uni-app项目中。

**注意**
- 如果您的项目不是`uni-starter`或者不存在 `uni-id-pages`插件，请将`uni-id-pages`一同导入至项目中，要了解`uni-id-pages` [详见](/uniCloud/uni-id-pages.md)

## 二次开发

> 如果目前的 uni-CMS 不能满足你的需求，你可以基于 uni-CMS 进行二次开发。

### 目录结构说明

#### uni-cms 管理端
```text
uni-cms                             // uni-cms 插件
├── common                          // 公共文件
│   ├── font                        // 字体文件
│   │   └── editor-iconfont.ttf     // 富文本编辑器 toolbar icon 字体文件
│   ├── load-script.js              // 加载第三方脚本
│   ├── style                       // 样式文件
│   │   ├── article-detail.scss     // 文章详情页样式
│   │   └── editor-icon.css         // 富文本编辑器 toolbar icon 样式
│   ├── translate-content.js        // 转换Quill Delta格式兼容微信小程序
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
        ├── uni-cms-articles.schema.json    // 文章表
        └── uni-cms-categories.schema.json  // 分类表
```

#### uni-cms-article 客户端插件
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
        ├── uni-cms-articles.schema.ext.js  // 文章表schema扩展
        ├── uni-cms-articles.schema.json    // 文章表
        ├── uni-cms-categories.schema.json  // 分类表
        ├── uni-cms-search-logs.schema.json // 搜索日志表
        └── uni-cms-unlock-record.schema.json   // 内容解锁记录表
```

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
> 使用观看广告解锁全文功能需要在uni-ad后台开通[激励视频广告](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html), 开通步骤[详见](https://uniapp.dcloud.net.cn/uni-ad.html#start)
> 
> 目前H5端不支持广告, 所以在H5端无法使用观看广告解锁全文功能
> 
> 如果您的项目不是`uni-starter`或者不存在 `uni-id-pages`插件，请将`uni-id-pages`一同导入至项目中，要了解`uni-id-pages` [详见](/uniCloud/uni-id-pages.md)


<div style="display: flex; flex-basis: 10px">
<div style="margin-right: 10px;">
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/202303231701150.jpg" width="375" />
</div>
</div>

1. 在uni-ad后台开通[激励视频广告](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html), 开通步骤[详见](https://uniapp.dcloud.net.cn/uni-ad.html#start)
2. 在对应的广告位上配置激励视频回调，选择云函数回调，回调云函数为`unlock-callback`
3. 在 uni-AD Web 控制台，找到广告位，点击配置激励视频，展开当前广告位项，可看到生成的 `Security key`, 复制 `Security key`
4. 在 `uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center`目录中创建 `uni-cms-unlock-callback/config.json` 配置文件, 配置文件如下:
```json
{
  "adSecurityKey": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" // 请将此处替换为自己的 Security key
}
``` 
5. 在 `uni_modules/uni-cms/components/render-article-detail/unlock-content.vue` 文件中找到 `data.adpId` 字段, 根据自己的广告位ID进行修改, 例如:
```js
{
  adpId: "000000000"
}
```
6. 将云函数上传至云端, 添加一篇文章, 并在文章详情中添加解锁全文, 即可运行测试

**解锁逻辑说明**

当用户再次浏览文章时, 将会查询文章时在uni-cms-articles schema 扩展库中验证用户是否已解锁, 已解锁的用户将会直接展示全文, 未解锁的用户将会展示解锁全文按钮。

用户点击解锁全文按钮后, 将会触发广告, 广告观看完毕后, 广告服务器会调用云函数`uni-cms-unlock-callback`,
云函数`uni-cms-unlock-callback`进行验证, 验证通过后, 为用户解锁内容。

**其他**

内置的广告为激励视频广告, 用户在观看完广告后将会解锁全文, 如果需要其他类型的广告, 
可以自行修改`uni_modules/uni-cms/components/render-article-detail/unlock-content.vue`文件中的代码

## 后续计划

<input type="checkbox" disabled /> 内容分享

<input type="checkbox" disabled /> 支持 Markdown 编辑

<input type="checkbox" disabled /> 支持内容标签

<input type="checkbox" disabled /> 支持点赞

<input type="checkbox" disabled /> 支持评论

<input type="checkbox" disabled /> 支持收藏

<input type="checkbox" disabled /> 发布视频
