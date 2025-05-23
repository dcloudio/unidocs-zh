### 模板内引入静态资源

> `template`内引入静态资源，如`image`、`video`等标签的`src`属性时，可以使用相对路径或者绝对路径，形式如下

```html
<!-- 绝对路径，/static指根目录下的static目录，在cli项目中/static指src目录下的static目录 -->
<image class="logo" src="/static/logo.png"></image>
<image class="logo" src="@/static/logo.png"></image>
<!-- 相对路径 -->
<image class="logo" src="../../static/logo.png"></image>
```

**注意**

- `@`开头的绝对路径以及相对路径会经过 base64 转换规则校验
- 引入的静态资源在非 web 平台，均不转为 base64。
- web 平台，小于 4kb 的资源会被转换成 base64，其余不转。
- 自`HBuilderX 2.6.6`起`template`内支持`@`开头路径引入静态资源，旧版本不支持此方式
- App 平台自`HBuilderX 2.6.9`起`template`节点中引用静态资源文件时（如：图片），调整查找策略为【基于当前文件的路径搜索】，与其他平台保持一致
- 支付宝小程序组件内 image 标签不可使用相对路径

### css 引入静态资源

> `css`文件或`style标签`内引入`css`文件时（scss、less 文件同理），可以使用相对路径或绝对路径（`HBuilderX 2.6.6`）

```css
/* 绝对路径 */
@import url('/common/uni.css');
@import url('@/common/uni.css');
/* 相对路径 */
@import url('../../common/uni.css');
```

**注意**

- 自`HBuilderX 2.6.6`起支持绝对路径引入静态资源，旧版本不支持此方式

> `css`文件或`style标签`内引用的图片路径可以使用相对路径也可以使用绝对路径，需要注意的是，有些小程序端 css 文件不允许引用本地文件（请看注意事项）。

```css
/* 绝对路径 */
background-image: url(/static/logo.png);
background-image: url(@/static/logo.png);
/* 相对路径 */
background-image: url(../../static/logo.png);
```

**Tips**

- 引入字体图标请参考，[字体图标](/tutorial/syntax-css.md#字体图标)
- `@`开头的绝对路径以及相对路径会经过 base64 转换规则校验
- 不支持本地图片的平台，小于 40kb，一定会转 base64。（共四个平台 mp-weixin, mp-qq, mp-toutiao, app v2）
- web 平台，小于 4kb 会转 base64，超出 4kb 时不转。
- 其余平台不会转 base64

### js/uts 引入静态资源
> js/uts中引入静态资源，多用于静态资源存放在非 `static` 目录中的情况，可以使用 import 引入相对路径或绝对路径

例：有如下目录结构 ，在static 和页面文件夹下分别有静态资源

```text

├── pages                            
│   └── index
│       │── index.uvue  
│       └── icon.png                  
└── static                             
    └── logo.png                  

```

正常情况下，如 image 的 src 中直接引入 static 中 logo.png ，可以使用相对路径或绝对路径

``` html
<!-- /pages/index/index.vue -->
<template>
	<view class="content">
        <image src="../../static/logo.png" />
        <image src="/static/logo.png" />
        <image src="@static/logo.png" />
	</view>
</template>

```

而引入 index 下的 icon.png 不管是相对还是绝对路径，都无法显示，所以这时候需要在 js/uts 中 使用 import 来引入

``` html
<!-- /pages/index/index.vue -->
<template>
	<view class="content">
        <image :src="src" />
	</view>
</template>

<script>
// 使用 import 引入静态资源，并在 data 中赋值引用
import icon_src from './icon.png'
export default { 
  data() {
    return { 
      src: icon_src
    }
  },
}
</script>

```

### 静态资源引入注意事项

通常项目中规定根目录下的 static 为静态资源文件夹（目前暂不支持修改），资源存放此处后，可在任意文件直接使用相对或者绝对路径引用,具体参考上述模板 `css/js/uts` 中引入静态资源的说明。

而非 `static` 目录的静态资源，不支持直接引用，需要在 `js/uts` 中使用 `import` 来引入，确保路径正确。

综上所述，我们总结一下静态资源引用的注意事项：

- 在模板或者 `css` 文件使用 `static` 目录中的静态资源，无需特殊处理，可直接通过相对路径或者绝对路径直接引入。
- 在 `js/uts` 文件使用静态资源，需要使用 `import` 来引入。
- 不管在任何文件引入非 `static` 目中的静态资源，均需在 `js/uts` 文件使用 `import` 来引入。


### 静态资源编译规则

 项目 `static` 目录下的静态资源，会被直接拷贝到编译后目录的 `static` 目录下。
 
 非`static`目录下的静态资源在`vue3`下，被引用的资源会编译到 `assets` 目录下，并重新命名为 `原始名称+内容hash`,如：`logo.png` 会编译为类似 `logo.cfd8fa94.png` 的名称。如果该静态资源未被引用，则不会被编译器处理。
 
 非`static`目录下的静态资源在`vue2`不同平台下，编译规则有些不同：
 > 自 `HBuilderX 4.0` 起已和 `vue3` 保持一致

- web: 静态资源将会编译到 `static -> img` 下, 如小于 4k 则转为base64
- 小程序：静态资源将会编译到资源同名文件下，如小于 40kb 则转base64
- app: 静态资源将会编译到资源同名文件下
