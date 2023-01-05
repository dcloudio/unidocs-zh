## 云函数/云对象运行方式介绍
## Cloud function/cloud object operation mode introduction

云函数或云对象，在开发期间，可以在HBuilderX提供的本地环境运行，也可以连接现网uniCloud云端运行。
During development, cloud functions or cloud objects can be run in the local environment provided by HBuilderX, or connected to the uniCloud cloud on the existing network.

注意：本地运行环境只包括云函数和 `DB Schema`，数据内容必须在云端。因为本地运行环境没有MongoDB。
Note: The local running environment only includes cloud functions and `DB Schema`, and the data content must be in the cloud. Because the local runtime environment does not have MongoDB.

云函数/云对象可以自己直接在本地或云端的云函数环境里运行，也可以由uni-app客户端连接云函数，触发本地或云端的运行环境进行联调运行。
Cloud functions/cloud objects can run directly in the local or cloud cloud function environment, or the uni-app client can connect to the cloud function to trigger the local or cloud running environment for joint debugging.

云对象属于云函数的一种，所以很多界面菜单或文档没有单独强调时，“云函数”将包含“云对象”。
Cloud objects are a type of cloud functions, so when many interface menus or documents do not individually emphasize, "cloud functions" will include "cloud objects".

所以总结一下，云函数有4种运行模式：
So to sum up, cloud functions have 4 operating modes:
1. 本地运行
1. Run locally
2. 上传云端并运行（云对象不支持此模式）
2. Upload to the cloud and run (cloud objects do not support this mode)
3. 客户端连本地云函数运行
3. The client connects to the local cloud function to run
4. 客户端连云端云函数运行
4. The client connects to the cloud to run the cloud function

云函数/云对象可通过菜单或快捷键运行。
Cloud functions/cloud objects can be run via menu or shortcut keys.

1. 右键菜单：在项目管理器里右键点击该云函数的目录，在弹出菜单中可选择“本地运行云函数”、“上传并运行云函数”
1. Right-click menu: Right-click the cloud function directory in the project manager, and select "Run cloud function locally", "Upload and run cloud function" in the pop-up menu

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/localRun.jpg"/>
</div>

2. 工具栏：编辑器打开云函数时，点击工具栏`运行`按钮，下拉菜单也有“本地运行云函数”、“上传并运行云函数”
2. Toolbar: When the editor opens a cloud function, click the `Run` button on the toolbar, and the drop-down menu also includes "Run cloud function locally", "Upload and run cloud function"
3. 快捷键：编辑器打开云函数时，按【Ctrl+r】快捷键，会激活上述运行菜单。
3. Shortcut key: When the editor opens the cloud function, press the [Ctrl+r] shortcut key to activate the above run menu.

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/localCtrlRrun.jpg"/>
</div>

如果没有安装本地运行插件，按照提示安装即可。本地运行云函数需HBuilderX 2.8.1+
If the local running plugin is not installed, follow the prompts to install it. HBuilderX 2.8.1+ is required to run cloud functions locally

运行后将打开云函数控制台，在控制台看到运行结果和日志输出。
After running, the cloud function console will be opened, and you can see the running results and log output in the console.

## 本地运行云函数@runlocal
## Run cloud functions locally @runlocal

> HBuilderX 2.8.1版本起支持
> Supported since HBuilderX 2.8.1

在HBuilderX的uniCloud本地运行插件的node环境中直接运行云函数或云对象。
Run cloud functions or cloud objects directly in the node environment of HBuilderX's uniCloud local running plugin.

**使用方式**
**How to use**

- 如果没有安装本地运行插件，按照提示安装即可
- If the local running plug-in is not installed, follow the prompts to install it
- 如需配置运行参数请参考：[配置运行测试参数](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#runparam)
- To configure running parameters, please refer to: [Configure running test parameters](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#runparam)

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/localRun.jpg"/>
</div>


在云函数编辑器里，按`Ctrl+r`运行快捷键（或点工具栏的运行），可看到运行云函数的若干菜单。`Ctrl+r`然后回车或选`0`执行本地运行，即可立即在控制台看到运行结果和日志输出。如下图所示：
In the cloud function editor, press `Ctrl+r` to run the shortcut key (or click Run on the toolbar) to see several menus for running cloud functions. `Ctrl+r` and press Enter or select `0` to execute the local operation, you can immediately see the operation results and log output in the console. As shown below:

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/localCtrlRrun.jpg"/>
</div>

云函数打印`console.log`看日志。
Cloud functions print `console.log` to see the log.

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/lookLog.jpg"/>
</div>

运行云函数时，如需要给云函数传参，又不想启动客户端，那么可以通过配置json文件来传测试参数。
When running a cloud function, if you need to pass parameters to the cloud function but do not want to start the client, you can pass the test parameters by configuring a json file.

在云函数对应的目录右键可以配置运行测试参数，如下图，选择之后会生成一个形如`${函数名}.param.json`的文件，此文件内容会在云函数`上传并运行`以及`本地运行云函数`时作为参数传入云函数内。详细用法可参考：[配置运行测试参数](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#runparam)
Right-click on the directory corresponding to the cloud function to configure the running test parameters, as shown in the figure below. After selection, a file in the form of `${function name}.param.json` will be generated. The content of this file will be uploaded and run in the cloud function and When `running the cloud function locally`, it is passed into the cloud function as a parameter. For detailed usage, please refer to: [Configure running test parameters](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#runparam)

## 上传并运行云函数@uploadandrun
## Upload and run cloud functions @uploadandrun

在项目管理器里右键点击云函数的目录，在弹出菜单中可选择“上传并运行云函数”。此外也可以打开此目录下的文件然后使用快捷键`Ctrl+r`，在弹出菜单中选择“上传并运行云函数”。
Right-click the cloud function directory in the project manager, and select "Upload and run cloud function" from the pop-up menu. Alternatively, you can open the file in this directory and then use the shortcut key `Ctrl+r` to select "Upload and Run Cloud Function" in the pop-up menu.

对于云函数，上传并运行时会自动带上配置的运行测试参数。请参考：[配置运行测试参数](?id=runparam)
For cloud functions, the configured running test parameters are automatically included when uploading and running. Please refer to: [Configure run test parameters](?id=runparam)

注：云对象不支持上传并运行。
Note: Cloud objects do not support upload and run.

## 客户端联调云函数@calllocalfunction
## Client joint debugging cloud function @calllocalfunction

> `HBuilderX 3.0.0`起支持
> Supported since `HBuilderX 3.0.0`

运行含有uniCloud的uni-app项目，除了启动客户端控制台外，还会启动uniCloud控制台。
Running a uni-app project with uniCloud starts the uniCloud console in addition to the client console.

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/unicloud-debug-dist.jpg"/>
</div>

可以在客户端控制台的右上角切换是连接本地云函数还是云端云函数，如下图所示
You can switch whether to connect to a local cloud function or a cloud cloud function in the upper right corner of the client console, as shown in the following figure

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/client-to-local.jpg"/>
</div>

uniCloud控制台日志如下图：
The uniCloud console log is as follows:

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/client-to-local-log.jpg"/>
</div>

此时客户端的日志和云函数的日志都可以看到，联调非常方便。
At this point, you can see both the client log and the cloud function log, which is very convenient for joint debugging.

注：小程序开发需要注意，开发期间应关闭域名校验来建立和本地调试服务的连接，切勿使用HBuilderX的运行菜单发布体验版以及线上版。体验版和最终上线的版本应该以发行模式进行编译。
Note: It is necessary to pay attention to the development of small programs. During development, the domain name verification should be turned off to establish a connection with the local debugging service. Do not use the run menu of HBuilderX to publish the trial version and online version. The trial version and the final release version should be compiled in release mode.

**配置保存**
**Configuration save**

切换连接云端云函数还是本地云函数之后会在项目下的`.hbuilderx`目录创建一个`launch.json`文件。
After switching between the cloud function and the local cloud function, a `launch.json` file will be created in the `.hbuilderx` directory under the project.

一个典型的`launch.json`是如下形式的（无需手动创建此文件）
A typical `launch.json` looks like this (no need to manually create this file)

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
## HBuilderX local uniCloud operating environment introduction @local-tips

HBuilderX 2.8.1+ 支持uniCloud本地运行插件。
HBuilderX 2.8.1+ supports uniCloud to run plugins locally.

不管是云函数直接本地运行，还是客户端连接本地云函数，都使用的是 uniCloud本地运行插件。
Whether the cloud function runs directly locally or the client connects to the local cloud function, the uniCloud local running plugin is used.

本地运行环境与uniCloud现网的差别：
The difference between the local operating environment and the current uniCloud network:

### 本地环境只有node运行环境

也就是云函数、DB Schema可以使用本地，但本地没有MongoDB、没有redis、没有云存储，数据内容仍然存放在uniCloud现网服务空间。数据库索引也在云端才生效。
That is, cloud functions and DB Schema can be used locally, but there is no MongoDB, no redis, and no cloud storage locally, and the data content is still stored in the uniCloud live network service space. The database index also takes effect in the cloud.

### node版本差异

本地运行的nodejs版本为node12。
The nodejs version running locally is node12.

服务空间的nodejs版本可以选择8或12，如果你使用了nodejs的api，在本地测试之后部署到云端建议测试一下兼容性。如果只使用uniCloud的api，无需顾虑兼容性。
The nodejs version of the service space can be selected from 8 or 12. If you use the nodejs api, it is recommended to test the compatibility after deploying to the cloud after local testing. If you only use the uniCloud api, there is no need to worry about compatibility.

### 本地环境的云函数没有超时限制

云函数超时时间、运行内存配置，在本地调试时不会生效。
Cloud function timeout and running memory configuration will not take effect during local debugging.

### return 策略差异

[详见](cf-functions.md?id=return)
[See details](cf-functions.md?id=return)

### 公用模块使用注意

- `HBuilderX 3.0.0`之前需要在云函数内执行`npm install ../common/xxx`安装公共模块，详细请参考[云函数公用模块](uniCloud/cf-common.md)
- Before `HBuilderX 3.0.0`, you need to execute `npm install ../common/xxx` in the cloud function to install the common module. For details, please refer to [Cloud Function Common Module](uniCloud/cf-common.md)
- 如果使用`HBuilderX 3.0.0`及以上版本，可以直接在云函数目录右键选择“管理公共模块依赖”进行公共模块的引入
- If you use `HBuilderX 3.0.0` and above, you can directly right-click in the cloud function directory and select "Manage Common Module Dependencies" to import public modules
- 如果使用到加密的公共模块则此云函数不可本地运行
- This cloud function cannot be run locally if encrypted public modules are used
- `HBuilderX 3.0.0`版本运行uniCloud项目时，uniCloud本地调试插件会自动进行云函数依赖安装（包括公共模块和package.json里面的其他依赖）
- When the `HBuilderX 3.0.0` version runs the uniCloud project, the uniCloud local debugging plugin will automatically install cloud function dependencies (including public modules and other dependencies in package.json)

### 时区问题@timezone

uniCloud云端的云函数使用的时区是utc+0，本地运行时使用的是本机时间，中国一般是+8。在使用“时间戳”时两者没有差异，但如果要获取年、月、日、小时要注意时区的差异。
The time zone used by cloud functions in the uniCloud cloud is utc+0, the local time is used when running locally, and China is generally +8. There is no difference between the two when using "timestamp", but if you want to get the year, month, day, and hour, pay attention to the difference in time zones.

以下方式可以获取指定时区的年、月、日、小时，可以参考一下
The following methods can obtain the year, month, day, and hour of the specified time zone, you can refer to

```js
// 获取偏移后的Date对象，例如utc+x时offset就传x
// Get the offset Date object, for example, when utc+x, the offset will pass x
function getOffsetDate (offset) {
  return new Date(
    Date.now() + (new Date().getTimezoneOffset() + (offset || 0) * 60) * 60000
  )
}

// 获取utc+8的小时数
// Get the hours in utc+8
const hour = getOffsetDate(8).getHours()

// 获取时间戳无需使用此方式utc+0时间戳是与utc+8时间戳一致的
// There is no need to use this method to get the timestamp. The utc+0 timestamp is consistent with the utc+8 timestamp
```

推荐使用`<uni-dateformat>`组件格式化显示日期，[详情](https://ext.dcloud.net.cn/plugin?id=3279)
It is recommended to use the `<uni-dateformat>` component to format the display date, [details](https://ext.dcloud.net.cn/plugin?id=3279)

### 云函数内调用其他云函数

HBuilderX 3.4.0之前的版本“本地运行云函数”时云函数内callFunction会调用云端已部署的云函数，HBuilderX 3.4.0及之后的版本会调用本地云函数

“客户端连接本地云函数时”云函数内callFunction会调用本地云函数
"When the client connects to the local cloud function" callFunction in the cloud function will call the local cloud function

### 数据与存储

请务必注意云函数在本地运行时依然是连接的云端数据库与存储
It is important to note that cloud functions are still connected cloud databases and storages when running locally

云函数上传文件到云存储只有腾讯云支持。当然也可以在前端直接上传文件，此时阿里云腾讯云均支持。
Cloud function uploading files to cloud storage is only supported by Tencent Cloud. Of course, you can also upload files directly on the front end, which is supported by Alibaba Cloud and Tencent Cloud.

### 插件市场加密插件

插件市场销售的加密云函数或公共模块，在未购买获得源码前，无法在本地运行。本地运行时会自动请求云端已部署的云函数。请留意控制台输出。
The encrypted cloud functions or public modules sold in the plug-in market cannot be run locally until the source code is purchased. The local runtime automatically requests cloud functions that have been deployed in the cloud. Note the console output.

发送clientDB请求时，如果使用了加密的action（在插件市场销售），当前请求会使用云端已部署资源而不是本地资源（包括schema、validateFunction、action），请留意控制台输出。
When sending a clientDB request, if an encrypted action (sold in the plugin market) is used, the current request will use the cloud-deployed resources instead of local resources (including schema, validateFunction, and action). Please pay attention to the console output.

### 文件系统

云函数在云端运行于一个只读文件系统内（仅`/tmp`目录可以写入文件），本地运行时没有这些限制。如需在云端运行时写入文件请在/tmp目录下操作
Cloud functions run in a read-only file system in the cloud (only `/tmp` directory can write files), and there are no such restrictions when running locally. To write files when running in the cloud, please operate in the /tmp directory

### 其他注意事项

- 虽然云函数、数据库schema、validatefunction在本地，但云存储、数据库的数据和索引，仍然在云端。也就是开发机不能完全脱线开发。只是代码可以在本地写，免上传就能联调。
- Although cloud functions, database schema, and validate functions are local, cloud storage, database data and indexes are still in the cloud. That is, the development machine cannot be completely developed offline. It's just that the code can be written locally, and joint debugging can be done without uploading.
- 连接线上环境时请记得上传本地的schema、validatefunction、action
- Please remember to upload the local schema, validatefunction, action when connecting to the online environment
- 切换云端、本地，无需重新运行客户端
- Switch between cloud and local without re-running the client
- 不同平台可以有不同的配置。但同一平台，如安卓和iOS都是app-plus，则对应着同一个配置，或者两台安卓手机也只能有一个配置
- Different platforms can have different configurations. But the same platform, such as Android and iOS are both app-plus, they correspond to the same configuration, or two Android phones can only have one configuration
- 客户端在每次发送云函数请求之前，会发送一条请求到本地调试服务，本地服务会根据当前用户选择来通知客户端该访问本地云函数还是云端云函数
- Before sending a cloud function request, the client will send a request to the local debugging service, and the local service will notify the client whether to access the local cloud function or the cloud cloud function according to the current user selection.
- 客户端连接本地云函数时，云函数内的callFunction也会调用本地云函数。除非目标云函数是插件市场售卖的加密云函数，此时不会调用本地，仍会调用云端
- When the client connects to the local cloud function, the callFunction in the cloud function will also call the local cloud function. Unless the target cloud function is an encrypted cloud function sold in the plug-in market, it will not call the local, but will still call the cloud.
- 如果项目内关联了两个服务空间，需要在`.hbuilderx/launch.json`内配置provider参数指定哪个服务空间使用本地调试
- If two service spaces are associated with the project, you need to configure the provider parameter in `.hbuilderx/launch.json` to specify which service space uses local debugging
- 当前项目运行的所有客户端都停止运行时，对本项目的调试服务会关闭，已经运行到手机的客户端将无法连接本地云函数
- When all clients running in the current project stop running, the debugging service for this project will be closed, and the clients that have already run on the mobile phone will not be able to connect to the local cloud function
- 在h5端network面板的会看到一些`Request Method: OPTION`的请求，这些是跨域预检请求，忽略即可。请参考：[HTTP 的 OPTIONS 方法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS)
- In the network panel on the h5 side, you will see some requests for `Request Method: OPTION`. These are cross-domain preflight requests and can be ignored. Please refer to: [HTTP's OPTIONS method](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS)
- 本地不支持使用了腾讯云自定义登录的场景
- The scene of using Tencent Cloud custom login is not supported locally
- 开发小程序时如果想使用本地云函数进行调试，请开启小程序的忽略安全域名校验
- If you want to use the local cloud function for debugging when developing the applet, please enable the ignore security domain name verification of the applet
- 小程序体验版无法连接本地服务，如果发布成小程序体验版请务必使用发行模式
- The Mini Program trial version cannot connect to local services. If you publish the Mini Program trial version, be sure to use the release mode
- 如果在使用HBuilderX过程中切换了电脑网络后本地调试服务无法访问，则需要重启一次HBuilderX
- If the local debugging service cannot be accessed after switching the computer network while using HBuilderX, you need to restart HBuilderX once


## 运行云函数时配置运行测试参数@runparam
## Configure running test parameters when running cloud functions @runparam

在云函数的上传运行菜单或右键菜单中，有`配置运行测试参数`的功能。
In the upload and run menu or right-click menu of the cloud function, there is the function of `configure running test parameters`.

可以打开一个json，配置运行参数。配置该json后，运行云函数时会将该json作为云函数调用的上行参数处理，可以在云函数中接收到参数。
You can open a json and configure the running parameters. After the json is configured, the json will be processed as the upstream parameter of the cloud function call when running the cloud function, and the parameters can be received in the cloud function.

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/setRunParam.jpg"/>
</div>

在云函数目录右键运行云函数，也可以在云函数编辑器里，按`Ctrl+r`运行快捷键，或点工具栏的运行
Right-click in the cloud function directory to run the cloud function, or in the cloud function editor, press `Ctrl+r` to run the shortcut key, or click Run on the toolbar

<div align=center>
  <img src="https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/run-function-with-param-1.jpg"/>
</div>


此时云函数运行会携带所配置的运行参数
At this time, the cloud function operation will carry the configured operation parameters.

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/setRunParamLog.jpg"/>
</div>


### 模拟客户端类型@mock-client-info
### Mock client type @mock-client-info

如果需要模拟客户端类型可以在运行参数内添加clientInfo字段，完整字段列表见下方说明
If you need to simulate the client type, you can add the clientInfo field to the running parameters. For a complete list of fields, see the description below.

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
    // HBuilderX 3.5.1 and later versions do not need to pass in uppercase parameters. The above parameters are written as follows
    "osName": "ios", // 系统类型 ios、android
    "uniPlatform": "web", // 客户端类型 app、web、mp-weixin、mp-alipay等
    "deviceId": "", // 设备id
    "appId": "", // 应用DCloud AppId
    "locale": "", // 客户端语言
    // HBuilderX 3.5.1及更高版本还允许模拟调用来源（context.SOURCE）、客户端ip（context.CLIENTIP）、客户端ua（context.CLIENTUA）
    // HBuilderX 3.5.1 and later also allow mocking of call source (context.SOURCE), client ip (context.CLIENTIP), client ua (context.CLIENTUA)
    "source": "client", // 调用来源，不传时默认为 client
    "clientIP": "127.0.0.1", // 客户端ip，不传时默认为 127.0.0.1
    "ua": "xx MicroMessenger/xxx" // 客户端ua，不传时默认为 HBuilderX
    // ...其他客户端信息
    // ...additional client information
  }
}
```

**注意**
**Notice**

- 非本地运行环境下客户端getSystemInfoSync也会获取ua参数并上传给云函数，但是云函数会从http请求头里面获取ua而不是clientInfo里面的ua
- In a non-local operating environment, the client getSystemInfoSync will also obtain the ua parameter and upload it to the cloud function, but the cloud function will obtain the ua from the http request header instead of the ua in the clientInfo

### 传入uniIdToken@mock-uni-id-token
### Enter uniIdToken@mock-uni-id-token

客户端调用云函数时自动在data内加入了uniIdToken，使用配置参数运行时也一样在参数内传入即可
When the client calls the cloud function, the uniIdToken is automatically added to the data. When using the configuration parameters to run, it can also be passed in the parameters.

```js
{
  "otherParam": "***",
  "clientInfo":{},
  "uniIdToken": "xxxx"
}
```

## 运行云对象时传配置运行测试参数@run-obj-param
## When running the cloud object, pass the configuration running test parameters @run-obj-param

> 新增于HBuilderX 3.5.6
> Added in HBuilderX 3.5.6

右键点击云对象时选择`运行-本地云对象`或`调试运行-本地云对象`时，会自动创建运行参数文件`${objName}.param.js`，可在此文件内以以下格式配置参数，配置完毕后再次运行即可。
When right-clicking on a cloud object and selecting `Run - Local Cloud Object` or `Debug Run - Local Cloud Object`, the run parameter file `${objName}.param.js` will be automatically created, which can be configured in the following format parameters, you can run it again after the configuration is complete.

其中`const clientInfo = {xxx}`为模拟客户端信息。完整clientInfo列表请参考：[getClientInfo](cloud-obj.md#get-client-info)
Where `const clientInfo = {xxx}` is the simulated client information. For a complete list of clientInfo, please refer to: [getClientInfo](cloud-obj.md#get-client-info)

`login('xxx', 'xxx')`用于指定调用的方法名和参数。
`login('xxx', 'xxx')` is used to specify the method name and parameters of the call.

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
**Notice**

- 此文件并非可执行的js文件，仅用来配置参数，因此不可在文件内定义变量并使用
- This file is not an executable js file, it is only used to configure parameters, so variables cannot be defined in the file and used
- 如果存在多个方法、参数配置运行时会使用第一个
- If there are multiple methods, the parameter configuration runtime will use the first one

## 断点调试云函数
## Breakpoint debugging cloud function

> HBuilderX 3.2.10起，本地运行云函数及客户端连接本地云函数支持断点调试
> From HBuilderX 3.2.10, running cloud functions locally and connecting clients to local cloud functions support breakpoint debugging

开启断点调试方式如下图所示，在uniCloud本地运行环境启动后，在uniCloud控制台右上角选择开启断点调试。
The way to enable breakpoint debugging is shown in the figure below. After the uniCloud local operating environment is started, select Enable breakpoint debugging in the upper right corner of the uniCloud console.

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/cloudfunction-serve-debug.jpg"/>
</div>

开启调试后会出现调试界面，如下图所示。和浏览器的调试功能类似，详情可以参考：[JavaScript调试器](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools#javascript%E8%B0%83%E8%AF%95%E5%99%A8)
After the debugging is enabled, the debugging interface will appear, as shown in the following figure. Similar to the browser's debugging function, please refer to: [JavaScript Debugger](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools#javascript%E8%B0%83%E8% AF%95%E5%99%A8)

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/cloudfunction-debug-overview.jpg"/>
</div>

在调试文件的编辑器界面的行号处双击可以插入断点，也可以右键选择更多操作（添加/删除/禁用断点）
Double-click at the line number of the editor interface of the debug file to insert a breakpoint, or right-click to select more operations (add/delete/disable breakpoints)

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/cloudfunction-debug-break-point.jpg"/>
</div>

如需从调试界面切换回项目视图，可以在项目管理器底部点击按钮进行切换
To switch back to the project view from the debug interface, click the button at the bottom of the project manager to switch

<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/cloudfunction-debug-switch-project.jpg"/>
</div>

uni-app前端也支持debug调试，注意不要混淆。
The uni-app front end also supports debug debugging, be careful not to confuse it.

在调试面板上方有断点step按钮，鼠标悬浮上去可看到快捷键。可以单步调试。调试面板的使用教程同客户端调试，[详见](/tutorial/debug/h5-debug.md)
There is a breakpoint step button above the debug panel, and the shortcut key can be seen by hovering the mouse over it. Single-step debugging is possible. The usage tutorial of the debug panel is the same as the client-side debugging, [see details](/tutorial/debug/h5-debug.md)

## 云端日志@uniCloudlogger
## Cloud Log @uniCloudlogger

发布后的云函数，在 [uniCloud web控制台](https://unicloud.dcloud.net.cn/) -> 云函数 下也有日志。
The published cloud functions also have logs under [uniCloud web console](https://unicloud.dcloud.net.cn/) -> cloud functions.

通过console api打印的日志会在云端记录。

### 阿里云

阿里云云函数日志最长保留7天

### 腾讯云

腾讯云日志服务为[套餐外单独计费项](https://uniapp.dcloud.net.cn/uniCloud/price.html#tencent-advanced)。如果你购买了包月套餐，在使用日志服务时会产生额外费用（日志服务为按量计费，从余额扣除）。为避免因日志服务欠费引发其他按量计费资源不可使用，目前新建腾讯云服务空间默认关闭了日志服务，可在 [uniCloud web控制台](https://unicloud.dcloud.net.cn/) -> 云函数 -> 日志中开启。

此外日志服务开启的状态下，腾讯云可以设置日志保存时长。

![](https://web-assets.dcloud.net.cn/unidoc/zh/tcb-log-switch.jpg)
