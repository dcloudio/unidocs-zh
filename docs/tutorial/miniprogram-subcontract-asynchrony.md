## 分包异步化

### 跨分包自定义组件引用

此特性依赖配置 `componentPlaceholder`，目前仅支持在 `pages.json` 中添加页面级别的配置。

如果需要在某个组件中配置，详见 [ask社区帖子](https://ask.dcloud.net.cn/article/42114)

### 跨分包JS代码引用

微信、支付宝、抖音等小程序端默认支持跨分包 JS 代码引用，需要写小程序原生支持的语法，不能使用静态引入或者动态引入。示例如下：

`sub分包` 定义 `utils.js` 文件

```javascript
// sub/utils.js
export function add(a, b) {
    return a + b
}
```

`sub分包` 正常使用 `utils.js` 文件

```vue
// sub/index.vue
<template>
    <view>
        {{ count }}
        <button @tap="handleClick">add one</button>
    </view>
</template>

<script>
    import {
        add
    } from "./utils.js";

    export default {
        data() {
            return {
                count: 1
            }
        },
        methods: {
            handleClick() {
                this.count = add(this.count, 1)
            }
        }
    }
</script>
```

其他分包使用 `sub分包` 的 `utils.js` 文件

```vue
// sub2/index.vue
<template>
    <view>
       {{ count }}
        <button @tap="handleClick">add two</button>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                count: 1
            }
        },
        methods: {
            handleClick() {
                require('../sub/utils.js', sub_utils => {
                    this.count = sub_utils.add(this.count, 2);
                }, ({
                    mod,
                    errMsg
                }) => {
                    console.error(`path: ${mod}, ${errMsg}`)
                })
            }
        }
    }
</script>
```

**注意：**

- 引用的文件必须存在
- 使用小程序支持的原生语法