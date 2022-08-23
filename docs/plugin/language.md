插件支持多语言是基于[uni-app国际化](https://uniapp.dcloud.net.cn/tutorial/i18n.html)及[HBuilderX插件国际化](https://hx.dcloud.net.cn/ExtensionTutorial/localized)规范延伸而来的，所以不同类型的插件多语言规范略有不同。
Plugin support for multiple languages is based on [uni-app internationalization](https://uniapp.dcloud.net.cn/tutorial/i18n.html) and [HBuilderX plugin internationalization](https://hx.dcloud.net. cn/ExtensionTutorial/localized) specification, so the multi-language specification of different types of plugins is slightly different.

## uni-app及uniCloud分类
## uni-app and uniCloud classification
参考[国际化专题](https://uniapp.dcloud.net.cn/tutorial/i18n.html)相关教程
Refer to [Internationalization Special](https://uniapp.dcloud.net.cn/tutorial/i18n.html) related tutorials

## HBuilderX分类
## HBuilderX Classification
参考[HBuilderX插件国际化](https://hx.dcloud.net.cn/ExtensionTutorial/localized)规范教程，根据插件根目录下package.nls.[语言代码].json进行识别，如插件除默认语言之外支持英语及日语，插件包则需要包含如下文件：
Refer to [HBuilderX Plug-in Internationalization](https://hx.dcloud.net.cn/ExtensionTutorial/localized) specification tutorial, identify according to package.nls.[language code].json in the root directory of the plug-in, if the plug-in is in addition to the default language In addition to supporting English and Japanese, the plug-in package needs to include the following files:
```
插件根目录
├── package.json
├── package.nls.en.json
├── package.nls.json
└── package.nls.ja.json
```
其中语言代码必须符合规范，[点击查看更多语言代码](https://github.com/dcloudio/hbuilderx-language-packs/blob/main/docs/localizations.md)
The language code must comply with the specification, [click to view more language codes](https://github.com/dcloudio/hbuilderx-language-packs/blob/main/docs/localizations.md)