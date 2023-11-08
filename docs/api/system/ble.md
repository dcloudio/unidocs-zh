**低功耗蓝牙 API 平台差异说明**
**Platform difference description for low power Bluetooth APIs**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|x|x|√|x|x|√|

### uni.setBLEMTU(OBJECT)

2.8.4+

设置蓝牙最大传输单元。需在 uni.createBLEConnection调用成功后调用，mtu 设置范围 (22,512)。安卓5.1以上有效。
Set the Bluetooth maximum transmission unit. It needs to be called after the successful invocation of uni.createBLEConnection with the mtu setting range of (22,512). Valid for Android 5.1 and above.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
|deviceId|string||是|用于区分设备的 id|
| deviceId| string| | Yes| Id used to distinguish the devices|
|mtu|number||是|最大传输单元(22,512) 区间内，单位 bytes|
| mtu| number| | Yes| Within the maximum transmission unit (22,512) interval, in byte.|
|success|function||否|接口调用成功的回调函数|
| success| function| | No| Callback function for successful interface calling|
|fail|function||否|接口调用失败的回调函数|
| fail| function| | No| Callback function for failed interface calling|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

### uni.writeBLECharacteristicValue(OBJECT)

向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用。
Write binary data into the characteristic value of the low power Bluetooth devices. Note: Successful invocation requires the characteristic value of the device supporting write.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
|deviceId|string||是|蓝牙设备 id|
| deviceId| string| | Yes| Bluetooth device id|
|serviceId|string||是|蓝牙特征值对应服务的 uuid|
| serviceId| string| | Yes| uuid of the service corresponding to Bluetooth characteristic value|
|characteristicId|string||是|蓝牙特征值的 uuid|
| characteristicId| string| | Yes| uuid of Bluetooth characteristic value|
|value|ArrayBuffer||是|蓝牙设备特征值对应的二进制值|
| value| ArrayBuffer| | Yes| Binary value corresponding to the characteristic value of Bluetooth device|
|writeType|string||是|蓝牙特征值的写模式设置，有两种模式，iOS 优先 write，安卓优先 writeNoResponse 。微信小程序支持|
|writeType|string|| is the writing mode setting of |Bluetooth eigenvalues. There are two modes, iOS prioritizes write, and Android prioritizes writeNoResponse . WeChat applet support|
|success|function||否|接口调用成功的回调函数|
| success| function| | No| Callback function for successful interface calling|
|fail|function||否|接口调用失败的回调函数|
| fail| function| | No| Callback function for failed interface calling|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| function| | No| Callback function for closed interface calling (available both for successful and failed calling)|


**writeType**

|属性|说明|
|Properties|Description|
|:-|:-|
|write|强制回复写，不支持时报错|
|write|Forcibly reply writing, an error is reported when it is not supported|
|writeNoResponse|强制无回复写，不支持时报错|
|writeNoResponse|Force no reply write, report an error if not supported|


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

#### 注意
#### Notice

*   并行调用多次会存在写失败的可能性。
* There is the possibility of write failure when calling in parallel for many times.
*   APP不会对写入数据包大小做限制，但系统与蓝牙设备会限制蓝牙4.0单次传输的数据大小，超过最大字节数后会发生写入错误，建议每次写入不超过20字节。
* APP does not limit the size of written data packets, but the system and Bluetooth devices will limit the size of data transmitted in Bluetooth 4.0 in a single time. If the maximum number of bytes is exceeded, writing errors will occur. It is recommended that no more than 20 bytes be written each time.
*   若单次写入数据过长，iOS 上存在系统不会有任何回调的情况（包括错误回调）。
* If the write-once data is too long, there is a situation that the system will not have any callback (including error callback) on iOS.
*   安卓平台上，在调用 `notifyBLECharacteristicValueChange` 成功后立即调用 `writeBLECharacteristicValue` 接口，在部分机型上会发生 10008 系统错误
* On the Android platform, the `writeBLECharacteristicValue` interface will be called immediately after the successful call of `notifyBLECharacteristicValueChange`, and the system error 10008 will occur on some models

#### 示例代码
#### Sample code

```js
// 向蓝牙设备发送一个0x00的16进制数据
//Send a 0x00 hexadecimal data to the Bluetooth device
const buffer = new ArrayBuffer(1)
const dataView = new DataView(buffer)
dataView.setUint8(0, 0)
uni.writeBLECharacteristicValue({
  // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  //The deviceId here needs to be obtained in the getBluetoothDevices or onBluetoothDeviceFound interface.
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  //The serviceId here needs to be obtained in the getBLEDeviceServices interface.
  serviceId,
  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
  //The characteristicId here needs to be obtained in the getBLEDeviceCharacteristics interface.
  characteristicId,
  // 这里的value是ArrayBuffer类型
  //The value here is of type ArrayBuffer
  value: buffer,
  success(res) {
    console.log('writeBLECharacteristicValue success', res.errMsg)
  }
})
```

### uni.readBLECharacteristicValue(OBJECT)

读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用。
Read the binary data value of the characteristic value of the low power Bluetooth devices. Note: Successful invocation requires the characteristic value of the device supporting read.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
|deviceId|string||是|蓝牙设备 id|
| deviceId| string| | Yes| Bluetooth device id|
|serviceId|string||是|蓝牙特征值对应服务的 uuid|
| serviceId| string| | Yes| uuid of the service corresponding to Bluetooth characteristic value|
|characteristicId|string||是|蓝牙特征值的 uuid|
| characteristicId| string| | Yes| uuid of Bluetooth characteristic value|
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

#### 注意
#### Notice

*   并行调用多次会存在读失败的可能性。
* There is the possibility of read failure when calling in parallel for many times.
*   接口读取到的信息需要在 `onBLECharacteristicValueChange` 方法注册的回调中获取。
* The information read by the interface needs to be obtained in the callback registered by the `onBLECharacteristicValueChange` method.

#### 示例代码
#### Sample code

```js
// 必须在这里的回调才能获取
//Only callbacks here can be obtained.
uni.onBLECharacteristicValueChange(function (characteristic) {
  console.log('characteristic value comed:', characteristic)
})
uni.readBLECharacteristicValue({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  //The deviceId here needs to have established a link with the corresponding device through createBLEConnection.
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  //The serviceId here needs to be obtained in the getBLEDeviceServices interface.
  serviceId,
  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
  //The characteristicId here needs to be obtained in the getBLEDeviceCharacteristics interface.
  characteristicId,
  success(res) {
    console.log('readBLECharacteristicValue:', res.errCode)
  }
})
```

### uni.onBLEConnectionStateChange(CALLBACK)

监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
listen to the change events of low power Bluetooth connection status. Include developers actively connecting or disconnecting, device loss, abnormal disconnection and so on.

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|deviceId|string|蓝牙设备ID|
| deviceId| string| Bluetooth device ID|
|connected|boolean|是否处于已连接状态|
| connected| boolean| Is it connected?|

#### 示例代码
#### Sample code

```js
uni.onBLEConnectionStateChange(function (res) {
  // 该方法回调中可以用于处理连接意外断开等异常情况
  //The callback of this method can be used to handle abnormal situations such as unexpected disconnection and so on.
  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
})
```

### uni.onBLECharacteristicValueChange(CALLBACK)

监听低功耗蓝牙设备的特征值变化事件。必须先启用 `notifyBLECharacteristicValueChange` 接口才能接收到设备推送的 notification。
listen to the characteristic value change events of the low power Bluetooth devices. You must first enable the `notifyBLECharacteristicValueChange` interface to receive notification pushed by the device.

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|deviceId|string|蓝牙设备 id|
| deviceId| string| Bluetooth device id|
|serviceId|string|蓝牙特征值对应服务的 uuid|
| serviceId| string| uuid of the service corresponding to Bluetooth characteristic value|
|characteristicId|string|蓝牙特征值的 uuid|
| characteristicId| string| uuid of Bluetooth characteristic value|
|value|ArrayBuffer|特征值最新的值|
| value| ArrayBuffer| Latest value of the eigenvalue|

#### 示例代码
#### Sample code

```js
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
uni.onBLECharacteristicValueChange(function (res) {
  console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)
  console.log(ab2hex(res.value))
})
```

### uni.notifyBLECharacteristicValueChange(OBJECT)

启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。
Enable the notify function when the characteristic values of low power Bluetooth device changes, and subscribe to the characteristic values.
另外，必须先启用 `notifyBLECharacteristicValueChange` 才能监听到设备 `characteristicValueChange` 事件
Notice: Only when the characteristic value of the necessary device supports notify or indicate can it be called successfully. In addition, you must first enable `notifyBLECharacteristicValueChange` to listen to device `characteristicValueChange` events

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
|deviceId|string||是|蓝牙设备 id|
| deviceId| string| | Yes| Bluetooth device id|
|serviceId|string||是|蓝牙特征值对应服务的 uuid|
| serviceId| string| | Yes| uuid of the service corresponding to Bluetooth characteristic value|
|characteristicId|string||是|蓝牙特征值的 uuid|
| characteristicId| string| | Yes| uuid of Bluetooth characteristic value|
|state|boolean||是|是否启用 notify|
| state| boolean| | Yes| Enable notify or not|
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

#### 注意
#### Notice

*   订阅操作成功后需要设备主动更新特征值的 value，才会触发 [`uni.onBLECharacteristicValueChange`](/api/system/ble?id=onblecharacteristicvaluechange) 回调。
* After the subscription is successful, the device needs to actively update the value of the characteristic value to trigger the [`uni.onBLECharacteristicValueChange`](/api/system/ble?id=onblecharacteristicvaluechange) callback.
*   安卓平台上，在调用 `notifyBLECharacteristicValueChange` 成功后立即调用 `writeBLECharacteristicValue` 接口，在部分机型上会发生 10008 系统错误
* On the Android platform, the `writeBLECharacteristicValue` interface will be called immediately after the successful call of `notifyBLECharacteristicValueChange`, and the system error 10008 will occur on some models

#### 示例代码
#### Sample code

```js
uni.notifyBLECharacteristicValueChange({
  state: true, // 启用 notify 功能
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  //The deviceId here needs to have established a link with the corresponding device through createBLEConnection.
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  //The serviceId here needs to be obtained in the getBLEDeviceServices interface.
  serviceId,
  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
  //The characteristicId here needs to be obtained in the getBLEDeviceCharacteristics interface.
  characteristicId,
  success(res) {
    console.log('notifyBLECharacteristicValueChange success', res.errMsg)
  }
})
```

### uni.getBLEDeviceServices(OBJECT)

获取蓝牙设备所有服务(service)。
Obtain all services of the Bluetooth devices.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
|deviceId|string||是|蓝牙设备 id|
| deviceId| string| | Yes| Bluetooth device id|
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
|services|Array&lt;Object&gt;|设备服务列表|
| services| Array\<Object>| Equipment service list|

**res.services 的结构**
**Structure of res.services**

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|uuid|string|蓝牙设备服务的 uuid|
| uuid| string| uuid of Bluetooth device service|
|isPrimary|boolean|该服务是否为主服务|
| isPrimary| boolean| Whether the service is a primary service|

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

#### 示例代码
#### Sample code

```js
uni.getBLEDeviceServices({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  //The deviceId here needs to have established a link with the corresponding device through createBLEConnection.
  deviceId,
  success(res) {
    console.log('device services:', res.services)
  }
})
```


### uni.getBLEDeviceRSSI(OBJECT)

2.8.4+

获取蓝牙设备的信号强度。
Get the signal strength of Bluetooth device.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
|deviceId|string||是|蓝牙设备 id|
| deviceId| string| | Yes| Bluetooth device id|
|success|function||否|接口调用成功的回调函数|
| success| function| | No| Callback function for successful interface calling|
|fail|function||否|接口调用失败的回调函数|
| fail| function| | No| Callback function for failed interface calling|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| function| | No| Callback function for closed interface calling (available both for successful and failed calling)|


### uni.getBLEDeviceCharacteristics(OBJECT)

获取蓝牙设备某个服务中所有特征值(characteristic)。
Obtain all characteristic values of a certain service of that Bluetooth device.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
|deviceId|string||是|蓝牙设备 id|
| deviceId| string| | Yes| Bluetooth device id|
|serviceId|string||是|蓝牙服务 uuid，需要使用 `getBLEDeviceServices` 获取|
| serviceId| string| | Yes| Bluetooth service uuid needs to be obtained using `getBLEDeviceServices`|
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
|---|---|---|---|
|characteristics|Array&lt;Object&gt;|设备服务列表|
| characteristics| Array\<Object>| Equipment service list|

**res.characteristics 的结构**
**Structure of res.characteristics**

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|uuid|string|蓝牙设备特征值的 uuid|
| uuid| string| uuid of Bluetooth device's characteristic value|
|properties|Object|该特征值支持的操作类型|
| properties| Object| Operation types supported by this characteristic value|

**properties 的结构**
**Structure of properties**

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|read|boolean|该特征值是否支持 read 操作|
| read| boolean| Does this characteristic value support read operation|
|write|boolean|该特征值是否支持 write 操作|
| write| boolean| Does this characteristic value support write operation|
|notify|boolean|该特征值是否支持 notify 操作|
| notify| boolean| Does this characteristic value support notify operation|
|indicate|boolean|该特征值是否支持 indicate 操作|
| indicate| boolean| Does this characteristic value support indicate operation|

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

#### 示例代码
#### Sample code

```js
uni.getBLEDeviceCharacteristics({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  //The deviceId here needs to have established a link with the corresponding device through createBLEConnection.
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  //The serviceId here needs to be obtained in the getBLEDeviceServices interface.
  serviceId,
  success(res) {
    console.log('device getBLEDeviceCharacteristics:', res.characteristics)
  }
})
```

### uni.createBLEConnection(OBJECT)

连接低功耗蓝牙设备。
Connect low power Bluetooth devices.

若APP在之前已有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需进行搜索操作。
If the APP has searched for a Bluetooth device beforehand and successfully connected, you can directly transmit the deviceId obtained by the previous search and directly try to connect to the device without searching again.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
|deviceId|string||是|用于区分设备的 id|
| deviceId| string| | Yes| Id used to distinguish the devices|
|timeout|number||否|超时时间，单位ms，不填表示不会超时，京东小程序不支持|
|timeout|number||No|Timeout time in ms
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

#### 注意
#### Notice

*   请保证尽量成对的调用 `createBLEConnection` 和 `closeBLEConnection` 接口。安卓如果多次调用 `createBLEConnection` 创建连接，有可能导致系统持有同一设备多个连接的实例，导致调用 `closeBLEConnection` 的时候并不能真正的断开与设备的连接。
* Make sure to call the `createBLEConnection` and `closeBLEConnection` interfaces in pairs as much as possible. If Android calls `createBLEConnection` multiple times to create a connection, the system may hold multiple connection instances of the same device, resulting in the failure to truly disconnect from the device when calling `closeBLEConnection`.
*   蓝牙连接随时可能断开，建议监听 [`uni.onBLEConnectionStateChange`](/api/system/ble?id=onbleconnectionstatechange) 回调事件，当蓝牙设备断开时按需执行重连操作
* Bluetooth connection may be disconnected at any time. It is recommended to listen to the [`uni.onBLEConnectionStateChange`](/api/system/ble?id=onbleconnectionstatechange) callback event and perform reconnect operation as needed when Bluetooth device is disconnected
*   若对未连接的设备或已断开连接的设备调用数据读写操作的接口，会返回 10006 错误，建议进行重连操作。
* If the interface of data read-write operation is called for the unconnected or disconnected devices, it will return 10006 error, and recommend to reconnect again.

#### 示例代码
#### Sample code

```js
uni.createBLEConnection({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  //The deviceId here needs to have established a link with the corresponding device through createBLEConnection.
  deviceId,
  success(res) {
    console.log(res)
  }
})
```

### uni.closeBLEConnection(OBJECT)

断开与低功耗蓝牙设备的连接。
Disconnect from low power Bluetooth devices.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|---|---|---|---|---|
|deviceId|string||是|用于区分设备的 id|
| deviceId| string| | Yes| Id used to distinguish the devices|
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

#### 示例代码
#### Sample code

```js
uni.closeBLEConnection({
  deviceId,
  success(res) {
    console.log(res)
  }
})
```
