# pages.json 页面路由
`pages.json` 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。
The `pages.json` file is used to configure uni-app globally, to determine the path of the page file, window style, native navigation bar, native tabbar at the bottom, etc.

它类似微信小程序中`app.json`的**页面管理**部分。注意定位权限申请等原属于`app.json`的内容，在uni-app中是在manifest中配置。
It is similar to the **page management** part of `app.json` in the WeChat MiniApp. Note that the application for location permissions and other content that originally belonged to `app.json` are configured in the manifest in uni-app.

# 配置项列表
# Configuration item list

|属性|类型|必填|描述|平台兼容|
|Attribute|Type|Required|Description|Platform Compatibility|
|:-|:-|:-|:-|:-|
|[globalStyle](/collocation/pages?id=globalstyle)|Object|否|设置默认页面的窗口表现||
|[globalStyle](/collocation/pages?id=globalstyle)| Object|No|Set the window performance of the default page||
|[pages](/collocation/pages?id=pages)|Object Array|是|设置页面路径及窗口表现||
|[pages](/collocation/pages?id=pages)| Object Array|Yes|Set page path and window performance||
|[easycom](/collocation/pages?id=easycom)|Object|否|组件自动引入规则|2.5.5+|
|[easycom](/collocation/pages?id=easycom)| Object|No|Component automatic import rules|2.5.5+|
|[tabBar](/collocation/pages?id=tabbar)|Object|否|设置底部 tab 的表现||
|[tabBar](/collocation/pages?id=tabbar)| Object|No|Set the performance of the bottom tab||
|[condition](/collocation/pages?id=condition)|Object|否|启动模式配置||
|[condition](/collocation/pages?id=condition)| Object|No|Start mode configuration||
|[subPackages](/collocation/pages?id=subPackages)|Object Array|否|分包加载配置||
|[subPackages](/collocation/pages?id=subPackages)| Object Array|No|Subpackage loading configuration||
|[preloadRule](/collocation/pages?id=preloadrule)|Object|否|分包预下载规则|微信小程序|
|[preloadRule](/collocation/pages?id=preloadrule)| Object|No|Subcontract preload rule|WeChat MiniApp|
|[workers](https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html)|String|否|`Worker` 代码放置的目录|微信小程序|
|[workers](https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html)|String|No|The directory where `Worker` code is placed|WeChat MiniApp|
|[leftWindow](/collocation/pages?id=leftwindow)|Object|否|大屏左侧窗口|H5|
|[leftWindow](/collocation/pages?id=leftwindow)| Object|No|The left window of the big screen| H5|
|[topWindow](/collocation/pages?id=topwindow)|Object|否|大屏顶部窗口|H5|
|[topWindow](/collocation/pages?id=topwindow)| Object|No|The top window of the large screen| H5|
|[rightWindow](/collocation/pages?id=rightwindow)|Object|否|大屏右侧窗口|H5|
|[rightWindow](/collocation/pages?id=rightwindow)| Object|No|The right window of the big screen| H5|
|[uniIdRouter](/uniCloud/uni-id-summary.md?id=uni-id-router)|Object|否|自动跳转相关配置，新增于HBuilderX 3.5.0||
|entryPagePath|String|否|默认启动首页，新增于HBuilderX 3.7.0|微信小程序、支付宝小程序|

以下是一个包含了所有配置选项的 `pages.json` ：
Here is a `pages.json` with all configuration options:

```json
{
	"pages": [{
		"path": "pages/component/index",
		"style": {
			"navigationBarTitleText": "组件"
		}
	}, {
		"path": "pages/API/index",
		"style": {
			"navigationBarTitleText": "接口"
		}
	}, {
		"path": "pages/component/view/index",
		"style": {
			"navigationBarTitleText": "view"
		}
	}],
	"condition": { //模式配置，仅开发期间生效
		"current": 0, //当前激活的模式（list 的索引项）
		"list": [{
			"name": "test", //模式名称
			"path": "pages/component/view/index" //启动页面，必选
		}]
	},
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "演示",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8",
		"usingComponents":{
			"collapse-tree-item":"/components/collapse-tree-item"
		},
		"renderingMode": "seperated", // 仅微信小程序，webrtc 无法正常时尝试强制关闭同层渲染
		"pageOrientation": "portrait", //横屏配置，全局屏幕旋转设置(仅 APP/微信/QQ小程序)，支持 auto / portrait / landscape
		"rpxCalcMaxDeviceWidth": 960,
		"rpxCalcBaseDeviceWidth": 375,
		"rpxCalcIncludeWidth": 750
	},
	"tabBar": {
		"color": "#7A7E83",
		"selectedColor": "#3cc51f",
		"borderStyle": "black",
		"backgroundColor": "#ffffff",
		"height": "50px",
		"fontSize": "10px",
		"iconWidth": "24px",
		"spacing": "3px",
    	"iconfontSrc":"static/iconfont.ttf", // app tabbar 字体.ttf文件路径 app 3.4.4+
		"list": [{
			"pagePath": "pages/component/index",
			"iconPath": "static/image/icon_component.png",
			"selectedIconPath": "static/image/icon_component_HL.png",
			"text": "组件",
      		"iconfont": { // 优先级高于 iconPath，该属性依赖 tabbar 根节点的 iconfontSrc
       			"text": "\ue102",
        		"selectedText": "\ue103",
        		"fontSize": "17px",
        		"color": "#000000",
        		"selectedColor": "#0000ff"
      		}
		}, {
			"pagePath": "pages/API/index",
			"iconPath": "static/image/icon_API.png",
			"selectedIconPath": "static/image/icon_API_HL.png",
			"text": "接口"
		}],
		"midButton": {
			"width": "80px",
			"height": "50px",
			"text": "文字",
			"iconPath": "static/image/midButton_iconPath.png",
			"iconWidth": "24px",
			"backgroundImage": "static/image/midButton_backgroundImage.png"
		}
	},
  "easycom": {
    "autoscan": true, //是否自动扫描组件
    "custom": {//自定义扫描规则
      "^uni-(.*)": "@/components/uni-$1.vue"
    }
  },
  "topWindow": {
    "path": "responsive/top-window.vue",
    "style": {
      "height": "44px"
    }
  },
  "leftWindow": {
    "path": "responsive/left-window.vue",
    "style": {
      "width": "300px"
    }
  },
  "rightWindow": {
    "path": "responsive/right-window.vue",
    "style": {
      "width": "300px"
    },
    "matchMedia": {
      "minWidth": 768
    }
  }
}
```

## globalStyle

用于设置应用的状态栏、导航条、标题、窗口背景色等。
Used to set the status bar, navigation bar, title, window background color, etc. of the application.

|属性|类型|默认值|描述|平台差异说明|
|Properties|Type|Default Value|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|navigationBarBackgroundColor|HexColor|#F8F8F8|导航栏背景颜色（同状态栏背景色）|APP与H5为#F8F8F8，小程序平台请参考相应小程序文档|
|navigationBarTextStyle|String|black|导航栏标题颜色及状态栏前景颜色，仅支持 black/white|支付宝小程序不支持，请使用 [my.setNavigationBar](https://opendocs.alipay.com/mini/api/xwq8e6)|
|navigationBarTitleText|String||导航栏标题文字内容||
| navigationBarTitleText| String||Navigation bar title text||
|navigationStyle|String|default|导航栏样式，仅支持 default/custom。custom即取消默认的原生导航栏，需看[使用注意](/collocation/pages?id=customnav)|微信小程序 7.0+、百度小程序、H5、App（2.0.3+）|
| navigationStyle| String| default|Navigation bar style, only default/custom is supported. Custom is to cancel the default native navigation bar, please see [Use Note](/collocation/pages?id=customnav)|WeChat MiniApp 7.0+, Baidu MiniApp, H5, App (2.0.3+)|
|backgroundColor|HexColor|#ffffff|下拉显示出来的窗口的背景色|微信小程序|
| backgroundColor| HexColor|#ffffff|The background color of the window displayed in the pull-down|WeChat MiniApp|
|backgroundTextStyle|String|dark|下拉 loading 的样式，仅支持 dark / light|微信小程序|
| backgroundTextStyle| String| dark|The style of drop-down loading, only supports dark/light|WeChat MiniApp|
|enablePullDownRefresh|Boolean|false|是否开启下拉刷新，详见[页面生命周期](/tutorial/page.html#lifecycle)。||
| enablePullDownRefresh| Boolean| false|Whether to enable pull-down refresh, see [Page Lifecycle](/tutorial/page.html#lifecycle) for details. ||
|onReachBottomDistance|Number|50|页面上拉触底事件触发时距页面底部距离，单位只支持px，详见[页面生命周期](/tutorial/page.html#lifecycle)||
| onReachBottomDistance| Number| 50|The distance from the bottom of the page when the pull-up bottom event is triggered. The unit only supports px. For details, see [Page Lifecycle](/tutorial/page.html#lifecycle)||
|backgroundColorTop|HexColor|#ffffff|顶部窗口的背景色（bounce回弹区域）|仅 iOS 平台|
| backgroundColorTop| HexColor|#ffffff|Background color of the top window (bounce area) | iOS only|
|backgroundColorBottom|HexColor|#ffffff|底部窗口的背景色（bounce回弹区域）|仅 iOS 平台|
| backgroundColorBottom| HexColor|#ffffff|Background color of the bottom window (bounce area) | iOS only|
|titleImage|String||导航栏图片地址（替换当前文字标题），支付宝小程序内必须使用https的图片链接地址|支付宝小程序、H5、APP|
| titleImage| String||Navigation bar image address (replace the current text title), Alipay MiniApp must use https image link address|Alipay MiniApp, H5, APP|
|transparentTitle|String|none|导航栏整体（前景、背景）透明设置。支持 always 一直透明 / auto 滑动自适应 / none 不透明|支付宝小程序、H5、APP|
| transparentTitle| String| none|The overall (foreground, background) transparency setting of the navigation bar. Support always always transparent/auto sliding adaptive/none opaque|Alipay MiniApp, H5, APP|
|titlePenetrate|String|NO|导航栏点击穿透|支付宝小程序、H5|
| titlePenetrate| String| NO|Click to penetrate the navigation bar|Alipay MiniApp, H5|
|pageOrientation|String|portrait|横屏配置，屏幕旋转设置，仅支持 auto / portrait / landscape 详见 [响应显示区域变化](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html)|App 2.4.7+、微信小程序、QQ小程序|
| pageOrientation| String| portrait|Landscape screen configuration, screen rotation setting, only supports auto / portrait / landscape For details, see [Response to display area changes](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html)|App 2.4.7+, WeChat MiniApp, QQ MiniApp|
|animationType|String|pop-in|窗口显示的动画效果，详见：[窗口动画](/api/router?id=animation)|App|
| animationType| String| pop-in|Animation effect of window display, see: [Window Animation](/api/router?id=animation)| App|
|animationDuration|Number|300|窗口显示动画的持续时间，单位为 ms|App|
| animationDuration| Number| 300|Window display animation duration, the unit is ms| App|
|app-plus|Object||设置编译到 App 平台的特定样式，配置项参考下方 [app-plus](/collocation/pages?id=app-plus)|App|
| app-plus| Object||Set the specific style compiled to the App platform, the configuration items refer to the following [app-plus](/collocation/pages?id=app-plus)| App|
|h5|Object||设置编译到 H5 平台的特定样式，配置项参考下方 [H5](/collocation/pages?id=h5)|H5|
| h5| Object||Set the specific style compiled to the H5 platform, the configuration items refer to [H5](/collocation/pages?id=h5)| H5|
|mp-alipay|Object||设置编译到 mp-alipay 平台的特定样式，配置项参考下方 [MP-ALIPAY](/collocation/pages?id=mp-alipay)|支付宝小程序|
|mp-weixin|Object||设置编译到 mp-weixin 平台的特定样式，配置项参考下方 [MP-WEIXIN](/collocation/pages?id=mp-weixin)|微信小程序|
|mp-baidu|Object||设置编译到 mp-baidu 平台的特定样式，配置项参考下方 [MP-BAIDU](/collocation/pages?id=mp-baidu)|百度小程序|
|mp-toutiao|Object||设置编译到 mp-toutiao 平台的特定样式|抖音小程序|
|mp-lark|Object||设置编译到 mp-lark 平台的特定样式|飞书小程序|
| mp-lark| Object||Set the specific style compiled to the mp-lark platform | Feishu MiniApp|
|mp-qq|Object||设置编译到 mp-qq 平台的特定样式|QQ小程序|
| mp-qq| Object||Set the specific style compiled to mp-qq platform| QQ MiniApp|
|mp-kuaishou|Object||设置编译到 mp-kuaishou 平台的特定样式|快手小程序|
| mp-kuaishou| Object||Set the specific style compiled to mp-kuaishou platform| Kuaishou MiniApp|
|mp-jd|Object||设置编译到 mp-jd 平台的特定样式|京东小程序|
| mp-jd| Object||Set the specific style compiled to mp-jd platform|Jingdong MiniApp|
|usingComponents|Object| |引用小程序组件，参考 [小程序组件](/tutorial/miniprogram-subject.html#小程序自定义组件支持)||
| usingComponents| Object| |Reference MiniApp components, refer to [MiniApp Components](/tutorial/miniprogram-subject.html# MiniApp Custom Component Support)||
|renderingMode|String| |同层渲染，webrtc(实时音视频) 无法正常时尝试配置 seperated 强制关掉同层|微信小程序|
| renderingMode| String| | Same-layer rendering, webrtc (real-time audio and video) cannot work normally, try to configure seperated to forcibly turn off the same layer |WeChat MiniApp|
|leftWindow|Boolean|true|当存在 leftWindow 时，默认是否显示 leftWindow|H5|
| leftWindow| Boolean| true|When leftWindow exists, whether to display leftWindow by default| H5|
|topWindow|Boolean|true|当存在 topWindow 时，默认是否显示 topWindow|H5|
| topWindow| Boolean| true|When topWindow exists, whether to display topWindow by default| H5|
|rightWindow|Boolean|true|当存在 rightWindow 时，默认是否显示 rightWindow|H5|
| rightWindow| Boolean| true|When rightWindow exists, whether to display rightWindow by default| H5|
|rpxCalcMaxDeviceWidth|Number|960|rpx 计算所支持的最大设备宽度，单位 px|App（vue2 且不含 nvue）、H5（2.8.12+）|
| rpxCalcMaxDeviceWidth| Number| 960| The maximum device width supported by rpx calculation, unit px| App (vue2 and nvue not included), H5 (2.8.12+)|
|rpxCalcBaseDeviceWidth|Number|375|rpx 计算使用的基准设备宽度，设备实际宽度超出 rpx 计算所支持的最大设备宽度时将按基准宽度计算，单位 px|App（vue2 且不含 nvue）、H5（2.8.12+）|
| rpxCalcBaseDeviceWidth| Number| 375| The base device width used in rpx calculation. When the actual width of the device exceeds the maximum device width supported by rpx calculation, it will be calculated according to the base width. The unit is px| App (vue2 and nvue not included), H5 (2.8. 12+)|
|rpxCalcIncludeWidth|Number|750|rpx 计算特殊处理的值，始终按实际的设备宽度计算，单位 rpx|App（vue2 且不含 nvue）、H5（2.8.12+）|
| rpxCalcIncludeWidth| Number| 750| rpx calculates the specially processed value, always calculated according to the actual device width, unit rpx| App (vue2 and nvue not included), H5 (2.8.12+)|
|dynamicRpx|Boolean|false|动态 rpx，屏幕大小变化会重新渲染 rpx|App-nvue（vue3 固定值为 true） 3.2.13+|
| dynamicRpx| Boolean| false|Dynamic rpx, the screen size changes will re-render rpx| App-nvue (vue3 fixed value is true) 3.2.13+|
|maxWidth|Number||单位px，当浏览器可见区域宽度大于maxWidth时，两侧留白，当小于等于maxWidth时，页面铺满；不同页面支持配置不同的maxWidth；maxWidth = leftWindow(可选)+page(页面主体)+rightWindow(可选)|H5（2.9.9+）|
| maxWidth| Number|| unit px, when the width of the visible area of the browser is greater than maxWidth, the two sides are left blank; when it is less than or equal to maxWidth, the page is full; different pages support different maxWidth configurations; maxWidth = leftWindow(optional)+ page(page body)+rightWindow(optional)| H5（2.9.9+）|

**注意**
**Notice**

- 支付宝小程序使用`titleImage`时必须使用`https`的图片链接地址，需要真机调试才能看到效果，支付宝开发者工具内无效果
- Alipay MiniApp must use the image link address of `https` when using `titleImage`. It needs to be debugged on the real machine to see the effect, and there is no effect in the Alipay developer tool
- `globalStyle`中设置的`titleImage`也会覆盖掉`pages`->`style`内的设置文字标题
- The `titleImage` set in `globalStyle` will also override the text title set in `pages`->`style`
- 使用 `maxWidth` 时，页面内fixed元素需要使用--window-left,--window-right来保证布局位置正确
- When using `maxWidth`, the fixed elements in the page need to use --window-left, --window-right to ensure the correct layout position
- `dynamicRpx` vue3 nvue页面已移除此配置，升级为横竖屏切换自动rpx，如果不需要可以使用 px
- `dynamicRpx` This configuration has been removed from the vue3 nvue page, and it is upgraded to automatic rpx for horizontal and vertical screen switching. If you don’t need it, you can use px

## topWindow@topwindow

uni-app 2.9+ 新增 leftWindow, topWindow, rightWindow 配置。用于解决宽屏适配问题。
uni-app 2.9+ adds leftWindow, topWindow, rightWindow configuration. Used to solve widescreen adaptation problems.

以现有的手机应用为mainWindow，在左、上、右，可以追加新的页面显示窗体。
With the existing mobile application as the mainWindow, a new page display form can be added on the left, top, and right.

整体的宽屏适配思路，参考单独的[宽屏适配指南](https://uniapp.dcloud.net.cn/tutorial/adapt)
For the overall widescreen adaptation idea, refer to the separate [Widescreen Adaptation Guide](https://uniapp.dcloud.net.cn/tutorial/adapt)

|属性|类型|默认值|描述|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|path|String||配置页面路径|
|path| String||Configuration page path|
|style|Object||配置页面窗口表现，配置项参考下方 [pageStyle](/collocation/pages?id=style)|
| style| Object||Configure page window performance, configuration items refer to the following [pageStyle](/collocation/pages?id=style)|
|matchMedia|Object||配置显示该窗口的规则，配置项参考下方 [matchMedia](/collocation/pages?id=matchmedia)|
| matchMedia| Object||Configure the rules for displaying this window, refer to the configuration items below [matchMedia](/collocation/pages?id=matchmedia)|

**注意**
**Notice**
- 目前 style 节点仅支持配置 width，height 等 css 样式相关属性
- Currently, the style node only supports configuration of CSS style-related properties such as width and height
- 如果需求当存在 topwindow 时，自动隐藏页面的 navigationBar，根据需求不同在`App.vue`中配置如下 css：
- If you need to automatically hide the navigationBar of the page when there is a topwindow, configure the following css in `App.vue` according to different requirements:
  - 只需要隐藏某个的页面 navigationBar
  - Only need to hide a certain page navigationBar
	```css
	/* 隐藏路径为 pages/component/view/view 页面的 navigationBar */
	.uni-app--showtopwindow [data-page="pages/component/view/view"] uni-page-head {
		display: none;
	}
	```
  - 需要隐藏大部分页面的 navigationBar，显示某个页面的 navigationBar
  - It is necessary to hide the navigationBar of most pages and display the navigationBar of a certain page
	```css
	/* 隐藏所有页面的 navigationBar */
	.uni-app--showtopwindow uni-page-head {
		display: none;
	}

	/* 显示路径为 pages/component/view/view 页面的 navigationBar */
	.uni-app--showtopwindow [data-page="pages/component/view/view"] uni-page-head {
		display: block;
	}
	```


#### matchMedia

|属性|类型|默认值|描述|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|minWidth|Number|768|当设备可见区域宽度 >= minWidth 时，显示该 window|
| minWidth| Number| 768|When the width of the visible area of the device is >= minWidth, this window will be displayed|

通过matchMedia的调节，可以自适应在不同屏幕上显示指定的window。
Through the adjustment of matchMedia, the specified window can be adaptively displayed on different screens.

```json
{
  "pages": [
    {
      "path": "pages/login/login",
      "style": {
        "topWindow": false // 当前页面不显示 topWindow
        "leftWindow": false // 当前页面不显示 leftWindow
        "rightWindow": false // 当前页面不显示 rightWindow
      }
    }
  ],
  "topWindow": {
    "path": "responsive/top-window.vue", // 指定 topWindow 页面文件
    "style": {
      "height": "44px"
    }
  },
  "leftWindow": {
    "path": "responsive/left-window.vue", // 指定 leftWindow 页面文件
    "style": {
      "width": "300px"
    }
  },
  "rightWindow": {
    "path": "responsive/right-window.vue", // 指定 rightWindow 页面文件
    "style": {
      "width": "300px" // 页面宽度
    },
    "matchMedia": {
      "minWidth": 768 //生效条件，当窗口宽度大于768px时显示
    }
  }
}
```

案例演示：HBuilderX 2.9.9+，新建项目选择hello uni-app或新闻模板，或直接浏览：[https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
Case demonstration: HBuilderX 2.9.9+, select hello uni-app or news template for new projects, or browse directly: [https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn /)

## leftWindow

与[topWindow](/collocation/pages?id=topwindow)相同
Same as [topWindow](/collocation/pages?id=topwindow)

## rightWindow

与[topWindow](/collocation/pages?id=topwindow)相同
Same as [topWindow](/collocation/pages?id=topwindow)

窗口通信参考：[https://uniapp.dcloud.net.cn/api/window/communication](https://uniapp.dcloud.net.cn/api/window/communication)
Window communication reference: [https://uniapp.dcloud.net.cn/api/window/communication](https://uniapp.dcloud.net.cn/api/window/communication)


## pages

`uni-app` 通过 pages 节点配置应用由哪些页面组成，pages 节点接收一个数组，数组每个项都是一个对象，其属性值如下：
`uni-app` configures which pages the application consists of through the pages node. The pages node receives an array, and each item in the array is an object, and its attribute values are as follows:

|属性|类型|默认值|描述|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|path|String||配置页面路径|
|path| String||Configuration page path|
|style|Object||配置页面窗口表现，配置项参考下方 [pageStyle](/collocation/pages?id=style)||
| style| Object||Configure page window performance, configuration items refer to the following [pageStyle](/collocation/pages?id=style)||

**Tips：**

- pages节点的第一项为应用入口页（即首页）
- The first item of the pages node is the application entry page (i.e. the home page)
- **应用中新增/减少页面**，都需要对 pages 数组进行修改
- **Add/reduce pages in the application**, you need to modify the pages array
- 文件名**不需要写后缀**，框架会自动寻找路径下的页面资源
- The file name ** does not need to write a suffix **, the framework will automatically find the page resources under the path

**代码示例：**
**Code sample:**

开发目录为：
The development directory is:
<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─pages
│  ├─index
│  │  └─index.vue
│  └─login
│     └─login.vue
├─static
├─main.js
├─App.vue
├─manifest.json
└─pages.json
	</code>
</pre>

则需要在 pages.json 中填写
You need to fill in pages.json

```javascript
{
    "pages": [
        {
            "path": "pages/index/index",
            "style": { ... }
        }, {
            "path": "pages/login/login",
            "style": { ... }
        }
    ]
}
```

## style

用于设置每个页面的状态栏、导航条、标题、窗口背景色等。
Used to set the status bar, navigation bar, title, window background color, etc. of each page.

页面中配置项会覆盖 [globalStyle](/collocation/pages?id=globalstyle) 中相同的配置项
The configuration items in the page will override the same configuration items in [globalStyle](/collocation/pages?id=globalstyle)

|属性|类型|默认值|描述|平台差异说明|
|Properties|Type|Default Value|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|navigationBarBackgroundColor|HexColor|#F8F8F8|导航栏背景颜色（同状态栏背景色）|APP与H5为#F8F8F8，小程序平台请参考相应小程序文档|
|navigationBarTextStyle|String|black|导航栏标题颜色及状态栏前景颜色，仅支持 black/white||
|navigationBarTitleText|String||导航栏标题文字内容||
| navigationBarTitleText| String||Navigation bar title text||
|navigationBarShadow|Object||导航栏阴影，配置参考下方 [导航栏阴影](/collocation/pages?id=navigationBarShadow)||
| navigationBarShadow| Object||Navigation bar shadow, configuration reference below [navigation bar shadow](/collocation/pages?id=navigationBarShadow)||
|navigationStyle|String|default|导航栏样式，仅支持 default/custom。custom即取消默认的原生导航栏，需看[使用注意](/collocation/pages?id=customnav)|微信小程序 7.0+、百度小程序、H5、App（2.0.3+）|
| navigationStyle| String| default|Navigation bar style, only default/custom is supported. Custom is to cancel the default native navigation bar, please see [Use Note](/collocation/pages?id=customnav)|WeChat MiniApp 7.0+, Baidu MiniApp, H5, App (2.0.3+)|
|disableScroll|Boolean|false|设置为 true 则页面整体不能上下滚动（bounce效果），只在页面配置中有效，在globalStyle中设置无效|微信小程序（iOS）、百度小程序（iOS）|
|backgroundColor|HexColor|#ffffff|窗口的背景色|微信小程序、百度小程序、抖音小程序、飞书小程序、京东小程序|
|backgroundTextStyle|String|dark|下拉 loading 的样式，仅支持 dark/light||
| backgroundTextStyle| String| dark|The style of drop-down loading, only dark/light is supported||
|enablePullDownRefresh|Boolean|false|是否开启下拉刷新，详见[页面生命周期](/tutorial/page.html#lifecycle)。||
| enablePullDownRefresh| Boolean| false|Whether to enable pull-down refresh, see [Page Lifecycle](/tutorial/page.html#lifecycle) for details. ||
|onReachBottomDistance|Number|50|页面上拉触底事件触发时距页面底部距离，单位只支持px，详见[页面生命周期](/tutorial/page.html#lifecycle)||
| onReachBottomDistance| Number| 50|The distance from the bottom of the page when the pull-up bottom event is triggered. The unit only supports px. For details, see [Page Lifecycle](/tutorial/page.html#lifecycle)||
|backgroundColorTop|HexColor|#ffffff|顶部窗口的背景色（bounce回弹区域）|仅 iOS 平台|
| backgroundColorTop| HexColor|#ffffff|Background color of the top window (bounce area) | iOS only|
|backgroundColorBottom|HexColor|#ffffff|底部窗口的背景色（bounce回弹区域）|仅 iOS 平台|
| backgroundColorBottom| HexColor|#ffffff|Background color of the bottom window (bounce area) | iOS only|
|disableSwipeBack|Boolean|false|是否禁用滑动返回|App-iOS（3.4.0+）|
| disableSwipeBack| Boolean| false|Whether to disable swipe back|App-iOS (3.4.0+)|
|titleImage|String||导航栏图片地址（替换当前文字标题），支付宝小程序内必须使用https的图片链接地址|支付宝小程序、H5、App|
| titleImage| String||Navigation bar picture address (replace the current text title), Alipay MiniApp must use https image link address|Alipay MiniApp, H5, App|
|transparentTitle|String|none|导航栏透明设置。支持 always 一直透明 / auto 滑动自适应 / none 不透明|支付宝小程序、H5、APP|
| transparentTitle| String| none|Navigation bar transparent setting. Support always always transparent/auto sliding adaptive/none opaque|Alipay MiniApp, H5, APP|
|titlePenetrate|String|NO|导航栏点击穿透|支付宝小程序、H5|
| titlePenetrate| String| NO|Click to penetrate the navigation bar|Alipay MiniApp, H5|
|app-plus|Object||设置编译到 App 平台的特定样式，配置项参考下方 [app-plus](/collocation/pages?id=app-plus)|App|
| app-plus| Object||Set the specific style compiled to the App platform, the configuration items refer to the following [app-plus](/collocation/pages?id=app-plus)| App|
|h5|Object||设置编译到 H5 平台的特定样式，配置项参考下方 [H5](/collocation/pages?id=h5)|H5|
| h5| Object||Set the specific style compiled to the H5 platform, the configuration items refer to [H5](/collocation/pages?id=h5)| H5|
|mp-alipay|Object||设置编译到 mp-alipay 平台的特定样式，配置项参考下方 [MP-ALIPAY](/collocation/pages?id=mp-alipay)|支付宝小程序|
| mp-alipay| Object||Set the specific style compiled to the mp-alipay platform, the configuration items refer to [MP-ALIPAY](/collocation/pages?id=mp-alipay)|Alipay MiniApp|
|mp-weixin|Object||设置编译到 mp-weixin 平台的特定样式|微信小程序|
| mp-weixin| Object||Set the specific style compiled to mp-weixin platform|WeChat MiniApp|
|mp-baidu|Object||设置编译到 mp-baidu 平台的特定样式|百度小程序|
|mp-toutiao|Object||设置编译到 mp-toutiao 平台的特定样式|抖音小程序|
|mp-lark|Object||设置编译到 mp-lark 平台的特定样式|飞书小程序|
| mp-lark| Object||Set the specific style compiled to the mp-lark platform | Feishu MiniApp|
|mp-qq|Object||设置编译到 mp-qq 平台的特定样式|QQ小程序|
| mp-qq| Object||Set the specific style compiled to mp-qq platform| QQ MiniApp|
|mp-kuaishou|Object||设置编译到 mp-kuaishou 平台的特定样式|快手小程序|
| mp-kuaishou| Object||Set the specific style compiled to mp-kuaishou platform| Kuaishou MiniApp|
|mp-jd|Object||设置编译到 mp-jd 平台的特定样式|京东小程序|
| mp-jd| Object||Set the specific style compiled to mp-jd platform|Jingdong MiniApp|
|usingComponents|Object||引用小程序组件，参考 [小程序组件](/tutorial/miniprogram-subject.html#小程序自定义组件支持)|App、微信小程序、支付宝小程序、百度小程序、京东小程序|
| usingComponents| Object||Referring to MiniApp components, refer to [MiniApp Components](/tutorial/miniprogram-subject.html# MiniApp Custom Component Support)| App, WeChat MiniApp, Alipay MiniApp, Baidu MiniApp, JD.com MiniApp|
|leftWindow|Boolean|true|当存在 leftWindow时，当前页面是否显示 leftWindow|H5|
| leftWindow| Boolean| true|When leftWindow exists, whether the current page displays leftWindow| H5|
|topWindow|Boolean|true|当存在 topWindow 时，当前页面是否显示 topWindow|H5|
| topWindow| Boolean| true|When topWindow exists, whether to display topWindow| H5| on the current page
|rightWindow|Boolean|true|当存在 rightWindow时，当前页面是否显示 rightWindow|H5|
| rightWindow| Boolean| true|When rightWindow exists, whether the current page displays rightWindow| H5|
|maxWidth|Number||单位px，当浏览器可见区域宽度大于maxWidth时，两侧留白，当小于等于maxWidth时，页面铺满；不同页面支持配置不同的maxWidth；maxWidth = leftWindow(可选)+page(页面主体)+rightWindow(可选)|H5（2.9.9+）|
| maxWidth| Number|| unit px, when the width of the visible area of the browser is greater than maxWidth, the two sides are left blank; when it is less than or equal to maxWidth, the page is full; different pages support different maxWidth configurations; maxWidth = leftWindow(optional)+ page(page body)+rightWindow(optional)| H5（2.9.9+）|

**注意**
**Notice**

- 使用 `maxWidth` 时，页面内fixed元素需要使用--window-left,--window-right来保证布局位置正确
- When using `maxWidth`, the fixed elements in the page need to use --window-left, --window-right to ensure the correct layout position

**代码示例：**
**Code sample:**

```javascript
{
  "pages": [{
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页",//设置页面标题文字
        "enablePullDownRefresh":true//开启下拉刷新
      }
    },
    ...
  ]
}
```


**注意**
**Notice**

- 支付宝小程序使用`titleImage`时必须使用`https`的图片链接地址，需要真机调试才能看到效果，支付宝开发者工具内无效果
- Alipay MiniApp must use the image link address of `https` when using `titleImage`. It needs to be debugged on the real machine to see the effect, and there is no effect in the Alipay developer tool

### 自定义导航栏使用注意@customnav
### Custom navigation bar use attention @customnav
当navigationStyle设为custom或titleNView设为false时，原生导航栏不显示，此时要注意几个问题：
When navigationStyle is set to custom or titleNView is set to false, the native navigation bar is not displayed. At this time, several issues should be paid attention to:
- 非H5端，手机顶部状态栏区域会被页面内容覆盖。这是因为窗体是沉浸式的原因，即全屏可写内容。uni-app提供了状态栏高度的css变量[--status-bar-height](/tutorial/syntax-css.html#css-变量)，如果需要把状态栏的位置从前景部分让出来，可写一个占位div，高度设为css变量。
- For non-H5 terminals, the status bar area at the top of the mobile phone will be covered by the page content. This is because the form is immersive, i.e. full screen writable content. uni-app provides the css variable [--status-bar-height](/tutorial/syntax-css.html#css-%E5%8F%98%E9%87%8F) of the status bar height, if you need to put the status The position of the column is given away from the foreground part, and a placeholder div can be written, and the height is set to a css variable.
```html
<template>
    <view>
        <view class="status_bar">
            <!-- 这里是状态栏 -->
            <!-- This is the status bar -->
        </view>
        <view> 状态栏下的文字 </view>
    </view>
</template>
<style>
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }
</style>
```
- 如果原生导航栏不能满足需求，推荐使用uni ui的[自定义导航栏NavBar](https://ext.dcloud.net.cn/plugin?id=52)。这个前端导航栏自动处理了状态栏高度占位问题。
- If the native navigation bar cannot meet the needs, it is recommended to use uni ui's [custom navigation bar NavBar](https://ext.dcloud.net.cn/plugin?id=52). This front-end navigation bar automatically handles the status bar height occupation problem.
- 前端导航栏搭配原生下拉刷新时，会有问题，包括
- When the front-end navigation bar is paired with native pull-down refresh, there will be problems, including
	* 微信小程序下iOS需要拉更长才能看到下拉刷新的三个点，而Android是从屏幕顶部下拉，无法从导航栏下方下拉。如果一定要从前端导航栏下拉，小程序下只能放弃原生下拉刷新，纯前端模拟，参考[mescroll插件](https://ext.dcloud.net.cn/plugin?id=343)，但这样很容易产生性能问题。目前小程序平台自身没有提供更好的方案
	* Under the WeChat MiniApp, iOS needs to be pulled longer to see the three points of pull-to-refresh, while Android pulls down from the top of the screen and cannot pull down from the bottom of the navigation bar. If you must pull down from the front-end navigation bar, you can only give up the native pull-down refresh under the MiniApp, pure front-end simulation, refer to [mescroll plugin](https://ext.dcloud.net.cn/plugin?id=343),but this It is easy to have performance problems. At present , the MiniApp platform itself does not provide a better solution
	* App和H5下，原生下拉刷新提供了[circle样式](/collocation/pages?id=app-pullToRefresh)，可以指定offset偏移量（pages.json的app-plus下配置），自定义下拉圈出现的位置。在hello uni-app的扩展组件中有示例。
	* Under App and H5, the native pull-down refresh provides [circle style](/collocation/pages?id=app-pullToRefresh), you can specify the offset offset (configured under app-plus in pages.json), and customize the drop-down circle where it appears. There are examples in the extension component of hello uni-app.
- 非H5端，前端导航盖不住原生组件。如果页面有video、map、textarea(仅小程序)等[原生组件](/component/native-component)，滚动时会覆盖住导航栏
- On the non-H5 side, the front-end navigation cannot cover the native components. If the page has [native components](/component/native-component) such as video, map, textarea (MiniApp only), etc., the navigation bar will be covered when scrolling
	* 如果是小程序下，可以使用cover-view来做导航栏，避免覆盖问题
	* If it is a MiniApp, you can use cover-view as the navigation bar to avoid coverage problems
	* 如果是App下，建议使用[titleNView](/collocation/pages?id=app-titleNView)或[subNVue](/collocation/pages?id=app-subNVues)，体验更好
	* If it is under App, it is recommended to use [titleNView](/collocation/pages?id=app-titleNView) or [subNVue](/collocation/pages?id=app-subNVues) for a better experience
- 前端组件在渲染速度上不如原生导航栏，原生导航可以在动画期间渲染，保证动画期间不白屏，但使用前端导航栏，在新窗体进入的动画期间可能会整页白屏，越低端的手机越明显。
- The rendering speed of the front-end components is not as good as that of the native navigation bar. The native navigation can be rendered during the animation to ensure that there is no white screen during the animation. However, when using the front-end navigation bar, the entire page may be blank during the animation of the new form. The lower the The phone at the end is more obvious.
- 以上讨论的是前端自定义导航栏，但在App侧，原生导航栏也提供了比小程序导航更丰富的自定义性
- The above discussion is the front-end custom navigation bar, but on the App side, the native navigation bar also provides richer customization than the MiniApp navigation
	* titleNView：给原生导航栏提供更多配置，包括自定义按钮、滚动渐变效果、搜索框等，详见[titleNView](/collocation/pages?id=app-titleNView)
	* titleNView: Provide more configurations for the native navigation bar, including custom buttons, scrolling gradient effects, search boxes, etc., see [titleNView](/collocation/pages?id=app-titleNView) for details
	* subNVue：使用nvue原生渲染，所有布局自己开发，具备一切自定义灵活度。详见[subNVue](/collocation/pages?id=app-subNVues)
	* subNVue: Use nvue native rendering, develop all layouts by yourself, with all customization flexibility. See [subNVue](/collocation/pages?id=app-subNVues) for details
- 页面禁用原生导航栏后，想要改变状态栏的前景字体样式，仍可设置页面的 navigationBarTextStyle 属性（只能设置为 black或white）。如果想单独设置状态栏颜色，App端可使用[plus.navigator.setStatusBarStyle](http://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.setStatusBarStyle)设置。注意部分低端Android手机（4.4）自身不支持设置状态栏前景色。
- After the native navigation bar is disabled on the page, if you want to change the foreground font style of the status bar, you can still set the navigationBarTextStyle property of the page (can only be set to black or white). If you want to set the status bar color separately, you can use [plus.navigator.setStatusBarStyle](http://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.setStatusBarStyle) setting on the App side. Note that some low-end Android phones (4.4) do not support setting the foreground color of the status bar.

鉴于以上问题，在原生导航能解决业务需求的情况下，尽量使用原生导航。甚至有时需要牺牲一些不是很重要的需求。在App和H5下，uni-app提供了灵活的处理方案：[titleNView](/collocation/pages?id=app-titleNView)、[subNVue](/collocation/pages?id=app-subNVues)、或整页使用nvue。但在小程序下，因为其自身的限制，没有太好的方案。有必要的话，也可以用条件编译分端处理。
In view of the above problems, try to use native navigation when native navigation can solve business needs. Sometimes it is even necessary to sacrifice some less important needs. Under App and H5, uni-app provides flexible solutions: [titleNView](/collocation/pages?id=app-titleNView), [subNVue](/collocation/pages?id=app-subNVues), or the whole The page uses nvue. But under the MiniApp, because of its own limitations, there is no good solution. If necessary, you can also use conditional compilation to split the processing.

### app-plus

配置编译到 App 平台时的特定样式，部分常用配置 H5 平台也支持。以下仅列出常用，更多配置项参考 [WebviewStyles](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyles)。
Configure the specific style when compiling to the App platform, and some commonly used configurations are also supported by the H5 platform. The following are only common ones. For more configuration items, please refer to [WebviewStyles](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyles).

|属性|类型|默认值|描述|平台兼容|
|Properties|Type|Default|Description|Platform Compatibility|
|:-|:-|:-|:-|:-|
|background|HexColor|#FFFFFF|窗体背景色。无论vue页面还是nvue页面，在App上都有一个父级原生窗体，该窗体的背景色生效时间快于页面里的css生效时间|App (vue 页面需要将 body 背景色设为透明)|
|titleNView|Object||导航栏 ，详见:[导航栏](/collocation/pages?id=app-titleNView)|App、H5|
| titleNView| Object||Navigation Bar, see: [Navigation Bar](/collocation/pages?id=app-titleNView)| App、H5|
|subNVues|Object||原生子窗体，详见:[原生子窗体](/collocation/pages?id=app-subNVues)|App 1.9.10+|
| subNVues| Object||Native sub-form, see: [Native sub-form](/collocation/pages?id=app-subNVues)| App 1.9.10+|
|bounce|String||页面回弹效果，设置为 "none" 时关闭效果。|App-vue（nvue Android无页面级bounce效果，仅list、recycle-list、waterfall等滚动组件有bounce效果）|
| bounce| String|| page bounce effect, set to "none" to disable the effect. | App-vue (nvue Android has no page-level bounce effect, only list, recycle-list, waterfall and other scrolling components have bounce effect)|
|popGesture|String|close|侧滑返回功能，可选值："close"（启用侧滑返回）、"none"（禁用侧滑返回）|App-iOS|
| popGesture| String| close|Slide back function, optional values: "close" (enable slide back), "none" (disable slide back) | App-iOS|
|softinputNavBar|String|auto|iOS软键盘上完成工具栏的显示模式，设置为 "none" 时关闭工具栏。|App-iOS|
| softinputNavBar| String| auto| The display mode of the completion toolbar on the iOS soft keyboard. When set to "none", the toolbar is turned off. | App-iOS|
|softinputMode|String|adjustPan|软键盘弹出模式，支持 adjustResize、adjustPan 两种模式|App|
| softinputMode| String| adjustPan|soft keyboard pop-up mode, support adjustResize, adjustPan two modes | App|
|pullToRefresh|Object||下拉刷新|App|
| pullToRefresh| Object||pull to refresh| App|
|scrollIndicator|String||滚动条显示策略，设置为 "none" 时不显示滚动条。|App|
| scrollIndicator| String||Scroll bar display policy, when set to "none", no scroll bar will be displayed. | App|
|animationType|String|pop-in|窗口显示的动画效果，详见：[窗口动画](/api/router?id=animation)。|App|
| animationType| String| pop-in| The animation effect of window display, see: [window animation](/api/router?id=animation) for details. | App|
|animationDuration|Number|300|窗口显示动画的持续时间，单位为 ms。|App|
| animationDuration| Number| 300|The duration of the window display animation, in ms. | App|
**Tips**
- `.nvue` 页面仅支持 `titleNView、pullToRefresh、scrollIndicator` 配置，其它配置项暂不支持
- The `.nvue` page only supports `titleNView, pullToRefresh, scrollIndicator` configuration, other configuration items are not currently supported

#### 导航栏@app-titleNView
#### Navigation Bar @app-titleNView
|属性|类型|默认值|描述|版本兼容性|
|Attribute|Type|Default|Description|Version Compatibility|
|:-|:-|:-|:-|:-|
|backgroundColor|String|#F7F7F7|背景颜色，支持16进制颜色或RGBA颜色。|App端仅悬浮导航栏支持RGBA颜色|
| backgroundColor| String|#F7F7F7|Background color, supports hexadecimal color or RGBA color. | Only the floating navigation bar on the App side supports RGBA colors|
|buttons|Array||自定义按钮，详见 [buttons](/collocation/pages?id=app-titlenview-buttons)|纯nvue即render:native时暂不支持|
| buttons| Array||custom buttons, see [buttons](/collocation/pages?id=app-titleview-buttons)|pure nvue, that is, render:native is not supported temporarily|
|titleColor|String|#000000|标题文字颜色||
| titleColor| String|#000000|title text color||
|titleOverflow|String|ellipsis|标题文字超出显示区域时处理方式。"clip"-超出显示区域时内容裁剪；"ellipsis"-超出显示区域时尾部显示省略标记（...）。||
| titleOverflow| String| ellipsYes|The processing method when the title text exceeds the display area. "clip" - the content clips when it exceeds the display area; "ellipsis" - the trailing ellipsis mark (...) is displayed when it exceeds the display area. ||
|titleText|String||标题文字内容||
| titleText| String||title text content||
|titleSize|String||标题文字字体大小||
| titleSize| String||title text font size||
|type|String|default|导航栏样式。"default"-默认样式；"transparent"-滚动透明渐变；"float"-悬浮导航栏。|App-nvue 2.4.4+ 支持、App-vue、H5|
| type| String| default|Navigation bar style. "default" - default style; "transparent" - scroll transparent gradient; "float" - floating navigation bar. | App-nvue 2.4.4+ support, App-vue, H5|
|tags|Array||原生 View 增强，详见：[5+ View 控件](http://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.ViewDrawTagStyles)||
| tags| Array||Native View enhancements, see: [5+ View Controls](http://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.ViewDrawTagStyles)||
|searchInput|Object||原生导航栏上的搜索框配置，详见：[searchInput](/collocation/pages?id=app-titlenview-searchinput)|1.6.0|
| searchInput| Object||The configuration of the search box on the native navigation bar, see: [searchInput](/collocation/pages?id=app-titlenview-searchinput)| 1.6.0|
|homeButton|Boolean|false|标题栏控件是否显示Home按钮||
| homeButton| Boolean| false|Whether the title bar control displays the Home button||
|autoBackButton|Boolean|true|标题栏控件是否显示左侧返回按钮|App 2.6.3+|
| autoBackButton| Boolean| true|Whether the title bar control displays the left back button| App 2.6.3+|
|backButton|Object||返回按钮的样式，详见：[backButton](/collocation/pages?id=app-titleNView-backButtonStyles)|App 2.6.3|
| backButton| Object||The style of the back button, see: [backButton](/collocation/pages?id=app-titleNView-backButtonStyles)| App 2.6.3|
|backgroundImage|String||支持以下类型： 背景图片路径 - 如"/static/img.png"，仅支持本地文件绝对路径，根据实际标题栏宽高拉伸绘制； 渐变色 - 仅支持线性渐变，两种颜色的渐变，如“linear-gradient(to top, #a80077, #66ff00)”， 其中第一个参数为渐变方向，可取值： "to right"表示从左向右渐变， “to left"表示从右向左渐变， “to bottom"表示从上到下渐变， “to top"表示从下到上渐变， “to bottom right"表示从左上角到右下角， “to top left"表示从右下角到左上角|2.6.3|
| backgroundImage| String||Supports the following types: background image path - such as "/static/img. Gradient of two colors, such as "linear-gradient(to top, #a80077, #66ff00)", where the first parameter is the direction of the gradient, which can take values: "to right" means gradient from left to right, "to left" Indicates a gradient from right to left, "to bottom" indicates a gradient from top to bottom, "to top" indicates a gradient from bottom to top, "to bottom right" indicates a gradient from upper left to lower right, and "to top left" indicates a gradient from right Bottom to top left | 2.6.3 |
|backgroundRepeat|String||仅在backgroundImage设置为图片路径时有效。 可取值： "repeat" - 背景图片在垂直方向和水平方向平铺； "repeat-x" - 背景图片在水平方向平铺，垂直方向拉伸； “repeat-y” - 背景图片在垂直方向平铺，水平方向拉伸； “no-repeat” - 背景图片在垂直方向和水平方向都拉伸。 默认使用 “no-repeat"|2.6.3|
|backgroundRepeat| String|| is only valid when backgroundImage is set as an image path. Possible values: "repeat" - background image is tiled vertically and horizontally; "repeat-x" - background image is tiled horizontally and vertically stretched; "repeat-y" - background image is tiled vertically tiled, stretched horizontally; "no-repeat" - the background image is stretched both vertically and horizontally. Defaults to "no-repeat" | 2.6.3|
|titleAlign|String|"auto"|可取值： "center"-居中对齐； "left"-居左对齐； "auto"-根据平台自动选择（Android平台居左对齐，iOS平台居中对齐）|2.6.3|
| titleAlign| String|"auto"| Possible values: "center"-center alignment; "left"-left alignment; "auto"-automatic selection according to the platform (Android platform left alignment, iOS platform center alignment) | 2.6.3 |
|blurEffect|String|"none"|此效果将会高斯模糊显示标题栏后的内容，仅在type为"transparent"或"float"时有效。 可取值： "dark" - 暗风格模糊，对应iOS原生UIBlurEffectStyleDark效果； "extralight" - 高亮风格模糊，对应iOS原生UIBlurEffectStyleExtraLight效果； "light" - 亮风格模糊，对应iOS原生UIBlurEffectStyleLight效果； "none" - 无模糊效果。 注意：使用模糊效果时应避免设置背景颜色，设置背景颜色可能覆盖模糊效果。|2.4.3|
| blurEffect| String|"none"|This effect will Gaussian blur the content behind the title bar, only valid when type is "transparent" or "float". Possible values: "dark" - dark style blur, corresponding to iOS native UIBlurEffectStyleDark effect; "extralight" - highlight style blur, corresponding to iOS native UIBlurEffectStyleExtraLight effect; "light" - light style blur, corresponding to iOS native UIBlurEffectStyleLight effect; "none" - No blur effect. Note: You should avoid setting the background color when using the blur effect, setting the background color may cover the blur effect. |2.4.3|
|coverage|String|"132px"|标题栏控件变化作用范围，仅在type值为transparent时有效，页面滚动时标题栏背景透明度将发生变化。 当页面滚动到指定偏移量时标题栏背景变为完全不透明。 支持百分比、像素值||
| coverage| String|"132px"|The change scope of the title bar control is only valid when the type value is transparent, and the background transparency of the title bar will change when the page is scrolled. The title bar background becomes fully opaque when the page is scrolled to the specified offset. Support percentage, pixel value||
|splitLine|Boolean |false|标题栏的底部分割线([SplitLineStyles](/collocation/pages?id=app-titleNView-splitLineStyles))，设置此属性则在标题栏控件的底部显示分割线，可配置颜色值及高度。 设置此属性值为undefined或null则隐藏分割线。 默认不显示底部分割线|2.6.6|
| splitLine| Boolean | false|The split line at the bottom of the title bar ([SplitLineStyles](/collocation/pages?id=app-titleNView-splitLineStyles)), setting this property will display the split line at the bottom of the title bar control, and the color can be configured value and height. Setting this property value to undefined or null hides the dividing line. Bottom divider not shown by default | 2.6.6|
|subtitleColor|String||副标题文字颜色，颜色值格式为"#RRGGBB"和"rgba(R,G,B,A)"，如"#FF0000"表示标题文字颜色为红色。 默认值与主标题文字颜色一致|2.6.6|
| subtitleColor| String|| Subtitle text color, the color value format is "#RRGGBB" and "rgba(R,G,B,A)", such as "#FF0000" means the title text color is red. The default value is the same as the main title text color|2.6.6|
|subtitleSize|String|"auto"|副标题文字字体大小，字体大小单位为像素，如"14px"表示字体大小为14像素，默认值为12像素。|2.6.6|
| subtitleSize| String|"auto"|The subtitle text font size, the font size unit is pixel, such as "14px" means the font size is 14 pixels, and the default value is 12 pixels. |2.6.6|
|subtitleOverflow|String|"ellipsis"|标题文字超出显示区域时处理方式，可取值： "clip" - 超出显示区域时内容裁剪； "ellipsis" - 超出显示区域时尾部显示省略标记（...）。|2.6.6|
| subtitleOverflow| String|"ellipsis"|The processing method when the title text exceeds the display area, possible values: "clip" - the content is clipped when it exceeds the display area; "ellipsis" - the ellipsis mark is displayed at the end when it exceeds the display area (...) . |2.6.6|
|subtitleText|String||副标题文字内容，设置副标后将显示两行标题，副标显示在主标题（titleText）下方。 注意：设置副标题后将居左显示|2.6.6|
| subtitleText| String|| Subtitle text content, after setting the subtitle, two lines of titles will be displayed, and the subtitle will be displayed under the main title (titleText). Note: After setting the subtitle, it will be displayed on the left | 2.6.6|
|titleIcon|String||标题图标，图标路径如"./img/t.png"，仅支持本地文件路径， 相对路径，相对于当前页面的host位置，固定宽高为逻辑像素值"34px"。 要求图片的宽高相同。 注意：设置标题图标后标题将居左显示。|2.6.6|
| titleIcon| String||Title icon, icon path such as "./img/t.png", only supports local file path, relative path, relative to the host position of the current page, fixed width and height are logical pixel value "34px". The image width and height are required to be the same. Note: After setting the title icon, the title will be displayed on the left. |2.6.6|
|titleIconRadius|String|无圆角|标题图标圆角，取值格式为"XXpx"，其中XX为像素值（逻辑像素），如"10px"表示10像素半径圆角。|2.6.6|
| titleIconRadius| String|No rounded corners|The rounded corners of the title icon, the value format is "XXpx", where XX is the pixel value (logical pixel), such as "10px" means a rounded corner with a radius of 10 pixels. |2.6.6|

#### SplitLineStyles@app-titleNView-splitLineStyles
|属性|类型|默认值|描述|版本兼容性|
|Attribute|Type|Default|Description|Version Compatibility|
|:-|:-|:-|:-|:-|
|color|String|#CCCCCC|底部分割线颜色，可取值： "#RRGGBB"格式字符串，如"#FF0000"表示绘制红色分割线； "rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明| |
| color| String|#CCCCCC|The color of the bottom dividing line, possible values: "#RRGGBB" format string, such as "#FF0000" means drawing a red dividing line; "rgba(R,G,B,A)", where R/G/B represent red value/green value/blue value respectively, positive integer type, the value range is 0-255, A is transparency, floating point type, the value range is 0-1 (0 is fully transparent, 1 is opaque), such as "rgba(255,0,0,0.5)", which means red is translucent | |
|height|String|"1px"|可取值：像素值（逻辑像素），支持小数点，如"1px"表示1像素高；百分比，如"1%"，相对于标题栏控件的高度。| |
| height| String|"1px"| Possible values: pixel value (logical pixel), support decimal point, such as "1px" means 1 pixel height; percentage, such as "1%", relative to the height of the title bar control. | |


**Tips**

- 页面支持通过配置 navigationStyle为custom，或titleNView为false，来禁用原生导航栏。一旦禁用原生导航，请注意阅读[自定义导航注意事项](/collocation/pages?id=customnav)。
- The page supports disabling the native navigation bar by configuring navigationStyle as custom or titleNView as false. Once native navigation is disabled, please read [Custom Navigation Considerations](/collocation/pages?id=customnav).
- `titleNView` 的 `type` 值为 `transparent` 时，导航栏为滚动透明渐变导航栏，默认只有button，滚动后标题栏底色和title文字会渐变出现，不支持自定义按钮设置color属性； `type` 为 `float` 时，导航栏为悬浮标题栏，此时页面内容上顶到了屏幕顶部，包括状态栏，但导航栏悬浮盖在页面上方，一般这种场景会同时设置导航栏的背景色为rgba半透明颜色。
- When the `type` value of `titleNView` is `transparent`, the navigation bar is a scrolling transparent gradient navigation bar. By default, there are only buttons. After scrolling, the background color of the title bar and the title text will appear gradually. Custom buttons are not supported to set the color attribute; When `type` is `float`, the navigation bar is a floating title bar. At this time, the page content is pushed up to the top of the screen, including the status bar, but the navigation bar is suspended above the page. Generally, the background of the navigation bar will be set at the same time in this scenario The color is the rgba translucent color.
- `titleNView` 的 `type` 值为 `transparent` 时，App-nvue 2.4.4+ 支持
- App-nvue 2.4.4+ supports when the `type` value of `titleNView` is `transparent`
- 在 `titleNView` 配置 `buttons` 后，监听按钮的点击事件，vue 页面及 nvue 的weex编译模式参考：[uni.onNavigationBarButtonTap](/tutorial/nvue-outline?id=onnavigationbarbuttontap)
- After configuring `buttons` in `titleNView`, listen to the click event of the button, refer to the weex compilation mode of the vue page and nvue: [uni.onNavigationBarButtonTap](/tutorial/nvue-outline?id=onnavigationbarbuttontap)
- 在 `titleNView` 配置 `searchInput` 后，相关的事件监听参考：[onNavigationBarSearchInputChanged 等](/collocation/frame/lifecycle?id=页面生命周期)
- After configuring `searchInput` in `titleNView`, related event monitoring reference: [onNavigationBarSearchInputChanged, etc.](/collocation/frame/lifecycle?id=%E9%A1%B5%E9%9D%A2%E7%94%9F% E5%91%BD%E5%91%A8%E6%9C%9F)
- 可通过 `[<navigation-bar>(/component/navigation-bar)]` 配置
- configurable via `[<navigation-bar>(/component/navigation-bar)]`
- App下原生导航栏的按钮如果使用字体图标，注意检查字体库的名字（font-family）是否使用了默认的 iconfont，这个名字是保留字，不能作为外部引入的字体库的名字，需要调整为自定义的名称，否则无法显示。
- If the button of the native navigation bar under the app uses a font icon, pay attention to check whether the name of the font library (font-family) uses the default iconfont. This name is a reserved word and cannot be used as the name of an externally imported font library. It needs to be adjusted to A custom name, otherwise it cannot be displayed.
- 想了解各种导航栏的开发方法，请详读[导航栏开发指南](https://ask.dcloud.net.cn/article/34921)
- To learn about the development methods of various navigation bars, please read [Navigation Bar Development Guide](https://ask.dcloud.net.cn/article/34921)

##### 自定义按钮@app-titleNView-buttons
##### Custom Buttons @app-titleNView-buttons

|属性|类型|默认值|描述|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|type|String|none|按钮样式，可取值见：[buttons 样式](/collocation/pages?id=app-titlenview-buttons-type)|
| type| String| none| button style, see: [buttons style](/collocation/pages?id=app-titlenview-buttons-type)|
|color|String|默认与标题文字颜色一致|按钮上文字颜色|
| color| String|The default is the same as the title text color|The color of the text on the button|
|background|String|默认值为灰色半透明|按钮的背景颜色，仅在标题栏type=transparent时生效|
| background| String|The default value is gray translucent|The background color of the button, it only takes effect when the title bar type=transparent|
|colorPressed|String|默认值为 color 属性值自动调整透明度为 0.3|按下状态按钮文字颜色|
| colorPressed| String|The default value is the color attribute value, and the transparency is automatically adjusted to 0.3|The text color of the pressed status button|
|float|String|right|按钮在标题栏上的显示位置，可取值"left"、"right"|
| float| String| right| The display position of the button on the title bar, which can be "left", "right"|
|fontWeight|String|normal|按钮上文字的粗细。可取值"normal"-标准字体、"bold"-加粗字体。|
| fontWeight| String| normal| The thickness of the text on the button. Possible values are "normal" - standard font, "bold" - bold font. |
|fontSize|String||按钮上文字大小|
| fontSize| String||The text size on the button|
|fontSrc|String||按钮上文字使用的字体文件路径。不支持网络地址，请统一使用本地地址。|
| fontSrc| String|| The font file path used for the text on the button. Network addresses are not supported, please use local addresses uniformly. |
|select|String|false|是否显示选择指示图标（向下箭头），常用于城市选择|
| select| String| false|Whether to display the selection indicator icon (down arrow), often used for city selection|
|text|String||按钮上显示的文字。使用字体图标时 unicode 字符表示必须 '\u' 开头，如 "\ue123"（注意不能写成"\e123"）。|
| text| String|| The text to display on the button. When using a font icon, the unicode character representation must start with '\u', such as "\ue123" (note that it cannot be written as "\e123"). |
|width|String|44px|按钮的宽度，可取值： "*px" - 逻辑像素值，如"10px"表示10逻辑像素值，不支持rpx。按钮的内容居中显示； "auto" - 自定计算宽度，根据内容自动调整按钮宽度|
| width| String| 44px|The width of the button, possible values: "*px" - logical pixel value, such as "10px" means 10 logical pixel value, rpx is not supported. The content of the button is displayed in the center; "auto" - custom calculation width, automatically adjusts the width of the button according to the content|

##### 自定义返回按钮的样式@app-titleNView-backButtonStyles
##### Customize the style of the back button @app-titleNView-backButtonStyles

当autoBackButton设置为true时生效。 通过此属性可自定义返回按钮样式，如图标大小、红点、角标、标题等。
It takes effect when autoBackButton is set to true. Through this attribute, you can customize the style of the back button, such as icon size, red dot, corner mark, title, etc.

HBuilderX 2.6.3+ 支持
HBuilderX 2.6.3+ support

|属性|类型|默认值|描述|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|background|String|none|背景颜色，仅在标题栏type=transparent时生效，当标题栏透明时按钮显示的背景颜色。 可取值#RRGGBB和rgba格式颜色字符串，默认值为灰色半透明。|
| background| String| none|Background color, only valid when the title bar type=transparent, when the title bar is transparent, the background color of the button. Possible values are #RRGGBB and rgba format color strings, and the default value is gray translucent. |
|badgeText|String||角标文本，最多显示3个字符，超过则显示为...|
| badgeText| String||Badge text, up to 3 characters can be displayed, if it exceeds, it will be displayed as...|
|color|String|窗口标题栏控件的标题文字颜色。|图标和标题颜色，可取值： "#RRGGBB"格式字符串，如"#FF0000"表示红色； "rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。|
| color| String| The title text color of the window title bar control. |Icon and title color, possible values: "#RRGGBB" format string, such as "#FF0000" means red; "rgba(R,G,B,A)", where R/G/B represent red value/ Green value/blue value, positive integer type, the value range is 0-255, A is transparency, floating point type, the value range is 0-1 (0 is fully transparent, 1 is opaque), such as "rgba(255 ,0,0,0.5)", indicating that the red color is translucent. |
|colorPressed|String||按下状态按钮文字颜色，可取值： "#RRGGBB"格式字符串，如"#FF0000"表示红色； "rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。 默认值为color属性值自动调整透明度为0.3。|
| colorPressed| String|| Pressed state button text color, possible values: "#RRGGBB" format string, such as "#FF0000" means red; "rgba(R,G,B,A)", where R/G /B stands for red value/green value/blue value respectively, positive integer type, the value range is 0-255, A is transparency, floating point type, the value range is 0-1 (0 is fully transparent, 1 is opaque ), such as "rgba(255,0,0,0.5)", which means red is translucent. The default value is the color attribute value automatically adjusts the opacity to 0.3. |
|fontWeight|String|"normal"|返回图标的粗细，可取值： "normal" - 标准字体； "bold" - 加粗字体。|
| fontWeight| String|"normal"|Returns the weight of the icon, possible values: "normal" - standard font; "bold" - bold font. |
|fontSize|String||返回图标文字大小，可取值：字体高度像素值，数字加"px"格式字符串，如"22px"。 窗口标题栏为透明样式（type="transparent"）时，默认值为"22px"； 窗口标题栏为默认样式（type="default"）时，默认值为"27px"。|
| fontSize| String|| Returns the font size of the icon, possible values: font height pixel value, number plus "px" format string, such as "22px". When the window title bar is a transparent style (type="transparent"), the default value is "22px"; when the window title bar is a default style (type="default"), the default value is "27px". |
|redDot|Boolean|false|是否显示红点，设置为true则显示红点，false则不显示红点。默认值为false。 注意：当设置了角标文本时红点不显示。|
| redDot| Boolean| false|Whether to display red dots, set to true to display red dots, false to not display red dots. The default value is false. Note: The red dot is not displayed when the subtitle text is set. |
|title|String||返回按钮上的标题，显示在返回图标（字体图标）后，默认为空字符串。|
| title| String|| Returns the title on the button, displayed after the return icon (font icon), defaults to an empty string. |
|titleWeight|String|"normal"|返回按钮上标题的粗细，可取值： "normal" - 标准字体； "bold" - 加粗字体。|
| titleWeight| String|"normal"|Returns the weight of the title on the button, possible values: "normal" - standard font; "bold" - bold font. |


##### 按钮样式@app-titleNView-buttons-type
##### Button style @app-titleNView-buttons-type

使用 type 值设置按钮的样式时，会忽略 fontSrc 和 text 属性。
When styling a button with a type value, the fontSrc and text properties are ignored.

|值|说明|
|value|description|
|:-|:-|
|forward|前进按钮|
| forward|forward button|
|back|后退按钮|
| back|back button|
|share|分享按钮|
| share|Share button|
|favorite|收藏按钮|
| favorite|Favorite button|
|home|主页按钮|
| home|Home button|
|menu|菜单按钮|
| menu|menu button|
|close|关闭按钮|
| close|close button|
|none|无样式，需通过 text 属性设置按钮上显示的内容、通过 fontSrc 属性设置使用的字体库。|
| none|No style, you need to set the content displayed on the button through the text attribute, and set the font library used through the fontSrc attribute. |

##### 搜索框配置@app-titleNView-searchInput
##### Search box configuration @app-titleNView-searchInput

searchInput可以在titleNView的原生导航栏上放置搜索框。其宽度根据周围元素自适应。
searchInput can place a search box on the native navigation bar of titleNView. Its width adapts to surrounding elements.

|属性|类型|默认值|描述|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|autoFocus|Boolean|false|是否自动获取焦点|
| autoFocus| Boolean| false|whether to automatically get the focus|
|align|String|center|非输入状态下文本的对齐方式。可取值： "left" - 居左对齐； "right" - 居右对齐； "center" - 居中对齐。|
| align| String| center| The alignment of the text in the non-input state. Possible values: "left" - align left; "right" - align right; "center" - align center. |
|backgroundColor|String|rgba(255,255,255,0.5)|背景颜色|
| backgroundColor| String| rgba(255,255,255,0.5)|background color|
|borderRadius|String|0px|输入框的圆角半径，取值格式为"XXpx"，其中XX为像素值（逻辑像素），不支持rpx。|
| borderRadius| String| 0px|The fillet radius of the input box, the value format is "XXpx", where XX is the pixel value (logical pixel), rpx is not supported. |
|placeholder|String||提示文本。|
| placeholder| String|| hint text. |
|placeholderColor|String|#CCCCCC|提示文本颜色|
| placeholderColor| String|#CCCCCC|Prompt text color|
|disabled|Boolean|false|是否可输入|
| disabled| Boolean| false|Is it possible to input|

**searchInput Tips**

searchInput的点击输入框onNavigationBarSearchInputClicked、文本变化onNavigationBarSearchInputChanged、点击搜索按钮onNavigationBarSearchInputConfirmed等生命周期，见文档[页面生命周期](/tutorial/page.html#lifecycle)。
For the life cycle of searchInput click input box onNavigationBarSearchInputClicked, text change onNavigationBarSearchInputChanged, click search button onNavigationBarSearchInputConfirmed, etc., see the document [Page Life Cycle](/tutorial/page.html#lifecycle).
- 在生命周期里通过参数e.text，可获取输入框内容。具体见hello uni-app中模板-顶部导航栏中的示例
- In the life cycle, the content of the input box can be obtained through the parameter e.text. For details, see the template in hello uni-app - the example in the top navigation bar
- 如需动态修改searchInput，或者获取searchInput的placehold，参考[uni-app动态修改App端导航栏](https://ask.dcloud.net.cn/article/35374)
- If you need to dynamically modify the searchInput, or obtain the placehold of the searchInput, refer to [uni-app dynamically modify the App-side navigation bar](https://ask.dcloud.net.cn/article/35374)

**常见titleNView配置代码示例**
**Common titleNView configuration code example**

以下列出部分配置。关于全面的导航栏配置，这里有一个完善的演示工程，演示了导航栏的各种效果，详见：[https://ext.dcloud.net.cn/plugin?id=1765](https://ext.dcloud.net.cn/plugin?id=1765)
Some configurations are listed below. Regarding the comprehensive navigation bar configuration, here is a complete demonstration project that demonstrates various effects of the navigation bar. For details, see: [https://ext.dcloud.net.cn/plugin?id=1765](https:/ /ext.dcloud.net.cn/plugin?id=1765)

```javascript
{
	"pages": [{
			"path": "pages/index/index", //首页
			"style": {
				"app-plus": {
					"titleNView": false //禁用原生导航栏
				}
			}
		}, {
			"path": "pages/log/log", //日志页面
			"style": {
				"app-plus": {
					"bounce": "none", //关闭窗口回弹效果
					"titleNView": {
						"buttons": [ //原生标题栏按钮配置,
							{
								"text": "分享" //原生标题栏增加分享按钮，点击事件可通过页面的 onNavigationBarButtonTap 函数进行监听
							}
						],
						"backButton": { //自定义 backButton
							"background": "#00FF00"
						}
					}
				}
			}
		}, {
			"path": "pages/detail/detail", //详情页面
			"style": {
				"navigationBarTitleText": "详情",
				"app-plus": {
					"titleNView": {
						"type": "transparent"//透明渐变导航栏 App-nvue 2.4.4+ 支持
					}
				}
			}
		}, {
			"path": "pages/search/search", //搜索页面
			"style": {
				"app-plus": {
					"titleNView": {
						"type": "transparent",//透明渐变导航栏 App-nvue 2.4.4+ 支持
						"searchInput": {
							"backgroundColor": "#fff",
							"borderRadius": "6px", //输入框圆角
							"placeholder": "请输入搜索内容",
							"disabled": true //disable时点击输入框不置焦，可以跳到新页面搜索
						}
					}
				}
			}
		}
		...
	]
}
```

**Tips**

- buttons 的 text 推荐使用字体图标。如果使用了汉字或英文，推荐把字体改小一点，否则文字长度增加后，距离屏幕右边距太近。
- It is recommended to use font icons for the text of buttons. If Chinese characters or English are used, it is recommended to change the font to a smaller size, otherwise the length of the text will be too close to the right margin of the screen.
- App平台，buttons动态修改，[详见](https://ask.dcloud.net.cn/article/35374)
- App platform, buttons are dynamically modified, [see details](https://ask.dcloud.net.cn/article/35374)
- App平台，buttons角标动态修改，见 hello uni-app 中模板-顶部导航标题栏-导航栏带红点和角标
- App platform, dynamic modification of buttons corner mark, see template in hello uni-app - top navigation title bar - navigation bar with red dot and corner mark
- App平台，设置searchInput的文字动态修改，API见[文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.setTitleNViewSearchInputText)。注意disable状态无法设置文字、placehold暂不支持动态设置
- App platform, set the dynamic modification of searchInput text, API see [Documentation](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.setTitleNViewSearchInputText). Note that text cannot be set in the disable state, and placehold does not support dynamic settings for the time being
- H5平台，如需实现上述动态修改，需在条件编译通过dom操作修改
- For the H5 platform, if you need to implement the above dynamic modification, you need to modify it through dom operation in conditional compilation


#### 原生子窗体@app-subNVues
#### Native subform @app-subNVues

`subNVues` 是 vue 页面的原生子窗体。用于解决App中 vue 页面中的层级覆盖和原生界面灵活自定义用的。
`subNVues` is a native subwindow for vue pages. It is used to solve the hierarchical coverage in the vue page in the App and the flexible customization of the native interface.

它不是全屏页面，也不是组件，就是一个原生子窗体。它是一个 nvue 页面，使用 weex 引擎渲染，提供了比 cover-view、plus.nativeObj.view 更强大的原生排版能力，方便自定义原生导航或覆盖原生地图、视频等。请详读[subNVues 开发指南](http://ask.dcloud.net.cn/article/35948)
It is not a full-screen page, nor a component, but a native subform. It is an nvue page, rendered with the weex engine, which provides more powerful native layout capabilities than cover-view, plus.nativeObj.view, and is convenient for customizing native navigation or overlaying native maps, videos, etc. Please read [subNVues Development Guide](http://ask.dcloud.net.cn/article/35948)

`subNVue` 也可以在 nvue 页面中使用。但目前在纯nvue下（render为native）还不支持。
`subNVue` can also be used in nvue pages. But currently it is not supported under pure nvue (render is native).

|属性|类型|描述|
|Attribute|Type|Description|
|:- |:-  |:-|
|id|String| subNVue 原生子窗体的标识 |
| id| String| ID of subNVue's native subwindow |
|path|String|配置 nvue 文件路径，nvue 文件需放置到使用 subNvue 的页面文件目录下|
| path| String|Configure the nvue file path, the nvue file needs to be placed in the page file directory using subNvue|
|type|String|原生子窗口内置样式，可取值：'popup',弹出层；"navigationBar",导航栏|
| type| String| Built-in style of native sub-window, possible values: 'popup', popup layer; "navigationBar", navigation bar|
|style|Object|subNVue 原生子窗体的样式，配置项参考下方 [subNVuesStyle](/collocation/pages?id=app-subNVuesStyle)|
| style| Object| subNVue The style of the native sub-window, refer to the configuration item below [subNVuesStyle](/collocation/pages?id=app-subNVuesStyle)|

**Tips**
- `subNVues` 的 `id` 是全局唯一的，不能重复
- The `id` of `subNVues` is globally unique and cannot be repeated
- 可以通过 [uni.getSubNVueById('id')](/api/window/subNVues?id=app-getsubnvuebyid) 获取 `subNVues` 的实例
- An instance of `subNVues` can be obtained via [uni.getSubNVueById('id')](/api/window/subNVues?id=app-getsubnvuebyid)
- `subNVues` 的 `path` 属性只能是 `nvue` 文件路径
- `path` property of `subNVues` can only be `nvue` file path

##### 原生子窗体样式@app-subNVuesStyle
##### Native sub-form style @app-subNVuesStyle
|属性|类型|默认值|描述|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|position|String|absolute|原生子窗体的排版位置，排版位置决定原生子窗体在父窗口中的定位方式。 可取值："static"，原生子窗体在页面中正常定位，如果页面存在滚动条则随窗口内容滚动；"absolute"，原生子窗体在页面中绝对定位，如果页面存在滚动条不随窗口内容滚动；"dock"，原生子窗体在页面中停靠，停靠的位置由dock属性值决定。 默认值为"absolute"。|
| position| String| absolute|The typesetting position of the native sub-form, the typesetting position determines the positioning method of the native sub-form in the parent window. Possible values: "static", the native subform is positioned normally on the page, and scrolls along with the window content if there is a scroll bar on the page; "absolute", the native subform is positioned absolutely on the page, and does not follow the window if there is a scroll bar on the page Content scrolling; "dock", the native child form is docked on the page, and the docking position is determined by the value of the dock property. The default value is "absolute". |
|dock|String|bottom|原生子窗体的停靠方式,仅当原生子窗体 "position" 属性值设置为 "dock" 时才生效，可取值："top"，原生子窗体停靠则页面顶部；"bottom"，原生子窗体停靠在页面底部；"right"，原生子窗体停靠在页面右侧；"left"，原生子窗体停靠在页面左侧。 默认值为"bottom"。|
| dock| String| bottom| The docking method of the native sub-form, it will only take effect when the "position" attribute value of the native sub-form is set to "dock", the possible value: "top", the native sub-form docks the page Top; "bottom", the native subform is docked at the bottom of the page; "right", the native subform is docked at the right side of the page; "left", the native subform is docked at the left side of the page. The default value is "bottom". |
|mask|HexColor|rgba(0,0,0,0.5)|原生子窗体的遮罩层,仅当原生子窗体 "type" 属性值设置为 "popup" 时才生效，可取值： rgba格式字符串，定义纯色遮罩层样式，如"rgba(0,0,0,0.5)"，表示黑色半透明；|
| mask| HexColor| rgba(0,0,0,0.5)|The mask layer of the native sub-form, it will only take effect when the "type" attribute value of the native sub-form is set to "popup", and the possible values are: rgba Format string, which defines the style of the solid color mask layer, such as "rgba(0,0,0,0.5)", which means black translucence;|
|width|String|100%|原生子窗体的宽度,支持百分比、像素值，默认为100%。未设置width属性值时，可同时设置left和right属性值改变窗口的默认宽度。|
| width| String| 100%|The width of the native sub-window, support percentage, pixel value, the default is 100%. When the width attribute value is not set, the default width of the window can be changed by setting the left and right attribute values at the same time. |
|height|String|100%|原生子窗体的高度,支持百分比、像素值，默认为100%。 当未设置height属性值时，优先通过top和bottom属性值来计算原生子窗体的高度。|
| height| String| 100%|The height of the native sub-form, support percentage, pixel value, the default is 100%. When the value of the height attribute is not set, the height of the native subform is first calculated by the values of the top and bottom attributes. |
|top|String|0px|原生子窗体垂直向下的偏移量，支持百分比、像素值，默认值为0px。 未设置top属性值时，优先通过bottom和height属性值来计算原生子窗体的top位置。|
| top| String| 0px|The vertical downward offset of the native sub-window, which supports percentage and pixel value, and the default value is 0px. When the top property value is not set, the top position of the native subform is calculated first by the bottom and height property values. |
|bottom|String||原生子窗体垂直向上偏移量,支持百分比、像素值，默认值无值（根据top和height属性值来自动计算）。 当同时设置了top和height值时，忽略此属性值； 当未设置height值时，可通过top和bottom属性值来确定原生子窗体的高度。|
| bottom| String||The vertical upward offset of the native sub-form, which supports percentage and pixel values, and the default value is no value (automatically calculated according to the top and height attribute values). When the top and height values are set at the same time, this attribute value is ignored; when the height value is not set, the height of the native subform can be determined by the top and bottom attribute values. |
|left|String|0px|原生子窗体水平向左的偏移量，支持百分比、像素值，默认值为0px。 未设置left属性值时，优先通过right和width属性值来计算原生子窗体的left位置。|
| left| String| 0px|The horizontal offset to the left of the native sub-window. It supports percentage and pixel value. The default value is 0px. When the left property value is not set, the left position of the native subform is calculated by the right and width property values first. |
|right|String||原生子窗体水平向右的偏移量，支持百分比、像素值，默认无值（根据left和width属性值来自动计算）。 当设置了left和width值时，忽略此属性值； 当未设置width值时，可通过left和bottom属性值来确定原生子窗体的宽度。|
| right| String|| The horizontal offset to the right of the native sub-window, which supports percentage and pixel values, and defaults to no value (automatically calculated according to the left and width attribute values). When the left and width values are set, this property value is ignored; when the width value is not set, the left and bottom property values can be used to determine the width of the native subform. |
|margin|String||原生子窗体的边距，用于定位原生子窗体的位置，支持auto，auto表示居中。若设置了left、right、top、bottom则对应的边距值失效。|
| margin| String||The margin of the native sub-form, used to locate the position of the native sub-form, supports auto, and auto means centering. If left, right, top, and bottom are set, the corresponding margin values will be invalid. |
|zindex|Number||原生子窗体的窗口的堆叠顺序值，拥有更高堆叠顺序的窗口总是会处于堆叠顺序较低的窗口的前面，拥有相同堆叠顺序的窗口后调用show方法则在前面。|
|zindex|Number||The stacking order value of the window of the native subform, the window with a higher stacking order will always be in front of the window with a lower stacking order, and the window with the same stacking order after calling the show method will be in front . |
|background|String|#FFFFFF|窗口的背景颜色,Android平台4.0以上系统才支持“transparent”背景透明样式。比如subnvue为圆角时需要设置为transparent才能看到正确的效果|
| background| String|#FFFFFF|The background color of the window, and only Android platform 4.0 and above systems support the "transparent" background transparency style. For example, when subnvue is rounded, it needs to be set to transparent to see the correct effect|

**代码示例**
**code example**

```javascript
{
	"pages": [{
		"path": "pages/index/index", //首页
		"style": {
			"app-plus": {
				"titleNView": false , //禁用原生导航栏
				"subNVues":[{//侧滑菜单
					"id": "drawer", //subNVue 的 id，可通过 uni.getSubNVueById('drawer') 获取
					"path": "pages/index/drawer.nvue", // nvue 路径
					"style": { //webview style 子集，文档可暂时开放出来位置，大小相关配置
						"position": "popup", //除 popup 外，其他值域参考 5+ webview position 文档
						"width": "50%"
					}

				}, {//弹出层
					"id": "popup",
					"path": "pages/index/popup",
					"style": {
						"position": "popup",
						"margin":"auto",
						"width": "150px",
						"height": "150px"
					}

				}, {//自定义头
					"id": "nav",
					"path": "pages/index/nav",
					"style": {
						"position": "dock",
						"height": "44px"
					}

				}]
			}
		}
	}]
}
```


#### 下拉刷新@app-pullToRefresh
#### pull down to refresh @app-pullToRefresh
在 App 平台下可以自定义部分下拉刷新的配置 `page->style->app-plus->pullToRefresh`。
Under the App platform, you can customize the partial pull-to-refresh configuration `page->style->app-plus->pullToRefresh`.

|属性|类型|默认值|描述|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|support|Boolean|false|是否开启窗口的下拉刷新功能|
| support| Boolean| false|whether to enable the pull-down refresh function of the window|
|color|String|#2BD009|颜色值格式为"#RRGGBB"，仅"circle"样式下拉刷新支持此属性。|
| color| String|#2BD009|The format of the color value is "#RRGGBB", only the "circle" style pull-down refresh supports this property. |
|style|String|Android 平台为 circle；iOS 平台为 default。|可取值："default"——经典下拉刷新样式（下拉拖动时页面内容跟随）；"circle"——圆圈样式下拉刷新控件样式（下拉拖动时仅刷新控件跟随）。|
| style| String| The Android platform is circle; the iOS platform is default. |Possible values: "default" - classic pull-down refresh style (the page content follows when you pull down and drag); "circle" - circle style pull-down refresh control style (only the refresh control follows when you pull down and drag). |
|height|String||窗口的下拉刷新控件进入刷新状态的拉拽高度。支持百分比，如"10%"；像素值，如"50px"，不支持rpx。|
| height| String|| The drag height of the window's pull-down refresh control to enter the refresh state. Support percentage, such as "10%"; pixel value, such as "50px", does not support rpx. |
|range |String||窗口可下拉拖拽的范围。支持百分比，如"10%"；像素值，如"50px"，不支持rpx。|
|range|String||The range that the window can drop down and drag. Support percentage, such as "10%"; pixel value, such as "50px", does not support rpx. |
|offset|String|0px|下拉刷新控件的起始位置。仅对"circle"样式下拉刷新控件有效，用于定义刷新控件下拉时的起始位置。支持百分比，如"10%"；像素值，如"50px"，不支持rpx。如使用了非原生title且需要原生下拉刷新，一般都使用circle方式并将offset调至自定义title的高度|
| offset| String| 0px| The starting position of the pull-to-refresh control. Only valid for the "circle" style pull-down refresh control, it is used to define the starting position of the refresh control when it is pulled down. Support percentage, such as "10%"; pixel value, such as "50px", does not support rpx. If a non-native title is used and a native pull-down refresh is required, the circle method is generally used and the offset is adjusted to the height of the custom title|
|contentdown|Object||目前支持一个属性：caption——在下拉可刷新状态时下拉刷新控件上显示的标题内容。仅对"default"样式下拉刷新控件有效。|
| contentdown| Object||Currently supports one attribute: caption——the title content displayed on the control when it is pulled down to refresh. Only valid for "default" style pull-to-refresh controls. |
|contentover|Object||目前支持一个属性：caption——在释放可刷新状态时下拉刷新控件上显示的标题内容。仅对"default"样式下拉刷新控件有效。|
| contentover| Object|| currently supports one attribute: caption——pull down to refresh the title content displayed on the control when the refreshable state is released. Only valid for "default" style pull-to-refresh controls. |
|contentrefresh|Object||目前支持一个属性：caption——在正在刷新状态时下拉刷新控件上显示的标题内容。仅对"default"样式下拉刷新控件有效。|
| contentrefresh| Object|| currently supports one attribute: caption——pull down to refresh the title content displayed on the control when it is in the refresh state. Only valid for "default" style pull-to-refresh controls. |

**下拉刷新使用注意**
**Pull down to refresh use note**

- `enablePullDownRefresh` 与 `pullToRefresh->support` 同时设置时，后者优先级较高。
- When `enablePullDownRefresh` and `pullToRefresh->support` are set at the same time, the latter takes precedence.
- 如果期望在 App 和小程序上均开启下拉刷新的话，请配置页面的 `enablePullDownRefresh` 属性为 true。
- If you want to enable pull-down refresh on both the App and the MiniApp, please configure the `enablePullDownRefresh` property of the page to true.
- 若仅期望在 App 上开启下拉刷新，则不要配置页面的 `enablePullDownRefresh` 属性，而是配置 `pullToRefresh->support` 为 true。
- If you only want to enable pull-to-refresh on the App, do not configure the `enablePullDownRefresh` property of the page, but configure `pullToRefresh->support` to true.
- 开启原生下拉刷新时，页面里不应该使用全屏高的scroll-view，向下拖动内容时，会优先触发下拉刷新而不是scroll-view滚动
- When the native pull-down refresh is enabled, the scroll-view with full screen height should not be used in the page. When dragging the content down, the pull-down refresh will be triggered first instead of scroll-view scrolling
- 原生下拉刷新的起始位置在原生导航栏的下方，如果取消原生导航栏，使用自定义导航栏，原生下拉刷新的位置会在屏幕顶部。如果希望在自定义导航栏下方拉动，只能使用circle方式的下拉刷新，并设置offset参数，将circle圈的起始位置调整到自定义导航栏下方。hello uni-app的扩展组件中有示例。
- The starting position of the native pull-to-refresh is below the native navigation bar. If the native navigation bar is canceled and a custom navigation bar is used, the native pull-to-refresh position will be at the top of the screen. If you want to pull under the custom navigation bar, you can only use the pull-down refresh of the circle method, and set the offset parameter to adjust the starting position of the circle circle to the bottom of the custom navigation bar. There are examples in the extension component of hello uni-app.
- 如果想在app端实现更多复杂的下拉刷新，比如美团、京东App那种拉下一个特殊图形，可以使用nvue的`<refresh>`组件。HBuilderX 2.0.3+起，新建项目选择新闻模板可以体验
- If you want to implement more complex pull-down refreshes on the app side, such as pulling down a special graphic like Meituan and JD App, you can use nvue's `<refresh>` component. From HBuilderX 2.0.3+, you can experience the news template by selecting a new project
- 如果想在vue页面通过web前端技术实现下拉刷新，插件市场有例子，但前端下拉刷新的性能不如原生，复杂长列表会很卡
- If you want to implement pull-down refresh on the Vue page through the web front-end technology, there are examples in the plug-in market, but the performance of the front-end pull-down refresh is not as good as the original one, and the complex and long list will be very stuck
- iOS上，default模式的下拉刷新和bounce回弹是绑定的，如果设置了bounce:none，会导致无法使用default下拉刷新
- On iOS, the pull-down refresh in default mode is bound to the bounce rebound. If bounce:none is set, the default pull-down refresh cannot be used

**代码示例**
**code example**
```javascript
{
    "pages": [
        {
            "path": "pages/index/index", //首页
            "style": {
                "app-plus": {
                    "pullToRefresh": {
                        "support": true,
                        "color": "#ff3333",
                        "style": "default",
                        "contentdown": {
                            "caption": "下拉可刷新自定义文本"
                        },
                        "contentover": {
                            "caption": "释放可刷新自定义文本"
                        },
                        "contentrefresh": {
                            "caption": "正在刷新自定义文本"
                        }
                    }
                }
            }
        }
    ]
}
```

### h5
配置编译到 H5 平台时的特定样式
Configure specific styles when compiling to the H5 platform

|属性|类型|描述|
|Attribute|Type|Description|
|:-|:-|:-|
|titleNView|Object|导航栏|
| titleNView| Object|Navigation Bar|
|pullToRefresh|Object|下拉刷新|
| pullToRefresh| Object|pull to refresh|

#### 导航栏@h5-titleNView
#### Navigation bar @h5-titleNView
|属性|类型|默认值|描述|最低版本|
|Attribute|Type|Default|Description|Minimum Version|
|:-|:-|:-|:-|:-|
|backgroundColor|String|#F7F7F7|背景颜色，颜色值格式为"#RRGGBB"。||
| backgroundColor| String|#F7F7F7|The background color, the format of the color value is "#RRGGBB". ||
|buttons|Array||自定义按钮，参考 [buttons](#h5-titlenview-buttons)||
| buttons| Array||custom buttons, refer to [buttons](#h5-titlenview-buttons)||
|titleColor|String|#000000|标题文字颜色||
| titleColor| String|#000000|title text color||
|titleText|String||标题文字内容||
| titleText| String||title text content||
|titleSize|String||标题文字字体大小||
| titleSize| String||title text font size||
|type|String|default|导航栏样式。"default"-默认样式；"transparent"-透明渐变。||
| type| String| default|Navigation bar style. "default" - default style; "transparent" - transparent gradient. ||
|searchInput|Object||导航栏上的搜索框样式，详见：[searchInput](#h5-searchinput)|1.6.5|
| searchInput| Object|| The style of the search box on the navigation bar, see: [searchInput](#h5-searchinput)| 1.6.5|

##### 自定义按钮@h5-titleNView-buttons
##### Custom buttons @h5-titleNView-buttons
|属性|类型|默认值|描述|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|type|String|none|按钮样式，可取值见：[buttons 样式](#app-titlenview-buttons-type)|
| type| String| none| button style, see: [buttons style](#app-titlenview-buttons-type)|
|color|String|默认与标题文字颜色一致|按钮上文字颜色|
| color| String|The default is the same as the title text color|The color of the text on the button|
|background|String|默认值为灰色半透明|按钮的背景颜色，仅在标题栏type=transparent时生效|
| background| String|The default value is gray translucent|The background color of the button, it only takes effect when the title bar type=transparent|
|badgeText|String||按钮上显示的角标文本，最多显示3个字符，超过则显示为...|
| badgeText| String||The badge text displayed on the button, up to 3 characters, if it exceeds, it will be displayed as...|
|colorPressed（暂不支持）|String|默认值为 color 属性值自动调整透明度为 0.3|按下状态按钮文字颜色|
| colorPressed (not supported yet) | String|The default value is the color attribute value, and the transparency is automatically adjusted to 0.3|The text color of the pressed status button|
|float|String|right|按钮在标题栏上的显示位置，可取值"left"、"right"|
| float| String| right| The display position of the button on the title bar, which can be "left", "right"|
|fontWeight|String|normal|按钮上文字的粗细。可取值"normal"-标准字体、"bold"-加粗字体。|
| fontWeight| String| normal| The thickness of the text on the button. Possible values are "normal" - standard font, "bold" - bold font. |
|fontSize|String||按钮上文字大小|
| fontSize| String||The text size on the button|
|fontSrc|String||按钮上文字使用的字体文件路径。|
| fontSrc| String|| The font file path used for the text on the button. |
|select|String|false|是否显示选择指示图标（向下箭头）|
| select| String| false|Whether to display the selection indicator icon (down arrow)|
|text|String||按钮上显示的文字。使用字体图标时 unicode 字符表示必须 '\u' 开头，如 "\ue123"（注意不能写成"\e123"）。|
| text| String|| The text to display on the button. When using a font icon, the unicode character representation must start with '\u', such as "\ue123" (note that it cannot be written as "\e123"). |
|width|String|44px|按钮的宽度，可取值： "*px" - 逻辑像素值，如"10px"表示10逻辑像素值，不支持rpx，按钮的内容居中显示； "auto" - 自定计算宽度，根据内容自动调整按钮宽度|
| width| String| 44px|The width of the button, possible values: "*px" - logical pixel value, such as "10px" means 10 logical pixel value, rpx is not supported, and the content of the button is displayed in the center; "auto" - customized Calculate the width, automatically adjust the button width according to the content|

##### 按钮样式@h5-titleNView-buttons-type
##### Button style @h5-titleNView-buttons-type

使用 type 值设置按钮的样式时，会忽略 fontSrc 和 text 属性。
When styling a button with a type value, the fontSrc and text properties are ignored.

|值|说明|
|value|description|
|:-|:-|
|forward|前进按钮|
| forward|forward button|
|back|后退按钮|
| back|back button|
|share|分享按钮|
| share|Share button|
|favorite|收藏按钮|
| favorite|Favorite button|
|home|主页按钮|
| home|Home button|
|menu|菜单按钮|
| menu|menu button|
|close|关闭按钮|
| close|close button|
|none|无样式，需通过 text 属性设置按钮上显示的内容、通过 fontSrc 属性设置使用的字体库。|
| none|No style, you need to set the content displayed on the button through the text attribute, and set the font library used through the fontSrc attribute. |

#### 下拉刷新@h5-pullToRefresh
#### pull down to refresh @h5-pullToRefresh
h5 平台下拉刷新动画，只有 circle 类型。
H5 platform pull down refresh animation, only circle type.

|属性|类型|默认值|描述|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|color|String|#2BD009|颜色值格式为"#RRGGBB"|
| color| String|#2BD009|The format of the color value is "#RRGGBB"|
|offset|String|0px|下拉刷新控件的起始位置。支持百分比，如"10%"；像素值，如"50px"，不支持rpx。|
| offset| String| 0px| The starting position of the pull-to-refresh control. Support percentage, such as "10%"; pixel value, such as "50px", does not support rpx. |

##### 搜索框样式@h5-searchInput
##### Search box style @h5-searchInput

|属性|类型|默认值|描述|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|autoFocus|Boolean|false|是否自动获取焦点|
| autoFocus| Boolean| false|whether to automatically get the focus|
|align|String|center|非输入状态下文本的对齐方式。可取值： "left" - 居左对齐； "right" - 居右对齐； "center" - 居中对齐。|
| align| String| center| The alignment of the text in the non-input state. Possible values: "left" - align left; "right" - align right; "center" - align center. |
|backgroundColor|String|rgba(255,255,255,0.5)|背景颜色|
| backgroundColor| String| rgba(255,255,255,0.5)|background color|
|borderRadius|String|0px|输入框的圆角半径，取值格式为"XXpx"，其中XX为像素值（逻辑像素），不支持rpx。|
| borderRadius| String| 0px|The fillet radius of the input box, the value format is "XXpx", where XX is the pixel value (logical pixel), rpx is not supported. |
|placeholder|String||提示文本|
| placeholder| String||hint text|
|placeholderColor|String|#CCCCCC|提示文本颜色|
| placeholderColor| String|#CCCCCC|Prompt text color|
|disabled|Boolean|false|是否可输入|
| disabled| Boolean| false|Is it possible to input|

**注意事项：**
**Precautions:**

- 如果 `h5` 节点没有配置，默认会使用 `app-plus` 下的配置。
- If the `h5` node is not configured, the configuration under `app-plus` will be used by default.
- 配置了 `h5` 节点，则会覆盖 `app-plus` 下的配置。
- If the `h5` node is configured, it will override the configuration under `app-plus`.

#### navigationBarShadow

|属性|类型|描述|
|Attribute|Type|Description|
|:-|:-|:-|
|colorType|String|阴影的颜色，支持：grey、blue、green、orange、red、yellow|
| colorType| String|Shadow color, support: gray, blue, green, orange, red, yellow|

**注意事项：**
**Precautions:**
- 微信/百度/头条 需要配置: "disableScroll": true
- WeChat/Baidu/Toutiao need to configure: "disableScroll": true
- 支付宝 "mp-alipay": { "allowsBounceVertical": "NO" }
- Alipay "mp-alipay": { "allowsBounceVertical": "NO" }

### mp-alipay
配置编译到 MP-ALIPAY 平台时的特定样式
Configure specific styles when compiling to the MP-ALIPAY platform

|属性|类型|默认值|描述|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|allowsBounceVertical|String|YES|是否允许向下拉拽。支持 YES / NO|
| allowsBounceVertical| String| YES|Whether to allow BounceVertical. Support YES / NO|
|titleImage|String||导航栏图片地址（替换当前文字标题），内必须使用https的图片链接地址|
| titleImage| String||Navigation bar image address (replacing the current text title), must use https image link address|
|transparentTitle|String|none|导航栏透明设置。支持 always 一直透明 / auto 滑动自适应 / none 不透明|
| transparentTitle| String| none|Navigation bar transparent setting. Support always always transparent / auto sliding adaptive / none opaque|
|titlePenetrate|String|NO|导航栏点击穿透|
| titlePenetrate| String| NO|Navigation bar click penetration|
|showTitleLoading|String|NO|是否进入时显示导航栏的 loading。支持 YES / NO|
| showTitleLoading| String| NO|Whether to display the loading of the navigation bar when entering. Support YES / NO|
|backgroundImageUrl|String||下拉露出显示的背景图链接|
| backgroundImageUrl| String||drop down to reveal the displayed background image link|
|backgroundImageColor|HexColor||下拉露出显示的背景图底色|
| backgroundImageColor| HexColor||Drop down to reveal the background color of the displayed background image|
|gestureBack|String|NO|iOS 用，是否支持手势返回。支持 YES / NO|
| gestureBack| String| NO| For iOS, whether to support gesture back. Support YES / NO|
|enableScrollBar|String|YES|Android 用，是否显示 WebView 滚动条。支持 YES / NO|
| enableScrollBar| String| YES| For Android, whether to display the WebView scroll bar. Support YES / NO|

**注意事项**
**Precautions**

- `titleImage`仅支持https地址，设置了`titleImage`会替换页面文字标题
- `titleImage` only supports https addresses, setting `titleImage` will replace the page text title
- `backgroundImageUrl`支持网络地址和本地地址，尽量使用绝对地址
- `backgroundImageUrl` supports network address and local address, try to use absolute address
- 部分配置可能会只在真机运行的时候生效，支付宝未来应该会改善
- Some configurations may only take effect when the real machine is running, and Alipay should improve it in the future

### mp-weixin
配置编译到 MP-WEIXIN 平台时的特定样式

|属性|类型|默认值|描述|
|:-|:-|:-|:-|
|homeButton|Boolean|false|在非首页、非页面栈最底层页面或非tabbar内页面中的导航栏展示home键|
|backgroundColorTop|HexColor|#ffffff|顶部窗口的背景色，仅 iOS 支持|
|backgroundColorBottom|HexColor|#ffffff|底部窗口的背景色，仅 iOS 支持|
|restartStrategy|String|homePage|重新启动策略配置。支持 homePage / homePageAndLatestPage|
|initialRenderingCache|String||页面初始渲染缓存配置。支持 static / dynamic|
|visualEffectInBackground|String|none|切入系统后台时，隐藏页面内容，保护用户隐私。支持 hidden / none|
|handleWebviewPreload|String|static|控制预加载下个页面的时机。支持 static / manual / auto|

### mp-baidu
配置编译到 MP-BAIDU 平台时的特定样式

|属性|类型|默认值|描述|
|:-|:-|:-|:-|
|textSizeAdjust|String|auto|小程序页面是否禁止响应字体大小的设。支持 auto 默认响应 / none 不响应|

## FAQ
- Q：如何取消原生导航栏？或自定义导航
- Q: How to cancel the native navigation bar? or custom navigation
- A：参考[导航栏开发指南](http://ask.dcloud.net.cn/article/34921)
- A: Refer to [Navigation Bar Development Guide](http://ask.dcloud.net.cn/article/34921)

## easycom

> `HBuilderX 2.5.5`起支持`easycom`组件模式。
> `HBuilderX 2.5.5` supports `easycom` component mode.

传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。`easycom`将其精简为一步。
Traditional vue components need to be installed, referenced, registered, and the components can be used after three steps. `easycom` boils it down to one step.
只要组件安装在项目根目录或uni_modules的components目录下，并符合`components/组件名称/组件名称.vue`或`uni_modules/插件ID/components/组件名称/组件名称.vue`目录结构。就可以不用引用、注册，直接在页面中使用。
As long as the component is installed in the root directory of the project or under the components directory of uni_modules, it conforms to the `components/component name/component name.vue` or `uni_modules/plugin ID/components/component name/component name.vue` directory structure. It can be used directly on the page without reference or registration.
如下：
as follows:
```html
<template>
	<view class="container">
		<uni-list>
			<uni-list-item title="第一行"></uni-list-item>
			<uni-list-item title="第二行"></uni-list-item>
		</uni-list>
	</view>
</template>
<script>
	// 这里不用import引入，也不需要在components内注册uni-list组件。template里就可以直接用
	// There is no need to import here, and there is no need to register the uni-list component in components. It can be used directly in the template
	export default {
		data() {
			return {

			}
		}
	}
</script>
```

不管components目录下安装了多少组件，`easycom`打包后会自动剔除没有使用的组件，对组件库的使用尤为友好。
No matter how many components are installed in the components directory, `easycom` will automatically remove unused components after packaging, which is especially friendly to the use of component libraries.

组件库批量安装，随意使用，自动按需打包。以官方的`uni-ui`为例，在HBuilderX新建项目界面选择`uni-ui`项目模板，只需在页面中敲u，拉出大量组件代码块，直接选择，即可使用。大幅提升开发效率，降低使用门槛。
The component library is installed in batches, used at will, and automatically packaged on demand. Take the official `uni-ui` as an example, select the `uni-ui` project template on the HBuilderX new project interface, just type u on the page, pull out a large number of component code blocks, select directly, and you can use it. Greatly improve development efficiency and lower the threshold for use.

在[uni-app插件市场](https://ext.dcloud.net.cn/)下载符合`components/组件名称/组件名称.vue`目录结构的组件，均可直接使用。
In the [uni-app plug-in market](https://ext.dcloud.net.cn/), download components that conform to the `components/component name/component name.vue` directory structure, and you can use them directly.

`easycom`是自动开启的，不需要手动开启，有需求时可以在`pages.json`的`easycom`节点进行个性化设置，如关闭自动扫描，或自定义扫描匹配组件的策略。设置参数如下：
`easycom` is automatically enabled and does not need to be manually enabled. When necessary, you can personalize settings in the `easycom` node of `pages.json`, such as disabling automatic scanning, or customizing the strategy of scanning and matching components. Set the parameters as follows:

|属性			|类型		|默认值	|描述																																											|
|Attribute |Type |Default Value |Description |
|:-				|:-			|:-			|:-																																												|
|autoscan	|Boolean|true		|是否开启自动扫描，开启后将会自动扫描符合`components/组件名称/组件名称.vue`目录结构的组件	|
| autoscan | Boolean| true | Whether to enable auto-scanning, after it is enabled, it will automatically scan components that match the directory structure of `components/component name/component name.vue` |
|custom		|Object	|-			|以正则方式自定义组件匹配规则。如果`autoscan`不能满足需求，可以使用`custom`自定义匹配规则	|
| custom | Object |- | Customize component matching rules in a regular way. If `autoscan` does not meet your needs, you can use `custom` to customize the matching rules |

**自定义easycom配置的示例**
**Example of custom easycom configuration**

如果需要匹配node_modules内的vue文件，需要使用`packageName/path/to/vue-file-$1.vue`形式的匹配规则，其中`packageName`为安装的包名，`/path/to/vue-file-$1.vue`为vue文件在包内的路径。
If you need to match the vue files in node_modules, you need to use the matching rule in the form of `packageName/path/to/vue-file-$1.vue`, where `packageName` is the installed package name, `/path/to/vue-file -$1.vue` is the path of the vue file in the package.

```json
"easycom": {
  "autoscan": true,
  "custom": {
    "^uni-(.*)": "@/components/uni-$1.vue", // 匹配components目录内的vue文件
    "^vue-file-(.*)": "packageName/path/to/vue-file-$1.vue" // 匹配node_modules内的vue文件
  }
}
```

**说明**
**illustrate**
- `easycom`方式引入的组件无需在页面内`import`，也不需要在`components`内声明，即可在任意页面使用
- Components introduced by `easycom` can be used on any page without `import` in the page, or declared in `components`
- `easycom`方式引入组件不是全局引入，而是局部引入。例如在H5端只有加载相应页面才会加载使用的组件
- Importing components in the `easycom` method is not a global import, but a local import. For example, on the H5 side, the components used will only be loaded when the corresponding page is loaded.
- 在组件名完全一致的情况下，`easycom`引入的优先级低于手动引入（区分连字符形式与驼峰形式）
- When the component names are exactly the same, the priority of `easycom` import is lower than that of manual import (distinguish between hyphen form and camel case form)
- 考虑到编译速度，直接在`pages.json`内修改`easycom`不会触发重新编译，需要改动页面内容触发。
- Considering the compilation speed, modifying `easycom` directly in `pages.json` will not trigger recompilation, it needs to be triggered by changing the page content.
- `easycom`只处理vue组件，不处理小程序专用组件（如微信的wxml格式组件）。不处理后缀为.nvue的组件。但vue组件也可以全端运行，包括小程序和app-nvue。可以参考uni ui，使用vue后缀，同时兼容nvue页面。
- `easycom` only handles vue components, not MiniApp specific components (such as WeChat’s wxml format components). Components with the suffix .nvue are not processed. But vue components can also run full-end, including MiniApp and app-nvue. You can refer to uni ui, use the vue suffix, and be compatible with nvue pages.
- `nvue`页面里引用`.vue`后缀的组件，会按照nvue方式使用原生渲染，其中不支持的css会被忽略掉。这种情况同样支持`easycom`
- Components with `.vue` suffix in the `nvue` page will use native rendering in the nvue way, and unsupported css will be ignored. This case also supports `easycom`

## tabBar

如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定一级导航栏，以及 tab 切换时显示的对应页。
If the application is a multi-tab application, the tabBar configuration item can be used to specify the first-level navigation bar and the corresponding page displayed when tab switching.

在 pages.json 中提供 tabBar 配置，不仅仅是为了方便快速开发导航，更重要的是在App和小程序端提升性能。在这两个平台，底层原生引擎在启动时无需等待js引擎初始化，即可直接读取 pages.json 中配置的 tabBar 信息，渲染原生tab。
Providing tabBar configuration in pages.json is not only to facilitate rapid development of navigation, but more importantly, to improve performance on the App and MiniApp side. On these two platforms, the underlying native engine can directly read the tabBar information configured in pages.json and render native tabs without waiting for the js engine to initialize when starting.

**Tips**

- 当设置 position 为 top 时，将不会显示 icon
- When setting position to top, the icon will not be displayed
- tabBar 中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。
- The list in the tabBar is an array, and only a minimum of 2 and a maximum of 5 tabs can be configured, and the tabs are sorted according to the order of the array.
- tabbar 切换第一次加载时可能渲染不及时，可以在每个tabbar页面的onLoad生命周期里先弹出一个等待雪花（hello uni-app使用了此方式）
- Tabbar switching may not be rendered in time when it is loaded for the first time. You can pop up a waiting snowflake in the onLoad life cycle of each tabbar page (hello uni-app uses this method)
- tabbar 的页面展现过一次后就保留在内存中，再次切换 tabbar 页面，只会触发每个页面的onShow，不会再触发onLoad。
- After the tabbar page is displayed once, it will be kept in memory. Switching the tabbar page again will only trigger the onShow of each page, and will not trigger onLoad again.
- 顶部的 tabbar 目前仅微信小程序上支持。需要用到顶部选项卡的话，建议不使用 tabbar 的顶部设置，而是自己做顶部选项卡，可参考 hello uni-app->模板->顶部选项卡。
- The tabbar at the top is currently only supported on the WeChat MiniApp. If you need to use the top tab, it is recommended not to use the top setting of the tabbar, but to make the top tab yourself, please refer to hello uni-app->template->top tab.

**属性说明：**
**Property Description:**

|属性|类型|必填|默认值|描述|平台差异说明|
|Properties|Type|Required|Default Value|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|:-|
|color|HexColor|是||tab 上的文字默认颜色||
| color| HexColor| Yes|| the default color of the text on the tab||
|selectedColor|HexColor|是||tab 上的文字选中时的颜色||
| selectedColor| HexColor|Yes || the color when the text on the tab is selected||
|backgroundColor|HexColor|是||tab 的背景色||
| backgroundColor| HexColor| is the background color of || tab||
|borderStyle|String|否|black|tabbar 上边框的颜色，可选值 black/white，也支持其他颜色值|App 2.3.4+ 、H5 3.0.0+|
| borderStyle| String|No| black| The color of the upper border of the tabbar, the optional value is black/white, and other color values are also supported| App 2.3.4+, H5 3.0.0+|
|blurEffect|String|否|none|iOS 高斯模糊效果，可选值 dark/extralight/light/none（参考:[使用说明](https://ask.dcloud.net.cn/article/36617)）|App 2.4.0+ 支持、H5 3.0.0+（只有最新版浏览器才支持）|
| blurEffect| String|No| none| iOS Gaussian blur effect, optional value dark/extralight/light/none (Reference: [Instructions for use](https://ask.dcloud.net.cn/article/36617))| App 2.4.0+ support, H5 3.0.0+ (only supported by the latest version of the browser) |
|list|Array|是||tab 的列表，详见 list 属性说明，最少2个、最多5个 tab||
| list| Array| is a list of || tabs, see the list property description for details, at least 2 and at most 5 tabs||
|position|String|否|bottom|可选值 bottom、top|top 值仅微信小程序支持|
| position| String|No| bottom|Optional values bottom, top| The top value is only supported by WeChat MiniApp|
|fontSize|String|否|10px|文字默认大小|App 2.3.4+、H5 3.0.0+|
| fontSize| String|No| 10px|Default text size| App 2.3.4+, H5 3.0.0+|
|iconWidth|String|否|24px|图标默认宽度（高度等比例缩放）|App 2.3.4+、H5 3.0.0+|
| iconWidth| String|No| 24px|The default width of the icon (the height is proportionally scaled)| App 2.3.4+, H5 3.0.0+|
|spacing|String|否|3px|图标和文字的间距|App 2.3.4+、H5 3.0.0+|
| spacing| String|No| 3px|Space between icon and text| App 2.3.4+, H5 3.0.0+|
|height|String|否|50px|tabBar 默认高度|App 2.3.4+、H5 3.0.0+|
| height| String|No| 50px| default height of tabBar| App 2.3.4+, H5 3.0.0+|
|midButton|Object|否||中间按钮 仅在 list 项为偶数时有效|App 2.3.4+、H5 3.0.0+|
| midButton| Object|No||The middle button is only valid when the item in the list is even|App 2.3.4+, H5 3.0.0+|
|iconfontSrc|String|否||list设置 iconfont 属性时，需要指定字体文件路径 |App 3.4.4+、H5 3.5.3+|
| iconfontSrc| String|No|| list When setting the iconfont attribute, you need to specify the path of the font file |

其中 list 接收一个数组，数组中的每个项都是一个对象，其属性值如下：
Among them, list receives an array, each item in the array is an object, and its attribute values are as follows:

|属性|类型|必填|说明|平台差异|
|Attribute|Type|Required|Description|Platform Difference|
|:-|:-|:-|:-|:-|
|pagePath|String|是|页面路径，必须在 pages 中先定义||
| pagePath| String| Yes | page path, must be defined in pages ||
|text|String|是|tab 上按钮文字，在 App 和 H5 平台为非必填。例如中间可放一个没有文字的+号图标||
| text| String| is the text of the button on the tab, it is optional on App and H5 platforms. For example, a + icon without text can be placed in the middle||
|iconPath|String|否|图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 position 为 top 时，此参数无效，不支持网络图片，不支持字体图标||
| iconPath| String|No|Image path, the icon size is limited to 40kb, the recommended size is 81px * 81px, when the position is top, this parameter is invalid, does not support network images, does not support font icons||
|selectedIconPath|String|否|选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 position 为 top 时，此参数无效||
| selectedIconPath| String|No|The image path when selected, the icon size is limited to 40kb, the recommended size is 81px * 81px, when the position is top, this parameter is invalid||
|visible|Boolean|否|该项是否显示，默认显示|App (3.2.10+)、H5 (3.2.10+)|
| visible| Boolean|No|Whether to display the item, the default display | App (3.2.10+), H5 (3.2.10+)|
|iconfont|Object|否|字体图标，优先级高于 iconPath|App（3.4.4+）、H5 (3.5.3+)|
| iconfont| Object|No|Font icon, priority is higher than iconPath| App (3.4.4+), H5 (3.5.3+)|


**midButton 属性说明**
**midButton property description**

|属性|类型|必填|默认值|描述|
|Attribute|Type|Required|Default|Description|
|:-|:-|:-|:-|:-|
|width|String|否|80px|中间按钮的宽度，tabBar 其它项为减去此宽度后平分，默认值为与其它项平分宽度|
| width| String|No| 80px|The width of the middle button, the other items of the tabBar are divided equally after subtracting this width, and the default value is to divide the width equally with other items|
|height|String|否|50px|中间按钮的高度，可以大于 tabBar 高度，达到中间凸起的效果|
| height| String|No| 50px|The height of the middle button can be greater than the height of the tabBar to achieve the raised effect in the middle|
|text|String|否||中间按钮的文字|
| text| String|No||The text of the middle button|
|iconPath|String|否||中间按钮的图片路径|
| iconPath| String|No||The image path of the middle button|
|iconWidth|String|否|24px|图片宽度（高度等比例缩放）|
| iconWidth| String|No| 24px|Width of the picture (the height is proportionally scaled)|
|backgroundImage|String|否||中间按钮的背景图片路径|
| backgroundImage| String|No||The background image path of the middle button|
|iconfont|Object|否||字体图标，优先级高于 iconPath|App（3.4.4+）|
| iconfont | Object | No | | Font icon, priority is higher than iconPath | App (3.4.4+) |

midButton没有pagePath，需监听点击事件，自行处理点击后的行为逻辑。监听点击事件为调用API：uni.onTabBarMidButtonTap，详见[https://uniapp.dcloud.io/api/ui/tabbar?id=ontabbarmidbuttontap](https://uniapp.dcloud.io/api/ui/tabbar?id=ontabbarmidbuttontap)
midButton does not have a pagePath, it needs to monitor the click event, and handle the behavior logic after the click by itself. Listening to the click event is calling the API: uni.onTabBarMidButtonTap, see [https://uniapp.dcloud.io/api/ui/tabbar?id=ontabbarmidbuttontap](https://uniapp.dcloud.io/api/ui/tabbar ?id=ontabbarmidbuttontap)

**iconfont参数说明：**
**iconfont parameter description:**

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|text|String|字库 Unicode 码|
| text| String|Font Unicode code|
|selectedText|String|选中后字库 Unicode 码|
| selectedText| String|Unicode code of selected font|
|fontSize|String|字体图标字号(px)|
| fontSize| String|Font icon font size (px)|
|color|String|字体图标颜色|
| color| String|font icon color|
|selectedColor|String|字体图标选中颜色|
| selectedColor| String| font icon selected color|


#### **tabbar常见问题** @tips-tabbar
#### **tabbar FAQ** @tips-tabbar
- tabbar 的 js api 见[接口-界面-tabbar](https://uniapp.dcloud.io/api/ui/tabbar)，可实现动态显示隐藏（如弹出层无法覆盖tabbar）、内容修改（如国际化）、item加角标等功能。hello uni-app中也有示例。
- See [Interface-Interface-tabbar](https://uniapp.dcloud.io/api/ui/tabbar) for the js api of the tabbar, which can realize dynamic display and hiding (such as the pop-up layer cannot cover the tabbar), content modification (such as international Transformation), item plus corner mark and other functions. There are also examples in the hello uni-app.
- tabbar 的 item 点击事件见[页面生命周期的onTabItemTap](https://uniapp.dcloud.io/tutorial/page.html#lifecycle)。
- See [onTabItemTap of the page life cycle](https://uniapp.dcloud.io/tutorial/page.html#lifecycle) for the item click event of the tabbar.
- 代码跳转到 tabbar 页面，api只能使用[uni.switchTab](https://uniapp.dcloud.io/api/router?id=switchtab)，不能使用uni.navigateTo、uni.redirectTo；使用navigator组件跳转时必须设置[open-type="switchTab"](https://uniapp.dcloud.io/component/navigator)
- The code jumps to the tabbar page, the api can only use [uni.switchTab](https://uniapp.dcloud.io/api/router?id=switchtab), cannot use uni.navigateTo, uni.redirectTo; use the navigator component [open-type="switchTab"](https://uniapp.dcloud.io/component/navigator) must be set when jumping
- tabbar 的默认高度，在不同平台不一样。App端的默认高度在HBuilderX 2.3.4起从56px调整为50px，与H5端统一。开发者也可以自行设定高度，调回56px。[详见](https://uniapp.dcloud.io/tutorial/syntax-css.html#固定值)
- The default height of the tabbar is different on different platforms. The default height of the App side is adjusted from 56px to 50px since HBuilderX 2.3.4, which is unified with the H5 side. Developers can also set the height by themselves and adjust it back to 56px. [See details](https://uniapp.dcloud.io/tutorial/syntax-css.html#%E5%9B%BA%E5%AE%9A%E5%80%BC)
- tabbar 在H5端是div模拟的，属于前端屏幕窗口的一部分，如果要使用bottom居底定位方式，应该使用css变量`--window-bottom`，比如悬浮在tabbar上方10px的按钮，样式如下`bottom: calc(var(--window-bottom) + 10px)`
- The tabbar is a div simulation on the H5 side, which is part of the front-end screen window. If you want to use the bottom positioning method, you should use the css variable `--window-bottom`, such as a button floating 10px above the tabbar, the style is as follows` bottom: calc(var(--window-bottom) + 10px)`
- 中间带+号的tabbar模板例子，[参考](https://ext.dcloud.net.cn/plugin?id=98)。可跨端，但+号不凸起。如需中间凸起，配置tabbar的midButton。
- An example of a tabbar template with a + sign in the middle, [Reference](https://ext.dcloud.net.cn/plugin?id=98). It can cross the end, but the + sign is not raised. If the middle is raised, configure the midButton of the tabbar.
- 如果是需要先登录、后进入tab页面，不需要把登录页设为首页，首页仍然是tabbar页，可参考[云端一体登录模板](https://ext.dcloud.net.cn/plugin?id=13)
- If you need to log in first and then enter the tab page, you don’t need to set the login page as the homepage, the homepage is still the tabbar page, you can refer to [Cloud-integrated login template](https://ext.dcloud.net.cn/plugin? id=13)
- 前端弹出遮罩层挡不住tabbar的问题，跨端处理方式时动态隐藏tabbar。App端可以使用plus.nativeObj.view或subNVue做弹出和遮罩，可参考这个[底部原生图标分享菜单例子](https://ext.dcloud.net.cn/plugin?id=69)
- The problem that the front-end pop-up mask layer cannot block the tabbar, and the tabbar is dynamically hidden during cross-end processing. You can use plus.nativeObj.view or subNVue on the App side to make pop-ups and masks. You can refer to this [example of the sharing menu of native icons at the bottom](https://ext.dcloud.net.cn/plugin?id=69)
- 微信小程序模拟器1.02.1904090版有bug，在缩放模拟器页面百分比后，tabbar点击多次后就会卡死。真机无碍，使用时注意。[详见](https://developers.weixin.qq.com/community/develop/doc/0002e6e6bf0d602d8c783e10756400)
- Wechat MiniApp simulator version 1.02.1904090 has a bug. After zooming the simulator page percentage, the tabbar will freeze after clicking multiple times. There is no problem with the real machine, please pay attention when using it. [See details](https://developers.weixin.qq.com/community/develop/doc/0002e6e6bf0d602d8c783e10756400)
- PC宽屏上，当页面存在topWindow或leftWindow或rightWindow等多窗体结构时，若想改变 tabbar 显示的位置，请使用 [custom-tab-bar组件](https://uniapp.dcloud.io/component/custom-tab-bar) 配置，若想隐藏 tabbar，可以使用如下 css（好处是可以和 leftwindow 等窗体联动）：
- On PC widescreen, when the page has a multi-window structure such as topWindow, leftWindow, or rightWindow, if you want to change the display position of the tabbar, please use [custom-tab-bar component](https://uniapp.dcloud.io/component /custom-tab-bar) configuration, if you want to hide the tabbar, you can use the following css (the advantage is that it can be linked with leftwindow and other forms):

    ```html
      .uni-app--showleftwindow + .uni-tabbar-bottom {
      	display: none;
      }
    ```



**代码示例**
**code example**
```json
"tabBar": {
	"color": "#7A7E83",
	"selectedColor": "#3cc51f",
	"borderStyle": "black",
	"backgroundColor": "#ffffff",
	"list": [{
		"pagePath": "pages/component/index",
		"iconPath": "static/image/icon_component.png",
		"selectedIconPath": "static/image/icon_component_HL.png",
		"text": "组件"
	}, {
		"pagePath": "pages/API/index",
		"iconPath": "static/image/icon_API.png",
		"selectedIconPath": "static/image/icon_API_HL.png",
		"text": "接口"
	}]
}
```

#### 自定义tabbar @custom-tab-bar
#### Custom tabbar @custom-tab-bar

原生tabBar是相对固定的配置方式，可能无法满足所有场景，这就涉及到自定义tabBar。
The native tabBar is a relatively fixed configuration method, which may not satisfy all scenarios, which involves customizing the tabBar.

但注意除了H5端，自定义tabBar的性能体验会低于原生tabBar。App和小程序端非必要不要自定义。
But note that except for the H5 side, the performance experience of the custom tabBar will be lower than that of the native tabBar. Do not customize the app and MiniApp unless necessary.

- H5端的自定义tabBar组件：H5端不存在原生tabBar性能更高的概念，并且宽屏下常见的tabBar在顶部而不是底部，此时可以使用 [custom-tab-bar组件](https://uniapp.dcloud.io/component/custom-tab-bar) 来自定义
- Custom tabBar component on the H5 side: There is no concept of higher performance of the native tabBar on the H5 side, and the common tabBar under widescreen is at the top instead of the bottom. At this time, you can use [custom-tab-bar component](https://uniapp .dcloud.io/component/custom-tab-bar) to customize
- 普通自定义tabBar：使用view自行绘制tabBar。如果页面是多页方式，切换tabBar将无法保持底部tabBar一直显示。所以这种情况建议使用单页方式。单页方式，如果是复杂页面，应用性能会下降明显，需减少页面复杂度。如果是App端，nvue单页的性能会显著高于vue页面
- Ordinary custom tabBar: use view to draw tabBar by yourself. If the page is multi-page, switching the tabBar will not keep the bottom tabBar always displayed. Therefore, it is recommended to use the single-page method in this case. In the single-page mode, if it is a complex page, the application performance will drop significantly, and the page complexity needs to be reduced. If it is on the App side, the performance of nvue single page will be significantly higher than that of vue page
- 微信小程序自定义tabbar：微信提供一直基于webview自定义tabBar的方案。该功能体验不佳，不太推荐使用。如果要使用，参考[微信文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)，项目根创建 custom-tab-bar 目录，注意里边的代码是 wxml,wxss，不是 vue，uni-app编译器会直接拷贝该目录到微信小程序中
- WeChat MiniApp custom tabbar: WeChat provides a solution to customize tabBar based on webview. This function has a poor experience and is not recommended. If you want to use it, refer to [WeChat Documentation](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html),create a custom-tab-bar directory at the root of the project, and pay attention to the The code is wxml, wxss, not vue, and the uni-app compiler will directly copy the directory to the WeChat MiniApp
- 原生的tabbar有且只有一个且在首页。二级页如需的tab，需自行编写view来实现。一般二级页面更适合的导航是 [segement组件](https://ext.dcloud.net.cn/plugin?id=54)
- There is only one native tabbar and it is on the home page. If you need tabs on the second-level page, you need to write a view to achieve it. Generally, the more suitable navigation for secondary pages is [segment component](https://ext.dcloud.net.cn/plugin?id=54)


## condition
启动模式配置，仅开发期间生效，用于模拟直达页面的场景，如：小程序转发后，用户点击所打开的页面。
The startup mode configuration takes effect only during the development period, and is used to simulate the scenario of direct access to the page, such as: after the MiniApp is forwarded, the user clicks on the opened page.

**属性说明：**
**Property Description:**

|属性|类型|是否必填|描述|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|current|Number|是|当前激活的模式，list节点的索引值|
|current|Number|Yes|the current active mode, the index value of the list node|
|list|Array|是|启动模式列表|
| list| Array|yes|list of boot modes|

**list说明：**
**list description:**

|属性|类型|是否必填|描述|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|name|String|是|启动模式名称|
|name| String|yes|boot mode name|
|path|String|是|启动页面路径|
|path| String|Yes|Path of startup page|
|query|String|否|启动参数，可在页面的 [onLoad](/tutorial/page.html#lifecycle) 函数里获得|
| query| String|No|Startup parameters, which can be obtained in the [onLoad](/tutorial/page.html#lifecycle) function of the page|

**注意：** 在 App 里真机运行可直接打开配置的页面，微信开发者工具里需要手动改变编译模式，如下图：
**Note:** You can directly open the configuration page when running on the real machine in the app. You need to manually change the compilation mode in the WeChat developer tools, as shown in the figure below:

<div style="text-align:center;">
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/condition.png" />
</div>

**代码示例：**
**Code sample:**

```javascript
"condition": { //模式配置，仅开发期间生效
	"current": 0, //当前激活的模式（list 的索引项）
	"list": [{
			"name": "swiper", //模式名称
			"path": "pages/component/swiper/swiper", //启动页面，必选
			"query": "interval=4000&autoplay=false" //启动参数，在页面的onLoad函数里面得到。
		},
		{
			"name": "test",
			"path": "pages/component/switch/switch"
		}
	]
}
```

## subPackages

分包加载配置，此配置为小程序的分包加载机制。
Subpackage loading configuration, this configuration is the subpackage loading mechanism of the MiniApp.

因小程序有体积和资源加载限制，各家小程序平台提供了分包方式，优化小程序的下载和启动速度。
Because MiniApp have size and resource loading limitations, each MiniApp platform provides a subpackage method to optimize the download and startup speed of MiniApp.

所谓的主包，即放置默认启动页面/TabBar 页面，以及一些所有分包都需用到公共资源/JS 脚本；而分包则是根据pages.json的配置进行划分。
The so-called main package is to place the default startup page/TabBar page, and all subpackages need to use public resources/JS scripts; and the subpackages are divided according to the configuration of pages.json.

在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，会把对应分包自动下载下来，下载完成后再进行展示。此时终端界面会有等待提示。
When the MiniApp is started, the main package will be downloaded by default and the pages in the main package will be launched. When the user enters a page in the subpackage, the corresponding subpackage will be downloaded automatically, and then displayed after the download is complete. At this time, there will be a waiting prompt on the terminal interface.

App默认为整包。从uni-app 2.7.12+ 开始，也兼容了小程序的分包配置。其目的不用于下载提速，而用于首页是vue时的启动提速。App下开启分包，除在pages.json中配置分包规则外，还需要在manifest中设置在app端开启分包设置，详见：[https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization](https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization)
App defaults to the whole package. Starting from uni-app 2.7.12+, it is also compatible with subpackage configuration of MiniApp. Its purpose is not to speed up the download, but to speed up the startup when the home page is vue. To enable subcontracting under App, in addition to configuring subcontracting rules in pages.json, you also need to set subcontracting settings on the app side in the manifest. For details, see: [https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization](https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization)

subPackages 节点接收一个数组，数组每一项都是应用的子包，其属性值如下：
The subPackages node receives an array, each item in the array is a sub-package of the application, and its attribute values are as follows:

|属性|类型|是否必填|描述|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|root|String|是|子包的根目录|
| root| String| Yes |the root directory of the subpackage|
|pages|Array|是|子包由哪些页面组成，参数同 [pages](#pages)|
| pages| Array|Yes|What pages are the subpackages composed of? The parameters are the same as [pages](#pages)|

**注意：**
**Notice:**

- ```subPackages``` 里的pages的路径是 ``root`` 下的相对路径，不是全路径。
- The path of pages in ```subPackages``` is a relative path under ``root``, not a full path.
- 微信小程序每个分包的大小是2M，总体积一共不能超过20M。
- The size of each subpackage of the WeChat MiniApp is 2M, and the total volume cannot exceed 20M.
- 百度小程序每个分包的大小是2M，总体积一共不能超过8M。
- The size of each subpackage of the Baidu MiniApp is 2M, and the total volume cannot exceed 8M.
- 支付宝小程序每个分包的大小是2M，总体积一共不能超过8M。
- The size of each subpackage of the Alipay MiniApp is 2M, and the total volume cannot exceed 8M.
- QQ小程序每个分包的大小是2M，总体积一共不能超过24M。
- 抖音小程序每个分包的大小是2M，总体积一共不能超过16M（抖音小程序基础库 1.88.0 及以上版本开始支持，抖音小程序开发者工具请使用大于等于 2.0.6 且小于 3.0.0 的版本）。
- 快手小程序每个分包的大小是2M，总体积一共不能超过24M。
-The size of each subpackage of the Kuaishou MiniApp is 2M, and the total volume cannot exceed 24M.
- 分包下支持独立的 ```static``` 目录，用来对静态资源进行分包。
- `uni-app`内支持对`微信小程序`、`QQ小程序`、`百度小程序`、`支付宝小程序`、`抖音小程序(HBuilderX 3.0.3+)`、`快手小程序`分包优化，即将静态资源或者js文件放入分包内不占用主包大小。详情请参考：[关于分包优化的说明](/collocation/manifest?id=关于分包优化的说明)
- 针对`vendor.js`过大的情况可以使用运行时压缩代码
- When `vendor.js` is too large, you can use runtime compression code
  + `HBuilderX`创建的项目勾选`运行-->运行到小程序模拟器-->运行时是否压缩代码`
  + For the project created by `HBuilderX`, check `Run-->Run to MiniApp Simulator-->Whether to compress the code at runtime`
  + `cli`创建的项目可以在`package.json`中添加参数`--minimize`，示例：`"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch --minimize"`
  + The project created by `cli` can add the parameter `--minimize` in `package.json`, example: `"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli- service uni-build --watch --minimize"`

**使用方法：**
**Instructions:**

假设支持分包的 ```uni-app``` 目录结构如下：
Assume that the directory structure of ```uni-app``` that supports subpackaging is as follows:
<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─pages
│  ├─index
│  │  └─index.vue
│  └─login
│     └─login.vue
├─pagesA
│  ├─static
│  └─list
│     └─list.vue
├─pagesB
│  ├─static
│  └─detail
│     └─detail.vue
├─static
├─main.js
├─App.vue
├─manifest.json
└─pages.json
	</code>
</pre>

则需要在 pages.json 中填写
You need to fill in pages.json

```javascript
{
	"pages": [{
		"path": "pages/index/index",
		"style": { ...}
	}, {
		"path": "pages/login/login",
		"style": { ...}
	}],
	"subPackages": [{
		"root": "pagesA",
		"pages": [{
			"path": "list/list",
			"style": { ...}
		}]
	}, {
		"root": "pagesB",
		"pages": [{
			"path": "detail/detail",
			"style": { ...}
		}]
	}],
	"preloadRule": {
		"pagesA/list/list": {
			"network": "all",
			"packages": ["__APP__"]
		},
		"pagesB/detail/detail": {
			"network": "all",
			"packages": ["pagesA"]
		}
	}
}
```

## preloadRule

分包预载配置。
Subpackage preload configuration.

配置preloadRule后，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度
After the preloadRule is configured, when entering a certain page of the MiniApp, the framework will automatically pre-download the subpackages that may be required to improve the startup speed when entering subsequent subpackage pages

`preloadRule` 中，`key` 是页面路径，`value` 是进入此页面的预下载配置，每个配置有以下几项：
In `preloadRule`, `key` is the page path, and `value` is the pre-download configuration for entering this page. Each configuration has the following items:

|字段|类型|必填|默认值|说明|
|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|packages|StringArray	|是|无|进入页面后预下载分包的 `root` 或 `name`。`__APP__` 表示主包。|
| packages| StringArray |Yes|None|The `root` or `name` of the pre-download subpackage after entering the page. `__APP__` represents the main package. |
|network|String|否	|wifi|在指定网络下预下载，可选值为：all（不限网络）、wifi（仅wifi下预下载）|
| network| String|No | wifi|Pre-download under the specified network, optional values are: all (unlimited network), wifi (only pre-download under wifi)|

app的分包，同样支持preloadRule，但网络规则无效。
App subcontracting also supports preloadRule, but network rules are invalid.

## FAQ
- Q：为什么在pages.json里配置小程序定位权限描述，无法编译到小程序端，运行后一直提示getLocation需要在app.json中声明
- Q: Why is the MiniApp location permission description configured in pages.json, but cannot be compiled to the MiniApp side? After running, it keeps prompting that getLocation needs to be declared in app.json
- A：微信小程序的权限描述配置在manifest中，不在pages.json中，具体参考文档：[https://uniapp.dcloud.io/collocation/manifest?id=mp-weixin](https://uniapp.dcloud.io/collocation/manifest?id=mp-weixin)
- A: The permission description of the WeChat MiniApp is configured in the manifest, not in pages.json. For details, refer to the document: [https://uniapp.dcloud.io/collocation/manifest?id=mp-weixin](https://uniapp.dcloud.io/collocation/manifest?id=mp-weixin)
