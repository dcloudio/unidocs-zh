# pages.json

`pages.json` 文件是 uni-app x 的页面管理配置文件，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。

所有页面，均需在pages.json中注册，否则不会被打包到应用中。

在HBuilderX中新建页面，默认会在pages.json中自动注册。在HBuilderX中删除页面文件，也会在状态栏提示从pages.json中移除注册。

除了管理页面，pages.json支持对页面进行特殊配置，比如应用首页的tabbar、每个页面的顶部导航栏设置。

但这些uni-app中设计的功能，主要是为了解决页面由webview渲染带来的性能问题，由原生提供一些配置来优化。

uni-app x的app平台，页面不再由webview渲染，其实不需要原生提供特殊配置来优化。但为了开发的便利和多端的统一，也支持了tabbar和导航栏设置。\
但不再支持uni-app的app-plus专用配置以及tabbar的midbutton。

如pages.json中配置的导航栏和tabbar功能无法满足你的需求，可以不在pages.json中配置，自己用view做导航栏和tabbar。\
hello uni-app x有相关示例，参考：
- 自定义导航栏：[插件地址](https://ext.dcloud.net.cn/plugin?id=14618)
- 自定义tabbar：[源码参考](https://gitcode.net/dcloud/hello-uni-app-x/-/tree/master/pages/template/custom-tab-bar)

> 本文只包括 uni-app x 对 pages.json 支持情况。完整配置项详见 [pages.json 页面路由](https://uniapp.dcloud.net.cn/collocation/pages.html)

## 配置项列表

<!-- PAGESJSON.pages.description -->

<!-- PAGESJSON.pages.table -->

<!-- PAGESJSON.pages.compatibility -->

### globalStyle 配置项列表 @pages-globalstyle

globalStyle节点里是所有页面都生效的全局样式配置。它的配置与页面级style基本相同，但优先级低于页面级style配置。

<!-- PAGESJSON.pages_globalStyle.description -->

<!-- PAGESJSON.pages_globalStyle.table -->

<!-- PAGESJSON.pages_globalStyle.compatibility -->


### pages 配置项列表 @pagesoptionspage

pages节点里注册页面，数据格式是数组，数组每个项都是一个对象，通过path属性指定页面路径，通过style指定该页面的样式配置。

<!-- PAGESJSON.PagesOptionsPage.description -->

<!-- PAGESJSON.PagesOptionsPage.table -->

<!-- PAGESJSON.PagesOptionsPage.compatibility -->

**Tips：**

- **pages节点的第一项为应用入口页（即首页）**
- **应用中新增/减少页面**，都需要对 pages 数组进行修改
- 文件名**不需要写后缀**，框架会自动寻找路径下的页面资源

**示例**

假使开发目录为：

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─pages
│  ├─index
│  │  └─index.uvue
│  └─login
│     └─login.uvue
├─static
├─main.uts
├─App.uvue
├─manifest.json
└─pages.json
	</code>
</pre>

则需要在 pages.json 中填写

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


#### style 配置项列表 @pagesoptionspage-style

用于设置每个页面的状态栏、导航条的颜色、文字等信息。

页面中配置项会覆盖 [globalStyle](#pages-globalstyle) 中相同的配置项

<!-- PAGESJSON.PagesOptionsPage_style.description -->

<!-- PAGESJSON.PagesOptionsPage_style.table -->

<!-- PAGESJSON.PagesOptionsPage_style.compatibility -->

**Tips**
- 状态栏
	* 手机顶部状态栏的背景色、前景色(white/black)与navigationBarBackgroundColor和navigationBarTextStyle相同
	* 当navigationStyle设为custom时，原生导航栏不显示。此时尤其需注意顶部状态栏的问题。
	* 如需动态设置状态栏颜色，使用api [uni.setNavigationBarColor](./api/set-navigation-bar-color.md)
	* 注意不同手机的状态栏高度并不相同，如需获取本机的状态栏高度，使用api [uni.getWindowInfo](./api/get-window-info.md)
- 下拉刷新
	* pages.json中下拉刷新是页面级配置，方便使用但灵活度有限。
	* 如需自定义下拉刷新，请使用[scroll-view](./component/scroll-view.md)或[list-view](./component/list-view.md)的下拉刷新。

**style示例**
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


### tabBar 配置项列表 @pages-tabbar

tabbar节点用于配置应用的tabbar，仅支持配置一个。如需在更多页面配置tabbar，请使用view自行封装。

<!-- PAGESJSON.pages_tabBar.description -->

<!-- PAGESJSON.pages_tabBar.table -->

<!-- PAGESJSON.pages_tabBar.compatibility -->

#### PagesOptionsTabbarList 配置项列表 @pagesoptionstabbarlist

<!-- PAGESJSON.PagesOptionsTabbarList.description -->

<!-- PAGESJSON.PagesOptionsTabbarList.table -->

<!-- PAGESJSON.PagesOptionsTabbarList.compatibility -->


##### iconfont 配置项列表 @pagesoptionstabbarlist-iconfont

<!-- PAGESJSON.PagesOptionsTabbarList_iconfont.description -->

<!-- PAGESJSON.PagesOptionsTabbarList_iconfont.table -->

<!-- PAGESJSON.PagesOptionsTabbarList_iconfont.compatibility -->

**tabbar示例**
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

### condition 配置项列表 @pages-condition

启动模式配置，仅开发期间生效，用于模拟直达页面的场景。教程[详见](https://uniapp.dcloud.net.cn/collocation/pages.html#condition)

<!-- PAGESJSON.pages_condition.description -->

<!-- PAGESJSON.pages_condition.table -->

<!-- PAGESJSON.pages_condition.compatibility -->

#### PagesConditionItem 配置项列表 @pagesconditionitem

<!-- PAGESJSON.PagesConditionItem.description -->

<!-- PAGESJSON.PagesConditionItem.table -->

<!-- PAGESJSON.PagesConditionItem.compatibility -->


### easycom 配置项列表 @pages-easycom

easycom是uni-app提供的一种简化组件使用的方式。一般情况下组件放置在符合规范的位置时即可自动引用。

但有时组件的路径或文件名无法满足easycom默认规范要求，可以在pages.json里进行规则的自定义。

自定义easycom的详细教程[详见](https://uniapp.dcloud.net.cn/collocation/pages.html#easycom)

<!-- PAGESJSON.pages_easycom.description -->

<!-- PAGESJSON.pages_easycom.table -->

<!-- PAGESJSON.pages_easycom.compatibility -->


### uniIdRouter 配置项列表 @pages-uniidrouter

uniIdRouter是登录相关的路由配置。配置应用的登录页面、哪些页面需要登录才能访问、token过期或无效时是否自动跳转到登陆页。这些配置是依赖于uni-id的。[详见](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#uni-id-router)

<!-- PAGESJSON.pages_uniIdRouter.description -->

<!-- PAGESJSON.pages_uniIdRouter.table -->

<!-- PAGESJSON.pages_uniIdRouter.compatibility -->
