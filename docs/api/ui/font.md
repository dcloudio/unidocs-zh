# uni.loadFontFace(Object object)

动态加载字体。一般有2个应用场景：
1. 使用css字体图标。字体图标相比图片的优势是：体积小、矢量不怕失真、支持点击变色。
2. 使用自己的字体，而不是os提供的字体，来渲染整个界面的文字

## 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|app-vue 1.9.0+；app-uvue 3.9+|2.3.4+|基础库 2.1.0+| 1.11.0+ |x|x|x|

app-nvue不支持本api，而是使用 Weex 提供的 DOM.addRule 加载自定义字体，[详见](https://uniapp.dcloud.io/tutorial/nvue-api.html#dom)。

## 参数说明

|属性|类型|默认值|必填|说明|
|:-|:-|:-|:-|:-|
|global|Boolean|false|否|是否全局生效。微信小程序 `'2.10.0'`起支持全局生效，需在 `app.vue` 中调用。|
|family|String||是|定义的字体名称|
|source|String||是|字体资源的地址。见下|
|desc|Object||否|可选的字体描述符（uni-app x 暂不支持）|
|success|Function||否|接口调用成功的回调函数|
|fail|Function||否|接口调用失败的回调函数|
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|

**source**

1. 微信小程序端只支持网络字体，字体链接必须是https。App支持网络或本地的字体（app-vue本地字体需使用[平台绝对路径](http://www.html5plus.org/doc/zh_cn/io.html#plus.io.convertLocalFileSystemURL)）。
2. 微信小程序端字体链接必须是同源下的，或开启了cors支持，微信小程序的域名是servicewechat.com
3. 本地字体请放在/static目录下，否则打包时不会把字体文件打进去
4. 字体格式支持：
	* webview渲染时，建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。
	* app-uvue支持的字体为ttf和otf

**Object.desc 的结构**

|属性|类型|默认值|必填|说明|
|:-|:-|:-|:-|:-|
|style|String|normal|否|字体样式，可选值为 normal / italic / oblique|
|weight|String|normal|否|字体粗细，可选值为 normal / bold / 100 / 200../ 900|
|variant|String|normal|否|设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit|

## 代码示例

```javascript
uni.loadFontFace({
  family: 'Bitstream Vera Serif Bold',
  source: 'url("https://sungd.github.io/Pacifico.ttf")',
  success() {
	  console.log('success')
  }
})
```

uni-app x 中加载字体图标，详见 hello uni-app x 的 [loadFontFace](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/API/load-font-face/load-font-face.uvue)

## Tips

- 插件市场有加载字体的例子：[https://ext.dcloud.net.cn/plugin?id=954](https://ext.dcloud.net.cn/plugin?id=954)
- 引入中文字体，体积过大时会发生错误，建议抽离出部分中文，减少体积，或者用图片替代
- 工具里提示 Faild to load font可以忽略


# uni.upx2px()

已废弃。

将upx单位值转换成px。因upx已废弃，推荐使用rpx。rpx无需特殊API可直接使用。

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