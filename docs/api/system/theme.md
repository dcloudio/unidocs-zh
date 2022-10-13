### uni.onThemeChange(CALLBACK)
监听系统主题状态变化。

**CALLBACK 返回参数**

|参数|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|theme|String|主题名称(dark, light)|App2.6.5+ 仅iOS|

**示例**

```javascript
uni.onThemeChange(function (res) {
	console.log(res.theme);
});
```

**注意**
- 自定义基座生效
- app需要开启暗黑模式才能使用此功能，详情：https://ask.dcloud.net.cn/article/36995
