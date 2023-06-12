# uni-ad管理后台更新说明

## 2023-05-24
### 激励视频支持配置云对象

[云对象](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html)

## 2023-05-10
### uni-ad 管理后台页面调整通知

app端上线[uniMP激励视频](https://uniapp.dcloud.net.cn/uni-ad/unimp.html)后，实际上打破了基础广告和增强广告的分类方式。

因为uniMP激励视频不需要打包第三方广告sdk，没有上架和软著的要求，基础广告也可以使用。

由此DCloud决定取消基础广告和增强广告的概念。

再加上之前上线的小程序广告也引发了一些混乱，比如开通小程序广告之前必须先开通app基础广告。

所以本次更新对uni-ad的概念进行重新梳理，对管理后台进行大改版。

改版后，取消`App 基础广告`、`App 增强广告`的分类概念。

一级分类是平台，即App广告、小程序广告、web广告。

然后App广告里，二级分类是广告源提供方，比如DCloud快捷广告、优量汇、穿山甲...

除了分类调整，还优化了其他ui细节，具体见下。

### 广告管理菜单调整

相对原管理后台，优化后的管理后台将 `App 基础广告`、`App 增强广告` 、`App 广告个性化配置` 菜单合并为 `App 广告` ，将 `App 增强广告开屏管理`选项独立于页面内。

**优化前页面：**
![](https://qiniu-web-assets.dcloud.net.cn/uniad/doc/1.jpg)

**优化后页面：**
- 合并`App 基础广告`、`App 增强广告`为 `App 广告`
- 将 `App 广告个性化配置` 移动到  `App 广告`内，作为配置项

![](https://qiniu-web-assets.dcloud.net.cn/uniad/doc/4.jpg)

- 将 `App 增强广告开屏管理` 选项独立于页面内，与广告管理菜单和广告位列表同级

![](https://qiniu-web-assets.dcloud.net.cn/uniad/doc/2.jpg)

### 广告平台开启关闭调整

原管理后台，广告平台开启关闭按钮，位于详情页面最顶部单独显示，不太好对应到具体平台，现对其做出处理，移动到对应的广告平台下，直观的开启关闭对应平台。

**优化前页面：**

![](https://qiniu-web-assets.dcloud.net.cn/uniad/doc/3.jpg)

**优化后页面：**
- 开启关闭按钮移动到 `App 广告` 下对应平台的 `广告状态` 处
- 点击 `修改状态`，对广告平台进行开启与关闭操作

![](https://qiniu-web-assets.dcloud.net.cn/uniad/doc/5.png)

<img width="500px" src="https://qiniu-web-assets.dcloud.net.cn/uniad/doc/6.jpg">

### 基础广告调整
将基础广告重命名为 `DCloud快捷广告`，并将广告类型 `开屏`、`悬浮红包` 移动到对应功能下，取消 `PUSH`和`广告源策略`的配置

**优化前页面：**

![](https://qiniu-web-assets.dcloud.net.cn/uniad/doc/7.jpg)

**优化后页面：**

- 将原基础广告类型 `开屏` 移动到 `App 开屏广告管理` 中，广告平台为 `DCloud快捷广告`

![](https://qiniu-web-assets.dcloud.net.cn/uniad/doc/20230511151715.jpg)

- 将原基础广告类型 `悬浮红包` 移动到 `App 三方广告应用内列表` 中，广告位类型为 `悬浮红包`，始终固定在首位，只允许`启用\停用`，无需配置

![](https://qiniu-web-assets.dcloud.net.cn/uniad/doc/8.jpg)

### DCloud快捷广告-uniMP激励视频广告

详见[文档](https://uniapp.dcloud.net.cn/uni-ad/unimp.html)

### 数据收益调整
数据收益中，将`基础广告`、`APP增强广告`合并为 `APP广告` ，`APP增强广告`更名为`三方广告`并置于 `App广告`选项下方的筛选项中

**优化前页面：**
![](https://qiniu-web-assets.dcloud.net.cn/uniad/doc/data-old.png)

**优化后页面：**
- `基础广告`、`APP增强广告`合并为 `APP广告`
- `基础广告`更名为`DCloud快捷广告`， `APP增强广告`更名为`三方广告`
- `DCloud快捷广告` 与 `三方广告` 选择放置于`APP广告`选项下方

![](https://qiniu-web-assets.dcloud.net.cn/uniad/doc/data-new.png)