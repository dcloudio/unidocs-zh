# DarkMode 适配指南 @darkmode
# DarkMode adaptation guide @darkmode

> HBuilder X 3.6.9+ 支持
> HBuilder X 3.6.9+ support

暗黑模式（Dark Mode），也被称为夜间模式或深色模式，是一种高对比度，或者反色模式的显示模式。是一种有利于在黑暗环境下观看手机的高对比度的模式。uni-app的暗黑模式，是帮助开发者完成自己应用的暗黑模式的一批配置和API。开发者可以参考本文实现自己应用的暗黑模式。
Dark mode (Dark Mode), also known as night mode or dark mode, is a high-contrast, or inverse mode display mode. It is a high-contrast mode that is good for viewing the phone in a dark environment. The dark mode of uni-app is a batch of configurations and APIs to help developers complete the dark mode of their own applications. Developers can refer to this article to implement the dark mode of their own applications.

> 插件市场示例项目：[https://ext.dcloud.net.cn/plugin?name=hello-darkmode](https://ext.dcloud.net.cn/plugin?name=hello-darkmode)
> Plugin market example project: [https://ext.dcloud.net.cn/plugin?name=hello-darkmode](https://ext.dcloud.net.cn/plugin?name=hello-darkmode)

## 开启 DarkMode @open-darkmode
## Open DarkMode @open-darkmode

> 在 `manifest.json` 配置，应用的部分配置可通过变量的形式配置，在变量配置文件中定义不同主题下的颜色或图标，各平台配置如下：
> In the `manifest.json` configuration, part of the configuration of the application can be configured in the form of variables, and the colors or icons under different themes are defined in the variable configuration file. The configuration of each platform is as follows:

### app-plus

在 `manifest.json -> app-plus` 中配置：
Configure in `manifest.json -> app-plus`:

1. 配置 `darkmode:true`
1. Configure `darkmode:true`
2. 配置 `themeLocation`，指定变量配置文件 `theme.json` 路径，例如：在根目录下新增 `theme.json`，需要配置 `"themeLocation":"theme.json"`
2. Configure `themeLocation`, specify the variable configuration file `theme.json` path, for example: add `theme.json` under the root directory, you need to configure `"themeLocation":"theme.json"`
3. 在 `theme.json` 中定义相关变量
3. Define related variables in `theme.json`
4. 在 `pages.json` 中以@开头引用变量
4. Reference variables starting with @ in `pages.json`
5. 整体配置
5. Overall configuration
   ```json
    "app-plus" : {
   		"darkmode" : true,
   		"themeLocation" : "theme.json" // 如果 theme.json 在根目录可省略
    }
   ```
#### iOS 安全区域适配
#### iOS security area adaptation

- 开启安全区域占位
- Enable safe area occupancy

  > 在 manifest.json 文件的 "app-plus" 节点下添加 "safearea" 适配 iOS 的安全区域，"background" 对应正常模式下安全区域外的背景颜色，"backgroundDark"对应暗黑模式下安全区域外的背景颜色
  > Add "safearea" under the "app-plus" node of the manifest.json file to adapt to the safe area of iOS, "background" corresponds to the background color outside the safe area in normal mode, and "backgroundDark" corresponds to the color outside the safe area in dark mode background color

	```json
	"app-plus" : {
		"safearea": { //iOS平台的安全区域
			"background": "#ffffff",
			"backgroundDark": "#2f0508", // HX 3.1.19+支持
			"bottom": {
				"offset": "auto"
			}
		}
	}
	```

- 关闭安全区域占位
- Turn off safe area occupancy
  > 将 "offset" 置为 “none” 关闭安全区域的占位，注：关闭安全区域占位在刘海屏页面内容可能会被 “homeBar” 挡住，需要自行适配，具体请参考文档 [iOS 刘海屏适配](https://ask.dcloud.net.cn/article/35564)
  > Set "offset" to "none" to close the safe area occupancy. Note: When the security area occupancy is turned off, the content of the Notch page may be blocked by the "homeBar", which needs to be adapted by itself. For details, please refer to the document [iOS Notch Adaptation](https://ask.dcloud.net.cn/article/35564)

	```json
	"safearea": {
			"bottom": {
					"offset": "none"
			}
	}
	```

**注意：**
**Notice:**
- `iOS 13+`、`Android 10+`设备上才支持
- Only supported on `iOS 13+`, `Android 10+` devices
- 需要云端打包生效
- Requires cloud packaging to take effect

### h5

在 `manifest.json -> h5` 中配置：
Configure in `manifest.json -> h5`:

1. 配置 `darkmode:true`
1. Configure `darkmode:true`
2. 配置 `themeLocation`，指定变量配置文件 `theme.json` 路径，例如：在根目录下新增 `theme.json`，需要配置 `"themeLocation":"theme.json"`
2. Configure `themeLocation`, specify the variable configuration file `theme.json` path, for example: add `theme.json` under the root directory, you need to configure `"themeLocation":"theme.json"`
3. 在 `theme.json` 中定义相关变量
3. Define related variables in `theme.json`
4. 在 `pages.json` 中以@开头引用变量
4. Reference variables starting with @ in `pages.json`
5. 整体配置
5. Overall configuration
   ```json
    "h5" : {
   		"darkmode" : true,
   		"themeLocation" : "theme.json" // 如果 theme.json 在根目录可省略
    }
   ```

### mp-weixin

在 `manifest.json -> mp-weixin` 中配置：
Configure in `manifest.json -> mp-weixin`:

1. 配置 `darkmode:true`
1. Configure `darkmode:true`
2. 配置 `themeLocation`，指定变量配置文件 `theme.json` 路径，例如：在根目录下新增 `theme.json`，需要配置 `"themeLocation":"theme.json"`
2. Configure `themeLocation`, specify the variable configuration file `theme.json` path, for example: add `theme.json` under the root directory, you need to configure `"themeLocation":"theme.json"`
3. 在 `theme.json` 中定义相关变量
3. Define related variables in `theme.json`
4. 在 `pages.json` 中以@开头引用变量
4. Reference variables starting with @ in `pages.json`
5. 整体配置
5. Overall configuration
   ```json
    "mp-weixin" : {
   		"darkmode" : true,
   		"themeLocation" : "theme.json" // 如果 theme.json 在根目录可省略
    }
   ```

支持通过变量配置的属性如下所示：
The properties that support configuration via variables are as follows:

- 全局配置 globalStyle 与页面支持
- Global configuration globalStyle and page support

  - navigationBarBackgroundColor
  - navigationBarTextStyle
  - backgroundColor
  - backgroundTextStyle
  - backgroundColorTop
  - backgroundColorBottom

- 全局配置 tabbar 属性：
  - color
  - selectedColor
  - backgroundColor
  - borderStyle
  - list
    - iconPath
    - selectedIconPath

## 变量配置文件 theme.json@themejson
## variable configuration file theme.json@themejson

`theme.json` 用于颜色主题相关的变量定义，需要先在 `themeLocation` 中配置 `theme.json` 的路径，否则无法读取变量配置。包含以下属性：
`theme.json` is used for variable definition related to color theme, you need to configure the path of `theme.json` in `themeLocation` first, otherwise the variable configuration cannot be read. Contains the following properties:

| 属性  | 类型   | 必填 | 描述                 |
| Attribute | Type | Required | Description |
| :---- | :----- | :--- | :------------------- |
| light | Object | 是   | 浅色模式下的变量定义 |
| light | Object | Yes | variable definition in light mode |
| dark  | Object | 是   | 深色模式下的变量定义 |
| dark | Object | Yes | Variable definition in dark mode |

示例如下：
Examples are as follows:

```json
{
	"light": {
		"navBgColor": "#f8f8f8",
		"navTxtStyle": "black"
	},
	"dark": {
		"navBgColor": "#292929",
		"navTxtStyle": "white"
	}
}
```

完成定义后，可在 `pages.json` 中全局配置或页面配置的相关属性中以 `@` 开头引用，例如：
After the definition is completed, it can be referenced at the beginning of `@` in the related properties of the global configuration or page configuration in `pages.json`, for example:

```json
// 全局配置
// global configuration
{
  "globalStyle": {
    "navigationBarBackgroundColor": "@navBgColor",
    "navigationBarTextStyle": "@navTxtStyle"
  }
}
// 页面配置
// page configuration
{
	"path": "pages/index/index",
	"style":{
		"navigationBarBackgroundColor": "@navBgColor",
		"navigationBarTextStyle": "@navTxtStyle"
	}
}
```

配置完成后，调用相应 api 框架会自动所设属性，展示对应主题下的颜色。
After the configuration is complete, calling the corresponding api framework will automatically set the properties to display the colors under the corresponding theme.

## 配置示例@themeconfig
## Configuration example @themeconfig

pages.json（示例省略了主题相关以外的配置项）
pages.json (the example omits configuration items other than those related to the theme)

```json
{
	"globalStyle": {
		"navigationBarBackgroundColor": "@navBgColor",
		"navigationBarTextStyle": "@navTxtStyle",
		"backgroundColor": "@bgColor",
		"backgroundTextStyle": "@bgTxtStyle",
		"backgroundColorTop": "@bgColorTop",
		"backgroundColorBottom": "@bgColorBottom"
	},
	"tabBar": {
		"color": "@tabFontColor",
		"selectedColor": "@tabSelectedColor",
		"backgroundColor": "@tabBgColor",
		"borderStyle": "@tabBorderStyle",
		"list": [
			{
				"iconPath": "@iconPath1",
				"selectedIconPath": "@selectedIconPath1"
			},
			{
				"iconPath": "@iconPath2",
				"selectedIconPath": "@selectedIconPath2"
			}
		]
	}
}
```

theme.json

```json
{
	"light": {
		"navBgColor": "#f8f8f8",
		"navTxtStyle": "black",
		"bgColor": "#ffffff",
		"bgTxtStyle": "light",
		"bgColorTop": "#eeeeee",
		"bgColorBottom": "#efefef",
		"tabFontColor": "#000000",
		"tabSelectedColor": "#3cc51f",
		"tabBgColor": "#ffffff",
		"tabBorderStyle": "black",
		"iconPath1": "/static/icon1_light.png",
		"selectedIconPath1": "/static/selected_icon1_light.png",
		"iconPath2": "/static/icon2_light.png",
		"selectedIconPath2": "/static/selected_icon2_light.png"
	},
	"dark": {
		"navBgColor": "#292929",
		"navTxtStyle": "white",
		"bgColor": "#1f1f1f",
		"bgTxtStyle": "dark",
		"bgColorTop": "#292929",
		"bgColorBottom": "#1f1f1f",
		"tabFontColor": "#ffffff",
		"tabSelectedColor": "#51a937",
		"tabBgColor": "#292929",
		"tabBorderStyle": "white",
		"iconPath1": "/static/icon1_dark.png",
		"selectedIconPath1": "/static/selected_icon1_dark.png",
		"iconPath2": "/static/icon2_dark.png",
		"selectedIconPath2": "/static/selected_icon2_dark.png"
	}
}
```

## 获取当前主题@get-theme
## Get the current theme @get-theme

如果 `manifest.json` 对应平台配置中声明了`"darkmode": true`，`uni.getSystemInfo` 或 `uni.getSystemInfoSync` 的返回结果中会包含 `theme` 属性，值为 `light` 或 `dark`。
If `"darkmode": true` is declared in the corresponding platform configuration of `manifest.json`, the return result of `uni.getSystemInfo` or `uni.getSystemInfoSync` will contain the `theme` attribute, and the value is `light` or `dark `.

如果 `manifest.json` 对应平台配置未声明`"darkmode": true`，则无法获取到 `theme` 属性（即 theme 为 undefined）。
If `"darkmode": true` is not declared in the corresponding platform configuration of `manifest.json`, the `theme` property cannot be obtained (that is, theme is undefined).

## 监听主题切换事件@on-theme-change
## Listen to theme switching events @on-theme-change

支持两种方式：
Two methods are supported:

1. 在 `App.vue` 中写上 `onThemeChange` 生命周期，主题切换时会触发
1. Write the `onThemeChange` life cycle in `App.vue`, it will be triggered when the theme is switched
2. 通过 `uni.onThemeChange` 监听主题变化，`uni.offThemeChange` 取消监听
2. Use `uni.onThemeChange` to listen to theme changes, and `uni.offThemeChange` to cancel the listening

## 页面 css 适配@perfers-color-scheme
## page css adaptation @perfers-color-scheme

> [css 支持情况](https://caniuse.com/?search=prefers-color-scheme)
> [css support](https://caniuse.com/?search=prefers-color-scheme)

在 css 中，支持通过媒体查询 `prefers-color-scheme` 适配不同主题，与 Web 中适配方式一致，例如：
In css, it is supported to adapt different themes through the media query `prefers-color-scheme`, which is consistent with the adaptation method in the web, for example:

```css
/* 一般情况下的样式 start */
.some-background {
	background: white;
}
.some-text {
	color: black;
}
/* 一般情况下的样式 end */

@media (prefers-color-scheme: dark) {
	/* DarkMode 下的样式 start */
	.some-background {
		background: #1b1b1b;
	}
	.some-text {
		color: #ffffff;
	}
	/* DarkMode 下的样式 end */
}
```
