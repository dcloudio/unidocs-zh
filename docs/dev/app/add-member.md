开发者在使用 DCloud 平台进行开发时，可能会遇到团队协作的场景，开发者可以通过添加项目成员来完成团队成员的管理。

## 使用场景举例
开发者通过 HBuilderX 进行云端打包时，会校验当前 appid 的用户权限，只有当前用户为该 appid 的所有者或项目成员时，才可以继续提交打包。

## 操作步骤
        
1、使用 DCloud 账号登录[开发者中心](http://dev.dcloud.net.cn)，在添加项目成员之前需要当前账号先完成开发者实名认证，如何进行实名认证请参考文档《[DCloud 开发者实名认证流程](dev/account/real-name-authentication.md)》。
    
2、如果已经完成实名认证，登录后，点击“应用列表”，会看到如下页面，该页面显示了当前用户创建的所有应用。

![](https://web-ext-storage.dcloud.net.cn/doc/dev/app/app-list.png)


3、点击要操作的应用的应用名称，进入应用管理页面，点击上方导航中的“成员管理”，进入成员管理页面。如下图所示：

![](https://web-ext-storage.dcloud.net.cn/doc/dev/app/app-members.png)


4、按照下图所示，输入正确的开发者邮箱后，即可完成授权用户添加操作。如需删除授权用户，在授权用户列表中将对应授权用户删除即可。

![](https://web-ext-storage.dcloud.net.cn/doc/dev/app/app-member-add.png)

## 注意事项
- 如果用户创建的是 wap2app 应用，需要进行过云端打包或提交流应用后，才可以在开发者平台的应用列表中看到该应用的信息。
- 项目成员的账号必须是有效DCloud账号，且已完成邮箱验证，[查看如何注册DCloud账号](../account/reg.md)。
