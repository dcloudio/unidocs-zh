### uni.getWindowInfo()

获取窗口信息

|App|H5|微信小程序|支付宝小程序|抖音小程序|快手小程序|QQ小程序|百度小程序|京东小程序|钉钉小程序|飞书小程序|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|√ `(3.4.13+)`|√ `(3.4.13+)`|√ `(2.20.1+)`|x|x|x|x|x|x|x|x|

**返回参数说明**

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|pixelRatio     |number|设备像素比||
|screenWidth		|number|屏幕宽度||
|screenHeight		|number|屏幕高度||
|windowWidth		|number|可使用窗口宽度||
|windowHeight		|number|可使用窗口高度||
|windowTop			|number|可使用窗口的顶部位置||				
|windowBottom		|number|可使用窗口的底部位置||
|statusBarHeight	|number|手机状态栏的高度||
|screenTop	|number|窗口上边缘的 y 值||
|safeArea			|object|在竖屏正方向下的安全区域||
|safeAreaInsets		|object|在竖屏正方向下的安全区域插入位置||

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