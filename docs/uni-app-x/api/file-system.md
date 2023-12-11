# 文件系统  
文件系统提供一套跨平台操作文件的管理接口，包括文件和目录的增删改名、获取信息、读写文件等常用功能。

通过[uni.getFileSystemManager](filemanager.md)可以获取到文件系统管理器，所有文件系统的管理操作通过 [FileSystemManager](filemanager.md#FileSystemManager) 来调用。  
```uts
const fs = uni.getFileSystemManager()
```

文件主要分两大类：  
- 项目包文件：指 uni-app x 项目目录中添加的文件，比如static目录下的文件。Android发行后存放在assets目录下。
- 本地文件：指 uni-app x 应用在手机端运行时可访问的磁盘文件。又分以下目录：
	+ 应用沙盒目录：App平台原生应用的沙盒目录，其中包括缓存文件目录和用户文件目录  
		* 缓存文件目录：App平台运行过程中框架保存缓存文件的目录  
		* 用户文件目录：App平台提供给开发者操作的本地文件目录  


## 项目包文件  
项目包文件放置应用首次加载时需要的文件，对于内容较大或需要动态更新的文件，不推荐添加到项目包文件中，可以在应用启动后联网将文件下载到本地。  

推荐将文件放到static目录（uni_modules下也有static目录），详情参考[工程目录结构](https://uniapp.dcloud.net.cn/tutorial/project.html#static)

没有在static目录的静态文件(比如image src指定静态路径或import)，发行后会变编译到与static同级的assets目录，其中的文件名会加入随机数以避免重名。
因为随机数的存在，导致很难使用FileSystemManager访问。所以还是推荐使用static目录。

**通过FileSystemManager访问项目包文件**  

通过路径访问项目包文件需从项目根目录开始写文件路径，如：/static/uni.png、/uni_modules/xxx/static/clear.png。

>注意：项目包文件仅可读取和复制，无法动态修改或删除。修改项目包文件需要重新发布新版本。  

**真机运行注意**

App端真机运行期间会做特殊处理，将项目包文件同步到`应用沙盒目录`下的特定目录：  
- Android平台  
	保存在应用专属存储空间的外置存储空间根目录下的apps目录，通常为“/sdcard/Android/data/%应用包名%/apps/%应用AppID%/www/”
- iOS平台  
	保存在应用沙盒目录下的Documents/uni-app-x目录，通常为“/%应用沙盒目录%/Documents/uni-app-x/apps/%应用AppID%/www/”


## 本地文件  
本地文件是指应用安装到设备（通常指手机）后，系统会提供一块独立的文件存储区域。在App端将会以应用维度隔离，即在同一台设备，不同应用间的本地文件不能直接相互访问。  

本地文件路径格式为：  
```
{{协议名}}://文件路径  
```
> App端，协议名为"unifile"，不应该直接拼写协议名路径访问本地文件，推荐使用uni.env中的目录常量获取本地文件目录的路径。  

本地文件沙盒目录，分内置和外置。外置可以在Android手机自带的系统文件管理器里看到，并且用户可以改动。内置的保护级别更高，无法在系统文件管理器中看到。

**通过uni.env的目录常量访问本地文件**  

以下示例为在`用户文件目录`下写入hello.txt文件：  
```ts
const fs = uni.getFileSystemManager();
fs.writeFile({
	filePath: `${uni.env.USER_DATA_PATH}/hello.txt`,
	data: 'hello uni-app x!',
	encoding: 'utf-8'
} as WriteFileOptions);
```


### 外置应用沙盒目录  
目录常量名称：`uni.env.SANDBOX_PATH`

App端专有目录，为应用沙盒根目录，其下包含了`缓存文件目录`和`用户文件目录`。此目录在不同平台差异较大，不建议直接使用此目录，需开发者根据平台特性谨慎操作。

实际保存的目录在不同平台存在差异：
- Android平台
	应用专属存储空间的外置存储空间根目录，通常为“/sdcard/Android/data/%应用包名%/”，其下的cache目录为`缓存文件目录`，其下的files目录为`用户文件目录`
- iOS平台
	应用沙盒虚拟目录，其下包括Document、Library、tmp目录，此目录只可读，不可创建其它目录

本目录可以在Android系统的文件管理器中看到。用户在文件管理器中可以查阅删改。手机被root后的沙盒机制也会失效，可以被其他app操作。

#### 缓存文件目录
目录常量名称：`uni.env.CACHE_PATH`

App端本地缓存文件目录保存应用运行过程中产生的缓存文件，操作系统会在存储空间不足时清除缓存文件，因此不要在此目录中保存应用的关键业务数据文件。  

实际保存的目录在不同平台存在差异：
- Android平台  
	应用专属存储空间的外置存储空间根目录下的cache目录，通常为“/sdcard/Android/data/%应用包名%/cache/”  
- iOS平台  
	应用沙盒目录下的Library/Caches目录  

uni-app x的部分内置API会产生临时文件会放置在本cache目录，如：
- uni.downloadFile下载的文件
- uni.uploadFile上传的文件
- uni.chooseImage的拍照或选择的相册文件
<!-- - 录音的文件 -->
- dom element的截图API

#### 用户文件目录  
目录常量名称：`uni.env.USER_DATA_PATH  `

App端用户文件目录提供给开发者在应用运行期保存业务逻辑文件，此目录不会被操作系统自动清除，由开发者完全自由管理。  

实际保存的目录在不同平台存在差异：  
- Android平台  
	应用专属存储空间的外置存储空间根目录下的files目录，通常为“/sdcard/Android/data/%应用包名%/files/”  
- iOS平台  
	应用沙盒目录下的Document目录  

### 内置应用沙盒目录  

目录常量名称：`uni.env.ANDROID_INTERNAL_SANDBOX_PATH`

uni-app x框架的一些内置组件和API会涉及缓存文件，存放到本目录，如：
- image/video组件的网络图片缓存
<!-- - 网络字体缓存? --> 