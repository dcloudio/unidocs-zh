`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台。

官网地址：[uniapp.dcloud.io](https://uniapp.dcloud.io)

## 文档编写注意事项

1. 右侧导航仅支持二级、三级、四级
2. 文档如有标题，必须从二级开始，不允许只有三级，没有二级的情况；也不允许先有三级、后有二级的情况；
3. FAQ、注意事项、常见问题，要放在文档最下方，不要穿插在文档中间位置

## 手动标注翻译

使用 `<!-- @ignore-translate -->` 或 `// @ignore-translate` 进行标注。
`<!-- @ignore-translate -->` 的下一行为中文，下两行为英文，如：

```md
<!-- @ignore-translate -->
## 官方示例
## Official example
```

## 术语表

> my_zh_en_glossary.tmx

格式为：
```html
<tu>
  <tuv xml:lang="zh">
    <seg>快应用</seg>
  </tuv>
  <tuv xml:lang="en">
    <seg>QuickApp</seg>
  </tuv>
</tu>
```

经测试使用 Cloud Storage api 上传报错。因此修改后需要手动上传 Cloud Storage 后更新才可使用最新术语表。