
使用`@import`语句可以导入外联样式表，`@import`后跟需要导入的外联样式表的相对路径，用`;`表示语句结束。
Use the `@import` statement to import the external style sheet, `@import` is followed by the relative path of the external style sheet to be imported, and `;` indicates the end of the statement.

**示例代码：**
**Sample code:**

```html
<style>
    @import "../../common/uni.css";

    .uni-card {
        box-shadow: none;
    }
</style>
```
