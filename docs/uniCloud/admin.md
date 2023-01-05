## uni-admin 框架（原名 uniCloud admin）

## 简介

uni-admin 框架，是基于 uni-app 和 uniCloud 的应用后台管理的开源框架。

对于uniCloud的开发者而言，其后台管理系统应该使用本框架。

- 它基于 uni-app 的宽屏适配，可自动适配 PC 宽屏和手机各端。了解[宽屏适配](https://uniapp.dcloud.io/adapt)
- 它基于 uniCloud，是 serverless 的云开发。了解[uniCloud](https://uniapp.dcloud.io/uniCloud/README)
- 它基于 uni-id，使用 uni-id 的用户账户、角色、权限系统。了解[uni-id](https://uniapp.dcloud.io/uniCloud/uni-id-summary)

官方搭建了[uni-admin演示站点](http://hellouniadmin.dcloud.net.cn/admin/)，你登录后即可快速体验uni-admin。

uni-admin 是开源的，遵循 MIT 协议，你可以从[Github](https://github.com/dcloudio/uni-admin)或[码云](https://gitee.com/dcloud/uni-admin)获取源码，也可以从[DCloud插件市场](https://ext.dcloud.net.cn/plugin?id=3268)快捷下载。

## 看视频，15分钟掌握uni-admin

<a target="_blank" href="https://www.bilibili.com/video/BV17p4y1a71x?p=13">
    <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/4332911b-6624-4587-8c77-78b68f1f8c78.jpg" alt="uni-admin视频教程" style="width: 60%;">
</a>


## uni-admin 功能

uni-admin有预置功能、插件生态和数据表管理的代码生成工具。

有这套组合，管理端系统的开发变的前所未有的简单、高效、低成本。

1. 预置功能

- 管理员账户初始化、登录、修改密码
- 基于[uni-id](uni-id-summary.md)的用户管理（注册、修改信息、停用启用、删除）、角色管理、权限管理
- 顶部 topWindow 的设置：比如 logo 更换、右上角部分链接更换。详见项目根目录的`admin.config.js`文件
- 左侧 leftWindow 的菜单设置：菜单包括两类，一类是动态菜单，具备业务和权限功能；另一类是静态菜单，不会根据登录用户角色变化
- 动态菜单的数据存储在数据库表opendb-admin-menus中，基于uni-id角色权限，在菜单管理中可以对菜单进行增删改查
- 开发模式下的 debug 功能，帮助开发者及时发现报错和搜索错误信息，可在`admin.config.js`文件中配置

2. 内置 uni统计2.0

- uni统计2.0 是开源、全端、云端一体、更适合uni-app的统计平台，详见[统计文档](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
- 无需开发，在manifest的 uni统计 中打勾并发行，在uniCloud服务空间部署uni-admin，即可查看报表，见下文介绍
- 开发者也可以自定义打点数据、自定义展现报表

3. 支持响应式布局

uni-admin 同时支持 PC 端 和移动端。基础模块是全端可用的，但注意有的插件不是全端的。

PC 端如下图：

![pc](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/c2a69410-15db-11eb-880a-0db19f4f74bb.png)

移动端如下图：

<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/2766a010-11d7-11eb-8bd0-2998ac5bbf7e.png" width="375"/>


4. 扩展插件

- uni-admin支持插件生态，包括cms插件、banner管理插件、日志管理插件、图表示例等，详见[插件市场](https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate)

5. 数据表管理的代码生成工具

- 对于数据表的管理，如列表浏览、分页搜索、详情修改、新增删除，这些代码都无需自己开发。建好数据表的schema表结构，利用schema2code工具，即可自动生成该表的管理页面的代码。详见[schema2code](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)

uni-admin是完整开源的一个uni-app项目，任何熟悉uni-app的工程师都可以自行开发扩展功能。

## 使用说明

### 一键部署@fast-install

uni-admin的`一键部署`，会自动上传云函数、创建数据库，并将前端页面编译上传到前端网页托管中，帮你一键生成网站并自动部署uni统计；如果你需要在HBuilderX中修改定制代码，后续可再选择[手动部署](#install)方式导入项目源码到HBuilderX。

1. 在插件市场点击一键部署插件到uniCloud

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/c1ce5f01-1f9a-46c5-8bcf-8df458b46e7b.png)

2. 选择服务空间（目前只支持选择腾讯云服务空间，且不可以是协作者身份，需空间创建者的账号登录）

如需要部署在阿里云空间，则请使用[手动部署](#install)方式

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/113fca82-b4cb-4596-a857-3f325f17be4d.png)

3. 在此页面隔几分钟刷新点击一下刷新，直到提示部署完成。

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/3ea33005-b38d-4ffc-8173-56c6c892b6a2.png)

4. 部署完成后，点击前端网页默认访问链接即可访问uni-admin

![](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/f017b8d9-69a0-4fc8-9707-4ccdf0c29f00.png)

### 手动部署@install

当你需要使用`uni-admin`来开发时，需要使用`手动部署`方式导入源码到HBX中进行开发。

#### 创建

[HBuilderX](https://www.dcloud.io/hbuilderx.html) 3.0+版本新建 uni-app 项目，选择 uni-admin 项目模板，如下图

![download-admin](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/c2085840-15db-11eb-880a-0db19f4f74bb.png)

创建完成后，可以跟随`云服务空间初始化向导`初始化项目，创建并绑定云服务空间

![download-admin](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/2baaddd0-11f5-11eb-81ea-f115fe74321c.png)

<!-- 除了可视化向导外，也可以从[https://github.com/dcloudio/uni-admin](https://github.com/dcloudio/uni-admin)获取代码。 -->

#### 运行

1. 进入 admin 项目
2. 在 `uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json` 文件中填写自己的 `passwordSecret` 字段 (用于加密密码入库的密钥) 和 `tokenSecret` 字段 (为生成 token 需要的密钥，测试期间跳过本条也可以)
3. 右键 uniCloud目录 运行云服务空间初始化向导，初始化数据库和上传部署云函数（如已创建并绑定云服务空间，则跳过此步）
4. 点击HBuilderX工具栏的运行【Ctrl+r / cmd+r】 -> 运行到浏览器。如果是连接本地云函数调试环境，上一步可以不上传云函数，但数据库仍需初始化。
5. 从启动后的登录页面的底部，进入创建管理员页面（仅允许注册一次管理员账号）

**注意**：

- 浏览器联网失败，报 `request：fail`，需要去云服务空间的`跨域配置`配置跨域域名，需带端口。[详见](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)
- 如从未接触过uniCloud，是无法直接上手uni-admin的，建议先通读下uniCloud文档的概念介绍和快速上手章节。[详见](https://uniapp.dcloud.net.cn/uniCloud/README)

## 目录结构

```bash
├── cloudfunctions                      # 云函数
├── common        
│   │── uni.css                         # 公共样式
│   └── uni-icons.css                   # icon样式
├── components                          # 自定义组件
├── js_sdk                              # js sdk
│   └── uni-stat                               
│       └── util.js                     # uni统计相关工具方法       
├── pages                               # 页面
│   │── index                           # 首页
│   │── login                           # 登录页
│   │── system                          # 系统管理
│   │   │── app                         # 应用管理
│   │   │── menu                        # 菜单管理
│   │   │── permission                  # 权限管理
│   │   │── role                        # 角色管理
│   │   │── tag                         # 标签管理
│   │   └── user                        # 用户管理
│   └── uni-stat                        # uni统计
│       │── channel                     # 渠道（app）
│       │   │── channel.vue             # 页面（下同）
│       │   └── fieldsMap.js            # 字段配置（下同）
│       │── device                      # 设备统计
│       │   │── activity                # 渠道/场景分析
│       │   │   │── activity.vue       
│       │   │   └── fieldsMap.js     
│       │   │── comparison              # 平台对比
│       │   │   │── comparison.vue       
│       │   │   └── fieldsMap.js     
│       │   │── overview                # 今日概览
│       │   │   │── overview.vue       
│       │   │   └── fieldsMap.js     
│       │   │── retention               # 留存
│       │   │   │── retention.vue       
│       │   │   └── fieldsMap.js     
│       │   │── stickiness              # 粘性
│       │   │   │── stickiness.vue       
│       │   │   └── fieldsMap.js     
│       │   └── trend                   # 趋势分析
│       │       │── trend.vue            
│       │       └── fieldsMap.js         
│       │── error                       # 错误分析
│       │   │── error.vue             
│       │   └── fieldsMap.js            
│       │── event                       # 事件分析
│       │   │── event.vue             
│       │   └── fieldsMap.js            
│       │── index                       # 统计首页
│       │   │── index.vue             
│       │   └── fieldsMap.js            
│       │── page-ent                    # 入口页
│       │   │── page-ent.vue             
│       │   └── fieldsMap.js            
│       │── page-res                    # 受访页
│       │   │── page-res.vue             
│       │   └── fieldsMap.js            
│       │── scene                       # 场景值（小程序）
│       │   │── scene.vue             
│       │   └── fieldsMap.js            
│       └── user                        # 用户统计
│           │── activity                # 渠道/场景分析
│           │   │── activity.vue      
│           │   └── fieldsMap.js    
│           │── comparison              # 平台对比
│           │   │── comparison.vue      
│           │   └── fieldsMap.js    
│           │── overview                # 今日概览
│           │   │── overview.vue      
│           │   └── fieldsMap.js    
│           │── retention               # 留存
│           │   │── retention.vue      
│           │   └── fieldsMap.js    
│           │── stickiness              # 粘性
│           │   │── stickiness.vue      
│           │   └── fieldsMap.js    
│           └── trend                   # 趋势分析
│               │── trend.vue           
│               └── fieldsMap.js    
├── static
├── store                               # vuex
├── windows       
│   │── component                       # 项目中使用的组件
│   │── leftWindow.vue                  # 左侧窗口（菜单栏）
│   └── topWindow.vue                   # 顶部窗口（导航栏）
├── admin.config.js                     # 系统配置（配置导航，菜单等）
├── App.vue       
├── main.js       
├── mainfest.json       
├── pages.json        
├── postcss.config.js                   # postcss 配置（浏览器兼容性）
└── uni.scss
```

## 登录页

首次使用，可以通过登录页面底部链接创建一个超级管理员（仅允许创建一次），该接口会判断系统里如果有 admin 角色的用户，就不再允许添加新的超级管理员。

> 注意：注册完毕后，建议从登录页面移除该链接

![login](https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/5553958b-2a38-40e5-8229-0c2ad1f3d224.png)

## 分栏窗体介绍

登录后我们会看到如下窗体, 窗体分为三个部分，topWindow 顶部窗口（导航栏），leftwindow 左侧窗口（菜单栏），右侧的内容主窗体

![index](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/c3591b30-15db-11eb-8ff1-d5dcf8779628.png)

### 顶部窗口（导航栏）

顶部窗口默认在左侧展示系统 Logo、右侧显示导航链接，效果如上图。展示内容可通过项目根目录下的`admin.config.js`文件进行配置，如下为示例：

```js
# admin.config.js
export default {
  navBar: {// 顶部导航
    logo:"https://www.example.com/logo.png",//左侧 Logo
    links: [ // 右侧链接
      {
        text: "Admin框架文档",
        url: "https://uniapp.dcloud.net.cn/uniCloud/admin",
      },
      {
        text: "浏览更多Admin插件",
        url: "https://ext.dcloud.net.cn/?cat1=7&cat2=74",
      }
    ],
  },
};
```

顶部导航栏的样式，可通过项目根目录下的`uni.scss`进行自定义，如下：

```css
#uni.scss $top-window-bg-color: #fff; /* 背景色 */
$top-window-text-color: #999; /* 文字颜色 */
```

### 左侧窗口（菜单栏）

左侧窗口内主要是菜单，菜单包含静态菜单和动态菜单，支持无限层级嵌套，但建议层级不要超过三级

- 静态菜单: 所有登录用户角色都能看到
- 动态菜单: 根据角色的权限自动生成

  > 用户登录时，会根据用户的 _角色_ 去查找其拥有的 _权限_ ，再根据 _权限_ 去查找对应的 _菜单_

#### 管理静态菜单

通过 [admin.config.js](https://github.com/dcloudio/uni-admin/blob/master/admin.config.js) 配置侧边栏内容，所有用户都能看到静态菜单。

```js
export default {
  // 侧边栏
  sideBar: {
    // 配置静态菜单列表（放置在用户被授权的菜单列表下边）
    staticMenu: [
      {
        menu_id: "demo",
        name: "静态功能演示",
        icon: "uni-icons-list",
        children: [
          {
            menu_id: "icons",
            name: "图标",
            url: "/pages/demo/icons/icons"
          },
          {
            menu_id: "table",
            name: "表格",
            url: "/pages/demo/table/table"
          }
        ]
      }
    ]
  }
};
```

#### 管理动态菜单

在左侧导航菜单中，找到`系统管理 -> 菜单管理`，可视化的维护菜单。

菜单数据存储在云数据库的 `opendb-admin-menus` 表中。该表字段说明如下：

_菜单表字段解释:_

| 字段        | 类型      | 必填 | 描述                                                 |
| :---------- | :-------- | :--- | :--------------------------------------------------- |
| menu_id     | Object ID | 是   | 菜单 Id                                              |
| name        | String    | 是   | 菜单文字                                             |
| icon        | String    | 否   | 菜单图标                                             |
| url         | String    | 否   | 菜单对应的页面链接（只有没有子菜单的菜单项可以配置） |
| sort        | Integer   | 否   | 在同级菜单中的排序，数组越大越靠后                   |
| parent_id   | String    | 否   | 父级菜单 Id                                          |
| permission  | Array     | 否   | 菜单权限（只有没有子菜单的菜单项可以配置）           |
| enable      | Boolean   | 是   | 菜单状态：false 禁用 true 启用                       |
| create_date | Timestamp | 是   | 创建时间                                             |

_添加菜单记录需要注意：_

菜单项分目录菜单和页面菜单。

- 目录菜单项：非叶子节点，点击后展开子菜单，自身没有 `URL` 。需至少一个子菜单的 `url` 字段不能为空，该菜单才能在页面显示
- 页面菜单项：叶子节点，无子菜单，且 `url` 字段不能为空，点击该菜单项会转到`url`页面。如果 `url` 为空则该菜单无法显示。


#### 侧边栏样式管理

通过 [uni.scss](https://github.com/dcloudio/uni-admin/blob/master/uni.scss) 配置侧边栏样式

> 调整菜单颜色时，只需设置菜单背景色 `$menu-bg-color`，自行搭配文字前景色即可

```css
$left-window-bg-color: #fff; /* 左侧窗口背景色 */
$menu-bg-color: #fff; /* 一级菜单背景色 */
$sub-menu-bg-color: darken($menu-bg-color, 8%); /* 二级以下菜单背景色 */
$menu-bg-color-hover: darken($menu-bg-color, 15%); /* 菜单 hover 背景颜色 */
$menu-text-color: #333; /* 菜单前景色 */
$menu-text-color-actived: #409eff; /* 菜单激活前景色 */
```

### 右侧窗口（内容主窗体)

右侧窗口是内容主窗体，和 uni-app 保持一致，用户登录后看到的第一个页面，默认是 pages 数组中第一项表示应用启动页。

如果想将自己开发的页面调到登录后首页，可在 page.json 调整。


## 应用管理 <Badge text="uni-admin 1.9.3+" />@app-manager

在进入应用管理后可看到如下界面，点击右上角 `新增` 按钮可新增一个应用
![新增应用](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/12b0eb73-f791-4cc4-998c-0c95ec97b3fd.png)

**整体界面布局**
  > 本页面信息，在应用发布、app升级模块中，都会关联使用，请认真填写

  ![新增页面](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/12198ea2-34eb-4881-8211-f7c1b7caa116.jpg)

**各项信息说明**

- 基础信息

	1. `AppID`：所要发布的 app 的 id。唯一
	2. `应用名称`：应用的名称，填写后不可更改
	3. `应用简介`：生成发布页时，会在应用名称下方显示

- 图片素材

	1. `应用图标`：该应用的图标信息
	2. `应用截图`：该应用的实际截图信息

- App 信息

	1. 勾选代表填写此类信息，不勾选默认折叠
	2. Android 平台：可以选择手动填写还是上传安装包到云存储自动填写下载链接
	3. `自动填充`：仅在编辑页面有。会自动从`App 升级中心`同步 App 当前已上线的安装包信息。

- 小程序/快应用信息

	1. 勾选代表需要发布该类信息，不勾选会默认折叠
	2. `快应用`：只有上传了`快应用码`，才会在统一发布页展示

- H5

	1. `H5`：当你填写了链接，才会在统一发布页显示

**Tips**
1. 在`manifest.json -> 源码视图`中添加以下配置：

   ```js
   "networkTimeout":{
   	"uploadFile":1200000	// 单位：ms。 如果不配置，上传大文件可能会超时
   }
   ```

## uni-portal：统一发布页 <Badge text="uni-admin 1.9.3+" />@uni-portal

自`uni-admin 1.9.3+`版本开始，`uni-portal`作为`uni-admin`的内置插件，内置在`uni-admin`项目中。

`uni-admin`管理员通过“应用管理”模块中填写的应用信息（如apk下载地址、小程序二维码）后，可快捷生成应用发布页。

更多uni-portal的介绍，详见：[uni-portal](uni-portal.md)

## uni-upgrade-center：App升级中心 <Badge text="uni-admin 1.9.3+" />@uni-upgrade-center

自`uni-admin 1.9.3+`版本开始，`uni-upgrade-center`作为`uni-admin`的内置插件，内置在`uni-admin`项目中。

`uni-admin`管理员通过“应用管理”模块中填写的应用信息（如apk下载地址、小程序二维码）后，可通过列操作进入升级中心进行版本管理。

更多uni-portal的介绍，详见：[uni-upgrade-center](upgrade-center.md)

## uni统计2.0

uni统计2.0 是开源、全端、云端一体、更适合uni-app的统计平台，下图为概览图和简介，详见[统计文档](https://uniapp.dcloud.net.cn/uni-stat-v2.html)

![统计-概况页](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/28ddae77-dda6-448f-86aa-7e59bb7c4f8d.png)

**1. 全端**

全端流量统计，一张报表可查看所有端（iOS、Android、Web 及各家小程序）的运营数据。

无需在各端接不同的sdk、无需在不同报表看数据。目前市面已知唯一一个一张报表看遍业务全景的方案。

**2. 开源、免费、自由定制**

无论前端采集数据的SDK、云端接收数据的云函数、云端跑批统计的云函数、展示统计结果的报表，所有这些代码全部开源。

前端自定义打点，后端自定义统计维度，自由定制报表，一切都可以灵活定制。

**3. 私有部署、数据自控**

使用传统saas类统计产品，所有数据都上报给统计服务厂商。

`uni统计2.0`基于`uniCloud`实现，云函数、统计数据全部托管在开发者自己的服务空间（阿里云或腾讯云自选）中，开发者对自己的统计数据拥有完整的控制权。

**4. 默认功能丰富**

- 设备统计
- 注册用户统计（基于[uni-id](https://uniapp.dcloud.io/uniCloud/uni-id-summary)）
- 页面统计
- 新增、活跃、留存、跳出率分析
- 渠道分析：辅助渠道推广
- 错误统计和上报：辅助产品质量提升
- 自定义打点、开源可扩展的报表

**5. 有效的错误分析**

传统统计平台，都没有js错误统计。开发者无法了解到自己的js代码在哪些设备上会报错。

uni统计的错误信息更全面，包括 js前端错误和 App 原生层的崩溃。辅助开发者把应用做的更好。

**6. 更适合uni-app和uniCloud**

uni统计深入uni-app和uniCloud框架底层，提供了众多其他统计平台无法提供的功能：
- uni-app全端识别，无需对接不同sdk、无需在不同报表中切换和自己累加数据
- 自动识别uni-app路由，自动采集页面标题（基于navigationBar或uni-title组件）
- 自动捕获js错误，上报app端原生崩溃日志
- 兼容uni-app渠道包打包体系，自动识别渠道包
- 基于uni-id账户体系，自动出具注册用户（不是设备）的新增、活跃、留存报表
- 兼容uniCloud [opendb规范](/uniCloud/opendb)，从服务器端统计各项数据

**7. 开放生态**

uni统计开源且基于[uni-admin](/uniCloud/admin)的插件规范提供了插件机制，会有更多插件作者提供各种丰富的统计插件（如电商统计、内容统计等）。见[插件市场](https://ext.dcloud.net.cn/?cat1=7&cat2=74&type=HotList)

## 群发短信@batch-sms <Badge text="uni-admin 2.1.0+" />
**前提准备**
1. 在[开发者中心](https://dev.dcloud.net.cn)开通短信验证码服务
2. 在 ```uni-config-center/uni-sms-co/config.json```中配置短信 API 密钥
```json
{
  "smsKey": "your smsKey",
  "smsSecret": "your smsSecret"
}
```
**功能介绍**
> 第一次使用此功能，请在[开发者中心](https://dev.dcloud.net.cn) - "短信" - "模板配置" 导出短信模板，在群发短信界面上传短信模板后使用。

- 支持 给指定用户、全部用户、指定标签用户群发短信
  - 指定用户：在用户列表中勾选要接收短信的用户（必须有手机号）后，点击“群发信息”创建短信任务。
  - 全部用户：在用户列表界面直接点击“群发短信”创建短信任务。
  - 指定标签用户：在用户标签列表中勾选标签（如标签关联的用户没有手机号将不会发送短信）后，点击“群发短信”创建短信任务。
- 支持 短信模板中的变量替换为“固定文本”与“数据库字段”
  - 固定文本：固定字符串，所有用户会接收同样的内容，例如：```DCloud```
  - 数据库字段：可以关联数据库中指定字段，内容较为个性化。格式为 ```{数据库表名.字段}```，例如: ```{uni-id-users.username}``` 目前仅支持```uni-id-users```表
- 支持 发送前预览前5人短信内容，用于检测模板变量是否配置正确，提高发送成功率。

![群发短信](https://web-assets.dcloud.net.cn/unidoc/zh/86928cf2-2f69-4c0f-a46f-a617e3fc1c83.png)

## 用户-角色-权限

uni-admin 框架基于 uni-id，复用 uni-id 的用户、角色、权限系统，详见[uni-id](https://uniapp.dcloud.io/uniCloud/uni-id-summary)。

需要注意的是，admin 框架的动态菜单同样依赖 uni-id 的权限表（uni-id-permissions）。

菜单表(opendb-admin-menus)定义如下：

| 字段        | 类型      | 必填 | 描述                                                 |
| :---------- | :-------- | :--- | :--------------------------------------------------- |
| menu_id     | Object ID | 是   | 菜单 Id                                              |
| name        | String    | 是   | 菜单文字                                             |
| icon        | String    | 否   | 菜单图标                                             |
| url         | String    | 否   | 菜单对应的页面链接（只有没有子菜单的菜单项可以配置） |
| sort        | Integer   | 否   | 在同级菜单中的排序，数组越大越靠后                   |
| parent_id   | String    | 否   | 父级菜单 Id                                          |
| permission  | Array     | 否   | 菜单权限（只有没有子菜单的菜单项可以配置）           |
| enable      | Boolean   | 是   | 菜单状态：false 禁用 true 启用                       |
| create_date | Timestamp | 是   | 创建时间                                             |

admin 提供了两个内置方法，方便在页面中鉴定登录用户权限和角色:

| 方法             | 作用                       | 入参   | 返回值  |
| :--------------- | :------------------------- | :----- | :------ |
| `$hasPermission` | 鉴定登录用户是否具有某权限 | String | Boolean |
| `$hasRole`       | 鉴定登录用户是否具有某角色 | String | Boolean |

```html
<template>
  <view>
    <!-- 包含 user/add 权限的用户可以看到新增按钮 -->
    <button v-if="$hasPermission('USER_ADD')">新增</button>
    <!-- 包含 admin 角色的用户可以看到删除按钮 -->
    <button v-if="$hasRole('admin')">删除</button>
  </view>
</template>
```

### 给系统创建多个登录账户并设置不同的权限@mutiladmin
下面以增加一个普通成员的角色为例，该角色的用户登录admin系统后只能看用户表数据，不能改动数据。
1. 先用admin账户登录admin系统。
- admin示例项目地址：[https://unicloudadmindemo.dcloud.net.cn/#/pages/login/login](https://unicloudadmindemo.dcloud.net.cn/#/pages/login/login)
- 体验账号：admin      密码：123456

2. 创建权限。在uni-admin左侧菜单的权限管理，新增权限“查询信息”，标识为“read”
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/ab997406-d36e-4d42-87ab-339bd5a8a50a.jpg)
3. 创建角色。在左侧菜单的角色管理里，新增角色“普通成员”，标识为“member”，绑定上面的“查询信息”权限
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/f3b563b3-3e86-4823-9373-64c9bebdd51c.jpg)
4. 创建账户并赋予角色。在左侧菜单的用户管理里，添加用户“张三”，然后给用户赋予角色“普通成员”
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/18676740-4be8-419b-8c12-40559ded1413.jpg)
5. 如果你退出账户，登录刚刚创建的账户张三。我们发现会提示：该账户没有被赋予登录admin系统的权限, 请联系系统管理员绑定角色赋权限。因为：你登录的账户没有访问任何admin系统菜单的权限，所以不能访问admin系统。
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/0b627d45-da68-435b-995b-a191e7330624.jpg)
6. 设置有查询信息权限的人，拥有访问admin系统菜单"用户管理"的权限。在左侧菜单的菜单管理里，找到菜单“用户管理”，点修改，在权限列表里勾选“查询信息”，也就是有查询信息权限的人，可以看到本菜单
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/74c48248-d8ae-4427-9abb-8a6c5d54c53d.jpg)
7. 这时你用账户“张三”登录，就能进入到admin系统。但你会看到如下图提示“权限校验未通过”。因为刚刚仅为该用户赋予了访问菜单的权限。还未赋予访问uni-id-users表的阅读权限
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/37d1604e-bcb1-4096-a373-90397b9a96c0.jpg)
8. 需要在hbuilderx中将表uni-id-users的schema文件中设置新角色的权限，将permission下的read节点配置为`"read": "'read' in auth.permission"`，并上传到云端。当然这在示例项目不能实现，需要你自己搭建admin系统，重复以上步骤，[点此下载uni-admin](https://ext.dcloud.net.cn/plugin?id=3268)
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/81e38081-9507-4e00-bafd-7dab26e9a119.png)
9. 此时你再刷新页面即可访问用户管理的数据列表

## icon 图标

admin 框架内置了一套 icon 图标，在`静态功能演示-图标`菜单中，点击图标即可复制图标的 class 定义。

选中样式后，在新建菜单页面的表单中输入样式名称。没有样式的菜单项将没有图标。

当然，你也可以使用三方 icon 库。以使用 `elementUI` 的图标为例，在 `app.vue` 中导入图标库的样式文件：

```javascript
<style>
  /* 注意此处仅为 icon 使用示例，建议引入纯净图标库，避免增加不必要的 css */
  @import 'https://unpkg.com/element-ui/lib/theme-chalk/index.css';
</style>
```

在标签上使用图标的 class 名称即可：``el-icon-s-tools``

## 新增页面

新增页面可以自己开发页面，也可以从插件市场下载插件。页面如需添加菜单，参见上文的[菜单管理](#静态菜单和动态菜单)。

开发页面不局限开发方式：

- 可以新增普通的页面，在前端 callfunction，后台搭配云函数操作
- 可以使用云函数单文件路由，在项目中默认包含了一个[uni-cloud-router](https://uniapp.dcloud.io/uniCloud/uni-cloud-router) 的单文件路由，也可以使用插件市场的其他单文件路由
- 可以使用 clientdb，在前端直接操作数据库，后台配置 db schema 进行权限和格式校验
- 可以使用schema2code生成uni-admin页面。这是最为常用、最高效的页面开发模式。[详见](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)

> 注意：在使用 uni-cloud-router 时，controller 下的文件夹和文件，不要命名相同，例如：app/room 这个写法目前分辨不了 `app` 是文件 `app.js`，还是文件夹 `app`

### 自己开发页面

admin 中开发页面，和 uni-app 开发 vue 页面是一致的。

### 从插件市场下载插件，并注册到 admin 的左侧动态菜单中

_使用步骤:_

1. 从[插件市场](https://ext.dcloud.net.cn/)导入插件
2. 在 HBuilder X 3.1+ 中选择添加插件的项目
3. 在插件的 db_init.json 文件上右键，点击“初始化云数据库”
4. 在菜单管理中的添加【待添加菜单】
5. 刷新 admin 即可在菜单栏看到新增的菜单

---------------------------------- 分割线 ----------------------------------------


## admin 插件开发

我们不仅是插件的使用者，也可以是插件的开发者，那么如何开发一款 uni-admin 插件呢？

对于 admin 插件来说，可以项目中开发完成功能，再将这项功能剥离成一个插件。其他开发者使用插件的过程，就是将插件还原成项目中的一项功能。

admin 插件包含云函数、前端页面，它必须基于 uni-id 的账户和权限体系，它不限制云函数的开发方式，可以自己写普通云函数、可以用任何单路由云函数框架、也可以用 clientDB。

admin插件不能是整体工程，不能包含manifest。它更类似于页面模板。

_admin 插件的目录结构：_

```bash
├── uniCloud
│   ├── cloudfunctions          # 云函数
│   └── database
│       ├── xxx.schema.json     # 数据库schema文件
│       └── db_init.json        # 数据库初始化文件
├── js_sdk                      # js sdk
├── pages                       # 页面
│   └── your-page               # 你的页面
└── %pluginId%-menu.json        # 向uni-admin左侧菜单注册新菜单的声明文件。pluginId 为你上传插件市场时填的插件id。uni_module下不需要pluginId，直接就是menu.json
```

**%pluginId%-menu.json 配置**

本文件用于插件注册 uni-admin左侧的动态菜单。

pluginId 为你上传插件市场时填的插件id（插件市场每个插件都有一个唯一id）。

假使你的插件id为“xxx-yyy”，那么在插件的根目录放置 xxx-yyy-menu.json ，按下文格式配置内容。（uni_module下不需要pluginId，直接就是menu.json）

```json
[
  {
    "menu_id": "xxx-yyy",
    "name": "显示名称",
    "icon": "",
    "url": "/pages/system/permission/list",
    "sort": 1,
    "parent_id": "system_management",
    "permission": []
  }
]
```

上述示例中：
- `menu_id` 与之前的admin系统中的menu_id不重复即可。一个admin插件可以注册多个menu
- `icon` 是uni-ui里的[uni-icons](https://ext.dcloud.net.cn/plugin?id=28)的class名称
- `sort` 菜单的排序，数字越小排序越靠前
- `parent_id` 该菜单的父级菜单的`menu_id`。如不需要父菜单，即注册到根菜单中，请删除`parent_id`。示例中的"system_management"是uni-admin自带的系统管理菜单的`menu_id`
- `permission`是权限管理，一般情况下插件作者不配置此项，而是由插件的使用者在其具体项目上决定如何控制权限。

包含%pluginId%-menu.json的插件导入项目后，运行起来uni-admin，菜单管理模块会自动读取这个json文件中的菜单配置，生成【待添加菜单】，配置与 admin【管理动态菜单】同理。插件作者可以在界面上可视化的点击确认添加，即可把菜单加入到他的项目下。

虽然也可以通过`db_init.json`来进行菜单初始化，但不建议这么操作。很容易发生和用户的数据库的冲突。仍然推荐使用%pluginId%-menu.json方式。

**关于uni-admin和uni-cloud-router公共模块**
uni-admin自带了一个单路由框架，uni-cloud-router，然后自带了一个uni-admin云函数使用了这个uni-cloud-router。但插件作者的插件，不能写在uni-admin的目录下。插件的云函数，要有插件id前缀，如果你想把你的插件的所有云函数合并成一个云函数，可以新建一个你自己的云函数，在里面引用uni-cloud-router公共模块。

**使用schema2code生成admin页面**

大多数的 admin 插件的表单页面是可以用uniCloud自带的schema2code工具自动生成的，可以直接生成数据库的增删改查的完整页面。所以在 uni-admin 中制作一个插件非常简单。

首先在数据库中配好[DB Schema](https://uniapp.dcloud.io/uniCloud/schema)，然后使用 uniCloud web 控制台提供的schema2code生成代码工具，即可快速的生成数据的展示、新建、修改、删除的页面代码，并且自带表单校验。详见：[schema2code](https://uniapp.dcloud.io/uniCloud/schema?id=autocode)

为防止和用户工程的文件冲突，插件的页面应该有插件的前缀，比如 pages/xxx-page。自带的数据库schema文件也推荐带上前缀。

以下为已存在的 uni-admin 插件列表，可以参考：[https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate](https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate)

**插件开发后如何上传插件市场**

插件上传等更多信息，参考 [DCloud 插件开发指南汇总](https://uniapp.dcloud.io/plugin/publish.html) 及其中的 `admin 插件`部分，插件作者可以按此文档提交插件，在插件市场的上传发布页面选择`uniCloud` 分类的 `Admin 插件` 。

## uni-admin中使用三方组件库

uni-admin 支持所有三方的 Vue UI 库，包括 elementUI 等非 uni-app 的 UI 库，但注意这些 for h5 的 ui 库只能在浏览器中使用，无法适配 App 和小程序，按如下操作。

以使用 element-ui 框架为例：

1. 安装 UI 框架

   > npm i element-ui -S

2. 在 main.js 中引用

   ```javascript
   import elementUI from "element-ui";
   import "element-ui/lib/theme-chalk/index.css";

   Vue.use(elementUI);
   ```

注意：
1. uni-app的button、input等组件，是在html的button、input等标签的外面包了一层，做法与微信小程序相同。如果使用for html的库，其css元素选择器可能需要调整后才能符合预期。
2. 为避免，开发者直接将`用户端项目`和`管理员端项目`部署到同一个云服务空间的“前端网页托管”导致的文件覆盖问题。
uni-admin框架运行的基础路径默认为`/admin/`，部署到前端网页托管之后，你需要通过`https://你的域名/admin/`来访问，且路由模式必须为hash。
如果你希望自定义项目的运行的基础路径，修改`manifest.json`文件的`h5 -> router -> base`的值即可。

## 常见问题

### 使用uni-admin新建用户无法登录，会提示“该账号暂无权限登录” ？

用户登录逻辑：登录时系统检测没有菜单会提示“暂无权限登录”，需要给新账号绑定角色，角色有菜单方可登录
