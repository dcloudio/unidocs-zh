## uni.openLocation(OBJECT)
使用应用内置地图查看位置。openLocation会使用项目配置的地图服务商来展示地图，地图服务商支持情况参考：[map组件](../../component/map.md)。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|x|x|x|√|√|

<!-- UNIAPPAPIJSON.openLocation.compatibility -->

**地图服务商说明**

[点击查看地图服务商兼容性](../../component/map.md)

**OBJECT 参数说明**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|latitude|Float|是|纬度，范围为-90~90，负数表示南纬，使用 gcj02 国测局坐标系||
|longitude|Float|是|经度，范围为-180~180，负数表示西经，使用 gcj02 国测局坐标系||
|scale|Int|否|缩放比例，范围5~18，默认为18|微信小程序、支付宝小程序|
|name|String|否|位置名|支付宝必填|
|address|String|否|地址的详细说明|支付宝必填|
|success|Function|否|接口调用成功的回调函数||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

**示例**

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
- 若定位不准，参考[uni.getLocation文档的注意事项](https://uniapp.dcloud.io/api/location/location)
- ``<map>`` 组件默认为国测局坐标，调用 ``uni.getLocation`` 返回结果传递给 ``<map>`` 组件时，需指定 type 为 gcj02。
- App 端使用地图组件需要向高德等三方服务商申请SDK资质，获取AppKey，打包时需要在manifest的SDK配置中填写Appkey。在manifest可视化界面有详细申请指南，详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)。
- H5 端使用地图和定位相关，需要在 [manifest.json](/collocation/manifest?id=h5sdkconfig) 内配置腾讯或谷歌等三方地图服务商申请的秘钥（key）。
- iOS端 如需使用第三方地图进行导航，需要在 manifest.json 文件内增加 ``urlschemewhitelist`` 节点，在线打包即可
- 不同平台打开的地图不一样，App端是高德地图（不支持百度地图）、H5端是腾讯地图或谷歌地图、微信小程序端是腾讯地图、百度小程序是百度地图、阿里小程序是高德地图、抖音小程序是高德地图。

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

## 三方定位和地图服务收费说明

使用三方定位或者地图服务，需向服务提供商（如：高德地图、百度地图、腾讯地图、谷歌地图）申请商业授权和缴纳费用（5万/年）。

DCloud为开发者争取了福利，可优惠获取高德、腾讯的商业授权。如有需求请发邮件到`bd@dcloud.io`（注明你的公司名称、应用介绍、HBuilder账户）；你也可以直接通过`uni-im`发起在线咨询，在线咨询地址：[DCloud地图服务专员](https://im.dcloud.net.cn/#/?user_id=b9839630-a479-11ea-b772-0f6ad6cf835c)。

详见：[https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic](https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic)
