## 简介

一个服务空间对应一整套独立的云开发资源，包括数据库、存储空间、云函数等资源。服务空间之间彼此隔离。

每个服务空间都有一个全局唯一的space ID。

- 通过 HBuilderX 中管理服务空间，包括新建服务空间和关联服务空间

在 `uniCloud` 目录右键菜单中创建服务空间

<div align=center>
  <img style="max-width:750px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/create1.jpg"/>
</div>

创建服务空间后，在同样的 `uniCloud` 目录右键菜单中关联该服务空间。只有项目关联好服务空间后，才能上传云函数、操作服务空间下的数据库、存储等资源。

- 通过uniCloud的web控制台[https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn) 管理服务空间。

web控制台可以新建、删除服务空间，管理线上的服务空间资源。


**新建服务空间注意**

- 第一次创建腾讯云服务空间时会为用户创建腾讯云账号并跳转到腾讯云实名界面，等待实名认证审核之后可以开通服务空间。若腾讯云实名认证提示身份证下已创建过多账户，则需要在腾讯云官网注销不用的账户。[详见](/uniCloud/faq?id=tencent-exceed-account-limit)
- 创建服务空间可能需要几十秒的时间，可以在web控制台查看是否创建完成。

## 多人协作@collaboration

> 2022年7月18日前，服务空间的多人协作是在 dev.dcloud.net.cn 的 app 协作中设置。在2022年7月18日后，改为在 unicloud.dcloud.net.cn 设置。

一个服务空间只有一个创建者，但可以设置协作成员。

项目涉及多人开发时，在[uniCloud WEB控制台](https://unicloud.dcloud.net.cn)设置协作者（选择服务空间->成员管理），实现多人共同使用一个云服务空间。

协作者可以在HBuilderX和web控制台中操作被授权的服务空间，除了删除服务空间，其他功能均可正常操作。

授权步骤：

1. 登录[uniCloud WEB控制台](https://unicloud.dcloud.net.cn)中选择要添加协作者的服务空间
2. 在服务空间详情页面左侧菜单点击`成员管理`
3. 输入协作者邮箱并点击`搜索`，下方会出现搜索到的结果，确认无误后点击`添加成员`进行添加

  ![成员管理](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/space-actor-search.png)
  
4. 下方`成员列表`中可以查看以及移除已添加的协作者
  
  ![成员列表](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/space-actor-list.png)

**注意**

- 服务空间协作者和App的协作者是2套体系，需要分别设置，无关联关系。App协作者在 dev.dcloud.net.cn 设置。
- 只有服务空间的创建者才可以添加成员，协作者无此权限
- 根据法律要求，协作者账号需完成实名认证才可以正常添加


## 应用和服务空间的关系

每个uni-app应用都有一个appid，每个服务空间都有一个spaceid。

服务空间和手机端项目是多对多绑定关系。同DCloud账号下，一个应用可以关联到多个服务空间。一个服务空间也可以被多个项目访问。

### 多应用共用服务空间@multi-app


随着用户使用uniCloud开发的项目越来越多， 部分用户遇到了新的问题。 

两个、多个项目想共用一个云服务空间，比如一个系统，有用户端项目、管理admin项目，两个项目需要公共服务空间。还有司机端、乘客端、用户端、骑手端....很多类似的问题。

如果每个项目目录下都存在多个重复的云函数文件。 每个项目都要做 同步云函数列表， 下载云函数等操作。 繁琐，而且很容易冲突。

针对上面出现的问题， 提供了`一云多项目`的解决方案。


#### 一云多端

##### 绑定其它项目的服务空间

选中项目下的`uniCloud-alipay|aliyun|tcb`目录， 右键菜单，点击 【关联云服务空间或项目... 】 ，可以`关联云服务空间`、`绑定其它项目的服务空间`：

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/202310241639174.png)

##### 已关联项目

选择关联项目，此时显示的是所有的uniapp项目。用户选择任一uniapp项目进行关联,  关联效果如下图：

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/202310241640206.png)

1. 查看关联项目的服务空间：点击后，会在项目管理器打开关联的项目
2. 解除绑定：解除绑定，会解除绑定关系，可以重新`关联云服务空间`、`绑定其它项目的服务空间`
3. 移动至关联项目xxx下： 会将当前项目的uniCloud目录内容，移动到关联的项目下。


##### 插件市场导入插件

![](https://ask.dcloud.net.cn/uploads/article/20201207/0d4ab346f103f0a746801a59b9b51c57.png)


#### 特别说明

> 以阿里云举例， `绑定其它项目的服务空间` 指的是关联其他项目的当前使用的阿里云服务空间。

1. 阿里云无法关联到腾讯云， 腾讯云也无法关联到阿里云， 但是项目可以关联，使用时会报错。
2. 如果项目已关联其他项目， 选择云服务空间， 此时关联关系会断开。


### 一个应用访问多个服务空间@multi-space

若应用仅连接一个服务空间，在HBuilderX中做好服务空间关联即可。开发者无需手动做初始化工作（可理解为类调用）。

```javascript
//项目仅连接了一个服务空间，则无需初始化
//可通过uniCloud直接调用云开发的API
uniCloud.callFunction()
uniCloud.uploadFile()
```


若一个应用需要同时连接更多服务空间，HBuilderX中无法绑定更多服务空间。此时需开发者在**客户端代码**中，手动调用初始化方法`uniCloud.init`，连接其他服务空间。

`uniCloud.init`方法会返回一个`uniCloud`实例，之后云函数API的调用都需要通过该`uniCloud`实例发起（类似实例调用）。

`uniCloud.init`方法定义如下：

```javascript
function init(options):uniCloud
```

`uniCloud.init`方法接受一个`options`参数，返回`uniCloud`实例，`uniCloud`实例可调用云函数、云存储相关API。

**注意**

- 云函数会自动识别自己所属的服务空间，调用本服务空间下的资源时无需初始化。
- 云函数环境（仅腾讯云支持）仅能通过init返回同账号下其他的腾讯云服务空间实例。
- 客户端环境（腾讯云、阿里云均支持）可以通过init返回本账号下任意云厂商服务空间实例

**options 参数说明**

|    参数名			     |   类型	   | 必填	 |                                          默认值						                                          |                                说明																					                                |
|:-------------:|:-------:|:---:|:-------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------:|
|  provider		   | String	 | 是		 |                                          -							                                           |                        aliyun、tencent、alipay																		                        |
|   spaceId		   | String	 | 是		 |                                          -							                                           |                        服务空间ID，**注意是服务空间ID，不是服务空间名称**										                        |
| clientSecret	 | String	 | 是		 |                                          -							                                           |           仅阿里云支持，可以在[uniCloud控制台](https://unicloud.dcloud.net.cn)服务空间列表中查看	           |
|   accessKey   | String  |  是  |                                              -                                              |         仅支付宝小程序云支持, 可以在[uniCloud控制台](https://unicloud.dcloud.net.cn)服务空间详情中查看         |
|   secretKey   | String  |  是  |                                              -                                              |         仅支付宝小程序云支持, 可以在[uniCloud控制台](https://unicloud.dcloud.net.cn)服务空间详情中查看         |
|  spaceAppId   | String  |  是  |                                              -                                              |         仅支付宝小程序云支持, 可以在[uniCloud控制台](https://unicloud.dcloud.net.cn)服务空间详情中查看         |
|  endpoint		   | String	 | 否		 | 阿里云：`https://api.bspapp.com`；<br/> 支付宝小程序云：`https://{spaceId}.api-hz.cloudbasefunction.cn`	 | 服务空间地址，仅阿里云与支付宝小程序云支持。<br /> 阿里云商用版请将此参数设为`https://api.next.bspapp.com`														 |

**示例代码**

```javascript
//开发者创建了多个服务空间，则需手动初始化。注意这是前端代码，不是云函数代码
const myCloud = uniCloud.init({
  provider: 'aliyun',
  spaceId: 'xxxx-yyy',
  clientSecret: 'xxxx'
});
//通过uniCloud实例调用云开发的API
myCloud.callFunction()
myCloud.uploadFile()

```

uniCloud还支持跨服务空间的数据库访问，另见[文档](https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=init-db)
