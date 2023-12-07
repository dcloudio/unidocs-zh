# 全局变量与状态管理

`uni-app x` 目前不支持 `pinia` 和 `vuex`。可通过 `globalData(3.99+)` 或一个专用模块组织和管理全局变量与状态。

## globalData

`App.uvue` 中定义 `globalData`。

```ts
<script lang="uts">
  export default {  
    globalData: {  
      str: 'global data str',
      num: 123,
      bool: true 
    }
  }  
</script>  
```

页面或组件中通过 `getApp().globalData` 访问。

```ts
<script lang="uts">
  export default {  
    methods: {
      getGlobalData() {
        const app = getApp()
        this.globalDataStr = app.globalData.str
        this.globalDataNum = app.globalData.num
        this.globalDataBool = app.globalData.bool
      }
    }
  }
</script>
```

**注意：** `uni-app x` 中 `globalData` 的数据结构与类型通过 `App.uvue` 中的 `globalData` 初始值定义，后续只能读取或修改，不能新增或删除。

## 专用模块
定义一个模块，编写一个单独的uts文件，比如 /store/index.uts，在里面设一个全局变量，比如globalNum。

```ts
//定义一个大写的State类型
export type State = {
  globalNum: number
  // 如有需要，可增加更多属性
}
// 实例化为state
export const state = reactive({ globalNum: 0 } as State)
// 定义修改属性值的方法
export const setGlobalNum = (num: number) => {
  state.globalNum = num
}
```

在需要的页面和uts文件里，import上面的/store/index.uts，通过如下方式读和写globalNum。

```vue
<template>
	<text @click="plus">{{ globalNum }}</text>
</template>

<script lang="uts">
	import { state, setGlobalNum } from '@/store/index.uts' //导出state和修改其属性值的方法，如不需要修改值，则不需要导出修改方法
	export default {
		computed: {
			globalNum(): number { //定义可绑定在界面上的globalNum
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

不管在哪里修改了globalNum的值，界面上都会自动更新。