`uni-app` is a framework for developing all front-end applications using [Vue.js](https://vuejs.org/). Developers write a set of codes that can be published to iOS, Android, Web (responsive), And various MiniApp(WeChat/Alipay/Baidu/Toutiao/QQ/ Kuaishou/DingTalk/Taobao), QuickApp and other platforms.

Official website address: [uniapp.dcloud.io](https://uniapp.dcloud.io)

## Documentation Notes

1. 右侧导航仅支持二级、三级、四级
2. 文档如有标题，必须从一级或二级开始，不允许只有三级，没有二级的情况；也不允许先有三级、后有二级的情况；
3. FAQ、注意事项、常见问题，要放在文档最下方，不要穿插在文档中间位置
4. 容器书写方式，支持：`tip`、`warning`、`danger`、`details（在 IE / Edge 中不生效）` [详情](https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8)：
    ```md
    ::: warning 注意
    - 认证凭证有效期为`30分钟`
    - 当余额全部被冻结时，会出现有余额但无法调用服务的情况
    :::
    ```
    ![](https://web-assets.dcloud.net.cn/unidoc/zh/action_temp.jpg)
5. 代码语法高亮支持：`js`、`javascript`、`ts`、`typescript`、`objc（Objective-C）`、`kt（Kotlin）`、`cs（C#）`、`cpp（C++）`等。[详情](https://prismjs.com/#supported-languages)
6. 支持流程图：

        ```mermaid
        sequenceDiagram
        actor user as 用户端
        participant cf as 云函数/云对象
        participant service as 认证服务
        activate user
        user->>+user: 获取设备信息metaInfo
        user->>+cf: 提交姓名、身份证号、metaInfo获取certifyId
        cf->>+service: 提交姓名、身份证号、metaInfo获取certifyId
        service-->>-cf: 返回certifyId
        cf-->>-user: 返回certifyId
        user->>+service: 调用sdk进行刷脸认证
        service-->>-user: 返回认证结果
        user->>+cf: 请求校验认证结果
        cf->>+service: 请求认证结果
        service-->>-cf: 返回认证结果
        cf-->>-user: 返回最终实人认证结果
        deactivate user
        ```
    ![](https://web-assets.dcloud.net.cn/unidoc/zh/doc_mermaid.jpg)
7. 代码支持行高亮 [详情](https://vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%A1%8C%E9%AB%98%E4%BA%AE)
    ![](https://web-assets.dcloud.net.cn/unidoc/zh/docs_code_color.jpg)
8. 标题（Badge）组件 [详情](https://vuepress.vuejs.org/zh/guide/using-vue.html#badge)
    ![](https://web-assets.dcloud.net.cn/unidoc/zh/docs_bage_component.jpg)
9. 可使用模板语法 [详情](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95)
    ![](https://web-assets.dcloud.net.cn/unidoc/zh/docs_temp_code.jpg)