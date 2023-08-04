# 状态管理 Pinia
# State management Pinia

## 介绍
## introduce

> uni-app 内置了 [Pinia](https://pinia.vuejs.org/zh/index.html) 。Vue 2 项目暂不支持

> 使用 `HBuilder X` 不需要手动安装，直接使用即可。使用 `CLI` 需要手动安装，执行 `yarn add pinia@2.0.33` 或 `npm install pinia@2.0.33`。

### Pinia 是什么？
### What is Pinia?

Pinia（发音为 `/piːnjʌ/`，如英语中的 `peenya`） 是 Vue 的存储库，它允许您跨组件、页面共享状态。在服务器端以及小型单页应用程序中，您也可以从使用 Pinia 中获得很多好处：
Pinia (pronounced `/piːnjʌ/`, like `peenya` in English) is a repository for Vue that allows you to share state across components, pages. On the server side as well as in small single page applications, you can also get a lot of benefits from using Pinia:

- Devtools 支持
  - 追踪 actions、mutations 的时间线
  - 在组件中展示它们所用到的 Store
  - 让调试更容易的 Time travel
- 热模块更换
  - 不必重载页面即可修改 Store
  - 开发时可保持当前的 State
- 为 JS 开发者提供适当的 TypeScript 支持以及 **自动补全** 功能。

## 项目结构
## project structure

```
├── pages
├── static
└── stores
    └── counter.js
├── App.vue
├── main.js
├── manifest.json
├── pages.json
└── uni.scss
```

## 基本示例
## Basic example

在 `main.js` 中编写以下代码：
Write the following code in `main.js`:

```js
import { createSSRApp } from 'vue';
import * as Pinia from 'pinia';

export function createApp() {
	const app = createSSRApp(App);
	app.use(Pinia.createPinia());
	return {
		app,
		Pinia, // 此处必须将 Pinia 返回
	};
}
```

首先创建一个 Store：

```js
// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => {
		return { count: 0 };
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		increment() {
			this.count++;
		},
	},
});
```

然后在组件中使用它：
and then use it in the component:

```html
<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
counter.count++
// 自动补全！ ✨
counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
counter.increment()
</script>
<template>
  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ counter.count }}</div>
</template>
```

为实现更多高级用法，你甚至可以使用一个函数 (与组件 `setup()` 类似) 来定义一个 Store：

```js
export const useCounterStore = defineStore('counter', () => {
	const count = ref(0);
	function increment() {
		count.value++;
	}

	return { count, increment };
});
```

如果你还不熟悉 setup() 函数和组合式 API，Pinia 也提供了一组类似 Vuex 的 [映射 state 的辅助函数](https://vuex.vuejs.org/zh/guide/state.html#mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0)。

你可以用和之前一样的方式来定义 Store，然后通过 mapStores()、mapState() 或 mapActions() 访问：

```js
const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

const useUserStore = defineStore('user', {
  // ...
})

// 使用
import { mapState, mapStores, mapActions } from 'pinia'
export default defineComponent({
  computed: {
    // 其他计算属性
    // ...
    // 允许访问 this.counterStore 和 this.userStore
    ...mapStores(useCounterStore, useUserStore)
    // 允许读取 this.count 和 this.double
    ...mapState(useCounterStore, ['count', 'double']),
  },
  methods: {
    // 允许读取 this.increment()
    ...mapActions(useCounterStore, ['increment']),
  },
})
```
