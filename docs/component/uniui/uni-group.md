
分组组件可用于将组件分组，添加间隔，以产生明显的区块，组件名：``uni-group``，代码块： uGroup。


> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> 



### 基本用法

在 ``template`` 中使用组件

```html
<uni-group title="分组1" top="20">
    <view>分组1 的内容</view>
    <view>分组1 的内容</view>
</uni-group>

<uni-group title="分组2">
    <view>分组2 的内容</view>
    <view>分组2 的内容</view>
</uni-group>
```
## API
### Group Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|title|String|-|主标题|
|top|Number|-|分组间隔|
|mode|String|''|模式 ，card 为卡片模式|


## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/group/group](https://hellouniapp.dcloud.net.cn/pages/extUI/group/group)