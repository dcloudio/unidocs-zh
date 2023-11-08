### uni.getWindowInfo()

获取窗口信息
Get window information

|App|H5|微信小程序|支付宝小程序|抖音小程序|快手小程序|QQ小程序|百度小程序|京东小程序|钉钉小程序|飞书小程序|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|√ `(3.4.13+)`|√ `(3.4.13+)`|√ `(2.20.1+)`|x|x|x|x|x|x|x|x|

**返回参数说明**
**Return parameter description**

|参数名|类型|说明|平台差异说明|
|Parameter Name|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|pixelRatio     |number|设备像素比||
|pixelRatio |number|Device pixel ratio||
|screenWidth		|number|屏幕宽度||
|screenWidth |number|Screen width||
|screenHeight		|number|屏幕高度||
|screenHeight |number|Screen Height||
|windowWidth		|number|可使用窗口宽度||
|windowWidth |number|Available window width||
|windowHeight		|number|可使用窗口高度||
|windowHeight |number|Available window heights||
|windowTop			|number|可使用窗口的顶部位置||				
|windowTop |number|The top position of the available window||
|windowBottom		|number|可使用窗口的底部位置||
|windowBottom |number|The bottom position of the available window||
|statusBarHeight	|number|手机状态栏的高度||
|statusBarHeight |number|The height of the mobile phone status bar||
|screenTop	|number|窗口上边缘的 y 值||
|screenTop |number|The y value of the top edge of the window||
|safeArea			|object|在竖屏正方向下的安全区域||
|safeArea |object|Safe area in the positive direction of vertical screen||
|safeAreaInsets		|object|在竖屏正方向下的安全区域插入位置||
|safeAreaInsets |object|Inset position of safe area in the positive direction of vertical screen||

**safeArea 的结构**
**Structure of safeArea**

|参数	|类型	|说明							|
|parameter |type |description |
|:-		|:-								|:-								|
|left	|Number	|安全区域左上角横坐标			|
|left |Number |Abscissa of the upper left corner of the safe area |
|right	|Number	|安全区域右下角横坐标			|
|right |Number |Abscissa of the lower right corner of the safe area |
|top	|Number	|安全区域左上角纵坐标			|
|top |Number |The vertical coordinate of the upper left corner of the safe area |
|bottom	|Number	|安全区域右下角纵坐标			|
|bottom |Number |The vertical coordinate of the lower right corner of the safe area |
|width	|Number	|安全区域的宽度，单位逻辑像素	|
|width |Number |Width of the safe area, in logical pixels |
|height	|Number	|安全区域的高度，单位逻辑像素	|
|height |Number |The height of the safe area, in logical pixels |

**safeAreaInsets 的结构**
**Structure of safeAreaInsets**

|参数	|类型	|说明							|
|parameter |type |description |
|:-		|:-								|:-								|
|left	|Number	|安全区域左侧插入位置			|
|left |Number |Insert position on the left side of the safe area |
|right	|Number	|安全区域右侧插入位置			|
|right |Number |The right caret position of the safe area |
|top	|Number	|安全区顶部插入位置			|
|top |Number |Safe Area Top Insertion |
|bottom	|Number	|安全区域底部插入位置			|
|bottom |Number |Insert position at the bottom of the safe area |