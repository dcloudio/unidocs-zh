### uni.getUpdateManager()

本API返回**全局唯一**的版本更新管理器对象： updateManager，用于管理小程序更新。
This API returns a **globally unique** version update manager object: updateManager, which is used to manage applet updates.

App的更新不使用本API，另见文档：
App updates do not use this API, see also the documentation:
- 整包更新：[https://ask.dcloud.net.cn/article/34972](https://ask.dcloud.net.cn/article/34972)
- Whole package update: [https://ask.dcloud.net.cn/article/34972](https://ask.dcloud.net.cn/article/34972)
- 资源文件热更新(wgt升级)：[https://ask.dcloud.net.cn/article/35667](https://ask.dcloud.net.cn/article/35667)
- Hot update of resource files (wgt upgrade): [https://ask.dcloud.net.cn/article/35667](https://ask.dcloud.net.cn/article/35667)

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|√|√|√|√|√|√|

**updateManager 对象的方法列表：**
**List of methods of the updateManager object:**

|方法				|参数		|说明															|
|Method |Parameters |Description |
|---|---|---|
|onCheckForUpdate	|callback	|当向小程序后台请求完新版本信息，会进行回调						|
|onCheckForUpdate |callback |When the new version information is requested from the applet background, a callback will be made |
|onUpdateReady		|callback	|当新版本下载完成，会进行回调									|
|onUpdateReady |callback |When the new version is downloaded, it will call back |
|onUpdateFailed		|callback	|当新版本下载失败，会进行回调									|
|onUpdateFailed |callback |When the download of the new version fails, a callback will be made |
|applyUpdate		|			|当新版本下载完成，调用该方法会强制当前小程序应用上新版本并重启	|
|applyUpdate | |When the new version is downloaded, calling this method will force the current applet to apply the new version and restart |

**onCheckForUpdate(callback) 回调结果说明：**
**onCheckForUpdate(callback) callback result description:**

|属性|类型|说明|
|property|type|description|
|---|---|---|
|hasUpdate|Boolean|是否有新的版本	|
|hasUpdate|Boolean|Is there a new version|

**代码示例**
**CODE EXAMPLE**

```javascript
const updateManager = uni.getUpdateManager();

updateManager.onCheckForUpdate(function (res) {
  // 请求完新版本信息的回调
  // Callback for requesting new version information
  console.log(res.hasUpdate);
});

updateManager.onUpdateReady(function (res) {
  uni.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success(res) {
      if (res.confirm) {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        // The new version has been downloaded, call applyUpdate to apply the new version and restart
        updateManager.applyUpdate();
      }
    }
  });

});

updateManager.onUpdateFailed(function (res) {
  // 新的版本下载失败
  // Failed to download new version
});
```