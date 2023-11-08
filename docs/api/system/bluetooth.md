**蓝牙 API 平台差异说明**
**Platform difference description for Bluetooth APIs**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|x|x|√|x|x|√|

### uni.openBluetoothAdapter(OBJECT)

初始化蓝牙模块
Initialize the Bluetooth module

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
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
|---|---|---|
|0|ok|正常|
| 0| ok| Normal|
|-1|already connect|已连接|
|-1|already connect|connected|
|10000|not init|未初始化蓝牙适配器|
| 10000| not init| Bluetooth is not initialized|
|10001|not available|当前蓝牙适配器不可用|
| 10001| not available| The bluetooth adapter is currently unavailable.|
|10002|no device|没有找到指定设备|
| 10002| no device| Specified device not found|
|10003|connection fail|连接失败|
| 10003| connection fail| Connection failed|
|10004|no service|没有找到指定服务|
| 10004| no service| Specified service not found|
|10005|no characteristic|没有找到指定特征值|
| 10005| no characteristic| Specified feature value not found|
|10006|no connection|当前连接已断开|
| 10006| no connection| The current connection is disconnected|
|10007|property not support|当前特征值不支持此操作|
| 10007| property not support| The current characteristic value does not support this operation.|
|10008|system error|其余所有系统上报的异常|
| 10008| system error| Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
| 10009| system not support| Android system-specific. BLE is not available on system version lower than 4.3.|
|10010|already connect|已连接|
|10010|already connect|Connected|
|10011|need pin|配对设备需要配对码|
|10011|need pin|Pairing device requires pairing code|
|10012|operate time out|连接超时|
|10012|operate time out|Connection timed out|
|10013|invalid_data|连接 deviceId 为空或者是格式不正确|
|10013|invalid_data|The connection deviceId is empty or in an incorrect format|

**注意**
**Notice**

*   其他蓝牙相关 API 必须在 [`uni.openBluetoothAdapter`](/api/system/bluetooth?id=openbluetoothadapter) 调用之后使用。否则 API 会返回错误（errCode=10000）。
* Other Bluetooth-related APIs must be used after calling [`uni.openBluetoothAdapter`](/api/system/bluetooth?id=openbluetoothadapter). Otherwise, the API will return an error (errCode=10000).
*   在用户蓝牙开关未开启或者手机不支持蓝牙功能的情况下，调用 [`uni.openBluetoothAdapter`](/api/system/bluetooth?id=openbluetoothadapter) 会返回错误（errCode=10001），表示手机蓝牙功能不可用。此时APP蓝牙模块已经初始化完成，可通过 [`uni.onBluetoothAdapterStateChange`](/api/system/bluetooth?id=onbluetoothadapterstatechange) 监听手机蓝牙状态的改变，也可以调用蓝牙模块的所有API。
* If the Bluetooth of the user is disabled or the mobile phone does not support Bluetooth, calling [`uni.openBluetoothAdapter`](/api/system/bluetooth?id=openbluetoothadapter) will return an error (errCode=10001), indicating that the Bluetooth function of the mobile phone is unavailable. At this time, the Bluetooth module on the APP has been initialized. You can listen to the changes of Bluetooth status of mobile phone through [`uni.onBluetoothAdapterStateChange`](/api/system/bluetooth?id=onbluetoothadapterstatechange) or call all the APIs of the Bluetooth module.

**示例代码**
**Sample code**

```javascript
uni.openBluetoothAdapter({
  success(res) {
    console.log(res)
  }
})
```

### uni.startBluetoothDevicesDiscovery(OBJECT)

开始搜寻附近的蓝牙外围设备。**此操作比较耗费系统资源，请在搜索并连接到设备后调用 [`uni.stopBluetoothDevicesDiscovery`](/api/system/bluetooth?id=stopbluetoothdevicesdiscovery) 方法停止搜索。**
Start to search for nearby Bluetooth peripherals. **Such an operation consumes system resources. Please call the [`uni.stopBluetoothDevicesDiscovery`](/api/system/bluetooth?id=stopbluetoothdevicesdiscovery) method to stop searching after searching and connecting to the device.**


**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
|services|Array&lt;String&gt;||否|要搜索的蓝牙设备主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备。|
|services|Array&lt;String&gt;||No|List of uuids of the bluetooth device primary service to search for. Some bluetooth devices broadcast the uuid of their own primary service. If this parameter is set, only the bluetooth devices whose broadcast packets have the corresponding uuid's main service will be searched. It is recommended to mainly filter out other Bluetooth devices that do not need to be processed through this parameter. |
|allowDuplicatesKey|boolean|false|否|是否允许重复上报同一设备。如果允许重复上报，则 `uni.onBlueToothDeviceFound` 方法会多次上报同一设备，但是 RSSI 值会有不同。|
| allowDuplicatesKey| boolean| false| No| Whether to allow repeatedly reporting the same device. If repeated reporting is allowed, the `uni.onBlueToothDeviceFound` method will report the same device multiple times but with a different RSSI value each time.|
|interval|number|0|否|上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。|
| interval| number| 0| No| Interval for reporting devices. 0 means reporting immediately when a new device is found, and other values means reporting according to the transition intervals.|
|powerLevel|string|medium|否|扫描模式，越高扫描越快，也越耗电，仅安卓支持。low：低，medium：中，high：高。仅京东小程序支持|
|powerLevel|string|medium|No|Scanning mode, the higher the scanning speed, the more power consumption, only supported by Android. low: low, medium: medium, high: high. Only JD.com applet support|
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
|---|---|---|
|0|ok|正常|
| 0| ok| Normal|
|10000|not init|未初始化蓝牙适配器|
| 10000| not init| Bluetooth is not initialized|
|10001|not available|当前蓝牙适配器不可用|
| 10001| not available| The bluetooth adapter is currently unavailable.|
|10002|no device|没有找到指定设备|
| 10002| no device| Specified device not found|
|10003|connection fail|连接失败|
| 10003| connection fail| Connection failed|
|10004|no service|没有找到指定服务|
| 10004| no service| Specified service not found|
|10005|no characteristic|没有找到指定特征值|
| 10005| no characteristic| Specified feature value not found|
|10006|no connection|当前连接已断开|
| 10006| no connection| The current connection is disconnected|
|10007|property not support|当前特征值不支持此操作|
| 10007| property not support| The current characteristic value does not support this operation.|
|10008|system error|其余所有系统上报的异常|
| 10008| system error| Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
| 10009| system not support| Android system-specific. BLE is not available on system version lower than 4.3.|
|10010|already connect|已连接|
|10010|already connect|Connected|
|10011|need pin|配对设备需要配对码|
|10011|need pin|Pairing device requires pairing code|
|10012|operate time out|连接超时|
|10012|operate time out|Connection timed out|
|10013|invalid_data|连接 deviceId 为空或者是格式不正确|
|10013|invalid_data|The connection deviceId is empty or in an incorrect format|

**注意：** 
**Notice:**

* App 端目前仅支持发现ble蓝牙设备，更多蓝牙设备发现，可以使用 Native.js，参考：[https://ask.dcloud.net.cn/article/114](https://ask.dcloud.net.cn/article/114)。也可以在插件市场获取[原生插件](https://ext.dcloud.net.cn/search?q=%E8%93%9D%E7%89%99&cat1=5&cat2=51&orderBy=UpdatedDate)
* The App side currently only supports the discovery of ble Bluetooth devices. For more Bluetooth device discovery, you can use Native.js, refer to: [https://ask.dcloud.net.cn/article/114](https://ask.dcloud .net.cn/article/114). You can also get the [native plugin] in the plugin market (https://ext.dcloud.net.cn/search?q=%E8%93%9D%E7%89%99&cat1=5&cat2=51&orderBy=UpdatedDate)


**示例代码**
**Sample code**

```javascript
// 以微信硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
// Take the Bluetooth smart light of the WeChat hardware platform as an example, the UUID of the main service is FEE7. Pass in this parameter to only search for devices whose main service UUID is FEE7
uni.startBluetoothDevicesDiscovery({
  services: ['FEE7'],
  success(res) {
    console.log(res)
  }
})
```

### uni.onBluetoothDeviceFound(CALLBACK)

监听寻找到新设备的事件
listen to the event of finding a new device

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|devices|Array&lt;Object&gt;|新搜索到的设备列表|
| devices| Array\<Object>| List of newly searched devices|

**devices 的结构**
**Structure of devices**

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|name|string|蓝牙设备名称，某些设备可能没有|
| name| string| Bluetooth device name. Some devices may not have a name|
|deviceId|string|用于区分设备的 id|
| deviceId| string| Id used to distinguish the devices|
|RSSI|number|当前蓝牙设备的信号强度|
| RSSI| number| Signal strength of the current Bluetooth device|
|advertisData|ArrayBuffer|当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。|
| advertisData| ArrayBuffer| ManufacturerData segment in the broadcast data segment of the current Bluetooth device.|
|advertisServiceUUIDs|Array&lt;String&gt;|当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段|
| advertisServiceUUIDs| Array\<String>| ServiceUUIDs data segment in broadcast data segment of the current Bluetooth device|
|localName|string|当前蓝牙设备的广播数据段中的 LocalName 数据段|
| localName| string| The LocalName data segment in the broadcast data segment of the current Bluetooth device|
|serviceData|Object|当前蓝牙设备的广播数据段中的 ServiceData 数据段，京东小程序不支持|
|serviceData|Object|The ServiceData data segment in the broadcast data segment of the current Bluetooth device, the JD applet does not support|

**注意**
**Notice**

*   若在 [`uni.onBluetoothDeviceFound`](/api/system/bluetooth?id=onbluetoothdevicefound) 回调了某个设备，则此设备会添加到 [`uni.getBluetoothDevices`](/api/system/bluetooth?id=getbluetoothdevices) 接口获取到的数组中。
* If a device is called back in [`uni.onBluetoothDeviceFound`](/api/system/bluetooth?id=onbluetoothdevicefound), it will be added to the array obtained by the [`uni.getBluetoothDevices`](/api/system/bluetooth?id=getbluetoothdevices) interface.

**示例代码**
**Sample code**

```javascript
// ArrayBuffer转16进度字符串示例
// Example for ArrayBuffer transformed to hexadecimal string
function ab2hex(buffer) {
  const hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('')
}
uni.onBluetoothDeviceFound(function (devices) {
  console.log('new device list has founded')
  console.dir(devices)
  console.log(ab2hex(devices[0].advertisData))
})
```

### uni.stopBluetoothDevicesDiscovery(OBJECT)

停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
Stop searching for nearby Bluetooth peripherals. If the required Bluetooth device that has been found needn't to continue searching, it is recommended to call this interface to stop Bluetooth searching.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
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
|---|---|---|
|0|ok|正常|
| 0| ok| Normal|
|10000|not init|未初始化蓝牙适配器|
| 10000| not init| Bluetooth is not initialized|
|10001|not available|当前蓝牙适配器不可用|
| 10001| not available| The bluetooth adapter is currently unavailable.|
|10002|no device|没有找到指定设备|
| 10002| no device| Specified device not found|
|10003|connection fail|连接失败|
| 10003| connection fail| Connection failed|
|10004|no service|没有找到指定服务|
| 10004| no service| Specified service not found|
|10005|no characteristic|没有找到指定特征值|
| 10005| no characteristic| Specified feature value not found|
|10006|no connection|当前连接已断开|
| 10006| no connection| The current connection is disconnected|
|10007|property not support|当前特征值不支持此操作|
| 10007| property not support| The current characteristic value does not support this operation.|
|10008|system error|其余所有系统上报的异常|
| 10008| system error| Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
| 10009| system not support| Android system-specific. BLE is not available on system version lower than 4.3.|
|10010|already connect|已连接|
|10010|already connect|Connected|
|10011|need pin|配对设备需要配对码|
|10011|need pin|Pairing device requires pairing code|
|10012|operate time out|连接超时|
|10012|operate time out|Connection timed out|
|10013|invalid_data|连接 deviceId 为空或者是格式不正确|
|10013|invalid_data|The connection deviceId is empty or in an incorrect format|


**示例代码**
**Sample code**

```javascript
uni.stopBluetoothDevicesDiscovery({
  success(res) {
    console.log(res)
  }
})
```

### uni.onBluetoothAdapterStateChange(CALLBACK)

监听蓝牙适配器状态变化事件
listen to Bluetooth adapter status change events

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|available|boolean|蓝牙适配器是否可用|
| available| boolean| Is the Bluetooth adapter available?|
|discovering|boolean|蓝牙适配器是否处于搜索状态|
| discovering| boolean| Whether the Bluetooth adapter is in the searching state|

**示例代码**
**Sample code**

```javascript
uni.onBluetoothAdapterStateChange(function (res) {
  console.log('adapterState changed, now is', res)
})
```

### uni.getConnectedBluetoothDevices(OBJECT)

根据 uuid 获取处于已连接状态的设备。
Obtain the devices with connected status according to uuid.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
|services|Array&lt;String&gt;||是|蓝牙设备主 service 的 uuid 列表|
| services| Array\<String>| | Yes| uuid list of Bluetooth device main service|
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
|---|---|---|
|devices|Array&lt;Object&gt;|搜索到的设备列表|
| devices| Array\<Object>| List of searched devices|

**res.devices 的结构**
**Structure of res.devices**

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|name|string|蓝牙设备名称，某些设备可能没有|
| name| string| Bluetooth device name. Some devices may not have a name|
|deviceId|string|用于区分设备的 id|
| deviceId| string| Id used to distinguish the devices|

#### 错误
#### Error

|错误码|错误信息|说明|
| Error code| Error message| Instruction|
|---|---|---|
|0|ok|正常|
| 0| ok| Normal|
|10000|not init|未初始化蓝牙适配器|
| 10000| not init| Bluetooth is not initialized|
|10001|not available|当前蓝牙适配器不可用|
| 10001| not available| The bluetooth adapter is currently unavailable.|
|10002|no device|没有找到指定设备|
| 10002| no device| Specified device not found|
|10003|connection fail|连接失败|
| 10003| connection fail| Connection failed|
|10004|no service|没有找到指定服务|
| 10004| no service| Specified service not found|
|10005|no characteristic|没有找到指定特征值|
| 10005| no characteristic| Specified feature value not found|
|10006|no connection|当前连接已断开|
| 10006| no connection| The current connection is disconnected|
|10007|property not support|当前特征值不支持此操作|
| 10007| property not support| The current characteristic value does not support this operation.|
|10008|system error|其余所有系统上报的异常|
| 10008| system error| Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
| 10009| system not support| Android system-specific. BLE is not available on system version lower than 4.3.|
|10010|already connect|已连接|
|10010|already connect|Connected|
|10011|need pin|配对设备需要配对码|
|10011|need pin|Pairing device requires pairing code|
|10012|operate time out|连接超时|
|10012|operate time out|Connection timed out|
|10013|invalid_data|连接 deviceId 为空或者是格式不正确|
|10013|invalid_data|The connection deviceId is empty or in an incorrect format|

**示例代码** 
**Sample code**

```javascript
uni.getConnectedBluetoothDevices({
  success(res) {
    console.log(res)
  }
})
```

### uni.getBluetoothDevices(OBJECT)

获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
Get all discovered Bluetooth devices during the Bluetooth module's effective period. Devices that are already connected to the local PC are included.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
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
|devices|Array&lt;Object&gt;|uuid 对应的的已连接设备列表|
| devices| Array\<Object>| List of connected devices corresponding to uuid|

**res.devices 的结构**
**Structure of res.devices**

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|---|
|name|string|蓝牙设备名称，某些设备可能没有|
| name| string| Bluetooth device name. Some devices may not have a name|
|deviceId|string|用于区分设备的 id|
| deviceId| string| Id used to distinguish the devices|
|RSSI|number|当前蓝牙设备的信号强度|
| RSSI| number| Signal strength of the current Bluetooth device|
|advertisData|ArrayBuffer|当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。|
| advertisData| ArrayBuffer| ManufacturerData segment in the broadcast data segment of the current Bluetooth device.|
|advertisServiceUUIDs|Array&lt;String&gt;|当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段|
| advertisServiceUUIDs| Array\<String>| ServiceUUIDs data segment in broadcast data segment of the current Bluetooth device|
|localName|string|当前蓝牙设备的广播数据段中的 LocalName 数据段|
| localName| string| The LocalName data segment in the broadcast data segment of the current Bluetooth device|
|serviceData|Object|当前蓝牙设备的广播数据段中的 ServiceData 数据段|
| serviceData| Object| ServiceData data segment in broadcast data segment of the current Bluetooth device|


#### 错误
#### Error

|错误码|错误信息|说明|
| Error code| Error message| Instruction|
|---|---|---|
|0|ok|正常|
| 0| ok| Normal|
|10000|not init|未初始化蓝牙适配器|
| 10000| not init| Bluetooth is not initialized|
|10001|not available|当前蓝牙适配器不可用|
| 10001| not available| The bluetooth adapter is currently unavailable.|
|10002|no device|没有找到指定设备|
| 10002| no device| Specified device not found|
|10003|connection fail|连接失败|
| 10003| connection fail| Connection failed|
|10004|no service|没有找到指定服务|
| 10004| no service| Specified service not found|
|10005|no characteristic|没有找到指定特征值|
| 10005| no characteristic| Specified feature value not found|
|10006|no connection|当前连接已断开|
| 10006| no connection| The current connection is disconnected|
|10007|property not support|当前特征值不支持此操作|
| 10007| property not support| The current characteristic value does not support this operation.|
|10008|system error|其余所有系统上报的异常|
| 10008| system error| Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
| 10009| system not support| Android system-specific. BLE is not available on system version lower than 4.3.|
|10012|operate time out|连接超时|
|10012|operate time out|Connection timed out|
|10013|invalid_data|连接 deviceId 为空或者是格式不正确|
|10013|invalid_data|The connection deviceId is empty or in an incorrect format|

**示例代码**
**Sample code**

```javascript
// ArrayBuffer转16进度字符串示例
// Example for ArrayBuffer transformed to hexadecimal string
function ab2hex(buffer) {
  const hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('')
}
uni.getBluetoothDevices({
  success(res) {
    console.log(res)
    if (res.devices[0]) {
      console.log(ab2hex(res.devices[0].advertisData))
    }
  }
})
```

**注意**
**Notice**

*   该接口获取到的设备列表为**蓝牙模块生效期间所有搜索到的蓝牙设备**，若在蓝牙模块使用流程结束后未及时调用 [`uni.closeBluetoothAdapter`](/api/system/bluetooth?id=closebluetoothadapter) 释放资源，会存在调用该接口会返回之前的蓝牙使用流程中搜索到的蓝牙设备，可能设备已经不在用户身边，无法连接。
* The list of devices obtained by this interface is **. For all searched Bluetooth devices during the effective period of Bluetooth module**, if [`uni.closeBluetoothAdapter`](/api/system/bluetooth?id=closebluetoothadapter) is not called to release resources in time after the end of the Bluetooth module use process, there will be a problem that calling this interface will return the Bluetooth devices searched in the previous Bluetooth usage process. At this point, such devices may no longer be with the user and cannot be connected.
*   蓝牙设备在被搜索到时，系统返回的 name 字段一般为广播包中的 LocalName 字段中的设备名称，而如果与蓝牙设备建立连接，系统返回的 name 字段会改为从蓝牙设备上获取到的 `GattName`。若需要动态改变设备名称并展示，建议使用 `localName` 字段。
* When a Bluetooth device is searched, the name field returned by the system is usually the device name in the LocalName field in the broadcast packet. However, if a connection is established with the Bluetooth device, the name field returned by the system will be changed to `GattName` obtained from the Bluetooth device. If the device name needs to be dynamically changed and displayed, the `localName` field is recommended.

### uni.getBluetoothAdapterState(OBJECT)

获取本机蓝牙适配器状态。
Obtain the local Bluetooth adapter status.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
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
|---|---|---|
|discovering|boolean|是否正在搜索设备|
| discovering| boolean| Whether the device is being searched?|
|available|boolean|蓝牙适配器是否可用|
| available| boolean| Is the Bluetooth adapter available?|

#### 错误
#### Error

|错误码|错误信息|说明|
| Error code| Error message| Instruction|
|---|---|---|
|0|ok|正常|
| 0| ok| Normal|
|10000|not init|未初始化蓝牙适配器|
| 10000| not init| Bluetooth is not initialized|
|10001|not available|当前蓝牙适配器不可用|
| 10001| not available| The bluetooth adapter is currently unavailable.|
|10002|no device|没有找到指定设备|
| 10002| no device| Specified device not found|
|10003|connection fail|连接失败|
| 10003| connection fail| Connection failed|
|10004|no service|没有找到指定服务|
| 10004| no service| Specified service not found|
|10005|no characteristic|没有找到指定特征值|
| 10005| no characteristic| Specified feature value not found|
|10006|no connection|当前连接已断开|
| 10006| no connection| The current connection is disconnected|
|10007|property not support|当前特征值不支持此操作|
| 10007| property not support| The current characteristic value does not support this operation.|
|10008|system error|其余所有系统上报的异常|
| 10008| system error| Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
| 10009| system not support| Android system-specific. BLE is not available on system version lower than 4.3.|
|10010|already connect|已连接|
|10010|already connect|Connected|
|10011|need pin|配对设备需要配对码|
|10011|need pin|Pairing device requires pairing code|
|10012|operate time out|连接超时|
|10012|operate time out|Connection timed out|
|10013|invalid_data|连接 deviceId 为空或者是格式不正确|
|10013|invalid_data|The connection deviceId is empty or in an incorrect format|

**示例代码**
**Sample code**

```javascript
uni.getBluetoothAdapterState({
  success(res) {
    console.log(res)
  }
})
```

### uni.closeBluetoothAdapter(OBJECT)

关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 [`uni.openBluetoothAdapter`](/api/system/bluetooth?id=openbluetoothadapter) 成对调用。
Disable the Bluetooth module. Calling this method will disconnect all established connections and release the system resources. It is recommended to call in pairs with [`uni.openBluetoothAdapter`](/api/system/bluetooth?id=openbluetoothadapter) after using the Bluetooth process.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
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
|---|---|---|
|0|ok|正常|
| 0| ok| Normal|
|10000|not init|未初始化蓝牙适配器|
| 10000| not init| Bluetooth is not initialized|
|10001|not available|当前蓝牙适配器不可用|
| 10001| not available| The bluetooth adapter is currently unavailable.|
|10002|no device|没有找到指定设备|
| 10002| no device| Specified device not found|
|10003|connection fail|连接失败|
| 10003| connection fail| Connection failed|
|10004|no service|没有找到指定服务|
| 10004| no service| Specified service not found|
|10005|no characteristic|没有找到指定特征值|
| 10005| no characteristic| Specified feature value not found|
|10006|no connection|当前连接已断开|
| 10006| no connection| The current connection is disconnected|
|10007|property not support|当前特征值不支持此操作|
| 10007| property not support| The current characteristic value does not support this operation.|
|10008|system error|其余所有系统上报的异常|
| 10008| system error| Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
| 10009| system not support| Android system-specific. BLE is not available on system version lower than 4.3.|
|10010|already connect|已连接|
|10010|already connect|Connected|
|10011|need pin|配对设备需要配对码|
|10011|need pin|Pairing device requires pairing code|
|10012|operate time out|连接超时|
|10012|operate time out|Connection timed out|
|10013|invalid_data|连接 deviceId 为空或者是格式不正确|
|10013|invalid_data|The connection deviceId is empty or in an incorrect format|

**示例代码**
**Sample code**

```javascript
uni.closeBluetoothAdapter({
  success(res) {
    console.log(res)
  }
})
```
