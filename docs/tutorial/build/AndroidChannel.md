# Android 自定义渠道包
# Android Custom Channel Pack

## 云打包如何打渠道包
## Cloud packaging how to package channel

选中项目 -->菜单发行-原生App-云打包，进入打包窗口。
Select the project --> Menu Release-Native App-Cloud Packaging to enter the packaging window.

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/android_channel_1.png)

如上图所示，
As shown in FIG,

HBuilderX默认提供 `7`  个渠道（`Google`、`360`、`小米`、`华为`、`应用宝`、`vivo`、`oppo`），更多可以在`manifest.json`文件中【源码视图】进行配置。
HBuilderX provides `7` channels by default (`Google`, `360`, `Xiaomi`, `Huawei`, `Apppo`, `vivo`, `oppo`), more can be found in the `manifest.json` file [Source view] to configure.

| 默认渠道     | 渠道标识ID |
| Default Channel | Channel ID |
| ------------ | -------- |
| GooglePlay   | google   |
| 应用宝       | yyb      |
| App Store | yyb |
| 360应用市场  | 360      |
| 360 App Market | 360 |
| 华为应用商店 | huawei   |
| Huawei App Store | huawei |
| 小米应用商店 | xiaomi   |
| Xiaomi App Store | xiaomi |
| vivo应用商店 | vivo|
| vivo App Store | vivo|
| oppo应用商店 |  oppo  |
| oppo app store | oppo |

**注意：提交谷歌应用市场（Google Play）时一定要将渠道标识设置为google，即一定要选择打包界面里的google渠道，否则会无法提交到play store**
**Note: When submitting to Google Play, you must set the channel ID to google, that is, you must select the google channel in the packaging interface, otherwise you will not be able to submit to the play store**

## 如何自定义渠道？
## How to customize channels?

默认的渠道数量不够使，想要更多渠道？
The default number of channels is not enough, want more channels?
在manifest.json【源码视图】中， `根节点`增加`channel_list`字段. 
In manifest.json [source view], add the `channel_list` field to the `root node`.

注意是根节点
Note that the root node

```json
{
	"channel_list":[
		{
			"id":"",
			"name":""
		}
	]
}
```

比如：
for example:

```json
{
	"channel_list":[
		{
			"id":"chuizi",
			"name":"锤子应用市场"
		}，
               {
			"id":"meizu",
			"name":"魅族应用市场"
		}
	]
}
```
**配置后会在上面的云端打包界面显示自定义j渠道，提交云端打包时需要勾选才能生效**
**After configuration, the custom j channel will be displayed on the cloud packaging interface above, and you need to check it when submitting cloud packaging to take effect**

## 离线打包的配置方法
## Configuration method of offline packaging

下载最新的sdk，在Android项目的Androidmanifest.xml中的application节点下添加如下内容
Download the latest sdk and add the following content under the application node in the Androidmanifest.xml of the Android project
```html
<meta-data android:name="DCLOUD_STREAMAPP_CHANNEL"  android:value="{applicationId}|{appid}|{adid}|{channel}"/>
```

android:value值由四个字段组成，使用‘|’符号分割，各字段说明：
The android:value value consists of four fields, which are separated by the '|' symbol. The description of each field:
- applicationId 包名，对应Android项目中build.gradle中的applicationId
- applicationId package name, corresponding to applicationId in build.gradle in Android project
- appid 应用标识，对应5+或uni-app项目manifest.json中appid
- appid application ID, corresponding to appid in manifest.json of 5+ or uni-app project
- adid DCloud的广告标识，开通广告后可在dev.dcloud.net.cn获取，如果没有开通广告，设置值为即可
- Adid DCloud's advertisement logo, which can be obtained at dev.dcloud.net.cn after the advertisement is activated. If the advertisement is not activated, set the value to the value.
- channel 渠道标识，**注意：提交谷歌应用市场（Google Play）时一定要将渠道标识设置为google**
- channel channel ID, **Note: When submitting to Google Play, be sure to set the channel ID to google**

例如：
E.g:
```html
<meta-data
            android:name="DCLOUD_STREAMAPP_CHANNEL"
            android:value="io.dcloud.HBuilder|HBuilder|0123456789|google" />
```

[Android平台本地离线打包渠道相关配置](https://ask.dcloud.net.cn/article/508#channel)
[Related configuration of local offline packaging channel on Android platform](https://ask.dcloud.net.cn/article/508#channel)
[iOS平台本地离线打包渠道相关配置](https://ask.dcloud.net.cn/article/41#channel)
[iOS platform local offline packaging channel related configuration](https://ask.dcloud.net.cn/article/41#channel)

## 手机端获取渠道信息的js api
## js api for obtaining channel information on the mobile phone

[推广渠道标识](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.channel)
[Promotion channel identification](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.channel)

```js
plus.runtime.channel 
```

注意：HBuilder 2.0版本此API有bug，请升级到更新版
Note: HBuilder 2.0 version has bugs in this API, please upgrade to a newer version

这个API主要用于自定义统计，如果是使用DCloud的统计，无需专门写API。具体见下。
This API is mainly used for custom statistics. If you use DCloud statistics, you do not need to write an API. See below for details.

## uni-app如何在uni统计后台查看渠道数据
## uni-app how to view channel data in uni statistics background

登录uni统计官网[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)。
Log in to the official website of uni statistics [https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn).

在左侧导航点击“渠道/场景值分析 - 渠道（app）”，即可查看。
Click "Channel/Scenario Value Analysis - Channel (app)" in the left navigation to view.

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/android_channel_2.png)

在留存统计等报表中，也可以筛选渠道查看。
In reports such as retention statistics, you can also filter channels to view.

## 5+App如何在DCloud统计后台查看渠道数据
## 5+How to view channel data in DCloud statistics background

如果你的App不是uni-app，而是5+或wap2app。那么无法使用uni统计。此时可登录[DCloud开发者中心](http://dev.dcloud.net.cn)查看应用的基本统计数据。
If your App is not uni-app, but 5+ or wap2app. Then uni stats cannot be used. At this point, you can log in to the [DCloud Developer Center](http://dev.dcloud.net.cn) to view the basic statistics of the application.

首页会展示所有已创建的应用列表，点击应用名称进入应用详情，点击可以『5+APP运营』查看该应用的『日活趋势』。
The homepage will display a list of all created applications, click the application name to enter the application details, and click "5+APP operation" to view the "daily activity trend" of the application.

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/applist.png)


包含渠道信息的应用，左上角选择渠道，即可查看对应渠道的运营统计数据。
For apps that contain channel information, select a channel in the upper left corner to view the operation statistics of the corresponding channel.

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/qudao.png)

**Tips：**

- 5+App的基本统计，当日的数据，次日才会出统计结果。
- 5+App's basic statistics, the data of the day, the statistical results will be released the next day.
- 有用户使用且统计到有效数据，才可以按相应的渠道区分。
- Only when there are users and valid data is collected, it can be distinguished by corresponding channels.
- 目前需要一个渠道一个渠道打包，云打包暂时无法批量打多个渠道包出来。
- Currently, one channel and one channel are required for packaging, and cloud packaging cannot be packaged through multiple channels in batches for the time being.
- 本文的渠道标记处理的是DCloud统计后台，如使用友盟统计，需要在友盟的sdk配置里单独配
- The channel tag in this article deals with the DCloud statistics background. If you use Umeng statistics, you need to configure it separately in Umeng's sdk configuration