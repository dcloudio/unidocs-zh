### uni.createMediaContainer()
创建音视频处理容器，最终可将容器中的轨道合成一个视频 ，返回 `MediaContainer` 对象
Create an audio and video processing container, and finally combine the tracks in the container into a video and return a `MediaContainer` object

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|2.9.0+|x|x|x|x|x|x|

#### MediaContainer.addTrack(track)
将音频或视频轨道添加到容器
Add an audio or video track to a container

**参数说明**
**Parameter Description**

|参数|说明|
|Parameters|Description|
|:-|:-|
|track|要添加的音频或视频轨道|
|track|Audio or video track to add|

#### MediaContainer.destroy()
将容器销毁，释放资源
Destroy the container and release resources

#### MediaContainer.export()
将容器内的轨道合并并导出视频文件
Merge the tracks inside the container and export the video file

#### MediaContainer.extractDataSource(object)
将容器内的轨道合并并导出视频文件 ,返回 `MediaTrack` 对象
Merge the tracks in the container and export the video file, returning a `MediaTrack` object

**参数说明**
**Parameter Description**

|属性|类型|必填	|说明|
|Attribute|Type|Required |Description|
|:-|:-|:-|:-|
|source|String|是|视频源地址，只支持本地文件|
|source|String|Yes |Video source address, only supports local files|

#### MediaContainer.removeTrack(track)
将音频或视频轨道添加到容器
Add an audio or video track to a container

**参数说明**
**Parameter Description**

|参数|说明|
|Parameters|Description|
|:-|:-|
|track|要移除的音频或视频轨道|
|track|Audio or video track to remove|


### MediaTrack 
可通过 `MediaContainer.extractDataSource` 返回。
Returned by `MediaContainer.extractDataSource`.

 `MediaTrack` 音频或视频轨道，可以对轨道进行一些操作
 `MediaTrack` audio or video track, you can perform some operations on the track

**参数说明**
**Parameter Description**

|属性|类型|说明|
|property|type|description|
|:-|:-|:-|
|kind|String|轨道类型，只读 ,audio:音频轨道;video:视频轨道	|
|kind|String|track type, read only ,audio:audio track;video:video track |
|duration|Number|轨道长度，只读	|
|duration|Number|Track length, read only |
|volume|Number|音量，音频轨道下有效，可写	|
|volume|Number|Volume, valid under audio track, writable |