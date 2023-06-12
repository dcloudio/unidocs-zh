## 简介
## Introduction

一个服务空间对应一整套独立的云开发资源，包括数据库、存储空间、云函数等资源。服务空间之间彼此隔离。
A service space corresponds to a set of independent cloud development resources, including databases, storage spaces, cloud functions and other resources. Service spaces are isolated from each other.

每个服务空间都有一个全局唯一的space ID。
Each service space has a globally unique space ID.

- 通过 HBuilderX 中管理服务空间，包括新建服务空间和关联服务空间
- Manage service spaces through HBuilderX, including new service spaces and associated service spaces

在 `uniCloud` 目录右键菜单中创建服务空间
Create a service space in the `uniCloud` directory context menu

<div align=center>
  <img style="max-width:750px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/create1.jpg"/>
</div>

创建服务空间后，在同样的 `uniCloud` 目录右键菜单中关联该服务空间。只有项目关联好服务空间后，才能上传云函数、操作服务空间下的数据库、存储等资源。
After creating a service space, associate the service space in the same `uniCloud` directory context menu. Only after the project is associated with the service space, you can upload cloud functions, operate the database, storage and other resources under the service space.

- 通过uniCloud的web控制台[https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn) 管理服务空间。
- Manage the service space through the uniCloud web console [https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn).

web控制台可以新建、删除服务空间，管理线上的服务空间资源。
The web console can create and delete service spaces and manage online service space resources.


**新建服务空间注意**
**Note for new service space**

- 第一次创建腾讯云服务空间时会为用户创建腾讯云账号并跳转到腾讯云实名界面，等待实名认证审核之后可以开通服务空间。若腾讯云实名认证提示身份证下已创建过多账户，则需要在腾讯云官网注销不用的账户。[详见](/uniCloud/faq?id=tencent-exceed-account-limit)
- When you create a Tencent Cloud service space for the first time, a Tencent Cloud account will be created for the user and the user will be redirected to the Tencent Cloud real-name interface. The service space can be opened after the real-name verification and verification. If Tencent Cloud real-name authentication indicates that too many accounts have been created under the ID card, you need to cancel the unused accounts on the Tencent Cloud official website. [See details](/uniCloud/faq?id=tencent-exceed-account-limit)
- 创建服务空间可能需要几十秒的时间，可以在web控制台查看是否创建完成。
- It may take dozens of seconds to create a service space. You can check whether the creation is complete in the web console.

## 多人协作@collaboration
## Collaboration @collaboration

> 2022年7月18日前，服务空间的多人协作是在 dev.dcloud.net.cn 的 app 协作中设置。在2022年7月18日后，改为在 unicloud.dcloud.net.cn 设置。
> Before July 18, 2022, the multi-person collaboration in the service space is set up in the app collaboration on dev.dcloud.net.cn. After July 18, 2022, set it on unicloud.dcloud.net.cn instead.

一个服务空间只有一个创建者，但可以设置协作成员。
A service space has only one creator, but collaboration members can be set.

项目涉及多人开发时，在[uniCloud WEB控制台](https://unicloud.dcloud.net.cn)设置协作者（选择服务空间->成员管理），实现多人共同使用一个云服务空间。
When the project involves multi-person development, set up collaborators (select service space -> member management) in the [uniCloud WEB console](https://unicloud.dcloud.net.cn), so that multiple people can use one cloud service space together.

协作者可以在HBuilderX和web控制台中操作被授权的服务空间，除了删除服务空间，其他功能均可正常操作。
Collaborators can operate authorized service spaces in HBuilderX and the web console. Except for deleting service spaces, other functions can operate normally.

授权步骤：
Authorization steps:

1. 登录[uniCloud WEB控制台](https://unicloud.dcloud.net.cn)中选择要添加协作者的服务空间
1. Log in to the [uniCloud WEB console](https://unicloud.dcloud.net.cn) and select the service space where you want to add collaborators
2. 在服务空间详情页面左侧菜单点击`成员管理`
2. On the left menu of the service space details page, click `Member Management`
3. 输入协作者邮箱并点击`搜索`，下方会出现搜索到的结果，确认无误后点击`添加成员`进行添加
3. Enter the collaborator's email and click 'Search', the search results will appear below, and click 'Add member' to add after confirming that it is correct

  ![成员管理](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/space-actor-search.png)
  
4. 下方`成员列表`中可以查看以及移除已添加的协作者
4. You can view and remove the added collaborators in the `member list` below
  
  ![成员列表](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/space-actor-list.png)

**注意**
**Notice**

- 服务空间协作者和App的协作者是2套体系，需要分别设置，无关联关系。App协作者在 dev.dcloud.net.cn 设置。
- The service space collaborator and the app collaborator are two sets of systems, which need to be set separately and are not related. App collaborators are set up at dev.dcloud.net.cn.
- 只有服务空间的创建者才可以添加成员，协作者无此权限
- Only the creator of the service space can add members, collaborators do not have this permission
- 根据法律要求，协作者账号需完成实名认证才可以正常添加
- According to legal requirements, collaborator accounts need to complete real-name authentication before they can be added normally


## 应用和服务空间的关系
## The relationship between application and service space

每个uni-app应用都有一个appid，每个服务空间都有一个spaceid。
Each uni-app application has an appid, and each service space has a spaceid.

服务空间和手机端项目是多对多绑定关系。同DCloud账号下，一个应用可以关联到多个服务空间。一个服务空间也可以被多个项目访问。
The service space and the mobile terminal project are in a many-to-many binding relationship. Under the same DCloud account, an application can be associated with multiple service spaces. A service space can also be accessed by multiple projects.

### 多应用共用服务空间@multi-app
### Multi-app shared service space @multi-app


随着用户使用uniCloud开发的项目越来越多， 部分用户遇到了新的问题。 
As more and more projects developed by users using uniCloud, some users encountered new problems.

两个、多个项目想共用一个云服务空间，比如一个系统，有用户端项目、管理admin项目，两个项目需要公共服务空间。还有司机端、乘客端、用户端、骑手端....很多类似的问题。
Two or more projects want to share a cloud service space. For example, a system has a client project and an admin project. The two projects need a public service space. There are also the driver side, the passenger side, the user side, the rider side... Many similar problems.

如果每个项目目录下都存在多个重复的云函数文件。 每个项目都要做 同步云函数列表， 下载云函数等操作。 繁琐，而且很容易冲突。
If there are multiple duplicate cloud function files in each project directory. Every project needs to do operations such as synchronizing the cloud function list and downloading cloud functions. Cumbersome and prone to conflict.

针对上面出现的问题， 提供了`一云多项目`的解决方案。
In response to the above problems, a solution of `one cloud with multiple projects` is provided.


#### 一云多端
#### One cloud and multiple terminals

##### 绑定其它项目的服务空间
##### Bind the service space of other projects

选中项目下的`uniCloud-aliyun|tcb`目录， 右键菜单，点击 【关联云服务空间或项目... 】 ，可以`关联云服务空间`、`绑定其它项目的服务空间`：
Select the `uniCloud-aliyun|tcb` directory under the project, right-click the menu, click [Associate cloud service space or project...], you can `Associate cloud service space`, `Bind service space of other projects`:

![](https://ask.dcloud.net.cn/uploads/article/20201207/3ab467421c154e83077bb96f1497dec1.gif)

##### 已关联项目
##### Associated Projects

选择关联项目，此时显示的是所有的uniapp项目。用户选择任一uniapp项目进行关联,  关联效果如下图：
Select the associated project, all uniapp projects are displayed at this time. The user selects any uniapp item to associate, and the association effect is as follows:

![](https://ask.dcloud.net.cn/uploads/article/20201207/6eab0accfe8fa00b97972b04773df688.png)


1. 查看关联项目的服务空间：点击后，会在项目管理器打开关联的项目
1. View the service space of the associated project: After clicking, the associated project will be opened in the project manager
2. 解除绑定：解除绑定，会解除绑定关系，可以重新`关联云服务空间`、`绑定其它项目的服务空间`
2. Unbind: Unbinding will unbind the relationship. You can re-`associate the cloud service space`, `bind the service space of other projects`
3. 移动至关联项目xxx下： 会将当前项目的uniCloud目录内容，移动到关联的项目下。
3. Move to the associated project xxx: The contents of the uniCloud directory of the current project will be moved to the associated project.


##### 插件市场导入插件
##### Plugins Market Import Plugins

![](https://ask.dcloud.net.cn/uploads/article/20201207/0d4ab346f103f0a746801a59b9b51c57.png)


#### 特别说明
#### Special Note

> 以阿里云举例， `绑定其它项目的服务空间` 指的是关联其他项目的当前使用的阿里云服务空间。
> Taking Alibaba Cloud as an example, `Bind the service space of other projects` refers to the currently used Alibaba Cloud service space associated with other projects.

1. 阿里云无法关联到腾讯云， 腾讯云也无法关联到阿里云， 但是项目可以关联，使用时会报错。
1. Alibaba Cloud cannot be associated with Tencent Cloud, and Tencent Cloud cannot be associated with Alibaba Cloud, but the project can be associated, and an error will be reported when using it.
2. 如果项目已关联其他项目， 选择云服务空间， 此时关联关系会断开。
2. If the project is associated with other projects, select the cloud service space, and the association will be disconnected.


### 一个应用访问多个服务空间@multi-space
### One application accesses multiple service spaces @multi-space

若应用仅连接一个服务空间，在HBuilderX中做好服务空间关联即可。开发者无需手动做初始化工作（可理解为类调用）。
If the application only connects to one service space, you can do the service space association in HBuilderX. Developers do not need to manually do initialization work (which can be understood as class calls).

```javascript
//项目仅连接了一个服务空间，则无需初始化
//The project is only connected to one service space, so there is no need to initialize
//可通过uniCloud直接调用云开发的API
//The API developed by the cloud can be called directly through uniCloud
uniCloud.callFunction()
uniCloud.uploadFile()
```


若一个应用需要同时连接更多服务空间，HBuilderX中无法绑定更多服务空间。此时需开发者在**客户端代码**中，手动调用初始化方法`uniCloud.init`，连接其他服务空间。
If an application needs to connect more service spaces at the same time, more service spaces cannot be bound in HBuilderX. At this time, the developer needs to manually call the initialization method `uniCloud.init` in the **client code** to connect to other service spaces.

`uniCloud.init`方法会返回一个`uniCloud`实例，之后云函数API的调用都需要通过该`uniCloud`实例发起（类似实例调用）。
The `uniCloud.init` method will return an `uniCloud` instance, and all subsequent cloud function API calls need to be initiated through the `uniCloud` instance (similar to instance calls).

`uniCloud.init`方法定义如下：
The `uniCloud.init` method is defined as follows:

```javascript
function init(options):uniCloud
```

`uniCloud.init`方法接受一个`options`参数，返回`uniCloud`实例，`uniCloud`实例可调用云函数、云存储相关API。
The `uniCloud.init` method accepts an `options` parameter and returns an `uniCloud` instance, which can call cloud functions and cloud storage related APIs.

**注意**
**Notice**

- 云函数会自动识别自己所属的服务空间，调用本服务空间下的资源时无需初始化。
- Cloud functions will automatically identify the service space to which they belong, and do not need to be initialized when calling resources in this service space.
- 云函数环境（仅腾讯云支持）仅能通过init返回同账号下其他的腾讯云服务空间实例。
- The cloud function environment (only supported by Tencent Cloud) can only return other Tencent Cloud service space instances under the same account through init.
- 客户端环境（腾讯云、阿里云均支持）可以通过init返回本账号下任意云厂商服务空间实例
- The client environment (supported by Tencent Cloud and Alibaba Cloud) can return to any cloud vendor service space instance under the account through init

**options 参数说明**
**options parameter description**

|参数名			|类型	|必填	|默认值						|说明																					|
|Parameter Name |Type |Required |Default Value |Description |
|:-:			|:-:	|:-:	|:-:						|:-:																					|
|provider		|String	|是		|-							|aliyun、tencent																		|
|provider		|String	|Yes		|-							|aliyun、tencent																		|
|spaceId		|String	|是		|-							|服务空间ID，**注意是服务空间ID，不是服务空间名称**										|
|spaceId |String |Yes |- |Service space ID, **Note that it is the service space ID, not the service space name** |
|clientSecret	|String	|是		|-							|仅阿里云支持，可以在[uniCloud控制台](https://unicloud.dcloud.net.cn)服务空间列表中查看	|
| clientSecret | String |Yes |- |Only supported by Alibaba Cloud, you can view it in the [uniCloud console](https://unicloud.dcloud.net.cn) service space list |
|endpoint		|String	|否		|`https://api.bspapp.com`	|服务空间地址，仅阿里云支持。商用版请将此参数设为`https://api.next.bspapp.com`														|
| endpoint | String |No |`https://api.bspapp.com` |Service space address, only supported by Alibaba Cloud. For the commercial version, please set this parameter to `https://api.next.bspapp.com` |

**示例代码**
**Sample code**

```javascript
//开发者创建了多个服务空间，则需手动初始化。注意这是前端代码，不是云函数代码
// If the developer creates multiple service spaces, it needs to be initialized manually. Note that this is front-end code, not cloud function code
const myCloud = uniCloud.init({
  provider: 'aliyun',
  spaceId: 'xxxx-yyy',
  clientSecret: 'xxxx'
});
//通过uniCloud实例调用云开发的API
//Call the API developed by the cloud through the uniCloud instance
myCloud.callFunction()
myCloud.uploadFile()

```

uniCloud还支持跨服务空间的数据库访问，另见[文档](https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=init-db)
uniCloud also supports database access across service spaces, see also [documentation](https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=init-db)