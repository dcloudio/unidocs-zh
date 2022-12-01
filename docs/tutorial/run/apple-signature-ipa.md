# iOS 标准基座 - Apple证书签名

> 本文档仅适用于MacOSX HBuilderX 3.6.11+

MacOSX HBuilderX 3.6.11+，支持选择标准基座签名后的位置。如下图所示：

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/5971bd01-3960-4c17-afde-c4b23352bb64.jpg" style="zoom: 50%;" />

**保存在HBuilderX插件目录下**

选择`保存在HBuilderX插件目录下`，真机运行时会使用插件目录下的ipa包。具体路径为:

```js
# 正式版
/Applications/HBuilderX.app/Contents/HBuilderX/plugins/launcher/base

# alpha版
/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/base
```


**保存在项目下**

选择存放在项目下，项目运行时，则会使用该目录下的ipa包。具体路径为：`项目目录/unpackage/debug`；如果是cli项目，则是在`dist/debug`目录下。