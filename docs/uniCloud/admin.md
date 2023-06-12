## uni-admin 框架（原名 uniCloud admin）
## uni-admin framework (formerly uniCloud admin)

## 简介
## Introduction

uni-admin 框架，是基于 uni-app 和 uniCloud 的应用后台管理的开源框架。
The uni-admin framework is an open source framework for application background management based on uni-app and uniCloud.

对于uniCloud的开发者而言，其后台管理系统应该使用本框架。
For developers of uniCloud, their background management system should use this framework.

- 它基于 uni-app 的宽屏适配，可自动适配 PC 宽屏和手机各端。了解[宽屏适配](https://uniapp.dcloud.io/adapt)
- It is based on uni-app's widescreen adaptation, which can automatically adapt to PC widescreen and mobile terminals. Learn about [Widescreen Adaptation](https://uniapp.dcloud.io/adapt)
- 它基于 uniCloud，是 serverless 的云开发。了解[uniCloud](https://uniapp.dcloud.io/uniCloud/README)
- It is based on uniCloud and is serverless cloud development. Learn about [uniCloud](https://uniapp.dcloud.io/uniCloud/README)
- 它基于 uni-id，使用 uni-id 的用户账户、角色、权限系统。了解[uni-id](https://uniapp.dcloud.io/uniCloud/uni-id-summary)
- It is based on uni-id and uses uni-id's user account, role, permission system. Learn about [uni-id](https://uniapp.dcloud.io/uniCloud/uni-id-summary)

官方搭建了[uni-admin演示站点](http://hellouniadmin.dcloud.net.cn/admin/)，你登录后即可快速体验uni-admin。
The official build [uni-admin demo site](http://hellouniadmin.dcloud.net.cn/admin/), you can quickly experience uni-admin after logging in.

uni-admin 是开源的，遵循 MIT 协议，你可以从[Github](https://github.com/dcloudio/uni-admin)或[码云](https://gitee.com/dcloud/uni-admin)获取源码，也可以从[DCloud插件市场](https://ext.dcloud.net.cn/plugin?id=3268)快捷下载。
uni-admin is open source and follows the MIT license, you can download it from [Github](https://github.com/dcloudio/uni-admin) or [Code Cloud](https://gitee.com/dcloud/uni- admin) to get the source code, or you can quickly download it from [DCloud Plugin Market](https://ext.dcloud.net.cn/plugin?id=3268).

## 看视频，15分钟掌握uni-admin
## Watch the video, master uni-admin in 15 minutes

<a target="_blank" href="https://www.bilibili.com/video/BV17p4y1a71x?p=13">
    <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20210826112813.jpg" alt="uni-admin视频教程" style="width: 60%;">
</a>


## uni-admin 功能
## uni-admin functions

uni-admin有预置功能、插件生态和数据表管理的代码生成工具。
uni-admin has code generation tools for preset functions, plugin ecology and data table management.

有这套组合，管理端系统的开发变的前所未有的简单、高效、低成本。
With this combination, the development of the management system has become unprecedentedly simple, efficient and low-cost.

1. 预置功能
1. Preset function

- 管理员账户初始化、登录、修改密码
- Administrator account initialization, login, password modification
- 基于[uni-id](uni-id-summary.md)的用户管理（注册、修改信息、停用启用、删除）、角色管理、权限管理
- User management based on [uni-id](uni-id-summary.md) (register, modify information, disable enable, delete), role management, permission management
- 顶部 topWindow 的设置：比如 logo 更换、右上角部分链接更换。详见项目根目录的`admin.config.js`文件
- Settings of the top topWindow: such as logo replacement, and some links in the upper right corner are replaced. See the `admin.config.js` file in the project root directory for details
- 左侧 leftWindow 的菜单设置：菜单包括两类，一类是动态菜单，具备业务和权限功能；另一类是静态菜单，不会根据登录用户角色变化
- Menu settings of leftWindow on the left: There are two types of menus, one is dynamic menu, which has business and permission functions; the other is static menu, which does not change according to the role of the logged in user
- 动态菜单的数据存储在数据库表opendb-admin-menus中，基于uni-id角色权限，在菜单管理中可以对菜单进行增删改查
- The data of the dynamic menu is stored in the database table opendb-admin-menus. Based on the uni-id role permission, the menu can be added, deleted, modified and searched in the menu management
- 开发模式下的 debug 功能，帮助开发者及时发现报错和搜索错误信息，可在`admin.config.js`文件中配置
- The debug function in development mode helps developers to detect errors and search for error messages in time, which can be configured in the `admin.config.js` file

2. 内置 uni统计2.0
2. Built-in uni statistics 2.0

- uni统计2.0 是开源、全端、云端一体、更适合uni-app的统计平台，详见[统计文档](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
- uni stats 2.0 is an open source, full-end, cloud-integrated statistical platform that is more suitable for uni-app, see [statistics document](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
- 无需开发，在manifest的 uni统计 中打勾并发行，在uniCloud服务空间部署uni-admin，即可查看报表，见下文介绍
- No need to develop, tick and issue in the uni statistics of manifest, deploy uni-admin in the uniCloud service space, you can view the report, see the introduction below
- 开发者也可以自定义打点数据、自定义展现报表
- Developers can also customize the management data, customize the display report

3. 支持响应式布局
3. Support responsive layout

uni-admin 同时支持 PC 端 和移动端。基础模块是全端可用的，但注意有的插件不是全端的。
uni-admin supports both PC and mobile. The base module is available in full end, but note that some plugins are not full end.

PC 端如下图：
The PC side is as shown below:

![pc](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-admin/uni-admin-2.png)

移动端如下图：
The mobile terminal is as follows:

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-admin/uni-admin-3.png" width="375"/>


4. 扩展插件
4. Extensions

- uni-admin支持插件生态，包括cms插件、banner管理插件、日志管理插件、图表示例等，详见[插件市场](https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate)
- uni-admin supports plug-in ecology, including cms plug-in, banner management plug-in, log management plug-in, chart examples, etc. For details, see [plug-in market](https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy= UpdatedDate)

5. 数据表管理的代码生成工具
5. Code generation tool for data table management

- 对于数据表的管理，如列表浏览、分页搜索、详情修改、新增删除，这些代码都无需自己开发。建好数据表的schema表结构，利用schema2code工具，即可自动生成该表的管理页面的代码。详见[schema2code](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)
- For data table management, such as list browsing, paging search, detail modification, addition and deletion, these codes do not need to be developed by yourself. After building the schema table structure of the data table, using the schema2code tool, the code of the management page of the table can be automatically generated. For details, see [schema2code](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)

uni-admin是完整开源的一个uni-app项目，任何熟悉uni-app的工程师都可以自行开发扩展功能。
uni-admin is a complete open source uni-app project, any engineer familiar with uni-app can develop extended functions by themselves.

6. 换肤功能 <Badge text="uni-admin 2.1.7+" />
6. Skin change function <Badge text="uni-admin 2.1.7+" />

- uni-admin 自带两套皮肤：
- uni-admin comes with two skins:
  - 默认蓝色皮肤
  - default blue skin

    <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-admin-default-theme.jpg" width="400">

  - 可切换绿柔皮肤：
  - Switchable green soft skin:

    <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-admin-green-theme.jpg" width="400">

- 如果需要修改皮肤颜色，可以在 uni-admin 项目根目录的 `uni.scss` 文件中进行修改：
- If you need to modify the skin color, you can modify it in the `uni.scss` file in the root directory of the uni-admin project:

  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-admin-theme-config.jpg" height="400">

- 如果需要增加皮肤，以下步骤为示例：
- If you need to add skin, the following steps are examples:
  1. 在 `uni.scss` 文件的 `$themes` 属性中新增一个键值 **`blue`** 的配置：
    <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-admin-theme-config-edit.jpg" height="400">

  2. 修改项目根目录的 `admin.config.js` 文件，添加以下内容，**注意：`value` 的值需要与 `$themes` 中新增主题的键值保持一致**：
    <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-admin-admin-theme-config-edit.jpg" height="400">
  3. 重新运行到 web 端查看效果
  3. Re-run to the web to view the effect

## 使用说明
## Instructions for use

### 一键部署@fast-install
### One-click deployment @fast-install

uni-admin的`一键部署`，会自动上传云函数、创建数据库，并将前端页面编译上传到前端网页托管中，帮你一键生成网站并自动部署uni统计；如果你需要在HBuilderX中修改定制代码，后续可再选择[手动部署](#install)方式导入项目源码到HBuilderX。
uni-admin's "one-click deployment" will automatically upload cloud functions, create a database, compile and upload the front-end page to the front-end web hosting, help you generate a website with one click and automatically deploy uni statistics; if you need to modify it in HBuilderX Customize the code, and then you can choose [Manual Deployment](#install) to import the project source code to HBuilderX.

1. 在插件市场点击一键部署插件到uniCloud
1. In the plug-in market, click one-click to deploy the plug-in to uniCloud

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/admin%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2-0.png)

2. 选择服务空间（目前只支持选择腾讯云服务空间，且不可以是协作者身份，需空间创建者的账号登录）
2. Select a service space (currently only support the selection of Tencent Cloud service space, and you cannot be a collaborator, you need to log in with the account of the space creator)

如需要部署在阿里云空间，则请使用[手动部署](#install)方式
If you need to deploy in Alibaba Cloud space, please use the [Manual Deployment](#install) method

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/admin%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2-1.png)

3. 在此页面隔几分钟刷新点击一下刷新，直到提示部署完成。
3. Refresh this page every few minutes and click Refresh until it prompts that the deployment is complete.

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/admin%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2-2.png)

4. 部署完成后，点击前端网页默认访问链接即可访问uni-admin
4. After the deployment is complete, click the default access link on the front-end webpage to access uni-admin

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/admin%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2-3.png)

### 手动部署@install
### Manual deployment @install

当你需要使用`uni-admin`来开发时，需要使用`手动部署`方式导入源码到HBX中进行开发。
When you need to use `uni-admin` for development, you need to use `manual deployment` to import the source code into HBX for development.

#### 创建
#### create

[HBuilderX](https://www.dcloud.io/hbuilderx.html) 3.0+版本新建 uni-app 项目，选择 uni-admin 项目模板，如下图
[HBuilderX](https://www.dcloud.io/hbuilderx.html) Create a new uni-app project in version 3.0+, select the uni-admin project template, as shown below

![download-admin](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/create-admin.png)

创建完成后，可以跟随`云服务空间初始化向导`初始化项目，创建并绑定云服务空间
After the creation is complete, you can follow the `cloud service space initialization wizard` to initialize the project, create and bind the cloud service space

![download-admin](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/cloud-init.png)

<!-- 除了可视化向导外，也可以从[https://github.com/dcloudio/uni-admin](https://github.com/dcloudio/uni-admin)获取代码。 -->
<!-- In addition to the visual wizard, the code is also available from [https://github.com/dcloudio/uni-admin](https://github.com/dcloudio/uni-admin). -->

#### 运行
#### run

1. 进入 admin 项目
1. Enter the admin project
2. 在 `uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json` 文件中填写自己的 `passwordSecret` 字段 (用于加密密码入库的密钥) 和 `tokenSecret` 字段 (为生成 token 需要的密钥，测试期间跳过本条也可以)
2. In the `uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json` file, fill in your own `passwordSecret` field (the key used to encrypt password storage) and `tokenSecret` field ( In order to generate the key required for the token, it is also possible to skip this item during the test)
3. 右键 uniCloud目录 运行云服务空间初始化向导，初始化数据库和上传部署云函数（如已创建并绑定云服务空间，则跳过此步）
3. Right-click the uniCloud directory and run the cloud service space initialization wizard to initialize the database and upload and deploy cloud functions (if the cloud service space has been created and bound, skip this step)
4. 点击HBuilderX工具栏的运行【Ctrl+r / cmd+r】 -> 运行到浏览器。如果是连接本地云函数调试环境，上一步可以不上传云函数，但数据库仍需初始化。
4. Click Run [Ctrl+r / cmd+r] on the HBuilderX toolbar -> Run to browser. If you are connecting to the local cloud function debugging environment, you can not upload the cloud function in the previous step, but the database still needs to be initialized.
5. 从启动后的登录页面的底部，进入创建管理员页面（仅允许注册一次管理员账号）
5. From the bottom of the login page after startup, enter the Create Administrator page (only one administrator account registration is allowed)

**注意**：
**Notice**:

- 浏览器联网失败，报 `request：fail`，需要去云服务空间的`跨域配置`配置跨域域名，需带端口。[详见](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)
- The browser fails to connect to the Internet and reports `request: fail`. You need to go to the `Cross-domain configuration` of the cloud service space to configure a cross-domain domain name, and a port is required. [See details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)
- 如从未接触过uniCloud，是无法直接上手uni-admin的，建议先通读下uniCloud文档的概念介绍和快速上手章节。[详见](https://uniapp.dcloud.net.cn/uniCloud/README)
- If you have never been in contact with uniCloud, you cannot directly get started with uni-admin. It is recommended to read the concept introduction and quick start chapters of the uniCloud documentation first. [See details](https://uniapp.dcloud.net.cn/uniCloud/README)

## 目录结构
## Directory Structure

```bash
┌── cloudfunctions                      # 云函数
├── common        
│   │── admin-icons.css                 # admin-icons 图标样式
│   │── theme.scss                      # 换肤功能样式
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
## login page

首次使用，可以通过登录页面底部链接创建一个超级管理员（仅允许创建一次），该接口会判断系统里如果有 admin 角色的用户，就不再允许添加新的超级管理员。
For the first use, you can create a super administrator through the link at the bottom of the login page (only one creation is allowed). This interface will determine that if there is a user with the admin role in the system, it is no longer allowed to add a new super administrator.

> 注意：注册完毕后，建议从登录页面移除该链接
> Note: After registration, it is recommended to remove this link from the login page

![login](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-admin/uni-admin-1.png)

## 分栏窗体介绍
## Column form introduction

登录后我们会看到如下窗体, 窗体分为三个部分，topWindow 顶部窗口（导航栏），leftwindow 左侧窗口（菜单栏），右侧的内容主窗体
After logging in, we will see the following form, which is divided into three parts, topWindow top window (navigation bar), leftwindow left window (menu bar), and the content main form on the right

![index](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/pc-admin%E5%89%AF%E6%9C%AC.png)

### 顶部窗口（导航栏）
### Top window (navigation bar)

顶部窗口默认在左侧展示系统 Logo、右侧显示导航链接，效果如上图。展示内容可通过项目根目录下的`admin.config.js`文件进行配置，如下为示例：
By default, the top window displays the system logo on the left and the navigation links on the right. The effect is as shown above. The display content can be configured through the `admin.config.js` file in the project root directory. The following is an example:

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
The style of the top navigation bar can be customized through `uni.scss` in the project root directory, as follows:

```css
#uni.scss $top-window-bg-color: #fff; /* 背景色 */
$top-window-text-color: #999; /* 文字颜色 */
```

### 左侧窗口（菜单栏）
### Left window (menu bar)

左侧窗口内主要是菜单，菜单包含静态菜单和动态菜单，支持无限层级嵌套，但建议层级不要超过三级
There are mainly menus in the left window. The menus include static menus and dynamic menus. It supports infinite level nesting, but it is recommended that the level should not exceed three levels.

- 静态菜单: 所有登录用户角色都能看到
- Static menu: visible to all logged in user roles
- 动态菜单: 根据角色的权限自动生成
- Dynamic menu: automatically generated based on role's permissions

  > 用户登录时，会根据用户的 _角色_ 去查找其拥有的 _权限_ ，再根据 _权限_ 去查找对应的 _菜单_
  > When a user logs in, it will look up the _authority_ that the user has according to the user's _role_, and then look up the corresponding _menu_ according to the _authority_

#### 管理静态菜单
#### Manage Static Menu

通过 [admin.config.js](https://github.com/dcloudio/uni-admin/blob/master/admin.config.js) 配置侧边栏内容，所有用户都能看到静态菜单。
Configure the sidebar content via [admin.config.js](https://github.com/dcloudio/uni-admin/blob/master/admin.config.js), and all users can see the static menu.

```js
export default {
  // 侧边栏
  // Sidebar
  sideBar: {
    // 配置静态菜单列表（放置在用户被授权的菜单列表下边）
    // Configure the static menu list (placed below the user's authorized menu list)
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
#### Manage dynamic menus

在左侧导航菜单中，找到`系统管理 -> 菜单管理`，可视化的维护菜单。
In the left navigation menu, find `System Management -> Menu Management`, a visual maintenance menu.

菜单数据存储在云数据库的 `opendb-admin-menus` 表中。该表字段说明如下：
Menu data is stored in the `opendb-admin-menus` table in the cloud database. The table fields are described as follows:

_菜单表字段解释:_
_Menu table field explanation:_

| 字段        | 类型      | 必填 | 描述                                                 |
| Fields | Type | Required | Description |
| :---------- | :-------- | :--- | :--------------------------------------------------- |
| menu_id     | Object ID | 是   | 菜单 Id                                              |
| menu_id | Object ID | yes | menu_id |
| name        | String    | 是   | 菜单文字                                             |
| name | String | yes | menu text |
| icon        | String    | 否   | 菜单图标                                             |
| icon | String | no | menu icon |
| url         | String    | 否   | 菜单对应的页面链接（只有没有子菜单的菜单项可以配置） |
| url | String | No | The page link corresponding to the menu (only menu items without submenus can be configured) |
| sort        | Integer   | 否   | 在同级菜单中的排序，数组越大越靠后                   |
| sort | Integer | No | Sort in the same level menu, the larger the array, the later |
| parent_id   | String    | 否   | 父级菜单 Id                                          |
| parent_id | String | No | Parent menu Id |
| permission  | Array     | 否   | 菜单权限（只有没有子菜单的菜单项可以配置）           |
| permission | Array | No | Menu permission (only menu items without submenus can be configured) |
| enable      | Boolean   | 是   | 菜单状态：false 禁用 true 启用                       |
| enable | Boolean | yes | menu state: false disable true enable |
| create_date | Timestamp | 是   | 创建时间                                             |
| create_date | Timestamp | yes | creation time |

_添加菜单记录需要注意：_
_Add menu records need attention:_

菜单项分目录菜单和页面菜单。
Menu items are divided into directory menu and page menu.

- 目录菜单项：非叶子节点，点击后展开子菜单，自身没有 `URL` 。需至少一个子菜单的 `url` 字段不能为空，该菜单才能在页面显示
- Directory menu item: non-leaf node, click to expand sub-menu, no `URL` itself. The `url` field of at least one submenu must not be empty for the menu to be displayed on the page
- 页面菜单项：叶子节点，无子菜单，且 `url` 字段不能为空，点击该菜单项会转到`url`页面。如果 `url` 为空则该菜单无法显示。
- Page menu item: leaf node, no submenu, and the `url` field cannot be empty, clicking this menu item will go to the `url` page. The menu cannot be displayed if `url` is empty.


#### 侧边栏样式管理
#### Sidebar style management

通过 [uni.scss](https://github.com/dcloudio/uni-admin/blob/master/uni.scss) 配置侧边栏样式
Configure sidebar styles via [uni.scss](https://github.com/dcloudio/uni-admin/blob/master/uni.scss)

> 调整菜单颜色时，只需设置菜单背景色 `$menu-bg-color`，自行搭配文字前景色即可
> When adjusting the menu color, just set the menu background color `$menu-bg-color` and match the text foreground color by yourself

```css
$left-window-bg-color: #fff; /* 左侧窗口背景色 */
$menu-bg-color: #fff; /* 一级菜单背景色 */
$sub-menu-bg-color: darken($menu-bg-color, 8%); /* 二级以下菜单背景色 */
$menu-bg-color-hover: darken($menu-bg-color, 15%); /* 菜单 hover 背景颜色 */
$menu-text-color: #333; /* 菜单前景色 */
$menu-text-color-actived: #409eff; /* 菜单激活前景色 */
```

### 右侧窗口（内容主窗体)
### Right window (content main form)

右侧窗口是内容主窗体，和 uni-app 保持一致，用户登录后看到的第一个页面，默认是 pages 数组中第一项表示应用启动页。
The right window is the main content form, which is consistent with uni-app. The first page the user sees after logging in, the default is the first item in the pages array, which represents the application startup page.

如果想将自己开发的页面调到登录后首页，可在 page.json 调整。
If you want to transfer the page developed by yourself to the home page after login, you can adjust it in page.json.


## 应用管理 <Badge text="uni-admin 1.9.3+" />@app-manager
## Application Management <Badge text="uni-admin 1.9.3+" />@app-manager

在进入应用管理后可看到如下界面，点击右上角 `新增` 按钮可新增一个应用
![新增应用](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/create_app(1).png)

**整体界面布局**
**Overall interface layout**
  > 本页面信息，在应用发布、app升级模块中，都会关联使用，请认真填写
  > The information on this page will be used in association with the app release and app upgrade modules, please fill in carefully

  ![新增页面](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/create_app_page.jpg)

**各项信息说明**
**Information description**

- 基础信息
- basic information

	1. `AppID`：所要发布的 app 的 id。唯一
	1. `AppID`: The id of the app to be published. only
	2. `应用名称`：应用的名称，填写后不可更改
	2. `App Name`: the name of the app, it cannot be changed after filling in
	3. `应用简介`：生成发布页时，会在应用名称下方显示
	3. `App introduction`: When generating the release page, it will be displayed under the app name

- 图片素材
- Picture material

	1. `应用图标`：该应用的图标信息
	1. `App icon`: the icon information of the app
	2. `应用截图`：该应用的实际截图信息
	2. `App Screenshot`: The actual screen shot information of the app

- App 信息
- App Information

	1. 勾选代表填写此类信息，不勾选默认折叠
	1. Check it to fill in such information, uncheck the default folding
	2. Android 平台：可以选择手动填写还是上传安装包到云存储自动填写下载链接
	2. Android platform: you can choose to manually fill in or upload the installation package to cloud storage to automatically fill in the download link
	3. `自动填充`：仅在编辑页面有。会自动从`App 升级中心`同步 App 当前已上线的安装包信息。
	3. `Autofill`: Only available on edit page. The information of the currently online installation package of the App will be automatically synchronized from the `App Upgrade Center`.

- 小程序/快应用信息
- Mini Program/Quick App Information

	1. 勾选代表需要发布该类信息，不勾选会默认折叠
	1. If checked, it means that this type of information needs to be published. If it is not checked, it will be folded by default.
	2. `快应用`：只有上传了`快应用码`，才会在统一发布页展示
	2. `Quick App`: Only after uploading the `Quick App Code` will it be displayed on the unified release page

- H5

	1. `H5`：当你填写了链接，才会在统一发布页显示
	1. `H5`: When you fill in the link, it will be displayed on the unified release page

**Tips**
1. 在`manifest.json -> 源码视图`中添加以下配置：
1. Add the following configuration in `manifest.json -> Source View`:

   ```js
   "networkTimeout":{
   	"uploadFile":1200000	// 单位：ms。 如果不配置，上传大文件可能会超时
   }
   ```

## uni-portal：统一发布页 <Badge text="uni-admin 1.9.3+" />@uni-portal
## uni-portal: unified publishing page <Badge text="uni-admin 1.9.3+" />@uni-portal

自`uni-admin 1.9.3+`版本开始，`uni-portal`作为`uni-admin`的内置插件，内置在`uni-admin`项目中。
Since `uni-admin 1.9.3+` versions, `uni-portal` is built into the `uni-admin` project as a built-in plugin of `uni-admin`.

`uni-admin`管理员通过“应用管理”模块中填写的应用信息（如apk下载地址、小程序二维码）后，可快捷生成应用发布页。
The `uni-admin` administrator can quickly generate an application release page after filling in the application information (such as apk download address, applet QR code) in the "Application Management" module.

更多uni-portal的介绍，详见：[uni-portal](uni-portal.md)
For more uni-portal introduction, see: [uni-portal](uni-portal.md)

## uni-upgrade-center：App升级中心 <Badge text="uni-admin 1.9.3+" />@uni-upgrade-center
## uni-upgrade-center: uni-upgrade-center<Badge text="uni-admin 1.9.3+" />@uni-upgrade-center

自`uni-admin 1.9.3+`版本开始，`uni-upgrade-center`作为`uni-admin`的内置插件，内置在`uni-admin`项目中。
Since `uni-admin 1.9.3+` versions, `uni-upgrade-center` is built into the `uni-admin` project as a built-in plugin of `uni-admin`.

`uni-admin`管理员通过“应用管理”模块中填写的应用信息（如apk下载地址、小程序二维码）后，可通过列操作进入升级中心进行版本管理。
After the `uni-admin` administrator fills in the application information (such as apk download address, applet QR code) in the "Application Management" module, he can enter the upgrade center through the column operation for version management.

更多uni-portal的介绍，详见：[uni-upgrade-center](upgrade-center.md)
For more uni-portal introduction, see: [uni-upgrade-center](upgrade-center.md)

## uni统计2.0
## uni-stats 2.0

uni统计2.0 是开源、全端、云端一体、更适合uni-app的统计平台，下图为概览图和简介，详见[统计文档](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
uni Statistics 2.0 is an open source, full-end, cloud-integrated statistical platform that is more suitable for uni-app. stat-v2.html)

![统计-概况页](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/admin3.png)

**1. 全端**
**1. Full end**

全端流量统计，一张报表可查看所有端（iOS、Android、Web 及各家小程序）的运营数据。
Full-end traffic statistics, one report can view the operation data of all devices (iOS, Android, Web and various mini programs).

无需在各端接不同的sdk、无需在不同报表看数据。目前市面已知唯一一个一张报表看遍业务全景的方案。
There is no need to connect different SDKs at each end, and there is no need to view data in different reports. At present, there is only one solution known in the market that can see the business panorama in one report.

**2. 开源、免费、自由定制**
**2. Open source, free, free to customize**

无论前端采集数据的SDK、云端接收数据的云函数、云端跑批统计的云函数、展示统计结果的报表，所有这些代码全部开源。
Regardless of the SDK that collects data in the front-end, the cloud function that receives data in the cloud, the cloud function that runs batch statistics in the cloud, and the report that displays the statistical results, all these codes are all open source.

前端自定义打点，后端自定义统计维度，自由定制报表，一切都可以灵活定制。
Front-end custom management, back-end custom statistical dimensions, free custom reports, everything can be flexibly customized.

**3. 私有部署、数据自控**
**3. Private deployment, data automatic control**

使用传统saas类统计产品，所有数据都上报给统计服务厂商。
Using traditional saas statistical products, all data are reported to statistical service providers.

`uni统计2.0`基于`uniCloud`实现，云函数、统计数据全部托管在开发者自己的服务空间（阿里云或腾讯云自选）中，开发者对自己的统计数据拥有完整的控制权。
`uni Statistics 2.0` is implemented based on `uniCloud`, cloud functions and statistical data are all hosted in the developer's own service space (Alibaba Cloud or Tencent Cloud optional), and developers have complete control over their own statistical data.

**4. 默认功能丰富**
**4. The default function is rich**

- 设备统计
- Device Statistics
- 注册用户统计（基于[uni-id](https://uniapp.dcloud.io/uniCloud/uni-id-summary)）
- Registered user statistics (based on [uni-id](https://uniapp.dcloud.io/uniCloud/uni-id-summary))
- 页面统计
- Page Statistics
- 新增、活跃、留存、跳出率分析
- New, active, retained, bounce rate analysis
- 渠道分析：辅助渠道推广
- Channel analysis: auxiliary channel promotion
- 错误统计和上报：辅助产品质量提升
- Error statistics and reporting: auxiliary product quality improvement
- 自定义打点、开源可扩展的报表
- Custom management, open source and extensible reports

**5. 有效的错误分析**
**5. Effective Error Analysis**

传统统计平台，都没有js错误统计。开发者无法了解到自己的js代码在哪些设备上会报错。
Traditional statistical platforms do not have js error statistics. Developers cannot know on which devices their js code will report errors.

uni统计的错误信息更全面，包括 js前端错误和 App 原生层的崩溃。辅助开发者把应用做的更好。
The error information of uni statistics is more comprehensive, including js front-end errors and app native layer crashes. Help developers make applications better.

**6. 更适合uni-app和uniCloud**
**6. More suitable for uni-app and uniCloud**

uni统计深入uni-app和uniCloud框架底层，提供了众多其他统计平台无法提供的功能：
uni statistics goes deep into the bottom layer of uni-app and uniCloud framework, and provides many functions that other statistics platforms cannot provide:
- uni-app全端识别，无需对接不同sdk、无需在不同报表中切换和自己累加数据
- uni-app full-end recognition, no need to connect to different sdk, no need to switch between different reports and accumulate data by yourself
- 自动识别uni-app路由，自动采集页面标题（基于navigationBar或uni-title组件）
- Automatically identify uni-app routes and automatically capture page titles (based on navigationBar or uni-title components)
- 自动捕获js错误，上报app端原生崩溃日志
- Automatically capture js errors and report native crash logs on the app side
- 兼容uni-app渠道包打包体系，自动识别渠道包
- Compatible with the uni-app channel package packaging system, automatically identifying the channel package
- 基于uni-id账户体系，自动出具注册用户（不是设备）的新增、活跃、留存报表
- Based on the uni-id account system, automatically issue new, active and retained reports of registered users (not devices)
- 兼容uniCloud [opendb规范](/uniCloud/opendb)，从服务器端统计各项数据
- Compatible with uniCloud [opendb specification](/uniCloud/opendb), statistics various data from the server

**7. 开放生态**
**7. Open Ecosystem**

uni统计开源且基于[uni-admin](/uniCloud/admin)的插件规范提供了插件机制，会有更多插件作者提供各种丰富的统计插件（如电商统计、内容统计等）。见[插件市场](https://ext.dcloud.net.cn/?cat1=7&cat2=74&type=HotList)
uni statistics is open source and based on the [uni-admin](/uniCloud/admin) plug-in specification provides a plug-in mechanism, and more plug-in authors will provide various statistical plug-ins (such as e-commerce statistics, content statistics, etc.). See [Plugin Market](https://ext.dcloud.net.cn/?cat1=7&cat2=74&type=HotList)


## 群发短信@batch-sms <Badge text="uni-admin 2.1.0+" />
## Group SMS @batch-sms <Badge text="uni-admin 2.1.0+" />

如有客户关怀、会员服务、电商活动、新品上线等场景需要给用户发送短信时，无需开发，在uni-admin控制台选择用户/标签即可向用户群发短信，省时高效。
If there are scenarios such as customer care, membership services, e-commerce activities, and new product launches that need to send text messages to users, there is no need for development. You can select users/tags in the uni-admin console to send text messages to users in groups, saving time and efficiency.
同时支持动态替换短信模板变量，使短信更加个性化。
At the same time, it supports dynamic replacement of SMS template variables to make SMS more personalized.

### 功能介绍
### Features
- 支持 给指定用户、全部用户、指定标签用户群发短信
- Support group text messages to specified users, all users, and users with specified labels
- 指定用户：在用户列表中勾选要接收短信的用户（必须有手机号）后，点击“群发信息”创建短信任务。
- Designated users: After checking the users who want to receive text messages in the user list (must have a mobile phone number), click "Send Messages" to create a text message task.
- 全部用户：在用户列表界面直接点击“群发短信”创建短信任务。
- All users: Click "Send SMS" directly on the user list interface to create an SMS task.
- 指定标签用户：在用户标签列表中勾选标签（如标签关联的用户没有手机号将不会发送短信）后，点击“群发短信”创建短信任务。
- Designate tagged users: After checking the tag in the user tag list (if the user associated with the tag does not have a mobile phone number, no SMS will be sent), click "Group SMS" to create a SMS task.
- 支持 短信模板中的变量替换为“固定文本”与“数据库字段”
- Support variable replacement in SMS templates with "Fixed Text" and "Database Fields"
- 固定文本：固定字符串，所有用户会接收同样的内容，例如：```DCloud```
- Fixed text: fixed string, all users will receive the same content, for example: ```DCloud```
- 数据库字段：可以关联数据库中指定字段，内容较为个性化。格式为 ```{数据库表名.字段}```，例如: ```{uni-id-users.username}``` 目前仅支持```uni-id-users```表
- Database fields: You can associate specified fields in the database, and the content is more personalized. The format is ```{database table name.field}```, for example: ```{uni-id-users.username}``` currently only supports ```uni-id-users``` table
- 支持 发送前预览前5人短信内容，用于检测模板变量是否配置正确，提高发送成功率。
- Support to preview the text messages of the first 5 people before sending, which is used to detect whether the template variables are configured correctly and improve the sending success rate.

![群发短信](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/86928cf2-2f69-4c0f-a46f-a617e3fc1c83.png)

### 使用方式
### Usage

**步骤一：开通短信服务**
**Step 1: Activate SMS service**

如您首次使用请登录[DCloud开发者中心](https://dev.dcloud.net.cn/)开通短信服务
If you are using it for the first time, please log in to [DCloud Developer Center](https://dev.dcloud.net.cn/) to activate SMS service

**步骤二：添加签名与模板**
**Step 2: Add signature and template**

在[签名配置页面](https://dev.dcloud.net.cn/pages/sms/sign)添加短信签名
Add SMS signature on [Signature configuration page](https://dev.dcloud.net.cn/pages/sms/sign)

在[模板配置页面](https://dev.dcloud.net.cn/pages/sms/template)中添加短信模板
Add SMS template in [Template configuration page](https://dev.dcloud.net.cn/pages/sms/template)

例如：`【测试】亲爱的${username}, 祝您生日快乐！感谢您长期以来对xx商城的信任与支持，会员生日月畅享购物双倍积分，期待您的光临！`
For example: `[TEST] Dear ${username}, happy birthday to you! Thank you for your long-term trust and support to xx mall. Members can enjoy double shopping points on their birthday month. We look forward to your visit! `

**步骤三：导出短信模板**
**Step 3: Export SMS Template**

在短信模板页面-点击”导出模板“按钮，导出短信模板。
![导出短信模板](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230107203307.png)

**步骤四：通过uni-admin控制台发送短信**
**Step 4: Send SMS via uni-admin console**

如您未部署过uni-admin，请在插件市场中安装[uni-admin](https://ext.dcloud.net.cn/plugin?id=3268)
If you have not deployed uni-admin, please install [uni-admin] in the plug-in market (https://ext.dcloud.net.cn/plugin?id=3268)

首次使用，在 ```uni-config-center/uni-sms-co/config.json```中配置短信 API 密钥
For first use, configure SMS API key in ```uni-config-center/uni-sms-co/config.json```
```json
{
    "smsKey": "your smsKey",
    "smsSecret": "your smsSecret"
}
```

配置完成后，登录uni-admin控制台，打开用户管理页面，请按照图示步骤上传短信模板（步骤三导出的短信模板）：
![上传短信模板](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230107201145.png)
短信模板上传成功后，短信模板即可显示，如下：
![短信模板上传成功](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230107202329.png)

选择要接收短信的用户，如下：
![群发用户](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230107202752.png)
或者如果已经对用户进行了分组，可以在标签管理中选择标签后发送短信，如下：
![群发用户标签](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230107203019.png)

目前短信支持固定文本发送与关联数据表字段发送，以下介绍两种方式如何发送
At present, SMS supports fixed text sending and associated data table field sending. The following describes how to send in two ways

**固定文本发送**
**fixed text sending**

选择短信模板，如果没有出现变量模板配置就是固定文本模式，如下：
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230107204518.png)
可以在发送前点击预览，可以预览发送的第一条短信，用来检查短信内容是否正确，如下：
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230107204807.png)
确认短信内容无误后，点击提交即可发送短信，发送短信之后可以在[DCloud开发者中心](https://dev.dcloud.net.cn/)-查看[短信发送记录](https://dev.dcloud.net.cn/pages/sms/sendLog)
After confirming that the content of the message is correct, click Submit to send the message. After sending the message, you can check the [SMS sending record](https:// dev.dcloud.net.cn/pages/sms/sendLog)

**使用数据表字段作为模板变量发送**
**Use datatable fields to send as template variables**

选择短信模板，如果出现变量模板配置就是数据表查询模式，如下：
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230107205208.png)
如上，短信变量字段为”username“，配置替换字段为uni-id-users表中username字段，在发送短信时会替换掉短信变量。
As above, the text message variable field is "username", and the configuration replacement field is the username field in the uni-id-users table, and the text message variable will be replaced when sending a text message.

短信变量支持固定值和数据表查询两种方式；固定值如：各位同事，数据表查询如：{uni-id-users.username}；请注意，若使用数据表查询方式，目前仅支持查询 uni-id-users 表；并注意确保数据库中查询字段值不为空，否则短信将发送失败。
SMS variables support two methods of fixed value and data table query; fixed value such as: colleagues, data table query such as: {uni-id-users.username}; please note that if you use the data table query method, currently only supports query uni -id-users table; and pay attention to ensure that the value of the query field in the database is not empty, otherwise the SMS will fail to be sent.

在发送之前可以点击预览，查看第一条短信的内容，确保变量模板配置正确，如下，username将替换为“张三”：
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230107205823.png)

确认短信内容无误后，点击提交即可发送短信，发送短信之后可以在[DCloud开发者中心](https://dev.dcloud.net.cn/)-查看[短信发送记录](https://dev.dcloud.net.cn/pages/sms/sendLog)
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230107210406.png)

如有任何问题可在[论坛发帖](https://ask.dcloud.net.cn)咨询或加uniCloud短信服务交流QQ群(695645208)咨询
If you have any questions, you can consult in [Forum Post](https://ask.dcloud.net.cn) or add uniCloud SMS service exchange QQ group (695645208) for consultation

## 用户-角色-权限
## user-role-permission

uni-admin 框架基于 uni-id，复用 uni-id 的用户、角色、权限系统，详见[uni-id](https://uniapp.dcloud.io/uniCloud/uni-id-summary)。
The uni-admin framework is based on uni-id, and reuses uni-id's user, role, and permission system. For details, see [uni-id](https://uniapp.dcloud.io/uniCloud/uni-id-summary).

需要注意的是，admin 框架的动态菜单同样依赖 uni-id 的权限表（uni-id-permissions）。
It should be noted that the dynamic menu of the admin framework also relies on the uni-id permission table (uni-id-permissions).

菜单表(opendb-admin-menus)定义如下：
The menu table (opendb-admin-menus) is defined as follows:

| 字段        | 类型      | 必填 | 描述                                                 |
| Fields | Type | Required | Description |
| :---------- | :-------- | :--- | :--------------------------------------------------- |
| menu_id     | Object ID | 是   | 菜单 Id                                              |
| menu_id | Object ID | yes | menu_id |
| name        | String    | 是   | 菜单文字                                             |
| name | String | yes | menu text |
| icon        | String    | 否   | 菜单图标                                             |
| icon | String | no | menu icon |
| url         | String    | 否   | 菜单对应的页面链接（只有没有子菜单的菜单项可以配置） |
| url | String | No | The page link corresponding to the menu (only menu items without submenus can be configured) |
| sort        | Integer   | 否   | 在同级菜单中的排序，数组越大越靠后                   |
| sort | Integer | No | Sort in the same level menu, the larger the array, the later |
| parent_id   | String    | 否   | 父级菜单 Id                                          |
| parent_id | String | No | Parent menu Id |
| permission  | Array     | 否   | 菜单权限（只有没有子菜单的菜单项可以配置）           |
| permission | Array | No | Menu permission (only menu items without submenus can be configured) |
| enable      | Boolean   | 是   | 菜单状态：false 禁用 true 启用                       |
| enable | Boolean | yes | menu state: false disable true enable |
| create_date | Timestamp | 是   | 创建时间                                             |
| create_date | Timestamp | yes | creation time |

admin 提供了两个内置方法，方便在页面中鉴定登录用户权限和角色:
admin provides two built-in methods to facilitate the authentication of login user permissions and roles in the page:

| 方法             | 作用                       | 入参   | 返回值  |
| method | function | input parameter | return value |
| :--------------- | :------------------------- | :----- | :------ |
| `$hasPermission` | 鉴定登录用户是否具有某权限 | String | Boolean |
| `$hasPermission` | Identifies whether the logged in user has a permission | String | Boolean |
| `$hasRole`       | 鉴定登录用户是否具有某角色 | String | Boolean |
| `$hasRole` | Identifies whether the logged in user has a role | String | Boolean |

```html
<template>
  <view>
    <!-- 包含 user/add 权限的用户可以看到新增按钮 -->
    <!-- Users with user/add permissions can see the add button -->
    <button v-if="$hasPermission('USER_ADD')">新增</button>
    <!-- 包含 admin 角色的用户可以看到删除按钮 -->
    <!-- Users with admin role can see the delete button -->
    <button v-if="$hasRole('admin')">删除</button>
  </view>
</template>
```

### 给系统创建多个登录账户并设置不同的权限@mutiladmin
### Create multiple login accounts for the system and set different permissions @mutiladmin
下面以增加一个普通成员的角色为例，该角色的用户登录admin系统后只能看用户表数据，不能改动数据。
The following is an example of adding an ordinary member role. After logging in to the admin system, users of this role can only view the data in the user table and cannot change the data.
1. 先用admin账户登录admin系统。
1. First log in to the admin system with the admin account.
- admin示例项目地址：[https://unicloudadmindemo.dcloud.net.cn/#/pages/login/login](https://unicloudadmindemo.dcloud.net.cn/#/pages/login/login)
- admin sample project address: [https://unicloudadmindemo.dcloud.net.cn/#/pages/login/login](https://unicloudadmindemo.dcloud.net.cn/#/pages/login/login)
- 体验账号：admin      密码：123456
- Experience account: admin Password: 123456

2. 创建权限。在uni-admin左侧菜单的权限管理，新增权限“查询信息”，标识为“read”
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/admin-permision.jpg)
3. 创建角色。在左侧菜单的角色管理里，新增角色“普通成员”，标识为“member”，绑定上面的“查询信息”权限
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/4mutiladmin.jpg)
4. 创建账户并赋予角色。在左侧菜单的用户管理里，添加用户“张三”，然后给用户赋予角色“普通成员”
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/16f173a2-e889-404b-b509-346d3b929a0d.jpg)
5. 如果你退出账户，登录刚刚创建的账户张三。我们发现会提示：该账户没有被赋予登录admin系统的权限, 请联系系统管理员绑定角色赋权限。因为：你登录的账户没有访问任何admin系统菜单的权限，所以不能访问admin系统。
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/9mutiladmin.jpg)
6. 设置有查询信息权限的人，拥有访问admin系统菜单"用户管理"的权限。在左侧菜单的菜单管理里，找到菜单“用户管理”，点修改，在权限列表里勾选“查询信息”，也就是有查询信息权限的人，可以看到本菜单
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/11mutiladmin.jpg)
7. 这时你用账户“张三”登录，就能进入到admin系统。但你会看到如下图提示“权限校验未通过”。因为刚刚仅为该用户赋予了访问菜单的权限。还未赋予访问uni-id-users表的阅读权限
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/12mutiladmin.jpg)
8. 需要在hbuilderx中将表uni-id-users的schema文件中设置新角色的权限，将permission下的read节点配置为`"read": "'read' in auth.permission"`，并上传到云端。当然这在示例项目不能实现，需要你自己搭建admin系统，重复以上步骤，[点此下载uni-admin](https://ext.dcloud.net.cn/plugin?id=3268)
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/d92e3738-f25a-4c46-9ab4-2edbdf92518a.png)
9. 此时你再刷新页面即可访问用户管理的数据列表
9. At this point, you can refresh the page to access the data list of user management

## icon 图标
## icon icon

admin 框架内置了一套 icon 图标，在`静态功能演示-图标`菜单中，点击图标即可复制图标的 class 定义。
The admin framework has a built-in set of icon icons. In the `Static Function Demonstration - Icon` menu, click the icon to copy the class definition of the icon.

选中样式后，在新建菜单页面的表单中输入样式名称。没有样式的菜单项将没有图标。
With the style selected, enter the style name in the form on the New Menu page. Menu items without styles will have no icons.

当然，你也可以使用三方 icon 库。以使用 `elementUI` 的图标为例，在 `app.vue` 中导入图标库的样式文件：
Of course, you can also use a third-party icon library. Take the icon using `elementUI` as an example, import the style file of the icon library in `app.vue`:

```javascript
<style>
  /* 注意此处仅为 icon 使用示例，建议引入纯净图标库，避免增加不必要的 css */
  @import 'https://unpkg.com/element-ui/lib/theme-chalk/index.css';
</style>
```

在标签上使用图标的 class 名称即可：``el-icon-s-tools``
Just use the icon's class name on the label: ``el-icon-s-tools``

## 新增页面
## Add new page

新增页面可以自己开发页面，也可以从插件市场下载插件。页面如需添加菜单，参见上文的[菜单管理](#静态菜单和动态菜单)。
To add new pages, you can develop your own pages, or you can download plug-ins from the plug-in market. If you need to add a menu to the page, see [Menu management] above (#%E9%9D%99%E6%80%81%E8%8F%9C%E5%8D%95%E5%92%8C%E5%8A %A8%E6%80%81%E8%8F%9C%E5%8D%95).

开发页面不局限开发方式：
The development page is not limited to the development method:

- 可以新增普通的页面，在前端 callfunction，后台搭配云函数操作
- You can add ordinary pages, call functions in the front end, and operate with cloud functions in the background
- 可以使用云函数单文件路由，在项目中默认包含了一个[uni-cloud-router](https://uniapp.dcloud.io/uniCloud/uni-cloud-router) 的单文件路由，也可以使用插件市场的其他单文件路由
- You can use cloud function single-file routing, a [uni-cloud-router](https://uniapp.dcloud.io/uniCloud/uni-cloud-router) single-file routing is included by default in the project, or you can use Other single-file routes for the plugin marketplace
- 可以使用 clientdb，在前端直接操作数据库，后台配置 db schema 进行权限和格式校验
- You can use clientdb to directly operate the database on the front end, and configure the db schema in the background for permission and format verification
- 可以使用schema2code生成uni-admin页面。这是最为常用、最高效的页面开发模式。[详见](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)
- uni-admin pages can be generated using schema2code. This is the most common and efficient page development mode. [See details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)

> 注意：在使用 uni-cloud-router 时，controller 下的文件夹和文件，不要命名相同，例如：app/room 这个写法目前分辨不了 `app` 是文件 `app.js`，还是文件夹 `app`
> Note: When using uni-cloud-router, the folders and files under the controller should not be named the same. For example, the writing of app/room cannot tell whether `app` is the file `app.js` or the folder `app` `

### 自己开发页面
### Develop your own page

admin 中开发页面，和 uni-app 开发 vue 页面是一致的。
The development page in admin is the same as the uni-app development vue page.

### 从插件市场下载插件，并注册到 admin 的左侧动态菜单中
### Download the plug-in from the plug-in market and register it in the dynamic menu on the left of the admin

_使用步骤:_
_Steps for usage:_

1. 从[插件市场](https://ext.dcloud.net.cn/)导入插件
1. Import plugins from [Plugin Market](https://ext.dcloud.net.cn/)
2. 在 HBuilder X 3.1+ 中选择添加插件的项目
2. In HBuilder X 3.1+ select the project to add the plugin
3. 在插件的 db_init.json 文件上右键，点击“初始化云数据库”
3. Right-click on the db_init.json file of the plugin and click "Initialize Cloud Database"
4. 在菜单管理中的添加【待添加菜单】
4. Add [Menu to be added] in the menu management
5. 刷新 admin 即可在菜单栏看到新增的菜单
5. Refresh admin to see the new menu in the menu bar

---------------------------------- 分割线 ----------------------------------------
---------------------------------- Dividing line-------------- --------------------------


## admin 插件开发
## admin plugin development

我们不仅是插件的使用者，也可以是插件的开发者，那么如何开发一款 uni-admin 插件呢？
We are not only users of plugins, but also developers of plugins, so how to develop a uni-admin plugin?

对于 admin 插件来说，可以项目中开发完成功能，再将这项功能剥离成一个插件。其他开发者使用插件的过程，就是将插件还原成项目中的一项功能。
For the admin plug-in, the function can be developed in the project, and then this function can be stripped into a plug-in. The process of other developers using the plugin is to restore the plugin to a function in the project.

admin 插件包含云函数、前端页面，它必须基于 uni-id 的账户和权限体系，它不限制云函数的开发方式，可以自己写普通云函数、可以用任何单路由云函数框架、也可以用 clientDB。
The admin plugin includes cloud functions and front-end pages. It must be based on the uni-id account and permission system. It does not limit the development method of cloud functions. You can write ordinary cloud functions yourself, use any single-route cloud function framework, or use clientDB. .

admin插件不能是整体工程，不能包含manifest。它更类似于页面模板。
The admin plugin cannot be an overall project and cannot contain a manifest. It is more similar to a page template.

_admin 插件的目录结构：_
Directory structure of the _admin plugin: _

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
**%pluginId%-menu.json configuration**

本文件用于插件注册 uni-admin左侧的动态菜单。
This file is used for the dynamic menu on the left side of the plugin registration uni-admin.

pluginId 为你上传插件市场时填的插件id（插件市场每个插件都有一个唯一id）。
pluginId is the plugin id you filled in when uploading the plugin marketplace (each plugin in the plugin marketplace has a unique id).

假使你的插件id为“xxx-yyy”，那么在插件的根目录放置 xxx-yyy-menu.json ，按下文格式配置内容。（uni_module下不需要pluginId，直接就是menu.json）
If your plugin id is "xxx-yyy", then place xxx-yyy-menu.json in the root directory of the plugin, and configure the content in the following format. (pluginId is not required under uni_module, it is directly menu.json)

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
In the above example:
- `menu_id` 与之前的admin系统中的menu_id不重复即可。一个admin插件可以注册多个menu
- `menu_id` does not repeat the menu_id in the previous admin system. An admin plugin can register multiple menus
- `icon` 是uni-ui里的[uni-icons](https://ext.dcloud.net.cn/plugin?id=28)的class名称
- `icon` is the class name of [uni-icons](https://ext.dcloud.net.cn/plugin?id=28) in uni-ui
- `sort` 菜单的排序，数字越小排序越靠前
- `sort` menu sorting, the smaller the number, the higher the sorting
- `parent_id` 该菜单的父级菜单的`menu_id`。如不需要父菜单，即注册到根菜单中，请删除`parent_id`。示例中的"system_management"是uni-admin自带的系统管理菜单的`menu_id`
- `parent_id` The `menu_id` of this menu's parent menu. If the parent menu is not needed, i.e. registered in the root menu, please delete `parent_id`. The "system_management" in the example is the `menu_id` of the system management menu that comes with uni-admin
- `permission`是权限管理，一般情况下插件作者不配置此项，而是由插件的使用者在其具体项目上决定如何控制权限。
- `permission` is permission management. Generally, the plugin author does not configure this item, but the plugin user decides how to control the permission on their specific project.

包含%pluginId%-menu.json的插件导入项目后，运行起来uni-admin，菜单管理模块会自动读取这个json文件中的菜单配置，生成【待添加菜单】，配置与 admin【管理动态菜单】同理。插件作者可以在界面上可视化的点击确认添加，即可把菜单加入到他的项目下。
After the plugin containing %pluginId%-menu.json is imported into the project, run uni-admin, the menu management module will automatically read the menu configuration in this json file, generate [to be added menu], configuration and admin [manage dynamic menu] The same is true. The plug-in author can visually click on the interface to confirm the addition, and then the menu can be added to his project.

虽然也可以通过`db_init.json`来进行菜单初始化，但不建议这么操作。很容易发生和用户的数据库的冲突。仍然推荐使用%pluginId%-menu.json方式。
Although menu initialization can also be done via `db_init.json`, this is not recommended. It is easy to conflict with the user's database. The %pluginId%-menu.json method is still recommended.

**关于uni-admin和uni-cloud-router公共模块**
**About uni-admin and uni-cloud-router public modules**
uni-admin自带了一个单路由框架，uni-cloud-router，然后自带了一个uni-admin云函数使用了这个uni-cloud-router。但插件作者的插件，不能写在uni-admin的目录下。插件的云函数，要有插件id前缀，如果你想把你的插件的所有云函数合并成一个云函数，可以新建一个你自己的云函数，在里面引用uni-cloud-router公共模块。
uni-admin comes with a single routing framework, uni-cloud-router, and then comes with a uni-admin cloud function that uses this uni-cloud-router. But the plugin author's plugin cannot be written in the uni-admin directory. The cloud function of the plug-in must be prefixed with the plug-in id. If you want to combine all the cloud functions of your plug-in into one cloud function, you can create a new cloud function of your own, and reference the uni-cloud-router public module in it.

**使用schema2code生成admin页面**
**Use schema2code to generate admin page**

大多数的 admin 插件的表单页面是可以用uniCloud自带的schema2code工具自动生成的，可以直接生成数据库的增删改查的完整页面。所以在 uni-admin 中制作一个插件非常简单。
Most of the form pages of the admin plug-in can be automatically generated by the schema2code tool that comes with uniCloud, which can directly generate a complete page of database additions, deletions, changes, and inquiries. So making a plugin in uni-admin is very simple.

首先在数据库中配好[DB Schema](https://uniapp.dcloud.io/uniCloud/schema)，然后使用 uniCloud web 控制台提供的schema2code生成代码工具，即可快速的生成数据的展示、新建、修改、删除的页面代码，并且自带表单校验。详见：[schema2code](https://uniapp.dcloud.io/uniCloud/schema?id=autocode)
First, configure [DB Schema](https://uniapp.dcloud.io/uniCloud/schema) in the database, and then use the schema2code generation code tool provided by the uniCloud web console to quickly generate data display, new, Modified, deleted page code, and comes with form validation. See: [schema2code](https://uniapp.dcloud.io/uniCloud/schema?id=autocode)

为防止和用户工程的文件冲突，插件的页面应该有插件的前缀，比如 pages/xxx-page。自带的数据库schema文件也推荐带上前缀。
To prevent file conflicts with user projects, the plugin's page should have the plugin's prefix, such as pages/xxx-page. The built-in database schema file is also recommended to be prefixed.

以下为已存在的 uni-admin 插件列表，可以参考：[https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate](https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate)
The following is a list of existing uni-admin plugins, you can refer to: [https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate](https://ext.dcloud.net.cn/? cat1=7&cat2=74&orderBy=UpdatedDate)

**插件开发后如何上传插件市场**
**How to upload plugin market after plugin development**

插件上传等更多信息，参考 [DCloud 插件开发指南汇总](https://uniapp.dcloud.io/plugin/publish.html) 及其中的 `admin 插件`部分，插件作者可以按此文档提交插件，在插件市场的上传发布页面选择`uniCloud` 分类的 `Admin 插件` 。
For more information about plug-in uploads, please refer to [Summary of DCloud Plug-in Development Guide](https://uniapp.dcloud.io/plugin/publish.html) and the `admin plug-in` section. Plug-in authors can submit plug-ins according to this document. On the upload and release page of the plug-in market, select the `Admin plug-in` of the `uniCloud` category.

## uni-admin中使用三方组件库
## Use the tripartite component library in uni-admin

uni-admin 支持所有三方的 Vue UI 库，包括 elementUI 等非 uni-app 的 UI 库，但注意这些 for h5 的 ui 库只能在浏览器中使用，无法适配 App 和小程序，按如下操作。
uni-admin supports all three-party Vue UI libraries, including non-uni-app UI libraries such as elementUI, but note that these for h5 ui libraries can only be used in browsers and cannot be adapted to apps and applets, as follows.

以使用 element-ui 框架为例：
Take the use of the element-ui framework as an example:

1. 安装 UI 框架
1. Install UI framework

   > npm i element-ui -S

2. 在 main.js 中引用
2. Reference in main.js

   ```javascript
   import elementUI from "element-ui";
   import "element-ui/lib/theme-chalk/index.css";

   Vue.use(elementUI);
   ```

注意：
Notice:
1. uni-app的button、input等组件，是在html的button、input等标签的外面包了一层，做法与微信小程序相同。如果使用for html的库，其css元素选择器可能需要调整后才能符合预期。
1. The button, input and other components of uni-app are coated with a layer of HTML tags such as button and input, which is the same as the WeChat applet. If you use a for html library, its css element selectors may need to be adjusted to work as expected.
2. 为避免，开发者直接将`用户端项目`和`管理员端项目`部署到同一个云服务空间的“前端网页托管”导致的文件覆盖问题。
2. To avoid the file coverage problem caused by the "front-end web hosting" where the developer directly deploys the 'client project' and 'administrator project' to the same cloud service space.
uni-admin框架运行的基础路径默认为`/admin/`，部署到前端网页托管之后，你需要通过`https://你的域名/admin/`来访问，且路由模式必须为hash。
The base path where the uni-admin framework runs is `/admin/` by default. After deploying to the front-end web hosting, you need to access it through `https://your domain name/admin/`, and the routing mode must be hash.
如果你希望自定义项目的运行的基础路径，修改`manifest.json`文件的`h5 -> router -> base`的值即可。
If you want to customize the base path of the project's running, modify the value of `h5 -> router -> base` in the `manifest.json` file.

## 常见问题
## common problem

### 使用uni-admin新建用户无法登录，会提示“该账号暂无权限登录” ？
### Using uni-admin to create a new user cannot log in, and it will prompt "This account has no permission to log in"?

用户登录逻辑：登录时系统检测没有菜单会提示“暂无权限登录”，需要给新账号绑定角色，角色有菜单方可登录

### admin账号密码忘记了，如何重置admin账号密码？@resetpassword

有两个方案

**方案一：**

1. 去数据库把原来的admin账号的role角色改成空数组（这样你就可以再次注册admin2账号）
2. 注册admin2账号，并用admin2账号登录，去用户管理把原先的admin账号的密码重置成123456。
3. 此时就可以登录原来的admin账号了，最后去数据库把admin2账号删了。

**方案二：**

1. 使用uni-id或uni-id-co注册一个普通的账号，比如账户名：test 密码：123456
2. 前往uniCloud web控制台 - 云数据库 - 打开uni-id-users表 - 找到刚注册的test账号，复制其password字段的值，修改admin账号的password跟test账号的password一致。
3. 此时admin账号的密码就已经重置为123456了





