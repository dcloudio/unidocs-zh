vue.config.js 是一个可选的配置文件，如果项目的根目录中存在这个文件，那么它会被自动加载，一般用于配置 webpack 等编译选项，具体规范参考：[vue.config.js](https://cli.vuejs.org/zh/config/#vue-config-js)
vue.config.js is an optional configuration file. If this file exists in the root directory of the project, it will be automatically loaded. It is generally used to configure compilation options such as webpack. For specific specifications, please refer to [vue.config.js](https://cli.vuejs.org/zh/config/#vue-config-js)

**支持情况**
**Supported or not**
* CLI 工程 
* CLI project
* HBuilderX 2.1.5 及以上版本
* HBuilderX 2.1.5 and above

**注意事项**
**Precautions**

- 仅vue页面生效
- Valid only on vue pages

部分配置项会被编译配置覆盖，例如：
Part of configuration items will be overwritten by compilation configuration, for example:

* publicPath  不支持，如果需要配置，请在 manifest.json->h5->router->base 中配置，参考文档：[h5-router](/collocation/manifest?id=h5-router)
* publicPath does not support, if you need to configure, please configure in manifest.json->h5->router->base, refer to the document: [h5-router](/collocation/manifest?id=h5-router)
* outputDir  不支持
* outputDir, not supported
* assetsDir 固定 static
* assetsDir, fixed to static
* pages  不支持
* pages, not supported
* runtimeCompiler 固定 false
* runtimeCompiler, fixed to false
* productionSourceMap 固定 false
* productionSourceMap, fixed to false
* css.extract  H5 平台固定 false，其他平台固定 true
* css.extract, H5 platform fixed to false, and other platforms fixed to true
* parallel 固定 false
* Parallel, fixed to false
* 使用cli项目时，默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在transpileDependencies中列出来。[详情参考](https://cli.vuejs.org/zh/config/#transpiledependencies)
* When using cli projects, babel-loader ignores all files in node_modules by default. If you want to explicitly translate a dependency through Babel, you can list it in transpileDependencies. [Detail reference](https://cli.vuejs.org/zh/config/#transpiledependencies)

**使用示例**
**Usage example**

**自定义静态资源目录**
**Custom static resource directory**

```js
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin') //最新版本copy-webpack-plugin插件暂不兼容，推荐v5.0.0

module.exports = {
	configureWebpack: {
		plugins: [
			new CopyWebpackPlugin([
				{
					from: path.join(__dirname, 'src/images'),
					to: path.join(__dirname, 'dist', process.env.NODE_ENV === 'production' ? 'build' : 'dev', process.env.UNI_PLATFORM, 'images')
				}
			])
		]
	}
}
```

**注入全局依赖**
**Inject global dependencies**

```js
// 示例从插件市场下载 mp-storage
// Example download mp-storage from plugin market
const webpack = require('webpack')

module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				'localStorage': ['mp-storage', 'localStorage'],
				'window.localStorage': ['mp-storage', 'localStorage']
			})
		]
	}
}
```

**配置环境变量**
**Configure environment variables**

```js
const webpack = require('webpack')

module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env'].VUE_APP_TEST = '"test"'
        return args
      })
  }
}
```

**发布时删除console**
**Delete console at release**

`HBuilderX 2.6.8+`支持
Supported in `HBuilderX 2.6.8+`

```js
module.exports = {
	chainWebpack: (config) => {
		// 发行或运行时启用了压缩时会生效
		// Valid when compression is enabled at release or runtime.
		config.optimization.minimizer('terser').tap((args) => {
			const compress = args[0].terserOptions.compress
			// 非 App 平台移除 console 代码(包含所有 console 方法，如 log,debug,info...)
			// Non-App platforms remove the console code (including all console methods, such as log, debug, info...)
			compress.drop_console = true
			compress.pure_funcs = [
				'__f__', // App 平台 vue 移除日志代码
				// 'console.debug' // 可移除指定的 console 方法
				// 'console.debug' // Specified console method can be removed
			]
			return args
		})
	}
}
```

**发布时动态修改 manifest.json**
**Dynamically modify manifest.json at release**

```js
// 读取 manifest.json ，修改后重新写入
// Read manifest.json, modify it and rewrite it
const fs = require('fs')

const manifestPath = './src/manifest.json'
let Manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' })
function replaceManifest(path, value) {
  const arr = path.split('.')
  const len = arr.length
  const lastItem = arr[len - 1]

  let i = 0
  let ManifestArr = Manifest.split(/\n/)

  for (let index = 0; index < ManifestArr.length; index++) {
    const item = ManifestArr[index]
    if (new RegExp(`"${arr[i]}"`).test(item)) ++i;
    if (i === len) {
      const hasComma = /,/.test(item)
      ManifestArr[index] = item.replace(new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`), `"${lastItem}": ${value}${hasComma ? ',' : ''}`)
      break;
    }
  }

  Manifest = ManifestArr.join('\n')
}
// 使用
// Usage
replaceManifest('app-plus.usingComponents', false)
replaceManifest('app-plus.splashscreen.alwaysShowBeforeRender', false)
replaceManifest('mp-baidu.usingComponents', false)
fs.writeFileSync(manifestPath, Manifest, {
  "flag": "w"
})

module.exports = {
	// ...
}
```

启用压缩的方法：
Ways to enable compression:
- HBuilderX创建的项目勾选运行-->运行到小程序模拟器-->运行时是否压缩代码
- Check Run for the project created by HBuilderX-->Run to Mini Program Simulator-->Whether to compress the code at runtime
- cli创建的项目可以在`package.json`中添加参数`--minimize`，示例：`"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch --minimize"`
- Projects created by cli can add parameter `--minimize` in `package.json`, example: `"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni -build --watch --minimize"`
