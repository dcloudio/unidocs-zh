`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台。

官网地址：[uniapp.dcloud.io](https://uniapp.dcloud.io)

## 文档编写注意事项

1. 右侧导航仅支持二级、三级、四级
2. 文档如有标题，必须从一级或二级开始，不允许只有三级，没有二级的情况；也不允许先有三级、后有二级的情况；
3. FAQ、注意事项、常见问题，要放在文档最下方，不要穿插在文档中间位置
4. 容器书写方式 [详情](https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8)：
    ```md
    ::: warning 注意
    - 认证凭证有效期为`30分钟`
    - 当余额全部被冻结时，会出现有余额但无法调用服务的情况
    :::
    ```
5. 代码语法高亮支持：js、javascript、ts、typescript、objc（Objective-C）、kt（Kotlin）、cs（C#）、cpp（C++）等。[详情](https://prismjs.com/#supported-languages)
6. 代码支持行高亮 [详情](https://vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%A1%8C%E9%AB%98%E4%BA%AE)
7. 标题（Badge）组件 [详情](https://vuepress.vuejs.org/zh/guide/using-vue.html#badge)
8. 可使用模板语法 [详情](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95)