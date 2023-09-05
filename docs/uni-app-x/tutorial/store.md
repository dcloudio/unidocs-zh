# 全局变量与状态管理

`uni-app x` 可通过一个专用模块组织和管理全局变量与状态。示例：

```ts
// store/index.uts
export type State = {
  globalNum: number
}

export const state = reactive({ globalNum: 0 } as State)

export const setGlobalNum = (num: number) => {
  state.globalNum = num
}
```

```ts
// pages/index/index.uvue
<template>
	<text @click="plus">{{ globalNum }}</text>
</template>

<script lang="uts">
	import { state, setGlobalNum } from '@/store/index.uts'
	export default {
		computed: {
			globalNum(): number {
				return state.globalNum
			}
		},
		methods: {
			plus(){
				setGlobalNum(state.globalNum + 1)
			}
		}
	}
</script>
```