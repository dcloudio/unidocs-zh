### uni.openLocation(OBJECT)
使用应用内置地图查看位置。
Use the built-in map to view locations.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| Parameter name| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|latitude|Float|是|纬度，范围为-90~90，负数表示南纬，使用 gcj02 国测局坐标系||
| latitude| Float| Yes| Latitude, from -90 to 90. Negative number indicates south latitude, using gcj02 coordinate of State Bureau of Surveying and Mapping of China| |
|longitude|Float|是|经度，范围为-180~180，负数表示西经，使用 gcj02 国测局坐标系||
| longitude| Float| Yes| Longitude, from -180 to 180. Negative number indicates west longitude, using gcj02 coordinate of State Bureau of Surveying and Mapping of China.| |
|scale|Int|否|缩放比例，范围5~18，默认为18|微信小程序|
|scale|Int|No|Scale, the range is 5~18, the default is 18|WeChat applet|
|name|String|否|位置名|支付宝必填|
|name|String|No|Location Name|Alipay Required|
|address|String|否|地址的详细说明|支付宝必填|
|address|String|No|Detailed description of the address|Alipay required|
|success|Function|否|接口调用成功的回调函数||
| success| Function| No| Callback function for successful interface calling| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**示例**
**Example**

```javascript
uni.getLocation({
	type: 'gcj02', //返回可以用于uni.openLocation的经纬度
	success: function (res) {
		const latitude = res.latitude;
		const longitude = res.longitude;
		uni.openLocation({
			latitude: latitude,
			longitude: longitude,
			success: function () {
				console.log('success');
			}
		});
	}
});
```

**Tips**

- 本API是一个非原子的封装界面，开发者如有定制需求，可自己做页面实现类似功能。
- This API is a non-atomic packaging interface. Developers can make their own pages to achieve similar functions for customization.
- 若定位不准，参考[uni.getLocation文档的注意事项](https://uniapp.dcloud.io/api/location/location)
- In case of inaccurate localization, refer to [Matters needing attention in the uni.getLocation document](https://uniapp.dcloud.io/api/location/location)
- ``<map>`` 组件默认为国测局坐标，调用 ``uni.getLocation`` 返回结果传递给 ``<map>`` 组件时，需指定 type 为 gcj02。
- `<map>` component is defaulted to the coordinates of the State Bureau of Surveying and Mapping of China. When calling `uni.getLocation` return result and passing it to the `<map>` component, the type must be specified as gcj02.
- App 端使用地图组件需要向高德等三方服务商申请SDK资质，获取AppKey，打包时需要在manifest的SDK配置中填写Appkey。在manifest可视化界面有详细申请指南，详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)。
- To use the map component, App side needs to apply for SDK qualification and AppKey to the third-party service providers such as Gaode. During packaging, Appkey needs to be filled in the SDK configuration on the manifest. Detailed application guides are available in the manifest visualization interface, see: [https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29) for details.
- H5 端使用地图和定位相关，需要在 (manifest.json)[/collocation/manifest?id=h5sdkconfig] 内配置腾讯或谷歌等三方地图服务商申请的秘钥（key）。
- For map and localization service on H5 side, the key is required to be applied to the third-party map service providers such as Tencent or Google and configured on (manifest.json)[/collocation/manifest?id=h5sdkconfig].
- iOS端 如需使用第三方地图进行导航，需要在 manifest.json 文件内增加 ``urlschemewhitelist`` 节点，在线打包即可
- On the iOS side, if you need to use a third-party map for navigation, you need to add the `urlschemewhitelist` node in the manifest.json file and package it online
- 不同平台打开的地图不一样，App端是高德地图（不支持百度地图）、H5端是腾讯地图或谷歌地图、微信小程序端是腾讯地图、百度小程序是百度地图、阿里小程序是高德地图、字节跳动小程序是高德地图。
- The maps opened on different platforms are different. The App side is AutoNavi Map (Baidu Map is not supported), the H5 side is Tencent Map or Google Map, the WeChat applet is Tencent Map, the Baidu applet is Baidu Map, and the Ali applet is Gaode map and ByteDance applet are Gaode maps.

```json
{
    "app-plus": {
        "distribute": {
            "ios": {
                "urlschemewhitelist": [
                    "baidumap",
                    "iosamap",
                    "qqmap"
                ]
            }
        }
    }
}
```

<!-- - 点击返回也会进入 `fail` 回调中 -->
<!-- - Clicking back will also enter the `fail` callback -->

### 三方定位和地图服务收费说明
### Three-party positioning and map service fee description

使用三方定位或者地图服务，需向服务提供商（如：高德地图、百度地图、腾讯地图、谷歌地图）申请商业授权和缴纳费用（5万/年）。

DCloud为开发者争取了福利，可优惠获取高德的商业授权。如有需求请发邮件到`bd@dcloud.io`（注明你的公司名称、应用介绍、HBuilder账户）；你也可以直接通过`uni-im`发起在线咨询，在线咨询地址：[DCloud地图服务专员](https://im.dcloud.net.cn/#/?user_id=b9839630-a479-11ea-b772-0f6ad6cf835c)。

详见：[https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic](https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic)