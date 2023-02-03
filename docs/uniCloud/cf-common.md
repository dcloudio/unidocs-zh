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
3. Right-click on `hello-common` to upload the common module
4. 在要引入公用模块的云函数目录（本例中为`use-common`）执行`npm init -y`生成`package.json`文件
4. Execute `npm init -y` to generate the `package.json` file in the cloud function directory (in this case, `use-common`) where the common module is to be introduced
5. 在`use-common`目录执行`npm install ../common/hello-common`引入`hello-common`模块
5. Execute `npm install ../common/hello-common` in the `use-common` directory to import the `hello-common` module

**在`HBuilderX 3.0.0`以上版本上述步骤4、5可以在云函数上右键选择`管理公共模块依赖`来实现，如下图**
**In `HBuilderX 3.0.0` and above, the above steps 4 and 5 can be implemented by right-clicking on the cloud function and selecting `Manage public module dependencies`, as shown below**

![管理公共模块依赖](https://web-assets.dcloud.net.cn/unidoc/zh/manage-common.png)
![Manage common module dependencies](https://web-assets.dcloud.net.cn/unidoc/zh/manage-common.png)

公共模块依赖其他公共模块同理
Public modules depend on other public modules in the same way

![创建公用模块](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/create-common-module.jpg)
![Create a common module](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/create-common-module.jpg)

**注意事项**
**Precautions**

- 使用npm之前要安装nodejs，[nodejs下载](http://nodejs.cn/download/)
- Install nodejs before using npm, [nodejs download](http://nodejs.cn/download/)
- 如需修改公用模块需要在`common`目录下修改，修改之后不需要重新执行`npm install`。
- If you need to modify the common module, you need to modify it in the `common` directory, and you do not need to re-execute `npm install` after modification.
- 如果要更新所有依赖某公用模块的云函数，可以在`common`目录下的公用模块目录（本例中为`hello-common`）右键选择`更新依赖本模块的云函数`
- If you want to update all cloud functions that depend on a common module, you can right-click on the public module directory (in this case, `hello-common`) under the `common` directory and select `Update cloud functions that depend on this module`
- 公用模块命名不可与nodejs内置模块重名
- The name of the public module cannot be the same as that of the built-in module of nodejs
- 安装公用模块时不推荐使用yarn，与`npm install`表现不一样，yarn不会创建软链接而是直接拷贝文件到node_modules，这样会导致修改公用模块云函数内引用的公用模块不会同步修改
- It is not recommended to use yarn when installing public modules. Unlike `npm install`, yarn will not create soft links but directly copy files to node_modules, which will cause the public modules referenced in the cloud function of public modules to not be modified synchronously.
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
