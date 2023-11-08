### uni.getExtConfig(OBJECT)

获取第三方平台自定义的数据字段。
Get data fields customized by third-party platforms.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|√|x|x|x|x|

**OBJECT参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Properties | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | 否 | 接口调用成功的回调函数 |
| success | function | | No | Callback function for successful interface call |
| fail | function |  | 否 | 接口调用失败的回调函数 |
| fail | function | | No | Callback function for interface call failure |
| complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | function | | No | The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**success 回调参数说明**
**success callback parameter description**

| 属性 | 类型 | 说明 |
| property | type | description |
| --- | --- | --- |
| extConfig | Object | 第三方平台自定义的数据 |
| extConfig | Object | Data customized by third-party platforms |

**Tips**

* 本接口暂时无法通过 `uni.canIUse`判断是否兼容，开发者需要自行判断 `uni.getExtConfig` 是否存在来兼容。
* This interface cannot be judged for compatibility through `uni.canIUse` temporarily. Developers need to judge whether `uni.getExtConfig` exists to be compatible.

**示例代码**
**Sample code**

```
if (uni.getExtConfig) {
  uni.getExtConfig({
    success(res) {
      console.log(res.extConfig)
    }
  })
}
```


### uni.getExtConfigSync()

``uni.getExtConfig`` 的同步版本。
Synchronized version of ``uni.getExtConfig``.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|√|x|x|x|x|

**返回值(Object)**
**Return value(Object)**

| 属性 | 类型 | 说明 |
| property | type | description |
| --- | --- | --- |
| extConfig | Object | 第三方平台自定义的数据 |
| extConfig | Object | Data customized by third-party platforms |

**Tips**

* 本接口暂时无法通过 `uni.canIUse`判断是否兼容，开发者需要自行判断 `uni.getExtConfigSync` 是否存在来兼容。
* This interface cannot be judged for compatibility through `uni.canIUse` temporarily. Developers need to judge whether `uni.getExtConfigSync` exists to be compatible.

**代码示例**
**CODE EXAMPLE**

```
const extConfig = uni.getExtConfigSync ? uni.getExtConfigSync() : {}
console.log(extConfig)
```