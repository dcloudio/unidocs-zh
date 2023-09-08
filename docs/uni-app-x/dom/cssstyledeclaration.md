# CSSStyleDeclaration  

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.description -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.package -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.extends -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.param -->


## setProperty(name, value)@setProperty

```ts
CSSStyleDeclaration.setProperty(name:string, value:any):void
```

## getPropertyValue(property)@getPropertyValue

```ts
CSSStyleDeclaration.getPropertyValue(property:string):any?
```

## 示例
```html
<template>
	<button @click="showPop">显示弹层</button>
	<view ref="pop" style="position: absolute; display: none;">
		<text>123</text>
	</view>
</template>
<script lang="uts">
	export default {
		methods: {
			showPop: function () {
				(this.$refs["pop"] as INode).style.setProperty("display","flex")
			}
		}
	}
</script>
```