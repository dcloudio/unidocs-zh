# iOS 标准基座 - Apple证书签名
# iOS Standard Dock - signed by Apple certificate

> 本文档仅适用于MacOSX HBuilderX 3.6.11+
> This document is only applicable to MacOSX HBuilderX 3.6.11+

MacOSX HBuilderX 3.6.11+，支持选择标准基座签名后的位置。如下图所示：
MacOSX HBuilderX 3.6.11+, supports selecting the location after the standard base signature. As shown below:

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/ipa_save.jpg" style="zoom: 50%;" />

**保存在HBuilderX插件目录下**
**Saved in the HBuilderX plug-in directory**

选择`保存在HBuilderX插件目录下`，真机运行时会使用插件目录下的ipa包。具体路径为:
Select `Save in the HBuilderX plug-in directory`, and the ipa package in the plug-in directory will be used when running on the real machine. The specific path is:

```js
# 正式版
/Applications/HBuilderX.app/Contents/HBuilderX/plugins/launcher/base

# alpha版
/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/base
```


**保存在项目下**
**Save under project**

选择存放在项目下，项目运行时，则会使用该目录下的ipa包。具体路径为：`项目目录/unpackage/debug`；如果是cli项目，则是在`dist/debug`目录下。
Choose to store under the project, and the ipa package in this directory will be used when the project is running. The specific path is: `project directory/unpackage/debug`; if it is a cli project, it is in the `dist/debug` directory.