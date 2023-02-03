### uni.onThemeChange(CALLBACK)
监听系统主题状态变化。
listen to system theme state changes.

> 相关文档：[DarkMode 适配指南](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
> Related documents: [DarkMode Adaptation Guide](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|Byte Beat MiniApp|Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|`iOS 2.6.5+`、`Android 3.6.9+`|HBuilderX 3.6.9+|基础库 2.11.0+|x|x|x|V5.3.0+|x|x|x|
|`iOS 2.6.5+`, `Android 3.6.9+`| HBuilderX 3.6.9+|Basic library 2.11.0+| x| x| x| V5.3.0+| x| x| x|

**CALLBACK 返回参数**
**CALLBACK return parameter**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|:-|
|theme|String|主题名称(`dark`, `light`)|
| theme| String|Theme name (`dark`, `light`)|

**示例**
**Example**

```javascript
uni.onThemeChange(function (res) {
	console.log(res.theme);
});
```

### uni.offThemeChange(CALLBACK)
取消监听系统主题状态变化。
Cancel listening to system theme status changes.

> 相关文档：[DarkMode 适配指南](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
> Related documents: [DarkMode Adaptation Guide](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|Byte Beat MiniApp|Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|HBuilderX 3.6.9+|HBuilderX 3.6.9+|基础库 2.11.0+|x|x|x|V5.3.0+|x|x|x|
| HBuilderX 3.6.9+| HBuilderX 3.6.9+|Basic library 2.11.0+| x| x| x| V5.3.0+| x| x| x|

**参数**
**parameter**

`Function CallBack`：onThemeChange 传入的监听函数。
`Function CallBack`: The listener function passed in by onThemeChange.

**示例**
**example**

```javascript
const callback = function (res) {
	console.log(res.theme);
}
uni.onThemeChange(callback);
uni.offThemeChange(callback); // 此时不再触发 callback 方法
```

**注意**
**Notice**
- 自定义基座生效
- Custom base takes effect
- App 端需要开启暗黑模式。[5+ App](https://ask.dcloud.net.cn/article/36995) [uni-app 暗黑模式](https://uniapp.dcloud.net.cn/tutorial/darkmode.html#open-darkmode)
- The dark mode needs to be turned on on the App side. [5+ App](https://ask.dcloud.net.cn/article/36995) [uni-app dark mode](https://uniapp.dcloud.net.cn/tutorial/darkmode.html#open- dark mode)
