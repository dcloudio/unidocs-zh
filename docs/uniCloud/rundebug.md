## 云函数/云对象运行方式介绍

云函数或云对象，在开发期间，可以在HBuilderX提供的本地环境运行，也可以连接现网uniCloud云端运行。

注意：本地运行环境只包括云函数和 `DB Schema`，数据内容必须在云端。因为本地运行环境没有MongoDB。

云函数/云对象可以自己直接在本地或云端的云函数环境里运行，也可以由uni-app客户端连接云函数，触发本地或云端的运行环境进行联调运行。

云对象属于云函数的一种，所以很多界面菜单或文档没有单独强调时，“云函数”将包含“云对象”。

所以总结一下，云函数有4种运行模式：
1. 本地运行
2. 上传云端并运行（云对象不支持此模式）
3. 客户端连本地云函数运行
4. 客户端连云端云函数运行

云函数/云对象可通过菜单或快捷键运行。

1. 右键菜单：在项目管理器里右键点击该云函数的目录，在弹出菜单中可选择“本地运行云函数”、“上传并运行云函数”

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/localRun.jpg"/>
</div>

2. 工具栏：编辑器打开云函数时，点击工具栏`运行`按钮，下拉菜单也有“本地运行云函数”、“上传并运行云函数”
3. 快捷键：编辑器打开云函数时，按【Ctrl+r】快捷键，会激活上述运行菜单。

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/localCtrlRrun.jpg"/>
</div>

如果没有安装本地运行插件，按照提示安装即可。本地运行云函数需HBuilderX 2.8.1+

运行后将打开云函数控制台，在控制台看到运行结果和日志输出。

## 本地运行云函数@runlocal

> HBuilderX 2.8.1版本起支持

在HBuilderX的uniCloud本地运行插件的node环境中直接运行云函数或云对象。

**使用方式**

- 如果没有安装本地运行插件，按照提示安装即可
- 如需配置运行参数请参考：[配置运行测试参数](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#runparam)

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/localRun.jpg"/>
</div>


在云函数编辑器里，按`Ctrl+r`运行快捷键（或点工具栏的运行），可看到运行云函数的若干菜单。`Ctrl+r`然后回车或选`0`执行本地运行，即可立即在控制台看到运行结果和日志输出。如下图所示：

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/localCtrlRrun.jpg"/>
</div>

云函数打印`console.log`看日志。

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/lookLog.jpg"/>
</div>

运行云函数时，如需要给云函数传参，又不想启动客户端，那么可以通过配置json文件来传测试参数。

在云函数对应的目录右键可以配置运行测试参数，如下图，选择之后会生成一个形如`${函数名}.param.json`的文件，此文件内容会在云函数`上传并运行`以及`本地运行云函数`时作为参数传入云函数内。详细用法可参考：[配置运行测试参数](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#runparam)

## 上传并运行云函数@uploadandrun

在项目管理器里右键点击云函数的目录，在弹出菜单中可选择“上传并运行云函数”。此外也可以打开此目录下的文件然后使用快捷键`Ctrl+r`，在弹出菜单中选择“上传并运行云函数”。

对于云函数，上传并运行时会自动带上配置的运行测试参数。请参考：[配置运行测试参数](?id=runparam)

注：云对象不支持上传并运行。

## 客户端联调云函数@calllocalfunction

> `HBuilderX 3.0.0`起支持

运行含有uniCloud的uni-app项目，除了启动客户端控制台外，还会启动uniCloud控制台。

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/unicloud-debug-dist.jpg"/>
</div>

可以在客户端控制台的右上角切换是连接本地云函数还是云端云函数，如下图所示

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/client-to-local.jpg"/>
</div>

uniCloud控制台日志如下图：

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/client-to-local-log.jpg"/>
</div>

此时客户端的日志和云函数的日志都可以看到，联调非常方便。

注：小程序开发需要注意，开发期间应关闭域名校验来建立和本地调试服务的连接，切勿使用HBuilderX的运行菜单发布体验版以及线上版。体验版和最终上线的版本应该以发行模式进行编译。

**配置保存**

切换连接云端云函数还是本地云函数之后会在项目下的`.hbuilderx`目录创建一个`launch.json`文件。

一个典型的`launch.json`是如下形式的（无需手动创建此文件）

```js
{
    "version": "0.0.1",
    "configurations": [
      {
        "app-plus": {
          "launchtype" : "local" // app平台连接本地云函数
        },
        "default": {
          "launchtype" : "remote" // 未配置的平台连接云端云函数
        },
        "h5": {
          "launchtype" : "remote" // h5平台连接云端云函数
        },
        "provider": "aliyun", // 如果项目仅关联一个服务空间无需此参数
        "type": "uniCloud", // 标识此项配置为uniCloud配置，必填
        "systemLog": false // 设置为false之后关闭云函数控制台的系统日志（主要是云函数入参、返回值，错误信息不会关闭）
      }
    ]
}

```

## HBuilderX本地uniCloud运行环境介绍@local-tips

HBuilderX 2.8.1+ 支持uniCloud本地运行插件。

不管是云函数直接本地运行，还是客户端连接本地云函数，都使用的是 uniCloud本地运行插件。

本地运行环境与uniCloud现网的差别：

### 本地环境只有node运行环境

也就是云函数、DB Schema可以使用本地，但本地没有MongoDB、没有redis、没有云存储，数据内容仍然存放在uniCloud现网服务空间。数据库索引也在云端才生效。

### node版本差异

本地运行的nodejs版本为node12。

服务空间的nodejs版本可以选择8或12，如果你使用了nodejs的api，在本地测试之后部署到云端建议测试一下兼容性。如果只使用uniCloud的api，无需顾虑兼容性。

### 本地环境的云函数没有超时限制

云函数超时时间、运行内存配置，在本地调试时不会生效。

### return 策略差异

[详见](cf-functions.md?id=return)

### 公用模块使用注意

- `HBuilderX 3.0.0`之前需要在云函数内执行`npm install ../common/xxx`安装公共模块，详细请参考[云函数公用模块](uniCloud/cf-common.md)
- 如果使用`HBuilderX 3.0.0`及以上版本，可以直接在云函数目录右键选择“管理公共模块依赖”进行公共模块的引入
- 如果使用到加密的公共模块则此云函数不可本地运行
- `HBuilderX 3.0.0`版本运行uniCloud项目时，uniCloud本地调试插件会自动进行云函数依赖安装（包括公共模块和package.json里面的其他依赖）

### 时区问题@timezone

uniCloud云端的云函数使用的时区是utc+0，本地运行时使用的是本机时间，中国一般是+8。在使用“时间戳”时两者没有差异，但如果要获取年、月、日、小时要注意时区的差异。

以下方式可以获取指定时区的年、月、日、小时，可以参考一下

```js
// 获取偏移后的Date对象，例如utc+x时offset就传x
function getOffsetDate (offset) {
  return new Date(
    Date.now() + (new Date().getTimezoneOffset() + (offset || 0) * 60) * 60000
  )
}

// 获取utc+8的小时数
const hour = getOffsetDate(8).getHours()

// 获取时间戳无需使用此方式utc+0时间戳是与utc+8时间戳一致的
```

推荐使用`<uni-dateformat>`组件格式化显示日期，[详情](https://ext.dcloud.net.cn/plugin?id=3279)

### 云函数内调用其他云函数

HBuilderX 3.4.0之前的版本“本地运行云函数”时云函数内callFunction会调用云端已部署的云函数，HBuilderX 3.4.0及之后的版本会调用本地云函数

“客户端连接本地云函数时”云函数内callFunction会调用本地云函数

### 数据与存储

请务必注意云函数在本地运行时依然是连接的云端数据库与存储

云函数上传文件到云存储只有腾讯云支持。当然也可以在前端直接上传文件，此时阿里云腾讯云均支持。

### 插件市场加密插件

插件市场销售的加密云函数或公共模块，在未购买获得源码前，无法在本地运行。本地运行时会自动请求云端已部署的云函数。请留意控制台输出。

发送clientDB请求时，如果使用了加密的action（在插件市场销售），当前请求会使用云端已部署资源而不是本地资源（包括schema、validateFunction、action），请留意控制台输出。

### 文件系统

云函数在云端运行于一个只读文件系统内（仅`/tmp`目录可以写入文件），本地运行时没有这些限制。如需在云端运行时写入文件请在/tmp目录下操作

### 其他注意事项

- 虽然云函数、数据库schema、validatefunction在本地，但云存储、数据库的数据和索引，仍然在云端。也就是开发机不能完全脱线开发。只是代码可以在本地写，免上传就能联调。
- 连接线上环境时请记得上传本地的schema、validatefunction、action
- 切换云端、本地，无需重新运行客户端
- 不同平台可以有不同的配置。但同一平台，如安卓和iOS都是app-plus，则对应着同一个配置，或者两台安卓手机也只能有一个配置
- 客户端在每次发送云函数请求之前，会发送一条请求到本地调试服务，本地服务会根据当前用户选择来通知客户端该访问本地云函数还是云端云函数
- 客户端连接本地云函数时，云函数内的callFunction也会调用本地云函数。除非目标云函数是插件市场售卖的加密云函数，此时不会调用本地，仍会调用云端
- 如果项目内关联了两个服务空间，需要在`.hbuilderx/launch.json`内配置provider参数指定哪个服务空间使用本地调试
- 当前项目运行的所有客户端都停止运行时，对本项目的调试服务会关闭，已经运行到手机的客户端将无法连接本地云函数
- 在h5端network面板的会看到一些`Request Method: OPTION`的请求，这些是跨域预检请求，忽略即可。请参考：[HTTP 的 OPTIONS 方法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS)
- 本地不支持使用了腾讯云自定义登录的场景
- 开发小程序时如果想使用本地云函数进行调试，请开启小程序的忽略安全域名校验
- 小程序体验版无法连接本地服务，如果发布成小程序体验版请务必使用发行模式
- 如果在使用HBuilderX过程中切换了电脑网络后本地调试服务无法访问，则需要重启一次HBuilderX


## 运行云函数时配置运行测试参数@runparam

在云函数的上传运行菜单或右键菜单中，有`配置运行测试参数`的功能。

可以打开一个json，配置运行参数。配置该json后，运行云函数时会将该json作为云函数调用的上行参数处理，可以在云函数中接收到参数。

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/setRunParam.jpg"/>
</div>

在云函数目录右键运行云函数，也可以在云函数编辑器里，按`Ctrl+r`运行快捷键，或点工具栏的运行

<div align=center>
  <img src="https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/run-function-with-param-1.jpg"/>
</div>


此时云函数运行会携带所配置的运行参数

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/setRunParamLog.jpg"/>
</div>


### 模拟客户端类型@mock-client-info

如果需要模拟客户端类型可以在运行参数内添加clientInfo字段，完整字段列表见下方说明

```js
{
  "otherParam": "***",
  "clientInfo":{
    // HBuilderX 3.5.1之前的版本需要传全大写的参数才可以在context内使用context.OS、context.LOCALE等
    "OS": "ios", // 系统类型 ios、android
    "PLATFORM": "web", // 客户端类型 app、web、mp-weixin、mp-alipay等
    "DEVICEID": "", // 设备id
    "APPID": "", // 应用DCloud AppId
    "LOCALE: "", // 客户端语言
    // HBuilderX 3.5.1及更高版本无需传入大写参数，以上参数对应写法如下
    "osName": "ios", // 系统类型 ios、android
    "uniPlatform": "web", // 客户端类型 app、web、mp-weixin、mp-alipay等
    "deviceId": "", // 设备id
    "appId": "", // 应用DCloud AppId
    "locale": "", // 客户端语言
    // HBuilderX 3.5.1及更高版本还允许模拟调用来源（context.SOURCE）、客户端ip（context.CLIENTIP）、客户端ua（context.CLIENTUA）
    "source": "client", // 调用来源，不传时默认为 client
    "clientIP": "127.0.0.1", // 客户端ip，不传时默认为 127.0.0.1
    "ua": "xx MicroMessenger/xxx" // 客户端ua，不传时默认为 HBuilderX
    // ...其他客户端信息
  }
}
```

**注意**

- 非本地运行环境下客户端getSystemInfoSync也会获取ua参数并上传给云函数，但是云函数会从http请求头里面获取ua而不是clientInfo里面的ua

### 传入uniIdToken@mock-uni-id-token

客户端调用云函数时自动在data内加入了uniIdToken，使用配置参数运行时也一样在参数内传入即可

```js
{
  "otherParam": "***",
  "clientInfo":{},
  "uniIdToken": "xxxx"
}
```

## 运行云对象时传配置运行测试参数@run-obj-param

> 新增于HBuilderX 3.5.6

右键点击云对象时选择`运行-本地云对象`或`调试运行-本地云对象`时，会自动创建运行参数文件`${objName}.param.js`，可在此文件内以以下格式配置参数，配置完毕后再次运行即可。

其中`const clientInfo = {xxx}`为模拟客户端信息。完整clientInfo列表请参考：[getClientInfo](cloud-obj.md#get-client-info)

`login('xxx', 'xxx')`用于指定调用的方法名和参数。

```js
const clientInfo = { // 模拟clientInfo
  uniPlatform: 'web',
  source: 'client', // 调用来源，不传时默认为 client
  clientIP: '127.0.0.1', // 客户端ip，不传时默认为 127.0.0.1
  userAgent: 'xx MicroMessenger/xxx', // 客户端ua，不传时默认为 HBuilderX
  uniIdToken: 'xxx'
}
login('name-demo', 'password-demo') // 调用login方法传入参数'name-demo'和'password-demo'
```

**注意**

- 此文件并非可执行的js文件，仅用来配置参数，因此不可在文件内定义变量并使用
- 如果存在多个方法、参数配置运行时会使用第一个

## 断点调试云函数

> HBuilderX 3.2.10起，本地运行云函数及客户端连接本地云函数支持断点调试

开启断点调试方式如下图所示，在uniCloud本地运行环境启动后，在uniCloud控制台右上角选择开启断点调试。

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/cloudfunction-serve-debug.jpg"/>
</div>

开启调试后会出现调试界面，如下图所示。和浏览器的调试功能类似，详情可以参考：[JavaScript调试器](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools#javascript%E8%B0%83%E8%AF%95%E5%99%A8)

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/cloudfunction-debug-overview.jpg"/>
</div>

在调试文件的编辑器界面的行号处双击可以插入断点，也可以右键选择更多操作（添加/删除/禁用断点）

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/cloudfunction-debug-break-point.jpg"/>
</div>

如需从调试界面切换回项目视图，可以在项目管理器底部点击按钮进行切换

<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/cloudfunction-debug-switch-project.jpg"/>
</div>

uni-app前端也支持debug调试，注意不要混淆。

在调试面板上方有断点step按钮，鼠标悬浮上去可看到快捷键。可以单步调试。调试面板的使用教程同客户端调试，[详见](/tutorial/debug/h5-debug.md)

## 云端日志@uniCloudlogger

发布后的云函数，在 [uniCloud web控制台](https://unicloud.dcloud.net.cn/) -> 云函数 下也有日志。

通过console api打印的日志会在云端记录。

### 阿里云

阿里云云函数日志最长保留7天

### 腾讯云

腾讯云日志服务为[套餐外单独计费项](https://uniapp.dcloud.net.cn/uniCloud/price.html#tencent-advanced)。如果你购买了包月套餐，在使用日志服务时会产生额外费用（日志服务为按量计费，从余额扣除）。为避免因日志服务欠费引发其他按量计费资源不可使用，目前新建腾讯云服务空间默认关闭了日志服务，可在 [uniCloud web控制台](https://unicloud.dcloud.net.cn/) -> 云函数 -> 日志中开启。

此外日志服务开启的状态下，腾讯云可以设置日志保存时长。

![](https://web-assets.dcloud.net.cn/unidoc/zh/tcb-log-switch.jpg)
