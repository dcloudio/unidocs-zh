### 模板内引入静态资源
### Introduce static resources into the template

> `template`内引入静态资源，如`image`、`video`等标签的`src`属性时，可以使用相对路径或者绝对路径，形式如下
> When introducing static resources into `template`, such as `image`, `video` and other tags of the `src` attribute, you can use a relative path or an absolute path in the form as follows

```html
<!-- 绝对路径，/static指根目录下的static目录，在cli项目中/static指src目录下的static目录 -->
<!-- For absolute path, /static refers to the static directory under the root directory. For cli project, /static refers to the static directory under the src directory -->
<image class="logo" src="/static/logo.png"></image>
<image class="logo" src="@/static/logo.png"></image>
<!-- 相对路径 -->
<!-- Relative path -->
<image class="logo" src="../../static/logo.png"></image>
```

**注意**
**Notice**

- `@`开头的绝对路径以及相对路径会经过 base64 转换规则校验
- 引入的静态资源在非 h5 平台，均不转为 base64。
- H5 平台，小于 4kb 的资源会被转换成 base64，其余不转。
- 自`HBuilderX 2.6.6`起`template`内支持`@`开头路径引入静态资源，旧版本不支持此方式
- From `HBuilderX 2.6.6`, `template` supports the introduction of static resources in the path starting with `@`, which is not supported by the old version.
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
**Notice**

- 自`HBuilderX 2.6.6`起支持绝对路径引入静态资源，旧版本不支持此方式
- From `HBuilderX 2.6.6`, static resources are imported using absolute paths, which is not supported by the old version.

> `css`文件或`style标签`内引用的图片路径可以使用相对路径也可以使用绝对路径，需要注意的是，有些小程序端 css 文件不允许引用本地文件（请看注意事项）。

```css
/* 绝对路径 */
background-image: url(/static/logo.png);
background-image: url(@/static/logo.png);
/* 相对路径 */
background-image: url(../../static/logo.png);
```

**Tips**

- 引入字体图标请参考，[字体图标](/tutorial/syntax-css.html#字体图标)
- `@`开头的绝对路径以及相对路径会经过 base64 转换规则校验
- 不支持本地图片的平台，小于 40kb，一定会转 base64。（共四个平台 mp-weixin, mp-qq, mp-toutiao, app v2）
- h5 平台，小于 4kb 会转 base64，超出 4kb 时不转。
- 其余平台不会转 base64
