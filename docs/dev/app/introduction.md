DCloud appid（以后简称 appid） 是 DCloud 应用的唯一标识，在 DCloud 提供的所有服务中，都会以 appid 来标记一个应用。

::: warning 注意
这和各家小程序的appid以及Apple的appid（其实就是iOS的包名）是不同的体系。
:::

本文将介绍DCloud appid 的各种使用场景。

## 管理 appid
### 创建应用
- 在 HBuilderX 中创建项目时，HBuilderX 会自动联网生成 appid, 并将该 appid 保存在 manifest 文件中的 `appid` 字段；
- 登录[开发者中心](https://dev.dcloud.net.cn)，也可以创建 uniapp、5+app 等类型应用的 appid；
- wap2app 项目比较特殊，wap2app 项目的 appid 是在 HBuilderX 中本地生成的，需要提交云打包后，appid 才会同步到服务端；如果在开发者中心的应用列表中查找不到 wap2app 项目的 appid，提交一次云打包即可。


**注意**：以下场景不会自动生成 appid，开发者可以登录开发者中心自行创建。
- 使用离线打包
- 使用 cli 创建 uniapp 项目

创建者即为该应用的所有者。一个应用只能有一个所有者，但可以设置多个项目成员。

### 查看应用列表
登录 [开发者中心](https://dev.dcloud.net.cn) 可以查看自己创建的应用列表。

### 增加项目成员（协作者）
1个应用有一个管理员，但可以有多名协作开发者。
在使用app云端打包时，协作开发者也有权对该Appid进行云打包。
 [如何授权应用（设置协作者）](add-member.md) 

### 转让应用
应用的所有者可以将应用转让给他人。常见于员工离职和外包商转让给甲方。
 [如何转让应用](transfer.md)

## 使用场景
- 云打包
	- DCloud 根据 appid 来判断用户是否有权限进行云打包。既不是所有者、又不是协作者，就无法打包；
	- 打包后的原生应用根据 appid 来管理本地资源。每个appid有独立的沙盒，存储是隔离的；
	- 热更新（wgt升级）通过 appid 来覆盖资源
- uni统计
- 广告
- uni push
- 制作发行页面
- 用户反馈
- 购买原生插件
- uni云端一体安全网络

## 修改 appid@modify-appid
- 在 HBuilderX 打开 manifest.json，在“基础配置”界面点击“重新获取”，可以生成新的 appid。 **注意：** 项目名称不变时，不会分配新的 appid。
- 通过 manifest.json 源码视图修改 appid，适用于需要将 appid 修改回历史 appid 的场景。

## 修改 appid 将会引发的问题@modify-appid-impact
- 使用新 appid 打包的应用在更新时，会丢失老版应用本地缓存的数据，包括plus.storage、uni.setStorage保存的数据、plus.io保存的文件、plus.sqlite的数据等
- 无法使用新的 appid 进行 wgt 升级
- 开发者中心提供的相关云服务会出现多个应用，如统计数据、广告、用户反馈数据等。
- uni push需要重新配置，否则无法推送
- 如果在插件市场购买过原生插件，这些插件会绑定appid。修改 appid 后无法继续使用插件，需要重新购买。 
- 已开通uniad增强广告的应用，修改 appid 后会导致广告无法正常展示。
- uni云端一体安全网络将无法使用

## 找回appid@retrieve
如遇员工离职，项目未正常交接且员工无法联系时，可以通过以下方式找回 appid：
- wap2app 项目：如果开发者发现自己创建 wap2app 项目 appid 被其他人占用时，可以登录开发者中心，点击“wap2app应用认领”完成自助认领。认领前请先确认是否是由同事或其他认识的人所创建，如由同事创建也可通过转让应用的方式将 appid 转移到对应账号下。
- 5+/uni-app 项目：发送邮件到`service@dcloud.io`，请客服人员帮忙找回 appid。如应用所有者为企业，邮件中需要附以下资料：
  - 应用软著
  - 应用上架地址
  - 企业营业执照
  - 应用找回声明（内容自拟，加盖公司公章）