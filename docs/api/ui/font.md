### uni.loadFontFace(Object object)

动态加载网络字体，文件地址需为下载类型。微信小程序 `'2.10.0'`起支持全局生效，需在 `app.vue` 中调用。

注意: 
Notice:

1. 引入中文字体，体积过大时会发生错误，建议抽离出部分中文，减少体积，或者用图片替代
1. When Chinese fonts are introduced, errors will occur when the size is too large. It is suggested to remove part of Chinese characters to reduce the size, or replace them with images
2. 微信小程序端只支持网络字体，字体链接必须是https。App支持网络或本地的字体（本地字体需使用[平台绝对路径](http://www.html5plus.org/doc/zh_cn/io.html#plus.io.convertLocalFileSystemURL)）。
3. 微信小程序端字体链接必须是同源下的，或开启了cors支持，微信小程序的域名是servicewechat.com
4. 工具里提示 Faild to load font可以忽略
5. nvue不支持。nvue使用 Weex 提供的 DOM.addRule 加载自定义字体，[详见](https://uniapp.dcloud.io/tutorial/nvue-api.html#dom)。

**平台差异说明**
**Platform difference description**

|5+App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|1.9.0+|2.3.4+|基础库 2.1.0+| 1.11.0+ |x|x|x|

**参数说明**
**Parameter Description**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|global|Boolean|false|否|是否全局生效|
| global| Boolean| false| No| Whether it takes effect globally?|
|family|String||是|定义的字体名称|
| family| String| | Yes| Defined font name|
|source|String||是|字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。|
| source| String| | Yes| Address of the font resource. The recommended formats are TTF and WOFF, and WOFF2 will not be compatible with earlier versions of iOS.|
|desc|Object||否|可选的字体描述符|
| desc| Object| | No| Optional font descriptor|
|success|Function||否|接口调用成功的回调函数|
| success| Function| | No| Callback function for successful interface calling|
|fail|Function||否|接口调用失败的回调函数|
| fail| Function| | No| Callback function for failed interface calling|
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

**Object.desc 的结构**
**Structure of Object.desc**

|属性|类型|默认值|必填|说明|
| Attribute| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|style|String|normal|否|字体样式，可选值为 normal / italic / oblique|
| style| String| normal| No| Font style. Options include normal / italic / oblique|
|weight|String|normal|否|字体粗细，可选值为 normal / bold / 100 / 200../ 900|
| weight| String| normal| No| Font weight. Options include normal / bold / 100 / 200../ 900|
|variant|String|normal|否|设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit|
| variant| String| normal| No| Set the font display text of small capital letters. Options include normal / small-caps / inherit|

**代码示例**
**Code example**

```javascript
uni.loadFontFace({
  family: 'Bitstream Vera Serif Bold',
  source: 'url("https://sungd.github.io/Pacifico.ttf")',
  success() {
	  console.log('success')
  }
})
```

**Tips**

插件市场有加载字体的例子：[https://ext.dcloud.net.cn/plugin?id=954](https://ext.dcloud.net.cn/plugin?id=954)
There is an example of loading fonts in the plug-in market: [https://ext.dcloud.net.cn/plugin?id=954](https://ext.dcloud.net.cn/plugin?id=954)



### uni.upx2px()

将rpx单位值转换成px

```js
<script>
	export default {
		data() {
			return {
				boxWidth:""
			}
		},
		onLoad() {
			this.boxWidth = uni.upx2px(600) + 'px';
		}
	}
</script>
```