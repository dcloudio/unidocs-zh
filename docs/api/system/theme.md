## uni.onThemeChange(CALLBACK)
监听系统主题状态变化。

> 相关文档：[DarkMode 适配指南](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|`iOS 2.6.5+`、`Android 3.6.9+`|HBuilderX 3.6.9+|基础库 2.11.0+|x|x|x|V5.3.0+|x|x|x|x|

<!-- UNIAPPAPIJSON.onThemeChange.compatibility -->

**CALLBACK 返回参数**

|参数|类型|说明|
|:-|:-|:-|
|theme|String|主题名称(`dark`, `light`)|



**示例**

```javascript
uni.onThemeChange(function (res) {
	console.log(res.theme);
});
```

<!-- UNIAPPAPIJSON.onThemeChange.tutorial -->

## uni.offThemeChange(CALLBACK)
取消监听系统主题状态变化。

> 相关文档：[DarkMode 适配指南](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 3.6.9+|HBuilderX 3.6.9+|基础库 2.11.0+|x|x|x|V5.3.0+|x|x|x|x|

<!-- UNIAPPAPIJSON.offThemeChange.compatibility -->

**参数**

`Function CallBack`：onThemeChange 传入的监听函数。

**示例**

```javascript
const callback = function (res) {
	console.log(res.theme);
}
uni.onThemeChange(callback);
uni.offThemeChange(callback); // 此时不再触发 callback 方法
```

<!-- UNIAPPAPIJSON.offThemeChange.tutorial -->

**注意**
- 自定义基座生效
- App 端需要开启暗黑模式。[5+ App](https://ask.dcloud.net.cn/article/36995) [uni-app 暗黑模式](https://uniapp.dcloud.net.cn/tutorial/darkmode.html#open-darkmode)
