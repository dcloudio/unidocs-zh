# uni-app x 开发注意

与web开发相比，uni-app x最大的变化有2个：
- 弱类型的js改为了强类型的uts
- 不再使用webview渲染，导致css有变化

重视，并把握好这两点，就可以很快上手。

## 类型系统注意

强类型语言中，变量、方法、参数、返回值、data数据，都必须有类型。

基础类型包括：boolean|string|number|Array|Date|UTSJSONObject|any|null...

开发者需阅读 [uts](https://uniapp.dcloud.net.cn/uts/) 文档，了解类型的定义和使用。

如下代码比较典型的说明了uni-app x中uts类型的要求。

可以看出template和css的代码和以前的uni-app相同，但script区域有变化。

不管是data、自定义变量，甚至是组件事件参数（TouchEvent），都必须有类型。

有的没有通过`:`定义类型，其实是因为编译器具备一定的自动推导能力，可以帮开发者自动补类型。

data里`:`的用途是赋值，无法通过`:`定义类型，所以data的数据有2种处理方式：1、通过字面量自动推导；2、通过`as`声明

```html
<template>
	<view @touchstart="touchstart">
		<text class="red">{{s1}}</text>
	</view>
	<button @click="buttonClick" :disabled="buttonEnable">按钮</button>
</template>
<script lang="uts">
	type User = {
		name:string
	}
	export default {
		data() {
			const date = new Date() //自动推导类型为Date
			const v = 1;
			return {
				s1 : "hello", // 根据字面量推导为string
				n1 : 0 as number, // 这里其实可以根据字面量自动推导，as number写不写都行
				n2, // 不合法，必须指定类型。真实运行时请删掉本行
				n3 as number, // 不合法，uts不支持undefined，必须初始化。真实运行时请删掉本行
				n4 : null as number | null // 合法。定义为可为null的数字，初始值是null，但在使用n4前必须为其赋值数字
				year: date.getFullYear() as number, // 在data里，目前无法通过变量类型推导data项的类型，需使用 as 显式声明
				buttonEnable: false,
				t: ``, // 模板字面量，推导为 string
				o: { id: 1, name:"DCloud" }, // 对象字面量，推导为 UTSJSONObject，注意：访问 data 中定义的UTSJSONObject属性时，需要使用索引访问，如 this.o["id"]
				an: [1, 2], // 数组字面量，如果元素均为纯数字字面量，则推导为 Array<number>
				as: ['1', '2', `3`], // 数组字面量，如果元素均为纯字符串或模板字符串字面量，则推导为 Array<string>
				ab: [true, false], // 数组字面量，如果元素均为boolean字面量，则推导为 Array<boolean>
				ao: [{ id: 1 }, { id: 2 }], // 数组字面量，如果元素均为对象字面量，则推导为 Array<UTSJSONObject>
				am: [[1, 2], [2, 3], [3, 4]], // 数组字面量，支持嵌套推导，推导为 Array<Array<number>>
				aa: [1, '2'], // 数组字面量，如果元素类型不一致，则推导为 Array<any|null>
				u: { name: 'DCloud' } as User, // 类型断言，如果主动指定了类型，则不做自动推导，使用指定的类型，注意：自定义type，需要定义在 export default 外部或通过其他文件导入
				au: [{ name: 'DCloud' }] as User[], // 类型断言，支持数组类型断言
				v: v, // 非字面量类型，目前未指定类型断言，推导为 any | null，建议此情况，均通过as手动指定类型
			}
		}
		methods: {
			touchstart(e : TouchEvent) { // e必须有类型
				let sX:number = e.touches[0].screenX;
				let sY:number = e.touches[0].screenY;
			},
			buttonClick: function () {
				this.buttonEnable = true
				this.s1 = "点过按钮了"
			},
		}
	}
</script>
<style>
.red{
	color:red
}
</style>
```

## 函数 event 参数需显式指定类型

```html
<view @click="(e: any) => foo(e)">event must has type</view>
<view @click="foo($event as MouseEvent)">event must has type</view>
```

## JSON的类型注意

JSON在强类型语言中使用时，不能像js那样随意。这部分内容较长，[详见](../uts/data-type.md#JSON)

## 作用域插槽数据类型

作用域插槽需在组件中指定插槽数据类型
```ts
// components/Foo.uvue
<view>
    <slot name="test name" />
</view>

import { SlotsType } from 'vue'
export default {
  slots: Object as SlotsType<{
    default: { name: string }
  }>
}
// page.uvue
<view>
	<Foo>
		<template v-slot="slotProps">
			<text>{{ slotProps.name }}</text>
		</template>
	</Foo>
</view>
```

## uts不支持undefined

任何变量被定义后，都需要赋值。

## css使用注意

[详见](css/readme.md)