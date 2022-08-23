### js 文件引入
### js file import

> `js`文件或`script`标签内（包括 renderjs 等）引入`js`文件时，可以使用相对路径和绝对路径，形式如下
> When importing a `js` file in a `js` file or a `script` tag (including renderjs, etc.), you can use a relative path and an absolute path in the following form

```js
// 绝对路径，@指向项目根目录，在cli项目中@指向src目录
//Absolute path, @ points to the root directory of the project, and in cli projects @ points to the src directory
import add from '@/common/add.js';
// 相对路径
// Relative path
import add from '../../common/add.js';
```

**注意**
**Notice**

- js 文件不支持使用`/`开头的方式引入
- js files do not support importing with `/` at the beginning

## NPM支持
## Supported on NPM

uni-app支持使用**npm**安装第三方包。
Uni-app supports the use of **npm** to install third-party packages.

此文档要求开发者们对**npm**有一定的了解，因此不会再去介绍**npm**的基本功能。如若之前未接触过**npm**，请翻阅[NPM官方文档](https://docs.npmjs.com/getting-started/what-is-npm)进行学习。
This document requires developers to have a certain understanding of **npm**, so the basic functions of **npm** will not be introduced. If you do not have access to **npm** before, please refer to the [NPM official document](https://docs.npmjs.com/getting-started/what-is-npm).

**初始化npm工程**
**Initialize npm project**

若项目之前未使用npm管理依赖（项目根目录下无package.json文件），先在项目根目录执行命令初始化npm工程：
If the npm management dependency has not been used before in the project (no package.json file in the project root directory), please initialize the npm project by executing the command in the project root directory first:
```shell
npm init -y
```

cli项目默认已经有package.json了。HBuilderX创建的项目默认没有，需要通过初始化命令来创建。
cli project already has package.json by default. The project created by HBuilderX is not available by default and needs to be created by initialization command.

**安装依赖**
**Installation dependencies**

在项目根目录执行命令安装npm包：
Execute the command to install npm package in the root directory of the project:
```shell
npm install packageName --save
```

**使用**
**Usage**

安装完即可使用npm包，js中引入npm包：
You can use npm package after installation, and introduce npm package into js:
```js
import package from 'packageName'
const package = require('packageName')
```

**注意**
**Notice**

* 为多端兼容考虑，建议优先从 [uni-app插件市场](https://ext.dcloud.net.cn/) 获取插件。直接从 npm 下载库很容易只兼容H5端。
* In consideration of multi-terminal compatibility, it is recommended to give priority to obtain plug-ins from the [uni-app plug-in market](https://ext.dcloud.net.cn/). Downloading the library directly from npm is easy to be compatible with the H5 side only.
* 非 H5 端不支持使用含有 dom、window 等操作的 vue 组件和 js 模块，安装的模块及其依赖的模块使用的 API 必须是 uni-app 已有的 [API](/api/)（兼容小程序 API），比如：支持[高德地图微信小程序 SDK](https://www.npmjs.com/package/amap-wx)。类似[jQuery](https://www.npmjs.com/package/jquery) 等库只能用于H5端。
* The non-H5 side does not support the use of vue components and js modules with operations such as dom, window, etc. The API used by the installed module and its dependent modules must be the existing [API](/api/) of uni-app (compatible with small Program API), for example: support [Amap WeChat Mini Program SDK](https://www.npmjs.com/package/amap-wx). Libraries like [jQuery](https://www.npmjs.com/package/jquery) can only be used on the H5 side.
* node_modules 目录必须在项目根目录下。不管是cli项目还是HBuilderX创建的项目。
* The node_modules directory must be under the root directory of the project. Whether it is a cli project or a project created by HBuilderX.
* 关于ui库的获取，详见[多端UI库](https://ask.dcloud.net.cn/article/35489)
* For the acquisition of ui library, please refer to [Multi-terminal UI Library](https://ask.dcloud.net.cn/article/35489)