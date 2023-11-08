> 本文档意在介绍如何在uni-app中引用和使用小程序插件，如果想了解如何把uni-app项目编译为小程序插件，另见文档：[发布为小程序插件](mp-weixin-plugin-dev.md)
> This document is intended to introduce how to reference and use applet plugins in uni-app. If you want to know how to compile a uni-app project into a applet plugin, please refer to the document: [Publish as applet plugin](mp-weixin-plugin-dev.md)

#### 什么是小程序插件 @mp-plugin
#### What is a Mini Program Plugin @mp-plugin

小程序插件不同于小程序自定义组件。
The applet plug-in is different from the applet custom component.

小程序自定义组件是将组件源码导入到工程中，整体发布。
The applet custom component is to import the component source code into the project and release it as a whole.

小程序插件是第三方插件作者按照微信等小程序厂商规范开发的独立插件，直接发布到小程序的插件平台。开发者在自己的小程序工程里只配置插件id，并不把插件源码导入工程。在运行期，由小程序引擎动态联网装载。开发者无法获取引入的三方小程序插件的源码。
Mini Program plug-ins are independent plug-ins developed by third-party plug-in authors in accordance with the specifications of small program manufacturers such as WeChat, and are directly published to the plug-in platform of Mini Programs. The developer only configures the plug-in id in his applet project, and does not import the plug-in source code into the project. During runtime, it is dynamically loaded by the applet engine. The developer cannot obtain the source code of the imported third-party applet plug-in.

在不同的小程序内叫法可能略有区别。微信小程序、支付宝小程序中叫`插件`，百度小程序中叫`动态库`，方便起见，以下统一称为插件。
It may be called slightly differently in different Mini Programs. WeChat applet and Alipay applet are called `plug-in`, and Baidu applet is called `dynamic library`. For convenience, they are collectively referred to as plugins below.

**参考文档**
**Reference Documentation**

- [微信小程序插件](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)
- [WeChat Mini Program Plugin](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)
- [支付宝小程序插件](https://opendocs.alipay.com/mini/plugin/plugin-usage)
- [Alipay Mini Program Plugin](https://opendocs.alipay.com/mini/plugin/plugin-usage)
- [百度小程序动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)
- [Baidu Mini Program Dynamic Library](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)
- [QQ小程序插件](https://q.qq.com/wiki/develop/miniprogram/frame/plugins/)
- [QQ Mini Program Plugin](https://q.qq.com/wiki/develop/miniprogram/frame/plugins/)

#### 在uni-app中引入插件代码包 @import-mp-plugin
#### Import plugin code package in uni-app @import-mp-plugin

在`manifest.json`中的各平台对应的字段内声明使用的插件，具体配置参照所用插件的开发文档
Declare the plug-ins used in the fields corresponding to each platform in `manifest.json`. For specific configuration, refer to the development documents of the plug-ins used.

**代码示例**
**CODE EXAMPLE**

```json
// 微信小程序
// WeChat applet
"mp-weixin": {
  "plugins": {
    "myPlugin": {
      "version": "1.0.0",
      "provider": "wxidxxxxxxxxxxxxxxxx",
      "export": "index.js"
    }
  }
}

// 支付宝小程序
// Alipay applet
"mp-alipay": {
  "plugins": {
    "myPlugin": {
      "version": "*",
      "provider": "2019235609092837",
      "export": "index.js"
    }
  }
}

// 百度小程序
// Baidu applet
"mp-baidu": {
  "dynamicLib": {
    "myPlugin": {
      "provider": "TheUniqueNameOwnedByThisDynamicLib"
    }
  }
}
```

**注意**
**Notice**

- `HBuilder X 3.2.13+` 支持 `export` 字段，即小程序导出到插件。目前仅 微信小程序 和 支付宝小程序 支持
- `HBuilder X 3.2.13+` supports the `export` field, that is, the applet is exported to the plugin. Currently only WeChat applet and Alipay applet are supported

#### 在页面中使用插件 @page-import-mp-plugin
#### Using plugins in pages @page-import-mp-plugin

> 使用插件提供的自定义组件，和使用普通自定义组件的方式相仿。在 json 文件定义需要引入的自定义组件时，使用 plugin:// 协议指明插件的引用名和自定义组件名
> Use custom components provided by plugins in the same way as normal custom components. When the json file defines the custom component that needs to be imported, use the plugin:// protocol to specify the reference name of the plugin and the name of the custom component

在页面内使用插件内包含的组件需要在`pages.json`内对应页面的`style`节点下配置对应平台的`usingComponents`或`usingSwanComponents`，示例如下：
To use the components contained in the plugin in the page, you need to configure the `usingComponents` or `usingSwanComponents` of the corresponding platform under the `style` node of the corresponding page in `pages.json`, for example:

以`"hello-component": "plugin://myPlugin/hello-component"`为例，`key`（冒号前的`hello-component`）为在页面内使用的组件名称。
Take `"hello-component": "plugin://myPlugin/hello-component"` as an example, `key` (`hello-component` before the colon) is the component name used in the page.

`value`分为三段，`plugin`为协议（在百度小程序内为`dynamicLib`），`myPlugin`为插件名称即引入插件时的名称，`hello-component`为插件暴露的组件名称。
`value` is divided into three sections, `plugin` is the protocol (`dynamicLib` in the Baidu applet), `myPlugin` is the name of the plugin, that is, the name when the plugin is introduced, and `hello-component` is the name of the component exposed by the plugin.

```json
// 微信小程序
// WeChat applet
{
  "path": "pages/index/index",
  "style": {
    "mp-weixin": {
      "usingComponents": {
        "hello-component": "plugin://myPlugin/hello-component"
      }
    }
  }
}

// 支付宝小程序
// Alipay applet
{
  "path": "pages/index/index",
  "style": {
    "mp-alipay": {
      "usingComponents": {
        "hello-component": "plugin://myPlugin/hello-component"
      }
    }
  }
}

// 百度小程序 注意 HBuilder 3.1.0 以下部分插件需使用 usingSwanComponents
// Baidu MiniApp note that some plug-ins below HBuilder 3.1.0 need to use usingSwanComponents
{
  "path": "pages/index/index",
  "style": {
    "mp-baidu": {
      "usingComponents": {
        "my-special-list": "dynamicLib://myDynamicLib/special-list"
      }
    }
  }
}

```

页面上使用。代码示例：
used on the page. Code example:

```html
<!-- 微信小程序和支付宝小程序 -->
<!-- WeChat applet and Alipay applet -->
<navigator url="plugin://myPlugin/hello-component">
  Go to pages/hello-page!
</navigator>

<!-- 百度小程序 -->
<!-- Baidu Mini Program -->
<view class="container">
    <view>下面这个自定义组件来自于动态库</view>
    <!-- 这里的 'my-special-list' 就是本页面中对于此自定义组件的别名 -->
    <!-- 'my-special-list' here is the alias for this custom component on this page -->
    <my-special-list />
</view>
```

#### 在分包内引入插件代码包 @subpackages-import-mp-plugin
#### Import plugin code package in subpackage @subpackages-import-mp-plugin

支付宝小程序、百度小程序不支持在分包内引入插件。此外如果项目使用了分包，在支付宝小程序内不可使用插件。本节内容仅针对微信小程序。
Alipay applet and Baidu applet do not support the introduction of plug-ins into subcontracts. In addition, if the project uses subcontracting, plug-ins cannot be used in the Alipay applet. The content in this section is only for WeChat Mini Programs.

如果插件只在（同一个插件不能被多个分包同时引用）一个分包用到，可以单独配置到分包中，这样插件不会随主包加载，开发者可以在``pages.json``的[subPackages](/collocation/pages?id=subpackages)中声明插件
If the plugin is only used in one sub-package (the same plugin cannot be referenced by multiple sub-packages at the same time), it can be configured into the sub-package separately, so that the plugin will not be loaded with the main package, the developer can add it in ``pages.json` `Declare plugins in [subPackages](/collocation/pages?id=subpackages)

**代码示例**
**CODE EXAMPLE**

```json
"subPackages": [{
    "root": "pagesA",
    "pages": [{
        "path": "list/list"
    }]
    "plugins": {
        "pluginName": {
            "version": "1.0.0",
            "provider": "wxidxxxxxxxxxxxxxxxx"
        }
    }
}]
```

**在分包内使用插件的限制**
**Restrictions on using plugins in subpackages**

* 仅能在这个分包内使用该插件；
* The plugin can only be used within this subpackage;
* 同一个插件不能被多个分包同时引用；
* The same plugin cannot be referenced by multiple subpackages at the same time;
* 不能从分包外的页面直接跳入分包内的插件页面，需要先跳入分包内的非插件页面、再跳入同一分包内的插件页面。
* You cannot jump directly to the plug-in page in the sub-contract from the page outside the sub-contract. You need to jump to the non-plug-in page in the sub-contract first, and then jump to the plug-in page in the same sub-contract.


#### 可能遇到的问题 @mp-plugin-issue
#### Possible issues @mp-plugin-issue

* 某些插件可能会需要一些权限才能正常运行，请在`manifest.json`中的`mp-weixin`内配置`permission`[详见](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)
* Some plugins may require some permissions to run properly, please configure `permission` in `mp-weixin` in `manifest.json` [see details](https://developers.weixin.qq.com/miniprogram /dev/reference/configuration/app.html#permission)
* 微信开发工具提示 “插件版本不存在”，可能是插件开发文档示例代码中使用的版本已经不存在，请在声明插件处更改版本
* The WeChat development tool prompts "plug-in version does not exist", it may be that the version used in the sample code of the plug-in development documentation does not exist, please change the version at the declaration of the plug-in



