# DarkMode 适配指南 @darkmode

> HBuilder X 3.6.9+ 支持

> 暗黑模式（Dark Mode），也被称为夜间模式或深色模式，是一种高对比度，或者反色模式的显示模式。是一种有利于在黑暗环境下观看手机的高对比度的模式，与传统的白底黑字相反，在夜间长时间观看手机不至于太难受，会给你一种更舒适的感觉，可能会对视力有所保护。

## 开启 DarkMode @open-darkmode

> 在 `manifest.json` 配置，应用的部分配置可通过变量的形式配置，在变量配置文件中定义不同主题下的颜色或图标，各平台配置如下：

### app-plus

在 `manifest.json -> app-plus` 中配置：

1. 配置 `darkmode:true`
2. 配置 `themeLocation`，指定变量配置文件 `theme.json` 路径，例如：在根目录下新增 `theme.json`，需要配置 `"themeLocation":"theme.json"`
3. 在 `theme.json` 中定义相关变量
4. 在 `pages.json` 中以@开头引用变量
5. 整体配置
   ```json
    "app-plus" : {
   		"darkmode" : true,
   		"themeLocation" : "theme.json" // 如果 theme.json 在根目录可省略
    }
   ```
6. 需要云端打包生效

#### iOS 安全区域适配

- 开启安全区域占位

  > 在 manifest.json 文件的"plus" 节点下添加 "safearea" 适配 iOS 的安全区域，"background" 对应正常模式下安全区域外的背景颜色，"backgroundDark"对应暗黑模式下安全区域外的背景颜色

	```json
	"plus" : {
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
  > 将 "offset" 置为 “none” 关闭安全区域的占位，注：关闭安全区域占位在刘海屏页面内容可能会被 “homeBar” 挡住，需要自行适配，具体请参考文档 [iOS 刘海屏适配](https://ask.dcloud.net.cn/article/35564)

	```json
	"safearea": {
			"bottom": {
					"offset": "none"
			}
	}
	```

**注意：iOS 13+、Android 10+设备上才支持**

### h5

在 `manifest.json -> h5` 中配置：

1. 配置 `darkmode:true`
2. 配置 `themeLocation`，指定变量配置文件 `theme.json` 路径，例如：在根目录下新增 `theme.json`，需要配置 `"themeLocation":"theme.json"`
3. 在 `theme.json` 中定义相关变量
4. 在 `pages.json` 中以@开头引用变量
5. 整体配置
   ```json
    "h5" : {
   		"darkmode" : true,
   		"themeLocation" : "theme.json" // 如果 theme.json 在根目录可省略
    }
   ```

### mp-weixin

在 `manifest.json -> mp-weixin` 中配置：

1. 配置 `darkmode:true`
2. 配置 `themeLocation`，指定变量配置文件 `theme.json` 路径，例如：在根目录下新增 `theme.json`，需要配置 `"themeLocation":"theme.json"`
3. 在 `theme.json` 中定义相关变量
4. 在 `pages.json` 中以@开头引用变量
5. 整体配置
   ```json
    "mp-weixin" : {
   		"darkmode" : true,
   		"themeLocation" : "theme.json" // 如果 theme.json 在根目录可省略
    }
   ```

支持通过变量配置的属性如下所示：

- 全局配置 globalStyle 与页面支持

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

`theme.json` 用于颜色主题相关的变量定义，需要先在 `themeLocation` 中配置 `theme.json` 的路径，否则无法读取变量配置。包含以下属性：

| 属性  | 类型   | 必填 | 描述                 |
| :---- | :----- | :--- | :------------------- |
| light | Object | 是   | 浅色模式下的变量定义 |
| dark  | Object | 是   | 深色模式下的变量定义 |

示例如下：

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

```json
// 全局配置
{
  "window": {
    "navigationBarBackgroundColor": "@navBgColor",
    "navigationBarTextStyle": "@navTxtStyle"
  }
}
// 页面配置
{
	"path": "pages/index/index",
	"style":{
		"navigationBarBackgroundColor": "@navBgColor",
		"navigationBarTextStyle": "@navTxtStyle"
	}
}
```

配置完成后，调用相应 api 框架会自动所设属性，展示对应主题下的颜色。

## 配置示例@themeconfig

pages.json（示例省略了主题相关以外的配置项）

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
		"iconPath1": "image/icon1_light.png",
		"selectedIconPath1": "image/selected_icon1_light.png",
		"iconPath2": "image/icon2_light.png",
		"selectedIconPath2": "image/selected_icon2_light.png"
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
		"iconPath1": "image/icon1_dark.png",
		"selectedIconPath1": "image/selected_icon1_dark.png",
		"iconPath2": "image/icon2_dark.png",
		"selectedIconPath2": "image/selected_icon2_dark.png"
	}
}
```

## 获取当前主题@get-theme

如果 `manifest.json` 对应平台配置中声明了`"darkmode": true`，`uni.getSystemInfo` 或 `uni.getSystemInfoSync` 的返回结果中会包含 `theme` 属性，值为 `light` 或 `dark`。

如果 `manifest.json` 对应平台配置未声明`"darkmode": true`，则无法获取到 `theme` 属性（即 theme 为 undefined）。

## 监听主题切换事件@on-theme-change

支持两种方式：

1. 在 `App.vue` 中写上 `onThemeChange` 生命周期，主题切换时会触发
2. 通过 `uni.onThemeChange` 监听主题变化，`uni.offThemeChange` 取消监听

## 页面 css 适配@perfers-color-scheme

> [css 支持情况](https://caniuse.com/?search=prefers-color-scheme)

在 css 中，支持通过媒体查询 `prefers-color-scheme` 适配不同主题，与 Web 中适配方式一致，例如：

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
