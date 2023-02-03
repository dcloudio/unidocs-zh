
::: tip 组件名：uni-file-picker
::: tip Component name: uni-file-picker
>  代码块： `uFilePicker`
> Code block: `uFilePicker`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-file-picker)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-file-picker)
::: 

文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间
File selection upload component, you can select any file such as pictures and videos and upload it to the currently bound service space

## 介绍 
## introduce 
::: warning 注意事项
::: warning Notes
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
- 组件需要依赖 `sass` 插件 ，请自行手动安装
- The component needs to rely on the `sass` plugin, please install it manually
- 如不绑定服务空间，`autoUpload`默认为`false`且不可更改
- If no service space is bound, `autoUpload` defaults to `false` and cannot be changed
- 选择文件目前只支持 `H5` 和 `微信小程序平台` ，且 `微信小程序平台` 使用 `wx.chooseMessageFile()`
- Select file currently only supports `H5` and `WeChat MiniApp Platform`, and `WeChat MiniApp Platform` uses `wx.chooseMessageFile()`
- v-model 值需要自动上传成功后才会绑定值，一般只用来回显数据
- The v-model value needs to be automatically uploaded successfully before binding the value, generally only used to echo data
:::

### 基础用法
### Basic Usage

```html
<uni-file-picker 
	v-model="imageValue" 
	fileMediatype="image" 
	mode="grid" 
	@select="select" 
	@progress="progress" 
	@success="success" 
	@fail="fail" 
/>
<script>
	export default {
		data() {
			return {
				imageValue:[]
			}
		},
		methods:{
			// 获取上传状态
			// get upload status
			select(e){
				console.log('选择文件：',e)
			},
			// 获取上传进度
			// get upload progress
			progress(e){
				console.log('上传进度：',e)
			},
			
			// 上传成功
			// Upload succeeded
			success(e){
				console.log('上传成功')
			},
			
			// 上传失败
			// upload failed
			fail(e){
				console.log('上传失败：',e)
			}
		}
	}
</script>
```

### 选择指定后缀图片，且限制选择个数
### Select the specified suffix image, and limit the number of selections

配置 `file-mediatype` 属性为 `image`，限定只选择图片
Configure the `file-mediatype` attribute to `image`, and only select pictures

配置 `file-extname` 属性为 `'png,jpg'`，限定只选择 `png`和`jpg`后缀的图片
Configure the `file-extname` attribute to `'png,jpg'`, and only select images with `png` and `jpg` suffixes

配置 `limit` 属性为 1 ，则最多选择一张图片
Configure the `limit` attribute to 1, then select at most one image

配置 `mode` 属性为 `grid` ，可以使用九宫格样式选择图片
Configure the `mode` attribute to `grid`, you can use the Jiugongge style to select pictures


```html
<uni-file-picker 
	v-model="imageValue"  
	file-mediatype="image"
	mode="grid"
	file-extname="png,jpg"
	:limit="1"
	@progress="progress" 
	@success="success" 
	@fail="fail" 
	@select="select"
/>
```

### 手动上传
### Manual upload

配置 `auto-upload` 属性为 `false` ，可以停止自动上传，通过`ref`调用`upload`方法自行选择上传时机
Configure the `auto-upload` attribute to `false` to stop automatic upload, and call the `upload` method through `ref` to choose the upload timing

```html
<template>
	<view>
		<uni-file-picker  ref="files" :auto-upload="false"/>
		<button @click="upload">上传文件</button>
	</view>
</template>
<script>
	export default {
		data() {},
		methods:{
			upload(){
				this.$refs.files.upload()
			}
		}
	}
</script>

```

### 单选图片且点击再次选择
### Single-select the picture and click to select again

配置 `disable-preview` 属性为 `true`，禁用点击预览图片功能
Configure the `disable-preview` attribute to `true` to disable the click preview image function

配置 `del-icon` 属性为 `false`，隐藏删除按钮
Configure the `del-icon` attribute to `false` to hide the delete button

配置 `return-type` 属性为 `object`，设置 `value` 类型 ，如需绑定 `array`类型 ，则设置`limit:1`，可达到一样的效果
Configure the `return-type` attribute to `object`, set the `value` type, and if you need to bind the `array` type, set `limit:1` to achieve the same effect



```html
<uni-file-picker 
	disable-preview
	:del-icon="false"
	return-type="object"
>选择头像</uni-file-picker>
```

### 自定义样式
### Custom styles

配置 `image-styles` 属性，可以自定义`mode:image`时的回显样式
Configure the `image-styles` property, you can customize the echo style when `mode:image`

配置 `list-styles` 属性，可以自定义`mode:video|| mode:all`时的回显样式
Configure the `list-styles` attribute to customize the echo style when `mode:video|| mode:all`

```html
<template>
	<view>
		<uni-file-picker fileMediatype="image" :image-styles="imageStyles"/>
		<uni-file-picker fileMediatype="all" :list-styles="listStyles"/>
	</view>
</template>
<script>
	export default {
		data() {
			imageStyles:{
				width:64,
				height:64,
				border:{
					color:"#ff5a5f",
					width:2,
					style:'dashed',
					radius:'2px'
				}
			},
			listStyles:{
				// 是否显示边框
				// Whether to display the border
				border: true,
				// 是否显示分隔线
				// Whether to display the divider
				dividline: true,
				// 线条样式
				// line style
				borderStyle: {
					width:1,
					color:'blue',
					radius:2
				}
			}
		}
	}
</script>

```



### 使用插槽 
### Using slots

使用默认插槽可以自定义选择文件按钮样式
Use the default slot to customize the select file button style

```html
<uni-file-picker 
	v-model="value" file-mediatype="all">
	<button>选择文件</button>
</uni-file-picker>
```

## API

### FilePicker Props

|属性名|类型|默认值|可选值|说明|
|Property Name|Type|Default Value|Optional Value|Description|
|:-:| :-:| :-:|:-:|:-:|
|v-model/value|Array\Object|-|-| 组件数据，通常用来回显 ,类型由`return-type`属性决定	，**格式见下文**	|
| v-model/value| Array\Object|-|-| Component data, usually used for echo, the type is determined by the `return-type` property, **see below** for the format |
|disabled|Boolean|false|-| 组件禁用|
| disabled| Boolean| false|-|component disabled|
|readonly|Boolean|false|-| 组件只读，不可选择，不显示进度，不显示删除按钮|
| readonly| Boolean| false|-| component read-only, not selectable, no progress, no delete button|
|return-type|String| array	| array/object| 限制 `value` 格式，当为 `object`	 时	，组件只能单选，且会覆盖|
| return-type| String| array | array/object| Restrict the format of `value`, when it is `object`, the component can only be single-selected, and it will be overwritten|
|disable-preview| Boolean| false	| -| 禁用图片预览，仅	`mode:grid`生效	|
| disable-preview| Boolean| false | -| Disable image preview, only `mode:grid` takes effect |
|del-icon|Boolean| true	| -| 是否显示删除按钮	|
| del-icon| Boolean| true | -| Whether to display the delete button |
|auto-upload| Boolean| true	| -| 是否自动上传，值为`false`则只触发@select,可自行上传|
| auto-upload| Boolean| true | -| Whether to upload automatically, if the value is `false`, only trigger @select, you can upload by yourself|
|limit| Number\String| 9	| -| 最大选择个数 ，h5 会自动忽略多选的部分|
| limit| Number\String| 9 | -| The maximum number of selections, h5 will automatically ignore the multi-selection part|
|title| String	| -| -| 组件标题，右侧显示上传计数|
| title| String | -| -| Component title, upload count displayed on the right|
|mode| String	| list	| list/grid| 选择文件后的文件列表样式|
| mode| String | list | list/grid| file list style after file selection|
|file-mediatype| String	| image	| image/video/all| 选择文件类型,all 只支持 H5 和微信小程序平台|
| file-mediatype| String | image | image/video/all| Select the file type, all only supports H5 and WeChat MiniApp platforms|
|file-extname| Array\String| -| -| 选择文件后缀，字符串的情况下需要用逗号分隔（推荐使用字符串），根据 `file-mediatype` 属性而不同|
| file-extname| Array\String| -| -| Select the file suffix, in the case of a string, it needs to be separated by commas (string is recommended), it varies according to the `file-mediatype` attribute|
|list-styles|Object| -| -| `mode:list` 时的样式|
| list-styles| Object| -| -| styles in `mode:list`|
|image-styles|Object| -| -| `mode:grid` 时的样式	|
| image-styles| Object| -| -| styles in `mode:grid` |
|sizeType|Array| ['original', 'compressed']| 'original', 'compressed'| original 原图，compressed 压缩图，默认二者都有	|
| sizeType| Array| ['original', 'compressed']| 'original', 'compressed'| original original image, compressed image, both are available by default |
|sourceType|Array| ['album', 'camera']| 'album', 'camera'| album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项	|
| sourceType| Array| ['album', 'camera']| 'album', 'camera'| album selects pictures from the album, camera uses the camera, and has both by default. If you want to directly open the camera or directly select the album, please use only one option |


### value 格式 
### value format

三个属性必填，否则影响组件显示
The three attributes are required, otherwise the display of the component will be affected

```json 
[
	{
		"name":"file.txt",
		"extname":"txt",
		"url":"https://xxxx",
		// ...
	}
]

```

### list-styles 格式 
### list-styles format

```json 
{
	"borderStyle":{
		"color":"#eee",		// 边框颜色
		"width":"1px",		// 边框宽度
		"style":"solid", 	// 边框样式
		"radius":"5px" 		// 边框圆角，不支持百分比
	},
	"border":false, // 是否显示边框
	"dividline":true // 是否显示分隔线
}
```

### image-styles 格式 
### image-styles format

```json 
{
	"height": 60,	// 边框高度
	"width": 60,	// 边框宽度
	"border":{ // 如果为 Boolean 值，可以控制边框显示与否
		"color":"#eee",		// 边框颜色
		"width":"1px",		// 边框宽度
		"style":"solid", 	// 边框样式
		"radius":"50%" 		// 边框圆角，支持百分比
	}
}
```

### FilePicker Events

|事件称名|说明|返回值|					
|Event Name|Description|Return Value|
|:-:|:-:|	:-:	|
|@select| 选择文件后触发| 见下文|
|@select| fires when a file is selected| see below|
|@progress|文件上传时触发| 见下文|
|@progress|fires when a file is uploaded| see below|
|@success|上传成功触发| 见下文|
|@success|upload success trigger| see below|
|@fail|上传失败触发| 见下文|
|@fail|Upload failure trigger| see below|
|@delete|文件从列表移除时触发| 见下文|
|@delete|fires when a file is removed from the list| see below|


#### Callback Params

`**注意**：如果绑定的是腾讯云的服务空间 ，tempFilePaths 将返回 fileID`
`**Note**: If the service space of Tencent Cloud is bound, tempFilePaths will return fileID`

```json
{
	"progress"			: Number, 		// 上传进度 ，仅 @progress 事件包含此字段
	"index"				: Number, 		// 上传文件索引 ，仅 @progress 事件包含此字段
	"tempFile"			: file, 		// 当前文件对象 ，包含文件流，文件大小，文件名称等，仅 @progress 事件包含此字段
	"tempFiles"			: files, 		// 文件列表,包含文件流，文件大小，文件名称等
	"tempFilePaths"		: filePaths, 	// 文件地址列表，@sucess 事件为上传后的线上文件地址
}

```


### FilePicker Methods

通过 `$ref` 调用
Called via `$ref`

| 方法称名| 说明|参数|				
| method name| description|parameters|
| :-:| :-:|:-:|				
| upload()| 手动上传 	，如`autoUpload`为`false`  ，必须调用此方法| - |
| upload()| manual upload, if `autoUpload` is `false`, this method must be called | - |
| clearFiles(index:Number)	| 清除选择结果| 传入 Number　为删除指定下标的文件 ，不传为删除所有|
| clearFiles(index:Number) | Clear the selection result | Pass in Number to delete the specified index file, if not pass, delete all|

### FilePicker Slots

插槽可定义上传按钮显示样式 
Slot to define upload button display style

|插槽名|说明 |
|Slot Name|Description|
| :-:| :-:		  |
|default|默认插槽|
| default|default slot|


## 示例
## Example
::: warning 注意
::: warning note
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the sample code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-file-picker) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component Download Page](https://ext.dcloud.net.cn/plugin?name=uni-file-picker) and select `Import Sample Project Using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/file-picker/file-picker
> Template
``` html
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间。</text>
		</uni-card>
		<uni-section title="只选择图片" type="line">
			<view class="example-body">
				<uni-file-picker limit="9" title="最多选择9张图片"></uni-file-picker>
			</view>
		</uni-section>
		<uni-section title="只选择视频" type="line">
			<view class="example-body">
				<uni-file-picker limit="9" file-mediatype="video" title="最多选择9个视频"></uni-file-picker>
			</view>
		</uni-section>


		<!-- #ifdef H5 || MP-WEIXIN -->
		<uni-section title="选择任意文件" type="line">
			<view class="example-body">
				<uni-file-picker limit="5" file-mediatype="all" title="最多选择5个文件"></uni-file-picker>
			</view>
		</uni-section>
		<!-- #endif -->

		<uni-section title="自定义图片大小" type="line">
			<view class="example-body custom-image-box">
				<text class="text">选择头像</text>
				<uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
					file-mediatype="image">选择</uni-file-picker>
			</view>
		</uni-section>

		<uni-section title="自定义图片大小" type="line">
			<view class="example-body ">
				<uni-file-picker readonly :value="fileLists" :imageStyles="imageStyles" file-mediatype="image">
				</uni-file-picker>
				<uni-file-picker readonly :value="fileLists" :listStyles="listStyles" file-mediatype="all">
				</uni-file-picker>
			</view>
		</uni-section>

	</view>
</template>
``` 
> Script
``` html
<script>
	export default {
		data() {
			return {
				imageStyles: {
					width: 64,
					height: 64,
					border: {
						radius: '50%'
					}
				},
				listStyles: {
					// 是否显示边框
					// whether to show the border
					border: true,
					// 是否显示分隔线
					// whether to show the divider
					dividline: true,
					// 线条样式
					// line style
					borderStyle: {
						width: 1,
						color: 'blue',
						style: 'dashed',
						radius: 2
					}
				},
				fileLists: [{
					url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg',
					extname: 'png',
					name: 'shuijiao.png'
				}, {
					url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg',
					extname: 'png',
					name: 'uniapp-logo.png'
				}, {
					url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg',
					extname: 'png',
					name: 'shuijiao.png'
				}]
			}
		},
		methods: {

		}
	}
</script>
``` 
> Style
``` html
<style lang="scss">
	.example-body {
		padding: 10px;
		padding-top: 0;
	}

	.custom-image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 14px;
		color: #333;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/file-picker/file-picker)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/file-picker/file-picker)