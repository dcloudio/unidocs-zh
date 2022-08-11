`uni-app`的 js API 由标准 ECMAScript 的 js API 和 uni 扩展 API 这两部分组成。

标准 ECMAScript 的 js 仅是最基础的 js。浏览器基于它扩展了 window、document、navigator 等对象。小程序也基于标准 js 扩展了各种 wx.xx、my.xx、swan.xx 的 API。node 也扩展了 fs 等模块。

uni-app 基于 ECMAScript 扩展了 uni 对象，并且 API 命名与小程序保持兼容。

## 标准 js 和浏览器 js 的区别

`uni-app`的 js 代码，web端运行于浏览器中。非web端（包含小程序和 App），Android 平台运行在 v8 引擎中，iOS 平台运行在 iOS 自带的 jscore 引擎中，都没有运行在浏览器或 webview 里。

非web端，虽然不支持 window、document、navigator 等浏览器的 js API，但也支持标准 ECMAScript。

请注意不要把浏览器里的 js 等价于标准 js。

所以 uni-app 的web端，一样支持标准 js，支持 if、for 等语法，支持字符串、数字、时间、布尔值、数组、自定义对象等变量类型及各种处理方法。仅仅是不支持 window、document、navigator 等浏览器专用对象。

## 各端特色 API 调用

除了 uni-app 框架内置的跨端 API，各端自己的特色 API 也可通过[条件编译](https://uniapp.dcloud.io/platform)自由使用。

各端特色 API 规范参考各端的开发文档。其中 App 端的 JS API 参考[html5plus.org](https://www.html5plus.org/doc/h5p.html)；uni-app 也支持通过扩展原生插件来丰富 App 端的开发能力，具体参考[插件开发文档](http://ask.dcloud.net.cn/article/35408)

各平台的 API 新增，不需要 uni-app 升级，开发者就可以直接使用。

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
      const task = uni.connectSocket(
       success(res){
        console.log(res)
       }
      )

      // Promise 化
      uni.connectSocket().then(res => {
        // 此处即为正常使用时 success 回调的 res
        // uni.connectSocket() 正常使用时是会返回 task 对象的，如果想获取 task ，则不要使用 Promise 化
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

#### 基础

##### 日志打印

| API                                            | 说明                                  |
| :--------------------------------------------- | :------------------------------------ |
| [日志打印](log)                                | 向控制台打印日志信息                  |
| [定时器](timer)                                | 在定时到期以后执行注册的回调函数      |
| [uni.base64ToArrayBuffer](base64ToArrayBuffer) | 将 Base64 字符串转成 ArrayBuffer 对象 |
| [uni.arrayBufferToBase64](arrayBufferToBase64) | 将 ArrayBuffer 对象转成 Base64 字符串 |
| [应用级事件](/api/application)                 | 监听应用事件                          |
| [拦截器](interceptor)                          | 拦截 Api 等调用并执行回调             |
| [全局 API](global)                             | 可全局调用 Api                        |

#### 网络
#### Network

##### 发起请求
##### Initiating request

| API                                       | 说明         |
| :---------------------------------------- | :----------- |
| [uni.request](request/request?id=request) | 发起网络请求 |

##### 上传、下载
##### Upload and download

| API                                                      | 说明     |
| :------------------------------------------------------- | :------- |
| [uni.uploadFile](request/network-file?id=uploadfile)     | 上传文件 |
| [uni.downloadFile](request/network-file?id=downloadfile) | 下载文件 |

##### WebSocket

| API                                                             | 说明                |
| :-------------------------------------------------------------- | :------------------ |
| [uni.connectSocket](request/websocket?id=connectsocket)         | 创建 WebSocket 连接 |
| [uni.onSocketOpen](request/websocket?id=onsocketopen)           | 监听 WebSocket 打开 |
| [uni.onSocketError](request/websocket?id=onsocketerror)         | 监听 WebSocket 错误 |
| [uni.sendSocketMessage](request/websocket?id=sendsocketmessage) | 发送 WebSocket 消息 |
| [uni.onSocketMessage](request/websocket?id=onsocketmessage)     | 接受 WebSocket 消息 |
| [uni.closeSocket](request/websocket?id=closesocket)             | 关闭 WebSocket 连接 |
| [uni.onSocketClose](request/websocket?id=onsocketclose)         | 监听 WebSocket 关闭 |

##### SocketTask

| API                                                                     | 说明                                  |
| ----------------------------------------------------------------------- | ------------------------------------- |
| [SocketTask.send](/api/request/socket-task?id=sockettasksend)           | 通过 WebSocket 连接发送数据           |
| [SocketTask.close](/api/request/socket-task?id=sockettaskclose)         | 关闭 WebSocket 连接                   |
| [SocketTask.onOpen](/api/request/socket-task?id=sockettaskonopen)       | 监听 WebSocket 连接打开事件           |
| [SocketTask.onClose](/api/request/socket-task?id=sockettaskonclose)     | 监听 WebSocket 连接关闭事件           |
| [SocketTask.onError](/api/request/socket-task?id=sockettaskonerror)     | 监听 WebSocket 错误事件               |
| [SocketTask.onMessage](/api/request/socket-task?id=sockettaskonmessage) | 监听 WebSocket 接受到服务器的消息事件 |

#### 媒体
#### Media

##### 图片
##### Image

| API                                                                 | 说明                     |
| :------------------------------------------------------------------ | :----------------------- |
| [uni.chooseImage](media/image?id=chooseimage)                       | 从相册选择图片，或者拍照 |
| [uni.previewImage](media/image?id=unipreviewimageobject)            | 预览图片                 |
| [uni.closePreviewImage](media/image?id=closepreviewimage)           | 关闭预览图片             |
| [uni.getImageInfo](media/image?id=getimageinfo)                     | 获取图片信息             |
| [uni.saveImageToPhotosAlbum](media/image?id=saveimagetophotosalbum) | 保存图片到系统相册       |

##### 文件
##### Document

| API                                        | 说明           |
| :----------------------------------------- | :------------- |
| [uni.chooseFile](media/file?id=chooseFile) | 从本地选择文件 |

##### 录音管理
##### Recording Management

| API                                            | 说明     |
| :--------------------------------------------- | :------- |
| [uni.getRecorderManager](media/record-manager) | 录音管理 |

##### 背景音频播放管理
##### Background audio playback management

| API                                                             | 说明             |
| :-------------------------------------------------------------- | :--------------- |
| [uni.getBackgroundAudioManager](media/background-audio-manager) | 背景音频播放管理 |

##### 音频组件管理
##### Audio component management

| API                                                | 说明         |
| :------------------------------------------------- | :----------- |
| [uni.createInnerAudioContext](media/audio-context) | 音频组件管理 |

##### 视频
##### Video

| API                                                                      | 说明                               |
| :----------------------------------------------------------------------- | :--------------------------------- |
| [uni.chooseVideo](media/video?id=choosevideo)                            | 从相册选择视频，或者拍摄           |
| [uni.chooseMedia](media/video?id=choosemedia)                            | 拍摄或从手机相册中选择图片或视频。 |
| [uni.saveVideoToPhotosAlbum](media/video?id=savevideotophotosalbum)      | 保存视频到系统相册                 |
| [uni.createVideoContext](/api/media/video-context?id=createvideocontext) | 视频组件管理                       |

##### 相机组件管理
##### Camera component management

| API                                                | 说明         |
| :------------------------------------------------- | :----------- |
| [uni.createCameraContext](media/camera-context.md) | 相机组件管理 |

##### 直播组件管理
##### Live stream component management

| API                                                         | 说明         |
| :---------------------------------------------------------- | :----------- |
| [uni.createLivePlayerContext](media/live-player-context.md) | 直播组件管理 |

#### 文件
#### Document

| API                                                   | 说明                 |
| :---------------------------------------------------- | :------------------- |
| [uni.saveFile](file/file?id=savefile)                 | 保存文件             |
| [uni.getSavedFileList](file/file?id=getsavedfilelist) | 获取已保存的文件列表 |
| [uni.getSavedFileInfo](file/file?id=getsavedfileinfo) | 获取已保存的文件信息 |
| [uni.removeSavedFile](file/file?id=removesavedfile)   | 删除已保存的文件信息 |
| [uni.getFileInfo](/api/file/file?id=getfileinfo)      | 获取文件信息         |
| [uni.openDocument](file/file?id=opendocument)         | 打开文件             |

#### 数据缓存
#### Data cache

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

#### 位置
#### Location

##### 获取位置

| API                                                       | 说明             |
| :-------------------------------------------------------- | :--------------- |
| [uni.getLocation](location/location?id=getlocation)       | 获取当前位置     |
| [uni.chooseLocation](location/location?id=chooselocation) | 打开地图选择位置 |

##### 查看位置
##### View location

| API                                                        | 说明         |
| :--------------------------------------------------------- | :----------- |
| [uni.openLocation](location/open-location?id=openlocation) | 打开内置地图 |

##### 地图组件控制
##### Map component control

| API                                                      | 说明         |
| :------------------------------------------------------- | :----------- |
| [uni.createMapContext](location/map?id=createmapcontext) | 地图组件控制 |

#### 设备
#### Device

##### 系统信息
##### System message

| API                                                       | 说明                                                 |
| :-------------------------------------------------------- | :--------------------------------------------------- |
| [uni.getSystemInfo](system/info?id=getsysteminfo)         | 获取系统信息                                         |
| [uni.getSystemInfoSync](system/info?id=getsysteminfosync) | 获取系统信息                                         |
| [uni.canIUse](/api/system/info?id=caniuse)                | 判断应用的 API，回调，参数，组件等是否在当前版本可用 |

##### 内存

| API                                                            | 说明                 |
| :------------------------------------------------------------- | :------------------- |
| [uni.onMemoryWarning](/api/system/memory?id=wxonmemorywarning) | 监听内存不足告警事件 |

##### 网络状态
##### Network status

| API                                                                    | 说明                 |
| :--------------------------------------------------------------------- | :------------------- |
| [uni.getNetworkType](system/network?id=getnetworktype)                 | 获取网络类型         |
| [uni.onNetworkStatusChange](system/network?id=onnetworkstatuschange)   | 监听网络状态变化     |
| [uni.offNetworkStatusChange](system/network?id=offnetworkstatuschange) | 取消监听网络状态变化 |

##### 加速度计
##### Accelerometer

| API                                                                          | 说明               |
| :--------------------------------------------------------------------------- | :----------------- |
| [uni.onAccelerometerChange](system/accelerometer?id=onaccelerometerchange)   | 监听加速度数据     |
| [uni.offAccelerometerChange](system/accelerometer?id=offaccelerometerchange) | 取消监听加速度数据 |
| [uni.startAccelerometer](system/accelerometer?id=startaccelerometer)         | 开始监听加速度数据 |
| [uni.stopAccelerometer](system/accelerometer?id=stopaccelerometer)           | 停止监听加速度数据 |

##### 罗盘
##### Compass

| API                                                        | 说明             |
| :--------------------------------------------------------- | :--------------- |
| [uni.onCompassChange](system/compass?id=oncompasschange)   | 监听罗盘数据     |
| [uni.offCompassChange](system/compass?id=offcompasschange) | 取消监听罗盘数据 |
| [uni.startCompass](system/compass?id=startcompass)         | 开始监听罗盘数据 |
| [uni.stopCompass](system/compass?id=stopcompass)           | 停止监听罗盘数据 |

##### 陀螺仪

| API                                                                 | 说明               |
| :------------------------------------------------------------------ | :----------------- |
| [uni.onGyroscopeChange](/api/system/gyroscope?id=ongyroscopechange) | 监听陀螺仪数据     |
| [uni.startGyroscope](/api/system/gyroscope?id=startgyroscope)       | 开始监听陀螺仪数据 |
| [uni.stopGyroscope](/api/system/gyroscope?id=stopgyroscope)         | 停止监听陀螺仪数据 |

##### 拨打电话
##### Dial number

| API                                                | 说明     |
| :------------------------------------------------- | :------- |
| [uni.makePhoneCall](system/phone?id=makephonecall) | 拨打电话 |

##### 扫码
##### Scan code

| API                                        | 说明 |
| :----------------------------------------- | :--- |
| [uni.scanCode](system/barcode?id=scancode) | 扫码 |

##### 剪切板
##### Clipboard

| API                                                          | 说明           |
| :----------------------------------------------------------- | :------------- |
| [uni.setClipboardData](system/clipboard?id=setclipboarddata) | 设置剪贴板内容 |
| [uni.getClipboardData](system/clipboard?id=getclipboarddata) | 获取剪贴板内容 |

##### 屏幕亮度
##### Screen brightness

| API                                                                 | 说明                 |
| :------------------------------------------------------------------ | :------------------- |
| [uni.setScreenBrightness](system/brightness?id=setscreenbrightness) | 设置屏幕亮度         |
| [uni.getScreenBrightness](system/brightness?id=getscreenbrightness) | 获取屏幕亮度         |
| [uni.setKeepScreenOn](system/brightness?id=setkeepscreenon)         | 设置是否保持常亮状态 |

##### 用户截屏事件

| API                                                   | 说明             |
| :---------------------------------------------------- | :--------------- |
| [uni.onUserCaptureScreen](/api/system/capture-screen) | 监听用户截屏事件 |

##### 振动
##### Vibration

| API                                                | 说明                     |
| :------------------------------------------------- | :----------------------- |
| [uni.vibrate](system/vibrate?id=vibrate)           | 使手机发生振动           |
| [uni.vibrateLong](system/vibrate?id=vibratelong)   | 使手机发生较长时间的振动 |
| [uni.vibrateShort](system/vibrate?id=vibrateshort) | 使手机发生较短时间的振动 |

##### 手机联系人
##### Mobile phone contact

| API                                                      | 说明           |
| :------------------------------------------------------- | :------------- |
| [uni.addPhoneContact](system/contact?id=addphonecontact) | 添加手机通讯录 |

##### 蓝牙
##### Bluetooth

| API                                                                                           | 说明                               |
| :-------------------------------------------------------------------------------------------- | :--------------------------------- |
| [uni.openBluetoothAdapter](/api/system/bluetooth?id=openbluetoothadapter)                     | 初始化蓝牙模块                     |
| [uni.startBluetoothDevicesDiscovery](/api/system/bluetooth?id=startbluetoothdevicesdiscovery) | 搜寻附近的蓝牙外围设备             |
| [uni.onBluetoothDeviceFound](/api/system/bluetooth?id=onbluetoothdevicefound)                 | 监听寻找到新设备的事件             |
| [uni.stopBluetoothDevicesDiscovery](/api/system/bluetooth?id=stopbluetoothdevicesdiscovery)   | 停止搜寻                           |
| [uni.onBluetoothAdapterStateChange](/api/system/bluetooth?id=onbluetoothadapterstatechange)   | 监听蓝牙适配器状态变化事件         |
| [uni.getConnectedBluetoothDevices](/api/system/bluetooth?id=getconnectedbluetoothdevices)     | 根据 uuid 获取处于已连接状态的设备 |
| [uni.getBluetoothDevices](/api/system/bluetooth?id=getbluetoothdevices)                       | 获取已发现的蓝牙设备               |
| [uni.getBluetoothAdapterState](/api/system/bluetooth?id=getbluetoothadapterstate)             | 获取本机蓝牙适配器状态             |
| [uni.closeBluetoothAdapter](/api/system/bluetooth?id=closebluetoothadapter)                   | 关闭蓝牙模块                       |

##### 低耗蓝牙
##### Bluetooth Low Energy

| API                                                                                             | 说明                                                   |
| :---------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [uni.writeBLECharacteristicValue](/api/system/ble?id=writeblecharacteristicvalue)               | 向低功耗蓝牙设备特征值中写入二进制数据                 |
| [uni.readBLECharacteristicValue](/api/system/ble?id=readblecharacteristicvalue)                 | 读取低功耗蓝牙设备的特征值的二进制数据值               |
| [uni.onBLEConnectionStateChange](/api/system/ble?id=onbleconnectionstatechange)                 | 监听低功耗蓝牙连接状态的改变事件                       |
| [uni.onBLECharacteristicValueChange](/api/system/ble?id=onblecharacteristicvaluechange)         | 监听低功耗蓝牙设备的特征值变化事件                     |
| [uni.notifyBLECharacteristicValueChange](/api/system/ble?id=notifyblecharacteristicvaluechange) | 启用蓝牙低功耗设备特征值变化时的 notify 功能，订阅特征 |
| [uni.getBLEDeviceServices](/api/system/ble?id=getbledeviceservices)                             | 获取蓝牙设备所有服务(service)                          |
| [uni.getBLEDeviceCharacteristics](/api/system/ble?id=getbledevicecharacteristics)               | 获取蓝牙设备某个服务中所有特征值(characteristic)       |
| [uni.createBLEConnection](/api/system/ble?id=createbleconnection)                               | 连接低功耗蓝牙设备                                     |
| [uni.closeBLEConnection](/api/system/ble?id=closebleconnection)                                 | 断开与低功耗蓝牙设备的连接                             |

##### iBeacon

| API                                                                       | 说明                            |
| :------------------------------------------------------------------------ | :------------------------------ |
| [uni.onBeaconServiceChange](/api/system/ibeacon?id=onbeaconservicechange) | 监听 iBeacon 服务状态变化事件   |
| [uni.onBeaconUpdate](/api/system/ibeacon?id=onbeaconupdate)               | 监听 iBeacon 设备更新事件       |
| [uni.getBeacons](/api/system/ibeacon?id=getbeacons)                       | 获取所有已搜索到的 iBeacon 设备 |
| [uni.startBeaconDiscovery](/api/system/ibeacon?id=startbeacondiscovery)   | 停止搜索附近的 iBeacon 设备     |
| [uni.stopBeaconDiscovery](/api/system/ibeacon?id=stopbeacondiscovery)     | 开始搜索附近的 iBeacon 设备     |

##### 生物认证
##### Biometric authentication

| API                                                                                                      | 说明                                     |
| :------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| [uni.startSoterAuthentication](/api/system/authentication?id=startsoterauthentication)                   | 开始生物认证                             |
| [uni.checkIsSupportSoterAuthentication](/api/system/authentication?id=checkissupportsoterauthentication) | 获取本机支持的生物认证方式               |
| [uni.checkIsSoterEnrolledInDevice](/api/system/authentication?id=checkissoterenrolledindevice)           | 获取设备内是否录入如指纹等生物信息的接口 |

#### 界面
#### Interface

##### 交互反馈
##### Interactive feedback

| API                                                 | 说明           |
| :-------------------------------------------------- | :------------- |
| [uni.showToast](ui/prompt?id=showtoast)             | 显示提示框     |
| [uni.showLoading](ui/prompt?id=showloading)         | 显示加载提示框 |
| [uni.hideToast](ui/prompt?id=hidetoast)             | 隐藏提示框     |
| [uni.hideLoading](ui/prompt?id=hideloading)         | 隐藏加载提示框 |
| [uni.showModal](ui/prompt?id=showmodal)             | 显示模态弹窗   |
| [uni.showActionSheet](ui/prompt?id=showactionsheet) | 显示菜单列表   |

##### 设置导航条
##### Set navigation bar

| API                                                                          | 说明               |
| :--------------------------------------------------------------------------- | :----------------- |
| [uni.setNavigationBarTitle](ui/navigationbar?id=setnavigationbartitle)       | 设置当前页面标题   |
| [uni.setNavigationBarColor](/api/ui/navigationbar?id=setnavigationbarcolor)  | 设置页面导航条颜色 |
| [uni.showNavigationBarLoading](ui/navigationbar?id=shownavigationbarloading) | 显示导航条加载动画 |
| [uni.hideNavigationBarLoading](ui/navigationbar?id=hidenavigationbarloading) | 隐藏导航条加载动画 |

##### 设置 TabBar

| API                                                          | 说明                             |
| :----------------------------------------------------------- | :------------------------------- |
| [uni.setTabBarItem](/api/ui/tabbar?id=settabbaritem)         | 动态设置 tabBar 某一项的内容     |
| [uni.setTabBarStyle](/api/ui/tabbar?id=settabbarstyle)       | 动态设置 tabBar 的整体样式       |
| [uni.hideTabBar](/api/ui/tabbar?id=hidetabbar)               | 隐藏 tabBar                      |
| [uni.showTabBar](/api/ui/tabbar?id=showtabbar)               | 显示 tabBar                      |
| [uni.setTabBarBadge](/api/ui/tabbar?id=settabbarbadge)       | 为 tabBar 某一项的右上角添加文本 |
| [uni.removeTabBarBadge](/api/ui/tabbar?id=removetabbarbadge) | 移除 tabBar 某一项右上角的文本   |
| [uni.showTabBarRedDot](/api/ui/tabbar?id=showtabbarreddot)   | 显示 tabBar 某一项的右上角的红点 |
| [uni.hideTabBarRedDot](/api/ui/tabbar?id=hidetabbarreddot)   | 隐藏 tabBar 某一项的右上角的红点 |

##### 背景

| API                                                                     | 说明                                     |
| :---------------------------------------------------------------------- | :--------------------------------------- |
| [uni.setBackgroundColor](/api/ui/bgcolor?id=setbackgroundcolor)         | 动态设置窗口的背景色。                   |
| [uni.setBackgroundTextStyle](/api/ui/bgcolor?id=setbackgroundtextstyle) | 动态设置下拉背景字体、loading 图的样式。 |

##### 动画
##### Animation

| API                                                         | 说明                                                                                                                          |
| :---------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [uni.createAnimation](/api/ui/animation?id=createanimation) | 创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。 |

##### 滚动
##### Scroll

| API                                                | 说明                   |
| :------------------------------------------------- | :--------------------- |
| [uni.pageScrollTo](/api/ui/scroll?id=pagescrollto) | 将页面滚动到目标位置。 |

##### 绘画
##### Painting

| API                                                          | 说明                 |
| :----------------------------------------------------------- | :------------------- |
| [uni.createCanvasContext](/api/canvas/createCanvasContext)   | 创建绘图上下文       |
| [uni.canvasToTempFilePath](/api/canvas/canvasToTempFilePath) | 将画布内容保存成文件 |
| [uni.canvasGetImageData](/api/canvas/canvasGetImageData)     | 获取画布图像数据     |
| [uni.canvasPutImageData](/api/canvas/canvasPutImageData)     | 设置画布图像数据     |

##### 下拉刷新
##### Pull down to refresh

| API                                                                  | 说明                       |
| :------------------------------------------------------------------- | :------------------------- |
| [onPullDownRefresh](/api/ui/pulldown?id=onpulldownrefresh)           | 监听该页面用户下拉刷新事件 |
| [uni.startPullDownRefresh](/api/ui/pulldown?id=startpulldownrefresh) | 开始下拉刷新               |
| [uni.stopPullDownRefresh](/api/ui/pulldown?id=stoppulldownrefresh)   | 停止当前页面下拉刷新       |

##### 节点信息
##### Node information

| API                                                                                | 说明                   |
| :--------------------------------------------------------------------------------- | :--------------------- |
| [uni.createSelectorQuery](ui/nodes-info?id=createselectorquery)                    | 创建查询请求           |
| [selectorQuery.select](/api/ui/nodes-info?id=selectorquery-对象的方法列表)         | 根据选择器选择单个节点 |
| [selectorQuery.selectAll](/api/ui/nodes-info?id=selectorquery-对象的方法列表)      | 根据选择器选择全部节点 |
| [selectorQuery.selectViewport](/api/ui/nodes-info?id=selectorquery-对象的方法列表) | 选择显示区域           |
| [selectorQuery.exec](/api/ui/nodes-info?id=selectorquery-对象的方法列表)           | 执行查询请求           |
| [nodesRef.boundingClientRect](/api/ui/nodes-info?id=nodesref-对象的方法列表)       | 获取布局位置和尺寸     |
| [nodesRef.scrollOffset](/api/ui/nodes-info?id=nodesref-对象的方法列表)             | 获取滚动位置           |
| [nodesRef.fields](/api/ui/nodes-info?id=nodesref-对象的方法列表)                   | 获取任意字段           |

##### 节点布局相交状态
##### Node layout intersection state

| API                                                                                                             | 说明                           |
| :-------------------------------------------------------------------------------------------------------------- | :----------------------------- |
| [uni.createIntersectionObserver](ui/intersection-observer?id=createintersectionobserver)                        | 创建 IntersectionObserver 对象 |
| [intersectionObserver.relativeTo](/api/ui/intersection-observer?id=intersectionobserver-对象的方法列表)         | 指定参照节点                   |
| [intersectionObserver.relativeToViewport](/api/ui/intersection-observer?id=intersectionobserver-对象的方法列表) | 指定页面显示区域作为参照区域   |
| [intersectionObserver.observe](/api/ui/intersection-observer?id=intersectionobserver-对象的方法列表)            | 指定目标节点并开始监听         |
| [intersectionObserver.disconnect](/api/ui/intersection-observer?id=intersectionobserver-对象的方法列表)         | 停止监听                       |

#### 路由
#### Routing

| API                                             | 说明                                                                         |
| :---------------------------------------------- | :--------------------------------------------------------------------------- |
| [uni.navigateTo](/api/router?id=navigateto)     | 保留当前页面，跳转到应用内的某个页面，使用 uni.navigateBack 可以返回到原页面 |
| [uni.redirectTo](/api/router?id=redirectto)     | 关闭当前页面，跳转到应用内的某个页面                                         |
| [uni.reLaunch](/api/router?id=relaunch)         | 关闭所有页面，打开到应用内的某个页面                                         |
| [uni.switchTab](/api/router?id=switchtab)       | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面                             |
| [uni.navigateBack](/api/router?id=navigateback) | 关闭当前页面，返回上一页面或多级页面                                         |

#### 键盘

| API                                             | 说明                                                                         |
| :---------------------------------------------- | :--------------------------------------------------------------------------- |
| [uni.hideKeyboard](/api/key.html#hidekeyboard)     | 隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。 |
| [uni.onKeyboardHeightChange](/api/key.html#onkeyboardheightchange)     | 监听键盘高度变化                                         |
| [uni.offKeyboardHeightChange](/api/key.html#offkeyboardheightchange)         | 取消监听键盘高度变化事件                                         |
| [uni.getSelectedTextRange](/api/key?id=getselectedtextrange)       | 在input、textarea等focus之后，获取输入框的光标位置                             |

#### 第三方服务

| API                                                                  | 说明                                                            |
| :------------------------------------------------------------------- | :-------------------------------------------------------------- |
| [uni.getProvider](/api/plugins/provider?id=getprovider)              | 获取服务供应商                                                  |
| [uni.login](/api/plugins/login?id=login)                             | 登录                                                            |
| [uni.getUserInfo](/api/plugins/login?id=getuserinfo)                 | 获取用户信息                                                    |
| [uni.getuserprofile](/api/plugins/login?id=getuserprofile)           | 获取用户信息。每次请求都会弹出授权窗口，用户同意后返回 userInfo |
| [uni.checkSession](/api/plugins/login?id=checkSession)               | 检查登录状态是否过期                                            |
| [uni.preLogin](/api/plugins/login?id=prelogin)                       | 预登录                                                          |
| [uni.closeAuthView](/api/plugins/login?id=closeauthview)             | 关闭一键登录页面                                                |
| [uni.getCheckBoxState](/api/plugins/login?id=getcheckboxstate)       | 获取一键登录条款勾选框状态                                      |
| [uni.getUniverifyManager](/api/plugins/login?id=getUniverifyManager) | 获取全局唯一的一键登录管理器 univerifyManager                   |
| [uni.share](/api/plugins/share?id=share)                             | 分享                                                            |
| [uni.shareWithSystem](/api/plugins/share?id=sharewithsystem)         | 使用系统分享                                                    |
| [uni.requestPayment](/api/plugins/payment?id=requestpayment)         | 支付                                                            |
| [uni.subscribePush](/api/plugins/push?id=subscribepush)              | 开启推送                                                        |
| [uni.unsubscribePush](/api/plugins/push?id=unsubscribepush)          | 关闭推送                                                        |
| [uni.onPush](/api/plugins/push?id=onpush)                            | 监听透传数据                                                    |
| [uni.offPush](/api/plugins/push?id=offpush)                          | 移除监听透传数据                                                |

#### 广告

| API                                             | 说明                                                             |
| :---------------------------------------------- | :--------------------------------------------------------------- |
| [激励视频广告](/api/a-d/rewarded-video.html)    | 激励视频广告，是 cpm 收益最高的广告形式                          |
| [全屏视频广告](/api/a-d/full-screen-video.html) | 全屏视频广告                                                     |
| [内容联盟广告](/api/a-d/content-page.html)      | 内容联盟广告                                                     |
| [插屏广告](/api/a-d/interstitial.html)          | 插屏广告                                                         |
| [互动游戏](/api/a-d/interactive.html)           | 互动游戏是 DCloud 联合三方服务商为开发者提供新的广告场景增值服务 |

#### 平台扩展
#### Platform extension

| API                                                                         | 说明              |
| :-------------------------------------------------------------------------- | :---------------- |
| [uni.requireNativePlugin](/api/extend/native-plugin?id=requirenativeplugin) | 引入 App 原生插件 |

#### 其他

##### 授权

| API                                                | 说明                   |
| :------------------------------------------------- | :--------------------- |
| [uni.authorize](/api/other/authorize?id=authorize) | 提前向用户发起授权请求 |

##### 设置

| API                                                  | 说明                                               |
| :--------------------------------------------------- | :------------------------------------------------- |
| [uni.openSetting](/api/other/setting?id=opensetting) | 调起客户端小程序设置界面，返回用户设置的操作结果。 |
| [uni.getSetting](/api/other/setting?id=getsetting)   | 获取用户的当前设置。                               |

##### 收货地址

| API                                                             | 说明             |
| :-------------------------------------------------------------- | :--------------- |
| [uni.chooseAddress](/api/other/choose-address?id=chooseaddress) | 获取用户收货地址 |

##### 获取发票抬头

| API                                                                      | 说明                                                  |
| :----------------------------------------------------------------------- | :---------------------------------------------------- |
| [uni.chooseInvoiceTitle](/api/other/invoice-title?id=chooseinvoicetitle) | 选择用户的发票抬头，需要用户授权 scope.invoiceTitle。 |

##### 小程序跳转

| API                                                                                   | 说明                                                                     |
| :------------------------------------------------------------------------------------ | :----------------------------------------------------------------------- |
| [uni.navigateToMiniProgram](/api/other/open-miniprogram?id=navigatetominiprogram)     | 打开另一个小程序。                                                       |
| [uni.navigateBackMiniProgram](/api/other/open-miniprogram?id=navigatebackminiprogram) | 跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功。 |

##### 模板消息

| API                                                                                                      | 说明                                                                                                              |
| :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| [addTemplate](/api/other/template?id=addtemplate)                                                        | 组合模板并添加至帐号下的个人模板库。                                                                              |
| [deleteTemplate](/api/other/template?id=deletetemplate)                                                  | 删除帐号下的某个模板。                                                                                            |
| [getTemplateLibraryById](/api/other/template?id=gettemplatelibrarybyid)                                  | 获取模板库某个模板标题下关键词库。                                                                                |
| [getTemplateLibraryList](/api/other/template?id=gettemplatelibrarylist)                                  | 获取 APP 模板库标题列表                                                                                           |
| [getTemplateList](/api/other/template?id=gettemplatelist)                                                | 获取帐号下已存在的模板列表。                                                                                      |
| [sendTemplateMessage](/api/other/template?id=sendtemplatemessage)                                        | 发送模板消息                                                                                                      |
| [alipay.open.app.mini.templatemessage.send](/api/other/template?id=alipayopenappminitemplatemessagesend) | 支付宝小程序通过 openapi 给用户触达消息，主要为支付后的触达（通过消费 id）和用户提交表单后的触达（通过 formId）。 |

##### 小程序更新

| API                                                           | 说明                                                                   |
| :------------------------------------------------------------ | :--------------------------------------------------------------------- |
| [uni.getUpdateManager](/api/other/update?id=getupdatemanager) | 返回全局唯一的版本更新管理器对象： updateManager，用于管理小程序更新。 |

##### 调试

| API                                                                 | 说明                                           |
| :------------------------------------------------------------------ | :--------------------------------------------- |
| [uni.setEnableDebug](/api/other/set-enable-debug?id=setenabledebug) | 设置是否打开调试开关。此开关对正式版也能生效。 |

##### 获取第三方平台数据

| API                                                                  | 说明                             |
| :------------------------------------------------------------------- | :------------------------------- |
| [uni.getExtConfig](/api/other/get-extconfig?id=getextconfig)         | 获取第三方平台自定义的数据字段。 |
| [uni.getExtConfigSync](/api/other/get-extconfig?id=getextconfigsync) | uni.getExtConfig 的同步版本。    |

因文档同步原因，本页面列出的API可能不全。如在本文未找到相关API，可以在左侧树中寻找或使用文档右上角的搜索功能。
