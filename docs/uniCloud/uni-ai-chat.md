## 简介
uni-ai-chat是基于[uni-ai](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html)的云端一体AI项目模板

视频效果：  
<video controls src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-ai-chat/uni-ai-stream.mov" style="max-width: 100%; max-height: 70vh;"></video>

包含一个前端页面(路径：`/pages/chat/chat.vue`)和一个云对象(路径：`uniCloud/cloudfunctions/uni-ai-chat/index.obj.js`)


## 体验步骤  

1. 如之前未使用过uni-app，那请重头学起。[uni-app官网](https://uniapp.dcloud.net.cn)
2. 如果你还没有开通uniCloud，需要登录[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/)，创建一个服务空间。
3. 打开`uni-ai-chat`插件下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-ai-chat](https://ext.dcloud.net.cn/plugin?name=uni-ai-chat)
4. 点击`使用HBuilderX导入示例项目`
5. 对项目根目录uniCloud点右键选择“云服务空间初始化向导”界面按提示部署项目
6. 在uni-app项目点右键创建uniCloud环境，关联之前创建的服务空间。

## 注意事项  

uni-ai-chat支持[stream](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#%E6%B5%81%E5%BC%8F%E5%93%8D%E5%BA%94-chat-completion-stream)
模式，该模式会接收uni-ai的流式响应的数据，再通过[sse-channel](https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html)即：云函数（云对象）请求中的中间状态通知通道向客户端推送消息
而使用`sse-channel`需要先[开通uni-push](https://uniapp.dcloud.net.cn/unipush-v2.html#%E7%AC%AC%E4%B8%80%E6%AD%A5-%E5%BC%80%E9%80%9A)
，目前uni-push2.0不支持本地调试（后续版本会支持），需要再在HBuilderX控制台，更改`连接本地云函数`为`连接云端云函数`。
