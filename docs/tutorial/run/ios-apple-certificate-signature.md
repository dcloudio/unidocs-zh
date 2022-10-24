# 使用Apple证书签名iOS标准基座@iOSAppleCertificateSignature

> 此功能仅支持HBuilderX 3.6.8+

因收到苹果公司警告，目前开发者已无法在iOS真机设备使用未签名的标准基座，[更多详情](https://ask.dcloud.net.cn/article/40041)。

HBuilderX 3.6.8+, 开发者可使用自己申请的Apple证书，对标准基座进行本地签名，签名后可运行标准基座到iOS真机设备。
 
## MacOSX

以下操作仅适用于Mac电脑。

选择任意App项目，点击工具栏运行图标，选择【运行到iOS App基座】，在弹出的窗口中，点击按钮【使用Apple证书签名】，如下图

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/159098a4-98e7-45a9-b3f7-a0006933ecf4.jpg" style="zoom: 50%" />

在iOS标准基座签名窗口，输入`Bundle ID`、`证书私钥密码`、`证书profile文件`、`私钥证书P12文件`，即可完成签名。

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/cda9393b-09bf-46d8-bdb9-e0f7e119e1a8.jpg" style="zoom: 50%" />