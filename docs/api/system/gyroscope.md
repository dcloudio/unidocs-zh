### uni.onGyroscopeChange(CALLBACK)

监听陀螺仪数据变化事件。
Listen for gyroscope data change events.

支付宝小程序频率为 500ms/次，微信小程序频率根据 [uni.startGyroscope](/api/system/gyroscope?id=startgyroscope) 的 interval 参数设置。事件只有在调用 [uni.startGyroscope](/api/system/gyroscope?id=startgyroscope) 后才会开始监听，使用 [uni.stopGyroscope](/api/system/gyroscope?id=stopgyroscope) 可以停止监听。
The frequency of Alipay applet is 500ms/time, and the frequency of WeChat applet is set according to the interval parameter of [uni.startGyroscope](/api/system/gyroscope?id=startgyroscope). Events will not start listening until [uni.startGyroscope](/api/system/gyroscope?id=startgyroscope) is called. Use [uni.stopGyroscope](/api/system/gyroscope?id=stopgyroscope) to stop listening.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|x|x|

**CALLBACK 参数说明**
**CALLBACK parameter description**

|属性|类型|说明
|property|type|description
|--|--|--|
|res|Object|res = {x,y,x}|

**res 的结构**
**structure of res**

|名称|类型|描述|
|Name|Type|Description|
|---|---|---|
|x|number|x轴方向角速度|
|x|number|Angular velocity in the x-axis direction|
|y|number|y轴方向角速度|
|y|number|Angular velocity in the y-axis direction|
|z|number|z轴方向角速度|
|z|number|Angular velocity in the z-axis direction|

### uni.startGyroscope(OBJECT)

开始监听陀螺仪数据。
Start listening for gyroscope data.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|x|x|

|属性|类型|默认值|必填|说明|平台说明|
|Attribute|Type|Default|Required|Description|Platform Description|
|---|---|---|---|---|---|
|interval|string|normal|否|监听陀螺仪数据回调函数的执行频率：game（20ms/次）、ui（60ms/次）、normal（200ms/次）|微信小程序|
|interval|string|normal|No|Monitor the execution frequency of the gyroscope data callback function: game (20ms/time), ui (60ms/time), normal (200ms/time)|WeChat applet|
|success|function||否|接口调用成功的回调函数||
|success|function||No|Callback function for successful interface call||
|fail|function||否|接口调用失败的回调函数||
|fail|function||No|Callback function for interface call failure||
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|function||No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|

### uni.stopGyroscope(OBJECT)

停止监听陀螺仪数据。
Stop listening for gyroscope data.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|x|x|

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|---|---|---|---|
|success|function|否|接口调用成功的回调函数|
|success|function|No|Callback function for successful interface call|
|fail|function|否|接口调用失败的回调函数|
|fail|function|No|Callback function for interface call failure|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

**代码示例**
**CODE EXAMPLE**

```html
<template>
    <view>
        <button @click="start">开始监听陀螺仪变化</button>
        <button @click="stop">停止监听陀螺仪变化</button>
    </view>
</template>
```

```javascript
export default {
    methods: {
        start() {
            uni.onGyroscopeChange((res) => {
                console.log('gyroData.rotationRate.x = ' + res.x)
                console.log('gyroData.rotationRate.y = ' + res.y)
                console.log('gyroData.rotationRate.z = ' + res.z)
            });
            uni.startGyroscope({
                interval: "normal",
                success() {
                    console.log('success')
                },
                fail() {
                    console.log('fail')
                }
            })
        },
        stop(){
            uni.stopGyroscope({
                success() {
                    console.log('stop success!')
                },
                fail() {
                    console.log('stop fail!')
                }
            })
        }
    }
}
```

**Tips**

* 陀螺仪 相关 API 在小程序开发工具中调用可能报错，请在真机中测试
* The gyroscope related API may be wrong when called in the applet development tool, please test it on the real machine