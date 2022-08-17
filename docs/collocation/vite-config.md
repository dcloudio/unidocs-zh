vite.config.js 是一个可选的配置文件，如果项目的根目录中存在这个文件，那么它会被自动加载，一般用于配置 vite 的编译选项，具体规范参考：[vite.config.js](https://cn.vitejs.dev/)
vite.config.js is an optional configuration file. If this file exists in the root directory of the project, it will be loaded automatically. It is generally used to configure the compilation options of vite. For specific specifications, please refer to: [vite.config.js] (https://cn.vitejs.dev/)

**支持情况**
**Support Status**

- CLI 工程 [创建教程](/quickstart-cli)
- CLI project [create tutorial](/quickstart-cli)
- HBuilderX 3.2.0 及以上版本
- HBuilderX 3.2.0 and above

**注意事项**
**Precautions**

- 仅`vue 3`项目生效
- Only works for `vue 3` projects

部分配置项会被编译配置覆盖，例如：
Some configuration items will be overridden by the build configuration, for example:

- base：支持
- base: support
- root：不支持
- root: not supported
- mode：不支持
- mode: not supported
- publicDir: 不支持，固定为 static
- publicDir: not supported, fixed as static
- build.outDir：不支持
- build.outDir: not supported
- build.assetsInlineLimit：仅 h5 支持
- build.assetsInlineLimit: only h5 support
- build.cssCodeSplit：不支持，固定为 true
- build.cssCodeSplit: not supported, fixed to true
- build.lib：不支持
- build.lib: not supported
- build.manifest：不支持
- build.manifest: not supported
- build.ssrManifest：不支持
- build.ssrManifest: not supported
- build.ssr：不支持
- build.ssr: not supported

**基础内容**
**Basic content**

> 必须引用 '@dcloudio/vite-plugin-uni' 并且添加到 plugins 中
> must reference '@dcloudio/vite-plugin-uni' and add it to plugins

```js
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
	plugins: [uni()],
});
```

**使用示例**
**Use example**

**自定义静态资源目录**
**Custom static resource directory**

```js
import path from 'path';
import fs from 'fs-extra';
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

function copyFile() {
	return {
		enforce: 'post',
		async writeBundle() {
			await fs.copy(
				path.resolve(__dirname, 'images'),
				path.join(
					__dirname,
					'unpackage/dist',
					process.env.NODE_ENV === 'production' ? 'build' : 'dev',
					process.env.UNI_PLATFORM,
					'images'
				)
			);
		},
	};
}

export default defineConfig({
	plugins: [uni(), copyFile()],
});
```

**注入全局依赖**
**Inject global dependencies**

```js
// 示例从插件市场下载 mp-storage
// Example download mp-storage from plugin market
import path from 'path';
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import inject from '@rollup/plugin-inject';

const mpStoragePath = path.resolve(__dirname, './js_sdk/mp-storage/mp-storage');

export default defineConfig({
	plugins: [
		uni(),
		inject({
			localStorage: [mpStoragePath, 'localStorage'],
			'window.localStorage': [mpStoragePath, 'localStorage'],
		}),
	],
	define: {
		'process.env.VUE_APP_TEST': JSON.stringify('test'),
	},
});
```

**配置环境变量**
**Configure environment variables**

```js
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
	plugins: [uni()],
	define: {
		'process.env.VUE_APP_TEST': JSON.stringify('test'),
	},
});
```

**发布时删除 console**
**Remove console when publishing**

```js
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
	plugins: [uni()],
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
			},
		},
	},
});
```

**发布时动态修改 manifest.json**
**Dynamic modification of manifest.json when publishing**

```js
// 读取 manifest.json ，修改后重新写入
// Read manifest.json , rewrite after modification
const fs = require('fs');

const manifestPath = './src/manifest.json';
let Manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' });
function replaceManifest(path, value) {
	const arr = path.split('.');
	const len = arr.length;
	const lastItem = arr[len - 1];

	let i = 0;
	let ManifestArr = Manifest.split(/\n/);

	for (let index = 0; index < ManifestArr.length; index++) {
		const item = ManifestArr[index];
		if (new RegExp(`"${arr[i]}"`).test(item)) ++i;
		if (i === len) {
			const hasComma = /,/.test(item);
			ManifestArr[index] = item.replace(
				new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`),
				`"${lastItem}": ${value}${hasComma ? ',' : ''}`
			);
			break;
		}
	}

	Manifest = ManifestArr.join('\n');
}
// 使用
// use
replaceManifest('app-plus.usingComponents', false);
replaceManifest('app-plus.splashscreen.alwaysShowBeforeRender', false);
replaceManifest('mp-baidu.usingComponents', false);
fs.writeFileSync(manifestPath, Manifest, {
	flag: 'w',
});

export default defineConfig({
	// ...
});
```

启用压缩的方法：
Ways to enable compression:

- HBuilderX 创建的项目勾选运行-->运行到小程序模拟器-->运行时是否压缩代码
- Check Run for the project created by HBuilderX-->Run to Mini Program Simulator-->Whether to compress the code at runtime
- cli 创建的项目可以在`package.json`中添加参数`--minify`
- Projects created by cli can add parameter `--minify` in `package.json`
