# uni-app自动化测试@about

uni-app提供了一批[API](./api.md)，这些API可以操控uni-app应用，包括运行、跳转页面、触发点击等，并可以获取页面元素状态、进行截图，从而实现对uni-app项目进行自动化测试的目的。

本功能使用到了业内常见的测试库如[jest](https://jestjs.io)（MIT协议）。

推荐使用方式：研发提交源码到版本库后，持续集成系统自动拉取源码，自动运行自动化测试。

### 特性@features
开发者可以利用[API](./api.md)做以下事情：

* 控制跳转到指定页面
* 获取页面数据
* 获取页面元素状态
* 触发元素绑定事件
* 调用 uni 对象上任意接口

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快应用|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√(ios仅支持模拟器)|√|√|x|x|x|x|x|x|x|

### CLI

如果您想在`终端命令行`进行自动化测试、或使用持续集成进行测试，请使用uni-app [CLI](https://uniapp.dcloud.net.cn/quickstart?id=_2-通过vue-cli命令行) 工程，[CLI项目自动化测试教程](uniapp-cli-project.md)

### 测试插件@descriptions

为了方便大家在`HBuilderX`内，进行uni-app自动化测试，开发了 [HBuilderX uni-app自动化测试插件](https://ext.dcloud.net.cn/plugin?id=5708)。

插件支持在HBuilderX内对`uni-app普通项目`、`CLI项目`进行自动化测试。

插件简化了测试环境安装、测试用例创建、测试运行、测试设备选择等步骤。[插件使用文档](./hbuilderx-extension/index)


### jest.config.js@jestconfigjs

jest.config.js文件，为测试配置文件，详细内容如下：

```js
module.exports = {
	globalTeardown: '@dcloudio/uni-automator/dist/teardown.js',
	testEnvironment: '@dcloudio/uni-automator/dist/environment.js',
	testEnvironmentOptions: {
		compile: true,
		h5: { // 为了节省测试时间，可以指定一个 H5 的 url 地址，若不指定，每次运行测试，会先 npm run dev:h5
			url: "http://192.168.x.x:8080/h5/",
			options: {
				headless: false // 配置是否显示 puppeteer 测试窗口
			}
		},
		"app-plus": { // 需要安装 HBuilderX
			android: {
				appid: "", //自定义基座测试需配置manifest.json中的appid
				package: "", //自定义基座测试需配置Android包名
				executablePath: "HBuilderX/plugins/launcher/base/android_base.apk" // apk 目录或自定义调试基座包路径
			},
			ios: {
				// uuid 必须配置，目前仅支持模拟器，可以（xcrun simctl list）查看要使用的模拟器 uuid
				id: "",
				executablePath: "HBuilderX/plugins/launcher/base/Pandora_simulator.app" // ipa 目录
			}
		},
		"mp-weixin": {
			port: 9420, // 默认 9420
			account: "", // 测试账号
			args: "", // 指定开发者工具参数
			cwd: "", // 指定开发者工具工作目录
			launch: true, // 是否主动拉起开发者工具
			teardown: "disconnect", // 可选值 "disconnect"|"close" 运行测试结束后，断开开发者工具或关闭开发者工具
			remote: false, // 是否真机自动化测试
			executablePath: "", // 开发者工具cli路径，默认会自动查找,  windows: C:/Program Files (x86)/Tencent/微信web开发者工具/cli.bat", mac: /Applications/wechatwebdevtools.app/Contents/MacOS/cli
		},
		"mp-baidu": {
			port: 9430, // 默认 9430
			args: "", // 指定开发者工具参数
			cwd: "", // 指定开发者工具工作目录
			launch: true, // 是否主动拉起开发者工具
			teardown: "disconnect", // 可选值 "disconnect"|"close" 运行测试结束后，断开开发者工具或关闭开发者工具
			remote: false, // 是否真机自动化测试
			executablePath: "", // 开发者工具cli路径，默认会自动查找
		}
	},
	testTimeout: 15000,
	reporters: [
		'default'
	],
	watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
	moduleFileExtensions: ['js', 'json'],
	rootDir: __dirname,
	testMatch: ['<rootDir>/src/**/*test.[jt]s?(x)'], // 测试文件目录
	testPathIgnorePatterns: ['/node_modules/']
}

```



**注意事项**

1. 如果页面涉及到分包加载问题，`reLaunch` 获取的页面路径可能会出现问题 ，解决方案如下 ：
```javascript
// 重新 reLaunch至首页，并获取 page 对象（其中 program 是 uni-automator 自动注入的全局对象）
page = await program.reLaunch('/pages/extUI/calendar/calendar')
// 微信小程序如果是分包页面，需要延迟大概 7s 以上，保证可以正确获取page对象
await page.waitFor(7000)
page = await program.currentPage()
```

2. 微信小程序 element 不能跨组件选择元素，首先要先获取当前组件，再继续查找

```html
<uni-tag>
  <view class="test"></view>
</uni-tag>
```

```javascript
// 错误，取不到元素
await page.$('.test')

// 可以取到元素
let tag = await page.$('uni-tag')
await tag.$('.test')
```

3. 微信小程序暂不支持父子选择器
4. 百度小程序选择元素必须有事件的元素才能被选中，否则提示元素不存在
5. 分包中的页面，打开之后要延迟时间长一点，否则不能正确获取到页面信息
6. App-android自定义基座测试需要在`jest.config.js`文件android节点下配置appid（manifest.json中的appid）、package（包名）、executablePath（自定义调试基座包路径）

### 测试示例

GitHub： [https://github.com/dcloudio/hello-uniapp](https://github.com/dcloudio/hello-uniapp)

### 更新记录

- `HBuilderX 4.13` 支持 `page.data` 获取 `defineExpose` 暴露的数据