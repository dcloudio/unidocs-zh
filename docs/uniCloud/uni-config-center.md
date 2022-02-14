# 为什么使用uni-config-center

实际开发中很多插件/云函数/公共模块需要配置文件才可以正常运行，如果每个都单独进行配置的话就会产生下面这样的目录结构

```text
cloudfunctions
  ├─common
  │  └─user-utils // user-utils公共模块
  │      ├─custom-token.js // user-utils依赖的其他文件
  │      └─config.json // user-utils使用的配置文件
  ├─payment-config-test // payment-config-test云函数
  │  └─config.json // payment-config-test使用的配置文件
  └─user-config-test // 引用user-utils的云函数
```

可以看到配置文件分散在各个地方，毫无章法，维护起来也是一个大麻烦。

uni-config-center就是用了统一管理这些配置文件的，使用uni-config-center后的目录结构如下

```text
cloudfunctions
  ├─common
  │  ├─uni-config-center
  │  │  ├─payment // 插件配置目录
  │  │  │   └─config.json // 插件配置文件
  │  │  └─user-utils // 插件配置目录
  │  │      ├─custom-token.js // 插件依赖的其他文件
  │  │      └─config.json // 插件配置文件
  │  └─user-utils // user-utils公共模块，此公共模块内使用user-utils插件的配置
  ├─payment-config-test // payment-config-test云函数，此云函数内使用payment插件的配置
  └─user-config-test // 引用user-utils的云函数
```

使用uni-config-center后的优势

- 配置文件统一管理，分离插件主体和配置信息，更新插件更方便
- 支持对config.json设置schema，插件使用者在HBuilderX内编写config.json文件时会有更好的提示（后续HBuilderX会提供支持）

# 用法

在要使用uni-config-center的公共模块或云函数内引入uni-config-center依赖，请参考：[使用公共模块](https://uniapp.dcloud.net.cn/uniCloud/cf-common)

以下以在云函数`user-config-test`内使用`uni-config-center`为例，分步骤讲解如何使用

1. 从插件市场导入本插件到项目内
2. 在云函数`user-config-test`上右键选择`管理公共模块依赖`
3. 弹窗中勾选`uni-config-center`公共模块后点击`更新依赖`
4. 在`cloudfunctions/common/uni-config-center`目录创建存放配置的目录，在本示例中我们使用`user-utils`作为配置目录名
5. 在上一步创建的`user-utils`目录下创建配置文件`config.json`
6. 如何在代码中获取配置请参考下面的章节

至此多云函数/公共模块共享的配置就创建完成了，目录结构如下

```text
cloudfunctions
  ├─common
  │  └─uni-config-center
  │     └─user-utils // 配置目录
  │         └─config.json // 配置文件
  └─user-config-test // 引用user-utils的云函数
```

## 简单示例

以上述目录结构为例，在云函数`user-config-test`内获取user-utils配置目录下的配置内容，示例代码如下

```js
// user-config-test/index.js
const createConfig = require('uni-config-center')
const userUtilsConfig = createConfig({ // 获取配置实例
    pluginId: 'user-utils' // common/uni-config-center下的配置目录名
})
const userUtilsConfig = userUtilsConfig.config() // 获取common/uni-config-center/user-utils/config.json的内容
exports.main = async function(event, context) {
	
}
```

详细接口说明请阅读下方文档。

## 获取配置实例

通过`createConfig`接口即可获取配置实例，此实例上有一些方法如：获取配置内容、拼接目录路径等

**接口形式**

```js
const createConfig = require('uni-config-center')
createConfig({
	pluginId,
	defaultConfig,
	customMerge
})
```

**参数说明**

|参数名			|类型		|必填	|说明																					|
|--				|--			|--		|--																						|
|pluginId		|string		|是		|common/uni-config-center下的配置目录名													|
|defaultConfig	|Object		|否		|默认配置																				|
|customMerge	|Function	|否		|自定义默认配置和用户配置的合并规则，不设置的情况下会对默认配置和用户配置进行深度合并	|

**代码示例**

```js
const createConfig = require('uni-config-center')

const userUtilsConfig = createConfig({
    pluginId: 'user-utils', // 同common/uni-config-center下的配置目录名
    defaultConfig: { // 默认配置
        tokenExpiresIn: 7200,
        tokenExpiresThreshold: 600,
    },
    customMerge: function(defaultConfig, userConfig) { // 自定义默认配置和用户配置的合并规则，不设置的情况下会对默认配置和用户配置进行深度合并
        // defaudltConfig 默认配置
        // userConfig 用户配置
        return Object.assign(defaultConfig, userConfig)
    }
})

```

## 获取配置内容

获取配置内容接口有以下几种形式，如果在createConfig时传入了`defaultConfig`，会和配置目录下的config.json合并作为完整的配置文件。

```js
// 获取配置
userUtilsConfig.config() // 获取全部配置，没有获取到配置时返回空对象
userUtilsConfig.config('tokenExpiresIn') // 传入参数名获取指定配置
userUtilsConfig.config('service.sms.codeExpiresIn') // 传入参数路径获取指定配置
userUtilsConfig.config('tokenExpiresThreshold', 600) // 获取指定配置，如果不存在则取传入的默认值
```

## 获取配置目录下的文件的绝对路径

```js
userUtilsConfig.resolve('custom-token.js') // 获取uni-config-center/user-utils/custom-token.js文件的路径
```

## 引用配置目录下的js、json文件

```js
userUtilsConfig.requireFile('custom-token.js') // 使用require方式引用uni-config-center/user-utils/custom-token.js文件。文件不存在时返回undefined，文件内有其他错误导致require失败时会抛出错误。
```

## 判断配置目录下是否存在指定文件

```js
userUtilsConfig.hasFile('custom-token.js') // 配置目录是否包含某文件，true: 文件存在，false: 文件不存在
```