插件支持多语言是基于[uni-app国际化](https://uniapp.dcloud.net.cn/worktile/i18n.html)及[HBuilderX插件本地化](https://hx.dcloud.net.cn/ExtensionTutorial/localized)规范延伸而来的，所以不同类型的插件多语言规范略有不同。如果插件支持多语言，需要按照规范进行发布，插件市场会自动识别为支持多语言。

# HBuilderX
参考[HBuilderX插件本地化](https://hx.dcloud.net.cn/ExtensionTutorial/localized)规范教程，根据插件根目录下package.nls.[语言代码].json进行识别，如插件除默认语言之外支持英语及日语，插件包则需要包含如下文件：
```
插件根目录
├── package.json
├── package.nls.en.json
├── package.nls.json
└── package.nls.ja.json
```
其中语言代码必须符合规范，[点击查看更多语言代码](https://github.com/dcloudio/hbuilderx-language-packs/blob/main/docs/localizations.md)

# App原生插件
App原生插件多语言是按照系统机制处理，在插件市场发布时，需在页面中选择支持的语言：
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/88fe31af-9f53-4916-9348-7a39ecdafb11.png)
`注：`如果插件不支持多语言不选即可，请勿随意勾选，以免影响插件审核。

# 前端组件
前端组件的多语言配置规范有两种：
1. 在插件根目录components/{组件名称}/locale目录下配置`语言代码.json`文件，如组件名称为`xiaoming-test`，则`语言代码.json`文件路径为`components/xiaoming-test/locale/语言代码.json`：
```
插件根目录
├── components
│   └── xiaoming-test
│       └── locale
│           ├── en.json
│           ├── es.json
│           └── fr.json
```

2. 如果单个插件下存在多个组件，为了方便语言包能够复用，可以在插件根目录的locale目录下直接配置`语言代码.json`文件：
```
插件根目录
├── components
│   ├── xiaoming-tag
│   └── xiaoming-test
├── locale
│   ├── en.json
│   ├── es.json
│   └── fr.json
```

# 其它分类
除上述特殊说明的插件分类之外，其它分类均为在插件根目录的locale目录下配置`语言代码.json`文件：
```
插件根目录
├── locale
│   ├── en.json
│   ├── es.json
│   └── fr.json
```

# 语言代码
`注：`HBuilderX分类与其它分类语言代码规范不同，开发时需注意
### HBuilderX分类
[点击查看语言代码](https://github.com/dcloudio/hbuilderx-language-packs/blob/main/docs/localizations.md)

### 其它分类
| 语言代码 | 语言名称 |
| -------- | -----: | 
| af | 南非语 |
| ar | 阿拉伯语 |
| az | 阿塞拜疆语 |
| be | 比利时语 |
| bg | 保加利亚语 |
| ca | 加泰隆语 |
| cs | 捷克语 |
| cy | 威尔士语 |
| da | 丹麦语 |
| de | 德语 |
| dv | 第维埃语 |
| el | 希腊语 |
| en | 英语 |
| eo | 世界语 |
| es | 西班牙语 |
| et | 爱沙尼亚语 |
| eu | 巴士克语 |
| fa | 法斯语 |
| fi | 芬兰语 |
| fo | 法罗语 |
| fr | 法语 |
| gl | 加里西亚语 |
| gu | 古吉拉特语 |
| he | 希伯来语 |
| hi | 印地语 |
| hr | 克罗地亚语 |
| hu | 匈牙利语 |
| hy | 亚美尼亚语 |
| id | 印度尼西亚语 |
| is | 冰岛语 |
| it | 意大利语 |
| ja | 日语 |
| ka | 格鲁吉亚语 |
| kk | 哈萨克语 |
| kn | 卡纳拉语 |
| ko | 朝鲜语 |
| kok | 孔卡尼语 |
| ky | 吉尔吉斯语 |
| lt | 立陶宛语 |
| lv | 拉脱维亚语 |
| mi | 毛利语 |
| mk | 马其顿语 |
| mn | 蒙古语 |
| mr | 马拉地语 |
| ms | 马来语 |
| mt | 马耳他语 |
| nb | 挪威语 |
| nl | 荷兰语 |
| ns | 北梭托语 |
| pa | 旁遮普语 |
| pl | 波兰语 |
| pt | 葡萄牙语 |
| qu | 克丘亚语 |
| ro | 罗马尼亚语 |
| ru | 俄语 |
| sa | 梵文 |
| se | 北萨摩斯语 |
| sk | 斯洛伐克语 |
| sl | 斯洛文尼亚语 |
| sq | 阿尔巴尼亚语 |
| sv | 瑞典语 |
| sw | 斯瓦希里语 |
| syr | 叙利亚语 |
| ta | 泰米尔语 |
| te | 泰卢固语 |
| th | 泰语 |
| tl | 塔加路语 |
| tn | 茨瓦纳语 |
| tr | 土耳其语 |
| ts | 宗加语 |
| tt | 鞑靼语 |
| uk | 乌克兰语 |
| ur | 乌都语 |
| uz | 乌兹别克语 |
| vi | 越南语 |
| xh | 班图语 |
| zh | 中文 |
| zh-Hans | 中文(简体) |
| zh-Hant | 中文(繁体) |
| zu | 祖鲁语  |