### uni.getSystemInfo(OBJECT)
获取系统信息。

**OBJECT 参数说明：**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|是|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数|说明|平台差异说明|
|:-|:-|:-|
|brand|设备品牌|App|
|model|设备型号|全平台支持。H5（3.1.10+）新增`PC`|
|pixelRatio|设备像素比||
|screenWidth|屏幕宽度||
|screenHeight|屏幕高度||
|windowWidth|可使用窗口宽度||
|windowHeight|可使用窗口高度||
|windowTop|可使用窗口的顶部位置|App、H5|
|windowBottom|可使用窗口的底部位置|App、H5|
|statusBarHeight|状态栏的高度||
|language|应用设置的语言||
|version|引擎版本号|H5不支持|
|system|操作系统名称及版本，如Android 10||
|platform|客户端平台，值域为：`ios`、`android`、`mac（3.1.10+）`、`windows（3.1.10+）`、`linux（3.1.10+）`||
|SDKVersion|客户端基础库版本|H5不支持|
|safeArea|在竖屏正方向下的安全区域|App、H5|
|safeAreaInsets|在竖屏正方向下的安全区域插入位置（2.5.3+）|App、H5|
|deviceId|设备 id|非 App 端由 uni-app 框架生成并存储，清空 Storage 会导致改变|

**Tips**
- 屏幕高度 = 原生NavigationBar高度（含状态栏高度）+ 可使用窗口高度 + 原生TabBar高度
- windowHeight不包含NavigationBar和TabBar的高度
- H5端，windowTop等于NavigationBar高度，windowBottom等于TabBar高度
- App端，windowTop等于透明状态NavigationBar高度，windowBottom等于透明状态TabBar高度
- 高度相关信息，要放在 onReady 里获取

**safeArea 的结构**

|参数	|类型	|说明							|
|:-		|:-								|:-								|
|left	|Number	|安全区域左上角横坐标			|
|right	|Number	|安全区域右下角横坐标			|
|top	|Number	|安全区域左上角纵坐标			|
|bottom	|Number	|安全区域右下角纵坐标			|
|width	|Number	|安全区域的宽度，单位逻辑像素	|
|height	|Number	|安全区域的高度，单位逻辑像素	|

**safeAreaInsets 的结构**

|参数	|类型	|说明							|
|:-		|:-								|:-								|
|left	|Number	|安全区域左侧插入位置			|
|right	|Number	|安全区域右侧插入位置			|
|top	|Number	|安全区顶部插入位置			|
|bottom	|Number	|安全区域底部插入位置			|


**示例**

```javascript
uni.getSystemInfo({
	success: function (res) {
		console.log(res.model);
		console.log(res.pixelRatio);
		console.log(res.windowWidth);
		console.log(res.windowHeight);
		console.log(res.language);
		console.log(res.version);
		console.log(res.platform);
	}
});
```

### uni.getSystemInfoSync()
获取系统信息同步接口。

**同步返回参数说明**

|参数|说明|平台差异说明|
|:-|:-|:-|
|brand|设备品牌|App|
|model|设备型号|全平台支持。H5（3.1.10+）新增`PC`|
|pixelRatio|设备像素比||
|screenWidth|屏幕宽度||
|screenHeight|屏幕高度||
|windowWidth|可使用窗口宽度||
|windowHeight|可使用窗口高度||
|windowTop|可使用窗口的顶部位置|App、H5|
|windowBottom|可使用窗口的底部位置|App、H5|
|statusBarHeight|状态栏的高度||
|language|应用设置的语言||
|version|引擎版本号|H5不支持|
|system|操作系统版本||
|platform|客户端平台，值域为：`ios`、`android`、`mac（3.1.10+）`、`windows（3.1.10+）`、`linux（3.1.10+）`||
|SDKVersion|客户端基础库版本|H5不支持|
|safeArea|在竖屏正方向下的安全区域|App、H5|
|safeAreaInsets|在竖屏正方向下的安全区域插入位置（2.5.3+）|App、H5|
|deviceId|设备 id|非 App 端由 uni-app 框架生成并存储，清空 Storage 会导致改变|

**Tips**
- 使用注意同上getSystemInfo

**safeArea 的结构**

|参数	|类型	|说明							|
|:-		|:-								|:-								|
|left	|Number	|安全区域左上角横坐标			|
|right	|Number	|安全区域右下角横坐标			|
|top	|Number	|安全区域左上角纵坐标			|
|bottom	|Number	|安全区域右下角纵坐标			|
|width	|Number	|安全区域的宽度，单位逻辑像素	|
|height	|Number	|安全区域的高度，单位逻辑像素	|

**safeAreaInsets 的结构**

|参数	|类型	|说明							|
|:-		|:-								|:-								|
|left	|Number	|安全区域左侧插入位置			|
|right	|Number	|安全区域右侧插入位置			|
|top	|Number	|安全区顶部插入位置			|
|bottom	|Number	|安全区域底部插入位置			|

**示例**

```javascript
try {
	const res = uni.getSystemInfoSync();
	console.log(res.model);
	console.log(res.pixelRatio);
	console.log(res.windowWidth);
	console.log(res.windowHeight);
	console.log(res.language);
	console.log(res.version);
	console.log(res.platform);
} catch (e) {
	// error
}
```

### uni.canIUse(String)
判断应用的 API，回调，参数，组件等是否在当前版本可用。

平台差异说明

|App|H5|
|:-:|:-:|
|√|x|

**String 参数说明**

使用 ``${API}.${method}.${param}.${options}`` 或者 ``${component}.${attribute}.${option}`` 方式来调用，例如：

- ``${API}`` 代表 API 名字
- ``${method}`` 代表调用方式，有效值为return, success, object, callback
- ``${param}`` 代表参数或者返回值
- ``${options}`` 代表参数的可选值
- ``${component}`` 代表组件名字
- ``${attribute}`` 代表组件属性
- ``${option}`` 代表组件属性的可选值

**示例**

```javascript
uni.canIUse('getSystemInfoSync.return.screenWidth');
uni.canIUse('getSystemInfo.success.screenWidth');
uni.canIUse('showToast.object.image');
uni.canIUse('request.object.method.GET');

uni.canIUse('live-player');
uni.canIUse('text.selectable');
uni.canIUse('button.open-type.contact');
```
