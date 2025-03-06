## icon

图标。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√(2.2.3+)|√|√|√|√|√|√|√|√|√|√|√|

<!-- UNIAPPCOMJSON.icon.compatibility -->

**Tips**

* 由于 icon 组件各端表现存在差异，可以通过使用 [字体图标](/tutorial/syntax-css.md#字体图标) 的方式来弥补各端差异。

**属性说明**

|属性名|类型|默认值|说明|
|---|---|---|---|
|type|String||icon的类型|
|size|Number|23|icon的大小，单位px|
|color|Color||icon的颜色，同css的color|

各平台 type 有效值说明：

|平台|type 有效值|
|:-:|:-:|
|App、H5、微信小程序、QQ小程序|success, success_no_circle, info, warn, waiting, cancel, download, search, clear|
|支付宝小程序|info, warn, waiting, cancel, download, search, clear, success, success_no_circle,loading|
|百度小程序|success, info, warn, waiting, success_no_circle, clear, search, personal, setting, top, close, cancel, download, checkboxSelected, radioSelected, radioUnselect|

<!-- UNIAPPCOMJSON.icon.attribute -->

**示例**
```html
<view class="item" v-for="(value,index) in iconType" :key="index">
    <icon :type="value" size="26"/>
    <text>{{value}}</text>
</view>
```
```javascript
export default {
    data() {
        return {
            iconType: ['success']
        }
    },
    onLoad() {
        // #ifdef APP-PLUS|| MP-WEIXIN
        this.iconType = ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search','clear']
        // #endif
        // #ifdef MP-ALIPAY
        this.iconType = ['info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear', 'success', 'success_no_circle', 'loading']
        // #endif
        // #ifdef MP-BAIDU
        this.iconType = ['success', 'info', 'warn', 'waiting', 'success_no_circle', 'clear', 'search', 'personal', 'setting', 'top', 'close', 'cancel', 'download', 'checkboxSelected', 'radioSelected', 'radioUnselect']
        // #endif
    }
}

```

**效果展示**

<div style="display:flex;align-items: flex-start;justify-content: center;flex-wrap: wrap;">
		<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon1.png" width="100" style="margin-right:20px;"/>
		<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon2.png" width="100"/>
</div>

<!-- UNIAPPCOMJSON.icon.reference -->
