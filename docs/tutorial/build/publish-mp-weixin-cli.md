# uni-app发行到微信小程序@uploadPrivateKey
# uni-app is distributed to WeChat applet @uploadPrivateKey

> HBuilderX 3.3.7+, uni-app 发行到微信小程序，支持自动上传代码到微信平台，无需再打开微信开发者工具上传发行
> HBuilderX 3.3.7+, uni-app is released to WeChat applet, supports automatic upload of code to WeChat platform, no need to open WeChat developer tool to upload and distribute

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%8F%91%E8%A1%8C.jpg" style="zoom: 50%;" />

通过微信小程序CI，使用上传密钥上传代码，无需打开微信开发者工具，一键完成微信小程序代码的上传、预览等操作。
Through the WeChat applet CI, you can upload the code using the upload key without opening the WeChat developer tool, and you can complete the uploading and previewing of the WeChat applet code with one click.

**注意：**
**Notice:**

- 自动上传到微信平台，依赖CI插件，如弹窗提示要求安装CI插件，请点击确认安装；
- Automatically upload to WeChat platform, rely on CI plug-in, if the pop-up window prompts to install CI plug-in, please click to confirm the installation;
- 自动上传到微信平台，需要配置`上传密钥`，并正确填写`微信小程序appid`和`privatekey`；
- 自动上传到微信平台，如果开启了`IP白名单`，请确保微信平台已正确配置 `IP白名单`。
- 关于微信ci机器人编号，仅支持HBuilderX 3.6.18+