# uni-config-center 云配置中心

`uni-config-center`插件的下载地址：[https://ext.dcloud.net.cn/plugin?id=4425](https://ext.dcloud.net.cn/plugin?id=4425)
The download address of the `uni-config-center` plugin: [https://ext.dcloud.net.cn/plugin?id=4425](https://ext.dcloud.net.cn/plugin?id=4425)

## 需求背景

实际开发中很多插件/云函数/公共模块需要配置文件才可以正常运行，比如各种appkey、secret。存放在数据库里的话，拖累云函数性能，并且增加数据库请求。如果每个都单独进行配置的话就会产生下面这样的目录结构。
In actual development, many plug-ins/cloud functions/public modules require configuration files to run normally, such as various appkeys and secrets. If it is stored in the database, it will drag down the performance of cloud functions and increase database requests. If each is configured separately, it will produce the following directory structure.

```text
cloudfunctions
  ├─cf1 // cf1云函数
  │  │─index.js
  │  └─config.json // cf1使用的配置文件
  └─cf2 // cf2云函数
     │─index.js
     └─config.json // cf2使用的配置文件
```

可以看到这样有很多问题：
It can be seen that there are many problems with this:

1. 配置文件分散在各个地方，无法统一维护
1. The configuration files are scattered in various places and cannot be maintained uniformly
2. 配置和代码没有分离。更新云函数会覆盖配置。如果使用插件，插件作者更新云函数后，那么用户侧的配置会被覆盖
2. Configuration and code are not separated. Updating a cloud function overwrites the configuration. If a plug-in is used, the configuration on the user side will be overwritten after the plug-in author updates the cloud function.
3. 多个云函数之间无法共享配置
3. Configuration cannot be shared between multiple cloud functions

`uni-config-center`解决了上述问题。通过独立了公共模块，统一管理配置文件，做到配置和代码分离，更新代码不会覆盖配置，并且可以在多个云函数之间共享配置。
`uni-config-center` solves the above problem. Through independent public modules and unified management of configuration files, configuration and code are separated, updated code will not overwrite configuration, and configuration can be shared among multiple cloud functions.

使用`uni-config-center`后的目录结构如下
The directory structure after using `uni-config-center` is as follows

```text
cloudfunctions
  ├─common
  │  ├─uni-config-center
  │  │  ├─cf1 // 插件配置目录
  │  │  │   └─config.json // 插件配置文件
  │  │  └─cf2 // 插件配置目录
  │  │      └─config.json // 插件配置文件
  ├─cf1 // cf1云函数
  └─cf2 // cf2云函数
```


## 用法

:::warning 注意
如果你只是使用别人提供的插件要在uni-config-center内放配置文件，则无需关注下面的内容。只要按照插件作者约定的插件配置目录存放你的配置文件即可
:::

## 导入和创建配置
## Import and create configuration

例如，在云函数`cf2`内使用`uni-config-center`，步骤如下：
For example, to use `uni-config-center` inside the cloud function `cf2`, the steps are as follows:

1. 导入`uni-config-center`公共模块到项目内，存放路径是 uniCloud/cloudfunctions/common/uni-config-center。一般uniCloud项目创建时会自动导入这个基础插件，如项目没有该插件，请在插件市场下载[https://ext.dcloud.net.cn/plugin?id=4425](https://ext.dcloud.net.cn/plugin?id=4425)
2. 给云函数添加公共模块依赖，在云函数`cf2`上右键选择`管理公共模块依赖`，弹窗中勾选`uni-config-center`公共模块
3. 新建插件配置目录，在`cloudfunctions/common/uni-config-center`目录新建插件配置目录，在本示例中我们使用`share-config`作为插件配置目录名（uni-config-center下不同的配置，被称为**插件配置**。这个插件的概念容易和插件市场的插件混淆，请注意区分）
4. 新建插件配置文件，在上一步创建的`share-config`目录下创建配置文件`config.json`（这个文件的名称不能自定义），在`config.json`里编写基于json的配置内容。

至此多云函数/公共模块共享的配置就创建完成了，目录结构如下
So far, the shared configuration of multi-cloud functions/public modules has been created, and the directory structure is as follows

```text
cloudfunctions
  ├─common
  │  └─uni-config-center
  │     └─share-config // 插件配置目录
  │         └─config.json // 配置文件
  └─cf2 // 引用share-config的云函数
```

**注意**
**Notice**

- 推荐插件配置名称（也就是上述示例中的`share-config`）尽量无歧义。如果只为一个云函数提供配置，那么这个配置的名称建议和云函数的名称一致。尤其是插件作者，更要注意插件配置名称包含插件前缀，防止和用户代码冲突。
- It is recommended that the plugin configuration name (ie `share-config` in the above example) be as unambiguous as possible. If you only provide a configuration for one cloud function, it is recommended that the name of this configuration be the same as the name of the cloud function. Plug-in authors, in particular, should pay attention to the fact that the name of the plug-in configuration contains the plug-in prefix to prevent conflicts with user code.
- 如需在不同项目使用同一服务空间，请务必注意两个项目的`uni-config-center`在上传时会互相覆盖。建议将云端代码放在同一个项目内，其他项目关联存放云端代码的项目的服务空间。
- If you need to use the same service space in different projects, please note that the `uni-config-center` of the two projects will overwrite each other when uploading. It is recommended to put the cloud code in the same project, and other projects are associated with the service space of the project where the cloud code is stored.

## 云函数中读取配置
## Read configuration in cloud function

以上述目录结构为例，在云函数`cf2`内获取`share-config`配置目录下的配置内容，示例代码如下
Taking the above directory structure as an example, obtain the configuration content in the `share-config` configuration directory in the cloud function `cf2`. The sample code is as follows

```js
// cf2/index.js
const createConfig = require('uni-config-center')
const shareConfig = createConfig({ // 获取配置实例
    pluginId: 'share-config' // common/uni-config-center下的插件配置目录名
})
const Config = shareConfig.config() // 获取common/uni-config-center/share-config/config.json的内容
exports.main = async function(event, context) {
	console.log(Config) //打印配置
}
```

**注意**
**Notice**

- `uni-config-center`下的配置不隔离。一个云函数或公共模块，引入了`uni-config-center`后，下面的所有插件配置都可以访问到
- Configurations under `uni-config-center` are not isolated. A cloud function or public module, after the introduction of `uni-config-center`, all the plugin configurations below can be accessed
- `uni-config-center`的配置是只读的。除非重新上传更新uniCloud服务空间，否则不会变化。如需在代码运行期间修改配置，那么需要改用[redis](https://uniapp.dcloud.net.cn/uniCloud/redis-introduction.html)
- The configuration of `uni-config-center` is read-only. It won't change unless you re-upload to update the uniCloud service space. If you need to modify the configuration while the code is running, you need to use [redis](https://uniapp.dcloud.net.cn/uniCloud/redis-introduction.html) instead

详细接口说明请阅读下方文档。
For detailed interface description, please read the document below.

## 获取配置实例
## Get configuration instance

通过`createConfig`接口即可获取配置实例，此实例上有一些方法如：获取配置内容、拼接目录路径等
The configuration instance can be obtained through the `createConfig` interface. There are some methods on this instance, such as: obtaining configuration content, splicing directory paths, etc.

**接口形式**
**Interface form**

```js
const createConfig = require('uni-config-center')
createConfig({
	pluginId,
	defaultConfig,
	customMerge
})
```

**参数说明**
**Parameter Description**

|参数名			|类型		|必填	|说明																					|
|Parameter Name |Type |Required |Description |
|--				|--			|--		|--																						|
|pluginId		|string		|是		|common/uni-config-center下的配置目录名													|
|pluginId |string |Yes |the name of the configuration directory under common/uni-config-center |
|defaultConfig	|Object		|否		|默认配置																				|
|defaultConfig |Object |No |DefaultConfig |
|customMerge	|Function	|否		|自定义默认配置和用户配置的合并规则，不设置的情况下会对默认配置和用户配置进行深度合并	|
|customMerge |Function |No |Customize the merge rule of default configuration and user configuration, if not set, the default configuration and user configuration will be deeply merged |

**代码示例**
**CODE EXAMPLE**

```js
const createConfig = require('uni-config-center')

const shareConfig = createConfig({
    pluginId: 'share-config', // 同common/uni-config-center下的配置目录名
    defaultConfig: { // 默认配置
        tokenExpiresIn: 7200,
        tokenExpiresThreshold: 600,
    },
    customMerge: function(defaultConfig, userConfig) { // 自定义默认配置和用户配置的合并规则，不设置的情况下会对默认配置和用户配置进行深度合并
        // defaudltConfig 默认配置
        // defaudltConfig default configuration
        // userConfig config-center内的配置文件内容
        // Configuration file content in userConfig config-center
        return Object.assign(defaultConfig, userConfig)
    }
})

```

## 获取配置内容
## Get configuration content

获取配置内容接口有以下几种形式，如果在createConfig时传入了`defaultConfig`，会和配置目录下的config.json合并作为完整的配置文件。
The interface for obtaining configuration content has the following forms. If `defaultConfig` is passed in when createConfig is created, it will be merged with config.json in the configuration directory as a complete configuration file.

```js
// 获取配置
// get configuration
shareConfig.config() // 获取全部配置，没有获取到配置时返回空对象
shareConfig.config('tokenExpiresIn') // 传入参数名获取指定配置
shareConfig.config('service.sms.codeExpiresIn') // 传入参数路径获取指定配置
shareConfig.config('tokenExpiresThreshold', 600) // 获取指定配置，如果不存在则取传入的默认值
```

## 获取配置目录下的文件的绝对路径
## Get the absolute path of the file in the configuration directory

```js
shareConfig.resolve('custom-token.js') // 获取uni-config-center/share-config/custom-token.js文件的路径
```

## 引用配置目录下的js、json文件
## Refer to the js and json files in the configuration directory

```js
shareConfig.requireFile('custom-token.js') // 使用require方式引用uni-config-center/share-config/custom-token.js文件。文件不存在时返回undefined，文件内有其他错误导致require失败时会抛出错误。
```

## 判断配置目录下是否存在指定文件
## Determine whether the specified file exists in the configuration directory

```js
shareConfig.hasFile('custom-token.js') // 配置目录是否包含某文件，true: 文件存在，false: 文件不存在
```
