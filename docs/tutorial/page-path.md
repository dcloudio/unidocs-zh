### 绝对路径和相对路径 @absolute-path-relative-path

在日常开发中，经常会遇到使用绝对路径还是相对路径的问题，下面我们介绍下这两种路径。

#### 绝对路径 @absolute-path

绝对路径：是指从项目根目录开始的完整路径。它用于指定文件或目录的确切位置。绝对路径通常以斜杠（/）开头，表示从根目录开始。

例如：

```vue
<template>
  <!-- 图片组件引用绝对路径 -->
  <image src="/static/logo.png" />
  <!-- 视频组件引用绝对路径  -->
  <video src="/static/demo.mp4" />
  <!-- 其他需要引用资源的媒体组件均可以使用绝对路径 -->
</template>
<script setup>
// 使用一个图片资源时，可以使用绝对路径
uni.getImageInfo({
  src: "/static/logo.png",
});
// 跳转页面时，可以使用绝对路径
uni.navigateTo({
  url: "/pages/login/login",
});
</script>
```

这里的`/static/logo.png`就是一个绝对路径，表示图片文件位于项目根目录下的 static 文件夹中。

绝对路径的优点是可以直接定位到文件的确切位置，不受当前目录的影响，通常需要动态传递的路径，我们建议使用绝对路径。

**注意**

- 当使用`import`语句导入代码文件或静态资源时，`@/`表示项目根目录的绝对路径。如`import { add } from "@/common/utils"`

#### 相对路径 @relative-path

相对路径：在编译时是指一个文件或目录相对于另一个文件或目录的位置，在运行时是指一个文件相对于当前页面路由的位置（不建议使用运行时的相对路径，应该优先使用绝对路径）。

例如：

组件 components/custom/custom.vue

```vue
<template>
  <!-- 绑定动态路径 -->
  <image :src="src" />
</template>
<script setup>
// 编译时：使用 import 语句相对路径导入图片
import logo from "../../static/logo.png";
console.log(logo); // import 语句会在编译阶段根据当前文件位置转换为绝对路径

// 运行时
// 错误的相对路径用法，image组件会在运行时根据当前页面路由来转换该相对路径，当不同的页面使用custom组件时，转换的路径是不同的
// 应该使用绝对路径：/static/logo.png，这样可以确保在任意页面都访问到正确的图片地址
const src = "../../static/logo.png";

uni.navigateTo({
  // 运行时
  // 错误的相对路径用法，路由会在运行时根据当前页面路由来转换该相对路径
  // 应该使用绝对路径：/pages/index/index
  url: "../../pages/index/index",
});
</script>
```

**注意**

- 在 uni-app x 项目中，dialogPage 不影响页面栈和路由地址，所以也不会影响运行时的相对路径转换
