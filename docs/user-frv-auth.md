# 实人认证

开发者在使用 DCloud 部分服务（如云端打包、uniCloud等）时会要求开发者进行扫脸`实人认证`，与`实名认证`有所不同：

- 实名认证，在开发者中心提交身份证或营业执照进行认证，用于账号归属确认
- 实人认证，在开发者中心通过扫脸进行认证，用于账号安全检测

本文将引导开发者如何完成实人认证。

1、用户使用 HBuilder 账号登录[开发者中心](https://dev.dcloud.net.cn/pages/user/info)，选择 个人中心 => 账户信息 菜单，此时可看到认证信息中的实人认证状态

![](https://web-assets.dcloud.net.cn/unidoc/zh/rpa/frv-auth-status.png)


2、点击`去实人认证`，此时：

- 企业实名认证或未实名认证用户，需填写账号联系人身份信息来进行实人认证
- 个人已实名认证用户，会基于当前账号的实名信息来进行实人认证

两种情况最终都会获得一个实人认证的二维码

![](https://web-assets.dcloud.net.cn/unidoc/zh/rpa/frv-auth-qrcode.png)

3、使用微信或手机浏览器扫码进行扫脸实人认证，扫脸用户需与账号联系人或实名信息一致，否则无法通过。

4、实人认证通过后，可继续使用相应业务。

![](https://web-assets.dcloud.net.cn/unidoc/zh/rpa/frv-auth-success.png)

::: warning 注意
- 实人认证扫脸用户必须与填写的联系人或已实名的身份信息一致，否则无法通过认证。如无法完成，可邮件到 service@dcloud.io 说明情况进行申诉。
:::
