# 扩展存储API

扩展存储介绍，待补充

**特点**

1. CDN价格更便宜，低至x.xx元/GB
2. 支持自定义域名
3. 支持将文件设置为私有权限
4. 支持设置未登录用户禁止上传，或指定用户禁止上传

## 开通扩展存储服务@buy

参考[开通扩展存储](uniCloud/uni-cloud-ext-storage/buy.md)

## 为云函数启用uni-cloud-ext-storage扩展库@use-in-function

扩展存储是单独的扩展库，开发者需手动将uni-cloud-ext-storage扩展库添加到云函数或云对象的依赖中。

操作步骤：

1. 右键需要添加的云函数或云对象
2. 点击-管理公共模块或扩展库依赖
3. 勾选uni-cloud-ext-storage扩展库

## API

### 获取扩展存储管理对象

云端在操作扩展存储前，需要先获取 extStorageManager 对象实例，然后再通过 extStorageManager.xxx 调用对应的API

**云端代码**

```js
const extStorageManager = uniCloud.getExtStorageManager({
	provider: "qiniu", // 扩展存储供应商
	domain: "你的扩展存储域名", // 带http协议头的域名地址
});
```

#### 请求参数

|参数名	|类型		|必填	|默认值	|说明																				|
|:-:		|:-:		|:-:	|:-:		|:-:																				|
|provider	|String	|是		|-			|扩展存储供应商，可选<br/>qiniu: 七牛云|
|domain	|String	|是		|-			|你的扩展存储域名（带http协议头的域名地址）	|

### 获取前端上传参数

接口名：getUploadFileOptions

调用此接口可在云端获取前端上传所需参数，将上传参数返回给前端，前端使用 uni.uploadFile 即可上传文件

你可以在调用 extStorageManager.getUploadFileOptions 前执行一些自己的业务逻辑，判断用户是否有上传权限。

**云端代码**

```js
module.exports = {
	getUploadFileOptions(data = {}) {
		let { 
			cloudPath, // 前端传过来的文件路径
		} = data;
		// 可以在此先判断下此路径是否允许上传等逻辑
		// ...
		
		// 然后获取 extStorageManager 对象实例
		const extStorageManager = uniCloud.getExtStorageManager({
			provider: "qiniu",
			domain: "你的扩展存储域名", // 带http协议头的域名地址
		});
		// 最后调用 extStorageManager.getUploadFileOptions
		let uploadFileOptionsRes = extStorageManager.getUploadFileOptions({
			cloudPath: cloudPath,
			cover: false, // 如果返回前端，建议设置false，代表仅新增，不可覆盖
		});
		return uploadFileOptionsRes;
	}
}
```

#### 请求参数

|参数名						|类型			|必填	|默认值	|说明																														|
|:-:							|:-:			|:-:	|:-:		|:-:																														|
|cloudPath				|String		|否		|-			|云端文件路径（不填会自动生成）																	|
|cover						|Boolean	|否		| false	|是否允许覆盖 true：可覆盖 false：仅新增，不可覆盖							|

#### 响应参数

|字段							|类型		|说明																											|
|:-:							|:-:		|:-:																											|
|uploadFileOptions|Object	|uni.uploadFile所需的参数																	|
|cloudPath				|String	|文件云端路径																							|
|fileID						|String	|文件ID																										|
|fileURL					|String	|文件URL（如果是私有权限的文件，则此URL是无法直接访问的）	|

**前端上传代码**

```js
uni.chooseImage({
	count: 1,
	success: async (res) => {
		const filePath = res.tempFilePaths[0];
		uni.showLoading({ title: "上传中...", mask: true });
		// ext-storage-co 是你自己写的云对象（参考上面的云端代码）
		const uniCloudStorageExtCo = uniCloud.importObject("ext-storage-co");
		const uploadFileOptionsRes = await uniCloudStorageExtCo.getUploadFileOptions({
			cloudPath: "a/test.jpg", // 支持自定义目录
		});
		const uploadTask = uni.uploadFile({
			...uploadFileOptionsRes.uploadFileOptions, // 上传文件所需参数
			filePath: filePath, // 本地文件路径
			success: () => {
				const res = {
					cloudPath: uploadFileOptionsRes.cloudPath; // 文件云端路径
					fileID: uploadFileOptionsRes.fileID; // 文件ID
					fileURL:  uploadFileOptionsRes.fileURL; // 文件URL（如果是私有权限，则此URL是无法直接访问的）
				};
				// 数据库里可直接保存 fileURL 或 fileID
				console.log("上传成功", res);
			},
			fail: (err) => {
				console.log("上传失败", err);
			}
		});
		// 监听上传进度
		uploadTask.onProgressUpdate((res) => {
			console.log("监听上传进度", res);
		});
		uni.hideLoading();
	}
});
```

### 云端直传文件

接口名：uploadFile

调用此接口可在云端直传文件到云存储

**云端代码**

```js
const extStorageManager = uniCloud.getExtStorageManager({
	provider: "qiniu",
	domain: "你的扩展存储域名", // 带http协议头的域名地址
});
// 文件的base64值
let base64 =
	`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAX1JREFUeF7tnLFxwkAQRf86dEwHDqEATAeO3YNdgmugBFGDiemAoQBSd+DUhD6Pxk6Y4XTB13o08AiFDt09vf3cCGZDkhbd6qHoey3Fk6T7/tgNv05S2YXu3o6v+4/4haODVGY3DOXC0uMzpGXMu+W7FM/AuUSgbGPePX5RVlU9Tj2ggj11AgBq2AEgAHkBgkEYhEEeAQzy+JFBGIRBHgEM8viRQRg0AYOOL/vqLBablTfDxujsa49SYtmTHGKUfW0A/UcGZd9FDDJSKvvmUGKUmKGnJAzCIAxK3aRSYpQYJUaJsZM2qoCdNI87DH0kYRAGYZBHAIM8fmQQBmGQRwCDPH5kEAZhkEcAgzx+ZBAGYZBH4NoNSqXT+PAx/puU/rMPgBpP9QAEoLYDQ3uR9ui8M8ggQtqzazIGecuY9uhRvuanvURvdgBq8AMQgCgxjwAGefzIIAzCII8ABnn8aLA0zK9vsESLrjqjsqXJW5XOX5O3/n3aBJ5ROmsT+AM4B3/QCW75sQAAAABJRU5ErkJggg==`;
let base64Str = "base64,";
let base64Index = base64.indexOf(base64Str);
if (base64Index > -1) base64 = base64.substring(base64Index + base64Str.length);

let fileContent = new Buffer(base64, 'base64');
let res = await extStorageManager.uploadFile({
	cloudPath: `${Date.now()}.png`, // 云端文件名，不填则自动生成
	fileContent, // 要上传的文件内容
	cover: false, // 是否允许覆盖
});
console.log('uploadFile: ', res);
```

#### 请求参数

|参数名			|类型		|必填	|默认值	|说明																							|
|:-:				|:-:		|:-:	|:-:		|:-:																							|
|fileContent|Buffer	|是		|-			|文件内容																					|
|cloudPath	|String	|否		|-			|云端文件路径（不填会自动生成）										|
|cover			|Boolean|否		| false	|是否允许覆盖 true：可覆盖 false：仅新增，不可覆盖|

#### 响应参数

|字段							|类型		|说明																											|
|:-:							|:-:		|:-:																											|
|cloudPath				|String	|文件云端路径																							|
|fileID						|String	|文件ID																										|
|fileURL					|String	|文件URL（如果是私有权限的文件，则此URL是无法直接访问的）	|

### 获取临时下载链接

接口名：getTempFileURL

调用此接口可批量获取私有文件的临时下载链接

你可以在调用 extStorageManager.getTempFileURL 前执行一些自己的业务逻辑，判断用户是否有获取临时下载链接权限。

**云端代码**

```js
const extStorageManager = uniCloud.getExtStorageManager({
	provider: "qiniu",
	domain: "你的扩展存储域名", // 带http协议头的域名地址
});
let res = extStorageManager.getTempFileURL({
	fileList: ["qiniu://a.jpg"], // 私有文件地址列表
});
console.log('getTempFileURL: ', res);
return res;
```

#### 请求参数

|参数名		|类型		|必填	|默认值	|说明																														|
|:-:			|:-:		|:-:	|:-:		|:-:																														|
|fileList	|Array	|是		|-			|文件地址列表，数组内元素格式支持（cloudPath、fileID、fileURL）	|

#### 响应参数

|字段							|类型		|说明																											|
|:-:							|:-:		|:-:																											|
|fileList				|Array	|存储下载链接的数组																				|

响应参数中的fileList

|字段				|类型		|说明						|
|:-:				|:-:		|:-:						|
|tempFileURL|String	|临时文件URL地址|
|fileID			|String	|文件ID					|
|cloudPath	|String	|文件云端路径		|

### 删除文件

接口名：deleteFile

调用此接口可批量删除云端文件

**云端代码**

```js
const extStorageManager = uniCloud.getExtStorageManager({
	provider: "qiniu",
	domain: "你的扩展存储域名", // 带http协议头的域名地址
});
let res = extStorageManager.deleteFile({
	fileList: fileList, // 私有文件地址列表
});
console.log('deleteFile: ', res);
return res;
```

#### 请求参数

|参数名		|类型		|必填	|默认值	|说明																														|
|:-:			|:-:		|:-:	|:-:		|:-:																														|
|fileList	|Array	|是		|-			|文件地址列表，数组内元素格式支持（cloudPath、fileID、fileURL）	|

#### 响应参数

|字段			|类型	|说明									|
|:-:			|:-:	|:-:									|
|fileList	|Array|删除结果组成的数组。	|

### 修改文件状态

接口名：updateFileStatus

可以将指定文件设置为私有权限或公共权限

默认上传的文件都是公共权限，如果需要将文件设置为私有权限，则可调用此接口

**云端代码**

```js
const extStorageManager = uniCloud.getExtStorageManager({
	provider: "qiniu",
	domain: "你的扩展存储域名", // 带http协议头的域名地址
});
let res = extStorageManager.updateFileStatus({
	fileID: fileID, // 私有文件id
	isPrivate: true, // true 私有 false 公共
});
console.log('updateFileStatus: ', res);
return res;
```

#### 请求参数

|参数名		|类型		|必填	|默认值	|说明																							|
|:-:			|:-:		|:-:	|:-:		|:-:																							|
|fileID		|String	|是		|-			|待修改的文件，支持（cloudPath、fileID、fileURL）	|
|isPrivate|Boolean|是		|-			|true 设为私有权限 false 设为公共读权限						|

#### 响应参数

|字段	|类型		|说明								|
|:-:	|:-:		|:-:								|
|errCode	|Number	|0 成功 其他均为失败|
|errMsg	|String	|失败描述|
