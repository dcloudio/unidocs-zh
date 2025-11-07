# API 概述

`uni-app`的 js API 由标准 ECMAScript 的 js API 和 uni 扩展 API 这两部分组成。

标准 ECMAScript 的 js 仅是最基础的 js。浏览器基于它扩展了 window、document、navigator 等对象。小程序也基于标准 js 扩展了各种 wx.xx、my.xx、swan.xx 的 API。node 也扩展了 fs 等模块。

uni-app 基于 ECMAScript 扩展了 uni 对象，并且 API 命名与小程序保持兼容。

## 标准 js 和浏览器 js 的区别

`uni-app`的 js 代码，web 端运行于浏览器中。非 web 端（包含小程序和 App），Android 平台运行在 v8 引擎中，iOS 平台运行在 iOS 自带的 jscore 引擎中，都没有运行在浏览器或 webview 里。

非 web 端，虽然不支持 window、document、navigator 等浏览器的 js API，但也支持标准 ECMAScript。

请注意不要把浏览器里的 js 等价于标准 js。

所以 uni-app 的非web端，一样支持标准 js，支持 if、for 等语法，支持字符串、数字、时间、布尔值、数组、自定义对象等变量类型及各种处理方法。仅仅是不支持 window、document、navigator 等浏览器专用对象。

## 各端特色 API 调用

除了 uni-app 框架内置的跨端 API，各端自己的特色 API 也可通过[条件编译](https://uniapp.dcloud.io/platform)自由使用。

各端特色 API 规范参考各端的开发文档。其中 App 端的 JS API 参考[html5plus.org](https://www.html5plus.org/doc/h5p.html)；uni-app 也支持通过扩展原生插件来丰富 App 端的开发能力，具体参考[插件开发文档](http://ask.dcloud.net.cn/article/35408)

各平台的 API 新增，不需要 uni-app 升级，开发者就可以直接使用。

各平台 API 独有的字段，如快手小程序 `ks.pay` 的 `payType`、`paymentChannel` 字段，开发者在调用 API 时正常传入即可，会透传至快手小程序的 API 上

## 补充说明

- uni.on 开头的 API 是监听某个事件发生的 API 接口，接受一个 CALLBACK 函数作为参数。当该事件触发时，会调用 CALLBACK 函数。
- 如未特殊约定，其他 API 接口都接受一个 OBJECT 作为参数。
- OBJECT 中可以指定 success，fail，complete 来接收接口调用结果。
- **平台差异说明**若无特殊说明，则表示所有平台均支持。
- 异步 API 会返回 `errMsg` 字段，同步 API 则不会。比如：`getSystemInfoSync` 在返回结果中不会有 `errMsg`。

## API `Promise 化`

1. 具体 API `Promise 化` 的策略：

   - 异步的方法，如果不传入 success、fail、complete 等 callback 参数，将以 Promise 返回数据。例如：`uni.getImageInfo()`
   - 异步的方法，且有返回对象，如果希望获取返回对象，必须至少传入一项 success、fail、complete 等 callback 参数。例如：

     ```js
      // 正常使用
      const task = uni.connectSocket({
       success(res){
        console.log(res)
       }
      })

      // Promise 化
      uni.connectSocket().then(res => {
        // 此处即为正常使用时 success 回调的 res
        // uni.connectSocket() 正常使用时是会返回 task 对象的，如果想获取 task ，则不要使用 Promise 化
        console.log(res)
      })
     ```

2. 不进行 `Promise 化` 的 API：
   - 同步的方法（即以 sync 结束）。例如：`uni.getSystemInfoSync()`
   - 以 create 开头的方法。例如：`uni.createMapContext()`
   - 以 manager 结束的方法。例如：`uni.getBackgroundAudioManager()`

### Vue 2 和 Vue 3 的 API `Promise 化`

> Vue 2 和 Vue 3 项目中 `API Promise 化` 返回格式不一致，以下为 `不同点` 和 `返回格式互相转换`

- 不同点

  - Vue2 对部分 API 进行了 Promise 封装，返回数据的第一个参数是错误对象，第二个参数是返回数据。此时使用 `catch` 是拿不到报错信息的，因为内部对错误进行了拦截。
  - Vue3 对部分 API 进行了 Promise 封装，调用成功会进入 `then 方法` 回调。调用失败会进入 `catch 方法` 回调

  **使用示例：**

  ::: preview

  > Vue2

  ```js
  // 默认方式
  uni.request({
    url: "https://www.example.com/request",
    success: (res) => {
      console.log(res.data);
    },
    fail: (err) => {
      console.error(err);
    },
  });

  // Promise
  uni
    .request({
      url: "https://www.example.com/request",
    })
    .then((data) => {
      // data为一个数组
      // 数组第一项为错误信息 即为 fail 回调
      // 第二项为返回数据
      var [err, res] = data;
      console.log(res.data);
    });

  // Await
  async function request() {
    var [err, res] = await uni.request({
      url: "https://www.example.com/request",
    });
    console.log(res.data);
  }
  ```

  > Vue 3

  ```js
  // 默认方式
  uni.request({
    url: "https://www.example.com/request",
    success: (res) => {
      console.log(res.data);
    },
    fail: (err) => {
      console.error(err);
    },
  });

  // 使用 Promise then/catch 方式调用
  uni
    .request({
      url: "https://www.example.com/request",
    })
    .then((res) => {
      // 此处的 res 参数，与使用默认方式调用时 success 回调中的 res 参数一致
      console.log(res.data);
    })
    .catch((err) => {
      // 此处的 err 参数，与使用默认方式调用时 fail 回调中的 err 参数一致
      console.error(err);
    });

  // 使用 Async/Await 方式调用
  async function request() {
    try {
      var res = await uni.request({
        url: "https://www.example.com/request",
      });
      // 此处的 res 参数，与使用默认方式调用时 success 回调中的 res 参数一致
      console.log(res);
    } catch (err) {
      // 此处的 err 参数，与使用默认方式调用时 fail 回调中的 err 参数一致
      console.error(err);
    }
  }
  ```

  :::

- 返回格式互相转换

::: preview

> Vue2

```js
// Vue 2 转 Vue 3, 在 main.js 中写入以下代码即可
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise((resolve, reject) => {
      res.then((res) => {
        if (!res) {
          resolve(res);
          return;
        }
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  },
});
```

> Vue3

```js
// Vue 3 转 Vue 2, 在 main.js 中写入以下代码即可
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    const returnValue = [undefined, undefined];
    return res
      .then((res) => {
        returnValue[1] = res;
      })
      .catch((err) => {
        returnValue[0] = err;
      })
      .then(() => returnValue);
  },
});
```

:::

## API 列表

### 基础

日志打印等。

| API                                            | 说明                                  |
| :--------------------------------------------- | :------------------------------------ |
| [日志打印](log)                                | 向控制台打印日志信息                  |
| [定时器](timer)                                | 在定时到期以后执行注册的回调函数      |
| [uni.base64ToArrayBuffer](base64ToArrayBuffer) | 将 Base64 字符串转成 ArrayBuffer 对象 |
| [uni.arrayBufferToBase64](arrayBufferToBase64) | 将 ArrayBuffer 对象转成 Base64 字符串 |
| 启动|-|
@|API|说明|
@|:--|:--|
@|[getLaunchOptionsSync](getLaunchOptionsSync)|获取启动时的参数。返回值与App.onLaunch的回调参数一致|
@|[getEnterOptionsSync](getEnterOptionsSync)|获取启动时的参数|
| [应用级事件](application)                 | 监听应用事件                          |
| [拦截器](interceptor)                          | 拦截 Api 等调用并执行回调             |
| [全局 API](global)                             | 可全局调用 Api                        |
| [canIUse](caniuse)                             | 判断应用的 API，回调，参数，组件等是否在当前版本可用                        |

### 网络

|API|说明|
| :-- | :-- |
|发起请求|-|
@| API                                       | 说明         |
@| :---------------------------------------- | :----------- |
@| [uni.request](request/request?id=request) | 发起网络请求 |
|上传、下载|-|
@| API                                                      | 说明     |
@| :------------------------------------------------------- | :------- |
@| [uni.uploadFile](request/network-file?id=uploadfile)     | 上传文件 |
@| [uni.downloadFile](request/network-file?id=downloadfile) | 下载文件 |
|WebSocket|-|
@| API                                                             | 说明                |
@| :-------------------------------------------------------------- | :------------------ |
@| [uni.connectSocket](request/websocket?id=connectsocket)         | 创建 WebSocket 连接 |
@| [uni.onSocketOpen](request/websocket?id=onsocketopen)           | 监听 WebSocket 打开 |
@| [uni.onSocketError](request/websocket?id=onsocketerror)         | 监听 WebSocket 错误 |
@| [uni.sendSocketMessage](request/websocket?id=sendsocketmessage) | 发送 WebSocket 消息 |
@| [uni.onSocketMessage](request/websocket?id=onsocketmessage)     | 接受 WebSocket 消息 |
@| [uni.closeSocket](request/websocket?id=closesocket)             | 关闭 WebSocket 连接 |
@| [uni.onSocketClose](request/websocket?id=onsocketclose)         | 监听 WebSocket 关闭 |
|SocketTask|-|
@| API | 说明 |
@| :-- | :-- |
@| [SocketTask.send](request/socket-task?id=sockettasksend)           | 通过 WebSocket 连接发送数据           |
@| [SocketTask.close](request/socket-task?id=sockettaskclose)         | 关闭 WebSocket 连接                   |
@| [SocketTask.onOpen](request/socket-task?id=sockettaskonopen)       | 监听 WebSocket 连接打开事件           |
@| [SocketTask.onClose](request/socket-task?id=sockettaskonclose)     | 监听 WebSocket 连接关闭事件           |
@| [SocketTask.onError](request/socket-task?id=sockettaskonerror)     | 监听 WebSocket 错误事件               |
@| [SocketTask.onMessage](request/socket-task?id=sockettaskonmessage) | 监听 WebSocket 接受到服务器的消息事件 |
|[mDNS](request/mDNS)|mDNS 服务|
|[UDP 通信](request/UDP)|UDP 通信|

### 页面和路由

| API                                             | 说明                                                                         |
| :---------------------------------------------- | :--------------------------------------------------------------------------- |
| [uni.navigateTo](router?id=navigateto)     | 保留当前页面，跳转到应用内的某个页面，使用 uni.navigateBack 可以返回到原页面 |
| [uni.redirectTo](router?id=redirectto)     | 关闭当前页面，跳转到应用内的某个页面                                         |
| [uni.reLaunch](router?id=relaunch)         | 关闭所有页面，打开到应用内的某个页面                                         |
| [uni.switchTab](router?id=switchtab)       | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面                             |
| [uni.navigateBack](router?id=navigateback) | 关闭当前页面，返回上一页面或多级页面                                         |
| [EventChannel](router.md#event-channel) | 页面间事件通信通道                                    |
| [preloadPage](preload-page) | 预加载页面，是一种性能优化技术。被预载的页面，在打开时速度更快。                                         |
| [窗口动画](router.md#animation) | 窗口的显示/关闭动画效果，支持在 API、组件、pages.json 中配置                                         |
|页面|-|
@| API | 说明 |
@| :-- | :-- |
@| [getCurrentPages](window/window.md) | 函数用于获取当前页面栈的实例                                       |
@| [$getAppWebview](window/window.md#getappwebview) | 当前webview的对象实例                                     |
@| [$vm](window/window.md#vm) | 当前页面的 Vue 实例                                    |
|[页面通讯](window/communication)|$emit、$on、$off、$once|
|subNVue 原生子窗体|-|
@| API | 说明 |
@| :-- | :-- |
@| [getSubNVueById](window/subNVues.md#app-getsubnvuebyid) | 通过 ID 获取 subNVues 原生子窗体的实例 |
@| [$getCurrentSubNVue](window/subNVues.md#app-getcurrentsubnvue) | 在一个subnvue窗体的nvue页面代码中，获取当前 subNVues 原生子窗体的实例。 |
@| [subNVue.show](window/subNVues.md#subnvue-show) | 显示原生子窗体 |
@| [subNVue.hide](window/subNVues.md#subnvue-hide) | 隐藏原生子窗体 |
@| [subNVue.setStyle](window/subNVues.md#subnvue-setstyle) | 设置原生子窗体的样式 |
@| [subNVue.postMessage](window/subNVues.md#subnvue-postmessage) | 发送消息，此通讯方式已过时，请使用`uni.$emit`进行通讯，[参考](/tutorial/page.md#emit) |
@| [subNVue.onMessage](window/subNVues.md#subnvue-onmessage) | 监听消息，此通讯方式已过时，请使用`uni.$on`进行通讯，[参考](/tutorial/page.md#on) |

### 数据缓存

| API                                                             | 说明                   |
| :-------------------------------------------------------------- | :--------------------- |
| [uni.getStorage](storage/storage?id=setstorage)                 | 获取本地数据缓存       |
| [uni.getStorageSync](storage/storage?id=setstoragesync)         | 获取本地数据缓存       |
| [uni.setStorage](storage/storage?id=getstorage)                 | 设置本地数据缓存       |
| [uni.setStorageSync](storage/storage?id=getstoragesync)         | 设置本地数据缓存       |
| [uni.getStorageInfo](storage/storage?id=getstorageinfo)         | 获取本地缓存的相关信息 |
| [uni.getStorageInfoSync](storage/storage?id=getstorageinfosync) | 获取本地缓存的相关信息 |
| [uni.removeStorage](storage/storage?id=removestorage)           | 删除本地缓存内容       |
| [uni.removeStorageSync](storage/storage?id=removestoragesync)   | 删除本地缓存内容       |
| [uni.clearStorage](storage/storage?id=clearstorage)             | 清理本地数据缓存       |
| [uni.clearStorageSync](storage/storage?id=clearstoragesync)     | 清理本地数据缓存       |

### 位置

|API|说明|
| :-- | :-- |
|获取位置|-|
@| API                                                       | 说明             |
@| :-------------------------------------------------------- | :--------------- |
@| [uni.getLocation](location/location?id=getlocation)       | 获取当前位置     |
@| [uni.chooseLocation](location/location?id=chooselocation) | 打开地图选择位置 |
|查看位置|-|
@| API                                                        | 说明         |
@| :--------------------------------------------------------- | :----------- |
@| [uni.openLocation](location/open-location?id=openlocation) | 打开内置地图 |
|位置更新|-|
@| API                                                        | 说明         |
@| :--------------------------------------------------------- | :----------- |
@| [uni.onLocationChange](location/location-change.md) | 监听实时地理位置变化事件 |
@| [uni.offLocationChange](location/location-change.md#offlocationchange) | 移除实时地理位置变化事件的监听函数。 |
@| [uni.onLocationChangeError](location/location-change.md#onlocationchangeerror) | 监听持续定位接口返回失败时触发。 |
@| [uni.offLocationChangeError](location/location-change.md#offlocationchangeerror) | 取消注册位置更新错误回调。 |
@| [uni.startLocationUpdate](location/location-change.md#startlocationupdate) | 开启应用进入前台时接收位置消息。|
@| [uni.stopLocationUpdate](location/location-change.md#stoplocationupdate) | 关闭监听实时位置变化，前后台都停止消息接收。|
@| [uni.startLocationUpdateBackground](location/location-change.md#startlocationupdatebackground) | 开始监听实时地理位置信息变化事件，应用进入前后台时均接收实时地理位置信息。|
|地图组件控制|-|
@| API                                                      | 说明         |
@| :------------------------------------------------------- | :----------- |
@| [uni.createMapContext](location/map?id=createmapcontext) | 地图组件控制 |


### 媒体

|API|说明|
| :-- | :-- |
|图片|-|
@| API | 说明 |
@| :------------------------------------------------------------------ | :----------------------- |
@| [uni.chooseImage](media/image?id=chooseimage)                       | 从相册选择图片，或者拍照 |
@| [uni.previewImage](media/image?id=unipreviewimageobject)            | 预览图片                 |
@| [uni.closePreviewImage](media/image?id=closepreviewimage)           | 关闭预览图片             |
@| [uni.getImageInfo](media/image?id=getimageinfo)                     | 获取图片信息             |
@| [uni.saveImageToPhotosAlbum](media/image?id=saveimagetophotosalbum) | 保存图片到系统相册       |
@| [uni.compressImage](media/image?id=compressimage) | 压缩图片接口，可选压缩质量 |
|文件|-|
@| API | 说明 |
@| :----------------------------------------- | :------------- |
@| [uni.chooseFile](media/file?id=chooseFile) | 从本地选择文件 |
|录音管理|-|
@| API | 说明 |
@| :--------------------------------------------- | :------- |
@| [uni.getRecorderManager](media/record-manager) | 录音管理 |
|背景音频播放管理|-|
@| API | 说明 |
@| :-------------------------------------------------------------- | :--------------- |
@| [uni.getBackgroundAudioManager](media/background-audio-manager) | 背景音频播放管理 |
|音频组件管理|-|
@| API | 说明 |
@| :-------------------------------------------------------------- | :--------------- |
@| [uni.createInnerAudioContext](media/audio-context) | 音频组件管理 |
|视频|-|
@| API | 说明 |
@| :----------------------------------------------------------------------- | :--------------------------------- |
@| [uni.chooseVideo](media/video?id=choosevideo)                            | 从相册选择视频，或者拍摄           |
@| [uni.chooseMedia](media/video?id=choosemedia)                            | 拍摄或从手机相册中选择图片或视频。 |
@| [uni.saveVideoToPhotosAlbum](media/video?id=savevideotophotosalbum)      | 保存视频到系统相册                 |
@| [uni.getVideoInfo](media/video?id=getvideoinfo)      | 获取视频详细信息                 |
@| [uni.compressVideo](media/video?id=compressvideo)      | 压缩视频接口。                 |
@| [uni.openVideoEditor](media/video?id=openvideoeditor)      | 打开视频编辑器                 |
|视频组件管理|-|
@| API | 说明 |
@| :-- | :-- |
@| [uni.createVideoContext](media/video-context?id=createvideocontext) | 视频组件管理                       |
|相机组件管理|-|
@| API | 说明 |
@| :-- | :-- |
@| [uni.createCameraContext](media/camera-context.md) | 相机组件管理 |
|直播组件管理|-|
@| API | 说明 |
@| :-- | :-- |
@| [uni.createLivePlayerContext](media/live-player-context.md) | 直播组件管理 |
@| [uni.createLivePusherContext](media/live-player-context.md#createlivepushercontext) | 创建 live-pusher 上下文 livePusherContext 对象 |
|富文本|-|
@| API | 说明 |
@| :-- | :-- |
@| [editorContext](media/editor-context.md) | 富文本|
|音视频合成|-|
@| API | 说明 |
@| :-- | :-- |
@| [uni.createMediaContainer](media/media-container.md) | 创建音视频处理容器，最终可将容器中的轨道合成一个视频|

### 设备


|系统|-|
| :--- | :--- |
@| API |说明|
@| :-- | :-- |
@|[uni.getSystemInfo](system/info.md)| 异步获取系统信息 |
@|[uni.getDeviceInfo](system/getDeviceInfo.md)| 获取设备基础信息 |
@|[uni.getWindowInfo](system/getWindowInfo.md)| 获取窗口信息 |
@|[uni.getAppBaseInfo](system/getAppBaseInfo.md)| 获取微信 APP 基础信息 |
@|[uni.getAppAuthorizeSetting](system/getappauthorizesetting.md)| 获取 APP 授权设置 |
@|[uni.getSystemSetting](system/getsystemsetting.md)| 获取设备设置 |
@|[uni.openAppAuthorizeSetting](system/openappauthorizesetting.md)| 跳转系统授权管理页 |
|[uni.createRequestPermissionListener](system/create-request-permission-listener.md)| 创建一个监听权限申请 |
|[uni.onMemoryWarning](system/memory.md)| 内存 |
|网络状态| - |
@| API |说明|
@| :-- | :-- |
@| [uni.getNetworkType](system/network?id=getnetworktype)                 | 获取网络类型         |
@| [uni.onNetworkStatusChange](system/network?id=onnetworkstatuschange)   | 监听网络状态变化     |
@| [uni.offNetworkStatusChange](system/network?id=offnetworkstatuschange) | 取消监听网络状态变化 |
|系统主题 | - |
@| API |说明|
@| :-- | :-- |
@| [uni.onThemeChange](system/accelerometer?id=onaccelerometerchange)   | 监听系统主题状态变化     |
@| [uni.offThemeChange](system/theme.html#offthemechange) | 取消监听系统主题状态变化 |
|罗盘|-|
|加速度计| - |
@| API |说明|
@| :-- | :-- |
@| [uni.onAccelerometerChange](system/accelerometer?id=onaccelerometerchange)   | 监听加速度数据     |
@| [uni.offAccelerometerChange](system/accelerometer?id=offaccelerometerchange) | 取消监听加速度数据 |
@| [uni.startAccelerometer](system/accelerometer?id=startaccelerometer)         | 开始监听加速度数据 |
@| [uni.stopAccelerometer](system/accelerometer?id=stopaccelerometer)           | 停止监听加速度数据 |
|罗盘|-|
@| API |说明|
@| :-- | :-- |
@| [uni.onCompassChange](system/compass?id=oncompasschange)   | 监听罗盘数据     |
@| [uni.offCompassChange](system/compass?id=offcompasschange) | 取消监听罗盘数据 |
@| [uni.startCompass](system/compass?id=startcompass)         | 开始监听罗盘数据 |
@| [uni.stopCompass](system/compass?id=stopcompass)           | 停止监听罗盘数据 |
|陀拨打电话|-|
@| API |说明|
@| :-- | :-- |
@| [uni.onGyroscopeChange](system/gyroscope?id=ongyroscopechange) | 监听陀螺仪数据     |
@| [uni.startGyroscope](system/gyroscope?id=startgyroscope)       | 开始监听陀螺仪数据 |
@| [uni.stopGyroscope](system/gyroscope?id=stopgyroscope)         | 停止监听陀螺仪数据 |
| 拨打电话 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.makePhoneCall](system/phone?id=makephonecall) | 拨打电话 |
| 扫码振动 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.scanCode](system/barcode?id=scancode) | 扫码 |
| 剪贴板 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.setClipboardData](system/clipboard?id=setclipboarddata) | 设置剪贴板内容 |
@| [uni.getClipboardData](system/clipboard?id=getclipboarddata) | 获取剪贴板内容 |
| 屏幕亮度 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.setScreenBrightness](system/brightness?id=setscreenbrightness) | 设置屏幕亮度         |
@| [uni.getScreenBrightness](system/brightness?id=getscreenbrightness) | 获取屏幕亮度         |
@| [uni.setKeepScreenOn](system/brightness?id=setkeepscreenon)         | 设置是否保持常亮状态 |
| 用户截屏事件 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.onUserCaptureScreen](system/capture-screen) | 监听用户截屏事件 |
| 振动 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.vibrate](system/vibrate?id=vibrate)           | 使手机发生振动           |
@| [uni.vibrateLong](system/vibrate?id=vibratelong)   | 使手机发生较长时间的振动 |
@| [uni.vibrateShort](system/vibrate?id=vibrateshort) | 使手机发生较短时间的振动 |
| 手机联系人 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.addPhoneContact](system/contact?id=addphonecontact) | 添加手机通讯录 |
| 蓝牙 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.openBluetoothAdapter](system/bluetooth?id=openbluetoothadapter)                     | 初始化蓝牙模块                     |
@| [uni.startBluetoothDevicesDiscovery](system/bluetooth?id=startbluetoothdevicesdiscovery) | 搜寻附近的蓝牙外围设备             |
@| [uni.onBluetoothDeviceFound](system/bluetooth?id=onbluetoothdevicefound)                 | 监听寻找到新设备的事件             |
@| [uni.stopBluetoothDevicesDiscovery](system/bluetooth?id=stopbluetoothdevicesdiscovery)   | 停止搜寻                           |
@| [uni.onBluetoothAdapterStateChange](system/bluetooth?id=onbluetoothadapterstatechange)   | 监听蓝牙适配器状态变化事件         |
@| [uni.getConnectedBluetoothDevices](system/bluetooth?id=getconnectedbluetoothdevices)     | 根据 uuid 获取处于已连接状态的设备 |
@| [uni.getBluetoothDevices](system/bluetooth?id=getbluetoothdevices)                       | 获取已发现的蓝牙设备               |
@| [uni.getBluetoothAdapterState](system/bluetooth?id=getbluetoothadapterstate)             | 获取本机蓝牙适配器状态             |
@| [uni.closeBluetoothAdapter](system/bluetooth?id=closebluetoothadapter)                   | 关闭蓝牙模块                       |
| 低功耗蓝牙 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.writeBLECharacteristicValue](system/ble?id=writeblecharacteristicvalue)               | 向低功耗蓝牙设备特征值中写入二进制数据                 |
@| [uni.readBLECharacteristicValue](system/ble?id=readblecharacteristicvalue)                 | 读取低功耗蓝牙设备的特征值的二进制数据值               |
@| [uni.onBLEConnectionStateChange](system/ble?id=onbleconnectionstatechange)                 | 监听低功耗蓝牙连接状态的改变事件                       |
@| [uni.onBLECharacteristicValueChange](system/ble?id=onblecharacteristicvaluechange)         | 监听低功耗蓝牙设备的特征值变化事件                     |
@| [uni.notifyBLECharacteristicValueChange](system/ble?id=notifyblecharacteristicvaluechange) | 启用蓝牙低功耗设备特征值变化时的 notify 功能，订阅特征 |
@| [uni.getBLEDeviceServices](system/ble?id=getbledeviceservices)                             | 获取蓝牙设备所有服务(service)                          |
@| [uni.getBLEDeviceCharacteristics](system/ble?id=getbledevicecharacteristics)               | 获取蓝牙设备某个服务中所有特征值(characteristic)       |
@| [uni.createBLEConnection](system/ble?id=createbleconnection)                               | 连接低功耗蓝牙设备                                     |
@| [uni.closeBLEConnection](system/ble?id=closebleconnection)                                 | 断开与低功耗蓝牙设备的连接                             || 低功耗蓝牙 |-|
| iBeacon |-|
@| API |说明|
@| :-- | :-- |
@| [uni.onBeaconServiceChange](system/ibeacon?id=onbeaconservicechange) | 监听 iBeacon 服务状态变化事件   |
@| [uni.onBeaconUpdate](system/ibeacon?id=onbeaconupdate)               | 监听 iBeacon 设备更新事件       |
@| [uni.getBeacons](system/ibeacon?id=getbeacons)                       | 获取所有已搜索到的 iBeacon 设备 |
@| [uni.startBeaconDiscovery](system/ibeacon?id=startbeacondiscovery)   | 停止搜索附近的 iBeacon 设备     |
@| [uni.stopBeaconDiscovery](system/ibeacon?id=stopbeacondiscovery)     | 开始搜索附近的 iBeacon 设备     |
|[Wi-Fi](system/wifi.md)| WiFi |
|[电量](system/batteryInfo.md)| 电量 |
|[NFC](system/nfc.md)| NFC |
|[设备方向](system/deviceMotion.md)| 设备方向 |
| 生物认证 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.startSoterAuthentication](system/authentication?id=startsoterauthentication)                   | 开始生物认证                             |
@| [uni.checkIsSupportSoterAuthentication](system/authentication?id=checkissupportsoterauthentication) | 获取本机支持的生物认证方式               |
@| [uni.checkIsSoterEnrolledInDevice](system/authentication?id=checkissoterenrolledindevice)           | 获取设备内是否录入如指纹等生物信息的接口 |

### 键盘

| API                                                                  | 说明                                                     |
| :------------------------------------------------------------------- | :------------------------------------------------------- |
| [uni.hideKeyboard](key.md#hidekeyboard)                       | 隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。 |
| [uni.onKeyboardHeightChange](key.md#onkeyboardheightchange)   | 监听键盘高度变化                                         |
| [uni.offKeyboardHeightChange](key.md#offkeyboardheightchange) | 取消监听键盘高度变化事件                                 |
| [uni.getSelectedTextRange](key?id=getselectedtextrange)         | 在 input、textarea 等 focus 之后，获取输入框的光标位置   |

### 界面

| API | 说明 |
| :-- | :-- |
| 交互反馈 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.showToast](ui/prompt?id=showtoast)             | 显示提示框     |
@| [uni.showLoading](ui/prompt?id=showloading)         | 显示加载提示框 |
@| [uni.hideToast](ui/prompt?id=hidetoast)             | 隐藏提示框     |
@| [uni.hideLoading](ui/prompt?id=hideloading)         | 隐藏加载提示框 |
@| [uni.showModal](ui/prompt?id=showmodal)             | 显示模态弹窗   |
@| [uni.showActionSheet](ui/prompt?id=showactionsheet) | 显示菜单列表   |
| 设置导航条 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.setNavigationBarTitle](ui/navigationbar?id=setnavigationbartitle)       | 设置当前页面标题   |
@| [uni.setNavigationBarColor](ui/navigationbar?id=setnavigationbarcolor)  | 设置页面导航条颜色 |
@| [uni.showNavigationBarLoading](ui/navigationbar?id=shownavigationbarloading) | 显示导航条加载动画 |
@| [uni.hideNavigationBarLoading](ui/navigationbar?id=hidenavigationbarloading) | 隐藏导航条加载动画 |
| 设置 TabBar |-|
@| API |说明|
@| :-- | :-- |
@| [uni.setTabBarItem](ui/tabbar?id=settabbaritem)         | 动态设置 tabBar 某一项的内容     |
@| [uni.setTabBarStyle](ui/tabbar?id=settabbarstyle)       | 动态设置 tabBar 的整体样式       |
@| [uni.hideTabBar](ui/tabbar?id=hidetabbar)               | 隐藏 tabBar                      |
@| [uni.showTabBar](ui/tabbar?id=showtabbar)               | 显示 tabBar                      |
@| [uni.setTabBarBadge](ui/tabbar?id=settabbarbadge)       | 为 tabBar 某一项的右上角添加文本 |
@| [uni.removeTabBarBadge](ui/tabbar?id=removetabbarbadge) | 移除 tabBar 某一项右上角的文本   |
@| [uni.showTabBarRedDot](ui/tabbar?id=showtabbarreddot)   | 显示 tabBar 某一项的右上角的红点 |
@| [uni.hideTabBarRedDot](ui/tabbar?id=hidetabbarreddot)   | 隐藏 tabBar 某一项的右上角的红点 |
| 背景 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.setBackgroundColor](ui/bgcolor?id=setbackgroundcolor)         | 动态设置窗口的背景色。                   |
@| [uni.setBackgroundTextStyle](ui/bgcolor?id=setbackgroundtextstyle) | 动态设置下拉背景字体、loading 图的样式。 |
| 动画 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.createAnimation](ui/animation?id=createanimation) | 创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。 |
| 滚动 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.pageScrollTo](ui/scroll?id=pagescrollto) | 将页面滚动到目标位置。 |
| 窗口 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.onWindowResize](ui/window) | 监听窗口尺寸变化事件 |
@| [uni.offWindowResize](ui/window#offwindowresize) | 监听窗口尺寸变化事件 |
| 宽屏适配 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.getTopWindowStyle](ui/adapt) | 获取 topWindow 的样式 |
@| [uni.getLeftWindowStyle](ui/adapt#getleftwindowstyle) | 获取 leftWindow 的样式 |
@| [uni.getRightWindowStyle](ui/adapt#getrightwindowstyle) | 获取 rightWindow 的样式 |
@| [uni.setTopWindowStyle](ui/adapt#settopwindowstyle) | 设置 topWindow 的样式 |
@| [uni.setLeftWindowStyle](ui/adapt#setleftwindowstyle) | 设置 leftWindow 的样式 |
@| [uni.setRightWindowStyle](ui/adapt#setrightwindowstyle) | 设置 rightWindow 的样式 |
| 字体 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.loadFontFace](ui/font#loadfontface)           | 动态加载字体 |
@| [uni.rpx2px](ui/font#rpx2px)           | 将rpx单位值转换成px |
@| [uni.upx2px](ui/font#upx2px)           | 将upx单位值转换成px **已废弃** |
| 下拉刷新 |-|
@| API |说明|
@| :-- | :-- |
@| [onPullDownRefresh](ui/pulldown?id=onpulldownrefresh)           | 监听该页面用户下拉刷新事件 |
@| [uni.startPullDownRefresh](ui/pulldown?id=startpulldownrefresh) | 开始下拉刷新               |
@| [uni.stopPullDownRefresh](ui/pulldown?id=stoppulldownrefresh)   | 停止当前页面下拉刷新       |
| 节点信息 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.createSelectorQuery](ui/nodes-info?id=createselectorquery)                    | 创建查询请求           |
@| [selectorQuery.select](ui/nodes-info?id=selectorquery-对象的方法列表)         | 根据选择器选择单个节点 |
@| [selectorQuery.selectAll](ui/nodes-info?id=selectorquery-对象的方法列表)      | 根据选择器选择全部节点 |
@| [selectorQuery.selectViewport](ui/nodes-info?id=selectorquery-对象的方法列表) | 选择显示区域           |
@| [selectorQuery.exec](ui/nodes-info?id=selectorquery-对象的方法列表)           | 执行查询请求           |
@| [nodesRef.boundingClientRect](ui/nodes-info?id=nodesref-对象的方法列表)       | 获取布局位置和尺寸     |
@| [nodesRef.scrollOffset](ui/nodes-info?id=nodesref-对象的方法列表)             | 获取滚动位置           |
@| [nodesRef.fields](ui/nodes-info?id=nodesref-对象的方法列表)                   | 获取任意字段           |
| 节点布局相交状态 |-|
@| API |说明|
@| :-- | :-- |
@| [uni.createIntersectionObserver](ui/intersection-observer?id=createintersectionobserver)                        | 创建 IntersectionObserver 对象 |
@| [intersectionObserver.relativeTo](ui/intersection-observer?id=intersectionobserver-对象的方法列表)         | 指定参照节点                   |
@| [intersectionObserver.relativeToViewport](ui/intersection-observer?id=intersectionobserver-对象的方法列表) | 指定页面显示区域作为参照区域   |
@| [intersectionObserver.observe](ui/intersection-observer?id=intersectionobserver-对象的方法列表)            | 指定目标节点并开始监听         |
@| [intersectionObserver.disconnect](ui/intersection-observer?id=intersectionobserver-对象的方法列表)         | 停止监听                       |
| 媒体查询 |-|
@| API |说明|
@| :-- | :-- |
@|[uni.createMediaQueryObserver](ui/media-query-observer)|创建并返回一个 MediaQueryObserver 对象实例|
| 菜单 |-|
@| API |说明|
@| :-- | :-- |
@|[getMenuButtonBoundingClientRect](ui/menuButton)|获取右上角悬浮按钮布局|
| 语言 |-|
@| API |说明|
@| :-- | :-- |
@|[uni.getLocale](ui/locale)|获取当前设置的语言|
@|[uni.setLocale](ui/locale#setlocale)|设置当前语言|
@|[uni.onLocaleChange](ui/locale#onlocalechange)|用于监听应用语言切换|

### 文件

| API                                                   | 说明                 |
| :---------------------------------------------------- | :------------------- |
| [uni.saveFile](file/file?id=savefile)                 | 保存文件             |
| [uni.getSavedFileList](file/file?id=getsavedfilelist) | 获取已保存的文件列表 |
| [uni.getSavedFileInfo](file/file?id=getsavedfileinfo) | 获取已保存的文件信息 |
| [uni.removeSavedFile](file/file?id=removesavedfile)   | 删除已保存的文件信息 |
| [uni.getFileInfo](file/file?id=getfileinfo)      | 获取文件信息         |
| [uni.openDocument](file/file?id=opendocument)         | 打开文件             |
| [uni.getFileSystemManager](file/getFileSystemManager)         | 获取文件管理器             |

### 画布

| API |说明|
| :-- | :-- |
| [uni.createCanvasContext](canvas/createCanvasContext)   | 创建绘图上下文       |
| [uni.canvasToTempFilePath](canvas/canvasToTempFilePath) | 将画布内容保存成文件 |
| [uni.canvasGetImageData](canvas/canvasGetImageData)     | 获取画布图像数据     |
| [uni.canvasPutImageData](canvas/canvasPutImageData)     | 设置画布图像数据     |

### 组件上下文对象

| API |说明|
| :-- | :-- |
| [uni.createWebviewContext](create-webview-context)   | 创建 web-view 组件的上下文对象，用于操作 web-view 的行为       |

### 广告

| API                                             | 说明                                                             |
| :---------------------------------------------- | :--------------------------------------------------------------- |
| [激励视频广告](a-d/rewarded-video.md)    | 激励视频广告，是 cpm 收益最高的广告形式                          |
| [全屏视频广告](a-d/full-screen-video.md) | 全屏视频广告                                                     |
| [内容联盟广告](a-d/content-page.md)      | 内容联盟广告                                                     |
| [插屏广告](a-d/interstitial.md)          | 插屏广告                                                         |

### 第三方服务

| API                                                                  | 说明                                                            |
| :------------------------------------------------------------------- | :-------------------------------------------------------------- |
| [uni.getProvider](plugins/provider?id=getprovider)              | 获取服务供应商                                                  |
| [uni.login](plugins/login?id=login)                             | 登录                                                            |
| [uni.getUserInfo](plugins/login?id=getuserinfo)                 | 获取用户信息                                                    |
| [uni.getuserprofile](plugins/login?id=getuserprofile)           | 获取用户信息。每次请求都会弹出授权窗口，用户同意后返回 userInfo |
| [uni.checkSession](plugins/login?id=checkSession)               | 检查登录状态是否过期                                            |
| [uni.preLogin](plugins/login?id=prelogin)                       | 预登录                                                          |
| [uni.closeAuthView](plugins/login?id=closeauthview)             | 关闭一键登录页面                                                |
| [uni.getCheckBoxState](plugins/login?id=getcheckboxstate)       | 获取一键登录条款勾选框状态                                      |
| [uni.getUniverifyManager](plugins/login?id=getUniverifyManager) | 获取全局唯一的一键登录管理器 univerifyManager                   |
| [uni.share](plugins/share?id=share)                             | 分享                                                            |
| [uni.shareWithSystem](plugins/share?id=sharewithsystem)         | 使用系统分享                                                    |
| [uni.requestPayment](plugins/payment?id=requestpayment)         | 支付|
| [uni.requestVirtualPayment](plugins/virtualPayment)         | 虚拟支付|
| [uni.requestMerchantTransfer](plugins/request-merchant-transfer)         | 商家转账用户确认模式下，拉起页面请求用户确认收款|
| [uni.getPushClientId](plugins/push#getpushclientid)              | 获取客户端唯一的推送标识     |
| [uni.onPushMessage](plugins/push?id=onpushmessage)              | 启动监听推送消息事件     |
| [uni.offPushMessage](plugins/push?id=offpushmessage)          | 关闭推送消息监听事件  |
| [uni.getChannelManager](plugins/push#getchannelmanager)          | 获取通知渠道管理器，Android 8系统以上才可以设置通知渠道  |
| [uni.createPushMessage](plugins/push#createpushmessage)          | 创建本地通知栏消息（HBuilderX 3.5.2起支持）  |
| [uni.getFacialRecognitionMetaInfo](plugins/facialRecognitionVerify)          | 获取实人认证设备信息  |
| [uni.startFacialRecognitionVerify](plugins/facialRecognitionVerify#startfacialrecognitionverify)          | 实人认证  |


### 平台扩展

| API                                                                         | 说明              |
| :-------------------------------------------------------------------------- | :---------------- |
| [uni.requireNativePlugin](/plugin/native-plugin.md#requirenativeplugin) | 引入 App 原生插件 |

### 其他

#### 授权

| API                                                | 说明                   |
| :------------------------------------------------- | :--------------------- |
| [uni.authorize](other/authorize?id=authorize) | 提前向用户发起授权请求 |

#### 设置

| API                                                  | 说明                                               |
| :--------------------------------------------------- | :------------------------------------------------- |
| [uni.openSetting](other/setting?id=opensetting) | 调起客户端小程序设置界面，返回用户设置的操作结果。 |
| [uni.getSetting](other/setting?id=getsetting)   | 获取用户的当前设置。                               |

#### 收货地址

| API                                                             | 说明             |
| :-------------------------------------------------------------- | :--------------- |
| [uni.chooseAddress](other/choose-address?id=chooseaddress) | 获取用户收货地址 |

#### 获取发票抬头

| API                                                                      | 说明                                                  |
| :----------------------------------------------------------------------- | :---------------------------------------------------- |
| [uni.chooseInvoiceTitle](other/invoice-title?id=chooseinvoicetitle) | 选择用户的发票抬头，需要用户授权 scope.invoiceTitle。 |

#### 小程序跳转

| API                                                                                   | 说明                                                                     |
| :------------------------------------------------------------------------------------ | :----------------------------------------------------------------------- |
| [uni.navigateToMiniProgram](other/open-miniprogram?id=navigatetominiprogram)     | 打开另一个小程序。                                                       |
| [uni.navigateBackMiniProgram](other/open-miniprogram?id=navigatebackminiprogram) | 跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功。 |

#### 模板消息

| API                                                                                                      | 说明                                                                                                              |
| :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| [addTemplate](other/template?id=addtemplate)                                                        | 组合模板并添加至帐号下的个人模板库。                                                                              |
| [deleteTemplate](other/template?id=deletetemplate)                                                  | 删除帐号下的某个模板。                                                                                            |
| [getTemplateLibraryById](other/template?id=gettemplatelibrarybyid)                                  | 获取模板库某个模板标题下关键词库。                                                                                |
| [getTemplateLibraryList](other/template?id=gettemplatelibrarylist)                                  | 获取 APP 模板库标题列表                                                                                           |
| [getTemplateList](other/template?id=gettemplatelist)                                                | 获取帐号下已存在的模板列表。                                                                                      |
| [sendTemplateMessage](other/template?id=sendtemplatemessage)                                        | 发送模板消息                                                                                                      |
| [alipay.open.app.mini.templatemessage.send](other/template?id=alipayopenappminitemplatemessagesend) | 支付宝小程序通过 openapi 给用户触达消息，主要为支付后的触达（通过消费 id）和用户提交表单后的触达（通过 formId）。 |

#### 小程序更新

| API                                                           | 说明                                                                   |
| :------------------------------------------------------------ | :--------------------------------------------------------------------- |
| [uni.getUpdateManager](other/update?id=getupdatemanager) | 返回全局唯一的版本更新管理器对象： updateManager，用于管理小程序更新。 |

#### 调试

| API                                                                 | 说明                                           |
| :------------------------------------------------------------------ | :--------------------------------------------- |
| [uni.setEnableDebug](other/set-enable-debug?id=setenabledebug) | 设置是否打开调试开关。此开关对正式版也能生效。 |

#### 获取第三方平台数据

| API                                                                  | 说明                             |
| :------------------------------------------------------------------- | :------------------------------- |
| [uni.getExtConfig](other/get-extconfig?id=getextconfig)         | 获取第三方平台自定义的数据字段。 |
| [uni.getExtConfigSync](other/get-extconfig?id=getextconfigsync) | uni.getExtConfig 的同步版本。    |

因文档同步原因，本页面列出的 API 可能不全。如在本文未找到相关 API，可以在左侧树中寻找或使用文档右上角的搜索功能。
