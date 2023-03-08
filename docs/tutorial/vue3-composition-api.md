## 组合式 API（Composition API）

通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 ```<script setup>``` 搭配使用。这个 setup attribute 是一个标识，告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API。比如，```<script setup>``` 中的导入和顶层变量/函数都能够在模板中直接使用。

### 使用组合式API

从 vue 包内导入并使用基础的组合式API，具体 API 可以参考：[Vue 官网](https://cn.vuejs.org/api/composition-api-setup.html)。从 @dcloudio/uni-app 包内导入 uni-app [应用生命周期](/collocation/App.html#applifecycle)及[页面的生命周期](/tutorial/page.html#lifecycle)。

  ```js
  import { defineComponent, ref } from 'vue'
  import { onReady } from '@dcloudio/uni-app'
  export default defineComponent({
    setup() {
      const title = ref('Hello')
      onReady(() => {
        console.log('onReady')
      })
      return {
        title
      }
    }
  })
  ```

### 使用 Script Setup

改用 Script Setup 写法导入 API
  
  ```vue
  <script setup>
  import { ref } from 'vue'
  import { onReady } from '@dcloudio/uni-app'
  const title = ref('Hello')
  onReady(() => {
    console.log('onReady')
  })
  </script>
  ```
