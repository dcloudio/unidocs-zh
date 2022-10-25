# 使用Apple证书签名iOS标准基座@iOSAppleCertificateSignature

> 此功能仅支持HBuilderX 3.6.8+

因收到苹果公司警告，目前开发者已无法在iOS真机设备使用未签名的标准基座，[更多详情](https://ask.dcloud.net.cn/article/40041)。

HBuilderX 3.6.8+, 开发者可使用自己申请的Apple证书，对标准基座进行本地签名，签名后可运行标准基座到iOS真机设备。

**注意：**: `HBuilderX每次升级，都需要手动对iOS标准基座进行签名。`

## MacOSX

以下操作仅适用于Mac电脑。

选择任意App项目，点击工具栏运行图标，选择【运行到iOS App基座】，在弹出的窗口中，点击按钮【使用Apple证书签名】，如下图

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/159098a4-98e7-45a9-b3f7-a0006933ecf4.jpg" style="zoom: 50%" />

在iOS标准基座签名窗口，输入`Bundle ID`、`证书私钥密码`、`证书profile文件`、`私钥证书P12文件`，即可完成签名。

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/cda9393b-09bf-46d8-bdb9-e0f7e119e1a8.jpg" style="zoom: 50%" />

## Windows

Windows系统，目前HBuilderX无法像MacOSX那样对标准基座进行签名，开发者可以使用三方工具（如爱思助手）对标准基座签名。

Windows, iOS标准基座路径：`HBuilderX安装目录\plugins\launcher\base\iPhone_base.ipa`，如下所示：

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/492cdb81-ea20-4077-844f-154bef1838d8.jpg" style="zoom: 50%" />

下面讲描述如何使用爱思助手对iOS标准基座签名。

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/96dc25ee-b4ec-4fae-936f-f874c33ab9cd.jpg" style="zoom: 50%" />

如果签名成功，爱思助手会提示签名成功。签名成功后，找到签名后的ipa文件，并命名为`iPhone_base_signed.ipa`，然后将其拷贝到`HBuilderX安装目录\plugins\launcher\base`。

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/b2028ea5-1636-4b88-bb42-a9d3897fff49.jpg" style="zoom: 50%" />

上述操作完成后，打开HBuilderX，选择要运行的项目，点击工具栏运行图标，选择【运行到iOS App基座】，如下图所示，即可运行标准基座到iOS真机了。

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a507b390-59ae-4cfd-85f3-82887ee92c9b.jpg" style="zoom: 50%" >

