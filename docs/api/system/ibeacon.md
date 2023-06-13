**iBeacon API 平台差异说明**
**Platform difference description for iBeacon APIs**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|x|x|√|x|x|x|

### uni.onBeaconServiceChange(CALLBACK)

监听 iBeacon 服务状态变化事件
listen to iBeacon service status change events

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|available|boolean|服务目前是否可用|
| available| boolean| Is the service is currently available?|
|discovering|boolean|目前是否处于搜索状态|
| discovering| boolean| Whether it is in the searching state currently|

### uni.onBeaconUpdate(CALLBACK)

监听 iBeacon 设备更新事件
listen to iBeacon device update events

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|beacons|Array<[IBeaconInfo](/api/system/ibeacon?id=ibeaconinfo)>|当前搜寻到的所有 iBeacon 设备列表|
| beacons| Array<[IBeaconInfo](/api/system/ibeacon?id=ibeaconinfo)>| List of all iBeacon devices that are searched currently|

### uni.getBeacons(OBJECT)

获取所有已搜索到的 iBeacon 设备
Obtain all searched iBeacon devices.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|success|function||否|接口调用成功的回调函数|
| success| function| | No| Callback function for successful interface calling|
|fail|function||否|接口调用失败的回调函数|
| fail| function| | No| Callback function for failed interface calling|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明：**
**Success return parameter description:**

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|beacons|Array<[IBeaconInfo](/api/system/ibeacon?id=ibeaconinfo)>|iBeacon 设备列表|
| beacons| Array<[IBeaconInfo](/api/system/ibeacon?id=ibeaconinfo)>| iBeacon device list|

#### 错误
#### Error

|错误码|错误信息|说明|
| Error code| Error message| Instruction|
|:-|:-|:-|
|0|ok|正常|
| 0| ok| Normal|
|11000|unsupport|系统或设备不支持|
| 11000| unsupport| Not supported by the system or device|
|11001|bluetooth service unavailable|蓝牙服务不可用|
| 11001| bluetooth service unavailable| Bluetooth service is unavailable|
|11002|location service unavailable|位置服务不可用|
| 11002| location service unavailable| Location service is unavailable|
|11003|already start|已经开始搜索|
| 11003| already start| Search started|

### uni.startBeaconDiscovery(OBJECT)

开始搜索附近的 iBeacon 设备
Start searching for nearby iBeacon devices

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|uuids|Array＜String＞||是|iBeacon 设备广播的 uuid 列表|
| uuids| Array＜String＞| | Yes| uuid list broadcast by iBeacon device|
|ignoreBluetoothAvailable|boolean|false|否|是否校验蓝牙开关，仅在 iOS 下有效|
| ignoreBluetoothAvailable| boolean| false| No| Whether to check the Bluetooth on/off, valid only on iOS|
|success|function||否|接口调用成功的回调函数|
| success| function| | No| Callback function for successful interface calling|
|fail|function||否|接口调用失败的回调函数|
| fail| function| | No| Callback function for failed interface calling|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

#### 错误
#### Error

|错误码|错误信息|说明|
| Error code| Error message| Instruction|
|:-|:-|:-|
|0|ok|正常|
| 0| ok| Normal|
|11000|unsupport|系统或设备不支持|
| 11000| unsupport| Not supported by the system or device|
|11001|bluetooth service unavailable|蓝牙服务不可用|
| 11001| bluetooth service unavailable| Bluetooth service is unavailable|
|11002|location service unavailable|位置服务不可用|
| 11002| location service unavailable| Location service is unavailable|
|11003|already start|已经开始搜索|
| 11003| already start| Search started|

#### 示例代码
#### Sample code

```js
uni.startBeaconDiscovery({
  success(res) { }
})
```

### uni.stopBeaconDiscovery(OBJECT)

停止搜索附近的 iBeacon 设备
Stop searching for nearby iBeacon devices

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|success|function||否|接口调用成功的回调函数|
| success| function| | No| Callback function for successful interface calling|
|fail|function||否|接口调用失败的回调函数|
| fail| function| | No| Callback function for failed interface calling|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

#### 错误
#### Error

|错误码|错误信息|说明|
| Error code| Error message| Instruction|
|:-|:-|:-|
|0|ok|正常|
| 0| ok| Normal|
|11000|unsupport|系统或设备不支持|
| 11000| unsupport| Not supported by the system or device|
|11001|bluetooth service unavailable|蓝牙服务不可用|
| 11001| bluetooth service unavailable| Bluetooth service is unavailable|
|11002|location service unavailable|位置服务不可用|
| 11002| location service unavailable| Location service is unavailable|
|11003|already start|已经开始搜索|
| 11003| already start| Search started|

### IBeaconInfo

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|uuid|string|iBeacon 设备广播的 uuid|
| uuid| string| uuid broadcast by iBeacon device|
|major|string|iBeacon 设备的主 id|
| major| string| Primary id of iBeacon device|
|minor|string|iBeacon 设备的次 id|
| minor| string| Secondary id of iBeacon device|
|proximity|number|表示设备距离的枚举值|
| proximity| number| Enumeration value representing device distance|
|accuracy|number|iBeacon 设备的距离|
| accuracy| number| Distance of iBeacon device|
|rssi|number|表示设备的信号强度|
| rssi| number| Indicate the signal strength of the device|


### 注意事项
### Precautions

* 未启用定位将影响 iBeacon 的正常使用。（相关反馈：[#2027](https://github.com/dcloudio/uni-app/issues/2027)）
* Disabling localization will affect the normal use of iBeacon. (Related feedback: [#2027](https://github.com/dcloudio/uni-app/issues/2027))