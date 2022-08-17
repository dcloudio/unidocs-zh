<md-translatedByGoogle />
### uni.request(OBJECT)
发起网络请求。
Initiate a network request.

> 在各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单。
> When each Mini Program platform is running, network-related APIs need to be configured with a whitelist of domain names before using them.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|默认值|说明|平台差异说明|
| Parameter name| Type| Required| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|:-|
|url|String|是||开发者服务器接口地址||
| url| String| Yes| | Developer server interface address| |
|data|Object/String/ArrayBuffer|否||请求的参数|App 3.3.7 以下不支持 ArrayBuffer 类型|
|data|Object/String/ArrayBuffer|No||Requested parameters|The ArrayBuffer type is not supported under App 3.3.7|
|header|Object|否||设置请求的 header，header 中不能设置 Referer。|App、H5端会自动带上cookie，且H5端不可手动修改|
| header| Object| No| | Set the request header, and Referer should not be used in it.| cookies will be automatically carried on the App and H5 sides, and the manual modification is disabled on H5 side|
|method|String|否|GET|有效值详见下方说明||
| method| String| No| GET| See the description below for valid values| |
|timeout|Number|否|60000|超时时间，单位 ms|H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序|
|timeout|Number|No|60000|Timeout time, unit ms|H5(HBuilderX 2.9.9+), APP(HBuilderX 2.9.9+), WeChat applet (2.10.0), Alipay applet|
|dataType|String|否|json	|如果设为 json，会尝试对返回的数据做一次 JSON.parse||
| dataType| String| No| json| If it is set to json, one JSON.parse will be applied to the returned data| |
|responseType|String|否|text	|设置响应的数据类型。合法值：text、arraybuffer|支付宝小程序不支持|
|responseType|String|No |text |Sets the data type of the response. Legal values: text, arraybuffer|Alipay applet does not support|
|sslVerify|Boolean|否|true|验证 ssl 证书|仅App安卓端支持（HBuilderX 2.3.3+），不支持离线打包|
|sslVerify|Boolean|No|true|Verify ssl certificate|Only supported by App Android (HBuilderX 2.3.3+), offline packaging is not supported|
|withCredentials|Boolean|否|false|跨域请求时是否携带凭证（cookies）|仅H5支持（HBuilderX 2.6.15+）|
| withCredentials| Boolean| No| false| Whether to carry credentials (cookies) in cross domain requests| H5 only (HBuilderX 2.6.15+)|
|firstIpv4|Boolean|否|false|DNS解析时优先使用ipv4|仅 App-Android 支持 (HBuilderX 2.8.0+)|
| firstIpv4| Boolean| No| false| ipv4 is used in priority for DNS resolving| App-Android only (HBuilderX 2.8.0 +)|
|success|Function|否||收到开发者服务器成功返回的回调函数||
| success| Function| No| | Receive the callback function successfully returned by the developer server| |
|fail|Function|否||接口调用失败的回调函数||
| fail| Function| No| | Callback function for failed interface calling| |
|complete|Function|否||接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| | Callback function for closed interface calling (available both for successful and failed calling)|  |

**method 有效值**
**Valid values for method**

注意：method有效值必须大写，每个平台支持的method有效值不同，详细见下表。
Note: The valid value of method must be capitalized. The valid value of method supported by each platform is different. For details, see the following table.

|method|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|快手小程序|京东小程序|
|method|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|GET|√|√|√|√|√|√|√|√|
|POST|√|√|√|√|√|√|√|√|
|PUT|√|√|√|x|√|√|x|x|
|DELETE|√|√|√|x|√|x|x|x|
|CONNECT|x|√|√|x|x|x|x|x|
|HEAD|x|√|√|x|√|x|x|x|
|OPTIONS|√|√|√|x|√|x|x|x|
|TRACE|x|√|√|x|x|x|x|x|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|data|Object/String/ArrayBuffer|开发者服务器返回的数据|
| data| Object/String/ArrayBuffer| Data returned by the developer server|
|statusCode|Number|开发者服务器返回的 HTTP 状态码|
| statusCode| Number| HTTP status code returned by the developer server|
|header|Object|开发者服务器返回的 HTTP Response Header|
| header| Object| HTTP Response Header returned by the developer server|
|cookies|``Array.<string>``|开发者服务器返回的 cookies，格式为字符串数组|
| cookies| `Array.<string>`| Cookies returned by the developer server, formatted as a string array|

**data 数据说明**
**data description**

最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String。转换规则如下：
Finally, the data sent to the server is of String type, and if the incoming data is not of String type, it will be converted into String. The conversion rules are as follows:

- 对于 ``GET`` 方法，会将数据转换为 query string。例如 ``{ name: 'name', age: 18 }`` 转换后的结果是 ``name=name&age=18``。
- For the `GET` method, the data will be converted to a query string. For example, the converted result of `{ name: 'name', age: 18 }` is `name=name&age=18`.
- 对于 ``POST`` 方法且 ``header['content-type']`` 为 ``application/json`` 的数据，会进行 JSON 序列化。
- For the `POST` method and for the data whose `header['content-type']` is `application/json`, JSON serialization will be performed.
- 对于 ``POST`` 方法且 ``header['content-type']`` 为 ``application/x-www-form-urlencoded`` 的数据，会将数据转换为 query string。 
- For the `POST` method and for the data whose `header['content-type']` is `application/x-www-form-urlencoded`, the data will be converted into a query string.

**示例**
**Example**

```javascript
uni.request({
    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
    data: {
        text: 'uni.request'
    },
    header: {
        'custom-header': 'hello' //自定义请求头信息
    },
    success: (res) => {
        console.log(res.data);
        this.text = 'request success';
    }
});
```

**返回值**
**Return value**

如果希望返回一个 `requestTask` 对象，需要至少传入 success / fail / complete 参数中的一个。例如：
If you want to return a `requestTask` object, at least one of the success/fail/complete parameters needs to be passed in. E.g.:

```javascript
var requestTask = uni.request({
	url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
	complete: ()=> {}
});
requestTask.abort();
```

如果没有传入 success / fail / complete 参数，则会返回封装后的 Promise 对象：[Promise 封装](/api/README?id=promise-%E5%B0%81%E8%A3%85)
If the success/fail/complete parameter is not passed in, the encapsulated Promise object will be returned: [Promise encapsulation](/api/README?id=promise-%E5%B0%81%E8%A3%85)

通过 `requestTask`，可中断请求任务。
The request task can be interrupted by `requestTask`.

**requestTask 对象的方法列表**
**Method list of requestTask object**

|方法|参数|说明|
| Method| Parameter| Instruction|
|:-|:-|:-|
|abort||中断请求任务|
| abort| | Interrupt request task|
|offHeadersReceived||取消监听 HTTP Response Header 事件，仅`微信小程序平台`支持，[文档详情](https://developers.weixin.qq.com/miniprogram/dev/api/RequestTask.offHeadersReceived.html)|
|offHeadersReceived||Cancel the monitoring of HTTP Response Header events, only supported by `WeChat Mini Program Platform`, [document details](https://developers.weixin.qq.com/miniprogram/dev/api/RequestTask.offHeadersReceived.html)|
|onHeadersReceived||监听 HTTP Response Header 事件。会比请求完成事件更早，仅`微信小程序平台`支持，[文档详情](https://developers.weixin.qq.com/miniprogram/dev/api/RequestTask.onHeadersReceived.html)|
|onHeadersReceived||Listen for HTTP Response Header events. Will be earlier than the request completion event, only supported by `WeChat Mini Program Platform`, [document details](https://developers.weixin.qq.com/miniprogram/dev/api/RequestTask.onHeadersReceived.html)|

**示例**
**Example**

```javascript
const requestTask = uni.request({
	url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
	data: {
        name: 'name',
        age: 18
	},
	success: function(res) {
		console.log(res.data);
	}
});

// 中断请求任务
//Interrupt request task
requestTask.abort();
```

**Tips**

- 请求的 ``header`` 中 ``content-type`` 默认为 ``application/json``。
- In the requested `header`, `content-type` defaults to `application/json`.
- 避免在 ``header`` 中使用中文，或者使用 encodeURIComponent 进行编码，否则在百度小程序报错。（来自：[快狗打车前端团队](https://juejin.im/user/2612095359650712)）
- Avoid using Chinese in ``header``, or use encodeURIComponent for encoding, otherwise an error will be reported in the Baidu applet. (From: [Front-end Team of Kuaigou Taxi](https://juejin.im/user/2612095359650712))
- 网络请求的 ``超时时间`` 可以统一在 ``manifest.json`` 中配置 [networkTimeout](/collocation/manifest?id=networktimeout)。
- The `Timeout` requested by the network can be uniformly configured in the `manifest.json` as [networkTimeout](/collocation/manifest?id=networktimeout).
- H5 端本地调试需注意跨域问题，参考：[调试跨域问题解决方案](https://ask.dcloud.net.cn/article/35267)
- Attention should be paid to cross-domain issues when debugging on the H5 side, and please refer to: [Solutions for debugging cross-domain issues](https://ask.dcloud.net.cn/article/35267)
- 注意由于百度小程序iOS客户端，请求失败时会进入fail回调，需要针对百度增加相应的处理以解决该问题。
- Note that due to the Baidu applet iOS client, the fail callback will be entered when the request fails, and corresponding processing needs to be added for Baidu to solve this problem.
- 注意小程序端不支持自动保持 cookie，服务器应避免验证 cookie。如果服务器无法修改，也可以使用一些模拟手段，比如这样的工具[https://github.com/charleslo1/weapp-cookie](https://github.com/charleslo1/weapp-cookie) 可以请求时带上 cookie 并将响应的 cookie 保存在本地。
- Note that the applet side does not support automatically keeping cookies, and the server should avoid validating cookies. If the server cannot be modified, you can also use some simulation methods, such as such tools [https://github.com/charleslo1/weapp-cookie](https://github.com/charleslo1/weapp-cookie) can be requested with On the cookie and save the response cookie locally.
- H5端 cookie 受跨域限制（和平时开发网站时一样），旧版的 uni.request 未支持 withCredentials 配置，可以直接使用 xhr 对象或者其他类库。
- H5 side cookie are restricted in terms of cross-domain (like ordinary website development). The old version of uni.request does not support withCredentials configuration, and xhr objects or other class libraries can be used directly.
- 根据 W3C 规范，H5 端无法获取 response header 中 Set-Cookie、Set-Cookie2 这2个字段，对于跨域请求，允许获取的 response header 字段只限于“simple response header”和“Access-Control-Expose-Headers”（[详情](https://www.w3.org/TR/cors/#access-control-allow-credentials-response-header)）
- According to the W3C specification, the Set-Cookie and Set-Cookie2 fields in the response header cannot be obtained on the H5 side. For cross-domain requests, the allowed fields of the response header are only "simple response header" and "Access-Control-Expose-Headers" ([Details](https://www.w3.org/TR/cors/#access-control-allow-credentials-response-header))
- [uni-app 插件市场](https://ext.dcloud.net.cn/search?q=%E6%8B%A6%E6%88%AA%E5%99%A8)有flyio、axios等三方封装的拦截器可用
- Flyio, axios, and other third-party encapsulated interceptors are available on the [uni-app plugin market](https://ext.dcloud.net.cn/search?q=%E6%8B%A6%E6%88%AA%E5%99%A8)
- 低版本手机自身不支持 ipv6，如果服务器仅允许 ipv6，会导致老手机无法正常运行或访问速度非常慢
- The lower version of the mobile phone does not support ipv6, and if the server only allows ipv6, the old mobile phone will not work normally or access the server at normal speed.
- localhost、127.0.0.1等服务器地址，只能在电脑端运行，手机端连接时不能访问。请使用标准IP并保证手机能连接电脑网络
- Server addresses such as host and 127.0.0.1 can only be run on the PC side, and cannot be accessed when the mobile phone side is connected. Please use standard IP and ensure that the mobile phone can connect to the PC network
- debug 模式，安卓端暂时无法获取响应头，url中含有非法字符（如未编码为%20的空格）时会请求失败
- In the debug mode, the Android is unable to obtain the response header temporarily, and the request will fail if the url contains illegal characters (such as spaces not encoded as %20)
- iOS App第一次安装启动后，会弹出是否允许联网的询问框，在用户点击同意前，调用联网API会失败。请注意判断这种情况。比如官方提供的新闻模板示例（HBuilderX新建项目可选择），会判断如果无法联网，则提供一个错误页，提示用户设置网络及下拉刷新重试。
- After the first launch of the iOS App, an inquiry box will pop up about whether to allow networking. Before user clicking the "agree" button, calling the networking API would fail. Please pay attention to judging this situation. For example, the officially available news templates (selectable during creating the new project in HBuilderX) will judge whether the network is connected, and an error page will be provided to prompt the user to set up the network and pull down to refresh and try again if not connected.
- 良好体验的App，还会判断当前是否处于飞行模式（[参考](https://ext.dcloud.net.cn/plugin?id=594)）、是wifi还是3G（[参考](https://uniapp.dcloud.io/api/system/network)）
- An App with a good experience can also determine whether it is currently in flight mode ([Reference](https://ext.dcloud.net.cn/plugin?id=594)), wifi or 3G ([Refer to](https://uniapp.dcloud.io/api/system/network))
- 部分安卓设备，真机运行或debug模式下的网速，低于release模式很多。
- For some Android devices, the network speed in mobile App Playground operation or debug mode is much lower than that in release mode.
- 使用一些比较小众的证书机构（如：CFCA OV OCA）签发的 ssl 证书在安卓设备请求会失败，因为这些机构的根证书不在系统内置根证书库，可以更换其他常见机构签发的证书（如：Let's Encrypt），或者配置 sslVerify 为 false 关闭 ssl 证书验证（不推荐）。
- The request for ssl certificates issued by some relatively small certificate institutions (such as CFCA OV OCA) will fail on Android devices because the root certificates of these institutions are not in the built-in root certificate library of the system. You can change to other certificates issued by other common institutions (such as Let's Encrypt), or configure sslVerify as false to turn off ssl certificate verification (not recommended).
- 离线打包不支持 `sslVerify` 配置
- Offline packaging does not support `sslVerify` configuration
- 单次网络请求数据量建议控制在50K以下（仅指json数据，不含图片），过多数据应分页获取，以提升应用体验。
- It is recommended that the amount of data requested by a single network should be controlled below 50K (json data only, excluding images), and excessive data should be obtained in different pages to improve the application experience.


### uni.configMTLS(OBJECT)

https 请求配置自签名证书
https requests to configure the self-signed certificates

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√`(3.2.7+)`|x|x|x|x|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:--|:--|:--|:--|
|certificates|Array&lt;`certificate`&gt;|是| `certificates` 为数组，支持为多个域名配置自签名证书|
| certificates| Array<`certificate`>| Yes| `certificates` is an array that supports configuring the self-signed certificates for multiple domain names|
|success|Function(`callbackObject`)|否|接口调用成功的回调函数|
| success| Function(`callbackObject`)| No| Callback function for successful interface calling|
|fail|Function(`callbackObject`)|否|接口调用失败的回调函数|
| fail| Function(`callbackObject`)| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**certificate 参数说明**
**certificate parameter description**
证书配置项
Certificate configuration item

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:--|:--|:--|:--|
| host | String |是| 对应请求的域名（注意：不要协议部分） |
| host| String| Yes| Domain name corresponding to the request (note: no protocol)|
| client | String |否| 客户端证书（服务器端需要验证客户端证书时需要配置此项，格式要求请参考下面的证书格式说明，注意 `iOS` 平台客户端证书只支持 `.p12` 类型的证书）|
| client| String| No| Client certificate (this item needs to be configured when the server needs to verify the client certificate. Please refer to the certificate format description below for format requirements. Note that the `iOS` platform client certificate only supports `.p12` type certificates)|
| clientPassword | String |否| 客户端证书对应的密码（客户端证书存在时必须配置此项）|
| clientPassword| String| No| Password corresponding to the client certificate (this must be configured when the client certificate exists)|
| server |Array&lt;String&gt;|否| 服务器端证书（客户端需要对服务器端证书做校验时需要配置此项，格式要求请参考下面的证书格式说明，注意 `iOS` 平台服务器端证书只支持 `.cer` 类型的证书）|
| server| Array\<String>| No| Server-side certificate (this item needs to be configured when the client needs to verify the server-side certificate. Please refer to the certificate format description below for format requirements. Note that the `iOS` platform server-side certificate only supports `.cer` type certificates)|

**证书格式说明**
**Certificate format description**
  1. 文件路径形式：可将证书文件放到工程的 ‘static’ 目录中，然后填写文件路径，示例：`'/static/client.p12'`
  1. File path format: you can put the certificate file in the 'static' directory of the project, and then fill in the file path, for example: `'/static/client.p12'`
  2. `Base64String`：将证书文件的二进制转换为 `Base64String` 字符串，然后在字符串前面添加`'data:cert/pem;base64,'`前缀，示例：`'data:cert/pem;base64,xxx'` xxx 代表真实的证书 base64String 
  2. `Base64String`: Convert the binary of the certificate file to a `Base64String` string, and then add the `'data:cert/pem;base64,'` prefix in front of the string, for example: `'data:cert/pem;base64 ,xxx'` xxx represents the real certificate base64String

**callbackObject 参数说明**
**callbackObject parameter description**

|属性|类型 |说明|
| Attribute| Type| Instruction|
|:--|:--|:--|
|code|Number| 成功返回 0,失败返回相应 code 码|
| code| Number| Return 0 for success, or otherwise, return the corresponding code|

**示例**
**Example**
```js
uni.configMTLS({
    certificates: [{
        'host': 'www.test.com',
        'client': '/static/client.p12',
        'clientPassword': '123456789',
        'server': ['/static/server.cer'],
    }],
    success ({code}) {}
});
```

