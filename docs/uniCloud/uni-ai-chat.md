## uni-ai-chat 简介

> 支持HBuilder版本，正式版 3.7.10+，alpha版 3.8.0+

`uni-ai-chat`是基于[uni-ai](uni-ai.md)的聊天项目模板。它包含一个前端页面(路径：`/pages/chat/chat.vue`)和一个云对象(路径：`uniCloud/cloudfunctions/uni-ai-chat/index.obj.js`)

它支持上文总结、流式响应，把众多复杂的ai聊天逻辑都封装好了。

**插件下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-ai-chat](https://ext.dcloud.net.cn/plugin?name=uni-ai-chat)**

视频效果：  
<video controls src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-ai-chat/uni-ai-stream.mov" style="max-width: 100%; max-height: 70vh;"></video>

在线体验：[https://hellouniadmin.dcloud.net.cn/](https://hellouniadmin.dcloud.net.cn/)。

这是一个集成了uni-ai-chat的[uni-admin](admin.md)系统。注意入口有点深。登录后，左侧内容管理中新建一篇文章，toolbar右上角有ai按钮，点击后右侧弹出uni-ai-chat。注意测试系统的数据会定时清除。

## 使用步骤  

1. 如之前未使用过uni-app，那请从头学起。[uni-app官网](https://uniapp.dcloud.net.cn)
2. 如果你还没有开通uniCloud，需要登录[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/)，创建一个服务空间。
3. 如果你不了解[uni-ai](uni-ai.md)，请务必阅读相关文档。
4. 打开本插件`uni-ai-chat`下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-ai-chat](https://ext.dcloud.net.cn/plugin?name=uni-ai-chat)
5. 点击`使用HBuilderX导入示例项目`
6. 对项目根目录uniCloud点右键选择“云服务空间初始化向导”界面按提示部署项目
7. 在uni-app项目点右键，关联之前创建的服务空间。
8. 运行启动。
9. 如果需要stream流式响应，需要在[dev.dcloud.net.cn](https://dev.dcloud.net.cn)的uni-push2中开通你的应用，然后把云函数上传到uniCloud服务空间，并且运行时在HBuilderX控制台选择`连接云端云函数`

## stream流式响应实现解析

当访问 AI 接口时，如果生成的回复内容过大，响应时间会很长，导致前端用户需要等待很长时间才能收到结果。所以流式响应可以减少前端用户的等待，让ai回复的内容一个字或一段话逐步出现在前端用户的界面上。

`uni-ai-chat`的流式响应，调用的是`uni-ai`的llm API中的[stream参数](uni-ai.md#chat-completion-stream)。

而stream参数是基于云函数的[sse通道](sse-channel.md#cloud-deserialize-channel)封装的。

而`sse通道`是基于[uni-push2](https://uniapp.dcloud.net.cn/unipush-v2.html)封装的。

所以**使用流式响应必须给应用开通uni-push**。

流式响应的流程图

<img width="400px" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-ai-chat/20230425203311.jpg">

流式响应的使用需客户端先通过 `new uniCloud.SSEChannel()` 创建 SSE 通道，并获得 `channel` 值（详情请参考：[https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html#create-sse-channel](https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html#create-sse-channel)）。在客户端向 uniCloud 云对象发起请求时，需要将该 `channel` 值作为参数一同携带；然后 uniCloud 云对象与 uni-ai 建立 流式响应[(stream)](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream) 通讯，云对象监听 uni-ai 返回的分片数据，在接收到数据后再通过 sse-channel ([反序列化消息通道](https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html#cloud-deserialize-channel))向客户端推送消息。

### 注意事项 @heed
- 使用`sse-channel`需要先[开通uni-push](https://uniapp.dcloud.net.cn/unipush-v2.html#%E7%AC%AC%E4%B8%80%E6%AD%A5-%E5%BC%80%E9%80%9A)
- 目前uni-push2.0不支持本地调试（后续版本会支持），需要在HBuilderX控制台，更改`连接本地云函数`为`连接云端云函数`。

## 配置
文件路径 `uniCloud/cloudfunctions/common/uni-config-center/uni-ai-chat/config.json`

目前的配置文件包括是否开启内容安全，即是否检查用户输入和ai返回结果的合规性。开启后，会延缓一定的响应时间，但保证了合规性。

| 字段        | 类型       | 默认值 | 描述                       |
| :--------  | :--------  | :--- | :------------------------ |
| contentSecurity  | Boolean | false   | 开启内容安全识别    |

这里内置的内容安全是基于`uni-sec-check`插件，它是免费的，但有一些限制条件，请务必阅读该插件的文档：[https://uniapp.dcloud.net.cn/uniCloud/uni-sec-check.html](uni-sec-check.md)。

如果你需要使用其他的内容安全检测方案，请自行集成。

注意：如果对ai返回结果进行内容安全检查，会导致stream流式响应失效。

## 其他

DCloud基于`uni-ai`提供了很多开源模板，除了本项目`uni-ai-chat`，还有：

- [uni-cms](uni-cms.md)，一款集成了ai生成文章内容的开源内容管理系统。
- [uni-im](uni-cms.md)，一款集成了ai的大型im系统，包括私聊群聊好友等丰富功能。

## 交流群

更多问题欢迎加入uni-ai官方交流群 qq群号:[699680439](https://qm.qq.com/cgi-bin/qm/qr?k=P_JoYXY56vNfb78uNHwwzqpODwl9e89B&jump_from=webapi&authKey=GDp321q9ZYW4V0ZQcejXikwMnNRs4KVBcQXMADs8lvC0hifSH9ORHsyERy6vO4bA)
