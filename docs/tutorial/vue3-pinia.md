# 状态管理 Pinia

## 介绍

> uni-app 内置了 [Pinia](https://pinia.vuejs.org/zh/index.html) 。

> 使用 `HBuilder X` 不需要手动安装，直接使用即可。使用 `CLI` 需要手动安装，执行 `yarn add pinia@2.0.33` 或 `npm install pinia@2.0.33`。

> Vue 2 项目暂不支持

### Pinia 是什么？

Pinia（发音为 `/piːnjʌ/`，如英语中的 `peenya`） 是 Vue 的存储库，它允许您跨组件、页面共享状态。在服务器端以及小型单页应用程序中，您也可以从使用 Pinia 中获得很多好处：

- 开发工具支持
  - 跟踪动作、突变的时间表
  - 存储出现在使用它们的组件中
  - 时间旅行和更容易的调试
- 热模块更换
  - 修改您的存储而不重载您的页面
  - 在开发过程中保持任何现有状态
- 为 JS 用户提供适当的 TypeScript 支持或自动完成功能

## 项目结构

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

在 `main.js` 中编写以下代码：

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

首先创建一个商店：

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

```js
import { useCounterStore } from '@/stores/counter';

export default {
	setup() {
		const counter = useCounterStore();

		counter.count++;
		// 可以手动触发
		counter.$patch({ count: counter.count + 1 });
		// 或者使用 actions
		counter.increment();
	},
};
```

你甚至可以使用一个函数（类似于一个组件 setup()）来为更高级的用例定义一个 Store：

```js
export const useCounterStore = defineStore('counter', () => {
	const count = ref(0);
	function increment() {
		count.value++;
	}

	return { count, increment };
});
```

如果您仍然不熟悉 `setup() Composition API`，请不要担心，Pinia 还支持一组类似 Vuex 的 `map helpers`。

您以相同的方式定义存储，然后使用 `mapStores()` 、 `mapState()` 或 `mapActions()` 访问：

```js
const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

const useUserStore = defineStore('user', {
  // ...
})

export default {
  computed: {
    // 其他的计算属性
    // ...
    // 通过 this.counterStore 和 this.userStore 访问
    ...mapStores(useCounterStore, useUserStore)
    // 通过 this.count 和 this.double 访问
    ...mapState(useCounterStore, ['count', 'double']),
  },
  methods: {
    // 通过 this.increment() 访问
    ...mapActions(useCounterStore, ['increment']),
  },
}
```
