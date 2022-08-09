# Android 自定义渠道包

## 云打包如何打渠道包

选中项目 -->菜单发行-原生App-云打包，进入打包窗口。

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/android_channel_1.png)

如上图所示，

HBuilderX默认提供 `7`  个渠道（`Google`、`360`、`小米`、`华为`、`应用宝`、`vivo`、`oppo`），更多可以在`manifest.json`文件中【源码视图】进行配置。

| 默认渠道     | 渠道标识ID |
| ------------ | -------- |
| GooglePlay   | google   |
| 应用宝       | yyb      |
| 360应用市场  | 360      |
| 华为应用商店 | huawei   |
| 小米应用商店 | xiaomi   |
| vivo应用商店 | vivo|
| oppo应用商店 |  oppo  |

**注意：提交谷歌应用市场（Google Play）时一定要将渠道标识设置为google，即一定要选择打包界面里的google渠道，否则会无法提交到play store**

## 如何自定义渠道？

默认的渠道数量不够使，想要更多渠道？
在manifest.json【源码视图】中， `根节点`增加`channel_list`字段. 

注意是根节点

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

## 离线打包的配置方法

下载最新的sdk，在Android项目的Androidmanifest.xml中的application节点下添加如下内容
```html
<meta-data android:name="DCLOUD_STREAMAPP_CHANNEL"  android:value="{applicationId}|{appid}|{adid}|{channel}"/>
```

android:value值由四个字段组成，使用‘|’符号分割，各字段说明：
- applicationId 包名，对应Android项目中build.gradle中的applicationId
- appid 应用标识，对应5+或uni-app项目manifest.json中appid
- adid DCloud的广告标识，开通广告后可在dev.dcloud.net.cn获取，如果没有开通广告，设置值为即可
- channel 渠道标识，**注意：提交谷歌应用市场（Google Play）时一定要将渠道标识设置为google**

例如：
```html
<meta-data
            android:name="DCLOUD_STREAMAPP_CHANNEL"
            android:value="io.dcloud.HBuilder|HBuilder|0123456789|google" />
```

[Android平台本地离线打包渠道相关配置](https://ask.dcloud.net.cn/article/508#channel)
[iOS平台本地离线打包渠道相关配置](https://ask.dcloud.net.cn/article/41#channel)

## 手机端获取渠道信息的js api

[推广渠道标识](http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.channel)

```js
plus.runtime.channel 
```

注意：HBuilder 2.0版本此API有bug，请升级到更新版

这个API主要用于自定义统计，如果是使用DCloud的统计，无需专门写API。具体见下。

## uni-app如何在uni统计后台查看渠道数据

登录uni统计官网[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)。

在左侧导航点击“渠道/场景值分析 - 渠道（app）”，即可查看。

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/android_channel_2.png)

在留存统计等报表中，也可以筛选渠道查看。

## 5+App如何在DCloud统计后台查看渠道数据

如果你的App不是uni-app，而是5+或wap2app。那么无法使用uni统计。此时可登录[DCloud开发者中心](http://dev.dcloud.net.cn)查看应用的基本统计数据。

首页会展示所有已创建的应用列表，点击应用名称进入应用详情，点击可以『5+APP运营』查看该应用的『日活趋势』。

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/applist.png)


包含渠道信息的应用，左上角选择渠道，即可查看对应渠道的运营统计数据。

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/qudao.png)

**Tips：**

- 5+App的基本统计，当日的数据，次日才会出统计结果。
- 有用户使用且统计到有效数据，才可以按相应的渠道区分。
- 目前需要一个渠道一个渠道打包，云打包暂时无法批量打多个渠道包出来。
- 本文的渠道标记处理的是DCloud统计后台，如使用友盟统计，需要在友盟的sdk配置里单独配