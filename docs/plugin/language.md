插件支持多语言是基于[uni-app国际化](https://uniapp.dcloud.net.cn/tutorial/i18n.html)及[HBuilderX插件国际化](https://hx.dcloud.net.cn/ExtensionTutorial/localized)规范延伸而来的，所以不同类型的插件多语言规范略有不同。

## uni-app及uniCloud分类
参考[国际化专题](https://uniapp.dcloud.net.cn/tutorial/i18n.html)相关教程

## HBuilderX分类
参考[HBuilderX插件国际化](https://hx.dcloud.net.cn/ExtensionTutorial/localized)规范教程，根据插件根目录下package.nls.[语言代码].json进行识别，如插件除默认语言之外支持英语及日语，插件包则需要包含如下文件：
```
插件根目录
├── package.json
├── package.nls.en.json
├── package.nls.json
└── package.nls.ja.json
```
其中语言代码必须符合规范，[点击查看更多语言代码](https://github.com/dcloudio/hbuilderx-language-packs/blob/main/docs/localizations.html)