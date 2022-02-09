## 简介

一个服务空间对应一整套独立的云开发资源，包括数据库、存储空间、云函数等资源。服务空间之间彼此隔离。

每个服务空间都有一个全局唯一的space ID。

- 通过 HBuilderX 中管理服务空间，包括新建服务空间和关联服务空间

在 `uniCloud` 目录右键菜单中创建服务空间

<div align=center>
  <img style="max-width:750px;" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/b16f9740-4c05-11eb-8a36-ebb87efcf8c0.jpg"/>
</div>

创建服务空间后，在同样的 `uniCloud` 目录右键菜单中关联该服务空间。只有项目关联好服务空间后，才能上传云函数、操作服务空间下的数据库、存储等资源。

- 通过uniCloud的web控制台[https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn) 管理服务空间。

web控制台可以新建、删除服务空间，管理线上的服务空间资源。

**服务空间数量限制**：每个DCloud开发者账户，腾讯云版提供1个免费服务空间，最多可创建49个收费服务空间。阿里云版最多可创建50个免费服务空间。

**新建服务空间注意**

- 第一次创建腾讯云服务空间时会为开发者创建腾讯云账号并跳转到腾讯云实名界面，等待实名认证审核之后可以开通服务空间。若腾讯云实名认证提示身份证下已创建过多账户，则需要在腾讯云官网注销不用的账户，然后重试。
- 创建服务空间可能需要几十秒的时间，可以在web控制台查看是否创建完成。

## 多人协作

一个服务空间只有一个创建者，但可以设置协作者。

项目涉及多人开发时，在[dev.dcloud.net.cn](https://dev.dcloud.net.cn)设置协作者（选择应用->设置项目成员），实现多人共同使用一个云服务空间。

协作者可以在HBuilderX和web控制台中操作被授权的服务空间，除了删除服务空间，其他功能均可正常操作。

授权步骤：

1. 在开发者中心`我创建的应用`列表页面选择特定的应用，如果应用过多可以使用AppId进行查找

  ![我创建的应用](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/865a0df3-3169-48df-8b4c-8acacf1a621f.jpg)
  
2. 在第一步选择的应用详情页面左侧菜单点击`项目成员管理`
3. 输入协作者邮箱并点击`添加协作者按钮`，下方会出现协作者权限配置界面

  ![项目成员管理](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/2e59ce9b-f202-4432-954c-d6182187ef94.jpg)
  
4. 勾选uniCloud并点击`设置授权服务空间`，在弹出界面勾选希望此协作者访问的服务空间
  
  ![设置授权服务空间](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/b3c234a7-e514-4b14-b33d-e7322130bd7d.jpg)

5. 点击第4步弹出界面的`保存按钮`以及第3步的`保存权限设置`按钮

6. 协作者如需在uni-app项目关联此服务空间，需要在项目的`manifest.json`内配置上共享的应用的AppId（需要在源码视图编辑manifest.json）

## 应用和服务空间的关系

每个uni-app应用都有一个appid，每个服务空间都有一个spaceid。

服务空间和手机端项目是多对多绑定关系。同DCloud账号下，一个应用可以关联到多个服务空间。一个服务空间也可以被多个项目访问。

### 多应用共用服务空间

比如一个项目的用户端和管理端，在HBuilderX里可以创建成2个项目，但2个项目的服务空间可以指向一个，或者干脆把其中一个项目的服务空间绑定到另一个项目上。

[详见](https://ask.dcloud.net.cn/article/37949)

### 一个应用访问多个服务空间

若应用仅连接一个服务空间，在HBuilderX中做好服务空间关联即可。开发者无需手动做初始化工作（可理解为类调用）。

```
//项目仅连接了一个服务空间，则无需初始化
//可通过uniCloud直接调用云开发的API
uniCloud.callFunction()
uniCloud.uploadFile()
```


若一个应用需要同时连接更多服务空间，HBuilderX中无法绑定更多服务空间。此时需开发者在**客户端代码**中，手动调用初始化方法`uniCloud.init`，连接其他服务空间。

`uniCloud.init`方法会返回一个`uniCloud`实例，之后云函数API的调用都需要通过该`uniCloud`实例发起（类似实例调用）。

`uniCloud.init`方法定义如下：

```
function init(options):uniCloud
```

`uniCloud.init`方法接受一个`options`参数，返回`uniCloud`实例，`uniCloud`实例可调用云函数、云存储相关API。

**options 参数说明**

|参数名			|类型	|必填	|默认值						|说明																					|
|:-:			|:-:	|:-:	|:-:						|:-:																					|
|provider		|String	|是		|-							|aliyun、tencent																		|
|spaceId		|String	|是		|-							|服务空间ID，**注意是服务空间ID，不是服务空间名称**										|
|clientSecret	|String	|是		|-							|仅阿里云支持，可以在[uniCloud控制台](https://unicloud.dcloud.net.cn)服务空间列表中查看	|
|endpoint		|String	|否		|`https://api.bspapp.com`	|服务空间地址，仅阿里云侧支持															|

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

**Tips：**

- 云函数会自动识别自己所属的服务空间，无需初始化。
- 腾讯云支持在云函数内初始化本账号下的其他服务空间

uniCloud还支持跨服务空间的数据库访问，另见[文档](https://uniapp.dcloud.net.cn/uniCloud/init?id=init-db)