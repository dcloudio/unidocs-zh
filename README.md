`uni-app` is a framework for developing all front-end applications using [Vue.js](https://vuejs.org/). Developers write a set of codes that can be published to iOS, Android, Web (responsive), And various MiniApp(WeChat/Alipay/Baidu/Toutiao/QQ/ Kuaishou/DingTalk/Taobao), QuickApp and other platforms.

Official website address: [uniapp.dcloud.io](https://uniapp.dcloud.io)

## Documentation Notes

1. The right navigation only supports Level 2, Level 3 and Level 4
2. If the document has a title, it must start from the second level. It is not allowed to have only the third level without the second level; nor is it allowed to have the third level and then the second level;
3. FAQs, precautions, and frequently asked questions should be placed at the bottom of the document, not interspersed in the middle of the document

## Manual annotation translation

Annotate with `<!-- @ignore-translate -->` or `// @ignore-translate`.
The next line of `<!-- @ignore-translate -->` is Chinese, and the next two lines are English, such as:

```md
<!-- @ignore-translate -->
## 官方示例
## Official example
```

## Glossary

> uni_zh_en_glossary.tmx

The format is:
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

After testing, the upload error is reported using the Cloud Storage api. Therefore, after modification, you need to manually upload to Cloud Storage and then update to use the latest glossary.
