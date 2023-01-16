# 使用Apple证书签名iOS标准基座@iOSAppleCertificateSignature

> mac需HBuilderX 3.6.9+；

> win需HBuilderX 3.6.20+

因苹果公司禁止企业证书用于非企业内部开发者。所以开发者无法再使用DCloud的企业证书签名的标准运行基座。

运行标准基座到iOS真机设备前，需要使用开发者的证书对基座签名后才能运行。（运行到xcode模拟器不受限制）

**注意：**: `HBuilderX每次升级，因为标准基座更新，都需要重新对iOS标准基座进行签名。`

## 如何用Apple证书对iOS标准基座签名

选择任意App项目，点击工具栏运行图标，选择【运行到iOS App基座】，在弹出的窗口中，点击按钮【使用Apple证书签名】，如下图

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/ios%E6%A0%87%E5%87%86%E5%9F%BA%E5%BA%A7%E7%AD%BE%E5%90%8D1.jpg" style="zoom: 50%" />

在iOS标准基座签名窗口，输入`Bundle ID`、`证书私钥密码`、`证书profile文件`、`私钥证书P12文件`，即可完成签名。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/ios%E6%A0%87%E5%87%86%E5%9F%BA%E5%BA%A7%E7%AD%BE%E5%90%8D2.jpg" style="zoom: 50%" />

## 其他签名方案

Windows系统，HBuilderX 3.6.20以下版本，没有内置重签功能，开发者可以使用三方工具（如爱思助手）对标准基座签名。

Windows, iOS标准基座路径：`HBuilderX安装目录\plugins\launcher\base\iPhone_base.ipa`，如下所示：

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/windows_ios%E6%A0%87%E5%87%86%E5%9F%BA%E5%BA%A7%E7%AD%BE%E5%90%8D_1.jpg" style="zoom: 50%" />

下面讲描述如何使用爱思助手对iOS标准基座签名。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/windows_ios%E6%A0%87%E5%87%86%E5%9F%BA%E5%BA%A7%E7%AD%BE%E5%90%8D_2.jpg" style="zoom: 50%" />

如果签名成功，爱思助手会提示签名成功。签名成功后，找到签名后的ipa文件，并命名为`iPhone_base_signed.ipa`，然后将其拷贝到`HBuilderX安装目录\plugins\launcher\base`。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/windows_ios%E6%A0%87%E5%87%86%E5%9F%BA%E5%BA%A7%E7%AD%BE%E5%90%8D_3.jpg" style="zoom: 50%" />

上述操作完成后，打开HBuilderX，选择要运行的项目，点击工具栏运行图标，选择【运行到iOS App基座】，如下图所示，即可运行标准基座到iOS真机了。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/windows_ios%E6%A0%87%E5%87%86%E5%9F%BA%E5%BA%A7%E7%AD%BE%E5%90%8D_4.jpg" style="zoom: 50%" >

