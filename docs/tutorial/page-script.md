### js 文件引入

> `js`文件或`script`标签内（包括 renderjs 等）引入`js`文件时，可以使用相对路径和绝对路径，形式如下

```js
// 绝对路径，@指向项目根目录，在cli项目中@指向src目录
import add from '@/common/add.js';
// 相对路径
import add from '../../common/add.js';
```

**注意**

- js 文件不支持使用`/`开头的方式引入

## NPM支持

uni-app支持使用**npm**安装第三方包。

此文档要求开发者们对**npm**有一定的了解，因此不会再去介绍**npm**的基本功能。如若之前未接触过**npm**，请翻阅[NPM官方文档](https://docs.npmjs.com/getting-started/what-is-npm)进行学习。

**初始化npm工程**

若项目之前未使用npm管理依赖（项目根目录下无package.json文件），先在项目根目录执行命令初始化npm工程：
```shell
npm init -y
```

cli项目默认已经有package.json了。HBuilderX创建的项目默认没有，需要通过初始化命令来创建。

**安装依赖**

在项目根目录执行命令安装npm包：
```shell
npm install packageName --save
```

**使用**

安装完即可使用npm包，js中引入npm包：
```js
import package from 'packageName'
const package = require('packageName')
```

**注意**

* 为多端兼容考虑，建议优先从 [uni-app插件市场](https://ext.dcloud.net.cn/) 获取插件。直接从 npm 下载库很容易只兼容H5端。
* 非 H5 端不支持使用含有 dom、window 等操作的 vue 组件和 js 模块，安装的模块及其依赖的模块使用的 API 必须是 uni-app 已有的 [API](/api/)（兼容小程序 API），比如：支持[高德地图微信小程序 SDK](https://www.npmjs.com/package/amap-wx)。类似[jQuery](https://www.npmjs.com/package/jquery) 等库只能用于H5端。
* node_modules 目录必须在项目根目录下。不管是cli项目还是HBuilderX创建的项目。
* 支持安装 mpvue 组件，但npm方式不支持小程序自定义组件（如 wxml格式的vant-weapp），使用小程序自定义组件请参考：[小程序组件支持](/tutorial/miniprogram-subject#小程序自定义组件支持)。
* 关于ui库的获取，详见[多端UI库](https://ask.dcloud.net.cn/article/35489)