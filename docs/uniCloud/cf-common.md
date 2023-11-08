#### 云函数公用模块
#### Cloud function public module

云函数支持公共模块。多个云函数的共享部分，可以抽离为公共模块，然后被多个云函数引用。
Cloud functions support public modules. The shared parts of multiple cloud functions can be extracted into common modules and then referenced by multiple cloud functions.

> 版本要求：HBuilderX 2.6.6+
> Version requirements: HBuilderX 2.6.6+

以下面的目录结构为例，介绍一下如何使用。
Take the following directory structure as an example to introduce how to use it.

```
cloudfunctions
  ├─common // 云函数公用模块目录
  |  └─hello-common // 云函数公用模块
  |     ├─package.json
  |     └─index.js // 公用模块代码，可以不使用index.js，修改 package.json 内的 main 字段可以指定此文件名
  └─use-common // 使用公用模块的云函数
     ├─package.json // 在 use-common 目录执行 npm init -y 生成
     └─index.js // 云函数入口文件
```

**创建并引入公用模块**
**Create and import common modules**

1. 在`cloudfunctions`目录下创建`common`目录
1. Create a `common` directory under the `cloudfunctions` directory
2. 在`common`目录右键创建公用模块目录（本例中为`hello-common`，见下方示例图），会自动创建入口`index.js`文件和`package.json`，**不要修改此package.json的name字段**
2. Right-click on the `common` directory to create a common module directory (in this case, `hello-common`, see the example below), the entry `index.js` file and `package.json` will be created automatically, **Do not modify The name field of this package.json**
3. 在`hello-common`右键上传公用模块
4. 在云函数上右键选择`管理公共模块依赖`，添加依赖的公共模块

![管理公共模块依赖](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/manage-common.png)

公共模块依赖其他公共模块同理
Public modules depend on other public modules in the same way

![创建公用模块](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/create-common-module.jpg)
![Create a common module](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/create-common-module.jpg)

**注意事项**
**Precautions**

- 如果要更新所有依赖某公用模块的云函数，可以在`common`目录下的公用模块目录（本例中为`hello-common`）右键选择`更新依赖本模块的云函数`
- If you want to update all cloud functions that depend on a common module, you can right-click on the public module directory (in this case, `hello-common`) under the `common` directory and select `Update cloud functions that depend on this module`
- 公用模块命名不可与nodejs内置模块重名
- 从插件市场导入或者其他地方复制项目可能会导致`npm install`创建的软链接失效，如果遇到这种情况请删除`node_modules`和`package-lock.json`重新`npm install`
- Importing from the plugin market or copying projects from other places may cause the soft links created by `npm install` to become invalid. If this happens, delete `node_modules` and `package-lock.json` and re `npm install`

![更新公用模块](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/update-common-module.jpg)
![Update common module](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/update-common-module.jpg)

**使用公用模块**
**Using common modules**

仍以上面的目录为例，在公用模块内`exports`，在云函数内`require`即可。示例代码如下：
Still taking the above directory as an example, `exports` in the public module and `require` in the cloud function can be used. The sample code is as follows:

```js
// common/hello-common/index.js
function getVersion() {
  return '0.0.1'
}
module.exports = {
  getVersion,
  secret: 'your secret'
}
```

```js
// use-common/index.js
'use strict';
const {
  secret,
  getVersion
} = require('hello-common')
exports.main = async (event, context) => {
  let version = getVersion()
  return {
    secret,
    version
  }
}
```

如果仅需要导出一个function还可以使用以下写法
If you only need to export a function, you can also use the following writing

```js
// common/hello-common/index.js
module.exports = function(e){
  return e
}
```

```js
// use-common/index.js
'use strict';
const echo = require('hello-common')
exports.main = async (event, context) => {
  let eventEcho = echo(event)
  return {
    eventEcho
  }
}
```
