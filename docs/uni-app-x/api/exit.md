## uni.exit(options?) @exit

<!-- UTSAPIJSON.exit.description -->

**注意**  
- HBuilderX3.8.15+ 新增支持  
- 小程序端必须有点击行为才能调用成功  
- App-iOS平台可以调用此API，但不支持退出应用功能，触发fail回调返回system not support错误  

<!-- UTSAPIJSON.exit.param -->

<!-- UTSAPIJSON.exit.returnValue -->

<!-- UTSAPIJSON.exit.compatibility -->

<!-- UTSAPIJSON.exit.tutorial -->

### 示例  

```javascript
// 退出应用
uni.exit({
	success: () => {
		console.log("exit success")
	},
	fail: (e) => {
		console.log("exit fail")
	}
});
```

### 错误码

|错误码	|错误信息					|说明														|
|---	|----						|------														|
|12001	|system not support			|当前系统不支持相关能力											|

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
