
### uni.onThemeChange(CALLBACK)
监听系统主题状态变化。
listen to system theme state changes.

**CALLBACK 返回参数**
**CALLBACK return parameter**

|参数|类型|说明|平台差异说明|
| Parameter| Type| Instruction| Platform difference description|
|:-|:-|:-|:-|
|theme|String|主题名称(dark, light)|App2.6.5+ 仅iOS|
| theme| String| Theme name (dark, light)| App2.6.5+ iOS only|

**示例**
**Example**

```javascript
uni.onThemeChange(function (res) {
	console.log(res.theme);
});
```

**注意**
**Notice**
- 自定义基座生效
- Custom base takes effect