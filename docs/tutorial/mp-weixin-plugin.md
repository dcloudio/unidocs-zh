> 本文档意在介绍如何在uni-app中引用和使用小程序插件，如果想了解如何把uni-app项目编译为小程序插件，另见文档：[发布为小程序插件](mp-weixin-plugin-dev.md)

#### 什么是小程序插件 @mp-plugin

小程序插件不同于小程序自定义组件。

小程序自定义组件是将组件源码导入到工程中，整体发布。

小程序插件是第三方插件作者按照微信等小程序厂商规范开发的独立插件，直接发布到小程序的插件平台。开发者在自己的小程序工程里只配置插件id，并不把插件源码导入工程。在运行期，由小程序引擎动态联网装载。开发者无法获取引入的三方小程序插件的源码。

在不同的小程序内叫法可能略有区别。微信小程序、支付宝小程序中叫`插件`，百度小程序中叫`动态库`，方便起见，以下统一称为插件。

**参考文档**

- [微信小程序插件](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)
- [支付宝小程序插件](https://opendocs.alipay.com/mini/plugin/plugin-usage)
- [百度小程序动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)
- [QQ小程序插件](https://q.qq.com/wiki/develop/miniprogram/frame/plugins/)

#### 在uni-app中引入插件代码包 @import-mp-plugin

在`manifest.json`中的各平台对应的字段内声明使用的插件，具体配置参照所用插件的开发文档

**代码示例**

```json
// 微信小程序
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
"mp-baidu": {
  "dynamicLib": {
    "myPlugin": {
      "provider": "TheUniqueNameOwnedByThisDynamicLib"
    }
  }
}
```

**注意**

- `HBuilder X 3.2.13+` 支持 `export` 字段，即小程序导出到插件。目前仅 微信小程序 和 支付宝小程序 支持

#### 在页面中使用插件 @page-import-mp-plugin

> 使用插件提供的自定义组件，和使用普通自定义组件的方式相仿。在 json 文件定义需要引入的自定义组件时，使用 plugin:// 协议指明插件的引用名和自定义组件名

在页面内使用插件内包含的组件需要在`pages.json`内对应页面的`style`节点下配置对应平台的`usingComponents`或`usingSwanComponents`，示例如下：

以`"hello-component": "plugin://myPlugin/hello-component"`为例，`key`（冒号前的`hello-component`）为在页面内使用的组件名称。

`value`分为三段，`plugin`为协议（在百度小程序内为`dynamicLib`），`myPlugin`为插件名称即引入插件时的名称，`hello-component`为插件暴露的组件名称。

```json
// 微信小程序
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

```html
<!-- 微信小程序和支付宝小程序 -->
<navigator url="plugin://myPlugin/hello-component">
  Go to pages/hello-page!
</navigator>

<!-- 百度小程序 -->
<view class="container">
    <view>下面这个自定义组件来自于动态库</view>
    <!-- 这里的 'my-special-list' 就是本页面中对于此自定义组件的别名 -->
    <my-special-list />
</view>
```

#### 在分包内引入插件代码包 @subpackages-import-mp-plugin

支付宝小程序、百度小程序不支持在分包内引入插件。此外如果项目使用了分包，在支付宝小程序内不可使用插件。本节内容仅针对微信小程序。

如果插件只在（同一个插件不能被多个分包同时引用）一个分包用到，可以单独配置到分包中，这样插件不会随主包加载，开发者可以在``pages.json``的[subPackages](/collocation/pages?id=subpackages)中声明插件

**代码示例**

```json
"subPackages": [{
    "root": "pagesA",
    "pages": [{
        "path": "list/list"
    }]
    "plugins": {
        "pluginName": {
            "version": "1.0.0",
            "provider": "wxidxxxxxxxxxxxxxxxx",
            "export": "list/index.js"
        }
    }
}]
```

**在分包内使用插件的限制**

* 仅能在这个分包内使用该插件；
* 同一个插件不能被多个分包同时引用；
* 不能从分包外的页面直接跳入分包内的插件页面，需要先跳入分包内的非插件页面、再跳入同一分包内的插件页面。


#### 可能遇到的问题 @mp-plugin-issue

* 某些插件可能会需要一些权限才能正常运行，请在`manifest.json`中的`mp-weixin`内配置`permission`[详见](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)
* 微信开发工具提示 “插件版本不存在”，可能是插件开发文档示例代码中使用的版本已经不存在，请在声明插件处更改版本



