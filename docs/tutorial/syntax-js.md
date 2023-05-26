`uni-app`的js API由标准ECMAScript的js API 和 uni 扩展 API 这两部分组成。
The js API of `uni-app` consists of standard ECMAScript js API and uni extension API.

标准ECMAScript的js仅是最基础的js。浏览器基于它扩展了window、document、navigator等对象。小程序也基于标准js扩展了各种wx.xx、my.xx、swan.xx的API。node也扩展了fs等模块。
Standard ECMAScript js is only the most basic js. The browser extends window, document, navigator and other objects based on it. The applet also extends various APIs of wx.xx, my.xx, and swan.xx based on standard js. Node also extends modules such as fs.

uni-app基于ECMAScript扩展了uni对象，并且API命名与小程序保持兼容。
uni-app extends uni objects based on ECMAScript, and the API naming remains compatible with applets.

## 标准js和浏览器js的区别
## Difference between standard js and browser js

`uni-app`的js代码，h5端运行于浏览器中。非h5端（包含小程序和App），Android平台运行在v8引擎中，iOS平台运行在iOS自带的jscore引擎中，都没有运行在浏览器或webview里。
The js code of `uni-app`, the h5 side runs in the browser. For non-h5 terminals (including applets and apps), the Android platform runs in the v8 engine, and the iOS platform runs in the jscore engine that comes with iOS, and neither runs in the browser or webview.

非H5端，虽然不支持window、document、navigator等浏览器的js API，但也支持标准ECMAScript。
On the non-H5 side, although it does not support the js API of browsers such as window, document, and navigator, it also supports standard ECMAScript.

请注意不要把浏览器里的js扩展对象等价于标准js。
Be careful not to equate js extension objects in browsers with standard js.

所以uni-app的非H5端，一样支持标准js，支持if、for等语法，支持字符串、数字、时间、布尔值、数组、自定义对象等变量类型及各种处理方法。仅仅是不支持window、document、navigator等浏览器专用对象。
Therefore, the non-H5 side of uni-app also supports standard js, syntax such as if and for, variable types such as strings, numbers, time, Boolean values, arrays, custom objects, and various processing methods. It's just that browser-specific objects such as window, document, and navigator are not supported.

## ES6 支持
## Supported on ES6
uni-app 在支持绝大部分 ES6 API 的同时，也支持了 ES7 的 await/async。
uni-app supports not only most ES6 API, but also await/async of ES7.

ES6 API 的支持，详见如下表格部分（`x` 表示不支持，无特殊说明则表示支持）：
For the support of ES6 API, see the following table for details (`x` means no support, and no special instructions means support):
- 因为iOS上不允许三方js引擎，所以iOS上不区分App、小程序、H5，各端均仅依赖iOS版本。
- Because the third-party js engine is not allowed on iOS, there is no distinction between App, applet, and H5 on iOS, and each terminal only depends on the iOS version.
- 各端Android版本有差异：
- Differences can be seen among Android versions of various sides:

    * App端的数据见下表；
    * The data on the App side is shown in the table below;
    * H5端数据见caniuse；
    * See caniuse for H5 data;
    * 微信小程序[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/js-support.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%20ES6%20API%20%E6%94%AF%E6%8C%81%E6%83%85%E5%86%B5)
    * WeChat Mini Program [see details](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/js-support.html#%E5%AE%A2%E6%88%B7%E7% AB%AF%20ES6%20API%20%E6%94%AF%E6%8C%81%E6%83%85%E5%86%B5)
    * 阿里小程序[详见](https://docs.alipay.com/mini/framework/implementation-detail)
    * Ali Mini Program [see details](https://docs.alipay.com/mini/framework/implementation-detail)
    * 百度小程序[详见](https://smartprogram.baidu.com/docs/develop/framework/operating-environment/)
    * 字节跳动小程序[详见](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/guide/developing-and-testing-miniApp/front-end/mini-app-runtime/javascript-support)
    * QQ小程序[详见](https://q.qq.com/wiki/develop/miniprogram/frame/useful/useful_env.html#es6%E6%94%AF%E6%8C%81%E6%83%85%E5%86%B5)
    * QQ Mini Program [see details](https://q.qq.com/wiki/develop/miniprogram/frame/useful/useful_env.html#es6%E6%94%AF%E6%8C%81%E6%83 %85%E5%86%B5)

|String|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|codePointAt|||||
|normalize|x|x||仅支持 NFD/NFC|
|includes|||||
|startsWith|||||
|endsWith|||||
|repeat|||||
|String.fromCodePoint||||&nbsp;|

|Array|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|copyWithin|||||
|find|||||
|findIndex|||||
|fill|||||
|entries|||||
|keys|||||
|values|x|||x|
|includes|x||||
|Array.from|||||
|Array.of||||&nbsp;|

|Number|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|isFinite|||||
|isNaN|||||
|parseInt|||||
|parseFloat|||||
|isInteger|||||
|EPSILON|||||
|isSafeInteger||||&nbsp;|

|Math|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|trunc|||||
|sign|||||
|cbrt|||||
|clz32|||||
|imul|||||
|fround|||||
|hypot|||||
|expm1|||||
|log1p|||||
|log10|||||
|log2|||||
|sinh|||||
|cosh|||||
|tanh|||||
|asinh|||||
|acosh|||||
|atanh||||&nbsp;|

|Object|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|is|||||
|assign|||||
|getOwnPropertyDescriptor|||||
|keys|||||
|getOwnPropertyNames|||||
|getOwnPropertySymbols||||&nbsp;|

|Other|iOS8|iOS9|iOS10|Android<5|
|:-|:-|:-|:-|:-|
|Symbol|||||
|Set|||||
|Map|||||
|Proxy|x|x||x|
|Reflect|||||
|Promise||||&nbsp;|

**注意**
- 默认不需要在微信工具里继续开启es6转换。但如果用了微信的wxml自定义组件（wxcomponents目录下），uni-app编译器并不会处理这些文件中的es6代码，需要去微信工具里开启转换。从HBuilderX调起微信工具时，如果发现工程下有wxcomponents目录会自动配置微信工程打开es6转换。

## App端
在App端JS脚本运行在独立的JS引擎中，vue页面使用系统webview渲染，nvue页面使用系统原生View渲染。

### Android平台
- JS脚本运行在独立Google V8引擎中，版本与Chrome83一致，因此支持的语法与Android系统版本无法，即便是Android4.4也与Chrome83支持的语法一样。
可到[MDN网站](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference)查看浏览器兼容性，Chrome83支持的在Android平台也支持。
- vue页面渲染在系统Webview中，受Android系统版本影响，在Android低端机上存在css浏览器兼容性问题，太新的css语法在低版本不支持。
- nvue页面使用系统原生View渲染，css支持情况参考：[nvue页面样式](https://uniapp.dcloud.net.cn/tutorial/nvue-css.html)。

### iOS平台
- JS脚本运行在iOS操作系统提供的JavaScriptCore 引擎，因此支持的语法与iOS系统有关，跟iOS系统的Safari浏览器一致。
可到[MDN网站](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference)查看浏览器兼容性，兼容性与Safari on iOS一致。
- vue页面渲染在系统WKWebview中，受iOS系统版本影响，兼容性与iOS系统的Safari浏览器一致。
- nvue页面使用系统原生View渲染，css支持情况参考：[nvue页面样式](https://uniapp.dcloud.net.cn/tutorial/nvue-css.html)。


