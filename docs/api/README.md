`uni-app`的 js API 由标准 ECMAScript 的 js API 和 uni 扩展 API 这两部分组成。
The js API of `uni-app` consists of two parts: the standard ECMAScript js API and the uni extension API.

标准 ECMAScript 的 js 仅是最基础的 js。浏览器基于它扩展了 window、document、navigator 等对象。小程序也基于标准 js 扩展了各种 wx.xx、my.xx、swan.xx 的 API。node 也扩展了 fs 等模块。
The js of standard ECMAScript is only the most basic js. The browser extends window, document, navigator and other objects based on it. The applet also extends various wx.xx, my.xx, swan.xx APIs based on standard js. Node also extends modules like fs.

uni-app 基于 ECMAScript 扩展了 uni 对象，并且 API 命名与小程序保持兼容。
uni-app extends the uni object based on ECMAScript, and the API naming remains compatible with applets.

## 标准 js 和浏览器 js 的区别
## Difference between standard js and browser js

`uni-app`的 js 代码，web端运行于浏览器中。非web端（包含小程序和 App），Android 平台运行在 v8 引擎中，iOS 平台运行在 iOS 自带的 jscore 引擎中，都没有运行在浏览器或 webview 里。
The js code of `uni-app`, the web side runs in the browser. For the non-web side (including applets and apps), the Android platform runs in the v8 engine, the iOS platform runs in the jscore engine that comes with iOS, and neither runs in the browser or webview.

非web端，虽然不支持 window、document、navigator 等浏览器的 js API，但也支持标准 ECMAScript。
On the non-web side, although it does not support the js API of browsers such as window, document, and navigator, it also supports standard ECMAScript.

请注意不要把浏览器里的 js 等价于标准 js。
Be careful not to equate in-browser js with standard js.

所以 uni-app 的web端，一样支持标准 js，支持 if、for 等语法，支持字符串、数字、时间、布尔值、数组、自定义对象等变量类型及各种处理方法。仅仅是不支持 window、document、navigator 等浏览器专用对象。
Therefore, the web side of uni-app also supports standard js, supports syntax such as if and for, and supports variable types such as strings, numbers, time, Boolean values, arrays, custom objects, and various processing methods. It's just that browser-specific objects such as window, document, and navigator are not supported.

## 各端特色 API 调用
## Featured API calls on each side

除了 uni-app 框架内置的跨端 API，各端自己的特色 API 也可通过[条件编译](https://uniapp.dcloud.io/platform)自由使用。
In addition to the built-in cross-end API of the uni-app framework, each end's own characteristic API can also be freely used through [conditional compilation](https://uniapp.dcloud.io/platform).

各端特色 API 规范参考各端的开发文档。其中 App 端的 JS API 参考[html5plus.org](https://www.html5plus.org/doc/h5p.html)；uni-app 也支持通过扩展原生插件来丰富 App 端的开发能力，具体参考[插件开发文档](http://ask.dcloud.net.cn/article/35408)
For the specific API specifications of each terminal, refer to the development documents of each terminal. The JS API on the App side refers to [html5plus.org](https://www.html5plus.org/doc/h5p.html); uni-app also supports the extension of native plugins to enrich the development capabilities of the App side. For details, refer to [Plugin Development Documentation](http://ask.dcloud.net.cn/article/35408)

各平台的 API 新增，不需要 uni-app 升级，开发者就可以直接使用。
The API of each platform is newly added, and developers can use it directly without uni-app upgrade.

## 说明
## Instruction

- uni.on 开头的 API 是监听某个事件发生的 API 接口，接受一个 CALLBACK 函数作为参数。当该事件触发时，会调用 CALLBACK 函数。
- The APIs beginning with uni.on are used as API interfaces to listen to certain events and accept a CALLBACK function as a parameter. When that event is triggered, the CALLBACK function is called.
- 如未特殊约定，其他 API 接口都接受一个 OBJECT 作为参数。
- Unless otherwise specified, other API interfaces accept an OBJECT as a parameter.
- OBJECT 中可以指定 success，fail，complete 来接收接口调用结果。
- In the OBJECT, success, fail and complete can be specified in the reception of the interface call result.
- **平台差异说明**若无特殊说明，则表示所有平台均支持。
- **Platform difference description**Unless otherwise specified, it means that all platforms support it.
- 异步 API 会返回 `errMsg` 字段，同步 API 则不会。比如：`getSystemInfoSync` 在返回结果中不会有 `errMsg`。
- Async APIs will return the `errMsg` field, synchronous APIs will not. For example: `getSystemInfoSync` will not have `errMsg` in the returned result.

## API `Promise 化`
## API `Promisify`

1. 具体 API `Promise 化` 的策略：
1. Specific strategy of API `Promisify`:

   - 异步的方法，如果不传入 success、fail、complete 等 callback 参数，将以 Promise 返回数据。例如：`uni.getImageInfo()`
   - For the asynchronous method, if no callback parameter such as success, fail or complete is passed in, the data will be returned as Promise. E.g.: `uni.getImageInfo()`
   - 异步的方法，且有返回对象，如果希望获取返回对象，必须至少传入一项 success、fail、complete 等 callback 参数。例如：
   - For asynchronous method with return object, at least one callback parameter of success, fail or complete should be passed in to obtain the return object. E.g.:

     ```js
      // 正常使用
      // Normal use
      const task = uni.connectSocket(
       success(res){
        console.log(res)
       }
      )

      // Promise 化
      // Promise
      uni.connectSocket().then(res => {
        // 此处即为正常使用时 success 回调的 res
        // Here is the res of the success callback in normal use
        // uni.connectSocket() 正常使用时是会返回 task 对象的，如果想获取 task ，则不要使用 Promise 化
        // uni.connectSocket() will return the task object when used normally. If you want to get the task, don't use Promise
        console.log(res)
      })
     ```

2. 不进行 `Promise 化` 的 API：
2. API that does not proceed `Promisify`:
   - 同步的方法（即以 sync 结束）。例如：`uni.getSystemInfoSync()`
   - Synchronization method (ended with sync). E.g.: `uni.getSystemInfoSync()`
   - 以 create 开头的方法。例如：`uni.createMapContext()`
   - Method beginning with create. E.g.: `uni.createMapContext()`
   - 以 manager 结束的方法。例如：`uni.getBackgroundAudioManager()`
   - Method ending with manager. E.g.: `uni.getBackgroundAudioManager()`

#### Vue 2 和 Vue 3 的 API `Promise 化`
#### Vue 2 and Vue 3 API `promise`

> Vue 2 和 Vue 3 项目中 `API Promise 化` 返回格式不一致，以下为 `不同点` 和 `返回格式互相转换`
> The return format of `API Promise` in Vue 2 and Vue 3 projects is inconsistent. The following is the `difference` and `return format conversion`

- 不同点
- difference
  - Vue2 对部分 API 进行了 Promise 封装，返回数据的第一个参数是错误对象，第二个参数是返回数据。此时使用 `catch` 是拿不到报错信息的，因为内部对错误进行了拦截。
  - Vue2 encapsulates some APIs with promises. The first parameter of the returned data is the error object, and the second parameter is the return data. At this time, using `catch` will not get the error message, because the error is intercepted internally.
  - Vue3 对部分 API 进行了 Promise 封装，调用成功会进入 `then 方法` 回调。调用失败会进入 `catch 方法` 回调
  - Vue3 encapsulates some APIs with promises, and the call will enter the `then method` callback if the call is successful. If the call fails, it will enter the `catch method` callback

  **使用示例：**
  **Use example:**

  ::: preview

  > Vue2

  ```js
  // 默认方式
  // default method
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
      // data is an array
      // 数组第一项为错误信息 即为 fail 回调
      // The first item of the array is the error message, which is the fail callback
      // 第二项为返回数据
      // The second item is the return data
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
  // default method
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
  // call using Promise then/catch
  uni
    .request({
      url: "https://www.example.com/request",
    })
    .then((res) => {
      // 此处的 res 参数，与使用默认方式调用时 success 回调中的 res 参数一致
      // The res parameter here is the same as the res parameter in the success callback when the default method is used
      console.log(res.data);
    })
    .catch((err) => {
      // 此处的 err 参数，与使用默认方式调用时 fail 回调中的 err 参数一致
      // The err parameter here is the same as the err parameter in the fail callback when the default method is used
      console.error(err);
    });

  // 使用 Async/Await 方式调用
  // use Async/Await method to call
  async function request() {
    try {
      var res = await uni.request({
        url: "https://www.example.com/request",
      });
      // 此处的 res 参数，与使用默认方式调用时 success 回调中的 res 参数一致
      // The res parameter here is the same as the res parameter in the success callback when the default method is used
      console.log(res);
    } catch (err) {
      // 此处的 err 参数，与使用默认方式调用时 fail 回调中的 err 参数一致
      // The err parameter here is the same as the err parameter in the fail callback when the default method is used
      console.error(err);
    }
  }
  ```

  :::

- 返回格式互相转换
- Convert between return formats

::: preview

> Vue2

```js
// Vue 2 转 Vue 3, 在 main.js 中写入以下代码即可
// Vue 2 to Vue 3, write the following code in main.js
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
// Vue 3 to Vue 2, write the following code in main.js
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
## API list

#### 基础
#### Base

##### 日志打印
##### log print

| API                                            | 说明                                  |
| API | Description |
| :--------------------------------------------- | :------------------------------------ |
| [日志打印](log)                                | 向控制台打印日志信息                  |
| [Log print](log) | Print log information to the console |
| [定时器](timer)                                | 在定时到期以后执行注册的回调函数      |
| [timer](timer) | Execute the registered callback function after the timer expires |
| [uni.base64ToArrayBuffer](base64ToArrayBuffer) | 将 Base64 字符串转成 ArrayBuffer 对象 |
| [uni.base64ToArrayBuffer](base64ToArrayBuffer) | Convert Base64 string to ArrayBuffer object |
| [uni.arrayBufferToBase64](arrayBufferToBase64) | 将 ArrayBuffer 对象转成 Base64 字符串 |
| [uni.arrayBufferToBase64](arrayBufferToBase64) | Convert ArrayBuffer object to Base64 string |
| [应用级事件](/api/application)                 | 监听应用事件                          |
| [Application-level events](/api/application) | Listen to application events |
| [拦截器](interceptor)                          | 拦截 Api 等调用并执行回调             |
| [Interceptor](interceptor) | Intercept calls such as Api and execute callbacks |
| [全局 API](global)                             | 可全局调用 Api                        |
| [Global API](global) | Api can be called globally |

#### 网络
#### Network

##### 发起请求
##### Initiating request

| API                                       | 说明         |
| API | Description |
| :---------------------------------------- | :----------- |
| [uni.request](request/request?id=request) | 发起网络请求 |
| [uni.request](request/request?id=request) | Initiate a network request |

##### 上传、下载
##### Upload and download

| API                                                      | 说明     |
| API | Description |
| :------------------------------------------------------- | :------- |
| [uni.uploadFile](request/network-file?id=uploadfile)     | 上传文件 |
| [uni.uploadFile](request/network-file?id=uploadfile) | upload file |
| [uni.downloadFile](request/network-file?id=downloadfile) | 下载文件 |
| [uni.downloadFile](request/network-file?id=downloadfile) | Download file |

##### WebSocket

| API                                                             | 说明                |
| API | Description |
| :-------------------------------------------------------------- | :------------------ |
| [uni.connectSocket](request/websocket?id=connectsocket)         | 创建 WebSocket 连接 |
| [uni.connectSocket](request/websocket?id=connectsocket) | Create a WebSocket connection |
| [uni.onSocketOpen](request/websocket?id=onsocketopen)           | 监听 WebSocket 打开 |
| [uni.onSocketOpen](request/websocket?id=onsocketopen) | Listen for WebSocket open |
| [uni.onSocketError](request/websocket?id=onsocketerror)         | 监听 WebSocket 错误 |
| [uni.onSocketError](request/websocket?id=onsocketerror) | Listen for WebSocket errors |
| [uni.sendSocketMessage](request/websocket?id=sendsocketmessage) | 发送 WebSocket 消息 |
| [uni.sendSocketMessage](request/websocket?id=sendsocketmessage) | Send WebSocket message |
| [uni.onSocketMessage](request/websocket?id=onsocketmessage)     | 接受 WebSocket 消息 |
| [uni.onSocketMessage](request/websocket?id=onsocketmessage) | Accept WebSocket messages |
| [uni.closeSocket](request/websocket?id=closesocket)             | 关闭 WebSocket 连接 |
| [uni.closeSocket](request/websocket?id=closesocket) | Close WebSocket connection |
| [uni.onSocketClose](request/websocket?id=onsocketclose)         | 监听 WebSocket 关闭 |
| [uni.onSocketClose](request/websocket?id=onsocketclose) | Listen for WebSocket close |

##### SocketTask

| API                                                                     | 说明                                  |
| API | Description |
| ----------------------------------------------------------------------- | ------------------------------------- |
| [SocketTask.send](/api/request/socket-task?id=sockettasksend)           | 通过 WebSocket 连接发送数据           |
| [SocketTask.send](/api/request/socket-task?id=sockettasksend) | Send data via WebSocket connection |
| [SocketTask.close](/api/request/socket-task?id=sockettaskclose)         | 关闭 WebSocket 连接                   |
| [SocketTask.close](/api/request/socket-task?id=sockettaskclose) | Close WebSocket connection |
| [SocketTask.onOpen](/api/request/socket-task?id=sockettaskonopen)       | 监听 WebSocket 连接打开事件           |
| [SocketTask.onOpen](/api/request/socket-task?id=sockettaskonopen) | Listen for WebSocket connection open events |
| [SocketTask.onClose](/api/request/socket-task?id=sockettaskonclose)     | 监听 WebSocket 连接关闭事件           |
| [SocketTask.onClose](/api/request/socket-task?id=sockettaskonclose) | Listen for WebSocket connection close events |
| [SocketTask.onError](/api/request/socket-task?id=sockettaskonerror)     | 监听 WebSocket 错误事件               |
| [SocketTask.onError](/api/request/socket-task?id=sockettaskonerror) | Listen for WebSocket error events |
| [SocketTask.onMessage](/api/request/socket-task?id=sockettaskonmessage) | 监听 WebSocket 接受到服务器的消息事件 |
| [SocketTask.onMessage](/api/request/socket-task?id=sockettaskonmessage) | Listen for the message event received by the WebSocket server |

#### 媒体
#### Media

##### 图片
##### Image

| API                                                                 | 说明                     |
| API | Description |
| :------------------------------------------------------------------ | :----------------------- |
| [uni.chooseImage](media/image?id=chooseimage)                       | 从相册选择图片，或者拍照 |
| [uni.chooseImage](media/image?id=chooseimage) | Choose an image from the album, or take a photo |
| [uni.previewImage](media/image?id=unipreviewimageobject)            | 预览图片                 |
| [uni.previewImage](media/image?id=unipreviewimageobject) | Preview image |
| [uni.closePreviewImage](media/image?id=closepreviewimage)           | 关闭预览图片             |
| [uni.closePreviewImage](media/image?id=closepreviewimage) | Close preview image |
| [uni.getImageInfo](media/image?id=getimageinfo)                     | 获取图片信息             |
| [uni.getImageInfo](media/image?id=getimageinfo) | Get image information |
| [uni.saveImageToPhotosAlbum](media/image?id=saveimagetophotosalbum) | 保存图片到系统相册       |
| [uni.saveImageToPhotosAlbum](media/image?id=saveimagetophotosalbum) | Save image to system album |

##### 文件
##### Document

| API                                        | 说明           |
| API | Description |
| :----------------------------------------- | :------------- |
| [uni.chooseFile](media/file?id=chooseFile) | 从本地选择文件 |
| [uni.chooseFile](media/file?id=chooseFile) | Choose file from local |

##### 录音管理
##### Recording Management

| API                                            | 说明     |
| API | Description |
| :--------------------------------------------- | :------- |
| [uni.getRecorderManager](media/record-manager) | 录音管理 |
| [uni.getRecorderManager](media/record-manager) | Recording management |

##### 背景音频播放管理
##### Background audio playback management

| API                                                             | 说明             |
| API | Description |
| :-------------------------------------------------------------- | :--------------- |
| [uni.getBackgroundAudioManager](media/background-audio-manager) | 背景音频播放管理 |
| [uni.getBackgroundAudioManager](media/background-audio-manager) | Background audio playback management |

##### 音频组件管理
##### Audio component management

| API                                                | 说明         |
| API | Description |
| :------------------------------------------------- | :----------- |
| [uni.createInnerAudioContext](media/audio-context) | 音频组件管理 |
| [uni.createInnerAudioContext](media/audio-context) | Audio component management |

##### 视频
##### Video

| API                                                                      | 说明                               |
| API | Description |
| :----------------------------------------------------------------------- | :--------------------------------- |
| [uni.chooseVideo](media/video?id=choosevideo)                            | 从相册选择视频，或者拍摄           |
| [uni.chooseVideo](media/video?id=choosevideo) | Choose video from album, or shoot |
| [uni.chooseMedia](media/video?id=choosemedia)                            | 拍摄或从手机相册中选择图片或视频。 |
| [uni.chooseMedia](media/video?id=choosemedia) | Capture or select a picture or video from your phone's camera roll. |
| [uni.saveVideoToPhotosAlbum](media/video?id=savevideotophotosalbum)      | 保存视频到系统相册                 |
| [uni.saveVideoToPhotosAlbum](media/video?id=savevideotophotosalbum) | Save video to system album |
| [uni.createVideoContext](/api/media/video-context?id=createvideocontext) | 视频组件管理                       |
| [uni.createVideoContext](/api/media/video-context?id=createvideocontext) | Video component management |

##### 相机组件管理
##### Camera component management

| API                                                | 说明         |
| API | Description |
| :------------------------------------------------- | :----------- |
| [uni.createCameraContext](media/camera-context.md) | 相机组件管理 |
| [uni.createCameraContext](media/camera-context.md) | Camera component management |

##### 直播组件管理
##### Live stream component management

| API                                                         | 说明         |
| API | Description |
| :---------------------------------------------------------- | :----------- |
| [uni.createLivePlayerContext](media/live-player-context.md) | 直播组件管理 |
| [uni.createLivePlayerContext](media/live-player-context.md) | Live component management |

#### 文件
#### Document

| API                                                   | 说明                 |
| API | Description |
| :---------------------------------------------------- | :------------------- |
| [uni.saveFile](file/file?id=savefile)                 | 保存文件             |
| [uni.saveFile](file/file?id=savefile) | save file |
| [uni.getSavedFileList](file/file?id=getsavedfilelist) | 获取已保存的文件列表 |
| [uni.getSavedFileList](file/file?id=getsavedfilelist) | Get the list of saved files |
| [uni.getSavedFileInfo](file/file?id=getsavedfileinfo) | 获取已保存的文件信息 |
| [uni.getSavedFileInfo](file/file?id=getsavedfileinfo) | Get saved file information |
| [uni.removeSavedFile](file/file?id=removesavedfile)   | 删除已保存的文件信息 |
| [uni.removeSavedFile](file/file?id=removesavedfile) | Delete saved file information |
| [uni.getFileInfo](/api/file/file?id=getfileinfo)      | 获取文件信息         |
| [uni.getFileInfo](/api/file/file?id=getfileinfo) | Get file information |
| [uni.openDocument](file/file?id=opendocument)         | 打开文件             |
| [uni.openDocument](file/file?id=opendocument) | Open file |

#### 数据缓存
#### Data cache

| API                                                             | 说明                   |
| API | Description |
| :-------------------------------------------------------------- | :--------------------- |
| [uni.getStorage](storage/storage?id=setstorage)                 | 获取本地数据缓存       |
| [uni.getStorage](storage/storage?id=setstorage) | Get local data cache |
| [uni.getStorageSync](storage/storage?id=setstoragesync)         | 获取本地数据缓存       |
| [uni.getStorageSync](storage/storage?id=setstoragesync) | Get local data cache |
| [uni.setStorage](storage/storage?id=getstorage)                 | 设置本地数据缓存       |
| [uni.setStorage](storage/storage?id=getstorage) | Set local data cache |
| [uni.setStorageSync](storage/storage?id=getstoragesync)         | 设置本地数据缓存       |
| [uni.setStorageSync](storage/storage?id=getstoragesync) | Set local data cache |
| [uni.getStorageInfo](storage/storage?id=getstorageinfo)         | 获取本地缓存的相关信息 |
| [uni.getStorageInfo](storage/storage?id=getstorageinfo) | Get information about local cache |
| [uni.getStorageInfoSync](storage/storage?id=getstorageinfosync) | 获取本地缓存的相关信息 |
| [uni.getStorageInfoSync](storage/storage?id=getstorageinfosync) | Get information about local cache |
| [uni.removeStorage](storage/storage?id=removestorage)           | 删除本地缓存内容       |
| [uni.removeStorage](storage/storage?id=removestorage) | Remove local cache content |
| [uni.removeStorageSync](storage/storage?id=removestoragesync)   | 删除本地缓存内容       |
| [uni.removeStorageSync](storage/storage?id=removestoragesync) | Delete local cache content |
| [uni.clearStorage](storage/storage?id=clearstorage)             | 清理本地数据缓存       |
| [uni.clearStorage](storage/storage?id=clearstorage) | Clear local data cache |
| [uni.clearStorageSync](storage/storage?id=clearstoragesync)     | 清理本地数据缓存       |
| [uni.clearStorageSync](storage/storage?id=clearstoragesync) | Clear local data cache |

#### 位置
#### Location

##### 获取位置
##### Get location

| API                                                       | 说明             |
| API | Description |
| :-------------------------------------------------------- | :--------------- |
| [uni.getLocation](location/location?id=getlocation)       | 获取当前位置     |
| [uni.getLocation](location/location?id=getlocation) | Get current location |
| [uni.chooseLocation](location/location?id=chooselocation) | 打开地图选择位置 |
| [uni.chooseLocation](location/location?id=chooselocation) | Open the map and choose the location |

##### 查看位置
##### View location

| API                                                        | 说明         |
| API | Description |
| :--------------------------------------------------------- | :----------- |
| [uni.openLocation](location/open-location?id=openlocation) | 打开内置地图 |
| [uni.openLocation](location/open-location?id=openlocation) | Open built-in map |

##### 地图组件控制
##### Map component control

| API                                                      | 说明         |
| API | Description |
| :------------------------------------------------------- | :----------- |
| [uni.createMapContext](location/map?id=createmapcontext) | 地图组件控制 |
| [uni.createMapContext](location/map?id=createmapcontext) | Map component control |

#### 设备
#### Device

##### 系统信息
##### System message

| API                                                       | 说明                                                 |
| API | Description |
| :-------------------------------------------------------- | :--------------------------------------------------- |
| [uni.getSystemInfo](system/info?id=getsysteminfo)         | 获取系统信息                                         |
| [uni.getSystemInfo](system/info?id=getsysteminfo) | Get system information |
| [uni.getSystemInfoSync](system/info?id=getsysteminfosync) | 获取系统信息                                         |
| [uni.getSystemInfoSync](system/info?id=getsysteminfosync) | Get system information |
| [uni.canIUse](/api/system/info?id=caniuse)                | 判断应用的 API，回调，参数，组件等是否在当前版本可用 |
| [uni.canIUse](/api/system/info?id=caniuse) | Determine whether the application's API, callback, parameters, components, etc. are available in the current version |

##### 内存
##### Memory

| API                                                            | 说明                 |
| API | Description |
| :------------------------------------------------------------- | :------------------- |
| [uni.onMemoryWarning](/api/system/memory?id=wxonmemorywarning) | 监听内存不足告警事件 |
| [uni.onMemoryWarning](/api/system/memory?id=wxonmemorywarning) | Monitor low memory warning events |

##### 网络状态
##### Network status

| API                                                                    | 说明                 |
| API | Description |
| :--------------------------------------------------------------------- | :------------------- |
| [uni.getNetworkType](system/network?id=getnetworktype)                 | 获取网络类型         |
| [uni.getNetworkType](system/network?id=getnetworktype) | Get network type |
| [uni.onNetworkStatusChange](system/network?id=onnetworkstatuschange)   | 监听网络状态变化     |
| [uni.onNetworkStatusChange](system/network?id=onnetworkstatuschange) | Monitor network status changes |
| [uni.offNetworkStatusChange](system/network?id=offnetworkstatuschange) | 取消监听网络状态变化 |
| [uni.offNetworkStatusChange](system/network?id=offnetworkstatuschange) | Cancel monitoring network status changes |

##### 加速度计
##### Accelerometer

| API                                                                          | 说明               |
| API | Description |
| :--------------------------------------------------------------------------- | :----------------- |
| [uni.onAccelerometerChange](system/accelerometer?id=onaccelerometerchange)   | 监听加速度数据     |
| [uni.onAccelerometerChange](system/accelerometer?id=onaccelerometerchange) | Monitor acceleration data |
| [uni.offAccelerometerChange](system/accelerometer?id=offaccelerometerchange) | 取消监听加速度数据 |
| [uni.offAccelerometerChange](system/accelerometer?id=offaccelerometerchange) | Cancel monitoring acceleration data |
| [uni.startAccelerometer](system/accelerometer?id=startaccelerometer)         | 开始监听加速度数据 |
| [uni.startAccelerometer](system/accelerometer?id=startaccelerometer) | Start monitoring acceleration data |
| [uni.stopAccelerometer](system/accelerometer?id=stopaccelerometer)           | 停止监听加速度数据 |
| [uni.stopAccelerometer](system/accelerometer?id=stopaccelerometer) | Stop monitoring acceleration data |

##### 罗盘
##### Compass

| API                                                        | 说明             |
| API | Description |
| :--------------------------------------------------------- | :--------------- |
| [uni.onCompassChange](system/compass?id=oncompasschange)   | 监听罗盘数据     |
| [uni.onCompassChange](system/compass?id=oncompasschange) | Monitor compass data |
| [uni.offCompassChange](system/compass?id=offcompasschange) | 取消监听罗盘数据 |
| [uni.offCompassChange](system/compass?id=offcompasschange) | Cancel monitoring compass data |
| [uni.startCompass](system/compass?id=startcompass)         | 开始监听罗盘数据 |
| [uni.startCompass](system/compass?id=startcompass) | Start listening for compass data |
| [uni.stopCompass](system/compass?id=stopcompass)           | 停止监听罗盘数据 |
| [uni.stopCompass](system/compass?id=stopcompass) | Stop monitoring compass data |

##### 陀螺仪
##### Gyro

| API                                                                 | 说明               |
| API | Description |
| :------------------------------------------------------------------ | :----------------- |
| [uni.onGyroscopeChange](/api/system/gyroscope?id=ongyroscopechange) | 监听陀螺仪数据     |
| [uni.onGyroscopeChange](/api/system/gyroscope?id=ongyroscopechange) | Monitor gyroscope data |
| [uni.startGyroscope](/api/system/gyroscope?id=startgyroscope)       | 开始监听陀螺仪数据 |
| [uni.startGyroscope](/api/system/gyroscope?id=startgyroscope) | Start monitoring gyroscope data |
| [uni.stopGyroscope](/api/system/gyroscope?id=stopgyroscope)         | 停止监听陀螺仪数据 |
| [uni.stopGyroscope](/api/system/gyroscope?id=stopgyroscope) | Stop monitoring gyroscope data |

##### 拨打电话
##### Dial number

| API                                                | 说明     |
| API | Description |
| :------------------------------------------------- | :------- |
| [uni.makePhoneCall](system/phone?id=makephonecall) | 拨打电话 |
| [uni.makePhoneCall](system/phone?id=makephonecall) | make a call |

##### 扫码
##### Scan code

| API                                        | 说明 |
| API | Description |
| :----------------------------------------- | :--- |
| [uni.scanCode](system/barcode?id=scancode) | 扫码 |
| [uni.scanCode](system/barcode?id=scancode) | Scan code |

##### 剪切板
##### Clipboard

| API                                                          | 说明           |
| API | Description |
| :----------------------------------------------------------- | :------------- |
| [uni.setClipboardData](system/clipboard?id=setclipboarddata) | 设置剪贴板内容 |
| [uni.setClipboardData](system/clipboard?id=setclipboarddata) | Set clipboard content |
| [uni.getClipboardData](system/clipboard?id=getclipboarddata) | 获取剪贴板内容 |
| [uni.getClipboardData](system/clipboard?id=getclipboarddata) | Get clipboard content |

##### 屏幕亮度
##### Screen brightness

| API                                                                 | 说明                 |
| API | Description |
| :------------------------------------------------------------------ | :------------------- |
| [uni.setScreenBrightness](system/brightness?id=setscreenbrightness) | 设置屏幕亮度         |
| [uni.setScreenBrightness](system/brightness?id=setscreenbrightness) | Set screen brightness |
| [uni.getScreenBrightness](system/brightness?id=getscreenbrightness) | 获取屏幕亮度         |
| [uni.getScreenBrightness](system/brightness?id=getscreenbrightness) | Get screen brightness |
| [uni.setKeepScreenOn](system/brightness?id=setkeepscreenon)         | 设置是否保持常亮状态 |
| [uni.setKeepScreenOn](system/brightness?id=setkeepscreenon) | Set whether to keep the always-on state |

##### 用户截屏事件
##### User screenshot event

| API                                                   | 说明             |
| API | Description |
| :---------------------------------------------------- | :--------------- |
| [uni.onUserCaptureScreen](/api/system/capture-screen) | 监听用户截屏事件 |
| [uni.onUserCaptureScreen](/api/system/capture-screen) | Listen for user screen capture events |

##### 振动
##### Vibration

| API                                                | 说明                     |
| API | Description |
| :------------------------------------------------- | :----------------------- |
| [uni.vibrate](system/vibrate?id=vibrate)           | 使手机发生振动           |
| [uni.vibrate](system/vibrate?id=vibrate) | Vibrate phone |
| [uni.vibrateLong](system/vibrate?id=vibratelong)   | 使手机发生较长时间的振动 |
| [uni.vibrateLong](system/vibrate?id=vibratelong) | Make the phone vibrate for a long time |
| [uni.vibrateShort](system/vibrate?id=vibrateshort) | 使手机发生较短时间的振动 |
| [uni.vibrateShort](system/vibrate?id=vibrateshort) | Make the phone vibrate for a short time |

##### 手机联系人
##### Mobile phone contact

| API                                                      | 说明           |
| API | Description |
| :------------------------------------------------------- | :------------- |
| [uni.addPhoneContact](system/contact?id=addphonecontact) | 添加手机通讯录 |
| [uni.addPhoneContact](system/contact?id=addphonecontact) | Add phone contacts |

##### 蓝牙
##### Bluetooth

| API                                                                                           | 说明                               |
| API | Description |
| :-------------------------------------------------------------------------------------------- | :--------------------------------- |
| [uni.openBluetoothAdapter](/api/system/bluetooth?id=openbluetoothadapter)                     | 初始化蓝牙模块                     |
| [uni.openBluetoothAdapter](/api/system/bluetooth?id=openbluetoothadapter) | Initialize the Bluetooth module |
| [uni.startBluetoothDevicesDiscovery](/api/system/bluetooth?id=startbluetoothdevicesdiscovery) | 搜寻附近的蓝牙外围设备             |
| [uni.startBluetoothDevicesDiscovery](/api/system/bluetooth?id=startbluetoothdevicesdiscovery) | Discover nearby Bluetooth peripherals |
| [uni.onBluetoothDeviceFound](/api/system/bluetooth?id=onbluetoothdevicefound)                 | 监听寻找到新设备的事件             |
| [uni.onBluetoothDeviceFound](/api/system/bluetooth?id=onbluetoothdevicefound) | Listen for new device found events |
| [uni.stopBluetoothDevicesDiscovery](/api/system/bluetooth?id=stopbluetoothdevicesdiscovery)   | 停止搜寻                           |
| [uni.stopBluetoothDevicesDiscovery](/api/system/bluetooth?id=stopbluetoothdevicesdiscovery) | stop discovery |
| [uni.onBluetoothAdapterStateChange](/api/system/bluetooth?id=onbluetoothadapterstatechange)   | 监听蓝牙适配器状态变化事件         |
| [uni.onBluetoothAdapterStateChange](/api/system/bluetooth?id=onbluetoothadapterstatechange) | Listen for bluetooth adapter state change events |
| [uni.getConnectedBluetoothDevices](/api/system/bluetooth?id=getconnectedbluetoothdevices)     | 根据 uuid 获取处于已连接状态的设备 |
| [uni.getConnectedBluetoothDevices](/api/system/bluetooth?id=getconnectedbluetoothdevices) | Get connected devices by uuid |
| [uni.getBluetoothDevices](/api/system/bluetooth?id=getbluetoothdevices)                       | 获取已发现的蓝牙设备               |
| [uni.getBluetoothDevices](/api/system/bluetooth?id=getbluetoothdevices) | Get discovered bluetooth devices |
| [uni.getBluetoothAdapterState](/api/system/bluetooth?id=getbluetoothadapterstate)             | 获取本机蓝牙适配器状态             |
| [uni.getBluetoothAdapterState](/api/system/bluetooth?id=getbluetoothadapterstate) | Get the state of the native Bluetooth adapter |
| [uni.closeBluetoothAdapter](/api/system/bluetooth?id=closebluetoothadapter)                   | 关闭蓝牙模块                       |
| [uni.closeBluetoothAdapter](/api/system/bluetooth?id=closebluetoothadapter) | Close the bluetooth module |

##### 低耗蓝牙
##### Bluetooth Low Energy

| API                                                                                             | 说明                                                   |
| API | Description |
| :---------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [uni.writeBLECharacteristicValue](/api/system/ble?id=writeblecharacteristicvalue)               | 向低功耗蓝牙设备特征值中写入二进制数据                 |
| [uni.writeBLECharacteristicValue](/api/system/ble?id=writeblecharacteristicvalue) | Write binary data to Bluetooth low energy device characteristic value |
| [uni.readBLECharacteristicValue](/api/system/ble?id=readblecharacteristicvalue)                 | 读取低功耗蓝牙设备的特征值的二进制数据值               |
| [uni.readBLECharacteristicValue](/api/system/ble?id=readblecharacteristicvalue) | Read the binary data value of the characteristic value of the Bluetooth low energy device |
| [uni.onBLEConnectionStateChange](/api/system/ble?id=onbleconnectionstatechange)                 | 监听低功耗蓝牙连接状态的改变事件                       |
| [uni.onBLEConnectionStateChange](/api/system/ble?id=onbleconnectionstatechange) | Listen for Bluetooth Low Energy connection state change events |
| [uni.onBLECharacteristicValueChange](/api/system/ble?id=onblecharacteristicvaluechange)         | 监听低功耗蓝牙设备的特征值变化事件                     |
| [uni.onBLECharacteristicValueChange](/api/system/ble?id=onblecharacteristicvaluechange) | Monitor the characteristic value change event of Bluetooth low energy devices |
| [uni.notifyBLECharacteristicValueChange](/api/system/ble?id=notifyblecharacteristicvaluechange) | 启用蓝牙低功耗设备特征值变化时的 notify 功能，订阅特征 |
| [uni.notifyBLECharacteristicValueChange](/api/system/ble?id=notifyblecharacteristicvaluechange) | Enable the notify function when the characteristic value of a Bluetooth low energy device changes, subscribe to the characteristic |
| [uni.getBLEDeviceServices](/api/system/ble?id=getbledeviceservices)                             | 获取蓝牙设备所有服务(service)                          |
| [uni.getBLEDeviceServices](/api/system/ble?id=getbledeviceservices) | Get all Bluetooth device services (service) |
| [uni.getBLEDeviceCharacteristics](/api/system/ble?id=getbledevicecharacteristics)               | 获取蓝牙设备某个服务中所有特征值(characteristic)       |
| [uni.getBLEDeviceCharacteristics](/api/system/ble?id=getbledevicecharacteristics) | Get all the characteristic values (characteristic) in a service of a Bluetooth device |
| [uni.createBLEConnection](/api/system/ble?id=createbleconnection)                               | 连接低功耗蓝牙设备                                     |
| [uni.createBLEConnection](/api/system/ble?id=createbleconnection) | Connect to a Bluetooth Low Energy device |
| [uni.closeBLEConnection](/api/system/ble?id=closebleconnection)                                 | 断开与低功耗蓝牙设备的连接                             |
| [uni.closeBLEConnection](/api/system/ble?id=closebleconnection) | Disconnect from a Bluetooth Low Energy device |

##### iBeacon

| API                                                                       | 说明                            |
| API | Description |
| :------------------------------------------------------------------------ | :------------------------------ |
| [uni.onBeaconServiceChange](/api/system/ibeacon?id=onbeaconservicechange) | 监听 iBeacon 服务状态变化事件   |
| [uni.onBeaconServiceChange](/api/system/ibeacon?id=onbeaconservicechange) | Listen for iBeacon service status change events |
| [uni.onBeaconUpdate](/api/system/ibeacon?id=onbeaconupdate)               | 监听 iBeacon 设备更新事件       |
| [uni.onBeaconUpdate](/api/system/ibeacon?id=onbeaconupdate) | Listen for iBeacon device update events |
| [uni.getBeacons](/api/system/ibeacon?id=getbeacons)                       | 获取所有已搜索到的 iBeacon 设备 |
| [uni.getBeacons](/api/system/ibeacon?id=getbeacons) | Get all searched iBeacon devices |
| [uni.startBeaconDiscovery](/api/system/ibeacon?id=startbeacondiscovery)   | 停止搜索附近的 iBeacon 设备     |
| [uni.startBeaconDiscovery](/api/system/ibeacon?id=startbeacondiscovery) | Stop searching for nearby iBeacon devices |
| [uni.stopBeaconDiscovery](/api/system/ibeacon?id=stopbeacondiscovery)     | 开始搜索附近的 iBeacon 设备     |
| [uni.stopBeaconDiscovery](/api/system/ibeacon?id=stopbeacondiscovery) | Start searching for iBeacon devices nearby |

##### 生物认证
##### Biometric authentication

| API                                                                                                      | 说明                                     |
| API | Description |
| :------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| [uni.startSoterAuthentication](/api/system/authentication?id=startsoterauthentication)                   | 开始生物认证                             |
| [uni.startSoterAuthentication](/api/system/authentication?id=startsoterauthentication) | Start biometric authentication |
| [uni.checkIsSupportSoterAuthentication](/api/system/authentication?id=checkissupportsoterauthentication) | 获取本机支持的生物认证方式               |
| [uni.checkIsSupportSoterAuthentication](/api/system/authentication?id=checkissupportsoterauthentication) | Get the supported biometric authentication methods |
| [uni.checkIsSoterEnrolledInDevice](/api/system/authentication?id=checkissoterenrolledindevice)           | 获取设备内是否录入如指纹等生物信息的接口 |
| [uni.checkIsSoterEnrolledInDevice](/api/system/authentication?id=checkissoterenrolledindevice) | The interface to obtain whether biometric information such as fingerprints is entered in the device |

#### 界面
#### Interface

##### 交互反馈
##### Interactive feedback

| API                                                 | 说明           |
| API | Description |
| :-------------------------------------------------- | :------------- |
| [uni.showToast](ui/prompt?id=showtoast)             | 显示提示框     |
| [uni.showToast](ui/prompt?id=showtoast) | Show prompt box |
| [uni.showLoading](ui/prompt?id=showloading)         | 显示加载提示框 |
| [uni.showLoading](ui/prompt?id=showloading) | Show loading prompt |
| [uni.hideToast](ui/prompt?id=hidetoast)             | 隐藏提示框     |
| [uni.hideToast](ui/prompt?id=hidetoast) | Hide the prompt box |
| [uni.hideLoading](ui/prompt?id=hideloading)         | 隐藏加载提示框 |
| [uni.hideLoading](ui/prompt?id=hideloading) | Hide loading prompt box |
| [uni.showModal](ui/prompt?id=showmodal)             | 显示模态弹窗   |
| [uni.showModal](ui/prompt?id=showmodal) | Show modal popup |
| [uni.showActionSheet](ui/prompt?id=showactionsheet) | 显示菜单列表   |
| [uni.showActionSheet](ui/prompt?id=showactionsheet) | Show menu list |

##### 设置导航条
##### Set navigation bar

| API                                                                          | 说明               |
| API | Description |
| :--------------------------------------------------------------------------- | :----------------- |
| [uni.setNavigationBarTitle](ui/navigationbar?id=setnavigationbartitle)       | 设置当前页面标题   |
| [uni.setNavigationBarTitle](ui/navigationbar?id=setnavigationbartitle) | Set the current page title |
| [uni.setNavigationBarColor](/api/ui/navigationbar?id=setnavigationbarcolor)  | 设置页面导航条颜色 |
| [uni.setNavigationBarColor](/api/ui/navigationbar?id=setnavigationbarcolor) | Set page navigation bar color |
| [uni.showNavigationBarLoading](ui/navigationbar?id=shownavigationbarloading) | 显示导航条加载动画 |
| [uni.showNavigationBarLoading](ui/navigationbar?id=shownavigationbarloading) | Show navigation bar loading animation |
| [uni.hideNavigationBarLoading](ui/navigationbar?id=hidenavigationbarloading) | 隐藏导航条加载动画 |
| [uni.hideNavigationBarLoading](ui/navigationbar?id=hidenavigationbarloading) | Hide navigation bar loading animation |

##### 设置 TabBar
##### Setting TabBar

| API                                                          | 说明                             |
| API | Description |
| :----------------------------------------------------------- | :------------------------------- |
| [uni.setTabBarItem](/api/ui/tabbar?id=settabbaritem)         | 动态设置 tabBar 某一项的内容     |
| [uni.setTabBarItem](/api/ui/tabbar?id=settabbaritem) | Dynamically set the content of a tabBar item |
| [uni.setTabBarStyle](/api/ui/tabbar?id=settabbarstyle)       | 动态设置 tabBar 的整体样式       |
| [uni.setTabBarStyle](/api/ui/tabbar?id=settabbarstyle) | Dynamically set the overall style of the tabBar |
| [uni.hideTabBar](/api/ui/tabbar?id=hidetabbar)               | 隐藏 tabBar                      |
| [uni.hideTabBar](/api/ui/tabbar?id=hidetabbar) | hide tabBar |
| [uni.showTabBar](/api/ui/tabbar?id=showtabbar)               | 显示 tabBar                      |
| [uni.showTabBar](/api/ui/tabbar?id=showtabbar) | Show tabBar |
| [uni.setTabBarBadge](/api/ui/tabbar?id=settabbarbadge)       | 为 tabBar 某一项的右上角添加文本 |
| [uni.setTabBarBadge](/api/ui/tabbar?id=settabbarbadge) | Add text to the upper right corner of a tabBar item |
| [uni.removeTabBarBadge](/api/ui/tabbar?id=removetabbarbadge) | 移除 tabBar 某一项右上角的文本   |
| [uni.removeTabBarBadge](/api/ui/tabbar?id=removetabbarbadge) | Remove the text in the upper right corner of a tabBar item |
| [uni.showTabBarRedDot](/api/ui/tabbar?id=showtabbarreddot)   | 显示 tabBar 某一项的右上角的红点 |
| [uni.showTabBarRedDot](/api/ui/tabbar?id=showtabbarreddot) | Show the red dot in the upper right corner of a tabBar item |
| [uni.hideTabBarRedDot](/api/ui/tabbar?id=hidetabbarreddot)   | 隐藏 tabBar 某一项的右上角的红点 |
| [uni.hideTabBarRedDot](/api/ui/tabbar?id=hidetabbarreddot) | Hide the red dot in the upper right corner of a tabBar item |

##### 背景
##### background

| API                                                                     | 说明                                     |
| API | Description |
| :---------------------------------------------------------------------- | :--------------------------------------- |
| [uni.setBackgroundColor](/api/ui/bgcolor?id=setbackgroundcolor)         | 动态设置窗口的背景色。                   |
| [uni.setBackgroundColor](/api/ui/bgcolor?id=setbackgroundcolor) | Dynamically set the background color of the window. |
| [uni.setBackgroundTextStyle](/api/ui/bgcolor?id=setbackgroundtextstyle) | 动态设置下拉背景字体、loading 图的样式。 |
| [uni.setBackgroundTextStyle](/api/ui/bgcolor?id=setbackgroundtextstyle) | Dynamically set the style of the drop-down background font and loading image. |

##### 动画
##### Animation

| API                                                         | 说明                                                                                                                          |
| API | Description |
| :---------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [uni.createAnimation](/api/ui/animation?id=createanimation) | 创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。 |
| [uni.createAnimation](/api/ui/animation?id=createanimation) | Create an animation instance animation. Call the instance's method to describe the animation. Finally, the animation data is exported through the export method of the animation instance and passed to the animation property of the component. |

##### 滚动
##### Scroll

| API                                                | 说明                   |
| API | Description |
| :------------------------------------------------- | :--------------------- |
| [uni.pageScrollTo](/api/ui/scroll?id=pagescrollto) | 将页面滚动到目标位置。 |
| [uni.pageScrollTo](/api/ui/scroll?id=pagescrollto) | Scroll the page to the target position. |

##### 绘画
##### Painting

| API                                                          | 说明                 |
| API | Description |
| :----------------------------------------------------------- | :------------------- |
| [uni.createCanvasContext](/api/canvas/createCanvasContext)   | 创建绘图上下文       |
| [uni.createCanvasContext](/api/canvas/createCanvasContext) | Create drawing context |
| [uni.canvasToTempFilePath](/api/canvas/canvasToTempFilePath) | 将画布内容保存成文件 |
| [uni.canvasToTempFilePath](/api/canvas/canvasToTempFilePath) | Save the canvas content to a file |
| [uni.canvasGetImageData](/api/canvas/canvasGetImageData)     | 获取画布图像数据     |
| [uni.canvasGetImageData](/api/canvas/canvasGetImageData) | Get canvas image data |
| [uni.canvasPutImageData](/api/canvas/canvasPutImageData)     | 设置画布图像数据     |
| [uni.canvasPutImageData](/api/canvas/canvasPutImageData) | Set canvas image data |

##### 下拉刷新
##### Pull down to refresh

| API                                                                  | 说明                       |
| API | Description |
| :------------------------------------------------------------------- | :------------------------- |
| [onPullDownRefresh](/api/ui/pulldown?id=onpulldownrefresh)           | 监听该页面用户下拉刷新事件 |
| [onPullDownRefresh](/api/ui/pulldown?id=onpulldownrefresh) | Listen to the page user pull down refresh event |
| [uni.startPullDownRefresh](/api/ui/pulldown?id=startpulldownrefresh) | 开始下拉刷新               |
| [uni.startPullDownRefresh](/api/ui/pulldown?id=startpulldownrefresh) | Start pull down refresh |
| [uni.stopPullDownRefresh](/api/ui/pulldown?id=stoppulldownrefresh)   | 停止当前页面下拉刷新       |
| [uni.stopPullDownRefresh](/api/ui/pulldown?id=stoppulldownrefresh) | Stop pull-down refresh of the current page |

##### 节点信息
##### Node information

| API                                                                                | 说明                   |
| API | Description |
| :--------------------------------------------------------------------------------- | :--------------------- |
| [uni.createSelectorQuery](ui/nodes-info?id=createselectorquery)                    | 创建查询请求           |
| [uni.createSelectorQuery](ui/nodes-info?id=createselectorquery) | Create query request |
| [selectorQuery.select](/api/ui/nodes-info?id=selectorquery-对象的方法列表)         | 根据选择器选择单个节点 |
| [selectorQuery.select](/api/ui/nodes-info?id=selectorquery-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95 %E5%88%97%E8%A1%A8) | Select a single node based on selector |
| [selectorQuery.selectAll](/api/ui/nodes-info?id=selectorquery-对象的方法列表)      | 根据选择器选择全部节点 |
| [selectorQuery.selectAll](/api/ui/nodes-info?id=selectorquery-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95 %E5%88%97%E8%A1%A8) | Select all nodes according to selector |
| [selectorQuery.selectViewport](/api/ui/nodes-info?id=selectorquery-对象的方法列表) | 选择显示区域           |
| [selectorQuery.selectViewport](/api/ui/nodes-info?id=selectorquery-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95 %E5%88%97%E8%A1%A8) | Select display area |
| [selectorQuery.exec](/api/ui/nodes-info?id=selectorquery-对象的方法列表)           | 执行查询请求           |
| [selectorQuery.exec](/api/ui/nodes-info?id=selectorquery-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95 %E5%88%97%E8%A1%A8) | Execute query request |
| [nodesRef.boundingClientRect](/api/ui/nodes-info?id=nodesref-对象的方法列表)       | 获取布局位置和尺寸     |
| [nodesRef.boundingClientRect](/api/ui/nodes-info?id=nodesref-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95 %E5%88%97%E8%A1%A8) | Get layout position and size |
| [nodesRef.scrollOffset](/api/ui/nodes-info?id=nodesref-对象的方法列表)             | 获取滚动位置           |
| [nodesRef.scrollOffset](/api/ui/nodes-info?id=nodesref-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95 %E5%88%97%E8%A1%A8) | Get scroll position |
| [nodesRef.fields](/api/ui/nodes-info?id=nodesref-对象的方法列表)                   | 获取任意字段           |
| [nodesRef.fields](/api/ui/nodes-info?id=nodesref-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95 %E5%88%97%E8%A1%A8) | Get any field |

##### 节点布局相交状态
##### Node layout intersection state

| API                                                                                                             | 说明                           |
| API | Description |
| :-------------------------------------------------------------------------------------------------------------- | :----------------------------- |
| [uni.createIntersectionObserver](ui/intersection-observer?id=createintersectionobserver)                        | 创建 IntersectionObserver 对象 |
| [uni.createIntersectionObserver](ui/intersection-observer?id=createintersectionobserver) | Create IntersectionObserver object |
| [intersectionObserver.relativeTo](/api/ui/intersection-observer?id=intersectionobserver-对象的方法列表)         | 指定参照节点                   |
| [intersectionObserver.relativeTo](/api/ui/intersection-observer?id=intersectionobserver-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95 %E5%88%97%E8%A1%A8) | Specify reference node |
| [intersectionObserver.relativeToViewport](/api/ui/intersection-observer?id=intersectionobserver-对象的方法列表) | 指定页面显示区域作为参照区域   |
| [intersectionObserver.relativeToViewport](/api/ui/intersection-observer?id=intersectionobserver-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95 %E5%88%97%E8%A1%A8) | Specify the page display area as the reference area |
| [intersectionObserver.observe](/api/ui/intersection-observer?id=intersectionobserver-对象的方法列表)            | 指定目标节点并开始监听         |
| [intersectionObserver.observe](/api/ui/intersection-observer?id=intersectionobserver-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95 %E5%88%97%E8%A1%A8) | Specify the target node and start listening |
| [intersectionObserver.disconnect](/api/ui/intersection-observer?id=intersectionobserver-对象的方法列表)         | 停止监听                       |
| [intersectionObserver.disconnect](/api/ui/intersection-observer?id=intersectionobserver-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95 %E5%88%97%E8%A1%A8) | stop listening |

#### 路由
#### Routing

| API                                             | 说明                                                                         |
| API | Description |
| :---------------------------------------------- | :--------------------------------------------------------------------------- |
| [uni.navigateTo](/api/router?id=navigateto)     | 保留当前页面，跳转到应用内的某个页面，使用 uni.navigateBack 可以返回到原页面 |
| [uni.navigateTo](/api/router?id=navigateto) | Keep the current page, jump to a page in the app, use uni.navigateBack to return to the original page |
| [uni.redirectTo](/api/router?id=redirectto)     | 关闭当前页面，跳转到应用内的某个页面                                         |
| [uni.redirectTo](/api/router?id=redirectto) | Close the current page and jump to a page in the app |
| [uni.reLaunch](/api/router?id=relaunch)         | 关闭所有页面，打开到应用内的某个页面                                         |
| [uni.reLaunch](/api/router?id=relaunch) | Close all pages, open to a page in the app |
| [uni.switchTab](/api/router?id=switchtab)       | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面                             |
| [uni.switchTab](/api/router?id=switchtab) | Jump to the tabBar page and close all other non-tabBar pages |
| [uni.navigateBack](/api/router?id=navigateback) | 关闭当前页面，返回上一页面或多级页面                                         |
| [uni.navigateBack](/api/router?id=navigateback) | Close the current page and return to the previous page or multi-level page |

#### 键盘
#### keyboard

| API                                             | 说明                                                                         |
| API | Description |
| :---------------------------------------------- | :--------------------------------------------------------------------------- |
| [uni.hideKeyboard](/api/key.html#hidekeyboard)     | 隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。 |
| [uni.hideKeyboard](/api/key.html#hidekeyboard) | Hide the displayed soft keyboard. If the soft keyboard is not displayed, do nothing. |
| [uni.onKeyboardHeightChange](/api/key.html#onkeyboardheightchange)     | 监听键盘高度变化                                         |
| [uni.onKeyboardHeightChange](/api/key.html#onkeyboardheightchange) | Monitor keyboard height changes |
| [uni.offKeyboardHeightChange](/api/key.html#offkeyboardheightchange)         | 取消监听键盘高度变化事件                                         |
| [uni.offKeyboardHeightChange](/api/key.html#offkeyboardheightchange) | Cancel listening for keyboard height change events |
| [uni.getSelectedTextRange](/api/key?id=getselectedtextrange)       | 在input、textarea等focus之后，获取输入框的光标位置                             |
| [uni.getSelectedTextRange](/api/key?id=getselectedtextrange) | After input, textarea, etc. focus, get the cursor position of the input box |

#### 第三方服务
#### Third Party Services

| API                                                                  | 说明                                                            |
| API | Description |
| :------------------------------------------------------------------- | :-------------------------------------------------------------- |
| [uni.getProvider](/api/plugins/provider?id=getprovider)              | 获取服务供应商                                                  |
| [uni.getProvider](/api/plugins/provider?id=getprovider) | Get service provider |
| [uni.login](/api/plugins/login?id=login)                             | 登录                                                            |
| [uni.login](/api/plugins/login?id=login) | Register |
| [uni.getUserInfo](/api/plugins/login?id=getuserinfo)                 | 获取用户信息                                                    |
| [uni.getUserInfo](/api/plugins/login?id=getuserinfo) | Get user information |
| [uni.getuserprofile](/api/plugins/login?id=getuserprofile)           | 获取用户信息。每次请求都会弹出授权窗口，用户同意后返回 userInfo |
| [uni.getuserprofile](/api/plugins/login?id=getuserprofile) | Get user information. An authorization window will pop up for each request. After the user agrees, return userInfo |
| [uni.checkSession](/api/plugins/login?id=checkSession)               | 检查登录状态是否过期                                            |
| [uni.checkSession](/api/plugins/login?id=checkSession) | Check if login status is expired |
| [uni.preLogin](/api/plugins/login?id=prelogin)                       | 预登录                                                          |
| [uni.preLogin](/api/plugins/login?id=prelogin) |
| [uni.closeAuthView](/api/plugins/login?id=closeauthview)             | 关闭一键登录页面                                                |
| [uni.closeAuthView](/api/plugins/login?id=closeauthview) | Close the one-click login page |
| [uni.getCheckBoxState](/api/plugins/login?id=getcheckboxstate)       | 获取一键登录条款勾选框状态                                      |
| [uni.getCheckBoxState](/api/plugins/login?id=getcheckboxstate) | Get the check box state of one-click login terms |
| [uni.getUniverifyManager](/api/plugins/login?id=getUniverifyManager) | 获取全局唯一的一键登录管理器 univerifyManager                   |
| [uni.getUniverifyManager](/api/plugins/login?id=getUniverifyManager) | Get the globally unique one-key login manager univerifyManager |
| [uni.share](/api/plugins/share?id=share)                             | 分享                                                            |
| [uni.share](/api/plugins/share?id=share) |
| [uni.shareWithSystem](/api/plugins/share?id=sharewithsystem)         | 使用系统分享                                                    |
| [uni.shareWithSystem](/api/plugins/share?id=sharewithsystem) | Use system share |
| [uni.requestPayment](/api/plugins/payment?id=requestpayment)         | 支付                                                            |
| [uni.requestPayment](/api/plugins/payment?id=requestpayment) | payment |
| [uni.subscribePush](/api/plugins/push?id=subscribepush)              | 开启推送                                                        |
| [uni.subscribePush](/api/plugins/push?id=subscribepush) | Enable push |
| [uni.unsubscribePush](/api/plugins/push?id=unsubscribepush)          | 关闭推送                                                        |
| [uni.unsubscribePush](/api/plugins/push?id=unsubscribepush) | Disable push |
| [uni.onPush](/api/plugins/push?id=onpush)                            | 监听透传数据                                                    |
| [uni.onPush](/api/plugins/push?id=onpush) | Monitor transparent data |
| [uni.offPush](/api/plugins/push?id=offpush)                          | 移除监听透传数据                                                |
| [uni.offPush](/api/plugins/push?id=offpush) | Remove monitor passthrough data |

#### 广告
#### advertise

| API                                             | 说明                                                             |
| API | Description |
| :---------------------------------------------- | :--------------------------------------------------------------- |
| [激励视频广告](/api/a-d/rewarded-video.html)    | 激励视频广告，是 cpm 收益最高的广告形式                          |
| [Rewarded Video Ads](/api/a-d/rewarded-video.html) | Rewarded Video Ads are the most profitable ad format for cpm |
| [全屏视频广告](/api/a-d/full-screen-video.html) | 全屏视频广告                                                     |
| [full screen video ad](/api/a-d/full-screen-video.html) | full screen video ad |
| [内容联盟广告](/api/a-d/content-page.html)      | 内容联盟广告                                                     |
| [Content Ads](/api/a-d/content-page.html) | Content Ads |
| [插屏广告](/api/a-d/interstitial.html)          | 插屏广告                                                         |
| [Interstitial](/api/a-d/interstitial.html) | Interstitial |
| [互动游戏](/api/a-d/interactive.html)           | 互动游戏是 DCloud 联合三方服务商为开发者提供新的广告场景增值服务 |
| [Interactive Game](/api/a-d/interactive.html) | Interactive Game is DCloud's joint third-party service providers to provide developers with new value-added services for advertising scenarios |

#### 平台扩展
#### Platform extension

| API                                                                         | 说明              |
| API | Description |
| :-------------------------------------------------------------------------- | :---------------- |
| [uni.requireNativePlugin](/api/extend/native-plugin?id=requirenativeplugin) | 引入 App 原生插件 |
| [uni.requireNativePlugin](/api/extend/native-plugin?id=requirenativeplugin) | Introduce App native plugin |

#### 其他
#### other

##### 授权
##### Authorization

| API                                                | 说明                   |
| API | Description |
| :------------------------------------------------- | :--------------------- |
| [uni.authorize](/api/other/authorize?id=authorize) | 提前向用户发起授权请求 |
| [uni.authorize](/api/other/authorize?id=authorize) | Initiate an authorization request to the user in advance |

##### 设置
##### set up

| API                                                  | 说明                                               |
| API | Description |
| :--------------------------------------------------- | :------------------------------------------------- |
| [uni.openSetting](/api/other/setting?id=opensetting) | 调起客户端小程序设置界面，返回用户设置的操作结果。 |
| [uni.openSetting](/api/other/setting?id=opensetting) | Call up the client applet setting interface and return the operation result set by the user. |
| [uni.getSetting](/api/other/setting?id=getsetting)   | 获取用户的当前设置。                               |
| [uni.getSetting](/api/other/setting?id=getsetting) | Get the current setting of the user. |

##### 收货地址
##### Shipping address

| API                                                             | 说明             |
| API | Description |
| :-------------------------------------------------------------- | :--------------- |
| [uni.chooseAddress](/api/other/choose-address?id=chooseaddress) | 获取用户收货地址 |
| [uni.chooseAddress](/api/other/choose-address?id=chooseaddress) | Get the user's shipping address |

##### 获取发票抬头
##### Get invoice header

| API                                                                      | 说明                                                  |
| API | Description |
| :----------------------------------------------------------------------- | :---------------------------------------------------- |
| [uni.chooseInvoiceTitle](/api/other/invoice-title?id=chooseinvoicetitle) | 选择用户的发票抬头，需要用户授权 scope.invoiceTitle。 |
| [uni.chooseInvoiceTitle](/api/other/invoice-title?id=chooseinvoicetitle) | Select the user's invoice title, which requires user authorization scope.invoiceTitle. |

##### 小程序跳转
##### Mini Program Jump

| API                                                                                   | 说明                                                                     |
| API | Description |
| :------------------------------------------------------------------------------------ | :----------------------------------------------------------------------- |
| [uni.navigateToMiniProgram](/api/other/open-miniprogram?id=navigatetominiprogram)     | 打开另一个小程序。                                                       |
| [uni.navigateToMiniProgram](/api/other/open-miniprogram?id=navigatetominiprogram) | Open another miniprogram. |
| [uni.navigateBackMiniProgram](/api/other/open-miniprogram?id=navigatebackminiprogram) | 跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功。 |
| [uni.navigateBackMiniProgram](/api/other/open-miniprogram?id=navigatebackminiprogram) | Jump back to the previous applet, which can only be called successfully when another applet jumps to the current one. |

##### 模板消息
##### Template message

| API                                                                                                      | 说明                                                                                                              |
| API | Description |
| :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| [addTemplate](/api/other/template?id=addtemplate)                                                        | 组合模板并添加至帐号下的个人模板库。                                                                              |
| [addTemplate](/api/other/template?id=addtemplate) | Combine templates and add to the personal template library under the account. |
| [deleteTemplate](/api/other/template?id=deletetemplate)                                                  | 删除帐号下的某个模板。                                                                                            |
| [deleteTemplate](/api/other/template?id=deletetemplate) | Delete a template under the account. |
| [getTemplateLibraryById](/api/other/template?id=gettemplatelibrarybyid)                                  | 获取模板库某个模板标题下关键词库。                                                                                |
| [getTemplateLibraryById](/api/other/template?id=gettemplatelibrarybyid) | Get the keyword library under a template title of the template library. |
| [getTemplateLibraryList](/api/other/template?id=gettemplatelibrarylist)                                  | 获取 APP 模板库标题列表                                                                                           |
| [getTemplateLibraryList](/api/other/template?id=gettemplatelibrarylist) | Get APP template library title list |
| [getTemplateList](/api/other/template?id=gettemplatelist)                                                | 获取帐号下已存在的模板列表。                                                                                      |
| [getTemplateList](/api/other/template?id=gettemplatelist) | Get the list of existing templates under the account. |
| [sendTemplateMessage](/api/other/template?id=sendtemplatemessage)                                        | 发送模板消息                                                                                                      |
| [sendTemplateMessage](/api/other/template?id=sendtemplatemessage) | Send template message |
| [alipay.open.app.mini.templatemessage.send](/api/other/template?id=alipayopenappminitemplatemessagesend) | 支付宝小程序通过 openapi 给用户触达消息，主要为支付后的触达（通过消费 id）和用户提交表单后的触达（通过 formId）。 |
| [alipay.open.app.mini.templatemessage.send](/api/other/template?id=alipayopenappminitemplatemessagesend) | Alipay applet sends messages to users through openapi, mainly after payment (through consumption id) And the touch after the user submits the form (via formId). |

##### 小程序更新
##### Mini Program Update

| API                                                           | 说明                                                                   |
| API | Description |
| :------------------------------------------------------------ | :--------------------------------------------------------------------- |
| [uni.getUpdateManager](/api/other/update?id=getupdatemanager) | 返回全局唯一的版本更新管理器对象： updateManager，用于管理小程序更新。 |
| [uni.getUpdateManager](/api/other/update?id=getupdatemanager) | Returns the globally unique version update manager object: updateManager, which is used to manage applet updates. |

##### 调试
##### Debug

| API                                                                 | 说明                                           |
| API | Description |
| :------------------------------------------------------------------ | :--------------------------------------------- |
| [uni.setEnableDebug](/api/other/set-enable-debug?id=setenabledebug) | 设置是否打开调试开关。此开关对正式版也能生效。 |
| [uni.setEnableDebug](/api/other/set-enable-debug?id=setenabledebug) | Set whether to enable debugging. This switch also works for the official version. |

##### 获取第三方平台数据
##### Get third-party platform data

| API                                                                  | 说明                             |
| API | Description |
| :------------------------------------------------------------------- | :------------------------------- |
| [uni.getExtConfig](/api/other/get-extconfig?id=getextconfig)         | 获取第三方平台自定义的数据字段。 |
| [uni.getExtConfig](/api/other/get-extconfig?id=getextconfig) | Get data fields customized by third-party platforms. |
| [uni.getExtConfigSync](/api/other/get-extconfig?id=getextconfigsync) | uni.getExtConfig 的同步版本。    |
| [uni.getExtConfigSync](/api/other/get-extconfig?id=getextconfigsync) | Synchronized version of uni.getExtConfig. |

因文档同步原因，本页面列出的API可能不全。如在本文未找到相关API，可以在左侧树中寻找或使用文档右上角的搜索功能。
Due to document synchronization reasons, the APIs listed on this page may not be complete. If you do not find the relevant API in this article, you can find it in the tree on the left or use the search function in the upper right corner of the document.
