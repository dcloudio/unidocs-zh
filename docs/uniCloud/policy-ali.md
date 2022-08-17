## 简介
## Introduction

云开发提供了一套简明易懂的JSON语法用来控制**客户端**对资源的访问，类似于身份验证体系里的IAM或者网络权限中的ACL。您可以在控制台上通过修改默认权限规则来管理数据表的权限。
Cloud Development provides a set of concise and easy-to-understand JSON syntax to control **client** access to resources, similar to IAM in the authentication system or ACL in network permissions. You can manage permissions for data tables by modifying the default permission rules on the console.

**注意**
**Notice**

- 权限控制仅针对客户端
- Permission control is only for clients

**阿里云侧目前实现为由开发者自行控制登录状态，所以auth相关的权限判断条件不会生效**
**The current implementation of Alibaba Cloud is that the developer controls the login status by themselves, so the auth-related permission judgment conditions will not take effect**

## 云数据库
## Cloud database

开发者可以在uniCloud控制台设置数据库权限，如下图所示
Developers can set database permissions in the uniCloud console, as shown below

**此处需补充uniCloud控制台截图【uniCloud替换标记】**
**Here needs to supplement the screenshot of uniCloud console [uniCloud replacement mark]**

**目前实现端上不可直接访问数据库，推荐将数据表权限设置为以下形式**
**At present, the database cannot be directly accessed on the implementation side. It is recommended to set the permissions of the data table to the following form**

```
{
  "db": {
    "*": {
      ".read": false,
      ".write": false,
      "*": false
    }
  }
}
```

## 云存储
## cloud storage

阿里侧端上直接上传文件到云存储的功能正在完善中，开发者可以先将云存储配置为客户端不可读写
The function of uploading files directly to cloud storage on Alibaba's side terminal is being improved. Developers can configure cloud storage to be non-readable and writable by the client first.

**权限配置示例**
**Permission configuration example**

```
{
  "file": {
    "*": {
      "*": false
    }
  }
}
```



