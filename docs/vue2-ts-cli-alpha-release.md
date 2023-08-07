### 3.8.7.20230627-alpha

::: preview

> babel.config.js

```JS
const webpack = require('webpack')
const plugins = []

if (process.env.UNI_OPT_TREESHAKINGNG) {
	plugins.push(require('@dcloudio/vue-cli-plugin-uni-optimize/packages/babel-plugin-uni-api/index.js'))
}

if (
	(
		process.env.UNI_PLATFORM === 'app-plus' &&
		process.env.UNI_USING_V8
	) ||
	(
		process.env.UNI_PLATFORM === 'h5' &&
		process.env.UNI_H5_BROWSER === 'builtin'
	)
) {
	const path = require('path')

	const isWin = /^win/.test(process.platform)

	const normalizePath = path => (isWin ? path.replace(/\\/g, '/') : path)

	const input = normalizePath(process.env.UNI_INPUT_DIR)
	try {
		plugins.push([
			require('@dcloudio/vue-cli-plugin-hbuilderx/packages/babel-plugin-console'),
			{
				file(file) {
					file = normalizePath(file)
					if (file.indexOf(input) === 0) {
						return path.relative(input, file)
					}
					return false
				}
			}
		])
	} catch (e) {}
}

process.UNI_LIBRARIES = process.UNI_LIBRARIES || ['@dcloudio/uni-ui']
process.UNI_LIBRARIES.forEach(libraryName => {
	plugins.push([
		'import',
		{
			'libraryName': libraryName,
			'customName': (name) => {
				return `${libraryName}/lib/${name}/${name}`
			}
		}
	])
})

if (process.env.UNI_PLATFORM !== 'h5') {
	plugins.push('@babel/plugin-transform-runtime')
}

const config = {
	presets: [
		[
			'@vue/app',
			{
				modules: webpack.version[0] > 4 ? 'auto' : 'commonjs',
				useBuiltIns: process.env.UNI_PLATFORM === 'h5' ? 'usage' : 'entry'
			}
		]
	],
	plugins
}

const UNI_H5_TEST = '**/@dcloudio/uni-h5/dist/index.umd.min.js'
if (process.env.NODE_ENV === 'production') {
	config.overrides = [{
		test: UNI_H5_TEST,
		compact: true,
	}]
} else {
	config.ignore = [UNI_H5_TEST]
}

module.exports = config
```

> jest.config.js

```JS
module.exports = {
	globalTeardown: '@dcloudio/uni-automator/dist/teardown.js',
	testEnvironment: '@dcloudio/uni-automator/dist/environment.js',
	testEnvironmentOptions: {},
	testTimeout: 15000,
	reporters: [
		'default'
	],
	watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
	moduleFileExtensions: ['js', 'json'],
	rootDir: __dirname,
	testMatch: ['<rootDir>/src/**/*test.[jt]s?(x)'],
	testPathIgnorePatterns: ['/node_modules/']
}
```

> tsconfig.json

```JS
{
	"compilerOptions": {
		"target": "esnext",
		"module": "esnext",
		"strict": true,
		"jsx": "preserve",
		"importHelpers": true,
		"moduleResolution": "node",
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"experimentalDecorators": true,
		"sourceMap": true,
		"skipLibCheck": true,
		"baseUrl": ".",
		"types": [
			"webpack-env",
			"@dcloudio/types",
			"miniprogram-api-typings",
			"mini-types"
		],
		"paths": {
			"@/*": [
				"./src/*"
			]
		},
		"lib": [
			"esnext",
			"dom",
			"dom.iterable",
			"scripthost"
		]
	},
	"exclude": [
		"node_modules",
		"unpackage",
		"dist",
		"src/**/*.nvue"
	]
}
```

> package.json

```JS
{
	"name": "vue2-alpha-ts",
	"version": "0.1.0",
	"private": true,
	"scripts": {
		"serve": "npm run dev:h5",
		"build": "npm run build:h5",
		"build:app-plus": "cross-env NODE_ENV=production UNI_PLATFORM=app-plus vue-cli-service uni-build",
		"build:custom": "cross-env NODE_ENV=production uniapp-cli custom",
		"build:h5": "cross-env NODE_ENV=production UNI_PLATFORM=h5 vue-cli-service uni-build",
		"build:mp-360": "cross-env NODE_ENV=production UNI_PLATFORM=mp-360 vue-cli-service uni-build",
		"build:mp-alipay": "cross-env NODE_ENV=production UNI_PLATFORM=mp-alipay vue-cli-service uni-build",
		"build:mp-baidu": "cross-env NODE_ENV=production UNI_PLATFORM=mp-baidu vue-cli-service uni-build",
		"build:mp-jd": "cross-env NODE_ENV=production UNI_PLATFORM=mp-jd vue-cli-service uni-build",
		"build:mp-kuaishou": "cross-env NODE_ENV=production UNI_PLATFORM=mp-kuaishou vue-cli-service uni-build",
		"build:mp-lark": "cross-env NODE_ENV=production UNI_PLATFORM=mp-lark vue-cli-service uni-build",
		"build:mp-qq": "cross-env NODE_ENV=production UNI_PLATFORM=mp-qq vue-cli-service uni-build",
		"build:mp-toutiao": "cross-env NODE_ENV=production UNI_PLATFORM=mp-toutiao vue-cli-service uni-build",
		"build:mp-weixin": "cross-env NODE_ENV=production UNI_PLATFORM=mp-weixin vue-cli-service uni-build",
		"build:mp-xhs": "cross-env NODE_ENV=production UNI_PLATFORM=mp-xhs vue-cli-service uni-build",
		"build:quickapp-native": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-native vue-cli-service uni-build",
		"build:quickapp-webview": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview vue-cli-service uni-build",
		"build:quickapp-webview-huawei": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview-huawei vue-cli-service uni-build",
		"build:quickapp-webview-union": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview-union vue-cli-service uni-build",
		"dev:app-plus": "cross-env NODE_ENV=development UNI_PLATFORM=app-plus vue-cli-service uni-build --watch",
		"dev:custom": "cross-env NODE_ENV=development uniapp-cli custom",
		"dev:h5": "cross-env NODE_ENV=development UNI_PLATFORM=h5 vue-cli-service uni-serve",
		"dev:mp-360": "cross-env NODE_ENV=development UNI_PLATFORM=mp-360 vue-cli-service uni-build --watch",
		"dev:mp-alipay": "cross-env NODE_ENV=development UNI_PLATFORM=mp-alipay vue-cli-service uni-build --watch",
		"dev:mp-baidu": "cross-env NODE_ENV=development UNI_PLATFORM=mp-baidu vue-cli-service uni-build --watch",
		"dev:mp-jd": "cross-env NODE_ENV=development UNI_PLATFORM=mp-jd vue-cli-service uni-build --watch",
		"dev:mp-kuaishou": "cross-env NODE_ENV=development UNI_PLATFORM=mp-kuaishou vue-cli-service uni-build --watch",
		"dev:mp-lark": "cross-env NODE_ENV=development UNI_PLATFORM=mp-lark vue-cli-service uni-build --watch",
		"dev:mp-qq": "cross-env NODE_ENV=development UNI_PLATFORM=mp-qq vue-cli-service uni-build --watch",
		"dev:mp-toutiao": "cross-env NODE_ENV=development UNI_PLATFORM=mp-toutiao vue-cli-service uni-build --watch",
		"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch",
		"dev:mp-xhs": "cross-env NODE_ENV=development UNI_PLATFORM=mp-xhs vue-cli-service uni-build --watch",
		"dev:quickapp-native": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-native vue-cli-service uni-build --watch",
		"dev:quickapp-webview": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview vue-cli-service uni-build --watch",
		"dev:quickapp-webview-huawei": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview-huawei vue-cli-service uni-build --watch",
		"dev:quickapp-webview-union": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview-union vue-cli-service uni-build --watch",
		"info": "node node_modules/@dcloudio/vue-cli-plugin-uni/commands/info.js",
		"serve:quickapp-native": "node node_modules/@dcloudio/uni-quickapp-native/bin/serve.js",
		"test:android": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=android jest -i",
		"test:h5": "cross-env UNI_PLATFORM=h5 jest -i",
		"test:ios": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=ios jest -i",
		"test:mp-baidu": "cross-env UNI_PLATFORM=mp-baidu jest -i",
		"test:mp-weixin": "cross-env UNI_PLATFORM=mp-weixin jest -i"
	},
	"dependencies": {
		"@dcloudio/uni-app": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-app-plus": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-h5": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-i18n": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-mp-360": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-mp-alipay": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-mp-baidu": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-mp-jd": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-mp-kuaishou": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-mp-lark": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-mp-qq": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-mp-toutiao": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-mp-vue": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-mp-weixin": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-mp-xhs": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-quickapp-native": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-quickapp-webview": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-stacktracey": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-stat": "^2.0.2-alpha-3080720230627002",
		"@vue/shared": "^3.0.0",
		"core-js": "^3.8.3",
		"flyio": "^0.6.2",
		"vue": ">= 2.6.14 < 2.7",
		"vue-class-component": "^6.3.2",
		"vue-property-decorator": "^8.0.0",
		"vuex": "^3.2.0"
	},
	"devDependencies": {
		"@babel/plugin-syntax-typescript": "^7.2.0",
		"@dcloudio/types": "^3.0.4",
		"@dcloudio/uni-automator": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-cli-i18n": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-cli-shared": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-helper-json": "*",
		"@dcloudio/uni-migration": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/uni-template-compiler": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/vue-cli-plugin-hbuilderx": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/vue-cli-plugin-uni": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/vue-cli-plugin-uni-optimize": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/webpack-uni-mp-loader": "^2.0.2-alpha-3080720230627002",
		"@dcloudio/webpack-uni-pages-loader": "^2.0.2-alpha-3080720230627002",
		"@vue/cli-plugin-babel": "~5.0.0",
		"@vue/cli-plugin-typescript": "~5.0.8",
		"@vue/cli-service": "~5.0.0",
		"babel-plugin-import": "^1.11.0",
		"cross-env": "^7.0.2",
		"jest": "^25.4.0",
		"mini-types": "*",
		"miniprogram-api-typings": "*",
		"postcss-comment": "^2.0.0",
		"typescript": "~4.5.5",
		"vue-template-compiler": ">= 2.6.14 < 2.7"
	},
	"browserslist": [
		"Android >= 4.4",
		"ios >= 9"
	],
	"uni-app": {
		"scripts": {}
	}
}
```


> postcss.config.js

```JS
const path = require('path')
const webpack = require('webpack')
const config = {
	parser: require('postcss-comment'),
	plugins: [
		require('postcss-import')({
			resolve(id, basedir, importOptions) {
				if (id.startsWith('~@/')) {
					return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3))
				} else if (id.startsWith('@/')) {
					return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2))
				} else if (id.startsWith('/') && !id.startsWith('//')) {
					return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1))
				}
				return id
			}
		}),
		require('autoprefixer')({
			remove: process.env.UNI_PLATFORM !== 'h5'
		}),
		require('@dcloudio/vue-cli-plugin-uni/packages/postcss')
	]
}
if (webpack.version[0] > 4) {
	delete config.parser
}
module.exports = config
```


:::


### 3.8.6.20230620-alpha

::: preview

> babel.config.js

```JS
const webpack = require('webpack')
const plugins = []

if (process.env.UNI_OPT_TREESHAKINGNG) {
	plugins.push(require('@dcloudio/vue-cli-plugin-uni-optimize/packages/babel-plugin-uni-api/index.js'))
}

if (
	(
		process.env.UNI_PLATFORM === 'app-plus' &&
		process.env.UNI_USING_V8
	) ||
	(
		process.env.UNI_PLATFORM === 'h5' &&
		process.env.UNI_H5_BROWSER === 'builtin'
	)
) {
	const path = require('path')

	const isWin = /^win/.test(process.platform)

	const normalizePath = path => (isWin ? path.replace(/\\/g, '/') : path)

	const input = normalizePath(process.env.UNI_INPUT_DIR)
	try {
		plugins.push([
			require('@dcloudio/vue-cli-plugin-hbuilderx/packages/babel-plugin-console'),
			{
				file(file) {
					file = normalizePath(file)
					if (file.indexOf(input) === 0) {
						return path.relative(input, file)
					}
					return false
				}
			}
		])
	} catch (e) {}
}

process.UNI_LIBRARIES = process.UNI_LIBRARIES || ['@dcloudio/uni-ui']
process.UNI_LIBRARIES.forEach(libraryName => {
	plugins.push([
		'import',
		{
			'libraryName': libraryName,
			'customName': (name) => {
				return `${libraryName}/lib/${name}/${name}`
			}
		}
	])
})

if (process.env.UNI_PLATFORM !== 'h5') {
	plugins.push('@babel/plugin-transform-runtime')
}

const config = {
	presets: [
		[
			'@vue/app',
			{
				modules: webpack.version[0] > 4 ? 'auto' : 'commonjs',
				useBuiltIns: process.env.UNI_PLATFORM === 'h5' ? 'usage' : 'entry'
			}
		]
	],
	plugins
}

const UNI_H5_TEST = '**/@dcloudio/uni-h5/dist/index.umd.min.js'
if (process.env.NODE_ENV === 'production') {
	config.overrides = [{
		test: UNI_H5_TEST,
		compact: true,
	}]
} else {
	config.ignore = [UNI_H5_TEST]
}

module.exports = config
```

> jest.config.js

```JS
module.exports = {
	globalTeardown: '@dcloudio/uni-automator/dist/teardown.js',
	testEnvironment: '@dcloudio/uni-automator/dist/environment.js',
	testEnvironmentOptions: {},
	testTimeout: 15000,
	reporters: [
		'default'
	],
	watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
	moduleFileExtensions: ['js', 'json'],
	rootDir: __dirname,
	testMatch: ['<rootDir>/src/**/*test.[jt]s?(x)'],
	testPathIgnorePatterns: ['/node_modules/']
}
```

> tsconfig.json

```JS
{
	"compilerOptions": {
		"target": "esnext",
		"module": "esnext",
		"strict": true,
		"jsx": "preserve",
		"importHelpers": true,
		"moduleResolution": "node",
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"experimentalDecorators": true,
		"sourceMap": true,
		"skipLibCheck": true,
		"baseUrl": ".",
		"types": [
			"webpack-env",
			"@dcloudio/types",
			"miniprogram-api-typings",
			"mini-types"
		],
		"paths": {
			"@/*": [
				"./src/*"
			]
		},
		"lib": [
			"esnext",
			"dom",
			"dom.iterable",
			"scripthost"
		]
	},
	"exclude": [
		"node_modules",
		"unpackage",
		"dist",
		"src/**/*.nvue"
	]
}
```

> package.json

```JS
{
	"name": "vue2-alpha-ts",
	"version": "0.1.0",
	"private": true,
	"scripts": {
		"serve": "npm run dev:h5",
		"build": "npm run build:h5",
		"build:app-plus": "cross-env NODE_ENV=production UNI_PLATFORM=app-plus vue-cli-service uni-build",
		"build:custom": "cross-env NODE_ENV=production uniapp-cli custom",
		"build:h5": "cross-env NODE_ENV=production UNI_PLATFORM=h5 vue-cli-service uni-build",
		"build:mp-360": "cross-env NODE_ENV=production UNI_PLATFORM=mp-360 vue-cli-service uni-build",
		"build:mp-alipay": "cross-env NODE_ENV=production UNI_PLATFORM=mp-alipay vue-cli-service uni-build",
		"build:mp-baidu": "cross-env NODE_ENV=production UNI_PLATFORM=mp-baidu vue-cli-service uni-build",
		"build:mp-jd": "cross-env NODE_ENV=production UNI_PLATFORM=mp-jd vue-cli-service uni-build",
		"build:mp-kuaishou": "cross-env NODE_ENV=production UNI_PLATFORM=mp-kuaishou vue-cli-service uni-build",
		"build:mp-lark": "cross-env NODE_ENV=production UNI_PLATFORM=mp-lark vue-cli-service uni-build",
		"build:mp-qq": "cross-env NODE_ENV=production UNI_PLATFORM=mp-qq vue-cli-service uni-build",
		"build:mp-toutiao": "cross-env NODE_ENV=production UNI_PLATFORM=mp-toutiao vue-cli-service uni-build",
		"build:mp-weixin": "cross-env NODE_ENV=production UNI_PLATFORM=mp-weixin vue-cli-service uni-build",
		"build:mp-xhs": "cross-env NODE_ENV=production UNI_PLATFORM=mp-xhs vue-cli-service uni-build",
		"build:quickapp-native": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-native vue-cli-service uni-build",
		"build:quickapp-webview": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview vue-cli-service uni-build",
		"build:quickapp-webview-huawei": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview-huawei vue-cli-service uni-build",
		"build:quickapp-webview-union": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview-union vue-cli-service uni-build",
		"dev:app-plus": "cross-env NODE_ENV=development UNI_PLATFORM=app-plus vue-cli-service uni-build --watch",
		"dev:custom": "cross-env NODE_ENV=development uniapp-cli custom",
		"dev:h5": "cross-env NODE_ENV=development UNI_PLATFORM=h5 vue-cli-service uni-serve",
		"dev:mp-360": "cross-env NODE_ENV=development UNI_PLATFORM=mp-360 vue-cli-service uni-build --watch",
		"dev:mp-alipay": "cross-env NODE_ENV=development UNI_PLATFORM=mp-alipay vue-cli-service uni-build --watch",
		"dev:mp-baidu": "cross-env NODE_ENV=development UNI_PLATFORM=mp-baidu vue-cli-service uni-build --watch",
		"dev:mp-jd": "cross-env NODE_ENV=development UNI_PLATFORM=mp-jd vue-cli-service uni-build --watch",
		"dev:mp-kuaishou": "cross-env NODE_ENV=development UNI_PLATFORM=mp-kuaishou vue-cli-service uni-build --watch",
		"dev:mp-lark": "cross-env NODE_ENV=development UNI_PLATFORM=mp-lark vue-cli-service uni-build --watch",
		"dev:mp-qq": "cross-env NODE_ENV=development UNI_PLATFORM=mp-qq vue-cli-service uni-build --watch",
		"dev:mp-toutiao": "cross-env NODE_ENV=development UNI_PLATFORM=mp-toutiao vue-cli-service uni-build --watch",
		"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch",
		"dev:mp-xhs": "cross-env NODE_ENV=development UNI_PLATFORM=mp-xhs vue-cli-service uni-build --watch",
		"dev:quickapp-native": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-native vue-cli-service uni-build --watch",
		"dev:quickapp-webview": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview vue-cli-service uni-build --watch",
		"dev:quickapp-webview-huawei": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview-huawei vue-cli-service uni-build --watch",
		"dev:quickapp-webview-union": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview-union vue-cli-service uni-build --watch",
		"info": "node node_modules/@dcloudio/vue-cli-plugin-uni/commands/info.js",
		"serve:quickapp-native": "node node_modules/@dcloudio/uni-quickapp-native/bin/serve.js",
		"test:android": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=android jest -i",
		"test:h5": "cross-env UNI_PLATFORM=h5 jest -i",
		"test:ios": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=ios jest -i",
		"test:mp-baidu": "cross-env UNI_PLATFORM=mp-baidu jest -i",
		"test:mp-weixin": "cross-env UNI_PLATFORM=mp-weixin jest -i"
	},
	"dependencies": {
		"@dcloudio/uni-app": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-app-plus": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-h5": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-i18n": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-mp-360": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-mp-alipay": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-mp-baidu": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-mp-jd": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-mp-kuaishou": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-mp-lark": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-mp-qq": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-mp-toutiao": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-mp-vue": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-mp-weixin": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-mp-xhs": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-quickapp-native": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-quickapp-webview": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-stacktracey": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-stat": "^2.0.2-alpha-3080620230620001",
		"@vue/shared": "^3.0.0",
		"core-js": "^3.8.3",
		"flyio": "^0.6.2",
		"vue": ">= 2.6.14 < 2.7",
		"vue-class-component": "^6.3.2",
		"vue-property-decorator": "^8.0.0",
		"vuex": "^3.2.0"
	},
	"devDependencies": {
		"@babel/plugin-syntax-typescript": "^7.2.0",
		"@dcloudio/types": "^3.0.4",
		"@dcloudio/uni-automator": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-cli-i18n": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-cli-shared": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-helper-json": "*",
		"@dcloudio/uni-migration": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/uni-template-compiler": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/vue-cli-plugin-hbuilderx": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/vue-cli-plugin-uni": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/vue-cli-plugin-uni-optimize": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/webpack-uni-mp-loader": "^2.0.2-alpha-3080620230620001",
		"@dcloudio/webpack-uni-pages-loader": "^2.0.2-alpha-3080620230620001",
		"@vue/cli-plugin-babel": "~5.0.0",
		"@vue/cli-plugin-typescript": "~5.0.8",
		"@vue/cli-service": "~5.0.0",
		"babel-plugin-import": "^1.11.0",
		"cross-env": "^7.0.2",
		"jest": "^25.4.0",
		"mini-types": "*",
		"miniprogram-api-typings": "*",
		"postcss-comment": "^2.0.0",
		"typescript": "~4.5.5",
		"vue-template-compiler": ">= 2.6.14 < 2.7"
	},
	"browserslist": [
		"Android >= 4.4",
		"ios >= 9"
	],
	"uni-app": {
		"scripts": {}
	}
}
```


> postcss.config.js

```JS
const path = require('path')
const webpack = require('webpack')
const config = {
	parser: require('postcss-comment'),
	plugins: [
		require('postcss-import')({
			resolve(id, basedir, importOptions) {
				if (id.startsWith('~@/')) {
					return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3))
				} else if (id.startsWith('@/')) {
					return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2))
				} else if (id.startsWith('/') && !id.startsWith('//')) {
					return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1))
				}
				return id
			}
		}),
		require('autoprefixer')({
			remove: process.env.UNI_PLATFORM !== 'h5'
		}),
		require('@dcloudio/vue-cli-plugin-uni/packages/postcss')
	]
}
if (webpack.version[0] > 4) {
	delete config.parser
}
module.exports = config
```


:::