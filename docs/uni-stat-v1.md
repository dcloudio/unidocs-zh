::: warning 注意 
::: warning attention
 您正在浏览的是老版uni统计1.0的文档。推荐升级到[uni统计2.0](uni-stat-v2.html)
 You are browsing the documentation for the old version of uni stats 1.0. It is recommended to upgrade to [uni stats 2.0](uni-stat-v2.html)
:::

uni-app 2.2.3+ 版本新增 `uni 统计1.0`，支持全平台业务统计，包括App、H5及各家小程序。
uni-app 2.2.3+ version adds `uni statistics 1.0`, which supports business statistics on the whole platform, including App, H5 and various small programs.

1. 无需在各端接不同的sdk、无需在不同报表看数据。uni统计：一张报表看遍业务全景。
1. There is no need to connect different sdk at each end, and there is no need to view data in different reports. uni statistics: a report to see the business panorama.
2. 拉通内容。让你知道用户到底喜欢你提供的什么内容，不管是新闻app里的新闻，还是购物app里的商品，都可以一目了然的看到全景。
2. Pull through the content. Let you know what content users like you provide, whether it is the news in the news app or the products in the shopping app, you can see the panorama at a glance.

web控制台地址：[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)
Web console address: [https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)

## 第一步、配置统计开关
## The first step, configure the statistics switch

自 uni-app 2.2.3版本后，`uni-app`项目在发布时会默认启用 uni统计，开发者可在[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)查看数据报表。
Since uni-app version 2.2.3, the `uni-app` project will enable uni statistics by default when it is released. .net.cn) to view the data report.
但从 uni-app 2.7起，默认值改为了不启用。需要在manifest中手动配置开启。
But since uni-app 2.7, the default is changed to not enabled. It needs to be manually configured in the manifest.

在HBuilderX中打开manifest，选择 uni统计，如下图：
Open the manifest in HBuilderX and select uni statistics, as shown below:

![选择 uni统计](https://ask.dcloud.net.cn/uploads/article/20200428/761d2dca6ce34febfc4d43c09c6fd85f.jpg)

如果不使用HBuilderX，也可在 `manifest.json` 的源码视图中手动关闭 uni统计
If you don't use HBuilderX, you can also manually turn off uni statistics in the source view of `manifest.json`

将 `manifest.json -> uniStatistics`  下的 `enable` 字段设置为 `false` 来关闭 uni 统计
Set the `enable` field under `manifest.json -> uniStatistics` to `false` to turn off uni statistics

```json
//...
"uniStatistics": {
	"enable": false//全局关闭
},
//...
```

注意：`uniStatistics`支持分平台设置，比如若需仅关闭微信平台的 uni统计，则在`mp-weixin`节点下设置`uniStatistics ->enable`即可，如下：
Note: `uniStatistics` supports sub-platform settings. For example, if you only need to turn off uni statistics on the WeChat platform, you can set `uniStatistics ->enable` under the `mp-weixin` node, as follows:

```json
//...
"mp-weixin":{
    "uniStatistics": {
        "enable": false //微信平台关闭统计
    }
}
```

## 第二步、小程序端需添加域名访问白名单
## Step 2, the applet needs to add domain name access whitelist
由于各家小程序对可访问的域名要配置白名单，否则无法联网，所以需要将`tongji.dcloud.io`配入服务器域名列表。详细教程可参考[https://ask.dcloud.net.cn/article/36298](https://ask.dcloud.net.cn/article/36298)
Because each applet needs to configure a whitelist for the accessible domain names, otherwise it will not be able to connect to the Internet, so you need to add `tongji.dcloud.io` to the server domain name list. For detailed tutorials, please refer to [https://ask.dcloud.net.cn/article/36298](https://ask.dcloud.net.cn/article/36298)

## 第三步、使用HBuilderX 2.2.3以上或对应的cli版发行应用
## The third step, use HBuilderX 2.2.3 or above or the corresponding cli version to release the application

应用在运行、调试时不会上报统计数据，仅在发行后，并启动新版的App、h5、小程序，才会上报数据。
The application will not report statistical data when it is running or debugged. It will only report the data after launching the new version of the app, h5, and applet.

## 第四步、登陆统计后台看数据
## The fourth step, log in to the statistics background to see the data
uni统计报表网址：[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)
Website of uni statistical report: [https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)

请使用正确的DCloud账户登陆后台，每个DCloud账户登陆后可看到自己名下创建的应用。如果看不到期待的应用，那说明这个账户不是某个应用的所有者。
Please use the correct DCloud account to log in to the background. After logging in with each DCloud account, you can see the applications created under your own name. If you don't see the expected app, then the account is not the owner of an app.

如果appid对应的项目的所有者发生变更，请参考[如何转让应用](http://ask.dcloud.net.cn/article/12861)
If the owner of the project corresponding to the appid changes, please refer to [How to transfer the app](http://ask.dcloud.net.cn/article/12861)

数据报表更新有延时，手机端上报数据后延迟几十分钟可在后台报表看到数据。
There is a delay in the update of the data report. After the data is reported on the mobile phone, the data can be seen in the background report after a delay of tens of minutes.

--------------------

## 发行时为什么提示“当前应用未配置Appid，无法使用uni统计”
## Why does it prompt "The current application does not have an Appid configured and cannot use uni statistics" when it is released

`uni统计`以appid区分不同应用，因此在编译项目时，若发现当前应用未配置appid，则会在控制台显示如下警告提醒：
`uni statistics` uses appid to distinguish different applications, so when compiling the project, if it is found that the current application is not configured with appid, the following warning will be displayed on the console:

```
当前应用未配置Appid，无法使用uni统计
```

此时，开发者可通过HBuilderX、[DCloud开发者中心](https://dev.dcloud.net.cn)两个入口创建应用，获取Appid。
At this point, developers can create applications through the two portals of HBuilderX and [DCloud Developer Center](https://dev.dcloud.net.cn) to obtain the Appid.

**方式1. 登录HBluiderX获取**
**Method 1. Log in to HBluiderX to obtain**

在HBluiderX中先登录，然后在项目根目录打开 `manifest.json`，在可视化界面点击获取 `APPID` 获取，无需其他设置，如下图
Log in first in HBluiderX, then open `manifest.json` in the project root directory, click to get `APPID` in the visual interface, no other settings are required, as shown below

![获取appid](https://web-assets.dcloud.net.cn/unidoc/zh/appid.png)
![Get appid](https://web-assets.dcloud.net.cn/unidoc/zh/appid.png)

**方式2. 登录DCoud开发者中心获取(即将支持)**
**Method 2. Log in to DCud Developer Center to get it (coming soon)**

登录[DCloud开发者中心](https://dev.dcloud.net.cn)，在线创建应用，然后将新应用的appid填写到manifest.json中
Log in to [DCloud Developer Center](https://dev.dcloud.net.cn), create an application online, and then fill in the appid of the new application into manifest.json

```javascript
{
  // ...
  "appid":"创建的 appid"
  // ...
}
```

Tips
- 使用 uni 统计必须配置 `APPID` 才能正常使用
- To use uni statistics, `APPID` must be configured for normal use
- 获取以及创建的 `APPID` 是与您的 `DCloud` 账号绑定的，请不要随意填写，否则将不能正常获取上报内容
- The `APPID` obtained and created is bound to your `DCloud` account, please do not fill in it at will, otherwise the report content will not be obtained normally
- 部分开发者不重视Appid，在不同应用中使用相同的appid，请修改这些错误的行为。
- Some developers don't pay attention to Appid and use the same appid in different applications, please correct these wrong behaviors.
- 附参考文章：[DCloud的Appid有什么用，如需转让应用怎么做](https://ask.dcloud.net.cn/article/35907)
- Attached reference article: [What is the use of DCloud's Appid, how to transfer the application](https://ask.dcloud.net.cn/article/35907)


## 注意事项
## Precautions
- uni统计具备当日实时数据统计功能，但这个实时，仍然要经历一定运算时间，一般在3分钟到1个小时内的不等。
- uni statistics has the function of real-time data statistics of the day, but this real-time still needs to go through a certain computing time, generally ranging from 3 minutes to 1 hour.
- 如果开发者连续3日不登录uni统计控制台，则暂停实时统计服务；再次登录后1小时内会开始进行实时统计。这种暂停不影响日报、不影响整体数据准确性。
- If the developer does not log in to the uni statistics console for 3 consecutive days, the real-time statistics service will be suspended; real-time statistics will be started within 1 hour after logging in again. This suspension does not affect the daily report and does not affect the overall data accuracy.
- 如果开发者连续1个月不登录uni统计控制台，则暂停数据上报功能。再次登录后点击按钮恢复数据上报。暂停前系统会发送提醒邮件给开发者。暂停期间，数据不再记录，历史数据不受影响。恢复后，暂停期间的数据也无法恢复。
- If the developer does not log in to the uni statistics console for 1 month, the data reporting function will be suspended. After logging in again, click the button to resume data reporting. The system will send a reminder email to the developer before pausing. During the suspension period, data is no longer recorded, and historical data is not affected. After resuming, the data during the suspension period cannot be recovered either.

## 常见问题 
## common problem 

1. 后台数据一直显示 0 ，看不到数据上报
1. The background data always shows 0, and the data report cannot be seen
- 请检查 `manifest.json` 是否配置 uni 统计为开启
- Please check if `manifest.json` is configured with uni statistics enabled
- 如已经配置请检查 `HBuilderX` 是否升级到 `2.2.3` 版本以上，`CLI` 方式是否升级到最新。
- If already configured, please check whether `HBuilderX` has been upgraded to `2.2.3` or above, and whether `CLI` has been upgraded to the latest version.
- 请确认小程序的服务器域名名单中加入了`tongji.dcloud.io`
- Please make sure that `tongji.dcloud.io` is added to the server domain name list of the applet
- 请确认带有uni统计的新版本已经发布到手机上并且启动运行
- Please make sure the new version with uni stats has been released to the phone and is up and running
- 统计数据有几十分钟的延迟，如果是刚配上，请等一会再刷新报表
- There is a delay of dozens of minutes for statistical data. If it is just added, please wait for a while before refreshing the report
- 应用需发布后才有数据，运行期不上报数据
- The application needs to be published to have data, and the data will not be reported during the running period
- 当日实时统计显示逻辑：3天内未登录统计后台的应用不会处理当日实时统计；再次登录后1小时内会开始进行实时统计。
- Display logic of real-time statistics of the day: Apps that have not logged in to the statistics background within 3 days will not process real-time statistics of the day; real-time statistics will be started within 1 hour after logging in again.
2. 自定义事件怎么用 
2. How to use custom events
 使用 `uni.report()` API 上报数据，详见[自定义事件说明](https://ask.dcloud.net.cn/article/36304)
 Use the `uni.report()` API to report data, see [Custom Event Description](https://ask.dcloud.net.cn/article/36304)

3. 内容统计是什么/ 页面规则怎么配置
3. What is content statistics / how to configure page rules
 内容统计是uni统计的特色功能之一，是内容详情页的访问统计，详见[内容统计说明](https://ask.dcloud.net.cn/article/36299)
 Content statistics is one of the characteristic functions of uni statistics. It is the access statistics of the content details page. For details, please refer to [Content Statistics Description](https://ask.dcloud.net.cn/article/36299)

4. 不支持导入老数据合并统计。uni统计需要自开通上线后才有数据
4. Importing old data and combining statistics is not supported. uni statistics need to have data after it is opened and online

5. 售卖用户数据，或未经用户同意共享数据给第三方，属于违法行为，DCloud严格遵守国家法律要求，uni统计可安心使用。
5. It is illegal to sell user data or share data to a third party without the user's consent. DCloud strictly complies with national legal requirements, and uni statistics can be used with peace of mind.