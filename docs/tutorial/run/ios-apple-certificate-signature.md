# 使用Apple证书签名iOS标准基座@iOSAppleCertificateSignature
# Use Apple certificate to sign iOS standard base @iOSAppleCertificateSignature

> mac需HBuilderX 3.6.9+；
> Mac requires HBuilderX 3.6.9+;

> win需HBuilderX 3.6.20+
> Win requires HBuilderX 3.6.20+

因苹果公司禁止企业证书用于非企业内部开发者。所以开发者无法再使用DCloud的企业证书签名的标准运行基座。
Because Apple prohibits enterprise certificates from being used by non-enterprise internal developers. Therefore, developers can no longer use DCloud's standard operating base signed by the enterprise certificate.

运行标准基座到iOS真机设备前，需要使用开发者的证书对基座签名后才能运行。（运行到xcode模拟器不受限制）
Before running the standard base to the real iOS device, the base needs to be signed with the developer's certificate before it can run. (Runs to xcode simulator unrestricted)

**注意：**: `HBuilderX每次升级，因为标准基座更新，都需要重新对iOS标准基座进行签名。`
**Note:**: `Every time HBuilderX is upgraded, because the standard base is updated, the iOS standard base needs to be re-signed. `

## 如何用Apple证书对iOS标准基座签名
## How to sign iOS standard base with Apple certificate

选择任意App项目，点击工具栏运行图标，选择【运行到iOS App基座】，在弹出的窗口中，点击按钮【使用Apple证书签名】，如下图
Select any App item, click the run icon on the toolbar, select [Run to iOS App Dock], and in the pop-up window, click the button [Sign with Apple Certificate], as shown in the figure below

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/ios%E6%A0%87%E5%87%86%E5%9F%BA%E5%BA%A7%E7%AD%BE%E5%90%8D1.jpg" style="zoom: 50%" />

在iOS标准基座签名窗口，输入`Bundle ID`、`证书私钥密码`、`证书profile文件`、`私钥证书P12文件`，即可完成签名。
In the iOS standard base signature window, enter `Bundle ID`, `Certificate Private Key Password`, `Certificate Profile File`, `Private Key Certificate P12 File` to complete the signature.

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/ios%E6%A0%87%E5%87%86%E5%9F%BA%E5%BA%A7%E7%AD%BE%E5%90%8D2.jpg" style="zoom: 50%" />

## 其他签名方案
## Other signature schemes

Windows系统，HBuilderX 3.6.20以下版本，没有内置重签功能，开发者可以使用三方工具（如爱思助手）对标准基座签名。
For Windows systems, versions below HBuilderX 3.6.20 do not have a built-in re-sign function. Developers can use third-party tools (such as Aisi Assistant) to sign the standard base.

Windows, iOS标准基座路径：`HBuilderX安装目录\plugins\launcher\base\iPhone_base.ipa`，如下所示：
Windows, iOS standard base path: `HBuilderX installation directory\plugins\launcher\base\iPhone_base.ipa`, as follows:

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/windows_ios%E6%A0%87%E5%87%86%E5%9F%BA%E5%BA%A7%E7%AD%BE%E5%90%8D_1.jpg" style="zoom: 50%" />

下面讲描述如何使用爱思助手对iOS标准基座签名。
The following describes how to use Aisi Assistant to sign the iOS standard base.

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/windows_ios%E6%A0%87%E5%87%86%E5%9F%BA%E5%BA%A7%E7%AD%BE%E5%90%8D_2.jpg" style="zoom: 50%" />

如果签名成功，爱思助手会提示签名成功。签名成功后，找到签名后的ipa文件，并命名为`iPhone_base_signed.ipa`，然后将其拷贝到`HBuilderX安装目录\plugins\launcher\base`。
If the signature is successful, Aisi Assistant will prompt that the signature is successful. After the signature is successful, find the signed ipa file and name it `iPhone_base_signed.ipa`, and then copy it to `HBuilderX installation directory\plugins\launcher\base`.

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/windows_ios%E6%A0%87%E5%87%86%E5%9F%BA%E5%BA%A7%E7%AD%BE%E5%90%8D_3.jpg" style="zoom: 50%" />

上述操作完成后，打开HBuilderX，选择要运行的项目，点击工具栏运行图标，选择【运行到iOS App基座】，如下图所示，即可运行标准基座到iOS真机了。
After the above operations are completed, open HBuilderX, select the project to run, click the run icon on the toolbar, and select [Run to iOS App Dock], as shown in the figure below, you can run the standard dock to the real iOS device.

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/windows_ios%E6%A0%87%E5%87%86%E5%9F%BA%E5%BA%A7%E7%AD%BE%E5%90%8D_4.jpg" style="zoom: 50%" >

