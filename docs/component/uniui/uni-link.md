> **组件名：uni-link**
> 代码块： `uLink`
> 
>  [点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-link)

uni-link是一个外部网页超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。

### 基本用法

在 ``template`` 中使用组件

```html
<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
```

## API

### Link Props

|属性名				|类型		|默认值										|说明							|
|:-:					|:-:		|:-:										|:-:							|
|href					|String	|-											|链接地址						|
|text					|String	|-											|显示文字						|
|download     |String |-                      |H5平台下载文件名        |
|showUnderLine|Boolean|true										|是否显示下划线					|
|copyTips			|String	|已自动复制网址，请在手机浏览器里粘贴该网址	|在小程序端复制链接时的提示语	|
|color				|String	|#999999								|链接文字颜色					|
|fontSize			|String	|14											|链接文字大小，单位px			|


### Link Slots

|名称|说明|					
|:-:|:-:|						
|default|自定义内容，回覆盖原有的内容显示（仅 vue 支持）|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/link/link](https://hellouniapp.dcloud.net.cn/pages/extUI/link/link)