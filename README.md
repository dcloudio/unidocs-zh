`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台。

官网地址：[uniapp.dcloud.io](https://uniapp.dcloud.io)

## 如何在本地运行查看文档

1. 使用命令行工具打开文档根目录
2. 在命令行中执行 `yarn` 安装依赖，如果没有 `yarn`，则先执行 `npm i -g yarn`
3. 在命令行中执行 `yarn dev --no-cache`，命令运行完毕后，会显示本地可查看链接，点击或复制到浏览器查看即可

## 文档编写注意事项

1. 右侧导航仅支持二级、三级、四级
2. 文档如有标题，必须从一级或二级开始，不允许只有三级，没有二级的情况；也不允许先有三级、后有二级的情况；
3. FAQ、注意事项、常见问题，要放在文档最下方，不要穿插在文档中间位置
4. 容器书写方式，支持：`info`、`tip`、`warning`、`danger`、`details（在 IE / Edge 中不生效）` [详情](https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8)：
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
9.  可使用模板语法 [详情](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95)

    ![](https://web-assets.dcloud.net.cn/unidoc/zh/docs_temp_code.jpg)
10. 图片点击放大 `img.class="zooming"`
    ```html
    <img class="zooming" src="xxx">
    ```
11. md 支持书写属性。`#{`：左定界符，与 markdown 语法之间不能有空格；`}` 右定界符 [详情](https://www.npmjs.com/package/markdown-it-attrs#ambiguity)
    ```md
    ![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-multiport.jpg)#{.zooming data=abc width=100 height=100}
    ```
    渲染为：

    ```html
    <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-multiport.jpg" class="zooming" data="abc" width="100" height="100" />
    ```
12. 路径注意
    - _sidebar.md是左侧导航，其中路径写https路径，可打开新页签。如左侧导航里引用了本产品目录之外的文档，需写成这种方式
	- 每个产品目录下均有一个static目录，在其中提交图片视频等静态资源。引用static下的静态资源时，路径可以是"../static"、"./static"，不能写"static/"。
	- 书写文档时应注意特殊符号的编写与换行：
    	- `###` 下应有空行
    	- `内容 **加粗** 内容` 两边需要有空格
    	- 在书写方括号 `[]` 时要注意使用转义字符 `\`，或者使用 `\`\`` 包裹，否则会被识别为链接，导致链接失效

13. md 表格
    - 行列合并
        ```md
        |资源分类		|资源细项				|售价（元）	|
        |:-:			|:-:					|:-:		|
        |云函数 #{rowspan=3}|资源使用量（GBs）		|0.000110592|
        |调用次数（万次）		|0.0133		|
        |出网流量（GB）			|0.8		|
        |云数据库 #{rowspan=3}|容量（GB/天）			|0.07		|
        |读操作使用量（万RU）	|0.015		|
        |写操作使用量（万RU）	|0.05		|
        |云存储 #{rowspan=4}|容量（GB/天）			|0.0043		|
        |下载操作次数（万次）	|0.01		|
        |上传操作次数（万次）	|0.01		|
        |CDN 流量（GB）			|0.18		|
        |前端网站托管 #{rowspan=2}|容量（GB/天）			|0.0043		|
        |流量（GB）|0.18		|
        |售价（元/月）#{colspan=2}	|5		|
        ```
    - 无限嵌套表格行折叠
        ```md
        |父Table第一列|父Table第二列				|父Table第三列|
        |:------		|:-------					|:--------|
        |A		|**B**|[C](https://www.dcloud.io/hbuilderx.html)|
        |@|第一列|第二列				|第三列				|
        |@|:------		|:-------:	|-------:	|
        |@|第一行		|**居中**|~~markdown~~|
        |@@| 名称 | 类型 | 必备 | 默认值 | 描述 |
        |@@| :- | :- | :- | :- | :- |
        |@@| D | E \\| F | H | - | I |
        |@|第二行		|[HBuilderX](https://www.dcloud.io/hbuilderx.html)|右对齐|
        ```
        ![](https://web-ext-storage.dcloud.net.cn/doc/table-expandable-row.png)

## 文档 Algolia 使用限额
Included Quota:
- Records: 1,000,000
- Operations: 1,000,000

Included Features:
- Analytics Api
- Search Analytics
- Events Analytics
- 90 Days Analytics Retention
- AI Synonyms
- Dynamic Reranking

Advanced Team Management
- Crawler UI
- Query Suggestion
- Facet Display
- Natural Language Processing (NLP)
- Synonyms 10,000/index

Size Limits:
- maxRecordSize 100KB
- maximum application size 100GB
- maxNbIndices 1,000

AI Synonyms and Dynamic Reranking：need to send click events (via insights) to leverage Dynamic Reranking.
