


我们提供了免费视频教程，在看此文档同时建议结合 [vue入门视频教程](https://learning.dcloud.io/#/?vid=0) ，帮助你更加快速掌握。



 **致谢**

本文大部分内容来源于vue官网，但结合 `uni-app` 做了部分调整，以更有利于开发者快速上手。感谢Vue团队！

- 虚拟DOM
- 运行速度快，易于上手
- 便于与第三方库或既有项目整合





在hello uni-app的 `common` 目录有一个工具类 `util.js` ，可以在hello uni-app中搜索这个例子查看。hello uni-app示例代码可从 [github](https://github.com/dcloudio/hello-uniapp) 获取。





当然还有一些高级的用法

```js
	<!-- 直接使用js模块的属性。在hello uni-app有示例   -->
	var dateUtils = require('../../../common/util.js').dateUtils; 
	<!-- 将js导入并重命名为echarts，然后使用echarts.来继续执行方法。在hello uni-app有示例 -->
	import * as echarts from '/components/echarts/echarts.simple.min.js'; 
```

**css外部文件导入**。全局样式，在根目录下的 `app.vue` 里写入，每个页面都会加载 `app.vue` 里的样式。






`uni-app` 提供了一批[内置组件](https://uniapp.dcloud.io/component/README)。


	- `uni-app` 使用vue的数据绑定方式解决js和 DOM 界面交互的问题。




## 在 uni-app 中使用差异

`uni-app` 在发布到H5时支持所有vue的语法；发布到App时，由于平台限制，无法实现全部vue语法，但 `uni-app` 仍是对vue语法支持度最高的跨端框架。

相比Web平台， Vue.js 在 `uni-app` 中使用差异主要集中在两个方面：

- 新增：`uni-app` 除了支持Vue实例的生命周期，还支持[应用生命周期](/collocation/frame/lifecycle?id=应用生命周期)以及[页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)。
- 受限：相比web平台，在App端部分功能受限，[具体见](/vue-api)。
- uni-app 完整支持 Vue 模板语法。
- App端可以使用更多的vue特性，[详见](https://ask.dcloud.net.cn/article/36599)。













```html
<template>
    <view>
      <view>{{ number + 1 }}</view>
      <view>{{ ok ? 'YES' : 'NO' }}</view>
      <!-- 把一个字符串分割成字符串数组,颠倒其元素的顺序,把数组中的所有元素放入一个字符串 -->
      <view>{{ message.split('').reverse().join('') }}</view>
    </view>
</template>
<script>
  export default {
    data() {
      return {
        number:1,
        ok:true,
        message: 'Hello Vue!'
      }
    }
  }
</script>
```



```html
<template>
  <view>
      <view v-for="(item,index) in 10">
      <!-- 通过%运算符求余数，实现隔行换色的效果 -->
      <view :class="'list-' + index%2">{{index%2}}</view>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return { }
    }
  }
</script>
<style>
  .list-0{
    background-color: #aaaaff;
  }
  .list-1{
    background-color: #ffaa7f;
  }
</style>
```




















跨端的富文本处理方案详见：[https://ask.dcloud.net.cn/article/35772](https://ask.dcloud.net.cn/article/35772)








为节约性能，我们将 `Class` 与 `Style` 的表达式通过 `compiler` 硬编码到 `uni-app` 中，支持语法和转换效果见下：
















> nvue 页面不支持 v-show。


























- 按键修饰符：`uni-app` 运行在手机端，没有键盘事件，所以不支持按键修饰符。




### 事件映射表

```js
// 事件映射表，左侧为 WEB 事件，右侧为 ``uni-app`` 对应事件

```








### uni-app表单组件

建议开发过程中直接使用 `uni-app`：[表单组件](https://uniapp.dcloud.io/component/button)。

##### 用法示例：

- H5 的 `select` 标签用 `picker` 组件进行代替



- 表单元素 `radio` 用 `radio-group` 组件进行代替





















