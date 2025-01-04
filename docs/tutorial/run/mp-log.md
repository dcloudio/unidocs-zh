# 小程序运行日志回显
> HBuilderX 4.41+

uni-app 运行到小程序开发者工具时，可以在HBuilderX的控制台查看运行时日志，并且显示uni-app源码位置，方便回源。
- 目前支持 vue3 项目的微信、支付宝、百度、抖音小程序。其他小程序平台未放开。
- 包含console信息和onError数据。其他信息(如：小程序开发工具自身的信息提示、视图层wxs/sjs、worklet等)无法获取，模板（如wxml/ttml等）警告、错误等信息暂不支持回溯到源码位置。
- 确保开启了不校验合法域名（默认已开启）。
- 如使用手机真机，需确保手机可以连接HBuilderX安装的电脑，手机和电脑在同一ip段，且电脑的防火墙没有拒绝连接。
- 真机预览的错误堆栈可能回溯不到源码位置。
- 日志回显使用了 socket 连接，为了避免冲突，建议使用 SocketTask 的方式去管理 WebSocket，而不是全局的 socket API 方式，小程序目前最多允许并发 5 个 socket 连接（微信小程序文档标明最多5个，但实际测试只有2个），如果您的小程序不希望日志回显占用 socket 连接，可以在 HBuilderX 控制台手动取消日志回显功能（注意：切换后，需要重新运行）。

日志回显开关
![](https://web-ext-storage.dcloud.net.cn/doc/hx/WX20250104-125814@2x_1.png)

日志回显效果：
![](https://web-ext-storage.dcloud.net.cn/hx/05519546-456A-4B0C-AA0E-23199917F7B8.png)
