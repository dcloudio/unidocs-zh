## Google Play上架

首先App提交云端打包时请务必勾选“GooglePlay”渠道：

![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/uni-app/doc/channel-google.png)

Google Play上架审核要求比较严格，需要注意以下问题：
- 应用中不能存在下载/安装apk的行为，不要勾选android.permission.INSTALL_PACKAGES、android.permission.REQUEST_INSTALL_PACKAGES权限‘
- 应用中的任何功能都不能引导用户下载其它应用，以下模块不能使用：
  + QQ登录、QQ分享：手机没有安装QQ应用时，会引导用户安装
  + uni-AD 增强广告SDK：广告中存在下载安装其它三方应用的行为。**uni-AD 广告基础功能不受影响**
- 应用中不能使用动态加载代码，因此无法配置使用X5内核，详情：[https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/36806)

**应用必须适配Android11，设置targetSdkVersion大于等于30：**[https://ask.dcloud.net.cn/article/193](https://ask.dcloud.net.cn/article/193#targetsdkversion)

**上传安装包使用Android App Bundle（AAB）格式：**[https://ask.dcloud.net.cn/article/39052](https://ask.dcloud.net.cn/article/39052)