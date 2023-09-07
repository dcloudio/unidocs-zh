## rich-text

<!-- UTSCOMJSON.rich-text.description -->

### 支持的HTML标签和属性
|HTML   |属性    |样式
|-------|-------|-------|
|br     |       |
|p      |       |text-align color background-color text-decoration
|ul     |       |
|li     |       |text-align color background-color text-decoration
|span   |       |color background-color text-decoration
|strong |       |
|i      |       |
|big    |       |
|small  |       |
|a      |href   |
|u      |       |
|del    |       |
|h1-h6  |       |
|img    |src    |

> text-decoration仅支持line-through

<!-- UTSCOMJSON.rich-text.attrubute -->

<!-- UTSCOMJSON.rich-text.event -->

<!-- UTSCOMJSON.rich-text.compatibility -->

<!-- UTSCOMJSON.rich-text.reference -->

## bug&tips

- HTML String支持常用但不是全部web样式。
- HTML String类型的`<img/>`不支持自定义宽高，默认以rich-text组件宽度为基准等比缩放；节点列表类型的`<img>/`支持自定义宽高。