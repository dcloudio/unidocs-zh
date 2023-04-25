## 简介
> 仅支持3.8.0及以上版本的HBuilderX  

uni-ai-chat是基于[uni-ai](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html)的云端一体AI项目模板

视频效果：  
<video controls src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-ai-chat/uni-ai-stream.mov" style="max-width: 100%; max-height: 70vh;"></video>

包含一个前端页面(路径：`/pages/chat/chat.vue`)和一个云对象(路径：`uniCloud/cloudfunctions/uni-ai-chat/index.obj.js`)

## 响应流程图
<img width="400px" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-ai-chat/20230425203311.jpg">

- 普通响应的流程较为简单，全流程基于 HTTP 网络请求。其缺陷是，当访问 AI 聊天接口时，如果生成的回复内容过大，响应时间会很长，导致前端用户需要等待很长时间才能收到结果。详情请参考：[stream的优势](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream)。

- 流式响应的使用需客户端先通过 `new uniCloud.SSEChannel()` 创建 SSE 通道，并获得 `channel` 值（详情请参考：[https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html#create-sse-channel](https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html#create-sse-channel)）。在客户端向 uniCloud 云对象发起请求时，需要将该 `channel` 值作为参数一同携带；然后 uniCloud 云对象与 uni-ai 建立 流式响应[(stream)](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream) 通讯，云对象监听 uni-ai 返回的分片数据，在接收到数据后再通过 sse-channel ([反序列化消息通道](https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html#cloud-deserialize-channel))向客户端推送消息。

### 注意事项 @heed
- 使用`sse-channel`需要先[开通uni-push](https://uniapp.dcloud.net.cn/unipush-v2.html#%E7%AC%AC%E4%B8%80%E6%AD%A5-%E5%BC%80%E9%80%9A)
- 目前uni-push2.0不支持本地调试（后续版本会支持），需要在HBuilderX控制台，更改`连接本地云函数`为`连接云端云函数`。

## 体验步骤  

1. 如之前未使用过uni-app，那请从头学起。[uni-app官网](https://uniapp.dcloud.net.cn)
2. 如果你还没有开通uniCloud，需要登录[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/)，创建一个服务空间。
3. 打开`uni-ai-chat`插件下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-ai-chat](https://ext.dcloud.net.cn/plugin?name=uni-ai-chat)
4. 点击`使用HBuilderX导入示例项目`
5. 对项目根目录uniCloud点右键选择“云服务空间初始化向导”界面按提示部署项目
6. 在uni-app项目点右键，关联之前创建的服务空间。
